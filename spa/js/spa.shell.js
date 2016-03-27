/*
 * spa.shell.js
 * 顶层控制容器
 */

/*jslint         browser : true, continue : true,
  devel  : true, indent  : 2,    maxerr   : 50,
  newcap : true, nomen   : true, plusplus : true,
  regexp : true, sloppy  : true, vars     : false,
  white  : true
*/

/*global $, spa*/

spa.shell = (function () {
	//---------------- BEGIN MODULE SCOPE VARIABLES --------------
	var configMap = {
			main_html : String()
			+ '<div class="spa-shell-head">'
				+ '<a class="first selected"><h2>Tab1</h2></a>'
				+ '<a class="second"><h2>Tab2</h2></a>'
				+ '<a class="third"><h2>Tab3</h2></a>'
				+ '<a class="fourth"><h2>Tab4</h2></a>'
			+ '</div>'
			+ '<div class="spa-shell-main"></div>'
			+ '<div class="spa-shell-foot"></div>'
		},
		stateMap = {
			$container : null,
			selectedItem : 1
		},
		jqueryMap = {},
		
		setJqueryMap, removeSelected,
		onClickFirst, onClickSecond, onClickThird, onClickFourth, onHashchange,
		initModule;
	//----------------- END MODULE SCOPE VARIABLES ---------------
	
	
	//------------------- BEGIN UTILITY METHODS ------------------
	
	//-------------------- END UTILITY METHODS -------------------
	
	
	//--------------------- BEGIN DOM METHODS --------------------
	setJqueryMap = function () {
		var $container = stateMap.$container;
		jqueryMap = {
			$container    : $container,
			$spaShellHead : $container.find('.spa-shell-head'),
			$first	      : $container.find('.first'),
			$second       : $container.find('.second'),
			$third        : $container.find('.third'),
			$fourth       : $container.find('.fourth'),
			$main		  : $container.find('.spa-shell-main')
		};
	};
	removeSelected = function () {
		switch (stateMap.selectedItem) {
			case 1:
				jqueryMap.$first.removeClass('selected');
				break;
			case 2:
				jqueryMap.$second.removeClass('selected');
				break;
			case 3:
				jqueryMap.$third.removeClass('selected');
				break;
			case 4:
				jqueryMap.$fourth.removeClass('selected');
				break;
			default:
				break;
		}		
	};
	//---------------------- END DOM METHODS ---------------------
	
	//------------------- BEGIN EVENT HANDLERS -------------------
	onClickFirst = function () {
		location.hash = 1;
	};
	onClickSecond = function () {
		location.hash = 2;
	};
	onClickThird = function () {
		location.hash = 3;
	};
	onClickFourth = function () {
		location.hash = 4;
	};
	onHashchange = function () {
		switch (location.hash) {
			case '#1':
				removeSelected();
				jqueryMap.$first.addClass('selected');
				stateMap.selectedItem = 1;
				spa.chat.initModule(jqueryMap.$main, spa.model.getPeopleList());
				break;
			case '#2':
				removeSelected();
				jqueryMap.$second.addClass('selected');
				stateMap.selectedItem = 2;
				spa.browser.initModule( jqueryMap.$main );
				break;
			case '#3':
				removeSelected();
				jqueryMap.$third.addClass('selected');
				stateMap.selectedItem = 3;
				break;
			case '#4':
				removeSelected();
				jqueryMap.$fourth.addClass('selected');
				stateMap.selectedItem = 4;
				break;
			default:
				break;
		}
	};
	//-------------------- END EVENT HANDLERS --------------------
	
	//------------------- BEGIN PUBLIC METHODS -------------------
	initModule = function ( $container ) {
		stateMap.$container = $container;
		$container.html( configMap.main_html );
		setJqueryMap();
		
		jqueryMap.$first.click(onClickFirst);
		jqueryMap.$second.click(onClickSecond);
		jqueryMap.$third.click(onClickThird);
		jqueryMap.$fourth.click(onClickFourth);
		
		$(window).bind( 'hashchange', onHashchange).trigger( 'hashchange' );
	};
	//------------------- END PUBLIC METHODS ---------------------
	
	//------------------- RETURN PUBLIC METHODS ------------------
	return {
		initModule : initModule
	};
}());








