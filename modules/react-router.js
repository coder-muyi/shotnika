/**
 * React Router v6.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("history")):"function"==typeof define&&define.amd?define(["exports","react","history"],t):t((e=e||self).ReactRouter={},e.React,e.HistoryLibrary)}(this,(function(e,t,n){"use strict";function a(e,t){if(!e)throw new Error(t)}const r=t.createContext(null),i=t.createContext(null),l=t.createContext({outlet:null,matches:[]});function s(e){return m(e.context)}function o(e){a(!1)}function u(e){let{basename:l="/",children:s=null,location:o,navigationType:u=n.Action.Pop,navigator:h,static:p=!1}=e;c()&&a(!1);let f=N(l),m=t.useMemo((()=>({basename:f,navigator:h,static:p})),[f,h,p]);"string"==typeof o&&(o=n.parsePath(o));let{pathname:d="/",search:v="",hash:g="",state:x=null,key:y="default"}=o,C=t.useMemo((()=>{let e=W(d,f);return null==e?null:{pathname:e,search:v,hash:g,state:x,key:y}}),[f,d,v,g,x,y]);return null==C?null:t.createElement(r.Provider,{value:m},t.createElement(i.Provider,{children:s,value:{location:C,navigationType:u}}))}function c(){return null!=t.useContext(i)}function h(){return c()||a(!1),t.useContext(i).location}function p(){c()||a(!1);let{basename:e,navigator:n}=t.useContext(r),{matches:i}=t.useContext(l),{pathname:s}=h(),o=JSON.stringify(i.map((e=>e.pathnameBase))),u=t.useRef(!1);return t.useEffect((()=>{u.current=!0})),t.useCallback((function(t,a){if(void 0===a&&(a={}),!u.current)return;if("number"==typeof t)return void n.go(t);let r=M(t,JSON.parse(o),s);"/"!==e&&(r.pathname=B([e,r.pathname])),(a.replace?n.replace:n.push)(r,a.state)}),[e,n,o,s])}const f=t.createContext(null);function m(e){let n=t.useContext(l).outlet;return n?t.createElement(f.Provider,{value:e},n):n}function d(e){let{matches:n}=t.useContext(l),{pathname:a}=h(),r=JSON.stringify(n.map((e=>e.pathnameBase)));return t.useMemo((()=>M(e,JSON.parse(r),a)),[e,r,a])}function v(e,r){c()||a(!1);let i,{matches:s}=t.useContext(l),o=s[s.length-1],u=o?o.params:{},p=(o&&o.pathname,o?o.pathnameBase:"/"),f=(o&&o.route,h());if(r){var m;let e="string"==typeof r?n.parsePath(r):r;"/"===p||(null==(m=e.pathname)?void 0:m.startsWith(p))||a(!1),i=e}else i=f;let d=i.pathname||"/",v=x(e,{pathname:"/"===p?d:d.slice(p.length)||"/"});return S(v&&v.map((e=>Object.assign({},e,{params:Object.assign({},u,e.params),pathname:B([p,e.pathname]),pathnameBase:"/"===e.pathnameBase?p:B([p,e.pathnameBase])}))),s)}function g(e){let n=[];return t.Children.forEach(e,(e=>{if(!t.isValidElement(e))return;if(e.type===t.Fragment)return void n.push.apply(n,g(e.props.children));e.type!==o&&a(!1);let r={caseSensitive:e.props.caseSensitive,element:e.props.element,index:e.props.index,path:e.props.path};e.props.children&&(r.children=g(e.props.children)),n.push(r)})),n}function x(e,t,a){void 0===a&&(a="/");let r=W(("string"==typeof t?n.parsePath(t):t).pathname||"/",a);if(null==r)return null;let i=y(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){return e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]))?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(i);let l=null;for(let e=0;null==l&&e<i.length;++e)l=R(i[e],r);return l}function y(e,t,n,r){return void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r=""),e.forEach(((e,i)=>{let l={relativePath:e.path||"",caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};l.relativePath.startsWith("/")&&(l.relativePath.startsWith(r)||a(!1),l.relativePath=l.relativePath.slice(r.length));let s=B([r,l.relativePath]),o=n.concat(l);e.children&&e.children.length>0&&(!0===e.index&&a(!1),y(e.children,t,o,s)),(null!=e.path||e.index)&&t.push({path:s,score:E(s,e.index),routesMeta:o})})),t}const C=/^:\w+$/,P=e=>"*"===e;function E(e,t){let n=e.split("/"),a=n.length;return n.some(P)&&(a+=-2),t&&(a+=2),n.filter((e=>!P(e))).reduce(((e,t)=>e+(C.test(t)?3:""===t?1:10)),a)}function R(e,t){let{routesMeta:n}=e,a={},r="/",i=[];for(let e=0;e<n.length;++e){let l=n[e],s=e===n.length-1,o="/"===r?t:t.slice(r.length)||"/",u=b({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},o);if(!u)return null;Object.assign(a,u.params);let c=l.route;i.push({params:a,pathname:B([r,u.pathname]),pathnameBase:B([r,u.pathnameBase]),route:c}),"/"!==u.pathnameBase&&(r=B([r,u.pathnameBase]))}return i}function S(e,n){return void 0===n&&(n=[]),null==e?null:e.reduceRight(((a,r,i)=>t.createElement(l.Provider,{children:void 0!==r.route.element?r.route.element:t.createElement(s,null),value:{outlet:a,matches:n.concat(e.slice(0,i+1))}})),null)}function b(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);let a=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,((e,t)=>(a.push(t),"([^\\/]+)")));e.endsWith("*")?(a.push("*"),r+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):r+=n?"\\/*$":"(?:\\b|\\/|$)";return[new RegExp(r,t?void 0:"i"),a]}(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let i=r[0],l=i.replace(/(.)\/+$/,"$1"),s=r.slice(1);return{params:a.reduce(((e,t,n)=>{if("*"===t){let e=s[n]||"";l=i.slice(0,i.length-e.length).replace(/(.)\/+$/,"$1")}return e[t]=function(e,t){try{return decodeURIComponent(e)}catch(t){return e}}(s[n]||""),e}),{}),pathname:i,pathnameBase:l,pattern:e}}function $(e,t){void 0===t&&(t="/");let{pathname:a,search:r="",hash:i=""}="string"==typeof e?n.parsePath(e):e,l=a?a.startsWith("/")?a:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(a,t):t;return{pathname:l,search:O(r),hash:j(i)}}function M(e,t,a){let r,i="string"==typeof e?n.parsePath(e):e,l=""===e||""===i.pathname?"/":i.pathname;if(null==l)r=a;else{let e=t.length-1;if(l.startsWith("..")){let t=l.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}r=e>=0?t[e]:"/"}let s=$(i,r);return l&&"/"!==l&&l.endsWith("/")&&!s.pathname.endsWith("/")&&(s.pathname+="/"),s}function W(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=e.charAt(t.length);return n&&"/"!==n?null:e.slice(t.length)||"/"}const B=e=>e.join("/").replace(/\/\/+/g,"/"),N=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),O=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",j=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";e.MemoryRouter=function(e){let{basename:a,children:r,initialEntries:i,initialIndex:l}=e,s=t.useRef();null==s.current&&(s.current=n.createMemoryHistory({initialEntries:i,initialIndex:l}));let o=s.current,[c,h]=t.useState({action:o.action,location:o.location});return t.useLayoutEffect((()=>o.listen(h)),[o]),t.createElement(u,{basename:a,children:r,location:c.location,navigationType:c.action,navigator:o})},e.Navigate=function(e){let{to:n,replace:r,state:i}=e;c()||a(!1);let l=p();return t.useEffect((()=>{l(n,{replace:r,state:i})})),null},e.Outlet=s,e.Route=o,e.Router=u,e.Routes=function(e){let{children:t,location:n}=e;return v(g(t),n)},e.UNSAFE_LocationContext=i,e.UNSAFE_NavigationContext=r,e.UNSAFE_RouteContext=l,e.createRoutesFromChildren=g,e.generatePath=function(e,t){return void 0===t&&(t={}),e.replace(/:(\w+)/g,((e,n)=>(null==t[n]&&a(!1),t[n]))).replace(/\/*\*$/,(e=>null==t["*"]?"":t["*"].replace(/^\/*/,"/")))},e.matchPath=b,e.matchRoutes=x,e.renderMatches=function(e){return S(e)},e.resolvePath=$,e.useHref=function(e){c()||a(!1);let{basename:i,navigator:l}=t.useContext(r),{hash:s,pathname:o,search:u}=d(e),h=o;if("/"!==i){let t=function(e){return""===e||""===e.pathname?"/":"string"==typeof e?n.parsePath(e).pathname:e.pathname}(e),a=null!=t&&t.endsWith("/");h="/"===o?i+(a?"/":""):B([i,o])}return l.createHref({pathname:h,search:u,hash:s})},e.useInRouterContext=c,e.useLocation=h,e.useMatch=function(e){c()||a(!1);let{pathname:n}=h();return t.useMemo((()=>b(e,n)),[n,e])},e.useNavigate=p,e.useNavigationType=function(){return t.useContext(i).navigationType},e.useOutlet=m,e.useOutletContext=function(){return t.useContext(f)},e.useParams=function(){let{matches:e}=t.useContext(l),n=e[e.length-1];return n?n.params:{}},e.useResolvedPath=d,e.useRoutes=v,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=react-router.production.min.js.map
