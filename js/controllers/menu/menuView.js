import { div, span } from "../../libs/html.js";
import { DIFFICULTY_STATE, LOGIN_STATE, SCORES_STATE, THEME_STATE } from "../../managers/gameManager.js";
import { BaseView } from "../../views/baseView.js";
import { GameButton } from "../../views/gameButton.js";
export class MenuView extends BaseView{
    constructor(parent, controller){+
        super(parent, controller);
        this.className = "menuView"
        span({innerHTML:'CHROMOJI CHALLENGE',className:"menuTittle"},this);
        span({innerHTML:"¡Demuestra tu habilidad combinando colores y emojis!",className:"menuDesc"},this);
        let btnsDIV = div({className:'btnsDIV'},this)


        new GameButton (btnsDIV,"INICIO SESION", () => {
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

        new GameButton (btnsDIV,"CATEGORIA", () => {let event = new CustomEvent('goto-state',{
            detail:{
                state:THEME_STATE
            },
            bubbles:true,
            cancelable:true,
            composed:false
        });
        this.dispatchEvent(event);});

        new GameButton (btnsDIV,"DIFICULTAD", () => {let event = new CustomEvent('goto-state',{
            detail:{
                state:DIFFICULTY_STATE
            },
            bubbles:true,
            cancelable:true,
            composed:false
        });
        this.dispatchEvent(event);});
        new GameButton (btnsDIV,"PUNTAJES", () => {let event = new CustomEvent('goto-state',{
            detail:{
                state:SCORES_STATE
            },
            bubbles:true,
            cancelable:true,
            composed:false
        });
        this.dispatchEvent(event);});
    }
}
customElements.define('menu-view',MenuView);