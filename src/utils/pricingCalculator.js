export const calculatePricing = ({
  baseAmount,
  participantCategory,
  hasMembership,
  hasCoupon,
  currency = "USD"
}) => {
  let calculations = {
    baseAmount: parseFloat(baseAmount),
    membershipFee: 0,
    membershipDiscount: 0,
    couponDiscount: 0,
    totalDiscount: 0,
    subtotal: parseFloat(baseAmount),
    finalAmount: parseFloat(baseAmount)
  };

  // Determine membership fee based on category
  const membershipFeeAmount = 
    participantCategory?.toLowerCase().includes('student') ? 15 : 20;

  if (hasMembership && hasCoupon) {
    // Both: 10% discount + membership fee
    calculations.totalDiscount = calculations.baseAmount * 0.10;
    calculations.membershipFee = membershipFeeAmount;
    calculations.membershipDiscount = calculations.baseAmount * 0.05;
    calculations.couponDiscount = calculations.baseAmount * 0.05;
    
    calculations.finalAmount = calculations.baseAmount - calculations.totalDiscount + calculations.membershipFee;
    
  } else if (hasMembership && !hasCoupon) {
    // Only membership: 5% discount + membership fee
    calculations.membershipDiscount = calculations.baseAmount * 0.05;
    calculations.totalDiscount = calculations.membershipDiscount;
    calculations.membershipFee = membershipFeeAmount;
    
    calculations.finalAmount = calculations.baseAmount - calculations.membershipDiscount + calculations.membershipFee;
    
  } else if (!hasMembership && hasCoupon) {
    // Only coupon: 5% discount
    calculations.couponDiscount = calculations.baseAmount * 0.05;
    calculations.totalDiscount = calculations.couponDiscount;
    
    calculations.finalAmount = calculations.baseAmount - calculations.couponDiscount;
    
  } else {
    // No discounts
    calculations.finalAmount = calculations.baseAmount;
  }

  // Add bank charges based on currency
  if (currency === "USD") {
    const bankTax = calculations.finalAmount * 0.060;
    calculations.bankTax = parseFloat(bankTax.toFixed(2));
    calculations.total = parseFloat((calculations.finalAmount + bankTax).toFixed(2));
  }

  // Round all values
  Object.keys(calculations).forEach(key => {
    calculations[key] = parseFloat(calculations[key].toFixed(2));
  });

  return calculations;
};