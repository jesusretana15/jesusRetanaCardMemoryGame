import { Controller } from "../controller.js";
import { DifficultyView } from "./difficultyView.js";
 

export class DifficultyController extends Controller{
     constructor(parent){
        super(parent);
        this.view = new DifficultyView(parent,this);
    }

    saveDifficulty(Difficulty){
        localStorage.setItem('difficulty', Difficulty)
    }
}