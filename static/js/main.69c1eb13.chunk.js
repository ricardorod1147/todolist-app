(this["webpackJsonpreact-academlo"]=this["webpackJsonpreact-academlo"]||[]).push([[0],[,,,,,,function(e,t,n){},,,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),o=n(7),r=n.n(o),a=(n(13),n(5)),s=n(4),l=n.n(s),d=n(8),u=n(2),j=(n(6),n(15),n(0)),b=function(e){e.counter,e.darkMode;return Object(j.jsx)("header",{className:"header-container",children:Object(j.jsx)("h2",{children:"ToDO APP"})})},h=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("p",{children:"Cargando..."})})},f=(n(17),function(e){var t=e.title,n=e.status,c=e.handleCompleteTodo,i=e.id;return Object(j.jsxs)("div",{className:"todo-card",children:[Object(j.jsx)("div",{className:"todo-title",children:Object(j.jsx)("h4",{children:t})}),Object(j.jsx)("div",{className:"todo-actions",children:Object(j.jsx)("button",{onClick:function(){return c(i)},children:n?"Reset":"Completed"})})]})}),O=(n(18),function(e){var t=e.handleAllView,n=e.handleCompletedView,c=e.handleResetView,i=e.completedList;return Object(j.jsxs)("div",{className:"buttons-menu",children:[Object(j.jsx)("button",{onClick:function(){return t(i)},children:"All"}),Object(j.jsx)("button",{onClick:function(){return n(i)},children:"Completed"}),Object(j.jsx)("button",{onClick:function(){return c(i)},children:"Reset"})]})});var p=function(){var e=Object(c.useState)(null),t=Object(u.a)(e,2),n=t[0],i=t[1],o=Object(c.useState)(!0),r=Object(u.a)(o,2),s=r[0],p=r[1],m=Object(c.useState)(!1),x=Object(u.a)(m,2),v=x[0],C=x[1],g=Object(c.useState)(!1),w=Object(u.a)(g,2),k=w[0],T=w[1];Object(c.useEffect)((function(){var e=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/todos");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c=n.slice(0,20),i(c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var N=function(e){var t=n.map((function(t){return t.id===e?Object(a.a)(Object(a.a)({},t),{},{completed:!t.completed}):t}));i(t)};return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(b,{}),Object(j.jsx)(O,{handleAllView:function(){p(!0),C(!1),T(!1)},handleCompletedView:function(){p(!1),C(!0),T(!1)},handleResetView:function(){p(!1),C(!1),T(!0)}}),!0===s&&(n&&n.length>0?n.map((function(e){return Object(j.jsx)(f,{title:e.title,status:e.completed,handleCompleteTodo:N,id:e.id},e.id)})):Object(j.jsx)(h,{})),!0===v&&(n&&n.length>0?n.filter((function(e){return!1===e.completed})).map((function(e){return Object(j.jsx)(f,{title:e.title,status:e.completed,handleCompleteTodo:N,id:e.id},e.id)})):Object(j.jsx)(h,{})),!0===k&&(n&&n.length>0?n.filter((function(e){return!0===e.completed})).map((function(e){return Object(j.jsx)(f,{title:e.title,status:e.completed,handleCompleteTodo:N,id:e.id},e.id)})):Object(j.jsx)(h,{}))]})})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),o(e),r(e)}))};r.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),m()}],[[19,1,2]]]);
//# sourceMappingURL=main.69c1eb13.chunk.js.map