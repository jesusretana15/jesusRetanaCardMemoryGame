import { span } from "../../libs/html.js";
import { BaseView } from "../../views/baseView.js";


export class MenuView extends BaseView{
    constructor(parent, controller){
        super(parent, controller);
        this.className = "menuView"
        this.innerHTML = 'Menu...'
    }
}

customElements.define('menu-view',MenuView);