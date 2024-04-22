import { div, span } from "../../libs/html.js";
import { GAME_STATE, LOGIN_STATE, MENU_STATE } from "../../managers/gameManager.js";
import { BaseView } from "../../views/baseView.js";
import { GameButton } from "../../views/gameButton.js";
export class SavingView extends BaseView{
    constructor(parent, controller, time,clicks,score){+
        super(parent, controller);
        console.log(time, clicks, score)
        this.className = "savingView"
        let btnsDIV = div({className:'btnsDIVTwo'},this)
        this.result = div({className:'resultsDiv'},this)
        let starlogo = span({className:'starIcon',innerHTML:"⭐️"},this.result)
        this.resulInfo = div({className:'resulInfo'},this.result)
        this.resulClicks = div({className:'resulData'},this.resulInfo)
        this.resulTime = div({className:'resulData'},this.resulInfo)
        this.resulScore = div({className:'resulData'},this.resulInfo)
        let clicksTitle = span({className:'resulTitle',innerHTML:"Clicks"},this.resulClicks)
        let clicksDetail = span({className:'resulDetail',innerHTML:clicks},this.resulClicks)
        let timeTitle = span({className:'resulTitle',innerHTML:"Tiempo"},this.resulTime)
        let timeDetail = span({className:'resulDetail',innerHTML:time},this.resulTime)
        let scoreTitle = span({className:'resulTitle',innerHTML:"Puntaje"},this.resulScore)
        let scoreDetail = span({className:'resulDetail',innerHTML:score},this.resulScore)
        
        gsap.to(starlogo,{rotation:360,duration:5,repeat:-1})


        new GameButton (btnsDIV,"JUGAR  DE NUEVO", () => {
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
customElements.define('saving-view',SavingView);