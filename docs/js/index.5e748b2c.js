(function(t){function i(i){for(var e,o,r=i[0],u=i[1],c=i[2],m=0,h=[];m<r.length;m++)o=r[m],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&h.push(a[o][0]),a[o]=0;for(e in u)Object.prototype.hasOwnProperty.call(u,e)&&(t[e]=u[e]);l&&l(i);while(h.length)h.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,i=0;i<s.length;i++){for(var n=s[i],e=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(e=!1)}e&&(s.splice(i--,1),t=r(r.s=n[0]))}return t}var e={},a={index:0},s=[];function o(t){return r.p+"js/"+({eruda:"eruda"}[t]||t)+"."+{eruda:"fe546408"}[t]+".js"}function r(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(t){var i=[],n=a[t];if(0!==n)if(n)i.push(n[2]);else{var e=new Promise((function(i,e){n=a[t]=[i,e]}));i.push(n[2]=e);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,r.nc&&u.setAttribute("nonce",r.nc),u.src=o(t);var c=new Error;s=function(i){u.onerror=u.onload=null,clearTimeout(m);var n=a[t];if(0!==n){if(n){var e=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.src;c.message="Loading chunk "+t+" failed.\n("+e+": "+s+")",c.name="ChunkLoadError",c.type=e,c.request=s,n[1](c)}a[t]=void 0}};var m=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(i)},r.m=t,r.c=e,r.d=function(t,i,n){r.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,i){if(1&i&&(t=r(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var e in t)r.d(n,e,function(i){return t[i]}.bind(null,e));return n},r.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(i,"a",i),i},r.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},r.p="",r.oe=function(t){throw t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=i,u=u.slice();for(var m=0;m<u.length;m++)i(u[m]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,i,n){t.exports=n("8a8a")},"2fb4":function(t,i,n){},3885:function(t,i,n){},"4f4c":function(t,i,n){},"64dc":function(t,i,n){"use strict";n("4f4c")},"8a8a":function(t,i,n){"use strict";n.r(i);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("4160"),n("b64b"),n("159b"),n("f5df1"),n("d3b7");var e=n("0b16"),a=n.n(e),s={timeoutID:null,handler:null,init:function(){n.e("eruda").then(n.t.bind(null,"b3bb",7)).then((function(t){var i=t["default"],n=document.createElement("div");document.body.appendChild(n),s.handler=i,i.init({container:n,tool:["console","elements"]})}))}};function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{delay:3e3},i=a.a.parse(location.href,!0),n=i.query;!{ROUTE_MAP:{APP:{ENTRY:"./src/views/index/main.js",TITLE:"日文五十音打字学习"}},PROJECT_NAME:"JType",LIST_PAGE_SIZE:30,MODAL_DURATION:2e3,API:{CODE_KEY:"code",DATA_KEY:"result",MESSAGE_KEY:"message",SUCCESS_CODE:"200",UNAUTH_CODE:["50001"],TIMEOUT:6e4},LOADER:{ERUDA:{ENABLE:!0},SENTRY:{ENABLE:!0,DEBUG:0,DSN:""}},MOCK_SERVER:{HOST:"127.0.0.1",PORT:19999}}.LOADER.ERUDA.ENABLE||"production"==={BUILD_DATE:"2021-01-08 18:19:34",BUILD_AUTHOR:"lisfan",GIT_COMMIT:"55ae9d53fb",GIT_BRANCH:"master",GIT_DATE:"2021-01-08 18:17:51",APP_VERSION:"0.1.2",SDK_VERSION:"0.1.2",SERVER_ENV:"production",API_HOST:"https://domain/api",MOCK_API_HOST:"https://domain/api"}.SERVER_ENV&&"1"!==String(n.eruda_enable)||s.handler||("production"!=={BUILD_DATE:"2021-01-08 18:19:34",BUILD_AUTHOR:"lisfan",GIT_COMMIT:"55ae9d53fb",GIT_BRANCH:"master",GIT_DATE:"2021-01-08 18:17:51",APP_VERSION:"0.1.2",SDK_VERSION:"0.1.2",SERVER_ENV:"production",API_HOST:"https://domain/api",MOCK_API_HOST:"https://domain/api"}.SERVER_ENV?s.init():(clearTimeout(s.timeoutID),s.timeoutID=setTimeout((function(){s.init()}),t.delay)))}n("e7e5");var r=n("d399"),u=(n("66cf"),n("343b")),c=n("2b0e");function m(){r["a"].setDefaultOptions({duration:{ROUTE_MAP:{APP:{ENTRY:"./src/views/index/main.js",TITLE:"日文五十音打字学习"}},PROJECT_NAME:"JType",LIST_PAGE_SIZE:30,MODAL_DURATION:2e3,API:{CODE_KEY:"code",DATA_KEY:"result",MESSAGE_KEY:"message",SUCCESS_CODE:"200",UNAUTH_CODE:["50001"],TIMEOUT:6e4},LOADER:{ERUDA:{ENABLE:!0},SENTRY:{ENABLE:!0,DEBUG:0,DSN:""}},MOCK_SERVER:{HOST:"127.0.0.1",PORT:19999}}.MODAL_DURATION,forbidClick:!0}),c["a"].use(u["a"],{filter:{webp:function(t,i){c["a"].config&&void 0!==c["a"].config.supportWebp||(c["a"].config.supportWebp=i.supportWebp)}},attempt:1,lazyComponent:!0}),new c["a"]({render:function(t){return t("img",{directives:[{name:"lazy"}]})}}).$mount()}c["a"].use(r["a"]).use(u["a"]),o(),m();n("2fb4"),n("dd17"),n("3885");var l=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"mpm-component-image",style:{display:t.block?"block":"inline-block",backgroundColor:t.color?t.color:"",width:t.mutatedWidth,height:t.mutatedHeight}},[t.placeholder&&!t.placeholderRemoved?n("span",{staticClass:"pic-placeholder",style:{backgroundImage:"url("+t.placeholderSrc+")"}}):t._e(),t.isHighMode?[t.lazy?n("span",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:t.highImageLazyload,expression:"highImageLazyload",arg:"background-image"}],staticClass:"lazy-mode pic-high",class:{"animate-loaded":t.hasHighAnimate},style:{backgroundPosition:t.mutatedBackgroundPosition,backgroundSize:t.mutatedBackgroundSize}}):n("span",{staticClass:"pic-high",class:{"animate-loaded":t.hasHighAnimate},style:{backgroundPosition:t.mutatedBackgroundPosition,backgroundSize:t.mutatedBackgroundSize,backgroundImage:"url("+(t.highLoadedError?t.errorPlaceholderSrc:t.highImageSrc)+")"}})]:[t.lowRemoved?t._e():n("span",{staticClass:"pic-low",class:{"animate-loaded":t.hasLowAnimate},style:{backgroundPosition:t.mutatedBackgroundPosition,backgroundSize:t.mutatedBackgroundSize,backgroundImage:"url("+(t.lowLoadedError?t.errorPlaceholderSrc:t.lowImageSrc)+")"}}),t.lazy&&(t.highLoader.loaded||t.lowLoaded)?n("span",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:t.highImageLazyload,expression:"highImageLazyload",arg:"background-image"}],staticClass:"lazy-mode pic-high",class:{"animate-loaded":t.hasHighAnimate},style:{backgroundPosition:t.mutatedBackgroundPosition,backgroundSize:t.mutatedBackgroundSize}}):t._e(),t.lazy||!t.highLoader.loaded&&!t.lowLoaded?t._e():n("span",{staticClass:"pic-high",class:{"animate-loaded":t.hasHighAnimate},style:{backgroundPosition:t.mutatedBackgroundPosition,backgroundSize:t.mutatedBackgroundSize,backgroundImage:"url("+(t.highLoadedError?t.errorPlaceholderSrc:t.highImageSrc)+")"}})]],2)},h=[],d=(n("99af"),n("c975"),n("a9e3"),n("ac1f"),n("466d"),n("5319"),n("498a"),n("96cf"),n("1da1")),p="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAQMAAABKLAcXAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAABNJREFUOMtjGAWjYBSMglFAVwAABXgAAcVQ1XUAAAAASUVORK5CYII=",b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAQMAAABKLAcXAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAABNJREFUOMtjGAWjYBSMglFAVwAABXgAAcVQ1XUAAAAASUVORK5CYII=",P={},C={loadImage:function(t){return new Promise((function(i,n){var e=new Image;e.src=t,e.onload=function(){i("success")},e.onerror=function(){n(new Error("[image load fail]: "+t))}}))}},N={props:{width:{type:[String,Number],default:"auto"},height:{type:[String,Number],default:"auto"},size:{type:String,default:"cover"},position:{type:String,default:"center center"},animate:{type:Number,default:1},src:{type:String,default:""},placeholder:{type:Boolean,default:!0},placeholderSrc:{type:String,default:p},errorPlaceholderSrc:{type:String,default:b},block:Boolean,color:{String:String},low:Boolean,lazy:{type:Boolean,default:!0},prefix:{type:[String,Boolean],default:!0},override:Boolean,format:{type:String,default:function(){return c["a"].config.supportWebp?"webp":"jpg"}},quality:{type:[String,Number],default:"90"},resize:{type:String,default:"m_mfit"},custom:{type:String,default:""}},data:function(){return{DPR:window.devicePixelRatio||2,placeholderRemoved:!1,lowRemoved:!1,lowLoaded:!1,lowLoadedError:!1,highLoaded:!1,highLoadedError:!1,animateCount:0}},computed:{lowLoader:function(){return P[this.lowOSSImageSrc]||{src:"",loaded:!1,count:0}},highLoader:function(){return P[this.highOSSImageSrc]||{src:"",loaded:!1,count:0}},mutatedWidth:function(){return String(this.width).match(/\d$/)?this.width/100+"rem":this.width},mutatedHeight:function(){return String(this.height).match(/\d$/)?this.height/100+"rem":this.height},mutatedBackgroundSize:function(){return this.size.replace(/(\d+)(\D*)\s?/g,(function(t,i,n){return n.trim()?t+" ":Number(i)/100+"rem "}))},mutatedBackgroundPosition:function(){return this.position.replace(/(\d+)(\D*)\s?/g,(function(t,i,n){return n.trim()?t+" ":Number(i)/100+"rem "}))},isHighMode:function(){return!this.low||"png"===this.format||"gif"===this.format},imageSrc:function(){var t="boolean"===typeof this.prefix?{BUILD_DATE:"2021-01-08 18:19:34",BUILD_AUTHOR:"lisfan",GIT_COMMIT:"55ae9d53fb",GIT_BRANCH:"master",GIT_DATE:"2021-01-08 18:17:51",APP_VERSION:"0.1.2",SDK_VERSION:"0.1.2",SERVER_ENV:"production",API_HOST:"https://domain/api",MOCK_API_HOST:"https://domain/api"}.CDN_HOST+this.src:this.prefix+this.src;return this.override?t.replace(/^(.*)\?x-oss-process=.*/,"$1"):t},lowOSSImageSrc:function(){return this.generateImageSrc({format:"jpg",src:this.imageSrc,quality:100,width:10,height:10})},highOSSImageSrc:function(){return this.generateImageSrc({format:this.format,src:this.imageSrc,quality:this.quality})},lowImageSrc:function(){return this.src?this.lowOSSImageSrc:this.placeholderSrc},highImageSrc:function(){return this.src?this.highOSSImageSrc:this.placeholderSrc},highImageLazyload:function(){return{src:this.highImageSrc,error:this.errorPlaceholderSrc}},hasLowAnimate:function(){return!this.lowLoadedError&&(0===this.animate||this.animate>this.lowLoader.count)},hasHighAnimate:function(){return!this.highLoadedError&&(0===this.animate||this.animate>this.highLoader.count)}},methods:{generateImageSrc:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.format,n=t.src,e=t.quality,a=t.width,s=void 0===a?this.width:a,o=t.height,r=void 0===o?this.height:o,u="jpg"===i?"/interlace,1":"",c=Number(s)>0?",w_".concat(Math.round(s/2*this.DPR)):"",m=Number(r)>0?",h_".concat(Math.round(r/2*this.DPR)):"",l=this.resize?"/resize,".concat(this.resize).concat(c).concat(m):"",h=e&&["webp","jpg"].indexOf(i)>=0?"/quality,Q_".concat(e):"",d=i?"/format,".concat(i):"";return n+"?x-oss-process=image"+u+l+h+d+this.custom},lowLoadedHandler:function(){var t=this;return new Promise((function(i){var n=P[t.lowOSSImageSrc];n.count++,setTimeout((function(){t.lowLoaded=!0,n.loaded=!0,i()}),300*Math.random())}))},lowErrorHandler:function(){this.lowLoadedError=!0,this.lowLoader.loaded=!1},highLoadedHandler:function(){var t=this;return new Promise((function(i){var n=P[t.highOSSImageSrc];n.count++,setTimeout((function(){t.highLoaded=!0,n.loaded=!0,i()}),300*Math.random())}))},highErrorHandler:function(){this.highLoadedError=!0,this.highLoader.loaded=!1}},watch:{src:{immediate:!0,handler:function(){this.src&&(P[this.lowOSSImageSrc]||this.$set(P,this.lowOSSImageSrc,{src:this.lowOSSImageSrc,loaded:!1,count:0}),P[this.highOSSImageSrc]||this.$set(P,this.highOSSImageSrc,{src:this.highOSSImageSrc,loaded:!1,count:0}))}},isHighMode:{immediate:!0,handler:function(){var t=this;this.src&&(this.isHighMode?C.loadImage(this.highImageSrc).then(this.highLoadedHandler)["catch"](this.highErrorHandler):C.loadImage(this.lowImageSrc).then(Object(d["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,t.lowLoadedHandler();case 2:C.loadImage(t.highImageSrc).then(t.highLoadedHandler)["catch"](t.highErrorHandler);case 3:case"end":return i.stop()}}),i)}))))["catch"](this.lowErrorHandler))}},highLoaded:function(){var t=this;this.src&&this.highLoaded&&setTimeout((function(){t.lowRemoved=!0,t.placeholderRemoved=!0}),500+500*Math.random())}}},f=N,g=(n("8b5a"),n("2877")),J=Object(g["a"])(f,l,h,!1,null,"5a00b722",null),A=J.exports,E={"mpm-image":A},_={},S={},I={data:function(){return{process:{env:Object({NODE_ENV:"production",BASE_URL:""}),APP:{ROUTE_MAP:{APP:{ENTRY:"./src/views/index/main.js",TITLE:"日文五十音打字学习"}},PROJECT_NAME:"JType",LIST_PAGE_SIZE:30,MODAL_DURATION:2e3,API:{CODE_KEY:"code",DATA_KEY:"result",MESSAGE_KEY:"message",SUCCESS_CODE:"200",UNAUTH_CODE:["50001"],TIMEOUT:6e4},LOADER:{ERUDA:{ENABLE:!0},SENTRY:{ENABLE:!0,DEBUG:0,DSN:""}},MOCK_SERVER:{HOST:"127.0.0.1",PORT:19999}},BUILD:{BUILD_DATE:"2021-01-08 18:19:34",BUILD_AUTHOR:"lisfan",GIT_COMMIT:"55ae9d53fb",GIT_BRANCH:"master",GIT_DATE:"2021-01-08 18:17:51",APP_VERSION:"0.1.2",SDK_VERSION:"0.1.2",SERVER_ENV:"production",API_HOST:"https://domain/api",MOCK_API_HOST:"https://domain/api"}}}},computed:{$$state:function(){return this.$store.state},$$getters:function(){return this.$store.getters},$$dispatch:function(){return this.$store.dispatch}},methods:{$$pxTransform:function(t){return t/100+"rem"}}},k={CommonMixins:I};function T(t,i){Object.keys(i).forEach((function(n){/^mixin$/.test(t)?c["a"][t](i[n]):c["a"][t](n,i[n])}))}T("component",E),T("filter",_),T("directive",S),T("mixin",k);var v=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"jp-type flex center",on:{click:t.setInputFocus}},[n("div",{staticClass:"jp-type--ctr"},[n("div",{staticClass:"jp-type--stats flex column items-end"},[n("div",[n("span",[t._v("耗时：")]),n("span",{staticClass:"jp-type--stats-text"},[t._v(t._s(t.timeTotalText))])]),n("div",[n("span",[t._v("速度：")]),n("span",{staticClass:"jp-type--stats-text"},[t._v(t._s(t.timeSpeed)+"个/分钟")])])]),t.currentLetter?n("div",{staticClass:"jp-type--hint mpm-mauto"},[n("div",{staticClass:"jp-type--preview flex center"},[n("div",{staticClass:"jp-type--preview-text"},[t._v(" "+t._s(t.currentLetter.mainJP)+" ")]),n("div",{staticClass:"jp-type--annotation"},[n("div",{staticClass:"jp-type--annotation-row flex justify-between"},[n("span",[t._v("罗马字："+t._s(t.currentLetter.luoma))]),n("span",[t._v("汉字："+t._s(t.currentLetter.mainCN))])]),n("div",{staticClass:"jp-type--annotation-row flex justify-between"},[n("span",[t._v("联想："+t._s(t.currentLetter.think))])])])]),n("div",{staticClass:"jp-type--preview-other flex center"},[n("div",{staticClass:"jp-type--preview-text-other"},[t._v(" "+t._s(t.currentLetter.subJP)+" ")]),n("div",{staticClass:"jp-type--annotation"},[n("div",{staticClass:"jp-type--annotation-row flex justify-end"},[n("div",[t._v("汉字："+t._s(t.currentLetter.subCN))])])])])]):t._e(),n("div",{staticClass:"jp-type--show"},t._l(t.list,(function(i,e){return n("span",{key:e,staticClass:"jp-type--show-text"},[t._v(t._s(i.mainJP))])})),0),n("div",{staticClass:"jp-type--show mpm-mt12 "},[t._l(t.inputList,(function(i,e){return n("span",{key:e,staticClass:"jp-type--show-text jp-type--input-text",class:{wrong:i!==t.list[e].mainJP}},[t._v(t._s(i))])})),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.input,expression:"input",modifiers:{trim:!0}}],ref:"input",staticClass:"jp-type--input",class:{wrong:t.currentWrong},attrs:{maxlength:t.isFinished?0:10},domProps:{value:t.input},on:{input:[function(i){i.target.composing||(t.input=i.target.value.trim())},t.onCheck],keydown:[function(i){return!i.type.indexOf("key")&&t._k(i.keyCode,"delete",[8,46],i.key,["Backspace","Delete","Del"])?null:t.onDelete(i)},function(i){return!i.type.indexOf("key")&&t._k(i.keyCode,"enter",13,i.key,"Enter")?null:t.onFinish(i)}],keyup:t.onInsert,blur:function(i){return t.$forceUpdate()}}})],2),n("div",{staticClass:"mpm-relative"},[n("div",{staticClass:"jp-type--reset",on:{click:function(i){return t.change()}}},[t._v("重新练习")]),t.isFinished?n("div",{staticClass:"jp-type--reset-notice"},[t._v("本次课程已完成")]):t._e()])]),n("div",{staticClass:"jp-type--lesson"},[n("div",{staticClass:"jp-type--lesson-head"},[t._v("课程章节")]),t._m(0),n("div",{staticClass:"jp-type--lesson-head"},[t._v("清音")]),n("div",{staticClass:"jp-type--lesson-list"},t._l(t.PINGJIA_LETTERS_MAP,(function(i,e,a){return n("div",{key:e+i[0].mainJP,staticClass:"jp-type--lesson-section",class:{active:-1!==t.currentLabel.indexOf(e)},on:{click:function(i){return t.change(e)}}},[t._v(t._s(i[0].mainJP)+"行 ")])})),0),t._m(1),n("div",{staticClass:"jp-type--lesson-head"},[t._v("清音")]),n("div",{staticClass:"jp-type--lesson-list"},t._l(t.PIANJIA_LETTERS_MAP,(function(i,e,a){return n("div",{key:e+i[0].mainJP,staticClass:"jp-type--lesson-section",class:{active:-1!==t.currentLabel.indexOf(e)},on:{click:function(i){return t.change(e)}}},[t._v(t._s(i[0].mainJP)+"行 ")])})),0)]),n("div",{staticClass:"jp-type--edition-info"},[n("div",[t._v("v"+t._s(t.process.BUILD.APP_VERSION))]),n("div",[t._v(t._s(t.process.BUILD.BUILD_DATE))])])])},y=[function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"jp-type--lesson-head"},[t._v("五十音"),n("br"),t._v("平假名")])},function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"jp-type--lesson-head"},[t._v("五十音"),n("br"),t._v("片假名")])}],L=n("d13c"),O=L["a"],R=(n("64dc"),Object(g["a"])(O,v,y,!1,null,null,null)),w=R.exports;new c["a"]({render:function(t){return t(w)}}).$mount("#app")},"8b5a":function(t,i,n){"use strict";n("8c02")},"8c02":function(t,i,n){},aa76:function(t,i,n){"use strict";i["a"]={X_PIANJIA_LETTERS:[{luoma:"a",subJP:"あ",mainJP:"ア",subCN:"安",mainCN:"阿",think:"安全了啊"},{luoma:"i",subJP:"い",mainJP:"イ",subCN:"以",mainCN:"伊",think:"以为是你"},{luoma:"u",subJP:"う",mainJP:"ウ",subCN:"宇",mainCN:"宇",think:"宇宙无极"},{luoma:"e",subJP:"え",mainJP:"エ",subCN:"衣",mainCN:"江",think:"爱上工作"},{luoma:"o",subJP:"お",mainJP:"オ",subCN:"於",mainCN:"於",think:"我是天才哦"}],K_PIANJIA_LETTERS:[{luoma:"ka",subJP:"か",mainJP:"カ",subCN:"加",mainCN:"加",think:"待补充"},{luoma:"ki",subJP:"き",mainJP:"キ",subCN:"機",mainCN:"機",think:"待补充"},{luoma:"ku",subJP:"く",mainJP:"ク",subCN:"久",mainCN:"久",think:"待补充"},{luoma:"ke",subJP:"け",mainJP:"ケ",subCN:"計",mainCN:"介",think:"待补充"},{luoma:"ko",subJP:"こ",mainJP:"コ",subCN:"已",mainCN:"己",think:"待补充"}],S_PIANJIA_LETTERS:[{luoma:"sa",subJP:"さ",mainJP:"サ",subCN:"左",mainCN:"散",think:"待补充"},{luoma:"si(shi)",subJP:"し",mainJP:"シ",subCN:"之",mainCN:"之",think:"待补充"},{luoma:"su",subJP:"す",mainJP:"ス",subCN:"寸",mainCN:"須",think:"待补充"},{luoma:"se",subJP:"せ",mainJP:"セ",subCN:"世",mainCN:"世",think:"待补充"},{luoma:"so",subJP:"そ",mainJP:"ソ",subCN:"曾",mainCN:"曾",think:"待补充"}],T_PIANJIA_LETTERS:[{luoma:"ta",subJP:"た",mainJP:"タ",subCN:"太",mainCN:"多",think:"待补充"},{luoma:"ti(chi)",subJP:"ち",mainJP:"チ",subCN:"知",mainCN:"千",think:"待补充"},{luoma:"tu(tsu)",subJP:"つ",mainJP:"ツ",subCN:"川",mainCN:"川",think:"待补充"},{luoma:"te",subJP:"て",mainJP:"テ",subCN:"天",mainCN:"天",think:"待补充"},{luoma:"to",subJP:"と",mainJP:"ト",subCN:"止",mainCN:"止",think:"待补充"}],N_PIANJIA_LETTERS:[{luoma:"na",subJP:"な",mainJP:"ナ",subCN:"奈",mainCN:"奈",think:"待补充"},{luoma:"ni",subJP:"に",mainJP:"ニ",subCN:"仁",mainCN:"仁",think:"待补充"},{luoma:"nu",subJP:"ぬ",mainJP:"ヌ",subCN:"奴",mainCN:"奴",think:"待补充"},{luoma:"ne",subJP:"ね",mainJP:"ネ",subCN:"祢",mainCN:"祢",think:"待补充"},{luoma:"no",subJP:"の",mainJP:"ノ",subCN:"乃",mainCN:"乃",think:"待补充"}],H_PIANJIA_LETTERS:[{luoma:"ha",subJP:"は",mainJP:"ハ",subCN:"波",mainCN:"八",think:"待补充"},{luoma:"hi",subJP:"ひ",mainJP:"ヒ",subCN:"比",mainCN:"比",think:"待补充"},{luoma:"hu",subJP:"ふ",mainJP:"フ",subCN:"不",mainCN:"不",think:"待补充"},{luoma:"he",subJP:"へ",mainJP:"ヘ",subCN:"部",mainCN:"部",think:"待补充"},{luoma:"ho",subJP:"ほ",mainJP:"ホ",subCN:"保",mainCN:"保",think:"待补充"}],M_PIANJIA_LETTERS:[{luoma:"ma",subJP:"ま",mainJP:"マ",subCN:"末",mainCN:"末",think:"待补充"},{luoma:"mi",subJP:"み",mainJP:"ミ",subCN:"美",mainCN:"三",think:"待补充"},{luoma:"mu",subJP:"む",mainJP:"ム",subCN:"武",mainCN:"牟",think:"待补充"},{luoma:"me",subJP:"め",mainJP:"メ",subCN:"女",mainCN:"女",think:"待补充"},{luoma:"mo",subJP:"も",mainJP:"モ",subCN:"毛",mainCN:"毛",think:"待补充"}],Y_PIANJIA_LETTERS:[{luoma:"ya",subJP:"や",mainJP:"ヤ",subCN:"也",mainCN:"也",think:"待补充"},{luoma:"yu",subJP:"ゆ",mainJP:"ユ",subCN:"由",mainCN:"由",think:"待补充"},{luoma:"yo",subJP:"よ",mainJP:"ヨ",subCN:"与",mainCN:"與",think:"待补充"}],R_PIANJIA_LETTERS:[{luoma:"ra",subJP:"ら",mainJP:"ラ",subCN:"良",mainCN:"良",think:"待补充"},{luoma:"ri",subJP:"り",mainJP:"リ",subCN:"利",mainCN:"利",think:"待补充"},{luoma:"ru",subJP:"る",mainJP:"ル",subCN:"留",mainCN:"流",think:"待补充"},{luoma:"re",subJP:"れ",mainJP:"レ",subCN:"礼",mainCN:"礼",think:"待补充"},{luoma:"ro",subJP:"ろ",mainJP:"ロ",subCN:"吕",mainCN:"吕",think:"待补充"}],W_PIANJIA_LETTERS:[{luoma:"wa",subJP:"わ",mainJP:"ワ",subCN:"和",mainCN:"和",think:"待补充"},{luoma:"wo",subJP:"を",mainJP:"ヲ",subCN:"遠",mainCN:"乎",think:"待补充"}]}},d13c:function(t,i,n){"use strict";(function(t){n("99af"),n("4160"),n("c975"),n("13d5"),n("fb6a"),n("a434"),n("ac1f"),n("1276"),n("159b"),n("130f");var e=n("5530"),a=n("ddb7"),s=n("aa76");i["a"]={data:function(){return{LETTERS_MAP:Object(e["a"])(Object(e["a"])({},a["a"]),s["a"]),PINGJIA_LETTERS_MAP:a["a"],PIANJIA_LETTERS_MAP:s["a"],list:[],inputList:[],input:"",lastInput:"",current:0,currentWrong:!1,currentLabel:[],sliceLength:30,timer:null,timeTotal:0,timeSpeed:0,defaultLabel:JSON.parse(localStorage.getItem("currentLabel"))||"X_PINGJIA_LETTERS"}},computed:{currentLetter:function(){return this.current===this.sliceLength?this.list[this.sliceLength-1]:this.list[this.current]},timeTotalText:function(){return this.timeTotal<=59e3?t(this.timeTotal).format("s秒"):t(this.timeTotal).format("m分s秒")},isFinished:function(){return this.inputList.length===this.list.length}},watch:{isFinished:function(){this.isFinished&&(clearInterval(this.timer),this.timer=null)}},methods:{change:function(t){var i=this;if(clearInterval(this.timer),this.timer=null,this.timeTotal=0,this.timeSpeed=0,this.inputList=[],this.current=0,this.input="",this.lastInput="",this.currentWrong=!1,t){var n="string"===typeof t?[t]:t;n.forEach((function(t){var n=i.currentLabel.indexOf(t);-1===n?i.currentLabel.push(t):n>=0&&i.currentLabel.length>1&&i.currentLabel.splice(n,1)})),localStorage.setItem("currentLabel",JSON.stringify(this.currentLabel))}for(var e=this.currentLabel.reduce((function(t,n){return t=t.concat(i.LETTERS_MAP[n]),t}),[]),a=[],s=0;s<this.sliceLength;s++){var o=Math.floor(100*Math.random()%e.length);a.push(e[o])}this.list=a,this.setInputFocus()},onCheck:function(t){var i=this;this.timer||(this.timer=setInterval((function(){i.timeTotal+=1e3,i.timeSpeed=Math.floor(i.inputList.length/(i.timeTotal/1e3)*60)}),1e3)),["insertCompositionText","insertText"].indexOf(t.inputType)>=0&&(this.lastInput=t.data?t.data.slice(-1):"")},onInsert:function(t){if("Backspace"!==t.key&&this.input){var i=this.current+this.input.length-this.sliceLength,n=i>0?this.input.split("").slice(0,-i):this.input.split("");this.inputList=this.inputList.concat(n),this.current+n.length>=this.sliceLength?this.current=this.sliceLength:this.current+=n.length,this.reset()}},onDelete:function(){this.isFinished||this.current<=0||this.lastInput||this.input||(this.inputList.pop(),this.current--,this.reset())},onFinish:function(){this.isFinished&&this.change()},reset:function(){this.input="",this.lastInput="",this.currentWrong=!1},setInputFocus:function(){var t=this;setImmediate((function(){t.$refs.input.focus()}))}},mounted:function(){this.change(this.defaultLabel)}}}).call(this,n("5a0c"))},dd17:function(t,i,n){function e(){return function(){return this}}n("d3b7");var a={};Object.assign(a,{then:e.call(a),catch:e.call(a),done:e.call(a),finally:e.call(a),abort:e.call(a)}),Promise.prototype.done=function(t,i){this.then(t,i)["catch"]((function(t){throw t}))},Promise.prototype["finally"]=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},i=this.constructor;return this.then((function(n){return i.resolve(t()).then((function(){return n}))}),(function(n){return i.resolve(t()).then((function(){throw n}))}))},Promise.prototype.catchError=function(){return this["catch"]((function(){}))},Promise.prototype.abort=function(t){return this["finally"](t),a}},ddb7:function(t,i,n){"use strict";i["a"]={X_PINGJIA_LETTERS:[{luoma:"a",mainJP:"あ",subJP:"ア",mainCN:"安",subCN:"阿",think:"安全了啊"},{luoma:"i",mainJP:"い",subJP:"イ",mainCN:"以",subCN:"伊",think:"以为是你"},{luoma:"u",mainJP:"う",subJP:"ウ",mainCN:"宇",subCN:"宇",think:"宇宙无极"},{luoma:"e",mainJP:"え",subJP:"エ",mainCN:"衣",subCN:"江",think:"爱上工作"},{luoma:"o",mainJP:"お",subJP:"オ",mainCN:"於",subCN:"於",think:"我是天才哦"}],K_PINGJIA_LETTERS:[{luoma:"ka",mainJP:"か",subJP:"カ",mainCN:"加",subCN:"加",think:"待补充"},{luoma:"ki",mainJP:"き",subJP:"キ",mainCN:"機",subCN:"機",think:"待补充"},{luoma:"ku",mainJP:"く",subJP:"ク",mainCN:"久",subCN:"久",think:"待补充"},{luoma:"ke",mainJP:"け",subJP:"ケ",mainCN:"計",subCN:"介",think:"待补充"},{luoma:"ko",mainJP:"こ",subJP:"コ",mainCN:"已",subCN:"己",think:"待补充"}],S_PINGJIA_LETTERS:[{luoma:"sa",mainJP:"さ",subJP:"サ",mainCN:"左",subCN:"散",think:"待补充"},{luoma:"si(shi)",mainJP:"し",subJP:"シ",mainCN:"之",subCN:"之",think:"待补充"},{luoma:"su",mainJP:"す",subJP:"ス",mainCN:"寸",subCN:"須",think:"待补充"},{luoma:"se",mainJP:"せ",subJP:"セ",mainCN:"世",subCN:"世",think:"待补充"},{luoma:"so",mainJP:"そ",subJP:"ソ",mainCN:"曾",subCN:"曾",think:"待补充"}],T_PINGJIA_LETTERS:[{luoma:"ta",mainJP:"た",subJP:"タ",mainCN:"太",subCN:"多",think:"待补充"},{luoma:"ti(chi)",mainJP:"ち",subJP:"チ",mainCN:"知",subCN:"千",think:"待补充"},{luoma:"tu(tsu)",mainJP:"つ",subJP:"ツ",mainCN:"川",subCN:"川",think:"待补充"},{luoma:"te",mainJP:"て",subJP:"テ",mainCN:"天",subCN:"天",think:"待补充"},{luoma:"to",mainJP:"と",subJP:"ト",mainCN:"止",subCN:"止",think:"待补充"}],N_PINGJIA_LETTERS:[{luoma:"na",mainJP:"な",subJP:"ナ",mainCN:"奈",subCN:"奈",think:"待补充"},{luoma:"ni",mainJP:"に",subJP:"ニ",mainCN:"仁",subCN:"仁",think:"待补充"},{luoma:"nu",mainJP:"ぬ",subJP:"ヌ",mainCN:"奴",subCN:"奴",think:"待补充"},{luoma:"ne",mainJP:"ね",subJP:"ネ",mainCN:"祢",subCN:"祢",think:"待补充"},{luoma:"no",mainJP:"の",subJP:"ノ",mainCN:"乃",subCN:"乃",think:"待补充"}],H_PINGJIA_LETTERS:[{luoma:"ha",mainJP:"は",subJP:"ハ",mainCN:"波",subCN:"八",think:"待补充"},{luoma:"hi",mainJP:"ひ",subJP:"ヒ",mainCN:"比",subCN:"比",think:"待补充"},{luoma:"hu",mainJP:"ふ",subJP:"フ",mainCN:"不",subCN:"不",think:"待补充"},{luoma:"he",mainJP:"へ",subJP:"ヘ",mainCN:"部",subCN:"部",think:"待补充"},{luoma:"ho",mainJP:"ほ",subJP:"ホ",mainCN:"保",subCN:"保",think:"待补充"}],M_PINGJIA_LETTERS:[{luoma:"ma",mainJP:"ま",subJP:"マ",mainCN:"末",subCN:"末",think:"待补充"},{luoma:"mi",mainJP:"み",subJP:"ミ",mainCN:"美",subCN:"三",think:"待补充"},{luoma:"mu",mainJP:"む",subJP:"ム",mainCN:"武",subCN:"牟",think:"待补充"},{luoma:"me",mainJP:"め",subJP:"メ",mainCN:"女",subCN:"女",think:"待补充"},{luoma:"mo",mainJP:"も",subJP:"モ",mainCN:"毛",subCN:"毛",think:"待补充"}],Y_PINGJIA_LETTERS:[{luoma:"ya",mainJP:"や",subJP:"ヤ",mainCN:"也",subCN:"也",think:"待补充"},{luoma:"yu",mainJP:"ゆ",subJP:"ユ",mainCN:"由",subCN:"由",think:"待补充"},{luoma:"yo",mainJP:"よ",subJP:"ヨ",mainCN:"与",subCN:"與",think:"待补充"}],R_PINGJIA_LETTERS:[{luoma:"ra",mainJP:"ら",subJP:"ラ",mainCN:"良",subCN:"良",think:"待补充"},{luoma:"ri",mainJP:"り",subJP:"リ",mainCN:"利",subCN:"利",think:"待补充"},{luoma:"ru",mainJP:"る",subJP:"ル",mainCN:"留",subCN:"流",think:"待补充"},{luoma:"re",mainJP:"れ",subJP:"レ",mainCN:"礼",subCN:"礼",think:"待补充"},{luoma:"ro",mainJP:"ろ",subJP:"ロ",mainCN:"吕",subCN:"吕",think:"待补充"}],W_PINGJIA_LETTERS:[{luoma:"wa",mainJP:"わ",subJP:"ワ",mainCN:"和",subCN:"和",think:"待补充"},{luoma:"wo",mainJP:"を",subJP:"ヲ",mainCN:"遠",subCN:"乎",think:"待补充"}]}}});