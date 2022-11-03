import React from 'react'
import Report from '../components/Report'

const ReportList = (  { allReports, setAllReports } ) => {


  const playerReportNodes = allReports.map((report) => {
    return (
      <Report report={report} />
    )
  })

return(
  <div>
    <ul>
      {playerReportNodes}
    </ul>
  </div>
)


}

  


export default ReportList