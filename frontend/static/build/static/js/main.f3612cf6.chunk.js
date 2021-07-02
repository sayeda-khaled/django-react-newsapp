(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{32:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(18),s=n.n(i),c=(n(31),n(32),n(12)),o=n.n(c),l=n(17),u=n(6),h=n(7),d=n(4),b=n(10),p=n(9),j=n(11),f=n.n(j),m=n(13),O=n(1),v=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={username:"",email:"",password1:"",password2:""},a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a.handleInput=a.handleInput.bind(Object(d.a)(a)),a}return Object(h.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(m.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.handleRegistration(this.state)}},{key:"render",value:function(){var e=this;return Object(O.jsx)("div",{class:"main",children:Object(O.jsxs)("form",{class:"form1",onSubmit:this.handleSubmit,children:[Object(O.jsx)("input",{class:"un ",type:"text",name:"username",autoComplete:"off",required:!0,onChange:this.handleInput,value:this.state.username,align:"center",placeholder:"Username"}),Object(O.jsx)("input",{class:"un ",type:"email",name:"email",align:"center",placeholder:"e-mail",onChange:this.handleInput,value:this.state.email}),Object(O.jsx)("input",{class:"pass",type:"password",name:"password1",align:"center",autoComplete:"off",required:!0,onChange:this.handleInput,value:this.state.password1,placeholder:"Password"}),Object(O.jsx)("input",{class:"pass",type:"password",name:"password2",align:"center",autoComplete:"off",required:!0,onChange:this.handleInput,value:this.state.password2,placeholder:"Confirm Password"}),Object(O.jsx)("button",{class:"submit",align:"center",onClick:function(){return e.props.handleSelection("registration")},children:"Register"})]})})}}]),n}(a.Component),g=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={username:"",email:"",password:""},a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a.handleInput=a.handleInput.bind(Object(d.a)(a)),a}return Object(h.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(m.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.handleLogin(this.state)}},{key:"render",value:function(){var e=this;return Object(O.jsx)("div",{class:"main",children:Object(O.jsxs)("form",{class:"form1",onSubmit:this.handleSubmit,children:[Object(O.jsx)("input",{class:"un ",type:"text",name:"username",autoComplete:"off",required:!0,onChange:this.handleInput,value:this.state.username,align:"center",placeholder:"Username"}),Object(O.jsx)("input",{class:"un ",type:"email",name:"email",align:"center",placeholder:"e-mail",onChange:this.handleInput,value:this.state.email}),Object(O.jsx)("input",{class:"pass",type:"password",name:"password",align:"center",autoComplete:"off",required:!0,onChange:this.handleInput,value:this.state.password1,placeholder:"Password"}),Object(O.jsx)("button",{class:"submit",align:"center",onClick:function(){return e.props.handleSelection("login")},children:"Sign in"})]})})}}]),n}(a.Component),x=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={display_name:"",avatar:null,preview:""},a.handleInput=a.handleInput.bind(Object(d.a)(a)),a.handleImage=a.handleImage.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a.editProfile=a.editProfile.bind(Object(d.a)(a)),a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/v1/users/profiles/user/").then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(t){return e.setState({data:t})})).catch((function(e){console.error("There has been a problem with youor fetch operation:",e)}))}},{key:"handleInput",value:function(e){this.setState(Object(m.a)({},e.target.name,e.target.value))}},{key:"handleImage",value:function(e){var t=this,n=e.target.files[0];this.setState(Object(m.a)({},e.target.name,n));var a=new FileReader;a.onloadend=function(){t.setState({preview:a.result})},a.readAsDataURL(n)}},{key:"handleSubmit",value:function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(n=new FormData).append("avatar",this.state.avatar),n.append("display_name",this.state.display_name),a={method:"POST",headers:{"X-CSRFToken":f.a.get("csrftoken")},body:n},e.next=7,fetch("/api/v1/users/profiles/user/",a);case 7:r=e.sent,console.log(r);case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"editProfile",value:function(e){var t={method:"PUT",headers:{"Content-Type":"application/json","X-CSRFToken":f.a.get("csrftoken")},body:JSON.stringify(e)};fetch("/api/v1/users/profile/user",t).then((function(e){if(!e.ok)throw new Error("Error");return e.json()}))}},{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("form",{onChange:this.handleSubmit,children:[Object(O.jsx)("input",{type:"text",name:"display_name",value:this.state.display_name,onChange:this.handleInput}),Object(O.jsx)("input",{type:"file",name:"avatar",onChange:this.handleImage}),this.state.avatar?Object(O.jsx)("img",{src:this.state.preview,alt:""}):null,Object(O.jsx)("button",{type:"submit",children:"Save Profile!"})]}),this.state.data?Object(O.jsx)("section",{className:"profile",children:Object(O.jsxs)("header",{class:"profile-card",children:[Object(O.jsx)("h2",{children:this.state.data.display_name}),Object(O.jsx)("img",{src:this.state.data.avatar,class:"hoverZoomLink",alt:""})]})}):null]})}}]),n}(a.Component),y=n(23),k=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={isEditing:!1,title:a.props.userArticle.title,body:a.props.userArticle.body},a.handleInput=a.handleInput.bind(Object(d.a)(a)),a.saveArticle=a.saveArticle.bind(Object(d.a)(a)),a}return Object(h.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(m.a)({},e.target.name,e.target.value))}},{key:"saveArticle",value:function(){var e=this.props.userArticle;e.title=this.state.title,e.body=this.state.body,this.props.editArticle(e),this.setState({isEditing:!1})}},{key:"render",value:function(){var e=this,t=this.props.userArticle;return Object(O.jsx)("li",{children:Object(O.jsxs)("div",{children:[this.state.isEditing?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("input",{type:"text",value:this.state.title,onChange:this.handleInput,name:"text"}),Object(O.jsx)("textarea",{value:this.state.body,onChange:this.handleInput,name:"body"})]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h2",{children:t.title}),Object(O.jsx)("p",{children:t.body})]}),Object(O.jsx)("button",{onClick:function(){return e.props.deleteArticle(t.id)},children:"delete"}),this.state.isEditing?Object(O.jsx)("button",{type:"button",onClick:this.saveArticle,children:"Save"}):Object(O.jsx)("button",{onClick:function(){return e.setState({isEditing:!0})},children:"Edit"})]})})}}]),n}(a.Component),S=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={userArticles:[],title:"",body:""},a.addArticle=a.addArticle.bind(Object(d.a)(a)),a.editArticle=a.editArticle.bind(Object(d.a)(a)),a.deleteArticle=a.deleteArticle.bind(Object(d.a)(a)),a.handleInput=a.handleInput.bind(Object(d.a)(a)),a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/v1/articles/user/").then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(t){return e.setState({userArticles:t})})).catch((function(e){console.error("There has been a problem with youor fetch operation:",e)}))}},{key:"handleInput",value:function(e){this.setState(Object(m.a)({},e.target.name,e.target.value))}},{key:"addArticle",value:function(e){var t=this;e.preventDefault();var n={title:this.state.title,body:this.state.body},a={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":f.a.get("csrftoken")},body:JSON.stringify(n)};fetch("/api/v1/articles/user/",a).then((function(e){return e.json()})).then((function(e){var n=[].concat(Object(y.a)(t.state.userArticles),[e]);t.setState({userArticles:n,title:"",body:""})}))}},{key:"editArticle",value:function(e){var t=this,n={method:"PUT",headers:{"Content-Type":"application/json","X-CSRFToken":f.a.get("csrftoken")},body:JSON.stringify(e)};fetch("/api/v1/articles/user/".concat(e.id,"/"),n).then((function(n){if(!n.ok)throw new Error("Network response was not ok");var a=Object(y.a)(t.state.userArticles),r=a.findIndex((function(t){return t.id===e.id}));a[r].title=e.title,a[r].body=e.body,t.setState({userArticles:a})}))}},{key:"deleteArticle",value:function(e){var t=this,n={method:"DELETE",headers:{"Content-Type":"application/json","X-CSRFToken":f.a.get("csrftoken")}};fetch("/api/v1/articles/user/".concat(e,"/"),n).then((function(n){if(!n.ok)throw new Error("Network response was not ok");var a=Object(y.a)(t.state.userArticles),r=a.findIndex((function(t){return a.id===e}));a.splice(r,1),t.setState({userArticles:a})})).catch((function(e){console.error("Error:",e)}))}},{key:"render",value:function(){var e=this,t=this.state.userArticles.map((function(t){return Object(O.jsx)(k,{userArticle:t,deleteArticle:e.deleteArticle,editArticle:e.editArticle},t.id)}));return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("ul",{children:t}),Object(O.jsx)("section",{className:"submit",children:Object(O.jsxs)("form",{onSubmit:this.addArticle,children:[Object(O.jsxs)("div",{class:"mb-3",children:[Object(O.jsx)("label",{for:"exampleFormControlInput1",class:"form-label",children:"Title"}),Object(O.jsx)("input",{type:"text",class:"form-control",id:"exampleFormControlInput1",autoComplete:"off",name:"title",value:this.state.title,onChange:this.handleInput,placeholder:"Insert Your Title"})]}),Object(O.jsxs)("div",{class:"mb-3",children:[Object(O.jsx)("label",{for:"exampleFormControlTextarea1",class:"form-label",children:"Insert Your Article"}),Object(O.jsx)("textarea",{class:"form-control",autoComplete:"off",id:"exampleFormControlTextarea1",name:"body",value:this.state.body,onChange:this.handleInput,rows:"3"})]}),Object(O.jsx)("button",{type:"submit",onClick:this.addArticle,class:"btn btn-primary offset",children:"Submit"})]})})]})}}]),n}(a.Component),C=n(22),w=n(26),A=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(O.jsxs)(C.a,{bg:"light",expand:"lg",className:"navbar",children:[Object(O.jsx)(C.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(O.jsx)(C.a.Collapse,{id:"basic-navbar-nav",children:Object(O.jsxs)(w.a,{className:"mr-auto",children:[Object(O.jsx)("button",{className:"btn",onClick:function(){return e.props.handleSelection("articles")},children:"Main"}),Object(O.jsx)("button",{className:"btn",onClick:function(){return e.props.handleSelection("login")},children:"Login"}),Object(O.jsx)("button",{className:"btn",onClick:function(){return e.props.handleSelection("registration")},children:"Register"}),Object(O.jsx)("button",{className:"btn",onClick:function(){return e.props.handleSelection("profile")},children:"Profile"}),Object(O.jsx)("button",{className:"btn",onClick:function(){return e.props.handleLogout()},children:"Logout"})]})})]})}}]),n}(a.Component),I=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={articles:[]},a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/v1/articles/").then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(t){return e.setState({articles:t})})).catch((function(e){console.error("There has been a problem with youor fetch operation:",e)}))}},{key:"render",value:function(){var e=this.state.articles.map((function(e,t){return Object(O.jsxs)("div",{className:"articles",children:[Object(O.jsx)("h2",{children:e.title}),Object(O.jsx)("p",{children:e.author}),Object(O.jsx)("p",{children:e.body})]},t)}));return Object(O.jsx)("ul",{children:e})}}]),n}(a.Component),T=(n(41),function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={selection:f.a.get("Authorization")?"userArticles":"articles"},a.handleLogin=a.handleLogin.bind(Object(d.a)(a)),a.handleLogout=a.handleLogout.bind(Object(d.a)(a)),a.handleRegistration=a.handleRegistration.bind(Object(d.a)(a)),a.handleSelection=a.handleSelection.bind(Object(d.a)(a)),a}return Object(h.a)(n,[{key:"handleLogin",value:function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a,r,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":f.a.get("csrftoken")},body:JSON.stringify(t)},a=function(e){return console.warn(e)},e.next=4,fetch("/rest-auth/login/",n).catch(a);case 4:if(!(r=e.sent).ok){e.next=11;break}return e.next=8,r.json().catch(a);case 8:i=e.sent,f.a.set("Authorization","Token ".concat(i.key)),this.setState({selection:"profile"});case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleRegistration",value:function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a,r,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":f.a.get("csrftoken")},body:JSON.stringify(t)},a=function(e){return console.warn(e)},e.next=4,fetch("/rest-auth/registration/",n).catch(a);case 4:if(!(r=e.sent).ok){e.next=11;break}return e.next=8,r.json().catch(a);case 8:i=e.sent,f.a.set("Authorization","Token ".concat(i.key)),this.setState({selection:"profile"});case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleLogout",value:function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":f.a.get("csrftoken")}},a=function(e){return console.warn(e)},e.next=4,fetch("/rest-auth/logout/",n).catch(a);case 4:e.sent.ok&&(f.a.remove("Authorization"),this.setState({selection:"articles"}));case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleSelection",value:function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({selection:t});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(A,{handleSelection:this.handleSelection,handleLogout:this.handleLogout}),Object(O.jsxs)("main",{children:["articles"===this.state.selection&&Object(O.jsx)(I,{}),"profile"===this.state.selection&&Object(O.jsx)(x,{}),"profile"===this.state.selection&&Object(O.jsx)(S,{}),"registration"===this.state.selection&&Object(O.jsx)(v,{handleRegistration:this.handleRegistration,handleSelection:this.handleSelection}),"login"===this.state.selection&&Object(O.jsx)(g,{handleLogin:this.handleLogin,handleSelection:this.handleSelection})]})]})}}]),n}(a.Component)),F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),i(e),s(e)}))};s.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(T,{})}),document.getElementById("root")),F()}},[[42,1,2]]]);
//# sourceMappingURL=main.f3612cf6.chunk.js.map