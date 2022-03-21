export class Session {
    constructor(SessionJson) {
        this.SessionId = SessionJson.SessionId
        this.SectionName = SessionJson.SectionName
        this.SectionDescription = SessionJson.SectionDescription
        this.SectionStartTime = SessionJson.SectionStartTime
        this.SectionEndTime = SessionJson.SectionEndTime
    }
}