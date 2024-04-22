import { BaseView } from "../../views/baseView.js";

export class CardView extends BaseView{
    constructor(parent,card,callback = null ){
        super(parent);
        this.className = "cardView"
        let difficulty = localStorage.getItem("difficulty")
        switch (difficulty) {
            case "4":
                this.classList.add("cardView4")
                break;
            case "8":
                this.classList.add("cardView8")
                break;
            case "10":
                this.classList.add("cardView10")
                break;
            case "12":
                this.classList.add("cardView12")
                break;
        
            default:
                break;
        }
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