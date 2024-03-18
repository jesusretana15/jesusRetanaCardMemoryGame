import { LoadingController } from "../controllers/loading/loadingController.js";
import { div } from "../libs/html.js";

export class GameManager {
    constructor( ){
        this.mainContainer = div({id:'mainContainer',className:'mainContainer'},document.body);
        this.navContainer = div({id:'navContainer',className:'navContainer'},this.mainContainer);
        this.contentContainer = div({id:'contentContainer',className:'contentContainer'},this.mainContainer);
       
       
       
        this.currentController = new LoadingController(this.contentContainer)
    }
}