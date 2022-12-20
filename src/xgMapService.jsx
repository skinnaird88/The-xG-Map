
const reportsUrl = "http://localhost:8080/reports"
const playersUrl = "http://localhost:8080/players"
const teamsUrl = "http://localhost:8080/teams"


export const getReports = () => {
    return fetch(reportsUrl)
        .then(res => res.json())
}

export const postReport = (report) => {
    return fetch(reportsUrl, {
        method: 'POST',
        body: JSON.stringify(report),
        headers: {
            "content-type": "application/json"
        }
    })
    .then(res => res.json())
}
export const postPlayer = (player) => {
    return fetch(playersUrl, {
        method: 'POST',
        body: JSON.stringify(player),
        headers: {
            "content-type": "application/json"
        }
    })
    .then(res => res.json())
}

export const postTeam = (team) => {
    return fetch(teamsUrl, {
        method: 'POST',
        body: JSON.stringify(team),
        headers: {
            "content-type": "application/json"
        }
    })
    .then(res => res.json())
}


export const getPlayers = () => {
    return fetch(playersUrl)
        .then(res => res.json())
}
export const getTeams = () => {
    return fetch(teamsUrl)
        .then(res => res.json())
}