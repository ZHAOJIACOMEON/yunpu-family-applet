var __CML__GLOBAL = require("../../../../manifest.js");
__CML__GLOBAL.webpackJsonp([20],{

/***/ "../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/usr/local/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/cml-ui/components/c-tabbar/c-tabbar.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/zhaojianping/Documents/workSpace/yunpu-family-applet/node_modules/cml-ui/components/c-tabbar/c-tabbar.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = [];
var __INTERFAE__DEFINES__ = {
  "types": {
    "clickDetail": {
      "compName": "String"
    },
    "inputDetail": {
      "value": "String"
    }
  },
  "interfaces": {
    "TabbarInterface": {
      "tabbar": "CMLObject",
      "value": "String",
      "onclick": {
        "input": ["clickDetail"],
        "output": "Undefined"
      },
      "input": {
        "input": ["inputDetail"],
        "output": "Undefined"
      }
    }
  },
  "classes": {}
};
var __CML__DEFINES__ = {
  "types": {},
  "interfaces": {},
  "classes": {
    "Tabbar": ["TabbarInterface"]
  }
};
var __CML__WRAPPER__ = __webpack_require__("../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/runtime/check.js");
/*** 
???????????????tabbar??????????????????
tabbar:{
  "tabbarStyle": "";
  "tabLineStyle":"background-color:#FC9153;height:2cpx;", //?????????tabbar???top???????????????????????????????????????????????????????????????????????????????????????
  "textStyle":'color:#000000', //????????????style ,?????????????????????????????????????????????
  "selectedTextStyle":'color:#61c7fc',//???????????????style
  "position":"bottom", //tabbar????????? top/bottom
  "useFixedLayout":???????????????fixed??????,  //????????????fixed????????????tabbar?????????
  "list":[
    { 
      "compName":"bar-detail", //??????????????????????????????component is????????????????????????????????????????????????useingComponents??????key??????????????????
      "text": "detail",//tabbar?????????
      "icon": require("../../../assets/images/index/icon_API.png"),
      "selectedIcon": require("../../../assets/images/index/icon_API_HL.png"),
      // "iconStyle":"width:50cpx;height:50cpx;",//?????????icon????????????40cpx;?????????????????????
      // "selectedIconStyle":"width:70cpx;height:70cpx;",//?????????icon????????????40cpx;?????????????????????
  ]
},*/
var Tabbar = function () {
  function Tabbar() {
    _classCallCheck(this, Tabbar);

    this.props = {
      tabbar: {
        type: Object,
        default: {}
      },
      value: {
        //??????c-model??????
        type: String,
        dafault: ''
      }
    };
    this.data = {
      tapedIndex: 0
    };
    this.computed = {
      layoutClass: function layoutClass() {
        //????????????fixed??????
        if (!this.useFixedLayout) {
          return '';
        } else if (this.useFixedLayout && this.top) {
          //tabbar???top
          return 'tab-bar-root-top';
        } else if (this.useFixedLayout && !this.top) {
          //tabbar???bottom
          return 'tab-bar-root-bottom';
        }
      },
      useFixedLayout: function useFixedLayout() {
        return this.tabbar.useFixedLayout;
      },
      top: function top() {
        return this.tabbar.position === 'top';
      },
      tabLineStyle: function tabLineStyle() {
        if (!this.tabbar.list.length) {
          return '';
        }

        var width = 750 / this.tabbar.list.length; //line???????????????

        var leftOffset = this.tapedIndex * width;
        var style = ";width:" + width + "cpx;transform: translateX(" + leftOffset + "cpx);" + (this.tabbar.tabLineStyle || 'background-color:#FC9153;height:2cpx;');
        return style;
      },
      hasIcon: function hasIcon() {
        var necessaryKeys = ['icon'];
        return (this.tabbar.list || []).every(function (item) {
          return necessaryKeys.every(function (key) {
            return Object.keys(item).includes(key);
          });
        });
      },


      //??????c-model??????????????????????????????tab
      activeIndex: function activeIndex() {
        var _this = this;

        var tabIndex = this.tabbar.list.findIndex(function (item) {
          return item.compName === _this.value;
        });

        if (tabIndex >= 0) {
          return tabIndex;
        } else {
          throw new Error('??????tabbar ????????????list???compName???????????????????????????');
        }
      }
    };
    this.watch = {
      //?????????????????????????????????
      value: function value() {
        this.tapedIndex = this.activeIndex;
      }
    };
    this.methods = {
      onTabbarItemTap: function onTabbarItemTap(index) {
        this.tapedIndex = index;
        var compName = this.tabbar.list[index].compName;
        this.$cmlEmit('onclick', {
          compName: compName
        }); /*??????????????????????????????c-tabbar??????????????????????????????????????? 
            <component is="{{currentComp}}"></component>
            <c-tabbar c-model="{{currentComp}}"></c-tabbar>
            ?????????????????????????????????currentComp??????*/
        this.$cmlEmit('input', {
          value: compName
        });
      }
    };
  }

  _createClass(Tabbar, [{
    key: "mounted",
    value: function mounted() {
      this.tapedIndex = this.activeIndex;

      if (!this.tabbar.length) {
        return '';
      }

      var width = 750 / this.tabbar.length; //line???????????????

      var leftOffset = this.activeIndex * width;
      this.tabLineStyle = ";width:" + width + "cpx;transform: translateX(" + leftOffset + "cpx);";
    }
  }]);

  return Tabbar;
}();

exports.default = __CML__WRAPPER__(new Tabbar(), __CML_ERROR__, __enableTypes__, __INTERFAE__DEFINES__, __CML__DEFINES__);


module.exports = function () {
  _chameleonRuntime2.default.createComponent(exports.default).getOptions();
};

/***/ }),

/***/ "../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"qq\"}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/usr/local/lib/node_modules/chameleon-tool/configs/postcss/qq/.postcssrc.js\"}}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"qq\"}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/cml-ui/components/c-tabbar/c-tabbar.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/cml-ui/components/c-tabbar/c-tabbar.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"qq\"}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/usr/local/lib/node_modules/chameleon-tool/configs/postcss/qq/.postcssrc.js\"}}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"qq\"}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/cml-ui/components/c-tabbar/c-tabbar.cml");
var __cml__script = __webpack_require__("../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/usr/local/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/cml-ui/components/c-tabbar/c-tabbar.cml");

      __CML__GLOBAL.__CMLCOMPONNETS__['npm/cml-ui/components/c-tabbar/c-tabbar'] = __cml__script;


/***/ })

},["./node_modules/cml-ui/components/c-tabbar/c-tabbar.cml"])
module.exports = __CML__GLOBAL.__CMLCOMPONNETS__['npm/cml-ui/components/c-tabbar/c-tabbar'];