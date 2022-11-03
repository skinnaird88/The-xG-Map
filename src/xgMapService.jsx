import { json } from "react-router-dom"

const serverUrl = "http://localhost:8080/players"

export const getReports = () => {
    return fetch(serverUrl)
        .then(res => res.json())
}