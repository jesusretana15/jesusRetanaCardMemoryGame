import { Controller } from "../controller.js";
import { LoadingView } from "./loadingView.js";

export class LoadingController extends Controller{
     constructor(parent){
        super();
        this.view = new LoadingView(parent, this);
    }
}