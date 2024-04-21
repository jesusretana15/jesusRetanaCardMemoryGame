import { DifficultyController } from "../controllers/difficultyController/difficultyController.js";
import { LoadingController } from "../controllers/loading/loadingController.js";
import { LoginController } from "../controllers/loginController/loginController.js";
import { MenuController } from "../controllers/menu/menuController.js";
import { PlayController } from "../controllers/playController /playController.js";
import { SavingController } from "../controllers/savingController/savingController.js";
import { ScoresController } from "../controllers/scoresController/scoresController.js";
import { ThemeController } from "../controllers/themeController/themeController.js";
import { div } from "../libs/html.js";


export class GameManager {
    constructor( ){
        this.mainContainer = div({id:'mainContainer',className:'mainContainer'},document.body);
        this.navContainer = div({id:'navContainer',className:'navContainer'},this.mainContainer);
        this.contentContainer = div({id:'contentContainer',className:'contentContainer'},this.mainContainer);
        this.currentController = null;   
        this.menuController = null;     


        this.mainContainer.addEventListener('on-loading-completed',(event) => {
            this.loadingComplete();
        })
        
        this.mainContainer.addEventListener('goto-state',(event) => {
            this.goto(event.detail.state)
        })

        
        // this.goto(LOADING_STATE)
        this.checkLocalStorage()
        this.goto(LOADING_STATE)

    }

    loadingComplete(){
        console.log('loading complete continue after loading complete')
        this.navContainer.style.background="#D2B48C"
        this.currentController.delete()

    }

    goto(state){

        if (this.menuController !== null) {
            this.menuController.delete();
        }
        
        switch (state) {
            case LOADING_STATE:

                this.currentController = new LoadingController(this.contentContainer)
                break;
        
            case MENU_STATE:
                this.navContainer.innerHTML = "MENU"
                this.menuController = new MenuController(this.contentContainer)
                break;
            case SAVING_GAME:
                this.navContainer.innerHTML = "GUARDANDO"
                this.menuController = new SavingController(this.contentContainer)
                break;
            case RESULTS_STATE:
                // this.menuController.delete();
                this.navContainer.innerHTML = "RESULTADOS"
                this.menuController = new ScoresController(this.contentContainer)
                break;
            case LOGIN_STATE:
                // this.menuController.delete();
                this.navContainer.innerHTML = "INICIO SESION"
                this.menuController = new LoginController(this.contentContainer)
                break;
            case THEME_STATE:
                // this.menuController.delete();
                this.navContainer.innerHTML = "CATEGORIAS"
                this.menuController = new ThemeController(this.contentContainer)
                break;
            case DIFFICULTY_STATE:
                // this.menuController.delete();
                this.navContainer.innerHTML = "DIFICULTAD"
                this.menuController = new DifficultyController(this.contentContainer)
                break;
            case SCORES_STATE:
                // this.menuController.delete();
                this.navContainer.innerHTML = "PUNTAJES"
                this.menuController = new ScoresController(this.contentContainer)
                break;
            case GAME_STATE:
                // this.menuController.delete();
                this.navContainer.innerHTML = "JUEGO"
                this.menuController = new PlayController(this.contentContainer)
                break;
        
            default:
                break;
        }
       
    }

    checkLocalStorage(){
      if (!localStorage.getItem('theme')) {
        localStorage.setItem('theme',THEME_PLANTS)
      } 
      if (!localStorage.getItem('difficulty')) {
        localStorage.setItem('difficulty', DIFFICULTY_EASY)
      } 
    }
}

export const LOADING_STATE = 0;
export const MENU_STATE = 1;
export const RESULTS_STATE = 2;
export const LOGIN_STATE = 3;
export const THEME_STATE = 4;
export const DIFFICULTY_STATE = 5;
export const SCORES_STATE = 6;
export const GAME_STATE = 7;
export const SAVING_GAME = 8;

export const THEME_FACES = 'faces'
export const THEME_CLOTHES = 'clothes'
export const THEME_PLANTS = 'flowers'
export const THEME_FOOD = 'foods'

export const DIFFICULTY_VERY_EASY = 4;
export const DIFFICULTY_EASY = 8;
export const DIFFICULTY_NORMAL = 10;
export const DIFFICULTY_HARD = 12;