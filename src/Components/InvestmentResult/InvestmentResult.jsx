import { useEffect } from "react";

import { calculateInvestment } from "../../Utils/calculateInvestment";
import { formater } from "../../Utils/formatter";

import "./InvestmentResult.css";

export const InvestmentResult = (props) => {

  // Calculate the investment data for each year
  const yearlyInvestmentData = calculateInvestment(props.investmentData);

  // Run this effect when the investment data changes
  useEffect(() => {
    console.log(props.investmentData);
  }, [props.investmentData]);

  // Display the calculated investment data in the console
  console.log(yearlyInvestmentData);

  return (
    <div className="investment_result_container">
      {/* Display the investment result table */}
      <table className="display_result">
        {/* Display the table header */}
        <thead>
          <tr>
            <th>Year</th>
            <th>Portfolio Value</th>
            <th>Interest Earned</th>
            <th>Total Interest</th>
            <th>Total Invested</th>
          </tr>
        </thead>

        {/* Display the investment data */}
        <tbody>
          {
            // Create a table row for each investment year
            yearlyInvestmentData.map((investmentYear) => {
              return (
                <tr key={investmentYear.year}>
                  
                  {/* Display the investment year */}
                  <td>{investmentYear.year}</td>

                  {/* Display the portfolio value at the end of the year */}
                  <td>{formater.format(investmentYear.valueEndOfYear)}</td>

                  {/* Display the interest earned during the year */}
                  <td>{formater.format(investmentYear.interest)}</td>

                  {/* Display the total interest earned so far */}
                  <td>{formater.format(investmentYear.totalInterest)}</td>

                  {/* Display the total amount invested so far */}
                  <td>{formater.format(investmentYear.totalInvested)}</td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
};
