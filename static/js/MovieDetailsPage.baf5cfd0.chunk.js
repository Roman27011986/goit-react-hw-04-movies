(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[2],{41:function(t,e,n){"use strict";n.d(e,"e",(function(){return u})),n.d(e,"b",(function(){return p})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return h})),n.d(e,"a",(function(){return j}));var r=n(39),a=n.n(r),c=n(40),s=n(44),i=n.n(s);i.a.defaults.baseURL="https://api.themoviedb.org/3/";var o="0900e674aa431a5cac8b8b166be20d60",u=function(){var t=Object(c.a)(a.a.mark((function t(){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("trending/all/day?api_key=".concat(o,"&page=1"));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=Object(c.a)(a.a.mark((function t(e){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("movie/".concat(e,"?api_key=").concat(o));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=Object(c.a)(a.a.mark((function t(e){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("/search/movie?api_key=".concat(o,"&query=").concat(e));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=Object(c.a)(a.a.mark((function t(e){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("movie/".concat(e,"/reviews?api_key=").concat(o));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var t=Object(c.a)(a.a.mark((function t(e){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("movie/".concat(e,"/credits?api_key=").concat(o));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},74:function(t,e,n){t.exports={item:"CastItem_item__3XtHL",text:"CastItem_text__2XpYz",img:"CastItem_img__1iGRI"}},75:function(t,e,n){t.exports={list:"CastList_list__2HrwP"}},76:function(t,e,n){t.exports={text:"ReviewsList_text__2Acw9",author:"ReviewsList_author__1V6qm",cont:"ReviewsList_cont__1qbZC"}},77:function(t,e,n){t.exports={wrap:"MovieDitails_wrap__1EUCc",text:"MovieDitails_text__2L0sg",img:"MovieDitails_img__23zX4",list:"MovieDitails_list__1Jm-U",btn:"MovieDitails_btn__pwY2W"}},80:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}n.r(e);var s=n(39),i=n.n(s),o=n(40),u=n(35),p=n(36),l=n(38),h=n(37),j=n(0),v=n(2),b=n(74),f=n.n(b),m=n.p+"static/media/def.img.15422c43.svg",d=n(1),O=function(t){var e=t.onProfilePath,n=t.onName,r=t.onChar;return Object(d.jsxs)("li",{children:[Object(d.jsx)("img",{className:f.a.img,src:e?"https://image.tmdb.org/t/p/original/".concat(e):m,alt:n}),Object(d.jsx)("p",{className:f.a.text,children:n}),Object(d.jsx)("p",{className:f.a.text,children:r})]})},x=n(75),w=n.n(x),_=function(t){var e=t.onCast;return Object(d.jsx)("ul",{className:w.a.list,children:e.map((function(t){var e=t.cast_id,n=t.profile_path,r=t.name,a=t.character;return Object(d.jsx)(O,{onProfilePath:n,onName:r,onChar:a},e)}))})},g=n(41),y=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={cast:[]},t}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var t=Object(o.a)(i.a.mark((function t(){var e,n,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.props.match.params.movieId,t.next=3,Object(g.a)(e);case 3:n=t.sent,r=n.data,this.setState({cast:r.cast});case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.cast;return Object(d.jsx)(_,{onCast:t})}}]),n}(j.Component),k=n(76),C=n.n(k),N=function(t){var e=t.onAuthor,n=t.onContent;return Object(d.jsxs)("li",{children:[Object(d.jsxs)("h3",{className:C.a.author,children:["Author: ",e]}),Object(d.jsx)("p",{className:C.a.cont,children:n})]})},D=function(t){var e=t.onData;return Object(d.jsx)("ul",{children:e.length>0?e.map((function(t){var e=t.author,n=t.content,r=t.id;return Object(d.jsx)(N,{onAuthor:e,onContent:n},r)})):Object(d.jsx)("p",{children:"We don't have any reviews for this movie"})})},P=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={reviews:[]},t}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var t=Object(o.a)(i.a.mark((function t(){var e,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.props.match.params.movieId,t.next=3,Object(g.d)(e);case 3:n=t.sent,this.setState({reviews:n.results});case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.reviews;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(D,{onData:t})})}}]),n}(j.Component),I=n(77),M=n.n(I),A=function(t){var e=t.genres,n=t.original_title,r=t.overview,a=t.vote_average,c=t.poster_path,s=t.release_date,i=t.onHandleGoBack,o=10*a,u=Number.parseInt(s),p=e?e.map((function(t){return t.name+" "})):"no genres";return Object(d.jsxs)("div",{className:M.a.wrap,children:[Object(d.jsx)("button",{className:M.a.btn,type:"button",onClick:i,children:" \u21d0 "}),Object(d.jsx)("img",{className:M.a.img,src:"https://image.tmdb.org/t/p/original/".concat(c),alt:n}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("h3",{className:M.a.text,children:[n," (",u,")"]}),Object(d.jsxs)("p",{children:["User Score: ",o,"%"]}),Object(d.jsx)("h3",{className:M.a.text,children:"Overview"}),Object(d.jsx)("p",{children:r}),Object(d.jsx)("h3",{className:M.a.text,children:"Genres"}),Object(d.jsxs)("p",{className:M.a.list,children:["  ",p]})]})]})},L=n(7),S=n(10),G=n(8),R=n.n(G),U=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var t,e,n=this.props,r=n.location,a=n.match;return Object(d.jsxs)("ul",{className:R.a.box,children:[Object(d.jsx)("li",{children:Object(d.jsx)(S.b,{to:{pathname:"".concat(a.url,"/cast"),state:{from:null===r||void 0===r||null===(t=r.state)||void 0===t?void 0:t.from}},children:"Cast"})}),Object(d.jsx)("li",{children:Object(d.jsx)(S.b,{to:{pathname:"".concat(a.url,"/reviews"),state:{from:null===r||void 0===r||null===(e=r.state)||void 0===e?void 0:e.from}},children:"Reviews"})})]})}}]),n}(j.Component),B=Object(v.f)(U),H=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={movie:[]},t.handleGoBack=function(){var e,n=t.props.location;t.props.history.push((null===n||void 0===n||null===(e=n.state)||void 0===e?void 0:e.from)||L.a.home)},t}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var t=Object(o.a)(i.a.mark((function t(){var e,n,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.props.match.params.movieId,t.next=3,Object(g.b)(e);case 3:n=t.sent,r=n.data,this.setState({movie:r});case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.setState({movie:[]})}},{key:"render",value:function(){var t=this.state.movie;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(A,c(c({},t),{},{onHandleGoBack:this.handleGoBack})),Object(d.jsx)(B,{}),Object(d.jsxs)(v.c,{children:[Object(d.jsx)(v.a,{path:"".concat(this.props.match.path,"/cast"),component:y}),Object(d.jsx)(v.a,{path:"".concat(this.props.match.path,"/reviews"),component:P})]})]})}}]),n}(j.Component);e.default=H}}]);
//# sourceMappingURL=MovieDetailsPage.baf5cfd0.chunk.js.map