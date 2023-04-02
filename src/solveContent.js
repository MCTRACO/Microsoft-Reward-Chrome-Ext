function getanswer4(){
    return _w.rewardsQuizRenderInfo.correctAnswer;
}

function getanswer(){
    return parseInt(_w.rewardsQuizRenderInfo.correctAnswer);
}
function getkey(){
     return  _G.IG;
}

function decodecode(key,name){
    let t = 0;
    for (let i = 0; i < name.length; i++) {
       t += name.charCodeAt(i);
}
     t+= parseInt(key.slice(-2),16)
    return t
}


function solve2(){ //solve this or that

let answer = getanswer();
let answers = document.getElementsByClassName("btOptionCard")
let key = getkey();
    
if (decodecode(key,answers[0].getAttribute("data-option")) == answer){
    answers[0].click();
}
if (decodecode(key,answers[1].getAttribute("data-option")) == answer){
    answers[1].click();
}
    
}

function solve8() { //solve 5 correct options
      let answers = document.getElementsByClassName("b_cards bt_lstcl_card btcc btcNoImg")
for (let i = 0; i < answers.length; i++) {
    try{
        answers[i].click();
    }
    catch{
        console.log("a");
    }
  
}

}

function noption() {
    return _w.rewardsQuizRenderInfo.numberOfOptions
}

function solve4(){ // solve correct
let answer = getanswer4();
let answers = document.getElementsByClassName("rqOption");
for (let i = 0; i < answers.length; i++) {
  if(answers[i].getAttribute("value")==answer){
      answers[i].click();
  }
}
}

function runScript(){
    switch (noption()){ //solve depending on type
        case 2:
            solve2();
            break;
        case 4:
            solve4();
            break;
        case 8:
            solve8();
            break;
        }
}


console.log(noption())
if (document.getElementsByClassName("TriviaOverlayData").length == 1){
    if(document.getElementById("quizCompleteContainer")){ //completed
        document.getElementById("rqCloseBtn").click();
        console.log("closed") // click the x close button to close pop up
        setTimeout(() => chrome.runtime.sendMessage({// tell background to close the tab after 1s to give time to close the popup
            action: 'closeTab',
        }),1000);
    }
    else {
    if (document.getElementById("btoption0")){ //daily quiz
        console.log("quiz")
        document.getElementById("btoption0").click();
        setTimeout(() => chrome.runtime.sendMessage({// tell background to close the tab after 1s to give time to close the popup
            action: 'closeTab',
        },1000))
    }
    else {
        if(document.getElementById("rqStartQuiz")){ // start
        document.getElementById("rqStartQuiz").click();
        }
        runScript(); // solving
    }
    }
}
