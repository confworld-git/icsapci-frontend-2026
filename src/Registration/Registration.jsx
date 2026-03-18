import React, { useEffect, useRef, useState } from "react";
import "./Registration.css";
import logo from "/logo.png";
import reg from "../assets/reg-back.png";
import step1 from "../assets/step-one.png";
import step2 from "../assets/step2.png";
import step3 from "../assets/step3.png";
import step4 from "../assets/step4.png";
import { toaster } from "evergreen-ui";
import { useNavigate } from "react-router-dom";
import { FaLink } from "react-icons/fa6";
import Crack from "./Crack.jsx";
import { FaRegCircleCheck } from "react-icons/fa6";
import axios from "axios";
import { calculatePricing } from "../utils/pricingCalculator.js";
import JournalSupport from "./JournalSupport.jsx";
import Addons from "./Addons.jsx";

const Registration = () => {
  const navigate = useNavigate();
  const RegistrationFeeRef = useRef();
  const [selectedFee, setSelectedFee] = useState(null);
  const [tax, setTax] = useState(0);
  const [totalFee, setTotal] = useState(0);
  const [participantCategory, setParticipantCategory] = useState("");

  // ── Journal & Addons state ──────────────────────────────────────
  const [selectedJournal, setSelectedJournal] = useState(null);
  const [selectedAddons, setSelectedAddons] = useState([]);

  // Membership & coupon state
  const [hasMembership, setHasMembership] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponValidating, setCouponValidating] = useState(false);
  const [pricing, setPricing] = useState(null);

  // Reset journal & addons when fee changes
  useEffect(() => {
    setSelectedJournal(null);
    setSelectedAddons([]);
  }, [selectedFee]);

  // Recalculate when journal or addons change
  useEffect(() => {
    if (selectedFee) {
      updatePricing(selectedFee, participantCategory, hasMembership, appliedCoupon);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedJournal, selectedAddons]);

  const handleFeeChange = (e) => {
    const fee = parseFloat(e.target.value);
    setSelectedFee(fee);
    updatePricing(fee, participantCategory, hasMembership, appliedCoupon);
  };

  const updatePricing = (amount, category, membership, coupon) => {
    if (!amount) return;

    // Add journal and addons on top of the base fee
    const journalAmount = selectedJournal?.specialPrice || 0;
    const addonsAmount = selectedAddons.reduce((sum, a) => sum + a.price, 0);
    const combinedBase = amount + journalAmount + addonsAmount;

    const calculations = calculatePricing({
      baseAmount: combinedBase,
      participantCategory: category,
      hasMembership: membership,
      hasCoupon: !!coupon,
      currency: "USD",
    });

    // Store breakdown extras
    calculations.registrationBase = amount;
    calculations.journalAmount = journalAmount;
    calculations.addonsAmount = addonsAmount;

    setPricing(calculations);
    setTotal(calculations.total);
    setTax(calculations.bankTax);
  };

  const handleMembershipToggle = () => {
    const newStatus = !hasMembership;
    setHasMembership(newStatus);
    if (selectedFee) {
      updatePricing(selectedFee, participantCategory, newStatus, appliedCoupon);
    }
  };

  const handleCouponApply = async () => {
    if (!couponCode.trim()) {
      toaster.warning("Please enter a coupon code");
      return;
    }
    if (!selectedFee) {
      toaster.warning("Please select a registration fee first");
      return;
    }
    setCouponValidating(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_LINK}api/coupons/validate`,
        { code: couponCode }
      );
      if (response.data.success) {
        setAppliedCoupon(response.data.coupon);
        toaster.success(`Coupon "${couponCode}" applied successfully!`);
        updatePricing(selectedFee, participantCategory, hasMembership, response.data.coupon);
      }
    } catch (error) {
      toaster.danger(error.response?.data?.message || "Invalid coupon code");
      setAppliedCoupon(null);
    } finally {
      setCouponValidating(false);
    }
  };

  const handleCouponRemove = () => {
    setCouponCode("");
    setAppliedCoupon(null);
    if (selectedFee) {
      updatePricing(selectedFee, participantCategory, hasMembership, null);
    }
  };

  const handleParticipantCategoryChange = (e) => {
    const category = e.target.value;
    setParticipantCategory(category);
    if (selectedFee) {
      updatePricing(selectedFee, category, hasMembership, appliedCoupon);
    }
  };

  const currency = "USD";

  const paymentHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(RegistrationFeeRef.current);

    if (!selectedFee || !pricing) {
      toaster.warning("A fee must be selected.");
      return;
    }

    const formValues = {};
    formData.forEach((value, key) => {
      formValues[key] = value;
    });

    const requiredFields = [
      "Title", "first_name", "last_name", "certificate_name",
      "DOB", "nationality", "department", "institution",
      "number", "email", "participant_category",
      "presentation_Category", "presentation_Type",
    ];

    for (const field of requiredFields) {
      if (!formValues[field] || formValues[field].trim() === "") {
        toaster.warning(`${field.replace(/_/g, " ")} is required.`);
        return;
      }
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_LINK}order`, {
        method: "POST",
        body: JSON.stringify({
          option: {
            amount: pricing.total,
          },
          FormData: formValues,
          pricingData: {
            // Base fee (fee table selection only)
            baseAmount: selectedFee,

            // Journal publication support
            journalSupport: selectedJournal
              ? {
                  tier: selectedJournal.tier,
                  package: selectedJournal.package,
                  amount: selectedJournal.specialPrice,
                }
              : null,
            journalAmount: pricing.journalAmount || 0,

            // Add-ons
            addons: selectedAddons.map((a) => ({
              label: a.label,
              sublabel: a.sublabel,
              amount: a.price,
            })),
            addonsAmount: pricing.addonsAmount || 0,

            // Discounts (applied to combined total)
            finalAmount: pricing.finalAmount,
            hasMembership,
            membershipFee: pricing.membershipFee,
            couponCode: appliedCoupon?.code || null,
            couponDiscount: pricing.couponDiscount,
            membershipDiscount: pricing.membershipDiscount,
          },
        }),
        headers: { "Content-Type": "application/json" },
      });

      const order = await response.json();

      var options = {
        key: `${import.meta.env.VITE_RAZOR_KEY}`,
        amount: order.amount,
        currency,
        name: "Confworld Educational Research and Development Association (CERADA)",
        description: "Transaction",
        image: logo,
        order_id: order.id,
        handler: async function (response) {
          const body = { ...response, Order_ID: order.id };
          const validateRes = await fetch(
            `${import.meta.env.VITE_API_LINK}order/validate`,
            {
              method: "POST",
              body: JSON.stringify(body),
              headers: { "Content-Type": "application/json" },
            }
          );
          await validateRes.json();
          RegistrationFeeRef.current.reset();
          navigate("/Payment_Success");
        },
        prefill: {
          name: formValues.first_name,
          email: formValues.email,
          contact: formValues.number,
        },
        notes: { address: "Razorpay Corporate Office" },
        theme: { color: "#8BB314" },
        modal: {
          ondismiss: async () => {
            const validateRes = await fetch(
              `${import.meta.env.VITE_API_LINK}order/cancelation`,
              {
                method: "POST",
                body: JSON.stringify({ Order_ID: order.id }),
                headers: { "Content-Type": "application/json" },
              }
            );
            await validateRes.json();
            toaster.danger("Payment canceled.");
          },
        },
      };

      var rzp1 = new window.Razorpay(options);
      rzp1.on("payment.failed", function (response) {
        alert(response.error.description);
        alert(response.error.reason);
      });
      rzp1.open();
    } catch (error) {
      console.error("Payment processing failed:", error);
      toaster.danger("Payment processing failed. Please try again.");
    }
  };

  return (
    <div className="register">
      <img data-aos="fade-up" src={reg} alt="" />
      <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        Registration
      </h1>
      <p data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        Welcome to the ICSAPCI - 2026 registration page. Secure your spot at
        this premier conference to connect with global experts, present your
        research and advance your career. Follow the steps below to complete
        your registration.
      </p>
      <h3>
        <marquee>Register now and take advantage of discounted rates.</marquee>
      </h3>

      {/* Available Payment Methods */}
      <section className="available">
        <div data-aos="fade-right">
          <h1>Available Payment methods</h1>
          <li>Online payment using Debit/Credit card</li>
          <li>Net Banking</li>
          <li>Paypal</li>
          <li>Bank transfer (TT)</li>
        </div>
        <p>
          For further assistance contact us{" "}
          <a href="mailto:info@icsap.co.in">info@icsap.co.in</a> and{" "}
          <a href="tel:+91 8072381719">+91 8072381719</a>
        </p>
        <div data-aos="fade-left">
          <h1>Bank Details (For Bank Transfer)</h1>
          <p><span>Beneficiary Name:</span><span>CONFWORLD EDUCATIONAL RESEARCH AND DEVELOPMENT ASSOCIATION</span></p>
          <p><span>Bank Name:</span><span>HDFC Bank</span></p>
          <p><span>Account Number:</span><span>50200097123575</span></p>
          <p><span>IFSC Code:</span><span>HDFC0000124</span></p>
          <p><span>Swift Code:</span><span>HDFCINBBCHE</span></p>
          <p><span>Branch:</span><span>Kilpauk, Chennai, Tamil Nadu, India</span></p>
        </div>
      </section>

      {/* Registration Steps */}
      <h1 data-aos="fade-up">Registration Steps</h1>
      <section className="Registration_steps" data-aos="fade-up">
        <div>
          <div><span>01 Step</span><img src={step1} alt="" /><p>Choose Your Preferred<br />Admittance Category</p></div>
          <div><span>02 Step</span><img src={step2} alt="" /><p>Enter your<br />details in the form.</p></div>
          <div><span>03 Step</span><img src={step3} alt="" /><p>Proceed to<br />Payment Gateway</p></div>
          <div><span>04 Step</span><img src={step4} alt="" /><p>Get an official conference invitation letter.</p></div>
        </div>
      </section>

      {/* Membership claim */}
      <div className="claim-div" data-aos="fade-up">
        <p id="claim">Claim a 5% discount on registration with CERADA's exclusive Premium Membership</p>
        <a href="https://confworld.org/Student-Membership" target="_blank"><FaLink /><b>Student</b></a>
        <a href="https://confworld.org/Professional-Membership" target="_blank"><FaLink /><b>Professional</b></a>
      </div>

      {/* Group Discount */}
      <div className="group_discount" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <div className="coupon-card">
          <h1>Group Discount</h1>
          <Crack />
          <li><FaRegCircleCheck />You qualify for a discounted registration fee if you are a group of 5 members or more individuals or if you are a co-author of a paper presentation.</li>
          <li><FaRegCircleCheck />If your group consists of more than 10 members, please reach out to our Academic Partnership Team to discuss a higher discount percentage on the registration fee.</li>
          <div className="circle1"></div>
          <div className="circle2"></div>
        </div>
      </div>

      {/* Multiple Papers */}
      <div className="group_discount" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <div className="coupon-card">
          <h1>If you are presenting more than one paper</h1>
          <Crack />
          <li><FaRegCircleCheck />An author may submit and present a maximum of 3 papers at the conference.</li>
          <li><FaRegCircleCheck />If you are presenting more than one paper at the conference, full payment is required for the first paper.</li>
          <li><FaRegCircleCheck />If other papers are oral or poster presentations, an additional fee of 150 USD will be charged for each paper.</li>
          <li><FaRegCircleCheck />If any of the papers requires scopus publication then you have to pay the publication fee for each paper.</li>
          <li><FaRegCircleCheck />If you have more than 3 papers, the additional paper can be presented by a co-authors on full registration.</li>
          <li><FaRegCircleCheck />Confirmation on the number of papers should be given to the Conference co-ordinator 3 weeks prior to the final payment deadline.</li>
          <div className="circle1"></div>
          <div className="circle2"></div>
        </div>
      </div>

      {/* ── STEP 1: Registration Fees Table ─────────────────────── */}
      <h1 id="reg-fee" data-aos="fade-up">Registration Fees</h1>
      <p data-aos="fade-up" style={{ color: "#FF6347", fontWeight: "600" }}>
        *Note: Additional charges may apply for Scopus publication (T&C Apply)
      </p>
      <section className="select-fee">
        <div data-aos="fade-right" data-aos-anchor-placement="top-bottom">
          <h1>Physical (Onsite) Participants</h1>
          <ul>
            <li>Categories</li>
            <li>Early Bird (USD)</li>
            <li>Final<br />( USD)</li>
            <li>On Spot (USD)</li>
          </ul>
          <ul>
            <li>Academicians / Delegates / Research scholars / PhD Candidates</li>
            <li className="line-through text-gray-400"><input type="radio" name="fee" value="380" disabled onChange={handleFeeChange} /> 380</li>
            <li><input type="radio" name="fee" value="420" onChange={handleFeeChange} /> 420</li>
            <li><input type="radio" name="fee" value="500" onChange={handleFeeChange} /> 500</li>
          </ul>
          <ul>
            <li>UG/PG Students</li>
            <li className="line-through text-gray-400"><input type="radio" name="fee" value="360" disabled onChange={handleFeeChange} /> 360</li>
            <li><input type="radio" name="fee" value="400" onChange={handleFeeChange} /> 400</li>
            <li><input type="radio" name="fee" value="450" onChange={handleFeeChange} /> 450</li>
          </ul>
          <ul>
            <li>Non-Presenter/Attendee/Listener</li>
            <li className="line-through text-gray-400"><input type="radio" name="fee" value="230" disabled onChange={handleFeeChange} /> 230</li>
            <li><input type="radio" name="fee" value="250" onChange={handleFeeChange} /> 250</li>
            <li><input type="radio" name="fee" value="350" onChange={handleFeeChange} /> 350</li>
          </ul>
         
          
          
        </div>

        <div data-aos="fade-left" data-aos-anchor-placement="top-bottom">
          <h1>Virtual (Online) Participants</h1>
          <ul>
            <li>Categories</li>
            <li>Early Bird (USD)</li>
            <li>Final<br />(USD)</li>
          </ul>
          <ul>
            <li>Academicians / Delegates / Research scholars / PhD Candidates</li>
            <li className="line-through text-gray-400"><input type="radio" name="fee" value="150" disabled onChange={handleFeeChange} /> 150</li>
            <li><input type="radio" name="fee" value="200" onChange={handleFeeChange} /> 200</li>
          </ul>
          <ul>
            <li>UG/PG Students</li>
            <li className="line-through text-gray-400"><input type="radio" name="fee" value="100" disabled onChange={handleFeeChange} /> 100</li>
            <li><input type="radio" name="fee" value="150" onChange={handleFeeChange} /> 150</li>
          </ul>
          <ul>
            <li>Non-Presenter/Attendee/Listener</li>
            <li className="line-through text-gray-400"><input type="radio" name="fee" value="90" disabled onChange={handleFeeChange} /> 90</li>
            <li><input type="radio" name="fee" value="100" onChange={handleFeeChange} /> 100</li>
          </ul>
          
          
        </div>
        <p>*Indicates - UG/PG students (You have to submit a soft copy of your university/college identity card as a proof)</p>
      </section>

      {/* ── STEP 2: Journal Publication Support ─────────────────── */}
        <div className="px-4 md:px-8 lg:px-10 mt-4">
          <JournalSupport
            selectedJournal={selectedJournal}
            setSelectedJournal={setSelectedJournal}
          />
        </div>

      {/* ── STEP 3: Add-ons ─────────────────────────────────────── */}
        <div className="px-4 md:px-8 lg:px-10">
          <Addons
            selectedAddons={selectedAddons}
            setSelectedAddons={setSelectedAddons}
          />
        </div>

      {/* ── STEP 4: Registration Form + Pricing ─────────────────── */}
      <h1 id="reg-title" data-aos="fade-up" className="pt-8">
        Online Registration Form
      </h1>
      <form
        className="registration-reg-form"
        ref={RegistrationFeeRef}
        onSubmit={paymentHandler}
      >
        <section className="registration-reg">
          <div className="reg-row">
            <select className="reg-input title-select" name="Title" defaultValue="">
              <option value="" disabled>Select Title</option>
              <option>Mr</option>
              <option>Ms</option>
              <option>Mrs</option>
              <option>Dr</option>
              <option>Prof</option>
            </select>
          </div>
          <div className="reg-row">
            <input type="text" name="first_name" className="reg-input" placeholder="First Name" required />
          </div>
          <div className="reg-row">
            <input type="text" name="last_name" className="reg-input" placeholder="Last Name" required />
          </div>
          <div className="reg-row">
            <input type="text" name="certificate_name" className="reg-input" placeholder="Certificate Name" required />
          </div>
          <div className="reg-row">
            <input type="date" name="DOB" className="reg-input" placeholder="Date of Birth" max="2020-01-01" required />
          </div>
          <div className="reg-row">
            <input type="text" name="nationality" className="reg-input" placeholder="Nationality" required />
          </div>
          <div className="reg-row">
            <input type="text" name="department" className="reg-input" placeholder="Department" required />
          </div>
          <div className="reg-row">
            <input type="text" name="institution" className="reg-input" placeholder="Institution" required />
          </div>
          <div className="reg-row">
            <input type="tel" name="number" className="reg-input" placeholder="Mobile Number with Country Code" required />
          </div>
          <div className="reg-row">
            <input type="email" name="email" className="reg-input" placeholder="E-mail" required />
          </div>
          <div className="reg-row">
            <select
              className="reg-input participant-category"
              name="participant_category"
              defaultValue=""
              onChange={handleParticipantCategoryChange}
            >
              <option value="" disabled>Select Participant Category</option>
              <option>Academicians</option>
              <option>Delegates</option>
              <option>Research scholars</option>
              <option>Student</option>
            </select>
          </div>
          <div className="reg-row col">
            <span>Presentation Category:</span>
            <div className="radio reg-radio">
              <label><input type="radio" name="presentation_Category" value="oral" className="form-radio" />Oral</label>
              <label><input type="radio" name="presentation_Category" value="poster" className="form-radio" />Poster</label>
            </div>
          </div>
          <div className="reg-row col">
            <span>Presentation Type:</span>
            <div className="radio reg-radio">
              <label><input type="radio" name="presentation_Type" value="Virtual" className="form-radio" />Virtual</label>
              <label><input type="radio" name="presentation_Type" value="Physical" className="form-radio" />Physical</label>
            </div>
          </div>
        </section>

        <div className="cash">
          {/* Membership Section */}
          {selectedFee && (
            <div className="membership-section">
              <div className="membership-header">
                <div>
                  <h3 className="membership-title">
                    Premium Membership ({participantCategory?.toLowerCase().includes("student") ? "15" : "20"} USD)
                  </h3>
                  <p className="membership-desc">Get 5% discount on registration fee</p>
                  <p className="membership-fee">
                    Fee: ${participantCategory?.toLowerCase().includes("student") ? "15" : "20"}
                  </p>
                </div>
                <label className="toggle-switch">
                  <input type="checkbox" checked={hasMembership} onChange={handleMembershipToggle} />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
          )}

          {/* Coupon Section */}
          {selectedFee && (
            <div className="coupon-section">
              <h3 className="coupon-title">Get 5% Discount with a coupon code!</h3>
              {!appliedCoupon ? (
                <div className="coupon-input-group">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                    placeholder="Enter coupon code"
                    className="coupon-input"
                  />
                  <button
                    type="button"
                    onClick={handleCouponApply}
                    disabled={couponValidating}
                    className="coupon-apply-btn"
                  >
                    {couponValidating ? "Validating..." : "Apply"}
                  </button>
                </div>
              ) : (
                <div className="coupon-applied">
                  <div>
                    <p className="coupon-success">✓ Coupon "{appliedCoupon.code}" applied</p>
                    {appliedCoupon.description && (
                      <p className="coupon-desc">{appliedCoupon.description}</p>
                    )}
                  </div>
                  <button type="button" onClick={handleCouponRemove} className="coupon-remove-btn">
                    Remove
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Pricing Breakdown */}
          {pricing && (
            <div className="pricing-breakdown">
              <h3 className="pricing-title">Price Breakdown</h3>

              {/* Base registration fee */}
              <div className="pricing-row">
                <span>Base Registration Fee:</span>
                <span>${pricing.registrationBase ?? pricing.baseAmount}</span>
              </div>

              {/* Journal support row */}
              {pricing.journalAmount > 0 && (
                <div className="pricing-row">
                  <span>Journal Support ({selectedJournal?.tier}):</span>
                  <span>+ ${pricing.journalAmount.toLocaleString()}</span>
                </div>
              )}

              {/* Add-ons row */}
              {pricing.addonsAmount > 0 && (
                <div className="pricing-row">
                  <span>Add-ons ({selectedAddons.length} selected):</span>
                  <span>+ ${pricing.addonsAmount}</span>
                </div>
              )}

              {/* Combined subtotal — only when journal or addons present */}
              {(pricing.journalAmount > 0 || pricing.addonsAmount > 0) && (
                <div className="pricing-row" style={{ borderTop: "1px dashed #e0e0e0", paddingTop: "8px", marginTop: "4px" }}>
                  <span>Combined Subtotal:</span>
                  <span>
                    ${(
                      (pricing.registrationBase ?? pricing.baseAmount) +
                      pricing.journalAmount +
                      pricing.addonsAmount
                    ).toLocaleString()}
                  </span>
                </div>
              )}

              {/* Discounts */}
              {(hasMembership || appliedCoupon) && (
                <>
                  {hasMembership && appliedCoupon ? (
                    <div className="pricing-row discount">
                      <span>Combined Discount (10%):</span>
                      <span>- ${pricing.totalDiscount}</span>
                    </div>
                  ) : (
                    <>
                      {hasMembership && (
                        <div className="pricing-row discount">
                          <span>Membership Discount (5%):</span>
                          <span>- ${pricing.membershipDiscount}</span>
                        </div>
                      )}
                      {appliedCoupon && (
                        <div className="pricing-row discount">
                          <span>Coupon Discount (5%):</span>
                          <span>- ${pricing.couponDiscount}</span>
                        </div>
                      )}
                    </>
                  )}
                </>
              )}

              {hasMembership && (
                <div className="pricing-row">
                  <span>Membership Fee:</span>
                  <span>+ ${pricing.membershipFee}</span>
                </div>
              )}

              <div className="pricing-row subtotal">
                <span>Subtotal:</span>
                <span>${pricing.finalAmount}</span>
              </div>

              <div className="pricing-row">
                <span>Bank Convenience Charge:</span>
                <span>${pricing.bankTax}</span>
              </div>

              <div className="pricing-row total">
                <span>Total Amount:</span>
                <span>${pricing.total}</span>
              </div>

              {(hasMembership || appliedCoupon) && (
                <div className="savings-badge">
                  🎉 You saved ${pricing.totalDiscount.toFixed(2)}!
                </div>
              )}
            </div>
          )}

          <button type="submit" className="form-button">
            Check Out
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;