import React from "react";
import "./Terms.css";
import { IoArrowRedo } from "react-icons/io5";
import { FaHandPointRight } from "react-icons/fa";

const Terms = () => {
  return (
    <div className="policies-container">
      <h1>Terms and Conditions</h1>
      <p>
        <FaHandPointRight /> By registering for the conference, you hereby agree
        with the terms and conditions.
      </p>
      <p>
        <FaHandPointRight /> The organization reserves the right to make
        alterations to the program, date and/or venue at any time without prior
        notice.
      </p>
      <p>
        <FaHandPointRight /> The organization is not responsible for any loss or
        damage as a result of substitution, alteration, postponement or
        cancellation of an event due to causes beyond its control including
        without limitation, force majeure, natural disasters, sabotage,
        accident, trade or industrial disputes, terrorism, strikes or
        hostilities.
      </p>
      <p>
        <FaHandPointRight /> The organization reserves the right and holds the
        sole discretion to cancel any conference at any time in case of any
        unavoidable and unforeseeable circumstances. The organizer will have no
        further liability to the client.
      </p>
      <p>
        <FaHandPointRight /> Registrations remain valid for the event with new
        dates or for future editions if the conference has to be postponed by
        causes beyond organizer control. The refund policy is not applicable to
        this condition.
      </p>
      <p>
        <FaHandPointRight /> In the event of cancellation, the organization will
        use reasonable and suitable alternative arrangements such as posting the
        news of cancellation on the appropriate event website to alert those who
        have booked or purchased tickets to attend the event.
      </p>
      <p>
        <FaHandPointRight /> Delegates are responsible for checking this
        information prior to the event. We advised you to keep checking the
        website for updates of our conference.
      </p>
      <p>
        <FaHandPointRight /> The organizers will not accept any liability for
        personal injuries or for loss or damage to property belonging to the
        delegates, either during, or as a result of the conference.
      </p>

      <h1>Privacy Policy</h1>
      <h2>1. Information</h2>
      <p>
        We collect personal information that you voluntarily provide to us when
        registering for conferences, subscribing to newsletters, submitting
        inquiries, or participating in surveys or forums on{" "}
        <span className="span-n">https://icsap.co.in/</span> This information
        may include:
      </p>
      <ul>
        <li>Name</li>
        <li>Email address</li>
        <li>Contact number</li>
        <li>Mailing address</li>
        <li>Payment information</li>
        <li>Any other information you provide voluntarily</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We use the information we collect for the following purposes:</p>
      <ul>
        <li>To process registrations for events and conferences</li>
        <li>
          To communicate with you regarding updates, announcements and relevant
          event information
        </li>
        <li>To respond to inquiries or provide customer support</li>
        <li>To manage website operations and improve our services</li>
        <li>
          To process payments and billing for conference participation or
          services
        </li>
        <li>
          For marketing purposes (only if you have given explicit consent)
        </li>
      </ul>

      <h2>3. Sharing of Information</h2>
      <p>
        We do not sell, trade or rent your personal information to third
        parties. However, we may share your information with:
      </p>
      <ul>
        <li>
          Service providers and vendors assisting us with conference logistics,
          payment processing and website management.
        </li>
        <li>
          Law enforcement agencies or governmental bodies when required by law.
        </li>
      </ul>

      <h2>4. Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access, update or delete your personal information.</li>
        <li>Opt-out of marketing communications.</li>
        <li>
          Request the restriction of processing of your data in certain
          circumstances. To exercise any of these rights, please contact us at
          <span className="span-n">info@icsap.co.in</span>
        </li>
      </ul>

      <h2>5. Changes to This Privacy Policy</h2>
      <p>
        We reserve the right to update this Privacy Policy at any time. Any
        changes will be posted on this page and we encourage you to review this
        page regularly to stay informed.
      </p>

      <h2>6. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy or how we handle
        your personal information, please contact us at:
      </p>
      <p>Email: <span className="span-n">info@icsap.co.in</span></p>
      <p>Phone: +91 8072381719</p>

      <h1>Cancellation Policy</h1>
      <p>
        If the registrant is unable to attend, please note the following
        cancellation policy, which takes into account advance payments made for
        venue, printing, shipping, hotels and other overheads:
      </p>
      <ul>
        <li>50 Days Before Conference: 40% refundable</li>
        <li>30-40 Days Before Conference: 35% refundable</li>
        <li>Less Than 30 Days Before Conference: No refunds will be issued</li>
      </ul>

      <h1>Refund Policy</h1>
      <p>
        Transfer of Registration: Registration can be transferred to another
        event organized by the same organization of the registrant’s choice.
      </p>
      <p>
        <span>Note:</span> Refunds will be processed 2-4 weeks after the
        conference, excluding transaction charges. Refund/Cancellation Policy is
        not applicable if the conference is postponed due to natural disasters
        or unpredictable activities beyond organizers control including without
        limitation, force majeure, natural disasters, sabotage, accident, trade
        or industrial disputes, terrorism, strikes or hostilities.
      </p>
    </div>
  );
};

export default Terms;
