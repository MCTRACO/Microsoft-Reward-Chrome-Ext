
export function solve4() {
    function getanswer() {
        return _w.rewardsQuizRenderInfo.correctAnswer;
    }
    const answer = getanswer();
    const answers = document.getElementsByClassName('rqOption');

    for (let i = 0; i < answers.length; i++) {
        if (answers[i].getAttribute('value')==answer) {
            answers[i].click();
        }
    }
    console.log('Solve 4');
}
