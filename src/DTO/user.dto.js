export default class UserDTO{
    constructor(user){
        this.fullName = `${user.first_name} ${user.last_name}`
        this.email = user.email;
        this.age = user.age;
        this.role = user.role;
        this.provider = user.provider;
        this.cart = user.cart;
    }
}