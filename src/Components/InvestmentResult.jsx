import { useEffect } from 'react'

import {calculateInvestment} from '../Utils/calculateInvestment'
import { formater } from '../Utils/formatter'

export const InvestmentResult = (props) => {

  // Calculate the investment data for each year
  const yearlyInvestmentData = calculateInvestment(props.investmentData)

  // Run this effect when the investment data changes
  useEffect(() => {console.log(props.investmentData)}, [props.investmentData])

  // Display the calculated investment data in the console
  console.log(yearlyInvestmentData)

  return (
    <div 
      className='w-[90%] 
        max-w-[1100px] 
        mx-auto 
        my-10 
        overflow-x-auto'
    >      
      {/* Display the investment result table */}
      <table 
        className='w-full 
          border-collapse 
          bg-white 
          rounded-xl 
          overflow-hidden 
          shadow-[0_4px_15px_rgba(0,0,0,0.1)]'
      >
        {/* Display the table header */}
        <thead>
          <tr>
            <th 
              className='px-5 
                py-4 
                bg-[#1f2937] 
                text-white 
                text-[15px] 
                font-semibold 
                text-center'
            >
              Year
            </th>
            <th 
              className='px-5 
                py-4 
                bg-[#1f2937] 
                text-white 
                text-[15px] 
                font-semibold 
                text-center'
            >
              Portfolio Value
            </th>
            <th 
              className='px-5 
                py-4 
                bg-[#1f2937] 
                text-white 
                text-[15px] 
                font-semibold 
                text-center'
            >
              Interest Earned
            </th>
            <th 
              className='px-5 
                py-4 
                bg-[#1f2937] 
                text-white 
                text-[15px] 
                font-semibold 
                text-center'
            >
              Total Interest
            </th>
            <th 
              className='px-5 
                py-4 
                bg-[#1f2937] 
                text-white 
                text-[15px] 
                font-semibold 
                text-center'
            >
              Total Invested
            </th>
          </tr>
        </thead>

        {/* Display the investment data */}
        <tbody>
          {yearlyInvestmentData.map((investmentYear) => {
            return (
              <tr
                key={investmentYear.year}
                className='hover:bg-[#f3f4f6]'
              >
                {/* Display the investment year */}
                <td 
                  className='px-5 
                    py-[14px] 
                    border-b 
                    border-[#e5e7eb] 
                    last:border-b-0 
                    text-[#374151] 
                    text-center'>
                  {investmentYear.year}
                </td>
                {/* Display the portfolio value at the end of the year */}
                <td 
                  className='px-5 
                    py-[14px] 
                    border-b 
                    border-[#e5e7eb] 
                    last:border-b-0 
                    text-[#374151] 
                    text-center'
                >
                  {formater.format(investmentYear.valueEndOfYear)}
                </td>
                {/* Display the interest earned during the year */}
                <td 
                  className='px-5 
                    py-[14px] 
                    border-b 
                    border-[#e5e7eb] 
                    last:border-b-0 
                    text-[#374151] 
                    text-center'
                >
                  {formater.format(investmentYear.interest)}
                </td>
                {/* Display the total interest earned so far */}
                <td 
                  className='px-5 
                  py-[14px] 
                  border-b 
                  border-[#e5e7eb] 
                  last:border-b-0 
                  text-[#374151] 
                  text-center'
                >
                  {formater.format(investmentYear.totalInterest)}
                </td>
                {/* Display the total amount invested so far */}
                <td 
                  className='px-5 
                    py-[14px] 
                    border-b 
                    border-[#e5e7eb] 
                    last:border-b-0 
                    text-[#374151] 
                    text-center'
                  >
                  {formater.format(investmentYear.totalInvested)}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}