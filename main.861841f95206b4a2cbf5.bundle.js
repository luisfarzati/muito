(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_lufo_w_muito_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(309),_Users_lufo_w_muito_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(197),_Users_lufo_w_muito_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_Users_lufo_w_muito_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__),_Users_lufo_w_muito_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(308),_Users_lufo_w_muito_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(198),_Users_lufo_w_muito_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(310),_Users_lufo_w_muito_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(311),_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(644),_material_ui_styles__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(643),react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);function toHsl(){for(var str=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:70,hash=0,i=0;i<str.length;i++)hash=str.charCodeAt(i)+((hash<<5)-hash);return"hsl(".concat(hash%360,", ").concat(s,"%, ").concat(l,"%)")}var styles={colorDefault:{backgroundColor:"inherit"}},useStyles=Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_7__.a)(function(){return styles},{name:"MuitoAvatar"});__webpack_exports__.a=function Avatar(_ref){var src=_ref.src,alt=_ref.alt,_ref$classes=_ref.classes,classes=void 0===_ref$classes?{}:_ref$classes,imgProps=_ref.imgProps,_ref$subject=(_ref.childrenClassName,_ref.subject),subject=void 0===_ref$subject?{name:""}:_ref$subject,props=Object(_Users_lufo_w_muito_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__.a)(_ref,["src","alt","classes","imgProps","childrenClassName","subject"]),_useState=Object(react__WEBPACK_IMPORTED_MODULE_8__.useState)(!1),_useState2=Object(_Users_lufo_w_muito_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.a)(_useState,2),showImage=_useState2[0],setShowImage=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_8__.useState)(!1),_useState4=Object(_Users_lufo_w_muito_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.a)(_useState3,2),showInitials=_useState4[0],setShowInitials=_useState4[1];Object(react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(function(){function _load(){return(_load=Object(_Users_lufo_w_muito_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.a)(_Users_lufo_w_muito_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(){var image;return _Users_lufo_w_muito_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(image=new Image,!Image.prototype.decode){_context.next=14;break}return image.src=src,_context.prev=3,_context.next=6,image.decode();case 6:setShowImage(!0),_context.next=12;break;case 9:_context.prev=9,_context.t0=_context.catch(3),setShowInitials(!0);case 12:_context.next=17;break;case 14:image.onload=function(){return setShowImage(!0)},image.onerror=function(){return setShowInitials(!0)},image.src=src;case 17:case"end":return _context.stop()}},_callee,null,[[3,9]])}))).apply(this,arguments)}src?function load(){return _load.apply(this,arguments)}():subject&&setShowInitials(!0)},[]);var styles=useStyles();return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6__.a,Object.assign({classes:Object(_Users_lufo_w_muito_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__.a)({root:classes.root},showImage?{colorDefault:styles.colorDefault}:{colorDefault:classes.colorDefault}),style:showImage||!subject.name?{}:{backgroundColor:toHsl(subject.name)}},props),showImage&&react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img",Object.assign({src:src,alt:alt,className:"MuiAvatar-img ".concat(classes.img||"")},imgProps)),showInitials&&function initials(){var _name$toUpperCase$tri=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").toUpperCase().trim().split(" "),_name$toUpperCase$tri2=Object(_Users_lufo_w_muito_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_5__.a)(_name$toUpperCase$tri),first=_name$toUpperCase$tri2[0],last=_name$toUpperCase$tri2.slice(1).pop()||"";return"".concat(first[0]||" ").concat(last[0]||" ").trim()}(subject.name)||null)}},314:function(module,exports,__webpack_require__){__webpack_require__(315),__webpack_require__(400),module.exports=__webpack_require__(401)},401:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(85),_storybook_addon_info__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(304),req=__webpack_require__(637);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addParameters)({options:{showPanel:!1}}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addDecorator)(Object(_storybook_addon_info__WEBPACK_IMPORTED_MODULE_1__.withInfo)({inline:!0,maxPropsIntoLine:1})),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(function loadStories(){req.keys().forEach(req)},module)}.call(this,__webpack_require__(158)(module))},465:function(module,exports,__webpack_require__){var map={"./nestedObjectAssign":256,"./nestedObjectAssign.js":256};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=465},637:function(module,exports,__webpack_require__){var map={"./Avatar.stories.tsx":638};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=637},638:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(85),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_components_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(106),stories=Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Avatar",module);stories.add("default",function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_2__.a,null)}),stories.add("with valid src",function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_2__.a,{src:"https://avatars2.githubusercontent.com/u/107509?v=4"})}),stories.add("with broken src",function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_2__.a,{src:"invalid.png"})}),stories.add("with initials",function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_2__.a,{src:"invalid.png",subject:{name:"Sarah Connor"}})})}.call(this,__webpack_require__(158)(module))}},[[314,1,2]]]);
//# sourceMappingURL=main.861841f95206b4a2cbf5.bundle.js.map