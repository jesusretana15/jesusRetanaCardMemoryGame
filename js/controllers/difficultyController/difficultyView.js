import { div, span } from "../../libs/html.js";
import {DIFFICULTY_EASY, DIFFICULTY_HARD, DIFFICULTY_NORMAL, DIFFICULTY_VERY_EASY, GAME_STATE, LOGIN_STATE, MENU_STATE } from "../../managers/gameManager.js";
import { BaseView } from "../../views/baseView.js";
import { GameButton } from "../../views/gameButton.js";
export class DifficultyView extends BaseView{
    constructor(parent, controller){+
        super(parent, controller);

        let themesText = span({className:'Subheader',innerHTML:"Elegir dificultad"},this)
        let btnsDificultyDIV = div({className:'btnsDificultyDIV'},this)
        let leve1 = new GameButton (btnsDificultyDIV,"MUY FACIL 😴", () => {
            this.controller.saveDifficulty(DIFFICULTY_VERY_EASY)
        });
        leve1.className = "dificultyBTN";
        let leve2 = new GameButton (btnsDificultyDIV,"FACIL 😇", () => {
            this.controller.saveDifficulty(DIFFICULTY_EASY)
        });
        leve2.className = "dificultyBTN";
        let leve3 = new GameButton (btnsDificultyDIV,"NORMAL 🥸", () => {
            this.controller.saveDifficulty(DIFFICULTY_NORMAL)
        });
        leve3.className = "dificultyBTN";
        let leve4 = new GameButton (btnsDificultyDIV,"DIFICIL 🤠", () => {
            this.controller.saveDifficulty(DIFFICULTY_HARD)
        });
        leve4.className = "dificultyBTN";
        
        



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