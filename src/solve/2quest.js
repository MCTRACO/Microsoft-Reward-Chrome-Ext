function getanswer() {
    return parseInt(_w.rewardsQuizRenderInfo.correctAnswer);
}
function getkey() {
    return _G.IG;
}

function decodecode(key, name) {
    let t = 0;
    for (let i = 0; i < name.length; i++) {
        t += name.charCodeAt(i);
    }
    t+= parseInt(key.slice(-2), 16);
    return t;
}

function _solve2() {
    const answer = getanswer();

    const answers = document.getElementsByClassName('btOptionCard');

    const key = getkey();


    if (decodecode(key, answers[0].getAttribute('data-option')) == answer) {
        answers[0].click();
    }
    if (decodecode(key, answers[1].getAttribute('data-option')) == answer) {
        answers[1].click();
    }
}

export const solve2 = _solve2;
