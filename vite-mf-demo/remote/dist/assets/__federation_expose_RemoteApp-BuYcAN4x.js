import{r as _}from"./index-CtmpQeow.js";var u={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i=_,m=Symbol.for("react.element"),a=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,y=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(t,e,s){var r,o={},p=null,f=null;s!==void 0&&(p=""+s),e.key!==void 0&&(p=""+e.key),e.ref!==void 0&&(f=e.ref);for(r in e)x.call(e,r)&&!c.hasOwnProperty(r)&&(o[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:m,type:t,key:p,ref:f,props:o,_owner:y.current}}n.Fragment=a;n.jsx=l;n.jsxs=l;u.exports=n;var d=u.exports;function v(){return d.jsx("h2",{style:{color:"green"},children:"Hello from Remote App (Vite)"})}export{v as default,d as j};
