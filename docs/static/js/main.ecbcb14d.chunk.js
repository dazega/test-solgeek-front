(this["webpackJsonptest-solgeek-front"]=this["webpackJsonptest-solgeek-front"]||[]).push([[0],{65:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),s=c(33),o=c.n(s),a=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,66)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,s=t.getLCP,o=t.getTTFB;c(e),r(e),n(e),s(e),o(e)}))},i=(c(39),c(18)),l=c(19),j=c(8),d=c(2),b=c(11),u=c.n(b),h=c(16),m=c(14),O=c.n(m),x=Object(r.createContext)(null),p=c(0),f=function(e){var t=e._id,c=e.Nombre,n=e.Apellido,s=e.Correo,o=e.Status,a=Object(r.useContext)(x),i=a.users,l=a.setUsers,d=function(){var e=Object(h.a)(u.a.mark((function e(t){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.delete("".concat("https://test-solgeek.herokuapp.com","/eliminar/").concat(t));case 2:c=e.sent,200===c.status&&l(i.filter((function(e){return e._id!==t})));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:c}),Object(p.jsx)("td",{children:n}),Object(p.jsx)("td",{children:s}),Object(p.jsx)("td",{children:o?"Activo":"Inactivo"}),Object(p.jsx)("td",{children:Object(p.jsx)(j.b,{className:"text-primary",to:"/editar/".concat(t),style:{textDecoration:"none"},children:"Editar"})}),Object(p.jsx)("td",{children:Object(p.jsx)("p",{className:"text-danger",onClick:function(){d(t)},children:"Eliminar"})})]})},v=function(){var e=Object(r.useContext)(x).users;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"row justify-content-center",children:[Object(p.jsxs)("div",{className:"col-md-6 col-sm-12",children:[Object(p.jsx)("h3",{children:"Usuarios"}),Object(p.jsxs)("p",{children:[e.length," usuarios registrados"]})]}),Object(p.jsx)("div",{className:"col-md-2 col-sm-12 align-self-center",children:Object(p.jsx)(j.b,{to:"crear",className:"btn btn-primary btn-sm ",children:"Nuevo Usuario"})})]}),Object(p.jsx)("div",{className:"row justify-content-center",children:Object(p.jsx)("div",{className:"col-8",children:Object(p.jsxs)("table",{className:"table table-striped",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"Nombre"}),Object(p.jsx)("th",{children:"Apellido"}),Object(p.jsx)("th",{children:"Correo"}),Object(p.jsx)("th",{children:"Status"}),Object(p.jsx)("th",{}),Object(p.jsx)("th",{})]})}),Object(p.jsx)("tbody",{children:e.map((function(e){return Object(p.jsx)(f,{_id:e._id,Nombre:e.Nombre,Apellido:e.Apellido,Correo:e.Correo,Status:!0},e._id)}))})]})})})]})},N=c(17),C=c(10),g=function(){var e="https://test-solgeek.herokuapp.com",t=Object(d.g)(),c=Object(r.useContext)(x),n=c.users,s=c.setUsers,o={nombre:"",apellido:"",correo:""},a=Object(r.useState)(o),j=Object(i.a)(a,2),b=j[0],m=j[1],f=Object(d.h)().id,v=void 0===f?"":f;Object(r.useEffect)((function(){if(""!==v){var e=n.find((function(e){return e._id===v}));e&&m({nombre:null===e||void 0===e?void 0:e.Nombre,apellido:null===e||void 0===e?void 0:e.Apellido,correo:null===e||void 0===e?void 0:e.Correo})}}),[n]);var g=b.apellido,y=b.correo,k=b.nombre,w=function(e){var t=e.target;m(Object(C.a)(Object(C.a)({},b),{},Object(N.a)({},t.name,t.value)))},A=function(){var c=Object(h.a)(u.a.mark((function c(r){var a,i,j;return u.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(r.preventDefault(),""===g||""===y||""===k){c.next=15;break}if(""!==v){c.next=8;break}return c.next=5,O.a.post("".concat(e,"/crear"),Object(C.a)(Object(C.a)({},b),{},{status:!0}));case 5:c.t0=c.sent,c.next=11;break;case 8:return c.next=10,O.a.put("".concat(e,"/editar/").concat(v),Object(C.a)(Object(C.a)({},b),{},{status:!0}));case 10:c.t0=c.sent;case 11:a=c.t0,i=a.data,200===a.status&&(""===i?(s([].concat(Object(l.a)(n),[{Apellido:i.Apellido,Correo:i.Correo,Nombre:i.Nombre,Status:i.Status,_id:i._id}])),m(o)):(j={Apellido:b.apellido,Correo:b.correo,Nombre:b.nombre,Status:!0,_id:v},s(n.map((function(e){return e._id===v?j:e})))),m(o),t.push("/"));case 15:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"row justify-content-center",children:Object(p.jsx)("h2",{className:"col-md-8",children:""===v?"Crear":"Editar"})}),Object(p.jsxs)("form",{onSubmit:A,children:[Object(p.jsxs)("div",{className:"row justify-content-center",children:[Object(p.jsxs)("div",{className:"col-md-4 col-sm-12",children:[Object(p.jsx)("label",{children:"Nombre"}),Object(p.jsx)("input",{className:"form-control",name:"nombre",placeholder:"Nombre",type:"text",value:k,onChange:w,autoComplete:"off"})]}),Object(p.jsxs)("div",{className:"col-md-4 col-sm-12",children:[Object(p.jsx)("label",{children:"Apellido"}),Object(p.jsx)("input",{className:"form-control",name:"apellido",placeholder:"Apellido",type:"text",value:g,onChange:w,autoComplete:"off"})]})]}),Object(p.jsx)("div",{className:"row justify-content-center",children:Object(p.jsxs)("div",{className:"col-md-8 col-sm-12",children:[Object(p.jsx)("label",{children:"Correo"}),Object(p.jsx)("input",{className:"form-control",name:"correo",placeholder:"Correo",type:"email",value:y,onChange:w,autoComplete:"off"})]})}),Object(p.jsx)("div",{className:"row justify-content-end mt-3",children:Object(p.jsx)("div",{className:"col-3",children:Object(p.jsx)("button",{className:"btn btn-primary btn-sm",children:""===v?"Crear":"Editar"})})})]})]})},y=function(){var e=Object(r.useContext)(x),t=(e.users,e.setUsers);return Object(r.useEffect)((function(){fetch("".concat("https://test-solgeek.herokuapp.com","/usuarios")).then((function(e){return e.json()})).then((function(e){t(Object(l.a)(e.usuarios))})).catch((function(e){console.log(e)}))}),[]),Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(j.a,{children:Object(p.jsxs)(d.d,{children:[Object(p.jsx)(d.b,{path:"/",exact:!0,component:v}),Object(p.jsx)(d.b,{path:"/crear",exact:!0,component:g}),Object(p.jsx)(d.b,{path:"/editar/:id",exact:!0,component:g}),Object(p.jsx)(d.a,{to:"/"})]})})})},k=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(p.jsx)(x.Provider,{value:{users:c,setUsers:n},children:Object(p.jsx)(y,{})})};o.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(k,{})}),document.getElementById("root")),a()}},[[65,1,2]]]);
//# sourceMappingURL=main.ecbcb14d.chunk.js.map