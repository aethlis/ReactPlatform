(this["webpackJsonpreact-movie-platform"]=this["webpackJsonpreact-movie-platform"]||[]).push([[0],{11:function(e,t,c){e.exports={container:"HoverInfo_container__13khJ",textBox:"HoverInfo_textBox__2fJRW",hidden:"HoverInfo_hidden__27XfZ"}},19:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(12),s=c.n(a),i=c(6),j=c(2),o=c(7),u=c.n(o),m=c(8),b=c(3),d=c(1);var l=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(!0),s=Object(b.a)(a,2),i=s[0],o=s[1],l=Object(n.useState)(""),O=Object(b.a)(l,2),v=O[0],x=O[1],h=Object(n.useState)(""),f=Object(b.a)(h,2),p=f[0],_=f[1],g=Object(n.useState)(""),y=Object(b.a)(g,2),S=y[0],I=y[1],M=Object(j.g)().id,N=function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(M));case 2:return e.next=4,e.sent.json();case 4:t=e.sent,x(t.data.movie.title),_(t.data.movie.medium_cover_image),I(t.data.movie.description_full),r(t.data.movie.runtime),o(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){N()})),function(e,t,c,n,r,a){return Object(d.jsx)("h1",{children:t?"Loading...":Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:c}),Object(d.jsx)("img",{src:n,alt:c}),Object(d.jsx)("p",{style:{fontSize:16},children:r}),Object(d.jsxs)("p",{style:{fontSize:16},children:["Runtime: ",e," minutes"]})]})})}(c,i,v,p,S)},O=c(5),v=c.n(O);var x=function(e){var t=e.id,c=e.coverImg,n=e.title,r=e.summary,a=e.genres,s=e.mouseHover;return Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:v.a.movie,onMouseEnter:s,children:Object(d.jsxs)("div",{className:v.a.wrapper,children:[Object(d.jsx)(i.b,{to:"/".concat(t),children:Object(d.jsx)("img",{src:c,alt:n,className:v.a.coverImg})}),Object(d.jsxs)("div",{className:v.a.infoText,children:[Object(d.jsx)("h2",{className:v.a.link,children:Object(d.jsx)(i.b,{to:"/".concat(t),children:n})}),Object(d.jsx)("p",{className:v.a.summary,children:r.length>235?"".concat(r.slice(0,235),"..."):r}),Object(d.jsx)("ul",{className:v.a.genreList,children:a.map((function(e){return Object(d.jsx)("li",{className:a,children:e},e)}))})]})]})})})},h=c(11),f=c.n(h);var p=function(e){var t=e.id,c=e.coverImg,n=e.title,r=e.summary,a=e.genres,s=e.ifHidden;return Object(d.jsxs)("div",{className:f.a.container,children:[s?null:Object(d.jsx)("img",{src:c,alt:t}),Object(d.jsxs)("div",{className:f.a.textBox,children:[Object(d.jsx)("h3",{children:n}),Object(d.jsx)("p",{children:t}),Object(d.jsx)("p",{children:r}),Object(d.jsx)("p",{children:a})]})]})};var _=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(!0),s=Object(b.a)(a,2),i=s[0],j=s[1],o=function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year");case 2:return e.next=4,e.sent.json();case 4:t=e.sent,r(t.data.movies),j(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){o()}),[]),function(e,t){var c=Object(n.useState)(""),r=Object(b.a)(c,2),a=r[0],s=r[1],i=Object(n.useState)(null),j=Object(b.a)(i,2),o=j[0],u=j[1],m=Object(n.useState)(!0),l=Object(b.a)(m,2),O=l[0],v=l[1],h=Object(n.useState)(""),f=Object(b.a)(h,2),_=f[0],g=f[1],y=Object(n.useState)(""),S=Object(b.a)(y,2),I=S[0],M=S[1],N=Object(n.useState)([]),w=Object(b.a)(N,2),E=w[0],H=w[1];return Object(d.jsx)("div",{children:t?Object(d.jsx)("h1",{children:"Loading..."}):Object(d.jsxs)("div",{children:[e.map((function(e){return Object(d.jsx)(x,{mouseHover:function(){s(e.id),u(e.medium_cover_image),g(e.title),M(e.summary),H(e.genres),v(!1)},ID:a,COVERIMG:o,TITLE:_,SUMMARY:I,GENRES:E,id:e.id,coverImg:e.medium_cover_image,title:e.title,summary:e.summary,genres:e.genres},e.id)})),Object(d.jsx)(p,{ifHidden:O,id:a,coverImg:o,title:_,summary:I,genres:E})]})})}(c,i)};var g=function(){return Object(d.jsx)(i.a,{basename:"/ReactPlatform",children:Object(d.jsxs)(j.c,{children:[Object(d.jsx)(j.a,{path:"/:id",element:Object(d.jsx)(l,{})}),Object(d.jsx)(j.a,{path:"/",element:Object(d.jsx)(_,{})})]})})};c(19);s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root"))},5:function(e,t,c){e.exports={movie:"Movie_movie__27rBX",wrapper:"Movie_wrapper__3vhQ0",infoText:"Movie_infoText__1gGxA",summary:"Movie_summary__3KM6z",genreList:"Movie_genreList__3liJR"}}},[[20,1,2]]]);
//# sourceMappingURL=main.67db81c5.chunk.js.map