(this["webpackJsonpuser-directory"]=this["webpackJsonpuser-directory"]||[]).push([[0],{17:function(e,t,a){e.exports=a(41)},22:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(14),l=a.n(r),o=(a(22),a(2)),u=function(e){var t=e.users,a=e.updateUsers,r=Object(n.useState)(""),l=Object(o.a)(r,2),u=l[0],s=l[1];return Object(n.useEffect)((function(){var e=""===u?t:t.filter((function(e){return e.name.first.toLowerCase().indexOf(u.toLowerCase())>=0}));a(e)}),[u,t]),c.a.createElement("input",{value:u,onChange:function(e){return s(e.target.value)}})},s=a(16),i=function(e){var t=e.users,a=Object(n.useState)([]),r=Object(o.a)(a,2),l=r[0],u=r[1];return Object(n.useEffect)((function(){return u(t)}),[t]),c.a.createElement("div",null,c.a.createElement("table",{className:"table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"title"),c.a.createElement("th",{scope:"col",onClick:function(){var e=Object(s.a)(t).sort((function(e,t){var a=e.name.first,n=t.name.first;return a<n?-1:a>n?1:0}));u(e)}},"First"),c.a.createElement("th",{scope:"col"},"Last"),c.a.createElement("th",{scope:"col"},"gender"),c.a.createElement("th",{scope:"col"},"email"),c.a.createElement("th",{scope:"col"},"phone"),c.a.createElement("th",{scope:"col"},"cell"),c.a.createElement("th",{scope:"col"},"city"),c.a.createElement("th",{scope:"col"},"state"),c.a.createElement("th",{scope:"col"},"country"),c.a.createElement("th",{scope:"col"},"postcode"),c.a.createElement("th",{scope:"col"},"picture"))),c.a.createElement("tbody",null,l.map((function(e){var t=e.location,a=t.city,n=t.state,r=t.country,l=t.postcode,o=e.picture.thumbnail,u=e.cell,s=e.phone,i=e.gender,m=e.email,E=e.name,d=E.first,p=E.last,h=E.title;return c.a.createElement("tr",{key:m},c.a.createElement("td",null,h),c.a.createElement("th",null,d),c.a.createElement("td",null,p),c.a.createElement("td",null,i),c.a.createElement("td",null,m),c.a.createElement("td",null,s),c.a.createElement("td",null,u),c.a.createElement("td",null,a),c.a.createElement("td",null,n),c.a.createElement("td",null,r),c.a.createElement("td",null,l),c.a.createElement("td",null,c.a.createElement("img",{src:o})),c.a.createElement("td",null))})))))},m=a(15),E=a.n(m);a(40);var d=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)([]),s=Object(o.a)(l,2),m=s[0],d=s[1];return Object(n.useEffect)((function(){E.a.get("https://randomuser.me/api/?results=200&nat=us").then((function(e){var t=e.data.results;return r(t)}))}),[]),c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Employee Directory"),c.a.createElement("p",null,"Filter Directory by First Name"),c.a.createElement(u,{users:a,updateUsers:d}),c.a.createElement(i,{users:m}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.317664b7.chunk.js.map