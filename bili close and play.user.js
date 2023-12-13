// ==UserScript==
// @name         bili close and play
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @require      https://code.jquery.com/jquery-3.7.1.min.js
// @match        https://www.bilibili.com/video/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    const video = document.querySelector("video");

    video.addEventListener("pause", (event) => {

    setTimeout(()=>{
        console.log('finding');
        if($("div.bili-mini-close-icon").length>0){
            console.log('find and click');
            $("div.bili-mini-close-icon").click();
            $('div.bpx-player-video-perch').click();
        }
    }, 3000);

});

})();