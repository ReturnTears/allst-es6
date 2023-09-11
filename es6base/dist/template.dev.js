"use strict";

function _templateObject3() {
  var data = _taggedTemplateLiteral(["<p>", " has sent you a message.</p>"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["The total is ", " (", " with tax)"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["Hello ", " Workd ", ""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// 标签模板
var a = 5;
var b = 10;

function tag(stringArr) {
  console.log(stringArr[0]);
  console.log(stringArr[1]);
  console.log(stringArr[2]);
  console.log(arguments.length <= 1 ? undefined : arguments[1]);
  console.log(arguments.length <= 2 ? undefined : arguments[2]);
  return "OK";
}

tag(_templateObject(), a + b, a * b);
var total = 30;

function passthru(literals) {
  var result = "";
  var i = 0;

  while (i < literals.length) {
    result += literals[i++];

    if (i < arguments.length) {
      result += arguments[i];
    }
  }

  return result;
}

var msg = passthru(_templateObject2(), total, total * 1.05);
console.log(msg);

function saferHTML(templateData) {
  var s = templateData[0];

  for (var i = 1; i < arguments.length; i++) {
    var arg = String(arguments[i]);
    s += arg.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    s += templateData[i];
  }

  return s;
}

var sender = 'KangKang';
var message = saferHTML(_templateObject3(), sender);
console.log(message);