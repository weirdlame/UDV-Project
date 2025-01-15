// Dto - Data Transfer Object - used to transfer data between the server and the client
export default class UserDto {
  email;
  id;
  isActivated;

  constructor(model) {
    this.email = model.email;
    this.id = model._id;
    this.isActivated = model.isActivated;
  }
}
