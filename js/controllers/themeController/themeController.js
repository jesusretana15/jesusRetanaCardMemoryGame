import { Controller } from "../controller.js";
import { ThemeView } from "../themeController/themeView.js";
 
export class ThemeController extends Controller{
     constructor(parent){
        super(parent);
        this.view = new ThemeView(parent ,this) 
    }
}