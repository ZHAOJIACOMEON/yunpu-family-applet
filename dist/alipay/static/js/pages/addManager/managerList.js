var __CML__GLOBAL = require("../../manifest.js");
__CML__GLOBAL.webpackJsonp([14],{

/***/ "../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/usr/local/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=page&media=dev&cmlType=alipay&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/addManager/managerList.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dataList = [{
  name: '阿里',
  pinYin: 'ali'
}, {
  name: '北京',
  pinYin: 'beijing'
}, {
  name: '成都',
  pinYin: 'chengdu'
}, {
  name: '东莞',
  pinYin: 'dongguan'
}, {
  name: '峨嵋',
  pinYin: 'emei'
}];

var Index = function Index() {
  _classCallCheck(this, Index);

  this.data = {
    isfocus: false,
    dialogData: {
      isShowModel: false
    }
  };

  this.mounted = function (res) {
    var _this = this;

    setTimeout(function () {
      _this.isfocus = true;
    }, 300);
  };

  this.methods = {
    bindblurevent: function bindblurevent() {
      this.isfocus = false;
    },
    initData: function initData() {
      var _this2 = this;

      // get shortcut
      this.dataList.forEach(function (item) {
        if (item.pinYin) {
          var firstName = item.pinYin.substring(0, 1);
          if (item.pinYin && _this2.shortcut.indexOf(firstName.toUpperCase()) === -1) {
            _this2.shortcut.push(firstName.toUpperCase());
          };
        };
      });

      // handle input data
      var cityData = this.shortcut.map(function (item) {
        return { items: [], name: item };
      });
      this.dataList.forEach(function (item) {
        var firstName = item.pinYin.substring(0, 1).toUpperCase();
        var index = _this2.shortcut.indexOf(firstName);
        cityData[index].items.push(item);
      });

      // calculate item offsetTop && totalHeight
      cityData.forEach(function (item, index) {
        var arr = cityData.slice(0, index);
        item.totalHeight = _this2.itemNameHeight + item.items.length * _this2.itemContentHeight;
        item.offsetTop = arr.reduce(function (total, cur) {
          return total + _this2.itemNameHeight + cur.items.length * _this2.itemContentHeight;
        }, 0);
      });
      this.list = cityData;
    },
    handleScroll: function handleScroll(e) {
      var scrollTop = e.detail.scrollTop;

      scrollTop = Math.ceil(scrollTop);
      this.activeIndex = this.list.findIndex(function (item) {
        return scrollTop >= item.offsetTop && scrollTop < item.totalHeight + item.offsetTop;
      });
    },
    handleSelect: function handleSelect(e) {
      this.$cmlEmit('onselect', e);
    },
    handleEditRoleInfors: function handleEditRoleInfors() {
      this.dialogData = {
        isShowModel: true
      };
    },
    handleCloseParentDialogInfors: function handleCloseParentDialogInfors() {
      this.dialogData = {
        isShowModel: false
      };
    }
  };
};

exports.default = new Index();


module.exports = function () {
  _chameleonRuntime2.default.createPage(exports.default).getOptions();
};

/***/ }),

/***/ "../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"alipay\"}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/usr/local/lib/node_modules/chameleon-tool/configs/postcss/alipay/.postcssrc.js\"}}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"alipay\"}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=page&media=dev&cmlType=alipay&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/addManager/managerList.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/pages/addManager/managerList.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"alipay\"}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/usr/local/lib/node_modules/chameleon-tool/configs/postcss/alipay/.postcssrc.js\"}}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"alipay\"}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=page&media=dev&cmlType=alipay&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/addManager/managerList.cml");
var __cml__script = __webpack_require__("../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/usr/local/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=page&media=dev&cmlType=alipay&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/addManager/managerList.cml");

      __CML__GLOBAL.__CMLCOMPONNETS__['pages/addManager/managerList'] = __cml__script;


/***/ })

},["./src/pages/addManager/managerList.cml"])
module.exports = __CML__GLOBAL.__CMLCOMPONNETS__['pages/addManager/managerList'];