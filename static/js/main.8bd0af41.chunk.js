(this.webpackJsonptablefromjson=this.webpackJsonptablefromjson||[]).push([[0],{63:function(e,t,n){},65:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(8),o=n.n(a),i=n(24),s=n(10),l=n(17),j=n(101),u=n(6),d=function(){var e=Object(c.useState)({}),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){fetch("./data.json").then((function(e){return e.json()})).then((function(e){return r(e.data)})).catch((function(e){return console.log(e)}))}),[]),Object(u.jsxs)("div",{className:"Example",children:[Object(u.jsx)(i.b,{to:"/",className:"link",children:Object(u.jsx)(j.a,{variant:"contained",color:"primary",children:"Back"})}),Object(u.jsx)("pre",{children:JSON.stringify(n,null,"\t")})]})},b=n(44),h=n(18),O=(n(63),function(e){var t=e.header,n=e.rows;return Object(u.jsx)("div",{className:"table-wrapper",children:Object(u.jsxs)("table",{children:[Object(u.jsx)("thead",{children:Object(u.jsx)("tr",{children:t.map((function(e,t){return Object(u.jsx)("th",{children:e.column_name},Date.now()+t)}))})}),Object(u.jsx)("tbody",{children:n.map((function(e,t){return Object(u.jsx)("tr",{children:Object.keys(e).map((function(t){var n;return Object(u.jsx)("td",{children:null!==(n=e[t])&&void 0!==n?n:""},Date.now()+t)}))},Date.now()+t)}))})]})})}),f=n(100),x=n(38),p=(n(64),n(65),function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),o=Object(l.a)(a,2),s=o[0],d=o[1],p=function(e){fetch(e).then((function(e){return e.json()})).then((function(e){if(!("header"in(t=e.data))||!("rows"in t))throw new Error("Invalid object! Try again!");var t;r([].concat(Object(h.a)(n),[e.data]))})).catch((function(e){x.b.error(e.message||"Error fetch data! Try again!!",{position:"top-right",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})})).finally((function(){return d("")}))};return Object(u.jsxs)("div",{className:"main",children:[Object(u.jsx)(x.a,{position:"top-right",autoClose:3e3,hideProgressBar:!0,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),Object(u.jsx)(i.b,{to:"/example",className:"link",children:Object(u.jsx)(j.a,{variant:"contained",children:"Example JSON"})}),Object(u.jsx)(j.a,{variant:"contained",color:"primary",onClick:function(){return p("./data.json")},children:"Example Table"}),n.map((function(e,t){return e.hasOwnProperty("header")&&e.hasOwnProperty("rows")?Object(u.jsxs)("div",{children:[Object(u.jsx)(O,Object(b.a)({},e)),Object(u.jsx)(j.a,{variant:"contained",color:"secondary",onClick:function(){return e=t,void r(n.filter((function(t,n){return n!==e})));var e},children:"Remove table"})]},Date.now()+t):null})),Object(u.jsxs)("form",{children:[Object(u.jsx)(f.a,{label:"DataURL",variant:"outlined",className:"input",value:s,onChange:function(e){return function(e){d(e.target.value)}(e)}}),Object(u.jsx)(j.a,{variant:"contained",color:"primary",onClick:function(){return p(s)},children:"Add table"})]})]})}),m=(n(67),function(){return Object(u.jsx)("div",{className:"container",children:Object(u.jsx)(i.a,{children:Object(u.jsxs)(s.d,{children:[Object(u.jsx)(s.b,{component:p,path:"/",exact:!0}),Object(u.jsx)(s.b,{component:d,path:"/example",exact:!0}),Object(u.jsx)(s.a,{to:"/"})]})})})});o.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.8bd0af41.chunk.js.map