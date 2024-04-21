import { Controller } from "../controller.js";
import { SavingView, ScoresView  } from "./savingView.js";

export class SavingController extends Controller{
     constructor(parent){
        super(parent);
        this.view = new SavingView(parent, this);
    }
}