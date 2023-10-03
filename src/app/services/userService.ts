import { Injectable } from "@angular/core";
import { User } from "../models/User";

@Injectable()
export class UserService{
    createUser(user: User){
        console.log('User email: '+ user.email);
        console.log('User password: '+ user.password);
    }
}