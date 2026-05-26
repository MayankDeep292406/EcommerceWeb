// src/utils/formatPrice.js

const formatPrice = (
  price,
  showDecimals = false
) => {

  if (
    price === null ||
    price === undefined ||
    isNaN(price)
  ) {
    return "₹0";
  }

  const amount =
    Number(price);

  return new Intl.NumberFormat(
    "en-IN",
    {
      style: "currency",
      currency: "INR",

      minimumFractionDigits:
        showDecimals
          ? 2
          : 0,

      maximumFractionDigits:
        showDecimals
          ? 2
          : 0,
    }
  ).format(amount);
};

export default formatPrice;