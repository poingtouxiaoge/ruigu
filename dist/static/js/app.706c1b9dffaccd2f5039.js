webpackJsonp([1],{"+CjY":function(t,e,n){t.exports=n.p+"static/img/banner2.ce9a4ac.jpg"},"/Gm5":function(t,e,n){t.exports=n.p+"static/img/banner3.d11fea7.jpg"},"3Xst":function(t,e,n){t.exports=n.p+"static/img/logo.8e17c89.jpg"},"73K5":function(t,e){},CVdK:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=n("VU/8")({name:"App"},a,!1,function(t){n("vA8x")},null,null).exports,s=n("/ocq"),l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[t._m(0),t._v(" "),n("div",{staticClass:"title"},[n("p",{on:{click:function(e){return t.home()}}},[t._v("首页")]),t._v(" "),n("p",[t._v("新闻")]),t._v(" "),n("p",[t._v("案例")]),t._v(" "),n("p",[t._v("商品")]),t._v(" "),n("p",[t._v("售后")]),t._v(" "),n("p",{on:{click:function(e){return t.lianxi()}}},[t._v("联系")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"loge"},[e("img",{attrs:{src:n("3Xst"),alt:""}})])}]};var r=n("VU/8")({methods:{lianxi:function(){this.$router.push("/contact")},home:function(){this.$router.push("/")}}},l,!1,function(t){n("73K5")},"data-v-05ca16f2",null).exports,c={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("这里是尾部组件")])},staticRenderFns:[]};var u=n("VU/8")({},c,!1,function(t){n("QWHM")},"data-v-1a1d8051",null).exports,m={components:{Heard:r,Footer:u},data:function(){return{activeIndex2:"1",list:[{img:n("uOPa")},{img:n("l/Zw")},{img:n("+CjY")},{img:n("/Gm5")}]}},methods:{handleSelect:function(t,e){console.log(t,e)}}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("Heard"),t._v(" "),n("div",{staticClass:"main"},[n("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex2,mode:"horizontal","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{select:t.handleSelect}},[n("el-menu-item",{attrs:{index:"1"}},[t._v("处理中心")]),t._v(" "),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[t._v("我的工作台")]),t._v(" "),n("el-menu-item",{attrs:{index:"2-1"}},[t._v("选项1")]),t._v(" "),n("el-menu-item",{attrs:{index:"2-2"}},[t._v("选项2")]),t._v(" "),n("el-menu-item",{attrs:{index:"2-3"}},[t._v("选项3")])],2),t._v(" "),n("el-menu-item",{attrs:{index:"3"}},[n("a",{attrs:{href:"https://www.ele.me",target:"_blank"}},[t._v("订单管理")])])],1),t._v(" "),n("el-carousel",{attrs:{"indicator-position":"outside"}},t._l(t.list,function(t,e){return n("el-carousel-item",{key:e},[n("img",{attrs:{src:t.img,alt:""}})])}),1)],1),t._v(" "),n("Footer")],1)},staticRenderFns:[]};var v=n("VU/8")(m,d,!1,function(t){n("X1zF")},"data-v-26f067cd",null).exports,f={components:{Heard:r,Footer:u},data:function(){return{currentDate:new Date,type:1}},methods:{dianji:function(){this.type=2,console.log("点击了")}}},p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Heard"),t._v(" "),i("div",{staticClass:"main"},[i("el-row",t._l(2,function(e,a){return i("el-col",{key:e,attrs:{span:8,offset:a>0?2:0}},[i("el-card",{attrs:{"body-style":{padding:"0px"}}},[i("img",{staticClass:"image",attrs:{src:n("uOPa")}}),t._v(" "),i("div",{staticStyle:{padding:"14px"}},[i("span",[t._v("好吃的汉堡")]),t._v(" "),i("div",{staticClass:"bottom clearfix"},[i("time",{staticClass:"time"},[t._v(t._s(t.currentDate))]),t._v(" "),i("el-button",{staticClass:"button",attrs:{type:"text"}},[t._v("操作按钮")])],1)])])],1)}),1)],1),t._v(" "),i("div",{staticClass:"shaixuan"},[i("span",{staticClass:"zhankai",on:{click:t.dianji}},[t._v("点我展开")])]),t._v(" "),2===t.type?i("div",{staticClass:"mengceng"}):t._e(),t._v(" "),i("Footer")],1)},staticRenderFns:[]};var _=n("VU/8")(f,p,!1,function(t){n("WByz")},"data-v-36a126db",null).exports,g={data:function(){return{type:1,labelPosition:"right",formLabelAlign:{name:"",region:""}}},methods:{increment:function(){this.$store.commit("increment"),console.log(this.$store.state.count)},tologin1:function(){this.type=1,this.increment()},tologin2:function(){this.type=2},toindex:function(){alert("登录成功"),this.$router.push("/")},toindex1:function(){alert("注册成功，赶快去登录吧！！"),this.type=1}}},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("div",{staticClass:"box"},[n("div",{staticClass:"title"},[n("div",{staticClass:"denglu",on:{click:t.tologin1}},[t._v("登录")]),t._v(" "),n("div",{staticClass:"zhuce",on:{click:t.tologin2}},[t._v("注册")])]),t._v(" "),1==t.type?n("div",{staticClass:"login_num"},[n("el-form",{attrs:{"label-position":t.labelPosition,"label-width":"100px",model:t.formLabelAlign}},[n("el-form-item",{attrs:{label:"账号"}},[n("el-input",{model:{value:t.formLabelAlign.name,callback:function(e){t.$set(t.formLabelAlign,"name",e)},expression:"formLabelAlign.name"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"密码"}},[n("el-input",{attrs:{type:"password"},model:{value:t.formLabelAlign.region,callback:function(e){t.$set(t.formLabelAlign,"region",e)},expression:"formLabelAlign.region"}})],1)],1)],1):t._e(),t._v(" "),2==t.type?n("div",{staticClass:"login_num"},[n("el-form",{attrs:{"label-position":t.labelPosition,"label-width":"120px",model:t.formLabelAlign}},[n("el-form-item",{attrs:{label:"手机号"}},[n("el-input",{model:{value:t.formLabelAlign.name,callback:function(e){t.$set(t.formLabelAlign,"name",e)},expression:"formLabelAlign.name"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"设置密码"}},[n("el-input",{attrs:{type:"text"},model:{value:t.formLabelAlign.region,callback:function(e){t.$set(t.formLabelAlign,"region",e)},expression:"formLabelAlign.region"}})],1)],1)],1):t._e(),t._v(" "),1==t.type?n("div",{staticClass:"btns",on:{click:t.toindex}},[t._v("登录")]):t._e(),t._v(" "),2==t.type?n("div",{staticClass:"btns",on:{click:t.toindex1}},[t._v("注册")]):t._e()])])},staticRenderFns:[]};var h=n("VU/8")(g,b,!1,function(t){n("CVdK")},"data-v-1f3113f5",null).exports;i.default.use(s.a);var x=new s.a({routes:[{path:"/",name:"index",component:v},{path:"/login",name:"login",component:h},{path:"/contact",name:"contact",component:_}]}),C=n("zL8q"),y=n.n(C),A=(n("tvR6"),n("sVYa"),n("NYxO"));i.default.use(A.a);new A.a.Store({state:{count:0},mutations:{increment:function(t){t.count++}}}),n("MU8w");i.default.use(A.a),i.default.config.productionTip=!1,i.default.use(y.a),new i.default({el:"#app",render:function(t){return t(o)},router:x,store:void 0,components:{App:o},template:"<App/>"})},QWHM:function(t,e){},WByz:function(t,e){},X1zF:function(t,e){},"l/Zw":function(t,e,n){t.exports=n.p+"static/img/banner1.f3e470b.jpg"},tvR6:function(t,e){},uOPa:function(t,e,n){t.exports=n.p+"static/img/banner.5dbe538.jpg"},vA8x:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.706c1b9dffaccd2f5039.js.map