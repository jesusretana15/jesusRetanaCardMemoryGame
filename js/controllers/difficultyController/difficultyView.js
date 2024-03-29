import { div, span } from "../../libs/html.js";
import { LOGIN_STATE, MENU_STATE } from "../../managers/gameManager.js";
import { BaseView } from "../../views/baseView.js";
import { GameButton } from "../../views/gameButton.js";
export class DifficultyView extends BaseView{
    constructor(parent, controller){+
        super(parent, controller);
        this.navBar = document.getElementById("navContainer")
        this.navBar.style.background="#D2B48C"
        this.navBar.innerHTML = "DIFICULTAD"
        this.className = "difficultyView"
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
customElements.define('difficulty-view',DifficultyView);