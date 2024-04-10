import { div, span } from "../../libs/html.js";
import {GAME_STATE, LOGIN_STATE, MENU_STATE } from "../../managers/gameManager.js";
import { BaseView } from "../../views/baseView.js";
import { GameButton } from "../../views/gameButton.js";
export class DifficultyView extends BaseView{
    constructor(parent, controller){+
        super(parent, controller);

        let themesText = span({className:'Subheader',innerHTML:"Elegir dificultad"},this)
        let btnsDificultyDIV = div({className:'btnsDificultyDIV'},this)
        let level1= span({className:'dificultyBTN',innerHTML:"MUY FACIL 😴"},btnsDificultyDIV)
        let level2= span({className:'dificultyBTN',innerHTML:"FACIL 😇"},btnsDificultyDIV)
        let level3= span({className:'dificultyBTN',innerHTML:"NORMAL 🥸"},btnsDificultyDIV)
        let level4= span({className:'dificultyBTN',innerHTML:"DIFICIL 🤠"},btnsDificultyDIV)



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