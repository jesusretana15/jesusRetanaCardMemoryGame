import { Controller } from "../controller.js";
import { CardView } from "./cardView.js";
import { PlayService } from "./playService.js";
import { DifficultyView, PlayView } from "./playView.js";
 

export class PlayController extends Controller{
     constructor(parent){
        super(parent);
        this.view = new PlayView(parent,this);
        this.service = new PlayService(this);
        this.cards = null;
        this.timesShowingTimer = null;
        this.playTime = 0;
        this.playClicks = 0;
    }

    show(cards){
        this.cards = cards
        console.log(cards)
        this.view.showCards(this.cards)
    }

    onCardSelection(cards){
        this.playClicks += 1;
        console.log(this.playClicks)
        let Card1 = null
        let Card2 = null

        for (let i = 0; i < this.cards.length; i++) {
            const card = this.cards[i];

            if (card.isSelected && Card1 === null) {
                Card1 = card;
               } else if (card.isSelected && Card2 === null){
                Card2 = card;
               }
            
        }

        if (Card1 !== null && Card2 !== null) {
        
            this.timesShowingTimer = window.setTimeout(() => {
                if(Card1.id === Card2.id){
                    Card1.isSelected = false
                    Card2.isSelected = false
                    Card1.isDiscovered = true
                    Card2.isDiscovered = true
                }  
                this.view.resetCards();

                if (this.isGameComplete()){
                    console.log("gameComplete")
        
                }
            }, 500);
            

       
           
            
            
        }
        


    }

    isGameComplete (){
        for (let i = 0; i < this.cards.length; i++) {
            const card = this.cards[i];
            if (!card.isDiscovered) {
                return false;
               }  


            }

            return true;
        }

       
    
}