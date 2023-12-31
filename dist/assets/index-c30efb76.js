var qm=Object.defineProperty;var jm=(a,e,t)=>e in a?qm(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var Ku=(a,e,t)=>(jm(a,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fu="151",Jr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Qr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ym=0,$u=1,Km=2,Md=1,Sd=2,Mo=3,ki=0,vn=1,pi=2,or=0,Ds=1,Zu=2,Ju=3,Qu=4,$m=5,Ss=100,Zm=101,Jm=102,eh=103,th=104,Qm=200,eg=201,tg=202,ng=203,bd=204,wd=205,ig=206,rg=207,sg=208,og=209,ag=210,lg=0,cg=1,ug=2,Ec=3,hg=4,fg=5,dg=6,pg=7,Td=0,mg=1,gg=2,Ni=0,_g=1,xg=2,Ad=3,vg=4,yg=5,Ed=300,Gs=301,Ws=302,Cc=303,Lc=304,gl=306,Xs=1e3,jn=1001,tl=1002,Nt=1003,Rc=1004,Ha=1005,tn=1006,Cd=1007,Br=1008,Vr=1009,Mg=1010,Sg=1011,Ld=1012,bg=1013,Lr=1014,Ji=1015,Ho=1016,wg=1017,Tg=1018,Is=1020,Ag=1021,Yn=1023,Eg=1024,Cg=1025,Dr=1026,qs=1027,Lg=1028,Rg=1029,Pg=1030,Dg=1031,Ig=1033,Rl=33776,Pl=33777,Dl=33778,Il=33779,nh=35840,ih=35841,rh=35842,sh=35843,Og=36196,oh=37492,ah=37496,lh=37808,ch=37809,uh=37810,hh=37811,fh=37812,dh=37813,ph=37814,mh=37815,gh=37816,_h=37817,xh=37818,vh=37819,yh=37820,Mh=37821,Ol=36492,Ng=36283,Sh=36284,bh=36285,wh=36286,Ug=2200,Fg=2201,kg=2202,Go=2300,js=2301,Nl=2302,Ts=2400,As=2401,nl=2402,du=2500,zg=2501,Bg=0,Rd=1,Pc=2,Hr=3e3,ct=3001,Vg=3200,Hg=3201,Pd=0,Gg=1,Wn="srgb",Ys="srgb-linear",Dd="display-p3",Ul=7680,Wg=519,Dc=35044,Th="300 es",Ic=1035;class dr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ah=1234567;const Co=Math.PI/180,Ks=180/Math.PI;function li(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Zt[a&255]+Zt[a>>8&255]+Zt[a>>16&255]+Zt[a>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]).toLowerCase()}function qt(a,e,t){return Math.max(e,Math.min(t,a))}function pu(a,e){return(a%e+e)%e}function Xg(a,e,t,n,i){return n+(a-e)*(i-n)/(t-e)}function qg(a,e,t){return a!==e?(t-a)/(e-a):0}function Lo(a,e,t){return(1-t)*a+t*e}function jg(a,e,t,n){return Lo(a,e,1-Math.exp(-t*n))}function Yg(a,e=1){return e-Math.abs(pu(a,e*2)-e)}function Kg(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function $g(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function Zg(a,e){return a+Math.floor(Math.random()*(e-a+1))}function Jg(a,e){return a+Math.random()*(e-a)}function Qg(a){return a*(.5-Math.random())}function e_(a){a!==void 0&&(Ah=a);let e=Ah+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function t_(a){return a*Co}function n_(a){return a*Ks}function Oc(a){return(a&a-1)===0&&a!==0}function Id(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function Od(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function i_(a,e,t,n,i){const r=Math.cos,s=Math.sin,o=r(t/2),l=s(t/2),c=r((e+n)/2),u=s((e+n)/2),h=r((e-n)/2),f=s((e-n)/2),d=r((n-e)/2),g=s((n-e)/2);switch(i){case"XYX":a.set(o*u,l*h,l*f,o*c);break;case"YZY":a.set(l*f,o*u,l*h,o*c);break;case"ZXZ":a.set(l*h,l*f,o*u,o*c);break;case"XZX":a.set(o*u,l*g,l*d,o*c);break;case"YXY":a.set(l*d,o*u,l*g,o*c);break;case"ZYZ":a.set(l*g,l*d,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Di(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function mt(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const r_={DEG2RAD:Co,RAD2DEG:Ks,generateUUID:li,clamp:qt,euclideanModulo:pu,mapLinear:Xg,inverseLerp:qg,lerp:Lo,damp:jg,pingpong:Yg,smoothstep:Kg,smootherstep:$g,randInt:Zg,randFloat:Jg,randFloatSpread:Qg,seededRandom:e_,degToRad:t_,radToDeg:n_,isPowerOfTwo:Oc,ceilPowerOfTwo:Id,floorPowerOfTwo:Od,setQuaternionFromProperEuler:i_,normalize:mt,denormalize:Di};class He{constructor(e=0,t=0){He.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*n-s*i+e.x,this.y=r*i+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class it{constructor(){it.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,s,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],S=i[1],y=i[4],x=i[7],M=i[2],E=i[5],A=i[8];return r[0]=s*_+o*S+l*M,r[3]=s*m+o*y+l*E,r[6]=s*p+o*x+l*A,r[1]=c*_+u*S+h*M,r[4]=c*m+u*y+h*E,r[7]=c*p+u*x+h*A,r[2]=f*_+d*S+g*M,r[5]=f*m+d*y+g*E,r[8]=f*p+d*x+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*o*c-n*r*u+n*o*l+i*r*c-i*s*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*s-o*c,f=o*l-u*r,d=c*r-s*l,g=t*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*s)*_,e[3]=f*_,e[4]=(u*t-i*l)*_,e[5]=(i*r-o*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(s*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,s,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*s+c*o)+s+e,-i*c,i*l,-i*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Fl.makeScale(e,t)),this}rotate(e){return this.premultiply(Fl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fl.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fl=new it;function Nd(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Wo(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Os(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function kl(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const s_=new it().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),o_=new it().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function a_(a){return a.convertSRGBToLinear().applyMatrix3(o_)}function l_(a){return a.applyMatrix3(s_).convertLinearToSRGB()}const c_={[Ys]:a=>a,[Wn]:a=>a.convertSRGBToLinear(),[Dd]:a_},u_={[Ys]:a=>a,[Wn]:a=>a.convertLinearToSRGB(),[Dd]:l_},En={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(a){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!a},get workingColorSpace(){return Ys},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,e,t){if(this.enabled===!1||e===t||!e||!t)return a;const n=c_[e],i=u_[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(a))},fromWorkingColorSpace:function(a,e){return this.convert(a,this.workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this.workingColorSpace)}};let es;class Ud{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{es===void 0&&(es=Wo("canvas")),es.width=e.width,es.height=e.height;const n=es.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=es}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Wo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=Os(r[s]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Os(t[n]/255)*255):t[n]=Os(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Fd{constructor(e=null){this.isSource=!0,this.uuid=li(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,o=i.length;s<o;s++)i[s].isDataTexture?r.push(zl(i[s].image)):r.push(zl(i[s]))}else r=zl(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function zl(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Ud.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let h_=0;class Gt extends dr{constructor(e=Gt.DEFAULT_IMAGE,t=Gt.DEFAULT_MAPPING,n=jn,i=jn,r=tn,s=Br,o=Yn,l=Vr,c=Gt.DEFAULT_ANISOTROPY,u=Hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:h_++}),this.uuid=li(),this.name="",this.source=new Fd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ed)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xs:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case tl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xs:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case tl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=Ed;Gt.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,n=0,i=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*t+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*t+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*t+s[7]*n+s[11]*i+s[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,x=(d+1)/2,M=(p+1)/2,E=(u+f)/4,A=(h+_)/4,R=(g+m)/4;return y>x&&y>M?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=E/n,r=A/n):x>M?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=E/i,r=R/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=A/r,i=R/r),this.set(n,i,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(h-_)/S,this.z=(f-u)/S,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gr extends dr{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Gt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:tn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Fd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kd extends Gt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class f_ extends Gt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,s,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[s+0],d=r[s+1],g=r[s+2],_=r[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=1-o;const p=l*f+c*d+u*g+h*_,S=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const M=Math.sqrt(y),E=Math.atan2(M,p*S);m=Math.sin(m*E)/M,o=Math.sin(o*E)/M}const x=o*S;if(l=l*m+f*x,c=c*m+d*x,u=u*m+g*x,h=h*m+_*x,m===1-o){const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,s){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[s],f=r[s+1],d=r[s+2],g=r[s+3];return e[t]=o*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-o*d,e[t+2]=c*g+u*d+o*f-l*h,e[t+3]=u*g-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(r/2),f=l(n/2),d=l(i/2),g=l(r/2);switch(s){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],s=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(s-i)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+s)/d,this._z=(r+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(r-c)/d,this._x=(i+s)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(s-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,s=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+s*o+i*c-r*l,this._y=i*u+s*l+r*o-n*c,this._z=r*u+s*c+n*l-i*o,this._w=s*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,s=this._w;let o=s*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*s+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=s*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Eh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Eh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,s=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,s=e.y,o=e.z,l=e.w,c=l*t+s*i-o*n,u=l*n+o*t-r*i,h=l*i+r*n-s*t,f=-r*t-s*n-o*i;return this.x=c*l+f*-r+u*-o-h*-s,this.y=u*l+f*-s+h*-r-c*-o,this.z=h*l+f*-o+c*-s-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,s=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*s-n*l,this.z=n*o-i*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Bl.copy(this).projectOnVector(e),this.sub(Bl)}reflect(e){return this.sub(Bl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bl=new U,Eh=new Fn;class Vi{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),ts.copy(e.boundingBox),ts.applyMatrix4(e.matrixWorld),this.union(ts);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const r=i.attributes.position;for(let s=0,o=r.count;s<o;s++)bi.fromBufferAttribute(r,s).applyMatrix4(e.matrixWorld),this.expandByPoint(bi)}else i.boundingBox===null&&i.computeBoundingBox(),ts.copy(i.boundingBox),ts.applyMatrix4(e.matrixWorld),this.union(ts)}const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lo),ra.subVectors(this.max,lo),ns.subVectors(e.a,lo),is.subVectors(e.b,lo),rs.subVectors(e.c,lo),Wi.subVectors(is,ns),Xi.subVectors(rs,is),xr.subVectors(ns,rs);let t=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-xr.z,xr.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,xr.z,0,-xr.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-xr.y,xr.x,0];return!Vl(t,ns,is,rs,ra)||(t=[1,0,0,0,1,0,0,0,1],!Vl(t,ns,is,rs,ra))?!1:(sa.crossVectors(Wi,Xi),t=[sa.x,sa.y,sa.z],Vl(t,ns,is,rs,ra))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Si=[new U,new U,new U,new U,new U,new U,new U,new U],bi=new U,ts=new Vi,ns=new U,is=new U,rs=new U,Wi=new U,Xi=new U,xr=new U,lo=new U,ra=new U,sa=new U,vr=new U;function Vl(a,e,t,n,i){for(let r=0,s=a.length-3;r<=s;r+=3){vr.fromArray(a,r);const o=i.x*Math.abs(vr.x)+i.y*Math.abs(vr.y)+i.z*Math.abs(vr.z),l=e.dot(vr),c=t.dot(vr),u=n.dot(vr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const d_=new Vi,co=new U,Hl=new U;class Hi{constructor(e=new U,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):d_.setFromPoints(e).getCenter(n);let i=0;for(let r=0,s=e.length;r<s;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;co.subVectors(e,this.center);const t=co.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(co,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(co.copy(e.center).add(Hl)),this.expandByPoint(co.copy(e.center).sub(Hl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wi=new U,Gl=new U,oa=new U,qi=new U,Wl=new U,aa=new U,Xl=new U;class mu{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,t),wi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Gl.copy(e).add(t).multiplyScalar(.5),oa.copy(t).sub(e).normalize(),qi.copy(this.origin).sub(Gl);const r=e.distanceTo(t)*.5,s=-this.direction.dot(oa),o=qi.dot(this.direction),l=-qi.dot(oa),c=qi.lengthSq(),u=Math.abs(1-s*s);let h,f,d,g;if(u>0)if(h=s*l-o,f=s*o-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+s*f+2*o)+f*(s*h+f+2*l)+c}else f=r,h=Math.max(0,-(s*f+o)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(s*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-s*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(s*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=s>0?-r:r,h=Math.max(0,-(s*f+o)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Gl).addScaledVector(oa,f),d}intersectSphere(e,t){wi.subVectors(e.center,this.origin);const n=wi.dot(this.direction),i=wi.dot(wi)-n*n,r=e.radius*e.radius;if(i>r)return null;const s=Math.sqrt(r-i),o=n-s,l=n+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,s=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,s=(e.min.y-f.y)*u),n>s||r>i||((r>n||isNaN(n))&&(n=r),(s<i||isNaN(i))&&(i=s),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,t,n,i,r){Wl.subVectors(t,e),aa.subVectors(n,e),Xl.crossVectors(Wl,aa);let s=this.direction.dot(Xl),o;if(s>0){if(i)return null;o=1}else if(s<0)o=-1,s=-s;else return null;qi.subVectors(this.origin,e);const l=o*this.direction.dot(aa.crossVectors(qi,aa));if(l<0)return null;const c=o*this.direction.dot(Wl.cross(qi));if(c<0||l+c>s)return null;const u=-o*qi.dot(Xl);return u<0?null:this.at(u/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class et{constructor(){et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,s,o,l,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=s,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new et().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ss.setFromMatrixColumn(e,0).length(),r=1/ss.setFromMatrixColumn(e,1).length(),s=1/ss.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,s=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=s*u,d=s*h,g=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=s*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*o,t[4]=g*o-d,t[8]=s*c,t[1]=s*h,t[5]=s*u,t[9]=-o,t[2]=d*o-g,t[6]=_+f*o,t[10]=s*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*o,t[4]=-s*h,t[8]=g+d*o,t[1]=d+g*o,t[5]=s*u,t[9]=_-f*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const f=s*u,d=s*h,g=o*u,_=o*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const f=s*l,d=s*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=s*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=s*l,d=s*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=s*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=o*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(p_,e,m_)}lookAt(e,t,n){const i=this.elements;return Cn.subVectors(e,t),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),ji.crossVectors(n,Cn),ji.lengthSq()===0&&(Math.abs(n.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),ji.crossVectors(n,Cn)),ji.normalize(),la.crossVectors(Cn,ji),i[0]=ji.x,i[4]=la.x,i[8]=Cn.x,i[1]=ji.y,i[5]=la.y,i[9]=Cn.y,i[2]=ji.z,i[6]=la.z,i[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],S=n[3],y=n[7],x=n[11],M=n[15],E=i[0],A=i[4],R=i[8],v=i[12],b=i[1],V=i[5],O=i[9],I=i[13],N=i[2],z=i[6],$=i[10],X=i[14],G=i[3],ee=i[7],C=i[11],ge=i[15];return r[0]=s*E+o*b+l*N+c*G,r[4]=s*A+o*V+l*z+c*ee,r[8]=s*R+o*O+l*$+c*C,r[12]=s*v+o*I+l*X+c*ge,r[1]=u*E+h*b+f*N+d*G,r[5]=u*A+h*V+f*z+d*ee,r[9]=u*R+h*O+f*$+d*C,r[13]=u*v+h*I+f*X+d*ge,r[2]=g*E+_*b+m*N+p*G,r[6]=g*A+_*V+m*z+p*ee,r[10]=g*R+_*O+m*$+p*C,r[14]=g*v+_*I+m*X+p*ge,r[3]=S*E+y*b+x*N+M*G,r[7]=S*A+y*V+x*z+M*ee,r[11]=S*R+y*O+x*$+M*C,r[15]=S*v+y*I+x*X+M*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],s=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*h-i*c*h-r*o*f+n*c*f+i*o*d-n*l*d)+_*(+t*l*d-t*c*f+r*s*f-i*s*d+i*c*u-r*l*u)+m*(+t*c*h-t*o*d-r*s*h+n*s*d+r*o*u-n*c*u)+p*(-i*o*u-t*l*h+t*o*f+i*s*h-n*s*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],S=h*m*c-_*f*c+_*l*d-o*m*d-h*l*p+o*f*p,y=g*f*c-u*m*c-g*l*d+s*m*d+u*l*p-s*f*p,x=u*_*c-g*h*c+g*o*d-s*_*d-u*o*p+s*h*p,M=g*h*l-u*_*l-g*o*f+s*_*f+u*o*m-s*h*m,E=t*S+n*y+i*x+r*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=S*A,e[1]=(_*f*r-h*m*r-_*i*d+n*m*d+h*i*p-n*f*p)*A,e[2]=(o*m*r-_*l*r+_*i*c-n*m*c-o*i*p+n*l*p)*A,e[3]=(h*l*r-o*f*r-h*i*c+n*f*c+o*i*d-n*l*d)*A,e[4]=y*A,e[5]=(u*m*r-g*f*r+g*i*d-t*m*d-u*i*p+t*f*p)*A,e[6]=(g*l*r-s*m*r-g*i*c+t*m*c+s*i*p-t*l*p)*A,e[7]=(s*f*r-u*l*r+u*i*c-t*f*c-s*i*d+t*l*d)*A,e[8]=x*A,e[9]=(g*h*r-u*_*r-g*n*d+t*_*d+u*n*p-t*h*p)*A,e[10]=(s*_*r-g*o*r+g*n*c-t*_*c-s*n*p+t*o*p)*A,e[11]=(u*o*r-s*h*r-u*n*c+t*h*c+s*n*d-t*o*d)*A,e[12]=M*A,e[13]=(u*_*i-g*h*i+g*n*f-t*_*f-u*n*m+t*h*m)*A,e[14]=(g*o*i-s*_*i-g*n*l+t*_*l+s*n*m-t*o*m)*A,e[15]=(s*h*i-u*o*i+u*n*l-t*h*l-s*n*f+t*o*f)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,s=e.x,o=e.y,l=e.z,c=r*s,u=r*o;return this.set(c*s+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*s,0,c*l-i*o,u*l+i*s,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,s){return this.set(1,n,r,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,s=t._y,o=t._z,l=t._w,c=r+r,u=s+s,h=o+o,f=r*c,d=r*u,g=r*h,_=s*u,m=s*h,p=o*h,S=l*c,y=l*u,x=l*h,M=n.x,E=n.y,A=n.z;return i[0]=(1-(_+p))*M,i[1]=(d+x)*M,i[2]=(g-y)*M,i[3]=0,i[4]=(d-x)*E,i[5]=(1-(f+p))*E,i[6]=(m+S)*E,i[7]=0,i[8]=(g+y)*A,i[9]=(m-S)*A,i[10]=(1-(f+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=ss.set(i[0],i[1],i[2]).length();const s=ss.set(i[4],i[5],i[6]).length(),o=ss.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],ni.copy(this);const c=1/r,u=1/s,h=1/o;return ni.elements[0]*=c,ni.elements[1]*=c,ni.elements[2]*=c,ni.elements[4]*=u,ni.elements[5]*=u,ni.elements[6]*=u,ni.elements[8]*=h,ni.elements[9]*=h,ni.elements[10]*=h,t.setFromRotationMatrix(ni),n.x=r,n.y=s,n.z=o,this}makePerspective(e,t,n,i,r,s){const o=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),f=-(s+r)/(s-r),d=-2*s*r/(s-r);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=d,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,r,s){const o=this.elements,l=1/(t-e),c=1/(n-i),u=1/(s-r),h=(t+e)*l,f=(n+i)*c,d=(s+r)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-d,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ss=new U,ni=new et,p_=new U(0,0,0),m_=new U(1,1,1),ji=new U,la=new U,Cn=new U,Ch=new et,Lh=new Fn;class _l{constructor(e=0,t=0,n=0,i=_l.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],s=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-qt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ch.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ch,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lh.setFromEuler(this),this.setFromQuaternion(Lh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_l.DEFAULT_ORDER="XYZ";class zd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let g_=0;const Rh=new U,os=new Fn,Ti=new et,ca=new U,uo=new U,__=new U,x_=new Fn,Ph=new U(1,0,0),Dh=new U(0,1,0),Ih=new U(0,0,1),v_={type:"added"},Oh={type:"removed"};class Tt extends dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:g_++}),this.uuid=li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new U,t=new _l,n=new Fn,i=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new et},normalMatrix:{value:new it}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new zd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(Ph,e)}rotateY(e){return this.rotateOnAxis(Dh,e)}rotateZ(e){return this.rotateOnAxis(Ih,e)}translateOnAxis(e,t){return Rh.copy(e).applyQuaternion(this.quaternion),this.position.add(Rh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ph,e)}translateY(e){return this.translateOnAxis(Dh,e)}translateZ(e){return this.translateOnAxis(Ih,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ca.copy(e):ca.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(uo,ca,this.up):Ti.lookAt(ca,uo,this.up),this.quaternion.setFromRotationMatrix(Ti),i&&(Ti.extractRotation(i.matrixWorld),os.setFromRotationMatrix(Ti),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(v_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Oh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Oh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectsByProperty(e,t);s.length>0&&(n=n.concat(s))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uo,e,__),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uo,x_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),h=s(e.shapes),f=s(e.skeletons),d=s(e.animations),g=s(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Tt.DEFAULT_UP=new U(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ii=new U,Ai=new U,ql=new U,Ei=new U,as=new U,ls=new U,Nh=new U,jl=new U,Yl=new U,Kl=new U;let ua=!1;class oi{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ii.subVectors(e,t),i.cross(ii);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){ii.subVectors(i,t),Ai.subVectors(n,t),ql.subVectors(e,t);const s=ii.dot(ii),o=ii.dot(Ai),l=ii.dot(ql),c=Ai.dot(Ai),u=Ai.dot(ql),h=s*c-o*o;if(h===0)return r.set(-2,-1,-1);const f=1/h,d=(c*l-o*u)*f,g=(s*u-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ei),Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getUV(e,t,n,i,r,s,o,l){return ua===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ua=!0),this.getInterpolation(e,t,n,i,r,s,o,l)}static getInterpolation(e,t,n,i,r,s,o,l){return this.getBarycoord(e,t,n,i,Ei),l.setScalar(0),l.addScaledVector(r,Ei.x),l.addScaledVector(s,Ei.y),l.addScaledVector(o,Ei.z),l}static isFrontFacing(e,t,n,i){return ii.subVectors(n,t),Ai.subVectors(e,t),ii.cross(Ai).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),ii.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return oi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return ua===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ua=!0),oi.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return oi.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let s,o;as.subVectors(i,n),ls.subVectors(r,n),jl.subVectors(e,n);const l=as.dot(jl),c=ls.dot(jl);if(l<=0&&c<=0)return t.copy(n);Yl.subVectors(e,i);const u=as.dot(Yl),h=ls.dot(Yl);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(as,s);Kl.subVectors(e,r);const d=as.dot(Kl),g=ls.dot(Kl);if(g>=0&&d<=g)return t.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ls,o);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Nh.subVectors(r,i),o=(h-u)/(h-u+(d-g)),t.copy(i).addScaledVector(Nh,o);const p=1/(m+_+f);return s=_*p,o=f*p,t.copy(n).addScaledVector(as,s).addScaledVector(ls,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let y_=0;class _i extends dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:y_++}),this.uuid=li(),this.name="",this.type="Material",this.blending=Ds,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=bd,this.blendDst=wd,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ec,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ul,this.stencilZFail=Ul,this.stencilZPass=Ul,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(n.blending=this.blending),this.side!==ki&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(t){const r=i(e.textures),s=i(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Bd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},ha={h:0,s:0,l:0};function $l(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class Xe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,En.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=En.workingColorSpace){return this.r=e,this.g=t,this.b=n,En.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=En.workingColorSpace){if(e=pu(e,1),t=qt(t,0,1),n=qt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=$l(s,r,e+1/3),this.g=$l(s,r,e),this.b=$l(s,r,e-1/3)}return En.toWorkingColorSpace(this,i),this}setStyle(e,t=Wn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,En.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,En.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wn){const n=Bd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}copyLinearToSRGB(e){return this.r=kl(e.r),this.g=kl(e.g),this.b=kl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wn){return En.fromWorkingColorSpace(Jt.copy(this),e),qt(Jt.r*255,0,255)<<16^qt(Jt.g*255,0,255)<<8^qt(Jt.b*255,0,255)<<0}getHexString(e=Wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=En.workingColorSpace){En.fromWorkingColorSpace(Jt.copy(this),t);const n=Jt.r,i=Jt.g,r=Jt.b,s=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+s)/2;if(o===s)l=0,c=0;else{const h=s-o;switch(c=u<=.5?h/(s+o):h/(2-s-o),s){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=En.workingColorSpace){return En.fromWorkingColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=Wn){En.fromWorkingColorSpace(Jt.copy(this),e);const t=Jt.r,n=Jt.g,i=Jt.b;return e!==Wn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(ri),ri.h+=e,ri.s+=t,ri.l+=n,this.setHSL(ri.h,ri.s,ri.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ri),e.getHSL(ha);const n=Lo(ri.h,ha.h,t),i=Lo(ri.s,ha.s,t),r=Lo(ri.l,ha.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new Xe;Xe.NAMES=Bd;class Qi extends _i{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Td,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dt=new U,fa=new He;class Kt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Dc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fa.fromBufferAttribute(this,t),fa.applyMatrix3(e),this.setXY(t,fa.x,fa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Di(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Di(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Di(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Di(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array),r=mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Dc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Vd extends Kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Hd extends Kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ui extends Kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let M_=0;const Bn=new et,Zl=new Tt,cs=new U,Ln=new Vi,ho=new Vi,Bt=new U;class ui extends dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:M_++}),this.uuid=li(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nd(e)?Hd:Vd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new it().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,t,n){return Bn.makeTranslation(e,t,n),this.applyMatrix4(Bn),this}scale(e,t,n){return Bn.makeScale(e,t,n),this.applyMatrix4(Bn),this}lookAt(e){return Zl.lookAt(e),Zl.updateMatrix(),this.applyMatrix4(Zl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ui(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];ho.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(Ln.min,ho.min),Ln.expandByPoint(Bt),Bt.addVectors(Ln.max,ho.max),Ln.expandByPoint(Bt)):(Ln.expandByPoint(ho.min),Ln.expandByPoint(ho.max))}Ln.getCenter(n);let i=0;for(let r=0,s=e.count;r<s;r++)Bt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Bt));if(t)for(let r=0,s=t.length;r<s;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Bt.fromBufferAttribute(o,c),l&&(cs.fromBufferAttribute(e,c),Bt.add(cs)),i=Math.max(i,n.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,s=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let b=0;b<o;b++)c[b]=new U,u[b]=new U;const h=new U,f=new U,d=new U,g=new He,_=new He,m=new He,p=new U,S=new U;function y(b,V,O){h.fromArray(i,b*3),f.fromArray(i,V*3),d.fromArray(i,O*3),g.fromArray(s,b*2),_.fromArray(s,V*2),m.fromArray(s,O*2),f.sub(h),d.sub(h),_.sub(g),m.sub(g);const I=1/(_.x*m.y-m.x*_.y);isFinite(I)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-_.y).multiplyScalar(I),S.copy(d).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(I),c[b].add(p),c[V].add(p),c[O].add(p),u[b].add(S),u[V].add(S),u[O].add(S))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let b=0,V=x.length;b<V;++b){const O=x[b],I=O.start,N=O.count;for(let z=I,$=I+N;z<$;z+=3)y(n[z+0],n[z+1],n[z+2])}const M=new U,E=new U,A=new U,R=new U;function v(b){A.fromArray(r,b*3),R.copy(A);const V=c[b];M.copy(V),M.sub(A.multiplyScalar(A.dot(V))).normalize(),E.crossVectors(R,V);const I=E.dot(u[b])<0?-1:1;l[b*4]=M.x,l[b*4+1]=M.y,l[b*4+2]=M.z,l[b*4+3]=I}for(let b=0,V=x.length;b<V;++b){const O=x[b],I=O.start,N=O.count;for(let z=I,$=I+N;z<$;z+=3)v(n[z+0]),v(n[z+1]),v(n[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new U,r=new U,s=new U,o=new U,l=new U,c=new U,u=new U,h=new U;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,m),u.subVectors(s,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),u.subVectors(s,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new Kt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ui,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Uh=new et,hi=new mu,da=new Hi,Fh=new U,us=new U,hs=new U,fs=new U,Jl=new U,pa=new U,ma=new He,ga=new He,_a=new He,kh=new U,zh=new U,Bh=new U,xa=new U,va=new U;class Un extends Tt{constructor(e=new ui,t=new Qi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){pa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(Jl.fromBufferAttribute(h,e),s?pa.addScaledVector(Jl,u):pa.addScaledVector(Jl.sub(t),u))}t.add(pa)}return this.isSkinnedMesh&&this.applyBoneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),da.copy(n.boundingSphere),da.applyMatrix4(r),hi.copy(e.ray).recast(e.near),da.containsPoint(hi.origin)===!1&&(hi.intersectSphere(da,Fh)===null||hi.origin.distanceToSquared(Fh)>(e.far-e.near)**2))||(Uh.copy(r).invert(),hi.copy(e.ray).applyMatrix4(Uh),n.boundingBox!==null&&hi.intersectsBox(n.boundingBox)===!1))return;let s;const o=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,h=n.attributes.normal,f=n.groups,d=n.drawRange;if(o!==null)if(Array.isArray(i))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=i[m.materialIndex],S=Math.max(m.start,d.start),y=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let x=S,M=y;x<M;x+=3){const E=o.getX(x),A=o.getX(x+1),R=o.getX(x+2);s=ya(this,p,e,hi,c,u,h,E,A,R),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const S=o.getX(m),y=o.getX(m+1),x=o.getX(m+2);s=ya(this,i,e,hi,c,u,h,S,y,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(i))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=i[m.materialIndex],S=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=S,M=y;x<M;x+=3){const E=x,A=x+1,R=x+2;s=ya(this,p,e,hi,c,u,h,E,A,R),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const S=m,y=m+1,x=m+2;s=ya(this,i,e,hi,c,u,h,S,y,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function S_(a,e,t,n,i,r,s,o){let l;if(e.side===vn?l=n.intersectTriangle(s,r,i,!0,o):l=n.intersectTriangle(i,r,s,e.side===ki,o),l===null)return null;va.copy(o),va.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(va);return c<t.near||c>t.far?null:{distance:c,point:va.clone(),object:a}}function ya(a,e,t,n,i,r,s,o,l,c){a.getVertexPosition(o,us),a.getVertexPosition(l,hs),a.getVertexPosition(c,fs);const u=S_(a,e,t,n,us,hs,fs,xa);if(u){i&&(ma.fromBufferAttribute(i,o),ga.fromBufferAttribute(i,l),_a.fromBufferAttribute(i,c),u.uv=oi.getInterpolation(xa,us,hs,fs,ma,ga,_a,new He)),r&&(ma.fromBufferAttribute(r,o),ga.fromBufferAttribute(r,l),_a.fromBufferAttribute(r,c),u.uv2=oi.getInterpolation(xa,us,hs,fs,ma,ga,_a,new He)),s&&(kh.fromBufferAttribute(s,o),zh.fromBufferAttribute(s,l),Bh.fromBufferAttribute(s,c),u.normal=oi.getInterpolation(xa,us,hs,fs,kh,zh,Bh,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new U,materialIndex:0};oi.getNormal(us,hs,fs,h.normal),u.face=h}return u}class ta extends ui{constructor(e=1,t=1,n=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:s};const o=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,s,r,0),g("z","y","x",1,-1,n,t,-e,s,r,1),g("x","z","y",1,1,e,n,t,i,s,2),g("x","z","y",1,-1,e,n,-t,i,s,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ui(c,3)),this.setAttribute("normal",new Ui(u,3)),this.setAttribute("uv",new Ui(h,2));function g(_,m,p,S,y,x,M,E,A,R,v){const b=x/A,V=M/R,O=x/2,I=M/2,N=E/2,z=A+1,$=R+1;let X=0,G=0;const ee=new U;for(let C=0;C<$;C++){const ge=C*V-I;for(let re=0;re<z;re++){const Y=re*b-O;ee[_]=Y*S,ee[m]=ge*y,ee[p]=N,c.push(ee.x,ee.y,ee.z),ee[_]=0,ee[m]=0,ee[p]=E>0?1:-1,u.push(ee.x,ee.y,ee.z),h.push(re/A),h.push(1-C/R),X+=1}}for(let C=0;C<R;C++)for(let ge=0;ge<A;ge++){const re=f+ge+z*C,Y=f+ge+z*(C+1),J=f+(ge+1)+z*(C+1),se=f+(ge+1)+z*C;l.push(re,Y,se),l.push(Y,J,se),G+=6}o.addGroup(d,G,v),d+=G,f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ta(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $s(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const i=a[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function cn(a){const e={};for(let t=0;t<a.length;t++){const n=$s(a[t]);for(const i in n)e[i]=n[i]}return e}function b_(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function Gd(a){return a.getRenderTarget()===null&&a.outputEncoding===ct?Wn:Ys}const w_={clone:$s,merge:cn};var T_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,A_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wr extends _i{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=T_,this.fragmentShader=A_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=b_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}let Wd=class extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class pn extends Wd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ks*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Co*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ks*2*Math.atan(Math.tan(Co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Co*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/l,t-=s.offsetY*n/c,i*=s.width/l,n*=s.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ds=-90,ps=1;class E_ extends Tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new pn(ds,ps,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new pn(ds,ps,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const s=new pn(ds,ps,e,t);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(0,1,0),this.add(s);const o=new pn(ds,ps,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new pn(ds,ps,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new pn(ds,ps,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,s,o,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=Ni,e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,s),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Xd extends Gt{constructor(e,t,n,i,r,s,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Gs,super(e,t,n,i,r,s,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class C_ extends Gr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Xd(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:tn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ta(5,5,5),r=new Wr({name:"CubemapFromEquirect",uniforms:$s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:vn,blending:or});r.uniforms.tEquirect.value=t;const s=new Un(i,r),o=t.minFilter;return t.minFilter===Br&&(t.minFilter=tn),new E_(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,i);e.setRenderTarget(r)}}const Ql=new U,L_=new U,R_=new it;class br{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ql.subVectors(n,t).cross(L_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ql),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||R_.getNormalMatrix(e),i=this.coplanarPoint(Ql).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yr=new Hi,Ma=new U;class gu{constructor(e=new br,t=new br,n=new br,i=new br,r=new br,s=new br){this.planes=[e,t,n,i,r,s]}set(e,t,n,i,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],s=n[2],o=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],d=n[9],g=n[10],_=n[11],m=n[12],p=n[13],S=n[14],y=n[15];return t[0].setComponents(o-i,h-l,_-f,y-m).normalize(),t[1].setComponents(o+i,h+l,_+f,y+m).normalize(),t[2].setComponents(o+r,h+c,_+d,y+p).normalize(),t[3].setComponents(o-r,h-c,_-d,y-p).normalize(),t[4].setComponents(o-s,h-u,_-g,y-S).normalize(),t[5].setComponents(o+s,h+u,_+g,y+S).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(e){return yr.center.set(0,0,0),yr.radius=.7071067811865476,yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ma.x=i.normal.x>0?e.max.x:e.min.x,Ma.y=i.normal.y>0?e.max.y:e.min.y,Ma.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ma)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qd(){let a=null,e=!1,t=null,n=null;function i(r,s){t(r,s),n=a.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){a=r}}}function P_(a,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,d=a.createBuffer();a.bindBuffer(u,d),a.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,d=u.updateRange;a.bindBuffer(h,c),d.count===-1?a.bufferSubData(h,0,f):(t?a.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):a.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(a.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:s,remove:o,update:l}}class xl extends ui{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,s=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const S=p*f-s;for(let y=0;y<c;y++){const x=y*h-r;g.push(x,-S,0),_.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const y=S+c*p,x=S+c*(p+1),M=S+1+c*(p+1),E=S+1+c*p;d.push(y,x,E),d.push(x,M,E)}this.setIndex(d),this.setAttribute("position",new Ui(g,3)),this.setAttribute("normal",new Ui(_,3)),this.setAttribute("uv",new Ui(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xl(e.width,e.height,e.widthSegments,e.heightSegments)}}var D_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,I_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,O_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,N_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,U_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,F_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,k_="vec3 transformed = vec3( position );",z_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,B_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,V_=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,H_=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,G_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,W_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,X_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,q_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,j_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Y_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,K_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Z_=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,J_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,Q_=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,e0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,t0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,n0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,i0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,r0="gl_FragColor = linearToOutputTexel( gl_FragColor );",s0=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,o0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,a0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,l0=`#ifdef USE_ENVMAP
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
#endif`,c0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,u0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,h0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,f0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,d0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,p0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,m0=`#ifdef USE_GRADIENTMAP
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
}`,g0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,_0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,x0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,v0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,y0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,M0=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,S0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,b0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,w0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,T0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,A0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,E0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	vec3 f0 = material.specularColor;
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
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,C0=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,L0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,R0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,P0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,D0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,O0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,N0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,U0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,F0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,k0=`#if defined( USE_POINTS_UV )
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
#endif`,z0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,B0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,V0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,H0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,G0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,W0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,X0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,q0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,j0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
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
#endif`,Z0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,J0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Q0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ex=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ix=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ox=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ax=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,ux=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,fx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,px=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,mx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gx=`#ifdef USE_SKINNING
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
#endif`,_x=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mx=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Sx=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
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
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
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
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,bx=`#ifdef USE_UV
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
#endif`,wx=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_UV2
	attribute vec2 uv2;
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
#endif`,Tx=`#ifdef USE_UV
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
#endif`,Ax=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ex=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cx=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,Lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ix=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Ox=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Nx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Ux=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,zx=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bx=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vx=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,Hx=`uniform vec3 diffuse;
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
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,Wx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,qx=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Yx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Kx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,$x=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Jx=`#define STANDARD
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
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qx=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,ev=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tv=`uniform float size;
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
}`,nv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iv=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,rv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,sv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,ov=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,je={alphamap_fragment:D_,alphamap_pars_fragment:I_,alphatest_fragment:O_,alphatest_pars_fragment:N_,aomap_fragment:U_,aomap_pars_fragment:F_,begin_vertex:k_,beginnormal_vertex:z_,bsdfs:B_,iridescence_fragment:V_,bumpmap_pars_fragment:H_,clipping_planes_fragment:G_,clipping_planes_pars_fragment:W_,clipping_planes_pars_vertex:X_,clipping_planes_vertex:q_,color_fragment:j_,color_pars_fragment:Y_,color_pars_vertex:K_,color_vertex:$_,common:Z_,cube_uv_reflection_fragment:J_,defaultnormal_vertex:Q_,displacementmap_pars_vertex:e0,displacementmap_vertex:t0,emissivemap_fragment:n0,emissivemap_pars_fragment:i0,encodings_fragment:r0,encodings_pars_fragment:s0,envmap_fragment:o0,envmap_common_pars_fragment:a0,envmap_pars_fragment:l0,envmap_pars_vertex:c0,envmap_physical_pars_fragment:M0,envmap_vertex:u0,fog_vertex:h0,fog_pars_vertex:f0,fog_fragment:d0,fog_pars_fragment:p0,gradientmap_pars_fragment:m0,lightmap_fragment:g0,lightmap_pars_fragment:_0,lights_lambert_fragment:x0,lights_lambert_pars_fragment:v0,lights_pars_begin:y0,lights_toon_fragment:S0,lights_toon_pars_fragment:b0,lights_phong_fragment:w0,lights_phong_pars_fragment:T0,lights_physical_fragment:A0,lights_physical_pars_fragment:E0,lights_fragment_begin:C0,lights_fragment_maps:L0,lights_fragment_end:R0,logdepthbuf_fragment:P0,logdepthbuf_pars_fragment:D0,logdepthbuf_pars_vertex:I0,logdepthbuf_vertex:O0,map_fragment:N0,map_pars_fragment:U0,map_particle_fragment:F0,map_particle_pars_fragment:k0,metalnessmap_fragment:z0,metalnessmap_pars_fragment:B0,morphcolor_vertex:V0,morphnormal_vertex:H0,morphtarget_pars_vertex:G0,morphtarget_vertex:W0,normal_fragment_begin:X0,normal_fragment_maps:q0,normal_pars_fragment:j0,normal_pars_vertex:Y0,normal_vertex:K0,normalmap_pars_fragment:$0,clearcoat_normal_fragment_begin:Z0,clearcoat_normal_fragment_maps:J0,clearcoat_pars_fragment:Q0,iridescence_pars_fragment:ex,output_fragment:tx,packing:nx,premultiplied_alpha_fragment:ix,project_vertex:rx,dithering_fragment:sx,dithering_pars_fragment:ox,roughnessmap_fragment:ax,roughnessmap_pars_fragment:lx,shadowmap_pars_fragment:cx,shadowmap_pars_vertex:ux,shadowmap_vertex:hx,shadowmask_pars_fragment:fx,skinbase_vertex:dx,skinning_pars_vertex:px,skinning_vertex:mx,skinnormal_vertex:gx,specularmap_fragment:_x,specularmap_pars_fragment:xx,tonemapping_fragment:vx,tonemapping_pars_fragment:yx,transmission_fragment:Mx,transmission_pars_fragment:Sx,uv_pars_fragment:bx,uv_pars_vertex:wx,uv_vertex:Tx,worldpos_vertex:Ax,background_vert:Ex,background_frag:Cx,backgroundCube_vert:Lx,backgroundCube_frag:Rx,cube_vert:Px,cube_frag:Dx,depth_vert:Ix,depth_frag:Ox,distanceRGBA_vert:Nx,distanceRGBA_frag:Ux,equirect_vert:Fx,equirect_frag:kx,linedashed_vert:zx,linedashed_frag:Bx,meshbasic_vert:Vx,meshbasic_frag:Hx,meshlambert_vert:Gx,meshlambert_frag:Wx,meshmatcap_vert:Xx,meshmatcap_frag:qx,meshnormal_vert:jx,meshnormal_frag:Yx,meshphong_vert:Kx,meshphong_frag:$x,meshphysical_vert:Zx,meshphysical_frag:Jx,meshtoon_vert:Qx,meshtoon_frag:ev,points_vert:tv,points_frag:nv,shadow_vert:iv,shadow_frag:rv,sprite_vert:sv,sprite_frag:ov},pe={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaTest:{value:0}}},di={basic:{uniforms:cn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:cn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:cn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:cn([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:cn([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:cn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:cn([pe.points,pe.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:cn([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:cn([pe.common,pe.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:cn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:cn([pe.sprite,pe.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:cn([pe.common,pe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:cn([pe.lights,pe.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};di.physical={uniforms:cn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Sa={r:0,b:0,g:0};function av(a,e,t,n,i,r,s){const o=new Xe(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(m,p){let S=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=(p.backgroundBlurriness>0?t:e).get(y));const x=a.xr,M=x.getSession&&x.getSession();M&&M.environmentBlendMode==="additive"&&(y=null),y===null?_(o,l):y&&y.isColor&&(_(y,1),S=!0),(a.autoClear||S)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),y&&(y.isCubeTexture||y.mapping===gl)?(u===void 0&&(u=new Un(new ta(1,1,1),new Wr({name:"BackgroundCubeMaterial",uniforms:$s(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=y.encoding!==ct,(h!==y||f!==y.version||d!==a.toneMapping)&&(u.material.needsUpdate=!0,h=y,f=y.version,d=a.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Un(new xl(2,2),new Wr({name:"BackgroundMaterial",uniforms:$s(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=y.encoding!==ct,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||d!==a.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,d=a.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(Sa,Gd(a)),n.buffers.color.setClear(Sa.r,Sa.g,Sa.b,p,s)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(o,l)},render:g}}function lv(a,e,t,n){const i=a.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),s=n.isWebGL2||r!==null,o={},l=m(null);let c=l,u=!1;function h(N,z,$,X,G){let ee=!1;if(s){const C=_(X,$,z);c!==C&&(c=C,d(c.object)),ee=p(N,X,$,G),ee&&S(N,X,$,G)}else{const C=z.wireframe===!0;(c.geometry!==X.id||c.program!==$.id||c.wireframe!==C)&&(c.geometry=X.id,c.program=$.id,c.wireframe=C,ee=!0)}G!==null&&t.update(G,34963),(ee||u)&&(u=!1,R(N,z,$,X),G!==null&&a.bindBuffer(34963,t.get(G).buffer))}function f(){return n.isWebGL2?a.createVertexArray():r.createVertexArrayOES()}function d(N){return n.isWebGL2?a.bindVertexArray(N):r.bindVertexArrayOES(N)}function g(N){return n.isWebGL2?a.deleteVertexArray(N):r.deleteVertexArrayOES(N)}function _(N,z,$){const X=$.wireframe===!0;let G=o[N.id];G===void 0&&(G={},o[N.id]=G);let ee=G[z.id];ee===void 0&&(ee={},G[z.id]=ee);let C=ee[X];return C===void 0&&(C=m(f()),ee[X]=C),C}function m(N){const z=[],$=[],X=[];for(let G=0;G<i;G++)z[G]=0,$[G]=0,X[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:$,attributeDivisors:X,object:N,attributes:{},index:null}}function p(N,z,$,X){const G=c.attributes,ee=z.attributes;let C=0;const ge=$.getAttributes();for(const re in ge)if(ge[re].location>=0){const J=G[re];let se=ee[re];if(se===void 0&&(re==="instanceMatrix"&&N.instanceMatrix&&(se=N.instanceMatrix),re==="instanceColor"&&N.instanceColor&&(se=N.instanceColor)),J===void 0||J.attribute!==se||se&&J.data!==se.data)return!0;C++}return c.attributesNum!==C||c.index!==X}function S(N,z,$,X){const G={},ee=z.attributes;let C=0;const ge=$.getAttributes();for(const re in ge)if(ge[re].location>=0){let J=ee[re];J===void 0&&(re==="instanceMatrix"&&N.instanceMatrix&&(J=N.instanceMatrix),re==="instanceColor"&&N.instanceColor&&(J=N.instanceColor));const se={};se.attribute=J,J&&J.data&&(se.data=J.data),G[re]=se,C++}c.attributes=G,c.attributesNum=C,c.index=X}function y(){const N=c.newAttributes;for(let z=0,$=N.length;z<$;z++)N[z]=0}function x(N){M(N,0)}function M(N,z){const $=c.newAttributes,X=c.enabledAttributes,G=c.attributeDivisors;$[N]=1,X[N]===0&&(a.enableVertexAttribArray(N),X[N]=1),G[N]!==z&&((n.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,z),G[N]=z)}function E(){const N=c.newAttributes,z=c.enabledAttributes;for(let $=0,X=z.length;$<X;$++)z[$]!==N[$]&&(a.disableVertexAttribArray($),z[$]=0)}function A(N,z,$,X,G,ee){n.isWebGL2===!0&&($===5124||$===5125)?a.vertexAttribIPointer(N,z,$,G,ee):a.vertexAttribPointer(N,z,$,X,G,ee)}function R(N,z,$,X){if(n.isWebGL2===!1&&(N.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const G=X.attributes,ee=$.getAttributes(),C=z.defaultAttributeValues;for(const ge in ee){const re=ee[ge];if(re.location>=0){let Y=G[ge];if(Y===void 0&&(ge==="instanceMatrix"&&N.instanceMatrix&&(Y=N.instanceMatrix),ge==="instanceColor"&&N.instanceColor&&(Y=N.instanceColor)),Y!==void 0){const J=Y.normalized,se=Y.itemSize,ce=t.get(Y);if(ce===void 0)continue;const B=ce.buffer,Ae=ce.type,Me=ce.bytesPerElement;if(Y.isInterleavedBufferAttribute){const ae=Y.data,Se=ae.stride,Be=Y.offset;if(ae.isInstancedInterleavedBuffer){for(let oe=0;oe<re.locationSize;oe++)M(re.location+oe,ae.meshPerAttribute);N.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let oe=0;oe<re.locationSize;oe++)x(re.location+oe);a.bindBuffer(34962,B);for(let oe=0;oe<re.locationSize;oe++)A(re.location+oe,se/re.locationSize,Ae,J,Se*Me,(Be+se/re.locationSize*oe)*Me)}else{if(Y.isInstancedBufferAttribute){for(let ae=0;ae<re.locationSize;ae++)M(re.location+ae,Y.meshPerAttribute);N.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ae=0;ae<re.locationSize;ae++)x(re.location+ae);a.bindBuffer(34962,B);for(let ae=0;ae<re.locationSize;ae++)A(re.location+ae,se/re.locationSize,Ae,J,se*Me,se/re.locationSize*ae*Me)}}else if(C!==void 0){const J=C[ge];if(J!==void 0)switch(J.length){case 2:a.vertexAttrib2fv(re.location,J);break;case 3:a.vertexAttrib3fv(re.location,J);break;case 4:a.vertexAttrib4fv(re.location,J);break;default:a.vertexAttrib1fv(re.location,J)}}}}E()}function v(){O();for(const N in o){const z=o[N];for(const $ in z){const X=z[$];for(const G in X)g(X[G].object),delete X[G];delete z[$]}delete o[N]}}function b(N){if(o[N.id]===void 0)return;const z=o[N.id];for(const $ in z){const X=z[$];for(const G in X)g(X[G].object),delete X[G];delete z[$]}delete o[N.id]}function V(N){for(const z in o){const $=o[z];if($[N.id]===void 0)continue;const X=$[N.id];for(const G in X)g(X[G].object),delete X[G];delete $[N.id]}}function O(){I(),u=!0,c!==l&&(c=l,d(c.object))}function I(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:O,resetDefaultState:I,dispose:v,releaseStatesOfGeometry:b,releaseStatesOfProgram:V,initAttributes:y,enableAttribute:x,disableUnusedAttributes:E}}function cv(a,e,t,n){const i=n.isWebGL2;let r;function s(c){r=c}function o(c,u){a.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,d;if(i)f=a,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](r,c,u,h),t.update(u,r,h)}this.setMode=s,this.render=o,this.renderInstances=l}function uv(a,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";A="mediump"}return A==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&a.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=s||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=a.getParameter(34930),f=a.getParameter(35660),d=a.getParameter(3379),g=a.getParameter(34076),_=a.getParameter(34921),m=a.getParameter(36347),p=a.getParameter(36348),S=a.getParameter(36349),y=f>0,x=s||e.has("OES_texture_float"),M=y&&x,E=s?a.getParameter(36183):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:S,vertexTextures:y,floatFragmentTextures:x,floatVertexTextures:M,maxSamples:E}}function hv(a){const e=this;let t=null,n=0,i=!1,r=!1;const s=new br,o=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=a.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):c();else{const S=r?0:n,y=S*4;let x=p.clippingState||null;l.value=x,x=u(g,f,y,d);for(let M=0;M!==y;++M)x[M]=t[M];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=d;y!==_;++y,x+=4)s.copy(h[y]).applyMatrix4(S,o),s.normal.toArray(m,x),m[x+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function fv(a){let e=new WeakMap;function t(s,o){return o===Cc?s.mapping=Gs:o===Lc&&(s.mapping=Ws),s}function n(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const o=s.mapping;if(o===Cc||o===Lc)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new C_(l.height/2);return c.fromEquirectangularTexture(a,s),e.set(s,c),s.addEventListener("dispose",i),t(c.texture,s.mapping)}else return null}}return s}function i(s){const o=s.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class vl extends Wd{constructor(e=-1,t=1,n=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,s=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Es=4,Vh=[.125,.215,.35,.446,.526,.582],Cr=20,ec=new vl,Hh=new Xe;let tc=null;const wr=(1+Math.sqrt(5))/2,ms=1/wr,Gh=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,wr,ms),new U(0,wr,-ms),new U(ms,0,wr),new U(-ms,0,wr),new U(wr,ms,0),new U(-wr,ms,0)];class Wh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){tc=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(tc),e.scissorTest=!1,ba(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gs||e.mapping===Ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tc=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:Ho,format:Yn,encoding:Hr,depthBuffer:!1},i=Xh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dv(r)),this._blurMaterial=pv(r,e,t)}return i}_compileMaterial(e){const t=new Un(this._lodPlanes[0],e);this._renderer.compile(t,ec)}_sceneToCubeUV(e,t,n,i){const o=new pn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Hh),u.toneMapping=Ni,u.autoClear=!1;const d=new Qi({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),g=new Un(new ta,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(Hh),_=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):S===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const y=this._cubeSize;ba(i,S*y,p>2?y:0,y,y),u.setRenderTarget(i),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Gs||e.mapping===Ws;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=jh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qh());const r=i?this._cubemapMaterial:this._equirectMaterial,s=new Un(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;ba(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,ec)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),s=Gh[(i-1)%Gh.length];this._blur(e,i-1,i,r,s)}t.autoClear=n}_blur(e,t,n,i,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,i,"latitudinal",r),this._halfBlur(s,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Un(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Cr-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Cr;m>Cr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Cr}`);const p=[];let S=0;for(let A=0;A<Cr;++A){const R=A/_,v=Math.exp(-R*R/2);p.push(v),A===0?S+=v:A<m&&(S+=2*v)}for(let A=0;A<p.length;A++)p[A]=p[A]/S;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;const x=this._sizeLods[i],M=3*x*(i>y-Es?i-y+Es:0),E=4*(this._cubeSize-x);ba(t,M,E,3*x,2*x),l.setRenderTarget(t),l.render(h,ec)}}function dv(a){const e=[],t=[],n=[];let i=a;const r=a-Es+1+Vh.length;for(let s=0;s<r;s++){const o=Math.pow(2,i);t.push(o);let l=1/o;s>a-Es?l=Vh[s-a+Es-1]:s===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*d),y=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let E=0;E<d;E++){const A=E%3*2/3-1,R=E>2?0:-1,v=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];S.set(v,_*g*E),y.set(f,m*g*E);const b=[E,E,E,E,E,E];x.set(b,p*g*E)}const M=new ui;M.setAttribute("position",new Kt(S,_)),M.setAttribute("uv",new Kt(y,m)),M.setAttribute("faceIndex",new Kt(x,p)),e.push(M),i>Es&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Xh(a,e,t){const n=new Gr(a,e,t);return n.texture.mapping=gl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ba(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function pv(a,e,t){const n=new Float32Array(Cr),i=new U(0,1,0);return new Wr({name:"SphericalGaussianBlur",defines:{n:Cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:_u(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function qh(){return new Wr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_u(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function jh(){return new Wr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function _u(){return`

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
	`}function mv(a){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Cc||l===Lc,u=l===Gs||l===Ws;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Wh(a)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Wh(a));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function gv(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function _v(a,e,t,n){const i={},r=new WeakMap;function s(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",s),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",s),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const d=h.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],34962)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const S=d.array;_=d.version;for(let y=0,x=S.length;y<x;y+=3){const M=S[y+0],E=S[y+1],A=S[y+2];f.push(M,E,E,A,A,M)}}else{const S=g.array;_=g.version;for(let y=0,x=S.length/3-1;y<x;y+=3){const M=y+0,E=y+1,A=y+2;f.push(M,E,E,A,A,M)}}const m=new(Nd(f)?Hd:Vd)(f,1);m.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function xv(a,e,t,n){const i=n.isWebGL2;let r;function s(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,d){a.drawElements(r,d,o,f*l),t.update(d,r,1)}function h(f,d,g){if(g===0)return;let _,m;if(i)_=a,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](r,d,o,f*l,g),t.update(d,r,g)}this.setMode=s,this.setIndex=c,this.render=u,this.renderInstances=h}function vv(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,o){switch(t.calls++,s){case 4:t.triangles+=o*(r/3);break;case 1:t.lines+=o*(r/2);break;case 3:t.lines+=o*(r-1);break;case 2:t.lines+=o*r;break;case 0:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function yv(a,e){return a[0]-e[0]}function Mv(a,e){return Math.abs(e[1])-Math.abs(a[1])}function Sv(a,e,t){const n={},i=new Float32Array(8),r=new WeakMap,s=new _t,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let m=r.get(u);if(m===void 0||m.count!==_){let z=function(){I.dispose(),r.delete(u),u.removeEventListener("dispose",z)};var d=z;m!==void 0&&m.texture.dispose();const y=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],R=u.morphAttributes.color||[];let v=0;y===!0&&(v=1),x===!0&&(v=2),M===!0&&(v=3);let b=u.attributes.position.count*v,V=1;b>e.maxTextureSize&&(V=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const O=new Float32Array(b*V*4*_),I=new kd(O,b,V,_);I.type=Ji,I.needsUpdate=!0;const N=v*4;for(let $=0;$<_;$++){const X=E[$],G=A[$],ee=R[$],C=b*V*4*$;for(let ge=0;ge<X.count;ge++){const re=ge*N;y===!0&&(s.fromBufferAttribute(X,ge),O[C+re+0]=s.x,O[C+re+1]=s.y,O[C+re+2]=s.z,O[C+re+3]=0),x===!0&&(s.fromBufferAttribute(G,ge),O[C+re+4]=s.x,O[C+re+5]=s.y,O[C+re+6]=s.z,O[C+re+7]=0),M===!0&&(s.fromBufferAttribute(ee,ge),O[C+re+8]=s.x,O[C+re+9]=s.y,O[C+re+10]=s.z,O[C+re+11]=ee.itemSize===4?s.w:1)}}m={count:_,texture:I,size:new He(b,V)},r.set(u,m),u.addEventListener("dispose",z)}let p=0;for(let y=0;y<f.length;y++)p+=f[y];const S=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(a,"morphTargetBaseInfluence",S),h.getUniforms().setValue(a,"morphTargetInfluences",f),h.getUniforms().setValue(a,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(a,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let x=0;x<g;x++)_[x]=[x,0];n[u.id]=_}for(let x=0;x<g;x++){const M=_[x];M[0]=x,M[1]=f[x]}_.sort(Mv);for(let x=0;x<8;x++)x<g&&_[x][1]?(o[x][0]=_[x][0],o[x][1]=_[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(yv);const m=u.morphAttributes.position,p=u.morphAttributes.normal;let S=0;for(let x=0;x<8;x++){const M=o[x],E=M[0],A=M[1];E!==Number.MAX_SAFE_INTEGER&&A?(m&&u.getAttribute("morphTarget"+x)!==m[E]&&u.setAttribute("morphTarget"+x,m[E]),p&&u.getAttribute("morphNormal"+x)!==p[E]&&u.setAttribute("morphNormal"+x,p[E]),i[x]=A,S+=A):(m&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),p&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),i[x]=0)}const y=u.morphTargetsRelative?1:1-S;h.getUniforms().setValue(a,"morphTargetBaseInfluence",y),h.getUniforms().setValue(a,"morphTargetInfluences",i)}}return{update:l}}function bv(a,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function s(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:s}}const jd=new Gt,Yd=new kd,Kd=new f_,$d=new Xd,Yh=[],Kh=[],$h=new Float32Array(16),Zh=new Float32Array(9),Jh=new Float32Array(4);function ro(a,e,t){const n=a[0];if(n<=0||n>0)return a;const i=e*t;let r=Yh[i];if(r===void 0&&(r=new Float32Array(i),Yh[i]=r),e!==0){n.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=t,a[s].toArray(r,o)}return r}function kt(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function zt(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function yl(a,e){let t=Kh[e];t===void 0&&(t=new Int32Array(e),Kh[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function wv(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function Tv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;a.uniform2fv(this.addr,e),zt(t,e)}}function Av(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;a.uniform3fv(this.addr,e),zt(t,e)}}function Ev(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;a.uniform4fv(this.addr,e),zt(t,e)}}function Cv(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,n))return;Jh.set(n),a.uniformMatrix2fv(this.addr,!1,Jh),zt(t,n)}}function Lv(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,n))return;Zh.set(n),a.uniformMatrix3fv(this.addr,!1,Zh),zt(t,n)}}function Rv(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,n))return;$h.set(n),a.uniformMatrix4fv(this.addr,!1,$h),zt(t,n)}}function Pv(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function Dv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;a.uniform2iv(this.addr,e),zt(t,e)}}function Iv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;a.uniform3iv(this.addr,e),zt(t,e)}}function Ov(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;a.uniform4iv(this.addr,e),zt(t,e)}}function Nv(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function Uv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;a.uniform2uiv(this.addr,e),zt(t,e)}}function Fv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;a.uniform3uiv(this.addr,e),zt(t,e)}}function kv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;a.uniform4uiv(this.addr,e),zt(t,e)}}function zv(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||jd,i)}function Bv(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Kd,i)}function Vv(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||$d,i)}function Hv(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Yd,i)}function Gv(a){switch(a){case 5126:return wv;case 35664:return Tv;case 35665:return Av;case 35666:return Ev;case 35674:return Cv;case 35675:return Lv;case 35676:return Rv;case 5124:case 35670:return Pv;case 35667:case 35671:return Dv;case 35668:case 35672:return Iv;case 35669:case 35673:return Ov;case 5125:return Nv;case 36294:return Uv;case 36295:return Fv;case 36296:return kv;case 35678:case 36198:case 36298:case 36306:case 35682:return zv;case 35679:case 36299:case 36307:return Bv;case 35680:case 36300:case 36308:case 36293:return Vv;case 36289:case 36303:case 36311:case 36292:return Hv}}function Wv(a,e){a.uniform1fv(this.addr,e)}function Xv(a,e){const t=ro(e,this.size,2);a.uniform2fv(this.addr,t)}function qv(a,e){const t=ro(e,this.size,3);a.uniform3fv(this.addr,t)}function jv(a,e){const t=ro(e,this.size,4);a.uniform4fv(this.addr,t)}function Yv(a,e){const t=ro(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function Kv(a,e){const t=ro(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function $v(a,e){const t=ro(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function Zv(a,e){a.uniform1iv(this.addr,e)}function Jv(a,e){a.uniform2iv(this.addr,e)}function Qv(a,e){a.uniform3iv(this.addr,e)}function ey(a,e){a.uniform4iv(this.addr,e)}function ty(a,e){a.uniform1uiv(this.addr,e)}function ny(a,e){a.uniform2uiv(this.addr,e)}function iy(a,e){a.uniform3uiv(this.addr,e)}function ry(a,e){a.uniform4uiv(this.addr,e)}function sy(a,e,t){const n=this.cache,i=e.length,r=yl(t,i);kt(n,r)||(a.uniform1iv(this.addr,r),zt(n,r));for(let s=0;s!==i;++s)t.setTexture2D(e[s]||jd,r[s])}function oy(a,e,t){const n=this.cache,i=e.length,r=yl(t,i);kt(n,r)||(a.uniform1iv(this.addr,r),zt(n,r));for(let s=0;s!==i;++s)t.setTexture3D(e[s]||Kd,r[s])}function ay(a,e,t){const n=this.cache,i=e.length,r=yl(t,i);kt(n,r)||(a.uniform1iv(this.addr,r),zt(n,r));for(let s=0;s!==i;++s)t.setTextureCube(e[s]||$d,r[s])}function ly(a,e,t){const n=this.cache,i=e.length,r=yl(t,i);kt(n,r)||(a.uniform1iv(this.addr,r),zt(n,r));for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||Yd,r[s])}function cy(a){switch(a){case 5126:return Wv;case 35664:return Xv;case 35665:return qv;case 35666:return jv;case 35674:return Yv;case 35675:return Kv;case 35676:return $v;case 5124:case 35670:return Zv;case 35667:case 35671:return Jv;case 35668:case 35672:return Qv;case 35669:case 35673:return ey;case 5125:return ty;case 36294:return ny;case 36295:return iy;case 36296:return ry;case 35678:case 36198:case 36298:case 36306:case 35682:return sy;case 35679:case 36299:case 36307:return oy;case 35680:case 36300:case 36308:case 36293:return ay;case 36289:case 36303:case 36311:case 36292:return ly}}class uy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Gv(t.type)}}class hy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=cy(t.type)}}class fy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const nc=/(\w+)(\])?(\[|\.)?/g;function Qh(a,e){a.seq.push(e),a.map[e.id]=e}function dy(a,e,t){const n=a.name,i=n.length;for(nc.lastIndex=0;;){const r=nc.exec(n),s=nc.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===i){Qh(t,c===void 0?new uy(o,a,e):new hy(o,a,e));break}else{let h=t.map[o];h===void 0&&(h=new fy(o),Qh(t,h)),t=h}}}class Ga{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),s=e.getUniformLocation(t,r.name);dy(r,s,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,s=t.length;r!==s;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const s=e[i];s.id in t&&n.push(s)}return n}}function ef(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}let py=0;function my(a,e){const t=a.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=i;s<r;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}function gy(a){switch(a){case Hr:return["Linear","( value )"];case ct:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function tf(a,e,t){const n=a.getShaderParameter(e,35713),i=a.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const s=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+my(a.getShaderSource(e),s)}else return i}function _y(a,e){const t=gy(e);return"vec4 "+a+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function xy(a,e){let t;switch(e){case _g:t="Linear";break;case xg:t="Reinhard";break;case Ad:t="OptimizedCineon";break;case vg:t="ACESFilmic";break;case yg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function vy(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.normalMapTangentSpace||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(So).join(`
`)}function yy(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function My(a,e){const t={},n=a.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=a.getActiveAttrib(e,i),s=r.name;let o=1;r.type===35674&&(o=2),r.type===35675&&(o=3),r.type===35676&&(o=4),t[s]={type:r.type,location:a.getAttribLocation(e,s),locationSize:o}}return t}function So(a){return a!==""}function nf(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rf(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Sy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nc(a){return a.replace(Sy,by)}function by(a,e){const t=je[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Nc(t)}const wy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sf(a){return a.replace(wy,Ty)}function Ty(a,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function of(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ay(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Md?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===Sd?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===Mo&&(e="SHADOWMAP_TYPE_VSM"),e}function Ey(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Gs:case Ws:e="ENVMAP_TYPE_CUBE";break;case gl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Cy(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Ws:e="ENVMAP_MODE_REFRACTION";break}return e}function Ly(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Td:e="ENVMAP_BLENDING_MULTIPLY";break;case mg:e="ENVMAP_BLENDING_MIX";break;case gg:e="ENVMAP_BLENDING_ADD";break}return e}function Ry(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Py(a,e,t,n){const i=a.getContext(),r=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=Ay(t),c=Ey(t),u=Cy(t),h=Ly(t),f=Ry(t),d=t.isWebGL2?"":vy(t),g=yy(r),_=i.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(So).join(`
`),m.length>0&&(m+=`
`),p=[d,g].filter(So).join(`
`),p.length>0&&(p+=`
`)):(m=[of(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(So).join(`
`),p=[d,of(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ni?"#define TONE_MAPPING":"",t.toneMapping!==Ni?je.tonemapping_pars_fragment:"",t.toneMapping!==Ni?xy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.encodings_pars_fragment,_y("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(So).join(`
`)),s=Nc(s),s=nf(s,t),s=rf(s,t),o=Nc(o),o=nf(o,t),o=rf(o,t),s=sf(s),o=sf(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Th?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Th?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=S+m+s,x=S+p+o,M=ef(i,35633,y),E=ef(i,35632,x);if(i.attachShader(_,M),i.attachShader(_,E),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),a.debug.checkShaderErrors){const v=i.getProgramInfoLog(_).trim(),b=i.getShaderInfoLog(M).trim(),V=i.getShaderInfoLog(E).trim();let O=!0,I=!0;if(i.getProgramParameter(_,35714)===!1)if(O=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(i,_,M,E);else{const N=tf(i,M,"vertex"),z=tf(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,35715)+`

Program Info Log: `+v+`
`+N+`
`+z)}else v!==""?console.warn("THREE.WebGLProgram: Program Info Log:",v):(b===""||V==="")&&(I=!1);I&&(this.diagnostics={runnable:O,programLog:v,vertexShader:{log:b,prefix:m},fragmentShader:{log:V,prefix:p}})}i.deleteShader(M),i.deleteShader(E);let A;this.getUniforms=function(){return A===void 0&&(A=new Ga(i,_)),A};let R;return this.getAttributes=function(){return R===void 0&&(R=My(i,_)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.name=t.shaderName,this.id=py++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=E,this}let Dy=0;class Iy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Oy(e),t.set(e,n)),n}}class Oy{constructor(e){this.id=Dy++,this.code=e,this.usedTimes=0}}function Ny(a,e,t,n,i,r,s){const o=new zd,l=new Iy,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return v===1?"uv2":"uv"}function m(v,b,V,O,I){const N=O.fog,z=I.geometry,$=v.isMeshStandardMaterial?O.environment:null,X=(v.isMeshStandardMaterial?t:e).get(v.envMap||$),G=X&&X.mapping===gl?X.image.height:null,ee=g[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const C=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ge=C!==void 0?C.length:0;let re=0;z.morphAttributes.position!==void 0&&(re=1),z.morphAttributes.normal!==void 0&&(re=2),z.morphAttributes.color!==void 0&&(re=3);let Y,J,se,ce;if(ee){const he=di[ee];Y=he.vertexShader,J=he.fragmentShader}else Y=v.vertexShader,J=v.fragmentShader,l.update(v),se=l.getVertexShaderID(v),ce=l.getFragmentShaderID(v);const B=a.getRenderTarget(),Ae=I.isInstancedMesh===!0,Me=!!v.map,ae=!!v.matcap,Se=!!X,Be=!!v.aoMap,oe=!!v.lightMap,Ee=!!v.bumpMap,Ke=!!v.normalMap,$e=!!v.displacementMap,H=!!v.emissiveMap,tt=!!v.metalnessMap,Ve=!!v.roughnessMap,st=v.clearcoat>0,Ze=v.iridescence>0,L=v.sheen>0,w=v.transmission>0,K=st&&!!v.clearcoatMap,ne=st&&!!v.clearcoatNormalMap,te=st&&!!v.clearcoatRoughnessMap,le=Ze&&!!v.iridescenceMap,D=Ze&&!!v.iridescenceThicknessMap,Q=L&&!!v.sheenColorMap,W=L&&!!v.sheenRoughnessMap,ue=!!v.specularMap,de=!!v.specularColorMap,Te=!!v.specularIntensityMap,me=w&&!!v.transmissionMap,be=w&&!!v.thicknessMap,Pe=!!v.gradientMap,Ue=!!v.alphaMap,ut=v.alphaTest>0,P=!!v.extensions,Z=!!z.attributes.uv2;return{isWebGL2:u,shaderID:ee,shaderName:v.type,vertexShader:Y,fragmentShader:J,defines:v.defines,customVertexShaderID:se,customFragmentShaderID:ce,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,instancing:Ae,instancingColor:Ae&&I.instanceColor!==null,supportsVertexTextures:f,outputEncoding:B===null?a.outputEncoding:B.isXRRenderTarget===!0?B.texture.encoding:Hr,map:Me,matcap:ae,envMap:Se,envMapMode:Se&&X.mapping,envMapCubeUVHeight:G,aoMap:Be,lightMap:oe,bumpMap:Ee,normalMap:Ke,displacementMap:f&&$e,emissiveMap:H,normalMapObjectSpace:Ke&&v.normalMapType===Gg,normalMapTangentSpace:Ke&&v.normalMapType===Pd,decodeVideoTexture:Me&&v.map.isVideoTexture===!0&&v.map.encoding===ct,metalnessMap:tt,roughnessMap:Ve,clearcoat:st,clearcoatMap:K,clearcoatNormalMap:ne,clearcoatRoughnessMap:te,iridescence:Ze,iridescenceMap:le,iridescenceThicknessMap:D,sheen:L,sheenColorMap:Q,sheenRoughnessMap:W,specularMap:ue,specularColorMap:de,specularIntensityMap:Te,transmission:w,transmissionMap:me,thicknessMap:be,gradientMap:Pe,opaque:v.transparent===!1&&v.blending===Ds,alphaMap:Ue,alphaTest:ut,combine:v.combine,mapUv:Me&&_(v.map.channel),aoMapUv:Be&&_(v.aoMap.channel),lightMapUv:oe&&_(v.lightMap.channel),bumpMapUv:Ee&&_(v.bumpMap.channel),normalMapUv:Ke&&_(v.normalMap.channel),displacementMapUv:$e&&_(v.displacementMap.channel),emissiveMapUv:H&&_(v.emissiveMap.channel),metalnessMapUv:tt&&_(v.metalnessMap.channel),roughnessMapUv:Ve&&_(v.roughnessMap.channel),clearcoatMapUv:K&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:ne&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:D&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Q&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:W&&_(v.sheenRoughnessMap.channel),specularMapUv:ue&&_(v.specularMap.channel),specularColorMapUv:de&&_(v.specularColorMap.channel),specularIntensityMapUv:Te&&_(v.specularIntensityMap.channel),transmissionMapUv:me&&_(v.transmissionMap.channel),thicknessMapUv:be&&_(v.thicknessMap.channel),alphaMapUv:Ue&&_(v.alphaMap.channel),vertexTangents:Ke&&!!z.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUvs2:Z,pointsUvs:I.isPoints===!0&&!!z.attributes.uv&&(Me||Ue),fog:!!N,useFog:v.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:I.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:re,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:a.shadowMap.enabled&&V.length>0,shadowMapType:a.shadowMap.type,toneMapping:v.toneMapped?a.toneMapping:Ni,useLegacyLights:a.useLegacyLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===pi,flipSided:v.side===vn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:P&&v.extensions.derivatives===!0,extensionFragDepth:P&&v.extensions.fragDepth===!0,extensionDrawBuffers:P&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:P&&v.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const V in v.defines)b.push(V),b.push(v.defines[V]);return v.isRawShaderMaterial===!1&&(S(b,v),y(b,v),b.push(a.outputEncoding)),b.push(v.customProgramCacheKey),b.join()}function S(v,b){v.push(b.precision),v.push(b.outputEncoding),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function y(v,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUvs2&&o.enable(13),b.vertexTangents&&o.enable(14),v.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.decodeVideoTexture&&o.enable(17),b.opaque&&o.enable(18),b.pointsUvs&&o.enable(19),v.push(o.mask)}function x(v){const b=g[v.type];let V;if(b){const O=di[b];V=w_.clone(O.uniforms)}else V=v.uniforms;return V}function M(v,b){let V;for(let O=0,I=c.length;O<I;O++){const N=c[O];if(N.cacheKey===b){V=N,++V.usedTimes;break}}return V===void 0&&(V=new Py(a,b,v,r),c.push(V)),V}function E(v){if(--v.usedTimes===0){const b=c.indexOf(v);c[b]=c[c.length-1],c.pop(),v.destroy()}}function A(v){l.remove(v)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:M,releaseProgram:E,releaseShaderCache:A,programs:c,dispose:R}}function Uy(){let a=new WeakMap;function e(r){let s=a.get(r);return s===void 0&&(s={},a.set(r,s)),s}function t(r){a.delete(r)}function n(r,s,o){a.get(r)[s]=o}function i(){a=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Fy(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function af(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function lf(){const a=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function s(h,f,d,g,_,m){let p=a[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},a[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function o(h,f,d,g,_,m){const p=s(h,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(h,f,d,g,_,m){const p=s(h,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||Fy),n.length>1&&n.sort(f||af),i.length>1&&i.sort(f||af)}function u(){for(let h=e,f=a.length;h<f;h++){const d=a[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function ky(){let a=new WeakMap;function e(n,i){const r=a.get(n);let s;return r===void 0?(s=new lf,a.set(n,[s])):i>=r.length?(s=new lf,r.push(s)):s=r[i],s}function t(){a=new WeakMap}return{get:e,dispose:t}}function zy(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Xe};break;case"SpotLight":t={position:new U,direction:new U,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new U,halfWidth:new U,halfHeight:new U};break}return a[e.id]=t,t}}}function By(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let Vy=0;function Hy(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function Gy(a,e){const t=new zy,n=By(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new U);const r=new U,s=new et,o=new et;function l(u,h){let f=0,d=0,g=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let _=0,m=0,p=0,S=0,y=0,x=0,M=0,E=0,A=0,R=0;u.sort(Hy);const v=h===!0?Math.PI:1;for(let V=0,O=u.length;V<O;V++){const I=u[V],N=I.color,z=I.intensity,$=I.distance,X=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=N.r*z*v,d+=N.g*z*v,g+=N.b*z*v;else if(I.isLightProbe)for(let G=0;G<9;G++)i.probe[G].addScaledVector(I.sh.coefficients[G],z);else if(I.isDirectionalLight){const G=t.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity*v),I.castShadow){const ee=I.shadow,C=n.get(I);C.shadowBias=ee.bias,C.shadowNormalBias=ee.normalBias,C.shadowRadius=ee.radius,C.shadowMapSize=ee.mapSize,i.directionalShadow[_]=C,i.directionalShadowMap[_]=X,i.directionalShadowMatrix[_]=I.shadow.matrix,x++}i.directional[_]=G,_++}else if(I.isSpotLight){const G=t.get(I);G.position.setFromMatrixPosition(I.matrixWorld),G.color.copy(N).multiplyScalar(z*v),G.distance=$,G.coneCos=Math.cos(I.angle),G.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),G.decay=I.decay,i.spot[p]=G;const ee=I.shadow;if(I.map&&(i.spotLightMap[A]=I.map,A++,ee.updateMatrices(I),I.castShadow&&R++),i.spotLightMatrix[p]=ee.matrix,I.castShadow){const C=n.get(I);C.shadowBias=ee.bias,C.shadowNormalBias=ee.normalBias,C.shadowRadius=ee.radius,C.shadowMapSize=ee.mapSize,i.spotShadow[p]=C,i.spotShadowMap[p]=X,E++}p++}else if(I.isRectAreaLight){const G=t.get(I);G.color.copy(N).multiplyScalar(z),G.halfWidth.set(I.width*.5,0,0),G.halfHeight.set(0,I.height*.5,0),i.rectArea[S]=G,S++}else if(I.isPointLight){const G=t.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity*v),G.distance=I.distance,G.decay=I.decay,I.castShadow){const ee=I.shadow,C=n.get(I);C.shadowBias=ee.bias,C.shadowNormalBias=ee.normalBias,C.shadowRadius=ee.radius,C.shadowMapSize=ee.mapSize,C.shadowCameraNear=ee.camera.near,C.shadowCameraFar=ee.camera.far,i.pointShadow[m]=C,i.pointShadowMap[m]=X,i.pointShadowMatrix[m]=I.shadow.matrix,M++}i.point[m]=G,m++}else if(I.isHemisphereLight){const G=t.get(I);G.skyColor.copy(I.color).multiplyScalar(z*v),G.groundColor.copy(I.groundColor).multiplyScalar(z*v),i.hemi[y]=G,y++}}S>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=g;const b=i.hash;(b.directionalLength!==_||b.pointLength!==m||b.spotLength!==p||b.rectAreaLength!==S||b.hemiLength!==y||b.numDirectionalShadows!==x||b.numPointShadows!==M||b.numSpotShadows!==E||b.numSpotMaps!==A)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=S,i.point.length=m,i.hemi.length=y,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=E+A-R,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=R,b.directionalLength=_,b.pointLength=m,b.spotLength=p,b.rectAreaLength=S,b.hemiLength=y,b.numDirectionalShadows=x,b.numPointShadows=M,b.numSpotShadows=E,b.numSpotMaps=A,i.version=Vy++)}function c(u,h){let f=0,d=0,g=0,_=0,m=0;const p=h.matrixWorldInverse;for(let S=0,y=u.length;S<y;S++){const x=u[S];if(x.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),f++}else if(x.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),g++}else if(x.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),o.identity(),s.copy(x.matrixWorld),s.premultiply(p),o.extractRotation(s),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const M=i.hemi[m];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function cf(a,e){const t=new Gy(a,e),n=[],i=[];function r(){n.length=0,i.length=0}function s(h){n.push(h)}function o(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:o}}function Wy(a,e){let t=new WeakMap;function n(r,s=0){const o=t.get(r);let l;return o===void 0?(l=new cf(a,e),t.set(r,[l])):s>=o.length?(l=new cf(a,e),o.push(l)):l=o[s],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Xy extends _i{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qy extends _i{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const jy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ky(a,e,t){let n=new gu;const i=new He,r=new He,s=new _t,o=new Xy({depthPacking:Hg}),l=new qy,c={},u=t.maxTextureSize,h={[ki]:vn,[vn]:ki,[pi]:pi},f=new Wr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:jy,fragmentShader:Yy}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new ui;g.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Un(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Md,this.render=function(x,M,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||x.length===0)return;const A=a.getRenderTarget(),R=a.getActiveCubeFace(),v=a.getActiveMipmapLevel(),b=a.state;b.setBlending(or),b.buffers.color.setClear(1,1,1,1),b.buffers.depth.setTest(!0),b.setScissorTest(!1);for(let V=0,O=x.length;V<O;V++){const I=x[V],N=I.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;i.copy(N.mapSize);const z=N.getFrameExtents();if(i.multiply(z),r.copy(N.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/z.x),i.x=r.x*z.x,N.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/z.y),i.y=r.y*z.y,N.mapSize.y=r.y)),N.map===null){const X=this.type!==Mo?{minFilter:Nt,magFilter:Nt}:{};N.map=new Gr(i.x,i.y,X),N.map.texture.name=I.name+".shadowMap",N.camera.updateProjectionMatrix()}a.setRenderTarget(N.map),a.clear();const $=N.getViewportCount();for(let X=0;X<$;X++){const G=N.getViewport(X);s.set(r.x*G.x,r.y*G.y,r.x*G.z,r.y*G.w),b.viewport(s),N.updateMatrices(I,X),n=N.getFrustum(),y(M,E,N.camera,I,this.type)}N.isPointLightShadow!==!0&&this.type===Mo&&p(N,E),N.needsUpdate=!1}m.needsUpdate=!1,a.setRenderTarget(A,R,v)};function p(x,M){const E=e.update(_);f.defines.VSM_SAMPLES!==x.blurSamples&&(f.defines.VSM_SAMPLES=x.blurSamples,d.defines.VSM_SAMPLES=x.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new Gr(i.x,i.y)),f.uniforms.shadow_pass.value=x.map.texture,f.uniforms.resolution.value=x.mapSize,f.uniforms.radius.value=x.radius,a.setRenderTarget(x.mapPass),a.clear(),a.renderBufferDirect(M,null,E,f,_,null),d.uniforms.shadow_pass.value=x.mapPass.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,a.setRenderTarget(x.map),a.clear(),a.renderBufferDirect(M,null,E,d,_,null)}function S(x,M,E,A){let R=null;const v=E.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(v!==void 0)R=v;else if(R=E.isPointLight===!0?l:o,a.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const b=R.uuid,V=M.uuid;let O=c[b];O===void 0&&(O={},c[b]=O);let I=O[V];I===void 0&&(I=R.clone(),O[V]=I),R=I}if(R.visible=M.visible,R.wireframe=M.wireframe,A===Mo?R.side=M.shadowSide!==null?M.shadowSide:M.side:R.side=M.shadowSide!==null?M.shadowSide:h[M.side],R.alphaMap=M.alphaMap,R.alphaTest=M.alphaTest,R.map=M.map,R.clipShadows=M.clipShadows,R.clippingPlanes=M.clippingPlanes,R.clipIntersection=M.clipIntersection,R.displacementMap=M.displacementMap,R.displacementScale=M.displacementScale,R.displacementBias=M.displacementBias,R.wireframeLinewidth=M.wireframeLinewidth,R.linewidth=M.linewidth,E.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const b=a.properties.get(R);b.light=E}return R}function y(x,M,E,A,R){if(x.visible===!1)return;if(x.layers.test(M.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&R===Mo)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,x.matrixWorld);const V=e.update(x),O=x.material;if(Array.isArray(O)){const I=V.groups;for(let N=0,z=I.length;N<z;N++){const $=I[N],X=O[$.materialIndex];if(X&&X.visible){const G=S(x,X,A,R);a.renderBufferDirect(E,null,V,G,x,$)}}}else if(O.visible){const I=S(x,O,A,R);a.renderBufferDirect(E,null,V,I,x,null)}}const b=x.children;for(let V=0,O=b.length;V<O;V++)y(b[V],M,E,A,R)}}function $y(a,e,t){const n=t.isWebGL2;function i(){let P=!1;const Z=new _t;let ie=null;const he=new _t(0,0,0,0);return{setMask:function(ye){ie!==ye&&!P&&(a.colorMask(ye,ye,ye,ye),ie=ye)},setLocked:function(ye){P=ye},setClear:function(ye,at,ht,xt,De){De===!0&&(ye*=xt,at*=xt,ht*=xt),Z.set(ye,at,ht,xt),he.equals(Z)===!1&&(a.clearColor(ye,at,ht,xt),he.copy(Z))},reset:function(){P=!1,ie=null,he.set(-1,0,0,0)}}}function r(){let P=!1,Z=null,ie=null,he=null;return{setTest:function(ye){ye?B(2929):Ae(2929)},setMask:function(ye){Z!==ye&&!P&&(a.depthMask(ye),Z=ye)},setFunc:function(ye){if(ie!==ye){switch(ye){case lg:a.depthFunc(512);break;case cg:a.depthFunc(519);break;case ug:a.depthFunc(513);break;case Ec:a.depthFunc(515);break;case hg:a.depthFunc(514);break;case fg:a.depthFunc(518);break;case dg:a.depthFunc(516);break;case pg:a.depthFunc(517);break;default:a.depthFunc(515)}ie=ye}},setLocked:function(ye){P=ye},setClear:function(ye){he!==ye&&(a.clearDepth(ye),he=ye)},reset:function(){P=!1,Z=null,ie=null,he=null}}}function s(){let P=!1,Z=null,ie=null,he=null,ye=null,at=null,ht=null,xt=null,De=null;return{setTest:function(_e){P||(_e?B(2960):Ae(2960))},setMask:function(_e){Z!==_e&&!P&&(a.stencilMask(_e),Z=_e)},setFunc:function(_e,ze,lt){(ie!==_e||he!==ze||ye!==lt)&&(a.stencilFunc(_e,ze,lt),ie=_e,he=ze,ye=lt)},setOp:function(_e,ze,lt){(at!==_e||ht!==ze||xt!==lt)&&(a.stencilOp(_e,ze,lt),at=_e,ht=ze,xt=lt)},setLocked:function(_e){P=_e},setClear:function(_e){De!==_e&&(a.clearStencil(_e),De=_e)},reset:function(){P=!1,Z=null,ie=null,he=null,ye=null,at=null,ht=null,xt=null,De=null}}}const o=new i,l=new r,c=new s,u=new WeakMap,h=new WeakMap;let f={},d={},g=new WeakMap,_=[],m=null,p=!1,S=null,y=null,x=null,M=null,E=null,A=null,R=null,v=!1,b=null,V=null,O=null,I=null,N=null;const z=a.getParameter(35661);let $=!1,X=0;const G=a.getParameter(7938);G.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(G)[1]),$=X>=1):G.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),$=X>=2);let ee=null,C={};const ge=a.getParameter(3088),re=a.getParameter(2978),Y=new _t().fromArray(ge),J=new _t().fromArray(re);function se(P,Z,ie){const he=new Uint8Array(4),ye=a.createTexture();a.bindTexture(P,ye),a.texParameteri(P,10241,9728),a.texParameteri(P,10240,9728);for(let at=0;at<ie;at++)a.texImage2D(Z+at,0,6408,1,1,0,6408,5121,he);return ye}const ce={};ce[3553]=se(3553,3553,1),ce[34067]=se(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),B(2929),l.setFunc(Ec),$e(!1),H($u),B(2884),Ee(or);function B(P){f[P]!==!0&&(a.enable(P),f[P]=!0)}function Ae(P){f[P]!==!1&&(a.disable(P),f[P]=!1)}function Me(P,Z){return d[P]!==Z?(a.bindFramebuffer(P,Z),d[P]=Z,n&&(P===36009&&(d[36160]=Z),P===36160&&(d[36009]=Z)),!0):!1}function ae(P,Z){let ie=_,he=!1;if(P)if(ie=g.get(Z),ie===void 0&&(ie=[],g.set(Z,ie)),P.isWebGLMultipleRenderTargets){const ye=P.texture;if(ie.length!==ye.length||ie[0]!==36064){for(let at=0,ht=ye.length;at<ht;at++)ie[at]=36064+at;ie.length=ye.length,he=!0}}else ie[0]!==36064&&(ie[0]=36064,he=!0);else ie[0]!==1029&&(ie[0]=1029,he=!0);he&&(t.isWebGL2?a.drawBuffers(ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie))}function Se(P){return m!==P?(a.useProgram(P),m=P,!0):!1}const Be={[Ss]:32774,[Zm]:32778,[Jm]:32779};if(n)Be[eh]=32775,Be[th]=32776;else{const P=e.get("EXT_blend_minmax");P!==null&&(Be[eh]=P.MIN_EXT,Be[th]=P.MAX_EXT)}const oe={[Qm]:0,[eg]:1,[tg]:768,[bd]:770,[ag]:776,[sg]:774,[ig]:772,[ng]:769,[wd]:771,[og]:775,[rg]:773};function Ee(P,Z,ie,he,ye,at,ht,xt){if(P===or){p===!0&&(Ae(3042),p=!1);return}if(p===!1&&(B(3042),p=!0),P!==$m){if(P!==S||xt!==v){if((y!==Ss||E!==Ss)&&(a.blendEquation(32774),y=Ss,E=Ss),xt)switch(P){case Ds:a.blendFuncSeparate(1,771,1,771);break;case Zu:a.blendFunc(1,1);break;case Ju:a.blendFuncSeparate(0,769,0,1);break;case Qu:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Ds:a.blendFuncSeparate(770,771,1,771);break;case Zu:a.blendFunc(770,1);break;case Ju:a.blendFuncSeparate(0,769,0,1);break;case Qu:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}x=null,M=null,A=null,R=null,S=P,v=xt}return}ye=ye||Z,at=at||ie,ht=ht||he,(Z!==y||ye!==E)&&(a.blendEquationSeparate(Be[Z],Be[ye]),y=Z,E=ye),(ie!==x||he!==M||at!==A||ht!==R)&&(a.blendFuncSeparate(oe[ie],oe[he],oe[at],oe[ht]),x=ie,M=he,A=at,R=ht),S=P,v=!1}function Ke(P,Z){P.side===pi?Ae(2884):B(2884);let ie=P.side===vn;Z&&(ie=!ie),$e(ie),P.blending===Ds&&P.transparent===!1?Ee(or):Ee(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);const he=P.stencilWrite;c.setTest(he),he&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ve(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?B(32926):Ae(32926)}function $e(P){b!==P&&(P?a.frontFace(2304):a.frontFace(2305),b=P)}function H(P){P!==Ym?(B(2884),P!==V&&(P===$u?a.cullFace(1029):P===Km?a.cullFace(1028):a.cullFace(1032))):Ae(2884),V=P}function tt(P){P!==O&&($&&a.lineWidth(P),O=P)}function Ve(P,Z,ie){P?(B(32823),(I!==Z||N!==ie)&&(a.polygonOffset(Z,ie),I=Z,N=ie)):Ae(32823)}function st(P){P?B(3089):Ae(3089)}function Ze(P){P===void 0&&(P=33984+z-1),ee!==P&&(a.activeTexture(P),ee=P)}function L(P,Z,ie){ie===void 0&&(ee===null?ie=33984+z-1:ie=ee);let he=C[ie];he===void 0&&(he={type:void 0,texture:void 0},C[ie]=he),(he.type!==P||he.texture!==Z)&&(ee!==ie&&(a.activeTexture(ie),ee=ie),a.bindTexture(P,Z||ce[P]),he.type=P,he.texture=Z)}function w(){const P=C[ee];P!==void 0&&P.type!==void 0&&(a.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function K(){try{a.compressedTexImage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{a.compressedTexImage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function te(){try{a.texSubImage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function le(){try{a.texSubImage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function D(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function W(){try{a.texStorage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ue(){try{a.texStorage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function de(){try{a.texImage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Te(){try{a.texImage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function me(P){Y.equals(P)===!1&&(a.scissor(P.x,P.y,P.z,P.w),Y.copy(P))}function be(P){J.equals(P)===!1&&(a.viewport(P.x,P.y,P.z,P.w),J.copy(P))}function Pe(P,Z){let ie=h.get(Z);ie===void 0&&(ie=new WeakMap,h.set(Z,ie));let he=ie.get(P);he===void 0&&(he=a.getUniformBlockIndex(Z,P.name),ie.set(P,he))}function Ue(P,Z){const he=h.get(Z).get(P);u.get(Z)!==he&&(a.uniformBlockBinding(Z,he,P.__bindingPointIndex),u.set(Z,he))}function ut(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),n===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),f={},ee=null,C={},d={},g=new WeakMap,_=[],m=null,p=!1,S=null,y=null,x=null,M=null,E=null,A=null,R=null,v=!1,b=null,V=null,O=null,I=null,N=null,Y.set(0,0,a.canvas.width,a.canvas.height),J.set(0,0,a.canvas.width,a.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:B,disable:Ae,bindFramebuffer:Me,drawBuffers:ae,useProgram:Se,setBlending:Ee,setMaterial:Ke,setFlipSided:$e,setCullFace:H,setLineWidth:tt,setPolygonOffset:Ve,setScissorTest:st,activeTexture:Ze,bindTexture:L,unbindTexture:w,compressedTexImage2D:K,compressedTexImage3D:ne,texImage2D:de,texImage3D:Te,updateUBOMapping:Pe,uniformBlockBinding:Ue,texStorage2D:W,texStorage3D:ue,texSubImage2D:te,texSubImage3D:le,compressedTexSubImage2D:D,compressedTexSubImage3D:Q,scissor:me,viewport:be,reset:ut}}function Zy(a,e,t,n,i,r,s){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(L,w){return p?new OffscreenCanvas(L,w):Wo("canvas")}function y(L,w,K,ne){let te=1;if((L.width>ne||L.height>ne)&&(te=ne/Math.max(L.width,L.height)),te<1||w===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const le=w?Od:Math.floor,D=le(te*L.width),Q=le(te*L.height);_===void 0&&(_=S(D,Q));const W=K?S(D,Q):_;return W.width=D,W.height=Q,W.getContext("2d").drawImage(L,0,0,D,Q),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+D+"x"+Q+")."),W}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function x(L){return Oc(L.width)&&Oc(L.height)}function M(L){return o?!1:L.wrapS!==jn||L.wrapT!==jn||L.minFilter!==Nt&&L.minFilter!==tn}function E(L,w){return L.generateMipmaps&&w&&L.minFilter!==Nt&&L.minFilter!==tn}function A(L){a.generateMipmap(L)}function R(L,w,K,ne,te=!1){if(o===!1)return w;if(L!==null){if(a[L]!==void 0)return a[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let le=w;return w===6403&&(K===5126&&(le=33326),K===5131&&(le=33325),K===5121&&(le=33321)),w===33319&&(K===5126&&(le=33328),K===5131&&(le=33327),K===5121&&(le=33323)),w===6408&&(K===5126&&(le=34836),K===5131&&(le=34842),K===5121&&(le=ne===ct&&te===!1?35907:32856),K===32819&&(le=32854),K===32820&&(le=32855)),(le===33325||le===33326||le===33327||le===33328||le===34842||le===34836)&&e.get("EXT_color_buffer_float"),le}function v(L,w,K){return E(L,K)===!0||L.isFramebufferTexture&&L.minFilter!==Nt&&L.minFilter!==tn?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function b(L){return L===Nt||L===Rc||L===Ha?9728:9729}function V(L){const w=L.target;w.removeEventListener("dispose",V),I(w),w.isVideoTexture&&g.delete(w)}function O(L){const w=L.target;w.removeEventListener("dispose",O),z(w)}function I(L){const w=n.get(L);if(w.__webglInit===void 0)return;const K=L.source,ne=m.get(K);if(ne){const te=ne[w.__cacheKey];te.usedTimes--,te.usedTimes===0&&N(L),Object.keys(ne).length===0&&m.delete(K)}n.remove(L)}function N(L){const w=n.get(L);a.deleteTexture(w.__webglTexture);const K=L.source,ne=m.get(K);delete ne[w.__cacheKey],s.memory.textures--}function z(L){const w=L.texture,K=n.get(L),ne=n.get(w);if(ne.__webglTexture!==void 0&&(a.deleteTexture(ne.__webglTexture),s.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let te=0;te<6;te++)a.deleteFramebuffer(K.__webglFramebuffer[te]),K.__webglDepthbuffer&&a.deleteRenderbuffer(K.__webglDepthbuffer[te]);else{if(a.deleteFramebuffer(K.__webglFramebuffer),K.__webglDepthbuffer&&a.deleteRenderbuffer(K.__webglDepthbuffer),K.__webglMultisampledFramebuffer&&a.deleteFramebuffer(K.__webglMultisampledFramebuffer),K.__webglColorRenderbuffer)for(let te=0;te<K.__webglColorRenderbuffer.length;te++)K.__webglColorRenderbuffer[te]&&a.deleteRenderbuffer(K.__webglColorRenderbuffer[te]);K.__webglDepthRenderbuffer&&a.deleteRenderbuffer(K.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let te=0,le=w.length;te<le;te++){const D=n.get(w[te]);D.__webglTexture&&(a.deleteTexture(D.__webglTexture),s.memory.textures--),n.remove(w[te])}n.remove(w),n.remove(L)}let $=0;function X(){$=0}function G(){const L=$;return L>=l&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l),$+=1,L}function ee(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.encoding),w.join()}function C(L,w){const K=n.get(L);if(L.isVideoTexture&&st(L),L.isRenderTargetTexture===!1&&L.version>0&&K.__version!==L.version){const ne=L.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(K,L,w);return}}t.bindTexture(3553,K.__webglTexture,33984+w)}function ge(L,w){const K=n.get(L);if(L.version>0&&K.__version!==L.version){Ae(K,L,w);return}t.bindTexture(35866,K.__webglTexture,33984+w)}function re(L,w){const K=n.get(L);if(L.version>0&&K.__version!==L.version){Ae(K,L,w);return}t.bindTexture(32879,K.__webglTexture,33984+w)}function Y(L,w){const K=n.get(L);if(L.version>0&&K.__version!==L.version){Me(K,L,w);return}t.bindTexture(34067,K.__webglTexture,33984+w)}const J={[Xs]:10497,[jn]:33071,[tl]:33648},se={[Nt]:9728,[Rc]:9984,[Ha]:9986,[tn]:9729,[Cd]:9985,[Br]:9987};function ce(L,w,K){if(K?(a.texParameteri(L,10242,J[w.wrapS]),a.texParameteri(L,10243,J[w.wrapT]),(L===32879||L===35866)&&a.texParameteri(L,32882,J[w.wrapR]),a.texParameteri(L,10240,se[w.magFilter]),a.texParameteri(L,10241,se[w.minFilter])):(a.texParameteri(L,10242,33071),a.texParameteri(L,10243,33071),(L===32879||L===35866)&&a.texParameteri(L,32882,33071),(w.wrapS!==jn||w.wrapT!==jn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(L,10240,b(w.magFilter)),a.texParameteri(L,10241,b(w.minFilter)),w.minFilter!==Nt&&w.minFilter!==tn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Nt||w.minFilter!==Ha&&w.minFilter!==Br||w.type===Ji&&e.has("OES_texture_float_linear")===!1||o===!1&&w.type===Ho&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(a.texParameterf(L,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function B(L,w){let K=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",V));const ne=w.source;let te=m.get(ne);te===void 0&&(te={},m.set(ne,te));const le=ee(w);if(le!==L.__cacheKey){te[le]===void 0&&(te[le]={texture:a.createTexture(),usedTimes:0},s.memory.textures++,K=!0),te[le].usedTimes++;const D=te[L.__cacheKey];D!==void 0&&(te[L.__cacheKey].usedTimes--,D.usedTimes===0&&N(w)),L.__cacheKey=le,L.__webglTexture=te[le].texture}return K}function Ae(L,w,K){let ne=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ne=35866),w.isData3DTexture&&(ne=32879);const te=B(L,w),le=w.source;t.bindTexture(ne,L.__webglTexture,33984+K);const D=n.get(le);if(le.version!==D.__version||te===!0){t.activeTexture(33984+K),a.pixelStorei(37440,w.flipY),a.pixelStorei(37441,w.premultiplyAlpha),a.pixelStorei(3317,w.unpackAlignment),a.pixelStorei(37443,0);const Q=M(w)&&x(w.image)===!1;let W=y(w.image,Q,!1,u);W=Ze(w,W);const ue=x(W)||o,de=r.convert(w.format,w.encoding);let Te=r.convert(w.type),me=R(w.internalFormat,de,Te,w.encoding,w.isVideoTexture);ce(ne,w,ue);let be;const Pe=w.mipmaps,Ue=o&&w.isVideoTexture!==!0,ut=D.__version===void 0||te===!0,P=v(w,W,ue);if(w.isDepthTexture)me=6402,o?w.type===Ji?me=36012:w.type===Lr?me=33190:w.type===Is?me=35056:me=33189:w.type===Ji&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Dr&&me===6402&&w.type!==Ld&&w.type!==Lr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Lr,Te=r.convert(w.type)),w.format===qs&&me===6402&&(me=34041,w.type!==Is&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Is,Te=r.convert(w.type))),ut&&(Ue?t.texStorage2D(3553,1,me,W.width,W.height):t.texImage2D(3553,0,me,W.width,W.height,0,de,Te,null));else if(w.isDataTexture)if(Pe.length>0&&ue){Ue&&ut&&t.texStorage2D(3553,P,me,Pe[0].width,Pe[0].height);for(let Z=0,ie=Pe.length;Z<ie;Z++)be=Pe[Z],Ue?t.texSubImage2D(3553,Z,0,0,be.width,be.height,de,Te,be.data):t.texImage2D(3553,Z,me,be.width,be.height,0,de,Te,be.data);w.generateMipmaps=!1}else Ue?(ut&&t.texStorage2D(3553,P,me,W.width,W.height),t.texSubImage2D(3553,0,0,0,W.width,W.height,de,Te,W.data)):t.texImage2D(3553,0,me,W.width,W.height,0,de,Te,W.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ue&&ut&&t.texStorage3D(35866,P,me,Pe[0].width,Pe[0].height,W.depth);for(let Z=0,ie=Pe.length;Z<ie;Z++)be=Pe[Z],w.format!==Yn?de!==null?Ue?t.compressedTexSubImage3D(35866,Z,0,0,0,be.width,be.height,W.depth,de,be.data,0,0):t.compressedTexImage3D(35866,Z,me,be.width,be.height,W.depth,0,be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?t.texSubImage3D(35866,Z,0,0,0,be.width,be.height,W.depth,de,Te,be.data):t.texImage3D(35866,Z,me,be.width,be.height,W.depth,0,de,Te,be.data)}else{Ue&&ut&&t.texStorage2D(3553,P,me,Pe[0].width,Pe[0].height);for(let Z=0,ie=Pe.length;Z<ie;Z++)be=Pe[Z],w.format!==Yn?de!==null?Ue?t.compressedTexSubImage2D(3553,Z,0,0,be.width,be.height,de,be.data):t.compressedTexImage2D(3553,Z,me,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?t.texSubImage2D(3553,Z,0,0,be.width,be.height,de,Te,be.data):t.texImage2D(3553,Z,me,be.width,be.height,0,de,Te,be.data)}else if(w.isDataArrayTexture)Ue?(ut&&t.texStorage3D(35866,P,me,W.width,W.height,W.depth),t.texSubImage3D(35866,0,0,0,0,W.width,W.height,W.depth,de,Te,W.data)):t.texImage3D(35866,0,me,W.width,W.height,W.depth,0,de,Te,W.data);else if(w.isData3DTexture)Ue?(ut&&t.texStorage3D(32879,P,me,W.width,W.height,W.depth),t.texSubImage3D(32879,0,0,0,0,W.width,W.height,W.depth,de,Te,W.data)):t.texImage3D(32879,0,me,W.width,W.height,W.depth,0,de,Te,W.data);else if(w.isFramebufferTexture){if(ut)if(Ue)t.texStorage2D(3553,P,me,W.width,W.height);else{let Z=W.width,ie=W.height;for(let he=0;he<P;he++)t.texImage2D(3553,he,me,Z,ie,0,de,Te,null),Z>>=1,ie>>=1}}else if(Pe.length>0&&ue){Ue&&ut&&t.texStorage2D(3553,P,me,Pe[0].width,Pe[0].height);for(let Z=0,ie=Pe.length;Z<ie;Z++)be=Pe[Z],Ue?t.texSubImage2D(3553,Z,0,0,de,Te,be):t.texImage2D(3553,Z,me,de,Te,be);w.generateMipmaps=!1}else Ue?(ut&&t.texStorage2D(3553,P,me,W.width,W.height),t.texSubImage2D(3553,0,0,0,de,Te,W)):t.texImage2D(3553,0,me,de,Te,W);E(w,ue)&&A(ne),D.__version=le.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function Me(L,w,K){if(w.image.length!==6)return;const ne=B(L,w),te=w.source;t.bindTexture(34067,L.__webglTexture,33984+K);const le=n.get(te);if(te.version!==le.__version||ne===!0){t.activeTexture(33984+K),a.pixelStorei(37440,w.flipY),a.pixelStorei(37441,w.premultiplyAlpha),a.pixelStorei(3317,w.unpackAlignment),a.pixelStorei(37443,0);const D=w.isCompressedTexture||w.image[0].isCompressedTexture,Q=w.image[0]&&w.image[0].isDataTexture,W=[];for(let Z=0;Z<6;Z++)!D&&!Q?W[Z]=y(w.image[Z],!1,!0,c):W[Z]=Q?w.image[Z].image:w.image[Z],W[Z]=Ze(w,W[Z]);const ue=W[0],de=x(ue)||o,Te=r.convert(w.format,w.encoding),me=r.convert(w.type),be=R(w.internalFormat,Te,me,w.encoding),Pe=o&&w.isVideoTexture!==!0,Ue=le.__version===void 0||ne===!0;let ut=v(w,ue,de);ce(34067,w,de);let P;if(D){Pe&&Ue&&t.texStorage2D(34067,ut,be,ue.width,ue.height);for(let Z=0;Z<6;Z++){P=W[Z].mipmaps;for(let ie=0;ie<P.length;ie++){const he=P[ie];w.format!==Yn?Te!==null?Pe?t.compressedTexSubImage2D(34069+Z,ie,0,0,he.width,he.height,Te,he.data):t.compressedTexImage2D(34069+Z,ie,be,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?t.texSubImage2D(34069+Z,ie,0,0,he.width,he.height,Te,me,he.data):t.texImage2D(34069+Z,ie,be,he.width,he.height,0,Te,me,he.data)}}}else{P=w.mipmaps,Pe&&Ue&&(P.length>0&&ut++,t.texStorage2D(34067,ut,be,W[0].width,W[0].height));for(let Z=0;Z<6;Z++)if(Q){Pe?t.texSubImage2D(34069+Z,0,0,0,W[Z].width,W[Z].height,Te,me,W[Z].data):t.texImage2D(34069+Z,0,be,W[Z].width,W[Z].height,0,Te,me,W[Z].data);for(let ie=0;ie<P.length;ie++){const ye=P[ie].image[Z].image;Pe?t.texSubImage2D(34069+Z,ie+1,0,0,ye.width,ye.height,Te,me,ye.data):t.texImage2D(34069+Z,ie+1,be,ye.width,ye.height,0,Te,me,ye.data)}}else{Pe?t.texSubImage2D(34069+Z,0,0,0,Te,me,W[Z]):t.texImage2D(34069+Z,0,be,Te,me,W[Z]);for(let ie=0;ie<P.length;ie++){const he=P[ie];Pe?t.texSubImage2D(34069+Z,ie+1,0,0,Te,me,he.image[Z]):t.texImage2D(34069+Z,ie+1,be,Te,me,he.image[Z])}}}E(w,de)&&A(34067),le.__version=te.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function ae(L,w,K,ne,te){const le=r.convert(K.format,K.encoding),D=r.convert(K.type),Q=R(K.internalFormat,le,D,K.encoding);n.get(w).__hasExternalTextures||(te===32879||te===35866?t.texImage3D(te,0,Q,w.width,w.height,w.depth,0,le,D,null):t.texImage2D(te,0,Q,w.width,w.height,0,le,D,null)),t.bindFramebuffer(36160,L),Ve(w)?f.framebufferTexture2DMultisampleEXT(36160,ne,te,n.get(K).__webglTexture,0,tt(w)):(te===3553||te>=34069&&te<=34074)&&a.framebufferTexture2D(36160,ne,te,n.get(K).__webglTexture,0),t.bindFramebuffer(36160,null)}function Se(L,w,K){if(a.bindRenderbuffer(36161,L),w.depthBuffer&&!w.stencilBuffer){let ne=33189;if(K||Ve(w)){const te=w.depthTexture;te&&te.isDepthTexture&&(te.type===Ji?ne=36012:te.type===Lr&&(ne=33190));const le=tt(w);Ve(w)?f.renderbufferStorageMultisampleEXT(36161,le,ne,w.width,w.height):a.renderbufferStorageMultisample(36161,le,ne,w.width,w.height)}else a.renderbufferStorage(36161,ne,w.width,w.height);a.framebufferRenderbuffer(36160,36096,36161,L)}else if(w.depthBuffer&&w.stencilBuffer){const ne=tt(w);K&&Ve(w)===!1?a.renderbufferStorageMultisample(36161,ne,35056,w.width,w.height):Ve(w)?f.renderbufferStorageMultisampleEXT(36161,ne,35056,w.width,w.height):a.renderbufferStorage(36161,34041,w.width,w.height),a.framebufferRenderbuffer(36160,33306,36161,L)}else{const ne=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let te=0;te<ne.length;te++){const le=ne[te],D=r.convert(le.format,le.encoding),Q=r.convert(le.type),W=R(le.internalFormat,D,Q,le.encoding),ue=tt(w);K&&Ve(w)===!1?a.renderbufferStorageMultisample(36161,ue,W,w.width,w.height):Ve(w)?f.renderbufferStorageMultisampleEXT(36161,ue,W,w.width,w.height):a.renderbufferStorage(36161,W,w.width,w.height)}}a.bindRenderbuffer(36161,null)}function Be(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),C(w.depthTexture,0);const ne=n.get(w.depthTexture).__webglTexture,te=tt(w);if(w.depthTexture.format===Dr)Ve(w)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,ne,0,te):a.framebufferTexture2D(36160,36096,3553,ne,0);else if(w.depthTexture.format===qs)Ve(w)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,ne,0,te):a.framebufferTexture2D(36160,33306,3553,ne,0);else throw new Error("Unknown depthTexture format")}function oe(L){const w=n.get(L),K=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");Be(w.__webglFramebuffer,L)}else if(K){w.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(36160,w.__webglFramebuffer[ne]),w.__webglDepthbuffer[ne]=a.createRenderbuffer(),Se(w.__webglDepthbuffer[ne],L,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=a.createRenderbuffer(),Se(w.__webglDepthbuffer,L,!1);t.bindFramebuffer(36160,null)}function Ee(L,w,K){const ne=n.get(L);w!==void 0&&ae(ne.__webglFramebuffer,L,L.texture,36064,3553),K!==void 0&&oe(L)}function Ke(L){const w=L.texture,K=n.get(L),ne=n.get(w);L.addEventListener("dispose",O),L.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=a.createTexture()),ne.__version=w.version,s.memory.textures++);const te=L.isWebGLCubeRenderTarget===!0,le=L.isWebGLMultipleRenderTargets===!0,D=x(L)||o;if(te){K.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)K.__webglFramebuffer[Q]=a.createFramebuffer()}else{if(K.__webglFramebuffer=a.createFramebuffer(),le)if(i.drawBuffers){const Q=L.texture;for(let W=0,ue=Q.length;W<ue;W++){const de=n.get(Q[W]);de.__webglTexture===void 0&&(de.__webglTexture=a.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&L.samples>0&&Ve(L)===!1){const Q=le?w:[w];K.__webglMultisampledFramebuffer=a.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,K.__webglMultisampledFramebuffer);for(let W=0;W<Q.length;W++){const ue=Q[W];K.__webglColorRenderbuffer[W]=a.createRenderbuffer(),a.bindRenderbuffer(36161,K.__webglColorRenderbuffer[W]);const de=r.convert(ue.format,ue.encoding),Te=r.convert(ue.type),me=R(ue.internalFormat,de,Te,ue.encoding,L.isXRRenderTarget===!0),be=tt(L);a.renderbufferStorageMultisample(36161,be,me,L.width,L.height),a.framebufferRenderbuffer(36160,36064+W,36161,K.__webglColorRenderbuffer[W])}a.bindRenderbuffer(36161,null),L.depthBuffer&&(K.__webglDepthRenderbuffer=a.createRenderbuffer(),Se(K.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(36160,null)}}if(te){t.bindTexture(34067,ne.__webglTexture),ce(34067,w,D);for(let Q=0;Q<6;Q++)ae(K.__webglFramebuffer[Q],L,w,36064,34069+Q);E(w,D)&&A(34067),t.unbindTexture()}else if(le){const Q=L.texture;for(let W=0,ue=Q.length;W<ue;W++){const de=Q[W],Te=n.get(de);t.bindTexture(3553,Te.__webglTexture),ce(3553,de,D),ae(K.__webglFramebuffer,L,de,36064+W,3553),E(de,D)&&A(3553)}t.unbindTexture()}else{let Q=3553;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(o?Q=L.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Q,ne.__webglTexture),ce(Q,w,D),ae(K.__webglFramebuffer,L,w,36064,Q),E(w,D)&&A(Q),t.unbindTexture()}L.depthBuffer&&oe(L)}function $e(L){const w=x(L)||o,K=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let ne=0,te=K.length;ne<te;ne++){const le=K[ne];if(E(le,w)){const D=L.isWebGLCubeRenderTarget?34067:3553,Q=n.get(le).__webglTexture;t.bindTexture(D,Q),A(D),t.unbindTexture()}}}function H(L){if(o&&L.samples>0&&Ve(L)===!1){const w=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],K=L.width,ne=L.height;let te=16384;const le=[],D=L.stencilBuffer?33306:36096,Q=n.get(L),W=L.isWebGLMultipleRenderTargets===!0;if(W)for(let ue=0;ue<w.length;ue++)t.bindFramebuffer(36160,Q.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+ue,36161,null),t.bindFramebuffer(36160,Q.__webglFramebuffer),a.framebufferTexture2D(36009,36064+ue,3553,null,0);t.bindFramebuffer(36008,Q.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,Q.__webglFramebuffer);for(let ue=0;ue<w.length;ue++){le.push(36064+ue),L.depthBuffer&&le.push(D);const de=Q.__ignoreDepthValues!==void 0?Q.__ignoreDepthValues:!1;if(de===!1&&(L.depthBuffer&&(te|=256),L.stencilBuffer&&(te|=1024)),W&&a.framebufferRenderbuffer(36008,36064,36161,Q.__webglColorRenderbuffer[ue]),de===!0&&(a.invalidateFramebuffer(36008,[D]),a.invalidateFramebuffer(36009,[D])),W){const Te=n.get(w[ue]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,Te,0)}a.blitFramebuffer(0,0,K,ne,0,0,K,ne,te,9728),d&&a.invalidateFramebuffer(36008,le)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),W)for(let ue=0;ue<w.length;ue++){t.bindFramebuffer(36160,Q.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+ue,36161,Q.__webglColorRenderbuffer[ue]);const de=n.get(w[ue]).__webglTexture;t.bindFramebuffer(36160,Q.__webglFramebuffer),a.framebufferTexture2D(36009,36064+ue,3553,de,0)}t.bindFramebuffer(36009,Q.__webglMultisampledFramebuffer)}}function tt(L){return Math.min(h,L.samples)}function Ve(L){const w=n.get(L);return o&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function st(L){const w=s.render.frame;g.get(L)!==w&&(g.set(L,w),L.update())}function Ze(L,w){const K=L.encoding,ne=L.format,te=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===Ic||K!==Hr&&(K===ct?o===!1?e.has("EXT_sRGB")===!0&&ne===Yn?(L.format=Ic,L.minFilter=tn,L.generateMipmaps=!1):w=Ud.sRGBToLinear(w):(ne!==Yn||te!==Vr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",K)),w}this.allocateTextureUnit=G,this.resetTextureUnits=X,this.setTexture2D=C,this.setTexture2DArray=ge,this.setTexture3D=re,this.setTextureCube=Y,this.rebindTextures=Ee,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=H,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Ve}function Jy(a,e,t){const n=t.isWebGL2;function i(r,s=null){let o;if(r===Vr)return 5121;if(r===wg)return 32819;if(r===Tg)return 32820;if(r===Mg)return 5120;if(r===Sg)return 5122;if(r===Ld)return 5123;if(r===bg)return 5124;if(r===Lr)return 5125;if(r===Ji)return 5126;if(r===Ho)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Ag)return 6406;if(r===Yn)return 6408;if(r===Eg)return 6409;if(r===Cg)return 6410;if(r===Dr)return 6402;if(r===qs)return 34041;if(r===Ic)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Lg)return 6403;if(r===Rg)return 36244;if(r===Pg)return 33319;if(r===Dg)return 33320;if(r===Ig)return 36249;if(r===Rl||r===Pl||r===Dl||r===Il)if(s===ct)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Rl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Pl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Dl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Il)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Rl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Pl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Dl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Il)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===nh||r===ih||r===rh||r===sh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===nh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ih)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===rh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===sh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Og)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===oh||r===ah)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===oh)return s===ct?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===ah)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===lh||r===ch||r===uh||r===hh||r===fh||r===dh||r===ph||r===mh||r===gh||r===_h||r===xh||r===vh||r===yh||r===Mh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===lh)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ch)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===uh)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===hh)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===fh)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===dh)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ph)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===mh)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===gh)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===_h)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===xh)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===vh)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===yh)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Mh)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ol)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Ol)return s===ct?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===Ng||r===Sh||r===bh||r===wh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Ol)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Sh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===bh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===wh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Is?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):a[r]!==void 0?a[r]:null}return{convert:i}}class Qy extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class er extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eM={type:"move"};class ic{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new er,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new er,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new er,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(eM)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new er;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class tM extends Gt{constructor(e,t,n,i,r,s,o,l,c,u){if(u=u!==void 0?u:Dr,u!==Dr&&u!==qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Dr&&(n=Lr),n===void 0&&u===qs&&(n=Is),super(null,i,r,s,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Nt,this.minFilter=l!==void 0?l:Nt,this.flipY=!1,this.generateMipmaps=!1}}class nM extends dr{constructor(e,t){super();const n=this;let i=null,r=1,s=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=t.getContextAttributes();let m=null,p=null;const S=[],y=[],x=new Set,M=new Map,E=new pn;E.layers.enable(1),E.viewport=new _t;const A=new pn;A.layers.enable(2),A.viewport=new _t;const R=[E,A],v=new Qy;v.layers.enable(1),v.layers.enable(2);let b=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let J=S[Y];return J===void 0&&(J=new ic,S[Y]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Y){let J=S[Y];return J===void 0&&(J=new ic,S[Y]=J),J.getGripSpace()},this.getHand=function(Y){let J=S[Y];return J===void 0&&(J=new ic,S[Y]=J),J.getHandSpace()};function O(Y){const J=y.indexOf(Y.inputSource);if(J===-1)return;const se=S[J];se!==void 0&&se.dispatchEvent({type:Y.type,data:Y.inputSource})}function I(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",I),i.removeEventListener("inputsourceschange",N);for(let Y=0;Y<S.length;Y++){const J=y[Y];J!==null&&(y[Y]=null,S[Y].disconnect(J))}b=null,V=null,e.setRenderTarget(m),d=null,f=null,h=null,i=null,p=null,re.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",I),i.addEventListener("inputsourceschange",N),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,J),i.updateRenderState({baseLayer:d}),p=new Gr(d.framebufferWidth,d.framebufferHeight,{format:Yn,type:Vr,encoding:e.outputEncoding,stencilBuffer:_.stencil})}else{let J=null,se=null,ce=null;_.depth&&(ce=_.stencil?35056:33190,J=_.stencil?qs:Dr,se=_.stencil?Is:Lr);const B={colorFormat:32856,depthFormat:ce,scaleFactor:r};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(B),i.updateRenderState({layers:[f]}),p=new Gr(f.textureWidth,f.textureHeight,{format:Yn,type:Vr,depthTexture:new tM(f.textureWidth,f.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:_.stencil,encoding:e.outputEncoding,samples:_.antialias?4:0});const Ae=e.properties.get(p);Ae.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await i.requestReferenceSpace(o),re.setContext(i),re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function N(Y){for(let J=0;J<Y.removed.length;J++){const se=Y.removed[J],ce=y.indexOf(se);ce>=0&&(y[ce]=null,S[ce].disconnect(se))}for(let J=0;J<Y.added.length;J++){const se=Y.added[J];let ce=y.indexOf(se);if(ce===-1){for(let Ae=0;Ae<S.length;Ae++)if(Ae>=y.length){y.push(se),ce=Ae;break}else if(y[Ae]===null){y[Ae]=se,ce=Ae;break}if(ce===-1)break}const B=S[ce];B&&B.connect(se)}}const z=new U,$=new U;function X(Y,J,se){z.setFromMatrixPosition(J.matrixWorld),$.setFromMatrixPosition(se.matrixWorld);const ce=z.distanceTo($),B=J.projectionMatrix.elements,Ae=se.projectionMatrix.elements,Me=B[14]/(B[10]-1),ae=B[14]/(B[10]+1),Se=(B[9]+1)/B[5],Be=(B[9]-1)/B[5],oe=(B[8]-1)/B[0],Ee=(Ae[8]+1)/Ae[0],Ke=Me*oe,$e=Me*Ee,H=ce/(-oe+Ee),tt=H*-oe;J.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(tt),Y.translateZ(H),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const Ve=Me+H,st=ae+H,Ze=Ke-tt,L=$e+(ce-tt),w=Se*ae/st*Ve,K=Be*ae/st*Ve;Y.projectionMatrix.makePerspective(Ze,L,w,K,Ve,st),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function G(Y,J){J===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(J.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;v.near=A.near=E.near=Y.near,v.far=A.far=E.far=Y.far,(b!==v.near||V!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),b=v.near,V=v.far);const J=Y.parent,se=v.cameras;G(v,J);for(let ce=0;ce<se.length;ce++)G(se[ce],J);se.length===2?X(v,E,A):v.projectionMatrix.copy(E.projectionMatrix),ee(Y,v,J)};function ee(Y,J,se){se===null?Y.matrix.copy(J.matrixWorld):(Y.matrix.copy(se.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(J.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0);const ce=Y.children;for(let B=0,Ae=ce.length;B<Ae;B++)ce[B].updateMatrixWorld(!0);Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ks*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.getPlanes=function(){return x};let C=null;function ge(Y,J){if(u=J.getViewerPose(c||s),g=J,u!==null){const se=u.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let ce=!1;se.length!==v.cameras.length&&(v.cameras.length=0,ce=!0);for(let B=0;B<se.length;B++){const Ae=se[B];let Me=null;if(d!==null)Me=d.getViewport(Ae);else{const Se=h.getViewSubImage(f,Ae);Me=Se.viewport,B===0&&(e.setRenderTargetTextures(p,Se.colorTexture,f.ignoreDepthValues?void 0:Se.depthStencilTexture),e.setRenderTarget(p))}let ae=R[B];ae===void 0&&(ae=new pn,ae.layers.enable(B),ae.viewport=new _t,R[B]=ae),ae.matrix.fromArray(Ae.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(Ae.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(Me.x,Me.y,Me.width,Me.height),B===0&&(v.matrix.copy(ae.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ce===!0&&v.cameras.push(ae)}}for(let se=0;se<S.length;se++){const ce=y[se],B=S[se];ce!==null&&B!==void 0&&B.update(ce,J,c||s)}if(C&&C(Y,J),J.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:J.detectedPlanes});let se=null;for(const ce of x)J.detectedPlanes.has(ce)||(se===null&&(se=[]),se.push(ce));if(se!==null)for(const ce of se)x.delete(ce),M.delete(ce),n.dispatchEvent({type:"planeremoved",data:ce});for(const ce of J.detectedPlanes)if(!x.has(ce))x.add(ce),M.set(ce,J.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ce});else{const B=M.get(ce);ce.lastChangedTime>B&&(M.set(ce,ce.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ce}))}}g=null}const re=new qd;re.setAnimationLoop(ge),this.setAnimationLoop=function(Y){C=Y},this.dispose=function(){}}}function iM(a,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Gd(a)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===vn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===vn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p).envMap;if(S&&(m.envMap.value=S,m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const y=a.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*y,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===vn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function rM(a,e,t,n){let i={},r={},s=[];const o=t.isWebGL2?a.getParameter(35375):0;function l(S,y){const x=y.program;n.uniformBlockBinding(S,x)}function c(S,y){let x=i[S.id];x===void 0&&(g(S),x=u(S),i[S.id]=x,S.addEventListener("dispose",m));const M=y.program;n.updateUBOMapping(S,M);const E=e.render.frame;r[S.id]!==E&&(f(S),r[S.id]=E)}function u(S){const y=h();S.__bindingPointIndex=y;const x=a.createBuffer(),M=S.__size,E=S.usage;return a.bindBuffer(35345,x),a.bufferData(35345,M,E),a.bindBuffer(35345,null),a.bindBufferBase(35345,y,x),x}function h(){for(let S=0;S<o;S++)if(s.indexOf(S)===-1)return s.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const y=i[S.id],x=S.uniforms,M=S.__cache;a.bindBuffer(35345,y);for(let E=0,A=x.length;E<A;E++){const R=x[E];if(d(R,E,M)===!0){const v=R.__offset,b=Array.isArray(R.value)?R.value:[R.value];let V=0;for(let O=0;O<b.length;O++){const I=b[O],N=_(I);typeof I=="number"?(R.__data[0]=I,a.bufferSubData(35345,v+V,R.__data)):I.isMatrix3?(R.__data[0]=I.elements[0],R.__data[1]=I.elements[1],R.__data[2]=I.elements[2],R.__data[3]=I.elements[0],R.__data[4]=I.elements[3],R.__data[5]=I.elements[4],R.__data[6]=I.elements[5],R.__data[7]=I.elements[0],R.__data[8]=I.elements[6],R.__data[9]=I.elements[7],R.__data[10]=I.elements[8],R.__data[11]=I.elements[0]):(I.toArray(R.__data,V),V+=N.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(35345,v,R.__data)}}a.bindBuffer(35345,null)}function d(S,y,x){const M=S.value;if(x[y]===void 0){if(typeof M=="number")x[y]=M;else{const E=Array.isArray(M)?M:[M],A=[];for(let R=0;R<E.length;R++)A.push(E[R].clone());x[y]=A}return!0}else if(typeof M=="number"){if(x[y]!==M)return x[y]=M,!0}else{const E=Array.isArray(x[y])?x[y]:[x[y]],A=Array.isArray(M)?M:[M];for(let R=0;R<E.length;R++){const v=E[R];if(v.equals(A[R])===!1)return v.copy(A[R]),!0}}return!1}function g(S){const y=S.uniforms;let x=0;const M=16;let E=0;for(let A=0,R=y.length;A<R;A++){const v=y[A],b={boundary:0,storage:0},V=Array.isArray(v.value)?v.value:[v.value];for(let O=0,I=V.length;O<I;O++){const N=V[O],z=_(N);b.boundary+=z.boundary,b.storage+=z.storage}if(v.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),v.__offset=x,A>0){E=x%M;const O=M-E;E!==0&&O-b.boundary<0&&(x+=M-E,v.__offset=x)}x+=b.storage}return E=x%M,E>0&&(x+=M-E),S.__size=x,S.__cache={},this}function _(S){const y={boundary:0,storage:0};return typeof S=="number"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){const y=S.target;y.removeEventListener("dispose",m);const x=s.indexOf(y.__bindingPointIndex);s.splice(x,1),a.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(const S in i)a.deleteBuffer(i[S]);s=[],i={},r={}}return{bind:l,update:c,dispose:p}}function sM(){const a=Wo("canvas");return a.style.display="block",a}class Zd{constructor(e={}){const{canvas:t=sM(),context:n=null,depth:i=!0,stencil:r=!0,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=s;let d=null,g=null;const _=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Hr,this.useLegacyLights=!0,this.toneMapping=Ni,this.toneMappingExposure=1;const p=this;let S=!1,y=0,x=0,M=null,E=-1,A=null;const R=new _t,v=new _t;let b=null,V=t.width,O=t.height,I=1,N=null,z=null;const $=new _t(0,0,V,O),X=new _t(0,0,V,O);let G=!1;const ee=new gu;let C=!1,ge=!1,re=null;const Y=new et,J=new U,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ce(){return M===null?I:1}let B=n;function Ae(T,k){for(let j=0;j<T.length;j++){const F=T[j],q=t.getContext(F,k);if(q!==null)return q}return null}try{const T={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fu}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",Ue,!1),B===null){const k=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&k.shift(),B=Ae(k,T),B===null)throw Ae(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Me,ae,Se,Be,oe,Ee,Ke,$e,H,tt,Ve,st,Ze,L,w,K,ne,te,le,D,Q,W,ue,de;function Te(){Me=new gv(B),ae=new uv(B,Me,e),Me.init(ae),W=new Jy(B,Me,ae),Se=new $y(B,Me,ae),Be=new vv,oe=new Uy,Ee=new Zy(B,Me,Se,oe,ae,W,Be),Ke=new fv(p),$e=new mv(p),H=new P_(B,ae),ue=new lv(B,Me,H,ae),tt=new _v(B,H,Be,ue),Ve=new bv(B,tt,H,Be),le=new Sv(B,ae,Ee),K=new hv(oe),st=new Ny(p,Ke,$e,Me,ae,ue,K),Ze=new iM(p,oe),L=new ky,w=new Wy(Me,ae),te=new av(p,Ke,$e,Se,Ve,f,l),ne=new Ky(p,Ve,ae),de=new rM(B,Be,ae,Se),D=new cv(B,Me,Be,ae),Q=new xv(B,Me,Be,ae),Be.programs=st.programs,p.capabilities=ae,p.extensions=Me,p.properties=oe,p.renderLists=L,p.shadowMap=ne,p.state=Se,p.info=Be}Te();const me=new nM(p,B);this.xr=me,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const T=Me.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Me.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(T){T!==void 0&&(I=T,this.setSize(V,O,!1))},this.getSize=function(T){return T.set(V,O)},this.setSize=function(T,k,j=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=T,O=k,t.width=Math.floor(T*I),t.height=Math.floor(k*I),j===!0&&(t.style.width=T+"px",t.style.height=k+"px"),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(V*I,O*I).floor()},this.setDrawingBufferSize=function(T,k,j){V=T,O=k,I=j,t.width=Math.floor(T*j),t.height=Math.floor(k*j),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(R)},this.getViewport=function(T){return T.copy($)},this.setViewport=function(T,k,j,F){T.isVector4?$.set(T.x,T.y,T.z,T.w):$.set(T,k,j,F),Se.viewport(R.copy($).multiplyScalar(I).floor())},this.getScissor=function(T){return T.copy(X)},this.setScissor=function(T,k,j,F){T.isVector4?X.set(T.x,T.y,T.z,T.w):X.set(T,k,j,F),Se.scissor(v.copy(X).multiplyScalar(I).floor())},this.getScissorTest=function(){return G},this.setScissorTest=function(T){Se.setScissorTest(G=T)},this.setOpaqueSort=function(T){N=T},this.setTransparentSort=function(T){z=T},this.getClearColor=function(T){return T.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(T=!0,k=!0,j=!0){let F=0;T&&(F|=16384),k&&(F|=256),j&&(F|=1024),B.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),L.dispose(),w.dispose(),oe.dispose(),Ke.dispose(),$e.dispose(),Ve.dispose(),ue.dispose(),de.dispose(),st.dispose(),me.dispose(),me.removeEventListener("sessionstart",ye),me.removeEventListener("sessionend",at),re&&(re.dispose(),re=null),ht.stop()};function be(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const T=Be.autoReset,k=ne.enabled,j=ne.autoUpdate,F=ne.needsUpdate,q=ne.type;Te(),Be.autoReset=T,ne.enabled=k,ne.autoUpdate=j,ne.needsUpdate=F,ne.type=q}function Ue(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ut(T){const k=T.target;k.removeEventListener("dispose",ut),P(k)}function P(T){Z(T),oe.remove(T)}function Z(T){const k=oe.get(T).programs;k!==void 0&&(k.forEach(function(j){st.releaseProgram(j)}),T.isShaderMaterial&&st.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,j,F,q,fe){k===null&&(k=se);const Ce=q.isMesh&&q.matrixWorld.determinant()<0,ve=Oe(T,k,j,F,q);Se.setMaterial(F,Ce);let Re=j.index,Ne=1;F.wireframe===!0&&(Re=tt.getWireframeAttribute(j),Ne=2);const Ie=j.drawRange,Le=j.attributes.position;let Fe=Ie.start*Ne,Mt=(Ie.start+Ie.count)*Ne;fe!==null&&(Fe=Math.max(Fe,fe.start*Ne),Mt=Math.min(Mt,(fe.start+fe.count)*Ne)),Re!==null?(Fe=Math.max(Fe,0),Mt=Math.min(Mt,Re.count)):Le!=null&&(Fe=Math.max(Fe,0),Mt=Math.min(Mt,Le.count));const $t=Mt-Fe;if($t<0||$t===1/0)return;ue.setup(q,F,ve,j,Re);let yt,We=D;if(Re!==null&&(yt=H.get(Re),We=Q,We.setIndex(yt)),q.isMesh)F.wireframe===!0?(Se.setLineWidth(F.wireframeLinewidth*ce()),We.setMode(1)):We.setMode(4);else if(q.isLine){let ke=F.linewidth;ke===void 0&&(ke=1),Se.setLineWidth(ke*ce()),q.isLineSegments?We.setMode(1):q.isLineLoop?We.setMode(2):We.setMode(3)}else q.isPoints?We.setMode(0):q.isSprite&&We.setMode(4);if(q.isInstancedMesh)We.renderInstances(Fe,$t,q.count);else if(j.isInstancedBufferGeometry){const ke=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,gr=Math.min(j.instanceCount,ke);We.renderInstances(Fe,$t,gr)}else We.render(Fe,$t)},this.compile=function(T,k){function j(F,q,fe){F.transparent===!0&&F.side===pi&&F.forceSinglePass===!1?(F.side=vn,F.needsUpdate=!0,xe(F,q,fe),F.side=ki,F.needsUpdate=!0,xe(F,q,fe),F.side=pi):xe(F,q,fe)}g=w.get(T),g.init(),m.push(g),T.traverseVisible(function(F){F.isLight&&F.layers.test(k.layers)&&(g.pushLight(F),F.castShadow&&g.pushShadow(F))}),g.setupLights(p.useLegacyLights),T.traverse(function(F){const q=F.material;if(q)if(Array.isArray(q))for(let fe=0;fe<q.length;fe++){const Ce=q[fe];j(Ce,T,F)}else j(q,T,F)}),m.pop(),g=null};let ie=null;function he(T){ie&&ie(T)}function ye(){ht.stop()}function at(){ht.start()}const ht=new qd;ht.setAnimationLoop(he),typeof self<"u"&&ht.setContext(self),this.setAnimationLoop=function(T){ie=T,me.setAnimationLoop(T),T===null?ht.stop():ht.start()},me.addEventListener("sessionstart",ye),me.addEventListener("sessionend",at),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(k),k=me.getCamera()),T.isScene===!0&&T.onBeforeRender(p,T,k,M),g=w.get(T,m.length),g.init(),m.push(g),Y.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ee.setFromProjectionMatrix(Y),ge=this.localClippingEnabled,C=K.init(this.clippingPlanes,ge),d=L.get(T,_.length),d.init(),_.push(d),xt(T,k,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort(N,z),C===!0&&K.beginShadows();const j=g.state.shadowsArray;if(ne.render(j,T,k),C===!0&&K.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(d,T),g.setupLights(p.useLegacyLights),k.isArrayCamera){const F=k.cameras;for(let q=0,fe=F.length;q<fe;q++){const Ce=F[q];De(d,T,Ce,Ce.viewport)}}else De(d,T,k);M!==null&&(Ee.updateMultisampleRenderTarget(M),Ee.updateRenderTargetMipmap(M)),T.isScene===!0&&T.onAfterRender(p,T,k),ue.resetDefaultState(),E=-1,A=null,m.pop(),m.length>0?g=m[m.length-1]:g=null,_.pop(),_.length>0?d=_[_.length-1]:d=null};function xt(T,k,j,F){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ee.intersectsSprite(T)){F&&J.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Y);const Ce=Ve.update(T),ve=T.material;ve.visible&&d.push(T,Ce,ve,j,J.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Be.render.frame&&(T.skeleton.update(),T.skeleton.frame=Be.render.frame),!T.frustumCulled||ee.intersectsObject(T))){F&&J.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Y);const Ce=Ve.update(T),ve=T.material;if(Array.isArray(ve)){const Re=Ce.groups;for(let Ne=0,Ie=Re.length;Ne<Ie;Ne++){const Le=Re[Ne],Fe=ve[Le.materialIndex];Fe&&Fe.visible&&d.push(T,Ce,Fe,j,J.z,Le)}}else ve.visible&&d.push(T,Ce,ve,j,J.z,null)}}const fe=T.children;for(let Ce=0,ve=fe.length;Ce<ve;Ce++)xt(fe[Ce],k,j,F)}function De(T,k,j,F){const q=T.opaque,fe=T.transmissive,Ce=T.transparent;g.setupLightsView(j),C===!0&&K.setGlobalState(p.clippingPlanes,j),fe.length>0&&_e(q,fe,k,j),F&&Se.viewport(R.copy(F)),q.length>0&&ze(q,k,j),fe.length>0&&ze(fe,k,j),Ce.length>0&&ze(Ce,k,j),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function _e(T,k,j,F){if(re===null){const ve=ae.isWebGL2;re=new Gr(1024,1024,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?Ho:Vr,minFilter:Br,samples:ve&&o===!0?4:0})}const q=p.getRenderTarget();p.setRenderTarget(re),p.clear();const fe=p.toneMapping;p.toneMapping=Ni,ze(T,j,F),Ee.updateMultisampleRenderTarget(re),Ee.updateRenderTargetMipmap(re);let Ce=!1;for(let ve=0,Re=k.length;ve<Re;ve++){const Ne=k[ve],Ie=Ne.object,Le=Ne.geometry,Fe=Ne.material,Mt=Ne.group;if(Fe.side===pi&&Ie.layers.test(F.layers)){const $t=Fe.side;Fe.side=vn,Fe.needsUpdate=!0,lt(Ie,j,F,Le,Fe,Mt),Fe.side=$t,Fe.needsUpdate=!0,Ce=!0}}Ce===!0&&(Ee.updateMultisampleRenderTarget(re),Ee.updateRenderTargetMipmap(re)),p.setRenderTarget(q),p.toneMapping=fe}function ze(T,k,j){const F=k.isScene===!0?k.overrideMaterial:null;for(let q=0,fe=T.length;q<fe;q++){const Ce=T[q],ve=Ce.object,Re=Ce.geometry,Ne=F===null?Ce.material:F,Ie=Ce.group;ve.layers.test(j.layers)&&lt(ve,k,j,Re,Ne,Ie)}}function lt(T,k,j,F,q,fe){T.onBeforeRender(p,k,j,F,q,fe),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(p,k,j,F,T,fe),q.transparent===!0&&q.side===pi&&q.forceSinglePass===!1?(q.side=vn,q.needsUpdate=!0,p.renderBufferDirect(j,k,F,q,T,fe),q.side=ki,q.needsUpdate=!0,p.renderBufferDirect(j,k,F,q,T,fe),q.side=pi):p.renderBufferDirect(j,k,F,q,T,fe),T.onAfterRender(p,k,j,F,q,fe)}function xe(T,k,j){k.isScene!==!0&&(k=se);const F=oe.get(T),q=g.state.lights,fe=g.state.shadowsArray,Ce=q.state.version,ve=st.getParameters(T,q.state,fe,k,j),Re=st.getProgramCacheKey(ve);let Ne=F.programs;F.environment=T.isMeshStandardMaterial?k.environment:null,F.fog=k.fog,F.envMap=(T.isMeshStandardMaterial?$e:Ke).get(T.envMap||F.environment),Ne===void 0&&(T.addEventListener("dispose",ut),Ne=new Map,F.programs=Ne);let Ie=Ne.get(Re);if(Ie!==void 0){if(F.currentProgram===Ie&&F.lightsStateVersion===Ce)return Je(T,ve),Ie}else ve.uniforms=st.getUniforms(T),T.onBuild(j,ve,p),T.onBeforeCompile(ve,p),Ie=st.acquireProgram(ve,Re),Ne.set(Re,Ie),F.uniforms=ve.uniforms;const Le=F.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Le.clippingPlanes=K.uniform),Je(T,ve),F.needsLights=Pt(T),F.lightsStateVersion=Ce,F.needsLights&&(Le.ambientLightColor.value=q.state.ambient,Le.lightProbe.value=q.state.probe,Le.directionalLights.value=q.state.directional,Le.directionalLightShadows.value=q.state.directionalShadow,Le.spotLights.value=q.state.spot,Le.spotLightShadows.value=q.state.spotShadow,Le.rectAreaLights.value=q.state.rectArea,Le.ltc_1.value=q.state.rectAreaLTC1,Le.ltc_2.value=q.state.rectAreaLTC2,Le.pointLights.value=q.state.point,Le.pointLightShadows.value=q.state.pointShadow,Le.hemisphereLights.value=q.state.hemi,Le.directionalShadowMap.value=q.state.directionalShadowMap,Le.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Le.spotShadowMap.value=q.state.spotShadowMap,Le.spotLightMatrix.value=q.state.spotLightMatrix,Le.spotLightMap.value=q.state.spotLightMap,Le.pointShadowMap.value=q.state.pointShadowMap,Le.pointShadowMatrix.value=q.state.pointShadowMatrix);const Fe=Ie.getUniforms(),Mt=Ga.seqWithValue(Fe.seq,Le);return F.currentProgram=Ie,F.uniformsList=Mt,Ie}function Je(T,k){const j=oe.get(T);j.outputEncoding=k.outputEncoding,j.instancing=k.instancing,j.skinning=k.skinning,j.morphTargets=k.morphTargets,j.morphNormals=k.morphNormals,j.morphColors=k.morphColors,j.morphTargetsCount=k.morphTargetsCount,j.numClippingPlanes=k.numClippingPlanes,j.numIntersection=k.numClipIntersection,j.vertexAlphas=k.vertexAlphas,j.vertexTangents=k.vertexTangents,j.toneMapping=k.toneMapping}function Oe(T,k,j,F,q){k.isScene!==!0&&(k=se),Ee.resetTextureUnits();const fe=k.fog,Ce=F.isMeshStandardMaterial?k.environment:null,ve=M===null?p.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:Hr,Re=(F.isMeshStandardMaterial?$e:Ke).get(F.envMap||Ce),Ne=F.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ie=!!F.normalMap&&!!j.attributes.tangent,Le=!!j.morphAttributes.position,Fe=!!j.morphAttributes.normal,Mt=!!j.morphAttributes.color,$t=F.toneMapped?p.toneMapping:Ni,yt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,We=yt!==void 0?yt.length:0,ke=oe.get(F),gr=g.state.lights;if(C===!0&&(ge===!0||T!==A)){const An=T===A&&F.id===E;K.setState(F,T,An)}let Ct=!1;F.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==gr.state.version||ke.outputEncoding!==ve||q.isInstancedMesh&&ke.instancing===!1||!q.isInstancedMesh&&ke.instancing===!0||q.isSkinnedMesh&&ke.skinning===!1||!q.isSkinnedMesh&&ke.skinning===!0||ke.envMap!==Re||F.fog===!0&&ke.fog!==fe||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==K.numPlanes||ke.numIntersection!==K.numIntersection)||ke.vertexAlphas!==Ne||ke.vertexTangents!==Ie||ke.morphTargets!==Le||ke.morphNormals!==Fe||ke.morphColors!==Mt||ke.toneMapping!==$t||ae.isWebGL2===!0&&ke.morphTargetsCount!==We)&&(Ct=!0):(Ct=!0,ke.__version=F.version);let wn=ke.currentProgram;Ct===!0&&(wn=xe(F,k,q));let Tn=!1,ti=!1,Gi=!1;const Lt=wn.getUniforms(),_r=ke.uniforms;if(Se.useProgram(wn.program)&&(Tn=!0,ti=!0,Gi=!0),F.id!==E&&(E=F.id,ti=!0),Tn||A!==T){if(Lt.setValue(B,"projectionMatrix",T.projectionMatrix),ae.logarithmicDepthBuffer&&Lt.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),A!==T&&(A=T,ti=!0,Gi=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const An=Lt.map.cameraPosition;An!==void 0&&An.setValue(B,J.setFromMatrixPosition(T.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Lt.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||q.isSkinnedMesh)&&Lt.setValue(B,"viewMatrix",T.matrixWorldInverse)}if(q.isSkinnedMesh){Lt.setOptional(B,q,"bindMatrix"),Lt.setOptional(B,q,"bindMatrixInverse");const An=q.skeleton;An&&(ae.floatVertexTextures?(An.boneTexture===null&&An.computeBoneTexture(),Lt.setValue(B,"boneTexture",An.boneTexture,Ee),Lt.setValue(B,"boneTextureSize",An.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Cl=j.morphAttributes;if((Cl.position!==void 0||Cl.normal!==void 0||Cl.color!==void 0&&ae.isWebGL2===!0)&&le.update(q,j,wn),(ti||ke.receiveShadow!==q.receiveShadow)&&(ke.receiveShadow=q.receiveShadow,Lt.setValue(B,"receiveShadow",q.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(_r.envMap.value=Re,_r.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),ti&&(Lt.setValue(B,"toneMappingExposure",p.toneMappingExposure),ke.needsLights&&qe(_r,Gi),fe&&F.fog===!0&&Ze.refreshFogUniforms(_r,fe),Ze.refreshMaterialUniforms(_r,F,I,O,re),Ga.upload(B,ke.uniformsList,_r,Ee)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Ga.upload(B,ke.uniformsList,_r,Ee),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Lt.setValue(B,"center",q.center),Lt.setValue(B,"modelViewMatrix",q.modelViewMatrix),Lt.setValue(B,"normalMatrix",q.normalMatrix),Lt.setValue(B,"modelMatrix",q.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const An=F.uniformsGroups;for(let Ll=0,Xm=An.length;Ll<Xm;Ll++)if(ae.isWebGL2){const Yu=An[Ll];de.update(Yu,wn),de.bind(Yu,wn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return wn}function qe(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function Pt(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(T,k,j){oe.get(T.texture).__webglTexture=k,oe.get(T.depthTexture).__webglTexture=j;const F=oe.get(T);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=j===void 0,F.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,k){const j=oe.get(T);j.__webglFramebuffer=k,j.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(T,k=0,j=0){M=T,y=k,x=j;let F=!0,q=null,fe=!1,Ce=!1;if(T){const Re=oe.get(T);Re.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(36160,null),F=!1):Re.__webglFramebuffer===void 0?Ee.setupRenderTarget(T):Re.__hasExternalTextures&&Ee.rebindTextures(T,oe.get(T.texture).__webglTexture,oe.get(T.depthTexture).__webglTexture);const Ne=T.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Ce=!0);const Ie=oe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(q=Ie[k],fe=!0):ae.isWebGL2&&T.samples>0&&Ee.useMultisampledRTT(T)===!1?q=oe.get(T).__webglMultisampledFramebuffer:q=Ie,R.copy(T.viewport),v.copy(T.scissor),b=T.scissorTest}else R.copy($).multiplyScalar(I).floor(),v.copy(X).multiplyScalar(I).floor(),b=G;if(Se.bindFramebuffer(36160,q)&&ae.drawBuffers&&F&&Se.drawBuffers(T,q),Se.viewport(R),Se.scissor(v),Se.setScissorTest(b),fe){const Re=oe.get(T.texture);B.framebufferTexture2D(36160,36064,34069+k,Re.__webglTexture,j)}else if(Ce){const Re=oe.get(T.texture),Ne=k||0;B.framebufferTextureLayer(36160,36064,Re.__webglTexture,j||0,Ne)}E=-1},this.readRenderTargetPixels=function(T,k,j,F,q,fe,Ce){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=oe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ce!==void 0&&(ve=ve[Ce]),ve){Se.bindFramebuffer(36160,ve);try{const Re=T.texture,Ne=Re.format,Ie=Re.type;if(Ne!==Yn&&W.convert(Ne)!==B.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Le=Ie===Ho&&(Me.has("EXT_color_buffer_half_float")||ae.isWebGL2&&Me.has("EXT_color_buffer_float"));if(Ie!==Vr&&W.convert(Ie)!==B.getParameter(35738)&&!(Ie===Ji&&(ae.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!Le){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-F&&j>=0&&j<=T.height-q&&B.readPixels(k,j,F,q,W.convert(Ne),W.convert(Ie),fe)}finally{const Re=M!==null?oe.get(M).__webglFramebuffer:null;Se.bindFramebuffer(36160,Re)}}},this.copyFramebufferToTexture=function(T,k,j=0){const F=Math.pow(2,-j),q=Math.floor(k.image.width*F),fe=Math.floor(k.image.height*F);Ee.setTexture2D(k,0),B.copyTexSubImage2D(3553,j,0,0,T.x,T.y,q,fe),Se.unbindTexture()},this.copyTextureToTexture=function(T,k,j,F=0){const q=k.image.width,fe=k.image.height,Ce=W.convert(j.format),ve=W.convert(j.type);Ee.setTexture2D(j,0),B.pixelStorei(37440,j.flipY),B.pixelStorei(37441,j.premultiplyAlpha),B.pixelStorei(3317,j.unpackAlignment),k.isDataTexture?B.texSubImage2D(3553,F,T.x,T.y,q,fe,Ce,ve,k.image.data):k.isCompressedTexture?B.compressedTexSubImage2D(3553,F,T.x,T.y,k.mipmaps[0].width,k.mipmaps[0].height,Ce,k.mipmaps[0].data):B.texSubImage2D(3553,F,T.x,T.y,Ce,ve,k.image),F===0&&j.generateMipmaps&&B.generateMipmap(3553),Se.unbindTexture()},this.copyTextureToTexture3D=function(T,k,j,F,q=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const fe=T.max.x-T.min.x+1,Ce=T.max.y-T.min.y+1,ve=T.max.z-T.min.z+1,Re=W.convert(F.format),Ne=W.convert(F.type);let Ie;if(F.isData3DTexture)Ee.setTexture3D(F,0),Ie=32879;else if(F.isDataArrayTexture)Ee.setTexture2DArray(F,0),Ie=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(37440,F.flipY),B.pixelStorei(37441,F.premultiplyAlpha),B.pixelStorei(3317,F.unpackAlignment);const Le=B.getParameter(3314),Fe=B.getParameter(32878),Mt=B.getParameter(3316),$t=B.getParameter(3315),yt=B.getParameter(32877),We=j.isCompressedTexture?j.mipmaps[0]:j.image;B.pixelStorei(3314,We.width),B.pixelStorei(32878,We.height),B.pixelStorei(3316,T.min.x),B.pixelStorei(3315,T.min.y),B.pixelStorei(32877,T.min.z),j.isDataTexture||j.isData3DTexture?B.texSubImage3D(Ie,q,k.x,k.y,k.z,fe,Ce,ve,Re,Ne,We.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Ie,q,k.x,k.y,k.z,fe,Ce,ve,Re,We.data)):B.texSubImage3D(Ie,q,k.x,k.y,k.z,fe,Ce,ve,Re,Ne,We),B.pixelStorei(3314,Le),B.pixelStorei(32878,Fe),B.pixelStorei(3316,Mt),B.pixelStorei(3315,$t),B.pixelStorei(32877,yt),q===0&&F.generateMipmaps&&B.generateMipmap(Ie),Se.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Ee.setTextureCube(T,0):T.isData3DTexture?Ee.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ee.setTexture2DArray(T,0):Ee.setTexture2D(T,0),Se.unbindTexture()},this.resetState=function(){y=0,x=0,M=null,Se.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}}class oM extends Zd{}oM.prototype.isWebGL1Renderer=!0;class aM extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class lM{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Dc,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=li()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const on=new U;class xu{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Di(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Di(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Di(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Di(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array),r=mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new xu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const uf=new U,hf=new _t,ff=new _t,cM=new U,df=new et,gs=new U;class uM extends Un{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new et,this.bindMatrixInverse=new et,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Vi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)gs.fromBufferAttribute(t,n),this.applyBoneTransform(n,gs),this.boundingBox.expandByPoint(gs)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Hi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)gs.fromBufferAttribute(t,n),this.applyBoneTransform(n,gs),this.boundingSphere.expandByPoint(gs)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new _t,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;hf.fromBufferAttribute(i.attributes.skinIndex,e),ff.fromBufferAttribute(i.attributes.skinWeight,e),uf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const s=ff.getComponent(r);if(s!==0){const o=hf.getComponent(r);df.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(cM.copy(uf).applyMatrix4(df),s)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Jd extends Tt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class hM extends Gt{constructor(e=null,t=1,n=1,i,r,s,o,l,c=Nt,u=Nt,h,f){super(null,s,o,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pf=new et,fM=new et;class vu{constructor(e=[],t=[]){this.uuid=li(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new et)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new et;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,s=e.length;r<s;r++){const o=e[r]?e[r].matrixWorld:fM;pf.multiplyMatrices(o,t[r]),pf.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new vu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Id(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new hM(t,e,e,Yn,Ji);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let s=t[r];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),s=new Jd),this.bones.push(s),this.boneInverses.push(new et().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const s=t[i];e.bones.push(s.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class mf extends Kt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const _s=new et,gf=new et,wa=[],_f=new Vi,dM=new et,fo=new Un,po=new Hi;class pM extends Un{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new mf(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,dM)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_s),_f.copy(e.boundingBox).applyMatrix4(_s),this.boundingBox.union(_f)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_s),po.copy(e.boundingSphere).applyMatrix4(_s),this.boundingSphere.union(po)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(fo.geometry=this.geometry,fo.material=this.material,fo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),po.copy(this.boundingSphere),po.applyMatrix4(n),e.ray.intersectsSphere(po)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,_s),gf.multiplyMatrices(n,_s),fo.matrixWorld=gf,fo.raycast(e,wa);for(let s=0,o=wa.length;s<o;s++){const l=wa[s];l.instanceId=r,l.object=this,t.push(l)}wa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new mf(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Qd extends _i{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const xf=new U,vf=new U,yf=new et,rc=new mu,Ta=new Hi;class yu extends Tt{constructor(e=new ui,t=new Qd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)xf.fromBufferAttribute(t,i-1),vf.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=xf.distanceTo(vf);e.setAttribute("lineDistance",new Ui(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ta.copy(n.boundingSphere),Ta.applyMatrix4(i),Ta.radius+=r,e.ray.intersectsSphere(Ta)===!1)return;yf.copy(i).invert(),rc.copy(e.ray).applyMatrix4(yf);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new U,u=new U,h=new U,f=new U,d=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const p=Math.max(0,s.start),S=Math.min(g.count,s.start+s.count);for(let y=p,x=S-1;y<x;y+=d){const M=g.getX(y),E=g.getX(y+1);if(c.fromBufferAttribute(m,M),u.fromBufferAttribute(m,E),rc.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(f);R<e.near||R>e.far||t.push({distance:R,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,s.start),S=Math.min(m.count,s.start+s.count);for(let y=p,x=S-1;y<x;y+=d){if(c.fromBufferAttribute(m,y),u.fromBufferAttribute(m,y+1),rc.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(f);E<e.near||E>e.far||t.push({distance:E,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const Mf=new U,Sf=new U;class mM extends yu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Mf.fromBufferAttribute(t,i),Sf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Mf.distanceTo(Sf);e.setAttribute("lineDistance",new Ui(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gM extends yu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ep extends _i{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const bf=new et,Uc=new mu,Aa=new Hi,Ea=new U;class _M extends Tt{constructor(e=new ui,t=new ep){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Aa.copy(n.boundingSphere),Aa.applyMatrix4(i),Aa.radius+=r,e.ray.intersectsSphere(Aa)===!1)return;bf.copy(i).invert(),Uc.copy(e.ray).applyMatrix4(bf);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,s.start),d=Math.min(c.count,s.start+s.count);for(let g=f,_=d;g<_;g++){const m=c.getX(g);Ea.fromBufferAttribute(h,m),wf(Ea,m,l,i,e,t,this)}}else{const f=Math.max(0,s.start),d=Math.min(h.count,s.start+s.count);for(let g=f,_=d;g<_;g++)Ea.fromBufferAttribute(h,g),wf(Ea,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function wf(a,e,t,n,i,r,s){const o=Uc.distanceSqToPoint(a);if(o<t){const l=new U;Uc.closestPointToPoint(a,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:s})}}class xM extends Gt{constructor(e,t,n,i,r,s,o,l,c){super(e,t,n,i,r,s,o,l,c),this.isVideoTexture=!0,this.minFilter=s!==void 0?s:tn,this.magFilter=r!==void 0?r:tn,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class Ml extends _i{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pd,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class pr extends Ml{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new He(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xe(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Yi(a,e,t){return tp(a)?new a.constructor(a.subarray(e,t!==void 0?t:a.length)):a.slice(e,t)}function Ca(a,e,t){return!a||!t&&a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function tp(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function vM(a){function e(i,r){return a[i]-a[r]}const t=a.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Tf(a,e,t){const n=a.length,i=new a.constructor(n);for(let r=0,s=0;s!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[s++]=a[o+l]}return i}function np(a,e,t,n){let i=1,r=a[0];for(;r!==void 0&&r[n]===void 0;)r=a[i++];if(r===void 0)return;let s=r[n];if(s!==void 0)if(Array.isArray(s))do s=r[n],s!==void 0&&(e.push(r.time),t.push.apply(t,s)),r=a[i++];while(r!==void 0);else if(s.toArray!==void 0)do s=r[n],s!==void 0&&(e.push(r.time),s.toArray(t,t.length)),r=a[i++];while(r!==void 0);else do s=r[n],s!==void 0&&(e.push(r.time),t.push(s)),r=a[i++];while(r!==void 0)}class na{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let s;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}s=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}s=n,n=0;break n}break e}for(;n<s;){const o=n+s>>>1;e<t[o]?s=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let s=0;s!==i;++s)t[s]=n[r+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class yM extends na{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ts,endingEnd:Ts}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,s=e+1,o=i[r],l=i[s];if(o===void 0)switch(this.getSettings_().endingStart){case As:r=e,o=2*t-n;break;case nl:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case As:s=e,l=2*n-t;break;case nl:s=1,l=n+i[1]-i[0];break;default:s=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=s*u}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,S=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,y=(-1-d)*m+(1.5+d)*_+.5*g,x=d*m-d*_;for(let M=0;M!==o;++M)r[M]=p*s[u+M]+S*s[c+M]+y*s[l+M]+x*s[h+M];return r}}class ip extends na{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==o;++f)r[f]=s[c+f]*h+s[l+f]*u;return r}}class MM extends na{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Mi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ca(t,this.TimeBufferType),this.values=Ca(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ca(e.times,Array),values:Ca(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new MM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ip(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new yM(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Go:t=this.InterpolantFactoryMethodDiscrete;break;case js:t=this.InterpolantFactoryMethodLinear;break;case Nl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Go;case this.InterpolantFactoryMethodLinear:return js;case this.InterpolantFactoryMethodSmooth:return Nl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,s=i-1;for(;r!==i&&n[r]<e;)++r;for(;s!==-1&&n[s]>t;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);const o=this.getValueSize();this.times=Yi(n,r,s),this.values=Yi(this.values,r*o,s*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(s!==null&&s>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,s),e=!1;break}s=l}if(i!==void 0&&tp(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=Yi(this.times),t=Yi(this.values),n=this.getValueSize(),i=this.getInterpolation()===Nl,r=e.length-1;let s=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[f+g]||_!==t[d+g]){l=!0;break}}}if(l){if(o!==s){e[s]=e[o];const h=o*n,f=s*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++s}}if(r>0){e[s]=e[r];for(let o=r*n,l=s*n,c=0;c!==n;++c)t[l+c]=t[o+c];++s}return s!==e.length?(this.times=Yi(e,0,s),this.values=Yi(t,0,s*n)):(this.times=e,this.values=t),this}clone(){const e=Yi(this.times,0),t=Yi(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Mi.prototype.TimeBufferType=Float32Array;Mi.prototype.ValueBufferType=Float32Array;Mi.prototype.DefaultInterpolation=js;class so extends Mi{}so.prototype.ValueTypeName="bool";so.prototype.ValueBufferType=Array;so.prototype.DefaultInterpolation=Go;so.prototype.InterpolantFactoryMethodLinear=void 0;so.prototype.InterpolantFactoryMethodSmooth=void 0;class rp extends Mi{}rp.prototype.ValueTypeName="color";class Xo extends Mi{}Xo.prototype.ValueTypeName="number";class SM extends na{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Fn.slerpFlat(r,0,s,c-o,s,c,l);return r}}class Xr extends Mi{InterpolantFactoryMethodLinear(e){return new SM(this.times,this.values,this.getValueSize(),e)}}Xr.prototype.ValueTypeName="quaternion";Xr.prototype.DefaultInterpolation=js;Xr.prototype.InterpolantFactoryMethodSmooth=void 0;class oo extends Mi{}oo.prototype.ValueTypeName="string";oo.prototype.ValueBufferType=Array;oo.prototype.DefaultInterpolation=Go;oo.prototype.InterpolantFactoryMethodLinear=void 0;oo.prototype.InterpolantFactoryMethodSmooth=void 0;class qo extends Mi{}qo.prototype.ValueTypeName="vector";class Fc{constructor(e,t=-1,n,i=du){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=li(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let s=0,o=n.length;s!==o;++s)t.push(wM(n[s]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,s=n.length;r!==s;++r)t.push(Mi.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,s=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=vM(l);l=Tf(l,1,u),c=Tf(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),s.push(new Xo(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,s)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const s=[];for(const o in i)s.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return s}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,_){if(d.length!==0){const m=[],p=[];np(d,m,p,g),m.length!==0&&_.push(new h(f,m,p))}},i=[],r=e.name||"default",s=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let S=0;S!==f[g].morphTargets.length;++S){const y=f[g];m.push(y.time),p.push(y.morphTarget===_?1:0)}i.push(new Xo(".morphTargetInfluence["+_+"]",m,p))}l=d.length*s}else{const d=".bones["+t[h].name+"]";n(qo,d+".position",f,"pos",i),n(Xr,d+".quaternion",f,"rot",i),n(qo,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function bM(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Xo;case"vector":case"vector2":case"vector3":case"vector4":return qo;case"color":return rp;case"quaternion":return Xr;case"bool":case"boolean":return so;case"string":return oo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function wM(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=bM(a.type);if(a.times===void 0){const t=[],n=[];np(a.keys,t,n,"value"),a.times=t,a.values=n}return e.parse!==void 0?e.parse(a):new e(a.name,a.times,a.values,a.interpolation)}const Zs={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class TM{constructor(e,t,n){const i=this;let r=!1,s=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,s,o),r=!0},this.itemEnd=function(u){s++,i.onProgress!==void 0&&i.onProgress(u,s,o),s===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const AM=new TM;class ao{constructor(e){this.manager=e!==void 0?e:AM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Ci={};class EM extends Error{constructor(e,t){super(e),this.response=t}}class il extends ao{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Zs.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ci[e]!==void 0){Ci[e].push({onLoad:t,onProgress:n,onError:i});return}Ci[e]=[],Ci[e].push({onLoad:t,onProgress:n,onError:i});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ci[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=f?parseInt(f):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){S();function S(){h.read().then(({done:y,value:x})=>{if(y)p.close();else{_+=x.byteLength;const M=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let E=0,A=u.length;E<A;E++){const R=u[E];R.onProgress&&R.onProgress(M)}p.enqueue(x),S()}})}}});return new Response(m)}else throw new EM(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Zs.add(e,c);const u=Ci[e];delete Ci[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Ci[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ci[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class CM extends ao{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Zs.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const o=Wo("img");function l(){u(),Zs.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class LM extends ao{constructor(e){super(e)}load(e,t,n,i){const r=new Gt,s=new CM(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Sl extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const sc=new et,Af=new U,Ef=new U;class Mu{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gu,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Af.setFromMatrixPosition(e.matrixWorld),t.position.copy(Af),Ef.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ef),t.updateMatrixWorld(),sc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class RM extends Mu{constructor(){super(new pn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ks*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class PM extends Sl{constructor(e,t,n=0,i=Math.PI/3,r=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=s,this.map=null,this.shadow=new RM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Cf=new et,mo=new U,oc=new U;class DM extends Mu{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new He(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),mo.setFromMatrixPosition(e.matrixWorld),n.position.copy(mo),oc.copy(n.position),oc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(oc),n.updateMatrixWorld(),i.makeTranslation(-mo.x,-mo.y,-mo.z),Cf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cf)}}class IM extends Sl{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new DM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class OM extends Mu{constructor(){super(new vl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sp extends Sl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new OM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class NM extends Sl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class kc{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class UM extends ao{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Zs.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){Zs.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}class FM{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,s;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,s=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,s=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,s=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=s,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let s=this.cumulativeWeight;if(s===0){for(let o=0;o!==i;++o)n[r+o]=n[o];s=t}else{s+=t;const o=t/s;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=s}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,s=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}s>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,s=i;r!==s;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let s=0;s!==r;++s)e[t+s]=e[n+s]}_slerp(e,t,n,i){Fn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const s=this._workIndex*r;Fn.multiplyQuaternionsFlat(e,s,e,t,e,n),Fn.slerpFlat(e,t,e,t,e,s,i)}_lerp(e,t,n,i,r){const s=1-i;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*s+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let s=0;s!==r;++s){const o=t+s;e[o]=e[o]+e[n+s]*i}}}const Su="\\[\\]\\.:\\/",kM=new RegExp("["+Su+"]","g"),bu="[^"+Su+"]",zM="[^"+Su.replace("\\.","")+"]",BM=/((?:WC+[\/:])*)/.source.replace("WC",bu),VM=/(WCOD+)?/.source.replace("WCOD",zM),HM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bu),GM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bu),WM=new RegExp("^"+BM+VM+HM+GM+"$"),XM=["material","materials","bones","map"];class qM{constructor(e,t,n){const i=n||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ft{constructor(e,t,n){this.path=t,this.parsedPath=n||ft.parseTrackName(t),this.node=ft.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ft.Composite(e,t,n):new ft(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(kM,"")}static parseTrackName(e){const t=WM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);XM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let s=0;s<r.length;s++){const o=r[s];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=ft.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const s=e[i];if(s===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ft.Composite=qM;ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class jM{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,s=r.length,o=new Array(s),l={endingStart:Ts,endingEnd:Ts};for(let c=0;c!==s;++c){const u=r[c].createInterpolant(null);o[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(s),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Fg,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,s=r/i,o=i/r;e.warp(1,s,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,s=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/s,c[1]=t/s,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const s=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case zg:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(s),c[u].accumulateAdditive(o);break;case du:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(s),c[u].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const s=n===kg;if(e===0)return r===-1?i:s&&(r&1)===1?t-i:i;if(n===Ug){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,s)):this._setEndings(this.repetitions===0,!0,s)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,s)}else this._setEndings(!1,!1,s);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(s&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=As,i.endingEnd=As):(e?i.endingStart=this.zeroSlopeAtStart?As:Ts:i.endingStart=nl,t?i.endingEnd=this.zeroSlopeAtEnd?As:Ts:i.endingEnd=nl)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let s=this._weightInterpolant;s===null&&(s=i._lendControlInterpolant(),this._weightInterpolant=s);const o=s.parameterPositions,l=s.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}}const YM=new Float32Array(1);class KM extends dr{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,s=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){const f=i[h],d=f.name;let g=u[d];if(g!==void 0)++g.referenceCount,s[h]=g;else{if(g=s[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,d));continue}const _=t&&t._propertyBindings[h].binding.parsedPath;g=new FM(ft.create(n,d,_),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,d),s[h]=g}o[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let s=r[t];if(s===void 0)s={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=s;else{const o=s.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),s.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,s=this._actionsByClip,o=s[r],l=o.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete h[f],l.length===0&&delete s[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let s=i[t];s===void 0&&(s={},i[t]=s),s[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,s=this._bindingsByRootAndName,o=s[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete s[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new ip(new Float32Array(2),new Float32Array(2),1,YM),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let s=typeof e=="string"?Fc.findByName(i,e):e;const o=s!==null?s.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(s!==null?n=s.blendMode:n=du),l!==void 0){const h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],s===null&&(s=c._clip)}if(s===null)return null;const u=new jM(this,s,t,n);return this._bindAction(u,c),this._addInactiveAction(u,o,r),u}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?Fc.findByName(n,e):e,s=r?r.uuid:e,o=this._actionsByClip[s];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),s=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,s);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(s);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const s=r.knownActions;for(let o=0,l=s.length;o!==l;++o){const c=s[o];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const s in n){const o=n[s].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const s in r){const o=r[s];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Lf{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(qt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fu);var qr={},$M={get exports(){return qr},set exports(a){qr=a}},Ns=typeof Reflect=="object"?Reflect:null,Rf=Ns&&typeof Ns.apply=="function"?Ns.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)},Wa;Ns&&typeof Ns.ownKeys=="function"?Wa=Ns.ownKeys:Object.getOwnPropertySymbols?Wa=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Wa=function(e){return Object.getOwnPropertyNames(e)};function ZM(a){console&&console.warn&&console.warn(a)}var op=Number.isNaN||function(e){return e!==e};function dt(){dt.init.call(this)}$M.exports=dt;qr.once=tS;dt.EventEmitter=dt;dt.prototype._events=void 0;dt.prototype._eventsCount=0;dt.prototype._maxListeners=void 0;var Pf=10;function bl(a){if(typeof a!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof a)}Object.defineProperty(dt,"defaultMaxListeners",{enumerable:!0,get:function(){return Pf},set:function(a){if(typeof a!="number"||a<0||op(a))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+a+".");Pf=a}});dt.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};dt.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||op(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function ap(a){return a._maxListeners===void 0?dt.defaultMaxListeners:a._maxListeners}dt.prototype.getMaxListeners=function(){return ap(this)};dt.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var i=e==="error",r=this._events;if(r!==void 0)i=i&&r.error===void 0;else if(!i)return!1;if(i){var s;if(t.length>0&&(s=t[0]),s instanceof Error)throw s;var o=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw o.context=s,o}var l=r[e];if(l===void 0)return!1;if(typeof l=="function")Rf(l,this,t);else for(var c=l.length,u=fp(l,c),n=0;n<c;++n)Rf(u[n],this,t);return!0};function lp(a,e,t,n){var i,r,s;if(bl(t),r=a._events,r===void 0?(r=a._events=Object.create(null),a._eventsCount=0):(r.newListener!==void 0&&(a.emit("newListener",e,t.listener?t.listener:t),r=a._events),s=r[e]),s===void 0)s=r[e]=t,++a._eventsCount;else if(typeof s=="function"?s=r[e]=n?[t,s]:[s,t]:n?s.unshift(t):s.push(t),i=ap(a),i>0&&s.length>i&&!s.warned){s.warned=!0;var o=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");o.name="MaxListenersExceededWarning",o.emitter=a,o.type=e,o.count=s.length,ZM(o)}return a}dt.prototype.addListener=function(e,t){return lp(this,e,t,!1)};dt.prototype.on=dt.prototype.addListener;dt.prototype.prependListener=function(e,t){return lp(this,e,t,!0)};function JM(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function cp(a,e,t){var n={fired:!1,wrapFn:void 0,target:a,type:e,listener:t},i=JM.bind(n);return i.listener=t,n.wrapFn=i,i}dt.prototype.once=function(e,t){return bl(t),this.on(e,cp(this,e,t)),this};dt.prototype.prependOnceListener=function(e,t){return bl(t),this.prependListener(e,cp(this,e,t)),this};dt.prototype.removeListener=function(e,t){var n,i,r,s,o;if(bl(t),i=this._events,i===void 0)return this;if(n=i[e],n===void 0)return this;if(n===t||n.listener===t)--this._eventsCount===0?this._events=Object.create(null):(delete i[e],i.removeListener&&this.emit("removeListener",e,n.listener||t));else if(typeof n!="function"){for(r=-1,s=n.length-1;s>=0;s--)if(n[s]===t||n[s].listener===t){o=n[s].listener,r=s;break}if(r<0)return this;r===0?n.shift():QM(n,r),n.length===1&&(i[e]=n[0]),i.removeListener!==void 0&&this.emit("removeListener",e,o||t)}return this};dt.prototype.off=dt.prototype.removeListener;dt.prototype.removeAllListeners=function(e){var t,n,i;if(n=this._events,n===void 0)return this;if(n.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):n[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete n[e]),this;if(arguments.length===0){var r=Object.keys(n),s;for(i=0;i<r.length;++i)s=r[i],s!=="removeListener"&&this.removeAllListeners(s);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(t=n[e],typeof t=="function")this.removeListener(e,t);else if(t!==void 0)for(i=t.length-1;i>=0;i--)this.removeListener(e,t[i]);return this};function up(a,e,t){var n=a._events;if(n===void 0)return[];var i=n[e];return i===void 0?[]:typeof i=="function"?t?[i.listener||i]:[i]:t?eS(i):fp(i,i.length)}dt.prototype.listeners=function(e){return up(this,e,!0)};dt.prototype.rawListeners=function(e){return up(this,e,!1)};dt.listenerCount=function(a,e){return typeof a.listenerCount=="function"?a.listenerCount(e):hp.call(a,e)};dt.prototype.listenerCount=hp;function hp(a){var e=this._events;if(e!==void 0){var t=e[a];if(typeof t=="function")return 1;if(t!==void 0)return t.length}return 0}dt.prototype.eventNames=function(){return this._eventsCount>0?Wa(this._events):[]};function fp(a,e){for(var t=new Array(e),n=0;n<e;++n)t[n]=a[n];return t}function QM(a,e){for(;e+1<a.length;e++)a[e]=a[e+1];a.pop()}function eS(a){for(var e=new Array(a.length),t=0;t<e.length;++t)e[t]=a[t].listener||a[t];return e}function tS(a,e){return new Promise(function(t,n){function i(s){a.removeListener(e,r),n(s)}function r(){typeof a.removeListener=="function"&&a.removeListener("error",i),t([].slice.call(arguments))}dp(a,e,r,{once:!0}),e!=="error"&&nS(a,i,{once:!0})})}function nS(a,e,t){typeof a.on=="function"&&dp(a,"error",e,t)}function dp(a,e,t,n){if(typeof a.on=="function")n.once?a.once(e,t):a.on(e,t);else if(typeof a.addEventListener=="function")a.addEventListener(e,function i(r){n.once&&a.removeEventListener(e,i),t(r)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof a)}class iS extends qr{constructor(){super(),this.width=window.innerWidth,this.height=window.innerHeight,this.aspect=this.width/this.height,this.pixelRation=Math.min(window.devicePixelRatio,2),this.frustrum=5,window.addEventListener("resize",()=>{this.width=window.innerWidth,this.height=window.innerHeight,this.aspect=this.width/this.height,this.pixelRation=Math.min(window.devicePixelRatio,2),this.emit("resize")})}}class rS extends qr.EventEmitter{constructor(){super(),this.start=Date.now(),this.current=this.start,this.elapsed=0,this.delta=16,this.update()}update(){const e=Date.now();this.delta=e-this.current,this.current=e,this.elapsed=this.current-this.start,this.emit("update"),window.requestAnimationFrame(()=>this.update())}}function Df(a,e){if(e===Bg)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),a;if(e===Pc||e===Rd){let t=a.getIndex();if(t===null){const s=[],o=a.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)s.push(l);a.setIndex(s),t=a.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}const n=t.count-2,i=[];if(e===Pc)for(let s=1;s<=n;s++)i.push(t.getX(0)),i.push(t.getX(s)),i.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(t.getX(s)),i.push(t.getX(s+1)),i.push(t.getX(s+2))):(i.push(t.getX(s+2)),i.push(t.getX(s+1)),i.push(t.getX(s)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=a.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),a}class sS extends ao{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new uS(t)}),this.register(function(t){return new _S(t)}),this.register(function(t){return new xS(t)}),this.register(function(t){return new vS(t)}),this.register(function(t){return new fS(t)}),this.register(function(t){return new dS(t)}),this.register(function(t){return new pS(t)}),this.register(function(t){return new mS(t)}),this.register(function(t){return new cS(t)}),this.register(function(t){return new gS(t)}),this.register(function(t){return new hS(t)}),this.register(function(t){return new aS(t)}),this.register(function(t){return new yS(t)}),this.register(function(t){return new MS(t)})}load(e,t,n,i){const r=this;let s;this.resourcePath!==""?s=this.resourcePath:this.path!==""?s=this.path:s=kc.extractUrlBase(e),this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new il(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,s,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const s={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===pp){try{s[ot.KHR_BINARY_GLTF]=new SS(e)}catch(h){i&&i(h);return}r=JSON.parse(s[ot.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new NS(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);o[h.name]=h,s[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case ot.KHR_MATERIALS_UNLIT:s[h]=new lS;break;case ot.KHR_DRACO_MESH_COMPRESSION:s[h]=new bS(r,this.dracoLoader);break;case ot.KHR_TEXTURE_TRANSFORM:s[h]=new wS;break;case ot.KHR_MESH_QUANTIZATION:s[h]=new TS;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(s),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function oS(){let a={};return{get:function(e){return a[e]},add:function(e,t){a[e]=t},remove:function(e){delete a[e]},removeAll:function(){a={}}}}const ot={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class aS{constructor(e){this.parser=e,this.name=ot.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Xe(16777215);l.color!==void 0&&u.fromArray(l.color);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new sp(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new IM(u),c.distance=h;break;case"spot":c=new PM(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Zi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class lS{constructor(){this.name=ot.KHR_MATERIALS_UNLIT}getMaterialType(){return Qi}extendParams(e,t,n){const i=[];e.color=new Xe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const s=r.baseColorFactor;e.color.fromArray(s),e.opacity=s[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,ct))}return Promise.all(i)}}class cS{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class uS{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];if(s.clearcoatFactor!==void 0&&(t.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){const o=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new He(o,o)}return Promise.all(r)}}class hS{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.iridescenceFactor!==void 0&&(t.iridescence=s.iridescenceFactor),s.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",s.iridescenceTexture)),s.iridescenceIor!==void 0&&(t.iridescenceIOR=s.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),s.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),s.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),s.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(r)}}class fS{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Xe(0,0,0),t.sheenRoughness=0,t.sheen=1;const s=i.extensions[this.name];return s.sheenColorFactor!==void 0&&t.sheenColor.fromArray(s.sheenColorFactor),s.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",s.sheenColorTexture,ct)),s.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(r)}}class dS{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.transmissionFactor!==void 0&&(t.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",s.transmissionTexture)),Promise.all(r)}}class pS{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];t.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",s.thicknessTexture)),t.attenuationDistance=s.attenuationDistance||1/0;const o=s.attenuationColor||[1,1,1];return t.attenuationColor=new Xe(o[0],o[1],o[2]),Promise.all(r)}}class mS{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pr}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class gS{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:pr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];t.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",s.specularTexture));const o=s.specularColorFactor||[1,1,1];return t.specularColor=new Xe(o[0],o[1],o[2]),s.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",s.specularColorTexture,ct)),Promise.all(r)}}class _S{constructor(e){this.parser=e,this.name=ot.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],s=t.options.ktx2Loader;if(!s){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,s)}}class xS{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const s=r.extensions[t],o=i.images[s.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,s.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class vS{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const s=r.extensions[t],o=i.images[s.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,s.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class yS{constructor(e){this.name=ot.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(o,l,c);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):s.ready.then(function(){const d=new ArrayBuffer(u*h);return s.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class MS{constructor(e){this.name=ot.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Hn.TRIANGLES&&c.mode!==Hn.TRIANGLE_STRIP&&c.mode!==Hn.TRIANGLE_FAN&&c.mode!==void 0)return null;const s=n.extensions[this.name].attributes,o=[],l={};for(const c in s)o.push(this.parser.getDependency("accessor",s[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const g of h){const _=new et,m=new U,p=new Fn,S=new U(1,1,1),y=new pM(g.geometry,g.material,f);for(let x=0;x<f;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&S.fromBufferAttribute(l.SCALE,x),y.setMatrixAt(x,_.compose(m,p,S));for(const x in l)x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);Tt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),d.push(y)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const pp="glTF",go=12,If={JSON:1313821514,BIN:5130562};class SS{constructor(e){this.name=ot.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,go),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==pp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-go,r=new DataView(e,go);let s=0;for(;s<i;){const o=r.getUint32(s,!0);s+=4;const l=r.getUint32(s,!0);if(s+=4,l===If.JSON){const c=new Uint8Array(e,go+s,o);this.content=n.decode(c)}else if(l===If.BIN){const c=go+s;this.body=e.slice(c,c+o)}s+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class bS{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ot.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,o={},l={},c={};for(const u in s){const h=zc[u]||u.toLowerCase();o[h]=s[u]}for(const u in e.attributes){const h=zc[u]||u.toLowerCase();if(s[u]!==void 0){const f=n.accessors[e.attributes[u]],d=Us[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(f){for(const d in f.attributes){const g=f.attributes[d],_=l[d];_!==void 0&&(g.normalized=_)}h(f)},o,c)})})}}class wS{constructor(){this.name=ot.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class TS{constructor(){this.name=ot.KHR_MESH_QUANTIZATION}}class mp extends na{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let s=0;s!==i;s++)t[s]=n[r+s];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,g=e*c,_=g-c,m=-2*d+3*f,p=d-f,S=1-m,y=p-f+h;for(let x=0;x!==o;x++){const M=s[_+x+o],E=s[_+x+l]*u,A=s[g+x+o],R=s[g+x]*u;r[x]=S*M+y*E+m*A+p*R}return r}}const AS=new Fn;class ES extends mp{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return AS.fromArray(r).normalize().toArray(r),r}}const Hn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Us={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Of={9728:Nt,9729:tn,9984:Rc,9985:Cd,9986:Ha,9987:Br},Nf={33071:jn,33648:tl,10497:Xs},ac={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},zc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ki={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},CS={CUBICSPLINE:void 0,LINEAR:js,STEP:Go},lc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function LS(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new Ml({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ki})),a.DefaultMaterial}function _o(a,e,t){for(const n in t.extensions)a[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Zi(a,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(a.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function RS(a,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(a);const s=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):a.attributes.position;s.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):a.attributes.normal;o.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):a.attributes.color;l.push(f)}}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(a.morphAttributes.position=u),i&&(a.morphAttributes.normal=h),r&&(a.morphAttributes.color=f),a.morphTargetsRelative=!0,a})}function PS(a,e){if(a.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)a.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(a.morphTargetInfluences.length===t.length){a.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)a.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function DS(a){const e=a.extensions&&a.extensions[ot.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Uf(e.attributes):t=a.indices+":"+Uf(a.attributes)+":"+a.mode,t}function Uf(a){let e="";const t=Object.keys(a).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+a[t[n]]+";";return e}function Bc(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function IS(a){return a.search(/\.jpe?g($|\?)/i)>0||a.search(/^data\:image\/jpeg/)===0?"image/jpeg":a.search(/\.webp($|\?)/i)>0||a.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const OS=new et;class NS{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new oS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new LM(this.options.manager):this.textureLoader=new UM(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new il(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(s){const o={scene:s[0][i.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:i.asset,parser:n,userData:{}};_o(r,o,i),Zi(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i].joints;for(let o=0,l=s.length;o<l;o++)e[s[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const s=e[i];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(n[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(s,o)=>{const l=this.associations.get(s);l!=null&&this.associations.set(o,l);for(const[c,u]of s.children.entries())r(u,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,s){return n.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ot.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,s){n.load(kc.resolveURL(t.uri,i.path),r,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const s=ac[i.type],o=Us[i.componentType],l=i.normalized===!0,c=new o(i.count*s);return Promise.resolve(new Kt(c,s,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(s){const o=s[0],l=ac[i.type],c=Us[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(d&&d!==h){const p=Math.floor(f/d),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let y=t.cache.get(S);y||(_=new c(o,p*d,i.count*d/u),y=new lM(_,d/u),t.cache.add(S,y)),m=new xu(y,l,f%d/u,g)}else o===null?_=new c(i.count*l):_=new c(o,f,i.count*l),m=new Kt(_,l,g);if(i.sparse!==void 0){const p=ac.SCALAR,S=Us[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,M=new S(s[1],y,i.sparse.count*p),E=new c(s[2],x,i.sparse.count*l);o!==null&&(m=new Kt(m.array.slice(),m.itemSize,m.normalized));for(let A=0,R=M.length;A<R;A++){const v=M[A];if(m.setX(v,E[A*l]),l>=2&&m.setY(v,E[A*l+1]),l>=3&&m.setZ(v,E[A*l+2]),l>=4&&m.setW(v,E[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,s=t.images[r];let o=this.textureLoader;if(s.uri){const l=n.manager.getHandler(s.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,s=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+s.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=s.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const f=(r.samplers||{})[s.sampler]||{};return u.magFilter=Of[f.magFilter]||tn,u.minFilter=Of[f.minFilter]||Br,u.wrapS=Nf[f.wrapS]||Xs,u.wrapT=Nf[f.wrapT]||Xs,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const s=i.images[e],o=self.URL||self.webkitURL;let l=s.uri||"",c=!1;if(s.bufferView!==void 0)l=n.getDependency("bufferView",s.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:s.mimeType});return l=o.createObjectURL(f),l});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Gt(_);m.needsUpdate=!0,f(m)}),t.load(kc.resolveURL(h,r.path),g,void 0,d)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),h.userData.mimeType=s.mimeType||IS(s.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(s){if(!s)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(s=s.clone(),s.channel=n.texCoord),r.extensions[ot.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[ot.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(s);s=r.extensions[ot.KHR_TEXTURE_TRANSFORM].extendTexture(s,o),r.associations.set(s,l)}}return i!==void 0&&(s.encoding=i),e[t]=s,s})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new ep,_i.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Qd,_i.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||s){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),s&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),s&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ml}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let s;const o={},l=r.extensions||{},c=[];if(l[ot.KHR_MATERIALS_UNLIT]){const h=i[ot.KHR_MATERIALS_UNLIT];s=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new Xe(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;o.color.fromArray(f),o.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,ct)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),s=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=pi);const u=r.alphaMode||lc.OPAQUE;if(u===lc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===lc.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&s!==Qi&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new He(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}return r.occlusionTexture!==void 0&&s!==Qi&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&s!==Qi&&(o.emissive=new Xe().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&s!==Qi&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,ct)),Promise.all(c).then(function(){const h=new s(o);return r.name&&(h.name=r.name),Zi(h,r),t.associations.set(h,{materials:e}),r.extensions&&_o(i,h,r),h})}createUniqueName(e){const t=ft.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[ot.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Ff(l,o,t)})}const s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=DS(c),h=i[u];if(h)s.push(h.promise);else{let f;c.extensions&&c.extensions[ot.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Ff(new ui,c,t),i[u]={primitive:c,promise:f},s.push(f)}}return Promise.all(s)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],s=r.primitives,o=[];for(let l=0,c=s.length;l<c;l++){const u=s[l].material===void 0?LS(this.cache):this.getDependency("material",s[l].material);o.push(u)}return o.push(t.loadGeometries(s)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const _=u[d],m=s[d];let p;const S=c[d];if(m.mode===Hn.TRIANGLES||m.mode===Hn.TRIANGLE_STRIP||m.mode===Hn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new uM(_,S):new Un(_,S),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Hn.TRIANGLE_STRIP?p.geometry=Df(p.geometry,Rd):m.mode===Hn.TRIANGLE_FAN&&(p.geometry=Df(p.geometry,Pc));else if(m.mode===Hn.LINES)p=new mM(_,S);else if(m.mode===Hn.LINE_STRIP)p=new yu(_,S);else if(m.mode===Hn.LINE_LOOP)p=new gM(_,S);else if(m.mode===Hn.POINTS)p=new _M(_,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&PS(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Zi(p,r),m.extensions&&_o(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return h[0];const f=new er;t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new pn(r_.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new vl(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Zi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),s=i,o=[],l=[];for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h){o.push(h);const f=new et;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new vu(o,l)})}loadAnimation(e){const n=this.json.animations[e],i=n.name?n.name:"animation_"+e,r=[],s=[],o=[],l=[],c=[];for(let u=0,h=n.channels.length;u<h;u++){const f=n.channels[u],d=n.samplers[f.sampler],g=f.target,_=g.node,m=n.parameters!==void 0?n.parameters[d.input]:d.input,p=n.parameters!==void 0?n.parameters[d.output]:d.output;g.node!==void 0&&(r.push(this.getDependency("node",_)),s.push(this.getDependency("accessor",m)),o.push(this.getDependency("accessor",p)),l.push(d),c.push(g))}return Promise.all([Promise.all(r),Promise.all(s),Promise.all(o),Promise.all(l),Promise.all(c)]).then(function(u){const h=u[0],f=u[1],d=u[2],g=u[3],_=u[4],m=[];for(let p=0,S=h.length;p<S;p++){const y=h[p],x=f[p],M=d[p],E=g[p],A=_[p];if(y===void 0)continue;y.updateMatrix();let R;switch(Ki[A.path]){case Ki.weights:R=Xo;break;case Ki.rotation:R=Xr;break;case Ki.position:case Ki.scale:default:R=qo;break}const v=y.name?y.name:y.uuid,b=E.interpolation!==void 0?CS[E.interpolation]:js,V=[];Ki[A.path]===Ki.weights?y.traverse(function(I){I.morphTargetInfluences&&V.push(I.name?I.name:I.uuid)}):V.push(v);let O=M.array;if(M.normalized){const I=Bc(O.constructor),N=new Float32Array(O.length);for(let z=0,$=O.length;z<$;z++)N[z]=O[z]*I;O=N}for(let I=0,N=V.length;I<N;I++){const z=new R(V[I]+"."+Ki[A.path],x.array,O,b);E.interpolation==="CUBICSPLINE"&&(z.createInterpolant=function(X){const G=this instanceof Xr?ES:mp;return new G(this.times,this.values,this.getValueSize()/3,X)},z.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(z)}}return new Fc(i,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const s=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&s.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),s})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),s=[],o=i.children||[];for(let c=0,u=o.length;c<u;c++)s.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(s),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,OS)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],s=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new Jd:c.length>1?u=new er:c.length===1?u=c[0]:u=new Tt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=s),Zi(u,r),r.extensions&&_o(n,u,r),r.matrix!==void 0){const h=new et;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new er;n.name&&(r.name=i.createUniqueName(n.name)),Zi(r,n),n.extensions&&_o(t,r,n);const s=n.nodes||[],o=[];for(let l=0,c=s.length;l<c;l++)o.push(i.getDependency("node",s[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof _i||f instanceof Gt)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(r),r})}}function US(a,e,t){const n=e.attributes,i=new Vi;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new U(l[0],l[1],l[2]),new U(c[0],c[1],c[2])),o.normalized){const u=Bc(Us[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new U,l=new U;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const _=Bc(Us[f.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}a.boundingBox=i;const s=new Hi;i.getCenter(s.center),s.radius=i.min.distanceTo(i.max)/2,a.boundingSphere=s}function Ff(a,e,t){const n=e.attributes,i=[];function r(s,o){return t.getDependency("accessor",s).then(function(l){a.setAttribute(o,l)})}for(const s in n){const o=zc[s]||s.toLowerCase();o in a.attributes||i.push(r(n[s],o))}if(e.indices!==void 0&&!a.index){const s=t.getDependency("accessor",e.indices).then(function(o){a.setIndex(o)});i.push(s)}return Zi(a,e),US(a,e,t),Promise.all(i).then(function(){return e.targets!==void 0?RS(a,e.targets,t):a})}const cc=new WeakMap;class FS extends ao{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const r=new il(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,s=>{this.parse(s,t,i)},n,i)}parse(e,t,n){this.decodeDracoFile(e,t,null,null,Wn).catch(n)}decodeDracoFile(e,t,n,i,r=Ys){const s={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,s).then(t)}decodeGeometry(e,t){const n=JSON.stringify(t);if(cc.has(e)){const l=cc.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const r=this.workerNextTaskID++,s=e.byteLength,o=this._getWorker(r,s).then(l=>(i=l,new Promise((c,u)=>{i._callbacks[r]={resolve:c,reject:u},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return o.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),cc.set(e,{key:n,promise:o}),o}_createGeometry(e){const t=new ui;e.index&&t.setIndex(new Kt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],r=i.name,s=i.array,o=i.itemSize,l=new Kt(s,o);r==="color"&&this._assignVertexColorSpace(l,i.vertexColorSpace),t.setAttribute(r,l)}return t}_assignVertexColorSpace(e,t){if(t!==Wn)return;const n=new Xe;for(let i=0,r=e.count;i<r;i++)n.fromBufferAttribute(e,i).convertSRGBToLinear(),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new il(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const r=kS.toString(),s=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([s]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){const s=r.data;switch(s.type){case"decode":i._callbacks[s.id].resolve(s);break;case"error":i._callbacks[s.id].reject(s);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+s.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function kS(){let a,e;onmessage=function(s){const o=s.data;switch(o.type){case"init":a=o.decoderConfig,e=new Promise(function(u){a.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(a)});break;case"decode":const l=o.buffer,c=o.taskConfig;e.then(u=>{const h=u.draco,f=new h.Decoder;try{const d=t(h,f,new Int8Array(l),c),g=d.attributes.map(_=>_.array.buffer);d.index&&g.push(d.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:d},g)}catch(d){console.error(d),self.postMessage({type:"error",id:o.id,error:d.message})}finally{h.destroy(f)}});break}};function t(s,o,l,c){const u=c.attributeIDs,h=c.attributeTypes;let f,d;const g=o.GetEncodedGeometryType(l);if(g===s.TRIANGULAR_MESH)f=new s.Mesh,d=o.DecodeArrayToMesh(l,l.byteLength,f);else if(g===s.POINT_CLOUD)f=new s.PointCloud,d=o.DecodeArrayToPointCloud(l,l.byteLength,f);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!d.ok()||f.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+d.error_msg());const _={index:null,attributes:[]};for(const m in u){const p=self[h[m]];let S,y;if(c.useUniqueIDs)y=u[m],S=o.GetAttributeByUniqueId(f,y);else{if(y=o.GetAttributeId(f,s[u[m]]),y===-1)continue;S=o.GetAttribute(f,y)}const x=i(s,o,f,m,p,S);m==="color"&&(x.vertexColorSpace=c.vertexColorSpace),_.attributes.push(x)}return g===s.TRIANGULAR_MESH&&(_.index=n(s,o,f)),s.destroy(f),_}function n(s,o,l){const u=l.num_faces()*3,h=u*4,f=s._malloc(h);o.GetTrianglesUInt32Array(l,h,f);const d=new Uint32Array(s.HEAPF32.buffer,f,u).slice();return s._free(f),{array:d,itemSize:1}}function i(s,o,l,c,u,h){const f=h.num_components(),g=l.num_points()*f,_=g*u.BYTES_PER_ELEMENT,m=r(s,u),p=s._malloc(_);o.GetAttributeDataArrayForAllPoints(l,h,m,_,p);const S=new u(s.HEAPF32.buffer,p,g).slice();return s._free(p),{name:c,array:S,itemSize:f}}function r(s,o){switch(o){case Float32Array:return s.DT_FLOAT32;case Int8Array:return s.DT_INT8;case Int16Array:return s.DT_INT16;case Int32Array:return s.DT_INT32;case Uint8Array:return s.DT_UINT8;case Uint16Array:return s.DT_UINT16;case Uint32Array:return s.DT_UINT32}}}class zS extends qr{constructor(e){super(),this.Experience=new Qn,this.renderer=this.Experience.renderer,this.assets=e,this.items={},this.queue=this.assets.length,this.loaded=0,this.setLoaders(),this.startLoading()}setLoaders(){this.loaders={},this.loaders.gltfLoader=new sS,this.loaders.dracoLoader=new FS,this.loaders.dracoLoader.setDecoderPath("/portfolio/draco/"),this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader)}startLoading(){for(const e of this.assets)e.type==="glbModel"?this.loaders.gltfLoader.load(e.path,t=>{this.singleAssetLoaded(e,t)}):e.type==="videoTexture"&&(this.video={},this.videoTexture={},this.video[e.name]=document.createElement("video"),this.video[e.name].src=e.path,this.video[e.name].muted=!0,this.video[e.name].playsInline=!0,this.video[e.name].autoplay=!0,this.video[e.name].loop=!0,this.video[e.name].play(),this.videoTexture[e.name]=new xM(this.video[e.name]),this.videoTexture[e.name].flipY=!0,this.videoTexture[e.name].minFilter=Nt,this.videoTexture[e.name].magFilter=Nt,this.videoTexture[e.name].generateMipmaps=!1,this.videoTexture[e.name].encoding=ct,this.singleAssetLoaded(e,this.videoTexture[e.name]))}singleAssetLoaded(e,t){this.items[e.name]=t,this.loaded++,this.loaded===this.queue&&this.emit("assetsLoaded")}}const BS=[{name:"screen_vr",type:"videoTexture",path:"/portfolio/textures/chessAI-sample.mp4"},{name:"room_final",type:"glbModel",path:"/portfolio/models/room.glb"}],kf={type:"change"},uc={type:"start"},zf={type:"end"};class VS extends dr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Jr.ROTATE,MIDDLE:Jr.DOLLY,RIGHT:Jr.PAN},this.touches={ONE:Qr.ROTATE,TWO:Qr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",st),this._domElementKeyEvents=D},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",st),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(kf),n.update(),r=i.NONE},this.update=function(){const D=new U,Q=new Fn().setFromUnitVectors(e.up,new U(0,1,0)),W=Q.clone().invert(),ue=new U,de=new Fn,Te=2*Math.PI;return function(){const be=n.object.position;D.copy(be).sub(n.target),D.applyQuaternion(Q),o.setFromVector3(D),n.autoRotate&&r===i.NONE&&v(A()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Pe=n.minAzimuthAngle,Ue=n.maxAzimuthAngle;return isFinite(Pe)&&isFinite(Ue)&&(Pe<-Math.PI?Pe+=Te:Pe>Math.PI&&(Pe-=Te),Ue<-Math.PI?Ue+=Te:Ue>Math.PI&&(Ue-=Te),Pe<=Ue?o.theta=Math.max(Pe,Math.min(Ue,o.theta)):o.theta=o.theta>(Pe+Ue)/2?Math.max(Pe,o.theta):Math.min(Ue,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),D.setFromSpherical(o),D.applyQuaternion(W),be.copy(n.target).add(D),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||ue.distanceToSquared(n.object.position)>s||8*(1-de.dot(n.object.quaternion))>s?(n.dispatchEvent(kf),ue.copy(n.object.position),de.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",w),n.domElement.removeEventListener("pointerdown",Ee),n.domElement.removeEventListener("pointercancel",$e),n.domElement.removeEventListener("wheel",Ve),n.domElement.removeEventListener("pointermove",Ke),n.domElement.removeEventListener("pointerup",$e),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",st),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const s=1e-6,o=new Lf,l=new Lf;let c=1;const u=new U;let h=!1;const f=new He,d=new He,g=new He,_=new He,m=new He,p=new He,S=new He,y=new He,x=new He,M=[],E={};function A(){return 2*Math.PI/60/60*n.autoRotateSpeed}function R(){return Math.pow(.95,n.zoomSpeed)}function v(D){l.theta-=D}function b(D){l.phi-=D}const V=function(){const D=new U;return function(W,ue){D.setFromMatrixColumn(ue,0),D.multiplyScalar(-W),u.add(D)}}(),O=function(){const D=new U;return function(W,ue){n.screenSpacePanning===!0?D.setFromMatrixColumn(ue,1):(D.setFromMatrixColumn(ue,0),D.crossVectors(n.object.up,D)),D.multiplyScalar(W),u.add(D)}}(),I=function(){const D=new U;return function(W,ue){const de=n.domElement;if(n.object.isPerspectiveCamera){const Te=n.object.position;D.copy(Te).sub(n.target);let me=D.length();me*=Math.tan(n.object.fov/2*Math.PI/180),V(2*W*me/de.clientHeight,n.object.matrix),O(2*ue*me/de.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(V(W*(n.object.right-n.object.left)/n.object.zoom/de.clientWidth,n.object.matrix),O(ue*(n.object.top-n.object.bottom)/n.object.zoom/de.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function N(D){n.object.isPerspectiveCamera?c/=D:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*D)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function z(D){n.object.isPerspectiveCamera?c*=D:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/D)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function $(D){f.set(D.clientX,D.clientY)}function X(D){S.set(D.clientX,D.clientY)}function G(D){_.set(D.clientX,D.clientY)}function ee(D){d.set(D.clientX,D.clientY),g.subVectors(d,f).multiplyScalar(n.rotateSpeed);const Q=n.domElement;v(2*Math.PI*g.x/Q.clientHeight),b(2*Math.PI*g.y/Q.clientHeight),f.copy(d),n.update()}function C(D){y.set(D.clientX,D.clientY),x.subVectors(y,S),x.y>0?N(R()):x.y<0&&z(R()),S.copy(y),n.update()}function ge(D){m.set(D.clientX,D.clientY),p.subVectors(m,_).multiplyScalar(n.panSpeed),I(p.x,p.y),_.copy(m),n.update()}function re(D){D.deltaY<0?z(R()):D.deltaY>0&&N(R()),n.update()}function Y(D){let Q=!1;switch(D.code){case n.keys.UP:D.ctrlKey||D.metaKey||D.shiftKey?b(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,n.keyPanSpeed),Q=!0;break;case n.keys.BOTTOM:D.ctrlKey||D.metaKey||D.shiftKey?b(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,-n.keyPanSpeed),Q=!0;break;case n.keys.LEFT:D.ctrlKey||D.metaKey||D.shiftKey?v(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(n.keyPanSpeed,0),Q=!0;break;case n.keys.RIGHT:D.ctrlKey||D.metaKey||D.shiftKey?v(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(-n.keyPanSpeed,0),Q=!0;break}Q&&(D.preventDefault(),n.update())}function J(){if(M.length===1)f.set(M[0].pageX,M[0].pageY);else{const D=.5*(M[0].pageX+M[1].pageX),Q=.5*(M[0].pageY+M[1].pageY);f.set(D,Q)}}function se(){if(M.length===1)_.set(M[0].pageX,M[0].pageY);else{const D=.5*(M[0].pageX+M[1].pageX),Q=.5*(M[0].pageY+M[1].pageY);_.set(D,Q)}}function ce(){const D=M[0].pageX-M[1].pageX,Q=M[0].pageY-M[1].pageY,W=Math.sqrt(D*D+Q*Q);S.set(0,W)}function B(){n.enableZoom&&ce(),n.enablePan&&se()}function Ae(){n.enableZoom&&ce(),n.enableRotate&&J()}function Me(D){if(M.length==1)d.set(D.pageX,D.pageY);else{const W=le(D),ue=.5*(D.pageX+W.x),de=.5*(D.pageY+W.y);d.set(ue,de)}g.subVectors(d,f).multiplyScalar(n.rotateSpeed);const Q=n.domElement;v(2*Math.PI*g.x/Q.clientHeight),b(2*Math.PI*g.y/Q.clientHeight),f.copy(d)}function ae(D){if(M.length===1)m.set(D.pageX,D.pageY);else{const Q=le(D),W=.5*(D.pageX+Q.x),ue=.5*(D.pageY+Q.y);m.set(W,ue)}p.subVectors(m,_).multiplyScalar(n.panSpeed),I(p.x,p.y),_.copy(m)}function Se(D){const Q=le(D),W=D.pageX-Q.x,ue=D.pageY-Q.y,de=Math.sqrt(W*W+ue*ue);y.set(0,de),x.set(0,Math.pow(y.y/S.y,n.zoomSpeed)),N(x.y),S.copy(y)}function Be(D){n.enableZoom&&Se(D),n.enablePan&&ae(D)}function oe(D){n.enableZoom&&Se(D),n.enableRotate&&Me(D)}function Ee(D){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(D.pointerId),n.domElement.addEventListener("pointermove",Ke),n.domElement.addEventListener("pointerup",$e)),K(D),D.pointerType==="touch"?Ze(D):H(D))}function Ke(D){n.enabled!==!1&&(D.pointerType==="touch"?L(D):tt(D))}function $e(D){ne(D),M.length===0&&(n.domElement.releasePointerCapture(D.pointerId),n.domElement.removeEventListener("pointermove",Ke),n.domElement.removeEventListener("pointerup",$e)),n.dispatchEvent(zf),r=i.NONE}function H(D){let Q;switch(D.button){case 0:Q=n.mouseButtons.LEFT;break;case 1:Q=n.mouseButtons.MIDDLE;break;case 2:Q=n.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case Jr.DOLLY:if(n.enableZoom===!1)return;X(D),r=i.DOLLY;break;case Jr.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enablePan===!1)return;G(D),r=i.PAN}else{if(n.enableRotate===!1)return;$(D),r=i.ROTATE}break;case Jr.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enableRotate===!1)return;$(D),r=i.ROTATE}else{if(n.enablePan===!1)return;G(D),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(uc)}function tt(D){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;ee(D);break;case i.DOLLY:if(n.enableZoom===!1)return;C(D);break;case i.PAN:if(n.enablePan===!1)return;ge(D);break}}function Ve(D){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(D.preventDefault(),n.dispatchEvent(uc),re(D),n.dispatchEvent(zf))}function st(D){n.enabled===!1||n.enablePan===!1||Y(D)}function Ze(D){switch(te(D),M.length){case 1:switch(n.touches.ONE){case Qr.ROTATE:if(n.enableRotate===!1)return;J(),r=i.TOUCH_ROTATE;break;case Qr.PAN:if(n.enablePan===!1)return;se(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Qr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;B(),r=i.TOUCH_DOLLY_PAN;break;case Qr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ae(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(uc)}function L(D){switch(te(D),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Me(D),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ae(D),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Be(D),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;oe(D),n.update();break;default:r=i.NONE}}function w(D){n.enabled!==!1&&D.preventDefault()}function K(D){M.push(D)}function ne(D){delete E[D.pointerId];for(let Q=0;Q<M.length;Q++)if(M[Q].pointerId==D.pointerId){M.splice(Q,1);return}}function te(D){let Q=E[D.pointerId];Q===void 0&&(Q=new He,E[D.pointerId]=Q),Q.set(D.pageX,D.pageY)}function le(D){const Q=D.pointerId===M[0].pointerId?M[1]:M[0];return E[Q.pointerId]}n.domElement.addEventListener("contextmenu",w),n.domElement.addEventListener("pointerdown",Ee),n.domElement.addEventListener("pointercancel",$e),n.domElement.addEventListener("wheel",Ve,{passive:!1}),this.update()}}class HS{constructor(){this.experience=new Qn,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.canvas=this.experience.canvas,this.createPerspectiveCamera(),this.createOrthograpicCamera(),this.setOrbitControls()}createPerspectiveCamera(){this.perspectiveCamera=new pn(35,this.sizes.aspect,.1,1e3),this.scene.add(this.perspectiveCamera),this.perspectiveCamera.position.x=29,this.perspectiveCamera.position.y=14,this.perspectiveCamera.position.z=12}createOrthograpicCamera(){this.orthographicCamera=new vl(-this.sizes.aspect*this.sizes.frustrum/2,this.sizes.aspect*this.sizes.frustrum/2,this.sizes.frustrum/2,-this.sizes.frustrum/2,-50,50),this.orthographicCamera.position.y=6.3,this.orthographicCamera.position.z=9,this.orthographicCamera.rotation.x=-Math.PI/6,this.scene.add(this.orthographicCamera)}setOrbitControls(){this.controls=new VS(this.perspectiveCamera,this.canvas),this.controls.enableDamping=!0,this.controls.enableZoom=!1}resize(){this.perspectiveCamera.aspect=this.sizes.aspect,this.perspectiveCamera.updateProjectionMatrix(),this.orthographicCamera.left=-this.sizes.aspect*this.sizes.frustrum/2,this.orthographicCamera.right=this.sizes.aspect*this.sizes.frustrum/2,this.orthographicCamera.top=this.sizes.frustrum/2,this.orthographicCamera.bottom=-this.sizes.frustrum/2,this.orthographicCamera.updateProjectionMatrix()}update(){this.controls.update()}}class GS extends qr{constructor(){super(),this.language="german",this.toggleButton=document.querySelector(".toggle-button"),this.toggleCircle=document.querySelector(".toggle-circle"),this.englishText=document.querySelectorAll(".en"),this.germanText=document.querySelectorAll(".de"),this.setEventListeners(),this.init()}init(){this.toggleLanguage(this.englishText,!1)}setEventListeners(){this.toggleButton.addEventListener("click",()=>{this.toggleCircle.classList.toggle("slide"),this.language=this.language=="english"?"german":"english",this.toggleLanguage(this.englishText,this.language=="english"),this.toggleLanguage(this.germanText,this.language=="german")})}toggleLanguage(e,t){for(var n=0,i=e.length;n<i;n++)e[n].style.display=t?"block":"none"}}class WS{constructor(){this.experience=new Qn,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.canvas=this.experience.canvas,this.camera=this.experience.camera,this.setRenderer()}setRenderer(){this.renderer=new Zd({canvas:this.canvas,antialias:!0}),this.renderer.physicallyCorrectLights=!0,this.renderer.outputEncoding=ct,this.renderer.toneMapping=Ad,this.renderer.toneMappingExposure=.8,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Sd,this.renderer.setSize(this.sizes.width,this.sizes.height),this.renderer.setPixelRatio(this.sizes.pixelRatio)}resize(){this.renderer.setSize(this.sizes.width,this.sizes.height),this.renderer.setPixelRatio(this.sizes.pixelRatio)}update(){this.renderer.setViewport(0,0,this.sizes.width,this.sizes.height),this.renderer.render(this.scene,this.camera.orthographicCamera)}}function Li(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function gp(a,e){a.prototype=Object.create(e.prototype),a.prototype.constructor=a,a.__proto__=e}/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var kn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Js={duration:.5,overwrite:!1,delay:0},wu,rn,At,Kn=1e8,gt=1/Kn,Vc=Math.PI*2,XS=Vc/4,qS=0,_p=Math.sqrt,jS=Math.cos,YS=Math.sin,Wt=function(e){return typeof e=="string"},Et=function(e){return typeof e=="function"},zi=function(e){return typeof e=="number"},Tu=function(e){return typeof e>"u"},yi=function(e){return typeof e=="object"},yn=function(e){return e!==!1},Au=function(){return typeof window<"u"},La=function(e){return Et(e)||Wt(e)},xp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},sn=Array.isArray,Hc=/(?:-?\.?\d|\.)+/gi,vp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Cs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,hc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,yp=/[+-]=-?[.\d]+/,Mp=/[^,'"\[\]\s]+/gi,KS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,bt,Gn,Gc,Eu,zn={},rl={},Sp,bp=function(e){return(rl=jr(e,zn))&&bn},Cu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},sl=function(e,t){return!t&&console.warn(e)},wp=function(e,t){return e&&(zn[e]=t)&&rl&&(rl[e]=t)||zn},jo=function(){return 0},$S={suppressEvents:!0,isStart:!0,kill:!1},Xa={suppressEvents:!0,kill:!1},ZS={suppressEvents:!0},Lu={},ar=[],Wc={},Tp,In={},fc={},Bf=30,qa=[],Ru="",Pu=function(e){var t=e[0],n,i;if(yi(t)||Et(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=qa.length;i--&&!qa[i].targetTest(t););n=qa[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Kp(e[i],n)))||e.splice(i,1);return e},Ir=function(e){return e._gsap||Pu($n(e))[0]._gsap},Ap=function(e,t,n){return(n=e[t])&&Et(n)?e[t]():Tu(n)&&e.getAttribute&&e.getAttribute(t)||n},Mn=function(e,t){return(e=e.split(",")).forEach(t)||e},Rt=function(e){return Math.round(e*1e5)/1e5||0},jt=function(e){return Math.round(e*1e7)/1e7||0},Fs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},JS=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},ol=function(){var e=ar.length,t=ar.slice(0),n,i;for(Wc={},ar.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Ep=function(e,t,n,i){ar.length&&!rn&&ol(),e.render(t,n,i||rn&&t<0&&(e._initted||e._startAt)),ar.length&&!rn&&ol()},Cp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Mp).length<2?t:Wt(e)?e.trim():e},Lp=function(e){return e},ei=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},QS=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},jr=function(e,t){for(var n in t)e[n]=t[n];return e},Vf=function a(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=yi(t[n])?a(e[n]||(e[n]={}),t[n]):t[n]);return e},al=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Ro=function(e){var t=e.parent||bt,n=e.keyframes?QS(sn(e.keyframes)):ei;if(yn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},eb=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Rp=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e[i],o;if(r)for(o=t[r];s&&s[r]>o;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=s,t.parent=t._dp=e,t},wl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,s=t._next;r?r._next=s:e[n]===t&&(e[n]=s),s?s._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},ur=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Or=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},tb=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Xc=function(e,t,n,i){return e._startAt&&(rn?e._startAt.revert(Xa):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},nb=function a(e){return!e||e._ts&&a(e.parent)},Hf=function(e){return e._repeat?Qs(e._tTime,e=e.duration()+e._rDelay)*e:0},Qs=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},ll=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Tl=function(e){return e._end=jt(e._start+(e._tDur/Math.abs(e._ts||e._rts||gt)||0))},Al=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=jt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Tl(e),n._dirty||Or(n,e)),e},Pp=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=ll(e.rawTime(),t),(!t._dur||ia(0,t.totalDuration(),n)-t._tTime>gt)&&t.render(n,!0)),Or(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-gt}},mi=function(e,t,n,i){return t.parent&&ur(t),t._start=jt((zi(n)?n:n||e!==bt?Vn(e,n,t):e._time)+t._delay),t._end=jt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Rp(e,t,"_first","_last",e._sort?"_start":0),qc(t)||(e._recent=t),i||Pp(e,t),e._ts<0&&Al(e,e._tTime),e},Dp=function(e,t){return(zn.ScrollTrigger||Cu("scrollTrigger",t))&&zn.ScrollTrigger.create(t,e)},Ip=function(e,t,n,i,r){if(Iu(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!rn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Tp!==On.frame)return ar.push(e),e._lazy=[r,i],1},ib=function a(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||a(t))},qc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},rb=function(e,t,n,i){var r=e.ratio,s=t<0||!t&&(!e._start&&ib(e)&&!(!e._initted&&qc(e))||(e._ts<0||e._dp._ts<0)&&!qc(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=ia(0,e._tDur,t),u=Qs(l,o),e._yoyo&&u&1&&(s=1-s),u!==Qs(e._tTime,o)&&(r=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==r||rn||i||e._zTime===gt||!t&&e._zTime){if(!e._initted&&Ip(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?gt:0),n||(n=t&&!h),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=l,c=e._pt;c;)c.r(s,c.d),c=c._next;t<0&&Xc(e,t,n,!0),e._onUpdate&&!n&&Zn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Zn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===s&&(s&&ur(e,1),!n&&!rn&&(Zn(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},sb=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},eo=function(e,t,n,i){var r=e._repeat,s=jt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=s/e._dur),e._dur=s,e._tDur=r?r<0?1e10:jt(s*(r+1)+e._rDelay*r):s,o>0&&!i&&Al(e,e._tTime=e._tDur*o),e.parent&&Tl(e),n||Or(e.parent,e),e},Gf=function(e){return e instanceof xn?Or(e):eo(e,e._dur)},ob={_start:0,endTime:jo,totalDuration:jo},Vn=function a(e,t,n){var i=e.labels,r=e._recent||ob,s=e.duration()>=Kn?r.endTime(!1):e._dur,o,l,c;return Wt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=s),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(sn(n)?n[0]:n).totalDuration()),o>1?a(e,t.substr(0,o-1),n)+l:s+l)):t==null?s:+t},Po=function(e,t,n){var i=zi(t[1]),r=(i?2:1)+(e<2?0:1),s=t[r],o,l;if(i&&(s.duration=t[1]),s.parent=n,e){for(o=s,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=yn(l.vars.inherit)&&l.parent;s.immediateRender=yn(o.immediateRender),e<2?s.runBackwards=1:s.startAt=t[r-1]}return new Ot(t[0],s,t[r+1])},mr=function(e,t){return e||e===0?t(e):t},ia=function(e,t,n){return n<e?e:n>t?t:n},nn=function(e,t){return!Wt(e)||!(t=KS.exec(e))?"":t[1]},ab=function(e,t,n){return mr(n,function(i){return ia(e,t,i)})},jc=[].slice,Op=function(e,t){return e&&yi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&yi(e[0]))&&!e.nodeType&&e!==Gn},lb=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return Wt(i)&&!t||Op(i,1)?(r=n).push.apply(r,$n(i)):n.push(i)})||n},$n=function(e,t,n){return At&&!t&&At.selector?At.selector(e):Wt(e)&&!n&&(Gc||!to())?jc.call((t||Eu).querySelectorAll(e),0):sn(e)?lb(e,n):Op(e)?jc.call(e,0):e?[e]:[]},Yc=function(e){return e=$n(e)[0]||sl("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return $n(t,n.querySelectorAll?n:n===e?sl("Invalid scope")||Eu.createElement("div"):e)}},Np=function(e){return e.sort(function(){return .5-Math.random()})},Up=function(e){if(Et(e))return e;var t=yi(e)?e:{each:e},n=Nr(t.ease),i=t.from||0,r=parseFloat(t.base)||0,s={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,h=i;return Wt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(f,d,g){var _=(g||t).length,m=s[_],p,S,y,x,M,E,A,R,v;if(!m){if(v=t.grid==="auto"?0:(t.grid||[1,Kn])[1],!v){for(A=-Kn;A<(A=g[v++].getBoundingClientRect().left)&&v<_;);v--}for(m=s[_]=[],p=l?Math.min(v,_)*u-.5:i%v,S=v===Kn?0:l?_*h/v-.5:i/v|0,A=0,R=Kn,E=0;E<_;E++)y=E%v-p,x=S-(E/v|0),m[E]=M=c?Math.abs(c==="y"?x:y):_p(y*y+x*x),M>A&&(A=M),M<R&&(R=M);i==="random"&&Np(m),m.max=A-R,m.min=R,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(v>_?_-1:c?c==="y"?_/v:v:Math.max(v,_/v))||0)*(i==="edges"?-1:1),m.b=_<0?r-_:r,m.u=nn(t.amount||t.each)||0,n=n&&_<0?qp(n):n}return _=(m[f]-m.min)/m.max||0,jt(m.b+(n?n(_):_)*m.v)+m.u}},Kc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=jt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(zi(n)?0:nn(n))}},Fp=function(e,t){var n=sn(e),i,r;return!n&&yi(e)&&(i=n=e.radius||Kn,e.values?(e=$n(e.values),(r=!zi(e[0]))&&(i*=i)):e=Kc(e.increment)),mr(t,n?Et(e)?function(s){return r=e(s),Math.abs(r-s)<=i?r:s}:function(s){for(var o=parseFloat(r?s.x:s),l=parseFloat(r?s.y:0),c=Kn,u=0,h=e.length,f,d;h--;)r?(f=e[h].x-o,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-o),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:s,r||u===s||zi(s)?u:u+nn(s)}:Kc(e))},kp=function(e,t,n,i){return mr(sn(e)?!t:n===!0?!!(n=0):!i,function(){return sn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},cb=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,s){return s(r)},i)}},ub=function(e,t){return function(n){return e(parseFloat(n))+(t||nn(n))}},hb=function(e,t,n){return Bp(e,t,0,1,n)},zp=function(e,t,n){return mr(n,function(i){return e[~~t(i)]})},fb=function a(e,t,n){var i=t-e;return sn(e)?zp(e,a(0,e.length),t):mr(n,function(r){return(i+(r-e)%i)%i+e})},db=function a(e,t,n){var i=t-e,r=i*2;return sn(e)?zp(e,a(0,e.length-1),t):mr(n,function(s){return s=(r+(s-e)%r)%r||0,e+(s>i?r-s:s)})},Yo=function(e){for(var t=0,n="",i,r,s,o;~(i=e.indexOf("random(",t));)s=e.indexOf(")",i),o=e.charAt(i+7)==="[",r=e.substr(i+7,s-i-7).match(o?Mp:Hc),n+=e.substr(t,i-t)+kp(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),t=s+1;return n+e.substr(t,e.length-t)},Bp=function(e,t,n,i,r){var s=t-e,o=i-n;return mr(r,function(l){return n+((l-e)/s*o||0)})},pb=function a(e,t,n,i){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var s=Wt(e),o={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),s)e={p:e},t={p:t};else if(sn(e)&&!sn(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(a(e[c-1],e[c]));h--,r=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=t}else i||(e=jr(sn(e)?[]:{},e));if(!u){for(l in t)Du.call(o,e,l,"get",t[l]);r=function(g){return Uu(g,o)||(s?e.p:e)}}}return mr(n,r)},Wf=function(e,t,n){var i=e.labels,r=Kn,s,o,l;for(s in i)o=i[s]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=s,r=o);return l},Zn=function(e,t,n){var i=e.vars,r=i[t],s=At,o=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&ar.length&&ol(),o&&(At=o),u=l?r.apply(c,l):r.call(c),At=s,u},bo=function(e){return ur(e),e.scrollTrigger&&e.scrollTrigger.kill(!!rn),e.progress()<1&&Zn(e,"onInterrupt"),e},Ls,Vp=[],Hp=function(e){if(Au()&&e){e=!e.name&&e.default||e;var t=e.name,n=Et(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:jo,render:Uu,add:Du,kill:Rb,modifier:Lb,rawVars:0},s={targetTest:0,get:0,getSetter:Nu,aliases:{},register:0};if(to(),e!==i){if(In[t])return;ei(i,ei(al(e,r),s)),jr(i.prototype,jr(r,al(e,s))),In[i.prop=t]=i,e.targetTest&&(qa.push(i),Lu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}wp(t,i),e.register&&e.register(bn,i,Sn)}else e&&Vp.push(e)},pt=255,wo={aqua:[0,pt,pt],lime:[0,pt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,pt],navy:[0,0,128],white:[pt,pt,pt],olive:[128,128,0],yellow:[pt,pt,0],orange:[pt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[pt,0,0],pink:[pt,192,203],cyan:[0,pt,pt],transparent:[pt,pt,pt,0]},dc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*pt+.5|0},Gp=function(e,t,n){var i=e?zi(e)?[e>>16,e>>8&pt,e&pt]:0:wo.black,r,s,o,l,c,u,h,f,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),wo[e])i=wo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),s=e.charAt(2),o=e.charAt(3),e="#"+r+r+s+s+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&pt,i&pt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&pt,e&pt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Hc),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,s=u<=.5?u*(c+1):u+c-u*c,r=u*2-s,i.length>3&&(i[3]*=1),i[0]=dc(l+1/3,r,s),i[1]=dc(l,r,s),i[2]=dc(l-1/3,r,s);else if(~e.indexOf("="))return i=e.match(vp),n&&i.length<4&&(i[3]=1),i}else i=e.match(Hc)||wo.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/pt,s=i[1]/pt,o=i[2]/pt,h=Math.max(r,s,o),f=Math.min(r,s,o),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===r?(s-o)/d+(s<o?6:0):h===s?(o-r)/d+2:(r-s)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Wp=function(e){var t=[],n=[],i=-1;return e.split(lr).forEach(function(r){var s=r.match(Cs)||[];t.push.apply(t,s),n.push(i+=s.length+1)}),t.c=n,t},Xf=function(e,t,n){var i="",r=(e+i).match(lr),s=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!r)return e;if(r=r.map(function(f){return(f=Gp(f,t,1))&&s+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Wp(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(lr,"1").split(Cs),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||s+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(lr),h=c.length-1;o<h;o++)i+=c[o]+r[o];return i+c[h]},lr=function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in wo)a+="|"+e+"\\b";return new RegExp(a+")","gi")}(),mb=/hsl[a]?\(/,Xp=function(e){var t=e.join(" "),n;if(lr.lastIndex=0,lr.test(t))return n=mb.test(t),e[1]=Xf(e[1],n),e[0]=Xf(e[0],n,Wp(e[1])),!0},Ko,On=function(){var a=Date.now,e=500,t=33,n=a(),i=n,r=1e3/240,s=r,o=[],l,c,u,h,f,d,g=function _(m){var p=a()-i,S=m===!0,y,x,M,E;if(p>e&&(n+=p-t),i+=p,M=i-n,y=M-s,(y>0||S)&&(E=++h.frame,f=M-h.time*1e3,h.time=M=M/1e3,s+=y+(y>=r?4:r-y),x=1),S||(l=c(_)),x)for(d=0;d<o.length;d++)o[d](M,f,E,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Sp&&(!Gc&&Au()&&(Gn=Gc=window,Eu=Gn.document||{},zn.gsap=bn,(Gn.gsapVersions||(Gn.gsapVersions=[])).push(bn.version),bp(rl||Gn.GreenSockGlobals||!Gn.gsap&&Gn||{}),u=Gn.requestAnimationFrame,Vp.forEach(Hp)),l&&h.sleep(),c=u||function(m){return setTimeout(m,s-h.time*1e3+1|0)},Ko=1,g(2))},sleep:function(){(u?Gn.cancelAnimationFrame:clearTimeout)(l),Ko=0,c=jo},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){r=1e3/(m||240),s=h.time*1e3+r},add:function(m,p,S){var y=p?function(x,M,E,A){m(x,M,E,A),h.remove(y)}:m;return h.remove(m),o[S?"unshift":"push"](y),to(),y},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&d>=p&&d--},_listeners:o},h}(),to=function(){return!Ko&&On.wake()},rt={},gb=/^[\d.\-M][\d.\-,\s]/,_b=/["']/g,xb=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,s=n.length,o,l,c;r<s;r++)l=n[r],o=r!==s-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(_b,"").trim():+c,i=l.substr(o+1).trim();return t},vb=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},yb=function(e){var t=(e+"").split("("),n=rt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[xb(t[1])]:vb(e).split(",").map(Cp)):rt._CE&&gb.test(e)?rt._CE("",e):n},qp=function(e){return function(t){return 1-e(1-t)}},jp=function a(e,t){for(var n=e._first,i;n;)n instanceof xn?a(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?a(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Nr=function(e,t){return e&&(Et(e)?e:rt[e]||yb(e))||t},Zr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},s;return Mn(e,function(o){rt[o]=zn[o]=r,rt[s=o.toLowerCase()]=n;for(var l in r)rt[s+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=rt[o+"."+l]=r[l]}),r},Yp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},pc=function a(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),s=r/Vc*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*YS((u-s)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Yp(o);return r=Vc/r,l.config=function(c,u){return a(e,c,u)},l},mc=function a(e,t){t===void 0&&(t=1.70158);var n=function(s){return s?--s*s*((t+1)*s+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:Yp(n);return i.config=function(r){return a(e,r)},i};Mn("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,e){var t=e<5?e+1:e;Zr(a+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});rt.Linear.easeNone=rt.none=rt.Linear.easeIn;Zr("Elastic",pc("in"),pc("out"),pc());(function(a,e){var t=1/e,n=2*t,i=2.5*t,r=function(o){return o<t?a*o*o:o<n?a*Math.pow(o-1.5/e,2)+.75:o<i?a*(o-=2.25/e)*o+.9375:a*Math.pow(o-2.625/e,2)+.984375};Zr("Bounce",function(s){return 1-r(1-s)},r)})(7.5625,2.75);Zr("Expo",function(a){return a?Math.pow(2,10*(a-1)):0});Zr("Circ",function(a){return-(_p(1-a*a)-1)});Zr("Sine",function(a){return a===1?1:-jS(a*XS)+1});Zr("Back",mc("in"),mc("out"),mc());rt.SteppedEase=rt.steps=zn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,s=1-gt;return function(o){return((i*ia(0,s,o)|0)+r)*n}}};Js.ease=rt["quad.out"];Mn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return Ru+=a+","+a+"Params,"});var Kp=function(e,t){this.id=qS++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Ap,this.set=t?t.getSetter:Nu},$o=function(){function a(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,eo(this,+t.duration,1,1),this.data=t.data,At&&(this._ctx=At,At.data.push(this)),Ko||On.wake()}var e=a.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,eo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(to(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Al(this,n),!r._dp||r.parent||Pp(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&mi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===gt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Ep(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Hf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Hf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Qs(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-gt?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?ll(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-gt?0:this._rts,this.totalTime(ia(-Math.abs(this._delay),this._tDur,i),!0),Tl(this),tb(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(to(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==gt&&(this._tTime-=gt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&mi(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(yn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ll(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=ZS);var i=rn;return rn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),rn=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1/0:this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Gf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Gf(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Vn(this,n),yn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,yn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-gt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-gt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-gt)},e.eventCallback=function(n,i,r){var s=this.vars;return arguments.length>1?(i?(s[n]=i,r&&(s[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete s[n],this):s[n]},e.then=function(n){var i=this;return new Promise(function(r){var s=Et(n)?n:Lp,o=function(){var c=i.then;i.then=null,Et(s)&&(s=s(i))&&(s.then||s===i)&&(i.then=c),r(s),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){bo(this)},a}();ei($o.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-gt,_prom:0,_ps:!1,_rts:1});var xn=function(a){gp(e,a);function e(n,i){var r;return n===void 0&&(n={}),r=a.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=yn(n.sortChildren),bt&&mi(n.parent||bt,Li(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Dp(Li(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,s){return Po(0,arguments,this),this},t.from=function(i,r,s){return Po(1,arguments,this),this},t.fromTo=function(i,r,s,o){return Po(2,arguments,this),this},t.set=function(i,r,s){return r.duration=0,r.parent=this,Ro(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Ot(i,r,Vn(this,s),1),this},t.call=function(i,r,s){return mi(this,Ot.delayedCall(0,i,r),s)},t.staggerTo=function(i,r,s,o,l,c,u){return s.duration=r,s.stagger=s.stagger||o,s.onComplete=c,s.onCompleteParams=u,s.parent=this,new Ot(i,s,Vn(this,l)),this},t.staggerFrom=function(i,r,s,o,l,c,u){return s.runBackwards=1,Ro(s).immediateRender=yn(s.immediateRender),this.staggerTo(i,r,s,o,l,c,u)},t.staggerFromTo=function(i,r,s,o,l,c,u,h){return o.startAt=s,Ro(o).immediateRender=yn(o.immediateRender),this.staggerTo(i,r,o,l,c,u,h)},t.render=function(i,r,s){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:jt(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,_,m,p,S,y,x,M,E,A;if(this!==bt&&u>l&&i>=0&&(u=l),u!==this._tTime||s||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,x=this._start,y=this._ts,p=!y,h&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,s);if(f=jt(u%m),u===l?(_=this._repeat,f=c):(_=~~(u/m),_&&_===u/m&&(f=c,_--),f>c&&(f=c)),M=Qs(this._tTime,m),!o&&this._tTime&&M!==_&&this._tTime-M*m-this._dur<=0&&(M=_),E&&_&1&&(f=c-f,A=1),_!==M&&!this._lock){var R=E&&M&1,v=R===(E&&_&1);if(_<M&&(R=!R),o=R?0:u%c?c:u,this._lock=1,this.render(o||(A?0:jt(_*m)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&Zn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,o=R?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;jp(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=sb(this,jt(o),jt(f)),S&&(u-=f-(f=S._start))),this._tTime=u,this._time=f,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&f&&!r&&!_&&(Zn(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,r,s);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,s),f!==this._time||!this._ts&&!p){S=0,g&&(u+=this._zTime=-gt);break}}d=g}else{d=this._last;for(var b=i<0?i:f;d;){if(g=d._prev,(d._act||b<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,r,s);if(d.render(d._ts>0?(b-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(b-d._start)*d._ts,r,s||rn&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!p){S=0,g&&(u+=this._zTime=b?-gt:gt);break}}d=g}}if(S&&!r&&(this.pause(),S.render(f>=o?0:-gt)._zTime=f>=o?1:-1,this._ts))return this._start=x,Tl(this),this.render(i,r,s);this._onUpdate&&!r&&Zn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(x===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&ur(this,1),!r&&!(i<0&&!o)&&(u||o||!l)&&(Zn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var s=this;if(zi(r)||(r=Vn(this,r,i)),!(i instanceof $o)){if(sn(i))return i.forEach(function(o){return s.add(o,r)}),this;if(Wt(i))return this.addLabel(i,r);if(Et(i))i=Ot.delayedCall(0,i);else return this}return this!==i?mi(this,i,r):this},t.getChildren=function(i,r,s,o){i===void 0&&(i=!0),r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=-Kn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Ot?r&&l.push(c):(s&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,s)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),s=r.length;s--;)if(r[s].vars.id===i)return r[s]},t.remove=function(i){return Wt(i)?this.removeLabel(i):Et(i)?this.killTweensOf(i):(wl(this,i),i===this._recent&&(this._recent=this._last),Or(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=jt(On.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),a.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=Vn(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,s){var o=Ot.delayedCall(0,r||jo,s);return o.data="isPause",this._hasPause=1,mi(this,o,Vn(this,i))},t.removePause=function(i){var r=this._first;for(i=Vn(this,i);r;)r._start===i&&r.data==="isPause"&&ur(r),r=r._next},t.killTweensOf=function(i,r,s){for(var o=this.getTweensOf(i,s),l=o.length;l--;)tr!==o[l]&&o[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var s=[],o=$n(i),l=this._first,c=zi(r),u;l;)l instanceof Ot?JS(l._targets,o)&&(c?(!tr||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&s.push(l):(u=l.getTweensOf(o,r)).length&&s.push.apply(s,u),l=l._next;return s},t.tweenTo=function(i,r){r=r||{};var s=this,o=Vn(s,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,g=Ot.to(s,ei({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:s._time))/s.timeScale())||gt,onStart:function(){if(s.pause(),!d){var m=r.duration||Math.abs((o-(c&&"time"in c?c.time:s._time))/s.timeScale());g._dur!==m&&eo(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},r));return f?g.render(0):g},t.tweenFromTo=function(i,r,s){return this.tweenTo(r,ei({startAt:{time:Vn(this,i)}},s))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Wf(this,Vn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Wf(this,Vn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+gt)},t.shiftChildren=function(i,r,s){s===void 0&&(s=0);for(var o=this._first,l=this.labels,c;o;)o._start>=s&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=s&&(l[c]+=i);return Or(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return a.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,s;r;)s=r._next,this.remove(r),r=s;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Or(this)},t.totalDuration=function(i){var r=0,s=this,o=s._last,l=Kn,c,u,h;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-i:i));if(s._dirty){for(h=s.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&s._sort&&o._ts&&!s._lock?(s._lock=1,mi(s,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(r-=u,(!h&&!s._dp||h&&h.smoothChildTiming)&&(s._start+=u/s._ts,s._time-=u,s._tTime-=u),s.shiftChildren(-u,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;eo(s,s===bt&&s._time>r?s._time:r,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(i){if(bt._ts&&(Ep(bt,ll(i,bt)),Tp=On.frame),On.frame>=Bf){Bf+=kn.autoSleep||120;var r=bt._first;if((!r||!r._ts)&&kn.autoSleep&&On._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||On.sleep()}}},e}($o);ei(xn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Mb=function(e,t,n,i,r,s,o){var l=new Sn(this._pt,e,t,0,1,tm,null,r),c=0,u=0,h,f,d,g,_,m,p,S;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Yo(i)),s&&(S=[n,i],s(S,e,t),n=S[0],i=S[1]),f=n.match(hc)||[];h=hc.exec(i);)g=h[0],_=i.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?Fs(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=hc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(yp.test(i)||p)&&(l.e=0),this._pt=l,l},Du=function(e,t,n,i,r,s,o,l,c,u){Et(i)&&(i=i(r||0,e,s));var h=e[t],f=n!=="get"?n:Et(h)?c?e[t.indexOf("set")||!Et(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=Et(h)?c?Ab:Qp:Ou,g;if(Wt(i)&&(~i.indexOf("random(")&&(i=Yo(i)),i.charAt(1)==="="&&(g=Fs(f,i)+(nn(f)||0),(g||g===0)&&(i=g))),!u||f!==i||$c)return!isNaN(f*i)&&i!==""?(g=new Sn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?Cb:em,0,d),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!h&&!(t in e)&&Cu(t,i),Mb.call(this,e,t,f,i,d,l||kn.stringFilter,c))},Sb=function(e,t,n,i,r){if(Et(e)&&(e=Do(e,r,t,n,i)),!yi(e)||e.style&&e.nodeType||sn(e)||xp(e))return Wt(e)?Do(e,r,t,n,i):e;var s={},o;for(o in e)s[o]=Do(e[o],r,t,n,i);return s},$p=function(e,t,n,i,r,s){var o,l,c,u;if(In[e]&&(o=new In[e]).init(r,o.rawVars?t[e]:Sb(t[e],i,r,s,n),n,i,s)!==!1&&(n._pt=l=new Sn(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==Ls))for(c=n._ptLookup[n._targets.indexOf(r)],u=o._props.length;u--;)c[o._props[u]]=l;return o},tr,$c,Iu=function a(e,t,n){var i=e.vars,r=i.ease,s=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,h=i.callbackScope,f=i.runBackwards,d=i.yoyoEase,g=i.keyframes,_=i.autoRevert,m=e._dur,p=e._startAt,S=e._targets,y=e.parent,x=y&&y.data==="nested"?y.vars.targets:S,M=e._overwrite==="auto"&&!wu,E=e.timeline,A,R,v,b,V,O,I,N,z,$,X,G,ee;if(E&&(!g||!r)&&(r="none"),e._ease=Nr(r,Js.ease),e._yEase=d?qp(Nr(d===!0?r:d,Js.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!E&&!!i.runBackwards,!E||g&&!i.stagger){if(N=S[0]?Ir(S[0]).harness:0,G=N&&i[N.prop],A=al(i,Lu),p&&(p._zTime<0&&p.progress(1),t<0&&f&&o&&!_?p.render(-1,!0):p.revert(f&&m?Xa:$S),p._lazy=0),s){if(ur(e._startAt=Ot.set(S,ei({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:!p&&yn(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(rn||!o&&!_)&&e._startAt.revert(Xa),o&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&m&&!p){if(t&&(o=!1),v=ei({overwrite:!1,data:"isFromStart",lazy:o&&!p&&yn(l),immediateRender:o,stagger:0,parent:y},A),G&&(v[N.prop]=G),ur(e._startAt=Ot.set(S,v)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(rn?e._startAt.revert(Xa):e._startAt.render(-1,!0)),e._zTime=t,!o)a(e._startAt,gt,gt);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&yn(l)||l&&!m,R=0;R<S.length;R++){if(V=S[R],I=V._gsap||Pu(S)[R]._gsap,e._ptLookup[R]=$={},Wc[I.id]&&ar.length&&ol(),X=x===S?R:x.indexOf(V),N&&(z=new N).init(V,G||A,e,X,x)!==!1&&(e._pt=b=new Sn(e._pt,V,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(C){$[C]=b}),z.priority&&(O=1)),!N||G)for(v in A)In[v]&&(z=$p(v,A,e,X,V,x))?z.priority&&(O=1):$[v]=b=Du.call(e,V,v,"get",A[v],X,x,0,i.stringFilter);e._op&&e._op[R]&&e.kill(V,e._op[R]),M&&e._pt&&(tr=e,bt.killTweensOf(V,$,e.globalTime(t)),ee=!e.parent,tr=0),e._pt&&l&&(Wc[I.id]=1)}O&&nm(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!ee,g&&t<=0&&E.render(Kn,!0,!0)},bb=function(e,t,n,i,r,s,o){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,h,f;if(!l)for(l=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(c=h[f][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return $c=1,e.vars[t]="+=0",Iu(e,o),$c=0,1;l.push(c)}for(f=l.length;f--;)u=l[f],c=u._pt||u,c.s=(i||i===0)&&!r?i:c.s+(i||0)+s*c.c,c.c=n-c.s,u.e&&(u.e=Rt(n)+nn(u.e)),u.b&&(u.b=c.s+nn(u.b))},wb=function(e,t){var n=e[0]?Ir(e[0]).harness:0,i=n&&n.aliases,r,s,o,l;if(!i)return t;r=jr({},t);for(s in i)if(s in r)for(l=i[s].split(","),o=l.length;o--;)r[l[o]]=r[s];return r},Tb=function(e,t,n,i){var r=t.ease||i||"power1.inOut",s,o;if(sn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(s in t)o=n[s]||(n[s]=[]),s==="ease"||o.push({t:parseFloat(e),v:t[s],e:r})},Do=function(e,t,n,i,r){return Et(e)?e.call(t,n,i,r):Wt(e)&&~e.indexOf("random(")?Yo(e):e},Zp=Ru+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Jp={};Mn(Zp+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return Jp[a]=1});var Ot=function(a){gp(e,a);function e(n,i,r,s){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=a.call(this,s?i:Ro(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,S=i.parent||bt,y=(sn(n)||xp(n)?zi(n[0]):"length"in i)?[n]:$n(n),x,M,E,A,R,v,b,V;if(o._targets=y.length?Pu(y):sl("GSAP target "+n+" not found. https://greensock.com",!kn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,g||f||La(c)||La(u)){if(i=o.vars,x=o.timeline=new xn({data:"nested",defaults:_||{},targets:S&&S.data==="nested"?S.vars.targets:y}),x.kill(),x.parent=x._dp=Li(o),x._start=0,f||La(c)||La(u)){if(A=y.length,b=f&&Up(f),yi(f))for(R in f)~Zp.indexOf(R)&&(V||(V={}),V[R]=f[R]);for(M=0;M<A;M++)E=al(i,Jp),E.stagger=0,p&&(E.yoyoEase=p),V&&jr(E,V),v=y[M],E.duration=+Do(c,Li(o),M,v,y),E.delay=(+Do(u,Li(o),M,v,y)||0)-o._delay,!f&&A===1&&E.delay&&(o._delay=u=E.delay,o._start+=u,E.delay=0),x.to(v,E,b?b(M,v,y):0),x._ease=rt.none;x.duration()?c=u=0:o.timeline=0}else if(g){Ro(ei(x.vars.defaults,{ease:"none"})),x._ease=Nr(g.ease||i.ease||"none");var O=0,I,N,z;if(sn(g))g.forEach(function($){return x.to(y,$,">")}),x.duration();else{E={};for(R in g)R==="ease"||R==="easeEach"||Tb(R,g[R],E,g.easeEach);for(R in E)for(I=E[R].sort(function($,X){return $.t-X.t}),O=0,M=0;M<I.length;M++)N=I[M],z={ease:N.e,duration:(N.t-(M?I[M-1].t:0))/100*c},z[R]=N.v,x.to(y,z,O),O+=z.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||o.duration(c=x.duration())}else o.timeline=0;return d===!0&&!wu&&(tr=Li(o),bt.killTweensOf(y),tr=0),mi(S,Li(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!g&&o._start===jt(S._time)&&yn(h)&&nb(Li(o))&&S.data!=="nested")&&(o._tTime=-gt,o.render(Math.max(0,-u)||0)),m&&Dp(Li(o),m),o}var t=e.prototype;return t.render=function(i,r,s){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-gt&&!u?l:i<gt?0:i,f,d,g,_,m,p,S,y,x;if(!c)rb(this,i,r,s);else if(h!==this._tTime||!i||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,y=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,r,s);if(f=jt(h%_),h===l?(g=this._repeat,f=c):(g=~~(h/_),g&&g===h/_&&(f=c,g--),f>c&&(f=c)),p=this._yoyo&&g&1,p&&(x=this._yEase,f=c-f),m=Qs(this._tTime,_),f===o&&!s&&this._initted)return this._tTime=h,this;g!==m&&(y&&this._yEase&&jp(y,p),this.vars.repeatRefresh&&!p&&!this._lock&&(this._lock=s=1,this.render(jt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Ip(this,u?i:f,s,r,h))return this._tTime=0,this;if(o!==this._time)return this;if(c!==this._dur)return this.render(i,r,s)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(x||this._ease)(f/c),this._from&&(this.ratio=S=1-S),f&&!o&&!r&&!g&&(Zn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;y&&y.render(i<0?i:!f&&p?-gt:y._dur*y._ease(f/this._dur),r,s)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&Xc(this,i,r,s),Zn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!r&&this.parent&&Zn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Xc(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&ur(this,1),!r&&!(u&&!o)&&(h||o||p)&&(Zn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),a.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,s,o){Ko||On.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Iu(this,l),c=this._ease(l/this._dur),bb(this,i,r,s,o,c,l)?this.resetTo(i,r,s,o):(Al(this,0),this.parent||Rp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?bo(this):this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,tr&&tr.vars.overwrite!==!0)._first||bo(this),this.parent&&s!==this.timeline.totalDuration()&&eo(this,this._dur*this.timeline._tDur/s,0,1),this}var o=this._targets,l=i?$n(i):o,c=this._ptLookup,u=this._pt,h,f,d,g,_,m,p;if((!r||r==="all")&&eb(o,l))return r==="all"&&(this._pt=0),bo(this);for(h=this._op=this._op||[],r!=="all"&&(Wt(r)&&(_={},Mn(r,function(S){return _[S]=1}),r=_),r=wb(o,r)),p=o.length;p--;)if(~l.indexOf(o[p])){f=c[p],r==="all"?(h[p]=r,g=f,d={}):(d=h[p]=h[p]||{},g=r);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&wl(this,m,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&bo(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return Po(1,arguments)},e.delayedCall=function(i,r,s,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:o})},e.fromTo=function(i,r,s){return Po(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,s){return bt.killTweensOf(i,r,s)},e}($o);ei(Ot.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Mn("staggerTo,staggerFrom,staggerFromTo",function(a){Ot[a]=function(){var e=new xn,t=jc.call(arguments,0);return t.splice(a==="staggerFromTo"?5:4,0,0),e[a].apply(e,t)}});var Ou=function(e,t,n){return e[t]=n},Qp=function(e,t,n){return e[t](n)},Ab=function(e,t,n,i){return e[t](i.fp,n)},Eb=function(e,t,n){return e.setAttribute(t,n)},Nu=function(e,t){return Et(e[t])?Qp:Tu(e[t])&&e.setAttribute?Eb:Ou},em=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Cb=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},tm=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Uu=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Lb=function(e,t,n,i){for(var r=this._pt,s;r;)s=r._next,r.p===i&&r.modifier(e,t,n),r=s},Rb=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?wl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Pb=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},nm=function(e){for(var t=e._pt,n,i,r,s;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:s)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:s=t,t=n}e._pt=r},Sn=function(){function a(t,n,i,r,s,o,l,c,u){this.t=n,this.s=r,this.c=s,this.p=i,this.r=o||em,this.d=l||this,this.set=c||Ou,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=a.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=Pb,this.m=n,this.mt=r,this.tween=i},a}();Mn(Ru+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(a){return Lu[a]=1});zn.TweenMax=zn.TweenLite=Ot;zn.TimelineLite=zn.TimelineMax=xn;bt=new xn({sortChildren:!1,defaults:Js,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});kn.stringFilter=Xp;var Ur=[],ja={},Db=[],qf=0,Ib=0,gc=function(e){return(ja[e]||Db).map(function(t){return t()})},Zc=function(){var e=Date.now(),t=[];e-qf>2&&(gc("matchMediaInit"),Ur.forEach(function(n){var i=n.queries,r=n.conditions,s,o,l,c;for(o in i)s=Gn.matchMedia(i[o]).matches,s&&(l=1),s!==r[o]&&(r[o]=s,c=1);c&&(n.revert(),l&&t.push(n))}),gc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),qf=e,gc("matchMedia"))},im=function(){function a(t,n){this.selector=n&&Yc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Ib++,t&&this.add(t)}var e=a.prototype;return e.add=function(n,i,r){Et(n)&&(r=i,i=n,n=Et);var s=this,o=function(){var c=At,u=s.selector,h;return c&&c!==s&&c.data.push(s),r&&(s.selector=Yc(r)),At=s,h=i.apply(s,arguments),Et(h)&&s._r.push(h),At=c,s.selector=u,s.isReverted=!1,h};return s.last=o,n===Et?o(s):n?s[n]=o:o},e.ignore=function(n){var i=At;At=null,n(this),At=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof a?n.push.apply(n,i.getTweens()):i instanceof Ot&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n){var s=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return s.splice(s.indexOf(c),1)}))}),s.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1/0}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof Ot)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i)for(var o=Ur.length;o--;)Ur[o].id===this.id&&Ur.splice(o,1)},e.revert=function(n){this.kill(n||{})},a}(),Ob=function(){function a(t){this.contexts=[],this.scope=t}var e=a.prototype;return e.add=function(n,i,r){yi(n)||(n={matches:n});var s=new im(0,r||this.scope),o=s.conditions={},l,c,u;At&&!s.selector&&(s.selector=At.selector),this.contexts.push(s),i=s.add("onMatch",i),s.queries=n;for(c in n)c==="all"?u=1:(l=Gn.matchMedia(n[c]),l&&(Ur.indexOf(s)<0&&Ur.push(s),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Zc):l.addEventListener("change",Zc)));return u&&i(s),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},a}(),cl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Hp(i)})},timeline:function(e){return new xn(e)},getTweensOf:function(e,t){return bt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Wt(e)&&(e=$n(e)[0]);var r=Ir(e||{}).get,s=n?Lp:Cp;return n==="native"&&(n=""),e&&(t?s((In[t]&&In[t].get||r)(e,t,n,i)):function(o,l,c){return s((In[o]&&In[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=$n(e),e.length>1){var i=e.map(function(u){return bn.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var s=In[t],o=Ir(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=s?function(u){var h=new s;Ls._pt=0,h.init(e,n?u+n:u,Ls,0,[e]),h.render(1,h),Ls._pt&&Uu(1,Ls)}:o.set(e,l);return s?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,r=bn.to(e,jr((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),s=function(l,c,u){return r.resetTo(t,l,c,u)};return s.tween=r,s},isTweening:function(e){return bt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Nr(e.ease,Js.ease)),Vf(Js,e||{})},config:function(e){return Vf(kn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,s=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!In[o]&&!zn[o]&&sl(t+" effect requires "+o+" plugin.")}),fc[t]=function(o,l,c){return n($n(o),ei(l||{},r),c)},s&&(xn.prototype[t]=function(o,l,c){return this.add(fc[t](o,yi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){rt[e]=Nr(t)},parseEase:function(e,t){return arguments.length?Nr(e,t):rt},getById:function(e){return bt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new xn(e),i,r;for(n.smoothChildTiming=yn(e.smoothChildTiming),bt.remove(n),n._dp=0,n._time=n._tTime=bt._time,i=bt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof Ot&&i.vars.onComplete===i._targets[0]))&&mi(n,i,i._start-i._delay),i=r;return mi(bt,n,0),n},context:function(e,t){return e?new im(e,t):At},matchMedia:function(e){return new Ob(e)},matchMediaRefresh:function(){return Ur.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Zc()},addEventListener:function(e,t){var n=ja[e]||(ja[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=ja[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:fb,wrapYoyo:db,distribute:Up,random:kp,snap:Fp,normalize:hb,getUnit:nn,clamp:ab,splitColor:Gp,toArray:$n,selector:Yc,mapRange:Bp,pipe:cb,unitize:ub,interpolate:pb,shuffle:Np},install:bp,effects:fc,ticker:On,updateRoot:xn.updateRoot,plugins:In,globalTimeline:bt,core:{PropTween:Sn,globals:wp,Tween:Ot,Timeline:xn,Animation:$o,getCache:Ir,_removeLinkedListItem:wl,reverting:function(){return rn},context:function(e){return e&&At&&(At.data.push(e),e._ctx=At),At},suppressOverwrites:function(e){return wu=e}}};Mn("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return cl[a]=Ot[a]});On.add(xn.updateRoot);Ls=cl.to({},{duration:0});var Nb=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Ub=function(e,t){var n=e._targets,i,r,s;for(i in t)for(r=n.length;r--;)s=e._ptLookup[r][i],s&&(s=s.d)&&(s._pt&&(s=Nb(s,i)),s&&s.modifier&&s.modifier(t[i],e,n[r],i))},_c=function(e,t){return{name:e,rawVars:1,init:function(i,r,s){s._onInit=function(o){var l,c;if(Wt(r)&&(l={},Mn(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}Ub(o,r)}}}},bn=cl.registerPlugin({name:"attr",init:function(e,t,n,i,r){var s,o,l;this.tween=n;for(s in t)l=e.getAttribute(s)||"",o=this.add(e,"setAttribute",(l||0)+"",t[s],i,r,0,0,s),o.op=s,o.b=l,this._props.push(s)},render:function(e,t){for(var n=t._pt;n;)rn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},_c("roundProps",Kc),_c("modifiers"),_c("snap",Fp))||cl;Ot.version=xn.version=bn.version="3.12.2";Sp=1;Au()&&to();rt.Power0;rt.Power1;rt.Power2;rt.Power3;rt.Power4;rt.Linear;rt.Quad;rt.Cubic;rt.Quart;rt.Quint;rt.Strong;rt.Elastic;rt.Back;rt.SteppedEase;rt.Bounce;rt.Sine;rt.Expo;rt.Circ;/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var jf,nr,ks,Fu,Rr,Yf,ku,Fb=function(){return typeof window<"u"},Bi={},Tr=180/Math.PI,zs=Math.PI/180,xs=Math.atan2,Kf=1e8,zu=/([A-Z])/g,kb=/(left|right|width|margin|padding|x)/i,zb=/[\s,\(]\S/,gi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Jc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Bb=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Vb=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Hb=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},rm=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},sm=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Gb=function(e,t,n){return e.style[t]=n},Wb=function(e,t,n){return e.style.setProperty(t,n)},Xb=function(e,t,n){return e._gsap[t]=n},qb=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},jb=function(e,t,n,i,r){var s=e._gsap;s.scaleX=s.scaleY=n,s.renderTransform(r,s)},Yb=function(e,t,n,i,r){var s=e._gsap;s[t]=n,s.renderTransform(r,s)},wt="transform",ci=wt+"Origin",Kb=function a(e,t){var n=this,i=this.target,r=i.style;if(e in Bi&&r){if(this.tfm=this.tfm||{},e!=="transform")e=gi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(s){return n.tfm[s]=Ri(i,s)}):this.tfm[e]=i._gsap.x?i._gsap[e]:Ri(i,e);else return gi.transform.split(",").forEach(function(s){return a.call(n,s,t)});if(this.props.indexOf(wt)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(ci,t,"")),e=wt}(r||t)&&this.props.push(e,t,r[e])},om=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},$b=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,s;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(zu,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)i[s]=this.tfm[s];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=ku(),(!r||!r.isStart)&&!n[wt]&&(om(n),i.uncache=1)}},am=function(e,t){var n={target:e,props:[],revert:$b,save:Kb};return e._gsap||bn.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},lm,Qc=function(e,t){var n=nr.createElementNS?nr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):nr.createElement(e);return n.style?n:nr.createElement(e)},xi=function a(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(zu,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&a(e,no(t)||t,1)||""},$f="O,Moz,ms,Ms,Webkit".split(","),no=function(e,t,n){var i=t||Rr,r=i.style,s=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!($f[s]+e in r););return s<0?null:(s===3?"ms":s>=0?$f[s]:"")+e},eu=function(){Fb()&&window.document&&(jf=window,nr=jf.document,ks=nr.documentElement,Rr=Qc("div")||{style:{}},Qc("div"),wt=no(wt),ci=wt+"Origin",Rr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",lm=!!no("perspective"),ku=bn.core.reverting,Fu=1)},xc=function a(e){var t=Qc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,s;if(ks.appendChild(t),t.appendChild(this),this.style.display="block",e)try{s=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=a}catch{}else this._gsapBBox&&(s=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),ks.removeChild(t),this.style.cssText=r,s},Zf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},cm=function(e){var t;try{t=e.getBBox()}catch{t=xc.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===xc||(t=xc.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Zf(e,["x","cx","x1"])||0,y:+Zf(e,["y","cy","y1"])||0,width:0,height:0}:t},um=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&cm(e))},Zo=function(e,t){if(t){var n=e.style;t in Bi&&t!==ci&&(t=wt),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(zu,"-$1").toLowerCase())):n.removeAttribute(t)}},ir=function(e,t,n,i,r,s){var o=new Sn(e._pt,t,n,0,1,s?sm:rm);return e._pt=o,o.b=i,o.e=r,e._props.push(n),o},Jf={deg:1,rad:1,turn:1},Zb={grid:1,flex:1},hr=function a(e,t,n,i){var r=parseFloat(n)||0,s=(n+"").trim().substr((r+"").length)||"px",o=Rr.style,l=kb.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",g,_,m,p;return i===s||!r||Jf[i]||Jf[s]?r:(s!=="px"&&!f&&(r=a(e,t,n,"px")),p=e.getCTM&&um(e),(d||s==="%")&&(Bi[t]||~t.indexOf("adius"))?(g=p?e.getBBox()[l?"width":"height"]:e[u],Rt(d?r/g*h:r/100*g)):(o[l?"width":"height"]=h+(f?s:i),_=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===nr||!_.appendChild)&&(_=nr.body),m=_._gsap,m&&d&&m.width&&l&&m.time===On.time&&!m.uncache?Rt(r/m.width*h):((d||s==="%")&&!Zb[xi(_,"display")]&&(o.position=xi(e,"position")),_===e&&(o.position="static"),_.appendChild(Rr),g=Rr[u],_.removeChild(Rr),o.position="absolute",l&&d&&(m=Ir(_),m.time=On.time,m.width=_[u]),Rt(f?g*r/h:g&&r?h/g*r:0))))},Ri=function(e,t,n,i){var r;return Fu||eu(),t in gi&&t!=="transform"&&(t=gi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Bi[t]&&t!=="transform"?(r=Qo(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:hl(xi(e,ci))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=ul[t]&&ul[t](e,t,n)||xi(e,t)||Ap(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?hr(e,t,r,n)+n:r},Jb=function(e,t,n,i){if(!n||n==="none"){var r=no(t,e,1),s=r&&xi(e,r,1);s&&s!==n?(t=r,n=s):t==="borderColor"&&(n=xi(e,"borderTopColor"))}var o=new Sn(this._pt,e.style,t,0,1,tm),l=0,c=0,u,h,f,d,g,_,m,p,S,y,x,M;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=xi(e,t)||i,e.style[t]=n),u=[n,i],Xp(u),n=u[0],i=u[1],f=n.match(Cs)||[],M=i.match(Cs)||[],M.length){for(;h=Cs.exec(i);)m=h[0],S=i.substring(l,h.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),m!==(_=f[c++]||"")&&(d=parseFloat(_)||0,x=_.substr((d+"").length),m.charAt(1)==="="&&(m=Fs(d,m)+x),p=parseFloat(m),y=m.substr((p+"").length),l=Cs.lastIndex-y.length,y||(y=y||kn.units[t]||x,l===i.length&&(i+=y,o.e+=y)),x!==y&&(d=hr(e,t,_,y)||0),o._pt={_next:o._pt,p:S||c===1?S:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?sm:rm;return yp.test(i)&&(o.e=0),this._pt=o,o},Qf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Qb=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Qf[n]||n,t[1]=Qf[i]||i,t.join(" ")},ew=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,s=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],Bi[o]&&(l=1,o=o==="transformOrigin"?ci:wt),Zo(n,o);l&&(Zo(n,wt),s&&(s.svg&&n.removeAttribute("transform"),Qo(n,1),s.uncache=1,om(i)))}},ul={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var s=e._pt=new Sn(e._pt,t,n,0,0,ew);return s.u=i,s.pr=-10,s.tween=r,e._props.push(n),1}}},Jo=[1,0,0,1,0,0],hm={},fm=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},ed=function(e){var t=xi(e,wt);return fm(t)?Jo:t.substr(7).match(vp).map(Rt)},Bu=function(e,t){var n=e._gsap||Ir(e),i=e.style,r=ed(e),s,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Jo:r):(r===Jo&&!e.offsetParent&&e!==ks&&!n.svg&&(l=i.display,i.display="block",s=e.parentNode,(!s||!e.offsetParent)&&(c=1,o=e.nextElementSibling,ks.appendChild(e)),r=ed(e),l?i.display=l:Zo(e,"display"),c&&(o?s.insertBefore(e,o):s?s.appendChild(e):ks.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},tu=function(e,t,n,i,r,s){var o=e._gsap,l=r||Bu(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],S=l[5],y=t.split(" "),x=parseFloat(y[0])||0,M=parseFloat(y[1])||0,E,A,R,v;n?l!==Jo&&(A=d*m-g*_)&&(R=x*(m/A)+M*(-_/A)+(_*S-m*p)/A,v=x*(-g/A)+M*(d/A)-(d*S-g*p)/A,x=R,M=v):(E=cm(e),x=E.x+(~y[0].indexOf("%")?x/100*E.width:x),M=E.y+(~(y[1]||y[0]).indexOf("%")?M/100*E.height:M)),i||i!==!1&&o.smooth?(p=x-c,S=M-u,o.xOffset=h+(p*d+S*_)-p,o.yOffset=f+(p*g+S*m)-S):o.xOffset=o.yOffset=0,o.xOrigin=x,o.yOrigin=M,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[ci]="0px 0px",s&&(ir(s,o,"xOrigin",c,x),ir(s,o,"yOrigin",u,M),ir(s,o,"xOffset",h,o.xOffset),ir(s,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",x+" "+M)},Qo=function(e,t){var n=e._gsap||new Kp(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,s="px",o="deg",l=getComputedStyle(e),c=xi(e,ci)||"0",u,h,f,d,g,_,m,p,S,y,x,M,E,A,R,v,b,V,O,I,N,z,$,X,G,ee,C,ge,re,Y,J,se;return u=h=f=_=m=p=S=y=x=0,d=g=1,n.svg=!!(e.getCTM&&um(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[wt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[wt]!=="none"?l[wt]:"")),i.scale=i.rotate=i.translate="none"),A=Bu(e,n.svg),n.svg&&(n.uncache?(G=e.getBBox(),c=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",X=""):X=!t&&e.getAttribute("data-svg-origin"),tu(e,X||c,!!X||n.originIsAbsolute,n.smooth!==!1,A)),M=n.xOrigin||0,E=n.yOrigin||0,A!==Jo&&(V=A[0],O=A[1],I=A[2],N=A[3],u=z=A[4],h=$=A[5],A.length===6?(d=Math.sqrt(V*V+O*O),g=Math.sqrt(N*N+I*I),_=V||O?xs(O,V)*Tr:0,S=I||N?xs(I,N)*Tr+_:0,S&&(g*=Math.abs(Math.cos(S*zs))),n.svg&&(u-=M-(M*V+E*I),h-=E-(M*O+E*N))):(se=A[6],Y=A[7],C=A[8],ge=A[9],re=A[10],J=A[11],u=A[12],h=A[13],f=A[14],R=xs(se,re),m=R*Tr,R&&(v=Math.cos(-R),b=Math.sin(-R),X=z*v+C*b,G=$*v+ge*b,ee=se*v+re*b,C=z*-b+C*v,ge=$*-b+ge*v,re=se*-b+re*v,J=Y*-b+J*v,z=X,$=G,se=ee),R=xs(-I,re),p=R*Tr,R&&(v=Math.cos(-R),b=Math.sin(-R),X=V*v-C*b,G=O*v-ge*b,ee=I*v-re*b,J=N*b+J*v,V=X,O=G,I=ee),R=xs(O,V),_=R*Tr,R&&(v=Math.cos(R),b=Math.sin(R),X=V*v+O*b,G=z*v+$*b,O=O*v-V*b,$=$*v-z*b,V=X,z=G),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=Rt(Math.sqrt(V*V+O*O+I*I)),g=Rt(Math.sqrt($*$+se*se)),R=xs(z,$),S=Math.abs(R)>2e-4?R*Tr:0,x=J?1/(J<0?-J:J):0),n.svg&&(X=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!fm(xi(e,wt)),X&&e.setAttribute("transform",X))),Math.abs(S)>90&&Math.abs(S)<270&&(r?(d*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+s,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+s,n.z=f+s,n.scaleX=Rt(d),n.scaleY=Rt(g),n.rotation=Rt(_)+o,n.rotationX=Rt(m)+o,n.rotationY=Rt(p)+o,n.skewX=S+o,n.skewY=y+o,n.transformPerspective=x+s,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[ci]=hl(c)),n.xOffset=n.yOffset=0,n.force3D=kn.force3D,n.renderTransform=n.svg?nw:lm?dm:tw,n.uncache=0,n},hl=function(e){return(e=e.split(" "))[0]+" "+e[1]},vc=function(e,t,n){var i=nn(t);return Rt(parseFloat(t)+parseFloat(hr(e,"x",n+"px",i)))+i},tw=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,dm(e,t)},Mr="0deg",xo="0px",Sr=") ",dm=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,s=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,S=n.target,y=n.zOrigin,x="",M=p==="auto"&&e&&e!==1||p===!0;if(y&&(h!==Mr||u!==Mr)){var E=parseFloat(u)*zs,A=Math.sin(E),R=Math.cos(E),v;E=parseFloat(h)*zs,v=Math.cos(E),s=vc(S,s,A*v*-y),o=vc(S,o,-Math.sin(E)*-y),l=vc(S,l,R*v*-y+y)}m!==xo&&(x+="perspective("+m+Sr),(i||r)&&(x+="translate("+i+"%, "+r+"%) "),(M||s!==xo||o!==xo||l!==xo)&&(x+=l!==xo||M?"translate3d("+s+", "+o+", "+l+") ":"translate("+s+", "+o+Sr),c!==Mr&&(x+="rotate("+c+Sr),u!==Mr&&(x+="rotateY("+u+Sr),h!==Mr&&(x+="rotateX("+h+Sr),(f!==Mr||d!==Mr)&&(x+="skew("+f+", "+d+Sr),(g!==1||_!==1)&&(x+="scale("+g+", "+_+Sr),S.style[wt]=x||"translate(0, 0)"},nw=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,s=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,S=n.forceCSS,y=parseFloat(s),x=parseFloat(o),M,E,A,R,v;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=zs,c*=zs,M=Math.cos(l)*h,E=Math.sin(l)*h,A=Math.sin(l-c)*-f,R=Math.cos(l-c)*f,c&&(u*=zs,v=Math.tan(c-u),v=Math.sqrt(1+v*v),A*=v,R*=v,u&&(v=Math.tan(u),v=Math.sqrt(1+v*v),M*=v,E*=v)),M=Rt(M),E=Rt(E),A=Rt(A),R=Rt(R)):(M=h,R=f,E=A=0),(y&&!~(s+"").indexOf("px")||x&&!~(o+"").indexOf("px"))&&(y=hr(d,"x",s,"px"),x=hr(d,"y",o,"px")),(g||_||m||p)&&(y=Rt(y+g-(g*M+_*A)+m),x=Rt(x+_-(g*E+_*R)+p)),(i||r)&&(v=d.getBBox(),y=Rt(y+i/100*v.width),x=Rt(x+r/100*v.height)),v="matrix("+M+","+E+","+A+","+R+","+y+","+x+")",d.setAttribute("transform",v),S&&(d.style[wt]=v)},iw=function(e,t,n,i,r){var s=360,o=Wt(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?Tr:1),c=l-i,u=i+c+"deg",h,f;return o&&(h=r.split("_")[1],h==="short"&&(c%=s,c!==c%(s/2)&&(c+=c<0?s:-s)),h==="cw"&&c<0?c=(c+s*Kf)%s-~~(c/s)*s:h==="ccw"&&c>0&&(c=(c-s*Kf)%s-~~(c/s)*s)),e._pt=f=new Sn(e._pt,t,n,i,c,Bb),f.e=u,f.u="deg",e._props.push(n),f},td=function(e,t){for(var n in t)e[n]=t[n];return e},rw=function(e,t,n){var i=td({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",s=n.style,o,l,c,u,h,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),s[wt]=t,o=Qo(n,1),Zo(n,wt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[wt],s[wt]=t,o=Qo(n,1),s[wt]=c);for(l in Bi)c=i[l],u=o[l],c!==u&&r.indexOf(l)<0&&(d=nn(c),g=nn(u),h=d!==g?hr(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new Sn(e._pt,o,l,h,f-h,Jc),e._pt.u=g||0,e._props.push(l));td(o,i)};Mn("padding,margin,Width,Radius",function(a,e){var t="Top",n="Right",i="Bottom",r="Left",s=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(o){return e<2?a+o:"border"+o+a});ul[e>1?"border"+a:a]=function(o,l,c,u,h){var f,d;if(arguments.length<4)return f=s.map(function(g){return Ri(o,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},s.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(l,d,h)}});var pm={name:"css",register:eu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var s=this._props,o=e.style,l=n.vars.startAt,c,u,h,f,d,g,_,m,p,S,y,x,M,E,A,R;Fu||eu(),this.styles=this.styles||am(e),R=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(In[_]&&$p(_,t,n,i,e,r)))){if(d=typeof u,g=ul[_],d==="function"&&(u=u.call(n,i,e,r),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Yo(u)),g)g(this,e,_,u,n)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",lr.lastIndex=0,lr.test(c)||(m=nn(c),p=nn(u)),p?m!==p&&(c=hr(e,_,c,p)+p):m&&(u+=m),this.add(o,"setProperty",c,u,i,r,0,0,_),s.push(_),R.push(_,0,o[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,r):l[_],Wt(c)&&~c.indexOf("random(")&&(c=Yo(c)),nn(c+"")||(c+=kn.units[_]||nn(Ri(e,_))||""),(c+"").charAt(1)==="="&&(c=Ri(e,_))):c=Ri(e,_),f=parseFloat(c),S=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),h=parseFloat(u),_ in gi&&(_==="autoAlpha"&&(f===1&&Ri(e,"visibility")==="hidden"&&h&&(f=0),R.push("visibility",0,o.visibility),ir(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=gi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),y=_ in Bi,y){if(this.styles.save(_),x||(M=e._gsap,M.renderTransform&&!t.parseTransform||Qo(e,t.parseTransform),E=t.smoothOrigin!==!1&&M.smooth,x=this._pt=new Sn(this._pt,o,wt,0,1,M.renderTransform,M,0,-1),x.dep=1),_==="scale")this._pt=new Sn(this._pt,M,"scaleY",M.scaleY,(S?Fs(M.scaleY,S+h):h)-M.scaleY||0,Jc),this._pt.u=0,s.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(ci,0,o[ci]),u=Qb(u),M.svg?tu(e,u,0,E,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==M.zOrigin&&ir(this,M,"zOrigin",M.zOrigin,p),ir(this,o,_,hl(c),hl(u)));continue}else if(_==="svgOrigin"){tu(e,u,1,E,0,this);continue}else if(_ in hm){iw(this,M,_,f,S?Fs(f,S+u):u);continue}else if(_==="smoothOrigin"){ir(this,M,"smooth",M.smooth,u);continue}else if(_==="force3D"){M[_]=u;continue}else if(_==="transform"){rw(this,u,e);continue}}else _ in o||(_=no(_)||_);if(y||(h||h===0)&&(f||f===0)&&!zb.test(u)&&_ in o)m=(c+"").substr((f+"").length),h||(h=0),p=nn(u)||(_ in kn.units?kn.units[_]:m),m!==p&&(f=hr(e,_,c,p)),this._pt=new Sn(this._pt,y?M:o,_,f,(S?Fs(f,S+h):h)-f,!y&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?Hb:Jc),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Vb);else if(_ in o)Jb.call(this,e,_,c,S?S+u:u);else if(_ in e)this.add(e,_,c||e[_],S?S+u:u,i,r);else if(_!=="parseTransform"){Cu(_,u);continue}y||(_ in o?R.push(_,0,o[_]):R.push(_,1,c||e[_])),s.push(_)}}A&&nm(this)},render:function(e,t){if(t.tween._time||!ku())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ri,aliases:gi,getSetter:function(e,t,n){var i=gi[t];return i&&i.indexOf(",")<0&&(t=i),t in Bi&&t!==ci&&(e._gsap.x||Ri(e,"x"))?n&&Yf===n?t==="scale"?qb:Xb:(Yf=n||{})&&(t==="scale"?jb:Yb):e.style&&!Tu(e.style[t])?Gb:~t.indexOf("-")?Wb:Nu(e,t)},core:{_removeProperty:Zo,_getMatrix:Bu}};bn.utils.checkPrefix=no;bn.core.getStyleSaver=am;(function(a,e,t,n){var i=Mn(a+","+e+","+t,function(r){Bi[r]=1});Mn(e,function(r){kn.units[r]="deg",hm[r]=1}),gi[i[13]]=a+","+e,Mn(n,function(r){var s=r.split(":");gi[s[1]]=i[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Mn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){kn.units[a]="px"});bn.registerPlugin(pm);var un=bn.registerPlugin(pm)||bn;un.core.Tween;const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let nd=1234567;const mm=Math.PI/180,gm=180/Math.PI;function sw(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qt[a&255]+Qt[a>>8&255]+Qt[a>>16&255]+Qt[a>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]).toLowerCase()}function ow(a,e,t){return Math.max(e,Math.min(t,a))}function _m(a,e){return(a%e+e)%e}function aw(a,e,t,n,i){return n+(a-e)*(i-n)/(t-e)}function lw(a,e,t){return a!==e?(t-a)/(e-a):0}function xm(a,e,t){return(1-t)*a+t*e}function cw(a,e,t,n){return xm(a,e,1-Math.exp(-t*n))}function uw(a,e=1){return e-Math.abs(_m(a,e*2)-e)}function hw(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function fw(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function dw(a,e){return a+Math.floor(Math.random()*(e-a+1))}function pw(a,e){return a+Math.random()*(e-a)}function mw(a){return a*(.5-Math.random())}function gw(a){a!==void 0&&(nd=a);let e=nd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _w(a){return a*mm}function xw(a){return a*gm}function vw(a){return(a&a-1)===0&&a!==0}function yw(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function Mw(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Sw(a,e,t,n,i){const r=Math.cos,s=Math.sin,o=r(t/2),l=s(t/2),c=r((e+n)/2),u=s((e+n)/2),h=r((e-n)/2),f=s((e-n)/2),d=r((n-e)/2),g=s((n-e)/2);switch(i){case"XYX":a.set(o*u,l*h,l*f,o*c);break;case"YZY":a.set(l*f,o*u,l*h,o*c);break;case"ZXZ":a.set(l*h,l*f,o*u,o*c);break;case"XZX":a.set(o*u,l*g,l*d,o*c);break;case"YXY":a.set(l*d,o*u,l*g,o*c);break;case"ZYZ":a.set(l*g,l*d,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function bw(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function ww(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const vs={DEG2RAD:mm,RAD2DEG:gm,generateUUID:sw,clamp:ow,euclideanModulo:_m,mapLinear:aw,inverseLerp:lw,lerp:xm,damp:cw,pingpong:uw,smoothstep:hw,smootherstep:fw,randInt:dw,randFloat:pw,randFloatSpread:mw,seededRandom:gw,degToRad:_w,radToDeg:xw,isPowerOfTwo:vw,ceilPowerOfTwo:yw,floorPowerOfTwo:Mw,setQuaternionFromProperEuler:Sw,normalize:ww,denormalize:bw};class Tw{constructor(){this.experience=new Qn,this.scene=this.experience.scene,this.resources=this.experience.resources,this.time=this.experience.time,this.room=this.resources.items.room_final,this.actualRoom=this.room.scene,this.tableDecoration=[],this.tableDecorations=new Set(["Monitor_Right","Monitor_Right_Screen","Monitor_Left","Monitor_Left_Screen","Table_Top","Table_Mat","Quest_2","Quest_2_Controller","Plant_Dirt","Plant_Pot","Leaves","KeyboardMouse","Height"]),this.roomScale=.34,this.lerp={current:0,target:0,ease:.1},this.setModel(),this.setAnimation(),this.onMouseMove()}setModel(){var e,t,n;this.actualRoom.children.forEach(i=>{i.castShadow=!0,i.receiveShadow=!0,i instanceof er&&i.children.forEach(r=>{r.castShadow=!0,r.receiveShadow=!0}),i.name==="Cube001"&&(i.material=new pr,i.material.roughness=0,i.material.color.set(16777215),i.material.ior=3,i.material.transmission=1,i.material.opacity=1),i.name=="Clock_Pointer_Hour"&&(e=i),i.name=="Clock_Pointer_Minute"&&(t=i),i.name=="Clock_Pointer_Second"&&(n=i),i.name==="Monitor_Left_Screen"&&(i.material=new Qi({map:this.resources.items.screen_vr})),this.tableDecorations.has(i.name)&&this.tableDecoration.push(i)}),this.setClock(e,t,n),this.scene.add(this.actualRoom),this.actualRoom.scale.set(this.roomScale,this.roomScale,this.roomScale)}setAnimation(){this.mixer=new KM(this.actualRoom),this.room.animations.length>0}onMouseMove(){window.addEventListener("mousemove",e=>{this.rotation=(e.clientX-window.innerWidth/2)*2/window.innerWidth,this.lerp.target=this.rotation*.1})}resize(){}setClock(e,t,n){var i=new U(0,-1,0),r=new Date;const s=r.getHours(),o=r.getMinutes(),l=r.getSeconds();e.rotateOnAxis(i,vs.degToRad(s*(360/12)+o/60*360/12)),t.rotateOnAxis(i,vs.degToRad(o*(360/60))),n.rotateOnAxis(i,vs.degToRad(l*(360/60))),setInterval(function(){n.rotateOnAxis(i,vs.degToRad(360/60))},1*1e3),setInterval(function(){t.rotateOnAxis(i,vs.degToRad(360/60)),e.rotateOnAxis(i,vs.degToRad(360/60/60))},60*1e3)}update(){this.lerp.current=un.utils.interpolate(this.lerp.current,this.lerp.target,this.lerp.ease),this.actualRoom.rotation.y=this.lerp.current,this.mixer.update(this.time.delta)}}function id(a,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function Aw(a,e,t){return e&&id(a.prototype,e),t&&id(a,t),a}/*!
 * Observer 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Yt,nu,Nn,rr,sr,Bs,vm,Ar,Io,ym,Ii,si,Mm,Sm=function(){return Yt||typeof window<"u"&&(Yt=window.gsap)&&Yt.registerPlugin&&Yt},bm=1,Rs=[],Qe=[],vi=[],Oo=Date.now,iu=function(e,t){return t},Ew=function(){var e=Io.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,Qe),i.push.apply(i,vi),Qe=n,vi=i,iu=function(s,o){return t[s](o)}},cr=function(e,t){return~vi.indexOf(e)&&vi[vi.indexOf(e)+1][t]},No=function(e){return!!~ym.indexOf(e)},ln=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},an=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ra="scrollLeft",Pa="scrollTop",ru=function(){return Ii&&Ii.isPressed||Qe.cache++},fl=function(e,t){var n=function i(r){if(r||r===0){bm&&(Nn.history.scrollRestoration="manual");var s=Ii&&Ii.isPressed;r=i.v=Math.round(r)||(Ii&&Ii.iOS?1:0),e(r),i.cacheID=Qe.cache,s&&iu("ss",r)}else(t||Qe.cache!==i.cacheID||iu("ref"))&&(i.cacheID=Qe.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},mn={s:Ra,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:fl(function(a){return arguments.length?Nn.scrollTo(a,Ft.sc()):Nn.pageXOffset||rr[Ra]||sr[Ra]||Bs[Ra]||0})},Ft={s:Pa,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:mn,sc:fl(function(a){return arguments.length?Nn.scrollTo(mn.sc(),a):Nn.pageYOffset||rr[Pa]||sr[Pa]||Bs[Pa]||0})},_n=function(e,t){return(t&&t._ctx&&t._ctx.selector||Yt.utils.toArray)(e)[0]||(typeof e=="string"&&Yt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},fr=function(e,t){var n=t.s,i=t.sc;No(e)&&(e=rr.scrollingElement||sr);var r=Qe.indexOf(e),s=i===Ft.sc?1:2;!~r&&(r=Qe.push(e)-1),Qe[r+s]||ln(e,"scroll",ru);var o=Qe[r+s],l=o||(Qe[r+s]=fl(cr(e,n),!0)||(No(e)?i:fl(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=Yt.getProperty(e,"scrollBehavior")==="smooth"),l},su=function(e,t,n){var i=e,r=e,s=Oo(),o=s,l=t||50,c=Math.max(500,l*3),u=function(g,_){var m=Oo();_||m-s>l?(r=i,i=g,o=s,s=m):n?i+=g:i=r+(g-r)/(m-o)*(s-o)},h=function(){r=i=n?0:i,o=s=0},f=function(g){var _=o,m=r,p=Oo();return(g||g===0)&&g!==i&&u(g),s===o||p-o>c?0:(i+(n?m:-m))/((n?p:s)-_)*1e3};return{update:u,reset:h,getVelocity:f}},vo=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},rd=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},wm=function(){Io=Yt.core.globals().ScrollTrigger,Io&&Io.core&&Ew()},Tm=function(e){return Yt=e||Sm(),Yt&&typeof document<"u"&&document.body&&(Nn=window,rr=document,sr=rr.documentElement,Bs=rr.body,ym=[Nn,rr,sr,Bs],Yt.utils.clamp,Mm=Yt.core.context||function(){},Ar="onpointerenter"in Bs?"pointer":"mouse",vm=Ut.isTouch=Nn.matchMedia&&Nn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Nn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,si=Ut.eventTypes=("ontouchstart"in sr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in sr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return bm=0},500),wm(),nu=1),nu};mn.op=Ft;Qe.cache=0;var Ut=function(){function a(t){this.init(t)}var e=a.prototype;return e.init=function(n){nu||Tm(Yt)||console.warn("Please gsap.registerPlugin(Observer)"),Io||wm();var i=n.tolerance,r=n.dragMinimum,s=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,S=n.onDrag,y=n.onPress,x=n.onRelease,M=n.onRight,E=n.onLeft,A=n.onUp,R=n.onDown,v=n.onChangeX,b=n.onChangeY,V=n.onChange,O=n.onToggleX,I=n.onToggleY,N=n.onHover,z=n.onHoverEnd,$=n.onMove,X=n.ignoreCheck,G=n.isNormalizer,ee=n.onGestureStart,C=n.onGestureEnd,ge=n.onWheel,re=n.onEnable,Y=n.onDisable,J=n.onClick,se=n.scrollSpeed,ce=n.capture,B=n.allowClicks,Ae=n.lockAxis,Me=n.onLockAxis;this.target=o=_n(o)||sr,this.vars=n,d&&(d=Yt.utils.toArray(d)),i=i||1e-9,r=r||0,g=g||1,se=se||1,s=s||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Nn.getComputedStyle(Bs).lineHeight)||22);var ae,Se,Be,oe,Ee,Ke,$e,H=this,tt=0,Ve=0,st=fr(o,mn),Ze=fr(o,Ft),L=st(),w=Ze(),K=~s.indexOf("touch")&&!~s.indexOf("pointer")&&si[0]==="pointerdown",ne=No(o),te=o.ownerDocument||rr,le=[0,0,0],D=[0,0,0],Q=0,W=function(){return Q=Oo()},ue=function(_e,ze){return(H.event=_e)&&d&&~d.indexOf(_e.target)||ze&&K&&_e.pointerType!=="touch"||X&&X(_e,ze)},de=function(){H._vx.reset(),H._vy.reset(),Se.pause(),h&&h(H)},Te=function(){var _e=H.deltaX=rd(le),ze=H.deltaY=rd(D),lt=Math.abs(_e)>=i,xe=Math.abs(ze)>=i;V&&(lt||xe)&&V(H,_e,ze,le,D),lt&&(M&&H.deltaX>0&&M(H),E&&H.deltaX<0&&E(H),v&&v(H),O&&H.deltaX<0!=tt<0&&O(H),tt=H.deltaX,le[0]=le[1]=le[2]=0),xe&&(R&&H.deltaY>0&&R(H),A&&H.deltaY<0&&A(H),b&&b(H),I&&H.deltaY<0!=Ve<0&&I(H),Ve=H.deltaY,D[0]=D[1]=D[2]=0),(oe||Be)&&($&&$(H),Be&&(S(H),Be=!1),oe=!1),Ke&&!(Ke=!1)&&Me&&Me(H),Ee&&(ge(H),Ee=!1),ae=0},me=function(_e,ze,lt){le[lt]+=_e,D[lt]+=ze,H._vx.update(_e),H._vy.update(ze),c?ae||(ae=requestAnimationFrame(Te)):Te()},be=function(_e,ze){Ae&&!$e&&(H.axis=$e=Math.abs(_e)>Math.abs(ze)?"x":"y",Ke=!0),$e!=="y"&&(le[2]+=_e,H._vx.update(_e,!0)),$e!=="x"&&(D[2]+=ze,H._vy.update(ze,!0)),c?ae||(ae=requestAnimationFrame(Te)):Te()},Pe=function(_e){if(!ue(_e,1)){_e=vo(_e,u);var ze=_e.clientX,lt=_e.clientY,xe=ze-H.x,Je=lt-H.y,Oe=H.isDragging;H.x=ze,H.y=lt,(Oe||Math.abs(H.startX-ze)>=r||Math.abs(H.startY-lt)>=r)&&(S&&(Be=!0),Oe||(H.isDragging=!0),be(xe,Je),Oe||m&&m(H))}},Ue=H.onPress=function(De){ue(De,1)||De&&De.button||(H.axis=$e=null,Se.pause(),H.isPressed=!0,De=vo(De),tt=Ve=0,H.startX=H.x=De.clientX,H.startY=H.y=De.clientY,H._vx.reset(),H._vy.reset(),ln(G?o:te,si[1],Pe,u,!0),H.deltaX=H.deltaY=0,y&&y(H))},ut=H.onRelease=function(De){if(!ue(De,1)){an(G?o:te,si[1],Pe,!0);var _e=!isNaN(H.y-H.startY),ze=H.isDragging&&(Math.abs(H.x-H.startX)>3||Math.abs(H.y-H.startY)>3),lt=vo(De);!ze&&_e&&(H._vx.reset(),H._vy.reset(),u&&B&&Yt.delayedCall(.08,function(){if(Oo()-Q>300&&!De.defaultPrevented){if(De.target.click)De.target.click();else if(te.createEvent){var xe=te.createEvent("MouseEvents");xe.initMouseEvent("click",!0,!0,Nn,1,lt.screenX,lt.screenY,lt.clientX,lt.clientY,!1,!1,!1,!1,0,null),De.target.dispatchEvent(xe)}}})),H.isDragging=H.isGesturing=H.isPressed=!1,h&&!G&&Se.restart(!0),p&&ze&&p(H),x&&x(H,ze)}},P=function(_e){return _e.touches&&_e.touches.length>1&&(H.isGesturing=!0)&&ee(_e,H.isDragging)},Z=function(){return(H.isGesturing=!1)||C(H)},ie=function(_e){if(!ue(_e)){var ze=st(),lt=Ze();me((ze-L)*se,(lt-w)*se,1),L=ze,w=lt,h&&Se.restart(!0)}},he=function(_e){if(!ue(_e)){_e=vo(_e,u),ge&&(Ee=!0);var ze=(_e.deltaMode===1?l:_e.deltaMode===2?Nn.innerHeight:1)*g;me(_e.deltaX*ze,_e.deltaY*ze,0),h&&!G&&Se.restart(!0)}},ye=function(_e){if(!ue(_e)){var ze=_e.clientX,lt=_e.clientY,xe=ze-H.x,Je=lt-H.y;H.x=ze,H.y=lt,oe=!0,(xe||Je)&&be(xe,Je)}},at=function(_e){H.event=_e,N(H)},ht=function(_e){H.event=_e,z(H)},xt=function(_e){return ue(_e)||vo(_e,u)&&J(H)};Se=H._dc=Yt.delayedCall(f||.25,de).pause(),H.deltaX=H.deltaY=0,H._vx=su(0,50,!0),H._vy=su(0,50,!0),H.scrollX=st,H.scrollY=Ze,H.isDragging=H.isGesturing=H.isPressed=!1,Mm(this),H.enable=function(De){return H.isEnabled||(ln(ne?te:o,"scroll",ru),s.indexOf("scroll")>=0&&ln(ne?te:o,"scroll",ie,u,ce),s.indexOf("wheel")>=0&&ln(o,"wheel",he,u,ce),(s.indexOf("touch")>=0&&vm||s.indexOf("pointer")>=0)&&(ln(o,si[0],Ue,u,ce),ln(te,si[2],ut),ln(te,si[3],ut),B&&ln(o,"click",W,!1,!0),J&&ln(o,"click",xt),ee&&ln(te,"gesturestart",P),C&&ln(te,"gestureend",Z),N&&ln(o,Ar+"enter",at),z&&ln(o,Ar+"leave",ht),$&&ln(o,Ar+"move",ye)),H.isEnabled=!0,De&&De.type&&Ue(De),re&&re(H)),H},H.disable=function(){H.isEnabled&&(Rs.filter(function(De){return De!==H&&No(De.target)}).length||an(ne?te:o,"scroll",ru),H.isPressed&&(H._vx.reset(),H._vy.reset(),an(G?o:te,si[1],Pe,!0)),an(ne?te:o,"scroll",ie,ce),an(o,"wheel",he,ce),an(o,si[0],Ue,ce),an(te,si[2],ut),an(te,si[3],ut),an(o,"click",W,!0),an(o,"click",xt),an(te,"gesturestart",P),an(te,"gestureend",Z),an(o,Ar+"enter",at),an(o,Ar+"leave",ht),an(o,Ar+"move",ye),H.isEnabled=H.isPressed=H.isDragging=!1,Y&&Y(H))},H.kill=H.revert=function(){H.disable();var De=Rs.indexOf(H);De>=0&&Rs.splice(De,1),Ii===H&&(Ii=0)},Rs.push(H),G&&No(o)&&(Ii=H),H.enable(_)},Aw(a,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),a}();Ut.version="3.12.2";Ut.create=function(a){return new Ut(a)};Ut.register=Tm;Ut.getAll=function(){return Rs.slice()};Ut.getById=function(a){return Rs.filter(function(e){return e.vars.id===a})[0]};Sm()&&Yt.registerPlugin(Ut);/*!
 * ScrollTrigger 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var we,bs,nt,St,ai,vt,Am,dl,pl,Ps,Ya,Da,en,El,ou,hn,sd,od,ws,Em,yc,Cm,Rn,Lm,Rm,Pm,$i,au,Vu,Vs,Hu,Mc,Ia=1,dn=Date.now,Sc=dn(),Jn=0,To=0,ad=function(e,t,n){var i=Dn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},ld=function(e,t){return t&&(!Dn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Cw=function a(){return To&&requestAnimationFrame(a)},cd=function(){return El=1},ud=function(){return El=0},fi=function(e){return e},Ao=function(e){return Math.round(e*1e5)/1e5||0},Dm=function(){return typeof window<"u"},Im=function(){return we||Dm()&&(we=window.gsap)&&we.registerPlugin&&we},Yr=function(e){return!!~Am.indexOf(e)},Om=function(e){return(e==="Height"?Hu:nt["inner"+e])||ai["client"+e]||vt["client"+e]},Nm=function(e){return cr(e,"getBoundingClientRect")||(Yr(e)?function(){return el.width=nt.innerWidth,el.height=Hu,el}:function(){return Pi(e)})},Lw=function(e,t,n){var i=n.d,r=n.d2,s=n.a;return(s=cr(e,"getBoundingClientRect"))?function(){return s()[i]}:function(){return(t?Om(r):e["client"+r])||0}},Rw=function(e,t){return!t||~vi.indexOf(e)?Nm(e):function(){return el}},Oi=function(e,t){var n=t.s,i=t.d2,r=t.d,s=t.a;return Math.max(0,(n="scroll"+i)&&(s=cr(e,n))?s()-Nm(e)()[r]:Yr(e)?(ai[n]||vt[n])-Om(i):e[n]-e["offset"+i])},Oa=function(e,t){for(var n=0;n<ws.length;n+=3)(!t||~t.indexOf(ws[n+1]))&&e(ws[n],ws[n+1],ws[n+2])},Dn=function(e){return typeof e=="string"},gn=function(e){return typeof e=="function"},Ka=function(e){return typeof e=="number"},Er=function(e){return typeof e=="object"},yo=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},bc=function(e,t){if(e.enabled){var n=t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},ys=Math.abs,Um="left",Fm="top",Gu="right",Wu="bottom",Fr="width",kr="height",Uo="Right",Fo="Left",ko="Top",zo="Bottom",It="padding",Xn="margin",io="Width",Xu="Height",Xt="px",qn=function(e){return nt.getComputedStyle(e)},Pw=function(e){var t=qn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},hd=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Pi=function(e,t){var n=t&&qn(e)[ou]!=="matrix(1, 0, 0, 1, 0, 0)"&&we.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},lu=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},km=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t},Dw=function(e){return function(t){return we.utils.snap(km(e),t)}},qu=function(e){var t=we.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,r){return i-r});return n?function(i,r,s){s===void 0&&(s=.001);var o;if(!r)return t(i);if(r>0){for(i-=s,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=s;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,r,s){s===void 0&&(s=.001);var o=t(i);return!r||Math.abs(o-i)<s||o-i<0==r<0?o:t(r<0?i-e:i+e)}},Iw=function(e){return function(t,n){return qu(km(e))(t,n.direction)}},Na=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i)})},Ht=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},Vt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ua=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},fd={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Fa={toggleActions:"play",anticipatePin:0},ml={top:0,left:0,center:.5,bottom:1,right:1},$a=function(e,t){if(Dn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in ml?ml[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},ka=function(e,t,n,i,r,s,o,l){var c=r.startColor,u=r.endColor,h=r.fontSize,f=r.indent,d=r.fontWeight,g=St.createElement("div"),_=Yr(n)||cr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?vt:n,S=e.indexOf("start")!==-1,y=S?c:u,x="border-color:"+y+";font-size:"+h+";color:"+y+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(x+=(i===Ft?Gu:Wu)+":"+(s+parseFloat(f))+"px;"),o&&(x+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=S,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=x,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],Za(g,0,i,S),g},Za=function(e,t,n,i){var r={display:"block"},s=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+s+io]=1,r["border"+o+io]=0,r[n.p]=t+"px",we.set(e,r)},Ye=[],cu={},ea,dd=function(){return dn()-Jn>34&&(ea||(ea=requestAnimationFrame(Fi)))},Ms=function(){(!Rn||!Rn.isPressed||Rn.startX>vt.clientWidth)&&(Qe.cache++,Rn?ea||(ea=requestAnimationFrame(Fi)):Fi(),Jn||$r("scrollStart"),Jn=dn())},wc=function(){Pm=nt.innerWidth,Rm=nt.innerHeight},Eo=function(){Qe.cache++,!en&&!Cm&&!St.fullscreenElement&&!St.webkitFullscreenElement&&(!Lm||Pm!==nt.innerWidth||Math.abs(nt.innerHeight-Rm)>nt.innerHeight*.25)&&dl.restart(!0)},Kr={},Ow=[],zm=function a(){return Vt(Ge,"scrollEnd",a)||Pr(!0)},$r=function(e){return Kr[e]&&Kr[e].map(function(t){return t()})||Ow},Pn=[],Bm=function(e){for(var t=0;t<Pn.length;t+=5)(!e||Pn[t+4]&&Pn[t+4].query===e)&&(Pn[t].style.cssText=Pn[t+1],Pn[t].getBBox&&Pn[t].setAttribute("transform",Pn[t+2]||""),Pn[t+3].uncache=1)},ju=function(e,t){var n;for(hn=0;hn<Ye.length;hn++)n=Ye[hn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));t&&Bm(t),t||$r("revert")},Vm=function(e,t){Qe.cache++,(t||!fn)&&Qe.forEach(function(n){return gn(n)&&n.cacheID++&&(n.rec=0)}),Dn(e)&&(nt.history.scrollRestoration=Vu=e)},fn,zr=0,pd,Nw=function(){if(pd!==zr){var e=pd=zr;requestAnimationFrame(function(){return e===zr&&Pr(!0)})}},Hm=function(){vt.appendChild(Vs),Hu=Vs.offsetHeight||nt.innerHeight,vt.removeChild(Vs)},Pr=function(e,t){if(Jn&&!e){Ht(Ge,"scrollEnd",zm);return}Hm(),fn=Ge.isRefreshing=!0,Qe.forEach(function(i){return gn(i)&&++i.cacheID&&(i.rec=i())});var n=$r("refreshInit");Em&&Ge.sort(),t||ju(),Qe.forEach(function(i){gn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Ye.slice(0).forEach(function(i){return i.refresh()}),Ye.forEach(function(i,r){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Ye.forEach(function(i){var r=Oi(i.scroller,i._dir);(i.vars.end==="max"||i._endClamp&&i.end>r)&&i.setPositions(i.start,Math.max(i.start+1,r),!0)}),n.forEach(function(i){return i&&i.render&&i.render(-1)}),Qe.forEach(function(i){gn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Vm(Vu,1),dl.pause(),zr++,fn=2,Fi(2),Ye.forEach(function(i){return gn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),fn=Ge.isRefreshing=!1,$r("refresh")},uu=0,Ja=1,Bo,Fi=function(e){if(!fn||e===2){Ge.isUpdating=!0,Bo&&Bo.update(0);var t=Ye.length,n=dn(),i=n-Sc>=50,r=t&&Ye[0].scroll();if(Ja=uu>r?-1:1,fn||(uu=r),i&&(Jn&&!El&&n-Jn>200&&(Jn=0,$r("scrollEnd")),Ya=Sc,Sc=n),Ja<0){for(hn=t;hn-- >0;)Ye[hn]&&Ye[hn].update(0,i);Ja=1}else for(hn=0;hn<t;hn++)Ye[hn]&&Ye[hn].update(0,i);Ge.isUpdating=!1}ea=0},hu=[Um,Fm,Wu,Gu,Xn+zo,Xn+Uo,Xn+ko,Xn+Fo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Qa=hu.concat([Fr,kr,"boxSizing","max"+io,"max"+Xu,"position",Xn,It,It+ko,It+Uo,It+zo,It+Fo]),Uw=function(e,t,n){Hs(n);var i=e._gsap;if(i.spacerIsNative)Hs(i.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},Tc=function(e,t,n,i){if(!e._gsap.swappedIn){for(var r=hu.length,s=t.style,o=e.style,l;r--;)l=hu[r],s[l]=n[l];s.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(s.display="inline-block"),o[Wu]=o[Gu]="auto",s.flexBasis=n.flexBasis||"auto",s.overflow="visible",s.boxSizing="border-box",s[Fr]=lu(e,mn)+Xt,s[kr]=lu(e,Ft)+Xt,s[It]=o[Xn]=o[Fm]=o[Um]="0",Hs(i),o[Fr]=o["max"+io]=n[Fr],o[kr]=o["max"+Xu]=n[kr],o[It]=n[It],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Fw=/([A-Z])/g,Hs=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,s;for((e.t._gsap||we.core.getCache(e.t)).uncache=1;i<n;i+=2)s=e[i+1],r=e[i],s?t[r]=s:t[r]&&t.removeProperty(r.replace(Fw,"-$1").toLowerCase())}},za=function(e){for(var t=Qa.length,n=e.style,i=[],r=0;r<t;r++)i.push(Qa[r],n[Qa[r]]);return i.t=e,i},kw=function(e,t,n){for(var i=[],r=e.length,s=n?8:0,o;s<r;s+=2)o=e[s],i.push(o,o in t?t[o]:e[s+1]);return i.t=e.t,i},el={left:0,top:0},md=function(e,t,n,i,r,s,o,l,c,u,h,f,d,g){gn(e)&&(e=e(l)),Dn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?$a("0"+e.substr(3),n):0));var _=d?d.time():0,m,p,S;if(d&&d.seek(0),isNaN(e)||(e=+e),Ka(e))d&&(e=we.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),o&&Za(o,n,i,!0);else{gn(t)&&(t=t(l));var y=(e||"0").split(" "),x,M,E,A;S=_n(t,l)||vt,x=Pi(S)||{},(!x||!x.left&&!x.top)&&qn(S).display==="none"&&(A=S.style.display,S.style.display="block",x=Pi(S),A?S.style.display=A:S.style.removeProperty("display")),M=$a(y[0],x[i.d]),E=$a(y[1]||"0",n),e=x[i.p]-c[i.p]-u+M+r-E,o&&Za(o,E,i,n-E<20||o._isStart&&E>20),n-=n-E}if(g&&(l[g]=e||-.001,e<0&&(e=0)),s){var R=e+n,v=s._isStart;m="scroll"+i.d2,Za(s,R,i,v&&R>20||!v&&(h?Math.max(vt[m],ai[m]):s.parentNode[m])<=R+1),h&&(c=Pi(o),h&&(s.style[i.op.p]=c[i.op.p]-i.op.m-s._offset+Xt))}return d&&S&&(m=Pi(S),d.seek(f),p=Pi(S),d._caScrollDist=m[i.p]-p[i.p],e=e/d._caScrollDist*f),d&&d.seek(_),d?e:Math.round(e)},zw=/(webkit|moz|length|cssText|inset)/i,gd=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,s,o;if(t===vt){e._stOrig=r.cssText,o=qn(e);for(s in o)!+s&&!zw.test(s)&&o[s]&&typeof r[s]=="string"&&s!=="0"&&(r[s]=o[s]);r.top=n,r.left=i}else r.cssText=e._stOrig;we.core.getCache(e).uncache=1,t.appendChild(e)}},Gm=function(e,t,n){var i=t,r=i;return function(s){var o=Math.round(e());return o!==i&&o!==r&&Math.abs(o-i)>3&&Math.abs(o-r)>3&&(s=o,n&&n()),r=i,i=s,s}},Ba=function(e,t,n){var i={};i[t.p]="+="+n,we.set(e,i)},_d=function(e,t){var n=fr(e,t),i="_scroll"+t.p2,r=function s(o,l,c,u,h){var f=s.tween,d=l.onComplete,g={};c=c||n();var _=Gm(n,c,function(){f.kill(),s.tween=0});return h=u&&h||0,u=u||o-c,f&&f.kill(),l[i]=o,l.modifiers=g,g[i]=function(){return _(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){Qe.cache++,Fi()},l.onComplete=function(){s.tween=0,d&&d.call(f)},f=s.tween=we.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},Ht(e,"wheel",n.wheelHandler),Ge.isTouch&&Ht(e,"touchmove",n.wheelHandler),r},Ge=function(){function a(t,n){bs||a.register(we)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),au(this),this.init(t,n)}var e=a.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!To){this.update=this.refresh=this.kill=fi;return}n=hd(Dn(n)||Ka(n)||n.nodeType?{trigger:n}:n,Fa);var r=n,s=r.onUpdate,o=r.toggleClass,l=r.id,c=r.onToggle,u=r.onRefresh,h=r.scrub,f=r.trigger,d=r.pin,g=r.pinSpacing,_=r.invalidateOnRefresh,m=r.anticipatePin,p=r.onScrubComplete,S=r.onSnapComplete,y=r.once,x=r.snap,M=r.pinReparent,E=r.pinSpacer,A=r.containerAnimation,R=r.fastScrollEnd,v=r.preventOverlaps,b=n.horizontal||n.containerAnimation&&n.horizontal!==!1?mn:Ft,V=!h&&h!==0,O=_n(n.scroller||nt),I=we.core.getCache(O),N=Yr(O),z=("pinType"in n?n.pinType:cr(O,"pinType")||N&&"fixed")==="fixed",$=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],X=V&&n.toggleActions.split(" "),G="markers"in n?n.markers:Fa.markers,ee=N?0:parseFloat(qn(O)["border"+b.p2+io])||0,C=this,ge=n.onRefreshInit&&function(){return n.onRefreshInit(C)},re=Lw(O,N,b),Y=Rw(O,N),J=0,se=0,ce=0,B=fr(O,b),Ae,Me,ae,Se,Be,oe,Ee,Ke,$e,H,tt,Ve,st,Ze,L,w,K,ne,te,le,D,Q,W,ue,de,Te,me,be,Pe,Ue,ut,P,Z,ie,he,ye,at,ht,xt;if(C._startClamp=C._endClamp=!1,C._dir=b,m*=45,C.scroller=O,C.scroll=A?A.time.bind(A):B,Se=B(),C.vars=n,i=i||n.animation,"refreshPriority"in n&&(Em=1,n.refreshPriority===-9999&&(Bo=C)),I.tweenScroll=I.tweenScroll||{top:_d(O,Ft),left:_d(O,mn)},C.tweenTo=Ae=I.tweenScroll[b.p],C.scrubDuration=function(xe){Z=Ka(xe)&&xe,Z?P?P.duration(xe):P=we.to(i,{ease:"expo",totalProgress:"+=0",duration:Z,paused:!0,onComplete:function(){return p&&p(C)}}):(P&&P.progress(1).kill(),P=0)},i&&(i.vars.lazy=!1,i._initted&&!C.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),C.animation=i.pause(),i.scrollTrigger=C,C.scrubDuration(h),Ue=0,l||(l=i.vars.id)),x&&((!Er(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in vt.style&&we.set(N?[vt,ai]:O,{scrollBehavior:"auto"}),Qe.forEach(function(xe){return gn(xe)&&xe.target===(N?St.scrollingElement||ai:O)&&(xe.smooth=!1)}),ae=gn(x.snapTo)?x.snapTo:x.snapTo==="labels"?Dw(i):x.snapTo==="labelsDirectional"?Iw(i):x.directional!==!1?function(xe,Je){return qu(x.snapTo)(xe,dn()-se<500?0:Je.direction)}:we.utils.snap(x.snapTo),ie=x.duration||{min:.1,max:2},ie=Er(ie)?Ps(ie.min,ie.max):Ps(ie,ie),he=we.delayedCall(x.delay||Z/2||.1,function(){var xe=B(),Je=dn()-se<500,Oe=Ae.tween;if((Je||Math.abs(C.getVelocity())<10)&&!Oe&&!El&&J!==xe){var qe=(xe-oe)/Ze,Pt=i&&!V?i.totalProgress():qe,T=Je?0:(Pt-ut)/(dn()-Ya)*1e3||0,k=we.utils.clamp(-qe,1-qe,ys(T/2)*T/.185),j=qe+(x.inertia===!1?0:k),F=Ps(0,1,ae(j,C)),q=Math.round(oe+F*Ze),fe=x,Ce=fe.onStart,ve=fe.onInterrupt,Re=fe.onComplete;if(xe<=Ee&&xe>=oe&&q!==xe){if(Oe&&!Oe._initted&&Oe.data<=ys(q-xe))return;x.inertia===!1&&(k=F-qe),Ae(q,{duration:ie(ys(Math.max(ys(j-Pt),ys(F-Pt))*.185/T/.05||0)),ease:x.ease||"power3",data:ys(q-xe),onInterrupt:function(){return he.restart(!0)&&ve&&ve(C)},onComplete:function(){C.update(),J=B(),Ue=ut=i&&!V?i.totalProgress():C.progress,S&&S(C),Re&&Re(C)}},xe,k*Ze,q-xe-k*Ze),Ce&&Ce(C,Ae.tween)}}else C.isActive&&J!==xe&&he.restart(!0)}).pause()),l&&(cu[l]=C),f=C.trigger=_n(f||d!==!0&&d),xt=f&&f._gsap&&f._gsap.stRevert,xt&&(xt=xt(C)),d=d===!0?f:_n(d),Dn(o)&&(o={targets:f,className:o}),d&&(g===!1||g===Xn||(g=!g&&d.parentNode&&d.parentNode.style&&qn(d.parentNode).display==="flex"?!1:It),C.pin=d,Me=we.core.getCache(d),Me.spacer?L=Me.pinState:(E&&(E=_n(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),Me.spacerIsNative=!!E,E&&(Me.spacerState=za(E))),Me.spacer=ne=E||St.createElement("div"),ne.classList.add("pin-spacer"),l&&ne.classList.add("pin-spacer-"+l),Me.pinState=L=za(d)),n.force3D!==!1&&we.set(d,{force3D:!0}),C.spacer=ne=Me.spacer,Pe=qn(d),ue=Pe[g+b.os2],le=we.getProperty(d),D=we.quickSetter(d,b.a,Xt),Tc(d,ne,Pe),K=za(d)),G){Ve=Er(G)?hd(G,fd):fd,H=ka("scroller-start",l,O,b,Ve,0),tt=ka("scroller-end",l,O,b,Ve,0,H),te=H["offset"+b.op.d2];var De=_n(cr(O,"content")||O);Ke=this.markerStart=ka("start",l,De,b,Ve,te,0,A),$e=this.markerEnd=ka("end",l,De,b,Ve,te,0,A),A&&(ht=we.quickSetter([Ke,$e],b.a,Xt)),!z&&!(vi.length&&cr(O,"fixedMarkers")===!0)&&(Pw(N?vt:O),we.set([H,tt],{force3D:!0}),Te=we.quickSetter(H,b.a,Xt),be=we.quickSetter(tt,b.a,Xt))}if(A){var _e=A.vars.onUpdate,ze=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){C.update(0,0,1),_e&&_e.apply(A,ze||[])})}if(C.previous=function(){return Ye[Ye.indexOf(C)-1]},C.next=function(){return Ye[Ye.indexOf(C)+1]},C.revert=function(xe,Je){if(!Je)return C.kill(!0);var Oe=xe!==!1||!C.enabled,qe=en;Oe!==C.isReverted&&(Oe&&(ye=Math.max(B(),C.scroll.rec||0),ce=C.progress,at=i&&i.progress()),Ke&&[Ke,$e,H,tt].forEach(function(Pt){return Pt.style.display=Oe?"none":"block"}),Oe&&(en=C,C.update(Oe)),d&&(!M||!C.isActive)&&(Oe?Uw(d,ne,L):Tc(d,ne,qn(d),de)),Oe||C.update(Oe),en=qe,C.isReverted=Oe)},C.refresh=function(xe,Je,Oe,qe){if(!((en||!C.enabled)&&!Je)){if(d&&xe&&Jn){Ht(a,"scrollEnd",zm);return}!fn&&ge&&ge(C),en=C,Ae.tween&&!Oe&&(Ae.tween.kill(),Ae.tween=0),P&&P.pause(),_&&i&&i.revert({kill:!1}).invalidate(),C.isReverted||C.revert(!0,!0),C._subPinOffset=!1;var Pt=re(),T=Y(),k=A?A.duration():Oi(O,b),j=Ze<=.01,F=0,q=qe||0,fe=Er(Oe)?Oe.end:n.end,Ce=n.endTrigger||f,ve=Er(Oe)?Oe.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),Re=C.pinnedContainer=n.pinnedContainer&&_n(n.pinnedContainer,C),Ne=f&&Math.max(0,Ye.indexOf(C))||0,Ie=Ne,Le,Fe,Mt,$t,yt,We,ke,gr,Ct,wn,Tn,ti,Gi;for(G&&Er(Oe)&&(ti=we.getProperty(H,b.p),Gi=we.getProperty(tt,b.p));Ie--;)We=Ye[Ie],We.end||We.refresh(0,1)||(en=C),ke=We.pin,ke&&(ke===f||ke===d||ke===Re)&&!We.isReverted&&(wn||(wn=[]),wn.unshift(We),We.revert(!0,!0)),We!==Ye[Ie]&&(Ne--,Ie--);for(gn(ve)&&(ve=ve(C)),ve=ad(ve,"start",C),oe=md(ve,f,Pt,b,B(),Ke,H,C,T,ee,z,k,A,C._startClamp&&"_startClamp")||(d?-.001:0),gn(fe)&&(fe=fe(C)),Dn(fe)&&!fe.indexOf("+=")&&(~fe.indexOf(" ")?fe=(Dn(ve)?ve.split(" ")[0]:"")+fe:(F=$a(fe.substr(2),Pt),fe=Dn(ve)?ve:(A?we.utils.mapRange(0,A.duration(),A.scrollTrigger.start,A.scrollTrigger.end,oe):oe)+F,Ce=f)),fe=ad(fe,"end",C),Ee=Math.max(oe,md(fe||(Ce?"100% 0":k),Ce,Pt,b,B()+F,$e,tt,C,T,ee,z,k,A,C._endClamp&&"_endClamp"))||-.001,F=0,Ie=Ne;Ie--;)We=Ye[Ie],ke=We.pin,ke&&We.start-We._pinPush<=oe&&!A&&We.end>0&&(Le=We.end-(C._startClamp?Math.max(0,We.start):We.start),(ke===f&&We.start-We._pinPush<oe||ke===Re)&&isNaN(ve)&&(F+=Le*(1-We.progress)),ke===d&&(q+=Le));if(oe+=F,Ee+=F,C._startClamp&&(C._startClamp+=F),C._endClamp&&!fn&&(C._endClamp=Ee||-.001,Ee=Math.min(Ee,Oi(O,b))),Ze=Ee-oe||(oe-=.01)&&.001,j&&(ce=we.utils.clamp(0,1,we.utils.normalize(oe,Ee,ye))),C._pinPush=q,Ke&&F&&(Le={},Le[b.a]="+="+F,Re&&(Le[b.p]="-="+B()),we.set([Ke,$e],Le)),d)Le=qn(d),$t=b===Ft,Mt=B(),Q=parseFloat(le(b.a))+q,!k&&Ee>1&&(Tn=(N?St.scrollingElement||ai:O).style,Tn={style:Tn,value:Tn["overflow"+b.a.toUpperCase()]},N&&qn(vt)["overflow"+b.a.toUpperCase()]!=="scroll"&&(Tn.style["overflow"+b.a.toUpperCase()]="scroll")),Tc(d,ne,Le),K=za(d),Fe=Pi(d,!0),gr=z&&fr(O,$t?mn:Ft)(),g&&(de=[g+b.os2,Ze+q+Xt],de.t=ne,Ie=g===It?lu(d,b)+Ze+q:0,Ie&&de.push(b.d,Ie+Xt),Hs(de),Re&&Ye.forEach(function(Lt){Lt.pin===Re&&Lt.vars.pinSpacing!==!1&&(Lt._subPinOffset=!0)}),z&&B(ye)),z&&(yt={top:Fe.top+($t?Mt-oe:gr)+Xt,left:Fe.left+($t?gr:Mt-oe)+Xt,boxSizing:"border-box",position:"fixed"},yt[Fr]=yt["max"+io]=Math.ceil(Fe.width)+Xt,yt[kr]=yt["max"+Xu]=Math.ceil(Fe.height)+Xt,yt[Xn]=yt[Xn+ko]=yt[Xn+Uo]=yt[Xn+zo]=yt[Xn+Fo]="0",yt[It]=Le[It],yt[It+ko]=Le[It+ko],yt[It+Uo]=Le[It+Uo],yt[It+zo]=Le[It+zo],yt[It+Fo]=Le[It+Fo],w=kw(L,yt,M),fn&&B(0)),i?(Ct=i._initted,yc(1),i.render(i.duration(),!0,!0),W=le(b.a)-Q+Ze+q,me=Math.abs(Ze-W)>1,z&&me&&w.splice(w.length-2,2),i.render(0,!0,!0),Ct||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),yc(0)):W=Ze,Tn&&(Tn.value?Tn.style["overflow"+b.a.toUpperCase()]=Tn.value:Tn.style.removeProperty("overflow-"+b.a));else if(f&&B()&&!A)for(Fe=f.parentNode;Fe&&Fe!==vt;)Fe._pinOffset&&(oe-=Fe._pinOffset,Ee-=Fe._pinOffset),Fe=Fe.parentNode;wn&&wn.forEach(function(Lt){return Lt.revert(!1,!0)}),C.start=oe,C.end=Ee,Se=Be=fn?ye:B(),!A&&!fn&&(Se<ye&&B(ye),C.scroll.rec=0),C.revert(!1,!0),se=dn(),he&&(J=-1,he.restart(!0)),en=0,i&&V&&(i._initted||at)&&i.progress()!==at&&i.progress(at||0,!0).render(i.time(),!0,!0),(j||ce!==C.progress||A)&&(i&&!V&&i.totalProgress(A&&oe<-.001&&!ce?we.utils.normalize(oe,Ee,0):ce,!0),C.progress=j||(Se-oe)/Ze===ce?0:ce),d&&g&&(ne._pinOffset=Math.round(C.progress*W)),P&&P.invalidate(),isNaN(ti)||(ti-=we.getProperty(H,b.p),Gi-=we.getProperty(tt,b.p),Ba(H,b,ti),Ba(Ke,b,ti-(qe||0)),Ba(tt,b,Gi),Ba($e,b,Gi-(qe||0))),j&&!fn&&C.update(),u&&!fn&&!st&&(st=!0,u(C),st=!1)}},C.getVelocity=function(){return(B()-Be)/(dn()-Ya)*1e3||0},C.endAnimation=function(){yo(C.callbackAnimation),i&&(P?P.progress(1):i.paused()?V||yo(i,C.direction<0,1):yo(i,i.reversed()))},C.labelToScroll=function(xe){return i&&i.labels&&(oe||C.refresh()||oe)+i.labels[xe]/i.duration()*Ze||0},C.getTrailing=function(xe){var Je=Ye.indexOf(C),Oe=C.direction>0?Ye.slice(0,Je).reverse():Ye.slice(Je+1);return(Dn(xe)?Oe.filter(function(qe){return qe.vars.preventOverlaps===xe}):Oe).filter(function(qe){return C.direction>0?qe.end<=oe:qe.start>=Ee})},C.update=function(xe,Je,Oe){if(!(A&&!Oe&&!xe)){var qe=fn===!0?ye:C.scroll(),Pt=xe?0:(qe-oe)/Ze,T=Pt<0?0:Pt>1?1:Pt||0,k=C.progress,j,F,q,fe,Ce,ve,Re,Ne;if(Je&&(Be=Se,Se=A?B():qe,x&&(ut=Ue,Ue=i&&!V?i.totalProgress():T)),m&&!T&&d&&!en&&!Ia&&Jn&&oe<qe+(qe-Be)/(dn()-Ya)*m&&(T=1e-4),T!==k&&C.enabled){if(j=C.isActive=!!T&&T<1,F=!!k&&k<1,ve=j!==F,Ce=ve||!!T!=!!k,C.direction=T>k?1:-1,C.progress=T,Ce&&!en&&(q=T&&!k?0:T===1?1:k===1?2:3,V&&(fe=!ve&&X[q+1]!=="none"&&X[q+1]||X[q],Ne=i&&(fe==="complete"||fe==="reset"||fe in i))),v&&(ve||Ne)&&(Ne||h||!i)&&(gn(v)?v(C):C.getTrailing(v).forEach(function(Mt){return Mt.endAnimation()})),V||(P&&!en&&!Ia?(P._dp._time-P._start!==P._time&&P.render(P._dp._time-P._start),P.resetTo?P.resetTo("totalProgress",T,i._tTime/i._tDur):(P.vars.totalProgress=T,P.invalidate().restart())):i&&i.totalProgress(T,!!(en&&(se||xe)))),d){if(xe&&g&&(ne.style[g+b.os2]=ue),!z)D(Ao(Q+W*T));else if(Ce){if(Re=!xe&&T>k&&Ee+1>qe&&qe+1>=Oi(O,b),M)if(!xe&&(j||Re)){var Ie=Pi(d,!0),Le=qe-oe;gd(d,vt,Ie.top+(b===Ft?Le:0)+Xt,Ie.left+(b===Ft?0:Le)+Xt)}else gd(d,ne);Hs(j||Re?w:K),me&&T<1&&j||D(Q+(T===1&&!Re?W:0))}}x&&!Ae.tween&&!en&&!Ia&&he.restart(!0),o&&(ve||y&&T&&(T<1||!Mc))&&pl(o.targets).forEach(function(Mt){return Mt.classList[j||y?"add":"remove"](o.className)}),s&&!V&&!xe&&s(C),Ce&&!en?(V&&(Ne&&(fe==="complete"?i.pause().totalProgress(1):fe==="reset"?i.restart(!0).pause():fe==="restart"?i.restart(!0):i[fe]()),s&&s(C)),(ve||!Mc)&&(c&&ve&&bc(C,c),$[q]&&bc(C,$[q]),y&&(T===1?C.kill(!1,1):$[q]=0),ve||(q=T===1?1:3,$[q]&&bc(C,$[q]))),R&&!j&&Math.abs(C.getVelocity())>(Ka(R)?R:2500)&&(yo(C.callbackAnimation),P?P.progress(1):yo(i,fe==="reverse"?1:!T,1))):V&&s&&!en&&s(C)}if(be){var Fe=A?qe/A.duration()*(A._caScrollDist||0):qe;Te(Fe+(H._isFlipped?1:0)),be(Fe)}ht&&ht(-qe/A.duration()*(A._caScrollDist||0))}},C.enable=function(xe,Je){C.enabled||(C.enabled=!0,Ht(O,"resize",Eo),N||Ht(O,"scroll",Ms),ge&&Ht(a,"refreshInit",ge),xe!==!1&&(C.progress=ce=0,Se=Be=J=B()),Je!==!1&&C.refresh())},C.getTween=function(xe){return xe&&Ae?Ae.tween:P},C.setPositions=function(xe,Je,Oe,qe){if(A){var Pt=A.scrollTrigger,T=A.duration(),k=Pt.end-Pt.start;xe=Pt.start+k*xe/T,Je=Pt.start+k*Je/T}C.refresh(!1,!1,{start:ld(xe,Oe&&!!C._startClamp),end:ld(Je,Oe&&!!C._endClamp)},qe),C.update()},C.adjustPinSpacing=function(xe){if(de&&xe){var Je=de.indexOf(b.d)+1;de[Je]=parseFloat(de[Je])+xe+Xt,de[1]=parseFloat(de[1])+xe+Xt,Hs(de)}},C.disable=function(xe,Je){if(C.enabled&&(xe!==!1&&C.revert(!0,!0),C.enabled=C.isActive=!1,Je||P&&P.pause(),ye=0,Me&&(Me.uncache=1),ge&&Vt(a,"refreshInit",ge),he&&(he.pause(),Ae.tween&&Ae.tween.kill()&&(Ae.tween=0)),!N)){for(var Oe=Ye.length;Oe--;)if(Ye[Oe].scroller===O&&Ye[Oe]!==C)return;Vt(O,"resize",Eo),N||Vt(O,"scroll",Ms)}},C.kill=function(xe,Je){C.disable(xe,Je),P&&!Je&&P.kill(),l&&delete cu[l];var Oe=Ye.indexOf(C);Oe>=0&&Ye.splice(Oe,1),Oe===hn&&Ja>0&&hn--,Oe=0,Ye.forEach(function(qe){return qe.scroller===C.scroller&&(Oe=1)}),Oe||fn||(C.scroll.rec=0),i&&(i.scrollTrigger=null,xe&&i.revert({kill:!1}),Je||i.kill()),Ke&&[Ke,$e,H,tt].forEach(function(qe){return qe.parentNode&&qe.parentNode.removeChild(qe)}),Bo===C&&(Bo=0),d&&(Me&&(Me.uncache=1),Oe=0,Ye.forEach(function(qe){return qe.pin===d&&Oe++}),Oe||(Me.spacer=0)),n.onKill&&n.onKill(C)},Ye.push(C),C.enable(!1,!1),xt&&xt(C),i&&i.add&&!Ze){var lt=C.update;C.update=function(){C.update=lt,oe||Ee||C.refresh()},we.delayedCall(.01,C.update),Ze=.01,oe=Ee=0}else C.refresh();d&&Nw()},a.register=function(n){return bs||(we=n||Im(),Dm()&&window.document&&a.enable(),bs=To),bs},a.defaults=function(n){if(n)for(var i in n)Fa[i]=n[i];return Fa},a.disable=function(n,i){To=0,Ye.forEach(function(s){return s[i?"kill":"disable"](n)}),Vt(nt,"wheel",Ms),Vt(St,"scroll",Ms),clearInterval(Da),Vt(St,"touchcancel",fi),Vt(vt,"touchstart",fi),Na(Vt,St,"pointerdown,touchstart,mousedown",cd),Na(Vt,St,"pointerup,touchend,mouseup",ud),dl.kill(),Oa(Vt);for(var r=0;r<Qe.length;r+=3)Ua(Vt,Qe[r],Qe[r+1]),Ua(Vt,Qe[r],Qe[r+2])},a.enable=function(){if(nt=window,St=document,ai=St.documentElement,vt=St.body,we&&(pl=we.utils.toArray,Ps=we.utils.clamp,au=we.core.context||fi,yc=we.core.suppressOverwrites||fi,Vu=nt.history.scrollRestoration||"auto",uu=nt.pageYOffset,we.core.globals("ScrollTrigger",a),vt)){To=1,Vs=document.createElement("div"),Vs.style.height="100vh",Vs.style.position="absolute",Hm(),Cw(),Ut.register(we),a.isTouch=Ut.isTouch,$i=Ut.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Ht(nt,"wheel",Ms),Am=[nt,St,ai,vt],we.matchMedia?(a.matchMedia=function(l){var c=we.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},we.addEventListener("matchMediaInit",function(){return ju()}),we.addEventListener("matchMediaRevert",function(){return Bm()}),we.addEventListener("matchMedia",function(){Pr(0,1),$r("matchMedia")}),we.matchMedia("(orientation: portrait)",function(){return wc(),wc})):console.warn("Requires GSAP 3.11.0 or later"),wc(),Ht(St,"scroll",Ms);var n=vt.style,i=n.borderTopStyle,r=we.core.Animation.prototype,s,o;for(r.revert||Object.defineProperty(r,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",s=Pi(vt),Ft.m=Math.round(s.top+Ft.sc())||0,mn.m=Math.round(s.left+mn.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),Da=setInterval(dd,250),we.delayedCall(.5,function(){return Ia=0}),Ht(St,"touchcancel",fi),Ht(vt,"touchstart",fi),Na(Ht,St,"pointerdown,touchstart,mousedown",cd),Na(Ht,St,"pointerup,touchend,mouseup",ud),ou=we.utils.checkPrefix("transform"),Qa.push(ou),bs=dn(),dl=we.delayedCall(.2,Pr).pause(),ws=[St,"visibilitychange",function(){var l=nt.innerWidth,c=nt.innerHeight;St.hidden?(sd=l,od=c):(sd!==l||od!==c)&&Eo()},St,"DOMContentLoaded",Pr,nt,"load",Pr,nt,"resize",Eo],Oa(Ht),Ye.forEach(function(l){return l.enable(0,1)}),o=0;o<Qe.length;o+=3)Ua(Vt,Qe[o],Qe[o+1]),Ua(Vt,Qe[o],Qe[o+2])}},a.config=function(n){"limitCallbacks"in n&&(Mc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Da)||(Da=i)&&setInterval(dd,i),"ignoreMobileResize"in n&&(Lm=a.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Oa(Vt)||Oa(Ht,n.autoRefreshEvents||"none"),Cm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},a.scrollerProxy=function(n,i){var r=_n(n),s=Qe.indexOf(r),o=Yr(r);~s&&Qe.splice(s,o?6:2),i&&(o?vi.unshift(nt,i,vt,i,ai,i):vi.unshift(r,i))},a.clearMatchMedia=function(n){Ye.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},a.isInViewport=function(n,i,r){var s=(Dn(n)?_n(n):n).getBoundingClientRect(),o=s[r?Fr:kr]*i||0;return r?s.right-o>0&&s.left+o<nt.innerWidth:s.bottom-o>0&&s.top+o<nt.innerHeight},a.positionInViewport=function(n,i,r){Dn(n)&&(n=_n(n));var s=n.getBoundingClientRect(),o=s[r?Fr:kr],l=i==null?o/2:i in ml?ml[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return r?(s.left+l)/nt.innerWidth:(s.top+l)/nt.innerHeight},a.killAll=function(n){if(Ye.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=Kr.killAll||[];Kr={},i.forEach(function(r){return r()})}},a}();Ge.version="3.12.2";Ge.saveStyles=function(a){return a?pl(a).forEach(function(e){if(e&&e.style){var t=Pn.indexOf(e);t>=0&&Pn.splice(t,5),Pn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),we.core.getCache(e),au())}}):Pn};Ge.revert=function(a,e){return ju(!a,e)};Ge.create=function(a,e){return new Ge(a,e)};Ge.refresh=function(a){return a?Eo():(bs||Ge.register())&&Pr(!0)};Ge.update=function(a){return++Qe.cache&&Fi(a===!0?2:0)};Ge.clearScrollMemory=Vm;Ge.maxScroll=function(a,e){return Oi(a,e?mn:Ft)};Ge.getScrollFunc=function(a,e){return fr(_n(a),e?mn:Ft)};Ge.getById=function(a){return cu[a]};Ge.getAll=function(){return Ye.filter(function(a){return a.vars.id!=="ScrollSmoother"})};Ge.isScrolling=function(){return!!Jn};Ge.snapDirectional=qu;Ge.addEventListener=function(a,e){var t=Kr[a]||(Kr[a]=[]);~t.indexOf(e)||t.push(e)};Ge.removeEventListener=function(a,e){var t=Kr[a],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Ge.batch=function(a,e){var t=[],n={},i=e.interval||.016,r=e.batchMax||1e9,s=function(c,u){var h=[],f=[],d=we.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(g){h.length||d.restart(!0),h.push(g.trigger),f.push(g),r<=h.length&&d.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&gn(e[o])&&o!=="onRefreshInit"?s(o,e[o]):e[o];return gn(r)&&(r=r(),Ht(Ge,"refresh",function(){return r=e.batchMax()})),pl(a).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(Ge.create(c))}),t};var xd=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Ac=function a(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Ut.isTouch?" pinch-zoom":""):"none",e===ai&&a(vt,t)},Va={auto:1,scroll:1},Bw=function(e){var t=e.event,n=e.target,i=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,s=r._gsap||we.core.getCache(r),o=dn(),l;if(!s._isScrollT||o-s._isScrollT>2e3){for(;r&&r!==vt&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(Va[(l=qn(r)).overflowY]||Va[l.overflowX]));)r=r.parentNode;s._isScroll=r&&r!==n&&!Yr(r)&&(Va[(l=qn(r)).overflowY]||Va[l.overflowX]),s._isScrollT=o}(s._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Wm=function(e,t,n,i){return Ut.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&Bw,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Ht(St,Ut.eventTypes[0],yd,!1,!0)},onDisable:function(){return Vt(St,Ut.eventTypes[0],yd,!0)}})},Vw=/(input|label|select|textarea)/i,vd,yd=function(e){var t=Vw.test(e.target.tagName);(t||vd)&&(e._gsapAllow=!0,vd=t)},Hw=function(e){Er(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,r=t.allowNestedScroll,s=t.onRelease,o,l,c=_n(e.target)||ai,u=we.core.globals().ScrollSmoother,h=u&&u.get(),f=$i&&(e.content&&_n(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=fr(c,Ft),g=fr(c,mn),_=1,m=(Ut.isTouch&&nt.visualViewport?nt.visualViewport.scale*nt.visualViewport.width:nt.outerWidth)/nt.innerWidth,p=0,S=gn(i)?function(){return i(o)}:function(){return i||2.8},y,x,M=Wm(c,e.type,!0,r),E=function(){return x=!1},A=fi,R=fi,v=function(){l=Oi(c,Ft),R=Ps($i?1:0,l),n&&(A=Ps(0,Oi(c,mn))),y=zr},b=function(){f._gsap.y=Ao(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},V=function(){if(x){requestAnimationFrame(E);var G=Ao(o.deltaY/2),ee=R(d.v-G);if(f&&ee!==d.v+d.offset){d.offset=ee-d.v;var C=Ao((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+C+", 0, 1)",f._gsap.y=C+"px",d.cacheID=Qe.cache,Fi()}return!0}d.offset&&b(),x=!0},O,I,N,z,$=function(){v(),O.isActive()&&O.vars.scrollY>l&&(d()>l?O.progress(1)&&d(l):O.resetTo("scrollY",l))};return f&&we.set(f,{y:"+=0"}),e.ignoreCheck=function(X){return $i&&X.type==="touchmove"&&V()||_>1.05&&X.type!=="touchstart"||o.isGesturing||X.touches&&X.touches.length>1},e.onPress=function(){x=!1;var X=_;_=Ao((nt.visualViewport&&nt.visualViewport.scale||1)/m),O.pause(),X!==_&&Ac(c,_>1.01?!0:n?!1:"x"),I=g(),N=d(),v(),y=zr},e.onRelease=e.onGestureStart=function(X,G){if(d.offset&&b(),!G)z.restart(!0);else{Qe.cache++;var ee=S(),C,ge;n&&(C=g(),ge=C+ee*.05*-X.velocityX/.227,ee*=xd(g,C,ge,Oi(c,mn)),O.vars.scrollX=A(ge)),C=d(),ge=C+ee*.05*-X.velocityY/.227,ee*=xd(d,C,ge,Oi(c,Ft)),O.vars.scrollY=R(ge),O.invalidate().duration(ee).play(.01),($i&&O.vars.scrollY>=l||C>=l-1)&&we.to({},{onUpdate:$,duration:ee})}s&&s(X)},e.onWheel=function(){O._ts&&O.pause(),dn()-p>1e3&&(y=0,p=dn())},e.onChange=function(X,G,ee,C,ge){if(zr!==y&&v(),G&&n&&g(A(C[2]===G?I+(X.startX-X.x):g()+G-C[1])),ee){d.offset&&b();var re=ge[2]===ee,Y=re?N+X.startY-X.y:d()+ee-ge[1],J=R(Y);re&&Y!==J&&(N+=J-Y),d(J)}(ee||G)&&Fi()},e.onEnable=function(){Ac(c,n?!1:"x"),Ge.addEventListener("refresh",$),Ht(nt,"resize",$),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),M.enable()},e.onDisable=function(){Ac(c,!0),Vt(nt,"resize",$),Ge.removeEventListener("refresh",$),M.kill()},e.lockAxis=e.lockAxis!==!1,o=new Ut(e),o.iOS=$i,$i&&!d()&&d(1),$i&&we.ticker.add(fi),z=o._dc,O=we.to(o,{ease:"power4",paused:!0,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Gm(d,d(),function(){return O.pause()})},onUpdate:Fi,onComplete:z.vars.onComplete}),o};Ge.sort=function(a){return Ye.sort(a||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};Ge.observe=function(a){return new Ut(a)};Ge.normalizeScroll=function(a){if(typeof a>"u")return Rn;if(a===!0&&Rn)return Rn.enable();if(a===!1)return Rn&&Rn.kill();var e=a instanceof Ut?a:Hw(a);return Rn&&Rn.target===e.target&&Rn.kill(),Yr(e.target)&&(Rn=e),e};Ge.core={_getVelocityProp:su,_inputObserver:Wm,_scrollers:Qe,_proxies:vi,bridge:{ss:function(){Jn||$r("scrollStart"),Jn=dn()},ref:function(){return en}}};Im()&&we.registerPlugin(Ge);class Gw{constructor(){this.experience=new Qn,this.scene=this.experience.scene,this.sizes=this.experience.sizes,this.resources=this.experience.resources,this.time=this.experience.time,this.camera=this.experience.camera,this.room=this.experience.world.room.actualRoom,this.tableDecoration=this.experience.world.room.tableDecoration,un.registerPlugin(Ge),this.setScrollTriggers()}setPath(){this.timeline=new un.timeline,this.timeline.to(this.room.position,{x:()=>this.sizes.width*.00125,scrollTrigger:{trigger:".first-move",start:"top top",end:"bottom bottom",scrub:.6,invalidateOnRefresh:!0}})}setScrollTriggers(){this.setScrollTriggersDesktop(),this.setScrollTriggersMobile(),this.setScrollTriggersAll(),this.setScrollTriggerTableDecorationDesktop(),this.setScrollTriggerTableDecorationMobile()}setScrollTriggersDesktop(){Ge.matchMedia({"(min-width: 969px)":()=>{this.room.scale.set(.34,.34,.34),this.firstMoveTimeline=new un.timeline({scrollTrigger:{trigger:".first-move",start:"top top",end:"bottom bottom",scrub:.6,invalidateOnRefresh:!0}}),this.firstMoveTimeline.to(this.room.position,{x:()=>this.sizes.width*.0014}),this.secondMoveTimeline=new un.timeline({scrollTrigger:{trigger:".second-move",start:"top top",end:"bottom bottom",scrub:.6,invalidateOnRefresh:!0}}).to(this.room.position,{x:-1.2,z:()=>this.sizes.height*.0032},"same").to(this.room.scale,{x:1.1,y:1.1,z:1.1},"same"),this.thirdMoveTimeline=new un.timeline({scrollTrigger:{trigger:".third-move",start:"top top",end:"bottom bottom",scrub:.6,invalidateOnRefresh:!0}}).to(this.room.position,{x:3.4,z:()=>this.sizes.height*.0032},"same").to(this.room.scale,{x:1.1,y:1.1,z:1.1},"same").to(this.room.scale,{x:1.1,y:1.1,z:1.1},"same")}})}setScrollTriggersMobile(){Ge.matchMedia({"(max-width: 968px)":()=>{this.room.scale.set(.18,.18,.18),this.room.position.set(0,0,0),this.firstMoveTimeline=new un.timeline({scrollTrigger:{trigger:".first-move",start:"top top",end:"bottom bottom",scrub:.6,invalidateOnRefresh:!0}}).to(this.room.scale,{x:.21,y:.21,z:.21}),this.secondMoveTimeline=new un.timeline({scrollTrigger:{trigger:".second-move",start:"top top",end:"bottom bottom",scrub:.6,invalidateOnRefresh:!0}}).to(this.room.scale,{x:.45,y:.45,z:.45},"same").to(this.room.position,{x:.4},"same")}})}setScrollTriggersAll(){Ge.matchMedia({all:()=>{this.sections=document.querySelectorAll(".section"),this.sections.forEach(e=>{this.progressWrapper=e.querySelector(".progress-wrapper"),e.classList.contains("right")?(un.to(e,{borderTopLeftRadius:10,scrollTrigger:{trigger:e,start:"top bottom",end:"top top",scrub:.6}}),un.to(e,{borderBottomLeftRadius:600,scrollTrigger:{trigger:e,start:"bottom bottom",end:"bottom top",scrub:.6}})):(un.to(e,{borderTopRightRadius:10,scrollTrigger:{trigger:e,start:"top bottom",end:"top top",scrub:.6}}),un.to(e,{borderBottomRightRadius:600,scrollTrigger:{trigger:e,start:"bottom bottom",end:"bottom top",scrub:.6}}))})}})}setScrollTriggerTableDecorationDesktop(){this.tableDecoration.forEach(e=>{Ge.matchMedia({"(min-width: 969px)":()=>{this.secondMoveTimeline=new un.timeline({scrollTrigger:{trigger:".second-move",start:"top top",end:"bottom bottom",scrub:6,invalidateOnRefresh:!0}}).to(e.position,{y:e.position.y+.6},"same")}})})}setScrollTriggerTableDecorationMobile(){this.tableDecoration.forEach(e=>{Ge.matchMedia({"(max-width: 968px)":()=>{this.secondMoveTimeline=new un.timeline({scrollTrigger:{trigger:".second-move",start:"top top",end:"bottom bottom",scrub:6,invalidateOnRefresh:!0}}).to(e.position,{y:e.position.y+.6},"same")}})})}resize(){}update(){}}class Ww{constructor(){this.experience=new Qn,this.scene=this.experience.scene,this.resources=this.experience.resources,this.setSunLight()}setSunLight(){this.sunLight=new sp("#ffffff",3),this.sunLight.castShadow=!0,this.sunLight.shadow.camera.far=20,this.sunLight.shadow.mapSize.set(2048,2048),this.sunLight.shadow.normalBias=.05,this.sunLight.position.set(-1.5,7,3),this.scene.add(this.sunLight);const e=new NM("#ffffff",.8);this.scene.add(e)}resize(){}update(){}}class Xw{constructor(){this.experience=new Qn,this.scene=this.experience.scene,this.setFloor()}setFloor(){this.geometry=new xl(100,100),this.material=new Ml({color:16777215}),this.plane=new Un(this.geometry,this.material),this.scene.add(this.plane),this.plane.rotation.x=-Math.PI/2,this.plane.position.y=-.3,this.plane.receiveShadow=!0}resize(){}update(){}}class qw{constructor(){this.experience=new Qn,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.canvas=this.experience.canvas,this.camera=this.experience.camera,this.resources=this.experience.resources,this.resources.on("assetsLoaded",()=>{this.environment=new Ww,this.room=new Tw,this.Floor=new Xw,this.controls=new Gw})}resize(){}update(){this.room&&this.room.update(),this.controls&&this.controls.update()}}class jw{constructor(){this.init()}init(){var e=document.getElementById("img-modal");Array.from(document.getElementsByClassName("render")).forEach(function(n,i,r){var s=document.getElementById("modal-img"),o=document.getElementById("caption");n.onclick=function(){e.style.display="block",s.src=this.src,o.innerHTML=this.alt}});var t=document.getElementsByClassName("close")[0];t.onclick=function(){e.style.display="none"}}}const Vo=class{constructor(e){if(Vo.instance)return Vo.instance;Vo.instance=this,this.canvas=e,this.scene=new aM,this.time=new rS,this.sizes=new iS,this.camera=new HS,this.renderer=new WS,this.resources=new zS(BS),this.language=new GS,this.world=new qw,this.imageModal=new jw,this.time.on("update",()=>{this.update()}),this.sizes.on("resize",()=>{this.resize()})}resize(){this.camera.resize(),this.renderer.resize(),this.world.resize()}update(){this.camera.update(),this.renderer.update(),this.world.update()}};let Qn=Vo;Ku(Qn,"instance");new Qn(document.querySelector(".experience-canvas"));
