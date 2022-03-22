export class User {
    constructor(userJson) {
        this.UserID = userJson.UserID
        this.Email = userJson.Email
        this.HashPassword = userJson.HashPassword
        this.FirstName = userJson.FirstName
        this.DateOfBirth = userJson.DateOfBirth
        this.Sex = userJson.Sex
        this.Address = userJson.Address
        this.Phone = userJson.Phone
        this.LastName = userJson.LastName
        this.UserName = userJson.UserName
        this.Avatar = userJson.Avatar
    }
}