(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e){e.exports={data:[{name:"Item1",url:"/UserApp"},{name:"Item2",url:"/item2"},{name:"Item3",children:[{name:"Child31",url:"/child31"},{name:"Child32",url:"/child32"},{name:"Child33",url:"/child33"}]},{name:"Item4",children:[{name:"Child41",url:"/child41"},{name:"Child42",url:"/child42"},{name:"Child43",children:[{name:"Child431",url:"/child431"},{name:"Child432",url:"/child432,"},{name:"Child433",url:"/child433"}]}]},{name:"About",url:"/About"}]}},39:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},45:function(e,t,a){},56:function(e,t,a){e.exports=a(72)},61:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),o=a.n(l),c=(a(61),a(35)),i=a(20),u=a(14),m=a(22),s=a(21),d=a(23),h=(a(45),a(5)),p=a(108),E=a(42),g=a.n(E),b=a(109),f=a(113),w=a(112),v=a(105),k=a(106),y=a(107),C=a(52),O=a.n(C),j=a(53),M=a.n(j),D=a(110),N=a(19),S=a(36),A=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(s.a)(t).call(this,e))).toggleDrawer=function(e){return function(t){if(console.log("toggleDrawer 0"+e+t.type+t.key),t&&"keydown"===t.type&&("Tab"===t.key||"Shift"===t.key)||!a.state.SubMenuControl)return a.setState({SubMenuControl:!a.state.SubMenuControl}),void console.log("toggleDrawer 1");console.log("toggleDrawer 2"),console.log("toggleDrawer 3 "+a.state.MainMenu),a.setState({MainMenu:e,SubMenuControl:!a.state.SubMenuControl}),console.log("toggleDrawer 4 "+a.state.MainMenu)}},a.state={MainMenu:!1,MainMenuName:"menu_left",SubMenuControl:!0},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"handleClick",value:function(e){this.setState(function(t){return Object(c.a)({},e,!t[e])})}},{key:"handler",value:function(e){var t=this,a=this.props.classes,n=this.state;return e.map(function(e){return e.children?r.a.createElement("div",{key:e.name,onClick:t.toggleDrawer(!0),onKeyDown:t.toggleDrawer(!0)},r.a.createElement(f.a,{button:!0,onClick:function(){return t.handleClick(e.name)}},r.a.createElement(v.a,null,r.a.createElement(g.a,null)),r.a.createElement(w.a,{inset:!0,primary:e.name}),n[e.name]?r.a.createElement(O.a,null):r.a.createElement(M.a,null)),r.a.createElement(y.a,{in:n[e.name],timeout:"auto",unmountOnExit:!0},t.handler(e.children))):r.a.createElement("div",{key:e.name,onClick:t.toggleDrawer(!1),onKeyDown:t.toggleDrawer(!1)},r.a.createElement(f.a,{button:!0,key:e.name},r.a.createElement(N.Link,{to:e.url,className:a.links},r.a.createElement(v.a,null,r.a.createElement(g.a,null)),r.a.createElement(w.a,{inset:!0,primary:e.name}))),r.a.createElement(k.a,null))})}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.list},r.a.createElement(r.a.Fragment,{key:this.state.MainMenuName},r.a.createElement(p.a,{onClick:this.toggleDrawer(!0),color:"primary","aria-label":"Open Menu"},r.a.createElement(g.a,null)),r.a.createElement(D.a,{anchor:"left",open:this.state.MainMenu,onClose:this.toggleDrawer(!1),onOpen:this.toggleDrawer(!0),classes:{paper:e.list}},r.a.createElement("div",{role:"presentation"},r.a.createElement(b.a,null,r.a.createElement(f.a,{key:"menuHeading",divider:!0,disableGutters:!0},r.a.createElement(w.a,{className:e.menuHeader,inset:!0,primary:"Menu"})),this.handler(S.data))))))}}]),t}(n.Component),_=Object(h.a)({list:{width:250},fullList:{width:"auto"},links:{textDecoration:"none"},menuHeader:{paddingLeft:"30px"}})(A),x=a(39),I=a.n(x),L=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:I.a,className:"App-logo",alt:"logo"}),r.a.createElement("h1",{className:"App-title"},"P\xe1gina de Sobre")),r.a.createElement("p",{className:"App-intro"},"Exemplo de P\xe1gina Sobre :)"))}}]),t}(n.Component),P=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:I.a,className:"App-logo",alt:"logo"}),r.a.createElement("h1",{className:"App-title"},"P\xe1gina n\xe3o encontrada")),r.a.createElement("p",{className:"App-intro"},"P\xe1gina n\xe3o encontrada :( :/"))}}]),t}(n.Component),R=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"root_header",class:"flex-container-header"},r.a.createElement("div",Object(c.a)({id:"root_header_1"},"id","MenuApp"),r.a.createElement(_,null)),r.a.createElement("div",{id:"root_header_2"}),r.a.createElement("div",{id:"root_header_3"}),r.a.createElement("div",{id:"root_header_4"})),r.a.createElement("div",{className:"container"},r.a.createElement(N.Switch,null,r.a.createElement(N.Route,{path:"/",exact:!0,component:L}),r.a.createElement(N.Route,{path:"/about",component:L}),r.a.createElement(N.Route,{path:"*",component:P}),S.data.map(function(e){return"<! --"+e.name+"--\x3e "}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(N.BrowserRouter,null,r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading (Suspense component) ...")},r.a.createElement(R,null))),document.getElementById("root_main")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[56,1,2]]]);
//# sourceMappingURL=main.494eb743.chunk.js.map