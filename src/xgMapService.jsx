import { json } from "react-router-dom"

const reportsUrl = "http://localhost:8080/reports"
const playersUrl = "http://localhost:8080/players"


export const getReports = () => {
    return fetch(reportsUrl)
        .then(res => res.json())
}

export const postReport = (report) => {
    return fetch(reportsUrl, {
        method: 'POST',
        body: JSON.stringify(report)
    })
    .then(res => res.json())
}
export const getPlayers = () => {
    return fetch(playersUrl)
        .then(res => res.json())
}