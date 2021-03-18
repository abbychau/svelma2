import{S as t,i as o,s as e,c as $,a as n,j as s,f as r,n as a,m as l,o as c,p as i,r as p,d as f,Y as m,e as u,b as g,g as d,k as x,l as T,B as b,t as h,h as j}from"./client.1c2121b8.js";import{D as w}from"./DocHeader.dc8df963.js";import{E as B}from"./Example.7287af40.js";import{J as y}from"./JSDoc.da2ff459.js";import"./Code.cf3eb26d.js";function v(t){let o;return{c(){o=h("Right")},l(t){o=j(t,"Right")},m(t,e){l(t,o,e)},d(t){t&&f(o)}}}function D(t){let o,e;return o=new b({props:{$$slots:{default:[v]},$$scope:{ctx:t}}}),{c(){$(o.$$.fragment)},l(t){s(o.$$.fragment,t)},m(t,$){a(o,t,$),e=!0},p(t,e){const $={};2&e&&($.$$scope={dirty:e,ctx:t}),o.$set($)},i(t){e||(c(o.$$.fragment,t),e=!0)},o(t){i(o.$$.fragment,t),e=!1},d(t){p(o,t)}}}function E(t){let o;return{c(){o=h("Top (default)")},l(t){o=j(t,"Top (default)")},m(t,e){l(t,o,e)},d(t){t&&f(o)}}}function L(t){let o,e;return o=new b({props:{$$slots:{default:[E]},$$scope:{ctx:t}}}),{c(){$(o.$$.fragment)},l(t){s(o.$$.fragment,t)},m(t,$){a(o,t,$),e=!0},p(t,e){const $={};2&e&&($.$$scope={dirty:e,ctx:t}),o.$set($)},i(t){e||(c(o.$$.fragment,t),e=!0)},o(t){i(o.$$.fragment,t),e=!1},d(t){p(o,t)}}}function R(t){let o;return{c(){o=h("Bottom")},l(t){o=j(t,"Bottom")},m(t,e){l(t,o,e)},d(t){t&&f(o)}}}function I(t){let o,e;return o=new b({props:{$$slots:{default:[R]},$$scope:{ctx:t}}}),{c(){$(o.$$.fragment)},l(t){s(o.$$.fragment,t)},m(t,$){a(o,t,$),e=!0},p(t,e){const $={};2&e&&($.$$scope={dirty:e,ctx:t}),o.$set($)},i(t){e||(c(o.$$.fragment,t),e=!0)},o(t){i(o.$$.fragment,t),e=!1},d(t){p(o,t)}}}function J(t){let o;return{c(){o=h("Left")},l(t){o=j(t,"Left")},m(t,e){l(t,o,e)},d(t){t&&f(o)}}}function S(t){let o,e;return o=new b({props:{$$slots:{default:[J]},$$scope:{ctx:t}}}),{c(){$(o.$$.fragment)},l(t){s(o.$$.fragment,t)},m(t,$){a(o,t,$),e=!0},p(t,e){const $={};2&e&&($.$$scope={dirty:e,ctx:t}),o.$set($)},i(t){e||(c(o.$$.fragment,t),e=!0)},o(t){i(o.$$.fragment,t),e=!1},d(t){p(o,t)}}}function V(t){let o,e,b,h,j,w,B,y,v,E;return b=new m({props:{label:"Tooltip right",position:"is-right",$$slots:{default:[D]},$$scope:{ctx:t}}}),j=new m({props:{label:"Tooltip top",$$slots:{default:[L]},$$scope:{ctx:t}}}),B=new m({props:{label:"Tooltip bottom",position:"is-bottom",$$slots:{default:[I]},$$scope:{ctx:t}}}),v=new m({props:{label:"Tooltip left",position:"is-left",$$slots:{default:[S]},$$scope:{ctx:t}}}),{c(){o=u("div"),e=u("div"),$(b.$$.fragment),h=n(),$(j.$$.fragment),w=n(),$(B.$$.fragment),y=n(),$(v.$$.fragment),this.h()},l(t){o=g(t,"DIV",{slot:!0});var $=d(o);e=g($,"DIV",{class:!0});var n=d(e);s(b.$$.fragment,n),h=r(n),s(j.$$.fragment,n),w=r(n),s(B.$$.fragment,n),y=r(n),s(v.$$.fragment,n),n.forEach(f),$.forEach(f),this.h()},h(){x(e,"class","buttons svelte-bmn9ng"),x(o,"slot","preview")},m(t,$){l(t,o,$),T(o,e),a(b,e,null),T(e,h),a(j,e,null),T(e,w),a(B,e,null),T(e,y),a(v,e,null),E=!0},p(t,o){const e={};2&o&&(e.$$scope={dirty:o,ctx:t}),b.$set(e);const $={};2&o&&($.$$scope={dirty:o,ctx:t}),j.$set($);const n={};2&o&&(n.$$scope={dirty:o,ctx:t}),B.$set(n);const s={};2&o&&(s.$$scope={dirty:o,ctx:t}),v.$set(s)},i(t){E||(c(b.$$.fragment,t),c(j.$$.fragment,t),c(B.$$.fragment,t),c(v.$$.fragment,t),E=!0)},o(t){i(b.$$.fragment,t),i(j.$$.fragment,t),i(B.$$.fragment,t),i(v.$$.fragment,t),E=!1},d(t){t&&f(o),p(b),p(j),p(B),p(v)}}}function k(t){let o,e,m,u,g,d;return o=new w({props:{title:"Tooltip",subtitle:"Display a brief helper text to your user"}}),m=new B({props:{code:'\n  <script>\n    import { Button, Tooltip} from \'svelma2\'\n  <\/script>\n\n  <Tooltip label="Tooltip right" position="is-right">\n    <Button>Right</Button>\n  </Tooltip>\n\n  <Tooltip label="Tooltip top">\n    <Button>Top (default)</Button>\n  </Tooltip>\n\n  <Tooltip label="Tooltip bottom" position="is-bottom">\n    <Button>Bottom</Button>\n  </Tooltip>\n\n  <Tooltip label="Tooltip left" position="is-left">\n    <Button>Left</Button>\n  </Tooltip>',$$slots:{preview:[V]},$$scope:{ctx:t}}}),g=new y({props:{jsdoc:t[0]}}),{c(){$(o.$$.fragment),e=n(),$(m.$$.fragment),u=n(),$(g.$$.fragment)},l(t){s(o.$$.fragment,t),e=r(t),s(m.$$.fragment,t),u=r(t),s(g.$$.fragment,t)},m(t,$){a(o,t,$),l(t,e,$),a(m,t,$),l(t,u,$),a(g,t,$),d=!0},p(t,[o]){const e={};2&o&&(e.$$scope={dirty:o,ctx:t}),m.$set(e);const $={};1&o&&($.jsdoc=t[0]),g.$set($)},i(t){d||(c(o.$$.fragment,t),c(m.$$.fragment,t),c(g.$$.fragment,t),d=!0)},o(t){i(o.$$.fragment,t),i(m.$$.fragment,t),i(g.$$.fragment,t),d=!1},d(t){p(o,t),t&&f(e),p(m,t),t&&f(u),p(g,t)}}}async function C(){const t=await this.fetch("components/tooltip.json");return{jsdoc:await t.json()}}function H(t,o,e){let{jsdoc:$}=o;return t.$$set=t=>{"jsdoc"in t&&e(0,$=t.jsdoc)},[$]}export default class extends t{constructor(t){super(),o(this,t,H,k,e,{jsdoc:0})}}export{C as preload};
