(this.webpackJsonpslider=this.webpackJsonpslider||[]).push([[0],[,,,,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(1),i=a.n(c),n=a(4),s=a.n(n),r=(a(9),a(2)),l=(a(10),a(0));function o(e){var t=e.currentSlide,a=e.thisSlideNumber,c=e.parallaxContent,i=e.children,n="parallax__upper";return t<Number(a)&&(n+=" parallax__upper--bottom"),t>Number(a)&&(n+=" parallax__upper--top"),Object(l.jsxs)("div",{className:"parallax",children:[Object(l.jsx)("div",{className:"parallax__base",children:i}),Object(l.jsx)("div",{className:n,children:c})]})}a(12);function j(e){var t=e.top,a=e.left,c=e.size,i={width:"".concat(c,"px"),height:"".concat(c,"px"),top:"".concat(t,"px"),left:"".concat(a,"px")};return console.log(i),Object(l.jsxs)("div",{className:"pulsar-container",style:i,children:[Object(l.jsx)("div",{className:"circle circle--still"}),Object(l.jsx)("div",{className:"circle circle--pulsing"}),Object(l.jsx)("div",{className:"circle circle--pulsing-delayed"})]})}var b=[1988,2009,2016];a(13);function u(e){for(var t=e.currentSlide,a=[],c=0;c<=2;c++){var i="page-circle";c===t&&(i+=" page-circle--active"),a.push(Object(l.jsx)("div",{className:i},c))}return Object(l.jsx)("div",{className:"pagination-container",children:Object(l.jsx)("div",{className:"pagination__menu",children:a})})}a(14);function d(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),a=t[0],i=t[1],n=Object(c.useState)(0),s=Object(r.a)(n,2),o=s[0],j=s[1],u=Object(c.useState)(null),d=Object(r.a)(u,2),g=d[0],x=d[1],m={left:"".concat(100*-a,"%")},h=Math.round(100*o/(b.length-1)),O={background:"linear-gradient(to right, rgba(209, 234, 255, 1) 0%, rgba(209, 234, 255, 1) ".concat(h,"%, rgba(209, 234, 255, 0.2) ").concat(h,"%, rgba(209, 234, 255, 0.2) 100%)")};return Object(l.jsxs)("div",{className:"horizontal-container",children:[Object(l.jsxs)("div",{className:"horizontal__slides-container",style:m,children:[Object(l.jsx)("img",{src:"./images/3.1.jpg",alt:"slide_1988"}),Object(l.jsx)("img",{src:"./images/3.2.jpg",alt:"slide_2009"}),Object(l.jsx)("img",{src:"./images/3.3.jpg",alt:"slide_2016"})]}),Object(l.jsxs)("div",{className:"input-year-container",children:[Object(l.jsx)("input",{type:"range",min:"0",max:b.length-1,step:"any",list:"labels",className:"input-year__range",onTouchStart:function(e){return e.stopPropagation()},onTouchEnd:function(e){var t=(a-o)/100*17,c=setInterval((function(){j((function(e){return Math.min(Math.max(e+t,0),b.length)}))}),17);x(c),setTimeout((function(){clearInterval(c),j(a)}),100)},onChange:function(e){clearInterval(g),j(+e.target.value),i(Math.round(e.target.value))},value:o,style:O}),Object(l.jsx)("div",{className:"input-year__labels-container",children:p})]})]})}var p=[];b.forEach((function(e,t){p.push(Object(l.jsx)("p",{className:"input-year__label",children:e},t))}));a(15);function g(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),a=t[0],i=t[1],n=Object(c.useState)(null),s=Object(r.a)(n,2),j=s[0],b=s[1],p=Object(c.useState)(!1),g=Object(r.a)(p,2),h=g[0],O=g[1],f=Object(c.useState)(!1),_=Object(r.a)(f,2),v=_[0],N=_[1],S={top:"".concat(100*-a,"%")},y="next-page";0===a&&(y+=" next-page--active");var C="footer__fading",I="footer__sliding";return v?(C+=" footer__fading--active",I+=" footer__sliding--active"):(C+=" footer__fading--inactive",I+=" footer__sliding--inactive"),Object(l.jsxs)("div",{className:"view-wrapper",onTouchStart:function(e){b(e.touches[0].pageY),O(!1)},onTouchMove:function(e){e.touches[0].pageY-j>50&&!h&&(v?N(!1):a>0&&i((function(e){return Math.max(--e,0)})),O(!0)),e.touches[0].pageY-j<-50&&!h&&(2===a?N(!0):i((function(e){return++e})),O(!0))},children:[Object(l.jsxs)("div",{className:"slides-container",style:S,children:[Object(l.jsx)(o,{currentSlide:a,thisSlideNumber:"0",parallaxContent:x,children:Object(l.jsx)("img",{src:"./images/1.jpg",alt:"iceberg_top"})}),Object(l.jsx)(o,{currentSlide:a,thisSlideNumber:"1",parallaxContent:m,children:Object(l.jsx)("img",{src:"./images/2.jpg",alt:"iceberg_bottom"})}),Object(l.jsx)(d,{})]}),Object(l.jsx)(u,{currentSlide:a}),Object(l.jsx)("img",{src:"./images/next-page.png",alt:"next_page_bar",className:y}),Object(l.jsx)("div",{className:C}),Object(l.jsxs)("div",{className:I,children:[Object(l.jsx)("img",{src:"./images/refs.png",alt:"footer_background",className:"footer__background"}),Object(l.jsxs)("ol",{className:"footer__content",children:[Object(l.jsx)("li",{children:"Defronzo RA. Diabetes. 2009 Apr;58(4):773-95"}),Object(l.jsx)("li",{children:"Inzucchi SE, Sherwin RS in: Cecil Medicine 2011"}),Object(l.jsx)("li",{children:"Stanley S. Schwartz, Solomon Epstein,Barbara E. Corkey, Struan F.A. Grant,James R. Gavin III, and Richard B. Aguilar The Time Is Right for a New Classification System for Diabetes: Rationale and Implications of the b-Cell\u2013Centric Classification Schema Diabetes Care 2016; 39:179\u2013186 | DOI: 10.2337/dc15-1585"})]})]})]})}var x=Object(l.jsxs)(i.a.Fragment,{children:[Object(l.jsx)("img",{src:"./images/1.text--parallax.png",alt:"iceberg_top_text"}),Object(l.jsx)(j,{top:"260",left:"561",size:"50"}),Object(l.jsx)(j,{top:"423",left:"270",size:"30"}),Object(l.jsx)(j,{top:"535",left:"478",size:"15"}),Object(l.jsx)(j,{top:"514",left:"819",size:"17"})]}),m=Object(l.jsx)("img",{src:"./images/2.text--parallax.png",alt:"iceberg_bottom_text"});s.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.090c22b5.chunk.js.map