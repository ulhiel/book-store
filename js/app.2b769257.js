(function(t){function a(a){for(var s,r,c=a[0],l=a[1],o=a[2],d=0,v=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&v.push(i[r][0]),i[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(a);while(v.length)v.shift()();return n.push.apply(n,o||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],s=!0,c=1;c<e.length;c++){var l=e[c];0!==i[l]&&(s=!1)}s&&(n.splice(a--,1),t=r(r.s=e[0]))}return t}var s={},i={app:0},n=[];function r(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=s,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)r.d(e,s,function(a){return t[a]}.bind(null,s));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/my-first-project/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=a,c=c.slice();for(var o=0;o<c.length;o++)a(c[o]);var u=l;n.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"0557":function(t,a,e){"use strict";var s=e("e60a"),i=e.n(s);i.a},"0641":function(t,a,e){"use strict";var s=e("c86b"),i=e.n(s);i.a},"09a7":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"base-container"},[e("top-message"),e("top-navbar"),e("top-category"),e("div",{staticClass:"container my-3"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 text-left"},[e("div",{staticClass:"breadcrumb"},[t._v("Keranjang Belanja")]),e("div",{staticClass:"category-title"},[t._v(" Keranjang Belanja ")]),e("div",{staticClass:"cart-items row"},[e("div",{staticClass:"col-md-6"},[e("cart-page-item",{staticClass:"my-3"})],1),e("div",{staticClass:"col-md-6"},[e("cart-page-item",{staticClass:"my-3"})],1),e("div",{staticClass:"col-md-6"},[e("cart-page-item",{staticClass:"my-3"})],1)])])])]),e("footer-bottom"),e("checkout-summary")],1)},i=[],n={},r=n,c=e("2877"),l=Object(c["a"])(r,s,i,!1,null,null,null);a["default"]=l.exports},"0fd7":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"welcome-banner"})},i=[],n={},r=n,c=e("2877"),l=Object(c["a"])(r,s,i,!1,null,null,null);a["default"]=l.exports},2347:function(t,a,e){"use strict";var s=e("2aa4"),i=e.n(s);i.a},2645:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"navbar-cart-item d-flex text-left mt-3"},[t._m(0),e("div",{staticClass:"detail",staticStyle:{"flex-grow":"1"}},[e("div",{staticClass:"book-title",staticStyle:{"font-size":"1rem"}},[t._v(" Guru Aini ")]),e("div",{staticClass:"book-author"},[t._v(" Andrea Hirata ")]),e("div",{staticClass:"book-price"},[t._v(" Rp 72.000 ")]),e("div",{staticClass:"book-purchase d-flex justify-content-end"},[e("button",{staticClass:"btn nav-button"},[e("font-awesome-icon",{attrs:{icon:"trash"}})],1)])])])},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"image"},[s("img",{staticStyle:{width:"100px",height:"auto"},attrs:{src:e("9cfb"),alt:""}})])}],n={},r=n,c=(e("0641"),e("2877")),l=Object(c["a"])(r,s,i,!1,null,null,null);a["default"]=l.exports},"2aa4":function(t,a,e){},"2d31":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"top-navbar"},[e("div",{staticClass:"nav-toggle"},[e("button",{staticClass:"btn nav-button"},[e("font-awesome-icon",{attrs:{icon:"bars"}})],1)]),e("div",{staticClass:"nav-brand"},[e("router-link",{attrs:{to:"/"}},[t._v("eKuilibrium")])],1),e("div",{staticClass:"nav-action"},[t._m(0),e("button",{staticClass:"btn"},[e("font-awesome-icon",{staticClass:"nav-icon d-block d-lg-none",attrs:{icon:"search"}})],1),e("div",{staticClass:"has-dropdown"},[e("button",{staticClass:"btn nav-button",on:{click:function(a){return t.toCart()}}},[e("font-awesome-icon",{staticClass:"nav-icon",attrs:{icon:"shopping-cart"}})],1),e("div",{staticClass:"card dropdown d-none",staticStyle:{width:"400px"}},[e("div",{staticClass:"title my-2 mx-2 text-left"},[t._v(" Keranjang Buku ")]),e("div",{staticClass:"items",staticStyle:{"max-height":"250px",overflow:"auto"}},[e("navbar-cart-item"),e("navbar-cart-item"),e("navbar-cart-item")],1),t._m(1),e("div",{staticClass:"action"},[e("router-link",{staticClass:"btn btn-dark btn-block mb-2",attrs:{to:"/checkout"}},[t._v("Lihat Keranjang")])],1)])]),e("div",{staticClass:"has-dropdown user-menu"},[e("button",{staticClass:"btn nav-button"},[e("font-awesome-icon",{staticClass:"nav-icon",attrs:{icon:"user"}})],1),t._m(2)])])])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"nav-search d-none d-lg-flex"},[e("form",{staticClass:"form",staticStyle:{width:"100%"}},[e("div",{staticClass:"input-group my-0"},[e("input",{staticClass:"form-control",attrs:{type:"text",placeholder:'Coba Ketik "Bumi Manusia"',"aria-label":"Recipient's username","aria-describedby":"basic-addon2"}}),e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button"}},[t._v("Temukan")])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"total d-flex justify-content-between py-3"},[e("div",[t._v("Sub Total")]),e("div",[t._v("Rp 142.000")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card dropdown d-none",staticStyle:{padding:"0"}},[e("ul",{staticStyle:{width:"150px"}},[e("button",{staticClass:"btn btn-outline-dark btn-block"},[t._v("Masuk")]),e("button",{staticClass:"btn btn-dark btn-block"},[t._v("Daftar")])])])}],n={data:function(){return{searchBar:!0}},methods:{toCart:function(){this.$router.push("/checkout")}}},r=n,c=(e("2347"),e("2877")),l=Object(c["a"])(r,s,i,!1,null,"3efdc08b",null);a["default"]=l.exports},3815:function(t,a,e){},"4d48":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"book-review"},[e("div",{staticClass:"title"},[t._v(" Review dari Pembaca ")]),e("p",[t._v("Belum ada review dari pembaca untuk buku ini, jadilah yang pertama dan dapatkan promo menarik dari kami")]),e("button",{staticClass:"btn btn-dark"},[t._v("Tulis Review")])])}],n={},r=n,c=e("2877"),l=Object(c["a"])(r,s,i,!1,null,null,null);a["default"]=l.exports},"4e01":function(t,a,e){},"54c4":function(t,a,e){"use strict";var s=e("3815"),i=e.n(s);i.a},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},n=[],r=(e("5c0b"),e("2877")),c={},l=Object(r["a"])(c,i,n,!1,null,null,null),o=l.exports,u=e("8c4f");s["a"].use(u["a"]);var d=[{path:"/",name:"welcome",component:e("73f0").default},{path:"/category",name:"category",component:e("8fce").default},{path:"/book",name:"book",component:e("dac5").default},{path:"/checkout",name:"checkout",component:e("09a7").default}],v=new u["a"]({mode:"history",base:"/my-first-project/",routes:d}),m=v,f=e("2f62");s["a"].use(f["a"]);var p=new f["a"].Store({state:{},mutations:{},actions:{},modules:{}}),b=(e("a1a3"),e("ecee")),_=e("c074"),C=e("ad3d");s["a"].component("top-navbar",e("2d31").default),s["a"].component("top-message",e("a2c6").default),s["a"].component("top-category",e("a0ba").default),s["a"].component("welcome-banner",e("0fd7").default),s["a"].component("editors-choice",e("82bc").default),s["a"].component("footer-bottom",e("e3e6").default),s["a"].component("new-arrival",e("fa64").default),s["a"].component("best-selling",e("f4d2").default),s["a"].component("bottom-banner",e("77de").default),s["a"].component("similar-recomendation",e("ea60").default),s["a"].component("book-review",e("4d48").default),s["a"].component("book-action",e("6a6b").default),s["a"].component("card-display",e("8768").default),s["a"].component("cart-page-item",e("71fd").default),s["a"].component("checkout-summary",e("c087").default),s["a"].component("navbar-cart-item",e("2645").default),s["a"].component("sidebar",e("e7e6").default),b["c"].add(_["a"],_["b"],_["c"],_["e"],_["d"]),s["a"].component("font-awesome-icon",C["a"]),s["a"].config.productionTip=!1,new s["a"]({router:m,store:p,render:function(t){return t(o)}}).$mount("#app")},"5c0b":function(t,a,e){"use strict";var s=e("9c0c"),i=e.n(s);i.a},"6a6b":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"action"},[e("form",[e("div",{staticClass:"form-group row align-items-center my-0"},[e("label",{staticClass:"col-sm-3 col-form-label my-1 action-title",attrs:{for:"filter"}},[t._v("Ambil Sejumlah")]),e("div",{staticClass:"col my-1"},[e("input",{staticClass:"form-control",attrs:{type:"number",name:"jumlah",value:"1"}})]),e("div",{staticClass:"col my-1"},[e("button",{staticClass:"btn btn-dark btn-block"},[t._v("Tambahkan ke Keranjang")])])])])])}],n={},r=n,c=(e("0557"),e("2877")),l=Object(c["a"])(r,s,i,!1,null,null,null);a["default"]=l.exports},"71fd":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"cart-item d-block align-items-center justify-content-between"},[t._m(0),e("div",{staticClass:"cart-action d-flex justify-content-between mt-2"},[e("button",{staticClass:"btn nav-button"},[e("font-awesome-icon",{attrs:{icon:"trash"}})],1),t._m(1)])])},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"item d-flex align-items-center"},[s("img",{staticClass:"checkout-item-image",staticStyle:{width:"200px",height:"auto"},attrs:{src:e("9cfb"),alt:""}}),s("div",{staticClass:"detail",staticStyle:{"flex-grow":"1"}},[s("div",{staticClass:"category"},[t._v(" Fiksi Populer ")]),s("div",{staticClass:"dropdown-divider"}),s("div",{staticClass:"book-title"},[t._v(" Guru Aini ")]),s("div",{staticClass:"book-author"},[t._v(" Andrea Hirata ")]),s("div",{staticClass:"dropdown-divider"}),s("div",{staticClass:"price"},[t._v(" Rp 72.000 ")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"input-group mb-2",staticStyle:{width:"125px"}},[e("div",{staticClass:"input-group-prepend"},[e("button",{staticClass:"btn btn-dark",attrs:{type:"button"}},[t._v("-")])]),e("input",{staticClass:"form-control text-center",attrs:{type:"text",placeholder:"","aria-label":"","aria-describedby":"basic-addon1"}}),e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-dark",attrs:{type:"button"}},[t._v("+")])])])}],n={},r=n,c=(e("54c4"),e("2877")),l=Object(c["a"])(r,s,i,!1,null,null,null);a["default"]=l.exports},"73f0":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"base-container"},[e("top-message"),e("top-navbar"),e("top-category"),e("welcome-banner"),e("editors-choice"),e("new-arrival"),e("best-selling"),e("bottom-banner"),e("footer-bottom")],1)},i=[],n={},r=n,c=e("2877"),l=Object(c["a"])(r,s,i,!1,null,null,null);a["default"]=l.exports},"77de":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"bottom-banner"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row align-items-center justify-content-center py-2",staticStyle:{height:"100% !important"}},[e("div",{staticClass:"col-md-12",staticStyle:{color:"white","font-size":"2rem","font-weight":"bold"}},[t._v(" Bergabung bersama klub baca kami untuk mendapatkan rekomendasi dan review bacaan seru, serta diskon gila ")])])])])}],n={},r=n,c=e("2877"),l=Object(c["a"])(r,s,i,!1,null,null,null);a["default"]=l.exports},"82bc":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"editors-choice"},[e("div",{staticClass:"title"},[t._v("EDITOR'S CHOICE")]),e("div",{staticClass:"items"},[e("card-display"),e("card-display"),e("card-display"),e("card-display"),e("card-display"),e("card-display"),e("card-display")],1),t._m(0)])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mt-3"},[e("button",{staticClass:"btn btn-outline-dark"},[t._v("Lihat Semuanya")])])}],n={},r=n,c=e("2877"),l=Object(c["a"])(r,s,i,!1,null,null,null);a["default"]=l.exports},8768:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card-display",on:{click:function(a){return t.showBook()}}},[t._m(0),e("div",{staticClass:"book-title"},[t._v(" Guru Aini ")]),e("div",{staticClass:"book-author"},[t._v(" Andrea Hirata ")]),e("div",{staticClass:"book-price"},[t._v(" Rp 72.000 ")])])},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"main-picture"},[s("img",{staticStyle:{width:"100%",height:"auto"},attrs:{src:e("9cfb"),alt:""}})])}],n={methods:{showBook:function(){this.$router.push("/book")}}},r=n,c=e("2877"),l=Object(c["a"])(r,s,i,!1,null,null,null);a["default"]=l.exports},"8fce":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"base-container"},[e("top-message"),e("top-navbar"),e("top-category"),e("div",{staticClass:"container-fluid my-3 px-5 text-left"},[t._m(0),t._m(1),e("div",{staticClass:"row my-3 justify-content-center"},[e("div",{staticClass:"col-md-10 row justify-content-center"},[e("card-display"),e("card-display"),e("card-display"),e("card-display"),e("card-display"),e("card-display"),e("card-display"),e("card-display"),e("card-display"),e("card-display")],1)]),t._m(2)]),e("footer-bottom")],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-10"},[e("div",{staticClass:"breadcrumb"},[t._v(" BUKU / FILSAFAT & PEMIKIRAN ")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-10 row align-items-center justify-content-between"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"category-title"},[t._v(" FILSAFAT & PEMIKIRAN ")])]),e("div",{staticClass:"col-md-5"},[e("form",[e("div",{staticClass:"form-group row justify-content-end row align-items-center my-0"},[e("label",{staticClass:"col-sm-4 col-form-label",attrs:{for:"filter"}},[t._v("Urutkan Berdasarkan")]),e("div",{staticClass:"col-sm-6"},[e("select",{staticClass:"form-control",attrs:{name:"filter"}},[e("option",{attrs:{value:""}},[t._v("Termurah")]),e("option",{attrs:{value:""}},[t._v("Termahal")]),e("option",{attrs:{value:""}},[t._v("Paling Baru")])])])])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row my-3 justify-content-center"},[e("button",{staticClass:"btn btn-outline-dark"},[t._v("Muat Lebih Banyak")])])}],n={},r=n,c=(e("b957"),e("2877")),l=Object(c["a"])(r,s,i,!1,null,null,null);a["default"]=l.exports},"92f9":function(t,a,e){"use strict";var s=e("bffd"),i=e.n(s);i.a},"9c0c":function(t,a,e){},"9cfb":function(t,a,e){t.exports=e.p+"img/image-1.422a4298.png"},a0ba:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"top-category"},[e("div",{staticClass:"category-item has-dropdown"},[e("router-link",{attrs:{to:"/category"}},[t._v("SEMUA KATEGORI")]),e("div",{staticClass:"dropdown d-none"},[e("ul",[e("router-link",{attrs:{to:"/as"}},[e("li",[t._v("Fiksi Populer")])]),e("router-link",{attrs:{to:"/asdg"}},[e("li",[t._v("Filsafat dan Pemikiran")])])],1)])],1),t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5)])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"category-item"},[e("a",{attrs:{href:""}},[t._v("FIKSI")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"category-item"},[e("a",{attrs:{href:""}},[t._v("PENGEMBANGAN DIRI")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"category-item"},[e("a",{attrs:{href:""}},[t._v("SEJARAH")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"category-item"},[e("a",{attrs:{href:""}},[t._v("FILSAFAT & PEMIKIRAN")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"category-item"},[e("a",{attrs:{href:""}},[t._v("SAINS")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"category-item"},[e("a",{attrs:{href:""}},[t._v("AGAMA")])])}],n={},r=n,c=e("2877"),l=Object(c["a"])(r,s,i,!1,null,null,null);a["default"]=l.exports},a1a3:function(t,a,e){},a2c6:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"top-message"},[t._v(" BANTU LEBIH BANYAK KOMUNITAS UNTUK IKUT MEMBACA, "),e("a",{attrs:{href:""}},[t._v(" KLIK DI SINI.")])])}],n={},r=n,c=e("2877"),l=Object(c["a"])(r,s,i,!1,null,null,null);a["default"]=l.exports},b6ae:function(t,a,e){"use strict";var s=e("4e01"),i=e.n(s);i.a},b957:function(t,a,e){"use strict";var s=e("c6da"),i=e.n(s);i.a},bffd:function(t,a,e){},c087:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"checkout-summary"},[e("div",{staticClass:"container d-flex align-items-center justify-content-between py-3",staticStyle:{height:"100%"}},[e("div",{staticClass:"d-block text-left mx-3"},[e("small",[e("b",[t._v("Total Harga")])]),e("div",{staticClass:"price",staticStyle:{"font-size":"1.5rem"}},[t._v("Rp 72.000")])]),e("button",{staticClass:"btn btn-success"},[t._v("Checkout Sekarang")])])])}],n={},r=n,c=(e("92f9"),e("2877")),l=Object(c["a"])(r,s,i,!1,null,null,null);a["default"]=l.exports},c6da:function(t,a,e){},c86b:function(t,a,e){},dac5:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"base-container book-show"},[e("top-message"),e("top-navbar"),e("top-category"),e("div",{staticClass:"container-fluid my-3 px-5"},[t._m(0),e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-sm-12 col-md-10 row"},[t._m(1),e("div",{staticClass:"col-md-6 text-left book-data"},[t._m(2),e("div",{staticClass:"price"},[t._v(" Rp 72.000 ")]),t._m(3),t._m(4),e("div",{staticClass:"action d-none d-md-block"},[e("book-action")],1)])])]),e("div",{staticClass:"row justify-content-center"},[e("similar-recomendation")],1),e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-sm-12 col-md-10"},[e("book-review")],1)])]),e("footer-bottom"),e("book-action",{staticClass:"d-block d-md-none",staticStyle:{position:"sticky",bottom:"0"}})],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-sm-12 col-md-10"},[e("div",{staticClass:"breadcrumb"},[t._v(" BUKU / FIKSI POPULER / GURU AINI ")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-md-6"},[s("img",{staticStyle:{width:"100%",height:"auto","background-color":"red"},attrs:{src:e("9cfb"),alt:"asdf"}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"title"},[e("div",{staticClass:"book"},[t._v("Guru Aini")]),e("div",{staticClass:"author"},[t._v("Andrea Hirata")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"description"},[e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Sit amet commodo nulla facilisi nullam. Nunc mattis enim ut tellus elementum. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Tempus urna et pharetra pharetra massa massa ultricies. Habitant morbi tristique senectus et netus et malesuada fames.")]),e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Sit amet commodo nulla facilisi nullam. Nunc mattis enim ut tellus elementum. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Tempus urna et pharetra pharetra massa massa ultricies. Habitant morbi tristique senectus et netus et malesuada fames.")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"data"},[e("table",{staticClass:"table"},[e("tr",[e("td",[t._v("ISBN")]),e("td",[t._v("982-123-946-109-12")])]),e("tr",[e("td",[t._v("Penerbit")]),e("td",[t._v("Bentang Pustaka")])]),e("tr",[e("td",[t._v("Jumlah Halaman")]),e("td",[t._v("418")])]),e("tr",[e("td",[t._v("Bahasa")]),e("td",[t._v("Indonesia")])]),e("tr",[e("td",[t._v("Berat")]),e("td",[t._v("300 gram")])])])])}],n={},r=n,c=e("2877"),l=Object(c["a"])(r,s,i,!1,null,null,null);a["default"]=l.exports},e3e6:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"footer"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row justify-content-center text-left"},[e("div",{staticClass:"col-md-10 row"},[t._m(0),e("div",{staticClass:"col-md-3"},[e("b",[t._v("Layanan Pelanggan")]),e("ul",[e("li",[e("router-link",{attrs:{to:""}},[t._v("Lacak Pesanan")])],1),e("li",[e("router-link",{attrs:{to:""}},[t._v("Keluhan dan Pertanyaan")])],1),e("li",[e("router-link",{attrs:{to:""}},[t._v("Permintaan Buku")])],1),e("li",[e("router-link",{attrs:{to:""}},[t._v("Hubungi Kami")])],1)])]),e("div",{staticClass:"col-md-3"},[e("b",[t._v("Media Sosial Kami")]),e("ul",[e("li",[e("router-link",{attrs:{to:"/"}},[t._v("Instagram")])],1),e("li",[e("router-link",{attrs:{to:""}},[t._v("Facebook")])],1),e("li",[e("router-link",{attrs:{to:""}},[t._v("Twitter")])],1)])]),e("div",{staticClass:"col-md-3"},[e("b",[t._v("Komunitas")]),e("ul",[e("li",[e("router-link",{attrs:{to:""}},[t._v("Klub Baca eKuilibrium")])],1),e("li",[e("router-link",{attrs:{to:""}},[t._v("Donasi Buku untuk Komunitas")])],1),e("li",[e("router-link",{attrs:{to:""}},[t._v("eKuilibrium Event")])],1)])])])])])])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-md-3"},[e("h3",[e("b",[t._v("eKuilibrium")])]),e("p",[t._v("ONLINE BOOK STORE")])])}],n={},r=n,c=e("2877"),l=Object(c["a"])(r,s,i,!1,null,null,null);a["default"]=l.exports},e60a:function(t,a,e){},e7e6:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"sidebar"})},i=[],n={},r=n,c=(e("b6ae"),e("2877")),l=Object(c["a"])(r,s,i,!1,null,null,null);a["default"]=l.exports},ea60:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"similar-recomendation"},[e("div",{staticClass:"title"},[t._v("Buku Serupa yang Direkomendasikan")]),e("div",{staticClass:"items justify-content-sm-start justify-content-lg-center"},[e("card-display"),e("card-display"),e("card-display"),e("card-display")],1)])},i=[],n={},r=n,c=e("2877"),l=Object(c["a"])(r,s,i,!1,null,null,null);a["default"]=l.exports},f4d2:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"best-selling"},[e("div",{staticClass:"title"},[t._v("Terlaris di Toko Kami")]),e("div",{staticClass:"items"},[e("card-display"),e("card-display"),e("card-display"),e("card-display"),e("card-display"),e("card-display"),e("card-display")],1),t._m(0)])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mt-3"},[e("button",{staticClass:"btn btn-outline-dark"},[t._v("Lihat Buku Laris yang Lain")])])}],n={},r=n,c=e("2877"),l=Object(c["a"])(r,s,i,!1,null,null,null);a["default"]=l.exports},fa64:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"new-arrival"},[e("div",{staticClass:"title"},[t._v("Barang Baru")]),e("div",{staticClass:"items"},[e("card-display"),e("card-display"),e("card-display"),e("card-display"),e("card-display"),e("card-display"),e("card-display")],1),t._m(0)])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mt-3"},[e("button",{staticClass:"btn btn-outline-dark"},[t._v("Lihat Buku Baru yang Lain")])])}],n={},r=n,c=e("2877"),l=Object(c["a"])(r,s,i,!1,null,null,null);a["default"]=l.exports}});
//# sourceMappingURL=app.2b769257.js.map