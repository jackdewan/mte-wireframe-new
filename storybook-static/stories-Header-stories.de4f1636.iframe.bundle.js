"use strict";(self.webpackChunknext_app=self.webpackChunknext_app||[]).push([[758],{"./src/stories/Header.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Main:()=>Main,default:()=>Header_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),Disclosure=__webpack_require__("./src/stories/Disclosure.tsx"),Config={site:{owner:"Mountaintop Extracts",ownerShort:"MTE",title:"Mountaintop Extracts",domain:"",email:"",feedDescription:""},pageMeta:{openGraph:{twitterUser:"mte"},home:{url:"",slug:"/"},blogIndex:{url:"".concat("","/blog"),slug:"/blog"},blogIndexPage:{slug:"/blog/page/[page]"},post:{slug:"/blog/[slug]"},buildRss:{url:"".concat("","/buildrss"),slug:"/buildrss"},notFound:{url:"",slug:"/404"}},pagination:{pageSize:2,recentPostsSize:3},menuLinks:[{displayName:"Products",path:"/collections/products",subItems:[{displayName:"Edible",path:"/collections/edible"},{displayName:"Vape",path:"/collections/vape"},{displayName:"Gummies",path:"/collections/gummies"},{displayName:"Concentrate",path:"/collections/concentrate"},{displayName:"Infusion",path:"/collections/infusion"},{displayName:"All Categories",path:"/collections/categories"}]},{displayName:"Company",path:"/",subItems:[{displayName:"Our Story",path:"/our-story"},{displayName:"Events",path:"/blog/events"},{displayName:"FAQ",path:"/faq"},{displayName:"Contact Us",path:"/contact"},{displayName:"Compliance",path:"/compliance"}]},{displayName:"Learn",path:"/",subItems:[{displayName:"Articles",path:"/blog"},{displayName:"Learning Center",path:"/blog/learn"}]}],menuLinksRight:[{displayName:"Find Us",path:"/locator",subItems:[]},{displayName:"Merch",path:"/merch",subItems:[]}],footerLinks:[{displayName:"Privacy Policy",path:"/privacy-policy",subItems:[]},{displayName:"Terms and Conditions",path:"/terms-and-conditions",subItems:[]},{displayName:"Compliance",path:"/compliance",subItems:[]},{displayName:"Newsletter",path:"/newsletter",subItems:[]},{displayName:"Contact",path:"/contact",subItems:[]}]},DisclosureContext=__webpack_require__("./src/util/DisclosureContext.ts"),__jsx=react.createElement,MobileMenu=function MobileMenu(_ref){var isMenuOpen=_ref.isMenuOpen,setIsMenuOpen=_ref.setIsMenuOpen,_useContext=(0,react.useContext)(DisclosureContext.g),setOpenKey=(_useContext.openKey,_useContext.setOpenKey);return __jsx("div",{className:"fixed left-0 top-0 bg-gray-300 h-full w-full z-10 transition-all ease-in duration-500 overflow-x-scroll pb-52 lg:hidden ".concat(isMenuOpen?"block mt-14 lg:mt-20":"hidden")},__jsx("div",{className:"relative top-10 w-full"},__jsx(Disclosure.Z,null,Config.menuLinks.map((function(link){return __jsx(Disclosure.Z.Panel,{key:link.displayName,title:link.displayName,className:"p-4 border-b border-gray-200"},link.subItems.map((function(subItem){return __jsx(link_default(),{key:subItem.displayName,href:subItem.path,className:"px-4 py-5 bg-white",onClick:function onClick(){setOpenKey(null),setIsMenuOpen(!1)}},subItem.displayName)})))})))))};MobileMenu.displayName="MobileMenu",MobileMenu.__docgenInfo={description:"",methods:[],displayName:"MobileMenu",props:{isMenuOpen:{required:!0,tsType:{name:"boolean"},description:""},setIsMenuOpen:{required:!0,tsType:{name:"signature",type:"function",raw:"(_arg1: boolean) => void",signature:{arguments:[{name:"_arg1",type:{name:"boolean"}}],return:{name:"void"}}},description:""}}};try{MobileMenu.displayName="MobileMenu",MobileMenu.__docgenInfo={description:"",displayName:"MobileMenu",props:{isMenuOpen:{defaultValue:null,description:"",name:"isMenuOpen",required:!0,type:{name:"boolean"}},setIsMenuOpen:{defaultValue:null,description:"",name:"setIsMenuOpen",required:!0,type:{name:"(_arg1: boolean) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MobileMenu.tsx#MobileMenu"]={docgenInfo:MobileMenu.__docgenInfo,name:"MobileMenu",path:"src/components/MobileMenu.tsx#MobileMenu"})}catch(__react_docgen_typescript_loader_error){}var Logo_jsx=react.createElement,Logo=function Logo(_ref){var title=_ref.title;return Logo_jsx(link_default(),{href:"/",className:"p-1.5"},Logo_jsx("span",{className:"sr-only"},title),Logo_jsx("div",{className:"flex items-center justify-center border border-gray-500 rounded-full px-4 py-6 bg-gray-200 h-12 w-12"},Logo_jsx("span",{className:"self-center font-semibold whitespace-nowrap dark:text-white"},"Logo")))};Logo.displayName="Logo",Logo.__docgenInfo={description:"",methods:[],displayName:"Logo",props:{title:{required:!0,tsType:{name:"string"},description:""}}};try{Logo.displayName="Logo",Logo.__docgenInfo={description:"",displayName:"Logo",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Logo.tsx#Logo"]={docgenInfo:Logo.__docgenInfo,name:"Logo",path:"src/components/Logo.tsx#Logo"})}catch(__react_docgen_typescript_loader_error){}var _Main$parameters,_Main$parameters2,_Main$parameters2$doc,HeaderCenter_jsx=react.createElement,HeaderCenter=function HeaderCenter(_ref){_ref.backgroundColor,_ref.logo,_ref.fontFace;var _useState=(0,react.useState)(!1),isMenuOpen=_useState[0],setIsMenuOpen=_useState[1];return HeaderCenter_jsx("header",{className:"w-full"},HeaderCenter_jsx("div",{className:"bg-white text-gray-500 w-full z-20 fixed top-0 left-0 transition-all border border-b-gray-700"},HeaderCenter_jsx("div",{className:"container"},HeaderCenter_jsx("div",{className:"flex items-center justify-between h-14 lg:h-20"},HeaderCenter_jsx("div",{className:"flex flex-1"},HeaderCenter_jsx("div",{className:"lg:hidden"},HeaderCenter_jsx("button",{className:"flex items-center",type:"button",onClick:function onClick(){return setIsMenuOpen(!isMenuOpen)}},"menu")),HeaderCenter_jsx("nav",null,HeaderCenter_jsx("ul",{"aria-label":"primary navigation",className:"hidden lg:flex space-x-6 tracking-widest text-xl"},Config.menuLinks.map((function(link){if("Merch"!==link.displayName)return HeaderCenter_jsx("li",{key:link.displayName,className:"py-6 items-center group/subitems cursor-pointer"},HeaderCenter_jsx("span",null,link.displayName),HeaderCenter_jsx("div",{className:"absolute hidden group-hover/subitems:block mt-5"},HeaderCenter_jsx("ul",{className:"bg-white p-4 space-y-2 border border-gray-200"},link.subItems.map((function(subitem){return HeaderCenter_jsx("li",{className:"hover:underline text-sm",key:subitem.displayName},HeaderCenter_jsx(link_default(),{href:subitem.path,onClick:function onClick(){return setIsMenuOpen(!1)}},subitem.displayName))})))))}))))),HeaderCenter_jsx("div",{className:"absolute left-1/2 -ml-10",onClick:function onClick(){return setIsMenuOpen(!1)}},HeaderCenter_jsx(Logo,{title:Config.site.title})),HeaderCenter_jsx("div",{className:"flex flex-1 justify-end space-x-5"},Config.menuLinksRight.map((function(link){return HeaderCenter_jsx(link_default(),{href:link.path,key:link.displayName,className:"flex items-center space-x-1",onClick:function onClick(){return setIsMenuOpen(!1)}},HeaderCenter_jsx("span",null,link.displayName))})))))),HeaderCenter_jsx(MobileMenu,{isMenuOpen,setIsMenuOpen}))};HeaderCenter.displayName="HeaderCenter",HeaderCenter.__docgenInfo={description:"",methods:[],displayName:"HeaderCenter",props:{backgroundColor:{defaultValue:{value:'"bg-dark"',computed:!1},required:!1,tsType:{name:"string"},description:""},logo:{defaultValue:{value:'"/images/mte.png"',computed:!1},required:!1,tsType:{name:"string"},description:""},fontFace:{defaultValue:{value:'"NEUTRA2"',computed:!1},required:!1,tsType:{name:"union",raw:'"NEUTRA2" | "Aktiv"',elements:[{name:"literal",value:'"NEUTRA2"'},{name:"literal",value:'"Aktiv"'}]},description:""}}};try{HeaderCenter.displayName="HeaderCenter",HeaderCenter.__docgenInfo={description:"",displayName:"HeaderCenter",props:{backgroundColor:{defaultValue:{value:"bg-dark"},description:"",name:"backgroundColor",required:!1,type:{name:"string"}},logo:{defaultValue:{value:"/images/mte.png"},description:"",name:"logo",required:!1,type:{name:"string"}},fontFace:{defaultValue:{value:"NEUTRA2"},description:"",name:"fontFace",required:!1,type:{name:"enum",value:[{value:'"NEUTRA2"'},{value:'"Aktiv"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/HeaderCenter.tsx#HeaderCenter"]={docgenInfo:HeaderCenter.__docgenInfo,name:"HeaderCenter",path:"src/components/HeaderCenter.tsx#HeaderCenter"})}catch(__react_docgen_typescript_loader_error){}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const Header_stories={title:"Components/Header",component:HeaderCenter};var Main={};Main.parameters=_objectSpread(_objectSpread({},Main.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Main$parameters=Main.parameters)||void 0===_Main$parameters?void 0:_Main$parameters.docs),{},{source:_objectSpread({originalSource:"{}"},null===(_Main$parameters2=Main.parameters)||void 0===_Main$parameters2||null===(_Main$parameters2$doc=_Main$parameters2.docs)||void 0===_Main$parameters2$doc?void 0:_Main$parameters2$doc.source)})})},"./src/stories/Disclosure.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,p:()=>Disclosure});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_util_DisclosureContext__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/util/DisclosureContext.ts"),_assets_ChevronDown__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/assets/ChevronDown.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,iconDefault={Icon:_assets_ChevronDown__WEBPACK_IMPORTED_MODULE_2__._,iconStyles:"h-6 w-6 transition duration-150",iconOpenStyles:"-rotate-180"};var Panel=function Panel(_ref){var children=_ref.children,className=_ref.className,title=_ref.title,_ref$icon=_ref.icon,icon=void 0===_ref$icon?iconDefault:_ref$icon,_useContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_util_DisclosureContext__WEBPACK_IMPORTED_MODULE_1__.g),openKey=_useContext.openKey,setOpenKey=_useContext.setOpenKey,panelRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),Icon=icon.Icon,iconStyles=icon.iconStyles,iconOpenStyles=icon.iconOpenStyles,open=openKey===title,heightStr=function getPanelHeight(panelRef){var panelHeight=0;return panelRef?(null!==panelRef.current&&(panelHeight=panelRef.current.scrollHeight),(panelHeight/=16).toString(),panelHeight+"rem"):"0rem"}(panelRef),styles={maxHeight:{maxHeight:open?heightStr:0}};return __jsx("div",null,__jsx("button",{type:"button",className:"flex justify-between w-full ".concat(className),onClick:function onClick(){console.log(openKey),function handleToggle(key){setOpenKey(openKey!==key?key:null)}(title)}},title,__jsx(Icon,{className:"".concat(iconStyles," ").concat(openKey===title?iconOpenStyles:"")})),__jsx("div",{className:"transition-[max-height] ease-in-out duration-200 overflow-hidden maxHeight",style:styles.maxHeight},__jsx("div",{className:"flex flex-col",ref:panelRef},children)))};Panel.displayName="Panel";var Disclosure=function Disclosure(_ref2){var children=_ref2.children,_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),openKey=_useState[0],setOpenKey=_useState[1];return __jsx(_util_DisclosureContext__WEBPACK_IMPORTED_MODULE_1__.g.Provider,{value:{openKey,setOpenKey}},children)};Disclosure.displayName="Disclosure",Disclosure.Panel=Panel,Disclosure.__docgenInfo={description:"",methods:[{name:"Panel",docblock:null,modifiers:["static"],params:[{name:"{\n  children,\n  className,\n  title,\n  icon = iconDefault,\n}: PanelProps",type:{name:"PanelProps",alias:"PanelProps"}}],returns:null}],displayName:"Disclosure",props:{children:{required:!0,tsType:{name:"any"},description:""}}};const __WEBPACK_DEFAULT_EXPORT__=Disclosure;try{Disclosure.displayName="Disclosure",Disclosure.__docgenInfo={description:"",displayName:"Disclosure",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Disclosure.tsx#Disclosure"]={docgenInfo:Disclosure.__docgenInfo,name:"Disclosure",path:"src/stories/Disclosure.tsx#Disclosure"})}catch(__react_docgen_typescript_loader_error){}try{Panel.displayName="Disclosure.Panel",Panel.__docgenInfo={description:"",displayName:"Disclosure.Panel",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},icon:{defaultValue:{value:'{\n  Icon: ChevronDown,\n  iconStyles: "h-6 w-6 transition duration-150",\n  iconOpenStyles: "-rotate-180",\n}'},description:"",name:"icon",required:!1,type:{name:"{ Icon: ComponentType<IconProps>; iconStyles?: string; iconOpenStyles?: string; } | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Disclosure.tsx#Disclosure.Panel"]={docgenInfo:Disclosure.Panel.__docgenInfo,name:"Disclosure.Panel",path:"src/stories/Disclosure.tsx#Disclosure.Panel"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/assets/ChevronDown.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>ChevronDown});var __jsx=__webpack_require__("./node_modules/react/index.js").createElement,ChevronDown=function ChevronDown(_ref){var _ref$strokeWidth=_ref.strokeWidth,strokeWidth=void 0===_ref$strokeWidth?1.5:_ref$strokeWidth,_ref$className=_ref.className;return __jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth,stroke:"currentColor",className:void 0===_ref$className?"w-6 h-6":_ref$className},__jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"}))};ChevronDown.displayName="ChevronDown",ChevronDown.__docgenInfo={description:"",methods:[],displayName:"ChevronDown",props:{strokeWidth:{defaultValue:{value:"1.5",computed:!1},required:!1},className:{defaultValue:{value:'"w-6 h-6"',computed:!1},required:!1}}};try{ChevronDown.displayName="ChevronDown",ChevronDown.__docgenInfo={description:"",displayName:"ChevronDown",props:{strokeWidth:{defaultValue:{value:"1.5"},description:"",name:"strokeWidth",required:!1,type:{name:"number"}},className:{defaultValue:{value:"w-6 h-6"},description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/assets/ChevronDown.tsx#ChevronDown"]={docgenInfo:ChevronDown.__docgenInfo,name:"ChevronDown",path:"src/stories/assets/ChevronDown.tsx#ChevronDown"})}catch(__react_docgen_typescript_loader_error){}},"./src/util/DisclosureContext.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>DisclosureContext});var DisclosureContext=(0,__webpack_require__("./node_modules/react/index.js").createContext)({openKey:"Hello World",setOpenKey:function setOpenKey(){}})}}]);