(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{32:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(18),s=n.n(i),o=(n(31),n(32),n(12)),c=n.n(o),l=n(17),u=n(7),h=n(8),d=n(4),p=n(10),b=n(9),j=n(11),f=n.n(j),m=n(13),O=n(1),v=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={username:"",email:"",password1:"",password2:""},a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a.handleInput=a.handleInput.bind(Object(d.a)(a)),a}return Object(h.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(m.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.handleRegistration(this.state)}},{key:"render",value:function(){var e=this;return Object(O.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(O.jsxs)("div",{class:"form-group",children:[Object(O.jsx)("label",{for:"formGroupExampleInput2",children:"User Name"}),Object(O.jsx)("input",{type:"text",class:"form-control",name:"username",autoComplete:"off",required:!0,onChange:this.handleInput,value:this.state.username,id:"formGroupExampleInput2",placeholder:"User Name"})]}),Object(O.jsxs)("div",{class:"form-group",children:[Object(O.jsx)("label",{for:"exampleInputEmail1",children:"Email address"}),Object(O.jsx)("input",{type:"email",class:"form-control",name:"email",autoComplete:"off",required:!0,onChange:this.handleInput,value:this.state.email,id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"})]}),Object(O.jsxs)("div",{class:"form-group",children:[Object(O.jsx)("label",{for:"exampleInputPassword1",children:"Password"}),Object(O.jsx)("input",{type:"password",class:"form-control",name:"password1",autoComplete:"off",required:!0,onChange:this.handleInput,value:this.state.password1,id:"exampleInputPassword1",placeholder:"Password"})]}),Object(O.jsxs)("div",{class:"form-group",children:[Object(O.jsx)("label",{for:"exampleInputPassword1",children:"Confirm Password"}),Object(O.jsx)("input",{type:"password",class:"form-control",name:"password2",autoComplete:"off",required:!0,onChange:this.handleInput,value:this.state.password2,id:"exampleInputPassword1",placeholder:"Password"})]}),Object(O.jsx)("button",{type:"submit",class:"btn btn-secondary offset",onClick:function(){return e.props.handleSelection("registration")},children:"Register"})]})}}]),n}(a.Component),x=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={username:"",email:"",password:""},a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a.handleInput=a.handleInput.bind(Object(d.a)(a)),a}return Object(h.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(m.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.handleLogin(this.state)}},{key:"render",value:function(){var e=this;return Object(O.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(O.jsxs)("div",{class:"form-group",children:[Object(O.jsx)("label",{for:"formGroupExampleInput2",children:"User Name"}),Object(O.jsx)("input",{type:"text",class:"form-control",name:"username",autoComplete:"off",required:!0,onChange:this.handleInput,value:this.state.username,id:"formGroupExampleInput2",placeholder:"User Name"})]}),Object(O.jsxs)("div",{class:"form-group",children:[Object(O.jsx)("label",{for:"exampleInputEmail1",children:"Email address"}),Object(O.jsx)("input",{type:"email",class:"form-control",name:"email",autoComplete:"off",required:!0,onChange:this.handleInput,value:this.state.email,id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"})]}),Object(O.jsxs)("div",{class:"form-group",children:[Object(O.jsx)("label",{for:"exampleInputPassword1",children:"Password"}),Object(O.jsx)("input",{type:"password",class:"form-control",name:"password",autoComplete:"off",required:!0,onChange:this.handleInput,value:this.state.password1,id:"exampleInputPassword1",placeholder:"Password"})]}),Object(O.jsx)("button",{type:"submit",class:"btn btn-secondary offset",onClick:function(){return e.props.handleSelection("login")},children:"Login"}),Object(O.jsx)("button",{type:"submit",class:"btn btn-secondary offset",onClick:function(){return e.props.handleSelection("registration")},children:"Register"})]})}}]),n}(a.Component),g=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={display_name:"",avatar:null,preview:""},a.handleInput=a.handleInput.bind(Object(d.a)(a)),a.handleImage=a.handleImage.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/v1/users/profiles/user/").then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(t){return e.setState({data:t})})).catch((function(e){console.error("There has been a problem with youor fetch operation:",e)}))}},{key:"handleInput",value:function(e){this.setState(Object(m.a)({},e.target.name,e.target.value))}},{key:"handleImage",value:function(e){var t=this,n=e.target.files[0];this.setState(Object(m.a)({},e.target.name,n));var a=new FileReader;a.onloadend=function(){t.setState({preview:a.result})},a.readAsDataURL(n)}},{key:"handleSubmit",value:function(){var e=Object(l.a)(c.a.mark((function e(t){var n,a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(n=new FormData).append("avatar",this.state.avatar),n.append("display_name",this.state.display_name),a={method:"POST",headers:{"X-CSRFToken":f.a.get("csrftoken")},body:n},e.next=7,fetch("/api/v1/users/profiles/",a);case 7:r=e.sent,console.log(r);case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("form",{children:[Object(O.jsx)("button",{type:"submit",class:"btn btn-primary offset",onClick:function(){return e.props.handleLogout()},children:"Logout"}),Object(O.jsx)("input",{type:"text",name:"display_name",value:this.state.display_name,onChange:this.handleInput}),Object(O.jsx)("input",{type:"file",name:"avatar",onChange:this.handleImage}),this.state.avatar?Object(O.jsx)("img",{src:this.state.preview,alt:""}):null,Object(O.jsx)("button",{type:"submit",children:"Save Profile!"})]}),this.state.data?Object(O.jsxs)("div",{children:[Object(O.jsxs)("p",{children:[" ",this.state.data.display_name," "]}),Object(O.jsx)("img",{src:this.state.data.avatar,alt:""})]}):null]})}}]),n}(a.Component),y=n(23),k=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={isEditing:!1,text:a.props.article.text},a.handleInput=a.handleInput.bind(Object(d.a)(a)),a.saveArticle=a.saveArticle.bind(Object(d.a)(a)),a}return Object(h.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(m.a)({},e.target.name,e.target.value))}},{key:"saveArticle",value:function(){this.props.editArticle(this.props.article.id,this.state.text),this.setState({isEditing:!1})}},{key:"render",value:function(){var e=this,t=this.props.article;return Object(O.jsxs)("li",{children:[Object(O.jsx)("h2",{children:t.title}),Object(O.jsx)("p",{children:t.author}),Object(O.jsxs)("div",{children:[this.state.isEditing?Object(O.jsx)("input",{type:"text",value:this.state.text,onChange:this.handleInput,name:"text"}):Object(O.jsx)("p",{children:t.body}),t.is_owner&&Object(O.jsx)("button",{onClick:function(){return e.props.deleteArticle(t.id)},children:"delete"}),this.state.isEditing?Object(O.jsx)("button",{type:"button",onClick:this.saveArticle,children:"Save"}):t.is_owner&&Object(O.jsx)("button",{onClick:function(){return e.setState({isEditing:!0})},children:"Edit"})]})]})}}]),n}(a.Component),S=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={articles:[]},a.addArticle=a.addArticle.bind(Object(d.a)(a)),a.editArticle=a.editArticle.bind(Object(d.a)(a)),a.deleteArticle=a.deleteArticle.bind(Object(d.a)(a)),a.handleInput=a.handleInput.bind(Object(d.a)(a)),a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/v1/articles/").then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(t){return e.setState({articles:t})})).catch((function(e){console.error("There has been a problem with youor fetch operation:",e)}))}},{key:"handleInput",value:function(e){this.setState(Object(m.a)({},e.target.name,e.target.value))}},{key:"addArticle",value:function(e){var t=this;e.preventDefault();var n={text:this.state.text},a={method:"POST",headers:{"Contnet-Type":"application/json","X-CSRFToken":f.a.get("csrftoken")},body:JSON.stringify(n)};fetch("/api/v1/articles/",a).then((function(e){return e.json()})).then((function(e){var n=Object(y.a)(t.state.articles);n.push(e),t.setState({articles:n}),t.setState({text:""})}))}},{key:"editArticle",value:function(e,t){var n=this,a={text:t},r={method:"PUT",headers:{"Content-Type":"applications/json","X-CSRFToken":f.a.get("csrftoken")},body:JSON.stringify(a)};fetch("/api/v1/articles/".concat(e,"/"),r).then((function(a){if(!a.ok)throw new Error("Network response was not ok");var r=Object(y.a)(n.state.articles),i=r.findIndex((function(t){return t.id===e}));r[i].text=t,n.setState({articles:r})}))}},{key:"deleteArticle",value:function(e){var t=this,n={method:"DELETE",headers:{"Content-Type":"application/json","X-CSRFToken":f.a.get("csrftoken")}};fetch("/api/v1/articles/".concat(e,"/"),n).then((function(n){if(!n.ok)throw new Error("Network response was not ok");var a=Object(y.a)(t.state.articles),r=a.findIndex((function(t){return t.id===e}));a.splice(r,1),t.setState({articles:a})})).catch((function(e){console.err("Error:",e)}))}},{key:"render",value:function(){var e=this,t=this.state.articles.map((function(t){return Object(O.jsx)(k,{article:t,deleteArticle:e.deleteArticle,editArticle:e.editArticle},t.id)}));return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("ul",{children:t}),Object(O.jsx)("section",{className:"submit",children:Object(O.jsxs)("form",{onSubmit:this.addArticle,children:[Object(O.jsx)("input",{className:"text",type:"text",name:"text",value:this.state.text,onChange:this.handleInput}),Object(O.jsx)("button",{type:"submit",class:"btn btn-primary offset",children:"Submit"})]})})]})}}]),n}(a.Component),w=n(22),C=n(26),I=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(O.jsxs)(w.a,{bg:"light",expand:"lg",children:[Object(O.jsx)(w.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(O.jsx)(w.a.Collapse,{id:"basic-navbar-nav",children:Object(O.jsxs)(C.a,{className:"mr-auto",children:[Object(O.jsx)("button",{className:"btn",onClick:function(){return e.props.handleLogout()},children:"Logout"}),Object(O.jsx)("button",{className:"btn",onClick:function(){return e.props.handleSelection("login")},children:"Login"}),Object(O.jsx)("button",{className:"btn",onClick:function(){return e.props.handleSelection("registration")},children:"Register"}),Object(O.jsx)("button",{className:"btn",onClick:function(){return e.props.handleSelection("profile")},children:"Profile"})]})})]})}}]),n}(a.Component),E=(n(41),function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={selection:f.a.get("Authorization")?"profile":"articles"},a.handleLogin=a.handleLogin.bind(Object(d.a)(a)),a.handleLogout=a.handleLogout.bind(Object(d.a)(a)),a.handleRegistration=a.handleRegistration.bind(Object(d.a)(a)),a.handleSelection=a.handleSelection.bind(Object(d.a)(a)),a}return Object(h.a)(n,[{key:"handleLogin",value:function(){var e=Object(l.a)(c.a.mark((function e(t){var n,a,r,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":f.a.get("csrftoken")},body:JSON.stringify(t)},a=function(e){return console.warn(e)},e.next=4,fetch("/rest-auth/login/",n).catch(a);case 4:if(!(r=e.sent).ok){e.next=11;break}return e.next=8,r.json().catch(a);case 8:i=e.sent,f.a.set("Authorization","Token ".concat(i.key)),this.setState({selection:"profile"});case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleRegistration",value:function(){var e=Object(l.a)(c.a.mark((function e(t){var n,a,r,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":f.a.get("csrftoken")},body:JSON.stringify(t)},a=function(e){return console.warn(e)},e.next=4,fetch("/rest-auth/registration/",n).catch(a);case 4:if(!(r=e.sent).ok){e.next=11;break}return e.next=8,r.json().catch(a);case 8:i=e.sent,f.a.set("Authorization","Token ".concat(i.key)),this.setState({selection:"profile"});case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleLogout",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":f.a.get("csrftoken")}},n=function(e){return console.warn(e)},e.next=4,fetch("/rest-auth/logout/",t).catch(n);case 4:e.sent.ok&&(f.a.remove("Authorization"),this.setState({selection:"login"}));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleSelection",value:function(){var e=Object(l.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({selection:t});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(I,{handleSelection:this.handleSelection,handleLogout:this.handleLogout}),Object(O.jsxs)("main",{children:["articles"===this.state.selection&&Object(O.jsx)(S,{}),"profile"===this.state.selection&&Object(O.jsx)(g,{}),"registration"===this.state.selection&&Object(O.jsx)(v,{handleRegistration:this.handleRegistration,handleSelection:this.handleSelection}),"login"===this.state.selection&&Object(O.jsx)(x,{handleLogin:this.handleLogin,handleSelection:this.handleSelection})]})]})}}]),n}(a.Component)),T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),i(e),s(e)}))};s.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(E,{})}),document.getElementById("root")),T()}},[[42,1,2]]]);
//# sourceMappingURL=main.1f57b5b9.chunk.js.map