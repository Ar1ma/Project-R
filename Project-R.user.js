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

var pr_content = null;

var pr_page = null;

var pr_data = null;



/******** Functions ********/

function runCheck (){

	pr_content = document.getElementById("content");

	if (pr_content.className==""){
		
		pr_content.className="running";
		return true;

	} else {

		return false;
	}
}

function detectPage (){

	if ( document.URL.indexOf("?mode=all") > -1){

		pr_page = "All";

	} else if (document.URL.indexOf("?mode=myhistory") > -1) {

		pr_page = "History";

	} else {

		pr_page = "Main";

	}

}
function getData (){

	var content_padding = document.getElementById("content-padding");
	pr_data = content_padding.cloneNode(true);

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
	var fishing_menu = document.createElement('div');
	fishing_menu.id = "fishing_menu";
	fishing_menu.className = "gaia_tab_menu_structure gaia_navigation_tabs current_tab_shops_landing_shops";
	var yui_u_first = document.createElement('div');
	yui_u_first.id = "left_content_holder";
	yui_u_first.className = "yui-u first";
	var yui_u_last = document.createElement('div');
	yui_u_last.id = "right_content_holder";
	yui_u_last.className = "yui-u last";
	
	yui_g.appendChild(fishing_menu);
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

function createMenu (){

	var fishing_menu = document.getElementById("fishing_menu");

	var status_main = document.createElement('div');

	if (pr_page == "Main") {

		status_main.className = "tab  current_tab";

	} else {

		status_main.className = "tab ";
	
	}

	var status_main_link = document.createElement('a');
	status_main_link.className = "link ";
	status_main_link.setAttribute('href', 'stats.php');
	status_main_link.innerHTML = "Overview";

	status_main.appendChild(status_main_link);
	fishing_menu.appendChild(status_main);


	var all_status = document.createElement('div');

	if (pr_page == "All") {

		all_status.className = "tab  current_tab";

	} else {

		all_status.className = "tab ";
	
	}

	var all_status_link = document.createElement('a');
	all_status_link.className = "link ";
	all_status_link.setAttribute('href', 'stats.php?mode=all');
	all_status_link.innerHTML = "More Rankings";

	all_status.appendChild(all_status_link);
	fishing_menu.appendChild(all_status);


	var history = document.createElement('div');

	if (pr_page == "History") {

		history.className = "tab  last_tab current_tab";

	} else {

		history.className = "tab  last_tab";
	
	}

	var history_link = document.createElement('a');
	history_link.className = "link ";
	history_link.setAttribute('href', 'stats.php?mode=myhistory');
	history_link.innerHTML = "My History";

	history.appendChild(history_link);
	fishing_menu.appendChild(history);

	var menu_end = document.createElement('div');
	menu_end.className = "tab_end";
	menu_end.innerHTML = "&nbsp;";

	fishing_menu.appendChild(menu_end);


}

function placeData (){

	var left_content_holder = document.getElementById("left_content_holder");
	left_content_holder.appendChild(pr_data);

}

/****** Main Fuction *******/
function initMain (){

	var running = runCheck ();

	if (running){

		detectPage ();

		getData ();

		clearContent();
		
		createHolder();

		createMenu();

		placeData();
	}


}

/*** Run main when content is loaded ***/

document.addEventListener("DOMContentLoaded", initMain , false);


