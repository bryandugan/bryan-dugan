(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"4Brf":function(t,e,n){"use strict";var r=n("I+eb"),o=n("g6v/"),i=n("2oRo"),a=n("4zBA"),s=n("Gi26"),c=n("Fib7"),u=n("OpvP"),f=n("V37c"),p=n("m/L8").f,l=n("6JNq"),g=i.Symbol,d=g&&g.prototype;if(o&&c(g)&&(!("description"in d)||void 0!==g().description)){var m={},y=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:f(arguments[0]),e=u(d,this)?new g(t):void 0===t?g():g(t);return""===t&&(m[e]=!0),e};l(y,g),y.prototype=d,d.constructor=y;var b="Symbol(test)"==String(g("test")),h=a(d.toString),v=a(d.valueOf),w=/^Symbol\((.*)\)[^)]+$/,O=a("".replace),S=a("".slice);p(d,"description",{configurable:!0,get:function(){var t=v(this),e=h(t);if(s(m,t))return"";var n=b?S(e,7,-1):O(e,w,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:y})}},"5Tg+":function(t,e,n){var r=n("tiKp");e.f=r},"8tYL":function(t,e,n){"use strict";n.r(e);n("pNMO"),n("4Brf");var r=n("UmD/"),o=n("/S3s"),i=n("94NO"),a=n("F5n6"),s=n("BBiw"),c={components:{PostItem:i.a,Pagination:a.a,Footer:o.a,Header:s.a},metaInfo:function(){return{title:this.title,meta:[{key:"description",name:"description",content:this.description},{property:"og:type",content:"website"},{property:"og:title",content:this.title},{property:"og:description",content:this.description},{property:"og:url",content:this.$static.metadata.siteUrl},{property:"og:image",content:this.ogImageUrl},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:this.$static.metadata.siteName},{name:"twitter:description",content:this.description},{name:"twitter:site",content:"@bryandugan"},{name:"twitter:creator",content:"@bryandugan"},{name:"twitter:image",content:this.ogImageUrl}]}},computed:{config:function(){return r.a},title:function(){return"Blog"},description:function(){return"A collection of articles on design, development, and bettering yourself."},ogImageUrl:function(){return"".concat(this.config.siteUrl,"/images/sharing-card.png")}}},u=n("KHd+"),f=null,p=n("Kw5r"),l=p.a.config.optionMergeStrategies.computed,g={metadata:{siteName:"UX designer & developer",siteUrl:"https://bryandugan.com"}},d=function(t){var e=t.options;e.__staticData?e.__staticData.data=g:(e.__staticData=p.a.observable({data:g}),e.computed=l({$static:function(){return e.__staticData.data}},e.computed))},m=Object(u.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("layout",{staticClass:"flex flex-col h-screen"},[e("header",[e("Header")],1),e("main",{staticClass:"flex-1 bg-gray-100"},[e("section",this._l(this.$page.posts.edges,(function(t){return e("post-item",{key:t.node.id,attrs:{post:t.node}})})),1),this.$page.posts.pageInfo.totalPages>1?e("pagination",{attrs:{info:this.$page.posts.pageInfo}}):this._e()],1),e("footer",[e("Footer")],1)])}),[],!1,null,null,null);"function"==typeof f&&f(m),"function"==typeof d&&d(m);e.default=m.exports},"BX/b":function(t,e,n){var r=n("xrYK"),o=n("/GqU"),i=n("JBy8").f,a=n("82ph"),s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return s&&"Window"==r(t)?function(t){try{return i(t)}catch(t){return a(s)}}(t):i(o(t))}},Qo9l:function(t,e,n){var r=n("2oRo");t.exports=r},"dG/n":function(t,e,n){var r=n("Qo9l"),o=n("Gi26"),i=n("5Tg+"),a=n("m/L8").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||a(e,t,{value:i.f(t)})}},pNMO:function(t,e,n){"use strict";var r=n("I+eb"),o=n("2oRo"),i=n("0GbY"),a=n("K6Rb"),s=n("xluM"),c=n("4zBA"),u=n("xDBR"),f=n("g6v/"),p=n("STAE"),l=n("0Dky"),g=n("Gi26"),d=n("6LWA"),m=n("Fib7"),y=n("hh1v"),b=n("OpvP"),h=n("2bX/"),v=n("glrk"),w=n("ewvW"),O=n("/GqU"),S=n("oEtG"),B=n("V37c"),P=n("XGwC"),_=n("fHMY"),I=n("33Wh"),N=n("JBy8"),j=n("BX/b"),x=n("dBg+"),G=n("Bs8V"),U=n("m/L8"),k=n("0eef"),$=n("82ph"),D=n("busE"),E=n("VpIT"),F=n("93I0"),J=n("0BK2"),K=n("kOOl"),R=n("tiKp"),T=n("5Tg+"),A=n("dG/n"),L=n("1E5z"),M=n("afO8"),X=n("tycR").forEach,C=F("hidden"),H=R("toPrimitive"),V=M.set,W=M.getterFor("Symbol"),Y=Object.prototype,q=o.Symbol,z=q&&q.prototype,Q=o.TypeError,Z=o.QObject,tt=i("JSON","stringify"),et=G.f,nt=U.f,rt=j.f,ot=k.f,it=c([].push),at=E("symbols"),st=E("op-symbols"),ct=E("string-to-symbol-registry"),ut=E("symbol-to-string-registry"),ft=E("wks"),pt=!Z||!Z.prototype||!Z.prototype.findChild,lt=f&&l((function(){return 7!=_(nt({},"a",{get:function(){return nt(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=et(Y,e);r&&delete Y[e],nt(t,e,n),r&&t!==Y&&nt(Y,e,r)}:nt,gt=function(t,e){var n=at[t]=_(z);return V(n,{type:"Symbol",tag:t,description:e}),f||(n.description=e),n},dt=function(t,e,n){t===Y&&dt(st,e,n),v(t);var r=S(e);return v(n),g(at,r)?(n.enumerable?(g(t,C)&&t[C][r]&&(t[C][r]=!1),n=_(n,{enumerable:P(0,!1)})):(g(t,C)||nt(t,C,P(1,{})),t[C][r]=!0),lt(t,r,n)):nt(t,r,n)},mt=function(t,e){v(t);var n=O(e),r=I(n).concat(vt(n));return X(r,(function(e){f&&!s(yt,n,e)||dt(t,e,n[e])})),t},yt=function(t){var e=S(t),n=s(ot,this,e);return!(this===Y&&g(at,e)&&!g(st,e))&&(!(n||!g(this,e)||!g(at,e)||g(this,C)&&this[C][e])||n)},bt=function(t,e){var n=O(t),r=S(e);if(n!==Y||!g(at,r)||g(st,r)){var o=et(n,r);return!o||!g(at,r)||g(n,C)&&n[C][r]||(o.enumerable=!0),o}},ht=function(t){var e=rt(O(t)),n=[];return X(e,(function(t){g(at,t)||g(J,t)||it(n,t)})),n},vt=function(t){var e=t===Y,n=rt(e?st:O(t)),r=[];return X(n,(function(t){!g(at,t)||e&&!g(Y,t)||it(r,at[t])})),r};(p||(D(z=(q=function(){if(b(z,this))throw Q("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?B(arguments[0]):void 0,e=K(t),n=function(t){this===Y&&s(n,st,t),g(this,C)&&g(this[C],e)&&(this[C][e]=!1),lt(this,e,P(1,t))};return f&&pt&&lt(Y,e,{configurable:!0,set:n}),gt(e,t)}).prototype,"toString",(function(){return W(this).tag})),D(q,"withoutSetter",(function(t){return gt(K(t),t)})),k.f=yt,U.f=dt,G.f=bt,N.f=j.f=ht,x.f=vt,T.f=function(t){return gt(R(t),t)},f&&(nt(z,"description",{configurable:!0,get:function(){return W(this).description}}),u||D(Y,"propertyIsEnumerable",yt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!p,sham:!p},{Symbol:q}),X(I(ft),(function(t){A(t)})),r({target:"Symbol",stat:!0,forced:!p},{for:function(t){var e=B(t);if(g(ct,e))return ct[e];var n=q(e);return ct[e]=n,ut[n]=e,n},keyFor:function(t){if(!h(t))throw Q(t+" is not a symbol");if(g(ut,t))return ut[t]},useSetter:function(){pt=!0},useSimple:function(){pt=!1}}),r({target:"Object",stat:!0,forced:!p,sham:!f},{create:function(t,e){return void 0===e?_(t):mt(_(t),e)},defineProperty:dt,defineProperties:mt,getOwnPropertyDescriptor:bt}),r({target:"Object",stat:!0,forced:!p},{getOwnPropertyNames:ht,getOwnPropertySymbols:vt}),r({target:"Object",stat:!0,forced:l((function(){x.f(1)}))},{getOwnPropertySymbols:function(t){return x.f(w(t))}}),tt)&&r({target:"JSON",stat:!0,forced:!p||l((function(){var t=q();return"[null]"!=tt([t])||"{}"!=tt({a:t})||"{}"!=tt(Object(t))}))},{stringify:function(t,e,n){var r=$(arguments),o=e;if((y(e)||void 0!==t)&&!h(t))return d(e)||(e=function(t,e){if(m(o)&&(e=s(o,this,t,e)),!h(e))return e}),r[1]=e,a(tt,null,r)}});if(!z[H]){var wt=z.valueOf;D(z,H,(function(t){return s(wt,this)}))}L(q,"Symbol"),J[C]=!0}}]);