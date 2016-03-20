/*
 * spa.util.js
 * 提供通用的工具方法
 */

/*jslint         browser : true, continue : true,
  devel  : true, indent  : 2,    maxerr   : 50,
  newcap : true, nomen   : true, plusplus : true,
  regexp : true, sloppy  : true, vars     : false,
  white  : true
*/

/*global $, spa*/

spa.util = (function () {
	
	//---------------- BEGIN MODULE SCOPE VARIABLES --------------
	var makeError;
	//----------------- END MODULE SCOPE VARIABLES ---------------
	
	//------------------- BEGIN PUBLIC METHODS -------------------
	makeError = function (name_text, msg_text, data) {
		var error = new Error();
		error.name = name_text;
		error.message = msg_text;
		
		if ( data ) { error.data = data; }
		
		return error;
	};
	//-------------------- END PUBLIC METHODS --------------------
	
	//------------------- RETURN PUBLIC METHODS ------------------
	return {
		makeError : makeError
	};
}());
