/*
 * spa.browser.js
 * 
 */

/*jslint         browser : true, continue : true,
  devel  : true, indent  : 2,    maxerr   : 50,
  newcap : true, nomen   : true, plusplus : true,
  regexp : true, sloppy  : true, vars     : false,
  white  : true
*/

/*global $, spa*/

spa.browser = (function () {
	
	//---------------- BEGIN MODULE SCOPE VARIABLES --------------
	var configMap = {
			append_html : String()
			+ '<div class="browser">'
				+ '<form class="form">'
					+ '<input type="text" class="address" />'
					+ '<input type="submit" class="submit" />'
				+ '</form>'
				+ '<div class="iframe-container">'
					+ '<iframe class="iframe"></iframe>'
				+ '<div>'
			+ '</div>',
			addressRegexp : /^http[s]?:\/\//
		},
		stateMap = {
			$container : null
		},
		jqueryMap = {},
		
		setJqueryMap, createAddress,
		onSubmit,
		initModule;
	//----------------- END MODULE SCOPE VARIABLES ---------------

	//------------------- BEGIN UTILITY METHODS ------------------
	//-------------------- END UTILITY METHODS -------------------

	//--------------------- BEGIN DOM METHODS --------------------
	setJqueryMap = function () {
		var $container = stateMap.$container;
		jqueryMap = {
			$container : $container,
			$form	   : $container.find('.form'),
			$address   : $container.find('.address'),
			$submit    : $container.find('.submit'),
			$iframe    : $container.find('.iframe')
		};
	};
	//---------------------- END DOM METHODS ---------------------

	//------------------- BEGIN EVENT HANDLERS -------------------
	onSubmit = function ( event ) {
		event.preventDefault();
		if ( configMap.addressRegexp.test(jqueryMap.$address.val()) ) {
			jqueryMap.$iframe.attr('src', jqueryMap.$address.val() );
		} else {
			alert('please add the http://');
		}
	};
	//-------------------- END EVENT HANDLERS --------------------

	//------------------- BEGIN PUBLIC METHODS -------------------
	initModule = function ( $container ) {
		stateMap.$container = $container;
		$container.html( configMap.append_html );
		setJqueryMap();
		
		jqueryMap.$form.submit( onSubmit );
	};
	//------------------- END PUBLIC METHODS ---------------------

	//------------------- RETURN PUBLIC METHODS ------------------
	return {
		initModule : initModule
	}
}());
