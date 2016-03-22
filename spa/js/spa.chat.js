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
			$container : null,
			people : null
		},
		jqueryMap = {},
		
		setJqueryMap, createChat, updateContent,
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
			$chat      : $container.find('.chat'),
			$list      : $container.find('.list'),
			$content   : $container.find('.content')
		};
	};
	//为chat中的list和content创建初始内容
	createChat = function () {
		var people = stateMap.people,
			length = people.length;
		for (var i=0; i<length; i++) {
			jqueryMap.$list.append('<div class=' + people[i]['id'] + '>' 
					+ people[i]['name'] 
					+ '</div>');
		}
	};
	//更新content中的内容
	updateContent = function ( index ) {
		if ( stateMap.people[index] ) {
			jqueryMap.$content.html( stateMap.people[index]['content'] );
		}
	};
	//---------------------- END DOM METHODS ---------------------

	//------------------- BEGIN EVENT HANDLERS -------------------
	//为左侧聊天list区域创建事件代理，当点击不同div时，更新右侧content内容
	onClickProxy = function ( event ) {
		var target = event.target,
			index = target.className;
		
		updateContent( +index - 1 );
	};
	//-------------------- END EVENT HANDLERS --------------------

	//------------------- BEGIN PUBLIC METHODS -------------------
	initModule = function ( $container, dataArray ) {
		stateMap.$container = $container;
		stateMap.people = dataArray;
		$container.html( configMap.append_html );
		setJqueryMap();
		
		createChat();		
		
		jqueryMap.$list.click( onClickProxy );
	};
	//------------------- END PUBLIC METHODS ---------------------


	//------------------- RETURN PUBLIC METHODS ------------------
	return {
		initModule : initModule
	}
	
}());
