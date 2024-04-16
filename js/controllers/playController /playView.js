import { div, span } from "../../libs/html.js";
import { GAME_STATE, LOGIN_STATE, MENU_STATE } from "../../managers/gameManager.js";
import { BaseView } from "../../views/baseView.js";
import { GameButton } from "../../views/gameButton.js";
import { CardView } from "./cardView.js";
export class PlayView extends BaseView{
    constructor(parent, controller){+
        super(parent, controller);
        this.className = "playView"
        let btnsDIV = div({className:'btnsDIVGame'},this)
        this.playHubContainer = div({className:"playView-playHubContainer"},this)
        this.timeContainer = div({className:'timeContainer'},this.playHubContainer)
        this.clickContainer = div({className:'clickContainer'},this.playHubContainer)
        this.cardsContainer = div({className:"playView-cardsContainer"},this)
        
        this.timeTitle = span({className:"playView-timeTittle",innerHTML:"Tiempo"},this.timeContainer)
        this.clicksTitle = span({className:"playView-timeTittle",innerHTML:"Clicks"},this.clickContainer)
        this.timeTitle = span({className:"playView-timeLable",innerHTML:"0"},this.timeContainer)
        this.clicksTitle = span({className:"playView-clickLable",innerHTML:"0"},this.clickContainer)

        this.addEventListener('update-play-game-time',(event) => {
            this.timeTitle.innerHTML = event.detail.time;
        })
        this.addEventListener('update-game-clicks',(event) => {
            this.clicksTitle.innerHTML = event.detail.time;
        })


        this.cardsViews = []

        new GameButton (btnsDIV,"RESETEAR", () => {let event = new CustomEvent('goto-state',{
            detail:{
                state:GAME_STATE
            },
            bubbles:true,
            cancelable:true,
            composed:false
        });
        this.dispatchEvent(event);});

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

    showCards(cards){
        cards.forEach(card => {
            this.cardsViews.push(new CardView(this.cardsContainer, card, this.onCardSelected.bind(this)))
       });
    }

    resetCards(){
        this.cardsViews.forEach(cardView => {
            cardView.reset()
        })
    }

    onCardSelected ( ){
        this.controller.onCardSelection( )
    }

}
customElements.define('play-view',PlayView);