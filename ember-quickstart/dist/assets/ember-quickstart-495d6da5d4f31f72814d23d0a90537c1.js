"use strict"
define("ember-quickstart/app",["exports","ember-quickstart/resolver","ember-load-initializers","ember-quickstart/config/environment"],function(e,t,i,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=Ember.Application.extend({modulePrefix:r.default.modulePrefix,podModulePrefix:r.default.podModulePrefix,Resolver:t.default});(0,i.default)(a,r.default.modulePrefix)
var n=a
e.default=n}),define("ember-quickstart/components/people-list",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Component.extend({actions:{showPerson:function(e){alert(e)}}})
e.default=t}),define("ember-quickstart/helpers/app-version",["exports","ember-quickstart/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,i){function r(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.default.APP.version,n=r.versionOnly||r.hideSha,o=r.shaOnly||r.hideVersion,l=null
return n&&(r.showExtended&&(l=a.match(i.versionExtendedRegExp)),l||(l=a.match(i.versionRegExp))),o&&(l=a.match(i.shaRegExp)),l?l[0]:a}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=r,e.default=void 0
var a=Ember.Helper.helper(r)
e.default=a}),define("ember-quickstart/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=t.default
e.default=i}),define("ember-quickstart/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=t.default
e.default=i}),define("ember-quickstart/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","ember-quickstart/config/environment"],function(e,t,i){var r,a
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i.default.APP&&(r=i.default.APP.name,a=i.default.APP.version)
var n={name:"App Version",initialize:(0,t.default)(r,a)}
e.default=n}),define("ember-quickstart/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=i}),define("ember-quickstart/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"ember-data",initialize:t.default}
e.default=r}),define("ember-quickstart/initializers/export-application-global",["exports","ember-quickstart/config/environment"],function(e,t){function i(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var i
if("undefined"!=typeof window)i=window
else if("undefined"!=typeof global)i=global
else{if("undefined"==typeof self)return
i=self}var r,a=t.default.exportApplicationGlobal
r="string"==typeof a?a:Ember.String.classify(t.default.modulePrefix),i[r]||(i[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete i[r]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=i,e.default=void 0
var r={name:"export-application-global",initialize:i}
e.default=r}),define("ember-quickstart/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i={name:"ember-data",initialize:t.default}
e.default=i}),define("ember-quickstart/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=t.default
e.default=i}),define("ember-quickstart/router",["exports","ember-quickstart/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
i.map(function(){this.route("scientists")})
var r=i
e.default=r}),define("ember-quickstart/routes/scientists",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({model:function(){return["Marie Curie","Mae Jemison","Albert Hofmann"]}})
e.default=t}),define("ember-quickstart/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-quickstart/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"olWHSijD",block:'{"symbols":[],"statements":[[7,"h1"],[9],[0,"PeopleTracker"],[10],[0,"\\n"],[1,[21,"outlet"],false]],"hasEval":false}',meta:{moduleName:"ember-quickstart/templates/application.hbs"}})
e.default=t}),define("ember-quickstart/templates/components/people-list",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"VRcopa0f",block:'{"symbols":["person"],"statements":[[7,"h2"],[9],[1,[22,0,["title"]],false],[10],[0,"\\n\\n"],[7,"ul"],[9],[0,"\\n"],[4,"each",[[22,0,["people"]]],null,{"statements":[[0,"    "],[7,"li"],[9],[1,[22,1,[]],false],[3,"action",[[22,0,[]],"showPerson",[22,1,[]]]],[10],[0,"\\n"]],"parameters":[1]},null],[10]],"hasEval":false}',meta:{moduleName:"ember-quickstart/templates/components/people-list.hbs"}})
e.default=t}),define("ember-quickstart/templates/scientists",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"F1x5g3CV",block:'{"symbols":[],"statements":[[5,"people-list",[],[["@title","@people"],["List of Scientists",[22,0,["model"]]]]]],"hasEval":false}',meta:{moduleName:"ember-quickstart/templates/scientists.hbs"}})
e.default=t}),define("ember-quickstart/config/environment",[],function(){try{var e="ember-quickstart/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),i={default:JSON.parse(unescape(t))}
return Object.defineProperty(i,"__esModule",{value:!0}),i}catch(r){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("ember-quickstart/app").default.create({name:"ember-quickstart",version:"0.0.0+7e1d87e4"})
