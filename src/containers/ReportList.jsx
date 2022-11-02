import React from 'react'
import Report from '../components/Report'

const ReportList = (  { getReports } ) => {
  return (
<>
<button onClick={getReports}>I AM A BIG BUTTON!</button>
    <Report/>
</>
  )
}

export default ReportList