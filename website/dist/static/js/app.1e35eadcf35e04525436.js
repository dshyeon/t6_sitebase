webpackJsonp([0],{"1/oy":function(t,e){},"4Uwr":function(t,e,a){t.exports=a.p+"static/img/logo.48024f0.jpg"},Id91:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),s=a("/ocq"),r=a("e6fC"),i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"frontpage"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("p",[t._v(t._s(t.content))]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"loadercontainer"},[e("div",{staticClass:"loader"},[e("div",{attrs:{id:"largeBox"}}),this._v(" "),e("div",{attrs:{id:"smallBox"}})])])}]};var o=a("VU/8")({name:"FrontPage",data:function(){return{msg:"Welcome to Team Six, Inc.",content:"Under development"}}},i,!1,function(t){a("WHiv")},"data-v-7ab70581",null).exports,c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",[t._v("Completed Tasks: "+t._s(t.todos.filter(function(t){return!0===t.done}).length))]),t._v(" "),a("p",[t._v("Pending Tasks: "+t._s(t.todos.filter(function(t){return!1===t.done}).length))]),t._v(" "),t._l(t.todos,function(e){return a("div",{staticClass:"ui centered card"},[a("div",{staticClass:"content"},[a("div",{staticClass:"header"},[t._v("\n        "+t._s(e.title)+"\n      ")]),t._v(" "),a("div",{staticClass:"meta"},[t._v("\n        "+t._s(e.project)+"\n      ")]),t._v(" "),t._m(0,!0)]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.done,expression:"todo.done"}],staticClass:"ui bottom attached green basic button"},[t._v("\n      Completed\n    ")]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.done,expression:"!todo.done"}],staticClass:"ui bottom attached red basic button"},[t._v("\n      Complete\n    ")])])})],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"extra content"},[e("span",{staticClass:"right floated edit icon"},[e("i",{staticClass:"edit icon"})])])}]};var l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark indigo"},[a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Navbar")]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("li",{staticClass:"nav-item dropdown"},[a("a",{staticClass:"nav-link dropdown-toggle",attrs:{id:"navbarDropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("Dropdown")]),t._v(" "),a("div",{staticClass:"dropdown-menu dropdown-primary",attrs:{"aria-labelledby":"navbarDropdownMenuLink"}},[a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[a("router-link",{attrs:{to:"/"}},[t._v("Action")])],1),t._v(" "),a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Another action")]),t._v(" "),a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something else here")])])])]),t._v(" "),t._m(4)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"nav-item active"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[this._v("Home "),e("span",{staticClass:"sr-only"},[this._v("(current)")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[this._v("Features")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[this._v("Pricing")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("form",{staticClass:"form-inline"},[e("input",{staticClass:"form-control mr-sm-2",attrs:{type:"text",placeholder:"Search","aria-label":"Search"}})])}]},d={name:"App",components:{FrontPage:o,TodoList:a("VU/8")({props:["todos"]},c,!1,function(t){a("PzmS")},null,null).exports,NavBar:a("VU/8")({name:"NavBar"},l,!1,null,null,null).exports},data:function(){return{todos:[{title:"Todo A",project:"Project A",done:!1},{title:"Todo B",project:"Project B",done:!0},{title:"Todo C",project:"Project C",done:!1},{title:"Todo D",project:"Project D",done:!1}]}}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("img",{attrs:{id:"logo",src:a("4Uwr")}}),this._v(" "),this._m(0),this._v(" "),e("front-page")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{attrs:{id:"stock",src:a("oRmU")}})])}]};var u=a("VU/8")(d,v,!1,function(t){a("TJ6E")},null,null).exports;n.a.use(r.a),n.a.use(s.a),n.a.config.productionTip=!1;var p=[{path:"/",component:o}];new s.a({mode:"history",routes:p});new n.a({el:"#app",components:{App:u},template:"<App/>"})},PzmS:function(t,e){},TJ6E:function(t,e){},WHiv:function(t,e){},oRmU:function(t,e,a){t.exports=a.p+"static/img/stock.14fbefa.jpg"},zj2Q:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.1e35eadcf35e04525436.js.map