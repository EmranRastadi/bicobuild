(this.webpackJsonpbicon=this.webpackJsonpbicon||[]).push([[21],{317:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var c=n(95),r="".concat("http://188.34.138.109:8000/api/").concat("v1"),s={"Content-Type":"application/json",Authorization:"Bearer "+Object(c.a)()},a=n(328),i=n.n(a),o=n(329),l=n.n(o);l()(i.a,{retries:3,retryDelay:l.a.exponentialDelay});var d=i.a.create({baseURL:r,timeout:6e4,headers:s}),u=(i.a.create({baseURL:r,timeout:6e4,headers:{"Content-Type":"application/json"}}),{SignIn:function(e){return d.post("auth/login",e)},SignUp:function(e){return d.post("auth/register",e)},VerifyCode:function(e){return d.post("auth/verifyActiveCode",e)},ForgetPassword:function(e){return d.post("auth/forgotPassword/sendActiveCode",e)},NewPassword:function(e){return d.post("auth/resetPassword",e)},UserFirstData:function(e){return d.put("auth/updateDetails",e)},DoctorAdd:function(e){return d.post("doctors",e)}})},321:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d}));var c=n(322),r=n.n(c),s=n(323),a=n(317),i=(n(96),function(e){var t=JSON.stringify({phoneNumber:e.phoneNumber,accountType:2});return function(){var e=Object(s.a)(r.a.mark((function e(n,c){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.a.SignUp(t).then((function(e){n({type:"SIGN_UP_SUCCESS",response:e.data})}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}),o=function(e){var t=e.code_1+e.code_2+e.code_3+e.code_4,n=JSON.stringify({phoneNumber:e.phoneNumber,code:t});return function(){var e=Object(s.a)(r.a.mark((function e(t,c){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.a.VerifyCode(n).then((function(e){t({type:"VERIFY_SUCCESS",token:e.data.token})}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},l=function(e){var t=JSON.stringify({fullName:e.fullname,password:e.password});return function(){var e=Object(s.a)(r.a.mark((function e(n,c){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.a.UserFirstData(t).then((function(e){n({type:"SET_DATA_SUCCESS",response:e})}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},d=function(e){var t={};return t=e.isAssistance?JSON.stringify({isAssistant:!0,assistant:{phoneNumber:e.phoneNumber,description:e.description}}):JSON.stringify({isAssistant:!1}),function(){var e=Object(s.a)(r.a.mark((function e(n,c){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("jsons sss : ",t),e.next=3,a.a.DoctorAdd(t).then((function(e){n({type:"UPLOADED_OK",response:e})}),(function(e){n({type:"UPLOADED_ERR",response:e})}));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}},327:function(e,t,n){"use strict";function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,c=new Array(t);n<t;n++)c[n]=e[n];return c}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],c=!0,r=!1,s=void 0;try{for(var a,i=e[Symbol.iterator]();!(c=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);c=!0);}catch(o){r=!0,s=o}finally{try{c||null==i.return||i.return()}finally{if(r)throw s}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return r}))},391:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(94),s=n(327),a=n(62),i=n(387),o=n(307),l=n.n(o),d=n(93),u=n(308),j=n.n(u),b=n(321),p=n(40),m=n(1),h=Object(c.memo)((function(e){var t,n,o=Object(i.a)(),u=o.t,h=o.i18n,O=Object(d.c)();Object(c.useEffect)((function(){console.log("respo : ",e.respo),e.respo.resLog&&200===e.respo.resLog.data.statusCode&&(console.log("states : ",e.respo.resLog.data),localStorage.setItem(p.b,JSON.stringify(e.respo.resLog.data)),setTimeout((function(){window.location.pathname="/upload-file"}),1200));var t=document.querySelectorAll("select");j.a.FormSelect.init(t)}));var f=Object(c.useState)({}),x=Object(s.a)(f,2),v=x[0],g=x[1];function y(e){g(Object(r.a)({},e.target.name,e.target.value))}u("select-type.l");return Object(m.jsxs)("div",{className:"auth_back",children:[Object(m.jsx)("div",{id:"back_shado"}),Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"col s12",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col l4 m2 s1"}),Object(m.jsx)("div",{className:"col l4 m8 s10",children:Object(m.jsxs)("div",{id:"auth_box",children:[Object(m.jsxs)("div",{id:"change_or_sub",children:[Object(m.jsx)("input",{type:"checkbox",name:"cahngelan",onChange:function(e){e.preventDefault(),localStorage.getItem("lan")||localStorage.setItem("lan","en");var t=localStorage.getItem("lan");l()("input[name=cahngelan]").is(":checked")&&"en"===t?localStorage.setItem("lan","ch"):localStorage.setItem("lan","en");var n=localStorage.getItem("lan");h.changeLanguage(n)},id:"change_lang_login"}),Object(m.jsx)("span",{children:u("Lang.l")})]}),Object(m.jsx)("div",{className:"mini_box_over",children:Object(m.jsx)("div",{id:"mini_circule",children:Object(m.jsx)("i",{className:"material-icons",children:"person_outline"})})}),Object(m.jsx)("div",{className:"mini_box_over",style:{right:0},children:Object(m.jsx)("div",{id:"mini_circule_r",children:Object(m.jsx)("img",{src:"/img/icons/doctorB.png"})})}),Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"input-field col s12",style:{marginTop:55},children:[Object(m.jsx)("p",{id:"text_sub",children:u("Welcome-to.l")}),Object(m.jsx)("p",{id:"text_sub",style:{fontSize:"40px",marginTop:"15px !important",marginBottom:"15px !important"},children:"Bi Con"}),Object(m.jsx)("p",{id:"text_sub",children:u("UserRegData.l")})]})}),Object(m.jsxs)("div",{className:"register_type_user",id:"verifyBorder",style:{hight:"auto"},children:[Object(m.jsx)("div",{id:"loading_back",children:Object(m.jsx)("div",{className:"preloader-wrapper big active",id:"loading_progress",children:Object(m.jsxs)("div",{className:"spinner-layer spinner-blue-only",children:[Object(m.jsx)("div",{className:"circle-clipper left",children:Object(m.jsx)("div",{className:"circle"})}),Object(m.jsx)("div",{className:"gap-patch",children:Object(m.jsx)("div",{className:"circle"})}),Object(m.jsx)("div",{className:"circle-clipper right",children:Object(m.jsx)("div",{className:"circle"})})]})})}),Object(m.jsx)("form",{onSubmit:function(e){return function(e){e.preventDefault(),O(Object(b.b)(v))}(e)},children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"col s12",children:[Object(m.jsx)("div",{className:"row"}),Object(m.jsxs)("div",{className:"input-field col s12",style:{marginTop:0},children:[Object(m.jsxs)("p",{style:{color:"#ccc"},children:["\xa0\xa0",u("UserName.l")]}),Object(m.jsx)("div",{id:"input_back",children:Object(m.jsx)("input",(t={name:"user_name",placeholder:u("UUserName.l"),autoComplete:"false"},Object(r.a)(t,"name","fullname"),Object(r.a)(t,"onChange",(function(e){return y(e)})),Object(r.a)(t,"required",!0),Object(r.a)(t,"type","text"),Object(r.a)(t,"className","validate"),t))}),Object(m.jsxs)("p",{id:"alert-p",children:["\xa0\xa0",u("must-field.l")]})]}),Object(m.jsxs)("div",{className:"input-field col s12",style:{marginTop:0},children:[Object(m.jsxs)("p",{style:{color:"#ccc"},children:["\xa0\xa0",u("Password.l")]}),Object(m.jsx)("div",{id:"input_back",children:Object(m.jsx)("input",(n={name:"password",placeholder:u("URegPassword.l"),autoComplete:"false"},Object(r.a)(n,"name","password"),Object(r.a)(n,"onChange",(function(e){return y(e)})),Object(r.a)(n,"required",!0),Object(r.a)(n,"type","password"),Object(r.a)(n,"className","validate"),n))}),Object(m.jsxs)("p",{id:"alert-p",children:["\xa0\xa0",u("must-field.l")]})]}),Object(m.jsx)("div",{className:"col s12",style:{marginTop:15,marginBottom:30},children:Object(m.jsx)("input",{className:"btn blue darken-4 waves-effect",type:"submit",id:"check_phone_num",value:u("Save.l")})})]})})})})]})]})})]})}),Object(m.jsx)("div",{className:"col l4 m2 s1"})]})})}),Object(m.jsx)("div",{className:"modela_back",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col hide-on-small-and-down l4 m2"}),Object(m.jsx)("div",{className:"col s12 l4 m9",children:Object(m.jsxs)("div",{id:"modal_content",children:[Object(m.jsx)("h1",{children:"check your data"}),Object(m.jsx)("div",{id:"content_data_modal",children:Object(m.jsx)("table",{children:Object(m.jsxs)("tbody",{children:[Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"name"}),Object(m.jsx)("td",{children:"Emran"})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"UserName"}),Object(m.jsx)("td",{children:"Emran7415"})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"PassWord"}),Object(m.jsx)("td",{style:{position:"relative"},children:Object(m.jsx)("span",{children:"12354532165"})})]}),Object(m.jsx)("tr",{children:Object(m.jsx)("td",{children:Object(m.jsx)(a.c,{to:"/doctor",children:Object(m.jsx)("button",{className:"btn btn-primary green darken-4 waves-effect",children:"verify"})})})})]})})})]})}),Object(m.jsx)("div",{className:"col hide-on-small-and-down l4 m2"})]})})})]})})),O=Object(d.b)((function(e){return{respo:e.Auth}}),{NewData:b.b})(h);t.default=Object(c.memo)((function(){return Object(m.jsx)(O,{})}))}}]);
//# sourceMappingURL=21.08edf12e.chunk.js.map