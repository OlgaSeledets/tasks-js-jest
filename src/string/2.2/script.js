export const formatCurrency = (amount) =>
  parseFloat(Math.floor(amount * 100) / 100)
  .toString()
  .replace(/(\d)(?=(\d{3})+\.)/g, '$1,');

  
