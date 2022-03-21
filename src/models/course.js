export class Course {
    constructor(courseJson) {
        this.CourseID = courseJson.CourseID
        this.CourseName = courseJson.CourseName
        this.CourseDescription = courseJson.CourseDescription
        this.CoursePrice = courseJson.CoursePrice
        this.CourseImg = courseJson.CourseImg
        this.CourseAmount = courseJson.CourseAmount
    }
}