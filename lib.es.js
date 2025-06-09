var xd = Object.defineProperty;
var md = (n, r, e) => r in n ? xd(n, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[r] = e;
var Gt = (n, r, e) => md(n, typeof r != "symbol" ? r + "" : r, e);
import * as P from "react";
import et, { useDebugValue as _a, createElement as gd, useRef as st, useContext as Sn, isValidElement as vd, version as yd, createContext as na, useLayoutEffect as bd, useEffect as wt, useState as St, forwardRef as wl, useImperativeHandle as El } from "react";
import Na from "react-dom";
var Cr = Po;
(function(n, r) {
  for (var e = Po, i = n(); ; )
    try {
      var s = parseInt(e(383)) / 1 * (-parseInt(e(402)) / 2) + -parseInt(e(376)) / 3 + -parseInt(e(400)) / 4 * (-parseInt(e(371)) / 5) + -parseInt(e(385)) / 6 + -parseInt(e(389)) / 7 * (-parseInt(e(379)) / 8) + -parseInt(e(374)) / 9 + parseInt(e(394)) / 10;
      if (s === r) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(ko, 959314);
typeof globalThis !== Cr(378) || typeof window !== Cr(378) || (typeof global !== Cr(378) ? global : Cr(378));
function Sd(n) {
  var r = Cr;
  return n && n[r(372)] && Object[r(375)][r(387) + r(370)][r(373)](n, r(392)) ? n[r(392)] : n;
}
function Po(n, r) {
  var e = ko();
  return Po = function(i, s) {
    i = i - 370;
    var a = e[i];
    return a;
  }, Po(n, r);
}
function ko() {
  var n = ["23875370laYVZF", "MFoIV", "gbNDC", "apply", "constructo", "TUdho", "4gMfOBv", "construct", "2220802qDimFM", "length", "AIUPE", "erty", "9155255pRxEWF", "__esModule", "call", "4362822zJpScr", "prototype", "4147143ziYsyV", "lkCNN", "undefined", "24wTMOcn", "function", "get", "forEach", "1zVWAQm", "ptor", "8621466KqzTjP", "defineProp", "hasOwnProp", "keys", "2695413uyLnjn", "value", "ertyDescri", "default", "getOwnProp"];
  return ko = function() {
    return n;
  }, ko();
}
var $r = { exports: {} }, gr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ja;
function wd() {
  if (ja) return gr;
  ja = 1;
  var n = et, r = Symbol.for("react.element"), e = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, s = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(u, f, d) {
    var m, x = {}, h = null, w = null;
    d !== void 0 && (h = "" + d), f.key !== void 0 && (h = "" + f.key), f.ref !== void 0 && (w = f.ref);
    for (m in f) i.call(f, m) && !a.hasOwnProperty(m) && (x[m] = f[m]);
    if (u && u.defaultProps) for (m in f = u.defaultProps, f) x[m] === void 0 && (x[m] = f[m]);
    return { $$typeof: r, type: u, key: h, ref: w, props: x, _owner: s.current };
  }
  return gr.Fragment = e, gr.jsx = c, gr.jsxs = c, gr;
}
var vr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ma;
function Ed() {
  return Ma || (Ma = 1, process.env.NODE_ENV !== "production" && function() {
    var n = et, r = Symbol.for("react.element"), e = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), u = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), S = Symbol.iterator, v = "@@iterator";
    function y(b) {
      if (b === null || typeof b != "object")
        return null;
      var H = S && b[S] || b[v];
      return typeof H == "function" ? H : null;
    }
    var A = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(b) {
      {
        for (var H = arguments.length, J = new Array(H > 1 ? H - 1 : 0), de = 1; de < H; de++)
          J[de - 1] = arguments[de];
        g("error", b, J);
      }
    }
    function g(b, H, J) {
      {
        var de = A.ReactDebugCurrentFrame, _e = de.getStackAddendum();
        _e !== "" && (H += "%s", J = J.concat([_e]));
        var je = J.map(function(Re) {
          return String(Re);
        });
        je.unshift("Warning: " + H), Function.prototype.apply.call(console[b], console, je);
      }
    }
    var M = !1, C = !1, B = !1, _ = !1, Y = !1, ne;
    ne = Symbol.for("react.module.reference");
    function ue(b) {
      return !!(typeof b == "string" || typeof b == "function" || b === i || b === a || Y || b === s || b === d || b === m || _ || b === w || M || C || B || typeof b == "object" && b !== null && (b.$$typeof === h || b.$$typeof === x || b.$$typeof === c || b.$$typeof === u || b.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      b.$$typeof === ne || b.getModuleId !== void 0));
    }
    function Ee(b, H, J) {
      var de = b.displayName;
      if (de)
        return de;
      var _e = H.displayName || H.name || "";
      return _e !== "" ? J + "(" + _e + ")" : J;
    }
    function he(b) {
      return b.displayName || "Context";
    }
    function te(b) {
      if (b == null)
        return null;
      if (typeof b.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof b == "function")
        return b.displayName || b.name || null;
      if (typeof b == "string")
        return b;
      switch (b) {
        case i:
          return "Fragment";
        case e:
          return "Portal";
        case a:
          return "Profiler";
        case s:
          return "StrictMode";
        case d:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof b == "object")
        switch (b.$$typeof) {
          case u:
            var H = b;
            return he(H) + ".Consumer";
          case c:
            var J = b;
            return he(J._context) + ".Provider";
          case f:
            return Ee(b, b.render, "ForwardRef");
          case x:
            var de = b.displayName || null;
            return de !== null ? de : te(b.type) || "Memo";
          case h: {
            var _e = b, je = _e._payload, Re = _e._init;
            try {
              return te(Re(je));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var le = Object.assign, ie = 0, be, me, ve, ye, xe, fe, se;
    function ge() {
    }
    ge.__reactDisabledLog = !0;
    function Pe() {
      {
        if (ie === 0) {
          be = console.log, me = console.info, ve = console.warn, ye = console.error, xe = console.group, fe = console.groupCollapsed, se = console.groupEnd;
          var b = {
            configurable: !0,
            enumerable: !0,
            value: ge,
            writable: !0
          };
          Object.defineProperties(console, {
            info: b,
            log: b,
            warn: b,
            error: b,
            group: b,
            groupCollapsed: b,
            groupEnd: b
          });
        }
        ie++;
      }
    }
    function Ce() {
      {
        if (ie--, ie === 0) {
          var b = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: le({}, b, {
              value: be
            }),
            info: le({}, b, {
              value: me
            }),
            warn: le({}, b, {
              value: ve
            }),
            error: le({}, b, {
              value: ye
            }),
            group: le({}, b, {
              value: xe
            }),
            groupCollapsed: le({}, b, {
              value: fe
            }),
            groupEnd: le({}, b, {
              value: se
            })
          });
        }
        ie < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ke = A.ReactCurrentDispatcher, $;
    function X(b, H, J) {
      {
        if ($ === void 0)
          try {
            throw Error();
          } catch (_e) {
            var de = _e.stack.trim().match(/\n( *(at )?)/);
            $ = de && de[1] || "";
          }
        return `
` + $ + b;
      }
    }
    var q = !1, Q;
    {
      var F = typeof WeakMap == "function" ? WeakMap : Map;
      Q = new F();
    }
    function re(b, H) {
      if (!b || q)
        return "";
      {
        var J = Q.get(b);
        if (J !== void 0)
          return J;
      }
      var de;
      q = !0;
      var _e = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var je;
      je = ke.current, ke.current = null, Pe();
      try {
        if (H) {
          var Re = function() {
            throw Error();
          };
          if (Object.defineProperty(Re.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Re, []);
            } catch (bt) {
              de = bt;
            }
            Reflect.construct(b, [], Re);
          } else {
            try {
              Re.call();
            } catch (bt) {
              de = bt;
            }
            b.call(Re.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (bt) {
            de = bt;
          }
          b();
        }
      } catch (bt) {
        if (bt && de && typeof bt.stack == "string") {
          for (var Ae = bt.stack.split(`
`), ht = de.stack.split(`
`), Xe = Ae.length - 1, Ge = ht.length - 1; Xe >= 1 && Ge >= 0 && Ae[Xe] !== ht[Ge]; )
            Ge--;
          for (; Xe >= 1 && Ge >= 0; Xe--, Ge--)
            if (Ae[Xe] !== ht[Ge]) {
              if (Xe !== 1 || Ge !== 1)
                do
                  if (Xe--, Ge--, Ge < 0 || Ae[Xe] !== ht[Ge]) {
                    var Ke = `
` + Ae[Xe].replace(" at new ", " at ");
                    return b.displayName && Ke.includes("<anonymous>") && (Ke = Ke.replace("<anonymous>", b.displayName)), typeof b == "function" && Q.set(b, Ke), Ke;
                  }
                while (Xe >= 1 && Ge >= 0);
              break;
            }
        }
      } finally {
        q = !1, ke.current = je, Ce(), Error.prepareStackTrace = _e;
      }
      var Hn = b ? b.displayName || b.name : "", An = Hn ? X(Hn) : "";
      return typeof b == "function" && Q.set(b, An), An;
    }
    function tt(b, H, J) {
      return re(b, !1);
    }
    function ee(b) {
      var H = b.prototype;
      return !!(H && H.isReactComponent);
    }
    function Se(b, H, J) {
      if (b == null)
        return "";
      if (typeof b == "function")
        return re(b, ee(b));
      if (typeof b == "string")
        return X(b);
      switch (b) {
        case d:
          return X("Suspense");
        case m:
          return X("SuspenseList");
      }
      if (typeof b == "object")
        switch (b.$$typeof) {
          case f:
            return tt(b.render);
          case x:
            return Se(b.type, H, J);
          case h: {
            var de = b, _e = de._payload, je = de._init;
            try {
              return Se(je(_e), H, J);
            } catch {
            }
          }
        }
      return "";
    }
    var Ve = Object.prototype.hasOwnProperty, At = {}, It = A.ReactDebugCurrentFrame;
    function mt(b) {
      if (b) {
        var H = b._owner, J = Se(b.type, b._source, H ? H.type : null);
        It.setExtraStackFrame(J);
      } else
        It.setExtraStackFrame(null);
    }
    function _t(b, H, J, de, _e) {
      {
        var je = Function.call.bind(Ve);
        for (var Re in b)
          if (je(b, Re)) {
            var Ae = void 0;
            try {
              if (typeof b[Re] != "function") {
                var ht = Error((de || "React class") + ": " + J + " type `" + Re + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof b[Re] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ht.name = "Invariant Violation", ht;
              }
              Ae = b[Re](H, Re, de, J, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Xe) {
              Ae = Xe;
            }
            Ae && !(Ae instanceof Error) && (mt(_e), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", de || "React class", J, Re, typeof Ae), mt(null)), Ae instanceof Error && !(Ae.message in At) && (At[Ae.message] = !0, mt(_e), T("Failed %s type: %s", J, Ae.message), mt(null));
          }
      }
    }
    var $e = Array.isArray;
    function We(b) {
      return $e(b);
    }
    function at(b) {
      {
        var H = typeof Symbol == "function" && Symbol.toStringTag, J = H && b[Symbol.toStringTag] || b.constructor.name || "Object";
        return J;
      }
    }
    function Nt(b) {
      try {
        return Ot(b), !1;
      } catch {
        return !0;
      }
    }
    function Ot(b) {
      return "" + b;
    }
    function un(b) {
      if (Nt(b))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", at(b)), Ot(b);
    }
    var fn = A.ReactCurrentOwner, Vn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, dn, hn;
    function K(b) {
      if (Ve.call(b, "ref")) {
        var H = Object.getOwnPropertyDescriptor(b, "ref").get;
        if (H && H.isReactWarning)
          return !1;
      }
      return b.ref !== void 0;
    }
    function O(b) {
      if (Ve.call(b, "key")) {
        var H = Object.getOwnPropertyDescriptor(b, "key").get;
        if (H && H.isReactWarning)
          return !1;
      }
      return b.key !== void 0;
    }
    function Be(b, H) {
      typeof b.ref == "string" && fn.current;
    }
    function Fe(b, H) {
      {
        var J = function() {
          dn || (dn = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", H));
        };
        J.isReactWarning = !0, Object.defineProperty(b, "key", {
          get: J,
          configurable: !0
        });
      }
    }
    function ct(b, H) {
      {
        var J = function() {
          hn || (hn = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", H));
        };
        J.isReactWarning = !0, Object.defineProperty(b, "ref", {
          get: J,
          configurable: !0
        });
      }
    }
    var pe = function(b, H, J, de, _e, je, Re) {
      var Ae = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: b,
        key: H,
        ref: J,
        props: Re,
        // Record the component responsible for creating this element.
        _owner: je
      };
      return Ae._store = {}, Object.defineProperty(Ae._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ae, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: de
      }), Object.defineProperty(Ae, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _e
      }), Object.freeze && (Object.freeze(Ae.props), Object.freeze(Ae)), Ae;
    };
    function He(b, H, J, de, _e) {
      {
        var je, Re = {}, Ae = null, ht = null;
        J !== void 0 && (un(J), Ae = "" + J), O(H) && (un(H.key), Ae = "" + H.key), K(H) && (ht = H.ref, Be(H, _e));
        for (je in H)
          Ve.call(H, je) && !Vn.hasOwnProperty(je) && (Re[je] = H[je]);
        if (b && b.defaultProps) {
          var Xe = b.defaultProps;
          for (je in Xe)
            Re[je] === void 0 && (Re[je] = Xe[je]);
        }
        if (Ae || ht) {
          var Ge = typeof b == "function" ? b.displayName || b.name || "Unknown" : b;
          Ae && Fe(Re, Ge), ht && ct(Re, Ge);
        }
        return pe(b, Ae, ht, _e, de, fn.current, Re);
      }
    }
    var Ne = A.ReactCurrentOwner, Rt = A.ReactDebugCurrentFrame;
    function gt(b) {
      if (b) {
        var H = b._owner, J = Se(b.type, b._source, H ? H.type : null);
        Rt.setExtraStackFrame(J);
      } else
        Rt.setExtraStackFrame(null);
    }
    var Pt;
    Pt = !1;
    function Tn(b) {
      return typeof b == "object" && b !== null && b.$$typeof === r;
    }
    function ft() {
      {
        if (Ne.current) {
          var b = te(Ne.current.type);
          if (b)
            return `

Check the render method of \`` + b + "`.";
        }
        return "";
      }
    }
    function vt(b) {
      return "";
    }
    var dt = {};
    function Yt(b) {
      {
        var H = ft();
        if (!H) {
          var J = typeof b == "string" ? b : b.displayName || b.name;
          J && (H = `

Check the top-level render call using <` + J + ">.");
        }
        return H;
      }
    }
    function yt(b, H) {
      {
        if (!b._store || b._store.validated || b.key != null)
          return;
        b._store.validated = !0;
        var J = Yt(H);
        if (dt[J])
          return;
        dt[J] = !0;
        var de = "";
        b && b._owner && b._owner !== Ne.current && (de = " It was passed a child from " + te(b._owner.type) + "."), gt(b), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', J, de), gt(null);
      }
    }
    function pn(b, H) {
      {
        if (typeof b != "object")
          return;
        if (We(b))
          for (var J = 0; J < b.length; J++) {
            var de = b[J];
            Tn(de) && yt(de, H);
          }
        else if (Tn(b))
          b._store && (b._store.validated = !0);
        else if (b) {
          var _e = y(b);
          if (typeof _e == "function" && _e !== b.entries)
            for (var je = _e.call(b), Re; !(Re = je.next()).done; )
              Tn(Re.value) && yt(Re.value, H);
        }
      }
    }
    function jt(b) {
      {
        var H = b.type;
        if (H == null || typeof H == "string")
          return;
        var J;
        if (typeof H == "function")
          J = H.propTypes;
        else if (typeof H == "object" && (H.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        H.$$typeof === x))
          J = H.propTypes;
        else
          return;
        if (J) {
          var de = te(H);
          _t(J, b.props, "prop", de, b);
        } else if (H.PropTypes !== void 0 && !Pt) {
          Pt = !0;
          var _e = te(H);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _e || "Unknown");
        }
        typeof H.getDefaultProps == "function" && !H.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function xn(b) {
      {
        for (var H = Object.keys(b.props), J = 0; J < H.length; J++) {
          var de = H[J];
          if (de !== "children" && de !== "key") {
            gt(b), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", de), gt(null);
            break;
          }
        }
        b.ref !== null && (gt(b), T("Invalid attribute `ref` supplied to `React.Fragment`."), gt(null));
      }
    }
    var mr = {};
    function Wr(b, H, J, de, _e, je) {
      {
        var Re = ue(b);
        if (!Re) {
          var Ae = "";
          (b === void 0 || typeof b == "object" && b !== null && Object.keys(b).length === 0) && (Ae += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ht = vt();
          ht ? Ae += ht : Ae += ft();
          var Xe;
          b === null ? Xe = "null" : We(b) ? Xe = "array" : b !== void 0 && b.$$typeof === r ? (Xe = "<" + (te(b.type) || "Unknown") + " />", Ae = " Did you accidentally export a JSX literal instead of a component?") : Xe = typeof b, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Xe, Ae);
        }
        var Ge = He(b, H, J, _e, je);
        if (Ge == null)
          return Ge;
        if (Re) {
          var Ke = H.children;
          if (Ke !== void 0)
            if (de)
              if (We(Ke)) {
                for (var Hn = 0; Hn < Ke.length; Hn++)
                  pn(Ke[Hn], b);
                Object.freeze && Object.freeze(Ke);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              pn(Ke, b);
        }
        if (Ve.call(H, "key")) {
          var An = te(b), bt = Object.keys(H).filter(function(pd) {
            return pd !== "key";
          }), Oi = bt.length > 0 ? "{key: someKey, " + bt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!mr[An + Oi]) {
            var hd = bt.length > 0 ? "{" + bt.join(": ..., ") + ": ...}" : "{}";
            T(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Oi, An, hd, An), mr[An + Oi] = !0;
          }
        }
        return b === i ? xn(Ge) : jt(Ge), Ge;
      }
    }
    function it(b, H, J) {
      return Wr(b, H, J, !0);
    }
    function qr(b, H, J) {
      return Wr(b, H, J, !1);
    }
    var Ai = qr, Ye = it;
    vr.Fragment = i, vr.jsx = Ai, vr.jsxs = Ye;
  }()), vr;
}
var La;
function Cd() {
  return La || (La = 1, process.env.NODE_ENV === "production" ? $r.exports = wd() : $r.exports = Ed()), $r.exports;
}
var ae = Cd(), Et = function() {
  return Et = Object.assign || function(r) {
    for (var e, i = 1, s = arguments.length; i < s; i++) {
      e = arguments[i];
      for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (r[a] = e[a]);
    }
    return r;
  }, Et.apply(this, arguments);
};
function Gn(n, r, e) {
  if (e || arguments.length === 2) for (var i = 0, s = r.length, a; i < s; i++)
    (a || !(i in r)) && (a || (a = Array.prototype.slice.call(r, 0, i)), a[i] = r[i]);
  return n.concat(a || Array.prototype.slice.call(r));
}
function Td(n) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(e) {
    return r[e] === void 0 && (r[e] = n(e)), r[e];
  };
}
var Ad = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Od = /* @__PURE__ */ Td(
  function(n) {
    return Ad.test(n) || n.charCodeAt(0) === 111 && n.charCodeAt(1) === 110 && n.charCodeAt(2) < 91;
  }
  /* Z+1 */
), qe = "-ms-", Or = "-moz-", De = "-webkit-", Cl = "comm", ni = "rule", ra = "decl", Rd = "@import", Tl = "@keyframes", Pd = "@layer", Al = Math.abs, oa = String.fromCharCode, Zi = Object.assign;
function kd(n, r) {
  return ut(n, 0) ^ 45 ? (((r << 2 ^ ut(n, 0)) << 2 ^ ut(n, 1)) << 2 ^ ut(n, 2)) << 2 ^ ut(n, 3) : 0;
}
function Ol(n) {
  return n.trim();
}
function sn(n, r) {
  return (n = r.exec(n)) ? n[0] : n;
}
function Te(n, r, e) {
  return n.replace(r, e);
}
function lo(n, r, e) {
  return n.indexOf(r, e);
}
function ut(n, r) {
  return n.charCodeAt(r) | 0;
}
function Kn(n, r, e) {
  return n.slice(r, e);
}
function Qt(n) {
  return n.length;
}
function Rl(n) {
  return n.length;
}
function Tr(n, r) {
  return r.push(n), n;
}
function Id(n, r) {
  return n.map(r).join("");
}
function Da(n, r) {
  return n.filter(function(e) {
    return !sn(e, r);
  });
}
var ri = 1, Zn = 1, Pl = 0, Dt = 0, nt = 0, ar = "";
function oi(n, r, e, i, s, a, c, u) {
  return { value: n, root: r, parent: e, type: i, props: s, children: a, line: ri, column: Zn, length: c, return: "", siblings: u };
}
function mn(n, r) {
  return Zi(oi("", null, null, "", null, null, 0, n.siblings), n, { length: -n.length }, r);
}
function Un(n) {
  for (; n.root; )
    n = mn(n.root, { children: [n] });
  Tr(n, n.siblings);
}
function _d() {
  return nt;
}
function Nd() {
  return nt = Dt > 0 ? ut(ar, --Dt) : 0, Zn--, nt === 10 && (Zn = 1, ri--), nt;
}
function Vt() {
  return nt = Dt < Pl ? ut(ar, Dt++) : 0, Zn++, nt === 10 && (Zn = 1, ri++), nt;
}
function Nn() {
  return ut(ar, Dt);
}
function uo() {
  return Dt;
}
function ii(n, r) {
  return Kn(ar, n, r);
}
function Qi(n) {
  switch (n) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function jd(n) {
  return ri = Zn = 1, Pl = Qt(ar = n), Dt = 0, [];
}
function Md(n) {
  return ar = "", n;
}
function Ri(n) {
  return Ol(ii(Dt - 1, Ji(n === 91 ? n + 2 : n === 40 ? n + 1 : n)));
}
function Ld(n) {
  for (; (nt = Nn()) && nt < 33; )
    Vt();
  return Qi(n) > 2 || Qi(nt) > 3 ? "" : " ";
}
function Dd(n, r) {
  for (; --r && Vt() && !(nt < 48 || nt > 102 || nt > 57 && nt < 65 || nt > 70 && nt < 97); )
    ;
  return ii(n, uo() + (r < 6 && Nn() == 32 && Vt() == 32));
}
function Ji(n) {
  for (; Vt(); )
    switch (nt) {
      // ] ) " '
      case n:
        return Dt;
      // " '
      case 34:
      case 39:
        n !== 34 && n !== 39 && Ji(nt);
        break;
      // (
      case 40:
        n === 41 && Ji(n);
        break;
      // \
      case 92:
        Vt();
        break;
    }
  return Dt;
}
function Bd(n, r) {
  for (; Vt() && n + nt !== 57; )
    if (n + nt === 84 && Nn() === 47)
      break;
  return "/*" + ii(r, Dt - 1) + "*" + oa(n === 47 ? n : Vt());
}
function Fd(n) {
  for (; !Qi(Nn()); )
    Vt();
  return ii(n, Dt);
}
function zd(n) {
  return Md(fo("", null, null, null, [""], n = jd(n), 0, [0], n));
}
function fo(n, r, e, i, s, a, c, u, f) {
  for (var d = 0, m = 0, x = c, h = 0, w = 0, S = 0, v = 1, y = 1, A = 1, T = 0, g = "", M = s, C = a, B = i, _ = g; y; )
    switch (S = T, T = Vt()) {
      // (
      case 40:
        if (S != 108 && ut(_, x - 1) == 58) {
          lo(_ += Te(Ri(T), "&", "&\f"), "&\f", Al(d ? u[d - 1] : 0)) != -1 && (A = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        _ += Ri(T);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        _ += Ld(S);
        break;
      // \
      case 92:
        _ += Dd(uo() - 1, 7);
        continue;
      // /
      case 47:
        switch (Nn()) {
          case 42:
          case 47:
            Tr(Vd(Bd(Vt(), uo()), r, e, f), f);
            break;
          default:
            _ += "/";
        }
        break;
      // {
      case 123 * v:
        u[d++] = Qt(_) * A;
      // } ; \0
      case 125 * v:
      case 59:
      case 0:
        switch (T) {
          // \0 }
          case 0:
          case 125:
            y = 0;
          // ;
          case 59 + m:
            A == -1 && (_ = Te(_, /\f/g, "")), w > 0 && Qt(_) - x && Tr(w > 32 ? Fa(_ + ";", i, e, x - 1, f) : Fa(Te(_, " ", "") + ";", i, e, x - 2, f), f);
            break;
          // @ ;
          case 59:
            _ += ";";
          // { rule/at-rule
          default:
            if (Tr(B = Ba(_, r, e, d, m, s, u, g, M = [], C = [], x, a), a), T === 123)
              if (m === 0)
                fo(_, r, B, B, M, a, x, u, C);
              else
                switch (h === 99 && ut(_, 3) === 110 ? 100 : h) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    fo(n, B, B, i && Tr(Ba(n, B, B, 0, 0, s, u, g, s, M = [], x, C), C), s, C, x, u, i ? M : C);
                    break;
                  default:
                    fo(_, B, B, B, [""], C, 0, u, C);
                }
        }
        d = m = w = 0, v = A = 1, g = _ = "", x = c;
        break;
      // :
      case 58:
        x = 1 + Qt(_), w = S;
      default:
        if (v < 1) {
          if (T == 123)
            --v;
          else if (T == 125 && v++ == 0 && Nd() == 125)
            continue;
        }
        switch (_ += oa(T), T * v) {
          // &
          case 38:
            A = m > 0 ? 1 : (_ += "\f", -1);
            break;
          // ,
          case 44:
            u[d++] = (Qt(_) - 1) * A, A = 1;
            break;
          // @
          case 64:
            Nn() === 45 && (_ += Ri(Vt())), h = Nn(), m = x = Qt(g = _ += Fd(uo())), T++;
            break;
          // -
          case 45:
            S === 45 && Qt(_) == 2 && (v = 0);
        }
    }
  return a;
}
function Ba(n, r, e, i, s, a, c, u, f, d, m, x) {
  for (var h = s - 1, w = s === 0 ? a : [""], S = Rl(w), v = 0, y = 0, A = 0; v < i; ++v)
    for (var T = 0, g = Kn(n, h + 1, h = Al(y = c[v])), M = n; T < S; ++T)
      (M = Ol(y > 0 ? w[T] + " " + g : Te(g, /&\f/g, w[T]))) && (f[A++] = M);
  return oi(n, r, e, s === 0 ? ni : u, f, d, m, x);
}
function Vd(n, r, e, i) {
  return oi(n, r, e, Cl, oa(_d()), Kn(n, 2, -2), 0, i);
}
function Fa(n, r, e, i, s) {
  return oi(n, r, e, ra, Kn(n, 0, i), Kn(n, i + 1, -1), i, s);
}
function kl(n, r, e) {
  switch (kd(n, r)) {
    // color-adjust
    case 5103:
      return De + "print-" + n + n;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return De + n + n;
    // tab-size
    case 4789:
      return Or + n + n;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return De + n + Or + n + qe + n + n;
    // writing-mode
    case 5936:
      switch (ut(n, r + 11)) {
        // vertical-l(r)
        case 114:
          return De + n + qe + Te(n, /[svh]\w+-[tblr]{2}/, "tb") + n;
        // vertical-r(l)
        case 108:
          return De + n + qe + Te(n, /[svh]\w+-[tblr]{2}/, "tb-rl") + n;
        // horizontal(-)tb
        case 45:
          return De + n + qe + Te(n, /[svh]\w+-[tblr]{2}/, "lr") + n;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return De + n + qe + n + n;
    // order
    case 6165:
      return De + n + qe + "flex-" + n + n;
    // align-items
    case 5187:
      return De + n + Te(n, /(\w+).+(:[^]+)/, De + "box-$1$2" + qe + "flex-$1$2") + n;
    // align-self
    case 5443:
      return De + n + qe + "flex-item-" + Te(n, /flex-|-self/g, "") + (sn(n, /flex-|baseline/) ? "" : qe + "grid-row-" + Te(n, /flex-|-self/g, "")) + n;
    // align-content
    case 4675:
      return De + n + qe + "flex-line-pack" + Te(n, /align-content|flex-|-self/g, "") + n;
    // flex-shrink
    case 5548:
      return De + n + qe + Te(n, "shrink", "negative") + n;
    // flex-basis
    case 5292:
      return De + n + qe + Te(n, "basis", "preferred-size") + n;
    // flex-grow
    case 6060:
      return De + "box-" + Te(n, "-grow", "") + De + n + qe + Te(n, "grow", "positive") + n;
    // transition
    case 4554:
      return De + Te(n, /([^-])(transform)/g, "$1" + De + "$2") + n;
    // cursor
    case 6187:
      return Te(Te(Te(n, /(zoom-|grab)/, De + "$1"), /(image-set)/, De + "$1"), n, "") + n;
    // background, background-image
    case 5495:
    case 3959:
      return Te(n, /(image-set\([^]*)/, De + "$1$`$1");
    // justify-content
    case 4968:
      return Te(Te(n, /(.+:)(flex-)?(.*)/, De + "box-pack:$3" + qe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + De + n + n;
    // justify-self
    case 4200:
      if (!sn(n, /flex-|baseline/)) return qe + "grid-column-align" + Kn(n, r) + n;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return qe + Te(n, "template-", "") + n;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return e && e.some(function(i, s) {
        return r = s, sn(i.props, /grid-\w+-end/);
      }) ? ~lo(n + (e = e[r].value), "span", 0) ? n : qe + Te(n, "-start", "") + n + qe + "grid-row-span:" + (~lo(e, "span", 0) ? sn(e, /\d+/) : +sn(e, /\d+/) - +sn(n, /\d+/)) + ";" : qe + Te(n, "-start", "") + n;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return e && e.some(function(i) {
        return sn(i.props, /grid-\w+-start/);
      }) ? n : qe + Te(Te(n, "-end", "-span"), "span ", "") + n;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Te(n, /(.+)-inline(.+)/, De + "$1$2") + n;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Qt(n) - 1 - r > 6)
        switch (ut(n, r + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (ut(n, r + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return Te(n, /(.+:)(.+)-([^]+)/, "$1" + De + "$2-$3$1" + Or + (ut(n, r + 3) == 108 ? "$3" : "$2-$3")) + n;
          // (s)tretch
          case 115:
            return ~lo(n, "stretch", 0) ? kl(Te(n, "stretch", "fill-available"), r, e) + n : n;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return Te(n, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(i, s, a, c, u, f, d) {
        return qe + s + ":" + a + d + (c ? qe + s + "-span:" + (u ? f : +f - +a) + d : "") + n;
      });
    // position: sticky
    case 4949:
      if (ut(n, r + 6) === 121)
        return Te(n, ":", ":" + De) + n;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (ut(n, ut(n, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return Te(n, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + De + (ut(n, 14) === 45 ? "inline-" : "") + "box$3$1" + De + "$2$3$1" + qe + "$2box$3") + n;
        // (inline-)?gri(d)
        case 100:
          return Te(n, ":", ":" + qe) + n;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return Te(n, "scroll-", "scroll-snap-") + n;
  }
  return n;
}
function Io(n, r) {
  for (var e = "", i = 0; i < n.length; i++)
    e += r(n[i], i, n, r) || "";
  return e;
}
function Hd(n, r, e, i) {
  switch (n.type) {
    case Pd:
      if (n.children.length) break;
    case Rd:
    case ra:
      return n.return = n.return || n.value;
    case Cl:
      return "";
    case Tl:
      return n.return = n.value + "{" + Io(n.children, i) + "}";
    case ni:
      if (!Qt(n.value = n.props.join(","))) return "";
  }
  return Qt(e = Io(n.children, i)) ? n.return = n.value + "{" + e + "}" : "";
}
function Ud(n) {
  var r = Rl(n);
  return function(e, i, s, a) {
    for (var c = "", u = 0; u < r; u++)
      c += n[u](e, i, s, a) || "";
    return c;
  };
}
function Wd(n) {
  return function(r) {
    r.root || (r = r.return) && n(r);
  };
}
function qd(n, r, e, i) {
  if (n.length > -1 && !n.return)
    switch (n.type) {
      case ra:
        n.return = kl(n.value, n.length, e);
        return;
      case Tl:
        return Io([mn(n, { value: Te(n.value, "@", "@" + De) })], i);
      case ni:
        if (n.length)
          return Id(e = n.props, function(s) {
            switch (sn(s, i = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                Un(mn(n, { props: [Te(s, /:(read-\w+)/, ":" + Or + "$1")] })), Un(mn(n, { props: [s] })), Zi(n, { props: Da(e, i) });
                break;
              // :placeholder
              case "::placeholder":
                Un(mn(n, { props: [Te(s, /:(plac\w+)/, ":" + De + "input-$1")] })), Un(mn(n, { props: [Te(s, /:(plac\w+)/, ":" + Or + "$1")] })), Un(mn(n, { props: [Te(s, /:(plac\w+)/, qe + "input-$1")] })), Un(mn(n, { props: [s] })), Zi(n, { props: Da(e, i) });
                break;
            }
            return "";
          });
    }
}
var $d = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Fn = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Il = "active", _l = "data-styled-version", si = "6.1.18", ia = `/*!sc*/
`, _o = typeof window < "u" && typeof document < "u", Xd = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), za = /invalid hook call/i, Xr = /* @__PURE__ */ new Set(), Yd = function(n, r) {
  if (process.env.NODE_ENV !== "production") {
    var e = r ? ' with the id of "'.concat(r, '"') : "", i = "The component ".concat(n).concat(e, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, s = console.error;
    try {
      var a = !0;
      console.error = function(c) {
        for (var u = [], f = 1; f < arguments.length; f++) u[f - 1] = arguments[f];
        za.test(c) ? (a = !1, Xr.delete(i)) : s.apply(void 0, Gn([c], u, !1));
      }, st(), a && !Xr.has(i) && (console.warn(i), Xr.add(i));
    } catch (c) {
      za.test(c.message) && Xr.delete(i);
    } finally {
      console.error = s;
    }
  }
}, ai = Object.freeze([]), Qn = Object.freeze({});
function Gd(n, r, e) {
  return e === void 0 && (e = Qn), n.theme !== e.theme && n.theme || r || e.theme;
}
var es = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Kd = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Zd = /(^-|-$)/g;
function Va(n) {
  return n.replace(Kd, "-").replace(Zd, "");
}
var Qd = /(a)(d)/gi, Yr = 52, Ha = function(n) {
  return String.fromCharCode(n + (n > 25 ? 39 : 97));
};
function ts(n) {
  var r, e = "";
  for (r = Math.abs(n); r > Yr; r = r / Yr | 0) e = Ha(r % Yr) + e;
  return (Ha(r % Yr) + e).replace(Qd, "$1-$2");
}
var Pi, Nl = 5381, Rn = function(n, r) {
  for (var e = r.length; e; ) n = 33 * n ^ r.charCodeAt(--e);
  return n;
}, jl = function(n) {
  return Rn(Nl, n);
};
function Jd(n) {
  return ts(jl(n) >>> 0);
}
function Ml(n) {
  return process.env.NODE_ENV !== "production" && typeof n == "string" && n || n.displayName || n.name || "Component";
}
function ki(n) {
  return typeof n == "string" && (process.env.NODE_ENV === "production" || n.charAt(0) === n.charAt(0).toLowerCase());
}
var Ll = typeof Symbol == "function" && Symbol.for, Dl = Ll ? Symbol.for("react.memo") : 60115, e0 = Ll ? Symbol.for("react.forward_ref") : 60112, t0 = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, n0 = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Bl = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, r0 = ((Pi = {})[e0] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Pi[Dl] = Bl, Pi);
function Ua(n) {
  return ("type" in (r = n) && r.type.$$typeof) === Dl ? Bl : "$$typeof" in n ? r0[n.$$typeof] : t0;
  var r;
}
var o0 = Object.defineProperty, i0 = Object.getOwnPropertyNames, Wa = Object.getOwnPropertySymbols, s0 = Object.getOwnPropertyDescriptor, a0 = Object.getPrototypeOf, qa = Object.prototype;
function Fl(n, r, e) {
  if (typeof r != "string") {
    if (qa) {
      var i = a0(r);
      i && i !== qa && Fl(n, i, e);
    }
    var s = i0(r);
    Wa && (s = s.concat(Wa(r)));
    for (var a = Ua(n), c = Ua(r), u = 0; u < s.length; ++u) {
      var f = s[u];
      if (!(f in n0 || e && e[f] || c && f in c || a && f in a)) {
        var d = s0(r, f);
        try {
          o0(n, f, d);
        } catch {
        }
      }
    }
  }
  return n;
}
function Jn(n) {
  return typeof n == "function";
}
function sa(n) {
  return typeof n == "object" && "styledComponentId" in n;
}
function kn(n, r) {
  return n && r ? "".concat(n, " ").concat(r) : n || r || "";
}
function $a(n, r) {
  if (n.length === 0) return "";
  for (var e = n[0], i = 1; i < n.length; i++) e += n[i];
  return e;
}
function er(n) {
  return n !== null && typeof n == "object" && n.constructor.name === Object.name && !("props" in n && n.$$typeof);
}
function ns(n, r, e) {
  if (e === void 0 && (e = !1), !e && !er(n) && !Array.isArray(n)) return r;
  if (Array.isArray(r)) for (var i = 0; i < r.length; i++) n[i] = ns(n[i], r[i]);
  else if (er(r)) for (var i in r) n[i] = ns(n[i], r[i]);
  return n;
}
function aa(n, r) {
  Object.defineProperty(n, "toString", { value: r });
}
var c0 = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
function l0() {
  for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
  for (var e = n[0], i = [], s = 1, a = n.length; s < a; s += 1) i.push(n[s]);
  return i.forEach(function(c) {
    e = e.replace(/%[a-z]/, c);
  }), e;
}
function cr(n) {
  for (var r = [], e = 1; e < arguments.length; e++) r[e - 1] = arguments[e];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n, " for more information.").concat(r.length > 0 ? " Args: ".concat(r.join(", ")) : "")) : new Error(l0.apply(void 0, Gn([c0[n]], r, !1)).trim());
}
var u0 = function() {
  function n(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  return n.prototype.indexOfGroup = function(r) {
    for (var e = 0, i = 0; i < r; i++) e += this.groupSizes[i];
    return e;
  }, n.prototype.insertRules = function(r, e) {
    if (r >= this.groupSizes.length) {
      for (var i = this.groupSizes, s = i.length, a = s; r >= a; ) if ((a <<= 1) < 0) throw cr(16, "".concat(r));
      this.groupSizes = new Uint32Array(a), this.groupSizes.set(i), this.length = a;
      for (var c = s; c < a; c++) this.groupSizes[c] = 0;
    }
    for (var u = this.indexOfGroup(r + 1), f = (c = 0, e.length); c < f; c++) this.tag.insertRule(u, e[c]) && (this.groupSizes[r]++, u++);
  }, n.prototype.clearGroup = function(r) {
    if (r < this.length) {
      var e = this.groupSizes[r], i = this.indexOfGroup(r), s = i + e;
      this.groupSizes[r] = 0;
      for (var a = i; a < s; a++) this.tag.deleteRule(i);
    }
  }, n.prototype.getGroup = function(r) {
    var e = "";
    if (r >= this.length || this.groupSizes[r] === 0) return e;
    for (var i = this.groupSizes[r], s = this.indexOfGroup(r), a = s + i, c = s; c < a; c++) e += "".concat(this.tag.getRule(c)).concat(ia);
    return e;
  }, n;
}(), f0 = 1 << 30, ho = /* @__PURE__ */ new Map(), No = /* @__PURE__ */ new Map(), po = 1, Gr = function(n) {
  if (ho.has(n)) return ho.get(n);
  for (; No.has(po); ) po++;
  var r = po++;
  if (process.env.NODE_ENV !== "production" && ((0 | r) < 0 || r > f0)) throw cr(16, "".concat(r));
  return ho.set(n, r), No.set(r, n), r;
}, d0 = function(n, r) {
  po = r + 1, ho.set(n, r), No.set(r, n);
}, h0 = "style[".concat(Fn, "][").concat(_l, '="').concat(si, '"]'), p0 = new RegExp("^".concat(Fn, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), x0 = function(n, r, e) {
  for (var i, s = e.split(","), a = 0, c = s.length; a < c; a++) (i = s[a]) && n.registerName(r, i);
}, m0 = function(n, r) {
  for (var e, i = ((e = r.textContent) !== null && e !== void 0 ? e : "").split(ia), s = [], a = 0, c = i.length; a < c; a++) {
    var u = i[a].trim();
    if (u) {
      var f = u.match(p0);
      if (f) {
        var d = 0 | parseInt(f[1], 10), m = f[2];
        d !== 0 && (d0(m, d), x0(n, m, f[3]), n.getTag().insertRules(d, s)), s.length = 0;
      } else s.push(u);
    }
  }
}, Xa = function(n) {
  for (var r = document.querySelectorAll(h0), e = 0, i = r.length; e < i; e++) {
    var s = r[e];
    s && s.getAttribute(Fn) !== Il && (m0(n, s), s.parentNode && s.parentNode.removeChild(s));
  }
};
function g0() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var zl = function(n) {
  var r = document.head, e = n || r, i = document.createElement("style"), s = function(u) {
    var f = Array.from(u.querySelectorAll("style[".concat(Fn, "]")));
    return f[f.length - 1];
  }(e), a = s !== void 0 ? s.nextSibling : null;
  i.setAttribute(Fn, Il), i.setAttribute(_l, si);
  var c = g0();
  return c && i.setAttribute("nonce", c), e.insertBefore(i, a), i;
}, v0 = function() {
  function n(r) {
    this.element = zl(r), this.element.appendChild(document.createTextNode("")), this.sheet = function(e) {
      if (e.sheet) return e.sheet;
      for (var i = document.styleSheets, s = 0, a = i.length; s < a; s++) {
        var c = i[s];
        if (c.ownerNode === e) return c;
      }
      throw cr(17);
    }(this.element), this.length = 0;
  }
  return n.prototype.insertRule = function(r, e) {
    try {
      return this.sheet.insertRule(e, r), this.length++, !0;
    } catch {
      return !1;
    }
  }, n.prototype.deleteRule = function(r) {
    this.sheet.deleteRule(r), this.length--;
  }, n.prototype.getRule = function(r) {
    var e = this.sheet.cssRules[r];
    return e && e.cssText ? e.cssText : "";
  }, n;
}(), y0 = function() {
  function n(r) {
    this.element = zl(r), this.nodes = this.element.childNodes, this.length = 0;
  }
  return n.prototype.insertRule = function(r, e) {
    if (r <= this.length && r >= 0) {
      var i = document.createTextNode(e);
      return this.element.insertBefore(i, this.nodes[r] || null), this.length++, !0;
    }
    return !1;
  }, n.prototype.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, n.prototype.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, n;
}(), b0 = function() {
  function n(r) {
    this.rules = [], this.length = 0;
  }
  return n.prototype.insertRule = function(r, e) {
    return r <= this.length && (this.rules.splice(r, 0, e), this.length++, !0);
  }, n.prototype.deleteRule = function(r) {
    this.rules.splice(r, 1), this.length--;
  }, n.prototype.getRule = function(r) {
    return r < this.length ? this.rules[r] : "";
  }, n;
}(), Ya = _o, S0 = { isServer: !_o, useCSSOMInjection: !Xd }, Vl = function() {
  function n(r, e, i) {
    r === void 0 && (r = Qn), e === void 0 && (e = {});
    var s = this;
    this.options = Et(Et({}, S0), r), this.gs = e, this.names = new Map(i), this.server = !!r.isServer, !this.server && _o && Ya && (Ya = !1, Xa(this)), aa(this, function() {
      return function(a) {
        for (var c = a.getTag(), u = c.length, f = "", d = function(x) {
          var h = function(A) {
            return No.get(A);
          }(x);
          if (h === void 0) return "continue";
          var w = a.names.get(h), S = c.getGroup(x);
          if (w === void 0 || !w.size || S.length === 0) return "continue";
          var v = "".concat(Fn, ".g").concat(x, '[id="').concat(h, '"]'), y = "";
          w !== void 0 && w.forEach(function(A) {
            A.length > 0 && (y += "".concat(A, ","));
          }), f += "".concat(S).concat(v, '{content:"').concat(y, '"}').concat(ia);
        }, m = 0; m < u; m++) d(m);
        return f;
      }(s);
    });
  }
  return n.registerId = function(r) {
    return Gr(r);
  }, n.prototype.rehydrate = function() {
    !this.server && _o && Xa(this);
  }, n.prototype.reconstructWithOptions = function(r, e) {
    return e === void 0 && (e = !0), new n(Et(Et({}, this.options), r), this.gs, e && this.names || void 0);
  }, n.prototype.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, n.prototype.getTag = function() {
    return this.tag || (this.tag = (r = function(e) {
      var i = e.useCSSOMInjection, s = e.target;
      return e.isServer ? new b0(s) : i ? new v0(s) : new y0(s);
    }(this.options), new u0(r)));
    var r;
  }, n.prototype.hasNameForId = function(r, e) {
    return this.names.has(r) && this.names.get(r).has(e);
  }, n.prototype.registerName = function(r, e) {
    if (Gr(r), this.names.has(r)) this.names.get(r).add(e);
    else {
      var i = /* @__PURE__ */ new Set();
      i.add(e), this.names.set(r, i);
    }
  }, n.prototype.insertRules = function(r, e, i) {
    this.registerName(r, e), this.getTag().insertRules(Gr(r), i);
  }, n.prototype.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, n.prototype.clearRules = function(r) {
    this.getTag().clearGroup(Gr(r)), this.clearNames(r);
  }, n.prototype.clearTag = function() {
    this.tag = void 0;
  }, n;
}(), w0 = /&/g, E0 = /^\s*\/\/.*$/gm;
function Hl(n, r) {
  return n.map(function(e) {
    return e.type === "rule" && (e.value = "".concat(r, " ").concat(e.value), e.value = e.value.replaceAll(",", ",".concat(r, " ")), e.props = e.props.map(function(i) {
      return "".concat(r, " ").concat(i);
    })), Array.isArray(e.children) && e.type !== "@keyframes" && (e.children = Hl(e.children, r)), e;
  });
}
function C0(n) {
  var r, e, i, s = Qn, a = s.options, c = a === void 0 ? Qn : a, u = s.plugins, f = u === void 0 ? ai : u, d = function(h, w, S) {
    return S.startsWith(e) && S.endsWith(e) && S.replaceAll(e, "").length > 0 ? ".".concat(r) : h;
  }, m = f.slice();
  m.push(function(h) {
    h.type === ni && h.value.includes("&") && (h.props[0] = h.props[0].replace(w0, e).replace(i, d));
  }), c.prefix && m.push(qd), m.push(Hd);
  var x = function(h, w, S, v) {
    w === void 0 && (w = ""), S === void 0 && (S = ""), v === void 0 && (v = "&"), r = v, e = w, i = new RegExp("\\".concat(e, "\\b"), "g");
    var y = h.replace(E0, ""), A = zd(S || w ? "".concat(S, " ").concat(w, " { ").concat(y, " }") : y);
    c.namespace && (A = Hl(A, c.namespace));
    var T = [];
    return Io(A, Ud(m.concat(Wd(function(g) {
      return T.push(g);
    })))), T;
  };
  return x.hash = f.length ? f.reduce(function(h, w) {
    return w.name || cr(15), Rn(h, w.name);
  }, Nl).toString() : "", x;
}
var T0 = new Vl(), rs = C0(), Ul = et.createContext({ shouldForwardProp: void 0, styleSheet: T0, stylis: rs });
Ul.Consumer;
et.createContext(void 0);
function Ga() {
  return Sn(Ul);
}
var Ka = function() {
  function n(r, e) {
    var i = this;
    this.inject = function(s, a) {
      a === void 0 && (a = rs);
      var c = i.name + a.hash;
      s.hasNameForId(i.id, c) || s.insertRules(i.id, c, a(i.rules, c, "@keyframes"));
    }, this.name = r, this.id = "sc-keyframes-".concat(r), this.rules = e, aa(this, function() {
      throw cr(12, String(i.name));
    });
  }
  return n.prototype.getName = function(r) {
    return r === void 0 && (r = rs), this.name + r.hash;
  }, n;
}(), A0 = function(n) {
  return n >= "A" && n <= "Z";
};
function Za(n) {
  for (var r = "", e = 0; e < n.length; e++) {
    var i = n[e];
    if (e === 1 && i === "-" && n[0] === "-") return n;
    A0(i) ? r += "-" + i.toLowerCase() : r += i;
  }
  return r.startsWith("ms-") ? "-" + r : r;
}
var Wl = function(n) {
  return n == null || n === !1 || n === "";
}, ql = function(n) {
  var r, e, i = [];
  for (var s in n) {
    var a = n[s];
    n.hasOwnProperty(s) && !Wl(a) && (Array.isArray(a) && a.isCss || Jn(a) ? i.push("".concat(Za(s), ":"), a, ";") : er(a) ? i.push.apply(i, Gn(Gn(["".concat(s, " {")], ql(a), !1), ["}"], !1)) : i.push("".concat(Za(s), ": ").concat((r = s, (e = a) == null || typeof e == "boolean" || e === "" ? "" : typeof e != "number" || e === 0 || r in $d || r.startsWith("--") ? String(e).trim() : "".concat(e, "px")), ";")));
  }
  return i;
};
function jn(n, r, e, i) {
  if (Wl(n)) return [];
  if (sa(n)) return [".".concat(n.styledComponentId)];
  if (Jn(n)) {
    if (!Jn(a = n) || a.prototype && a.prototype.isReactComponent || !r) return [n];
    var s = n(r);
    return process.env.NODE_ENV === "production" || typeof s != "object" || Array.isArray(s) || s instanceof Ka || er(s) || s === null || console.error("".concat(Ml(n), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), jn(s, r, e, i);
  }
  var a;
  return n instanceof Ka ? e ? (n.inject(e, i), [n.getName(i)]) : [n] : er(n) ? ql(n) : Array.isArray(n) ? Array.prototype.concat.apply(ai, n.map(function(c) {
    return jn(c, r, e, i);
  })) : [n.toString()];
}
function O0(n) {
  for (var r = 0; r < n.length; r += 1) {
    var e = n[r];
    if (Jn(e) && !sa(e)) return !1;
  }
  return !0;
}
var R0 = jl(si), P0 = function() {
  function n(r, e, i) {
    this.rules = r, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (i === void 0 || i.isStatic) && O0(r), this.componentId = e, this.baseHash = Rn(R0, e), this.baseStyle = i, Vl.registerId(e);
  }
  return n.prototype.generateAndInjectStyles = function(r, e, i) {
    var s = this.baseStyle ? this.baseStyle.generateAndInjectStyles(r, e, i) : "";
    if (this.isStatic && !i.hash) if (this.staticRulesId && e.hasNameForId(this.componentId, this.staticRulesId)) s = kn(s, this.staticRulesId);
    else {
      var a = $a(jn(this.rules, r, e, i)), c = ts(Rn(this.baseHash, a) >>> 0);
      if (!e.hasNameForId(this.componentId, c)) {
        var u = i(a, ".".concat(c), void 0, this.componentId);
        e.insertRules(this.componentId, c, u);
      }
      s = kn(s, c), this.staticRulesId = c;
    }
    else {
      for (var f = Rn(this.baseHash, i.hash), d = "", m = 0; m < this.rules.length; m++) {
        var x = this.rules[m];
        if (typeof x == "string") d += x, process.env.NODE_ENV !== "production" && (f = Rn(f, x));
        else if (x) {
          var h = $a(jn(x, r, e, i));
          f = Rn(f, h + m), d += h;
        }
      }
      if (d) {
        var w = ts(f >>> 0);
        e.hasNameForId(this.componentId, w) || e.insertRules(this.componentId, w, i(d, ".".concat(w), void 0, this.componentId)), s = kn(s, w);
      }
    }
    return s;
  }, n;
}(), $l = et.createContext(void 0);
$l.Consumer;
var Ii = {}, Qa = /* @__PURE__ */ new Set();
function k0(n, r, e) {
  var i = sa(n), s = n, a = !ki(n), c = r.attrs, u = c === void 0 ? ai : c, f = r.componentId, d = f === void 0 ? function(M, C) {
    var B = typeof M != "string" ? "sc" : Va(M);
    Ii[B] = (Ii[B] || 0) + 1;
    var _ = "".concat(B, "-").concat(Jd(si + B + Ii[B]));
    return C ? "".concat(C, "-").concat(_) : _;
  }(r.displayName, r.parentComponentId) : f, m = r.displayName, x = m === void 0 ? function(M) {
    return ki(M) ? "styled.".concat(M) : "Styled(".concat(Ml(M), ")");
  }(n) : m, h = r.displayName && r.componentId ? "".concat(Va(r.displayName), "-").concat(r.componentId) : r.componentId || d, w = i && s.attrs ? s.attrs.concat(u).filter(Boolean) : u, S = r.shouldForwardProp;
  if (i && s.shouldForwardProp) {
    var v = s.shouldForwardProp;
    if (r.shouldForwardProp) {
      var y = r.shouldForwardProp;
      S = function(M, C) {
        return v(M, C) && y(M, C);
      };
    } else S = v;
  }
  var A = new P0(e, h, i ? s.componentStyle : void 0);
  function T(M, C) {
    return function(B, _, Y) {
      var ne = B.attrs, ue = B.componentStyle, Ee = B.defaultProps, he = B.foldedComponentIds, te = B.styledComponentId, le = B.target, ie = et.useContext($l), be = Ga(), me = B.shouldForwardProp || be.shouldForwardProp;
      process.env.NODE_ENV !== "production" && _a(te);
      var ve = Gd(_, ie, Ee) || Qn, ye = function(Ce, ke, $) {
        for (var X, q = Et(Et({}, ke), { className: void 0, theme: $ }), Q = 0; Q < Ce.length; Q += 1) {
          var F = Jn(X = Ce[Q]) ? X(q) : X;
          for (var re in F) q[re] = re === "className" ? kn(q[re], F[re]) : re === "style" ? Et(Et({}, q[re]), F[re]) : F[re];
        }
        return ke.className && (q.className = kn(q.className, ke.className)), q;
      }(ne, _, ve), xe = ye.as || le, fe = {};
      for (var se in ye) ye[se] === void 0 || se[0] === "$" || se === "as" || se === "theme" && ye.theme === ve || (se === "forwardedAs" ? fe.as = ye.forwardedAs : me && !me(se, xe) || (fe[se] = ye[se], me || process.env.NODE_ENV !== "development" || Od(se) || Qa.has(se) || !es.has(xe) || (Qa.add(se), console.warn('styled-components: it looks like an unknown prop "'.concat(se, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var ge = function(Ce, ke) {
        var $ = Ga(), X = Ce.generateAndInjectStyles(ke, $.styleSheet, $.stylis);
        return process.env.NODE_ENV !== "production" && _a(X), X;
      }(ue, ye);
      process.env.NODE_ENV !== "production" && B.warnTooManyClasses && B.warnTooManyClasses(ge);
      var Pe = kn(he, te);
      return ge && (Pe += " " + ge), ye.className && (Pe += " " + ye.className), fe[ki(xe) && !es.has(xe) ? "class" : "className"] = Pe, Y && (fe.ref = Y), gd(xe, fe);
    }(g, M, C);
  }
  T.displayName = x;
  var g = et.forwardRef(T);
  return g.attrs = w, g.componentStyle = A, g.displayName = x, g.shouldForwardProp = S, g.foldedComponentIds = i ? kn(s.foldedComponentIds, s.styledComponentId) : "", g.styledComponentId = h, g.target = i ? s.target : n, Object.defineProperty(g, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(M) {
    this._foldedDefaultProps = i ? function(C) {
      for (var B = [], _ = 1; _ < arguments.length; _++) B[_ - 1] = arguments[_];
      for (var Y = 0, ne = B; Y < ne.length; Y++) ns(C, ne[Y], !0);
      return C;
    }({}, s.defaultProps, M) : M;
  } }), process.env.NODE_ENV !== "production" && (Yd(x, h), g.warnTooManyClasses = /* @__PURE__ */ function(M, C) {
    var B = {}, _ = !1;
    return function(Y) {
      if (!_ && (B[Y] = !0, Object.keys(B).length >= 200)) {
        var ne = C ? ' with the id of "'.concat(C, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(M).concat(ne, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), _ = !0, B = {};
      }
    };
  }(x, h)), aa(g, function() {
    return ".".concat(g.styledComponentId);
  }), a && Fl(g, n, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), g;
}
function Ja(n, r) {
  for (var e = [n[0]], i = 0, s = r.length; i < s; i += 1) e.push(r[i], n[i + 1]);
  return e;
}
var ec = function(n) {
  return Object.assign(n, { isCss: !0 });
};
function I0(n) {
  for (var r = [], e = 1; e < arguments.length; e++) r[e - 1] = arguments[e];
  if (Jn(n) || er(n)) return ec(jn(Ja(ai, Gn([n], r, !0))));
  var i = n;
  return r.length === 0 && i.length === 1 && typeof i[0] == "string" ? jn(i) : ec(jn(Ja(i, r)));
}
function os(n, r, e) {
  if (e === void 0 && (e = Qn), !r) throw cr(1, r);
  var i = function(s) {
    for (var a = [], c = 1; c < arguments.length; c++) a[c - 1] = arguments[c];
    return n(r, e, I0.apply(void 0, Gn([s], a, !1)));
  };
  return i.attrs = function(s) {
    return os(n, r, Et(Et({}, e), { attrs: Array.prototype.concat(e.attrs, s).filter(Boolean) }));
  }, i.withConfig = function(s) {
    return os(n, r, Et(Et({}, e), s));
  }, i;
}
var Xl = function(n) {
  return os(k0, n);
}, Wt = Xl;
es.forEach(function(n) {
  Wt[n] = Xl(n);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Kr = "__sc-".concat(Fn, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[Kr] || (window[Kr] = 0), window[Kr] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Kr] += 1);
const Fr = Mo;
(function(n, r) {
  const e = Mo, i = n();
  for (; ; )
    try {
      if (parseInt(e(273)) / 1 * (-parseInt(e(271)) / 2) + parseInt(e(276)) / 3 * (parseInt(e(266)) / 4) + parseInt(e(263)) / 5 * (parseInt(e(268)) / 6) + parseInt(e(270)) / 7 * (parseInt(e(269)) / 8) + parseInt(e(262)) / 9 * (-parseInt(e(275)) / 10) + -parseInt(e(264)) / 11 + parseInt(e(267)) / 12 === r) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(jo, 334433);
const _0 = Wt[Fr(272)]`
  flex-direction: column;
  border-radius: 15px;
  border: 3px solid #a0beeb;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
  justify-items: center;
  align-items: center;
`, N0 = Wt[Fr(272)]`
  border-radius: 13px;
  position: relative;
  object-fit: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 1;
  overflow: hidden;

  &:focus-visible {
    outline: none;
  }
`, j0 = Wt[Fr(274)]`
  border-radius: 7px;
  display: inline;
  padding: 0;
  &:focus-visible {
    outline: none;
  }
`, M0 = Wt[Fr(265)]`
  position: absolute;
  font-size: 13px;
  color: white;
  background-color: rgba(76, 78, 80, 0.2);
  padding: 3px 10px 2px 10px;
  border-radius: 10px;
  top: 2px;
  display: flex;
  letter-spacing: 1px;
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
  z-index: 2;
`;
function jo() {
  const n = ["412811TYwdmm", "441550MSyAvE", "div", "1ojtXYW", "canvas", "370rIVcqg", "264TZIIlw", "62379xQpdNb", "1906155kqCAAQ", "6400878UrUVqd", "span", "1424vVPPtN", "4695168xpFDrD", "6lfohJL", "80AaUqpB"];
  return jo = function() {
    return n;
  }, jo();
}
function Mo(n, r) {
  const e = jo();
  return Mo = function(i, s) {
    return i = i - 262, e[i];
  }, Mo(n, r);
}
const L0 = Wt[Fr(272)]`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  pointer-events: none;
`, en = /* @__PURE__ */ Object.create(null);
en.open = "0";
en.close = "1";
en.ping = "2";
en.pong = "3";
en.message = "4";
en.upgrade = "5";
en.noop = "6";
const xo = /* @__PURE__ */ Object.create(null);
Object.keys(en).forEach((n) => {
  xo[en[n]] = n;
});
const is = { type: "error", data: "parser error" }, Yl = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", Gl = typeof ArrayBuffer == "function", Kl = (n) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(n) : n && n.buffer instanceof ArrayBuffer, ca = ({ type: n, data: r }, e, i) => Yl && r instanceof Blob ? e ? i(r) : tc(r, i) : Gl && (r instanceof ArrayBuffer || Kl(r)) ? e ? i(r) : tc(new Blob([r]), i) : i(en[n] + (r || "")), tc = (n, r) => {
  const e = new FileReader();
  return e.onload = function() {
    const i = e.result.split(",")[1];
    r("b" + (i || ""));
  }, e.readAsDataURL(n);
};
function nc(n) {
  return n instanceof Uint8Array ? n : n instanceof ArrayBuffer ? new Uint8Array(n) : new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
}
let _i;
function D0(n, r) {
  if (Yl && n.data instanceof Blob)
    return n.data.arrayBuffer().then(nc).then(r);
  if (Gl && (n.data instanceof ArrayBuffer || Kl(n.data)))
    return r(nc(n.data));
  ca(n, !1, (e) => {
    _i || (_i = new TextEncoder()), r(_i.encode(e));
  });
}
const rc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ar = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let n = 0; n < rc.length; n++)
  Ar[rc.charCodeAt(n)] = n;
const B0 = (n) => {
  let r = n.length * 0.75, e = n.length, i, s = 0, a, c, u, f;
  n[n.length - 1] === "=" && (r--, n[n.length - 2] === "=" && r--);
  const d = new ArrayBuffer(r), m = new Uint8Array(d);
  for (i = 0; i < e; i += 4)
    a = Ar[n.charCodeAt(i)], c = Ar[n.charCodeAt(i + 1)], u = Ar[n.charCodeAt(i + 2)], f = Ar[n.charCodeAt(i + 3)], m[s++] = a << 2 | c >> 4, m[s++] = (c & 15) << 4 | u >> 2, m[s++] = (u & 3) << 6 | f & 63;
  return d;
}, F0 = typeof ArrayBuffer == "function", la = (n, r) => {
  if (typeof n != "string")
    return {
      type: "message",
      data: Zl(n, r)
    };
  const e = n.charAt(0);
  return e === "b" ? {
    type: "message",
    data: z0(n.substring(1), r)
  } : xo[e] ? n.length > 1 ? {
    type: xo[e],
    data: n.substring(1)
  } : {
    type: xo[e]
  } : is;
}, z0 = (n, r) => {
  if (F0) {
    const e = B0(n);
    return Zl(e, r);
  } else
    return { base64: !0, data: n };
}, Zl = (n, r) => {
  switch (r) {
    case "blob":
      return n instanceof Blob ? n : new Blob([n]);
    case "arraybuffer":
    default:
      return n instanceof ArrayBuffer ? n : n.buffer;
  }
}, Ql = "", V0 = (n, r) => {
  const e = n.length, i = new Array(e);
  let s = 0;
  n.forEach((a, c) => {
    ca(a, !1, (u) => {
      i[c] = u, ++s === e && r(i.join(Ql));
    });
  });
}, H0 = (n, r) => {
  const e = n.split(Ql), i = [];
  for (let s = 0; s < e.length; s++) {
    const a = la(e[s], r);
    if (i.push(a), a.type === "error")
      break;
  }
  return i;
};
function U0() {
  return new TransformStream({
    transform(n, r) {
      D0(n, (e) => {
        const i = e.length;
        let s;
        if (i < 126)
          s = new Uint8Array(1), new DataView(s.buffer).setUint8(0, i);
        else if (i < 65536) {
          s = new Uint8Array(3);
          const a = new DataView(s.buffer);
          a.setUint8(0, 126), a.setUint16(1, i);
        } else {
          s = new Uint8Array(9);
          const a = new DataView(s.buffer);
          a.setUint8(0, 127), a.setBigUint64(1, BigInt(i));
        }
        n.data && typeof n.data != "string" && (s[0] |= 128), r.enqueue(s), r.enqueue(e);
      });
    }
  });
}
let Ni;
function Zr(n) {
  return n.reduce((r, e) => r + e.length, 0);
}
function Qr(n, r) {
  if (n[0].length === r)
    return n.shift();
  const e = new Uint8Array(r);
  let i = 0;
  for (let s = 0; s < r; s++)
    e[s] = n[0][i++], i === n[0].length && (n.shift(), i = 0);
  return n.length && i < n[0].length && (n[0] = n[0].slice(i)), e;
}
function W0(n, r) {
  Ni || (Ni = new TextDecoder());
  const e = [];
  let i = 0, s = -1, a = !1;
  return new TransformStream({
    transform(c, u) {
      for (e.push(c); ; ) {
        if (i === 0) {
          if (Zr(e) < 1)
            break;
          const f = Qr(e, 1);
          a = (f[0] & 128) === 128, s = f[0] & 127, s < 126 ? i = 3 : s === 126 ? i = 1 : i = 2;
        } else if (i === 1) {
          if (Zr(e) < 2)
            break;
          const f = Qr(e, 2);
          s = new DataView(f.buffer, f.byteOffset, f.length).getUint16(0), i = 3;
        } else if (i === 2) {
          if (Zr(e) < 8)
            break;
          const f = Qr(e, 8), d = new DataView(f.buffer, f.byteOffset, f.length), m = d.getUint32(0);
          if (m > Math.pow(2, 21) - 1) {
            u.enqueue(is);
            break;
          }
          s = m * Math.pow(2, 32) + d.getUint32(4), i = 3;
        } else {
          if (Zr(e) < s)
            break;
          const f = Qr(e, s);
          u.enqueue(la(a ? f : Ni.decode(f), r)), i = 0;
        }
        if (s === 0 || s > n) {
          u.enqueue(is);
          break;
        }
      }
    }
  });
}
const Jl = 4;
function ot(n) {
  if (n) return q0(n);
}
function q0(n) {
  for (var r in ot.prototype)
    n[r] = ot.prototype[r];
  return n;
}
ot.prototype.on = ot.prototype.addEventListener = function(n, r) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + n] = this._callbacks["$" + n] || []).push(r), this;
};
ot.prototype.once = function(n, r) {
  function e() {
    this.off(n, e), r.apply(this, arguments);
  }
  return e.fn = r, this.on(n, e), this;
};
ot.prototype.off = ot.prototype.removeListener = ot.prototype.removeAllListeners = ot.prototype.removeEventListener = function(n, r) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var e = this._callbacks["$" + n];
  if (!e) return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + n], this;
  for (var i, s = 0; s < e.length; s++)
    if (i = e[s], i === r || i.fn === r) {
      e.splice(s, 1);
      break;
    }
  return e.length === 0 && delete this._callbacks["$" + n], this;
};
ot.prototype.emit = function(n) {
  this._callbacks = this._callbacks || {};
  for (var r = new Array(arguments.length - 1), e = this._callbacks["$" + n], i = 1; i < arguments.length; i++)
    r[i - 1] = arguments[i];
  if (e) {
    e = e.slice(0);
    for (var i = 0, s = e.length; i < s; ++i)
      e[i].apply(this, r);
  }
  return this;
};
ot.prototype.emitReserved = ot.prototype.emit;
ot.prototype.listeners = function(n) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + n] || [];
};
ot.prototype.hasListeners = function(n) {
  return !!this.listeners(n).length;
};
const ci = typeof Promise == "function" && typeof Promise.resolve == "function" ? (r) => Promise.resolve().then(r) : (r, e) => e(r, 0), Lt = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), $0 = "arraybuffer";
function eu(n, ...r) {
  return r.reduce((e, i) => (n.hasOwnProperty(i) && (e[i] = n[i]), e), {});
}
const X0 = Lt.setTimeout, Y0 = Lt.clearTimeout;
function li(n, r) {
  r.useNativeTimers ? (n.setTimeoutFn = X0.bind(Lt), n.clearTimeoutFn = Y0.bind(Lt)) : (n.setTimeoutFn = Lt.setTimeout.bind(Lt), n.clearTimeoutFn = Lt.clearTimeout.bind(Lt));
}
const G0 = 1.33;
function K0(n) {
  return typeof n == "string" ? Z0(n) : Math.ceil((n.byteLength || n.size) * G0);
}
function Z0(n) {
  let r = 0, e = 0;
  for (let i = 0, s = n.length; i < s; i++)
    r = n.charCodeAt(i), r < 128 ? e += 1 : r < 2048 ? e += 2 : r < 55296 || r >= 57344 ? e += 3 : (i++, e += 4);
  return e;
}
function tu() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function Q0(n) {
  let r = "";
  for (let e in n)
    n.hasOwnProperty(e) && (r.length && (r += "&"), r += encodeURIComponent(e) + "=" + encodeURIComponent(n[e]));
  return r;
}
function J0(n) {
  let r = {}, e = n.split("&");
  for (let i = 0, s = e.length; i < s; i++) {
    let a = e[i].split("=");
    r[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
  }
  return r;
}
class eh extends Error {
  constructor(r, e, i) {
    super(r), this.description = e, this.context = i, this.type = "TransportError";
  }
}
class ua extends ot {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(r) {
    super(), this.writable = !1, li(this, r), this.opts = r, this.query = r.query, this.socket = r.socket, this.supportsBinary = !r.forceBase64;
  }
  /**
   * Emits an error.
   *
   * @param {String} reason
   * @param description
   * @param context - the error context
   * @return {Transport} for chaining
   * @protected
   */
  onError(r, e, i) {
    return super.emitReserved("error", new eh(r, e, i)), this;
  }
  /**
   * Opens the transport.
   */
  open() {
    return this.readyState = "opening", this.doOpen(), this;
  }
  /**
   * Closes the transport.
   */
  close() {
    return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(), this.onClose()), this;
  }
  /**
   * Sends multiple packets.
   *
   * @param {Array} packets
   */
  send(r) {
    this.readyState === "open" && this.write(r);
  }
  /**
   * Called upon open
   *
   * @protected
   */
  onOpen() {
    this.readyState = "open", this.writable = !0, super.emitReserved("open");
  }
  /**
   * Called with data.
   *
   * @param {String} data
   * @protected
   */
  onData(r) {
    const e = la(r, this.socket.binaryType);
    this.onPacket(e);
  }
  /**
   * Called with a decoded packet.
   *
   * @protected
   */
  onPacket(r) {
    super.emitReserved("packet", r);
  }
  /**
   * Called upon close.
   *
   * @protected
   */
  onClose(r) {
    this.readyState = "closed", super.emitReserved("close", r);
  }
  /**
   * Pauses the transport, in order not to lose packets during an upgrade.
   *
   * @param onPause
   */
  pause(r) {
  }
  createUri(r, e = {}) {
    return r + "://" + this._hostname() + this._port() + this.opts.path + this._query(e);
  }
  _hostname() {
    const r = this.opts.hostname;
    return r.indexOf(":") === -1 ? r : "[" + r + "]";
  }
  _port() {
    return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : "";
  }
  _query(r) {
    const e = Q0(r);
    return e.length ? "?" + e : "";
  }
}
class th extends ua {
  constructor() {
    super(...arguments), this._polling = !1;
  }
  get name() {
    return "polling";
  }
  /**
   * Opens the socket (triggers polling). We write a PING message to determine
   * when the transport is open.
   *
   * @protected
   */
  doOpen() {
    this._poll();
  }
  /**
   * Pauses polling.
   *
   * @param {Function} onPause - callback upon buffers are flushed and transport is paused
   * @package
   */
  pause(r) {
    this.readyState = "pausing";
    const e = () => {
      this.readyState = "paused", r();
    };
    if (this._polling || !this.writable) {
      let i = 0;
      this._polling && (i++, this.once("pollComplete", function() {
        --i || e();
      })), this.writable || (i++, this.once("drain", function() {
        --i || e();
      }));
    } else
      e();
  }
  /**
   * Starts polling cycle.
   *
   * @private
   */
  _poll() {
    this._polling = !0, this.doPoll(), this.emitReserved("poll");
  }
  /**
   * Overloads onData to detect payloads.
   *
   * @protected
   */
  onData(r) {
    const e = (i) => {
      if (this.readyState === "opening" && i.type === "open" && this.onOpen(), i.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(i);
    };
    H0(r, this.socket.binaryType).forEach(e), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
  }
  /**
   * For polling, send a close packet.
   *
   * @protected
   */
  doClose() {
    const r = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? r() : this.once("open", r);
  }
  /**
   * Writes a packets payload.
   *
   * @param {Array} packets - data packets
   * @protected
   */
  write(r) {
    this.writable = !1, V0(r, (e) => {
      this.doWrite(e, () => {
        this.writable = !0, this.emitReserved("drain");
      });
    });
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const r = this.opts.secure ? "https" : "http", e = this.query || {};
    return this.opts.timestampRequests !== !1 && (e[this.opts.timestampParam] = tu()), !this.supportsBinary && !e.sid && (e.b64 = 1), this.createUri(r, e);
  }
}
let nu = !1;
try {
  nu = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const nh = nu;
function rh() {
}
class oh extends th {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(r) {
    if (super(r), typeof location < "u") {
      const e = location.protocol === "https:";
      let i = location.port;
      i || (i = e ? "443" : "80"), this.xd = typeof location < "u" && r.hostname !== location.hostname || i !== r.port;
    }
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(r, e) {
    const i = this.request({
      method: "POST",
      data: r
    });
    i.on("success", e), i.on("error", (s, a) => {
      this.onError("xhr post error", s, a);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    const r = this.request();
    r.on("data", this.onData.bind(this)), r.on("error", (e, i) => {
      this.onError("xhr poll error", e, i);
    }), this.pollXhr = r;
  }
}
let Xn = class mo extends ot {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(r, e, i) {
    super(), this.createRequest = r, li(this, i), this._opts = i, this._method = i.method || "GET", this._uri = e, this._data = i.data !== void 0 ? i.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var r;
    const e = eu(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    e.xdomain = !!this._opts.xd;
    const i = this._xhr = this.createRequest(e);
    try {
      i.open(this._method, this._uri, !0);
      try {
        if (this._opts.extraHeaders) {
          i.setDisableHeaderCheck && i.setDisableHeaderCheck(!0);
          for (let s in this._opts.extraHeaders)
            this._opts.extraHeaders.hasOwnProperty(s) && i.setRequestHeader(s, this._opts.extraHeaders[s]);
        }
      } catch {
      }
      if (this._method === "POST")
        try {
          i.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {
        }
      try {
        i.setRequestHeader("Accept", "*/*");
      } catch {
      }
      (r = this._opts.cookieJar) === null || r === void 0 || r.addCookies(i), "withCredentials" in i && (i.withCredentials = this._opts.withCredentials), this._opts.requestTimeout && (i.timeout = this._opts.requestTimeout), i.onreadystatechange = () => {
        var s;
        i.readyState === 3 && ((s = this._opts.cookieJar) === null || s === void 0 || s.parseCookies(
          // @ts-ignore
          i.getResponseHeader("set-cookie")
        )), i.readyState === 4 && (i.status === 200 || i.status === 1223 ? this._onLoad() : this.setTimeoutFn(() => {
          this._onError(typeof i.status == "number" ? i.status : 0);
        }, 0));
      }, i.send(this._data);
    } catch (s) {
      this.setTimeoutFn(() => {
        this._onError(s);
      }, 0);
      return;
    }
    typeof document < "u" && (this._index = mo.requestsCount++, mo.requests[this._index] = this);
  }
  /**
   * Called upon error.
   *
   * @private
   */
  _onError(r) {
    this.emitReserved("error", r, this._xhr), this._cleanup(!0);
  }
  /**
   * Cleans up house.
   *
   * @private
   */
  _cleanup(r) {
    if (!(typeof this._xhr > "u" || this._xhr === null)) {
      if (this._xhr.onreadystatechange = rh, r)
        try {
          this._xhr.abort();
        } catch {
        }
      typeof document < "u" && delete mo.requests[this._index], this._xhr = null;
    }
  }
  /**
   * Called upon load.
   *
   * @private
   */
  _onLoad() {
    const r = this._xhr.responseText;
    r !== null && (this.emitReserved("data", r), this.emitReserved("success"), this._cleanup());
  }
  /**
   * Aborts the request.
   *
   * @package
   */
  abort() {
    this._cleanup();
  }
};
Xn.requestsCount = 0;
Xn.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", oc);
  else if (typeof addEventListener == "function") {
    const n = "onpagehide" in Lt ? "pagehide" : "unload";
    addEventListener(n, oc, !1);
  }
}
function oc() {
  for (let n in Xn.requests)
    Xn.requests.hasOwnProperty(n) && Xn.requests[n].abort();
}
const ih = function() {
  const n = ru({
    xdomain: !1
  });
  return n && n.responseType !== null;
}();
class sh extends oh {
  constructor(r) {
    super(r);
    const e = r && r.forceBase64;
    this.supportsBinary = ih && !e;
  }
  request(r = {}) {
    return Object.assign(r, { xd: this.xd }, this.opts), new Xn(ru, this.uri(), r);
  }
}
function ru(n) {
  const r = n.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!r || nh))
      return new XMLHttpRequest();
  } catch {
  }
  if (!r)
    try {
      return new Lt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const ou = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class ah extends ua {
  get name() {
    return "websocket";
  }
  doOpen() {
    const r = this.uri(), e = this.opts.protocols, i = ou ? {} : eu(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (i.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(r, e, i);
    } catch (s) {
      return this.emitReserved("error", s);
    }
    this.ws.binaryType = this.socket.binaryType, this.addEventListeners();
  }
  /**
   * Adds event listeners to the socket
   *
   * @private
   */
  addEventListeners() {
    this.ws.onopen = () => {
      this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
    }, this.ws.onclose = (r) => this.onClose({
      description: "websocket connection closed",
      context: r
    }), this.ws.onmessage = (r) => this.onData(r.data), this.ws.onerror = (r) => this.onError("websocket error", r);
  }
  write(r) {
    this.writable = !1;
    for (let e = 0; e < r.length; e++) {
      const i = r[e], s = e === r.length - 1;
      ca(i, this.supportsBinary, (a) => {
        try {
          this.doWrite(i, a);
        } catch {
        }
        s && ci(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    typeof this.ws < "u" && (this.ws.onerror = () => {
    }, this.ws.close(), this.ws = null);
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const r = this.opts.secure ? "wss" : "ws", e = this.query || {};
    return this.opts.timestampRequests && (e[this.opts.timestampParam] = tu()), this.supportsBinary || (e.b64 = 1), this.createUri(r, e);
  }
}
const ji = Lt.WebSocket || Lt.MozWebSocket;
class ch extends ah {
  createSocket(r, e, i) {
    return ou ? new ji(r, e, i) : e ? new ji(r, e) : new ji(r);
  }
  doWrite(r, e) {
    this.ws.send(e);
  }
}
class lh extends ua {
  get name() {
    return "webtransport";
  }
  doOpen() {
    try {
      this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
    } catch (r) {
      return this.emitReserved("error", r);
    }
    this._transport.closed.then(() => {
      this.onClose();
    }).catch((r) => {
      this.onError("webtransport error", r);
    }), this._transport.ready.then(() => {
      this._transport.createBidirectionalStream().then((r) => {
        const e = W0(Number.MAX_SAFE_INTEGER, this.socket.binaryType), i = r.readable.pipeThrough(e).getReader(), s = U0();
        s.readable.pipeTo(r.writable), this._writer = s.writable.getWriter();
        const a = () => {
          i.read().then(({ done: u, value: f }) => {
            u || (this.onPacket(f), a());
          }).catch((u) => {
          });
        };
        a();
        const c = { type: "open" };
        this.query.sid && (c.data = `{"sid":"${this.query.sid}"}`), this._writer.write(c).then(() => this.onOpen());
      });
    });
  }
  write(r) {
    this.writable = !1;
    for (let e = 0; e < r.length; e++) {
      const i = r[e], s = e === r.length - 1;
      this._writer.write(i).then(() => {
        s && ci(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var r;
    (r = this._transport) === null || r === void 0 || r.close();
  }
}
const uh = {
  websocket: ch,
  webtransport: lh,
  polling: sh
}, fh = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, dh = [
  "source",
  "protocol",
  "authority",
  "userInfo",
  "user",
  "password",
  "host",
  "port",
  "relative",
  "path",
  "directory",
  "file",
  "query",
  "anchor"
];
function ss(n) {
  if (n.length > 8e3)
    throw "URI too long";
  const r = n, e = n.indexOf("["), i = n.indexOf("]");
  e != -1 && i != -1 && (n = n.substring(0, e) + n.substring(e, i).replace(/:/g, ";") + n.substring(i, n.length));
  let s = fh.exec(n || ""), a = {}, c = 14;
  for (; c--; )
    a[dh[c]] = s[c] || "";
  return e != -1 && i != -1 && (a.source = r, a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":"), a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), a.ipv6uri = !0), a.pathNames = hh(a, a.path), a.queryKey = ph(a, a.query), a;
}
function hh(n, r) {
  const e = /\/{2,9}/g, i = r.replace(e, "/").split("/");
  return (r.slice(0, 1) == "/" || r.length === 0) && i.splice(0, 1), r.slice(-1) == "/" && i.splice(i.length - 1, 1), i;
}
function ph(n, r) {
  const e = {};
  return r.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(i, s, a) {
    s && (e[s] = a);
  }), e;
}
const as = typeof addEventListener == "function" && typeof removeEventListener == "function", go = [];
as && addEventListener("offline", () => {
  go.forEach((n) => n());
}, !1);
class bn extends ot {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(r, e) {
    if (super(), this.binaryType = $0, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, r && typeof r == "object" && (e = r, r = null), r) {
      const i = ss(r);
      e.hostname = i.host, e.secure = i.protocol === "https" || i.protocol === "wss", e.port = i.port, i.query && (e.query = i.query);
    } else e.host && (e.hostname = ss(e.host).host);
    li(this, e), this.secure = e.secure != null ? e.secure : typeof location < "u" && location.protocol === "https:", e.hostname && !e.port && (e.port = this.secure ? "443" : "80"), this.hostname = e.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = e.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, e.transports.forEach((i) => {
      const s = i.prototype.name;
      this.transports.push(s), this._transportsByName[s] = i;
    }), this.opts = Object.assign({
      path: "/engine.io",
      agent: !1,
      withCredentials: !1,
      upgrade: !0,
      timestampParam: "t",
      rememberUpgrade: !1,
      addTrailingSlash: !0,
      rejectUnauthorized: !0,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: !1
    }, e), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = J0(this.opts.query)), as && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, go.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} name - transport name
   * @return {Transport}
   * @private
   */
  createTransport(r) {
    const e = Object.assign({}, this.opts.query);
    e.EIO = Jl, e.transport = r, this.id && (e.sid = this.id);
    const i = Object.assign({}, this.opts, {
      query: e,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[r]);
    return new this._transportsByName[r](i);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @private
   */
  _open() {
    if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    }
    const r = this.opts.rememberUpgrade && bn.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
    this.readyState = "opening";
    const e = this.createTransport(r);
    e.open(), this.setTransport(e);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(r) {
    this.transport && this.transport.removeAllListeners(), this.transport = r, r.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", (e) => this._onClose("transport close", e));
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    this.readyState = "open", bn.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
  }
  /**
   * Handles a packet.
   *
   * @private
   */
  _onPacket(r) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
      switch (this.emitReserved("packet", r), this.emitReserved("heartbeat"), r.type) {
        case "open":
          this.onHandshake(JSON.parse(r.data));
          break;
        case "ping":
          this._sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong"), this._resetPingTimeout();
          break;
        case "error":
          const e = new Error("server error");
          e.code = r.data, this._onError(e);
          break;
        case "message":
          this.emitReserved("data", r.data), this.emitReserved("message", r.data);
          break;
      }
  }
  /**
   * Called upon handshake completion.
   *
   * @param {Object} data - handshake obj
   * @private
   */
  onHandshake(r) {
    this.emitReserved("handshake", r), this.id = r.sid, this.transport.query.sid = r.sid, this._pingInterval = r.pingInterval, this._pingTimeout = r.pingTimeout, this._maxPayload = r.maxPayload, this.onOpen(), this.readyState !== "closed" && this._resetPingTimeout();
  }
  /**
   * Sets and resets ping timeout timer based on server pings.
   *
   * @private
   */
  _resetPingTimeout() {
    this.clearTimeoutFn(this._pingTimeoutTimer);
    const r = this._pingInterval + this._pingTimeout;
    this._pingTimeoutTime = Date.now() + r, this._pingTimeoutTimer = this.setTimeoutFn(() => {
      this._onClose("ping timeout");
    }, r), this.opts.autoUnref && this._pingTimeoutTimer.unref();
  }
  /**
   * Called on `drain` event
   *
   * @private
   */
  _onDrain() {
    this.writeBuffer.splice(0, this._prevBufferLen), this._prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush();
  }
  /**
   * Flush write buffers.
   *
   * @private
   */
  flush() {
    if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const r = this._getWritablePackets();
      this.transport.send(r), this._prevBufferLen = r.length, this.emitReserved("flush");
    }
  }
  /**
   * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
   * long-polling)
   *
   * @private
   */
  _getWritablePackets() {
    if (!(this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1))
      return this.writeBuffer;
    let e = 1;
    for (let i = 0; i < this.writeBuffer.length; i++) {
      const s = this.writeBuffer[i].data;
      if (s && (e += K0(s)), i > 0 && e > this._maxPayload)
        return this.writeBuffer.slice(0, i);
      e += 2;
    }
    return this.writeBuffer;
  }
  /**
   * Checks whether the heartbeat timer has expired but the socket has not yet been notified.
   *
   * Note: this method is private for now because it does not really fit the WebSocket API, but if we put it in the
   * `write()` method then the message would not be buffered by the Socket.IO client.
   *
   * @return {boolean}
   * @private
   */
  /* private */
  _hasPingExpired() {
    if (!this._pingTimeoutTime)
      return !0;
    const r = Date.now() > this._pingTimeoutTime;
    return r && (this._pingTimeoutTime = 0, ci(() => {
      this._onClose("ping timeout");
    }, this.setTimeoutFn)), r;
  }
  /**
   * Sends a message.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  write(r, e, i) {
    return this._sendPacket("message", r, e, i), this;
  }
  /**
   * Sends a message. Alias of {@link Socket#write}.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  send(r, e, i) {
    return this._sendPacket("message", r, e, i), this;
  }
  /**
   * Sends a packet.
   *
   * @param {String} type: packet type.
   * @param {String} data.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @private
   */
  _sendPacket(r, e, i, s) {
    if (typeof e == "function" && (s = e, e = void 0), typeof i == "function" && (s = i, i = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    i = i || {}, i.compress = i.compress !== !1;
    const a = {
      type: r,
      data: e,
      options: i
    };
    this.emitReserved("packetCreate", a), this.writeBuffer.push(a), s && this.once("flush", s), this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const r = () => {
      this._onClose("forced close"), this.transport.close();
    }, e = () => {
      this.off("upgrade", e), this.off("upgradeError", e), r();
    }, i = () => {
      this.once("upgrade", e), this.once("upgradeError", e);
    };
    return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
      this.upgrading ? i() : r();
    }) : this.upgrading ? i() : r()), this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  _onError(r) {
    if (bn.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
      return this.transports.shift(), this._open();
    this.emitReserved("error", r), this._onClose("transport error", r);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  _onClose(r, e) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), as && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const i = go.indexOf(this._offlineEventListener);
        i !== -1 && go.splice(i, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", r, e), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
bn.protocol = Jl;
class xh extends bn {
  constructor() {
    super(...arguments), this._upgrades = [];
  }
  onOpen() {
    if (super.onOpen(), this.readyState === "open" && this.opts.upgrade)
      for (let r = 0; r < this._upgrades.length; r++)
        this._probe(this._upgrades[r]);
  }
  /**
   * Probes a transport.
   *
   * @param {String} name - transport name
   * @private
   */
  _probe(r) {
    let e = this.createTransport(r), i = !1;
    bn.priorWebsocketSuccess = !1;
    const s = () => {
      i || (e.send([{ type: "ping", data: "probe" }]), e.once("packet", (x) => {
        if (!i)
          if (x.type === "pong" && x.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", e), !e)
              return;
            bn.priorWebsocketSuccess = e.name === "websocket", this.transport.pause(() => {
              i || this.readyState !== "closed" && (m(), this.setTransport(e), e.send([{ type: "upgrade" }]), this.emitReserved("upgrade", e), e = null, this.upgrading = !1, this.flush());
            });
          } else {
            const h = new Error("probe error");
            h.transport = e.name, this.emitReserved("upgradeError", h);
          }
      }));
    };
    function a() {
      i || (i = !0, m(), e.close(), e = null);
    }
    const c = (x) => {
      const h = new Error("probe error: " + x);
      h.transport = e.name, a(), this.emitReserved("upgradeError", h);
    };
    function u() {
      c("transport closed");
    }
    function f() {
      c("socket closed");
    }
    function d(x) {
      e && x.name !== e.name && a();
    }
    const m = () => {
      e.removeListener("open", s), e.removeListener("error", c), e.removeListener("close", u), this.off("close", f), this.off("upgrading", d);
    };
    e.once("open", s), e.once("error", c), e.once("close", u), this.once("close", f), this.once("upgrading", d), this._upgrades.indexOf("webtransport") !== -1 && r !== "webtransport" ? this.setTimeoutFn(() => {
      i || e.open();
    }, 200) : e.open();
  }
  onHandshake(r) {
    this._upgrades = this._filterUpgrades(r.upgrades), super.onHandshake(r);
  }
  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} upgrades - server upgrades
   * @private
   */
  _filterUpgrades(r) {
    const e = [];
    for (let i = 0; i < r.length; i++)
      ~this.transports.indexOf(r[i]) && e.push(r[i]);
    return e;
  }
}
let mh = class extends xh {
  constructor(r, e = {}) {
    const i = typeof r == "object" ? r : e;
    (!i.transports || i.transports && typeof i.transports[0] == "string") && (i.transports = (i.transports || ["polling", "websocket", "webtransport"]).map((s) => uh[s]).filter((s) => !!s)), super(r, i);
  }
};
function gh(n, r = "", e) {
  let i = n;
  e = e || typeof location < "u" && location, n == null && (n = e.protocol + "//" + e.host), typeof n == "string" && (n.charAt(0) === "/" && (n.charAt(1) === "/" ? n = e.protocol + n : n = e.host + n), /^(https?|wss?):\/\//.test(n) || (typeof e < "u" ? n = e.protocol + "//" + n : n = "https://" + n), i = ss(n)), i.port || (/^(http|ws)$/.test(i.protocol) ? i.port = "80" : /^(http|ws)s$/.test(i.protocol) && (i.port = "443")), i.path = i.path || "/";
  const a = i.host.indexOf(":") !== -1 ? "[" + i.host + "]" : i.host;
  return i.id = i.protocol + "://" + a + ":" + i.port + r, i.href = i.protocol + "://" + a + (e && e.port === i.port ? "" : ":" + i.port), i;
}
const vh = typeof ArrayBuffer == "function", yh = (n) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(n) : n.buffer instanceof ArrayBuffer, iu = Object.prototype.toString, bh = typeof Blob == "function" || typeof Blob < "u" && iu.call(Blob) === "[object BlobConstructor]", Sh = typeof File == "function" || typeof File < "u" && iu.call(File) === "[object FileConstructor]";
function fa(n) {
  return vh && (n instanceof ArrayBuffer || yh(n)) || bh && n instanceof Blob || Sh && n instanceof File;
}
function vo(n, r) {
  if (!n || typeof n != "object")
    return !1;
  if (Array.isArray(n)) {
    for (let e = 0, i = n.length; e < i; e++)
      if (vo(n[e]))
        return !0;
    return !1;
  }
  if (fa(n))
    return !0;
  if (n.toJSON && typeof n.toJSON == "function" && arguments.length === 1)
    return vo(n.toJSON(), !0);
  for (const e in n)
    if (Object.prototype.hasOwnProperty.call(n, e) && vo(n[e]))
      return !0;
  return !1;
}
function wh(n) {
  const r = [], e = n.data, i = n;
  return i.data = cs(e, r), i.attachments = r.length, { packet: i, buffers: r };
}
function cs(n, r) {
  if (!n)
    return n;
  if (fa(n)) {
    const e = { _placeholder: !0, num: r.length };
    return r.push(n), e;
  } else if (Array.isArray(n)) {
    const e = new Array(n.length);
    for (let i = 0; i < n.length; i++)
      e[i] = cs(n[i], r);
    return e;
  } else if (typeof n == "object" && !(n instanceof Date)) {
    const e = {};
    for (const i in n)
      Object.prototype.hasOwnProperty.call(n, i) && (e[i] = cs(n[i], r));
    return e;
  }
  return n;
}
function Eh(n, r) {
  return n.data = ls(n.data, r), delete n.attachments, n;
}
function ls(n, r) {
  if (!n)
    return n;
  if (n && n._placeholder === !0) {
    if (typeof n.num == "number" && n.num >= 0 && n.num < r.length)
      return r[n.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(n))
    for (let e = 0; e < n.length; e++)
      n[e] = ls(n[e], r);
  else if (typeof n == "object")
    for (const e in n)
      Object.prototype.hasOwnProperty.call(n, e) && (n[e] = ls(n[e], r));
  return n;
}
const Ch = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], Th = 5;
var Ie;
(function(n) {
  n[n.CONNECT = 0] = "CONNECT", n[n.DISCONNECT = 1] = "DISCONNECT", n[n.EVENT = 2] = "EVENT", n[n.ACK = 3] = "ACK", n[n.CONNECT_ERROR = 4] = "CONNECT_ERROR", n[n.BINARY_EVENT = 5] = "BINARY_EVENT", n[n.BINARY_ACK = 6] = "BINARY_ACK";
})(Ie || (Ie = {}));
class Ah {
  /**
   * Encoder constructor
   *
   * @param {function} replacer - custom replacer to pass down to JSON.parse
   */
  constructor(r) {
    this.replacer = r;
  }
  /**
   * Encode a packet as a single string if non-binary, or as a
   * buffer sequence, depending on packet type.
   *
   * @param {Object} obj - packet object
   */
  encode(r) {
    return (r.type === Ie.EVENT || r.type === Ie.ACK) && vo(r) ? this.encodeAsBinary({
      type: r.type === Ie.EVENT ? Ie.BINARY_EVENT : Ie.BINARY_ACK,
      nsp: r.nsp,
      data: r.data,
      id: r.id
    }) : [this.encodeAsString(r)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(r) {
    let e = "" + r.type;
    return (r.type === Ie.BINARY_EVENT || r.type === Ie.BINARY_ACK) && (e += r.attachments + "-"), r.nsp && r.nsp !== "/" && (e += r.nsp + ","), r.id != null && (e += r.id), r.data != null && (e += JSON.stringify(r.data, this.replacer)), e;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(r) {
    const e = wh(r), i = this.encodeAsString(e.packet), s = e.buffers;
    return s.unshift(i), s;
  }
}
function ic(n) {
  return Object.prototype.toString.call(n) === "[object Object]";
}
class da extends ot {
  /**
   * Decoder constructor
   *
   * @param {function} reviver - custom reviver to pass down to JSON.stringify
   */
  constructor(r) {
    super(), this.reviver = r;
  }
  /**
   * Decodes an encoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   */
  add(r) {
    let e;
    if (typeof r == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      e = this.decodeString(r);
      const i = e.type === Ie.BINARY_EVENT;
      i || e.type === Ie.BINARY_ACK ? (e.type = i ? Ie.EVENT : Ie.ACK, this.reconstructor = new Oh(e), e.attachments === 0 && super.emitReserved("decoded", e)) : super.emitReserved("decoded", e);
    } else if (fa(r) || r.base64)
      if (this.reconstructor)
        e = this.reconstructor.takeBinaryData(r), e && (this.reconstructor = null, super.emitReserved("decoded", e));
      else
        throw new Error("got binary data when not reconstructing a packet");
    else
      throw new Error("Unknown type: " + r);
  }
  /**
   * Decode a packet String (JSON data)
   *
   * @param {String} str
   * @return {Object} packet
   */
  decodeString(r) {
    let e = 0;
    const i = {
      type: Number(r.charAt(0))
    };
    if (Ie[i.type] === void 0)
      throw new Error("unknown packet type " + i.type);
    if (i.type === Ie.BINARY_EVENT || i.type === Ie.BINARY_ACK) {
      const a = e + 1;
      for (; r.charAt(++e) !== "-" && e != r.length; )
        ;
      const c = r.substring(a, e);
      if (c != Number(c) || r.charAt(e) !== "-")
        throw new Error("Illegal attachments");
      i.attachments = Number(c);
    }
    if (r.charAt(e + 1) === "/") {
      const a = e + 1;
      for (; ++e && !(r.charAt(e) === "," || e === r.length); )
        ;
      i.nsp = r.substring(a, e);
    } else
      i.nsp = "/";
    const s = r.charAt(e + 1);
    if (s !== "" && Number(s) == s) {
      const a = e + 1;
      for (; ++e; ) {
        const c = r.charAt(e);
        if (c == null || Number(c) != c) {
          --e;
          break;
        }
        if (e === r.length)
          break;
      }
      i.id = Number(r.substring(a, e + 1));
    }
    if (r.charAt(++e)) {
      const a = this.tryParse(r.substr(e));
      if (da.isPayloadValid(i.type, a))
        i.data = a;
      else
        throw new Error("invalid payload");
    }
    return i;
  }
  tryParse(r) {
    try {
      return JSON.parse(r, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(r, e) {
    switch (r) {
      case Ie.CONNECT:
        return ic(e);
      case Ie.DISCONNECT:
        return e === void 0;
      case Ie.CONNECT_ERROR:
        return typeof e == "string" || ic(e);
      case Ie.EVENT:
      case Ie.BINARY_EVENT:
        return Array.isArray(e) && (typeof e[0] == "number" || typeof e[0] == "string" && Ch.indexOf(e[0]) === -1);
      case Ie.ACK:
      case Ie.BINARY_ACK:
        return Array.isArray(e);
    }
  }
  /**
   * Deallocates a parser's resources
   */
  destroy() {
    this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null);
  }
}
class Oh {
  constructor(r) {
    this.packet = r, this.buffers = [], this.reconPack = r;
  }
  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   */
  takeBinaryData(r) {
    if (this.buffers.push(r), this.buffers.length === this.reconPack.attachments) {
      const e = Eh(this.reconPack, this.buffers);
      return this.finishedReconstruction(), e;
    }
    return null;
  }
  /**
   * Cleans up binary packet reconstruction variables.
   */
  finishedReconstruction() {
    this.reconPack = null, this.buffers = [];
  }
}
const Rh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: da,
  Encoder: Ah,
  get PacketType() {
    return Ie;
  },
  protocol: Th
}, Symbol.toStringTag, { value: "Module" }));
function Ft(n, r, e) {
  return n.on(r, e), function() {
    n.off(r, e);
  };
}
const Ph = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class su extends ot {
  /**
   * `Socket` constructor.
   */
  constructor(r, e, i) {
    super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = r, this.nsp = e, i && i.auth && (this.auth = i.auth), this._opts = Object.assign({}, i), this.io._autoConnect && this.open();
  }
  /**
   * Whether the socket is currently disconnected
   *
   * @example
   * const socket = io();
   *
   * socket.on("connect", () => {
   *   console.log(socket.disconnected); // false
   * });
   *
   * socket.on("disconnect", () => {
   *   console.log(socket.disconnected); // true
   * });
   */
  get disconnected() {
    return !this.connected;
  }
  /**
   * Subscribe to open, close and packet events
   *
   * @private
   */
  subEvents() {
    if (this.subs)
      return;
    const r = this.io;
    this.subs = [
      Ft(r, "open", this.onopen.bind(this)),
      Ft(r, "packet", this.onpacket.bind(this)),
      Ft(r, "error", this.onerror.bind(this)),
      Ft(r, "close", this.onclose.bind(this))
    ];
  }
  /**
   * Whether the Socket will try to reconnect when its Manager connects or reconnects.
   *
   * @example
   * const socket = io();
   *
   * console.log(socket.active); // true
   *
   * socket.on("disconnect", (reason) => {
   *   if (reason === "io server disconnect") {
   *     // the disconnection was initiated by the server, you need to manually reconnect
   *     console.log(socket.active); // false
   *   }
   *   // else the socket will automatically try to reconnect
   *   console.log(socket.active); // true
   * });
   */
  get active() {
    return !!this.subs;
  }
  /**
   * "Opens" the socket.
   *
   * @example
   * const socket = io({
   *   autoConnect: false
   * });
   *
   * socket.connect();
   */
  connect() {
    return this.connected ? this : (this.subEvents(), this.io._reconnecting || this.io.open(), this.io._readyState === "open" && this.onopen(), this);
  }
  /**
   * Alias for {@link connect()}.
   */
  open() {
    return this.connect();
  }
  /**
   * Sends a `message` event.
   *
   * This method mimics the WebSocket.send() method.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
   *
   * @example
   * socket.send("hello");
   *
   * // this is equivalent to
   * socket.emit("message", "hello");
   *
   * @return self
   */
  send(...r) {
    return r.unshift("message"), this.emit.apply(this, r), this;
  }
  /**
   * Override `emit`.
   * If the event is in `events`, it's emitted normally.
   *
   * @example
   * socket.emit("hello", "world");
   *
   * // all serializable datastructures are supported (no need to call JSON.stringify)
   * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
   *
   * // with an acknowledgement from the server
   * socket.emit("hello", "world", (val) => {
   *   // ...
   * });
   *
   * @return self
   */
  emit(r, ...e) {
    var i, s, a;
    if (Ph.hasOwnProperty(r))
      throw new Error('"' + r.toString() + '" is a reserved event name');
    if (e.unshift(r), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(e), this;
    const c = {
      type: Ie.EVENT,
      data: e
    };
    if (c.options = {}, c.options.compress = this.flags.compress !== !1, typeof e[e.length - 1] == "function") {
      const m = this.ids++, x = e.pop();
      this._registerAckCallback(m, x), c.id = m;
    }
    const u = (s = (i = this.io.engine) === null || i === void 0 ? void 0 : i.transport) === null || s === void 0 ? void 0 : s.writable, f = this.connected && !(!((a = this.io.engine) === null || a === void 0) && a._hasPingExpired());
    return this.flags.volatile && !u || (f ? (this.notifyOutgoingListeners(c), this.packet(c)) : this.sendBuffer.push(c)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(r, e) {
    var i;
    const s = (i = this.flags.timeout) !== null && i !== void 0 ? i : this._opts.ackTimeout;
    if (s === void 0) {
      this.acks[r] = e;
      return;
    }
    const a = this.io.setTimeoutFn(() => {
      delete this.acks[r];
      for (let u = 0; u < this.sendBuffer.length; u++)
        this.sendBuffer[u].id === r && this.sendBuffer.splice(u, 1);
      e.call(this, new Error("operation has timed out"));
    }, s), c = (...u) => {
      this.io.clearTimeoutFn(a), e.apply(this, u);
    };
    c.withError = !0, this.acks[r] = c;
  }
  /**
   * Emits an event and waits for an acknowledgement
   *
   * @example
   * // without timeout
   * const response = await socket.emitWithAck("hello", "world");
   *
   * // with a specific timeout
   * try {
   *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
   * } catch (err) {
   *   // the server did not acknowledge the event in the given delay
   * }
   *
   * @return a Promise that will be fulfilled when the server acknowledges the event
   */
  emitWithAck(r, ...e) {
    return new Promise((i, s) => {
      const a = (c, u) => c ? s(c) : i(u);
      a.withError = !0, e.push(a), this.emit(r, ...e);
    });
  }
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
  _addToQueue(r) {
    let e;
    typeof r[r.length - 1] == "function" && (e = r.pop());
    const i = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: r,
      flags: Object.assign({ fromQueue: !0 }, this.flags)
    };
    r.push((s, ...a) => i !== this._queue[0] ? void 0 : (s !== null ? i.tryCount > this._opts.retries && (this._queue.shift(), e && e(s)) : (this._queue.shift(), e && e(null, ...a)), i.pending = !1, this._drainQueue())), this._queue.push(i), this._drainQueue();
  }
  /**
   * Send the first packet of the queue, and wait for an acknowledgement from the server.
   * @param force - whether to resend a packet that has not been acknowledged yet
   *
   * @private
   */
  _drainQueue(r = !1) {
    if (!this.connected || this._queue.length === 0)
      return;
    const e = this._queue[0];
    e.pending && !r || (e.pending = !0, e.tryCount++, this.flags = e.flags, this.emit.apply(this, e.args));
  }
  /**
   * Sends a packet.
   *
   * @param packet
   * @private
   */
  packet(r) {
    r.nsp = this.nsp, this.io._packet(r);
  }
  /**
   * Called upon engine `open`.
   *
   * @private
   */
  onopen() {
    typeof this.auth == "function" ? this.auth((r) => {
      this._sendConnectPacket(r);
    }) : this._sendConnectPacket(this.auth);
  }
  /**
   * Sends a CONNECT packet to initiate the Socket.IO session.
   *
   * @param data
   * @private
   */
  _sendConnectPacket(r) {
    this.packet({
      type: Ie.CONNECT,
      data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, r) : r
    });
  }
  /**
   * Called upon engine or manager `error`.
   *
   * @param err
   * @private
   */
  onerror(r) {
    this.connected || this.emitReserved("connect_error", r);
  }
  /**
   * Called upon engine `close`.
   *
   * @param reason
   * @param description
   * @private
   */
  onclose(r, e) {
    this.connected = !1, delete this.id, this.emitReserved("disconnect", r, e), this._clearAcks();
  }
  /**
   * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
   * the server.
   *
   * @private
   */
  _clearAcks() {
    Object.keys(this.acks).forEach((r) => {
      if (!this.sendBuffer.some((i) => String(i.id) === r)) {
        const i = this.acks[r];
        delete this.acks[r], i.withError && i.call(this, new Error("socket has been disconnected"));
      }
    });
  }
  /**
   * Called with socket packet.
   *
   * @param packet
   * @private
   */
  onpacket(r) {
    if (r.nsp === this.nsp)
      switch (r.type) {
        case Ie.CONNECT:
          r.data && r.data.sid ? this.onconnect(r.data.sid, r.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case Ie.EVENT:
        case Ie.BINARY_EVENT:
          this.onevent(r);
          break;
        case Ie.ACK:
        case Ie.BINARY_ACK:
          this.onack(r);
          break;
        case Ie.DISCONNECT:
          this.ondisconnect();
          break;
        case Ie.CONNECT_ERROR:
          this.destroy();
          const i = new Error(r.data.message);
          i.data = r.data.data, this.emitReserved("connect_error", i);
          break;
      }
  }
  /**
   * Called upon a server event.
   *
   * @param packet
   * @private
   */
  onevent(r) {
    const e = r.data || [];
    r.id != null && e.push(this.ack(r.id)), this.connected ? this.emitEvent(e) : this.receiveBuffer.push(Object.freeze(e));
  }
  emitEvent(r) {
    if (this._anyListeners && this._anyListeners.length) {
      const e = this._anyListeners.slice();
      for (const i of e)
        i.apply(this, r);
    }
    super.emit.apply(this, r), this._pid && r.length && typeof r[r.length - 1] == "string" && (this._lastOffset = r[r.length - 1]);
  }
  /**
   * Produces an ack callback to emit with an event.
   *
   * @private
   */
  ack(r) {
    const e = this;
    let i = !1;
    return function(...s) {
      i || (i = !0, e.packet({
        type: Ie.ACK,
        id: r,
        data: s
      }));
    };
  }
  /**
   * Called upon a server acknowledgement.
   *
   * @param packet
   * @private
   */
  onack(r) {
    const e = this.acks[r.id];
    typeof e == "function" && (delete this.acks[r.id], e.withError && r.data.unshift(null), e.apply(this, r.data));
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(r, e) {
    this.id = r, this.recovered = e && this._pid === e, this._pid = e, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0);
  }
  /**
   * Emit buffered events (received and emitted).
   *
   * @private
   */
  emitBuffered() {
    this.receiveBuffer.forEach((r) => this.emitEvent(r)), this.receiveBuffer = [], this.sendBuffer.forEach((r) => {
      this.notifyOutgoingListeners(r), this.packet(r);
    }), this.sendBuffer = [];
  }
  /**
   * Called upon server disconnect.
   *
   * @private
   */
  ondisconnect() {
    this.destroy(), this.onclose("io server disconnect");
  }
  /**
   * Called upon forced client/server side disconnections,
   * this method ensures the manager stops tracking us and
   * that reconnections don't get triggered for this.
   *
   * @private
   */
  destroy() {
    this.subs && (this.subs.forEach((r) => r()), this.subs = void 0), this.io._destroy(this);
  }
  /**
   * Disconnects the socket manually. In that case, the socket will not try to reconnect.
   *
   * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
   *
   * @example
   * const socket = io();
   *
   * socket.on("disconnect", (reason) => {
   *   // console.log(reason); prints "io client disconnect"
   * });
   *
   * socket.disconnect();
   *
   * @return self
   */
  disconnect() {
    return this.connected && this.packet({ type: Ie.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
  }
  /**
   * Alias for {@link disconnect()}.
   *
   * @return self
   */
  close() {
    return this.disconnect();
  }
  /**
   * Sets the compress flag.
   *
   * @example
   * socket.compress(false).emit("hello");
   *
   * @param compress - if `true`, compresses the sending data
   * @return self
   */
  compress(r) {
    return this.flags.compress = r, this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
   * ready to send messages.
   *
   * @example
   * socket.volatile.emit("hello"); // the server may or may not receive it
   *
   * @returns self
   */
  get volatile() {
    return this.flags.volatile = !0, this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
   * given number of milliseconds have elapsed without an acknowledgement from the server:
   *
   * @example
   * socket.timeout(5000).emit("my-event", (err) => {
   *   if (err) {
   *     // the server did not acknowledge the event in the given delay
   *   }
   * });
   *
   * @returns self
   */
  timeout(r) {
    return this.flags.timeout = r, this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * @example
   * socket.onAny((event, ...args) => {
   *   console.log(`got ${event}`);
   * });
   *
   * @param listener
   */
  onAny(r) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.push(r), this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * @example
   * socket.prependAny((event, ...args) => {
   *   console.log(`got event ${event}`);
   * });
   *
   * @param listener
   */
  prependAny(r) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(r), this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`got event ${event}`);
   * }
   *
   * socket.onAny(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAny(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAny();
   *
   * @param listener
   */
  offAny(r) {
    if (!this._anyListeners)
      return this;
    if (r) {
      const e = this._anyListeners;
      for (let i = 0; i < e.length; i++)
        if (r === e[i])
          return e.splice(i, 1), this;
    } else
      this._anyListeners = [];
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAny() {
    return this._anyListeners || [];
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.onAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  onAnyOutgoing(r) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(r), this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.prependAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  prependAnyOutgoing(r) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(r), this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`sent event ${event}`);
   * }
   *
   * socket.onAnyOutgoing(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAnyOutgoing(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAnyOutgoing();
   *
   * @param [listener] - the catch-all listener (optional)
   */
  offAnyOutgoing(r) {
    if (!this._anyOutgoingListeners)
      return this;
    if (r) {
      const e = this._anyOutgoingListeners;
      for (let i = 0; i < e.length; i++)
        if (r === e[i])
          return e.splice(i, 1), this;
    } else
      this._anyOutgoingListeners = [];
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  /**
   * Notify the listeners for each packet sent
   *
   * @param packet
   *
   * @private
   */
  notifyOutgoingListeners(r) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const e = this._anyOutgoingListeners.slice();
      for (const i of e)
        i.apply(this, r.data);
    }
  }
}
function lr(n) {
  n = n || {}, this.ms = n.min || 100, this.max = n.max || 1e4, this.factor = n.factor || 2, this.jitter = n.jitter > 0 && n.jitter <= 1 ? n.jitter : 0, this.attempts = 0;
}
lr.prototype.duration = function() {
  var n = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var r = Math.random(), e = Math.floor(r * this.jitter * n);
    n = (Math.floor(r * 10) & 1) == 0 ? n - e : n + e;
  }
  return Math.min(n, this.max) | 0;
};
lr.prototype.reset = function() {
  this.attempts = 0;
};
lr.prototype.setMin = function(n) {
  this.ms = n;
};
lr.prototype.setMax = function(n) {
  this.max = n;
};
lr.prototype.setJitter = function(n) {
  this.jitter = n;
};
class us extends ot {
  constructor(r, e) {
    var i;
    super(), this.nsps = {}, this.subs = [], r && typeof r == "object" && (e = r, r = void 0), e = e || {}, e.path = e.path || "/socket.io", this.opts = e, li(this, e), this.reconnection(e.reconnection !== !1), this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0), this.reconnectionDelay(e.reconnectionDelay || 1e3), this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3), this.randomizationFactor((i = e.randomizationFactor) !== null && i !== void 0 ? i : 0.5), this.backoff = new lr({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(e.timeout == null ? 2e4 : e.timeout), this._readyState = "closed", this.uri = r;
    const s = e.parser || Rh;
    this.encoder = new s.Encoder(), this.decoder = new s.Decoder(), this._autoConnect = e.autoConnect !== !1, this._autoConnect && this.open();
  }
  reconnection(r) {
    return arguments.length ? (this._reconnection = !!r, r || (this.skipReconnect = !0), this) : this._reconnection;
  }
  reconnectionAttempts(r) {
    return r === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = r, this);
  }
  reconnectionDelay(r) {
    var e;
    return r === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = r, (e = this.backoff) === null || e === void 0 || e.setMin(r), this);
  }
  randomizationFactor(r) {
    var e;
    return r === void 0 ? this._randomizationFactor : (this._randomizationFactor = r, (e = this.backoff) === null || e === void 0 || e.setJitter(r), this);
  }
  reconnectionDelayMax(r) {
    var e;
    return r === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = r, (e = this.backoff) === null || e === void 0 || e.setMax(r), this);
  }
  timeout(r) {
    return arguments.length ? (this._timeout = r, this) : this._timeout;
  }
  /**
   * Starts trying to reconnect if reconnection is enabled and we have not
   * started reconnecting yet
   *
   * @private
   */
  maybeReconnectOnOpen() {
    !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect();
  }
  /**
   * Sets the current transport `socket`.
   *
   * @param {Function} fn - optional, callback
   * @return self
   * @public
   */
  open(r) {
    if (~this._readyState.indexOf("open"))
      return this;
    this.engine = new mh(this.uri, this.opts);
    const e = this.engine, i = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const s = Ft(e, "open", function() {
      i.onopen(), r && r();
    }), a = (u) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", u), r ? r(u) : this.maybeReconnectOnOpen();
    }, c = Ft(e, "error", a);
    if (this._timeout !== !1) {
      const u = this._timeout, f = this.setTimeoutFn(() => {
        s(), a(new Error("timeout")), e.close();
      }, u);
      this.opts.autoUnref && f.unref(), this.subs.push(() => {
        this.clearTimeoutFn(f);
      });
    }
    return this.subs.push(s), this.subs.push(c), this;
  }
  /**
   * Alias for open()
   *
   * @return self
   * @public
   */
  connect(r) {
    return this.open(r);
  }
  /**
   * Called upon transport open.
   *
   * @private
   */
  onopen() {
    this.cleanup(), this._readyState = "open", this.emitReserved("open");
    const r = this.engine;
    this.subs.push(
      Ft(r, "ping", this.onping.bind(this)),
      Ft(r, "data", this.ondata.bind(this)),
      Ft(r, "error", this.onerror.bind(this)),
      Ft(r, "close", this.onclose.bind(this)),
      // @ts-ignore
      Ft(this.decoder, "decoded", this.ondecoded.bind(this))
    );
  }
  /**
   * Called upon a ping.
   *
   * @private
   */
  onping() {
    this.emitReserved("ping");
  }
  /**
   * Called with data.
   *
   * @private
   */
  ondata(r) {
    try {
      this.decoder.add(r);
    } catch (e) {
      this.onclose("parse error", e);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(r) {
    ci(() => {
      this.emitReserved("packet", r);
    }, this.setTimeoutFn);
  }
  /**
   * Called upon socket error.
   *
   * @private
   */
  onerror(r) {
    this.emitReserved("error", r);
  }
  /**
   * Creates a new socket for the given `nsp`.
   *
   * @return {Socket}
   * @public
   */
  socket(r, e) {
    let i = this.nsps[r];
    return i ? this._autoConnect && !i.active && i.connect() : (i = new su(this, r, e), this.nsps[r] = i), i;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(r) {
    const e = Object.keys(this.nsps);
    for (const i of e)
      if (this.nsps[i].active)
        return;
    this._close();
  }
  /**
   * Writes a packet.
   *
   * @param packet
   * @private
   */
  _packet(r) {
    const e = this.encoder.encode(r);
    for (let i = 0; i < e.length; i++)
      this.engine.write(e[i], r.options);
  }
  /**
   * Clean up transport subscriptions and packet buffer.
   *
   * @private
   */
  cleanup() {
    this.subs.forEach((r) => r()), this.subs.length = 0, this.decoder.destroy();
  }
  /**
   * Close the current socket.
   *
   * @private
   */
  _close() {
    this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close");
  }
  /**
   * Alias for close()
   *
   * @private
   */
  disconnect() {
    return this._close();
  }
  /**
   * Called when:
   *
   * - the low-level engine is closed
   * - the parser encountered a badly formatted packet
   * - all sockets are disconnected
   *
   * @private
   */
  onclose(r, e) {
    var i;
    this.cleanup(), (i = this.engine) === null || i === void 0 || i.close(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", r, e), this._reconnection && !this.skipReconnect && this.reconnect();
  }
  /**
   * Attempt a reconnection.
   *
   * @private
   */
  reconnect() {
    if (this._reconnecting || this.skipReconnect)
      return this;
    const r = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
    else {
      const e = this.backoff.duration();
      this._reconnecting = !0;
      const i = this.setTimeoutFn(() => {
        r.skipReconnect || (this.emitReserved("reconnect_attempt", r.backoff.attempts), !r.skipReconnect && r.open((s) => {
          s ? (r._reconnecting = !1, r.reconnect(), this.emitReserved("reconnect_error", s)) : r.onreconnect();
        }));
      }, e);
      this.opts.autoUnref && i.unref(), this.subs.push(() => {
        this.clearTimeoutFn(i);
      });
    }
  }
  /**
   * Called upon successful reconnect.
   *
   * @private
   */
  onreconnect() {
    const r = this.backoff.attempts;
    this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", r);
  }
}
const yr = {};
function yo(n, r) {
  typeof n == "object" && (r = n, n = void 0), r = r || {};
  const e = gh(n, r.path || "/socket.io"), i = e.source, s = e.id, a = e.path, c = yr[s] && a in yr[s].nsps, u = r.forceNew || r["force new connection"] || r.multiplex === !1 || c;
  let f;
  return u ? f = new us(i, r) : (yr[s] || (yr[s] = new us(i, r)), f = yr[s]), e.query && !r.query && (r.query = e.queryKey), f.socket(e.path, r);
}
Object.assign(yo, {
  Manager: us,
  Socket: su,
  io: yo,
  connect: yo
});
var Mi = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var sc;
function kh() {
  return sc || (sc = 1, function(n) {
    (function() {
      var r = {}.hasOwnProperty;
      function e() {
        for (var a = "", c = 0; c < arguments.length; c++) {
          var u = arguments[c];
          u && (a = s(a, i(u)));
        }
        return a;
      }
      function i(a) {
        if (typeof a == "string" || typeof a == "number")
          return a;
        if (typeof a != "object")
          return "";
        if (Array.isArray(a))
          return e.apply(null, a);
        if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]"))
          return a.toString();
        var c = "";
        for (var u in a)
          r.call(a, u) && a[u] && (c = s(c, u));
        return c;
      }
      function s(a, c) {
        return c ? a ? a + " " + c : a + c : a;
      }
      n.exports ? (e.default = e, n.exports = e) : window.classNames = e;
    })();
  }(Mi)), Mi.exports;
}
var Ih = kh();
const xt = /* @__PURE__ */ Sd(Ih);
function tn() {
  return tn = Object.assign ? Object.assign.bind() : function(n) {
    for (var r = 1; r < arguments.length; r++) {
      var e = arguments[r];
      for (var i in e) ({}).hasOwnProperty.call(e, i) && (n[i] = e[i]);
    }
    return n;
  }, tn.apply(null, arguments);
}
function ze(n) {
  "@babel/helpers - typeof";
  return ze = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, ze(n);
}
var _h = Symbol.for("react.element"), Nh = Symbol.for("react.transitional.element"), jh = Symbol.for("react.fragment");
function Mh(n) {
  return (
    // Base object type
    n && ze(n) === "object" && // React Element type
    (n.$$typeof === _h || n.$$typeof === Nh) && // React Fragment type
    n.type === jh
  );
}
var fs = {}, ha = [], Lh = function(r) {
  ha.push(r);
};
function pa(n, r) {
  if (process.env.NODE_ENV !== "production" && !n && console !== void 0) {
    var e = ha.reduce(function(i, s) {
      return s(i ?? "", "warning");
    }, r);
    e && console.error("Warning: ".concat(e));
  }
}
function Dh(n, r) {
  if (process.env.NODE_ENV !== "production" && !n && console !== void 0) {
    var e = ha.reduce(function(i, s) {
      return s(i ?? "", "note");
    }, r);
    e && console.warn("Note: ".concat(e));
  }
}
function au() {
  fs = {};
}
function cu(n, r, e) {
  !r && !fs[e] && (n(!1, e), fs[e] = !0);
}
function En(n, r) {
  cu(pa, n, r);
}
function Bh(n, r) {
  cu(Dh, n, r);
}
En.preMessage = Lh;
En.resetWarned = au;
En.noteOnce = Bh;
function Fh(n, r) {
  if (ze(n) != "object" || !n) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(n, r);
    if (ze(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(n);
}
function lu(n) {
  var r = Fh(n, "string");
  return ze(r) == "symbol" ? r : r + "";
}
function ce(n, r, e) {
  return (r = lu(r)) in n ? Object.defineProperty(n, r, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[r] = e, n;
}
function ac(n, r) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(n);
    r && (i = i.filter(function(s) {
      return Object.getOwnPropertyDescriptor(n, s).enumerable;
    })), e.push.apply(e, i);
  }
  return e;
}
function oe(n) {
  for (var r = 1; r < arguments.length; r++) {
    var e = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ac(Object(e), !0).forEach(function(i) {
      ce(n, i, e[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : ac(Object(e)).forEach(function(i) {
      Object.defineProperty(n, i, Object.getOwnPropertyDescriptor(e, i));
    });
  }
  return n;
}
function cc(n) {
  return n instanceof HTMLElement || n instanceof SVGElement;
}
function zh(n) {
  return n && ze(n) === "object" && cc(n.nativeElement) ? n.nativeElement : cc(n) ? n : null;
}
function Vh(n) {
  var r = zh(n);
  if (r)
    return r;
  if (n instanceof et.Component) {
    var e;
    return (e = Na.findDOMNode) === null || e === void 0 ? void 0 : e.call(Na, n);
  }
  return null;
}
var Jr = { exports: {} }, Me = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lc;
function Hh() {
  if (lc) return Me;
  lc = 1;
  var n = Symbol.for("react.element"), r = Symbol.for("react.portal"), e = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), c = Symbol.for("react.context"), u = Symbol.for("react.server_context"), f = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), S;
  S = Symbol.for("react.module.reference");
  function v(y) {
    if (typeof y == "object" && y !== null) {
      var A = y.$$typeof;
      switch (A) {
        case n:
          switch (y = y.type, y) {
            case e:
            case s:
            case i:
            case d:
            case m:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case u:
                case c:
                case f:
                case h:
                case x:
                case a:
                  return y;
                default:
                  return A;
              }
          }
        case r:
          return A;
      }
    }
  }
  return Me.ContextConsumer = c, Me.ContextProvider = a, Me.Element = n, Me.ForwardRef = f, Me.Fragment = e, Me.Lazy = h, Me.Memo = x, Me.Portal = r, Me.Profiler = s, Me.StrictMode = i, Me.Suspense = d, Me.SuspenseList = m, Me.isAsyncMode = function() {
    return !1;
  }, Me.isConcurrentMode = function() {
    return !1;
  }, Me.isContextConsumer = function(y) {
    return v(y) === c;
  }, Me.isContextProvider = function(y) {
    return v(y) === a;
  }, Me.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === n;
  }, Me.isForwardRef = function(y) {
    return v(y) === f;
  }, Me.isFragment = function(y) {
    return v(y) === e;
  }, Me.isLazy = function(y) {
    return v(y) === h;
  }, Me.isMemo = function(y) {
    return v(y) === x;
  }, Me.isPortal = function(y) {
    return v(y) === r;
  }, Me.isProfiler = function(y) {
    return v(y) === s;
  }, Me.isStrictMode = function(y) {
    return v(y) === i;
  }, Me.isSuspense = function(y) {
    return v(y) === d;
  }, Me.isSuspenseList = function(y) {
    return v(y) === m;
  }, Me.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === e || y === s || y === i || y === d || y === m || y === w || typeof y == "object" && y !== null && (y.$$typeof === h || y.$$typeof === x || y.$$typeof === a || y.$$typeof === c || y.$$typeof === f || y.$$typeof === S || y.getModuleId !== void 0);
  }, Me.typeOf = v, Me;
}
var Le = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uc;
function Uh() {
  return uc || (uc = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Symbol.for("react.element"), r = Symbol.for("react.portal"), e = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), c = Symbol.for("react.context"), u = Symbol.for("react.server_context"), f = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), S = !1, v = !1, y = !1, A = !1, T = !1, g;
    g = Symbol.for("react.module.reference");
    function M(ee) {
      return !!(typeof ee == "string" || typeof ee == "function" || ee === e || ee === s || T || ee === i || ee === d || ee === m || A || ee === w || S || v || y || typeof ee == "object" && ee !== null && (ee.$$typeof === h || ee.$$typeof === x || ee.$$typeof === a || ee.$$typeof === c || ee.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      ee.$$typeof === g || ee.getModuleId !== void 0));
    }
    function C(ee) {
      if (typeof ee == "object" && ee !== null) {
        var Se = ee.$$typeof;
        switch (Se) {
          case n:
            var Ve = ee.type;
            switch (Ve) {
              case e:
              case s:
              case i:
              case d:
              case m:
                return Ve;
              default:
                var At = Ve && Ve.$$typeof;
                switch (At) {
                  case u:
                  case c:
                  case f:
                  case h:
                  case x:
                  case a:
                    return At;
                  default:
                    return Se;
                }
            }
          case r:
            return Se;
        }
      }
    }
    var B = c, _ = a, Y = n, ne = f, ue = e, Ee = h, he = x, te = r, le = s, ie = i, be = d, me = m, ve = !1, ye = !1;
    function xe(ee) {
      return ve || (ve = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function fe(ee) {
      return ye || (ye = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function se(ee) {
      return C(ee) === c;
    }
    function ge(ee) {
      return C(ee) === a;
    }
    function Pe(ee) {
      return typeof ee == "object" && ee !== null && ee.$$typeof === n;
    }
    function Ce(ee) {
      return C(ee) === f;
    }
    function ke(ee) {
      return C(ee) === e;
    }
    function $(ee) {
      return C(ee) === h;
    }
    function X(ee) {
      return C(ee) === x;
    }
    function q(ee) {
      return C(ee) === r;
    }
    function Q(ee) {
      return C(ee) === s;
    }
    function F(ee) {
      return C(ee) === i;
    }
    function re(ee) {
      return C(ee) === d;
    }
    function tt(ee) {
      return C(ee) === m;
    }
    Le.ContextConsumer = B, Le.ContextProvider = _, Le.Element = Y, Le.ForwardRef = ne, Le.Fragment = ue, Le.Lazy = Ee, Le.Memo = he, Le.Portal = te, Le.Profiler = le, Le.StrictMode = ie, Le.Suspense = be, Le.SuspenseList = me, Le.isAsyncMode = xe, Le.isConcurrentMode = fe, Le.isContextConsumer = se, Le.isContextProvider = ge, Le.isElement = Pe, Le.isForwardRef = Ce, Le.isFragment = ke, Le.isLazy = $, Le.isMemo = X, Le.isPortal = q, Le.isProfiler = Q, Le.isStrictMode = F, Le.isSuspense = re, Le.isSuspenseList = tt, Le.isValidElementType = M, Le.typeOf = C;
  }()), Le;
}
var fc;
function Wh() {
  return fc || (fc = 1, process.env.NODE_ENV === "production" ? Jr.exports = Hh() : Jr.exports = Uh()), Jr.exports;
}
var Li = Wh();
function uu(n, r, e) {
  var i = P.useRef({});
  return (!("value" in i.current) || e(i.current.condition, r)) && (i.current.value = n(), i.current.condition = r), i.current.value;
}
var qh = Number(yd.split(".")[0]), fu = function(r, e) {
  typeof r == "function" ? r(e) : ze(r) === "object" && r && "current" in r && (r.current = e);
}, $h = function() {
  for (var r = arguments.length, e = new Array(r), i = 0; i < r; i++)
    e[i] = arguments[i];
  var s = e.filter(Boolean);
  return s.length <= 1 ? s[0] : function(a) {
    e.forEach(function(c) {
      fu(c, a);
    });
  };
}, Xh = function(r) {
  var e, i;
  if (!r)
    return !1;
  if (du(r) && qh >= 19)
    return !0;
  var s = Li.isMemo(r) ? r.type.type : r.type;
  return !(typeof s == "function" && !((e = s.prototype) !== null && e !== void 0 && e.render) && s.$$typeof !== Li.ForwardRef || typeof r == "function" && !((i = r.prototype) !== null && i !== void 0 && i.render) && r.$$typeof !== Li.ForwardRef);
};
function du(n) {
  return /* @__PURE__ */ vd(n) && !Mh(n);
}
var Yh = function(r) {
  if (r && du(r)) {
    var e = r;
    return e.props.propertyIsEnumerable("ref") ? e.props.ref : e.ref;
  }
  return null;
};
function qt(n, r) {
  if (!(n instanceof r)) throw new TypeError("Cannot call a class as a function");
}
function dc(n, r) {
  for (var e = 0; e < r.length; e++) {
    var i = r[e];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, lu(i.key), i);
  }
}
function $t(n, r, e) {
  return r && dc(n.prototype, r), e && dc(n, e), Object.defineProperty(n, "prototype", {
    writable: !1
  }), n;
}
function ds(n, r) {
  return ds = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, i) {
    return e.__proto__ = i, e;
  }, ds(n, r);
}
function zr(n, r) {
  if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
  n.prototype = Object.create(r && r.prototype, {
    constructor: {
      value: n,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(n, "prototype", {
    writable: !1
  }), r && ds(n, r);
}
function tr(n) {
  return tr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, tr(n);
}
function xa() {
  try {
    var n = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (xa = function() {
    return !!n;
  })();
}
function Mn(n) {
  if (n === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n;
}
function hu(n, r) {
  if (r && (ze(r) == "object" || typeof r == "function")) return r;
  if (r !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Mn(n);
}
function ui(n) {
  var r = xa();
  return function() {
    var e, i = tr(n);
    if (r) {
      var s = tr(this).constructor;
      e = Reflect.construct(i, arguments, s);
    } else e = i.apply(this, arguments);
    return hu(this, e);
  };
}
function hs(n, r) {
  (r == null || r > n.length) && (r = n.length);
  for (var e = 0, i = Array(r); e < r; e++) i[e] = n[e];
  return i;
}
function Gh(n) {
  if (Array.isArray(n)) return hs(n);
}
function pu(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function ma(n, r) {
  if (n) {
    if (typeof n == "string") return hs(n, r);
    var e = {}.toString.call(n).slice(8, -1);
    return e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set" ? Array.from(n) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? hs(n, r) : void 0;
  }
}
function Kh() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function cn(n) {
  return Gh(n) || pu(n) || ma(n) || Kh();
}
var xu = function(r) {
  return +setTimeout(r, 16);
}, mu = function(r) {
  return clearTimeout(r);
};
typeof window < "u" && "requestAnimationFrame" in window && (xu = function(r) {
  return window.requestAnimationFrame(r);
}, mu = function(r) {
  return window.cancelAnimationFrame(r);
});
var hc = 0, fi = /* @__PURE__ */ new Map();
function gu(n) {
  fi.delete(n);
}
var Lo = function(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  hc += 1;
  var i = hc;
  function s(a) {
    if (a === 0)
      gu(i), r();
    else {
      var c = xu(function() {
        s(a - 1);
      });
      fi.set(i, c);
    }
  }
  return s(e), i;
};
Lo.cancel = function(n) {
  var r = fi.get(n);
  return gu(n), mu(r);
};
process.env.NODE_ENV !== "production" && (Lo.ids = function() {
  return fi;
});
function vu(n) {
  if (Array.isArray(n)) return n;
}
function Zh(n, r) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var i, s, a, c, u = [], f = !0, d = !1;
    try {
      if (a = (e = e.call(n)).next, r === 0) {
        if (Object(e) !== e) return;
        f = !1;
      } else for (; !(f = (i = a.call(e)).done) && (u.push(i.value), u.length !== r); f = !0) ;
    } catch (m) {
      d = !0, s = m;
    } finally {
      try {
        if (!f && e.return != null && (c = e.return(), Object(c) !== c)) return;
      } finally {
        if (d) throw s;
      }
    }
    return u;
  }
}
function yu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Oe(n, r) {
  return vu(n) || Zh(n, r) || ma(n, r) || yu();
}
function Ir(n) {
  for (var r = 0, e, i = 0, s = n.length; s >= 4; ++i, s -= 4)
    e = n.charCodeAt(i) & 255 | (n.charCodeAt(++i) & 255) << 8 | (n.charCodeAt(++i) & 255) << 16 | (n.charCodeAt(++i) & 255) << 24, e = /* Math.imul(k, m): */
    (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16), e ^= /* k >>> r: */
    e >>> 24, r = /* Math.imul(k, m): */
    (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (s) {
    case 3:
      r ^= (n.charCodeAt(i + 2) & 255) << 16;
    case 2:
      r ^= (n.charCodeAt(i + 1) & 255) << 8;
    case 1:
      r ^= n.charCodeAt(i) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
function ln() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Qh(n, r) {
  if (!n)
    return !1;
  if (n.contains)
    return n.contains(r);
  for (var e = r; e; ) {
    if (e === n)
      return !0;
    e = e.parentNode;
  }
  return !1;
}
var pc = "data-rc-order", xc = "data-rc-priority", Jh = "rc-util-key", ps = /* @__PURE__ */ new Map();
function bu() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = n.mark;
  return r ? r.startsWith("data-") ? r : "data-".concat(r) : Jh;
}
function di(n) {
  if (n.attachTo)
    return n.attachTo;
  var r = document.querySelector("head");
  return r || document.body;
}
function ep(n) {
  return n === "queue" ? "prependQueue" : n ? "prepend" : "append";
}
function ga(n) {
  return Array.from((ps.get(n) || n).children).filter(function(r) {
    return r.tagName === "STYLE";
  });
}
function Su(n) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!ln())
    return null;
  var e = r.csp, i = r.prepend, s = r.priority, a = s === void 0 ? 0 : s, c = ep(i), u = c === "prependQueue", f = document.createElement("style");
  f.setAttribute(pc, c), u && a && f.setAttribute(xc, "".concat(a)), e != null && e.nonce && (f.nonce = e == null ? void 0 : e.nonce), f.innerHTML = n;
  var d = di(r), m = d.firstChild;
  if (i) {
    if (u) {
      var x = (r.styles || ga(d)).filter(function(h) {
        if (!["prepend", "prependQueue"].includes(h.getAttribute(pc)))
          return !1;
        var w = Number(h.getAttribute(xc) || 0);
        return a >= w;
      });
      if (x.length)
        return d.insertBefore(f, x[x.length - 1].nextSibling), f;
    }
    d.insertBefore(f, m);
  } else
    d.appendChild(f);
  return f;
}
function wu(n) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = di(r);
  return (r.styles || ga(e)).find(function(i) {
    return i.getAttribute(bu(r)) === n;
  });
}
function Eu(n) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = wu(n, r);
  if (e) {
    var i = di(r);
    i.removeChild(e);
  }
}
function tp(n, r) {
  var e = ps.get(n);
  if (!e || !Qh(document, e)) {
    var i = Su("", r), s = i.parentNode;
    ps.set(n, s), n.removeChild(i);
  }
}
function Ln(n, r) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = di(e), s = ga(i), a = oe(oe({}, e), {}, {
    styles: s
  });
  tp(i, a);
  var c = wu(r, a);
  if (c) {
    var u, f;
    if ((u = a.csp) !== null && u !== void 0 && u.nonce && c.nonce !== ((f = a.csp) === null || f === void 0 ? void 0 : f.nonce)) {
      var d;
      c.nonce = (d = a.csp) === null || d === void 0 ? void 0 : d.nonce;
    }
    return c.innerHTML !== n && (c.innerHTML = n), c;
  }
  var m = Su(n, a);
  return m.setAttribute(bu(a), r), m;
}
function np(n, r) {
  if (n == null) return {};
  var e = {};
  for (var i in n) if ({}.hasOwnProperty.call(n, i)) {
    if (r.indexOf(i) !== -1) continue;
    e[i] = n[i];
  }
  return e;
}
function _r(n, r) {
  if (n == null) return {};
  var e, i, s = np(n, r);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    for (i = 0; i < a.length; i++) e = a[i], r.indexOf(e) === -1 && {}.propertyIsEnumerable.call(n, e) && (s[e] = n[e]);
  }
  return s;
}
function rp(n, r) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, i = /* @__PURE__ */ new Set();
  function s(a, c) {
    var u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, f = i.has(a);
    if (En(!f, "Warning: There may be circular references"), f)
      return !1;
    if (a === c)
      return !0;
    if (e && u > 1)
      return !1;
    i.add(a);
    var d = u + 1;
    if (Array.isArray(a)) {
      if (!Array.isArray(c) || a.length !== c.length)
        return !1;
      for (var m = 0; m < a.length; m++)
        if (!s(a[m], c[m], d))
          return !1;
      return !0;
    }
    if (a && c && ze(a) === "object" && ze(c) === "object") {
      var x = Object.keys(a);
      return x.length !== Object.keys(c).length ? !1 : x.every(function(h) {
        return s(a[h], c[h], d);
      });
    }
    return !1;
  }
  return s(n, r);
}
var op = "%";
function xs(n) {
  return n.join(op);
}
var ip = /* @__PURE__ */ function() {
  function n(r) {
    qt(this, n), ce(this, "instanceId", void 0), ce(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = r;
  }
  return $t(n, [{
    key: "get",
    value: function(e) {
      return this.opGet(xs(e));
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opGet",
    value: function(e) {
      return this.cache.get(e) || null;
    }
  }, {
    key: "update",
    value: function(e, i) {
      return this.opUpdate(xs(e), i);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(e, i) {
      var s = this.cache.get(e), a = i(s);
      a === null ? this.cache.delete(e) : this.cache.set(e, a);
    }
  }]), n;
}(), nr = "data-token-hash", Ht = "data-css-hash", sp = "data-cache-path", vn = "__cssinjs_instance__";
function ap() {
  var n = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var r = document.body.querySelectorAll("style[".concat(Ht, "]")) || [], e = document.head.firstChild;
    Array.from(r).forEach(function(s) {
      s[vn] = s[vn] || n, s[vn] === n && document.head.insertBefore(s, e);
    });
    var i = {};
    Array.from(document.querySelectorAll("style[".concat(Ht, "]"))).forEach(function(s) {
      var a = s.getAttribute(Ht);
      if (i[a]) {
        if (s[vn] === n) {
          var c;
          (c = s.parentNode) === null || c === void 0 || c.removeChild(s);
        }
      } else
        i[a] = !0;
    });
  }
  return new ip(n);
}
var Vr = /* @__PURE__ */ P.createContext({
  hashPriority: "low",
  cache: ap(),
  defaultCache: !0
});
function cp(n, r) {
  if (n.length !== r.length)
    return !1;
  for (var e = 0; e < n.length; e++)
    if (n[e] !== r[e])
      return !1;
  return !0;
}
var va = /* @__PURE__ */ function() {
  function n() {
    qt(this, n), ce(this, "cache", void 0), ce(this, "keys", void 0), ce(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return $t(n, [{
    key: "size",
    value: function() {
      return this.keys.length;
    }
  }, {
    key: "internalGet",
    value: function(e) {
      var i, s, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, c = {
        map: this.cache
      };
      return e.forEach(function(u) {
        if (!c)
          c = void 0;
        else {
          var f;
          c = (f = c) === null || f === void 0 || (f = f.map) === null || f === void 0 ? void 0 : f.get(u);
        }
      }), (i = c) !== null && i !== void 0 && i.value && a && (c.value[1] = this.cacheCallTimes++), (s = c) === null || s === void 0 ? void 0 : s.value;
    }
  }, {
    key: "get",
    value: function(e) {
      var i;
      return (i = this.internalGet(e, !0)) === null || i === void 0 ? void 0 : i[0];
    }
  }, {
    key: "has",
    value: function(e) {
      return !!this.internalGet(e);
    }
  }, {
    key: "set",
    value: function(e, i) {
      var s = this;
      if (!this.has(e)) {
        if (this.size() + 1 > n.MAX_CACHE_SIZE + n.MAX_CACHE_OFFSET) {
          var a = this.keys.reduce(function(d, m) {
            var x = Oe(d, 2), h = x[1];
            return s.internalGet(m)[1] < h ? [m, s.internalGet(m)[1]] : d;
          }, [this.keys[0], this.cacheCallTimes]), c = Oe(a, 1), u = c[0];
          this.delete(u);
        }
        this.keys.push(e);
      }
      var f = this.cache;
      e.forEach(function(d, m) {
        if (m === e.length - 1)
          f.set(d, {
            value: [i, s.cacheCallTimes++]
          });
        else {
          var x = f.get(d);
          x ? x.map || (x.map = /* @__PURE__ */ new Map()) : f.set(d, {
            map: /* @__PURE__ */ new Map()
          }), f = f.get(d).map;
        }
      });
    }
  }, {
    key: "deleteByPath",
    value: function(e, i) {
      var s = e.get(i[0]);
      if (i.length === 1) {
        var a;
        return s.map ? e.set(i[0], {
          map: s.map
        }) : e.delete(i[0]), (a = s.value) === null || a === void 0 ? void 0 : a[0];
      }
      var c = this.deleteByPath(s.map, i.slice(1));
      return (!s.map || s.map.size === 0) && !s.value && e.delete(i[0]), c;
    }
  }, {
    key: "delete",
    value: function(e) {
      if (this.has(e))
        return this.keys = this.keys.filter(function(i) {
          return !cp(i, e);
        }), this.deleteByPath(this.cache, e);
    }
  }]), n;
}();
ce(va, "MAX_CACHE_SIZE", 20);
ce(va, "MAX_CACHE_OFFSET", 5);
var mc = 0, Cu = /* @__PURE__ */ function() {
  function n(r) {
    qt(this, n), ce(this, "derivatives", void 0), ce(this, "id", void 0), this.derivatives = Array.isArray(r) ? r : [r], this.id = mc, r.length === 0 && pa(r.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), mc += 1;
  }
  return $t(n, [{
    key: "getDerivativeToken",
    value: function(e) {
      return this.derivatives.reduce(function(i, s) {
        return s(e, i);
      }, void 0);
    }
  }]), n;
}(), Di = new va();
function ms(n) {
  var r = Array.isArray(n) ? n : [n];
  return Di.has(r) || Di.set(r, new Cu(r)), Di.get(r);
}
var lp = /* @__PURE__ */ new WeakMap(), Bi = {};
function up(n, r) {
  for (var e = lp, i = 0; i < r.length; i += 1) {
    var s = r[i];
    e.has(s) || e.set(s, /* @__PURE__ */ new WeakMap()), e = e.get(s);
  }
  return e.has(Bi) || e.set(Bi, n()), e.get(Bi);
}
var gc = /* @__PURE__ */ new WeakMap();
function Rr(n) {
  var r = gc.get(n) || "";
  return r || (Object.keys(n).forEach(function(e) {
    var i = n[e];
    r += e, i instanceof Cu ? r += i.id : i && ze(i) === "object" ? r += Rr(i) : r += i;
  }), r = Ir(r), gc.set(n, r)), r;
}
function vc(n, r) {
  return Ir("".concat(r, "_").concat(Rr(n)));
}
var gs = ln();
function Do(n) {
  return typeof n == "number" ? "".concat(n, "px") : n;
}
function Bo(n, r, e) {
  var i, s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (a)
    return n;
  var c = oe(oe({}, s), {}, (i = {}, ce(i, nr, r), ce(i, Ht, e), i)), u = Object.keys(c).map(function(f) {
    var d = c[f];
    return d ? "".concat(f, '="').concat(d, '"') : null;
  }).filter(function(f) {
    return f;
  }).join(" ");
  return "<style ".concat(u, ">").concat(n, "</style>");
}
var bo = function(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(e ? "".concat(e, "-") : "").concat(r).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, fp = function(r, e, i) {
  return Object.keys(r).length ? ".".concat(e).concat(i != null && i.scope ? ".".concat(i.scope) : "", "{").concat(Object.entries(r).map(function(s) {
    var a = Oe(s, 2), c = a[0], u = a[1];
    return "".concat(c, ":").concat(u, ";");
  }).join(""), "}") : "";
}, Tu = function(r, e, i) {
  var s = {}, a = {};
  return Object.entries(r).forEach(function(c) {
    var u, f, d = Oe(c, 2), m = d[0], x = d[1];
    if (i != null && (u = i.preserve) !== null && u !== void 0 && u[m])
      a[m] = x;
    else if ((typeof x == "string" || typeof x == "number") && !(i != null && (f = i.ignore) !== null && f !== void 0 && f[m])) {
      var h, w = bo(m, i == null ? void 0 : i.prefix);
      s[w] = typeof x == "number" && !(i != null && (h = i.unitless) !== null && h !== void 0 && h[m]) ? "".concat(x, "px") : String(x), a[m] = "var(".concat(w, ")");
    }
  }), [a, fp(s, e, {
    scope: i == null ? void 0 : i.scope
  })];
}, yc = process.env.NODE_ENV !== "test" && ln() ? P.useLayoutEffect : P.useEffect, Au = function(r, e) {
  var i = P.useRef(!0);
  yc(function() {
    return r(i.current);
  }, e), yc(function() {
    return i.current = !1, function() {
      i.current = !0;
    };
  }, []);
}, dp = oe({}, P), bc = dp.useInsertionEffect, hp = function(r, e, i) {
  P.useMemo(r, i), Au(function() {
    return e(!0);
  }, i);
}, pp = bc ? function(n, r, e) {
  return bc(function() {
    return n(), r();
  }, e);
} : hp, xp = oe({}, P), mp = xp.useInsertionEffect, gp = function(r) {
  var e = [], i = !1;
  function s(a) {
    if (i) {
      process.env.NODE_ENV !== "production" && pa(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    e.push(a);
  }
  return P.useEffect(function() {
    return i = !1, function() {
      i = !0, e.length && e.forEach(function(a) {
        return a();
      });
    };
  }, r), s;
}, vp = function() {
  return function(r) {
    r();
  };
}, yp = typeof mp < "u" ? gp : vp;
function bp() {
  return !1;
}
var vs = !1;
function Sp() {
  return vs;
}
const wp = process.env.NODE_ENV === "production" ? bp : Sp;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var eo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : null;
  if (eo && typeof eo.webpackHotUpdate == "function") {
    var Ep = eo.webpackHotUpdate;
    eo.webpackHotUpdate = function() {
      return vs = !0, setTimeout(function() {
        vs = !1;
      }, 0), Ep.apply(void 0, arguments);
    };
  }
}
function ya(n, r, e, i, s) {
  var a = P.useContext(Vr), c = a.cache, u = [n].concat(cn(r)), f = xs(u), d = yp([f]), m = wp(), x = function(v) {
    c.opUpdate(f, function(y) {
      var A = y || [void 0, void 0], T = Oe(A, 2), g = T[0], M = g === void 0 ? 0 : g, C = T[1], B = C;
      process.env.NODE_ENV !== "production" && C && m && (i == null || i(B, m), B = null);
      var _ = B || e(), Y = [M, _];
      return v ? v(Y) : Y;
    });
  };
  P.useMemo(
    function() {
      x();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [f]
    /* eslint-enable */
  );
  var h = c.opGet(f);
  process.env.NODE_ENV !== "production" && !h && (x(), h = c.opGet(f));
  var w = h[1];
  return pp(function() {
    s == null || s(w);
  }, function(S) {
    return x(function(v) {
      var y = Oe(v, 2), A = y[0], T = y[1];
      return S && A === 0 && (s == null || s(w)), [A + 1, T];
    }), function() {
      c.opUpdate(f, function(v) {
        var y = v || [], A = Oe(y, 2), T = A[0], g = T === void 0 ? 0 : T, M = A[1], C = g - 1;
        return C === 0 ? (d(function() {
          (S || !c.opGet(f)) && (i == null || i(M, !1));
        }), null) : [g - 1, M];
      });
    };
  }, [f]), w;
}
var Cp = {}, Tp = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", Pn = /* @__PURE__ */ new Map();
function Ap(n) {
  Pn.set(n, (Pn.get(n) || 0) + 1);
}
function Op(n, r) {
  if (typeof document < "u") {
    var e = document.querySelectorAll("style[".concat(nr, '="').concat(n, '"]'));
    e.forEach(function(i) {
      if (i[vn] === r) {
        var s;
        (s = i.parentNode) === null || s === void 0 || s.removeChild(i);
      }
    });
  }
}
var Rp = 0;
function Pp(n, r) {
  Pn.set(n, (Pn.get(n) || 0) - 1);
  var e = Array.from(Pn.keys()), i = e.filter(function(s) {
    var a = Pn.get(s) || 0;
    return a <= 0;
  });
  e.length - i.length > Rp && i.forEach(function(s) {
    Op(s, r), Pn.delete(s);
  });
}
var kp = function(r, e, i, s) {
  var a = i.getDerivativeToken(r), c = oe(oe({}, a), e);
  return s && (c = s(c)), c;
}, Ou = "token";
function Ip(n, r) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = Sn(Vr), s = i.cache.instanceId, a = i.container, c = e.salt, u = c === void 0 ? "" : c, f = e.override, d = f === void 0 ? Cp : f, m = e.formatToken, x = e.getComputedToken, h = e.cssVar, w = up(function() {
    return Object.assign.apply(Object, [{}].concat(cn(r)));
  }, r), S = Rr(w), v = Rr(d), y = h ? Rr(h) : "", A = ya(Ou, [u, n.id, S, v, y], function() {
    var T, g = x ? x(w, d, n) : kp(w, d, n, m), M = oe({}, g), C = "";
    if (h) {
      var B = Tu(g, h.key, {
        prefix: h.prefix,
        ignore: h.ignore,
        unitless: h.unitless,
        preserve: h.preserve
      }), _ = Oe(B, 2);
      g = _[0], C = _[1];
    }
    var Y = vc(g, u);
    g._tokenKey = Y, M._tokenKey = vc(M, u);
    var ne = (T = h == null ? void 0 : h.key) !== null && T !== void 0 ? T : Y;
    g._themeKey = ne, Ap(ne);
    var ue = "".concat(Tp, "-").concat(Ir(Y));
    return g._hashId = ue, [g, ue, M, C, (h == null ? void 0 : h.key) || ""];
  }, function(T) {
    Pp(T[0]._themeKey, s);
  }, function(T) {
    var g = Oe(T, 4), M = g[0], C = g[3];
    if (h && C) {
      var B = Ln(C, Ir("css-variables-".concat(M._themeKey)), {
        mark: Ht,
        prepend: "queue",
        attachTo: a,
        priority: -999
      });
      B[vn] = s, B.setAttribute(nr, M._themeKey);
    }
  });
  return A;
}
var _p = function(r, e, i) {
  var s = Oe(r, 5), a = s[2], c = s[3], u = s[4], f = i || {}, d = f.plain;
  if (!c)
    return null;
  var m = a._tokenKey, x = -999, h = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(x)
  }, w = Bo(c, u, m, h, d);
  return [x, m, w];
}, Np = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Ru = "comm", Pu = "rule", ku = "decl", jp = "@import", Mp = "@namespace", Lp = "@keyframes", Dp = "@layer", Iu = Math.abs, ba = String.fromCharCode;
function _u(n) {
  return n.trim();
}
function So(n, r, e) {
  return n.replace(r, e);
}
function Bp(n, r, e) {
  return n.indexOf(r, e);
}
function Yn(n, r) {
  return n.charCodeAt(r) | 0;
}
function rr(n, r, e) {
  return n.slice(r, e);
}
function Zt(n) {
  return n.length;
}
function Fp(n) {
  return n.length;
}
function to(n, r) {
  return r.push(n), n;
}
var hi = 1, or = 1, Nu = 0, Bt = 0, rt = 0, ur = "";
function Sa(n, r, e, i, s, a, c, u) {
  return { value: n, root: r, parent: e, type: i, props: s, children: a, line: hi, column: or, length: c, return: "", siblings: u };
}
function zp() {
  return rt;
}
function Vp() {
  return rt = Bt > 0 ? Yn(ur, --Bt) : 0, or--, rt === 10 && (or = 1, hi--), rt;
}
function Ut() {
  return rt = Bt < Nu ? Yn(ur, Bt++) : 0, or++, rt === 10 && (or = 1, hi++), rt;
}
function yn() {
  return Yn(ur, Bt);
}
function wo() {
  return Bt;
}
function pi(n, r) {
  return rr(ur, n, r);
}
function Nr(n) {
  switch (n) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Hp(n) {
  return hi = or = 1, Nu = Zt(ur = n), Bt = 0, [];
}
function Up(n) {
  return ur = "", n;
}
function Fi(n) {
  return _u(pi(Bt - 1, ys(n === 91 ? n + 2 : n === 40 ? n + 1 : n)));
}
function Wp(n) {
  for (; (rt = yn()) && rt < 33; )
    Ut();
  return Nr(n) > 2 || Nr(rt) > 3 ? "" : " ";
}
function qp(n, r) {
  for (; --r && Ut() && !(rt < 48 || rt > 102 || rt > 57 && rt < 65 || rt > 70 && rt < 97); )
    ;
  return pi(n, wo() + (r < 6 && yn() == 32 && Ut() == 32));
}
function ys(n) {
  for (; Ut(); )
    switch (rt) {
      // ] ) " '
      case n:
        return Bt;
      // " '
      case 34:
      case 39:
        n !== 34 && n !== 39 && ys(rt);
        break;
      // (
      case 40:
        n === 41 && ys(n);
        break;
      // \
      case 92:
        Ut();
        break;
    }
  return Bt;
}
function $p(n, r) {
  for (; Ut() && n + rt !== 57; )
    if (n + rt === 84 && yn() === 47)
      break;
  return "/*" + pi(r, Bt - 1) + "*" + ba(n === 47 ? n : Ut());
}
function Xp(n) {
  for (; !Nr(yn()); )
    Ut();
  return pi(n, Bt);
}
function Yp(n) {
  return Up(Eo("", null, null, null, [""], n = Hp(n), 0, [0], n));
}
function Eo(n, r, e, i, s, a, c, u, f) {
  for (var d = 0, m = 0, x = c, h = 0, w = 0, S = 0, v = 1, y = 1, A = 1, T = 0, g = "", M = s, C = a, B = i, _ = g; y; )
    switch (S = T, T = Ut()) {
      // (
      case 40:
        if (S != 108 && Yn(_, x - 1) == 58) {
          Bp(_ += So(Fi(T), "&", "&\f"), "&\f", Iu(d ? u[d - 1] : 0)) != -1 && (A = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        _ += Fi(T);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        _ += Wp(S);
        break;
      // \
      case 92:
        _ += qp(wo() - 1, 7);
        continue;
      // /
      case 47:
        switch (yn()) {
          case 42:
          case 47:
            to(Gp($p(Ut(), wo()), r, e, f), f), (Nr(S || 1) == 5 || Nr(yn() || 1) == 5) && Zt(_) && rr(_, -1, void 0) !== " " && (_ += " ");
            break;
          default:
            _ += "/";
        }
        break;
      // {
      case 123 * v:
        u[d++] = Zt(_) * A;
      // } ; \0
      case 125 * v:
      case 59:
      case 0:
        switch (T) {
          // \0 }
          case 0:
          case 125:
            y = 0;
          // ;
          case 59 + m:
            A == -1 && (_ = So(_, /\f/g, "")), w > 0 && (Zt(_) - x || v === 0 && S === 47) && to(w > 32 ? wc(_ + ";", i, e, x - 1, f) : wc(So(_, " ", "") + ";", i, e, x - 2, f), f);
            break;
          // @ ;
          case 59:
            _ += ";";
          // { rule/at-rule
          default:
            if (to(B = Sc(_, r, e, d, m, s, u, g, M = [], C = [], x, a), a), T === 123)
              if (m === 0)
                Eo(_, r, B, B, M, a, x, u, C);
              else {
                switch (h) {
                  // c(ontainer)
                  case 99:
                    if (Yn(_, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (Yn(_, 2) === 97) break;
                  default:
                    m = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                m ? Eo(n, B, B, i && to(Sc(n, B, B, 0, 0, s, u, g, s, M = [], x, C), C), s, C, x, u, i ? M : C) : Eo(_, B, B, B, [""], C, 0, u, C);
              }
        }
        d = m = w = 0, v = A = 1, g = _ = "", x = c;
        break;
      // :
      case 58:
        x = 1 + Zt(_), w = S;
      default:
        if (v < 1) {
          if (T == 123)
            --v;
          else if (T == 125 && v++ == 0 && Vp() == 125)
            continue;
        }
        switch (_ += ba(T), T * v) {
          // &
          case 38:
            A = m > 0 ? 1 : (_ += "\f", -1);
            break;
          // ,
          case 44:
            u[d++] = (Zt(_) - 1) * A, A = 1;
            break;
          // @
          case 64:
            yn() === 45 && (_ += Fi(Ut())), h = yn(), m = x = Zt(g = _ += Xp(wo())), T++;
            break;
          // -
          case 45:
            S === 45 && Zt(_) == 2 && (v = 0);
        }
    }
  return a;
}
function Sc(n, r, e, i, s, a, c, u, f, d, m, x) {
  for (var h = s - 1, w = s === 0 ? a : [""], S = Fp(w), v = 0, y = 0, A = 0; v < i; ++v)
    for (var T = 0, g = rr(n, h + 1, h = Iu(y = c[v])), M = n; T < S; ++T)
      (M = _u(y > 0 ? w[T] + " " + g : So(g, /&\f/g, w[T]))) && (f[A++] = M);
  return Sa(n, r, e, s === 0 ? Pu : u, f, d, m, x);
}
function Gp(n, r, e, i) {
  return Sa(n, r, e, Ru, ba(zp()), rr(n, 2, -2), 0, i);
}
function wc(n, r, e, i, s) {
  return Sa(n, r, e, ku, rr(n, 0, i), rr(n, i + 1, -1), i, s);
}
function bs(n, r) {
  for (var e = "", i = 0; i < n.length; i++)
    e += r(n[i], i, n, r) || "";
  return e;
}
function Kp(n, r, e, i) {
  switch (n.type) {
    case Dp:
      if (n.children.length) break;
    case jp:
    case Mp:
    case ku:
      return n.return = n.return || n.value;
    case Ru:
      return "";
    case Lp:
      return n.return = n.value + "{" + bs(n.children, i) + "}";
    case Pu:
      if (!Zt(n.value = n.props.join(","))) return "";
  }
  return Zt(e = bs(n.children, i)) ? n.return = n.value + "{" + e + "}" : "";
}
function ju(n, r) {
  var e = r.path, i = r.parentSelectors;
  En(!1, "[Ant Design CSS-in-JS] ".concat(e ? "Error in ".concat(e, ": ") : "").concat(n).concat(i.length ? " Selector: ".concat(i.join(" | ")) : ""));
}
var Zp = function(r, e, i) {
  if (r === "content") {
    var s = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, a = ["normal", "none", "initial", "inherit", "unset"];
    (typeof e != "string" || a.indexOf(e) === -1 && !s.test(e) && (e.charAt(0) !== e.charAt(e.length - 1) || e.charAt(0) !== '"' && e.charAt(0) !== "'")) && ju("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(e, "\"'`."), i);
  }
}, Qp = function(r, e, i) {
  r === "animation" && i.hashId && e !== "none" && ju("You seem to be using hashed animation '".concat(e, "', in which case 'animationName' with Keyframe as value is recommended."), i);
}, Ec = "data-ant-cssinjs-cache-path", Mu = "_FILE_STYLE__", Dn, Lu = !0;
function Jp() {
  if (!Dn && (Dn = {}, ln())) {
    var n = document.createElement("div");
    n.className = Ec, n.style.position = "fixed", n.style.visibility = "hidden", n.style.top = "-9999px", document.body.appendChild(n);
    var r = getComputedStyle(n).content || "";
    r = r.replace(/^"/, "").replace(/"$/, ""), r.split(";").forEach(function(s) {
      var a = s.split(":"), c = Oe(a, 2), u = c[0], f = c[1];
      Dn[u] = f;
    });
    var e = document.querySelector("style[".concat(Ec, "]"));
    if (e) {
      var i;
      Lu = !1, (i = e.parentNode) === null || i === void 0 || i.removeChild(e);
    }
    document.body.removeChild(n);
  }
}
function ex(n) {
  return Jp(), !!Dn[n];
}
function tx(n) {
  var r = Dn[n], e = null;
  if (r && ln())
    if (Lu)
      e = Mu;
    else {
      var i = document.querySelector("style[".concat(Ht, '="').concat(Dn[n], '"]'));
      i ? e = i.innerHTML : delete Dn[n];
    }
  return [e, r];
}
var Du = "_skip_check_", Bu = "_multi_value_";
function Co(n) {
  var r = bs(Yp(n), Kp);
  return r.replace(/\{%%%\:[^;];}/g, ";");
}
function nx(n) {
  return ze(n) === "object" && n && (Du in n || Bu in n);
}
function Cc(n, r, e) {
  if (!r)
    return n;
  var i = ".".concat(r), s = e === "low" ? ":where(".concat(i, ")") : i, a = n.split(",").map(function(c) {
    var u, f = c.trim().split(/\s+/), d = f[0] || "", m = ((u = d.match(/^\w+/)) === null || u === void 0 ? void 0 : u[0]) || "";
    return d = "".concat(m).concat(s).concat(d.slice(m.length)), [d].concat(cn(f.slice(1))).join(" ");
  });
  return a.join(",");
}
var rx = function n(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, s = i.root, a = i.injectHash, c = i.parentSelectors, u = e.hashId, f = e.layer, d = e.path, m = e.hashPriority, x = e.transformers, h = x === void 0 ? [] : x, w = e.linters, S = w === void 0 ? [] : w, v = "", y = {};
  function A(M) {
    var C = M.getName(u);
    if (!y[C]) {
      var B = n(M.style, e, {
        root: !1,
        parentSelectors: c
      }), _ = Oe(B, 1), Y = _[0];
      y[C] = "@keyframes ".concat(M.getName(u)).concat(Y);
    }
  }
  function T(M) {
    var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return M.forEach(function(B) {
      Array.isArray(B) ? T(B, C) : B && C.push(B);
    }), C;
  }
  var g = T(Array.isArray(r) ? r : [r]);
  return g.forEach(function(M) {
    var C = typeof M == "string" && !s ? {} : M;
    if (typeof C == "string")
      v += "".concat(C, `
`);
    else if (C._keyframe)
      A(C);
    else {
      var B = h.reduce(function(_, Y) {
        var ne;
        return (Y == null || (ne = Y.visit) === null || ne === void 0 ? void 0 : ne.call(Y, _)) || _;
      }, C);
      Object.keys(B).forEach(function(_) {
        var Y = B[_];
        if (ze(Y) === "object" && Y && (_ !== "animationName" || !Y._keyframe) && !nx(Y)) {
          var ne = !1, ue = _.trim(), Ee = !1;
          (s || a) && u ? ue.startsWith("@") ? ne = !0 : ue === "&" ? ue = Cc("", u, m) : ue = Cc(_, u, m) : s && !u && (ue === "&" || ue === "") && (ue = "", Ee = !0);
          var he = n(Y, e, {
            root: Ee,
            injectHash: ne,
            parentSelectors: [].concat(cn(c), [ue])
          }), te = Oe(he, 2), le = te[0], ie = te[1];
          y = oe(oe({}, y), ie), v += "".concat(ue).concat(le);
        } else {
          let ve = function(ye, xe) {
            process.env.NODE_ENV !== "production" && (ze(Y) !== "object" || !(Y != null && Y[Du])) && [Zp, Qp].concat(cn(S)).forEach(function(ge) {
              return ge(ye, xe, {
                path: d,
                hashId: u,
                parentSelectors: c
              });
            });
            var fe = ye.replace(/[A-Z]/g, function(ge) {
              return "-".concat(ge.toLowerCase());
            }), se = xe;
            !Np[ye] && typeof se == "number" && se !== 0 && (se = "".concat(se, "px")), ye === "animationName" && xe !== null && xe !== void 0 && xe._keyframe && (A(xe), se = xe.getName(u)), v += "".concat(fe, ":").concat(se, ";");
          };
          var be, me = (be = Y == null ? void 0 : Y.value) !== null && be !== void 0 ? be : Y;
          ze(Y) === "object" && Y !== null && Y !== void 0 && Y[Bu] && Array.isArray(me) ? me.forEach(function(ye) {
            ve(_, ye);
          }) : ve(_, me);
        }
      });
    }
  }), s ? f && (v && (v = "@layer ".concat(f.name, " {").concat(v, "}")), f.dependencies && (y["@layer ".concat(f.name)] = f.dependencies.map(function(M) {
    return "@layer ".concat(M, ", ").concat(f.name, ";");
  }).join(`
`))) : v = "{".concat(v, "}"), [v, y];
};
function Fu(n, r) {
  return Ir("".concat(n.join("%")).concat(r));
}
function ox() {
  return null;
}
var zu = "style";
function Ss(n, r) {
  var e = n.token, i = n.path, s = n.hashId, a = n.layer, c = n.nonce, u = n.clientOnly, f = n.order, d = f === void 0 ? 0 : f, m = P.useContext(Vr), x = m.autoClear, h = m.mock, w = m.defaultCache, S = m.hashPriority, v = m.container, y = m.ssrInline, A = m.transformers, T = m.linters, g = m.cache, M = m.layer, C = e._tokenKey, B = [C];
  M && B.push("layer"), B.push.apply(B, cn(i));
  var _ = gs;
  process.env.NODE_ENV !== "production" && h !== void 0 && (_ = h === "client");
  var Y = ya(
    zu,
    B,
    // Create cache if needed
    function() {
      var te = B.join("|");
      if (ex(te)) {
        var le = tx(te), ie = Oe(le, 2), be = ie[0], me = ie[1];
        if (be)
          return [be, C, me, {}, u, d];
      }
      var ve = r(), ye = rx(ve, {
        hashId: s,
        hashPriority: S,
        layer: M ? a : void 0,
        path: i.join("-"),
        transformers: A,
        linters: T
      }), xe = Oe(ye, 2), fe = xe[0], se = xe[1], ge = Co(fe), Pe = Fu(B, ge);
      return [ge, C, Pe, se, u, d];
    },
    // Remove cache if no need
    function(te, le) {
      var ie = Oe(te, 3), be = ie[2];
      (le || x) && gs && Eu(be, {
        mark: Ht
      });
    },
    // Effect: Inject style here
    function(te) {
      var le = Oe(te, 4), ie = le[0];
      le[1];
      var be = le[2], me = le[3];
      if (_ && ie !== Mu) {
        var ve = {
          mark: Ht,
          prepend: M ? !1 : "queue",
          attachTo: v,
          priority: d
        }, ye = typeof c == "function" ? c() : c;
        ye && (ve.csp = {
          nonce: ye
        });
        var xe = [], fe = [];
        Object.keys(me).forEach(function(ge) {
          ge.startsWith("@layer") ? xe.push(ge) : fe.push(ge);
        }), xe.forEach(function(ge) {
          Ln(Co(me[ge]), "_layer-".concat(ge), oe(oe({}, ve), {}, {
            prepend: !0
          }));
        });
        var se = Ln(ie, be, ve);
        se[vn] = g.instanceId, se.setAttribute(nr, C), process.env.NODE_ENV !== "production" && se.setAttribute(sp, B.join("|")), fe.forEach(function(ge) {
          Ln(Co(me[ge]), "_effect-".concat(ge), ve);
        });
      }
    }
  ), ne = Oe(Y, 3), ue = ne[0], Ee = ne[1], he = ne[2];
  return function(te) {
    var le;
    if (!y || _ || !w)
      le = /* @__PURE__ */ P.createElement(ox, null);
    else {
      var ie;
      le = /* @__PURE__ */ P.createElement("style", tn({}, (ie = {}, ce(ie, nr, Ee), ce(ie, Ht, he), ie), {
        dangerouslySetInnerHTML: {
          __html: ue
        }
      }));
    }
    return /* @__PURE__ */ P.createElement(P.Fragment, null, le, te);
  };
}
var ix = function(r, e, i) {
  var s = Oe(r, 6), a = s[0], c = s[1], u = s[2], f = s[3], d = s[4], m = s[5], x = i || {}, h = x.plain;
  if (d)
    return null;
  var w = a, S = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(m)
  };
  return w = Bo(a, c, u, S, h), f && Object.keys(f).forEach(function(v) {
    if (!e[v]) {
      e[v] = !0;
      var y = Co(f[v]), A = Bo(y, c, "_effect-".concat(v), S, h);
      v.startsWith("@layer") ? w = A + w : w += A;
    }
  }), [m, u, w];
}, Vu = "cssVar", sx = function(r, e) {
  var i = r.key, s = r.prefix, a = r.unitless, c = r.ignore, u = r.token, f = r.scope, d = f === void 0 ? "" : f, m = Sn(Vr), x = m.cache.instanceId, h = m.container, w = u._tokenKey, S = [].concat(cn(r.path), [i, d, w]), v = ya(Vu, S, function() {
    var y = e(), A = Tu(y, i, {
      prefix: s,
      unitless: a,
      ignore: c,
      scope: d
    }), T = Oe(A, 2), g = T[0], M = T[1], C = Fu(S, M);
    return [g, M, C, i];
  }, function(y) {
    var A = Oe(y, 3), T = A[2];
    gs && Eu(T, {
      mark: Ht
    });
  }, function(y) {
    var A = Oe(y, 3), T = A[1], g = A[2];
    if (T) {
      var M = Ln(T, g, {
        mark: Ht,
        prepend: "queue",
        attachTo: h,
        priority: -999
      });
      M[vn] = x, M.setAttribute(nr, i);
    }
  });
  return v;
}, ax = function(r, e, i) {
  var s = Oe(r, 4), a = s[1], c = s[2], u = s[3], f = i || {}, d = f.plain;
  if (!a)
    return null;
  var m = -999, x = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(m)
  }, h = Bo(a, u, c, x, d);
  return [m, c, h];
}, br;
br = {}, ce(br, zu, ix), ce(br, Ou, _p), ce(br, Vu, ax);
var Hu = /* @__PURE__ */ function() {
  function n(r, e) {
    qt(this, n), ce(this, "name", void 0), ce(this, "style", void 0), ce(this, "_keyframe", !0), this.name = r, this.style = e;
  }
  return $t(n, [{
    key: "getName",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return e ? "".concat(e, "-").concat(this.name) : this.name;
    }
  }]), n;
}();
function Wn(n) {
  return n.notSplit = !0, n;
}
Wn(["borderTop", "borderBottom"]), Wn(["borderTop"]), Wn(["borderBottom"]), Wn(["borderLeft", "borderRight"]), Wn(["borderLeft"]), Wn(["borderRight"]);
var wa = /* @__PURE__ */ na({});
function cx(n) {
  return vu(n) || pu(n) || ma(n) || yu();
}
function ws(n, r) {
  for (var e = n, i = 0; i < r.length; i += 1) {
    if (e == null)
      return;
    e = e[r[i]];
  }
  return e;
}
function Uu(n, r, e, i) {
  if (!r.length)
    return e;
  var s = cx(r), a = s[0], c = s.slice(1), u;
  return !n && typeof a == "number" ? u = [] : Array.isArray(n) ? u = cn(n) : u = oe({}, n), i && e === void 0 && c.length === 1 ? delete u[a][c[0]] : u[a] = Uu(u[a], c, e, i), u;
}
function zi(n, r, e) {
  var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return r.length && i && e === void 0 && !ws(n, r.slice(0, -1)) ? n : Uu(n, r, e, i);
}
function lx(n) {
  return ze(n) === "object" && n !== null && Object.getPrototypeOf(n) === Object.prototype;
}
function Tc(n) {
  return Array.isArray(n) ? [] : {};
}
var ux = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function fx() {
  for (var n = arguments.length, r = new Array(n), e = 0; e < n; e++)
    r[e] = arguments[e];
  var i = Tc(r[0]);
  return r.forEach(function(s) {
    function a(c, u) {
      var f = new Set(u), d = ws(s, c), m = Array.isArray(d);
      if (m || lx(d)) {
        if (!f.has(d)) {
          f.add(d);
          var x = ws(i, c);
          m ? i = zi(i, c, []) : (!x || ze(x) !== "object") && (i = zi(i, c, Tc(d))), ux(d).forEach(function(h) {
            a([].concat(cn(c), [h]), f);
          });
        }
      } else
        i = zi(i, c, d);
    }
    a([]);
  }), i;
}
function Wu() {
}
let on = null;
function dx() {
  on = null, au();
}
let Ea = Wu;
process.env.NODE_ENV !== "production" && (Ea = (n, r, e) => {
  En(n, `[antd: ${r}] ${e}`), process.env.NODE_ENV === "test" && dx();
});
const qu = /* @__PURE__ */ P.createContext({}), fr = process.env.NODE_ENV !== "production" ? (n) => {
  const {
    strict: r
  } = P.useContext(qu), e = (i, s, a) => {
    if (!i)
      if (r === !1 && s === "deprecated") {
        const c = on;
        on || (on = {}), on[n] = on[n] || [], on[n].includes(a || "") || on[n].push(a || ""), c || console.warn("[antd] There exists deprecated usage in your code:", on);
      } else
        process.env.NODE_ENV !== "production" && Ea(i, n, a);
  };
  return e.deprecated = (i, s, a, c) => {
    e(i, "deprecated", `\`${s}\` is deprecated. Please use \`${a}\` instead.${c ? ` ${c}` : ""}`);
  }, e;
} : () => {
  const n = () => {
  };
  return n.deprecated = Wu, n;
}, xi = Ea, hx = /* @__PURE__ */ na(void 0), kt = "${label} is not a valid ${type}", mi = {
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: kt,
        method: kt,
        array: kt,
        object: kt,
        number: kt,
        date: kt,
        boolean: kt,
        integer: kt,
        float: kt,
        regexp: kt,
        email: kt,
        url: kt,
        hex: kt
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  }
};
Object.assign({}, mi.Modal);
let To = [];
const Ac = () => To.reduce((n, r) => Object.assign(Object.assign({}, n), r), mi.Modal);
function px(n) {
  if (n) {
    const r = Object.assign({}, n);
    return To.push(r), Ac(), () => {
      To = To.filter((e) => e !== r), Ac();
    };
  }
  Object.assign({}, mi.Modal);
}
const $u = /* @__PURE__ */ na(void 0), Xu = "internalMark", Yu = (n) => {
  const {
    locale: r = {},
    children: e,
    _ANT_MARK__: i
  } = n;
  if (process.env.NODE_ENV !== "production") {
    const a = fr("LocaleProvider");
    process.env.NODE_ENV !== "production" && a(i === Xu, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  P.useEffect(() => px(r == null ? void 0 : r.Modal), [r]);
  const s = P.useMemo(() => Object.assign(Object.assign({}, r), {
    exist: !0
  }), [r]);
  return /* @__PURE__ */ P.createElement($u.Provider, {
    value: s
  }, e);
};
process.env.NODE_ENV !== "production" && (Yu.displayName = "LocaleProvider");
const Gu = {
  blue: "#1677FF",
  purple: "#722ED1",
  cyan: "#13C2C2",
  green: "#52C41A",
  magenta: "#EB2F96",
  /**
   * @deprecated Use magenta instead
   */
  pink: "#EB2F96",
  red: "#F5222D",
  orange: "#FA8C16",
  yellow: "#FADB14",
  volcano: "#FA541C",
  geekblue: "#2F54EB",
  gold: "#FAAD14",
  lime: "#A0D911"
}, jr = Object.assign(Object.assign({}, Gu), {
  // Color
  colorPrimary: "#1677ff",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorError: "#ff4d4f",
  colorInfo: "#1677ff",
  colorLink: "",
  colorTextBase: "",
  colorBgBase: "",
  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontFamilyCode: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
  fontSize: 14,
  // Line
  lineWidth: 1,
  lineType: "solid",
  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
  motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
  motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
  motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
  motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  // Radius
  borderRadius: 6,
  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  // Control Base
  controlHeight: 32,
  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1e3,
  // Image
  opacityImage: 1,
  // Wireframe
  wireframe: !1,
  // Motion
  motion: !0
}), lt = Math.round;
function Vi(n, r) {
  const e = n.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], i = e.map((s) => parseFloat(s));
  for (let s = 0; s < 3; s += 1)
    i[s] = r(i[s] || 0, e[s] || "", s);
  return e[3] ? i[3] = e[3].includes("%") ? i[3] / 100 : i[3] : i[3] = 1, i;
}
const Oc = (n, r, e) => e === 0 ? n : n / 100;
function Sr(n, r) {
  const e = r || 255;
  return n > e ? e : n < 0 ? 0 : n;
}
class Je {
  constructor(r) {
    ce(this, "isValid", !0), ce(this, "r", 0), ce(this, "g", 0), ce(this, "b", 0), ce(this, "a", 1), ce(this, "_h", void 0), ce(this, "_s", void 0), ce(this, "_l", void 0), ce(this, "_v", void 0), ce(this, "_max", void 0), ce(this, "_min", void 0), ce(this, "_brightness", void 0);
    function e(i) {
      return i[0] in r && i[1] in r && i[2] in r;
    }
    if (r) if (typeof r == "string") {
      let s = function(a) {
        return i.startsWith(a);
      };
      const i = r.trim();
      /^#?[A-F\d]{3,8}$/i.test(i) ? this.fromHexString(i) : s("rgb") ? this.fromRgbString(i) : s("hsl") ? this.fromHslString(i) : (s("hsv") || s("hsb")) && this.fromHsvString(i);
    } else if (r instanceof Je)
      this.r = r.r, this.g = r.g, this.b = r.b, this.a = r.a, this._h = r._h, this._s = r._s, this._l = r._l, this._v = r._v;
    else if (e("rgb"))
      this.r = Sr(r.r), this.g = Sr(r.g), this.b = Sr(r.b), this.a = typeof r.a == "number" ? Sr(r.a, 1) : 1;
    else if (e("hsl"))
      this.fromHsl(r);
    else if (e("hsv"))
      this.fromHsv(r);
    else
      throw new Error("@ant-design/fast-color: unsupported input " + JSON.stringify(r));
  }
  // ======================= Setter =======================
  setR(r) {
    return this._sc("r", r);
  }
  setG(r) {
    return this._sc("g", r);
  }
  setB(r) {
    return this._sc("b", r);
  }
  setA(r) {
    return this._sc("a", r, 1);
  }
  setHue(r) {
    const e = this.toHsv();
    return e.h = r, this._c(e);
  }
  // ======================= Getter =======================
  /**
   * Returns the perceived luminance of a color, from 0-1.
   * @see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
   */
  getLuminance() {
    function r(a) {
      const c = a / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    }
    const e = r(this.r), i = r(this.g), s = r(this.b);
    return 0.2126 * e + 0.7152 * i + 0.0722 * s;
  }
  getHue() {
    if (typeof this._h > "u") {
      const r = this.getMax() - this.getMin();
      r === 0 ? this._h = 0 : this._h = lt(60 * (this.r === this.getMax() ? (this.g - this.b) / r + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / r + 2 : (this.r - this.g) / r + 4));
    }
    return this._h;
  }
  getSaturation() {
    if (typeof this._s > "u") {
      const r = this.getMax() - this.getMin();
      r === 0 ? this._s = 0 : this._s = r / this.getMax();
    }
    return this._s;
  }
  getLightness() {
    return typeof this._l > "u" && (this._l = (this.getMax() + this.getMin()) / 510), this._l;
  }
  getValue() {
    return typeof this._v > "u" && (this._v = this.getMax() / 255), this._v;
  }
  /**
   * Returns the perceived brightness of the color, from 0-255.
   * Note: this is not the b of HSB
   * @see http://www.w3.org/TR/AERT#color-contrast
   */
  getBrightness() {
    return typeof this._brightness > "u" && (this._brightness = (this.r * 299 + this.g * 587 + this.b * 114) / 1e3), this._brightness;
  }
  // ======================== Func ========================
  darken(r = 10) {
    const e = this.getHue(), i = this.getSaturation();
    let s = this.getLightness() - r / 100;
    return s < 0 && (s = 0), this._c({
      h: e,
      s: i,
      l: s,
      a: this.a
    });
  }
  lighten(r = 10) {
    const e = this.getHue(), i = this.getSaturation();
    let s = this.getLightness() + r / 100;
    return s > 1 && (s = 1), this._c({
      h: e,
      s: i,
      l: s,
      a: this.a
    });
  }
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  mix(r, e = 50) {
    const i = this._c(r), s = e / 100, a = (u) => (i[u] - this[u]) * s + this[u], c = {
      r: lt(a("r")),
      g: lt(a("g")),
      b: lt(a("b")),
      a: lt(a("a") * 100) / 100
    };
    return this._c(c);
  }
  /**
   * Mix the color with pure white, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return white.
   */
  tint(r = 10) {
    return this.mix({
      r: 255,
      g: 255,
      b: 255,
      a: 1
    }, r);
  }
  /**
   * Mix the color with pure black, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return black.
   */
  shade(r = 10) {
    return this.mix({
      r: 0,
      g: 0,
      b: 0,
      a: 1
    }, r);
  }
  onBackground(r) {
    const e = this._c(r), i = this.a + e.a * (1 - this.a), s = (a) => lt((this[a] * this.a + e[a] * e.a * (1 - this.a)) / i);
    return this._c({
      r: s("r"),
      g: s("g"),
      b: s("b"),
      a: i
    });
  }
  // ======================= Status =======================
  isDark() {
    return this.getBrightness() < 128;
  }
  isLight() {
    return this.getBrightness() >= 128;
  }
  // ======================== MISC ========================
  equals(r) {
    return this.r === r.r && this.g === r.g && this.b === r.b && this.a === r.a;
  }
  clone() {
    return this._c(this);
  }
  // ======================= Format =======================
  toHexString() {
    let r = "#";
    const e = (this.r || 0).toString(16);
    r += e.length === 2 ? e : "0" + e;
    const i = (this.g || 0).toString(16);
    r += i.length === 2 ? i : "0" + i;
    const s = (this.b || 0).toString(16);
    if (r += s.length === 2 ? s : "0" + s, typeof this.a == "number" && this.a >= 0 && this.a < 1) {
      const a = lt(this.a * 255).toString(16);
      r += a.length === 2 ? a : "0" + a;
    }
    return r;
  }
  /** CSS support color pattern */
  toHsl() {
    return {
      h: this.getHue(),
      s: this.getSaturation(),
      l: this.getLightness(),
      a: this.a
    };
  }
  /** CSS support color pattern */
  toHslString() {
    const r = this.getHue(), e = lt(this.getSaturation() * 100), i = lt(this.getLightness() * 100);
    return this.a !== 1 ? `hsla(${r},${e}%,${i}%,${this.a})` : `hsl(${r},${e}%,${i}%)`;
  }
  /** Same as toHsb */
  toHsv() {
    return {
      h: this.getHue(),
      s: this.getSaturation(),
      v: this.getValue(),
      a: this.a
    };
  }
  toRgb() {
    return {
      r: this.r,
      g: this.g,
      b: this.b,
      a: this.a
    };
  }
  toRgbString() {
    return this.a !== 1 ? `rgba(${this.r},${this.g},${this.b},${this.a})` : `rgb(${this.r},${this.g},${this.b})`;
  }
  toString() {
    return this.toRgbString();
  }
  // ====================== Privates ======================
  /** Return a new FastColor object with one channel changed */
  _sc(r, e, i) {
    const s = this.clone();
    return s[r] = Sr(e, i), s;
  }
  _c(r) {
    return new this.constructor(r);
  }
  getMax() {
    return typeof this._max > "u" && (this._max = Math.max(this.r, this.g, this.b)), this._max;
  }
  getMin() {
    return typeof this._min > "u" && (this._min = Math.min(this.r, this.g, this.b)), this._min;
  }
  fromHexString(r) {
    const e = r.replace("#", "");
    function i(s, a) {
      return parseInt(e[s] + e[a || s], 16);
    }
    e.length < 6 ? (this.r = i(0), this.g = i(1), this.b = i(2), this.a = e[3] ? i(3) / 255 : 1) : (this.r = i(0, 1), this.g = i(2, 3), this.b = i(4, 5), this.a = e[6] ? i(6, 7) / 255 : 1);
  }
  fromHsl({
    h: r,
    s: e,
    l: i,
    a: s
  }) {
    if (this._h = r % 360, this._s = e, this._l = i, this.a = typeof s == "number" ? s : 1, e <= 0) {
      const h = lt(i * 255);
      this.r = h, this.g = h, this.b = h;
    }
    let a = 0, c = 0, u = 0;
    const f = r / 60, d = (1 - Math.abs(2 * i - 1)) * e, m = d * (1 - Math.abs(f % 2 - 1));
    f >= 0 && f < 1 ? (a = d, c = m) : f >= 1 && f < 2 ? (a = m, c = d) : f >= 2 && f < 3 ? (c = d, u = m) : f >= 3 && f < 4 ? (c = m, u = d) : f >= 4 && f < 5 ? (a = m, u = d) : f >= 5 && f < 6 && (a = d, u = m);
    const x = i - d / 2;
    this.r = lt((a + x) * 255), this.g = lt((c + x) * 255), this.b = lt((u + x) * 255);
  }
  fromHsv({
    h: r,
    s: e,
    v: i,
    a: s
  }) {
    this._h = r % 360, this._s = e, this._v = i, this.a = typeof s == "number" ? s : 1;
    const a = lt(i * 255);
    if (this.r = a, this.g = a, this.b = a, e <= 0)
      return;
    const c = r / 60, u = Math.floor(c), f = c - u, d = lt(i * (1 - e) * 255), m = lt(i * (1 - e * f) * 255), x = lt(i * (1 - e * (1 - f)) * 255);
    switch (u) {
      case 0:
        this.g = x, this.b = d;
        break;
      case 1:
        this.r = m, this.b = d;
        break;
      case 2:
        this.r = d, this.b = x;
        break;
      case 3:
        this.r = d, this.g = m;
        break;
      case 4:
        this.r = x, this.g = d;
        break;
      case 5:
      default:
        this.g = d, this.b = m;
        break;
    }
  }
  fromHsvString(r) {
    const e = Vi(r, Oc);
    this.fromHsv({
      h: e[0],
      s: e[1],
      v: e[2],
      a: e[3]
    });
  }
  fromHslString(r) {
    const e = Vi(r, Oc);
    this.fromHsl({
      h: e[0],
      s: e[1],
      l: e[2],
      a: e[3]
    });
  }
  fromRgbString(r) {
    const e = Vi(r, (i, s) => (
      // Convert percentage to number. e.g. 50% -> 128
      s.includes("%") ? lt(i / 100 * 255) : i
    ));
    this.r = e[0], this.g = e[1], this.b = e[2], this.a = e[3];
  }
}
var no = 2, Rc = 0.16, xx = 0.05, mx = 0.05, gx = 0.15, Ku = 5, Zu = 4, vx = [{
  index: 7,
  amount: 15
}, {
  index: 6,
  amount: 25
}, {
  index: 5,
  amount: 30
}, {
  index: 5,
  amount: 45
}, {
  index: 5,
  amount: 65
}, {
  index: 5,
  amount: 85
}, {
  index: 4,
  amount: 90
}, {
  index: 3,
  amount: 95
}, {
  index: 2,
  amount: 97
}, {
  index: 1,
  amount: 98
}];
function Pc(n, r, e) {
  var i;
  return Math.round(n.h) >= 60 && Math.round(n.h) <= 240 ? i = e ? Math.round(n.h) - no * r : Math.round(n.h) + no * r : i = e ? Math.round(n.h) + no * r : Math.round(n.h) - no * r, i < 0 ? i += 360 : i >= 360 && (i -= 360), i;
}
function kc(n, r, e) {
  if (n.h === 0 && n.s === 0)
    return n.s;
  var i;
  return e ? i = n.s - Rc * r : r === Zu ? i = n.s + Rc : i = n.s + xx * r, i > 1 && (i = 1), e && r === Ku && i > 0.1 && (i = 0.1), i < 0.06 && (i = 0.06), Math.round(i * 100) / 100;
}
function Ic(n, r, e) {
  var i;
  return e ? i = n.v + mx * r : i = n.v - gx * r, i = Math.max(0, Math.min(1, i)), Math.round(i * 100) / 100;
}
function Mr(n) {
  for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = [], i = new Je(n), s = i.toHsv(), a = Ku; a > 0; a -= 1) {
    var c = new Je({
      h: Pc(s, a, !0),
      s: kc(s, a, !0),
      v: Ic(s, a, !0)
    });
    e.push(c);
  }
  e.push(i);
  for (var u = 1; u <= Zu; u += 1) {
    var f = new Je({
      h: Pc(s, u),
      s: kc(s, u),
      v: Ic(s, u)
    });
    e.push(f);
  }
  return r.theme === "dark" ? vx.map(function(d) {
    var m = d.index, x = d.amount;
    return new Je(r.backgroundColor || "#141414").mix(e[m], x).toHexString();
  }) : e.map(function(d) {
    return d.toHexString();
  });
}
var Hi = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1677FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
}, Es = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
Es.primary = Es[5];
var Cs = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
Cs.primary = Cs[5];
var Ts = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
Ts.primary = Ts[5];
var As = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
As.primary = As[5];
var Os = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
Os.primary = Os[5];
var Rs = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
Rs.primary = Rs[5];
var Ps = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
Ps.primary = Ps[5];
var ks = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
ks.primary = ks[5];
var Fo = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
Fo.primary = Fo[5];
var Is = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
Is.primary = Is[5];
var _s = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
_s.primary = _s[5];
var Ns = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
Ns.primary = Ns[5];
var js = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
js.primary = js[5];
var Ui = {
  red: Es,
  volcano: Cs,
  orange: Ts,
  gold: As,
  yellow: Os,
  lime: Rs,
  green: Ps,
  cyan: ks,
  blue: Fo,
  geekblue: Is,
  purple: _s,
  magenta: Ns,
  grey: js
};
function yx(n, r) {
  let {
    generateColorPalettes: e,
    generateNeutralColorPalettes: i
  } = r;
  const {
    colorSuccess: s,
    colorWarning: a,
    colorError: c,
    colorInfo: u,
    colorPrimary: f,
    colorBgBase: d,
    colorTextBase: m
  } = n, x = e(f), h = e(s), w = e(a), S = e(c), v = e(u), y = i(d, m), A = n.colorLink || n.colorInfo, T = e(A), g = new Je(S[1]).mix(new Je(S[3]), 50).toHexString();
  return Object.assign(Object.assign({}, y), {
    colorPrimaryBg: x[1],
    colorPrimaryBgHover: x[2],
    colorPrimaryBorder: x[3],
    colorPrimaryBorderHover: x[4],
    colorPrimaryHover: x[5],
    colorPrimary: x[6],
    colorPrimaryActive: x[7],
    colorPrimaryTextHover: x[8],
    colorPrimaryText: x[9],
    colorPrimaryTextActive: x[10],
    colorSuccessBg: h[1],
    colorSuccessBgHover: h[2],
    colorSuccessBorder: h[3],
    colorSuccessBorderHover: h[4],
    colorSuccessHover: h[4],
    colorSuccess: h[6],
    colorSuccessActive: h[7],
    colorSuccessTextHover: h[8],
    colorSuccessText: h[9],
    colorSuccessTextActive: h[10],
    colorErrorBg: S[1],
    colorErrorBgHover: S[2],
    colorErrorBgFilledHover: g,
    colorErrorBgActive: S[3],
    colorErrorBorder: S[3],
    colorErrorBorderHover: S[4],
    colorErrorHover: S[5],
    colorError: S[6],
    colorErrorActive: S[7],
    colorErrorTextHover: S[8],
    colorErrorText: S[9],
    colorErrorTextActive: S[10],
    colorWarningBg: w[1],
    colorWarningBgHover: w[2],
    colorWarningBorder: w[3],
    colorWarningBorderHover: w[4],
    colorWarningHover: w[4],
    colorWarning: w[6],
    colorWarningActive: w[7],
    colorWarningTextHover: w[8],
    colorWarningText: w[9],
    colorWarningTextActive: w[10],
    colorInfoBg: v[1],
    colorInfoBgHover: v[2],
    colorInfoBorder: v[3],
    colorInfoBorderHover: v[4],
    colorInfoHover: v[4],
    colorInfo: v[6],
    colorInfoActive: v[7],
    colorInfoTextHover: v[8],
    colorInfoText: v[9],
    colorInfoTextActive: v[10],
    colorLinkHover: T[4],
    colorLink: T[6],
    colorLinkActive: T[7],
    colorBgMask: new Je("#000").setA(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const bx = (n) => {
  let r = n, e = n, i = n, s = n;
  return n < 6 && n >= 5 ? r = n + 1 : n < 16 && n >= 6 ? r = n + 2 : n >= 16 && (r = 16), n < 7 && n >= 5 ? e = 4 : n < 8 && n >= 7 ? e = 5 : n < 14 && n >= 8 ? e = 6 : n < 16 && n >= 14 ? e = 7 : n >= 16 && (e = 8), n < 6 && n >= 2 ? i = 1 : n >= 6 && (i = 2), n > 4 && n < 8 ? s = 4 : n >= 8 && (s = 6), {
    borderRadius: n,
    borderRadiusXS: i,
    borderRadiusSM: e,
    borderRadiusLG: r,
    borderRadiusOuter: s
  };
};
function Sx(n) {
  const {
    motionUnit: r,
    motionBase: e,
    borderRadius: i,
    lineWidth: s
  } = n;
  return Object.assign({
    // motion
    motionDurationFast: `${(e + r).toFixed(1)}s`,
    motionDurationMid: `${(e + r * 2).toFixed(1)}s`,
    motionDurationSlow: `${(e + r * 3).toFixed(1)}s`,
    // line
    lineWidthBold: s + 1
  }, bx(i));
}
const wx = (n) => {
  const {
    controlHeight: r
  } = n;
  return {
    controlHeightSM: r * 0.75,
    controlHeightXS: r * 0.5,
    controlHeightLG: r * 1.25
  };
};
function Ex(n) {
  return (n + 8) / n;
}
function Cx(n) {
  const r = Array.from({
    length: 10
  }).map((e, i) => {
    const s = i - 1, a = n * Math.pow(Math.E, s / 5), c = i > 1 ? Math.floor(a) : Math.ceil(a);
    return Math.floor(c / 2) * 2;
  });
  return r[1] = n, r.map((e) => ({
    size: e,
    lineHeight: Ex(e)
  }));
}
const Tx = (n) => {
  const r = Cx(n), e = r.map((m) => m.size), i = r.map((m) => m.lineHeight), s = e[1], a = e[0], c = e[2], u = i[1], f = i[0], d = i[2];
  return {
    fontSizeSM: a,
    fontSize: s,
    fontSizeLG: c,
    fontSizeXL: e[3],
    fontSizeHeading1: e[6],
    fontSizeHeading2: e[5],
    fontSizeHeading3: e[4],
    fontSizeHeading4: e[3],
    fontSizeHeading5: e[2],
    lineHeight: u,
    lineHeightLG: d,
    lineHeightSM: f,
    fontHeight: Math.round(u * s),
    fontHeightLG: Math.round(d * c),
    fontHeightSM: Math.round(f * a),
    lineHeightHeading1: i[6],
    lineHeightHeading2: i[5],
    lineHeightHeading3: i[4],
    lineHeightHeading4: i[3],
    lineHeightHeading5: i[2]
  };
};
function Ax(n) {
  const {
    sizeUnit: r,
    sizeStep: e
  } = n;
  return {
    sizeXXL: r * (e + 8),
    // 48
    sizeXL: r * (e + 4),
    // 32
    sizeLG: r * (e + 2),
    // 24
    sizeMD: r * (e + 1),
    // 20
    sizeMS: r * e,
    // 16
    size: r * e,
    // 16
    sizeSM: r * (e - 1),
    // 12
    sizeXS: r * (e - 2),
    // 8
    sizeXXS: r * (e - 3)
    // 4
  };
}
const Mt = (n, r) => new Je(n).setA(r).toRgbString(), wr = (n, r) => new Je(n).darken(r).toHexString(), Ox = (n) => {
  const r = Mr(n);
  return {
    1: r[0],
    2: r[1],
    3: r[2],
    4: r[3],
    5: r[4],
    6: r[5],
    7: r[6],
    8: r[4],
    9: r[5],
    10: r[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
}, Rx = (n, r) => {
  const e = n || "#fff", i = r || "#000";
  return {
    colorBgBase: e,
    colorTextBase: i,
    colorText: Mt(i, 0.88),
    colorTextSecondary: Mt(i, 0.65),
    colorTextTertiary: Mt(i, 0.45),
    colorTextQuaternary: Mt(i, 0.25),
    colorFill: Mt(i, 0.15),
    colorFillSecondary: Mt(i, 0.06),
    colorFillTertiary: Mt(i, 0.04),
    colorFillQuaternary: Mt(i, 0.02),
    colorBgSolid: Mt(i, 1),
    colorBgSolidHover: Mt(i, 0.75),
    colorBgSolidActive: Mt(i, 0.95),
    colorBgLayout: wr(e, 4),
    colorBgContainer: wr(e, 0),
    colorBgElevated: wr(e, 0),
    colorBgSpotlight: Mt(i, 0.85),
    colorBgBlur: "transparent",
    colorBorder: wr(e, 15),
    colorBorderSecondary: wr(e, 6)
  };
};
function Px(n) {
  Hi.pink = Hi.magenta, Ui.pink = Ui.magenta;
  const r = Object.keys(Gu).map((e) => {
    const i = n[e] === Hi[e] ? Ui[e] : Mr(n[e]);
    return Array.from({
      length: 10
    }, () => 1).reduce((s, a, c) => (s[`${e}-${c + 1}`] = i[c], s[`${e}${c + 1}`] = i[c], s), {});
  }).reduce((e, i) => (e = Object.assign(Object.assign({}, e), i), e), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, n), r), yx(n, {
    generateColorPalettes: Ox,
    generateNeutralColorPalettes: Rx
  })), Tx(n.fontSize)), Ax(n)), wx(n)), Sx(n));
}
const Qu = ms(Px), Ms = {
  token: jr,
  override: {
    override: jr
  },
  hashed: !0
}, Ju = /* @__PURE__ */ et.createContext(Ms), Ls = "ant", Ca = "anticon", kx = (n, r) => r || (n ? `${Ls}-${n}` : Ls), wn = /* @__PURE__ */ P.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: kx,
  iconPrefixCls: Ca
}), {
  Consumer: Uv
} = wn, _c = {};
function ef(n) {
  const r = P.useContext(wn), {
    getPrefixCls: e,
    direction: i,
    getPopupContainer: s
  } = r, a = r[n];
  return Object.assign(Object.assign({
    classNames: _c,
    styles: _c
  }, a), {
    getPrefixCls: e,
    direction: i,
    getPopupContainer: s
  });
}
const Ix = `-ant-${Date.now()}-${Math.random()}`;
function _x(n, r) {
  const e = {}, i = (c, u) => {
    let f = c.clone();
    return f = (u == null ? void 0 : u(f)) || f, f.toRgbString();
  }, s = (c, u) => {
    const f = new Je(c), d = Mr(f.toRgbString());
    e[`${u}-color`] = i(f), e[`${u}-color-disabled`] = d[1], e[`${u}-color-hover`] = d[4], e[`${u}-color-active`] = d[6], e[`${u}-color-outline`] = f.clone().setA(0.2).toRgbString(), e[`${u}-color-deprecated-bg`] = d[0], e[`${u}-color-deprecated-border`] = d[2];
  };
  if (r.primaryColor) {
    s(r.primaryColor, "primary");
    const c = new Je(r.primaryColor), u = Mr(c.toRgbString());
    u.forEach((d, m) => {
      e[`primary-${m + 1}`] = d;
    }), e["primary-color-deprecated-l-35"] = i(c, (d) => d.lighten(35)), e["primary-color-deprecated-l-20"] = i(c, (d) => d.lighten(20)), e["primary-color-deprecated-t-20"] = i(c, (d) => d.tint(20)), e["primary-color-deprecated-t-50"] = i(c, (d) => d.tint(50)), e["primary-color-deprecated-f-12"] = i(c, (d) => d.setA(d.a * 0.12));
    const f = new Je(u[0]);
    e["primary-color-active-deprecated-f-30"] = i(f, (d) => d.setA(d.a * 0.3)), e["primary-color-active-deprecated-d-02"] = i(f, (d) => d.darken(2));
  }
  return r.successColor && s(r.successColor, "success"), r.warningColor && s(r.warningColor, "warning"), r.errorColor && s(r.errorColor, "error"), r.infoColor && s(r.infoColor, "info"), `
  :root {
    ${Object.keys(e).map((c) => `--${n}-${c}: ${e[c]};`).join(`
`)}
  }
  `.trim();
}
function Nx(n, r) {
  const e = _x(n, r);
  ln() ? Ln(e, `${Ix}-dynamic-theme`) : process.env.NODE_ENV !== "production" && xi(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const Ds = /* @__PURE__ */ P.createContext(!1), jx = (n) => {
  let {
    children: r,
    disabled: e
  } = n;
  const i = P.useContext(Ds);
  return /* @__PURE__ */ P.createElement(Ds.Provider, {
    value: e ?? i
  }, r);
}, Lr = /* @__PURE__ */ P.createContext(void 0), Mx = (n) => {
  let {
    children: r,
    size: e
  } = n;
  const i = P.useContext(Lr);
  return /* @__PURE__ */ P.createElement(Lr.Provider, {
    value: e || i
  }, r);
};
function Lx() {
  const n = Sn(Ds), r = Sn(Lr);
  return {
    componentDisabled: n,
    componentSize: r
  };
}
var tf = /* @__PURE__ */ $t(function n() {
  qt(this, n);
}), nf = "CALC_UNIT", Dx = new RegExp(nf, "g");
function Wi(n) {
  return typeof n == "number" ? "".concat(n).concat(nf) : n;
}
var Bx = /* @__PURE__ */ function(n) {
  zr(e, n);
  var r = ui(e);
  function e(i, s) {
    var a;
    qt(this, e), a = r.call(this), ce(Mn(a), "result", ""), ce(Mn(a), "unitlessCssVar", void 0), ce(Mn(a), "lowPriority", void 0);
    var c = ze(i);
    return a.unitlessCssVar = s, i instanceof e ? a.result = "(".concat(i.result, ")") : c === "number" ? a.result = Wi(i) : c === "string" && (a.result = i), a;
  }
  return $t(e, [{
    key: "add",
    value: function(s) {
      return s instanceof e ? this.result = "".concat(this.result, " + ").concat(s.getResult()) : (typeof s == "number" || typeof s == "string") && (this.result = "".concat(this.result, " + ").concat(Wi(s))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(s) {
      return s instanceof e ? this.result = "".concat(this.result, " - ").concat(s.getResult()) : (typeof s == "number" || typeof s == "string") && (this.result = "".concat(this.result, " - ").concat(Wi(s))), this.lowPriority = !0, this;
    }
  }, {
    key: "mul",
    value: function(s) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), s instanceof e ? this.result = "".concat(this.result, " * ").concat(s.getResult(!0)) : (typeof s == "number" || typeof s == "string") && (this.result = "".concat(this.result, " * ").concat(s)), this.lowPriority = !1, this;
    }
  }, {
    key: "div",
    value: function(s) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), s instanceof e ? this.result = "".concat(this.result, " / ").concat(s.getResult(!0)) : (typeof s == "number" || typeof s == "string") && (this.result = "".concat(this.result, " / ").concat(s)), this.lowPriority = !1, this;
    }
  }, {
    key: "getResult",
    value: function(s) {
      return this.lowPriority || s ? "(".concat(this.result, ")") : this.result;
    }
  }, {
    key: "equal",
    value: function(s) {
      var a = this, c = s || {}, u = c.unit, f = !0;
      return typeof u == "boolean" ? f = u : Array.from(this.unitlessCssVar).some(function(d) {
        return a.result.includes(d);
      }) && (f = !1), this.result = this.result.replace(Dx, f ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), e;
}(tf), Fx = /* @__PURE__ */ function(n) {
  zr(e, n);
  var r = ui(e);
  function e(i) {
    var s;
    return qt(this, e), s = r.call(this), ce(Mn(s), "result", 0), i instanceof e ? s.result = i.result : typeof i == "number" && (s.result = i), s;
  }
  return $t(e, [{
    key: "add",
    value: function(s) {
      return s instanceof e ? this.result += s.result : typeof s == "number" && (this.result += s), this;
    }
  }, {
    key: "sub",
    value: function(s) {
      return s instanceof e ? this.result -= s.result : typeof s == "number" && (this.result -= s), this;
    }
  }, {
    key: "mul",
    value: function(s) {
      return s instanceof e ? this.result *= s.result : typeof s == "number" && (this.result *= s), this;
    }
  }, {
    key: "div",
    value: function(s) {
      return s instanceof e ? this.result /= s.result : typeof s == "number" && (this.result /= s), this;
    }
  }, {
    key: "equal",
    value: function() {
      return this.result;
    }
  }]), e;
}(tf), zx = function(r, e) {
  var i = r === "css" ? Bx : Fx;
  return function(s) {
    return new i(s, e);
  };
}, Nc = function(r, e) {
  return "".concat([e, r.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function Bs(n) {
  var r = P.useRef();
  r.current = n;
  var e = P.useCallback(function() {
    for (var i, s = arguments.length, a = new Array(s), c = 0; c < s; c++)
      a[c] = arguments[c];
    return (i = r.current) === null || i === void 0 ? void 0 : i.call.apply(i, [r].concat(a));
  }, []);
  return e;
}
function Fs(n) {
  var r = P.useRef(!1), e = P.useState(n), i = Oe(e, 2), s = i[0], a = i[1];
  P.useEffect(function() {
    return r.current = !1, function() {
      r.current = !0;
    };
  }, []);
  function c(u, f) {
    f && r.current || a(u);
  }
  return [s, c];
}
function jc(n, r, e, i) {
  var s = oe({}, r[n]);
  if (i != null && i.deprecatedTokens) {
    var a = i.deprecatedTokens;
    a.forEach(function(u) {
      var f = Oe(u, 2), d = f[0], m = f[1];
      if (process.env.NODE_ENV !== "production" && En(!(s != null && s[d]), "Component Token `".concat(String(d), "` of ").concat(String(n), " is deprecated. Please use `").concat(String(m), "` instead.")), s != null && s[d] || s != null && s[m]) {
        var x;
        (x = s[m]) !== null && x !== void 0 || (s[m] = s == null ? void 0 : s[d]);
      }
    });
  }
  var c = oe(oe({}, e), s);
  return Object.keys(c).forEach(function(u) {
    c[u] === r[u] && delete c[u];
  }), c;
}
var rf = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", zs = !0;
function gi() {
  for (var n = arguments.length, r = new Array(n), e = 0; e < n; e++)
    r[e] = arguments[e];
  if (!rf)
    return Object.assign.apply(Object, [{}].concat(r));
  zs = !1;
  var i = {};
  return r.forEach(function(s) {
    if (ze(s) === "object") {
      var a = Object.keys(s);
      a.forEach(function(c) {
        Object.defineProperty(i, c, {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return s[c];
          }
        });
      });
    }
  }), zs = !0, i;
}
var Mc = {};
function Vx() {
}
var Hx = function(r) {
  var e, i = r, s = Vx;
  return rf && typeof Proxy < "u" && (e = /* @__PURE__ */ new Set(), i = new Proxy(r, {
    get: function(c, u) {
      if (zs) {
        var f;
        (f = e) === null || f === void 0 || f.add(u);
      }
      return c[u];
    }
  }), s = function(c, u) {
    var f;
    Mc[c] = {
      global: Array.from(e),
      component: oe(oe({}, (f = Mc[c]) === null || f === void 0 ? void 0 : f.component), u)
    };
  }), {
    token: i,
    keys: e,
    flush: s
  };
};
function Lc(n, r, e) {
  if (typeof e == "function") {
    var i;
    return e(gi(r, (i = r[n]) !== null && i !== void 0 ? i : {}));
  }
  return e ?? {};
}
function Ux(n) {
  return n === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var e = arguments.length, i = new Array(e), s = 0; s < e; s++)
        i[s] = arguments[s];
      return "max(".concat(i.map(function(a) {
        return Do(a);
      }).join(","), ")");
    },
    min: function() {
      for (var e = arguments.length, i = new Array(e), s = 0; s < e; s++)
        i[s] = arguments[s];
      return "min(".concat(i.map(function(a) {
        return Do(a);
      }).join(","), ")");
    }
  };
}
var Wx = 1e3 * 60 * 10, qx = /* @__PURE__ */ function() {
  function n() {
    qt(this, n), ce(this, "map", /* @__PURE__ */ new Map()), ce(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), ce(this, "nextID", 0), ce(this, "lastAccessBeat", /* @__PURE__ */ new Map()), ce(this, "accessBeat", 0);
  }
  return $t(n, [{
    key: "set",
    value: function(e, i) {
      this.clear();
      var s = this.getCompositeKey(e);
      this.map.set(s, i), this.lastAccessBeat.set(s, Date.now());
    }
  }, {
    key: "get",
    value: function(e) {
      var i = this.getCompositeKey(e), s = this.map.get(i);
      return this.lastAccessBeat.set(i, Date.now()), this.accessBeat += 1, s;
    }
  }, {
    key: "getCompositeKey",
    value: function(e) {
      var i = this, s = e.map(function(a) {
        return a && ze(a) === "object" ? "obj_".concat(i.getObjectID(a)) : "".concat(ze(a), "_").concat(a);
      });
      return s.join("|");
    }
  }, {
    key: "getObjectID",
    value: function(e) {
      if (this.objectIDMap.has(e))
        return this.objectIDMap.get(e);
      var i = this.nextID;
      return this.objectIDMap.set(e, i), this.nextID += 1, i;
    }
  }, {
    key: "clear",
    value: function() {
      var e = this;
      if (this.accessBeat > 1e4) {
        var i = Date.now();
        this.lastAccessBeat.forEach(function(s, a) {
          i - s > Wx && (e.map.delete(a), e.lastAccessBeat.delete(a));
        }), this.accessBeat = 0;
      }
    }
  }]), n;
}(), Dc = new qx();
function $x(n, r) {
  return et.useMemo(function() {
    var e = Dc.get(r);
    if (e)
      return e;
    var i = n();
    return Dc.set(r, i), i;
  }, r);
}
var Xx = function() {
  return {};
};
function Yx(n) {
  var r = n.useCSP, e = r === void 0 ? Xx : r, i = n.useToken, s = n.usePrefix, a = n.getResetStyles, c = n.getCommonStyle, u = n.getCompUnitless;
  function f(h, w, S, v) {
    var y = Array.isArray(h) ? h[0] : h;
    function A(Y) {
      return "".concat(String(y)).concat(Y.slice(0, 1).toUpperCase()).concat(Y.slice(1));
    }
    var T = (v == null ? void 0 : v.unitless) || {}, g = typeof u == "function" ? u(h) : {}, M = oe(oe({}, g), {}, ce({}, A("zIndexPopup"), !0));
    Object.keys(T).forEach(function(Y) {
      M[A(Y)] = T[Y];
    });
    var C = oe(oe({}, v), {}, {
      unitless: M,
      prefixToken: A
    }), B = m(h, w, S, C), _ = d(y, S, C);
    return function(Y) {
      var ne = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Y, ue = B(Y, ne), Ee = Oe(ue, 2), he = Ee[1], te = _(ne), le = Oe(te, 2), ie = le[0], be = le[1];
      return [ie, he, be];
    };
  }
  function d(h, w, S) {
    var v = S.unitless, y = S.injectStyle, A = y === void 0 ? !0 : y, T = S.prefixToken, g = S.ignore, M = function(_) {
      var Y = _.rootCls, ne = _.cssVar, ue = ne === void 0 ? {} : ne, Ee = i(), he = Ee.realToken;
      return sx({
        path: [h],
        prefix: ue.prefix,
        key: ue.key,
        unitless: v,
        ignore: g,
        token: he,
        scope: Y
      }, function() {
        var te = Lc(h, he, w), le = jc(h, he, te, {
          deprecatedTokens: S == null ? void 0 : S.deprecatedTokens
        });
        return Object.keys(te).forEach(function(ie) {
          le[T(ie)] = le[ie], delete le[ie];
        }), le;
      }), null;
    }, C = function(_) {
      var Y = i(), ne = Y.cssVar;
      return [function(ue) {
        return A && ne ? /* @__PURE__ */ et.createElement(et.Fragment, null, /* @__PURE__ */ et.createElement(M, {
          rootCls: _,
          cssVar: ne,
          component: h
        }), ue) : ue;
      }, ne == null ? void 0 : ne.key];
    };
    return C;
  }
  function m(h, w, S) {
    var v = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, y = Array.isArray(h) ? h : [h, h], A = Oe(y, 1), T = A[0], g = y.join("-"), M = n.layer || {
      name: "antd"
    };
    return function(C) {
      var B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : C, _ = i(), Y = _.theme, ne = _.realToken, ue = _.hashId, Ee = _.token, he = _.cssVar, te = s(), le = te.rootPrefixCls, ie = te.iconPrefixCls, be = e(), me = he ? "css" : "js", ve = $x(function() {
        var Pe = /* @__PURE__ */ new Set();
        return he && Object.keys(v.unitless || {}).forEach(function(Ce) {
          Pe.add(bo(Ce, he.prefix)), Pe.add(bo(Ce, Nc(T, he.prefix)));
        }), zx(me, Pe);
      }, [me, T, he == null ? void 0 : he.prefix]), ye = Ux(me), xe = ye.max, fe = ye.min, se = {
        theme: Y,
        token: Ee,
        hashId: ue,
        nonce: function() {
          return be.nonce;
        },
        clientOnly: v.clientOnly,
        layer: M,
        // antd is always at top of styles
        order: v.order || -999
      };
      typeof a == "function" && Ss(oe(oe({}, se), {}, {
        clientOnly: !1,
        path: ["Shared", le]
      }), function() {
        return a(Ee, {
          prefix: {
            rootPrefixCls: le,
            iconPrefixCls: ie
          },
          csp: be
        });
      });
      var ge = Ss(oe(oe({}, se), {}, {
        path: [g, C, ie]
      }), function() {
        if (v.injectStyle === !1)
          return [];
        var Pe = Hx(Ee), Ce = Pe.token, ke = Pe.flush, $ = Lc(T, ne, S), X = ".".concat(C), q = jc(T, ne, $, {
          deprecatedTokens: v.deprecatedTokens
        });
        he && $ && ze($) === "object" && Object.keys($).forEach(function(tt) {
          $[tt] = "var(".concat(bo(tt, Nc(T, he.prefix)), ")");
        });
        var Q = gi(Ce, {
          componentCls: X,
          prefixCls: C,
          iconCls: ".".concat(ie),
          antCls: ".".concat(le),
          calc: ve,
          // @ts-ignore
          max: xe,
          // @ts-ignore
          min: fe
        }, he ? $ : q), F = w(Q, {
          hashId: ue,
          prefixCls: C,
          rootPrefixCls: le,
          iconPrefixCls: ie
        });
        ke(T, q);
        var re = typeof c == "function" ? c(Q, C, B, v.resetFont) : null;
        return [v.resetStyle === !1 ? null : re, F];
      });
      return [ge, ue];
    };
  }
  function x(h, w, S) {
    var v = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, y = m(h, w, S, oe({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, v)), A = function(g) {
      var M = g.prefixCls, C = g.rootCls, B = C === void 0 ? M : C;
      return y(M, B), null;
    };
    return process.env.NODE_ENV !== "production" && (A.displayName = "SubStyle_".concat(String(Array.isArray(h) ? h.join(".") : h))), A;
  }
  return {
    genStyleHooks: f,
    genSubStyleComponent: x,
    genComponentStyleHook: m
  };
}
const Gx = "5.24.6";
function qi(n) {
  return n >= 0 && n <= 255;
}
function ro(n, r) {
  const {
    r: e,
    g: i,
    b: s,
    a
  } = new Je(n).toRgb();
  if (a < 1)
    return n;
  const {
    r: c,
    g: u,
    b: f
  } = new Je(r).toRgb();
  for (let d = 0.01; d <= 1; d += 0.01) {
    const m = Math.round((e - c * (1 - d)) / d), x = Math.round((i - u * (1 - d)) / d), h = Math.round((s - f * (1 - d)) / d);
    if (qi(m) && qi(x) && qi(h))
      return new Je({
        r: m,
        g: x,
        b: h,
        a: Math.round(d * 100) / 100
      }).toRgbString();
  }
  return new Je({
    r: e,
    g: i,
    b: s,
    a: 1
  }).toRgbString();
}
var Kx = function(n, r) {
  var e = {};
  for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && r.indexOf(i) < 0 && (e[i] = n[i]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function") for (var s = 0, i = Object.getOwnPropertySymbols(n); s < i.length; s++)
    r.indexOf(i[s]) < 0 && Object.prototype.propertyIsEnumerable.call(n, i[s]) && (e[i[s]] = n[i[s]]);
  return e;
};
function of(n) {
  const {
    override: r
  } = n, e = Kx(n, ["override"]), i = Object.assign({}, r);
  Object.keys(jr).forEach((h) => {
    delete i[h];
  });
  const s = Object.assign(Object.assign({}, e), i), a = 480, c = 576, u = 768, f = 992, d = 1200, m = 1600;
  if (s.motion === !1) {
    const h = "0s";
    s.motionDurationFast = h, s.motionDurationMid = h, s.motionDurationSlow = h;
  }
  return Object.assign(Object.assign(Object.assign({}, s), {
    // ============== Background ============== //
    colorFillContent: s.colorFillSecondary,
    colorFillContentHover: s.colorFill,
    colorFillAlter: s.colorFillQuaternary,
    colorBgContainerDisabled: s.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: s.colorBgContainer,
    colorSplit: ro(s.colorBorderSecondary, s.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: s.colorTextQuaternary,
    colorTextDisabled: s.colorTextQuaternary,
    colorTextHeading: s.colorText,
    colorTextLabel: s.colorTextSecondary,
    colorTextDescription: s.colorTextTertiary,
    colorTextLightSolid: s.colorWhite,
    colorHighlight: s.colorError,
    colorBgTextHover: s.colorFillSecondary,
    colorBgTextActive: s.colorFill,
    colorIcon: s.colorTextTertiary,
    colorIconHover: s.colorText,
    colorErrorOutline: ro(s.colorErrorBg, s.colorBgContainer),
    colorWarningOutline: ro(s.colorWarningBg, s.colorBgContainer),
    // Font
    fontSizeIcon: s.fontSizeSM,
    // Line
    lineWidthFocus: s.lineWidth * 3,
    // Control
    lineWidth: s.lineWidth,
    controlOutlineWidth: s.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: s.controlHeight / 2,
    controlItemBgHover: s.colorFillTertiary,
    controlItemBgActive: s.colorPrimaryBg,
    controlItemBgActiveHover: s.colorPrimaryBgHover,
    controlItemBgActiveDisabled: s.colorFill,
    controlTmpOutline: s.colorFillQuaternary,
    controlOutline: ro(s.colorPrimaryBg, s.colorBgContainer),
    lineType: s.lineType,
    borderRadius: s.borderRadius,
    borderRadiusXS: s.borderRadiusXS,
    borderRadiusSM: s.borderRadiusSM,
    borderRadiusLG: s.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: s.sizeXXS,
    paddingXS: s.sizeXS,
    paddingSM: s.sizeSM,
    padding: s.size,
    paddingMD: s.sizeMD,
    paddingLG: s.sizeLG,
    paddingXL: s.sizeXL,
    paddingContentHorizontalLG: s.sizeLG,
    paddingContentVerticalLG: s.sizeMS,
    paddingContentHorizontal: s.sizeMS,
    paddingContentVertical: s.sizeSM,
    paddingContentHorizontalSM: s.size,
    paddingContentVerticalSM: s.sizeXS,
    marginXXS: s.sizeXXS,
    marginXS: s.sizeXS,
    marginSM: s.sizeSM,
    margin: s.size,
    marginMD: s.sizeMD,
    marginLG: s.sizeLG,
    marginXL: s.sizeXL,
    marginXXL: s.sizeXXL,
    boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    screenXS: a,
    screenXSMin: a,
    screenXSMax: c - 1,
    screenSM: c,
    screenSMMin: c,
    screenSMMax: u - 1,
    screenMD: u,
    screenMDMin: u,
    screenMDMax: f - 1,
    screenLG: f,
    screenLGMin: f,
    screenLGMax: d - 1,
    screenXL: d,
    screenXLMin: d,
    screenXLMax: m - 1,
    screenXXL: m,
    screenXXLMin: m,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new Je("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new Je("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new Je("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
    boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
  }), i);
}
var Bc = function(n, r) {
  var e = {};
  for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && r.indexOf(i) < 0 && (e[i] = n[i]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function") for (var s = 0, i = Object.getOwnPropertySymbols(n); s < i.length; s++)
    r.indexOf(i[s]) < 0 && Object.prototype.propertyIsEnumerable.call(n, i[s]) && (e[i[s]] = n[i[s]]);
  return e;
};
const sf = {
  lineHeight: !0,
  lineHeightSM: !0,
  lineHeightLG: !0,
  lineHeightHeading1: !0,
  lineHeightHeading2: !0,
  lineHeightHeading3: !0,
  lineHeightHeading4: !0,
  lineHeightHeading5: !0,
  opacityLoading: !0,
  fontWeightStrong: !0,
  zIndexPopupBase: !0,
  zIndexBase: !0,
  opacityImage: !0
}, Zx = {
  size: !0,
  sizeSM: !0,
  sizeLG: !0,
  sizeMD: !0,
  sizeXS: !0,
  sizeXXS: !0,
  sizeMS: !0,
  sizeXL: !0,
  sizeXXL: !0,
  sizeUnit: !0,
  sizeStep: !0,
  motionBase: !0,
  motionUnit: !0
}, Qx = {
  screenXS: !0,
  screenXSMin: !0,
  screenXSMax: !0,
  screenSM: !0,
  screenSMMin: !0,
  screenSMMax: !0,
  screenMD: !0,
  screenMDMin: !0,
  screenMDMax: !0,
  screenLG: !0,
  screenLGMin: !0,
  screenLGMax: !0,
  screenXL: !0,
  screenXLMin: !0,
  screenXLMax: !0,
  screenXXL: !0,
  screenXXLMin: !0
}, af = (n, r, e) => {
  const i = e.getDerivativeToken(n), {
    override: s
  } = r, a = Bc(r, ["override"]);
  let c = Object.assign(Object.assign({}, i), {
    override: s
  });
  return c = of(c), a && Object.entries(a).forEach((u) => {
    let [f, d] = u;
    const {
      theme: m
    } = d, x = Bc(d, ["theme"]);
    let h = x;
    m && (h = af(Object.assign(Object.assign({}, c), x), {
      override: x
    }, m)), c[f] = h;
  }), c;
};
function Ta() {
  const {
    token: n,
    hashed: r,
    theme: e,
    override: i,
    cssVar: s
  } = et.useContext(Ju), a = `${Gx}-${r || ""}`, c = e || Qu, [u, f, d] = Ip(c, [jr, n], {
    salt: a,
    override: i,
    getComputedToken: af,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: of,
    cssVar: s && {
      prefix: s.prefix,
      key: s.key,
      unitless: sf,
      ignore: Zx,
      preserve: Qx
    }
  });
  return [c, d, r ? f : "", u, s];
}
const cf = function(n) {
  let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  return {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    color: n.colorText,
    fontSize: n.fontSize,
    // font-variant: @font-variant-base;
    lineHeight: n.lineHeight,
    listStyle: "none",
    // font-feature-settings: @font-feature-settings-base;
    fontFamily: r ? "inherit" : n.fontFamily
  };
}, Jx = () => ({
  display: "inline-flex",
  alignItems: "center",
  color: "inherit",
  fontStyle: "normal",
  lineHeight: 0,
  textAlign: "center",
  textTransform: "none",
  // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
  verticalAlign: "-0.125em",
  textRendering: "optimizeLegibility",
  "-webkit-font-smoothing": "antialiased",
  "-moz-osx-font-smoothing": "grayscale",
  "> *": {
    lineHeight: 1
  },
  svg: {
    display: "inline-block"
  }
}), em = (n) => ({
  a: {
    color: n.colorLink,
    textDecoration: n.linkDecoration,
    backgroundColor: "transparent",
    // remove the gray background on active links in IE 10.
    outline: "none",
    cursor: "pointer",
    transition: `color ${n.motionDurationSlow}`,
    "-webkit-text-decoration-skip": "objects",
    // remove gaps in links underline in iOS 8+ and Safari 8+.
    "&:hover": {
      color: n.colorLinkHover
    },
    "&:active": {
      color: n.colorLinkActive
    },
    "&:active, &:hover": {
      textDecoration: n.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    "&:focus": {
      textDecoration: n.linkFocusDecoration,
      outline: 0
    },
    "&[disabled]": {
      color: n.colorTextDisabled,
      cursor: "not-allowed"
    }
  }
}), tm = (n, r, e, i) => {
  const s = `[class^="${r}"], [class*=" ${r}"]`, a = e ? `.${e}` : s, c = {
    boxSizing: "border-box",
    "&::before, &::after": {
      boxSizing: "border-box"
    }
  };
  let u = {};
  return i !== !1 && (u = {
    fontFamily: n.fontFamily,
    fontSize: n.fontSize
  }), {
    [a]: Object.assign(Object.assign(Object.assign({}, u), c), {
      [s]: c
    })
  };
}, lf = (n) => ({
  [`.${n}`]: Object.assign(Object.assign({}, Jx()), {
    [`.${n} .${n}-icon`]: {
      display: "block"
    }
  })
}), {
  genStyleHooks: Aa
} = Yx({
  usePrefix: () => {
    const {
      getPrefixCls: n,
      iconPrefixCls: r
    } = Sn(wn);
    return {
      rootPrefixCls: n(),
      iconPrefixCls: r
    };
  },
  useToken: () => {
    const [n, r, e, i, s] = Ta();
    return {
      theme: n,
      realToken: r,
      hashId: e,
      token: i,
      cssVar: s
    };
  },
  useCSP: () => {
    const {
      csp: n
    } = Sn(wn);
    return n ?? {};
  },
  getResetStyles: (n, r) => {
    var e;
    const i = em(n);
    return [i, {
      "&": i
    }, lf((e = r == null ? void 0 : r.prefix.iconPrefixCls) !== null && e !== void 0 ? e : Ca)];
  },
  getCommonStyle: tm,
  getCompUnitless: () => sf
}), nm = (n, r) => {
  const [e, i] = Ta();
  return Ss({
    token: i,
    hashId: "",
    path: ["ant-design-icons", n],
    nonce: () => r == null ? void 0 : r.nonce,
    layer: {
      name: "antd"
    }
  }, () => [lf(n)]);
}, rm = Object.assign({}, P), {
  useId: Fc
} = rm, om = () => "", im = typeof Fc > "u" ? om : Fc;
function sm(n, r, e) {
  var i, s;
  const a = fr("ConfigProvider"), c = n || {}, u = c.inherit === !1 || !r ? Object.assign(Object.assign({}, Ms), {
    hashed: (i = r == null ? void 0 : r.hashed) !== null && i !== void 0 ? i : Ms.hashed,
    cssVar: r == null ? void 0 : r.cssVar
  }) : r, f = im();
  if (process.env.NODE_ENV !== "production") {
    const d = c.cssVar || u.cssVar, m = !!(typeof c.cssVar == "object" && (!((s = c.cssVar) === null || s === void 0) && s.key) || f);
    process.env.NODE_ENV !== "production" && a(!d || m, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return uu(() => {
    var d, m;
    if (!n)
      return r;
    const x = Object.assign({}, u.components);
    Object.keys(n.components || {}).forEach((S) => {
      x[S] = Object.assign(Object.assign({}, x[S]), n.components[S]);
    });
    const h = `css-var-${f.replace(/:/g, "")}`, w = ((d = c.cssVar) !== null && d !== void 0 ? d : u.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: e == null ? void 0 : e.prefixCls
    }, typeof u.cssVar == "object" ? u.cssVar : {}), typeof c.cssVar == "object" ? c.cssVar : {}), {
      key: typeof c.cssVar == "object" && ((m = c.cssVar) === null || m === void 0 ? void 0 : m.key) || h
    });
    return Object.assign(Object.assign(Object.assign({}, u), c), {
      token: Object.assign(Object.assign({}, u.token), c.token),
      components: x,
      cssVar: w
    });
  }, [c, u], (d, m) => d.some((x, h) => {
    const w = m[h];
    return !rp(x, w, !0);
  }));
}
var am = ["children"], uf = /* @__PURE__ */ P.createContext({});
function cm(n) {
  var r = n.children, e = _r(n, am);
  return /* @__PURE__ */ P.createElement(uf.Provider, {
    value: e
  }, r);
}
var lm = /* @__PURE__ */ function(n) {
  zr(e, n);
  var r = ui(e);
  function e() {
    return qt(this, e), r.apply(this, arguments);
  }
  return $t(e, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), e;
}(P.Component);
function um(n) {
  var r = P.useReducer(function(u) {
    return u + 1;
  }, 0), e = Oe(r, 2), i = e[1], s = P.useRef(n), a = Bs(function() {
    return s.current;
  }), c = Bs(function(u) {
    s.current = typeof u == "function" ? u(s.current) : u, i();
  });
  return [a, c];
}
var gn = "none", oo = "appear", io = "enter", so = "leave", zc = "none", zt = "prepare", qn = "start", $n = "active", Oa = "end", ff = "prepared";
function Vc(n, r) {
  var e = {};
  return e[n.toLowerCase()] = r.toLowerCase(), e["Webkit".concat(n)] = "webkit".concat(r), e["Moz".concat(n)] = "moz".concat(r), e["ms".concat(n)] = "MS".concat(r), e["O".concat(n)] = "o".concat(r.toLowerCase()), e;
}
function fm(n, r) {
  var e = {
    animationend: Vc("Animation", "AnimationEnd"),
    transitionend: Vc("Transition", "TransitionEnd")
  };
  return n && ("AnimationEvent" in r || delete e.animationend.animation, "TransitionEvent" in r || delete e.transitionend.transition), e;
}
var dm = fm(ln(), typeof window < "u" ? window : {}), df = {};
if (ln()) {
  var hm = document.createElement("div");
  df = hm.style;
}
var ao = {};
function hf(n) {
  if (ao[n])
    return ao[n];
  var r = dm[n];
  if (r)
    for (var e = Object.keys(r), i = e.length, s = 0; s < i; s += 1) {
      var a = e[s];
      if (Object.prototype.hasOwnProperty.call(r, a) && a in df)
        return ao[n] = r[a], ao[n];
    }
  return "";
}
var pf = hf("animationend"), xf = hf("transitionend"), mf = !!(pf && xf), Hc = pf || "animationend", Uc = xf || "transitionend";
function Wc(n, r) {
  if (!n) return null;
  if (ze(n) === "object") {
    var e = r.replace(/-\w/g, function(i) {
      return i[1].toUpperCase();
    });
    return n[e];
  }
  return "".concat(n, "-").concat(r);
}
const pm = function(n) {
  var r = st();
  function e(s) {
    s && (s.removeEventListener(Uc, n), s.removeEventListener(Hc, n));
  }
  function i(s) {
    r.current && r.current !== s && e(r.current), s && s !== r.current && (s.addEventListener(Uc, n), s.addEventListener(Hc, n), r.current = s);
  }
  return P.useEffect(function() {
    return function() {
      e(r.current);
    };
  }, []), [i, e];
};
var gf = ln() ? bd : wt;
const xm = function() {
  var n = P.useRef(null);
  function r() {
    Lo.cancel(n.current);
  }
  function e(i) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    r();
    var a = Lo(function() {
      s <= 1 ? i({
        isCanceled: function() {
          return a !== n.current;
        }
      }) : e(i, s - 1);
    });
    n.current = a;
  }
  return P.useEffect(function() {
    return function() {
      r();
    };
  }, []), [e, r];
};
var mm = [zt, qn, $n, Oa], gm = [zt, ff], vf = !1, vm = !0;
function yf(n) {
  return n === $n || n === Oa;
}
const ym = function(n, r, e) {
  var i = Fs(zc), s = Oe(i, 2), a = s[0], c = s[1], u = xm(), f = Oe(u, 2), d = f[0], m = f[1];
  function x() {
    c(zt, !0);
  }
  var h = r ? gm : mm;
  return gf(function() {
    if (a !== zc && a !== Oa) {
      var w = h.indexOf(a), S = h[w + 1], v = e(a);
      v === vf ? c(S, !0) : S && d(function(y) {
        function A() {
          y.isCanceled() || c(S, !0);
        }
        v === !0 ? A() : Promise.resolve(v).then(A);
      });
    }
  }, [n, a]), P.useEffect(function() {
    return function() {
      m();
    };
  }, []), [x, a];
};
function bm(n, r, e, i) {
  var s = i.motionEnter, a = s === void 0 ? !0 : s, c = i.motionAppear, u = c === void 0 ? !0 : c, f = i.motionLeave, d = f === void 0 ? !0 : f, m = i.motionDeadline, x = i.motionLeaveImmediately, h = i.onAppearPrepare, w = i.onEnterPrepare, S = i.onLeavePrepare, v = i.onAppearStart, y = i.onEnterStart, A = i.onLeaveStart, T = i.onAppearActive, g = i.onEnterActive, M = i.onLeaveActive, C = i.onAppearEnd, B = i.onEnterEnd, _ = i.onLeaveEnd, Y = i.onVisibleChanged, ne = Fs(), ue = Oe(ne, 2), Ee = ue[0], he = ue[1], te = um(gn), le = Oe(te, 2), ie = le[0], be = le[1], me = Fs(null), ve = Oe(me, 2), ye = ve[0], xe = ve[1], fe = ie(), se = st(!1), ge = st(null);
  function Pe() {
    return e();
  }
  var Ce = st(!1);
  function ke() {
    be(gn), xe(null, !0);
  }
  var $ = Bs(function($e) {
    var We = ie();
    if (We !== gn) {
      var at = Pe();
      if (!($e && !$e.deadline && $e.target !== at)) {
        var Nt = Ce.current, Ot;
        We === oo && Nt ? Ot = C == null ? void 0 : C(at, $e) : We === io && Nt ? Ot = B == null ? void 0 : B(at, $e) : We === so && Nt && (Ot = _ == null ? void 0 : _(at, $e)), Nt && Ot !== !1 && ke();
      }
    }
  }), X = pm($), q = Oe(X, 1), Q = q[0], F = function(We) {
    switch (We) {
      case oo:
        return ce(ce(ce({}, zt, h), qn, v), $n, T);
      case io:
        return ce(ce(ce({}, zt, w), qn, y), $n, g);
      case so:
        return ce(ce(ce({}, zt, S), qn, A), $n, M);
      default:
        return {};
    }
  }, re = P.useMemo(function() {
    return F(fe);
  }, [fe]), tt = ym(fe, !n, function($e) {
    if ($e === zt) {
      var We = re[zt];
      return We ? We(Pe()) : vf;
    }
    if (Ve in re) {
      var at;
      xe(((at = re[Ve]) === null || at === void 0 ? void 0 : at.call(re, Pe(), null)) || null);
    }
    return Ve === $n && fe !== gn && (Q(Pe()), m > 0 && (clearTimeout(ge.current), ge.current = setTimeout(function() {
      $({
        deadline: !0
      });
    }, m))), Ve === ff && ke(), vm;
  }), ee = Oe(tt, 2), Se = ee[0], Ve = ee[1], At = yf(Ve);
  Ce.current = At;
  var It = st(null);
  gf(function() {
    if (!(se.current && It.current === r)) {
      he(r);
      var $e = se.current;
      se.current = !0;
      var We;
      !$e && r && u && (We = oo), $e && r && a && (We = io), ($e && !r && d || !$e && x && !r && d) && (We = so);
      var at = F(We);
      We && (n || at[zt]) ? (be(We), Se()) : be(gn), It.current = r;
    }
  }, [r]), wt(function() {
    // Cancel appear
    (fe === oo && !u || // Cancel enter
    fe === io && !a || // Cancel leave
    fe === so && !d) && be(gn);
  }, [u, a, d]), wt(function() {
    return function() {
      se.current = !1, clearTimeout(ge.current);
    };
  }, []);
  var mt = P.useRef(!1);
  wt(function() {
    Ee && (mt.current = !0), Ee !== void 0 && fe === gn && ((mt.current || Ee) && (Y == null || Y(Ee)), mt.current = !0);
  }, [Ee, fe]);
  var _t = ye;
  return re[zt] && Ve === qn && (_t = oe({
    transition: "none"
  }, _t)), [fe, Ve, _t, Ee ?? r];
}
function Sm(n) {
  var r = n;
  ze(n) === "object" && (r = n.transitionSupport);
  function e(s, a) {
    return !!(s.motionName && r && a !== !1);
  }
  var i = /* @__PURE__ */ P.forwardRef(function(s, a) {
    var c = s.visible, u = c === void 0 ? !0 : c, f = s.removeOnLeave, d = f === void 0 ? !0 : f, m = s.forceRender, x = s.children, h = s.motionName, w = s.leavedClassName, S = s.eventProps, v = P.useContext(uf), y = v.motion, A = e(s, y), T = st(), g = st();
    function M() {
      try {
        return T.current instanceof HTMLElement ? T.current : Vh(g.current);
      } catch {
        return null;
      }
    }
    var C = bm(A, u, M, s), B = Oe(C, 4), _ = B[0], Y = B[1], ne = B[2], ue = B[3], Ee = P.useRef(ue);
    ue && (Ee.current = !0);
    var he = P.useCallback(function(ve) {
      T.current = ve, fu(a, ve);
    }, [a]), te, le = oe(oe({}, S), {}, {
      visible: u
    });
    if (!x)
      te = null;
    else if (_ === gn)
      ue ? te = x(oe({}, le), he) : !d && Ee.current && w ? te = x(oe(oe({}, le), {}, {
        className: w
      }), he) : m || !d && !w ? te = x(oe(oe({}, le), {}, {
        style: {
          display: "none"
        }
      }), he) : te = null;
    else {
      var ie;
      Y === zt ? ie = "prepare" : yf(Y) ? ie = "active" : Y === qn && (ie = "start");
      var be = Wc(h, "".concat(_, "-").concat(ie));
      te = x(oe(oe({}, le), {}, {
        className: xt(Wc(h, _), ce(ce({}, be, be && ie), h, typeof h == "string")),
        style: ne
      }), he);
    }
    if (/* @__PURE__ */ P.isValidElement(te) && Xh(te)) {
      var me = Yh(te);
      me || (te = /* @__PURE__ */ P.cloneElement(te, {
        ref: he
      }));
    }
    return /* @__PURE__ */ P.createElement(lm, {
      ref: g
    }, te);
  });
  return i.displayName = "CSSMotion", i;
}
const bf = Sm(mf);
var Vs = "add", Hs = "keep", Us = "remove", $i = "removed";
function wm(n) {
  var r;
  return n && ze(n) === "object" && "key" in n ? r = n : r = {
    key: n
  }, oe(oe({}, r), {}, {
    key: String(r.key)
  });
}
function Ws() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return n.map(wm);
}
function Em() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], e = [], i = 0, s = r.length, a = Ws(n), c = Ws(r);
  a.forEach(function(d) {
    for (var m = !1, x = i; x < s; x += 1) {
      var h = c[x];
      if (h.key === d.key) {
        i < x && (e = e.concat(c.slice(i, x).map(function(w) {
          return oe(oe({}, w), {}, {
            status: Vs
          });
        })), i = x), e.push(oe(oe({}, h), {}, {
          status: Hs
        })), i += 1, m = !0;
        break;
      }
    }
    m || e.push(oe(oe({}, d), {}, {
      status: Us
    }));
  }), i < s && (e = e.concat(c.slice(i).map(function(d) {
    return oe(oe({}, d), {}, {
      status: Vs
    });
  })));
  var u = {};
  e.forEach(function(d) {
    var m = d.key;
    u[m] = (u[m] || 0) + 1;
  });
  var f = Object.keys(u).filter(function(d) {
    return u[d] > 1;
  });
  return f.forEach(function(d) {
    e = e.filter(function(m) {
      var x = m.key, h = m.status;
      return x !== d || h !== Us;
    }), e.forEach(function(m) {
      m.key === d && (m.status = Hs);
    });
  }), e;
}
var Cm = ["component", "children", "onVisibleChanged", "onAllRemoved"], Tm = ["status"], Am = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function Om(n) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : bf, e = /* @__PURE__ */ function(i) {
    zr(a, i);
    var s = ui(a);
    function a() {
      var c;
      qt(this, a);
      for (var u = arguments.length, f = new Array(u), d = 0; d < u; d++)
        f[d] = arguments[d];
      return c = s.call.apply(s, [this].concat(f)), ce(Mn(c), "state", {
        keyEntities: []
      }), ce(Mn(c), "removeKey", function(m) {
        c.setState(function(x) {
          var h = x.keyEntities.map(function(w) {
            return w.key !== m ? w : oe(oe({}, w), {}, {
              status: $i
            });
          });
          return {
            keyEntities: h
          };
        }, function() {
          var x = c.state.keyEntities, h = x.filter(function(w) {
            var S = w.status;
            return S !== $i;
          }).length;
          h === 0 && c.props.onAllRemoved && c.props.onAllRemoved();
        });
      }), c;
    }
    return $t(a, [{
      key: "render",
      value: function() {
        var u = this, f = this.state.keyEntities, d = this.props, m = d.component, x = d.children, h = d.onVisibleChanged;
        d.onAllRemoved;
        var w = _r(d, Cm), S = m || P.Fragment, v = {};
        return Am.forEach(function(y) {
          v[y] = w[y], delete w[y];
        }), delete w.keys, /* @__PURE__ */ P.createElement(S, w, f.map(function(y, A) {
          var T = y.status, g = _r(y, Tm), M = T === Vs || T === Hs;
          return /* @__PURE__ */ P.createElement(r, tn({}, v, {
            key: g.key,
            visible: M,
            eventProps: g,
            onVisibleChanged: function(B) {
              h == null || h(B, {
                key: g.key
              }), B || u.removeKey(g.key);
            }
          }), function(C, B) {
            return x(oe(oe({}, C), {}, {
              index: A
            }), B);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(u, f) {
        var d = u.keys, m = f.keyEntities, x = Ws(d), h = Em(m, x);
        return {
          keyEntities: h.filter(function(w) {
            var S = m.find(function(v) {
              var y = v.key;
              return w.key === y;
            });
            return !(S && S.status === $i && w.status === Us);
          })
        };
      }
    }]), a;
  }(P.Component);
  return ce(e, "defaultProps", {
    component: "div"
  }), e;
}
Om(mf);
function Rm(n) {
  const {
    children: r
  } = n, [, e] = Ta(), {
    motion: i
  } = e, s = P.useRef(!1);
  return s.current = s.current || i === !1, s.current ? /* @__PURE__ */ P.createElement(cm, {
    motion: i
  }, r) : r;
}
const Sf = /* @__PURE__ */ P.memo((n) => {
  let {
    dropdownMatchSelectWidth: r
  } = n;
  return fr("ConfigProvider").deprecated(r === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
process.env.NODE_ENV !== "production" && (Sf.displayName = "PropWarning");
const Pm = process.env.NODE_ENV !== "production" ? Sf : () => null;
var km = function(n, r) {
  var e = {};
  for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && r.indexOf(i) < 0 && (e[i] = n[i]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function") for (var s = 0, i = Object.getOwnPropertySymbols(n); s < i.length; s++)
    r.indexOf(i[s]) < 0 && Object.prototype.propertyIsEnumerable.call(n, i[s]) && (e[i[s]] = n[i[s]]);
  return e;
};
let qs = !1;
process.env.NODE_ENV;
const Im = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let wf;
function _m() {
  return wf || Ls;
}
function Nm(n) {
  return Object.keys(n).some((r) => r.endsWith("Color"));
}
const jm = (n) => {
  const {
    prefixCls: r,
    iconPrefixCls: e,
    theme: i,
    holderRender: s
  } = n;
  r !== void 0 && (wf = r), i && Nm(i) && (process.env.NODE_ENV !== "production" && xi(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), Nx(_m(), i));
}, Mm = (n) => {
  const {
    children: r,
    csp: e,
    autoInsertSpaceInButton: i,
    alert: s,
    anchor: a,
    form: c,
    locale: u,
    componentSize: f,
    direction: d,
    space: m,
    splitter: x,
    virtual: h,
    dropdownMatchSelectWidth: w,
    popupMatchSelectWidth: S,
    popupOverflow: v,
    legacyLocale: y,
    parentContext: A,
    iconPrefixCls: T,
    theme: g,
    componentDisabled: M,
    segmented: C,
    statistic: B,
    spin: _,
    calendar: Y,
    carousel: ne,
    cascader: ue,
    collapse: Ee,
    typography: he,
    checkbox: te,
    descriptions: le,
    divider: ie,
    drawer: be,
    skeleton: me,
    steps: ve,
    image: ye,
    layout: xe,
    list: fe,
    mentions: se,
    modal: ge,
    progress: Pe,
    result: Ce,
    slider: ke,
    breadcrumb: $,
    menu: X,
    pagination: q,
    input: Q,
    textArea: F,
    empty: re,
    badge: tt,
    radio: ee,
    rate: Se,
    switch: Ve,
    transfer: At,
    avatar: It,
    message: mt,
    tag: _t,
    table: $e,
    card: We,
    tabs: at,
    timeline: Nt,
    timePicker: Ot,
    upload: un,
    notification: fn,
    tree: Vn,
    colorPicker: dn,
    datePicker: hn,
    rangePicker: K,
    flex: O,
    wave: Be,
    dropdown: Fe,
    warning: ct,
    tour: pe,
    tooltip: He,
    popover: Ne,
    popconfirm: Rt,
    floatButtonGroup: gt,
    variant: Pt,
    inputNumber: Tn,
    treeSelect: ft
  } = n, vt = P.useCallback((Ye, b) => {
    const {
      prefixCls: H
    } = n;
    if (b)
      return b;
    const J = H || A.getPrefixCls("");
    return Ye ? `${J}-${Ye}` : J;
  }, [A.getPrefixCls, n.prefixCls]), dt = T || A.iconPrefixCls || Ca, Yt = e || A.csp;
  nm(dt, Yt);
  const yt = sm(g, A.theme, {
    prefixCls: vt("")
  });
  process.env.NODE_ENV !== "production" && (qs = qs || !!yt);
  const pn = {
    csp: Yt,
    autoInsertSpaceInButton: i,
    alert: s,
    anchor: a,
    locale: u || y,
    direction: d,
    space: m,
    splitter: x,
    virtual: h,
    popupMatchSelectWidth: S ?? w,
    popupOverflow: v,
    getPrefixCls: vt,
    iconPrefixCls: dt,
    theme: yt,
    segmented: C,
    statistic: B,
    spin: _,
    calendar: Y,
    carousel: ne,
    cascader: ue,
    collapse: Ee,
    typography: he,
    checkbox: te,
    descriptions: le,
    divider: ie,
    drawer: be,
    skeleton: me,
    steps: ve,
    image: ye,
    input: Q,
    textArea: F,
    layout: xe,
    list: fe,
    mentions: se,
    modal: ge,
    progress: Pe,
    result: Ce,
    slider: ke,
    breadcrumb: $,
    menu: X,
    pagination: q,
    empty: re,
    badge: tt,
    radio: ee,
    rate: Se,
    switch: Ve,
    transfer: At,
    avatar: It,
    message: mt,
    tag: _t,
    table: $e,
    card: We,
    tabs: at,
    timeline: Nt,
    timePicker: Ot,
    upload: un,
    notification: fn,
    tree: Vn,
    colorPicker: dn,
    datePicker: hn,
    rangePicker: K,
    flex: O,
    wave: Be,
    dropdown: Fe,
    warning: ct,
    tour: pe,
    tooltip: He,
    popover: Ne,
    popconfirm: Rt,
    floatButtonGroup: gt,
    variant: Pt,
    inputNumber: Tn,
    treeSelect: ft
  };
  process.env.NODE_ENV !== "production" && fr("ConfigProvider")(!("autoInsertSpaceInButton" in n), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const jt = Object.assign({}, A);
  Object.keys(pn).forEach((Ye) => {
    pn[Ye] !== void 0 && (jt[Ye] = pn[Ye]);
  }), Im.forEach((Ye) => {
    const b = n[Ye];
    b && (jt[Ye] = b);
  }), typeof i < "u" && (jt.button = Object.assign({
    autoInsertSpace: i
  }, jt.button));
  const xn = uu(() => jt, jt, (Ye, b) => {
    const H = Object.keys(Ye), J = Object.keys(b);
    return H.length !== J.length || H.some((de) => Ye[de] !== b[de]);
  }), {
    layer: mr
  } = P.useContext(Vr), Wr = P.useMemo(() => ({
    prefixCls: dt,
    csp: Yt,
    layer: mr ? "antd" : void 0
  }), [dt, Yt, mr]);
  let it = /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement(Pm, {
    dropdownMatchSelectWidth: w
  }), r);
  const qr = P.useMemo(() => {
    var Ye, b, H, J;
    return fx(((Ye = mi.Form) === null || Ye === void 0 ? void 0 : Ye.defaultValidateMessages) || {}, ((H = (b = xn.locale) === null || b === void 0 ? void 0 : b.Form) === null || H === void 0 ? void 0 : H.defaultValidateMessages) || {}, ((J = xn.form) === null || J === void 0 ? void 0 : J.validateMessages) || {}, (c == null ? void 0 : c.validateMessages) || {});
  }, [xn, c == null ? void 0 : c.validateMessages]);
  Object.keys(qr).length > 0 && (it = /* @__PURE__ */ P.createElement(hx.Provider, {
    value: qr
  }, it)), u && (it = /* @__PURE__ */ P.createElement(Yu, {
    locale: u,
    _ANT_MARK__: Xu
  }, it)), it = /* @__PURE__ */ P.createElement(wa.Provider, {
    value: Wr
  }, it), f && (it = /* @__PURE__ */ P.createElement(Mx, {
    size: f
  }, it)), it = /* @__PURE__ */ P.createElement(Rm, null, it);
  const Ai = P.useMemo(() => {
    const Ye = yt || {}, {
      algorithm: b,
      token: H,
      components: J,
      cssVar: de
    } = Ye, _e = km(Ye, ["algorithm", "token", "components", "cssVar"]), je = b && (!Array.isArray(b) || b.length > 0) ? ms(b) : Qu, Re = {};
    Object.entries(J || {}).forEach((ht) => {
      let [Xe, Ge] = ht;
      const Ke = Object.assign({}, Ge);
      "algorithm" in Ke && (Ke.algorithm === !0 ? Ke.theme = je : (Array.isArray(Ke.algorithm) || typeof Ke.algorithm == "function") && (Ke.theme = ms(Ke.algorithm)), delete Ke.algorithm), Re[Xe] = Ke;
    });
    const Ae = Object.assign(Object.assign({}, jr), H);
    return Object.assign(Object.assign({}, _e), {
      theme: je,
      token: Ae,
      components: Re,
      override: Object.assign({
        override: Ae
      }, Re),
      cssVar: de
    });
  }, [yt]);
  return g && (it = /* @__PURE__ */ P.createElement(Ju.Provider, {
    value: Ai
  }, it)), xn.warning && (it = /* @__PURE__ */ P.createElement(qu.Provider, {
    value: xn.warning
  }, it)), M !== void 0 && (it = /* @__PURE__ */ P.createElement(jx, {
    disabled: M
  }, it)), /* @__PURE__ */ P.createElement(wn.Provider, {
    value: xn
  }, it);
}, dr = (n) => {
  const r = P.useContext(wn), e = P.useContext($u);
  return /* @__PURE__ */ P.createElement(Mm, Object.assign({
    parentContext: r,
    legacyLocale: e
  }, n));
};
dr.ConfigContext = wn;
dr.SizeContext = Lr;
dr.config = jm;
dr.useConfig = Lx;
Object.defineProperty(dr, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && xi(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), Lr)
});
process.env.NODE_ENV !== "production" && (dr.displayName = "ConfigProvider");
var Lm = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
function Ef(n) {
  var r;
  return n == null || (r = n.getRootNode) === null || r === void 0 ? void 0 : r.call(n);
}
function Dm(n) {
  return Ef(n) instanceof ShadowRoot;
}
function Bm(n) {
  return Dm(n) ? Ef(n) : null;
}
function Fm(n) {
  return n.replace(/-(.)/g, function(r, e) {
    return e.toUpperCase();
  });
}
function zm(n, r) {
  En(n, "[@ant-design/icons] ".concat(r));
}
function qc(n) {
  return ze(n) === "object" && typeof n.name == "string" && typeof n.theme == "string" && (ze(n.icon) === "object" || typeof n.icon == "function");
}
function $c() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(n).reduce(function(r, e) {
    var i = n[e];
    switch (e) {
      case "class":
        r.className = i, delete r.class;
        break;
      default:
        delete r[e], r[Fm(e)] = i;
    }
    return r;
  }, {});
}
function $s(n, r, e) {
  return e ? /* @__PURE__ */ et.createElement(n.tag, oe(oe({
    key: r
  }, $c(n.attrs)), e), (n.children || []).map(function(i, s) {
    return $s(i, "".concat(r, "-").concat(n.tag, "-").concat(s));
  })) : /* @__PURE__ */ et.createElement(n.tag, oe({
    key: r
  }, $c(n.attrs)), (n.children || []).map(function(i, s) {
    return $s(i, "".concat(r, "-").concat(n.tag, "-").concat(s));
  }));
}
function Cf(n) {
  return Mr(n)[0];
}
function Tf(n) {
  return n ? Array.isArray(n) ? n : [n] : [];
}
var Vm = `
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`, Hm = function(r) {
  var e = Sn(wa), i = e.csp, s = e.prefixCls, a = e.layer, c = Vm;
  s && (c = c.replace(/anticon/g, s)), a && (c = "@layer ".concat(a, ` {
`).concat(c, `
}`)), wt(function() {
    var u = r.current, f = Bm(u);
    Ln(c, "@ant-design-icons", {
      prepend: !a,
      csp: i,
      attachTo: f
    });
  }, []);
}, Um = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], Pr = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function Wm(n) {
  var r = n.primaryColor, e = n.secondaryColor;
  Pr.primaryColor = r, Pr.secondaryColor = e || Cf(r), Pr.calculated = !!e;
}
function qm() {
  return oe({}, Pr);
}
var hr = function(r) {
  var e = r.icon, i = r.className, s = r.onClick, a = r.style, c = r.primaryColor, u = r.secondaryColor, f = _r(r, Um), d = P.useRef(), m = Pr;
  if (c && (m = {
    primaryColor: c,
    secondaryColor: u || Cf(c)
  }), Hm(d), zm(qc(e), "icon should be icon definiton, but got ".concat(e)), !qc(e))
    return null;
  var x = e;
  return x && typeof x.icon == "function" && (x = oe(oe({}, x), {}, {
    icon: x.icon(m.primaryColor, m.secondaryColor)
  })), $s(x.icon, "svg-".concat(x.name), oe(oe({
    className: i,
    onClick: s,
    style: a,
    "data-icon": x.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, f), {}, {
    ref: d
  }));
};
hr.displayName = "IconReact";
hr.getTwoToneColors = qm;
hr.setTwoToneColors = Wm;
function Af(n) {
  var r = Tf(n), e = Oe(r, 2), i = e[0], s = e[1];
  return hr.setTwoToneColors({
    primaryColor: i,
    secondaryColor: s
  });
}
function $m() {
  var n = hr.getTwoToneColors();
  return n.calculated ? [n.primaryColor, n.secondaryColor] : n.primaryColor;
}
var Xm = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
Af(Fo.primary);
var Cn = /* @__PURE__ */ P.forwardRef(function(n, r) {
  var e = n.className, i = n.icon, s = n.spin, a = n.rotate, c = n.tabIndex, u = n.onClick, f = n.twoToneColor, d = _r(n, Xm), m = P.useContext(wa), x = m.prefixCls, h = x === void 0 ? "anticon" : x, w = m.rootClassName, S = xt(w, h, ce(ce({}, "".concat(h, "-").concat(i.name), !!i.name), "".concat(h, "-spin"), !!s || i.name === "loading"), e), v = c;
  v === void 0 && u && (v = -1);
  var y = a ? {
    msTransform: "rotate(".concat(a, "deg)"),
    transform: "rotate(".concat(a, "deg)")
  } : void 0, A = Tf(f), T = Oe(A, 2), g = T[0], M = T[1];
  return /* @__PURE__ */ P.createElement("span", tn({
    role: "img",
    "aria-label": i.name
  }, d, {
    ref: r,
    tabIndex: v,
    onClick: u,
    className: S
  }), /* @__PURE__ */ P.createElement(hr, {
    icon: i,
    primaryColor: g,
    secondaryColor: M,
    style: y
  }));
});
Cn.displayName = "AntdIcon";
Cn.getTwoToneColor = $m;
Cn.setTwoToneColor = Af;
var Ym = function(r, e) {
  return /* @__PURE__ */ P.createElement(Cn, tn({}, r, {
    ref: e,
    icon: Lm
  }));
}, Of = /* @__PURE__ */ P.forwardRef(Ym);
process.env.NODE_ENV !== "production" && (Of.displayName = "CheckCircleFilled");
var Gm = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, Km = function(r, e) {
  return /* @__PURE__ */ P.createElement(Cn, tn({}, r, {
    ref: e,
    icon: Gm
  }));
}, Rf = /* @__PURE__ */ P.forwardRef(Km);
process.env.NODE_ENV !== "production" && (Rf.displayName = "CloseCircleFilled");
var Zm = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, Qm = function(r, e) {
  return /* @__PURE__ */ P.createElement(Cn, tn({}, r, {
    ref: e,
    icon: Zm
  }));
}, Pf = /* @__PURE__ */ P.forwardRef(Qm);
process.env.NODE_ENV !== "production" && (Pf.displayName = "CloseOutlined");
var Jm = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" }, eg = function(r, e) {
  return /* @__PURE__ */ P.createElement(Cn, tn({}, r, {
    ref: e,
    icon: Jm
  }));
}, kf = /* @__PURE__ */ P.forwardRef(eg);
process.env.NODE_ENV !== "production" && (kf.displayName = "ExclamationCircleFilled");
var tg = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" }, ng = function(r, e) {
  return /* @__PURE__ */ P.createElement(Cn, tn({}, r, {
    ref: e,
    icon: tg
  }));
}, If = /* @__PURE__ */ P.forwardRef(ng);
process.env.NODE_ENV !== "production" && (If.displayName = "InfoCircleFilled");
var rg = `accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`, og = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, ig = "".concat(rg, " ").concat(og).split(/[\s\n]+/), sg = "aria-", ag = "data-";
function Xc(n, r) {
  return n.indexOf(r) === 0;
}
function cg(n) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, e;
  r === !1 ? e = {
    aria: !0,
    data: !0,
    attr: !0
  } : r === !0 ? e = {
    aria: !0
  } : e = oe({}, r);
  var i = {};
  return Object.keys(n).forEach(function(s) {
    // Aria
    (e.aria && (s === "role" || Xc(s, sg)) || // Data
    e.data && Xc(s, ag) || // Attr
    e.attr && ig.includes(s)) && (i[s] = n[s]);
  }), i;
}
const _f = (n, r, e) => /* @__PURE__ */ et.isValidElement(n) ? /* @__PURE__ */ et.cloneElement(n, typeof e == "function" ? e(n.props || {}) : e) : r;
function lg(n, r) {
  return _f(n, n, r);
}
const co = (n, r, e, i, s) => ({
  background: n,
  border: `${Do(i.lineWidth)} ${i.lineType} ${r}`,
  [`${s}-icon`]: {
    color: e
  }
}), ug = (n) => {
  const {
    componentCls: r,
    motionDurationSlow: e,
    marginXS: i,
    marginSM: s,
    fontSize: a,
    fontSizeLG: c,
    lineHeight: u,
    borderRadiusLG: f,
    motionEaseInOutCirc: d,
    withDescriptionIconSize: m,
    colorText: x,
    colorTextHeading: h,
    withDescriptionPadding: w,
    defaultPadding: S
  } = n;
  return {
    [r]: Object.assign(Object.assign({}, cf(n)), {
      position: "relative",
      display: "flex",
      alignItems: "center",
      padding: S,
      wordWrap: "break-word",
      borderRadius: f,
      [`&${r}-rtl`]: {
        direction: "rtl"
      },
      [`${r}-content`]: {
        flex: 1,
        minWidth: 0
      },
      [`${r}-icon`]: {
        marginInlineEnd: i,
        lineHeight: 0
      },
      "&-description": {
        display: "none",
        fontSize: a,
        lineHeight: u
      },
      "&-message": {
        color: h
      },
      [`&${r}-motion-leave`]: {
        overflow: "hidden",
        opacity: 1,
        transition: `max-height ${e} ${d}, opacity ${e} ${d},
        padding-top ${e} ${d}, padding-bottom ${e} ${d},
        margin-bottom ${e} ${d}`
      },
      [`&${r}-motion-leave-active`]: {
        maxHeight: 0,
        marginBottom: "0 !important",
        paddingTop: 0,
        paddingBottom: 0,
        opacity: 0
      }
    }),
    [`${r}-with-description`]: {
      alignItems: "flex-start",
      padding: w,
      [`${r}-icon`]: {
        marginInlineEnd: s,
        fontSize: m,
        lineHeight: 0
      },
      [`${r}-message`]: {
        display: "block",
        marginBottom: i,
        color: h,
        fontSize: c
      },
      [`${r}-description`]: {
        display: "block",
        color: x
      }
    },
    [`${r}-banner`]: {
      marginBottom: 0,
      border: "0 !important",
      borderRadius: 0
    }
  };
}, fg = (n) => {
  const {
    componentCls: r,
    colorSuccess: e,
    colorSuccessBorder: i,
    colorSuccessBg: s,
    colorWarning: a,
    colorWarningBorder: c,
    colorWarningBg: u,
    colorError: f,
    colorErrorBorder: d,
    colorErrorBg: m,
    colorInfo: x,
    colorInfoBorder: h,
    colorInfoBg: w
  } = n;
  return {
    [r]: {
      "&-success": co(s, i, e, n, r),
      "&-info": co(w, h, x, n, r),
      "&-warning": co(u, c, a, n, r),
      "&-error": Object.assign(Object.assign({}, co(m, d, f, n, r)), {
        [`${r}-description > pre`]: {
          margin: 0,
          padding: 0
        }
      })
    }
  };
}, dg = (n) => {
  const {
    componentCls: r,
    iconCls: e,
    motionDurationMid: i,
    marginXS: s,
    fontSizeIcon: a,
    colorIcon: c,
    colorIconHover: u
  } = n;
  return {
    [r]: {
      "&-action": {
        marginInlineStart: s
      },
      [`${r}-close-icon`]: {
        marginInlineStart: s,
        padding: 0,
        overflow: "hidden",
        fontSize: a,
        lineHeight: Do(a),
        backgroundColor: "transparent",
        border: "none",
        outline: "none",
        cursor: "pointer",
        [`${e}-close`]: {
          color: c,
          transition: `color ${i}`,
          "&:hover": {
            color: u
          }
        }
      },
      "&-close-text": {
        color: c,
        transition: `color ${i}`,
        "&:hover": {
          color: u
        }
      }
    }
  };
}, hg = (n) => ({
  withDescriptionIconSize: n.fontSizeHeading3,
  defaultPadding: `${n.paddingContentVerticalSM}px 12px`,
  withDescriptionPadding: `${n.paddingMD}px ${n.paddingContentHorizontalLG}px`
}), pg = Aa("Alert", (n) => [ug(n), fg(n), dg(n)], hg);
var Yc = function(n, r) {
  var e = {};
  for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && r.indexOf(i) < 0 && (e[i] = n[i]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function") for (var s = 0, i = Object.getOwnPropertySymbols(n); s < i.length; s++)
    r.indexOf(i[s]) < 0 && Object.prototype.propertyIsEnumerable.call(n, i[s]) && (e[i[s]] = n[i[s]]);
  return e;
};
const xg = {
  success: Of,
  info: If,
  error: Rf,
  warning: kf
}, mg = (n) => {
  const {
    icon: r,
    prefixCls: e,
    type: i
  } = n, s = xg[i] || null;
  return r ? _f(r, /* @__PURE__ */ P.createElement("span", {
    className: `${e}-icon`
  }, r), () => ({
    className: xt(`${e}-icon`, r.props.className)
  })) : /* @__PURE__ */ P.createElement(s, {
    className: `${e}-icon`
  });
}, gg = (n) => {
  const {
    isClosable: r,
    prefixCls: e,
    closeIcon: i,
    handleClose: s,
    ariaProps: a
  } = n, c = i === !0 || i === void 0 ? /* @__PURE__ */ P.createElement(Pf, null) : i;
  return r ? /* @__PURE__ */ P.createElement("button", Object.assign({
    type: "button",
    onClick: s,
    className: `${e}-close-icon`,
    tabIndex: 0
  }, a), c) : null;
}, Ra = /* @__PURE__ */ P.forwardRef((n, r) => {
  const {
    description: e,
    prefixCls: i,
    message: s,
    banner: a,
    className: c,
    rootClassName: u,
    style: f,
    onMouseEnter: d,
    onMouseLeave: m,
    onClick: x,
    afterClose: h,
    showIcon: w,
    closable: S,
    closeText: v,
    closeIcon: y,
    action: A,
    id: T
  } = n, g = Yc(n, ["description", "prefixCls", "message", "banner", "className", "rootClassName", "style", "onMouseEnter", "onMouseLeave", "onClick", "afterClose", "showIcon", "closable", "closeText", "closeIcon", "action", "id"]), [M, C] = P.useState(!1);
  process.env.NODE_ENV !== "production" && fr("Alert").deprecated(!v, "closeText", "closable.closeIcon");
  const B = P.useRef(null);
  P.useImperativeHandle(r, () => ({
    nativeElement: B.current
  }));
  const {
    getPrefixCls: _,
    direction: Y,
    closable: ne,
    closeIcon: ue,
    className: Ee,
    style: he
  } = ef("alert"), te = _("alert", i), [le, ie, be] = pg(te), me = (Ce) => {
    var ke;
    C(!0), (ke = n.onClose) === null || ke === void 0 || ke.call(n, Ce);
  }, ve = P.useMemo(() => n.type !== void 0 ? n.type : a ? "warning" : "info", [n.type, a]), ye = P.useMemo(() => typeof S == "object" && S.closeIcon || v ? !0 : typeof S == "boolean" ? S : y !== !1 && y !== null && y !== void 0 ? !0 : !!ne, [v, y, S, ne]), xe = a && w === void 0 ? !0 : w, fe = xt(te, `${te}-${ve}`, {
    [`${te}-with-description`]: !!e,
    [`${te}-no-icon`]: !xe,
    [`${te}-banner`]: !!a,
    [`${te}-rtl`]: Y === "rtl"
  }, Ee, c, u, be, ie), se = cg(g, {
    aria: !0,
    data: !0
  }), ge = P.useMemo(() => typeof S == "object" && S.closeIcon ? S.closeIcon : v || (y !== void 0 ? y : typeof ne == "object" && ne.closeIcon ? ne.closeIcon : ue), [y, S, v, ue]), Pe = P.useMemo(() => {
    const Ce = S ?? ne;
    if (typeof Ce == "object") {
      const {
        closeIcon: ke
      } = Ce;
      return Yc(Ce, ["closeIcon"]);
    }
    return {};
  }, [S, ne]);
  return le(/* @__PURE__ */ P.createElement(bf, {
    visible: !M,
    motionName: `${te}-motion`,
    motionAppear: !1,
    motionEnter: !1,
    onLeaveStart: (Ce) => ({
      maxHeight: Ce.offsetHeight
    }),
    onLeaveEnd: h
  }, (Ce, ke) => {
    let {
      className: $,
      style: X
    } = Ce;
    return /* @__PURE__ */ P.createElement("div", Object.assign({
      id: T,
      ref: $h(B, ke),
      "data-show": !M,
      className: xt(fe, $),
      style: Object.assign(Object.assign(Object.assign({}, he), f), X),
      onMouseEnter: d,
      onMouseLeave: m,
      onClick: x,
      role: "alert"
    }, se), xe ? /* @__PURE__ */ P.createElement(mg, {
      description: e,
      icon: n.icon,
      prefixCls: te,
      type: ve
    }) : null, /* @__PURE__ */ P.createElement("div", {
      className: `${te}-content`
    }, s ? /* @__PURE__ */ P.createElement("div", {
      className: `${te}-message`
    }, s) : null, e ? /* @__PURE__ */ P.createElement("div", {
      className: `${te}-description`
    }, e) : null), A ? /* @__PURE__ */ P.createElement("div", {
      className: `${te}-action`
    }, A) : null, /* @__PURE__ */ P.createElement(gg, {
      isClosable: ye,
      prefixCls: te,
      closeIcon: ge,
      handleClose: me,
      ariaProps: Pe
    }));
  }));
});
process.env.NODE_ENV !== "production" && (Ra.displayName = "Alert");
function vg(n, r, e) {
  return r = tr(r), hu(n, xa() ? Reflect.construct(r, e || [], tr(n).constructor) : r.apply(n, e));
}
let yg = /* @__PURE__ */ function(n) {
  function r() {
    var e;
    return qt(this, r), e = vg(this, r, arguments), e.state = {
      error: void 0,
      info: {
        componentStack: ""
      }
    }, e;
  }
  return zr(r, n), $t(r, [{
    key: "componentDidCatch",
    value: function(i, s) {
      this.setState({
        error: i,
        info: s
      });
    }
  }, {
    key: "render",
    value: function() {
      const {
        message: i,
        description: s,
        id: a,
        children: c
      } = this.props, {
        error: u,
        info: f
      } = this.state, d = (f == null ? void 0 : f.componentStack) || null, m = typeof i > "u" ? (u || "").toString() : i, x = typeof s > "u" ? d : s;
      return u ? /* @__PURE__ */ P.createElement(Ra, {
        id: a,
        type: "error",
        message: m,
        description: /* @__PURE__ */ P.createElement("pre", {
          style: {
            fontSize: "0.9em",
            overflowX: "auto"
          }
        }, x)
      }) : c;
    }
  }]);
}(P.Component);
const Nf = Ra;
Nf.ErrorBoundary = yg;
function bg(n, r) {
  var e = Object.assign({}, n);
  return Array.isArray(r) && r.forEach(function(i) {
    delete e[i];
  }), e;
}
function Sg(n, r, e) {
  var i = e || {}, s = i.noTrailing, a = s === void 0 ? !1 : s, c = i.noLeading, u = c === void 0 ? !1 : c, f = i.debounceMode, d = f === void 0 ? void 0 : f, m, x = !1, h = 0;
  function w() {
    m && clearTimeout(m);
  }
  function S(y) {
    var A = y || {}, T = A.upcomingOnly, g = T === void 0 ? !1 : T;
    w(), x = !g;
  }
  function v() {
    for (var y = arguments.length, A = new Array(y), T = 0; T < y; T++)
      A[T] = arguments[T];
    var g = this, M = Date.now() - h;
    if (x)
      return;
    function C() {
      h = Date.now(), r.apply(g, A);
    }
    function B() {
      m = void 0;
    }
    !u && d && !m && C(), w(), d === void 0 && M > n ? u ? (h = Date.now(), a || (m = setTimeout(d ? B : C, n))) : C() : a !== !0 && (m = setTimeout(d ? B : C, d === void 0 ? n - M : n));
  }
  return v.cancel = S, v;
}
function wg(n, r, e) {
  var i = {}, s = i.atBegin, a = s === void 0 ? !1 : s;
  return Sg(n, r, {
    debounceMode: a !== !1
  });
}
function Gc(n) {
  return ["small", "middle", "large"].includes(n);
}
const jf = ["wrap", "nowrap", "wrap-reverse"], Mf = ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around", "space-evenly", "stretch", "normal", "left", "right"], Lf = ["center", "start", "end", "flex-start", "flex-end", "self-start", "self-end", "baseline", "normal", "stretch"], Eg = (n, r) => {
  const e = r.wrap === !0 ? "wrap" : r.wrap;
  return {
    [`${n}-wrap-${e}`]: e && jf.includes(e)
  };
}, Cg = (n, r) => {
  const e = {};
  return Lf.forEach((i) => {
    e[`${n}-align-${i}`] = r.align === i;
  }), e[`${n}-align-stretch`] = !r.align && !!r.vertical, e;
}, Tg = (n, r) => {
  const e = {};
  return Mf.forEach((i) => {
    e[`${n}-justify-${i}`] = r.justify === i;
  }), e;
};
function Ag(n, r) {
  return xt(Object.assign(Object.assign(Object.assign({}, Eg(n, r)), Cg(n, r)), Tg(n, r)));
}
const Og = (n) => {
  const {
    componentCls: r
  } = n;
  return {
    [r]: {
      display: "flex",
      margin: 0,
      padding: 0,
      "&-vertical": {
        flexDirection: "column"
      },
      "&-rtl": {
        direction: "rtl"
      },
      "&:empty": {
        display: "none"
      }
    }
  };
}, Rg = (n) => {
  const {
    componentCls: r
  } = n;
  return {
    [r]: {
      "&-gap-small": {
        gap: n.flexGapSM
      },
      "&-gap-middle": {
        gap: n.flexGap
      },
      "&-gap-large": {
        gap: n.flexGapLG
      }
    }
  };
}, Pg = (n) => {
  const {
    componentCls: r
  } = n, e = {};
  return jf.forEach((i) => {
    e[`${r}-wrap-${i}`] = {
      flexWrap: i
    };
  }), e;
}, kg = (n) => {
  const {
    componentCls: r
  } = n, e = {};
  return Lf.forEach((i) => {
    e[`${r}-align-${i}`] = {
      alignItems: i
    };
  }), e;
}, Ig = (n) => {
  const {
    componentCls: r
  } = n, e = {};
  return Mf.forEach((i) => {
    e[`${r}-justify-${i}`] = {
      justifyContent: i
    };
  }), e;
}, _g = () => ({}), Ng = Aa("Flex", (n) => {
  const {
    paddingXS: r,
    padding: e,
    paddingLG: i
  } = n, s = gi(n, {
    flexGapSM: r,
    flexGap: e,
    flexGapLG: i
  });
  return [Og(s), Rg(s), Pg(s), kg(s), Ig(s)];
}, _g, {
  // Flex component don't apply extra font style
  // https://github.com/ant-design/ant-design/issues/46403
  resetStyle: !1
});
var jg = function(n, r) {
  var e = {};
  for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && r.indexOf(i) < 0 && (e[i] = n[i]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function") for (var s = 0, i = Object.getOwnPropertySymbols(n); s < i.length; s++)
    r.indexOf(i[s]) < 0 && Object.prototype.propertyIsEnumerable.call(n, i[s]) && (e[i[s]] = n[i[s]]);
  return e;
};
const Df = /* @__PURE__ */ et.forwardRef((n, r) => {
  const {
    prefixCls: e,
    rootClassName: i,
    className: s,
    style: a,
    flex: c,
    gap: u,
    children: f,
    vertical: d = !1,
    component: m = "div"
  } = n, x = jg(n, ["prefixCls", "rootClassName", "className", "style", "flex", "gap", "children", "vertical", "component"]), {
    flex: h,
    direction: w,
    getPrefixCls: S
  } = et.useContext(wn), v = S("flex", e), [y, A, T] = Ng(v), g = d ?? (h == null ? void 0 : h.vertical), M = xt(s, i, h == null ? void 0 : h.className, v, A, T, Ag(v, n), {
    [`${v}-rtl`]: w === "rtl",
    [`${v}-gap-${u}`]: Gc(u),
    [`${v}-vertical`]: g
  }), C = Object.assign(Object.assign({}, h == null ? void 0 : h.style), a);
  return c && (C.flex = c), u && !Gc(u) && (C.gap = u), y(/* @__PURE__ */ et.createElement(m, Object.assign({
    ref: r,
    className: M,
    style: C
  }, bg(x, ["justify", "wrap", "align"])), f));
});
process.env.NODE_ENV !== "production" && (Df.displayName = "Flex");
const zo = 100, Bf = zo / 5, Ff = zo / 2 - Bf / 2, Xi = Ff * 2 * Math.PI, Kc = 50, Zc = (n) => {
  const {
    dotClassName: r,
    style: e,
    hasCircleCls: i
  } = n;
  return /* @__PURE__ */ P.createElement("circle", {
    className: xt(`${r}-circle`, {
      [`${r}-circle-bg`]: i
    }),
    r: Ff,
    cx: Kc,
    cy: Kc,
    strokeWidth: Bf,
    style: e
  });
}, Mg = (n) => {
  let {
    percent: r,
    prefixCls: e
  } = n;
  const i = `${e}-dot`, s = `${i}-holder`, a = `${s}-hidden`, [c, u] = P.useState(!1);
  Au(() => {
    r !== 0 && u(!0);
  }, [r !== 0]);
  const f = Math.max(Math.min(r, 100), 0);
  if (!c)
    return null;
  const d = {
    strokeDashoffset: `${Xi / 4}`,
    strokeDasharray: `${Xi * f / 100} ${Xi * (100 - f) / 100}`
  };
  return /* @__PURE__ */ P.createElement("span", {
    className: xt(s, `${i}-progress`, f <= 0 && a)
  }, /* @__PURE__ */ P.createElement("svg", {
    viewBox: `0 0 ${zo} ${zo}`,
    // biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole: progressbar could be readonly
    role: "progressbar",
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": f
  }, /* @__PURE__ */ P.createElement(Zc, {
    dotClassName: i,
    hasCircleCls: !0
  }), /* @__PURE__ */ P.createElement(Zc, {
    dotClassName: i,
    style: d
  })));
};
function Lg(n) {
  const {
    prefixCls: r,
    percent: e = 0
  } = n, i = `${r}-dot`, s = `${i}-holder`, a = `${s}-hidden`;
  return /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement("span", {
    className: xt(s, e > 0 && a)
  }, /* @__PURE__ */ P.createElement("span", {
    className: xt(i, `${r}-dot-spin`)
  }, [1, 2, 3, 4].map((c) => /* @__PURE__ */ P.createElement("i", {
    className: `${r}-dot-item`,
    key: c
  })))), /* @__PURE__ */ P.createElement(Mg, {
    prefixCls: r,
    percent: e
  }));
}
function Dg(n) {
  const {
    prefixCls: r,
    indicator: e,
    percent: i
  } = n, s = `${r}-dot`;
  return e && /* @__PURE__ */ P.isValidElement(e) ? lg(e, {
    className: xt(e.props.className, s),
    percent: i
  }) : /* @__PURE__ */ P.createElement(Lg, {
    prefixCls: r,
    percent: i
  });
}
const Bg = new Hu("antSpinMove", {
  to: {
    opacity: 1
  }
}), Fg = new Hu("antRotate", {
  to: {
    transform: "rotate(405deg)"
  }
}), zg = (n) => {
  const {
    componentCls: r,
    calc: e
  } = n;
  return {
    [r]: Object.assign(Object.assign({}, cf(n)), {
      position: "absolute",
      display: "none",
      color: n.colorPrimary,
      fontSize: 0,
      textAlign: "center",
      verticalAlign: "middle",
      opacity: 0,
      transition: `transform ${n.motionDurationSlow} ${n.motionEaseInOutCirc}`,
      "&-spinning": {
        position: "relative",
        display: "inline-block",
        opacity: 1
      },
      [`${r}-text`]: {
        fontSize: n.fontSize,
        paddingTop: e(e(n.dotSize).sub(n.fontSize)).div(2).add(2).equal()
      },
      "&-fullscreen": {
        position: "fixed",
        width: "100vw",
        height: "100vh",
        backgroundColor: n.colorBgMask,
        zIndex: n.zIndexPopupBase,
        inset: 0,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        opacity: 0,
        visibility: "hidden",
        transition: `all ${n.motionDurationMid}`,
        "&-show": {
          opacity: 1,
          visibility: "visible"
        },
        [r]: {
          [`${r}-dot-holder`]: {
            color: n.colorWhite
          },
          [`${r}-text`]: {
            color: n.colorTextLightSolid
          }
        }
      },
      "&-nested-loading": {
        position: "relative",
        [`> div > ${r}`]: {
          position: "absolute",
          top: 0,
          insetInlineStart: 0,
          zIndex: 4,
          display: "block",
          width: "100%",
          height: "100%",
          maxHeight: n.contentHeight,
          [`${r}-dot`]: {
            position: "absolute",
            top: "50%",
            insetInlineStart: "50%",
            margin: e(n.dotSize).mul(-1).div(2).equal()
          },
          [`${r}-text`]: {
            position: "absolute",
            top: "50%",
            width: "100%",
            textShadow: `0 1px 2px ${n.colorBgContainer}`
            // FIXME: shadow
          },
          [`&${r}-show-text ${r}-dot`]: {
            marginTop: e(n.dotSize).div(2).mul(-1).sub(10).equal()
          },
          "&-sm": {
            [`${r}-dot`]: {
              margin: e(n.dotSizeSM).mul(-1).div(2).equal()
            },
            [`${r}-text`]: {
              paddingTop: e(e(n.dotSizeSM).sub(n.fontSize)).div(2).add(2).equal()
            },
            [`&${r}-show-text ${r}-dot`]: {
              marginTop: e(n.dotSizeSM).div(2).mul(-1).sub(10).equal()
            }
          },
          "&-lg": {
            [`${r}-dot`]: {
              margin: e(n.dotSizeLG).mul(-1).div(2).equal()
            },
            [`${r}-text`]: {
              paddingTop: e(e(n.dotSizeLG).sub(n.fontSize)).div(2).add(2).equal()
            },
            [`&${r}-show-text ${r}-dot`]: {
              marginTop: e(n.dotSizeLG).div(2).mul(-1).sub(10).equal()
            }
          }
        },
        [`${r}-container`]: {
          position: "relative",
          transition: `opacity ${n.motionDurationSlow}`,
          "&::after": {
            position: "absolute",
            top: 0,
            insetInlineEnd: 0,
            bottom: 0,
            insetInlineStart: 0,
            zIndex: 10,
            width: "100%",
            height: "100%",
            background: n.colorBgContainer,
            opacity: 0,
            transition: `all ${n.motionDurationSlow}`,
            content: '""',
            pointerEvents: "none"
          }
        },
        [`${r}-blur`]: {
          clear: "both",
          opacity: 0.5,
          userSelect: "none",
          pointerEvents: "none",
          "&::after": {
            opacity: 0.4,
            pointerEvents: "auto"
          }
        }
      },
      // tip
      // ------------------------------
      "&-tip": {
        color: n.spinDotDefault
      },
      // holder
      // ------------------------------
      [`${r}-dot-holder`]: {
        width: "1em",
        height: "1em",
        fontSize: n.dotSize,
        display: "inline-block",
        transition: `transform ${n.motionDurationSlow} ease, opacity ${n.motionDurationSlow} ease`,
        transformOrigin: "50% 50%",
        lineHeight: 1,
        color: n.colorPrimary,
        "&-hidden": {
          transform: "scale(0.3)",
          opacity: 0
        }
      },
      // progress
      // ------------------------------
      [`${r}-dot-progress`]: {
        position: "absolute",
        inset: 0
      },
      // dots
      // ------------------------------
      [`${r}-dot`]: {
        position: "relative",
        display: "inline-block",
        fontSize: n.dotSize,
        width: "1em",
        height: "1em",
        "&-item": {
          position: "absolute",
          display: "block",
          width: e(n.dotSize).sub(e(n.marginXXS).div(2)).div(2).equal(),
          height: e(n.dotSize).sub(e(n.marginXXS).div(2)).div(2).equal(),
          background: "currentColor",
          borderRadius: "100%",
          transform: "scale(0.75)",
          transformOrigin: "50% 50%",
          opacity: 0.3,
          animationName: Bg,
          animationDuration: "1s",
          animationIterationCount: "infinite",
          animationTimingFunction: "linear",
          animationDirection: "alternate",
          "&:nth-child(1)": {
            top: 0,
            insetInlineStart: 0,
            animationDelay: "0s"
          },
          "&:nth-child(2)": {
            top: 0,
            insetInlineEnd: 0,
            animationDelay: "0.4s"
          },
          "&:nth-child(3)": {
            insetInlineEnd: 0,
            bottom: 0,
            animationDelay: "0.8s"
          },
          "&:nth-child(4)": {
            bottom: 0,
            insetInlineStart: 0,
            animationDelay: "1.2s"
          }
        },
        "&-spin": {
          transform: "rotate(45deg)",
          animationName: Fg,
          animationDuration: "1.2s",
          animationIterationCount: "infinite",
          animationTimingFunction: "linear"
        },
        "&-circle": {
          strokeLinecap: "round",
          transition: ["stroke-dashoffset", "stroke-dasharray", "stroke", "stroke-width", "opacity"].map((i) => `${i} ${n.motionDurationSlow} ease`).join(","),
          fillOpacity: 0,
          stroke: "currentcolor"
        },
        "&-circle-bg": {
          stroke: n.colorFillSecondary
        }
      },
      // small
      [`&-sm ${r}-dot`]: {
        "&, &-holder": {
          fontSize: n.dotSizeSM
        }
      },
      [`&-sm ${r}-dot-holder`]: {
        i: {
          width: e(e(n.dotSizeSM).sub(e(n.marginXXS).div(2))).div(2).equal(),
          height: e(e(n.dotSizeSM).sub(e(n.marginXXS).div(2))).div(2).equal()
        }
      },
      // large
      [`&-lg ${r}-dot`]: {
        "&, &-holder": {
          fontSize: n.dotSizeLG
        }
      },
      [`&-lg ${r}-dot-holder`]: {
        i: {
          width: e(e(n.dotSizeLG).sub(n.marginXXS)).div(2).equal(),
          height: e(e(n.dotSizeLG).sub(n.marginXXS)).div(2).equal()
        }
      },
      [`&${r}-show-text ${r}-text`]: {
        display: "block"
      }
    })
  };
}, Vg = (n) => {
  const {
    controlHeightLG: r,
    controlHeight: e
  } = n;
  return {
    contentHeight: 400,
    dotSize: r / 2,
    dotSizeSM: r * 0.35,
    dotSizeLG: e
  };
}, Hg = Aa("Spin", (n) => {
  const r = gi(n, {
    spinDotDefault: n.colorTextDescription
  });
  return [zg(r)];
}, Vg), Ug = 200, Qc = [[30, 0.05], [70, 0.03], [96, 0.01]];
function Wg(n, r) {
  const [e, i] = P.useState(0), s = P.useRef(null), a = r === "auto";
  return P.useEffect(() => (a && n && (i(0), s.current = setInterval(() => {
    i((c) => {
      const u = 100 - c;
      for (let f = 0; f < Qc.length; f += 1) {
        const [d, m] = Qc[f];
        if (c <= d)
          return c + u * m;
      }
      return c;
    });
  }, Ug)), () => {
    clearInterval(s.current);
  }), [a, n]), a ? e : r;
}
var qg = function(n, r) {
  var e = {};
  for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && r.indexOf(i) < 0 && (e[i] = n[i]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function") for (var s = 0, i = Object.getOwnPropertySymbols(n); s < i.length; s++)
    r.indexOf(i[s]) < 0 && Object.prototype.propertyIsEnumerable.call(n, i[s]) && (e[i[s]] = n[i[s]]);
  return e;
};
let zf;
function $g(n, r) {
  return !!n && !!r && !Number.isNaN(Number(r));
}
const kr = (n) => {
  var r;
  const {
    prefixCls: e,
    spinning: i = !0,
    delay: s = 0,
    className: a,
    rootClassName: c,
    size: u = "default",
    tip: f,
    wrapperClassName: d,
    style: m,
    children: x,
    fullscreen: h = !1,
    indicator: w,
    percent: S
  } = n, v = qg(n, ["prefixCls", "spinning", "delay", "className", "rootClassName", "size", "tip", "wrapperClassName", "style", "children", "fullscreen", "indicator", "percent"]), {
    getPrefixCls: y,
    direction: A,
    className: T,
    style: g,
    indicator: M
  } = ef("spin"), C = y("spin", e), [B, _, Y] = Hg(C), [ne, ue] = P.useState(() => i && !$g(i, s)), Ee = Wg(ne, S);
  P.useEffect(() => {
    if (i) {
      const ve = wg(s, () => {
        ue(!0);
      });
      return ve(), () => {
        var ye;
        (ye = ve == null ? void 0 : ve.cancel) === null || ye === void 0 || ye.call(ve);
      };
    }
    ue(!1);
  }, [s, i]);
  const he = P.useMemo(() => typeof x < "u" && !h, [x, h]);
  if (process.env.NODE_ENV !== "production") {
    const ve = fr("Spin");
    process.env.NODE_ENV !== "production" && ve(!f || he || h, "usage", "`tip` only work in nest or fullscreen pattern.");
  }
  const te = xt(C, T, {
    [`${C}-sm`]: u === "small",
    [`${C}-lg`]: u === "large",
    [`${C}-spinning`]: ne,
    [`${C}-show-text`]: !!f,
    [`${C}-rtl`]: A === "rtl"
  }, a, !h && c, _, Y), le = xt(`${C}-container`, {
    [`${C}-blur`]: ne
  }), ie = (r = w ?? M) !== null && r !== void 0 ? r : zf, be = Object.assign(Object.assign({}, g), m), me = /* @__PURE__ */ P.createElement("div", Object.assign({}, v, {
    style: be,
    className: te,
    "aria-live": "polite",
    "aria-busy": ne
  }), /* @__PURE__ */ P.createElement(Dg, {
    prefixCls: C,
    indicator: ie,
    percent: Ee
  }), f && (he || h) ? /* @__PURE__ */ P.createElement("div", {
    className: `${C}-text`
  }, f) : null);
  return B(he ? /* @__PURE__ */ P.createElement("div", Object.assign({}, v, {
    className: xt(`${C}-nested-loading`, d, _, Y)
  }), ne && /* @__PURE__ */ P.createElement("div", {
    key: "loading"
  }, me), /* @__PURE__ */ P.createElement("div", {
    className: le,
    key: "container"
  }, x)) : h ? /* @__PURE__ */ P.createElement("div", {
    className: xt(`${C}-fullscreen`, {
      [`${C}-fullscreen-show`]: ne
    }, c, _, Y)
  }, me) : me);
};
kr.setDefaultIndicator = (n) => {
  zf = n;
};
process.env.NODE_ENV !== "production" && (kr.displayName = "Spin");
function Vf(n, r) {
  return function() {
    return n.apply(r, arguments);
  };
}
const { toString: Xg } = Object.prototype, { getPrototypeOf: Pa } = Object, { iterator: vi, toStringTag: Hf } = Symbol, yi = /* @__PURE__ */ ((n) => (r) => {
  const e = Xg.call(r);
  return n[e] || (n[e] = e.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Xt = (n) => (n = n.toLowerCase(), (r) => yi(r) === n), bi = (n) => (r) => typeof r === n, { isArray: pr } = Array, Dr = bi("undefined");
function Yg(n) {
  return n !== null && !Dr(n) && n.constructor !== null && !Dr(n.constructor) && Ct(n.constructor.isBuffer) && n.constructor.isBuffer(n);
}
const Uf = Xt("ArrayBuffer");
function Gg(n) {
  let r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(n) : r = n && n.buffer && Uf(n.buffer), r;
}
const Kg = bi("string"), Ct = bi("function"), Wf = bi("number"), Si = (n) => n !== null && typeof n == "object", Zg = (n) => n === !0 || n === !1, Ao = (n) => {
  if (yi(n) !== "object")
    return !1;
  const r = Pa(n);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Hf in n) && !(vi in n);
}, Qg = Xt("Date"), Jg = Xt("File"), e1 = Xt("Blob"), t1 = Xt("FileList"), n1 = (n) => Si(n) && Ct(n.pipe), r1 = (n) => {
  let r;
  return n && (typeof FormData == "function" && n instanceof FormData || Ct(n.append) && ((r = yi(n)) === "formdata" || // detect form-data instance
  r === "object" && Ct(n.toString) && n.toString() === "[object FormData]"));
}, o1 = Xt("URLSearchParams"), [i1, s1, a1, c1] = ["ReadableStream", "Request", "Response", "Headers"].map(Xt), l1 = (n) => n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Hr(n, r, { allOwnKeys: e = !1 } = {}) {
  if (n === null || typeof n > "u")
    return;
  let i, s;
  if (typeof n != "object" && (n = [n]), pr(n))
    for (i = 0, s = n.length; i < s; i++)
      r.call(null, n[i], i, n);
  else {
    const a = e ? Object.getOwnPropertyNames(n) : Object.keys(n), c = a.length;
    let u;
    for (i = 0; i < c; i++)
      u = a[i], r.call(null, n[u], u, n);
  }
}
function qf(n, r) {
  r = r.toLowerCase();
  const e = Object.keys(n);
  let i = e.length, s;
  for (; i-- > 0; )
    if (s = e[i], r === s.toLowerCase())
      return s;
  return null;
}
const In = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, $f = (n) => !Dr(n) && n !== In;
function Xs() {
  const { caseless: n } = $f(this) && this || {}, r = {}, e = (i, s) => {
    const a = n && qf(r, s) || s;
    Ao(r[a]) && Ao(i) ? r[a] = Xs(r[a], i) : Ao(i) ? r[a] = Xs({}, i) : pr(i) ? r[a] = i.slice() : r[a] = i;
  };
  for (let i = 0, s = arguments.length; i < s; i++)
    arguments[i] && Hr(arguments[i], e);
  return r;
}
const u1 = (n, r, e, { allOwnKeys: i } = {}) => (Hr(r, (s, a) => {
  e && Ct(s) ? n[a] = Vf(s, e) : n[a] = s;
}, { allOwnKeys: i }), n), f1 = (n) => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n), d1 = (n, r, e, i) => {
  n.prototype = Object.create(r.prototype, i), n.prototype.constructor = n, Object.defineProperty(n, "super", {
    value: r.prototype
  }), e && Object.assign(n.prototype, e);
}, h1 = (n, r, e, i) => {
  let s, a, c;
  const u = {};
  if (r = r || {}, n == null) return r;
  do {
    for (s = Object.getOwnPropertyNames(n), a = s.length; a-- > 0; )
      c = s[a], (!i || i(c, n, r)) && !u[c] && (r[c] = n[c], u[c] = !0);
    n = e !== !1 && Pa(n);
  } while (n && (!e || e(n, r)) && n !== Object.prototype);
  return r;
}, p1 = (n, r, e) => {
  n = String(n), (e === void 0 || e > n.length) && (e = n.length), e -= r.length;
  const i = n.indexOf(r, e);
  return i !== -1 && i === e;
}, x1 = (n) => {
  if (!n) return null;
  if (pr(n)) return n;
  let r = n.length;
  if (!Wf(r)) return null;
  const e = new Array(r);
  for (; r-- > 0; )
    e[r] = n[r];
  return e;
}, m1 = /* @__PURE__ */ ((n) => (r) => n && r instanceof n)(typeof Uint8Array < "u" && Pa(Uint8Array)), g1 = (n, r) => {
  const i = (n && n[vi]).call(n);
  let s;
  for (; (s = i.next()) && !s.done; ) {
    const a = s.value;
    r.call(n, a[0], a[1]);
  }
}, v1 = (n, r) => {
  let e;
  const i = [];
  for (; (e = n.exec(r)) !== null; )
    i.push(e);
  return i;
}, y1 = Xt("HTMLFormElement"), b1 = (n) => n.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(e, i, s) {
    return i.toUpperCase() + s;
  }
), Jc = (({ hasOwnProperty: n }) => (r, e) => n.call(r, e))(Object.prototype), S1 = Xt("RegExp"), Xf = (n, r) => {
  const e = Object.getOwnPropertyDescriptors(n), i = {};
  Hr(e, (s, a) => {
    let c;
    (c = r(s, a, n)) !== !1 && (i[a] = c || s);
  }), Object.defineProperties(n, i);
}, w1 = (n) => {
  Xf(n, (r, e) => {
    if (Ct(n) && ["arguments", "caller", "callee"].indexOf(e) !== -1)
      return !1;
    const i = n[e];
    if (Ct(i)) {
      if (r.enumerable = !1, "writable" in r) {
        r.writable = !1;
        return;
      }
      r.set || (r.set = () => {
        throw Error("Can not rewrite read-only method '" + e + "'");
      });
    }
  });
}, E1 = (n, r) => {
  const e = {}, i = (s) => {
    s.forEach((a) => {
      e[a] = !0;
    });
  };
  return pr(n) ? i(n) : i(String(n).split(r)), e;
}, C1 = () => {
}, T1 = (n, r) => n != null && Number.isFinite(n = +n) ? n : r;
function A1(n) {
  return !!(n && Ct(n.append) && n[Hf] === "FormData" && n[vi]);
}
const O1 = (n) => {
  const r = new Array(10), e = (i, s) => {
    if (Si(i)) {
      if (r.indexOf(i) >= 0)
        return;
      if (!("toJSON" in i)) {
        r[s] = i;
        const a = pr(i) ? [] : {};
        return Hr(i, (c, u) => {
          const f = e(c, s + 1);
          !Dr(f) && (a[u] = f);
        }), r[s] = void 0, a;
      }
    }
    return i;
  };
  return e(n, 0);
}, R1 = Xt("AsyncFunction"), P1 = (n) => n && (Si(n) || Ct(n)) && Ct(n.then) && Ct(n.catch), Yf = ((n, r) => n ? setImmediate : r ? ((e, i) => (In.addEventListener("message", ({ source: s, data: a }) => {
  s === In && a === e && i.length && i.shift()();
}, !1), (s) => {
  i.push(s), In.postMessage(e, "*");
}))(`axios@${Math.random()}`, []) : (e) => setTimeout(e))(
  typeof setImmediate == "function",
  Ct(In.postMessage)
), k1 = typeof queueMicrotask < "u" ? queueMicrotask.bind(In) : typeof process < "u" && process.nextTick || Yf, I1 = (n) => n != null && Ct(n[vi]), L = {
  isArray: pr,
  isArrayBuffer: Uf,
  isBuffer: Yg,
  isFormData: r1,
  isArrayBufferView: Gg,
  isString: Kg,
  isNumber: Wf,
  isBoolean: Zg,
  isObject: Si,
  isPlainObject: Ao,
  isReadableStream: i1,
  isRequest: s1,
  isResponse: a1,
  isHeaders: c1,
  isUndefined: Dr,
  isDate: Qg,
  isFile: Jg,
  isBlob: e1,
  isRegExp: S1,
  isFunction: Ct,
  isStream: n1,
  isURLSearchParams: o1,
  isTypedArray: m1,
  isFileList: t1,
  forEach: Hr,
  merge: Xs,
  extend: u1,
  trim: l1,
  stripBOM: f1,
  inherits: d1,
  toFlatObject: h1,
  kindOf: yi,
  kindOfTest: Xt,
  endsWith: p1,
  toArray: x1,
  forEachEntry: g1,
  matchAll: v1,
  isHTMLForm: y1,
  hasOwnProperty: Jc,
  hasOwnProp: Jc,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Xf,
  freezeMethods: w1,
  toObjectSet: E1,
  toCamelCase: b1,
  noop: C1,
  toFiniteNumber: T1,
  findKey: qf,
  global: In,
  isContextDefined: $f,
  isSpecCompliantForm: A1,
  toJSONObject: O1,
  isAsyncFn: R1,
  isThenable: P1,
  setImmediate: Yf,
  asap: k1,
  isIterable: I1
};
function we(n, r, e, i, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = n, this.name = "AxiosError", r && (this.code = r), e && (this.config = e), i && (this.request = i), s && (this.response = s, this.status = s.status ? s.status : null);
}
L.inherits(we, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: L.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Gf = we.prototype, Kf = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((n) => {
  Kf[n] = { value: n };
});
Object.defineProperties(we, Kf);
Object.defineProperty(Gf, "isAxiosError", { value: !0 });
we.from = (n, r, e, i, s, a) => {
  const c = Object.create(Gf);
  return L.toFlatObject(n, c, function(f) {
    return f !== Error.prototype;
  }, (u) => u !== "isAxiosError"), we.call(c, n.message, r, e, i, s), c.cause = n, c.name = n.name, a && Object.assign(c, a), c;
};
const _1 = null;
function Ys(n) {
  return L.isPlainObject(n) || L.isArray(n);
}
function Zf(n) {
  return L.endsWith(n, "[]") ? n.slice(0, -2) : n;
}
function el(n, r, e) {
  return n ? n.concat(r).map(function(s, a) {
    return s = Zf(s), !e && a ? "[" + s + "]" : s;
  }).join(e ? "." : "") : r;
}
function N1(n) {
  return L.isArray(n) && !n.some(Ys);
}
const j1 = L.toFlatObject(L, {}, null, function(r) {
  return /^is[A-Z]/.test(r);
});
function wi(n, r, e) {
  if (!L.isObject(n))
    throw new TypeError("target must be an object");
  r = r || new FormData(), e = L.toFlatObject(e, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(v, y) {
    return !L.isUndefined(y[v]);
  });
  const i = e.metaTokens, s = e.visitor || m, a = e.dots, c = e.indexes, f = (e.Blob || typeof Blob < "u" && Blob) && L.isSpecCompliantForm(r);
  if (!L.isFunction(s))
    throw new TypeError("visitor must be a function");
  function d(S) {
    if (S === null) return "";
    if (L.isDate(S))
      return S.toISOString();
    if (!f && L.isBlob(S))
      throw new we("Blob is not supported. Use a Buffer instead.");
    return L.isArrayBuffer(S) || L.isTypedArray(S) ? f && typeof Blob == "function" ? new Blob([S]) : Buffer.from(S) : S;
  }
  function m(S, v, y) {
    let A = S;
    if (S && !y && typeof S == "object") {
      if (L.endsWith(v, "{}"))
        v = i ? v : v.slice(0, -2), S = JSON.stringify(S);
      else if (L.isArray(S) && N1(S) || (L.isFileList(S) || L.endsWith(v, "[]")) && (A = L.toArray(S)))
        return v = Zf(v), A.forEach(function(g, M) {
          !(L.isUndefined(g) || g === null) && r.append(
            // eslint-disable-next-line no-nested-ternary
            c === !0 ? el([v], M, a) : c === null ? v : v + "[]",
            d(g)
          );
        }), !1;
    }
    return Ys(S) ? !0 : (r.append(el(y, v, a), d(S)), !1);
  }
  const x = [], h = Object.assign(j1, {
    defaultVisitor: m,
    convertValue: d,
    isVisitable: Ys
  });
  function w(S, v) {
    if (!L.isUndefined(S)) {
      if (x.indexOf(S) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      x.push(S), L.forEach(S, function(A, T) {
        (!(L.isUndefined(A) || A === null) && s.call(
          r,
          A,
          L.isString(T) ? T.trim() : T,
          v,
          h
        )) === !0 && w(A, v ? v.concat(T) : [T]);
      }), x.pop();
    }
  }
  if (!L.isObject(n))
    throw new TypeError("data must be an object");
  return w(n), r;
}
function tl(n) {
  const r = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g, function(i) {
    return r[i];
  });
}
function ka(n, r) {
  this._pairs = [], n && wi(n, this, r);
}
const Qf = ka.prototype;
Qf.append = function(r, e) {
  this._pairs.push([r, e]);
};
Qf.toString = function(r) {
  const e = r ? function(i) {
    return r.call(this, i, tl);
  } : tl;
  return this._pairs.map(function(s) {
    return e(s[0]) + "=" + e(s[1]);
  }, "").join("&");
};
function M1(n) {
  return encodeURIComponent(n).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Jf(n, r, e) {
  if (!r)
    return n;
  const i = e && e.encode || M1;
  L.isFunction(e) && (e = {
    serialize: e
  });
  const s = e && e.serialize;
  let a;
  if (s ? a = s(r, e) : a = L.isURLSearchParams(r) ? r.toString() : new ka(r, e).toString(i), a) {
    const c = n.indexOf("#");
    c !== -1 && (n = n.slice(0, c)), n += (n.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return n;
}
class nl {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(r, e, i) {
    return this.handlers.push({
      fulfilled: r,
      rejected: e,
      synchronous: i ? i.synchronous : !1,
      runWhen: i ? i.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(r) {
    this.handlers[r] && (this.handlers[r] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(r) {
    L.forEach(this.handlers, function(i) {
      i !== null && r(i);
    });
  }
}
const ed = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, L1 = typeof URLSearchParams < "u" ? URLSearchParams : ka, D1 = typeof FormData < "u" ? FormData : null, B1 = typeof Blob < "u" ? Blob : null, F1 = {
  isBrowser: !0,
  classes: {
    URLSearchParams: L1,
    FormData: D1,
    Blob: B1
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ia = typeof window < "u" && typeof document < "u", Gs = typeof navigator == "object" && navigator || void 0, z1 = Ia && (!Gs || ["ReactNative", "NativeScript", "NS"].indexOf(Gs.product) < 0), V1 = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", H1 = Ia && window.location.href || "http://localhost", U1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ia,
  hasStandardBrowserEnv: z1,
  hasStandardBrowserWebWorkerEnv: V1,
  navigator: Gs,
  origin: H1
}, Symbol.toStringTag, { value: "Module" })), pt = {
  ...U1,
  ...F1
};
function W1(n, r) {
  return wi(n, new pt.classes.URLSearchParams(), Object.assign({
    visitor: function(e, i, s, a) {
      return pt.isNode && L.isBuffer(e) ? (this.append(i, e.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, r));
}
function q1(n) {
  return L.matchAll(/\w+|\[(\w*)]/g, n).map((r) => r[0] === "[]" ? "" : r[1] || r[0]);
}
function $1(n) {
  const r = {}, e = Object.keys(n);
  let i;
  const s = e.length;
  let a;
  for (i = 0; i < s; i++)
    a = e[i], r[a] = n[a];
  return r;
}
function td(n) {
  function r(e, i, s, a) {
    let c = e[a++];
    if (c === "__proto__") return !0;
    const u = Number.isFinite(+c), f = a >= e.length;
    return c = !c && L.isArray(s) ? s.length : c, f ? (L.hasOwnProp(s, c) ? s[c] = [s[c], i] : s[c] = i, !u) : ((!s[c] || !L.isObject(s[c])) && (s[c] = []), r(e, i, s[c], a) && L.isArray(s[c]) && (s[c] = $1(s[c])), !u);
  }
  if (L.isFormData(n) && L.isFunction(n.entries)) {
    const e = {};
    return L.forEachEntry(n, (i, s) => {
      r(q1(i), s, e, 0);
    }), e;
  }
  return null;
}
function X1(n, r, e) {
  if (L.isString(n))
    try {
      return (r || JSON.parse)(n), L.trim(n);
    } catch (i) {
      if (i.name !== "SyntaxError")
        throw i;
    }
  return (e || JSON.stringify)(n);
}
const Ur = {
  transitional: ed,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(r, e) {
    const i = e.getContentType() || "", s = i.indexOf("application/json") > -1, a = L.isObject(r);
    if (a && L.isHTMLForm(r) && (r = new FormData(r)), L.isFormData(r))
      return s ? JSON.stringify(td(r)) : r;
    if (L.isArrayBuffer(r) || L.isBuffer(r) || L.isStream(r) || L.isFile(r) || L.isBlob(r) || L.isReadableStream(r))
      return r;
    if (L.isArrayBufferView(r))
      return r.buffer;
    if (L.isURLSearchParams(r))
      return e.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), r.toString();
    let u;
    if (a) {
      if (i.indexOf("application/x-www-form-urlencoded") > -1)
        return W1(r, this.formSerializer).toString();
      if ((u = L.isFileList(r)) || i.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return wi(
          u ? { "files[]": r } : r,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return a || s ? (e.setContentType("application/json", !1), X1(r)) : r;
  }],
  transformResponse: [function(r) {
    const e = this.transitional || Ur.transitional, i = e && e.forcedJSONParsing, s = this.responseType === "json";
    if (L.isResponse(r) || L.isReadableStream(r))
      return r;
    if (r && L.isString(r) && (i && !this.responseType || s)) {
      const c = !(e && e.silentJSONParsing) && s;
      try {
        return JSON.parse(r);
      } catch (u) {
        if (c)
          throw u.name === "SyntaxError" ? we.from(u, we.ERR_BAD_RESPONSE, this, null, this.response) : u;
      }
    }
    return r;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: pt.classes.FormData,
    Blob: pt.classes.Blob
  },
  validateStatus: function(r) {
    return r >= 200 && r < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
L.forEach(["delete", "get", "head", "post", "put", "patch"], (n) => {
  Ur.headers[n] = {};
});
const Y1 = L.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), G1 = (n) => {
  const r = {};
  let e, i, s;
  return n && n.split(`
`).forEach(function(c) {
    s = c.indexOf(":"), e = c.substring(0, s).trim().toLowerCase(), i = c.substring(s + 1).trim(), !(!e || r[e] && Y1[e]) && (e === "set-cookie" ? r[e] ? r[e].push(i) : r[e] = [i] : r[e] = r[e] ? r[e] + ", " + i : i);
  }), r;
}, rl = Symbol("internals");
function Er(n) {
  return n && String(n).trim().toLowerCase();
}
function Oo(n) {
  return n === !1 || n == null ? n : L.isArray(n) ? n.map(Oo) : String(n);
}
function K1(n) {
  const r = /* @__PURE__ */ Object.create(null), e = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let i;
  for (; i = e.exec(n); )
    r[i[1]] = i[2];
  return r;
}
const Z1 = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function Yi(n, r, e, i, s) {
  if (L.isFunction(i))
    return i.call(this, r, e);
  if (s && (r = e), !!L.isString(r)) {
    if (L.isString(i))
      return r.indexOf(i) !== -1;
    if (L.isRegExp(i))
      return i.test(r);
  }
}
function Q1(n) {
  return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (r, e, i) => e.toUpperCase() + i);
}
function J1(n, r) {
  const e = L.toCamelCase(" " + r);
  ["get", "set", "has"].forEach((i) => {
    Object.defineProperty(n, i + e, {
      value: function(s, a, c) {
        return this[i].call(this, r, s, a, c);
      },
      configurable: !0
    });
  });
}
let Tt = class {
  constructor(r) {
    r && this.set(r);
  }
  set(r, e, i) {
    const s = this;
    function a(u, f, d) {
      const m = Er(f);
      if (!m)
        throw new Error("header name must be a non-empty string");
      const x = L.findKey(s, m);
      (!x || s[x] === void 0 || d === !0 || d === void 0 && s[x] !== !1) && (s[x || f] = Oo(u));
    }
    const c = (u, f) => L.forEach(u, (d, m) => a(d, m, f));
    if (L.isPlainObject(r) || r instanceof this.constructor)
      c(r, e);
    else if (L.isString(r) && (r = r.trim()) && !Z1(r))
      c(G1(r), e);
    else if (L.isObject(r) && L.isIterable(r)) {
      let u = {}, f, d;
      for (const m of r) {
        if (!L.isArray(m))
          throw TypeError("Object iterator must return a key-value pair");
        u[d = m[0]] = (f = u[d]) ? L.isArray(f) ? [...f, m[1]] : [f, m[1]] : m[1];
      }
      c(u, e);
    } else
      r != null && a(e, r, i);
    return this;
  }
  get(r, e) {
    if (r = Er(r), r) {
      const i = L.findKey(this, r);
      if (i) {
        const s = this[i];
        if (!e)
          return s;
        if (e === !0)
          return K1(s);
        if (L.isFunction(e))
          return e.call(this, s, i);
        if (L.isRegExp(e))
          return e.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(r, e) {
    if (r = Er(r), r) {
      const i = L.findKey(this, r);
      return !!(i && this[i] !== void 0 && (!e || Yi(this, this[i], i, e)));
    }
    return !1;
  }
  delete(r, e) {
    const i = this;
    let s = !1;
    function a(c) {
      if (c = Er(c), c) {
        const u = L.findKey(i, c);
        u && (!e || Yi(i, i[u], u, e)) && (delete i[u], s = !0);
      }
    }
    return L.isArray(r) ? r.forEach(a) : a(r), s;
  }
  clear(r) {
    const e = Object.keys(this);
    let i = e.length, s = !1;
    for (; i--; ) {
      const a = e[i];
      (!r || Yi(this, this[a], a, r, !0)) && (delete this[a], s = !0);
    }
    return s;
  }
  normalize(r) {
    const e = this, i = {};
    return L.forEach(this, (s, a) => {
      const c = L.findKey(i, a);
      if (c) {
        e[c] = Oo(s), delete e[a];
        return;
      }
      const u = r ? Q1(a) : String(a).trim();
      u !== a && delete e[a], e[u] = Oo(s), i[u] = !0;
    }), this;
  }
  concat(...r) {
    return this.constructor.concat(this, ...r);
  }
  toJSON(r) {
    const e = /* @__PURE__ */ Object.create(null);
    return L.forEach(this, (i, s) => {
      i != null && i !== !1 && (e[s] = r && L.isArray(i) ? i.join(", ") : i);
    }), e;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([r, e]) => r + ": " + e).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(r) {
    return r instanceof this ? r : new this(r);
  }
  static concat(r, ...e) {
    const i = new this(r);
    return e.forEach((s) => i.set(s)), i;
  }
  static accessor(r) {
    const i = (this[rl] = this[rl] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function a(c) {
      const u = Er(c);
      i[u] || (J1(s, c), i[u] = !0);
    }
    return L.isArray(r) ? r.forEach(a) : a(r), this;
  }
};
Tt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
L.reduceDescriptors(Tt.prototype, ({ value: n }, r) => {
  let e = r[0].toUpperCase() + r.slice(1);
  return {
    get: () => n,
    set(i) {
      this[e] = i;
    }
  };
});
L.freezeMethods(Tt);
function Gi(n, r) {
  const e = this || Ur, i = r || e, s = Tt.from(i.headers);
  let a = i.data;
  return L.forEach(n, function(u) {
    a = u.call(e, a, s.normalize(), r ? r.status : void 0);
  }), s.normalize(), a;
}
function nd(n) {
  return !!(n && n.__CANCEL__);
}
function xr(n, r, e) {
  we.call(this, n ?? "canceled", we.ERR_CANCELED, r, e), this.name = "CanceledError";
}
L.inherits(xr, we, {
  __CANCEL__: !0
});
function rd(n, r, e) {
  const i = e.config.validateStatus;
  !e.status || !i || i(e.status) ? n(e) : r(new we(
    "Request failed with status code " + e.status,
    [we.ERR_BAD_REQUEST, we.ERR_BAD_RESPONSE][Math.floor(e.status / 100) - 4],
    e.config,
    e.request,
    e
  ));
}
function ev(n) {
  const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
  return r && r[1] || "";
}
function tv(n, r) {
  n = n || 10;
  const e = new Array(n), i = new Array(n);
  let s = 0, a = 0, c;
  return r = r !== void 0 ? r : 1e3, function(f) {
    const d = Date.now(), m = i[a];
    c || (c = d), e[s] = f, i[s] = d;
    let x = a, h = 0;
    for (; x !== s; )
      h += e[x++], x = x % n;
    if (s = (s + 1) % n, s === a && (a = (a + 1) % n), d - c < r)
      return;
    const w = m && d - m;
    return w ? Math.round(h * 1e3 / w) : void 0;
  };
}
function nv(n, r) {
  let e = 0, i = 1e3 / r, s, a;
  const c = (d, m = Date.now()) => {
    e = m, s = null, a && (clearTimeout(a), a = null), n.apply(null, d);
  };
  return [(...d) => {
    const m = Date.now(), x = m - e;
    x >= i ? c(d, m) : (s = d, a || (a = setTimeout(() => {
      a = null, c(s);
    }, i - x)));
  }, () => s && c(s)];
}
const Vo = (n, r, e = 3) => {
  let i = 0;
  const s = tv(50, 250);
  return nv((a) => {
    const c = a.loaded, u = a.lengthComputable ? a.total : void 0, f = c - i, d = s(f), m = c <= u;
    i = c;
    const x = {
      loaded: c,
      total: u,
      progress: u ? c / u : void 0,
      bytes: f,
      rate: d || void 0,
      estimated: d && u && m ? (u - c) / d : void 0,
      event: a,
      lengthComputable: u != null,
      [r ? "download" : "upload"]: !0
    };
    n(x);
  }, e);
}, ol = (n, r) => {
  const e = n != null;
  return [(i) => r[0]({
    lengthComputable: e,
    total: n,
    loaded: i
  }), r[1]];
}, il = (n) => (...r) => L.asap(() => n(...r)), rv = pt.hasStandardBrowserEnv ? /* @__PURE__ */ ((n, r) => (e) => (e = new URL(e, pt.origin), n.protocol === e.protocol && n.host === e.host && (r || n.port === e.port)))(
  new URL(pt.origin),
  pt.navigator && /(msie|trident)/i.test(pt.navigator.userAgent)
) : () => !0, ov = pt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(n, r, e, i, s, a) {
      const c = [n + "=" + encodeURIComponent(r)];
      L.isNumber(e) && c.push("expires=" + new Date(e).toGMTString()), L.isString(i) && c.push("path=" + i), L.isString(s) && c.push("domain=" + s), a === !0 && c.push("secure"), document.cookie = c.join("; ");
    },
    read(n) {
      const r = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
      return r ? decodeURIComponent(r[3]) : null;
    },
    remove(n) {
      this.write(n, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function iv(n) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}
function sv(n, r) {
  return r ? n.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "") : n;
}
function od(n, r, e) {
  let i = !iv(r);
  return n && (i || e == !1) ? sv(n, r) : r;
}
const sl = (n) => n instanceof Tt ? { ...n } : n;
function zn(n, r) {
  r = r || {};
  const e = {};
  function i(d, m, x, h) {
    return L.isPlainObject(d) && L.isPlainObject(m) ? L.merge.call({ caseless: h }, d, m) : L.isPlainObject(m) ? L.merge({}, m) : L.isArray(m) ? m.slice() : m;
  }
  function s(d, m, x, h) {
    if (L.isUndefined(m)) {
      if (!L.isUndefined(d))
        return i(void 0, d, x, h);
    } else return i(d, m, x, h);
  }
  function a(d, m) {
    if (!L.isUndefined(m))
      return i(void 0, m);
  }
  function c(d, m) {
    if (L.isUndefined(m)) {
      if (!L.isUndefined(d))
        return i(void 0, d);
    } else return i(void 0, m);
  }
  function u(d, m, x) {
    if (x in r)
      return i(d, m);
    if (x in n)
      return i(void 0, d);
  }
  const f = {
    url: a,
    method: a,
    data: a,
    baseURL: c,
    transformRequest: c,
    transformResponse: c,
    paramsSerializer: c,
    timeout: c,
    timeoutMessage: c,
    withCredentials: c,
    withXSRFToken: c,
    adapter: c,
    responseType: c,
    xsrfCookieName: c,
    xsrfHeaderName: c,
    onUploadProgress: c,
    onDownloadProgress: c,
    decompress: c,
    maxContentLength: c,
    maxBodyLength: c,
    beforeRedirect: c,
    transport: c,
    httpAgent: c,
    httpsAgent: c,
    cancelToken: c,
    socketPath: c,
    responseEncoding: c,
    validateStatus: u,
    headers: (d, m, x) => s(sl(d), sl(m), x, !0)
  };
  return L.forEach(Object.keys(Object.assign({}, n, r)), function(m) {
    const x = f[m] || s, h = x(n[m], r[m], m);
    L.isUndefined(h) && x !== u || (e[m] = h);
  }), e;
}
const id = (n) => {
  const r = zn({}, n);
  let { data: e, withXSRFToken: i, xsrfHeaderName: s, xsrfCookieName: a, headers: c, auth: u } = r;
  r.headers = c = Tt.from(c), r.url = Jf(od(r.baseURL, r.url, r.allowAbsoluteUrls), n.params, n.paramsSerializer), u && c.set(
    "Authorization",
    "Basic " + btoa((u.username || "") + ":" + (u.password ? unescape(encodeURIComponent(u.password)) : ""))
  );
  let f;
  if (L.isFormData(e)) {
    if (pt.hasStandardBrowserEnv || pt.hasStandardBrowserWebWorkerEnv)
      c.setContentType(void 0);
    else if ((f = c.getContentType()) !== !1) {
      const [d, ...m] = f ? f.split(";").map((x) => x.trim()).filter(Boolean) : [];
      c.setContentType([d || "multipart/form-data", ...m].join("; "));
    }
  }
  if (pt.hasStandardBrowserEnv && (i && L.isFunction(i) && (i = i(r)), i || i !== !1 && rv(r.url))) {
    const d = s && a && ov.read(a);
    d && c.set(s, d);
  }
  return r;
}, av = typeof XMLHttpRequest < "u", cv = av && function(n) {
  return new Promise(function(e, i) {
    const s = id(n);
    let a = s.data;
    const c = Tt.from(s.headers).normalize();
    let { responseType: u, onUploadProgress: f, onDownloadProgress: d } = s, m, x, h, w, S;
    function v() {
      w && w(), S && S(), s.cancelToken && s.cancelToken.unsubscribe(m), s.signal && s.signal.removeEventListener("abort", m);
    }
    let y = new XMLHttpRequest();
    y.open(s.method.toUpperCase(), s.url, !0), y.timeout = s.timeout;
    function A() {
      if (!y)
        return;
      const g = Tt.from(
        "getAllResponseHeaders" in y && y.getAllResponseHeaders()
      ), C = {
        data: !u || u === "text" || u === "json" ? y.responseText : y.response,
        status: y.status,
        statusText: y.statusText,
        headers: g,
        config: n,
        request: y
      };
      rd(function(_) {
        e(_), v();
      }, function(_) {
        i(_), v();
      }, C), y = null;
    }
    "onloadend" in y ? y.onloadend = A : y.onreadystatechange = function() {
      !y || y.readyState !== 4 || y.status === 0 && !(y.responseURL && y.responseURL.indexOf("file:") === 0) || setTimeout(A);
    }, y.onabort = function() {
      y && (i(new we("Request aborted", we.ECONNABORTED, n, y)), y = null);
    }, y.onerror = function() {
      i(new we("Network Error", we.ERR_NETWORK, n, y)), y = null;
    }, y.ontimeout = function() {
      let M = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const C = s.transitional || ed;
      s.timeoutErrorMessage && (M = s.timeoutErrorMessage), i(new we(
        M,
        C.clarifyTimeoutError ? we.ETIMEDOUT : we.ECONNABORTED,
        n,
        y
      )), y = null;
    }, a === void 0 && c.setContentType(null), "setRequestHeader" in y && L.forEach(c.toJSON(), function(M, C) {
      y.setRequestHeader(C, M);
    }), L.isUndefined(s.withCredentials) || (y.withCredentials = !!s.withCredentials), u && u !== "json" && (y.responseType = s.responseType), d && ([h, S] = Vo(d, !0), y.addEventListener("progress", h)), f && y.upload && ([x, w] = Vo(f), y.upload.addEventListener("progress", x), y.upload.addEventListener("loadend", w)), (s.cancelToken || s.signal) && (m = (g) => {
      y && (i(!g || g.type ? new xr(null, n, y) : g), y.abort(), y = null);
    }, s.cancelToken && s.cancelToken.subscribe(m), s.signal && (s.signal.aborted ? m() : s.signal.addEventListener("abort", m)));
    const T = ev(s.url);
    if (T && pt.protocols.indexOf(T) === -1) {
      i(new we("Unsupported protocol " + T + ":", we.ERR_BAD_REQUEST, n));
      return;
    }
    y.send(a || null);
  });
}, lv = (n, r) => {
  const { length: e } = n = n ? n.filter(Boolean) : [];
  if (r || e) {
    let i = new AbortController(), s;
    const a = function(d) {
      if (!s) {
        s = !0, u();
        const m = d instanceof Error ? d : this.reason;
        i.abort(m instanceof we ? m : new xr(m instanceof Error ? m.message : m));
      }
    };
    let c = r && setTimeout(() => {
      c = null, a(new we(`timeout ${r} of ms exceeded`, we.ETIMEDOUT));
    }, r);
    const u = () => {
      n && (c && clearTimeout(c), c = null, n.forEach((d) => {
        d.unsubscribe ? d.unsubscribe(a) : d.removeEventListener("abort", a);
      }), n = null);
    };
    n.forEach((d) => d.addEventListener("abort", a));
    const { signal: f } = i;
    return f.unsubscribe = () => L.asap(u), f;
  }
}, uv = function* (n, r) {
  let e = n.byteLength;
  if (e < r) {
    yield n;
    return;
  }
  let i = 0, s;
  for (; i < e; )
    s = i + r, yield n.slice(i, s), i = s;
}, fv = async function* (n, r) {
  for await (const e of dv(n))
    yield* uv(e, r);
}, dv = async function* (n) {
  if (n[Symbol.asyncIterator]) {
    yield* n;
    return;
  }
  const r = n.getReader();
  try {
    for (; ; ) {
      const { done: e, value: i } = await r.read();
      if (e)
        break;
      yield i;
    }
  } finally {
    await r.cancel();
  }
}, al = (n, r, e, i) => {
  const s = fv(n, r);
  let a = 0, c, u = (f) => {
    c || (c = !0, i && i(f));
  };
  return new ReadableStream({
    async pull(f) {
      try {
        const { done: d, value: m } = await s.next();
        if (d) {
          u(), f.close();
          return;
        }
        let x = m.byteLength;
        if (e) {
          let h = a += x;
          e(h);
        }
        f.enqueue(new Uint8Array(m));
      } catch (d) {
        throw u(d), d;
      }
    },
    cancel(f) {
      return u(f), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, Ei = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", sd = Ei && typeof ReadableStream == "function", hv = Ei && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((n) => (r) => n.encode(r))(new TextEncoder()) : async (n) => new Uint8Array(await new Response(n).arrayBuffer())), ad = (n, ...r) => {
  try {
    return !!n(...r);
  } catch {
    return !1;
  }
}, pv = sd && ad(() => {
  let n = !1;
  const r = new Request(pt.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return n = !0, "half";
    }
  }).headers.has("Content-Type");
  return n && !r;
}), cl = 64 * 1024, Ks = sd && ad(() => L.isReadableStream(new Response("").body)), Ho = {
  stream: Ks && ((n) => n.body)
};
Ei && ((n) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((r) => {
    !Ho[r] && (Ho[r] = L.isFunction(n[r]) ? (e) => e[r]() : (e, i) => {
      throw new we(`Response type '${r}' is not supported`, we.ERR_NOT_SUPPORT, i);
    });
  });
})(new Response());
const xv = async (n) => {
  if (n == null)
    return 0;
  if (L.isBlob(n))
    return n.size;
  if (L.isSpecCompliantForm(n))
    return (await new Request(pt.origin, {
      method: "POST",
      body: n
    }).arrayBuffer()).byteLength;
  if (L.isArrayBufferView(n) || L.isArrayBuffer(n))
    return n.byteLength;
  if (L.isURLSearchParams(n) && (n = n + ""), L.isString(n))
    return (await hv(n)).byteLength;
}, mv = async (n, r) => {
  const e = L.toFiniteNumber(n.getContentLength());
  return e ?? xv(r);
}, gv = Ei && (async (n) => {
  let {
    url: r,
    method: e,
    data: i,
    signal: s,
    cancelToken: a,
    timeout: c,
    onDownloadProgress: u,
    onUploadProgress: f,
    responseType: d,
    headers: m,
    withCredentials: x = "same-origin",
    fetchOptions: h
  } = id(n);
  d = d ? (d + "").toLowerCase() : "text";
  let w = lv([s, a && a.toAbortSignal()], c), S;
  const v = w && w.unsubscribe && (() => {
    w.unsubscribe();
  });
  let y;
  try {
    if (f && pv && e !== "get" && e !== "head" && (y = await mv(m, i)) !== 0) {
      let C = new Request(r, {
        method: "POST",
        body: i,
        duplex: "half"
      }), B;
      if (L.isFormData(i) && (B = C.headers.get("content-type")) && m.setContentType(B), C.body) {
        const [_, Y] = ol(
          y,
          Vo(il(f))
        );
        i = al(C.body, cl, _, Y);
      }
    }
    L.isString(x) || (x = x ? "include" : "omit");
    const A = "credentials" in Request.prototype;
    S = new Request(r, {
      ...h,
      signal: w,
      method: e.toUpperCase(),
      headers: m.normalize().toJSON(),
      body: i,
      duplex: "half",
      credentials: A ? x : void 0
    });
    let T = await fetch(S);
    const g = Ks && (d === "stream" || d === "response");
    if (Ks && (u || g && v)) {
      const C = {};
      ["status", "statusText", "headers"].forEach((ne) => {
        C[ne] = T[ne];
      });
      const B = L.toFiniteNumber(T.headers.get("content-length")), [_, Y] = u && ol(
        B,
        Vo(il(u), !0)
      ) || [];
      T = new Response(
        al(T.body, cl, _, () => {
          Y && Y(), v && v();
        }),
        C
      );
    }
    d = d || "text";
    let M = await Ho[L.findKey(Ho, d) || "text"](T, n);
    return !g && v && v(), await new Promise((C, B) => {
      rd(C, B, {
        data: M,
        headers: Tt.from(T.headers),
        status: T.status,
        statusText: T.statusText,
        config: n,
        request: S
      });
    });
  } catch (A) {
    throw v && v(), A && A.name === "TypeError" && /Load failed|fetch/i.test(A.message) ? Object.assign(
      new we("Network Error", we.ERR_NETWORK, n, S),
      {
        cause: A.cause || A
      }
    ) : we.from(A, A && A.code, n, S);
  }
}), Zs = {
  http: _1,
  xhr: cv,
  fetch: gv
};
L.forEach(Zs, (n, r) => {
  if (n) {
    try {
      Object.defineProperty(n, "name", { value: r });
    } catch {
    }
    Object.defineProperty(n, "adapterName", { value: r });
  }
});
const ll = (n) => `- ${n}`, vv = (n) => L.isFunction(n) || n === null || n === !1, cd = {
  getAdapter: (n) => {
    n = L.isArray(n) ? n : [n];
    const { length: r } = n;
    let e, i;
    const s = {};
    for (let a = 0; a < r; a++) {
      e = n[a];
      let c;
      if (i = e, !vv(e) && (i = Zs[(c = String(e)).toLowerCase()], i === void 0))
        throw new we(`Unknown adapter '${c}'`);
      if (i)
        break;
      s[c || "#" + a] = i;
    }
    if (!i) {
      const a = Object.entries(s).map(
        ([u, f]) => `adapter ${u} ` + (f === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let c = r ? a.length > 1 ? `since :
` + a.map(ll).join(`
`) : " " + ll(a[0]) : "as no adapter specified";
      throw new we(
        "There is no suitable adapter to dispatch the request " + c,
        "ERR_NOT_SUPPORT"
      );
    }
    return i;
  },
  adapters: Zs
};
function Ki(n) {
  if (n.cancelToken && n.cancelToken.throwIfRequested(), n.signal && n.signal.aborted)
    throw new xr(null, n);
}
function ul(n) {
  return Ki(n), n.headers = Tt.from(n.headers), n.data = Gi.call(
    n,
    n.transformRequest
  ), ["post", "put", "patch"].indexOf(n.method) !== -1 && n.headers.setContentType("application/x-www-form-urlencoded", !1), cd.getAdapter(n.adapter || Ur.adapter)(n).then(function(i) {
    return Ki(n), i.data = Gi.call(
      n,
      n.transformResponse,
      i
    ), i.headers = Tt.from(i.headers), i;
  }, function(i) {
    return nd(i) || (Ki(n), i && i.response && (i.response.data = Gi.call(
      n,
      n.transformResponse,
      i.response
    ), i.response.headers = Tt.from(i.response.headers))), Promise.reject(i);
  });
}
const ld = "1.9.0", Ci = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((n, r) => {
  Ci[n] = function(i) {
    return typeof i === n || "a" + (r < 1 ? "n " : " ") + n;
  };
});
const fl = {};
Ci.transitional = function(r, e, i) {
  function s(a, c) {
    return "[Axios v" + ld + "] Transitional option '" + a + "'" + c + (i ? ". " + i : "");
  }
  return (a, c, u) => {
    if (r === !1)
      throw new we(
        s(c, " has been removed" + (e ? " in " + e : "")),
        we.ERR_DEPRECATED
      );
    return e && !fl[c] && (fl[c] = !0, console.warn(
      s(
        c,
        " has been deprecated since v" + e + " and will be removed in the near future"
      )
    )), r ? r(a, c, u) : !0;
  };
};
Ci.spelling = function(r) {
  return (e, i) => (console.warn(`${i} is likely a misspelling of ${r}`), !0);
};
function yv(n, r, e) {
  if (typeof n != "object")
    throw new we("options must be an object", we.ERR_BAD_OPTION_VALUE);
  const i = Object.keys(n);
  let s = i.length;
  for (; s-- > 0; ) {
    const a = i[s], c = r[a];
    if (c) {
      const u = n[a], f = u === void 0 || c(u, a, n);
      if (f !== !0)
        throw new we("option " + a + " must be " + f, we.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (e !== !0)
      throw new we("Unknown option " + a, we.ERR_BAD_OPTION);
  }
}
const Ro = {
  assertOptions: yv,
  validators: Ci
}, Kt = Ro.validators;
let Bn = class {
  constructor(r) {
    this.defaults = r || {}, this.interceptors = {
      request: new nl(),
      response: new nl()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(r, e) {
    try {
      return await this._request(r, e);
    } catch (i) {
      if (i instanceof Error) {
        let s = {};
        Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error();
        const a = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          i.stack ? a && !String(i.stack).endsWith(a.replace(/^.+\n.+\n/, "")) && (i.stack += `
` + a) : i.stack = a;
        } catch {
        }
      }
      throw i;
    }
  }
  _request(r, e) {
    typeof r == "string" ? (e = e || {}, e.url = r) : e = r || {}, e = zn(this.defaults, e);
    const { transitional: i, paramsSerializer: s, headers: a } = e;
    i !== void 0 && Ro.assertOptions(i, {
      silentJSONParsing: Kt.transitional(Kt.boolean),
      forcedJSONParsing: Kt.transitional(Kt.boolean),
      clarifyTimeoutError: Kt.transitional(Kt.boolean)
    }, !1), s != null && (L.isFunction(s) ? e.paramsSerializer = {
      serialize: s
    } : Ro.assertOptions(s, {
      encode: Kt.function,
      serialize: Kt.function
    }, !0)), e.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? e.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : e.allowAbsoluteUrls = !0), Ro.assertOptions(e, {
      baseUrl: Kt.spelling("baseURL"),
      withXsrfToken: Kt.spelling("withXSRFToken")
    }, !0), e.method = (e.method || this.defaults.method || "get").toLowerCase();
    let c = a && L.merge(
      a.common,
      a[e.method]
    );
    a && L.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (S) => {
        delete a[S];
      }
    ), e.headers = Tt.concat(c, a);
    const u = [];
    let f = !0;
    this.interceptors.request.forEach(function(v) {
      typeof v.runWhen == "function" && v.runWhen(e) === !1 || (f = f && v.synchronous, u.unshift(v.fulfilled, v.rejected));
    });
    const d = [];
    this.interceptors.response.forEach(function(v) {
      d.push(v.fulfilled, v.rejected);
    });
    let m, x = 0, h;
    if (!f) {
      const S = [ul.bind(this), void 0];
      for (S.unshift.apply(S, u), S.push.apply(S, d), h = S.length, m = Promise.resolve(e); x < h; )
        m = m.then(S[x++], S[x++]);
      return m;
    }
    h = u.length;
    let w = e;
    for (x = 0; x < h; ) {
      const S = u[x++], v = u[x++];
      try {
        w = S(w);
      } catch (y) {
        v.call(this, y);
        break;
      }
    }
    try {
      m = ul.call(this, w);
    } catch (S) {
      return Promise.reject(S);
    }
    for (x = 0, h = d.length; x < h; )
      m = m.then(d[x++], d[x++]);
    return m;
  }
  getUri(r) {
    r = zn(this.defaults, r);
    const e = od(r.baseURL, r.url, r.allowAbsoluteUrls);
    return Jf(e, r.params, r.paramsSerializer);
  }
};
L.forEach(["delete", "get", "head", "options"], function(r) {
  Bn.prototype[r] = function(e, i) {
    return this.request(zn(i || {}, {
      method: r,
      url: e,
      data: (i || {}).data
    }));
  };
});
L.forEach(["post", "put", "patch"], function(r) {
  function e(i) {
    return function(a, c, u) {
      return this.request(zn(u || {}, {
        method: r,
        headers: i ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: c
      }));
    };
  }
  Bn.prototype[r] = e(), Bn.prototype[r + "Form"] = e(!0);
});
let bv = class ud {
  constructor(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    let e;
    this.promise = new Promise(function(a) {
      e = a;
    });
    const i = this;
    this.promise.then((s) => {
      if (!i._listeners) return;
      let a = i._listeners.length;
      for (; a-- > 0; )
        i._listeners[a](s);
      i._listeners = null;
    }), this.promise.then = (s) => {
      let a;
      const c = new Promise((u) => {
        i.subscribe(u), a = u;
      }).then(s);
      return c.cancel = function() {
        i.unsubscribe(a);
      }, c;
    }, r(function(a, c, u) {
      i.reason || (i.reason = new xr(a, c, u), e(i.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(r) {
    if (this.reason) {
      r(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(r) : this._listeners = [r];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(r) {
    if (!this._listeners)
      return;
    const e = this._listeners.indexOf(r);
    e !== -1 && this._listeners.splice(e, 1);
  }
  toAbortSignal() {
    const r = new AbortController(), e = (i) => {
      r.abort(i);
    };
    return this.subscribe(e), r.signal.unsubscribe = () => this.unsubscribe(e), r.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let r;
    return {
      token: new ud(function(s) {
        r = s;
      }),
      cancel: r
    };
  }
};
function Sv(n) {
  return function(e) {
    return n.apply(null, e);
  };
}
function wv(n) {
  return L.isObject(n) && n.isAxiosError === !0;
}
const Qs = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Qs).forEach(([n, r]) => {
  Qs[r] = n;
});
function fd(n) {
  const r = new Bn(n), e = Vf(Bn.prototype.request, r);
  return L.extend(e, Bn.prototype, r, { allOwnKeys: !0 }), L.extend(e, r, null, { allOwnKeys: !0 }), e.create = function(s) {
    return fd(zn(n, s));
  }, e;
}
const Ze = fd(Ur);
Ze.Axios = Bn;
Ze.CanceledError = xr;
Ze.CancelToken = bv;
Ze.isCancel = nd;
Ze.VERSION = ld;
Ze.toFormData = wi;
Ze.AxiosError = we;
Ze.Cancel = Ze.CanceledError;
Ze.all = function(r) {
  return Promise.all(r);
};
Ze.spread = Sv;
Ze.isAxiosError = wv;
Ze.mergeConfig = zn;
Ze.AxiosHeaders = Tt;
Ze.formToJSON = (n) => td(L.isHTMLForm(n) ? new FormData(n) : n);
Ze.getAdapter = cd.getAdapter;
Ze.HttpStatusCode = Qs;
Ze.default = Ze;
const {
  Axios: $v,
  AxiosError: Xv,
  CanceledError: Yv,
  isCancel: Gv,
  CancelToken: Kv,
  VERSION: Zv,
  all: Qv,
  Cancel: Jv,
  isAxiosError: ey,
  spread: ty,
  toFormData: ny,
  AxiosHeaders: ry,
  HttpStatusCode: oy,
  formToJSON: iy,
  getAdapter: sy,
  mergeConfig: ay
} = Ze, an = Wo;
(function(n, r) {
  const e = Wo, i = n();
  for (; ; )
    try {
      if (parseInt(e(360)) / 1 + parseInt(e(368)) / 2 * (parseInt(e(376)) / 3) + parseInt(e(373)) / 4 * (-parseInt(e(380)) / 5) + parseInt(e(379)) / 6 * (parseInt(e(370)) / 7) + parseInt(e(372)) / 8 * (parseInt(e(369)) / 9) + -parseInt(e(385)) / 10 + -parseInt(e(371)) / 11 * (parseInt(e(367)) / 12) === r) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(Uo, 603655);
function Uo() {
  const n = ["9oFgeyF", "1850597OgPihn", "11acfofL", "1487784RaEtQZ", "7292AEreTx", "tials", "defaults", "945708UPgBNw", "applicatio", "error", "6FgaMNq", "20XahekE", "n/json", "ient", "Content-Ty", "GET", "9102230lxFxBt", "PUT", "DELETE", "withCreden", "/api/v1/cl", "237064IEixXV", "PATCH", "POST", "response", "params", "message", "data", "1343352hBkhMs", "6tEyAiA"];
  return Uo = function() {
    return n;
  }, Uo();
}
an(359) + an(382);
Ze[an(375)][an(358) + an(374)] = !0;
const Ev = async (n) => {
  var e, i, s, a;
  const r = an;
  try {
    return (await Ze(n))[r(366)];
  } catch (c) {
    throw ((i = (e = c[r(363)]) == null ? void 0 : e[r(366)]) == null ? void 0 : i[r(365)]) || ((a = (s = c[r(363)]) == null ? void 0 : s[r(366)]) == null ? void 0 : a[r(378)]) || c[r(365)];
  }
};
function Wo(n, r) {
  const e = Uo();
  return Wo = function(i, s) {
    return i = i - 357, e[i];
  }, Wo(n, r);
}
const Cv = {};
Cv[an(383) + "pe"] = an(377) + an(381);
const Ue = qo;
(function(n, r) {
  const e = qo, i = n();
  for (; ; )
    try {
      if (parseInt(e(162)) / 1 * (parseInt(e(159)) / 2) + -parseInt(e(168)) / 3 + parseInt(e(164)) / 4 + parseInt(e(144)) / 5 * (-parseInt(e(169)) / 6) + parseInt(e(160)) / 7 + parseInt(e(158)) / 8 + -parseInt(e(161)) / 9 * (parseInt(e(147)) / 10) === r) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})($o, 372526);
const On = {};
On[Ue(141)] = Ue(156) + "E", On[Ue(148)] = Ue(155), On[Ue(145)] = Ue(152) + "N", On[Ue(149)] = Ue(156) + "E", On[Ue(143)] = Ue(155), On[Ue(165)] = Ue(152) + "N";
const Jt = On, Js = {};
Js[Ue(163)] = Ue(155), Js[Ue(170)] = Ue(152) + "N";
function qo(n, r) {
  const e = $o();
  return qo = function(i, s) {
    return i = i - 141, e[i];
  }, qo(n, r);
}
const Tv = Js, Av = Ue(150), Ov = Ue(153);
function $o() {
  const n = ["fullscreen", "29430wSXpKd", "mouseup", "touchmove", "moveEvent", "shortcutEv", "ACTION_DOW", "wheelEvent", "Event", "ACTION_UP", "ACTION_MOV", "enuHide", "1574160mGMJvf", "1087006qzLGHE", "3188745suBIgf", "1665KDaXcc", "1TWkqau", "keyup", "2184456gEzxOP", "touchstart", "ent", "keyBoardEv", "1587840elRJeC", "6WnYWmZ", "keydown", "mousemove", "assistiveM", "touchend", "1478305YTlYOx", "mousedown"];
  return $o = function() {
    return n;
  }, $o();
}
const Rv = Ue(167) + Ue(166), dd = Ue(142) + Ue(157), ea = Ue(151) + Ue(166), Pv = Ue(146) + Ue(154);
(function(n, r) {
  const e = _n, i = n();
  for (; ; )
    try {
      if (parseInt(e(174)) / 1 * (-parseInt(e(194)) / 2) + -parseInt(e(229)) / 3 * (-parseInt(e(243)) / 4) + -parseInt(e(270)) / 5 * (parseInt(e(166)) / 6) + parseInt(e(175)) / 7 * (-parseInt(e(279)) / 8) + parseInt(e(189)) / 9 + -parseInt(e(269)) / 10 + -parseInt(e(236)) / 11 * (-parseInt(e(181)) / 12) === r) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(Xo, 215582);
const kv = ({ isMobile: n, assistive: r, onImgEvent: e, canvasContent: i, imageRef: s }) => {
  const [a, c] = St(!1), u = (x) => {
    const h = _n;
    if (x[h(249) + h(251)](), !s[h(195)])
      if (h(206) !== h(206)) r[h(187)] = h(199) + h(276), e[h(227)] = 61;
      else return;
    const w = s[h(195)];
    let S = Jt[x[h(239)]];
    if (r[h(222)] == !0 || r[h(182)] == !0) {
      S == Jt[h(224)] && e(dd, {});
      return;
    }
    if (S == Jt[h(191)] && (h(210) === h(242) ? (r[h(187)] = h(199) + h(276), e[h(227)] = 66) : c(!0)), S != Jt[h(191)] && a == !1) return;
    S == Jt[h(224)] && (h(186) === h(215) ? (r[h(187)] = h(199) + h(276), e[h(227)] = 19) : c(!1));
    let v, y;
    const A = w[h(204) + h(176) + "t"]();
    if (x[h(239)][h(173)](h(234)))
      if (h(278) !== h(256)) {
        const { touches: g, changedTouches: M } = x, C = g[0] ?? M[0];
        v = C[h(177)] - A[h(188)], y = C[h(246)] - A[h(258)];
      } else e[h(184) + h(168)](i, s);
    else x[h(239)][h(173)](h(196)) && (v = x[h(259)] - A[h(188)], y = x[h(200)] - A[h(258)]);
    const T = {};
    T[h(180)] = h(252), T[h(260)] = S, T.x = v, T.y = y, T[h(235)] = A[h(235)], T[h(213)] = A[h(213)], e(Av, T), w[h(255)]();
  }, f = (x) => {
    const h = _n;
    if (h(271) !== h(230)) {
      if (x[h(249) + h(251)](), !s[h(195)]) return;
      const w = s[h(195)], S = x[h(202)], v = w[h(204) + h(176) + "t"](), y = {};
      y[h(180)] = h(268), y[h(235)] = w[h(241) + "h"], y[h(213)] = w[h(183) + "ht"], y.x = x[h(259)] - v[h(188)], y.y = x[h(200)] - v[h(258)], y[h(274)] = S, e(Ov, y), w[h(255)]();
    }
  }, d = async (x) => {
    const h = _n;
    if (x[h(249) + h(251)](), !s[h(195)]) return;
    const w = s[h(195)], S = Tv[x[h(239)]], v = x[h(227)][h(212) + "e"]();
    if (((g) => {
      const M = h;
      if (M(275) === M(265)) {
        i == s[M(224)] && u(f, {});
        return;
      } else
        return [M(221), M(266), M(237)][M(173)](g);
    })(v) == !0) {
      if (h(167) === h(167)) return;
      r(e, {});
    }
    const A = async () => {
      const g = h, M = {};
      M[g(180)] = g(179), M[g(260)] = S, M[g(187)] = g(192) + g(240), M[g(227)] = x[g(227)], M[g(228)] = 0, M[g(280)] = 0;
      const C = M;
      return x[g(216)] == !0 ? g(257) !== g(211) ? v == "c" ? C[g(187)] = g(218) : v == "a" ? g(238) !== g(245) ? (C[g(187)] = g(199) + g(276), C[g(280)] = 4096, C[g(227)] = 29) : n(!0) : v == "v" && (g(267) !== g(267) ? (u[g(244) + g(205)](g(232), f, d), m[g(244) + g(205)](g(272), x, w), S[g(244) + g(205)](g(233), v)) : (C[g(187)] = g(250), C[g(227)] = await navigator[g(198)][g(172)]())) : e(i, s) : v == g(277) ? g(264) === g(264) ? (C[g(187)] = g(199) + g(276), C[g(227)] = 19) : (e[g(187)] = g(199) + g(276), i[g(280)] = 4096, s[g(227)] = 29) : v == g(203) ? (C[g(187)] = g(199) + g(276), C[g(227)] = 20) : v == g(185) ? g(197) !== g(223) ? (C[g(187)] = g(199) + g(276), C[g(227)] = 21) : (r[g(187)] = g(199) + g(276), e[g(227)] = 22) : v == g(253) ? (C[g(187)] = g(199) + g(276), C[g(227)] = 22) : v == g(220) ? (C[g(187)] = g(199) + g(276), C[g(227)] = 67) : v == g(208) ? g(262) === g(273) ? (r[g(187)] = g(199) + g(276), e[g(227)] = 20) : (C[g(187)] = g(199) + g(276), C[g(227)] = 66) : v == g(214) && (C[g(187)] = g(199) + g(276), C[g(227)] = 61), C[g(239)] == g(192) + g(240) && x[g(219)] == !0 && (g(171) === g(171) ? C[g(227)] = C[g(227)][g(247) + "e"]() : (c[g(244) + g(205)](g(254), u, f), d[g(244) + g(205)](g(225), m), [g(231), g(191), g(224)][g(201)]((B) => {
        const _ = g;
        S[_(244) + _(205)](B, v);
      }))), C;
    }, T = await A();
    if (T)
      if (h(248) !== h(248)) {
        const { touches: g, changedTouches: M } = s, C = g[0] ?? M[0];
        a = C[h(177)] - c[h(188)], u = C[h(246)] - f[h(258)];
      } else e(Rv, T);
    w[h(255)]();
  };
  wt(() => {
    const x = _n;
    if (x(207) === x(170)) r[x(187)] = x(199) + x(276), e[x(227)] = 21;
    else {
      const h = s[x(195)];
      if (h)
        if (x(261) === x(190)) [x(231), x(191), x(224), x(254), x(225)][x(201)]((w) => {
          const S = x;
          u[S(184) + S(168)](w, f);
        }), a[x(184) + x(168)](x(225), c);
        else {
          const w = {};
          w[x(263)] = !1;
          const S = w;
          if (n)
            if (x(226) === x(226)) h[x(244) + x(205)](x(232), u, S), h[x(244) + x(205)](x(272), u, S), h[x(244) + x(205)](x(233), u);
            else return;
          else h[x(244) + x(205)](x(254), f, S), h[x(244) + x(205)](x(225), d), [x(231), x(191), x(224)][x(201)]((v) => {
            const y = x;
            h[y(244) + y(205)](v, u);
          });
          return () => {
            const v = x;
            if (h) {
              if (v(169) !== v(169)) return;
              if (n) {
                if (v(217) === v(178)) return;
                [v(232), v(272), v(233)][v(201)]((y) => {
                  const A = v;
                  A(209) !== A(209) ? e[A(244) + A(205)](i, s) : h[A(184) + A(168)](y, u);
                });
              } else [v(231), v(191), v(224), v(254), v(225)][v(201)]((y) => {
                const A = v;
                A(193) === A(193) ? h[A(184) + A(168)](y, u) : n[A(187)] = A(218);
              }), h[v(184) + v(168)](v(225), d);
            }
          };
        }
    }
  }, [n, u, f, d]);
  const m = { ref: s, ...i };
  return ae.jsx(j0, m);
};
function Xo() {
  const n = ["QKGNi", "tListener", "xTYDZ", "MCrEr", "ZSpDT", "readText", "includes", "5soXISW", "243110mBKltk", "gClientRec", "pageX", "YyJUI", "keyEvent", "action", "61476bhsAFa", "showMenu", "offsetHeig", "removeEven", "arrowleft", "rwcLs", "typeKey", "left", "3540555uoWdcP", "IAoLT", "mousedown", "KEYBOARD_T", "fBCuv", "58054WHUNvP", "current", "mouse", "AAbMO", "clipboard", "KEYBOARD_C", "clientY", "forEach", "deltaY", "arrowdown", "getBoundin", "stener", "KRpbs", "KIcwW", "enter", "PdgHj", "ZvNCx", "bxPTq", "toLowerCas", "height", "tab", "eMuAz", "ctrlKey", "uemKE", "COPY_TEXT", "shiftKey", "backspace", "control", "isDown", "wSXld", "mouseup", "keydown", "XqCBP", "key", "repeat", "3pWCfvK", "uvWml", "mousemove", "touchstart", "touchend", "touch", "width", "1397oIjyUE", "capslock", "GURaB", "type", "EXT", "offsetWidt", "SQgac", "449128ZvNXFI", "addEventLi", "QtebF", "pageY", "toUpperCas", "jHrBN", "preventDef", "PASTE_TEXT", "ault", "touchEvent", "arrowright", "wheel", "focus", "hrgJB", "CrVvK", "top", "clientX", "keyAction", "wkCIX", "HenAc", "passive", "kYsdI", "NbCiG", "shift", "TvHNG", "wheelEvent", "2773310hbOPcL", "70SlVpDY", "xHUIL", "touchmove", "arFQl", "delta", "FBWoo", "ODE", "arrowup", "OQBia", "32bnDcPT", "meta_state", "162570hUsaGA"];
  return Xo = function() {
    return n;
  }, Xo();
}
function _n(n, r) {
  const e = Xo();
  return _n = function(i, s) {
    return i = i - 166, e[i];
  }, _n(n, r);
}
const Iv = "data:image/png;base64,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", Ti = Yo;
(function(n, r) {
  const e = Yo, i = n();
  for (; ; )
    try {
      if (parseInt(e(146)) / 1 + parseInt(e(142)) / 2 + parseInt(e(144)) / 3 + -parseInt(e(137)) / 4 * (-parseInt(e(145)) / 5) + -parseInt(e(143)) / 6 + parseInt(e(141)) / 7 * (parseInt(e(147)) / 8) + -parseInt(e(139)) / 9 === r) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(Go, 495574);
const _v = Wt[Ti(140)]`
  z-index: 4;
  position: absolute;
  color: white;
  padding: 10px;
  border-radius: 30px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.723);
  cursor: default;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
  max-width: 250px;
  max-height: 250px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  /* background-color: #777; */
`;
function Yo(n, r) {
  const e = Go();
  return Yo = function(i, s) {
    return i = i - 137, e[i];
  }, Yo(n, r);
}
const nn = Wt[Ti(140)]`
  background-color: #555;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.723);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  padding: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #777;
  }
`, rn = Wt.p`
  height: 5px;
  margin-top: 2px;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
`, Nv = Wt[Ti(138)]`
  position: absolute;
  backdrop-filter: blur(46px);
  border-radius: 50%;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.723);
  top: 50%;
  right: 5%;
`;
function Go() {
  const n = ["661998jBQUUr", "2739930utLwMG", "2095705bRenca", "488591EYYhzP", "483176yeUCHc", "8QRITwe", "img", "21772539RhXnOR", "div", "35DMpqsc", "965820UvtMbl"];
  return Go = function() {
    return n;
  }, Go();
}
const jv = Wt[Ti(140)]`
  user-select: none;
  transition: opacity 0.6s ease;
  z-index: 3;
  opacity: 0.3;
`;
(function(n, r) {
  const e = ir, i = n();
  for (; ; )
    try {
      if (parseInt(e(138)) / 1 + -parseInt(e(153)) / 2 + -parseInt(e(123)) / 3 * (-parseInt(e(137)) / 4) + parseInt(e(134)) / 5 + parseInt(e(150)) / 6 * (parseInt(e(160)) / 7) + parseInt(e(130)) / 8 + parseInt(e(144)) / 9 * (-parseInt(e(122)) / 10) === r) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(Ko, 888106);
const dl = () => {
  const n = ir;
  return document[n(129) + n(164)] || document[n(163) + n(133)] || document[n(128) + n(143) + n(147)] || document[n(152) + n(142)];
};
function ir(n, r) {
  const e = Ko();
  return ir = function(i, s) {
    return i = i - 122, e[i];
  }, ir(n, r);
}
const Mv = (n) => {
  const r = ir, e = document[r(145) + r(124)](r(161) + n);
  e[r(165) + r(140)] ? e[r(165) + r(140)]() : e[r(139) + r(157)] ? (r(159), r(159), e[r(139) + r(157)]()) : e[r(148) + r(158) + r(141)] ? e[r(148) + r(158) + r(141)]() : e[r(132) + r(127)] && e[r(132) + r(127)]();
};
function Ko() {
  const n = ["estFullscr", "iacHe", "2749355TdIICc", "#screen_", "auGBM", "mozFullScr", "Element", "requestFul", "20ePfTrV", "2468493oPtifB", "tor", "epWeH", "exitFullsc", "ullscreen", "webkitFull", "fullscreen", "11477928OJOwbA", "webkitExit", "msRequestF", "eenElement", "5470830VsFWYd", "sZnsy", "reen", "4uHiBQX", "893678QWwrpX", "mozRequest", "lscreen", "een", "enElement", "screenElem", "9381861PaukCj", "querySelec", "Fullscreen", "ent", "webkitRequ", "screen", "6tZEHHx", "mozCancelF", "msFullscre", "3330434TTsubM", "ullScreen", "msExitFull", "eXnzl", "FullScreen"];
  return Ko = function() {
    return n;
  }, Ko();
}
const Lv = () => {
  const n = ir;
  document[n(126) + n(136)] ? document[n(126) + n(136)]() : document[n(151) + n(154)] ? n(162) === n(156) ? U[n(165) + n(140)]() : document[n(151) + n(154)]() : document[n(131) + n(146)] ? n(125) === n(135) ? U[n(151) + n(154)]() : document[n(131) + n(146)]() : document[n(155) + n(149)] && document[n(155) + n(149)]();
};
(function(n, r) {
  const e = Qo, i = n();
  for (; ; )
    try {
      if (parseInt(e(211)) / 1 + parseInt(e(128)) / 2 + -parseInt(e(332)) / 3 * (parseInt(e(134)) / 4) + parseInt(e(177)) / 5 + -parseInt(e(304)) / 6 * (-parseInt(e(298)) / 7) + -parseInt(e(362)) / 8 * (-parseInt(e(289)) / 9) + -parseInt(e(402)) / 10 === r) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(Zo, 275524);
function Zo() {
  const n = ["-1.052-3.3", ".103.897 2", "2-.116C7.0", "S18.387 17", "4c0-1.103-", "4c-.025-.0", "v2z", "MAgCC", "target", "ptxbr", ".897-2 2v4", "includes", "touchmove", "left", "addEventLi", "opacity", "width", "fullscreen", "7zm11-5h-2", "10l.002 10", "2-.082-.03", "13%", " 0 0 0-.38", "a1 1 0 0 0", "345-5.236 ", "now", "9 21V3a1 1", "0 18V4h10l", "Xmslg", " 1 0 0 0 1", "1.048z", " 3.999 4.0", "mousedown", "4.445-2.96", "isDown", "27-1.547 5", "msfullscre", "M5 5h5V3H3", "11.75", "726318SGeSkU", "menu_", "showMenu", "a.995.995 ", "eenchange", "1.103 0-2 ", "-2-2-2zm-1", "3 9a1.003 ", "-.897 2-2V", "35VajXoK", ".089-1.218", " 0 0 0-1 1", "mouse", "69-.823l-1", "pageX", "145836OleGlK", ".w3.org/20", "-1-1H8a1 1", "2 2h10c1.1", "tListener", " 0 0 0-1.5", "taskId", "h-2v6h6z", "get", "getBoundin", "device_id", "0 1.767.51", "paste", "GGDzs", "circle", "path", ".257 5.127", "7 2-2v-4h4", "Back", "7.032 15 7", "59 15.016 ", "top", "ent", "0v10z", "mousemove", "clientY", ".002 16H6.", "Recents", "41928aNobke", "webkitfull", "M6 12h6v2H", "copy", "zM4 20V10h", ".897-2-2-2", "103.897 2 ", "qGQDT", "0 0 0 .38-", "readText", "4zm0 5h16v", "pageY", "touchstart", "0V4a1 1 0 ", "1.103-.897", "H5v-5H3v7h", "c1.103 0 2", "0h2v-6H4v2", "touchend", "Screen", "ault", "NzImH", "assistive_", "svg", "CrgCJ", "6a1 1 0 0 ", "48 3.832a1", "volume", "current", "674.31a1 1", "48ShTeon", "00/svg", ".832L6.697", "7 2-2V4c0-", "focus", "0a.999.999", "75.931l2 1", "H4c-1.103 ", "2-2h-4V4h1", " 2v13c0 1.", "assistive", "h4zm12-6h-", "Icon", "zIndex", "8.347l-3.0", "gloSs", "9.527 4.54", "Hide ID", "xocdM", "m4.431 12.", "Cysil", "061-.016.0", "0 0 0 14 2", "7h7l.001 7", "3 0-2 .897", "children", "height", "recents", "v5h-5v2h7z", "5.46 1.701", "set", "7-2-2-2h-3", "-.769zm-8.", "75z", "1v16a1 1 0", "-2-2-2zm-9", " 0 0 1 1h1", "UCoIA", "change", "gClientRec", "5200280gnSevb", "255, 255, ", "right", "6v2H4z", "Copy", "2 2h7c0 1.", "nsxxw", "forEach", "57-5.428 6", "uywLx", "stener", "screenchan", "JNfVM", "0 0 24 24", "822 13 9A1", "move", "-2 2v6c0 1", "xseJk", "clipboard", "s-.775-3.9", " 5.999-9S1", " 2v5H4V5h3", "M16.75 2h-", "17-.056-.0", "data-id", "JZGgI", "enchange", " 15H4V9z", "379698znVNzm", "h-5c-1.103", "cursor", "sync", "M20.978 13", "action", "32fScPSH", "grab", "mozfullscr", "click", "4v-4c0-1.1", "H6z", "h2.697l5.7", "H4zm16-6h-", "1zm-1 16H5", " 2v16c0 1.", "0 0-.396-1", "8v12.264l-", "3 0 2-.897", ".387 1.386", ".614 16 19", "M20 11V5c0", "2H4zm0 5h1", "fill", "6zm0 4h6v2", "type", "rgba(255, ", "V5h14v14z", "http://www", "0 0 0 .782", "0-2 .897-2", "3px", "3c.033 0 .", "2 2h7c1.10", "div", "UdHrl", "Paste", "10c-1.103 ", "Show ID", "v7h2zm5 14", "0 0-1.554-", "max", "touch_", "removeEven", "-1.103-.89", "passive", "m-2-4h2V3h", "touch_clas", "M10 4H8v4H", "558160Cuyeub", "0 0 1.645z", " 0-2 .897-", "7a1 1 0 0 ", "M20 3H4a1 ", ".004 1.004", "Volume", "shortcutCo", " 7H4c-1.10", "1.003 0 0 ", "Sync", "home", "93-.019a1.", "-2-5zM4 17", "27.05A1 1 ", "RoOaS", "47 3.999 7", "zKvfn", ".015.057-.", "33L12 5.86", "03-.897-2-", "getAttribu", "027 1.027 ", "touch", "preventDef", ".21a1 1 0 ", "08 3.677L7", " 0 0 0 1.0", "zm0-6h-4V4", "1 0 0 0-1-", " 2 2zm0-8h", "017.082-.0", "416 3.377 ", "H13z", "137WmHyrc", "7 16 3v2c2", "0 1-1V4a1 ", "-7v2h5z", "zUrgl", "l10.283 7.", "-3.229 2-5", "min", "data", "clientX", "M16 7v10c1", "3a.986.986", "M20 2H10c-", "back", "landscape", " 0 0 0-.57", " 2-2v-7c0-", ".225-1.1 2", "4v2h6zM8 2", ".999-4.909", "1 0 0 0-1 ", "M4 6h16v2H", "M16 21c3.5", " 2v10c0 1.", "12%", "nFbbR", "v2h8V5h3v6", "shortcutEv", "2 2zm2 7v-", "20px", "03 0 2-.89", "6v6h2v-4h4", "closest", "mouseup", "Home", "shortcut", ".024l-14-1", ".116c.026-", "6l3.612-4."];
  return Zo = function() {
    return n;
  }, Zo();
}
function Qo(n, r) {
  const e = Zo();
  return Qo = function(i, s) {
    return i = i - 112, e[i];
  }, Qo(n, r);
}
const Dv = wl((n, r) => {
  const e = Qo, { displayId: i, isMobile: s, onSenData: a, status: c, imageRef: u, isShowDeviceId: f } = n, [d, m] = St(0), [x, h] = St(0), [w, S] = St(null), [v, y] = St(0), A = st(null), T = st(null), g = st(null), M = {};
  M[e(130)] = e(115), M[e(265)] = 0.3, M[e(375)] = 999;
  const [C, B] = St(M), _ = {};
  _[e(375)] = 999, _[e(388)] = "", _[e(266)] = e(271);
  const [Y, ne] = St(_), ue = {};
  ue[e(375)] = 1e3;
  const [Ee, he] = St(ue), te = st(null), [le, ie] = St(null), be = st(null), me = (K) => {
    const O = e;
    if (K[O(201) + O(352)](), c[O(312)][O(291)] == !0) return;
    const Be = Jt[K[O(153)]], Fe = u[O(360)], ct = g[O(360)], pe = Fe[O(313) + O(401) + "t"](), He = ct[O(313) + O(401) + "t"](), Ne = 3;
    let Rt, gt;
    const Pt = pe[O(266)] - He[O(266)], Tn = pe[O(388)] - He[O(388)];
    if (K[O(153)][O(261)](O(200))) {
      const { touches: ft, changedTouches: vt } = K, dt = ft[0] ?? vt[0];
      Rt = dt[O(303)], gt = dt[O(343)];
    } else K[O(153)][O(261)](O(301)) && (Rt = K[O(220)], gt = K[O(329)]);
    if (Be == Jt[O(282)])
      if (O(339) !== O(356)) {
        c[O(392)]({ ...c[O(312)], isDown: !0 }), m(Rt - He[O(263)]), h(gt - He[O(325)]);
        const ft = {};
        ft[O(265)] = 1, ft[O(130)] = O(135);
        const vt = { ...C, ...ft };
        B(vt), y(performance[O(275)]());
      } else se && (ke[O(360)] = $), Ce();
    else if (Be == Jt[O(328)]) {
      if (c[O(312)][O(284)] == !1) return;
      let ft = Rt - d - pe[O(263)], vt = gt - x - pe[O(325)];
      ft = Math[O(169)](Ne, Math[O(218)](ft, Pt) - Ne), vt = Math[O(169)](Ne, Math[O(218)](vt, Tn) - Ne);
      const dt = {};
      dt[O(325)] = vt + "px", dt[O(263)] = ft + "px";
      const Yt = { ...Y, ...dt };
      ne(Yt);
      const yt = {};
      yt.x = ft, yt.y = vt, be[O(360)] = yt;
    } else if (Be == Jt[O(244)]) {
      const ft = performance[O(275)]() - v;
      if (w == Jt[O(282)] || ft < 100) {
        const jt = {};
        jt[O(291)] = !0, jt[O(284)] = !1, c[O(392)]({ ...c[O(312)], ...jt });
      } else c[O(392)]({ ...c[O(312)], isDown: !1 });
      const vt = be[O(360)].x > Pt / 2 ? Pt - Ne : Ne, dt = {};
      dt[O(263)] = vt + "px";
      const Yt = { ...Y, ...dt };
      ne(Yt);
      const yt = {};
      yt[O(265)] = 0.3, yt[O(130)] = O(115);
      const pn = { ...C, ...yt };
      B(pn);
    }
    S(Be), ct[O(366)]();
  }, ve = async (K) => {
    const O = e;
    K[O(201) + O(352)]();
    const Be = K[O(258)][O(243)](O(162))[O(198) + "te"](O(124));
    if (Be === O(267))
      dl() ? Lv() : Mv(i);
    else {
      const Fe = {};
      Fe[O(133)] = O(238) + O(326), Fe[O(246)] = Be, Fe[O(219)] = "";
      const ct = Fe;
      if (Be === O(316) && (O(215) === O(215) ? ct[O(219)] = await navigator[O(118)][O(341)]() : _()), Be === O(335))
        if (O(192) === O(411)) {
          const pe = { ...Fe[O(312)] };
          pe[O(284)] = !1, ue[O(392)](pe);
        } else ct[O(310)] = O(184) + "py";
      a(ea, ct);
    }
    c[O(392)]({ ...c[O(312)], showMenu: !1 }), T[O(360)][O(366)]();
  }, ye = (K) => {
    const O = e;
    if (O(194) === O(194)) {
      const Be = dl();
      a(Pv, Be);
    } else fe[O(264) + O(412)](se, ge);
  };
  wt(() => {
    const K = e;
    K(117) === K(117) ? requestAnimationFrame(() => {
      const O = K, Be = { ...Ee };
      Be[O(265)] = c[O(312)][O(291)] ? 1 : 0, he(Be);
    }) : ue[K(264) + K(412)](K(137), fe);
  }, [c]), wt(() => {
    const K = e;
    if (K(382) !== K(380)) {
      const O = u[K(360)], Be = [K(267) + K(400), K(333) + K(413) + "ge", K(136) + K(293), K(286) + K(126)];
      return O && Be[K(409)]((Fe) => {
        const ct = K;
        O[ct(264) + ct(412)](Fe, ye);
      }), () => {
        const Fe = K;
        Fe(259) === Fe(317) ? ue[Fe(360)] = fe : O && O[Fe(171) + Fe(308)](Fe(137), ye);
      };
    } else _[K(310)] = K(184) + "py";
  }, []), wt(() => {
    const K = e;
    if (K(399) !== K(236)) {
      const O = g[K(360)], Be = T[K(360)];
      if (Be && Be[K(264) + K(412)](K(137), ve), O) {
        const Fe = {};
        Fe[K(173)] = !1;
        const ct = Fe;
        return s ? K(278) !== K(278) ? Fe[K(171) + K(308)](se, ge) : (O[K(264) + K(412)](K(344), me, ct), O[K(264) + K(412)](K(262), me, ct), O[K(264) + K(412)](K(350), me)) : [K(328), K(282), K(244)][K(409)]((pe) => {
          const He = K;
          O[He(264) + He(412)](pe, me);
        }), () => {
          const pe = K;
          if (pe(125) !== pe(125)) [pe(328), pe(282), pe(244)][pe(409)]((He) => {
            const Ne = pe;
            se[Ne(171) + Ne(308)](He, ge);
          });
          else if (Be && Be[pe(171) + pe(308)](pe(137), ve), O)
            if (pe(163) !== pe(163)) se(() => {
              const He = pe, Ne = { ...$ };
              Ne[He(265)] = X[He(312)][He(291)] ? 1 : 0, ke(Ne);
            });
            else if (s)
              if (pe(112) !== pe(408)) [pe(344), pe(262), pe(350)][pe(409)]((He) => {
                const Ne = pe;
                O[Ne(171) + Ne(308)](He, me);
              });
              else {
                if (It[pe(312)][pe(284)] == !1) return;
                let He = mt - _t - $e[pe(263)], Ne = He - at - Nt[pe(325)];
                He = Ot[pe(169)](un, fn[pe(218)](He, Ne) - dn), Ne = hn[pe(169)](n, r[pe(218)](Ne, i) - s);
                const Rt = {};
                Rt[pe(325)] = Ne + "px", Rt[pe(263)] = He + "px";
                const gt = { ...c, ...Rt };
                a(gt);
                const Pt = {};
                Pt.x = He, Pt.y = Ne, u[pe(360)] = Pt;
              }
            else [pe(328), pe(282), pe(244)][pe(409)]((He) => {
              const Ne = pe;
              O[Ne(171) + Ne(308)](He, me);
            });
        };
      }
    } else fe[K(264) + K(412)](se, ge);
  }, [s, me]);
  const xe = () => {
    const K = e, O = {};
    O[K(375)] = 999, O[K(388)] = te[K(360)] == K(225) ? K(235) : null, O[K(266)] = te[K(360)] != K(225) ? K(235) : null, O[K(325)] = K(240), O[K(404)] = K(159), ne(O);
  };
  El(r, () => ({ fixTouch: (K) => {
    const O = e;
    if (K)
      if (O(377) !== O(377)) {
        const Be = { ...F[O(312)] };
        Be[O(284)] = !0, Q[O(392)](Be), re(tt - ee[O(263)]), Se(Ve - At[O(325)]);
        const Fe = {};
        Fe[O(265)] = 1, Fe[O(130)] = O(135);
        const ct = { ...mt, ...Fe };
        It(ct), _t($e[O(275)]());
      } else te[O(360)] = K;
    xe();
  }, setFullscreen: (K) => {
    const O = e;
    O(257) !== O(353) ? ie(K) : se() ? X() : ke($);
  } }));
  const fe = {};
  fe[e(151)] = e(154) + e(403) + "1)";
  const se = {};
  se.d = le ? e(176) + e(229) + e(349) + e(373) + e(242) + e(205) + e(311) : e(287) + e(167) + e(347) + e(268) + e(390) + e(174) + e(214);
  const ge = {};
  ge[e(387)] = e(351);
  const Pe = {};
  Pe[e(151)] = e(154) + e(403) + "1)";
  const Ce = {};
  Ce.d = e(223) + e(294) + e(260) + e(369) + e(158) + e(234) + e(338) + e(307) + e(241) + e(321) + e(348) + e(297) + e(254) + e(337) + e(336) + e(269) + e(141) + e(138) + e(197) + e(370) + e(327);
  const ke = {};
  ke.d = e(334) + e(152) + e(139);
  const $ = {};
  $[e(387)] = e(406);
  const X = {};
  X[e(151)] = e(154) + e(403) + "1)";
  const q = {};
  q.d = e(149) + e(172) + e(393) + e(273) + e(306) + e(300) + e(369) + e(158) + e(371) + e(338) + e(407) + e(338) + e(161) + e(146) + e(227) + e(346) + e(397) + e(121) + e(237) + e(129) + e(179) + e(239) + e(385) + e(210);
  const Q = {};
  Q[e(387)] = e(164);
  const F = {};
  F[e(151)] = e(154) + e(403) + "1)";
  const re = {};
  re.d = e(122) + e(165) + e(158) + e(143) + e(338) + e(307) + e(241) + e(365) + e(346) + e(295) + e(277) + e(330) + e(395);
  const tt = {};
  tt.cx = e(288), tt.cy = "18", tt.r = "1";
  const ee = {};
  ee[e(387)] = e(f ? 379 : 166);
  const Se = {};
  Se[e(151)] = e(154) + e(403) + "1)";
  const Ve = {};
  Ve.d = e(233) + e(285) + e(230) + e(120) + e(378) + e(212) + e(147) + e(281) + e(193) + e(253) + e(148) + e(256);
  const At = {};
  At.d = e(221) + e(228) + e(217) + e(119) + e(190) + e(140) + e(358) + e(182) + e(204) + e(191) + e(384) + e(345) + e(168) + e(364) + e(185) + e(386) + e(116) + e(251) + e(207) + e(160) + e(383) + e(189) + e(199) + e(340) + e(248) + e(195) + e(208) + e(196) + e(145) + e(283) + e(255) + e(123) + e(270) + e(222) + e(272) + e(252) + e(324) + e(323) + e(127);
  const It = {};
  It[e(387)] = e(183);
  const mt = {};
  mt[e(151)] = e(154) + e(403) + "1)";
  const _t = {};
  _t.d = e(132) + e(202) + e(144) + e(247) + e(367) + e(309) + e(368) + e(180) + e(315) + e(249) + e(209) + e(391) + e(250) + e(410) + e(299) + e(292) + e(157) + e(394) + e(361) + e(226) + e(376) + e(203) + e(320) + e(216) + e(274) + e(280);
  const $e = {};
  $e[e(387)] = e(187);
  const We = {};
  We[e(151)] = e(154) + e(403) + "1)";
  const at = {};
  at.d = e(232) + e(342) + e(150) + e(405);
  const Nt = {};
  Nt[e(387)] = e(331);
  const Ot = {};
  Ot[e(151)] = e(154) + e(403) + "1)";
  const un = {};
  un.d = e(181) + e(231) + e(396) + e(398) + e(357) + e(213) + e(206) + e(142) + e(155);
  const fn = {};
  fn[e(387)] = e(245);
  const Vn = {};
  Vn[e(151)] = e(154) + e(403) + "1)";
  const dn = {};
  dn.d = e(381) + e(114) + e(279) + e(276) + e(309) + e(302) + e(296) + e(186) + e(178);
  const hn = {};
  return hn[e(387)] = e(322), ae.jsxs(ae.Fragment, { children: [c[e(312)][e(291)] ? ae.jsxs(_v, { id: e(354) + e(290) + i, style: Ee, ref: T, children: [ae.jsxs(nn, { "data-id": e(267), children: [ae.jsx(e(355), { xmlns: e(156) + e(305) + e(363), width: "28", height: "28", viewBox: e(113), style: fe, children: ae.jsx(e(319), se) }), ae.jsx(rn, ge)] }), ae.jsxs(nn, { "data-id": e(335), children: [ae.jsxs(e(355), { xmlns: e(156) + e(305) + e(363), width: "28", height: "28", viewBox: e(113), style: Pe, children: [ae.jsx(e(319), Ce), ae.jsx(e(319), ke)] }), ae.jsx(rn, $)] }), ae.jsxs(nn, { "data-id": e(316), children: [ae.jsx(e(355), { xmlns: e(156) + e(305) + e(363), width: "28", height: "28", viewBox: e(113), style: X, children: ae.jsx(e(319), q) }), ae.jsx(rn, Q)] }), ae.jsxs(nn, { "data-id": e(314), children: [ae.jsxs(e(355), { xmlns: e(156) + e(305) + e(363), width: "28", height: "28", viewBox: e(113), style: F, children: [ae.jsx(e(319), re), ae.jsx(e(318), tt)] }), ae.jsx(rn, ee)] }), ae.jsxs(nn, { "data-id": e(359), children: [ae.jsxs(e(355), { xmlns: e(156) + e(305) + e(363), width: "25", height: "25", viewBox: e(113), style: Se, children: [ae.jsx(e(319), Ve), ae.jsx(e(319), At)] }), ae.jsx(rn, It)] }), ae.jsxs(nn, { "data-id": e(131), children: [ae.jsx(e(355), { xmlns: e(156) + e(305) + e(363), width: "28", height: "28", viewBox: e(113), style: mt, children: ae.jsx(e(319), _t) }), ae.jsx(rn, $e)] }), ae.jsxs(nn, { "data-id": e(389), children: [ae.jsx(e(355), { xmlns: e(156) + e(305) + e(363), width: "28", height: "28", viewBox: e(113), style: We, children: ae.jsx(e(319), at) }), ae.jsx(rn, Nt)] }), ae.jsxs(nn, { "data-id": e(188), children: [ae.jsx(e(355), { xmlns: e(156) + e(305) + e(363), width: "28", height: "28", viewBox: e(113), style: Ot, children: ae.jsx(e(319), un) }), ae.jsx(rn, fn)] }), ae.jsxs(nn, { "data-id": e(224), children: [ae.jsx(e(355), { xmlns: e(156) + e(305) + e(363), width: "28", height: "28", viewBox: e(113), style: Vn, children: ae.jsx(e(319), dn) }), ae.jsx(rn, hn)] })] }) : null, ae.jsx(jv, { id: e(354) + e(175) + "s_" + i, className: e(372), ref: A, style: C, children: ae.jsx(Nv, { style: Y, src: Iv, className: e(372), id: e(354) + e(170) + i, alt: e(374), ref: g, draggable: !1 }) })] });
});
function sr(n, r) {
  const e = Jo();
  return sr = function(i, s) {
    return i = i - 397, e[i];
  }, sr(n, r);
}
const Qe = sr;
function Jo() {
  const n = ["KbgQb", "1642EVGOON", "rftHY", "rLatency", "Decoder er", "isKeyFrame", "iframe", "resizedWid", "close", "setFullscr", "buildDecod", "clearRect", "innerHeigh", "scale", "PvISd", "translate", "lock", "78ugXeGR", "length", "portrait", "prefer-har", "width", "Yoelk", "ckKZO", "ctx", "height", "error", "setOrienta", "state", "setIsConne", "ror:", "delta", "concat", "landscape", "orientatio", "codec", "autoResize", "1992214oiBvoy", "XIoSL", "round", "optimizeFo", "isPlay", "AAErR", "configure", "YVnIf", "100WkcRTD", "celeration", "779165aptdWi", "concatUint", "rootSize", "rotate", "Lotgp", "872940MOaRyz", "NVAzr", "drawImage", "canvas", "avc1.64001", "codedHeigh", "158271reYHbs", "hardwareAc", "11HMIPEu", "maxWidth", "adGWs", "decode", "from", "decoder", "6851529mNCUCL", "videoMeta", "setVideoMe", "gSWhb", "tion", "isMobile", "key", "4810380GegOXz", "getContext", "codedWidth", "44NDgRgx", "now", "dware", "een", "8jsBHqI", "8Arrays", "JPwpH", "18kPiLxL"];
  return Jo = function() {
    return n;
  }, Jo();
}
(function(n, r) {
  const e = sr, i = n();
  for (; ; )
    try {
      if (-parseInt(e(476)) / 1 * (-parseInt(e(432)) / 2) + -parseInt(e(405)) / 3 * (parseInt(e(423)) / 4) + parseInt(e(478)) / 5 * (parseInt(e(430)) / 6) + -parseInt(e(468)) / 7 * (-parseInt(e(427)) / 8) + -parseInt(e(413)) / 9 + -parseInt(e(420)) / 10 * (-parseInt(e(407)) / 11) + -parseInt(e(399)) / 12 * (-parseInt(e(448)) / 13) === r) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(Jo, 410101);
var hl, pl, xl, ml, gl, vl, yl, bl, Sl;
Sl = Qe(440) + Qe(426), bl = Qe(438) + "th", yl = Qe(458) + Qe(417), vl = Qe(467), gl = Qe(415) + "ta", ml = Qe(441) + "er", xl = Qe(436), pl = Qe(479) + Qe(428), hl = Qe(410);
class Bv {
  constructor(r, e, i, s) {
    Gt(this, Sl, (r) => {
      const e = Qe;
      if (r) {
        const i = window[e(443) + "t"] + 10, s = this[e(438) + "th"](null, this[e(480)][e(452)], this[e(480)][e(456)], i, i);
        this[e(452)] = s[e(452)], this[e(456)] = s[e(456)];
      } else e(400) !== e(400) ? o[e(465) + "n"][e(447)](k) : (this[e(452)] = this[e(480)][e(452)], this[e(456)] = this[e(480)][e(456)]);
    });
    Gt(this, bl, (r, e, i, s, a) => {
      const c = Qe;
      let u;
      return r && s > this[c(408)] && i > e && (a = this[c(408)]), a && (u = a / e * i, u > s && (c(469) === c(416) ? (this[c(402)][c(452)] = this[c(452)], this[c(402)][c(456)] = this[c(456)], this[c(455)][c(401)](e, 0, 0, this[c(452)], this[c(456)])) : (a = s / i * e, u = s / e * e))), { width: Math[c(470)](a), height: Math[c(470)](u) };
    });
    Gt(this, yl, (r) => {
      const e = Qe;
      if (this[e(465) + "n"] = r, this[e(418)])
        if (e(431) === e(475)) {
          if (!this[e(412)] || this[e(412)][e(459)] == e(439) || !this[e(414)]) return;
          let i = N instanceof I ? E : new l(D);
          const s = this[e(436)](i);
          s && (this[e(437)] = i), this[e(437)] && this[e(414)] && (!this[e(472)] && (i = this[e(479) + e(428)](this[e(414)], this[e(437)]), this[e(472)] = !0), this[e(412)][e(410)](new G({ timestamp: z[e(424)]() * 1e3, type: e(s ? 419 : 462), data: i })));
        } else screen[e(465) + "n"][e(447)](r);
    });
    Gt(this, vl, (r, e) => {
      var u;
      const i = Qe, s = this[i(418)] == !0 ? window[i(443) + "t"] - 12 : window[i(443) + "t"] - 50, a = this[i(438) + "th"](!0, r, e, s, s);
      if (this[i(452)] = a[i(452)], this[i(456)] = a[i(456)], !this[i(480)])
        if (i(433) === i(454)) {
          const f = r[i(443) + "t"] + 10, d = this[i(438) + "th"](null, this[i(480)][i(452)], this[i(480)][i(456)], f, f);
          this[i(452)] = d[i(452)], this[i(456)] = d[i(456)];
        } else (u = this[i(460) + "ct"]) == null || u.call(this, !0);
      const c = {};
      c[i(452)] = a[i(452)], c[i(456)] = a[i(456)], this[i(480)] = c;
    });
    Gt(this, gl, (r) => {
      const e = Qe, i = r instanceof Uint8Array ? r : new Uint8Array(r);
      this[e(414)] = i;
    });
    Gt(this, ml, () => {
      const r = Qe, e = new VideoDecoder({ output: async (s) => {
        const a = sr;
        if (a(398) === a(409)) this[a(452)] = this[a(480)][a(452)], this[a(456)] = this[a(480)][a(456)];
        else {
          const c = await createImageBitmap(s);
          (!this[a(452)] || !this[a(456)]) && this[a(467)](s[a(422)], s[a(404) + "t"]), this[a(455)][a(442)](0, 0, this[a(452)], this[a(456)]), this[a(465) + "n"] == a(464) ? a(445) === a(445) ? (this[a(402)][a(452)] = this[a(456)], this[a(402)][a(456)] = this[a(452)], this[a(455)][a(446)](0, this[a(452)]), this[a(455)][a(397)](Math.PI / 2), this[a(455)][a(444)](-1, -1), this[a(455)][a(401)](c, 0, 0, this[a(452)], this[a(456)])) : (!this[a(472)] && (l = this[a(479) + a(428)](this[a(414)], this[a(437)]), this[a(472)] = !0), this[a(412)][a(410)](new W({ timestamp: N[a(424)]() * 1e3, type: I ? a(419) : a(462), data: E }))) : (this[a(402)][a(452)] = this[a(452)], this[a(402)][a(456)] = this[a(456)], this[a(455)][a(401)](c, 0, 0, this[a(452)], this[a(456)])), c[a(439)](), s[a(439)]();
        }
      }, error: (s) => console[r(457)](r(435) + r(461), s) }), i = {};
      return i[r(466)] = r(403) + "E", i[r(406) + r(477)] = r(451) + r(425), i[r(471) + r(434)] = !0, e[r(474)](i), e;
    });
    Gt(this, xl, (r) => {
      var i;
      const e = Qe;
      for (let s = 0; s <= r[e(449)] - 4; s++)
        if (e(429) !== e(453)) {
          if (r[s] === 0 && r[s + 1] === 0 && r[s + 2] === 0 && r[s + 3] === 1)
            return (r[s + 4] & 31) === 5;
        } else {
          const a = this[e(418)] == !0 ? a[e(443) + "t"] - 12 : c[e(443) + "t"] - 50, c = this[e(438) + "th"](!0, u, N, a, a);
          this[e(452)] = c[e(452)], this[e(456)] = c[e(456)], !this[e(480)] && ((i = this[e(460) + "ct"]) == null || i.call(this, !0));
          const u = {};
          u[e(452)] = c[e(452)], u[e(456)] = c[e(456)], this[e(480)] = u;
        }
      for (let s = 0; s <= r[e(449)] - 3; s++)
        if (r[s] === 0 && r[s + 1] === 0 && r[s + 2] === 1) {
          if (e(473) === e(473))
            return (r[s + 3] & 31) === 5;
          if (l[D] === 0 && p[V + 1] === 0 && G[z + 2] === 0 && Z[R + 3] === 1)
            return (j[t + 4] & 31) === 5;
        }
      return !1;
    });
    Gt(this, pl, (r, e) => {
      const i = Qe, s = Array[i(411)](r)[i(463)](Array[i(411)](e));
      return new Uint8Array(s);
    });
    Gt(this, hl, (r) => {
      const e = Qe;
      if (!this[e(412)] || this[e(412)][e(459)] == e(439) || !this[e(414)]) return;
      let i = r instanceof Uint8Array ? r : new Uint8Array(r);
      const s = this[e(436)](i);
      s && (this[e(437)] = i), this[e(437)] && this[e(414)] && (!this[e(472)] && (i = this[e(479) + e(428)](this[e(414)], this[e(437)]), this[e(472)] = !0), this[e(412)][e(410)](new EncodedVideoChunk({ timestamp: performance[e(424)]() * 1e3, type: e(s ? 419 : 462), data: i })));
    });
    const a = sr;
    this[a(402)] = r, this[a(408)] = e, this[a(418)] = i, this[a(460) + "ct"] = s, this[a(455)] = r[a(421)]("2d"), this[a(412)] = this[a(441) + "er"](), this[a(414)] = null, this[a(437)] = null, this[a(472)] = null, this[a(452)] = null, this[a(456)] = null, this[a(480)] = null, this[a(465) + "n"] = a(450);
  }
}
(function(n, r) {
  const e = Br, i = n();
  for (; ; )
    try {
      if (parseInt(e(621)) / 1 * (parseInt(e(573)) / 2) + -parseInt(e(502)) / 3 + parseInt(e(513)) / 4 + parseInt(e(596)) / 5 + parseInt(e(605)) / 6 + -parseInt(e(623)) / 7 + -parseInt(e(595)) / 8 === r) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(ei, 119081);
function Br(n, r) {
  const e = ei();
  return Br = function(i, s) {
    return i = i - 498, e[i];
  }, Br(n, r);
}
function ei() {
  const n = ["disconnect", "passwd", "yQAnf", "removeEven", "draggable", "code", "info", "isMobile", "reconnecti", "een", "WUrcw", "action", "headers", "fRwVS", "set", "current", "test", "false", "eWzfd", "type", "MHAkS", "writeText", "enElement", "screenElem", "orientatio", "eenElement", "screen_mai", "Timeout wa", "zhCzs", "shortcut", "dPQHt", "fixTouch", "tabIndex", "screen", "connection", "UtmqE", "applicatio", "2RBEFsB", "sync", "children", "LzoBP", " closed co", "mOdQc", "ror", "Element", "message", "IfRdM", "post", "image_", "kPkdF", "meta", "mGmXS", "get_video_", "msg", "text", "ent", "large", "mozFullScr", "dlzOn", "1080856oJdsvO", "1155635yIvCGL", "status", "get", "msFullscre", "setFullscr", "size", "shortcutEv", "marginTop", "de: ", "1109520fldvji", "setOrienta", "hythc", "decode", "connect_er", "eLFWP", "response", "iting for ", "control", "showMenu", "data", "tion", "clipboard", "timeout", "screen_", "password", "7507eFVyhA", "addEventLi", "171178YJBpLM", "mNeSA", "stener", "jmDzY", "setVideoMe", "taskId", "video_meta", "value", "iframe", "gdRsp", "length", "userAgent", "JxFeD", "591270GZyPfL", "error", "Content-Ty", "change", "ISpqn", "dEMCm", "type_clien", "UFAHy", "tListener", "NCzgf", "COPY_TEXT", "208712rUDmgI", "delete", "isDown", "height", "onSyncIFra", "middle", "method", "center", "FmIsx", "connect", "onScreenEv", "mSXtg", "fullscreen", "url", "join_room", "UGQhC", "n/json", "webkitFull", "GJBbA", "device_id", "emit", "width", "map"];
  return ei = function() {
    return n;
  }, ei();
}
const cy = wl((n, r) => {
  const e = Br, { serve: i, dataDevice: s, maxWidth: a, showAssistive: c, showDeviceId: u, syncEvent: f, syncButton: d } = n, m = s[e(532)], x = /iPhone|iPad|iPod|Android/i[e(552)](navigator[e(500)]), h = e(613), w = st(null), S = st(null), v = st(null), [y, A] = St(null), [T, g] = St(null), M = {};
  M[e(614)] = !1, M[e(515)] = !1;
  const [C, B] = St(M), [_, Y] = St(null), ne = e(584) + m, ue = e(619) + m, Ee = e(562) + "n_" + m, he = st(null), [te, le] = St([]), ie = st(null), be = st(/* @__PURE__ */ new Map());
  wt(() => {
    g(u);
  }, [u]);
  const me = ($) => {
    le((X) => [...X, $]);
  }, ve = ($) => {
    const X = e;
    X(578) === X(509) ? xe(fe) : (w[X(551)][X(533)](X(581), $), f == null || f($));
  };
  El(r, () => ({ api: async function($, X = 5e3) {
    const q = e;
    if (q(546) !== q(624)) return new Promise((Q, F) => {
      const re = q, tt = setTimeout(() => {
        const ee = Br;
        be[ee(551)][ee(514)]($[ee(628)]);
        const Se = {};
        Se[ee(547)] = $[ee(547)], Se[ee(628)] = $[ee(628)], Se[ee(597)] = !1, Se[ee(581)] = ee(563) + ee(612) + ee(611), F(Se);
      }, X);
      be[re(551)][re(550)]($[re(628)], (ee) => {
        const Se = re;
        if (Se(528) === Se(521)) {
          const Ve = Ce[Se(525) + Se(580)] || ke[Se(530) + Se(559) + Se(591)] || n[Se(593) + Se(561)] || r[Se(599) + Se(558)];
          i[Se(551)][Se(600) + Se(545)](!!Ve), s[Se(551)][Se(600) + Se(545)](!!Ve), a[Se(551)][Se(567)]();
        } else clearTimeout(tt), Q(ee);
      }), w[re(551)][re(533)](re(581), $);
    });
    se(ge), Pe(Ce);
  }, sync: function($) {
    const X = e;
    w[X(551)][X(533)](X(581), $);
  } })), wt(() => {
    const $ = e;
    $(556) === $(556) ? (async () => {
      const X = $;
      try {
        if (X(564) !== X(566)) {
          const q = {};
          q[X(504) + "pe"] = X(572) + X(529);
          const Q = {};
          Q[X(532)] = s[X(532)], Q[X(620)] = s[X(537)];
          const F = {};
          F[X(526)] = i, F[X(519)] = X(583), F[X(618)] = 1e4, F[X(548)] = q, F[X(615)] = Q;
          const re = F, tt = await Ev(re);
          A(tt[X(615)]);
        } else {
          const q = {};
          q[X(589)] = X(570) + X(577) + X(604) + fe[X(541)], q[X(555)] = X(542), xe(q);
        }
      } catch (q) {
        if (X(587) === X(610)) xe[X(551)][X(533)](X(581), fe);
        else {
          const Q = {};
          Q[X(589)] = q, Q[X(555)] = X(503), me(Q);
        }
      }
    })() : xe[$(551)][$(608)](fe);
  }, []), wt(() => {
    const $ = e;
    if (w[$(551)] || !y) return;
    const X = {};
    X[$(544) + "on"] = !1;
    const q = yo(y, X);
    return q.on($(522), () => {
      const Q = $, F = {};
      F[Q(547)] = Q(522), F[Q(508) + "t"] = h, F[Q(532)] = s[Q(532)], F[Q(543)] = x, F[Q(537)] = s[Q(537)], q[Q(533)](Q(527), F);
    }), q.on($(527), (Q) => {
      const F = $;
      if (F(582) !== F(582)) xe && se[F(536)]();
      else if (Q[F(597)] == !0) {
        w[F(551)] = q;
        const re = {};
        re[F(547)] = F(523) + F(591), q[F(533)](F(581), re);
      } else if (F(571) !== F(571)) {
        const re = Pe[F(551)];
        Ce[F(551)] = new ke(re, n, r, i);
      } else {
        const re = {};
        re[F(589)] = Q[F(589)], re[F(555)] = F(503), me(re);
      }
    }), q.on($(569), (Q) => {
      const F = $;
      ie[F(551)][F(608)](Q);
    }), q.on($(629), (Q) => {
      const F = $;
      if (Q) {
        if (F(538) === F(498)) {
          const re = { ...re };
          re[F(614)] = !1, xe(re);
        } else if (ie[F(551)][F(627) + "ta"](Q), !ie[F(551)][F(631)])
          if (F(554) === F(531)) xe[F(617)][F(557)](fe[F(590)]);
          else {
            const re = {};
            re[F(547)] = F(517) + "me", q[F(533)](F(581), re);
          }
      } else {
        const re = {};
        re[F(547)] = F(588) + F(586), q[F(533)](F(629), re);
      }
    }), q.on($(581), (Q) => {
      const F = $;
      if ((Q[F(547)] == F(512) || Q[F(547)] == F(602) + F(591)) && Q[F(590)][F(499)] > 0 ? navigator[F(617)][F(557)](Q[F(590)]) : Q[F(547)] == F(560) + "n" && (F(607) !== F(607) ? X[F(536)]() : (ie[F(551)][F(606) + F(616)](Q[F(630)]), he[F(551)][F(567)](Q[F(630)]))), Q[F(628)]) {
        const re = be[F(551)][F(598)](Q[F(628)]);
        re && (re(Q), be[F(551)][F(514)](Q[F(628)]));
      }
    }), q.on($(609) + $(579), (Q) => {
      const F = $, re = {};
      re[F(589)] = Q, re[F(555)] = F(503), me(re);
    }), q.on($(536), (Q) => {
      const F = $, re = {};
      re[F(589)] = F(570) + F(577) + F(604) + Q[F(541)], re[F(555)] = F(542), me(re);
    }), () => {
      const Q = $;
      Q(501) !== Q(507) ? q && q[Q(536)]() : xe((F) => [...F, se]);
    };
  }, [y]), wt(() => {
    const $ = e, X = v[$(551)];
    ie[$(551)] = new Bv(X, a, x, Y);
  }, []), wt(() => {
    const $ = e;
    if ($(524) === $(585))
      s === a && c[$(565)] === $(532) ? y(!A) : d === m && x[$(565)] === $(574) ? T(g[$(532)]) : M(C);
    else {
      const X = () => {
        const q = $;
        if (q(576) === q(594))
          if (Pe[q(597)] == !0) {
            s[q(551)] = a;
            const Q = {};
            Q[q(547)] = q(523) + q(591), c[q(533)](q(581), Q);
          } else {
            const Q = {};
            Q[q(589)] = f[q(589)], Q[q(555)] = q(503), u(Q);
          }
        else {
          const Q = document[q(525) + q(580)] || document[q(530) + q(559) + q(591)] || document[q(593) + q(561)] || document[q(599) + q(558)];
          ie[q(551)][q(600) + q(545)](!!Q), he[q(551)][q(600) + q(545)](!!Q), he[q(551)][q(567)]();
        }
      };
      return document[$(622) + $(625)]($(525) + $(505), X), () => {
        const q = $;
        document[q(539) + q(510)](q(525) + q(505), X);
      };
    }
  }, []);
  const ye = {};
  ye[e(575)] = s[e(532)];
  const xe = {};
  xe[e(601)] = e(592);
  const fe = {};
  fe[e(601)] = e(592);
  const se = {};
  se[e(601)] = e(592);
  const ge = {};
  ge[e(516)] = 0, ge[e(534)] = 0;
  const Pe = {};
  Pe[e(598)] = C, Pe[e(550)] = B;
  const Ce = {};
  Ce.id = ne, Ce[e(568)] = "0", Ce[e(540)] = e(553);
  const ke = {};
  return ke[e(603)] = 5, ae.jsxs(_0, { id: Ee, children: [T && ae.jsx(L0, { children: ae.jsx(M0, ye) }), te[e(499)] == 0 ? ae.jsxs(ae.Fragment, { children: [!_ && ae.jsxs(Df, { align: e(520), gap: e(518), children: [ae.jsx(kr, xe), ae.jsx(kr, fe), ae.jsx(kr, se)] }), ae.jsxs(N0, { ref: S, id: ue, style: _ ? {} : ge, children: [c ? ae.jsx(Dv, { status: Pe, ref: he, imageRef: v, displayId: m, isMobile: x, isShowDeviceId: T, onSenData: ($, X) => {
    const q = e;
    q(626) === q(549) ? xe(fe) : $ === ea && X[q(565)] === q(532) ? g(!T) : $ === ea && X[q(565)] === q(574) ? d(s[q(532)]) : ve(X);
  } }) : null, ae.jsx(kv, { canvasContent: Ce, imageRef: v, isMobile: x, assistive: C, onImgEvent: ($, X) => {
    const q = e;
    if (q(511) !== q(506))
      if ($ === dd) {
        const Q = { ...C };
        Q[q(614)] = !1, B(Q);
      } else ve(X);
    else {
      const Q = {};
      Q[q(589)] = fe, Q[q(555)] = q(503), xe(Q);
    }
  } })] })] }) : te[e(535)](($, X) => ae.jsx(Nf, { style: ke, message: $[e(589)], type: $[e(555)], showIcon: !0, closable: !0 }, X))] });
});
function ti() {
  var n = ["2018475GupqfX", "243qBoopr", "3412194DFmGrj", "2GjwAUD", "85048bGcSwc", "1478904zdOGpC", "436804ZLpJFf", "1782948xhoZYh", "1636700DlPJoH", "7ykZKVv"];
  return ti = function() {
    return n;
  }, ti();
}
function ta(n, r) {
  var e = ti();
  return ta = function(i, s) {
    i = i - 346;
    var a = e[i];
    return a;
  }, ta(n, r);
}
(function(n, r) {
  for (var e = ta, i = n(); ; )
    try {
      var s = -parseInt(e(355)) / 1 * (-parseInt(e(348)) / 2) + parseInt(e(349)) / 3 + parseInt(e(347)) / 4 + -parseInt(e(352)) / 5 + -parseInt(e(354)) / 6 * (parseInt(e(351)) / 7) + parseInt(e(346)) / 8 * (-parseInt(e(353)) / 9) + parseInt(e(350)) / 10;
      if (s === r) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(ti, 305085);
export {
  cy as ViewRP
};
