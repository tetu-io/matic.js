(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{244:function(t,e,n){"use strict";n.r(e);var r={components:{Layout:n(173).a}},o=n(14),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",{attrs:{title:"withdrawExitFasterMany erc721 plasma  ",description:"Get started with maticjs",keywords:"plasma client, erc721, withdrawExitFasterMany, polygon, sdk",contentSrc:"/home/runner/work/matic.js/matic.js/docs/content/docs/plasma/erc721/withdraw-exit-faster-many.md"}},[n("h1",{attrs:{id:"withdrawexitfastermany"}},[t._v("withdrawExitFasterMany")]),t._v(" "),n("p",[n("code",[t._v("withdrawExitFasterMany")]),t._v(" method can be used to approve all tokens.")]),t._v(" "),n("p",[t._v("It is fast because it generates proof in backend. The backend can be configured with dedicated private rpc.")]),t._v(" "),n("p",[n("strong",[t._v("Note")]),t._v("- withdrawStart transaction must be checkpointed in order to exit the withdraw.")]),t._v(" "),n("pre",[n("code",[t._v("const erc721RootToken = plasmaClient.erc721(<root token address>, true);\n\nconst approveResult = await erc721RootToken.withdrawExitFasterMany(<burn tx hash>);\n\nconst txHash = await approveResult.getTransactionHash();\n\nconst txReceipt = await approveResult.getReceipt();\n")])])])}),[],!1,null,null,null);e.default=component.exports}}]);