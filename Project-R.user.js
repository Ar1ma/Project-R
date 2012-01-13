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

	var content_padding = document.getElementById("content-padding");
	pr_content.removeChild(content_padding);
	
}


function createHolder (){
	
	var gaia_content = document.createElement('div');
	gaia_content.id = "gaia_content";
	gaia_content.className = "grid_billie_holiday";


	var menu_shadow = document.createElement('div');
	menu_shadow.id = "menu_shadow";

	var bd = document.createElement('div');
	bd.id = "bd";

	gaia_content.appendChild (menu_shadow);
	gaia_content.appendChild (bd);

	pr_content.appendChild(gaia_content);

}


/****** Main Fuction *******/
function initMain (){

	var running = runCheck ();

	if (running){

		clearContent();
		
		createHolder();
	}


}

/*** Run main when content is loaded ***/

document.addEventListener("DOMContentLoaded", initMain , false);


