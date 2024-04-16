import { Controller } from "../controller.js";
import { LoginView } from "./loginView.js";
 
 
export class LoginController extends Controller{
     constructor(parent){
        super(parent);
        this.view = new LoginView(parent ,this) 
    }


    saveUser(userName){
        localStorage.setItem('username', userName)
    }
}