!function(e){"undefined"!=typeof exports?e(exports):(self.hljs=e({}),"function"==typeof define&&define.amd&&define("hljs",[],function(){return self.hljs}))}(function(e){function n(e){return e.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function t(e){return e.nodeName.toLowerCase()}function r(e,n){var t=e&&e.exec(n);return t&&0==t.index}function a(e){return/^(no-?highlight|plain|text)$/i.test(e)}function i(e){var n,t,r,i=e.className+" ";if(i+=e.parentNode?e.parentNode.className:"",t=/\blang(?:uage)?-([\w-]+)\b/i.exec(i))return _(t[1])?t[1]:"no-highlight";for(i=i.split(/\s+/),n=0,r=i.length;n<r;n++)if(_(i[n])||a(i[n]))return i[n]}function s(e,n){var t,r={};for(t in e)r[t]=e[t];if(n)for(t in n)r[t]=n[t];return r}function o(e){var n=[];return function r(e,a){for(var i=e.firstChild;i;i=i.nextSibling)3==i.nodeType?a+=i.nodeValue.length:1==i.nodeType&&(n.push({event:"start",offset:a,node:i}),a=r(i,a),t(i).match(/br|hr|img|input/)||n.push({event:"stop",offset:a,node:i}));return a}(e,0),n}function l(e,r,a){function i(){return e.length&&r.length?e[0].offset!=r[0].offset?e[0].offset<r[0].offset?e:r:"start"==r[0].event?e:r:e.length?e:r}function s(e){function r(e){return" "+e.nodeName+'="'+n(e.value)+'"'}c+="<"+t(e)+Array.prototype.map.call(e.attributes,r).join("")+">"}function o(e){c+="</"+t(e)+">"}function l(e){("start"==e.event?s:o)(e.node)}for(var u=0,c="",g=[];e.length||r.length;){var f=i();if(c+=n(a.substr(u,f[0].offset-u)),u=f[0].offset,f==e){g.reverse().forEach(o);do l(f.splice(0,1)[0]),f=i();while(f==e&&f.length&&f[0].offset==u);g.reverse().forEach(s)}else"start"==f[0].event?g.push(f[0].node):g.pop(),l(f.splice(0,1)[0])}return c+n(a.substr(u))}function u(e){function n(e){return e&&e.source||e}function t(t,r){return new RegExp(n(t),"m"+(e.case_insensitive?"i":"")+(r?"g":""))}function r(a,i){if(!a.compiled){if(a.compiled=!0,a.keywords=a.keywords||a.beginKeywords,a.keywords){var o={},l=function(n,t){e.case_insensitive&&(t=t.toLowerCase()),t.split(" ").forEach(function(e){var t=e.split("|");o[t[0]]=[n,t[1]?Number(t[1]):1]})};"string"==typeof a.keywords?l("keyword",a.keywords):Object.keys(a.keywords).forEach(function(e){l(e,a.keywords[e])}),a.keywords=o}a.lexemesRe=t(a.lexemes||/\b\w+\b/,!0),i&&(a.beginKeywords&&(a.begin="\\b("+a.beginKeywords.split(" ").join("|")+")\\b"),a.begin||(a.begin=/\B|\b/),a.beginRe=t(a.begin),a.end||a.endsWithParent||(a.end=/\B|\b/),a.end&&(a.endRe=t(a.end)),a.terminator_end=n(a.end)||"",a.endsWithParent&&i.terminator_end&&(a.terminator_end+=(a.end?"|":"")+i.terminator_end)),a.illegal&&(a.illegalRe=t(a.illegal)),void 0===a.relevance&&(a.relevance=1),a.contains||(a.contains=[]);var u=[];a.contains.forEach(function(e){e.variants?e.variants.forEach(function(n){u.push(s(e,n))}):u.push("self"==e?a:e)}),a.contains=u,a.contains.forEach(function(e){r(e,a)}),a.starts&&r(a.starts,i);var c=a.contains.map(function(e){return e.beginKeywords?"\\.?("+e.begin+")\\.?":e.begin}).concat([a.terminator_end,a.illegal]).map(n).filter(Boolean);a.terminators=c.length?t(c.join("|"),!0):{exec:function(){return null}}}}r(e)}function c(e,t,a,i){function s(e,n){for(var t=0;t<n.contains.length;t++)if(r(n.contains[t].beginRe,e))return n.contains[t]}function o(e,n){if(r(e.endRe,n)){for(;e.endsParent&&e.parent;)e=e.parent;return e}if(e.endsWithParent)return o(e.parent,n)}function l(e,n){return!a&&r(n.illegalRe,e)}function f(e,n){var t=b.case_insensitive?n[0].toLowerCase():n[0];return e.keywords.hasOwnProperty(t)&&e.keywords[t]}function d(e,n,t,r){var a=r?"":N.classPrefix,i='<span class="'+a,s=t?"":"</span>";return i+=e+'">',i+n+s}function v(){if(!M.keywords)return n(y);var e="",t=0;M.lexemesRe.lastIndex=0;for(var r=M.lexemesRe.exec(y);r;){e+=n(y.substr(t,r.index-t));var a=f(M,r);a?(S+=a[1],e+=d(a[0],n(r[0]))):e+=n(r[0]),t=M.lexemesRe.lastIndex,r=M.lexemesRe.exec(y)}return e+n(y.substr(t))}function E(){var e="string"==typeof M.subLanguage;if(e&&!R[M.subLanguage])return n(y);var t=e?c(M.subLanguage,y,!0,x[M.subLanguage]):g(y,M.subLanguage.length?M.subLanguage:void 0);return M.relevance>0&&(S+=t.relevance),e&&(x[M.subLanguage]=t.top),d(t.language,t.value,!1,!0)}function h(){return void 0!==M.subLanguage?E():v()}function m(e,t){var r=e.className?d(e.className,"",!0):"";e.returnBegin?(O+=r,y=""):e.excludeBegin?(O+=n(t)+r,y=""):(O+=r,y=t),M=Object.create(e,{parent:{value:M}})}function p(e,t){if(y+=e,void 0===t)return O+=h(),0;var r=s(t,M);if(r)return O+=h(),m(r,t),r.returnBegin?0:t.length;var a=o(M,t);if(a){var i=M;i.returnEnd||i.excludeEnd||(y+=t),O+=h();do M.className&&(O+="</span>"),S+=M.relevance,M=M.parent;while(M!=a.parent);return i.excludeEnd&&(O+=n(t)),y="",a.starts&&m(a.starts,""),i.returnEnd?0:t.length}if(l(t,M))throw new Error('Illegal lexeme "'+t+'" for mode "'+(M.className||"<unnamed>")+'"');return y+=t,t.length||1}var b=_(e);if(!b)throw new Error('Unknown language: "'+e+'"');u(b);var w,M=i||b,x={},O="";for(w=M;w!=b;w=w.parent)w.className&&(O=d(w.className,"",!0)+O);var y="",S=0;try{for(var C,L,A=0;;){if(M.terminators.lastIndex=A,C=M.terminators.exec(t),!C)break;L=p(t.substr(A,C.index-A),C[0]),A=C.index+L}for(p(t.substr(A)),w=M;w.parent;w=w.parent)w.className&&(O+="</span>");return{relevance:S,value:O,language:e,top:M}}catch(B){if(B.message.indexOf("Illegal")!=-1)return{relevance:0,value:n(t)};throw B}}function g(e,t){t=t||N.languages||Object.keys(R);var r={relevance:0,value:n(e)},a=r;return t.forEach(function(n){if(_(n)){var t=c(n,e,!1);t.language=n,t.relevance>a.relevance&&(a=t),t.relevance>r.relevance&&(a=r,r=t)}}),a.language&&(r.second_best=a),r}function f(e){return N.tabReplace&&(e=e.replace(/^((<[^>]+>|\t)+)/gm,function(e,n){return n.replace(/\t/g,N.tabReplace)})),N.useBR&&(e=e.replace(/\n/g,"<br>")),e}function d(e,n,t){var r=n?w[n]:t,a=[e.trim()];return e.match(/\bhljs\b/)||a.push("hljs"),e.indexOf(r)===-1&&a.push(r),a.join(" ").trim()}function v(e){var n=i(e);if(!a(n)){var t;N.useBR?(t=document.createElementNS("http://www.w3.org/1999/xhtml","div"),t.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):t=e;var r=t.textContent,s=n?c(n,r,!0):g(r),u=o(t);if(u.length){var v=document.createElementNS("http://www.w3.org/1999/xhtml","div");v.innerHTML=s.value,s.value=l(u,o(v),r)}s.value=f(s.value),e.innerHTML=s.value,e.className=d(e.className,n,s.language),e.result={language:s.language,re:s.relevance},s.second_best&&(e.second_best={language:s.second_best.language,re:s.second_best.relevance})}}function E(e){N=s(N,e)}function h(){if(!h.called){h.called=!0;var e=document.querySelectorAll("pre code");Array.prototype.forEach.call(e,v)}}function m(){addEventListener("DOMContentLoaded",h,!1),addEventListener("load",h,!1)}function p(n,t){var r=R[n]=t(e);r.aliases&&r.aliases.forEach(function(e){w[e]=n})}function b(){return Object.keys(R)}function _(e){return e=(e||"").toLowerCase(),R[e]||R[w[e]]}var N={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},R={},w={};return e.highlight=c,e.highlightAuto=g,e.fixMarkup=f,e.highlightBlock=v,e.configure=E,e.initHighlighting=h,e.initHighlightingOnLoad=m,e.registerLanguage=p,e.listLanguages=b,e.getLanguage=_,e.inherit=s,e.IDENT_RE="[a-zA-Z]\\w*",e.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*",e.NUMBER_RE="\\b\\d+(\\.\\d+)?",e.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BINARY_NUMBER_RE="\\b(0b[01]+)",e.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BACKSLASH_ESCAPE={begin:"\\\\[\\s\\S]",relevance:0},e.APOS_STRING_MODE={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.PHRASAL_WORDS_MODE={begin:/\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/},e.COMMENT=function(n,t,r){var a=e.inherit({className:"comment",begin:n,end:t,contains:[]},r||{});return a.contains.push(e.PHRASAL_WORDS_MODE),a.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0}),a},e.C_LINE_COMMENT_MODE=e.COMMENT("//","$"),e.C_BLOCK_COMMENT_MODE=e.COMMENT("/\\*","\\*/"),e.HASH_COMMENT_MODE=e.COMMENT("#","$"),e.NUMBER_MODE={className:"number",begin:e.NUMBER_RE,relevance:0},e.C_NUMBER_MODE={className:"number",begin:e.C_NUMBER_RE,relevance:0},e.BINARY_NUMBER_MODE={className:"number",begin:e.BINARY_NUMBER_RE,relevance:0},e.CSS_NUMBER_MODE={className:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},e.REGEXP_MODE={className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[e.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[e.BACKSLASH_ESCAPE]}]},e.TITLE_MODE={className:"title",begin:e.IDENT_RE,relevance:0},e.UNDERSCORE_TITLE_MODE={className:"title",begin:e.UNDERSCORE_IDENT_RE,relevance:0},e});