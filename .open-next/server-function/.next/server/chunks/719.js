"use strict";
exports.id = 719;
exports.ids = [719];
exports.modules = {

/***/ 7377:
/***/ ((module) => {

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ 
/* eslint-disable no-unused-vars */ var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
    if (val === null || val === undefined) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
    }
    return Object(val);
}
function shouldUseNative() {
    try {
        if (!Object.assign) {
            return false;
        }
        // Detect buggy property enumeration order in older V8 versions.
        // https://bugs.chromium.org/p/v8/issues/detail?id=4118
        var test1 = new String("abc"); // eslint-disable-line no-new-wrappers
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
            return false;
        }
        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        var test2 = {};
        for(var i = 0; i < 10; i++){
            test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
            return test2[n];
        });
        if (order2.join("") !== "0123456789") {
            return false;
        }
        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
            test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
            return false;
        }
        return true;
    } catch (err) {
        // We don't expect any of the above to throw, but better to be safe.
        return false;
    }
}
module.exports = shouldUseNative() ? Object.assign : function(target, source) {
    var from;
    var to = toObject(target);
    var symbols;
    for(var s = 1; s < arguments.length; s++){
        from = Object(arguments[s]);
        for(var key in from){
            if (hasOwnProperty.call(from, key)) {
                to[key] = from[key];
            }
        }
        if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for(var i = 0; i < symbols.length; i++){
                if (propIsEnumerable.call(from, symbols[i])) {
                    to[symbols[i]] = from[symbols[i]];
                }
            }
        }
    }
    return to;
};


/***/ }),

/***/ 6719:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

var __importDefault = (void 0) && (void 0).__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
__webpack_unused_export__ = ({
    value: true
});
const react_1 = __importDefault(__webpack_require__(2947));
const object_assign_1 = __importDefault(__webpack_require__(7377));
const Iframe = ({ url, allowFullScreen, position, display, height, width, overflow, styles, onLoad, onMouseOver, onMouseOut, scrolling, id, frameBorder, ariaHidden, sandbox, allow, className, title, ariaLabel, ariaLabelledby, name, target, loading, importance, referrerpolicy, allowpaymentrequest, src, key })=>{
    const defaultProps = object_assign_1.default({
        src: src || url,
        target: target || null,
        style: {
            position: position || null,
            display: display || "initial",
            overflow: overflow || null
        },
        scrolling: scrolling || null,
        allowpaymentrequest: allowpaymentrequest || null,
        importance: importance || null,
        sandbox: sandbox && [
            ...sandbox
        ].join(" ") || null,
        loading: loading || null,
        styles: styles || null,
        name: name || null,
        className: className || null,
        allowFullScreen: "allowFullScreen" || 0,
        referrerpolicy: referrerpolicy || null,
        title: title || null,
        allow: allow || null,
        id: id || null,
        "aria-labelledby": ariaLabelledby || null,
        "aria-hidden": ariaHidden || null,
        "aria-label": ariaLabel || null,
        width: width || null,
        height: height || null,
        onLoad: onLoad || null,
        onMouseOver: onMouseOver || null,
        onMouseOut: onMouseOut || null,
        key: key || "iframe"
    });
    let props = Object.create(null);
    for (let prop of Object.keys(defaultProps)){
        if (defaultProps[prop] != null) {
            props[prop] = defaultProps[prop];
        }
    }
    for (let i of Object.keys(props.style)){
        if (props.style[i] == null) {
            delete props.style[i];
        }
    }
    if (props.styles) {
        for (let key of Object.keys(props.styles)){
            if (props.styles.hasOwnProperty(key)) {
                props.style[key] = props.styles[key];
            }
            if (Object.keys(props.styles).pop() == key) {
                delete props.styles;
            }
        }
    }
    if (allowFullScreen) {
        if ("allow" in props) {
            const currentAllow = props.allow.replace("fullscreen", "");
            props.allow = `fullscreen ${currentAllow.trim()}`.trim();
        } else {
            props.allow = "fullscreen";
        }
    }
    if (frameBorder >= 0) {
        if (!props.style.hasOwnProperty("border")) {
            props.style.border = frameBorder;
        }
    }
    return react_1.default.createElement("iframe", Object.assign({}, props));
};
exports.Z = Iframe;


/***/ })

};
;