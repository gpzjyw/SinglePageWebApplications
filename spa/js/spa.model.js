/*
 * spa.model.js
 * 为应用提供数据
 */

/*jslint         browser : false, continue : true,
  devel  : true, indent  : 2,    maxerr   : 50,
  newcap : true, nomen   : true, plusplus : true,
  regexp : true, sloppy  : true, vars     : false,
  white  : true
*/

/*global $, spa*/

spa.model = (function () {
	//---------------- BEGIN MODULE SCOPE VARIABLES --------------
	var getPeopleList;
	//----------------- END MODULE SCOPE VARIABLES ---------------

	//------------------- BEGIN UTILITY METHODS ------------------
	//-------------------- END UTILITY METHODS -------------------

	//------------------- BEGIN PUBLIC METHODS -------------------
	getPeopleList = function () {
		return [
			{
				name    : 'JiPeng',
				id	    : '001',
				content : 'Hello, JiPeng'
			},
			{
				name    : 'Jack',
				id	    : '002',
				content : 'Hello, Jack'
			},
			{
				name    : 'Eamon',
				id	    : '003',
				content : 'How are you, Eamon?'
			},
			{
				name    : 'Lily',
				id	    : '004',
				content : 'Lily, what about going skiing?'
			},
			{
				name    : 'Tom',
				id	    : '005',
				content : 'Tom, you are so handson today'
			},
			{
				name	: 'Zhang Jihui',
				id		: '006',
				content	: 'Hi, Jihui, do you feel good now?'
			}
		]
	};
	//------------------- END PUBLIC METHODS ---------------------

	//------------------- RETURN PUBLIC METHODS ------------------
	return {
		getPeopleList : getPeopleList
	};
}());
