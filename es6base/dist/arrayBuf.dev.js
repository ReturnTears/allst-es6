"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// ArrayBuffer

/*
ArrayBuffer 对象用来表示通用的、固定长度的原始二进制数据缓冲区。
ArrayBuffer 不能直接操作，而是要通过类型数组对象或DataView对象来操作，
它们会将缓冲区中的数据表示为特定的格式，并通过这些格式来读写缓冲区的内容。
语法：
new ArrayBuffer(length)
length：表示创建的ArrayBuffer的大小，单位为字节。
如果 length 大于 Number.MAX_SAFE_INTEGER（>= 253）或为负数，则抛出一个 RangeError异常。
*/
var buffer = new ArrayBuffer(8);
console.log(buffer.byteLength);
console.log(ArrayBuffer.length);

var MyArrayBuffer =
/*#__PURE__*/
function (_ArrayBuffer) {
  _inherits(MyArrayBuffer, _ArrayBuffer);

  function MyArrayBuffer() {
    _classCallCheck(this, MyArrayBuffer);

    return _possibleConstructorReturn(this, _getPrototypeOf(MyArrayBuffer).apply(this, arguments));
  }

  _createClass(MyArrayBuffer, null, [{
    key: Symbol.species,
    get: function get() {
      return ArrayBuffer;
    }
  }]);

  return MyArrayBuffer;
}(_wrapNativeSuper(ArrayBuffer));
/* console.log(ArrayBuffer.isView(new ArrayBuffer(10)));
console.log(ArrayBuffer.isView(new Uint8Array()));
console.log(ArrayBuffer.isView(new Float32Array()));
console.log(ArrayBuffer.isView(new Int8Array(10).subarray(0, 3))); */

/* var buffer2 = new ArrayBuffer(2);
var dv = new DataView(buffer2);
console.log(ArrayBuffer.isView(dv)); */


var buffer3 = buffer.slice(0);
console.log(buffer3);