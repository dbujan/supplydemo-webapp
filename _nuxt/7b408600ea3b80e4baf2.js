(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{204:function(t,e,o){"use strict";o.r(e);o(14),o(19);var r=o(3),n=(o(66),o(40)),l=o.n(n),c={components:{QrcodeStream:o(83).QrcodeStream},data:function(){return{search:"",itemInstance:"",location:"",sensor1:"",generalData:"",result:"",itemId:"",error:"",loading:!1,long:"",lat:""}},methods:{onDecode:function(t){var e=this;this.result=t,this.itemId=t.replace("blockchain:es.deusto.supplychain.Item::","");var o=this.$store.state.settings.api;l.a.get(o+"/Item/"+this.itemId).then((function(t){e.itemInstance=t.data}))},onInit:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,t;case 3:o.next=8;break;case 5:o.prev=5,o.t0=o.catch(0),"NotAllowedError"===o.t0.name?e.error="ERROR: you need to grant camera access permisson":"NotFoundError"===o.t0.name?e.error="ERROR: no camera on this device":"NotSupportedError"===o.t0.name?e.error="ERROR: secure context required (HTTPS, localhost)":"NotReadableError"===o.t0.name?e.error="ERROR: is the camera already in use?":"OverconstrainedError"===o.t0.name?e.error="ERROR: installed cameras are not suitable":"StreamApiNotSupportedError"===o.t0.name&&(e.error="ERROR: Stream API is not supported in this browser");case 8:case"end":return o.stop()}}),o,null,[[0,5]])})))()},getLocation:function(){navigator.geolocation.getCurrentPosition(this.buildCoords,this.geoError)},buildCoords:function(t){this.lat=String(t.coords.latitude),this.long=String(t.coords.longitude)},geoError:function(t){this.lat="0",this.long="0"},send:function(){var t=this;t.loading=!0,t.error=!1;var e=this.$store.state.settings.api;l.a.put(e+"/Item/"+this.itemId,{$class:"es.deusto.supplychain.Item",type:t.itemInstance.type,description:t.itemInstance.description,status:t.itemInstance.status,maker:t.itemInstance.maker,weight:t.itemInstance.weight,volume:t.itemInstance.volume,dimension:t.itemInstance.dimension,active:t.itemInstance.active,owner:$user.name,lastLocation:this.location,sensor1:this.sensor1,generalData:this.generalData,long:this.long,lat:this.lat}).then((function(e){console.log(e),t.qr=e.data.$class+"#"+e.data.itemId,t.loading=!1})).catch((function(e){console.log(e),t.error=!0,t.loading=!1}))}}},d=o(27),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container mx-auto p-4"},[t._m(0),t._v(" "),o("div",[o("form",{staticClass:"mt-4",on:{submit:function(e){return e.preventDefault(),t.send(e)}}},[t._m(1),t._v(" "),o("div",[o("qrcode-stream",{on:{decode:t.onDecode,init:t.onInit}}),t._v(" "),o("p",{staticClass:"error"},[t._v(t._s(t.error))]),t._v(" "),o("p",[t._v(t._s(t.itemId))])],1),t._v(" "),o("label",{staticClass:"block pt-2"},[o("span",{staticClass:"text-gray-700"},[t._v("Item escaneado")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.result,expression:"result"}],staticClass:"form-input mt-1 block w-full",attrs:{placeholder:"Blockchain ID",required:"",disabled:t.loading},domProps:{value:t.result},on:{input:function(e){e.target.composing||(t.result=e.target.value)}}})]),t._v(" "),o("label",{staticClass:"block pt-2"},[o("span",{staticClass:"text-gray-700"},[t._v("Ubicación")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.location,expression:"location"}],staticClass:"form-input mt-1 block w-full",attrs:{placeholder:"L1",required:"",disabled:t.loading},domProps:{value:t.location},on:{input:function(e){e.target.composing||(t.location=e.target.value)}}})]),t._v(" "),o("label",{staticClass:"block pt-2"},[o("span",{staticClass:"text-gray-700"},[t._v("Sensor 1")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.sensor1,expression:"sensor1"}],staticClass:"form-input mt-1 block w-full",attrs:{placeholder:"Datos del sensor 1",required:"",disabled:t.loading},domProps:{value:t.sensor1},on:{input:function(e){e.target.composing||(t.sensor1=e.target.value)}}})]),t._v(" "),o("label",{staticClass:"block pt-2"},[o("span",{staticClass:"text-gray-700"},[t._v("Comentario")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.generalData,expression:"generalData"}],staticClass:"form-input mt-1 block w-full",attrs:{placeholder:"Comentario",required:"",disabled:t.loading},domProps:{value:t.generalData},on:{input:function(e){e.target.composing||(t.generalData=e.target.value)}}})]),t._v(" "),o("button",{staticClass:"mt-3 bg-blue-200 text-black py-2 px-3 rounded",on:{click:t.getLocation}},[t._v("Get location")]),t._v(" "),o("label",{staticClass:"block pt-2"},[o("span",{staticClass:"text-gray-700"},[t._v("Longitud")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.long,expression:"long"}],staticClass:"form-input mt-1 block w-full",attrs:{placeholder:"0",required:"",disabled:t.loading},domProps:{value:t.long},on:{input:function(e){e.target.composing||(t.long=e.target.value)}}})]),t._v(" "),o("label",{staticClass:"block pt-2"},[o("span",{staticClass:"text-gray-700"},[t._v("Latitud")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.lat,expression:"lat"}],staticClass:"form-input mt-1 block w-full",attrs:{placeholder:"0",required:"",disabled:t.loading},domProps:{value:t.lat},on:{input:function(e){e.target.composing||(t.lat=e.target.value)}}})]),t._v(" "),t.loading?t._e():o("button",{staticClass:"mt-3 bg-blue-400 text-white py-2 px-3 rounded",attrs:{required:""}},[t._v("Registrar")]),t._v(" "),t.loading?o("button",{staticClass:"mt-3 bg-blue-200 text-black py-2 px-3 rounded",attrs:{disabled:"",required:""}},[t._v("Enviando datos...")]):t._e(),t._v(" "),o("nuxt-link",{staticClass:"mt-3 text-black py-2 px-3 rounded",attrs:{to:"/courier/"}},[t._v("Cancelar")]),t._v(" "),t.error?o("p",{staticClass:"text-red-600"},[t._v("Ha ocurrido un error. Inténtelo de nuevo más tarde.")]):t._e()],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex justify-between items-center w-full"},[e("div",[e("h1",{staticClass:"text-2xl font-semibold"},[this._v("Registro de recepción de assets")]),this._v(" "),e("p",{staticClass:"text-sm text-gray-800"},[this._v("Lea el código QR del componente o producto a recoger.")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"block"},[e("span",{staticClass:"text-gray-700"},[this._v("Acerque el código QR a la camara")])])}],!1,null,null,null);e.default=component.exports}}]);