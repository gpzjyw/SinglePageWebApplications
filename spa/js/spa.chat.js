/*
 * spa.chat.js
 * 生成聊天对话框
 */

/*jslint         browser : true, continue : true,
  devel  : true, indent  : 2,    maxerr   : 50,
  newcap : true, nomen   : true, plusplus : true,
  regexp : true, sloppy  : true, vars     : false,
  white  : true
*/

/*global $, spa*/

spa.chat = (function () {
	//---------------- BEGIN MODULE SCOPE VARIABLES --------------
	var configMap = {
			append_html : String() 
			+ '<div class="chat">'
				+ '<div class="list"></div>'
				+ '<div class="content"></div>'
			+ '</div>'
		},
		stateMap = {
			$container : null
		},
		jqueryMap = {},
		
		setJqueryMap, switchContent,
		onClickProxy,
		initModule;
	//----------------- END MODULE SCOPE VARIABLES ---------------

	//------------------- BEGIN UTILITY METHODS ------------------
	
	//-------------------- END UTILITY METHODS -------------------

	//--------------------- BEGIN DOM METHODS --------------------
	setJqueryMap = function () {
		var $container = stateMap.$container;
		jqueryMap = {
			$container : $container,
			$list : $container.find('.list'),
			$content   : $container.find('.content')
		};
	};
	//更新conten中的内容
	releaseContent = function () {
		
	};
	//---------------------- END DOM METHODS ---------------------

	//------------------- BEGIN EVENT HANDLERS -------------------
	//为左侧聊天list区域创建事件代理，当点击不同div时，更新右侧content内容
	onClickProxy = function ( event ) {
		
	};
	//-------------------- END EVENT HANDLERS --------------------

	//------------------- BEGIN PUBLIC METHODS -------------------
	initModule = function ( $container ) {
		stateMap.$container = $container;
		$container.html( configMap.append_html );
		
	};
	//------------------- END PUBLIC METHODS ---------------------


	//------------------- RETURN PUBLIC METHODS ------------------
	return {
		initModule : initModule
	}
	
}());
