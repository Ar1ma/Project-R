﻿// Project-R
//
// Maintainer: Arima Begoun, aka Ar1ma (Begooon@hotmail.com)
//
// --------------------------------------------------------------------
//
// ==UserScript==
// @name          Project-R
// @namespace     Ar1ma.gaiaonline.fishing
// @description   Revamps the stats pages
// @include       http://*.gaiaonline.com/games/fishing/stats.php*
// ==/UserScript==

/******** switching to firebug log ********/
/*if(unsafeWindow.console){
   var FireBug_log = unsafeWindow.console.log;
}*/


/******** Globals ********/

var pr_content = document.getElementById("content");



/******** Functions ********/

function runCheck (){

	if (pr_content.className==""){
		pr_content.className="running";
		return true;
	} else {

		return false;
	}
}

function clearContent (){

	var content_child = document.getElementById("content-padding");
	pr_content.removeChild(content_child);
	
}

/****** Main Fuction *******/
function initMain (){

	var running = runCheck ();

	if (running){

	//clearContent();	

	}


}

/*** Run main when content is loaded ***/

document.addEventListener("DOMContentLoaded", initMain , false);
//initMain();

