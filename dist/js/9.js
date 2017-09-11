webpackJsonp([9],{

/***/ 289:
/* unknown exports provided */
/* all exports used */
/*!**************************************!*\
  !*** ./src/pages/NameCardRemark.vue ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(/*! ../../~/vue-loader/lib/component-normalizer */ 1)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../~/vux-loader/src/script-loader.js!../../~/vue-loader/lib/selector?type=script&index=0!./NameCardRemark.vue */ 364),
  /* template */
  __webpack_require__(/*! !../../~/vue-loader/lib/template-compiler?{"id":"data-v-2c4887ea"}!../../~/vux-loader/src/template-loader.js!../../~/vue-loader/lib/selector?type=template&index=0!./NameCardRemark.vue */ 383),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\web\\node\\nim-web-demo-h5\\src\\pages\\NameCardRemark.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] NameCardRemark.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2c4887ea", Component.options)
  } else {
    hotAPI.reload("data-v-2c4887ea", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 364:
/* unknown exports provided */
/* all exports used */
/*!**************************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/NameCardRemark.vue ***!
  \**************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(/*! ../utils */ 41);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      alias: ''
    };
  },

  computed: {
    account: function account() {
      return this.$route.params.userId;
    },
    userInfo: function userInfo() {
      var info = this.$store.state.userInfos[this.account] || {};
      this.alias = _utils2.default.getFriendAlias(info);
      return info;
    }
  },
  methods: {
    setAlias: function setAlias() {
      this.alias = this.alias.replace(/\n/g, ' ').replace(/\r/g, '');
      if (/^\s*$/.test(this.alias)) {} else if (this.alias.length > 16) {
        this.$vux.alert.show({
          title: '备注不能超过16个字符'
        });
        return;
      }
      this.$store.dispatch('updateFriend', {
        account: this.account,
        alias: this.alias
      });
      window.history.go(-1);
    }
  }
};
module.exports = exports['default'];

/***/ }),

/***/ 383:
/* unknown exports provided */
/* all exports used */
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler.js?{"id":"data-v-2c4887ea"}!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/NameCardRemark.vue ***!
  \**************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "g-inherit m-article"
  }, [_c('x-header', {
    staticClass: "m-tab",
    attrs: {
      "left-options": {
        backText: ' '
      }
    }
  }, [_c('h1', {
    staticClass: "m-tab-top"
  }, [_vm._v("[ 备注名 ]")]), _vm._v(" "), _c('a', {
    slot: "left"
  })]), _vm._v(" "), _c('group', {
    staticClass: "u-card"
  }, [_c('x-input', {
    staticClass: "u-ipt-default",
    attrs: {
      "type": "text",
      "required": false,
      "max": 16,
      "placeholder": "请输入备注名"
    },
    model: {
      value: (_vm.alias),
      callback: function($$v) {
        _vm.alias = $$v
      },
      expression: "alias"
    }
  }, [_c('span', {
    slot: "label"
  }, [_vm._v("备注：")])])], 1), _vm._v(" "), _c('div', [_c('x-button', {
    attrs: {
      "type": "primary",
      "action-type": "button"
    },
    nativeOn: {
      "click": function($event) {
        _vm.setAlias($event)
      }
    }
  }, [_vm._v("设置备注名")])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2c4887ea", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=9.js.map