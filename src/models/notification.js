export class Notification{
    constructor(NotificationJson) {
        this.NotificationID = NotificationJson.NotificationID
        this.NotificationTitle = NotificationJson.NotificationTitle
        this.NotificationBody = NotificationJson.NotificationBody
        this.NotificationTimestamp = NotificationJson.NotificationTimestamp
    }
}