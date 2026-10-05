import { useState } from 'react'

import { Header } from './Components/Header'
import { InvestmentForm } from './Components/InvestmentForm'
import { InvestmentResult } from './Components/InvestmentResult'

import { calculateInvestment } from './Utils/calculateInvestment'
import { generateInvestmentReport } from './Utils/generateInvestmentReport'

function App() {
  // Store all investment data in one state object
  const [investmentData, setInvestmentData] = useState({
    InitialInvestment: 5000,
    AnnualContribution: 1500,
    ExpectedAnnualReturn: 12,
    InvestmentPeriod: 25,
  })
  // Handle changes made to the investment inputs
  function handleInvestmentChange(inputName, inputValue) {
    setInvestmentData((previousData) => ({...previousData, [inputName]: inputValue}))
  }
  // Check if the investment period is greater than 0
  const yearValidation = investmentData.InvestmentPeriod > 0
  // Generate the PDF investment report
  function handleGenerateReport() {
    const yearlyInvestmentData = calculateInvestment(investmentData)
    generateInvestmentReport(investmentData, yearlyInvestmentData)
  }
  return (
    <>
      {/* Display the Header component */}
      <Header />
      {/* Display the investment form and pass investment data to it */}
      <InvestmentForm
        investmentData={investmentData}
        handleInvestmentChange={handleInvestmentChange}
      />
      {/* PDF report button */}
      <div
        className='w-[90%]
          max-w-[1100px]
          mx-auto
          mt-[30px]
          mb-[50px]
          flex
          justify-center'
      >
        <button
          className='px-7
            py-3
            border-0
            rounded-lg
            bg-[#1f2937]
            text-white
            text-base
            font-semibold
            cursor-pointer
            transition
            duration-200
            hover:bg-[#374151]
            active:scale-[0.97]'
          onClick={handleGenerateReport}
        >
          Download PDF Report
        </button>
      </div>
      {/* Display investment result when the investment period is valid */}
      {yearValidation && <InvestmentResult investmentData={investmentData} />}
      {/* Display an error message when the investment period is invalid */}
      {!yearValidation && (
        <p
          className='text-center
            text-red-600
            font-semibold
            my-5'
        >
          Please ensure that the investment period is greater than 0.
        </p>
      )}
    </>
  )
}

export default App