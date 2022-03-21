export class Submit {
    constructor(submitJson) {
        this.SubmitId = submitJson.SubmitId
        this.SubmitTime = submitJson.SubmitTime
        this.SubmitScore = submitJson.SubmitScore
        this.Feedback = submitJson.Feedback
        this.Picture = submitJson.Picture
    }
}