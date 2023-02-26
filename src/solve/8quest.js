

function _solve8() {
    const answers = document.getElementsByClassName('b_cards bt_lstcl_card btcc btcNoImg');
    for (let i = 0; i < answers.length; i++) {
        answers[i].click();
    }
    console.log('solve8');
}

export const solve8 = _solve8;
