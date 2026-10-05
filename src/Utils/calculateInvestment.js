export const calculateInvestment = (investmentData) => {
  // Create an empty array to store the investment data for each year
  const yearlyInvestmentData = [];
  // Store the current investment value
  let currentInvestmentValue = investmentData.InitialInvestment;
  // Store the total interest earned
  let totalInterest = 0;
  // Loop through each investment year
  for (let yearIndex = 0; yearIndex < investmentData.InvestmentPeriod; yearIndex++) {
    // Calculate the interest earned during this year
    const yearlyInterest = currentInvestmentValue * (investmentData.ExpectedAnnualReturn / 100);
    // Add the yearly interest to the total interest
    totalInterest += yearlyInterest;
    // Add the interest and annual contribution to the investment value
    currentInvestmentValue += yearlyInterest + investmentData.AnnualContribution;
    // Calculate the total amount invested
    const totalInvested = investmentData.InitialInvestment + investmentData.AnnualContribution * (yearIndex + 1);
    // Store the data for this year
    yearlyInvestmentData.push({
      year: yearIndex + 1,
      interest: yearlyInterest,
      valueEndOfYear: currentInvestmentValue,
      totalInterest: totalInterest,
      totalInvested: totalInvested,
    });
  }
  // Return the investment data for all years
  return yearlyInvestmentData;
};
