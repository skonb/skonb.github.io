(function(e){function t(t){for(var c,o,l=t[0],i=t[1],s=t[2],u=0,b=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&b.push(a[o][0]),a[o]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);d&&d(t);while(b.length)b.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],c=!0,l=1;l<n.length;l++){var i=n[l];0!==a[i]&&(c=!1)}c&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var c={},a={app:0},r=[];function o(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=c,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(n,c,function(t){return e[t]}.bind(null,c));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var d=i;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"1d26":function(e,t,n){"use strict";n("997f")},"22bd":function(e,t,n){},"997f":function(e,t,n){},"9f4b":function(e,t,n){"use strict";n("f3b8")},a80b:function(e,t,n){"use strict";n("22bd")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),a={id:"nav"},r=Object(c["f"])("Top"),o=Object(c["f"])(" | "),l=Object(c["f"])("Achievement"),i=Object(c["f"])(" | "),s=Object(c["f"])("Game_Corner");function d(e,t,n,d,u,b){var p=Object(c["v"])("router-link"),m=Object(c["v"])("router-view");return Object(c["q"])(),Object(c["d"])("div",null,[Object(c["g"])("div",a,[Object(c["g"])(p,{to:"/"},{default:Object(c["B"])((function(){return[r]})),_:1}),o,Object(c["g"])(p,{to:"/achievement"},{default:Object(c["B"])((function(){return[l]})),_:1}),i,Object(c["g"])(p,{to:"/game"},{default:Object(c["B"])((function(){return[s]})),_:1})]),Object(c["g"])(m)])}n("f9e3"),n("2dd8");var u=Object(c["h"])({});n("a80b");u.render=d;var b=u,p=n("6c02"),m={id:"app",class:"container"},v=Object(c["e"])('<div class="col-sm-12"><div class="jumbotron"><h1 class="display-4">Welcome!</h1><p class="lead">ポートフォリオ・ページへようこそ！</p><hr class="my-4"><p class="text-align:left;">このページはポートフォリオとして制作したウェブページです．フロントエンドデザインには，Bootstrapフレームワークを含めたCSSを用いました．また，inputフォームを活用するため，JavaScript・Vueを使い，簡単なコメントコーナーも作ってみました．良ければ最後まで見ていってください．よろしくお願いいたします．</p></div></div><div class="col-sm-12 fade-in-bottom"> 下からふわっと現れるアニメーション文字テスト </div>',2);function f(e,t,n,a,r,o){return Object(c["q"])(),Object(c["d"])("div",m,[v])}var g=Object(c["h"])({e:"#app",methods:{handleScroll:function(e,t){return window.scrollY>50&&t.setAttribute("style","opacity: 1; transform: translate3d(0, -10px, 0)"),window.scrollY>100}}});n("1d26");g.render=f;var h=g,j=(n("b0c0"),{id:"Top",class:"top"}),O={class:"container"},y={class:"row"},w=Object(c["e"])('<div class="col-12"><h2>業績</h2></div><div class="col-12 col-lg-4"><div class="card"><div class="card-body"><h3 class="card-title"><span class="orange_ur"> 名南ネットワークでの<br>アルバイト </span></h3><p class="card-text"> 期間 : 2017年7月~現在<br> 概要 : 学部1年次から，株式会社名南ネットワークにて，Webエンジニアとしてアルバイトをしています．業務では，フロントエンドのHTML5，jQuery，BootStrapを用いてUI/UXをデザインしたり，JavaEEのバックエンド・サーバープログラムを記述するほか，AWSを用いたクラウドインフラに携わることもあります． </p></div></div></div><div class="col-12 col-lg-4"><div class="card"><div class="card-body"><h3 class="card-title"><span class="orange_ur"> スタートアップ立ち上げ </span></h3><p class="card-text"> 期間 : 2019年4月~8月<br> 概要 : 学部3年次に，自身の先輩のスタートアップ起業に協力しました．主にフロントエンドエンジニアとして，Angularフレームワークを用いたTypeScriptによる開発に携わりました．開発を通じて，単にお金を稼ぐために開発を行うのではなく，夢や目標を持って事業に取り組むことの価値を感じました． </p></div></div></div><div class="col-12 col-lg-4"><div class="card"><div class="card-body"><h3 class="card-title"><span class="orange_ur"> プログラミングサークルでの活動 </span></h3><p class="card-text"> 期間 : 2017年5月~2019年3月<br> 概要 : 学部2年次から，スマートフォンアプリ開発サークルに所属し，活動していました．サークル内では，文化祭発表用の成果物としてAndroidアプリ開発の開発・チームの指揮を行いました． </p></div></div></div>',4),_={class:"col-12"},S=Object(c["g"])("h3",null,[Object(c["g"])("span",{class:"orange_ur"}," コメントコーナー ")],-1),x=Object(c["g"])("br",null,null,-1),k={id:"comment-corner"},C=Object(c["f"])(" お名前 "),P={class:"form-group"},R=Object(c["f"])(" コメント "),T={class:"form-group"},M=Object(c["g"])("small",{id:"commentHelp",class:"form-text text-muted"},"感想・質問など，ご自由にコメントください．",-1),q=Object(c["g"])("br",null,null,-1);function A(e,t,n,a,r,o){return Object(c["q"])(),Object(c["d"])("div",j,[Object(c["g"])("div",O,[Object(c["g"])("div",y,[w,Object(c["g"])("div",_,[S,x,Object(c["g"])("form",null,[Object(c["g"])("div",k,[Object(c["g"])("ul",null,[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["u"])(e.items,(function(e){return Object(c["q"])(),Object(c["d"])("li",{key:e.message},Object(c["x"])(e.name)+" : "+Object(c["x"])(e.comment)+" -"+Object(c["x"])(e.commentdate),1)})),128))]),C,Object(c["g"])("div",P,[Object(c["C"])(Object(c["g"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.tmp_name=t}),class:"form-control",placeholder:"お名前","aria-label":"Recipient's username","aria-describedby":"basic-addon2"},null,512),[[c["z"],e.tmp_name]])]),R,Object(c["g"])("div",T,[Object(c["C"])(Object(c["g"])("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.tmp_comment=t}),class:"form-control",placeholder:"Enter comment","aria-label":"Recipient's username","aria-describedby":"basic-addon2"},null,512),[[c["z"],e.tmp_comment]]),M]),q,Object(c["g"])("button",{type:"button",class:"btn btn-primary",onClick:t[3]||(t[3]=function(t){return e.addComment(e.tmp_comment)})}," 投稿 ")])])])])])])}n("99af"),n("4d90"),n("d3b7"),n("25f0");var B=Object(c["h"])({name:"Top",data:function(){return{tmp_name:"",tmp_comment:"",items:[]}},methods:{addComment:function(){var e="";if(""==this.tmp_comment&&(e+="・コメントを入力してください\n"),""==this.tmp_name&&(e+="・名前を入力してください\n"),""==e){var t=new Date,n="".concat(t.getFullYear(),"-").concat((t.getMonth()+1).toString().padStart(2,"0"),"-").concat(t.getDate().toString().padStart(2,"0"),"  ").concat(t.getHours().toString().padStart(2,"0"),":").concat(t.getMinutes().toString().padStart(2,"0"),":").concat(t.getSeconds().toString().padStart(2,"0"));this.items.push({name:this.tmp_name,comment:this.tmp_comment,commentdate:n}),this.tmp_name="",this.tmp_comment=""}else alert(e)}}});B.render=A;var I=B,J={id:"game_corner",class:"container"},U=Object(c["g"])("div",{class:"col-sm-12"},[Object(c["g"])("h2",null,"ゲームコーナー")],-1),E={class:"col-sm-12"},H={id:"myCanvas",ref:"my_canvas",width:"480",height:"320"},V=Object(c["g"])("button",{value:"Reload",onclick:"window.location.reload();"},"Reload",-1);function W(e,t,n,a,r,o){return Object(c["q"])(),Object(c["d"])("div",J,[U,Object(c["g"])("div",E,[Object(c["g"])("canvas",H,null,512)]),V])}var Y=n("53ca"),z=n("1da1"),D=(n("cb29"),n("96cf"),Object(c["h"])({e:"#game_corner",setup:function(){var e,t,n=Object(c["t"])(null),a=["red","blue","cien","magenta","green"],r=-.5,o=-1.5,l=0;Object(c["o"])(Object(z["a"])(regeneratorRuntime.mark((function c(){var a,r;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:if(e=n.value.width/2,t=n.value.height-30,console.log(Object(Y["a"])(n)),r=null===(a=n.value)||void 0===a?void 0:a.getContext("2d"),null!=r){c.next=6;break}return c.abrupt("return");case 6:setInterval(i,10);case 7:case"end":return c.stop()}}),c)}))));var i=function(){var c,i=null===(c=n.value)||void 0===c?void 0:c.getContext("2d");if(null!=i){i.clearRect(0,0,n.value.width,n.value.height),i.beginPath(),i.fillStyle="rgb(255,255,255)",i.strokeStyle="rgb(0,0,0)",i.fillRect(0,0,n.value.width,n.value.height),i.strokeRect(0,0,n.value.width,n.value.height);var s=new Image,d=a[l%a.length];s.src="/dvd/".concat(d,".png"),s.style.cssText="green",i.drawImage(s,e,t),i.fillStyle="green",i.fill(),i.closePath();var u=s.width,b=s.height;(r<0&&e<0||r>0&&e+u>n.value.width)&&(r*=-1,l+=1),(o<0&&t<0||o>0&&t+b>n.value.height)&&(o*=-1,l+=1),e+=r,t+=o}};return{my_canvas:n,draw:i}}}));n("9f4b");D.render=W;var G=D,F=[{path:"/",name:"Top",component:h},{path:"/achievement",name:"Achievement",component:I},{path:"/game",name:"Game Corner",component:G}],L=Object(p["a"])({history:Object(p["b"])("/"),routes:F}),Q=L;Object(c["c"])(b).use(Q).mount("#app")},f3b8:function(e,t,n){}});