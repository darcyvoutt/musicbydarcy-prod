(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-047692d0"],{1276:function(t,e,n){"use strict";var i=n("d784"),s=n("44e7"),r=n("825a"),a=n("1d80"),l=n("4840"),o=n("8aa5"),c=n("50c4"),u=n("14c3"),f=n("9263"),p=n("d039"),d=[].push,m=Math.min,h=4294967295,g=!p((function(){return!RegExp(h,"y")}));i("split",2,(function(t,e,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=String(a(this)),r=void 0===n?h:n>>>0;if(0===r)return[];if(void 0===t)return[i];if(!s(t))return e.call(i,t,r);var l,o,c,u=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),m=0,g=new RegExp(t.source,p+"g");while(l=f.call(g,i)){if(o=g.lastIndex,o>m&&(u.push(i.slice(m,l.index)),l.length>1&&l.index<i.length&&d.apply(u,l.slice(1)),c=l[0].length,m=o,u.length>=r))break;g.lastIndex===l.index&&g.lastIndex++}return m===i.length?!c&&g.test("")||u.push(""):u.push(i.slice(m)),u.length>r?u.slice(0,r):u}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var s=a(this),r=void 0==e?void 0:e[t];return void 0!==r?r.call(e,s,n):i.call(String(s),e,n)},function(t,s){var a=n(i,t,this,s,i!==e);if(a.done)return a.value;var f=r(t),p=String(this),d=l(f,RegExp),v=f.unicode,b=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(g?"y":"g"),y=new d(g?f:"^(?:"+f.source+")",b),x=void 0===s?h:s>>>0;if(0===x)return[];if(0===p.length)return null===u(y,p)?[p]:[];var _=0,E=0,C=[];while(E<p.length){y.lastIndex=g?E:0;var w,I=u(y,g?p:p.slice(E));if(null===I||(w=m(c(y.lastIndex+(g?0:E)),p.length))===_)E=o(p,E,v);else{if(C.push(p.slice(_,E)),C.length===x)return C;for(var R=1;R<=I.length-1;R++)if(C.push(I[R]),C.length===x)return C;E=_=w}}return C.push(p.slice(_)),C}]}),!g)},"14c3":function(t,e,n){var i=n("c6b6"),s=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var r=n.call(t,e);if("object"!==typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==i(t))throw TypeError("RegExp#exec called on incompatible receiver");return s.call(t,e)}},"44e7":function(t,e,n){var i=n("861d"),s=n("c6b6"),r=n("b622"),a=r("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==s(t))}},6547:function(t,e,n){var i=n("a691"),s=n("1d80"),r=function(t){return function(e,n){var r,a,l=String(s(e)),o=i(n),c=l.length;return o<0||o>=c?t?"":void 0:(r=l.charCodeAt(o),r<55296||r>56319||o+1===c||(a=l.charCodeAt(o+1))<56320||a>57343?t?l.charAt(o):r:t?l.slice(o,o+2):a-56320+(r-55296<<10)+65536)}};t.exports={codeAt:r(!1),charAt:r(!0)}},"8aa5":function(t,e,n){"use strict";var i=n("6547").charAt;t.exports=function(t,e,n){return e+(n?i(t,e).length:1)}},9263:function(t,e,n){"use strict";var i=n("ad6d"),s=n("9f7f"),r=RegExp.prototype.exec,a=String.prototype.replace,l=r,o=function(){var t=/a/,e=/b*/g;return r.call(t,"a"),r.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),c=s.UNSUPPORTED_Y||s.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],f=o||u||c;f&&(l=function(t){var e,n,s,l,f=this,p=c&&f.sticky,d=i.call(f),m=f.source,h=0,g=t;return p&&(d=d.replace("y",""),-1===d.indexOf("g")&&(d+="g"),g=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(m="(?: "+m+")",g=" "+g,h++),n=new RegExp("^(?:"+m+")",d)),u&&(n=new RegExp("^"+m+"$(?!\\s)",d)),o&&(e=f.lastIndex),s=r.call(p?n:f,g),p?s?(s.input=s.input.slice(h),s[0]=s[0].slice(h),s.index=f.lastIndex,f.lastIndex+=s[0].length):f.lastIndex=0:o&&s&&(f.lastIndex=f.global?s.index+s[0].length:e),u&&s&&s.length>1&&a.call(s[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(s[l]=void 0)})),s}),t.exports=l},"9f7f":function(t,e,n){"use strict";var i=n("d039");function s(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=i((function(){var t=s("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=i((function(){var t=s("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,n){"use strict";var i=n("23e7"),s=n("9263");i({target:"RegExp",proto:!0,forced:/./.exec!==s},{exec:s})},b0c0:function(t,e,n){var i=n("83ab"),s=n("9bf2").f,r=Function.prototype,a=r.toString,l=/^\s*function ([^ (]*)/,o="name";i&&!(o in r)&&s(r,o,{configurable:!0,get:function(){try{return a.call(this).match(l)[1]}catch(t){return""}}})},bb51:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("vue-headful",{attrs:{title:"Music By Darcy"}}),n("Hero"),t._m(0),n("Playlist",{attrs:{title:"Production Work",url:t.playlists.production}}),n("Playlist",{attrs:{title:"Beats Portfolio",url:t.playlists.beats}}),n("div",{staticClass:"text-center"},[n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.contact",modifiers:{contact:!0}}],staticClass:"btn--reset"},[t._v("Contact")])],1),n("ContactForm")],1)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[n("h1",[t._v("Custom Player")]),n("p",{staticClass:"mb-5"},[t._v(" This is a prototype making a "),n("br"),t._v("customer audio player. ")])])}],r=n("db49"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-modal",{ref:"contactModal",staticClass:"form form--contact",attrs:{id:"contact",title:"Contact Form","title-sr-only":"","hide-footer":"","hide-backdrop":""}},[n("div",{staticClass:"form__messages text-center"},[t.show.loading?n("b-spinner",{attrs:{label:"Submitting form"}}):t._e(),t.show.failure?n("div",{staticClass:"form__message form__message--failure"},[t._v(" "+t._s(t.message.failure)+" ")]):t._e(),t.show.success?n("div",{staticClass:"form__message form__message--success"},[t._v(" "+t._s(t.message.success)+" ")]):t._e()],1),t.show.form?n("b-form",{on:{submit:t.onSubmit}},[n("b-form-group",{attrs:{id:"Name",label:"Name:","label-for":"NameInput"}},[n("b-form-input",{attrs:{id:"NameInput",placeholder:"Full Name",required:""},model:{value:t.fields.name,callback:function(e){t.$set(t.fields,"name",e)},expression:"fields.name"}})],1),n("b-form-group",{attrs:{id:"Email",label:"Email:","label-for":"EmailInput"}},[n("b-form-input",{attrs:{id:"EmailInput",type:"email",placeholder:"example@gmail.com",required:""},model:{value:t.fields.email,callback:function(e){t.$set(t.fields,"email",e)},expression:"fields.email"}})],1),n("b-form-group",{attrs:{id:"Message",label:"Message:","label-for":"MessageInput"}},[n("b-form-textarea",{attrs:{id:"MessageInput",placeholder:"What are you working on?",rows:"3","max-rows":"6"},model:{value:t.fields.message,callback:function(e){t.$set(t.fields,"message",e)},expression:"fields.message"}})],1),n("input",{directives:[{name:"model",rawName:"v-model",value:t.honeypot,expression:"honeypot"}],staticClass:"sr-only",attrs:{type:"text",name:"subject",tabindex:"-1",autocomplete:"off"},domProps:{value:t.honeypot},on:{input:function(e){e.target.composing||(t.honeypot=e.target.value)}}}),n("div",{staticClass:"text-right"},[n("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Submit")])],1)],1):t._e()],1)},l=[],o=(n("b0c0"),n("fe98")),c={name:"ContactForm",data:function(){return{fields:{email:"",message:"",name:""},hideDelay:5e3,honeypot:"",message:{failure:"There was an issue, please try again.",success:"Your message was received successfully."},show:{failure:!1,form:!0,loading:!1,success:!1}}},computed:{formData:function(){return Object.assign({_email:{from:this.fields.name,replyto:this.fields.email,subject:"Contact: ".concat(this.fields.name)},_honeypot:this.subject},this.fields)}},methods:{closeModal:function(t){var e=this;this.show.loading=!1,this.show[t]=!0,setTimeout((function(){e.$root.$emit("bv::hide::modal","contact"),e.resetForm()}),this.hideDelay)},onSubmit:function(){var t=this;return this.show.form=!1,this.show.loading=!0,o["a"](r["a"].forms.contact,this.formData).then((function(){return t.closeModal("success")})).catch((function(){return t.closeModal("failure")}))},resetForm:function(){this.fields={email:"",message:"",name:""},this.show={failure:!1,form:!0,loading:!1,success:!1}}}},u=c,f=n("2877"),p=Object(f["a"])(u,a,l,!1,null,null,null),d=p.exports,m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hero"},[n("div",{staticClass:"hero__container"},[n("div",{staticClass:"hero__title"},[t._v(" MBD ")])])])}],g={},v=Object(f["a"])(g,m,h,!1,null,null,null),b=v.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row justify-content-center no-gutters"},[n("div",{staticClass:"col-12"},[n("h2",[t._v(t._s(t.title))])]),void 0===t.playlist?[n("b-spinner",{attrs:{label:"Loading playlist titled "+t.title}})]:[n("div",{staticClass:"col-12 col-sm-6"},t._l(t.playlist.tracks,(function(e,i){return n("ul",{key:e.id,staticClass:"playlist list--reset"},[n("li",{staticClass:"playlist__item",class:{"playlist__item--current":t.songIndex===i}},[n("button",{staticClass:"btn--reset d-block w-100 text-left",on:{click:function(e){return t.playTrack(t.url,i)}}},[t._v(" "+t._s(e.title)+" ")])])])})),0)]],2)},x=[],_=(n("ac1f"),n("1276"),n("5530")),E=n("2f62"),C=n("4e32"),w={name:"Playlist",props:{title:{type:String,required:!0},url:{type:String,required:!0}},computed:Object(_["a"])(Object(_["a"])({},Object(E["d"])(["playlists","playlist_current"])),{},{playlist:function(){return this.playlists[this.playlistUri]},playlistUri:function(){return this.url.split("/").pop()},songIndex:function(){return this.playlist_current.uri!==this.playlistUri?-1:this.playlist_current.index}}),mounted:function(){var t=this;C["a"].resolve(this.url,(function(e){t.setPlaylist({playlist:e,uri:t.playlistUri})}))},methods:Object(_["a"])(Object(_["a"])({},Object(E["c"])(["setCurrentSong","setPlaylist","setPlayerVisible"])),{},{playTrack:function(t,e){var n=this;C["a"].resolve(t,(function(){n.setCurrentSong({index:e,uri:n.playlistUri}),n.setPlayerVisible(!0),C["a"].play({playlistIndex:e})}))}})},I=w,R=Object(f["a"])(I,y,x,!1,null,null,null),S=R.exports,P={name:"Home",components:{ContactForm:d,Hero:b,Playlist:S},computed:{playlists:function(){return r["a"].playlists}}},j=P,k=Object(f["a"])(j,i,s,!1,null,null,null);e["default"]=k.exports},d784:function(t,e,n){"use strict";n("ac1f");var i=n("6eeb"),s=n("d039"),r=n("b622"),a=n("9263"),l=n("9112"),o=r("species"),c=!s((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),f=r("replace"),p=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),d=!s((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,f){var m=r(t),h=!s((function(){var e={};return e[m]=function(){return 7},7!=""[t](e)})),g=h&&!s((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[o]=function(){return n},n.flags="",n[m]=/./[m]),n.exec=function(){return e=!0,null},n[m](""),!e}));if(!h||!g||"replace"===t&&(!c||!u||p)||"split"===t&&!d){var v=/./[m],b=n(m,""[t],(function(t,e,n,i,s){return e.exec===a?h&&!s?{done:!0,value:v.call(e,n,i)}:{done:!0,value:t.call(n,e,i)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),y=b[0],x=b[1];i(String.prototype,t,y),i(RegExp.prototype,m,2==e?function(t,e){return x.call(t,this,e)}:function(t){return x.call(t,this)})}f&&l(RegExp.prototype[m],"sham",!0)}},fe98:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("d3b7");function i(t,e){return!!navigator.onLine&&fetch(t,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e)}).then((function(t){return t.json()}))}}}]);
//# sourceMappingURL=chunk-047692d0.6f75f5fe.js.map