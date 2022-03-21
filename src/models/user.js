export class User {
    constructor(userJson) {
        this.UserID = userJson.UserID
        this.Email = userJson.Email
        this.HashPassword = userJson.HashPassword
        this.FullName = userJson.FullName
        this.DateOfBirth = userJson.DateOfBirth
        this.Sex = userJson.Sex
        this.Address = userJson.Address
        this.Phone = userJson.Phone
    }
}