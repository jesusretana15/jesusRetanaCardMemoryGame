export class PlayService {
    constructor(controller){
        this.controller = controller;
        this.getData();
    }
    getData(){
        let theme = localStorage.getItem('theme')
        let difficulty = localStorage.getItem('difficulty')
        fetch(`http://localhost:4000/cards/${difficulty}/${theme}`).then(response =>  {
            response.json().then (data => {
                this.controller.show(data.cards);
            }).catch(error =>{
                console.log(error)
            })

        }).catch (error =>{
            console.log(error)
        })
    }


}