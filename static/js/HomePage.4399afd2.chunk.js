(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[1],{41:function(t,e,n){"use strict";n.d(e,"e",(function(){return o})),n.d(e,"b",(function(){return p})),n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return v})),n.d(e,"a",(function(){return l}));var r=n(39),a=n.n(r),c=n(40),i=n(44),u=n.n(i);u.a.defaults.baseURL="https://api.themoviedb.org/3/";var s="0900e674aa431a5cac8b8b166be20d60",o=function(){var t=Object(c.a)(a.a.mark((function t(){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("trending/all/day?api_key=".concat(s,"&page=1"));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=Object(c.a)(a.a.mark((function t(e){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("movie/".concat(e,"?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(c.a)(a.a.mark((function t(e){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("/search/movie?api_key=".concat(s,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=Object(c.a)(a.a.mark((function t(e){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("movie/".concat(e,"/reviews?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=Object(c.a)(a.a.mark((function t(e){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("movie/".concat(e,"/credits?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},42:function(t,e,n){t.exports={link:"MovieListItem_link__2_i5Y"}},43:function(t,e,n){t.exports={list:"MoviesList_list__1hO9R"}},45:function(t,e,n){"use strict";n.d(e,"a",(function(){return j}));var r=n(2),a=n(35),c=n(36),i=n(38),u=n(37),s=n(10),o=n(0),p=n(42),f=n.n(p),v=n(1),l=function(t){Object(i.a)(n,t);var e=Object(u.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(v.jsx)("li",{children:Object(v.jsx)(s.b,{to:{pathname:"/movies/".concat(this.props.id),state:{from:this.props.location}},className:f.a.link,children:this.props.onTitle})})}}]),n}(o.Component),h=Object(r.f)(l),b=n(43),d=n.n(b),j=Object(r.f)((function(t){var e=t.onMovies;return Object(v.jsx)("ul",{className:d.a.list,children:e.map((function(t){var e=t.id,n=t.original_title;return Object(v.jsx)(h,{onTitle:n,id:e},e)}))})}))},73:function(t,e,n){t.exports={wrap:"HomePage_wrap__2u72J",text:"HomePage_text__3M3yw"}},79:function(t,e,n){"use strict";n.r(e);var r=n(39),a=n.n(r),c=n(40),i=n(35),u=n(36),s=n(38),o=n(37),p=n(0),f=n(45),v=n(41),l=n(73),h=n.n(l),b=n(1),d=function(t){Object(s.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={movies:[]},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=Object(c.a)(a.a.mark((function t(){var e,n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(v.e)();case 2:e=t.sent,n=e.data,this.setState({movies:n.results});case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.movies;return Object(b.jsxs)("div",{className:h.a.wrap,children:[Object(b.jsx)("h2",{className:h.a.text,children:"Trending today"}),Object(b.jsx)(f.a,{onMovies:t})]})}}]),n}(p.Component);e.default=d}}]);
//# sourceMappingURL=HomePage.4399afd2.chunk.js.map