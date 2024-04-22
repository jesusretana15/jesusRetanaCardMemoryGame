import { Controller } from "../controller.js";
import { SavingView, ScoresView  } from "./savingView.js";

export class SavingController extends Controller{
     constructor(parent,time,clicks,scores){
        super(parent);
        console.log(time, clicks, scores)
        this.view = new SavingView(parent,this, time,clicks,scores);
    }
}