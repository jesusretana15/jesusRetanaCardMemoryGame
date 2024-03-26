import { div, span } from "../../libs/html.js";
import { LOGIN_STATE } from "../../managers/gameManager.js";
import { BaseView } from "../../views/baseView.js";
import { GameButton } from "../../views/gameButton.js";
export class MenuView extends BaseView{
    constructor(parent, controller){
        super(parent, controller);
        this.className = "menuView"
        span({innerHTML:'CHROMOJI CHALLENGE'},this);
        span({innerHTML:"¡Demuestra tu nabilidad combinando colores v emolis!."},this);
        new GameButton (this,"INICIO SESION", () => {
            let event = new CustomEvent('goto-state',{
                detail:{
                    state:LOGIN_STATE
                },
                bubbles:true,
                cancelable:true,
                composed:false
            });
            this.dispatchEvent(event);
        });
        new GameButton (this,"CATEGORIA", () => {console.log("CATEGORIA")});
        new GameButton (this,"DIFICULTAD", () => {console.log("DIFICULTAD")});
        new GameButton (this,"PUNTAJES", () => {console.log("PUNTAJES")});
    }
}
customElements.define('menu-view',MenuView);