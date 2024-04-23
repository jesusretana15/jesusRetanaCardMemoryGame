import { div, span } from "../../libs/html.js";
import { GAME_STATE, LOGIN_STATE, MENU_STATE } from "../../managers/gameManager.js";
import { BaseView } from "../../views/baseView.js";
import { GameButton } from "../../views/gameButton.js";
import { ScoreView } from "./scoreView.js";
export class ScoresView extends BaseView{
    constructor(parent, controller){+
        super(parent, controller);
        this.className = "scoreView"
        let title = span({className:'top3ViewTittle',innerHTML:"⭐️ TOP 3 ⭐️"},this)
        this.top3Div = div({className:'topScoresView'},this)

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
    
    showScores(scores){
        // this.num1Name.innerHTML = "🥇 " + scores[0].username
        // this.top1ClicksDetail.innerHTML = scores[0].clicks
        // this.top1TimeDetail.innerHTML = scores[0].time
        // this.Score1Detail.innerHTML = scores[0].score

        // this.num2Name.innerHTML = "🥈 " + scores[1].username
        // this.top2ClicksDetail.innerHTML = scores[1].clicks
        // this.top2TimeDetail.innerHTML = scores[1].time
        // this.Score2Detail.innerHTML = scores[1].score

        scores.forEach(score => {
            let scoreView = new ScoreView(this.top3Div,score.username,score.clicks,score.time,score.score)
        });


    }
}
customElements.define('score-view',ScoresView);