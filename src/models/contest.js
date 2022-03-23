export class Contest {
    constructor(contestJson) {
        this.ContestID = contestJson.ContestID
        this.ContestName = contestJson.ContestName
        this.ContestStatus = contestJson.ContestStatus
        this.StartTime = contestJson.StartTime
        this.EndTime = contestJson.EndTime
        this.Image = contestJson.Image
        this.MaxContestParticipant = contestJson.MaxContestParticipant
    }
}