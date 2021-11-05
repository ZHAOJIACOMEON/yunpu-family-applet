var __CML__GLOBAL = require("../manifest.js");
__CML__GLOBAL.webpackJsonp([1],{

/***/ "../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/usr/local/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=page&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/index.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("./node_modules/chameleon-api/src/interfaces/getSystemInfo/index.js");

var _index2 = _interopRequireDefault(_index);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Index = function () {
  function Index() {
    _classCallCheck(this, Index);

    this.data = {
      viewPortHeight: 0,
      currentComp: 'familyHome',
      tabbar: {
        tabbarStyle: 'height:100cpx;background-color:#fff', //tabbar最外层的样式支持自定义
        tabLineStyle: 'background-color:#fff;height:2cpx;', //自定义tabline的高度和背景色
        textStyle: 'fontSize:8cpx;color:#999', //文案默认style ,可以这里控制文案的大小，样式等
        selectedTextStyle: 'fontSize:8cpx;color:#586ED0', //文案被选择style
        // "position":"top", //tabbar的位置 top/bottom
        useFixedLayout: true, //是否通过fixed布局进行tabbar的布局
        list: [{
          compName: 'messageHome',
          text: '消息',
          icon: __webpack_require__("./src/assets/images/messageHomeDefault@2x.png"),
          selectedIcon: __webpack_require__("./src/assets/images/messageHomeActive@2x.png")
        }, {
          compName: 'familyHome',
          text: '家族',
          icon: __webpack_require__("./src/assets/images/familyHomeDefault@2x.png"),
          selectedIcon: __webpack_require__("./src/assets/images/familyHomeActive@2x.png")
        }, {
          compName: 'findHome',
          text: '发现',
          icon: __webpack_require__("./src/assets/images/findHomeDefault@2x.png"),
          selectedIcon: __webpack_require__("./src/assets/images/findHomeActive@2x.png")
        }, {
          compName: 'userHome',
          text: '我的',
          icon: __webpack_require__("./src/assets/images/userHomeDefault@2x.png"),
          selectedIcon: __webpack_require__("./src/assets/images/userHomeActive@2x.png")
        }]
      }
    };
    this.methods = {
      handleTabbarClick: function handleTabbarClick(args) {
        console.log('tabbar-info', args);
      }
    };
  }

  _createClass(Index, [{
    key: 'created',
    value: function created(res) {
      var _this = this;

      (0, _index2.default)().then(function (info) {
        //这里要减去tabbar的高度，默认是120cpx,如果tabbarStyle中设置了其他高度，则要减去对应的值；
        _this.viewPortHeight = Number(info.viewportHeight) - 100;
      });
      if (res.comp) {
        //这里可以在传递的query中获取到想要激活的组件,具体使用方式参见文末的demo链接
        this.currentComp = res.comp;
      }
    }
  }]);

  return Index;
}();

exports.default = new Index();


module.exports = function () {
  _chameleonRuntime2.default.createPage(exports.default).getOptions();
};

/***/ }),

/***/ "../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"wx\"}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/usr/local/lib/node_modules/chameleon-tool/configs/postcss/wx/.postcssrc.js\"}}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=page&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/index.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/assets/images/familyHomeActive@2x.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/familyHomeActive_2x_b6180d4.png";

/***/ }),

/***/ "./src/assets/images/familyHomeDefault@2x.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/familyHomeDefault_2x_9bb67cc.png";

/***/ }),

/***/ "./src/assets/images/findHomeActive@2x.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/findHomeActive_2x_5cc07c8.png";

/***/ }),

/***/ "./src/assets/images/findHomeDefault@2x.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/findHomeDefault_2x_5b18c94.png";

/***/ }),

/***/ "./src/assets/images/messageHomeActive@2x.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/messageHomeActive_2x_5cb66c9.png";

/***/ }),

/***/ "./src/assets/images/messageHomeDefault@2x.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/messageHomeDefault_2x_bf9ee01.png";

/***/ }),

/***/ "./src/assets/images/userHomeActive@2x.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/userHomeActive_2x_cddaa24.png";

/***/ }),

/***/ "./src/assets/images/userHomeDefault@2x.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/userHomeDefault_2x_b766190.png";

/***/ }),

/***/ "./src/pages/index.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"wx\"}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/usr/local/lib/node_modules/chameleon-tool/configs/postcss/wx/.postcssrc.js\"}}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=page&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/index.cml");
var __cml__script = __webpack_require__("../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/usr/local/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=page&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/index.cml");

      __CML__GLOBAL.__CMLCOMPONNETS__['pages/index'] = __cml__script;


/***/ })

},["./src/pages/index.cml"])
module.exports = __CML__GLOBAL.__CMLCOMPONNETS__['pages/index'];