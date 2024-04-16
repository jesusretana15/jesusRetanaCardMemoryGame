// import { use } from "browser-sync";
import { div, element, input, span } from "../../libs/html.js";
import { GAME_STATE, LOGIN_STATE, MENU_STATE } from "../../managers/gameManager.js";
import { BaseView } from "../../views/baseView.js";
import { GameButton } from "../../views/gameButton.js";
export class LoginView extends BaseView{
    constructor(parent, controller){
        super(parent, controller);
        let loginView = div({className:"loginViewDIV"},this)
        let themesText = span({className:'Subheader',innerHTML:"Por favor ingrese su usuario para registrar sus puntajes"},loginView)
        let emoji = span({className:'emojiLogin',innerHTML:"👨🏽‍💻"},loginView)
        this.inputUser = element('input',{className:'inputLogin',placeholder:'INGRESAR USUARIO'},loginView)

        this.className = "loginView"
        let btnsDIV = div({className:'btnsDIVTwo'},this)


        new GameButton (btnsDIV,"JUGAR", () => {
            this.saveUserName();
            let event = new CustomEvent('goto-state',{
                detail:{
                    state:GAME_STATE
                },
                bubbles:true,
                cancelable:true,
                composed:false
            });
            this.dispatchEvent(event);
        });

        new GameButton (btnsDIV,"REGRESAR", () => {
            this.saveUserName();
            let event = new CustomEvent('goto-state',{
            detail:{
                state:MENU_STATE
            },
            bubbles:true,
            cancelable:true,
            composed:false
        });
        this.dispatchEvent(event);});
    }

    saveUserName(){
        let userName = this.inputUser.value;
        if (userName !== '') {
            this.controller.saveUser(userName)
        }else{
            alert("Usuario no ingresado, no se guardarán los resultados")
        }
    }
}
customElements.define('login-view',LoginView);