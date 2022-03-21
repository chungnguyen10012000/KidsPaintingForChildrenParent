export class Contest {
    constructor(contestJson) {
        this.ContestID = contestJson.ContestID
        this.ContestName = contestJson.ContestName
        this.ContestBody = contestJson.ContestBody
        this.ContestStatus = contestJson.ContestStatus
        this.StartTime = contestJson.StartTime
        this.EndTime = contestJson.EndTime
    }
}