import { span } from "../../libs/html.js";
import { View } from "../../views/view.js";

export class LoadingView extends View{
    constructor(parent, controller){
        super(parent, controller);
        this.container.className = "loadingController"

        span({innerHTML:'LOADING...'},this.container)
    }
}