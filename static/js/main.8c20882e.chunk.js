(this["webpackJsonppokemons-info"]=this["webpackJsonppokemons-info"]||[]).push([[0],{32:function(e,t,a){e.exports=a(66)},37:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(29),r=a.n(o),i=(a(37),a(8)),s=a(1),l=a(18),m=a(13),p=a(15),u=a.n(p),h=a(30),f=a(12),g=a.n(f);a(56);function d(e){var t=e.height,a=e.weight;return c.a.createElement("div",{className:"properties"},c.a.createElement("span",{className:"properties__details"},"height:"),c.a.createElement("span",{className:"properties__details"},t),c.a.createElement("span",{className:"properties__details"},"weight:"),c.a.createElement("span",{className:"properties__details"},a))}a(57);function _(e){var t=e.id,a=e.name,o=Object(n.useState)(null),r=Object(m.a)(o,2),i=r[0],s=r[1];function l(){return(l=Object(h.a)(u.a.mark((function e(){var a,n,c,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g()("https://pokeapi.co/api/v2/pokemon/".concat(t,"/"));case 3:a=e.sent,n=a.data,c=n.height,o=n.weight,s({height:c,weight:o}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("error",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return c.a.createElement("div",{className:"list__pokemon"},c.a.createElement("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(t,".png"),alt:"pokemon_img",className:"list__pokemon_img"}),c.a.createElement("span",{className:"list__pokemon_name"},a),null===i?c.a.createElement("button",{onClick:function(){return l.apply(this,arguments)},className:"list__properties_loadInfo"},"get info"):c.a.createElement(d,{height:i.height,weight:i.weight}))}a(58);function v(){var e=Object(s.f)().page;return c.a.createElement("div",{className:"pagination"},e>=1&&c.a.createElement(i.b,{to:"/catalog/".concat(Number(e)-1),className:"pagination__prev"},"previous"),c.a.createElement(i.b,{to:"/catalog/".concat(Number(e)+1),className:"pagination__next"},"next"))}a(64);function E(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],o=t[1],r=Object(s.f)().page;return Object(n.useEffect)((function(){(function(e){var t=5*e;return g()("https://pokeapi.co/api/v2/pokemon?offset=".concat(t,"&limit=").concat(5)).then((function(e){return e.data.results.map((function(e){return function(e){var t=e.url.slice(34,-1);return{name:e.name,id:t}}(e)}))}))})(r).then((function(e){o((function(t){return[].concat(Object(l.a)(t),Object(l.a)(e))}))}))}),[r]),c.a.createElement("div",{className:"list__wrapper"},c.a.createElement(v,null),a.map((function(e){return c.a.createElement(_,{key:e.id,id:e.id,name:e.name})})))}a(65);var b=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(i.a,{basename:"/pokemons-info"},c.a.createElement(s.b,{exact:!0,path:"/"},c.a.createElement(s.a,{to:"/catalog/0"})),c.a.createElement(s.b,{path:"/catalog/:page",component:E})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.8c20882e.chunk.js.map