import { div, input, span } from "../../libs/html.js";
import { GAME_STATE, LOGIN_STATE, MENU_STATE } from "../../managers/gameManager.js";
import { BaseView } from "../../views/baseView.js";
import { GameButton } from "../../views/gameButton.js";
export class LoginView extends BaseView{
    constructor(parent, controller){
        super(parent, controller);
        let loginView = div({className:"loginViewDIV"},this)
        let themesText = span({className:'Subheader',innerHTML:"Por favor ingrese su usuario para registrar sus puntajes"},loginView)
        let emoji = span({className:'emojiLogin',innerHTML:"👨🏽‍💻"},loginView)
        let input = document.createElement('input')
        input.type = "text"
        input.placeholder = "INGRESAR USUARIO"
        input.classList.add("inputLogin")
        loginView.appendChild(input);

        this.className = "loginView"
        let btnsDIV = div({className:'btnsDIVTwo'},this)


        new GameButton (btnsDIV,"JUGAR", () => {
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

        new GameButton (btnsDIV,"REGRESAR", () => {let event = new CustomEvent('goto-state',{
            detail:{
                state:MENU_STATE
            },
            bubbles:true,
            cancelable:true,
            composed:false
        });
        this.dispatchEvent(event);});
    }
}
customElements.define('login-view',LoginView);