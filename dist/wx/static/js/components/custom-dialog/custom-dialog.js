var __CML__GLOBAL = require("../../manifest.js");
__CML__GLOBAL.webpackJsonp([19],{

/***/ "../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/usr/local/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/components/custom-dialog/custom-dialog.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CustomDialog = function () {
  function CustomDialog() {
    _classCallCheck(this, CustomDialog);

    this.props = {
      dialogData: {
        type: Object,
        default: {
          isShowModel: false
        }
      }
    };
    this.data = {
      radioGroupOption: [{
        checked: false,
        label: "管理员",
        color: "#586ED0"
      }, {
        checked: false,
        label: "族员",
        color: "#586ED0"
      }],
      radioSelectLabel: false
    };
    this.methods = {
      handleChangeRadioInfors: function handleChangeRadioInfors(e) {
        this.radioSelectLabel = this.radioGroupOption[e.detail.index].label;
      },
      handleEditInfors: function handleEditInfors() {},
      handleCloseDialogInfors: function handleCloseDialogInfors(e) {
        var domId = e.target.id;
        if (domId == "dialogWrap") {
          this.$cmlEmit("handleCloseParentDialogInfors");
        }
      }
    };
  }

  _createClass(CustomDialog, [{
    key: "beforeCreate",
    value: function beforeCreate() {}
  }, {
    key: "created",
    value: function created() {}
  }, {
    key: "beforeMount",
    value: function beforeMount() {}
  }, {
    key: "mounted",
    value: function mounted() {}
  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {}
  }, {
    key: "destroyed",
    value: function destroyed() {}
  }]);

  return CustomDialog;
}();

exports.default = new CustomDialog();


module.exports = function () {
  _chameleonRuntime2.default.createComponent(exports.default).getOptions();
};

/***/ }),

/***/ "../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"wx\"}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/usr/local/lib/node_modules/chameleon-tool/configs/postcss/wx/.postcssrc.js\"}}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/components/custom-dialog/custom-dialog.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/components/custom-dialog/custom-dialog.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"wx\"}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/usr/local/lib/node_modules/chameleon-tool/configs/postcss/wx/.postcssrc.js\"}}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/components/custom-dialog/custom-dialog.cml");
var __cml__script = __webpack_require__("../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/usr/local/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/components/custom-dialog/custom-dialog.cml");

      __CML__GLOBAL.__CMLCOMPONNETS__['components/custom-dialog/custom-dialog'] = __cml__script;


/***/ })

},["./src/components/custom-dialog/custom-dialog.cml"])
module.exports = __CML__GLOBAL.__CMLCOMPONNETS__['components/custom-dialog/custom-dialog'];