export class ScoreService {
    constructor(controller){
        this.controller = controller;
        this.getScores();
    }

    getScores(){
        let top3 = [{},{},{}];
        fetch(`https://jesusretanacardmemorygame-default-rtdb.firebaseio.com/data.json`)
            .then(response => {
                response.json()
                    .then(data => {
                        let num1 = Infinity;
                        let num2 = Infinity;
                        let num3 = Infinity;
        
                        for (const score in data) {
                            const element = data[score];
        
                            if (element.score < num1) {
                                top3[2] = top3[1];
                                top3[1] = top3[0];
                                top3[0] = element;
                                num3 = num2;
                                num2 = num1;
                                num1 = element.score;
                            } else if (element.score < num2) {
                                top3[2] = top3[1];
                                top3[1] = element;
                                num3 = num2;
                                num2 = element.score;
                            } else if (element.score < num3) {
                                top3[2] = element;
                                num3 = element.score;
                            }
                        }
                        console.log(top3); // Check the populated top3 array
                        this.controller.showScores(top3);
                    })
                    .catch(error => {
                        console.log('Error parsing JSON for Scores:', error);
                    });
            })
            .catch(error => {
                console.log('Error getting scores:', error);
            });
        
    }
}