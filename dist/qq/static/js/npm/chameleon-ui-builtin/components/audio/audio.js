var __CML__GLOBAL = require("../../../../manifest.js");
__CML__GLOBAL.webpackJsonp([36],{

/***/ "../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/usr/local/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/audio/audio.qq.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/zhaojianping/Documents/workSpace/yunpu-family-applet/node_modules/chameleon-ui-builtin/components/audio/audio.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = [];
var __INTERFAE__DEFINES__ = {
  "types": {
    "TimeUpdateDetail": {
      "currentTime": "Number",
      "duration": "Number"
    }
  },
  "interfaces": {
    "CAudioInterface": {
      "id": "String",
      "src": "String",
      "loop": "Boolean",
      "controls": "Boolean",
      "poster": "String",
      "name": "String",
      "author": "String",
      "autoplay": "Boolean",
      "initAudio": {
        "input": ["Void"],
        "output": "Undefined"
      },
      "setCurrentTime": {
        "input": ["Void"],
        "output": "Undefined"
      },
      "handlePause": {
        "input": ["Void"],
        "output": "Undefined"
      },
      "hanleEnded": {
        "input": ["Void"],
        "output": "Undefined"
      },
      "hanleTimeUpdate": {
        "input": ["Void"],
        "output": "Undefined"
      },
      "pause": {
        "input": ["Void"],
        "output": "Undefined"
      },
      "play": {
        "input": ["Void"],
        "output": "Undefined"
      },
      "ended": {
        "input": ["Void"],
        "output": "Undefined"
      },
      "timeupdate": {
        "input": ["TimeUpdateDetail"],
        "output": "Undefined"
      },
      "error": {
        "input": ["CMLObject"],
        "output": "Undefined"
      },
      "handleError": {
        "input": ["CMLObject"],
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
    "CAudio": ["CAudioInterface"]
  }
};
var __CML__WRAPPER__ = __webpack_require__("../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/runtime/check.js");
//qq????????????????????????????????????loop????????????????????????

var CAudio = function () {
  function CAudio() {
    _classCallCheck(this, CAudio);

    this.props = {
      id: {
        type: String,
        default: ""
      },
      src: {
        //audio?????????????????????????????????
        type: String,
        default: ''
      },
      loop: {
        //??????????????????
        type: Boolean,
        default: false
      },
      controls: {
        //????????????????????????
        type: Boolean,
        default: false
      },
      poster: {
        //???????????????????????????????????????????????????????????? controls ???????????? false ????????? poster ??????
        type: String,
        default: ""
      },
      name: {
        //??????????????????????????????????????? controls ???????????? false ????????? name ??????	
        type: String,
        default: '????????????'
      },
      author: {
        //??????????????????????????????????????? controls ???????????? false ????????? author ??????	
        type: String,
        default: '????????????'
      },
      autoplay: {
        type: Boolean,
        default: false
      }
    };
    this.data = {
      currentTime: '00:00',
      isAutoplay: false,
      //????????????????????????
      audioContext: {},
      isEnded: false //???????????????????????????????????????????????????????????????????????????

    };
    this.computed = {};
    this.watch = {};
    this.methods = {
      initAudio: function initAudio() {
        this.audioContext = qq.createInnerAudioContext(this.id, this);
        this.isAutoplay = this.autoplay; //???????????????????????? true????????? isAutoplay ??? true;

        if (this.isAutoplay) {
          this.audioContext.play();
        }
      },


      //loop???????????? ended?????????????????????
      hanleEnded: function hanleEnded() {
        if (this.loop) {
          //loop???false???????????????????????????????????????????????????this.isAutoplay??????false
          this.isAutoplay = false;
        }

        this.$cmlEmit('ended');
      },
      hanleTimeUpdate: function hanleTimeUpdate(e) {
        this.$cmlEmit('timeupdate', e.detail);
      },
      handleError: function handleError(e) {
        var errorMap = {
          MEDIA_ERR_ABORTED: 1001,
          MEDIA_ERR_NETWORK: 1002,
          MEDIA_ERR_DECODE: 1003,
          MEDIA_ERR_SRC_NOT_SUPPORTED: 1004
        };
        var errMsg = -1;

        if (e.detail && e.detail.errMsg) {
          errMsg = errorMap[e.detail.errMsg];
        }

        var detail = {
          errMsg: errMsg
        };
        this.$cmlEmit('error', detail);
      },
      setCurrentTime: function setCurrentTime() {},
      handlePlay: function handlePlay() {
        this.isAutoplay = !this.isAutoplay;
        this.$cmlEmit('play');
      },
      handlePause: function handlePause() {
        this.isAutoplay = !this.isAutoplay;
        this.$cmlEmit('pause');
      }
    };
  }

  _createClass(CAudio, [{
    key: "mounted",
    value: function mounted() {
      this.initAudio();
    }
  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {}
  }, {
    key: "destroyed",
    value: function destroyed() {}
  }]);

  return CAudio;
}();

exports.default = __CML__WRAPPER__(new CAudio(), __CML_ERROR__, __enableTypes__, __INTERFAE__DEFINES__, __CML__DEFINES__);


module.exports = function () {
  _chameleonRuntime2.default.createComponent(exports.default).getOptions();
};

/***/ }),

/***/ "../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"qq\"}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/usr/local/lib/node_modules/chameleon-tool/configs/postcss/qq/.postcssrc.js\"}}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"qq\"}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/audio/audio.qq.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/chameleon-ui-builtin/components/audio/audio.qq.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"qq\"}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/usr/local/lib/node_modules/chameleon-tool/configs/postcss/qq/.postcssrc.js\"}}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"qq\"}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/audio/audio.qq.cml");
var __cml__script = __webpack_require__("../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"/usr/local/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/audio/audio.qq.cml");

      __CML__GLOBAL.__CMLCOMPONNETS__['npm/chameleon-ui-builtin/components/audio/audio'] = __cml__script;


/***/ })

},["./node_modules/chameleon-ui-builtin/components/audio/audio.qq.cml"])
module.exports = __CML__GLOBAL.__CMLCOMPONNETS__['npm/chameleon-ui-builtin/components/audio/audio'];