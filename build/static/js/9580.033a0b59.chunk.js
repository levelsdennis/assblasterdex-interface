"use strict";(self.webpackChunkassblasterdex_interface=self.webpackChunkassblasterdex_interface||[]).push([[9580],{9580:function(e){e.exports=function({mustBeMetaMask:e=!1,silent:t=!1,timeout:o=3e3}={}){!function(){if("boolean"!=typeof e)throw new Error("@metamask/detect-provider: Expected option 'mustBeMetaMask' to be a boolean.");if("boolean"!=typeof t)throw new Error("@metamask/detect-provider: Expected option 'silent' to be a boolean.");if("number"!=typeof o)throw new Error("@metamask/detect-provider: Expected option 'timeout' to be a number.")}();let n=!1;return new Promise((r=>{function i(){if(n)return;n=!0,window.removeEventListener("ethereum#initialized",i);const{ethereum:o}=window;if(!o||e&&!o.isMetaMask){const n=e&&o?"Non-MetaMask window.ethereum detected.":"Unable to detect window.ethereum.";!t&&console.error("@metamask/detect-provider:",n),r(null)}else r(o)}window.ethereum?i():(window.addEventListener("ethereum#initialized",i,{once:!0}),setTimeout((()=>{i()}),o))}))}}}]);
//# sourceMappingURL=9580.033a0b59.chunk.js.map