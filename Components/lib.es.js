var X0 = Object.defineProperty;
var Y0 = (e, t, n) => t in e ? X0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var qe = (e, t, n) => Y0(e, typeof t != "symbol" ? t + "" : t, n);
import * as w from "react";
import W, { useDebugValue as yc, createElement as G0, useRef as Ee, useContext as Et, createContext as fi, useEffect as Ye, isValidElement as K0, version as Z0, useLayoutEffect as J0, forwardRef as rr, useState as ft, useMemo as kr, Children as Q0, useImperativeHandle as Tu } from "react";
import * as Au from "react-dom";
import Sc from "react-dom";
var Er = Bo;
(function(e, t) {
  for (var n = Bo, r = e(); ; )
    try {
      var o = parseInt(n(470)) / 1 * (parseInt(n(482)) / 2) + parseInt(n(486)) / 3 * (-parseInt(n(472)) / 4) + parseInt(n(474)) / 5 + -parseInt(n(461)) / 6 + parseInt(n(462)) / 7 + parseInt(n(480)) / 8 + parseInt(n(477)) / 9;
      if (o === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(zo, 859962);
typeof globalThis !== Er(464) || typeof window !== Er(464) || (typeof global !== Er(464) ? global : Er(464));
function eh(e) {
  var t = Er;
  return e && e[t(487)] && Object[t(469)][t(467) + t(475)][t(484)](e, t(460)) ? e[t(460)] : e;
}
function Bo(e, t) {
  var n = zo();
  return Bo = function(r, o) {
    r = r - 459;
    var i = n[r];
    return i;
  }, Bo(e, t);
}
function zo() {
  var e = ["1190555sfGptw", "erty", "function", "6737724wkyCwN", "get", "apply", "780696kdaALo", "length", "2KwLNox", "cFRHY", "call", "getOwnProp", "96129prlplV", "__esModule", "defineProp", "ertyDescri", "default", "8666430IsdGww", "7112945ouZgEI", "forEach", "undefined", "constructo", "value", "hasOwnProp", "keys", "prototype", "1485618rdFYEi", "construct", "160MLwUQb", "ptor"];
  return zo = function() {
    return e;
  }, zo();
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
var Cc;
function th() {
  if (Cc) return xr;
  Cc = 1;
  var e = W, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
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
var wc;
function nh() {
  return wc || (wc = 1, process.env.NODE_ENV !== "production" && function() {
    var e = W, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g = Symbol.iterator, p = "@@iterator";
    function x(m) {
      if (m === null || typeof m != "object")
        return null;
      var M = g && m[g] || m[p];
      return typeof M == "function" ? M : null;
    }
    var C = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(m) {
      {
        for (var M = arguments.length, V = new Array(M > 1 ? M - 1 : 0), oe = 1; oe < M; oe++)
          V[oe - 1] = arguments[oe];
        h("error", m, V);
      }
    }
    function h(m, M, V) {
      {
        var oe = C.ReactDebugCurrentFrame, Se = oe.getStackAddendum();
        Se !== "" && (M += "%s", V = V.concat([Se]));
        var Te = V.map(function(ge) {
          return String(ge);
        });
        Te.unshift("Warning: " + M), Function.prototype.apply.call(console[m], console, Te);
      }
    }
    var E = !1, b = !1, O = !1, _ = !1, j = !1, z;
    z = Symbol.for("react.module.reference");
    function U(m) {
      return !!(typeof m == "string" || typeof m == "function" || m === r || m === i || j || m === o || m === l || m === u || _ || m === v || E || b || O || typeof m == "object" && m !== null && (m.$$typeof === f || m.$$typeof === d || m.$$typeof === s || m.$$typeof === a || m.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      m.$$typeof === z || m.getModuleId !== void 0));
    }
    function ne(m, M, V) {
      var oe = m.displayName;
      if (oe)
        return oe;
      var Se = M.displayName || M.name || "";
      return Se !== "" ? V + "(" + Se + ")" : V;
    }
    function J(m) {
      return m.displayName || "Context";
    }
    function B(m) {
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
            var M = m;
            return J(M) + ".Consumer";
          case s:
            var V = m;
            return J(V._context) + ".Provider";
          case c:
            return ne(m, m.render, "ForwardRef");
          case d:
            var oe = m.displayName || null;
            return oe !== null ? oe : B(m.type) || "Memo";
          case f: {
            var Se = m, Te = Se._payload, ge = Se._init;
            try {
              return B(ge(Te));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Y = Object.assign, K = 0, k, R, P, L, H, F, X;
    function te() {
    }
    te.__reactDisabledLog = !0;
    function Z() {
      {
        if (K === 0) {
          k = console.log, R = console.info, P = console.warn, L = console.error, H = console.group, F = console.groupCollapsed, X = console.groupEnd;
          var m = {
            configurable: !0,
            enumerable: !0,
            value: te,
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
        K++;
      }
    }
    function ce() {
      {
        if (K--, K === 0) {
          var m = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Y({}, m, {
              value: k
            }),
            info: Y({}, m, {
              value: R
            }),
            warn: Y({}, m, {
              value: P
            }),
            error: Y({}, m, {
              value: L
            }),
            group: Y({}, m, {
              value: H
            }),
            groupCollapsed: Y({}, m, {
              value: F
            }),
            groupEnd: Y({}, m, {
              value: X
            })
          });
        }
        K < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var le = C.ReactCurrentDispatcher, ue;
    function _e(m, M, V) {
      {
        if (ue === void 0)
          try {
            throw Error();
          } catch (Se) {
            var oe = Se.stack.trim().match(/\n( *(at )?)/);
            ue = oe && oe[1] || "";
          }
        return `
` + ue + m;
      }
    }
    var me = !1, Me;
    {
      var ke = typeof WeakMap == "function" ? WeakMap : Map;
      Me = new ke();
    }
    function N(m, M) {
      if (!m || me)
        return "";
      {
        var V = Me.get(m);
        if (V !== void 0)
          return V;
      }
      var oe;
      me = !0;
      var Se = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Te;
      Te = le.current, le.current = null, Z();
      try {
        if (M) {
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
            } catch (ht) {
              oe = ht;
            }
            Reflect.construct(m, [], ge);
          } else {
            try {
              ge.call();
            } catch (ht) {
              oe = ht;
            }
            m.call(ge.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ht) {
            oe = ht;
          }
          m();
        }
      } catch (ht) {
        if (ht && oe && typeof ht.stack == "string") {
          for (var pe = ht.stack.split(`
`), at = oe.stack.split(`
`), Fe = pe.length - 1, Ve = at.length - 1; Fe >= 1 && Ve >= 0 && pe[Fe] !== at[Ve]; )
            Ve--;
          for (; Fe >= 1 && Ve >= 0; Fe--, Ve--)
            if (pe[Fe] !== at[Ve]) {
              if (Fe !== 1 || Ve !== 1)
                do
                  if (Fe--, Ve--, Ve < 0 || pe[Fe] !== at[Ve]) {
                    var We = `
` + pe[Fe].replace(" at new ", " at ");
                    return m.displayName && We.includes("<anonymous>") && (We = We.replace("<anonymous>", m.displayName)), typeof m == "function" && Me.set(m, We), We;
                  }
                while (Fe >= 1 && Ve >= 0);
              break;
            }
        }
      } finally {
        me = !1, le.current = Te, ce(), Error.prepareStackTrace = Se;
      }
      var Mn = m ? m.displayName || m.name : "", vn = Mn ? _e(Mn) : "";
      return typeof m == "function" && Me.set(m, vn), vn;
    }
    function Q(m, M, V) {
      return N(m, !1);
    }
    function T(m) {
      var M = m.prototype;
      return !!(M && M.isReactComponent);
    }
    function $(m, M, V) {
      if (m == null)
        return "";
      if (typeof m == "function")
        return N(m, T(m));
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
            return Q(m.render);
          case d:
            return $(m.type, M, V);
          case f: {
            var oe = m, Se = oe._payload, Te = oe._init;
            try {
              return $(Te(Se), M, V);
            } catch {
            }
          }
        }
      return "";
    }
    var A = Object.prototype.hasOwnProperty, re = {}, Oe = C.ReactDebugCurrentFrame;
    function fe(m) {
      if (m) {
        var M = m._owner, V = $(m.type, m._source, M ? M.type : null);
        Oe.setExtraStackFrame(V);
      } else
        Oe.setExtraStackFrame(null);
    }
    function Je(m, M, V, oe, Se) {
      {
        var Te = Function.call.bind(A);
        for (var ge in m)
          if (Te(m, ge)) {
            var pe = void 0;
            try {
              if (typeof m[ge] != "function") {
                var at = Error((oe || "React class") + ": " + V + " type `" + ge + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof m[ge] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw at.name = "Invariant Violation", at;
              }
              pe = m[ge](M, ge, oe, V, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Fe) {
              pe = Fe;
            }
            pe && !(pe instanceof Error) && (fe(Se), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", oe || "React class", V, ge, typeof pe), fe(null)), pe instanceof Error && !(pe.message in re) && (re[pe.message] = !0, fe(Se), S("Failed %s type: %s", V, pe.message), fe(null));
          }
      }
    }
    var ze = Array.isArray;
    function Ie(m) {
      return ze(m);
    }
    function Qe(m) {
      {
        var M = typeof Symbol == "function" && Symbol.toStringTag, V = M && m[Symbol.toStringTag] || m.constructor.name || "Object";
        return V;
      }
    }
    function dt(m) {
      try {
        return lt(m), !1;
      } catch {
        return !0;
      }
    }
    function lt(m) {
      return "" + m;
    }
    function Vt(m) {
      if (dt(m))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qe(m)), lt(m);
    }
    var D = C.ReactCurrentOwner, y = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, be, se;
    function Ne(m) {
      if (A.call(m, "ref")) {
        var M = Object.getOwnPropertyDescriptor(m, "ref").get;
        if (M && M.isReactWarning)
          return !1;
      }
      return m.ref !== void 0;
    }
    function ie(m) {
      if (A.call(m, "key")) {
        var M = Object.getOwnPropertyDescriptor(m, "key").get;
        if (M && M.isReactWarning)
          return !1;
      }
      return m.key !== void 0;
    }
    function Be(m, M) {
      typeof m.ref == "string" && D.current;
    }
    function xe(m, M) {
      {
        var V = function() {
          be || (be = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        V.isReactWarning = !0, Object.defineProperty(m, "key", {
          get: V,
          configurable: !0
        });
      }
    }
    function ye(m, M) {
      {
        var V = function() {
          se || (se = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        V.isReactWarning = !0, Object.defineProperty(m, "ref", {
          get: V,
          configurable: !0
        });
      }
    }
    var nt = function(m, M, V, oe, Se, Te, ge) {
      var pe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: m,
        key: M,
        ref: V,
        props: ge,
        // Record the component responsible for creating this element.
        _owner: Te
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
        value: oe
      }), Object.defineProperty(pe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Se
      }), Object.freeze && (Object.freeze(pe.props), Object.freeze(pe)), pe;
    };
    function Wt(m, M, V, oe, Se) {
      {
        var Te, ge = {}, pe = null, at = null;
        V !== void 0 && (Vt(V), pe = "" + V), ie(M) && (Vt(M.key), pe = "" + M.key), Ne(M) && (at = M.ref, Be(M, Se));
        for (Te in M)
          A.call(M, Te) && !y.hasOwnProperty(Te) && (ge[Te] = M[Te]);
        if (m && m.defaultProps) {
          var Fe = m.defaultProps;
          for (Te in Fe)
            ge[Te] === void 0 && (ge[Te] = Fe[Te]);
        }
        if (pe || at) {
          var Ve = typeof m == "function" ? m.displayName || m.name || "Unknown" : m;
          pe && xe(ge, Ve), at && ye(ge, Ve);
        }
        return nt(m, pe, at, Se, oe, D.current, ge);
      }
    }
    var xn = C.ReactCurrentOwner, He = C.ReactDebugCurrentFrame;
    function je(m) {
      if (m) {
        var M = m._owner, V = $(m.type, m._source, M ? M.type : null);
        He.setExtraStackFrame(V);
      } else
        He.setExtraStackFrame(null);
    }
    var ut;
    ut = !1;
    function Lt(m) {
      return typeof m == "object" && m !== null && m.$$typeof === t;
    }
    function Mt() {
      {
        if (xn.current) {
          var m = B(xn.current.type);
          if (m)
            return `

Check the render method of \`` + m + "`.";
        }
        return "";
      }
    }
    function qt(m) {
      return "";
    }
    var gn = {};
    function jn(m) {
      {
        var M = Mt();
        if (!M) {
          var V = typeof m == "string" ? m : m.displayName || m.name;
          V && (M = `

Check the top-level render call using <` + V + ">.");
        }
        return M;
      }
    }
    function mn(m, M) {
      {
        if (!m._store || m._store.validated || m.key != null)
          return;
        m._store.validated = !0;
        var V = jn(M);
        if (gn[V])
          return;
        gn[V] = !0;
        var oe = "";
        m && m._owner && m._owner !== xn.current && (oe = " It was passed a child from " + B(m._owner.type) + "."), je(m), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', V, oe), je(null);
      }
    }
    function Ln(m, M) {
      {
        if (typeof m != "object")
          return;
        if (Ie(m))
          for (var V = 0; V < m.length; V++) {
            var oe = m[V];
            Lt(oe) && mn(oe, M);
          }
        else if (Lt(m))
          m._store && (m._store.validated = !0);
        else if (m) {
          var Se = x(m);
          if (typeof Se == "function" && Se !== m.entries)
            for (var Te = Se.call(m), ge; !(ge = Te.next()).done; )
              Lt(ge.value) && mn(ge.value, M);
        }
      }
    }
    function tn(m) {
      {
        var M = m.type;
        if (M == null || typeof M == "string")
          return;
        var V;
        if (typeof M == "function")
          V = M.propTypes;
        else if (typeof M == "object" && (M.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        M.$$typeof === d))
          V = M.propTypes;
        else
          return;
        if (V) {
          var oe = B(M);
          Je(V, m.props, "prop", oe, m);
        } else if (M.PropTypes !== void 0 && !ut) {
          ut = !0;
          var Se = B(M);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Se || "Unknown");
        }
        typeof M.getDefaultProps == "function" && !M.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function nn(m) {
      {
        for (var M = Object.keys(m.props), V = 0; V < M.length; V++) {
          var oe = M[V];
          if (oe !== "children" && oe !== "key") {
            je(m), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", oe), je(null);
            break;
          }
        }
        m.ref !== null && (je(m), S("Invalid attribute `ref` supplied to `React.Fragment`."), je(null));
      }
    }
    var pr = {};
    function Kr(m, M, V, oe, Se, Te) {
      {
        var ge = U(m);
        if (!ge) {
          var pe = "";
          (m === void 0 || typeof m == "object" && m !== null && Object.keys(m).length === 0) && (pe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var at = qt();
          at ? pe += at : pe += Mt();
          var Fe;
          m === null ? Fe = "null" : Ie(m) ? Fe = "array" : m !== void 0 && m.$$typeof === t ? (Fe = "<" + (B(m.type) || "Unknown") + " />", pe = " Did you accidentally export a JSX literal instead of a component?") : Fe = typeof m, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Fe, pe);
        }
        var Ve = Wt(m, M, V, Se, Te);
        if (Ve == null)
          return Ve;
        if (ge) {
          var We = M.children;
          if (We !== void 0)
            if (oe)
              if (Ie(We)) {
                for (var Mn = 0; Mn < We.length; Mn++)
                  Ln(We[Mn], m);
                Object.freeze && Object.freeze(We);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ln(We, m);
        }
        if (A.call(M, "key")) {
          var vn = B(m), ht = Object.keys(M).filter(function(U0) {
            return U0 !== "key";
          }), Yi = ht.length > 0 ? "{key: someKey, " + ht.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!pr[vn + Yi]) {
            var q0 = ht.length > 0 ? "{" + ht.join(": ..., ") + ": ...}" : "{}";
            S(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Yi, vn, q0, vn), pr[vn + Yi] = !0;
          }
        }
        return m === r ? nn(Ve) : tn(Ve), Ve;
      }
    }
    function et(m, M, V) {
      return Kr(m, M, V, !0);
    }
    function Zr(m, M, V) {
      return Kr(m, M, V, !1);
    }
    var Xi = Zr, $e = et;
    gr.Fragment = r, gr.jsx = Xi, gr.jsxs = $e;
  }()), gr;
}
var Ec;
function rh() {
  return Ec || (Ec = 1, process.env.NODE_ENV === "production" ? Jr.exports = th() : Jr.exports = nh()), Jr.exports;
}
var ee = rh(), pt = function() {
  return pt = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, pt.apply(this, arguments);
};
function Wn(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function oh(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var ih = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, sh = /* @__PURE__ */ oh(
  function(e) {
    return ih.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), De = "-ms-", Ar = "-moz-", Pe = "-webkit-", Ru = "comm", di = "rule", Ba = "decl", ah = "@import", Pu = "@keyframes", ch = "@layer", Iu = Math.abs, za = String.fromCharCode, Ts = Object.assign;
function lh(e, t) {
  return st(e, 0) ^ 45 ? (((t << 2 ^ st(e, 0)) << 2 ^ st(e, 1)) << 2 ^ st(e, 2)) << 2 ^ st(e, 3) : 0;
}
function Nu(e) {
  return e.trim();
}
function Gt(e, t) {
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
function ku(e) {
  return e.length;
}
function _r(e, t) {
  return t.push(e), e;
}
function uh(e, t) {
  return e.map(t).join("");
}
function _c(e, t) {
  return e.filter(function(n) {
    return !Gt(n, t);
  });
}
var hi = 1, Un = 1, ju = 0, _t = 0, Ge = 0, or = "";
function pi(e, t, n, r, o, i, s, a) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: hi, column: Un, length: s, return: "", siblings: a };
}
function rn(e, t) {
  return Ts(pi("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function Dn(e) {
  for (; e.root; )
    e = rn(e.root, { children: [e] });
  _r(e, e.siblings);
}
function fh() {
  return Ge;
}
function dh() {
  return Ge = _t > 0 ? st(or, --_t) : 0, Un--, Ge === 10 && (Un = 1, hi--), Ge;
}
function Rt() {
  return Ge = _t < ju ? st(or, _t++) : 0, Un++, Ge === 10 && (Un = 1, hi++), Ge;
}
function _n() {
  return st(or, _t);
}
function bo() {
  return _t;
}
function xi(e, t) {
  return qn(or, e, t);
}
function As(e) {
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
function hh(e) {
  return hi = Un = 1, ju = zt(or = e), _t = 0, [];
}
function ph(e) {
  return or = "", e;
}
function Gi(e) {
  return Nu(xi(_t - 1, Rs(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function xh(e) {
  for (; (Ge = _n()) && Ge < 33; )
    Rt();
  return As(e) > 2 || As(Ge) > 3 ? "" : " ";
}
function gh(e, t) {
  for (; --t && Rt() && !(Ge < 48 || Ge > 102 || Ge > 57 && Ge < 65 || Ge > 70 && Ge < 97); )
    ;
  return xi(e, bo() + (t < 6 && _n() == 32 && Rt() == 32));
}
function Rs(e) {
  for (; Rt(); )
    switch (Ge) {
      // ] ) " '
      case e:
        return _t;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Rs(Ge);
        break;
      // (
      case 40:
        e === 41 && Rs(e);
        break;
      // \
      case 92:
        Rt();
        break;
    }
  return _t;
}
function mh(e, t) {
  for (; Rt() && e + Ge !== 57; )
    if (e + Ge === 84 && _n() === 47)
      break;
  return "/*" + xi(t, _t - 1) + "*" + za(e === 47 ? e : Rt());
}
function vh(e) {
  for (; !As(_n()); )
    Rt();
  return xi(e, _t);
}
function bh(e) {
  return ph(yo("", null, null, null, [""], e = hh(e), 0, [0], e));
}
function yo(e, t, n, r, o, i, s, a, c) {
  for (var l = 0, u = 0, d = s, f = 0, v = 0, g = 0, p = 1, x = 1, C = 1, S = 0, h = "", E = o, b = i, O = r, _ = h; x; )
    switch (g = S, S = Rt()) {
      // (
      case 40:
        if (g != 108 && st(_, d - 1) == 58) {
          vo(_ += he(Gi(S), "&", "&\f"), "&\f", Iu(l ? a[l - 1] : 0)) != -1 && (C = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        _ += Gi(S);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        _ += xh(g);
        break;
      // \
      case 92:
        _ += gh(bo() - 1, 7);
        continue;
      // /
      case 47:
        switch (_n()) {
          case 42:
          case 47:
            _r(yh(mh(Rt(), bo()), t, n, c), c);
            break;
          default:
            _ += "/";
        }
        break;
      // {
      case 123 * p:
        a[l++] = zt(_) * C;
      // } ; \0
      case 125 * p:
      case 59:
      case 0:
        switch (S) {
          // \0 }
          case 0:
          case 125:
            x = 0;
          // ;
          case 59 + u:
            C == -1 && (_ = he(_, /\f/g, "")), v > 0 && zt(_) - d && _r(v > 32 ? Tc(_ + ";", r, n, d - 1, c) : Tc(he(_, " ", "") + ";", r, n, d - 2, c), c);
            break;
          // @ ;
          case 59:
            _ += ";";
          // { rule/at-rule
          default:
            if (_r(O = Oc(_, t, n, l, u, o, a, h, E = [], b = [], d, i), i), S === 123)
              if (u === 0)
                yo(_, t, O, O, E, i, d, a, b);
              else
                switch (f === 99 && st(_, 3) === 110 ? 100 : f) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    yo(e, O, O, r && _r(Oc(e, O, O, 0, 0, o, a, h, o, E = [], d, b), b), o, b, d, a, r ? E : b);
                    break;
                  default:
                    yo(_, O, O, O, [""], b, 0, a, b);
                }
        }
        l = u = v = 0, p = C = 1, h = _ = "", d = s;
        break;
      // :
      case 58:
        d = 1 + zt(_), v = g;
      default:
        if (p < 1) {
          if (S == 123)
            --p;
          else if (S == 125 && p++ == 0 && dh() == 125)
            continue;
        }
        switch (_ += za(S), S * p) {
          // &
          case 38:
            C = u > 0 ? 1 : (_ += "\f", -1);
            break;
          // ,
          case 44:
            a[l++] = (zt(_) - 1) * C, C = 1;
            break;
          // @
          case 64:
            _n() === 45 && (_ += Gi(Rt())), f = _n(), u = d = zt(h = _ += vh(bo())), S++;
            break;
          // -
          case 45:
            g === 45 && zt(_) == 2 && (p = 0);
        }
    }
  return i;
}
function Oc(e, t, n, r, o, i, s, a, c, l, u, d) {
  for (var f = o - 1, v = o === 0 ? i : [""], g = ku(v), p = 0, x = 0, C = 0; p < r; ++p)
    for (var S = 0, h = qn(e, f + 1, f = Iu(x = s[p])), E = e; S < g; ++S)
      (E = Nu(x > 0 ? v[S] + " " + h : he(h, /&\f/g, v[S]))) && (c[C++] = E);
  return pi(e, t, n, o === 0 ? di : a, c, l, u, d);
}
function yh(e, t, n, r) {
  return pi(e, t, n, Ru, za(fh()), qn(e, 2, -2), 0, r);
}
function Tc(e, t, n, r, o) {
  return pi(e, t, n, Ba, qn(e, 0, r), qn(e, r + 1, -1), r, o);
}
function Lu(e, t, n) {
  switch (lh(e, t)) {
    // color-adjust
    case 5103:
      return Pe + "print-" + e + e;
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
      return Pe + e + e;
    // tab-size
    case 4789:
      return Ar + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Pe + e + Ar + e + De + e + e;
    // writing-mode
    case 5936:
      switch (st(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return Pe + e + De + he(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return Pe + e + De + he(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return Pe + e + De + he(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return Pe + e + De + e + e;
    // order
    case 6165:
      return Pe + e + De + "flex-" + e + e;
    // align-items
    case 5187:
      return Pe + e + he(e, /(\w+).+(:[^]+)/, Pe + "box-$1$2" + De + "flex-$1$2") + e;
    // align-self
    case 5443:
      return Pe + e + De + "flex-item-" + he(e, /flex-|-self/g, "") + (Gt(e, /flex-|baseline/) ? "" : De + "grid-row-" + he(e, /flex-|-self/g, "")) + e;
    // align-content
    case 4675:
      return Pe + e + De + "flex-line-pack" + he(e, /align-content|flex-|-self/g, "") + e;
    // flex-shrink
    case 5548:
      return Pe + e + De + he(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return Pe + e + De + he(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return Pe + "box-" + he(e, "-grow", "") + Pe + e + De + he(e, "grow", "positive") + e;
    // transition
    case 4554:
      return Pe + he(e, /([^-])(transform)/g, "$1" + Pe + "$2") + e;
    // cursor
    case 6187:
      return he(he(he(e, /(zoom-|grab)/, Pe + "$1"), /(image-set)/, Pe + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return he(e, /(image-set\([^]*)/, Pe + "$1$`$1");
    // justify-content
    case 4968:
      return he(he(e, /(.+:)(flex-)?(.*)/, Pe + "box-pack:$3" + De + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Pe + e + e;
    // justify-self
    case 4200:
      if (!Gt(e, /flex-|baseline/)) return De + "grid-column-align" + qn(e, t) + e;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return De + he(e, "template-", "") + e;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return n && n.some(function(r, o) {
        return t = o, Gt(r.props, /grid-\w+-end/);
      }) ? ~vo(e + (n = n[t].value), "span", 0) ? e : De + he(e, "-start", "") + e + De + "grid-row-span:" + (~vo(n, "span", 0) ? Gt(n, /\d+/) : +Gt(n, /\d+/) - +Gt(e, /\d+/)) + ";" : De + he(e, "-start", "") + e;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return Gt(r.props, /grid-\w+-start/);
      }) ? e : De + he(he(e, "-end", "-span"), "span ", "") + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return he(e, /(.+)-inline(.+)/, Pe + "$1$2") + e;
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
            return he(e, /(.+:)(.+)-([^]+)/, "$1" + Pe + "$2-$3$1" + Ar + (st(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          // (s)tretch
          case 115:
            return ~vo(e, "stretch", 0) ? Lu(he(e, "stretch", "fill-available"), t, n) + e : e;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return he(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, s, a, c, l) {
        return De + o + ":" + i + l + (s ? De + o + "-span:" + (a ? c : +c - +i) + l : "") + e;
      });
    // position: sticky
    case 4949:
      if (st(e, t + 6) === 121)
        return he(e, ":", ":" + Pe) + e;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (st(e, st(e, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return he(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + Pe + (st(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Pe + "$2$3$1" + De + "$2box$3") + e;
        // (inline-)?gri(d)
        case 100:
          return he(e, ":", ":" + De) + e;
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
function Sh(e, t, n, r) {
  switch (e.type) {
    case ch:
      if (e.children.length) break;
    case ah:
    case Ba:
      return e.return = e.return || e.value;
    case Ru:
      return "";
    case Pu:
      return e.return = e.value + "{" + Ho(e.children, r) + "}";
    case di:
      if (!zt(e.value = e.props.join(","))) return "";
  }
  return zt(n = Ho(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Ch(e) {
  var t = ku(e);
  return function(n, r, o, i) {
    for (var s = "", a = 0; a < t; a++)
      s += e[a](n, r, o, i) || "";
    return s;
  };
}
function wh(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Eh(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Ba:
        e.return = Lu(e.value, e.length, n);
        return;
      case Pu:
        return Ho([rn(e, { value: he(e.value, "@", "@" + Pe) })], r);
      case di:
        if (e.length)
          return uh(n = e.props, function(o) {
            switch (Gt(o, r = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                Dn(rn(e, { props: [he(o, /:(read-\w+)/, ":" + Ar + "$1")] })), Dn(rn(e, { props: [o] })), Ts(e, { props: _c(n, r) });
                break;
              // :placeholder
              case "::placeholder":
                Dn(rn(e, { props: [he(o, /:(plac\w+)/, ":" + Pe + "input-$1")] })), Dn(rn(e, { props: [he(o, /:(plac\w+)/, ":" + Ar + "$1")] })), Dn(rn(e, { props: [he(o, /:(plac\w+)/, De + "input-$1")] })), Dn(rn(e, { props: [o] })), Ts(e, { props: _c(n, r) });
                break;
            }
            return "";
          });
    }
}
var _h = {
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
}, In = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Mu = "active", Du = "data-styled-version", gi = "6.1.18", Ha = `/*!sc*/
`, Fo = typeof window < "u" && typeof document < "u", Oh = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Ac = /invalid hook call/i, Qr = /* @__PURE__ */ new Set(), Th = function(e, t) {
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
        Ac.test(s) ? (i = !1, Qr.delete(r)) : o.apply(void 0, Wn([s], a, !1));
      }, Ee(), i && !Qr.has(r) && (console.warn(r), Qr.add(r));
    } catch (s) {
      Ac.test(s.message) && Qr.delete(r);
    } finally {
      console.error = o;
    }
  }
}, mi = Object.freeze([]), Xn = Object.freeze({});
function Ah(e, t, n) {
  return n === void 0 && (n = Xn), e.theme !== n.theme && e.theme || t || n.theme;
}
var Ps = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Rh = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Ph = /(^-|-$)/g;
function Rc(e) {
  return e.replace(Rh, "-").replace(Ph, "");
}
var Ih = /(a)(d)/gi, eo = 52, Pc = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Is(e) {
  var t, n = "";
  for (t = Math.abs(e); t > eo; t = t / eo | 0) n = Pc(t % eo) + n;
  return (Pc(t % eo) + n).replace(Ih, "$1-$2");
}
var Ki, Bu = 5381, yn = function(e, t) {
  for (var n = t.length; n; ) e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, zu = function(e) {
  return yn(Bu, e);
};
function Nh(e) {
  return Is(zu(e) >>> 0);
}
function Hu(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Zi(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Fu = typeof Symbol == "function" && Symbol.for, $u = Fu ? Symbol.for("react.memo") : 60115, kh = Fu ? Symbol.for("react.forward_ref") : 60112, jh = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Lh = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Vu = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Mh = ((Ki = {})[kh] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Ki[$u] = Vu, Ki);
function Ic(e) {
  return ("type" in (t = e) && t.type.$$typeof) === $u ? Vu : "$$typeof" in e ? Mh[e.$$typeof] : jh;
  var t;
}
var Dh = Object.defineProperty, Bh = Object.getOwnPropertyNames, Nc = Object.getOwnPropertySymbols, zh = Object.getOwnPropertyDescriptor, Hh = Object.getPrototypeOf, kc = Object.prototype;
function Wu(e, t, n) {
  if (typeof t != "string") {
    if (kc) {
      var r = Hh(t);
      r && r !== kc && Wu(e, r, n);
    }
    var o = Bh(t);
    Nc && (o = o.concat(Nc(t)));
    for (var i = Ic(e), s = Ic(t), a = 0; a < o.length; ++a) {
      var c = o[a];
      if (!(c in Lh || n && n[c] || s && c in s || i && c in i)) {
        var l = zh(t, c);
        try {
          Dh(e, c, l);
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
function Fa(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function Cn(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function jc(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += e[r];
  return n;
}
function Gn(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Ns(e, t, n) {
  if (n === void 0 && (n = !1), !n && !Gn(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var r = 0; r < t.length; r++) e[r] = Ns(e[r], t[r]);
  else if (Gn(t)) for (var r in t) e[r] = Ns(e[r], t[r]);
  return e;
}
function $a(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var Fh = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function $h() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var n = e[0], r = [], o = 1, i = e.length; o < i; o += 1) r.push(e[o]);
  return r.forEach(function(s) {
    n = n.replace(/%[a-z]/, s);
  }), n;
}
function ir(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error($h.apply(void 0, Wn([Fh[e]], t, !1)).trim());
}
var Vh = function() {
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
    for (var r = this.groupSizes[t], o = this.indexOfGroup(t), i = o + r, s = o; s < i; s++) n += "".concat(this.tag.getRule(s)).concat(Ha);
    return n;
  }, e;
}(), Wh = 1 << 30, So = /* @__PURE__ */ new Map(), $o = /* @__PURE__ */ new Map(), Co = 1, to = function(e) {
  if (So.has(e)) return So.get(e);
  for (; $o.has(Co); ) Co++;
  var t = Co++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > Wh)) throw ir(16, "".concat(t));
  return So.set(e, t), $o.set(t, e), t;
}, qh = function(e, t) {
  Co = t + 1, So.set(e, t), $o.set(t, e);
}, Uh = "style[".concat(In, "][").concat(Du, '="').concat(gi, '"]'), Xh = new RegExp("^".concat(In, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Yh = function(e, t, n) {
  for (var r, o = n.split(","), i = 0, s = o.length; i < s; i++) (r = o[i]) && e.registerName(t, r);
}, Gh = function(e, t) {
  for (var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(Ha), o = [], i = 0, s = r.length; i < s; i++) {
    var a = r[i].trim();
    if (a) {
      var c = a.match(Xh);
      if (c) {
        var l = 0 | parseInt(c[1], 10), u = c[2];
        l !== 0 && (qh(u, l), Yh(e, u, c[3]), e.getTag().insertRules(l, o)), o.length = 0;
      } else o.push(a);
    }
  }
}, Lc = function(e) {
  for (var t = document.querySelectorAll(Uh), n = 0, r = t.length; n < r; n++) {
    var o = t[n];
    o && o.getAttribute(In) !== Mu && (Gh(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function Kh() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var qu = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(a) {
    var c = Array.from(a.querySelectorAll("style[".concat(In, "]")));
    return c[c.length - 1];
  }(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(In, Mu), r.setAttribute(Du, gi);
  var s = Kh();
  return s && r.setAttribute("nonce", s), n.insertBefore(r, i), r;
}, Zh = function() {
  function e(t) {
    this.element = qu(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
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
}(), Jh = function() {
  function e(t) {
    this.element = qu(t), this.nodes = this.element.childNodes, this.length = 0;
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
}(), Qh = function() {
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
}(), Mc = Fo, ep = { isServer: !Fo, useCSSOMInjection: !Oh }, Uu = function() {
  function e(t, n, r) {
    t === void 0 && (t = Xn), n === void 0 && (n = {});
    var o = this;
    this.options = pt(pt({}, ep), t), this.gs = n, this.names = new Map(r), this.server = !!t.isServer, !this.server && Fo && Mc && (Mc = !1, Lc(this)), $a(this, function() {
      return function(i) {
        for (var s = i.getTag(), a = s.length, c = "", l = function(d) {
          var f = function(C) {
            return $o.get(C);
          }(d);
          if (f === void 0) return "continue";
          var v = i.names.get(f), g = s.getGroup(d);
          if (v === void 0 || !v.size || g.length === 0) return "continue";
          var p = "".concat(In, ".g").concat(d, '[id="').concat(f, '"]'), x = "";
          v !== void 0 && v.forEach(function(C) {
            C.length > 0 && (x += "".concat(C, ","));
          }), c += "".concat(g).concat(p, '{content:"').concat(x, '"}').concat(Ha);
        }, u = 0; u < a; u++) l(u);
        return c;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return to(t);
  }, e.prototype.rehydrate = function() {
    !this.server && Fo && Lc(this);
  }, e.prototype.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(pt(pt({}, this.options), t), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(n) {
      var r = n.useCSSOMInjection, o = n.target;
      return n.isServer ? new Qh(o) : r ? new Zh(o) : new Jh(o);
    }(this.options), new Vh(t)));
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
}(), tp = /&/g, np = /^\s*\/\/.*$/gm;
function Xu(e, t) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function(r) {
      return "".concat(t, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = Xu(n.children, t)), n;
  });
}
function rp(e) {
  var t, n, r, o = Xn, i = o.options, s = i === void 0 ? Xn : i, a = o.plugins, c = a === void 0 ? mi : a, l = function(f, v, g) {
    return g.startsWith(n) && g.endsWith(n) && g.replaceAll(n, "").length > 0 ? ".".concat(t) : f;
  }, u = c.slice();
  u.push(function(f) {
    f.type === di && f.value.includes("&") && (f.props[0] = f.props[0].replace(tp, n).replace(r, l));
  }), s.prefix && u.push(Eh), u.push(Sh);
  var d = function(f, v, g, p) {
    v === void 0 && (v = ""), g === void 0 && (g = ""), p === void 0 && (p = "&"), t = p, n = v, r = new RegExp("\\".concat(n, "\\b"), "g");
    var x = f.replace(np, ""), C = bh(g || v ? "".concat(g, " ").concat(v, " { ").concat(x, " }") : x);
    s.namespace && (C = Xu(C, s.namespace));
    var S = [];
    return Ho(C, Ch(u.concat(wh(function(h) {
      return S.push(h);
    })))), S;
  };
  return d.hash = c.length ? c.reduce(function(f, v) {
    return v.name || ir(15), yn(f, v.name);
  }, Bu).toString() : "", d;
}
var op = new Uu(), ks = rp(), Yu = W.createContext({ shouldForwardProp: void 0, styleSheet: op, stylis: ks });
Yu.Consumer;
W.createContext(void 0);
function Dc() {
  return Et(Yu);
}
var Bc = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = ks);
      var s = r.name + i.hash;
      o.hasNameForId(r.id, s) || o.insertRules(r.id, s, i(r.rules, s, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, $a(this, function() {
      throw ir(12, String(r.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = ks), this.name + t.hash;
  }, e;
}(), ip = function(e) {
  return e >= "A" && e <= "Z";
};
function zc(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    ip(r) ? t += "-" + r.toLowerCase() : t += r;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Gu = function(e) {
  return e == null || e === !1 || e === "";
}, Ku = function(e) {
  var t, n, r = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !Gu(i) && (Array.isArray(i) && i.isCss || Yn(i) ? r.push("".concat(zc(o), ":"), i, ";") : Gn(i) ? r.push.apply(r, Wn(Wn(["".concat(o, " {")], Ku(i), !1), ["}"], !1)) : r.push("".concat(zc(o), ": ").concat((t = o, (n = i) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in _h || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function On(e, t, n, r) {
  if (Gu(e)) return [];
  if (Fa(e)) return [".".concat(e.styledComponentId)];
  if (Yn(e)) {
    if (!Yn(i = e) || i.prototype && i.prototype.isReactComponent || !t) return [e];
    var o = e(t);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof Bc || Gn(o) || o === null || console.error("".concat(Hu(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), On(o, t, n, r);
  }
  var i;
  return e instanceof Bc ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : Gn(e) ? Ku(e) : Array.isArray(e) ? Array.prototype.concat.apply(mi, e.map(function(s) {
    return On(s, t, n, r);
  })) : [e.toString()];
}
function sp(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (Yn(n) && !Fa(n)) return !1;
  }
  return !0;
}
var ap = zu(gi), cp = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && sp(t), this.componentId = n, this.baseHash = yn(ap, n), this.baseStyle = r, Uu.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId)) o = Cn(o, this.staticRulesId);
    else {
      var i = jc(On(this.rules, t, n, r)), s = Is(yn(this.baseHash, i) >>> 0);
      if (!n.hasNameForId(this.componentId, s)) {
        var a = r(i, ".".concat(s), void 0, this.componentId);
        n.insertRules(this.componentId, s, a);
      }
      o = Cn(o, s), this.staticRulesId = s;
    }
    else {
      for (var c = yn(this.baseHash, r.hash), l = "", u = 0; u < this.rules.length; u++) {
        var d = this.rules[u];
        if (typeof d == "string") l += d, process.env.NODE_ENV !== "production" && (c = yn(c, d));
        else if (d) {
          var f = jc(On(d, t, n, r));
          c = yn(c, f + u), l += f;
        }
      }
      if (l) {
        var v = Is(c >>> 0);
        n.hasNameForId(this.componentId, v) || n.insertRules(this.componentId, v, r(l, ".".concat(v), void 0, this.componentId)), o = Cn(o, v);
      }
    }
    return o;
  }, e;
}(), Zu = W.createContext(void 0);
Zu.Consumer;
var Ji = {}, Hc = /* @__PURE__ */ new Set();
function lp(e, t, n) {
  var r = Fa(e), o = e, i = !Zi(e), s = t.attrs, a = s === void 0 ? mi : s, c = t.componentId, l = c === void 0 ? function(E, b) {
    var O = typeof E != "string" ? "sc" : Rc(E);
    Ji[O] = (Ji[O] || 0) + 1;
    var _ = "".concat(O, "-").concat(Nh(gi + O + Ji[O]));
    return b ? "".concat(b, "-").concat(_) : _;
  }(t.displayName, t.parentComponentId) : c, u = t.displayName, d = u === void 0 ? function(E) {
    return Zi(E) ? "styled.".concat(E) : "Styled(".concat(Hu(E), ")");
  }(e) : u, f = t.displayName && t.componentId ? "".concat(Rc(t.displayName), "-").concat(t.componentId) : t.componentId || l, v = r && o.attrs ? o.attrs.concat(a).filter(Boolean) : a, g = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var p = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var x = t.shouldForwardProp;
      g = function(E, b) {
        return p(E, b) && x(E, b);
      };
    } else g = p;
  }
  var C = new cp(n, f, r ? o.componentStyle : void 0);
  function S(E, b) {
    return function(O, _, j) {
      var z = O.attrs, U = O.componentStyle, ne = O.defaultProps, J = O.foldedComponentIds, B = O.styledComponentId, Y = O.target, K = W.useContext(Zu), k = Dc(), R = O.shouldForwardProp || k.shouldForwardProp;
      process.env.NODE_ENV !== "production" && yc(B);
      var P = Ah(_, K, ne) || Xn, L = function(ce, le, ue) {
        for (var _e, me = pt(pt({}, le), { className: void 0, theme: ue }), Me = 0; Me < ce.length; Me += 1) {
          var ke = Yn(_e = ce[Me]) ? _e(me) : _e;
          for (var N in ke) me[N] = N === "className" ? Cn(me[N], ke[N]) : N === "style" ? pt(pt({}, me[N]), ke[N]) : ke[N];
        }
        return le.className && (me.className = Cn(me.className, le.className)), me;
      }(z, _, P), H = L.as || Y, F = {};
      for (var X in L) L[X] === void 0 || X[0] === "$" || X === "as" || X === "theme" && L.theme === P || (X === "forwardedAs" ? F.as = L.forwardedAs : R && !R(X, H) || (F[X] = L[X], R || process.env.NODE_ENV !== "development" || sh(X) || Hc.has(X) || !Ps.has(H) || (Hc.add(X), console.warn('styled-components: it looks like an unknown prop "'.concat(X, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var te = function(ce, le) {
        var ue = Dc(), _e = ce.generateAndInjectStyles(le, ue.styleSheet, ue.stylis);
        return process.env.NODE_ENV !== "production" && yc(_e), _e;
      }(U, L);
      process.env.NODE_ENV !== "production" && O.warnTooManyClasses && O.warnTooManyClasses(te);
      var Z = Cn(J, B);
      return te && (Z += " " + te), L.className && (Z += " " + L.className), F[Zi(H) && !Ps.has(H) ? "class" : "className"] = Z, j && (F.ref = j), G0(H, F);
    }(h, E, b);
  }
  S.displayName = d;
  var h = W.forwardRef(S);
  return h.attrs = v, h.componentStyle = C, h.displayName = d, h.shouldForwardProp = g, h.foldedComponentIds = r ? Cn(o.foldedComponentIds, o.styledComponentId) : "", h.styledComponentId = f, h.target = r ? o.target : e, Object.defineProperty(h, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(E) {
    this._foldedDefaultProps = r ? function(b) {
      for (var O = [], _ = 1; _ < arguments.length; _++) O[_ - 1] = arguments[_];
      for (var j = 0, z = O; j < z.length; j++) Ns(b, z[j], !0);
      return b;
    }({}, o.defaultProps, E) : E;
  } }), process.env.NODE_ENV !== "production" && (Th(d, f), h.warnTooManyClasses = /* @__PURE__ */ function(E, b) {
    var O = {}, _ = !1;
    return function(j) {
      if (!_ && (O[j] = !0, Object.keys(O).length >= 200)) {
        var z = b ? ' with the id of "'.concat(b, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(E).concat(z, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), _ = !0, O = {};
      }
    };
  }(d, f)), $a(h, function() {
    return ".".concat(h.styledComponentId);
  }), i && Wu(h, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), h;
}
function Fc(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
  return n;
}
var $c = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function up(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (Yn(e) || Gn(e)) return $c(On(Fc(mi, Wn([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string" ? On(r) : $c(On(Fc(r, t)));
}
function js(e, t, n) {
  if (n === void 0 && (n = Xn), !t) throw ir(1, t);
  var r = function(o) {
    for (var i = [], s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
    return e(t, n, up.apply(void 0, Wn([o], i, !1)));
  };
  return r.attrs = function(o) {
    return js(e, t, pt(pt({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return js(e, t, pt(pt({}, n), o));
  }, r;
}
var Ju = function(e) {
  return js(lp, e);
}, kt = Ju;
Ps.forEach(function(e) {
  kt[e] = Ju(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var no = "__sc-".concat(In, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[no] || (window[no] = 0), window[no] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[no] += 1);
const $r = Vo;
(function(e, t) {
  const n = Vo, r = e();
  for (; ; )
    try {
      if (-parseInt(n(375)) / 1 * (-parseInt(n(381)) / 2) + -parseInt(n(378)) / 3 + parseInt(n(377)) / 4 * (parseInt(n(380)) / 5) + parseInt(n(374)) / 6 + parseInt(n(383)) / 7 * (-parseInt(n(373)) / 8) + parseInt(n(379)) / 9 + parseInt(n(371)) / 10 === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Wo, 541943);
const fp = kt[$r(376)]`
  flex-direction: column;
  border-radius: 15px;
  border: 3px solid #a0beeb;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
  justify-items: center;
  align-items: center;
`, dp = kt[$r(376)]`
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
`, hp = kt[$r(372)]`
  border-radius: 7px;
  display: inline;
  padding: 0;
  &:focus-visible {
    outline: none;
  }
`, pp = kt[$r(382)]`
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
function Vo(e, t) {
  const n = Wo();
  return Vo = function(r, o) {
    return r = r - 371, n[r];
  }, Vo(e, t);
}
function Wo() {
  const e = ["2942805nWDhHP", "9134505UxfTjQ", "10tlSkDY", "2MfyLMn", "span", "20839txIxpD", "1926470ApTpoG", "canvas", "2048RaPWUx", "3531798JwQETL", "464171EdwatQ", "div", "49188RRCzIq"];
  return Wo = function() {
    return e;
  }, Wo();
}
const xp = kt[$r(376)]`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  pointer-events: none;
`, Qu = /* @__PURE__ */ fi({});
var Qi = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Vc;
function gp() {
  return Vc || (Vc = 1, function(e) {
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
var mp = gp();
const Ce = /* @__PURE__ */ eh(mp), vp = {
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
const Wc = (e, t, n) => n === 0 ? e : e / 100;
function mr(e, t) {
  const n = t || 255;
  return e > n ? n : e < 0 ? 0 : e;
}
let ro = class ef {
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
        const i = vp[r.toLowerCase()];
        i && this.fromHexString(
          // Convert 36 hex to 16 hex
          parseInt(i, 36).toString(16).padStart(6, "0")
        );
      }
    } else if (t instanceof ef)
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
    const n = es(t, Wc);
    this.fromHsv({
      h: n[0],
      s: n[1],
      v: n[2],
      a: n[3]
    });
  }
  fromHslString(t) {
    const n = es(t, Wc);
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
const oo = 2, qc = 0.16, bp = 0.05, yp = 0.05, Sp = 0.15, tf = 5, nf = 4, Cp = [{
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
function Uc(e, t, n) {
  let r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = n ? Math.round(e.h) - oo * t : Math.round(e.h) + oo * t : r = n ? Math.round(e.h) + oo * t : Math.round(e.h) - oo * t, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function Xc(e, t, n) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  let r;
  return n ? r = e.s - qc * t : t === nf ? r = e.s + qc : r = e.s + bp * t, r > 1 && (r = 1), n && t === tf && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Math.round(r * 100) / 100;
}
function Yc(e, t, n) {
  let r;
  return n ? r = e.v + yp * t : r = e.v - Sp * t, r = Math.max(0, Math.min(1, r)), Math.round(r * 100) / 100;
}
function wp(e, t = {}) {
  const n = [], r = new ro(e), o = r.toHsv();
  for (let i = tf; i > 0; i -= 1) {
    const s = new ro({
      h: Uc(o, i, !0),
      s: Xc(o, i, !0),
      v: Yc(o, i, !0)
    });
    n.push(s);
  }
  n.push(r);
  for (let i = 1; i <= nf; i += 1) {
    const s = new ro({
      h: Uc(o, i),
      s: Xc(o, i),
      v: Yc(o, i)
    });
    n.push(s);
  }
  return t.theme === "dark" ? Cp.map(({
    index: i,
    amount: s
  }) => new ro(t.backgroundColor || "#141414").mix(n[i], s).toHexString()) : n.map((i) => i.toHexString());
}
const Ls = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
Ls.primary = Ls[5];
function Ep() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function _p(e, t) {
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
const Gc = "data-rc-order", Kc = "data-rc-priority", Op = "rc-util-key", Ms = /* @__PURE__ */ new Map();
function rf({
  mark: e
} = {}) {
  return e ? e.startsWith("data-") ? e : `data-${e}` : Op;
}
function Va(e) {
  return e.attachTo ? e.attachTo : document.querySelector("head") || document.body;
}
function Tp(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Wa(e) {
  return Array.from((Ms.get(e) || e).children).filter((t) => t.tagName === "STYLE");
}
function of(e, t = {}) {
  if (!Ep())
    return null;
  const {
    csp: n,
    prepend: r,
    priority: o = 0
  } = t, i = Tp(r), s = i === "prependQueue", a = document.createElement("style");
  a.setAttribute(Gc, i), s && o && a.setAttribute(Kc, `${o}`), n != null && n.nonce && (a.nonce = n == null ? void 0 : n.nonce), a.innerHTML = e;
  const c = Va(t), {
    firstChild: l
  } = c;
  if (r) {
    if (s) {
      const u = (t.styles || Wa(c)).filter((d) => {
        if (!["prepend", "prependQueue"].includes(d.getAttribute(Gc)))
          return !1;
        const f = Number(d.getAttribute(Kc) || 0);
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
function Ap(e, t = {}) {
  let {
    styles: n
  } = t;
  return n || (n = Wa(Va(t))), n.find((r) => r.getAttribute(rf(t)) === e);
}
function Rp(e, t) {
  const n = Ms.get(e);
  if (!n || !_p(document, n)) {
    const r = of("", t), {
      parentNode: o
    } = r;
    Ms.set(e, o), e.removeChild(r);
  }
}
function Pp(e, t, n = {}) {
  var c, l, u;
  const r = Va(n), o = Wa(r), i = {
    ...n,
    styles: o
  };
  Rp(r, i);
  const s = Ap(t, i);
  if (s)
    return (c = i.csp) != null && c.nonce && s.nonce !== ((l = i.csp) == null ? void 0 : l.nonce) && (s.nonce = (u = i.csp) == null ? void 0 : u.nonce), s.innerHTML !== e && (s.innerHTML = e), s;
  const a = of(e, i);
  return a.setAttribute(rf(i), t), a;
}
function sf(e) {
  var t;
  return (t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e);
}
function Ip(e) {
  return sf(e) instanceof ShadowRoot;
}
function Np(e) {
  return Ip(e) ? sf(e) : null;
}
let Ds = {};
const qa = [], kp = (e) => {
  qa.push(e);
};
function jp(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    const n = qa.reduce((r, o) => o(r ?? "", "warning"), t);
    n && console.error(`Warning: ${n}`);
  }
}
function Lp(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    const n = qa.reduce((r, o) => o(r ?? "", "note"), t);
    n && console.warn(`Note: ${n}`);
  }
}
function Mp() {
  Ds = {};
}
function af(e, t, n) {
  !t && !Ds[n] && (e(!1, n), Ds[n] = !0);
}
function vi(e, t) {
  af(jp, e, t);
}
function Dp(e, t) {
  af(Lp, e, t);
}
vi.preMessage = kp;
vi.resetWarned = Mp;
vi.noteOnce = Dp;
function Bp(e) {
  return e.replace(/-(.)/g, (t, n) => n.toUpperCase());
}
function zp(e, t) {
  vi(e, `[@ant-design/icons] ${t}`);
}
function Zc(e) {
  return typeof e == "object" && typeof e.name == "string" && typeof e.theme == "string" && (typeof e.icon == "object" || typeof e.icon == "function");
}
function Jc(e = {}) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    switch (n) {
      case "class":
        t.className = r, delete t.class;
        break;
      default:
        delete t[n], t[Bp(n)] = r;
    }
    return t;
  }, {});
}
function Bs(e, t, n) {
  return n ? /* @__PURE__ */ W.createElement(e.tag, {
    key: t,
    ...Jc(e.attrs),
    ...n
  }, (e.children || []).map((r, o) => Bs(r, `${t}-${e.tag}-${o}`))) : /* @__PURE__ */ W.createElement(e.tag, {
    key: t,
    ...Jc(e.attrs)
  }, (e.children || []).map((r, o) => Bs(r, `${t}-${e.tag}-${o}`)));
}
function cf(e) {
  return wp(e)[0];
}
function lf(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
const Hp = `
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
`, Fp = (e) => {
  const {
    csp: t,
    prefixCls: n,
    layer: r
  } = Et(Qu);
  let o = Hp;
  n && (o = o.replace(/anticon/g, n)), r && (o = `@layer ${r} {
${o}
}`), Ye(() => {
    const i = e.current, s = Np(i);
    Pp(o, "@ant-design-icons", {
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
function $p({
  primaryColor: e,
  secondaryColor: t
}) {
  Rr.primaryColor = e, Rr.secondaryColor = t || cf(e), Rr.calculated = !!t;
}
function Vp() {
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
    secondaryColor: s || cf(i)
  }), Fp(c), zp(Zc(t), `icon should be icon definiton, but got ${t}`), !Zc(t))
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
sr.getTwoToneColors = Vp;
sr.setTwoToneColors = $p;
function uf(e) {
  const [t, n] = lf(e);
  return sr.setTwoToneColors({
    primaryColor: t,
    secondaryColor: n
  });
}
function Wp() {
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
uf(Ls.primary);
const bi = /* @__PURE__ */ w.forwardRef((e, t) => {
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
  } = w.useContext(Qu), f = Ce(d, u, {
    [`${u}-${r.name}`]: !!r.name,
    [`${u}-spin`]: !!o || r.name === "loading"
  }, n);
  let v = s;
  v === void 0 && a && (v = -1);
  const g = i ? {
    msTransform: `rotate(${i}deg)`,
    transform: `rotate(${i}deg)`
  } : void 0, [p, x] = lf(c);
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
    primaryColor: p,
    secondaryColor: x,
    style: g
  }));
});
bi.displayName = "AntdIcon";
bi.getTwoToneColor = Wp;
bi.setTwoToneColor = uf;
var qp = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" }, Up = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, Xp = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, Yp = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" }, Gp = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" }, Kp = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" }, Zp = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z" } }] }, name: "reload", theme: "outlined" };
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
const Jp = (e, t) => /* @__PURE__ */ w.createElement(bi, Hs({}, e, {
  ref: t,
  icon: Zp
})), ff = /* @__PURE__ */ w.forwardRef(Jp);
process.env.NODE_ENV !== "production" && (ff.displayName = "ReloadOutlined");
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
var Qc;
function Qp() {
  if (Qc) return Ae;
  Qc = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g;
  g = Symbol.for("react.module.reference");
  function p(x) {
    if (typeof x == "object" && x !== null) {
      var C = x.$$typeof;
      switch (C) {
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
                  return C;
              }
          }
        case t:
          return C;
      }
    }
  }
  return Ae.ContextConsumer = s, Ae.ContextProvider = i, Ae.Element = e, Ae.ForwardRef = c, Ae.Fragment = n, Ae.Lazy = f, Ae.Memo = d, Ae.Portal = t, Ae.Profiler = o, Ae.StrictMode = r, Ae.Suspense = l, Ae.SuspenseList = u, Ae.isAsyncMode = function() {
    return !1;
  }, Ae.isConcurrentMode = function() {
    return !1;
  }, Ae.isContextConsumer = function(x) {
    return p(x) === s;
  }, Ae.isContextProvider = function(x) {
    return p(x) === i;
  }, Ae.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === e;
  }, Ae.isForwardRef = function(x) {
    return p(x) === c;
  }, Ae.isFragment = function(x) {
    return p(x) === n;
  }, Ae.isLazy = function(x) {
    return p(x) === f;
  }, Ae.isMemo = function(x) {
    return p(x) === d;
  }, Ae.isPortal = function(x) {
    return p(x) === t;
  }, Ae.isProfiler = function(x) {
    return p(x) === o;
  }, Ae.isStrictMode = function(x) {
    return p(x) === r;
  }, Ae.isSuspense = function(x) {
    return p(x) === l;
  }, Ae.isSuspenseList = function(x) {
    return p(x) === u;
  }, Ae.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === n || x === o || x === r || x === l || x === u || x === v || typeof x == "object" && x !== null && (x.$$typeof === f || x.$$typeof === d || x.$$typeof === i || x.$$typeof === s || x.$$typeof === c || x.$$typeof === g || x.getModuleId !== void 0);
  }, Ae.typeOf = p, Ae;
}
var Re = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var el;
function ex() {
  return el || (el = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g = !1, p = !1, x = !1, C = !1, S = !1, h;
    h = Symbol.for("react.module.reference");
    function E(T) {
      return !!(typeof T == "string" || typeof T == "function" || T === n || T === o || S || T === r || T === l || T === u || C || T === v || g || p || x || typeof T == "object" && T !== null && (T.$$typeof === f || T.$$typeof === d || T.$$typeof === i || T.$$typeof === s || T.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      T.$$typeof === h || T.getModuleId !== void 0));
    }
    function b(T) {
      if (typeof T == "object" && T !== null) {
        var $ = T.$$typeof;
        switch ($) {
          case e:
            var A = T.type;
            switch (A) {
              case n:
              case o:
              case r:
              case l:
              case u:
                return A;
              default:
                var re = A && A.$$typeof;
                switch (re) {
                  case a:
                  case s:
                  case c:
                  case f:
                  case d:
                  case i:
                    return re;
                  default:
                    return $;
                }
            }
          case t:
            return $;
        }
      }
    }
    var O = s, _ = i, j = e, z = c, U = n, ne = f, J = d, B = t, Y = o, K = r, k = l, R = u, P = !1, L = !1;
    function H(T) {
      return P || (P = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function F(T) {
      return L || (L = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function X(T) {
      return b(T) === s;
    }
    function te(T) {
      return b(T) === i;
    }
    function Z(T) {
      return typeof T == "object" && T !== null && T.$$typeof === e;
    }
    function ce(T) {
      return b(T) === c;
    }
    function le(T) {
      return b(T) === n;
    }
    function ue(T) {
      return b(T) === f;
    }
    function _e(T) {
      return b(T) === d;
    }
    function me(T) {
      return b(T) === t;
    }
    function Me(T) {
      return b(T) === o;
    }
    function ke(T) {
      return b(T) === r;
    }
    function N(T) {
      return b(T) === l;
    }
    function Q(T) {
      return b(T) === u;
    }
    Re.ContextConsumer = O, Re.ContextProvider = _, Re.Element = j, Re.ForwardRef = z, Re.Fragment = U, Re.Lazy = ne, Re.Memo = J, Re.Portal = B, Re.Profiler = Y, Re.StrictMode = K, Re.Suspense = k, Re.SuspenseList = R, Re.isAsyncMode = H, Re.isConcurrentMode = F, Re.isContextConsumer = X, Re.isContextProvider = te, Re.isElement = Z, Re.isForwardRef = ce, Re.isFragment = le, Re.isLazy = ue, Re.isMemo = _e, Re.isPortal = me, Re.isProfiler = Me, Re.isStrictMode = ke, Re.isSuspense = N, Re.isSuspenseList = Q, Re.isValidElementType = E, Re.typeOf = b;
  }()), Re;
}
var tl;
function tx() {
  return tl || (tl = 1, process.env.NODE_ENV === "production" ? io.exports = Qp() : io.exports = ex()), io.exports;
}
var ts = tx();
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
const Fs = { type: "error", data: "parser error" }, df = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", hf = typeof ArrayBuffer == "function", pf = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer, Ua = ({ type: e, data: t }, n, r) => df && t instanceof Blob ? n ? r(t) : nl(t, r) : hf && (t instanceof ArrayBuffer || pf(t)) ? n ? r(t) : nl(new Blob([t]), r) : r(Ht[e] + (t || "")), nl = (e, t) => {
  const n = new FileReader();
  return n.onload = function() {
    const r = n.result.split(",")[1];
    t("b" + (r || ""));
  }, n.readAsDataURL(e);
};
function rl(e) {
  return e instanceof Uint8Array ? e : e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
let ns;
function nx(e, t) {
  if (df && e.data instanceof Blob)
    return e.data.arrayBuffer().then(rl).then(t);
  if (hf && (e.data instanceof ArrayBuffer || pf(e.data)))
    return t(rl(e.data));
  Ua(e, !1, (n) => {
    ns || (ns = new TextEncoder()), t(ns.encode(n));
  });
}
const ol = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Or = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < ol.length; e++)
  Or[ol.charCodeAt(e)] = e;
const rx = (e) => {
  let t = e.length * 0.75, n = e.length, r, o = 0, i, s, a, c;
  e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
  const l = new ArrayBuffer(t), u = new Uint8Array(l);
  for (r = 0; r < n; r += 4)
    i = Or[e.charCodeAt(r)], s = Or[e.charCodeAt(r + 1)], a = Or[e.charCodeAt(r + 2)], c = Or[e.charCodeAt(r + 3)], u[o++] = i << 2 | s >> 4, u[o++] = (s & 15) << 4 | a >> 2, u[o++] = (a & 3) << 6 | c & 63;
  return l;
}, ox = typeof ArrayBuffer == "function", Xa = (e, t) => {
  if (typeof e != "string")
    return {
      type: "message",
      data: xf(e, t)
    };
  const n = e.charAt(0);
  return n === "b" ? {
    type: "message",
    data: ix(e.substring(1), t)
  } : wo[n] ? e.length > 1 ? {
    type: wo[n],
    data: e.substring(1)
  } : {
    type: wo[n]
  } : Fs;
}, ix = (e, t) => {
  if (ox) {
    const n = rx(e);
    return xf(n, t);
  } else
    return { base64: !0, data: e };
}, xf = (e, t) => {
  switch (t) {
    case "blob":
      return e instanceof Blob ? e : new Blob([e]);
    case "arraybuffer":
    default:
      return e instanceof ArrayBuffer ? e : e.buffer;
  }
}, gf = "", sx = (e, t) => {
  const n = e.length, r = new Array(n);
  let o = 0;
  e.forEach((i, s) => {
    Ua(i, !1, (a) => {
      r[s] = a, ++o === n && t(r.join(gf));
    });
  });
}, ax = (e, t) => {
  const n = e.split(gf), r = [];
  for (let o = 0; o < n.length; o++) {
    const i = Xa(n[o], t);
    if (r.push(i), i.type === "error")
      break;
  }
  return r;
};
function cx() {
  return new TransformStream({
    transform(e, t) {
      nx(e, (n) => {
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
function lx(e, t) {
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
            a.enqueue(Fs);
            break;
          }
          o = u * Math.pow(2, 32) + l.getUint32(4), r = 3;
        } else {
          if (so(n) < o)
            break;
          const c = ao(n, o);
          a.enqueue(Xa(i ? c : rs.decode(c), t)), r = 0;
        }
        if (o === 0 || o > e) {
          a.enqueue(Fs);
          break;
        }
      }
    }
  });
}
const mf = 4;
function Ze(e) {
  if (e) return ux(e);
}
function ux(e) {
  for (var t in Ze.prototype)
    e[t] = Ze.prototype[t];
  return e;
}
Ze.prototype.on = Ze.prototype.addEventListener = function(e, t) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this;
};
Ze.prototype.once = function(e, t) {
  function n() {
    this.off(e, n), t.apply(this, arguments);
  }
  return n.fn = t, this.on(e, n), this;
};
Ze.prototype.off = Ze.prototype.removeListener = Ze.prototype.removeAllListeners = Ze.prototype.removeEventListener = function(e, t) {
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
Ze.prototype.emit = function(e) {
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
Ze.prototype.emitReserved = Ze.prototype.emit;
Ze.prototype.listeners = function(e) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [];
};
Ze.prototype.hasListeners = function(e) {
  return !!this.listeners(e).length;
};
const yi = typeof Promise == "function" && typeof Promise.resolve == "function" ? (t) => Promise.resolve().then(t) : (t, n) => n(t, 0), Ct = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), fx = "arraybuffer";
function vf(e, ...t) {
  return t.reduce((n, r) => (e.hasOwnProperty(r) && (n[r] = e[r]), n), {});
}
const dx = Ct.setTimeout, hx = Ct.clearTimeout;
function Si(e, t) {
  t.useNativeTimers ? (e.setTimeoutFn = dx.bind(Ct), e.clearTimeoutFn = hx.bind(Ct)) : (e.setTimeoutFn = Ct.setTimeout.bind(Ct), e.clearTimeoutFn = Ct.clearTimeout.bind(Ct));
}
const px = 1.33;
function xx(e) {
  return typeof e == "string" ? gx(e) : Math.ceil((e.byteLength || e.size) * px);
}
function gx(e) {
  let t = 0, n = 0;
  for (let r = 0, o = e.length; r < o; r++)
    t = e.charCodeAt(r), t < 128 ? n += 1 : t < 2048 ? n += 2 : t < 55296 || t >= 57344 ? n += 3 : (r++, n += 4);
  return n;
}
function bf() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function mx(e) {
  let t = "";
  for (let n in e)
    e.hasOwnProperty(n) && (t.length && (t += "&"), t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
  return t;
}
function vx(e) {
  let t = {}, n = e.split("&");
  for (let r = 0, o = n.length; r < o; r++) {
    let i = n[r].split("=");
    t[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
  }
  return t;
}
class bx extends Error {
  constructor(t, n, r) {
    super(t), this.description = n, this.context = r, this.type = "TransportError";
  }
}
class Ya extends Ze {
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
    return super.emitReserved("error", new bx(t, n, r)), this;
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
    const n = Xa(t, this.socket.binaryType);
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
    const n = mx(t);
    return n.length ? "?" + n : "";
  }
}
class yx extends Ya {
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
    ax(t, this.socket.binaryType).forEach(n), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
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
    this.writable = !1, sx(t, (n) => {
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
    return this.opts.timestampRequests !== !1 && (n[this.opts.timestampParam] = bf()), !this.supportsBinary && !n.sid && (n.b64 = 1), this.createUri(t, n);
  }
}
let yf = !1;
try {
  yf = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const Sx = yf;
function Cx() {
}
class wx extends yx {
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
let Fn = class Eo extends Ze {
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
    const n = vf(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
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
      if (this._xhr.onreadystatechange = Cx, t)
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
Fn.requestsCount = 0;
Fn.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", il);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in Ct ? "pagehide" : "unload";
    addEventListener(e, il, !1);
  }
}
function il() {
  for (let e in Fn.requests)
    Fn.requests.hasOwnProperty(e) && Fn.requests[e].abort();
}
const Ex = function() {
  const e = Sf({
    xdomain: !1
  });
  return e && e.responseType !== null;
}();
class _x extends wx {
  constructor(t) {
    super(t);
    const n = t && t.forceBase64;
    this.supportsBinary = Ex && !n;
  }
  request(t = {}) {
    return Object.assign(t, { xd: this.xd }, this.opts), new Fn(Sf, this.uri(), t);
  }
}
function Sf(e) {
  const t = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!t || Sx))
      return new XMLHttpRequest();
  } catch {
  }
  if (!t)
    try {
      return new Ct[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const Cf = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class Ox extends Ya {
  get name() {
    return "websocket";
  }
  doOpen() {
    const t = this.uri(), n = this.opts.protocols, r = Cf ? {} : vf(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
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
      Ua(r, this.supportsBinary, (i) => {
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
    return this.opts.timestampRequests && (n[this.opts.timestampParam] = bf()), this.supportsBinary || (n.b64 = 1), this.createUri(t, n);
  }
}
const os = Ct.WebSocket || Ct.MozWebSocket;
class Tx extends Ox {
  createSocket(t, n, r) {
    return Cf ? new os(t, n, r) : n ? new os(t, n) : new os(t);
  }
  doWrite(t, n) {
    this.ws.send(n);
  }
}
class Ax extends Ya {
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
        const n = lx(Number.MAX_SAFE_INTEGER, this.socket.binaryType), r = t.readable.pipeThrough(n).getReader(), o = cx();
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
const Rx = {
  websocket: Tx,
  webtransport: Ax,
  polling: _x
}, Px = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, Ix = [
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
function $s(e) {
  if (e.length > 8e3)
    throw "URI too long";
  const t = e, n = e.indexOf("["), r = e.indexOf("]");
  n != -1 && r != -1 && (e = e.substring(0, n) + e.substring(n, r).replace(/:/g, ";") + e.substring(r, e.length));
  let o = Px.exec(e || ""), i = {}, s = 14;
  for (; s--; )
    i[Ix[s]] = o[s] || "";
  return n != -1 && r != -1 && (i.source = t, i.host = i.host.substring(1, i.host.length - 1).replace(/;/g, ":"), i.authority = i.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), i.ipv6uri = !0), i.pathNames = Nx(i, i.path), i.queryKey = kx(i, i.query), i;
}
function Nx(e, t) {
  const n = /\/{2,9}/g, r = t.replace(n, "/").split("/");
  return (t.slice(0, 1) == "/" || t.length === 0) && r.splice(0, 1), t.slice(-1) == "/" && r.splice(r.length - 1, 1), r;
}
function kx(e, t) {
  const n = {};
  return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(r, o, i) {
    o && (n[o] = i);
  }), n;
}
const Vs = typeof addEventListener == "function" && typeof removeEventListener == "function", _o = [];
Vs && addEventListener("offline", () => {
  _o.forEach((e) => e());
}, !1);
class ln extends Ze {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(t, n) {
    if (super(), this.binaryType = fx, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, t && typeof t == "object" && (n = t, t = null), t) {
      const r = $s(t);
      n.hostname = r.host, n.secure = r.protocol === "https" || r.protocol === "wss", n.port = r.port, r.query && (n.query = r.query);
    } else n.host && (n.hostname = $s(n.host).host);
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
    }, n), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = vx(this.opts.query)), Vs && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
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
    n.EIO = mf, n.transport = t, this.id && (n.sid = this.id);
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
    const t = this.opts.rememberUpgrade && ln.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
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
    this.readyState = "open", ln.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
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
      if (o && (n += xx(o)), r > 0 && n > this._maxPayload)
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
    if (ln.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
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
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), Vs && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const r = _o.indexOf(this._offlineEventListener);
        r !== -1 && _o.splice(r, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", t, n), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
ln.protocol = mf;
class jx extends ln {
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
    ln.priorWebsocketSuccess = !1;
    const o = () => {
      r || (n.send([{ type: "ping", data: "probe" }]), n.once("packet", (d) => {
        if (!r)
          if (d.type === "pong" && d.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", n), !n)
              return;
            ln.priorWebsocketSuccess = n.name === "websocket", this.transport.pause(() => {
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
let Lx = class extends jx {
  constructor(t, n = {}) {
    const r = typeof t == "object" ? t : n;
    (!r.transports || r.transports && typeof r.transports[0] == "string") && (r.transports = (r.transports || ["polling", "websocket", "webtransport"]).map((o) => Rx[o]).filter((o) => !!o)), super(t, r);
  }
};
function Mx(e, t = "", n) {
  let r = e;
  n = n || typeof location < "u" && location, e == null && (e = n.protocol + "//" + n.host), typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = n.protocol + e : e = n.host + e), /^(https?|wss?):\/\//.test(e) || (typeof n < "u" ? e = n.protocol + "//" + e : e = "https://" + e), r = $s(e)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
  const i = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return r.id = r.protocol + "://" + i + ":" + r.port + t, r.href = r.protocol + "://" + i + (n && n.port === r.port ? "" : ":" + r.port), r;
}
const Dx = typeof ArrayBuffer == "function", Bx = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer, wf = Object.prototype.toString, zx = typeof Blob == "function" || typeof Blob < "u" && wf.call(Blob) === "[object BlobConstructor]", Hx = typeof File == "function" || typeof File < "u" && wf.call(File) === "[object FileConstructor]";
function Ga(e) {
  return Dx && (e instanceof ArrayBuffer || Bx(e)) || zx && e instanceof Blob || Hx && e instanceof File;
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
  if (Ga(e))
    return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return Oo(e.toJSON(), !0);
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && Oo(e[n]))
      return !0;
  return !1;
}
function Fx(e) {
  const t = [], n = e.data, r = e;
  return r.data = Ws(n, t), r.attachments = t.length, { packet: r, buffers: t };
}
function Ws(e, t) {
  if (!e)
    return e;
  if (Ga(e)) {
    const n = { _placeholder: !0, num: t.length };
    return t.push(e), n;
  } else if (Array.isArray(e)) {
    const n = new Array(e.length);
    for (let r = 0; r < e.length; r++)
      n[r] = Ws(e[r], t);
    return n;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const n = {};
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (n[r] = Ws(e[r], t));
    return n;
  }
  return e;
}
function $x(e, t) {
  return e.data = qs(e.data, t), delete e.attachments, e;
}
function qs(e, t) {
  if (!e)
    return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < t.length)
      return t[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let n = 0; n < e.length; n++)
      e[n] = qs(e[n], t);
  else if (typeof e == "object")
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (e[n] = qs(e[n], t));
  return e;
}
const Vx = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], Wx = 5;
var ve;
(function(e) {
  e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK";
})(ve || (ve = {}));
class qx {
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
    const n = Fx(t), r = this.encodeAsString(n.packet), o = n.buffers;
    return o.unshift(r), o;
  }
}
function sl(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
class Ka extends Ze {
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
      r || n.type === ve.BINARY_ACK ? (n.type = r ? ve.EVENT : ve.ACK, this.reconstructor = new Ux(n), n.attachments === 0 && super.emitReserved("decoded", n)) : super.emitReserved("decoded", n);
    } else if (Ga(t) || t.base64)
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
      if (Ka.isPayloadValid(r.type, i))
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
        return sl(n);
      case ve.DISCONNECT:
        return n === void 0;
      case ve.CONNECT_ERROR:
        return typeof n == "string" || sl(n);
      case ve.EVENT:
      case ve.BINARY_EVENT:
        return Array.isArray(n) && (typeof n[0] == "number" || typeof n[0] == "string" && Vx.indexOf(n[0]) === -1);
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
class Ux {
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
      const n = $x(this.reconPack, this.buffers);
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
const Xx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: Ka,
  Encoder: qx,
  get PacketType() {
    return ve;
  },
  protocol: Wx
}, Symbol.toStringTag, { value: "Module" }));
function Tt(e, t, n) {
  return e.on(t, n), function() {
    e.off(t, n);
  };
}
const Yx = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class Ef extends Ze {
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
    if (Yx.hasOwnProperty(t))
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
class Us extends Ze {
  constructor(t, n) {
    var r;
    super(), this.nsps = {}, this.subs = [], t && typeof t == "object" && (n = t, t = void 0), n = n || {}, n.path = n.path || "/socket.io", this.opts = n, Si(this, n), this.reconnection(n.reconnection !== !1), this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0), this.reconnectionDelay(n.reconnectionDelay || 1e3), this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3), this.randomizationFactor((r = n.randomizationFactor) !== null && r !== void 0 ? r : 0.5), this.backoff = new ar({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(n.timeout == null ? 2e4 : n.timeout), this._readyState = "closed", this.uri = t;
    const o = n.parser || Xx;
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
    this.engine = new Lx(this.uri, this.opts);
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
    return r ? this._autoConnect && !r.active && r.connect() : (r = new Ef(this, t, n), this.nsps[t] = r), r;
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
function To(e, t) {
  typeof e == "object" && (t = e, e = void 0), t = t || {};
  const n = Mx(e, t.path || "/socket.io"), r = n.source, o = n.id, i = n.path, s = vr[o] && i in vr[o].nsps, a = t.forceNew || t["force new connection"] || t.multiplex === !1 || s;
  let c;
  return a ? c = new Us(r, t) : (vr[o] || (vr[o] = new Us(r, t)), c = vr[o]), n.query && !t.query && (t.query = n.queryKey), c.socket(n.path, t);
}
Object.assign(To, {
  Manager: Us,
  Socket: Ef,
  io: To,
  connect: To
});
function xt() {
  return xt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, xt.apply(null, arguments);
}
function we(e) {
  "@babel/helpers - typeof";
  return we = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, we(e);
}
var Gx = Symbol.for("react.element"), Kx = Symbol.for("react.transitional.element"), Zx = Symbol.for("react.fragment");
function Jx(e) {
  return (
    // Base object type
    e && we(e) === "object" && // React Element type
    (e.$$typeof === Gx || e.$$typeof === Kx) && // React Fragment type
    e.type === Zx
  );
}
var Xs = {}, Za = [], Qx = function(t) {
  Za.push(t);
};
function Ja(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = Za.reduce(function(r, o) {
      return o(r ?? "", "warning");
    }, t);
    n && console.error("Warning: ".concat(n));
  }
}
function eg(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = Za.reduce(function(r, o) {
      return o(r ?? "", "note");
    }, t);
    n && console.warn("Note: ".concat(n));
  }
}
function _f() {
  Xs = {};
}
function Of(e, t, n) {
  !t && !Xs[n] && (e(!1, n), Xs[n] = !0);
}
function dn(e, t) {
  Of(Ja, e, t);
}
function tg(e, t) {
  Of(eg, e, t);
}
dn.preMessage = Qx;
dn.resetWarned = _f;
dn.noteOnce = tg;
function ng(e, t) {
  if (we(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (we(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Tf(e) {
  var t = ng(e, "string");
  return we(t) == "symbol" ? t : t + "";
}
function q(e, t, n) {
  return (t = Tf(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function al(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function G(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? al(Object(n), !0).forEach(function(r) {
      q(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : al(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function cl(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function rg(e) {
  return e && we(e) === "object" && cl(e.nativeElement) ? e.nativeElement : cl(e) ? e : null;
}
function og(e) {
  var t = rg(e);
  if (t)
    return t;
  if (e instanceof W.Component) {
    var n;
    return (n = Sc.findDOMNode) === null || n === void 0 ? void 0 : n.call(Sc, e);
  }
  return null;
}
function Qa(e, t, n) {
  var r = w.useRef({});
  return (!("value" in r.current) || n(r.current.condition, t)) && (r.current.value = e(), r.current.condition = t), r.current.value;
}
var ig = Number(Z0.split(".")[0]), Af = function(t, n) {
  typeof t == "function" ? t(n) : we(t) === "object" && t && "current" in t && (t.current = n);
}, Ci = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  var o = n.filter(Boolean);
  return o.length <= 1 ? o[0] : function(i) {
    n.forEach(function(s) {
      Af(s, i);
    });
  };
}, sg = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return Qa(function() {
    return Ci.apply(void 0, n);
  }, n, function(o, i) {
    return o.length !== i.length || o.every(function(s, a) {
      return s !== i[a];
    });
  });
}, Rf = function(t) {
  var n, r;
  if (!t)
    return !1;
  if (Pf(t) && ig >= 19)
    return !0;
  var o = ts.isMemo(t) ? t.type.type : t.type;
  return !(typeof o == "function" && !((n = o.prototype) !== null && n !== void 0 && n.render) && o.$$typeof !== ts.ForwardRef || typeof t == "function" && !((r = t.prototype) !== null && r !== void 0 && r.render) && t.$$typeof !== ts.ForwardRef);
};
function Pf(e) {
  return /* @__PURE__ */ K0(e) && !Jx(e);
}
var If = function(t) {
  if (t && Pf(t)) {
    var n = t;
    return n.props.propertyIsEnumerable("ref") ? n.props.ref : n.ref;
  }
  return null;
};
function bt(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function ll(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Tf(r.key), r);
  }
}
function yt(e, t, n) {
  return t && ll(e.prototype, t), n && ll(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Ys(e, t) {
  return Ys = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Ys(e, t);
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
  }), t && Ys(e, t);
}
function Kn(e) {
  return Kn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Kn(e);
}
function ec() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (ec = function() {
    return !!e;
  })();
}
function Tn(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Nf(e, t) {
  if (t && (we(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Tn(e);
}
function Vr(e) {
  var t = ec();
  return function() {
    var n, r = Kn(e);
    if (t) {
      var o = Kn(this).constructor;
      n = Reflect.construct(r, arguments, o);
    } else n = r.apply(this, arguments);
    return Nf(this, n);
  };
}
function Gs(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function ag(e) {
  if (Array.isArray(e)) return Gs(e);
}
function kf(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function tc(e, t) {
  if (e) {
    if (typeof e == "string") return Gs(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Gs(e, t) : void 0;
  }
}
function cg() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ft(e) {
  return ag(e) || kf(e) || tc(e) || cg();
}
var jf = function(t) {
  return +setTimeout(t, 16);
}, Lf = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (jf = function(t) {
  return window.requestAnimationFrame(t);
}, Lf = function(t) {
  return window.cancelAnimationFrame(t);
});
var ul = 0, wi = /* @__PURE__ */ new Map();
function Mf(e) {
  wi.delete(e);
}
var un = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  ul += 1;
  var r = ul;
  function o(i) {
    if (i === 0)
      Mf(r), t();
    else {
      var s = jf(function() {
        o(i - 1);
      });
      wi.set(r, s);
    }
  }
  return o(n), r;
};
un.cancel = function(e) {
  var t = wi.get(e);
  return Mf(e), Lf(t);
};
process.env.NODE_ENV !== "production" && (un.ids = function() {
  return wi;
});
function Df(e) {
  if (Array.isArray(e)) return e;
}
function lg(e, t) {
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
function Bf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ae(e, t) {
  return Df(e) || lg(e, t) || tc(e, t) || Bf();
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
function Qt() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function ug(e, t) {
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
var fl = "data-rc-order", dl = "data-rc-priority", fg = "rc-util-key", Ks = /* @__PURE__ */ new Map();
function zf() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : fg;
}
function Ei(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function dg(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function nc(e) {
  return Array.from((Ks.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function Hf(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Qt())
    return null;
  var n = t.csp, r = t.prepend, o = t.priority, i = o === void 0 ? 0 : o, s = dg(r), a = s === "prependQueue", c = document.createElement("style");
  c.setAttribute(fl, s), a && i && c.setAttribute(dl, "".concat(i)), n != null && n.nonce && (c.nonce = n == null ? void 0 : n.nonce), c.innerHTML = e;
  var l = Ei(t), u = l.firstChild;
  if (r) {
    if (a) {
      var d = (t.styles || nc(l)).filter(function(f) {
        if (!["prepend", "prependQueue"].includes(f.getAttribute(fl)))
          return !1;
        var v = Number(f.getAttribute(dl) || 0);
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
function Ff(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = Ei(t);
  return (t.styles || nc(n)).find(function(r) {
    return r.getAttribute(zf(t)) === e;
  });
}
function $f(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = Ff(e, t);
  if (n) {
    var r = Ei(t);
    r.removeChild(n);
  }
}
function hg(e, t) {
  var n = Ks.get(e);
  if (!n || !ug(document, n)) {
    var r = Hf("", t), o = r.parentNode;
    Ks.set(e, o), e.removeChild(r);
  }
}
function An(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Ei(n), o = nc(r), i = G(G({}, n), {}, {
    styles: o
  });
  hg(r, i);
  var s = Ff(t, i);
  if (s) {
    var a, c;
    if ((a = i.csp) !== null && a !== void 0 && a.nonce && s.nonce !== ((c = i.csp) === null || c === void 0 ? void 0 : c.nonce)) {
      var l;
      s.nonce = (l = i.csp) === null || l === void 0 ? void 0 : l.nonce;
    }
    return s.innerHTML !== e && (s.innerHTML = e), s;
  }
  var u = Hf(e, i);
  return u.setAttribute(zf(i), t), u;
}
function pg(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function Nn(e, t) {
  if (e == null) return {};
  var n, r, o = pg(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
function xg(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = /* @__PURE__ */ new Set();
  function o(i, s) {
    var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, c = r.has(i);
    if (dn(!c, "Warning: There may be circular references"), c)
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
    if (i && s && we(i) === "object" && we(s) === "object") {
      var d = Object.keys(i);
      return d.length !== Object.keys(s).length ? !1 : d.every(function(f) {
        return o(i[f], s[f], l);
      });
    }
    return !1;
  }
  return o(e, t);
}
var gg = "%";
function Zs(e) {
  return e.join(gg);
}
var mg = /* @__PURE__ */ function() {
  function e(t) {
    bt(this, e), q(this, "instanceId", void 0), q(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = t;
  }
  return yt(e, [{
    key: "get",
    value: function(n) {
      return this.opGet(Zs(n));
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
      return this.opUpdate(Zs(n), r);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(n, r) {
      var o = this.cache.get(n), i = r(o);
      i === null ? this.cache.delete(n) : this.cache.set(n, i);
    }
  }]), e;
}(), Zn = "data-token-hash", Pt = "data-css-hash", vg = "data-cache-path", an = "__cssinjs_instance__";
function bg() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(Pt, "]")) || [], n = document.head.firstChild;
    Array.from(t).forEach(function(o) {
      o[an] = o[an] || e, o[an] === e && document.head.insertBefore(o, n);
    });
    var r = {};
    Array.from(document.querySelectorAll("style[".concat(Pt, "]"))).forEach(function(o) {
      var i = o.getAttribute(Pt);
      if (r[i]) {
        if (o[an] === e) {
          var s;
          (s = o.parentNode) === null || s === void 0 || s.removeChild(o);
        }
      } else
        r[i] = !0;
    });
  }
  return new mg(e);
}
var Wr = /* @__PURE__ */ w.createContext({
  hashPriority: "low",
  cache: bg(),
  defaultCache: !0
});
function yg(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
var rc = /* @__PURE__ */ function() {
  function e() {
    bt(this, e), q(this, "cache", void 0), q(this, "keys", void 0), q(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return yt(e, [{
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
            var d = ae(l, 2), f = d[1];
            return o.internalGet(u)[1] < f ? [u, o.internalGet(u)[1]] : l;
          }, [this.keys[0], this.cacheCallTimes]), s = ae(i, 1), a = s[0];
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
          return !yg(r, n);
        }), this.deleteByPath(this.cache, n);
    }
  }]), e;
}();
q(rc, "MAX_CACHE_SIZE", 20);
q(rc, "MAX_CACHE_OFFSET", 5);
var hl = 0, Vf = /* @__PURE__ */ function() {
  function e(t) {
    bt(this, e), q(this, "derivatives", void 0), q(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = hl, t.length === 0 && Ja(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), hl += 1;
  }
  return yt(e, [{
    key: "getDerivativeToken",
    value: function(n) {
      return this.derivatives.reduce(function(r, o) {
        return o(n, r);
      }, void 0);
    }
  }]), e;
}(), is = new rc();
function Js(e) {
  var t = Array.isArray(e) ? e : [e];
  return is.has(t) || is.set(t, new Vf(t)), is.get(t);
}
var Sg = /* @__PURE__ */ new WeakMap(), ss = {};
function Cg(e, t) {
  for (var n = Sg, r = 0; r < t.length; r += 1) {
    var o = t[r];
    n.has(o) || n.set(o, /* @__PURE__ */ new WeakMap()), n = n.get(o);
  }
  return n.has(ss) || n.set(ss, e()), n.get(ss);
}
var pl = /* @__PURE__ */ new WeakMap();
function Pr(e) {
  var t = pl.get(e) || "";
  return t || (Object.keys(e).forEach(function(n) {
    var r = e[n];
    t += n, r instanceof Vf ? t += r.id : r && we(r) === "object" ? t += Pr(r) : t += r;
  }), t = jr(t), pl.set(e, t)), t;
}
function xl(e, t) {
  return jr("".concat(t, "_").concat(Pr(e)));
}
var Qs = Qt();
function Zt(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function qo(e, t, n) {
  var r, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (i)
    return e;
  var s = G(G({}, o), {}, (r = {}, q(r, Zn, t), q(r, Pt, n), r)), a = Object.keys(s).map(function(c) {
    var l = s[c];
    return l ? "".concat(c, '="').concat(l, '"') : null;
  }).filter(function(c) {
    return c;
  }).join(" ");
  return "<style ".concat(a, ">").concat(e, "</style>");
}
var Ao = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(n ? "".concat(n, "-") : "").concat(t).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, wg = function(t, n, r) {
  return Object.keys(t).length ? ".".concat(n).concat(r != null && r.scope ? ".".concat(r.scope) : "", "{").concat(Object.entries(t).map(function(o) {
    var i = ae(o, 2), s = i[0], a = i[1];
    return "".concat(s, ":").concat(a, ";");
  }).join(""), "}") : "";
}, Wf = function(t, n, r) {
  var o = {}, i = {};
  return Object.entries(t).forEach(function(s) {
    var a, c, l = ae(s, 2), u = l[0], d = l[1];
    if (r != null && (a = r.preserve) !== null && a !== void 0 && a[u])
      i[u] = d;
    else if ((typeof d == "string" || typeof d == "number") && !(r != null && (c = r.ignore) !== null && c !== void 0 && c[u])) {
      var f, v = Ao(u, r == null ? void 0 : r.prefix);
      o[v] = typeof d == "number" && !(r != null && (f = r.unitless) !== null && f !== void 0 && f[u]) ? "".concat(d, "px") : String(d), i[u] = "var(".concat(v, ")");
    }
  }), [i, wg(o, n, {
    scope: r == null ? void 0 : r.scope
  })];
}, gl = process.env.NODE_ENV !== "test" && Qt() ? w.useLayoutEffect : w.useEffect, oc = function(t, n) {
  var r = w.useRef(!0);
  gl(function() {
    return t(r.current);
  }, n), gl(function() {
    return r.current = !1, function() {
      r.current = !0;
    };
  }, []);
}, ml = function(t, n) {
  oc(function(r) {
    if (!r)
      return t();
  }, n);
}, Eg = G({}, w), vl = Eg.useInsertionEffect, _g = function(t, n, r) {
  w.useMemo(t, r), oc(function() {
    return n(!0);
  }, r);
}, Og = vl ? function(e, t, n) {
  return vl(function() {
    return e(), t();
  }, n);
} : _g, Tg = G({}, w), Ag = Tg.useInsertionEffect, Rg = function(t) {
  var n = [], r = !1;
  function o(i) {
    if (r) {
      process.env.NODE_ENV !== "production" && Ja(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
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
}, Pg = function() {
  return function(t) {
    t();
  };
}, Ig = typeof Ag < "u" ? Rg : Pg;
function Ng() {
  return !1;
}
var ea = !1;
function kg() {
  return ea;
}
const jg = process.env.NODE_ENV === "production" ? Ng : kg;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var co = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : null;
  if (co && typeof co.webpackHotUpdate == "function") {
    var Lg = co.webpackHotUpdate;
    co.webpackHotUpdate = function() {
      return ea = !0, setTimeout(function() {
        ea = !1;
      }, 0), Lg.apply(void 0, arguments);
    };
  }
}
function ic(e, t, n, r, o) {
  var i = w.useContext(Wr), s = i.cache, a = [e].concat(Ft(t)), c = Zs(a), l = Ig([c]), u = jg(), d = function(p) {
    s.opUpdate(c, function(x) {
      var C = x || [void 0, void 0], S = ae(C, 2), h = S[0], E = h === void 0 ? 0 : h, b = S[1], O = b;
      process.env.NODE_ENV !== "production" && b && u && (r == null || r(O, u), O = null);
      var _ = O || n(), j = [E, _];
      return p ? p(j) : j;
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
  return Og(function() {
    o == null || o(v);
  }, function(g) {
    return d(function(p) {
      var x = ae(p, 2), C = x[0], S = x[1];
      return g && C === 0 && (o == null || o(v)), [C + 1, S];
    }), function() {
      s.opUpdate(c, function(p) {
        var x = p || [], C = ae(x, 2), S = C[0], h = S === void 0 ? 0 : S, E = C[1], b = h - 1;
        return b === 0 ? (l(function() {
          (g || !s.opGet(c)) && (r == null || r(E, !1));
        }), null) : [h - 1, E];
      });
    };
  }, [c]), v;
}
var Mg = {}, Dg = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", Sn = /* @__PURE__ */ new Map();
function Bg(e) {
  Sn.set(e, (Sn.get(e) || 0) + 1);
}
function zg(e, t) {
  if (typeof document < "u") {
    var n = document.querySelectorAll("style[".concat(Zn, '="').concat(e, '"]'));
    n.forEach(function(r) {
      if (r[an] === t) {
        var o;
        (o = r.parentNode) === null || o === void 0 || o.removeChild(r);
      }
    });
  }
}
var Hg = 0;
function Fg(e, t) {
  Sn.set(e, (Sn.get(e) || 0) - 1);
  var n = Array.from(Sn.keys()), r = n.filter(function(o) {
    var i = Sn.get(o) || 0;
    return i <= 0;
  });
  n.length - r.length > Hg && r.forEach(function(o) {
    zg(o, t), Sn.delete(o);
  });
}
var $g = function(t, n, r, o) {
  var i = r.getDerivativeToken(t), s = G(G({}, i), n);
  return o && (s = o(s)), s;
}, qf = "token";
function Vg(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Et(Wr), o = r.cache.instanceId, i = r.container, s = n.salt, a = s === void 0 ? "" : s, c = n.override, l = c === void 0 ? Mg : c, u = n.formatToken, d = n.getComputedToken, f = n.cssVar, v = Cg(function() {
    return Object.assign.apply(Object, [{}].concat(Ft(t)));
  }, t), g = Pr(v), p = Pr(l), x = f ? Pr(f) : "", C = ic(qf, [a, e.id, g, p, x], function() {
    var S, h = d ? d(v, l, e) : $g(v, l, e, u), E = G({}, h), b = "";
    if (f) {
      var O = Wf(h, f.key, {
        prefix: f.prefix,
        ignore: f.ignore,
        unitless: f.unitless,
        preserve: f.preserve
      }), _ = ae(O, 2);
      h = _[0], b = _[1];
    }
    var j = xl(h, a);
    h._tokenKey = j, E._tokenKey = xl(E, a);
    var z = (S = f == null ? void 0 : f.key) !== null && S !== void 0 ? S : j;
    h._themeKey = z, Bg(z);
    var U = "".concat(Dg, "-").concat(jr(j));
    return h._hashId = U, [h, U, E, b, (f == null ? void 0 : f.key) || ""];
  }, function(S) {
    Fg(S[0]._themeKey, o);
  }, function(S) {
    var h = ae(S, 4), E = h[0], b = h[3];
    if (f && b) {
      var O = An(b, jr("css-variables-".concat(E._themeKey)), {
        mark: Pt,
        prepend: "queue",
        attachTo: i,
        priority: -999
      });
      O[an] = o, O.setAttribute(Zn, E._themeKey);
    }
  });
  return C;
}
var Wg = function(t, n, r) {
  var o = ae(t, 5), i = o[2], s = o[3], a = o[4], c = r || {}, l = c.plain;
  if (!s)
    return null;
  var u = i._tokenKey, d = -999, f = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(d)
  }, v = qo(s, a, u, f, l);
  return [d, u, v];
}, qg = {
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
}, Uf = "comm", Xf = "rule", Yf = "decl", Ug = "@import", Xg = "@namespace", Yg = "@keyframes", Gg = "@layer", Gf = Math.abs, sc = String.fromCharCode;
function Kf(e) {
  return e.trim();
}
function Ro(e, t, n) {
  return e.replace(t, n);
}
function Kg(e, t, n) {
  return e.indexOf(t, n);
}
function $n(e, t) {
  return e.charCodeAt(t) | 0;
}
function Jn(e, t, n) {
  return e.slice(t, n);
}
function Bt(e) {
  return e.length;
}
function Zg(e) {
  return e.length;
}
function lo(e, t) {
  return t.push(e), e;
}
var _i = 1, Qn = 1, Zf = 0, Ot = 0, Ke = 0, lr = "";
function ac(e, t, n, r, o, i, s, a) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: _i, column: Qn, length: s, return: "", siblings: a };
}
function Jg() {
  return Ke;
}
function Qg() {
  return Ke = Ot > 0 ? $n(lr, --Ot) : 0, Qn--, Ke === 10 && (Qn = 1, _i--), Ke;
}
function It() {
  return Ke = Ot < Zf ? $n(lr, Ot++) : 0, Qn++, Ke === 10 && (Qn = 1, _i++), Ke;
}
function cn() {
  return $n(lr, Ot);
}
function Po() {
  return Ot;
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
function em(e) {
  return _i = Qn = 1, Zf = Bt(lr = e), Ot = 0, [];
}
function tm(e) {
  return lr = "", e;
}
function as(e) {
  return Kf(Oi(Ot - 1, ta(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function nm(e) {
  for (; (Ke = cn()) && Ke < 33; )
    It();
  return Lr(e) > 2 || Lr(Ke) > 3 ? "" : " ";
}
function rm(e, t) {
  for (; --t && It() && !(Ke < 48 || Ke > 102 || Ke > 57 && Ke < 65 || Ke > 70 && Ke < 97); )
    ;
  return Oi(e, Po() + (t < 6 && cn() == 32 && It() == 32));
}
function ta(e) {
  for (; It(); )
    switch (Ke) {
      // ] ) " '
      case e:
        return Ot;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && ta(Ke);
        break;
      // (
      case 40:
        e === 41 && ta(e);
        break;
      // \
      case 92:
        It();
        break;
    }
  return Ot;
}
function om(e, t) {
  for (; It() && e + Ke !== 57; )
    if (e + Ke === 84 && cn() === 47)
      break;
  return "/*" + Oi(t, Ot - 1) + "*" + sc(e === 47 ? e : It());
}
function im(e) {
  for (; !Lr(cn()); )
    It();
  return Oi(e, Ot);
}
function sm(e) {
  return tm(Io("", null, null, null, [""], e = em(e), 0, [0], e));
}
function Io(e, t, n, r, o, i, s, a, c) {
  for (var l = 0, u = 0, d = s, f = 0, v = 0, g = 0, p = 1, x = 1, C = 1, S = 0, h = "", E = o, b = i, O = r, _ = h; x; )
    switch (g = S, S = It()) {
      // (
      case 40:
        if (g != 108 && $n(_, d - 1) == 58) {
          Kg(_ += Ro(as(S), "&", "&\f"), "&\f", Gf(l ? a[l - 1] : 0)) != -1 && (C = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        _ += as(S);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        _ += nm(g);
        break;
      // \
      case 92:
        _ += rm(Po() - 1, 7);
        continue;
      // /
      case 47:
        switch (cn()) {
          case 42:
          case 47:
            lo(am(om(It(), Po()), t, n, c), c), (Lr(g || 1) == 5 || Lr(cn() || 1) == 5) && Bt(_) && Jn(_, -1, void 0) !== " " && (_ += " ");
            break;
          default:
            _ += "/";
        }
        break;
      // {
      case 123 * p:
        a[l++] = Bt(_) * C;
      // } ; \0
      case 125 * p:
      case 59:
      case 0:
        switch (S) {
          // \0 }
          case 0:
          case 125:
            x = 0;
          // ;
          case 59 + u:
            C == -1 && (_ = Ro(_, /\f/g, "")), v > 0 && (Bt(_) - d || p === 0 && g === 47) && lo(v > 32 ? yl(_ + ";", r, n, d - 1, c) : yl(Ro(_, " ", "") + ";", r, n, d - 2, c), c);
            break;
          // @ ;
          case 59:
            _ += ";";
          // { rule/at-rule
          default:
            if (lo(O = bl(_, t, n, l, u, o, a, h, E = [], b = [], d, i), i), S === 123)
              if (u === 0)
                Io(_, t, O, O, E, i, d, a, b);
              else {
                switch (f) {
                  // c(ontainer)
                  case 99:
                    if ($n(_, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if ($n(_, 2) === 97) break;
                  default:
                    u = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                u ? Io(e, O, O, r && lo(bl(e, O, O, 0, 0, o, a, h, o, E = [], d, b), b), o, b, d, a, r ? E : b) : Io(_, O, O, O, [""], b, 0, a, b);
              }
        }
        l = u = v = 0, p = C = 1, h = _ = "", d = s;
        break;
      // :
      case 58:
        d = 1 + Bt(_), v = g;
      default:
        if (p < 1) {
          if (S == 123)
            --p;
          else if (S == 125 && p++ == 0 && Qg() == 125)
            continue;
        }
        switch (_ += sc(S), S * p) {
          // &
          case 38:
            C = u > 0 ? 1 : (_ += "\f", -1);
            break;
          // ,
          case 44:
            a[l++] = (Bt(_) - 1) * C, C = 1;
            break;
          // @
          case 64:
            cn() === 45 && (_ += as(It())), f = cn(), u = d = Bt(h = _ += im(Po())), S++;
            break;
          // -
          case 45:
            g === 45 && Bt(_) == 2 && (p = 0);
        }
    }
  return i;
}
function bl(e, t, n, r, o, i, s, a, c, l, u, d) {
  for (var f = o - 1, v = o === 0 ? i : [""], g = Zg(v), p = 0, x = 0, C = 0; p < r; ++p)
    for (var S = 0, h = Jn(e, f + 1, f = Gf(x = s[p])), E = e; S < g; ++S)
      (E = Kf(x > 0 ? v[S] + " " + h : Ro(h, /&\f/g, v[S]))) && (c[C++] = E);
  return ac(e, t, n, o === 0 ? Xf : a, c, l, u, d);
}
function am(e, t, n, r) {
  return ac(e, t, n, Uf, sc(Jg()), Jn(e, 2, -2), 0, r);
}
function yl(e, t, n, r, o) {
  return ac(e, t, n, Yf, Jn(e, 0, r), Jn(e, r + 1, -1), r, o);
}
function na(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function cm(e, t, n, r) {
  switch (e.type) {
    case Gg:
      if (e.children.length) break;
    case Ug:
    case Xg:
    case Yf:
      return e.return = e.return || e.value;
    case Uf:
      return "";
    case Yg:
      return e.return = e.value + "{" + na(e.children, r) + "}";
    case Xf:
      if (!Bt(e.value = e.props.join(","))) return "";
  }
  return Bt(n = na(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Jf(e, t) {
  var n = t.path, r = t.parentSelectors;
  dn(!1, "[Ant Design CSS-in-JS] ".concat(n ? "Error in ".concat(n, ": ") : "").concat(e).concat(r.length ? " Selector: ".concat(r.join(" | ")) : ""));
}
var lm = function(t, n, r) {
  if (t === "content") {
    var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, i = ["normal", "none", "initial", "inherit", "unset"];
    (typeof n != "string" || i.indexOf(n) === -1 && !o.test(n) && (n.charAt(0) !== n.charAt(n.length - 1) || n.charAt(0) !== '"' && n.charAt(0) !== "'")) && Jf("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(n, "\"'`."), r);
  }
}, um = function(t, n, r) {
  t === "animation" && r.hashId && n !== "none" && Jf("You seem to be using hashed animation '".concat(n, "', in which case 'animationName' with Keyframe as value is recommended."), r);
}, Sl = "data-ant-cssinjs-cache-path", Qf = "_FILE_STYLE__", Rn, ed = !0;
function fm() {
  if (!Rn && (Rn = {}, Qt())) {
    var e = document.createElement("div");
    e.className = Sl, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(o) {
      var i = o.split(":"), s = ae(i, 2), a = s[0], c = s[1];
      Rn[a] = c;
    });
    var n = document.querySelector("style[".concat(Sl, "]"));
    if (n) {
      var r;
      ed = !1, (r = n.parentNode) === null || r === void 0 || r.removeChild(n);
    }
    document.body.removeChild(e);
  }
}
function dm(e) {
  return fm(), !!Rn[e];
}
function hm(e) {
  var t = Rn[e], n = null;
  if (t && Qt())
    if (ed)
      n = Qf;
    else {
      var r = document.querySelector("style[".concat(Pt, '="').concat(Rn[e], '"]'));
      r ? n = r.innerHTML : delete Rn[e];
    }
  return [n, t];
}
var td = "_skip_check_", nd = "_multi_value_";
function No(e) {
  var t = na(sm(e), cm);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function pm(e) {
  return we(e) === "object" && e && (td in e || nd in e);
}
function Cl(e, t, n) {
  if (!t)
    return e;
  var r = ".".concat(t), o = n === "low" ? ":where(".concat(r, ")") : r, i = e.split(",").map(function(s) {
    var a, c = s.trim().split(/\s+/), l = c[0] || "", u = ((a = l.match(/^\w+/)) === null || a === void 0 ? void 0 : a[0]) || "";
    return l = "".concat(u).concat(o).concat(l.slice(u.length)), [l].concat(Ft(c.slice(1))).join(" ");
  });
  return i.join(",");
}
var xm = function e(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = r.root, i = r.injectHash, s = r.parentSelectors, a = n.hashId, c = n.layer, l = n.path, u = n.hashPriority, d = n.transformers, f = d === void 0 ? [] : d, v = n.linters, g = v === void 0 ? [] : v, p = "", x = {};
  function C(E) {
    var b = E.getName(a);
    if (!x[b]) {
      var O = e(E.style, n, {
        root: !1,
        parentSelectors: s
      }), _ = ae(O, 1), j = _[0];
      x[b] = "@keyframes ".concat(E.getName(a)).concat(j);
    }
  }
  function S(E) {
    var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return E.forEach(function(O) {
      Array.isArray(O) ? S(O, b) : O && b.push(O);
    }), b;
  }
  var h = S(Array.isArray(t) ? t : [t]);
  return h.forEach(function(E) {
    var b = typeof E == "string" && !o ? {} : E;
    if (typeof b == "string")
      p += "".concat(b, `
`);
    else if (b._keyframe)
      C(b);
    else {
      var O = f.reduce(function(_, j) {
        var z;
        return (j == null || (z = j.visit) === null || z === void 0 ? void 0 : z.call(j, _)) || _;
      }, b);
      Object.keys(O).forEach(function(_) {
        var j = O[_];
        if (we(j) === "object" && j && (_ !== "animationName" || !j._keyframe) && !pm(j)) {
          var z = !1, U = _.trim(), ne = !1;
          (o || i) && a ? U.startsWith("@") ? z = !0 : U === "&" ? U = Cl("", a, u) : U = Cl(_, a, u) : o && !a && (U === "&" || U === "") && (U = "", ne = !0);
          var J = e(j, n, {
            root: ne,
            injectHash: z,
            parentSelectors: [].concat(Ft(s), [U])
          }), B = ae(J, 2), Y = B[0], K = B[1];
          x = G(G({}, x), K), p += "".concat(U).concat(Y);
        } else {
          let P = function(L, H) {
            process.env.NODE_ENV !== "production" && (we(j) !== "object" || !(j != null && j[td])) && [lm, um].concat(Ft(g)).forEach(function(te) {
              return te(L, H, {
                path: l,
                hashId: a,
                parentSelectors: s
              });
            });
            var F = L.replace(/[A-Z]/g, function(te) {
              return "-".concat(te.toLowerCase());
            }), X = H;
            !qg[L] && typeof X == "number" && X !== 0 && (X = "".concat(X, "px")), L === "animationName" && H !== null && H !== void 0 && H._keyframe && (C(H), X = H.getName(a)), p += "".concat(F, ":").concat(X, ";");
          };
          var k, R = (k = j == null ? void 0 : j.value) !== null && k !== void 0 ? k : j;
          we(j) === "object" && j !== null && j !== void 0 && j[nd] && Array.isArray(R) ? R.forEach(function(L) {
            P(_, L);
          }) : P(_, R);
        }
      });
    }
  }), o ? c && (p && (p = "@layer ".concat(c.name, " {").concat(p, "}")), c.dependencies && (x["@layer ".concat(c.name)] = c.dependencies.map(function(E) {
    return "@layer ".concat(E, ", ").concat(c.name, ";");
  }).join(`
`))) : p = "{".concat(p, "}"), [p, x];
};
function rd(e, t) {
  return jr("".concat(e.join("%")).concat(t));
}
function gm() {
  return null;
}
var od = "style";
function ra(e, t) {
  var n = e.token, r = e.path, o = e.hashId, i = e.layer, s = e.nonce, a = e.clientOnly, c = e.order, l = c === void 0 ? 0 : c, u = w.useContext(Wr), d = u.autoClear, f = u.mock, v = u.defaultCache, g = u.hashPriority, p = u.container, x = u.ssrInline, C = u.transformers, S = u.linters, h = u.cache, E = u.layer, b = n._tokenKey, O = [b];
  E && O.push("layer"), O.push.apply(O, Ft(r));
  var _ = Qs;
  process.env.NODE_ENV !== "production" && f !== void 0 && (_ = f === "client");
  var j = ic(
    od,
    O,
    // Create cache if needed
    function() {
      var B = O.join("|");
      if (dm(B)) {
        var Y = hm(B), K = ae(Y, 2), k = K[0], R = K[1];
        if (k)
          return [k, b, R, {}, a, l];
      }
      var P = t(), L = xm(P, {
        hashId: o,
        hashPriority: g,
        layer: E ? i : void 0,
        path: r.join("-"),
        transformers: C,
        linters: S
      }), H = ae(L, 2), F = H[0], X = H[1], te = No(F), Z = rd(O, te);
      return [te, b, Z, X, a, l];
    },
    // Remove cache if no need
    function(B, Y) {
      var K = ae(B, 3), k = K[2];
      (Y || d) && Qs && $f(k, {
        mark: Pt
      });
    },
    // Effect: Inject style here
    function(B) {
      var Y = ae(B, 4), K = Y[0];
      Y[1];
      var k = Y[2], R = Y[3];
      if (_ && K !== Qf) {
        var P = {
          mark: Pt,
          prepend: E ? !1 : "queue",
          attachTo: p,
          priority: l
        }, L = typeof s == "function" ? s() : s;
        L && (P.csp = {
          nonce: L
        });
        var H = [], F = [];
        Object.keys(R).forEach(function(te) {
          te.startsWith("@layer") ? H.push(te) : F.push(te);
        }), H.forEach(function(te) {
          An(No(R[te]), "_layer-".concat(te), G(G({}, P), {}, {
            prepend: !0
          }));
        });
        var X = An(K, k, P);
        X[an] = h.instanceId, X.setAttribute(Zn, b), process.env.NODE_ENV !== "production" && X.setAttribute(vg, O.join("|")), F.forEach(function(te) {
          An(No(R[te]), "_effect-".concat(te), P);
        });
      }
    }
  ), z = ae(j, 3), U = z[0], ne = z[1], J = z[2];
  return function(B) {
    var Y;
    if (!x || _ || !v)
      Y = /* @__PURE__ */ w.createElement(gm, null);
    else {
      var K;
      Y = /* @__PURE__ */ w.createElement("style", xt({}, (K = {}, q(K, Zn, ne), q(K, Pt, J), K), {
        dangerouslySetInnerHTML: {
          __html: U
        }
      }));
    }
    return /* @__PURE__ */ w.createElement(w.Fragment, null, Y, B);
  };
}
var mm = function(t, n, r) {
  var o = ae(t, 6), i = o[0], s = o[1], a = o[2], c = o[3], l = o[4], u = o[5], d = r || {}, f = d.plain;
  if (l)
    return null;
  var v = i, g = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  };
  return v = qo(i, s, a, g, f), c && Object.keys(c).forEach(function(p) {
    if (!n[p]) {
      n[p] = !0;
      var x = No(c[p]), C = qo(x, s, "_effect-".concat(p), g, f);
      p.startsWith("@layer") ? v = C + v : v += C;
    }
  }), [u, a, v];
}, id = "cssVar", vm = function(t, n) {
  var r = t.key, o = t.prefix, i = t.unitless, s = t.ignore, a = t.token, c = t.scope, l = c === void 0 ? "" : c, u = Et(Wr), d = u.cache.instanceId, f = u.container, v = a._tokenKey, g = [].concat(Ft(t.path), [r, l, v]), p = ic(id, g, function() {
    var x = n(), C = Wf(x, r, {
      prefix: o,
      unitless: i,
      ignore: s,
      scope: l
    }), S = ae(C, 2), h = S[0], E = S[1], b = rd(g, E);
    return [h, E, b, r];
  }, function(x) {
    var C = ae(x, 3), S = C[2];
    Qs && $f(S, {
      mark: Pt
    });
  }, function(x) {
    var C = ae(x, 3), S = C[1], h = C[2];
    if (S) {
      var E = An(S, h, {
        mark: Pt,
        prepend: "queue",
        attachTo: f,
        priority: -999
      });
      E[an] = d, E.setAttribute(Zn, r);
    }
  });
  return p;
}, bm = function(t, n, r) {
  var o = ae(t, 4), i = o[1], s = o[2], a = o[3], c = r || {}, l = c.plain;
  if (!i)
    return null;
  var u = -999, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  }, f = qo(i, a, s, d, l);
  return [u, s, f];
}, br;
br = {}, q(br, od, mm), q(br, qf, Wg), q(br, id, bm);
var sd = /* @__PURE__ */ function() {
  function e(t, n) {
    bt(this, e), q(this, "name", void 0), q(this, "style", void 0), q(this, "_keyframe", !0), this.name = t, this.style = n;
  }
  return yt(e, [{
    key: "getName",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return n ? "".concat(n, "-").concat(this.name) : this.name;
    }
  }]), e;
}();
function Bn(e) {
  return e.notSplit = !0, e;
}
Bn(["borderTop", "borderBottom"]), Bn(["borderTop"]), Bn(["borderBottom"]), Bn(["borderLeft", "borderRight"]), Bn(["borderLeft"]), Bn(["borderRight"]);
var cc = /* @__PURE__ */ fi({});
function ym(e) {
  return Df(e) || kf(e) || tc(e) || Bf();
}
function oa(e, t) {
  for (var n = e, r = 0; r < t.length; r += 1) {
    if (n == null)
      return;
    n = n[t[r]];
  }
  return n;
}
function ad(e, t, n, r) {
  if (!t.length)
    return n;
  var o = ym(t), i = o[0], s = o.slice(1), a;
  return !e && typeof i == "number" ? a = [] : Array.isArray(e) ? a = Ft(e) : a = G({}, e), r && n === void 0 && s.length === 1 ? delete a[i][s[0]] : a[i] = ad(a[i], s, n, r), a;
}
function cs(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && r && n === void 0 && !oa(e, t.slice(0, -1)) ? e : ad(e, t, n, r);
}
function Sm(e) {
  return we(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function wl(e) {
  return Array.isArray(e) ? [] : {};
}
var Cm = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function wm() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = wl(t[0]);
  return t.forEach(function(o) {
    function i(s, a) {
      var c = new Set(a), l = oa(o, s), u = Array.isArray(l);
      if (u || Sm(l)) {
        if (!c.has(l)) {
          c.add(l);
          var d = oa(r, s);
          u ? r = cs(r, s, []) : (!d || we(d) !== "object") && (r = cs(r, s, wl(l))), Cm(l).forEach(function(f) {
            i([].concat(Ft(s), [f]), c);
          });
        }
      } else
        r = cs(r, s, l);
    }
    i([]);
  }), r;
}
function cd() {
}
let Yt = null;
function Em() {
  Yt = null, _f();
}
let lc = cd;
process.env.NODE_ENV !== "production" && (lc = (e, t, n) => {
  dn(e, `[antd: ${t}] ${n}`), process.env.NODE_ENV === "test" && Em();
});
const ld = /* @__PURE__ */ w.createContext({}), hn = process.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: t
  } = w.useContext(ld), n = (r, o, i) => {
    if (!r)
      if (t === !1 && o === "deprecated") {
        const s = Yt;
        Yt || (Yt = {}), Yt[e] = Yt[e] || [], Yt[e].includes(i || "") || Yt[e].push(i || ""), s || console.warn("[antd] There exists deprecated usage in your code:", Yt);
      } else
        process.env.NODE_ENV !== "production" && lc(r, e, i);
  };
  return n.deprecated = (r, o, i, s) => {
    n(r, "deprecated", `\`${o}\` is deprecated. Please use \`${i}\` instead.${s ? ` ${s}` : ""}`);
  }, n;
} : () => {
  const e = () => {
  };
  return e.deprecated = cd, e;
}, qr = lc, _m = /* @__PURE__ */ fi(void 0), vt = "${label} is not a valid ${type}", Ti = {
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
        string: vt,
        method: vt,
        array: vt,
        object: vt,
        number: vt,
        date: vt,
        boolean: vt,
        integer: vt,
        float: vt,
        regexp: vt,
        email: vt,
        url: vt,
        hex: vt
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
Object.assign({}, Ti.Modal);
let ko = [];
const El = () => ko.reduce((e, t) => Object.assign(Object.assign({}, e), t), Ti.Modal);
function Om(e) {
  if (e) {
    const t = Object.assign({}, e);
    return ko.push(t), El(), () => {
      ko = ko.filter((n) => n !== t), El();
    };
  }
  Object.assign({}, Ti.Modal);
}
const ud = /* @__PURE__ */ fi(void 0), fd = "internalMark", dd = (e) => {
  const {
    locale: t = {},
    children: n,
    _ANT_MARK__: r
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const i = hn("LocaleProvider");
    process.env.NODE_ENV !== "production" && i(r === fd, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  w.useEffect(() => Om(t == null ? void 0 : t.Modal), [t]);
  const o = w.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ w.createElement(ud.Provider, {
    value: o
  }, n);
};
process.env.NODE_ENV !== "production" && (dd.displayName = "LocaleProvider");
const hd = {
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
}, Mr = Object.assign(Object.assign({}, hd), {
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
const _l = (e, t, n) => n === 0 ? e : e / 100;
function yr(e, t) {
  const n = t || 255;
  return e > n ? n : e < 0 ? 0 : e;
}
let tt = class pd {
  constructor(t) {
    q(this, "isValid", !0), q(this, "r", 0), q(this, "g", 0), q(this, "b", 0), q(this, "a", 1), q(this, "_h", void 0), q(this, "_s", void 0), q(this, "_l", void 0), q(this, "_v", void 0), q(this, "_max", void 0), q(this, "_min", void 0), q(this, "_brightness", void 0);
    function n(r) {
      return r[0] in t && r[1] in t && r[2] in t;
    }
    if (t) if (typeof t == "string") {
      let o = function(i) {
        return r.startsWith(i);
      };
      const r = t.trim();
      /^#?[A-F\d]{3,8}$/i.test(r) ? this.fromHexString(r) : o("rgb") ? this.fromRgbString(r) : o("hsl") ? this.fromHslString(r) : (o("hsv") || o("hsb")) && this.fromHsvString(r);
    } else if (t instanceof pd)
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
    const n = ls(t, _l);
    this.fromHsv({
      h: n[0],
      s: n[1],
      v: n[2],
      a: n[3]
    });
  }
  fromHslString(t) {
    const n = ls(t, _l);
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
var uo = 2, Ol = 0.16, Tm = 0.05, Am = 0.05, Rm = 0.15, xd = 5, gd = 4, Pm = [{
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
function Al(e, t, n) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var r;
  return n ? r = e.s - Ol * t : t === gd ? r = e.s + Ol : r = e.s + Tm * t, r > 1 && (r = 1), n && t === xd && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Math.round(r * 100) / 100;
}
function Rl(e, t, n) {
  var r;
  return n ? r = e.v + Am * t : r = e.v - Rm * t, r = Math.max(0, Math.min(1, r)), Math.round(r * 100) / 100;
}
function Dr(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], r = new tt(e), o = r.toHsv(), i = xd; i > 0; i -= 1) {
    var s = new tt({
      h: Tl(o, i, !0),
      s: Al(o, i, !0),
      v: Rl(o, i, !0)
    });
    n.push(s);
  }
  n.push(r);
  for (var a = 1; a <= gd; a += 1) {
    var c = new tt({
      h: Tl(o, a),
      s: Al(o, a),
      v: Rl(o, a)
    });
    n.push(c);
  }
  return t.theme === "dark" ? Pm.map(function(l) {
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
}, ia = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
ia.primary = ia[5];
var sa = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
sa.primary = sa[5];
var aa = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
aa.primary = aa[5];
var ca = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
ca.primary = ca[5];
var la = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
la.primary = la[5];
var ua = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
ua.primary = ua[5];
var fa = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
fa.primary = fa[5];
var da = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
da.primary = da[5];
var Uo = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
Uo.primary = Uo[5];
var ha = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
ha.primary = ha[5];
var pa = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
pa.primary = pa[5];
var xa = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
xa.primary = xa[5];
var ga = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
ga.primary = ga[5];
var fs = {
  red: ia,
  volcano: sa,
  orange: aa,
  gold: ca,
  yellow: la,
  lime: ua,
  green: fa,
  cyan: da,
  blue: Uo,
  geekblue: ha,
  purple: pa,
  magenta: xa,
  grey: ga
};
function Im(e, t) {
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
  } = e, d = n(c), f = n(o), v = n(i), g = n(s), p = n(a), x = r(l, u), C = e.colorLink || e.colorInfo, S = n(C), h = new tt(g[1]).mix(new tt(g[3]), 50).toHexString();
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
    colorErrorBgFilledHover: h,
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
    colorInfoBg: p[1],
    colorInfoBgHover: p[2],
    colorInfoBorder: p[3],
    colorInfoBorderHover: p[4],
    colorInfoHover: p[4],
    colorInfo: p[6],
    colorInfoActive: p[7],
    colorInfoTextHover: p[8],
    colorInfoText: p[9],
    colorInfoTextActive: p[10],
    colorLinkHover: S[4],
    colorLink: S[6],
    colorLinkActive: S[7],
    colorBgMask: new tt("#000").setA(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const Nm = (e) => {
  let t = e, n = e, r = e, o = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? n = 4 : e < 8 && e >= 7 ? n = 5 : e < 14 && e >= 8 ? n = 6 : e < 16 && e >= 14 ? n = 7 : e >= 16 && (n = 8), e < 6 && e >= 2 ? r = 1 : e >= 6 && (r = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
    borderRadius: e,
    borderRadiusXS: r,
    borderRadiusSM: n,
    borderRadiusLG: t,
    borderRadiusOuter: o
  };
};
function km(e) {
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
  }, Nm(r));
}
const jm = (e) => {
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
function Lm(e) {
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
const Mm = (e) => {
  const t = Lm(e), n = t.map((u) => u.size), r = t.map((u) => u.lineHeight), o = n[1], i = n[0], s = n[2], a = r[1], c = r[0], l = r[2];
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
function Dm(e) {
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
const St = (e, t) => new tt(e).setA(t).toRgbString(), Sr = (e, t) => new tt(e).darken(t).toHexString(), Bm = (e) => {
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
}, zm = (e, t) => {
  const n = e || "#fff", r = t || "#000";
  return {
    colorBgBase: n,
    colorTextBase: r,
    colorText: St(r, 0.88),
    colorTextSecondary: St(r, 0.65),
    colorTextTertiary: St(r, 0.45),
    colorTextQuaternary: St(r, 0.25),
    colorFill: St(r, 0.15),
    colorFillSecondary: St(r, 0.06),
    colorFillTertiary: St(r, 0.04),
    colorFillQuaternary: St(r, 0.02),
    colorBgSolid: St(r, 1),
    colorBgSolidHover: St(r, 0.75),
    colorBgSolidActive: St(r, 0.95),
    colorBgLayout: Sr(n, 4),
    colorBgContainer: Sr(n, 0),
    colorBgElevated: Sr(n, 0),
    colorBgSpotlight: St(r, 0.85),
    colorBgBlur: "transparent",
    colorBorder: Sr(n, 15),
    colorBorderSecondary: Sr(n, 6)
  };
};
function Hm(e) {
  us.pink = us.magenta, fs.pink = fs.magenta;
  const t = Object.keys(hd).map((n) => {
    const r = e[n] === us[n] ? fs[n] : Dr(e[n]);
    return Array.from({
      length: 10
    }, () => 1).reduce((o, i, s) => (o[`${n}-${s + 1}`] = r[s], o[`${n}${s + 1}`] = r[s], o), {});
  }).reduce((n, r) => (n = Object.assign(Object.assign({}, n), r), n), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), Im(e, {
    generateColorPalettes: Bm,
    generateNeutralColorPalettes: zm
  })), Mm(e.fontSize)), Dm(e)), jm(e)), km(e));
}
const md = Js(Hm), ma = {
  token: Mr,
  override: {
    override: Mr
  },
  hashed: !0
}, vd = /* @__PURE__ */ W.createContext(ma), Xo = "ant", uc = "anticon", Fm = (e, t) => t || (e ? `${Xo}-${e}` : Xo), Nt = /* @__PURE__ */ w.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: Fm,
  iconPrefixCls: uc
}), {
  Consumer: SS
} = Nt, Pl = {};
function fc(e) {
  const t = w.useContext(Nt), {
    getPrefixCls: n,
    direction: r,
    getPopupContainer: o
  } = t, i = t[e];
  return Object.assign(Object.assign({
    classNames: Pl,
    styles: Pl
  }, i), {
    getPrefixCls: n,
    direction: r,
    getPopupContainer: o
  });
}
const $m = `-ant-${Date.now()}-${Math.random()}`;
function Vm(e, t) {
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
function Wm(e, t) {
  const n = Vm(e, t);
  Qt() ? An(n, `${$m}-dynamic-theme`) : process.env.NODE_ENV !== "production" && qr(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const Yo = /* @__PURE__ */ w.createContext(!1), qm = (e) => {
  let {
    children: t,
    disabled: n
  } = e;
  const r = w.useContext(Yo);
  return /* @__PURE__ */ w.createElement(Yo.Provider, {
    value: n ?? r
  }, t);
}, er = /* @__PURE__ */ w.createContext(void 0), Um = (e) => {
  let {
    children: t,
    size: n
  } = e;
  const r = w.useContext(er);
  return /* @__PURE__ */ w.createElement(er.Provider, {
    value: n || r
  }, t);
};
function Xm() {
  const e = Et(Yo), t = Et(er);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
var bd = /* @__PURE__ */ yt(function e() {
  bt(this, e);
}), yd = "CALC_UNIT", Ym = new RegExp(yd, "g");
function ds(e) {
  return typeof e == "number" ? "".concat(e).concat(yd) : e;
}
var Gm = /* @__PURE__ */ function(e) {
  cr(n, e);
  var t = Vr(n);
  function n(r, o) {
    var i;
    bt(this, n), i = t.call(this), q(Tn(i), "result", ""), q(Tn(i), "unitlessCssVar", void 0), q(Tn(i), "lowPriority", void 0);
    var s = we(r);
    return i.unitlessCssVar = o, r instanceof n ? i.result = "(".concat(r.result, ")") : s === "number" ? i.result = ds(r) : s === "string" && (i.result = r), i;
  }
  return yt(n, [{
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
      }) && (c = !1), this.result = this.result.replace(Ym, c ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), n;
}(bd), Km = /* @__PURE__ */ function(e) {
  cr(n, e);
  var t = Vr(n);
  function n(r) {
    var o;
    return bt(this, n), o = t.call(this), q(Tn(o), "result", 0), r instanceof n ? o.result = r.result : typeof r == "number" && (o.result = r), o;
  }
  return yt(n, [{
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
}(bd), Zm = function(t, n) {
  var r = t === "css" ? Gm : Km;
  return function(o) {
    return new r(o, n);
  };
}, Il = function(t, n) {
  return "".concat([n, t.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function fn(e) {
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
  var t = w.useRef(!1), n = w.useState(e), r = ae(n, 2), o = r[0], i = r[1];
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
function Jm(e, t) {
  var n = t || {}, r = n.defaultValue, o = n.value, i = n.onChange, s = n.postState, a = Br(function() {
    return hs(o) ? o : hs(r) ? typeof r == "function" ? r() : r : typeof e == "function" ? e() : e;
  }), c = ae(a, 2), l = c[0], u = c[1], d = o !== void 0 ? o : l, f = s ? s(d) : d, v = fn(i), g = Br([d]), p = ae(g, 2), x = p[0], C = p[1];
  ml(function() {
    var h = x[0];
    l !== h && v(l, h);
  }, [x]), ml(function() {
    hs(o) || u(o);
  }, [o]);
  var S = fn(function(h, E) {
    u(h, E), C([d], E);
  });
  return [f, S];
}
function Nl(e, t, n, r) {
  var o = G({}, t[e]);
  if (r != null && r.deprecatedTokens) {
    var i = r.deprecatedTokens;
    i.forEach(function(a) {
      var c = ae(a, 2), l = c[0], u = c[1];
      if (process.env.NODE_ENV !== "production" && dn(!(o != null && o[l]), "Component Token `".concat(String(l), "` of ").concat(String(e), " is deprecated. Please use `").concat(String(u), "` instead.")), o != null && o[l] || o != null && o[u]) {
        var d;
        (d = o[u]) !== null && d !== void 0 || (o[u] = o == null ? void 0 : o[l]);
      }
    });
  }
  var s = G(G({}, n), o);
  return Object.keys(s).forEach(function(a) {
    s[a] === t[a] && delete s[a];
  }), s;
}
var Sd = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", va = !0;
function pn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  if (!Sd)
    return Object.assign.apply(Object, [{}].concat(t));
  va = !1;
  var r = {};
  return t.forEach(function(o) {
    if (we(o) === "object") {
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
  }), va = !0, r;
}
var kl = {};
function Qm() {
}
var e1 = function(t) {
  var n, r = t, o = Qm;
  return Sd && typeof Proxy < "u" && (n = /* @__PURE__ */ new Set(), r = new Proxy(t, {
    get: function(s, a) {
      if (va) {
        var c;
        (c = n) === null || c === void 0 || c.add(a);
      }
      return s[a];
    }
  }), o = function(s, a) {
    var c;
    kl[s] = {
      global: Array.from(n),
      component: G(G({}, (c = kl[s]) === null || c === void 0 ? void 0 : c.component), a)
    };
  }), {
    token: r,
    keys: n,
    flush: o
  };
};
function jl(e, t, n) {
  if (typeof n == "function") {
    var r;
    return n(pn(t, (r = t[e]) !== null && r !== void 0 ? r : {}));
  }
  return n ?? {};
}
function t1(e) {
  return e === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      return "max(".concat(r.map(function(i) {
        return Zt(i);
      }).join(","), ")");
    },
    min: function() {
      for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      return "min(".concat(r.map(function(i) {
        return Zt(i);
      }).join(","), ")");
    }
  };
}
var n1 = 1e3 * 60 * 10, r1 = /* @__PURE__ */ function() {
  function e() {
    bt(this, e), q(this, "map", /* @__PURE__ */ new Map()), q(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), q(this, "nextID", 0), q(this, "lastAccessBeat", /* @__PURE__ */ new Map()), q(this, "accessBeat", 0);
  }
  return yt(e, [{
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
        return i && we(i) === "object" ? "obj_".concat(r.getObjectID(i)) : "".concat(we(i), "_").concat(i);
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
          r - o > n1 && (n.map.delete(i), n.lastAccessBeat.delete(i));
        }), this.accessBeat = 0;
      }
    }
  }]), e;
}(), Ll = new r1();
function o1(e, t) {
  return W.useMemo(function() {
    var n = Ll.get(t);
    if (n)
      return n;
    var r = e();
    return Ll.set(t, r), r;
  }, t);
}
var i1 = function() {
  return {};
};
function s1(e) {
  var t = e.useCSP, n = t === void 0 ? i1 : t, r = e.useToken, o = e.usePrefix, i = e.getResetStyles, s = e.getCommonStyle, a = e.getCompUnitless;
  function c(f, v, g, p) {
    var x = Array.isArray(f) ? f[0] : f;
    function C(j) {
      return "".concat(String(x)).concat(j.slice(0, 1).toUpperCase()).concat(j.slice(1));
    }
    var S = (p == null ? void 0 : p.unitless) || {}, h = typeof a == "function" ? a(f) : {}, E = G(G({}, h), {}, q({}, C("zIndexPopup"), !0));
    Object.keys(S).forEach(function(j) {
      E[C(j)] = S[j];
    });
    var b = G(G({}, p), {}, {
      unitless: E,
      prefixToken: C
    }), O = u(f, v, g, b), _ = l(x, g, b);
    return function(j) {
      var z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : j, U = O(j, z), ne = ae(U, 2), J = ne[1], B = _(z), Y = ae(B, 2), K = Y[0], k = Y[1];
      return [K, J, k];
    };
  }
  function l(f, v, g) {
    var p = g.unitless, x = g.injectStyle, C = x === void 0 ? !0 : x, S = g.prefixToken, h = g.ignore, E = function(_) {
      var j = _.rootCls, z = _.cssVar, U = z === void 0 ? {} : z, ne = r(), J = ne.realToken;
      return vm({
        path: [f],
        prefix: U.prefix,
        key: U.key,
        unitless: p,
        ignore: h,
        token: J,
        scope: j
      }, function() {
        var B = jl(f, J, v), Y = Nl(f, J, B, {
          deprecatedTokens: g == null ? void 0 : g.deprecatedTokens
        });
        return Object.keys(B).forEach(function(K) {
          Y[S(K)] = Y[K], delete Y[K];
        }), Y;
      }), null;
    }, b = function(_) {
      var j = r(), z = j.cssVar;
      return [function(U) {
        return C && z ? /* @__PURE__ */ W.createElement(W.Fragment, null, /* @__PURE__ */ W.createElement(E, {
          rootCls: _,
          cssVar: z,
          component: f
        }), U) : U;
      }, z == null ? void 0 : z.key];
    };
    return b;
  }
  function u(f, v, g) {
    var p = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, x = Array.isArray(f) ? f : [f, f], C = ae(x, 1), S = C[0], h = x.join("-"), E = e.layer || {
      name: "antd"
    };
    return function(b) {
      var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : b, _ = r(), j = _.theme, z = _.realToken, U = _.hashId, ne = _.token, J = _.cssVar, B = o(), Y = B.rootPrefixCls, K = B.iconPrefixCls, k = n(), R = J ? "css" : "js", P = o1(function() {
        var Z = /* @__PURE__ */ new Set();
        return J && Object.keys(p.unitless || {}).forEach(function(ce) {
          Z.add(Ao(ce, J.prefix)), Z.add(Ao(ce, Il(S, J.prefix)));
        }), Zm(R, Z);
      }, [R, S, J == null ? void 0 : J.prefix]), L = t1(R), H = L.max, F = L.min, X = {
        theme: j,
        token: ne,
        hashId: U,
        nonce: function() {
          return k.nonce;
        },
        clientOnly: p.clientOnly,
        layer: E,
        // antd is always at top of styles
        order: p.order || -999
      };
      typeof i == "function" && ra(G(G({}, X), {}, {
        clientOnly: !1,
        path: ["Shared", Y]
      }), function() {
        return i(ne, {
          prefix: {
            rootPrefixCls: Y,
            iconPrefixCls: K
          },
          csp: k
        });
      });
      var te = ra(G(G({}, X), {}, {
        path: [h, b, K]
      }), function() {
        if (p.injectStyle === !1)
          return [];
        var Z = e1(ne), ce = Z.token, le = Z.flush, ue = jl(S, z, g), _e = ".".concat(b), me = Nl(S, z, ue, {
          deprecatedTokens: p.deprecatedTokens
        });
        J && ue && we(ue) === "object" && Object.keys(ue).forEach(function(Q) {
          ue[Q] = "var(".concat(Ao(Q, Il(S, J.prefix)), ")");
        });
        var Me = pn(ce, {
          componentCls: _e,
          prefixCls: b,
          iconCls: ".".concat(K),
          antCls: ".".concat(Y),
          calc: P,
          // @ts-ignore
          max: H,
          // @ts-ignore
          min: F
        }, J ? ue : me), ke = v(Me, {
          hashId: U,
          prefixCls: b,
          rootPrefixCls: Y,
          iconPrefixCls: K
        });
        le(S, me);
        var N = typeof s == "function" ? s(Me, b, O, p.resetFont) : null;
        return [p.resetStyle === !1 ? null : N, ke];
      });
      return [te, U];
    };
  }
  function d(f, v, g) {
    var p = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, x = u(f, v, g, G({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, p)), C = function(h) {
      var E = h.prefixCls, b = h.rootCls, O = b === void 0 ? E : b;
      return x(E, O), null;
    };
    return process.env.NODE_ENV !== "production" && (C.displayName = "SubStyle_".concat(String(Array.isArray(f) ? f.join(".") : f))), C;
  }
  return {
    genStyleHooks: c,
    genSubStyleComponent: d,
    genComponentStyleHook: u
  };
}
const dc = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"], a1 = "5.24.6";
function ps(e) {
  return e >= 0 && e <= 255;
}
function Tr(e, t) {
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
var c1 = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function Cd(e) {
  const {
    override: t
  } = e, n = c1(e, ["override"]), r = Object.assign({}, t);
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
    colorSplit: Tr(o.colorBorderSecondary, o.colorBgContainer),
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
    colorErrorOutline: Tr(o.colorErrorBg, o.colorBgContainer),
    colorWarningOutline: Tr(o.colorWarningBg, o.colorBgContainer),
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
    controlOutline: Tr(o.colorPrimaryBg, o.colorBgContainer),
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
var Ml = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const wd = {
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
}, l1 = {
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
}, u1 = {
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
}, Ed = (e, t, n) => {
  const r = n.getDerivativeToken(e), {
    override: o
  } = t, i = Ml(t, ["override"]);
  let s = Object.assign(Object.assign({}, r), {
    override: o
  });
  return s = Cd(s), i && Object.entries(i).forEach((a) => {
    let [c, l] = a;
    const {
      theme: u
    } = l, d = Ml(l, ["theme"]);
    let f = d;
    u && (f = Ed(Object.assign(Object.assign({}, s), d), {
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
  } = W.useContext(vd), i = `${a1}-${t || ""}`, s = n || md, [a, c, l] = Vg(s, [Mr, e], {
    salt: i,
    override: r,
    getComputedToken: Ed,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: Cd,
    cssVar: o && {
      prefix: o.prefix,
      key: o.key,
      unitless: wd,
      ignore: l1,
      preserve: u1
    }
  });
  return [s, l, t ? c : "", a, o];
}
const _d = function(e) {
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
}, Od = () => ({
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
}), f1 = (e) => ({
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
}), d1 = (e, t, n, r) => {
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
}, h1 = (e, t) => ({
  outline: `${Zt(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
  outlineOffset: t ?? 1,
  transition: "outline-offset 0s, outline 0s"
}), p1 = (e, t) => ({
  "&:focus-visible": Object.assign({}, h1(e, t))
}), Td = (e) => ({
  [`.${e}`]: Object.assign(Object.assign({}, Od()), {
    [`.${e} .${e}-icon`]: {
      display: "block"
    }
  })
}), {
  genStyleHooks: Ai,
  genComponentStyleHook: x1,
  genSubStyleComponent: g1
} = s1({
  usePrefix: () => {
    const {
      getPrefixCls: e,
      iconPrefixCls: t
    } = Et(Nt);
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
    } = Et(Nt);
    return e ?? {};
  },
  getResetStyles: (e, t) => {
    var n;
    const r = f1(e);
    return [r, {
      "&": r
    }, Td((n = t == null ? void 0 : t.prefix.iconPrefixCls) !== null && n !== void 0 ? n : uc)];
  },
  getCommonStyle: d1,
  getCompUnitless: () => wd
}), m1 = (e, t) => {
  const [n, r] = Ur();
  return ra({
    token: r,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => t == null ? void 0 : t.nonce,
    layer: {
      name: "antd"
    }
  }, () => [Td(e)]);
}, v1 = Object.assign({}, w), {
  useId: Dl
} = v1, b1 = () => "", y1 = typeof Dl > "u" ? b1 : Dl;
function S1(e, t, n) {
  var r, o;
  const i = hn("ConfigProvider"), s = e || {}, a = s.inherit === !1 || !t ? Object.assign(Object.assign({}, ma), {
    hashed: (r = t == null ? void 0 : t.hashed) !== null && r !== void 0 ? r : ma.hashed,
    cssVar: t == null ? void 0 : t.cssVar
  }) : t, c = y1();
  if (process.env.NODE_ENV !== "production") {
    const l = s.cssVar || a.cssVar, u = !!(typeof s.cssVar == "object" && (!((o = s.cssVar) === null || o === void 0) && o.key) || c);
    process.env.NODE_ENV !== "production" && i(!l || u, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return Qa(() => {
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
    return !xg(d, v, !0);
  }));
}
var C1 = ["children"], Ad = /* @__PURE__ */ w.createContext({});
function w1(e) {
  var t = e.children, n = Nn(e, C1);
  return /* @__PURE__ */ w.createElement(Ad.Provider, {
    value: n
  }, t);
}
var E1 = /* @__PURE__ */ function(e) {
  cr(n, e);
  var t = Vr(n);
  function n() {
    return bt(this, n), t.apply(this, arguments);
  }
  return yt(n, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), n;
}(w.Component);
function _1(e) {
  var t = w.useReducer(function(a) {
    return a + 1;
  }, 0), n = ae(t, 2), r = n[1], o = w.useRef(e), i = fn(function() {
    return o.current;
  }), s = fn(function(a) {
    o.current = typeof a == "function" ? a(o.current) : a, r();
  });
  return [i, s];
}
var on = "none", fo = "appear", ho = "enter", po = "leave", Bl = "none", At = "prepare", zn = "start", Hn = "active", hc = "end", Rd = "prepared";
function zl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit".concat(e)] = "webkit".concat(t), n["Moz".concat(e)] = "moz".concat(t), n["ms".concat(e)] = "MS".concat(t), n["O".concat(e)] = "o".concat(t.toLowerCase()), n;
}
function O1(e, t) {
  var n = {
    animationend: zl("Animation", "AnimationEnd"),
    transitionend: zl("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete n.animationend.animation, "TransitionEvent" in t || delete n.transitionend.transition), n;
}
var T1 = O1(Qt(), typeof window < "u" ? window : {}), Pd = {};
if (Qt()) {
  var A1 = document.createElement("div");
  Pd = A1.style;
}
var xo = {};
function Id(e) {
  if (xo[e])
    return xo[e];
  var t = T1[e];
  if (t)
    for (var n = Object.keys(t), r = n.length, o = 0; o < r; o += 1) {
      var i = n[o];
      if (Object.prototype.hasOwnProperty.call(t, i) && i in Pd)
        return xo[e] = t[i], xo[e];
    }
  return "";
}
var Nd = Id("animationend"), kd = Id("transitionend"), jd = !!(Nd && kd), Hl = Nd || "animationend", Fl = kd || "transitionend";
function $l(e, t) {
  if (!e) return null;
  if (we(e) === "object") {
    var n = t.replace(/-\w/g, function(r) {
      return r[1].toUpperCase();
    });
    return e[n];
  }
  return "".concat(e, "-").concat(t);
}
const R1 = function(e) {
  var t = Ee();
  function n(o) {
    o && (o.removeEventListener(Fl, e), o.removeEventListener(Hl, e));
  }
  function r(o) {
    t.current && t.current !== o && n(t.current), o && o !== t.current && (o.addEventListener(Fl, e), o.addEventListener(Hl, e), t.current = o);
  }
  return w.useEffect(function() {
    return function() {
      n(t.current);
    };
  }, []), [r, n];
};
var Ld = Qt() ? J0 : Ye;
const P1 = function() {
  var e = w.useRef(null);
  function t() {
    un.cancel(e.current);
  }
  function n(r) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var i = un(function() {
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
var I1 = [At, zn, Hn, hc], N1 = [At, Rd], Md = !1, k1 = !0;
function Dd(e) {
  return e === Hn || e === hc;
}
const j1 = function(e, t, n) {
  var r = Br(Bl), o = ae(r, 2), i = o[0], s = o[1], a = P1(), c = ae(a, 2), l = c[0], u = c[1];
  function d() {
    s(At, !0);
  }
  var f = t ? N1 : I1;
  return Ld(function() {
    if (i !== Bl && i !== hc) {
      var v = f.indexOf(i), g = f[v + 1], p = n(i);
      p === Md ? s(g, !0) : g && l(function(x) {
        function C() {
          x.isCanceled() || s(g, !0);
        }
        p === !0 ? C() : Promise.resolve(p).then(C);
      });
    }
  }, [e, i]), w.useEffect(function() {
    return function() {
      u();
    };
  }, []), [d, i];
};
function L1(e, t, n, r) {
  var o = r.motionEnter, i = o === void 0 ? !0 : o, s = r.motionAppear, a = s === void 0 ? !0 : s, c = r.motionLeave, l = c === void 0 ? !0 : c, u = r.motionDeadline, d = r.motionLeaveImmediately, f = r.onAppearPrepare, v = r.onEnterPrepare, g = r.onLeavePrepare, p = r.onAppearStart, x = r.onEnterStart, C = r.onLeaveStart, S = r.onAppearActive, h = r.onEnterActive, E = r.onLeaveActive, b = r.onAppearEnd, O = r.onEnterEnd, _ = r.onLeaveEnd, j = r.onVisibleChanged, z = Br(), U = ae(z, 2), ne = U[0], J = U[1], B = _1(on), Y = ae(B, 2), K = Y[0], k = Y[1], R = Br(null), P = ae(R, 2), L = P[0], H = P[1], F = K(), X = Ee(!1), te = Ee(null);
  function Z() {
    return n();
  }
  var ce = Ee(!1);
  function le() {
    k(on), H(null, !0);
  }
  var ue = fn(function(ze) {
    var Ie = K();
    if (Ie !== on) {
      var Qe = Z();
      if (!(ze && !ze.deadline && ze.target !== Qe)) {
        var dt = ce.current, lt;
        Ie === fo && dt ? lt = b == null ? void 0 : b(Qe, ze) : Ie === ho && dt ? lt = O == null ? void 0 : O(Qe, ze) : Ie === po && dt && (lt = _ == null ? void 0 : _(Qe, ze)), dt && lt !== !1 && le();
      }
    }
  }), _e = R1(ue), me = ae(_e, 1), Me = me[0], ke = function(Ie) {
    switch (Ie) {
      case fo:
        return q(q(q({}, At, f), zn, p), Hn, S);
      case ho:
        return q(q(q({}, At, v), zn, x), Hn, h);
      case po:
        return q(q(q({}, At, g), zn, C), Hn, E);
      default:
        return {};
    }
  }, N = w.useMemo(function() {
    return ke(F);
  }, [F]), Q = j1(F, !e, function(ze) {
    if (ze === At) {
      var Ie = N[At];
      return Ie ? Ie(Z()) : Md;
    }
    if (A in N) {
      var Qe;
      H(((Qe = N[A]) === null || Qe === void 0 ? void 0 : Qe.call(N, Z(), null)) || null);
    }
    return A === Hn && F !== on && (Me(Z()), u > 0 && (clearTimeout(te.current), te.current = setTimeout(function() {
      ue({
        deadline: !0
      });
    }, u))), A === Rd && le(), k1;
  }), T = ae(Q, 2), $ = T[0], A = T[1], re = Dd(A);
  ce.current = re;
  var Oe = Ee(null);
  Ld(function() {
    if (!(X.current && Oe.current === t)) {
      J(t);
      var ze = X.current;
      X.current = !0;
      var Ie;
      !ze && t && a && (Ie = fo), ze && t && i && (Ie = ho), (ze && !t && l || !ze && d && !t && l) && (Ie = po);
      var Qe = ke(Ie);
      Ie && (e || Qe[At]) ? (k(Ie), $()) : k(on), Oe.current = t;
    }
  }, [t]), Ye(function() {
    // Cancel appear
    (F === fo && !a || // Cancel enter
    F === ho && !i || // Cancel leave
    F === po && !l) && k(on);
  }, [a, i, l]), Ye(function() {
    return function() {
      X.current = !1, clearTimeout(te.current);
    };
  }, []);
  var fe = w.useRef(!1);
  Ye(function() {
    ne && (fe.current = !0), ne !== void 0 && F === on && ((fe.current || ne) && (j == null || j(ne)), fe.current = !0);
  }, [ne, F]);
  var Je = L;
  return N[At] && A === zn && (Je = G({
    transition: "none"
  }, Je)), [F, A, Je, ne ?? t];
}
function M1(e) {
  var t = e;
  we(e) === "object" && (t = e.transitionSupport);
  function n(o, i) {
    return !!(o.motionName && t && i !== !1);
  }
  var r = /* @__PURE__ */ w.forwardRef(function(o, i) {
    var s = o.visible, a = s === void 0 ? !0 : s, c = o.removeOnLeave, l = c === void 0 ? !0 : c, u = o.forceRender, d = o.children, f = o.motionName, v = o.leavedClassName, g = o.eventProps, p = w.useContext(Ad), x = p.motion, C = n(o, x), S = Ee(), h = Ee();
    function E() {
      try {
        return S.current instanceof HTMLElement ? S.current : og(h.current);
      } catch {
        return null;
      }
    }
    var b = L1(C, a, E, o), O = ae(b, 4), _ = O[0], j = O[1], z = O[2], U = O[3], ne = w.useRef(U);
    U && (ne.current = !0);
    var J = w.useCallback(function(P) {
      S.current = P, Af(i, P);
    }, [i]), B, Y = G(G({}, g), {}, {
      visible: a
    });
    if (!d)
      B = null;
    else if (_ === on)
      U ? B = d(G({}, Y), J) : !l && ne.current && v ? B = d(G(G({}, Y), {}, {
        className: v
      }), J) : u || !l && !v ? B = d(G(G({}, Y), {}, {
        style: {
          display: "none"
        }
      }), J) : B = null;
    else {
      var K;
      j === At ? K = "prepare" : Dd(j) ? K = "active" : j === zn && (K = "start");
      var k = $l(f, "".concat(_, "-").concat(K));
      B = d(G(G({}, Y), {}, {
        className: Ce($l(f, _), q(q({}, k, k && K), f, typeof f == "string")),
        style: z
      }), J);
    }
    if (/* @__PURE__ */ w.isValidElement(B) && Rf(B)) {
      var R = If(B);
      R || (B = /* @__PURE__ */ w.cloneElement(B, {
        ref: J
      }));
    }
    return /* @__PURE__ */ w.createElement(E1, {
      ref: h
    }, B);
  });
  return r.displayName = "CSSMotion", r;
}
const Ri = M1(jd);
var ba = "add", ya = "keep", Sa = "remove", xs = "removed";
function D1(e) {
  var t;
  return e && we(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, G(G({}, t), {}, {
    key: String(t.key)
  });
}
function Ca() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(D1);
}
function B1() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = [], r = 0, o = t.length, i = Ca(e), s = Ca(t);
  i.forEach(function(l) {
    for (var u = !1, d = r; d < o; d += 1) {
      var f = s[d];
      if (f.key === l.key) {
        r < d && (n = n.concat(s.slice(r, d).map(function(v) {
          return G(G({}, v), {}, {
            status: ba
          });
        })), r = d), n.push(G(G({}, f), {}, {
          status: ya
        })), r += 1, u = !0;
        break;
      }
    }
    u || n.push(G(G({}, l), {}, {
      status: Sa
    }));
  }), r < o && (n = n.concat(s.slice(r).map(function(l) {
    return G(G({}, l), {}, {
      status: ba
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
      return d !== l || f !== Sa;
    }), n.forEach(function(u) {
      u.key === l && (u.status = ya);
    });
  }), n;
}
var z1 = ["component", "children", "onVisibleChanged", "onAllRemoved"], H1 = ["status"], F1 = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function $1(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ri, n = /* @__PURE__ */ function(r) {
    cr(i, r);
    var o = Vr(i);
    function i() {
      var s;
      bt(this, i);
      for (var a = arguments.length, c = new Array(a), l = 0; l < a; l++)
        c[l] = arguments[l];
      return s = o.call.apply(o, [this].concat(c)), q(Tn(s), "state", {
        keyEntities: []
      }), q(Tn(s), "removeKey", function(u) {
        s.setState(function(d) {
          var f = d.keyEntities.map(function(v) {
            return v.key !== u ? v : G(G({}, v), {}, {
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
    return yt(i, [{
      key: "render",
      value: function() {
        var a = this, c = this.state.keyEntities, l = this.props, u = l.component, d = l.children, f = l.onVisibleChanged;
        l.onAllRemoved;
        var v = Nn(l, z1), g = u || w.Fragment, p = {};
        return F1.forEach(function(x) {
          p[x] = v[x], delete v[x];
        }), delete v.keys, /* @__PURE__ */ w.createElement(g, v, c.map(function(x, C) {
          var S = x.status, h = Nn(x, H1), E = S === ba || S === ya;
          return /* @__PURE__ */ w.createElement(t, xt({}, p, {
            key: h.key,
            visible: E,
            eventProps: h,
            onVisibleChanged: function(O) {
              f == null || f(O, {
                key: h.key
              }), O || a.removeKey(h.key);
            }
          }), function(b, O) {
            return d(G(G({}, b), {}, {
              index: C
            }), O);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(a, c) {
        var l = a.keys, u = c.keyEntities, d = Ca(l), f = B1(u, d);
        return {
          keyEntities: f.filter(function(v) {
            var g = u.find(function(p) {
              var x = p.key;
              return v.key === x;
            });
            return !(g && g.status === xs && v.status === Sa);
          })
        };
      }
    }]), i;
  }(w.Component);
  return q(n, "defaultProps", {
    component: "div"
  }), n;
}
$1(jd);
function V1(e) {
  const {
    children: t
  } = e, [, n] = Ur(), {
    motion: r
  } = n, o = w.useRef(!1);
  return o.current = o.current || r === !1, o.current ? /* @__PURE__ */ w.createElement(w1, {
    motion: r
  }, t) : t;
}
const Bd = /* @__PURE__ */ w.memo((e) => {
  let {
    dropdownMatchSelectWidth: t
  } = e;
  return hn("ConfigProvider").deprecated(t === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
process.env.NODE_ENV !== "production" && (Bd.displayName = "PropWarning");
const W1 = process.env.NODE_ENV !== "production" ? Bd : () => null;
var q1 = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
let wa = !1;
process.env.NODE_ENV;
const U1 = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let zd;
function X1() {
  return zd || Xo;
}
function Y1(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const G1 = (e) => {
  const {
    prefixCls: t,
    iconPrefixCls: n,
    theme: r,
    holderRender: o
  } = e;
  t !== void 0 && (zd = t), r && Y1(r) && (process.env.NODE_ENV !== "production" && qr(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), Wm(X1(), r));
}, K1 = (e) => {
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
    popupOverflow: p,
    legacyLocale: x,
    parentContext: C,
    iconPrefixCls: S,
    theme: h,
    componentDisabled: E,
    segmented: b,
    statistic: O,
    spin: _,
    calendar: j,
    carousel: z,
    cascader: U,
    collapse: ne,
    typography: J,
    checkbox: B,
    descriptions: Y,
    divider: K,
    drawer: k,
    skeleton: R,
    steps: P,
    image: L,
    layout: H,
    list: F,
    mentions: X,
    modal: te,
    progress: Z,
    result: ce,
    slider: le,
    breadcrumb: ue,
    menu: _e,
    pagination: me,
    input: Me,
    textArea: ke,
    empty: N,
    badge: Q,
    radio: T,
    rate: $,
    switch: A,
    transfer: re,
    avatar: Oe,
    message: fe,
    tag: Je,
    table: ze,
    card: Ie,
    tabs: Qe,
    timeline: dt,
    timePicker: lt,
    upload: Vt,
    notification: D,
    tree: y,
    colorPicker: be,
    datePicker: se,
    rangePicker: Ne,
    flex: ie,
    wave: Be,
    dropdown: xe,
    warning: ye,
    tour: nt,
    tooltip: Wt,
    popover: xn,
    popconfirm: He,
    floatButtonGroup: je,
    variant: ut,
    inputNumber: Lt,
    treeSelect: Mt
  } = e, qt = w.useCallback(($e, m) => {
    const {
      prefixCls: M
    } = e;
    if (m)
      return m;
    const V = M || C.getPrefixCls("");
    return $e ? `${V}-${$e}` : V;
  }, [C.getPrefixCls, e.prefixCls]), gn = S || C.iconPrefixCls || uc, jn = n || C.csp;
  m1(gn, jn);
  const mn = S1(h, C.theme, {
    prefixCls: qt("")
  });
  process.env.NODE_ENV !== "production" && (wa = wa || !!mn);
  const Ln = {
    csp: jn,
    autoInsertSpaceInButton: r,
    alert: o,
    anchor: i,
    locale: a || x,
    direction: l,
    space: u,
    splitter: d,
    virtual: f,
    popupMatchSelectWidth: g ?? v,
    popupOverflow: p,
    getPrefixCls: qt,
    iconPrefixCls: gn,
    theme: mn,
    segmented: b,
    statistic: O,
    spin: _,
    calendar: j,
    carousel: z,
    cascader: U,
    collapse: ne,
    typography: J,
    checkbox: B,
    descriptions: Y,
    divider: K,
    drawer: k,
    skeleton: R,
    steps: P,
    image: L,
    input: Me,
    textArea: ke,
    layout: H,
    list: F,
    mentions: X,
    modal: te,
    progress: Z,
    result: ce,
    slider: le,
    breadcrumb: ue,
    menu: _e,
    pagination: me,
    empty: N,
    badge: Q,
    radio: T,
    rate: $,
    switch: A,
    transfer: re,
    avatar: Oe,
    message: fe,
    tag: Je,
    table: ze,
    card: Ie,
    tabs: Qe,
    timeline: dt,
    timePicker: lt,
    upload: Vt,
    notification: D,
    tree: y,
    colorPicker: be,
    datePicker: se,
    rangePicker: Ne,
    flex: ie,
    wave: Be,
    dropdown: xe,
    warning: ye,
    tour: nt,
    tooltip: Wt,
    popover: xn,
    popconfirm: He,
    floatButtonGroup: je,
    variant: ut,
    inputNumber: Lt,
    treeSelect: Mt
  };
  process.env.NODE_ENV !== "production" && hn("ConfigProvider")(!("autoInsertSpaceInButton" in e), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const tn = Object.assign({}, C);
  Object.keys(Ln).forEach(($e) => {
    Ln[$e] !== void 0 && (tn[$e] = Ln[$e]);
  }), U1.forEach(($e) => {
    const m = e[$e];
    m && (tn[$e] = m);
  }), typeof r < "u" && (tn.button = Object.assign({
    autoInsertSpace: r
  }, tn.button));
  const nn = Qa(() => tn, tn, ($e, m) => {
    const M = Object.keys($e), V = Object.keys(m);
    return M.length !== V.length || M.some((oe) => $e[oe] !== m[oe]);
  }), {
    layer: pr
  } = w.useContext(Wr), Kr = w.useMemo(() => ({
    prefixCls: gn,
    csp: jn,
    layer: pr ? "antd" : void 0
  }), [gn, jn, pr]);
  let et = /* @__PURE__ */ w.createElement(w.Fragment, null, /* @__PURE__ */ w.createElement(W1, {
    dropdownMatchSelectWidth: v
  }), t);
  const Zr = w.useMemo(() => {
    var $e, m, M, V;
    return wm((($e = Ti.Form) === null || $e === void 0 ? void 0 : $e.defaultValidateMessages) || {}, ((M = (m = nn.locale) === null || m === void 0 ? void 0 : m.Form) === null || M === void 0 ? void 0 : M.defaultValidateMessages) || {}, ((V = nn.form) === null || V === void 0 ? void 0 : V.validateMessages) || {}, (s == null ? void 0 : s.validateMessages) || {});
  }, [nn, s == null ? void 0 : s.validateMessages]);
  Object.keys(Zr).length > 0 && (et = /* @__PURE__ */ w.createElement(_m.Provider, {
    value: Zr
  }, et)), a && (et = /* @__PURE__ */ w.createElement(dd, {
    locale: a,
    _ANT_MARK__: fd
  }, et)), et = /* @__PURE__ */ w.createElement(cc.Provider, {
    value: Kr
  }, et), c && (et = /* @__PURE__ */ w.createElement(Um, {
    size: c
  }, et)), et = /* @__PURE__ */ w.createElement(V1, null, et);
  const Xi = w.useMemo(() => {
    const $e = mn || {}, {
      algorithm: m,
      token: M,
      components: V,
      cssVar: oe
    } = $e, Se = q1($e, ["algorithm", "token", "components", "cssVar"]), Te = m && (!Array.isArray(m) || m.length > 0) ? Js(m) : md, ge = {};
    Object.entries(V || {}).forEach((at) => {
      let [Fe, Ve] = at;
      const We = Object.assign({}, Ve);
      "algorithm" in We && (We.algorithm === !0 ? We.theme = Te : (Array.isArray(We.algorithm) || typeof We.algorithm == "function") && (We.theme = Js(We.algorithm)), delete We.algorithm), ge[Fe] = We;
    });
    const pe = Object.assign(Object.assign({}, Mr), M);
    return Object.assign(Object.assign({}, Se), {
      theme: Te,
      token: pe,
      components: ge,
      override: Object.assign({
        override: pe
      }, ge),
      cssVar: oe
    });
  }, [mn]);
  return h && (et = /* @__PURE__ */ w.createElement(vd.Provider, {
    value: Xi
  }, et)), nn.warning && (et = /* @__PURE__ */ w.createElement(ld.Provider, {
    value: nn.warning
  }, et)), E !== void 0 && (et = /* @__PURE__ */ w.createElement(qm, {
    disabled: E
  }, et)), /* @__PURE__ */ w.createElement(Nt.Provider, {
    value: nn
  }, et);
}, ur = (e) => {
  const t = w.useContext(Nt), n = w.useContext(ud);
  return /* @__PURE__ */ w.createElement(K1, Object.assign({
    parentContext: t,
    legacyLocale: n
  }, e));
};
ur.ConfigContext = Nt;
ur.SizeContext = er;
ur.config = G1;
ur.useConfig = Xm;
Object.defineProperty(ur, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && qr(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), er)
});
process.env.NODE_ENV !== "production" && (ur.displayName = "ConfigProvider");
function Hd(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function Z1(e) {
  return Hd(e) instanceof ShadowRoot;
}
function J1(e) {
  return Z1(e) ? Hd(e) : null;
}
function Q1(e) {
  return e.replace(/-(.)/g, function(t, n) {
    return n.toUpperCase();
  });
}
function ev(e, t) {
  dn(e, "[@ant-design/icons] ".concat(t));
}
function Vl(e) {
  return we(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (we(e.icon) === "object" || typeof e.icon == "function");
}
function Wl() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(t, n) {
    var r = e[n];
    switch (n) {
      case "class":
        t.className = r, delete t.class;
        break;
      default:
        delete t[n], t[Q1(n)] = r;
    }
    return t;
  }, {});
}
function Ea(e, t, n) {
  return n ? /* @__PURE__ */ W.createElement(e.tag, G(G({
    key: t
  }, Wl(e.attrs)), n), (e.children || []).map(function(r, o) {
    return Ea(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
  })) : /* @__PURE__ */ W.createElement(e.tag, G({
    key: t
  }, Wl(e.attrs)), (e.children || []).map(function(r, o) {
    return Ea(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
  }));
}
function Fd(e) {
  return Dr(e)[0];
}
function $d(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var tv = `
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
`, nv = function(t) {
  var n = Et(cc), r = n.csp, o = n.prefixCls, i = n.layer, s = tv;
  o && (s = s.replace(/anticon/g, o)), i && (s = "@layer ".concat(i, ` {
`).concat(s, `
}`)), Ye(function() {
    var a = t.current, c = J1(a);
    An(s, "@ant-design-icons", {
      prepend: !i,
      csp: r,
      attachTo: c
    });
  }, []);
}, rv = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], Ir = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function ov(e) {
  var t = e.primaryColor, n = e.secondaryColor;
  Ir.primaryColor = t, Ir.secondaryColor = n || Fd(t), Ir.calculated = !!n;
}
function iv() {
  return G({}, Ir);
}
var fr = function(t) {
  var n = t.icon, r = t.className, o = t.onClick, i = t.style, s = t.primaryColor, a = t.secondaryColor, c = Nn(t, rv), l = w.useRef(), u = Ir;
  if (s && (u = {
    primaryColor: s,
    secondaryColor: a || Fd(s)
  }), nv(l), ev(Vl(n), "icon should be icon definiton, but got ".concat(n)), !Vl(n))
    return null;
  var d = n;
  return d && typeof d.icon == "function" && (d = G(G({}, d), {}, {
    icon: d.icon(u.primaryColor, u.secondaryColor)
  })), Ea(d.icon, "svg-".concat(d.name), G(G({
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
fr.getTwoToneColors = iv;
fr.setTwoToneColors = ov;
function Vd(e) {
  var t = $d(e), n = ae(t, 2), r = n[0], o = n[1];
  return fr.setTwoToneColors({
    primaryColor: r,
    secondaryColor: o
  });
}
function sv() {
  var e = fr.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var av = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
Vd(Uo.primary);
var en = /* @__PURE__ */ w.forwardRef(function(e, t) {
  var n = e.className, r = e.icon, o = e.spin, i = e.rotate, s = e.tabIndex, a = e.onClick, c = e.twoToneColor, l = Nn(e, av), u = w.useContext(cc), d = u.prefixCls, f = d === void 0 ? "anticon" : d, v = u.rootClassName, g = Ce(v, f, q(q({}, "".concat(f, "-").concat(r.name), !!r.name), "".concat(f, "-spin"), !!o || r.name === "loading"), n), p = s;
  p === void 0 && a && (p = -1);
  var x = i ? {
    msTransform: "rotate(".concat(i, "deg)"),
    transform: "rotate(".concat(i, "deg)")
  } : void 0, C = $d(c), S = ae(C, 2), h = S[0], E = S[1];
  return /* @__PURE__ */ w.createElement("span", xt({
    role: "img",
    "aria-label": r.name
  }, l, {
    ref: t,
    tabIndex: p,
    onClick: a,
    className: g
  }), /* @__PURE__ */ w.createElement(fr, {
    icon: r,
    primaryColor: h,
    secondaryColor: E,
    style: x
  }));
});
en.displayName = "AntdIcon";
en.getTwoToneColor = sv;
en.setTwoToneColor = Vd;
var cv = function(t, n) {
  return /* @__PURE__ */ w.createElement(en, xt({}, t, {
    ref: n,
    icon: qp
  }));
}, Wd = /* @__PURE__ */ w.forwardRef(cv);
process.env.NODE_ENV !== "production" && (Wd.displayName = "CheckCircleFilled");
var lv = function(t, n) {
  return /* @__PURE__ */ w.createElement(en, xt({}, t, {
    ref: n,
    icon: Up
  }));
}, qd = /* @__PURE__ */ w.forwardRef(lv);
process.env.NODE_ENV !== "production" && (qd.displayName = "CloseCircleFilled");
var uv = function(t, n) {
  return /* @__PURE__ */ w.createElement(en, xt({}, t, {
    ref: n,
    icon: Xp
  }));
}, Ud = /* @__PURE__ */ w.forwardRef(uv);
process.env.NODE_ENV !== "production" && (Ud.displayName = "CloseOutlined");
var fv = function(t, n) {
  return /* @__PURE__ */ w.createElement(en, xt({}, t, {
    ref: n,
    icon: Yp
  }));
}, Xd = /* @__PURE__ */ w.forwardRef(fv);
process.env.NODE_ENV !== "production" && (Xd.displayName = "ExclamationCircleFilled");
var dv = function(t, n) {
  return /* @__PURE__ */ w.createElement(en, xt({}, t, {
    ref: n,
    icon: Gp
  }));
}, Yd = /* @__PURE__ */ w.forwardRef(dv);
process.env.NODE_ENV !== "production" && (Yd.displayName = "InfoCircleFilled");
var hv = `accept acceptCharset accessKey action allowFullScreen allowTransparency
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
    summary tabIndex target title type useMap value width wmode wrap`, pv = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, xv = "".concat(hv, " ").concat(pv).split(/[\s\n]+/), gv = "aria-", mv = "data-";
function ql(e, t) {
  return e.indexOf(t) === 0;
}
function vv(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n;
  t === !1 ? n = {
    aria: !0,
    data: !0,
    attr: !0
  } : t === !0 ? n = {
    aria: !0
  } : n = G({}, t);
  var r = {};
  return Object.keys(e).forEach(function(o) {
    // Aria
    (n.aria && (o === "role" || ql(o, gv)) || // Data
    n.data && ql(o, mv) || // Attr
    n.attr && xv.includes(o)) && (r[o] = e[o]);
  }), r;
}
function bv(e) {
  return e && /* @__PURE__ */ W.isValidElement(e) && e.type === W.Fragment;
}
const Gd = (e, t, n) => /* @__PURE__ */ W.isValidElement(e) ? /* @__PURE__ */ W.cloneElement(e, typeof n == "function" ? n(e.props || {}) : n) : t;
function pc(e, t) {
  return Gd(e, e, t);
}
const go = (e, t, n, r, o) => ({
  background: e,
  border: `${Zt(r.lineWidth)} ${r.lineType} ${t}`,
  [`${o}-icon`]: {
    color: n
  }
}), yv = (e) => {
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
    [t]: Object.assign(Object.assign({}, _d(e)), {
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
}, Sv = (e) => {
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
}, Cv = (e) => {
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
        lineHeight: Zt(i),
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
}, wv = (e) => ({
  withDescriptionIconSize: e.fontSizeHeading3,
  defaultPadding: `${e.paddingContentVerticalSM}px 12px`,
  withDescriptionPadding: `${e.paddingMD}px ${e.paddingContentHorizontalLG}px`
}), Ev = Ai("Alert", (e) => [yv(e), Sv(e), Cv(e)], wv);
var Ul = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const _v = {
  success: Wd,
  info: Yd,
  error: qd,
  warning: Xd
}, Ov = (e) => {
  const {
    icon: t,
    prefixCls: n,
    type: r
  } = e, o = _v[r] || null;
  return t ? Gd(t, /* @__PURE__ */ w.createElement("span", {
    className: `${n}-icon`
  }, t), () => ({
    className: Ce(`${n}-icon`, t.props.className)
  })) : /* @__PURE__ */ w.createElement(o, {
    className: `${n}-icon`
  });
}, Tv = (e) => {
  const {
    isClosable: t,
    prefixCls: n,
    closeIcon: r,
    handleClose: o,
    ariaProps: i
  } = e, s = r === !0 || r === void 0 ? /* @__PURE__ */ w.createElement(Ud, null) : r;
  return t ? /* @__PURE__ */ w.createElement("button", Object.assign({
    type: "button",
    onClick: o,
    className: `${n}-close-icon`,
    tabIndex: 0
  }, i), s) : null;
}, xc = /* @__PURE__ */ w.forwardRef((e, t) => {
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
    closeText: p,
    closeIcon: x,
    action: C,
    id: S
  } = e, h = Ul(e, ["description", "prefixCls", "message", "banner", "className", "rootClassName", "style", "onMouseEnter", "onMouseLeave", "onClick", "afterClose", "showIcon", "closable", "closeText", "closeIcon", "action", "id"]), [E, b] = w.useState(!1);
  process.env.NODE_ENV !== "production" && hn("Alert").deprecated(!p, "closeText", "closable.closeIcon");
  const O = w.useRef(null);
  w.useImperativeHandle(t, () => ({
    nativeElement: O.current
  }));
  const {
    getPrefixCls: _,
    direction: j,
    closable: z,
    closeIcon: U,
    className: ne,
    style: J
  } = fc("alert"), B = _("alert", r), [Y, K, k] = Ev(B), R = (ce) => {
    var le;
    b(!0), (le = e.onClose) === null || le === void 0 || le.call(e, ce);
  }, P = w.useMemo(() => e.type !== void 0 ? e.type : i ? "warning" : "info", [e.type, i]), L = w.useMemo(() => typeof g == "object" && g.closeIcon || p ? !0 : typeof g == "boolean" ? g : x !== !1 && x !== null && x !== void 0 ? !0 : !!z, [p, x, g, z]), H = i && v === void 0 ? !0 : v, F = Ce(B, `${B}-${P}`, {
    [`${B}-with-description`]: !!n,
    [`${B}-no-icon`]: !H,
    [`${B}-banner`]: !!i,
    [`${B}-rtl`]: j === "rtl"
  }, ne, s, a, k, K), X = vv(h, {
    aria: !0,
    data: !0
  }), te = w.useMemo(() => typeof g == "object" && g.closeIcon ? g.closeIcon : p || (x !== void 0 ? x : typeof z == "object" && z.closeIcon ? z.closeIcon : U), [x, g, p, U]), Z = w.useMemo(() => {
    const ce = g ?? z;
    if (typeof ce == "object") {
      const {
        closeIcon: le
      } = ce;
      return Ul(ce, ["closeIcon"]);
    }
    return {};
  }, [g, z]);
  return Y(/* @__PURE__ */ w.createElement(Ri, {
    visible: !E,
    motionName: `${B}-motion`,
    motionAppear: !1,
    motionEnter: !1,
    onLeaveStart: (ce) => ({
      maxHeight: ce.offsetHeight
    }),
    onLeaveEnd: f
  }, (ce, le) => {
    let {
      className: ue,
      style: _e
    } = ce;
    return /* @__PURE__ */ w.createElement("div", Object.assign({
      id: S,
      ref: Ci(O, le),
      "data-show": !E,
      className: Ce(F, ue),
      style: Object.assign(Object.assign(Object.assign({}, J), c), _e),
      onMouseEnter: l,
      onMouseLeave: u,
      onClick: d,
      role: "alert"
    }, X), H ? /* @__PURE__ */ w.createElement(Ov, {
      description: n,
      icon: e.icon,
      prefixCls: B,
      type: P
    }) : null, /* @__PURE__ */ w.createElement("div", {
      className: `${B}-content`
    }, o ? /* @__PURE__ */ w.createElement("div", {
      className: `${B}-message`
    }, o) : null, n ? /* @__PURE__ */ w.createElement("div", {
      className: `${B}-description`
    }, n) : null), C ? /* @__PURE__ */ w.createElement("div", {
      className: `${B}-action`
    }, C) : null, /* @__PURE__ */ w.createElement(Tv, {
      isClosable: L,
      prefixCls: B,
      closeIcon: te,
      handleClose: R,
      ariaProps: Z
    }));
  }));
});
process.env.NODE_ENV !== "production" && (xc.displayName = "Alert");
function Av(e, t, n) {
  return t = Kn(t), Nf(e, ec() ? Reflect.construct(t, n || [], Kn(e).constructor) : t.apply(e, n));
}
let Rv = /* @__PURE__ */ function(e) {
  function t() {
    var n;
    return bt(this, t), n = Av(this, t, arguments), n.state = {
      error: void 0,
      info: {
        componentStack: ""
      }
    }, n;
  }
  return cr(t, e), yt(t, [{
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
      return a ? /* @__PURE__ */ w.createElement(xc, {
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
const Kd = xc;
Kd.ErrorBoundary = Rv;
var Pv = function(t, n) {
  return /* @__PURE__ */ w.createElement(en, xt({}, t, {
    ref: n,
    icon: Kp
  }));
}, Zd = /* @__PURE__ */ w.forwardRef(Pv);
process.env.NODE_ENV !== "production" && (Zd.displayName = "LoadingOutlined");
function zr() {
  zr = function() {
    return t;
  };
  var e, t = {}, n = Object.prototype, r = n.hasOwnProperty, o = Object.defineProperty || function(k, R, P) {
    k[R] = P.value;
  }, i = typeof Symbol == "function" ? Symbol : {}, s = i.iterator || "@@iterator", a = i.asyncIterator || "@@asyncIterator", c = i.toStringTag || "@@toStringTag";
  function l(k, R, P) {
    return Object.defineProperty(k, R, {
      value: P,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), k[R];
  }
  try {
    l({}, "");
  } catch {
    l = function(P, L, H) {
      return P[L] = H;
    };
  }
  function u(k, R, P, L) {
    var H = R && R.prototype instanceof C ? R : C, F = Object.create(H.prototype), X = new Y(L || []);
    return o(F, "_invoke", {
      value: U(k, P, X)
    }), F;
  }
  function d(k, R, P) {
    try {
      return {
        type: "normal",
        arg: k.call(R, P)
      };
    } catch (L) {
      return {
        type: "throw",
        arg: L
      };
    }
  }
  t.wrap = u;
  var f = "suspendedStart", v = "suspendedYield", g = "executing", p = "completed", x = {};
  function C() {
  }
  function S() {
  }
  function h() {
  }
  var E = {};
  l(E, s, function() {
    return this;
  });
  var b = Object.getPrototypeOf, O = b && b(b(K([])));
  O && O !== n && r.call(O, s) && (E = O);
  var _ = h.prototype = C.prototype = Object.create(E);
  function j(k) {
    ["next", "throw", "return"].forEach(function(R) {
      l(k, R, function(P) {
        return this._invoke(R, P);
      });
    });
  }
  function z(k, R) {
    function P(H, F, X, te) {
      var Z = d(k[H], k, F);
      if (Z.type !== "throw") {
        var ce = Z.arg, le = ce.value;
        return le && we(le) == "object" && r.call(le, "__await") ? R.resolve(le.__await).then(function(ue) {
          P("next", ue, X, te);
        }, function(ue) {
          P("throw", ue, X, te);
        }) : R.resolve(le).then(function(ue) {
          ce.value = ue, X(ce);
        }, function(ue) {
          return P("throw", ue, X, te);
        });
      }
      te(Z.arg);
    }
    var L;
    o(this, "_invoke", {
      value: function(F, X) {
        function te() {
          return new R(function(Z, ce) {
            P(F, X, Z, ce);
          });
        }
        return L = L ? L.then(te, te) : te();
      }
    });
  }
  function U(k, R, P) {
    var L = f;
    return function(H, F) {
      if (L === g) throw Error("Generator is already running");
      if (L === p) {
        if (H === "throw") throw F;
        return {
          value: e,
          done: !0
        };
      }
      for (P.method = H, P.arg = F; ; ) {
        var X = P.delegate;
        if (X) {
          var te = ne(X, P);
          if (te) {
            if (te === x) continue;
            return te;
          }
        }
        if (P.method === "next") P.sent = P._sent = P.arg;
        else if (P.method === "throw") {
          if (L === f) throw L = p, P.arg;
          P.dispatchException(P.arg);
        } else P.method === "return" && P.abrupt("return", P.arg);
        L = g;
        var Z = d(k, R, P);
        if (Z.type === "normal") {
          if (L = P.done ? p : v, Z.arg === x) continue;
          return {
            value: Z.arg,
            done: P.done
          };
        }
        Z.type === "throw" && (L = p, P.method = "throw", P.arg = Z.arg);
      }
    };
  }
  function ne(k, R) {
    var P = R.method, L = k.iterator[P];
    if (L === e) return R.delegate = null, P === "throw" && k.iterator.return && (R.method = "return", R.arg = e, ne(k, R), R.method === "throw") || P !== "return" && (R.method = "throw", R.arg = new TypeError("The iterator does not provide a '" + P + "' method")), x;
    var H = d(L, k.iterator, R.arg);
    if (H.type === "throw") return R.method = "throw", R.arg = H.arg, R.delegate = null, x;
    var F = H.arg;
    return F ? F.done ? (R[k.resultName] = F.value, R.next = k.nextLoc, R.method !== "return" && (R.method = "next", R.arg = e), R.delegate = null, x) : F : (R.method = "throw", R.arg = new TypeError("iterator result is not an object"), R.delegate = null, x);
  }
  function J(k) {
    var R = {
      tryLoc: k[0]
    };
    1 in k && (R.catchLoc = k[1]), 2 in k && (R.finallyLoc = k[2], R.afterLoc = k[3]), this.tryEntries.push(R);
  }
  function B(k) {
    var R = k.completion || {};
    R.type = "normal", delete R.arg, k.completion = R;
  }
  function Y(k) {
    this.tryEntries = [{
      tryLoc: "root"
    }], k.forEach(J, this), this.reset(!0);
  }
  function K(k) {
    if (k || k === "") {
      var R = k[s];
      if (R) return R.call(k);
      if (typeof k.next == "function") return k;
      if (!isNaN(k.length)) {
        var P = -1, L = function H() {
          for (; ++P < k.length; ) if (r.call(k, P)) return H.value = k[P], H.done = !1, H;
          return H.value = e, H.done = !0, H;
        };
        return L.next = L;
      }
    }
    throw new TypeError(we(k) + " is not iterable");
  }
  return S.prototype = h, o(_, "constructor", {
    value: h,
    configurable: !0
  }), o(h, "constructor", {
    value: S,
    configurable: !0
  }), S.displayName = l(h, c, "GeneratorFunction"), t.isGeneratorFunction = function(k) {
    var R = typeof k == "function" && k.constructor;
    return !!R && (R === S || (R.displayName || R.name) === "GeneratorFunction");
  }, t.mark = function(k) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(k, h) : (k.__proto__ = h, l(k, c, "GeneratorFunction")), k.prototype = Object.create(_), k;
  }, t.awrap = function(k) {
    return {
      __await: k
    };
  }, j(z.prototype), l(z.prototype, a, function() {
    return this;
  }), t.AsyncIterator = z, t.async = function(k, R, P, L, H) {
    H === void 0 && (H = Promise);
    var F = new z(u(k, R, P, L), H);
    return t.isGeneratorFunction(R) ? F : F.next().then(function(X) {
      return X.done ? X.value : F.next();
    });
  }, j(_), l(_, c, "Generator"), l(_, s, function() {
    return this;
  }), l(_, "toString", function() {
    return "[object Generator]";
  }), t.keys = function(k) {
    var R = Object(k), P = [];
    for (var L in R) P.push(L);
    return P.reverse(), function H() {
      for (; P.length; ) {
        var F = P.pop();
        if (F in R) return H.value = F, H.done = !1, H;
      }
      return H.done = !0, H;
    };
  }, t.values = K, Y.prototype = {
    constructor: Y,
    reset: function(R) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(B), !R) for (var P in this) P.charAt(0) === "t" && r.call(this, P) && !isNaN(+P.slice(1)) && (this[P] = e);
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
      function L(ce, le) {
        return X.type = "throw", X.arg = R, P.next = ce, le && (P.method = "next", P.arg = e), !!le;
      }
      for (var H = this.tryEntries.length - 1; H >= 0; --H) {
        var F = this.tryEntries[H], X = F.completion;
        if (F.tryLoc === "root") return L("end");
        if (F.tryLoc <= this.prev) {
          var te = r.call(F, "catchLoc"), Z = r.call(F, "finallyLoc");
          if (te && Z) {
            if (this.prev < F.catchLoc) return L(F.catchLoc, !0);
            if (this.prev < F.finallyLoc) return L(F.finallyLoc);
          } else if (te) {
            if (this.prev < F.catchLoc) return L(F.catchLoc, !0);
          } else {
            if (!Z) throw Error("try statement without catch or finally");
            if (this.prev < F.finallyLoc) return L(F.finallyLoc);
          }
        }
      }
    },
    abrupt: function(R, P) {
      for (var L = this.tryEntries.length - 1; L >= 0; --L) {
        var H = this.tryEntries[L];
        if (H.tryLoc <= this.prev && r.call(H, "finallyLoc") && this.prev < H.finallyLoc) {
          var F = H;
          break;
        }
      }
      F && (R === "break" || R === "continue") && F.tryLoc <= P && P <= F.finallyLoc && (F = null);
      var X = F ? F.completion : {};
      return X.type = R, X.arg = P, F ? (this.method = "next", this.next = F.finallyLoc, x) : this.complete(X);
    },
    complete: function(R, P) {
      if (R.type === "throw") throw R.arg;
      return R.type === "break" || R.type === "continue" ? this.next = R.arg : R.type === "return" ? (this.rval = this.arg = R.arg, this.method = "return", this.next = "end") : R.type === "normal" && P && (this.next = P), x;
    },
    finish: function(R) {
      for (var P = this.tryEntries.length - 1; P >= 0; --P) {
        var L = this.tryEntries[P];
        if (L.finallyLoc === R) return this.complete(L.completion, L.afterLoc), B(L), x;
      }
    },
    catch: function(R) {
      for (var P = this.tryEntries.length - 1; P >= 0; --P) {
        var L = this.tryEntries[P];
        if (L.tryLoc === R) {
          var H = L.completion;
          if (H.type === "throw") {
            var F = H.arg;
            B(L);
          }
          return F;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function(R, P, L) {
      return this.delegate = {
        iterator: K(R),
        resultName: P,
        nextLoc: L
      }, this.method === "next" && (this.arg = e), x;
    }
  }, t;
}
function Xl(e, t, n, r, o, i, s) {
  try {
    var a = e[i](s), c = a.value;
  } catch (l) {
    return void n(l);
  }
  a.done ? t(c) : Promise.resolve(c).then(r, o);
}
function Jd(e) {
  return function() {
    var t = this, n = arguments;
    return new Promise(function(r, o) {
      var i = e.apply(t, n);
      function s(c) {
        Xl(i, r, o, s, a, "next", c);
      }
      function a(c) {
        Xl(i, r, o, s, a, "throw", c);
      }
      s(void 0);
    });
  };
}
var Xr = G({}, Au), Iv = Xr.version, gs = Xr.render, Nv = Xr.unmountComponentAtNode, Pi;
try {
  var kv = Number((Iv || "").split(".")[0]);
  kv >= 18 && (Pi = Xr.createRoot);
} catch {
}
function Yl(e) {
  var t = Xr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && we(t) === "object" && (t.usingClientEntryPoint = e);
}
var Go = "__rc_react_root__";
function jv(e, t) {
  Yl(!0);
  var n = t[Go] || Pi(t);
  Yl(!1), n.render(e), t[Go] = n;
}
function Lv(e, t) {
  gs == null || gs(e, t);
}
function Mv(e, t) {
  if (Pi) {
    jv(e, t);
    return;
  }
  Lv(e, t);
}
function Dv(e) {
  return _a.apply(this, arguments);
}
function _a() {
  return _a = Jd(/* @__PURE__ */ zr().mark(function e(t) {
    return zr().wrap(function(r) {
      for (; ; ) switch (r.prev = r.next) {
        case 0:
          return r.abrupt("return", Promise.resolve().then(function() {
            var o;
            (o = t[Go]) === null || o === void 0 || o.unmount(), delete t[Go];
          }));
        case 1:
        case "end":
          return r.stop();
      }
    }, e);
  })), _a.apply(this, arguments);
}
function Bv(e) {
  Nv(e);
}
function zv(e) {
  return Oa.apply(this, arguments);
}
function Oa() {
  return Oa = Jd(/* @__PURE__ */ zr().mark(function e(t) {
    return zr().wrap(function(r) {
      for (; ; ) switch (r.prev = r.next) {
        case 0:
          if (Pi === void 0) {
            r.next = 2;
            break;
          }
          return r.abrupt("return", Dv(t));
        case 2:
          Bv(t);
        case 3:
        case "end":
          return r.stop();
      }
    }, e);
  })), Oa.apply(this, arguments);
}
const Hv = (e, t) => {
  if (process.env.NODE_ENV !== "production") {
    const n = parseInt(w.version.split(".")[0], 10), r = Object.keys(Au);
    process.env.NODE_ENV !== "production" && qr(n < 19 || r.includes("createRoot"), "compatible", "antd v5 support React is 16 ~ 18. see https://u.ant.design/v5-for-19 for compatible.");
  }
  return Mv(e, t), () => zv(t);
};
let Fv = Hv;
function $v() {
  return Fv;
}
function Qd(e, t) {
  var n = Object.assign({}, e);
  return Array.isArray(t) && t.forEach(function(r) {
    delete n[r];
  }), n;
}
const Vv = function(e) {
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
}, Wv = (e) => {
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
}, qv = x1("Wave", (e) => [Wv(e)]), e0 = `${Xo}-wave-target`;
function ms(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
  e !== "transparent";
}
function Uv(e) {
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
const Xv = (e) => {
  const {
    className: t,
    target: n,
    component: r,
    registerUnmount: o
  } = e, i = w.useRef(null), s = w.useRef(null);
  w.useEffect(() => {
    s.current = o();
  }, []);
  const [a, c] = w.useState(null), [l, u] = w.useState([]), [d, f] = w.useState(0), [v, g] = w.useState(0), [p, x] = w.useState(0), [C, S] = w.useState(0), [h, E] = w.useState(!1), b = {
    left: d,
    top: v,
    width: p,
    height: C,
    borderRadius: l.map((j) => `${j}px`).join(" ")
  };
  a && (b["--wave-color"] = a);
  function O() {
    const j = getComputedStyle(n);
    c(Uv(n));
    const z = j.position === "static", {
      borderLeftWidth: U,
      borderTopWidth: ne
    } = j;
    f(z ? n.offsetLeft : vs(-parseFloat(U))), g(z ? n.offsetTop : vs(-parseFloat(ne))), x(n.offsetWidth), S(n.offsetHeight);
    const {
      borderTopLeftRadius: J,
      borderTopRightRadius: B,
      borderBottomLeftRadius: Y,
      borderBottomRightRadius: K
    } = j;
    u([J, B, K, Y].map((k) => vs(parseFloat(k))));
  }
  if (w.useEffect(() => {
    if (n) {
      const j = un(() => {
        O(), E(!0);
      });
      let z;
      return typeof ResizeObserver < "u" && (z = new ResizeObserver(O), z.observe(n)), () => {
        un.cancel(j), z == null || z.disconnect();
      };
    }
  }, []), !h)
    return null;
  const _ = (r === "Checkbox" || r === "Radio") && (n == null ? void 0 : n.classList.contains(e0));
  return /* @__PURE__ */ w.createElement(Ri, {
    visible: !0,
    motionAppear: !0,
    motionName: "wave-motion",
    motionDeadline: 5e3,
    onAppearEnd: (j, z) => {
      var U, ne;
      if (z.deadline || z.propertyName === "opacity") {
        const J = (U = i.current) === null || U === void 0 ? void 0 : U.parentElement;
        (ne = s.current) === null || ne === void 0 || ne.call(s).then(() => {
          J == null || J.remove();
        });
      }
      return !1;
    }
  }, (j, z) => {
    let {
      className: U
    } = j;
    return /* @__PURE__ */ w.createElement("div", {
      ref: Ci(i, z),
      className: Ce(t, U, {
        "wave-quick": _
      }),
      style: b
    });
  });
}, Yv = (e, t) => {
  var n;
  const {
    component: r
  } = t;
  if (r === "Checkbox" && !(!((n = e.querySelector("input")) === null || n === void 0) && n.checked))
    return;
  const o = document.createElement("div");
  o.style.position = "absolute", o.style.left = "0px", o.style.top = "0px", e == null || e.insertBefore(o, e == null ? void 0 : e.firstChild);
  const i = $v();
  let s = null;
  function a() {
    return s;
  }
  s = i(/* @__PURE__ */ w.createElement(Xv, Object.assign({}, t, {
    target: e,
    registerUnmount: a
  })), o);
}, Gv = (e, t, n) => {
  const {
    wave: r
  } = w.useContext(Nt), [, o, i] = Ur(), s = fn((l) => {
    const u = e.current;
    if (r != null && r.disabled || !u)
      return;
    const d = u.querySelector(`.${e0}`) || u, {
      showEffect: f
    } = r || {};
    (f || Yv)(d, {
      className: t,
      token: o,
      component: n,
      event: l,
      hashId: i
    });
  }), a = w.useRef(null);
  return (l) => {
    un.cancel(a.current), a.current = un(() => {
      s(l);
    });
  };
}, t0 = (e) => {
  const {
    children: t,
    disabled: n,
    component: r
  } = e, {
    getPrefixCls: o
  } = Et(Nt), i = Ee(null), s = o("wave"), [, a] = qv(s), c = Gv(i, Ce(s, a), r);
  if (W.useEffect(() => {
    const u = i.current;
    if (!u || u.nodeType !== 1 || n)
      return;
    const d = (f) => {
      !Vv(f.target) || // No need wave
      !u.getAttribute || u.getAttribute("disabled") || u.disabled || u.className.includes("disabled") || u.className.includes("-leave") || c(f);
    };
    return u.addEventListener("click", d, !0), () => {
      u.removeEventListener("click", d, !0);
    };
  }, [n]), !/* @__PURE__ */ W.isValidElement(t))
    return t ?? null;
  const l = Rf(t) ? Ci(If(t), i) : i;
  return pc(t, {
    ref: l
  });
};
process.env.NODE_ENV !== "production" && (t0.displayName = "Wave");
const Kv = (e) => {
  const t = W.useContext(er);
  return W.useMemo(() => e ? typeof e == "string" ? e ?? t : typeof e == "function" ? e(t) : t : t, [e, t]);
}, Zv = /* @__PURE__ */ w.createContext(null), Jv = (e, t) => {
  const n = w.useContext(Zv), r = w.useMemo(() => {
    if (!n)
      return "";
    const {
      compactDirection: o,
      isFirstItem: i,
      isLastItem: s
    } = n, a = o === "vertical" ? "-vertical-" : "-";
    return Ce(`${e}-compact${a}item`, {
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
var Qv = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const n0 = /* @__PURE__ */ w.createContext(void 0), eb = (e) => {
  const {
    getPrefixCls: t,
    direction: n
  } = w.useContext(Nt), {
    prefixCls: r,
    size: o,
    className: i
  } = e, s = Qv(e, ["prefixCls", "size", "className"]), a = t("btn-group", r), [, , c] = Ur(), l = w.useMemo(() => {
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
    const d = hn("Button.Group");
    d.deprecated(!1, "Button.Group", "Space.Compact"), process.env.NODE_ENV !== "production" && d(!o || ["large", "small", "middle"].includes(o), "usage", "Invalid prop `size`.");
  }
  const u = Ce(a, {
    [`${a}-${l}`]: l,
    [`${a}-rtl`]: n === "rtl"
  }, i, c);
  return /* @__PURE__ */ w.createElement(n0.Provider, {
    value: o
  }, /* @__PURE__ */ w.createElement("div", Object.assign({}, s, {
    className: u
  })));
}, Gl = /^[\u4E00-\u9FA5]{2}$/, Ta = Gl.test.bind(Gl);
function Kl(e) {
  return typeof e == "string";
}
function mo(e) {
  return e === "text" || e === "link";
}
function tb(e, t) {
  if (e == null)
    return;
  const n = t ? " " : "";
  return typeof e != "string" && typeof e != "number" && Kl(e.type) && Ta(e.props.children) ? pc(e, {
    children: e.props.children.split("").join(n)
  }) : Kl(e) ? Ta(e) ? /* @__PURE__ */ W.createElement("span", null, e.split("").join(n)) : /* @__PURE__ */ W.createElement("span", null, e) : bv(e) ? /* @__PURE__ */ W.createElement("span", null, e) : e;
}
function nb(e, t) {
  let n = !1;
  const r = [];
  return W.Children.forEach(e, (o) => {
    const i = typeof o, s = i === "string" || i === "number";
    if (n && s) {
      const a = r.length - 1, c = r[a];
      r[a] = `${c}${o}`;
    } else
      r.push(o);
    n = s;
  }), W.Children.map(r, (o) => tb(o, t));
}
["default", "primary", "danger"].concat(Ft(dc));
const Aa = /* @__PURE__ */ rr((e, t) => {
  const {
    className: n,
    style: r,
    children: o,
    prefixCls: i
  } = e, s = Ce(`${i}-icon`, n);
  return /* @__PURE__ */ W.createElement("span", {
    ref: t,
    className: s,
    style: r
  }, o);
}), Zl = /* @__PURE__ */ rr((e, t) => {
  const {
    prefixCls: n,
    className: r,
    style: o,
    iconClassName: i
  } = e, s = Ce(`${n}-loading-icon`, r);
  return /* @__PURE__ */ W.createElement(Aa, {
    prefixCls: n,
    className: s,
    style: o,
    ref: t
  }, /* @__PURE__ */ W.createElement(Zd, {
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
}), rb = (e) => {
  const {
    prefixCls: t,
    loading: n,
    existIcon: r,
    className: o,
    style: i,
    mount: s
  } = e, a = !!n;
  return r ? /* @__PURE__ */ W.createElement(Zl, {
    prefixCls: t,
    className: o,
    style: i
  }) : /* @__PURE__ */ W.createElement(Ri, {
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
    return /* @__PURE__ */ W.createElement(Zl, {
      prefixCls: t,
      className: Ce(o, u),
      style: f,
      ref: l
    });
  });
}, Jl = (e, t) => ({
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
}), ob = (e) => {
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
      Jl(`${t}-primary`, o),
      Jl(`${t}-danger`, i)
    ]
  };
}, it = Math.round;
function Ss(e, t) {
  const n = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], r = n.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    r[o] = t(r[o] || 0, n[o] || "", o);
  return n[3] ? r[3] = n[3].includes("%") ? r[3] / 100 : r[3] : r[3] = 1, r;
}
const Ql = (e, t, n) => n === 0 ? e : e / 100;
function Cr(e, t) {
  const n = t || 255;
  return e > n ? n : e < 0 ? 0 : e;
}
class Ii {
  constructor(t) {
    q(this, "isValid", !0), q(this, "r", 0), q(this, "g", 0), q(this, "b", 0), q(this, "a", 1), q(this, "_h", void 0), q(this, "_s", void 0), q(this, "_l", void 0), q(this, "_v", void 0), q(this, "_max", void 0), q(this, "_min", void 0), q(this, "_brightness", void 0);
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
    const n = Ss(t, Ql);
    this.fromHsv({
      h: n[0],
      s: n[1],
      v: n[2],
      a: n[3]
    });
  }
  fromHslString(t) {
    const n = Ss(t, Ql);
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
var ib = ["b"], sb = ["v"], Cs = function(t) {
  return Math.round(Number(t || 0));
}, ab = function(t) {
  if (t instanceof Ii)
    return t;
  if (t && we(t) === "object" && "h" in t && "b" in t) {
    var n = t, r = n.b, o = Nn(n, ib);
    return G(G({}, o), {}, {
      v: r
    });
  }
  return typeof t == "string" && /hsb/.test(t) ? t.replace(/hsb/, "hsv") : t;
}, Jt = /* @__PURE__ */ function(e) {
  cr(n, e);
  var t = Vr(n);
  function n(r) {
    return bt(this, n), t.call(this, ab(r));
  }
  return yt(n, [{
    key: "toHsbString",
    value: function() {
      var o = this.toHsb(), i = Cs(o.s * 100), s = Cs(o.b * 100), a = Cs(o.h), c = o.a, l = "hsb(".concat(a, ", ").concat(i, "%, ").concat(s, "%)"), u = "hsba(".concat(a, ", ").concat(i, "%, ").concat(s, "%, ").concat(c.toFixed(c === 0 ? 0 : 2), ")");
      return c === 1 ? l : u;
    }
  }, {
    key: "toHsb",
    value: function() {
      var o = this.toHsv(), i = o.v, s = Nn(o, sb);
      return G(G({}, s), {}, {
        b: i,
        a: this.a
      });
    }
  }]), n;
}(Ii), cb = "rc-color-picker", Vn = function(t) {
  return t instanceof Jt ? t : new Jt(t);
}, lb = Vn("#1677ff"), r0 = function(t) {
  var n = t.offset, r = t.targetRef, o = t.containerRef, i = t.color, s = t.type, a = o.current.getBoundingClientRect(), c = a.width, l = a.height, u = r.current.getBoundingClientRect(), d = u.width, f = u.height, v = d / 2, g = f / 2, p = (n.x + v) / c, x = 1 - (n.y + g) / l, C = i.toHsb(), S = p, h = (n.x + v) / c * 360;
  if (s)
    switch (s) {
      case "hue":
        return Vn(G(G({}, C), {}, {
          h: h <= 0 ? 0 : h
        }));
      case "alpha":
        return Vn(G(G({}, C), {}, {
          a: S <= 0 ? 0 : S
        }));
    }
  return Vn({
    h: C.h,
    s: p <= 0 ? 0 : p,
    b: x >= 1 ? 1 : x,
    a: C.a
  });
}, o0 = function(t, n) {
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
}, ub = function(t) {
  var n = t.color, r = t.prefixCls, o = t.className, i = t.style, s = t.onClick, a = "".concat(r, "-color-block");
  return /* @__PURE__ */ W.createElement("div", {
    className: Ce(a, o),
    style: i,
    onClick: s
  }, /* @__PURE__ */ W.createElement("div", {
    className: "".concat(a, "-inner"),
    style: {
      background: n
    }
  }));
};
function fb(e) {
  var t = "touches" in e ? e.touches[0] : e, n = document.documentElement.scrollLeft || document.body.scrollLeft || window.pageXOffset, r = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
  return {
    pageX: t.pageX - n,
    pageY: t.pageY - r
  };
}
function i0(e) {
  var t = e.targetRef, n = e.containerRef, r = e.direction, o = e.onDragChange, i = e.onDragChangeComplete, s = e.calculate, a = e.color, c = e.disabledDrag, l = ft({
    x: 0,
    y: 0
  }), u = ae(l, 2), d = u[0], f = u[1], v = Ee(null), g = Ee(null);
  Ye(function() {
    f(s());
  }, [a]), Ye(function() {
    return function() {
      document.removeEventListener("mousemove", v.current), document.removeEventListener("mouseup", g.current), document.removeEventListener("touchmove", v.current), document.removeEventListener("touchend", g.current), v.current = null, g.current = null;
    };
  }, []);
  var p = function(E) {
    var b = fb(E), O = b.pageX, _ = b.pageY, j = n.current.getBoundingClientRect(), z = j.x, U = j.y, ne = j.width, J = j.height, B = t.current.getBoundingClientRect(), Y = B.width, K = B.height, k = Y / 2, R = K / 2, P = Math.max(0, Math.min(O - z, ne)) - k, L = Math.max(0, Math.min(_ - U, J)) - R, H = {
      x: P,
      y: r === "x" ? d.y : L
    };
    if (Y === 0 && K === 0 || Y !== K)
      return !1;
    o == null || o(H);
  }, x = function(E) {
    E.preventDefault(), p(E);
  }, C = function(E) {
    E.preventDefault(), document.removeEventListener("mousemove", v.current), document.removeEventListener("mouseup", g.current), document.removeEventListener("touchmove", v.current), document.removeEventListener("touchend", g.current), v.current = null, g.current = null, i == null || i();
  }, S = function(E) {
    document.removeEventListener("mousemove", v.current), document.removeEventListener("mouseup", g.current), !c && (p(E), document.addEventListener("mousemove", x), document.addEventListener("mouseup", C), document.addEventListener("touchmove", x), document.addEventListener("touchend", C), v.current = x, g.current = C);
  };
  return [d, S];
}
var s0 = function(t) {
  var n = t.size, r = n === void 0 ? "default" : n, o = t.color, i = t.prefixCls;
  return /* @__PURE__ */ W.createElement("div", {
    className: Ce("".concat(i, "-handler"), q({}, "".concat(i, "-handler-sm"), r === "small")),
    style: {
      backgroundColor: o
    }
  });
}, a0 = function(t) {
  var n = t.children, r = t.style, o = t.prefixCls;
  return /* @__PURE__ */ W.createElement("div", {
    className: "".concat(o, "-palette"),
    style: G({
      position: "relative"
    }, r)
  }, n);
}, c0 = /* @__PURE__ */ rr(function(e, t) {
  var n = e.children, r = e.x, o = e.y;
  return /* @__PURE__ */ W.createElement("div", {
    ref: t,
    style: {
      position: "absolute",
      left: "".concat(r, "%"),
      top: "".concat(o, "%"),
      zIndex: 1,
      transform: "translate(-50%, -50%)"
    }
  }, n);
}), db = function(t) {
  var n = t.color, r = t.onChange, o = t.prefixCls, i = t.onChangeComplete, s = t.disabled, a = Ee(), c = Ee(), l = Ee(n), u = fn(function(p) {
    var x = r0({
      offset: p,
      targetRef: c,
      containerRef: a,
      color: n
    });
    l.current = x, r(x);
  }), d = i0({
    color: n,
    containerRef: a,
    targetRef: c,
    calculate: function() {
      return o0(n);
    },
    onDragChange: u,
    onDragChangeComplete: function() {
      return i == null ? void 0 : i(l.current);
    },
    disabledDrag: s
  }), f = ae(d, 2), v = f[0], g = f[1];
  return /* @__PURE__ */ W.createElement("div", {
    ref: a,
    className: "".concat(o, "-select"),
    onMouseDown: g,
    onTouchStart: g
  }, /* @__PURE__ */ W.createElement(a0, {
    prefixCls: o
  }, /* @__PURE__ */ W.createElement(c0, {
    x: v.x,
    y: v.y,
    ref: c
  }, /* @__PURE__ */ W.createElement(s0, {
    color: n.toRgbString(),
    prefixCls: o
  })), /* @__PURE__ */ W.createElement("div", {
    className: "".concat(o, "-saturation"),
    style: {
      backgroundColor: "hsl(".concat(n.toHsb().h, ",100%, 50%)"),
      backgroundImage: "linear-gradient(0deg, #000, transparent),linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0))"
    }
  })));
}, hb = function(t, n) {
  var r = Jm(t, {
    value: n
  }), o = ae(r, 2), i = o[0], s = o[1], a = kr(function() {
    return Vn(i);
  }, [i]);
  return [a, s];
}, pb = function(t) {
  var n = t.colors, r = t.children, o = t.direction, i = o === void 0 ? "to right" : o, s = t.type, a = t.prefixCls, c = kr(function() {
    return n.map(function(l, u) {
      var d = Vn(l);
      return s === "alpha" && u === n.length - 1 && (d = new Jt(d.setA(1))), d.toRgbString();
    }).join(",");
  }, [n, s]);
  return /* @__PURE__ */ W.createElement("div", {
    className: "".concat(a, "-gradient"),
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(".concat(i, ", ").concat(c, ")")
    }
  }, r);
}, xb = function(t) {
  var n = t.prefixCls, r = t.colors, o = t.disabled, i = t.onChange, s = t.onChangeComplete, a = t.color, c = t.type, l = Ee(), u = Ee(), d = Ee(a), f = function(b) {
    return c === "hue" ? b.getHue() : b.a * 100;
  }, v = fn(function(E) {
    var b = r0({
      offset: E,
      targetRef: u,
      containerRef: l,
      color: a,
      type: c
    });
    d.current = b, i(f(b));
  }), g = i0({
    color: a,
    targetRef: u,
    containerRef: l,
    calculate: function() {
      return o0(a, c);
    },
    onDragChange: v,
    onDragChangeComplete: function() {
      s(f(d.current));
    },
    direction: "x",
    disabledDrag: o
  }), p = ae(g, 2), x = p[0], C = p[1], S = W.useMemo(function() {
    if (c === "hue") {
      var E = a.toHsb();
      E.s = 1, E.b = 1, E.a = 1;
      var b = new Jt(E);
      return b;
    }
    return a;
  }, [a, c]), h = W.useMemo(function() {
    return r.map(function(E) {
      return "".concat(E.color, " ").concat(E.percent, "%");
    });
  }, [r]);
  return /* @__PURE__ */ W.createElement("div", {
    ref: l,
    className: Ce("".concat(n, "-slider"), "".concat(n, "-slider-").concat(c)),
    onMouseDown: C,
    onTouchStart: C
  }, /* @__PURE__ */ W.createElement(a0, {
    prefixCls: n
  }, /* @__PURE__ */ W.createElement(c0, {
    x: x.x,
    y: x.y,
    ref: u
  }, /* @__PURE__ */ W.createElement(s0, {
    size: "small",
    color: S.toHexString(),
    prefixCls: n
  })), /* @__PURE__ */ W.createElement(pb, {
    colors: h,
    type: c,
    prefixCls: n
  })));
};
function gb(e) {
  return w.useMemo(function() {
    var t = e || {}, n = t.slider;
    return [n || xb];
  }, [e]);
}
var mb = [{
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
}], vb = /* @__PURE__ */ rr(function(e, t) {
  var n = e.value, r = e.defaultValue, o = e.prefixCls, i = o === void 0 ? cb : o, s = e.onChange, a = e.onChangeComplete, c = e.className, l = e.style, u = e.panelRender, d = e.disabledAlpha, f = d === void 0 ? !1 : d, v = e.disabled, g = v === void 0 ? !1 : v, p = e.components, x = gb(p), C = ae(x, 1), S = C[0], h = hb(r || lb, n), E = ae(h, 2), b = E[0], O = E[1], _ = kr(function() {
    return b.setA(1).toRgbString();
  }, [b]), j = function(L, H) {
    n || O(L), s == null || s(L, H);
  }, z = function(L) {
    return new Jt(b.setHue(L));
  }, U = function(L) {
    return new Jt(b.setA(L / 100));
  }, ne = function(L) {
    j(z(L), {
      type: "hue",
      value: L
    });
  }, J = function(L) {
    j(U(L), {
      type: "alpha",
      value: L
    });
  }, B = function(L) {
    a && a(z(L));
  }, Y = function(L) {
    a && a(U(L));
  }, K = Ce("".concat(i, "-panel"), c, q({}, "".concat(i, "-panel-disabled"), g)), k = {
    prefixCls: i,
    disabled: g,
    color: b
  }, R = /* @__PURE__ */ W.createElement(W.Fragment, null, /* @__PURE__ */ W.createElement(db, xt({
    onChange: j
  }, k, {
    onChangeComplete: a
  })), /* @__PURE__ */ W.createElement("div", {
    className: "".concat(i, "-slider-container")
  }, /* @__PURE__ */ W.createElement("div", {
    className: Ce("".concat(i, "-slider-group"), q({}, "".concat(i, "-slider-group-disabled-alpha"), f))
  }, /* @__PURE__ */ W.createElement(S, xt({}, k, {
    type: "hue",
    colors: mb,
    min: 0,
    max: 359,
    value: b.getHue(),
    onChange: ne,
    onChangeComplete: B
  })), !f && /* @__PURE__ */ W.createElement(S, xt({}, k, {
    type: "alpha",
    colors: [{
      percent: 0,
      color: "rgba(255, 0, 4, 0)"
    }, {
      percent: 100,
      color: _
    }],
    min: 0,
    max: 100,
    value: b.a * 100,
    onChange: J,
    onChangeComplete: Y
  }))), /* @__PURE__ */ W.createElement(ub, {
    color: b.toRgbString(),
    prefixCls: i
  })));
  return /* @__PURE__ */ W.createElement("div", {
    className: K,
    style: l,
    ref: t
  }, typeof u == "function" ? u(R) : R);
});
process.env.NODE_ENV !== "production" && (vb.displayName = "ColorPicker");
const bb = (e, t) => (e == null ? void 0 : e.replace(/[^\w/]/g, "").slice(0, t ? 8 : 6)) || "", yb = (e, t) => e ? bb(e, t) : "";
let Sb = /* @__PURE__ */ function() {
  function e(t) {
    bt(this, e);
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
    }), this.metaColor = new Jt(this.colors[0].color.metaColor)) : this.metaColor = new Jt(r ? "" : t), (!t || r && !this.colors) && (this.metaColor = this.metaColor.setA(0), this.cleared = !0);
  }
  return yt(e, [{
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
      return yb(this.toHexString(), this.metaColor.a < 1);
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
const Cb = (e, t) => {
  const {
    r: n,
    g: r,
    b: o,
    a: i
  } = e.toRgb(), s = new Jt(e.toRgbString()).onBackground(t).toHsv();
  return i <= 0.5 ? s.v > 0.5 : n * 0.299 + r * 0.587 + o * 0.114 > 192;
}, l0 = (e) => {
  const {
    paddingInline: t,
    onlyIconSize: n
  } = e;
  return pn(e, {
    buttonPaddingHorizontal: t,
    buttonPaddingVertical: 0,
    buttonIconOnlyFontSize: n
  });
}, u0 = (e) => {
  var t, n, r, o, i, s;
  const a = (t = e.contentFontSize) !== null && t !== void 0 ? t : e.fontSize, c = (n = e.contentFontSizeSM) !== null && n !== void 0 ? n : e.fontSize, l = (r = e.contentFontSizeLG) !== null && r !== void 0 ? r : e.fontSizeLG, u = (o = e.contentLineHeight) !== null && o !== void 0 ? o : jo(a), d = (i = e.contentLineHeightSM) !== null && i !== void 0 ? i : jo(c), f = (s = e.contentLineHeightLG) !== null && s !== void 0 ? s : jo(l), v = Cb(new Sb(e.colorBgSolid), "#fff") ? "#000" : "#fff", g = dc.reduce((p, x) => Object.assign(Object.assign({}, p), {
    [`${x}ShadowColor`]: `0 ${Zt(e.controlOutlineWidth)} 0 ${Tr(e[`${x}1`], e.colorBgContainer)}`
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
}, wb = (e) => {
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
      border: `${Zt(e.lineWidth)} ${e.lineType} transparent`,
      cursor: "pointer",
      transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
      userSelect: "none",
      touchAction: "manipulation",
      color: e.colorText,
      "&:disabled > *": {
        pointerEvents: "none"
      },
      // https://github.com/ant-design/ant-design/issues/51380
      [`${t}-icon > svg`]: Od(),
      "> a": {
        color: "currentColor"
      },
      "&:not(:disabled)": p1(e),
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
}, f0 = (e, t, n) => ({
  [`&:not(:disabled):not(${e}-disabled)`]: {
    "&:hover": t,
    "&:active": n
  }
}), Eb = (e) => ({
  minWidth: e.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
}), _b = (e) => ({
  borderRadius: e.controlHeight,
  paddingInlineStart: e.calc(e.controlHeight).div(2).equal(),
  paddingInlineEnd: e.calc(e.controlHeight).div(2).equal()
}), Ob = (e) => ({
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
  }, f0(e, Object.assign({
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
}), Tb = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, Ob(e))
}), Ab = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: {
    cursor: "not-allowed",
    color: e.colorTextDisabled
  }
}), ki = (e, t, n, r) => {
  const i = r && ["link", "text"].includes(r) ? Ab : Tb;
  return Object.assign(Object.assign({}, i(e)), f0(e.componentCls, t, n));
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
}), Rb = (e) => {
  const {
    componentCls: t
  } = e;
  return dc.reduce((n, r) => {
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
}, Pb = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
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
})), Ib = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
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
})), Nb = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
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
})), kb = (e) => Object.assign(Object.assign({}, $t(e, e.colorLink, "link", {
  color: e.colorLinkHover
}, {
  color: e.colorLinkActive
})), Ni(e.componentCls, e.ghostBg, e.colorInfo, e.colorInfo, e.colorTextDisabled, e.colorBorder, {
  color: e.colorInfoHover,
  borderColor: e.colorInfoHover
}, {
  color: e.colorInfoActive,
  borderColor: e.colorInfoActive
})), jb = (e) => {
  const {
    componentCls: t
  } = e;
  return Object.assign({
    [`${t}-color-default`]: Pb(e),
    [`${t}-color-primary`]: Ib(e),
    [`${t}-color-dangerous`]: Nb(e),
    [`${t}-color-link`]: kb(e)
  }, Rb(e));
}, Lb = (e) => Object.assign(Object.assign(Object.assign(Object.assign({}, Li(e, e.defaultBorderColor, e.defaultBg, {
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
})), gc = function(e) {
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
        padding: `${Zt(c)} ${Zt(s)}`,
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
      [`${n}${n}-circle${t}`]: Eb(e)
    },
    {
      [`${n}${n}-round${t}`]: _b(e)
    }
  ];
}, Mb = (e) => {
  const t = pn(e, {
    fontSize: e.contentFontSize
  });
  return gc(t, e.componentCls);
}, Db = (e) => {
  const t = pn(e, {
    controlHeight: e.controlHeightSM,
    fontSize: e.contentFontSizeSM,
    padding: e.paddingXS,
    buttonPaddingHorizontal: e.paddingInlineSM,
    buttonPaddingVertical: 0,
    borderRadius: e.borderRadiusSM,
    buttonIconOnlyFontSize: e.onlyIconSizeSM
  });
  return gc(t, `${e.componentCls}-sm`);
}, Bb = (e) => {
  const t = pn(e, {
    controlHeight: e.controlHeightLG,
    fontSize: e.contentFontSizeLG,
    buttonPaddingHorizontal: e.paddingInlineLG,
    buttonPaddingVertical: 0,
    borderRadius: e.borderRadiusLG,
    buttonIconOnlyFontSize: e.onlyIconSizeLG
  });
  return gc(t, `${e.componentCls}-lg`);
}, zb = (e) => {
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
}, Hb = Ai("Button", (e) => {
  const t = l0(e);
  return [
    // Shared
    wb(t),
    // Size
    Mb(t),
    Db(t),
    Bb(t),
    // Block
    zb(t),
    // Color
    jb(t),
    // https://github.com/ant-design/ant-design/issues/50969
    Lb(t),
    // Button Group
    ob(t)
  ];
}, u0, {
  unitless: {
    fontWeight: !0,
    contentLineHeight: !0,
    contentLineHeightSM: !0,
    contentLineHeightLG: !0
  }
});
function Fb(e, t, n) {
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
function $b(e, t, n) {
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
function Vb(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: !0
  };
  const {
    componentCls: n
  } = e, r = `${n}-compact`;
  return {
    [r]: Object.assign(Object.assign({}, Fb(e, r, t)), $b(n, r, t))
  };
}
function Wb(e, t) {
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
function qb(e, t) {
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
function Ub(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: Object.assign(Object.assign({}, Wb(e, t)), qb(e.componentCls, t))
  };
}
const Xb = (e) => {
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
}, Yb = g1(["Button", "compact"], (e) => {
  const t = l0(e);
  return [
    // Space Compact
    Vb(t),
    Ub(t),
    Xb(t)
  ];
}, u0);
var Gb = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function Kb(e) {
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
const Zb = {
  default: ["default", "outlined"],
  primary: ["primary", "solid"],
  dashed: ["default", "dashed"],
  // `link` is not a real color but we should compatible with it
  link: ["link", "link"],
  text: ["default", "text"]
}, Jb = /* @__PURE__ */ W.forwardRef((e, t) => {
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
    rootClassName: p,
    children: x,
    icon: C,
    iconPosition: S = "start",
    ghost: h = !1,
    block: E = !1,
    // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    htmlType: b = "button",
    classNames: O,
    style: _ = {},
    autoInsertSpace: j,
    autoFocus: z
  } = e, U = Gb(e, ["loading", "prefixCls", "color", "variant", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "iconPosition", "ghost", "block", "htmlType", "classNames", "style", "autoInsertSpace", "autoFocus"]), ne = c || "default", [J, B] = kr(() => {
    if (s && a)
      return [s, a];
    const ye = Zb[ne] || [];
    return l ? ["danger", ye[1]] : ye;
  }, [c, s, a, l]), K = J === "danger" ? "dangerous" : J, {
    getPrefixCls: k,
    direction: R,
    autoInsertSpace: P,
    className: L,
    style: H,
    classNames: F,
    styles: X
  } = fc("button"), te = (n = j ?? P) !== null && n !== void 0 ? n : !0, Z = k("btn", i), [ce, le, ue] = Hb(Z), _e = Et(Yo), me = v ?? _e, Me = Et(n0), ke = kr(() => Kb(o), [o]), [N, Q] = ft(ke.loading), [T, $] = ft(!1), A = Ee(null), re = sg(t, A), Oe = Q0.count(x) === 1 && !C && !mo(B), fe = Ee(!0);
  W.useEffect(() => (fe.current = !1, () => {
    fe.current = !0;
  }), []), Ye(() => {
    let ye = null;
    ke.delay > 0 ? ye = setTimeout(() => {
      ye = null, Q(!0);
    }, ke.delay) : Q(ke.loading);
    function nt() {
      ye && (clearTimeout(ye), ye = null);
    }
    return nt;
  }, [ke]), Ye(() => {
    if (!A.current || !te)
      return;
    const ye = A.current.textContent || "";
    Oe && Ta(ye) ? T || $(!0) : T && $(!1);
  }), Ye(() => {
    z && A.current && A.current.focus();
  }, []);
  const Je = W.useCallback((ye) => {
    var nt;
    if (N || me) {
      ye.preventDefault();
      return;
    }
    (nt = e.onClick) === null || nt === void 0 || nt.call(e, ("href" in e, ye));
  }, [e.onClick, N, me]);
  if (process.env.NODE_ENV !== "production") {
    const ye = hn("Button");
    process.env.NODE_ENV !== "production" && ye(!(typeof C == "string" && C.length > 2), "breaking", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${C}\` at https://ant.design/components/icon`), process.env.NODE_ENV !== "production" && ye(!(h && mo(B)), "usage", "`link` or `text` button can't be a `ghost` button.");
  }
  const {
    compactSize: ze,
    compactItemClassnames: Ie
  } = Jv(Z, R), Qe = {
    large: "lg",
    small: "sm",
    middle: void 0
  }, dt = Kv((ye) => {
    var nt, Wt;
    return (Wt = (nt = d ?? ze) !== null && nt !== void 0 ? nt : Me) !== null && Wt !== void 0 ? Wt : ye;
  }), lt = dt && (r = Qe[dt]) !== null && r !== void 0 ? r : "", Vt = N ? "loading" : C, D = Qd(U, ["navigate"]), y = Ce(Z, le, ue, {
    [`${Z}-${u}`]: u !== "default" && u,
    // line(253 - 254): Compatible with versions earlier than 5.21.0
    [`${Z}-${ne}`]: ne,
    [`${Z}-dangerous`]: l,
    [`${Z}-color-${K}`]: K,
    [`${Z}-variant-${B}`]: B,
    [`${Z}-${lt}`]: lt,
    [`${Z}-icon-only`]: !x && x !== 0 && !!Vt,
    [`${Z}-background-ghost`]: h && !mo(B),
    [`${Z}-loading`]: N,
    [`${Z}-two-chinese-chars`]: T && te && !N,
    [`${Z}-block`]: E,
    [`${Z}-rtl`]: R === "rtl",
    [`${Z}-icon-end`]: S === "end"
  }, Ie, g, p, L), be = Object.assign(Object.assign({}, H), _), se = Ce(O == null ? void 0 : O.icon, F.icon), Ne = Object.assign(Object.assign({}, (f == null ? void 0 : f.icon) || {}), X.icon || {}), ie = C && !N ? /* @__PURE__ */ W.createElement(Aa, {
    prefixCls: Z,
    className: se,
    style: Ne
  }, C) : o && typeof o == "object" && o.icon ? /* @__PURE__ */ W.createElement(Aa, {
    prefixCls: Z,
    className: se,
    style: Ne
  }, o.icon) : /* @__PURE__ */ W.createElement(rb, {
    existIcon: !!C,
    prefixCls: Z,
    loading: N,
    mount: fe.current
  }), Be = x || x === 0 ? nb(x, Oe && te) : null;
  if (D.href !== void 0)
    return ce(/* @__PURE__ */ W.createElement("a", Object.assign({}, D, {
      className: Ce(y, {
        [`${Z}-disabled`]: me
      }),
      href: me ? void 0 : D.href,
      style: be,
      onClick: Je,
      ref: re,
      tabIndex: me ? -1 : 0
    }), ie, Be));
  let xe = /* @__PURE__ */ W.createElement("button", Object.assign({}, U, {
    type: b,
    className: y,
    style: be,
    onClick: Je,
    disabled: me,
    ref: re
  }), ie, Be, Ie && /* @__PURE__ */ W.createElement(Yb, {
    prefixCls: Z
  }));
  return mo(B) || (xe = /* @__PURE__ */ W.createElement(t0, {
    component: "Button",
    disabled: N
  }, xe)), ce(xe);
}), Bi = Jb;
Bi.Group = eb;
Bi.__ANT_BUTTON = !0;
process.env.NODE_ENV !== "production" && (Bi.displayName = "Button");
function Qb(e, t, n) {
  var r = n || {}, o = r.noTrailing, i = o === void 0 ? !1 : o, s = r.noLeading, a = s === void 0 ? !1 : s, c = r.debounceMode, l = c === void 0 ? void 0 : c, u, d = !1, f = 0;
  function v() {
    u && clearTimeout(u);
  }
  function g(x) {
    var C = x || {}, S = C.upcomingOnly, h = S === void 0 ? !1 : S;
    v(), d = !h;
  }
  function p() {
    for (var x = arguments.length, C = new Array(x), S = 0; S < x; S++)
      C[S] = arguments[S];
    var h = this, E = Date.now() - f;
    if (d)
      return;
    function b() {
      f = Date.now(), t.apply(h, C);
    }
    function O() {
      u = void 0;
    }
    !a && l && !u && b(), v(), l === void 0 && E > e ? a ? (f = Date.now(), i || (u = setTimeout(l ? O : b, e))) : b() : i !== !0 && (u = setTimeout(l ? O : b, l === void 0 ? e - E : e));
  }
  return p.cancel = g, p;
}
function ey(e, t, n) {
  var r = {}, o = r.atBegin, i = o === void 0 ? !1 : o;
  return Qb(e, t, {
    debounceMode: i !== !1
  });
}
function eu(e) {
  return ["small", "middle", "large"].includes(e);
}
const d0 = ["wrap", "nowrap", "wrap-reverse"], h0 = ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around", "space-evenly", "stretch", "normal", "left", "right"], p0 = ["center", "start", "end", "flex-start", "flex-end", "self-start", "self-end", "baseline", "normal", "stretch"], ty = (e, t) => {
  const n = t.wrap === !0 ? "wrap" : t.wrap;
  return {
    [`${e}-wrap-${n}`]: n && d0.includes(n)
  };
}, ny = (e, t) => {
  const n = {};
  return p0.forEach((r) => {
    n[`${e}-align-${r}`] = t.align === r;
  }), n[`${e}-align-stretch`] = !t.align && !!t.vertical, n;
}, ry = (e, t) => {
  const n = {};
  return h0.forEach((r) => {
    n[`${e}-justify-${r}`] = t.justify === r;
  }), n;
};
function oy(e, t) {
  return Ce(Object.assign(Object.assign(Object.assign({}, ty(e, t)), ny(e, t)), ry(e, t)));
}
const iy = (e) => {
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
}, sy = (e) => {
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
}, ay = (e) => {
  const {
    componentCls: t
  } = e, n = {};
  return d0.forEach((r) => {
    n[`${t}-wrap-${r}`] = {
      flexWrap: r
    };
  }), n;
}, cy = (e) => {
  const {
    componentCls: t
  } = e, n = {};
  return p0.forEach((r) => {
    n[`${t}-align-${r}`] = {
      alignItems: r
    };
  }), n;
}, ly = (e) => {
  const {
    componentCls: t
  } = e, n = {};
  return h0.forEach((r) => {
    n[`${t}-justify-${r}`] = {
      justifyContent: r
    };
  }), n;
}, uy = () => ({}), fy = Ai("Flex", (e) => {
  const {
    paddingXS: t,
    padding: n,
    paddingLG: r
  } = e, o = pn(e, {
    flexGapSM: t,
    flexGap: n,
    flexGapLG: r
  });
  return [iy(o), sy(o), ay(o), cy(o), ly(o)];
}, uy, {
  // Flex component don't apply extra font style
  // https://github.com/ant-design/ant-design/issues/46403
  resetStyle: !1
});
var dy = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const x0 = /* @__PURE__ */ W.forwardRef((e, t) => {
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
  } = e, d = dy(e, ["prefixCls", "rootClassName", "className", "style", "flex", "gap", "children", "vertical", "component"]), {
    flex: f,
    direction: v,
    getPrefixCls: g
  } = W.useContext(Nt), p = g("flex", n), [x, C, S] = fy(p), h = l ?? (f == null ? void 0 : f.vertical), E = Ce(o, r, f == null ? void 0 : f.className, p, C, S, oy(p, e), {
    [`${p}-rtl`]: v === "rtl",
    [`${p}-gap-${a}`]: eu(a),
    [`${p}-vertical`]: h
  }), b = Object.assign(Object.assign({}, f == null ? void 0 : f.style), i);
  return s && (b.flex = s), a && !eu(a) && (b.gap = a), x(/* @__PURE__ */ W.createElement(u, Object.assign({
    ref: t,
    className: E,
    style: b
  }, Qd(d, ["justify", "wrap", "align"])), c));
});
process.env.NODE_ENV !== "production" && (x0.displayName = "Flex");
const Ko = 100, g0 = Ko / 5, m0 = Ko / 2 - g0 / 2, ws = m0 * 2 * Math.PI, tu = 50, nu = (e) => {
  const {
    dotClassName: t,
    style: n,
    hasCircleCls: r
  } = e;
  return /* @__PURE__ */ w.createElement("circle", {
    className: Ce(`${t}-circle`, {
      [`${t}-circle-bg`]: r
    }),
    r: m0,
    cx: tu,
    cy: tu,
    strokeWidth: g0,
    style: n
  });
}, hy = (e) => {
  let {
    percent: t,
    prefixCls: n
  } = e;
  const r = `${n}-dot`, o = `${r}-holder`, i = `${o}-hidden`, [s, a] = w.useState(!1);
  oc(() => {
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
    className: Ce(o, `${r}-progress`, c <= 0 && i)
  }, /* @__PURE__ */ w.createElement("svg", {
    viewBox: `0 0 ${Ko} ${Ko}`,
    // biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole: progressbar could be readonly
    role: "progressbar",
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": c
  }, /* @__PURE__ */ w.createElement(nu, {
    dotClassName: r,
    hasCircleCls: !0
  }), /* @__PURE__ */ w.createElement(nu, {
    dotClassName: r,
    style: l
  })));
};
function py(e) {
  const {
    prefixCls: t,
    percent: n = 0
  } = e, r = `${t}-dot`, o = `${r}-holder`, i = `${o}-hidden`;
  return /* @__PURE__ */ w.createElement(w.Fragment, null, /* @__PURE__ */ w.createElement("span", {
    className: Ce(o, n > 0 && i)
  }, /* @__PURE__ */ w.createElement("span", {
    className: Ce(r, `${t}-dot-spin`)
  }, [1, 2, 3, 4].map((s) => /* @__PURE__ */ w.createElement("i", {
    className: `${t}-dot-item`,
    key: s
  })))), /* @__PURE__ */ w.createElement(hy, {
    prefixCls: t,
    percent: n
  }));
}
function xy(e) {
  const {
    prefixCls: t,
    indicator: n,
    percent: r
  } = e, o = `${t}-dot`;
  return n && /* @__PURE__ */ w.isValidElement(n) ? pc(n, {
    className: Ce(n.props.className, o),
    percent: r
  }) : /* @__PURE__ */ w.createElement(py, {
    prefixCls: t,
    percent: r
  });
}
const gy = new sd("antSpinMove", {
  to: {
    opacity: 1
  }
}), my = new sd("antRotate", {
  to: {
    transform: "rotate(405deg)"
  }
}), vy = (e) => {
  const {
    componentCls: t,
    calc: n
  } = e;
  return {
    [t]: Object.assign(Object.assign({}, _d(e)), {
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
          animationName: gy,
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
          animationName: my,
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
}, by = (e) => {
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
}, yy = Ai("Spin", (e) => {
  const t = pn(e, {
    spinDotDefault: e.colorTextDescription
  });
  return [vy(t)];
}, by), Sy = 200, ru = [[30, 0.05], [70, 0.03], [96, 0.01]];
function Cy(e, t) {
  const [n, r] = w.useState(0), o = w.useRef(null), i = t === "auto";
  return w.useEffect(() => (i && e && (r(0), o.current = setInterval(() => {
    r((s) => {
      const a = 100 - s;
      for (let c = 0; c < ru.length; c += 1) {
        const [l, u] = ru[c];
        if (s <= l)
          return s + a * u;
      }
      return s;
    });
  }, Sy)), () => {
    clearInterval(o.current);
  }), [i, e]), i ? n : t;
}
var wy = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
let v0;
function Ey(e, t) {
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
  } = e, p = wy(e, ["prefixCls", "spinning", "delay", "className", "rootClassName", "size", "tip", "wrapperClassName", "style", "children", "fullscreen", "indicator", "percent"]), {
    getPrefixCls: x,
    direction: C,
    className: S,
    style: h,
    indicator: E
  } = fc("spin"), b = x("spin", n), [O, _, j] = yy(b), [z, U] = w.useState(() => r && !Ey(r, o)), ne = Cy(z, g);
  w.useEffect(() => {
    if (r) {
      const P = ey(o, () => {
        U(!0);
      });
      return P(), () => {
        var L;
        (L = P == null ? void 0 : P.cancel) === null || L === void 0 || L.call(P);
      };
    }
    U(!1);
  }, [o, r]);
  const J = w.useMemo(() => typeof d < "u" && !f, [d, f]);
  if (process.env.NODE_ENV !== "production") {
    const P = hn("Spin");
    process.env.NODE_ENV !== "production" && P(!c || J || f, "usage", "`tip` only work in nest or fullscreen pattern.");
  }
  const B = Ce(b, S, {
    [`${b}-sm`]: a === "small",
    [`${b}-lg`]: a === "large",
    [`${b}-spinning`]: z,
    [`${b}-show-text`]: !!c,
    [`${b}-rtl`]: C === "rtl"
  }, i, !f && s, _, j), Y = Ce(`${b}-container`, {
    [`${b}-blur`]: z
  }), K = (t = v ?? E) !== null && t !== void 0 ? t : v0, k = Object.assign(Object.assign({}, h), u), R = /* @__PURE__ */ w.createElement("div", Object.assign({}, p, {
    style: k,
    className: B,
    "aria-live": "polite",
    "aria-busy": z
  }), /* @__PURE__ */ w.createElement(xy, {
    prefixCls: b,
    indicator: K,
    percent: ne
  }), c && (J || f) ? /* @__PURE__ */ w.createElement("div", {
    className: `${b}-text`
  }, c) : null);
  return O(J ? /* @__PURE__ */ w.createElement("div", Object.assign({}, p, {
    className: Ce(`${b}-nested-loading`, l, _, j)
  }), z && /* @__PURE__ */ w.createElement("div", {
    key: "loading"
  }, R), /* @__PURE__ */ w.createElement("div", {
    className: Y,
    key: "container"
  }, d)) : f ? /* @__PURE__ */ w.createElement("div", {
    className: Ce(`${b}-fullscreen`, {
      [`${b}-fullscreen-show`]: z
    }, s, _, j)
  }, R) : R);
};
Nr.setDefaultIndicator = (e) => {
  v0 = e;
};
process.env.NODE_ENV !== "production" && (Nr.displayName = "Spin");
function b0(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: _y } = Object.prototype, { getPrototypeOf: mc } = Object, { iterator: zi, toStringTag: y0 } = Symbol, Hi = /* @__PURE__ */ ((e) => (t) => {
  const n = _y.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), jt = (e) => (e = e.toLowerCase(), (t) => Hi(t) === e), Fi = (e) => (t) => typeof t === e, { isArray: dr } = Array, Hr = Fi("undefined");
function Oy(e) {
  return e !== null && !Hr(e) && e.constructor !== null && !Hr(e.constructor) && gt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const S0 = jt("ArrayBuffer");
function Ty(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && S0(e.buffer), t;
}
const Ay = Fi("string"), gt = Fi("function"), C0 = Fi("number"), $i = (e) => e !== null && typeof e == "object", Ry = (e) => e === !0 || e === !1, Lo = (e) => {
  if (Hi(e) !== "object")
    return !1;
  const t = mc(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(y0 in e) && !(zi in e);
}, Py = jt("Date"), Iy = jt("File"), Ny = jt("Blob"), ky = jt("FileList"), jy = (e) => $i(e) && gt(e.pipe), Ly = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || gt(e.append) && ((t = Hi(e)) === "formdata" || // detect form-data instance
  t === "object" && gt(e.toString) && e.toString() === "[object FormData]"));
}, My = jt("URLSearchParams"), [Dy, By, zy, Hy] = ["ReadableStream", "Request", "Response", "Headers"].map(jt), Fy = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
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
function w0(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const wn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, E0 = (e) => !Hr(e) && e !== wn;
function Ra() {
  const { caseless: e } = E0(this) && this || {}, t = {}, n = (r, o) => {
    const i = e && w0(t, o) || o;
    Lo(t[i]) && Lo(r) ? t[i] = Ra(t[i], r) : Lo(r) ? t[i] = Ra({}, r) : dr(r) ? t[i] = r.slice() : t[i] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Yr(arguments[r], n);
  return t;
}
const $y = (e, t, n, { allOwnKeys: r } = {}) => (Yr(t, (o, i) => {
  n && gt(o) ? e[i] = b0(o, n) : e[i] = o;
}, { allOwnKeys: r }), e), Vy = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Wy = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, qy = (e, t, n, r) => {
  let o, i, s;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      s = o[i], (!r || r(s, e, t)) && !a[s] && (t[s] = e[s], a[s] = !0);
    e = n !== !1 && mc(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Uy = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Xy = (e) => {
  if (!e) return null;
  if (dr(e)) return e;
  let t = e.length;
  if (!C0(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Yy = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && mc(Uint8Array)), Gy = (e, t) => {
  const r = (e && e[zi]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const i = o.value;
    t.call(e, i[0], i[1]);
  }
}, Ky = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Zy = jt("HTMLFormElement"), Jy = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), ou = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Qy = jt("RegExp"), _0 = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Yr(n, (o, i) => {
    let s;
    (s = t(o, i, e)) !== !1 && (r[i] = s || o);
  }), Object.defineProperties(e, r);
}, e2 = (e) => {
  _0(e, (t, n) => {
    if (gt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (gt(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, t2 = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((i) => {
      n[i] = !0;
    });
  };
  return dr(e) ? r(e) : r(String(e).split(t)), n;
}, n2 = () => {
}, r2 = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function o2(e) {
  return !!(e && gt(e.append) && e[y0] === "FormData" && e[zi]);
}
const i2 = (e) => {
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
}, s2 = jt("AsyncFunction"), a2 = (e) => e && ($i(e) || gt(e)) && gt(e.then) && gt(e.catch), O0 = ((e, t) => e ? setImmediate : t ? ((n, r) => (wn.addEventListener("message", ({ source: o, data: i }) => {
  o === wn && i === n && r.length && r.shift()();
}, !1), (o) => {
  r.push(o), wn.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  gt(wn.postMessage)
), c2 = typeof queueMicrotask < "u" ? queueMicrotask.bind(wn) : typeof process < "u" && process.nextTick || O0, l2 = (e) => e != null && gt(e[zi]), I = {
  isArray: dr,
  isArrayBuffer: S0,
  isBuffer: Oy,
  isFormData: Ly,
  isArrayBufferView: Ty,
  isString: Ay,
  isNumber: C0,
  isBoolean: Ry,
  isObject: $i,
  isPlainObject: Lo,
  isReadableStream: Dy,
  isRequest: By,
  isResponse: zy,
  isHeaders: Hy,
  isUndefined: Hr,
  isDate: Py,
  isFile: Iy,
  isBlob: Ny,
  isRegExp: Qy,
  isFunction: gt,
  isStream: jy,
  isURLSearchParams: My,
  isTypedArray: Yy,
  isFileList: ky,
  forEach: Yr,
  merge: Ra,
  extend: $y,
  trim: Fy,
  stripBOM: Vy,
  inherits: Wy,
  toFlatObject: qy,
  kindOf: Hi,
  kindOfTest: jt,
  endsWith: Uy,
  toArray: Xy,
  forEachEntry: Gy,
  matchAll: Ky,
  isHTMLForm: Zy,
  hasOwnProperty: ou,
  hasOwnProp: ou,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: _0,
  freezeMethods: e2,
  toObjectSet: t2,
  toCamelCase: Jy,
  noop: n2,
  toFiniteNumber: r2,
  findKey: w0,
  global: wn,
  isContextDefined: E0,
  isSpecCompliantForm: o2,
  toJSONObject: i2,
  isAsyncFn: s2,
  isThenable: a2,
  setImmediate: O0,
  asap: c2,
  isIterable: l2
};
function de(e, t, n, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o, this.status = o.status ? o.status : null);
}
I.inherits(de, Error, {
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
const T0 = de.prototype, A0 = {};
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
  A0[e] = { value: e };
});
Object.defineProperties(de, A0);
Object.defineProperty(T0, "isAxiosError", { value: !0 });
de.from = (e, t, n, r, o, i) => {
  const s = Object.create(T0);
  return I.toFlatObject(e, s, function(c) {
    return c !== Error.prototype;
  }, (a) => a !== "isAxiosError"), de.call(s, e.message, t, n, r, o), s.cause = e, s.name = e.name, i && Object.assign(s, i), s;
};
const u2 = null;
function Pa(e) {
  return I.isPlainObject(e) || I.isArray(e);
}
function R0(e) {
  return I.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function iu(e, t, n) {
  return e ? e.concat(t).map(function(o, i) {
    return o = R0(o), !n && i ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function f2(e) {
  return I.isArray(e) && !e.some(Pa);
}
const d2 = I.toFlatObject(I, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Vi(e, t, n) {
  if (!I.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = I.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(p, x) {
    return !I.isUndefined(x[p]);
  });
  const r = n.metaTokens, o = n.visitor || u, i = n.dots, s = n.indexes, c = (n.Blob || typeof Blob < "u" && Blob) && I.isSpecCompliantForm(t);
  if (!I.isFunction(o))
    throw new TypeError("visitor must be a function");
  function l(g) {
    if (g === null) return "";
    if (I.isDate(g))
      return g.toISOString();
    if (!c && I.isBlob(g))
      throw new de("Blob is not supported. Use a Buffer instead.");
    return I.isArrayBuffer(g) || I.isTypedArray(g) ? c && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function u(g, p, x) {
    let C = g;
    if (g && !x && typeof g == "object") {
      if (I.endsWith(p, "{}"))
        p = r ? p : p.slice(0, -2), g = JSON.stringify(g);
      else if (I.isArray(g) && f2(g) || (I.isFileList(g) || I.endsWith(p, "[]")) && (C = I.toArray(g)))
        return p = R0(p), C.forEach(function(h, E) {
          !(I.isUndefined(h) || h === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? iu([p], E, i) : s === null ? p : p + "[]",
            l(h)
          );
        }), !1;
    }
    return Pa(g) ? !0 : (t.append(iu(x, p, i), l(g)), !1);
  }
  const d = [], f = Object.assign(d2, {
    defaultVisitor: u,
    convertValue: l,
    isVisitable: Pa
  });
  function v(g, p) {
    if (!I.isUndefined(g)) {
      if (d.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + p.join("."));
      d.push(g), I.forEach(g, function(C, S) {
        (!(I.isUndefined(C) || C === null) && o.call(
          t,
          C,
          I.isString(S) ? S.trim() : S,
          p,
          f
        )) === !0 && v(C, p ? p.concat(S) : [S]);
      }), d.pop();
    }
  }
  if (!I.isObject(e))
    throw new TypeError("data must be an object");
  return v(e), t;
}
function su(e) {
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
function vc(e, t) {
  this._pairs = [], e && Vi(e, this, t);
}
const P0 = vc.prototype;
P0.append = function(t, n) {
  this._pairs.push([t, n]);
};
P0.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, su);
  } : su;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function h2(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function I0(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || h2;
  I.isFunction(n) && (n = {
    serialize: n
  });
  const o = n && n.serialize;
  let i;
  if (o ? i = o(t, n) : i = I.isURLSearchParams(t) ? t.toString() : new vc(t, n).toString(r), i) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class au {
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
const N0 = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, p2 = typeof URLSearchParams < "u" ? URLSearchParams : vc, x2 = typeof FormData < "u" ? FormData : null, g2 = typeof Blob < "u" ? Blob : null, m2 = {
  isBrowser: !0,
  classes: {
    URLSearchParams: p2,
    FormData: x2,
    Blob: g2
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, bc = typeof window < "u" && typeof document < "u", Ia = typeof navigator == "object" && navigator || void 0, v2 = bc && (!Ia || ["ReactNative", "NativeScript", "NS"].indexOf(Ia.product) < 0), b2 = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", y2 = bc && window.location.href || "http://localhost", S2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: bc,
  hasStandardBrowserEnv: v2,
  hasStandardBrowserWebWorkerEnv: b2,
  navigator: Ia,
  origin: y2
}, Symbol.toStringTag, { value: "Module" })), ct = {
  ...S2,
  ...m2
};
function C2(e, t) {
  return Vi(e, new ct.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, i) {
      return ct.isNode && I.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function w2(e) {
  return I.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function E2(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++)
    i = n[r], t[i] = e[i];
  return t;
}
function k0(e) {
  function t(n, r, o, i) {
    let s = n[i++];
    if (s === "__proto__") return !0;
    const a = Number.isFinite(+s), c = i >= n.length;
    return s = !s && I.isArray(o) ? o.length : s, c ? (I.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !a) : ((!o[s] || !I.isObject(o[s])) && (o[s] = []), t(n, r, o[s], i) && I.isArray(o[s]) && (o[s] = E2(o[s])), !a);
  }
  if (I.isFormData(e) && I.isFunction(e.entries)) {
    const n = {};
    return I.forEachEntry(e, (r, o) => {
      t(w2(r), o, n, 0);
    }), n;
  }
  return null;
}
function _2(e, t, n) {
  if (I.isString(e))
    try {
      return (t || JSON.parse)(e), I.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Gr = {
  transitional: N0,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, i = I.isObject(t);
    if (i && I.isHTMLForm(t) && (t = new FormData(t)), I.isFormData(t))
      return o ? JSON.stringify(k0(t)) : t;
    if (I.isArrayBuffer(t) || I.isBuffer(t) || I.isStream(t) || I.isFile(t) || I.isBlob(t) || I.isReadableStream(t))
      return t;
    if (I.isArrayBufferView(t))
      return t.buffer;
    if (I.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return C2(t, this.formSerializer).toString();
      if ((a = I.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return Vi(
          a ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return i || o ? (n.setContentType("application/json", !1), _2(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Gr.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (I.isResponse(t) || I.isReadableStream(t))
      return t;
    if (t && I.isString(t) && (r && !this.responseType || o)) {
      const s = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (s)
          throw a.name === "SyntaxError" ? de.from(a, de.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
    FormData: ct.classes.FormData,
    Blob: ct.classes.Blob
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
  Gr.headers[e] = {};
});
const O2 = I.toObjectSet([
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
]), T2 = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), n = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!n || t[n] && O2[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, cu = Symbol("internals");
function wr(e) {
  return e && String(e).trim().toLowerCase();
}
function Mo(e) {
  return e === !1 || e == null ? e : I.isArray(e) ? e.map(Mo) : String(e);
}
function A2(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const R2 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
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
function P2(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function I2(e, t) {
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
let mt = class {
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
    else if (I.isString(t) && (t = t.trim()) && !R2(t))
      s(T2(t), n);
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
          return A2(o);
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
      const a = t ? P2(i) : String(i).trim();
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
    const r = (this[cu] = this[cu] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(s) {
      const a = wr(s);
      r[a] || (I2(o, s), r[a] = !0);
    }
    return I.isArray(t) ? t.forEach(i) : i(t), this;
  }
};
mt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
I.reduceDescriptors(mt.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
I.freezeMethods(mt);
function _s(e, t) {
  const n = this || Gr, r = t || n, o = mt.from(r.headers);
  let i = r.data;
  return I.forEach(e, function(a) {
    i = a.call(n, i, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), i;
}
function j0(e) {
  return !!(e && e.__CANCEL__);
}
function hr(e, t, n) {
  de.call(this, e ?? "canceled", de.ERR_CANCELED, t, n), this.name = "CanceledError";
}
I.inherits(hr, de, {
  __CANCEL__: !0
});
function L0(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new de(
    "Request failed with status code " + n.status,
    [de.ERR_BAD_REQUEST, de.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function N2(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function k2(e, t) {
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
function j2(e, t) {
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
  const o = k2(50, 250);
  return j2((i) => {
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
}, lu = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, uu = (e) => (...t) => I.asap(() => e(...t)), L2 = ct.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, ct.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(ct.origin),
  ct.navigator && /(msie|trident)/i.test(ct.navigator.userAgent)
) : () => !0, M2 = ct.hasStandardBrowserEnv ? (
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
function D2(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function B2(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function M0(e, t, n) {
  let r = !D2(t);
  return e && (r || n == !1) ? B2(e, t) : t;
}
const fu = (e) => e instanceof mt ? { ...e } : e;
function kn(e, t) {
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
    headers: (l, u, d) => o(fu(l), fu(u), d, !0)
  };
  return I.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const d = c[u] || o, f = d(e[u], t[u], u);
    I.isUndefined(f) && d !== a || (n[u] = f);
  }), n;
}
const D0 = (e) => {
  const t = kn({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: i, headers: s, auth: a } = t;
  t.headers = s = mt.from(s), t.url = I0(M0(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), a && s.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let c;
  if (I.isFormData(n)) {
    if (ct.hasStandardBrowserEnv || ct.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if ((c = s.getContentType()) !== !1) {
      const [l, ...u] = c ? c.split(";").map((d) => d.trim()).filter(Boolean) : [];
      s.setContentType([l || "multipart/form-data", ...u].join("; "));
    }
  }
  if (ct.hasStandardBrowserEnv && (r && I.isFunction(r) && (r = r(t)), r || r !== !1 && L2(t.url))) {
    const l = o && i && M2.read(i);
    l && s.set(o, l);
  }
  return t;
}, z2 = typeof XMLHttpRequest < "u", H2 = z2 && function(e) {
  return new Promise(function(n, r) {
    const o = D0(e);
    let i = o.data;
    const s = mt.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: c, onDownloadProgress: l } = o, u, d, f, v, g;
    function p() {
      v && v(), g && g(), o.cancelToken && o.cancelToken.unsubscribe(u), o.signal && o.signal.removeEventListener("abort", u);
    }
    let x = new XMLHttpRequest();
    x.open(o.method.toUpperCase(), o.url, !0), x.timeout = o.timeout;
    function C() {
      if (!x)
        return;
      const h = mt.from(
        "getAllResponseHeaders" in x && x.getAllResponseHeaders()
      ), b = {
        data: !a || a === "text" || a === "json" ? x.responseText : x.response,
        status: x.status,
        statusText: x.statusText,
        headers: h,
        config: e,
        request: x
      };
      L0(function(_) {
        n(_), p();
      }, function(_) {
        r(_), p();
      }, b), x = null;
    }
    "onloadend" in x ? x.onloadend = C : x.onreadystatechange = function() {
      !x || x.readyState !== 4 || x.status === 0 && !(x.responseURL && x.responseURL.indexOf("file:") === 0) || setTimeout(C);
    }, x.onabort = function() {
      x && (r(new de("Request aborted", de.ECONNABORTED, e, x)), x = null);
    }, x.onerror = function() {
      r(new de("Network Error", de.ERR_NETWORK, e, x)), x = null;
    }, x.ontimeout = function() {
      let E = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const b = o.transitional || N0;
      o.timeoutErrorMessage && (E = o.timeoutErrorMessage), r(new de(
        E,
        b.clarifyTimeoutError ? de.ETIMEDOUT : de.ECONNABORTED,
        e,
        x
      )), x = null;
    }, i === void 0 && s.setContentType(null), "setRequestHeader" in x && I.forEach(s.toJSON(), function(E, b) {
      x.setRequestHeader(b, E);
    }), I.isUndefined(o.withCredentials) || (x.withCredentials = !!o.withCredentials), a && a !== "json" && (x.responseType = o.responseType), l && ([f, g] = Zo(l, !0), x.addEventListener("progress", f)), c && x.upload && ([d, v] = Zo(c), x.upload.addEventListener("progress", d), x.upload.addEventListener("loadend", v)), (o.cancelToken || o.signal) && (u = (h) => {
      x && (r(!h || h.type ? new hr(null, e, x) : h), x.abort(), x = null);
    }, o.cancelToken && o.cancelToken.subscribe(u), o.signal && (o.signal.aborted ? u() : o.signal.addEventListener("abort", u)));
    const S = N2(o.url);
    if (S && ct.protocols.indexOf(S) === -1) {
      r(new de("Unsupported protocol " + S + ":", de.ERR_BAD_REQUEST, e));
      return;
    }
    x.send(i || null);
  });
}, F2 = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), o;
    const i = function(l) {
      if (!o) {
        o = !0, a();
        const u = l instanceof Error ? l : this.reason;
        r.abort(u instanceof de ? u : new hr(u instanceof Error ? u.message : u));
      }
    };
    let s = t && setTimeout(() => {
      s = null, i(new de(`timeout ${t} of ms exceeded`, de.ETIMEDOUT));
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
}, $2 = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < n; )
    o = r + t, yield e.slice(r, o), r = o;
}, V2 = async function* (e, t) {
  for await (const n of W2(e))
    yield* $2(n, t);
}, W2 = async function* (e) {
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
}, du = (e, t, n, r) => {
  const o = V2(e, t);
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
}, Wi = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", B0 = Wi && typeof ReadableStream == "function", q2 = Wi && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), z0 = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, U2 = B0 && z0(() => {
  let e = !1;
  const t = new Request(ct.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), hu = 64 * 1024, Na = B0 && z0(() => I.isReadableStream(new Response("").body)), Jo = {
  stream: Na && ((e) => e.body)
};
Wi && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Jo[t] && (Jo[t] = I.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new de(`Response type '${t}' is not supported`, de.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const X2 = async (e) => {
  if (e == null)
    return 0;
  if (I.isBlob(e))
    return e.size;
  if (I.isSpecCompliantForm(e))
    return (await new Request(ct.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (I.isArrayBufferView(e) || I.isArrayBuffer(e))
    return e.byteLength;
  if (I.isURLSearchParams(e) && (e = e + ""), I.isString(e))
    return (await q2(e)).byteLength;
}, Y2 = async (e, t) => {
  const n = I.toFiniteNumber(e.getContentLength());
  return n ?? X2(t);
}, G2 = Wi && (async (e) => {
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
  } = D0(e);
  l = l ? (l + "").toLowerCase() : "text";
  let v = F2([o, i && i.toAbortSignal()], s), g;
  const p = v && v.unsubscribe && (() => {
    v.unsubscribe();
  });
  let x;
  try {
    if (c && U2 && n !== "get" && n !== "head" && (x = await Y2(u, r)) !== 0) {
      let b = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), O;
      if (I.isFormData(r) && (O = b.headers.get("content-type")) && u.setContentType(O), b.body) {
        const [_, j] = lu(
          x,
          Zo(uu(c))
        );
        r = du(b.body, hu, _, j);
      }
    }
    I.isString(d) || (d = d ? "include" : "omit");
    const C = "credentials" in Request.prototype;
    g = new Request(t, {
      ...f,
      signal: v,
      method: n.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: C ? d : void 0
    });
    let S = await fetch(g);
    const h = Na && (l === "stream" || l === "response");
    if (Na && (a || h && p)) {
      const b = {};
      ["status", "statusText", "headers"].forEach((z) => {
        b[z] = S[z];
      });
      const O = I.toFiniteNumber(S.headers.get("content-length")), [_, j] = a && lu(
        O,
        Zo(uu(a), !0)
      ) || [];
      S = new Response(
        du(S.body, hu, _, () => {
          j && j(), p && p();
        }),
        b
      );
    }
    l = l || "text";
    let E = await Jo[I.findKey(Jo, l) || "text"](S, e);
    return !h && p && p(), await new Promise((b, O) => {
      L0(b, O, {
        data: E,
        headers: mt.from(S.headers),
        status: S.status,
        statusText: S.statusText,
        config: e,
        request: g
      });
    });
  } catch (C) {
    throw p && p(), C && C.name === "TypeError" && /Load failed|fetch/i.test(C.message) ? Object.assign(
      new de("Network Error", de.ERR_NETWORK, e, g),
      {
        cause: C.cause || C
      }
    ) : de.from(C, C && C.code, e, g);
  }
}), ka = {
  http: u2,
  xhr: H2,
  fetch: G2
};
I.forEach(ka, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const pu = (e) => `- ${e}`, K2 = (e) => I.isFunction(e) || e === null || e === !1, H0 = {
  getAdapter: (e) => {
    e = I.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const o = {};
    for (let i = 0; i < t; i++) {
      n = e[i];
      let s;
      if (r = n, !K2(n) && (r = ka[(s = String(n)).toLowerCase()], r === void 0))
        throw new de(`Unknown adapter '${s}'`);
      if (r)
        break;
      o[s || "#" + i] = r;
    }
    if (!r) {
      const i = Object.entries(o).map(
        ([a, c]) => `adapter ${a} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let s = t ? i.length > 1 ? `since :
` + i.map(pu).join(`
`) : " " + pu(i[0]) : "as no adapter specified";
      throw new de(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: ka
};
function Os(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new hr(null, e);
}
function xu(e) {
  return Os(e), e.headers = mt.from(e.headers), e.data = _s.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), H0.getAdapter(e.adapter || Gr.adapter)(e).then(function(r) {
    return Os(e), r.data = _s.call(
      e,
      e.transformResponse,
      r
    ), r.headers = mt.from(r.headers), r;
  }, function(r) {
    return j0(r) || (Os(e), r && r.response && (r.response.data = _s.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = mt.from(r.response.headers))), Promise.reject(r);
  });
}
const F0 = "1.9.0", qi = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  qi[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const gu = {};
qi.transitional = function(t, n, r) {
  function o(i, s) {
    return "[Axios v" + F0 + "] Transitional option '" + i + "'" + s + (r ? ". " + r : "");
  }
  return (i, s, a) => {
    if (t === !1)
      throw new de(
        o(s, " has been removed" + (n ? " in " + n : "")),
        de.ERR_DEPRECATED
      );
    return n && !gu[s] && (gu[s] = !0, console.warn(
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
function Z2(e, t, n) {
  if (typeof e != "object")
    throw new de("options must be an object", de.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o], s = t[i];
    if (s) {
      const a = e[i], c = a === void 0 || s(a, i, e);
      if (c !== !0)
        throw new de("option " + i + " must be " + c, de.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new de("Unknown option " + i, de.ERR_BAD_OPTION);
  }
}
const Do = {
  assertOptions: Z2,
  validators: qi
}, Dt = Do.validators;
let Pn = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new au(),
      response: new au()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = kn(this.defaults, n);
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
    ), n.headers = mt.concat(s, i);
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function(p) {
      typeof p.runWhen == "function" && p.runWhen(n) === !1 || (c = c && p.synchronous, a.unshift(p.fulfilled, p.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(p) {
      l.push(p.fulfilled, p.rejected);
    });
    let u, d = 0, f;
    if (!c) {
      const g = [xu.bind(this), void 0];
      for (g.unshift.apply(g, a), g.push.apply(g, l), f = g.length, u = Promise.resolve(n); d < f; )
        u = u.then(g[d++], g[d++]);
      return u;
    }
    f = a.length;
    let v = n;
    for (d = 0; d < f; ) {
      const g = a[d++], p = a[d++];
      try {
        v = g(v);
      } catch (x) {
        p.call(this, x);
        break;
      }
    }
    try {
      u = xu.call(this, v);
    } catch (g) {
      return Promise.reject(g);
    }
    for (d = 0, f = l.length; d < f; )
      u = u.then(l[d++], l[d++]);
    return u;
  }
  getUri(t) {
    t = kn(this.defaults, t);
    const n = M0(t.baseURL, t.url, t.allowAbsoluteUrls);
    return I0(n, t.params, t.paramsSerializer);
  }
};
I.forEach(["delete", "get", "head", "options"], function(t) {
  Pn.prototype[t] = function(n, r) {
    return this.request(kn(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
I.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(i, s, a) {
      return this.request(kn(a || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: s
      }));
    };
  }
  Pn.prototype[t] = n(), Pn.prototype[t + "Form"] = n(!0);
});
let J2 = class $0 {
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
      token: new $0(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
};
function Q2(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function eS(e) {
  return I.isObject(e) && e.isAxiosError === !0;
}
const ja = {
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
Object.entries(ja).forEach(([e, t]) => {
  ja[t] = e;
});
function V0(e) {
  const t = new Pn(e), n = b0(Pn.prototype.request, t);
  return I.extend(n, Pn.prototype, t, { allOwnKeys: !0 }), I.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return V0(kn(e, o));
  }, n;
}
const Ue = V0(Gr);
Ue.Axios = Pn;
Ue.CanceledError = hr;
Ue.CancelToken = J2;
Ue.isCancel = j0;
Ue.VERSION = F0;
Ue.toFormData = Vi;
Ue.AxiosError = de;
Ue.Cancel = Ue.CanceledError;
Ue.all = function(t) {
  return Promise.all(t);
};
Ue.spread = Q2;
Ue.isAxiosError = eS;
Ue.mergeConfig = kn;
Ue.AxiosHeaders = mt;
Ue.formToJSON = (e) => k0(I.isHTMLForm(e) ? new FormData(e) : e);
Ue.getAdapter = H0.getAdapter;
Ue.HttpStatusCode = ja;
Ue.default = Ue;
const {
  Axios: ES,
  AxiosError: _S,
  CanceledError: OS,
  isCancel: TS,
  CancelToken: AS,
  VERSION: RS,
  all: PS,
  Cancel: IS,
  isAxiosError: NS,
  spread: kS,
  toFormData: jS,
  AxiosHeaders: LS,
  HttpStatusCode: MS,
  formToJSON: DS,
  getAdapter: BS,
  mergeConfig: zS
} = Ue, Kt = Qo;
function Qo(e, t) {
  const n = ei();
  return Qo = function(r, o) {
    return r = r - 168, n[r];
  }, Qo(e, t);
}
(function(e, t) {
  const n = Qo, r = e();
  for (; ; )
    try {
      if (-parseInt(n(169)) / 1 * (parseInt(n(171)) / 2) + parseInt(n(195)) / 3 + -parseInt(n(176)) / 4 * (parseInt(n(172)) / 5) + parseInt(n(187)) / 6 + parseInt(n(168)) / 7 * (parseInt(n(196)) / 8) + parseInt(n(186)) / 9 + -parseInt(n(173)) / 10 * (parseInt(n(192)) / 11) === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ei, 963271);
Kt(180) + Kt(183);
Ue[Kt(189)][Kt(188) + Kt(175)] = !0;
const tS = async (e) => {
  var n, r, o, i;
  const t = Kt;
  try {
    return (await Ue(e))[t(184)];
  } catch (s) {
    throw ((r = (n = s[t(178)]) == null ? void 0 : n[t(184)]) == null ? void 0 : r[t(190)]) || ((i = (o = s[t(178)]) == null ? void 0 : o[t(184)]) == null ? void 0 : i[t(181)]) || s[t(190)];
  }
}, nS = {};
nS[Kt(179) + "pe"] = Kt(177) + Kt(191);
function ei() {
  const e = ["defaults", "message", "n/json", "752873AptSXb", "params", "DELETE", "3381273dTBpTO", "3208UYkImt", "26054bNsCrk", "1306817mQHNbx", "PUT", "2BzgfUQ", "865liKijg", "200ISClXq", "PATCH", "tials", "31748mNxPam", "applicatio", "response", "Content-Ty", "/api/v1/cl", "error", "GET", "ient", "data", "POST", "7809201kRevsu", "9148482txMvvQ", "withCreden"];
  return ei = function() {
    return e;
  }, ei();
}
const Le = ti;
(function(e, t) {
  const n = ti, r = e();
  for (; ; )
    try {
      if (-parseInt(n(109)) / 1 + parseInt(n(129)) / 2 * (-parseInt(n(114)) / 3) + parseInt(n(113)) / 4 + -parseInt(n(130)) / 5 + parseInt(n(106)) / 6 * (-parseInt(n(117)) / 7) + -parseInt(n(118)) / 8 * (-parseInt(n(111)) / 9) + parseInt(n(127)) / 10 === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ni, 162827);
function ti(e, t) {
  const n = ni();
  return ti = function(r, o) {
    return r = r - 105, n[r];
  }, ti(e, t);
}
const bn = {};
bn[Le(105)] = Le(110) + "E", bn[Le(120)] = Le(134), bn[Le(115)] = Le(107) + "N", bn[Le(108)] = Le(110) + "E", bn[Le(123)] = Le(134), bn[Le(121)] = Le(107) + "N";
const wt = bn, La = {};
La[Le(122)] = Le(134), La[Le(132)] = Le(107) + "N";
const rS = La, oS = Le(124), iS = Le(131);
function ni() {
  const e = ["16136fRbOSl", "keyBoardEv", "mouseup", "touchstart", "keyup", "touchend", "moveEvent", "assistiveM", "fullscreen", "7217790iRHkOK", "Event", "2066nKhRnY", "546010JOymma", "wheelEvent", "keydown", "ent", "ACTION_UP", "mousemove", "799746bprjZm", "ACTION_DOW", "touchmove", "315332DHvWCv", "ACTION_MOV", "549WbBLTr", "enuHide", "804924VenvJw", "945ckYSyV", "mousedown", "shortcutEv", "7MKWFUK"];
  return ni = function() {
    return e;
  }, ni();
}
const sS = Le(119) + Le(133), W0 = Le(125) + Le(112), Ma = Le(116) + Le(133), aS = Le(126) + Le(128);
(function(e, t) {
  const n = En, r = e();
  for (; ; )
    try {
      if (-parseInt(n(226)) / 1 + parseInt(n(233)) / 2 + -parseInt(n(242)) / 3 * (parseInt(n(232)) / 4) + -parseInt(n(246)) / 5 * (-parseInt(n(213)) / 6) + parseInt(n(180)) / 7 * (-parseInt(n(182)) / 8) + parseInt(n(247)) / 9 + parseInt(n(162)) / 10 === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ri, 495773);
function En(e, t) {
  const n = ri();
  return En = function(r, o) {
    return r = r - 137, n[r];
  }, En(e, t);
}
function ri() {
  const e = ["clientX", "QtXJa", "stener", "tab", "typeKey", "xwtvM", "keydown", "touchEvent", "971670sMEXqL", "keyAction", "left", "wgJXg", "63005kcGJJB", "4675095jfiKLP", "tListener", "cbhFn", "offsetHeig", "bhvCL", "BZEja", "touchend", "YtiYd", "arrowright", "readText", "offsetWidt", "WEqzL", "IgBGO", "deltaY", "iQtcU", "nOUyG", "wheelEvent", "pageY", "removeEven", "capslock", "repeat", "sign", "XTAun", "toLowerCas", "KEYBOARD_C", "enter", "IkBwk", "2723650RbInwq", "COPY_TEXT", "mousedown", "now", "height", "touchstart", "forEach", "ODjnL", "ault", "XFOxE", "control", "rmGzY", "preventDef", "rKovE", "jYdGK", "PASTE_TEXT", "OHjgC", "ODE", "7BTmKDa", "touchmove", "3362896irxhee", "toUpperCas", "touch", "action", "getBoundin", "lnNjH", "top", "showMenu", "jvFNm", "arrowup", "mouse", "current", "shiftKey", "GhHaN", "myoYI", "width", "VbigO", "clientY", "YTjlk", "pageX", "DBcZe", "arrowleft", "max", "isDown", "addEventLi", "clipboard", "EXT", "gClientRec", "ctrlKey", "passive", "RgFSz", "414DYaNPI", "focus", "meta_state", "type", "mousemove", "BSYTW", "key", "arrowdown", "mouseup", "zFWfM", "pigir", "backspace", "shift", "452029XmTDme", "includes", "KEYBOARD_T", "nHTaF", "keyEvent", "zrEms", "4PhFmNp", "61530CfvkJw"];
  return ri = function() {
    return e;
  }, ri();
}
const cS = ({ isMobile: e, assistive: t, onRemoteEvent: n, canvasContent: r, canvasRef: o }) => {
  const [i, s] = ft(!1), a = (d) => {
    const f = En;
    if (f(175) === f(147)) _0x495916[f(194)] == !0 && (_0x2a15ea[f(219)] = _0x300f74[f(219)][f(183) + "e"]());
    else {
      if (d[f(174) + f(170)](), !o[f(193)]) return;
      const v = o[f(193)], g = v[f(186) + f(209) + "t"]();
      let p = wt[d[f(216)]];
      if (t[f(205)] == !0 || t[f(189)] == !0) {
        p == wt[f(221)] && (f(187) !== f(137) ? n(W0, {}) : [f(167), f(181), f(141)][f(168)]((b) => {
          const O = f;
          _0x325ff6[O(153) + O(248)](b, _0x470d36);
        }));
        return;
      }
      if (p == wt[f(164)] && s(!0), p != wt[f(164)] && i == !1)
        if (f(169) === f(231)) _0x2e70b2[f(219)] = _0x129794[f(219)][f(183) + "e"]();
        else return;
      p == wt[f(221)] && s(!1);
      let x, C;
      if (d[f(216)][f(227)](f(184)))
        if (f(149) === f(149)) {
          const { touches: b, changedTouches: O } = d, _ = b[0] ?? O[0];
          x = _[f(201)] - g[f(244)], C = _[f(152)] - g[f(188)];
        } else _0x4ee2cf(_0x4c9699, {});
      else d[f(216)][f(227)](f(192)) && (f(142) !== f(142) ? _0x2966c6[f(206) + f(236)](_0x36db50, _0x947b22) : (x = d[f(234)] - g[f(244)], C = d[f(199)] - g[f(188)]));
      const S = 1, h = x < S || x > v[f(197)] - S, E = C < S || C > v[f(166)] - S;
      (h || E) && (x = Math[f(204)](1, x), C = Math[f(204)](1, C), p = wt[f(221)]), n(oS, { action: f(241), keyAction: p, x, y: C, width: g[f(197)], height: g[f(166)], ts: Date[f(165)]() }), v[f(214)]();
    }
  }, c = (d) => {
    const f = En;
    if (f(223) === f(212)) {
      const { touches: v, changedTouches: g } = _0x143825, p = v[0] ?? g[0];
      _0x498897 = p[f(201)] - _0x33505f[f(244)], _0x1eed94 = p[f(152)] - _0x1c19a8[f(188)];
    } else {
      if (d[f(174) + f(170)](), !o[f(193)]) return;
      const v = o[f(193)], g = Math[f(156)](d[f(148)]), p = v[f(186) + f(209) + "t"]();
      n(iS, { action: f(151), width: v[f(145) + "h"], height: v[f(138) + "ht"], x: d[f(234)] - p[f(244)], y: d[f(199)] - p[f(188)], delta: g, ts: Date[f(165)]() }), v[f(214)]();
    }
  }, l = async (d) => {
    const f = En;
    if (d[f(174) + f(170)](), !o[f(193)]) return;
    const v = o[f(193)], g = rS[d[f(216)]], p = d[f(219)][f(158) + "e"]();
    if (((h) => {
      const E = f;
      if (E(196) === E(196))
        return [E(172), E(225), E(154)][E(227)](h);
      _0x329679[E(238)] = E(159) + E(179), _0x4291bb[E(219)] = 22;
    })(p) == !0) return;
    const C = async () => {
      const h = f;
      if (h(202) === h(139)) _0x563f44 = _0x3eba38[h(234)] - _0x199f49[h(244)], _0x1d298d = _0x542bb2[h(199)] - _0x50118f[h(188)];
      else {
        const E = {};
        E[h(185)] = h(230), E[h(243)] = g, E[h(238)] = h(228) + h(208), E[h(219)] = d[h(219)], E[h(155)] = 0, E[h(215)] = 0;
        const b = E;
        if (d[h(210)] == !0) {
          if (p == "c") b[h(238)] = h(163);
          else if (p == "a") b[h(238)] = h(159) + h(179), b[h(215)] = 4096, b[h(219)] = 29;
          else if (p == "v")
            if (h(235) !== h(157)) b[h(238)] = h(177), b[h(219)] = await navigator[h(207)][h(144)]();
            else return;
        } else if (p == h(191)) h(146) === h(146) ? (b[h(238)] = h(159) + h(179), b[h(219)] = 19) : (_0x3f984e[h(206) + h(236)](h(167), _0x2f8493, _0x37aa9c), _0x519fc1[h(206) + h(236)](h(181), _0x333067, _0x41ac2b), _0x476e6b[h(206) + h(236)](h(141), _0x5f169c));
        else if (p == h(220)) h(176) !== h(176) ? (_0x561545[h(238)] = h(159) + h(179), _0x6ff503[h(219)] = 21) : (b[h(238)] = h(159) + h(179), b[h(219)] = 20);
        else if (p == h(203)) h(222) !== h(173) ? (b[h(238)] = h(159) + h(179), b[h(219)] = 21) : _0x18c57c(!0);
        else if (p == h(143))
          if (h(178) === h(161)) {
            _0x40e9f7 == _0x54a88a[h(221)] && _0x2c43d6(_0xed18cc, {});
            return;
          } else b[h(238)] = h(159) + h(179), b[h(219)] = 22;
        else if (p == h(224))
          if (h(140) === h(195)) {
            if (_0x558bfe[h(174) + h(170)](), !_0x295831[h(193)]) return;
            const O = _0x483519[h(193)], _ = _0xdda6d8[h(156)](_0x359a6b[h(148)]), j = O[h(186) + h(209) + "t"]();
            _0x4b6ad6(_0x484d6a, { action: h(151), width: O[h(145) + "h"], height: O[h(138) + "ht"], x: _0x2ec0a5[h(234)] - j[h(244)], y: _0x1a0858[h(199)] - j[h(188)], delta: _, ts: _0x1634ab[h(165)]() }), O[h(214)]();
          } else b[h(238)] = h(159) + h(179), b[h(219)] = 67;
        else
          p == h(160) ? h(239) === h(200) ? (_0x168b70[h(238)] = h(159) + h(179), _0x34de65[h(219)] = 66) : (b[h(238)] = h(159) + h(179), b[h(219)] = 66) : p == h(237) && (b[h(238)] = h(159) + h(179), b[h(219)] = 61);
        return b[h(216)] == h(228) + h(208) && (h(198) !== h(171) ? d[h(194)] == !0 && (b[h(219)] = b[h(219)][h(183) + "e"]()) : _0x1ec3d9(!1)), b;
      }
    }, S = await C();
    S && n(sS, S), v[f(214)]();
  };
  Ye(() => {
    const d = En;
    if (d(218) === d(245))
      return [d(172), d(225), d(154)][d(227)](_0x3f7518);
    {
      const f = o[d(193)];
      if (f) {
        const v = {};
        v[d(211)] = !1;
        const g = v;
        return e ? (f[d(206) + d(236)](d(167), a, g), f[d(206) + d(236)](d(181), a, g), f[d(206) + d(236)](d(141), a)) : (f[d(206) + d(236)](d(240), l), [d(217), d(164), d(221)][d(168)]((p) => {
          const x = d;
          f[x(206) + x(236)](p, a);
        })), () => {
          const p = d;
          if (f) {
            if (p(150) !== p(150)) return;
            e ? p(190) === p(190) ? [p(167), p(181), p(141)][p(168)]((x) => {
              const C = p;
              f[C(153) + C(248)](x, a);
            }) : (_0x4520e7[p(238)] = p(159) + p(179), _0x33fe71[p(219)] = 67) : p(229) === p(229) ? ([p(217), p(164), p(221)][p(168)]((x) => {
              const C = p;
              f[C(153) + C(248)](x, a);
            }), f[p(153) + p(248)](p(240), l)) : (_0x1f05c6[p(238)] = p(159) + p(179), _0x123c70[p(219)] = 19);
          }
        };
      }
    }
  }, [e, a, c, l, o]);
  const u = { ref: o, ...r };
  return ee.jsx(hp, u);
}, lS = "data:image/png;base64,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", Ui = oi;
(function(e, t) {
  const n = oi, r = e();
  for (; ; )
    try {
      if (parseInt(n(106)) / 1 + parseInt(n(111)) / 2 + parseInt(n(109)) / 3 * (parseInt(n(108)) / 4) + -parseInt(n(110)) / 5 + -parseInt(n(107)) / 6 * (-parseInt(n(102)) / 7) + -parseInt(n(103)) / 8 + parseInt(n(105)) / 9 === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ii, 324833);
const uS = kt[Ui(104)]`
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
`, Ut = kt[Ui(104)]`
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
`;
function oi(e, t) {
  const n = ii();
  return oi = function(r, o) {
    return r = r - 102, n[r];
  }, oi(e, t);
}
function ii() {
  const e = ["32898ctZDCg", "79396kZBFNA", "39FVMOeX", "2798720aOSJDq", "46158lAVRgV", "img", "413GZZehL", "1771352UuBDOF", "div", "702423qlICDj", "423336AnhxyV"];
  return ii = function() {
    return e;
  }, ii();
}
const Xt = kt.p`
  height: 5px;
  margin-top: 2px;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
`, fS = kt[Ui(112)]`
  position: absolute;
  backdrop-filter: blur(46px);
  border-radius: 50%;
  z-index: 999;
`, dS = kt[Ui(104)]`
  user-select: none;
  transition: opacity 0.6s ease;
  z-index: 3;
  opacity: 0.3;
`;
function tr(e, t) {
  const n = si();
  return tr = function(r, o) {
    return r = r - 130, n[r];
  }, tr(e, t);
}
function si() {
  const e = ["RDPxJ", "9oWXhDw", "enElement", "estFullscr", "344SDziTG", "mozRequest", "requestFul", "msExitFull", "webkitRequ", "BZvgg", "#screen_", "HtPaZ", "2445360efmxiw", "mozFullScr", "lscreen", "exitFullsc", "querySelec", "Fullscreen", "fohYW", "fullscreen", "mozCancelF", "screen", "ullscreen", "screenElem", "een", "reen", "FullScreen", "1846770UdpgJI", "BtyUT", "77511XggqIm", "msFullscre", "msRequestF", "tor", "Element", "eenElement", "392907vwOWvp", "webkitFull", "ent", "8395785xlPdwN", "958800jWEzzW", "24774wtYWfb", "webkitExit", "ullScreen"];
  return si = function() {
    return e;
  }, si();
}
(function(e, t) {
  const n = tr, r = e();
  for (; ; )
    try {
      if (parseInt(n(137)) / 1 * (parseInt(n(133)) / 2) + parseInt(n(171)) / 3 + -parseInt(n(132)) / 4 + parseInt(n(148)) / 5 + parseInt(n(163)) / 6 + parseInt(n(165)) / 7 * (parseInt(n(140)) / 8) + -parseInt(n(131)) / 9 === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(si, 342893);
const mu = () => {
  const e = tr;
  return document[e(155) + e(169)] || document[e(149) + e(170)] || document[e(172) + e(159) + e(130)] || document[e(166) + e(138)];
}, hS = (e) => {
  const t = tr, n = document[t(152) + t(168)](t(146) + e);
  n[t(142) + t(150)] ? n[t(142) + t(150)]() : n[t(141) + t(162)] ? t(136) !== t(136) ? _0x54d450[t(144) + t(139) + t(160)]() : n[t(141) + t(162)]() : n[t(144) + t(139) + t(160)] ? n[t(144) + t(139) + t(160)]() : n[t(167) + t(158)] && (t(154) === t(164) ? _0x10a182[t(151) + t(161)]() : n[t(167) + t(158)]());
}, pS = () => {
  const e = tr;
  document[e(151) + e(161)] ? document[e(151) + e(161)]() : document[e(156) + e(135)] ? document[e(156) + e(135)]() : document[e(134) + e(153)] ? e(147) === e(145) ? _0x41c4c8[e(143) + e(157)]() : document[e(134) + e(153)]() : document[e(143) + e(157)] && document[e(143) + e(157)]();
};
(function(e, t) {
  const n = Fr, r = e();
  for (; ; )
    try {
      if (-parseInt(n(550)) / 1 * (parseInt(n(483)) / 2) + -parseInt(n(541)) / 3 * (-parseInt(n(406)) / 4) + parseInt(n(502)) / 5 + parseInt(n(353)) / 6 * (parseInt(n(447)) / 7) + parseInt(n(547)) / 8 + parseInt(n(492)) / 9 * (parseInt(n(416)) / 10) + -parseInt(n(331)) / 11 === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ai, 481320);
function ai() {
  const e = ["6v2H4z", "pageX", "div", " 1 0 0 0 1", "touchstart", "a1 1 0 0 0", "S18.387 17", "M16 7v10c1", "Screen", "-1.103-.89", "Ddtwa", "imRgb", " 2v10c0 1.", "0 18V4h10l", "10c-1.103 ", "48 3.832a1", "1899NDRCzw", "255, 255, ", "children", "M16.75 2h-", "screenchan", "0V4a1 1 0 ", "5084168ZhROgv", "Show ID", "-2 2v6c0 1", "11LglIjb", "a.995.995 ", "27-1.547 5", "7 2-2V4c0-", "shortcutEv", "2 2h7c0 1.", "ent", "0 0 1.645z", "grab", "clientX", "0h2v-6H4v2", "2-.082-.03", "VDAAf", "QjfQo", "3 9a1.003 ", "top", "Paste", " 2-2v-7c0-", "RMiOV", "enchange", "l10.283 7.", ".999-4.909", "isDown", "1zm-1 16H5", "type", "shortcut", "height", "2-2h-4V4h1", "PTCDF", "416 3.377 ", "tjCVn", "ault", "2 2zm2 7v-", "v2h8V5h3v6", "2H4zm0 5h1", "current", "-1-1H8a1 1", "027 1.027 ", "getBoundin", "061-.016.0", "preventDef", "mouse", "3 0 2-.897", "sync", "style", "showMenu", "focus", "3 0-2 .897", "0 0-.396-1", "CxIVB", "h-2v6h6z", "1.003 0 0 ", "1.103 0-2 ", "mozfullscr", "Volume", "M4 6h16v2H", "2 2h10c1.1", "Home", ".024l-14-1", "103.897 2 ", "removeEven", "msfullscre", "yochj", "tListener", "M6 12h6v2H", "2 2h7c1.10", "0 1-1V4a1 ", "yQxTG", " 2 2zm0-8h", "move", "xvOZj", " 7H4c-1.10", "touch", "path", "zm0-6h-4V4", "M10 4H8v4H", "6l3.612-4.", "0 1.767.51", "345-5.236 ", "6a1 1 0 0 ", "1v16a1 1 0", "eJslv", "pageY", "m-2-4h2V3h", "03 0 2-.89", "m4.431 12.", "includes", " 0 0 0-1 1", "7 16 3v2c2", "recents", "eenchange", "Qvimc", "V5h14v14z", "target", "13107952LUPedP", ".21a1 1 0 ", "H13z", "zM4 20V10h", "5px", "get", "click", "Recents", ".387 1.386", "passive", "59 15.016 ", "touchmove", "data-id", "back", " 0 0 0-1.5", "7h7l.001 7", "7.032 15 7", "M20 11V5c0", "2-.116C7.0", "M16 21c3.5", "touch_", "4c-.025-.0", "6LYhTHI", "57-5.428 6", "47 3.999 7", "-1.052-3.3", "0v10z", "H6z", " 0 0 0-.38", "forEach", "jnAGD", "closest", "set", "h2.697l5.7", " 0-2 .897-", "-7v2h5z", "rgba(255, ", ".103.897 2", "readText", ".225-1.1 2", "gClientRec", "mousedown", ".832L6.697", "FUGAv", "4c0-1.103-", "93-.019a1.", "circle", "Hide ID", "home", "right", "8.347l-3.0", "75z", "oFgFH", "4v-4c0-1.1", " 0 0 0-.57", "-.769zm-8.", "action", "volume", "M20 3H4a1 ", "taskId", "clipboard", "4v2h6zM8 2", ".004 1.004", "webkitfull", " 0 0 0 1.0", "KwaRp", "getAttribu", ".w3.org/20", "6zm0 4h6v2", "17-.056-.0", "touchend", "v5h-5v2h7z", " 2v16c0 1.", ".116c.026-", "clientY", "212EkjIHz", "http://www", "1 0 0 0-1 ", "11.75", "stener", "cursor", "0 0 24 24", " 3.999 4.0", "4.445-2.96", "12%", "30atCWMV", "menu_", ".002 16H6.", " 0 0 1 1h1", "9 21V3a1 1", "8v12.264l-", "shortcutCo", "H4zm16-6h-", "0 0 0 .782", "Back", "eLjjh", "Copy", " 15H4V9z", "opacity", "9.527 4.54", ".089-1.218", "1.048z", "M5 5h5V3H3", "69-.823l-1", " 2v5H4V5h3", "0-2 .897-2", "-2-2-2zm-9", "-3.229 2-5", "v7h2zm5 14", "SORcl", "GpMhf", "7zm11-5h-2", "c1.103 0 2", "data", ".897-2-2-2", "QjsvK", "2903957UnSwNP", "change", "7a1 1 0 0 ", "0 0 0 14 2", "left", "copy", "width", "08 3.677L7", "017.082-.0", "zIndex", "00/svg", " 5.999-9S1", "4zm0 5h16v", "33L12 5.86", "6v6h2v-4h4", "Sync", "H5v-5H3v7h", "7 2-2v-4h4", "qGcyT", "UXVTu", ".897-2 2v4", "03-.897-2-", "822 13 9A1", "27.05A1 1 ", "v2z", "3a.986.986", "GrMYw", "hsrHo", ".015.057-.", "XQcIV", "mousemove", "0 0 0 .38-", "674.31a1 1", "5.46 1.701", "osnqz", "paste", "99100kvuTpt", " 2v13c0 1.", "-.897 2-2V", "fill", "TDvUl", "0a.999.999", "assistive_", "addEventLi", "3c.033 0 .", "2133603WpVIwj", "M20 2H10c-", "1 0 0 0-1-", "Icon", "fullscreen", "-2-2-2zm-1", "h-5c-1.103", "device_id", "1.103-.897", "s-.775-3.9", "2114400RkwXxU", "h4zm12-6h-", "20px", "jbaWu", "svg", "M20.978 13", ".257 5.127", "landscape", "OXslb", "7-2-2-2h-3", "H4c-1.103 ", "JqPTS", "DDfBO", "Etzoy", "mouseup", "10l.002 10", "touch_clas", "-2-5zM4 17", "assistive", "now", ".614 16 19", "0 0-1.554-", "75.931l2 1"];
  return ai = function() {
    return e;
  }, ai();
}
function Fr(e, t) {
  const n = ai();
  return Fr = function(r, o) {
    return r = r - 273, n[r];
  }, Fr(e, t);
}
const xS = rr((e, t) => {
  const n = Fr, { displayId: r, isMobile: o, onSenData: i, status: s, canvasRef: a, isShowDeviceId: c } = e, l = {};
  l.x = 0, l.y = 0;
  const u = Ee(l), d = {};
  d.x = 0, d.y = 0;
  const f = Ee(d), [v, g] = ft(null), [p, x] = ft(0), C = Ee(null), S = Ee(null), h = Ee(null), E = {};
  E[n(411)] = n(306), E[n(429)] = 0.3, E[n(456)] = 999;
  const [b, O] = ft(E), _ = {};
  _[n(456)] = 1e3;
  const [j, z] = ft(_), U = Ee(null), [ne, J] = ft(null), B = (D) => {
    const y = n;
    if (y(473) !== y(474)) {
      if (D[y(277) + y(581)](), s[y(336)][y(282)] == !0)
        if (y(515) === y(328)) {
          const He = {};
          He[y(429)] = 0.3, He[y(411)] = y(306);
          const je = { ..._0x3c740f, ...He };
          _0x466ac0(je), _0x292be4(_0x2073f8[y(516)]);
          const ut = { ..._0x477c49[y(336)] };
          ut[y(572)] = !1, _0x259849[y(363)](ut);
        } else return;
      const be = wt[D[y(574)]], se = a[y(585)], Ne = h[y(585)], ie = se[y(275) + y(371) + "t"](), Be = Ne[y(275) + y(371) + "t"](), xe = 5;
      let ye, nt;
      const Wt = ie[y(453)] - Be[y(453)], xn = ie[y(576)] - Be[y(576)];
      if (D[y(574)][y(323)](y(309))) {
        const { touches: He, changedTouches: je } = D, ut = He[0] ?? je[0];
        ye = ut[y(526)], nt = ut[y(319)];
      } else D[y(574)][y(323)](y(278)) && (y(562) !== y(536) ? (ye = D[y(559)], nt = D[y(405)]) : _0x48fa0e[y(297) + y(300)](y(337), _0x47630a));
      if (be == wt[y(372)])
        if (y(505) === y(505)) {
          s[y(363)]({ ...s[y(336)], isDown: !0 }), u[y(585)].x = ye - Be[y(451)], u[y(585)].y = nt - Be[y(565)];
          const He = {};
          He[y(429)] = 1, He[y(411)] = y(558);
          const je = { ...b, ...He };
          O(je), x(performance[y(521)]());
        } else _0x4b10c6[y(360)]((He) => {
          const je = y;
          _0x5d89e9[je(490) + je(410)](He, _0x590fa4);
        });
      else if (be == wt[y(477)]) {
        if (s[y(336)][y(572)] == !1) return;
        let He = ye - u[y(585)].x - ie[y(451)], je = nt - u[y(585)].y - ie[y(565)];
        const ut = Wt - xe;
        if (He < xe || He > ut || je < xe || je > xn - xe)
          if (y(318) === y(318)) {
            const Mt = {};
            Mt[y(429)] = 0.3, Mt[y(411)] = y(306);
            const qt = { ...b, ...Mt };
            O(qt), g(wt[y(516)]), s[y(363)]({ ...s[y(336)], isDown: !1 });
          } else [y(477), y(372), y(516)][y(360)]((Mt) => {
            const qt = y;
            _0x4875fb[qt(490) + qt(410)](Mt, _0x49edaf);
          });
        else Ne[y(281)][y(451)] = He + "px", Ne[y(281)][y(565)] = je + "px", f[y(585)].x = He, f[y(585)].y = je;
      } else if (be == wt[y(516)]) {
        const He = performance[y(521)]() - p;
        if (v == wt[y(372)] || He < 200) {
          const Lt = {};
          Lt[y(282)] = !0, Lt[y(572)] = !1, s[y(363)]({ ...s[y(336)], ...Lt });
        } else y(304) !== y(440) ? s[y(363)]({ ...s[y(336)], isDown: !1 }) : _0x55ffb8[y(585)] = _0x439617;
        const je = {};
        je[y(429)] = 0.3, je[y(411)] = y(306);
        const ut = { ...b, ...je };
        O(ut);
      }
      g(be), Ne[y(283)]();
    } else {
      const be = { ..._0xa44712 };
      be[y(429)] = _0x322408[y(336)][y(282)] ? 1 : 0, _0x4aae1c(be);
    }
  }, Y = async (D) => {
    const y = n;
    if (y(535) === y(476)) _0x16d2c0();
    else {
      D[y(277) + y(581)]();
      const be = D[y(330)][y(362)](y(527))[y(397) + "te"](y(343));
      if (be === y(496))
        y(307) !== y(580) ? mu() ? pS() : hS(r) : _0x5bfe42 && _0x3faf72[y(297) + y(300)](y(337), _0x55b80d);
      else {
        const se = {};
        se[y(387)] = y(554) + y(556), se[y(575)] = be, se[y(444)] = "";
        const Ne = se;
        be === y(482) && (y(514) === y(299) ? _0x56c576[y(490) + y(410)](y(337), _0x53a073) : Ne[y(444)] = await navigator[y(391)][y(369)]()), be === y(452) && (Ne[y(390)] = y(422) + "py"), i(Ma, Ne);
      }
      s[y(363)]({ ...s[y(336)], showMenu: !1 }), S[y(585)][y(283)]();
    }
  }, K = (D) => {
    const y = mu();
    i(aS, y);
  };
  Ye(() => {
    requestAnimationFrame(() => {
      const D = Fr, y = { ...j };
      y[D(429)] = s[D(336)][D(282)] ? 1 : 0, z(y);
    });
  }, [s]), Ye(() => {
    const D = n, y = a[D(585)], be = [D(496) + D(448), D(394) + D(545) + "ge", D(290) + D(327), D(298) + D(569)];
    return y && be[D(360)]((se) => {
      const Ne = D;
      y[Ne(490) + Ne(410)](se, K);
    }), () => {
      const se = D;
      if (se(374) !== se(374)) [se(477), se(372), se(516)][se(360)]((Ne) => {
        const ie = se;
        _0x50cd70[ie(297) + ie(300)](Ne, _0x2d5bed);
      });
      else if (y)
        if (se(578) === se(578)) y[se(297) + se(300)](se(337), K);
        else {
          const Ne = _0x43b454[se(521)]() - _0x548008;
          if (_0x4fbaf9 == _0x2d616b[se(372)] || Ne < 200) {
            const xe = {};
            xe[se(282)] = !0, xe[se(572)] = !1;
            const ye = { ..._0x361faf[se(336)], ...xe };
            _0x4946a4[se(363)](ye);
          } else {
            const xe = { ..._0x3827db[se(336)] };
            xe[se(572)] = !1, _0x2b7785[se(363)](xe);
          }
          const ie = {};
          ie[se(429)] = 0.3, ie[se(411)] = se(306);
          const Be = { ..._0x1e4776, ...ie };
          _0x2c55c1(Be);
        }
    };
  }, []), Ye(() => {
    const D = n, y = h[D(585)], be = S[D(585)];
    if (be && (D(487) === D(487) ? be[D(490) + D(410)](D(337), Y) : _0x1d8a35(_0x5c5b6a)), y)
      if (D(426) === D(426)) {
        const se = {};
        se[D(340)] = !1;
        const Ne = se;
        if (o)
          if (D(383) === D(510)) {
            const ie = { ..._0x267a19[D(336)] };
            ie[D(572)] = !1, _0x1453b1[D(363)](ie);
          } else y[D(490) + D(410)](D(529), B, Ne), y[D(490) + D(410)](D(342), B, Ne), y[D(490) + D(410)](D(401), B);
        else [D(477), D(372), D(516)][D(360)]((ie) => {
          const Be = D;
          y[Be(490) + Be(410)](ie, B);
        });
        return () => {
          const ie = D;
          if (be && (ie(361) !== ie(361) ? [ie(529), ie(342), ie(401)][ie(360)]((Be) => {
            const xe = ie;
            _0x29b03c[xe(297) + xe(300)](Be, _0x1b1a86);
          }) : be[ie(297) + ie(300)](ie(337), Y)), y)
            if (o) ie(466) !== ie(563) ? [ie(529), ie(342), ie(401)][ie(360)]((Be) => {
              const xe = ie;
              y[xe(297) + xe(300)](Be, B);
            }) : _0x54552c(_0x388725);
            else if (ie(568) === ie(286)) {
              const { touches: Be, changedTouches: xe } = _0x1ba018, ye = Be[0] ?? xe[0];
              _0x1b04de = ye[ie(526)], _0x1ce948 = ye[ie(319)];
            } else [ie(477), ie(372), ie(516)][ie(360)]((Be) => {
              const xe = ie;
              xe(441) !== xe(465) ? y[xe(297) + xe(300)](Be, B) : (_0x336cfa[xe(281)][xe(451)] = _0xbda819 + "px", _0x288400[xe(281)][xe(565)] = _0xa5a6cd + "px", _0x5d71cb[xe(585)].x = _0x34ffd4, _0x92bb1e[xe(585)].y = _0x5e410b);
            });
        };
      } else _0x135334(() => {
        const se = D, Ne = { ..._0x136216 };
        Ne[se(429)] = _0x19e75b[se(336)][se(282)] ? 1 : 0, _0x5eb699(Ne);
      });
  }, [o, B]);
  const k = () => {
    const D = n;
    if (D(481) !== D(513)) {
      const y = h[D(585)];
      y[D(281)][D(453)] = U[D(585)] != D(509) ? D(415) : "", y[D(281)][D(576)] = U[D(585)] == D(509) ? D(415) : "", y[D(281)][D(380)] = D(335), y[D(281)][D(565)] = D(504), y[D(281)][D(451)] = "";
    } else _0x36482f[D(490) + D(410)](_0x5571fe, _0x2bc49b);
  };
  Tu(t, () => ({ fixTouch: (D) => {
    const y = n;
    if (D)
      if (y(396) !== y(396)) {
        const be = _0x3574f3[y(585)];
        be[y(281)][y(453)] = _0x3f9305[y(585)] != y(509) ? y(415) : "", be[y(281)][y(576)] = _0x4bc289[y(585)] == y(509) ? y(415) : "", be[y(281)][y(380)] = y(335), be[y(281)][y(565)] = y(504), be[y(281)][y(451)] = "";
      } else U[y(585)] = D;
    k();
  }, setFullscreen: (D) => {
    const y = n;
    y(446) === y(446) ? J(D) : (_0x5b177c && (_0xeeb671[y(585)] = _0x3f3df9), _0x307e13());
  } }));
  const R = {};
  R[n(486)] = n(367) + n(542) + "1)";
  const P = {};
  P.d = ne ? n(312) + n(392) + n(560) + n(503) + n(461) + n(311) + n(287) : n(433) + n(439) + n(463) + n(442) + n(402) + n(320) + n(366);
  const L = {};
  L[n(543)] = n(533);
  const H = {};
  H[n(486)] = n(367) + n(542) + "1)";
  const F = {};
  F.d = n(493) + n(289) + n(467) + n(512) + n(436) + n(537) + n(296) + n(293) + n(321) + n(464) + n(443) + n(485) + n(375) + n(445) + n(334) + n(517) + n(423) + n(384) + n(468) + n(577) + n(357);
  const X = {};
  X.d = n(301) + n(399) + n(358);
  const te = {};
  te[n(543)] = n(427);
  const Z = {};
  Z[n(486)] = n(367) + n(542) + "1)";
  const ce = {};
  ce.d = n(348) + n(534) + n(511) + n(530) + n(273) + n(324) + n(512) + n(436) + n(484) + n(296) + n(555) + n(296) + n(302) + n(279) + n(567) + n(500) + n(437) + n(435) + n(583) + n(498) + n(365) + n(582) + n(346) + n(333);
  const le = {};
  le[n(543)] = n(566);
  const ue = {};
  ue[n(486)] = n(367) + n(542) + "1)";
  const _e = {};
  _e.d = n(544) + n(539) + n(436) + n(403) + n(296) + n(293) + n(321) + n(553) + n(500) + n(497) + n(538) + n(418) + n(382);
  const me = {};
  me.cx = n(409), me.cy = "18", me.r = "1";
  const Me = {};
  Me[n(543)] = n(c ? 378 : 548);
  const ke = {};
  ke[n(486)] = n(367) + n(542) + "1)";
  const N = {};
  N.d = n(350) + n(552) + n(571) + n(458) + n(430) + n(325) + n(339) + n(413) + n(355) + n(531) + n(522) + n(471);
  const Q = {};
  Q.d = n(532) + n(370) + n(438) + n(501) + n(519) + n(364) + n(540) + n(393) + n(395) + n(470) + n(450) + n(546) + n(523) + n(373) + n(308) + n(284) + n(549) + n(368) + n(305) + n(491) + n(276) + n(376) + n(274) + n(478) + n(404) + n(475) + n(455) + n(460) + n(421) + n(414) + n(352) + n(400) + n(561) + n(472) + n(359) + n(349) + n(341) + n(347) + n(428);
  const T = {};
  T[n(543)] = n(291);
  const $ = {};
  $[n(486)] = n(367) + n(542) + "1)";
  const A = {};
  A.d = n(507) + n(332) + n(285) + n(295) + n(488) + n(345) + n(524) + n(449) + n(314) + n(313) + n(579) + n(480) + n(356) + n(354) + n(431) + n(551) + n(424) + n(386) + n(479) + n(385) + n(381) + n(454) + n(508) + n(570) + n(315) + n(432);
  const re = {};
  re[n(543)] = n(462);
  const Oe = {};
  Oe[n(486)] = n(367) + n(542) + "1)";
  const fe = {};
  fe.d = n(292) + n(459) + n(584) + n(525);
  const Je = {};
  Je[n(543)] = n(338);
  const ze = {};
  ze[n(486)] = n(367) + n(542) + "1)";
  const Ie = {};
  Ie.d = n(389) + n(408) + n(317) + n(419) + n(316) + n(303) + n(494) + n(573) + n(329);
  const Qe = {};
  Qe[n(543)] = n(294);
  const dt = {};
  dt[n(486)] = n(367) + n(542) + "1)";
  const lt = {};
  lt.d = n(322) + n(469) + n(528) + n(420) + n(345) + n(434) + n(564) + n(288) + n(557);
  const Vt = {};
  return Vt[n(543)] = n(425), ee.jsxs(ee.Fragment, { children: [s[n(336)][n(282)] ? ee.jsxs(uS, { id: n(489) + n(417) + r, style: j, ref: S, children: [ee.jsxs(Ut, { "data-id": n(496), children: [ee.jsx(n(506), { xmlns: n(407) + n(398) + n(457), width: "28", height: "28", viewBox: n(412), style: R, children: ee.jsx(n(310), P) }), ee.jsx(Xt, L)] }), ee.jsxs(Ut, { "data-id": n(452), children: [ee.jsxs(n(506), { xmlns: n(407) + n(398) + n(457), width: "28", height: "28", viewBox: n(412), style: H, children: [ee.jsx(n(310), F), ee.jsx(n(310), X)] }), ee.jsx(Xt, te)] }), ee.jsxs(Ut, { "data-id": n(482), children: [ee.jsx(n(506), { xmlns: n(407) + n(398) + n(457), width: "28", height: "28", viewBox: n(412), style: Z, children: ee.jsx(n(310), ce) }), ee.jsx(Xt, le)] }), ee.jsxs(Ut, { "data-id": n(499), children: [ee.jsxs(n(506), { xmlns: n(407) + n(398) + n(457), width: "28", height: "28", viewBox: n(412), style: ue, children: [ee.jsx(n(310), _e), ee.jsx(n(377), me)] }), ee.jsx(Xt, Me)] }), ee.jsxs(Ut, { "data-id": n(388), children: [ee.jsxs(n(506), { xmlns: n(407) + n(398) + n(457), width: "25", height: "25", viewBox: n(412), style: ke, children: [ee.jsx(n(310), N), ee.jsx(n(310), Q)] }), ee.jsx(Xt, T)] }), ee.jsxs(Ut, { "data-id": n(280), children: [ee.jsx(n(506), { xmlns: n(407) + n(398) + n(457), width: "28", height: "28", viewBox: n(412), style: $, children: ee.jsx(n(310), A) }), ee.jsx(Xt, re)] }), ee.jsxs(Ut, { "data-id": n(326), children: [ee.jsx(n(506), { xmlns: n(407) + n(398) + n(457), width: "28", height: "28", viewBox: n(412), style: Oe, children: ee.jsx(n(310), fe) }), ee.jsx(Xt, Je)] }), ee.jsxs(Ut, { "data-id": n(379), children: [ee.jsx(n(506), { xmlns: n(407) + n(398) + n(457), width: "28", height: "28", viewBox: n(412), style: ze, children: ee.jsx(n(310), Ie) }), ee.jsx(Xt, Qe)] }), ee.jsxs(Ut, { "data-id": n(344), children: [ee.jsx(n(506), { xmlns: n(407) + n(398) + n(457), width: "28", height: "28", viewBox: n(412), style: dt, children: ee.jsx(n(310), lt) }), ee.jsx(Xt, Vt)] })] }) : null, ee.jsx(dS, { id: n(489) + n(518) + "s_" + r, className: n(520), ref: C, style: b, children: ee.jsx(fS, { src: lS, className: n(520), id: n(489) + n(351) + r, alt: n(495), ref: h, draggable: !1 }) })] });
}), Xe = nr;
(function(e, t) {
  const n = nr, r = e();
  for (; ; )
    try {
      if (parseInt(n(210)) / 1 * (-parseInt(n(217)) / 2) + parseInt(n(201)) / 3 + parseInt(n(206)) / 4 + -parseInt(n(223)) / 5 * (parseInt(n(156)) / 6) + parseInt(n(171)) / 7 * (parseInt(n(196)) / 8) + -parseInt(n(186)) / 9 + -parseInt(n(160)) / 10 * (-parseInt(n(182)) / 11) === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ci, 782793);
function nr(e, t) {
  const n = ci();
  return nr = function(r, o) {
    return r = r - 151, n[r];
  }, nr(e, t);
}
var vu, bu, yu, Su, Cu, wu, Eu, _u, Ou;
Ou = Xe(179) + Xe(198), _u = Xe(162) + "th", Eu = Xe(157) + Xe(180), wu = Xe(185), Cu = Xe(190) + "ta", Su = Xe(211) + "er", yu = Xe(207), bu = Xe(187) + Xe(224), vu = Xe(161);
class gS {
  constructor(t, n, r, o, i, s) {
    qe(this, Ou, (t) => {
      const n = Xe;
      if (t) {
        const r = window[n(175) + "t"] + 10, o = this[n(162) + "th"](null, this[n(154)][n(218)], this[n(154)][n(203)], r, r);
        this[n(218)] = o[n(218)], this[n(203)] = o[n(203)];
      } else this[n(218)] = this[n(154)][n(218)], this[n(203)] = this[n(154)][n(203)];
    });
    qe(this, _u, (t, n, r, o, i) => {
      const s = Xe;
      let a;
      if (t && o > this[s(176)] && r > n) {
        if (s(208) === s(208)) i = this[s(176)];
        else if (_0x1a3790[_0x303466] === 0 && _0x2d9c57[_0x145b1d + 1] === 0 && _0x599466[_0x482fe5 + 2] === 1)
          return (_0x11083d[_0x373547 + 3] & 31) === 5;
      }
      return i && (s(170) !== s(212) ? (a = i / n * r, a > o && (i = o / r * n, a = o / n * n)) : this[s(185)](_0x5dab7a[s(202)], _0x2b7009[s(158) + "t"])), { width: Math[s(188)](i), height: Math[s(188)](a) };
    });
    qe(this, Eu, (t) => {
      const n = Xe;
      this[n(177) + "n"] = t, this[n(152)] && screen[n(177) + "n"][n(221)](t);
    });
    qe(this, wu, (t, n) => {
      var a;
      const r = Xe, o = this[r(152)] == !0 ? window[r(175) + "t"] - 12 : window[r(175) + "t"] - 50, i = this[r(162) + "th"](!0, t, n, o, o);
      this[r(218)] = i[r(218)], this[r(203)] = i[r(203)], !this[r(154)] && ((a = this[r(225) + "ct"]) == null || a.call(this, !0));
      const s = {};
      s[r(218)] = i[r(218)], s[r(203)] = i[r(203)], this[r(154)] = s;
    });
    qe(this, Cu, (t) => {
      const n = Xe, r = t instanceof Uint8Array ? t : new Uint8Array(t);
      this[n(168)] = r;
    });
    qe(this, Su, () => {
      const t = Xe, n = new VideoDecoder({ output: async (o) => {
        const i = nr;
        if (i(200) === i(197)) {
          let s;
          return _0x58441c && _0x4d8a9b > this[i(176)] && _0x40fd5a > _0xa99c56 && (_0x208d1e = this[i(176)]), _0x308a05 && (s = _0x45bd0b / _0x4380f2 * _0x561743, s > _0x51ef4a && (_0x5c6d07 = _0xb05cf / _0x289591 * _0x3a0f37, s = _0x35a913 / _0xe827ee * _0x51e6ad)), { width: _0x272e24[i(188)](_0x15b0b3), height: _0x36dfc5[i(188)](s) };
        } else {
          const s = await createImageBitmap(o);
          (!this[i(218)] || !this[i(203)]) && this[i(185)](o[i(202)], o[i(158) + "t"]), this[i(172)][i(181)](0, 0, this[i(218)], this[i(203)]), this[i(177) + "n"] == i(192) ? (this[i(205)][i(218)] = this[i(203)], this[i(205)][i(203)] = this[i(218)], this[i(172)][i(151)](0, this[i(218)]), this[i(172)][i(169)](Math.PI / 2), this[i(172)][i(193)](-1, -1), this[i(172)][i(167)](s, 0, 0, this[i(218)], this[i(203)])) : (this[i(205)][i(218)] = this[i(218)], this[i(205)][i(203)] = this[i(203)], this[i(172)][i(167)](s, 0, 0, this[i(218)], this[i(203)])), s[i(204)](), o[i(204)]();
        }
      }, error: (o) => console[t(184)](t(174) + t(153), o) }), r = {};
      return r[t(173)] = this[t(173)], r[t(195) + t(209)] = this[t(195) + t(209)], r[t(159) + t(178)] = !0, n[t(199)](r), n;
    });
    qe(this, yu, (t) => {
      const n = Xe;
      for (let r = 0; r <= t[n(163)] - 4; r++)
        if (t[r] === 0 && t[r + 1] === 0 && t[r + 2] === 0 && t[r + 3] === 1) {
          if (n(155) === n(155))
            return (t[r + 4] & 31) === 5;
          this[n(205)][n(218)] = this[n(218)], this[n(205)][n(203)] = this[n(203)], this[n(172)][n(167)](_0x4311e6, 0, 0, this[n(218)], this[n(203)]);
        }
      for (let r = 0; r <= t[n(163)] - 3; r++)
        if (t[r] === 0 && t[r + 1] === 0 && t[r + 2] === 1) {
          if (n(219) !== n(214))
            return (t[r + 3] & 31) === 5;
          _0x4f319e = this[n(176)];
        }
      return !1;
    });
    qe(this, bu, (t, n) => {
      const r = Xe, o = Array[r(213)](t)[r(215)](Array[r(213)](n));
      return new Uint8Array(o);
    });
    qe(this, vu, (t) => {
      var i;
      const n = Xe;
      if (!this[n(220)] || this[n(220)][n(191)] == n(204) || !this[n(168)]) return;
      let r = t instanceof Uint8Array ? t : new Uint8Array(t);
      const o = this[n(207)](r);
      o && (this[n(189)] = r), this[n(189)] && this[n(168)] && (n(194) !== n(194) ? (i = this[n(225) + "ct"]) == null || i.call(this, !0) : (!this[n(165)] && (r = this[n(187) + n(224)](this[n(168)], this[n(189)]), this[n(165)] = !0), this[n(220)][n(161)](new EncodedVideoChunk({ timestamp: performance[n(216)]() * 1e3, type: n(o ? 222 : 183), data: r }))));
    });
    const a = nr;
    this[a(205)] = t, this[a(176)] = n, this[a(152)] = r, this[a(173)] = i, this[a(195) + a(209)] = s, this[a(225) + "ct"] = o, this[a(172)] = t[a(166)]("2d"), this[a(220)] = this[a(211) + "er"](), this[a(168)] = null, this[a(189)] = null, this[a(165)] = null, this[a(218)] = null, this[a(203)] = null, this[a(154)] = null, this[a(177) + "n"] = a(164);
  }
}
function ci() {
  const e = ["een", "configure", "vWKoW", "863547qyoBBZ", "codedWidth", "height", "close", "canvas", "3874768OpvwdP", "isKeyFrame", "TYMDb", "celeration", "779237AiqFlR", "buildDecod", "UamKn", "from", "wtPTF", "concat", "now", "2RRHbeU", "width", "vWAgA", "decoder", "lock", "key", "1548795PUYBXR", "8Arrays", "setIsConne", "translate", "isMobile", "ror:", "rootSize", "wHCnu", "18gwXKpJ", "setOrienta", "codedHeigh", "optimizeFo", "60bPDORl", "decode", "resizedWid", "length", "portrait", "isPlay", "getContext", "drawImage", "videoMeta", "rotate", "NPLwi", "112ZBTqFY", "ctx", "codec", "Decoder er", "innerHeigh", "maxWidth", "orientatio", "rLatency", "setFullscr", "tion", "clearRect", "1731884LhVkPz", "delta", "error", "autoResize", "802314RXsCBU", "concatUint", "round", "iframe", "setVideoMe", "state", "landscape", "scale", "nJNEb", "hardwareAc", "189624hizUPv", "WgTCp"];
  return ci = function() {
    return e;
  }, ci();
}
function sn(e, t) {
  const n = li();
  return sn = function(r, o) {
    return r = r - 235, n[r];
  }, sn(e, t);
}
(function(e, t) {
  const n = sn, r = e();
  for (; ; )
    try {
      if (parseInt(n(242)) / 1 + parseInt(n(291)) / 2 + -parseInt(n(271)) / 3 + -parseInt(n(341)) / 4 * (parseInt(n(255)) / 5) + parseInt(n(284)) / 6 * (parseInt(n(268)) / 7) + parseInt(n(303)) / 8 * (parseInt(n(276)) / 9) + parseInt(n(286)) / 10 * (-parseInt(n(323)) / 11) === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(li, 206696);
function li() {
  const e = ["stener", "video_meta", "control", "98052eMgLRT", "height", "timeSync", "type_clien", "fWAcw", " closed co", "XjXfS", "clipboard", "COPY_TEXT", "Content-Ty", "setFullscr", "disconnect", "applicatio", "lJCes", "data", "PuOgH", "image_", "now", "userAgent", "de: ", "setVideoMe", "device_id", "SBNPO", "info", "text", "msg", "fixTouch", "reconnecti", "shbtL", "screen_mai", "join_room", "showMenu", "uuYwk", "isDown", "DLWTS", "n/json", "large", "315750CBKVTT", "screen", "EPDyA", "children", "size", "center", "error", "width", "action", "onSyncIFra", "setOrienta", "map", "connect", "10tqDgbA", "taskId", "set", "HlADE", "test", "post", "orientatio", "YgsqI", "shortcut", "middle", "msFullscre", "removeEven", "margin", "28KMOSqd", "delete", "connect_er", "229455FaPaLM", "iframe", "length", "bClgM", "password", "1364859BnJyqb", "draggable", "iting for ", "screen_", "current", "connection", "tabIndex", "Timeout wa", "595410TywDhr", "shortcutEv", "7646760URIYtO", "mozFullScr", "status", "message", "Element", "465084ZAUkWk", "fullscreen", "cJTVV", "emit", "addEventLi", "writeText", "xRbCP", "rqYhX", "XAZGY", "isMobile", "tion", "een", "8CcJnhC", "ent", "webkitFull", "CZHZi", "screenElem", "AJloD", "meta", "code", "ror", "xnyrX", "headers", "sync", "sCgbD", "passwd", "enElement", "GRAsT", "tListener", "UzJvq", "type", "MXrml", "11JVXZet", "get", "timeout", "get_video_", "onScreenEv", "response", "method", "primary", "false", "change", "eenElement", "Reconnect", "url", "value", "decode"];
  return li = function() {
    return e;
  }, li();
}
const HS = rr((e, t) => {
  const n = sn, { serve: r, dataDevice: o, maxWidth: i, showAssistive: s, showDeviceId: a, syncEvent: c, syncButton: l, codec: u, hardwareAcceleration: d } = e, f = o[n(362)], v = /iPhone|iPad|iPod|Android/i[n(259)](navigator[n(359)]), g = n(340), p = Ee(null), x = Ee(null), C = Ee(null), S = Ee(null), h = Ee(null), [E, b] = ft(null), [O, _] = ft(null), j = {};
  j[n(236)] = !1, j[n(238)] = !1;
  const [z, U] = ft(j), [ne, J] = ft(null), [B, Y] = ft(null), K = n(357) + f, k = n(279) + f, R = n(370) + "n_" + f, [P, L] = ft([]), H = Ee(/* @__PURE__ */ new Map());
  Ye(() => {
    _(a);
  }, [a]);
  const F = (N) => {
    const Q = n;
    Q(244) === Q(354) ? _0x395291(_0x4431ff) : L((T) => [...T, N]);
  }, X = (N) => {
    const Q = n;
    if (Q(258) === Q(258)) p[Q(280)][Q(294)](Q(289), N), c == null || c(N);
    else {
      const T = {};
      T[Q(250)] = Q(326) + Q(309), _0x5a5eba[Q(294)](Q(339), T);
    }
  };
  Tu(t, () => ({ api: async function(N, Q = 5e3) {
    return new Promise((T, $) => {
      const A = sn, re = setTimeout(() => {
        const Oe = sn;
        H[Oe(280)][Oe(269)](N[Oe(256)]);
        const fe = {};
        fe[Oe(250)] = N[Oe(250)], fe[Oe(256)] = N[Oe(256)], fe[Oe(288)] = !1, fe[Oe(289)] = Oe(283) + Oe(278) + Oe(328), $(fe);
      }, Q);
      H[A(280)][A(257)](N[A(256)], (Oe) => {
        const fe = A;
        fe(345) === fe(345) ? (clearTimeout(re), T(Oe)) : _0x17274c == null || _0x17274c(_0x22db09[fe(362)]);
      }), p[A(280)][A(294)](A(289), N);
    });
  }, sync: function(N) {
    const Q = n;
    Q(299) !== Q(306) ? p[Q(280)][Q(294)](Q(289), N) : (_0x1943cd(_0x5d42f8), _0x319b5a(_0x5db72d));
  }, getDeviceId: function() {
    return o[n(362)];
  } })), Ye(() => {
    (async () => {
      const N = sn;
      try {
        const Q = {};
        Q[N(350) + "pe"] = N(353) + N(240);
        const T = {};
        T[N(362)] = o[N(362)], T[N(275)] = o[N(316)];
        const $ = {};
        $[N(335)] = r, $[N(329)] = N(260), $[N(325)] = 1e4, $[N(313)] = Q, $[N(355)] = T;
        const A = $, re = await tS(A);
        b(re[N(355)]);
      } catch (Q) {
        const T = {};
        T[N(366)] = Q, T[N(321)] = N(248), F(T);
      }
    })();
  }, [B]), Ye(() => {
    const N = n;
    if (p[N(280)] || !E) return;
    const Q = {};
    Q[N(368) + "on"] = !1;
    const T = To(E, Q);
    return T.on(N(254), () => {
      const $ = N;
      if ($(293) !== $(312)) {
        const A = {};
        A[$(250)] = $(254), A[$(344) + "t"] = g, A[$(362)] = o[$(362)], A[$(300)] = v, A[$(316)] = o[$(316)], T[$(294)]($(235), A);
      } else _0x2cde76[$(280)][$(294)]($(289), { action: $(343), ts: _0x44e059[$(358)]() });
    }), T.on(N(235), ($) => {
      const A = N;
      if ($[A(288)] == !0) {
        p[A(280)] = T, T[A(294)](A(289), { action: A(343), ts: Date[A(358)]() });
        const re = {};
        re[A(250)] = A(327) + A(304), T[A(294)](A(289), re);
      } else {
        const re = {};
        re[A(366)] = $[A(366)], re[A(321)] = A(248), F(re);
      }
    }), T.on(N(243), ($) => {
      const A = N;
      h[A(280)][A(337)]($);
    }), T.on(N(339), ($) => {
      const A = N;
      if (A(298) === A(298))
        if ($)
          if (A(239) !== A(369)) {
            if (h[A(280)][A(361) + "ta"]($), !h[A(280)][A(272)]) {
              const re = {};
              re[A(250)] = A(251) + "me", T[A(294)](A(289), re);
            }
          } else _0x4ec9ed((re) => [...re, _0x1baf10]);
        else {
          const re = {};
          re[A(250)] = A(326) + A(309), T[A(294)](A(339), re);
        }
      else {
        const re = _0x55eca8[A(292) + A(290)] || _0x220af9[A(305) + A(307) + A(304)] || _0x2c6dbd[A(287) + A(333)] || _0x4a1007[A(265) + A(317)];
        _0x2633bb[A(280)][A(351) + A(302)](!!re), _0x551600[A(280)][A(351) + A(302)](!!re), _0x5b2ce3[A(280)][A(367)]();
      }
    }), T.on(N(289), ($) => {
      const A = N;
      if (($[A(250)] == A(349) || $[A(250)] == A(285) + A(304)) && $[A(365)][A(273)] > 0 ? navigator[A(348)][A(296)]($[A(365)]) : $[A(250)] == A(261) + "n" && (A(356) === A(356) ? (h[A(280)][A(252) + A(301)]($[A(336)]), S[A(280)][A(367)]($[A(336)])) : _0xb2c9ac(_0x22f933)), $[A(256)]) {
        const re = H[A(280)][A(324)]($[A(256)]);
        if (re) {
          if (A(347) !== A(347)) return _0x191459[A(362)];
          re($), H[A(280)][A(269)]($[A(256)]);
        }
      }
    }), T.on(N(270) + N(311), ($) => {
      const A = N, re = {};
      re[A(366)] = $, re[A(321)] = A(248), F(re);
    }), T.on(N(352), ($) => {
      const A = N, re = {};
      re[A(366)] = A(281) + A(346) + A(360) + $[A(310)], re[A(321)] = A(364), F(re);
    }), () => {
      T && T[N(352)]();
    };
  }, [E]), Ye(() => {
    const N = n;
    if (N(318) === N(297)) _0x25e7d2[N(352)]();
    else {
      const Q = C[N(280)];
      Q && (h[N(280)] = new gS(Q, i, v, J, u, d));
    }
  }, [B]), Ye(() => {
    const N = n;
    if (N(363) === N(363)) {
      const Q = () => {
        const T = N;
        if (T(308) !== T(308)) {
          const $ = _0x5eb3a4[T(280)];
          $ && (_0x43224d[T(280)] = new _0x35eae7($, _0x178b63, _0x17a6b6, _0x32bc08, _0x32e14e, _0x8efcbc));
        } else {
          const $ = document[T(292) + T(290)] || document[T(305) + T(307) + T(304)] || document[T(287) + T(333)] || document[T(265) + T(317)];
          h[T(280)][T(351) + T(302)](!!$), S[T(280)][T(351) + T(302)](!!$), S[T(280)][T(367)]();
        }
      };
      return document[N(295) + N(338)](N(292) + N(332), Q), () => {
        const T = N;
        document[T(266) + T(319)](T(292) + T(332), Q);
      };
    } else _0x34fba1(!_0x123282);
  }, [B]), Ye(() => {
    const N = n;
    let Q;
    if (!p[N(280)]) {
      if (N(315) === N(315)) return;
      {
        const T = {};
        T[N(366)] = N(281) + N(346) + N(360) + _0x221444[N(310)], T[N(321)] = N(364), _0x33e5ac(T);
      }
    }
    return Q = setInterval(() => {
      const T = N;
      p[T(280)][T(294)](T(289), { action: T(343), ts: Date[T(358)]() });
    }, 3e4), () => clearInterval(Q);
  }, [ne]);
  const te = {};
  te[n(245)] = o[n(362)];
  const Z = {};
  Z[n(246)] = n(241);
  const ce = {};
  ce[n(246)] = n(241);
  const le = {};
  le[n(246)] = n(241);
  const ue = {};
  ue[n(342)] = 0, ue[n(249)] = 0;
  const _e = {};
  _e[n(324)] = z, _e[n(257)] = U;
  const me = {};
  me.id = K, me[n(282)] = "0", me[n(277)] = n(331);
  const Me = {};
  Me[n(267)] = 5;
  const ke = {};
  return ke[n(267)] = 10, ee.jsxs(fp, { id: R, children: [O && ee.jsx(xp, { children: ee.jsx(pp, te) }), P[n(273)] == 0 ? ee.jsxs(ee.Fragment, { children: [!ne && ee.jsxs(x0, { align: n(247), gap: n(264), children: [ee.jsx(Nr, Z), ee.jsx(Nr, ce), ee.jsx(Nr, le)] }), ee.jsxs(dp, { ref: x, id: k, style: ne ? {} : ue, children: [s ? ee.jsx(xS, { status: _e, ref: S, canvasRef: C, displayId: f, isMobile: v, isShowDeviceId: O, onSenData: (N, Q) => {
    const T = n;
    if (N === Ma && Q[T(263)] === T(362))
      if (T(274) !== T(237)) _(!O);
      else return new _0xdfbf4f(($, A) => {
        const re = T, Oe = _0x105844(() => {
          const fe = sn;
          _0x3e96f1[fe(280)][fe(269)](_0x9eb94c[fe(256)]);
          const Je = {};
          Je[fe(250)] = _0x32769b[fe(250)], Je[fe(256)] = _0x30e052[fe(256)], Je[fe(288)] = !1, Je[fe(289)] = fe(283) + fe(278) + fe(328), A(Je);
        }, _0x20e1a5);
        _0x592dc3[re(280)][re(257)](_0xd51d6b[re(256)], (fe) => {
          _0x47d478(Oe), $(fe);
        }), _0x5752e5[re(280)][re(294)](re(289), _0x248045);
      });
    else N === Ma && Q[T(263)] === T(314) ? T(320) !== T(320) ? _0x1522da(_0x302142) : l == null || l(o[T(362)]) : X(Q);
  } }) : null, ee.jsx(cS, { canvasContent: me, canvasRef: C, isMobile: v, assistive: z, onRemoteEvent: (N, Q) => {
    const T = n;
    if (T(322) !== T(262))
      if (N === W0) {
        const $ = { ...z };
        $[T(236)] = !1, U($);
      } else X(Q);
    else {
      const $ = { ..._0x2920c6 };
      $[T(236)] = !1, _0x1a7004($);
    }
  } })] })] }) : ee.jsxs(ee.Fragment, { children: [P == null ? void 0 : P[n(253)]((N, Q) => ee.jsx(Kd, { style: Me, message: N[n(366)], type: N[n(321)], showIcon: !0, closable: !0 }, Q)), ee.jsx(Bi, { style: ke, type: n(330), icon: ee.jsx(ff, {}), onClick: () => {
    const N = n;
    p[N(280)] = null, b(null), L([]), J(null), Y(Date[N(358)]());
  }, children: n(334) })] })] });
});
function Da(e, t) {
  var n = ui();
  return Da = function(r, o) {
    r = r - 362;
    var i = n[r];
    return i;
  }, Da(e, t);
}
(function(e, t) {
  for (var n = Da, r = e(); ; )
    try {
      var o = -parseInt(n(363)) / 1 * (-parseInt(n(366)) / 2) + -parseInt(n(364)) / 3 + parseInt(n(369)) / 4 + parseInt(n(365)) / 5 + -parseInt(n(362)) / 6 + -parseInt(n(367)) / 7 + parseInt(n(368)) / 8;
      if (o === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ui, 316633);
function ui() {
  var e = ["13779Mjqxlf", "501005YcUqts", "456146razPcP", "11977BZIXYr", "1836456qWRMBZ", "1070664pNiTXR", "3015360yILDaG", "1TBXjQa"];
  return ui = function() {
    return e;
  }, ui();
}
export {
  HS as ViewRP
};
