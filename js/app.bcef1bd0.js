(function(t){function e(e){for(var s,i,o=e[0],c=e[1],l=e[2],v=0,d=[];v<o.length;v++)i=o[v],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],s=!0,o=1;o<r.length;o++){var c=r[o];0!==n[c]&&(s=!1)}s&&(a.splice(e--,1),t=i(i.s=r[0]))}return t}var s={},n={app:0},a=[];function i(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=s,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(r,s,function(e){return t[e]}.bind(null,s));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var s=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Header"),r("MainSite",{staticClass:"fpix"}),r("Footer")],1)},a=[],i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"header"},[r("nav",{staticClass:"navbar",attrs:{id:"nav"}},[r("ul",{staticClass:"nav navbar-nav mx-auto"},[r("li",{staticStyle:{"font-size":"2rem"}},[r("span",{staticClass:"fas fa-cubes",staticStyle:{color:"#ff4654"}}),t._v(" revolt.social ")])]),r("ul",{staticClass:"nav navbar-nav navbar-right"},[r("li",{staticClass:"upon500"},[r("a",{attrs:{href:"https://github.com/RevoltSocial/lists/issues/new/choose",target:"_blank",rel:"noopener noreferrer"}},[r("button",{staticClass:"btn btn-branded"},[t._v("Submit")])])])])])])}],c={name:"Header"},l=c,u=r("2877"),v=Object(u["a"])(l,i,o,!1,null,null,null),d=v.exports,b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footerarea"},[r("p",{staticClass:"footertxt0",attrs:{id:"footer"}},[t._v(" © "),r("a",{staticStyle:{color:"rgb(145, 214, 255)!important"},attrs:{href:"https://nerrix.ovh",target:"_blank"}},[t._v("Nerrix")]),t._v(" | "),r("a",{staticStyle:{color:"#ff4654!important"},attrs:{href:"https://app.revolt.chat/invite/pz3pW5qR",target:"_blank"}},[t._v("Join Server")])])])}],h={name:"Footer"},p=h,m=Object(u["a"])(p,b,f,!1,null,null,null),_=m.exports,g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row",staticStyle:{"justify-content":"center"}},[r("b-button-group",[r("b-button",{class:["Servers"===t.active_tab?"toggbtn":"toggbtn2"],attrs:{variant:"primary",size:"lg"},on:{click:function(e){t.active_tab="Servers"}}},["Servers"==t.active_tab?r("strong",[t._v("Servers")]):t._e(),"Servers"!=t.active_tab?r("span",[t._v("Servers")]):t._e()]),r("b-button",{class:["Bots"===t.active_tab?"toggbtn":"toggbtn2"],attrs:{variant:"info",size:"lg"},on:{click:function(e){t.active_tab="Bots"}}},["Bots"==t.active_tab?r("strong",[t._v("Bots")]):t._e(),"Bots"!=t.active_tab?r("span",[t._v("Bots")]):t._e()])],1)],1),r("div",{staticClass:"row",staticStyle:{"justify-content":"center","margin-top":"4rem","margin-bottom":"3rem"}},[r("div",{staticClass:"col-md-2",staticStyle:{"justify-content":"center","text-align":"center"}},[r("div",{staticClass:"btn-group",staticStyle:{"justify-content":"center"}},["Servers"===t.active_tab?r("input",{ref:"searchServerTerm",staticClass:"form-control blackinput",attrs:{type:"text",name:"",id:"",placeholder:"Something awesome.."},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchInServers()}}}):t._e(),"Servers"===t.active_tab?r("button",{directives:[{name:"show",rawName:"v-show",value:!t.searching,expression:"!searching"}],staticClass:"inlinebtn btn btn-branded",on:{click:function(e){return t.searchInServers()}}},[r("span",{staticClass:"fas fa-search"})]):t._e(),"Servers"===t.active_tab?r("button",{directives:[{name:"show",rawName:"v-show",value:t.searching,expression:"searching"}],staticClass:"inlinebtn btn btn-primary",on:{click:function(e){t.searching=!1,t.serversShown=null,t.$refs.searchServerTerm.value=""}}},[r("span",{staticClass:"fas fa-times"})]):t._e(),"Bots"===t.active_tab?r("input",{ref:"searchBotsTerm",staticClass:"form-control blackinput",attrs:{type:"text",name:"",id:"",placeholder:"Something awesome.."},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchInBots()}}}):t._e(),"Bots"===t.active_tab?r("button",{directives:[{name:"show",rawName:"v-show",value:!t.searching_b,expression:"!searching_b"}],staticClass:"inlinebtn btn btn-branded",on:{click:function(e){return t.searchInBots()}}},[r("span",{staticClass:"fas fa-search"})]):t._e(),"Bots"===t.active_tab?r("button",{directives:[{name:"show",rawName:"v-show",value:t.searching_b,expression:"searching_b"}],staticClass:"inlinebtn btn btn-primary",on:{click:function(e){t.searching_b=!1,t.botsShown=null,t.$refs.searchBotsTerm.value=""}}},[r("span",{staticClass:"fas fa-times"})]):t._e()])])]),r("div",{staticClass:"row",staticStyle:{"justify-content":"center"}},["Bots"==t.active_tab?r("b-card-group",{staticClass:"col-md-8",staticStyle:{"justify-content":"center"},attrs:{deck:""}},t._l(t.bots,(function(e){return r("b-card",{directives:[{name:"show",rawName:"v-show",value:null===t.botsShown||t.botsShown.includes(e.id),expression:"botsShown === null || botsShown.includes(itm.id)"}],key:e.id,attrs:{"bg-variant":"dark"}},[r("b-row",{attrs:{cols:"8","cols-md":"8"}},[r("b-col",{attrs:{md:"3"}},[r("img",{staticStyle:{height:"4rem",width:"4rem","border-radius":"5px","margin-bottom":"1rem"},attrs:{src:e.avatar},on:{error:t.setErrImg}})]),r("b-col",{staticClass:"col-wide",attrs:{md:"8"}},[r("h4",[t._v(t._s(e.name))])])],1),r("p",[t._v(t._s(e.short))]),r("b-badge",{staticStyle:{cursor:"pointer","background-color":"#5b69b5","margin-bottom":"1rem"},attrs:{variant:"primary",pill:""},on:{click:function(r){return t.togg_lon(e.id)}}},[t._v("Read "+t._s(t.longed.includes(e.id)?"less":"more"))]),t.longed.includes(e.id)?r("p",[t._v(t._s(e.long))]):t._e(),r("div",[r("div",[r("span",{staticClass:"fas fa-tags"}),t._v(" "),r("strong",[t._v("Tags:")]),t._v(" "),t._l(e.tags,(function(e){return r("span",{key:e,staticStyle:{"margin-right":"0.5rem"}},[r("b-badge",{staticStyle:{"font-size":"0.8rem"},attrs:{variant:"secondary"}},[t._v(t._s(e))])],1)}))],2),r("div",{staticStyle:{"margin-top":"0.8rem"}},[r("span",{staticClass:"fas fa-user"}),r("strong",[t._v(" Owner:")]),t._v(" "+t._s(e.owner_name))]),e.servers&&e.servers>0?r("div",{staticStyle:{"margin-top":"0.8rem"}},[r("span",{staticClass:"fas fa-users"}),r("strong",[t._v(" Servers:")]),t._v(" "+t._s(e.servers))]):t._e(),r("div",{staticStyle:{"margin-top":"0.8rem"}},[r("span",{staticClass:"fas fa-code"}),r("strong",[t._v(" Library:")]),t._v(" "+t._s(e.library))]),r("div",{staticStyle:{"margin-top":"0.8rem"}},[r("span",{staticClass:"fas fa-comment-alt-lines"}),r("strong",[t._v(" Prefix:")]),t._v(" "),r("code",[t._v(t._s(e.prefix))]),t._v(" ("),r("span",{staticClass:"helpcmd"},[t._v(t._s(e.help))]),t._v(")")])]),r("div",{staticStyle:{"margin-top":"1rem"}},[r("a",{attrs:{href:e.invite,target:"_blank",rel:"noopener noreferrer"}},[r("button",{staticClass:"btn btn-success cardbtn"},[t._v("Invite")])]),e.support&&"_No response_"!=e.support?r("a",{attrs:{href:e.support,target:"_blank",rel:"noopener noreferrer"}},[r("button",{staticClass:"btn btn-info cardbtn"},[t._v("Support")])]):t._e()])],1)})),1):t._e()],1),null!==t.serversShown&&0==t.serversShown.length&&"Servers"===t.active_tab||null!==t.botsShown&&0==t.botsShown.length&&"Bots"===t.active_tab?r("div",{staticClass:"row",staticStyle:{"justify-content":"center"}},[t._m(0)]):t._e(),r("div",{staticClass:"row",staticStyle:{"justify-content":"center"}},["Servers"==t.active_tab?r("b-card-group",{staticClass:"col-md-8",staticStyle:{"justify-content":"center"},attrs:{deck:""}},t._l(t.servers,(function(e){return r("b-card",{directives:[{name:"show",rawName:"v-show",value:null===t.serversShown||t.serversShown.includes(e.id),expression:"serversShown === null || serversShown.includes(itm.id)"}],key:e.id,attrs:{"bg-variant":"dark"}},[r("b-row",{attrs:{cols:"8","cols-md":"8"}},[r("b-col",{attrs:{md:"3"}},[r("img",{staticStyle:{height:"4rem",width:"4rem","border-radius":"5px","margin-bottom":"1rem"},attrs:{src:e.avatar},on:{error:t.setErrImg}})]),r("b-col",{staticClass:"col-wide",attrs:{md:"8"}},[r("h4",[t._v(t._s(e.name))])])],1),r("p",[t._v(t._s(e.short))]),r("b-badge",{staticStyle:{cursor:"pointer","background-color":"#5b69b5","margin-bottom":"1rem"},attrs:{variant:"primary",pill:""},on:{click:function(r){return t.togg_lon(e.id)}}},[t._v("Read "+t._s(t.longed.includes(e.id)?"less":"more"))]),t.longed.includes(e.id)?r("p",[t._v(t._s(e.long))]):t._e(),r("div",[r("div",[r("span",{staticClass:"fas fa-tags"}),t._v(" "),r("strong",[t._v("Tags:")]),t._v(" "),t._l(e.tags,(function(e){return r("span",{key:e,staticStyle:{"margin-right":"0.5rem"}},[r("b-badge",{staticStyle:{"font-size":"0.8rem"},attrs:{variant:"secondary"}},[t._v(t._s(e))])],1)}))],2),r("div",{staticStyle:{"margin-top":"0.8rem"}},[r("span",{staticClass:"fas fa-user"}),r("strong",[t._v(" Owner:")]),t._v(" "+t._s(e.owner_name))]),e.users&&e.users>0?r("div",{staticStyle:{"margin-top":"0.8rem"}},[r("span",{staticClass:"fas fa-users"}),r("strong",[t._v(" Users:")]),t._v(" "+t._s(e.users))]):t._e()]),r("div",{staticStyle:{"margin-top":"1rem"}},[r("a",{attrs:{href:e.invite,target:"_blank",rel:"noopener noreferrer"}},[r("button",{staticClass:"btn btn-success cardbtn"},[t._v("Join Server")])])])],1)})),1):t._e()],1)])])},S=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-md-8",staticStyle:{"justify-content":"center"}},[r("h4",{staticStyle:{"text-align":"center","justify-content":"center"}},[t._v("No Results :/")])])}],y=r("ade3"),w=r("2909"),C=r("3835"),j=r("1da1"),k=(r("96cf"),r("d3b7"),r("3ca3"),r("ddb0"),r("caad"),r("2532"),r("a434"),r("99af"),r("d81d"),r("b0c0"),r("a15b"),r("ac1f"),r("1276"),r("4de4"),r("4fad"),r("bc3a")),x=r.n(k),O={name:"MainSite",created:function(){this.download_data()},mounted:function(){},data:function(){return{active_tab:"Servers",searching:!1,searching_b:!1,expanded_info:!1,botsShown:null,serversShown:null,serversSeed:{},botsSeed:{},longed:[],bots:[],servers:[]}},methods:{shuffle:function(t){for(var e=t.length-1;e>0;e--){var r=Math.floor(Math.random()*(e+1)),s=[t[r],t[e]];t[e]=s[0],t[r]=s[1]}return t},download_data:function(){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function e(){var r,s,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([x.a.get("https://raw.githubusercontent.com/RevoltSocial/lists/main/bots.json"),x.a.get("https://raw.githubusercontent.com/RevoltSocial/lists/main/servers.json")]);case 2:r=e.sent,s=Object(C["a"])(r,2),n=s[0],a=s[1],t.bots=t.shuffle(n.data),t.servers=t.shuffle(a.data),t.indexServers(),t.indexBots();case 10:case"end":return e.stop()}}),e)})))()},togg_lon:function(t){this.longed.includes(t)?this.longed.splice(this.longed.indexOf(t),1):this.longed.push(t)},setErrImg:function(t){t.target.src="/img/notFoundByAmy.png",t.target.alt="Logo failed loading"},indexServers:function(){this.serversSeed=Object.assign.apply(Object,[{}].concat(Object(w["a"])(this.servers.map((function(t){return Object(y["a"])({},t.id,t.name+"  "+t.short+"  "+t.long+t.tags.join(" "))})))))},indexBots:function(){this.botsSeed=Object.assign.apply(Object,[{}].concat(Object(w["a"])(this.bots.map((function(t){return Object(y["a"])({},t.id,t.name+"  "+t.short+"  "+t.long+t.tags.join(" "))})))))},searchInServers:function(){var t,e=(null!==(t=this.$refs.searchServerTerm.value)&&void 0!==t?t:"").toLowerCase();if(e&&e.length>1){document.activeElement.blur(),this.searching=!0,e=e.split(" ");var r=Object.entries(this.serversSeed).filter((function(t){var r=Object(C["a"])(t,2),s=r[0],n=r[1];return!!e.every((function(t){return n.toLowerCase().includes(t)}))&&s})).map((function(t){return t[0]}));this.serversShown=r}else this.$refs.searchServerTerm.value="",this.searching=!1,this.serversShown=null},searchInBots:function(){var t,e=(null!==(t=this.$refs.searchBotsTerm.value)&&void 0!==t?t:"").toLowerCase();if(e&&e.length>1){document.activeElement.blur(),this.searching_b=!0,e=e.split(" ");var r=Object.entries(this.botsSeed).filter((function(t){var r=Object(C["a"])(t,2),s=r[0],n=r[1];return!!e.every((function(t){return n.toLowerCase().includes(t)}))&&s})).map((function(t){return t[0]}));this.botsShown=r}else this.$refs.searchBotsTerm.value="",this.searching_b=!1,this.botsShown=null}}},B=O,E=Object(u["a"])(B,g,S,!1,null,null,null),$=E.exports,T=r("5f5b"),I=r("3949");s["default"].use(T["a"]),s["default"].component("vue-cookie-accept-decline",I["a"]);var M={name:"App",components:{Footer:_,Header:d,MainSite:$}},N=M,P=(r("5c0b"),Object(u["a"])(N,n,a,!1,null,null,null)),R=P.exports;s["default"].config.productionTip=!1,new s["default"]({render:function(t){return t(R)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";r("9c0c")},"9c0c":function(t,e,r){}});
//# sourceMappingURL=app.bcef1bd0.js.map