(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{199:function(t,e,o){"use strict";o.r(e);o(84),o(20),o(21),o(10),o(67),o(14),o(129);var n=o(60),r=o(40),l=o.n(r),c=o(46),d={props:["item"]},m=o(27);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var h={data:function(){return{id:"",location:"",search:"",desc:"",weight:"",volume:"",dimension:"",sensor:"",generalData:"",selectedComponents:[],phaseOne:!1,firstIt:!1,loading:!1,error:!1,qr:"",i:0,long:"",lat:""}},asyncData:function(t){t.app,t.params;var e=t.store;return l.a.get(e.state.settings.api+"/Item").then((function(t){return{items:t.data}}))},components:{SelectComponent:Object(m.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"block bg-gray-200 p-3 mt-2 rounded cursor-pointer"},[e("p",{staticClass:"truncate"},[this._v(this._s(this.item.description)+" "),e("span",{staticClass:"text-xs font-mono"},[this._v(this._s(this.item.itemId))])])])])}),[],!1,null,null,null).exports},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)({api:function(t){return t.settings.api}}),{searchResults:function(){var t=this,e={};return e=t.items.filter((function(t){return"C"===t.itemId.charAt(0)&&"O"===t.itemId.charAt(1)&&"CONSUMED"!==t.status})),""===t.search?e:e=e.filter((function(e){return-1!==e.description.toLowerCase().indexOf(t.search.toLowerCase().trim())||-1!==e.itemId.toLowerCase().indexOf(t.search.toLowerCase().trim())}))},selectedID:function(){return this.items.filter((function(t){return!1}))}}),methods:{getLocation:function(){navigator.geolocation.getCurrentPosition(this.buildCoords,this.geoError)},buildCoords:function(t){this.lat=String(t.coords.latitude),this.long=String(t.coords.longitude)},geoError:function(t){this.lat="0",this.long="0"},changePhase:function(){var t=this.$store.state.settings.api;this.phaseOne=!0,this.selectedComponents.filter((function(e){l.a.put(t+"/Item/"+e.itemId,{$class:"es.deusto.supplychain.Item",type:"COMPONENT",description:e.description,status:"CONSUMED",owner:e.owner,lastLocation:e.lastLocation,maker:e.maker,weight:e.weight,volume:e.volume,dimension:e.dimension,sensor1:e.sensor1,generalData:e.generalData,long:e.long,lat:e.lat,active:"true"}).then((function(t){console.log(t)}))}))},deselectResult:function(component){var t=this.searchResults.indexOf(component);return t>-1&&this.searchResults.splice(t,1),this.searchResults},selectResult:function(t){return this.searchResults.push(t),this.searchResults},selectComponent:function(t){return this.selectedComponents.push(t),this.selectedComponents},selectID:function(t){return this.selectedID.push(t.itemId),this.selectedID},deselectComponent:function(component){var t=this.selectedComponents.indexOf(component);return t>-1&&this.selectedComponents.splice(t,1),this.selectedComponents},deselectID:function(t){var e=this.selectedID.indexOf(t.itemId);return e>-1&&this.selectedID.splice(e,1),this.selectedID},send:function(){var t=this;if(t.loading=!0,t.error=!1,"P"!==t.id.charAt(0)&&"R"!==t.id.charAt(1))t.error=!0,t.loading=!1;else{this.$store.state.settings.api;l.a.post(this.$store.state.settings.api+"/Item",{$class:"es.deusto.supplychain.Item",type:"PRODUCT",itemId:this.id,description:this.desc,status:"IDLE",owner:$user.name,lastLocation:this.location,maker:$user.name,items:this.selectedID,weight:this.weight,volume:this.volume,dimension:this.dimension,sensor1:this.sensor,generalData:this.generalData,long:this.long,lat:this.lat}).then((function(e){console.log(e),t.qr=e.data.$class+"#"+e.data.itemId,t.loading=!1})).catch((function(e){console.log(e),t.error=!0,t.loading=!1}))}}}},f=Object(m.a)(h,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container mx-auto p-4"},[t._m(0),t._v(" "),t.phaseOne?t._e():o("div",{staticClass:"container mx-auto p-4"},[t._v("Fase 1: Seleccione los componentes que forman el producto.\n    "),o("div",{staticClass:"w-full mt-4 mb-4"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal",attrs:{type:"email",placeholder:"Filtrar resultados..."},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})]),t._v(" "),o("p",[t._v(" Listado de componentes: ")]),t._v(" "),t._l(t.searchResults,(function(e){return o("div",{on:{click:function(o){t.selectComponent(e)&&t.selectID(e)&&t.deselectResult(e)}}},[o("SelectComponent",{attrs:{item:e}})],1)})),t._v(" "),0==t.searchResults.length?o("div",[o("p",{staticClass:"text-gray-600"},[t._v("Ningún resultado.")])]):t._e(),t._v(" "),o("p",[t._v(" Componentes seleccionados: ")]),t._v(" "),t._l(t.selectedComponents,(function(e){return o("div",{on:{click:function(o){t.deselectComponent(e)&&t.deselectID(e)&&t.selectResult(e)}}},[o("SelectComponent",{attrs:{item:e}})],1)})),t._v(" "),0==t.selectedComponents.length?o("div",[o("p",{staticClass:"text-gray-600"},[t._v("Ningún componente escogido.")])]):t._e(),t._v(" "),t.phaseOne?t._e():o("button",{staticClass:"mt-3 bg-blue-400 text-white py-2 px-3 rounded",attrs:{required:""},on:{click:t.changePhase}},[t._v("Registrar producto")]),t._v(" "),t.phaseOne?o("button",{staticClass:"mt-3 bg-blue-200 text-black py-2 px-3 rounded",attrs:{disabled:"",required:""}},[t._v("Enviando datos...")]):t._e(),t._v(" "),o("nuxt-link",{staticClass:"mt-3 text-black py-2 px-3 rounded",attrs:{to:"/product/"}},[t._v("Cancelar")]),t._v(" "),t.error?o("p",{staticClass:"text-red-600"},[t._v("Ha ocurrido un error. Inténtelo de nuevo más tarde.")]):t._e()],2),t._v(" "),""==t.qr&&t.phaseOne?o("div",[o("form",{staticClass:"mt-4",on:{submit:function(e){return e.preventDefault(),t.send(e)}}},[t._v("Fase 2: Complete los campos pertinentes sobre el nuevo producto.\n      "),o("label",{staticClass:"block"},[o("span",{staticClass:"text-gray-700"},[t._v("Identificativo (PR-)")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],staticClass:"form-input mt-1 block w-full",attrs:{placeholder:"PR1",required:"",disabled:t.loading},domProps:{value:t.id},on:{input:function(e){e.target.composing||(t.id=e.target.value)}}})]),t._v(" "),o("label",{staticClass:"block pt-2"},[o("span",{staticClass:"text-gray-700"},[t._v("Ubicación")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.location,expression:"location"}],staticClass:"form-input mt-1 block w-full",attrs:{placeholder:"L1",required:"",disabled:t.loading},domProps:{value:t.location},on:{input:function(e){e.target.composing||(t.location=e.target.value)}}})]),t._v(" "),o("flex-row",{attrs:{tag:"section"}},[o("label",{staticClass:"block pt-2"},[o("span",{staticClass:"text-gray-700"},[t._v("Peso")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.weight,expression:"weight"}],staticClass:"form-input mt-1 block w-full",attrs:{placeholder:"5kg",required:"",disabled:t.loading},domProps:{value:t.weight},on:{input:function(e){e.target.composing||(t.weight=e.target.value)}}})]),t._v(" "),o("label",{staticClass:"block pt-2"},[o("span",{staticClass:"text-gray-700"},[t._v("Volumen")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.volume,expression:"volume"}],staticClass:"form-input mt-1 block w-full",attrs:{placeholder:"100cm^3",required:"",disabled:t.loading},domProps:{value:t.volume},on:{input:function(e){e.target.composing||(t.volume=e.target.value)}}})]),t._v(" "),o("label",{staticClass:"block pt-2"},[o("span",{staticClass:"text-gray-700"},[t._v("Dimensiones")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.dimension,expression:"dimension"}],staticClass:"form-input mt-1 block w-full",attrs:{placeholder:"LargoAnchoAlto",required:"",disabled:t.loading},domProps:{value:t.dimension},on:{input:function(e){e.target.composing||(t.dimension=e.target.value)}}})])]),t._v(" "),o("label",{staticClass:"block pt-2"},[o("span",{staticClass:"text-gray-700"},[t._v("Descripción")]),t._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.desc,expression:"desc"}],staticClass:"form-textarea mt-1 block w-full",attrs:{rows:"3",placeholder:"Introduce una descripción.",required:"",disabled:t.loading},domProps:{value:t.desc},on:{input:function(e){e.target.composing||(t.desc=e.target.value)}}})]),t._v(" "),o("label",{staticClass:"block pt-2"},[o("span",{staticClass:"text-gray-700"},[t._v("Información genereal")]),t._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.generalData,expression:"generalData"}],staticClass:"form-textarea mt-1 block w-full",attrs:{rows:"3",placeholder:"Introduce información extra.",required:"",disabled:t.loading},domProps:{value:t.generalData},on:{input:function(e){e.target.composing||(t.generalData=e.target.value)}}})]),t._v(" "),o("label",{staticClass:"block pt-2"},[o("span",{staticClass:"text-gray-700"},[t._v("Sensor")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.sensor,expression:"sensor"}],staticClass:"form-input mt-1 block w-full",attrs:{placeholder:"Datos del sensor",required:"",disabled:t.loading},domProps:{value:t.sensor},on:{input:function(e){e.target.composing||(t.sensor=e.target.value)}}})]),t._v(" "),o("button",{staticClass:"mt-3 bg-blue-200 text-black py-2 px-3 rounded",on:{click:t.getLocation}},[t._v("Get location")]),t._v(" "),o("label",{staticClass:"block pt-2"},[o("span",{staticClass:"text-gray-700"},[t._v("Longitud")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.long,expression:"long"}],staticClass:"form-input mt-1 block w-full",attrs:{placeholder:"0",required:"",disabled:t.loading},domProps:{value:t.long},on:{input:function(e){e.target.composing||(t.long=e.target.value)}}})]),t._v(" "),o("label",{staticClass:"block pt-2"},[o("span",{staticClass:"text-gray-700"},[t._v("Latitud")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.lat,expression:"lat"}],staticClass:"form-input mt-1 block w-full",attrs:{placeholder:"0",required:"",disabled:t.loading},domProps:{value:t.lat},on:{input:function(e){e.target.composing||(t.lat=e.target.value)}}})]),t._v(" "),t.loading?t._e():o("button",{staticClass:"mt-3 bg-blue-400 text-white py-2 px-3 rounded",attrs:{required:""}},[t._v("Registrar")]),t._v(" "),t.loading?o("button",{staticClass:"mt-3 bg-blue-200 text-black py-2 px-3 rounded",attrs:{disabled:"",required:""}},[t._v("Enviando datos...")]):t._e(),t._v(" "),o("nuxt-link",{staticClass:"mt-3 text-black py-2 px-3 rounded",attrs:{to:"/product/"}},[t._v("Cancelar")]),t._v(" "),t.error?o("p",{staticClass:"text-red-600"},[t._v("Ha ocurrido un error. Inténtelo de nuevo más tarde.")]):t._e()],1)]):t._e(),t._v(" "),""!=t.qr?o("div",{staticClass:"mt-4"},[o("h2",{staticClass:"font-semibold"},[t._v("Registro de producto en la Blockchain")]),t._v(" "),o("div",{staticClass:"flex items-center text-green-600"},[o("svg",{staticClass:"fill-current w-4 h-",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[o("path",{attrs:{d:"M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM6.7 9.29L9 11.6l4.3-4.3 1.4 1.42L9 14.4l-3.7-3.7 1.4-1.42z"}})]),t._v(" "),t._m(1)]),t._v(" "),o("nuxt-link",{staticClass:"py-2 px-2 bg-gray-200 inline-block text-black mt-3",attrs:{to:"/product/"}},[t._v("Ver items")]),t._v(" "),o("qrcode",{attrs:{value:t.qr,options:{tag:"svg"}}}),t._v(" "),o("p",{staticClass:"font-mono text-sm"},[t._v("\n      "+t._s(t.qr)+"\n    ")])],1):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",{staticClass:"text-2xl font-semibold"},[this._v("Registrar producto")]),this._v(" "),e("p",{staticClass:"text-sm text-gray-800"},[this._v("Un producto está compuesto por uno o varios componentes.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ml-2"},[e("h3",{},[this._v("Producto registrado con éxito")])])}],!1,null,null,null);e.default=f.exports}}]);