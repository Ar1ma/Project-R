// Project-R
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

var pr_Data = null;



/******** Functions ********/

function runCheck (){

	if (pr_content.className==""){
		pr_content.className="running";
		return true;
	} else {

		return false;
	}
}

function getData (){

	var content_padding = document.getElementById("content-padding");
	pr_Data = content_padding.cloneNode();

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

	var grid_rc_container_top = document.createElement('div');
	grid_rc_container_top.className = "grid_rc_container_top";
	var rc_top_left = document.createElement('div');
	rc_top_left.className = "rc_top_left";
	var rc_top_right = document.createElement('div');
	rc_top_right.className = "rc_top_right";

	grid_rc_container_top.appendChild(rc_top_left);
	grid_rc_container_top.appendChild(rc_top_right);
	bd.appendChild (grid_rc_container_top);

	var yui_g = document.createElement('div');
	yui_g.className = "yui-g";
	var yui_u_first = document.createElement('div');
	yui_u_first.id = "left_content";
	yui_u_first.className = "yui-u first";
	var yui_u_last = document.createElement('div');
	yui_u_last.id = "right_content";
	yui_u_last.className = "yui-u last";

	yui_g.appendChild(yui_u_first);
	yui_g.appendChild(yui_u_last);
	bd.appendChild (yui_g);

	var grid_rc_container_bottom = document.createElement('div');
	grid_rc_container_bottom.className = "grid_rc_container_bottom";
	var rc_bottom_left = document.createElement('div');
	rc_bottom_left.className = "rc_bottom_left";
	var rc_bottom_right = document.createElement('div');
	rc_bottom_right.className = "rc_bottom_right";

	grid_rc_container_bottom.appendChild(rc_bottom_left);
	grid_rc_container_bottom.appendChild(rc_bottom_right);
	bd.appendChild (grid_rc_container_bottom);

	gaia_content.appendChild (menu_shadow);
	gaia_content.appendChild (bd);

	pr_content.appendChild(gaia_content);

}


/****** Main Fuction *******/
function initMain (){

	var running = runCheck ();

	if (running){

		getData ();

		clearContent();
		
		createHolder();
	}


}

/*** Run main when content is loaded ***/

document.addEventListener("DOMContentLoaded", initMain , false);


