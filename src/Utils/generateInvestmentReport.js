import jsPDF from "jspdf";

export const generateInvestmentReport = (investmentData, yearlyInvestmentData,) => {

  // Create a new PDF document
  const doc = new jsPDF();

  // Set the title font size
  doc.setFontSize(20);

  // Add the report title
  doc.text("Investment Report", 10, 15);

  // Set the information font size
  doc.setFontSize(12);

  // Add investment information to the PDF
  doc.text(`Initial Investment: £${investmentData.InitialInvestment}`, 10, 35);

  doc.text(`Annual Contribution: £${investmentData.AnnualContribution}`,10, 45);

  doc.text(`Expected Annual Return: ${investmentData.ExpectedAnnualReturn}%`, 10, 55);

  doc.text(`Investment Period: ${investmentData.InvestmentPeriod} years`, 10, 65);

  // Set the starting position for the yearly data
  let yOffset = 85;

  // Get the PDF page height
  const pageHeight = doc.internal.pageSize.height;

  // Set the font size for the yearly data
  doc.setFontSize(10);

  // Add table headers
  doc.text("Year", 10, yOffset);
  doc.text("Portfolio Value", 35, yOffset);
  doc.text("Interest", 85, yOffset);
  doc.text("Total Interest", 120, yOffset);
  doc.text("Total Invested", 160, yOffset);

  // Move down after the table headers
  yOffset += 10;

  // Add each year's investment data
  yearlyInvestmentData.forEach((yearData) => {
    // Check if there is enough space for the next row
    if (yOffset > pageHeight - 20) {
      // Add a new page
      doc.addPage();

      // Reset the vertical position
      yOffset = 20;

      // Add table headers to the new page
      doc.text("Year", 10, yOffset);
      doc.text("Portfolio Value", 35, yOffset);
      doc.text("Interest", 85, yOffset);
      doc.text("Total Interest", 120, yOffset);
      doc.text("Total Invested", 160, yOffset);

      // Move down after the table headers
      yOffset += 10;
    }

    // Add the year
    doc.text(`${yearData.year}`, 10, yOffset);

    // Add the portfolio value
    doc.text(`£${yearData.valueEndOfYear.toFixed(0)}`, 35, yOffset);

    // Add the interest earned during the year
    doc.text(`£${yearData.interest.toFixed(0)}`, 85, yOffset);

    // Add the total interest
    doc.text(`£${yearData.totalInterest.toFixed(0)}`, 120, yOffset);

    // Add the total amount invested
    doc.text(`£${yearData.totalInvested.toFixed(0)}`, 160, yOffset);

    // Move to the next row
    yOffset += 7;
  });

  // Save the PDF file
  doc.save("investment-report.pdf");
};
