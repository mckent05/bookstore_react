(this.webpackJsonpbookstore_react=this.webpackJsonpbookstore_react||[]).push([[0],{39:function(e,t,c){},40:function(e,t,c){},47:function(e,t,c){},50:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(18),o=c.n(a),s=(c(39),c(11)),i=(c(40),c(8)),l=c(3),j=c(31),b=c(1),u=function(){return Object(b.jsxs)("nav",{className:"nav d-flex a-center p-relative",children:[Object(b.jsx)("h1",{className:"nav-title",children:"Bookstore CMS "}),Object(b.jsxs)("ul",{className:"nav-links d-flex j-center a-center",children:[Object(b.jsx)("li",{children:Object(b.jsx)(s.b,{to:"/",className:"nav-link",children:"Books"})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.b,{to:"/categories",className:"nav-link",children:"Category"})})]}),Object(b.jsx)("button",{type:"button",className:"profile-btn d-flex a-center j-center","aria-label":"user-icon",children:Object(b.jsx)(j.a,{className:"user"})})]})},d=function(e){var t=e.chapter;return Object(b.jsx)("article",{children:Object(b.jsxs)("div",{className:"chapter d-flex f-col j-center a-center",children:[Object(b.jsx)("h1",{className:"book-chapter",children:"Current Chapter"}),Object(b.jsx)("p",{children:"chapter ".concat(t)}),Object(b.jsx)("button",{type:"button",className:"chapter-btn",children:"update progress"})]})})},h=c(62),p=function(e){var t=e.progress;return Object(b.jsx)("article",{children:Object(b.jsxs)("span",{className:"book-progress d-flex a-center j-center",children:[Object(b.jsx)(h.a,{color:"inherit",size:75,thickness:2,className:"circle",variant:"determinate",value:t}),Object(b.jsxs)("div",{className:"percent d-flex f-col a-center j-center",children:[Object(b.jsxs)("h3",{children:[t,"%"]}),Object(b.jsx)("p",{children:"completed"})]})]})})},O=function(e){var t=e.category,c=e.author,n=e.title;return Object(b.jsxs)("section",{className:"book-details d-flex f-col f-row",children:[Object(b.jsx)("h5",{className:"book-category",children:t}),Object(b.jsx)("h2",{className:"book-title",children:n}),Object(b.jsx)("h3",{className:"book-author",children:c})]})},f=function(e){var t=e.removeItem;return Object(b.jsx)("section",{className:"control",children:Object(b.jsxs)("div",{className:"btn-cont d-flex  a-center",children:[Object(b.jsx)("button",{type:"button",className:"control-btn d-flex a-center",children:"comment"}),Object(b.jsx)("button",{type:"button",className:"control-btn d-flex a-center",onClick:t,children:"remove"}),Object(b.jsx)("button",{type:"button",className:"control-btn d-flex a-center",children:"edit"})]})})},x=(c(47),function(e){var t=e.category,c=e.author,n=e.chapter,r=e.title,a=e.progress,o=e.removeItem;return Object(b.jsxs)("article",{className:"book-card d-flex a-center",children:[Object(b.jsxs)("div",{className:"book-details-control",children:[Object(b.jsx)(O,{title:r,author:c,category:t}),Object(b.jsx)(f,{removeItem:o})]}),Object(b.jsx)("div",{children:Object(b.jsx)(p,{progress:a})}),Object(b.jsx)("div",{children:Object(b.jsx)(d,{chapter:n})})]})}),m=c(5),v=c(63),k=c(32),g=c(9),y=c.n(g),N=c(20),C=c(17),w=function(){return Math.floor(100*Math.random())},S=function(){return Math.floor(20*Math.random())},B=["science","drama","action","thriller","love","horror"],_=(S(),w(),Object(v.a)(),S(),w(),Object(v.a)(),"bookStore/books/ADD_BOOK"),F="bookStore/books/REMOVE_BOOK",E="bookStore/books/FETCH_BOOK",T=[],A=function(e){return{type:_,payload:Object(C.a)(Object(C.a)({},e),{},{progress:w(),chapter:S(),author:"gbenga"})}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return[].concat(Object(k.a)(e),[t.payload]);case F:return e.filter((function(e){return e.item_id!==t.payload}));case E:return Object.entries(t.payload).map((function(e){var t=Object(m.a)(e,2),c=t[0],n=t[1],r=Object(m.a)(n,1)[0];return Object(C.a)(Object(C.a)({item_id:c},r),{},{chapter:S(),progress:w(),author:"gbenga"})}));default:return e}},V=function(e){var t=e.category,c=Object(n.useState)(""),r=Object(m.a)(c,2),a=r[0],o=r[1],s=Object(n.useState)("science"),l=Object(m.a)(s,2),j=l[0],u=l[1],d=Object(i.b)(),h=function(e){e.preventDefault();var t={title:a,category:j,item_id:Object(v.a)()};""!==a?(d(function(e){return function(){var t=Object(N.a)(y.a.mark((function t(c){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/aWBfup2VaaGqFRWVe1S7/books/",{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}});case 2:c(A(e));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t)),o("")):window.alert("Enter a Book Title")};return Object(b.jsxs)("div",{className:"add-book j-center f-col d-flex",children:[Object(b.jsx)("h2",{children:"Add a New Book"}),Object(b.jsxs)("form",{className:"form d-flex a-center",children:[Object(b.jsx)("input",{type:"text",className:"form-input",value:a,placeholder:"Add a new book",onChange:function(e){return o(e.target.value)}}),Object(b.jsx)("select",{className:"select",onChange:function(e){return u(e.target.value)},children:t.map((function(e){return Object(b.jsx)("option",{value:e,children:e},e)}))}),Object(b.jsx)("button",{type:"submit",className:"submit-btn",onClick:function(e){return h(e)},children:" Add Book"})]})]})},I=function(){var e=Object(i.b)(),t=function(t){var c;e((c=t,function(){var e=Object(N.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/aWBfup2VaaGqFRWVe1S7/books/".concat(c),{method:"DELETE",body:JSON.stringify({item_id:c}),headers:{"Content-type":"application/json; charset=UTF-8"}});case 2:t({type:F,payload:c});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},c=Object(i.c)((function(e){return e.books}));return Object(n.useEffect)((function(){e(function(){var e=Object(N.a)(y.a.mark((function e(t){var c,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/aWBfup2VaaGqFRWVe1S7/books/");case 2:return c=e.sent,e.next=5,c.json();case 5:n=e.sent,t({type:E,payload:n});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(b.jsxs)("div",{className:"books-cont d-flex f-col j-center a-center",children:[c.map((function(e){return Object(b.jsx)(x,{category:e.category,title:e.title,progress:e.progress,author:e.author,chapter:e.chapter,removeItem:function(){return t(e.item_id)}},e.item_id)})),Object(b.jsx)(V,{category:B})]})},W=function(){return Object(b.jsx)("section",{className:"category d-flex a-center j-center",children:Object(b.jsx)("p",{children:"Under Construction..."})})},D=c(21),J=c(29),R=c.n(J),q=c(30),G=Object(D.b)({books:M}),K=Object(D.c)(G,Object(D.a)(q.a,R.a));var L=function(){return Object(b.jsx)(i.a,{store:K,children:Object(b.jsxs)("div",{className:"bookstore",children:[Object(b.jsx)(u,{}),Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{path:"/",exact:!0,element:Object(b.jsx)(I,{})}),Object(b.jsx)(l.a,{path:"/categories",exact:!0,element:Object(b.jsx)(W,{})})]})]})})},P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,64)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;c(e),n(e),r(e),a(e),o(e)}))};o.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(s.a,{children:Object(b.jsx)(L,{})})}),document.getElementById("root")),P()}},[[50,1,2]]]);
//# sourceMappingURL=main.bc8de240.chunk.js.map