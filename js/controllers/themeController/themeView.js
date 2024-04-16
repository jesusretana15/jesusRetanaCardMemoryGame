import { div, span } from "../../libs/html.js";
import { GAME_STATE,LOGIN_STATE, MENU_STATE, THEME_CLOTHES, THEME_FACES, THEME_FOOD, THEME_PLANTS } from "../../managers/gameManager.js";
import { BaseView } from "../../views/baseView.js";
import { GameButton } from "../../views/gameButton.js";
export class ThemeView extends BaseView{
    constructor(parent, controller){+
        super(parent, controller);
        
        this.className = "themeView"
        let themesText = span({className:'Subheader',innerHTML:"Elegir categoría"},this)
        let btnsDIV = div({className:'btnsDIVTwo'},this)
        let divCategorias1 = div({className:'opcionesDIV'},this);
        let divCategorias2 = div({className:'opcionesDIV'},this);

        let cat1 = new GameButton (divCategorias1,"🤠", () => {
            this.controller.saveTheme(THEME_FACES)
        });
        cat1.className = "boxTheme";
        let cat2 = new GameButton (divCategorias1,"🧥", () => {
            this.controller.saveTheme(THEME_CLOTHES)
        });
        cat2.className = "boxTheme";
        let cat3 = new GameButton (divCategorias2,"🌸", () => {
            this.controller.saveTheme(THEME_PLANTS)
        });
        cat3.className = "boxTheme";
        let cat4 = new GameButton (divCategorias2,"🍍", () => {
            this.controller.saveTheme(THEME_FOOD)
        });
        cat4.className = "boxTheme";



        // let cat1 = div({className:'boxTheme',innerHTML:"🤠"},divCategorias1)
        // let catname1= span({className:'cattext',innerHTML:"emojis"},cat1)
        // let cat2 = div({className:'boxTheme',innerHTML:"🧥"},divCategorias1)
        // let catname2= span({className:'cattext',innerHTML:"ropa"},cat2)
        // let cat3 = div({className:'boxTheme',innerHTML:"🌸"},divCategorias2)
        // let catname3= span({className:'cattext',innerHTML:"plantas"},cat3)
        // let cat4 = div({className:'boxTheme',innerHTML:"🍍"},divCategorias2)
        // let catname4= span({className:'cattext',innerHTML:"comidas"},cat4)


        new GameButton (btnsDIV,"JUGAR", () => {
            let event = new CustomEvent('goto-state',{
                detail:{
                    state:GAME_STATE
                },
                bubbles:true,
                cancelable:true,
                composed:false
            });
            this.dispatchEvent(event);
        });

        new GameButton (btnsDIV,"REGRESAR", () => {let event = new CustomEvent('goto-state',{
            detail:{
                state:MENU_STATE
            },
            bubbles:true,
            cancelable:true,
            composed:false
        });
        this.dispatchEvent(event);});
    }
}
customElements.define('theme-view',ThemeView);