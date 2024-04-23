import { div, span } from "../../libs/html.js";

export class ScoreView {
    constructor (parent,username,clicks,time,score){
        let number1= div({className:'top3View'},parent)
        this.num1Name = span({className:'nameTop',innerHTML:username},number1)
        let subNumber1 =  div({className:'top3ViewDetails'},number1)
        let top1ClicksDiv= div({className:'topInfo',},subNumber1)
        let top1ClicksTittle = span({className:'tittleDetail',innerHTML:"Clicks"},top1ClicksDiv)
        this.top1ClicksDetail = span({className:'dataDetail',innerHTML:clicks},top1ClicksDiv)
        let top1TimeDiv= div({className:'topInfo'},subNumber1)
        let top1TimeTittle = span({className:'tittleDetail',innerHTML:"Time"},top1TimeDiv)
        this.top1TimeDetail = span({className:'dataDetail',innerHTML:time },top1TimeDiv)
        let top1ScoreDiv= div({className:'topInfo'},subNumber1)
        let top1ScoreTittle = span({className:'tittleDetail',innerHTML:"Score"},top1ScoreDiv)
        this.Score1Detail = span({className:'dataDetail' ,innerHTML:score},top1ScoreDiv)
    }
}