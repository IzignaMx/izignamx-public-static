function On(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ef(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var qi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},va={duration:.5,overwrite:!1,delay:0},Nc,oi,At,sn=1e8,yt=1/sn,ic=Math.PI*2,fp=ic/4,dp=0,tf=Math.sqrt,pp=Math.cos,mp=Math.sin,si=function(e){return typeof e=="string"},Nt=function(e){return typeof e=="function"},Hn=function(e){return typeof e=="number"},Oc=function(e){return typeof e>"u"},wn=function(e){return typeof e=="object"},Ci=function(e){return e!==!1},Fc=function(){return typeof window<"u"},Fa=function(e){return Nt(e)||si(e)},nf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},mi=Array.isArray,_p=/random\([^)]+\)/g,gp=/,\s*/g,mu=/(?:-?\.?\d|\.)+/gi,rf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ps=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ol=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,sf=/[+-]=-?[.\d]+/,vp=/[^,'"\[\]\s]+/gi,Mp=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ct,Mn,nc,Bc,Ki={},No={},af,of=function(e){return(No=As(e,Ki))&&Ii},zc=function(e,i){return console.warn("Invalid property",e,"set to",i,"Missing plugin? gsap.registerPlugin()")},Ma=function(e,i){return!i&&console.warn(e)},lf=function(e,i){return e&&(Ki[e]=i)&&No&&(No[e]=i)||Ki},xa=function(){return 0},xp={suppressEvents:!0,isStart:!0,kill:!1},Eo={suppressEvents:!0,kill:!1},Sp={suppressEvents:!0},kc={},ar=[],rc={},cf,ki={},ll={},_u=30,To=[],Vc="",Gc=function(e){var i=e[0],n,r;if(wn(i)||Nt(i)||(e=[e]),!(n=(i._gsap||{}).harness)){for(r=To.length;r--&&!To[r].targetTest(i););n=To[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Df(e[r],n)))||e.splice(r,1);return e},Rr=function(e){return e._gsap||Gc(an(e))[0]._gsap},uf=function(e,i,n){return(n=e[i])&&Nt(n)?e[i]():Oc(n)&&e.getAttribute&&e.getAttribute(i)||n},Pi=function(e,i){return(e=e.split(",")).forEach(i)||e},Vt=function(e){return Math.round(e*1e5)/1e5||0},Rt=function(e){return Math.round(e*1e7)/1e7||0},gs=function(e,i){var n=i.charAt(0),r=parseFloat(i.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},yp=function(e,i){for(var n=i.length,r=0;e.indexOf(i[r])<0&&++r<n;);return r<n},Oo=function(){var e=ar.length,i=ar.slice(0),n,r;for(rc={},ar.length=0,n=0;n<e;n++)r=i[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Hc=function(e){return!!(e._initted||e._startAt||e.add)},hf=function(e,i,n,r){ar.length&&!oi&&Oo(),e.render(i,n,r||!!(oi&&i<0&&Hc(e))),ar.length&&!oi&&Oo()},ff=function(e){var i=parseFloat(e);return(i||i===0)&&(e+"").match(vp).length<2?i:si(e)?e.trim():e},df=function(e){return e},Zi=function(e,i){for(var n in i)n in e||(e[n]=i[n]);return e},Ep=function(e){return function(i,n){for(var r in n)r in i||r==="duration"&&e||r==="ease"||(i[r]=n[r])}},As=function(e,i){for(var n in i)e[n]=i[n];return e},gu=function t(e,i){for(var n in i)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=wn(i[n])?t(e[n]||(e[n]={}),i[n]):i[n]);return e},Fo=function(e,i){var n={},r;for(r in e)r in i||(n[r]=e[r]);return n},aa=function(e){var i=e.parent||Ct,n=e.keyframes?Ep(mi(e.keyframes)):Zi;if(Ci(e.inherit))for(;i;)n(e,i.vars.defaults),i=i.parent||i._dp;return e},Tp=function(e,i){for(var n=e.length,r=n===i.length;r&&n--&&e[n]===i[n];);return n<0},pf=function(e,i,n,r,s){n===void 0&&(n="_first"),r===void 0&&(r="_last");var a=e[r],o;if(s)for(o=i[s];a&&a[s]>o;)a=a._prev;return a?(i._next=a._next,a._next=i):(i._next=e[n],e[n]=i),i._next?i._next._prev=i:e[r]=i,i._prev=a,i.parent=i._dp=e,i},el=function(e,i,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=i._prev,a=i._next;s?s._next=a:e[n]===i&&(e[n]=a),a?a._prev=s:e[r]===i&&(e[r]=s),i._next=i._prev=i.parent=null},ur=function(e,i){e.parent&&(!i||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Cr=function(e,i){if(e&&(!i||i._end>e._dur||i._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},bp=function(e){for(var i=e.parent;i&&i.parent;)i._dirty=1,i.totalDuration(),i=i.parent;return e},sc=function(e,i,n,r){return e._startAt&&(oi?e._startAt.revert(Eo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(i,!0,r))},Ap=function t(e){return!e||e._ts&&t(e.parent)},vu=function(e){return e._repeat?ws(e._tTime,e=e.duration()+e._rDelay)*e:0},ws=function(e,i){var n=Math.floor(e=Rt(e/i));return e&&n===e?n-1:n},Bo=function(e,i){return(e-i._start)*i._ts+(i._ts>=0?0:i._dirty?i.totalDuration():i._tDur)},tl=function(e){return e._end=Rt(e._start+(e._tDur/Math.abs(e._ts||e._rts||yt)||0))},il=function(e,i){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Rt(n._time-(e._ts>0?i/e._ts:((e._dirty?e.totalDuration():e._tDur)-i)/-e._ts)),tl(e),n._dirty||Cr(n,e)),e},mf=function(e,i){var n;if((i._time||!i._dur&&i._initted||i._start<e._time&&(i._dur||!i.add))&&(n=Bo(e.rawTime(),i),(!i._dur||Pa(0,i.totalDuration(),n)-i._tTime>yt)&&i.render(n,!0)),Cr(e,i)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-yt}},yn=function(e,i,n,r){return i.parent&&ur(i),i._start=Rt((Hn(n)?n:n||e!==Ct?ji(e,n,i):e._time)+i._delay),i._end=Rt(i._start+(i.totalDuration()/Math.abs(i.timeScale())||0)),pf(e,i,"_first","_last",e._sort?"_start":0),ac(i)||(e._recent=i),r||mf(e,i),e._ts<0&&il(e,e._tTime),e},_f=function(e,i){return(Ki.ScrollTrigger||zc("scrollTrigger",i))&&Ki.ScrollTrigger.create(i,e)},gf=function(e,i,n,r,s){if(Xc(e,i,s),!e._initted)return 1;if(!n&&e._pt&&!oi&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&cf!==Gi.frame)return ar.push(e),e._lazy=[s,r],1},wp=function t(e){var i=e.parent;return i&&i._ts&&i._initted&&!i._lock&&(i.rawTime()<0||t(i))},ac=function(e){var i=e.data;return i==="isFromStart"||i==="isStart"},Rp=function(e,i,n,r){var s=e.ratio,a=i<0||!i&&(!e._start&&wp(e)&&!(!e._initted&&ac(e))||(e._ts<0||e._dp._ts<0)&&!ac(e))?0:1,o=e._rDelay,l=0,c,u,d;if(o&&e._repeat&&(l=Pa(0,e._tDur,i),u=ws(l,o),e._yoyo&&u&1&&(a=1-a),u!==ws(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||oi||r||e._zTime===yt||!i&&e._zTime){if(!e._initted&&gf(e,i,r,n,l))return;for(d=e._zTime,e._zTime=i||(n?yt:0),n||(n=i&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;i<0&&sc(e,i,n,!0),e._onUpdate&&!n&&Wi(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Wi(e,"onRepeat"),(i>=e._tDur||i<0)&&e.ratio===a&&(a&&ur(e,1),!n&&!oi&&(Wi(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=i)},Cp=function(e,i,n){var r;if(n>i)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>i)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<i)return r;r=r._prev}},Rs=function(e,i,n,r){var s=e._repeat,a=Rt(i)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Rt(a*(s+1)+e._rDelay*s):a,o>0&&!r&&il(e,e._tTime=e._tDur*o),e.parent&&tl(e),n||Cr(e.parent,e),e},Mu=function(e){return e instanceof Ri?Cr(e):Rs(e,e._dur)},Pp={_start:0,endTime:xa,totalDuration:xa},ji=function t(e,i,n){var r=e.labels,s=e._recent||Pp,a=e.duration()>=sn?s.endTime(!1):e._dur,o,l,c;return si(i)&&(isNaN(i)||i in r)?(l=i.charAt(0),c=i.substr(-1)==="%",o=i.indexOf("="),l==="<"||l===">"?(o>=0&&(i=i.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(i.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(i in r||(r[i]=a),r[i]):(l=parseFloat(i.charAt(o-1)+i.substr(o+1)),c&&n&&(l=l/100*(mi(n)?n[0]:n).totalDuration()),o>1?t(e,i.substr(0,o-1),n)+l:a+l)):i==null?a:+i},oa=function(e,i,n){var r=Hn(i[1]),s=(r?2:1)+(e<2?0:1),a=i[s],o,l;if(r&&(a.duration=i[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Ci(l.vars.inherit)&&l.parent;a.immediateRender=Ci(o.immediateRender),e<2?a.runBackwards=1:a.startAt=i[s-1]}return new qt(i[0],a,i[s+1])},pr=function(e,i){return e||e===0?i(e):i},Pa=function(e,i,n){return n<e?e:n>i?i:n},di=function(e,i){return!si(e)||!(i=Mp.exec(e))?"":i[1]},Dp=function(e,i,n){return pr(n,function(r){return Pa(e,i,r)})},oc=[].slice,vf=function(e,i){return e&&wn(e)&&"length"in e&&(!i&&!e.length||e.length-1 in e&&wn(e[0]))&&!e.nodeType&&e!==Mn},Lp=function(e,i,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return si(r)&&!i||vf(r,1)?(s=n).push.apply(s,an(r)):n.push(r)})||n},an=function(e,i,n){return At&&!i&&At.selector?At.selector(e):si(e)&&!n&&(nc||!Cs())?oc.call((i||Bc).querySelectorAll(e),0):mi(e)?Lp(e,n):vf(e)?oc.call(e,0):e?[e]:[]},lc=function(e){return e=an(e)[0]||Ma("Invalid scope")||{},function(i){var n=e.current||e.nativeElement||e;return an(i,n.querySelectorAll?n:n===e?Ma("Invalid scope")||Bc.createElement("div"):e)}},Mf=function(e){return e.sort(function(){return .5-Math.random()})},xf=function(e){if(Nt(e))return e;var i=wn(e)?e:{each:e},n=Pr(i.ease),r=i.from||0,s=parseFloat(i.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=i.axis,u=r,d=r;return si(r)?u=d={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(u=r[0],d=r[1]),function(h,f,g){var m=(g||i).length,_=a[m],p,y,T,M,b,R,A,v,S;if(!_){if(S=i.grid==="auto"?0:(i.grid||[1,sn])[1],!S){for(A=-sn;A<(A=g[S++].getBoundingClientRect().left)&&S<m;);S<m&&S--}for(_=a[m]=[],p=l?Math.min(S,m)*u-.5:r%S,y=S===sn?0:l?m*d/S-.5:r/S|0,A=0,v=sn,R=0;R<m;R++)T=R%S-p,M=y-(R/S|0),_[R]=b=c?Math.abs(c==="y"?M:T):tf(T*T+M*M),b>A&&(A=b),b<v&&(v=b);r==="random"&&Mf(_),_.max=A-v,_.min=v,_.v=m=(parseFloat(i.amount)||parseFloat(i.each)*(S>m?m-1:c?c==="y"?m/S:S:Math.max(S,m/S))||0)*(r==="edges"?-1:1),_.b=m<0?s-m:s,_.u=di(i.amount||i.each)||0,n=n&&m<0?Xp(n):n}return m=(_[h]-_.min)/_.max||0,Rt(_.b+(n?n(m):m)*_.v)+_.u}},cc=function(e){var i=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Rt(Math.round(parseFloat(n)/e)*e*i);return(r-r%1)/i+(Hn(n)?0:di(n))}},Sf=function(e,i){var n=mi(e),r,s;return!n&&wn(e)&&(r=n=e.radius||sn,e.values?(e=an(e.values),(s=!Hn(e[0]))&&(r*=r)):e=cc(e.increment)),pr(i,n?Nt(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=sn,u=0,d=e.length,h,f;d--;)s?(h=e[d].x-o,f=e[d].y-l,h=h*h+f*f):h=Math.abs(e[d]-o),h<c&&(c=h,u=d);return u=!r||c<=r?e[u]:a,s||u===a||Hn(a)?u:u+di(a)}:cc(e))},yf=function(e,i,n,r){return pr(mi(e)?!i:n===!0?!!(n=0):!r,function(){return mi(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(i-e+n*.99))/n)*n*r)/r})},Ip=function(){for(var e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];return function(r){return i.reduce(function(s,a){return a(s)},r)}},Up=function(e,i){return function(n){return e(parseFloat(n))+(i||di(n))}},Np=function(e,i,n){return Tf(e,i,0,1,n)},Ef=function(e,i,n){return pr(n,function(r){return e[~~i(r)]})},Op=function t(e,i,n){var r=i-e;return mi(e)?Ef(e,t(0,e.length),i):pr(n,function(s){return(r+(s-e)%r)%r+e})},Fp=function t(e,i,n){var r=i-e,s=r*2;return mi(e)?Ef(e,t(0,e.length-1),i):pr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},Sa=function(e){return e.replace(_p,function(i){var n=i.indexOf("[")+1,r=i.substring(n||7,n?i.indexOf("]"):i.length-1).split(gp);return yf(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},Tf=function(e,i,n,r,s){var a=i-e,o=r-n;return pr(s,function(l){return n+((l-e)/a*o||0)})},Bp=function t(e,i,n,r){var s=isNaN(e+i)?0:function(f){return(1-f)*e+f*i};if(!s){var a=si(e),o={},l,c,u,d,h;if(n===!0&&(r=1)&&(n=null),a)e={p:e},i={p:i};else if(mi(e)&&!mi(i)){for(u=[],d=e.length,h=d-2,c=1;c<d;c++)u.push(t(e[c-1],e[c]));d--,s=function(g){g*=d;var m=Math.min(h,~~g);return u[m](g-m)},n=i}else r||(e=As(mi(e)?[]:{},e));if(!u){for(l in i)Wc.call(o,e,l,"get",i[l]);s=function(g){return Kc(g,o)||(a?e.p:e)}}}return pr(n,s)},xu=function(e,i,n){var r=e.labels,s=sn,a,o,l;for(a in r)o=r[a]-i,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Wi=function(e,i,n){var r=e.vars,s=r[i],a=At,o=e._ctx,l,c,u;if(s)return l=r[i+"Params"],c=r.callbackScope||e,n&&ar.length&&Oo(),o&&(At=o),u=l?s.apply(c,l):s.call(c),At=a,u},Js=function(e){return ur(e),e.scrollTrigger&&e.scrollTrigger.kill(!!oi),e.progress()<1&&Wi(e,"onInterrupt"),e},ms,bf=[],Af=function(e){if(e)if(e=!e.name&&e.default||e,Fc()||e.headless){var i=e.name,n=Nt(e),r=i&&!n&&e.init?function(){this._props=[]}:e,s={init:xa,render:Kc,add:Wc,kill:tm,modifier:em,rawVars:0},a={targetTest:0,get:0,getSetter:qc,aliases:{},register:0};if(Cs(),e!==r){if(ki[i])return;Zi(r,Zi(Fo(e,s),a)),As(r.prototype,As(s,Fo(e,a))),ki[r.prop=i]=r,e.targetTest&&(To.push(r),kc[i]=1),i=(i==="css"?"CSS":i.charAt(0).toUpperCase()+i.substr(1))+"Plugin"}lf(i,r),e.register&&e.register(Ii,r,Di)}else bf.push(e)},St=255,Qs={aqua:[0,St,St],lime:[0,St,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,St],navy:[0,0,128],white:[St,St,St],olive:[128,128,0],yellow:[St,St,0],orange:[St,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[St,0,0],pink:[St,192,203],cyan:[0,St,St],transparent:[St,St,St,0]},cl=function(e,i,n){return e+=e<0?1:e>1?-1:0,(e*6<1?i+(n-i)*e*6:e<.5?n:e*3<2?i+(n-i)*(2/3-e)*6:i)*St+.5|0},wf=function(e,i,n){var r=e?Hn(e)?[e>>16,e>>8&St,e&St]:0:Qs.black,s,a,o,l,c,u,d,h,f,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Qs[e])r=Qs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&St,r&St,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&St,e&St]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(mu),!i)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,r.length>3&&(r[3]*=1),r[0]=cl(l+1/3,s,a),r[1]=cl(l,s,a),r[2]=cl(l-1/3,s,a);else if(~e.indexOf("="))return r=e.match(rf),n&&r.length<4&&(r[3]=1),r}else r=e.match(mu)||Qs.transparent;r=r.map(Number)}return i&&!g&&(s=r[0]/St,a=r[1]/St,o=r[2]/St,d=Math.max(s,a,o),h=Math.min(s,a,o),u=(d+h)/2,d===h?l=c=0:(f=d-h,c=u>.5?f/(2-d-h):f/(d+h),l=d===s?(a-o)/f+(a<o?6:0):d===a?(o-s)/f+2:(s-a)/f+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},Rf=function(e){var i=[],n=[],r=-1;return e.split(or).forEach(function(s){var a=s.match(ps)||[];i.push.apply(i,a),n.push(r+=a.length+1)}),i.c=n,i},Su=function(e,i,n){var r="",s=(e+r).match(or),a=i?"hsla(":"rgba(",o=0,l,c,u,d;if(!s)return e;if(s=s.map(function(h){return(h=wf(h,i,1))&&a+(i?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=Rf(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(or,"1").split(ps),d=c.length-1;o<d;o++)r+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(or),d=c.length-1;o<d;o++)r+=c[o]+s[o];return r+c[d]},or=(function(){var t="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Qs)t+="|"+e+"\\b";return new RegExp(t+")","gi")})(),zp=/hsl[a]?\(/,Cf=function(e){var i=e.join(" "),n;if(or.lastIndex=0,or.test(i))return n=zp.test(i),e[1]=Su(e[1],n),e[0]=Su(e[0],n,Rf(e[1])),!0},ya,Gi=(function(){var t=Date.now,e=500,i=33,n=t(),r=n,s=1e3/240,a=s,o=[],l,c,u,d,h,f,g=function m(_){var p=t()-r,y=_===!0,T,M,b,R;if((p>e||p<0)&&(n+=p-i),r+=p,b=r-n,T=b-a,(T>0||y)&&(R=++d.frame,h=b-d.time*1e3,d.time=b=b/1e3,a+=T+(T>=s?4:s-T),M=1),y||(l=c(m)),M)for(f=0;f<o.length;f++)o[f](b,h,R,_)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(_){return h/(1e3/(_||60))},wake:function(){af&&(!nc&&Fc()&&(Mn=nc=window,Bc=Mn.document||{},Ki.gsap=Ii,(Mn.gsapVersions||(Mn.gsapVersions=[])).push(Ii.version),of(No||Mn.GreenSockGlobals||!Mn.gsap&&Mn||{}),bf.forEach(Af)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(_){return setTimeout(_,a-d.time*1e3+1|0)},ya=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ya=0,c=xa},lagSmoothing:function(_,p){e=_||1/0,i=Math.min(p||33,e)},fps:function(_){s=1e3/(_||240),a=d.time*1e3+s},add:function(_,p,y){var T=p?function(M,b,R,A){_(M,b,R,A),d.remove(T)}:_;return d.remove(_),o[y?"unshift":"push"](T),Cs(),T},remove:function(_,p){~(p=o.indexOf(_))&&o.splice(p,1)&&f>=p&&f--},_listeners:o},d})(),Cs=function(){return!ya&&Gi.wake()},lt={},kp=/^[\d.\-M][\d.\-,\s]/,Vp=/["']/g,Gp=function(e){for(var i={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),i[r]=isNaN(c)?c.replace(Vp,"").trim():+c,r=l.substr(o+1).trim();return i},Hp=function(e){var i=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",i);return e.substring(i,~r&&r<n?e.indexOf(")",n+1):n)},Wp=function(e){var i=(e+"").split("("),n=lt[i[0]];return n&&i.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Gp(i[1])]:Hp(e).split(",").map(ff)):lt._CE&&kp.test(e)?lt._CE("",e):n},Xp=function(e){return function(i){return 1-e(1-i)}},Pr=function(e,i){return e&&(Nt(e)?e:lt[e]||Wp(e))||i},kr=function(e,i,n,r){n===void 0&&(n=function(l){return 1-i(1-l)}),r===void 0&&(r=function(l){return l<.5?i(l*2)/2:1-i((1-l)*2)/2});var s={easeIn:i,easeOut:n,easeInOut:r},a;return Pi(e,function(o){lt[o]=Ki[o]=s,lt[a=o.toLowerCase()]=n;for(var l in s)lt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=lt[o+"."+l]=s[l]}),s},Pf=function(e){return function(i){return i<.5?(1-e(1-i*2))/2:.5+e((i-.5)*2)/2}},ul=function t(e,i,n){var r=i>=1?i:1,s=(n||(e?.3:.45))/(i<1?i:1),a=s/ic*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*mp((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Pf(o);return s=ic/s,l.config=function(c,u){return t(e,c,u)},l},hl=function t(e,i){i===void 0&&(i=1.70158);var n=function(a){return a?--a*a*((i+1)*a+i)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Pf(n);return r.config=function(s){return t(e,s)},r};Pi("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var i=e<5?e+1:e;kr(t+",Power"+(i-1),e?function(n){return Math.pow(n,i)}:function(n){return n},function(n){return 1-Math.pow(1-n,i)},function(n){return n<.5?Math.pow(n*2,i)/2:1-Math.pow((1-n)*2,i)/2})});lt.Linear.easeNone=lt.none=lt.Linear.easeIn;kr("Elastic",ul("in"),ul("out"),ul());(function(t,e){var i=1/e,n=2*i,r=2.5*i,s=function(o){return o<i?t*o*o:o<n?t*Math.pow(o-1.5/e,2)+.75:o<r?t*(o-=2.25/e)*o+.9375:t*Math.pow(o-2.625/e,2)+.984375};kr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);kr("Expo",function(t){return Math.pow(2,10*(t-1))*t+t*t*t*t*t*t*(1-t)});kr("Circ",function(t){return-(tf(1-t*t)-1)});kr("Sine",function(t){return t===1?1:-pp(t*fp)+1});kr("Back",hl("in"),hl("out"),hl());lt.SteppedEase=lt.steps=Ki.SteppedEase={config:function(e,i){e===void 0&&(e=1);var n=1/e,r=e+(i?0:1),s=i?1:0,a=1-yt;return function(o){return((r*Pa(0,a,o)|0)+s)*n}}};va.ease=lt["quad.out"];Pi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return Vc+=t+","+t+"Params,"});var Df=function(e,i){this.id=dp++,e._gsap=this,this.target=e,this.harness=i,this.get=i?i.get:uf,this.set=i?i.getSetter:qc},Ea=(function(){function t(i){this.vars=i,this._delay=+i.delay||0,(this._repeat=i.repeat===1/0?-2:i.repeat||0)&&(this._rDelay=i.repeatDelay||0,this._yoyo=!!i.yoyo||!!i.yoyoEase),this._ts=1,Rs(this,+i.duration,1,1),this.data=i.data,At&&(this._ctx=At,At.data.push(this)),ya||Gi.wake()}var e=t.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Rs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(Cs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(il(this,n),!s._dp||s.parent||mf(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&yn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===yt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),hf(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+vu(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+vu(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?ws(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-yt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Bo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-yt?0:this._rts,this.totalTime(Pa(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),tl(this),bp(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Cs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==yt&&(this._tTime-=yt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Rt(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&yn(r,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Ci(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Bo(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Sp);var r=oi;return oi=n,Hc(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),oi=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Mu(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Mu(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(ji(this,n),Ci(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Ci(r)),this._dur||(this._zTime=-yt),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-yt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-yt,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-yt)},e.eventCallback=function(n,r,s){var a=this.vars;return arguments.length>1?(r?(a[n]=r,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete a[n],this):a[n]},e.then=function(n){var r=this,s=r._prom;return new Promise(function(a){var o=Nt(n)?n:df,l=function(){var u=r.then;r.then=null,s&&s(),Nt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),a(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Js(this)},t})();Zi(Ea.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-yt,_prom:0,_ps:!1,_rts:1});var Ri=(function(t){ef(e,t);function e(n,r){var s;return n===void 0&&(n={}),s=t.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Ci(n.sortChildren),Ct&&yn(n.parent||Ct,On(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&_f(On(s),n.scrollTrigger),s}var i=e.prototype;return i.to=function(r,s,a){return oa(0,arguments,this),this},i.from=function(r,s,a){return oa(1,arguments,this),this},i.fromTo=function(r,s,a,o){return oa(2,arguments,this),this},i.set=function(r,s,a){return s.duration=0,s.parent=this,aa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new qt(r,s,ji(this,a),1),this},i.call=function(r,s,a){return yn(this,qt.delayedCall(0,r,s),a)},i.staggerTo=function(r,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new qt(r,a,ji(this,l)),this},i.staggerFrom=function(r,s,a,o,l,c,u){return a.runBackwards=1,aa(a).immediateRender=Ci(a.immediateRender),this.staggerTo(r,s,a,o,l,c,u)},i.staggerFromTo=function(r,s,a,o,l,c,u,d){return o.startAt=a,aa(o).immediateRender=Ci(o.immediateRender),this.staggerTo(r,s,o,l,c,u,d)},i.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Rt(r),d=this._zTime<0!=r<0&&(this._initted||!c),h,f,g,m,_,p,y,T,M,b,R,A;if(this!==Ct&&u>l&&r>=0&&(u=l),u!==this._tTime||a||d){if(o!==this._time&&c&&(u+=this._time-o,r+=this._time-o),h=u,M=this._start,T=this._ts,p=!T,d&&(c||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(R=this._yoyo,_=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(_*100+r,s,a);if(h=Rt(u%_),u===l?(m=this._repeat,h=c):(b=Rt(u/_),m=~~b,m&&m===b&&(h=c,m--),h>c&&(h=c)),b=ws(this._tTime,_),!o&&this._tTime&&b!==m&&this._tTime-b*_-this._dur<=0&&(b=m),R&&m&1&&(h=c-h,A=1),m!==b&&!this._lock){var v=R&&b&1,S=v===(R&&m&1);if(m<b&&(v=!v),o=v?0:u%c?c:u,this._lock=1,this.render(o||(A?0:Rt(m*_)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Wi(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,b=m),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,o=v?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Cp(this,Rt(o),Rt(h)),y&&(u-=h-(h=y._start))),this._tTime=u,this._time=h,this._act=!!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&u&&c&&!s&&!b&&(Wi(this,"onStart"),this._tTime!==u))return this;if(h>=o&&r>=0)for(f=this._first;f;){if(g=f._next,(f._act||h>=f._start)&&f._ts&&y!==f){if(f.parent!==this)return this.render(r,s,a);if(f.render(f._ts>0?(h-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(h-f._start)*f._ts,s,a),h!==this._time||!this._ts&&!p){y=0,g&&(u+=this._zTime=-yt);break}}f=g}else{f=this._last;for(var D=r<0?r:h;f;){if(g=f._prev,(f._act||D<=f._end)&&f._ts&&y!==f){if(f.parent!==this)return this.render(r,s,a);if(f.render(f._ts>0?(D-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(D-f._start)*f._ts,s,a||oi&&Hc(f)),h!==this._time||!this._ts&&!p){y=0,g&&(u+=this._zTime=D?-yt:yt);break}}f=g}}if(y&&!s&&(this.pause(),y.render(h>=o?0:-yt)._zTime=h>=o?1:-1,this._ts))return this._start=M,tl(this),this.render(r,s,a);this._onUpdate&&!s&&Wi(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(M===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&ur(this,1),!s&&!(r<0&&!o)&&(u||o||!l)&&(Wi(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},i.add=function(r,s){var a=this;if(Hn(s)||(s=ji(this,s,r)),!(r instanceof Ea)){if(mi(r))return r.forEach(function(o){return a.add(o,s)}),this;if(si(r))return this.addLabel(r,s);if(Nt(r))r=qt.delayedCall(0,r);else return this}return this!==r?yn(this,r,s):this},i.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-sn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof qt?s&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},i.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},i.remove=function(r){return si(r)?this.removeLabel(r):Nt(r)?this.killTweensOf(r):(r.parent===this&&el(this,r),r===this._recent&&(this._recent=this._last),Cr(this))},i.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Rt(Gi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),t.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},i.addLabel=function(r,s){return this.labels[r]=ji(this,s),this},i.removeLabel=function(r){return delete this.labels[r],this},i.addPause=function(r,s,a){var o=qt.delayedCall(0,s||xa,a);return o.data="isPause",this._hasPause=1,yn(this,o,ji(this,r))},i.removePause=function(r){var s=this._first;for(r=ji(this,r);s;)s._start===r&&s.data==="isPause"&&ur(s),s=s._next},i.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)er!==o[l]&&o[l].kill(r,s);return this},i.getTweensOf=function(r,s){for(var a=[],o=an(r),l=this._first,c=Hn(s),u;l;)l instanceof qt?yp(l._targets,o)&&(c?(!er||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},i.tweenTo=function(r,s){s=s||{};var a=this,o=ji(a,r),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,h=l.immediateRender,f,g=qt.to(a,Zi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||yt,onStart:function(){if(a.pause(),!f){var _=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==_&&Rs(g,_,0,1).render(g._time,!0,!0),f=1}u&&u.apply(g,d||[])}},s));return h?g.render(0):g},i.tweenFromTo=function(r,s,a){return this.tweenTo(s,Zi({startAt:{time:ji(this,r)}},a))},i.recent=function(){return this._recent},i.nextLabel=function(r){return r===void 0&&(r=this._time),xu(this,ji(this,r))},i.previousLabel=function(r){return r===void 0&&(r=this._time),xu(this,ji(this,r),1)},i.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+yt)},i.shiftChildren=function(r,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(r=Rt(r);o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=r);return Cr(this)},i.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return t.prototype.invalidate.call(this,r)},i.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Cr(this)},i.totalDuration=function(r){var s=0,a=this,o=a._last,l=sn,c,u,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,yn(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=Rt(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Rs(a,a===Ct&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(Ct._ts&&(hf(Ct,Bo(r,Ct)),cf=Gi.frame),Gi.frame>=_u){_u+=qi.autoSleep||120;var s=Ct._first;if((!s||!s._ts)&&qi.autoSleep&&Gi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Gi.sleep()}}},e})(Ea);Zi(Ri.prototype,{_lock:0,_hasPause:0,_forcing:0});var Yp=function(e,i,n,r,s,a,o){var l=new Di(this._pt,e,i,0,1,Ff,null,s),c=0,u=0,d,h,f,g,m,_,p,y;for(l.b=n,l.e=r,n+="",r+="",(p=~r.indexOf("random("))&&(r=Sa(r)),a&&(y=[n,r],a(y,e,i),n=y[0],r=y[1]),h=n.match(ol)||[];d=ol.exec(r);)g=d[0],m=r.substring(c,d.index),f?f=(f+1)%5:m.substr(-5)==="rgba("&&(f=1),g!==h[u++]&&(_=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:m||u===1?m:",",s:_,c:g.charAt(1)==="="?gs(_,g)-_:parseFloat(g)-_,m:f&&f<4?Math.round:0},c=ol.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(sf.test(r)||p)&&(l.e=0),this._pt=l,l},Wc=function(e,i,n,r,s,a,o,l,c,u){Nt(r)&&(r=r(s||0,e,a));var d=e[i],h=n!=="get"?n:Nt(d)?c?e[i.indexOf("set")||!Nt(e["get"+i.substr(3)])?i:"get"+i.substr(3)](c):e[i]():d,f=Nt(d)?c?Jp:Nf:Yc,g;if(si(r)&&(~r.indexOf("random(")&&(r=Sa(r)),r.charAt(1)==="="&&(g=gs(h,r)+(di(h)||0),(g||g===0)&&(r=g))),!u||h!==r||uc)return!isNaN(h*r)&&r!==""?(g=new Di(this._pt,e,i,+h||0,r-(h||0),typeof d=="boolean"?jp:Of,0,f),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!d&&!(i in e)&&zc(i,r),Yp.call(this,e,i,h,r,f,l||qi.stringFilter,c))},qp=function(e,i,n,r,s){if(Nt(e)&&(e=la(e,s,i,n,r)),!wn(e)||e.style&&e.nodeType||mi(e)||nf(e))return si(e)?la(e,s,i,n,r):e;var a={},o;for(o in e)a[o]=la(e[o],s,i,n,r);return a},Lf=function(e,i,n,r,s,a){var o,l,c,u;if(ki[e]&&(o=new ki[e]).init(s,o.rawVars?i[e]:qp(i[e],r,s,a,n),n,r,a)!==!1&&(n._pt=l=new Di(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==ms))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},er,uc,Xc=function t(e,i,n){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,d=r.yoyoEase,h=r.keyframes,f=r.autoRevert,g=e._dur,m=e._startAt,_=e._targets,p=e.parent,y=p&&p.data==="nested"?p.vars.targets:_,T=e._overwrite==="auto"&&!Nc,M=e.timeline,b=r.easeReverse||d,R,A,v,S,D,C,L,Y,k,V,W,U,J;if(M&&(!h||!s)&&(s="none"),e._ease=Pr(s,va.ease),e._rEase=b&&(Pr(b)||e._ease),e._from=!M&&!!r.runBackwards,e._from&&(e.ratio=1),!M||h&&!r.stagger){if(Y=_[0]?Rr(_[0]).harness:0,U=Y&&r[Y.prop],R=Fo(r,kc),m&&(m._zTime<0&&m.progress(1),i<0&&u&&o&&!f?m.render(-1,!0):m.revert(u&&g?Eo:xp),m._lazy=0),a){if(ur(e._startAt=qt.set(_,Zi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!m&&Ci(l),startAt:null,delay:0,onUpdate:c&&function(){return Wi(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,i<0&&(oi||!o&&!f)&&e._startAt.revert(Eo),o&&g&&i<=0&&n<=0){i&&(e._zTime=i);return}}else if(u&&g&&!m){if(i&&(o=!1),v=Zi({overwrite:!1,data:"isFromStart",lazy:o&&!m&&Ci(l),immediateRender:o,stagger:0,parent:p},R),U&&(v[Y.prop]=U),ur(e._startAt=qt.set(_,v)),e._startAt._dp=0,e._startAt._sat=e,i<0&&(oi?e._startAt.revert(Eo):e._startAt.render(-1,!0)),e._zTime=i,!o)t(e._startAt,yt,yt);else if(!i)return}for(e._pt=e._ptCache=0,l=g&&Ci(l)||l&&!g,A=0;A<_.length;A++){if(D=_[A],L=D._gsap||Gc(_)[A]._gsap,e._ptLookup[A]=V={},rc[L.id]&&ar.length&&Oo(),W=y===_?A:y.indexOf(D),Y&&(k=new Y).init(D,U||R,e,W,y)!==!1&&(e._pt=S=new Di(e._pt,D,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(Q){V[Q]=S}),k.priority&&(C=1)),!Y||U)for(v in R)ki[v]&&(k=Lf(v,R,e,W,D,y))?k.priority&&(C=1):V[v]=S=Wc.call(e,D,v,"get",R[v],W,y,0,r.stringFilter);e._op&&e._op[A]&&e.kill(D,e._op[A]),T&&e._pt&&(er=e,Ct.killTweensOf(D,V,e.globalTime(i)),J=!e.parent,er=0),e._pt&&l&&(rc[L.id]=1)}C&&Bf(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!J,h&&i<=0&&M.render(sn,!0,!0)},Kp=function(e,i,n,r,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[i],u,d,h,f;if(!c)for(c=e._ptCache[i]=[],h=e._ptLookup,f=e._targets.length;f--;){if(u=h[f][i],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==i&&u.fp!==i;)u=u._next;if(!u)return uc=1,e.vars[i]="+=0",Xc(e,o),uc=0,l?Ma(i+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(f=c.length;f--;)d=c[f],u=d._pt||d,u.s=(r||r===0)&&!s?r:u.s+(r||0)+a*u.c,u.c=n-u.s,d.e&&(d.e=Vt(n)+di(d.e)),d.b&&(d.b=u.s+di(d.b))},Zp=function(e,i){var n=e[0]?Rr(e[0]).harness:0,r=n&&n.aliases,s,a,o,l;if(!r)return i;s=As({},i);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},$p=function(e,i,n,r){var s=i.ease||r||"power1.inOut",a,o;if(mi(i))o=n[e]||(n[e]=[]),i.forEach(function(l,c){return o.push({t:c/(i.length-1)*100,v:l,e:s})});else for(a in i)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:i[a],e:s})},la=function(e,i,n,r,s){return Nt(e)?e.call(i,n,r,s):si(e)&&~e.indexOf("random(")?Sa(e):e},If=Vc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Uf={};Pi(If+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return Uf[t]=1});var qt=(function(t){ef(e,t);function e(n,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=t.call(this,a?r:aa(r))||this;var l=o.vars,c=l.duration,u=l.delay,d=l.immediateRender,h=l.stagger,f=l.overwrite,g=l.keyframes,m=l.defaults,_=l.scrollTrigger,p=r.parent||Ct,y=(mi(n)||nf(n)?Hn(n[0]):"length"in r)?[n]:an(n),T,M,b,R,A,v,S,D;if(o._targets=y.length?Gc(y):Ma("GSAP target "+n+" not found. https://gsap.com",!qi.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,g||h||Fa(c)||Fa(u)){r=o.vars;var C=r.easeReverse||r.yoyoEase;if(T=o.timeline=new Ri({data:"nested",defaults:m||{},targets:p&&p.data==="nested"?p.vars.targets:y}),T.kill(),T.parent=T._dp=On(o),T._start=0,h||Fa(c)||Fa(u)){if(R=y.length,S=h&&xf(h),wn(h))for(A in h)~If.indexOf(A)&&(D||(D={}),D[A]=h[A]);for(M=0;M<R;M++)b=Fo(r,Uf),b.stagger=0,C&&(b.easeReverse=C),D&&As(b,D),v=y[M],b.duration=+la(c,On(o),M,v,y),b.delay=(+la(u,On(o),M,v,y)||0)-o._delay,!h&&R===1&&b.delay&&(o._delay=u=b.delay,o._start+=u,b.delay=0),T.to(v,b,S?S(M,v,y):0),T._ease=lt.none;T.duration()?c=u=0:o.timeline=0}else if(g){aa(Zi(T.vars.defaults,{ease:"none"})),T._ease=Pr(g.ease||r.ease||"none");var L=0,Y,k,V;if(mi(g))g.forEach(function(W){return T.to(y,W,">")}),T.duration();else{b={};for(A in g)A==="ease"||A==="easeEach"||$p(A,g[A],b,g.easeEach);for(A in b)for(Y=b[A].sort(function(W,U){return W.t-U.t}),L=0,M=0;M<Y.length;M++)k=Y[M],V={ease:k.e,duration:(k.t-(M?Y[M-1].t:0))/100*c},V[A]=k.v,T.to(y,V,L),L+=V.duration;T.duration()<c&&T.to({},{duration:c-T.duration()})}}c||o.duration(c=T.duration())}else o.timeline=0;return f===!0&&!Nc&&(er=On(o),Ct.killTweensOf(y),er=0),yn(p,On(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(d||!c&&!g&&o._start===Rt(p._time)&&Ci(d)&&Ap(On(o))&&p.data!=="nested")&&(o._tTime=-yt,o.render(Math.max(0,-u)||0)),_&&_f(On(o),_),o}var i=e.prototype;return i.render=function(r,s,a){var o=this._time,l=this._tDur,c=this._dur,u=r<0,d=r>l-yt&&!u?l:r<yt?0:r,h,f,g,m,_,p,y,T;if(!c)Rp(this,r,s,a);else if(d!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=d,T=this.timeline,this._repeat){if(m=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(m*100+r,s,a);if(h=Rt(d%m),d===l?(g=this._repeat,h=c):(_=Rt(d/m),g=~~_,g&&g===_?(h=c,g--):h>c&&(h=c)),p=this._yoyo&&g&1,p&&(h=c-h),_=ws(this._tTime,m),h===o&&!a&&this._initted&&g===_)return this._tTime=d,this;g!==_&&this.vars.repeatRefresh&&!p&&!this._lock&&h!==m&&this._initted&&(this._lock=a=1,this.render(Rt(m*g),!0).invalidate()._lock=0)}if(!this._initted){if(gf(this,u?r:h,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==_))return this;if(c!==this._dur)return this.render(r,s,a)}if(this._rEase){var M=h<o;if(M!==this._inv){var b=M?o:c-o;this._inv=M,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=b?(M?-1:1)/b:0,this._invScale=M?-this.ratio:1-this.ratio,this._invEase=M?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(h/c);if(this._from&&(this.ratio=y=1-y),this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!_&&(Wi(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(y,f.d),f=f._next;T&&T.render(r<0?r:T._dur*T._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&sc(this,r,s,a),Wi(this,"onUpdate")),this._repeat&&g!==_&&this.vars.onRepeat&&!s&&this.parent&&Wi(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&sc(this,r,!0,!0),(r||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&ur(this,1),!s&&!(u&&!o)&&(d||o||p)&&(Wi(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},i.targets=function(){return this._targets},i.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),t.prototype.invalidate.call(this,r)},i.resetTo=function(r,s,a,o,l){ya||Gi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Xc(this,c),u=this._ease(c/this._dur),Kp(this,r,s,a,o,u,c,l)?this.resetTo(r,s,a,o,1):(il(this,0),this.parent||pf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},i.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Js(this):this.scrollTrigger&&this.scrollTrigger.kill(!!oi),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,er&&er.vars.overwrite!==!0)._first||Js(this),this.parent&&a!==this.timeline.totalDuration()&&Rs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?an(r):o,c=this._ptLookup,u=this._pt,d,h,f,g,m,_,p;if((!s||s==="all")&&Tp(o,l))return s==="all"&&(this._pt=0),Js(this);for(d=this._op=this._op||[],s!=="all"&&(si(s)&&(m={},Pi(s,function(y){return m[y]=1}),s=m),s=Zp(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){h=c[p],s==="all"?(d[p]=s,g=h,f={}):(f=d[p]=d[p]||{},g=s);for(m in g)_=h&&h[m],_&&((!("kill"in _.d)||_.d.kill(m)===!0)&&el(this,_,"_pt"),delete h[m]),f!=="all"&&(f[m]=1)}return this._initted&&!this._pt&&u&&Js(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return oa(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return oa(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return Ct.killTweensOf(r,s,a)},e})(Ea);Zi(qt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Pi("staggerTo,staggerFrom,staggerFromTo",function(t){qt[t]=function(){var e=new Ri,i=oc.call(arguments,0);return i.splice(t==="staggerFromTo"?5:4,0,0),e[t].apply(e,i)}});var Yc=function(e,i,n){return e[i]=n},Nf=function(e,i,n){return e[i](n)},Jp=function(e,i,n,r){return e[i](r.fp,n)},Qp=function(e,i,n){return e.setAttribute(i,n)},qc=function(e,i){return Nt(e[i])?Nf:Oc(e[i])&&e.setAttribute?Qp:Yc},Of=function(e,i){return i.set(i.t,i.p,Math.round((i.s+i.c*e)*1e6)/1e6,i)},jp=function(e,i){return i.set(i.t,i.p,!!(i.s+i.c*e),i)},Ff=function(e,i){var n=i._pt,r="";if(!e&&i.b)r=i.b;else if(e===1&&i.e)r=i.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=i.c}i.set(i.t,i.p,r,i)},Kc=function(e,i){for(var n=i._pt;n;)n.r(e,n.d),n=n._next},em=function(e,i,n,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,i,n),s=a},tm=function(e){for(var i=this._pt,n,r;i;)r=i._next,i.p===e&&!i.op||i.op===e?el(this,i,"_pt"):i.dep||(n=1),i=r;return!n},im=function(e,i,n,r){r.mSet(e,i,r.m.call(r.tween,n,r.mt),r)},Bf=function(e){for(var i=e._pt,n,r,s,a;i;){for(n=i._next,r=s;r&&r.pr>i.pr;)r=r._next;(i._prev=r?r._prev:a)?i._prev._next=i:s=i,(i._next=r)?r._prev=i:a=i,i=n}e._pt=s},Di=(function(){function t(i,n,r,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=r,this.r=o||Of,this.d=l||this,this.set=c||Yc,this.pr=u||0,this._next=i,i&&(i._prev=this)}var e=t.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=im,this.m=n,this.mt=s,this.tween=r},t})();Pi(Vc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(t){return kc[t]=1});Ki.TweenMax=Ki.TweenLite=qt;Ki.TimelineLite=Ki.TimelineMax=Ri;Ct=new Ri({sortChildren:!1,defaults:va,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});qi.stringFilter=Cf;var Dr=[],bo={},nm=[],yu=0,rm=0,fl=function(e){return(bo[e]||nm).map(function(i){return i()})},hc=function(){var e=Date.now(),i=[];e-yu>2&&(fl("matchMediaInit"),Dr.forEach(function(n){var r=n.queries,s=n.conditions,a,o,l,c;for(o in r)a=Mn.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&i.push(n))}),fl("matchMediaRevert"),i.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),yu=e,fl("matchMedia"))},zf=(function(){function t(i,n){this.selector=n&&lc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=rm++,i&&this.add(i)}var e=t.prototype;return e.add=function(n,r,s){Nt(n)&&(s=r,r=n,n=Nt);var a=this,o=function(){var c=At,u=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=lc(s)),At=a,d=r.apply(a,arguments),Nt(d)&&a._r.push(d),At=c,a.selector=u,a.isReverted=!1,d};return a.last=o,n===Nt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var r=At;At=null,n(this),At=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof t?n.push.apply(n,r.getTweens()):r instanceof qt&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Ri?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof qt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=Dr.length;a--;)Dr[a].id===this.id&&Dr.splice(a,1)},e.revert=function(n){this.kill(n||{})},t})(),sm=(function(){function t(i){this.contexts=[],this.scope=i,At&&At.data.push(this)}var e=t.prototype;return e.add=function(n,r,s){wn(n)||(n={matches:n});var a=new zf(0,s||this.scope),o=a.conditions={},l,c,u;At&&!a.selector&&(a.selector=At.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=n;for(c in n)c==="all"?u=1:(l=Mn.matchMedia(n[c]),l&&(Dr.indexOf(a)<0&&Dr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(hc):l.addEventListener("change",hc)));return u&&r(a,function(d){return a.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},t})(),zo={registerPlugin:function(){for(var e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];i.forEach(function(r){return Af(r)})},timeline:function(e){return new Ri(e)},getTweensOf:function(e,i){return Ct.getTweensOf(e,i)},getProperty:function(e,i,n,r){si(e)&&(e=an(e)[0]);var s=Rr(e||{}).get,a=n?df:ff;return n==="native"&&(n=""),e&&(i?a((ki[i]&&ki[i].get||s)(e,i,n,r)):function(o,l,c){return a((ki[o]&&ki[o].get||s)(e,o,l,c))})},quickSetter:function(e,i,n){if(e=an(e),e.length>1){var r=e.map(function(u){return Ii.quickSetter(u,i,n)}),s=r.length;return function(u){for(var d=s;d--;)r[d](u)}}e=e[0]||{};var a=ki[i],o=Rr(e),l=o.harness&&(o.harness.aliases||{})[i]||i,c=a?function(u){var d=new a;ms._pt=0,d.init(e,n?u+n:u,ms,0,[e]),d.render(1,d),ms._pt&&Kc(1,ms)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,i,n){var r,s=Ii.to(e,Zi((r={},r[i]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),a=function(l,c,u){return s.resetTo(i,l,c,u)};return a.tween=s,a},isTweening:function(e){return Ct.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Pr(e.ease,va.ease)),gu(va,e||{})},config:function(e){return gu(qi,e||{})},registerEffect:function(e){var i=e.name,n=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!ki[o]&&!Ki[o]&&Ma(i+" effect requires "+o+" plugin.")}),ll[i]=function(o,l,c){return n(an(o),Zi(l||{},s),c)},a&&(Ri.prototype[i]=function(o,l,c){return this.add(ll[i](o,wn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,i){lt[e]=Pr(i)},parseEase:function(e,i){return arguments.length?Pr(e,i):lt},getById:function(e){return Ct.getById(e)},exportRoot:function(e,i){e===void 0&&(e={});var n=new Ri(e),r,s;for(n.smoothChildTiming=Ci(e.smoothChildTiming),Ct.remove(n),n._dp=0,n._time=n._tTime=Ct._time,r=Ct._first;r;)s=r._next,(i||!(!r._dur&&r instanceof qt&&r.vars.onComplete===r._targets[0]))&&yn(n,r,r._start-r._delay),r=s;return yn(Ct,n,0),n},context:function(e,i){return e?new zf(e,i):At},matchMedia:function(e){return new sm(e)},matchMediaRefresh:function(){return Dr.forEach(function(e){var i=e.conditions,n,r;for(r in i)i[r]&&(i[r]=!1,n=1);n&&e.revert()})||hc()},addEventListener:function(e,i){var n=bo[e]||(bo[e]=[]);~n.indexOf(i)||n.push(i)},removeEventListener:function(e,i){var n=bo[e],r=n&&n.indexOf(i);r>=0&&n.splice(r,1)},utils:{wrap:Op,wrapYoyo:Fp,distribute:xf,random:yf,snap:Sf,normalize:Np,getUnit:di,clamp:Dp,splitColor:wf,toArray:an,selector:lc,mapRange:Tf,pipe:Ip,unitize:Up,interpolate:Bp,shuffle:Mf},install:of,effects:ll,ticker:Gi,updateRoot:Ri.updateRoot,plugins:ki,globalTimeline:Ct,core:{PropTween:Di,globals:lf,Tween:qt,Timeline:Ri,Animation:Ea,getCache:Rr,_removeLinkedListItem:el,reverting:function(){return oi},context:function(e){return e&&At&&(At.data.push(e),e._ctx=At),At},suppressOverwrites:function(e){return Nc=e}}};Pi("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return zo[t]=qt[t]});Gi.add(Ri.updateRoot);ms=zo.to({},{duration:0});var am=function(e,i){for(var n=e._pt;n&&n.p!==i&&n.op!==i&&n.fp!==i;)n=n._next;return n},om=function(e,i){var n=e._targets,r,s,a;for(r in i)for(s=n.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=am(a,r)),a&&a.modifier&&a.modifier(i[r],e,n[s],r))},dl=function(e,i){return{name:e,headless:1,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,c;if(si(s)&&(l={},Pi(s,function(u){return l[u]=1}),s=l),i){l={};for(c in s)l[c]=i(s[c]);s=l}om(o,s)}}}},Ii=zo.registerPlugin({name:"attr",init:function(e,i,n,r,s){var a,o,l;this.tween=n;for(a in i)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",i[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,i){for(var n=i._pt;n;)oi?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,i){for(var n=i.length;n--;)this.add(e,n,e[n]||0,i[n],0,0,0,0,0,1)}},dl("roundProps",cc),dl("modifiers"),dl("snap",Sf))||zo;qt.version=Ri.version=Ii.version="3.15.0";af=1;Fc()&&Cs();var TM=lt.Power0,bM=lt.Power1,AM=lt.Power2,wM=lt.Power3,RM=lt.Power4,CM=lt.Linear,PM=lt.Quad,DM=lt.Cubic,LM=lt.Quart,IM=lt.Quint,UM=lt.Strong,NM=lt.Elastic,OM=lt.Back,FM=lt.SteppedEase,BM=lt.Bounce,zM=lt.Sine,kM=lt.Expo,VM=lt.Circ,Eu,tr,vs,Zc,Ar,Tu,$c,lm=function(){return typeof window<"u"},Wn={},Sr=180/Math.PI,Ms=Math.PI/180,qr=Math.atan2,bu=1e8,Jc=/([A-Z])/g,cm=/(left|right|width|margin|padding|x)/i,um=/[\s,\(]\S/,En={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},fc=function(e,i){return i.set(i.t,i.p,Math.round((i.s+i.c*e)*1e4)/1e4+i.u,i)},hm=function(e,i){return i.set(i.t,i.p,e===1?i.e:Math.round((i.s+i.c*e)*1e4)/1e4+i.u,i)},fm=function(e,i){return i.set(i.t,i.p,e?Math.round((i.s+i.c*e)*1e4)/1e4+i.u:i.b,i)},dm=function(e,i){return i.set(i.t,i.p,e===1?i.e:e?Math.round((i.s+i.c*e)*1e4)/1e4+i.u:i.b,i)},pm=function(e,i){var n=i.s+i.c*e;i.set(i.t,i.p,~~(n+(n<0?-.5:.5))+i.u,i)},kf=function(e,i){return i.set(i.t,i.p,e?i.e:i.b,i)},Vf=function(e,i){return i.set(i.t,i.p,e!==1?i.b:i.e,i)},mm=function(e,i,n){return e.style[i]=n},_m=function(e,i,n){return e.style.setProperty(i,n)},gm=function(e,i,n){return e._gsap[i]=n},vm=function(e,i,n){return e._gsap.scaleX=e._gsap.scaleY=n},Mm=function(e,i,n,r,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},xm=function(e,i,n,r,s){var a=e._gsap;a[i]=n,a.renderTransform(s,a)},Pt="transform",Li=Pt+"Origin",Sm=function t(e,i){var n=this,r=this.target,s=r.style,a=r._gsap;if(e in Wn&&s){if(this.tfm=this.tfm||{},e!=="transform")e=En[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Fn(r,o)}):this.tfm[e]=a.x?a[e]:Fn(r,e),e===Li&&(this.tfm.zOrigin=a.zOrigin);else return En.transform.split(",").forEach(function(o){return t.call(n,o,i)});if(this.props.indexOf(Pt)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Li,i,"")),e=Pt}(s||i)&&this.props.push(e,i,s[e])},Gf=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},ym=function(){var e=this.props,i=this.target,n=i.style,r=i._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?i[e[s]](e[s+2]):i[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Jc,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),i.setAttribute("data-svg-origin",this.svgo||"")),s=$c(),(!s||!s.isStart)&&!n[Pt]&&(Gf(n),r.zOrigin&&n[Li]&&(n[Li]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Hf=function(e,i){var n={target:e,props:[],revert:ym,save:Sm};return e._gsap||Ii.core.getCache(e),i&&e.style&&e.nodeType&&i.split(",").forEach(function(r){return n.save(r)}),n},Wf,dc=function(e,i){var n=tr.createElementNS?tr.createElementNS((i||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):tr.createElement(e);return n&&n.style?n:tr.createElement(e)},Xi=function t(e,i,n){var r=getComputedStyle(e);return r[i]||r.getPropertyValue(i.replace(Jc,"-$1").toLowerCase())||r.getPropertyValue(i)||!n&&t(e,Ps(i)||i,1)||""},Au="O,Moz,ms,Ms,Webkit".split(","),Ps=function(e,i,n){var r=(i||Ar).style,s=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(Au[s]+e in r););return s<0?null:(s===3?"ms":s>=0?Au[s]:"")+e},pc=function(){lm()&&window.document&&(Eu=window,tr=Eu.document,vs=tr.documentElement,Ar=dc("div")||{style:{}},dc("div"),Pt=Ps(Pt),Li=Pt+"Origin",Ar.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Wf=!!Ps("perspective"),$c=Ii.core.reverting,Zc=1)},wu=function(e){var i=e.ownerSVGElement,n=dc("svg",i&&i.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",n.appendChild(r),vs.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),vs.removeChild(n),s},Ru=function(e,i){for(var n=i.length;n--;)if(e.hasAttribute(i[n]))return e.getAttribute(i[n])},Xf=function(e){var i,n;try{i=e.getBBox()}catch{i=wu(e),n=1}return i&&(i.width||i.height)||n||(i=wu(e)),i&&!i.width&&!i.x&&!i.y?{x:+Ru(e,["x","cx","x1"])||0,y:+Ru(e,["y","cy","y1"])||0,width:0,height:0}:i},Yf=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Xf(e))},hr=function(e,i){if(i){var n=e.style,r;i in Wn&&i!==Li&&(i=Pt),n.removeProperty?(r=i.substr(0,2),(r==="ms"||i.substr(0,6)==="webkit")&&(i="-"+i),n.removeProperty(r==="--"?i:i.replace(Jc,"-$1").toLowerCase())):n.removeAttribute(i)}},ir=function(e,i,n,r,s,a){var o=new Di(e._pt,i,n,0,1,a?Vf:kf);return e._pt=o,o.b=r,o.e=s,e._props.push(n),o},Cu={deg:1,rad:1,turn:1},Em={grid:1,flex:1},fr=function t(e,i,n,r){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Ar.style,l=cm.test(i),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,h=r==="px",f=r==="%",g,m,_,p;if(r===a||!s||Cu[r]||Cu[a])return s;if(a!=="px"&&!h&&(s=t(e,i,n,"px")),p=e.getCTM&&Yf(e),(f||a==="%")&&(Wn[i]||~i.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],Vt(f?s/g*d:s/100*g);if(o[l?"width":"height"]=d+(h?a:r),m=r!=="rem"&&~i.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(m=(e.ownerSVGElement||{}).parentNode),(!m||m===tr||!m.appendChild)&&(m=tr.body),_=m._gsap,_&&f&&_.width&&l&&_.time===Gi.time&&!_.uncache)return Vt(s/_.width*d);if(f&&(i==="height"||i==="width")){var y=e.style[i];e.style[i]=d+r,g=e[u],y?e.style[i]=y:hr(e,i)}else(f||a==="%")&&!Em[Xi(m,"display")]&&(o.position=Xi(e,"position")),m===e&&(o.position="static"),m.appendChild(Ar),g=Ar[u],m.removeChild(Ar),o.position="absolute";return l&&f&&(_=Rr(m),_.time=Gi.time,_.width=m[u]),Vt(h?g*s/d:g&&s?d/g*s:0)},Fn=function(e,i,n,r){var s;return Zc||pc(),i in En&&i!=="transform"&&(i=En[i],~i.indexOf(",")&&(i=i.split(",")[0])),Wn[i]&&i!=="transform"?(s=ba(e,r),s=i!=="transformOrigin"?s[i]:s.svg?s.origin:Vo(Xi(e,Li))+" "+s.zOrigin+"px"):(s=e.style[i],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=ko[i]&&ko[i](e,i,n)||Xi(e,i)||uf(e,i)||(i==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?fr(e,i,s,n)+n:s},Tm=function(e,i,n,r){if(!n||n==="none"){var s=Ps(i,e,1),a=s&&Xi(e,s,1);a&&a!==n?(i=s,n=a):i==="borderColor"&&(n=Xi(e,"borderTopColor"))}var o=new Di(this._pt,e.style,i,0,1,Ff),l=0,c=0,u,d,h,f,g,m,_,p,y,T,M,b;if(o.b=n,o.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=Xi(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(m=e.style[i],e.style[i]=r,r=Xi(e,i)||r,m?e.style[i]=m:hr(e,i)),u=[n,r],Cf(u),n=u[0],r=u[1],h=n.match(ps)||[],b=r.match(ps)||[],b.length){for(;d=ps.exec(r);)_=d[0],y=r.substring(l,d.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),_!==(m=h[c++]||"")&&(f=parseFloat(m)||0,M=m.substr((f+"").length),_.charAt(1)==="="&&(_=gs(f,_)+M),p=parseFloat(_),T=_.substr((p+"").length),l=ps.lastIndex-T.length,T||(T=T||qi.units[i]||M,l===r.length&&(r+=T,o.e+=T)),M!==T&&(f=fr(e,i,m,T)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:f,c:p-f,m:g&&g<4||i==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=i==="display"&&r==="none"?Vf:kf;return sf.test(r)&&(o.e=0),this._pt=o,o},Pu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},bm=function(e){var i=e.split(" "),n=i[0],r=i[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),i[0]=Pu[n]||n,i[1]=Pu[r]||r,i.join(" ")},Am=function(e,i){if(i.tween&&i.tween._time===i.tween._dur){var n=i.t,r=n.style,s=i.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Wn[o]&&(l=1,o=o==="transformOrigin"?Li:Pt),hr(n,o);l&&(hr(n,Pt),a&&(a.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",ba(n,1),a.uncache=1,Gf(r)))}},ko={clearProps:function(e,i,n,r,s){if(s.data!=="isFromStart"){var a=e._pt=new Di(e._pt,i,n,0,0,Am);return a.u=r,a.pr=-10,a.tween=s,e._props.push(n),1}}},Ta=[1,0,0,1,0,0],qf={},Kf=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Du=function(e){var i=Xi(e,Pt);return Kf(i)?Ta:i.substr(7).match(rf).map(Vt)},Qc=function(e,i){var n=e._gsap||Rr(e),r=e.style,s=Du(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ta:s):(s===Ta&&!e.offsetParent&&e!==vs&&!n.svg&&(l=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,vs.appendChild(e)),s=Du(e),l?r.display=l:hr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):vs.removeChild(e))),i&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},mc=function(e,i,n,r,s,a){var o=e._gsap,l=s||Qc(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,d=o.xOffset||0,h=o.yOffset||0,f=l[0],g=l[1],m=l[2],_=l[3],p=l[4],y=l[5],T=i.split(" "),M=parseFloat(T[0])||0,b=parseFloat(T[1])||0,R,A,v,S;n?l!==Ta&&(A=f*_-g*m)&&(v=M*(_/A)+b*(-m/A)+(m*y-_*p)/A,S=M*(-g/A)+b*(f/A)-(f*y-g*p)/A,M=v,b=S):(R=Xf(e),M=R.x+(~T[0].indexOf("%")?M/100*R.width:M),b=R.y+(~(T[1]||T[0]).indexOf("%")?b/100*R.height:b)),r||r!==!1&&o.smooth?(p=M-c,y=b-u,o.xOffset=d+(p*f+y*m)-p,o.yOffset=h+(p*g+y*_)-y):o.xOffset=o.yOffset=0,o.xOrigin=M,o.yOrigin=b,o.smooth=!!r,o.origin=i,o.originIsAbsolute=!!n,e.style[Li]="0px 0px",a&&(ir(a,o,"xOrigin",c,M),ir(a,o,"yOrigin",u,b),ir(a,o,"xOffset",d,o.xOffset),ir(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",M+" "+b)},ba=function(e,i){var n=e._gsap||new Df(e);if("x"in n&&!i&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Xi(e,Li)||"0",u=d=h=m=_=p=y=T=M=0,d,h,f=g=1,g,m,_,p,y,T,M,b,R,A,v,S,D,C,L,Y,k,V,W,U,J,Q,P,ce,Se,rt,Oe,Z;return n.svg=!!(e.getCTM&&Yf(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Pt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Pt]!=="none"?l[Pt]:"")),r.scale=r.rotate=r.translate="none"),A=Qc(e,n.svg),n.svg&&(n.uncache?(J=e.getBBox(),c=n.xOrigin-J.x+"px "+(n.yOrigin-J.y)+"px",U=""):U=!i&&e.getAttribute("data-svg-origin"),mc(e,U||c,!!U||n.originIsAbsolute,n.smooth!==!1,A)),b=n.xOrigin||0,R=n.yOrigin||0,A!==Ta&&(C=A[0],L=A[1],Y=A[2],k=A[3],u=V=A[4],d=W=A[5],A.length===6?(f=Math.sqrt(C*C+L*L),g=Math.sqrt(k*k+Y*Y),m=C||L?qr(L,C)*Sr:0,y=Y||k?qr(Y,k)*Sr+m:0,y&&(g*=Math.abs(Math.cos(y*Ms))),n.svg&&(u-=b-(b*C+R*Y),d-=R-(b*L+R*k))):(Z=A[6],rt=A[7],P=A[8],ce=A[9],Se=A[10],Oe=A[11],u=A[12],d=A[13],h=A[14],v=qr(Z,Se),_=v*Sr,v&&(S=Math.cos(-v),D=Math.sin(-v),U=V*S+P*D,J=W*S+ce*D,Q=Z*S+Se*D,P=V*-D+P*S,ce=W*-D+ce*S,Se=Z*-D+Se*S,Oe=rt*-D+Oe*S,V=U,W=J,Z=Q),v=qr(-Y,Se),p=v*Sr,v&&(S=Math.cos(-v),D=Math.sin(-v),U=C*S-P*D,J=L*S-ce*D,Q=Y*S-Se*D,Oe=k*D+Oe*S,C=U,L=J,Y=Q),v=qr(L,C),m=v*Sr,v&&(S=Math.cos(v),D=Math.sin(v),U=C*S+L*D,J=V*S+W*D,L=L*S-C*D,W=W*S-V*D,C=U,V=J),_&&Math.abs(_)+Math.abs(m)>359.9&&(_=m=0,p=180-p),f=Vt(Math.sqrt(C*C+L*L+Y*Y)),g=Vt(Math.sqrt(W*W+Z*Z)),v=qr(V,W),y=Math.abs(v)>2e-4?v*Sr:0,M=Oe?1/(Oe<0?-Oe:Oe):0),n.svg&&(U=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Kf(Xi(e,Pt)),U&&e.setAttribute("transform",U))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(f*=-1,y+=m<=0?180:-180,m+=m<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),i=i||n.uncache,n.x=u-((n.xPercent=u&&(!i&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!i&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=Vt(f),n.scaleY=Vt(g),n.rotation=Vt(m)+o,n.rotationX=Vt(_)+o,n.rotationY=Vt(p)+o,n.skewX=y+o,n.skewY=T+o,n.transformPerspective=M+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!i&&n.zOrigin||0)&&(r[Li]=Vo(c)),n.xOffset=n.yOffset=0,n.force3D=qi.force3D,n.renderTransform=n.svg?Rm:Wf?Zf:wm,n.uncache=0,n},Vo=function(e){return(e=e.split(" "))[0]+" "+e[1]},pl=function(e,i,n){var r=di(i);return Vt(parseFloat(i)+parseFloat(fr(e,"x",n+"px",r)))+r},wm=function(e,i){i.z="0px",i.rotationY=i.rotationX="0deg",i.force3D=0,Zf(e,i)},mr="0deg",zs="0px",_r=") ",Zf=function(e,i){var n=i||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,h=n.skewX,f=n.skewY,g=n.scaleX,m=n.scaleY,_=n.transformPerspective,p=n.force3D,y=n.target,T=n.zOrigin,M="",b=p==="auto"&&e&&e!==1||p===!0;if(T&&(d!==mr||u!==mr)){var R=parseFloat(u)*Ms,A=Math.sin(R),v=Math.cos(R),S;R=parseFloat(d)*Ms,S=Math.cos(R),a=pl(y,a,A*S*-T),o=pl(y,o,-Math.sin(R)*-T),l=pl(y,l,v*S*-T+T)}_!==zs&&(M+="perspective("+_+_r),(r||s)&&(M+="translate("+r+"%, "+s+"%) "),(b||a!==zs||o!==zs||l!==zs)&&(M+=l!==zs||b?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+_r),c!==mr&&(M+="rotate("+c+_r),u!==mr&&(M+="rotateY("+u+_r),d!==mr&&(M+="rotateX("+d+_r),(h!==mr||f!==mr)&&(M+="skew("+h+", "+f+_r),(g!==1||m!==1)&&(M+="scale("+g+", "+m+_r),y.style[Pt]=M||"translate(0, 0)"},Rm=function(e,i){var n=i||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,h=n.scaleY,f=n.target,g=n.xOrigin,m=n.yOrigin,_=n.xOffset,p=n.yOffset,y=n.forceCSS,T=parseFloat(a),M=parseFloat(o),b,R,A,v,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ms,c*=Ms,b=Math.cos(l)*d,R=Math.sin(l)*d,A=Math.sin(l-c)*-h,v=Math.cos(l-c)*h,c&&(u*=Ms,S=Math.tan(c-u),S=Math.sqrt(1+S*S),A*=S,v*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),b*=S,R*=S)),b=Vt(b),R=Vt(R),A=Vt(A),v=Vt(v)):(b=d,v=h,R=A=0),(T&&!~(a+"").indexOf("px")||M&&!~(o+"").indexOf("px"))&&(T=fr(f,"x",a,"px"),M=fr(f,"y",o,"px")),(g||m||_||p)&&(T=Vt(T+g-(g*b+m*A)+_),M=Vt(M+m-(g*R+m*v)+p)),(r||s)&&(S=f.getBBox(),T=Vt(T+r/100*S.width),M=Vt(M+s/100*S.height)),S="matrix("+b+","+R+","+A+","+v+","+T+","+M+")",f.setAttribute("transform",S),y&&(f.style[Pt]=S)},Cm=function(e,i,n,r,s){var a=360,o=si(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Sr:1)-r,c=r+l+"deg",u,d;return o&&(u=s.split("_")[1],u==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),u==="cw"&&l<0?l=(l+a*bu)%a-~~(l/a)*a:u==="ccw"&&l>0&&(l=(l-a*bu)%a-~~(l/a)*a)),e._pt=d=new Di(e._pt,i,n,r,l,hm),d.e=c,d.u="deg",e._props.push(n),d},Lu=function(e,i){for(var n in i)e[n]=i[n];return e},Pm=function(e,i,n){var r=Lu({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,d,h,f,g;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Pt]=i,o=ba(n,1),hr(n,Pt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Pt],a[Pt]=i,o=ba(n,1),a[Pt]=c);for(l in Wn)c=r[l],u=o[l],c!==u&&s.indexOf(l)<0&&(f=di(c),g=di(u),d=f!==g?fr(n,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new Di(e._pt,o,l,d,h-d,fc),e._pt.u=g||0,e._props.push(l));Lu(o,r)};Pi("padding,margin,Width,Radius",function(t,e){var i="Top",n="Right",r="Bottom",s="Left",a=(e<3?[i,n,r,s]:[i+s,i+n,r+n,r+s]).map(function(o){return e<2?t+o:"border"+o+t});ko[e>1?"border"+t:t]=function(o,l,c,u,d){var h,f;if(arguments.length<4)return h=a.map(function(g){return Fn(o,g,c)}),f=h.join(" "),f.split(h[0]).length===5?h[0]:f;h=(u+"").split(" "),f={},a.forEach(function(g,m){return f[g]=h[m]=h[m]||h[(m-1)/2|0]}),o.init(l,f,d)}});var $f={name:"css",register:pc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,i,n,r,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,d,h,f,g,m,_,p,y,T,M,b,R,A,v,S;Zc||pc(),this.styles=this.styles||Hf(e),v=this.styles.props,this.tween=n;for(m in i)if(m!=="autoRound"&&(u=i[m],!(ki[m]&&Lf(m,i,n,r,e,s)))){if(f=typeof u,g=ko[m],f==="function"&&(u=u.call(n,r,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=Sa(u)),g)g(this,e,m,u,n)&&(A=1);else if(m.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(m)+"").trim(),u+="",or.lastIndex=0,or.test(c)||(_=di(c),p=di(u),p?_!==p&&(c=fr(e,m,c,p)+p):_&&(u+=_)),this.add(o,"setProperty",c,u,r,s,0,0,m),a.push(m),v.push(m,0,o[m]);else if(f!=="undefined"){if(l&&m in l?(c=typeof l[m]=="function"?l[m].call(n,r,e,s):l[m],si(c)&&~c.indexOf("random(")&&(c=Sa(c)),di(c+"")||c==="auto"||(c+=qi.units[m]||di(Fn(e,m))||""),(c+"").charAt(1)==="="&&(c=Fn(e,m))):c=Fn(e,m),h=parseFloat(c),y=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),d=parseFloat(u),m in En&&(m==="autoAlpha"&&(h===1&&Fn(e,"visibility")==="hidden"&&d&&(h=0),v.push("visibility",0,o.visibility),ir(this,o,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),m!=="scale"&&m!=="transform"&&(m=En[m],~m.indexOf(",")&&(m=m.split(",")[0]))),T=m in Wn,T){if(this.styles.save(m),S=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=Xi(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var D=e.style.perspective;e.style.perspective=u,u=Xi(e,"perspective"),D?e.style.perspective=D:hr(e,"perspective")}d=parseFloat(u)}if(M||(b=e._gsap,b.renderTransform&&!i.parseTransform||ba(e,i.parseTransform),R=i.smoothOrigin!==!1&&b.smooth,M=this._pt=new Di(this._pt,o,Pt,0,1,b.renderTransform,b,0,-1),M.dep=1),m==="scale")this._pt=new Di(this._pt,b,"scaleY",b.scaleY,(y?gs(b.scaleY,y+d):d)-b.scaleY||0,fc),this._pt.u=0,a.push("scaleY",m),m+="X";else if(m==="transformOrigin"){v.push(Li,0,o[Li]),u=bm(u),b.svg?mc(e,u,0,R,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==b.zOrigin&&ir(this,b,"zOrigin",b.zOrigin,p),ir(this,o,m,Vo(c),Vo(u)));continue}else if(m==="svgOrigin"){mc(e,u,1,R,0,this);continue}else if(m in qf){Cm(this,b,m,h,y?gs(h,y+u):u);continue}else if(m==="smoothOrigin"){ir(this,b,"smooth",b.smooth,u);continue}else if(m==="force3D"){b[m]=u;continue}else if(m==="transform"){Pm(this,u,e);continue}}else m in o||(m=Ps(m)||m);if(T||(d||d===0)&&(h||h===0)&&!um.test(u)&&m in o)_=(c+"").substr((h+"").length),d||(d=0),p=di(u)||(m in qi.units?qi.units[m]:_),_!==p&&(h=fr(e,m,c,p)),this._pt=new Di(this._pt,T?b:o,m,h,(y?gs(h,y+d):d)-h,!T&&(p==="px"||m==="zIndex")&&i.autoRound!==!1?pm:fc),this._pt.u=p||0,T&&S!==u?(this._pt.b=c,this._pt.e=S,this._pt.r=dm):_!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=fm);else if(m in o)Tm.call(this,e,m,c,y?y+u:u);else if(m in e)this.add(e,m,c||e[m],y?y+u:u,r,s);else if(m!=="parseTransform"){zc(m,u);continue}T||(m in o?v.push(m,0,o[m]):typeof e[m]=="function"?v.push(m,2,e[m]()):v.push(m,1,c||e[m])),a.push(m)}}A&&Bf(this)},render:function(e,i){if(i.tween._time||!$c())for(var n=i._pt;n;)n.r(e,n.d),n=n._next;else i.styles.revert()},get:Fn,aliases:En,getSetter:function(e,i,n){var r=En[i];return r&&r.indexOf(",")<0&&(i=r),i in Wn&&i!==Li&&(e._gsap.x||Fn(e,"x"))?n&&Tu===n?i==="scale"?vm:gm:(Tu=n||{})&&(i==="scale"?Mm:xm):e.style&&!Oc(e.style[i])?mm:~i.indexOf("-")?_m:qc(e,i)},core:{_removeProperty:hr,_getMatrix:Qc}};Ii.utils.checkPrefix=Ps;Ii.core.getStyleSaver=Hf;(function(t,e,i,n){var r=Pi(t+","+e+","+i,function(s){Wn[s]=1});Pi(e,function(s){qi.units[s]="deg",qf[s]=1}),En[r[13]]=t+","+e,Pi(n,function(s){var a=s.split(":");En[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Pi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){qi.units[t]="px"});Ii.registerPlugin($f);var Go=Ii.registerPlugin($f)||Ii,GM=Go.core.Tween;function Iu(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function Dm(t,e,i){return e&&Iu(t.prototype,e),i&&Iu(t,i),t}var ai,Ao,Hi,nr,rr,xs,Jf,yr,Ss,Qf,zn,dn,jf,ed=function(){return ai||typeof window<"u"&&(ai=window.gsap)&&ai.registerPlugin&&ai},td=1,_s=[],tt=[],bn=[],ca=Date.now,_c=function(e,i){return i},Lm=function(){var e=Ss.core,i=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,tt),r.push.apply(r,bn),tt=n,bn=r,_c=function(a,o){return i[a](o)}},lr=function(e,i){return~bn.indexOf(e)&&bn[bn.indexOf(e)+1][i]},ua=function(e){return!!~Qf.indexOf(e)},vi=function(e,i,n,r,s){return e.addEventListener(i,n,{passive:r!==!1,capture:!!s})},gi=function(e,i,n,r){return e.removeEventListener(i,n,!!r)},Ba="scrollLeft",za="scrollTop",gc=function(){return zn&&zn.isPressed||tt.cache++},Ho=function(e,i){var n=function r(s){if(s||s===0){td&&(Hi.history.scrollRestoration="manual");var a=zn&&zn.isPressed;s=r.v=Math.round(s)||(zn&&zn.iOS?1:0),e(s),r.cacheID=tt.cache,a&&_c("ss",s)}else(i||tt.cache!==r.cacheID||_c("ref"))&&(r.cacheID=tt.cache,r.v=e());return r.v+r.offset};return n.offset=0,e&&n},Ei={s:Ba,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Ho(function(t){return arguments.length?Hi.scrollTo(t,Jt.sc()):Hi.pageXOffset||nr[Ba]||rr[Ba]||xs[Ba]||0})},Jt={s:za,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Ei,sc:Ho(function(t){return arguments.length?Hi.scrollTo(Ei.sc(),t):Hi.pageYOffset||nr[za]||rr[za]||xs[za]||0})},wi=function(e,i){return(i&&i._ctx&&i._ctx.selector||ai.utils.toArray)(e)[0]||(typeof e=="string"&&ai.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Im=function(e,i){for(var n=i.length;n--;)if(i[n]===e||i[n].contains(e))return!0;return!1},dr=function(e,i){var n=i.s,r=i.sc;ua(e)&&(e=nr.scrollingElement||rr);var s=tt.indexOf(e),a=r===Jt.sc?1:2;!~s&&(s=tt.push(e)-1),tt[s+a]||vi(e,"scroll",gc);var o=tt[s+a],l=o||(tt[s+a]=Ho(lr(e,n),!0)||(ua(e)?r:Ho(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=ai.getProperty(e,"scrollBehavior")==="smooth"),l},vc=function(e,i,n){var r=e,s=e,a=ca(),o=a,l=i||50,c=Math.max(500,l*3),u=function(h,f){var g=ca();f||g-a>l?(s=r,r=h,o=a,a=g):n?r+=h:r=s+(h-s)/(g-o)*(a-o)};return{update:u,reset:function(){s=r=n?0:r,o=a=0},getVelocity:function(h){var f=o,g=s,m=ca();return(h||h===0)&&h!==r&&u(h),a===o||m-o>c?0:(r+(n?g:-g))/((n?m:a)-f)*1e3}}},ks=function(e,i){return i&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Uu=function(e){var i=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(i)>=Math.abs(n)?i:n},id=function(){Ss=ai.core.globals().ScrollTrigger,Ss&&Ss.core&&Lm()},nd=function(e){return ai=e||ed(),!Ao&&ai&&typeof document<"u"&&document.body&&(Hi=window,nr=document,rr=nr.documentElement,xs=nr.body,Qf=[Hi,nr,rr,xs],ai.utils.clamp,jf=ai.core.context||function(){},yr="onpointerenter"in xs?"pointer":"mouse",Jf=Ht.isTouch=Hi.matchMedia&&Hi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Hi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,dn=Ht.eventTypes=("ontouchstart"in rr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in rr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return td=0},500),Ao=1),Ss||id(),Ao};Ei.op=Jt;tt.cache=0;var Ht=(function(){function t(i){this.init(i)}var e=t.prototype;return e.init=function(n){Ao||nd(ai)||console.warn("Please gsap.registerPlugin(Observer)"),Ss||id();var r=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,d=n.onStop,h=n.onStopDelay,f=n.ignore,g=n.wheelSpeed,m=n.event,_=n.onDragStart,p=n.onDragEnd,y=n.onDrag,T=n.onPress,M=n.onRelease,b=n.onRight,R=n.onLeft,A=n.onUp,v=n.onDown,S=n.onChangeX,D=n.onChangeY,C=n.onChange,L=n.onToggleX,Y=n.onToggleY,k=n.onHover,V=n.onHoverEnd,W=n.onMove,U=n.ignoreCheck,J=n.isNormalizer,Q=n.onGestureStart,P=n.onGestureEnd,ce=n.onWheel,Se=n.onEnable,rt=n.onDisable,Oe=n.onClick,Z=n.scrollSpeed,se=n.capture,de=n.allowClicks,pe=n.lockAxis,be=n.onLockAxis;this.target=o=wi(o)||rr,this.vars=n,f&&(f=ai.utils.toArray(f)),r=r||1e-9,s=s||0,g=g||1,Z=Z||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Hi.getComputedStyle(xs).lineHeight)||22);var De,Re,Ve,ye,ze,ct,_t,K=this,Ke=0,vt=0,Mt=n.passive||!u&&n.passive!==!1,Xe=dr(o,Ei),O=dr(o,Jt),Ft=Xe(),je=O(),He=~a.indexOf("touch")&&!~a.indexOf("pointer")&&dn[0]==="pointerdown",w=ua(o),x=o.ownerDocument||nr,I=[0,0,0],X=[0,0,0],ee=0,ue=function(){return ee=ca()},oe=function(ae,ke){return(K.event=ae)&&f&&Im(ae.target,f)||ke&&He&&ae.pointerType!=="touch"||U&&U(ae,ke)},F=function(){K._vx.reset(),K._vy.reset(),Re.pause(),d&&d(K)},le=function(){var ae=K.deltaX=Uu(I),ke=K.deltaY=Uu(X),re=Math.abs(ae)>=r,Le=Math.abs(ke)>=r;C&&(re||Le)&&C(K,ae,ke,I,X),re&&(b&&K.deltaX>0&&b(K),R&&K.deltaX<0&&R(K),S&&S(K),L&&K.deltaX<0!=Ke<0&&L(K),Ke=K.deltaX,I[0]=I[1]=I[2]=0),Le&&(v&&K.deltaY>0&&v(K),A&&K.deltaY<0&&A(K),D&&D(K),Y&&K.deltaY<0!=vt<0&&Y(K),vt=K.deltaY,X[0]=X[1]=X[2]=0),(ye||Ve)&&(W&&W(K),Ve&&(_&&Ve===1&&_(K),y&&y(K),Ve=0),ye=!1),ct&&!(ct=!1)&&be&&be(K),ze&&(ce(K),ze=!1),De=0},ve=function(ae,ke,re){I[re]+=ae,X[re]+=ke,K._vx.update(ae),K._vy.update(ke),c?De||(De=requestAnimationFrame(le)):le()},Ee=function(ae,ke){pe&&!_t&&(K.axis=_t=Math.abs(ae)>Math.abs(ke)?"x":"y",ct=!0),_t!=="y"&&(I[2]+=ae,K._vx.update(ae,!0)),_t!=="x"&&(X[2]+=ke,K._vy.update(ke,!0)),c?De||(De=requestAnimationFrame(le)):le()},ie=function(ae){if(!oe(ae,1)){ae=ks(ae,u);var ke=ae.clientX,re=ae.clientY,Le=ke-K.x,Ce=re-K.y,Ge=K.isDragging;K.x=ke,K.y=re,(Ge||(Le||Ce)&&(Math.abs(K.startX-ke)>=s||Math.abs(K.startY-re)>=s))&&(Ve||(Ve=Ge?2:1),Ge||(K.isDragging=!0),Ee(Le,Ce))}},Te=K.onPress=function(j){oe(j,1)||j&&j.button||(K.axis=_t=null,Re.pause(),K.isPressed=!0,j=ks(j),Ke=vt=0,K.startX=K.x=j.clientX,K.startY=K.y=j.clientY,K._vx.reset(),K._vy.reset(),vi(J?o:x,dn[1],ie,Mt,!0),K.deltaX=K.deltaY=0,T&&T(K))},he=K.onRelease=function(j){if(!oe(j,1)){gi(J?o:x,dn[1],ie,!0);var ae=!isNaN(K.y-K.startY),ke=K.isDragging,re=ke&&(Math.abs(K.x-K.startX)>3||Math.abs(K.y-K.startY)>3),Le=ks(j);!re&&ae&&(K._vx.reset(),K._vy.reset(),u&&de&&ai.delayedCall(.08,function(){if(ca()-ee>300&&!j.defaultPrevented){if(j.target.click)j.target.click();else if(x.createEvent){var Ce=x.createEvent("MouseEvents");Ce.initMouseEvent("click",!0,!0,Hi,1,Le.screenX,Le.screenY,Le.clientX,Le.clientY,!1,!1,!1,!1,0,null),j.target.dispatchEvent(Ce)}}})),K.isDragging=K.isGesturing=K.isPressed=!1,d&&ke&&!J&&Re.restart(!0),Ve&&le(),p&&ke&&p(K),M&&M(K,re)}},Ie=function(ae){return ae.touches&&ae.touches.length>1&&(K.isGesturing=!0)&&Q(ae,K.isDragging)},We=function(){return(K.isGesturing=!1)||P(K)},N=function(ae){if(!oe(ae)){var ke=Xe(),re=O();ve((ke-Ft)*Z,(re-je)*Z,1),Ft=ke,je=re,d&&Re.restart(!0)}},$=function(ae){if(!oe(ae)){ae=ks(ae,u),ce&&(ze=!0);var ke=(ae.deltaMode===1?l:ae.deltaMode===2?Hi.innerHeight:1)*g;ve(ae.deltaX*ke,ae.deltaY*ke,0),d&&!J&&Re.restart(!0)}},te=function(ae){if(!oe(ae)){var ke=ae.clientX,re=ae.clientY,Le=ke-K.x,Ce=re-K.y;K.x=ke,K.y=re,ye=!0,d&&Re.restart(!0),(Le||Ce)&&Ee(Le,Ce)}},ge=function(ae){K.event=ae,k(K)},Me=function(ae){K.event=ae,V(K)},ne=function(ae){return oe(ae)||ks(ae,u)&&Oe(K)};Re=K._dc=ai.delayedCall(h||.25,F).pause(),K.deltaX=K.deltaY=0,K._vx=vc(0,50,!0),K._vy=vc(0,50,!0),K.scrollX=Xe,K.scrollY=O,K.isDragging=K.isGesturing=K.isPressed=!1,jf(this),K.enable=function(j){return K.isEnabled||(vi(w?x:o,"scroll",gc),a.indexOf("scroll")>=0&&vi(w?x:o,"scroll",N,Mt,se),a.indexOf("wheel")>=0&&vi(o,"wheel",$,Mt,se),(a.indexOf("touch")>=0&&Jf||a.indexOf("pointer")>=0)&&(vi(o,dn[0],Te,Mt,se),vi(x,dn[2],he),vi(x,dn[3],he),de&&vi(o,"click",ue,!0,!0),Oe&&vi(o,"click",ne),Q&&vi(x,"gesturestart",Ie),P&&vi(x,"gestureend",We),k&&vi(o,yr+"enter",ge),V&&vi(o,yr+"leave",Me),W&&vi(o,yr+"move",te)),K.isEnabled=!0,K.isDragging=K.isGesturing=K.isPressed=ye=Ve=!1,K._vx.reset(),K._vy.reset(),Ft=Xe(),je=O(),j&&j.type&&Te(j),Se&&Se(K)),K},K.disable=function(){K.isEnabled&&(_s.filter(function(j){return j!==K&&ua(j.target)}).length||gi(w?x:o,"scroll",gc),K.isPressed&&(K._vx.reset(),K._vy.reset(),gi(J?o:x,dn[1],ie,!0)),gi(w?x:o,"scroll",N,se),gi(o,"wheel",$,se),gi(o,dn[0],Te,se),gi(x,dn[2],he),gi(x,dn[3],he),gi(o,"click",ue,!0),gi(o,"click",ne),gi(x,"gesturestart",Ie),gi(x,"gestureend",We),gi(o,yr+"enter",ge),gi(o,yr+"leave",Me),gi(o,yr+"move",te),K.isEnabled=K.isPressed=K.isDragging=!1,rt&&rt(K))},K.kill=K.revert=function(){K.disable();var j=_s.indexOf(K);j>=0&&_s.splice(j,1),zn===K&&(zn=0)},_s.push(K),J&&ua(o)&&(zn=K),K.enable(m)},Dm(t,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),t})();Ht.version="3.15.0";Ht.create=function(t){return new Ht(t)};Ht.register=nd;Ht.getAll=function(){return _s.slice()};Ht.getById=function(t){return _s.filter(function(e){return e.vars.id===t})[0]};ed()&&ai.registerPlugin(Ht);var Ae,us,et,mt,Vi,pt,jc,Wo,Aa,ha,js,ka,hi,nl,Mc,Si,Nu,Ou,hs,rd,ml,sd,xi,xc,ad,od,jn,Sc,eu,ys,tu,fa,yc,_l,Va=1,fi=Date.now,gl=fi(),on=0,ea=0,Fu=function(e,i,n){var r=zi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+i+"Clamp"]=r,r?e.substr(6,e.length-7):e},Bu=function(e,i){return i&&(!zi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Um=function t(){return ea&&requestAnimationFrame(t)},zu=function(){return nl=1},ku=function(){return nl=0},xn=function(e){return e},ta=function(e){return Math.round(e*1e5)/1e5||0},ld=function(){return typeof window<"u"},cd=function(){return Ae||ld()&&(Ae=window.gsap)&&Ae.registerPlugin&&Ae},Nr=function(e){return!!~jc.indexOf(e)},ud=function(e){return(e==="Height"?tu:et["inner"+e])||Vi["client"+e]||pt["client"+e]},hd=function(e){return lr(e,"getBoundingClientRect")||(Nr(e)?function(){return Do.width=et.innerWidth,Do.height=tu,Do}:function(){return Bn(e)})},Nm=function(e,i,n){var r=n.d,s=n.d2,a=n.a;return(a=lr(e,"getBoundingClientRect"))?function(){return a()[r]}:function(){return(i?ud(s):e["client"+s])||0}},Om=function(e,i){return!i||~bn.indexOf(e)?hd(e):function(){return Do}},Tn=function(e,i){var n=i.s,r=i.d2,s=i.d,a=i.a;return Math.max(0,(n="scroll"+r)&&(a=lr(e,n))?a()-hd(e)()[s]:Nr(e)?(Vi[n]||pt[n])-ud(r):e[n]-e["offset"+r])},Ga=function(e,i){for(var n=0;n<hs.length;n+=3)(!i||~i.indexOf(hs[n+1]))&&e(hs[n],hs[n+1],hs[n+2])},zi=function(e){return typeof e=="string"},pi=function(e){return typeof e=="function"},ia=function(e){return typeof e=="number"},Er=function(e){return typeof e=="object"},Vs=function(e,i,n){return e&&e.progress(i?0:1)&&n&&e.pause()},Kr=function(e,i,n){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return i(e,n)}):i(e,n);r&&r.totalTime&&(e.callbackAnimation=r)}},Zr=Math.abs,fd="left",dd="top",iu="right",nu="bottom",Lr="width",Ir="height",da="Right",pa="Left",ma="Top",_a="Bottom",Yt="padding",en="margin",Ds="Width",ru="Height",$t="px",tn=function(e){return et.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},Fm=function(e){var i=tn(e).position;e.style.position=i==="absolute"||i==="fixed"?i:"relative"},Vu=function(e,i){for(var n in i)n in e||(e[n]=i[n]);return e},Bn=function(e,i){var n=i&&tn(e)[Mc]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ae.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),r},Xo=function(e,i){var n=i.d2;return e["offset"+n]||e["client"+n]||0},pd=function(e){var i=[],n=e.labels,r=e.duration(),s;for(s in n)i.push(n[s]/r);return i},Bm=function(e){return function(i){return Ae.utils.snap(pd(e),i)}},su=function(e){var i=Ae.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return n?function(r,s,a){a===void 0&&(a=.001);var o;if(!s)return i(r);if(s>0){for(r-=a,o=0;o<n.length;o++)if(n[o]>=r)return n[o];return n[o-1]}else for(o=n.length,r+=a;o--;)if(n[o]<=r)return n[o];return n[0]}:function(r,s,a){a===void 0&&(a=.001);var o=i(r);return!s||Math.abs(o-r)<a||o-r<0==s<0?o:i(s<0?r-e:r+e)}},zm=function(e){return function(i,n){return su(pd(e))(i,n.direction)}},Ha=function(e,i,n,r){return n.split(",").forEach(function(s){return e(i,s,r)})},ri=function(e,i,n,r,s){return e.addEventListener(i,n,{passive:!r,capture:!!s})},ni=function(e,i,n,r){return e.removeEventListener(i,n,!!r)},Wa=function(e,i,n){n=n&&n.wheelHandler,n&&(e(i,"wheel",n),e(i,"touchmove",n))},Gu={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Xa={toggleActions:"play",anticipatePin:0},Yo={top:0,left:0,center:.5,bottom:1,right:1},wo=function(e,i){if(zi(e)){var n=e.indexOf("="),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=i/100),e=e.substr(0,n-1)),e=r+(e in Yo?Yo[e]*i:~e.indexOf("%")?parseFloat(e)*i/100:parseFloat(e)||0)}return e},Ya=function(e,i,n,r,s,a,o,l){var c=s.startColor,u=s.endColor,d=s.fontSize,h=s.indent,f=s.fontWeight,g=mt.createElement("div"),m=Nr(n)||lr(n,"pinType")==="fixed",_=e.indexOf("scroller")!==-1,p=m?pt:n.tagName==="IFRAME"?n.contentDocument.body:n,y=e.indexOf("start")!==-1,T=y?c:u,M="border-color:"+T+";font-size:"+d+";color:"+T+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return M+="position:"+((_||l)&&m?"fixed;":"absolute;"),(_||l||!m)&&(M+=(r===Jt?iu:nu)+":"+(a+parseFloat(h))+"px;"),o&&(M+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=y,g.setAttribute("class","gsap-marker-"+e+(i?" marker-"+i:"")),g.style.cssText=M,g.innerText=i||i===0?e+"-"+i:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+r.op.d2],Ro(g,0,r,y),g},Ro=function(e,i,n,r){var s={display:"block"},a=n[r?"os2":"p2"],o=n[r?"p2":"os2"];e._isFlipped=r,s[n.a+"Percent"]=r?-100:0,s[n.a]=r?"1px":0,s["border"+a+Ds]=1,s["border"+o+Ds]=0,s[n.p]=i+"px",Ae.set(e,s)},Je=[],Ec={},wa,Hu=function(){return fi()-on>34&&(wa||(wa=requestAnimationFrame(Vn)))},$r=function(){(!xi||!xi.isPressed||xi.startX>pt.clientWidth)&&(tt.cache++,xi?wa||(wa=requestAnimationFrame(Vn)):Vn(),on||Fr("scrollStart"),on=fi())},vl=function(){od=et.innerWidth,ad=et.innerHeight},na=function(e){tt.cache++,(e===!0||!hi&&!sd&&!mt.fullscreenElement&&!mt.webkitFullscreenElement&&(!xc||od!==et.innerWidth||Math.abs(et.innerHeight-ad)>et.innerHeight*.25))&&Wo.restart(!0)},Or={},km=[],md=function t(){return ni(it,"scrollEnd",t)||wr(!0)},Fr=function(e){return Or[e]&&Or[e].map(function(i){return i()})||km},Bi=[],_d=function(e){for(var i=0;i<Bi.length;i+=5)(!e||Bi[i+4]&&Bi[i+4].query===e)&&(Bi[i].style.cssText=Bi[i+1],Bi[i].getBBox&&Bi[i].setAttribute("transform",Bi[i+2]||""),Bi[i+3].uncache=1)},gd=function(){return tt.forEach(function(e){return pi(e)&&++e.cacheID&&(e.rec=e())})},au=function(e,i){var n;for(Si=0;Si<Je.length;Si++)n=Je[Si],n&&(!i||n._ctx===i)&&(e?n.kill(1):n.revert(!0,!0));fa=!0,i&&_d(i),i||Fr("revert")},vd=function(e,i){tt.cache++,(i||!yi)&&tt.forEach(function(n){return pi(n)&&n.cacheID++&&(n.rec=0)}),zi(e)&&(et.history.scrollRestoration=eu=e)},yi,Ur=0,Wu,Vm=function(){if(Wu!==Ur){var e=Wu=Ur;requestAnimationFrame(function(){return e===Ur&&wr(!0)})}},Md=function(){pt.appendChild(ys),tu=!xi&&ys.offsetHeight||et.innerHeight,pt.removeChild(ys)},Xu=function(e){return Aa(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(i){return i.style.display=e?"none":"block"})},wr=function(e,i){if(Vi=mt.documentElement,pt=mt.body,jc=[et,mt,Vi,pt],on&&!e&&!fa){ri(it,"scrollEnd",md);return}Md(),yi=it.isRefreshing=!0,fa||gd();var n=Fr("refreshInit");rd&&it.sort(),i||au(),tt.forEach(function(r){pi(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),Je.slice(0).forEach(function(r){return r.refresh()}),fa=!1,Je.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",a=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-a),r.refresh()}}),yc=1,Xu(!0),Je.forEach(function(r){var s=Tn(r.scroller,r._dir),a=r.vars.end==="max"||r._endClamp&&r.end>s,o=r._startClamp&&r.start>=s;(a||o)&&r.setPositions(o?s-1:r.start,a?Math.max(o?s:r.start+1,s):r.end,!0)}),Xu(!1),yc=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),tt.forEach(function(r){pi(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),vd(eu,1),Wo.pause(),Ur++,yi=2,Vn(2),Je.forEach(function(r){return pi(r.vars.onRefresh)&&r.vars.onRefresh(r)}),yi=it.isRefreshing=!1,Fr("refresh")},Tc=0,Co=1,ga,Vn=function(e){if(e===2||!yi&&!fa){it.isUpdating=!0,ga&&ga.update(0);var i=Je.length,n=fi(),r=n-gl>=50,s=i&&Je[0].scroll();if(Co=Tc>s?-1:1,yi||(Tc=s),r&&(on&&!nl&&n-on>200&&(on=0,Fr("scrollEnd")),js=gl,gl=n),Co<0){for(Si=i;Si-- >0;)Je[Si]&&Je[Si].update(0,r);Co=1}else for(Si=0;Si<i;Si++)Je[Si]&&Je[Si].update(0,r);it.isUpdating=!1}wa=0},bc=[fd,dd,nu,iu,en+_a,en+da,en+ma,en+pa,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Po=bc.concat([Lr,Ir,"boxSizing","max"+Ds,"max"+ru,"position",en,Yt,Yt+ma,Yt+da,Yt+_a,Yt+pa]),Gm=function(e,i,n){Es(n);var r=e._gsap;if(r.spacerIsNative)Es(r.spacerState);else if(e._gsap.swappedIn){var s=i.parentNode;s&&(s.insertBefore(e,i),s.removeChild(i))}e._gsap.swappedIn=!1},Ml=function(e,i,n,r){if(!e._gsap.swappedIn){for(var s=bc.length,a=i.style,o=e.style,l;s--;)l=bc[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[nu]=o[iu]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Lr]=Xo(e,Ei)+$t,a[Ir]=Xo(e,Jt)+$t,a[Yt]=o[en]=o[dd]=o[fd]="0",Es(r),o[Lr]=o["max"+Ds]=n[Lr],o[Ir]=o["max"+ru]=n[Ir],o[Yt]=n[Yt],e.parentNode!==i&&(e.parentNode.insertBefore(i,e),i.appendChild(e)),e._gsap.swappedIn=!0}},Hm=/([A-Z])/g,Es=function(e){if(e){var i=e.t.style,n=e.length,r=0,s,a;for((e.t._gsap||Ae.core.getCache(e.t)).uncache=1;r<n;r+=2)a=e[r+1],s=e[r],a?i[s]=a:i[s]&&i.removeProperty(s.replace(Hm,"-$1").toLowerCase())}},qa=function(e){for(var i=Po.length,n=e.style,r=[],s=0;s<i;s++)r.push(Po[s],n[Po[s]]);return r.t=e,r},Wm=function(e,i,n){for(var r=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],r.push(o,o in i?i[o]:e[a+1]);return r.t=e.t,r},Do={left:0,top:0},Yu=function(e,i,n,r,s,a,o,l,c,u,d,h,f,g){pi(e)&&(e=e(l)),zi(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?wo("0"+e.substr(3),n):0));var m=f?f.time():0,_,p,y;if(f&&f.seek(0),isNaN(e)||(e=+e),ia(e))f&&(e=Ae.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,h,e)),o&&Ro(o,n,r,!0);else{pi(i)&&(i=i(l));var T=(e||"0").split(" "),M,b,R,A;y=wi(i,l)||pt,M=Bn(y)||{},(!M||!M.left&&!M.top)&&tn(y).display==="none"&&(A=y.style.display,y.style.display="block",M=Bn(y),A?y.style.display=A:y.style.removeProperty("display")),b=wo(T[0],M[r.d]),R=wo(T[1]||"0",n),e=M[r.p]-c[r.p]-u+b+s-R,o&&Ro(o,R,r,n-R<20||o._isStart&&R>20),n-=n-R}if(g&&(l[g]=e||-.001,e<0&&(e=0)),a){var v=e+n,S=a._isStart;_="scroll"+r.d2,Ro(a,v,r,S&&v>20||!S&&(d?Math.max(pt[_],Vi[_]):a.parentNode[_])<=v+1),d&&(c=Bn(o),d&&(a.style[r.op.p]=c[r.op.p]-r.op.m-a._offset+$t))}return f&&y&&(_=Bn(y),f.seek(h),p=Bn(y),f._caScrollDist=_[r.p]-p[r.p],e=e/f._caScrollDist*h),f&&f.seek(m),f?e:Math.round(e)},Xm=/(webkit|moz|length|cssText|inset)/i,qu=function(e,i,n,r){if(e.parentNode!==i){var s=e.style,a,o;if(i===pt){e._stOrig=s.cssText,o=tn(e);for(a in o)!+a&&!Xm.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=r}else s.cssText=e._stOrig;Ae.core.getCache(e).uncache=1,i.appendChild(e)}},xd=function(e,i,n){var r=i,s=r;return function(a){var o=Math.round(e());return o!==r&&o!==s&&Math.abs(o-r)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=r,r=Math.round(a),r}},Ka=function(e,i,n){var r={};r[i.p]="+="+n,Ae.set(e,r)},Ku=function(e,i){var n=dr(e,i),r="_scroll"+i.p2,s=function a(o,l,c,u,d){var h=a.tween,f=l.onComplete,g={};c=c||n();var m=xd(n,c,function(){h.kill(),a.tween=0});return d=u&&d||0,u=u||o-c,h&&h.kill(),l[r]=o,l.inherit=!1,l.modifiers=g,g[r]=function(){return m(c+u*h.ratio+d*h.ratio*h.ratio)},l.onUpdate=function(){tt.cache++,a.tween&&Vn()},l.onComplete=function(){a.tween=0,f&&f.call(h)},h=a.tween=Ae.to(e,l),h};return e[r]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},ri(e,"wheel",n.wheelHandler),it.isTouch&&ri(e,"touchmove",n.wheelHandler),s},it=(function(){function t(i,n){us||t.register(Ae)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Sc(this),this.init(i,n)}var e=t.prototype;return e.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ea){this.update=this.refresh=this.kill=xn;return}n=Vu(zi(n)||ia(n)||n.nodeType?{trigger:n}:n,Xa);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,d=s.scrub,h=s.trigger,f=s.pin,g=s.pinSpacing,m=s.invalidateOnRefresh,_=s.anticipatePin,p=s.onScrubComplete,y=s.onSnapComplete,T=s.once,M=s.snap,b=s.pinReparent,R=s.pinSpacer,A=s.containerAnimation,v=s.fastScrollEnd,S=s.preventOverlaps,D=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Ei:Jt,C=!d&&d!==0,L=wi(n.scroller||et),Y=Ae.core.getCache(L),k=Nr(L),V=("pinType"in n?n.pinType:lr(L,"pinType")||k&&"fixed")==="fixed",W=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],U=C&&n.toggleActions.split(" "),J="markers"in n?n.markers:Xa.markers,Q=k?0:parseFloat(tn(L)["border"+D.p2+Ds])||0,P=this,ce=n.onRefreshInit&&function(){return n.onRefreshInit(P)},Se=Nm(L,k,D),rt=Om(L,k),Oe=0,Z=0,se=0,de=dr(L,D),pe,be,De,Re,Ve,ye,ze,ct,_t,K,Ke,vt,Mt,Xe,O,Ft,je,He,w,x,I,X,ee,ue,oe,F,le,ve,Ee,ie,Te,he,Ie,We,N,$,te,ge,Me;if(P._startClamp=P._endClamp=!1,P._dir=D,_*=45,P.scroller=L,P.scroll=A?A.time.bind(A):de,Re=de(),P.vars=n,r=r||n.animation,"refreshPriority"in n&&(rd=1,n.refreshPriority===-9999&&(ga=P)),Y.tweenScroll=Y.tweenScroll||{top:Ku(L,Jt),left:Ku(L,Ei)},P.tweenTo=pe=Y.tweenScroll[D.p],P.scrubDuration=function(re){Ie=ia(re)&&re,Ie?he?he.duration(re):he=Ae.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ie,paused:!0,onComplete:function(){return p&&p(P)}}):(he&&he.progress(1).kill(),he=0)},r&&(r.vars.lazy=!1,r._initted&&!P.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),P.animation=r.pause(),r.scrollTrigger=P,P.scrubDuration(d),ie=0,l||(l=r.vars.id)),M&&((!Er(M)||M.push)&&(M={snapTo:M}),"scrollBehavior"in pt.style&&Ae.set(k?[pt,Vi]:L,{scrollBehavior:"auto"}),tt.forEach(function(re){return pi(re)&&re.target===(k?mt.scrollingElement||Vi:L)&&(re.smooth=!1)}),De=pi(M.snapTo)?M.snapTo:M.snapTo==="labels"?Bm(r):M.snapTo==="labelsDirectional"?zm(r):M.directional!==!1?function(re,Le){return su(M.snapTo)(re,fi()-Z<500?0:Le.direction)}:Ae.utils.snap(M.snapTo),We=M.duration||{min:.1,max:2},We=Er(We)?ha(We.min,We.max):ha(We,We),N=Ae.delayedCall(M.delay||Ie/2||.1,function(){var re=de(),Le=fi()-Z<500,Ce=pe.tween;if((Le||Math.abs(P.getVelocity())<10)&&!Ce&&!nl&&Oe!==re){var Ge=(re-ye)/Xe,Bt=r&&!C?r.totalProgress():Ge,Ze=Le?0:(Bt-Te)/(fi()-js)*1e3||0,wt=Ae.utils.clamp(-Ge,1-Ge,Zr(Ze/2)*Ze/.185),Kt=Ge+(M.inertia===!1?0:wt),bt,ut,ft=M,bi=ft.onStart,Et=ft.onInterrupt,ei=ft.onComplete;if(bt=De(Kt,P),ia(bt)||(bt=Kt),ut=Math.max(0,Math.round(ye+bt*Xe)),re<=ze&&re>=ye&&ut!==re){if(Ce&&!Ce._initted&&Ce.data<=Zr(ut-re))return;M.inertia===!1&&(wt=bt-Ge),pe(ut,{duration:We(Zr(Math.max(Zr(Kt-Bt),Zr(bt-Bt))*.185/Ze/.05||0)),ease:M.ease||"power3",data:Zr(ut-re),onInterrupt:function(){return N.restart(!0)&&Et&&Kr(P,Et)},onComplete:function(){P.update(),Oe=de(),r&&!C&&(he?he.resetTo("totalProgress",bt,r._tTime/r._tDur):r.progress(bt)),ie=Te=r&&!C?r.totalProgress():P.progress,y&&y(P),ei&&Kr(P,ei)}},re,wt*Xe,ut-re-wt*Xe),bi&&Kr(P,bi,pe.tween)}}else P.isActive&&Oe!==re&&N.restart(!0)}).pause()),l&&(Ec[l]=P),h=P.trigger=wi(h||f!==!0&&f),Me=h&&h._gsap&&h._gsap.stRevert,Me&&(Me=Me(P)),f=f===!0?h:wi(f),zi(o)&&(o={targets:h,className:o}),f&&(g===!1||g===en||(g=!g&&f.parentNode&&f.parentNode.style&&tn(f.parentNode).display==="flex"?!1:Yt),P.pin=f,be=Ae.core.getCache(f),be.spacer?O=be.pinState:(R&&(R=wi(R),R&&!R.nodeType&&(R=R.current||R.nativeElement),be.spacerIsNative=!!R,R&&(be.spacerState=qa(R))),be.spacer=He=R||mt.createElement("div"),He.classList.add("pin-spacer"),l&&He.classList.add("pin-spacer-"+l),be.pinState=O=qa(f)),n.force3D!==!1&&Ae.set(f,{force3D:!0}),P.spacer=He=be.spacer,Ee=tn(f),ue=Ee[g+D.os2],x=Ae.getProperty(f),I=Ae.quickSetter(f,D.a,$t),Ml(f,He,Ee),je=qa(f)),J){vt=Er(J)?Vu(J,Gu):Gu,K=Ya("scroller-start",l,L,D,vt,0),Ke=Ya("scroller-end",l,L,D,vt,0,K),w=K["offset"+D.op.d2];var ne=wi(lr(L,"content")||L);ct=this.markerStart=Ya("start",l,ne,D,vt,w,0,A),_t=this.markerEnd=Ya("end",l,ne,D,vt,w,0,A),A&&(ge=Ae.quickSetter([ct,_t],D.a,$t)),!V&&!(bn.length&&lr(L,"fixedMarkers")===!0)&&(Fm(k?pt:L),Ae.set([K,Ke],{force3D:!0}),F=Ae.quickSetter(K,D.a,$t),ve=Ae.quickSetter(Ke,D.a,$t))}if(A){var j=A.vars.onUpdate,ae=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){P.update(0,0,1),j&&j.apply(A,ae||[])})}if(P.previous=function(){return Je[Je.indexOf(P)-1]},P.next=function(){return Je[Je.indexOf(P)+1]},P.revert=function(re,Le){if(!Le)return P.kill(!0);var Ce=re!==!1||!P.enabled,Ge=hi;Ce!==P.isReverted&&(Ce&&($=Math.max(de(),P.scroll.rec||0),se=P.progress,te=r&&r.progress()),ct&&[ct,_t,K,Ke].forEach(function(Bt){return Bt.style.display=Ce?"none":"block"}),Ce&&(hi=P,P.update(Ce)),f&&(!b||!P.isActive)&&(Ce?Gm(f,He,O):Ml(f,He,tn(f),oe)),Ce||P.update(Ce),hi=Ge,P.isReverted=Ce)},P.refresh=function(re,Le,Ce,Ge){if(!((hi||!P.enabled)&&!Le)){if(f&&re&&on){ri(t,"scrollEnd",md);return}!yi&&ce&&ce(P),hi=P,pe.tween&&!Ce&&(pe.tween.kill(),pe.tween=0),he&&he.pause(),m&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(xe){return xe.vars.immediateRender&&xe.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var Bt=Se(),Ze=rt(),wt=A?A.duration():Tn(L,D),Kt=Xe<=.01||!Xe,bt=0,ut=Ge||0,ft=Er(Ce)?Ce.end:n.end,bi=n.endTrigger||h,Et=Er(Ce)?Ce.start:n.start||(n.start===0||!h?0:f?"0 0":"0 100%"),ei=P.pinnedContainer=n.pinnedContainer&&wi(n.pinnedContainer,P),Ni=h&&Math.max(0,Je.indexOf(P))||0,Dt=Ni,Wt,Zt,Pn,Wr,ti,zt,E,B,q,H,z,fe,me;for(J&&Er(Ce)&&(fe=Ae.getProperty(K,D.p),me=Ae.getProperty(Ke,D.p));Dt-- >0;)zt=Je[Dt],zt.end||zt.refresh(0,1)||(hi=P),E=zt.pin,E&&(E===h||E===f||E===ei)&&!zt.isReverted&&(H||(H=[]),H.unshift(zt),zt.revert(!0,!0)),zt!==Je[Dt]&&(Ni--,Dt--);for(pi(Et)&&(Et=Et(P)),Et=Fu(Et,"start",P),ye=Yu(Et,h,Bt,D,de(),ct,K,P,Ze,Q,V,wt,A,P._startClamp&&"_startClamp")||(f?-.001:0),pi(ft)&&(ft=ft(P)),zi(ft)&&!ft.indexOf("+=")&&(~ft.indexOf(" ")?ft=(zi(Et)?Et.split(" ")[0]:"")+ft:(bt=wo(ft.substr(2),Bt),ft=zi(Et)?Et:(A?Ae.utils.mapRange(0,A.duration(),A.scrollTrigger.start,A.scrollTrigger.end,ye):ye)+bt,bi=h)),ft=Fu(ft,"end",P),ze=Math.max(ye,Yu(ft||(bi?"100% 0":wt),bi,Bt,D,de()+bt,_t,Ke,P,Ze,Q,V,wt,A,P._endClamp&&"_endClamp"))||-.001,bt=0,Dt=Ni;Dt--;)zt=Je[Dt]||{},E=zt.pin,E&&zt.start-zt._pinPush<=ye&&!A&&zt.end>0&&(Wt=zt.end-(P._startClamp?Math.max(0,zt.start):zt.start),(E===h&&zt.start-zt._pinPush<ye||E===ei)&&isNaN(Et)&&(bt+=Wt*(1-zt.progress)),E===f&&(ut+=Wt));if(ye+=bt,ze+=bt,P._startClamp&&(P._startClamp+=bt),P._endClamp&&!yi&&(P._endClamp=ze||-.001,ze=Math.min(ze,Tn(L,D))),Xe=ze-ye||(ye-=.01)&&.001,Kt&&(se=Ae.utils.clamp(0,1,Ae.utils.normalize(ye,ze,$))),P._pinPush=ut,ct&&bt&&(Wt={},Wt[D.a]="+="+bt,ei&&(Wt[D.p]="-="+de()),Ae.set([ct,_t],Wt)),f&&!(yc&&P.end>=Tn(L,D)))Wt=tn(f),Wr=D===Jt,Pn=de(),X=parseFloat(x(D.a))+ut,!wt&&ze>1&&(z=(k?mt.scrollingElement||Vi:L).style,z={style:z,value:z["overflow"+D.a.toUpperCase()]},k&&tn(pt)["overflow"+D.a.toUpperCase()]!=="scroll"&&(z.style["overflow"+D.a.toUpperCase()]="scroll")),Ml(f,He,Wt),je=qa(f),Zt=Bn(f,!0),B=V&&dr(L,Wr?Ei:Jt)(),g?(oe=[g+D.os2,Xe+ut+$t],oe.t=He,Dt=g===Yt?Xo(f,D)+Xe+ut:0,Dt&&(oe.push(D.d,Dt+$t),He.style.flexBasis!=="auto"&&(He.style.flexBasis=Dt+$t)),Es(oe),ei&&Je.forEach(function(xe){xe.pin===ei&&xe.vars.pinSpacing!==!1&&(xe._subPinOffset=!0)}),V&&de($)):(Dt=Xo(f,D),Dt&&He.style.flexBasis!=="auto"&&(He.style.flexBasis=Dt+$t)),V&&(ti={top:Zt.top+(Wr?Pn-ye:B)+$t,left:Zt.left+(Wr?B:Pn-ye)+$t,boxSizing:"border-box",position:"fixed"},ti[Lr]=ti["max"+Ds]=Math.ceil(Zt.width)+$t,ti[Ir]=ti["max"+ru]=Math.ceil(Zt.height)+$t,ti[en]=ti[en+ma]=ti[en+da]=ti[en+_a]=ti[en+pa]="0",ti[Yt]=Wt[Yt],ti[Yt+ma]=Wt[Yt+ma],ti[Yt+da]=Wt[Yt+da],ti[Yt+_a]=Wt[Yt+_a],ti[Yt+pa]=Wt[Yt+pa],Ft=Wm(O,ti,b),yi&&de(0)),r?(q=r._initted,ml(1),r.render(r.duration(),!0,!0),ee=x(D.a)-X+Xe+ut,le=Math.abs(Xe-ee)>1,V&&le&&Ft.splice(Ft.length-2,2),r.render(0,!0,!0),q||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),ml(0)):ee=Xe,z&&(z.value?z.style["overflow"+D.a.toUpperCase()]=z.value:z.style.removeProperty("overflow-"+D.a));else if(h&&de()&&!A)for(Zt=h.parentNode;Zt&&Zt!==pt;)Zt._pinOffset&&(ye-=Zt._pinOffset,ze-=Zt._pinOffset),Zt=Zt.parentNode;H&&H.forEach(function(xe){return xe.revert(!1,!0)}),P.start=ye,P.end=ze,Re=Ve=yi?$:de(),!A&&!yi&&(Re<$&&de($),P.scroll.rec=0),P.revert(!1,!0),Z=fi(),N&&(Oe=-1,N.restart(!0)),hi=0,r&&C&&(r._initted||te)&&r.progress()!==te&&r.progress(te||0,!0).render(r.time(),!0,!0),(Kt||se!==P.progress||A||m||r&&!r._initted)&&(r&&!C&&(r._initted||se||r.vars.immediateRender!==!1)&&r.totalProgress(A&&ye<-.001&&!se?Ae.utils.normalize(ye,ze,0):se,!0),P.progress=Kt||(Re-ye)/Xe===se?0:se),f&&g&&(He._pinOffset=Math.round(P.progress*ee)),he&&he.invalidate(),isNaN(fe)||(fe-=Ae.getProperty(K,D.p),me-=Ae.getProperty(Ke,D.p),Ka(K,D,fe),Ka(ct,D,fe-(Ge||0)),Ka(Ke,D,me),Ka(_t,D,me-(Ge||0))),Kt&&!yi&&P.update(),u&&!yi&&!Mt&&(Mt=!0,u(P),Mt=!1)}},P.getVelocity=function(){return(de()-Ve)/(fi()-js)*1e3||0},P.endAnimation=function(){Vs(P.callbackAnimation),r&&(he?he.progress(1):r.paused()?C||Vs(r,P.direction<0,1):Vs(r,r.reversed()))},P.labelToScroll=function(re){return r&&r.labels&&(ye||P.refresh()||ye)+r.labels[re]/r.duration()*Xe||0},P.getTrailing=function(re){var Le=Je.indexOf(P),Ce=P.direction>0?Je.slice(0,Le).reverse():Je.slice(Le+1);return(zi(re)?Ce.filter(function(Ge){return Ge.vars.preventOverlaps===re}):Ce).filter(function(Ge){return P.direction>0?Ge.end<=ye:Ge.start>=ze})},P.update=function(re,Le,Ce){if(!(A&&!Ce&&!re)){var Ge=yi===!0?$:P.scroll(),Bt=re?0:(Ge-ye)/Xe,Ze=Bt<0?0:Bt>1?1:Bt||0,wt=P.progress,Kt,bt,ut,ft,bi,Et,ei,Ni;if(Le&&(Ve=Re,Re=A?de():Ge,M&&(Te=ie,ie=r&&!C?r.totalProgress():Ze)),_&&f&&!hi&&!Va&&on&&(!Ze&&ye<Ge+(Ge-Ve)/(fi()-js)*_?Ze=1e-4:Ze===1&&ze>Ge+(Ge-Ve)/(fi()-js)*_&&(Ze=.9999)),Ze!==wt&&P.enabled){if(Kt=P.isActive=!!Ze&&Ze<1,bt=!!wt&&wt<1,Et=Kt!==bt,bi=Et||!!Ze!=!!wt,P.direction=Ze>wt?1:-1,P.progress=Ze,bi&&!hi&&(ut=Ze&&!wt?0:Ze===1?1:wt===1?2:3,C&&(ft=!Et&&U[ut+1]!=="none"&&U[ut+1]||U[ut],Ni=r&&(ft==="complete"||ft==="reset"||ft in r))),S&&(Et||Ni)&&(Ni||d||!r)&&(pi(S)?S(P):P.getTrailing(S).forEach(function(Pn){return Pn.endAnimation()})),C||(he&&!hi&&!Va?(he._dp._time-he._start!==he._time&&he.render(he._dp._time-he._start),he.resetTo?he.resetTo("totalProgress",Ze,r._tTime/r._tDur):(he.vars.totalProgress=Ze,he.invalidate().restart())):r&&r.totalProgress(Ze,!!(hi&&(Z||re)))),f){if(re&&g&&(He.style[g+D.os2]=ue),!V)I(ta(X+ee*Ze));else if(bi){if(ei=!re&&Ze>wt&&ze+1>Ge&&Ge+1>=Tn(L,D),b)if(!re&&(Kt||ei)){var Dt=Bn(f,!0),Wt=Ge-ye;qu(f,pt,Dt.top+(D===Jt?Wt:0)+$t,Dt.left+(D===Jt?0:Wt)+$t)}else qu(f,He);Es(Kt||ei?Ft:je),le&&Ze<1&&Kt||I(X+(Ze===1&&!ei?ee:0))}}M&&!pe.tween&&!hi&&!Va&&N.restart(!0),o&&(Et||T&&Ze&&(Ze<1||!_l))&&Aa(o.targets).forEach(function(Pn){return Pn.classList[Kt||T?"add":"remove"](o.className)}),a&&!C&&!re&&a(P),bi&&!hi?(C&&(Ni&&(ft==="complete"?r.pause().totalProgress(1):ft==="reset"?r.restart(!0).pause():ft==="restart"?r.restart(!0):r[ft]()),a&&a(P)),(Et||!_l)&&(c&&Et&&Kr(P,c),W[ut]&&Kr(P,W[ut]),T&&(Ze===1?P.kill(!1,1):W[ut]=0),Et||(ut=Ze===1?1:3,W[ut]&&Kr(P,W[ut]))),v&&!Kt&&Math.abs(P.getVelocity())>(ia(v)?v:2500)&&(Vs(P.callbackAnimation),he?he.progress(1):Vs(r,ft==="reverse"?1:!Ze,1))):C&&a&&!hi&&a(P)}if(ve){var Zt=A?Ge/A.duration()*(A._caScrollDist||0):Ge;F(Zt+(K._isFlipped?1:0)),ve(Zt)}ge&&ge(-Ge/A.duration()*(A._caScrollDist||0))}},P.enable=function(re,Le){P.enabled||(P.enabled=!0,ri(L,"resize",na),k||ri(L,"scroll",$r),ce&&ri(t,"refreshInit",ce),re!==!1&&(P.progress=se=0,Re=Ve=Oe=de()),Le!==!1&&P.refresh())},P.getTween=function(re){return re&&pe?pe.tween:he},P.setPositions=function(re,Le,Ce,Ge){if(A){var Bt=A.scrollTrigger,Ze=A.duration(),wt=Bt.end-Bt.start;re=Bt.start+wt*re/Ze,Le=Bt.start+wt*Le/Ze}P.refresh(!1,!1,{start:Bu(re,Ce&&!!P._startClamp),end:Bu(Le,Ce&&!!P._endClamp)},Ge),P.update()},P.adjustPinSpacing=function(re){if(oe&&re){var Le=oe.indexOf(D.d)+1;oe[Le]=parseFloat(oe[Le])+re+$t,oe[1]=parseFloat(oe[1])+re+$t,Es(oe)}},P.disable=function(re,Le){if(re!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,Le||he&&he.pause(),$=0,be&&(be.uncache=1),ce&&ni(t,"refreshInit",ce),N&&(N.pause(),pe.tween&&pe.tween.kill()&&(pe.tween=0)),!k)){for(var Ce=Je.length;Ce--;)if(Je[Ce].scroller===L&&Je[Ce]!==P)return;ni(L,"resize",na),k||ni(L,"scroll",$r)}},P.kill=function(re,Le){P.disable(re,Le),he&&!Le&&he.kill(),l&&delete Ec[l];var Ce=Je.indexOf(P);Ce>=0&&Je.splice(Ce,1),Ce===Si&&Co>0&&Si--,Ce=0,Je.forEach(function(Ge){return Ge.scroller===P.scroller&&(Ce=1)}),Ce||yi||(P.scroll.rec=0),r&&(r.scrollTrigger=null,re&&r.revert({kill:!1}),Le||r.kill()),ct&&[ct,_t,K,Ke].forEach(function(Ge){return Ge.parentNode&&Ge.parentNode.removeChild(Ge)}),ga===P&&(ga=0),f&&(be&&(be.uncache=1),Ce=0,Je.forEach(function(Ge){return Ge.pin===f&&Ce++}),Ce||(be.spacer=0)),n.onKill&&n.onKill(P)},Je.push(P),P.enable(!1,!1),Me&&Me(P),r&&r.add&&!Xe){var ke=P.update;P.update=function(){P.update=ke,tt.cache++,ye||ze||P.refresh()},Ae.delayedCall(.01,P.update),Xe=.01,ye=ze=0}else P.refresh();f&&Vm()},t.register=function(n){return us||(Ae=n||cd(),ld()&&window.document&&t.enable(),us=ea),us},t.defaults=function(n){if(n)for(var r in n)Xa[r]=n[r];return Xa},t.disable=function(n,r){ea=0,Je.forEach(function(a){return a[r?"kill":"disable"](n)}),ni(et,"wheel",$r),ni(mt,"scroll",$r),clearInterval(ka),ni(mt,"touchcancel",xn),ni(pt,"touchstart",xn),Ha(ni,mt,"pointerdown,touchstart,mousedown",zu),Ha(ni,mt,"pointerup,touchend,mouseup",ku),Wo.kill(),Ga(ni);for(var s=0;s<tt.length;s+=3)Wa(ni,tt[s],tt[s+1]),Wa(ni,tt[s],tt[s+2])},t.enable=function(){if(et=window,mt=document,Vi=mt.documentElement,pt=mt.body,Ae)if(Aa=Ae.utils.toArray,ha=Ae.utils.clamp,Sc=Ae.core.context||xn,ml=Ae.core.suppressOverwrites||xn,eu=et.history.scrollRestoration||"auto",Tc=et.pageYOffset||0,Ae.core.globals("ScrollTrigger",t),pt){ea=1,ys=document.createElement("div"),ys.style.height="100vh",ys.style.position="absolute",Md(),Um(),Ht.register(Ae),t.isTouch=Ht.isTouch,jn=Ht.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),xc=Ht.isTouch===1,ri(et,"wheel",$r),jc=[et,mt,Vi,pt],Ae.matchMedia?(t.matchMedia=function(c){var u=Ae.matchMedia(),d;for(d in c)u.add(d,c[d]);return u},Ae.addEventListener("matchMediaInit",function(){gd(),au()}),Ae.addEventListener("matchMediaRevert",function(){return _d()}),Ae.addEventListener("matchMedia",function(){wr(0,1),Fr("matchMedia")}),Ae.matchMedia().add("(orientation: portrait)",function(){return vl(),vl})):console.warn("Requires GSAP 3.11.0 or later"),vl(),ri(mt,"scroll",$r);var n=pt.hasAttribute("style"),r=pt.style,s=r.borderTopStyle,a=Ae.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",o=Bn(pt),Jt.m=Math.round(o.top+Jt.sc())||0,Ei.m=Math.round(o.left+Ei.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),n||(pt.setAttribute("style",""),pt.removeAttribute("style")),ka=setInterval(Hu,250),Ae.delayedCall(.5,function(){return Va=0}),ri(mt,"touchcancel",xn),ri(pt,"touchstart",xn),Ha(ri,mt,"pointerdown,touchstart,mousedown",zu),Ha(ri,mt,"pointerup,touchend,mouseup",ku),Mc=Ae.utils.checkPrefix("transform"),Po.push(Mc),us=fi(),Wo=Ae.delayedCall(.2,wr).pause(),hs=[mt,"visibilitychange",function(){var c=et.innerWidth,u=et.innerHeight;mt.hidden?(Nu=c,Ou=u):(Nu!==c||Ou!==u)&&na()},mt,"DOMContentLoaded",wr,et,"load",wr,et,"resize",na],Ga(ri),Je.forEach(function(c){return c.enable(0,1)}),l=0;l<tt.length;l+=3)Wa(ni,tt[l],tt[l+1]),Wa(ni,tt[l],tt[l+2])}else mt&&mt.addEventListener("DOMContentLoaded",function c(){t.enable(),mt.removeEventListener("DOMContentLoaded",c)})},t.config=function(n){"limitCallbacks"in n&&(_l=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(ka)||(ka=r)&&setInterval(Hu,r),"ignoreMobileResize"in n&&(xc=t.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Ga(ni)||Ga(ri,n.autoRefreshEvents||"none"),sd=(n.autoRefreshEvents+"").indexOf("resize")===-1)},t.scrollerProxy=function(n,r){var s=wi(n),a=tt.indexOf(s),o=Nr(s);~a&&tt.splice(a,o?6:2),r&&(o?bn.unshift(et,r,pt,r,Vi,r):bn.unshift(s,r))},t.clearMatchMedia=function(n){Je.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},t.isInViewport=function(n,r,s){var a=(zi(n)?wi(n):n).getBoundingClientRect(),o=a[s?Lr:Ir]*r||0;return s?a.right-o>0&&a.left+o<et.innerWidth:a.bottom-o>0&&a.top+o<et.innerHeight},t.positionInViewport=function(n,r,s){zi(n)&&(n=wi(n));var a=n.getBoundingClientRect(),o=a[s?Lr:Ir],l=r==null?o/2:r in Yo?Yo[r]*o:~r.indexOf("%")?parseFloat(r)*o/100:parseFloat(r)||0;return s?(a.left+l)/et.innerWidth:(a.top+l)/et.innerHeight},t.killAll=function(n){if(Je.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var r=Or.killAll||[];Or={},r.forEach(function(s){return s()})}},t})();it.version="3.15.0";it.saveStyles=function(t){return t?Aa(t).forEach(function(e){if(e&&e.style){var i=Bi.indexOf(e);i>=0&&Bi.splice(i,5),Bi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ae.core.getCache(e),Sc())}}):Bi};it.revert=function(t,e){return au(!t,e)};it.create=function(t,e){return new it(t,e)};it.refresh=function(t){return t?na(!0):(us||it.register())&&wr(!0)};it.update=function(t){return++tt.cache&&Vn(t===!0?2:0)};it.clearScrollMemory=vd;it.maxScroll=function(t,e){return Tn(t,e?Ei:Jt)};it.getScrollFunc=function(t,e){return dr(wi(t),e?Ei:Jt)};it.getById=function(t){return Ec[t]};it.getAll=function(){return Je.filter(function(t){return t.vars.id!=="ScrollSmoother"})};it.isScrolling=function(){return!!on};it.snapDirectional=su;it.addEventListener=function(t,e){var i=Or[t]||(Or[t]=[]);~i.indexOf(e)||i.push(e)};it.removeEventListener=function(t,e){var i=Or[t],n=i&&i.indexOf(e);n>=0&&i.splice(n,1)};it.batch=function(t,e){var i=[],n={},r=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var d=[],h=[],f=Ae.delayedCall(r,function(){u(d,h),d=[],h=[]}).pause();return function(g){d.length||f.restart(!0),d.push(g.trigger),h.push(g),s<=d.length&&f.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&pi(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return pi(s)&&(s=s(),ri(it,"refresh",function(){return s=e.batchMax()})),Aa(t).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,i.push(it.create(c))}),i};var Zu=function(e,i,n,r){return i>r?e(r):i<0&&e(0),n>r?(r-i)/(n-i):n<0?i/(i-n):1},xl=function t(e,i){i===!0?e.style.removeProperty("touch-action"):e.style.touchAction=i===!0?"auto":i?"pan-"+i+(Ht.isTouch?" pinch-zoom":""):"none",e===Vi&&t(pt,i)},Za={auto:1,scroll:1},Ym=function(e){var i=e.event,n=e.target,r=e.axis,s=(i.changedTouches?i.changedTouches[0]:i).target,a=s._gsap||Ae.core.getCache(s),o=fi(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==pt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Za[(l=tn(s)).overflowY]||Za[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!Nr(s)&&(Za[(l=tn(s)).overflowY]||Za[l.overflowX]),a._isScrollT=o}(a._isScroll||r==="x")&&(i.stopPropagation(),i._gsapAllow=!0)},Sd=function(e,i,n,r){return Ht.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:i,onWheel:r=r&&Ym,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&ri(mt,Ht.eventTypes[0],Ju,!1,!0)},onDisable:function(){return ni(mt,Ht.eventTypes[0],Ju,!0)}})},qm=/(input|label|select|textarea)/i,$u,Ju=function(e){var i=qm.test(e.target.tagName);(i||$u)&&(e._gsapAllow=!0,$u=i)},Km=function(e){Er(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var i=e,n=i.normalizeScrollX,r=i.momentum,s=i.allowNestedScroll,a=i.onRelease,o,l,c=wi(e.target)||Vi,u=Ae.core.globals().ScrollSmoother,d=u&&u.get(),h=jn&&(e.content&&wi(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),f=dr(c,Jt),g=dr(c,Ei),m=1,_=(Ht.isTouch&&et.visualViewport?et.visualViewport.scale*et.visualViewport.width:et.outerWidth)/et.innerWidth,p=0,y=pi(r)?function(){return r(o)}:function(){return r||2.8},T,M,b=Sd(c,e.type,!0,s),R=function(){return M=!1},A=xn,v=xn,S=function(){l=Tn(c,Jt),v=ha(jn?1:0,l),n&&(A=ha(0,Tn(c,Ei))),T=Ur},D=function(){h._gsap.y=ta(parseFloat(h._gsap.y)+f.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},C=function(){if(M){requestAnimationFrame(R);var J=ta(o.deltaY/2),Q=v(f.v-J);if(h&&Q!==f.v+f.offset){f.offset=Q-f.v;var P=ta((parseFloat(h&&h._gsap.y)||0)-f.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",h._gsap.y=P+"px",f.cacheID=tt.cache,Vn()}return!0}f.offset&&D(),M=!0},L,Y,k,V,W=function(){S(),L.isActive()&&L.vars.scrollY>l&&(f()>l?L.progress(1)&&f(l):L.resetTo("scrollY",l))};return h&&Ae.set(h,{y:"+=0"}),e.ignoreCheck=function(U){return jn&&U.type==="touchmove"&&C(U)||m>1.05&&U.type!=="touchstart"||o.isGesturing||U.touches&&U.touches.length>1},e.onPress=function(){M=!1;var U=m;m=ta((et.visualViewport&&et.visualViewport.scale||1)/_),L.pause(),U!==m&&xl(c,m>1.01?!0:n?!1:"x"),Y=g(),k=f(),S(),T=Ur},e.onRelease=e.onGestureStart=function(U,J){if(f.offset&&D(),!J)V.restart(!0);else{tt.cache++;var Q=y(),P,ce;n&&(P=g(),ce=P+Q*.05*-U.velocityX/.227,Q*=Zu(g,P,ce,Tn(c,Ei)),L.vars.scrollX=A(ce)),P=f(),ce=P+Q*.05*-U.velocityY/.227,Q*=Zu(f,P,ce,Tn(c,Jt)),L.vars.scrollY=v(ce),L.invalidate().duration(Q).play(.01),(jn&&L.vars.scrollY>=l||P>=l-1)&&Ae.to({},{onUpdate:W,duration:Q})}a&&a(U)},e.onWheel=function(){L._ts&&L.pause(),fi()-p>1e3&&(T=0,p=fi())},e.onChange=function(U,J,Q,P,ce){if(Ur!==T&&S(),J&&n&&g(A(P[2]===J?Y+(U.startX-U.x):g()+J-P[1])),Q){f.offset&&D();var Se=ce[2]===Q,rt=Se?k+U.startY-U.y:f()+Q-ce[1],Oe=v(rt);Se&&rt!==Oe&&(k+=Oe-rt),f(Oe)}(Q||J)&&Vn()},e.onEnable=function(){xl(c,n?!1:"x"),it.addEventListener("refresh",W),ri(et,"resize",W),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=g.smooth=!1),b.enable()},e.onDisable=function(){xl(c,!0),ni(et,"resize",W),it.removeEventListener("refresh",W),b.kill()},e.lockAxis=e.lockAxis!==!1,o=new Ht(e),o.iOS=jn,jn&&!f()&&f(1),jn&&Ae.ticker.add(xn),V=o._dc,L=Ae.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:xd(f,f(),function(){return L.pause()})},onUpdate:Vn,onComplete:V.vars.onComplete}),o};it.sort=function(t){if(pi(t))return Je.sort(t);var e=et.pageYOffset||0;return it.getAll().forEach(function(i){return i._sortY=i.trigger?e+i.trigger.getBoundingClientRect().top:i.start+et.innerHeight}),Je.sort(t||function(i,n){return(i.vars.refreshPriority||0)*-1e6+(i.vars.containerAnimation?1e6:i._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};it.observe=function(t){return new Ht(t)};it.normalizeScroll=function(t){if(typeof t>"u")return xi;if(t===!0&&xi)return xi.enable();if(t===!1){xi&&xi.kill(),xi=t;return}var e=t instanceof Ht?t:Km(t);return xi&&xi.target===e.target&&xi.kill(),Nr(e.target)&&(xi=e),e};it.core={_getVelocityProp:vc,_inputObserver:Sd,_scrollers:tt,_proxies:bn,bridge:{ss:function(){on||Fr("scrollStart"),on=fi()},ref:function(){return hi}}};cd()&&Ae.registerPlugin(it);var Ac=1e3,kn=1001,wc=1002,Ti=1003,Zm=1004,$m=1005,Yi=1006,Jm=1007,ou=1008,cr=1009,Qm=1010,jm=1011,yd=1012,e_=1013,Br=1014,rl=1015,zr=1016,Ed=1017,Td=1018,bd=1020,t_=35902,i_=35899,n_=1021,r_=1022,Ra=1023,Ca=1026,Ad=1027,s_=1028,wd=1029,qo=1030,Rd=1031,Cd=1033,a_=33776,o_=33777,l_=33778,c_=33779,u_=35840,h_=35841,f_=35842,d_=35843,p_=36196,m_=37492,__=37496,g_=37488,v_=37489,M_=37490,x_=37491,S_=37808,y_=37809,E_=37810,T_=37811,b_=37812,A_=37813,w_=37814,R_=37815,C_=37816,P_=37817,D_=37818,L_=37819,I_=37820,U_=37821,N_=36492,O_=36494,F_=36495,B_=36283,z_=36284,k_=36285,V_=36286,Ko=2300,Rc=2301,Sl=2302,Qu=2303,ju=2400,eh=2401,th=2402,G_=3200;var nn="srgb",Cc="srgb-linear",Zo="linear",$o="srgb",yl=7680;var H_=35044;var Ls=2e3;function W_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function X_(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function Jo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Y_(){const t=Jo("canvas");return t.style.display="block",t}var ih={},Is=null;function nh(...t){const e="THREE."+t.shift();Is?Is("log",e,...t):[...t]}function Pd(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=t[1];i&&i.isStackTrace?t[0]+=" "+i.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ne(...t){t=Pd(t);const e="THREE."+t.shift();if(Is)Is("warn",e,...t);else{const i=t[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...t)}}function Be(...t){t=Pd(t);const e="THREE."+t.shift();if(Is)Is("error",e,...t);else{const i=t[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...t)}}function Ts(...t){const e=t.join(" ");e in ih||(ih[e]=!0,Ne(...t))}function q_(t,e,i){return new Promise(function(n,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,i);break;default:n()}}setTimeout(s,i)})}var K_={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},Vr=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const n=i[t];if(n!==void 0){const r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let r=0,s=n.length;r<s;r++)n[r].call(this,t);t.target=null}}},ci=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],El=Math.PI/180,Pc=180/Math.PI;function Da(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ci[t&255]+ci[t>>8&255]+ci[t>>16&255]+ci[t>>24&255]+"-"+ci[e&255]+ci[e>>8&255]+"-"+ci[e>>16&15|64]+ci[e>>24&255]+"-"+ci[i&63|128]+ci[i>>8&255]+"-"+ci[i>>16&255]+ci[i>>24&255]+ci[n&255]+ci[n>>8&255]+ci[n>>16&255]+ci[n>>24&255]).toLowerCase()}function st(t,e,i){return Math.max(e,Math.min(i,t))}function Z_(t,e){return(t%e+e)%e}function Tl(t,e,i){return(1-i)*t+i*e}function Gs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ai(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var at=class Dd{static{Dd.prototype.isVector2=!0}constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,n=this.y,r=e.elements;return this.x=r[0]*i+r[3]*n+r[6],this.y=r[1]*i+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=st(this.x,e.x,i.x),this.y=st(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=st(this.x,e,i),this.y=st(this.y,e,i),this}clampLength(e,i){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const n=this.dot(e)/i;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,n=this.y-e.y;return i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,n){return this.x=e.x+(i.x-e.x)*n,this.y=e.y+(i.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const n=Math.cos(i),r=Math.sin(i),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Gr=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,s,a){let o=i[n+0],l=i[n+1],c=i[n+2],u=i[n+3],d=r[s+0],h=r[s+1],f=r[s+2],g=r[s+3];if(u!==g||o!==d||l!==h||c!==f){let m=o*d+l*h+c*f+u*g;m<0&&(d=-d,h=-h,f=-f,g=-g,m=-m);let _=1-a;if(m<.9995){const p=Math.acos(m),y=Math.sin(p);_=Math.sin(_*p)/y,a=Math.sin(a*p)/y,o=o*_+d*a,l=l*_+h*a,c=c*_+f*a,u=u*_+g*a}else{o=o*_+d*a,l=l*_+h*a,c=c*_+f*a,u=u*_+g*a;const p=1/Math.sqrt(o*o+l*l+c*c+u*u);o*=p,l*=p,c*=p,u*=p}}t[e]=o,t[e+1]=l,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,r,s){const a=i[n],o=i[n+1],l=i[n+2],c=i[n+3],u=r[s],d=r[s+1],h=r[s+2],f=r[s+3];return t[e]=a*f+c*u+o*h-l*d,t[e+1]=o*f+c*d+l*u-a*h,t[e+2]=l*f+c*h+a*d-o*u,t[e+3]=c*f-a*u-o*d-l*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,r=t._z,s=t._order,a=Math.cos,o=Math.sin,l=a(i/2),c=a(n/2),u=a(r/2),d=o(i/2),h=o(n/2),f=o(r/2);switch(s){case"XYZ":this._x=d*c*u+l*h*f,this._y=l*h*u-d*c*f,this._z=l*c*f+d*h*u,this._w=l*c*u-d*h*f;break;case"YXZ":this._x=d*c*u+l*h*f,this._y=l*h*u-d*c*f,this._z=l*c*f-d*h*u,this._w=l*c*u+d*h*f;break;case"ZXY":this._x=d*c*u-l*h*f,this._y=l*h*u+d*c*f,this._z=l*c*f+d*h*u,this._w=l*c*u-d*h*f;break;case"ZYX":this._x=d*c*u-l*h*f,this._y=l*h*u+d*c*f,this._z=l*c*f-d*h*u,this._w=l*c*u+d*h*f;break;case"YZX":this._x=d*c*u+l*h*f,this._y=l*h*u+d*c*f,this._z=l*c*f-d*h*u,this._w=l*c*u-d*h*f;break;case"XZY":this._x=d*c*u-l*h*f,this._y=l*h*u-d*c*f,this._z=l*c*f+d*h*u,this._w=l*c*u+d*h*f;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10],d=i+a+u;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(c-o)*h,this._y=(r-l)*h,this._z=(s-n)*h}else if(i>a&&i>u){const h=2*Math.sqrt(1+i-a-u);this._w=(c-o)/h,this._x=.25*h,this._y=(n+s)/h,this._z=(r+l)/h}else if(a>u){const h=2*Math.sqrt(1+a-i-u);this._w=(r-l)/h,this._x=(n+s)/h,this._y=.25*h,this._z=(o+c)/h}else{const h=2*Math.sqrt(1+u-i-a);this._w=(s-n)/h,this._x=(r+l)/h,this._y=(o+c)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(st(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,r=t._z,s=t._w,a=e._x,o=e._y,l=e._z,c=e._w;return this._x=i*c+s*a+n*l-r*o,this._y=n*c+s*o+r*a-i*l,this._z=r*c+s*l+i*o-n*a,this._w=s*c-i*a-n*o-r*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,r=t._z,s=t._w,a=this.dot(t);a<0&&(i=-i,n=-n,r=-r,s=-s,a=-a);let o=1-e;if(a<.9995){const l=Math.acos(a),c=Math.sin(l);o=Math.sin(o*l)/c,e=Math.sin(e*l)/c,this._x=this._x*o+i*e,this._y=this._y*o+n*e,this._z=this._z*o+r*e,this._w=this._w*o+s*e,this._onChangeCallback()}else this._x=this._x*o+i*e,this._y=this._y*o+n*e,this._z=this._z*o+r*e,this._w=this._w*o+s*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class Ld{static{Ld.prototype.isVector3=!0}constructor(e=0,i=0,n=0){this.x=e,this.y=i,this.z=n}set(e,i,n){return n===void 0&&(n=this.z),this.x=e,this.y=i,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(rh.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(rh.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*i+s[3]*n+s[6]*r,this.y=s[1]*i+s[4]*n+s[7]*r,this.z=s[2]*i+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*i+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*i+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*i+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*i+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const i=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),u=2*(o*i-s*r),d=2*(s*n-a*i);return this.x=i+l*c+a*d-o*u,this.y=n+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*i+s[4]*n+s[8]*r,this.y=s[1]*i+s[5]*n+s[9]*r,this.z=s[2]*i+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=st(this.x,e.x,i.x),this.y=st(this.y,e.y,i.y),this.z=st(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=st(this.x,e,i),this.y=st(this.y,e,i),this.z=st(this.z,e,i),this}clampLength(e,i){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,n){return this.x=e.x+(i.x-e.x)*n,this.y=e.y+(i.y-e.y)*n,this.z=e.z+(i.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const n=e.x,r=e.y,s=e.z,a=i.x,o=i.y,l=i.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const n=e.dot(this)/i;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return bl.copy(this).projectOnVector(e),this.sub(bl)}reflect(e){return this.sub(bl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const n=this.dot(e)/i;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return i*i+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,n){const r=Math.sin(i)*e;return this.x=r*Math.sin(n),this.y=Math.cos(i)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,n){return this.x=e*Math.sin(i),this.y=n,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=n,this.z=r,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,n=Math.sqrt(1-i*i);return this.x=n*Math.cos(e),this.y=i,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},bl=new G,rh=new Gr,Ye=class Id{static{Id.prototype.isMatrix3=!0}constructor(e,i,n,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,n,r,s,a,o,l,c)}set(e,i,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=i,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,n=e.elements;return i[0]=n[0],i[1]=n[1],i[2]=n[2],i[3]=n[3],i[4]=n[4],i[5]=n[5],i[6]=n[6],i[7]=n[7],i[8]=n[8],this}extractBasis(e,i,n){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const n=e.elements,r=i.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],m=r[0],_=r[3],p=r[6],y=r[1],T=r[4],M=r[7],b=r[2],R=r[5],A=r[8];return s[0]=a*m+o*y+l*b,s[3]=a*_+o*T+l*R,s[6]=a*p+o*M+l*A,s[1]=c*m+u*y+d*b,s[4]=c*_+u*T+d*R,s[7]=c*p+u*M+d*A,s[2]=h*m+f*y+g*b,s[5]=h*_+f*T+g*R,s[8]=h*p+f*M+g*A,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return i*a*u-i*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,i=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*s,f=c*s-a*l,g=i*d+n*h+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=d*m,e[1]=(r*c-u*n)*m,e[2]=(o*n-r*a)*m,e[3]=h*m,e[4]=(u*i-r*l)*m,e[5]=(r*s-o*i)*m,e[6]=f*m,e[7]=(n*l-c*i)*m,e[8]=(a*i-n*s)*m,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+i,0,0,1),this}scale(e,i){return Ts("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Al.makeScale(e,i)),this}rotate(e){return Ts("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Al.makeRotation(-e)),this}translate(e,i){return Ts("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Al.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),n=Math.sin(e);return this.set(i,-n,0,n,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,n=e.elements;for(let r=0;r<9;r++)if(i[r]!==n[r])return!1;return!0}fromArray(e,i=0){for(let n=0;n<9;n++)this.elements[n]=e[n+i];return this}toArray(e=[],i=0){const n=this.elements;return e[i]=n[0],e[i+1]=n[1],e[i+2]=n[2],e[i+3]=n[3],e[i+4]=n[4],e[i+5]=n[5],e[i+6]=n[6],e[i+7]=n[7],e[i+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Al=new Ye,sh=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ah=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $_(){const t={enabled:!0,workingColorSpace:Cc,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer==="srgb"&&(r.r=Gn(r.r),r.g=Gn(r.g),r.b=Gn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer==="srgb"&&(r.r=bs(r.r),r.g=bs(r.g),r.b=bs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===""?Zo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ts("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ts("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],n=[.3127,.329];return t.define({[Cc]:{primaries:e,whitePoint:n,transfer:Zo,toXYZ:sh,fromXYZ:ah,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:e,whitePoint:n,transfer:$o,toXYZ:sh,fromXYZ:ah,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}}),t}var ot=$_();function Gn(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function bs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var Jr,J_=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Jr===void 0&&(Jr=Jo("canvas")),Jr.width=t.width,Jr.height=t.height;const n=Jr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=Jr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Jo("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let s=0;s<r.length;s++)r[s]=Gn(r[s]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Gn(e[i]/255)*255):e[i]=Gn(e[i]);return{data:e,width:t.width,height:t.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Q_=0,lu=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Q_++}),this.uuid=Da(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let s=0,a=n.length;s<a;s++)n[s].isDataTexture?r.push(wl(n[s].image)):r.push(wl(n[s]))}else r=wl(n);i.url=r}return e||(t.images[this.uuid]=i),i}};function wl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?J_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}var j_=0,Rl=new G,mn=class Lo extends Vr{constructor(e=Lo.DEFAULT_IMAGE,i=Lo.DEFAULT_MAPPING,n=kn,r=kn,s=Yi,a=ou,o=Ra,l=cr,c=Lo.DEFAULT_ANISOTROPY,u=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:j_++}),this.uuid=Da(),this.name="",this.source=new lu(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Rl).x}get height(){return this.source.getSize(Rl).y}get depth(){return this.source.getSize(Rl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const n=e[i];if(n===void 0){Ne(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const r=this[i];if(r===void 0){Ne(`Texture.setValues(): property '${i}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[i]=n}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),i||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ac:e.x=e.x-Math.floor(e.x);break;case kn:e.x=e.x<0?0:1;break;case wc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ac:e.y=e.y-Math.floor(e.y);break;case kn:e.y=e.y<0?0:1;break;case wc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=300;mn.DEFAULT_ANISOTROPY=1;var Gt=class Ud{static{Ud.prototype.isVector4=!0}constructor(e=0,i=0,n=0,r=1){this.x=e,this.y=i,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,n,r){return this.x=e,this.y=i,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*i+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*i+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*i+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*i+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,n,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],m=l[2],_=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-m)<.01&&Math.abs(g-_)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+m)<.1&&Math.abs(g+_)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const T=(c+1)/2,M=(f+1)/2,b=(p+1)/2,R=(u+h)/4,A=(d+m)/4,v=(g+_)/4;return T>M&&T>b?T<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(T),r=R/n,s=A/n):M>b?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=R/r,s=v/r):b<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),n=A/s,r=v/s),this.set(n,r,s,i),this}let y=Math.sqrt((_-g)*(_-g)+(d-m)*(d-m)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(_-g)/y,this.y=(d-m)/y,this.z=(h-u)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=st(this.x,e.x,i.x),this.y=st(this.y,e.y,i.y),this.z=st(this.z,e.z,i.z),this.w=st(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=st(this.x,e,i),this.y=st(this.y,e,i),this.z=st(this.z,e,i),this.w=st(this.w,e,i),this}clampLength(e,i){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,n){return this.x=e.x+(i.x-e.x)*n,this.y=e.y+(i.y-e.y)*n,this.z=e.z+(i.z-e.z)*n,this.w=e.w+(i.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},eg=class extends Vr{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Gt(0,0,t,e),this.scissorTest=!1,this.viewport=new Gt(0,0,t,e),this.textures=[];const n={width:t,height:e,depth:i.depth},r=new mn(n),s=i.count;for(let a=0;a<s;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Yi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const n=Object.assign({},t.textures[e].image);this.textures[e].source=new lu(n)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},An=class extends eg{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Nd=class extends mn{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},tg=class extends mn{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ot=class Dc{static{Dc.prototype.isMatrix4=!0}constructor(e,i,n,r,s,a,o,l,c,u,d,h,f,g,m,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,n,r,s,a,o,l,c,u,d,h,f,g,m,_)}set(e,i,n,r,s,a,o,l,c,u,d,h,f,g,m,_){const p=this.elements;return p[0]=e,p[4]=i,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=m,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dc().fromArray(this.elements)}copy(e){const i=this.elements,n=e.elements;return i[0]=n[0],i[1]=n[1],i[2]=n[2],i[3]=n[3],i[4]=n[4],i[5]=n[5],i[6]=n[6],i[7]=n[7],i[8]=n[8],i[9]=n[9],i[10]=n[10],i[11]=n[11],i[12]=n[12],i[13]=n[13],i[14]=n[14],i[15]=n[15],this}copyPosition(e){const i=this.elements,n=e.elements;return i[12]=n[12],i[13]=n[13],i[14]=n[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,n){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,i,n){return this.set(e.x,i.x,n.x,0,e.y,i.y,n.y,0,e.z,i.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,n=e.elements,r=1/Qr.setFromMatrixColumn(e,0).length(),s=1/Qr.setFromMatrixColumn(e,1).length(),a=1/Qr.setFromMatrixColumn(e,2).length();return i[0]=n[0]*r,i[1]=n[1]*r,i[2]=n[2]*r,i[3]=0,i[4]=n[4]*s,i[5]=n[5]*s,i[6]=n[6]*s,i[7]=0,i[8]=n[8]*a,i[9]=n[9]*a,i[10]=n[10]*a,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*u,f=a*d,g=o*u,m=o*d;i[0]=l*u,i[4]=-l*d,i[8]=c,i[1]=f+g*c,i[5]=h-m*c,i[9]=-o*l,i[2]=m-h*c,i[6]=g+f*c,i[10]=a*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,g=c*u,m=c*d;i[0]=h+m*o,i[4]=g*o-f,i[8]=a*c,i[1]=a*d,i[5]=a*u,i[9]=-o,i[2]=f*o-g,i[6]=m+h*o,i[10]=a*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,g=c*u,m=c*d;i[0]=h-m*o,i[4]=-a*d,i[8]=g+f*o,i[1]=f+g*o,i[5]=a*u,i[9]=m-h*o,i[2]=-a*c,i[6]=o,i[10]=a*l}else if(e.order==="ZYX"){const h=a*u,f=a*d,g=o*u,m=o*d;i[0]=l*u,i[4]=g*c-f,i[8]=h*c+m,i[1]=l*d,i[5]=m*c+h,i[9]=f*c-g,i[2]=-c,i[6]=o*l,i[10]=a*l}else if(e.order==="YZX"){const h=a*l,f=a*c,g=o*l,m=o*c;i[0]=l*u,i[4]=m-h*d,i[8]=g*d+f,i[1]=d,i[5]=a*u,i[9]=-o*u,i[2]=-c*u,i[6]=f*d+g,i[10]=h-m*d}else if(e.order==="XZY"){const h=a*l,f=a*c,g=o*l,m=o*c;i[0]=l*u,i[4]=-d,i[8]=c*u,i[1]=h*d+m,i[5]=a*u,i[9]=f*d-g,i[2]=g*d-f,i[6]=o*u,i[10]=m*d+h}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ig,e,ng)}lookAt(e,i,n){const r=this.elements;return Oi.subVectors(e,i),Oi.lengthSq()===0&&(Oi.z=1),Oi.normalize(),qn.crossVectors(n,Oi),qn.lengthSq()===0&&(Math.abs(n.z)===1?Oi.x+=1e-4:Oi.z+=1e-4,Oi.normalize(),qn.crossVectors(n,Oi)),qn.normalize(),$a.crossVectors(Oi,qn),r[0]=qn.x,r[4]=$a.x,r[8]=Oi.x,r[1]=qn.y,r[5]=$a.y,r[9]=Oi.y,r[2]=qn.z,r[6]=$a.z,r[10]=Oi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const n=e.elements,r=i.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],m=n[6],_=n[10],p=n[14],y=n[3],T=n[7],M=n[11],b=n[15],R=r[0],A=r[4],v=r[8],S=r[12],D=r[1],C=r[5],L=r[9],Y=r[13],k=r[2],V=r[6],W=r[10],U=r[14],J=r[3],Q=r[7],P=r[11],ce=r[15];return s[0]=a*R+o*D+l*k+c*J,s[4]=a*A+o*C+l*V+c*Q,s[8]=a*v+o*L+l*W+c*P,s[12]=a*S+o*Y+l*U+c*ce,s[1]=u*R+d*D+h*k+f*J,s[5]=u*A+d*C+h*V+f*Q,s[9]=u*v+d*L+h*W+f*P,s[13]=u*S+d*Y+h*U+f*ce,s[2]=g*R+m*D+_*k+p*J,s[6]=g*A+m*C+_*V+p*Q,s[10]=g*v+m*L+_*W+p*P,s[14]=g*S+m*Y+_*U+p*ce,s[3]=y*R+T*D+M*k+b*J,s[7]=y*A+T*C+M*V+b*Q,s[11]=y*v+T*L+M*W+b*P,s[15]=y*S+T*Y+M*U+b*ce,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],m=e[7],_=e[11],p=e[15],y=l*f-c*h,T=o*f-c*d,M=o*h-l*d,b=a*f-c*u,R=a*h-l*u,A=a*d-o*u;return i*(m*y-_*T+p*M)-n*(g*y-_*b+p*R)+r*(g*T-m*b+p*A)-s*(g*M-m*R+_*A)}determinantAffine(){const e=this.elements,i=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return i*(a*u-o*c)-n*(s*u-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=i,r[14]=n),this}invert(){const e=this.elements,i=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],m=e[13],_=e[14],p=e[15],y=i*o-n*a,T=i*l-r*a,M=i*c-s*a,b=n*l-r*o,R=n*c-s*o,A=r*c-s*l,v=u*m-d*g,S=u*_-h*g,D=u*p-f*g,C=d*_-h*m,L=d*p-f*m,Y=h*p-f*_,k=y*Y-T*L+M*C+b*D-R*S+A*v;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/k;return e[0]=(o*Y-l*L+c*C)*V,e[1]=(r*L-n*Y-s*C)*V,e[2]=(m*A-_*R+p*b)*V,e[3]=(h*R-d*A-f*b)*V,e[4]=(l*D-a*Y-c*S)*V,e[5]=(i*Y-r*D+s*S)*V,e[6]=(_*M-g*A-p*T)*V,e[7]=(u*A-h*M+f*T)*V,e[8]=(a*L-o*D+c*v)*V,e[9]=(n*D-i*L-s*v)*V,e[10]=(g*R-m*M+p*y)*V,e[11]=(d*M-u*R-f*y)*V,e[12]=(o*S-a*C-l*v)*V,e[13]=(i*C-n*S+r*v)*V,e[14]=(m*T-g*b-_*y)*V,e[15]=(u*b-d*T+h*y)*V,this}scale(e){const i=this.elements,n=e.x,r=e.y,s=e.z;return i[0]*=n,i[4]*=r,i[8]*=s,i[1]*=n,i[5]*=r,i[9]*=s,i[2]*=n,i[6]*=r,i[10]*=s,i[3]*=n,i[7]*=r,i[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,n,r))}makeTranslation(e,i,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,n,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,i,-n,0,0,n,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),n=Math.sin(e);return this.set(i,0,n,0,0,1,0,0,-n,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),n=Math.sin(e);return this.set(i,-n,0,0,n,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const n=Math.cos(i),r=Math.sin(i),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,i,n){return this.set(e,0,0,0,0,i,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,i,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,i,r,1,0,0,0,0,1),this}compose(e,i,n){const r=this.elements,s=i._x,a=i._y,o=i._z,l=i._w,c=s+s,u=a+a,d=o+o,h=s*c,f=s*u,g=s*d,m=a*u,_=a*d,p=o*d,y=l*c,T=l*u,M=l*d,b=n.x,R=n.y,A=n.z;return r[0]=(1-(m+p))*b,r[1]=(f+M)*b,r[2]=(g-T)*b,r[3]=0,r[4]=(f-M)*R,r[5]=(1-(h+p))*R,r[6]=(_+y)*R,r[7]=0,r[8]=(g+T)*A,r[9]=(_-y)*A,r[10]=(1-(h+m))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,i,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),i.identity(),this;let a=Qr.set(r[0],r[1],r[2]).length();const o=Qr.set(r[4],r[5],r[6]).length(),l=Qr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),un.copy(this);const c=1/a,u=1/o,d=1/l;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=u,un.elements[5]*=u,un.elements[6]*=u,un.elements[8]*=d,un.elements[9]*=d,un.elements[10]*=d,i.setFromRotationMatrix(un),n.x=a,n.y=o,n.z=l,this}makePerspective(e,i,n,r,s,a,o=Ls,l=!1){const c=this.elements,u=2*s/(i-e),d=2*s/(n-r),h=(i+e)/(i-e),f=(n+r)/(n-r);let g,m;if(l)g=s/(a-s),m=a*s/(a-s);else if(o===2e3)g=-(a+s)/(a-s),m=-2*a*s/(a-s);else if(o===2001)g=-a/(a-s),m=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,i,n,r,s,a,o=Ls,l=!1){const c=this.elements,u=2/(i-e),d=2/(n-r),h=-(i+e)/(i-e),f=-(n+r)/(n-r);let g,m;if(l)g=1/(a-s),m=a/(a-s);else if(o===2e3)g=-2/(a-s),m=-(a+s)/(a-s);else if(o===2001)g=-1/(a-s),m=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const i=this.elements,n=e.elements;for(let r=0;r<16;r++)if(i[r]!==n[r])return!1;return!0}fromArray(e,i=0){for(let n=0;n<16;n++)this.elements[n]=e[n+i];return this}toArray(e=[],i=0){const n=this.elements;return e[i]=n[0],e[i+1]=n[1],e[i+2]=n[2],e[i+3]=n[3],e[i+4]=n[4],e[i+5]=n[5],e[i+6]=n[6],e[i+7]=n[7],e[i+8]=n[8],e[i+9]=n[9],e[i+10]=n[10],e[i+11]=n[11],e[i+12]=n[12],e[i+13]=n[13],e[i+14]=n[14],e[i+15]=n[15],e}},Qr=new G,un=new Ot,ig=new G(0,0,0),ng=new G(1,1,1),qn=new G,$a=new G,Oi=new G,oh=new Ot,lh=new Gr,Us=class Od{constructor(e=0,i=0,n=0,r=Od.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,n,r=this._order){return this._x=e,this._y=i,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],f=r[10];switch(i){case"XYZ":this._y=Math.asin(st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(st(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-st(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,n){return oh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(oh,i,n)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return lh.setFromEuler(this),this.setFromQuaternion(lh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Us.DEFAULT_ORDER="XYZ";var Fd=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},rg=0,ch=new G,jr=new Gr,Dn=new Ot,Ja=new G,Hs=new G,sg=new G,ag=new Gr,uh=new G(1,0,0),hh=new G(0,1,0),fh=new G(0,0,1),dh={type:"added"},og={type:"removed"},es={type:"childadded",child:null},Cl={type:"childremoved",child:null},Ui=class Io extends Vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rg++}),this.uuid=Da(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Io.DEFAULT_UP.clone();const e=new G,i=new Us,n=new Gr,r=new G(1,1,1);function s(){n.setFromEuler(i,!1)}function a(){i.setFromQuaternion(n,void 0,!1)}i._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ot},normalMatrix:{value:new Ye}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=Io.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Io.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return jr.setFromAxisAngle(e,i),this.quaternion.multiply(jr),this}rotateOnWorldAxis(e,i){return jr.setFromAxisAngle(e,i),this.quaternion.premultiply(jr),this}rotateX(e){return this.rotateOnAxis(uh,e)}rotateY(e){return this.rotateOnAxis(hh,e)}rotateZ(e){return this.rotateOnAxis(fh,e)}translateOnAxis(e,i){return ch.copy(e).applyQuaternion(this.quaternion),this.position.add(ch.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(uh,e)}translateY(e){return this.translateOnAxis(hh,e)}translateZ(e){return this.translateOnAxis(fh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(e,i,n){e.isVector3?Ja.copy(e):Ja.set(e,i,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(Hs,Ja,this.up):Dn.lookAt(Ja,Hs,this.up),this.quaternion.setFromRotationMatrix(Dn),r&&(Dn.extractRotation(r.matrixWorld),jr.setFromRotationMatrix(Dn),this.quaternion.premultiply(jr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Be("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dh),es.child=e,this.dispatchEvent(es),es.child=null):Be("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(og),Cl.child=e,this.dispatchEvent(Cl),Cl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dh),es.child=e,this.dispatchEvent(es),es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectByProperty(e,i);if(s!==void 0)return s}}getObjectsByProperty(e,i,n=[]){this[e]===i&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,i,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,e,sg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,ag,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let n=0,r=i.length;n<r;n++)i[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let n=0,r=i.length;n<r;n++)i[n].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=i-s[0]*i-s[4]*n-s[8]*r,s[13]+=n-s[1]*i-s[5]*n-s[9]*r,s[14]+=r-s[2]*i-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let n=0,r=i.length;n<r;n++)i[n].updateMatrixWorld(e)}updateWorldMatrix(e,i,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),i===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const i=e===void 0||typeof e=="string",n={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(i){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}};Ui.DEFAULT_UP=new G(0,1,0);Ui.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ra=class extends Ui{constructor(){super(),this.isGroup=!0,this.type="Group"}},lg={type:"move"},Pl=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ra,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ra,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ra,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,s=null;const a=this._targetRay,o=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){s=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,i),_=this._getHandJoint(l,g);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=m.radius),_.visible=m!==null}const c=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=c.position.distanceTo(u.position);l.inputState.pinching&&d>.025?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=.02-.005&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else o!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lg)))}return a!==null&&(a.visible=n!==null),o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ra;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Bd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},Qa={h:0,s:0,l:0};function Dl(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(e-t)*6*i:i<1/2?e:i<2/3?t+(e-t)*6*(2/3-i):t}var Qe=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=nn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ot.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=ot.workingColorSpace){return this.r=t,this.g=e,this.b=i,ot.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=ot.workingColorSpace){if(t=Z_(t,1),e=st(e,0,1),i=st(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,s=2*i-r;this.r=Dl(s,r,t+1/3),this.g=Dl(s,r,t),this.b=Dl(s,r,t-1/3)}return ot.colorSpaceToWorking(this,n),this}setStyle(t,e=nn){function i(r){r!==void 0&&parseFloat(r)<1&&Ne("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const s=n[1],a=n[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ne("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=n[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(s===6)return this.setHex(parseInt(r,16),e);Ne("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=nn){const i=Bd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Ne("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gn(t.r),this.g=Gn(t.g),this.b=Gn(t.b),this}copyLinearToSRGB(t){return this.r=bs(t.r),this.g=bs(t.g),this.b=bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=nn){return ot.workingToColorSpace(ui.copy(this),t),Math.round(st(ui.r*255,0,255))*65536+Math.round(st(ui.g*255,0,255))*256+Math.round(st(ui.b*255,0,255))}getHexString(t=nn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ot.workingColorSpace){ot.workingToColorSpace(ui.copy(this),e);const i=ui.r,n=ui.g,r=ui.b,s=Math.max(i,n,r),a=Math.min(i,n,r);let o,l;const c=(a+s)/2;if(a===s)o=0,l=0;else{const u=s-a;switch(l=c<=.5?u/(s+a):u/(2-s-a),s){case i:o=(n-r)/u+(n<r?6:0);break;case n:o=(r-i)/u+2;break;case r:o=(i-n)/u+4;break}o/=6}return t.h=o,t.s=l,t.l=c,t}getRGB(t,e=ot.workingColorSpace){return ot.workingToColorSpace(ui.copy(this),e),t.r=ui.r,t.g=ui.g,t.b=ui.b,t}getStyle(t=nn){ot.workingToColorSpace(ui.copy(this),t);const e=ui.r,i=ui.g,n=ui.b;return t!=="srgb"?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Kn),this.setHSL(Kn.h+t,Kn.s+e,Kn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Kn),t.getHSL(Qa);const i=Tl(Kn.h,Qa.h,e),n=Tl(Kn.s,Qa.s,e),r=Tl(Kn.l,Qa.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ui=new Qe;Qe.NAMES=Bd;var cg=class extends Ui{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Us,this.environmentIntensity=1,this.environmentRotation=new Us,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},hn=new G,Ln=new G,Ll=new G,In=new G,ts=new G,is=new G,ph=new G,Il=new G,Ul=new G,Nl=new G,Ol=new Gt,Fl=new Gt,Bl=new Gt,Ws=class fs{constructor(e=new G,i=new G,n=new G){this.a=e,this.b=i,this.c=n}static getNormal(e,i,n,r){r.subVectors(n,i),hn.subVectors(e,i),r.cross(hn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,i,n,r,s){hn.subVectors(r,i),Ln.subVectors(n,i),Ll.subVectors(e,i);const a=hn.dot(hn),o=hn.dot(Ln),l=hn.dot(Ll),c=Ln.dot(Ln),u=Ln.dot(Ll),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(c*l-o*u)*h,g=(a*u-o*l)*h;return s.set(1-f-g,g,f)}static containsPoint(e,i,n,r){return this.getBarycoord(e,i,n,r,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(e,i,n,r,s,a,o,l){return this.getBarycoord(e,i,n,r,In)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,In.x),l.addScaledVector(a,In.y),l.addScaledVector(o,In.z),l)}static getInterpolatedAttribute(e,i,n,r,s,a){return Ol.setScalar(0),Fl.setScalar(0),Bl.setScalar(0),Ol.fromBufferAttribute(e,i),Fl.fromBufferAttribute(e,n),Bl.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ol,s.x),a.addScaledVector(Fl,s.y),a.addScaledVector(Bl,s.z),a}static isFrontFacing(e,i,n,r){return hn.subVectors(n,i),Ln.subVectors(e,i),hn.cross(Ln).dot(r)<0}set(e,i,n){return this.a.copy(e),this.b.copy(i),this.c.copy(n),this}setFromPointsAndIndices(e,i,n,r){return this.a.copy(e[i]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,i,n,r){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),hn.cross(Ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fs.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return fs.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,n,r,s){return fs.getInterpolation(e,this.a,this.b,this.c,i,n,r,s)}containsPoint(e){return fs.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fs.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const n=this.a,r=this.b,s=this.c;let a,o;ts.subVectors(r,n),is.subVectors(s,n),Il.subVectors(e,n);const l=ts.dot(Il),c=is.dot(Il);if(l<=0&&c<=0)return i.copy(n);Ul.subVectors(e,r);const u=ts.dot(Ul),d=is.dot(Ul);if(u>=0&&d<=u)return i.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),i.copy(n).addScaledVector(ts,a);Nl.subVectors(e,s);const f=ts.dot(Nl),g=is.dot(Nl);if(g>=0&&f<=g)return i.copy(s);const m=f*c-l*g;if(m<=0&&c>=0&&g<=0)return o=c/(c-g),i.copy(n).addScaledVector(is,o);const _=u*g-f*d;if(_<=0&&d-u>=0&&f-g>=0)return ph.subVectors(s,r),o=(d-u)/(d-u+(f-g)),i.copy(r).addScaledVector(ph,o);const p=1/(_+m+h);return a=m*p,o=h*p,i.copy(n).addScaledVector(ts,a).addScaledVector(is,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},La=class{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let s=0,a=r.count;s<a;s++)t.isMesh===!0?t.getVertexPosition(s,fn):fn.fromBufferAttribute(r,s),fn.applyMatrix4(t.matrixWorld),this.expandByPoint(fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ja.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ja.copy(i.boundingBox)),ja.applyMatrix4(t.matrixWorld),this.union(ja)}const n=t.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,fn),fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xs),eo.subVectors(this.max,Xs),ns.subVectors(t.a,Xs),rs.subVectors(t.b,Xs),ss.subVectors(t.c,Xs),Zn.subVectors(rs,ns),$n.subVectors(ss,rs),gr.subVectors(ns,ss);let e=[0,-Zn.z,Zn.y,0,-$n.z,$n.y,0,-gr.z,gr.y,Zn.z,0,-Zn.x,$n.z,0,-$n.x,gr.z,0,-gr.x,-Zn.y,Zn.x,0,-$n.y,$n.x,0,-gr.y,gr.x,0];return!zl(e,ns,rs,ss,eo)||(e=[1,0,0,0,1,0,0,0,1],!zl(e,ns,rs,ss,eo))?!1:(to.crossVectors(Zn,$n),e=[to.x,to.y,to.z],zl(e,ns,rs,ss,eo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Un=[new G,new G,new G,new G,new G,new G,new G,new G],fn=new G,ja=new La,ns=new G,rs=new G,ss=new G,Zn=new G,$n=new G,gr=new G,Xs=new G,eo=new G,to=new G,vr=new G;function zl(t,e,i,n,r){for(let s=0,a=t.length-3;s<=a;s+=3){vr.fromArray(t,s);const o=r.x*Math.abs(vr.x)+r.y*Math.abs(vr.y)+r.z*Math.abs(vr.z),l=e.dot(vr),c=i.dot(vr),u=n.dot(vr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Xt=new G,io=new at,ug=0,ln=class extends Vr{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ug++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=H_,this.updateRanges=[],this.gpuType=rl,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)io.fromBufferAttribute(this,e),io.applyMatrix3(t),this.setXY(e,io.x,io.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Xt.fromBufferAttribute(this,e),Xt.applyMatrix3(t),this.setXYZ(e,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Xt.fromBufferAttribute(this,e),Xt.applyMatrix4(t),this.setXYZ(e,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Xt.fromBufferAttribute(this,e),Xt.applyNormalMatrix(t),this.setXYZ(e,Xt.x,Xt.y,Xt.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Xt.fromBufferAttribute(this,e),Xt.transformDirection(t),this.setXYZ(e,Xt.x,Xt.y,Xt.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Gs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ai(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Gs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ai(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Gs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ai(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Gs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ai(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Gs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ai(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ai(e,this.array),i=Ai(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=Ai(e,this.array),i=Ai(i,this.array),n=Ai(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=Ai(e,this.array),i=Ai(i,this.array),n=Ai(n,this.array),r=Ai(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==35044&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}},zd=class extends ln{constructor(t,e,i){super(new Uint16Array(t),e,i)}},kd=class extends ln{constructor(t,e,i){super(new Uint32Array(t),e,i)}},_i=class extends ln{constructor(t,e,i){super(new Float32Array(t),e,i)}},hg=new La,Ys=new G,kl=new G,Ia=class{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):hg.setFromPoints(t).getCenter(i);let n=0;for(let r=0,s=t.length;r<s;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ys.subVectors(t,this.center);const e=Ys.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Ys,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(kl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ys.copy(t.center).add(kl)),this.expandByPoint(Ys.copy(t.center).sub(kl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},fg=0,Qi=new Ot,Vl=new Ui,as=new G,Fi=new La,qs=new La,ii=new G,$i=class Vd extends Vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fg++}),this.uuid=Da(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(W_(e)?kd:zd)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,n=0){this.groups.push({start:e,count:i,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ye().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Qi.makeRotationFromQuaternion(e),this.applyMatrix4(Qi),this}rotateX(e){return Qi.makeRotationX(e),this.applyMatrix4(Qi),this}rotateY(e){return Qi.makeRotationY(e),this.applyMatrix4(Qi),this}rotateZ(e){return Qi.makeRotationZ(e),this.applyMatrix4(Qi),this}translate(e,i,n){return Qi.makeTranslation(e,i,n),this.applyMatrix4(Qi),this}scale(e,i,n){return Qi.makeScale(e,i,n),this.applyMatrix4(Qi),this}lookAt(e){return Vl.lookAt(e),Vl.updateMatrix(),this.applyMatrix4(Vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new _i(n,3))}else{const n=Math.min(e.length,i.count);for(let r=0;r<n;r++){const s=e[r];i.setXYZ(r,s.x,s.y,s.z||0)}e.length>i.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new La);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let n=0,r=i.length;n<r;n++){const s=i[n];Fi.setFromBufferAttribute(s),this.morphTargetsRelative?(ii.addVectors(this.boundingBox.min,Fi.min),this.boundingBox.expandByPoint(ii),ii.addVectors(this.boundingBox.max,Fi.max),this.boundingBox.expandByPoint(ii)):(this.boundingBox.expandByPoint(Fi.min),this.boundingBox.expandByPoint(Fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ia);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if(Fi.setFromBufferAttribute(e),i)for(let s=0,a=i.length;s<a;s++){const o=i[s];qs.setFromBufferAttribute(o),this.morphTargetsRelative?(ii.addVectors(Fi.min,qs.min),Fi.expandByPoint(ii),ii.addVectors(Fi.max,qs.max),Fi.expandByPoint(ii)):(Fi.expandByPoint(qs.min),Fi.expandByPoint(qs.max))}Fi.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)ii.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(ii));if(i)for(let s=0,a=i.length;s<a;s++){const o=i[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ii.fromBufferAttribute(o,c),l&&(as.fromBufferAttribute(e,c),ii.add(as)),r=Math.max(r,n.distanceToSquared(ii))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=i.position,r=i.normal,s=i.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new ln(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new G,l[v]=new G;const c=new G,u=new G,d=new G,h=new at,f=new at,g=new at,m=new G,_=new G;function p(v,S,D){c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,S),d.fromBufferAttribute(n,D),h.fromBufferAttribute(s,v),f.fromBufferAttribute(s,S),g.fromBufferAttribute(s,D),u.sub(c),d.sub(c),f.sub(h),g.sub(h);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(m.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(C),_.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(C),o[v].add(m),o[S].add(m),o[D].add(m),l[v].add(_),l[S].add(_),l[D].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let v=0,S=y.length;v<S;++v){const D=y[v],C=D.start,L=D.count;for(let Y=C,k=C+L;Y<k;Y+=3)p(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const T=new G,M=new G,b=new G,R=new G;function A(v){b.fromBufferAttribute(r,v),R.copy(b);const S=o[v];T.copy(S),T.sub(b.multiplyScalar(b.dot(S))).normalize(),M.crossVectors(R,S);const D=M.dot(l[v])<0?-1:1;a.setXYZW(v,T.x,T.y,T.z,D)}for(let v=0,S=y.length;v<S;++v){const D=y[v],C=D.start,L=D.count;for(let Y=C,k=C+L;Y<k;Y+=3)A(e.getX(Y+0)),A(e.getX(Y+1)),A(e.getX(Y+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==i.count)n=new ln(new Float32Array(i.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const r=new G,s=new G,a=new G,o=new G,l=new G,c=new G,u=new G,d=new G;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),m=e.getX(h+1),_=e.getX(h+2);r.fromBufferAttribute(i,g),s.fromBufferAttribute(i,m),a.fromBufferAttribute(i,_),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let h=0,f=i.count;h<f;h+=3)r.fromBufferAttribute(i,h+0),s.fromBufferAttribute(i,h+1),a.fromBufferAttribute(i,h+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,n=e.count;i<n;i++)ii.fromBufferAttribute(e,i),ii.normalize(),e.setXYZ(i,ii.x,ii.y,ii.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let f=0,g=0;for(let m=0,_=l.length;m<_;m++){o.isInterleavedBufferAttribute?f=l[m]*o.data.stride+o.offset:f=l[m]*u;for(let p=0;p<u;p++)h[g++]=c[f++]}return new ln(h,u,d)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Vd,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);i.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,n);l.push(f)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];i.addGroup(c.start,c.count,c.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(i))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(i));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},dg=0,Hr=class extends Vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dg++}),this.uuid=Da(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yl,this.stencilZFail=yl,this.stencilZPass=yl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Ne(`Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){Ne(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==204&&(i.blendSrc=this.blendSrc),this.blendDst!==205&&(i.blendDst=this.blendDst),this.blendEquation!==100&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(i.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const s=[];for(const a in r){const o=r[a];delete o.metadata,s.push(o)}return s}if(e){const r=n(t.textures),s=n(t.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Qe().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new at().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new at().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Nn=new G,Gl=new G,no=new G,Jn=new G,Hl=new G,ro=new G,Wl=new G,cu=class{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Nn.copy(this.origin).addScaledVector(this.direction,e),Nn.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Gl.copy(t).add(e).multiplyScalar(.5),no.copy(e).sub(t).normalize(),Jn.copy(this.origin).sub(Gl);const r=t.distanceTo(e)*.5,s=-this.direction.dot(no),a=Jn.dot(this.direction),o=-Jn.dot(no),l=Jn.lengthSq(),c=Math.abs(1-s*s);let u,d,h,f;if(c>0)if(u=s*o-a,d=s*a-o,f=r*c,u>=0)if(d>=-f)if(d<=f){const g=1/c;u*=g,d*=g,h=u*(u+s*d+2*a)+d*(s*u+d+2*o)+l}else d=r,u=Math.max(0,-(s*d+a)),h=-u*u+d*(d+2*o)+l;else d=-r,u=Math.max(0,-(s*d+a)),h=-u*u+d*(d+2*o)+l;else d<=-f?(u=Math.max(0,-(-s*r+a)),d=u>0?-r:Math.min(Math.max(-r,-o),r),h=-u*u+d*(d+2*o)+l):d<=f?(u=0,d=Math.min(Math.max(-r,-o),r),h=d*(d+2*o)+l):(u=Math.max(0,-(s*r+a)),d=u>0?r:Math.min(Math.max(-r,-o),r),h=-u*u+d*(d+2*o)+l);else d=s>0?-r:r,u=Math.max(0,-(s*d+a)),h=-u*u+d*(d+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Gl).addScaledVector(no,d),h}intersectSphere(t,e){Nn.subVectors(t.center,this.origin);const i=Nn.dot(this.direction),n=Nn.dot(Nn)-i*i,r=t.radius*t.radius;if(n>r)return null;const s=Math.sqrt(r-n),a=i-s,o=i+s;return o<0?null:a<0?this.at(o,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,s,a,o;const l=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,n=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,n=(t.min.x-d.x)*l),c>=0?(r=(t.min.y-d.y)*c,s=(t.max.y-d.y)*c):(r=(t.max.y-d.y)*c,s=(t.min.y-d.y)*c),i>s||r>n||((r>i||isNaN(i))&&(i=r),(s<n||isNaN(n))&&(n=s),u>=0?(a=(t.min.z-d.z)*u,o=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,o=(t.min.z-d.z)*u),i>o||a>n)||((a>i||i!==i)&&(i=a),(o<n||n!==n)&&(n=o),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Nn)!==null}intersectTriangle(t,e,i,n,r){Hl.subVectors(e,t),ro.subVectors(i,t),Wl.crossVectors(Hl,ro);let s=this.direction.dot(Wl),a;if(s>0){if(n)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Jn.subVectors(this.origin,t);const o=a*this.direction.dot(ro.crossVectors(Jn,ro));if(o<0)return null;const l=a*this.direction.dot(Hl.cross(Jn));if(l<0||o+l>s)return null;const c=-a*Jn.dot(Wl);return c<0?null:this.at(c/s,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Gd=class extends Hr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Us,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},mh=new Ot,Mr=new cu,so=new Ia,_h=new G,ao=new G,oo=new G,lo=new G,Xl=new G,co=new G,gh=new G,uo=new G,pn=class extends Ui{constructor(t=new $i,e=new Gd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){const i=t[e[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=i.length;n<r;n++){const s=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const a=this.morphTargetInfluences;if(r&&a){co.set(0,0,0);for(let o=0,l=r.length;o<l;o++){const c=a[o],u=r[o];c!==0&&(Xl.fromBufferAttribute(u,t),s?co.addScaledVector(Xl,c):co.addScaledVector(Xl.sub(e),c))}e.add(co)}return e}raycast(t,e){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),so.copy(i.boundingSphere),so.applyMatrix4(r),Mr.copy(t.ray).recast(t.near),!(so.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(so,_h)===null||Mr.origin.distanceToSquared(_h)>(t.far-t.near)**2))&&(mh.copy(r).invert(),Mr.copy(t.ray).applyMatrix4(mh),!(i.boundingBox!==null&&Mr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Mr)))}_computeIntersections(t,e,i){let n;const r=this.geometry,s=this.material,a=r.index,o=r.attributes.position,l=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,d=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(s))for(let f=0,g=d.length;f<g;f++){const m=d[f],_=s[m.materialIndex],p=Math.max(m.start,h.start),y=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let T=p,M=y;T<M;T+=3){const b=a.getX(T),R=a.getX(T+1),A=a.getX(T+2);n=ho(this,_,t,i,l,c,u,b,R,A),n&&(n.faceIndex=Math.floor(T/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const f=Math.max(0,h.start),g=Math.min(a.count,h.start+h.count);for(let m=f,_=g;m<_;m+=3){const p=a.getX(m),y=a.getX(m+1),T=a.getX(m+2);n=ho(this,s,t,i,l,c,u,p,y,T),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(o!==void 0)if(Array.isArray(s))for(let f=0,g=d.length;f<g;f++){const m=d[f],_=s[m.materialIndex],p=Math.max(m.start,h.start),y=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let T=p,M=y;T<M;T+=3){const b=T,R=T+1,A=T+2;n=ho(this,_,t,i,l,c,u,b,R,A),n&&(n.faceIndex=Math.floor(T/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const f=Math.max(0,h.start),g=Math.min(o.count,h.start+h.count);for(let m=f,_=g;m<_;m+=3){const p=m,y=m+1,T=m+2;n=ho(this,s,t,i,l,c,u,p,y,T),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}};function pg(t,e,i,n,r,s,a,o){let l;if(e.side===1?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===0,o),l===null)return null;uo.copy(o),uo.applyMatrix4(t.matrixWorld);const c=i.ray.origin.distanceTo(uo);return c<i.near||c>i.far?null:{distance:c,point:uo.clone(),object:t}}function ho(t,e,i,n,r,s,a,o,l,c){t.getVertexPosition(o,ao),t.getVertexPosition(l,oo),t.getVertexPosition(c,lo);const u=pg(t,e,i,n,ao,oo,lo,gh);if(u){const d=new G;Ws.getBarycoord(gh,ao,oo,lo,d),r&&(u.uv=Ws.getInterpolatedAttribute(r,o,l,c,d,new at)),s&&(u.uv1=Ws.getInterpolatedAttribute(s,o,l,c,d,new at)),a&&(u.normal=Ws.getInterpolatedAttribute(a,o,l,c,d,new G),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new G,materialIndex:0};Ws.getNormal(ao,oo,lo,h.normal),u.face=h,u.barycoord=d}return u}var mg=class extends mn{constructor(t=null,e=1,i=1,n,r,s,a,o,l=Ti,c=Ti,u,d){super(null,s,a,o,l,c,n,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Yl=new G,_g=new G,gg=new Ye,Tr=class{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=Yl.subVectors(i,e).cross(_g.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const n=t.delta(Yl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(s<0||s>1)?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||gg.getNormalMatrix(t),n=this.coplanarPoint(Yl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},xr=new Ia,vg=new at(.5,.5),fo=new G,uu=class{constructor(t=new Tr,e=new Tr,i=new Tr,n=new Tr,r=new Tr,s=new Tr){this.planes=[t,e,i,n,r,s]}set(t,e,i,n,r,s){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(s),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ls,i=!1){const n=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],f=r[8],g=r[9],m=r[10],_=r[11],p=r[12],y=r[13],T=r[14],M=r[15];if(n[0].setComponents(l-s,h-c,_-f,M-p).normalize(),n[1].setComponents(l+s,h+c,_+f,M+p).normalize(),n[2].setComponents(l+a,h+u,_+g,M+y).normalize(),n[3].setComponents(l-a,h-u,_-g,M-y).normalize(),i)n[4].setComponents(o,d,m,T).normalize(),n[5].setComponents(l-o,h-d,_-m,M-T).normalize();else if(n[4].setComponents(l-o,h-d,_-m,M-T).normalize(),e===2e3)n[5].setComponents(l+o,h+d,_+m,M+T).normalize();else if(e===2001)n[5].setComponents(o,d,m,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xr)}intersectsSprite(t){xr.center.set(0,0,0);const e=vg.distanceTo(t.center);return xr.radius=.7071067811865476+e,xr.applyMatrix4(t.matrixWorld),this.intersectsSphere(xr)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(fo.x=n.normal.x>0?t.max.x:t.min.x,fo.y=n.normal.y>0?t.max.y:t.min.y,fo.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(fo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Hd=class extends Hr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Qo=new G,jo=new G,vh=new Ot,Ks=new cu,po=new Ia,ql=new G,Mh=new G,Mg=class extends Ui{constructor(t=new $i,e=new Hd){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let n=1,r=e.count;n<r;n++)Qo.fromBufferAttribute(e,n-1),jo.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=Qo.distanceTo(jo);t.setAttribute("lineDistance",new _i(i,1))}else Ne("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,r=t.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),po.copy(i.boundingSphere),po.applyMatrix4(n),po.radius+=r,t.ray.intersectsSphere(po)===!1)return;vh.copy(n).invert(),Ks.copy(t.ray).applyMatrix4(vh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=this.isLineSegments?2:1,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,s.start),h=Math.min(c.count,s.start+s.count);for(let f=d,g=h-1;f<g;f+=l){const m=c.getX(f),_=c.getX(f+1),p=mo(this,t,Ks,o,m,_,f);p&&e.push(p)}if(this.isLineLoop){const f=c.getX(h-1),g=c.getX(d),m=mo(this,t,Ks,o,f,g,h-1);m&&e.push(m)}}else{const d=Math.max(0,s.start),h=Math.min(u.count,s.start+s.count);for(let f=d,g=h-1;f<g;f+=l){const m=mo(this,t,Ks,o,f,f+1,f);m&&e.push(m)}if(this.isLineLoop){const f=mo(this,t,Ks,o,h-1,d,h-1);f&&e.push(f)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){const i=t[e[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=i.length;n<r;n++){const s=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}};function mo(t,e,i,n,r,s,a){const o=t.geometry.attributes.position;if(Qo.fromBufferAttribute(o,r),jo.fromBufferAttribute(o,s),i.distanceSqToSegment(Qo,jo,ql,Mh)>n)return;ql.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(ql);if(!(l<e.near||l>e.far))return{distance:l,point:Mh.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}var xg=class extends Mg{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Wd=class extends Hr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},xh=new Ot,Lc=new cu,_o=new Ia,go=new G,Sg=class extends Ui{constructor(t=new $i,e=new Wd){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_o.copy(i.boundingSphere),_o.applyMatrix4(n),_o.radius+=r,t.ray.intersectsSphere(_o)===!1)return;xh.copy(n).invert(),Lc.copy(t.ray).applyMatrix4(xh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=i.index,c=i.attributes.position;if(l!==null){const u=Math.max(0,s.start),d=Math.min(l.count,s.start+s.count);for(let h=u,f=d;h<f;h++){const g=l.getX(h);go.fromBufferAttribute(c,g),Sh(go,g,o,n,t,e,this)}}else{const u=Math.max(0,s.start),d=Math.min(c.count,s.start+s.count);for(let h=u,f=d;h<f;h++)go.fromBufferAttribute(c,h),Sh(go,h,o,n,t,e,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){const i=t[e[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=i.length;n<r;n++){const s=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}};function Sh(t,e,i,n,r,s,a){const o=Lc.distanceSqToPoint(t);if(o<i){const l=new G;Lc.closestPointToPoint(t,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Xd=class extends mn{constructor(t=[],e=301,i,n,r,s,a,o,l,c){super(t,e,i,n,r,s,a,o,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ns=class extends mn{constructor(t,e,i=Br,n,r,s,a=Ti,o=Ti,l,c=Ca,u=1){if(c!==1026&&c!==1027)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:t,height:e,depth:u},n,r,s,a,o,c,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new lu(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},yg=class extends Ns{constructor(t,e=Br,i=301,n,r,s=Ti,a=Ti,o,l=Ca){const c={width:t,height:t,depth:1},u=[c,c,c,c,c,c];super(t,t,e,i,n,r,s,a,o,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Yd=class extends mn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},hu=class qd extends $i{constructor(e=1,i=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,n,i,e,a,s,0),g("z","y","x",1,-1,n,i,-e,a,s,1),g("x","z","y",1,1,e,n,i,r,a,2),g("x","z","y",1,-1,e,n,-i,r,a,3),g("x","y","z",1,-1,e,i,n,r,s,4),g("x","y","z",-1,-1,e,i,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new _i(c,3)),this.setAttribute("normal",new _i(u,3)),this.setAttribute("uv",new _i(d,2));function g(m,_,p,y,T,M,b,R,A,v,S){const D=M/A,C=b/v,L=M/2,Y=b/2,k=R/2,V=A+1,W=v+1;let U=0,J=0;const Q=new G;for(let P=0;P<W;P++){const ce=P*C-Y;for(let Se=0;Se<V;Se++)Q[m]=(Se*D-L)*y,Q[_]=ce*T,Q[p]=k,c.push(Q.x,Q.y,Q.z),Q[m]=0,Q[_]=0,Q[p]=R>0?1:-1,u.push(Q.x,Q.y,Q.z),d.push(Se/A),d.push(1-P/v),U+=1}for(let P=0;P<v;P++)for(let ce=0;ce<A;ce++){const Se=h+ce+V*P,rt=h+ce+V*(P+1),Oe=h+(ce+1)+V*(P+1),Z=h+(ce+1)+V*P;l.push(Se,rt,Z),l.push(rt,Oe,Z),J+=6}o.addGroup(f,J,S),f+=J,h+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qd(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Eg=class Kd extends $i{constructor(e=[],i=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:n,detail:r};const s=[],a=[];o(r),c(n),u(),this.setAttribute("position",new _i(s,3)),this.setAttribute("normal",new _i(s.slice(),3)),this.setAttribute("uv",new _i(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const T=new G,M=new G,b=new G;for(let R=0;R<i.length;R+=3)f(i[R+0],T),f(i[R+1],M),f(i[R+2],b),l(T,M,b,y)}function l(y,T,M,b){const R=b+1,A=[];for(let v=0;v<=R;v++){A[v]=[];const S=y.clone().lerp(M,v/R),D=T.clone().lerp(M,v/R),C=R-v;for(let L=0;L<=C;L++)L===0&&v===R?A[v][L]=S:A[v][L]=S.clone().lerp(D,L/C)}for(let v=0;v<R;v++)for(let S=0;S<2*(R-v)-1;S++){const D=Math.floor(S/2);S%2===0?(h(A[v][D+1]),h(A[v+1][D]),h(A[v][D])):(h(A[v][D+1]),h(A[v+1][D+1]),h(A[v+1][D]))}}function c(y){const T=new G;for(let M=0;M<s.length;M+=3)T.x=s[M+0],T.y=s[M+1],T.z=s[M+2],T.normalize().multiplyScalar(y),s[M+0]=T.x,s[M+1]=T.y,s[M+2]=T.z}function u(){const y=new G;for(let T=0;T<s.length;T+=3){y.x=s[T+0],y.y=s[T+1],y.z=s[T+2];const M=_(y)/2/Math.PI+.5,b=p(y)/Math.PI+.5;a.push(M,1-b)}g(),d()}function d(){for(let y=0;y<a.length;y+=6){const T=a[y+0],M=a[y+2],b=a[y+4];Math.max(T,M,b)>.9&&Math.min(T,M,b)<.1&&(T<.2&&(a[y+0]+=1),M<.2&&(a[y+2]+=1),b<.2&&(a[y+4]+=1))}}function h(y){s.push(y.x,y.y,y.z)}function f(y,T){const M=y*3;T.x=e[M+0],T.y=e[M+1],T.z=e[M+2]}function g(){const y=new G,T=new G,M=new G,b=new G,R=new at,A=new at,v=new at;for(let S=0,D=0;S<s.length;S+=9,D+=6){y.set(s[S+0],s[S+1],s[S+2]),T.set(s[S+3],s[S+4],s[S+5]),M.set(s[S+6],s[S+7],s[S+8]),R.set(a[D+0],a[D+1]),A.set(a[D+2],a[D+3]),v.set(a[D+4],a[D+5]),b.copy(y).add(T).add(M).divideScalar(3);const C=_(b);m(R,D+0,y,C),m(A,D+2,T,C),m(v,D+4,M,C)}}function m(y,T,M,b){b<0&&y.x===1&&(a[T]=y.x-1),M.x===0&&M.z===0&&(a[T]=b/2/Math.PI+.5)}function _(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kd(e.vertices,e.indices,e.radius,e.detail)}},Tg=class Zd extends Eg{constructor(e=1,i=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,i),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new Zd(e.radius,e.detail)}},$d=class Jd extends $i{constructor(e=1,i=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:n,heightSegments:r};const s=e/2,a=i/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,d=e/o,h=i/l,f=[],g=[],m=[],_=[];for(let p=0;p<u;p++){const y=p*h-a;for(let T=0;T<c;T++){const M=T*d-s;g.push(M,-y,0),m.push(0,0,1),_.push(T/o),_.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const T=y+c*p,M=y+c*(p+1),b=y+1+c*(p+1),R=y+1+c*p;f.push(T,M,R),f.push(M,b,R)}this.setIndex(f),this.setAttribute("position",new _i(g,3)),this.setAttribute("normal",new _i(m,3)),this.setAttribute("uv",new _i(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jd(e.width,e.height,e.widthSegments,e.heightSegments)}},bg=class Qd extends $i{constructor(e=1,i=.4,n=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:n,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);const l=[],c=[],u=[],d=[],h=new G,f=new G,g=new G;for(let m=0;m<=n;m++){const _=a+m/n*o;for(let p=0;p<=r;p++){const y=p/r*s;f.x=(e+i*Math.cos(_))*Math.cos(y),f.y=(e+i*Math.cos(_))*Math.sin(y),f.z=i*Math.sin(_),c.push(f.x,f.y,f.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),g.subVectors(f,h).normalize(),u.push(g.x,g.y,g.z),d.push(p/r),d.push(m/n)}}for(let m=1;m<=n;m++)for(let _=1;_<=r;_++){const p=(r+1)*m+_-1,y=(r+1)*(m-1)+_-1,T=(r+1)*(m-1)+_,M=(r+1)*m+_;l.push(p,y,M),l.push(y,T,M)}this.setIndex(l),this.setAttribute("position",new _i(c,3)),this.setAttribute("normal",new _i(u,3)),this.setAttribute("uv",new _i(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qd(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};function Os(t){const e={};for(const i in t){e[i]={};for(const n in t[i]){const r=t[i][n];if(yh(r))r.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][n]=null):e[i][n]=r.clone();else if(Array.isArray(r))if(yh(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[i][n]=s}else e[i][n]=r.slice();else e[i][n]=r}}return e}function Mi(t){const e={};for(let i=0;i<t.length;i++){const n=Os(t[i]);for(const r in n)e[r]=n[r]}return e}function yh(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Ag(t){const e=[];for(let i=0;i<t.length;i++)e.push(t[i].clone());return e}function jd(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}var wg={clone:Os,merge:Mi},Rg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Rn=class extends Hr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rg,this.fragmentShader=Cg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Os(t.uniforms),this.uniformsGroups=Ag(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const r=this.uniforms[n].value;r&&r.isTexture?e.uniforms[n]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[n]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[n]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[n]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[n]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[n]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[n]={type:"m4",value:r.toArray()}:e.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const n=t.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=e[n.value]||null;break;case"c":this.uniforms[i].value=new Qe().setHex(n.value);break;case"v2":this.uniforms[i].value=new at().fromArray(n.value);break;case"v3":this.uniforms[i].value=new G().fromArray(n.value);break;case"v4":this.uniforms[i].value=new Gt().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Ye().fromArray(n.value);break;case"m4":this.uniforms[i].value=new Ot().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Pg=class extends Rn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Dg=class extends Hr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Us,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Eh=class extends Dg{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new at(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return st(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}},Lg=class extends Hr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=G_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ig=class extends Hr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function vo(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}var Ua=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let i=this._cachedIndex,n=e[i],r=e[i-1];i:{e:{let s;t:{n:if(!(t<n)){for(let a=i+2;;){if(n===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=n,n=e[++i],t<n)break e}s=e.length;break t}if(!(t>=r)){const a=e[1];t<a&&(i=2,r=a);for(let o=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(n=r,r=e[--i-1],t>=r)break e}s=i,i=0;break t}break i}for(;i<s;){const a=i+s>>>1;t<e[a]?s=a:i=a+1}if(n=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=t*n;for(let s=0;s!==n;++s)e[s]=i[r+s];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ug=class extends Ua{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ju,endingEnd:ju}}intervalChanged_(t,e,i){const n=this.parameterPositions;let r=t-2,s=t+1,a=n[r],o=n[s];if(a===void 0)switch(this.getSettings_().endingStart){case eh:r=t,a=2*e-i;break;case th:r=n.length-2,a=e+n[r]-n[r+1];break;default:r=t,a=i}if(o===void 0)switch(this.getSettings_().endingEnd){case eh:s=t,o=2*i-e;break;case th:s=1,o=i+n[1]-n[0];break;default:s=t-1,o=e}const l=(i-e)*.5,c=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(o-i),this._offsetPrev=r*c,this._offsetNext=s*c}interpolate_(t,e,i,n){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,h=this._weightNext,f=(i-e)/(n-e),g=f*f,m=g*f,_=-d*m+2*d*g-d*f,p=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*f+1,y=(-1-h)*m+(1.5+h)*g+.5*f,T=h*m-h*g;for(let M=0;M!==a;++M)r[M]=_*s[c+M]+p*s[l+M]+y*s[o+M]+T*s[u+M];return r}},Ng=class extends Ua{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=(i-e)/(n-e),u=1-c;for(let d=0;d!==a;++d)r[d]=s[l+d]*u+s[o+d]*c;return r}},Og=class extends Ua{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},Fg=class extends Ua{interpolate_(t,e,i,n){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this.inTangents,u=this.outTangents;if(!c||!u){const f=(i-e)/(n-e),g=1-f;for(let m=0;m!==a;++m)r[m]=s[l+m]*g+s[o+m]*f;return r}const d=a*2,h=t-1;for(let f=0;f!==a;++f){const g=s[l+f],m=s[o+f],_=h*d+f*2,p=u[_],y=u[_+1],T=t*d+f*2,M=c[T],b=c[T+1];let R=(i-e)/(n-e),A,v,S,D,C;for(let L=0;L<8;L++){A=R*R,v=A*R,S=1-R,D=S*S,C=D*S;const Y=C*e+3*D*R*p+3*S*A*M+v*n-i;if(Math.abs(Y)<1e-10)break;const k=3*D*(p-e)+6*S*R*(M-p)+3*A*(n-M);if(Math.abs(k)<1e-10)break;R=R-Y/k,R=Math.max(0,Math.min(1,R))}r[f]=C*g+3*D*R*y+3*S*A*b+v*m}return r}},Cn=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=vo(e,this.TimeBufferType),this.values=vo(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:vo(t.times,Array),values:vo(t.values,Array)};const n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Og(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ng(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ug(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){const e=new Fg(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ko:e=this.InterpolantFactoryMethodDiscrete;break;case Rc:e=this.InterpolantFactoryMethodLinear;break;case Sl:e=this.InterpolantFactoryMethodSmooth;break;case Qu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ne("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ko;case this.InterpolantFactoryMethodLinear:return Rc;case this.InterpolantFactoryMethodSmooth:return Sl;case this.InterpolantFactoryMethodBezier:return Qu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){const i=this.times,n=i.length;let r=0,s=n-1;for(;r!==n&&i[r]<t;)++r;for(;s!==-1&&i[s]>e;)--s;if(++s,r!==0||s!==n){r>=s&&(s=Math.max(s,1),r=s-1);const a=this.getValueSize();this.times=i.slice(r,s),this.values=this.values.slice(r*a,s*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(Be("KeyframeTrack: Invalid value size in track.",this),t=!1);const i=this.times,n=this.values,r=i.length;r===0&&(Be("KeyframeTrack: Track is empty.",this),t=!1);let s=null;for(let a=0;a!==r;a++){const o=i[a];if(typeof o=="number"&&isNaN(o)){Be("KeyframeTrack: Time is not a valid number.",this,a,o),t=!1;break}if(s!==null&&s>o){Be("KeyframeTrack: Out of order keys.",this,a,o,s),t=!1;break}s=o}if(n!==void 0&&X_(n))for(let a=0,o=n.length;a!==o;++a){const l=n[a];if(isNaN(l)){Be("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Sl,r=t.length-1;let s=1;for(let a=1;a<r;++a){let o=!1;const l=t[a];if(l!==t[a+1]&&(a!==1||l!==t[0]))if(n)o=!0;else{const c=a*i,u=c-i,d=c+i;for(let h=0;h!==i;++h){const f=e[c+h];if(f!==e[u+h]||f!==e[d+h]){o=!0;break}}}if(o){if(a!==s){t[s]=t[a];const c=a*i,u=s*i;for(let d=0;d!==i;++d)e[u+d]=e[c+d]}++s}}if(r>0){t[s]=t[r];for(let a=r*i,o=s*i,l=0;l!==i;++l)e[o+l]=e[a+l];++s}return s!==t.length?(this.times=t.slice(0,s),this.values=e.slice(0,s*i)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}};Cn.prototype.ValueTypeName="";Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=Rc;var Na=class extends Cn{constructor(t,e,i){super(t,e,i)}};Na.prototype.ValueTypeName="bool";Na.prototype.ValueBufferType=Array;Na.prototype.DefaultInterpolation=Ko;Na.prototype.InterpolantFactoryMethodLinear=void 0;Na.prototype.InterpolantFactoryMethodSmooth=void 0;var Bg=class extends Cn{constructor(t,e,i,n){super(t,e,i,n)}};Bg.prototype.ValueTypeName="color";var zg=class extends Cn{constructor(t,e,i,n){super(t,e,i,n)}};zg.prototype.ValueTypeName="number";var kg=class extends Ua{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=(i-e)/(n-e);let l=t*a;for(let c=l+a;l!==c;l+=4)Gr.slerpFlat(r,0,s,l-a,s,l,o);return r}},ep=class extends Cn{constructor(t,e,i,n){super(t,e,i,n)}InterpolantFactoryMethodLinear(t){return new kg(this.times,this.values,this.getValueSize(),t)}};ep.prototype.ValueTypeName="quaternion";ep.prototype.InterpolantFactoryMethodSmooth=void 0;var Oa=class extends Cn{constructor(t,e,i){super(t,e,i)}};Oa.prototype.ValueTypeName="string";Oa.prototype.ValueBufferType=Array;Oa.prototype.DefaultInterpolation=Ko;Oa.prototype.InterpolantFactoryMethodLinear=void 0;Oa.prototype.InterpolantFactoryMethodSmooth=void 0;var Vg=class extends Cn{constructor(t,e,i,n){super(t,e,i,n)}};Vg.prototype.ValueTypeName="vector";var Gg=class{constructor(t,e,i){const n=this;let r=!1,s=0,a=0,o;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(c){a++,r===!1&&n.onStart!==void 0&&n.onStart(c,s,a),r=!0},this.itemEnd=function(c){s++,n.onProgress!==void 0&&n.onProgress(c,s,a),s===a&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(c){n.onError!==void 0&&n.onError(c)},this.resolveURL=function(c){return c=c.normalize("NFC"),o?o(c):c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,u){return l.push(c,u),this},this.removeHandler=function(c){const u=l.indexOf(c);return u!==-1&&l.splice(u,2),this},this.getHandler=function(c){for(let u=0,d=l.length;u<d;u+=2){const h=l[u],f=l[u+1];if(h.global&&(h.lastIndex=0),h.test(c))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Hg=new Gg,Wg=class{constructor(t){this.manager=t!==void 0?t:Hg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const i=this;return new Promise(function(n,r){i.load(t,n,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Wg.DEFAULT_MATERIAL_NAME="__DEFAULT";var tp=class extends Ui{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Kl=new Ot,Th=new G,bh=new G,Xg=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.mapType=cr,this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uu,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Th.setFromMatrixPosition(t.matrixWorld),e.position.copy(Th),bh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(bh),e.updateMatrixWorld(),Kl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kl,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===2001||e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Kl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Mo=new G,xo=new Gr,gn=new G,ip=class extends Ui{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=Ls,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Mo,xo,gn),gn.x===1&&gn.y===1&&gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mo,xo,gn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Mo,xo,gn),gn.x===1&&gn.y===1&&gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mo,xo,gn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Qn=new G,Ah=new at,wh=new at,rn=class extends ip{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Pc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(El*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Pc*2*Math.atan(Math.tan(El*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z)}getViewSize(t,e){return this.getViewBounds(t,Ah,wh),e.subVectors(wh,Ah)}setViewOffset(t,e,i,n,r,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(El*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n;const s=this.view;if(this.view!==null&&this.view.enabled){const o=s.fullWidth,l=s.fullHeight;r+=s.offsetX*n/o,e-=s.offsetY*i/l,n*=s.width/o,i*=s.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},fu=class extends ip{constructor(t=-1,e=1,i=1,n=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-t,s=i+t,a=n+e,o=n-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,s=r+l*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Yg=class extends Xg{constructor(){super(new fu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Rh=class extends tp{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ui.DEFAULT_UP),this.updateMatrix(),this.target=new Ui,this.shadow=new Yg}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},qg=class extends tp{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}},os=-90,ls=1,Kg=class extends Ui{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new rn(os,ls,t,e);n.layers=this.layers,this.add(n);const r=new rn(os,ls,t,e);r.layers=this.layers,this.add(r);const s=new rn(os,ls,t,e);s.layers=this.layers,this.add(s);const a=new rn(os,ls,t,e);a.layers=this.layers,this.add(a);const o=new rn(os,ls,t,e);o.layers=this.layers,this.add(o);const l=new rn(os,ls,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,r,s,a,o]=e;for(const l of e)this.remove(l);if(t===2e3)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===2001)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,l,c]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),f=t.xr.enabled;t.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(i,2,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,4,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(u,d,h),t.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},Zg=class extends rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},$g="\\[\\]\\.:\\/",Jg=new RegExp("[\\[\\]\\.:\\/]","g"),du="[^\\[\\]\\.:\\/]",Qg="[^"+$g.replace("\\.","")+"]",jg=/((?:WC+[\/:])*)/.source.replace("WC",du),ev=/(WCOD+)?/.source.replace("WCOD",Qg),tv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",du),iv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",du),nv=new RegExp("^"+jg+ev+tv+iv+"$"),rv=["material","materials","bones","map"],sv=class{constructor(t,e,i){const n=i||Ut.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ut=class ds{constructor(e,i,n){this.path=i,this.parsedPath=n||ds.parseTrackName(i),this.node=ds.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,i,n){return e&&e.isAnimationObjectGroup?new ds.Composite(e,i,n):new ds(e,i,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Jg,"")}static parseTrackName(e){const i=nv.exec(e);if(i===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);rv.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,i){if(i===void 0||i===""||i==="."||i===-1||i===e.name||i===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(i);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===i||o.uuid===i)return o;const l=n(o.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,i){e[i]=this.targetObject[this.propertyName]}_getValue_array(e,i){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[i++]=n[r]}_getValue_arrayElement(e,i){e[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,i){this.resolvedProperty.toArray(e,i)}_setValue_direct(e,i){this.targetObject[this.propertyName]=e[i]}_setValue_direct_setNeedsUpdate(e,i){this.targetObject[this.propertyName]=e[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,i){this.targetObject[this.propertyName]=e[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,i){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[i++]}_setValue_array_setNeedsUpdate(e,i){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,i){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,i){this.resolvedProperty[this.propertyIndex]=e[i]}_setValue_arrayElement_setNeedsUpdate(e,i){this.resolvedProperty[this.propertyIndex]=e[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,i){this.resolvedProperty[this.propertyIndex]=e[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,i){this.resolvedProperty.fromArray(e,i)}_setValue_fromArray_setNeedsUpdate(e,i){this.resolvedProperty.fromArray(e,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,i){this.resolvedProperty.fromArray(e,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,i){this.bind(),this.getValue(e,i)}_setValue_unbound(e,i){this.bind(),this.setValue(e,i)}bind(){let e=this.node;const i=this.parsedPath,n=i.objectName,r=i.propertyName;let s=i.propertyIndex;if(e||(e=ds.findNode(this.rootNode,i.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ne("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=i.objectIndex;switch(n){case"materials":if(!e.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Be("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Be("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Be("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Be("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Be("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[r];if(a===void 0){const c=i.nodeName;Be("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ut.Composite=sv;Ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ut.prototype.GetterByBindingType=[Ut.prototype._getValue_direct,Ut.prototype._getValue_array,Ut.prototype._getValue_arrayElement,Ut.prototype._getValue_toArray];Ut.prototype.SetterByBindingTypeAndVersioning=[[Ut.prototype._setValue_direct,Ut.prototype._setValue_direct_setNeedsUpdate,Ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_array,Ut.prototype._setValue_array_setNeedsUpdate,Ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_arrayElement,Ut.prototype._setValue_arrayElement_setNeedsUpdate,Ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_fromArray,Ut.prototype._setValue_fromArray_setNeedsUpdate,Ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var HM=class np{static{np.prototype.isMatrix2=!0}constructor(e,i,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let n=0;n<4;n++)this.elements[n]=e[n+i];return this}set(e,i,n,r){const s=this.elements;return s[0]=e,s[2]=i,s[1]=n,s[3]=r,this}};function Ch(t,e,i,n){const r=av(n);switch(i){case n_:return t*e;case s_:return t*e/r.components*r.byteLength;case wd:return t*e/r.components*r.byteLength;case qo:return t*e*2/r.components*r.byteLength;case Rd:return t*e*2/r.components*r.byteLength;case r_:return t*e*3/r.components*r.byteLength;case Ra:return t*e*4/r.components*r.byteLength;case Cd:return t*e*4/r.components*r.byteLength;case a_:case o_:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case l_:case c_:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case h_:case d_:return Math.max(t,16)*Math.max(e,8)/4;case u_:case f_:return Math.max(t,8)*Math.max(e,8)/2;case p_:case m_:case g_:case v_:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case __:case M_:case x_:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case S_:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case y_:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case E_:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case T_:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case b_:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case A_:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case w_:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case R_:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case C_:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case P_:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case D_:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case L_:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case I_:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case U_:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case N_:case O_:case F_:return Math.ceil(t/4)*Math.ceil(e/4)*16;case B_:case z_:return Math.ceil(t/4)*Math.ceil(e/4)*8;case k_:case V_:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function av(t){switch(t){case cr:case Qm:return{byteLength:1,components:1};case yd:case jm:case zr:return{byteLength:2,components:1};case Ed:case Td:return{byteLength:2,components:4};case Br:case e_:case rl:return{byteLength:4,components:1};case t_:case i_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function rp(){let t=null,e=!1,i=null,n=null;function r(s,a){i(s,a),n=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&i!==null&&t!==null&&(n=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){i=s},setContext:function(s){t=s}}}function ov(t){const e=new WeakMap;function i(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=t.HALF_FLOAT:f=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=t.SHORT;else if(c instanceof Uint32Array)f=t.UNSIGNED_INT;else if(c instanceof Int32Array)f=t.INT;else if(c instanceof Int8Array)f=t.BYTE;else if(c instanceof Uint8Array)f=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,o),d.length===0)t.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){const g=d[h],m=d[f];m.start<=g.start+g.count+1?g.count=Math.max(g.count,m.start+m.count-g.start):(++h,d[h]=m)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){const m=d[f];t.bufferSubData(c,m.start*u.BYTES_PER_ELEMENT,u,m.start,m.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,i(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var qe={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},_e={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Sn={basic:{uniforms:Mi([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Mi([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Qe(0)},envMapIntensity:{value:1}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Mi([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Mi([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Mi([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Qe(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Mi([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Mi([_e.points,_e.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Mi([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Mi([_e.common,_e.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Mi([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Mi([_e.sprite,_e.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distance:{uniforms:Mi([_e.common,_e.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distance_vert,fragmentShader:qe.distance_frag},shadow:{uniforms:Mi([_e.lights,_e.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Sn.physical={uniforms:Mi([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};var So={r:0,b:0,g:0},lv=new Ot,sp=new Ye;sp.set(-1,0,0,0,1,0,0,0,1);function cv(t,e,i,n,r,s){const a=new Qe(0);let o=r===!0?0:1,l,c,u=null,d=0,h=null;function f(y){let T=y.isScene===!0?y.background:null;if(T&&T.isTexture){const M=y.backgroundBlurriness>0;T=e.get(T,M)}return T}function g(y){let T=!1;const M=f(y);M===null?_(a,o):M&&M.isColor&&(_(M,1),T=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(y,T){const M=f(T);M&&(M.isCubeTexture||M.mapping===306)?(c===void 0&&(c=new pn(new hu(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:Os(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(lv.makeRotationFromEuler(T.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(sp),c.material.toneMapped=ot.getTransfer(M.colorSpace)!==$o,(u!==M||d!==M.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,h=t.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new pn(new $d(2,2),new Rn({name:"BackgroundMaterial",uniforms:Os(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=ot.getTransfer(M.colorSpace)!==$o,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||h!==t.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,h=t.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function _(y,T){y.getRGB(So,jd(t)),i.buffers.color.setClear(So.r,So.g,So.b,T,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,T=1){a.set(y),o=T,_(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,_(a,o)},render:g,addToRenderList:m,dispose:p}}function uv(t,e){const i=t.getParameter(t.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,a=!1;function o(C,L,Y,k,V){let W=!1;const U=d(C,k,Y,L);s!==U&&(s=U,c(s.object)),W=f(C,k,Y,V),W&&g(C,k,Y,V),V!==null&&e.update(V,t.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,M(C,L,Y,k),V!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return t.createVertexArray()}function c(C){return t.bindVertexArray(C)}function u(C){return t.deleteVertexArray(C)}function d(C,L,Y,k){const V=k.wireframe===!0;let W=n[L.id];W===void 0&&(W={},n[L.id]=W);const U=C.isInstancedMesh===!0?C.id:0;let J=W[U];J===void 0&&(J={},W[U]=J);let Q=J[Y.id];Q===void 0&&(Q={},J[Y.id]=Q);let P=Q[V];return P===void 0&&(P=h(l()),Q[V]=P),P}function h(C){const L=[],Y=[],k=[];for(let V=0;V<i;V++)L[V]=0,Y[V]=0,k[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:Y,attributeDivisors:k,object:C,attributes:{},index:null}}function f(C,L,Y,k){const V=s.attributes,W=L.attributes;let U=0;const J=Y.getAttributes();for(const Q in J)if(J[Q].location>=0){const P=V[Q];let ce=W[Q];if(ce===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(ce=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(ce=C.instanceColor)),P===void 0||P.attribute!==ce||ce&&P.data!==ce.data)return!0;U++}return s.attributesNum!==U||s.index!==k}function g(C,L,Y,k){const V={},W=L.attributes;let U=0;const J=Y.getAttributes();for(const Q in J)if(J[Q].location>=0){let P=W[Q];P===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(P=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(P=C.instanceColor));const ce={};ce.attribute=P,P&&P.data&&(ce.data=P.data),V[Q]=ce,U++}s.attributes=V,s.attributesNum=U,s.index=k}function m(){const C=s.newAttributes;for(let L=0,Y=C.length;L<Y;L++)C[L]=0}function _(C){p(C,0)}function p(C,L){const Y=s.newAttributes,k=s.enabledAttributes,V=s.attributeDivisors;Y[C]=1,k[C]===0&&(t.enableVertexAttribArray(C),k[C]=1),V[C]!==L&&(t.vertexAttribDivisor(C,L),V[C]=L)}function y(){const C=s.newAttributes,L=s.enabledAttributes;for(let Y=0,k=L.length;Y<k;Y++)L[Y]!==C[Y]&&(t.disableVertexAttribArray(Y),L[Y]=0)}function T(C,L,Y,k,V,W,U){U===!0?t.vertexAttribIPointer(C,L,Y,V,W):t.vertexAttribPointer(C,L,Y,k,V,W)}function M(C,L,Y,k){m();const V=k.attributes,W=Y.getAttributes(),U=L.defaultAttributeValues;for(const J in W){const Q=W[J];if(Q.location>=0){let P=V[J];if(P===void 0&&(J==="instanceMatrix"&&C.instanceMatrix&&(P=C.instanceMatrix),J==="instanceColor"&&C.instanceColor&&(P=C.instanceColor)),P!==void 0){const ce=P.normalized,Se=P.itemSize,rt=e.get(P);if(rt===void 0)continue;const Oe=rt.buffer,Z=rt.type,se=rt.bytesPerElement,de=Z===t.INT||Z===t.UNSIGNED_INT||P.gpuType===1013;if(P.isInterleavedBufferAttribute){const pe=P.data,be=pe.stride,De=P.offset;if(pe.isInstancedInterleavedBuffer){for(let Re=0;Re<Q.locationSize;Re++)p(Q.location+Re,pe.meshPerAttribute);C.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Re=0;Re<Q.locationSize;Re++)_(Q.location+Re);t.bindBuffer(t.ARRAY_BUFFER,Oe);for(let Re=0;Re<Q.locationSize;Re++)T(Q.location+Re,Se/Q.locationSize,Z,ce,be*se,(De+Se/Q.locationSize*Re)*se,de)}else{if(P.isInstancedBufferAttribute){for(let pe=0;pe<Q.locationSize;pe++)p(Q.location+pe,P.meshPerAttribute);C.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let pe=0;pe<Q.locationSize;pe++)_(Q.location+pe);t.bindBuffer(t.ARRAY_BUFFER,Oe);for(let pe=0;pe<Q.locationSize;pe++)T(Q.location+pe,Se/Q.locationSize,Z,ce,Se*se,Se/Q.locationSize*pe*se,de)}}else if(U!==void 0){const ce=U[J];if(ce!==void 0)switch(ce.length){case 2:t.vertexAttrib2fv(Q.location,ce);break;case 3:t.vertexAttrib3fv(Q.location,ce);break;case 4:t.vertexAttrib4fv(Q.location,ce);break;default:t.vertexAttrib1fv(Q.location,ce)}}}}y()}function b(){S();for(const C in n){const L=n[C];for(const Y in L){const k=L[Y];for(const V in k){const W=k[V];for(const U in W)u(W[U].object),delete W[U];delete k[V]}}delete n[C]}}function R(C){if(n[C.id]===void 0)return;const L=n[C.id];for(const Y in L){const k=L[Y];for(const V in k){const W=k[V];for(const U in W)u(W[U].object),delete W[U];delete k[V]}}delete n[C.id]}function A(C){for(const L in n){const Y=n[L];for(const k in Y){const V=Y[k];if(V[C.id]===void 0)continue;const W=V[C.id];for(const U in W)u(W[U].object),delete W[U];delete V[C.id]}}}function v(C){for(const L in n){const Y=n[L],k=C.isInstancedMesh===!0?C.id:0,V=Y[k];if(V!==void 0){for(const W in V){const U=V[W];for(const J in U)u(U[J].object),delete U[J];delete V[W]}delete Y[k],Object.keys(Y).length===0&&delete n[L]}}}function S(){D(),a=!0,s!==r&&(s=r,c(s.object))}function D(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:S,resetDefaultState:D,dispose:b,releaseStatesOfGeometry:R,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:m,enableAttribute:_,disableUnusedAttributes:y}}function hv(t,e,i){let n;function r(l){n=l}function s(l,c){t.drawArrays(n,l,c),i.update(c,n,1)}function a(l,c,u){u!==0&&(t.drawArraysInstanced(n,l,c,u),i.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let h=0;h<u;h++)d+=c[h];i.update(d,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function fv(t,e,i,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==1023&&n.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const v=A===1016&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==1009&&n.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==1015&&!v)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=i.precision!==void 0?i.precision:"highp";const u=l(c);u!==c&&(Ne("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=i.logarithmicDepthBuffer===!0,h=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&h===!1&&Ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),y=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),T=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=t.getParameter(t.MAX_SAMPLES),R=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:m,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:M,maxSamples:b,samples:R}}function dv(t){const e=this;let i=null,n=0,r=!1,s=!1;const a=new Tr,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||r;return r=h,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){i=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,m=d.clipIntersection,_=d.clipShadows,p=t.get(d);if(!r||g===null||g.length===0||s&&!_)s?u(null):c();else{const y=s?0:n,T=y*4;let M=p.clippingState||null;l.value=M,M=u(g,h,T,f);for(let b=0;b!==T;++b)M[b]=i[b];p.clippingState=M,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==i&&(l.value=i,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,g){const m=d!==null?d.length:0;let _=null;if(m!==0){if(_=l.value,g!==!0||_===null){const p=f+m*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(_===null||_.length<p)&&(_=new Float32Array(p));for(let T=0,M=f;T!==m;++T,M+=4)a.copy(d[T]).applyMatrix4(y,o),a.normal.toArray(_,M),_[M+3]=a.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,_}}var sr=4,Ph=[.125,.215,.35,.446,.526,.582],br=20,pv=256,Zs=new fu,Dh=new Qe,Zl=null,$l=0,Jl=0,Ql=!1,mv=new G,Lh=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,n=100,r={}){const{size:s=256,position:a=mv}=r;Zl=this._renderer.getRenderTarget(),$l=this._renderer.getActiveCubeFace(),Jl=this._renderer.getActiveMipmapLevel(),Ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,i,n,o,a),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Zl,$l,Jl),this._renderer.xr.enabled=Ql,t.scissorTest=!1,cs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===301||t.mapping===302?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zl=this._renderer.getRenderTarget(),$l=this._renderer.getActiveCubeFace(),Jl=this._renderer.getActiveMipmapLevel(),Ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Yi,minFilter:Yi,generateMipmaps:!1,type:zr,format:Ra,colorSpace:Cc,depthBuffer:!1},n=Ih(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ih(t,e,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=_v(r)),this._blurMaterial=vv(r,t,e),this._ggxMaterial=gv(r,t,e)}return n}_compileMaterial(t){const e=new pn(new $i,t);this._renderer.compile(e,Zs)}_sceneToCubeUV(t,e,i,n,r){const s=new rn(90,1,e,i),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,u=l.toneMapping;l.getClearColor(Dh),l.toneMapping=0,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(n),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pn(new hu,new Gd({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1})));const d=this._backgroundBox,h=d.material;let f=!1;const g=t.background;g?g.isColor&&(h.color.copy(g),t.background=null,f=!0):(h.color.copy(Dh),f=!0);for(let m=0;m<6;m++){const _=m%3;_===0?(s.up.set(0,a[m],0),s.position.set(r.x,r.y,r.z),s.lookAt(r.x+o[m],r.y,r.z)):_===1?(s.up.set(0,0,a[m]),s.position.set(r.x,r.y,r.z),s.lookAt(r.x,r.y+o[m],r.z)):(s.up.set(0,a[m],0),s.position.set(r.x,r.y,r.z),s.lookAt(r.x,r.y,r.z+o[m]));const p=this._cubeSize;cs(n,_*p,m>2?p:0,p,p),l.setRenderTarget(n),f&&l.render(d,s),l.render(t,s)}l.toneMapping=u,l.autoClear=c,t.background=g}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===301||t.mapping===302;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uh());const r=n?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;const a=r.uniforms;a.envMap.value=t;const o=this._cubeSize;cs(e,0,0,3*o,2*o),i.setRenderTarget(e),i.render(s,Zs)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const n=this._lodMeshes.length;for(let r=1;r<n;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){const n=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,a=this._lodMeshes[i];a.material=s;const o=s.uniforms,l=i/(this._lodMeshes.length-1),c=e/(this._lodMeshes.length-1),u=Math.sqrt(l*l-c*c)*(0+l*1.25),{_lodMax:d}=this,h=this._sizeLods[i],f=3*h*(i>d-sr?i-d+sr:0),g=4*(this._cubeSize-h);o.envMap.value=t.texture,o.roughness.value=u,o.mipInt.value=d-e,cs(r,f,g,3*h,2*h),n.setRenderTarget(r),n.render(a,Zs),o.envMap.value=r.texture,o.roughness.value=0,o.mipInt.value=d-i,cs(t,f,g,3*h,2*h),n.setRenderTarget(t),n.render(a,Zs)}_blur(t,e,i,n,r){const s=this._pingPongRenderTarget;this._halfBlur(t,s,e,i,n,"latitudinal",r),this._halfBlur(s,t,i,i,n,"longitudinal",r)}_halfBlur(t,e,i,n,r,s,a){const o=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&Be("blur direction must be either latitudinal or longitudinal!");const c=3,u=this._lodMeshes[n];u.material=l;const d=l.uniforms,h=this._sizeLods[i]-1,f=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*br-1),g=r/f,m=isFinite(r)?1+Math.floor(c*g):br;m>br&&Ne(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${br}`);const _=[];let p=0;for(let M=0;M<br;++M){const b=M/g,R=Math.exp(-b*b/2);_.push(R),M===0?p+=R:M<m&&(p+=2*R)}for(let M=0;M<_.length;M++)_[M]=_[M]/p;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=_,d.latitudinal.value=s==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=f,d.mipInt.value=y-i;const T=this._sizeLods[n];cs(e,3*T*(n>y-sr?n-y+sr:0),4*(this._cubeSize-T),3*T,2*T),o.setRenderTarget(e),o.render(u,Zs)}};function _v(t){const e=[],i=[],n=[];let r=t;const s=t-sr+1+Ph.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-sr?l=Ph[a-t+sr-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,m=3,_=2,p=1,y=new Float32Array(m*g*f),T=new Float32Array(_*g*f),M=new Float32Array(p*g*f);for(let R=0;R<f;R++){const A=R%3*2/3-1,v=R>2?0:-1,S=[A,v,0,A+2/3,v,0,A+2/3,v+1,0,A,v,0,A+2/3,v+1,0,A,v+1,0];y.set(S,m*g*R),T.set(h,_*g*R);const D=[R,R,R,R,R,R];M.set(D,p*g*R)}const b=new $i;b.setAttribute("position",new ln(y,m)),b.setAttribute("uv",new ln(T,_)),b.setAttribute("faceIndex",new ln(M,p)),n.push(new pn(b,null)),r>sr&&r--}return{lodMeshes:n,sizeLods:e,sigmas:i}}function Ih(t,e,i){const n=new An(t,e,i);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function cs(t,e,i,n,r){t.viewport.set(e,i,n,r),t.scissor.set(e,i,n,r)}function gv(t,e,i){return new Rn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:pv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:sl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function vv(t,e,i){const n=new Float32Array(br),r=new G(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Uh(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Nh(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function sl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var ap=class extends An{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Xd(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new hu(5,5,5),r=new Rn({name:"CubemapFromEquirect",uniforms:Os(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=e;const s=new pn(n,r),a=e.minFilter;return e.minFilter===1008&&(e.minFilter=Yi),new Kg(1,10,this).update(t,s),e.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){const r=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,i,n);t.setRenderTarget(r)}};function Mv(t){let e=new WeakMap,i=new WeakMap,n=null;function r(h,f=!1){return h==null?null:f?a(h):s(h)}function s(h){if(h&&h.isTexture){const f=h.mapping;if(f===303||f===304)if(e.has(h)){const g=e.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const m=new ap(g.height);return m.fromEquirectangularTexture(t,h),e.set(h,m),h.addEventListener("dispose",c),o(m.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const f=h.mapping,g=f===303||f===304,m=f===301||f===302;if(g||m){let _=i.get(h);const p=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new Lh(t)),_=g?n.fromEquirectangular(h,_):n.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,i.set(h,_),_.texture;if(_!==void 0)return _.texture;{const y=h.image;return g&&y&&y.height>0||m&&y&&l(y)?(n===null&&(n=new Lh(t)),_=g?n.fromEquirectangular(h):n.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,i.set(h,_),h.addEventListener("dispose",u),_.texture):null}}}return h}function o(h,f){return f===303?h.mapping=301:f===304&&(h.mapping=302),h}function l(h){let f=0;const g=6;for(let m=0;m<g;m++)h[m]!==void 0&&f++;return f===g}function c(h){const f=h.target;f.removeEventListener("dispose",c);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const g=i.get(f);g!==void 0&&(i.delete(f),g.dispose())}function d(){e=new WeakMap,i=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function xv(t){const e={};function i(n){if(e[n]!==void 0)return e[n];const r=t.getExtension(n);return e[n]=r,r}return{has:function(n){return i(n)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(n){const r=i(n);return r===null&&Ts("WebGLRenderer: "+n+" extension not supported."),r}}}function Sv(t,e,i,n){const r={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete r[h.id];const f=s.get(h);f&&(e.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,i.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,i.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)e.update(h[f],t.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,g=d.attributes.position;let m=0;if(g===void 0)return;if(f!==null){const y=f.array;m=f.version;for(let T=0,M=y.length;T<M;T+=3){const b=y[T+0],R=y[T+1],A=y[T+2];h.push(b,R,R,A,A,b)}}else{const y=g.array;m=g.version;for(let T=0,M=y.length/3-1;T<M;T+=3){const b=T+0,R=T+1,A=T+2;h.push(b,R,R,A,A,b)}}const _=new(g.count>=65535?kd:zd)(h,1);_.version=m;const p=s.get(d);p&&e.remove(p),s.set(d,_)}function u(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function yv(t,e,i){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,h){t.drawElements(n,h,s,d*a),i.update(h,n,1)}function c(d,h,f){f!==0&&(t.drawElementsInstanced(n,h,s,d*a,f),i.update(h,n,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,d,0,f);let g=0;for(let m=0;m<f;m++)g+=h[m];i.update(g,n,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Ev(t){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(i.calls++,a){case t.TRIANGLES:i.triangles+=o*(s/3);break;case t.LINES:i.lines+=o*(s/2);break;case t.LINE_STRIP:i.lines+=o*(s-1);break;case t.LINE_LOOP:i.lines+=o*s;break;case t.POINTS:i.points+=o*s;break;default:Be("WebGLInfo: Unknown draw mode:",a);break}}function r(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:r,update:n}}function Tv(t,e,i){const n=new WeakMap,r=new Gt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let S=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",S)};h!==void 0&&h.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let T=0;f===!0&&(T=1),g===!0&&(T=2),m===!0&&(T=3);let M=o.attributes.position.count*T,b=1;M>e.maxTextureSize&&(b=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const R=new Float32Array(M*b*4*d),A=new Nd(R,M,b,d);A.type=rl,A.needsUpdate=!0;const v=T*4;for(let D=0;D<d;D++){const C=_[D],L=p[D],Y=y[D],k=M*b*4*D;for(let V=0;V<C.count;V++){const W=V*v;f===!0&&(r.fromBufferAttribute(C,V),R[k+W+0]=r.x,R[k+W+1]=r.y,R[k+W+2]=r.z,R[k+W+3]=0),g===!0&&(r.fromBufferAttribute(L,V),R[k+W+4]=r.x,R[k+W+5]=r.y,R[k+W+6]=r.z,R[k+W+7]=0),m===!0&&(r.fromBufferAttribute(Y,V),R[k+W+8]=r.x,R[k+W+9]=r.y,R[k+W+10]=r.z,R[k+W+11]=Y.itemSize===4?r.w:1)}}h={count:d,texture:A,size:new at(M,b)},n.set(o,h),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,i);else{let f=0;for(let m=0;m<c.length;m++)f+=c[m];const g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,i),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function bv(t,e,i,n,r){let s=new WeakMap;function a(c){const u=r.render.frame,d=c.geometry,h=e.get(c,d);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(i.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&i.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return h}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),i.remove(u.instanceMatrix),u.instanceColor!==null&&i.remove(u.instanceColor)}return{update:a,dispose:o}}var Av={1:"LINEAR_TONE_MAPPING",2:"REINHARD_TONE_MAPPING",3:"CINEON_TONE_MAPPING",4:"ACES_FILMIC_TONE_MAPPING",6:"AGX_TONE_MAPPING",7:"NEUTRAL_TONE_MAPPING",5:"CUSTOM_TONE_MAPPING"};function wv(t,e,i,n,r,s){const a=new An(e,i,{type:t,depthBuffer:r,stencilBuffer:s,samples:n?4:0,depthTexture:r?new Ns(e,i):void 0}),o=new An(e,i,{type:zr,depthBuffer:!1,stencilBuffer:!1}),l=new $i;l.setAttribute("position",new _i([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new _i([0,2,0,0,2,0],2));const c=new Pg({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new pn(l,c),d=new fu(-1,1,1,-1,0,1);let h=null,f=null,g=!1,m,_=null,p=[],y=!1;this.setSize=function(T,M){a.setSize(T,M),o.setSize(T,M);for(let b=0;b<p.length;b++){const R=p[b];R.setSize&&R.setSize(T,M)}},this.setEffects=function(T){p=T,y=p.length>0&&p[0].isRenderPass===!0;const M=a.width,b=a.height;for(let R=0;R<p.length;R++){const A=p[R];A.setSize&&A.setSize(M,b)}},this.begin=function(T,M){if(g||T.toneMapping===0&&p.length===0)return!1;if(_=M,M!==null){const b=M.width,R=M.height;(a.width!==b||a.height!==R)&&this.setSize(b,R)}return y===!1&&T.setRenderTarget(a),m=T.toneMapping,T.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(T,M){T.toneMapping=m,g=!0;let b=a,R=o;for(let A=0;A<p.length;A++){const v=p[A];if(v.enabled!==!1&&(v.render(T,R,b,M),v.needsSwap!==!1)){const S=b;b=R,R=S}}if(h!==T.outputColorSpace||f!==T.toneMapping){h=T.outputColorSpace,f=T.toneMapping,c.defines={},ot.getTransfer(h)==="srgb"&&(c.defines.SRGB_TRANSFER="");const A=Av[f];A&&(c.defines[A]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=b.texture,T.setRenderTarget(_),T.render(u,d),_=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}var op=new mn,Ic=new Ns(1,1),lp=new Nd,cp=new tg,up=new Xd,Oh=[],Fh=[],Bh=new Float32Array(16),zh=new Float32Array(9),kh=new Float32Array(4);function Fs(t,e,i){const n=t[0];if(n<=0||n>0)return t;const r=e*i;let s=Oh[r];if(s===void 0&&(s=new Float32Array(r),Oh[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=i,t[a].toArray(s,o)}return s}function Qt(t,e){if(t.length!==e.length)return!1;for(let i=0,n=t.length;i<n;i++)if(t[i]!==e[i])return!1;return!0}function jt(t,e){for(let i=0,n=e.length;i<n;i++)t[i]=e[i]}function al(t,e){let i=Fh[e];i===void 0&&(i=new Int32Array(e),Fh[e]=i);for(let n=0;n!==e;++n)i[n]=t.allocateTextureUnit();return i}function Rv(t,e){const i=this.cache;i[0]!==e&&(t.uniform1f(this.addr,e),i[0]=e)}function Cv(t,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Qt(i,e))return;t.uniform2fv(this.addr,e),jt(i,e)}}function Pv(t,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Qt(i,e))return;t.uniform3fv(this.addr,e),jt(i,e)}}function Dv(t,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Qt(i,e))return;t.uniform4fv(this.addr,e),jt(i,e)}}function Lv(t,e){const i=this.cache,n=e.elements;if(n===void 0){if(Qt(i,e))return;t.uniformMatrix2fv(this.addr,!1,e),jt(i,e)}else{if(Qt(i,n))return;kh.set(n),t.uniformMatrix2fv(this.addr,!1,kh),jt(i,n)}}function Iv(t,e){const i=this.cache,n=e.elements;if(n===void 0){if(Qt(i,e))return;t.uniformMatrix3fv(this.addr,!1,e),jt(i,e)}else{if(Qt(i,n))return;zh.set(n),t.uniformMatrix3fv(this.addr,!1,zh),jt(i,n)}}function Uv(t,e){const i=this.cache,n=e.elements;if(n===void 0){if(Qt(i,e))return;t.uniformMatrix4fv(this.addr,!1,e),jt(i,e)}else{if(Qt(i,n))return;Bh.set(n),t.uniformMatrix4fv(this.addr,!1,Bh),jt(i,n)}}function Nv(t,e){const i=this.cache;i[0]!==e&&(t.uniform1i(this.addr,e),i[0]=e)}function Ov(t,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Qt(i,e))return;t.uniform2iv(this.addr,e),jt(i,e)}}function Fv(t,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Qt(i,e))return;t.uniform3iv(this.addr,e),jt(i,e)}}function Bv(t,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Qt(i,e))return;t.uniform4iv(this.addr,e),jt(i,e)}}function zv(t,e){const i=this.cache;i[0]!==e&&(t.uniform1ui(this.addr,e),i[0]=e)}function kv(t,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Qt(i,e))return;t.uniform2uiv(this.addr,e),jt(i,e)}}function Vv(t,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Qt(i,e))return;t.uniform3uiv(this.addr,e),jt(i,e)}}function Gv(t,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Qt(i,e))return;t.uniform4uiv(this.addr,e),jt(i,e)}}function Hv(t,e,i){const n=this.cache,r=i.allocateTextureUnit();n[0]!==r&&(t.uniform1i(this.addr,r),n[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Ic.compareFunction=i.isReversedDepthBuffer()?518:515,s=Ic):s=op,i.setTexture2D(e||s,r)}function Wv(t,e,i){const n=this.cache,r=i.allocateTextureUnit();n[0]!==r&&(t.uniform1i(this.addr,r),n[0]=r),i.setTexture3D(e||cp,r)}function Xv(t,e,i){const n=this.cache,r=i.allocateTextureUnit();n[0]!==r&&(t.uniform1i(this.addr,r),n[0]=r),i.setTextureCube(e||up,r)}function Yv(t,e,i){const n=this.cache,r=i.allocateTextureUnit();n[0]!==r&&(t.uniform1i(this.addr,r),n[0]=r),i.setTexture2DArray(e||lp,r)}function qv(t){switch(t){case 5126:return Rv;case 35664:return Cv;case 35665:return Pv;case 35666:return Dv;case 35674:return Lv;case 35675:return Iv;case 35676:return Uv;case 5124:case 35670:return Nv;case 35667:case 35671:return Ov;case 35668:case 35672:return Fv;case 35669:case 35673:return Bv;case 5125:return zv;case 36294:return kv;case 36295:return Vv;case 36296:return Gv;case 35678:case 36198:case 36298:case 36306:case 35682:return Hv;case 35679:case 36299:case 36307:return Wv;case 35680:case 36300:case 36308:case 36293:return Xv;case 36289:case 36303:case 36311:case 36292:return Yv}}function Kv(t,e){t.uniform1fv(this.addr,e)}function Zv(t,e){const i=Fs(e,this.size,2);t.uniform2fv(this.addr,i)}function $v(t,e){const i=Fs(e,this.size,3);t.uniform3fv(this.addr,i)}function Jv(t,e){const i=Fs(e,this.size,4);t.uniform4fv(this.addr,i)}function Qv(t,e){const i=Fs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,i)}function jv(t,e){const i=Fs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,i)}function e0(t,e){const i=Fs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,i)}function t0(t,e){t.uniform1iv(this.addr,e)}function i0(t,e){t.uniform2iv(this.addr,e)}function n0(t,e){t.uniform3iv(this.addr,e)}function r0(t,e){t.uniform4iv(this.addr,e)}function s0(t,e){t.uniform1uiv(this.addr,e)}function a0(t,e){t.uniform2uiv(this.addr,e)}function o0(t,e){t.uniform3uiv(this.addr,e)}function l0(t,e){t.uniform4uiv(this.addr,e)}function c0(t,e,i){const n=this.cache,r=e.length,s=al(i,r);Qt(n,s)||(t.uniform1iv(this.addr,s),jt(n,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=Ic:a=op;for(let o=0;o!==r;++o)i.setTexture2D(e[o]||a,s[o])}function u0(t,e,i){const n=this.cache,r=e.length,s=al(i,r);Qt(n,s)||(t.uniform1iv(this.addr,s),jt(n,s));for(let a=0;a!==r;++a)i.setTexture3D(e[a]||cp,s[a])}function h0(t,e,i){const n=this.cache,r=e.length,s=al(i,r);Qt(n,s)||(t.uniform1iv(this.addr,s),jt(n,s));for(let a=0;a!==r;++a)i.setTextureCube(e[a]||up,s[a])}function f0(t,e,i){const n=this.cache,r=e.length,s=al(i,r);Qt(n,s)||(t.uniform1iv(this.addr,s),jt(n,s));for(let a=0;a!==r;++a)i.setTexture2DArray(e[a]||lp,s[a])}function d0(t){switch(t){case 5126:return Kv;case 35664:return Zv;case 35665:return $v;case 35666:return Jv;case 35674:return Qv;case 35675:return jv;case 35676:return e0;case 5124:case 35670:return t0;case 35667:case 35671:return i0;case 35668:case 35672:return n0;case 35669:case 35673:return r0;case 5125:return s0;case 36294:return a0;case 36295:return o0;case 36296:return l0;case 35678:case 36198:case 36298:case 36306:case 35682:return c0;case 35679:case 36299:case 36307:return u0;case 35680:case 36300:case 36308:case 36293:return h0;case 36289:case 36303:case 36311:case 36292:return f0}}var p0=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=qv(e.type)}},m0=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=d0(e.type)}},_0=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let r=0,s=n.length;r!==s;++r){const a=n[r];a.setValue(t,e[a.id],i)}}},jl=/(\w+)(\])?(\[|\.)?/g;function Vh(t,e){t.seq.push(e),t.map[e.id]=e}function g0(t,e,i){const n=t.name,r=n.length;for(jl.lastIndex=0;;){const s=jl.exec(n),a=jl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Vh(i,c===void 0?new p0(o,t,e):new m0(o,t,e));break}else{let u=i.map[o];u===void 0&&(u=new _0(o),Vh(i,u)),i=u}}}var Uo=class{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const a=t.getActiveUniform(e,s);g0(a,t.getUniformLocation(e,a.name),this)}const n=[],r=[];for(const s of this.seq)s.type===t.SAMPLER_2D_SHADOW||s.type===t.SAMPLER_CUBE_SHADOW||s.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(s):r.push(s);n.length>0&&(this.seq=n.concat(r))}setValue(t,e,i,n){const r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,s=e.length;r!==s;++r){const a=e[r],o=i[a.id];o.needsUpdate!==!1&&a.setValue(t,o.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,r=t.length;n!==r;++n){const s=t[n];s.id in e&&i.push(s)}return i}};function Gh(t,e,i){const n=t.createShader(e);return t.shaderSource(n,i),t.compileShader(n),n}var v0=37297,M0=0;function x0(t,e){const i=t.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,i.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${i[a]}`)}return n.join(`
`)}var Hh=new Ye;function S0(t){ot._getMatrix(Hh,ot.workingColorSpace,t);const e=`mat3( ${Hh.elements.map(i=>i.toFixed(4))} )`;switch(ot.getTransfer(t)){case Zo:return[e,"LinearTransferOETF"];case $o:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Wh(t,e,i){const n=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return i.toUpperCase()+`

`+r+`

`+x0(t.getShaderSource(e),a)}else return r}function y0(t,e){const i=S0(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}var E0={1:"Linear",2:"Reinhard",3:"Cineon",4:"ACESFilmic",6:"AgX",7:"Neutral",5:"Custom"};function T0(t,e){const i=E0[e];return i===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var yo=new G;function b0(){return ot.getLuminanceCoefficients(yo),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${yo.x.toFixed(4)}, ${yo.y.toFixed(4)}, ${yo.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function A0(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sa).join(`
`)}function w0(t){const e=[];for(const i in t){const n=t[i];n!==!1&&e.push("#define "+i+" "+n)}return e.join(`
`)}function R0(t,e){const i={},n=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),i[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return i}function sa(t){return t!==""}function Xh(t,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var C0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uc(t){return t.replace(C0,D0)}var P0=new Map;function D0(t,e){let i=qe[e];if(i===void 0){const n=P0.get(e);if(n!==void 0)i=qe[n],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Uc(i)}var L0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qh(t){return t.replace(L0,I0)}function I0(t,e,i,n){let r="";for(let s=parseInt(e);s<parseInt(i);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Kh(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var U0={1:"SHADOWMAP_TYPE_PCF",3:"SHADOWMAP_TYPE_VSM"};function N0(t){return U0[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var O0={301:"ENVMAP_TYPE_CUBE",302:"ENVMAP_TYPE_CUBE",306:"ENVMAP_TYPE_CUBE_UV"};function F0(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":O0[t.envMapMode]||"ENVMAP_TYPE_CUBE"}var B0={302:"ENVMAP_MODE_REFRACTION"};function z0(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":B0[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var k0={0:"ENVMAP_BLENDING_MULTIPLY",1:"ENVMAP_BLENDING_MIX",2:"ENVMAP_BLENDING_ADD"};function V0(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":k0[t.combine]||"ENVMAP_BLENDING_NONE"}function G0(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:n,maxMip:i}}function H0(t,e,i,n){const r=t.getContext(),s=i.defines;let a=i.vertexShader,o=i.fragmentShader;const l=N0(i),c=F0(i),u=z0(i),d=V0(i),h=G0(i),f=A0(i),g=w0(s),m=r.createProgram();let _,p,y=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(sa).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(sa).join(`
`),p.length>0&&(p+=`
`)):(_=[Kh(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+u:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sa).join(`
`),p=[Kh(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.envMap?"#define "+u:"",i.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==0?"#define TONE_MAPPING":"",i.toneMapping!==0?qe.tonemapping_pars_fragment:"",i.toneMapping!==0?T0("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,y0("linearToOutputTexel",i.outputColorSpace),b0(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(sa).join(`
`)),a=Uc(a),a=Xh(a,i),a=Yh(a,i),o=Uc(o),o=Xh(o,i),o=Yh(o,i),a=qh(a),o=qh(o),i.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,_=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",i.glslVersion==="300 es"?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion==="300 es"?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=y+_+a,M=y+p+o,b=Gh(r,r.VERTEX_SHADER,T),R=Gh(r,r.FRAGMENT_SHADER,M);r.attachShader(m,b),r.attachShader(m,R),i.index0AttributeName!==void 0?r.bindAttribLocation(m,0,i.index0AttributeName):i.hasPositionAttribute===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function A(C){if(t.debug.checkShaderErrors){const L=r.getProgramInfoLog(m)||"",Y=r.getShaderInfoLog(b)||"",k=r.getShaderInfoLog(R)||"",V=L.trim(),W=Y.trim(),U=k.trim();let J=!0,Q=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(J=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,b,R);else{const P=Wh(r,b,"vertex"),ce=Wh(r,R,"fragment");Be("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+V+`
`+P+`
`+ce)}else V!==""?Ne("WebGLProgram: Program Info Log:",V):(W===""||U==="")&&(Q=!1);Q&&(C.diagnostics={runnable:J,programLog:V,vertexShader:{log:W,prefix:_},fragmentShader:{log:U,prefix:p}})}r.deleteShader(b),r.deleteShader(R),v=new Uo(r,m),S=R0(r,m)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=r.getProgramParameter(m,v0)),D},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=M0++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=R,this}var W0=0,X0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const n=this._getShaderCacheForMaterial(t);return n.has(e)===!1&&(n.add(e),e.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Y0(t),e.set(t,i)),i}},Y0=class{constructor(t){this.id=W0++,this.code=t,this.usedTimes=0}};function q0(t){return t===1030||t===37490||t===36285}function K0(t,e,i,n,r,s){const a=new Fd,o=new X0,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer;let h=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function m(v,S,D,C,L,Y){const k=C.fog,V=L.geometry,W=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?C.environment:null,U=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,J=e.get(v.envMap||W,U),Q=J&&J.mapping===306?J.image.height:null,P=f[v.type];v.precision!==null&&(h=n.getMaxPrecision(v.precision),h!==v.precision&&Ne("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const ce=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Se=ce!==void 0?ce.length:0;let rt=0;V.morphAttributes.position!==void 0&&(rt=1),V.morphAttributes.normal!==void 0&&(rt=2),V.morphAttributes.color!==void 0&&(rt=3);let Oe,Z,se,de;if(P){const ae=Sn[P];Oe=ae.vertexShader,Z=ae.fragmentShader}else{Oe=v.vertexShader,Z=v.fragmentShader;const ae=o.getVertexShaderStage(v),ke=o.getFragmentShaderStage(v);o.update(v,ae,ke),se=ae.id,de=ke.id}const pe=t.getRenderTarget(),be=t.state.buffers.depth.getReversed(),De=L.isInstancedMesh===!0,Re=L.isBatchedMesh===!0,Ve=!!v.map,ye=!!v.matcap,ze=!!J,ct=!!v.aoMap,_t=!!v.lightMap,K=!!v.bumpMap&&v.wireframe===!1,Ke=!!v.normalMap,vt=!!v.displacementMap,Mt=!!v.emissiveMap,Xe=!!v.metalnessMap,O=!!v.roughnessMap,Ft=v.anisotropy>0,je=v.clearcoat>0,He=v.dispersion>0,w=v.iridescence>0,x=v.sheen>0,I=v.transmission>0,X=Ft&&!!v.anisotropyMap,ee=je&&!!v.clearcoatMap,ue=je&&!!v.clearcoatNormalMap,oe=je&&!!v.clearcoatRoughnessMap,F=w&&!!v.iridescenceMap,le=w&&!!v.iridescenceThicknessMap,ve=x&&!!v.sheenColorMap,Ee=x&&!!v.sheenRoughnessMap,ie=!!v.specularMap,Te=!!v.specularColorMap,he=!!v.specularIntensityMap,Ie=I&&!!v.transmissionMap,We=I&&!!v.thicknessMap,N=!!v.gradientMap,$=!!v.alphaMap,te=v.alphaTest>0,ge=!!v.alphaHash,Me=!!v.extensions;let ne=0;v.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(ne=t.toneMapping);const j={shaderID:P,shaderType:v.type,shaderName:v.name,vertexShader:Oe,fragmentShader:Z,defines:v.defines,customVertexShaderID:se,customFragmentShaderID:de,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:Re,batchingColor:Re&&L._colorsTexture!==null,instancing:De,instancingColor:De&&L.instanceColor!==null,instancingMorph:De&&L.morphTexture!==null,outputColorSpace:pe===null?t.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:ot.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ve,matcap:ye,envMap:ze,envMapMode:ze&&J.mapping,envMapCubeUVHeight:Q,aoMap:ct,lightMap:_t,bumpMap:K,normalMap:Ke,displacementMap:vt,emissiveMap:Mt,normalMapObjectSpace:Ke&&v.normalMapType===1,normalMapTangentSpace:Ke&&v.normalMapType===0,packedNormalMap:Ke&&v.normalMapType===0&&q0(v.normalMap.format),metalnessMap:Xe,roughnessMap:O,anisotropy:Ft,anisotropyMap:X,clearcoat:je,clearcoatMap:ee,clearcoatNormalMap:ue,clearcoatRoughnessMap:oe,dispersion:He,iridescence:w,iridescenceMap:F,iridescenceThicknessMap:le,sheen:x,sheenColorMap:ve,sheenRoughnessMap:Ee,specularMap:ie,specularColorMap:Te,specularIntensityMap:he,transmission:I,transmissionMap:Ie,thicknessMap:We,gradientMap:N,opaque:v.transparent===!1&&v.blending===1&&v.alphaToCoverage===!1,alphaMap:$,alphaTest:te,alphaHash:ge,combine:v.combine,mapUv:Ve&&g(v.map.channel),aoMapUv:ct&&g(v.aoMap.channel),lightMapUv:_t&&g(v.lightMap.channel),bumpMapUv:K&&g(v.bumpMap.channel),normalMapUv:Ke&&g(v.normalMap.channel),displacementMapUv:vt&&g(v.displacementMap.channel),emissiveMapUv:Mt&&g(v.emissiveMap.channel),metalnessMapUv:Xe&&g(v.metalnessMap.channel),roughnessMapUv:O&&g(v.roughnessMap.channel),anisotropyMapUv:X&&g(v.anisotropyMap.channel),clearcoatMapUv:ee&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:ue&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:F&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:le&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&g(v.sheenRoughnessMap.channel),specularMapUv:ie&&g(v.specularMap.channel),specularColorMapUv:Te&&g(v.specularColorMap.channel),specularIntensityMapUv:he&&g(v.specularIntensityMap.channel),transmissionMapUv:Ie&&g(v.transmissionMap.channel),thicknessMapUv:We&&g(v.thicknessMap.channel),alphaMapUv:$&&g(v.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Ke||Ft),vertexNormals:!!V.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!V.attributes.uv&&(Ve||$),fog:!!k,useFog:v.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||V.attributes.normal===void 0&&Ke===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:be,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:rt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:Y.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:ne,decodeVideoTexture:Ve&&v.map.isVideoTexture===!0&&ot.getTransfer(v.map.colorSpace)==="srgb",decodeVideoTextureEmissive:Mt&&v.emissiveMap.isVideoTexture===!0&&ot.getTransfer(v.emissiveMap.colorSpace)==="srgb",premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===2,flipSided:v.side===1,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Me&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&v.extensions.multiDraw===!0||Re)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return j.vertexUv1s=l.has(1),j.vertexUv2s=l.has(2),j.vertexUv3s=l.has(3),l.clear(),j}function _(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)S.push(D),S.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(p(S,v),y(S,v),S.push(t.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function p(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function y(v,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function T(v){const S=f[v.type];let D;if(S){const C=Sn[S];D=wg.clone(C.uniforms)}else D=v.uniforms;return D}function M(v,S){let D=u.get(S);return D!==void 0?++D.usedTimes:(D=new H0(t,S,v,r),c.push(D),u.set(S,D)),D}function b(v){if(--v.usedTimes===0){const S=c.indexOf(v);c[S]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function R(v){o.remove(v)}function A(){o.dispose()}return{getParameters:m,getProgramCacheKey:_,getUniforms:T,acquireProgram:M,releaseProgram:b,releaseShaderCache:R,programs:c,dispose:A}}function Z0(){let t=new WeakMap;function e(a){return t.has(a)}function i(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function n(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:i,remove:n,update:r,dispose:s}}function $0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Zh(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function $h(){const t=[];let e=0;const i=[],n=[],r=[];function s(){e=0,i.length=0,n.length=0,r.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,g,m,_,p){let y=t[e];return y===void 0?(y={id:h.id,object:h,geometry:f,material:g,materialVariant:a(h),groupOrder:m,renderOrder:h.renderOrder,z:_,group:p},t[e]=y):(y.id=h.id,y.object=h,y.geometry=f,y.material=g,y.materialVariant=a(h),y.groupOrder=m,y.renderOrder=h.renderOrder,y.z=_,y.group=p),e++,y}function l(h,f,g,m,_,p){const y=o(h,f,g,m,_,p);g.transmission>0?n.push(y):g.transparent===!0?r.push(y):i.push(y)}function c(h,f,g,m,_,p){const y=o(h,f,g,m,_,p);g.transmission>0?n.unshift(y):g.transparent===!0?r.unshift(y):i.unshift(y)}function u(h,f,g){i.length>1&&i.sort(h||$0),n.length>1&&n.sort(f||Zh),r.length>1&&r.sort(f||Zh),g&&(i.reverse(),n.reverse(),r.reverse())}function d(){for(let h=e,f=t.length;h<f;h++){const g=t[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:i,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:d,sort:u}}function J0(){let t=new WeakMap;function e(n,r){const s=t.get(n);let a;return s===void 0?(a=new $h,t.set(n,[a])):r>=s.length?(a=new $h,s.push(a)):a=s[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}function Q0(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new G,color:new Qe};break;case"SpotLight":i={position:new G,direction:new G,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new G,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new G,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":i={color:new Qe,position:new G,halfWidth:new G,halfHeight:new G};break}return t[e.id]=i,i}}}function j0(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=i,i}}}var eM=0;function tM(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function iM(t){const e=new Q0,i=j0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);const r=new G,s=new Ot,a=new Ot;function o(c){let u=0,d=0,h=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,m=0,_=0,p=0,y=0,T=0,M=0,b=0,R=0,A=0;c.sort(tM);for(let S=0,D=c.length;S<D;S++){const C=c[S],L=C.color,Y=C.intensity,k=C.distance;let V=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===1030?V=C.shadow.map.texture:V=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=L.r*Y,d+=L.g*Y,h+=L.b*Y;else if(C.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(C.sh.coefficients[W],Y);A++}else if(C.isDirectionalLight){const W=e.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const U=C.shadow,J=i.get(C);J.shadowIntensity=U.intensity,J.shadowBias=U.bias,J.shadowNormalBias=U.normalBias,J.shadowRadius=U.radius,J.shadowMapSize=U.mapSize,n.directionalShadow[f]=J,n.directionalShadowMap[f]=V,n.directionalShadowMatrix[f]=C.shadow.matrix,y++}n.directional[f]=W,f++}else if(C.isSpotLight){const W=e.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy(L).multiplyScalar(Y),W.distance=k,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,n.spot[m]=W;const U=C.shadow;if(C.map&&(n.spotLightMap[b]=C.map,b++,U.updateMatrices(C),C.castShadow&&R++),n.spotLightMatrix[m]=U.matrix,C.castShadow){const J=i.get(C);J.shadowIntensity=U.intensity,J.shadowBias=U.bias,J.shadowNormalBias=U.normalBias,J.shadowRadius=U.radius,J.shadowMapSize=U.mapSize,n.spotShadow[m]=J,n.spotShadowMap[m]=V,M++}m++}else if(C.isRectAreaLight){const W=e.get(C);W.color.copy(L).multiplyScalar(Y),W.halfWidth.set(C.width*.5,0,0),W.halfHeight.set(0,C.height*.5,0),n.rectArea[_]=W,_++}else if(C.isPointLight){const W=e.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),W.distance=C.distance,W.decay=C.decay,C.castShadow){const U=C.shadow,J=i.get(C);J.shadowIntensity=U.intensity,J.shadowBias=U.bias,J.shadowNormalBias=U.normalBias,J.shadowRadius=U.radius,J.shadowMapSize=U.mapSize,J.shadowCameraNear=U.camera.near,J.shadowCameraFar=U.camera.far,n.pointShadow[g]=J,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=C.shadow.matrix,T++}n.point[g]=W,g++}else if(C.isHemisphereLight){const W=e.get(C);W.skyColor.copy(C.color).multiplyScalar(Y),W.groundColor.copy(C.groundColor).multiplyScalar(Y),n.hemi[p]=W,p++}}_>0&&(t.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const v=n.hash;(v.directionalLength!==f||v.pointLength!==g||v.spotLength!==m||v.rectAreaLength!==_||v.hemiLength!==p||v.numDirectionalShadows!==y||v.numPointShadows!==T||v.numSpotShadows!==M||v.numSpotMaps!==b||v.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=m,n.rectArea.length=_,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=M+b-R,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,v.directionalLength=f,v.pointLength=g,v.spotLength=m,v.rectAreaLength=_,v.hemiLength=p,v.numDirectionalShadows=y,v.numPointShadows=T,v.numSpotShadows=M,v.numSpotMaps=b,v.numLightProbes=A,n.version=eM++)}function l(c,u){let d=0,h=0,f=0,g=0,m=0;const _=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const T=c[p];if(T.isDirectionalLight){const M=n.directional[d];M.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),d++}else if(T.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),f++}else if(T.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(_),a.identity(),s.copy(T.matrixWorld),s.premultiply(_),a.extractRotation(s),M.halfWidth.set(T.width*.5,0,0),M.halfHeight.set(0,T.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){const M=n.point[h];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(_),h++}else if(T.isHemisphereLight){const M=n.hemi[m];M.direction.setFromMatrixPosition(T.matrixWorld),M.direction.transformDirection(_),m++}}}return{setup:o,setupView:l,state:n}}function Jh(t){const e=new iM(t),i=[],n=[],r=[];function s(h){d.camera=h,i.length=0,n.length=0,r.length=0}function a(h){i.push(h)}function o(h){n.push(h)}function l(h){r.push(h)}function c(){e.setup(i)}function u(h){e.setupView(i,h)}const d={lightsArray:i,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function nM(t){let e=new WeakMap;function i(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Jh(t),e.set(r,[o])):s>=a.length?(o=new Jh(t),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:i,dispose:n}}var rM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,aM=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],oM=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],Qh=new Ot,$s=new G,ec=new G;function lM(t,e,i){let n=new uu;const r=new at,s=new at,a=new Gt,o=new Lg,l=new Ig,c={},u=i.maxTextureSize,d={0:1,1:0,2:2},h=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:rM,fragmentShader:sM}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new $i;g.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new pn(g,h),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let p=this.type;this.render=function(R,A,v){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||R.length===0)return;this.type===2&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=1);const S=t.getRenderTarget(),D=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),L=t.state;L.setBlending(0),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const Y=p!==this.type;Y&&A.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(V=>V.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,V=R.length;k<V;k++){const W=R[k],U=W.shadow;if(U===void 0){Ne("WebGLShadowMap:",W,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const J=U.getFrameExtents();r.multiply(J),s.copy(U.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/J.x),r.x=s.x*J.x,U.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/J.y),r.y=s.y*J.y,U.mapSize.y=s.y));const Q=t.state.buffers.depth.getReversed();if(U.camera._reversedDepth=Q,U.map===null||Y===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===3){if(W.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new An(r.x,r.y,{format:qo,type:zr,minFilter:Yi,magFilter:Yi,generateMipmaps:!1}),U.map.texture.name=W.name+".shadowMap",U.map.depthTexture=new Ns(r.x,r.y,rl),U.map.depthTexture.name=W.name+".shadowMapDepth",U.map.depthTexture.format=Ca,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Ti,U.map.depthTexture.magFilter=Ti}else W.isPointLight?(U.map=new ap(r.x),U.map.depthTexture=new yg(r.x,Br)):(U.map=new An(r.x,r.y),U.map.depthTexture=new Ns(r.x,r.y,Br)),U.map.depthTexture.name=W.name+".shadowMap",U.map.depthTexture.format=Ca,this.type===1?(U.map.depthTexture.compareFunction=Q?518:515,U.map.depthTexture.minFilter=Yi,U.map.depthTexture.magFilter=Yi):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Ti,U.map.depthTexture.magFilter=Ti);U.camera.updateProjectionMatrix()}const P=U.map.isWebGLCubeRenderTarget?6:1;for(let ce=0;ce<P;ce++){if(U.map.isWebGLCubeRenderTarget)t.setRenderTarget(U.map,ce),t.clear();else{ce===0&&(t.setRenderTarget(U.map),t.clear());const Se=U.getViewport(ce);a.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),L.viewport(a)}if(W.isPointLight){const Se=U.camera,rt=U.matrix,Oe=W.distance||Se.far;Oe!==Se.far&&(Se.far=Oe,Se.updateProjectionMatrix()),$s.setFromMatrixPosition(W.matrixWorld),Se.position.copy($s),ec.copy(Se.position),ec.add(aM[ce]),Se.up.copy(oM[ce]),Se.lookAt(ec),Se.updateMatrixWorld(),rt.makeTranslation(-$s.x,-$s.y,-$s.z),Qh.multiplyMatrices(Se.projectionMatrix,Se.matrixWorldInverse),U._frustum.setFromProjectionMatrix(Qh,Se.coordinateSystem,Se.reversedDepth)}else U.updateMatrices(W);n=U.getFrustum(),M(A,v,U.camera,W,this.type)}U.isPointLightShadow!==!0&&this.type===3&&y(U,v),U.needsUpdate=!1}p=this.type,_.needsUpdate=!1,t.setRenderTarget(S,D,C)};function y(R,A){const v=e.update(m);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new An(r.x,r.y,{format:qo,type:zr})),h.uniforms.shadow_pass.value=R.map.depthTexture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(A,null,v,h,m,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(A,null,v,f,m,null)}function T(R,A,v,S){let D=null;const C=v.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)D=C;else if(D=v.isPointLight===!0?l:o,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const L=D.uuid,Y=A.uuid;let k=c[L];k===void 0&&(k={},c[L]=k);let V=k[Y];V===void 0&&(V=D.clone(),k[Y]=V,A.addEventListener("dispose",b)),D=V}if(D.visible=A.visible,D.wireframe=A.wireframe,S===3?D.side=A.shadowSide!==null?A.shadowSide:A.side:D.side=A.shadowSide!==null?A.shadowSide:d[A.side],D.alphaMap=A.alphaMap,D.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,D.map=A.map,D.clipShadows=A.clipShadows,D.clippingPlanes=A.clippingPlanes,D.clipIntersection=A.clipIntersection,D.displacementMap=A.displacementMap,D.displacementScale=A.displacementScale,D.displacementBias=A.displacementBias,D.wireframeLinewidth=A.wireframeLinewidth,D.linewidth=A.linewidth,v.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const L=t.properties.get(D);L.light=v}return D}function M(R,A,v,S,D){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&D===3)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,R.matrixWorld);const L=e.update(R),Y=R.material;if(Array.isArray(Y)){const k=L.groups;for(let V=0,W=k.length;V<W;V++){const U=k[V],J=Y[U.materialIndex];if(J&&J.visible){const Q=T(R,J,S,D);R.onBeforeShadow(t,R,A,v,L,Q,U),t.renderBufferDirect(v,null,L,Q,R,U),R.onAfterShadow(t,R,A,v,L,Q,U)}}}else if(Y.visible){const k=T(R,Y,S,D);R.onBeforeShadow(t,R,A,v,L,k,null),t.renderBufferDirect(v,null,L,k,R,null),R.onAfterShadow(t,R,A,v,L,k,null)}}const C=R.children;for(let L=0,Y=C.length;L<Y;L++)M(C[L],A,v,S,D)}function b(R){R.target.removeEventListener("dispose",b);for(const A in c){const v=c[A],S=R.target.uuid;S in v&&(v[S].dispose(),delete v[S])}}}function cM(t,e){function i(){let N=!1;const $=new Gt;let te=null;const ge=new Gt(0,0,0,0);return{setMask:function(Me){te!==Me&&!N&&(t.colorMask(Me,Me,Me,Me),te=Me)},setLocked:function(Me){N=Me},setClear:function(Me,ne,j,ae,ke){ke===!0&&(Me*=ae,ne*=ae,j*=ae),$.set(Me,ne,j,ae),ge.equals($)===!1&&(t.clearColor(Me,ne,j,ae),ge.copy($))},reset:function(){N=!1,te=null,ge.set(-1,0,0,0)}}}function n(){let N=!1,$=!1,te=null,ge=null,Me=null;return{setReversed:function(ne){if($!==ne){const j=e.get("EXT_clip_control");ne?j.clipControlEXT(j.LOWER_LEFT_EXT,j.ZERO_TO_ONE_EXT):j.clipControlEXT(j.LOWER_LEFT_EXT,j.NEGATIVE_ONE_TO_ONE_EXT),$=ne;const ae=Me;Me=null,this.setClear(ae)}},getReversed:function(){return $},setTest:function(ne){ne?pe(t.DEPTH_TEST):be(t.DEPTH_TEST)},setMask:function(ne){te!==ne&&!N&&(t.depthMask(ne),te=ne)},setFunc:function(ne){if($&&(ne=K_[ne]),ge!==ne){switch(ne){case 0:t.depthFunc(t.NEVER);break;case 1:t.depthFunc(t.ALWAYS);break;case 2:t.depthFunc(t.LESS);break;case 3:t.depthFunc(t.LEQUAL);break;case 4:t.depthFunc(t.EQUAL);break;case 5:t.depthFunc(t.GEQUAL);break;case 6:t.depthFunc(t.GREATER);break;case 7:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ge=ne}},setLocked:function(ne){N=ne},setClear:function(ne){Me!==ne&&(Me=ne,$&&(ne=1-ne),t.clearDepth(ne))},reset:function(){N=!1,te=null,ge=null,Me=null,$=!1}}}function r(){let N=!1,$=null,te=null,ge=null,Me=null,ne=null,j=null,ae=null,ke=null;return{setTest:function(re){N||(re?pe(t.STENCIL_TEST):be(t.STENCIL_TEST))},setMask:function(re){$!==re&&!N&&(t.stencilMask(re),$=re)},setFunc:function(re,Le,Ce){(te!==re||ge!==Le||Me!==Ce)&&(t.stencilFunc(re,Le,Ce),te=re,ge=Le,Me=Ce)},setOp:function(re,Le,Ce){(ne!==re||j!==Le||ae!==Ce)&&(t.stencilOp(re,Le,Ce),ne=re,j=Le,ae=Ce)},setLocked:function(re){N=re},setClear:function(re){ke!==re&&(t.clearStencil(re),ke=re)},reset:function(){N=!1,$=null,te=null,ge=null,Me=null,ne=null,j=null,ae=null,ke=null}}}const s=new i,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let u={},d={},h={},f=new WeakMap,g=[],m=null,_=!1,p=null,y=null,T=null,M=null,b=null,R=null,A=null,v=new Qe(0,0,0),S=0,D=!1,C=null,L=null,Y=null,k=null,V=null;const W=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,J=0;const Q=t.getParameter(t.VERSION);Q.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(Q)[1]),U=J>=1):Q.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),U=J>=2);let P=null,ce={};const Se=t.getParameter(t.SCISSOR_BOX),rt=t.getParameter(t.VIEWPORT),Oe=new Gt().fromArray(Se),Z=new Gt().fromArray(rt);function se(N,$,te,ge){const Me=new Uint8Array(4),ne=t.createTexture();t.bindTexture(N,ne),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let j=0;j<te;j++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D($,0,t.RGBA,1,1,ge,0,t.RGBA,t.UNSIGNED_BYTE,Me):t.texImage2D($+j,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Me);return ne}const de={};de[t.TEXTURE_2D]=se(t.TEXTURE_2D,t.TEXTURE_2D,1),de[t.TEXTURE_CUBE_MAP]=se(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[t.TEXTURE_2D_ARRAY]=se(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),de[t.TEXTURE_3D]=se(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),pe(t.DEPTH_TEST),a.setFunc(3),K(!1),Ke(1),pe(t.CULL_FACE),ct(0);function pe(N){u[N]!==!0&&(t.enable(N),u[N]=!0)}function be(N){u[N]!==!1&&(t.disable(N),u[N]=!1)}function De(N,$){return h[N]!==$?(t.bindFramebuffer(N,$),h[N]=$,N===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=$),N===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=$),!0):!1}function Re(N,$){let te=g,ge=!1;if(N){te=f.get($),te===void 0&&(te=[],f.set($,te));const Me=N.textures;if(te.length!==Me.length||te[0]!==t.COLOR_ATTACHMENT0){for(let ne=0,j=Me.length;ne<j;ne++)te[ne]=t.COLOR_ATTACHMENT0+ne;te.length=Me.length,ge=!0}}else te[0]!==t.BACK&&(te[0]=t.BACK,ge=!0);ge&&t.drawBuffers(te)}function Ve(N){return m!==N?(t.useProgram(N),m=N,!0):!1}const ye={100:t.FUNC_ADD,101:t.FUNC_SUBTRACT,102:t.FUNC_REVERSE_SUBTRACT};ye[103]=t.MIN,ye[104]=t.MAX;const ze={200:t.ZERO,201:t.ONE,202:t.SRC_COLOR,204:t.SRC_ALPHA,210:t.SRC_ALPHA_SATURATE,208:t.DST_COLOR,206:t.DST_ALPHA,203:t.ONE_MINUS_SRC_COLOR,205:t.ONE_MINUS_SRC_ALPHA,209:t.ONE_MINUS_DST_COLOR,207:t.ONE_MINUS_DST_ALPHA,211:t.CONSTANT_COLOR,212:t.ONE_MINUS_CONSTANT_COLOR,213:t.CONSTANT_ALPHA,214:t.ONE_MINUS_CONSTANT_ALPHA};function ct(N,$,te,ge,Me,ne,j,ae,ke,re){if(N===0){_===!0&&(be(t.BLEND),_=!1);return}if(_===!1&&(pe(t.BLEND),_=!0),N!==5){if(N!==p||re!==D){if((y!==100||b!==100)&&(t.blendEquation(t.FUNC_ADD),y=100,b=100),re)switch(N){case 1:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case 2:t.blendFunc(t.ONE,t.ONE);break;case 3:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case 4:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Be("WebGLState: Invalid blending: ",N);break}else switch(N){case 1:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case 2:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case 3:Be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:Be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Be("WebGLState: Invalid blending: ",N);break}T=null,M=null,R=null,A=null,v.set(0,0,0),S=0,p=N,D=re}return}Me=Me||$,ne=ne||te,j=j||ge,($!==y||Me!==b)&&(t.blendEquationSeparate(ye[$],ye[Me]),y=$,b=Me),(te!==T||ge!==M||ne!==R||j!==A)&&(t.blendFuncSeparate(ze[te],ze[ge],ze[ne],ze[j]),T=te,M=ge,R=ne,A=j),(ae.equals(v)===!1||ke!==S)&&(t.blendColor(ae.r,ae.g,ae.b,ke),v.copy(ae),S=ke),p=N,D=!1}function _t(N,$){N.side===2?be(t.CULL_FACE):pe(t.CULL_FACE);let te=N.side===1;$&&(te=!te),K(te),N.blending===1&&N.transparent===!1?ct(0):ct(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);const ge=N.stencilWrite;o.setTest(ge),ge&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Mt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?pe(t.SAMPLE_ALPHA_TO_COVERAGE):be(t.SAMPLE_ALPHA_TO_COVERAGE)}function K(N){C!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),C=N)}function Ke(N){N!==0?(pe(t.CULL_FACE),N!==L&&(N===1?t.cullFace(t.BACK):N===2?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):be(t.CULL_FACE),L=N}function vt(N){N!==Y&&(U&&t.lineWidth(N),Y=N)}function Mt(N,$,te){N?(pe(t.POLYGON_OFFSET_FILL),(k!==$||V!==te)&&(k=$,V=te,a.getReversed()&&($=-$),t.polygonOffset($,te))):be(t.POLYGON_OFFSET_FILL)}function Xe(N){N?pe(t.SCISSOR_TEST):be(t.SCISSOR_TEST)}function O(N){N===void 0&&(N=t.TEXTURE0+W-1),P!==N&&(t.activeTexture(N),P=N)}function Ft(N,$,te){te===void 0&&(P===null?te=t.TEXTURE0+W-1:te=P);let ge=ce[te];ge===void 0&&(ge={type:void 0,texture:void 0},ce[te]=ge),(ge.type!==N||ge.texture!==$)&&(P!==te&&(t.activeTexture(te),P=te),t.bindTexture(N,$||de[N]),ge.type=N,ge.texture=$)}function je(){const N=ce[P];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function He(){try{t.compressedTexImage2D(...arguments)}catch(N){Be("WebGLState:",N)}}function w(){try{t.compressedTexImage3D(...arguments)}catch(N){Be("WebGLState:",N)}}function x(){try{t.texSubImage2D(...arguments)}catch(N){Be("WebGLState:",N)}}function I(){try{t.texSubImage3D(...arguments)}catch(N){Be("WebGLState:",N)}}function X(){try{t.compressedTexSubImage2D(...arguments)}catch(N){Be("WebGLState:",N)}}function ee(){try{t.compressedTexSubImage3D(...arguments)}catch(N){Be("WebGLState:",N)}}function ue(){try{t.texStorage2D(...arguments)}catch(N){Be("WebGLState:",N)}}function oe(){try{t.texStorage3D(...arguments)}catch(N){Be("WebGLState:",N)}}function F(){try{t.texImage2D(...arguments)}catch(N){Be("WebGLState:",N)}}function le(){try{t.texImage3D(...arguments)}catch(N){Be("WebGLState:",N)}}function ve(N){return d[N]!==void 0?d[N]:t.getParameter(N)}function Ee(N,$){d[N]!==$&&(t.pixelStorei(N,$),d[N]=$)}function ie(N){Oe.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),Oe.copy(N))}function Te(N){Z.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),Z.copy(N))}function he(N,$){let te=c.get($);te===void 0&&(te=new WeakMap,c.set($,te));let ge=te.get(N);ge===void 0&&(ge=t.getUniformBlockIndex($,N.name),te.set(N,ge))}function Ie(N,$){const te=c.get($).get(N);l.get($)!==te&&(t.uniformBlockBinding($,te,N.__bindingPointIndex),l.set($,te))}function We(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},d={},P=null,ce={},h={},f=new WeakMap,g=[],m=null,_=!1,p=null,y=null,T=null,M=null,b=null,R=null,A=null,v=new Qe(0,0,0),S=0,D=!1,C=null,L=null,Y=null,k=null,V=null,Oe.set(0,0,t.canvas.width,t.canvas.height),Z.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:pe,disable:be,bindFramebuffer:De,drawBuffers:Re,useProgram:Ve,setBlending:ct,setMaterial:_t,setFlipSided:K,setCullFace:Ke,setLineWidth:vt,setPolygonOffset:Mt,setScissorTest:Xe,activeTexture:O,bindTexture:Ft,unbindTexture:je,compressedTexImage2D:He,compressedTexImage3D:w,texImage2D:F,texImage3D:le,pixelStorei:Ee,getParameter:ve,updateUBOMapping:he,uniformBlockBinding:Ie,texStorage2D:ue,texStorage3D:oe,texSubImage2D:x,texSubImage3D:I,compressedTexSubImage2D:X,compressedTexSubImage3D:ee,scissor:ie,viewport:Te,reset:We}}function uM(t,e,i,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,u=new WeakMap,d=new Set;let h;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(w,x){return g?new OffscreenCanvas(w,x):Jo("canvas")}function _(w,x,I){let X=1;const ee=He(w);if((ee.width>I||ee.height>I)&&(X=I/Math.max(ee.width,ee.height)),X<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const ue=Math.floor(X*ee.width),oe=Math.floor(X*ee.height);h===void 0&&(h=m(ue,oe));const F=x?m(ue,oe):h;return F.width=ue,F.height=oe,F.getContext("2d").drawImage(w,0,0,ue,oe),Ne("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+ue+"x"+oe+")."),F}else return"data"in w&&Ne("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),w;return w}function p(w){return w.generateMipmaps}function y(w){t.generateMipmap(w)}function T(w){return w.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?t.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function M(w,x,I,X,ee,ue=!1){if(w!==null){if(t[w]!==void 0)return t[w];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let oe;X&&(oe=e.get("EXT_texture_norm16"),oe||Ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let F=x;if(x===t.RED&&(I===t.FLOAT&&(F=t.R32F),I===t.HALF_FLOAT&&(F=t.R16F),I===t.UNSIGNED_BYTE&&(F=t.R8),I===t.UNSIGNED_SHORT&&oe&&(F=oe.R16_EXT),I===t.SHORT&&oe&&(F=oe.R16_SNORM_EXT)),x===t.RED_INTEGER&&(I===t.UNSIGNED_BYTE&&(F=t.R8UI),I===t.UNSIGNED_SHORT&&(F=t.R16UI),I===t.UNSIGNED_INT&&(F=t.R32UI),I===t.BYTE&&(F=t.R8I),I===t.SHORT&&(F=t.R16I),I===t.INT&&(F=t.R32I)),x===t.RG&&(I===t.FLOAT&&(F=t.RG32F),I===t.HALF_FLOAT&&(F=t.RG16F),I===t.UNSIGNED_BYTE&&(F=t.RG8),I===t.UNSIGNED_SHORT&&oe&&(F=oe.RG16_EXT),I===t.SHORT&&oe&&(F=oe.RG16_SNORM_EXT)),x===t.RG_INTEGER&&(I===t.UNSIGNED_BYTE&&(F=t.RG8UI),I===t.UNSIGNED_SHORT&&(F=t.RG16UI),I===t.UNSIGNED_INT&&(F=t.RG32UI),I===t.BYTE&&(F=t.RG8I),I===t.SHORT&&(F=t.RG16I),I===t.INT&&(F=t.RG32I)),x===t.RGB_INTEGER&&(I===t.UNSIGNED_BYTE&&(F=t.RGB8UI),I===t.UNSIGNED_SHORT&&(F=t.RGB16UI),I===t.UNSIGNED_INT&&(F=t.RGB32UI),I===t.BYTE&&(F=t.RGB8I),I===t.SHORT&&(F=t.RGB16I),I===t.INT&&(F=t.RGB32I)),x===t.RGBA_INTEGER&&(I===t.UNSIGNED_BYTE&&(F=t.RGBA8UI),I===t.UNSIGNED_SHORT&&(F=t.RGBA16UI),I===t.UNSIGNED_INT&&(F=t.RGBA32UI),I===t.BYTE&&(F=t.RGBA8I),I===t.SHORT&&(F=t.RGBA16I),I===t.INT&&(F=t.RGBA32I)),x===t.RGB&&(I===t.UNSIGNED_SHORT&&oe&&(F=oe.RGB16_EXT),I===t.SHORT&&oe&&(F=oe.RGB16_SNORM_EXT),I===t.UNSIGNED_INT_5_9_9_9_REV&&(F=t.RGB9_E5),I===t.UNSIGNED_INT_10F_11F_11F_REV&&(F=t.R11F_G11F_B10F)),x===t.RGBA){const le=ue?Zo:ot.getTransfer(ee);I===t.FLOAT&&(F=t.RGBA32F),I===t.HALF_FLOAT&&(F=t.RGBA16F),I===t.UNSIGNED_BYTE&&(F=le==="srgb"?t.SRGB8_ALPHA8:t.RGBA8),I===t.UNSIGNED_SHORT&&oe&&(F=oe.RGBA16_EXT),I===t.SHORT&&oe&&(F=oe.RGBA16_SNORM_EXT),I===t.UNSIGNED_SHORT_4_4_4_4&&(F=t.RGBA4),I===t.UNSIGNED_SHORT_5_5_5_1&&(F=t.RGB5_A1)}return(F===t.R16F||F===t.R32F||F===t.RG16F||F===t.RG32F||F===t.RGBA16F||F===t.RGBA32F)&&e.get("EXT_color_buffer_float"),F}function b(w,x){let I;return w?x===null||x===1014||x===1020?I=t.DEPTH24_STENCIL8:x===1015?I=t.DEPTH32F_STENCIL8:x===1012&&(I=t.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===1014||x===1020?I=t.DEPTH_COMPONENT24:x===1015?I=t.DEPTH_COMPONENT32F:x===1012&&(I=t.DEPTH_COMPONENT16),I}function R(w,x){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==1003&&w.minFilter!==1006?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function A(w){const x=w.target;x.removeEventListener("dispose",A),S(x),x.isVideoTexture&&u.delete(x),x.isHTMLTexture&&d.delete(x)}function v(w){const x=w.target;x.removeEventListener("dispose",v),C(x)}function S(w){const x=n.get(w);if(x.__webglInit===void 0)return;const I=w.source,X=f.get(I);if(X){const ee=X[x.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&D(w),Object.keys(X).length===0&&f.delete(I)}n.remove(w)}function D(w){const x=n.get(w);t.deleteTexture(x.__webglTexture);const I=w.source,X=f.get(I);delete X[x.__cacheKey],a.memory.textures--}function C(w){const x=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(x.__webglFramebuffer[X]))for(let ee=0;ee<x.__webglFramebuffer[X].length;ee++)t.deleteFramebuffer(x.__webglFramebuffer[X][ee]);else t.deleteFramebuffer(x.__webglFramebuffer[X]);x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer[X])}else{if(Array.isArray(x.__webglFramebuffer))for(let X=0;X<x.__webglFramebuffer.length;X++)t.deleteFramebuffer(x.__webglFramebuffer[X]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&t.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let X=0;X<x.__webglColorRenderbuffer.length;X++)x.__webglColorRenderbuffer[X]&&t.deleteRenderbuffer(x.__webglColorRenderbuffer[X]);x.__webglDepthRenderbuffer&&t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const I=w.textures;for(let X=0,ee=I.length;X<ee;X++){const ue=n.get(I[X]);ue.__webglTexture&&(t.deleteTexture(ue.__webglTexture),a.memory.textures--),n.remove(I[X])}n.remove(w)}let L=0;function Y(){L=0}function k(){return L}function V(w){L=w}function W(){const w=L;return w>=r.maxTextures&&Ne("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),L+=1,w}function U(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function J(w,x){const I=n.get(w);if(w.isVideoTexture&&Ft(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&I.__version!==w.version){const X=w.image;if(X===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{be(I,w,x);return}}else w.isExternalTexture&&(I.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(t.TEXTURE_2D,I.__webglTexture,t.TEXTURE0+x)}function Q(w,x){const I=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&I.__version!==w.version){be(I,w,x);return}else w.isExternalTexture&&(I.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(t.TEXTURE_2D_ARRAY,I.__webglTexture,t.TEXTURE0+x)}function P(w,x){const I=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&I.__version!==w.version){be(I,w,x);return}i.bindTexture(t.TEXTURE_3D,I.__webglTexture,t.TEXTURE0+x)}function ce(w,x){const I=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&I.__version!==w.version){De(I,w,x);return}i.bindTexture(t.TEXTURE_CUBE_MAP,I.__webglTexture,t.TEXTURE0+x)}const Se={[Ac]:t.REPEAT,[kn]:t.CLAMP_TO_EDGE,[wc]:t.MIRRORED_REPEAT},rt={[Ti]:t.NEAREST,[Zm]:t.NEAREST_MIPMAP_NEAREST,[$m]:t.NEAREST_MIPMAP_LINEAR,[Yi]:t.LINEAR,[Jm]:t.LINEAR_MIPMAP_NEAREST,[ou]:t.LINEAR_MIPMAP_LINEAR},Oe={512:t.NEVER,519:t.ALWAYS,513:t.LESS,515:t.LEQUAL,514:t.EQUAL,518:t.GEQUAL,516:t.GREATER,517:t.NOTEQUAL};function Z(w,x){if(x.type===1015&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===1006||x.magFilter===1007||x.magFilter===1005||x.magFilter===1008||x.minFilter===1006||x.minFilter===1007||x.minFilter===1005||x.minFilter===1008)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(w,t.TEXTURE_WRAP_S,Se[x.wrapS]),t.texParameteri(w,t.TEXTURE_WRAP_T,Se[x.wrapT]),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,Se[x.wrapR]),t.texParameteri(w,t.TEXTURE_MAG_FILTER,rt[x.magFilter]),t.texParameteri(w,t.TEXTURE_MIN_FILTER,rt[x.minFilter]),x.compareFunction&&(t.texParameteri(w,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(w,t.TEXTURE_COMPARE_FUNC,Oe[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===1003||x.minFilter!==1005&&x.minFilter!==1008||x.type===1015&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");t.texParameterf(w,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function se(w,x){let I=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",A));const X=x.source;let ee=f.get(X);ee===void 0&&(ee={},f.set(X,ee));const ue=U(x);if(ue!==w.__cacheKey){ee[ue]===void 0&&(ee[ue]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,I=!0),ee[ue].usedTimes++;const oe=ee[w.__cacheKey];oe!==void 0&&(ee[w.__cacheKey].usedTimes--,oe.usedTimes===0&&D(x)),w.__cacheKey=ue,w.__webglTexture=ee[ue].texture}return I}function de(w,x,I){return Math.floor(Math.floor(w/I)/x)}function pe(w,x,I,X){const ue=w.updateRanges;if(ue.length===0)i.texSubImage2D(t.TEXTURE_2D,0,0,0,x.width,x.height,I,X,x.data);else{ue.sort((Ee,ie)=>Ee.start-ie.start);let oe=0;for(let Ee=1;Ee<ue.length;Ee++){const ie=ue[oe],Te=ue[Ee],he=ie.start+ie.count,Ie=de(Te.start,x.width,4),We=de(ie.start,x.width,4);Te.start<=he+1&&Ie===We&&de(Te.start+Te.count-1,x.width,4)===Ie?ie.count=Math.max(ie.count,Te.start+Te.count-ie.start):(++oe,ue[oe]=Te)}ue.length=oe+1;const F=i.getParameter(t.UNPACK_ROW_LENGTH),le=i.getParameter(t.UNPACK_SKIP_PIXELS),ve=i.getParameter(t.UNPACK_SKIP_ROWS);i.pixelStorei(t.UNPACK_ROW_LENGTH,x.width);for(let Ee=0,ie=ue.length;Ee<ie;Ee++){const Te=ue[Ee],he=Math.floor(Te.start/4),Ie=Math.ceil(Te.count/4),We=he%x.width,N=Math.floor(he/x.width),$=Ie,te=1;i.pixelStorei(t.UNPACK_SKIP_PIXELS,We),i.pixelStorei(t.UNPACK_SKIP_ROWS,N),i.texSubImage2D(t.TEXTURE_2D,0,We,N,$,te,I,X,x.data)}w.clearUpdateRanges(),i.pixelStorei(t.UNPACK_ROW_LENGTH,F),i.pixelStorei(t.UNPACK_SKIP_PIXELS,le),i.pixelStorei(t.UNPACK_SKIP_ROWS,ve)}}function be(w,x,I){let X=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(X=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(X=t.TEXTURE_3D);const ee=se(w,x),ue=x.source;i.bindTexture(X,w.__webglTexture,t.TEXTURE0+I);const oe=n.get(ue);if(ue.version!==oe.__version||ee===!0){if(i.activeTexture(t.TEXTURE0+I),!(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)){const $=ot.getPrimaries(ot.workingColorSpace),te=x.colorSpace===""?null:ot.getPrimaries(x.colorSpace),ge=x.colorSpace===""||$===te?t.NONE:t.BROWSER_DEFAULT_WEBGL;i.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge)}i.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment);let F=_(x.image,!1,r.maxTextureSize);F=je(x,F);const le=s.convert(x.format,x.colorSpace),ve=s.convert(x.type);let Ee=M(x.internalFormat,le,ve,x.normalized,x.colorSpace,x.isVideoTexture);Z(X,x);let ie;const Te=x.mipmaps,he=x.isVideoTexture!==!0,Ie=oe.__version===void 0||ee===!0,We=ue.dataReady,N=R(x,F);if(x.isDepthTexture)Ee=b(x.format===Ad,x.type),Ie&&(he?i.texStorage2D(t.TEXTURE_2D,1,Ee,F.width,F.height):i.texImage2D(t.TEXTURE_2D,0,Ee,F.width,F.height,0,le,ve,null));else if(x.isDataTexture)if(Te.length>0){he&&Ie&&i.texStorage2D(t.TEXTURE_2D,N,Ee,Te[0].width,Te[0].height);for(let $=0,te=Te.length;$<te;$++)ie=Te[$],he?We&&i.texSubImage2D(t.TEXTURE_2D,$,0,0,ie.width,ie.height,le,ve,ie.data):i.texImage2D(t.TEXTURE_2D,$,Ee,ie.width,ie.height,0,le,ve,ie.data);x.generateMipmaps=!1}else he?(Ie&&i.texStorage2D(t.TEXTURE_2D,N,Ee,F.width,F.height),We&&pe(x,F,le,ve)):i.texImage2D(t.TEXTURE_2D,0,Ee,F.width,F.height,0,le,ve,F.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){he&&Ie&&i.texStorage3D(t.TEXTURE_2D_ARRAY,N,Ee,Te[0].width,Te[0].height,F.depth);for(let $=0,te=Te.length;$<te;$++)if(ie=Te[$],x.format!==1023)if(le!==null)if(he){if(We)if(x.layerUpdates.size>0){const ge=Ch(ie.width,ie.height,x.format,x.type);for(const Me of x.layerUpdates){const ne=ie.data.subarray(Me*ge/ie.data.BYTES_PER_ELEMENT,(Me+1)*ge/ie.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,Me,ie.width,ie.height,1,le,ne)}x.clearLayerUpdates()}else i.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,ie.width,ie.height,F.depth,le,ie.data)}else i.compressedTexImage3D(t.TEXTURE_2D_ARRAY,$,Ee,ie.width,ie.height,F.depth,0,ie.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else he?We&&i.texSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,ie.width,ie.height,F.depth,le,ve,ie.data):i.texImage3D(t.TEXTURE_2D_ARRAY,$,Ee,ie.width,ie.height,F.depth,0,le,ve,ie.data)}else{he&&Ie&&i.texStorage2D(t.TEXTURE_2D,N,Ee,Te[0].width,Te[0].height);for(let $=0,te=Te.length;$<te;$++)ie=Te[$],x.format!==1023?le!==null?he?We&&i.compressedTexSubImage2D(t.TEXTURE_2D,$,0,0,ie.width,ie.height,le,ie.data):i.compressedTexImage2D(t.TEXTURE_2D,$,Ee,ie.width,ie.height,0,ie.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):he?We&&i.texSubImage2D(t.TEXTURE_2D,$,0,0,ie.width,ie.height,le,ve,ie.data):i.texImage2D(t.TEXTURE_2D,$,Ee,ie.width,ie.height,0,le,ve,ie.data)}else if(x.isDataArrayTexture)if(he){if(Ie&&i.texStorage3D(t.TEXTURE_2D_ARRAY,N,Ee,F.width,F.height,F.depth),We)if(x.layerUpdates.size>0){const $=Ch(F.width,F.height,x.format,x.type);for(const te of x.layerUpdates){const ge=F.data.subarray(te*$/F.data.BYTES_PER_ELEMENT,(te+1)*$/F.data.BYTES_PER_ELEMENT);i.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,te,F.width,F.height,1,le,ve,ge)}x.clearLayerUpdates()}else i.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,F.width,F.height,F.depth,le,ve,F.data)}else i.texImage3D(t.TEXTURE_2D_ARRAY,0,Ee,F.width,F.height,F.depth,0,le,ve,F.data);else if(x.isData3DTexture)he?(Ie&&i.texStorage3D(t.TEXTURE_3D,N,Ee,F.width,F.height,F.depth),We&&i.texSubImage3D(t.TEXTURE_3D,0,0,0,0,F.width,F.height,F.depth,le,ve,F.data)):i.texImage3D(t.TEXTURE_3D,0,Ee,F.width,F.height,F.depth,0,le,ve,F.data);else if(x.isFramebufferTexture){if(Ie)if(he)i.texStorage2D(t.TEXTURE_2D,N,Ee,F.width,F.height);else{let $=F.width,te=F.height;for(let ge=0;ge<N;ge++)i.texImage2D(t.TEXTURE_2D,ge,Ee,$,te,0,le,ve,null),$>>=1,te>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in t){const $=t.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),F.parentNode!==$){$.appendChild(F),d.add(x),$.onpaint=te=>{const ge=te.changedElements;for(const Me of d)ge.includes(Me.image)&&(Me.needsUpdate=!0)},$.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,F);else{const ge=t.RGBA,Me=t.RGBA,ne=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,ge,Me,ne,F)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Te.length>0){if(he&&Ie){const $=He(Te[0]);i.texStorage2D(t.TEXTURE_2D,N,Ee,$.width,$.height)}for(let $=0,te=Te.length;$<te;$++)ie=Te[$],he?We&&i.texSubImage2D(t.TEXTURE_2D,$,0,0,le,ve,ie):i.texImage2D(t.TEXTURE_2D,$,Ee,le,ve,ie);x.generateMipmaps=!1}else if(he){if(Ie){const $=He(F);i.texStorage2D(t.TEXTURE_2D,N,Ee,$.width,$.height)}We&&i.texSubImage2D(t.TEXTURE_2D,0,0,0,le,ve,F)}else i.texImage2D(t.TEXTURE_2D,0,Ee,le,ve,F);p(x)&&y(X),oe.__version=ue.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function De(w,x,I){if(x.image.length!==6)return;const X=se(w,x),ee=x.source;i.bindTexture(t.TEXTURE_CUBE_MAP,w.__webglTexture,t.TEXTURE0+I);const ue=n.get(ee);if(ee.version!==ue.__version||X===!0){i.activeTexture(t.TEXTURE0+I);const oe=ot.getPrimaries(ot.workingColorSpace),F=x.colorSpace===""?null:ot.getPrimaries(x.colorSpace),le=x.colorSpace===""||oe===F?t.NONE:t.BROWSER_DEFAULT_WEBGL;i.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const ve=x.isCompressedTexture||x.image[0].isCompressedTexture,Ee=x.image[0]&&x.image[0].isDataTexture,ie=[];for(let ne=0;ne<6;ne++)!ve&&!Ee?ie[ne]=_(x.image[ne],!0,r.maxCubemapSize):ie[ne]=Ee?x.image[ne].image:x.image[ne],ie[ne]=je(x,ie[ne]);const Te=ie[0],he=s.convert(x.format,x.colorSpace),Ie=s.convert(x.type),We=M(x.internalFormat,he,Ie,x.normalized,x.colorSpace),N=x.isVideoTexture!==!0,$=ue.__version===void 0||X===!0,te=ee.dataReady;let ge=R(x,Te);Z(t.TEXTURE_CUBE_MAP,x);let Me;if(ve){N&&$&&i.texStorage2D(t.TEXTURE_CUBE_MAP,ge,We,Te.width,Te.height);for(let ne=0;ne<6;ne++){Me=ie[ne].mipmaps;for(let j=0;j<Me.length;j++){const ae=Me[j];x.format!==1023?he!==null?N?te&&i.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,j,0,0,ae.width,ae.height,he,ae.data):i.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,j,We,ae.width,ae.height,0,ae.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?te&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,j,0,0,ae.width,ae.height,he,Ie,ae.data):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,j,We,ae.width,ae.height,0,he,Ie,ae.data)}}}else{if(Me=x.mipmaps,N&&$){Me.length>0&&ge++;const ne=He(ie[0]);i.texStorage2D(t.TEXTURE_CUBE_MAP,ge,We,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Ee){N?te&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ie[ne].width,ie[ne].height,he,Ie,ie[ne].data):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,We,ie[ne].width,ie[ne].height,0,he,Ie,ie[ne].data);for(let j=0;j<Me.length;j++){const ae=Me[j].image[ne].image;N?te&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,j+1,0,0,ae.width,ae.height,he,Ie,ae.data):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,j+1,We,ae.width,ae.height,0,he,Ie,ae.data)}}else{N?te&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,he,Ie,ie[ne]):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,We,he,Ie,ie[ne]);for(let j=0;j<Me.length;j++){const ae=Me[j];N?te&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,j+1,0,0,he,Ie,ae.image[ne]):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,j+1,We,he,Ie,ae.image[ne])}}}p(x)&&y(t.TEXTURE_CUBE_MAP),ue.__version=ee.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function Re(w,x,I,X,ee,ue){const oe=s.convert(I.format,I.colorSpace),F=s.convert(I.type),le=M(I.internalFormat,oe,F,I.normalized,I.colorSpace),ve=n.get(x),Ee=n.get(I);if(Ee.__renderTarget=x,!ve.__hasExternalTextures){const ie=Math.max(1,x.width>>ue),Te=Math.max(1,x.height>>ue);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?i.texImage3D(ee,ue,le,ie,Te,x.depth,0,oe,F,null):i.texImage2D(ee,ue,le,ie,Te,0,oe,F,null)}i.bindFramebuffer(t.FRAMEBUFFER,w),O(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,X,ee,Ee.__webglTexture,0,Xe(x)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,X,ee,Ee.__webglTexture,ue),i.bindFramebuffer(t.FRAMEBUFFER,null)}function Ve(w,x,I){if(t.bindRenderbuffer(t.RENDERBUFFER,w),x.depthBuffer){const X=x.depthTexture,ee=X&&X.isDepthTexture?X.type:null,ue=b(x.stencilBuffer,ee),oe=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;O(x)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Xe(x),ue,x.width,x.height):I?t.renderbufferStorageMultisample(t.RENDERBUFFER,Xe(x),ue,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,ue,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,oe,t.RENDERBUFFER,w)}else{const X=x.textures;for(let ee=0;ee<X.length;ee++){const ue=X[ee],oe=s.convert(ue.format,ue.colorSpace),F=s.convert(ue.type),le=M(ue.internalFormat,oe,F,ue.normalized,ue.colorSpace);O(x)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Xe(x),le,x.width,x.height):I?t.renderbufferStorageMultisample(t.RENDERBUFFER,Xe(x),le,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,le,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ye(w,x,I){const X=x.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(t.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ee=n.get(x.depthTexture);if(ee.__renderTarget=x,(!ee.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),X){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,x.depthTexture.addEventListener("dispose",A)),ee.__webglTexture===void 0){ee.__webglTexture=t.createTexture(),i.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),Z(t.TEXTURE_CUBE_MAP,x.depthTexture);const ve=s.convert(x.depthTexture.format),Ee=s.convert(x.depthTexture.type);let ie;x.depthTexture.format===1026?ie=t.DEPTH_COMPONENT24:x.depthTexture.format===1027&&(ie=t.DEPTH24_STENCIL8);for(let Te=0;Te<6;Te++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,ie,x.width,x.height,0,ve,Ee,null)}}else J(x.depthTexture,0);const ue=ee.__webglTexture,oe=Xe(x),F=X?t.TEXTURE_CUBE_MAP_POSITIVE_X+I:t.TEXTURE_2D,le=x.depthTexture.format===1027?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(x.depthTexture.format===1026)O(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,le,F,ue,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,le,F,ue,0);else if(x.depthTexture.format===1027)O(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,le,F,ue,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,le,F,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ze(w){const x=n.get(w),I=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){const X=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),X){const ee=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,X.removeEventListener("dispose",ee)};X.addEventListener("dispose",ee),x.__depthDisposeCallback=ee}x.__boundDepthTexture=X}if(w.depthTexture&&!x.__autoAllocateDepthBuffer)if(I)for(let X=0;X<6;X++)ye(x.__webglFramebuffer[X],w,X);else{const X=w.texture.mipmaps;X&&X.length>0?ye(x.__webglFramebuffer[0],w,0):ye(x.__webglFramebuffer,w,0)}else if(I){x.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(i.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[X]),x.__webglDepthbuffer[X]===void 0)x.__webglDepthbuffer[X]=t.createRenderbuffer(),Ve(x.__webglDepthbuffer[X],w,!1);else{const ee=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=x.__webglDepthbuffer[X];t.bindRenderbuffer(t.RENDERBUFFER,ue),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,ue)}}else{const X=w.texture.mipmaps;if(X&&X.length>0?i.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[0]):i.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),Ve(x.__webglDepthbuffer,w,!1);else{const ee=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ue),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,ue)}}i.bindFramebuffer(t.FRAMEBUFFER,null)}function ct(w,x,I){const X=n.get(w);x!==void 0&&Re(X.__webglFramebuffer,w,w.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),I!==void 0&&ze(w)}function _t(w){const x=w.texture,I=n.get(w),X=n.get(x);w.addEventListener("dispose",v);const ee=w.textures,ue=w.isWebGLCubeRenderTarget===!0,oe=ee.length>1;if(oe||(X.__webglTexture===void 0&&(X.__webglTexture=t.createTexture()),X.__version=x.version,a.memory.textures++),ue){I.__webglFramebuffer=[];for(let F=0;F<6;F++)if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer[F]=[];for(let le=0;le<x.mipmaps.length;le++)I.__webglFramebuffer[F][le]=t.createFramebuffer()}else I.__webglFramebuffer[F]=t.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer=[];for(let F=0;F<x.mipmaps.length;F++)I.__webglFramebuffer[F]=t.createFramebuffer()}else I.__webglFramebuffer=t.createFramebuffer();if(oe)for(let F=0,le=ee.length;F<le;F++){const ve=n.get(ee[F]);ve.__webglTexture===void 0&&(ve.__webglTexture=t.createTexture(),a.memory.textures++)}if(w.samples>0&&O(w)===!1){I.__webglMultisampledFramebuffer=t.createFramebuffer(),I.__webglColorRenderbuffer=[],i.bindFramebuffer(t.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let F=0;F<ee.length;F++){const le=ee[F];I.__webglColorRenderbuffer[F]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,I.__webglColorRenderbuffer[F]);const ve=s.convert(le.format,le.colorSpace),Ee=s.convert(le.type),ie=M(le.internalFormat,ve,Ee,le.normalized,le.colorSpace,w.isXRRenderTarget===!0),Te=Xe(w);t.renderbufferStorageMultisample(t.RENDERBUFFER,Te,ie,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+F,t.RENDERBUFFER,I.__webglColorRenderbuffer[F])}t.bindRenderbuffer(t.RENDERBUFFER,null),w.depthBuffer&&(I.__webglDepthRenderbuffer=t.createRenderbuffer(),Ve(I.__webglDepthRenderbuffer,w,!0)),i.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ue){i.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture),Z(t.TEXTURE_CUBE_MAP,x);for(let F=0;F<6;F++)if(x.mipmaps&&x.mipmaps.length>0)for(let le=0;le<x.mipmaps.length;le++)Re(I.__webglFramebuffer[F][le],w,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+F,le);else Re(I.__webglFramebuffer[F],w,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+F,0);p(x)&&y(t.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(oe){for(let F=0,le=ee.length;F<le;F++){const ve=ee[F],Ee=n.get(ve);let ie=t.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ie=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),i.bindTexture(ie,Ee.__webglTexture),Z(ie,ve),Re(I.__webglFramebuffer,w,ve,t.COLOR_ATTACHMENT0+F,ie,0),p(ve)&&y(ie)}i.unbindTexture()}else{let F=t.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(F=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),i.bindTexture(F,X.__webglTexture),Z(F,x),x.mipmaps&&x.mipmaps.length>0)for(let le=0;le<x.mipmaps.length;le++)Re(I.__webglFramebuffer[le],w,x,t.COLOR_ATTACHMENT0,F,le);else Re(I.__webglFramebuffer,w,x,t.COLOR_ATTACHMENT0,F,0);p(x)&&y(F),i.unbindTexture()}w.depthBuffer&&ze(w)}function K(w){const x=w.textures;for(let I=0,X=x.length;I<X;I++){const ee=x[I];if(p(ee)){const ue=T(w),oe=n.get(ee).__webglTexture;i.bindTexture(ue,oe),y(ue),i.unbindTexture()}}}const Ke=[],vt=[];function Mt(w){if(w.samples>0){if(O(w)===!1){const x=w.textures,I=w.width,X=w.height;let ee=t.COLOR_BUFFER_BIT;const ue=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=n.get(w),F=x.length>1;if(F)for(let ve=0;ve<x.length;ve++)i.bindFramebuffer(t.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,null),i.bindFramebuffer(t.FRAMEBUFFER,oe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,null,0);i.bindFramebuffer(t.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);const le=w.texture.mipmaps;le&&le.length>0?i.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):i.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let ve=0;ve<x.length;ve++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),F){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,oe.__webglColorRenderbuffer[ve]);const Ee=n.get(x[ve]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ee,0)}t.blitFramebuffer(0,0,I,X,0,0,I,X,ee,t.NEAREST),l===!0&&(Ke.length=0,vt.length=0,Ke.push(t.COLOR_ATTACHMENT0+ve),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Ke.push(ue),vt.push(ue),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,vt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ke))}if(i.bindFramebuffer(t.READ_FRAMEBUFFER,null),i.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),F)for(let ve=0;ve<x.length;ve++){i.bindFramebuffer(t.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,oe.__webglColorRenderbuffer[ve]);const Ee=n.get(x[ve]).__webglTexture;i.bindFramebuffer(t.FRAMEBUFFER,oe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,Ee,0)}i.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const x=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}}function Xe(w){return Math.min(r.maxSamples,w.samples)}function O(w){const x=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ft(w){const x=a.render.frame;u.get(w)!==x&&(u.set(w,x),w.update())}function je(w,x){const I=w.colorSpace,X=w.format,ee=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||I!=="srgb-linear"&&I!==""&&(ot.getTransfer(I)==="srgb"?(X!==1023||ee!==1009)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Be("WebGLTextures: Unsupported texture color space:",I)),x}function He(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=Y,this.getTextureUnits=k,this.setTextureUnits=V,this.setTexture2D=J,this.setTexture2DArray=Q,this.setTexture3D=P,this.setTextureCube=ce,this.rebindTextures=ct,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=O,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function hM(t,e){function i(n,r=""){let s;const a=ot.getTransfer(r);if(n===1009)return t.UNSIGNED_BYTE;if(n===1017)return t.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return t.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return t.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return t.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return t.BYTE;if(n===1011)return t.SHORT;if(n===1012)return t.UNSIGNED_SHORT;if(n===1013)return t.INT;if(n===1014)return t.UNSIGNED_INT;if(n===1015)return t.FLOAT;if(n===1016)return t.HALF_FLOAT;if(n===1021)return t.ALPHA;if(n===1022)return t.RGB;if(n===1023)return t.RGBA;if(n===1026)return t.DEPTH_COMPONENT;if(n===1027)return t.DEPTH_STENCIL;if(n===1028)return t.RED;if(n===1029)return t.RED_INTEGER;if(n===1030)return t.RG;if(n===1031)return t.RG_INTEGER;if(n===1033)return t.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a==="srgb")if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===33776)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===33776)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===35840)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===36196||n===37492)return a==="srgb"?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===37496)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return s.COMPRESSED_R11_EAC;if(n===37489)return s.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return s.COMPRESSED_RG11_EAC;if(n===37491)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===37808)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===36492)return a==="srgb"?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===36283)return s.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?t.UNSIGNED_INT_24_8:t[n]!==void 0?t[n]:null}return{convert:i}}var fM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,pM=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Yd(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Rn({vertexShader:fM,fragmentShader:dM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new pn(new $d(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},mM=class extends Vr{constructor(t,e){super();const i=this;let n=null,r=1,s=null,a="local-floor",o=1,l=null,c=null,u=null,d=null,h=null,f=null;const g=typeof XRWebGLBinding<"u",m=new pM,_={},p=e.getContextAttributes();let y=null,T=null;const M=[],b=[],R=new at;let A=null;const v=new rn;v.viewport=new Gt;const S=new rn;S.viewport=new Gt;const D=[v,S],C=new Zg;let L=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let se=M[Z];return se===void 0&&(se=new Pl,M[Z]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Z){let se=M[Z];return se===void 0&&(se=new Pl,M[Z]=se),se.getGripSpace()},this.getHand=function(Z){let se=M[Z];return se===void 0&&(se=new Pl,M[Z]=se),se.getHandSpace()};function k(Z){const se=b.indexOf(Z.inputSource);if(se===-1)return;const de=M[se];de!==void 0&&(de.update(Z.inputSource,Z.frame,l||s),de.dispatchEvent({type:Z.type,data:Z.inputSource}))}function V(){n.removeEventListener("select",k),n.removeEventListener("selectstart",k),n.removeEventListener("selectend",k),n.removeEventListener("squeeze",k),n.removeEventListener("squeezestart",k),n.removeEventListener("squeezeend",k),n.removeEventListener("end",V),n.removeEventListener("inputsourceschange",W);for(let Z=0;Z<M.length;Z++){const se=b[Z];se!==null&&(b[Z]=null,M[Z].disconnect(se))}L=null,Y=null,m.reset();for(const Z in _)delete _[Z];t.setRenderTarget(y),h=null,d=null,u=null,n=null,T=null,Oe.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(n,e)),u},this.getFrame=function(){return f},this.getSession=function(){return n},this.setSession=async function(Z){if(n=Z,n!==null){if(y=t.getRenderTarget(),n.addEventListener("select",k),n.addEventListener("selectstart",k),n.addEventListener("selectend",k),n.addEventListener("squeeze",k),n.addEventListener("squeezestart",k),n.addEventListener("squeezeend",k),n.addEventListener("end",V),n.addEventListener("inputsourceschange",W),p.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(R),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,de=null,pe=null;p.depth&&(pe=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,se=p.stencil?Ad:Ca,de=p.stencil?bd:Br);const be={colorFormat:e.RGBA8,depthFormat:pe,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(be),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),T=new An(d.textureWidth,d.textureHeight,{format:Ra,type:cr,depthTexture:new Ns(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const se={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(n,e,se),n.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),T=new An(h.framebufferWidth,h.framebufferHeight,{format:Ra,type:cr,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(o),l=null,s=await n.requestReferenceSpace(a),Oe.setContext(n),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function W(Z){for(let se=0;se<Z.removed.length;se++){const de=Z.removed[se],pe=b.indexOf(de);pe>=0&&(b[pe]=null,M[pe].disconnect(de))}for(let se=0;se<Z.added.length;se++){const de=Z.added[se];let pe=b.indexOf(de);if(pe===-1){for(let De=0;De<M.length;De++)if(De>=b.length){b.push(de),pe=De;break}else if(b[De]===null){b[De]=de,pe=De;break}if(pe===-1)break}const be=M[pe];be&&be.connect(de)}}const U=new G,J=new G;function Q(Z,se,de){U.setFromMatrixPosition(se.matrixWorld),J.setFromMatrixPosition(de.matrixWorld);const pe=U.distanceTo(J),be=se.projectionMatrix.elements,De=de.projectionMatrix.elements,Re=be[14]/(be[10]-1),Ve=be[14]/(be[10]+1),ye=(be[9]+1)/be[5],ze=(be[9]-1)/be[5],ct=(be[8]-1)/be[0],_t=(De[8]+1)/De[0],K=Re*ct,Ke=Re*_t,vt=pe/(-ct+_t),Mt=vt*-ct;if(se.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Mt),Z.translateZ(vt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),be[10]===-1)Z.projectionMatrix.copy(se.projectionMatrix),Z.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const Xe=Re+vt,O=Ve+vt,Ft=K-Mt,je=Ke+(pe-Mt),He=ye*Ve/O*Xe,w=ze*Ve/O*Xe;Z.projectionMatrix.makePerspective(Ft,je,He,w,Xe,O),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function P(Z,se){se===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(se.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(n===null)return;let se=Z.near,de=Z.far;m.texture!==null&&(m.depthNear>0&&(se=m.depthNear),m.depthFar>0&&(de=m.depthFar)),C.near=S.near=v.near=se,C.far=S.far=v.far=de,(L!==C.near||Y!==C.far)&&(n.updateRenderState({depthNear:C.near,depthFar:C.far}),L=C.near,Y=C.far),C.layers.mask=Z.layers.mask|6,v.layers.mask=C.layers.mask&-5,S.layers.mask=C.layers.mask&-3;const pe=Z.parent,be=C.cameras;P(C,pe);for(let De=0;De<be.length;De++)P(be[De],pe);be.length===2?Q(C,v,S):C.projectionMatrix.copy(v.projectionMatrix),ce(Z,C,pe)};function ce(Z,se,de){de===null?Z.matrix.copy(se.matrixWorld):(Z.matrix.copy(de.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(se.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(se.projectionMatrix),Z.projectionMatrixInverse.copy(se.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Pc*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(d===null&&h===null))return o},this.setFoveation=function(Z){o=Z,d!==null&&(d.fixedFoveation=Z),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(C)},this.getCameraTexture=function(Z){return _[Z]};let Se=null;function rt(Z,se){if(c=se.getViewerPose(l||s),f=se,c!==null){const de=c.views;h!==null&&(t.setRenderTargetFramebuffer(T,h.framebuffer),t.setRenderTarget(T));let pe=!1;de.length!==C.cameras.length&&(C.cameras.length=0,pe=!0);for(let De=0;De<de.length;De++){const Re=de[De];let Ve=null;if(h!==null)Ve=h.getViewport(Re);else{const ze=u.getViewSubImage(d,Re);Ve=ze.viewport,De===0&&(t.setRenderTargetTextures(T,ze.colorTexture,ze.depthStencilTexture),t.setRenderTarget(T))}let ye=D[De];ye===void 0&&(ye=new rn,ye.layers.enable(De),ye.viewport=new Gt,D[De]=ye),ye.matrix.fromArray(Re.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(Re.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),De===0&&(C.matrix.copy(ye.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),pe===!0&&C.cameras.push(ye)}const be=n.enabledFeatures;if(be&&be.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&g){u=i.getBinding();const De=u.getDepthInformation(de[0]);De&&De.isValid&&De.texture&&m.init(De,n.renderState)}if(be&&be.includes("camera-access")&&g){t.state.unbindTexture(),u=i.getBinding();for(let De=0;De<de.length;De++){const Re=de[De].camera;if(Re){let Ve=_[Re];Ve||(Ve=new Yd,_[Re]=Ve);const ye=u.getCameraImage(Re);Ve.sourceTexture=ye}}}}for(let de=0;de<M.length;de++){const pe=b[de],be=M[de];pe!==null&&be!==void 0&&be.update(pe,se,l||s)}Se&&Se(Z,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),f=null}const Oe=new rp;Oe.setAnimationLoop(rt),this.setAnimationLoop=function(Z){Se=Z},this.dispose=function(){}}},_M=new Ot,hp=new Ye;hp.set(-1,0,0,0,1,0,0,0,1);function gM(t,e){function i(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function n(_,p){p.color.getRGB(_.fogColor.value,jd(t)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function r(_,p,y,T,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(_,p):p.isMeshLambertMaterial?(s(_,p),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(_,p),d(_,p)):p.isMeshPhongMaterial?(s(_,p),u(_,p),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(_,p),h(_,p),p.isMeshPhysicalMaterial&&f(_,p,M)):p.isMeshMatcapMaterial?(s(_,p),g(_,p)):p.isMeshDepthMaterial?s(_,p):p.isMeshDistanceMaterial?(s(_,p),m(_,p)):p.isMeshNormalMaterial?s(_,p):p.isLineBasicMaterial?(a(_,p),p.isLineDashedMaterial&&o(_,p)):p.isPointsMaterial?l(_,p,y,T):p.isSpriteMaterial?c(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,i(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,i(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,i(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===1&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,i(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===1&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,i(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,i(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,i(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);const y=e.get(p),T=y.envMap,M=y.envMapRotation;T&&(_.envMap.value=T,_.envMapRotation.value.setFromMatrix4(_M.makeRotationFromEuler(M)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(hp),_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap&&(_.lightMap.value=p.lightMap,_.lightMapIntensity.value=p.lightMapIntensity,i(p.lightMap,_.lightMapTransform)),p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,i(p.aoMap,_.aoMapTransform))}function a(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,i(p.map,_.mapTransform))}function o(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function l(_,p,y,T){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*y,_.scale.value=T*.5,p.map&&(_.map.value=p.map,i(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,i(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function c(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,i(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,i(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function u(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function d(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function h(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,i(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,i(p.roughnessMap,_.roughnessMapTransform)),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function f(_,p,y){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,i(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,i(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,i(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,i(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,i(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===1&&_.clearcoatNormalScale.value.negate())),p.dispersion>0&&(_.dispersion.value=p.dispersion),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,i(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,i(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=y.texture,_.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,i(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,i(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,i(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,i(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,i(p.specularIntensityMap,_.specularIntensityMapTransform))}function g(_,p){p.matcap&&(_.matcap.value=p.matcap)}function m(_,p){const y=e.get(p).light;_.referencePosition.value.setFromMatrixPosition(y.matrixWorld),_.nearDistance.value=y.shadow.camera.near,_.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function vM(t,e,i,n){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,b){const R=b.program;n.uniformBlockBinding(M,R)}function c(M,b){let R=r[M.id];R===void 0&&(_(M),R=u(M),r[M.id]=R,M.addEventListener("dispose",y));const A=b.program;n.updateUBOMapping(M,A);const v=e.render.frame;s[M.id]!==v&&(h(M),s[M.id]=v)}function u(M){const b=d();M.__bindingPointIndex=b;const R=t.createBuffer(),A=M.__size,v=M.usage;return t.bindBuffer(t.UNIFORM_BUFFER,R),t.bufferData(t.UNIFORM_BUFFER,A,v),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,b,R),R}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Be("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const b=r[M.id],R=M.uniforms,A=M.__cache;t.bindBuffer(t.UNIFORM_BUFFER,b);for(let v=0,S=R.length;v<S;v++){const D=R[v];if(Array.isArray(D))for(let C=0,L=D.length;C<L;C++)f(D[C],v,C,A);else f(D,v,0,A)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function f(M,b,R,A){if(m(M,b,R,A)===!0){const v=M.__offset,S=M.value;if(Array.isArray(S)){let D=0;for(let C=0;C<S.length;C++){const L=S[C],Y=p(L);g(L,M.__data,D),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(D+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(S,M.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,v,M.__data)}}function g(M,b,R){typeof M=="number"||typeof M=="boolean"?b[0]=M:M.isMatrix3?(b[0]=M.elements[0],b[1]=M.elements[1],b[2]=M.elements[2],b[3]=0,b[4]=M.elements[3],b[5]=M.elements[4],b[6]=M.elements[5],b[7]=0,b[8]=M.elements[6],b[9]=M.elements[7],b[10]=M.elements[8],b[11]=0):ArrayBuffer.isView(M)?b.set(new M.constructor(M.buffer,M.byteOffset,b.length)):M.toArray(b,R)}function m(M,b,R,A){const v=M.value,S=b+"_"+R;if(A[S]===void 0)return typeof v=="number"||typeof v=="boolean"?A[S]=v:ArrayBuffer.isView(v)?A[S]=v.slice():A[S]=v.clone(),!0;{const D=A[S];if(typeof v=="number"||typeof v=="boolean"){if(D!==v)return A[S]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(D.equals(v)===!1)return D.copy(v),!0}}return!1}function _(M){const b=M.uniforms;let R=0;const A=16;for(let S=0,D=b.length;S<D;S++){const C=Array.isArray(b[S])?b[S]:[b[S]];for(let L=0,Y=C.length;L<Y;L++){const k=C[L],V=Array.isArray(k.value)?k.value:[k.value];for(let W=0,U=V.length;W<U;W++){const J=V[W],Q=p(J),P=R%A,ce=P%Q.boundary,Se=P+ce;R+=ce,Se!==0&&A-Se<Q.storage&&(R+=A-Se),k.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=R,R+=Q.storage}}}const v=R%A;return v>0&&(R+=A-v),M.__size=R,M.__cache={},this}function p(M){const b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(b.boundary=16,b.storage=M.byteLength):Ne("WebGLRenderer: Unsupported uniform value type.",M),b}function y(M){const b=M.target;b.removeEventListener("dispose",y);const R=a.indexOf(b.__bindingPointIndex);a.splice(R,1),t.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function T(){for(const M in r)t.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:l,update:c,dispose:T}}var MM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),vn=null;function xM(){return vn===null&&(vn=new mg(MM,16,16,qo,zr),vn.name="DFG_LUT",vn.minFilter=Yi,vn.magFilter=Yi,vn.wrapS=kn,vn.wrapT=kn,vn.generateMipmaps=!1,vn.needsUpdate=!0),vn}var SM=class{constructor(t={}){const{canvas:e=Y_(),context:i=null,depth:n=!0,stencil:r=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:h=cr}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=s;const g=h,m=new Set([Cd,Rd,wd]),_=new Set([cr,Br,yd,bd,Ed,Td]),p=new Uint32Array(4),y=new Int32Array(4),T=new G;let M=null,b=null;const R=[],A=[];let v=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let D=!1,C=null,L=null,Y=null,k=null;this._outputColorSpace=nn;let V=0,W=0,U=null,J=-1,Q=null;const P=new Gt,ce=new Gt;let Se=null;const rt=new Qe(0);let Oe=0,Z=e.width,se=e.height,de=1,pe=null,be=null;const De=new Gt(0,0,Z,se),Re=new Gt(0,0,Z,se);let Ve=!1;const ye=new uu;let ze=!1,ct=!1;const _t=new Ot,K=new G,Ke=new Gt,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Mt=!1;function Xe(){return U===null?de:1}let O=i;function Ft(E,B){return e.getContext(E,B)}try{const E={alpha:!0,depth:n,stencil:r,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r185"),e.addEventListener("webglcontextlost",ae,!1),e.addEventListener("webglcontextrestored",ke,!1),e.addEventListener("webglcontextcreationerror",re,!1),O===null){const B="webgl2";if(O=Ft(B,E),O===null)throw Ft(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(E){throw Be("WebGLRenderer: "+E.message),E}let je,He,w,x,I,X,ee,ue,oe,F,le,ve,Ee,ie,Te,he,Ie,We,N,$,te,ge,Me;function ne(){je=new xv(O),je.init(),te=new hM(O,je),He=new fv(O,je,t,te),w=new cM(O,je),He.reversedDepthBuffer&&d&&w.buffers.depth.setReversed(!0),L=O.createFramebuffer(),Y=O.createFramebuffer(),k=O.createFramebuffer(),x=new Ev(O),I=new Z0,X=new uM(O,je,w,I,He,te,x),ee=new Mv(S),ue=new ov(O),ge=new uv(O,ue),oe=new Sv(O,ue,x,ge),F=new bv(O,oe,ue,ge,x),We=new Tv(O,He,X),Te=new dv(I),le=new K0(S,ee,je,He,ge,Te),ve=new gM(S,I),Ee=new J0,ie=new nM(je),Ie=new cv(S,ee,w,F,f,o),he=new lM(S,F,He),Me=new vM(O,x,He,w),N=new hv(O,je,x),$=new yv(O,je,x),x.programs=le.programs,S.capabilities=He,S.extensions=je,S.properties=I,S.renderLists=Ee,S.shadowMap=he,S.state=w,S.info=x}ne(),g!==1009&&(v=new wv(g,e.width,e.height,a,n,r));const j=new mM(S,O);this.xr=j,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const E=je.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=je.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(E){E!==void 0&&(de=E,this.setSize(Z,se,!1))},this.getSize=function(E){return E.set(Z,se)},this.setSize=function(E,B,q=!0){if(j.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=E,se=B,e.width=Math.floor(E*de),e.height=Math.floor(B*de),q===!0&&(e.style.width=E+"px",e.style.height=B+"px"),v!==null&&v.setSize(e.width,e.height),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(Z*de,se*de).floor()},this.setDrawingBufferSize=function(E,B,q){Z=E,se=B,de=q,e.width=Math.floor(E*q),e.height=Math.floor(B*q),this.setViewport(0,0,E,B)},this.setEffects=function(E){if(g===1009){Be("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let B=0;B<E.length;B++)if(E[B].isOutputPass===!0){Ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(De)},this.setViewport=function(E,B,q,H){E.isVector4?De.set(E.x,E.y,E.z,E.w):De.set(E,B,q,H),w.viewport(P.copy(De).multiplyScalar(de).round())},this.getScissor=function(E){return E.copy(Re)},this.setScissor=function(E,B,q,H){E.isVector4?Re.set(E.x,E.y,E.z,E.w):Re.set(E,B,q,H),w.scissor(ce.copy(Re).multiplyScalar(de).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(E){w.setScissorTest(Ve=E)},this.setOpaqueSort=function(E){pe=E},this.setTransparentSort=function(E){be=E},this.getClearColor=function(E){return E.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor(...arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha(...arguments)},this.clear=function(E=!0,B=!0,q=!0){let H=0;if(E){let z=!1;if(U!==null){const fe=U.texture.format;z=m.has(fe)}if(z){const fe=U.texture.type,me=_.has(fe),xe=Ie.getClearColor(),we=Ie.getClearAlpha(),Fe=xe.r,$e=xe.g,nt=xe.b;me?(p[0]=Fe,p[1]=$e,p[2]=nt,p[3]=we,O.clearBufferuiv(O.COLOR,0,p)):(y[0]=Fe,y[1]=$e,y[2]=nt,y[3]=we,O.clearBufferiv(O.COLOR,0,y))}else H|=O.COLOR_BUFFER_BIT}B&&(H|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(H|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&O.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),C=E},this.dispose=function(){e.removeEventListener("webglcontextlost",ae,!1),e.removeEventListener("webglcontextrestored",ke,!1),e.removeEventListener("webglcontextcreationerror",re,!1),Ie.dispose(),Ee.dispose(),ie.dispose(),I.dispose(),ee.dispose(),F.dispose(),ge.dispose(),Me.dispose(),le.dispose(),j.dispose(),j.removeEventListener("sessionstart",Kt),j.removeEventListener("sessionend",bt),ut.stop()};function ae(E){E.preventDefault(),nh("WebGLRenderer: Context Lost."),D=!0}function ke(){nh("WebGLRenderer: Context Restored."),D=!1;const E=x.autoReset,B=he.enabled,q=he.autoUpdate,H=he.needsUpdate,z=he.type;ne(),x.autoReset=E,he.enabled=B,he.autoUpdate=q,he.needsUpdate=H,he.type=z}function re(E){Be("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Le(E){const B=E.target;B.removeEventListener("dispose",Le),Ce(B)}function Ce(E){Ge(E),I.remove(E)}function Ge(E){const B=I.get(E).programs;B!==void 0&&(B.forEach(function(q){le.releaseProgram(q)}),E.isShaderMaterial&&le.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,q,H,z,fe){B===null&&(B=vt);const me=z.isMesh&&z.matrixWorld.determinantAffine()<0,xe=Wr(E,B,q,H,z);w.setMaterial(H,me);let we=q.index,Fe=1;if(H.wireframe===!0){if(we=oe.getWireframeAttribute(q),we===void 0)return;Fe=2}const $e=q.drawRange,nt=q.attributes.position;let Ue=$e.start*Fe,Tt=($e.start+$e.count)*Fe;fe!==null&&(Ue=Math.max(Ue,fe.start*Fe),Tt=Math.min(Tt,(fe.start+fe.count)*Fe)),we!==null?(Ue=Math.max(Ue,0),Tt=Math.min(Tt,we.count)):nt!=null&&(Ue=Math.max(Ue,0),Tt=Math.min(Tt,nt.count));const Lt=Tt-Ue;if(Lt<0||Lt===1/0)return;ge.setup(z,H,xe,q,we);let It,ht=N;if(we!==null&&(It=ue.get(we),ht=$,ht.setIndex(It)),z.isMesh)H.wireframe===!0?(w.setLineWidth(H.wireframeLinewidth*Xe()),ht.setMode(O.LINES)):ht.setMode(O.TRIANGLES);else if(z.isLine){let li=H.linewidth;li===void 0&&(li=1),w.setLineWidth(li*Xe()),z.isLineSegments?ht.setMode(O.LINES):z.isLineLoop?ht.setMode(O.LINE_LOOP):ht.setMode(O.LINE_STRIP)}else z.isPoints?ht.setMode(O.POINTS):z.isSprite&&ht.setMode(O.TRIANGLES);if(z.isBatchedMesh)if(je.get("WEBGL_multi_draw"))ht.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const li=z._multiDrawStarts,Pe=z._multiDrawCounts,cn=z._multiDrawCount,dt=we?ue.get(we).bytesPerElement:1,Ji=I.get(H).currentProgram.getUniforms();for(let _n=0;_n<cn;_n++)Ji.setValue(O,"_gl_DrawID",_n),ht.render(li[_n]/dt,Pe[_n])}else if(z.isInstancedMesh)ht.renderInstances(Ue,Lt,z.count);else if(q.isInstancedBufferGeometry){const li=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Pe=Math.min(q.instanceCount,li);ht.renderInstances(Ue,Lt,Pe)}else ht.render(Ue,Lt)};function Bt(E,B,q){E.transparent===!0&&E.side===2&&E.forceSinglePass===!1?(E.side=1,E.needsUpdate=!0,Dt(E,B,q),E.side=0,E.needsUpdate=!0,Dt(E,B,q),E.side=2):Dt(E,B,q)}this.compile=function(E,B,q=null){q===null&&(q=E),b=ie.get(q),b.init(B),A.push(b),q.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),E!==q&&E.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),b.setupLights();const H=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const fe=z.material;if(fe)if(Array.isArray(fe))for(let me=0;me<fe.length;me++){const xe=fe[me];Bt(xe,q,z),H.add(xe)}else Bt(fe,q,z),H.add(fe)}),b=A.pop(),H},this.compileAsync=function(E,B,q=null){const H=this.compile(E,B,q);return new Promise(z=>{function fe(){if(H.forEach(function(me){I.get(me).currentProgram.isReady()&&H.delete(me)}),H.size===0){z(E);return}setTimeout(fe,10)}je.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Ze=null;function wt(E){Ze&&Ze(E)}function Kt(){ut.stop()}function bt(){ut.start()}const ut=new rp;ut.setAnimationLoop(wt),typeof self<"u"&&ut.setContext(self),this.setAnimationLoop=function(E){Ze=E,j.setAnimationLoop(E),E===null?ut.stop():ut.start()},j.addEventListener("sessionstart",Kt),j.addEventListener("sessionend",bt),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){Be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;C!==null&&C.renderStart(E,B);const q=j.enabled===!0&&j.isPresenting===!0,H=v!==null&&(U===null||q)&&v.begin(S,U);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(j.cameraAutoUpdate===!0&&j.updateCamera(B),B=j.getCamera()),E.isScene===!0&&E.onBeforeRender(S,E,B,U),b=ie.get(E,A.length),b.init(B),b.state.textureUnits=X.getTextureUnits(),A.push(b),_t.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ye.setFromProjectionMatrix(_t,Ls,B.reversedDepth),ct=this.localClippingEnabled,ze=Te.init(this.clippingPlanes,ct),M=Ee.get(E,R.length),M.init(),R.push(M),j.enabled===!0&&j.isPresenting===!0){const fe=S.xr.getDepthSensingMesh();fe!==null&&ft(fe,B,-1/0,S.sortObjects)}ft(E,B,0,S.sortObjects),M.finish(),S.sortObjects===!0&&M.sort(pe,be,B.reversedDepth),Mt=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Mt&&Ie.addToRenderList(M,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ze===!0&&Te.beginShadows();const z=b.state.shadowsArray;if(he.render(z,E,B),ze===!0&&Te.endShadows(),(H&&v.hasRenderPass())===!1){const fe=M.opaque,me=M.transmissive;if(b.setupLights(),B.isArrayCamera){const xe=B.cameras;if(me.length>0)for(let we=0,Fe=xe.length;we<Fe;we++){const $e=xe[we];Et(fe,me,E,$e)}Mt&&Ie.render(E);for(let we=0,Fe=xe.length;we<Fe;we++){const $e=xe[we];bi(M,E,$e,$e.viewport)}}else me.length>0&&Et(fe,me,E,B),Mt&&Ie.render(E),bi(M,E,B)}U!==null&&W===0&&(X.updateMultisampleRenderTarget(U),X.updateRenderTargetMipmap(U)),H&&v.end(S),E.isScene===!0&&E.onAfterRender(S,E,B),ge.resetDefaultState(),J=-1,Q=null,A.pop(),A.length>0?(b=A[A.length-1],X.setTextureUnits(b.state.textureUnits),ze===!0&&Te.setGlobalState(S.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?M=R[R.length-1]:M=null,C!==null&&C.renderEnd()};function ft(E,B,q,H){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLightProbeGrid)b.pushLightProbeGrid(E);else if(E.isLight)b.pushLight(E),E.castShadow&&b.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ye.intersectsSprite(E)){H&&Ke.setFromMatrixPosition(E.matrixWorld).applyMatrix4(_t);const fe=F.update(E),me=E.material;me.visible&&M.push(E,fe,me,q,Ke.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ye.intersectsObject(E))){const fe=F.update(E),me=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ke.copy(E.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Ke.copy(fe.boundingSphere.center)),Ke.applyMatrix4(E.matrixWorld).applyMatrix4(_t)),Array.isArray(me)){const xe=fe.groups;for(let we=0,Fe=xe.length;we<Fe;we++){const $e=xe[we],nt=me[$e.materialIndex];nt&&nt.visible&&M.push(E,fe,nt,q,Ke.z,$e)}}else me.visible&&M.push(E,fe,me,q,Ke.z,null)}}const z=E.children;for(let fe=0,me=z.length;fe<me;fe++)ft(z[fe],B,q,H)}function bi(E,B,q,H){const{opaque:z,transmissive:fe,transparent:me}=E;b.setupLightsView(q),ze===!0&&Te.setGlobalState(S.clippingPlanes,q),H&&w.viewport(P.copy(H)),z.length>0&&ei(z,B,q),fe.length>0&&ei(fe,B,q),me.length>0&&ei(me,B,q),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function Et(E,B,q,H){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[H.id]===void 0){const nt=je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[H.id]=new An(1,1,{generateMipmaps:!0,type:nt?zr:cr,minFilter:ou,samples:Math.max(4,He.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace})}const z=b.state.transmissionRenderTarget[H.id],fe=H.viewport||P;z.setSize(fe.z*S.transmissionResolutionScale,fe.w*S.transmissionResolutionScale);const me=S.getRenderTarget(),xe=S.getActiveCubeFace(),we=S.getActiveMipmapLevel();S.setRenderTarget(z),S.getClearColor(rt),Oe=S.getClearAlpha(),Oe<1&&S.setClearColor(16777215,.5),S.clear(),Mt&&Ie.render(q);const Fe=S.toneMapping;S.toneMapping=0;const $e=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),b.setupLightsView(H),ze===!0&&Te.setGlobalState(S.clippingPlanes,H),ei(E,q,H),X.updateMultisampleRenderTarget(z),X.updateRenderTargetMipmap(z),je.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let Ue=0,Tt=B.length;Ue<Tt;Ue++){const{object:Lt,geometry:It,material:ht,group:li}=B[Ue];if(ht.side===2&&Lt.layers.test(H.layers)){const Pe=ht.side;ht.side=1,ht.needsUpdate=!0,Ni(Lt,q,H,It,ht,li),ht.side=Pe,ht.needsUpdate=!0,nt=!0}}nt===!0&&(X.updateMultisampleRenderTarget(z),X.updateRenderTargetMipmap(z))}S.setRenderTarget(me,xe,we),S.setClearColor(rt,Oe),$e!==void 0&&(H.viewport=$e),S.toneMapping=Fe}function ei(E,B,q){const H=B.isScene===!0?B.overrideMaterial:null;for(let z=0,fe=E.length;z<fe;z++){const me=E[z],{object:xe,geometry:we,group:Fe}=me;let $e=me.material;$e.allowOverride===!0&&H!==null&&($e=H),xe.layers.test(q.layers)&&Ni(xe,B,q,we,$e,Fe)}}function Ni(E,B,q,H,z,fe){E.onBeforeRender(S,B,q,H,z,fe),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(S,B,q,H,E,fe),z.transparent===!0&&z.side===2&&z.forceSinglePass===!1?(z.side=1,z.needsUpdate=!0,S.renderBufferDirect(q,B,H,z,E,fe),z.side=0,z.needsUpdate=!0,S.renderBufferDirect(q,B,H,z,E,fe),z.side=2):S.renderBufferDirect(q,B,H,z,E,fe),E.onAfterRender(S,B,q,H,z,fe)}function Dt(E,B,q){B.isScene!==!0&&(B=vt);const H=I.get(E),z=b.state.lights,fe=b.state.shadowsArray,me=z.state.version,xe=le.getParameters(E,z.state,fe,B,q,b.state.lightProbeGridArray),we=le.getProgramCacheKey(xe);let Fe=H.programs;H.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?B.environment:null,H.fog=B.fog;const $e=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;H.envMap=ee.get(E.envMap||H.environment,$e),H.envMapRotation=H.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,Fe===void 0&&(E.addEventListener("dispose",Le),Fe=new Map,H.programs=Fe);let nt=Fe.get(we);if(nt!==void 0){if(H.currentProgram===nt&&H.lightsStateVersion===me)return Zt(E,xe),nt}else xe.uniforms=le.getUniforms(E),C!==null&&E.isNodeMaterial&&C.build(E,q,xe),E.onBeforeCompile(xe,S),nt=le.acquireProgram(xe,we),Fe.set(we,nt),H.uniforms=xe.uniforms;const Ue=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ue.clippingPlanes=Te.uniform),Zt(E,xe),H.needsLights=zt(E),H.lightsStateVersion=me,H.needsLights&&(Ue.ambientLightColor.value=z.state.ambient,Ue.lightProbe.value=z.state.probe,Ue.directionalLights.value=z.state.directional,Ue.directionalLightShadows.value=z.state.directionalShadow,Ue.spotLights.value=z.state.spot,Ue.spotLightShadows.value=z.state.spotShadow,Ue.rectAreaLights.value=z.state.rectArea,Ue.ltc_1.value=z.state.rectAreaLTC1,Ue.ltc_2.value=z.state.rectAreaLTC2,Ue.pointLights.value=z.state.point,Ue.pointLightShadows.value=z.state.pointShadow,Ue.hemisphereLights.value=z.state.hemi,Ue.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ue.spotLightMatrix.value=z.state.spotLightMatrix,Ue.spotLightMap.value=z.state.spotLightMap,Ue.pointShadowMatrix.value=z.state.pointShadowMatrix),H.lightProbeGrid=b.state.lightProbeGridArray.length>0,H.currentProgram=nt,H.uniformsList=null,nt}function Wt(E){if(E.uniformsList===null){const B=E.currentProgram.getUniforms();E.uniformsList=Uo.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function Zt(E,B){const q=I.get(E);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.batchingColor=B.batchingColor,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function Pn(E,B){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;T.setFromMatrixPosition(B.matrixWorld);for(let q=0,H=E.length;q<H;q++){const z=E[q];if(z.texture!==null&&z.boundingBox.containsPoint(T))return z}return null}function Wr(E,B,q,H,z){B.isScene!==!0&&(B=vt),X.resetTextureUnits();const fe=B.fog,me=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?B.environment:null,xe=U===null?S.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:ot.workingColorSpace,we=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Fe=ee.get(H.envMap||me,we),$e=H.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,nt=!!q.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ue=!!q.morphAttributes.position,Tt=!!q.morphAttributes.normal,Lt=!!q.morphAttributes.color;let It=0;H.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(It=S.toneMapping);const ht=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,li=ht!==void 0?ht.length:0,Pe=I.get(H),cn=b.state.lights;if(ze===!0&&(ct===!0||E!==Q)){const gt=E===Q&&H.id===J;Te.setState(H,E,gt)}let dt=!1;H.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==cn.state.version||Pe.outputColorSpace!==xe||z.isBatchedMesh&&Pe.batching===!1||!z.isBatchedMesh&&Pe.batching===!0||z.isBatchedMesh&&Pe.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Pe.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Pe.instancing===!1||!z.isInstancedMesh&&Pe.instancing===!0||z.isSkinnedMesh&&Pe.skinning===!1||!z.isSkinnedMesh&&Pe.skinning===!0||z.isInstancedMesh&&Pe.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Pe.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Pe.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Pe.instancingMorph===!1&&z.morphTexture!==null||Pe.envMap!==Fe||H.fog===!0&&Pe.fog!==fe||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==Te.numPlanes||Pe.numIntersection!==Te.numIntersection)||Pe.vertexAlphas!==$e||Pe.vertexTangents!==nt||Pe.morphTargets!==Ue||Pe.morphNormals!==Tt||Pe.morphColors!==Lt||Pe.toneMapping!==It||Pe.morphTargetsCount!==li||!!Pe.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(dt=!0):(dt=!0,Pe.__version=H.version);let Ji=Pe.currentProgram;dt===!0&&(Ji=Dt(H,B,z),C&&H.isNodeMaterial&&C.onUpdateProgram(H,Ji,Pe));let _n=!1,Xn=!1,Xr=!1;const xt=Ji.getUniforms(),kt=Pe.uniforms;if(w.useProgram(Ji.program)&&(_n=!0,Xn=!0,Xr=!0),H.id!==J&&(J=H.id,Xn=!0),Pe.needsLights){const gt=Pn(b.state.lightProbeGridArray,z);Pe.lightProbeGrid!==gt&&(Pe.lightProbeGrid=gt,Xn=!0)}if(_n||Q!==E){w.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),xt.setValue(O,"projectionMatrix",E.projectionMatrix),xt.setValue(O,"viewMatrix",E.matrixWorldInverse);const gt=xt.map.cameraPosition;gt!==void 0&&gt.setValue(O,K.setFromMatrixPosition(E.matrixWorld)),He.logarithmicDepthBuffer&&xt.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&xt.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),Q!==E&&(Q=E,Xn=!0,Xr=!0)}if(Pe.needsLights&&(cn.state.directionalShadowMap.length>0&&xt.setValue(O,"directionalShadowMap",cn.state.directionalShadowMap,X),cn.state.spotShadowMap.length>0&&xt.setValue(O,"spotShadowMap",cn.state.spotShadowMap,X),cn.state.pointShadowMap.length>0&&xt.setValue(O,"pointShadowMap",cn.state.pointShadowMap,X)),z.isSkinnedMesh){xt.setOptional(O,z,"bindMatrix"),xt.setOptional(O,z,"bindMatrixInverse");const gt=z.skeleton;gt&&(gt.boneTexture===null&&gt.computeBoneTexture(),xt.setValue(O,"boneTexture",gt.boneTexture,X))}z.isBatchedMesh&&(xt.setOptional(O,z,"batchingTexture"),xt.setValue(O,"batchingTexture",z._matricesTexture,X),xt.setOptional(O,z,"batchingIdTexture"),xt.setValue(O,"batchingIdTexture",z._indirectTexture,X),xt.setOptional(O,z,"batchingColorTexture"),z._colorsTexture!==null&&xt.setValue(O,"batchingColorTexture",z._colorsTexture,X));const Yn=q.morphAttributes;if((Yn.position!==void 0||Yn.normal!==void 0||Yn.color!==void 0)&&We.update(z,q,Ji),(Xn||Pe.receiveShadow!==z.receiveShadow)&&(Pe.receiveShadow=z.receiveShadow,xt.setValue(O,"receiveShadow",z.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&B.environment!==null&&(kt.envMapIntensity.value=B.environmentIntensity),kt.dfgLUT!==void 0&&(kt.dfgLUT.value=xM()),Xn){if(xt.setValue(O,"toneMappingExposure",S.toneMappingExposure),Pe.needsLights&&ti(kt,Xr),fe&&H.fog===!0&&ve.refreshFogUniforms(kt,fe),ve.refreshMaterialUniforms(kt,H,de,se,b.state.transmissionRenderTarget[E.id]),Pe.needsLights&&Pe.lightProbeGrid){const gt=Pe.lightProbeGrid;kt.probesSH.value=gt.texture,kt.probesMin.value.copy(gt.boundingBox.min),kt.probesMax.value.copy(gt.boundingBox.max),kt.probesResolution.value.copy(gt.resolution)}Uo.upload(O,Wt(Pe),kt,X)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Uo.upload(O,Wt(Pe),kt,X),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&xt.setValue(O,"center",z.center),xt.setValue(O,"modelViewMatrix",z.modelViewMatrix),xt.setValue(O,"normalMatrix",z.normalMatrix),xt.setValue(O,"modelMatrix",z.matrixWorld),H.uniformsGroups!==void 0){const gt=H.uniformsGroups;for(let Bs=0,Yr=gt.length;Bs<Yr;Bs++){const pu=gt[Bs];Me.update(pu,Ji),Me.bind(pu,Ji)}}return Ji}function ti(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function zt(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(E,B,q){const H=I.get(E);H.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),I.get(E.texture).__webglTexture=B,I.get(E.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:q,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,B){const q=I.get(E);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,q=0){U=E,V=B,W=q;let H=null,z=!1,fe=!1;if(E){const me=I.get(E);if(me.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(O.FRAMEBUFFER,me.__webglFramebuffer),P.copy(E.viewport),ce.copy(E.scissor),Se=E.scissorTest,w.viewport(P),w.scissor(ce),w.setScissorTest(Se),J=-1;return}else if(me.__webglFramebuffer===void 0)X.setupRenderTarget(E);else if(me.__hasExternalTextures)X.rebindTextures(E,I.get(E.texture).__webglTexture,I.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Fe=E.depthTexture;if(me.__boundDepthTexture!==Fe){if(Fe!==null&&I.has(Fe)&&(E.width!==Fe.image.width||E.height!==Fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(E)}}const xe=E.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(fe=!0);const we=I.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(we[B])?H=we[B][q]:H=we[B],z=!0):E.samples>0&&X.useMultisampledRTT(E)===!1?H=I.get(E).__webglMultisampledFramebuffer:Array.isArray(we)?H=we[q]:H=we,P.copy(E.viewport),ce.copy(E.scissor),Se=E.scissorTest}else P.copy(De).multiplyScalar(de).floor(),ce.copy(Re).multiplyScalar(de).floor(),Se=Ve;if(q!==0&&(H=L),w.bindFramebuffer(O.FRAMEBUFFER,H)&&w.drawBuffers(E,H),w.viewport(P),w.scissor(ce),w.setScissorTest(Se),z){const me=I.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+B,me.__webglTexture,q)}else if(fe){const me=B;for(let xe=0;xe<E.textures.length;xe++){const we=I.get(E.textures[xe]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+xe,we.__webglTexture,q,me)}}else if(E!==null&&q!==0){const me=I.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,me.__webglTexture,q)}J=-1},this.readRenderTargetPixels=function(E,B,q,H,z,fe,me,xe=0){if(!(E&&E.isWebGLRenderTarget)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=I.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&me!==void 0&&(we=we[me]),we){w.bindFramebuffer(O.FRAMEBUFFER,we);try{const Fe=E.textures[xe],$e=Fe.format,nt=Fe.type;if(E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+xe),!He.textureFormatReadable($e)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(nt)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-H&&q>=0&&q<=E.height-z&&O.readPixels(B,q,H,z,te.convert($e),te.convert(nt),fe)}finally{const Fe=U!==null?I.get(U).__webglFramebuffer:null;w.bindFramebuffer(O.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(E,B,q,H,z,fe,me,xe=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=I.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&me!==void 0&&(we=we[me]),we)if(B>=0&&B<=E.width-H&&q>=0&&q<=E.height-z){w.bindFramebuffer(O.FRAMEBUFFER,we);const Fe=E.textures[xe],$e=Fe.format,nt=Fe.type;if(E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+xe),!He.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ue=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Ue),O.bufferData(O.PIXEL_PACK_BUFFER,fe.byteLength,O.STREAM_READ),O.readPixels(B,q,H,z,te.convert($e),te.convert(nt),0);const Tt=U!==null?I.get(U).__webglFramebuffer:null;w.bindFramebuffer(O.FRAMEBUFFER,Tt);const Lt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await q_(O,Lt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Ue),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,fe),O.deleteBuffer(Ue),O.deleteSync(Lt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,B=null,q=0){const H=Math.pow(2,-q),z=Math.floor(E.image.width*H),fe=Math.floor(E.image.height*H),me=B!==null?B.x:0,xe=B!==null?B.y:0;X.setTexture2D(E,0),O.copyTexSubImage2D(O.TEXTURE_2D,q,0,0,me,xe,z,fe),w.unbindTexture()},this.copyTextureToTexture=function(E,B,q=null,H=null,z=0,fe=0){let me,xe,we,Fe,$e,nt,Ue,Tt,Lt;const It=E.isCompressedTexture?E.mipmaps[fe]:E.image;if(q!==null)me=q.max.x-q.min.x,xe=q.max.y-q.min.y,we=q.isBox3?q.max.z-q.min.z:1,Fe=q.min.x,$e=q.min.y,nt=q.isBox3?q.min.z:0;else{const kt=Math.pow(2,-z);me=Math.floor(It.width*kt),xe=Math.floor(It.height*kt),E.isDataArrayTexture?we=It.depth:E.isData3DTexture?we=Math.floor(It.depth*kt):we=1,Fe=0,$e=0,nt=0}H!==null?(Ue=H.x,Tt=H.y,Lt=H.z):(Ue=0,Tt=0,Lt=0);const ht=te.convert(B.format),li=te.convert(B.type);let Pe;B.isData3DTexture?(X.setTexture3D(B,0),Pe=O.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(X.setTexture2DArray(B,0),Pe=O.TEXTURE_2D_ARRAY):(X.setTexture2D(B,0),Pe=O.TEXTURE_2D),w.activeTexture(O.TEXTURE0),w.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,B.flipY),w.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),w.pixelStorei(O.UNPACK_ALIGNMENT,B.unpackAlignment);const cn=w.getParameter(O.UNPACK_ROW_LENGTH),dt=w.getParameter(O.UNPACK_IMAGE_HEIGHT),Ji=w.getParameter(O.UNPACK_SKIP_PIXELS),_n=w.getParameter(O.UNPACK_SKIP_ROWS),Xn=w.getParameter(O.UNPACK_SKIP_IMAGES);w.pixelStorei(O.UNPACK_ROW_LENGTH,It.width),w.pixelStorei(O.UNPACK_IMAGE_HEIGHT,It.height),w.pixelStorei(O.UNPACK_SKIP_PIXELS,Fe),w.pixelStorei(O.UNPACK_SKIP_ROWS,$e),w.pixelStorei(O.UNPACK_SKIP_IMAGES,nt);const Xr=E.isDataArrayTexture||E.isData3DTexture,xt=B.isDataArrayTexture||B.isData3DTexture;if(E.isDepthTexture){const kt=I.get(E),Yn=I.get(B),gt=I.get(kt.__renderTarget),Bs=I.get(Yn.__renderTarget);w.bindFramebuffer(O.READ_FRAMEBUFFER,gt.__webglFramebuffer),w.bindFramebuffer(O.DRAW_FRAMEBUFFER,Bs.__webglFramebuffer);for(let Yr=0;Yr<we;Yr++)Xr&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,I.get(E).__webglTexture,z,nt+Yr),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,I.get(B).__webglTexture,fe,Lt+Yr)),O.blitFramebuffer(Fe,$e,me,xe,Ue,Tt,me,xe,O.DEPTH_BUFFER_BIT,O.NEAREST);w.bindFramebuffer(O.READ_FRAMEBUFFER,null),w.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(z!==0||E.isRenderTargetTexture||I.has(E)){const kt=I.get(E),Yn=I.get(B);w.bindFramebuffer(O.READ_FRAMEBUFFER,Y),w.bindFramebuffer(O.DRAW_FRAMEBUFFER,k);for(let gt=0;gt<we;gt++)Xr?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,kt.__webglTexture,z,nt+gt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,kt.__webglTexture,z),xt?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Yn.__webglTexture,fe,Lt+gt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Yn.__webglTexture,fe),z!==0?O.blitFramebuffer(Fe,$e,me,xe,Ue,Tt,me,xe,O.COLOR_BUFFER_BIT,O.NEAREST):xt?O.copyTexSubImage3D(Pe,fe,Ue,Tt,Lt+gt,Fe,$e,me,xe):O.copyTexSubImage2D(Pe,fe,Ue,Tt,Fe,$e,me,xe);w.bindFramebuffer(O.READ_FRAMEBUFFER,null),w.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else xt?E.isDataTexture||E.isData3DTexture?O.texSubImage3D(Pe,fe,Ue,Tt,Lt,me,xe,we,ht,li,It.data):B.isCompressedArrayTexture?O.compressedTexSubImage3D(Pe,fe,Ue,Tt,Lt,me,xe,we,ht,It.data):O.texSubImage3D(Pe,fe,Ue,Tt,Lt,me,xe,we,ht,li,It):E.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,fe,Ue,Tt,me,xe,ht,li,It.data):E.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,fe,Ue,Tt,It.width,It.height,ht,It.data):O.texSubImage2D(O.TEXTURE_2D,fe,Ue,Tt,me,xe,ht,li,It);w.pixelStorei(O.UNPACK_ROW_LENGTH,cn),w.pixelStorei(O.UNPACK_IMAGE_HEIGHT,dt),w.pixelStorei(O.UNPACK_SKIP_PIXELS,Ji),w.pixelStorei(O.UNPACK_SKIP_ROWS,_n),w.pixelStorei(O.UNPACK_SKIP_IMAGES,Xn),fe===0&&B.generateMipmaps&&O.generateMipmap(Pe),w.unbindTexture()},this.initRenderTarget=function(E){I.get(E).__webglFramebuffer===void 0&&X.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?X.setTextureCube(E,0):E.isData3DTexture?X.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?X.setTexture2DArray(E,0):X.setTexture2D(E,0),w.unbindTexture()},this.resetState=function(){V=0,W=0,U=null,w.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ls}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(t),e.unpackColorSpace=ot._getUnpackColorSpace()}};Go.registerPlugin(it);var yM=1.5,tc=120;function jh(t,e,i){const r=new Float32Array(288);for(let a=0;a<96;a+=1){const o=a/96*Math.PI*2;r[a*3]=Math.cos(o)*t,r[a*3+1]=Math.sin(o)*t,r[a*3+2]=0}const s=new $i;return s.setAttribute("position",new ln(r,3)),new xg(s,new Hd({color:e,transparent:!0,opacity:i}))}function EM(){const t=new Float32Array(tc*3);for(let i=0;i<tc;i+=1){const n=2.8+i*37%100/46,r=i*2.399963,s=Math.acos(1-2*(i+.5)/tc);t[i*3]=n*Math.sin(s)*Math.cos(r),t[i*3+1]=n*Math.cos(s)*.72,t[i*3+2]=n*Math.sin(s)*Math.sin(r)}const e=new $i;return e.setAttribute("position",new ln(t,3)),new Sg(e,new Wd({color:8246268,size:.035,transparent:!0,opacity:.62,blending:2,depthWrite:!1}))}function WM(t){const e=t.querySelector("[data-signal-canvas]");if(!e)throw new Error("Signal Observatory canvas mount is missing");const i=new cg,n=new rn(34,1,.1,100);n.position.set(0,0,8.5);const r=new SM({alpha:!0,antialias:!0,powerPreference:"high-performance"});r.outputColorSpace=nn,r.toneMapping=4,r.toneMappingExposure=1.15,r.setClearColor(new Qe(132631),0),r.domElement.setAttribute("aria-hidden","true"),r.domElement.tabIndex=-1,e.append(r.domElement),i.add(new qg(9684477,1.4));const s=new Rh(16777215,4.8);s.position.set(3,4,6),i.add(s);const a=new Rh(2282478,3.4);a.position.set(-4,-1,3),i.add(a);const o=new ra,l=new Tg(1.45,2),c=new Eh({color:1516884,emissive:465738,emissiveIntensity:1.2,metalness:.62,roughness:.23,clearcoat:1,clearcoatRoughness:.18}),u=new pn(l,c);u.rotation.set(-.28,.56,.18),o.add(u);const d=new bg(1.78,.018,8,128),h=new Eh({color:6333946,emissive:2450411,emissiveIntensity:2.1,transparent:!0,opacity:.78}),f=new pn(d,h);f.rotation.x=1.1,o.add(f);const g=jh(2.34,2282478,.46);g.rotation.set(1.12,.24,-.34),o.add(g);const m=jh(2.68,3900150,.34);m.rotation.set(.45,1.04,.2),o.add(m);const _=EM();o.add(_),i.add(o);let p=!0,y=!0;const T=()=>{!p||!y||document.hidden||r.render(i,n)},M=()=>{const{width:C,height:L}=e.getBoundingClientRect();if(C<=0||L<=0)return;const Y=Math.min(window.devicePixelRatio||1,yM);r.setPixelRatio(Y),r.setSize(C,L,!1),n.aspect=C/L,n.updateProjectionMatrix(),T()},b=new ResizeObserver(M);b.observe(e);const R=new IntersectionObserver(C=>{p=C.some(L=>L.isIntersecting),p&&T()});R.observe(t);const A=()=>T(),v=C=>{C.preventDefault(),y=!1},S=()=>{y=!0,M()};document.addEventListener("visibilitychange",A),r.domElement.addEventListener("webglcontextlost",v),r.domElement.addEventListener("webglcontextrestored",S);const D=Go.context(()=>{Go.timeline({scrollTrigger:{trigger:document.documentElement,start:"top top",end:"bottom bottom",scrub:.7,onUpdate:T},defaults:{ease:"none",onUpdate:T}}).to(u.rotation,{x:.32,y:1.5,z:-.08,duration:1},0).to(g.rotation,{x:2.2,y:.7,z:.48,duration:1},0).to(m.rotation,{x:1.15,y:2.25,z:-.42,duration:1},0).to(_.rotation,{y:Math.PI*.8,x:.34,duration:1},0).to(o.position,{y:-.34,duration:.45},.25).to(o.scale,{x:.86,y:.86,z:.86,duration:.3},.5).to(o.scale,{x:1.08,y:1.08,z:1.08,duration:.2},.8)},t);return M(),it.refresh(),()=>{D.revert(),b.disconnect(),R.disconnect(),document.removeEventListener("visibilitychange",A),r.domElement.removeEventListener("webglcontextlost",v),r.domElement.removeEventListener("webglcontextrestored",S),l.dispose(),c.dispose(),d.dispose(),h.dispose(),g.geometry.dispose(),g.material.dispose(),m.geometry.dispose(),m.material.dispose(),_.geometry.dispose(),_.material.dispose(),r.dispose(),r.domElement.remove()}}export{WM as mountSignalObservatory};
