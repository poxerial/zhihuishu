// ==UserScript==
// @name         智慧树在线大学校内课自动刷课
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  智慧树自动刷课，仅限在线大学课程(*://hike.zhihuishu.com/aidedteaching/sourceLearning/*)
// @author       poxerial
// @match        *://hike.zhihuishu.com/aidedteaching/sourceLearning/*
// @icon         https://www.google.com/s2/favicons?domain=zhihuishu.com
// @grant        unsafeWindow
// ==/UserScript==

(function() {
    'use strict';
    var $ = unsafeWindow.jQuery;
    setTimeout(function(){
               $(".volumeIcon").click();
               $(".speedTab15").click();
               $(".bigPlayButton.pointer").click();
               $(".line1bq").click();
        },2000);
    console.log("加载成功");
    setInterval(function(){
        if ($("div.file-item.active i.icon-finish").length > 0){
            changeFile(parseInt($(".file-item.active").attr("id").slice(5)) + 1);
            setTimeout(function(){
                $(".volumeIcon").click();
                $(".speedTab15").click();
                $(".bigPlayButton.pointer").click();
                $(".line1bq").click();
            },2000);
        }
        if ($(".bigPlayButton.pointer").css("display") == "block"){
            $(".bigPlayButton.pointer").click();
        }
    }, 2000)
})();