import { Controller } from "../controller.js";
import { ScoreService } from "./scoreService.js";
import { ScoresView  } from "./scoresView.js";

export class ScoresController extends Controller{
     constructor(parent){
        super(parent);
        this.service = new ScoreService(this);
        this.view = new ScoresView(parent, this);
    }

    showScores(scores){
        this.view.showScores(scores)
    }
}