(this.webpackJsonpsekundomer=this.webpackJsonpsekundomer||[]).push([[0],{24:function(t,e,n){},25:function(t,e,n){},33:function(t,e,n){"use strict";n.r(e);var s=n(0),c=n.n(s),i=n(8),r=n.n(i),a=(n(24),n(12)),u=n(7),o="SET_STATUS",b={status:"stop"},l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,e=arguments.length>1?arguments[1]:void 0;return e.type===o?Object(u.a)(Object(u.a)({},t),{},{status:e.status}):t},j=Object(a.a)({timer:l}),d=Object(a.b)(j);window.store=d;var O=d,m=(n(25),n(13)),f=n(14),h=n(19),p=n(17),x=n(18),v=n(16),S=n(35),N=n(4),T=n.n(N),_=n(2),E=function(t){var e=Object(s.useState)(0),n=Object(x.a)(e,2),c=n[0],i=n[1],r=null,a=Object(s.useRef)(),u=new v.a((function(t){Object(S.a)(1e3).subscribe((function(e){t.next(e)}))}));Object(s.useEffect)((function(){"run"===t.status&&(a.current=u.subscribe({next:function(t){i((function(t){return t+1e3}))}})),"stop"===t.status&&a.current&&a.current.unsubscribe()}),[t.status]);var o=new Date(c).toISOString().slice(11,19);return Object(_.jsxs)("div",{className:T.a.timer,children:[Object(_.jsx)("div",{className:T.a.innerElement,children:Object(_.jsx)("button",{onClick:function(){t.setStatus("run")},className:T.a.btn,children:"Start"})}),Object(_.jsx)("div",{className:T.a.innerElement,children:Object(_.jsx)("button",{onClick:function(){t.setStatus("stop"),i(0)},className:T.a.btn,children:"Stop"})}),Object(_.jsx)("div",{className:T.a.innerElement,children:Object(_.jsxs)("span",{children:[" ",o," "]})}),Object(_.jsx)("div",{className:T.a.innerElement,children:Object(_.jsx)("button",{onClick:function(){i(0),t.setStatus("run")},className:T.a.btn,children:"Reset"})}),Object(_.jsx)("div",{className:T.a.innerElement,children:Object(_.jsx)("button",{onClick:function(){r?(clearTimeout(r),t.setStatus("stop"),r=null):r=setTimeout((function(){r=null}),300)},className:T.a.btn,children:"Wait"})})]})},g=n(9),k=function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(){return Object(m.a)(this,n),e.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return Object(_.jsx)("div",{children:Object(_.jsx)(E,Object(u.a)({},this.props))})}}]),n}(c.a.Component),C=Object(g.b)((function(t){return{status:t.timer.status}}),{setStatus:function(t){return{type:o,status:t}}})(k);var w=function(){return Object(_.jsx)("div",{className:"App",children:Object(_.jsx)(C,{})})},y=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(e){var n=e.getCLS,s=e.getFID,c=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),s(t),c(t),i(t),r(t)}))};r.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(g.a,{store:O,children:Object(_.jsx)(w,{})})}),document.getElementById("root")),y()},4:function(t,e,n){t.exports={timer:"Timer_timer__3TR59",innerElement:"Timer_innerElement__2JvZq",btn:"Timer_btn__u5uu_"}}},[[33,1,2]]]);
//# sourceMappingURL=main.e2b1c670.chunk.js.map