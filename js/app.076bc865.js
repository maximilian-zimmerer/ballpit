(function(t){function e(e){for(var n,a,i=e[0],c=e[1],u=e[2],d=0,p=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&p.push(s[a][0]),s[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(p.length)p.shift()();return r.push.apply(r,u||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],n=!0,i=1;i<o.length;i++){var c=o[i];0!==s[c]&&(n=!1)}n&&(r.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},s={app:0},r=[];function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("85ec"),s=o.n(n);s.a},"0635":function(t,e,o){},"069e":function(t,e,o){"use strict";var n=o("ad86"),s=o.n(n);s.a},2369:function(t,e,o){"use strict";var n=o("3220"),s=o.n(n);s.a},3220:function(t,e,o){},"39ce":function(t,e,o){},"3ca2":function(t,e,o){"use strict";var n=o("4361"),s=o.n(n);s.a},4361:function(t,e,o){},"448b":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("Header",{key:t.$route.fullPath}),o("transition",{attrs:{name:"fade",mode:"out-in"}},[o("router-view")],1)],1)},r=[],a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"header-wrapper"},[o("section",{staticClass:"header-nav"},[t.isLoggedIn?o("span",[o("router-link",{staticClass:"link",attrs:{to:"/"}},[t._v("List")])],1):t._e(),t.isLoggedIn?o("span",[o("router-link",{staticClass:"link",attrs:{to:"/Info"}},[t._v("Info")])],1):t._e(),t.isLoggedIn?t._e():o("span",[o("router-link",{staticClass:"link",attrs:{to:"/Login"}},[t._v("Login")])],1)]),t._m(0),o("section",{staticClass:"logout-wrapper"},[t.isLoggedIn?o("span",{staticClass:"logout",on:{click:t.logout}},[t._v("Logout")]):t._e(),t.isLoggedIn?t._e():o("span",{staticClass:"register"},[o("router-link",{staticClass:"link",attrs:{to:"/Register"}},[t._v("Register")])],1)])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo-icon-wrapper"},[n("img",{attrs:{src:o("a37a")}})])}],c=o("59ca"),u=o.n(c),l={name:"Header",data:function(){return{isLoggedIn:!1}},methods:{logout:function(){var t=this;u.a.auth().signOut().then((function(){t.$router.push("/Login"),t.isLoggedIn=!1}))}},created:function(){u.a.auth().currentUser&&(this.isLoggedIn=!0)}},d=l,p=(o("f918"),o("2877")),m=Object(p["a"])(d,a,i,!1,null,"2be8b864",null),f=m.exports,h={name:"app",components:{Header:f}},g=h,v=(o("034f"),Object(p["a"])(g,s,r,!1,null,null,null)),w=v.exports,C=(o("45fc"),o("8c4f")),b=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"main-wrapper"},[o("transition",{attrs:{name:"fade"}},[t.todoExists?o("div",{staticClass:"todo-canvas"},[o("TodoCanvas",{attrs:{todos:t.todos}})],1):t._e()]),o("div",{staticClass:"todo-add"},[o("AddTodo",{on:{newTodo:function(e){return t.addTodo(e)}}})],1),o("transition",{attrs:{name:"fade-right"}},[t.todoExists?o("div",{staticClass:"todo-list"},[o("Todos",{attrs:{todos:t.todos,currentUser:t.currentUser},on:{newTodo:function(e){return t.addTodo(e)},deleteTodo:function(e){return t.deleteTodo(e)},updateText:function(e){return t.updateText(e)},updateComplete:function(e){return t.updateComplete(e)}}})],1):t._e()]),o("transition",{attrs:{name:"fade"}},[t.todoExists?t._e():o("div",{staticClass:"prompter"},[o("span",[t._v("Don't you have something to do?")])])])],1)},_=[],x=(o("4de4"),o("4160"),o("159b"),o("ea7b"),o("e71f"),{apiKey:"AIzaSyBkwByXhFLBBCt1wVEnoGUC9E-W4-ZOxp0",authDomain:"todo-list-1-900db.firebaseapp.com",databaseURL:"https://todo-list-1-900db.firebaseio.com",projectId:"todo-list-1-900db",storageBucket:"todo-list-1-900db.appspot.com",messagingSenderId:"970542818787",appId:"1:970542818787:web:c82974fb159bfe60a66cd6",measurementId:"G-65ZSMKM1EG"}),T=u.a.initializeApp(x),y=T.firestore(),E=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todos-wrapper"},[o("transition-group",{attrs:{name:"fade-right",tag:"div"}},t._l(t.todos,(function(e,n){return o("div",{key:e.id,staticClass:"todo-items"},[o("TodoItem",{staticClass:"todo-item",attrs:{todo:e,index:n},on:{deleteTodo:function(e){return t.deleteTodo(e)},updateText:function(e){return t.updateText(e)},updateComplete:function(e){return t.updateComplete(e)}}})],1)})),0)],1)},P=[],U=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"todo-item-wrapper"},[o("section",{staticClass:"todo-item-left"},[o("span",{staticClass:"completed-wrapper"},[o("span",{staticClass:"completed",on:{click:t.toggleComplete,mouseover:function(e){t.hoverComplete=!0},mouseleave:function(e){t.hoverComplete=!1}}},[t._v(" "+t._s(t.statusComplete)+" ")])]),o("span",{staticClass:"index-wrapper"},[o("span",{staticClass:"index"},[t._v(t._s(t.index+1))])]),t.isEditing?t._e():o("span",{staticClass:"text-wrapper"},[o("span",{staticClass:"text",class:{hoverComplete:this.hoverComplete,isComplete:this.isComplete},on:{click:t.toggleComplete,mouseover:function(e){t.hoverComplete=!0},mouseleave:function(e){t.hoverComplete=!1}}},[t._v(" "+t._s(t.todo.text)+" ")])]),t.isEditing?o("form",{staticClass:"text-edit-wrapper",on:{submit:function(e){return e.preventDefault(),t.toggleEdit(e)}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.updateText,expression:"updateText"}],ref:"edit",staticClass:"text-edit",attrs:{type:"text"},domProps:{value:t.updateText},on:{input:function(e){e.target.composing||(t.updateText=e.target.value)}}})]):t._e()]),o("section",{staticClass:"todo-item-right"},[o("span",{staticClass:"edit",on:{click:t.toggleEdit}},[t._v(t._s(t.statusEditing))]),o("span",{staticClass:"remove",on:{click:t.deleteTodo}},[t._v("x")])])])},k=[],M={name:"TodoItem",props:["todo","index"],data:function(){return{isEditing:!1,updateText:!1,hoverComplete:!1,activeText:this.todo.text,isComplete:this.todo.isComplete}},mounted:function(){this.updateText=this.todo.text},methods:{toggleComplete:function(){this.isComplete=!this.isComplete,this.$emit("updateComplete",{id:this.todo.id,isComplete:this.isComplete})},toggleEdit:function(){var t=this;this.isEditing=!this.isEditing,this.isEditing?this.$nextTick((function(){t.$refs.edit.focus()})):this.todo.text!=this.updateText&&(this.$emit("updateText",{id:this.todo.id,text:this.updateText}),this.todo.text=this.updateText)},deleteTodo:function(){this.$emit("deleteTodo",this.todo.id)}},computed:{statusComplete:function(){return this.isComplete?"●":"○"},statusEditing:function(){return this.isEditing?"...":"///"}}},L=M,j=(o("fc72"),Object(p["a"])(L,U,k,!1,null,"d6119fc2",null)),$=j.exports,O={name:"Todos",components:{TodoItem:$},props:["todos","currentUser"],methods:{newTodo:function(t){this.$emit("newTodo",t)},deleteTodo:function(t){this.$emit("deleteTodo",t)},updateText:function(t){this.$emit("updateText",t)},updateComplete:function(t){this.$emit("updateComplete",t)}}},R=O,I=(o("f91c"),Object(p["a"])(R,E,P,!1,null,"3ded7b4f",null)),A=I.exports,S=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"add-todo-wrapper"},[o("form",{staticClass:"add-todo",on:{submit:function(e){return e.preventDefault(),t.newTodo(e)}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",placeholder:"New Todo..."},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),o("input",{attrs:{type:"submit",value:"Add"}})])])},D=[],B=o("ec26"),q={name:"AddTodo",data:function(){return{title:"",currentUser:!1}},methods:{newTodo:function(){var t=new Date,e=u.a.firestore.Timestamp.fromDate(t);if(""!=this.title){var o={id:Object(B["a"])(),text:this.title,isComplete:!1,uid:this.currentUser.uid,timeStamp:e.seconds};this.$emit("newTodo",o)}this.title=""}},created:function(){this.currentUser=u.a.auth().currentUser}},N=q,V=(o("5eef"),Object(p["a"])(N,S,D,!1,null,"c446f48a",null)),G=V.exports,W=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("canvas",{attrs:{id:"canvas-wrapper"}})},H=[],F=o("d4ec"),z=o("bee2"),Z=o("b8bf"),J=o.n(Z),K={name:"todoCanvas",props:["todos"],data:function(){return{oldVal:!1,ballColor:!1,colors:["#222222","#662C91","#F58A07","#C81D25","#345511"]}},created:function(){this.ballColor=this.colors[Math.floor(Math.random()*this.colors.length)]},mounted:function(){var t=this,e=4,o=5e3,n=o/2,s=document.getElementById("canvas-wrapper"),r=window.matchMedia("(max-width: 767px)"),a=document.documentElement.clientHeight,i=document.documentElement.clientWidth,c=J.a.Engine,u=J.a.World,l=J.a.Bodies,d=J.a.Render,p=c.create(),m=p.world,f=d.create({canvas:s,engine:p,options:{width:i,height:a,wireframes:!1}});u.add(m,[]),c.run(p),d.run(f);var h=function(){function t(e,o,n,s){Object(F["a"])(this,t);var r={isStatic:!0};this.w=n,this.h=s,this.body=l.rectangle(e,o,this.w,this.h,r),u.add(m,this.body)}return Object(z["a"])(t,[{key:"rePosition",value:function(t,e){J.a.Body.setPosition(this.body,{x:t,y:e})}}]),t}(),g=new h(-n,a/2,o,a*e),v=new h(i+n,a/2,o,a*e),w=new h(i/2,a+n,i*e,o),C=function(){return l.circle(i/2,a/2,b(),{restitution:.6,friction:.3,render:{fillStyle:t.ballColor}})};function b(){var t;return t=r.matches?Math.floor(80*Math.random())+60:Math.floor(120*Math.random())+80,t}setTimeout((function(){if(t.todos.length>0)for(var e=0;e<t.todos.length-1;e++)u.add(p.world,C()),t.oldVal=t.todos.length}),500),window.onresize=function(){i=document.documentElement.clientWidth,a=document.documentElement.clientHeight,g.rePosition(-n,a/2),v.rePosition(i+n,a/2),w.rePosition(i/2,a+n),f.canvas.width=document.documentElement.clientWidth,f.canvas.height=document.documentElement.clientHeight},setInterval((function(){t.oldVal<t.todos.length?(t.oldVal=t.todos.length,u.add(p.world,C())):t.oldVal>t.todos.length&&(t.oldVal=t.todos.length,m.bodies.length>3&&J.a.Composite.remove(m,m.bodies[4]))}),100)}},Y=K,X=(o("3ca2"),Object(p["a"])(Y,W,H,!1,null,"3d73a399",null)),Q=X.exports,tt=y.collection("todos"),et=y.collection("counter"),ot={name:"todo-list",components:{Todos:A,AddTodo:G,TodoCanvas:Q},data:function(){return{todos:[],currentUser:!1}},methods:{addTodo:function(t){var e=this;tt.doc().set(t).then((function(){e.todos.push(t)})).catch((function(t){console.error(t)}))},updateComplete:function(t){var e=tt.where("id","==","".concat(t.id));e.get().then((function(e){e.forEach((function(e){return tt.doc(e.id).update({isComplete:t.isComplete})}))})).catch((function(t){console.error(t)}))},updateText:function(t){var e=tt.where("id","==","".concat(t.id));e.get().then((function(e){e.forEach((function(e){return tt.doc(e.id).update({text:t.text})}))})).catch((function(t){console.error(t)}))},deleteTodo:function(t){var e=this,o=tt.where("id","==","".concat(t));o.get().then((function(t){t.forEach((function(t){t.ref.delete()}))})),et.doc("".concat(this.currentUser.uid)).get().then((function(t){t.exists?et.doc("".concat(e.currentUser.uid)).update({counter:u.a.firestore.FieldValue.increment(1)}):et.doc("".concat(e.currentUser.uid)).set({counter:1})})).catch((function(t){console.error(t)})),this.todos=this.todos.filter((function(e){return e.id!==t}))}},computed:{todoExists:function(){return this.todos.length}},created:function(){this.currentUser=u.a.auth().currentUser},mounted:function(){var t=this;tt.get().then((function(e){var o=[];e.forEach((function(t){var e=t.data();o.push(e)})),t.todos=o.filter((function(e){return e.uid==t.currentUser.uid})),t.todos.sort((function(t,e){return t.timeStamp-e.timeStamp}))})).catch((function(t){console.error(t)}))}},nt=ot,st=(o("592a"),Object(p["a"])(nt,b,_,!1,null,"e78b3574",null)),rt=st.exports,at=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"info-wrapper"},[o("section",{staticClass:"metadata"},[o("section",{staticClass:"email"},[t._v("Logged in as: "+t._s(t.email))]),o("section",{staticClass:"login"},[t._v("Last Login: "+t._s(t.lastLogin))]),o("section",{staticClass:"password-wrapper"},[o("form",{staticClass:"password-form",on:{submit:function(e){return e.preventDefault(),t.updatePassword(e)}}},[o("label",{attrs:{for:"newPassword"}},[t._v("Change Password:")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.newPassword,expression:"newPassword"}],attrs:{type:"password",id:"newPassword",placeholder:"Favorite Animal?"},domProps:{value:t.newPassword},on:{input:function(e){e.target.composing||(t.newPassword=e.target.value)}}}),o("input",{attrs:{type:"submit",value:"Update"}})])]),o("transition",{attrs:{name:"fade-right"}},[t.errorMsg?o("section",{staticClass:"error-wrapper"},[o("span",{staticClass:"error-msg"},[t._v(t._s(t.errorMsg))])]):t._e()]),o("section",{staticClass:"delete-wrapper"},[o("form",{staticClass:"delete-form",on:{submit:function(e){return e.preventDefault(),t.deleteAccount(e)}}},[o("input",{attrs:{type:"submit",value:"Delete Account"}})])]),o("section",{staticClass:"counter-text"},[t._v("Completed Todos:")]),o("section",{staticClass:"counter-wrapper"},[o("p",{staticClass:"counter"},[t._v(t._s(t.completedCounter))])])],1),t._m(0)])},it=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"about"},[o("section",{staticClass:"about-title-wrapper"},[o("p",{staticClass:"about-title"},[t._v("Ballpit")])]),o("section",{staticClass:"about-body"},[t._v(' Ballpit is a playful take on the classic "Todo-List" list and focuses on the visual aspect of completing day-to-day tasks. The main inspiration behind this project is '),o("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://experiments.withgoogle.com/activity-bubbles"}},[t._v("Google Creative Lab's Activity Bubbles")]),t._v(" (2020). This app runs on "),o("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://vuejs.org/"}},[t._v("Vue.js")]),t._v(" and uses "),o("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://firebase.google.com/"}},[t._v("Firebase ")]),t._v(" to authenticate users and securely store their data, as well as "),o("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://brm.io/matter-js/"}},[t._v("Matter.js ")]),t._v(" for physics simulation. You can see the code for Ballpit "),o("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/MaximilianUAL2020/Todo-App"}},[t._v("here")]),t._v(", and if you have any questions about this project, please feel free to "),o("a",{attrs:{href:"mailto: maxi.zimmerer@gmail.com"}},[t._v("reach out")]),t._v(". ")]),o("section",{staticClass:"about-copyright"},[o("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://www.maxi.studio"}},[t._v("Maximilian Zimmerer ")]),o("span",[t._v("©2020")])])])}],ct=y.collection("todos"),ut=y.collection("counter"),lt={name:"Info",data:function(){return{email:!1,errorMsg:!1,newPassword:"",lastLogin:!1,currentUser:!1,completedCounter:0}},methods:{updatePassword:function(){var t=this;this.currentUser.updatePassword(this.newPassword).then((function(){t.errorMsg="Password Updated!",t.newPassword=""})).catch((function(e){t.errorMsg=e.message,t.newPassword=""}))},deleteAccount:function(){var t=this,e=ct.where("uid","==","".concat(this.currentUser.uid));e.get().then((function(t){t.forEach((function(t){t.ref.delete()}))})).then((function(){ut.doc(t.currentUser.uid).delete().then((function(){t.currentUser.delete(),t.logout()}))})).catch((function(e){t.errorMsg=e.message}))},logout:function(){var t=this;u.a.auth().signOut().then((function(){t.$router.push("/Login"),t.isLoggedIn=!1}))}},created:function(){u.a.auth().currentUser&&(this.isLoggedIn=!0,this.currentUser=u.a.auth().currentUser,this.lastLogin=this.currentUser.metadata.lastSignInTime,this.email=this.currentUser.email)},mounted:function(){var t=this;ut.doc("".concat(this.currentUser.uid)).get().then((function(e){e.exists&&(t.completedCounter=e.data().counter)})).catch((function(t){console.error(t)}))}},dt=lt,pt=(o("069e"),Object(p["a"])(dt,at,it,!1,null,"5aa4d370",null)),mt=pt.exports,ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-wrapper"},[n("form",{staticClass:"login-form",on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",id:"email",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{id:"password",type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("input",{attrs:{type:"submit",value:"Login"}}),n("transition",{attrs:{name:"fade-right"}},[t.errorMsg?n("section",{staticClass:"error-wrapper"},[n("span",{staticClass:"error-msg"},[t._v(t._s(t.errorMsg)+" ")]),n("span",{staticClass:"error-msg-link",on:{click:t.toggleReset}},[t._v(" Reset Password?")])]):t._e()])],1),n("transition",{attrs:{name:"fade-right"}},[t.showReset?n("section",{staticClass:"reset-wrapper"},[n("form",{staticClass:"reset-form",on:{submit:function(e){return e.preventDefault(),t.sendReset(e)}}},[n("label",{attrs:{for:"email"}},[t._v("Password Reset")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.emailReset,expression:"emailReset"}],attrs:{id:"email",type:"text",placeholder:"Your Email"},domProps:{value:t.emailReset},on:{input:function(e){e.target.composing||(t.emailReset=e.target.value)}}}),n("input",{attrs:{type:"submit",value:"Send"}})])]):t._e()]),n("transition",{attrs:{name:"fade-right"}},[t.showReset?t._e():n("div",{staticClass:"logo-text-wrapper"},[n("img",{staticClass:"logo-text",attrs:{src:o("e882")}})])])],1)},ht=[],gt={name:"login",data:function(){return{email:"",password:"",emailReset:"",errorMsg:!1,showReset:!1}},methods:{login:function(){var t=this;u.a.auth().signInWithEmailAndPassword(this.email,this.password).then((function(){t.$router.push("/")})).catch((function(e){t.errorMsg=e}))},toggleReset:function(){this.showReset=!this.showReset},sendReset:function(){var t=this;u.a.auth().sendPasswordResetEmail(this.emailReset).then((function(){t.errorMsg="Email sent to ".concat(t.emailReset),t.emailReset=""})).catch((function(e){t.errorMsg=e,t.emailReset=""}))}}},vt=gt,wt=(o("ec2d"),Object(p["a"])(vt,ft,ht,!1,null,"d540eba0",null)),Ct=wt.exports,bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"register-wrapper"},[n("form",{staticClass:"register-form",on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",id:"email",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{id:"password",type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("input",{attrs:{type:"submit",value:"Register"}}),n("transition",{attrs:{name:"fade-right"}},[t.errorMsg?n("section",{staticClass:"error-wrapper"},[n("span",{staticClass:"error-msg"},[t._v(t._s(t.errorMsg))])]):t._e()])],1),n("transition",{attrs:{name:"fade-right"}},[n("div",{staticClass:"logo-text-wrapper"},[n("img",{staticClass:"logo-text",attrs:{src:o("e882")}})])])],1)},_t=[],xt={name:"register",data:function(){return{email:"",password:"",errorMsg:!1}},methods:{register:function(){var t=this;u.a.auth().createUserWithEmailAndPassword(this.email,this.password).then((function(){t.$router.push("/")})).catch((function(e){t.errorMsg=e}))}}},Tt=xt,yt=(o("2369"),Object(p["a"])(Tt,bt,_t,!1,null,"025bb29a",null)),Et=yt.exports;n["a"].use(C["a"]);var Pt=[{path:"/Login",component:Ct,meta:{requiresGuest:!0}},{path:"/Register",component:Et,meta:{requiresGuest:!0}},{path:"/",component:rt,meta:{requiresAuth:!0}},{path:"/Info",component:mt,meta:{requiresAuth:!0}},{path:"*",redirect:"/Login",meta:{requiresGuest:!0}},{path:"*",redirect:"/",meta:{requiresAuth:!0}}],Ut=new C["a"]({mode:"history",routes:Pt});Ut.beforeEach((function(t,e,o){t.matched.some((function(t){return t.meta.requiresAuth}))?u.a.auth().currentUser?o():o({path:"/Login"}):t.matched.some((function(t){return t.meta.requiresGuest}))&&u.a.auth().currentUser?o({path:"/"}):o()}));var kt,Mt=Ut;n["a"].config.productionTip=!1,u.a.auth().onAuthStateChanged((function(){kt||(kt=new n["a"]({router:Mt,render:function(t){return t(w)}}).$mount("#app"))}))},"592a":function(t,e,o){"use strict";var n=o("e0ab"),s=o.n(n);s.a},"5eef":function(t,e,o){"use strict";var n=o("448b"),s=o.n(n);s.a},"85ec":function(t,e,o){},"8c00":function(t,e,o){},a37a:function(t,e,o){t.exports=o.p+"img/logo_icon.b9bf32d8.png"},ad86:function(t,e,o){},e0ab:function(t,e,o){},e882:function(t,e,o){t.exports=o.p+"img/logo_text.bdae07b4.png"},e8dd:function(t,e,o){},ec2d:function(t,e,o){"use strict";var n=o("39ce"),s=o.n(n);s.a},f918:function(t,e,o){"use strict";var n=o("e8dd"),s=o.n(n);s.a},f91c:function(t,e,o){"use strict";var n=o("8c00"),s=o.n(n);s.a},fc72:function(t,e,o){"use strict";var n=o("0635"),s=o.n(n);s.a}});
//# sourceMappingURL=app.076bc865.js.map