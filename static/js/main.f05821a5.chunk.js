(this["webpackJsonpreact-21-22"]=this["webpackJsonpreact-21-22"]||[]).push([[0],[,,function(t,e,s){t.exports={list__statistic:"Statistics_list__statistic__1kqks",list__statistic__el:"Statistics_list__statistic__el__cuqf3"}},,function(t,e,s){t.exports={wrapper__btn:"FeedbackOptions_wrapper__btn__8ETsJ",btn:"FeedbackOptions_btn__1N7YF"}},,function(t,e,s){t.exports={title__h1:"Section_title__h1__X6gtx",title__h3:"Section_title__h3__3zn3l"}},,function(t,e,s){t.exports={wrapper:"FeedBack_wrapper__1rNZx"}},function(t,e,s){t.exports={span__warning:"Notification_span__warning__4sWHT"}},,,,,,,function(t,e,s){},function(t,e,s){"use strict";s.r(e);var a=s(0),c=s(1),n=s.n(c),i=s(7),r=s.n(i),l=(s(15),s(16),s(3)),_=s(8),j=s.n(_),b=s(2),o=s.n(b);function u(t){var e=t.good,s=t.neutral,c=t.bad,n=t.total,i=t.percentage;return Object(a.jsxs)("ul",{className:o.a.list__statistic,children:[Object(a.jsxs)("li",{className:o.a.list__statistic__el,children:[Object(a.jsx)("span",{children:"Good : "}),Object(a.jsx)("span",{className:o.a.span__statistic,children:e})]}),Object(a.jsxs)("li",{className:o.a.list__statistic__el,children:[Object(a.jsx)("span",{children:"Neutral : "}),Object(a.jsx)("span",{className:o.a.span__statistic,children:s})]}),Object(a.jsxs)("li",{className:o.a.list__statistic__el,children:[Object(a.jsx)("span",{children:"Bad : "}),Object(a.jsx)("span",{className:o.a.span__statistic,children:c})]}),Object(a.jsxs)("li",{className:o.a.list__statistic__el,children:[Object(a.jsx)("span",{children:"Total : "}),Object(a.jsx)("span",{className:o.a.span__statistic,children:n})]}),Object(a.jsxs)("li",{className:o.a.list__statistic__el,children:[Object(a.jsx)("span",{children:"Positive statistic : "}),Object(a.jsxs)("span",{className:o.a.span__statistic,children:[i,"%"]})]})]})}var d=s(4),O=s.n(d);function p(t){var e=t.onClick;return Object(a.jsxs)("div",{className:O.a.wrapper__btn,children:[Object(a.jsx)("button",{className:O.a.btn,type:"button",name:"good",onClick:e,children:"Good"}),Object(a.jsx)("button",{className:O.a.btn,type:"button",name:"neutral",onClick:e,children:"Neutral"}),Object(a.jsx)("button",{className:O.a.btn,type:"button",name:"bad",onClick:e,children:"Bad"})]})}var h=s(6),x=s.n(h);function f(t){var e=t.title,s=t.flag,c=t.children,n=function(){return s?Object(a.jsx)("h1",{className:x.a.title__h1,children:e}):Object(a.jsx)("h3",{className:x.a.title__h3,children:e})};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(n,{}),c]})}var m=s(9),N=s.n(m);function g(){return Object(a.jsx)("span",{className:N.a.span__warning,children:"Not feedbacks given "})}var k=function(){var t=Object(c.useState)(0),e=Object(l.a)(t,2),s=e[0],n=e[1],i=Object(c.useState)(0),r=Object(l.a)(i,2),_=r[0],b=r[1],o=Object(c.useState)(0),d=Object(l.a)(o,2),O=d[0],h=d[1],x=Object(c.useState)(0),m=Object(l.a)(x,2),N=m[0],k=m[1],v=Object(c.useState)(0),w=Object(l.a)(v,2),S=w[0],F=w[1];return Object(c.useEffect)((function(){k(s+_+O)}),[s,_,O]),Object(c.useEffect)((function(){F(Math.ceil(100/N*s))}),[N,s]),Object(a.jsxs)("div",{className:j.a.wrapper,children:[Object(a.jsx)(f,{title:"Please leave feedback",flag:!0,children:Object(a.jsx)(p,{onClick:function(t){return function(t){var e=t.target.name;switch(e){case"good":n((function(t){return t+1}));break;case"bad":h((function(t){return t+1}));break;case"neutral":b((function(t){return t+1}));break;default:console.log("Sorry, we are not have "+e+".")}}(t)}})}),Object(a.jsx)(f,{title:"Statistics",flag:!1,children:N>0?Object(a.jsx)(u,{good:s,neutral:_,bad:O,total:N,percentage:S}):Object(a.jsx)(g,{})})]})};function v(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(k,{})})}r.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(v,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.f05821a5.chunk.js.map