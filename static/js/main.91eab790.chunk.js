(this.webpackJsonpkeepapp=this.webpackJsonpkeepapp||[]).push([[0],{75:function(e,t,n){},76:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(11),r=n.n(a),s=(n(75),n.p,n(76),n(119)),o=n(122),l=n(124),j=n(126),d=n(127),b=n(125),O=n(4),h=Object(s.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),x=function(){var e=h();return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:e.root,children:Object(O.jsx)(o.a,{position:"static",children:Object(O.jsxs)(l.a,{children:[Object(O.jsx)(b.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",children:Object(O.jsx)(b.a,{})}),Object(O.jsx)(j.a,{variant:"h6",className:e.title,children:"Google Keep"}),Object(O.jsx)(d.a,{color:"inherit",children:"Login"})]})})})})},m=n(13),u=n(19),p=n(45),f=n(16),g=n(128),v=n(130),N=n(129),F=n(132),S=n(57),w=n(56),y=n.n(w),k=n(131),C=Object(s.a)({root:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}}),B=function(e){var t=C();return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{id:e.index,className:"note-store",children:Object(O.jsxs)(g.a,{className:t.root,children:[Object(O.jsxs)(N.a,{style:{textAlign:"left"},children:[Object(O.jsxs)(j.a,{variant:"body2",component:"p",children:["Title : ",Object(O.jsx)("b",{children:e.title})]}),Object(O.jsxs)(j.a,{variant:"body2",component:"p",children:["Description : ",Object(O.jsxs)("span",{children:[Object(O.jsx)("b",{children:e.description})," "]})]})]}),Object(O.jsx)(v.a,{children:Object(O.jsx)(d.a,{onClick:e.deleteItem,children:Object(O.jsx)(k.a,{})})})]})},e.index)})},I=Object(s.a)({root:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}}),D=Object(s.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"53ch"}},addIcon:{"& > span":{margin:e.spacing(2)}}}})),T=function(){var e=Object(S.a)(),t=(e.register,e.handleSubmit,e.watch,e.formState.errors,I()),n=D(),i=Object(c.useState)({title:"",description:""}),a=Object(f.a)(i,2),r=a[0],s=a[1],o=Object(c.useState)([]),l=Object(f.a)(o,2),j=l[0],b=l[1],h=function(e){var t=e.target.name,n=e.target.value;s((function(e){return Object(p.a)(Object(p.a)({},e),{},Object(u.a)({},t,n))})),console.log("lastData",r)},x=function(){console.log("test")};return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"width-100",children:Object(O.jsx)("div",{className:"col-md-12 note-editor",children:Object(O.jsx)(g.a,{className:t.root,children:Object(O.jsx)(N.a,{children:Object(O.jsxs)("form",{className:n.root,onSubmit:function(e){e.preventDefault(),b((function(e){return[].concat(Object(m.a)(e),[r])})),s({title:"",description:""})},autoComplete:"off",children:[Object(O.jsx)(F.a,{id:"standard-obasic",onChange:h,value:r.title,label:"Title",name:"title"}),Object(O.jsx)(F.a,{onChange:h,id:"standard-textarea",label:"Description",placeholder:"Placeholder",name:"description",value:r.description,multiline:!0}),Object(O.jsx)(v.a,{children:Object(O.jsx)("div",{className:t.addIcon,children:Object(O.jsx)(d.a,{type:"submit",variant:"contained",color:"primary",children:Object(O.jsx)(y.a,{})})})})]})})})})}),Object(O.jsx)("div",{className:"width-100",children:j.map((function(e,t){return Object(O.jsx)(B,{id:t,title:e.title,description:e.description,"delete-Item":x},t)}))})]})})},G=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"footer",children:Object(O.jsx)("p",{children:"Footer"})})})},L=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(x,{}),Object(O.jsx)(T,{}),Object(O.jsx)(G,{})]})};var P=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(L,{})})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,134)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),a(e),r(e)}))};r.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(P,{})}),document.getElementById("root")),z()}},[[86,1,2]]]);
//# sourceMappingURL=main.91eab790.chunk.js.map