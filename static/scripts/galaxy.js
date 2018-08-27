define("galaxy",["exports","libs/underscore","libs/backbone","mvc/base-mvc","mvc/user/user-model","utils/metrics-logger","utils/add-logging","utils/localization"],function(e,t,o,a,r,n,i,l){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function g(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}function c(e,t){return this._init(e||{},t||{})}Object.defineProperty(e,"__esModule",{value:!0});var u=g(t),p=g(o),f=s(a),d=s(r),y=s(n),b=s(i),_=s(l);(0,b.default)(c,"GalaxyApp");var v="galaxy:debug:namespaces",m=!1;try{m="true"==localStorage.getItem("galaxy:debug")}catch(e){console.log((0,_.default)("localStorage not available for debug flag retrieval"))}c.prototype._init=function(e,t){var o=this;return u.extend(o,p.Events),m&&(o.logger=console,console.debug("debugging galaxy:","options:",e,"bootstrapped:",t)),o._processOptions(e),o.root=e.root||"/",o.params=e.params||{},o.session_csrf_token=e.session_csrf_token||null,o._initConfig(e.config||{}),o._patchGalaxy(window.Galaxy),o._initLogger(o.options.loggerOptions||{}),o.debug("GalaxyApp.options: ",o.options),o.debug("GalaxyApp.config: ",o.config),o.debug("GalaxyApp.logger: ",o.logger),o._initLocale(),o.debug("GalaxyApp.localize: ",o.localize),o.config=e.config||{},o.debug("GalaxyApp.config: ",o.config),o._initUser(e.user||{}),o.debug("GalaxyApp.user: ",o.user),o._initUserLocale(),o.debug("currentLocale: ",sessionStorage.getItem("currentLocale")),o._setUpListeners(),o.trigger("ready",o),o},c.prototype.defaultOptions={patchExisting:!0,root:"/",session_csrf_token:null},c.prototype._processOptions=function(e){var t=this,o=t.defaultOptions;t.options={};for(var a in o)o.hasOwnProperty(a)&&(t.options[a]=e.hasOwnProperty(a)?e[a]:o[a]);return t},c.prototype._initConfig=function(e){var t=this;return t.config=e,t.config.debug=m||t.config.debug,t},c.prototype._patchGalaxy=function(e){var t=this;if(t.options.patchExisting&&e)for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},c.prototype._initLogger=function(e){var t=this;if(t.config.debug){e.consoleLogger=e.consoleLogger||console,e.consoleLevel=e.consoleLevel||y.default.MetricsLogger.ALL;try{e.consoleNamespaceWhitelist=localStorage.getItem(v).split(",")}catch(e){}try{e.consoleFlattenMessages="true"==localStorage.getItem("galaxy:debug:flatten")}catch(e){}console.log(e.consoleFlattenMessages)}return t.logger=new y.default.MetricsLogger(e),t.emit={},["log","debug","info","warn","error","metric"].map(function(e){t.emit[e]=function(o){t.logger.emit(e,arguments[0],Array.prototype.slice.call(arguments,1))}}),t.config.debug&&(f.default.LoggableMixin.logger=t.logger),t},c.prototype._initLocale=function(e){var t=this;return t.debug("_initLocale:",e),t.localize=_.default,window._l=t.localize,t},c.prototype._initUserLocale=function(e){var t=this,o=!!t.config.default_locale&&t.config.default_locale.toLowerCase(),a={};t.user&&t.user.attributes.preferences&&"extra_user_preferences"in t.user.attributes.preferences&&(a=JSON.parse(t.user.attributes.preferences.extra_user_preferences));var r="localization|locale"in a&&a["localization|locale"].toLowerCase();"auto"==r&&(r=!1);var n="undefined"==typeof navigator?"__root":(navigator.language||navigator.userLanguage||"__root").toLowerCase(),i=r||o||n;sessionStorage.setItem("currentLocale",i)},c.prototype._initUser=function(e){var t=this;return t.debug("_initUser:",e),t.user=new d.default.User(e),t.user.logger=t.logger,t},c.prototype._setUpListeners=function(){var e=this;return e.lastAjax={},$(document).bind("ajaxSend",function(t,o,a){var r=a.data;try{r=JSON.parse(r)}catch(e){}e.lastAjax={url:location.href.slice(0,-1)+a.url,data:r}}),e},c.prototype.debugging=function(e){var t=this;try{if(void 0===e)return"true"===localStorage.getItem("galaxy:debug");if(e)return localStorage.setItem("galaxy:debug",!0),!0;localStorage.removeItem("galaxy:debug"),t.debuggingNamespaces(null)}catch(e){console.log((0,_.default)("localStorage not available for debug flag retrieval"))}return!1},c.prototype.debuggingNamespaces=function(e){var t=this;try{if(void 0===e){var o=localStorage.getItem(v);return"string"==typeof o?o.split(","):[]}null===e?localStorage.removeItem(v):localStorage.setItem(v,e);var a=t.debuggingNamespaces();return t.logger&&(t.logger.options.consoleNamespaceWhitelist=a),a}catch(e){console.log((0,_.default)("localStorage not available for debug namespace retrieval"))}},c.prototype.toString=function(){return"GalaxyApp("+(this.user?this.user.get("email")||"(anonymous)":"uninitialized")+")"},window.Galaxy=window.Galaxy||new c,e.default={GalaxyApp:c}});
//# sourceMappingURL=../maps/galaxy.js.map
