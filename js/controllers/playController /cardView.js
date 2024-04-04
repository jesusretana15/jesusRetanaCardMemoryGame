import { BaseView } from "../../views/baseView.js";

export class CardView extends BaseView{
    constructor(parent,card,callback = null ){
        super(parent);
        this.className = "cardView"
        this.card = card;
        this.onclick = () => {
            gsap.to(this,{scale:1.05,duration:0.15,ease: "expo.in",yoyo:true,repeat:1})
           
            this.show()
            if (callback !== null) {
                this.card.isSelected = true
                callback(this.card);
            }
        }
    }

    show(){
        this.innerHTML= this.card.emoji;
    }

    hide (){
        this.card.isSelected = false 
        this.innerHTML= "";
    }

    reset(){
        if(this.card.isDiscovered){
            this.classList.add("cardView-Discovered")
        }else
        {
            this.hide()
        }
        
    }
}
customElements.define('card-view',CardView);