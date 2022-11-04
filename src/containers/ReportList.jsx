import React from 'react'
import './ReportList.css'
import Report from '../components/Report'

const ReportList = (  { allReports, setAllReports } ) => {


  const playerReportNodes = allReports.map((report) => { 
    return (
      <Report report={report} />
    )
  })

return(
  <div>
    <ul className='report-grid'>
      {playerReportNodes}
    </ul>
  </div>
)

}

export default ReportList