// Import the InvestmentForm CSS
import "./InvestmentForm.css";

export const InvestmentForm = (props) => {
  return (
    // Investment form section
    <section className="investment_form">
      {/* Initial investment */}
      <div>
        <label htmlFor="initial-investment">Initial Investment (£)</label>
        <input
          id="initial-investment"
          type="number"
          min="1"
          required
          value={props.investmentData.InitialInvestment}
          onChange={(e) => props.handleInvestmentChange("InitialInvestment",Number(e.target.value),)
          }
        />
      </div>

      {/* Annual contribution */}
      <div>
        <label htmlFor="annual-investment">Annual Contribution (£)</label>
        <input
          id="annual-investment"
          type="number"
          min="1"
          required
          value={props.investmentData.AnnualContribution}
          onChange={(e) => props.handleInvestmentChange("AnnualContribution",Number(e.target.value),)
          }
        />
      </div>

      {/* Expected annual return */}
      <div>
        <label htmlFor="return-we-expect">Expected Annual Return (%)</label>
        <input
          id="return-we-expect"
          type="number"
          min="1"
          required
          value={props.investmentData.ExpectedAnnualReturn}
          onChange={(e) => props.handleInvestmentChange("ExpectedAnnualReturn",Number(e.target.value),)
          }
        />
      </div>

      {/* Investment period */}
      <div>
        <label htmlFor="investment-duration">Investment Period (Years)</label>
        <input
          id="investment-duration"
          type="number"
          required
          value={props.investmentData.InvestmentPeriod}
          onChange={(e) => props.handleInvestmentChange("InvestmentPeriod",Number(e.target.value),)
          }
        />
      </div>
    </section>
  );
};
