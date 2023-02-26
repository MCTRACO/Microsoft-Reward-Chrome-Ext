'use strict';

import {solve2} from '../solve/2quest.js';
import {solve4} from '../solve/4quest.js';
import {solve8} from '../solve/8quest.js';

document.getElementById('Solve').addEventListener('click', async () => {
    const tabs = await chrome.tabs.query({active: true, currentWindow: true});
    const currentTabId = tabs[0].id;
    console.log(currentTabId);
    chrome.scripting.executeScript({
        target: {tabId: currentTabId}, // access global here
        function: solve2,
    },
    );
});
