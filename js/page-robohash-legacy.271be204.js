(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-robohash"],{"0f0d":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"max-w-full relative"},[t.loading?s("ProgressBar"):t._e(),s("AvatarImage",t._b({},"AvatarImage",{src:t.src,email:t.email},!1)),s("InputCopy",{staticClass:"mb-5",attrs:{value:t.src}}),s("Options",{attrs:{set:t.set,size:t.size,bgset:t.bgset},on:{"update:set":function(e){t.set=e},"update:size":function(e){t.size=e},"update:bgset":function(e){t.bgset=e}}}),s("GeneratorLink",{attrs:{href:"https://robohash.org"}})],1)},n=[],o=(s("99af"),s("e45e")),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex flex-wrap -mx-3 mb-2"},[s("v-select",{staticClass:"w-full md:w-1/3 px-3 mb-6 md:mb-0",attrs:{options:t.$options.sets,name:"set",label:"set",value:t.set},on:{input:function(e){return t.$emit("update:set",e)}}}),s("v-select",{staticClass:"w-full md:w-1/3 px-3 mb-6 md:mb-0",attrs:{options:t.$options.bgsets,name:"bg",label:"bg",value:t.bgset},on:{input:function(e){return t.$emit("update:bgset",e)}}}),s("v-select",{staticClass:"w-full md:w-1/3 px-3 mb-6 md:mb-0",attrs:{options:t.$options.sizes,name:"size",label:"size",value:t.size},on:{input:function(e){return t.$emit("update:size",e)}}})],1)},r=[],l=s("d5fd"),c=s("3983"),u=s("77dd"),b=[{value:"set1",label:"generic"},{value:"set3",label:"sexy robot"},{value:"set2",label:"monster"},{value:"set4",label:"cat"}],p=Object(u["a"])([{label:"none",value:""},"bg1","bg2"]),m={components:{VSelect:l["a"]},sets:b,bgsets:p,sizes:c["c"],props:{set:String,size:String,bgset:String}},d=m,g=s("2877"),f=Object(g["a"])(d,i,r,!1,null,null,null),h=f.exports,v={name:"page-robohash",title:"RoboHash",components:{Options:h},extends:o["a"],data:function(){return{set:"set4",bgset:"",size:"400"}},computed:{src:function(){var t=this.hash,e=this.set,s=this.bgset,a=this.size;return"https://robohash.org/".concat(t,"?set=").concat(e,"&bgset=").concat(s,"&size=").concat(a,"x").concat(a)}}},w=v,z=Object(g["a"])(w,a,n,!1,null,null,null);e["default"]=z.exports},3983:function(t,e,s){"use strict";s.d(e,"a",(function(){return n})),s.d(e,"b",(function(){return o})),s.d(e,"c",(function(){return i}));var a=s("77dd"),n=Object(a["a"])(["404","mp","identicon","monsterid","wavatar","retro","robohash","blank"]),o=Object(a["a"])(["g","pg","r","x"]),i=Object(a["a"])(["200","400","600","800"])}}]);
//# sourceMappingURL=page-robohash-legacy.271be204.js.map