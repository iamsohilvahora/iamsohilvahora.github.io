webpackJsonp([1],{MtdD:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("7+uW"),n=a("kxiW"),s=a.n(n),o={name:"navbar",data:function(){return{isLoggedIn:!1,currentUser:!1}},created:function(){s.a.auth().currentUser&&(this.isLoggedIn=!0,this.currentUser=s.a.auth().currentUser.email)},methods:{logout:function(){var e=this;s.a.auth().signOut().then(function(){e.$router.go({path:e.$router.path})})}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("nav",{staticClass:"green"},[a("div",{staticClass:"nav-wrapper"},[a("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[e._v("Employee_Manager")]),e._v(" "),a("ul",{staticClass:"right"},[e.isLoggedIn?a("li",[a("span",{staticClass:"email black-text"},[e._v(e._s(e.currentUser))])]):e._e(),e._v(" "),e.isLoggedIn?a("li",[a("router-link",{attrs:{to:"/"}},[e._v("Dashboard")])],1):e._e(),e._v(" "),e.isLoggedIn?e._e():a("li",[a("router-link",{attrs:{to:"/login"}},[e._v("Login")])],1),e._v(" "),e.isLoggedIn?e._e():a("li",[a("router-link",{attrs:{to:"/register"}},[e._v("Register")])],1),e._v(" "),e.isLoggedIn?a("li",[a("button",{staticClass:"btn black",on:{click:e.logout}},[e._v("Logout")])]):e._e()])],1)])])},staticRenderFns:[]};var l={name:"App",components:{Navbar:a("VU/8")(o,r,!1,function(e){a("MtdD")},"data-v-367c5f73",null).exports}},d={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Navbar"),this._v(" "),t("div",{staticClass:"container"},[t("router-view")],1)],1)},staticRenderFns:[]};var p=a("VU/8")(l,d,!1,function(e){a("h5Vk")},null,null).exports,c=a("/ocq"),u={name:"login",data:function(){return{email:"",password:""}},methods:{login:function(e){var t=this;s.a.auth().signInWithEmailAndPassword(this.email,this.password).then(function(e){alert("You are logged in as "+e.email),t.$router.go({path:t.$router.path})},function(e){alert(e.message)}),e.preventDefault()}}},m={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m8 offset-m2"},[a("div",{staticClass:"login card-panel green white-text center"},[a("h3",[e._v("Login")]),e._v(" "),a("form",{attrs:{action:"index.html"}},[a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[e._v("email")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",id:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),a("label",{staticClass:"white-text",attrs:{for:"email"}},[e._v("Email Address")])]),e._v(" "),a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[e._v("lock")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",id:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),a("label",{staticClass:"white-text",attrs:{for:"password"}},[e._v("Password")])]),e._v(" "),a("button",{staticClass:"btn btn-large btn-extended grey lighten-4 black-text",on:{click:e.login}},[e._v("Login")])])])])])])])},staticRenderFns:[]},v=a("VU/8")(u,m,!1,null,null,null).exports,_={name:"register",data:function(){return{email:"",password:""}},methods:{register:function(e){var t=this;s.a.auth().createUserWithEmailAndPassword(this.email,this.password).then(function(e){alert("Account Created for "+e.email),t.$router.go({path:t.$router.path})},function(e){alert(e.message)}),e.preventDefault()}}},f={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m8 offset-m2"},[a("div",{staticClass:"login card-panel grey lighten-4 black-text center"},[a("h3",[e._v("Register")]),e._v(" "),a("form",{attrs:{action:"index.html"}},[a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[e._v("email")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",id:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),a("label",{attrs:{for:"email"}},[e._v("Email Address")])]),e._v(" "),a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[e._v("lock")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",id:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),a("label",{attrs:{for:"password"}},[e._v("Password")])]),e._v(" "),a("button",{staticClass:"btn btn-large btn-extended grey lighten-4 black-text",on:{click:e.register}},[e._v("Register")])])])])])])])},staticRenderFns:[]},h=a("VU/8")(_,f,!1,null,null,null).exports,g=(a("881v"),s.a.initializeApp({apiKey:"AIzaSyB0lFFxD3tLvQdhWaCG8sC_t6JELMZAiSM",authDomain:"employee-f229d.firebaseapp.com",databaseURL:"https://employee-f229d.firebaseio.com",projectId:"employee-f229d",storageBucket:"employee-f229d.appspot.com",messagingSenderId:"56683508186",appId:"1:56683508186:web:1d5f0f4afe7c0decb650e3",measurementId:"G-ZYVWL2N0H6"}).firestore()),y={name:"dashboard",data:function(){return{employees:[]}},created:function(){var e=this;g.collection("employees").orderBy("dept").get().then(function(t){t.forEach(function(t){var a={id:t.id,employee_id:t.data().employee_id,name:t.data().name,dept:t.data().dept,position:t.data().position};e.employees.push(a)})})}},w={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"dashboard"}},[a("ul",{staticClass:"collection with-header"},[e._m(0),e._v(" "),e._l(e.employees,function(t){return a("li",{key:t.id,staticClass:"collection-item"},[a("div",{staticClass:"chip"},[e._v(e._s(t.dept))]),e._v("\n      "+e._s(t.employee_id)+" : "+e._s(t.name)+"\n\n\n      "),a("router-link",{staticClass:"secondary-content",attrs:{to:{name:"view-employee",params:{employee_id:t.employee_id}}}},[a("i",{staticClass:"fa fa-eye"})])],1)})],2),e._v(" "),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large deep-orange",attrs:{to:"/new"}},[a("i",{staticClass:"fa fa-plus"})])],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("li",{staticClass:"collection-header"},[t("h4",[this._v("Dashboard")])])}]},C=a("VU/8")(y,w,!1,null,null,null).exports,b={name:"new-employee",data:function(){return{employee_id:null,name:null,dept:null,position:null}},methods:{saveEmployee:function(){var e=this;g.collection("employees").add({employee_id:this.employee_id,name:this.name,dept:this.dept,position:this.position}).then(function(t){console.log("Client added: ",t.id),e.$router.push("/")}).catch(function(e){console.error("Error adding employee: ",e)})}}},x={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"new-employee"}},[a("h3",[e._v("New Employee")]),e._v(" "),a("div",{staticClass:"row"},[a("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.saveEmployee(t)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.employee_id,expression:"employee_id"}],attrs:{type:"text",required:""},domProps:{value:e.employee_id},on:{input:function(t){t.target.composing||(e.employee_id=t.target.value)}}}),e._v(" "),a("label",[e._v("Employee ID#")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),a("label",[e._v("Name")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.dept,expression:"dept"}],attrs:{type:"text",required:""},domProps:{value:e.dept},on:{input:function(t){t.target.composing||(e.dept=t.target.value)}}}),e._v(" "),a("label",[e._v("Department")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],attrs:{type:"text",required:""},domProps:{value:e.position},on:{input:function(t){t.target.composing||(e.position=t.target.value)}}}),e._v(" "),a("label",[e._v("Position")])])]),e._v(" "),a("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Submit")]),e._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Cancel")])],1)])])},staticRenderFns:[]},E=a("VU/8")(b,x,!1,null,null,null).exports,k={name:"edit-employee",data:function(){return{employee_id:null,name:null,dept:null,position:null}},beforeRouteEnter:function(e,t,a){g.collection("employees").where("employee_id","==",e.params.employee_id).get().then(function(e){e.forEach(function(e){a(function(t){t.employee_id=e.data().employee_id,t.name=e.data().name,t.dept=e.data().dept,t.position=e.data().position})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;g.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){e.employee_id=t.data().employee_id,e.name=t.data().name,e.dept=t.data().dept,e.position=t.data().position})})},updateEmployee:function(){var e=this;g.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){t.ref.update({employee_id:e.employee_id,name:e.name,dept:e.dept,position:e.position}).then(function(){e.$router.push({name:"view-employee",params:{employee_id:e.employee_id}})})})})}}},$={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"new-employee"}},[a("h3",[e._v("Edit Employee")]),e._v(" "),a("div",{staticClass:"row"},[a("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.updateEmployee(t)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.employee_id,expression:"employee_id"}],attrs:{type:"text",required:""},domProps:{value:e.employee_id},on:{input:function(t){t.target.composing||(e.employee_id=t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.dept,expression:"dept"}],attrs:{type:"text",required:""},domProps:{value:e.dept},on:{input:function(t){t.target.composing||(e.dept=t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],attrs:{type:"text",required:""},domProps:{value:e.position},on:{input:function(t){t.target.composing||(e.position=t.target.value)}}})])]),e._v(" "),a("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Submit")]),e._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Cancel")])],1)])])},staticRenderFns:[]},P=a("VU/8")(k,$,!1,null,null,null).exports,D={name:"view-employee",data:function(){return{employee_id:null,name:null,dept:null,position:null}},beforeRouteEnter:function(e,t,a){g.collection("employees").where("employee_id","==",e.params.employee_id).get().then(function(e){e.forEach(function(e){a(function(t){t.employee_id=e.data().employee_id,t.name=e.data().name,t.dept=e.data().dept,t.position=e.data().position})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;g.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){e.employee_id=t.data().employee_id,e.name=t.data().name,e.dept=t.data().dept,e.position=t.data().position})})},deleteEmployee:function(){var e=this;confirm("Are you sure?")&&g.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){t.ref.delete(),e.$router.push("/")})})}}},q={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"view-employee"}},[a("ul",{staticClass:"collection with-header"},[a("li",{staticClass:"collection-header"},[a("h4",[e._v(e._s(e.name))])]),e._v(" "),a("li",{staticClass:"collection-item"},[e._v("Employee ID#: "+e._s(e.employee_id))]),e._v(" "),a("li",{staticClass:"collection-item"},[e._v("Department: "+e._s(e.dept))]),e._v(" "),a("li",{staticClass:"collection-item"},[e._v("Position: "+e._s(e.position))])]),e._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Back")]),e._v(" "),a("button",{staticClass:"btn red",on:{click:e.deleteEmployee}},[e._v("Delete")]),e._v(" "),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:{name:"edit-employee",params:{employee_id:e.employee_id}}}},[a("i",{staticClass:"fa fa-pencil"})])],1)],1)},staticRenderFns:[]},N=a("VU/8")(D,q,!1,null,null,null).exports;i.a.use(c.a);var A=new c.a({routes:[{path:"/",name:"Dashboard",component:C,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:v,meta:{requiresGuest:!0}},{path:"/register",name:"register",component:h,meta:{requiresGuest:!0}},{path:"/new",name:"new-employee",component:E,meta:{requiresAuth:!0}},{path:"/:employee_id",name:"view-employee",component:N,meta:{requiresAuth:!0}},{path:"/edit/:employee_id",name:"edit-employee",component:P,meta:{requiresAuth:!0}}]});A.beforeEach(function(e,t,a){e.matched.some(function(e){return e.meta.requiresAuth})?s.a.auth().currentUser?a():a({path:"/login",query:{redirect:e.fullPath}}):e.matched.some(function(e){return e.meta.requiresGuest})&&s.a.auth().currentUser?a({path:"/",query:{redirect:e.fullPath}}):a()});var U=A;i.a.config.productionTip=!1;s.a.auth().onAuthStateChanged(function(e){new i.a({el:"#app",router:U,components:{App:p},template:"<App/>"})})},h5Vk:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.22ad1c46f44e69c89e9e.js.map