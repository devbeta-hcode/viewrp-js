var X0 = Object.defineProperty;
var K0 = (e, t, n) => t in e ? X0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var qe = (e, t, n) => K0(e, typeof t != "symbol" ? t + "" : t, n);
import * as w from "react";
import q, { useDebugValue as Sc, createElement as Z0, useRef as Ee, useContext as _t, createContext as di, useEffect as Ke, isValidElement as J0, version as Q0, useLayoutEffect as eh, forwardRef as rr, useState as ft, useMemo as kr, Children as th, useImperativeHandle as Tu } from "react";
import * as Ru from "react-dom";
import Cc from "react-dom";
var Er = Bo;
function Bo(e, t) {
  var n = zo();
  return Bo = function(r, o) {
    r = r - 397;
    var i = n[r];
    return i;
  }, Bo(e, t);
}
(function(e, t) {
  for (var n = Bo, r = e(); ; )
    try {
      var o = -parseInt(n(408)) / 1 + parseInt(n(429)) / 2 + parseInt(n(409)) / 3 * (parseInt(n(428)) / 4) + -parseInt(n(415)) / 5 + parseInt(n(397)) / 6 * (-parseInt(n(405)) / 7) + -parseInt(n(400)) / 8 * (parseInt(n(407)) / 9) + -parseInt(n(419)) / 10 * (-parseInt(n(406)) / 11);
      if (o === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(zo, 687056);
typeof globalThis !== Er(425) || typeof window !== Er(425) || (typeof global !== Er(425) ? global : Er(425));
function zo() {
  var e = ["vBVpP", "7603112UTNySo", "get", "value", "call", "erty", "1043SNkkye", "2430681khFutM", "9MYSgNN", "852326RGIyPK", "18093WBCKlf", "forEach", "function", "hasOwnProp", "MYaON", "getOwnProp", "6505940YFQCTI", "defineProp", "constructo", "ptor", "110iDglRD", "construct", "__esModule", "enumerable", "ertyDescri", "fAkkG", "undefined", "TesPw", "length", "884PCLSMi", "629696kwWUDo", "default", "keys", "prototype", "11574QACnkN", "apply"];
  return zo = function() {
    return e;
  }, zo();
}
function nh(e) {
  var t = Er;
  return e && e[t(421)] && Object[t(432)][t(412) + t(404)][t(403)](e, t(430)) ? e[t(430)] : e;
}
var Jr = { exports: {} }, xr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wc;
function rh() {
  if (wc) return xr;
  wc = 1;
  var e = q, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(a, c, l) {
    var u, d = {}, f = null, v = null;
    l !== void 0 && (f = "" + l), c.key !== void 0 && (f = "" + c.key), c.ref !== void 0 && (v = c.ref);
    for (u in c) r.call(c, u) && !i.hasOwnProperty(u) && (d[u] = c[u]);
    if (a && a.defaultProps) for (u in c = a.defaultProps, c) d[u] === void 0 && (d[u] = c[u]);
    return { $$typeof: t, type: a, key: f, ref: v, props: d, _owner: o.current };
  }
  return xr.Fragment = n, xr.jsx = s, xr.jsxs = s, xr;
}
var gr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ec;
function oh() {
  return Ec || (Ec = 1, process.env.NODE_ENV !== "production" && function() {
    var e = q, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g = Symbol.iterator, h = "@@iterator";
    function x(m) {
      if (m === null || typeof m != "object")
        return null;
      var D = g && m[g] || m[h];
      return typeof D == "function" ? D : null;
    }
    var y = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(m) {
      {
        for (var D = arguments.length, W = new Array(D > 1 ? D - 1 : 0), ie = 1; ie < D; ie++)
          W[ie - 1] = arguments[ie];
        p("error", m, W);
      }
    }
    function p(m, D, W) {
      {
        var ie = y.ReactDebugCurrentFrame, ye = ie.getStackAddendum();
        ye !== "" && (D += "%s", W = W.concat([ye]));
        var Oe = W.map(function(ge) {
          return String(ge);
        });
        Oe.unshift("Warning: " + D), Function.prototype.apply.call(console[m], console, Oe);
      }
    }
    var E = !1, b = !1, T = !1, O = !1, k = !1, F;
    F = Symbol.for("react.module.reference");
    function G(m) {
      return !!(typeof m == "string" || typeof m == "function" || m === r || m === i || k || m === o || m === l || m === u || O || m === v || E || b || T || typeof m == "object" && m !== null && (m.$$typeof === f || m.$$typeof === d || m.$$typeof === s || m.$$typeof === a || m.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      m.$$typeof === F || m.getModuleId !== void 0));
    }
    function oe(m, D, W) {
      var ie = m.displayName;
      if (ie)
        return ie;
      var ye = D.displayName || D.name || "";
      return ye !== "" ? W + "(" + ye + ")" : W;
    }
    function te(m) {
      return m.displayName || "Context";
    }
    function H(m) {
      if (m == null)
        return null;
      if (typeof m.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof m == "function")
        return m.displayName || m.name || null;
      if (typeof m == "string")
        return m;
      switch (m) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case l:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case a:
            var D = m;
            return te(D) + ".Consumer";
          case s:
            var W = m;
            return te(W._context) + ".Provider";
          case c:
            return oe(m, m.render, "ForwardRef");
          case d:
            var ie = m.displayName || null;
            return ie !== null ? ie : H(m.type) || "Memo";
          case f: {
            var ye = m, Oe = ye._payload, ge = ye._init;
            try {
              return H(ge(Oe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var X = Object.assign, Q = 0, N, R, P, j, $, V, Y;
    function re() {
    }
    re.__reactDisabledLog = !0;
    function ee() {
      {
        if (Q === 0) {
          N = console.log, R = console.info, P = console.warn, j = console.error, $ = console.group, V = console.groupCollapsed, Y = console.groupEnd;
          var m = {
            configurable: !0,
            enumerable: !0,
            value: re,
            writable: !0
          };
          Object.defineProperties(console, {
            info: m,
            log: m,
            warn: m,
            error: m,
            group: m,
            groupCollapsed: m,
            groupEnd: m
          });
        }
        Q++;
      }
    }
    function ae() {
      {
        if (Q--, Q === 0) {
          var m = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: X({}, m, {
              value: N
            }),
            info: X({}, m, {
              value: R
            }),
            warn: X({}, m, {
              value: P
            }),
            error: X({}, m, {
              value: j
            }),
            group: X({}, m, {
              value: $
            }),
            groupCollapsed: X({}, m, {
              value: V
            }),
            groupEnd: X({}, m, {
              value: Y
            })
          });
        }
        Q < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var le = y.ReactCurrentDispatcher, ue;
    function _e(m, D, W) {
      {
        if (ue === void 0)
          try {
            throw Error();
          } catch (ye) {
            var ie = ye.stack.trim().match(/\n( *(at )?)/);
            ue = ie && ie[1] || "";
          }
        return `
` + ue + m;
      }
    }
    var me = !1, je;
    {
      var Ne = typeof WeakMap == "function" ? WeakMap : Map;
      je = new Ne();
    }
    function xe(m, D) {
      if (!m || me)
        return "";
      {
        var W = je.get(m);
        if (W !== void 0)
          return W;
      }
      var ie;
      me = !0;
      var ye = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Oe;
      Oe = le.current, le.current = null, ee();
      try {
        if (D) {
          var ge = function() {
            throw Error();
          };
          if (Object.defineProperty(ge.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ge, []);
            } catch (pt) {
              ie = pt;
            }
            Reflect.construct(m, [], ge);
          } else {
            try {
              ge.call();
            } catch (pt) {
              ie = pt;
            }
            m.call(ge.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (pt) {
            ie = pt;
          }
          m();
        }
      } catch (pt) {
        if (pt && ie && typeof pt.stack == "string") {
          for (var pe = pt.stack.split(`
`), ct = ie.stack.split(`
`), Fe = pe.length - 1, Ve = ct.length - 1; Fe >= 1 && Ve >= 0 && pe[Fe] !== ct[Ve]; )
            Ve--;
          for (; Fe >= 1 && Ve >= 0; Fe--, Ve--)
            if (pe[Fe] !== ct[Ve]) {
              if (Fe !== 1 || Ve !== 1)
                do
                  if (Fe--, Ve--, Ve < 0 || pe[Fe] !== ct[Ve]) {
                    var We = `
` + pe[Fe].replace(" at new ", " at ");
                    return m.displayName && We.includes("<anonymous>") && (We = We.replace("<anonymous>", m.displayName)), typeof m == "function" && je.set(m, We), We;
                  }
                while (Fe >= 1 && Ve >= 0);
              break;
            }
        }
      } finally {
        me = !1, le.current = Oe, ae(), Error.prepareStackTrace = ye;
      }
      var Ln = m ? m.displayName || m.name : "", gn = Ln ? _e(Ln) : "";
      return typeof m == "function" && je.set(m, gn), gn;
    }
    function M(m, D, W) {
      return xe(m, !1);
    }
    function A(m) {
      var D = m.prototype;
      return !!(D && D.isReactComponent);
    }
    function L(m, D, W) {
      if (m == null)
        return "";
      if (typeof m == "function")
        return xe(m, A(m));
      if (typeof m == "string")
        return _e(m);
      switch (m) {
        case l:
          return _e("Suspense");
        case u:
          return _e("SuspenseList");
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case c:
            return M(m.render);
          case d:
            return L(m.type, D, W);
          case f: {
            var ie = m, ye = ie._payload, Oe = ie._init;
            try {
              return L(Oe(ye), D, W);
            } catch {
            }
          }
        }
      return "";
    }
    var B = Object.prototype.hasOwnProperty, _ = {}, K = y.ReactDebugCurrentFrame;
    function Z(m) {
      if (m) {
        var D = m._owner, W = L(m.type, m._source, D ? D.type : null);
        K.setExtraStackFrame(W);
      } else
        K.setExtraStackFrame(null);
    }
    function Pe(m, D, W, ie, ye) {
      {
        var Oe = Function.call.bind(B);
        for (var ge in m)
          if (Oe(m, ge)) {
            var pe = void 0;
            try {
              if (typeof m[ge] != "function") {
                var ct = Error((ie || "React class") + ": " + W + " type `" + ge + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof m[ge] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ct.name = "Invariant Violation", ct;
              }
              pe = m[ge](D, ge, ie, W, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Fe) {
              pe = Fe;
            }
            pe && !(pe instanceof Error) && (Z(ye), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ie || "React class", W, ge, typeof pe), Z(null)), pe instanceof Error && !(pe.message in _) && (_[pe.message] = !0, Z(ye), S("Failed %s type: %s", W, pe.message), Z(null));
          }
      }
    }
    var Le = Array.isArray;
    function ce(m) {
      return Le(m);
    }
    function Me(m) {
      {
        var D = typeof Symbol == "function" && Symbol.toStringTag, W = D && m[Symbol.toStringTag] || m.constructor.name || "Object";
        return W;
      }
    }
    function dt(m) {
      try {
        return ut(m), !1;
      } catch {
        return !0;
      }
    }
    function ut(m) {
      return "" + m;
    }
    function Vt(m) {
      if (dt(m))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Me(m)), ut(m);
    }
    var z = y.ReactCurrentOwner, C = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, de, Ie;
    function Ge(m) {
      if (B.call(m, "ref")) {
        var D = Object.getOwnPropertyDescriptor(m, "ref").get;
        if (D && D.isReactWarning)
          return !1;
      }
      return m.ref !== void 0;
    }
    function be(m) {
      if (B.call(m, "key")) {
        var D = Object.getOwnPropertyDescriptor(m, "key").get;
        if (D && D.isReactWarning)
          return !1;
      }
      return m.key !== void 0;
    }
    function ze(m, D) {
      typeof m.ref == "string" && z.current;
    }
    function He(m, D) {
      {
        var W = function() {
          de || (de = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
        };
        W.isReactWarning = !0, Object.defineProperty(m, "key", {
          get: W,
          configurable: !0
        });
      }
    }
    function we(m, D) {
      {
        var W = function() {
          Ie || (Ie = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
        };
        W.isReactWarning = !0, Object.defineProperty(m, "ref", {
          get: W,
          configurable: !0
        });
      }
    }
    var nt = function(m, D, W, ie, ye, Oe, ge) {
      var pe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: m,
        key: D,
        ref: W,
        props: ge,
        // Record the component responsible for creating this element.
        _owner: Oe
      };
      return pe._store = {}, Object.defineProperty(pe._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(pe, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ie
      }), Object.defineProperty(pe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ye
      }), Object.freeze && (Object.freeze(pe.props), Object.freeze(pe)), pe;
    };
    function Wt(m, D, W, ie, ye) {
      {
        var Oe, ge = {}, pe = null, ct = null;
        W !== void 0 && (Vt(W), pe = "" + W), be(D) && (Vt(D.key), pe = "" + D.key), Ge(D) && (ct = D.ref, ze(D, ye));
        for (Oe in D)
          B.call(D, Oe) && !C.hasOwnProperty(Oe) && (ge[Oe] = D[Oe]);
        if (m && m.defaultProps) {
          var Fe = m.defaultProps;
          for (Oe in Fe)
            ge[Oe] === void 0 && (ge[Oe] = Fe[Oe]);
        }
        if (pe || ct) {
          var Ve = typeof m == "function" ? m.displayName || m.name || "Unknown" : m;
          pe && He(ge, Ve), ct && we(ge, Ve);
        }
        return nt(m, pe, ct, ye, ie, z.current, ge);
      }
    }
    var hn = y.ReactCurrentOwner, Ye = y.ReactDebugCurrentFrame;
    function De(m) {
      if (m) {
        var D = m._owner, W = L(m.type, m._source, D ? D.type : null);
        Ye.setExtraStackFrame(W);
      } else
        Ye.setExtraStackFrame(null);
    }
    var ht;
    ht = !1;
    function at(m) {
      return typeof m == "object" && m !== null && m.$$typeof === t;
    }
    function Mt() {
      {
        if (hn.current) {
          var m = H(hn.current.type);
          if (m)
            return `

Check the render method of \`` + m + "`.";
        }
        return "";
      }
    }
    function Nn(m) {
      return "";
    }
    var pn = {};
    function kn(m) {
      {
        var D = Mt();
        if (!D) {
          var W = typeof m == "string" ? m : m.displayName || m.name;
          W && (D = `

Check the top-level render call using <` + W + ">.");
        }
        return D;
      }
    }
    function xn(m, D) {
      {
        if (!m._store || m._store.validated || m.key != null)
          return;
        m._store.validated = !0;
        var W = kn(D);
        if (pn[W])
          return;
        pn[W] = !0;
        var ie = "";
        m && m._owner && m._owner !== hn.current && (ie = " It was passed a child from " + H(m._owner.type) + "."), De(m), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', W, ie), De(null);
      }
    }
    function jn(m, D) {
      {
        if (typeof m != "object")
          return;
        if (ce(m))
          for (var W = 0; W < m.length; W++) {
            var ie = m[W];
            at(ie) && xn(ie, D);
          }
        else if (at(m))
          m._store && (m._store.validated = !0);
        else if (m) {
          var ye = x(m);
          if (typeof ye == "function" && ye !== m.entries)
            for (var Oe = ye.call(m), ge; !(ge = Oe.next()).done; )
              at(ge.value) && xn(ge.value, D);
        }
      }
    }
    function en(m) {
      {
        var D = m.type;
        if (D == null || typeof D == "string")
          return;
        var W;
        if (typeof D == "function")
          W = D.propTypes;
        else if (typeof D == "object" && (D.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        D.$$typeof === d))
          W = D.propTypes;
        else
          return;
        if (W) {
          var ie = H(D);
          Pe(W, m.props, "prop", ie, m);
        } else if (D.PropTypes !== void 0 && !ht) {
          ht = !0;
          var ye = H(D);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ye || "Unknown");
        }
        typeof D.getDefaultProps == "function" && !D.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function tn(m) {
      {
        for (var D = Object.keys(m.props), W = 0; W < D.length; W++) {
          var ie = D[W];
          if (ie !== "children" && ie !== "key") {
            De(m), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ie), De(null);
            break;
          }
        }
        m.ref !== null && (De(m), S("Invalid attribute `ref` supplied to `React.Fragment`."), De(null));
      }
    }
    var pr = {};
    function Kr(m, D, W, ie, ye, Oe) {
      {
        var ge = G(m);
        if (!ge) {
          var pe = "";
          (m === void 0 || typeof m == "object" && m !== null && Object.keys(m).length === 0) && (pe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ct = Nn();
          ct ? pe += ct : pe += Mt();
          var Fe;
          m === null ? Fe = "null" : ce(m) ? Fe = "array" : m !== void 0 && m.$$typeof === t ? (Fe = "<" + (H(m.type) || "Unknown") + " />", pe = " Did you accidentally export a JSX literal instead of a component?") : Fe = typeof m, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Fe, pe);
        }
        var Ve = Wt(m, D, W, ye, Oe);
        if (Ve == null)
          return Ve;
        if (ge) {
          var We = D.children;
          if (We !== void 0)
            if (ie)
              if (ce(We)) {
                for (var Ln = 0; Ln < We.length; Ln++)
                  jn(We[Ln], m);
                Object.freeze && Object.freeze(We);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              jn(We, m);
        }
        if (B.call(D, "key")) {
          var gn = H(m), pt = Object.keys(D).filter(function(Y0) {
            return Y0 !== "key";
          }), Yi = pt.length > 0 ? "{key: someKey, " + pt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!pr[gn + Yi]) {
            var G0 = pt.length > 0 ? "{" + pt.join(": ..., ") + ": ...}" : "{}";
            S(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Yi, gn, G0, gn), pr[gn + Yi] = !0;
          }
        }
        return m === r ? tn(Ve) : en(Ve), Ve;
      }
    }
    function et(m, D, W) {
      return Kr(m, D, W, !0);
    }
    function Zr(m, D, W) {
      return Kr(m, D, W, !1);
    }
    var Gi = Zr, $e = et;
    gr.Fragment = r, gr.jsx = Gi, gr.jsxs = $e;
  }()), gr;
}
var _c;
function ih() {
  return _c || (_c = 1, process.env.NODE_ENV === "production" ? Jr.exports = rh() : Jr.exports = oh()), Jr.exports;
}
var ne = ih(), xt = function() {
  return xt = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, xt.apply(this, arguments);
};
function Wn(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function sh(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var ah = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ch = /* @__PURE__ */ sh(
  function(e) {
    return ah.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Be = "-ms-", Tr = "-moz-", Re = "-webkit-", Pu = "comm", hi = "rule", za = "decl", lh = "@import", Iu = "@keyframes", uh = "@layer", Nu = Math.abs, Ha = String.fromCharCode, As = Object.assign;
function fh(e, t) {
  return st(e, 0) ^ 45 ? (((t << 2 ^ st(e, 0)) << 2 ^ st(e, 1)) << 2 ^ st(e, 2)) << 2 ^ st(e, 3) : 0;
}
function ku(e) {
  return e.trim();
}
function Yt(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function he(e, t, n) {
  return e.replace(t, n);
}
function vo(e, t, n) {
  return e.indexOf(t, n);
}
function st(e, t) {
  return e.charCodeAt(t) | 0;
}
function qn(e, t, n) {
  return e.slice(t, n);
}
function zt(e) {
  return e.length;
}
function ju(e) {
  return e.length;
}
function _r(e, t) {
  return t.push(e), e;
}
function dh(e, t) {
  return e.map(t).join("");
}
function Oc(e, t) {
  return e.filter(function(n) {
    return !Yt(n, t);
  });
}
var pi = 1, Un = 1, Lu = 0, Ot = 0, Ze = 0, or = "";
function xi(e, t, n, r, o, i, s, a) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: pi, column: Un, length: s, return: "", siblings: a };
}
function nn(e, t) {
  return As(xi("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function Mn(e) {
  for (; e.root; )
    e = nn(e.root, { children: [e] });
  _r(e, e.siblings);
}
function hh() {
  return Ze;
}
function ph() {
  return Ze = Ot > 0 ? st(or, --Ot) : 0, Un--, Ze === 10 && (Un = 1, pi--), Ze;
}
function Pt() {
  return Ze = Ot < Lu ? st(or, Ot++) : 0, Un++, Ze === 10 && (Un = 1, pi++), Ze;
}
function wn() {
  return st(or, Ot);
}
function bo() {
  return Ot;
}
function gi(e, t) {
  return qn(or, e, t);
}
function Ts(e) {
  switch (e) {
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
function xh(e) {
  return pi = Un = 1, Lu = zt(or = e), Ot = 0, [];
}
function gh(e) {
  return or = "", e;
}
function Xi(e) {
  return ku(gi(Ot - 1, Rs(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function mh(e) {
  for (; (Ze = wn()) && Ze < 33; )
    Pt();
  return Ts(e) > 2 || Ts(Ze) > 3 ? "" : " ";
}
function vh(e, t) {
  for (; --t && Pt() && !(Ze < 48 || Ze > 102 || Ze > 57 && Ze < 65 || Ze > 70 && Ze < 97); )
    ;
  return gi(e, bo() + (t < 6 && wn() == 32 && Pt() == 32));
}
function Rs(e) {
  for (; Pt(); )
    switch (Ze) {
      // ] ) " '
      case e:
        return Ot;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Rs(Ze);
        break;
      // (
      case 40:
        e === 41 && Rs(e);
        break;
      // \
      case 92:
        Pt();
        break;
    }
  return Ot;
}
function bh(e, t) {
  for (; Pt() && e + Ze !== 57; )
    if (e + Ze === 84 && wn() === 47)
      break;
  return "/*" + gi(t, Ot - 1) + "*" + Ha(e === 47 ? e : Pt());
}
function yh(e) {
  for (; !Ts(wn()); )
    Pt();
  return gi(e, Ot);
}
function Sh(e) {
  return gh(yo("", null, null, null, [""], e = xh(e), 0, [0], e));
}
function yo(e, t, n, r, o, i, s, a, c) {
  for (var l = 0, u = 0, d = s, f = 0, v = 0, g = 0, h = 1, x = 1, y = 1, S = 0, p = "", E = o, b = i, T = r, O = p; x; )
    switch (g = S, S = Pt()) {
      // (
      case 40:
        if (g != 108 && st(O, d - 1) == 58) {
          vo(O += he(Xi(S), "&", "&\f"), "&\f", Nu(l ? a[l - 1] : 0)) != -1 && (y = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        O += Xi(S);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        O += mh(g);
        break;
      // \
      case 92:
        O += vh(bo() - 1, 7);
        continue;
      // /
      case 47:
        switch (wn()) {
          case 42:
          case 47:
            _r(Ch(bh(Pt(), bo()), t, n, c), c);
            break;
          default:
            O += "/";
        }
        break;
      // {
      case 123 * h:
        a[l++] = zt(O) * y;
      // } ; \0
      case 125 * h:
      case 59:
      case 0:
        switch (S) {
          // \0 }
          case 0:
          case 125:
            x = 0;
          // ;
          case 59 + u:
            y == -1 && (O = he(O, /\f/g, "")), v > 0 && zt(O) - d && _r(v > 32 ? Tc(O + ";", r, n, d - 1, c) : Tc(he(O, " ", "") + ";", r, n, d - 2, c), c);
            break;
          // @ ;
          case 59:
            O += ";";
          // { rule/at-rule
          default:
            if (_r(T = Ac(O, t, n, l, u, o, a, p, E = [], b = [], d, i), i), S === 123)
              if (u === 0)
                yo(O, t, T, T, E, i, d, a, b);
              else
                switch (f === 99 && st(O, 3) === 110 ? 100 : f) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    yo(e, T, T, r && _r(Ac(e, T, T, 0, 0, o, a, p, o, E = [], d, b), b), o, b, d, a, r ? E : b);
                    break;
                  default:
                    yo(O, T, T, T, [""], b, 0, a, b);
                }
        }
        l = u = v = 0, h = y = 1, p = O = "", d = s;
        break;
      // :
      case 58:
        d = 1 + zt(O), v = g;
      default:
        if (h < 1) {
          if (S == 123)
            --h;
          else if (S == 125 && h++ == 0 && ph() == 125)
            continue;
        }
        switch (O += Ha(S), S * h) {
          // &
          case 38:
            y = u > 0 ? 1 : (O += "\f", -1);
            break;
          // ,
          case 44:
            a[l++] = (zt(O) - 1) * y, y = 1;
            break;
          // @
          case 64:
            wn() === 45 && (O += Xi(Pt())), f = wn(), u = d = zt(p = O += yh(bo())), S++;
            break;
          // -
          case 45:
            g === 45 && zt(O) == 2 && (h = 0);
        }
    }
  return i;
}
function Ac(e, t, n, r, o, i, s, a, c, l, u, d) {
  for (var f = o - 1, v = o === 0 ? i : [""], g = ju(v), h = 0, x = 0, y = 0; h < r; ++h)
    for (var S = 0, p = qn(e, f + 1, f = Nu(x = s[h])), E = e; S < g; ++S)
      (E = ku(x > 0 ? v[S] + " " + p : he(p, /&\f/g, v[S]))) && (c[y++] = E);
  return xi(e, t, n, o === 0 ? hi : a, c, l, u, d);
}
function Ch(e, t, n, r) {
  return xi(e, t, n, Pu, Ha(hh()), qn(e, 2, -2), 0, r);
}
function Tc(e, t, n, r, o) {
  return xi(e, t, n, za, qn(e, 0, r), qn(e, r + 1, -1), r, o);
}
function Mu(e, t, n) {
  switch (fh(e, t)) {
    // color-adjust
    case 5103:
      return Re + "print-" + e + e;
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
      return Re + e + e;
    // tab-size
    case 4789:
      return Tr + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Re + e + Tr + e + Be + e + e;
    // writing-mode
    case 5936:
      switch (st(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return Re + e + Be + he(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return Re + e + Be + he(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return Re + e + Be + he(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return Re + e + Be + e + e;
    // order
    case 6165:
      return Re + e + Be + "flex-" + e + e;
    // align-items
    case 5187:
      return Re + e + he(e, /(\w+).+(:[^]+)/, Re + "box-$1$2" + Be + "flex-$1$2") + e;
    // align-self
    case 5443:
      return Re + e + Be + "flex-item-" + he(e, /flex-|-self/g, "") + (Yt(e, /flex-|baseline/) ? "" : Be + "grid-row-" + he(e, /flex-|-self/g, "")) + e;
    // align-content
    case 4675:
      return Re + e + Be + "flex-line-pack" + he(e, /align-content|flex-|-self/g, "") + e;
    // flex-shrink
    case 5548:
      return Re + e + Be + he(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return Re + e + Be + he(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return Re + "box-" + he(e, "-grow", "") + Re + e + Be + he(e, "grow", "positive") + e;
    // transition
    case 4554:
      return Re + he(e, /([^-])(transform)/g, "$1" + Re + "$2") + e;
    // cursor
    case 6187:
      return he(he(he(e, /(zoom-|grab)/, Re + "$1"), /(image-set)/, Re + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return he(e, /(image-set\([^]*)/, Re + "$1$`$1");
    // justify-content
    case 4968:
      return he(he(e, /(.+:)(flex-)?(.*)/, Re + "box-pack:$3" + Be + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Re + e + e;
    // justify-self
    case 4200:
      if (!Yt(e, /flex-|baseline/)) return Be + "grid-column-align" + qn(e, t) + e;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return Be + he(e, "template-", "") + e;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return n && n.some(function(r, o) {
        return t = o, Yt(r.props, /grid-\w+-end/);
      }) ? ~vo(e + (n = n[t].value), "span", 0) ? e : Be + he(e, "-start", "") + e + Be + "grid-row-span:" + (~vo(n, "span", 0) ? Yt(n, /\d+/) : +Yt(n, /\d+/) - +Yt(e, /\d+/)) + ";" : Be + he(e, "-start", "") + e;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return Yt(r.props, /grid-\w+-start/);
      }) ? e : Be + he(he(e, "-end", "-span"), "span ", "") + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return he(e, /(.+)-inline(.+)/, Re + "$1$2") + e;
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
      if (zt(e) - 1 - t > 6)
        switch (st(e, t + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (st(e, t + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return he(e, /(.+:)(.+)-([^]+)/, "$1" + Re + "$2-$3$1" + Tr + (st(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          // (s)tretch
          case 115:
            return ~vo(e, "stretch", 0) ? Mu(he(e, "stretch", "fill-available"), t, n) + e : e;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return he(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, s, a, c, l) {
        return Be + o + ":" + i + l + (s ? Be + o + "-span:" + (a ? c : +c - +i) + l : "") + e;
      });
    // position: sticky
    case 4949:
      if (st(e, t + 6) === 121)
        return he(e, ":", ":" + Re) + e;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (st(e, st(e, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return he(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + Re + (st(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Re + "$2$3$1" + Be + "$2box$3") + e;
        // (inline-)?gri(d)
        case 100:
          return he(e, ":", ":" + Be) + e;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return he(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function Ho(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function wh(e, t, n, r) {
  switch (e.type) {
    case uh:
      if (e.children.length) break;
    case lh:
    case za:
      return e.return = e.return || e.value;
    case Pu:
      return "";
    case Iu:
      return e.return = e.value + "{" + Ho(e.children, r) + "}";
    case hi:
      if (!zt(e.value = e.props.join(","))) return "";
  }
  return zt(n = Ho(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Eh(e) {
  var t = ju(e);
  return function(n, r, o, i) {
    for (var s = "", a = 0; a < t; a++)
      s += e[a](n, r, o, i) || "";
    return s;
  };
}
function _h(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Oh(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case za:
        e.return = Mu(e.value, e.length, n);
        return;
      case Iu:
        return Ho([nn(e, { value: he(e.value, "@", "@" + Re) })], r);
      case hi:
        if (e.length)
          return dh(n = e.props, function(o) {
            switch (Yt(o, r = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                Mn(nn(e, { props: [he(o, /:(read-\w+)/, ":" + Tr + "$1")] })), Mn(nn(e, { props: [o] })), As(e, { props: Oc(n, r) });
                break;
              // :placeholder
              case "::placeholder":
                Mn(nn(e, { props: [he(o, /:(plac\w+)/, ":" + Re + "input-$1")] })), Mn(nn(e, { props: [he(o, /:(plac\w+)/, ":" + Tr + "$1")] })), Mn(nn(e, { props: [he(o, /:(plac\w+)/, Be + "input-$1")] })), Mn(nn(e, { props: [o] })), As(e, { props: Oc(n, r) });
                break;
            }
            return "";
          });
    }
}
var Ah = {
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
}, Rn = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Du = "active", Bu = "data-styled-version", mi = "6.1.18", Fa = `/*!sc*/
`, Fo = typeof window < "u" && typeof document < "u", Th = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Rc = /invalid hook call/i, Qr = /* @__PURE__ */ new Set(), Rh = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var n = t ? ' with the id of "'.concat(t, '"') : "", r = "The component ".concat(e).concat(n, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, o = console.error;
    try {
      var i = !0;
      console.error = function(s) {
        for (var a = [], c = 1; c < arguments.length; c++) a[c - 1] = arguments[c];
        Rc.test(s) ? (i = !1, Qr.delete(r)) : o.apply(void 0, Wn([s], a, !1));
      }, Ee(), i && !Qr.has(r) && (console.warn(r), Qr.add(r));
    } catch (s) {
      Rc.test(s.message) && Qr.delete(r);
    } finally {
      console.error = o;
    }
  }
}, vi = Object.freeze([]), Gn = Object.freeze({});
function Ph(e, t, n) {
  return n === void 0 && (n = Gn), e.theme !== n.theme && e.theme || t || n.theme;
}
var Ps = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Ih = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Nh = /(^-|-$)/g;
function Pc(e) {
  return e.replace(Ih, "-").replace(Nh, "");
}
var kh = /(a)(d)/gi, eo = 52, Ic = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Is(e) {
  var t, n = "";
  for (t = Math.abs(e); t > eo; t = t / eo | 0) n = Ic(t % eo) + n;
  return (Ic(t % eo) + n).replace(kh, "$1-$2");
}
var Ki, zu = 5381, vn = function(e, t) {
  for (var n = t.length; n; ) e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, Hu = function(e) {
  return vn(zu, e);
};
function jh(e) {
  return Is(Hu(e) >>> 0);
}
function Fu(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Zi(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var $u = typeof Symbol == "function" && Symbol.for, Vu = $u ? Symbol.for("react.memo") : 60115, Lh = $u ? Symbol.for("react.forward_ref") : 60112, Mh = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Dh = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Wu = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Bh = ((Ki = {})[Lh] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Ki[Vu] = Wu, Ki);
function Nc(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Vu ? Wu : "$$typeof" in e ? Bh[e.$$typeof] : Mh;
  var t;
}
var zh = Object.defineProperty, Hh = Object.getOwnPropertyNames, kc = Object.getOwnPropertySymbols, Fh = Object.getOwnPropertyDescriptor, $h = Object.getPrototypeOf, jc = Object.prototype;
function qu(e, t, n) {
  if (typeof t != "string") {
    if (jc) {
      var r = $h(t);
      r && r !== jc && qu(e, r, n);
    }
    var o = Hh(t);
    kc && (o = o.concat(kc(t)));
    for (var i = Nc(e), s = Nc(t), a = 0; a < o.length; ++a) {
      var c = o[a];
      if (!(c in Dh || n && n[c] || s && c in s || i && c in i)) {
        var l = Fh(t, c);
        try {
          zh(e, c, l);
        } catch {
        }
      }
    }
  }
  return e;
}
function Yn(e) {
  return typeof e == "function";
}
function $a(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function yn(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Lc(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += e[r];
  return n;
}
function Xn(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Ns(e, t, n) {
  if (n === void 0 && (n = !1), !n && !Xn(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var r = 0; r < t.length; r++) e[r] = Ns(e[r], t[r]);
  else if (Xn(t)) for (var r in t) e[r] = Ns(e[r], t[r]);
  return e;
}
function Va(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var Vh = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function Wh() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var n = e[0], r = [], o = 1, i = e.length; o < i; o += 1) r.push(e[o]);
  return r.forEach(function(s) {
    n = n.replace(/%[a-z]/, s);
  }), n;
}
function ir(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(Wh.apply(void 0, Wn([Vh[e]], t, !1)).trim());
}
var qh = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
    return n;
  }, e.prototype.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var r = this.groupSizes, o = r.length, i = o; t >= i; ) if ((i <<= 1) < 0) throw ir(16, "".concat(t));
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(r), this.length = i;
      for (var s = o; s < i; s++) this.groupSizes[s] = 0;
    }
    for (var a = this.indexOfGroup(t + 1), c = (s = 0, n.length); s < c; s++) this.tag.insertRule(a, n[s]) && (this.groupSizes[t]++, a++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var n = this.groupSizes[t], r = this.indexOfGroup(t), o = r + n;
      this.groupSizes[t] = 0;
      for (var i = r; i < o; i++) this.tag.deleteRule(r);
    }
  }, e.prototype.getGroup = function(t) {
    var n = "";
    if (t >= this.length || this.groupSizes[t] === 0) return n;
    for (var r = this.groupSizes[t], o = this.indexOfGroup(t), i = o + r, s = o; s < i; s++) n += "".concat(this.tag.getRule(s)).concat(Fa);
    return n;
  }, e;
}(), Uh = 1 << 30, So = /* @__PURE__ */ new Map(), $o = /* @__PURE__ */ new Map(), Co = 1, to = function(e) {
  if (So.has(e)) return So.get(e);
  for (; $o.has(Co); ) Co++;
  var t = Co++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > Uh)) throw ir(16, "".concat(t));
  return So.set(e, t), $o.set(t, e), t;
}, Gh = function(e, t) {
  Co = t + 1, So.set(e, t), $o.set(t, e);
}, Yh = "style[".concat(Rn, "][").concat(Bu, '="').concat(mi, '"]'), Xh = new RegExp("^".concat(Rn, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Kh = function(e, t, n) {
  for (var r, o = n.split(","), i = 0, s = o.length; i < s; i++) (r = o[i]) && e.registerName(t, r);
}, Zh = function(e, t) {
  for (var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(Fa), o = [], i = 0, s = r.length; i < s; i++) {
    var a = r[i].trim();
    if (a) {
      var c = a.match(Xh);
      if (c) {
        var l = 0 | parseInt(c[1], 10), u = c[2];
        l !== 0 && (Gh(u, l), Kh(e, u, c[3]), e.getTag().insertRules(l, o)), o.length = 0;
      } else o.push(a);
    }
  }
}, Mc = function(e) {
  for (var t = document.querySelectorAll(Yh), n = 0, r = t.length; n < r; n++) {
    var o = t[n];
    o && o.getAttribute(Rn) !== Du && (Zh(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function Jh() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Uu = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(a) {
    var c = Array.from(a.querySelectorAll("style[".concat(Rn, "]")));
    return c[c.length - 1];
  }(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(Rn, Du), r.setAttribute(Bu, mi);
  var s = Jh();
  return s && r.setAttribute("nonce", s), n.insertBefore(r, i), r;
}, Qh = function() {
  function e(t) {
    this.element = Uu(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
      if (n.sheet) return n.sheet;
      for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
        var s = r[o];
        if (s.ownerNode === n) return s;
      }
      throw ir(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(t, n) {
    try {
      return this.sheet.insertRule(n, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, e.prototype.getRule = function(t) {
    var n = this.sheet.cssRules[t];
    return n && n.cssText ? n.cssText : "";
  }, e;
}(), ep = function() {
  function e(t) {
    this.element = Uu(t), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(t, n) {
    if (t <= this.length && t >= 0) {
      var r = document.createTextNode(n);
      return this.element.insertBefore(r, this.nodes[t] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), tp = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(t, n) {
    return t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0);
  }, e.prototype.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), Dc = Fo, np = { isServer: !Fo, useCSSOMInjection: !Th }, Gu = function() {
  function e(t, n, r) {
    t === void 0 && (t = Gn), n === void 0 && (n = {});
    var o = this;
    this.options = xt(xt({}, np), t), this.gs = n, this.names = new Map(r), this.server = !!t.isServer, !this.server && Fo && Dc && (Dc = !1, Mc(this)), Va(this, function() {
      return function(i) {
        for (var s = i.getTag(), a = s.length, c = "", l = function(d) {
          var f = function(y) {
            return $o.get(y);
          }(d);
          if (f === void 0) return "continue";
          var v = i.names.get(f), g = s.getGroup(d);
          if (v === void 0 || !v.size || g.length === 0) return "continue";
          var h = "".concat(Rn, ".g").concat(d, '[id="').concat(f, '"]'), x = "";
          v !== void 0 && v.forEach(function(y) {
            y.length > 0 && (x += "".concat(y, ","));
          }), c += "".concat(g).concat(h, '{content:"').concat(x, '"}').concat(Fa);
        }, u = 0; u < a; u++) l(u);
        return c;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return to(t);
  }, e.prototype.rehydrate = function() {
    !this.server && Fo && Mc(this);
  }, e.prototype.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(xt(xt({}, this.options), t), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(n) {
      var r = n.useCSSOMInjection, o = n.target;
      return n.isServer ? new tp(o) : r ? new Qh(o) : new ep(o);
    }(this.options), new qh(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, e.prototype.registerName = function(t, n) {
    if (to(t), this.names.has(t)) this.names.get(t).add(n);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(n), this.names.set(t, r);
    }
  }, e.prototype.insertRules = function(t, n, r) {
    this.registerName(t, n), this.getTag().insertRules(to(t), r);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(to(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), rp = /&/g, op = /^\s*\/\/.*$/gm;
function Yu(e, t) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function(r) {
      return "".concat(t, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = Yu(n.children, t)), n;
  });
}
function ip(e) {
  var t, n, r, o = Gn, i = o.options, s = i === void 0 ? Gn : i, a = o.plugins, c = a === void 0 ? vi : a, l = function(f, v, g) {
    return g.startsWith(n) && g.endsWith(n) && g.replaceAll(n, "").length > 0 ? ".".concat(t) : f;
  }, u = c.slice();
  u.push(function(f) {
    f.type === hi && f.value.includes("&") && (f.props[0] = f.props[0].replace(rp, n).replace(r, l));
  }), s.prefix && u.push(Oh), u.push(wh);
  var d = function(f, v, g, h) {
    v === void 0 && (v = ""), g === void 0 && (g = ""), h === void 0 && (h = "&"), t = h, n = v, r = new RegExp("\\".concat(n, "\\b"), "g");
    var x = f.replace(op, ""), y = Sh(g || v ? "".concat(g, " ").concat(v, " { ").concat(x, " }") : x);
    s.namespace && (y = Yu(y, s.namespace));
    var S = [];
    return Ho(y, Eh(u.concat(_h(function(p) {
      return S.push(p);
    })))), S;
  };
  return d.hash = c.length ? c.reduce(function(f, v) {
    return v.name || ir(15), vn(f, v.name);
  }, zu).toString() : "", d;
}
var sp = new Gu(), ks = ip(), Xu = q.createContext({ shouldForwardProp: void 0, styleSheet: sp, stylis: ks });
Xu.Consumer;
q.createContext(void 0);
function Bc() {
  return _t(Xu);
}
var zc = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = ks);
      var s = r.name + i.hash;
      o.hasNameForId(r.id, s) || o.insertRules(r.id, s, i(r.rules, s, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, Va(this, function() {
      throw ir(12, String(r.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = ks), this.name + t.hash;
  }, e;
}(), ap = function(e) {
  return e >= "A" && e <= "Z";
};
function Hc(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    ap(r) ? t += "-" + r.toLowerCase() : t += r;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Ku = function(e) {
  return e == null || e === !1 || e === "";
}, Zu = function(e) {
  var t, n, r = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !Ku(i) && (Array.isArray(i) && i.isCss || Yn(i) ? r.push("".concat(Hc(o), ":"), i, ";") : Xn(i) ? r.push.apply(r, Wn(Wn(["".concat(o, " {")], Zu(i), !1), ["}"], !1)) : r.push("".concat(Hc(o), ": ").concat((t = o, (n = i) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in Ah || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function En(e, t, n, r) {
  if (Ku(e)) return [];
  if ($a(e)) return [".".concat(e.styledComponentId)];
  if (Yn(e)) {
    if (!Yn(i = e) || i.prototype && i.prototype.isReactComponent || !t) return [e];
    var o = e(t);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof zc || Xn(o) || o === null || console.error("".concat(Fu(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), En(o, t, n, r);
  }
  var i;
  return e instanceof zc ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : Xn(e) ? Zu(e) : Array.isArray(e) ? Array.prototype.concat.apply(vi, e.map(function(s) {
    return En(s, t, n, r);
  })) : [e.toString()];
}
function cp(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (Yn(n) && !$a(n)) return !1;
  }
  return !0;
}
var lp = Hu(mi), up = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && cp(t), this.componentId = n, this.baseHash = vn(lp, n), this.baseStyle = r, Gu.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId)) o = yn(o, this.staticRulesId);
    else {
      var i = Lc(En(this.rules, t, n, r)), s = Is(vn(this.baseHash, i) >>> 0);
      if (!n.hasNameForId(this.componentId, s)) {
        var a = r(i, ".".concat(s), void 0, this.componentId);
        n.insertRules(this.componentId, s, a);
      }
      o = yn(o, s), this.staticRulesId = s;
    }
    else {
      for (var c = vn(this.baseHash, r.hash), l = "", u = 0; u < this.rules.length; u++) {
        var d = this.rules[u];
        if (typeof d == "string") l += d, process.env.NODE_ENV !== "production" && (c = vn(c, d));
        else if (d) {
          var f = Lc(En(d, t, n, r));
          c = vn(c, f + u), l += f;
        }
      }
      if (l) {
        var v = Is(c >>> 0);
        n.hasNameForId(this.componentId, v) || n.insertRules(this.componentId, v, r(l, ".".concat(v), void 0, this.componentId)), o = yn(o, v);
      }
    }
    return o;
  }, e;
}(), Ju = q.createContext(void 0);
Ju.Consumer;
var Ji = {}, Fc = /* @__PURE__ */ new Set();
function fp(e, t, n) {
  var r = $a(e), o = e, i = !Zi(e), s = t.attrs, a = s === void 0 ? vi : s, c = t.componentId, l = c === void 0 ? function(E, b) {
    var T = typeof E != "string" ? "sc" : Pc(E);
    Ji[T] = (Ji[T] || 0) + 1;
    var O = "".concat(T, "-").concat(jh(mi + T + Ji[T]));
    return b ? "".concat(b, "-").concat(O) : O;
  }(t.displayName, t.parentComponentId) : c, u = t.displayName, d = u === void 0 ? function(E) {
    return Zi(E) ? "styled.".concat(E) : "Styled(".concat(Fu(E), ")");
  }(e) : u, f = t.displayName && t.componentId ? "".concat(Pc(t.displayName), "-").concat(t.componentId) : t.componentId || l, v = r && o.attrs ? o.attrs.concat(a).filter(Boolean) : a, g = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var h = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var x = t.shouldForwardProp;
      g = function(E, b) {
        return h(E, b) && x(E, b);
      };
    } else g = h;
  }
  var y = new up(n, f, r ? o.componentStyle : void 0);
  function S(E, b) {
    return function(T, O, k) {
      var F = T.attrs, G = T.componentStyle, oe = T.defaultProps, te = T.foldedComponentIds, H = T.styledComponentId, X = T.target, Q = q.useContext(Ju), N = Bc(), R = T.shouldForwardProp || N.shouldForwardProp;
      process.env.NODE_ENV !== "production" && Sc(H);
      var P = Ph(O, Q, oe) || Gn, j = function(ae, le, ue) {
        for (var _e, me = xt(xt({}, le), { className: void 0, theme: ue }), je = 0; je < ae.length; je += 1) {
          var Ne = Yn(_e = ae[je]) ? _e(me) : _e;
          for (var xe in Ne) me[xe] = xe === "className" ? yn(me[xe], Ne[xe]) : xe === "style" ? xt(xt({}, me[xe]), Ne[xe]) : Ne[xe];
        }
        return le.className && (me.className = yn(me.className, le.className)), me;
      }(F, O, P), $ = j.as || X, V = {};
      for (var Y in j) j[Y] === void 0 || Y[0] === "$" || Y === "as" || Y === "theme" && j.theme === P || (Y === "forwardedAs" ? V.as = j.forwardedAs : R && !R(Y, $) || (V[Y] = j[Y], R || process.env.NODE_ENV !== "development" || ch(Y) || Fc.has(Y) || !Ps.has($) || (Fc.add(Y), console.warn('styled-components: it looks like an unknown prop "'.concat(Y, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var re = function(ae, le) {
        var ue = Bc(), _e = ae.generateAndInjectStyles(le, ue.styleSheet, ue.stylis);
        return process.env.NODE_ENV !== "production" && Sc(_e), _e;
      }(G, j);
      process.env.NODE_ENV !== "production" && T.warnTooManyClasses && T.warnTooManyClasses(re);
      var ee = yn(te, H);
      return re && (ee += " " + re), j.className && (ee += " " + j.className), V[Zi($) && !Ps.has($) ? "class" : "className"] = ee, k && (V.ref = k), Z0($, V);
    }(p, E, b);
  }
  S.displayName = d;
  var p = q.forwardRef(S);
  return p.attrs = v, p.componentStyle = y, p.displayName = d, p.shouldForwardProp = g, p.foldedComponentIds = r ? yn(o.foldedComponentIds, o.styledComponentId) : "", p.styledComponentId = f, p.target = r ? o.target : e, Object.defineProperty(p, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(E) {
    this._foldedDefaultProps = r ? function(b) {
      for (var T = [], O = 1; O < arguments.length; O++) T[O - 1] = arguments[O];
      for (var k = 0, F = T; k < F.length; k++) Ns(b, F[k], !0);
      return b;
    }({}, o.defaultProps, E) : E;
  } }), process.env.NODE_ENV !== "production" && (Rh(d, f), p.warnTooManyClasses = /* @__PURE__ */ function(E, b) {
    var T = {}, O = !1;
    return function(k) {
      if (!O && (T[k] = !0, Object.keys(T).length >= 200)) {
        var F = b ? ' with the id of "'.concat(b, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(E).concat(F, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), O = !0, T = {};
      }
    };
  }(d, f)), Va(p, function() {
    return ".".concat(p.styledComponentId);
  }), i && qu(p, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), p;
}
function $c(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
  return n;
}
var Vc = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function dp(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (Yn(e) || Xn(e)) return Vc(En($c(vi, Wn([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string" ? En(r) : Vc(En($c(r, t)));
}
function js(e, t, n) {
  if (n === void 0 && (n = Gn), !t) throw ir(1, t);
  var r = function(o) {
    for (var i = [], s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
    return e(t, n, dp.apply(void 0, Wn([o], i, !1)));
  };
  return r.attrs = function(o) {
    return js(e, t, xt(xt({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return js(e, t, xt(xt({}, n), o));
  }, r;
}
var Qu = function(e) {
  return js(fp, e);
}, jt = Qu;
Ps.forEach(function(e) {
  jt[e] = Qu(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var no = "__sc-".concat(Rn, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[no] || (window[no] = 0), window[no] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[no] += 1);
function Vo(e, t) {
  const n = Wo();
  return Vo = function(r, o) {
    return r = r - 364, n[r];
  }, Vo(e, t);
}
const Fr = Vo;
(function(e, t) {
  const n = Vo, r = e();
  for (; ; )
    try {
      if (-parseInt(n(370)) / 1 + -parseInt(n(373)) / 2 * (parseInt(n(369)) / 3) + parseInt(n(371)) / 4 * (-parseInt(n(372)) / 5) + parseInt(n(375)) / 6 + parseInt(n(367)) / 7 + -parseInt(n(366)) / 8 + parseInt(n(365)) / 9 === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Wo, 189382);
function Wo() {
  const e = ["5732TCJXVf", "750MBfOnT", "1382GGjwQs", "div", "2085762cVfHpV", "canvas", "4253193auncTM", "132616AyuaQb", "28595uZDntN", "span", "573dOSnad", "271399IuEXSw"];
  return Wo = function() {
    return e;
  }, Wo();
}
const hp = jt[Fr(374)]`
  flex-direction: column;
  border-radius: 15px;
  border: 3px solid #a0beeb;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
  justify-items: center;
  align-items: center;
`, pp = jt[Fr(374)]`
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
`, xp = jt[Fr(364)]`
  border-radius: 7px;
  display: inline;
  padding: 0;
  &:focus-visible {
    outline: none;
  }
`, gp = jt[Fr(368)]`
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
`, mp = jt[Fr(374)]`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  pointer-events: none;
`, ef = /* @__PURE__ */ di({});
var Qi = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Wc;
function vp() {
  return Wc || (Wc = 1, function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function n() {
        for (var i = "", s = 0; s < arguments.length; s++) {
          var a = arguments[s];
          a && (i = o(i, r(a)));
        }
        return i;
      }
      function r(i) {
        if (typeof i == "string" || typeof i == "number")
          return i;
        if (typeof i != "object")
          return "";
        if (Array.isArray(i))
          return n.apply(null, i);
        if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]"))
          return i.toString();
        var s = "";
        for (var a in i)
          t.call(i, a) && i[a] && (s = o(s, a));
        return s;
      }
      function o(i, s) {
        return s ? i ? i + " " + s : i + s : i;
      }
      e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
    })();
  }(Qi)), Qi.exports;
}
var bp = vp();
const Se = /* @__PURE__ */ nh(bp), yp = {
  aliceblue: "9ehhb",
  antiquewhite: "9sgk7",
  aqua: "1ekf",
  aquamarine: "4zsno",
  azure: "9eiv3",
  beige: "9lhp8",
  bisque: "9zg04",
  black: "0",
  blanchedalmond: "9zhe5",
  blue: "73",
  blueviolet: "5e31e",
  brown: "6g016",
  burlywood: "8ouiv",
  cadetblue: "3qba8",
  chartreuse: "4zshs",
  chocolate: "87k0u",
  coral: "9yvyo",
  cornflowerblue: "3xael",
  cornsilk: "9zjz0",
  crimson: "8l4xo",
  cyan: "1ekf",
  darkblue: "3v",
  darkcyan: "rkb",
  darkgoldenrod: "776yz",
  darkgray: "6mbhl",
  darkgreen: "jr4",
  darkgrey: "6mbhl",
  darkkhaki: "7ehkb",
  darkmagenta: "5f91n",
  darkolivegreen: "3bzfz",
  darkorange: "9yygw",
  darkorchid: "5z6x8",
  darkred: "5f8xs",
  darksalmon: "9441m",
  darkseagreen: "5lwgf",
  darkslateblue: "2th1n",
  darkslategray: "1ugcv",
  darkslategrey: "1ugcv",
  darkturquoise: "14up",
  darkviolet: "5rw7n",
  deeppink: "9yavn",
  deepskyblue: "11xb",
  dimgray: "442g9",
  dimgrey: "442g9",
  dodgerblue: "16xof",
  firebrick: "6y7tu",
  floralwhite: "9zkds",
  forestgreen: "1cisi",
  fuchsia: "9y70f",
  gainsboro: "8m8kc",
  ghostwhite: "9pq0v",
  goldenrod: "8j4f4",
  gold: "9zda8",
  gray: "50i2o",
  green: "pa8",
  greenyellow: "6senj",
  grey: "50i2o",
  honeydew: "9eiuo",
  hotpink: "9yrp0",
  indianred: "80gnw",
  indigo: "2xcoy",
  ivory: "9zldc",
  khaki: "9edu4",
  lavenderblush: "9ziet",
  lavender: "90c8q",
  lawngreen: "4vk74",
  lemonchiffon: "9zkct",
  lightblue: "6s73a",
  lightcoral: "9dtog",
  lightcyan: "8s1rz",
  lightgoldenrodyellow: "9sjiq",
  lightgray: "89jo3",
  lightgreen: "5nkwg",
  lightgrey: "89jo3",
  lightpink: "9z6wx",
  lightsalmon: "9z2ii",
  lightseagreen: "19xgq",
  lightskyblue: "5arju",
  lightslategray: "4nwk9",
  lightslategrey: "4nwk9",
  lightsteelblue: "6wau6",
  lightyellow: "9zlcw",
  lime: "1edc",
  limegreen: "1zcxe",
  linen: "9shk6",
  magenta: "9y70f",
  maroon: "4zsow",
  mediumaquamarine: "40eju",
  mediumblue: "5p",
  mediumorchid: "79qkz",
  mediumpurple: "5r3rv",
  mediumseagreen: "2d9ip",
  mediumslateblue: "4tcku",
  mediumspringgreen: "1di2",
  mediumturquoise: "2uabw",
  mediumvioletred: "7rn9h",
  midnightblue: "z980",
  mintcream: "9ljp6",
  mistyrose: "9zg0x",
  moccasin: "9zfzp",
  navajowhite: "9zest",
  navy: "3k",
  oldlace: "9wq92",
  olive: "50hz4",
  olivedrab: "472ub",
  orange: "9z3eo",
  orangered: "9ykg0",
  orchid: "8iu3a",
  palegoldenrod: "9bl4a",
  palegreen: "5yw0o",
  paleturquoise: "6v4ku",
  palevioletred: "8k8lv",
  papayawhip: "9zi6t",
  peachpuff: "9ze0p",
  peru: "80oqn",
  pink: "9z8wb",
  plum: "8nba5",
  powderblue: "6wgdi",
  purple: "4zssg",
  rebeccapurple: "3zk49",
  red: "9y6tc",
  rosybrown: "7cv4f",
  royalblue: "2jvtt",
  saddlebrown: "5fmkz",
  salmon: "9rvci",
  sandybrown: "9jn1c",
  seagreen: "1tdnb",
  seashell: "9zje6",
  sienna: "6973h",
  silver: "7ir40",
  skyblue: "5arjf",
  slateblue: "45e4t",
  slategray: "4e100",
  slategrey: "4e100",
  snow: "9zke2",
  springgreen: "1egv",
  steelblue: "2r1kk",
  tan: "87yx8",
  teal: "pds",
  thistle: "8ggk8",
  tomato: "9yqfb",
  turquoise: "2j4r4",
  violet: "9b10u",
  wheat: "9ld4j",
  white: "9zldr",
  whitesmoke: "9lhpx",
  yellow: "9zl6o",
  yellowgreen: "61fzm"
}, rt = Math.round;
function es(e, t) {
  const n = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], r = n.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    r[o] = t(r[o] || 0, n[o] || "", o);
  return n[3] ? r[3] = n[3].includes("%") ? r[3] / 100 : r[3] : r[3] = 1, r;
}
const qc = (e, t, n) => n === 0 ? e : e / 100;
function mr(e, t) {
  const n = t || 255;
  return e > n ? n : e < 0 ? 0 : e;
}
let ro = class tf {
  constructor(t) {
    /**
     * All FastColor objects are valid. So isValid is always true. This property is kept to be compatible with TinyColor.
     */
    qe(this, "isValid", !0);
    /**
     * Red, R in RGB
     */
    qe(this, "r", 0);
    /**
     * Green, G in RGB
     */
    qe(this, "g", 0);
    /**
     * Blue, B in RGB
     */
    qe(this, "b", 0);
    /**
     * Alpha/Opacity, A in RGBA/HSLA
     */
    qe(this, "a", 1);
    // HSV privates
    qe(this, "_h");
    qe(this, "_s");
    qe(this, "_l");
    qe(this, "_v");
    // intermediate variables to calculate HSL/HSV
    qe(this, "_max");
    qe(this, "_min");
    qe(this, "_brightness");
    function n(r) {
      return r[0] in t && r[1] in t && r[2] in t;
    }
    if (t) if (typeof t == "string") {
      let o = function(i) {
        return r.startsWith(i);
      };
      const r = t.trim();
      if (/^#?[A-F\d]{3,8}$/i.test(r))
        this.fromHexString(r);
      else if (o("rgb"))
        this.fromRgbString(r);
      else if (o("hsl"))
        this.fromHslString(r);
      else if (o("hsv") || o("hsb"))
        this.fromHsvString(r);
      else {
        const i = yp[r.toLowerCase()];
        i && this.fromHexString(
          // Convert 36 hex to 16 hex
          parseInt(i, 36).toString(16).padStart(6, "0")
        );
      }
    } else if (t instanceof tf)
      this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this._h = t._h, this._s = t._s, this._l = t._l, this._v = t._v;
    else if (n("rgb"))
      this.r = mr(t.r), this.g = mr(t.g), this.b = mr(t.b), this.a = typeof t.a == "number" ? mr(t.a, 1) : 1;
    else if (n("hsl"))
      this.fromHsl(t);
    else if (n("hsv"))
      this.fromHsv(t);
    else
      throw new Error("@ant-design/fast-color: unsupported input " + JSON.stringify(t));
  }
  // ======================= Setter =======================
  setR(t) {
    return this._sc("r", t);
  }
  setG(t) {
    return this._sc("g", t);
  }
  setB(t) {
    return this._sc("b", t);
  }
  setA(t) {
    return this._sc("a", t, 1);
  }
  setHue(t) {
    const n = this.toHsv();
    return n.h = t, this._c(n);
  }
  // ======================= Getter =======================
  /**
   * Returns the perceived luminance of a color, from 0-1.
   * @see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
   */
  getLuminance() {
    function t(i) {
      const s = i / 255;
      return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
    }
    const n = t(this.r), r = t(this.g), o = t(this.b);
    return 0.2126 * n + 0.7152 * r + 0.0722 * o;
  }
  getHue() {
    if (typeof this._h > "u") {
      const t = this.getMax() - this.getMin();
      t === 0 ? this._h = 0 : this._h = rt(60 * (this.r === this.getMax() ? (this.g - this.b) / t + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / t + 2 : (this.r - this.g) / t + 4));
    }
    return this._h;
  }
  getSaturation() {
    if (typeof this._s > "u") {
      const t = this.getMax() - this.getMin();
      t === 0 ? this._s = 0 : this._s = t / this.getMax();
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
  darken(t = 10) {
    const n = this.getHue(), r = this.getSaturation();
    let o = this.getLightness() - t / 100;
    return o < 0 && (o = 0), this._c({
      h: n,
      s: r,
      l: o,
      a: this.a
    });
  }
  lighten(t = 10) {
    const n = this.getHue(), r = this.getSaturation();
    let o = this.getLightness() + t / 100;
    return o > 1 && (o = 1), this._c({
      h: n,
      s: r,
      l: o,
      a: this.a
    });
  }
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  mix(t, n = 50) {
    const r = this._c(t), o = n / 100, i = (a) => (r[a] - this[a]) * o + this[a], s = {
      r: rt(i("r")),
      g: rt(i("g")),
      b: rt(i("b")),
      a: rt(i("a") * 100) / 100
    };
    return this._c(s);
  }
  /**
   * Mix the color with pure white, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return white.
   */
  tint(t = 10) {
    return this.mix({
      r: 255,
      g: 255,
      b: 255,
      a: 1
    }, t);
  }
  /**
   * Mix the color with pure black, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return black.
   */
  shade(t = 10) {
    return this.mix({
      r: 0,
      g: 0,
      b: 0,
      a: 1
    }, t);
  }
  onBackground(t) {
    const n = this._c(t), r = this.a + n.a * (1 - this.a), o = (i) => rt((this[i] * this.a + n[i] * n.a * (1 - this.a)) / r);
    return this._c({
      r: o("r"),
      g: o("g"),
      b: o("b"),
      a: r
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
  equals(t) {
    return this.r === t.r && this.g === t.g && this.b === t.b && this.a === t.a;
  }
  clone() {
    return this._c(this);
  }
  // ======================= Format =======================
  toHexString() {
    let t = "#";
    const n = (this.r || 0).toString(16);
    t += n.length === 2 ? n : "0" + n;
    const r = (this.g || 0).toString(16);
    t += r.length === 2 ? r : "0" + r;
    const o = (this.b || 0).toString(16);
    if (t += o.length === 2 ? o : "0" + o, typeof this.a == "number" && this.a >= 0 && this.a < 1) {
      const i = rt(this.a * 255).toString(16);
      t += i.length === 2 ? i : "0" + i;
    }
    return t;
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
    const t = this.getHue(), n = rt(this.getSaturation() * 100), r = rt(this.getLightness() * 100);
    return this.a !== 1 ? `hsla(${t},${n}%,${r}%,${this.a})` : `hsl(${t},${n}%,${r}%)`;
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
  _sc(t, n, r) {
    const o = this.clone();
    return o[t] = mr(n, r), o;
  }
  _c(t) {
    return new this.constructor(t);
  }
  getMax() {
    return typeof this._max > "u" && (this._max = Math.max(this.r, this.g, this.b)), this._max;
  }
  getMin() {
    return typeof this._min > "u" && (this._min = Math.min(this.r, this.g, this.b)), this._min;
  }
  fromHexString(t) {
    const n = t.replace("#", "");
    function r(o, i) {
      return parseInt(n[o] + n[i || o], 16);
    }
    n.length < 6 ? (this.r = r(0), this.g = r(1), this.b = r(2), this.a = n[3] ? r(3) / 255 : 1) : (this.r = r(0, 1), this.g = r(2, 3), this.b = r(4, 5), this.a = n[6] ? r(6, 7) / 255 : 1);
  }
  fromHsl({
    h: t,
    s: n,
    l: r,
    a: o
  }) {
    if (this._h = t % 360, this._s = n, this._l = r, this.a = typeof o == "number" ? o : 1, n <= 0) {
      const f = rt(r * 255);
      this.r = f, this.g = f, this.b = f;
    }
    let i = 0, s = 0, a = 0;
    const c = t / 60, l = (1 - Math.abs(2 * r - 1)) * n, u = l * (1 - Math.abs(c % 2 - 1));
    c >= 0 && c < 1 ? (i = l, s = u) : c >= 1 && c < 2 ? (i = u, s = l) : c >= 2 && c < 3 ? (s = l, a = u) : c >= 3 && c < 4 ? (s = u, a = l) : c >= 4 && c < 5 ? (i = u, a = l) : c >= 5 && c < 6 && (i = l, a = u);
    const d = r - l / 2;
    this.r = rt((i + d) * 255), this.g = rt((s + d) * 255), this.b = rt((a + d) * 255);
  }
  fromHsv({
    h: t,
    s: n,
    v: r,
    a: o
  }) {
    this._h = t % 360, this._s = n, this._v = r, this.a = typeof o == "number" ? o : 1;
    const i = rt(r * 255);
    if (this.r = i, this.g = i, this.b = i, n <= 0)
      return;
    const s = t / 60, a = Math.floor(s), c = s - a, l = rt(r * (1 - n) * 255), u = rt(r * (1 - n * c) * 255), d = rt(r * (1 - n * (1 - c)) * 255);
    switch (a) {
      case 0:
        this.g = d, this.b = l;
        break;
      case 1:
        this.r = u, this.b = l;
        break;
      case 2:
        this.r = l, this.b = d;
        break;
      case 3:
        this.r = l, this.g = u;
        break;
      case 4:
        this.r = d, this.g = l;
        break;
      case 5:
      default:
        this.g = l, this.b = u;
        break;
    }
  }
  fromHsvString(t) {
    const n = es(t, qc);
    this.fromHsv({
      h: n[0],
      s: n[1],
      v: n[2],
      a: n[3]
    });
  }
  fromHslString(t) {
    const n = es(t, qc);
    this.fromHsl({
      h: n[0],
      s: n[1],
      l: n[2],
      a: n[3]
    });
  }
  fromRgbString(t) {
    const n = es(t, (r, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? rt(r / 100 * 255) : r
    ));
    this.r = n[0], this.g = n[1], this.b = n[2], this.a = n[3];
  }
};
const oo = 2, Uc = 0.16, Sp = 0.05, Cp = 0.05, wp = 0.15, nf = 5, rf = 4, Ep = [{
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
function Gc(e, t, n) {
  let r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = n ? Math.round(e.h) - oo * t : Math.round(e.h) + oo * t : r = n ? Math.round(e.h) + oo * t : Math.round(e.h) - oo * t, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function Yc(e, t, n) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  let r;
  return n ? r = e.s - Uc * t : t === rf ? r = e.s + Uc : r = e.s + Sp * t, r > 1 && (r = 1), n && t === nf && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Math.round(r * 100) / 100;
}
function Xc(e, t, n) {
  let r;
  return n ? r = e.v + Cp * t : r = e.v - wp * t, r = Math.max(0, Math.min(1, r)), Math.round(r * 100) / 100;
}
function _p(e, t = {}) {
  const n = [], r = new ro(e), o = r.toHsv();
  for (let i = nf; i > 0; i -= 1) {
    const s = new ro({
      h: Gc(o, i, !0),
      s: Yc(o, i, !0),
      v: Xc(o, i, !0)
    });
    n.push(s);
  }
  n.push(r);
  for (let i = 1; i <= rf; i += 1) {
    const s = new ro({
      h: Gc(o, i),
      s: Yc(o, i),
      v: Xc(o, i)
    });
    n.push(s);
  }
  return t.theme === "dark" ? Ep.map(({
    index: i,
    amount: s
  }) => new ro(t.backgroundColor || "#141414").mix(n[i], s).toHexString()) : n.map((i) => i.toHexString());
}
const Ls = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
Ls.primary = Ls[5];
function Op() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Ap(e, t) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(t);
  let n = t;
  for (; n; ) {
    if (n === e)
      return !0;
    n = n.parentNode;
  }
  return !1;
}
const Kc = "data-rc-order", Zc = "data-rc-priority", Tp = "rc-util-key", Ms = /* @__PURE__ */ new Map();
function of({
  mark: e
} = {}) {
  return e ? e.startsWith("data-") ? e : `data-${e}` : Tp;
}
function Wa(e) {
  return e.attachTo ? e.attachTo : document.querySelector("head") || document.body;
}
function Rp(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function qa(e) {
  return Array.from((Ms.get(e) || e).children).filter((t) => t.tagName === "STYLE");
}
function sf(e, t = {}) {
  if (!Op())
    return null;
  const {
    csp: n,
    prepend: r,
    priority: o = 0
  } = t, i = Rp(r), s = i === "prependQueue", a = document.createElement("style");
  a.setAttribute(Kc, i), s && o && a.setAttribute(Zc, `${o}`), n != null && n.nonce && (a.nonce = n == null ? void 0 : n.nonce), a.innerHTML = e;
  const c = Wa(t), {
    firstChild: l
  } = c;
  if (r) {
    if (s) {
      const u = (t.styles || qa(c)).filter((d) => {
        if (!["prepend", "prependQueue"].includes(d.getAttribute(Kc)))
          return !1;
        const f = Number(d.getAttribute(Zc) || 0);
        return o >= f;
      });
      if (u.length)
        return c.insertBefore(a, u[u.length - 1].nextSibling), a;
    }
    c.insertBefore(a, l);
  } else
    c.appendChild(a);
  return a;
}
function Pp(e, t = {}) {
  let {
    styles: n
  } = t;
  return n || (n = qa(Wa(t))), n.find((r) => r.getAttribute(of(t)) === e);
}
function Ip(e, t) {
  const n = Ms.get(e);
  if (!n || !Ap(document, n)) {
    const r = sf("", t), {
      parentNode: o
    } = r;
    Ms.set(e, o), e.removeChild(r);
  }
}
function Np(e, t, n = {}) {
  var c, l, u;
  const r = Wa(n), o = qa(r), i = {
    ...n,
    styles: o
  };
  Ip(r, i);
  const s = Pp(t, i);
  if (s)
    return (c = i.csp) != null && c.nonce && s.nonce !== ((l = i.csp) == null ? void 0 : l.nonce) && (s.nonce = (u = i.csp) == null ? void 0 : u.nonce), s.innerHTML !== e && (s.innerHTML = e), s;
  const a = sf(e, i);
  return a.setAttribute(of(i), t), a;
}
function af(e) {
  var t;
  return (t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e);
}
function kp(e) {
  return af(e) instanceof ShadowRoot;
}
function jp(e) {
  return kp(e) ? af(e) : null;
}
let Ds = {};
const Ua = [], Lp = (e) => {
  Ua.push(e);
};
function Mp(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    const n = Ua.reduce((r, o) => o(r ?? "", "warning"), t);
    n && console.error(`Warning: ${n}`);
  }
}
function Dp(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    const n = Ua.reduce((r, o) => o(r ?? "", "note"), t);
    n && console.warn(`Note: ${n}`);
  }
}
function Bp() {
  Ds = {};
}
function cf(e, t, n) {
  !t && !Ds[n] && (e(!1, n), Ds[n] = !0);
}
function bi(e, t) {
  cf(Mp, e, t);
}
function zp(e, t) {
  cf(Dp, e, t);
}
bi.preMessage = Lp;
bi.resetWarned = Bp;
bi.noteOnce = zp;
function Hp(e) {
  return e.replace(/-(.)/g, (t, n) => n.toUpperCase());
}
function Fp(e, t) {
  bi(e, `[@ant-design/icons] ${t}`);
}
function Jc(e) {
  return typeof e == "object" && typeof e.name == "string" && typeof e.theme == "string" && (typeof e.icon == "object" || typeof e.icon == "function");
}
function Qc(e = {}) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    switch (n) {
      case "class":
        t.className = r, delete t.class;
        break;
      default:
        delete t[n], t[Hp(n)] = r;
    }
    return t;
  }, {});
}
function Bs(e, t, n) {
  return n ? /* @__PURE__ */ q.createElement(e.tag, {
    key: t,
    ...Qc(e.attrs),
    ...n
  }, (e.children || []).map((r, o) => Bs(r, `${t}-${e.tag}-${o}`))) : /* @__PURE__ */ q.createElement(e.tag, {
    key: t,
    ...Qc(e.attrs)
  }, (e.children || []).map((r, o) => Bs(r, `${t}-${e.tag}-${o}`)));
}
function lf(e) {
  return _p(e)[0];
}
function uf(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
const $p = `
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
`, Vp = (e) => {
  const {
    csp: t,
    prefixCls: n,
    layer: r
  } = _t(ef);
  let o = $p;
  n && (o = o.replace(/anticon/g, n)), r && (o = `@layer ${r} {
${o}
}`), Ke(() => {
    const i = e.current, s = jp(i);
    Np(o, "@ant-design-icons", {
      prepend: !r,
      csp: t,
      attachTo: s
    });
  }, []);
}, Rr = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function Wp({
  primaryColor: e,
  secondaryColor: t
}) {
  Rr.primaryColor = e, Rr.secondaryColor = t || lf(e), Rr.calculated = !!t;
}
function qp() {
  return {
    ...Rr
  };
}
const sr = (e) => {
  const {
    icon: t,
    className: n,
    onClick: r,
    style: o,
    primaryColor: i,
    secondaryColor: s,
    ...a
  } = e, c = w.useRef();
  let l = Rr;
  if (i && (l = {
    primaryColor: i,
    secondaryColor: s || lf(i)
  }), Vp(c), Fp(Jc(t), `icon should be icon definiton, but got ${t}`), !Jc(t))
    return null;
  let u = t;
  return u && typeof u.icon == "function" && (u = {
    ...u,
    icon: u.icon(l.primaryColor, l.secondaryColor)
  }), Bs(u.icon, `svg-${u.name}`, {
    className: n,
    onClick: r,
    style: o,
    "data-icon": u.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true",
    ...a,
    ref: c
  });
};
sr.displayName = "IconReact";
sr.getTwoToneColors = qp;
sr.setTwoToneColors = Wp;
function ff(e) {
  const [t, n] = uf(e);
  return sr.setTwoToneColors({
    primaryColor: t,
    secondaryColor: n
  });
}
function Up() {
  const e = sr.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
function zs() {
  return zs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, zs.apply(this, arguments);
}
ff(Ls.primary);
const $r = /* @__PURE__ */ w.forwardRef((e, t) => {
  const {
    // affect outter <i>...</i>
    className: n,
    // affect inner <svg>...</svg>
    icon: r,
    spin: o,
    rotate: i,
    tabIndex: s,
    onClick: a,
    // other
    twoToneColor: c,
    ...l
  } = e, {
    prefixCls: u = "anticon",
    rootClassName: d
  } = w.useContext(ef), f = Se(d, u, {
    [`${u}-${r.name}`]: !!r.name,
    [`${u}-spin`]: !!o || r.name === "loading"
  }, n);
  let v = s;
  v === void 0 && a && (v = -1);
  const g = i ? {
    msTransform: `rotate(${i}deg)`,
    transform: `rotate(${i}deg)`
  } : void 0, [h, x] = uf(c);
  return /* @__PURE__ */ w.createElement("span", zs({
    role: "img",
    "aria-label": r.name
  }, l, {
    ref: t,
    tabIndex: v,
    onClick: a,
    className: f
  }), /* @__PURE__ */ w.createElement(sr, {
    icon: r,
    primaryColor: h,
    secondaryColor: x,
    style: g
  }));
});
$r.displayName = "AntdIcon";
$r.getTwoToneColor = Up;
$r.setTwoToneColor = ff;
var Gp = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" }, Yp = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, Xp = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, Kp = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" }, Zp = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" }, Jp = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" }, Qp = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z" } }] }, name: "reload", theme: "outlined" };
function Hs() {
  return Hs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Hs.apply(this, arguments);
}
const ex = (e, t) => /* @__PURE__ */ w.createElement($r, Hs({}, e, {
  ref: t,
  icon: Qp
})), df = /* @__PURE__ */ w.forwardRef(ex);
process.env.NODE_ENV !== "production" && (df.displayName = "ReloadOutlined");
var tx = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M168 504.2c1-43.7 10-86.1 26.9-126 17.3-41 42.1-77.7 73.7-109.4S337 212.3 378 195c42.4-17.9 87.4-27 133.9-27s91.5 9.1 133.8 27A341.5 341.5 0 01755 268.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.7 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c0-6.7-7.7-10.5-12.9-6.3l-56.4 44.1C765.8 155.1 646.2 92 511.8 92 282.7 92 96.3 275.6 92 503.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8zm756 7.8h-60c-4.4 0-7.9 3.5-8 7.8-1 43.7-10 86.1-26.9 126-17.3 41-42.1 77.8-73.7 109.4A342.45 342.45 0 01512.1 856a342.24 342.24 0 01-243.2-100.8c-9.9-9.9-19.2-20.4-27.8-31.4l60.2-47a8 8 0 00-3-14.1l-175.7-43c-5-1.2-9.9 2.6-9.9 7.7l-.7 181c0 6.7 7.7 10.5 12.9 6.3l56.4-44.1C258.2 868.9 377.8 932 512.2 932c229.2 0 415.5-183.7 419.8-411.8a8 8 0 00-8-8.2z" } }] }, name: "sync", theme: "outlined" };
function Fs() {
  return Fs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Fs.apply(this, arguments);
}
const nx = (e, t) => /* @__PURE__ */ w.createElement($r, Fs({}, e, {
  ref: t,
  icon: tx
})), hf = /* @__PURE__ */ w.forwardRef(nx);
process.env.NODE_ENV !== "production" && (hf.displayName = "SyncOutlined");
var io = { exports: {} }, Ae = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var el;
function rx() {
  if (el) return Ae;
  el = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g;
  g = Symbol.for("react.module.reference");
  function h(x) {
    if (typeof x == "object" && x !== null) {
      var y = x.$$typeof;
      switch (y) {
        case e:
          switch (x = x.type, x) {
            case n:
            case o:
            case r:
            case l:
            case u:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case a:
                case s:
                case c:
                case f:
                case d:
                case i:
                  return x;
                default:
                  return y;
              }
          }
        case t:
          return y;
      }
    }
  }
  return Ae.ContextConsumer = s, Ae.ContextProvider = i, Ae.Element = e, Ae.ForwardRef = c, Ae.Fragment = n, Ae.Lazy = f, Ae.Memo = d, Ae.Portal = t, Ae.Profiler = o, Ae.StrictMode = r, Ae.Suspense = l, Ae.SuspenseList = u, Ae.isAsyncMode = function() {
    return !1;
  }, Ae.isConcurrentMode = function() {
    return !1;
  }, Ae.isContextConsumer = function(x) {
    return h(x) === s;
  }, Ae.isContextProvider = function(x) {
    return h(x) === i;
  }, Ae.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === e;
  }, Ae.isForwardRef = function(x) {
    return h(x) === c;
  }, Ae.isFragment = function(x) {
    return h(x) === n;
  }, Ae.isLazy = function(x) {
    return h(x) === f;
  }, Ae.isMemo = function(x) {
    return h(x) === d;
  }, Ae.isPortal = function(x) {
    return h(x) === t;
  }, Ae.isProfiler = function(x) {
    return h(x) === o;
  }, Ae.isStrictMode = function(x) {
    return h(x) === r;
  }, Ae.isSuspense = function(x) {
    return h(x) === l;
  }, Ae.isSuspenseList = function(x) {
    return h(x) === u;
  }, Ae.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === n || x === o || x === r || x === l || x === u || x === v || typeof x == "object" && x !== null && (x.$$typeof === f || x.$$typeof === d || x.$$typeof === i || x.$$typeof === s || x.$$typeof === c || x.$$typeof === g || x.getModuleId !== void 0);
  }, Ae.typeOf = h, Ae;
}
var Te = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tl;
function ox() {
  return tl || (tl = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g = !1, h = !1, x = !1, y = !1, S = !1, p;
    p = Symbol.for("react.module.reference");
    function E(A) {
      return !!(typeof A == "string" || typeof A == "function" || A === n || A === o || S || A === r || A === l || A === u || y || A === v || g || h || x || typeof A == "object" && A !== null && (A.$$typeof === f || A.$$typeof === d || A.$$typeof === i || A.$$typeof === s || A.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      A.$$typeof === p || A.getModuleId !== void 0));
    }
    function b(A) {
      if (typeof A == "object" && A !== null) {
        var L = A.$$typeof;
        switch (L) {
          case e:
            var B = A.type;
            switch (B) {
              case n:
              case o:
              case r:
              case l:
              case u:
                return B;
              default:
                var _ = B && B.$$typeof;
                switch (_) {
                  case a:
                  case s:
                  case c:
                  case f:
                  case d:
                  case i:
                    return _;
                  default:
                    return L;
                }
            }
          case t:
            return L;
        }
      }
    }
    var T = s, O = i, k = e, F = c, G = n, oe = f, te = d, H = t, X = o, Q = r, N = l, R = u, P = !1, j = !1;
    function $(A) {
      return P || (P = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function V(A) {
      return j || (j = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Y(A) {
      return b(A) === s;
    }
    function re(A) {
      return b(A) === i;
    }
    function ee(A) {
      return typeof A == "object" && A !== null && A.$$typeof === e;
    }
    function ae(A) {
      return b(A) === c;
    }
    function le(A) {
      return b(A) === n;
    }
    function ue(A) {
      return b(A) === f;
    }
    function _e(A) {
      return b(A) === d;
    }
    function me(A) {
      return b(A) === t;
    }
    function je(A) {
      return b(A) === o;
    }
    function Ne(A) {
      return b(A) === r;
    }
    function xe(A) {
      return b(A) === l;
    }
    function M(A) {
      return b(A) === u;
    }
    Te.ContextConsumer = T, Te.ContextProvider = O, Te.Element = k, Te.ForwardRef = F, Te.Fragment = G, Te.Lazy = oe, Te.Memo = te, Te.Portal = H, Te.Profiler = X, Te.StrictMode = Q, Te.Suspense = N, Te.SuspenseList = R, Te.isAsyncMode = $, Te.isConcurrentMode = V, Te.isContextConsumer = Y, Te.isContextProvider = re, Te.isElement = ee, Te.isForwardRef = ae, Te.isFragment = le, Te.isLazy = ue, Te.isMemo = _e, Te.isPortal = me, Te.isProfiler = je, Te.isStrictMode = Ne, Te.isSuspense = xe, Te.isSuspenseList = M, Te.isValidElementType = E, Te.typeOf = b;
  }()), Te;
}
var nl;
function ix() {
  return nl || (nl = 1, process.env.NODE_ENV === "production" ? io.exports = rx() : io.exports = ox()), io.exports;
}
var ts = ix();
const Ht = /* @__PURE__ */ Object.create(null);
Ht.open = "0";
Ht.close = "1";
Ht.ping = "2";
Ht.pong = "3";
Ht.message = "4";
Ht.upgrade = "5";
Ht.noop = "6";
const wo = /* @__PURE__ */ Object.create(null);
Object.keys(Ht).forEach((e) => {
  wo[Ht[e]] = e;
});
const $s = { type: "error", data: "parser error" }, pf = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", xf = typeof ArrayBuffer == "function", gf = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer, Ga = ({ type: e, data: t }, n, r) => pf && t instanceof Blob ? n ? r(t) : rl(t, r) : xf && (t instanceof ArrayBuffer || gf(t)) ? n ? r(t) : rl(new Blob([t]), r) : r(Ht[e] + (t || "")), rl = (e, t) => {
  const n = new FileReader();
  return n.onload = function() {
    const r = n.result.split(",")[1];
    t("b" + (r || ""));
  }, n.readAsDataURL(e);
};
function ol(e) {
  return e instanceof Uint8Array ? e : e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
let ns;
function sx(e, t) {
  if (pf && e.data instanceof Blob)
    return e.data.arrayBuffer().then(ol).then(t);
  if (xf && (e.data instanceof ArrayBuffer || gf(e.data)))
    return t(ol(e.data));
  Ga(e, !1, (n) => {
    ns || (ns = new TextEncoder()), t(ns.encode(n));
  });
}
const il = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Or = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < il.length; e++)
  Or[il.charCodeAt(e)] = e;
const ax = (e) => {
  let t = e.length * 0.75, n = e.length, r, o = 0, i, s, a, c;
  e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
  const l = new ArrayBuffer(t), u = new Uint8Array(l);
  for (r = 0; r < n; r += 4)
    i = Or[e.charCodeAt(r)], s = Or[e.charCodeAt(r + 1)], a = Or[e.charCodeAt(r + 2)], c = Or[e.charCodeAt(r + 3)], u[o++] = i << 2 | s >> 4, u[o++] = (s & 15) << 4 | a >> 2, u[o++] = (a & 3) << 6 | c & 63;
  return l;
}, cx = typeof ArrayBuffer == "function", Ya = (e, t) => {
  if (typeof e != "string")
    return {
      type: "message",
      data: mf(e, t)
    };
  const n = e.charAt(0);
  return n === "b" ? {
    type: "message",
    data: lx(e.substring(1), t)
  } : wo[n] ? e.length > 1 ? {
    type: wo[n],
    data: e.substring(1)
  } : {
    type: wo[n]
  } : $s;
}, lx = (e, t) => {
  if (cx) {
    const n = ax(e);
    return mf(n, t);
  } else
    return { base64: !0, data: e };
}, mf = (e, t) => {
  switch (t) {
    case "blob":
      return e instanceof Blob ? e : new Blob([e]);
    case "arraybuffer":
    default:
      return e instanceof ArrayBuffer ? e : e.buffer;
  }
}, vf = "", ux = (e, t) => {
  const n = e.length, r = new Array(n);
  let o = 0;
  e.forEach((i, s) => {
    Ga(i, !1, (a) => {
      r[s] = a, ++o === n && t(r.join(vf));
    });
  });
}, fx = (e, t) => {
  const n = e.split(vf), r = [];
  for (let o = 0; o < n.length; o++) {
    const i = Ya(n[o], t);
    if (r.push(i), i.type === "error")
      break;
  }
  return r;
};
function dx() {
  return new TransformStream({
    transform(e, t) {
      sx(e, (n) => {
        const r = n.length;
        let o;
        if (r < 126)
          o = new Uint8Array(1), new DataView(o.buffer).setUint8(0, r);
        else if (r < 65536) {
          o = new Uint8Array(3);
          const i = new DataView(o.buffer);
          i.setUint8(0, 126), i.setUint16(1, r);
        } else {
          o = new Uint8Array(9);
          const i = new DataView(o.buffer);
          i.setUint8(0, 127), i.setBigUint64(1, BigInt(r));
        }
        e.data && typeof e.data != "string" && (o[0] |= 128), t.enqueue(o), t.enqueue(n);
      });
    }
  });
}
let rs;
function so(e) {
  return e.reduce((t, n) => t + n.length, 0);
}
function ao(e, t) {
  if (e[0].length === t)
    return e.shift();
  const n = new Uint8Array(t);
  let r = 0;
  for (let o = 0; o < t; o++)
    n[o] = e[0][r++], r === e[0].length && (e.shift(), r = 0);
  return e.length && r < e[0].length && (e[0] = e[0].slice(r)), n;
}
function hx(e, t) {
  rs || (rs = new TextDecoder());
  const n = [];
  let r = 0, o = -1, i = !1;
  return new TransformStream({
    transform(s, a) {
      for (n.push(s); ; ) {
        if (r === 0) {
          if (so(n) < 1)
            break;
          const c = ao(n, 1);
          i = (c[0] & 128) === 128, o = c[0] & 127, o < 126 ? r = 3 : o === 126 ? r = 1 : r = 2;
        } else if (r === 1) {
          if (so(n) < 2)
            break;
          const c = ao(n, 2);
          o = new DataView(c.buffer, c.byteOffset, c.length).getUint16(0), r = 3;
        } else if (r === 2) {
          if (so(n) < 8)
            break;
          const c = ao(n, 8), l = new DataView(c.buffer, c.byteOffset, c.length), u = l.getUint32(0);
          if (u > Math.pow(2, 21) - 1) {
            a.enqueue($s);
            break;
          }
          o = u * Math.pow(2, 32) + l.getUint32(4), r = 3;
        } else {
          if (so(n) < o)
            break;
          const c = ao(n, o);
          a.enqueue(Ya(i ? c : rs.decode(c), t)), r = 0;
        }
        if (o === 0 || o > e) {
          a.enqueue($s);
          break;
        }
      }
    }
  });
}
const bf = 4;
function Qe(e) {
  if (e) return px(e);
}
function px(e) {
  for (var t in Qe.prototype)
    e[t] = Qe.prototype[t];
  return e;
}
Qe.prototype.on = Qe.prototype.addEventListener = function(e, t) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this;
};
Qe.prototype.once = function(e, t) {
  function n() {
    this.off(e, n), t.apply(this, arguments);
  }
  return n.fn = t, this.on(e, n), this;
};
Qe.prototype.off = Qe.prototype.removeListener = Qe.prototype.removeAllListeners = Qe.prototype.removeEventListener = function(e, t) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var n = this._callbacks["$" + e];
  if (!n) return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + e], this;
  for (var r, o = 0; o < n.length; o++)
    if (r = n[o], r === t || r.fn === t) {
      n.splice(o, 1);
      break;
    }
  return n.length === 0 && delete this._callbacks["$" + e], this;
};
Qe.prototype.emit = function(e) {
  this._callbacks = this._callbacks || {};
  for (var t = new Array(arguments.length - 1), n = this._callbacks["$" + e], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  if (n) {
    n = n.slice(0);
    for (var r = 0, o = n.length; r < o; ++r)
      n[r].apply(this, t);
  }
  return this;
};
Qe.prototype.emitReserved = Qe.prototype.emit;
Qe.prototype.listeners = function(e) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [];
};
Qe.prototype.hasListeners = function(e) {
  return !!this.listeners(e).length;
};
const yi = typeof Promise == "function" && typeof Promise.resolve == "function" ? (t) => Promise.resolve().then(t) : (t, n) => n(t, 0), wt = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), xx = "arraybuffer";
function yf(e, ...t) {
  return t.reduce((n, r) => (e.hasOwnProperty(r) && (n[r] = e[r]), n), {});
}
const gx = wt.setTimeout, mx = wt.clearTimeout;
function Si(e, t) {
  t.useNativeTimers ? (e.setTimeoutFn = gx.bind(wt), e.clearTimeoutFn = mx.bind(wt)) : (e.setTimeoutFn = wt.setTimeout.bind(wt), e.clearTimeoutFn = wt.clearTimeout.bind(wt));
}
const vx = 1.33;
function bx(e) {
  return typeof e == "string" ? yx(e) : Math.ceil((e.byteLength || e.size) * vx);
}
function yx(e) {
  let t = 0, n = 0;
  for (let r = 0, o = e.length; r < o; r++)
    t = e.charCodeAt(r), t < 128 ? n += 1 : t < 2048 ? n += 2 : t < 55296 || t >= 57344 ? n += 3 : (r++, n += 4);
  return n;
}
function Sf() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function Sx(e) {
  let t = "";
  for (let n in e)
    e.hasOwnProperty(n) && (t.length && (t += "&"), t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
  return t;
}
function Cx(e) {
  let t = {}, n = e.split("&");
  for (let r = 0, o = n.length; r < o; r++) {
    let i = n[r].split("=");
    t[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
  }
  return t;
}
class wx extends Error {
  constructor(t, n, r) {
    super(t), this.description = n, this.context = r, this.type = "TransportError";
  }
}
class Xa extends Qe {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(t) {
    super(), this.writable = !1, Si(this, t), this.opts = t, this.query = t.query, this.socket = t.socket, this.supportsBinary = !t.forceBase64;
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
  onError(t, n, r) {
    return super.emitReserved("error", new wx(t, n, r)), this;
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
  send(t) {
    this.readyState === "open" && this.write(t);
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
  onData(t) {
    const n = Ya(t, this.socket.binaryType);
    this.onPacket(n);
  }
  /**
   * Called with a decoded packet.
   *
   * @protected
   */
  onPacket(t) {
    super.emitReserved("packet", t);
  }
  /**
   * Called upon close.
   *
   * @protected
   */
  onClose(t) {
    this.readyState = "closed", super.emitReserved("close", t);
  }
  /**
   * Pauses the transport, in order not to lose packets during an upgrade.
   *
   * @param onPause
   */
  pause(t) {
  }
  createUri(t, n = {}) {
    return t + "://" + this._hostname() + this._port() + this.opts.path + this._query(n);
  }
  _hostname() {
    const t = this.opts.hostname;
    return t.indexOf(":") === -1 ? t : "[" + t + "]";
  }
  _port() {
    return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : "";
  }
  _query(t) {
    const n = Sx(t);
    return n.length ? "?" + n : "";
  }
}
class Ex extends Xa {
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
  pause(t) {
    this.readyState = "pausing";
    const n = () => {
      this.readyState = "paused", t();
    };
    if (this._polling || !this.writable) {
      let r = 0;
      this._polling && (r++, this.once("pollComplete", function() {
        --r || n();
      })), this.writable || (r++, this.once("drain", function() {
        --r || n();
      }));
    } else
      n();
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
  onData(t) {
    const n = (r) => {
      if (this.readyState === "opening" && r.type === "open" && this.onOpen(), r.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(r);
    };
    fx(t, this.socket.binaryType).forEach(n), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
  }
  /**
   * For polling, send a close packet.
   *
   * @protected
   */
  doClose() {
    const t = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? t() : this.once("open", t);
  }
  /**
   * Writes a packets payload.
   *
   * @param {Array} packets - data packets
   * @protected
   */
  write(t) {
    this.writable = !1, ux(t, (n) => {
      this.doWrite(n, () => {
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
    const t = this.opts.secure ? "https" : "http", n = this.query || {};
    return this.opts.timestampRequests !== !1 && (n[this.opts.timestampParam] = Sf()), !this.supportsBinary && !n.sid && (n.b64 = 1), this.createUri(t, n);
  }
}
let Cf = !1;
try {
  Cf = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const _x = Cf;
function Ox() {
}
class Ax extends Ex {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(t) {
    if (super(t), typeof location < "u") {
      const n = location.protocol === "https:";
      let r = location.port;
      r || (r = n ? "443" : "80"), this.xd = typeof location < "u" && t.hostname !== location.hostname || r !== t.port;
    }
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(t, n) {
    const r = this.request({
      method: "POST",
      data: t
    });
    r.on("success", n), r.on("error", (o, i) => {
      this.onError("xhr post error", o, i);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    const t = this.request();
    t.on("data", this.onData.bind(this)), t.on("error", (n, r) => {
      this.onError("xhr poll error", n, r);
    }), this.pollXhr = t;
  }
}
let Hn = class Eo extends Qe {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(t, n, r) {
    super(), this.createRequest = t, Si(this, r), this._opts = r, this._method = r.method || "GET", this._uri = n, this._data = r.data !== void 0 ? r.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var t;
    const n = yf(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    n.xdomain = !!this._opts.xd;
    const r = this._xhr = this.createRequest(n);
    try {
      r.open(this._method, this._uri, !0);
      try {
        if (this._opts.extraHeaders) {
          r.setDisableHeaderCheck && r.setDisableHeaderCheck(!0);
          for (let o in this._opts.extraHeaders)
            this._opts.extraHeaders.hasOwnProperty(o) && r.setRequestHeader(o, this._opts.extraHeaders[o]);
        }
      } catch {
      }
      if (this._method === "POST")
        try {
          r.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {
        }
      try {
        r.setRequestHeader("Accept", "*/*");
      } catch {
      }
      (t = this._opts.cookieJar) === null || t === void 0 || t.addCookies(r), "withCredentials" in r && (r.withCredentials = this._opts.withCredentials), this._opts.requestTimeout && (r.timeout = this._opts.requestTimeout), r.onreadystatechange = () => {
        var o;
        r.readyState === 3 && ((o = this._opts.cookieJar) === null || o === void 0 || o.parseCookies(
          // @ts-ignore
          r.getResponseHeader("set-cookie")
        )), r.readyState === 4 && (r.status === 200 || r.status === 1223 ? this._onLoad() : this.setTimeoutFn(() => {
          this._onError(typeof r.status == "number" ? r.status : 0);
        }, 0));
      }, r.send(this._data);
    } catch (o) {
      this.setTimeoutFn(() => {
        this._onError(o);
      }, 0);
      return;
    }
    typeof document < "u" && (this._index = Eo.requestsCount++, Eo.requests[this._index] = this);
  }
  /**
   * Called upon error.
   *
   * @private
   */
  _onError(t) {
    this.emitReserved("error", t, this._xhr), this._cleanup(!0);
  }
  /**
   * Cleans up house.
   *
   * @private
   */
  _cleanup(t) {
    if (!(typeof this._xhr > "u" || this._xhr === null)) {
      if (this._xhr.onreadystatechange = Ox, t)
        try {
          this._xhr.abort();
        } catch {
        }
      typeof document < "u" && delete Eo.requests[this._index], this._xhr = null;
    }
  }
  /**
   * Called upon load.
   *
   * @private
   */
  _onLoad() {
    const t = this._xhr.responseText;
    t !== null && (this.emitReserved("data", t), this.emitReserved("success"), this._cleanup());
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
Hn.requestsCount = 0;
Hn.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", sl);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in wt ? "pagehide" : "unload";
    addEventListener(e, sl, !1);
  }
}
function sl() {
  for (let e in Hn.requests)
    Hn.requests.hasOwnProperty(e) && Hn.requests[e].abort();
}
const Tx = function() {
  const e = wf({
    xdomain: !1
  });
  return e && e.responseType !== null;
}();
class Rx extends Ax {
  constructor(t) {
    super(t);
    const n = t && t.forceBase64;
    this.supportsBinary = Tx && !n;
  }
  request(t = {}) {
    return Object.assign(t, { xd: this.xd }, this.opts), new Hn(wf, this.uri(), t);
  }
}
function wf(e) {
  const t = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!t || _x))
      return new XMLHttpRequest();
  } catch {
  }
  if (!t)
    try {
      return new wt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const Ef = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class Px extends Xa {
  get name() {
    return "websocket";
  }
  doOpen() {
    const t = this.uri(), n = this.opts.protocols, r = Ef ? {} : yf(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(t, n, r);
    } catch (o) {
      return this.emitReserved("error", o);
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
    }, this.ws.onclose = (t) => this.onClose({
      description: "websocket connection closed",
      context: t
    }), this.ws.onmessage = (t) => this.onData(t.data), this.ws.onerror = (t) => this.onError("websocket error", t);
  }
  write(t) {
    this.writable = !1;
    for (let n = 0; n < t.length; n++) {
      const r = t[n], o = n === t.length - 1;
      Ga(r, this.supportsBinary, (i) => {
        try {
          this.doWrite(r, i);
        } catch {
        }
        o && yi(() => {
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
    const t = this.opts.secure ? "wss" : "ws", n = this.query || {};
    return this.opts.timestampRequests && (n[this.opts.timestampParam] = Sf()), this.supportsBinary || (n.b64 = 1), this.createUri(t, n);
  }
}
const os = wt.WebSocket || wt.MozWebSocket;
class Ix extends Px {
  createSocket(t, n, r) {
    return Ef ? new os(t, n, r) : n ? new os(t, n) : new os(t);
  }
  doWrite(t, n) {
    this.ws.send(n);
  }
}
class Nx extends Xa {
  get name() {
    return "webtransport";
  }
  doOpen() {
    try {
      this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
    } catch (t) {
      return this.emitReserved("error", t);
    }
    this._transport.closed.then(() => {
      this.onClose();
    }).catch((t) => {
      this.onError("webtransport error", t);
    }), this._transport.ready.then(() => {
      this._transport.createBidirectionalStream().then((t) => {
        const n = hx(Number.MAX_SAFE_INTEGER, this.socket.binaryType), r = t.readable.pipeThrough(n).getReader(), o = dx();
        o.readable.pipeTo(t.writable), this._writer = o.writable.getWriter();
        const i = () => {
          r.read().then(({ done: a, value: c }) => {
            a || (this.onPacket(c), i());
          }).catch((a) => {
          });
        };
        i();
        const s = { type: "open" };
        this.query.sid && (s.data = `{"sid":"${this.query.sid}"}`), this._writer.write(s).then(() => this.onOpen());
      });
    });
  }
  write(t) {
    this.writable = !1;
    for (let n = 0; n < t.length; n++) {
      const r = t[n], o = n === t.length - 1;
      this._writer.write(r).then(() => {
        o && yi(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var t;
    (t = this._transport) === null || t === void 0 || t.close();
  }
}
const kx = {
  websocket: Ix,
  webtransport: Nx,
  polling: Rx
}, jx = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, Lx = [
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
function Vs(e) {
  if (e.length > 8e3)
    throw "URI too long";
  const t = e, n = e.indexOf("["), r = e.indexOf("]");
  n != -1 && r != -1 && (e = e.substring(0, n) + e.substring(n, r).replace(/:/g, ";") + e.substring(r, e.length));
  let o = jx.exec(e || ""), i = {}, s = 14;
  for (; s--; )
    i[Lx[s]] = o[s] || "";
  return n != -1 && r != -1 && (i.source = t, i.host = i.host.substring(1, i.host.length - 1).replace(/;/g, ":"), i.authority = i.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), i.ipv6uri = !0), i.pathNames = Mx(i, i.path), i.queryKey = Dx(i, i.query), i;
}
function Mx(e, t) {
  const n = /\/{2,9}/g, r = t.replace(n, "/").split("/");
  return (t.slice(0, 1) == "/" || t.length === 0) && r.splice(0, 1), t.slice(-1) == "/" && r.splice(r.length - 1, 1), r;
}
function Dx(e, t) {
  const n = {};
  return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(r, o, i) {
    o && (n[o] = i);
  }), n;
}
const Ws = typeof addEventListener == "function" && typeof removeEventListener == "function", _o = [];
Ws && addEventListener("offline", () => {
  _o.forEach((e) => e());
}, !1);
class an extends Qe {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(t, n) {
    if (super(), this.binaryType = xx, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, t && typeof t == "object" && (n = t, t = null), t) {
      const r = Vs(t);
      n.hostname = r.host, n.secure = r.protocol === "https" || r.protocol === "wss", n.port = r.port, r.query && (n.query = r.query);
    } else n.host && (n.hostname = Vs(n.host).host);
    Si(this, n), this.secure = n.secure != null ? n.secure : typeof location < "u" && location.protocol === "https:", n.hostname && !n.port && (n.port = this.secure ? "443" : "80"), this.hostname = n.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = n.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, n.transports.forEach((r) => {
      const o = r.prototype.name;
      this.transports.push(o), this._transportsByName[o] = r;
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
    }, n), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = Cx(this.opts.query)), Ws && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, _o.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} name - transport name
   * @return {Transport}
   * @private
   */
  createTransport(t) {
    const n = Object.assign({}, this.opts.query);
    n.EIO = bf, n.transport = t, this.id && (n.sid = this.id);
    const r = Object.assign({}, this.opts, {
      query: n,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[t]);
    return new this._transportsByName[t](r);
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
    const t = this.opts.rememberUpgrade && an.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
    this.readyState = "opening";
    const n = this.createTransport(t);
    n.open(), this.setTransport(n);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(t) {
    this.transport && this.transport.removeAllListeners(), this.transport = t, t.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", (n) => this._onClose("transport close", n));
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    this.readyState = "open", an.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
  }
  /**
   * Handles a packet.
   *
   * @private
   */
  _onPacket(t) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
      switch (this.emitReserved("packet", t), this.emitReserved("heartbeat"), t.type) {
        case "open":
          this.onHandshake(JSON.parse(t.data));
          break;
        case "ping":
          this._sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong"), this._resetPingTimeout();
          break;
        case "error":
          const n = new Error("server error");
          n.code = t.data, this._onError(n);
          break;
        case "message":
          this.emitReserved("data", t.data), this.emitReserved("message", t.data);
          break;
      }
  }
  /**
   * Called upon handshake completion.
   *
   * @param {Object} data - handshake obj
   * @private
   */
  onHandshake(t) {
    this.emitReserved("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this._pingInterval = t.pingInterval, this._pingTimeout = t.pingTimeout, this._maxPayload = t.maxPayload, this.onOpen(), this.readyState !== "closed" && this._resetPingTimeout();
  }
  /**
   * Sets and resets ping timeout timer based on server pings.
   *
   * @private
   */
  _resetPingTimeout() {
    this.clearTimeoutFn(this._pingTimeoutTimer);
    const t = this._pingInterval + this._pingTimeout;
    this._pingTimeoutTime = Date.now() + t, this._pingTimeoutTimer = this.setTimeoutFn(() => {
      this._onClose("ping timeout");
    }, t), this.opts.autoUnref && this._pingTimeoutTimer.unref();
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
      const t = this._getWritablePackets();
      this.transport.send(t), this._prevBufferLen = t.length, this.emitReserved("flush");
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
    let n = 1;
    for (let r = 0; r < this.writeBuffer.length; r++) {
      const o = this.writeBuffer[r].data;
      if (o && (n += bx(o)), r > 0 && n > this._maxPayload)
        return this.writeBuffer.slice(0, r);
      n += 2;
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
    const t = Date.now() > this._pingTimeoutTime;
    return t && (this._pingTimeoutTime = 0, yi(() => {
      this._onClose("ping timeout");
    }, this.setTimeoutFn)), t;
  }
  /**
   * Sends a message.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  write(t, n, r) {
    return this._sendPacket("message", t, n, r), this;
  }
  /**
   * Sends a message. Alias of {@link Socket#write}.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  send(t, n, r) {
    return this._sendPacket("message", t, n, r), this;
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
  _sendPacket(t, n, r, o) {
    if (typeof n == "function" && (o = n, n = void 0), typeof r == "function" && (o = r, r = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    r = r || {}, r.compress = r.compress !== !1;
    const i = {
      type: t,
      data: n,
      options: r
    };
    this.emitReserved("packetCreate", i), this.writeBuffer.push(i), o && this.once("flush", o), this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const t = () => {
      this._onClose("forced close"), this.transport.close();
    }, n = () => {
      this.off("upgrade", n), this.off("upgradeError", n), t();
    }, r = () => {
      this.once("upgrade", n), this.once("upgradeError", n);
    };
    return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
      this.upgrading ? r() : t();
    }) : this.upgrading ? r() : t()), this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  _onError(t) {
    if (an.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
      return this.transports.shift(), this._open();
    this.emitReserved("error", t), this._onClose("transport error", t);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  _onClose(t, n) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), Ws && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const r = _o.indexOf(this._offlineEventListener);
        r !== -1 && _o.splice(r, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", t, n), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
an.protocol = bf;
class Bx extends an {
  constructor() {
    super(...arguments), this._upgrades = [];
  }
  onOpen() {
    if (super.onOpen(), this.readyState === "open" && this.opts.upgrade)
      for (let t = 0; t < this._upgrades.length; t++)
        this._probe(this._upgrades[t]);
  }
  /**
   * Probes a transport.
   *
   * @param {String} name - transport name
   * @private
   */
  _probe(t) {
    let n = this.createTransport(t), r = !1;
    an.priorWebsocketSuccess = !1;
    const o = () => {
      r || (n.send([{ type: "ping", data: "probe" }]), n.once("packet", (d) => {
        if (!r)
          if (d.type === "pong" && d.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", n), !n)
              return;
            an.priorWebsocketSuccess = n.name === "websocket", this.transport.pause(() => {
              r || this.readyState !== "closed" && (u(), this.setTransport(n), n.send([{ type: "upgrade" }]), this.emitReserved("upgrade", n), n = null, this.upgrading = !1, this.flush());
            });
          } else {
            const f = new Error("probe error");
            f.transport = n.name, this.emitReserved("upgradeError", f);
          }
      }));
    };
    function i() {
      r || (r = !0, u(), n.close(), n = null);
    }
    const s = (d) => {
      const f = new Error("probe error: " + d);
      f.transport = n.name, i(), this.emitReserved("upgradeError", f);
    };
    function a() {
      s("transport closed");
    }
    function c() {
      s("socket closed");
    }
    function l(d) {
      n && d.name !== n.name && i();
    }
    const u = () => {
      n.removeListener("open", o), n.removeListener("error", s), n.removeListener("close", a), this.off("close", c), this.off("upgrading", l);
    };
    n.once("open", o), n.once("error", s), n.once("close", a), this.once("close", c), this.once("upgrading", l), this._upgrades.indexOf("webtransport") !== -1 && t !== "webtransport" ? this.setTimeoutFn(() => {
      r || n.open();
    }, 200) : n.open();
  }
  onHandshake(t) {
    this._upgrades = this._filterUpgrades(t.upgrades), super.onHandshake(t);
  }
  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} upgrades - server upgrades
   * @private
   */
  _filterUpgrades(t) {
    const n = [];
    for (let r = 0; r < t.length; r++)
      ~this.transports.indexOf(t[r]) && n.push(t[r]);
    return n;
  }
}
let zx = class extends Bx {
  constructor(t, n = {}) {
    const r = typeof t == "object" ? t : n;
    (!r.transports || r.transports && typeof r.transports[0] == "string") && (r.transports = (r.transports || ["polling", "websocket", "webtransport"]).map((o) => kx[o]).filter((o) => !!o)), super(t, r);
  }
};
function Hx(e, t = "", n) {
  let r = e;
  n = n || typeof location < "u" && location, e == null && (e = n.protocol + "//" + n.host), typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = n.protocol + e : e = n.host + e), /^(https?|wss?):\/\//.test(e) || (typeof n < "u" ? e = n.protocol + "//" + e : e = "https://" + e), r = Vs(e)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
  const i = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return r.id = r.protocol + "://" + i + ":" + r.port + t, r.href = r.protocol + "://" + i + (n && n.port === r.port ? "" : ":" + r.port), r;
}
const Fx = typeof ArrayBuffer == "function", $x = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer, _f = Object.prototype.toString, Vx = typeof Blob == "function" || typeof Blob < "u" && _f.call(Blob) === "[object BlobConstructor]", Wx = typeof File == "function" || typeof File < "u" && _f.call(File) === "[object FileConstructor]";
function Ka(e) {
  return Fx && (e instanceof ArrayBuffer || $x(e)) || Vx && e instanceof Blob || Wx && e instanceof File;
}
function Oo(e, t) {
  if (!e || typeof e != "object")
    return !1;
  if (Array.isArray(e)) {
    for (let n = 0, r = e.length; n < r; n++)
      if (Oo(e[n]))
        return !0;
    return !1;
  }
  if (Ka(e))
    return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return Oo(e.toJSON(), !0);
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && Oo(e[n]))
      return !0;
  return !1;
}
function qx(e) {
  const t = [], n = e.data, r = e;
  return r.data = qs(n, t), r.attachments = t.length, { packet: r, buffers: t };
}
function qs(e, t) {
  if (!e)
    return e;
  if (Ka(e)) {
    const n = { _placeholder: !0, num: t.length };
    return t.push(e), n;
  } else if (Array.isArray(e)) {
    const n = new Array(e.length);
    for (let r = 0; r < e.length; r++)
      n[r] = qs(e[r], t);
    return n;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const n = {};
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (n[r] = qs(e[r], t));
    return n;
  }
  return e;
}
function Ux(e, t) {
  return e.data = Us(e.data, t), delete e.attachments, e;
}
function Us(e, t) {
  if (!e)
    return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < t.length)
      return t[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let n = 0; n < e.length; n++)
      e[n] = Us(e[n], t);
  else if (typeof e == "object")
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (e[n] = Us(e[n], t));
  return e;
}
const Gx = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], Yx = 5;
var ve;
(function(e) {
  e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK";
})(ve || (ve = {}));
class Xx {
  /**
   * Encoder constructor
   *
   * @param {function} replacer - custom replacer to pass down to JSON.parse
   */
  constructor(t) {
    this.replacer = t;
  }
  /**
   * Encode a packet as a single string if non-binary, or as a
   * buffer sequence, depending on packet type.
   *
   * @param {Object} obj - packet object
   */
  encode(t) {
    return (t.type === ve.EVENT || t.type === ve.ACK) && Oo(t) ? this.encodeAsBinary({
      type: t.type === ve.EVENT ? ve.BINARY_EVENT : ve.BINARY_ACK,
      nsp: t.nsp,
      data: t.data,
      id: t.id
    }) : [this.encodeAsString(t)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(t) {
    let n = "" + t.type;
    return (t.type === ve.BINARY_EVENT || t.type === ve.BINARY_ACK) && (n += t.attachments + "-"), t.nsp && t.nsp !== "/" && (n += t.nsp + ","), t.id != null && (n += t.id), t.data != null && (n += JSON.stringify(t.data, this.replacer)), n;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(t) {
    const n = qx(t), r = this.encodeAsString(n.packet), o = n.buffers;
    return o.unshift(r), o;
  }
}
function al(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
class Za extends Qe {
  /**
   * Decoder constructor
   *
   * @param {function} reviver - custom reviver to pass down to JSON.stringify
   */
  constructor(t) {
    super(), this.reviver = t;
  }
  /**
   * Decodes an encoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   */
  add(t) {
    let n;
    if (typeof t == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      n = this.decodeString(t);
      const r = n.type === ve.BINARY_EVENT;
      r || n.type === ve.BINARY_ACK ? (n.type = r ? ve.EVENT : ve.ACK, this.reconstructor = new Kx(n), n.attachments === 0 && super.emitReserved("decoded", n)) : super.emitReserved("decoded", n);
    } else if (Ka(t) || t.base64)
      if (this.reconstructor)
        n = this.reconstructor.takeBinaryData(t), n && (this.reconstructor = null, super.emitReserved("decoded", n));
      else
        throw new Error("got binary data when not reconstructing a packet");
    else
      throw new Error("Unknown type: " + t);
  }
  /**
   * Decode a packet String (JSON data)
   *
   * @param {String} str
   * @return {Object} packet
   */
  decodeString(t) {
    let n = 0;
    const r = {
      type: Number(t.charAt(0))
    };
    if (ve[r.type] === void 0)
      throw new Error("unknown packet type " + r.type);
    if (r.type === ve.BINARY_EVENT || r.type === ve.BINARY_ACK) {
      const i = n + 1;
      for (; t.charAt(++n) !== "-" && n != t.length; )
        ;
      const s = t.substring(i, n);
      if (s != Number(s) || t.charAt(n) !== "-")
        throw new Error("Illegal attachments");
      r.attachments = Number(s);
    }
    if (t.charAt(n + 1) === "/") {
      const i = n + 1;
      for (; ++n && !(t.charAt(n) === "," || n === t.length); )
        ;
      r.nsp = t.substring(i, n);
    } else
      r.nsp = "/";
    const o = t.charAt(n + 1);
    if (o !== "" && Number(o) == o) {
      const i = n + 1;
      for (; ++n; ) {
        const s = t.charAt(n);
        if (s == null || Number(s) != s) {
          --n;
          break;
        }
        if (n === t.length)
          break;
      }
      r.id = Number(t.substring(i, n + 1));
    }
    if (t.charAt(++n)) {
      const i = this.tryParse(t.substr(n));
      if (Za.isPayloadValid(r.type, i))
        r.data = i;
      else
        throw new Error("invalid payload");
    }
    return r;
  }
  tryParse(t) {
    try {
      return JSON.parse(t, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(t, n) {
    switch (t) {
      case ve.CONNECT:
        return al(n);
      case ve.DISCONNECT:
        return n === void 0;
      case ve.CONNECT_ERROR:
        return typeof n == "string" || al(n);
      case ve.EVENT:
      case ve.BINARY_EVENT:
        return Array.isArray(n) && (typeof n[0] == "number" || typeof n[0] == "string" && Gx.indexOf(n[0]) === -1);
      case ve.ACK:
      case ve.BINARY_ACK:
        return Array.isArray(n);
    }
  }
  /**
   * Deallocates a parser's resources
   */
  destroy() {
    this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null);
  }
}
class Kx {
  constructor(t) {
    this.packet = t, this.buffers = [], this.reconPack = t;
  }
  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   */
  takeBinaryData(t) {
    if (this.buffers.push(t), this.buffers.length === this.reconPack.attachments) {
      const n = Ux(this.reconPack, this.buffers);
      return this.finishedReconstruction(), n;
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
const Zx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: Za,
  Encoder: Xx,
  get PacketType() {
    return ve;
  },
  protocol: Yx
}, Symbol.toStringTag, { value: "Module" }));
function Tt(e, t, n) {
  return e.on(t, n), function() {
    e.off(t, n);
  };
}
const Jx = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class Of extends Qe {
  /**
   * `Socket` constructor.
   */
  constructor(t, n, r) {
    super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = t, this.nsp = n, r && r.auth && (this.auth = r.auth), this._opts = Object.assign({}, r), this.io._autoConnect && this.open();
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
    const t = this.io;
    this.subs = [
      Tt(t, "open", this.onopen.bind(this)),
      Tt(t, "packet", this.onpacket.bind(this)),
      Tt(t, "error", this.onerror.bind(this)),
      Tt(t, "close", this.onclose.bind(this))
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
  send(...t) {
    return t.unshift("message"), this.emit.apply(this, t), this;
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
  emit(t, ...n) {
    var r, o, i;
    if (Jx.hasOwnProperty(t))
      throw new Error('"' + t.toString() + '" is a reserved event name');
    if (n.unshift(t), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(n), this;
    const s = {
      type: ve.EVENT,
      data: n
    };
    if (s.options = {}, s.options.compress = this.flags.compress !== !1, typeof n[n.length - 1] == "function") {
      const u = this.ids++, d = n.pop();
      this._registerAckCallback(u, d), s.id = u;
    }
    const a = (o = (r = this.io.engine) === null || r === void 0 ? void 0 : r.transport) === null || o === void 0 ? void 0 : o.writable, c = this.connected && !(!((i = this.io.engine) === null || i === void 0) && i._hasPingExpired());
    return this.flags.volatile && !a || (c ? (this.notifyOutgoingListeners(s), this.packet(s)) : this.sendBuffer.push(s)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(t, n) {
    var r;
    const o = (r = this.flags.timeout) !== null && r !== void 0 ? r : this._opts.ackTimeout;
    if (o === void 0) {
      this.acks[t] = n;
      return;
    }
    const i = this.io.setTimeoutFn(() => {
      delete this.acks[t];
      for (let a = 0; a < this.sendBuffer.length; a++)
        this.sendBuffer[a].id === t && this.sendBuffer.splice(a, 1);
      n.call(this, new Error("operation has timed out"));
    }, o), s = (...a) => {
      this.io.clearTimeoutFn(i), n.apply(this, a);
    };
    s.withError = !0, this.acks[t] = s;
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
  emitWithAck(t, ...n) {
    return new Promise((r, o) => {
      const i = (s, a) => s ? o(s) : r(a);
      i.withError = !0, n.push(i), this.emit(t, ...n);
    });
  }
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
  _addToQueue(t) {
    let n;
    typeof t[t.length - 1] == "function" && (n = t.pop());
    const r = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: t,
      flags: Object.assign({ fromQueue: !0 }, this.flags)
    };
    t.push((o, ...i) => r !== this._queue[0] ? void 0 : (o !== null ? r.tryCount > this._opts.retries && (this._queue.shift(), n && n(o)) : (this._queue.shift(), n && n(null, ...i)), r.pending = !1, this._drainQueue())), this._queue.push(r), this._drainQueue();
  }
  /**
   * Send the first packet of the queue, and wait for an acknowledgement from the server.
   * @param force - whether to resend a packet that has not been acknowledged yet
   *
   * @private
   */
  _drainQueue(t = !1) {
    if (!this.connected || this._queue.length === 0)
      return;
    const n = this._queue[0];
    n.pending && !t || (n.pending = !0, n.tryCount++, this.flags = n.flags, this.emit.apply(this, n.args));
  }
  /**
   * Sends a packet.
   *
   * @param packet
   * @private
   */
  packet(t) {
    t.nsp = this.nsp, this.io._packet(t);
  }
  /**
   * Called upon engine `open`.
   *
   * @private
   */
  onopen() {
    typeof this.auth == "function" ? this.auth((t) => {
      this._sendConnectPacket(t);
    }) : this._sendConnectPacket(this.auth);
  }
  /**
   * Sends a CONNECT packet to initiate the Socket.IO session.
   *
   * @param data
   * @private
   */
  _sendConnectPacket(t) {
    this.packet({
      type: ve.CONNECT,
      data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, t) : t
    });
  }
  /**
   * Called upon engine or manager `error`.
   *
   * @param err
   * @private
   */
  onerror(t) {
    this.connected || this.emitReserved("connect_error", t);
  }
  /**
   * Called upon engine `close`.
   *
   * @param reason
   * @param description
   * @private
   */
  onclose(t, n) {
    this.connected = !1, delete this.id, this.emitReserved("disconnect", t, n), this._clearAcks();
  }
  /**
   * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
   * the server.
   *
   * @private
   */
  _clearAcks() {
    Object.keys(this.acks).forEach((t) => {
      if (!this.sendBuffer.some((r) => String(r.id) === t)) {
        const r = this.acks[t];
        delete this.acks[t], r.withError && r.call(this, new Error("socket has been disconnected"));
      }
    });
  }
  /**
   * Called with socket packet.
   *
   * @param packet
   * @private
   */
  onpacket(t) {
    if (t.nsp === this.nsp)
      switch (t.type) {
        case ve.CONNECT:
          t.data && t.data.sid ? this.onconnect(t.data.sid, t.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case ve.EVENT:
        case ve.BINARY_EVENT:
          this.onevent(t);
          break;
        case ve.ACK:
        case ve.BINARY_ACK:
          this.onack(t);
          break;
        case ve.DISCONNECT:
          this.ondisconnect();
          break;
        case ve.CONNECT_ERROR:
          this.destroy();
          const r = new Error(t.data.message);
          r.data = t.data.data, this.emitReserved("connect_error", r);
          break;
      }
  }
  /**
   * Called upon a server event.
   *
   * @param packet
   * @private
   */
  onevent(t) {
    const n = t.data || [];
    t.id != null && n.push(this.ack(t.id)), this.connected ? this.emitEvent(n) : this.receiveBuffer.push(Object.freeze(n));
  }
  emitEvent(t) {
    if (this._anyListeners && this._anyListeners.length) {
      const n = this._anyListeners.slice();
      for (const r of n)
        r.apply(this, t);
    }
    super.emit.apply(this, t), this._pid && t.length && typeof t[t.length - 1] == "string" && (this._lastOffset = t[t.length - 1]);
  }
  /**
   * Produces an ack callback to emit with an event.
   *
   * @private
   */
  ack(t) {
    const n = this;
    let r = !1;
    return function(...o) {
      r || (r = !0, n.packet({
        type: ve.ACK,
        id: t,
        data: o
      }));
    };
  }
  /**
   * Called upon a server acknowledgement.
   *
   * @param packet
   * @private
   */
  onack(t) {
    const n = this.acks[t.id];
    typeof n == "function" && (delete this.acks[t.id], n.withError && t.data.unshift(null), n.apply(this, t.data));
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(t, n) {
    this.id = t, this.recovered = n && this._pid === n, this._pid = n, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0);
  }
  /**
   * Emit buffered events (received and emitted).
   *
   * @private
   */
  emitBuffered() {
    this.receiveBuffer.forEach((t) => this.emitEvent(t)), this.receiveBuffer = [], this.sendBuffer.forEach((t) => {
      this.notifyOutgoingListeners(t), this.packet(t);
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
    this.subs && (this.subs.forEach((t) => t()), this.subs = void 0), this.io._destroy(this);
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
    return this.connected && this.packet({ type: ve.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
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
  compress(t) {
    return this.flags.compress = t, this;
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
  timeout(t) {
    return this.flags.timeout = t, this;
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
  onAny(t) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.push(t), this;
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
  prependAny(t) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(t), this;
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
  offAny(t) {
    if (!this._anyListeners)
      return this;
    if (t) {
      const n = this._anyListeners;
      for (let r = 0; r < n.length; r++)
        if (t === n[r])
          return n.splice(r, 1), this;
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
  onAnyOutgoing(t) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(t), this;
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
  prependAnyOutgoing(t) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(t), this;
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
  offAnyOutgoing(t) {
    if (!this._anyOutgoingListeners)
      return this;
    if (t) {
      const n = this._anyOutgoingListeners;
      for (let r = 0; r < n.length; r++)
        if (t === n[r])
          return n.splice(r, 1), this;
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
  notifyOutgoingListeners(t) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const n = this._anyOutgoingListeners.slice();
      for (const r of n)
        r.apply(this, t.data);
    }
  }
}
function ar(e) {
  e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0;
}
ar.prototype.duration = function() {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var t = Math.random(), n = Math.floor(t * this.jitter * e);
    e = (Math.floor(t * 10) & 1) == 0 ? e - n : e + n;
  }
  return Math.min(e, this.max) | 0;
};
ar.prototype.reset = function() {
  this.attempts = 0;
};
ar.prototype.setMin = function(e) {
  this.ms = e;
};
ar.prototype.setMax = function(e) {
  this.max = e;
};
ar.prototype.setJitter = function(e) {
  this.jitter = e;
};
class Gs extends Qe {
  constructor(t, n) {
    var r;
    super(), this.nsps = {}, this.subs = [], t && typeof t == "object" && (n = t, t = void 0), n = n || {}, n.path = n.path || "/socket.io", this.opts = n, Si(this, n), this.reconnection(n.reconnection !== !1), this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0), this.reconnectionDelay(n.reconnectionDelay || 1e3), this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3), this.randomizationFactor((r = n.randomizationFactor) !== null && r !== void 0 ? r : 0.5), this.backoff = new ar({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(n.timeout == null ? 2e4 : n.timeout), this._readyState = "closed", this.uri = t;
    const o = n.parser || Zx;
    this.encoder = new o.Encoder(), this.decoder = new o.Decoder(), this._autoConnect = n.autoConnect !== !1, this._autoConnect && this.open();
  }
  reconnection(t) {
    return arguments.length ? (this._reconnection = !!t, t || (this.skipReconnect = !0), this) : this._reconnection;
  }
  reconnectionAttempts(t) {
    return t === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = t, this);
  }
  reconnectionDelay(t) {
    var n;
    return t === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = t, (n = this.backoff) === null || n === void 0 || n.setMin(t), this);
  }
  randomizationFactor(t) {
    var n;
    return t === void 0 ? this._randomizationFactor : (this._randomizationFactor = t, (n = this.backoff) === null || n === void 0 || n.setJitter(t), this);
  }
  reconnectionDelayMax(t) {
    var n;
    return t === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = t, (n = this.backoff) === null || n === void 0 || n.setMax(t), this);
  }
  timeout(t) {
    return arguments.length ? (this._timeout = t, this) : this._timeout;
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
  open(t) {
    if (~this._readyState.indexOf("open"))
      return this;
    this.engine = new zx(this.uri, this.opts);
    const n = this.engine, r = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const o = Tt(n, "open", function() {
      r.onopen(), t && t();
    }), i = (a) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", a), t ? t(a) : this.maybeReconnectOnOpen();
    }, s = Tt(n, "error", i);
    if (this._timeout !== !1) {
      const a = this._timeout, c = this.setTimeoutFn(() => {
        o(), i(new Error("timeout")), n.close();
      }, a);
      this.opts.autoUnref && c.unref(), this.subs.push(() => {
        this.clearTimeoutFn(c);
      });
    }
    return this.subs.push(o), this.subs.push(s), this;
  }
  /**
   * Alias for open()
   *
   * @return self
   * @public
   */
  connect(t) {
    return this.open(t);
  }
  /**
   * Called upon transport open.
   *
   * @private
   */
  onopen() {
    this.cleanup(), this._readyState = "open", this.emitReserved("open");
    const t = this.engine;
    this.subs.push(
      Tt(t, "ping", this.onping.bind(this)),
      Tt(t, "data", this.ondata.bind(this)),
      Tt(t, "error", this.onerror.bind(this)),
      Tt(t, "close", this.onclose.bind(this)),
      // @ts-ignore
      Tt(this.decoder, "decoded", this.ondecoded.bind(this))
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
  ondata(t) {
    try {
      this.decoder.add(t);
    } catch (n) {
      this.onclose("parse error", n);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(t) {
    yi(() => {
      this.emitReserved("packet", t);
    }, this.setTimeoutFn);
  }
  /**
   * Called upon socket error.
   *
   * @private
   */
  onerror(t) {
    this.emitReserved("error", t);
  }
  /**
   * Creates a new socket for the given `nsp`.
   *
   * @return {Socket}
   * @public
   */
  socket(t, n) {
    let r = this.nsps[t];
    return r ? this._autoConnect && !r.active && r.connect() : (r = new Of(this, t, n), this.nsps[t] = r), r;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(t) {
    const n = Object.keys(this.nsps);
    for (const r of n)
      if (this.nsps[r].active)
        return;
    this._close();
  }
  /**
   * Writes a packet.
   *
   * @param packet
   * @private
   */
  _packet(t) {
    const n = this.encoder.encode(t);
    for (let r = 0; r < n.length; r++)
      this.engine.write(n[r], t.options);
  }
  /**
   * Clean up transport subscriptions and packet buffer.
   *
   * @private
   */
  cleanup() {
    this.subs.forEach((t) => t()), this.subs.length = 0, this.decoder.destroy();
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
  onclose(t, n) {
    var r;
    this.cleanup(), (r = this.engine) === null || r === void 0 || r.close(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", t, n), this._reconnection && !this.skipReconnect && this.reconnect();
  }
  /**
   * Attempt a reconnection.
   *
   * @private
   */
  reconnect() {
    if (this._reconnecting || this.skipReconnect)
      return this;
    const t = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
    else {
      const n = this.backoff.duration();
      this._reconnecting = !0;
      const r = this.setTimeoutFn(() => {
        t.skipReconnect || (this.emitReserved("reconnect_attempt", t.backoff.attempts), !t.skipReconnect && t.open((o) => {
          o ? (t._reconnecting = !1, t.reconnect(), this.emitReserved("reconnect_error", o)) : t.onreconnect();
        }));
      }, n);
      this.opts.autoUnref && r.unref(), this.subs.push(() => {
        this.clearTimeoutFn(r);
      });
    }
  }
  /**
   * Called upon successful reconnect.
   *
   * @private
   */
  onreconnect() {
    const t = this.backoff.attempts;
    this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", t);
  }
}
const vr = {};
function Ao(e, t) {
  typeof e == "object" && (t = e, e = void 0), t = t || {};
  const n = Hx(e, t.path || "/socket.io"), r = n.source, o = n.id, i = n.path, s = vr[o] && i in vr[o].nsps, a = t.forceNew || t["force new connection"] || t.multiplex === !1 || s;
  let c;
  return a ? c = new Gs(r, t) : (vr[o] || (vr[o] = new Gs(r, t)), c = vr[o]), n.query && !t.query && (t.query = n.queryKey), c.socket(n.path, t);
}
Object.assign(Ao, {
  Manager: Gs,
  Socket: Of,
  io: Ao,
  connect: Ao
});
function gt() {
  return gt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, gt.apply(null, arguments);
}
function Ce(e) {
  "@babel/helpers - typeof";
  return Ce = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ce(e);
}
var Qx = Symbol.for("react.element"), eg = Symbol.for("react.transitional.element"), tg = Symbol.for("react.fragment");
function ng(e) {
  return (
    // Base object type
    e && Ce(e) === "object" && // React Element type
    (e.$$typeof === Qx || e.$$typeof === eg) && // React Fragment type
    e.type === tg
  );
}
var Ys = {}, Ja = [], rg = function(t) {
  Ja.push(t);
};
function Qa(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = Ja.reduce(function(r, o) {
      return o(r ?? "", "warning");
    }, t);
    n && console.error("Warning: ".concat(n));
  }
}
function og(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = Ja.reduce(function(r, o) {
      return o(r ?? "", "note");
    }, t);
    n && console.warn("Note: ".concat(n));
  }
}
function Af() {
  Ys = {};
}
function Tf(e, t, n) {
  !t && !Ys[n] && (e(!1, n), Ys[n] = !0);
}
function un(e, t) {
  Tf(Qa, e, t);
}
function ig(e, t) {
  Tf(og, e, t);
}
un.preMessage = rg;
un.resetWarned = Af;
un.noteOnce = ig;
function sg(e, t) {
  if (Ce(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Ce(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Rf(e) {
  var t = sg(e, "string");
  return Ce(t) == "symbol" ? t : t + "";
}
function U(e, t, n) {
  return (t = Rf(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function cl(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function J(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cl(Object(n), !0).forEach(function(r) {
      U(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : cl(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function ll(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function ag(e) {
  return e && Ce(e) === "object" && ll(e.nativeElement) ? e.nativeElement : ll(e) ? e : null;
}
function cg(e) {
  var t = ag(e);
  if (t)
    return t;
  if (e instanceof q.Component) {
    var n;
    return (n = Cc.findDOMNode) === null || n === void 0 ? void 0 : n.call(Cc, e);
  }
  return null;
}
function ec(e, t, n) {
  var r = w.useRef({});
  return (!("value" in r.current) || n(r.current.condition, t)) && (r.current.value = e(), r.current.condition = t), r.current.value;
}
var lg = Number(Q0.split(".")[0]), Pf = function(t, n) {
  typeof t == "function" ? t(n) : Ce(t) === "object" && t && "current" in t && (t.current = n);
}, Ci = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  var o = n.filter(Boolean);
  return o.length <= 1 ? o[0] : function(i) {
    n.forEach(function(s) {
      Pf(s, i);
    });
  };
}, ug = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return ec(function() {
    return Ci.apply(void 0, n);
  }, n, function(o, i) {
    return o.length !== i.length || o.every(function(s, a) {
      return s !== i[a];
    });
  });
}, If = function(t) {
  var n, r;
  if (!t)
    return !1;
  if (Nf(t) && lg >= 19)
    return !0;
  var o = ts.isMemo(t) ? t.type.type : t.type;
  return !(typeof o == "function" && !((n = o.prototype) !== null && n !== void 0 && n.render) && o.$$typeof !== ts.ForwardRef || typeof t == "function" && !((r = t.prototype) !== null && r !== void 0 && r.render) && t.$$typeof !== ts.ForwardRef);
};
function Nf(e) {
  return /* @__PURE__ */ J0(e) && !ng(e);
}
var kf = function(t) {
  if (t && Nf(t)) {
    var n = t;
    return n.props.propertyIsEnumerable("ref") ? n.props.ref : n.ref;
  }
  return null;
};
function yt(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function ul(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Rf(r.key), r);
  }
}
function St(e, t, n) {
  return t && ul(e.prototype, t), n && ul(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Xs(e, t) {
  return Xs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Xs(e, t);
}
function cr(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && Xs(e, t);
}
function Kn(e) {
  return Kn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Kn(e);
}
function tc() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (tc = function() {
    return !!e;
  })();
}
function _n(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function jf(e, t) {
  if (t && (Ce(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return _n(e);
}
function Vr(e) {
  var t = tc();
  return function() {
    var n, r = Kn(e);
    if (t) {
      var o = Kn(this).constructor;
      n = Reflect.construct(r, arguments, o);
    } else n = r.apply(this, arguments);
    return jf(this, n);
  };
}
function Ks(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function fg(e) {
  if (Array.isArray(e)) return Ks(e);
}
function Lf(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function nc(e, t) {
  if (e) {
    if (typeof e == "string") return Ks(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ks(e, t) : void 0;
  }
}
function dg() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ft(e) {
  return fg(e) || Lf(e) || nc(e) || dg();
}
var Mf = function(t) {
  return +setTimeout(t, 16);
}, Df = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (Mf = function(t) {
  return window.requestAnimationFrame(t);
}, Df = function(t) {
  return window.cancelAnimationFrame(t);
});
var fl = 0, wi = /* @__PURE__ */ new Map();
function Bf(e) {
  wi.delete(e);
}
var cn = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  fl += 1;
  var r = fl;
  function o(i) {
    if (i === 0)
      Bf(r), t();
    else {
      var s = Mf(function() {
        o(i - 1);
      });
      wi.set(r, s);
    }
  }
  return o(n), r;
};
cn.cancel = function(e) {
  var t = wi.get(e);
  return Bf(e), Df(t);
};
process.env.NODE_ENV !== "production" && (cn.ids = function() {
  return wi;
});
function zf(e) {
  if (Array.isArray(e)) return e;
}
function hg(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, i, s, a = [], c = !0, l = !1;
    try {
      if (i = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n) return;
        c = !1;
      } else for (; !(c = (r = i.call(n)).done) && (a.push(r.value), a.length !== t); c = !0) ;
    } catch (u) {
      l = !0, o = u;
    } finally {
      try {
        if (!c && n.return != null && (s = n.return(), Object(s) !== s)) return;
      } finally {
        if (l) throw o;
      }
    }
    return a;
  }
}
function Hf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function se(e, t) {
  return zf(e) || hg(e, t) || nc(e, t) || Hf();
}
function jr(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
function Jt() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function pg(e, t) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(t);
  for (var n = t; n; ) {
    if (n === e)
      return !0;
    n = n.parentNode;
  }
  return !1;
}
var dl = "data-rc-order", hl = "data-rc-priority", xg = "rc-util-key", Zs = /* @__PURE__ */ new Map();
function Ff() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : xg;
}
function Ei(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function gg(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function rc(e) {
  return Array.from((Zs.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function $f(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Jt())
    return null;
  var n = t.csp, r = t.prepend, o = t.priority, i = o === void 0 ? 0 : o, s = gg(r), a = s === "prependQueue", c = document.createElement("style");
  c.setAttribute(dl, s), a && i && c.setAttribute(hl, "".concat(i)), n != null && n.nonce && (c.nonce = n == null ? void 0 : n.nonce), c.innerHTML = e;
  var l = Ei(t), u = l.firstChild;
  if (r) {
    if (a) {
      var d = (t.styles || rc(l)).filter(function(f) {
        if (!["prepend", "prependQueue"].includes(f.getAttribute(dl)))
          return !1;
        var v = Number(f.getAttribute(hl) || 0);
        return i >= v;
      });
      if (d.length)
        return l.insertBefore(c, d[d.length - 1].nextSibling), c;
    }
    l.insertBefore(c, u);
  } else
    l.appendChild(c);
  return c;
}
function Vf(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = Ei(t);
  return (t.styles || rc(n)).find(function(r) {
    return r.getAttribute(Ff(t)) === e;
  });
}
function Wf(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = Vf(e, t);
  if (n) {
    var r = Ei(t);
    r.removeChild(n);
  }
}
function mg(e, t) {
  var n = Zs.get(e);
  if (!n || !pg(document, n)) {
    var r = $f("", t), o = r.parentNode;
    Zs.set(e, o), e.removeChild(r);
  }
}
function On(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Ei(n), o = rc(r), i = J(J({}, n), {}, {
    styles: o
  });
  mg(r, i);
  var s = Vf(t, i);
  if (s) {
    var a, c;
    if ((a = i.csp) !== null && a !== void 0 && a.nonce && s.nonce !== ((c = i.csp) === null || c === void 0 ? void 0 : c.nonce)) {
      var l;
      s.nonce = (l = i.csp) === null || l === void 0 ? void 0 : l.nonce;
    }
    return s.innerHTML !== e && (s.innerHTML = e), s;
  }
  var u = $f(e, i);
  return u.setAttribute(Ff(i), t), u;
}
function vg(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function Pn(e, t) {
  if (e == null) return {};
  var n, r, o = vg(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
function bg(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = /* @__PURE__ */ new Set();
  function o(i, s) {
    var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, c = r.has(i);
    if (un(!c, "Warning: There may be circular references"), c)
      return !1;
    if (i === s)
      return !0;
    if (n && a > 1)
      return !1;
    r.add(i);
    var l = a + 1;
    if (Array.isArray(i)) {
      if (!Array.isArray(s) || i.length !== s.length)
        return !1;
      for (var u = 0; u < i.length; u++)
        if (!o(i[u], s[u], l))
          return !1;
      return !0;
    }
    if (i && s && Ce(i) === "object" && Ce(s) === "object") {
      var d = Object.keys(i);
      return d.length !== Object.keys(s).length ? !1 : d.every(function(f) {
        return o(i[f], s[f], l);
      });
    }
    return !1;
  }
  return o(e, t);
}
var yg = "%";
function Js(e) {
  return e.join(yg);
}
var Sg = /* @__PURE__ */ function() {
  function e(t) {
    yt(this, e), U(this, "instanceId", void 0), U(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = t;
  }
  return St(e, [{
    key: "get",
    value: function(n) {
      return this.opGet(Js(n));
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opGet",
    value: function(n) {
      return this.cache.get(n) || null;
    }
  }, {
    key: "update",
    value: function(n, r) {
      return this.opUpdate(Js(n), r);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(n, r) {
      var o = this.cache.get(n), i = r(o);
      i === null ? this.cache.delete(n) : this.cache.set(n, i);
    }
  }]), e;
}(), Zn = "data-token-hash", It = "data-css-hash", Cg = "data-cache-path", on = "__cssinjs_instance__";
function wg() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(It, "]")) || [], n = document.head.firstChild;
    Array.from(t).forEach(function(o) {
      o[on] = o[on] || e, o[on] === e && document.head.insertBefore(o, n);
    });
    var r = {};
    Array.from(document.querySelectorAll("style[".concat(It, "]"))).forEach(function(o) {
      var i = o.getAttribute(It);
      if (r[i]) {
        if (o[on] === e) {
          var s;
          (s = o.parentNode) === null || s === void 0 || s.removeChild(o);
        }
      } else
        r[i] = !0;
    });
  }
  return new Sg(e);
}
var Wr = /* @__PURE__ */ w.createContext({
  hashPriority: "low",
  cache: wg(),
  defaultCache: !0
});
function Eg(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
var oc = /* @__PURE__ */ function() {
  function e() {
    yt(this, e), U(this, "cache", void 0), U(this, "keys", void 0), U(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return St(e, [{
    key: "size",
    value: function() {
      return this.keys.length;
    }
  }, {
    key: "internalGet",
    value: function(n) {
      var r, o, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, s = {
        map: this.cache
      };
      return n.forEach(function(a) {
        if (!s)
          s = void 0;
        else {
          var c;
          s = (c = s) === null || c === void 0 || (c = c.map) === null || c === void 0 ? void 0 : c.get(a);
        }
      }), (r = s) !== null && r !== void 0 && r.value && i && (s.value[1] = this.cacheCallTimes++), (o = s) === null || o === void 0 ? void 0 : o.value;
    }
  }, {
    key: "get",
    value: function(n) {
      var r;
      return (r = this.internalGet(n, !0)) === null || r === void 0 ? void 0 : r[0];
    }
  }, {
    key: "has",
    value: function(n) {
      return !!this.internalGet(n);
    }
  }, {
    key: "set",
    value: function(n, r) {
      var o = this;
      if (!this.has(n)) {
        if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
          var i = this.keys.reduce(function(l, u) {
            var d = se(l, 2), f = d[1];
            return o.internalGet(u)[1] < f ? [u, o.internalGet(u)[1]] : l;
          }, [this.keys[0], this.cacheCallTimes]), s = se(i, 1), a = s[0];
          this.delete(a);
        }
        this.keys.push(n);
      }
      var c = this.cache;
      n.forEach(function(l, u) {
        if (u === n.length - 1)
          c.set(l, {
            value: [r, o.cacheCallTimes++]
          });
        else {
          var d = c.get(l);
          d ? d.map || (d.map = /* @__PURE__ */ new Map()) : c.set(l, {
            map: /* @__PURE__ */ new Map()
          }), c = c.get(l).map;
        }
      });
    }
  }, {
    key: "deleteByPath",
    value: function(n, r) {
      var o = n.get(r[0]);
      if (r.length === 1) {
        var i;
        return o.map ? n.set(r[0], {
          map: o.map
        }) : n.delete(r[0]), (i = o.value) === null || i === void 0 ? void 0 : i[0];
      }
      var s = this.deleteByPath(o.map, r.slice(1));
      return (!o.map || o.map.size === 0) && !o.value && n.delete(r[0]), s;
    }
  }, {
    key: "delete",
    value: function(n) {
      if (this.has(n))
        return this.keys = this.keys.filter(function(r) {
          return !Eg(r, n);
        }), this.deleteByPath(this.cache, n);
    }
  }]), e;
}();
U(oc, "MAX_CACHE_SIZE", 20);
U(oc, "MAX_CACHE_OFFSET", 5);
var pl = 0, qf = /* @__PURE__ */ function() {
  function e(t) {
    yt(this, e), U(this, "derivatives", void 0), U(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = pl, t.length === 0 && Qa(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), pl += 1;
  }
  return St(e, [{
    key: "getDerivativeToken",
    value: function(n) {
      return this.derivatives.reduce(function(r, o) {
        return o(n, r);
      }, void 0);
    }
  }]), e;
}(), is = new oc();
function Qs(e) {
  var t = Array.isArray(e) ? e : [e];
  return is.has(t) || is.set(t, new qf(t)), is.get(t);
}
var _g = /* @__PURE__ */ new WeakMap(), ss = {};
function Og(e, t) {
  for (var n = _g, r = 0; r < t.length; r += 1) {
    var o = t[r];
    n.has(o) || n.set(o, /* @__PURE__ */ new WeakMap()), n = n.get(o);
  }
  return n.has(ss) || n.set(ss, e()), n.get(ss);
}
var xl = /* @__PURE__ */ new WeakMap();
function Pr(e) {
  var t = xl.get(e) || "";
  return t || (Object.keys(e).forEach(function(n) {
    var r = e[n];
    t += n, r instanceof qf ? t += r.id : r && Ce(r) === "object" ? t += Pr(r) : t += r;
  }), t = jr(t), xl.set(e, t)), t;
}
function gl(e, t) {
  return jr("".concat(t, "_").concat(Pr(e)));
}
var ea = Jt();
function Kt(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function qo(e, t, n) {
  var r, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (i)
    return e;
  var s = J(J({}, o), {}, (r = {}, U(r, Zn, t), U(r, It, n), r)), a = Object.keys(s).map(function(c) {
    var l = s[c];
    return l ? "".concat(c, '="').concat(l, '"') : null;
  }).filter(function(c) {
    return c;
  }).join(" ");
  return "<style ".concat(a, ">").concat(e, "</style>");
}
var To = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(n ? "".concat(n, "-") : "").concat(t).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, Ag = function(t, n, r) {
  return Object.keys(t).length ? ".".concat(n).concat(r != null && r.scope ? ".".concat(r.scope) : "", "{").concat(Object.entries(t).map(function(o) {
    var i = se(o, 2), s = i[0], a = i[1];
    return "".concat(s, ":").concat(a, ";");
  }).join(""), "}") : "";
}, Uf = function(t, n, r) {
  var o = {}, i = {};
  return Object.entries(t).forEach(function(s) {
    var a, c, l = se(s, 2), u = l[0], d = l[1];
    if (r != null && (a = r.preserve) !== null && a !== void 0 && a[u])
      i[u] = d;
    else if ((typeof d == "string" || typeof d == "number") && !(r != null && (c = r.ignore) !== null && c !== void 0 && c[u])) {
      var f, v = To(u, r == null ? void 0 : r.prefix);
      o[v] = typeof d == "number" && !(r != null && (f = r.unitless) !== null && f !== void 0 && f[u]) ? "".concat(d, "px") : String(d), i[u] = "var(".concat(v, ")");
    }
  }), [i, Ag(o, n, {
    scope: r == null ? void 0 : r.scope
  })];
}, ml = process.env.NODE_ENV !== "test" && Jt() ? w.useLayoutEffect : w.useEffect, ic = function(t, n) {
  var r = w.useRef(!0);
  ml(function() {
    return t(r.current);
  }, n), ml(function() {
    return r.current = !1, function() {
      r.current = !0;
    };
  }, []);
}, vl = function(t, n) {
  ic(function(r) {
    if (!r)
      return t();
  }, n);
}, Tg = J({}, w), bl = Tg.useInsertionEffect, Rg = function(t, n, r) {
  w.useMemo(t, r), ic(function() {
    return n(!0);
  }, r);
}, Pg = bl ? function(e, t, n) {
  return bl(function() {
    return e(), t();
  }, n);
} : Rg, Ig = J({}, w), Ng = Ig.useInsertionEffect, kg = function(t) {
  var n = [], r = !1;
  function o(i) {
    if (r) {
      process.env.NODE_ENV !== "production" && Qa(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    n.push(i);
  }
  return w.useEffect(function() {
    return r = !1, function() {
      r = !0, n.length && n.forEach(function(i) {
        return i();
      });
    };
  }, t), o;
}, jg = function() {
  return function(t) {
    t();
  };
}, Lg = typeof Ng < "u" ? kg : jg;
function Mg() {
  return !1;
}
var ta = !1;
function Dg() {
  return ta;
}
const Bg = process.env.NODE_ENV === "production" ? Mg : Dg;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var co = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : null;
  if (co && typeof co.webpackHotUpdate == "function") {
    var zg = co.webpackHotUpdate;
    co.webpackHotUpdate = function() {
      return ta = !0, setTimeout(function() {
        ta = !1;
      }, 0), zg.apply(void 0, arguments);
    };
  }
}
function sc(e, t, n, r, o) {
  var i = w.useContext(Wr), s = i.cache, a = [e].concat(Ft(t)), c = Js(a), l = Lg([c]), u = Bg(), d = function(h) {
    s.opUpdate(c, function(x) {
      var y = x || [void 0, void 0], S = se(y, 2), p = S[0], E = p === void 0 ? 0 : p, b = S[1], T = b;
      process.env.NODE_ENV !== "production" && b && u && (r == null || r(T, u), T = null);
      var O = T || n(), k = [E, O];
      return h ? h(k) : k;
    });
  };
  w.useMemo(
    function() {
      d();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [c]
    /* eslint-enable */
  );
  var f = s.opGet(c);
  process.env.NODE_ENV !== "production" && !f && (d(), f = s.opGet(c));
  var v = f[1];
  return Pg(function() {
    o == null || o(v);
  }, function(g) {
    return d(function(h) {
      var x = se(h, 2), y = x[0], S = x[1];
      return g && y === 0 && (o == null || o(v)), [y + 1, S];
    }), function() {
      s.opUpdate(c, function(h) {
        var x = h || [], y = se(x, 2), S = y[0], p = S === void 0 ? 0 : S, E = y[1], b = p - 1;
        return b === 0 ? (l(function() {
          (g || !s.opGet(c)) && (r == null || r(E, !1));
        }), null) : [p - 1, E];
      });
    };
  }, [c]), v;
}
var Hg = {}, Fg = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", bn = /* @__PURE__ */ new Map();
function $g(e) {
  bn.set(e, (bn.get(e) || 0) + 1);
}
function Vg(e, t) {
  if (typeof document < "u") {
    var n = document.querySelectorAll("style[".concat(Zn, '="').concat(e, '"]'));
    n.forEach(function(r) {
      if (r[on] === t) {
        var o;
        (o = r.parentNode) === null || o === void 0 || o.removeChild(r);
      }
    });
  }
}
var Wg = 0;
function qg(e, t) {
  bn.set(e, (bn.get(e) || 0) - 1);
  var n = Array.from(bn.keys()), r = n.filter(function(o) {
    var i = bn.get(o) || 0;
    return i <= 0;
  });
  n.length - r.length > Wg && r.forEach(function(o) {
    Vg(o, t), bn.delete(o);
  });
}
var Ug = function(t, n, r, o) {
  var i = r.getDerivativeToken(t), s = J(J({}, i), n);
  return o && (s = o(s)), s;
}, Gf = "token";
function Gg(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = _t(Wr), o = r.cache.instanceId, i = r.container, s = n.salt, a = s === void 0 ? "" : s, c = n.override, l = c === void 0 ? Hg : c, u = n.formatToken, d = n.getComputedToken, f = n.cssVar, v = Og(function() {
    return Object.assign.apply(Object, [{}].concat(Ft(t)));
  }, t), g = Pr(v), h = Pr(l), x = f ? Pr(f) : "", y = sc(Gf, [a, e.id, g, h, x], function() {
    var S, p = d ? d(v, l, e) : Ug(v, l, e, u), E = J({}, p), b = "";
    if (f) {
      var T = Uf(p, f.key, {
        prefix: f.prefix,
        ignore: f.ignore,
        unitless: f.unitless,
        preserve: f.preserve
      }), O = se(T, 2);
      p = O[0], b = O[1];
    }
    var k = gl(p, a);
    p._tokenKey = k, E._tokenKey = gl(E, a);
    var F = (S = f == null ? void 0 : f.key) !== null && S !== void 0 ? S : k;
    p._themeKey = F, $g(F);
    var G = "".concat(Fg, "-").concat(jr(k));
    return p._hashId = G, [p, G, E, b, (f == null ? void 0 : f.key) || ""];
  }, function(S) {
    qg(S[0]._themeKey, o);
  }, function(S) {
    var p = se(S, 4), E = p[0], b = p[3];
    if (f && b) {
      var T = On(b, jr("css-variables-".concat(E._themeKey)), {
        mark: It,
        prepend: "queue",
        attachTo: i,
        priority: -999
      });
      T[on] = o, T.setAttribute(Zn, E._themeKey);
    }
  });
  return y;
}
var Yg = function(t, n, r) {
  var o = se(t, 5), i = o[2], s = o[3], a = o[4], c = r || {}, l = c.plain;
  if (!s)
    return null;
  var u = i._tokenKey, d = -999, f = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(d)
  }, v = qo(s, a, u, f, l);
  return [d, u, v];
}, Xg = {
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
}, Yf = "comm", Xf = "rule", Kf = "decl", Kg = "@import", Zg = "@namespace", Jg = "@keyframes", Qg = "@layer", Zf = Math.abs, ac = String.fromCharCode;
function Jf(e) {
  return e.trim();
}
function Ro(e, t, n) {
  return e.replace(t, n);
}
function em(e, t, n) {
  return e.indexOf(t, n);
}
function Fn(e, t) {
  return e.charCodeAt(t) | 0;
}
function Jn(e, t, n) {
  return e.slice(t, n);
}
function Bt(e) {
  return e.length;
}
function tm(e) {
  return e.length;
}
function lo(e, t) {
  return t.push(e), e;
}
var _i = 1, Qn = 1, Qf = 0, At = 0, Je = 0, lr = "";
function cc(e, t, n, r, o, i, s, a) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: _i, column: Qn, length: s, return: "", siblings: a };
}
function nm() {
  return Je;
}
function rm() {
  return Je = At > 0 ? Fn(lr, --At) : 0, Qn--, Je === 10 && (Qn = 1, _i--), Je;
}
function Nt() {
  return Je = At < Qf ? Fn(lr, At++) : 0, Qn++, Je === 10 && (Qn = 1, _i++), Je;
}
function sn() {
  return Fn(lr, At);
}
function Po() {
  return At;
}
function Oi(e, t) {
  return Jn(lr, e, t);
}
function Lr(e) {
  switch (e) {
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
function om(e) {
  return _i = Qn = 1, Qf = Bt(lr = e), At = 0, [];
}
function im(e) {
  return lr = "", e;
}
function as(e) {
  return Jf(Oi(At - 1, na(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function sm(e) {
  for (; (Je = sn()) && Je < 33; )
    Nt();
  return Lr(e) > 2 || Lr(Je) > 3 ? "" : " ";
}
function am(e, t) {
  for (; --t && Nt() && !(Je < 48 || Je > 102 || Je > 57 && Je < 65 || Je > 70 && Je < 97); )
    ;
  return Oi(e, Po() + (t < 6 && sn() == 32 && Nt() == 32));
}
function na(e) {
  for (; Nt(); )
    switch (Je) {
      // ] ) " '
      case e:
        return At;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && na(Je);
        break;
      // (
      case 40:
        e === 41 && na(e);
        break;
      // \
      case 92:
        Nt();
        break;
    }
  return At;
}
function cm(e, t) {
  for (; Nt() && e + Je !== 57; )
    if (e + Je === 84 && sn() === 47)
      break;
  return "/*" + Oi(t, At - 1) + "*" + ac(e === 47 ? e : Nt());
}
function lm(e) {
  for (; !Lr(sn()); )
    Nt();
  return Oi(e, At);
}
function um(e) {
  return im(Io("", null, null, null, [""], e = om(e), 0, [0], e));
}
function Io(e, t, n, r, o, i, s, a, c) {
  for (var l = 0, u = 0, d = s, f = 0, v = 0, g = 0, h = 1, x = 1, y = 1, S = 0, p = "", E = o, b = i, T = r, O = p; x; )
    switch (g = S, S = Nt()) {
      // (
      case 40:
        if (g != 108 && Fn(O, d - 1) == 58) {
          em(O += Ro(as(S), "&", "&\f"), "&\f", Zf(l ? a[l - 1] : 0)) != -1 && (y = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        O += as(S);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        O += sm(g);
        break;
      // \
      case 92:
        O += am(Po() - 1, 7);
        continue;
      // /
      case 47:
        switch (sn()) {
          case 42:
          case 47:
            lo(fm(cm(Nt(), Po()), t, n, c), c), (Lr(g || 1) == 5 || Lr(sn() || 1) == 5) && Bt(O) && Jn(O, -1, void 0) !== " " && (O += " ");
            break;
          default:
            O += "/";
        }
        break;
      // {
      case 123 * h:
        a[l++] = Bt(O) * y;
      // } ; \0
      case 125 * h:
      case 59:
      case 0:
        switch (S) {
          // \0 }
          case 0:
          case 125:
            x = 0;
          // ;
          case 59 + u:
            y == -1 && (O = Ro(O, /\f/g, "")), v > 0 && (Bt(O) - d || h === 0 && g === 47) && lo(v > 32 ? Sl(O + ";", r, n, d - 1, c) : Sl(Ro(O, " ", "") + ";", r, n, d - 2, c), c);
            break;
          // @ ;
          case 59:
            O += ";";
          // { rule/at-rule
          default:
            if (lo(T = yl(O, t, n, l, u, o, a, p, E = [], b = [], d, i), i), S === 123)
              if (u === 0)
                Io(O, t, T, T, E, i, d, a, b);
              else {
                switch (f) {
                  // c(ontainer)
                  case 99:
                    if (Fn(O, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (Fn(O, 2) === 97) break;
                  default:
                    u = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                u ? Io(e, T, T, r && lo(yl(e, T, T, 0, 0, o, a, p, o, E = [], d, b), b), o, b, d, a, r ? E : b) : Io(O, T, T, T, [""], b, 0, a, b);
              }
        }
        l = u = v = 0, h = y = 1, p = O = "", d = s;
        break;
      // :
      case 58:
        d = 1 + Bt(O), v = g;
      default:
        if (h < 1) {
          if (S == 123)
            --h;
          else if (S == 125 && h++ == 0 && rm() == 125)
            continue;
        }
        switch (O += ac(S), S * h) {
          // &
          case 38:
            y = u > 0 ? 1 : (O += "\f", -1);
            break;
          // ,
          case 44:
            a[l++] = (Bt(O) - 1) * y, y = 1;
            break;
          // @
          case 64:
            sn() === 45 && (O += as(Nt())), f = sn(), u = d = Bt(p = O += lm(Po())), S++;
            break;
          // -
          case 45:
            g === 45 && Bt(O) == 2 && (h = 0);
        }
    }
  return i;
}
function yl(e, t, n, r, o, i, s, a, c, l, u, d) {
  for (var f = o - 1, v = o === 0 ? i : [""], g = tm(v), h = 0, x = 0, y = 0; h < r; ++h)
    for (var S = 0, p = Jn(e, f + 1, f = Zf(x = s[h])), E = e; S < g; ++S)
      (E = Jf(x > 0 ? v[S] + " " + p : Ro(p, /&\f/g, v[S]))) && (c[y++] = E);
  return cc(e, t, n, o === 0 ? Xf : a, c, l, u, d);
}
function fm(e, t, n, r) {
  return cc(e, t, n, Yf, ac(nm()), Jn(e, 2, -2), 0, r);
}
function Sl(e, t, n, r, o) {
  return cc(e, t, n, Kf, Jn(e, 0, r), Jn(e, r + 1, -1), r, o);
}
function ra(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function dm(e, t, n, r) {
  switch (e.type) {
    case Qg:
      if (e.children.length) break;
    case Kg:
    case Zg:
    case Kf:
      return e.return = e.return || e.value;
    case Yf:
      return "";
    case Jg:
      return e.return = e.value + "{" + ra(e.children, r) + "}";
    case Xf:
      if (!Bt(e.value = e.props.join(","))) return "";
  }
  return Bt(n = ra(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function ed(e, t) {
  var n = t.path, r = t.parentSelectors;
  un(!1, "[Ant Design CSS-in-JS] ".concat(n ? "Error in ".concat(n, ": ") : "").concat(e).concat(r.length ? " Selector: ".concat(r.join(" | ")) : ""));
}
var hm = function(t, n, r) {
  if (t === "content") {
    var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, i = ["normal", "none", "initial", "inherit", "unset"];
    (typeof n != "string" || i.indexOf(n) === -1 && !o.test(n) && (n.charAt(0) !== n.charAt(n.length - 1) || n.charAt(0) !== '"' && n.charAt(0) !== "'")) && ed("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(n, "\"'`."), r);
  }
}, pm = function(t, n, r) {
  t === "animation" && r.hashId && n !== "none" && ed("You seem to be using hashed animation '".concat(n, "', in which case 'animationName' with Keyframe as value is recommended."), r);
}, Cl = "data-ant-cssinjs-cache-path", td = "_FILE_STYLE__", An, nd = !0;
function xm() {
  if (!An && (An = {}, Jt())) {
    var e = document.createElement("div");
    e.className = Cl, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(o) {
      var i = o.split(":"), s = se(i, 2), a = s[0], c = s[1];
      An[a] = c;
    });
    var n = document.querySelector("style[".concat(Cl, "]"));
    if (n) {
      var r;
      nd = !1, (r = n.parentNode) === null || r === void 0 || r.removeChild(n);
    }
    document.body.removeChild(e);
  }
}
function gm(e) {
  return xm(), !!An[e];
}
function mm(e) {
  var t = An[e], n = null;
  if (t && Jt())
    if (nd)
      n = td;
    else {
      var r = document.querySelector("style[".concat(It, '="').concat(An[e], '"]'));
      r ? n = r.innerHTML : delete An[e];
    }
  return [n, t];
}
var rd = "_skip_check_", od = "_multi_value_";
function No(e) {
  var t = ra(um(e), dm);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function vm(e) {
  return Ce(e) === "object" && e && (rd in e || od in e);
}
function wl(e, t, n) {
  if (!t)
    return e;
  var r = ".".concat(t), o = n === "low" ? ":where(".concat(r, ")") : r, i = e.split(",").map(function(s) {
    var a, c = s.trim().split(/\s+/), l = c[0] || "", u = ((a = l.match(/^\w+/)) === null || a === void 0 ? void 0 : a[0]) || "";
    return l = "".concat(u).concat(o).concat(l.slice(u.length)), [l].concat(Ft(c.slice(1))).join(" ");
  });
  return i.join(",");
}
var bm = function e(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = r.root, i = r.injectHash, s = r.parentSelectors, a = n.hashId, c = n.layer, l = n.path, u = n.hashPriority, d = n.transformers, f = d === void 0 ? [] : d, v = n.linters, g = v === void 0 ? [] : v, h = "", x = {};
  function y(E) {
    var b = E.getName(a);
    if (!x[b]) {
      var T = e(E.style, n, {
        root: !1,
        parentSelectors: s
      }), O = se(T, 1), k = O[0];
      x[b] = "@keyframes ".concat(E.getName(a)).concat(k);
    }
  }
  function S(E) {
    var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return E.forEach(function(T) {
      Array.isArray(T) ? S(T, b) : T && b.push(T);
    }), b;
  }
  var p = S(Array.isArray(t) ? t : [t]);
  return p.forEach(function(E) {
    var b = typeof E == "string" && !o ? {} : E;
    if (typeof b == "string")
      h += "".concat(b, `
`);
    else if (b._keyframe)
      y(b);
    else {
      var T = f.reduce(function(O, k) {
        var F;
        return (k == null || (F = k.visit) === null || F === void 0 ? void 0 : F.call(k, O)) || O;
      }, b);
      Object.keys(T).forEach(function(O) {
        var k = T[O];
        if (Ce(k) === "object" && k && (O !== "animationName" || !k._keyframe) && !vm(k)) {
          var F = !1, G = O.trim(), oe = !1;
          (o || i) && a ? G.startsWith("@") ? F = !0 : G === "&" ? G = wl("", a, u) : G = wl(O, a, u) : o && !a && (G === "&" || G === "") && (G = "", oe = !0);
          var te = e(k, n, {
            root: oe,
            injectHash: F,
            parentSelectors: [].concat(Ft(s), [G])
          }), H = se(te, 2), X = H[0], Q = H[1];
          x = J(J({}, x), Q), h += "".concat(G).concat(X);
        } else {
          let P = function(j, $) {
            process.env.NODE_ENV !== "production" && (Ce(k) !== "object" || !(k != null && k[rd])) && [hm, pm].concat(Ft(g)).forEach(function(re) {
              return re(j, $, {
                path: l,
                hashId: a,
                parentSelectors: s
              });
            });
            var V = j.replace(/[A-Z]/g, function(re) {
              return "-".concat(re.toLowerCase());
            }), Y = $;
            !Xg[j] && typeof Y == "number" && Y !== 0 && (Y = "".concat(Y, "px")), j === "animationName" && $ !== null && $ !== void 0 && $._keyframe && (y($), Y = $.getName(a)), h += "".concat(V, ":").concat(Y, ";");
          };
          var N, R = (N = k == null ? void 0 : k.value) !== null && N !== void 0 ? N : k;
          Ce(k) === "object" && k !== null && k !== void 0 && k[od] && Array.isArray(R) ? R.forEach(function(j) {
            P(O, j);
          }) : P(O, R);
        }
      });
    }
  }), o ? c && (h && (h = "@layer ".concat(c.name, " {").concat(h, "}")), c.dependencies && (x["@layer ".concat(c.name)] = c.dependencies.map(function(E) {
    return "@layer ".concat(E, ", ").concat(c.name, ";");
  }).join(`
`))) : h = "{".concat(h, "}"), [h, x];
};
function id(e, t) {
  return jr("".concat(e.join("%")).concat(t));
}
function ym() {
  return null;
}
var sd = "style";
function oa(e, t) {
  var n = e.token, r = e.path, o = e.hashId, i = e.layer, s = e.nonce, a = e.clientOnly, c = e.order, l = c === void 0 ? 0 : c, u = w.useContext(Wr), d = u.autoClear, f = u.mock, v = u.defaultCache, g = u.hashPriority, h = u.container, x = u.ssrInline, y = u.transformers, S = u.linters, p = u.cache, E = u.layer, b = n._tokenKey, T = [b];
  E && T.push("layer"), T.push.apply(T, Ft(r));
  var O = ea;
  process.env.NODE_ENV !== "production" && f !== void 0 && (O = f === "client");
  var k = sc(
    sd,
    T,
    // Create cache if needed
    function() {
      var H = T.join("|");
      if (gm(H)) {
        var X = mm(H), Q = se(X, 2), N = Q[0], R = Q[1];
        if (N)
          return [N, b, R, {}, a, l];
      }
      var P = t(), j = bm(P, {
        hashId: o,
        hashPriority: g,
        layer: E ? i : void 0,
        path: r.join("-"),
        transformers: y,
        linters: S
      }), $ = se(j, 2), V = $[0], Y = $[1], re = No(V), ee = id(T, re);
      return [re, b, ee, Y, a, l];
    },
    // Remove cache if no need
    function(H, X) {
      var Q = se(H, 3), N = Q[2];
      (X || d) && ea && Wf(N, {
        mark: It
      });
    },
    // Effect: Inject style here
    function(H) {
      var X = se(H, 4), Q = X[0];
      X[1];
      var N = X[2], R = X[3];
      if (O && Q !== td) {
        var P = {
          mark: It,
          prepend: E ? !1 : "queue",
          attachTo: h,
          priority: l
        }, j = typeof s == "function" ? s() : s;
        j && (P.csp = {
          nonce: j
        });
        var $ = [], V = [];
        Object.keys(R).forEach(function(re) {
          re.startsWith("@layer") ? $.push(re) : V.push(re);
        }), $.forEach(function(re) {
          On(No(R[re]), "_layer-".concat(re), J(J({}, P), {}, {
            prepend: !0
          }));
        });
        var Y = On(Q, N, P);
        Y[on] = p.instanceId, Y.setAttribute(Zn, b), process.env.NODE_ENV !== "production" && Y.setAttribute(Cg, T.join("|")), V.forEach(function(re) {
          On(No(R[re]), "_effect-".concat(re), P);
        });
      }
    }
  ), F = se(k, 3), G = F[0], oe = F[1], te = F[2];
  return function(H) {
    var X;
    if (!x || O || !v)
      X = /* @__PURE__ */ w.createElement(ym, null);
    else {
      var Q;
      X = /* @__PURE__ */ w.createElement("style", gt({}, (Q = {}, U(Q, Zn, oe), U(Q, It, te), Q), {
        dangerouslySetInnerHTML: {
          __html: G
        }
      }));
    }
    return /* @__PURE__ */ w.createElement(w.Fragment, null, X, H);
  };
}
var Sm = function(t, n, r) {
  var o = se(t, 6), i = o[0], s = o[1], a = o[2], c = o[3], l = o[4], u = o[5], d = r || {}, f = d.plain;
  if (l)
    return null;
  var v = i, g = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  };
  return v = qo(i, s, a, g, f), c && Object.keys(c).forEach(function(h) {
    if (!n[h]) {
      n[h] = !0;
      var x = No(c[h]), y = qo(x, s, "_effect-".concat(h), g, f);
      h.startsWith("@layer") ? v = y + v : v += y;
    }
  }), [u, a, v];
}, ad = "cssVar", Cm = function(t, n) {
  var r = t.key, o = t.prefix, i = t.unitless, s = t.ignore, a = t.token, c = t.scope, l = c === void 0 ? "" : c, u = _t(Wr), d = u.cache.instanceId, f = u.container, v = a._tokenKey, g = [].concat(Ft(t.path), [r, l, v]), h = sc(ad, g, function() {
    var x = n(), y = Uf(x, r, {
      prefix: o,
      unitless: i,
      ignore: s,
      scope: l
    }), S = se(y, 2), p = S[0], E = S[1], b = id(g, E);
    return [p, E, b, r];
  }, function(x) {
    var y = se(x, 3), S = y[2];
    ea && Wf(S, {
      mark: It
    });
  }, function(x) {
    var y = se(x, 3), S = y[1], p = y[2];
    if (S) {
      var E = On(S, p, {
        mark: It,
        prepend: "queue",
        attachTo: f,
        priority: -999
      });
      E[on] = d, E.setAttribute(Zn, r);
    }
  });
  return h;
}, wm = function(t, n, r) {
  var o = se(t, 4), i = o[1], s = o[2], a = o[3], c = r || {}, l = c.plain;
  if (!i)
    return null;
  var u = -999, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  }, f = qo(i, a, s, d, l);
  return [u, s, f];
}, br;
br = {}, U(br, sd, Sm), U(br, Gf, Yg), U(br, ad, wm);
var cd = /* @__PURE__ */ function() {
  function e(t, n) {
    yt(this, e), U(this, "name", void 0), U(this, "style", void 0), U(this, "_keyframe", !0), this.name = t, this.style = n;
  }
  return St(e, [{
    key: "getName",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return n ? "".concat(n, "-").concat(this.name) : this.name;
    }
  }]), e;
}();
function Dn(e) {
  return e.notSplit = !0, e;
}
Dn(["borderTop", "borderBottom"]), Dn(["borderTop"]), Dn(["borderBottom"]), Dn(["borderLeft", "borderRight"]), Dn(["borderLeft"]), Dn(["borderRight"]);
var lc = /* @__PURE__ */ di({});
function Em(e) {
  return zf(e) || Lf(e) || nc(e) || Hf();
}
function ia(e, t) {
  for (var n = e, r = 0; r < t.length; r += 1) {
    if (n == null)
      return;
    n = n[t[r]];
  }
  return n;
}
function ld(e, t, n, r) {
  if (!t.length)
    return n;
  var o = Em(t), i = o[0], s = o.slice(1), a;
  return !e && typeof i == "number" ? a = [] : Array.isArray(e) ? a = Ft(e) : a = J({}, e), r && n === void 0 && s.length === 1 ? delete a[i][s[0]] : a[i] = ld(a[i], s, n, r), a;
}
function cs(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && r && n === void 0 && !ia(e, t.slice(0, -1)) ? e : ld(e, t, n, r);
}
function _m(e) {
  return Ce(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function El(e) {
  return Array.isArray(e) ? [] : {};
}
var Om = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function Am() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = El(t[0]);
  return t.forEach(function(o) {
    function i(s, a) {
      var c = new Set(a), l = ia(o, s), u = Array.isArray(l);
      if (u || _m(l)) {
        if (!c.has(l)) {
          c.add(l);
          var d = ia(r, s);
          u ? r = cs(r, s, []) : (!d || Ce(d) !== "object") && (r = cs(r, s, El(l))), Om(l).forEach(function(f) {
            i([].concat(Ft(s), [f]), c);
          });
        }
      } else
        r = cs(r, s, l);
    }
    i([]);
  }), r;
}
function ud() {
}
let Gt = null;
function Tm() {
  Gt = null, Af();
}
let uc = ud;
process.env.NODE_ENV !== "production" && (uc = (e, t, n) => {
  un(e, `[antd: ${t}] ${n}`), process.env.NODE_ENV === "test" && Tm();
});
const fd = /* @__PURE__ */ w.createContext({}), fn = process.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: t
  } = w.useContext(fd), n = (r, o, i) => {
    if (!r)
      if (t === !1 && o === "deprecated") {
        const s = Gt;
        Gt || (Gt = {}), Gt[e] = Gt[e] || [], Gt[e].includes(i || "") || Gt[e].push(i || ""), s || console.warn("[antd] There exists deprecated usage in your code:", Gt);
      } else
        process.env.NODE_ENV !== "production" && uc(r, e, i);
  };
  return n.deprecated = (r, o, i, s) => {
    n(r, "deprecated", `\`${o}\` is deprecated. Please use \`${i}\` instead.${s ? ` ${s}` : ""}`);
  }, n;
} : () => {
  const e = () => {
  };
  return e.deprecated = ud, e;
}, qr = uc, Rm = /* @__PURE__ */ di(void 0), bt = "${label} is not a valid ${type}", Ai = {
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
        string: bt,
        method: bt,
        array: bt,
        object: bt,
        number: bt,
        date: bt,
        boolean: bt,
        integer: bt,
        float: bt,
        regexp: bt,
        email: bt,
        url: bt,
        hex: bt
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
Object.assign({}, Ai.Modal);
let ko = [];
const _l = () => ko.reduce((e, t) => Object.assign(Object.assign({}, e), t), Ai.Modal);
function Pm(e) {
  if (e) {
    const t = Object.assign({}, e);
    return ko.push(t), _l(), () => {
      ko = ko.filter((n) => n !== t), _l();
    };
  }
  Object.assign({}, Ai.Modal);
}
const dd = /* @__PURE__ */ di(void 0), hd = "internalMark", pd = (e) => {
  const {
    locale: t = {},
    children: n,
    _ANT_MARK__: r
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const i = fn("LocaleProvider");
    process.env.NODE_ENV !== "production" && i(r === hd, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  w.useEffect(() => Pm(t == null ? void 0 : t.Modal), [t]);
  const o = w.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ w.createElement(dd.Provider, {
    value: o
  }, n);
};
process.env.NODE_ENV !== "production" && (pd.displayName = "LocaleProvider");
const xd = {
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
}, Mr = Object.assign(Object.assign({}, xd), {
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
}), ot = Math.round;
function ls(e, t) {
  const n = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], r = n.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    r[o] = t(r[o] || 0, n[o] || "", o);
  return n[3] ? r[3] = n[3].includes("%") ? r[3] / 100 : r[3] : r[3] = 1, r;
}
const Ol = (e, t, n) => n === 0 ? e : e / 100;
function yr(e, t) {
  const n = t || 255;
  return e > n ? n : e < 0 ? 0 : e;
}
let tt = class gd {
  constructor(t) {
    U(this, "isValid", !0), U(this, "r", 0), U(this, "g", 0), U(this, "b", 0), U(this, "a", 1), U(this, "_h", void 0), U(this, "_s", void 0), U(this, "_l", void 0), U(this, "_v", void 0), U(this, "_max", void 0), U(this, "_min", void 0), U(this, "_brightness", void 0);
    function n(r) {
      return r[0] in t && r[1] in t && r[2] in t;
    }
    if (t) if (typeof t == "string") {
      let o = function(i) {
        return r.startsWith(i);
      };
      const r = t.trim();
      /^#?[A-F\d]{3,8}$/i.test(r) ? this.fromHexString(r) : o("rgb") ? this.fromRgbString(r) : o("hsl") ? this.fromHslString(r) : (o("hsv") || o("hsb")) && this.fromHsvString(r);
    } else if (t instanceof gd)
      this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this._h = t._h, this._s = t._s, this._l = t._l, this._v = t._v;
    else if (n("rgb"))
      this.r = yr(t.r), this.g = yr(t.g), this.b = yr(t.b), this.a = typeof t.a == "number" ? yr(t.a, 1) : 1;
    else if (n("hsl"))
      this.fromHsl(t);
    else if (n("hsv"))
      this.fromHsv(t);
    else
      throw new Error("@ant-design/fast-color: unsupported input " + JSON.stringify(t));
  }
  // ======================= Setter =======================
  setR(t) {
    return this._sc("r", t);
  }
  setG(t) {
    return this._sc("g", t);
  }
  setB(t) {
    return this._sc("b", t);
  }
  setA(t) {
    return this._sc("a", t, 1);
  }
  setHue(t) {
    const n = this.toHsv();
    return n.h = t, this._c(n);
  }
  // ======================= Getter =======================
  /**
   * Returns the perceived luminance of a color, from 0-1.
   * @see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
   */
  getLuminance() {
    function t(i) {
      const s = i / 255;
      return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
    }
    const n = t(this.r), r = t(this.g), o = t(this.b);
    return 0.2126 * n + 0.7152 * r + 0.0722 * o;
  }
  getHue() {
    if (typeof this._h > "u") {
      const t = this.getMax() - this.getMin();
      t === 0 ? this._h = 0 : this._h = ot(60 * (this.r === this.getMax() ? (this.g - this.b) / t + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / t + 2 : (this.r - this.g) / t + 4));
    }
    return this._h;
  }
  getSaturation() {
    if (typeof this._s > "u") {
      const t = this.getMax() - this.getMin();
      t === 0 ? this._s = 0 : this._s = t / this.getMax();
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
  darken(t = 10) {
    const n = this.getHue(), r = this.getSaturation();
    let o = this.getLightness() - t / 100;
    return o < 0 && (o = 0), this._c({
      h: n,
      s: r,
      l: o,
      a: this.a
    });
  }
  lighten(t = 10) {
    const n = this.getHue(), r = this.getSaturation();
    let o = this.getLightness() + t / 100;
    return o > 1 && (o = 1), this._c({
      h: n,
      s: r,
      l: o,
      a: this.a
    });
  }
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  mix(t, n = 50) {
    const r = this._c(t), o = n / 100, i = (a) => (r[a] - this[a]) * o + this[a], s = {
      r: ot(i("r")),
      g: ot(i("g")),
      b: ot(i("b")),
      a: ot(i("a") * 100) / 100
    };
    return this._c(s);
  }
  /**
   * Mix the color with pure white, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return white.
   */
  tint(t = 10) {
    return this.mix({
      r: 255,
      g: 255,
      b: 255,
      a: 1
    }, t);
  }
  /**
   * Mix the color with pure black, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return black.
   */
  shade(t = 10) {
    return this.mix({
      r: 0,
      g: 0,
      b: 0,
      a: 1
    }, t);
  }
  onBackground(t) {
    const n = this._c(t), r = this.a + n.a * (1 - this.a), o = (i) => ot((this[i] * this.a + n[i] * n.a * (1 - this.a)) / r);
    return this._c({
      r: o("r"),
      g: o("g"),
      b: o("b"),
      a: r
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
  equals(t) {
    return this.r === t.r && this.g === t.g && this.b === t.b && this.a === t.a;
  }
  clone() {
    return this._c(this);
  }
  // ======================= Format =======================
  toHexString() {
    let t = "#";
    const n = (this.r || 0).toString(16);
    t += n.length === 2 ? n : "0" + n;
    const r = (this.g || 0).toString(16);
    t += r.length === 2 ? r : "0" + r;
    const o = (this.b || 0).toString(16);
    if (t += o.length === 2 ? o : "0" + o, typeof this.a == "number" && this.a >= 0 && this.a < 1) {
      const i = ot(this.a * 255).toString(16);
      t += i.length === 2 ? i : "0" + i;
    }
    return t;
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
    const t = this.getHue(), n = ot(this.getSaturation() * 100), r = ot(this.getLightness() * 100);
    return this.a !== 1 ? `hsla(${t},${n}%,${r}%,${this.a})` : `hsl(${t},${n}%,${r}%)`;
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
  _sc(t, n, r) {
    const o = this.clone();
    return o[t] = yr(n, r), o;
  }
  _c(t) {
    return new this.constructor(t);
  }
  getMax() {
    return typeof this._max > "u" && (this._max = Math.max(this.r, this.g, this.b)), this._max;
  }
  getMin() {
    return typeof this._min > "u" && (this._min = Math.min(this.r, this.g, this.b)), this._min;
  }
  fromHexString(t) {
    const n = t.replace("#", "");
    function r(o, i) {
      return parseInt(n[o] + n[i || o], 16);
    }
    n.length < 6 ? (this.r = r(0), this.g = r(1), this.b = r(2), this.a = n[3] ? r(3) / 255 : 1) : (this.r = r(0, 1), this.g = r(2, 3), this.b = r(4, 5), this.a = n[6] ? r(6, 7) / 255 : 1);
  }
  fromHsl({
    h: t,
    s: n,
    l: r,
    a: o
  }) {
    if (this._h = t % 360, this._s = n, this._l = r, this.a = typeof o == "number" ? o : 1, n <= 0) {
      const f = ot(r * 255);
      this.r = f, this.g = f, this.b = f;
    }
    let i = 0, s = 0, a = 0;
    const c = t / 60, l = (1 - Math.abs(2 * r - 1)) * n, u = l * (1 - Math.abs(c % 2 - 1));
    c >= 0 && c < 1 ? (i = l, s = u) : c >= 1 && c < 2 ? (i = u, s = l) : c >= 2 && c < 3 ? (s = l, a = u) : c >= 3 && c < 4 ? (s = u, a = l) : c >= 4 && c < 5 ? (i = u, a = l) : c >= 5 && c < 6 && (i = l, a = u);
    const d = r - l / 2;
    this.r = ot((i + d) * 255), this.g = ot((s + d) * 255), this.b = ot((a + d) * 255);
  }
  fromHsv({
    h: t,
    s: n,
    v: r,
    a: o
  }) {
    this._h = t % 360, this._s = n, this._v = r, this.a = typeof o == "number" ? o : 1;
    const i = ot(r * 255);
    if (this.r = i, this.g = i, this.b = i, n <= 0)
      return;
    const s = t / 60, a = Math.floor(s), c = s - a, l = ot(r * (1 - n) * 255), u = ot(r * (1 - n * c) * 255), d = ot(r * (1 - n * (1 - c)) * 255);
    switch (a) {
      case 0:
        this.g = d, this.b = l;
        break;
      case 1:
        this.r = u, this.b = l;
        break;
      case 2:
        this.r = l, this.b = d;
        break;
      case 3:
        this.r = l, this.g = u;
        break;
      case 4:
        this.r = d, this.g = l;
        break;
      case 5:
      default:
        this.g = l, this.b = u;
        break;
    }
  }
  fromHsvString(t) {
    const n = ls(t, Ol);
    this.fromHsv({
      h: n[0],
      s: n[1],
      v: n[2],
      a: n[3]
    });
  }
  fromHslString(t) {
    const n = ls(t, Ol);
    this.fromHsl({
      h: n[0],
      s: n[1],
      l: n[2],
      a: n[3]
    });
  }
  fromRgbString(t) {
    const n = ls(t, (r, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? ot(r / 100 * 255) : r
    ));
    this.r = n[0], this.g = n[1], this.b = n[2], this.a = n[3];
  }
};
var uo = 2, Al = 0.16, Im = 0.05, Nm = 0.05, km = 0.15, md = 5, vd = 4, jm = [{
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
function Tl(e, t, n) {
  var r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = n ? Math.round(e.h) - uo * t : Math.round(e.h) + uo * t : r = n ? Math.round(e.h) + uo * t : Math.round(e.h) - uo * t, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function Rl(e, t, n) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var r;
  return n ? r = e.s - Al * t : t === vd ? r = e.s + Al : r = e.s + Im * t, r > 1 && (r = 1), n && t === md && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Math.round(r * 100) / 100;
}
function Pl(e, t, n) {
  var r;
  return n ? r = e.v + Nm * t : r = e.v - km * t, r = Math.max(0, Math.min(1, r)), Math.round(r * 100) / 100;
}
function Dr(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], r = new tt(e), o = r.toHsv(), i = md; i > 0; i -= 1) {
    var s = new tt({
      h: Tl(o, i, !0),
      s: Rl(o, i, !0),
      v: Pl(o, i, !0)
    });
    n.push(s);
  }
  n.push(r);
  for (var a = 1; a <= vd; a += 1) {
    var c = new tt({
      h: Tl(o, a),
      s: Rl(o, a),
      v: Pl(o, a)
    });
    n.push(c);
  }
  return t.theme === "dark" ? jm.map(function(l) {
    var u = l.index, d = l.amount;
    return new tt(t.backgroundColor || "#141414").mix(n[u], d).toHexString();
  }) : n.map(function(l) {
    return l.toHexString();
  });
}
var us = {
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
}, sa = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
sa.primary = sa[5];
var aa = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
aa.primary = aa[5];
var ca = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
ca.primary = ca[5];
var la = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
la.primary = la[5];
var ua = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
ua.primary = ua[5];
var fa = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
fa.primary = fa[5];
var da = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
da.primary = da[5];
var ha = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
ha.primary = ha[5];
var Uo = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
Uo.primary = Uo[5];
var pa = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
pa.primary = pa[5];
var xa = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
xa.primary = xa[5];
var ga = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
ga.primary = ga[5];
var ma = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
ma.primary = ma[5];
var fs = {
  red: sa,
  volcano: aa,
  orange: ca,
  gold: la,
  yellow: ua,
  lime: fa,
  green: da,
  cyan: ha,
  blue: Uo,
  geekblue: pa,
  purple: xa,
  magenta: ga,
  grey: ma
};
function Lm(e, t) {
  let {
    generateColorPalettes: n,
    generateNeutralColorPalettes: r
  } = t;
  const {
    colorSuccess: o,
    colorWarning: i,
    colorError: s,
    colorInfo: a,
    colorPrimary: c,
    colorBgBase: l,
    colorTextBase: u
  } = e, d = n(c), f = n(o), v = n(i), g = n(s), h = n(a), x = r(l, u), y = e.colorLink || e.colorInfo, S = n(y), p = new tt(g[1]).mix(new tt(g[3]), 50).toHexString();
  return Object.assign(Object.assign({}, x), {
    colorPrimaryBg: d[1],
    colorPrimaryBgHover: d[2],
    colorPrimaryBorder: d[3],
    colorPrimaryBorderHover: d[4],
    colorPrimaryHover: d[5],
    colorPrimary: d[6],
    colorPrimaryActive: d[7],
    colorPrimaryTextHover: d[8],
    colorPrimaryText: d[9],
    colorPrimaryTextActive: d[10],
    colorSuccessBg: f[1],
    colorSuccessBgHover: f[2],
    colorSuccessBorder: f[3],
    colorSuccessBorderHover: f[4],
    colorSuccessHover: f[4],
    colorSuccess: f[6],
    colorSuccessActive: f[7],
    colorSuccessTextHover: f[8],
    colorSuccessText: f[9],
    colorSuccessTextActive: f[10],
    colorErrorBg: g[1],
    colorErrorBgHover: g[2],
    colorErrorBgFilledHover: p,
    colorErrorBgActive: g[3],
    colorErrorBorder: g[3],
    colorErrorBorderHover: g[4],
    colorErrorHover: g[5],
    colorError: g[6],
    colorErrorActive: g[7],
    colorErrorTextHover: g[8],
    colorErrorText: g[9],
    colorErrorTextActive: g[10],
    colorWarningBg: v[1],
    colorWarningBgHover: v[2],
    colorWarningBorder: v[3],
    colorWarningBorderHover: v[4],
    colorWarningHover: v[4],
    colorWarning: v[6],
    colorWarningActive: v[7],
    colorWarningTextHover: v[8],
    colorWarningText: v[9],
    colorWarningTextActive: v[10],
    colorInfoBg: h[1],
    colorInfoBgHover: h[2],
    colorInfoBorder: h[3],
    colorInfoBorderHover: h[4],
    colorInfoHover: h[4],
    colorInfo: h[6],
    colorInfoActive: h[7],
    colorInfoTextHover: h[8],
    colorInfoText: h[9],
    colorInfoTextActive: h[10],
    colorLinkHover: S[4],
    colorLink: S[6],
    colorLinkActive: S[7],
    colorBgMask: new tt("#000").setA(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const Mm = (e) => {
  let t = e, n = e, r = e, o = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? n = 4 : e < 8 && e >= 7 ? n = 5 : e < 14 && e >= 8 ? n = 6 : e < 16 && e >= 14 ? n = 7 : e >= 16 && (n = 8), e < 6 && e >= 2 ? r = 1 : e >= 6 && (r = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
    borderRadius: e,
    borderRadiusXS: r,
    borderRadiusSM: n,
    borderRadiusLG: t,
    borderRadiusOuter: o
  };
};
function Dm(e) {
  const {
    motionUnit: t,
    motionBase: n,
    borderRadius: r,
    lineWidth: o
  } = e;
  return Object.assign({
    // motion
    motionDurationFast: `${(n + t).toFixed(1)}s`,
    motionDurationMid: `${(n + t * 2).toFixed(1)}s`,
    motionDurationSlow: `${(n + t * 3).toFixed(1)}s`,
    // line
    lineWidthBold: o + 1
  }, Mm(r));
}
const Bm = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function jo(e) {
  return (e + 8) / e;
}
function zm(e) {
  const t = Array.from({
    length: 10
  }).map((n, r) => {
    const o = r - 1, i = e * Math.pow(Math.E, o / 5), s = r > 1 ? Math.floor(i) : Math.ceil(i);
    return Math.floor(s / 2) * 2;
  });
  return t[1] = e, t.map((n) => ({
    size: n,
    lineHeight: jo(n)
  }));
}
const Hm = (e) => {
  const t = zm(e), n = t.map((u) => u.size), r = t.map((u) => u.lineHeight), o = n[1], i = n[0], s = n[2], a = r[1], c = r[0], l = r[2];
  return {
    fontSizeSM: i,
    fontSize: o,
    fontSizeLG: s,
    fontSizeXL: n[3],
    fontSizeHeading1: n[6],
    fontSizeHeading2: n[5],
    fontSizeHeading3: n[4],
    fontSizeHeading4: n[3],
    fontSizeHeading5: n[2],
    lineHeight: a,
    lineHeightLG: l,
    lineHeightSM: c,
    fontHeight: Math.round(a * o),
    fontHeightLG: Math.round(l * s),
    fontHeightSM: Math.round(c * i),
    lineHeightHeading1: r[6],
    lineHeightHeading2: r[5],
    lineHeightHeading3: r[4],
    lineHeightHeading4: r[3],
    lineHeightHeading5: r[2]
  };
};
function Fm(e) {
  const {
    sizeUnit: t,
    sizeStep: n
  } = e;
  return {
    sizeXXL: t * (n + 8),
    // 48
    sizeXL: t * (n + 4),
    // 32
    sizeLG: t * (n + 2),
    // 24
    sizeMD: t * (n + 1),
    // 20
    sizeMS: t * n,
    // 16
    size: t * n,
    // 16
    sizeSM: t * (n - 1),
    // 12
    sizeXS: t * (n - 2),
    // 8
    sizeXXS: t * (n - 3)
    // 4
  };
}
const Ct = (e, t) => new tt(e).setA(t).toRgbString(), Sr = (e, t) => new tt(e).darken(t).toHexString(), $m = (e) => {
  const t = Dr(e);
  return {
    1: t[0],
    2: t[1],
    3: t[2],
    4: t[3],
    5: t[4],
    6: t[5],
    7: t[6],
    8: t[4],
    9: t[5],
    10: t[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
}, Vm = (e, t) => {
  const n = e || "#fff", r = t || "#000";
  return {
    colorBgBase: n,
    colorTextBase: r,
    colorText: Ct(r, 0.88),
    colorTextSecondary: Ct(r, 0.65),
    colorTextTertiary: Ct(r, 0.45),
    colorTextQuaternary: Ct(r, 0.25),
    colorFill: Ct(r, 0.15),
    colorFillSecondary: Ct(r, 0.06),
    colorFillTertiary: Ct(r, 0.04),
    colorFillQuaternary: Ct(r, 0.02),
    colorBgSolid: Ct(r, 1),
    colorBgSolidHover: Ct(r, 0.75),
    colorBgSolidActive: Ct(r, 0.95),
    colorBgLayout: Sr(n, 4),
    colorBgContainer: Sr(n, 0),
    colorBgElevated: Sr(n, 0),
    colorBgSpotlight: Ct(r, 0.85),
    colorBgBlur: "transparent",
    colorBorder: Sr(n, 15),
    colorBorderSecondary: Sr(n, 6)
  };
};
function Wm(e) {
  us.pink = us.magenta, fs.pink = fs.magenta;
  const t = Object.keys(xd).map((n) => {
    const r = e[n] === us[n] ? fs[n] : Dr(e[n]);
    return Array.from({
      length: 10
    }, () => 1).reduce((o, i, s) => (o[`${n}-${s + 1}`] = r[s], o[`${n}${s + 1}`] = r[s], o), {});
  }).reduce((n, r) => (n = Object.assign(Object.assign({}, n), r), n), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), Lm(e, {
    generateColorPalettes: $m,
    generateNeutralColorPalettes: Vm
  })), Hm(e.fontSize)), Fm(e)), Bm(e)), Dm(e));
}
const bd = Qs(Wm), va = {
  token: Mr,
  override: {
    override: Mr
  },
  hashed: !0
}, yd = /* @__PURE__ */ q.createContext(va), Go = "ant", fc = "anticon", qm = (e, t) => t || (e ? `${Go}-${e}` : Go), kt = /* @__PURE__ */ w.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: qm,
  iconPrefixCls: fc
}), {
  Consumer: _S
} = kt, Il = {};
function dc(e) {
  const t = w.useContext(kt), {
    getPrefixCls: n,
    direction: r,
    getPopupContainer: o
  } = t, i = t[e];
  return Object.assign(Object.assign({
    classNames: Il,
    styles: Il
  }, i), {
    getPrefixCls: n,
    direction: r,
    getPopupContainer: o
  });
}
const Um = `-ant-${Date.now()}-${Math.random()}`;
function Gm(e, t) {
  const n = {}, r = (s, a) => {
    let c = s.clone();
    return c = (a == null ? void 0 : a(c)) || c, c.toRgbString();
  }, o = (s, a) => {
    const c = new tt(s), l = Dr(c.toRgbString());
    n[`${a}-color`] = r(c), n[`${a}-color-disabled`] = l[1], n[`${a}-color-hover`] = l[4], n[`${a}-color-active`] = l[6], n[`${a}-color-outline`] = c.clone().setA(0.2).toRgbString(), n[`${a}-color-deprecated-bg`] = l[0], n[`${a}-color-deprecated-border`] = l[2];
  };
  if (t.primaryColor) {
    o(t.primaryColor, "primary");
    const s = new tt(t.primaryColor), a = Dr(s.toRgbString());
    a.forEach((l, u) => {
      n[`primary-${u + 1}`] = l;
    }), n["primary-color-deprecated-l-35"] = r(s, (l) => l.lighten(35)), n["primary-color-deprecated-l-20"] = r(s, (l) => l.lighten(20)), n["primary-color-deprecated-t-20"] = r(s, (l) => l.tint(20)), n["primary-color-deprecated-t-50"] = r(s, (l) => l.tint(50)), n["primary-color-deprecated-f-12"] = r(s, (l) => l.setA(l.a * 0.12));
    const c = new tt(a[0]);
    n["primary-color-active-deprecated-f-30"] = r(c, (l) => l.setA(l.a * 0.3)), n["primary-color-active-deprecated-d-02"] = r(c, (l) => l.darken(2));
  }
  return t.successColor && o(t.successColor, "success"), t.warningColor && o(t.warningColor, "warning"), t.errorColor && o(t.errorColor, "error"), t.infoColor && o(t.infoColor, "info"), `
  :root {
    ${Object.keys(n).map((s) => `--${e}-${s}: ${n[s]};`).join(`
`)}
  }
  `.trim();
}
function Ym(e, t) {
  const n = Gm(e, t);
  Jt() ? On(n, `${Um}-dynamic-theme`) : process.env.NODE_ENV !== "production" && qr(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const Yo = /* @__PURE__ */ w.createContext(!1), Xm = (e) => {
  let {
    children: t,
    disabled: n
  } = e;
  const r = w.useContext(Yo);
  return /* @__PURE__ */ w.createElement(Yo.Provider, {
    value: n ?? r
  }, t);
}, er = /* @__PURE__ */ w.createContext(void 0), Km = (e) => {
  let {
    children: t,
    size: n
  } = e;
  const r = w.useContext(er);
  return /* @__PURE__ */ w.createElement(er.Provider, {
    value: n || r
  }, t);
};
function Zm() {
  const e = _t(Yo), t = _t(er);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
var Sd = /* @__PURE__ */ St(function e() {
  yt(this, e);
}), Cd = "CALC_UNIT", Jm = new RegExp(Cd, "g");
function ds(e) {
  return typeof e == "number" ? "".concat(e).concat(Cd) : e;
}
var Qm = /* @__PURE__ */ function(e) {
  cr(n, e);
  var t = Vr(n);
  function n(r, o) {
    var i;
    yt(this, n), i = t.call(this), U(_n(i), "result", ""), U(_n(i), "unitlessCssVar", void 0), U(_n(i), "lowPriority", void 0);
    var s = Ce(r);
    return i.unitlessCssVar = o, r instanceof n ? i.result = "(".concat(r.result, ")") : s === "number" ? i.result = ds(r) : s === "string" && (i.result = r), i;
  }
  return St(n, [{
    key: "add",
    value: function(o) {
      return o instanceof n ? this.result = "".concat(this.result, " + ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " + ").concat(ds(o))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(o) {
      return o instanceof n ? this.result = "".concat(this.result, " - ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " - ").concat(ds(o))), this.lowPriority = !0, this;
    }
  }, {
    key: "mul",
    value: function(o) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), o instanceof n ? this.result = "".concat(this.result, " * ").concat(o.getResult(!0)) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " * ").concat(o)), this.lowPriority = !1, this;
    }
  }, {
    key: "div",
    value: function(o) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), o instanceof n ? this.result = "".concat(this.result, " / ").concat(o.getResult(!0)) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " / ").concat(o)), this.lowPriority = !1, this;
    }
  }, {
    key: "getResult",
    value: function(o) {
      return this.lowPriority || o ? "(".concat(this.result, ")") : this.result;
    }
  }, {
    key: "equal",
    value: function(o) {
      var i = this, s = o || {}, a = s.unit, c = !0;
      return typeof a == "boolean" ? c = a : Array.from(this.unitlessCssVar).some(function(l) {
        return i.result.includes(l);
      }) && (c = !1), this.result = this.result.replace(Jm, c ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), n;
}(Sd), e1 = /* @__PURE__ */ function(e) {
  cr(n, e);
  var t = Vr(n);
  function n(r) {
    var o;
    return yt(this, n), o = t.call(this), U(_n(o), "result", 0), r instanceof n ? o.result = r.result : typeof r == "number" && (o.result = r), o;
  }
  return St(n, [{
    key: "add",
    value: function(o) {
      return o instanceof n ? this.result += o.result : typeof o == "number" && (this.result += o), this;
    }
  }, {
    key: "sub",
    value: function(o) {
      return o instanceof n ? this.result -= o.result : typeof o == "number" && (this.result -= o), this;
    }
  }, {
    key: "mul",
    value: function(o) {
      return o instanceof n ? this.result *= o.result : typeof o == "number" && (this.result *= o), this;
    }
  }, {
    key: "div",
    value: function(o) {
      return o instanceof n ? this.result /= o.result : typeof o == "number" && (this.result /= o), this;
    }
  }, {
    key: "equal",
    value: function() {
      return this.result;
    }
  }]), n;
}(Sd), t1 = function(t, n) {
  var r = t === "css" ? Qm : e1;
  return function(o) {
    return new r(o, n);
  };
}, Nl = function(t, n) {
  return "".concat([n, t.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function ln(e) {
  var t = w.useRef();
  t.current = e;
  var n = w.useCallback(function() {
    for (var r, o = arguments.length, i = new Array(o), s = 0; s < o; s++)
      i[s] = arguments[s];
    return (r = t.current) === null || r === void 0 ? void 0 : r.call.apply(r, [t].concat(i));
  }, []);
  return n;
}
function Br(e) {
  var t = w.useRef(!1), n = w.useState(e), r = se(n, 2), o = r[0], i = r[1];
  w.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function s(a, c) {
    c && t.current || i(a);
  }
  return [o, s];
}
function hs(e) {
  return e !== void 0;
}
function n1(e, t) {
  var n = t || {}, r = n.defaultValue, o = n.value, i = n.onChange, s = n.postState, a = Br(function() {
    return hs(o) ? o : hs(r) ? typeof r == "function" ? r() : r : typeof e == "function" ? e() : e;
  }), c = se(a, 2), l = c[0], u = c[1], d = o !== void 0 ? o : l, f = s ? s(d) : d, v = ln(i), g = Br([d]), h = se(g, 2), x = h[0], y = h[1];
  vl(function() {
    var p = x[0];
    l !== p && v(l, p);
  }, [x]), vl(function() {
    hs(o) || u(o);
  }, [o]);
  var S = ln(function(p, E) {
    u(p, E), y([d], E);
  });
  return [f, S];
}
function kl(e, t, n, r) {
  var o = J({}, t[e]);
  if (r != null && r.deprecatedTokens) {
    var i = r.deprecatedTokens;
    i.forEach(function(a) {
      var c = se(a, 2), l = c[0], u = c[1];
      if (process.env.NODE_ENV !== "production" && un(!(o != null && o[l]), "Component Token `".concat(String(l), "` of ").concat(String(e), " is deprecated. Please use `").concat(String(u), "` instead.")), o != null && o[l] || o != null && o[u]) {
        var d;
        (d = o[u]) !== null && d !== void 0 || (o[u] = o == null ? void 0 : o[l]);
      }
    });
  }
  var s = J(J({}, n), o);
  return Object.keys(s).forEach(function(a) {
    s[a] === t[a] && delete s[a];
  }), s;
}
var wd = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", ba = !0;
function dn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  if (!wd)
    return Object.assign.apply(Object, [{}].concat(t));
  ba = !1;
  var r = {};
  return t.forEach(function(o) {
    if (Ce(o) === "object") {
      var i = Object.keys(o);
      i.forEach(function(s) {
        Object.defineProperty(r, s, {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return o[s];
          }
        });
      });
    }
  }), ba = !0, r;
}
var jl = {};
function r1() {
}
var o1 = function(t) {
  var n, r = t, o = r1;
  return wd && typeof Proxy < "u" && (n = /* @__PURE__ */ new Set(), r = new Proxy(t, {
    get: function(s, a) {
      if (ba) {
        var c;
        (c = n) === null || c === void 0 || c.add(a);
      }
      return s[a];
    }
  }), o = function(s, a) {
    var c;
    jl[s] = {
      global: Array.from(n),
      component: J(J({}, (c = jl[s]) === null || c === void 0 ? void 0 : c.component), a)
    };
  }), {
    token: r,
    keys: n,
    flush: o
  };
};
function Ll(e, t, n) {
  if (typeof n == "function") {
    var r;
    return n(dn(t, (r = t[e]) !== null && r !== void 0 ? r : {}));
  }
  return n ?? {};
}
function i1(e) {
  return e === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      return "max(".concat(r.map(function(i) {
        return Kt(i);
      }).join(","), ")");
    },
    min: function() {
      for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      return "min(".concat(r.map(function(i) {
        return Kt(i);
      }).join(","), ")");
    }
  };
}
var s1 = 1e3 * 60 * 10, a1 = /* @__PURE__ */ function() {
  function e() {
    yt(this, e), U(this, "map", /* @__PURE__ */ new Map()), U(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), U(this, "nextID", 0), U(this, "lastAccessBeat", /* @__PURE__ */ new Map()), U(this, "accessBeat", 0);
  }
  return St(e, [{
    key: "set",
    value: function(n, r) {
      this.clear();
      var o = this.getCompositeKey(n);
      this.map.set(o, r), this.lastAccessBeat.set(o, Date.now());
    }
  }, {
    key: "get",
    value: function(n) {
      var r = this.getCompositeKey(n), o = this.map.get(r);
      return this.lastAccessBeat.set(r, Date.now()), this.accessBeat += 1, o;
    }
  }, {
    key: "getCompositeKey",
    value: function(n) {
      var r = this, o = n.map(function(i) {
        return i && Ce(i) === "object" ? "obj_".concat(r.getObjectID(i)) : "".concat(Ce(i), "_").concat(i);
      });
      return o.join("|");
    }
  }, {
    key: "getObjectID",
    value: function(n) {
      if (this.objectIDMap.has(n))
        return this.objectIDMap.get(n);
      var r = this.nextID;
      return this.objectIDMap.set(n, r), this.nextID += 1, r;
    }
  }, {
    key: "clear",
    value: function() {
      var n = this;
      if (this.accessBeat > 1e4) {
        var r = Date.now();
        this.lastAccessBeat.forEach(function(o, i) {
          r - o > s1 && (n.map.delete(i), n.lastAccessBeat.delete(i));
        }), this.accessBeat = 0;
      }
    }
  }]), e;
}(), Ml = new a1();
function c1(e, t) {
  return q.useMemo(function() {
    var n = Ml.get(t);
    if (n)
      return n;
    var r = e();
    return Ml.set(t, r), r;
  }, t);
}
var l1 = function() {
  return {};
};
function u1(e) {
  var t = e.useCSP, n = t === void 0 ? l1 : t, r = e.useToken, o = e.usePrefix, i = e.getResetStyles, s = e.getCommonStyle, a = e.getCompUnitless;
  function c(f, v, g, h) {
    var x = Array.isArray(f) ? f[0] : f;
    function y(k) {
      return "".concat(String(x)).concat(k.slice(0, 1).toUpperCase()).concat(k.slice(1));
    }
    var S = (h == null ? void 0 : h.unitless) || {}, p = typeof a == "function" ? a(f) : {}, E = J(J({}, p), {}, U({}, y("zIndexPopup"), !0));
    Object.keys(S).forEach(function(k) {
      E[y(k)] = S[k];
    });
    var b = J(J({}, h), {}, {
      unitless: E,
      prefixToken: y
    }), T = u(f, v, g, b), O = l(x, g, b);
    return function(k) {
      var F = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : k, G = T(k, F), oe = se(G, 2), te = oe[1], H = O(F), X = se(H, 2), Q = X[0], N = X[1];
      return [Q, te, N];
    };
  }
  function l(f, v, g) {
    var h = g.unitless, x = g.injectStyle, y = x === void 0 ? !0 : x, S = g.prefixToken, p = g.ignore, E = function(O) {
      var k = O.rootCls, F = O.cssVar, G = F === void 0 ? {} : F, oe = r(), te = oe.realToken;
      return Cm({
        path: [f],
        prefix: G.prefix,
        key: G.key,
        unitless: h,
        ignore: p,
        token: te,
        scope: k
      }, function() {
        var H = Ll(f, te, v), X = kl(f, te, H, {
          deprecatedTokens: g == null ? void 0 : g.deprecatedTokens
        });
        return Object.keys(H).forEach(function(Q) {
          X[S(Q)] = X[Q], delete X[Q];
        }), X;
      }), null;
    }, b = function(O) {
      var k = r(), F = k.cssVar;
      return [function(G) {
        return y && F ? /* @__PURE__ */ q.createElement(q.Fragment, null, /* @__PURE__ */ q.createElement(E, {
          rootCls: O,
          cssVar: F,
          component: f
        }), G) : G;
      }, F == null ? void 0 : F.key];
    };
    return b;
  }
  function u(f, v, g) {
    var h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, x = Array.isArray(f) ? f : [f, f], y = se(x, 1), S = y[0], p = x.join("-"), E = e.layer || {
      name: "antd"
    };
    return function(b) {
      var T = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : b, O = r(), k = O.theme, F = O.realToken, G = O.hashId, oe = O.token, te = O.cssVar, H = o(), X = H.rootPrefixCls, Q = H.iconPrefixCls, N = n(), R = te ? "css" : "js", P = c1(function() {
        var ee = /* @__PURE__ */ new Set();
        return te && Object.keys(h.unitless || {}).forEach(function(ae) {
          ee.add(To(ae, te.prefix)), ee.add(To(ae, Nl(S, te.prefix)));
        }), t1(R, ee);
      }, [R, S, te == null ? void 0 : te.prefix]), j = i1(R), $ = j.max, V = j.min, Y = {
        theme: k,
        token: oe,
        hashId: G,
        nonce: function() {
          return N.nonce;
        },
        clientOnly: h.clientOnly,
        layer: E,
        // antd is always at top of styles
        order: h.order || -999
      };
      typeof i == "function" && oa(J(J({}, Y), {}, {
        clientOnly: !1,
        path: ["Shared", X]
      }), function() {
        return i(oe, {
          prefix: {
            rootPrefixCls: X,
            iconPrefixCls: Q
          },
          csp: N
        });
      });
      var re = oa(J(J({}, Y), {}, {
        path: [p, b, Q]
      }), function() {
        if (h.injectStyle === !1)
          return [];
        var ee = o1(oe), ae = ee.token, le = ee.flush, ue = Ll(S, F, g), _e = ".".concat(b), me = kl(S, F, ue, {
          deprecatedTokens: h.deprecatedTokens
        });
        te && ue && Ce(ue) === "object" && Object.keys(ue).forEach(function(M) {
          ue[M] = "var(".concat(To(M, Nl(S, te.prefix)), ")");
        });
        var je = dn(ae, {
          componentCls: _e,
          prefixCls: b,
          iconCls: ".".concat(Q),
          antCls: ".".concat(X),
          calc: P,
          // @ts-ignore
          max: $,
          // @ts-ignore
          min: V
        }, te ? ue : me), Ne = v(je, {
          hashId: G,
          prefixCls: b,
          rootPrefixCls: X,
          iconPrefixCls: Q
        });
        le(S, me);
        var xe = typeof s == "function" ? s(je, b, T, h.resetFont) : null;
        return [h.resetStyle === !1 ? null : xe, Ne];
      });
      return [re, G];
    };
  }
  function d(f, v, g) {
    var h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, x = u(f, v, g, J({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, h)), y = function(p) {
      var E = p.prefixCls, b = p.rootCls, T = b === void 0 ? E : b;
      return x(E, T), null;
    };
    return process.env.NODE_ENV !== "production" && (y.displayName = "SubStyle_".concat(String(Array.isArray(f) ? f.join(".") : f))), y;
  }
  return {
    genStyleHooks: c,
    genSubStyleComponent: d,
    genComponentStyleHook: u
  };
}
const hc = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"], f1 = "5.24.6";
function ps(e) {
  return e >= 0 && e <= 255;
}
function Ar(e, t) {
  const {
    r: n,
    g: r,
    b: o,
    a: i
  } = new tt(e).toRgb();
  if (i < 1)
    return e;
  const {
    r: s,
    g: a,
    b: c
  } = new tt(t).toRgb();
  for (let l = 0.01; l <= 1; l += 0.01) {
    const u = Math.round((n - s * (1 - l)) / l), d = Math.round((r - a * (1 - l)) / l), f = Math.round((o - c * (1 - l)) / l);
    if (ps(u) && ps(d) && ps(f))
      return new tt({
        r: u,
        g: d,
        b: f,
        a: Math.round(l * 100) / 100
      }).toRgbString();
  }
  return new tt({
    r: n,
    g: r,
    b: o,
    a: 1
  }).toRgbString();
}
var d1 = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function Ed(e) {
  const {
    override: t
  } = e, n = d1(e, ["override"]), r = Object.assign({}, t);
  Object.keys(Mr).forEach((f) => {
    delete r[f];
  });
  const o = Object.assign(Object.assign({}, n), r), i = 480, s = 576, a = 768, c = 992, l = 1200, u = 1600;
  if (o.motion === !1) {
    const f = "0s";
    o.motionDurationFast = f, o.motionDurationMid = f, o.motionDurationSlow = f;
  }
  return Object.assign(Object.assign(Object.assign({}, o), {
    // ============== Background ============== //
    colorFillContent: o.colorFillSecondary,
    colorFillContentHover: o.colorFill,
    colorFillAlter: o.colorFillQuaternary,
    colorBgContainerDisabled: o.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: o.colorBgContainer,
    colorSplit: Ar(o.colorBorderSecondary, o.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: o.colorTextQuaternary,
    colorTextDisabled: o.colorTextQuaternary,
    colorTextHeading: o.colorText,
    colorTextLabel: o.colorTextSecondary,
    colorTextDescription: o.colorTextTertiary,
    colorTextLightSolid: o.colorWhite,
    colorHighlight: o.colorError,
    colorBgTextHover: o.colorFillSecondary,
    colorBgTextActive: o.colorFill,
    colorIcon: o.colorTextTertiary,
    colorIconHover: o.colorText,
    colorErrorOutline: Ar(o.colorErrorBg, o.colorBgContainer),
    colorWarningOutline: Ar(o.colorWarningBg, o.colorBgContainer),
    // Font
    fontSizeIcon: o.fontSizeSM,
    // Line
    lineWidthFocus: o.lineWidth * 3,
    // Control
    lineWidth: o.lineWidth,
    controlOutlineWidth: o.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: o.controlHeight / 2,
    controlItemBgHover: o.colorFillTertiary,
    controlItemBgActive: o.colorPrimaryBg,
    controlItemBgActiveHover: o.colorPrimaryBgHover,
    controlItemBgActiveDisabled: o.colorFill,
    controlTmpOutline: o.colorFillQuaternary,
    controlOutline: Ar(o.colorPrimaryBg, o.colorBgContainer),
    lineType: o.lineType,
    borderRadius: o.borderRadius,
    borderRadiusXS: o.borderRadiusXS,
    borderRadiusSM: o.borderRadiusSM,
    borderRadiusLG: o.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: o.sizeXXS,
    paddingXS: o.sizeXS,
    paddingSM: o.sizeSM,
    padding: o.size,
    paddingMD: o.sizeMD,
    paddingLG: o.sizeLG,
    paddingXL: o.sizeXL,
    paddingContentHorizontalLG: o.sizeLG,
    paddingContentVerticalLG: o.sizeMS,
    paddingContentHorizontal: o.sizeMS,
    paddingContentVertical: o.sizeSM,
    paddingContentHorizontalSM: o.size,
    paddingContentVerticalSM: o.sizeXS,
    marginXXS: o.sizeXXS,
    marginXS: o.sizeXS,
    marginSM: o.sizeSM,
    margin: o.size,
    marginMD: o.sizeMD,
    marginLG: o.sizeLG,
    marginXL: o.sizeXL,
    marginXXL: o.sizeXXL,
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
    screenXS: i,
    screenXSMin: i,
    screenXSMax: s - 1,
    screenSM: s,
    screenSMMin: s,
    screenSMMax: a - 1,
    screenMD: a,
    screenMDMin: a,
    screenMDMax: c - 1,
    screenLG: c,
    screenLGMin: c,
    screenLGMax: l - 1,
    screenXL: l,
    screenXLMin: l,
    screenXLMax: u - 1,
    screenXXL: u,
    screenXXLMin: u,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new tt("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new tt("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new tt("rgba(0, 0, 0, 0.09)").toRgbString()}
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
  }), r);
}
var Dl = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const _d = {
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
}, h1 = {
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
}, p1 = {
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
}, Od = (e, t, n) => {
  const r = n.getDerivativeToken(e), {
    override: o
  } = t, i = Dl(t, ["override"]);
  let s = Object.assign(Object.assign({}, r), {
    override: o
  });
  return s = Ed(s), i && Object.entries(i).forEach((a) => {
    let [c, l] = a;
    const {
      theme: u
    } = l, d = Dl(l, ["theme"]);
    let f = d;
    u && (f = Od(Object.assign(Object.assign({}, s), d), {
      override: d
    }, u)), s[c] = f;
  }), s;
};
function Ur() {
  const {
    token: e,
    hashed: t,
    theme: n,
    override: r,
    cssVar: o
  } = q.useContext(yd), i = `${f1}-${t || ""}`, s = n || bd, [a, c, l] = Gg(s, [Mr, e], {
    salt: i,
    override: r,
    getComputedToken: Od,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: Ed,
    cssVar: o && {
      prefix: o.prefix,
      key: o.key,
      unitless: _d,
      ignore: h1,
      preserve: p1
    }
  });
  return [s, l, t ? c : "", a, o];
}
const Ad = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  return {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    color: e.colorText,
    fontSize: e.fontSize,
    // font-variant: @font-variant-base;
    lineHeight: e.lineHeight,
    listStyle: "none",
    // font-feature-settings: @font-feature-settings-base;
    fontFamily: t ? "inherit" : e.fontFamily
  };
}, Td = () => ({
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
}), x1 = (e) => ({
  a: {
    color: e.colorLink,
    textDecoration: e.linkDecoration,
    backgroundColor: "transparent",
    // remove the gray background on active links in IE 10.
    outline: "none",
    cursor: "pointer",
    transition: `color ${e.motionDurationSlow}`,
    "-webkit-text-decoration-skip": "objects",
    // remove gaps in links underline in iOS 8+ and Safari 8+.
    "&:hover": {
      color: e.colorLinkHover
    },
    "&:active": {
      color: e.colorLinkActive
    },
    "&:active, &:hover": {
      textDecoration: e.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    "&:focus": {
      textDecoration: e.linkFocusDecoration,
      outline: 0
    },
    "&[disabled]": {
      color: e.colorTextDisabled,
      cursor: "not-allowed"
    }
  }
}), g1 = (e, t, n, r) => {
  const o = `[class^="${t}"], [class*=" ${t}"]`, i = n ? `.${n}` : o, s = {
    boxSizing: "border-box",
    "&::before, &::after": {
      boxSizing: "border-box"
    }
  };
  let a = {};
  return r !== !1 && (a = {
    fontFamily: e.fontFamily,
    fontSize: e.fontSize
  }), {
    [i]: Object.assign(Object.assign(Object.assign({}, a), s), {
      [o]: s
    })
  };
}, m1 = (e, t) => ({
  outline: `${Kt(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
  outlineOffset: t ?? 1,
  transition: "outline-offset 0s, outline 0s"
}), v1 = (e, t) => ({
  "&:focus-visible": Object.assign({}, m1(e, t))
}), Rd = (e) => ({
  [`.${e}`]: Object.assign(Object.assign({}, Td()), {
    [`.${e} .${e}-icon`]: {
      display: "block"
    }
  })
}), {
  genStyleHooks: Ti,
  genComponentStyleHook: b1,
  genSubStyleComponent: y1
} = u1({
  usePrefix: () => {
    const {
      getPrefixCls: e,
      iconPrefixCls: t
    } = _t(kt);
    return {
      rootPrefixCls: e(),
      iconPrefixCls: t
    };
  },
  useToken: () => {
    const [e, t, n, r, o] = Ur();
    return {
      theme: e,
      realToken: t,
      hashId: n,
      token: r,
      cssVar: o
    };
  },
  useCSP: () => {
    const {
      csp: e
    } = _t(kt);
    return e ?? {};
  },
  getResetStyles: (e, t) => {
    var n;
    const r = x1(e);
    return [r, {
      "&": r
    }, Rd((n = t == null ? void 0 : t.prefix.iconPrefixCls) !== null && n !== void 0 ? n : fc)];
  },
  getCommonStyle: g1,
  getCompUnitless: () => _d
}), S1 = (e, t) => {
  const [n, r] = Ur();
  return oa({
    token: r,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => t == null ? void 0 : t.nonce,
    layer: {
      name: "antd"
    }
  }, () => [Rd(e)]);
}, C1 = Object.assign({}, w), {
  useId: Bl
} = C1, w1 = () => "", E1 = typeof Bl > "u" ? w1 : Bl;
function _1(e, t, n) {
  var r, o;
  const i = fn("ConfigProvider"), s = e || {}, a = s.inherit === !1 || !t ? Object.assign(Object.assign({}, va), {
    hashed: (r = t == null ? void 0 : t.hashed) !== null && r !== void 0 ? r : va.hashed,
    cssVar: t == null ? void 0 : t.cssVar
  }) : t, c = E1();
  if (process.env.NODE_ENV !== "production") {
    const l = s.cssVar || a.cssVar, u = !!(typeof s.cssVar == "object" && (!((o = s.cssVar) === null || o === void 0) && o.key) || c);
    process.env.NODE_ENV !== "production" && i(!l || u, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return ec(() => {
    var l, u;
    if (!e)
      return t;
    const d = Object.assign({}, a.components);
    Object.keys(e.components || {}).forEach((g) => {
      d[g] = Object.assign(Object.assign({}, d[g]), e.components[g]);
    });
    const f = `css-var-${c.replace(/:/g, "")}`, v = ((l = s.cssVar) !== null && l !== void 0 ? l : a.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: n == null ? void 0 : n.prefixCls
    }, typeof a.cssVar == "object" ? a.cssVar : {}), typeof s.cssVar == "object" ? s.cssVar : {}), {
      key: typeof s.cssVar == "object" && ((u = s.cssVar) === null || u === void 0 ? void 0 : u.key) || f
    });
    return Object.assign(Object.assign(Object.assign({}, a), s), {
      token: Object.assign(Object.assign({}, a.token), s.token),
      components: d,
      cssVar: v
    });
  }, [s, a], (l, u) => l.some((d, f) => {
    const v = u[f];
    return !bg(d, v, !0);
  }));
}
var O1 = ["children"], Pd = /* @__PURE__ */ w.createContext({});
function A1(e) {
  var t = e.children, n = Pn(e, O1);
  return /* @__PURE__ */ w.createElement(Pd.Provider, {
    value: n
  }, t);
}
var T1 = /* @__PURE__ */ function(e) {
  cr(n, e);
  var t = Vr(n);
  function n() {
    return yt(this, n), t.apply(this, arguments);
  }
  return St(n, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), n;
}(w.Component);
function R1(e) {
  var t = w.useReducer(function(a) {
    return a + 1;
  }, 0), n = se(t, 2), r = n[1], o = w.useRef(e), i = ln(function() {
    return o.current;
  }), s = ln(function(a) {
    o.current = typeof a == "function" ? a(o.current) : a, r();
  });
  return [i, s];
}
var rn = "none", fo = "appear", ho = "enter", po = "leave", zl = "none", Rt = "prepare", Bn = "start", zn = "active", pc = "end", Id = "prepared";
function Hl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit".concat(e)] = "webkit".concat(t), n["Moz".concat(e)] = "moz".concat(t), n["ms".concat(e)] = "MS".concat(t), n["O".concat(e)] = "o".concat(t.toLowerCase()), n;
}
function P1(e, t) {
  var n = {
    animationend: Hl("Animation", "AnimationEnd"),
    transitionend: Hl("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete n.animationend.animation, "TransitionEvent" in t || delete n.transitionend.transition), n;
}
var I1 = P1(Jt(), typeof window < "u" ? window : {}), Nd = {};
if (Jt()) {
  var N1 = document.createElement("div");
  Nd = N1.style;
}
var xo = {};
function kd(e) {
  if (xo[e])
    return xo[e];
  var t = I1[e];
  if (t)
    for (var n = Object.keys(t), r = n.length, o = 0; o < r; o += 1) {
      var i = n[o];
      if (Object.prototype.hasOwnProperty.call(t, i) && i in Nd)
        return xo[e] = t[i], xo[e];
    }
  return "";
}
var jd = kd("animationend"), Ld = kd("transitionend"), Md = !!(jd && Ld), Fl = jd || "animationend", $l = Ld || "transitionend";
function Vl(e, t) {
  if (!e) return null;
  if (Ce(e) === "object") {
    var n = t.replace(/-\w/g, function(r) {
      return r[1].toUpperCase();
    });
    return e[n];
  }
  return "".concat(e, "-").concat(t);
}
const k1 = function(e) {
  var t = Ee();
  function n(o) {
    o && (o.removeEventListener($l, e), o.removeEventListener(Fl, e));
  }
  function r(o) {
    t.current && t.current !== o && n(t.current), o && o !== t.current && (o.addEventListener($l, e), o.addEventListener(Fl, e), t.current = o);
  }
  return w.useEffect(function() {
    return function() {
      n(t.current);
    };
  }, []), [r, n];
};
var Dd = Jt() ? eh : Ke;
const j1 = function() {
  var e = w.useRef(null);
  function t() {
    cn.cancel(e.current);
  }
  function n(r) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var i = cn(function() {
      o <= 1 ? r({
        isCanceled: function() {
          return i !== e.current;
        }
      }) : n(r, o - 1);
    });
    e.current = i;
  }
  return w.useEffect(function() {
    return function() {
      t();
    };
  }, []), [n, t];
};
var L1 = [Rt, Bn, zn, pc], M1 = [Rt, Id], Bd = !1, D1 = !0;
function zd(e) {
  return e === zn || e === pc;
}
const B1 = function(e, t, n) {
  var r = Br(zl), o = se(r, 2), i = o[0], s = o[1], a = j1(), c = se(a, 2), l = c[0], u = c[1];
  function d() {
    s(Rt, !0);
  }
  var f = t ? M1 : L1;
  return Dd(function() {
    if (i !== zl && i !== pc) {
      var v = f.indexOf(i), g = f[v + 1], h = n(i);
      h === Bd ? s(g, !0) : g && l(function(x) {
        function y() {
          x.isCanceled() || s(g, !0);
        }
        h === !0 ? y() : Promise.resolve(h).then(y);
      });
    }
  }, [e, i]), w.useEffect(function() {
    return function() {
      u();
    };
  }, []), [d, i];
};
function z1(e, t, n, r) {
  var o = r.motionEnter, i = o === void 0 ? !0 : o, s = r.motionAppear, a = s === void 0 ? !0 : s, c = r.motionLeave, l = c === void 0 ? !0 : c, u = r.motionDeadline, d = r.motionLeaveImmediately, f = r.onAppearPrepare, v = r.onEnterPrepare, g = r.onLeavePrepare, h = r.onAppearStart, x = r.onEnterStart, y = r.onLeaveStart, S = r.onAppearActive, p = r.onEnterActive, E = r.onLeaveActive, b = r.onAppearEnd, T = r.onEnterEnd, O = r.onLeaveEnd, k = r.onVisibleChanged, F = Br(), G = se(F, 2), oe = G[0], te = G[1], H = R1(rn), X = se(H, 2), Q = X[0], N = X[1], R = Br(null), P = se(R, 2), j = P[0], $ = P[1], V = Q(), Y = Ee(!1), re = Ee(null);
  function ee() {
    return n();
  }
  var ae = Ee(!1);
  function le() {
    N(rn), $(null, !0);
  }
  var ue = ln(function(Le) {
    var ce = Q();
    if (ce !== rn) {
      var Me = ee();
      if (!(Le && !Le.deadline && Le.target !== Me)) {
        var dt = ae.current, ut;
        ce === fo && dt ? ut = b == null ? void 0 : b(Me, Le) : ce === ho && dt ? ut = T == null ? void 0 : T(Me, Le) : ce === po && dt && (ut = O == null ? void 0 : O(Me, Le)), dt && ut !== !1 && le();
      }
    }
  }), _e = k1(ue), me = se(_e, 1), je = me[0], Ne = function(ce) {
    switch (ce) {
      case fo:
        return U(U(U({}, Rt, f), Bn, h), zn, S);
      case ho:
        return U(U(U({}, Rt, v), Bn, x), zn, p);
      case po:
        return U(U(U({}, Rt, g), Bn, y), zn, E);
      default:
        return {};
    }
  }, xe = w.useMemo(function() {
    return Ne(V);
  }, [V]), M = B1(V, !e, function(Le) {
    if (Le === Rt) {
      var ce = xe[Rt];
      return ce ? ce(ee()) : Bd;
    }
    if (B in xe) {
      var Me;
      $(((Me = xe[B]) === null || Me === void 0 ? void 0 : Me.call(xe, ee(), null)) || null);
    }
    return B === zn && V !== rn && (je(ee()), u > 0 && (clearTimeout(re.current), re.current = setTimeout(function() {
      ue({
        deadline: !0
      });
    }, u))), B === Id && le(), D1;
  }), A = se(M, 2), L = A[0], B = A[1], _ = zd(B);
  ae.current = _;
  var K = Ee(null);
  Dd(function() {
    if (!(Y.current && K.current === t)) {
      te(t);
      var Le = Y.current;
      Y.current = !0;
      var ce;
      !Le && t && a && (ce = fo), Le && t && i && (ce = ho), (Le && !t && l || !Le && d && !t && l) && (ce = po);
      var Me = Ne(ce);
      ce && (e || Me[Rt]) ? (N(ce), L()) : N(rn), K.current = t;
    }
  }, [t]), Ke(function() {
    // Cancel appear
    (V === fo && !a || // Cancel enter
    V === ho && !i || // Cancel leave
    V === po && !l) && N(rn);
  }, [a, i, l]), Ke(function() {
    return function() {
      Y.current = !1, clearTimeout(re.current);
    };
  }, []);
  var Z = w.useRef(!1);
  Ke(function() {
    oe && (Z.current = !0), oe !== void 0 && V === rn && ((Z.current || oe) && (k == null || k(oe)), Z.current = !0);
  }, [oe, V]);
  var Pe = j;
  return xe[Rt] && B === Bn && (Pe = J({
    transition: "none"
  }, Pe)), [V, B, Pe, oe ?? t];
}
function H1(e) {
  var t = e;
  Ce(e) === "object" && (t = e.transitionSupport);
  function n(o, i) {
    return !!(o.motionName && t && i !== !1);
  }
  var r = /* @__PURE__ */ w.forwardRef(function(o, i) {
    var s = o.visible, a = s === void 0 ? !0 : s, c = o.removeOnLeave, l = c === void 0 ? !0 : c, u = o.forceRender, d = o.children, f = o.motionName, v = o.leavedClassName, g = o.eventProps, h = w.useContext(Pd), x = h.motion, y = n(o, x), S = Ee(), p = Ee();
    function E() {
      try {
        return S.current instanceof HTMLElement ? S.current : cg(p.current);
      } catch {
        return null;
      }
    }
    var b = z1(y, a, E, o), T = se(b, 4), O = T[0], k = T[1], F = T[2], G = T[3], oe = w.useRef(G);
    G && (oe.current = !0);
    var te = w.useCallback(function(P) {
      S.current = P, Pf(i, P);
    }, [i]), H, X = J(J({}, g), {}, {
      visible: a
    });
    if (!d)
      H = null;
    else if (O === rn)
      G ? H = d(J({}, X), te) : !l && oe.current && v ? H = d(J(J({}, X), {}, {
        className: v
      }), te) : u || !l && !v ? H = d(J(J({}, X), {}, {
        style: {
          display: "none"
        }
      }), te) : H = null;
    else {
      var Q;
      k === Rt ? Q = "prepare" : zd(k) ? Q = "active" : k === Bn && (Q = "start");
      var N = Vl(f, "".concat(O, "-").concat(Q));
      H = d(J(J({}, X), {}, {
        className: Se(Vl(f, O), U(U({}, N, N && Q), f, typeof f == "string")),
        style: F
      }), te);
    }
    if (/* @__PURE__ */ w.isValidElement(H) && If(H)) {
      var R = kf(H);
      R || (H = /* @__PURE__ */ w.cloneElement(H, {
        ref: te
      }));
    }
    return /* @__PURE__ */ w.createElement(T1, {
      ref: p
    }, H);
  });
  return r.displayName = "CSSMotion", r;
}
const Ri = H1(Md);
var ya = "add", Sa = "keep", Ca = "remove", xs = "removed";
function F1(e) {
  var t;
  return e && Ce(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, J(J({}, t), {}, {
    key: String(t.key)
  });
}
function wa() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(F1);
}
function $1() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = [], r = 0, o = t.length, i = wa(e), s = wa(t);
  i.forEach(function(l) {
    for (var u = !1, d = r; d < o; d += 1) {
      var f = s[d];
      if (f.key === l.key) {
        r < d && (n = n.concat(s.slice(r, d).map(function(v) {
          return J(J({}, v), {}, {
            status: ya
          });
        })), r = d), n.push(J(J({}, f), {}, {
          status: Sa
        })), r += 1, u = !0;
        break;
      }
    }
    u || n.push(J(J({}, l), {}, {
      status: Ca
    }));
  }), r < o && (n = n.concat(s.slice(r).map(function(l) {
    return J(J({}, l), {}, {
      status: ya
    });
  })));
  var a = {};
  n.forEach(function(l) {
    var u = l.key;
    a[u] = (a[u] || 0) + 1;
  });
  var c = Object.keys(a).filter(function(l) {
    return a[l] > 1;
  });
  return c.forEach(function(l) {
    n = n.filter(function(u) {
      var d = u.key, f = u.status;
      return d !== l || f !== Ca;
    }), n.forEach(function(u) {
      u.key === l && (u.status = Sa);
    });
  }), n;
}
var V1 = ["component", "children", "onVisibleChanged", "onAllRemoved"], W1 = ["status"], q1 = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function U1(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ri, n = /* @__PURE__ */ function(r) {
    cr(i, r);
    var o = Vr(i);
    function i() {
      var s;
      yt(this, i);
      for (var a = arguments.length, c = new Array(a), l = 0; l < a; l++)
        c[l] = arguments[l];
      return s = o.call.apply(o, [this].concat(c)), U(_n(s), "state", {
        keyEntities: []
      }), U(_n(s), "removeKey", function(u) {
        s.setState(function(d) {
          var f = d.keyEntities.map(function(v) {
            return v.key !== u ? v : J(J({}, v), {}, {
              status: xs
            });
          });
          return {
            keyEntities: f
          };
        }, function() {
          var d = s.state.keyEntities, f = d.filter(function(v) {
            var g = v.status;
            return g !== xs;
          }).length;
          f === 0 && s.props.onAllRemoved && s.props.onAllRemoved();
        });
      }), s;
    }
    return St(i, [{
      key: "render",
      value: function() {
        var a = this, c = this.state.keyEntities, l = this.props, u = l.component, d = l.children, f = l.onVisibleChanged;
        l.onAllRemoved;
        var v = Pn(l, V1), g = u || w.Fragment, h = {};
        return q1.forEach(function(x) {
          h[x] = v[x], delete v[x];
        }), delete v.keys, /* @__PURE__ */ w.createElement(g, v, c.map(function(x, y) {
          var S = x.status, p = Pn(x, W1), E = S === ya || S === Sa;
          return /* @__PURE__ */ w.createElement(t, gt({}, h, {
            key: p.key,
            visible: E,
            eventProps: p,
            onVisibleChanged: function(T) {
              f == null || f(T, {
                key: p.key
              }), T || a.removeKey(p.key);
            }
          }), function(b, T) {
            return d(J(J({}, b), {}, {
              index: y
            }), T);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(a, c) {
        var l = a.keys, u = c.keyEntities, d = wa(l), f = $1(u, d);
        return {
          keyEntities: f.filter(function(v) {
            var g = u.find(function(h) {
              var x = h.key;
              return v.key === x;
            });
            return !(g && g.status === xs && v.status === Ca);
          })
        };
      }
    }]), i;
  }(w.Component);
  return U(n, "defaultProps", {
    component: "div"
  }), n;
}
U1(Md);
function G1(e) {
  const {
    children: t
  } = e, [, n] = Ur(), {
    motion: r
  } = n, o = w.useRef(!1);
  return o.current = o.current || r === !1, o.current ? /* @__PURE__ */ w.createElement(A1, {
    motion: r
  }, t) : t;
}
const Hd = /* @__PURE__ */ w.memo((e) => {
  let {
    dropdownMatchSelectWidth: t
  } = e;
  return fn("ConfigProvider").deprecated(t === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
process.env.NODE_ENV !== "production" && (Hd.displayName = "PropWarning");
const Y1 = process.env.NODE_ENV !== "production" ? Hd : () => null;
var X1 = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
let Ea = !1;
process.env.NODE_ENV;
const K1 = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let Fd;
function Z1() {
  return Fd || Go;
}
function J1(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const Q1 = (e) => {
  const {
    prefixCls: t,
    iconPrefixCls: n,
    theme: r,
    holderRender: o
  } = e;
  t !== void 0 && (Fd = t), r && J1(r) && (process.env.NODE_ENV !== "production" && qr(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), Ym(Z1(), r));
}, ev = (e) => {
  const {
    children: t,
    csp: n,
    autoInsertSpaceInButton: r,
    alert: o,
    anchor: i,
    form: s,
    locale: a,
    componentSize: c,
    direction: l,
    space: u,
    splitter: d,
    virtual: f,
    dropdownMatchSelectWidth: v,
    popupMatchSelectWidth: g,
    popupOverflow: h,
    legacyLocale: x,
    parentContext: y,
    iconPrefixCls: S,
    theme: p,
    componentDisabled: E,
    segmented: b,
    statistic: T,
    spin: O,
    calendar: k,
    carousel: F,
    cascader: G,
    collapse: oe,
    typography: te,
    checkbox: H,
    descriptions: X,
    divider: Q,
    drawer: N,
    skeleton: R,
    steps: P,
    image: j,
    layout: $,
    list: V,
    mentions: Y,
    modal: re,
    progress: ee,
    result: ae,
    slider: le,
    breadcrumb: ue,
    menu: _e,
    pagination: me,
    input: je,
    textArea: Ne,
    empty: xe,
    badge: M,
    radio: A,
    rate: L,
    switch: B,
    transfer: _,
    avatar: K,
    message: Z,
    tag: Pe,
    table: Le,
    card: ce,
    tabs: Me,
    timeline: dt,
    timePicker: ut,
    upload: Vt,
    notification: z,
    tree: C,
    colorPicker: de,
    datePicker: Ie,
    rangePicker: Ge,
    flex: be,
    wave: ze,
    dropdown: He,
    warning: we,
    tour: nt,
    tooltip: Wt,
    popover: hn,
    popconfirm: Ye,
    floatButtonGroup: De,
    variant: ht,
    inputNumber: at,
    treeSelect: Mt
  } = e, Nn = w.useCallback(($e, m) => {
    const {
      prefixCls: D
    } = e;
    if (m)
      return m;
    const W = D || y.getPrefixCls("");
    return $e ? `${W}-${$e}` : W;
  }, [y.getPrefixCls, e.prefixCls]), pn = S || y.iconPrefixCls || fc, kn = n || y.csp;
  S1(pn, kn);
  const xn = _1(p, y.theme, {
    prefixCls: Nn("")
  });
  process.env.NODE_ENV !== "production" && (Ea = Ea || !!xn);
  const jn = {
    csp: kn,
    autoInsertSpaceInButton: r,
    alert: o,
    anchor: i,
    locale: a || x,
    direction: l,
    space: u,
    splitter: d,
    virtual: f,
    popupMatchSelectWidth: g ?? v,
    popupOverflow: h,
    getPrefixCls: Nn,
    iconPrefixCls: pn,
    theme: xn,
    segmented: b,
    statistic: T,
    spin: O,
    calendar: k,
    carousel: F,
    cascader: G,
    collapse: oe,
    typography: te,
    checkbox: H,
    descriptions: X,
    divider: Q,
    drawer: N,
    skeleton: R,
    steps: P,
    image: j,
    input: je,
    textArea: Ne,
    layout: $,
    list: V,
    mentions: Y,
    modal: re,
    progress: ee,
    result: ae,
    slider: le,
    breadcrumb: ue,
    menu: _e,
    pagination: me,
    empty: xe,
    badge: M,
    radio: A,
    rate: L,
    switch: B,
    transfer: _,
    avatar: K,
    message: Z,
    tag: Pe,
    table: Le,
    card: ce,
    tabs: Me,
    timeline: dt,
    timePicker: ut,
    upload: Vt,
    notification: z,
    tree: C,
    colorPicker: de,
    datePicker: Ie,
    rangePicker: Ge,
    flex: be,
    wave: ze,
    dropdown: He,
    warning: we,
    tour: nt,
    tooltip: Wt,
    popover: hn,
    popconfirm: Ye,
    floatButtonGroup: De,
    variant: ht,
    inputNumber: at,
    treeSelect: Mt
  };
  process.env.NODE_ENV !== "production" && fn("ConfigProvider")(!("autoInsertSpaceInButton" in e), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const en = Object.assign({}, y);
  Object.keys(jn).forEach(($e) => {
    jn[$e] !== void 0 && (en[$e] = jn[$e]);
  }), K1.forEach(($e) => {
    const m = e[$e];
    m && (en[$e] = m);
  }), typeof r < "u" && (en.button = Object.assign({
    autoInsertSpace: r
  }, en.button));
  const tn = ec(() => en, en, ($e, m) => {
    const D = Object.keys($e), W = Object.keys(m);
    return D.length !== W.length || D.some((ie) => $e[ie] !== m[ie]);
  }), {
    layer: pr
  } = w.useContext(Wr), Kr = w.useMemo(() => ({
    prefixCls: pn,
    csp: kn,
    layer: pr ? "antd" : void 0
  }), [pn, kn, pr]);
  let et = /* @__PURE__ */ w.createElement(w.Fragment, null, /* @__PURE__ */ w.createElement(Y1, {
    dropdownMatchSelectWidth: v
  }), t);
  const Zr = w.useMemo(() => {
    var $e, m, D, W;
    return Am((($e = Ai.Form) === null || $e === void 0 ? void 0 : $e.defaultValidateMessages) || {}, ((D = (m = tn.locale) === null || m === void 0 ? void 0 : m.Form) === null || D === void 0 ? void 0 : D.defaultValidateMessages) || {}, ((W = tn.form) === null || W === void 0 ? void 0 : W.validateMessages) || {}, (s == null ? void 0 : s.validateMessages) || {});
  }, [tn, s == null ? void 0 : s.validateMessages]);
  Object.keys(Zr).length > 0 && (et = /* @__PURE__ */ w.createElement(Rm.Provider, {
    value: Zr
  }, et)), a && (et = /* @__PURE__ */ w.createElement(pd, {
    locale: a,
    _ANT_MARK__: hd
  }, et)), et = /* @__PURE__ */ w.createElement(lc.Provider, {
    value: Kr
  }, et), c && (et = /* @__PURE__ */ w.createElement(Km, {
    size: c
  }, et)), et = /* @__PURE__ */ w.createElement(G1, null, et);
  const Gi = w.useMemo(() => {
    const $e = xn || {}, {
      algorithm: m,
      token: D,
      components: W,
      cssVar: ie
    } = $e, ye = X1($e, ["algorithm", "token", "components", "cssVar"]), Oe = m && (!Array.isArray(m) || m.length > 0) ? Qs(m) : bd, ge = {};
    Object.entries(W || {}).forEach((ct) => {
      let [Fe, Ve] = ct;
      const We = Object.assign({}, Ve);
      "algorithm" in We && (We.algorithm === !0 ? We.theme = Oe : (Array.isArray(We.algorithm) || typeof We.algorithm == "function") && (We.theme = Qs(We.algorithm)), delete We.algorithm), ge[Fe] = We;
    });
    const pe = Object.assign(Object.assign({}, Mr), D);
    return Object.assign(Object.assign({}, ye), {
      theme: Oe,
      token: pe,
      components: ge,
      override: Object.assign({
        override: pe
      }, ge),
      cssVar: ie
    });
  }, [xn]);
  return p && (et = /* @__PURE__ */ w.createElement(yd.Provider, {
    value: Gi
  }, et)), tn.warning && (et = /* @__PURE__ */ w.createElement(fd.Provider, {
    value: tn.warning
  }, et)), E !== void 0 && (et = /* @__PURE__ */ w.createElement(Xm, {
    disabled: E
  }, et)), /* @__PURE__ */ w.createElement(kt.Provider, {
    value: tn
  }, et);
}, ur = (e) => {
  const t = w.useContext(kt), n = w.useContext(dd);
  return /* @__PURE__ */ w.createElement(ev, Object.assign({
    parentContext: t,
    legacyLocale: n
  }, e));
};
ur.ConfigContext = kt;
ur.SizeContext = er;
ur.config = Q1;
ur.useConfig = Zm;
Object.defineProperty(ur, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && qr(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), er)
});
process.env.NODE_ENV !== "production" && (ur.displayName = "ConfigProvider");
function $d(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function tv(e) {
  return $d(e) instanceof ShadowRoot;
}
function nv(e) {
  return tv(e) ? $d(e) : null;
}
function rv(e) {
  return e.replace(/-(.)/g, function(t, n) {
    return n.toUpperCase();
  });
}
function ov(e, t) {
  un(e, "[@ant-design/icons] ".concat(t));
}
function Wl(e) {
  return Ce(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (Ce(e.icon) === "object" || typeof e.icon == "function");
}
function ql() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(t, n) {
    var r = e[n];
    switch (n) {
      case "class":
        t.className = r, delete t.class;
        break;
      default:
        delete t[n], t[rv(n)] = r;
    }
    return t;
  }, {});
}
function _a(e, t, n) {
  return n ? /* @__PURE__ */ q.createElement(e.tag, J(J({
    key: t
  }, ql(e.attrs)), n), (e.children || []).map(function(r, o) {
    return _a(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
  })) : /* @__PURE__ */ q.createElement(e.tag, J({
    key: t
  }, ql(e.attrs)), (e.children || []).map(function(r, o) {
    return _a(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
  }));
}
function Vd(e) {
  return Dr(e)[0];
}
function Wd(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var iv = `
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
`, sv = function(t) {
  var n = _t(lc), r = n.csp, o = n.prefixCls, i = n.layer, s = iv;
  o && (s = s.replace(/anticon/g, o)), i && (s = "@layer ".concat(i, ` {
`).concat(s, `
}`)), Ke(function() {
    var a = t.current, c = nv(a);
    On(s, "@ant-design-icons", {
      prepend: !i,
      csp: r,
      attachTo: c
    });
  }, []);
}, av = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], Ir = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function cv(e) {
  var t = e.primaryColor, n = e.secondaryColor;
  Ir.primaryColor = t, Ir.secondaryColor = n || Vd(t), Ir.calculated = !!n;
}
function lv() {
  return J({}, Ir);
}
var fr = function(t) {
  var n = t.icon, r = t.className, o = t.onClick, i = t.style, s = t.primaryColor, a = t.secondaryColor, c = Pn(t, av), l = w.useRef(), u = Ir;
  if (s && (u = {
    primaryColor: s,
    secondaryColor: a || Vd(s)
  }), sv(l), ov(Wl(n), "icon should be icon definiton, but got ".concat(n)), !Wl(n))
    return null;
  var d = n;
  return d && typeof d.icon == "function" && (d = J(J({}, d), {}, {
    icon: d.icon(u.primaryColor, u.secondaryColor)
  })), _a(d.icon, "svg-".concat(d.name), J(J({
    className: r,
    onClick: o,
    style: i,
    "data-icon": d.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, c), {}, {
    ref: l
  }));
};
fr.displayName = "IconReact";
fr.getTwoToneColors = lv;
fr.setTwoToneColors = cv;
function qd(e) {
  var t = Wd(e), n = se(t, 2), r = n[0], o = n[1];
  return fr.setTwoToneColors({
    primaryColor: r,
    secondaryColor: o
  });
}
function uv() {
  var e = fr.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var fv = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
qd(Uo.primary);
var Qt = /* @__PURE__ */ w.forwardRef(function(e, t) {
  var n = e.className, r = e.icon, o = e.spin, i = e.rotate, s = e.tabIndex, a = e.onClick, c = e.twoToneColor, l = Pn(e, fv), u = w.useContext(lc), d = u.prefixCls, f = d === void 0 ? "anticon" : d, v = u.rootClassName, g = Se(v, f, U(U({}, "".concat(f, "-").concat(r.name), !!r.name), "".concat(f, "-spin"), !!o || r.name === "loading"), n), h = s;
  h === void 0 && a && (h = -1);
  var x = i ? {
    msTransform: "rotate(".concat(i, "deg)"),
    transform: "rotate(".concat(i, "deg)")
  } : void 0, y = Wd(c), S = se(y, 2), p = S[0], E = S[1];
  return /* @__PURE__ */ w.createElement("span", gt({
    role: "img",
    "aria-label": r.name
  }, l, {
    ref: t,
    tabIndex: h,
    onClick: a,
    className: g
  }), /* @__PURE__ */ w.createElement(fr, {
    icon: r,
    primaryColor: p,
    secondaryColor: E,
    style: x
  }));
});
Qt.displayName = "AntdIcon";
Qt.getTwoToneColor = uv;
Qt.setTwoToneColor = qd;
var dv = function(t, n) {
  return /* @__PURE__ */ w.createElement(Qt, gt({}, t, {
    ref: n,
    icon: Gp
  }));
}, Ud = /* @__PURE__ */ w.forwardRef(dv);
process.env.NODE_ENV !== "production" && (Ud.displayName = "CheckCircleFilled");
var hv = function(t, n) {
  return /* @__PURE__ */ w.createElement(Qt, gt({}, t, {
    ref: n,
    icon: Yp
  }));
}, Gd = /* @__PURE__ */ w.forwardRef(hv);
process.env.NODE_ENV !== "production" && (Gd.displayName = "CloseCircleFilled");
var pv = function(t, n) {
  return /* @__PURE__ */ w.createElement(Qt, gt({}, t, {
    ref: n,
    icon: Xp
  }));
}, Yd = /* @__PURE__ */ w.forwardRef(pv);
process.env.NODE_ENV !== "production" && (Yd.displayName = "CloseOutlined");
var xv = function(t, n) {
  return /* @__PURE__ */ w.createElement(Qt, gt({}, t, {
    ref: n,
    icon: Kp
  }));
}, Xd = /* @__PURE__ */ w.forwardRef(xv);
process.env.NODE_ENV !== "production" && (Xd.displayName = "ExclamationCircleFilled");
var gv = function(t, n) {
  return /* @__PURE__ */ w.createElement(Qt, gt({}, t, {
    ref: n,
    icon: Zp
  }));
}, Kd = /* @__PURE__ */ w.forwardRef(gv);
process.env.NODE_ENV !== "production" && (Kd.displayName = "InfoCircleFilled");
var mv = `accept acceptCharset accessKey action allowFullScreen allowTransparency
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
    summary tabIndex target title type useMap value width wmode wrap`, vv = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, bv = "".concat(mv, " ").concat(vv).split(/[\s\n]+/), yv = "aria-", Sv = "data-";
function Ul(e, t) {
  return e.indexOf(t) === 0;
}
function Cv(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n;
  t === !1 ? n = {
    aria: !0,
    data: !0,
    attr: !0
  } : t === !0 ? n = {
    aria: !0
  } : n = J({}, t);
  var r = {};
  return Object.keys(e).forEach(function(o) {
    // Aria
    (n.aria && (o === "role" || Ul(o, yv)) || // Data
    n.data && Ul(o, Sv) || // Attr
    n.attr && bv.includes(o)) && (r[o] = e[o]);
  }), r;
}
function wv(e) {
  return e && /* @__PURE__ */ q.isValidElement(e) && e.type === q.Fragment;
}
const Zd = (e, t, n) => /* @__PURE__ */ q.isValidElement(e) ? /* @__PURE__ */ q.cloneElement(e, typeof n == "function" ? n(e.props || {}) : n) : t;
function xc(e, t) {
  return Zd(e, e, t);
}
const go = (e, t, n, r, o) => ({
  background: e,
  border: `${Kt(r.lineWidth)} ${r.lineType} ${t}`,
  [`${o}-icon`]: {
    color: n
  }
}), Ev = (e) => {
  const {
    componentCls: t,
    motionDurationSlow: n,
    marginXS: r,
    marginSM: o,
    fontSize: i,
    fontSizeLG: s,
    lineHeight: a,
    borderRadiusLG: c,
    motionEaseInOutCirc: l,
    withDescriptionIconSize: u,
    colorText: d,
    colorTextHeading: f,
    withDescriptionPadding: v,
    defaultPadding: g
  } = e;
  return {
    [t]: Object.assign(Object.assign({}, Ad(e)), {
      position: "relative",
      display: "flex",
      alignItems: "center",
      padding: g,
      wordWrap: "break-word",
      borderRadius: c,
      [`&${t}-rtl`]: {
        direction: "rtl"
      },
      [`${t}-content`]: {
        flex: 1,
        minWidth: 0
      },
      [`${t}-icon`]: {
        marginInlineEnd: r,
        lineHeight: 0
      },
      "&-description": {
        display: "none",
        fontSize: i,
        lineHeight: a
      },
      "&-message": {
        color: f
      },
      [`&${t}-motion-leave`]: {
        overflow: "hidden",
        opacity: 1,
        transition: `max-height ${n} ${l}, opacity ${n} ${l},
        padding-top ${n} ${l}, padding-bottom ${n} ${l},
        margin-bottom ${n} ${l}`
      },
      [`&${t}-motion-leave-active`]: {
        maxHeight: 0,
        marginBottom: "0 !important",
        paddingTop: 0,
        paddingBottom: 0,
        opacity: 0
      }
    }),
    [`${t}-with-description`]: {
      alignItems: "flex-start",
      padding: v,
      [`${t}-icon`]: {
        marginInlineEnd: o,
        fontSize: u,
        lineHeight: 0
      },
      [`${t}-message`]: {
        display: "block",
        marginBottom: r,
        color: f,
        fontSize: s
      },
      [`${t}-description`]: {
        display: "block",
        color: d
      }
    },
    [`${t}-banner`]: {
      marginBottom: 0,
      border: "0 !important",
      borderRadius: 0
    }
  };
}, _v = (e) => {
  const {
    componentCls: t,
    colorSuccess: n,
    colorSuccessBorder: r,
    colorSuccessBg: o,
    colorWarning: i,
    colorWarningBorder: s,
    colorWarningBg: a,
    colorError: c,
    colorErrorBorder: l,
    colorErrorBg: u,
    colorInfo: d,
    colorInfoBorder: f,
    colorInfoBg: v
  } = e;
  return {
    [t]: {
      "&-success": go(o, r, n, e, t),
      "&-info": go(v, f, d, e, t),
      "&-warning": go(a, s, i, e, t),
      "&-error": Object.assign(Object.assign({}, go(u, l, c, e, t)), {
        [`${t}-description > pre`]: {
          margin: 0,
          padding: 0
        }
      })
    }
  };
}, Ov = (e) => {
  const {
    componentCls: t,
    iconCls: n,
    motionDurationMid: r,
    marginXS: o,
    fontSizeIcon: i,
    colorIcon: s,
    colorIconHover: a
  } = e;
  return {
    [t]: {
      "&-action": {
        marginInlineStart: o
      },
      [`${t}-close-icon`]: {
        marginInlineStart: o,
        padding: 0,
        overflow: "hidden",
        fontSize: i,
        lineHeight: Kt(i),
        backgroundColor: "transparent",
        border: "none",
        outline: "none",
        cursor: "pointer",
        [`${n}-close`]: {
          color: s,
          transition: `color ${r}`,
          "&:hover": {
            color: a
          }
        }
      },
      "&-close-text": {
        color: s,
        transition: `color ${r}`,
        "&:hover": {
          color: a
        }
      }
    }
  };
}, Av = (e) => ({
  withDescriptionIconSize: e.fontSizeHeading3,
  defaultPadding: `${e.paddingContentVerticalSM}px 12px`,
  withDescriptionPadding: `${e.paddingMD}px ${e.paddingContentHorizontalLG}px`
}), Tv = Ti("Alert", (e) => [Ev(e), _v(e), Ov(e)], Av);
var Gl = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Rv = {
  success: Ud,
  info: Kd,
  error: Gd,
  warning: Xd
}, Pv = (e) => {
  const {
    icon: t,
    prefixCls: n,
    type: r
  } = e, o = Rv[r] || null;
  return t ? Zd(t, /* @__PURE__ */ w.createElement("span", {
    className: `${n}-icon`
  }, t), () => ({
    className: Se(`${n}-icon`, t.props.className)
  })) : /* @__PURE__ */ w.createElement(o, {
    className: `${n}-icon`
  });
}, Iv = (e) => {
  const {
    isClosable: t,
    prefixCls: n,
    closeIcon: r,
    handleClose: o,
    ariaProps: i
  } = e, s = r === !0 || r === void 0 ? /* @__PURE__ */ w.createElement(Yd, null) : r;
  return t ? /* @__PURE__ */ w.createElement("button", Object.assign({
    type: "button",
    onClick: o,
    className: `${n}-close-icon`,
    tabIndex: 0
  }, i), s) : null;
}, gc = /* @__PURE__ */ w.forwardRef((e, t) => {
  const {
    description: n,
    prefixCls: r,
    message: o,
    banner: i,
    className: s,
    rootClassName: a,
    style: c,
    onMouseEnter: l,
    onMouseLeave: u,
    onClick: d,
    afterClose: f,
    showIcon: v,
    closable: g,
    closeText: h,
    closeIcon: x,
    action: y,
    id: S
  } = e, p = Gl(e, ["description", "prefixCls", "message", "banner", "className", "rootClassName", "style", "onMouseEnter", "onMouseLeave", "onClick", "afterClose", "showIcon", "closable", "closeText", "closeIcon", "action", "id"]), [E, b] = w.useState(!1);
  process.env.NODE_ENV !== "production" && fn("Alert").deprecated(!h, "closeText", "closable.closeIcon");
  const T = w.useRef(null);
  w.useImperativeHandle(t, () => ({
    nativeElement: T.current
  }));
  const {
    getPrefixCls: O,
    direction: k,
    closable: F,
    closeIcon: G,
    className: oe,
    style: te
  } = dc("alert"), H = O("alert", r), [X, Q, N] = Tv(H), R = (ae) => {
    var le;
    b(!0), (le = e.onClose) === null || le === void 0 || le.call(e, ae);
  }, P = w.useMemo(() => e.type !== void 0 ? e.type : i ? "warning" : "info", [e.type, i]), j = w.useMemo(() => typeof g == "object" && g.closeIcon || h ? !0 : typeof g == "boolean" ? g : x !== !1 && x !== null && x !== void 0 ? !0 : !!F, [h, x, g, F]), $ = i && v === void 0 ? !0 : v, V = Se(H, `${H}-${P}`, {
    [`${H}-with-description`]: !!n,
    [`${H}-no-icon`]: !$,
    [`${H}-banner`]: !!i,
    [`${H}-rtl`]: k === "rtl"
  }, oe, s, a, N, Q), Y = Cv(p, {
    aria: !0,
    data: !0
  }), re = w.useMemo(() => typeof g == "object" && g.closeIcon ? g.closeIcon : h || (x !== void 0 ? x : typeof F == "object" && F.closeIcon ? F.closeIcon : G), [x, g, h, G]), ee = w.useMemo(() => {
    const ae = g ?? F;
    if (typeof ae == "object") {
      const {
        closeIcon: le
      } = ae;
      return Gl(ae, ["closeIcon"]);
    }
    return {};
  }, [g, F]);
  return X(/* @__PURE__ */ w.createElement(Ri, {
    visible: !E,
    motionName: `${H}-motion`,
    motionAppear: !1,
    motionEnter: !1,
    onLeaveStart: (ae) => ({
      maxHeight: ae.offsetHeight
    }),
    onLeaveEnd: f
  }, (ae, le) => {
    let {
      className: ue,
      style: _e
    } = ae;
    return /* @__PURE__ */ w.createElement("div", Object.assign({
      id: S,
      ref: Ci(T, le),
      "data-show": !E,
      className: Se(V, ue),
      style: Object.assign(Object.assign(Object.assign({}, te), c), _e),
      onMouseEnter: l,
      onMouseLeave: u,
      onClick: d,
      role: "alert"
    }, Y), $ ? /* @__PURE__ */ w.createElement(Pv, {
      description: n,
      icon: e.icon,
      prefixCls: H,
      type: P
    }) : null, /* @__PURE__ */ w.createElement("div", {
      className: `${H}-content`
    }, o ? /* @__PURE__ */ w.createElement("div", {
      className: `${H}-message`
    }, o) : null, n ? /* @__PURE__ */ w.createElement("div", {
      className: `${H}-description`
    }, n) : null), y ? /* @__PURE__ */ w.createElement("div", {
      className: `${H}-action`
    }, y) : null, /* @__PURE__ */ w.createElement(Iv, {
      isClosable: j,
      prefixCls: H,
      closeIcon: re,
      handleClose: R,
      ariaProps: ee
    }));
  }));
});
process.env.NODE_ENV !== "production" && (gc.displayName = "Alert");
function Nv(e, t, n) {
  return t = Kn(t), jf(e, tc() ? Reflect.construct(t, n || [], Kn(e).constructor) : t.apply(e, n));
}
let kv = /* @__PURE__ */ function(e) {
  function t() {
    var n;
    return yt(this, t), n = Nv(this, t, arguments), n.state = {
      error: void 0,
      info: {
        componentStack: ""
      }
    }, n;
  }
  return cr(t, e), St(t, [{
    key: "componentDidCatch",
    value: function(r, o) {
      this.setState({
        error: r,
        info: o
      });
    }
  }, {
    key: "render",
    value: function() {
      const {
        message: r,
        description: o,
        id: i,
        children: s
      } = this.props, {
        error: a,
        info: c
      } = this.state, l = (c == null ? void 0 : c.componentStack) || null, u = typeof r > "u" ? (a || "").toString() : r, d = typeof o > "u" ? l : o;
      return a ? /* @__PURE__ */ w.createElement(gc, {
        id: i,
        type: "error",
        message: u,
        description: /* @__PURE__ */ w.createElement("pre", {
          style: {
            fontSize: "0.9em",
            overflowX: "auto"
          }
        }, d)
      }) : s;
    }
  }]);
}(w.Component);
const Jd = gc;
Jd.ErrorBoundary = kv;
var jv = function(t, n) {
  return /* @__PURE__ */ w.createElement(Qt, gt({}, t, {
    ref: n,
    icon: Jp
  }));
}, Qd = /* @__PURE__ */ w.forwardRef(jv);
process.env.NODE_ENV !== "production" && (Qd.displayName = "LoadingOutlined");
function zr() {
  zr = function() {
    return t;
  };
  var e, t = {}, n = Object.prototype, r = n.hasOwnProperty, o = Object.defineProperty || function(N, R, P) {
    N[R] = P.value;
  }, i = typeof Symbol == "function" ? Symbol : {}, s = i.iterator || "@@iterator", a = i.asyncIterator || "@@asyncIterator", c = i.toStringTag || "@@toStringTag";
  function l(N, R, P) {
    return Object.defineProperty(N, R, {
      value: P,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), N[R];
  }
  try {
    l({}, "");
  } catch {
    l = function(P, j, $) {
      return P[j] = $;
    };
  }
  function u(N, R, P, j) {
    var $ = R && R.prototype instanceof y ? R : y, V = Object.create($.prototype), Y = new X(j || []);
    return o(V, "_invoke", {
      value: G(N, P, Y)
    }), V;
  }
  function d(N, R, P) {
    try {
      return {
        type: "normal",
        arg: N.call(R, P)
      };
    } catch (j) {
      return {
        type: "throw",
        arg: j
      };
    }
  }
  t.wrap = u;
  var f = "suspendedStart", v = "suspendedYield", g = "executing", h = "completed", x = {};
  function y() {
  }
  function S() {
  }
  function p() {
  }
  var E = {};
  l(E, s, function() {
    return this;
  });
  var b = Object.getPrototypeOf, T = b && b(b(Q([])));
  T && T !== n && r.call(T, s) && (E = T);
  var O = p.prototype = y.prototype = Object.create(E);
  function k(N) {
    ["next", "throw", "return"].forEach(function(R) {
      l(N, R, function(P) {
        return this._invoke(R, P);
      });
    });
  }
  function F(N, R) {
    function P($, V, Y, re) {
      var ee = d(N[$], N, V);
      if (ee.type !== "throw") {
        var ae = ee.arg, le = ae.value;
        return le && Ce(le) == "object" && r.call(le, "__await") ? R.resolve(le.__await).then(function(ue) {
          P("next", ue, Y, re);
        }, function(ue) {
          P("throw", ue, Y, re);
        }) : R.resolve(le).then(function(ue) {
          ae.value = ue, Y(ae);
        }, function(ue) {
          return P("throw", ue, Y, re);
        });
      }
      re(ee.arg);
    }
    var j;
    o(this, "_invoke", {
      value: function(V, Y) {
        function re() {
          return new R(function(ee, ae) {
            P(V, Y, ee, ae);
          });
        }
        return j = j ? j.then(re, re) : re();
      }
    });
  }
  function G(N, R, P) {
    var j = f;
    return function($, V) {
      if (j === g) throw Error("Generator is already running");
      if (j === h) {
        if ($ === "throw") throw V;
        return {
          value: e,
          done: !0
        };
      }
      for (P.method = $, P.arg = V; ; ) {
        var Y = P.delegate;
        if (Y) {
          var re = oe(Y, P);
          if (re) {
            if (re === x) continue;
            return re;
          }
        }
        if (P.method === "next") P.sent = P._sent = P.arg;
        else if (P.method === "throw") {
          if (j === f) throw j = h, P.arg;
          P.dispatchException(P.arg);
        } else P.method === "return" && P.abrupt("return", P.arg);
        j = g;
        var ee = d(N, R, P);
        if (ee.type === "normal") {
          if (j = P.done ? h : v, ee.arg === x) continue;
          return {
            value: ee.arg,
            done: P.done
          };
        }
        ee.type === "throw" && (j = h, P.method = "throw", P.arg = ee.arg);
      }
    };
  }
  function oe(N, R) {
    var P = R.method, j = N.iterator[P];
    if (j === e) return R.delegate = null, P === "throw" && N.iterator.return && (R.method = "return", R.arg = e, oe(N, R), R.method === "throw") || P !== "return" && (R.method = "throw", R.arg = new TypeError("The iterator does not provide a '" + P + "' method")), x;
    var $ = d(j, N.iterator, R.arg);
    if ($.type === "throw") return R.method = "throw", R.arg = $.arg, R.delegate = null, x;
    var V = $.arg;
    return V ? V.done ? (R[N.resultName] = V.value, R.next = N.nextLoc, R.method !== "return" && (R.method = "next", R.arg = e), R.delegate = null, x) : V : (R.method = "throw", R.arg = new TypeError("iterator result is not an object"), R.delegate = null, x);
  }
  function te(N) {
    var R = {
      tryLoc: N[0]
    };
    1 in N && (R.catchLoc = N[1]), 2 in N && (R.finallyLoc = N[2], R.afterLoc = N[3]), this.tryEntries.push(R);
  }
  function H(N) {
    var R = N.completion || {};
    R.type = "normal", delete R.arg, N.completion = R;
  }
  function X(N) {
    this.tryEntries = [{
      tryLoc: "root"
    }], N.forEach(te, this), this.reset(!0);
  }
  function Q(N) {
    if (N || N === "") {
      var R = N[s];
      if (R) return R.call(N);
      if (typeof N.next == "function") return N;
      if (!isNaN(N.length)) {
        var P = -1, j = function $() {
          for (; ++P < N.length; ) if (r.call(N, P)) return $.value = N[P], $.done = !1, $;
          return $.value = e, $.done = !0, $;
        };
        return j.next = j;
      }
    }
    throw new TypeError(Ce(N) + " is not iterable");
  }
  return S.prototype = p, o(O, "constructor", {
    value: p,
    configurable: !0
  }), o(p, "constructor", {
    value: S,
    configurable: !0
  }), S.displayName = l(p, c, "GeneratorFunction"), t.isGeneratorFunction = function(N) {
    var R = typeof N == "function" && N.constructor;
    return !!R && (R === S || (R.displayName || R.name) === "GeneratorFunction");
  }, t.mark = function(N) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(N, p) : (N.__proto__ = p, l(N, c, "GeneratorFunction")), N.prototype = Object.create(O), N;
  }, t.awrap = function(N) {
    return {
      __await: N
    };
  }, k(F.prototype), l(F.prototype, a, function() {
    return this;
  }), t.AsyncIterator = F, t.async = function(N, R, P, j, $) {
    $ === void 0 && ($ = Promise);
    var V = new F(u(N, R, P, j), $);
    return t.isGeneratorFunction(R) ? V : V.next().then(function(Y) {
      return Y.done ? Y.value : V.next();
    });
  }, k(O), l(O, c, "Generator"), l(O, s, function() {
    return this;
  }), l(O, "toString", function() {
    return "[object Generator]";
  }), t.keys = function(N) {
    var R = Object(N), P = [];
    for (var j in R) P.push(j);
    return P.reverse(), function $() {
      for (; P.length; ) {
        var V = P.pop();
        if (V in R) return $.value = V, $.done = !1, $;
      }
      return $.done = !0, $;
    };
  }, t.values = Q, X.prototype = {
    constructor: X,
    reset: function(R) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(H), !R) for (var P in this) P.charAt(0) === "t" && r.call(this, P) && !isNaN(+P.slice(1)) && (this[P] = e);
    },
    stop: function() {
      this.done = !0;
      var R = this.tryEntries[0].completion;
      if (R.type === "throw") throw R.arg;
      return this.rval;
    },
    dispatchException: function(R) {
      if (this.done) throw R;
      var P = this;
      function j(ae, le) {
        return Y.type = "throw", Y.arg = R, P.next = ae, le && (P.method = "next", P.arg = e), !!le;
      }
      for (var $ = this.tryEntries.length - 1; $ >= 0; --$) {
        var V = this.tryEntries[$], Y = V.completion;
        if (V.tryLoc === "root") return j("end");
        if (V.tryLoc <= this.prev) {
          var re = r.call(V, "catchLoc"), ee = r.call(V, "finallyLoc");
          if (re && ee) {
            if (this.prev < V.catchLoc) return j(V.catchLoc, !0);
            if (this.prev < V.finallyLoc) return j(V.finallyLoc);
          } else if (re) {
            if (this.prev < V.catchLoc) return j(V.catchLoc, !0);
          } else {
            if (!ee) throw Error("try statement without catch or finally");
            if (this.prev < V.finallyLoc) return j(V.finallyLoc);
          }
        }
      }
    },
    abrupt: function(R, P) {
      for (var j = this.tryEntries.length - 1; j >= 0; --j) {
        var $ = this.tryEntries[j];
        if ($.tryLoc <= this.prev && r.call($, "finallyLoc") && this.prev < $.finallyLoc) {
          var V = $;
          break;
        }
      }
      V && (R === "break" || R === "continue") && V.tryLoc <= P && P <= V.finallyLoc && (V = null);
      var Y = V ? V.completion : {};
      return Y.type = R, Y.arg = P, V ? (this.method = "next", this.next = V.finallyLoc, x) : this.complete(Y);
    },
    complete: function(R, P) {
      if (R.type === "throw") throw R.arg;
      return R.type === "break" || R.type === "continue" ? this.next = R.arg : R.type === "return" ? (this.rval = this.arg = R.arg, this.method = "return", this.next = "end") : R.type === "normal" && P && (this.next = P), x;
    },
    finish: function(R) {
      for (var P = this.tryEntries.length - 1; P >= 0; --P) {
        var j = this.tryEntries[P];
        if (j.finallyLoc === R) return this.complete(j.completion, j.afterLoc), H(j), x;
      }
    },
    catch: function(R) {
      for (var P = this.tryEntries.length - 1; P >= 0; --P) {
        var j = this.tryEntries[P];
        if (j.tryLoc === R) {
          var $ = j.completion;
          if ($.type === "throw") {
            var V = $.arg;
            H(j);
          }
          return V;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function(R, P, j) {
      return this.delegate = {
        iterator: Q(R),
        resultName: P,
        nextLoc: j
      }, this.method === "next" && (this.arg = e), x;
    }
  }, t;
}
function Yl(e, t, n, r, o, i, s) {
  try {
    var a = e[i](s), c = a.value;
  } catch (l) {
    return void n(l);
  }
  a.done ? t(c) : Promise.resolve(c).then(r, o);
}
function e0(e) {
  return function() {
    var t = this, n = arguments;
    return new Promise(function(r, o) {
      var i = e.apply(t, n);
      function s(c) {
        Yl(i, r, o, s, a, "next", c);
      }
      function a(c) {
        Yl(i, r, o, s, a, "throw", c);
      }
      s(void 0);
    });
  };
}
var Gr = J({}, Ru), Lv = Gr.version, gs = Gr.render, Mv = Gr.unmountComponentAtNode, Pi;
try {
  var Dv = Number((Lv || "").split(".")[0]);
  Dv >= 18 && (Pi = Gr.createRoot);
} catch {
}
function Xl(e) {
  var t = Gr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && Ce(t) === "object" && (t.usingClientEntryPoint = e);
}
var Xo = "__rc_react_root__";
function Bv(e, t) {
  Xl(!0);
  var n = t[Xo] || Pi(t);
  Xl(!1), n.render(e), t[Xo] = n;
}
function zv(e, t) {
  gs == null || gs(e, t);
}
function Hv(e, t) {
  if (Pi) {
    Bv(e, t);
    return;
  }
  zv(e, t);
}
function Fv(e) {
  return Oa.apply(this, arguments);
}
function Oa() {
  return Oa = e0(/* @__PURE__ */ zr().mark(function e(t) {
    return zr().wrap(function(r) {
      for (; ; ) switch (r.prev = r.next) {
        case 0:
          return r.abrupt("return", Promise.resolve().then(function() {
            var o;
            (o = t[Xo]) === null || o === void 0 || o.unmount(), delete t[Xo];
          }));
        case 1:
        case "end":
          return r.stop();
      }
    }, e);
  })), Oa.apply(this, arguments);
}
function $v(e) {
  Mv(e);
}
function Vv(e) {
  return Aa.apply(this, arguments);
}
function Aa() {
  return Aa = e0(/* @__PURE__ */ zr().mark(function e(t) {
    return zr().wrap(function(r) {
      for (; ; ) switch (r.prev = r.next) {
        case 0:
          if (Pi === void 0) {
            r.next = 2;
            break;
          }
          return r.abrupt("return", Fv(t));
        case 2:
          $v(t);
        case 3:
        case "end":
          return r.stop();
      }
    }, e);
  })), Aa.apply(this, arguments);
}
const Wv = (e, t) => {
  if (process.env.NODE_ENV !== "production") {
    const n = parseInt(w.version.split(".")[0], 10), r = Object.keys(Ru);
    process.env.NODE_ENV !== "production" && qr(n < 19 || r.includes("createRoot"), "compatible", "antd v5 support React is 16 ~ 18. see https://u.ant.design/v5-for-19 for compatible.");
  }
  return Hv(e, t), () => Vv(t);
};
let qv = Wv;
function Uv() {
  return qv;
}
function t0(e, t) {
  var n = Object.assign({}, e);
  return Array.isArray(t) && t.forEach(function(r) {
    delete n[r];
  }), n;
}
const Gv = function(e) {
  if (!e)
    return !1;
  if (e instanceof Element) {
    if (e.offsetParent)
      return !0;
    if (e.getBBox) {
      var t = e.getBBox(), n = t.width, r = t.height;
      if (n || r)
        return !0;
    }
    if (e.getBoundingClientRect) {
      var o = e.getBoundingClientRect(), i = o.width, s = o.height;
      if (i || s)
        return !0;
    }
  }
  return !1;
}, Yv = (e) => {
  const {
    componentCls: t,
    colorPrimary: n
  } = e;
  return {
    [t]: {
      position: "absolute",
      background: "transparent",
      pointerEvents: "none",
      boxSizing: "border-box",
      color: `var(--wave-color, ${n})`,
      boxShadow: "0 0 0 0 currentcolor",
      opacity: 0.2,
      // =================== Motion ===================
      "&.wave-motion-appear": {
        transition: [`box-shadow 0.4s ${e.motionEaseOutCirc}`, `opacity 2s ${e.motionEaseOutCirc}`].join(","),
        "&-active": {
          boxShadow: "0 0 0 6px currentcolor",
          opacity: 0
        },
        "&.wave-quick": {
          transition: [`box-shadow ${e.motionDurationSlow} ${e.motionEaseInOut}`, `opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`].join(",")
        }
      }
    }
  };
}, Xv = b1("Wave", (e) => [Yv(e)]), n0 = `${Go}-wave-target`;
function ms(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
  e !== "transparent";
}
function Kv(e) {
  const {
    borderTopColor: t,
    borderColor: n,
    backgroundColor: r
  } = getComputedStyle(e);
  return ms(t) ? t : ms(n) ? n : ms(r) ? r : null;
}
function vs(e) {
  return Number.isNaN(e) ? 0 : e;
}
const Zv = (e) => {
  const {
    className: t,
    target: n,
    component: r,
    registerUnmount: o
  } = e, i = w.useRef(null), s = w.useRef(null);
  w.useEffect(() => {
    s.current = o();
  }, []);
  const [a, c] = w.useState(null), [l, u] = w.useState([]), [d, f] = w.useState(0), [v, g] = w.useState(0), [h, x] = w.useState(0), [y, S] = w.useState(0), [p, E] = w.useState(!1), b = {
    left: d,
    top: v,
    width: h,
    height: y,
    borderRadius: l.map((k) => `${k}px`).join(" ")
  };
  a && (b["--wave-color"] = a);
  function T() {
    const k = getComputedStyle(n);
    c(Kv(n));
    const F = k.position === "static", {
      borderLeftWidth: G,
      borderTopWidth: oe
    } = k;
    f(F ? n.offsetLeft : vs(-parseFloat(G))), g(F ? n.offsetTop : vs(-parseFloat(oe))), x(n.offsetWidth), S(n.offsetHeight);
    const {
      borderTopLeftRadius: te,
      borderTopRightRadius: H,
      borderBottomLeftRadius: X,
      borderBottomRightRadius: Q
    } = k;
    u([te, H, Q, X].map((N) => vs(parseFloat(N))));
  }
  if (w.useEffect(() => {
    if (n) {
      const k = cn(() => {
        T(), E(!0);
      });
      let F;
      return typeof ResizeObserver < "u" && (F = new ResizeObserver(T), F.observe(n)), () => {
        cn.cancel(k), F == null || F.disconnect();
      };
    }
  }, []), !p)
    return null;
  const O = (r === "Checkbox" || r === "Radio") && (n == null ? void 0 : n.classList.contains(n0));
  return /* @__PURE__ */ w.createElement(Ri, {
    visible: !0,
    motionAppear: !0,
    motionName: "wave-motion",
    motionDeadline: 5e3,
    onAppearEnd: (k, F) => {
      var G, oe;
      if (F.deadline || F.propertyName === "opacity") {
        const te = (G = i.current) === null || G === void 0 ? void 0 : G.parentElement;
        (oe = s.current) === null || oe === void 0 || oe.call(s).then(() => {
          te == null || te.remove();
        });
      }
      return !1;
    }
  }, (k, F) => {
    let {
      className: G
    } = k;
    return /* @__PURE__ */ w.createElement("div", {
      ref: Ci(i, F),
      className: Se(t, G, {
        "wave-quick": O
      }),
      style: b
    });
  });
}, Jv = (e, t) => {
  var n;
  const {
    component: r
  } = t;
  if (r === "Checkbox" && !(!((n = e.querySelector("input")) === null || n === void 0) && n.checked))
    return;
  const o = document.createElement("div");
  o.style.position = "absolute", o.style.left = "0px", o.style.top = "0px", e == null || e.insertBefore(o, e == null ? void 0 : e.firstChild);
  const i = Uv();
  let s = null;
  function a() {
    return s;
  }
  s = i(/* @__PURE__ */ w.createElement(Zv, Object.assign({}, t, {
    target: e,
    registerUnmount: a
  })), o);
}, Qv = (e, t, n) => {
  const {
    wave: r
  } = w.useContext(kt), [, o, i] = Ur(), s = ln((l) => {
    const u = e.current;
    if (r != null && r.disabled || !u)
      return;
    const d = u.querySelector(`.${n0}`) || u, {
      showEffect: f
    } = r || {};
    (f || Jv)(d, {
      className: t,
      token: o,
      component: n,
      event: l,
      hashId: i
    });
  }), a = w.useRef(null);
  return (l) => {
    cn.cancel(a.current), a.current = cn(() => {
      s(l);
    });
  };
}, r0 = (e) => {
  const {
    children: t,
    disabled: n,
    component: r
  } = e, {
    getPrefixCls: o
  } = _t(kt), i = Ee(null), s = o("wave"), [, a] = Xv(s), c = Qv(i, Se(s, a), r);
  if (q.useEffect(() => {
    const u = i.current;
    if (!u || u.nodeType !== 1 || n)
      return;
    const d = (f) => {
      !Gv(f.target) || // No need wave
      !u.getAttribute || u.getAttribute("disabled") || u.disabled || u.className.includes("disabled") || u.className.includes("-leave") || c(f);
    };
    return u.addEventListener("click", d, !0), () => {
      u.removeEventListener("click", d, !0);
    };
  }, [n]), !/* @__PURE__ */ q.isValidElement(t))
    return t ?? null;
  const l = If(t) ? Ci(kf(t), i) : i;
  return xc(t, {
    ref: l
  });
};
process.env.NODE_ENV !== "production" && (r0.displayName = "Wave");
const eb = (e) => {
  const t = q.useContext(er);
  return q.useMemo(() => e ? typeof e == "string" ? e ?? t : typeof e == "function" ? e(t) : t : t, [e, t]);
}, tb = /* @__PURE__ */ w.createContext(null), nb = (e, t) => {
  const n = w.useContext(tb), r = w.useMemo(() => {
    if (!n)
      return "";
    const {
      compactDirection: o,
      isFirstItem: i,
      isLastItem: s
    } = n, a = o === "vertical" ? "-vertical-" : "-";
    return Se(`${e}-compact${a}item`, {
      [`${e}-compact${a}first-item`]: i,
      [`${e}-compact${a}last-item`]: s,
      [`${e}-compact${a}item-rtl`]: t === "rtl"
    });
  }, [e, t, n]);
  return {
    compactSize: n == null ? void 0 : n.compactSize,
    compactDirection: n == null ? void 0 : n.compactDirection,
    compactItemClassnames: r
  };
};
var rb = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const o0 = /* @__PURE__ */ w.createContext(void 0), ob = (e) => {
  const {
    getPrefixCls: t,
    direction: n
  } = w.useContext(kt), {
    prefixCls: r,
    size: o,
    className: i
  } = e, s = rb(e, ["prefixCls", "size", "className"]), a = t("btn-group", r), [, , c] = Ur(), l = w.useMemo(() => {
    switch (o) {
      case "large":
        return "lg";
      case "small":
        return "sm";
      default:
        return "";
    }
  }, [o]);
  if (process.env.NODE_ENV !== "production") {
    const d = fn("Button.Group");
    d.deprecated(!1, "Button.Group", "Space.Compact"), process.env.NODE_ENV !== "production" && d(!o || ["large", "small", "middle"].includes(o), "usage", "Invalid prop `size`.");
  }
  const u = Se(a, {
    [`${a}-${l}`]: l,
    [`${a}-rtl`]: n === "rtl"
  }, i, c);
  return /* @__PURE__ */ w.createElement(o0.Provider, {
    value: o
  }, /* @__PURE__ */ w.createElement("div", Object.assign({}, s, {
    className: u
  })));
}, Kl = /^[\u4E00-\u9FA5]{2}$/, Ta = Kl.test.bind(Kl);
function Zl(e) {
  return typeof e == "string";
}
function mo(e) {
  return e === "text" || e === "link";
}
function ib(e, t) {
  if (e == null)
    return;
  const n = t ? " " : "";
  return typeof e != "string" && typeof e != "number" && Zl(e.type) && Ta(e.props.children) ? xc(e, {
    children: e.props.children.split("").join(n)
  }) : Zl(e) ? Ta(e) ? /* @__PURE__ */ q.createElement("span", null, e.split("").join(n)) : /* @__PURE__ */ q.createElement("span", null, e) : wv(e) ? /* @__PURE__ */ q.createElement("span", null, e) : e;
}
function sb(e, t) {
  let n = !1;
  const r = [];
  return q.Children.forEach(e, (o) => {
    const i = typeof o, s = i === "string" || i === "number";
    if (n && s) {
      const a = r.length - 1, c = r[a];
      r[a] = `${c}${o}`;
    } else
      r.push(o);
    n = s;
  }), q.Children.map(r, (o) => ib(o, t));
}
["default", "primary", "danger"].concat(Ft(hc));
const Ra = /* @__PURE__ */ rr((e, t) => {
  const {
    className: n,
    style: r,
    children: o,
    prefixCls: i
  } = e, s = Se(`${i}-icon`, n);
  return /* @__PURE__ */ q.createElement("span", {
    ref: t,
    className: s,
    style: r
  }, o);
}), Jl = /* @__PURE__ */ rr((e, t) => {
  const {
    prefixCls: n,
    className: r,
    style: o,
    iconClassName: i
  } = e, s = Se(`${n}-loading-icon`, r);
  return /* @__PURE__ */ q.createElement(Ra, {
    prefixCls: n,
    className: s,
    style: o,
    ref: t
  }, /* @__PURE__ */ q.createElement(Qd, {
    className: i
  }));
}), bs = () => ({
  width: 0,
  opacity: 0,
  transform: "scale(0)"
}), ys = (e) => ({
  width: e.scrollWidth,
  opacity: 1,
  transform: "scale(1)"
}), ab = (e) => {
  const {
    prefixCls: t,
    loading: n,
    existIcon: r,
    className: o,
    style: i,
    mount: s
  } = e, a = !!n;
  return r ? /* @__PURE__ */ q.createElement(Jl, {
    prefixCls: t,
    className: o,
    style: i
  }) : /* @__PURE__ */ q.createElement(Ri, {
    visible: a,
    // Used for minus flex gap style only
    motionName: `${t}-loading-icon-motion`,
    motionAppear: !s,
    motionEnter: !s,
    motionLeave: !s,
    removeOnLeave: !0,
    onAppearStart: bs,
    onAppearActive: ys,
    onEnterStart: bs,
    onEnterActive: ys,
    onLeaveStart: ys,
    onLeaveActive: bs
  }, (c, l) => {
    let {
      className: u,
      style: d
    } = c;
    const f = Object.assign(Object.assign({}, i), d);
    return /* @__PURE__ */ q.createElement(Jl, {
      prefixCls: t,
      className: Se(o, u),
      style: f,
      ref: l
    });
  });
}, Ql = (e, t) => ({
  // Border
  [`> span, > ${e}`]: {
    "&:not(:last-child)": {
      [`&, & > ${e}`]: {
        "&:not(:disabled)": {
          borderInlineEndColor: t
        }
      }
    },
    "&:not(:first-child)": {
      [`&, & > ${e}`]: {
        "&:not(:disabled)": {
          borderInlineStartColor: t
        }
      }
    }
  }
}), cb = (e) => {
  const {
    componentCls: t,
    fontSize: n,
    lineWidth: r,
    groupBorderColor: o,
    colorErrorHover: i
  } = e;
  return {
    [`${t}-group`]: [
      {
        position: "relative",
        display: "inline-flex",
        // Border
        [`> span, > ${t}`]: {
          "&:not(:last-child)": {
            [`&, & > ${t}`]: {
              borderStartEndRadius: 0,
              borderEndEndRadius: 0
            }
          },
          "&:not(:first-child)": {
            marginInlineStart: e.calc(r).mul(-1).equal(),
            [`&, & > ${t}`]: {
              borderStartStartRadius: 0,
              borderEndStartRadius: 0
            }
          }
        },
        [t]: {
          position: "relative",
          zIndex: 1,
          "&:hover, &:focus, &:active": {
            zIndex: 2
          },
          "&[disabled]": {
            zIndex: 0
          }
        },
        [`${t}-icon-only`]: {
          fontSize: n
        }
      },
      // Border Color
      Ql(`${t}-primary`, o),
      Ql(`${t}-danger`, i)
    ]
  };
}, it = Math.round;
function Ss(e, t) {
  const n = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], r = n.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    r[o] = t(r[o] || 0, n[o] || "", o);
  return n[3] ? r[3] = n[3].includes("%") ? r[3] / 100 : r[3] : r[3] = 1, r;
}
const eu = (e, t, n) => n === 0 ? e : e / 100;
function Cr(e, t) {
  const n = t || 255;
  return e > n ? n : e < 0 ? 0 : e;
}
class Ii {
  constructor(t) {
    U(this, "isValid", !0), U(this, "r", 0), U(this, "g", 0), U(this, "b", 0), U(this, "a", 1), U(this, "_h", void 0), U(this, "_s", void 0), U(this, "_l", void 0), U(this, "_v", void 0), U(this, "_max", void 0), U(this, "_min", void 0), U(this, "_brightness", void 0);
    function n(r) {
      return r[0] in t && r[1] in t && r[2] in t;
    }
    if (t) if (typeof t == "string") {
      let o = function(i) {
        return r.startsWith(i);
      };
      const r = t.trim();
      /^#?[A-F\d]{3,8}$/i.test(r) ? this.fromHexString(r) : o("rgb") ? this.fromRgbString(r) : o("hsl") ? this.fromHslString(r) : (o("hsv") || o("hsb")) && this.fromHsvString(r);
    } else if (t instanceof Ii)
      this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this._h = t._h, this._s = t._s, this._l = t._l, this._v = t._v;
    else if (n("rgb"))
      this.r = Cr(t.r), this.g = Cr(t.g), this.b = Cr(t.b), this.a = typeof t.a == "number" ? Cr(t.a, 1) : 1;
    else if (n("hsl"))
      this.fromHsl(t);
    else if (n("hsv"))
      this.fromHsv(t);
    else
      throw new Error("@ant-design/fast-color: unsupported input " + JSON.stringify(t));
  }
  // ======================= Setter =======================
  setR(t) {
    return this._sc("r", t);
  }
  setG(t) {
    return this._sc("g", t);
  }
  setB(t) {
    return this._sc("b", t);
  }
  setA(t) {
    return this._sc("a", t, 1);
  }
  setHue(t) {
    const n = this.toHsv();
    return n.h = t, this._c(n);
  }
  // ======================= Getter =======================
  /**
   * Returns the perceived luminance of a color, from 0-1.
   * @see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
   */
  getLuminance() {
    function t(i) {
      const s = i / 255;
      return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
    }
    const n = t(this.r), r = t(this.g), o = t(this.b);
    return 0.2126 * n + 0.7152 * r + 0.0722 * o;
  }
  getHue() {
    if (typeof this._h > "u") {
      const t = this.getMax() - this.getMin();
      t === 0 ? this._h = 0 : this._h = it(60 * (this.r === this.getMax() ? (this.g - this.b) / t + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / t + 2 : (this.r - this.g) / t + 4));
    }
    return this._h;
  }
  getSaturation() {
    if (typeof this._s > "u") {
      const t = this.getMax() - this.getMin();
      t === 0 ? this._s = 0 : this._s = t / this.getMax();
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
  darken(t = 10) {
    const n = this.getHue(), r = this.getSaturation();
    let o = this.getLightness() - t / 100;
    return o < 0 && (o = 0), this._c({
      h: n,
      s: r,
      l: o,
      a: this.a
    });
  }
  lighten(t = 10) {
    const n = this.getHue(), r = this.getSaturation();
    let o = this.getLightness() + t / 100;
    return o > 1 && (o = 1), this._c({
      h: n,
      s: r,
      l: o,
      a: this.a
    });
  }
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  mix(t, n = 50) {
    const r = this._c(t), o = n / 100, i = (a) => (r[a] - this[a]) * o + this[a], s = {
      r: it(i("r")),
      g: it(i("g")),
      b: it(i("b")),
      a: it(i("a") * 100) / 100
    };
    return this._c(s);
  }
  /**
   * Mix the color with pure white, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return white.
   */
  tint(t = 10) {
    return this.mix({
      r: 255,
      g: 255,
      b: 255,
      a: 1
    }, t);
  }
  /**
   * Mix the color with pure black, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return black.
   */
  shade(t = 10) {
    return this.mix({
      r: 0,
      g: 0,
      b: 0,
      a: 1
    }, t);
  }
  onBackground(t) {
    const n = this._c(t), r = this.a + n.a * (1 - this.a), o = (i) => it((this[i] * this.a + n[i] * n.a * (1 - this.a)) / r);
    return this._c({
      r: o("r"),
      g: o("g"),
      b: o("b"),
      a: r
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
  equals(t) {
    return this.r === t.r && this.g === t.g && this.b === t.b && this.a === t.a;
  }
  clone() {
    return this._c(this);
  }
  // ======================= Format =======================
  toHexString() {
    let t = "#";
    const n = (this.r || 0).toString(16);
    t += n.length === 2 ? n : "0" + n;
    const r = (this.g || 0).toString(16);
    t += r.length === 2 ? r : "0" + r;
    const o = (this.b || 0).toString(16);
    if (t += o.length === 2 ? o : "0" + o, typeof this.a == "number" && this.a >= 0 && this.a < 1) {
      const i = it(this.a * 255).toString(16);
      t += i.length === 2 ? i : "0" + i;
    }
    return t;
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
    const t = this.getHue(), n = it(this.getSaturation() * 100), r = it(this.getLightness() * 100);
    return this.a !== 1 ? `hsla(${t},${n}%,${r}%,${this.a})` : `hsl(${t},${n}%,${r}%)`;
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
  _sc(t, n, r) {
    const o = this.clone();
    return o[t] = Cr(n, r), o;
  }
  _c(t) {
    return new this.constructor(t);
  }
  getMax() {
    return typeof this._max > "u" && (this._max = Math.max(this.r, this.g, this.b)), this._max;
  }
  getMin() {
    return typeof this._min > "u" && (this._min = Math.min(this.r, this.g, this.b)), this._min;
  }
  fromHexString(t) {
    const n = t.replace("#", "");
    function r(o, i) {
      return parseInt(n[o] + n[i || o], 16);
    }
    n.length < 6 ? (this.r = r(0), this.g = r(1), this.b = r(2), this.a = n[3] ? r(3) / 255 : 1) : (this.r = r(0, 1), this.g = r(2, 3), this.b = r(4, 5), this.a = n[6] ? r(6, 7) / 255 : 1);
  }
  fromHsl({
    h: t,
    s: n,
    l: r,
    a: o
  }) {
    if (this._h = t % 360, this._s = n, this._l = r, this.a = typeof o == "number" ? o : 1, n <= 0) {
      const f = it(r * 255);
      this.r = f, this.g = f, this.b = f;
    }
    let i = 0, s = 0, a = 0;
    const c = t / 60, l = (1 - Math.abs(2 * r - 1)) * n, u = l * (1 - Math.abs(c % 2 - 1));
    c >= 0 && c < 1 ? (i = l, s = u) : c >= 1 && c < 2 ? (i = u, s = l) : c >= 2 && c < 3 ? (s = l, a = u) : c >= 3 && c < 4 ? (s = u, a = l) : c >= 4 && c < 5 ? (i = u, a = l) : c >= 5 && c < 6 && (i = l, a = u);
    const d = r - l / 2;
    this.r = it((i + d) * 255), this.g = it((s + d) * 255), this.b = it((a + d) * 255);
  }
  fromHsv({
    h: t,
    s: n,
    v: r,
    a: o
  }) {
    this._h = t % 360, this._s = n, this._v = r, this.a = typeof o == "number" ? o : 1;
    const i = it(r * 255);
    if (this.r = i, this.g = i, this.b = i, n <= 0)
      return;
    const s = t / 60, a = Math.floor(s), c = s - a, l = it(r * (1 - n) * 255), u = it(r * (1 - n * c) * 255), d = it(r * (1 - n * (1 - c)) * 255);
    switch (a) {
      case 0:
        this.g = d, this.b = l;
        break;
      case 1:
        this.r = u, this.b = l;
        break;
      case 2:
        this.r = l, this.b = d;
        break;
      case 3:
        this.r = l, this.g = u;
        break;
      case 4:
        this.r = d, this.g = l;
        break;
      case 5:
      default:
        this.g = l, this.b = u;
        break;
    }
  }
  fromHsvString(t) {
    const n = Ss(t, eu);
    this.fromHsv({
      h: n[0],
      s: n[1],
      v: n[2],
      a: n[3]
    });
  }
  fromHslString(t) {
    const n = Ss(t, eu);
    this.fromHsl({
      h: n[0],
      s: n[1],
      l: n[2],
      a: n[3]
    });
  }
  fromRgbString(t) {
    const n = Ss(t, (r, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? it(r / 100 * 255) : r
    ));
    this.r = n[0], this.g = n[1], this.b = n[2], this.a = n[3];
  }
}
var lb = ["b"], ub = ["v"], Cs = function(t) {
  return Math.round(Number(t || 0));
}, fb = function(t) {
  if (t instanceof Ii)
    return t;
  if (t && Ce(t) === "object" && "h" in t && "b" in t) {
    var n = t, r = n.b, o = Pn(n, lb);
    return J(J({}, o), {}, {
      v: r
    });
  }
  return typeof t == "string" && /hsb/.test(t) ? t.replace(/hsb/, "hsv") : t;
}, Zt = /* @__PURE__ */ function(e) {
  cr(n, e);
  var t = Vr(n);
  function n(r) {
    return yt(this, n), t.call(this, fb(r));
  }
  return St(n, [{
    key: "toHsbString",
    value: function() {
      var o = this.toHsb(), i = Cs(o.s * 100), s = Cs(o.b * 100), a = Cs(o.h), c = o.a, l = "hsb(".concat(a, ", ").concat(i, "%, ").concat(s, "%)"), u = "hsba(".concat(a, ", ").concat(i, "%, ").concat(s, "%, ").concat(c.toFixed(c === 0 ? 0 : 2), ")");
      return c === 1 ? l : u;
    }
  }, {
    key: "toHsb",
    value: function() {
      var o = this.toHsv(), i = o.v, s = Pn(o, ub);
      return J(J({}, s), {}, {
        b: i,
        a: this.a
      });
    }
  }]), n;
}(Ii), db = "rc-color-picker", $n = function(t) {
  return t instanceof Zt ? t : new Zt(t);
}, hb = $n("#1677ff"), i0 = function(t) {
  var n = t.offset, r = t.targetRef, o = t.containerRef, i = t.color, s = t.type, a = o.current.getBoundingClientRect(), c = a.width, l = a.height, u = r.current.getBoundingClientRect(), d = u.width, f = u.height, v = d / 2, g = f / 2, h = (n.x + v) / c, x = 1 - (n.y + g) / l, y = i.toHsb(), S = h, p = (n.x + v) / c * 360;
  if (s)
    switch (s) {
      case "hue":
        return $n(J(J({}, y), {}, {
          h: p <= 0 ? 0 : p
        }));
      case "alpha":
        return $n(J(J({}, y), {}, {
          a: S <= 0 ? 0 : S
        }));
    }
  return $n({
    h: y.h,
    s: h <= 0 ? 0 : h,
    b: x >= 1 ? 1 : x,
    a: y.a
  });
}, s0 = function(t, n) {
  var r = t.toHsb();
  switch (n) {
    case "hue":
      return {
        x: r.h / 360 * 100,
        y: 50
      };
    case "alpha":
      return {
        x: t.a * 100,
        y: 50
      };
    // Picker panel
    default:
      return {
        x: r.s * 100,
        y: (1 - r.b) * 100
      };
  }
}, pb = function(t) {
  var n = t.color, r = t.prefixCls, o = t.className, i = t.style, s = t.onClick, a = "".concat(r, "-color-block");
  return /* @__PURE__ */ q.createElement("div", {
    className: Se(a, o),
    style: i,
    onClick: s
  }, /* @__PURE__ */ q.createElement("div", {
    className: "".concat(a, "-inner"),
    style: {
      background: n
    }
  }));
};
function xb(e) {
  var t = "touches" in e ? e.touches[0] : e, n = document.documentElement.scrollLeft || document.body.scrollLeft || window.pageXOffset, r = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
  return {
    pageX: t.pageX - n,
    pageY: t.pageY - r
  };
}
function a0(e) {
  var t = e.targetRef, n = e.containerRef, r = e.direction, o = e.onDragChange, i = e.onDragChangeComplete, s = e.calculate, a = e.color, c = e.disabledDrag, l = ft({
    x: 0,
    y: 0
  }), u = se(l, 2), d = u[0], f = u[1], v = Ee(null), g = Ee(null);
  Ke(function() {
    f(s());
  }, [a]), Ke(function() {
    return function() {
      document.removeEventListener("mousemove", v.current), document.removeEventListener("mouseup", g.current), document.removeEventListener("touchmove", v.current), document.removeEventListener("touchend", g.current), v.current = null, g.current = null;
    };
  }, []);
  var h = function(E) {
    var b = xb(E), T = b.pageX, O = b.pageY, k = n.current.getBoundingClientRect(), F = k.x, G = k.y, oe = k.width, te = k.height, H = t.current.getBoundingClientRect(), X = H.width, Q = H.height, N = X / 2, R = Q / 2, P = Math.max(0, Math.min(T - F, oe)) - N, j = Math.max(0, Math.min(O - G, te)) - R, $ = {
      x: P,
      y: r === "x" ? d.y : j
    };
    if (X === 0 && Q === 0 || X !== Q)
      return !1;
    o == null || o($);
  }, x = function(E) {
    E.preventDefault(), h(E);
  }, y = function(E) {
    E.preventDefault(), document.removeEventListener("mousemove", v.current), document.removeEventListener("mouseup", g.current), document.removeEventListener("touchmove", v.current), document.removeEventListener("touchend", g.current), v.current = null, g.current = null, i == null || i();
  }, S = function(E) {
    document.removeEventListener("mousemove", v.current), document.removeEventListener("mouseup", g.current), !c && (h(E), document.addEventListener("mousemove", x), document.addEventListener("mouseup", y), document.addEventListener("touchmove", x), document.addEventListener("touchend", y), v.current = x, g.current = y);
  };
  return [d, S];
}
var c0 = function(t) {
  var n = t.size, r = n === void 0 ? "default" : n, o = t.color, i = t.prefixCls;
  return /* @__PURE__ */ q.createElement("div", {
    className: Se("".concat(i, "-handler"), U({}, "".concat(i, "-handler-sm"), r === "small")),
    style: {
      backgroundColor: o
    }
  });
}, l0 = function(t) {
  var n = t.children, r = t.style, o = t.prefixCls;
  return /* @__PURE__ */ q.createElement("div", {
    className: "".concat(o, "-palette"),
    style: J({
      position: "relative"
    }, r)
  }, n);
}, u0 = /* @__PURE__ */ rr(function(e, t) {
  var n = e.children, r = e.x, o = e.y;
  return /* @__PURE__ */ q.createElement("div", {
    ref: t,
    style: {
      position: "absolute",
      left: "".concat(r, "%"),
      top: "".concat(o, "%"),
      zIndex: 1,
      transform: "translate(-50%, -50%)"
    }
  }, n);
}), gb = function(t) {
  var n = t.color, r = t.onChange, o = t.prefixCls, i = t.onChangeComplete, s = t.disabled, a = Ee(), c = Ee(), l = Ee(n), u = ln(function(h) {
    var x = i0({
      offset: h,
      targetRef: c,
      containerRef: a,
      color: n
    });
    l.current = x, r(x);
  }), d = a0({
    color: n,
    containerRef: a,
    targetRef: c,
    calculate: function() {
      return s0(n);
    },
    onDragChange: u,
    onDragChangeComplete: function() {
      return i == null ? void 0 : i(l.current);
    },
    disabledDrag: s
  }), f = se(d, 2), v = f[0], g = f[1];
  return /* @__PURE__ */ q.createElement("div", {
    ref: a,
    className: "".concat(o, "-select"),
    onMouseDown: g,
    onTouchStart: g
  }, /* @__PURE__ */ q.createElement(l0, {
    prefixCls: o
  }, /* @__PURE__ */ q.createElement(u0, {
    x: v.x,
    y: v.y,
    ref: c
  }, /* @__PURE__ */ q.createElement(c0, {
    color: n.toRgbString(),
    prefixCls: o
  })), /* @__PURE__ */ q.createElement("div", {
    className: "".concat(o, "-saturation"),
    style: {
      backgroundColor: "hsl(".concat(n.toHsb().h, ",100%, 50%)"),
      backgroundImage: "linear-gradient(0deg, #000, transparent),linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0))"
    }
  })));
}, mb = function(t, n) {
  var r = n1(t, {
    value: n
  }), o = se(r, 2), i = o[0], s = o[1], a = kr(function() {
    return $n(i);
  }, [i]);
  return [a, s];
}, vb = function(t) {
  var n = t.colors, r = t.children, o = t.direction, i = o === void 0 ? "to right" : o, s = t.type, a = t.prefixCls, c = kr(function() {
    return n.map(function(l, u) {
      var d = $n(l);
      return s === "alpha" && u === n.length - 1 && (d = new Zt(d.setA(1))), d.toRgbString();
    }).join(",");
  }, [n, s]);
  return /* @__PURE__ */ q.createElement("div", {
    className: "".concat(a, "-gradient"),
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(".concat(i, ", ").concat(c, ")")
    }
  }, r);
}, bb = function(t) {
  var n = t.prefixCls, r = t.colors, o = t.disabled, i = t.onChange, s = t.onChangeComplete, a = t.color, c = t.type, l = Ee(), u = Ee(), d = Ee(a), f = function(b) {
    return c === "hue" ? b.getHue() : b.a * 100;
  }, v = ln(function(E) {
    var b = i0({
      offset: E,
      targetRef: u,
      containerRef: l,
      color: a,
      type: c
    });
    d.current = b, i(f(b));
  }), g = a0({
    color: a,
    targetRef: u,
    containerRef: l,
    calculate: function() {
      return s0(a, c);
    },
    onDragChange: v,
    onDragChangeComplete: function() {
      s(f(d.current));
    },
    direction: "x",
    disabledDrag: o
  }), h = se(g, 2), x = h[0], y = h[1], S = q.useMemo(function() {
    if (c === "hue") {
      var E = a.toHsb();
      E.s = 1, E.b = 1, E.a = 1;
      var b = new Zt(E);
      return b;
    }
    return a;
  }, [a, c]), p = q.useMemo(function() {
    return r.map(function(E) {
      return "".concat(E.color, " ").concat(E.percent, "%");
    });
  }, [r]);
  return /* @__PURE__ */ q.createElement("div", {
    ref: l,
    className: Se("".concat(n, "-slider"), "".concat(n, "-slider-").concat(c)),
    onMouseDown: y,
    onTouchStart: y
  }, /* @__PURE__ */ q.createElement(l0, {
    prefixCls: n
  }, /* @__PURE__ */ q.createElement(u0, {
    x: x.x,
    y: x.y,
    ref: u
  }, /* @__PURE__ */ q.createElement(c0, {
    size: "small",
    color: S.toHexString(),
    prefixCls: n
  })), /* @__PURE__ */ q.createElement(vb, {
    colors: p,
    type: c,
    prefixCls: n
  })));
};
function yb(e) {
  return w.useMemo(function() {
    var t = e || {}, n = t.slider;
    return [n || bb];
  }, [e]);
}
var Sb = [{
  color: "rgb(255, 0, 0)",
  percent: 0
}, {
  color: "rgb(255, 255, 0)",
  percent: 17
}, {
  color: "rgb(0, 255, 0)",
  percent: 33
}, {
  color: "rgb(0, 255, 255)",
  percent: 50
}, {
  color: "rgb(0, 0, 255)",
  percent: 67
}, {
  color: "rgb(255, 0, 255)",
  percent: 83
}, {
  color: "rgb(255, 0, 0)",
  percent: 100
}], Cb = /* @__PURE__ */ rr(function(e, t) {
  var n = e.value, r = e.defaultValue, o = e.prefixCls, i = o === void 0 ? db : o, s = e.onChange, a = e.onChangeComplete, c = e.className, l = e.style, u = e.panelRender, d = e.disabledAlpha, f = d === void 0 ? !1 : d, v = e.disabled, g = v === void 0 ? !1 : v, h = e.components, x = yb(h), y = se(x, 1), S = y[0], p = mb(r || hb, n), E = se(p, 2), b = E[0], T = E[1], O = kr(function() {
    return b.setA(1).toRgbString();
  }, [b]), k = function(j, $) {
    n || T(j), s == null || s(j, $);
  }, F = function(j) {
    return new Zt(b.setHue(j));
  }, G = function(j) {
    return new Zt(b.setA(j / 100));
  }, oe = function(j) {
    k(F(j), {
      type: "hue",
      value: j
    });
  }, te = function(j) {
    k(G(j), {
      type: "alpha",
      value: j
    });
  }, H = function(j) {
    a && a(F(j));
  }, X = function(j) {
    a && a(G(j));
  }, Q = Se("".concat(i, "-panel"), c, U({}, "".concat(i, "-panel-disabled"), g)), N = {
    prefixCls: i,
    disabled: g,
    color: b
  }, R = /* @__PURE__ */ q.createElement(q.Fragment, null, /* @__PURE__ */ q.createElement(gb, gt({
    onChange: k
  }, N, {
    onChangeComplete: a
  })), /* @__PURE__ */ q.createElement("div", {
    className: "".concat(i, "-slider-container")
  }, /* @__PURE__ */ q.createElement("div", {
    className: Se("".concat(i, "-slider-group"), U({}, "".concat(i, "-slider-group-disabled-alpha"), f))
  }, /* @__PURE__ */ q.createElement(S, gt({}, N, {
    type: "hue",
    colors: Sb,
    min: 0,
    max: 359,
    value: b.getHue(),
    onChange: oe,
    onChangeComplete: H
  })), !f && /* @__PURE__ */ q.createElement(S, gt({}, N, {
    type: "alpha",
    colors: [{
      percent: 0,
      color: "rgba(255, 0, 4, 0)"
    }, {
      percent: 100,
      color: O
    }],
    min: 0,
    max: 100,
    value: b.a * 100,
    onChange: te,
    onChangeComplete: X
  }))), /* @__PURE__ */ q.createElement(pb, {
    color: b.toRgbString(),
    prefixCls: i
  })));
  return /* @__PURE__ */ q.createElement("div", {
    className: Q,
    style: l,
    ref: t
  }, typeof u == "function" ? u(R) : R);
});
process.env.NODE_ENV !== "production" && (Cb.displayName = "ColorPicker");
const wb = (e, t) => (e == null ? void 0 : e.replace(/[^\w/]/g, "").slice(0, t ? 8 : 6)) || "", Eb = (e, t) => e ? wb(e, t) : "";
let _b = /* @__PURE__ */ function() {
  function e(t) {
    yt(this, e);
    var n;
    if (this.cleared = !1, t instanceof e) {
      this.metaColor = t.metaColor.clone(), this.colors = (n = t.colors) === null || n === void 0 ? void 0 : n.map((o) => ({
        color: new e(o.color),
        percent: o.percent
      })), this.cleared = t.cleared;
      return;
    }
    const r = Array.isArray(t);
    r && t.length ? (this.colors = t.map((o) => {
      let {
        color: i,
        percent: s
      } = o;
      return {
        color: new e(i),
        percent: s
      };
    }), this.metaColor = new Zt(this.colors[0].color.metaColor)) : this.metaColor = new Zt(r ? "" : t), (!t || r && !this.colors) && (this.metaColor = this.metaColor.setA(0), this.cleared = !0);
  }
  return St(e, [{
    key: "toHsb",
    value: function() {
      return this.metaColor.toHsb();
    }
  }, {
    key: "toHsbString",
    value: function() {
      return this.metaColor.toHsbString();
    }
  }, {
    key: "toHex",
    value: function() {
      return Eb(this.toHexString(), this.metaColor.a < 1);
    }
  }, {
    key: "toHexString",
    value: function() {
      return this.metaColor.toHexString();
    }
  }, {
    key: "toRgb",
    value: function() {
      return this.metaColor.toRgb();
    }
  }, {
    key: "toRgbString",
    value: function() {
      return this.metaColor.toRgbString();
    }
  }, {
    key: "isGradient",
    value: function() {
      return !!this.colors && !this.cleared;
    }
  }, {
    key: "getColors",
    value: function() {
      return this.colors || [{
        color: this,
        percent: 0
      }];
    }
  }, {
    key: "toCssString",
    value: function() {
      const {
        colors: n
      } = this;
      return n ? `linear-gradient(90deg, ${n.map((o) => `${o.color.toRgbString()} ${o.percent}%`).join(", ")})` : this.metaColor.toRgbString();
    }
  }, {
    key: "equals",
    value: function(n) {
      return !n || this.isGradient() !== n.isGradient() ? !1 : this.isGradient() ? this.colors.length === n.colors.length && this.colors.every((r, o) => {
        const i = n.colors[o];
        return r.percent === i.percent && r.color.equals(i.color);
      }) : this.toHexString() === n.toHexString();
    }
  }]);
}();
const Ob = (e, t) => {
  const {
    r: n,
    g: r,
    b: o,
    a: i
  } = e.toRgb(), s = new Zt(e.toRgbString()).onBackground(t).toHsv();
  return i <= 0.5 ? s.v > 0.5 : n * 0.299 + r * 0.587 + o * 0.114 > 192;
}, f0 = (e) => {
  const {
    paddingInline: t,
    onlyIconSize: n
  } = e;
  return dn(e, {
    buttonPaddingHorizontal: t,
    buttonPaddingVertical: 0,
    buttonIconOnlyFontSize: n
  });
}, d0 = (e) => {
  var t, n, r, o, i, s;
  const a = (t = e.contentFontSize) !== null && t !== void 0 ? t : e.fontSize, c = (n = e.contentFontSizeSM) !== null && n !== void 0 ? n : e.fontSize, l = (r = e.contentFontSizeLG) !== null && r !== void 0 ? r : e.fontSizeLG, u = (o = e.contentLineHeight) !== null && o !== void 0 ? o : jo(a), d = (i = e.contentLineHeightSM) !== null && i !== void 0 ? i : jo(c), f = (s = e.contentLineHeightLG) !== null && s !== void 0 ? s : jo(l), v = Ob(new _b(e.colorBgSolid), "#fff") ? "#000" : "#fff", g = hc.reduce((h, x) => Object.assign(Object.assign({}, h), {
    [`${x}ShadowColor`]: `0 ${Kt(e.controlOutlineWidth)} 0 ${Ar(e[`${x}1`], e.colorBgContainer)}`
  }), {});
  return Object.assign(Object.assign({}, g), {
    fontWeight: 400,
    defaultShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`,
    primaryShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`,
    dangerShadow: `0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`,
    primaryColor: e.colorTextLightSolid,
    dangerColor: e.colorTextLightSolid,
    borderColorDisabled: e.colorBorder,
    defaultGhostColor: e.colorBgContainer,
    ghostBg: "transparent",
    defaultGhostBorderColor: e.colorBgContainer,
    paddingInline: e.paddingContentHorizontal - e.lineWidth,
    paddingInlineLG: e.paddingContentHorizontal - e.lineWidth,
    paddingInlineSM: 8 - e.lineWidth,
    onlyIconSize: "inherit",
    onlyIconSizeSM: "inherit",
    onlyIconSizeLG: "inherit",
    groupBorderColor: e.colorPrimaryHover,
    linkHoverBg: "transparent",
    textTextColor: e.colorText,
    textTextHoverColor: e.colorText,
    textTextActiveColor: e.colorText,
    textHoverBg: e.colorFillTertiary,
    defaultColor: e.colorText,
    defaultBg: e.colorBgContainer,
    defaultBorderColor: e.colorBorder,
    defaultBorderColorDisabled: e.colorBorder,
    defaultHoverBg: e.colorBgContainer,
    defaultHoverColor: e.colorPrimaryHover,
    defaultHoverBorderColor: e.colorPrimaryHover,
    defaultActiveBg: e.colorBgContainer,
    defaultActiveColor: e.colorPrimaryActive,
    defaultActiveBorderColor: e.colorPrimaryActive,
    solidTextColor: v,
    contentFontSize: a,
    contentFontSizeSM: c,
    contentFontSizeLG: l,
    contentLineHeight: u,
    contentLineHeightSM: d,
    contentLineHeightLG: f,
    paddingBlock: Math.max((e.controlHeight - a * u) / 2 - e.lineWidth, 0),
    paddingBlockSM: Math.max((e.controlHeightSM - c * d) / 2 - e.lineWidth, 0),
    paddingBlockLG: Math.max((e.controlHeightLG - l * f) / 2 - e.lineWidth, 0)
  });
}, Ab = (e) => {
  const {
    componentCls: t,
    iconCls: n,
    fontWeight: r,
    opacityLoading: o,
    motionDurationSlow: i,
    motionEaseInOut: s,
    marginXS: a,
    calc: c
  } = e;
  return {
    [t]: {
      outline: "none",
      position: "relative",
      display: "inline-flex",
      gap: e.marginXS,
      alignItems: "center",
      justifyContent: "center",
      fontWeight: r,
      whiteSpace: "nowrap",
      textAlign: "center",
      backgroundImage: "none",
      background: "transparent",
      border: `${Kt(e.lineWidth)} ${e.lineType} transparent`,
      cursor: "pointer",
      transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
      userSelect: "none",
      touchAction: "manipulation",
      color: e.colorText,
      "&:disabled > *": {
        pointerEvents: "none"
      },
      // https://github.com/ant-design/ant-design/issues/51380
      [`${t}-icon > svg`]: Td(),
      "> a": {
        color: "currentColor"
      },
      "&:not(:disabled)": v1(e),
      [`&${t}-two-chinese-chars::first-letter`]: {
        letterSpacing: "0.34em"
      },
      [`&${t}-two-chinese-chars > *:not(${n})`]: {
        marginInlineEnd: "-0.34em",
        letterSpacing: "0.34em"
      },
      [`&${t}-icon-only`]: {
        paddingInline: 0,
        // make `btn-icon-only` not too narrow
        [`&${t}-compact-item`]: {
          flex: "none"
        },
        [`&${t}-round`]: {
          width: "auto"
        }
      },
      // Loading
      [`&${t}-loading`]: {
        opacity: o,
        cursor: "default"
      },
      [`${t}-loading-icon`]: {
        transition: ["width", "opacity", "margin"].map((l) => `${l} ${i} ${s}`).join(",")
      },
      // iconPosition
      [`&:not(${t}-icon-end)`]: {
        [`${t}-loading-icon-motion`]: {
          "&-appear-start, &-enter-start": {
            marginInlineEnd: c(a).mul(-1).equal()
          },
          "&-appear-active, &-enter-active": {
            marginInlineEnd: 0
          },
          "&-leave-start": {
            marginInlineEnd: 0
          },
          "&-leave-active": {
            marginInlineEnd: c(a).mul(-1).equal()
          }
        }
      },
      "&-icon-end": {
        flexDirection: "row-reverse",
        [`${t}-loading-icon-motion`]: {
          "&-appear-start, &-enter-start": {
            marginInlineStart: c(a).mul(-1).equal()
          },
          "&-appear-active, &-enter-active": {
            marginInlineStart: 0
          },
          "&-leave-start": {
            marginInlineStart: 0
          },
          "&-leave-active": {
            marginInlineStart: c(a).mul(-1).equal()
          }
        }
      }
    }
  };
}, h0 = (e, t, n) => ({
  [`&:not(:disabled):not(${e}-disabled)`]: {
    "&:hover": t,
    "&:active": n
  }
}), Tb = (e) => ({
  minWidth: e.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
}), Rb = (e) => ({
  borderRadius: e.controlHeight,
  paddingInlineStart: e.calc(e.controlHeight).div(2).equal(),
  paddingInlineEnd: e.calc(e.controlHeight).div(2).equal()
}), Pb = (e) => ({
  cursor: "not-allowed",
  borderColor: e.borderColorDisabled,
  color: e.colorTextDisabled,
  background: e.colorBgContainerDisabled,
  boxShadow: "none"
}), Ni = (e, t, n, r, o, i, s, a) => ({
  [`&${e}-background-ghost`]: Object.assign(Object.assign({
    color: n || void 0,
    background: t,
    borderColor: r || void 0,
    boxShadow: "none"
  }, h0(e, Object.assign({
    background: t
  }, s), Object.assign({
    background: t
  }, a))), {
    "&:disabled": {
      cursor: "not-allowed",
      color: o || void 0,
      borderColor: i || void 0
    }
  })
}), Ib = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, Pb(e))
}), Nb = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: {
    cursor: "not-allowed",
    color: e.colorTextDisabled
  }
}), ki = (e, t, n, r) => {
  const i = r && ["link", "text"].includes(r) ? Nb : Ib;
  return Object.assign(Object.assign({}, i(e)), h0(e.componentCls, t, n));
}, ji = (e, t, n, r, o) => ({
  [`&${e.componentCls}-variant-solid`]: Object.assign({
    color: t,
    background: n
  }, ki(e, r, o))
}), Li = (e, t, n, r, o) => ({
  [`&${e.componentCls}-variant-outlined, &${e.componentCls}-variant-dashed`]: Object.assign({
    borderColor: t,
    background: n
  }, ki(e, r, o))
}), Mi = (e) => ({
  [`&${e.componentCls}-variant-dashed`]: {
    borderStyle: "dashed"
  }
}), Di = (e, t, n, r) => ({
  [`&${e.componentCls}-variant-filled`]: Object.assign({
    boxShadow: "none",
    background: t
  }, ki(e, n, r))
}), $t = (e, t, n, r, o) => ({
  [`&${e.componentCls}-variant-${n}`]: Object.assign({
    color: t,
    boxShadow: "none"
  }, ki(e, r, o, n))
}), kb = (e) => {
  const {
    componentCls: t
  } = e;
  return hc.reduce((n, r) => {
    const o = e[`${r}6`], i = e[`${r}1`], s = e[`${r}5`], a = e[`${r}2`], c = e[`${r}3`], l = e[`${r}7`];
    return Object.assign(Object.assign({}, n), {
      [`&${t}-color-${r}`]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
        color: o,
        boxShadow: e[`${r}ShadowColor`]
      }, ji(e, e.colorTextLightSolid, o, {
        background: s
      }, {
        background: l
      })), Li(e, o, e.colorBgContainer, {
        color: s,
        borderColor: s,
        background: e.colorBgContainer
      }, {
        color: l,
        borderColor: l,
        background: e.colorBgContainer
      })), Mi(e)), Di(e, i, {
        background: a
      }, {
        background: c
      })), $t(e, o, "link", {
        color: s
      }, {
        color: l
      })), $t(e, o, "text", {
        color: s,
        background: i
      }, {
        color: l,
        background: c
      }))
    });
  }, {});
}, jb = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.defaultColor,
  boxShadow: e.defaultShadow
}, ji(e, e.solidTextColor, e.colorBgSolid, {
  color: e.solidTextColor,
  background: e.colorBgSolidHover
}, {
  color: e.solidTextColor,
  background: e.colorBgSolidActive
})), Mi(e)), Di(e, e.colorFillTertiary, {
  background: e.colorFillSecondary
}, {
  background: e.colorFill
})), Ni(e.componentCls, e.ghostBg, e.defaultGhostColor, e.defaultGhostBorderColor, e.colorTextDisabled, e.colorBorder)), $t(e, e.textTextColor, "link", {
  color: e.colorLinkHover,
  background: e.linkHoverBg
}, {
  color: e.colorLinkActive
})), Lb = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.colorPrimary,
  boxShadow: e.primaryShadow
}, Li(e, e.colorPrimary, e.colorBgContainer, {
  color: e.colorPrimaryTextHover,
  borderColor: e.colorPrimaryHover,
  background: e.colorBgContainer
}, {
  color: e.colorPrimaryTextActive,
  borderColor: e.colorPrimaryActive,
  background: e.colorBgContainer
})), Mi(e)), Di(e, e.colorPrimaryBg, {
  background: e.colorPrimaryBgHover
}, {
  background: e.colorPrimaryBorder
})), $t(e, e.colorPrimaryText, "text", {
  color: e.colorPrimaryTextHover,
  background: e.colorPrimaryBg
}, {
  color: e.colorPrimaryTextActive,
  background: e.colorPrimaryBorder
})), $t(e, e.colorPrimaryText, "link", {
  color: e.colorPrimaryTextHover,
  background: e.linkHoverBg
}, {
  color: e.colorPrimaryTextActive
})), Ni(e.componentCls, e.ghostBg, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), Mb = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.colorError,
  boxShadow: e.dangerShadow
}, ji(e, e.dangerColor, e.colorError, {
  background: e.colorErrorHover
}, {
  background: e.colorErrorActive
})), Li(e, e.colorError, e.colorBgContainer, {
  color: e.colorErrorHover,
  borderColor: e.colorErrorBorderHover
}, {
  color: e.colorErrorActive,
  borderColor: e.colorErrorActive
})), Mi(e)), Di(e, e.colorErrorBg, {
  background: e.colorErrorBgFilledHover
}, {
  background: e.colorErrorBgActive
})), $t(e, e.colorError, "text", {
  color: e.colorErrorHover,
  background: e.colorErrorBg
}, {
  color: e.colorErrorHover,
  background: e.colorErrorBgActive
})), $t(e, e.colorError, "link", {
  color: e.colorErrorHover
}, {
  color: e.colorErrorActive
})), Ni(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
  color: e.colorErrorHover,
  borderColor: e.colorErrorHover
}, {
  color: e.colorErrorActive,
  borderColor: e.colorErrorActive
})), Db = (e) => Object.assign(Object.assign({}, $t(e, e.colorLink, "link", {
  color: e.colorLinkHover
}, {
  color: e.colorLinkActive
})), Ni(e.componentCls, e.ghostBg, e.colorInfo, e.colorInfo, e.colorTextDisabled, e.colorBorder, {
  color: e.colorInfoHover,
  borderColor: e.colorInfoHover
}, {
  color: e.colorInfoActive,
  borderColor: e.colorInfoActive
})), Bb = (e) => {
  const {
    componentCls: t
  } = e;
  return Object.assign({
    [`${t}-color-default`]: jb(e),
    [`${t}-color-primary`]: Lb(e),
    [`${t}-color-dangerous`]: Mb(e),
    [`${t}-color-link`]: Db(e)
  }, kb(e));
}, zb = (e) => Object.assign(Object.assign(Object.assign(Object.assign({}, Li(e, e.defaultBorderColor, e.defaultBg, {
  color: e.defaultHoverColor,
  borderColor: e.defaultHoverBorderColor,
  background: e.defaultHoverBg
}, {
  color: e.defaultActiveColor,
  borderColor: e.defaultActiveBorderColor,
  background: e.defaultActiveBg
})), $t(e, e.textTextColor, "text", {
  color: e.textTextHoverColor,
  background: e.textHoverBg
}, {
  color: e.textTextActiveColor,
  background: e.colorBgTextActive
})), ji(e, e.primaryColor, e.colorPrimary, {
  background: e.colorPrimaryHover,
  color: e.primaryColor
}, {
  background: e.colorPrimaryActive,
  color: e.primaryColor
})), $t(e, e.colorLink, "link", {
  color: e.colorLinkHover,
  background: e.linkHoverBg
}, {
  color: e.colorLinkActive
})), mc = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  const {
    componentCls: n,
    controlHeight: r,
    fontSize: o,
    borderRadius: i,
    buttonPaddingHorizontal: s,
    iconCls: a,
    buttonPaddingVertical: c,
    buttonIconOnlyFontSize: l
  } = e;
  return [
    {
      [t]: {
        fontSize: o,
        height: r,
        padding: `${Kt(c)} ${Kt(s)}`,
        borderRadius: i,
        [`&${n}-icon-only`]: {
          width: r,
          [a]: {
            fontSize: l
          }
        }
      }
    },
    // Shape - patch prefixCls again to override solid border radius style
    {
      [`${n}${n}-circle${t}`]: Tb(e)
    },
    {
      [`${n}${n}-round${t}`]: Rb(e)
    }
  ];
}, Hb = (e) => {
  const t = dn(e, {
    fontSize: e.contentFontSize
  });
  return mc(t, e.componentCls);
}, Fb = (e) => {
  const t = dn(e, {
    controlHeight: e.controlHeightSM,
    fontSize: e.contentFontSizeSM,
    padding: e.paddingXS,
    buttonPaddingHorizontal: e.paddingInlineSM,
    buttonPaddingVertical: 0,
    borderRadius: e.borderRadiusSM,
    buttonIconOnlyFontSize: e.onlyIconSizeSM
  });
  return mc(t, `${e.componentCls}-sm`);
}, $b = (e) => {
  const t = dn(e, {
    controlHeight: e.controlHeightLG,
    fontSize: e.contentFontSizeLG,
    buttonPaddingHorizontal: e.paddingInlineLG,
    buttonPaddingVertical: 0,
    borderRadius: e.borderRadiusLG,
    buttonIconOnlyFontSize: e.onlyIconSizeLG
  });
  return mc(t, `${e.componentCls}-lg`);
}, Vb = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      [`&${t}-block`]: {
        width: "100%"
      }
    }
  };
}, Wb = Ti("Button", (e) => {
  const t = f0(e);
  return [
    // Shared
    Ab(t),
    // Size
    Hb(t),
    Fb(t),
    $b(t),
    // Block
    Vb(t),
    // Color
    Bb(t),
    // https://github.com/ant-design/ant-design/issues/50969
    zb(t),
    // Button Group
    cb(t)
  ];
}, d0, {
  unitless: {
    fontWeight: !0,
    contentLineHeight: !0,
    contentLineHeightSM: !0,
    contentLineHeightLG: !0
  }
});
function qb(e, t, n) {
  const {
    focusElCls: r,
    focus: o,
    borderElCls: i
  } = n, s = i ? "> *" : "", a = ["hover", o ? "focus" : null, "active"].filter(Boolean).map((c) => `&:${c} ${s}`).join(",");
  return {
    [`&-item:not(${t}-last-item)`]: {
      marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal()
    },
    "&-item": Object.assign(Object.assign({
      [a]: {
        zIndex: 2
      }
    }, r ? {
      [`&${r}`]: {
        zIndex: 2
      }
    } : {}), {
      [`&[disabled] ${s}`]: {
        zIndex: 0
      }
    })
  };
}
function Ub(e, t, n) {
  const {
    borderElCls: r
  } = n, o = r ? `> ${r}` : "";
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item) ${o}`]: {
      borderRadius: 0
    },
    [`&-item:not(${t}-last-item)${t}-first-item`]: {
      [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${t}-first-item)${t}-last-item`]: {
      [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function Gb(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: !0
  };
  const {
    componentCls: n
  } = e, r = `${n}-compact`;
  return {
    [r]: Object.assign(Object.assign({}, qb(e, r, t)), Ub(n, r, t))
  };
}
function Yb(e, t) {
  return {
    // border collapse
    [`&-item:not(${t}-last-item)`]: {
      marginBottom: e.calc(e.lineWidth).mul(-1).equal()
    },
    "&-item": {
      "&:hover,&:focus,&:active": {
        zIndex: 2
      },
      "&[disabled]": {
        zIndex: 0
      }
    }
  };
}
function Xb(e, t) {
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item)`]: {
      borderRadius: 0
    },
    [`&-item${t}-first-item:not(${t}-last-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&-item${t}-last-item:not(${t}-first-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0
      }
    }
  };
}
function Kb(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: Object.assign(Object.assign({}, Yb(e, t)), Xb(e.componentCls, t))
  };
}
const Zb = (e) => {
  const {
    componentCls: t,
    colorPrimaryHover: n,
    lineWidth: r,
    calc: o
  } = e, i = o(r).mul(-1).equal(), s = (a) => {
    const c = `${t}-compact${a ? "-vertical" : ""}-item${t}-primary:not([disabled])`;
    return {
      [`${c} + ${c}::before`]: {
        position: "absolute",
        top: a ? i : 0,
        insetInlineStart: a ? 0 : i,
        backgroundColor: n,
        content: '""',
        width: a ? "100%" : r,
        height: a ? r : "100%"
      }
    };
  };
  return Object.assign(Object.assign({}, s()), s(!0));
}, Jb = y1(["Button", "compact"], (e) => {
  const t = f0(e);
  return [
    // Space Compact
    Gb(t),
    Kb(t),
    Zb(t)
  ];
}, d0);
var Qb = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function ey(e) {
  if (typeof e == "object" && e) {
    let t = e == null ? void 0 : e.delay;
    return t = !Number.isNaN(t) && typeof t == "number" ? t : 0, {
      loading: t <= 0,
      delay: t
    };
  }
  return {
    loading: !!e,
    delay: 0
  };
}
const ty = {
  default: ["default", "outlined"],
  primary: ["primary", "solid"],
  dashed: ["default", "dashed"],
  // `link` is not a real color but we should compatible with it
  link: ["link", "link"],
  text: ["default", "text"]
}, ny = /* @__PURE__ */ q.forwardRef((e, t) => {
  var n, r;
  const {
    loading: o = !1,
    prefixCls: i,
    color: s,
    variant: a,
    type: c,
    danger: l = !1,
    shape: u = "default",
    size: d,
    styles: f,
    disabled: v,
    className: g,
    rootClassName: h,
    children: x,
    icon: y,
    iconPosition: S = "start",
    ghost: p = !1,
    block: E = !1,
    // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    htmlType: b = "button",
    classNames: T,
    style: O = {},
    autoInsertSpace: k,
    autoFocus: F
  } = e, G = Qb(e, ["loading", "prefixCls", "color", "variant", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "iconPosition", "ghost", "block", "htmlType", "classNames", "style", "autoInsertSpace", "autoFocus"]), oe = c || "default", [te, H] = kr(() => {
    if (s && a)
      return [s, a];
    const we = ty[oe] || [];
    return l ? ["danger", we[1]] : we;
  }, [c, s, a, l]), Q = te === "danger" ? "dangerous" : te, {
    getPrefixCls: N,
    direction: R,
    autoInsertSpace: P,
    className: j,
    style: $,
    classNames: V,
    styles: Y
  } = dc("button"), re = (n = k ?? P) !== null && n !== void 0 ? n : !0, ee = N("btn", i), [ae, le, ue] = Wb(ee), _e = _t(Yo), me = v ?? _e, je = _t(o0), Ne = kr(() => ey(o), [o]), [xe, M] = ft(Ne.loading), [A, L] = ft(!1), B = Ee(null), _ = ug(t, B), K = th.count(x) === 1 && !y && !mo(H), Z = Ee(!0);
  q.useEffect(() => (Z.current = !1, () => {
    Z.current = !0;
  }), []), Ke(() => {
    let we = null;
    Ne.delay > 0 ? we = setTimeout(() => {
      we = null, M(!0);
    }, Ne.delay) : M(Ne.loading);
    function nt() {
      we && (clearTimeout(we), we = null);
    }
    return nt;
  }, [Ne]), Ke(() => {
    if (!B.current || !re)
      return;
    const we = B.current.textContent || "";
    K && Ta(we) ? A || L(!0) : A && L(!1);
  }), Ke(() => {
    F && B.current && B.current.focus();
  }, []);
  const Pe = q.useCallback((we) => {
    var nt;
    if (xe || me) {
      we.preventDefault();
      return;
    }
    (nt = e.onClick) === null || nt === void 0 || nt.call(e, ("href" in e, we));
  }, [e.onClick, xe, me]);
  if (process.env.NODE_ENV !== "production") {
    const we = fn("Button");
    process.env.NODE_ENV !== "production" && we(!(typeof y == "string" && y.length > 2), "breaking", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${y}\` at https://ant.design/components/icon`), process.env.NODE_ENV !== "production" && we(!(p && mo(H)), "usage", "`link` or `text` button can't be a `ghost` button.");
  }
  const {
    compactSize: Le,
    compactItemClassnames: ce
  } = nb(ee, R), Me = {
    large: "lg",
    small: "sm",
    middle: void 0
  }, dt = eb((we) => {
    var nt, Wt;
    return (Wt = (nt = d ?? Le) !== null && nt !== void 0 ? nt : je) !== null && Wt !== void 0 ? Wt : we;
  }), ut = dt && (r = Me[dt]) !== null && r !== void 0 ? r : "", Vt = xe ? "loading" : y, z = t0(G, ["navigate"]), C = Se(ee, le, ue, {
    [`${ee}-${u}`]: u !== "default" && u,
    // line(253 - 254): Compatible with versions earlier than 5.21.0
    [`${ee}-${oe}`]: oe,
    [`${ee}-dangerous`]: l,
    [`${ee}-color-${Q}`]: Q,
    [`${ee}-variant-${H}`]: H,
    [`${ee}-${ut}`]: ut,
    [`${ee}-icon-only`]: !x && x !== 0 && !!Vt,
    [`${ee}-background-ghost`]: p && !mo(H),
    [`${ee}-loading`]: xe,
    [`${ee}-two-chinese-chars`]: A && re && !xe,
    [`${ee}-block`]: E,
    [`${ee}-rtl`]: R === "rtl",
    [`${ee}-icon-end`]: S === "end"
  }, ce, g, h, j), de = Object.assign(Object.assign({}, $), O), Ie = Se(T == null ? void 0 : T.icon, V.icon), Ge = Object.assign(Object.assign({}, (f == null ? void 0 : f.icon) || {}), Y.icon || {}), be = y && !xe ? /* @__PURE__ */ q.createElement(Ra, {
    prefixCls: ee,
    className: Ie,
    style: Ge
  }, y) : o && typeof o == "object" && o.icon ? /* @__PURE__ */ q.createElement(Ra, {
    prefixCls: ee,
    className: Ie,
    style: Ge
  }, o.icon) : /* @__PURE__ */ q.createElement(ab, {
    existIcon: !!y,
    prefixCls: ee,
    loading: xe,
    mount: Z.current
  }), ze = x || x === 0 ? sb(x, K && re) : null;
  if (z.href !== void 0)
    return ae(/* @__PURE__ */ q.createElement("a", Object.assign({}, z, {
      className: Se(C, {
        [`${ee}-disabled`]: me
      }),
      href: me ? void 0 : z.href,
      style: de,
      onClick: Pe,
      ref: _,
      tabIndex: me ? -1 : 0
    }), be, ze));
  let He = /* @__PURE__ */ q.createElement("button", Object.assign({}, G, {
    type: b,
    className: C,
    style: de,
    onClick: Pe,
    disabled: me,
    ref: _
  }), be, ze, ce && /* @__PURE__ */ q.createElement(Jb, {
    prefixCls: ee
  }));
  return mo(H) || (He = /* @__PURE__ */ q.createElement(r0, {
    component: "Button",
    disabled: xe
  }, He)), ae(He);
}), Bi = ny;
Bi.Group = ob;
Bi.__ANT_BUTTON = !0;
process.env.NODE_ENV !== "production" && (Bi.displayName = "Button");
function ry(e, t, n) {
  var r = n || {}, o = r.noTrailing, i = o === void 0 ? !1 : o, s = r.noLeading, a = s === void 0 ? !1 : s, c = r.debounceMode, l = c === void 0 ? void 0 : c, u, d = !1, f = 0;
  function v() {
    u && clearTimeout(u);
  }
  function g(x) {
    var y = x || {}, S = y.upcomingOnly, p = S === void 0 ? !1 : S;
    v(), d = !p;
  }
  function h() {
    for (var x = arguments.length, y = new Array(x), S = 0; S < x; S++)
      y[S] = arguments[S];
    var p = this, E = Date.now() - f;
    if (d)
      return;
    function b() {
      f = Date.now(), t.apply(p, y);
    }
    function T() {
      u = void 0;
    }
    !a && l && !u && b(), v(), l === void 0 && E > e ? a ? (f = Date.now(), i || (u = setTimeout(l ? T : b, e))) : b() : i !== !0 && (u = setTimeout(l ? T : b, l === void 0 ? e - E : e));
  }
  return h.cancel = g, h;
}
function oy(e, t, n) {
  var r = {}, o = r.atBegin, i = o === void 0 ? !1 : o;
  return ry(e, t, {
    debounceMode: i !== !1
  });
}
function tu(e) {
  return ["small", "middle", "large"].includes(e);
}
const p0 = ["wrap", "nowrap", "wrap-reverse"], x0 = ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around", "space-evenly", "stretch", "normal", "left", "right"], g0 = ["center", "start", "end", "flex-start", "flex-end", "self-start", "self-end", "baseline", "normal", "stretch"], iy = (e, t) => {
  const n = t.wrap === !0 ? "wrap" : t.wrap;
  return {
    [`${e}-wrap-${n}`]: n && p0.includes(n)
  };
}, sy = (e, t) => {
  const n = {};
  return g0.forEach((r) => {
    n[`${e}-align-${r}`] = t.align === r;
  }), n[`${e}-align-stretch`] = !t.align && !!t.vertical, n;
}, ay = (e, t) => {
  const n = {};
  return x0.forEach((r) => {
    n[`${e}-justify-${r}`] = t.justify === r;
  }), n;
};
function cy(e, t) {
  return Se(Object.assign(Object.assign(Object.assign({}, iy(e, t)), sy(e, t)), ay(e, t)));
}
const ly = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
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
}, uy = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      "&-gap-small": {
        gap: e.flexGapSM
      },
      "&-gap-middle": {
        gap: e.flexGap
      },
      "&-gap-large": {
        gap: e.flexGapLG
      }
    }
  };
}, fy = (e) => {
  const {
    componentCls: t
  } = e, n = {};
  return p0.forEach((r) => {
    n[`${t}-wrap-${r}`] = {
      flexWrap: r
    };
  }), n;
}, dy = (e) => {
  const {
    componentCls: t
  } = e, n = {};
  return g0.forEach((r) => {
    n[`${t}-align-${r}`] = {
      alignItems: r
    };
  }), n;
}, hy = (e) => {
  const {
    componentCls: t
  } = e, n = {};
  return x0.forEach((r) => {
    n[`${t}-justify-${r}`] = {
      justifyContent: r
    };
  }), n;
}, py = () => ({}), xy = Ti("Flex", (e) => {
  const {
    paddingXS: t,
    padding: n,
    paddingLG: r
  } = e, o = dn(e, {
    flexGapSM: t,
    flexGap: n,
    flexGapLG: r
  });
  return [ly(o), uy(o), fy(o), dy(o), hy(o)];
}, py, {
  // Flex component don't apply extra font style
  // https://github.com/ant-design/ant-design/issues/46403
  resetStyle: !1
});
var gy = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const m0 = /* @__PURE__ */ q.forwardRef((e, t) => {
  const {
    prefixCls: n,
    rootClassName: r,
    className: o,
    style: i,
    flex: s,
    gap: a,
    children: c,
    vertical: l = !1,
    component: u = "div"
  } = e, d = gy(e, ["prefixCls", "rootClassName", "className", "style", "flex", "gap", "children", "vertical", "component"]), {
    flex: f,
    direction: v,
    getPrefixCls: g
  } = q.useContext(kt), h = g("flex", n), [x, y, S] = xy(h), p = l ?? (f == null ? void 0 : f.vertical), E = Se(o, r, f == null ? void 0 : f.className, h, y, S, cy(h, e), {
    [`${h}-rtl`]: v === "rtl",
    [`${h}-gap-${a}`]: tu(a),
    [`${h}-vertical`]: p
  }), b = Object.assign(Object.assign({}, f == null ? void 0 : f.style), i);
  return s && (b.flex = s), a && !tu(a) && (b.gap = a), x(/* @__PURE__ */ q.createElement(u, Object.assign({
    ref: t,
    className: E,
    style: b
  }, t0(d, ["justify", "wrap", "align"])), c));
});
process.env.NODE_ENV !== "production" && (m0.displayName = "Flex");
const Ko = 100, v0 = Ko / 5, b0 = Ko / 2 - v0 / 2, ws = b0 * 2 * Math.PI, nu = 50, ru = (e) => {
  const {
    dotClassName: t,
    style: n,
    hasCircleCls: r
  } = e;
  return /* @__PURE__ */ w.createElement("circle", {
    className: Se(`${t}-circle`, {
      [`${t}-circle-bg`]: r
    }),
    r: b0,
    cx: nu,
    cy: nu,
    strokeWidth: v0,
    style: n
  });
}, my = (e) => {
  let {
    percent: t,
    prefixCls: n
  } = e;
  const r = `${n}-dot`, o = `${r}-holder`, i = `${o}-hidden`, [s, a] = w.useState(!1);
  ic(() => {
    t !== 0 && a(!0);
  }, [t !== 0]);
  const c = Math.max(Math.min(t, 100), 0);
  if (!s)
    return null;
  const l = {
    strokeDashoffset: `${ws / 4}`,
    strokeDasharray: `${ws * c / 100} ${ws * (100 - c) / 100}`
  };
  return /* @__PURE__ */ w.createElement("span", {
    className: Se(o, `${r}-progress`, c <= 0 && i)
  }, /* @__PURE__ */ w.createElement("svg", {
    viewBox: `0 0 ${Ko} ${Ko}`,
    // biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole: progressbar could be readonly
    role: "progressbar",
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": c
  }, /* @__PURE__ */ w.createElement(ru, {
    dotClassName: r,
    hasCircleCls: !0
  }), /* @__PURE__ */ w.createElement(ru, {
    dotClassName: r,
    style: l
  })));
};
function vy(e) {
  const {
    prefixCls: t,
    percent: n = 0
  } = e, r = `${t}-dot`, o = `${r}-holder`, i = `${o}-hidden`;
  return /* @__PURE__ */ w.createElement(w.Fragment, null, /* @__PURE__ */ w.createElement("span", {
    className: Se(o, n > 0 && i)
  }, /* @__PURE__ */ w.createElement("span", {
    className: Se(r, `${t}-dot-spin`)
  }, [1, 2, 3, 4].map((s) => /* @__PURE__ */ w.createElement("i", {
    className: `${t}-dot-item`,
    key: s
  })))), /* @__PURE__ */ w.createElement(my, {
    prefixCls: t,
    percent: n
  }));
}
function by(e) {
  const {
    prefixCls: t,
    indicator: n,
    percent: r
  } = e, o = `${t}-dot`;
  return n && /* @__PURE__ */ w.isValidElement(n) ? xc(n, {
    className: Se(n.props.className, o),
    percent: r
  }) : /* @__PURE__ */ w.createElement(vy, {
    prefixCls: t,
    percent: r
  });
}
const yy = new cd("antSpinMove", {
  to: {
    opacity: 1
  }
}), Sy = new cd("antRotate", {
  to: {
    transform: "rotate(405deg)"
  }
}), Cy = (e) => {
  const {
    componentCls: t,
    calc: n
  } = e;
  return {
    [t]: Object.assign(Object.assign({}, Ad(e)), {
      position: "absolute",
      display: "none",
      color: e.colorPrimary,
      fontSize: 0,
      textAlign: "center",
      verticalAlign: "middle",
      opacity: 0,
      transition: `transform ${e.motionDurationSlow} ${e.motionEaseInOutCirc}`,
      "&-spinning": {
        position: "relative",
        display: "inline-block",
        opacity: 1
      },
      [`${t}-text`]: {
        fontSize: e.fontSize,
        paddingTop: n(n(e.dotSize).sub(e.fontSize)).div(2).add(2).equal()
      },
      "&-fullscreen": {
        position: "fixed",
        width: "100vw",
        height: "100vh",
        backgroundColor: e.colorBgMask,
        zIndex: e.zIndexPopupBase,
        inset: 0,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        opacity: 0,
        visibility: "hidden",
        transition: `all ${e.motionDurationMid}`,
        "&-show": {
          opacity: 1,
          visibility: "visible"
        },
        [t]: {
          [`${t}-dot-holder`]: {
            color: e.colorWhite
          },
          [`${t}-text`]: {
            color: e.colorTextLightSolid
          }
        }
      },
      "&-nested-loading": {
        position: "relative",
        [`> div > ${t}`]: {
          position: "absolute",
          top: 0,
          insetInlineStart: 0,
          zIndex: 4,
          display: "block",
          width: "100%",
          height: "100%",
          maxHeight: e.contentHeight,
          [`${t}-dot`]: {
            position: "absolute",
            top: "50%",
            insetInlineStart: "50%",
            margin: n(e.dotSize).mul(-1).div(2).equal()
          },
          [`${t}-text`]: {
            position: "absolute",
            top: "50%",
            width: "100%",
            textShadow: `0 1px 2px ${e.colorBgContainer}`
            // FIXME: shadow
          },
          [`&${t}-show-text ${t}-dot`]: {
            marginTop: n(e.dotSize).div(2).mul(-1).sub(10).equal()
          },
          "&-sm": {
            [`${t}-dot`]: {
              margin: n(e.dotSizeSM).mul(-1).div(2).equal()
            },
            [`${t}-text`]: {
              paddingTop: n(n(e.dotSizeSM).sub(e.fontSize)).div(2).add(2).equal()
            },
            [`&${t}-show-text ${t}-dot`]: {
              marginTop: n(e.dotSizeSM).div(2).mul(-1).sub(10).equal()
            }
          },
          "&-lg": {
            [`${t}-dot`]: {
              margin: n(e.dotSizeLG).mul(-1).div(2).equal()
            },
            [`${t}-text`]: {
              paddingTop: n(n(e.dotSizeLG).sub(e.fontSize)).div(2).add(2).equal()
            },
            [`&${t}-show-text ${t}-dot`]: {
              marginTop: n(e.dotSizeLG).div(2).mul(-1).sub(10).equal()
            }
          }
        },
        [`${t}-container`]: {
          position: "relative",
          transition: `opacity ${e.motionDurationSlow}`,
          "&::after": {
            position: "absolute",
            top: 0,
            insetInlineEnd: 0,
            bottom: 0,
            insetInlineStart: 0,
            zIndex: 10,
            width: "100%",
            height: "100%",
            background: e.colorBgContainer,
            opacity: 0,
            transition: `all ${e.motionDurationSlow}`,
            content: '""',
            pointerEvents: "none"
          }
        },
        [`${t}-blur`]: {
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
        color: e.spinDotDefault
      },
      // holder
      // ------------------------------
      [`${t}-dot-holder`]: {
        width: "1em",
        height: "1em",
        fontSize: e.dotSize,
        display: "inline-block",
        transition: `transform ${e.motionDurationSlow} ease, opacity ${e.motionDurationSlow} ease`,
        transformOrigin: "50% 50%",
        lineHeight: 1,
        color: e.colorPrimary,
        "&-hidden": {
          transform: "scale(0.3)",
          opacity: 0
        }
      },
      // progress
      // ------------------------------
      [`${t}-dot-progress`]: {
        position: "absolute",
        inset: 0
      },
      // dots
      // ------------------------------
      [`${t}-dot`]: {
        position: "relative",
        display: "inline-block",
        fontSize: e.dotSize,
        width: "1em",
        height: "1em",
        "&-item": {
          position: "absolute",
          display: "block",
          width: n(e.dotSize).sub(n(e.marginXXS).div(2)).div(2).equal(),
          height: n(e.dotSize).sub(n(e.marginXXS).div(2)).div(2).equal(),
          background: "currentColor",
          borderRadius: "100%",
          transform: "scale(0.75)",
          transformOrigin: "50% 50%",
          opacity: 0.3,
          animationName: yy,
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
          animationName: Sy,
          animationDuration: "1.2s",
          animationIterationCount: "infinite",
          animationTimingFunction: "linear"
        },
        "&-circle": {
          strokeLinecap: "round",
          transition: ["stroke-dashoffset", "stroke-dasharray", "stroke", "stroke-width", "opacity"].map((r) => `${r} ${e.motionDurationSlow} ease`).join(","),
          fillOpacity: 0,
          stroke: "currentcolor"
        },
        "&-circle-bg": {
          stroke: e.colorFillSecondary
        }
      },
      // small
      [`&-sm ${t}-dot`]: {
        "&, &-holder": {
          fontSize: e.dotSizeSM
        }
      },
      [`&-sm ${t}-dot-holder`]: {
        i: {
          width: n(n(e.dotSizeSM).sub(n(e.marginXXS).div(2))).div(2).equal(),
          height: n(n(e.dotSizeSM).sub(n(e.marginXXS).div(2))).div(2).equal()
        }
      },
      // large
      [`&-lg ${t}-dot`]: {
        "&, &-holder": {
          fontSize: e.dotSizeLG
        }
      },
      [`&-lg ${t}-dot-holder`]: {
        i: {
          width: n(n(e.dotSizeLG).sub(e.marginXXS)).div(2).equal(),
          height: n(n(e.dotSizeLG).sub(e.marginXXS)).div(2).equal()
        }
      },
      [`&${t}-show-text ${t}-text`]: {
        display: "block"
      }
    })
  };
}, wy = (e) => {
  const {
    controlHeightLG: t,
    controlHeight: n
  } = e;
  return {
    contentHeight: 400,
    dotSize: t / 2,
    dotSizeSM: t * 0.35,
    dotSizeLG: n
  };
}, Ey = Ti("Spin", (e) => {
  const t = dn(e, {
    spinDotDefault: e.colorTextDescription
  });
  return [Cy(t)];
}, wy), _y = 200, ou = [[30, 0.05], [70, 0.03], [96, 0.01]];
function Oy(e, t) {
  const [n, r] = w.useState(0), o = w.useRef(null), i = t === "auto";
  return w.useEffect(() => (i && e && (r(0), o.current = setInterval(() => {
    r((s) => {
      const a = 100 - s;
      for (let c = 0; c < ou.length; c += 1) {
        const [l, u] = ou[c];
        if (s <= l)
          return s + a * u;
      }
      return s;
    });
  }, _y)), () => {
    clearInterval(o.current);
  }), [i, e]), i ? n : t;
}
var Ay = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
let y0;
function Ty(e, t) {
  return !!e && !!t && !Number.isNaN(Number(t));
}
const Nr = (e) => {
  var t;
  const {
    prefixCls: n,
    spinning: r = !0,
    delay: o = 0,
    className: i,
    rootClassName: s,
    size: a = "default",
    tip: c,
    wrapperClassName: l,
    style: u,
    children: d,
    fullscreen: f = !1,
    indicator: v,
    percent: g
  } = e, h = Ay(e, ["prefixCls", "spinning", "delay", "className", "rootClassName", "size", "tip", "wrapperClassName", "style", "children", "fullscreen", "indicator", "percent"]), {
    getPrefixCls: x,
    direction: y,
    className: S,
    style: p,
    indicator: E
  } = dc("spin"), b = x("spin", n), [T, O, k] = Ey(b), [F, G] = w.useState(() => r && !Ty(r, o)), oe = Oy(F, g);
  w.useEffect(() => {
    if (r) {
      const P = oy(o, () => {
        G(!0);
      });
      return P(), () => {
        var j;
        (j = P == null ? void 0 : P.cancel) === null || j === void 0 || j.call(P);
      };
    }
    G(!1);
  }, [o, r]);
  const te = w.useMemo(() => typeof d < "u" && !f, [d, f]);
  if (process.env.NODE_ENV !== "production") {
    const P = fn("Spin");
    process.env.NODE_ENV !== "production" && P(!c || te || f, "usage", "`tip` only work in nest or fullscreen pattern.");
  }
  const H = Se(b, S, {
    [`${b}-sm`]: a === "small",
    [`${b}-lg`]: a === "large",
    [`${b}-spinning`]: F,
    [`${b}-show-text`]: !!c,
    [`${b}-rtl`]: y === "rtl"
  }, i, !f && s, O, k), X = Se(`${b}-container`, {
    [`${b}-blur`]: F
  }), Q = (t = v ?? E) !== null && t !== void 0 ? t : y0, N = Object.assign(Object.assign({}, p), u), R = /* @__PURE__ */ w.createElement("div", Object.assign({}, h, {
    style: N,
    className: H,
    "aria-live": "polite",
    "aria-busy": F
  }), /* @__PURE__ */ w.createElement(by, {
    prefixCls: b,
    indicator: Q,
    percent: oe
  }), c && (te || f) ? /* @__PURE__ */ w.createElement("div", {
    className: `${b}-text`
  }, c) : null);
  return T(te ? /* @__PURE__ */ w.createElement("div", Object.assign({}, h, {
    className: Se(`${b}-nested-loading`, l, O, k)
  }), F && /* @__PURE__ */ w.createElement("div", {
    key: "loading"
  }, R), /* @__PURE__ */ w.createElement("div", {
    className: X,
    key: "container"
  }, d)) : f ? /* @__PURE__ */ w.createElement("div", {
    className: Se(`${b}-fullscreen`, {
      [`${b}-fullscreen-show`]: F
    }, s, O, k)
  }, R) : R);
};
Nr.setDefaultIndicator = (e) => {
  y0 = e;
};
process.env.NODE_ENV !== "production" && (Nr.displayName = "Spin");
function S0(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Ry } = Object.prototype, { getPrototypeOf: vc } = Object, { iterator: zi, toStringTag: C0 } = Symbol, Hi = /* @__PURE__ */ ((e) => (t) => {
  const n = Ry.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Lt = (e) => (e = e.toLowerCase(), (t) => Hi(t) === e), Fi = (e) => (t) => typeof t === e, { isArray: dr } = Array, Hr = Fi("undefined");
function Py(e) {
  return e !== null && !Hr(e) && e.constructor !== null && !Hr(e.constructor) && mt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const w0 = Lt("ArrayBuffer");
function Iy(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && w0(e.buffer), t;
}
const Ny = Fi("string"), mt = Fi("function"), E0 = Fi("number"), $i = (e) => e !== null && typeof e == "object", ky = (e) => e === !0 || e === !1, Lo = (e) => {
  if (Hi(e) !== "object")
    return !1;
  const t = vc(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(C0 in e) && !(zi in e);
}, jy = Lt("Date"), Ly = Lt("File"), My = Lt("Blob"), Dy = Lt("FileList"), By = (e) => $i(e) && mt(e.pipe), zy = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || mt(e.append) && ((t = Hi(e)) === "formdata" || // detect form-data instance
  t === "object" && mt(e.toString) && e.toString() === "[object FormData]"));
}, Hy = Lt("URLSearchParams"), [Fy, $y, Vy, Wy] = ["ReadableStream", "Request", "Response", "Headers"].map(Lt), qy = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Yr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), dr(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), s = i.length;
    let a;
    for (r = 0; r < s; r++)
      a = i[r], t.call(null, e[a], a, e);
  }
}
function _0(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const Sn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, O0 = (e) => !Hr(e) && e !== Sn;
function Pa() {
  const { caseless: e } = O0(this) && this || {}, t = {}, n = (r, o) => {
    const i = e && _0(t, o) || o;
    Lo(t[i]) && Lo(r) ? t[i] = Pa(t[i], r) : Lo(r) ? t[i] = Pa({}, r) : dr(r) ? t[i] = r.slice() : t[i] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Yr(arguments[r], n);
  return t;
}
const Uy = (e, t, n, { allOwnKeys: r } = {}) => (Yr(t, (o, i) => {
  n && mt(o) ? e[i] = S0(o, n) : e[i] = o;
}, { allOwnKeys: r }), e), Gy = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Yy = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Xy = (e, t, n, r) => {
  let o, i, s;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      s = o[i], (!r || r(s, e, t)) && !a[s] && (t[s] = e[s], a[s] = !0);
    e = n !== !1 && vc(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Ky = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Zy = (e) => {
  if (!e) return null;
  if (dr(e)) return e;
  let t = e.length;
  if (!E0(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Jy = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && vc(Uint8Array)), Qy = (e, t) => {
  const r = (e && e[zi]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const i = o.value;
    t.call(e, i[0], i[1]);
  }
}, e2 = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, t2 = Lt("HTMLFormElement"), n2 = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), iu = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), r2 = Lt("RegExp"), A0 = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Yr(n, (o, i) => {
    let s;
    (s = t(o, i, e)) !== !1 && (r[i] = s || o);
  }), Object.defineProperties(e, r);
}, o2 = (e) => {
  A0(e, (t, n) => {
    if (mt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (mt(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, i2 = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((i) => {
      n[i] = !0;
    });
  };
  return dr(e) ? r(e) : r(String(e).split(t)), n;
}, s2 = () => {
}, a2 = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function c2(e) {
  return !!(e && mt(e.append) && e[C0] === "FormData" && e[zi]);
}
const l2 = (e) => {
  const t = new Array(10), n = (r, o) => {
    if ($i(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[o] = r;
        const i = dr(r) ? [] : {};
        return Yr(r, (s, a) => {
          const c = n(s, o + 1);
          !Hr(c) && (i[a] = c);
        }), t[o] = void 0, i;
      }
    }
    return r;
  };
  return n(e, 0);
}, u2 = Lt("AsyncFunction"), f2 = (e) => e && ($i(e) || mt(e)) && mt(e.then) && mt(e.catch), T0 = ((e, t) => e ? setImmediate : t ? ((n, r) => (Sn.addEventListener("message", ({ source: o, data: i }) => {
  o === Sn && i === n && r.length && r.shift()();
}, !1), (o) => {
  r.push(o), Sn.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  mt(Sn.postMessage)
), d2 = typeof queueMicrotask < "u" ? queueMicrotask.bind(Sn) : typeof process < "u" && process.nextTick || T0, h2 = (e) => e != null && mt(e[zi]), I = {
  isArray: dr,
  isArrayBuffer: w0,
  isBuffer: Py,
  isFormData: zy,
  isArrayBufferView: Iy,
  isString: Ny,
  isNumber: E0,
  isBoolean: ky,
  isObject: $i,
  isPlainObject: Lo,
  isReadableStream: Fy,
  isRequest: $y,
  isResponse: Vy,
  isHeaders: Wy,
  isUndefined: Hr,
  isDate: jy,
  isFile: Ly,
  isBlob: My,
  isRegExp: r2,
  isFunction: mt,
  isStream: By,
  isURLSearchParams: Hy,
  isTypedArray: Jy,
  isFileList: Dy,
  forEach: Yr,
  merge: Pa,
  extend: Uy,
  trim: qy,
  stripBOM: Gy,
  inherits: Yy,
  toFlatObject: Xy,
  kindOf: Hi,
  kindOfTest: Lt,
  endsWith: Ky,
  toArray: Zy,
  forEachEntry: Qy,
  matchAll: e2,
  isHTMLForm: t2,
  hasOwnProperty: iu,
  hasOwnProp: iu,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: A0,
  freezeMethods: o2,
  toObjectSet: i2,
  toCamelCase: n2,
  noop: s2,
  toFiniteNumber: a2,
  findKey: _0,
  global: Sn,
  isContextDefined: O0,
  isSpecCompliantForm: c2,
  toJSONObject: l2,
  isAsyncFn: u2,
  isThenable: f2,
  setImmediate: T0,
  asap: d2,
  isIterable: h2
};
function fe(e, t, n, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o, this.status = o.status ? o.status : null);
}
I.inherits(fe, Error, {
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
      config: I.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const R0 = fe.prototype, P0 = {};
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
].forEach((e) => {
  P0[e] = { value: e };
});
Object.defineProperties(fe, P0);
Object.defineProperty(R0, "isAxiosError", { value: !0 });
fe.from = (e, t, n, r, o, i) => {
  const s = Object.create(R0);
  return I.toFlatObject(e, s, function(c) {
    return c !== Error.prototype;
  }, (a) => a !== "isAxiosError"), fe.call(s, e.message, t, n, r, o), s.cause = e, s.name = e.name, i && Object.assign(s, i), s;
};
const p2 = null;
function Ia(e) {
  return I.isPlainObject(e) || I.isArray(e);
}
function I0(e) {
  return I.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function su(e, t, n) {
  return e ? e.concat(t).map(function(o, i) {
    return o = I0(o), !n && i ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function x2(e) {
  return I.isArray(e) && !e.some(Ia);
}
const g2 = I.toFlatObject(I, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Vi(e, t, n) {
  if (!I.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = I.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(h, x) {
    return !I.isUndefined(x[h]);
  });
  const r = n.metaTokens, o = n.visitor || u, i = n.dots, s = n.indexes, c = (n.Blob || typeof Blob < "u" && Blob) && I.isSpecCompliantForm(t);
  if (!I.isFunction(o))
    throw new TypeError("visitor must be a function");
  function l(g) {
    if (g === null) return "";
    if (I.isDate(g))
      return g.toISOString();
    if (!c && I.isBlob(g))
      throw new fe("Blob is not supported. Use a Buffer instead.");
    return I.isArrayBuffer(g) || I.isTypedArray(g) ? c && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function u(g, h, x) {
    let y = g;
    if (g && !x && typeof g == "object") {
      if (I.endsWith(h, "{}"))
        h = r ? h : h.slice(0, -2), g = JSON.stringify(g);
      else if (I.isArray(g) && x2(g) || (I.isFileList(g) || I.endsWith(h, "[]")) && (y = I.toArray(g)))
        return h = I0(h), y.forEach(function(p, E) {
          !(I.isUndefined(p) || p === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? su([h], E, i) : s === null ? h : h + "[]",
            l(p)
          );
        }), !1;
    }
    return Ia(g) ? !0 : (t.append(su(x, h, i), l(g)), !1);
  }
  const d = [], f = Object.assign(g2, {
    defaultVisitor: u,
    convertValue: l,
    isVisitable: Ia
  });
  function v(g, h) {
    if (!I.isUndefined(g)) {
      if (d.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      d.push(g), I.forEach(g, function(y, S) {
        (!(I.isUndefined(y) || y === null) && o.call(
          t,
          y,
          I.isString(S) ? S.trim() : S,
          h,
          f
        )) === !0 && v(y, h ? h.concat(S) : [S]);
      }), d.pop();
    }
  }
  if (!I.isObject(e))
    throw new TypeError("data must be an object");
  return v(e), t;
}
function au(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function bc(e, t) {
  this._pairs = [], e && Vi(e, this, t);
}
const N0 = bc.prototype;
N0.append = function(t, n) {
  this._pairs.push([t, n]);
};
N0.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, au);
  } : au;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function m2(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function k0(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || m2;
  I.isFunction(n) && (n = {
    serialize: n
  });
  const o = n && n.serialize;
  let i;
  if (o ? i = o(t, n) : i = I.isURLSearchParams(t) ? t.toString() : new bc(t, n).toString(r), i) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class cu {
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
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
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
  forEach(t) {
    I.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const j0 = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, v2 = typeof URLSearchParams < "u" ? URLSearchParams : bc, b2 = typeof FormData < "u" ? FormData : null, y2 = typeof Blob < "u" ? Blob : null, S2 = {
  isBrowser: !0,
  classes: {
    URLSearchParams: v2,
    FormData: b2,
    Blob: y2
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, yc = typeof window < "u" && typeof document < "u", Na = typeof navigator == "object" && navigator || void 0, C2 = yc && (!Na || ["ReactNative", "NativeScript", "NS"].indexOf(Na.product) < 0), w2 = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", E2 = yc && window.location.href || "http://localhost", _2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: yc,
  hasStandardBrowserEnv: C2,
  hasStandardBrowserWebWorkerEnv: w2,
  navigator: Na,
  origin: E2
}, Symbol.toStringTag, { value: "Module" })), lt = {
  ..._2,
  ...S2
};
function O2(e, t) {
  return Vi(e, new lt.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, i) {
      return lt.isNode && I.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function A2(e) {
  return I.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function T2(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++)
    i = n[r], t[i] = e[i];
  return t;
}
function L0(e) {
  function t(n, r, o, i) {
    let s = n[i++];
    if (s === "__proto__") return !0;
    const a = Number.isFinite(+s), c = i >= n.length;
    return s = !s && I.isArray(o) ? o.length : s, c ? (I.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !a) : ((!o[s] || !I.isObject(o[s])) && (o[s] = []), t(n, r, o[s], i) && I.isArray(o[s]) && (o[s] = T2(o[s])), !a);
  }
  if (I.isFormData(e) && I.isFunction(e.entries)) {
    const n = {};
    return I.forEachEntry(e, (r, o) => {
      t(A2(r), o, n, 0);
    }), n;
  }
  return null;
}
function R2(e, t, n) {
  if (I.isString(e))
    try {
      return (t || JSON.parse)(e), I.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Xr = {
  transitional: j0,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, i = I.isObject(t);
    if (i && I.isHTMLForm(t) && (t = new FormData(t)), I.isFormData(t))
      return o ? JSON.stringify(L0(t)) : t;
    if (I.isArrayBuffer(t) || I.isBuffer(t) || I.isStream(t) || I.isFile(t) || I.isBlob(t) || I.isReadableStream(t))
      return t;
    if (I.isArrayBufferView(t))
      return t.buffer;
    if (I.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return O2(t, this.formSerializer).toString();
      if ((a = I.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return Vi(
          a ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return i || o ? (n.setContentType("application/json", !1), R2(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Xr.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (I.isResponse(t) || I.isReadableStream(t))
      return t;
    if (t && I.isString(t) && (r && !this.responseType || o)) {
      const s = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (s)
          throw a.name === "SyntaxError" ? fe.from(a, fe.ERR_BAD_RESPONSE, this, null, this.response) : a;
      }
    }
    return t;
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
    FormData: lt.classes.FormData,
    Blob: lt.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
I.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Xr.headers[e] = {};
});
const P2 = I.toObjectSet([
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
]), I2 = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), n = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!n || t[n] && P2[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, lu = Symbol("internals");
function wr(e) {
  return e && String(e).trim().toLowerCase();
}
function Mo(e) {
  return e === !1 || e == null ? e : I.isArray(e) ? e.map(Mo) : String(e);
}
function N2(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const k2 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Es(e, t, n, r, o) {
  if (I.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!I.isString(t)) {
    if (I.isString(r))
      return t.indexOf(r) !== -1;
    if (I.isRegExp(r))
      return r.test(t);
  }
}
function j2(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function L2(e, t) {
  const n = I.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(o, i, s) {
        return this[r].call(this, t, o, i, s);
      },
      configurable: !0
    });
  });
}
let vt = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function i(a, c, l) {
      const u = wr(c);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = I.findKey(o, u);
      (!d || o[d] === void 0 || l === !0 || l === void 0 && o[d] !== !1) && (o[d || c] = Mo(a));
    }
    const s = (a, c) => I.forEach(a, (l, u) => i(l, u, c));
    if (I.isPlainObject(t) || t instanceof this.constructor)
      s(t, n);
    else if (I.isString(t) && (t = t.trim()) && !k2(t))
      s(I2(t), n);
    else if (I.isObject(t) && I.isIterable(t)) {
      let a = {}, c, l;
      for (const u of t) {
        if (!I.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        a[l = u[0]] = (c = a[l]) ? I.isArray(c) ? [...c, u[1]] : [c, u[1]] : u[1];
      }
      s(a, n);
    } else
      t != null && i(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = wr(t), t) {
      const r = I.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return N2(o);
        if (I.isFunction(n))
          return n.call(this, o, r);
        if (I.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = wr(t), t) {
      const r = I.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Es(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(s) {
      if (s = wr(s), s) {
        const a = I.findKey(r, s);
        a && (!n || Es(r, r[a], a, n)) && (delete r[a], o = !0);
      }
    }
    return I.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || Es(this, this[i], i, t, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return I.forEach(this, (o, i) => {
      const s = I.findKey(r, i);
      if (s) {
        n[s] = Mo(o), delete n[i];
        return;
      }
      const a = t ? j2(i) : String(i).trim();
      a !== i && delete n[i], n[a] = Mo(o), r[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return I.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = t && I.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[lu] = this[lu] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(s) {
      const a = wr(s);
      r[a] || (L2(o, s), r[a] = !0);
    }
    return I.isArray(t) ? t.forEach(i) : i(t), this;
  }
};
vt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
I.reduceDescriptors(vt.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
I.freezeMethods(vt);
function _s(e, t) {
  const n = this || Xr, r = t || n, o = vt.from(r.headers);
  let i = r.data;
  return I.forEach(e, function(a) {
    i = a.call(n, i, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), i;
}
function M0(e) {
  return !!(e && e.__CANCEL__);
}
function hr(e, t, n) {
  fe.call(this, e ?? "canceled", fe.ERR_CANCELED, t, n), this.name = "CanceledError";
}
I.inherits(hr, fe, {
  __CANCEL__: !0
});
function D0(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new fe(
    "Request failed with status code " + n.status,
    [fe.ERR_BAD_REQUEST, fe.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function M2(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function D2(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let o = 0, i = 0, s;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const l = Date.now(), u = r[i];
    s || (s = l), n[o] = c, r[o] = l;
    let d = i, f = 0;
    for (; d !== o; )
      f += n[d++], d = d % e;
    if (o = (o + 1) % e, o === i && (i = (i + 1) % e), l - s < t)
      return;
    const v = u && l - u;
    return v ? Math.round(f * 1e3 / v) : void 0;
  };
}
function B2(e, t) {
  let n = 0, r = 1e3 / t, o, i;
  const s = (l, u = Date.now()) => {
    n = u, o = null, i && (clearTimeout(i), i = null), e.apply(null, l);
  };
  return [(...l) => {
    const u = Date.now(), d = u - n;
    d >= r ? s(l, u) : (o = l, i || (i = setTimeout(() => {
      i = null, s(o);
    }, r - d)));
  }, () => o && s(o)];
}
const Zo = (e, t, n = 3) => {
  let r = 0;
  const o = D2(50, 250);
  return B2((i) => {
    const s = i.loaded, a = i.lengthComputable ? i.total : void 0, c = s - r, l = o(c), u = s <= a;
    r = s;
    const d = {
      loaded: s,
      total: a,
      progress: a ? s / a : void 0,
      bytes: c,
      rate: l || void 0,
      estimated: l && a && u ? (a - s) / l : void 0,
      event: i,
      lengthComputable: a != null,
      [t ? "download" : "upload"]: !0
    };
    e(d);
  }, n);
}, uu = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, fu = (e) => (...t) => I.asap(() => e(...t)), z2 = lt.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, lt.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(lt.origin),
  lt.navigator && /(msie|trident)/i.test(lt.navigator.userAgent)
) : () => !0, H2 = lt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, o, i) {
      const s = [e + "=" + encodeURIComponent(t)];
      I.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), I.isString(r) && s.push("path=" + r), I.isString(o) && s.push("domain=" + o), i === !0 && s.push("secure"), document.cookie = s.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
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
function F2(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function $2(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function B0(e, t, n) {
  let r = !F2(t);
  return e && (r || n == !1) ? $2(e, t) : t;
}
const du = (e) => e instanceof vt ? { ...e } : e;
function In(e, t) {
  t = t || {};
  const n = {};
  function r(l, u, d, f) {
    return I.isPlainObject(l) && I.isPlainObject(u) ? I.merge.call({ caseless: f }, l, u) : I.isPlainObject(u) ? I.merge({}, u) : I.isArray(u) ? u.slice() : u;
  }
  function o(l, u, d, f) {
    if (I.isUndefined(u)) {
      if (!I.isUndefined(l))
        return r(void 0, l, d, f);
    } else return r(l, u, d, f);
  }
  function i(l, u) {
    if (!I.isUndefined(u))
      return r(void 0, u);
  }
  function s(l, u) {
    if (I.isUndefined(u)) {
      if (!I.isUndefined(l))
        return r(void 0, l);
    } else return r(void 0, u);
  }
  function a(l, u, d) {
    if (d in t)
      return r(l, u);
    if (d in e)
      return r(void 0, l);
  }
  const c = {
    url: i,
    method: i,
    data: i,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: a,
    headers: (l, u, d) => o(du(l), du(u), d, !0)
  };
  return I.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const d = c[u] || o, f = d(e[u], t[u], u);
    I.isUndefined(f) && d !== a || (n[u] = f);
  }), n;
}
const z0 = (e) => {
  const t = In({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: i, headers: s, auth: a } = t;
  t.headers = s = vt.from(s), t.url = k0(B0(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), a && s.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let c;
  if (I.isFormData(n)) {
    if (lt.hasStandardBrowserEnv || lt.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if ((c = s.getContentType()) !== !1) {
      const [l, ...u] = c ? c.split(";").map((d) => d.trim()).filter(Boolean) : [];
      s.setContentType([l || "multipart/form-data", ...u].join("; "));
    }
  }
  if (lt.hasStandardBrowserEnv && (r && I.isFunction(r) && (r = r(t)), r || r !== !1 && z2(t.url))) {
    const l = o && i && H2.read(i);
    l && s.set(o, l);
  }
  return t;
}, V2 = typeof XMLHttpRequest < "u", W2 = V2 && function(e) {
  return new Promise(function(n, r) {
    const o = z0(e);
    let i = o.data;
    const s = vt.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: c, onDownloadProgress: l } = o, u, d, f, v, g;
    function h() {
      v && v(), g && g(), o.cancelToken && o.cancelToken.unsubscribe(u), o.signal && o.signal.removeEventListener("abort", u);
    }
    let x = new XMLHttpRequest();
    x.open(o.method.toUpperCase(), o.url, !0), x.timeout = o.timeout;
    function y() {
      if (!x)
        return;
      const p = vt.from(
        "getAllResponseHeaders" in x && x.getAllResponseHeaders()
      ), b = {
        data: !a || a === "text" || a === "json" ? x.responseText : x.response,
        status: x.status,
        statusText: x.statusText,
        headers: p,
        config: e,
        request: x
      };
      D0(function(O) {
        n(O), h();
      }, function(O) {
        r(O), h();
      }, b), x = null;
    }
    "onloadend" in x ? x.onloadend = y : x.onreadystatechange = function() {
      !x || x.readyState !== 4 || x.status === 0 && !(x.responseURL && x.responseURL.indexOf("file:") === 0) || setTimeout(y);
    }, x.onabort = function() {
      x && (r(new fe("Request aborted", fe.ECONNABORTED, e, x)), x = null);
    }, x.onerror = function() {
      r(new fe("Network Error", fe.ERR_NETWORK, e, x)), x = null;
    }, x.ontimeout = function() {
      let E = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const b = o.transitional || j0;
      o.timeoutErrorMessage && (E = o.timeoutErrorMessage), r(new fe(
        E,
        b.clarifyTimeoutError ? fe.ETIMEDOUT : fe.ECONNABORTED,
        e,
        x
      )), x = null;
    }, i === void 0 && s.setContentType(null), "setRequestHeader" in x && I.forEach(s.toJSON(), function(E, b) {
      x.setRequestHeader(b, E);
    }), I.isUndefined(o.withCredentials) || (x.withCredentials = !!o.withCredentials), a && a !== "json" && (x.responseType = o.responseType), l && ([f, g] = Zo(l, !0), x.addEventListener("progress", f)), c && x.upload && ([d, v] = Zo(c), x.upload.addEventListener("progress", d), x.upload.addEventListener("loadend", v)), (o.cancelToken || o.signal) && (u = (p) => {
      x && (r(!p || p.type ? new hr(null, e, x) : p), x.abort(), x = null);
    }, o.cancelToken && o.cancelToken.subscribe(u), o.signal && (o.signal.aborted ? u() : o.signal.addEventListener("abort", u)));
    const S = M2(o.url);
    if (S && lt.protocols.indexOf(S) === -1) {
      r(new fe("Unsupported protocol " + S + ":", fe.ERR_BAD_REQUEST, e));
      return;
    }
    x.send(i || null);
  });
}, q2 = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), o;
    const i = function(l) {
      if (!o) {
        o = !0, a();
        const u = l instanceof Error ? l : this.reason;
        r.abort(u instanceof fe ? u : new hr(u instanceof Error ? u.message : u));
      }
    };
    let s = t && setTimeout(() => {
      s = null, i(new fe(`timeout ${t} of ms exceeded`, fe.ETIMEDOUT));
    }, t);
    const a = () => {
      e && (s && clearTimeout(s), s = null, e.forEach((l) => {
        l.unsubscribe ? l.unsubscribe(i) : l.removeEventListener("abort", i);
      }), e = null);
    };
    e.forEach((l) => l.addEventListener("abort", i));
    const { signal: c } = r;
    return c.unsubscribe = () => I.asap(a), c;
  }
}, U2 = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < n; )
    o = r + t, yield e.slice(r, o), r = o;
}, G2 = async function* (e, t) {
  for await (const n of Y2(e))
    yield* U2(n, t);
}, Y2 = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await t.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await t.cancel();
  }
}, hu = (e, t, n, r) => {
  const o = G2(e, t);
  let i = 0, s, a = (c) => {
    s || (s = !0, r && r(c));
  };
  return new ReadableStream({
    async pull(c) {
      try {
        const { done: l, value: u } = await o.next();
        if (l) {
          a(), c.close();
          return;
        }
        let d = u.byteLength;
        if (n) {
          let f = i += d;
          n(f);
        }
        c.enqueue(new Uint8Array(u));
      } catch (l) {
        throw a(l), l;
      }
    },
    cancel(c) {
      return a(c), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, Wi = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", H0 = Wi && typeof ReadableStream == "function", X2 = Wi && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), F0 = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, K2 = H0 && F0(() => {
  let e = !1;
  const t = new Request(lt.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), pu = 64 * 1024, ka = H0 && F0(() => I.isReadableStream(new Response("").body)), Jo = {
  stream: ka && ((e) => e.body)
};
Wi && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Jo[t] && (Jo[t] = I.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new fe(`Response type '${t}' is not supported`, fe.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Z2 = async (e) => {
  if (e == null)
    return 0;
  if (I.isBlob(e))
    return e.size;
  if (I.isSpecCompliantForm(e))
    return (await new Request(lt.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (I.isArrayBufferView(e) || I.isArrayBuffer(e))
    return e.byteLength;
  if (I.isURLSearchParams(e) && (e = e + ""), I.isString(e))
    return (await X2(e)).byteLength;
}, J2 = async (e, t) => {
  const n = I.toFiniteNumber(e.getContentLength());
  return n ?? Z2(t);
}, Q2 = Wi && (async (e) => {
  let {
    url: t,
    method: n,
    data: r,
    signal: o,
    cancelToken: i,
    timeout: s,
    onDownloadProgress: a,
    onUploadProgress: c,
    responseType: l,
    headers: u,
    withCredentials: d = "same-origin",
    fetchOptions: f
  } = z0(e);
  l = l ? (l + "").toLowerCase() : "text";
  let v = q2([o, i && i.toAbortSignal()], s), g;
  const h = v && v.unsubscribe && (() => {
    v.unsubscribe();
  });
  let x;
  try {
    if (c && K2 && n !== "get" && n !== "head" && (x = await J2(u, r)) !== 0) {
      let b = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), T;
      if (I.isFormData(r) && (T = b.headers.get("content-type")) && u.setContentType(T), b.body) {
        const [O, k] = uu(
          x,
          Zo(fu(c))
        );
        r = hu(b.body, pu, O, k);
      }
    }
    I.isString(d) || (d = d ? "include" : "omit");
    const y = "credentials" in Request.prototype;
    g = new Request(t, {
      ...f,
      signal: v,
      method: n.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: y ? d : void 0
    });
    let S = await fetch(g);
    const p = ka && (l === "stream" || l === "response");
    if (ka && (a || p && h)) {
      const b = {};
      ["status", "statusText", "headers"].forEach((F) => {
        b[F] = S[F];
      });
      const T = I.toFiniteNumber(S.headers.get("content-length")), [O, k] = a && uu(
        T,
        Zo(fu(a), !0)
      ) || [];
      S = new Response(
        hu(S.body, pu, O, () => {
          k && k(), h && h();
        }),
        b
      );
    }
    l = l || "text";
    let E = await Jo[I.findKey(Jo, l) || "text"](S, e);
    return !p && h && h(), await new Promise((b, T) => {
      D0(b, T, {
        data: E,
        headers: vt.from(S.headers),
        status: S.status,
        statusText: S.statusText,
        config: e,
        request: g
      });
    });
  } catch (y) {
    throw h && h(), y && y.name === "TypeError" && /Load failed|fetch/i.test(y.message) ? Object.assign(
      new fe("Network Error", fe.ERR_NETWORK, e, g),
      {
        cause: y.cause || y
      }
    ) : fe.from(y, y && y.code, e, g);
  }
}), ja = {
  http: p2,
  xhr: W2,
  fetch: Q2
};
I.forEach(ja, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const xu = (e) => `- ${e}`, eS = (e) => I.isFunction(e) || e === null || e === !1, $0 = {
  getAdapter: (e) => {
    e = I.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const o = {};
    for (let i = 0; i < t; i++) {
      n = e[i];
      let s;
      if (r = n, !eS(n) && (r = ja[(s = String(n)).toLowerCase()], r === void 0))
        throw new fe(`Unknown adapter '${s}'`);
      if (r)
        break;
      o[s || "#" + i] = r;
    }
    if (!r) {
      const i = Object.entries(o).map(
        ([a, c]) => `adapter ${a} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let s = t ? i.length > 1 ? `since :
` + i.map(xu).join(`
`) : " " + xu(i[0]) : "as no adapter specified";
      throw new fe(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: ja
};
function Os(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new hr(null, e);
}
function gu(e) {
  return Os(e), e.headers = vt.from(e.headers), e.data = _s.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), $0.getAdapter(e.adapter || Xr.adapter)(e).then(function(r) {
    return Os(e), r.data = _s.call(
      e,
      e.transformResponse,
      r
    ), r.headers = vt.from(r.headers), r;
  }, function(r) {
    return M0(r) || (Os(e), r && r.response && (r.response.data = _s.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = vt.from(r.response.headers))), Promise.reject(r);
  });
}
const V0 = "1.9.0", qi = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  qi[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const mu = {};
qi.transitional = function(t, n, r) {
  function o(i, s) {
    return "[Axios v" + V0 + "] Transitional option '" + i + "'" + s + (r ? ". " + r : "");
  }
  return (i, s, a) => {
    if (t === !1)
      throw new fe(
        o(s, " has been removed" + (n ? " in " + n : "")),
        fe.ERR_DEPRECATED
      );
    return n && !mu[s] && (mu[s] = !0, console.warn(
      o(
        s,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(i, s, a) : !0;
  };
};
qi.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function tS(e, t, n) {
  if (typeof e != "object")
    throw new fe("options must be an object", fe.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o], s = t[i];
    if (s) {
      const a = e[i], c = a === void 0 || s(a, i, e);
      if (c !== !0)
        throw new fe("option " + i + " must be " + c, fe.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new fe("Unknown option " + i, fe.ERR_BAD_OPTION);
  }
}
const Do = {
  assertOptions: tS,
  validators: qi
}, Dt = Do.validators;
let Tn = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new cu(),
      response: new cu()
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
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let o = {};
        Error.captureStackTrace ? Error.captureStackTrace(o) : o = new Error();
        const i = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? i && !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + i) : r.stack = i;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = In(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 && Do.assertOptions(r, {
      silentJSONParsing: Dt.transitional(Dt.boolean),
      forcedJSONParsing: Dt.transitional(Dt.boolean),
      clarifyTimeoutError: Dt.transitional(Dt.boolean)
    }, !1), o != null && (I.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : Do.assertOptions(o, {
      encode: Dt.function,
      serialize: Dt.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Do.assertOptions(n, {
      baseUrl: Dt.spelling("baseURL"),
      withXsrfToken: Dt.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let s = i && I.merge(
      i.common,
      i[n.method]
    );
    i && I.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (g) => {
        delete i[g];
      }
    ), n.headers = vt.concat(s, i);
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function(h) {
      typeof h.runWhen == "function" && h.runWhen(n) === !1 || (c = c && h.synchronous, a.unshift(h.fulfilled, h.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(h) {
      l.push(h.fulfilled, h.rejected);
    });
    let u, d = 0, f;
    if (!c) {
      const g = [gu.bind(this), void 0];
      for (g.unshift.apply(g, a), g.push.apply(g, l), f = g.length, u = Promise.resolve(n); d < f; )
        u = u.then(g[d++], g[d++]);
      return u;
    }
    f = a.length;
    let v = n;
    for (d = 0; d < f; ) {
      const g = a[d++], h = a[d++];
      try {
        v = g(v);
      } catch (x) {
        h.call(this, x);
        break;
      }
    }
    try {
      u = gu.call(this, v);
    } catch (g) {
      return Promise.reject(g);
    }
    for (d = 0, f = l.length; d < f; )
      u = u.then(l[d++], l[d++]);
    return u;
  }
  getUri(t) {
    t = In(this.defaults, t);
    const n = B0(t.baseURL, t.url, t.allowAbsoluteUrls);
    return k0(n, t.params, t.paramsSerializer);
  }
};
I.forEach(["delete", "get", "head", "options"], function(t) {
  Tn.prototype[t] = function(n, r) {
    return this.request(In(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
I.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(i, s, a) {
      return this.request(In(a || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: s
      }));
    };
  }
  Tn.prototype[t] = n(), Tn.prototype[t + "Form"] = n(!0);
});
let nS = class W0 {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(i) {
      n = i;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; )
        r._listeners[i](o);
      r._listeners = null;
    }), this.promise.then = (o) => {
      let i;
      const s = new Promise((a) => {
        r.subscribe(a), i = a;
      }).then(o);
      return s.cancel = function() {
        r.unsubscribe(i);
      }, s;
    }, t(function(i, s, a) {
      r.reason || (r.reason = new hr(i, s, a), n(r.reason));
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
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (r) => {
      t.abort(r);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new W0(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
};
function rS(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function oS(e) {
  return I.isObject(e) && e.isAxiosError === !0;
}
const La = {
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
Object.entries(La).forEach(([e, t]) => {
  La[t] = e;
});
function q0(e) {
  const t = new Tn(e), n = S0(Tn.prototype.request, t);
  return I.extend(n, Tn.prototype, t, { allOwnKeys: !0 }), I.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return q0(In(e, o));
  }, n;
}
const Ue = q0(Xr);
Ue.Axios = Tn;
Ue.CanceledError = hr;
Ue.CancelToken = nS;
Ue.isCancel = M0;
Ue.VERSION = V0;
Ue.toFormData = Vi;
Ue.AxiosError = fe;
Ue.Cancel = Ue.CanceledError;
Ue.all = function(t) {
  return Promise.all(t);
};
Ue.spread = rS;
Ue.isAxiosError = oS;
Ue.mergeConfig = In;
Ue.AxiosHeaders = vt;
Ue.formToJSON = (e) => L0(I.isHTMLForm(e) ? new FormData(e) : e);
Ue.getAdapter = $0.getAdapter;
Ue.HttpStatusCode = La;
Ue.default = Ue;
const {
  Axios: TS,
  AxiosError: RS,
  CanceledError: PS,
  isCancel: IS,
  CancelToken: NS,
  VERSION: kS,
  all: jS,
  Cancel: LS,
  isAxiosError: MS,
  spread: DS,
  toFormData: BS,
  AxiosHeaders: zS,
  HttpStatusCode: HS,
  formToJSON: FS,
  getAdapter: $S,
  mergeConfig: VS
} = Ue, Xt = Qo;
(function(e, t) {
  const n = Qo, r = e();
  for (; ; )
    try {
      if (parseInt(n(209)) / 1 * (parseInt(n(196)) / 2) + -parseInt(n(207)) / 3 * (parseInt(n(221)) / 4) + parseInt(n(213)) / 5 + -parseInt(n(200)) / 6 + parseInt(n(199)) / 7 + -parseInt(n(205)) / 8 * (-parseInt(n(198)) / 9) + parseInt(n(202)) / 10 === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ei, 412205);
Xt(208) + Xt(206);
function Qo(e, t) {
  const n = ei();
  return Qo = function(r, o) {
    return r = r - 196, n[r];
  }, Qo(e, t);
}
Ue[Xt(203)][Xt(218) + Xt(223)] = !0;
const iS = async (e) => {
  var n, r, o, i;
  const t = Xt;
  try {
    return (await Ue(e))[t(211)];
  } catch (s) {
    throw ((r = (n = s[t(219)]) == null ? void 0 : n[t(211)]) == null ? void 0 : r[t(204)]) || ((i = (o = s[t(219)]) == null ? void 0 : o[t(211)]) == null ? void 0 : i[t(215)]) || s[t(204)];
  }
};
function ei() {
  const e = ["4572491bqcSya", "4180596JfYokE", "PATCH", "3531860dGbMoI", "defaults", "message", "64JbjaQC", "ient", "8247GxXSpP", "/api/v1/cl", "1DbkenW", "GET", "data", "PUT", "608400iAjBSB", "POST", "error", "DELETE", "n/json", "withCreden", "response", "applicatio", "1144Yjufii", "Content-Ty", "tials", "1301444jkCcIe", "params", "130932lukGJE"];
  return ei = function() {
    return e;
  }, ei();
}
const sS = {};
sS[Xt(222) + "pe"] = Xt(220) + Xt(217);
const ke = ni;
(function(e, t) {
  const n = ni, r = e();
  for (; ; )
    try {
      if (-parseInt(n(514)) / 1 + -parseInt(n(507)) / 2 + parseInt(n(512)) / 3 + parseInt(n(502)) / 4 * (-parseInt(n(506)) / 5) + parseInt(n(500)) / 6 + parseInt(n(504)) / 7 + parseInt(n(497)) / 8 === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ti, 202659);
const mn = {};
mn[ke(515)] = ke(508) + "E", mn[ke(496)] = ke(492), mn[ke(517)] = ke(505) + "N", mn[ke(511)] = ke(508) + "E", mn[ke(499)] = ke(492), mn[ke(503)] = ke(505) + "N";
const Et = mn, Ma = {};
Ma[ke(509)] = ke(492), Ma[ke(491)] = ke(505) + "N";
const aS = Ma, cS = ke(516), lS = ke(495), uS = ke(510) + ke(513), U0 = ke(493) + ke(501);
function ti() {
  const e = ["913920PUTtFA", "516700HWjJGj", "ACTION_MOV", "keyup", "keyBoardEv", "touchmove", "945780MtxKRF", "ent", "152564WgOxtV", "mousemove", "moveEvent", "mousedown", "fullscreen", "keydown", "ACTION_UP", "assistiveM", "shortcutEv", "wheelEvent", "mouseup", "3570472HdASFv", "Event", "touchend", "658044Jzykds", "enuHide", "8kvxTBo", "touchstart", "755286SVYNbq", "ACTION_DOW"];
  return ti = function() {
    return e;
  }, ti();
}
function ni(e, t) {
  const n = ti();
  return ni = function(r, o) {
    return r = r - 490, n[r];
  }, ni(e, t);
}
const Da = ke(494) + ke(513), fS = ke(490) + ke(498);
function ri() {
  const e = ["top", "PASTE_TEXT", "1411335AAceNS", "height", "35398KYKRWN", "KEYBOARD_T", "key", "clientX", "ODE", "5320732qPQFTE", "430323kZeRFK", "pageX", "ZbjNx", "YfhFg", "arrowup", "toLowerCas", "backspace", "max", "EXT", "MlWJA", "976773IKilhE", "HWUXg", "addEventLi", "removeEven", "eRvgK", "wiqhj", "left", "kmCGx", "deltaY", "current", "touch", "jGMBv", "readText", "10sdGNLz", "stener", "DjIjt", "VtBAz", "10KIDlOO", "RoDfA", "ASMnK", "arrowdown", "touchstart", "HCfTL", "type", "mousedown", "getBoundin", "touchmove", "EeJHh", "mouseup", "ault", "enter", "action", "mousemove", "gClientRec", "now", "repeat", "control", "yJsyR", "shiftKey", "capslock", "showMenu", "TFGMk", "clientY", "keyEvent", "INynZ", "width", "keydown", "meta_state", "preventDef", "touchend", "xvPfW", "YlUjI", "Anist", "ZPDGG", "wheelEvent", "offsetHeig", "jPwdT", "hcZBr", "focus", "sign", "arrowleft", "2841083gIYxPf", "tab", "kjhle", "offsetWidt", "16dxkrhN", "RCnjH", "shift", "toUpperCas", "keyAction", "arrowright", "kRZSE", "forEach", "mouse", "feUSK", "CBenQ", "passive", "AJWZX", "FIzcS", "touchEvent", "glyDR", "isDown", "yBynX", "pageY", "clipboard", "CNMqH", "ctrlKey", "COPY_TEXT", "typeKey", "2220024uNqNZP", "tListener", "uxfKD", "KEYBOARD_C", "includes"];
  return ri = function() {
    return e;
  }, ri();
}
function Cn(e, t) {
  const n = ri();
  return Cn = function(r, o) {
    return r = r - 165, n[r];
  }, Cn(e, t);
}
(function(e, t) {
  const n = Cn, r = e();
  for (; ; )
    try {
      if (parseInt(n(183)) / 1 + parseInt(n(177)) / 2 + parseInt(n(193)) / 3 + parseInt(n(182)) / 4 + parseInt(n(210)) / 5 * (-parseInt(n(168)) / 6) + -parseInt(n(254)) / 7 * (parseInt(n(258)) / 8) + parseInt(n(175)) / 9 * (parseInt(n(206)) / 10) === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ri, 708865);
const dS = ({ isMobile: e, assistive: t, onRemoteEvent: n, canvasContent: r, canvasRef: o }) => {
  const [i, s] = ft(!1), a = (d) => {
    const f = Cn;
    if (f(192) === f(194)) _0x1ee47b[f(167)] = f(171) + f(181), _0x27c248[f(179)] = 21;
    else {
      if (d[f(241) + f(222)](), !o[f(202)])
        return f(244) !== f(198), void 0;
      const v = o[f(202)], g = v[f(218) + f(226) + "t"]();
      let h = Et[d[f(216)]];
      if (t[f(274)] == !0 || t[f(233)] == !0) {
        h == Et[f(221)] && n(U0, {});
        return;
      }
      if (h == Et[f(217)] && s(!0), h != Et[f(217)] && i == !1) return;
      h == Et[f(221)] && (f(267) !== f(267) ? (_0x19a1b1[f(167)] = f(171) + f(181), _0x43b485[f(179)] = 61) : s(!1));
      let x, y;
      if (d[f(216)][f(172)](f(203))) {
        const { touches: b, changedTouches: T } = d, O = b[0] ?? T[0];
        x = O[f(184)] - g[f(199)], y = O[f(276)] - g[f(173)];
      } else d[f(216)][f(172)](f(266)) && (f(275) === f(275) ? (x = d[f(180)] - g[f(199)], y = d[f(235)] - g[f(173)]) : _0x39665a(_0x903e70, _0x30197b));
      const S = 1, p = x < S || x > v[f(238)] - S, E = y < S || y > v[f(176)] - S;
      (p || E) && (x = Math[f(190)](1, x), y = Math[f(190)](1, y), h = Et[f(221)]), n(cS, { action: f(272), keyAction: h, x, y, width: g[f(238)], height: g[f(176)], ts: Date[f(227)]() }), v[f(251)]();
    }
  }, c = (d) => {
    const f = Cn;
    if (f(249) === f(249)) {
      if (d[f(241) + f(222)](), !o[f(202)]) return;
      const v = o[f(202)], g = Math[f(252)](d[f(201)]), h = v[f(218) + f(226) + "t"]();
      n(lS, { action: f(247), width: v[f(257) + "h"], height: v[f(248) + "ht"], x: d[f(180)] - h[f(199)], y: d[f(235)] - h[f(173)], delta: g, ts: Date[f(227)]() }), v[f(251)]();
    }
  }, l = async (d) => {
    const f = Cn;
    if (d[f(241) + f(222)](), !o[f(202)])
      if (f(215) !== f(215)) {
        _0x54ba95 == _0x167b3b[f(221)] && _0x32f59e(_0x4553ce, {});
        return;
      } else return;
    const v = o[f(202)], g = aS[d[f(216)]], h = d[f(179)][f(188) + "e"]();
    if (((p) => {
      const E = f;
      return [E(229), E(260), E(232)][E(172)](p);
    })(h) == !0) return;
    const y = async () => {
      const p = f;
      if (p(268) !== p(237)) {
        const E = {};
        E[p(224)] = p(236), E[p(262)] = g, E[p(167)] = p(178) + p(191), E[p(179)] = d[p(179)], E[p(228)] = 0, E[p(240)] = 0;
        const b = E;
        if (d[p(165)] == !0)
          if (p(243) !== p(170))
            h == "c" ? p(220) !== p(234) ? b[p(167)] = p(166) : (_0x5af297[p(167)] = p(171) + p(181), _0x31cd1d[p(179)] = 66) : h == "a" ? p(245) !== p(245) ? _0x43e1b3(!0) : (b[p(167)] = p(171) + p(181), b[p(240)] = 4096, b[p(179)] = 29) : h == "v" && (p(212) === p(212) ? (b[p(167)] = p(174), b[p(179)] = await navigator[p(277)][p(205)]()) : _0x594254[p(196) + p(169)](_0x252d5a, _0x47e874));
          else return;
        else if (h == p(187)) b[p(167)] = p(171) + p(181), b[p(179)] = 19;
        else if (h == p(213)) p(230) === p(230) ? (b[p(167)] = p(171) + p(181), b[p(179)] = 20) : (_0x4ac48d[p(167)] = p(171) + p(181), _0x4dd136[p(240)] = 4096, _0x3ddd09[p(179)] = 29);
        else if (h == p(253)) b[p(167)] = p(171) + p(181), b[p(179)] = 21;
        else if (h == p(263)) b[p(167)] = p(171) + p(181), b[p(179)] = 22;
        else if (h == p(189)) b[p(167)] = p(171) + p(181), b[p(179)] = 67;
        else if (h == p(223))
          if (p(197) !== p(185)) b[p(167)] = p(171) + p(181), b[p(179)] = 66;
          else {
            if (_0x21ec4c[p(241) + p(222)](), !_0xbae5be[p(202)]) return;
            const T = _0x2307c0[p(202)], O = _0x1a9010[p(252)](_0x9bc942[p(201)]), k = T[p(218) + p(226) + "t"]();
            _0x32302c(_0x5b3a78, { action: p(247), width: T[p(257) + "h"], height: T[p(248) + "ht"], x: _0xfefc7a[p(180)] - k[p(199)], y: _0x9d9125[p(235)] - k[p(173)], delta: O, ts: _0x396758[p(227)]() }), T[p(251)]();
          }
        else h == p(255) && (p(278) === p(278) ? (b[p(167)] = p(171) + p(181), b[p(179)] = 61) : _0x32bf91[p(196) + p(169)](_0x2f11e0, _0x4207bf));
        if (b[p(216)] == p(178) + p(191) && d[p(231)] == !0)
          if (p(208) === p(208)) b[p(179)] = b[p(179)][p(261) + "e"]();
          else return;
        return b;
      } else return;
    }, S = await y();
    S && (f(211) !== f(259) ? n(uS, S) : (_0x28a4cc[f(167)] = f(171) + f(181), _0x28ded0[f(179)] = 22)), v[f(251)]();
  };
  Ke(() => {
    const d = Cn, f = o[d(202)];
    if (f) {
      const v = {};
      v[d(269)] = !1;
      const g = v;
      return e ? (f[d(195) + d(207)](d(214), a, g), f[d(195) + d(207)](d(219), a, g), f[d(195) + d(207)](d(242), a)) : (f[d(195) + d(207)](d(239), l), [d(225), d(217), d(221)][d(265)]((h) => {
        const x = d;
        x(271) === x(250) ? (_0x3bd65c[x(167)] = x(171) + x(181), _0x3cc965[x(179)] = 20) : f[x(195) + x(207)](h, a);
      })), () => {
        const h = d;
        f && (h(186) !== h(204) ? e ? h(256) === h(273) ? _0xebed27[h(167)] = h(166) : [h(214), h(219), h(242)][h(265)]((x) => {
          const y = h;
          y(200) === y(200) ? f[y(196) + y(169)](x, a) : _0x309160(!1);
        }) : h(246) === h(209) ? (_0x35442e = _0x9573d6[h(190)](1, _0x598d2b), _0x5ce185 = _0x262517[h(190)](1, _0x353781), _0x4a1b86 = _0x470db5[h(221)]) : ([h(225), h(217), h(221)][h(265)]((x) => {
          const y = h;
          y(264) === y(270) ? _0x2e0945[y(231)] == !0 && (_0x26fa1c[y(179)] = _0x54ed72[y(179)][y(261) + "e"]()) : f[y(196) + y(169)](x, a);
        }), f[h(196) + h(169)](h(239), l)) : (_0x422804 = _0x4a3bf3[h(180)] - _0x409714[h(199)], _0x139d6c = _0x13b937[h(235)] - _0x45a613[h(173)]));
      };
    }
  }, [e, a, c, l, o]);
  const u = { ref: o, ...r };
  return ne.jsx(xp, u);
}, hS = "data:image/png;base64,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", Ui = oi;
function oi(e, t) {
  const n = ii();
  return oi = function(r, o) {
    return r = r - 362, n[r];
  }, oi(e, t);
}
(function(e, t) {
  const n = oi, r = e();
  for (; ; )
    try {
      if (parseInt(n(362)) / 1 + parseInt(n(368)) / 2 + parseInt(n(370)) / 3 * (-parseInt(n(373)) / 4) + parseInt(n(369)) / 5 * (-parseInt(n(367)) / 6) + parseInt(n(365)) / 7 + parseInt(n(371)) / 8 * (-parseInt(n(372)) / 9) + parseInt(n(366)) / 10 === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ii, 257728);
const pS = jt[Ui(363)]`
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
`, qt = jt[Ui(363)]`
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
`, Ut = jt.p`
  height: 5px;
  margin-top: 2px;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
`, xS = jt[Ui(364)]`
  position: absolute;
  backdrop-filter: blur(46px);
  border-radius: 50%;
  z-index: 999;
`, gS = jt[Ui(363)]`
  user-select: none;
  transition: opacity 0.6s ease;
  z-index: 3;
  opacity: 0.3;
`;
function ii() {
  const e = ["9ZfBIuC", "96980vTqYtr", "138523njaJOl", "div", "img", "779422inZHss", "3759330eOmgYv", "12goAkKN", "411476OcAuDx", "39645QxHEyX", "60AztEfX", "584432myGKLA"];
  return ii = function() {
    return e;
  }, ii();
}
(function(e, t) {
  const n = tr, r = e();
  for (; ; )
    try {
      if (-parseInt(n(439)) / 1 + -parseInt(n(459)) / 2 + parseInt(n(462)) / 3 + -parseInt(n(467)) / 4 * (parseInt(n(446)) / 5) + parseInt(n(465)) / 6 + -parseInt(n(478)) / 7 + parseInt(n(438)) / 8 * (parseInt(n(437)) / 9) === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(si, 293489);
const vu = () => {
  const e = tr;
  return document[e(473) + e(471)] || document[e(441) + e(463)] || document[e(453) + e(450) + e(445)] || document[e(466) + e(451)];
}, mS = (e) => {
  const t = tr, n = document[t(468) + t(472)](t(477) + e);
  n[t(456) + t(455)] ? t(444) !== t(460) ? n[t(456) + t(455)]() : _0x24a50d[t(475) + t(449) + t(469)]() : n[t(476) + t(448)] ? t(474) === t(443) ? _0x4e4861[t(476) + t(448)]() : n[t(476) + t(448)]() : n[t(475) + t(449) + t(469)] ? n[t(475) + t(449) + t(469)]() : n[t(452) + t(461)] && (t(457) === t(457) ? n[t(452) + t(461)]() : _0x193bbb[t(458) + t(470)]());
};
function tr(e, t) {
  const n = si();
  return tr = function(r, o) {
    return r = r - 437, n[r];
  }, tr(e, t);
}
function si() {
  const e = ["FullScreen", "estFullscr", "screenElem", "enElement", "msRequestF", "webkitFull", "reen", "lscreen", "requestFul", "XrFGQ", "webkitExit", "200834yKuytr", "WKPIJ", "ullscreen", "1617234smSscY", "eenElement", "screen", "3132552yRuodD", "msFullscre", "108UyJtyK", "querySelec", "een", "Fullscreen", "Element", "tor", "fullscreen", "bgvrz", "webkitRequ", "mozRequest", "#screen_", "4068778OFQmyx", "msExitFull", "43596pOvJzO", "88zBdVQy", "122257ZyAxJe", "exitFullsc", "mozFullScr", "ullScreen", "ofgbI", "Dboei", "ent", "3155GgaPIY", "mozCancelF"];
  return si = function() {
    return e;
  }, si();
}
const vS = () => {
  const e = tr;
  document[e(440) + e(454)] ? document[e(440) + e(454)]() : document[e(447) + e(442)] ? document[e(447) + e(442)]() : document[e(458) + e(470)] ? document[e(458) + e(470)]() : document[e(479) + e(464)] && document[e(479) + e(464)]();
};
(function(e, t) {
  const n = ci, r = e();
  for (; ; )
    try {
      if (-parseInt(n(420)) / 1 * (parseInt(n(400)) / 2) + -parseInt(n(322)) / 3 * (parseInt(n(389)) / 4) + parseInt(n(353)) / 5 * (parseInt(n(388)) / 6) + parseInt(n(201)) / 7 + parseInt(n(300)) / 8 + -parseInt(n(253)) / 9 * (-parseInt(n(153)) / 10) + parseInt(n(141)) / 11 * (-parseInt(n(222)) / 12) === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ai, 244954);
function ai() {
  const e = ["mozfullscr", "0 0 1.645z", "4.445-2.96", " 0 0 0-1 1", "Icon", "8v12.264l-", "4zm0 5h16v", "data-id", "M16 7v10c1", "set", "5px", "3746608GDphRs", "H13z", "Hide ID", "017.082-.0", "pageY", "a1 1 0 0 0", "mouse", "0 0 0 14 2", "2H4zm0 5h1", "H4c-1.103 ", "right", ".002 16H6.", "-1-1H8a1 1", "6v6h2v-4h4", "nNLmR", "0V4a1 1 0 ", "peZhy", "v2h8V5h3v6", "H4zm16-6h-", "6v2H4z", "3 0 2-.897", "Sync", "108oZEKTN", "height", "027 1.027 ", "addEventLi", "-.897 2-2V", "V5h14v14z", "6a1 1 0 0 ", ".116c.026-", "move", "clientY", "action", "11.75", "isDown", "YwxUd", "2 2h10c1.1", "-2 2v6c0 1", "ofGBl", "focus", "type", "7 16 3v2c2", "yGOHO", "1.103 0-2 ", "get", "0 18V4h10l", "33L12 5.86", "2 2zm2 7v-", ".024l-14-1", "shortcut", " 5.999-9S1", "M20 2H10c-", "4v2h6zM8 2", "290685KnNhcW", "tListener", " 2 2zm0-8h", "-1.052-3.3", "home", "6l3.612-4.", ".103.897 2", "3c.033 0 .", "10c-1.103 ", "v7h2zm5 14", "Paste", "2 2h7c1.10", "gClientRec", "ault", " 7H4c-1.10", "0 1-1V4a1 ", "VyOhB", "HvwtE", " 0 0 0 1.0", "style", "QGRtr", " 2v5H4V5h3", "08 3.677L7", "M6 12h6v2H", "17-.056-.0", "fullscreen", "2-.082-.03", "left", "3 9a1.003 ", "1v16a1 1 0", "255, 255, ", "7h7l.001 7", "IHhJG", ".387 1.386", "getBoundin", "48mlljMV", "12964mqnQyl", " 0 0 0-.38", "h2.697l5.7", "3 0-2 .897", " 3.999 4.0", "preventDef", "h4zm12-6h-", "7.032 15 7", "clipboard", "20px", "4v-4c0-1.1", "381802FhDaxb", "57-5.428 6", "assistive", "Home", "1 0 0 0-1 ", "getAttribu", " 0 0 0-1.5", "webkitfull", "-2-5zM4 17", "1.103-.897", "69-.823l-1", "path", "csUOq", "forEach", "674.31a1 1", "passive", "4c0-1.103-", "QSXoZ", "showMenu", "Copy", "2kpYSXN", "7 2-2V4c0-", "grab", "Back", "copy", "v2z", "H6z", "menu_", "7zm11-5h-2", "touchmove", "IrSSP", "KqfgP", "NOCRM", "now", "hgyFs", "touch", "RaPty", "1zm-1 16H5", "3a.986.986", "-2-2-2zm-1", "0h2v-6H4v2", ".257 5.127", "0 0 0 .38-", "s-.775-3.9", "BaZPZ", "Recents", "rdelJ", "NQnPs", " 0-2 .897-", "5679509VAsAkM", "opacity", "div", "-.769zm-8.", "mouseup", "345-5.236 ", "vjGXO", "48 3.832a1", "v5h-5v2h7z", " 1 0 0 0 1", "12%", ".832L6.697", "2354170iUCHAj", "touchend", " 15H4V9z", "47 3.999 7", "M4 6h16v2H", "H5v-5H3v7h", "2 2h7c0 1.", "-1.103-.89", "touch_clas", ".897-2 2v4", "6zm0 4h6v2", ".089-1.218", "shortcutEv", "device_id", "rgba(255, ", "4c-.025-.0", "recents", "-7v2h5z", "-2-2-2zm-9", "0v10z", "M16.75 2h-", "0a.999.999", "M10 4H8v4H", ".015.057-.", "l10.283 7.", "FRDfE", "0 0-.396-1", "M16 21c3.5", "8.347l-3.0", ".w3.org/20", "mousemove", "M5 5h5V3H3", "0 0 24 24", "AfXda", "10l.002 10", "touchstart", "width", "landscape", "change", "nQMwp", "shortcutCo", " 2v13c0 1.", ".999-4.909", "9.527 4.54", "screenchan", "M20 11V5c0", "m-2-4h2V3h", "assistive_", "636384RhdZFI", "Screen", "ent", "M20 3H4a1 ", "current", "WUppP", " 2v10c0 1.", "27.05A1 1 ", "27-1.547 5", "taskId", "0-2 .897-2", "7 2-2v-4h4", "mousedown", "061-.016.0", "paste", "svg", "93-.019a1.", "Volume", "data", "c1.103 0 2", "clientX", "12uVTGHn", "pageX", "1 0 0 0-1-", "eUahu", "00/svg", "readText", "circle", "http://www", "removeEven", "1.048z", "zupsG", "1.003 0 0 ", "zIndex", "click", "stener", "2-.116C7.0", "0 1.767.51", "children", "zm0-6h-4V4", "top", "h-5c-1.103", "a.995.995 ", "5.46 1.701", "S18.387 17", "416 3.377 ", ".614 16 19", "0 0 0 .782", "9 21V3a1 1", "-3.229 2-5", "Show ID", ".897-2-2-2", "9mpYsOx", "75z", "wAsCw", "7a1 1 0 0 ", "75.931l2 1", "back", "eenchange", "7-2-2-2h-3", "volume", "fill", "touch_", "enchange", "sync", "includes", " 2-2v-7c0-", "0 0-1.554-", "target", "h-2v6h6z", " 0 0 1 1h1", ".21a1 1 0 ", "822 13 9A1", "M20.978 13", "03 0 2-.89", ".004 1.004", "msfullscre", "2-2h-4V4h1", "cursor", "m4.431 12.", "zM4 20V10h", "103.897 2 ", ".225-1.1 2", "59 15.016 ", " 2v16c0 1.", "closest", "03-.897-2-", " 0 0 0-.57"];
  return ai = function() {
    return e;
  }, ai();
}
const bS = rr((e, t) => {
  const n = ci, { displayId: r, isMobile: o, onSenData: i, status: s, canvasRef: a, isShowDeviceId: c } = e, l = {};
  l.x = 0, l.y = 0;
  const u = Ee(l), d = {};
  d.x = 0, d.y = 0;
  const f = Ee(d), [v, g] = ft(null), [h, x] = ft(0), y = Ee(null), S = Ee(null), p = Ee(null), E = {};
  E[n(279)] = n(330), E[n(142)] = 0.3, E[n(234)] = 999;
  const [b, T] = ft(E), O = {};
  O[n(234)] = 1e3;
  const [k, F] = ft(O), G = Ee(null), [oe, te] = ft(null), H = (z) => {
    const C = n;
    if (C(232) !== C(338)) {
      if (z[C(394) + C(366)](), s[C(344)][C(418)] == !0)
        if (C(123) !== C(123)) {
          const Ye = _0x15eb9c[C(125)]() - _0x527c1d;
          if (_0x3f6663 == _0x325e13[C(213)] || Ye < 200) {
            const at = {};
            at[C(418)] = !0, at[C(334)] = !1;
            const Mt = { ..._0x3c2b0f[C(344)], ...at };
            _0xe882da[C(298)](Mt);
          } else {
            const at = { ..._0x674947[C(344)] };
            at[C(334)] = !1, _0x2a973d[C(298)](at);
          }
          const De = {};
          De[C(142)] = 0.3, De[C(279)] = C(330);
          const ht = { ..._0x2cf67e, ...De };
          _0x1967e9(ht);
        } else return;
      const de = Et[z[C(340)]], Ie = a[C(205)], Ge = p[C(205)], be = Ie[C(387) + C(365) + "t"](), ze = Ge[C(387) + C(365) + "t"](), He = 5;
      let we, nt;
      const Wt = be[C(189)] - ze[C(189)], hn = be[C(323)] - ze[C(323)];
      if (z[C(340)][C(266)](C(127))) {
        const { touches: Ye, changedTouches: De } = z, ht = Ye[0] ?? De[0];
        we = ht[C(223)], nt = ht[C(304)];
      } else if (z[C(340)][C(266)](C(306)))
        if (C(206) === C(373)) {
          const Ye = _0x5059b2();
          _0x304fa1(_0x538529, Ye);
        } else we = z[C(221)], nt = z[C(331)];
      if (de == Et[C(213)]) {
        s[C(298)]({ ...s[C(344)], isDown: !0 }), u[C(205)].x = we - ze[C(380)], u[C(205)].y = nt - ze[C(241)];
        const Ye = {};
        Ye[C(142)] = 1, Ye[C(279)] = C(422);
        const De = { ...b, ...Ye };
        T(De), x(performance[C(125)]());
      } else if (de == Et[C(183)]) {
        if (s[C(344)][C(334)] == !1) return;
        let Ye = we - u[C(205)].x - be[C(380)], De = nt - u[C(205)].y - be[C(241)];
        const ht = Wt - He;
        if (Ye < He || Ye > ht || De < He || De > hn - He) {
          const Mt = {};
          Mt[C(142)] = 0.3, Mt[C(279)] = C(330);
          const Nn = { ...b, ...Mt };
          T(Nn), g(Et[C(145)]), s[C(298)]({ ...s[C(344)], isDown: !1 });
        } else C(139) === C(385) ? _0x2dfead && _0x3731f6[C(230) + C(354)](C(235), _0x3d8422) : (Ge[C(372)][C(380)] = Ye + "px", Ge[C(372)][C(241)] = De + "px", f[C(205)].x = Ye, f[C(205)].y = De);
      } else if (de == Et[C(145)]) {
        const Ye = performance[C(125)]() - h;
        if (v == Et[C(213)] || Ye < 200) {
          const at = {};
          at[C(418)] = !0, at[C(334)] = !1, s[C(298)]({ ...s[C(344)], ...at });
        } else C(128) !== C(178) ? s[C(298)]({ ...s[C(344)], isDown: !1 }) : _0x3b4f0f[C(230) + C(354)](C(235), _0x2e7592);
        const De = {};
        De[C(142)] = 0.3, De[C(279)] = C(330);
        const ht = { ...b, ...De };
        T(ht);
      }
      g(de), Ge[C(339)]();
    }
  }, X = async (z) => {
    const C = n;
    z[C(394) + C(366)]();
    const de = z[C(269)][C(286)](C(143))[C(405) + "te"](C(296));
    if (de === C(378))
      C(192) === C(412) ? _0x27a406() ? _0x1b1079() : _0x35d750(_0x358514) : vu() ? vS() : mS(r);
    else {
      const Ie = {};
      Ie[C(332)] = C(165) + C(203), Ie[C(349)] = de, Ie[C(219)] = "";
      const Ge = Ie;
      de === C(215) && (Ge[C(219)] = await navigator[C(397)][C(227)]()), de === C(424) && (Ge[C(210)] = C(193) + "py"), i(Da, Ge);
    }
    s[C(298)]({ ...s[C(344)], showMenu: !1 }), S[C(205)][C(339)]();
  }, Q = (z) => {
    const C = n;
    if (C(342) === C(342)) {
      const de = vu();
      i(fS, de);
    } else {
      const de = _0x13a111[C(205)];
      de[C(372)][C(189)] = _0x82c5ab[C(205)] != C(190) ? C(151) : "", de[C(372)][C(323)] = _0x34fe45[C(205)] == C(190) ? C(151) : "", de[C(372)][C(310)] = C(299), de[C(372)][C(241)] = C(398), de[C(372)][C(380)] = "";
    }
  };
  Ke(() => {
    const z = n;
    z(417) !== z(369) ? requestAnimationFrame(() => {
      const C = z, de = { ...k };
      de[C(142)] = s[C(344)][C(418)] ? 1 : 0, F(de);
    }) : [z(188), z(429), z(154)][z(413)]((C) => {
      const de = z;
      _0x23ab05[de(230) + de(354)](C, _0x1c943f);
    });
  }, [s]), Ke(() => {
    const z = n, C = a[z(205)], de = [z(378) + z(191), z(407) + z(197) + "ge", z(289) + z(259), z(277) + z(264)];
    return C && de[z(413)]((Ie) => {
      const Ge = z;
      C[Ge(325) + Ge(236)](Ie, Q);
    }), () => {
      const Ie = z;
      C && (Ie(138) === Ie(136) ? _0x53d104[Ie(325) + Ie(236)](_0x39e113, _0x3ab33d) : C[Ie(230) + Ie(354)](Ie(235), Q));
    };
  }, []), Ke(() => {
    const z = n;
    if (z(124) !== z(126)) {
      const C = p[z(205)], de = S[z(205)];
      if (de && de[z(325) + z(236)](z(235), X), C) {
        const Ie = {};
        Ie[z(415)] = !1;
        const Ge = Ie;
        return o ? (C[z(325) + z(236)](z(188), H, Ge), C[z(325) + z(236)](z(429), H, Ge), C[z(325) + z(236)](z(154), H)) : z(370) !== z(370) ? [z(183), z(213), z(145)][z(413)]((be) => {
          const ze = z;
          _0x593ea1[ze(230) + ze(354)](be, _0x4929d7);
        }) : [z(183), z(213), z(145)][z(413)]((be) => {
          const ze = z;
          C[ze(325) + ze(236)](be, H);
        }), () => {
          const be = z;
          if (de && de[be(230) + be(354)](be(235), X), C)
            if (o) [be(188), be(429), be(154)][be(413)]((ze) => {
              const He = be;
              He(255) === He(225) ? _0x240837[He(205)] = _0x5e5891 : C[He(230) + He(354)](ze, H);
            });
            else if (be(316) !== be(314)) [be(183), be(213), be(145)][be(413)]((ze) => {
              const He = be;
              C[He(230) + He(354)](ze, H);
            });
            else {
              const { touches: ze, changedTouches: He } = _0x2fc26e, we = ze[0] ?? He[0];
              _0x22b2ab = we[be(223)], _0x577af3 = we[be(304)];
            }
        };
      }
    } else _0x1c68ff();
  }, [o, H]);
  const N = () => {
    const z = n;
    if (z(147) !== z(335)) {
      const C = p[z(205)];
      C[z(372)][z(189)] = G[z(205)] != z(190) ? z(151) : "", C[z(372)][z(323)] = G[z(205)] == z(190) ? z(151) : "", C[z(372)][z(310)] = z(299), C[z(372)][z(241)] = z(398), C[z(372)][z(380)] = "";
    } else {
      const C = {};
      C[z(418)] = !0, C[z(334)] = !1;
      const de = { ..._0x528a9b[z(344)], ...C };
      _0x1b19d1[z(298)](de);
    }
  };
  Tu(t, () => ({ fixTouch: (z) => {
    const C = n;
    z && (G[C(205)] = z), N();
  }, setFullscreen: (z) => {
    const C = n;
    C(430) === C(186) ? _0x6396a5[C(325) + C(236)](_0x876b11, _0x1c9aee) : te(z);
  } }));
  const R = {};
  R[n(262)] = n(167) + n(383) + "1)";
  const P = {};
  P.d = oe ? n(175) + n(352) + n(132) + n(395) + n(313) + n(240) + n(270) : n(184) + n(362) + n(158) + n(428) + n(149) + n(199) + n(170);
  const j = {};
  j[n(239)] = n(202);
  const $ = {};
  $[n(262)] = n(167) + n(383) + "1)";
  const V = {};
  V.d = n(351) + n(343) + n(162) + n(309) + n(211) + n(207) + n(282) + n(336) + n(275) + n(212) + n(220) + n(326) + n(416) + n(252) + n(281) + n(187) + n(318) + n(399) + n(287) + n(278) + n(172);
  const Y = {};
  Y.d = n(376) + n(163) + n(426);
  const re = {};
  re[n(239)] = n(419);
  const ee = {};
  ee[n(262)] = n(167) + n(383) + "1)";
  const ae = {};
  ae.d = n(198) + n(160) + n(260) + n(305) + n(312) + n(292) + n(309) + n(211) + n(194) + n(282) + n(159) + n(282) + n(364) + n(320) + n(267) + n(409) + n(171) + n(374) + n(317) + n(242) + n(140) + n(347) + n(384) + n(301);
  const le = {};
  le[n(239)] = n(363);
  const ue = {};
  ue[n(262)] = n(167) + n(383) + "1)";
  const _e = {};
  _e.d = n(173) + n(361) + n(211) + n(285) + n(282) + n(336) + n(275) + n(421) + n(409) + n(131) + n(345) + n(311) + n(254);
  const me = {};
  me.cx = n(333), me.cy = "18", me.r = "1";
  const je = {};
  je[n(239)] = n(c ? 302 : 251);
  const Ne = {};
  Ne[n(262)] = n(167) + n(383) + "1)";
  const xe = {};
  xe.d = n(180) + n(209) + n(195) + n(350) + n(196) + n(341) + n(386) + n(393) + n(156) + n(245) + n(247) + n(425);
  const M = {};
  M.d = n(297) + n(283) + n(250) + n(135) + n(408) + n(391) + n(148) + n(276) + n(371) + n(208) + n(307) + n(315) + n(268) + n(152) + n(367) + n(392) + n(337) + n(359) + n(355) + n(360) + n(214) + n(217) + n(324) + n(134) + n(329) + n(176) + n(303) + n(346) + n(294) + n(291) + n(168) + n(377) + n(379) + n(130) + n(390) + n(237) + n(284) + n(396) + n(155);
  const A = {};
  A[n(239)] = n(218);
  const L = {};
  L[n(262)] = n(167) + n(383) + "1)";
  const B = {};
  B.d = n(274) + n(272) + n(179) + n(348) + n(174) + n(406) + n(257) + n(256) + n(238) + n(358) + n(246) + n(244) + n(356) + n(401) + n(164) + n(243) + n(248) + n(144) + n(414) + n(288) + n(181) + n(375) + n(133) + n(177) + n(146) + n(231);
  const _ = {};
  _[n(239)] = n(321);
  const K = {};
  K[n(262)] = n(167) + n(383) + "1)";
  const Z = {};
  Z.d = n(157) + n(295) + n(308) + n(319);
  const Pe = {};
  Pe[n(239)] = n(137);
  const Le = {};
  Le[n(262)] = n(167) + n(383) + "1)";
  const ce = {};
  ce.d = n(204) + n(404) + n(382) + n(271) + n(328) + n(368) + n(224) + n(129) + n(327);
  const Me = {};
  Me[n(239)] = n(403);
  const dt = {};
  dt[n(262)] = n(167) + n(383) + "1)";
  const ut = {};
  ut.d = n(280) + n(273) + n(150) + n(249) + n(406) + n(410) + n(381) + n(233) + n(290);
  const Vt = {};
  return Vt[n(239)] = n(423), ne.jsxs(ne.Fragment, { children: [s[n(344)][n(418)] ? ne.jsxs(pS, { id: n(200) + n(427) + r, style: k, ref: S, children: [ne.jsxs(qt, { "data-id": n(378), children: [ne.jsx(n(216), { xmlns: n(229) + n(182) + n(226), width: "28", height: "28", viewBox: n(185), style: R, children: ne.jsx(n(411), P) }), ne.jsx(Ut, j)] }), ne.jsxs(qt, { "data-id": n(424), children: [ne.jsxs(n(216), { xmlns: n(229) + n(182) + n(226), width: "28", height: "28", viewBox: n(185), style: $, children: [ne.jsx(n(411), V), ne.jsx(n(411), Y)] }), ne.jsx(Ut, re)] }), ne.jsxs(qt, { "data-id": n(215), children: [ne.jsx(n(216), { xmlns: n(229) + n(182) + n(226), width: "28", height: "28", viewBox: n(185), style: ee, children: ne.jsx(n(411), ae) }), ne.jsx(Ut, le)] }), ne.jsxs(qt, { "data-id": n(166), children: [ne.jsxs(n(216), { xmlns: n(229) + n(182) + n(226), width: "28", height: "28", viewBox: n(185), style: ue, children: [ne.jsx(n(411), _e), ne.jsx(n(228), me)] }), ne.jsx(Ut, je)] }), ne.jsxs(qt, { "data-id": n(261), children: [ne.jsxs(n(216), { xmlns: n(229) + n(182) + n(226), width: "25", height: "25", viewBox: n(185), style: Ne, children: [ne.jsx(n(411), xe), ne.jsx(n(411), M)] }), ne.jsx(Ut, A)] }), ne.jsxs(qt, { "data-id": n(265), children: [ne.jsx(n(216), { xmlns: n(229) + n(182) + n(226), width: "28", height: "28", viewBox: n(185), style: L, children: ne.jsx(n(411), B) }), ne.jsx(Ut, _)] }), ne.jsxs(qt, { "data-id": n(169), children: [ne.jsx(n(216), { xmlns: n(229) + n(182) + n(226), width: "28", height: "28", viewBox: n(185), style: K, children: ne.jsx(n(411), Z) }), ne.jsx(Ut, Pe)] }), ne.jsxs(qt, { "data-id": n(357), children: [ne.jsx(n(216), { xmlns: n(229) + n(182) + n(226), width: "28", height: "28", viewBox: n(185), style: Le, children: ne.jsx(n(411), ce) }), ne.jsx(Ut, Me)] }), ne.jsxs(qt, { "data-id": n(258), children: [ne.jsx(n(216), { xmlns: n(229) + n(182) + n(226), width: "28", height: "28", viewBox: n(185), style: dt, children: ne.jsx(n(411), ut) }), ne.jsx(Ut, Vt)] })] }) : null, ne.jsx(gS, { id: n(200) + n(161) + "s_" + r, className: n(402), ref: y, style: b, children: ne.jsx(xS, { src: hS, className: n(402), id: n(200) + n(263) + r, alt: n(293), ref: p, draggable: !1 }) })] });
});
function ci(e, t) {
  const n = ai();
  return ci = function(r, o) {
    return r = r - 123, n[r];
  }, ci(e, t);
}
function li() {
  const e = ["cAYQk", "IdCAo", "setIsConne", "4362576zHOmMM", "clearRect", "optimizeFo", "XvLIx", "decode", "drawImage", "buildDecod", "isPlay", "concatUint", "GZOsr", "canvas", "1418744xIxqOd", "ror:", "lock", "fLITk", "nVjDQ", "4iWehYr", "height", "rotate", "maxWidth", "isMobile", "8Arrays", "getContext", "hzAAJ", "close", "from", "landscape", "1078632dricHi", "1162945UnzRJt", "iframe", "codedWidth", "key", "een", "NUVwl", "setFullscr", "rLatency", "rootSize", "delta", "state", "videoMeta", "setOrienta", "3106665Kvmbqh", "innerHeigh", "resizedWid", "scale", "tion", "dEKCE", "celeration", "isKeyFrame", "ctx", "width", "469082CFsqkw", "now", "configure", "concat", "codedHeigh", "codec", "hardwareAc", "4088690DDeQqS", "setVideoMe", "translate", "KMrUv", "length", "round", "Decoder er", "error", "orientatio", "autoResize", "40rKPcPT", "decoder", "portrait"];
  return li = function() {
    return e;
  }, li();
}
const Xe = nr;
(function(e, t) {
  const n = nr, r = e();
  for (; ; )
    try {
      if (-parseInt(n(249)) / 1 + -parseInt(n(209)) / 2 + parseInt(n(239)) / 3 + -parseInt(n(214)) / 4 * (parseInt(n(256)) / 5) + parseInt(n(198)) / 6 + parseInt(n(226)) / 7 + parseInt(n(266)) / 8 * (parseInt(n(225)) / 9) === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(li, 531834);
function nr(e, t) {
  const n = li();
  return nr = function(r, o) {
    return r = r - 193, n[r];
  }, nr(e, t);
}
var bu, yu, Su, Cu, wu, Eu, _u, Ou, Au;
Au = Xe(232) + Xe(230), Ou = Xe(241) + "th", _u = Xe(238) + Xe(243), Eu = Xe(265), wu = Xe(257) + "ta", Cu = Xe(204) + "er", Su = Xe(246), yu = Xe(206) + Xe(219), bu = Xe(202);
class yS {
  constructor(t, n, r, o, i, s) {
    qe(this, Au, (t) => {
      const n = Xe;
      if (t)
        if (n(201) !== n(201)) this[n(265)](_0x5ed435[n(228)], _0x5ad03d[n(253) + "t"]);
        else {
          const r = window[n(240) + "t"] + 10, o = this[n(241) + "th"](null, this[n(234)][n(248)], this[n(234)][n(215)], r, r);
          this[n(248)] = o[n(248)], this[n(215)] = o[n(215)];
        }
      else this[n(248)] = this[n(234)][n(248)], this[n(215)] = this[n(234)][n(215)];
    });
    qe(this, Ou, (t, n, r, o, i) => {
      const s = Xe;
      let a;
      if (t && o > this[s(217)] && r > n)
        if (s(195) !== s(195)) {
          if (_0x16a6bf[_0x142e92] === 0 && _0x3cb173[_0x5be486 + 1] === 0 && _0x4586dc[_0x496245 + 2] === 1)
            return (_0x1786ab[_0x350bb5 + 3] & 31) === 5;
        } else i = this[s(217)];
      return i && (a = i / n * r, a > o && (s(213) === s(259) ? (_0x1f18b7 = this[s(206) + s(219)](this[s(237)], this[s(227)]), this[s(205)] = !0) : (i = o / r * n, a = o / n * n))), { width: Math[s(261)](i), height: Math[s(261)](a) };
    });
    qe(this, _u, (t) => {
      const n = Xe;
      this[n(264) + "n"] = t, this[n(218)] && (n(196) === n(196) ? screen[n(264) + "n"][n(211)](t) : (_0x17fee7 = _0x20cf74 / _0x29b921 * _0x579eb0, _0x6ae574 = _0x5396a7 / _0x158bca * _0x4fbb63));
    });
    qe(this, Eu, (t, n) => {
      var a;
      const r = Xe, o = this[r(218)] == !0 ? window[r(240) + "t"] - 12 : window[r(240) + "t"] - 50, i = this[r(241) + "th"](!0, t, n, o, o);
      if (this[r(248)] = i[r(248)], this[r(215)] = i[r(215)], !this[r(234)])
        if (r(212) !== r(231)) (a = this[r(197) + "ct"]) == null || a.call(this, !0);
        else {
          let c;
          return _0x3e1d0b && _0x8dd9a9 > this[r(217)] && _0x3bccd7 > _0x57f1d1 && (_0x46c2da = this[r(217)]), _0x4c99a7 && (c = _0x108118 / _0x5bdda0 * _0x4b68a0, c > _0x48d4bb && (_0x3974df = _0x2470bd / _0x553c0e * _0x37a945, c = _0x45d15d / _0x4fd3a6 * _0x372e81)), { width: _0x2b8ba4[r(261)](_0x3e4660), height: _0x1b6b1b[r(261)](c) };
        }
      const s = {};
      s[r(248)] = i[r(248)], s[r(215)] = i[r(215)], this[r(234)] = s;
    });
    qe(this, wu, (t) => {
      const n = Xe, r = t instanceof Uint8Array ? t : new Uint8Array(t);
      this[n(237)] = r;
    });
    qe(this, Cu, () => {
      const t = Xe, n = new VideoDecoder({ output: async (o) => {
        const i = nr, s = await createImageBitmap(o);
        (!this[i(248)] || !this[i(215)]) && this[i(265)](o[i(228)], o[i(253) + "t"]), this[i(247)][i(199)](0, 0, this[i(248)], this[i(215)]), this[i(264) + "n"] == i(224) ? (this[i(208)][i(248)] = this[i(215)], this[i(208)][i(215)] = this[i(248)], this[i(247)][i(258)](0, this[i(248)]), this[i(247)][i(216)](Math.PI / 2), this[i(247)][i(242)](-1, -1), this[i(247)][i(203)](s, 0, 0, this[i(248)], this[i(215)])) : i(244) !== i(244) ? (!this[i(205)] && (_0x137b1e = this[i(206) + i(219)](this[i(237)], this[i(227)]), this[i(205)] = !0), this[i(193)][i(202)](new _0x5f17b5({ timestamp: _0x5c8af6[i(250)]() * 1e3, type: _0x4dd221 ? i(229) : i(235), data: _0x55accf }))) : (this[i(208)][i(248)] = this[i(248)], this[i(208)][i(215)] = this[i(215)], this[i(247)][i(203)](s, 0, 0, this[i(248)], this[i(215)])), s[i(222)](), o[i(222)]();
      }, error: (o) => console[t(263)](t(262) + t(210), o) }), r = {};
      return r[t(254)] = this[t(254)], r[t(255) + t(245)] = this[t(255) + t(245)], r[t(200) + t(233)] = !0, n[t(251)](r), n;
    });
    qe(this, Su, (t) => {
      const n = Xe;
      for (let r = 0; r <= t[n(260)] - 4; r++)
        if (t[r] === 0 && t[r + 1] === 0 && t[r + 2] === 0 && t[r + 3] === 1) {
          if (n(207) === n(207))
            return (t[r + 4] & 31) === 5;
          this[n(208)] = _0x8fe066, this[n(217)] = _0x3ebed4, this[n(218)] = _0x17fed4, this[n(254)] = _0x122914, this[n(255) + n(245)] = _0x284819, this[n(197) + "ct"] = _0x423673, this[n(247)] = _0x454c96[n(220)]("2d"), this[n(193)] = this[n(204) + "er"](), this[n(237)] = null, this[n(227)] = null, this[n(205)] = null, this[n(248)] = null, this[n(215)] = null, this[n(234)] = null, this[n(264) + "n"] = n(194);
        }
      for (let r = 0; r <= t[n(260)] - 3; r++)
        if (t[r] === 0 && t[r + 1] === 0 && t[r + 2] === 1)
          return (t[r + 3] & 31) === 5;
      return !1;
    });
    qe(this, yu, (t, n) => {
      const r = Xe, o = Array[r(223)](t)[r(252)](Array[r(223)](n));
      return new Uint8Array(o);
    });
    qe(this, bu, (t) => {
      const n = Xe;
      if (!this[n(193)] || this[n(193)][n(236)] == n(222) || !this[n(237)]) return;
      let r = t instanceof Uint8Array ? t : new Uint8Array(t);
      const o = this[n(246)](r);
      o && (this[n(227)] = r), this[n(227)] && this[n(237)] && (!this[n(205)] && (n(221) === n(221) ? (r = this[n(206) + n(219)](this[n(237)], this[n(227)]), this[n(205)] = !0) : _0x288972 = this[n(217)]), this[n(193)][n(202)](new EncodedVideoChunk({ timestamp: performance[n(250)]() * 1e3, type: n(o ? 229 : 235), data: r })));
    });
    const a = nr;
    this[a(208)] = t, this[a(217)] = n, this[a(218)] = r, this[a(254)] = i, this[a(255) + a(245)] = s, this[a(197) + "ct"] = o, this[a(247)] = t[a(220)]("2d"), this[a(193)] = this[a(204) + "er"](), this[a(237)] = null, this[a(227)] = null, this[a(205)] = null, this[a(248)] = null, this[a(215)] = null, this[a(234)] = null, this[a(264) + "n"] = a(194);
  }
}
(function(e, t) {
  const n = Vn, r = e();
  for (; ; )
    try {
      if (parseInt(n(315)) / 1 + parseInt(n(261)) / 2 + parseInt(n(280)) / 3 + parseInt(n(340)) / 4 * (-parseInt(n(343)) / 5) + parseInt(n(319)) / 6 * (parseInt(n(266)) / 7) + -parseInt(n(339)) / 8 + parseInt(n(346)) / 9 * (-parseInt(n(296)) / 10) === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ui, 563331);
function ui() {
  const e = ["690228kvhcai", " closed co", "size", "5kotWCE", "meta", "type", "9882792rZwkFL", "een", "ZBNbG", "timeSync", "setOrienta", "fullscreen", "Content-Ty", "delete", "msFullscre", "azemw", "tabIndex", "test", "removeEven", "headers", "ent", "device_id", "width", "margin", "shortcut", "screenElem", "setFullscr", "tlItW", "umgab", "cJGvH", "image_", "tListener", "message", "url", "sync", "spin", "draggable", "false", "asQhS", "taskId", "addEventLi", "ooDVx", "value", "type_clien", "mhqcG", "status", "RImLM", "mozFullScr", "applicatio", "clipboard", "action", "eJzwb", "data", "connect", "Timeout wa", "error", "disconnect", "shortcutEv", "n/json", "zwioQ", "map", "gPdoR", "Oeuko", "de: ", "showMenu", "decode", "UvFcm", "uaccj", "password", "msg", "1509632QOpnpT", "iting for ", "orientatio", "eAwZG", "FDfNs", "3078159hGCKQS", "code", "screen_", "screen", "onSyncIFra", "BTOvu", "now", "connect_er", "UqNMV", "userAgent", "stener", "post", "tMDmB", "timeout", "458757unSVoO", "response", "height", "control", "Wisqb", "isDown", "PVzFN", "children", "screen_mai", "text", "length", "info", "Element", "video_meta", "sBYQH", "setVideoMe", "10qpTxEp", "onScreenEv", "join_room", "bRIGg", "wYieE", "fixTouch", "rhZvx", "COPY_TEXT", "pVFLb", "passwd", "EVEvF", "JANpz", "current", "reconnecti", "NjdnO", "set", "connection", "large", "eenElement", "1072792HWfnbc", "writeText", "iframe", "isMobile", "6SaPZPk", "get_video_", "webkitFull", "Reconnect", "primary", "pMyzn", "get", "enElement", "KHdzt", "center", "tnbAf", "middle", "lGOEl", "rnODF", "ror", "method", "change", "xssWW", "tion", "emit", "4690304SPcxGE"];
  return ui = function() {
    return e;
  }, ui();
}
function Vn(e, t) {
  const n = ui();
  return Vn = function(r, o) {
    return r = r - 208, n[r];
  }, Vn(e, t);
}
const WS = rr((e, t) => {
  const n = Vn, { serve: r, dataDevice: o, maxWidth: i, showAssistive: s, showDeviceId: a, syncEvent: c, syncButton: l, codec: u, hardwareAcceleration: d } = e, f = o[n(212)], v = /iPhone|iPad|iPod|Android/i[n(208)](navigator[n(275)]), g = n(283), h = Ee(null), x = Ee(null), y = Ee(null), S = Ee(null), p = Ee(null), [E, b] = ft(null), [T, O] = ft(null), k = {};
  k[n(255)] = !1, k[n(285)] = !1;
  const [F, G] = ft(k), [oe, te] = ft(null), [H, X] = ft(null), Q = n(221) + f, N = n(268) + f, R = n(288) + "n_" + f, [P, j] = ft([]), $ = Ee(/* @__PURE__ */ new Map());
  Ke(() => {
    O(a);
  }, [a]);
  const V = (M) => {
    j((A) => [...A, M]);
  }, Y = (M) => {
    const A = n;
    if (A(355) !== A(271)) h[A(308)][A(338)](A(223), M), c == null || c(M);
    else {
      const L = {};
      L[A(241)] = A(320) + A(344), _0x28d904[A(338)](A(293), L);
    }
  };
  Tu(t, () => ({ api: async function(M, A = 5e3) {
    return new Promise((L, B) => {
      const _ = Vn;
      if (_(220) === _(220)) {
        const K = setTimeout(() => {
          const Z = _;
          $[Z(308)][Z(353)](M[Z(230)]);
          const Pe = {};
          Pe[Z(241)] = M[Z(241)], Pe[Z(230)] = M[Z(230)], Pe[Z(236)] = !1, Pe[Z(223)] = Z(245) + Z(262) + Z(281), B(Pe);
        }, A);
        $[_(308)][_(311)](M[_(230)], (Z) => {
          clearTimeout(K), L(Z);
        }), h[_(308)][_(338)](_(223), M);
      } else _0x4e9ba7(_0x54feb4);
    });
  }, sync: function(M) {
    const A = n;
    A(218) !== A(307) ? h[A(308)][A(338)](A(223), M) : _0x12aea8[A(247)]();
  }, getDeviceId: function() {
    const M = n;
    if (M(304) !== M(237)) return o[M(212)];
    if (_0x56b1fc[M(236)] == !0) {
      _0x4e8e85[M(308)] = _0x143733, _0x5cecd3[M(338)](M(223), { action: M(349), ts: _0x4fe600[M(272)]() });
      const A = {};
      A[M(241)] = M(297) + M(211), _0x59d904[M(338)](M(223), A);
    } else {
      const A = {};
      A[M(260)] = _0x40f0c3[M(260)], A[M(345)] = M(246), _0x286287(A);
    }
  } })), Ke(() => {
    const M = n;
    if (M(329) !== M(329)) {
      _0x77442[M(308)][M(353)](_0x4dcb90[M(230)]);
      const A = {};
      A[M(241)] = _0x1aefee[M(241)], A[M(230)] = _0x31bc44[M(230)], A[M(236)] = !1, A[M(223)] = M(245) + M(262) + M(281), _0x2724d(A);
    } else (async () => {
      const A = M;
      if (A(324) === A(265)) {
        _0x1f7305[A(308)] = _0x5cb62a, _0x2ddc00[A(338)](A(223), { action: A(349), ts: _0x5da3e1[A(272)]() });
        const L = {};
        L[A(241)] = A(297) + A(211), _0x5d9a70[A(338)](A(223), L);
      } else try {
        const L = {};
        L[A(352) + "pe"] = A(239) + A(249);
        const B = {};
        B[A(212)] = o[A(212)], B[A(259)] = o[A(305)];
        const _ = {};
        _[A(224)] = r, _[A(334)] = A(277), _[A(279)] = 1e4, _[A(210)] = L, _[A(243)] = B;
        const K = _, Z = await iS(K);
        b(Z[A(243)]);
      } catch (L) {
        if (A(332) !== A(332)) return _0x5f2120[A(212)];
        {
          const B = {};
          B[A(260)] = L, B[A(345)] = A(246), V(B);
        }
      }
    })();
  }, [H]), Ke(() => {
    const M = n;
    if (M(257) !== M(257)) _0x13f4f3[M(308)] = null, _0x38eb89(null), _0x2bd8f3([]), _0x24dcc6(null), _0x547887(_0x400913[M(272)]());
    else {
      if (h[M(308)] || !E) return;
      const A = {};
      A[M(309) + "on"] = !1;
      const L = Ao(E, A);
      return L.on(M(244), () => {
        const B = M;
        if (B(331) !== B(264)) {
          const _ = {};
          _[B(241)] = B(244), _[B(234) + "t"] = g, _[B(212)] = o[B(212)], _[B(318)] = v, _[B(305)] = o[B(305)], L[B(338)](B(298), _);
        } else {
          const _ = _0x2416ea(() => {
            const K = B;
            _0x32cbc5[K(308)][K(353)](_0x6e76cd[K(230)]);
            const Z = {};
            Z[K(241)] = _0x28d4c8[K(241)], Z[K(230)] = _0x39588c[K(230)], Z[K(236)] = !1, Z[K(223)] = K(245) + K(262) + K(281), _0x2ce84a(Z);
          }, _0x4de51e);
          _0x2b2448[B(308)][B(311)](_0x1b7fe3[B(230)], (K) => {
            _0x4549ec(_), _0x3bb0ce(K);
          }), _0x148f6f[B(308)][B(338)](B(223), _0x20501d);
        }
      }), L.on(M(298), (B) => {
        const _ = M;
        if (_(327) === _(235)) {
          const K = _0x51cb9b[_(351) + _(292)] || _0x174b04[_(321) + _(216) + _(211)] || _0x2aae5a[_(238) + _(314)] || _0x28c0d6[_(354) + _(326)];
          _0x39f622[_(308)][_(217) + _(347)](!!K), _0x42fa12[_(308)][_(217) + _(347)](!!K), _0x5a4637[_(308)][_(301)]();
        } else if (B[_(236)] == !0)
          if (_(242) !== _(300)) {
            h[_(308)] = L, L[_(338)](_(223), { action: _(349), ts: Date[_(272)]() });
            const K = {};
            K[_(241)] = _(297) + _(211), L[_(338)](_(223), K);
          } else return;
        else {
          if (_(336) !== _(336)) return new _0x467ed5((K, Z) => {
            const Pe = _, Le = _0x1d12bc(() => {
              const ce = Vn;
              _0x1ee0ab[ce(308)][ce(353)](_0x763340[ce(230)]);
              const Me = {};
              Me[ce(241)] = _0x5d5559[ce(241)], Me[ce(230)] = _0x3efb18[ce(230)], Me[ce(236)] = !1, Me[ce(223)] = ce(245) + ce(262) + ce(281), Z(Me);
            }, _0x27f733);
            _0x125c93[Pe(308)][Pe(311)](_0x4e7ca5[Pe(230)], (ce) => {
              _0x4f3868(Le), K(ce);
            }), _0x135e00[Pe(308)][Pe(338)](Pe(223), _0x3cbad3);
          });
          {
            const K = {};
            K[_(260)] = B[_(260)], K[_(345)] = _(246), V(K);
          }
        }
      }), L.on(M(269), (B) => {
        const _ = M;
        p[_(308)][_(256)](B);
      }), L.on(M(293), (B) => {
        const _ = M;
        if (_(286) === _(299)) {
          const K = () => {
            const Z = _, Pe = _0x405aed[Z(351) + Z(292)] || _0x28df6f[Z(321) + Z(216) + Z(211)] || _0x448ba8[Z(238) + Z(314)] || _0x3c129e[Z(354) + Z(326)];
            _0x61d149[Z(308)][Z(217) + Z(347)](!!Pe), _0x43325c[Z(308)][Z(217) + Z(347)](!!Pe), _0x4a04d1[Z(308)][Z(301)]();
          };
          return _0x43e997[_(231) + _(276)](_(351) + _(335), K), () => {
            const Z = _;
            _0x3869d5[Z(209) + Z(222)](Z(351) + Z(335), K);
          };
        } else if (B) {
          if (_(306) === _(302)) _0x4c8dc2[_(209) + _(222)](_(351) + _(335), _0x1e32dd);
          else if (p[_(308)][_(295) + "ta"](B), !p[_(308)][_(317)]) {
            const K = {};
            K[_(241)] = _(270) + "me", L[_(338)](_(223), K);
          }
        } else if (_(310) === _(252)) {
          const K = {};
          K[_(260)] = _0x310121, K[_(345)] = _(246), _0x526f32(K);
        } else {
          const K = {};
          K[_(241)] = _(320) + _(344), L[_(338)](_(293), K);
        }
      }), L.on(M(223), (B) => {
        const _ = M;
        if ((B[_(241)] == _(303) || B[_(241)] == _(248) + _(211)) && B[_(289)][_(290)] > 0 ? navigator[_(240)][_(316)](B[_(289)]) : B[_(241)] == _(263) + "n" && (p[_(308)][_(350) + _(337)](B[_(233)]), S[_(308)][_(301)](B[_(233)])), B[_(230)]) {
          const K = $[_(308)][_(325)](B[_(230)]);
          K && (K(B), $[_(308)][_(353)](B[_(230)]));
        }
      }), L.on(M(273) + M(333), (B) => {
        const _ = M;
        if (_(253) !== _(253)) {
          let K;
          return _0x57d538[_(308)] ? (K = _0x5a0352(() => {
            const Z = _;
            _0x360228[Z(308)][Z(338)](Z(223), { action: Z(349), ts: _0xf4a1da[Z(272)]() });
          }, 3e4), () => _0x54560a(K)) : void 0;
        } else {
          const K = {};
          K[_(260)] = B, K[_(345)] = _(246), V(K);
        }
      }), L.on(M(247), (B) => {
        const _ = M, K = {};
        K[_(260)] = _(312) + _(341) + _(254) + B[_(267)], K[_(345)] = _(291), V(K);
      }), () => {
        const B = M;
        B(294) === B(278) ? _0x8fc431(_0x2f0783) : L && L[B(247)]();
      };
    }
  }, [E]), Ke(() => {
    const M = n, A = y[M(308)];
    A && (p[M(308)] = new yS(A, i, v, te, u, d));
  }, [H]), Ke(() => {
    const M = n;
    if (M(348) === M(232)) _0x46cee3(!_0x566993);
    else {
      const A = () => {
        const L = M, B = document[L(351) + L(292)] || document[L(321) + L(216) + L(211)] || document[L(238) + L(314)] || document[L(354) + L(326)];
        p[L(308)][L(217) + L(347)](!!B), S[L(308)][L(217) + L(347)](!!B), S[L(308)][L(301)]();
      };
      return document[M(231) + M(276)](M(351) + M(335), A), () => {
        const L = M;
        L(219) !== L(219) ? (_0x348a44(_0x23049f), _0x4a957a(_0x34224c)) : document[L(209) + L(222)](L(351) + L(335), A);
      };
    }
  }, [H]), Ke(() => {
    const M = n;
    let A;
    if (h[M(308)])
      return A = setInterval(() => {
        const L = M;
        h[L(308)][L(338)](L(223), { action: L(349), ts: Date[L(272)]() });
      }, 3e4), () => clearInterval(A);
  }, [oe]);
  const re = {};
  re[n(287)] = o[n(212)];
  const ee = {};
  ee[n(342)] = n(313);
  const ae = {};
  ae[n(342)] = n(313);
  const le = {};
  le[n(342)] = n(313);
  const ue = {};
  ue[n(282)] = 0, ue[n(213)] = 0;
  const _e = {};
  _e[n(325)] = F, _e[n(311)] = G;
  const me = {};
  me.id = Q, me[n(356)] = "0", me[n(227)] = n(228);
  const je = {};
  je[n(214)] = 5;
  const Ne = {};
  Ne[n(214)] = 10;
  const xe = {};
  return xe[n(226)] = !0, ne.jsxs(hp, { id: R, children: [T && ne.jsx(mp, { children: ne.jsx(gp, re) }), P[n(290)] == 0 ? ne.jsxs(ne.Fragment, { children: [!oe && ne.jsxs(m0, { align: n(328), gap: n(330), children: [ne.jsx(Nr, ee), ne.jsx(Nr, ae), ne.jsx(Nr, le)] }), ne.jsxs(pp, { ref: x, id: N, style: oe ? {} : ue, children: [s ? ne.jsx(bS, { status: _e, ref: S, canvasRef: y, displayId: f, isMobile: v, isShowDeviceId: T, onSenData: (M, A) => {
    const L = n;
    if (M === Da && A[L(215)] === L(212)) O(!T);
    else if (M === Da && A[L(215)] === L(225))
      L(258) === L(258) ? l == null || l(o[L(212)]) : _0x5a4531 === _0x176923 && _0x597358[L(215)] === L(212) ? _0x50f15c(!_0x574c96) : _0x149d40 === _0x17f84f && _0x216d56[L(215)] === L(225) ? _0x3cfcbd == null || _0x3cfcbd(_0x37122e[L(212)]) : _0x311e4b(_0x2c828a);
    else if (L(284) !== L(284)) {
      const B = {};
      B[L(241)] = L(270) + "me", _0xc99b16[L(338)](L(223), B);
    } else Y(A);
  } }) : null, ne.jsx(dS, { canvasContent: me, canvasRef: y, isMobile: v, assistive: F, onRemoteEvent: (M, A) => {
    const L = n;
    if (M === U0)
      if (L(229) !== L(250)) {
        const B = { ...F };
        B[L(255)] = !1, G(B);
      } else if (_0x4d4d33) {
        if (_0x2328ed[L(308)][L(295) + "ta"](_0x20d2e5), !_0x17f913[L(308)][L(317)]) {
          const B = {};
          B[L(241)] = L(270) + "me", _0x2d512b[L(338)](L(223), B);
        }
      } else {
        const B = {};
        B[L(241)] = L(320) + L(344), _0x32459c[L(338)](L(293), B);
      }
    else L(274) === L(274) ? Y(A) : _0x27a345((B) => [...B, _0x45c259]);
  } })] })] }) : ne.jsxs(ne.Fragment, { children: [P == null ? void 0 : P[n(251)]((M, A) => ne.jsx(Jd, { style: je, message: M[n(260)], type: M[n(345)], showIcon: !0, closable: !0 }, A)), ne.jsx(Bi, { style: Ne, type: n(323), icon: ne.jsx(df, {}), loading: !oe && { icon: ne.jsx(hf, xe) }, onClick: () => {
    const M = n;
    h[M(308)] = null, b(null), j([]), te(null), X(Date[M(272)]());
  }, children: n(322) })] })] });
});
(function(e, t) {
  for (var n = Ba, r = e(); ; )
    try {
      var o = -parseInt(n(197)) / 1 + parseInt(n(191)) / 2 * (-parseInt(n(189)) / 3) + parseInt(n(192)) / 4 * (-parseInt(n(195)) / 5) + -parseInt(n(196)) / 6 * (-parseInt(n(188)) / 7) + parseInt(n(190)) / 8 + parseInt(n(193)) / 9 + parseInt(n(194)) / 10;
      if (o === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(fi, 826981);
function Ba(e, t) {
  var n = fi();
  return Ba = function(r, o) {
    r = r - 188;
    var i = n[r];
    return i;
  }, Ba(e, t);
}
function fi() {
  var e = ["115954lkzeYs", "8PTTsHL", "1890036hyxoeq", "2967230BvTVzY", "1887745aEhYvF", "5376984lzoQnd", "865651NuuUFW", "7fSliXE", "3WBHPal", "8822528vkNfPT"];
  return fi = function() {
    return e;
  }, fi();
}
export {
  WS as ViewRP
};
