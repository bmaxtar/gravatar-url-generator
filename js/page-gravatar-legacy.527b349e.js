(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-gravatar"],{"0580":function(a,t,n){"use strict";n.r(t);var e=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticClass:"max-w-full relative"},[a.loading?n("ProgressBar"):a._e(),n("AvatarImage",a._b({},"AvatarImage",{src:a.src,email:a.email},!1)),n("InputCopy",{staticClass:"mb-5",attrs:{value:a.src}}),n("Options",{attrs:{fallback:a.fallback,size:a.size,rating:a.rating},on:{"update:fallback":function(t){a.fallback=t},"update:size":function(t){a.size=t},"update:rating":function(t){a.rating=t}}}),n("GeneratorLink",{attrs:{href:"https://gravatar.com"}})],1)},s=[],r=(n("99af"),function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticClass:"flex flex-wrap -mx-3 mb-2"},[n("v-select",{staticClass:"w-full md:w-1/3 px-3 mb-6 md:mb-0",attrs:{options:a.$options.sizes,name:"size",label:"size",value:a.size},on:{input:function(t){return a.$emit("update:size",t)}}}),n("v-select",{staticClass:"w-full md:w-1/3 px-3 mb-6 md:mb-0",attrs:{options:a.$options.fallbacks,name:"fallback",label:"default",value:a.fallback},on:{input:function(t){return a.$emit("update:fallback",t)}}}),n("v-select",{staticClass:"w-full md:w-1/3 px-3 mb-6 md:mb-0",attrs:{options:a.$options.ratings,name:"ratings",label:"rating",value:a.rating},on:{input:function(t){return a.$emit("update:rating",t)}}})],1)}),i=[],l=n("d5fd"),c=n("3983"),o={name:"gravatar-options",components:{VSelect:l["a"]},fallbacks:c["a"],sizes:c["c"],ratings:c["b"],props:["rating","size","fallback"]},u=o,p=n("2877"),f=Object(p["a"])(u,r,i,!1,null,null,null),m=f.exports,b=n("e45e"),d={name:"page-gravatar",title:"Gravatar",components:{Options:m},extends:b["a"],data:function(){return{fallback:"robohash",rating:"x",size:"400"}},computed:{src:function(){var a=this.hash,t=this.fallback,n=this.size,e=this.rating;return"https://gravatar.com/avatar/".concat(a,"?s=").concat(n,"&d=").concat(t,"&r=").concat(e)}}},g=d,v=Object(p["a"])(g,e,s,!1,null,null,null);t["default"]=v.exports},3983:function(a,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i}));var e=n("77dd"),s=Object(e["a"])(["404","mp","identicon","monsterid","wavatar","retro","robohash","blank"]),r=Object(e["a"])(["g","pg","r","x"]),i=Object(e["a"])(["200","400","600","800"])}}]);
//# sourceMappingURL=page-gravatar-legacy.527b349e.js.map