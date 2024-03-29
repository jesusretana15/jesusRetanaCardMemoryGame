import { div, span } from "../../libs/html.js";
import { BaseView } from "../../views/baseView.js";


export class LoadingView extends BaseView{
    constructor(parent, controller){
        super(parent, controller);
        this.navBar = document.getElementById("navContainer")
        this.navBar.style.background="bisque"
        this.className = "loadingView"
        // this.innerHTML = 'Loading...'
        let spinner = div ({className:'loadingView-spinner'},this)
        span({innerHTML:'loading', className:"loadingText"},this)

        gsap.to(spinner,{rotation:360,duration:3,repeat:-1})
    }
}

customElements.define('loading-view',LoadingView);