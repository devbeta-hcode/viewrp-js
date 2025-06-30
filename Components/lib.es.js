var X0 = Object.defineProperty;
var K0 = (e, t, n) => t in e ? X0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ue = (e, t, n) => K0(e, typeof t != "symbol" ? t + "" : t, n);
import * as w from "react";
import q, { useDebugValue as Sc, createElement as Z0, useRef as Oe, useContext as _t, createContext as di, useEffect as Xe, isValidElement as J0, version as Q0, useLayoutEffect as eh, forwardRef as rr, useState as ut, useMemo as kr, Children as th, useImperativeHandle as Tu } from "react";
import * as Ru from "react-dom";
import Cc from "react-dom";
var Er = zo;
(function(e, t) {
  for (var n = zo, r = e(); ; )
    try {
      var o = -parseInt(n(339)) / 1 * (-parseInt(n(342)) / 2) + parseInt(n(370)) / 3 * (parseInt(n(359)) / 4) + -parseInt(n(343)) / 5 * (-parseInt(n(355)) / 6) + parseInt(n(369)) / 7 + parseInt(n(344)) / 8 + -parseInt(n(358)) / 9 + parseInt(n(357)) / 10 * (-parseInt(n(356)) / 11);
      if (o === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Ho, 941142);
typeof globalThis !== Er(351) || typeof window !== Er(351) || (typeof global !== Er(351) ? global : Er(351));
function nh(e) {
  var t = Er;
  return e && e[t(367)] && Object[t(350)][t(349) + t(347)][t(348)](e, t(341)) ? e[t(341)] : e;
}
function zo(e, t) {
  var n = Ho();
  return zo = function(r, o) {
    r = r - 338;
    var i = n[r];
    return i;
  }, zo(e, t);
}
function Ho() {
  var e = ["31064590XbWGmI", "9544707SsPhWY", "3218732PPbNfJ", "constructo", "TmjjN", "getOwnProp", "length", "ertyDescri", "euDSD", "ptor", "__esModule", "defineProp", "4256917EfVnfv", "6zVmGJx", "forEach", "QTewH", "function", "value", "4rCidNc", "construct", "default", "225122qWaBMq", "65200tJmDvB", "13055224SFJiTv", "apply", "PeVAb", "erty", "call", "hasOwnProp", "prototype", "undefined", "get", "tLmDs", "keys", "372pkDXwN", "11CZVcsy"];
  return Ho = function() {
    return e;
  }, Ho();
}
var Qr = { exports: {} }, xr = {};
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
    var e = q, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g = Symbol.iterator, p = "@@iterator";
    function x(m) {
      if (m === null || typeof m != "object")
        return null;
      var M = g && m[g] || m[p];
      return typeof M == "function" ? M : null;
    }
    var S = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(m) {
      {
        for (var M = arguments.length, W = new Array(M > 1 ? M - 1 : 0), ie = 1; ie < M; ie++)
          W[ie - 1] = arguments[ie];
        h("error", m, W);
      }
    }
    function h(m, M, W) {
      {
        var ie = S.ReactDebugCurrentFrame, Ce = ie.getStackAddendum();
        Ce !== "" && (M += "%s", W = W.concat([Ce]));
        var Te = W.map(function(xe) {
          return String(xe);
        });
        Te.unshift("Warning: " + M), Function.prototype.apply.call(console[m], console, Te);
      }
    }
    var E = !1, y = !1, A = !1, _ = !1, j = !1, D;
    D = Symbol.for("react.module.reference");
    function G(m) {
      return !!(typeof m == "string" || typeof m == "function" || m === r || m === i || j || m === o || m === l || m === u || _ || m === v || E || y || A || typeof m == "object" && m !== null && (m.$$typeof === f || m.$$typeof === d || m.$$typeof === s || m.$$typeof === a || m.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      m.$$typeof === D || m.getModuleId !== void 0));
    }
    function oe(m, M, W) {
      var ie = m.displayName;
      if (ie)
        return ie;
      var Ce = M.displayName || M.name || "";
      return Ce !== "" ? W + "(" + Ce + ")" : W;
    }
    function ne(m) {
      return m.displayName || "Context";
    }
    function z(m) {
      if (m == null)
        return null;
      if (typeof m.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof m == "function")
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
            return ne(M) + ".Consumer";
          case s:
            var W = m;
            return ne(W._context) + ".Provider";
          case c:
            return oe(m, m.render, "ForwardRef");
          case d:
            var ie = m.displayName || null;
            return ie !== null ? ie : z(m.type) || "Memo";
          case f: {
            var Ce = m, Te = Ce._payload, xe = Ce._init;
            try {
              return z(xe(Te));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var X = Object.assign, Z = 0, I, T, R, N, $, F, Y;
    function re() {
    }
    re.__reactDisabledLog = !0;
    function J() {
      {
        if (Z === 0) {
          I = console.log, T = console.info, R = console.warn, N = console.error, $ = console.group, F = console.groupCollapsed, Y = console.groupEnd;
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
        Z++;
      }
    }
    function ae() {
      {
        if (Z--, Z === 0) {
          var m = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: X({}, m, {
              value: I
            }),
            info: X({}, m, {
              value: T
            }),
            warn: X({}, m, {
              value: R
            }),
            error: X({}, m, {
              value: N
            }),
            group: X({}, m, {
              value: $
            }),
            groupCollapsed: X({}, m, {
              value: F
            }),
            groupEnd: X({}, m, {
              value: Y
            })
          });
        }
        Z < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var le = S.ReactCurrentDispatcher, ue;
    function Ae(m, M, W) {
      {
        if (ue === void 0)
          try {
            throw Error();
          } catch (Ce) {
            var ie = Ce.stack.trim().match(/\n( *(at )?)/);
            ue = ie && ie[1] || "";
          }
        return `
` + ue + m;
      }
    }
    var ge = !1, Le;
    {
      var ke = typeof WeakMap == "function" ? WeakMap : Map;
      Le = new ke();
    }
    function pe(m, M) {
      if (!m || ge)
        return "";
      {
        var W = Le.get(m);
        if (W !== void 0)
          return W;
      }
      var ie;
      ge = !0;
      var Ce = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Te;
      Te = le.current, le.current = null, J();
      try {
        if (M) {
          var xe = function() {
            throw Error();
          };
          if (Object.defineProperty(xe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(xe, []);
            } catch (ht) {
              ie = ht;
            }
            Reflect.construct(m, [], xe);
          } else {
            try {
              xe.call();
            } catch (ht) {
              ie = ht;
            }
            m.call(xe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ht) {
            ie = ht;
          }
          m();
        }
      } catch (ht) {
        if (ht && ie && typeof ht.stack == "string") {
          for (var he = ht.stack.split(`
`), at = ie.stack.split(`
`), $e = he.length - 1, We = at.length - 1; $e >= 1 && We >= 0 && he[$e] !== at[We]; )
            We--;
          for (; $e >= 1 && We >= 0; $e--, We--)
            if (he[$e] !== at[We]) {
              if ($e !== 1 || We !== 1)
                do
                  if ($e--, We--, We < 0 || he[$e] !== at[We]) {
                    var qe = `
` + he[$e].replace(" at new ", " at ");
                    return m.displayName && qe.includes("<anonymous>") && (qe = qe.replace("<anonymous>", m.displayName)), typeof m == "function" && Le.set(m, qe), qe;
                  }
                while ($e >= 1 && We >= 0);
              break;
            }
        }
      } finally {
        ge = !1, le.current = Te, ae(), Error.prepareStackTrace = Ce;
      }
      var Mn = m ? m.displayName || m.name : "", vn = Mn ? Ae(Mn) : "";
      return typeof m == "function" && Le.set(m, vn), vn;
    }
    function k(m, M, W) {
      return pe(m, !1);
    }
    function L(m) {
      var M = m.prototype;
      return !!(M && M.isReactComponent);
    }
    function H(m, M, W) {
      if (m == null)
        return "";
      if (typeof m == "function")
        return pe(m, L(m));
      if (typeof m == "string")
        return Ae(m);
      switch (m) {
        case l:
          return Ae("Suspense");
        case u:
          return Ae("SuspenseList");
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case c:
            return k(m.render);
          case d:
            return H(m.type, M, W);
          case f: {
            var ie = m, Ce = ie._payload, Te = ie._init;
            try {
              return H(Te(Ce), M, W);
            } catch {
            }
          }
        }
      return "";
    }
    var V = Object.prototype.hasOwnProperty, O = {}, ee = S.ReactDebugCurrentFrame;
    function Q(m) {
      if (m) {
        var M = m._owner, W = H(m.type, m._source, M ? M.type : null);
        ee.setExtraStackFrame(W);
      } else
        ee.setExtraStackFrame(null);
    }
    function Me(m, M, W, ie, Ce) {
      {
        var Te = Function.call.bind(V);
        for (var xe in m)
          if (Te(m, xe)) {
            var he = void 0;
            try {
              if (typeof m[xe] != "function") {
                var at = Error((ie || "React class") + ": " + W + " type `" + xe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof m[xe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw at.name = "Invariant Violation", at;
              }
              he = m[xe](M, xe, ie, W, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch ($e) {
              he = $e;
            }
            he && !(he instanceof Error) && (Q(Ce), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ie || "React class", W, xe, typeof he), Q(null)), he instanceof Error && !(he.message in O) && (O[he.message] = !0, Q(Ce), C("Failed %s type: %s", W, he.message), Q(null));
          }
      }
    }
    var ze = Array.isArray;
    function Ne(m) {
      return ze(m);
    }
    function Qe(m) {
      {
        var M = typeof Symbol == "function" && Symbol.toStringTag, W = M && m[Symbol.toStringTag] || m.constructor.name || "Object";
        return W;
      }
    }
    function ft(m) {
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
      if (ft(m))
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qe(m)), lt(m);
    }
    var B = S.ReactCurrentOwner, b = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ve, ye;
    function _e(m) {
      if (V.call(m, "ref")) {
        var M = Object.getOwnPropertyDescriptor(m, "ref").get;
        if (M && M.isReactWarning)
          return !1;
      }
      return m.ref !== void 0;
    }
    function ce(m) {
      if (V.call(m, "key")) {
        var M = Object.getOwnPropertyDescriptor(m, "key").get;
        if (M && M.isReactWarning)
          return !1;
      }
      return m.key !== void 0;
    }
    function He(m, M) {
      typeof m.ref == "string" && B.current;
    }
    function be(m, M) {
      {
        var W = function() {
          ve || (ve = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        W.isReactWarning = !0, Object.defineProperty(m, "key", {
          get: W,
          configurable: !0
        });
      }
    }
    function Se(m, M) {
      {
        var W = function() {
          ye || (ye = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        W.isReactWarning = !0, Object.defineProperty(m, "ref", {
          get: W,
          configurable: !0
        });
      }
    }
    var Be = function(m, M, W, ie, Ce, Te, xe) {
      var he = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: m,
        key: M,
        ref: W,
        props: xe,
        // Record the component responsible for creating this element.
        _owner: Te
      };
      return he._store = {}, Object.defineProperty(he._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(he, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ie
      }), Object.defineProperty(he, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ce
      }), Object.freeze && (Object.freeze(he.props), Object.freeze(he)), he;
    };
    function vt(m, M, W, ie, Ce) {
      {
        var Te, xe = {}, he = null, at = null;
        W !== void 0 && (Vt(W), he = "" + W), ce(M) && (Vt(M.key), he = "" + M.key), _e(M) && (at = M.ref, He(M, Ce));
        for (Te in M)
          V.call(M, Te) && !b.hasOwnProperty(Te) && (xe[Te] = M[Te]);
        if (m && m.defaultProps) {
          var $e = m.defaultProps;
          for (Te in $e)
            xe[Te] === void 0 && (xe[Te] = $e[Te]);
        }
        if (he || at) {
          var We = typeof m == "function" ? m.displayName || m.name || "Unknown" : m;
          he && be(xe, We), at && Se(xe, We);
        }
        return Be(m, he, at, Ce, ie, B.current, xe);
      }
    }
    var gn = S.ReactCurrentOwner, et = S.ReactDebugCurrentFrame;
    function Fe(m) {
      if (m) {
        var M = m._owner, W = H(m.type, m._source, M ? M.type : null);
        et.setExtraStackFrame(W);
      } else
        et.setExtraStackFrame(null);
    }
    var dt;
    dt = !1;
    function en(m) {
      return typeof m == "object" && m !== null && m.$$typeof === t;
    }
    function Mt() {
      {
        if (gn.current) {
          var m = z(gn.current.type);
          if (m)
            return `

Check the render method of \`` + m + "`.";
        }
        return "";
      }
    }
    function tn(m) {
      return "";
    }
    var Wt = {};
    function jn(m) {
      {
        var M = Mt();
        if (!M) {
          var W = typeof m == "string" ? m : m.displayName || m.name;
          W && (M = `

Check the top-level render call using <` + W + ">.");
        }
        return M;
      }
    }
    function mn(m, M) {
      {
        if (!m._store || m._store.validated || m.key != null)
          return;
        m._store.validated = !0;
        var W = jn(M);
        if (Wt[W])
          return;
        Wt[W] = !0;
        var ie = "";
        m && m._owner && m._owner !== gn.current && (ie = " It was passed a child from " + z(m._owner.type) + "."), Fe(m), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', W, ie), Fe(null);
      }
    }
    function Ln(m, M) {
      {
        if (typeof m != "object")
          return;
        if (Ne(m))
          for (var W = 0; W < m.length; W++) {
            var ie = m[W];
            en(ie) && mn(ie, M);
          }
        else if (en(m))
          m._store && (m._store.validated = !0);
        else if (m) {
          var Ce = x(m);
          if (typeof Ce == "function" && Ce !== m.entries)
            for (var Te = Ce.call(m), xe; !(xe = Te.next()).done; )
              en(xe.value) && mn(xe.value, M);
        }
      }
    }
    function nn(m) {
      {
        var M = m.type;
        if (M == null || typeof M == "string")
          return;
        var W;
        if (typeof M == "function")
          W = M.propTypes;
        else if (typeof M == "object" && (M.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        M.$$typeof === d))
          W = M.propTypes;
        else
          return;
        if (W) {
          var ie = z(M);
          Me(W, m.props, "prop", ie, m);
        } else if (M.PropTypes !== void 0 && !dt) {
          dt = !0;
          var Ce = z(M);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ce || "Unknown");
        }
        typeof M.getDefaultProps == "function" && !M.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function rn(m) {
      {
        for (var M = Object.keys(m.props), W = 0; W < M.length; W++) {
          var ie = M[W];
          if (ie !== "children" && ie !== "key") {
            Fe(m), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ie), Fe(null);
            break;
          }
        }
        m.ref !== null && (Fe(m), C("Invalid attribute `ref` supplied to `React.Fragment`."), Fe(null));
      }
    }
    var pr = {};
    function Zr(m, M, W, ie, Ce, Te) {
      {
        var xe = G(m);
        if (!xe) {
          var he = "";
          (m === void 0 || typeof m == "object" && m !== null && Object.keys(m).length === 0) && (he += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var at = tn();
          at ? he += at : he += Mt();
          var $e;
          m === null ? $e = "null" : Ne(m) ? $e = "array" : m !== void 0 && m.$$typeof === t ? ($e = "<" + (z(m.type) || "Unknown") + " />", he = " Did you accidentally export a JSX literal instead of a component?") : $e = typeof m, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", $e, he);
        }
        var We = vt(m, M, W, Ce, Te);
        if (We == null)
          return We;
        if (xe) {
          var qe = M.children;
          if (qe !== void 0)
            if (ie)
              if (Ne(qe)) {
                for (var Mn = 0; Mn < qe.length; Mn++)
                  Ln(qe[Mn], m);
                Object.freeze && Object.freeze(qe);
              } else
                C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ln(qe, m);
        }
        if (V.call(M, "key")) {
          var vn = z(m), ht = Object.keys(M).filter(function(Y0) {
            return Y0 !== "key";
          }), Yi = ht.length > 0 ? "{key: someKey, " + ht.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!pr[vn + Yi]) {
            var G0 = ht.length > 0 ? "{" + ht.join(": ..., ") + ": ...}" : "{}";
            C(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Yi, vn, G0, vn), pr[vn + Yi] = !0;
          }
        }
        return m === r ? rn(We) : nn(We), We;
      }
    }
    function tt(m, M, W) {
      return Zr(m, M, W, !0);
    }
    function Jr(m, M, W) {
      return Zr(m, M, W, !1);
    }
    var Gi = Jr, Ve = tt;
    gr.Fragment = r, gr.jsx = Gi, gr.jsxs = Ve;
  }()), gr;
}
var _c;
function ih() {
  return _c || (_c = 1, process.env.NODE_ENV === "production" ? Qr.exports = rh() : Qr.exports = oh()), Qr.exports;
}
var te = ih(), pt = function() {
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
), De = "-ms-", Tr = "-moz-", Ie = "-webkit-", Pu = "comm", hi = "rule", za = "decl", lh = "@import", Iu = "@keyframes", uh = "@layer", Nu = Math.abs, Ha = String.fromCharCode, As = Object.assign;
function fh(e, t) {
  return st(e, 0) ^ 45 ? (((t << 2 ^ st(e, 0)) << 2 ^ st(e, 1)) << 2 ^ st(e, 2)) << 2 ^ st(e, 3) : 0;
}
function ku(e) {
  return e.trim();
}
function Yt(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function de(e, t, n) {
  return e.replace(t, n);
}
function yo(e, t, n) {
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
var pi = 1, Un = 1, Lu = 0, Ot = 0, Ke = 0, or = "";
function xi(e, t, n, r, o, i, s, a) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: pi, column: Un, length: s, return: "", siblings: a };
}
function on(e, t) {
  return As(xi("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function Dn(e) {
  for (; e.root; )
    e = on(e.root, { children: [e] });
  _r(e, e.siblings);
}
function hh() {
  return Ke;
}
function ph() {
  return Ke = Ot > 0 ? st(or, --Ot) : 0, Un--, Ke === 10 && (Un = 1, pi--), Ke;
}
function Pt() {
  return Ke = Ot < Lu ? st(or, Ot++) : 0, Un++, Ke === 10 && (Un = 1, pi++), Ke;
}
function _n() {
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
  for (; (Ke = _n()) && Ke < 33; )
    Pt();
  return Ts(e) > 2 || Ts(Ke) > 3 ? "" : " ";
}
function vh(e, t) {
  for (; --t && Pt() && !(Ke < 48 || Ke > 102 || Ke > 57 && Ke < 65 || Ke > 70 && Ke < 97); )
    ;
  return gi(e, bo() + (t < 6 && _n() == 32 && Pt() == 32));
}
function Rs(e) {
  for (; Pt(); )
    switch (Ke) {
      // ] ) " '
      case e:
        return Ot;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Rs(Ke);
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
function yh(e, t) {
  for (; Pt() && e + Ke !== 57; )
    if (e + Ke === 84 && _n() === 47)
      break;
  return "/*" + gi(t, Ot - 1) + "*" + Ha(e === 47 ? e : Pt());
}
function bh(e) {
  for (; !Ts(_n()); )
    Pt();
  return gi(e, Ot);
}
function Sh(e) {
  return gh(So("", null, null, null, [""], e = xh(e), 0, [0], e));
}
function So(e, t, n, r, o, i, s, a, c) {
  for (var l = 0, u = 0, d = s, f = 0, v = 0, g = 0, p = 1, x = 1, S = 1, C = 0, h = "", E = o, y = i, A = r, _ = h; x; )
    switch (g = C, C = Pt()) {
      // (
      case 40:
        if (g != 108 && st(_, d - 1) == 58) {
          yo(_ += de(Xi(C), "&", "&\f"), "&\f", Nu(l ? a[l - 1] : 0)) != -1 && (S = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        _ += Xi(C);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        _ += mh(g);
        break;
      // \
      case 92:
        _ += vh(bo() - 1, 7);
        continue;
      // /
      case 47:
        switch (_n()) {
          case 42:
          case 47:
            _r(Ch(yh(Pt(), bo()), t, n, c), c);
            break;
          default:
            _ += "/";
        }
        break;
      // {
      case 123 * p:
        a[l++] = zt(_) * S;
      // } ; \0
      case 125 * p:
      case 59:
      case 0:
        switch (C) {
          // \0 }
          case 0:
          case 125:
            x = 0;
          // ;
          case 59 + u:
            S == -1 && (_ = de(_, /\f/g, "")), v > 0 && zt(_) - d && _r(v > 32 ? Tc(_ + ";", r, n, d - 1, c) : Tc(de(_, " ", "") + ";", r, n, d - 2, c), c);
            break;
          // @ ;
          case 59:
            _ += ";";
          // { rule/at-rule
          default:
            if (_r(A = Ac(_, t, n, l, u, o, a, h, E = [], y = [], d, i), i), C === 123)
              if (u === 0)
                So(_, t, A, A, E, i, d, a, y);
              else
                switch (f === 99 && st(_, 3) === 110 ? 100 : f) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    So(e, A, A, r && _r(Ac(e, A, A, 0, 0, o, a, h, o, E = [], d, y), y), o, y, d, a, r ? E : y);
                    break;
                  default:
                    So(_, A, A, A, [""], y, 0, a, y);
                }
        }
        l = u = v = 0, p = S = 1, h = _ = "", d = s;
        break;
      // :
      case 58:
        d = 1 + zt(_), v = g;
      default:
        if (p < 1) {
          if (C == 123)
            --p;
          else if (C == 125 && p++ == 0 && ph() == 125)
            continue;
        }
        switch (_ += Ha(C), C * p) {
          // &
          case 38:
            S = u > 0 ? 1 : (_ += "\f", -1);
            break;
          // ,
          case 44:
            a[l++] = (zt(_) - 1) * S, S = 1;
            break;
          // @
          case 64:
            _n() === 45 && (_ += Xi(Pt())), f = _n(), u = d = zt(h = _ += bh(bo())), C++;
            break;
          // -
          case 45:
            g === 45 && zt(_) == 2 && (p = 0);
        }
    }
  return i;
}
function Ac(e, t, n, r, o, i, s, a, c, l, u, d) {
  for (var f = o - 1, v = o === 0 ? i : [""], g = ju(v), p = 0, x = 0, S = 0; p < r; ++p)
    for (var C = 0, h = qn(e, f + 1, f = Nu(x = s[p])), E = e; C < g; ++C)
      (E = ku(x > 0 ? v[C] + " " + h : de(h, /&\f/g, v[C]))) && (c[S++] = E);
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
      return Ie + "print-" + e + e;
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
      return Ie + e + e;
    // tab-size
    case 4789:
      return Tr + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Ie + e + Tr + e + De + e + e;
    // writing-mode
    case 5936:
      switch (st(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return Ie + e + De + de(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return Ie + e + De + de(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return Ie + e + De + de(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return Ie + e + De + e + e;
    // order
    case 6165:
      return Ie + e + De + "flex-" + e + e;
    // align-items
    case 5187:
      return Ie + e + de(e, /(\w+).+(:[^]+)/, Ie + "box-$1$2" + De + "flex-$1$2") + e;
    // align-self
    case 5443:
      return Ie + e + De + "flex-item-" + de(e, /flex-|-self/g, "") + (Yt(e, /flex-|baseline/) ? "" : De + "grid-row-" + de(e, /flex-|-self/g, "")) + e;
    // align-content
    case 4675:
      return Ie + e + De + "flex-line-pack" + de(e, /align-content|flex-|-self/g, "") + e;
    // flex-shrink
    case 5548:
      return Ie + e + De + de(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return Ie + e + De + de(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return Ie + "box-" + de(e, "-grow", "") + Ie + e + De + de(e, "grow", "positive") + e;
    // transition
    case 4554:
      return Ie + de(e, /([^-])(transform)/g, "$1" + Ie + "$2") + e;
    // cursor
    case 6187:
      return de(de(de(e, /(zoom-|grab)/, Ie + "$1"), /(image-set)/, Ie + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return de(e, /(image-set\([^]*)/, Ie + "$1$`$1");
    // justify-content
    case 4968:
      return de(de(e, /(.+:)(flex-)?(.*)/, Ie + "box-pack:$3" + De + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Ie + e + e;
    // justify-self
    case 4200:
      if (!Yt(e, /flex-|baseline/)) return De + "grid-column-align" + qn(e, t) + e;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return De + de(e, "template-", "") + e;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return n && n.some(function(r, o) {
        return t = o, Yt(r.props, /grid-\w+-end/);
      }) ? ~yo(e + (n = n[t].value), "span", 0) ? e : De + de(e, "-start", "") + e + De + "grid-row-span:" + (~yo(n, "span", 0) ? Yt(n, /\d+/) : +Yt(n, /\d+/) - +Yt(e, /\d+/)) + ";" : De + de(e, "-start", "") + e;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return Yt(r.props, /grid-\w+-start/);
      }) ? e : De + de(de(e, "-end", "-span"), "span ", "") + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return de(e, /(.+)-inline(.+)/, Ie + "$1$2") + e;
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
            return de(e, /(.+:)(.+)-([^]+)/, "$1" + Ie + "$2-$3$1" + Tr + (st(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          // (s)tretch
          case 115:
            return ~yo(e, "stretch", 0) ? Mu(de(e, "stretch", "fill-available"), t, n) + e : e;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return de(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, s, a, c, l) {
        return De + o + ":" + i + l + (s ? De + o + "-span:" + (a ? c : +c - +i) + l : "") + e;
      });
    // position: sticky
    case 4949:
      if (st(e, t + 6) === 121)
        return de(e, ":", ":" + Ie) + e;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (st(e, st(e, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return de(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + Ie + (st(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Ie + "$2$3$1" + De + "$2box$3") + e;
        // (inline-)?gri(d)
        case 100:
          return de(e, ":", ":" + De) + e;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return de(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function $o(e, t) {
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
      return e.return = e.value + "{" + $o(e.children, r) + "}";
    case hi:
      if (!zt(e.value = e.props.join(","))) return "";
  }
  return zt(n = $o(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
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
        return $o([on(e, { value: de(e.value, "@", "@" + Ie) })], r);
      case hi:
        if (e.length)
          return dh(n = e.props, function(o) {
            switch (Yt(o, r = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                Dn(on(e, { props: [de(o, /:(read-\w+)/, ":" + Tr + "$1")] })), Dn(on(e, { props: [o] })), As(e, { props: Oc(n, r) });
                break;
              // :placeholder
              case "::placeholder":
                Dn(on(e, { props: [de(o, /:(plac\w+)/, ":" + Ie + "input-$1")] })), Dn(on(e, { props: [de(o, /:(plac\w+)/, ":" + Tr + "$1")] })), Dn(on(e, { props: [de(o, /:(plac\w+)/, De + "input-$1")] })), Dn(on(e, { props: [o] })), As(e, { props: Oc(n, r) });
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
}, In = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Du = "active", Bu = "data-styled-version", mi = "6.1.18", $a = `/*!sc*/
`, Fo = typeof window < "u" && typeof document < "u", Th = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Rc = /invalid hook call/i, eo = /* @__PURE__ */ new Set(), Rh = function(e, t) {
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
        Rc.test(s) ? (i = !1, eo.delete(r)) : o.apply(void 0, Wn([s], a, !1));
      }, Oe(), i && !eo.has(r) && (console.warn(r), eo.add(r));
    } catch (s) {
      Rc.test(s.message) && eo.delete(r);
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
var kh = /(a)(d)/gi, to = 52, Ic = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Is(e) {
  var t, n = "";
  for (t = Math.abs(e); t > to; t = t / to | 0) n = Ic(t % to) + n;
  return (Ic(t % to) + n).replace(kh, "$1-$2");
}
var Ki, zu = 5381, bn = function(e, t) {
  for (var n = t.length; n; ) e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, Hu = function(e) {
  return bn(zu, e);
};
function jh(e) {
  return Is(Hu(e) >>> 0);
}
function $u(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Zi(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Fu = typeof Symbol == "function" && Symbol.for, Vu = Fu ? Symbol.for("react.memo") : 60115, Lh = Fu ? Symbol.for("react.forward_ref") : 60112, Mh = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Dh = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Wu = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Bh = ((Ki = {})[Lh] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Ki[Vu] = Wu, Ki);
function Nc(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Vu ? Wu : "$$typeof" in e ? Bh[e.$$typeof] : Mh;
  var t;
}
var zh = Object.defineProperty, Hh = Object.getOwnPropertyNames, kc = Object.getOwnPropertySymbols, $h = Object.getOwnPropertyDescriptor, Fh = Object.getPrototypeOf, jc = Object.prototype;
function qu(e, t, n) {
  if (typeof t != "string") {
    if (jc) {
      var r = Fh(t);
      r && r !== jc && qu(e, r, n);
    }
    var o = Hh(t);
    kc && (o = o.concat(kc(t)));
    for (var i = Nc(e), s = Nc(t), a = 0; a < o.length; ++a) {
      var c = o[a];
      if (!(c in Dh || n && n[c] || s && c in s || i && c in i)) {
        var l = $h(t, c);
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
function Fa(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function Cn(e, t) {
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
    for (var r = this.groupSizes[t], o = this.indexOfGroup(t), i = o + r, s = o; s < i; s++) n += "".concat(this.tag.getRule(s)).concat($a);
    return n;
  }, e;
}(), Uh = 1 << 30, Co = /* @__PURE__ */ new Map(), Vo = /* @__PURE__ */ new Map(), wo = 1, no = function(e) {
  if (Co.has(e)) return Co.get(e);
  for (; Vo.has(wo); ) wo++;
  var t = wo++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > Uh)) throw ir(16, "".concat(t));
  return Co.set(e, t), Vo.set(t, e), t;
}, Gh = function(e, t) {
  wo = t + 1, Co.set(e, t), Vo.set(t, e);
}, Yh = "style[".concat(In, "][").concat(Bu, '="').concat(mi, '"]'), Xh = new RegExp("^".concat(In, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Kh = function(e, t, n) {
  for (var r, o = n.split(","), i = 0, s = o.length; i < s; i++) (r = o[i]) && e.registerName(t, r);
}, Zh = function(e, t) {
  for (var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split($a), o = [], i = 0, s = r.length; i < s; i++) {
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
    o && o.getAttribute(In) !== Du && (Zh(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function Jh() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Uu = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(a) {
    var c = Array.from(a.querySelectorAll("style[".concat(In, "]")));
    return c[c.length - 1];
  }(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(In, Du), r.setAttribute(Bu, mi);
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
    this.options = pt(pt({}, np), t), this.gs = n, this.names = new Map(r), this.server = !!t.isServer, !this.server && Fo && Dc && (Dc = !1, Mc(this)), Va(this, function() {
      return function(i) {
        for (var s = i.getTag(), a = s.length, c = "", l = function(d) {
          var f = function(S) {
            return Vo.get(S);
          }(d);
          if (f === void 0) return "continue";
          var v = i.names.get(f), g = s.getGroup(d);
          if (v === void 0 || !v.size || g.length === 0) return "continue";
          var p = "".concat(In, ".g").concat(d, '[id="').concat(f, '"]'), x = "";
          v !== void 0 && v.forEach(function(S) {
            S.length > 0 && (x += "".concat(S, ","));
          }), c += "".concat(g).concat(p, '{content:"').concat(x, '"}').concat($a);
        }, u = 0; u < a; u++) l(u);
        return c;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return no(t);
  }, e.prototype.rehydrate = function() {
    !this.server && Fo && Mc(this);
  }, e.prototype.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(pt(pt({}, this.options), t), this.gs, n && this.names || void 0);
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
    if (no(t), this.names.has(t)) this.names.get(t).add(n);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(n), this.names.set(t, r);
    }
  }, e.prototype.insertRules = function(t, n, r) {
    this.registerName(t, n), this.getTag().insertRules(no(t), r);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(no(t)), this.clearNames(t);
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
  var d = function(f, v, g, p) {
    v === void 0 && (v = ""), g === void 0 && (g = ""), p === void 0 && (p = "&"), t = p, n = v, r = new RegExp("\\".concat(n, "\\b"), "g");
    var x = f.replace(op, ""), S = Sh(g || v ? "".concat(g, " ").concat(v, " { ").concat(x, " }") : x);
    s.namespace && (S = Yu(S, s.namespace));
    var C = [];
    return $o(S, Eh(u.concat(_h(function(h) {
      return C.push(h);
    })))), C;
  };
  return d.hash = c.length ? c.reduce(function(f, v) {
    return v.name || ir(15), bn(f, v.name);
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
function On(e, t, n, r) {
  if (Ku(e)) return [];
  if (Fa(e)) return [".".concat(e.styledComponentId)];
  if (Yn(e)) {
    if (!Yn(i = e) || i.prototype && i.prototype.isReactComponent || !t) return [e];
    var o = e(t);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof zc || Xn(o) || o === null || console.error("".concat($u(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), On(o, t, n, r);
  }
  var i;
  return e instanceof zc ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : Xn(e) ? Zu(e) : Array.isArray(e) ? Array.prototype.concat.apply(vi, e.map(function(s) {
    return On(s, t, n, r);
  })) : [e.toString()];
}
function cp(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (Yn(n) && !Fa(n)) return !1;
  }
  return !0;
}
var lp = Hu(mi), up = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && cp(t), this.componentId = n, this.baseHash = bn(lp, n), this.baseStyle = r, Gu.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId)) o = Cn(o, this.staticRulesId);
    else {
      var i = Lc(On(this.rules, t, n, r)), s = Is(bn(this.baseHash, i) >>> 0);
      if (!n.hasNameForId(this.componentId, s)) {
        var a = r(i, ".".concat(s), void 0, this.componentId);
        n.insertRules(this.componentId, s, a);
      }
      o = Cn(o, s), this.staticRulesId = s;
    }
    else {
      for (var c = bn(this.baseHash, r.hash), l = "", u = 0; u < this.rules.length; u++) {
        var d = this.rules[u];
        if (typeof d == "string") l += d, process.env.NODE_ENV !== "production" && (c = bn(c, d));
        else if (d) {
          var f = Lc(On(d, t, n, r));
          c = bn(c, f + u), l += f;
        }
      }
      if (l) {
        var v = Is(c >>> 0);
        n.hasNameForId(this.componentId, v) || n.insertRules(this.componentId, v, r(l, ".".concat(v), void 0, this.componentId)), o = Cn(o, v);
      }
    }
    return o;
  }, e;
}(), Ju = q.createContext(void 0);
Ju.Consumer;
var Ji = {}, $c = /* @__PURE__ */ new Set();
function fp(e, t, n) {
  var r = Fa(e), o = e, i = !Zi(e), s = t.attrs, a = s === void 0 ? vi : s, c = t.componentId, l = c === void 0 ? function(E, y) {
    var A = typeof E != "string" ? "sc" : Pc(E);
    Ji[A] = (Ji[A] || 0) + 1;
    var _ = "".concat(A, "-").concat(jh(mi + A + Ji[A]));
    return y ? "".concat(y, "-").concat(_) : _;
  }(t.displayName, t.parentComponentId) : c, u = t.displayName, d = u === void 0 ? function(E) {
    return Zi(E) ? "styled.".concat(E) : "Styled(".concat($u(E), ")");
  }(e) : u, f = t.displayName && t.componentId ? "".concat(Pc(t.displayName), "-").concat(t.componentId) : t.componentId || l, v = r && o.attrs ? o.attrs.concat(a).filter(Boolean) : a, g = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var p = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var x = t.shouldForwardProp;
      g = function(E, y) {
        return p(E, y) && x(E, y);
      };
    } else g = p;
  }
  var S = new up(n, f, r ? o.componentStyle : void 0);
  function C(E, y) {
    return function(A, _, j) {
      var D = A.attrs, G = A.componentStyle, oe = A.defaultProps, ne = A.foldedComponentIds, z = A.styledComponentId, X = A.target, Z = q.useContext(Ju), I = Bc(), T = A.shouldForwardProp || I.shouldForwardProp;
      process.env.NODE_ENV !== "production" && Sc(z);
      var R = Ph(_, Z, oe) || Gn, N = function(ae, le, ue) {
        for (var Ae, ge = pt(pt({}, le), { className: void 0, theme: ue }), Le = 0; Le < ae.length; Le += 1) {
          var ke = Yn(Ae = ae[Le]) ? Ae(ge) : Ae;
          for (var pe in ke) ge[pe] = pe === "className" ? Cn(ge[pe], ke[pe]) : pe === "style" ? pt(pt({}, ge[pe]), ke[pe]) : ke[pe];
        }
        return le.className && (ge.className = Cn(ge.className, le.className)), ge;
      }(D, _, R), $ = N.as || X, F = {};
      for (var Y in N) N[Y] === void 0 || Y[0] === "$" || Y === "as" || Y === "theme" && N.theme === R || (Y === "forwardedAs" ? F.as = N.forwardedAs : T && !T(Y, $) || (F[Y] = N[Y], T || process.env.NODE_ENV !== "development" || ch(Y) || $c.has(Y) || !Ps.has($) || ($c.add(Y), console.warn('styled-components: it looks like an unknown prop "'.concat(Y, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var re = function(ae, le) {
        var ue = Bc(), Ae = ae.generateAndInjectStyles(le, ue.styleSheet, ue.stylis);
        return process.env.NODE_ENV !== "production" && Sc(Ae), Ae;
      }(G, N);
      process.env.NODE_ENV !== "production" && A.warnTooManyClasses && A.warnTooManyClasses(re);
      var J = Cn(ne, z);
      return re && (J += " " + re), N.className && (J += " " + N.className), F[Zi($) && !Ps.has($) ? "class" : "className"] = J, j && (F.ref = j), Z0($, F);
    }(h, E, y);
  }
  C.displayName = d;
  var h = q.forwardRef(C);
  return h.attrs = v, h.componentStyle = S, h.displayName = d, h.shouldForwardProp = g, h.foldedComponentIds = r ? Cn(o.foldedComponentIds, o.styledComponentId) : "", h.styledComponentId = f, h.target = r ? o.target : e, Object.defineProperty(h, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(E) {
    this._foldedDefaultProps = r ? function(y) {
      for (var A = [], _ = 1; _ < arguments.length; _++) A[_ - 1] = arguments[_];
      for (var j = 0, D = A; j < D.length; j++) Ns(y, D[j], !0);
      return y;
    }({}, o.defaultProps, E) : E;
  } }), process.env.NODE_ENV !== "production" && (Rh(d, f), h.warnTooManyClasses = /* @__PURE__ */ function(E, y) {
    var A = {}, _ = !1;
    return function(j) {
      if (!_ && (A[j] = !0, Object.keys(A).length >= 200)) {
        var D = y ? ' with the id of "'.concat(y, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(E).concat(D, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), _ = !0, A = {};
      }
    };
  }(d, f)), Va(h, function() {
    return ".".concat(h.styledComponentId);
  }), i && qu(h, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), h;
}
function Fc(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
  return n;
}
var Vc = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function dp(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (Yn(e) || Xn(e)) return Vc(On(Fc(vi, Wn([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string" ? On(r) : Vc(On(Fc(r, t)));
}
function js(e, t, n) {
  if (n === void 0 && (n = Gn), !t) throw ir(1, t);
  var r = function(o) {
    for (var i = [], s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
    return e(t, n, dp.apply(void 0, Wn([o], i, !1)));
  };
  return r.attrs = function(o) {
    return js(e, t, pt(pt({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return js(e, t, pt(pt({}, n), o));
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
var ro = "__sc-".concat(In, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[ro] || (window[ro] = 0), window[ro] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[ro] += 1);
const Fr = Wo;
(function(e, t) {
  const n = Wo, r = e();
  for (; ; )
    try {
      if (parseInt(n(475)) / 1 + parseInt(n(470)) / 2 + -parseInt(n(476)) / 3 * (-parseInt(n(465)) / 4) + parseInt(n(464)) / 5 + parseInt(n(466)) / 6 * (parseInt(n(473)) / 7) + parseInt(n(468)) / 8 * (parseInt(n(474)) / 9) + parseInt(n(471)) / 10 * (-parseInt(n(469)) / 11) === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(qo, 357382);
function Wo(e, t) {
  const n = qo();
  return Wo = function(r, o) {
    return r = r - 464, n[r];
  }, Wo(e, t);
}
const hp = jt[Fr(477)]`
  flex-direction: column;
  border-radius: 15px;
  border: 3px solid #a0beeb;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
  justify-items: center;
  align-items: center;
`, pp = jt[Fr(477)]`
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
`, xp = jt[Fr(472)]`
  border-radius: 7px;
  display: inline;
  padding: 0;
  &:focus-visible {
    outline: none;
  }
`, gp = jt[Fr(467)]`
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
function qo() {
  const e = ["div", "3287730DLZwCB", "1988216EOPdYv", "12bgmhRU", "span", "8lucNlZ", "32527UQBaQL", "1302168KSBsjt", "7390vTlCbi", "canvas", "261513UxaEFe", "3916089OaaQtA", "227082oJrumb", "3iBKwXb"];
  return qo = function() {
    return e;
  }, qo();
}
const mp = jt[Fr(477)]`
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
var yp = vp();
const we = /* @__PURE__ */ nh(yp), bp = {
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
let oo = class tf {
  constructor(t) {
    /**
     * All FastColor objects are valid. So isValid is always true. This property is kept to be compatible with TinyColor.
     */
    Ue(this, "isValid", !0);
    /**
     * Red, R in RGB
     */
    Ue(this, "r", 0);
    /**
     * Green, G in RGB
     */
    Ue(this, "g", 0);
    /**
     * Blue, B in RGB
     */
    Ue(this, "b", 0);
    /**
     * Alpha/Opacity, A in RGBA/HSLA
     */
    Ue(this, "a", 1);
    // HSV privates
    Ue(this, "_h");
    Ue(this, "_s");
    Ue(this, "_l");
    Ue(this, "_v");
    // intermediate variables to calculate HSL/HSV
    Ue(this, "_max");
    Ue(this, "_min");
    Ue(this, "_brightness");
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
        const i = bp[r.toLowerCase()];
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
const io = 2, Uc = 0.16, Sp = 0.05, Cp = 0.05, wp = 0.15, nf = 5, rf = 4, Ep = [{
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
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = n ? Math.round(e.h) - io * t : Math.round(e.h) + io * t : r = n ? Math.round(e.h) + io * t : Math.round(e.h) - io * t, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
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
  const n = [], r = new oo(e), o = r.toHsv();
  for (let i = nf; i > 0; i -= 1) {
    const s = new oo({
      h: Gc(o, i, !0),
      s: Yc(o, i, !0),
      v: Xc(o, i, !0)
    });
    n.push(s);
  }
  n.push(r);
  for (let i = 1; i <= rf; i += 1) {
    const s = new oo({
      h: Gc(o, i),
      s: Yc(o, i),
      v: Xc(o, i)
    });
    n.push(s);
  }
  return t.theme === "dark" ? Ep.map(({
    index: i,
    amount: s
  }) => new oo(t.backgroundColor || "#141414").mix(n[i], s).toHexString()) : n.map((i) => i.toHexString());
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
function yi(e, t) {
  cf(Mp, e, t);
}
function zp(e, t) {
  cf(Dp, e, t);
}
yi.preMessage = Lp;
yi.resetWarned = Bp;
yi.noteOnce = zp;
function Hp(e) {
  return e.replace(/-(.)/g, (t, n) => n.toUpperCase());
}
function $p(e, t) {
  yi(e, `[@ant-design/icons] ${t}`);
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
const Fp = `
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
  let o = Fp;
  n && (o = o.replace(/anticon/g, n)), r && (o = `@layer ${r} {
${o}
}`), Xe(() => {
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
  }), Vp(c), $p(Jc(t), `icon should be icon definiton, but got ${t}`), !Jc(t))
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
const Vr = /* @__PURE__ */ w.forwardRef((e, t) => {
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
  } = w.useContext(ef), f = we(d, u, {
    [`${u}-${r.name}`]: !!r.name,
    [`${u}-spin`]: !!o || r.name === "loading"
  }, n);
  let v = s;
  v === void 0 && a && (v = -1);
  const g = i ? {
    msTransform: `rotate(${i}deg)`,
    transform: `rotate(${i}deg)`
  } : void 0, [p, x] = uf(c);
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
Vr.displayName = "AntdIcon";
Vr.getTwoToneColor = Up;
Vr.setTwoToneColor = ff;
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
const ex = (e, t) => /* @__PURE__ */ w.createElement(Vr, Hs({}, e, {
  ref: t,
  icon: Qp
})), df = /* @__PURE__ */ w.forwardRef(ex);
process.env.NODE_ENV !== "production" && (df.displayName = "ReloadOutlined");
var tx = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M168 504.2c1-43.7 10-86.1 26.9-126 17.3-41 42.1-77.7 73.7-109.4S337 212.3 378 195c42.4-17.9 87.4-27 133.9-27s91.5 9.1 133.8 27A341.5 341.5 0 01755 268.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.7 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c0-6.7-7.7-10.5-12.9-6.3l-56.4 44.1C765.8 155.1 646.2 92 511.8 92 282.7 92 96.3 275.6 92 503.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8zm756 7.8h-60c-4.4 0-7.9 3.5-8 7.8-1 43.7-10 86.1-26.9 126-17.3 41-42.1 77.8-73.7 109.4A342.45 342.45 0 01512.1 856a342.24 342.24 0 01-243.2-100.8c-9.9-9.9-19.2-20.4-27.8-31.4l60.2-47a8 8 0 00-3-14.1l-175.7-43c-5-1.2-9.9 2.6-9.9 7.7l-.7 181c0 6.7 7.7 10.5 12.9 6.3l56.4-44.1C258.2 868.9 377.8 932 512.2 932c229.2 0 415.5-183.7 419.8-411.8a8 8 0 00-8-8.2z" } }] }, name: "sync", theme: "outlined" };
function $s() {
  return $s = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, $s.apply(this, arguments);
}
const nx = (e, t) => /* @__PURE__ */ w.createElement(Vr, $s({}, e, {
  ref: t,
  icon: tx
})), hf = /* @__PURE__ */ w.forwardRef(nx);
process.env.NODE_ENV !== "production" && (hf.displayName = "SyncOutlined");
var so = { exports: {} }, Re = {};
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
  if (el) return Re;
  el = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g;
  g = Symbol.for("react.module.reference");
  function p(x) {
    if (typeof x == "object" && x !== null) {
      var S = x.$$typeof;
      switch (S) {
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
                  return S;
              }
          }
        case t:
          return S;
      }
    }
  }
  return Re.ContextConsumer = s, Re.ContextProvider = i, Re.Element = e, Re.ForwardRef = c, Re.Fragment = n, Re.Lazy = f, Re.Memo = d, Re.Portal = t, Re.Profiler = o, Re.StrictMode = r, Re.Suspense = l, Re.SuspenseList = u, Re.isAsyncMode = function() {
    return !1;
  }, Re.isConcurrentMode = function() {
    return !1;
  }, Re.isContextConsumer = function(x) {
    return p(x) === s;
  }, Re.isContextProvider = function(x) {
    return p(x) === i;
  }, Re.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === e;
  }, Re.isForwardRef = function(x) {
    return p(x) === c;
  }, Re.isFragment = function(x) {
    return p(x) === n;
  }, Re.isLazy = function(x) {
    return p(x) === f;
  }, Re.isMemo = function(x) {
    return p(x) === d;
  }, Re.isPortal = function(x) {
    return p(x) === t;
  }, Re.isProfiler = function(x) {
    return p(x) === o;
  }, Re.isStrictMode = function(x) {
    return p(x) === r;
  }, Re.isSuspense = function(x) {
    return p(x) === l;
  }, Re.isSuspenseList = function(x) {
    return p(x) === u;
  }, Re.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === n || x === o || x === r || x === l || x === u || x === v || typeof x == "object" && x !== null && (x.$$typeof === f || x.$$typeof === d || x.$$typeof === i || x.$$typeof === s || x.$$typeof === c || x.$$typeof === g || x.getModuleId !== void 0);
  }, Re.typeOf = p, Re;
}
var Pe = {};
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
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g = !1, p = !1, x = !1, S = !1, C = !1, h;
    h = Symbol.for("react.module.reference");
    function E(L) {
      return !!(typeof L == "string" || typeof L == "function" || L === n || L === o || C || L === r || L === l || L === u || S || L === v || g || p || x || typeof L == "object" && L !== null && (L.$$typeof === f || L.$$typeof === d || L.$$typeof === i || L.$$typeof === s || L.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      L.$$typeof === h || L.getModuleId !== void 0));
    }
    function y(L) {
      if (typeof L == "object" && L !== null) {
        var H = L.$$typeof;
        switch (H) {
          case e:
            var V = L.type;
            switch (V) {
              case n:
              case o:
              case r:
              case l:
              case u:
                return V;
              default:
                var O = V && V.$$typeof;
                switch (O) {
                  case a:
                  case s:
                  case c:
                  case f:
                  case d:
                  case i:
                    return O;
                  default:
                    return H;
                }
            }
          case t:
            return H;
        }
      }
    }
    var A = s, _ = i, j = e, D = c, G = n, oe = f, ne = d, z = t, X = o, Z = r, I = l, T = u, R = !1, N = !1;
    function $(L) {
      return R || (R = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function F(L) {
      return N || (N = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Y(L) {
      return y(L) === s;
    }
    function re(L) {
      return y(L) === i;
    }
    function J(L) {
      return typeof L == "object" && L !== null && L.$$typeof === e;
    }
    function ae(L) {
      return y(L) === c;
    }
    function le(L) {
      return y(L) === n;
    }
    function ue(L) {
      return y(L) === f;
    }
    function Ae(L) {
      return y(L) === d;
    }
    function ge(L) {
      return y(L) === t;
    }
    function Le(L) {
      return y(L) === o;
    }
    function ke(L) {
      return y(L) === r;
    }
    function pe(L) {
      return y(L) === l;
    }
    function k(L) {
      return y(L) === u;
    }
    Pe.ContextConsumer = A, Pe.ContextProvider = _, Pe.Element = j, Pe.ForwardRef = D, Pe.Fragment = G, Pe.Lazy = oe, Pe.Memo = ne, Pe.Portal = z, Pe.Profiler = X, Pe.StrictMode = Z, Pe.Suspense = I, Pe.SuspenseList = T, Pe.isAsyncMode = $, Pe.isConcurrentMode = F, Pe.isContextConsumer = Y, Pe.isContextProvider = re, Pe.isElement = J, Pe.isForwardRef = ae, Pe.isFragment = le, Pe.isLazy = ue, Pe.isMemo = Ae, Pe.isPortal = ge, Pe.isProfiler = Le, Pe.isStrictMode = ke, Pe.isSuspense = pe, Pe.isSuspenseList = k, Pe.isValidElementType = E, Pe.typeOf = y;
  }()), Pe;
}
var nl;
function ix() {
  return nl || (nl = 1, process.env.NODE_ENV === "production" ? so.exports = rx() : so.exports = ox()), so.exports;
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
const Eo = /* @__PURE__ */ Object.create(null);
Object.keys(Ht).forEach((e) => {
  Eo[Ht[e]] = e;
});
const Fs = { type: "error", data: "parser error" }, pf = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", xf = typeof ArrayBuffer == "function", gf = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer, Ga = ({ type: e, data: t }, n, r) => pf && t instanceof Blob ? n ? r(t) : rl(t, r) : xf && (t instanceof ArrayBuffer || gf(t)) ? n ? r(t) : rl(new Blob([t]), r) : r(Ht[e] + (t || "")), rl = (e, t) => {
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
  } : Eo[n] ? e.length > 1 ? {
    type: Eo[n],
    data: e.substring(1)
  } : {
    type: Eo[n]
  } : Fs;
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
function ao(e) {
  return e.reduce((t, n) => t + n.length, 0);
}
function co(e, t) {
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
          if (ao(n) < 1)
            break;
          const c = co(n, 1);
          i = (c[0] & 128) === 128, o = c[0] & 127, o < 126 ? r = 3 : o === 126 ? r = 1 : r = 2;
        } else if (r === 1) {
          if (ao(n) < 2)
            break;
          const c = co(n, 2);
          o = new DataView(c.buffer, c.byteOffset, c.length).getUint16(0), r = 3;
        } else if (r === 2) {
          if (ao(n) < 8)
            break;
          const c = co(n, 8), l = new DataView(c.buffer, c.byteOffset, c.length), u = l.getUint32(0);
          if (u > Math.pow(2, 21) - 1) {
            a.enqueue(Fs);
            break;
          }
          o = u * Math.pow(2, 32) + l.getUint32(4), r = 3;
        } else {
          if (ao(n) < o)
            break;
          const c = co(n, o);
          a.enqueue(Ya(i ? c : rs.decode(c), t)), r = 0;
        }
        if (o === 0 || o > e) {
          a.enqueue(Fs);
          break;
        }
      }
    }
  });
}
const yf = 4;
function Je(e) {
  if (e) return px(e);
}
function px(e) {
  for (var t in Je.prototype)
    e[t] = Je.prototype[t];
  return e;
}
Je.prototype.on = Je.prototype.addEventListener = function(e, t) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this;
};
Je.prototype.once = function(e, t) {
  function n() {
    this.off(e, n), t.apply(this, arguments);
  }
  return n.fn = t, this.on(e, n), this;
};
Je.prototype.off = Je.prototype.removeListener = Je.prototype.removeAllListeners = Je.prototype.removeEventListener = function(e, t) {
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
Je.prototype.emit = function(e) {
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
Je.prototype.emitReserved = Je.prototype.emit;
Je.prototype.listeners = function(e) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [];
};
Je.prototype.hasListeners = function(e) {
  return !!this.listeners(e).length;
};
const bi = typeof Promise == "function" && typeof Promise.resolve == "function" ? (t) => Promise.resolve().then(t) : (t, n) => n(t, 0), wt = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), xx = "arraybuffer";
function bf(e, ...t) {
  return t.reduce((n, r) => (e.hasOwnProperty(r) && (n[r] = e[r]), n), {});
}
const gx = wt.setTimeout, mx = wt.clearTimeout;
function Si(e, t) {
  t.useNativeTimers ? (e.setTimeoutFn = gx.bind(wt), e.clearTimeoutFn = mx.bind(wt)) : (e.setTimeoutFn = wt.setTimeout.bind(wt), e.clearTimeoutFn = wt.clearTimeout.bind(wt));
}
const vx = 1.33;
function yx(e) {
  return typeof e == "string" ? bx(e) : Math.ceil((e.byteLength || e.size) * vx);
}
function bx(e) {
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
class Xa extends Je {
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
let $n = class _o extends Je {
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
    const n = bf(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
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
    typeof document < "u" && (this._index = _o.requestsCount++, _o.requests[this._index] = this);
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
      typeof document < "u" && delete _o.requests[this._index], this._xhr = null;
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
$n.requestsCount = 0;
$n.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", sl);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in wt ? "pagehide" : "unload";
    addEventListener(e, sl, !1);
  }
}
function sl() {
  for (let e in $n.requests)
    $n.requests.hasOwnProperty(e) && $n.requests[e].abort();
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
    return Object.assign(t, { xd: this.xd }, this.opts), new $n(wf, this.uri(), t);
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
    const t = this.uri(), n = this.opts.protocols, r = Ef ? {} : bf(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
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
        o && bi(() => {
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
        o && bi(() => {
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
const Ws = typeof addEventListener == "function" && typeof removeEventListener == "function", Oo = [];
Ws && addEventListener("offline", () => {
  Oo.forEach((e) => e());
}, !1);
class un extends Je {
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
    }, Oo.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
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
    n.EIO = yf, n.transport = t, this.id && (n.sid = this.id);
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
    const t = this.opts.rememberUpgrade && un.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
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
    this.readyState = "open", un.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
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
      if (o && (n += yx(o)), r > 0 && n > this._maxPayload)
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
    return t && (this._pingTimeoutTime = 0, bi(() => {
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
    if (un.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
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
        const r = Oo.indexOf(this._offlineEventListener);
        r !== -1 && Oo.splice(r, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", t, n), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
un.protocol = yf;
class Bx extends un {
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
    un.priorWebsocketSuccess = !1;
    const o = () => {
      r || (n.send([{ type: "ping", data: "probe" }]), n.once("packet", (d) => {
        if (!r)
          if (d.type === "pong" && d.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", n), !n)
              return;
            un.priorWebsocketSuccess = n.name === "websocket", this.transport.pause(() => {
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
const $x = typeof ArrayBuffer == "function", Fx = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer, _f = Object.prototype.toString, Vx = typeof Blob == "function" || typeof Blob < "u" && _f.call(Blob) === "[object BlobConstructor]", Wx = typeof File == "function" || typeof File < "u" && _f.call(File) === "[object FileConstructor]";
function Ka(e) {
  return $x && (e instanceof ArrayBuffer || Fx(e)) || Vx && e instanceof Blob || Wx && e instanceof File;
}
function Ao(e, t) {
  if (!e || typeof e != "object")
    return !1;
  if (Array.isArray(e)) {
    for (let n = 0, r = e.length; n < r; n++)
      if (Ao(e[n]))
        return !0;
    return !1;
  }
  if (Ka(e))
    return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return Ao(e.toJSON(), !0);
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && Ao(e[n]))
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
var me;
(function(e) {
  e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK";
})(me || (me = {}));
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
    return (t.type === me.EVENT || t.type === me.ACK) && Ao(t) ? this.encodeAsBinary({
      type: t.type === me.EVENT ? me.BINARY_EVENT : me.BINARY_ACK,
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
    return (t.type === me.BINARY_EVENT || t.type === me.BINARY_ACK) && (n += t.attachments + "-"), t.nsp && t.nsp !== "/" && (n += t.nsp + ","), t.id != null && (n += t.id), t.data != null && (n += JSON.stringify(t.data, this.replacer)), n;
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
class Za extends Je {
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
      const r = n.type === me.BINARY_EVENT;
      r || n.type === me.BINARY_ACK ? (n.type = r ? me.EVENT : me.ACK, this.reconstructor = new Kx(n), n.attachments === 0 && super.emitReserved("decoded", n)) : super.emitReserved("decoded", n);
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
    if (me[r.type] === void 0)
      throw new Error("unknown packet type " + r.type);
    if (r.type === me.BINARY_EVENT || r.type === me.BINARY_ACK) {
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
      case me.CONNECT:
        return al(n);
      case me.DISCONNECT:
        return n === void 0;
      case me.CONNECT_ERROR:
        return typeof n == "string" || al(n);
      case me.EVENT:
      case me.BINARY_EVENT:
        return Array.isArray(n) && (typeof n[0] == "number" || typeof n[0] == "string" && Gx.indexOf(n[0]) === -1);
      case me.ACK:
      case me.BINARY_ACK:
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
    return me;
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
class Of extends Je {
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
      type: me.EVENT,
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
      type: me.CONNECT,
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
        case me.CONNECT:
          t.data && t.data.sid ? this.onconnect(t.data.sid, t.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case me.EVENT:
        case me.BINARY_EVENT:
          this.onevent(t);
          break;
        case me.ACK:
        case me.BINARY_ACK:
          this.onack(t);
          break;
        case me.DISCONNECT:
          this.ondisconnect();
          break;
        case me.CONNECT_ERROR:
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
        type: me.ACK,
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
    return this.connected && this.packet({ type: me.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
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
class Gs extends Je {
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
    bi(() => {
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
function To(e, t) {
  typeof e == "object" && (t = e, e = void 0), t = t || {};
  const n = Hx(e, t.path || "/socket.io"), r = n.source, o = n.id, i = n.path, s = vr[o] && i in vr[o].nsps, a = t.forceNew || t["force new connection"] || t.multiplex === !1 || s;
  let c;
  return a ? c = new Gs(r, t) : (vr[o] || (vr[o] = new Gs(r, t)), c = vr[o]), n.query && !t.query && (t.query = n.queryKey), c.socket(n.path, t);
}
Object.assign(To, {
  Manager: Gs,
  Socket: Of,
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
function Ee(e) {
  "@babel/helpers - typeof";
  return Ee = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ee(e);
}
var Qx = Symbol.for("react.element"), eg = Symbol.for("react.transitional.element"), tg = Symbol.for("react.fragment");
function ng(e) {
  return (
    // Base object type
    e && Ee(e) === "object" && // React Element type
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
function hn(e, t) {
  Tf(Qa, e, t);
}
function ig(e, t) {
  Tf(og, e, t);
}
hn.preMessage = rg;
hn.resetWarned = Af;
hn.noteOnce = ig;
function sg(e, t) {
  if (Ee(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Ee(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Rf(e) {
  var t = sg(e, "string");
  return Ee(t) == "symbol" ? t : t + "";
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
function K(e) {
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
  return e && Ee(e) === "object" && ll(e.nativeElement) ? e.nativeElement : ll(e) ? e : null;
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
  typeof t == "function" ? t(n) : Ee(t) === "object" && t && "current" in t && (t.current = n);
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
function bt(e, t) {
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
function An(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function jf(e, t) {
  if (t && (Ee(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return An(e);
}
function Wr(e) {
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
function $t(e) {
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
var fn = function(t) {
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
fn.cancel = function(e) {
  var t = wi.get(e);
  return Bf(e), Df(t);
};
process.env.NODE_ENV !== "production" && (fn.ids = function() {
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
function $f() {
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
function Ff(e) {
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
    return r.getAttribute($f(t)) === e;
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
    var r = Ff("", t), o = r.parentNode;
    Zs.set(e, o), e.removeChild(r);
  }
}
function Tn(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Ei(n), o = rc(r), i = K(K({}, n), {}, {
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
  var u = Ff(e, i);
  return u.setAttribute($f(i), t), u;
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
function Nn(e, t) {
  if (e == null) return {};
  var n, r, o = vg(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
function yg(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = /* @__PURE__ */ new Set();
  function o(i, s) {
    var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, c = r.has(i);
    if (hn(!c, "Warning: There may be circular references"), c)
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
    if (i && s && Ee(i) === "object" && Ee(s) === "object") {
      var d = Object.keys(i);
      return d.length !== Object.keys(s).length ? !1 : d.every(function(f) {
        return o(i[f], s[f], l);
      });
    }
    return !1;
  }
  return o(e, t);
}
var bg = "%";
function Js(e) {
  return e.join(bg);
}
var Sg = /* @__PURE__ */ function() {
  function e(t) {
    bt(this, e), U(this, "instanceId", void 0), U(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = t;
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
}(), Zn = "data-token-hash", It = "data-css-hash", Cg = "data-cache-path", cn = "__cssinjs_instance__";
function wg() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(It, "]")) || [], n = document.head.firstChild;
    Array.from(t).forEach(function(o) {
      o[cn] = o[cn] || e, o[cn] === e && document.head.insertBefore(o, n);
    });
    var r = {};
    Array.from(document.querySelectorAll("style[".concat(It, "]"))).forEach(function(o) {
      var i = o.getAttribute(It);
      if (r[i]) {
        if (o[cn] === e) {
          var s;
          (s = o.parentNode) === null || s === void 0 || s.removeChild(o);
        }
      } else
        r[i] = !0;
    });
  }
  return new Sg(e);
}
var qr = /* @__PURE__ */ w.createContext({
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
    bt(this, e), U(this, "cache", void 0), U(this, "keys", void 0), U(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
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
    bt(this, e), U(this, "derivatives", void 0), U(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = pl, t.length === 0 && Qa(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), pl += 1;
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
    t += n, r instanceof qf ? t += r.id : r && Ee(r) === "object" ? t += Pr(r) : t += r;
  }), t = jr(t), xl.set(e, t)), t;
}
function gl(e, t) {
  return jr("".concat(t, "_").concat(Pr(e)));
}
var ea = Jt();
function Kt(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function Uo(e, t, n) {
  var r, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (i)
    return e;
  var s = K(K({}, o), {}, (r = {}, U(r, Zn, t), U(r, It, n), r)), a = Object.keys(s).map(function(c) {
    var l = s[c];
    return l ? "".concat(c, '="').concat(l, '"') : null;
  }).filter(function(c) {
    return c;
  }).join(" ");
  return "<style ".concat(a, ">").concat(e, "</style>");
}
var Ro = function(t) {
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
      var f, v = Ro(u, r == null ? void 0 : r.prefix);
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
}, Tg = K({}, w), yl = Tg.useInsertionEffect, Rg = function(t, n, r) {
  w.useMemo(t, r), ic(function() {
    return n(!0);
  }, r);
}, Pg = yl ? function(e, t, n) {
  return yl(function() {
    return e(), t();
  }, n);
} : Rg, Ig = K({}, w), Ng = Ig.useInsertionEffect, kg = function(t) {
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
  var lo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : null;
  if (lo && typeof lo.webpackHotUpdate == "function") {
    var zg = lo.webpackHotUpdate;
    lo.webpackHotUpdate = function() {
      return ta = !0, setTimeout(function() {
        ta = !1;
      }, 0), zg.apply(void 0, arguments);
    };
  }
}
function sc(e, t, n, r, o) {
  var i = w.useContext(qr), s = i.cache, a = [e].concat($t(t)), c = Js(a), l = Lg([c]), u = Bg(), d = function(p) {
    s.opUpdate(c, function(x) {
      var S = x || [void 0, void 0], C = se(S, 2), h = C[0], E = h === void 0 ? 0 : h, y = C[1], A = y;
      process.env.NODE_ENV !== "production" && y && u && (r == null || r(A, u), A = null);
      var _ = A || n(), j = [E, _];
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
  return Pg(function() {
    o == null || o(v);
  }, function(g) {
    return d(function(p) {
      var x = se(p, 2), S = x[0], C = x[1];
      return g && S === 0 && (o == null || o(v)), [S + 1, C];
    }), function() {
      s.opUpdate(c, function(p) {
        var x = p || [], S = se(x, 2), C = S[0], h = C === void 0 ? 0 : C, E = S[1], y = h - 1;
        return y === 0 ? (l(function() {
          (g || !s.opGet(c)) && (r == null || r(E, !1));
        }), null) : [h - 1, E];
      });
    };
  }, [c]), v;
}
var Hg = {}, $g = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", Sn = /* @__PURE__ */ new Map();
function Fg(e) {
  Sn.set(e, (Sn.get(e) || 0) + 1);
}
function Vg(e, t) {
  if (typeof document < "u") {
    var n = document.querySelectorAll("style[".concat(Zn, '="').concat(e, '"]'));
    n.forEach(function(r) {
      if (r[cn] === t) {
        var o;
        (o = r.parentNode) === null || o === void 0 || o.removeChild(r);
      }
    });
  }
}
var Wg = 0;
function qg(e, t) {
  Sn.set(e, (Sn.get(e) || 0) - 1);
  var n = Array.from(Sn.keys()), r = n.filter(function(o) {
    var i = Sn.get(o) || 0;
    return i <= 0;
  });
  n.length - r.length > Wg && r.forEach(function(o) {
    Vg(o, t), Sn.delete(o);
  });
}
var Ug = function(t, n, r, o) {
  var i = r.getDerivativeToken(t), s = K(K({}, i), n);
  return o && (s = o(s)), s;
}, Gf = "token";
function Gg(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = _t(qr), o = r.cache.instanceId, i = r.container, s = n.salt, a = s === void 0 ? "" : s, c = n.override, l = c === void 0 ? Hg : c, u = n.formatToken, d = n.getComputedToken, f = n.cssVar, v = Og(function() {
    return Object.assign.apply(Object, [{}].concat($t(t)));
  }, t), g = Pr(v), p = Pr(l), x = f ? Pr(f) : "", S = sc(Gf, [a, e.id, g, p, x], function() {
    var C, h = d ? d(v, l, e) : Ug(v, l, e, u), E = K({}, h), y = "";
    if (f) {
      var A = Uf(h, f.key, {
        prefix: f.prefix,
        ignore: f.ignore,
        unitless: f.unitless,
        preserve: f.preserve
      }), _ = se(A, 2);
      h = _[0], y = _[1];
    }
    var j = gl(h, a);
    h._tokenKey = j, E._tokenKey = gl(E, a);
    var D = (C = f == null ? void 0 : f.key) !== null && C !== void 0 ? C : j;
    h._themeKey = D, Fg(D);
    var G = "".concat($g, "-").concat(jr(j));
    return h._hashId = G, [h, G, E, y, (f == null ? void 0 : f.key) || ""];
  }, function(C) {
    qg(C[0]._themeKey, o);
  }, function(C) {
    var h = se(C, 4), E = h[0], y = h[3];
    if (f && y) {
      var A = Tn(y, jr("css-variables-".concat(E._themeKey)), {
        mark: It,
        prepend: "queue",
        attachTo: i,
        priority: -999
      });
      A[cn] = o, A.setAttribute(Zn, E._themeKey);
    }
  });
  return S;
}
var Yg = function(t, n, r) {
  var o = se(t, 5), i = o[2], s = o[3], a = o[4], c = r || {}, l = c.plain;
  if (!s)
    return null;
  var u = i._tokenKey, d = -999, f = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(d)
  }, v = Uo(s, a, u, f, l);
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
function Po(e, t, n) {
  return e.replace(t, n);
}
function e1(e, t, n) {
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
function t1(e) {
  return e.length;
}
function uo(e, t) {
  return t.push(e), e;
}
var _i = 1, Qn = 1, Qf = 0, At = 0, Ze = 0, lr = "";
function cc(e, t, n, r, o, i, s, a) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: _i, column: Qn, length: s, return: "", siblings: a };
}
function n1() {
  return Ze;
}
function r1() {
  return Ze = At > 0 ? Fn(lr, --At) : 0, Qn--, Ze === 10 && (Qn = 1, _i--), Ze;
}
function Nt() {
  return Ze = At < Qf ? Fn(lr, At++) : 0, Qn++, Ze === 10 && (Qn = 1, _i++), Ze;
}
function ln() {
  return Fn(lr, At);
}
function Io() {
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
function o1(e) {
  return _i = Qn = 1, Qf = Bt(lr = e), At = 0, [];
}
function i1(e) {
  return lr = "", e;
}
function as(e) {
  return Jf(Oi(At - 1, na(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function s1(e) {
  for (; (Ze = ln()) && Ze < 33; )
    Nt();
  return Lr(e) > 2 || Lr(Ze) > 3 ? "" : " ";
}
function a1(e, t) {
  for (; --t && Nt() && !(Ze < 48 || Ze > 102 || Ze > 57 && Ze < 65 || Ze > 70 && Ze < 97); )
    ;
  return Oi(e, Io() + (t < 6 && ln() == 32 && Nt() == 32));
}
function na(e) {
  for (; Nt(); )
    switch (Ze) {
      // ] ) " '
      case e:
        return At;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && na(Ze);
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
function c1(e, t) {
  for (; Nt() && e + Ze !== 57; )
    if (e + Ze === 84 && ln() === 47)
      break;
  return "/*" + Oi(t, At - 1) + "*" + ac(e === 47 ? e : Nt());
}
function l1(e) {
  for (; !Lr(ln()); )
    Nt();
  return Oi(e, At);
}
function u1(e) {
  return i1(No("", null, null, null, [""], e = o1(e), 0, [0], e));
}
function No(e, t, n, r, o, i, s, a, c) {
  for (var l = 0, u = 0, d = s, f = 0, v = 0, g = 0, p = 1, x = 1, S = 1, C = 0, h = "", E = o, y = i, A = r, _ = h; x; )
    switch (g = C, C = Nt()) {
      // (
      case 40:
        if (g != 108 && Fn(_, d - 1) == 58) {
          e1(_ += Po(as(C), "&", "&\f"), "&\f", Zf(l ? a[l - 1] : 0)) != -1 && (S = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        _ += as(C);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        _ += s1(g);
        break;
      // \
      case 92:
        _ += a1(Io() - 1, 7);
        continue;
      // /
      case 47:
        switch (ln()) {
          case 42:
          case 47:
            uo(f1(c1(Nt(), Io()), t, n, c), c), (Lr(g || 1) == 5 || Lr(ln() || 1) == 5) && Bt(_) && Jn(_, -1, void 0) !== " " && (_ += " ");
            break;
          default:
            _ += "/";
        }
        break;
      // {
      case 123 * p:
        a[l++] = Bt(_) * S;
      // } ; \0
      case 125 * p:
      case 59:
      case 0:
        switch (C) {
          // \0 }
          case 0:
          case 125:
            x = 0;
          // ;
          case 59 + u:
            S == -1 && (_ = Po(_, /\f/g, "")), v > 0 && (Bt(_) - d || p === 0 && g === 47) && uo(v > 32 ? Sl(_ + ";", r, n, d - 1, c) : Sl(Po(_, " ", "") + ";", r, n, d - 2, c), c);
            break;
          // @ ;
          case 59:
            _ += ";";
          // { rule/at-rule
          default:
            if (uo(A = bl(_, t, n, l, u, o, a, h, E = [], y = [], d, i), i), C === 123)
              if (u === 0)
                No(_, t, A, A, E, i, d, a, y);
              else {
                switch (f) {
                  // c(ontainer)
                  case 99:
                    if (Fn(_, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (Fn(_, 2) === 97) break;
                  default:
                    u = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                u ? No(e, A, A, r && uo(bl(e, A, A, 0, 0, o, a, h, o, E = [], d, y), y), o, y, d, a, r ? E : y) : No(_, A, A, A, [""], y, 0, a, y);
              }
        }
        l = u = v = 0, p = S = 1, h = _ = "", d = s;
        break;
      // :
      case 58:
        d = 1 + Bt(_), v = g;
      default:
        if (p < 1) {
          if (C == 123)
            --p;
          else if (C == 125 && p++ == 0 && r1() == 125)
            continue;
        }
        switch (_ += ac(C), C * p) {
          // &
          case 38:
            S = u > 0 ? 1 : (_ += "\f", -1);
            break;
          // ,
          case 44:
            a[l++] = (Bt(_) - 1) * S, S = 1;
            break;
          // @
          case 64:
            ln() === 45 && (_ += as(Nt())), f = ln(), u = d = Bt(h = _ += l1(Io())), C++;
            break;
          // -
          case 45:
            g === 45 && Bt(_) == 2 && (p = 0);
        }
    }
  return i;
}
function bl(e, t, n, r, o, i, s, a, c, l, u, d) {
  for (var f = o - 1, v = o === 0 ? i : [""], g = t1(v), p = 0, x = 0, S = 0; p < r; ++p)
    for (var C = 0, h = Jn(e, f + 1, f = Zf(x = s[p])), E = e; C < g; ++C)
      (E = Jf(x > 0 ? v[C] + " " + h : Po(h, /&\f/g, v[C]))) && (c[S++] = E);
  return cc(e, t, n, o === 0 ? Xf : a, c, l, u, d);
}
function f1(e, t, n, r) {
  return cc(e, t, n, Yf, ac(n1()), Jn(e, 2, -2), 0, r);
}
function Sl(e, t, n, r, o) {
  return cc(e, t, n, Kf, Jn(e, 0, r), Jn(e, r + 1, -1), r, o);
}
function ra(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function d1(e, t, n, r) {
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
  hn(!1, "[Ant Design CSS-in-JS] ".concat(n ? "Error in ".concat(n, ": ") : "").concat(e).concat(r.length ? " Selector: ".concat(r.join(" | ")) : ""));
}
var h1 = function(t, n, r) {
  if (t === "content") {
    var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, i = ["normal", "none", "initial", "inherit", "unset"];
    (typeof n != "string" || i.indexOf(n) === -1 && !o.test(n) && (n.charAt(0) !== n.charAt(n.length - 1) || n.charAt(0) !== '"' && n.charAt(0) !== "'")) && ed("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(n, "\"'`."), r);
  }
}, p1 = function(t, n, r) {
  t === "animation" && r.hashId && n !== "none" && ed("You seem to be using hashed animation '".concat(n, "', in which case 'animationName' with Keyframe as value is recommended."), r);
}, Cl = "data-ant-cssinjs-cache-path", td = "_FILE_STYLE__", Rn, nd = !0;
function x1() {
  if (!Rn && (Rn = {}, Jt())) {
    var e = document.createElement("div");
    e.className = Cl, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(o) {
      var i = o.split(":"), s = se(i, 2), a = s[0], c = s[1];
      Rn[a] = c;
    });
    var n = document.querySelector("style[".concat(Cl, "]"));
    if (n) {
      var r;
      nd = !1, (r = n.parentNode) === null || r === void 0 || r.removeChild(n);
    }
    document.body.removeChild(e);
  }
}
function g1(e) {
  return x1(), !!Rn[e];
}
function m1(e) {
  var t = Rn[e], n = null;
  if (t && Jt())
    if (nd)
      n = td;
    else {
      var r = document.querySelector("style[".concat(It, '="').concat(Rn[e], '"]'));
      r ? n = r.innerHTML : delete Rn[e];
    }
  return [n, t];
}
var rd = "_skip_check_", od = "_multi_value_";
function ko(e) {
  var t = ra(u1(e), d1);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function v1(e) {
  return Ee(e) === "object" && e && (rd in e || od in e);
}
function wl(e, t, n) {
  if (!t)
    return e;
  var r = ".".concat(t), o = n === "low" ? ":where(".concat(r, ")") : r, i = e.split(",").map(function(s) {
    var a, c = s.trim().split(/\s+/), l = c[0] || "", u = ((a = l.match(/^\w+/)) === null || a === void 0 ? void 0 : a[0]) || "";
    return l = "".concat(u).concat(o).concat(l.slice(u.length)), [l].concat($t(c.slice(1))).join(" ");
  });
  return i.join(",");
}
var y1 = function e(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = r.root, i = r.injectHash, s = r.parentSelectors, a = n.hashId, c = n.layer, l = n.path, u = n.hashPriority, d = n.transformers, f = d === void 0 ? [] : d, v = n.linters, g = v === void 0 ? [] : v, p = "", x = {};
  function S(E) {
    var y = E.getName(a);
    if (!x[y]) {
      var A = e(E.style, n, {
        root: !1,
        parentSelectors: s
      }), _ = se(A, 1), j = _[0];
      x[y] = "@keyframes ".concat(E.getName(a)).concat(j);
    }
  }
  function C(E) {
    var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return E.forEach(function(A) {
      Array.isArray(A) ? C(A, y) : A && y.push(A);
    }), y;
  }
  var h = C(Array.isArray(t) ? t : [t]);
  return h.forEach(function(E) {
    var y = typeof E == "string" && !o ? {} : E;
    if (typeof y == "string")
      p += "".concat(y, `
`);
    else if (y._keyframe)
      S(y);
    else {
      var A = f.reduce(function(_, j) {
        var D;
        return (j == null || (D = j.visit) === null || D === void 0 ? void 0 : D.call(j, _)) || _;
      }, y);
      Object.keys(A).forEach(function(_) {
        var j = A[_];
        if (Ee(j) === "object" && j && (_ !== "animationName" || !j._keyframe) && !v1(j)) {
          var D = !1, G = _.trim(), oe = !1;
          (o || i) && a ? G.startsWith("@") ? D = !0 : G === "&" ? G = wl("", a, u) : G = wl(_, a, u) : o && !a && (G === "&" || G === "") && (G = "", oe = !0);
          var ne = e(j, n, {
            root: oe,
            injectHash: D,
            parentSelectors: [].concat($t(s), [G])
          }), z = se(ne, 2), X = z[0], Z = z[1];
          x = K(K({}, x), Z), p += "".concat(G).concat(X);
        } else {
          let R = function(N, $) {
            process.env.NODE_ENV !== "production" && (Ee(j) !== "object" || !(j != null && j[rd])) && [h1, p1].concat($t(g)).forEach(function(re) {
              return re(N, $, {
                path: l,
                hashId: a,
                parentSelectors: s
              });
            });
            var F = N.replace(/[A-Z]/g, function(re) {
              return "-".concat(re.toLowerCase());
            }), Y = $;
            !Xg[N] && typeof Y == "number" && Y !== 0 && (Y = "".concat(Y, "px")), N === "animationName" && $ !== null && $ !== void 0 && $._keyframe && (S($), Y = $.getName(a)), p += "".concat(F, ":").concat(Y, ";");
          };
          var I, T = (I = j == null ? void 0 : j.value) !== null && I !== void 0 ? I : j;
          Ee(j) === "object" && j !== null && j !== void 0 && j[od] && Array.isArray(T) ? T.forEach(function(N) {
            R(_, N);
          }) : R(_, T);
        }
      });
    }
  }), o ? c && (p && (p = "@layer ".concat(c.name, " {").concat(p, "}")), c.dependencies && (x["@layer ".concat(c.name)] = c.dependencies.map(function(E) {
    return "@layer ".concat(E, ", ").concat(c.name, ";");
  }).join(`
`))) : p = "{".concat(p, "}"), [p, x];
};
function id(e, t) {
  return jr("".concat(e.join("%")).concat(t));
}
function b1() {
  return null;
}
var sd = "style";
function oa(e, t) {
  var n = e.token, r = e.path, o = e.hashId, i = e.layer, s = e.nonce, a = e.clientOnly, c = e.order, l = c === void 0 ? 0 : c, u = w.useContext(qr), d = u.autoClear, f = u.mock, v = u.defaultCache, g = u.hashPriority, p = u.container, x = u.ssrInline, S = u.transformers, C = u.linters, h = u.cache, E = u.layer, y = n._tokenKey, A = [y];
  E && A.push("layer"), A.push.apply(A, $t(r));
  var _ = ea;
  process.env.NODE_ENV !== "production" && f !== void 0 && (_ = f === "client");
  var j = sc(
    sd,
    A,
    // Create cache if needed
    function() {
      var z = A.join("|");
      if (g1(z)) {
        var X = m1(z), Z = se(X, 2), I = Z[0], T = Z[1];
        if (I)
          return [I, y, T, {}, a, l];
      }
      var R = t(), N = y1(R, {
        hashId: o,
        hashPriority: g,
        layer: E ? i : void 0,
        path: r.join("-"),
        transformers: S,
        linters: C
      }), $ = se(N, 2), F = $[0], Y = $[1], re = ko(F), J = id(A, re);
      return [re, y, J, Y, a, l];
    },
    // Remove cache if no need
    function(z, X) {
      var Z = se(z, 3), I = Z[2];
      (X || d) && ea && Wf(I, {
        mark: It
      });
    },
    // Effect: Inject style here
    function(z) {
      var X = se(z, 4), Z = X[0];
      X[1];
      var I = X[2], T = X[3];
      if (_ && Z !== td) {
        var R = {
          mark: It,
          prepend: E ? !1 : "queue",
          attachTo: p,
          priority: l
        }, N = typeof s == "function" ? s() : s;
        N && (R.csp = {
          nonce: N
        });
        var $ = [], F = [];
        Object.keys(T).forEach(function(re) {
          re.startsWith("@layer") ? $.push(re) : F.push(re);
        }), $.forEach(function(re) {
          Tn(ko(T[re]), "_layer-".concat(re), K(K({}, R), {}, {
            prepend: !0
          }));
        });
        var Y = Tn(Z, I, R);
        Y[cn] = h.instanceId, Y.setAttribute(Zn, y), process.env.NODE_ENV !== "production" && Y.setAttribute(Cg, A.join("|")), F.forEach(function(re) {
          Tn(ko(T[re]), "_effect-".concat(re), R);
        });
      }
    }
  ), D = se(j, 3), G = D[0], oe = D[1], ne = D[2];
  return function(z) {
    var X;
    if (!x || _ || !v)
      X = /* @__PURE__ */ w.createElement(b1, null);
    else {
      var Z;
      X = /* @__PURE__ */ w.createElement("style", xt({}, (Z = {}, U(Z, Zn, oe), U(Z, It, ne), Z), {
        dangerouslySetInnerHTML: {
          __html: G
        }
      }));
    }
    return /* @__PURE__ */ w.createElement(w.Fragment, null, X, z);
  };
}
var S1 = function(t, n, r) {
  var o = se(t, 6), i = o[0], s = o[1], a = o[2], c = o[3], l = o[4], u = o[5], d = r || {}, f = d.plain;
  if (l)
    return null;
  var v = i, g = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  };
  return v = Uo(i, s, a, g, f), c && Object.keys(c).forEach(function(p) {
    if (!n[p]) {
      n[p] = !0;
      var x = ko(c[p]), S = Uo(x, s, "_effect-".concat(p), g, f);
      p.startsWith("@layer") ? v = S + v : v += S;
    }
  }), [u, a, v];
}, ad = "cssVar", C1 = function(t, n) {
  var r = t.key, o = t.prefix, i = t.unitless, s = t.ignore, a = t.token, c = t.scope, l = c === void 0 ? "" : c, u = _t(qr), d = u.cache.instanceId, f = u.container, v = a._tokenKey, g = [].concat($t(t.path), [r, l, v]), p = sc(ad, g, function() {
    var x = n(), S = Uf(x, r, {
      prefix: o,
      unitless: i,
      ignore: s,
      scope: l
    }), C = se(S, 2), h = C[0], E = C[1], y = id(g, E);
    return [h, E, y, r];
  }, function(x) {
    var S = se(x, 3), C = S[2];
    ea && Wf(C, {
      mark: It
    });
  }, function(x) {
    var S = se(x, 3), C = S[1], h = S[2];
    if (C) {
      var E = Tn(C, h, {
        mark: It,
        prepend: "queue",
        attachTo: f,
        priority: -999
      });
      E[cn] = d, E.setAttribute(Zn, r);
    }
  });
  return p;
}, w1 = function(t, n, r) {
  var o = se(t, 4), i = o[1], s = o[2], a = o[3], c = r || {}, l = c.plain;
  if (!i)
    return null;
  var u = -999, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  }, f = Uo(i, a, s, d, l);
  return [u, s, f];
}, yr;
yr = {}, U(yr, sd, S1), U(yr, Gf, Yg), U(yr, ad, w1);
var cd = /* @__PURE__ */ function() {
  function e(t, n) {
    bt(this, e), U(this, "name", void 0), U(this, "style", void 0), U(this, "_keyframe", !0), this.name = t, this.style = n;
  }
  return St(e, [{
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
var lc = /* @__PURE__ */ di({});
function E1(e) {
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
  var o = E1(t), i = o[0], s = o.slice(1), a;
  return !e && typeof i == "number" ? a = [] : Array.isArray(e) ? a = $t(e) : a = K({}, e), r && n === void 0 && s.length === 1 ? delete a[i][s[0]] : a[i] = ld(a[i], s, n, r), a;
}
function cs(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && r && n === void 0 && !ia(e, t.slice(0, -1)) ? e : ld(e, t, n, r);
}
function _1(e) {
  return Ee(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function El(e) {
  return Array.isArray(e) ? [] : {};
}
var O1 = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function A1() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = El(t[0]);
  return t.forEach(function(o) {
    function i(s, a) {
      var c = new Set(a), l = ia(o, s), u = Array.isArray(l);
      if (u || _1(l)) {
        if (!c.has(l)) {
          c.add(l);
          var d = ia(r, s);
          u ? r = cs(r, s, []) : (!d || Ee(d) !== "object") && (r = cs(r, s, El(l))), O1(l).forEach(function(f) {
            i([].concat($t(s), [f]), c);
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
function T1() {
  Gt = null, Af();
}
let uc = ud;
process.env.NODE_ENV !== "production" && (uc = (e, t, n) => {
  hn(e, `[antd: ${t}] ${n}`), process.env.NODE_ENV === "test" && T1();
});
const fd = /* @__PURE__ */ w.createContext({}), pn = process.env.NODE_ENV !== "production" ? (e) => {
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
}, Ur = uc, R1 = /* @__PURE__ */ di(void 0), yt = "${label} is not a valid ${type}", Ai = {
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
        string: yt,
        method: yt,
        array: yt,
        object: yt,
        number: yt,
        date: yt,
        boolean: yt,
        integer: yt,
        float: yt,
        regexp: yt,
        email: yt,
        url: yt,
        hex: yt
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
let jo = [];
const _l = () => jo.reduce((e, t) => Object.assign(Object.assign({}, e), t), Ai.Modal);
function P1(e) {
  if (e) {
    const t = Object.assign({}, e);
    return jo.push(t), _l(), () => {
      jo = jo.filter((n) => n !== t), _l();
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
    const i = pn("LocaleProvider");
    process.env.NODE_ENV !== "production" && i(r === hd, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  w.useEffect(() => P1(t == null ? void 0 : t.Modal), [t]);
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
function br(e, t) {
  const n = t || 255;
  return e > n ? n : e < 0 ? 0 : e;
}
let nt = class gd {
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
      this.r = br(t.r), this.g = br(t.g), this.b = br(t.b), this.a = typeof t.a == "number" ? br(t.a, 1) : 1;
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
    return o[t] = br(n, r), o;
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
var fo = 2, Al = 0.16, I1 = 0.05, N1 = 0.05, k1 = 0.15, md = 5, vd = 4, j1 = [{
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
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = n ? Math.round(e.h) - fo * t : Math.round(e.h) + fo * t : r = n ? Math.round(e.h) + fo * t : Math.round(e.h) - fo * t, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function Rl(e, t, n) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var r;
  return n ? r = e.s - Al * t : t === vd ? r = e.s + Al : r = e.s + I1 * t, r > 1 && (r = 1), n && t === md && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Math.round(r * 100) / 100;
}
function Pl(e, t, n) {
  var r;
  return n ? r = e.v + N1 * t : r = e.v - k1 * t, r = Math.max(0, Math.min(1, r)), Math.round(r * 100) / 100;
}
function Dr(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], r = new nt(e), o = r.toHsv(), i = md; i > 0; i -= 1) {
    var s = new nt({
      h: Tl(o, i, !0),
      s: Rl(o, i, !0),
      v: Pl(o, i, !0)
    });
    n.push(s);
  }
  n.push(r);
  for (var a = 1; a <= vd; a += 1) {
    var c = new nt({
      h: Tl(o, a),
      s: Rl(o, a),
      v: Pl(o, a)
    });
    n.push(c);
  }
  return t.theme === "dark" ? j1.map(function(l) {
    var u = l.index, d = l.amount;
    return new nt(t.backgroundColor || "#141414").mix(n[u], d).toHexString();
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
var Go = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
Go.primary = Go[5];
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
  blue: Go,
  geekblue: pa,
  purple: xa,
  magenta: ga,
  grey: ma
};
function L1(e, t) {
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
  } = e, d = n(c), f = n(o), v = n(i), g = n(s), p = n(a), x = r(l, u), S = e.colorLink || e.colorInfo, C = n(S), h = new nt(g[1]).mix(new nt(g[3]), 50).toHexString();
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
    colorLinkHover: C[4],
    colorLink: C[6],
    colorLinkActive: C[7],
    colorBgMask: new nt("#000").setA(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const M1 = (e) => {
  let t = e, n = e, r = e, o = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? n = 4 : e < 8 && e >= 7 ? n = 5 : e < 14 && e >= 8 ? n = 6 : e < 16 && e >= 14 ? n = 7 : e >= 16 && (n = 8), e < 6 && e >= 2 ? r = 1 : e >= 6 && (r = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
    borderRadius: e,
    borderRadiusXS: r,
    borderRadiusSM: n,
    borderRadiusLG: t,
    borderRadiusOuter: o
  };
};
function D1(e) {
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
  }, M1(r));
}
const B1 = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function Lo(e) {
  return (e + 8) / e;
}
function z1(e) {
  const t = Array.from({
    length: 10
  }).map((n, r) => {
    const o = r - 1, i = e * Math.pow(Math.E, o / 5), s = r > 1 ? Math.floor(i) : Math.ceil(i);
    return Math.floor(s / 2) * 2;
  });
  return t[1] = e, t.map((n) => ({
    size: n,
    lineHeight: Lo(n)
  }));
}
const H1 = (e) => {
  const t = z1(e), n = t.map((u) => u.size), r = t.map((u) => u.lineHeight), o = n[1], i = n[0], s = n[2], a = r[1], c = r[0], l = r[2];
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
function $1(e) {
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
const Ct = (e, t) => new nt(e).setA(t).toRgbString(), Sr = (e, t) => new nt(e).darken(t).toHexString(), F1 = (e) => {
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
}, V1 = (e, t) => {
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
function W1(e) {
  us.pink = us.magenta, fs.pink = fs.magenta;
  const t = Object.keys(xd).map((n) => {
    const r = e[n] === us[n] ? fs[n] : Dr(e[n]);
    return Array.from({
      length: 10
    }, () => 1).reduce((o, i, s) => (o[`${n}-${s + 1}`] = r[s], o[`${n}${s + 1}`] = r[s], o), {});
  }).reduce((n, r) => (n = Object.assign(Object.assign({}, n), r), n), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), L1(e, {
    generateColorPalettes: F1,
    generateNeutralColorPalettes: V1
  })), H1(e.fontSize)), $1(e)), B1(e)), D1(e));
}
const yd = Qs(W1), va = {
  token: Mr,
  override: {
    override: Mr
  },
  hashed: !0
}, bd = /* @__PURE__ */ q.createContext(va), Yo = "ant", fc = "anticon", q1 = (e, t) => t || (e ? `${Yo}-${e}` : Yo), kt = /* @__PURE__ */ w.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: q1,
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
const U1 = `-ant-${Date.now()}-${Math.random()}`;
function G1(e, t) {
  const n = {}, r = (s, a) => {
    let c = s.clone();
    return c = (a == null ? void 0 : a(c)) || c, c.toRgbString();
  }, o = (s, a) => {
    const c = new nt(s), l = Dr(c.toRgbString());
    n[`${a}-color`] = r(c), n[`${a}-color-disabled`] = l[1], n[`${a}-color-hover`] = l[4], n[`${a}-color-active`] = l[6], n[`${a}-color-outline`] = c.clone().setA(0.2).toRgbString(), n[`${a}-color-deprecated-bg`] = l[0], n[`${a}-color-deprecated-border`] = l[2];
  };
  if (t.primaryColor) {
    o(t.primaryColor, "primary");
    const s = new nt(t.primaryColor), a = Dr(s.toRgbString());
    a.forEach((l, u) => {
      n[`primary-${u + 1}`] = l;
    }), n["primary-color-deprecated-l-35"] = r(s, (l) => l.lighten(35)), n["primary-color-deprecated-l-20"] = r(s, (l) => l.lighten(20)), n["primary-color-deprecated-t-20"] = r(s, (l) => l.tint(20)), n["primary-color-deprecated-t-50"] = r(s, (l) => l.tint(50)), n["primary-color-deprecated-f-12"] = r(s, (l) => l.setA(l.a * 0.12));
    const c = new nt(a[0]);
    n["primary-color-active-deprecated-f-30"] = r(c, (l) => l.setA(l.a * 0.3)), n["primary-color-active-deprecated-d-02"] = r(c, (l) => l.darken(2));
  }
  return t.successColor && o(t.successColor, "success"), t.warningColor && o(t.warningColor, "warning"), t.errorColor && o(t.errorColor, "error"), t.infoColor && o(t.infoColor, "info"), `
  :root {
    ${Object.keys(n).map((s) => `--${e}-${s}: ${n[s]};`).join(`
`)}
  }
  `.trim();
}
function Y1(e, t) {
  const n = G1(e, t);
  Jt() ? Tn(n, `${U1}-dynamic-theme`) : process.env.NODE_ENV !== "production" && Ur(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const Xo = /* @__PURE__ */ w.createContext(!1), X1 = (e) => {
  let {
    children: t,
    disabled: n
  } = e;
  const r = w.useContext(Xo);
  return /* @__PURE__ */ w.createElement(Xo.Provider, {
    value: n ?? r
  }, t);
}, er = /* @__PURE__ */ w.createContext(void 0), K1 = (e) => {
  let {
    children: t,
    size: n
  } = e;
  const r = w.useContext(er);
  return /* @__PURE__ */ w.createElement(er.Provider, {
    value: n || r
  }, t);
};
function Z1() {
  const e = _t(Xo), t = _t(er);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
var Sd = /* @__PURE__ */ St(function e() {
  bt(this, e);
}), Cd = "CALC_UNIT", J1 = new RegExp(Cd, "g");
function ds(e) {
  return typeof e == "number" ? "".concat(e).concat(Cd) : e;
}
var Q1 = /* @__PURE__ */ function(e) {
  cr(n, e);
  var t = Wr(n);
  function n(r, o) {
    var i;
    bt(this, n), i = t.call(this), U(An(i), "result", ""), U(An(i), "unitlessCssVar", void 0), U(An(i), "lowPriority", void 0);
    var s = Ee(r);
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
      }) && (c = !1), this.result = this.result.replace(J1, c ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), n;
}(Sd), em = /* @__PURE__ */ function(e) {
  cr(n, e);
  var t = Wr(n);
  function n(r) {
    var o;
    return bt(this, n), o = t.call(this), U(An(o), "result", 0), r instanceof n ? o.result = r.result : typeof r == "number" && (o.result = r), o;
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
}(Sd), tm = function(t, n) {
  var r = t === "css" ? Q1 : em;
  return function(o) {
    return new r(o, n);
  };
}, Nl = function(t, n) {
  return "".concat([n, t.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function dn(e) {
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
function nm(e, t) {
  var n = t || {}, r = n.defaultValue, o = n.value, i = n.onChange, s = n.postState, a = Br(function() {
    return hs(o) ? o : hs(r) ? typeof r == "function" ? r() : r : typeof e == "function" ? e() : e;
  }), c = se(a, 2), l = c[0], u = c[1], d = o !== void 0 ? o : l, f = s ? s(d) : d, v = dn(i), g = Br([d]), p = se(g, 2), x = p[0], S = p[1];
  vl(function() {
    var h = x[0];
    l !== h && v(l, h);
  }, [x]), vl(function() {
    hs(o) || u(o);
  }, [o]);
  var C = dn(function(h, E) {
    u(h, E), S([d], E);
  });
  return [f, C];
}
function kl(e, t, n, r) {
  var o = K({}, t[e]);
  if (r != null && r.deprecatedTokens) {
    var i = r.deprecatedTokens;
    i.forEach(function(a) {
      var c = se(a, 2), l = c[0], u = c[1];
      if (process.env.NODE_ENV !== "production" && hn(!(o != null && o[l]), "Component Token `".concat(String(l), "` of ").concat(String(e), " is deprecated. Please use `").concat(String(u), "` instead.")), o != null && o[l] || o != null && o[u]) {
        var d;
        (d = o[u]) !== null && d !== void 0 || (o[u] = o == null ? void 0 : o[l]);
      }
    });
  }
  var s = K(K({}, n), o);
  return Object.keys(s).forEach(function(a) {
    s[a] === t[a] && delete s[a];
  }), s;
}
var wd = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", ya = !0;
function xn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  if (!wd)
    return Object.assign.apply(Object, [{}].concat(t));
  ya = !1;
  var r = {};
  return t.forEach(function(o) {
    if (Ee(o) === "object") {
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
  }), ya = !0, r;
}
var jl = {};
function rm() {
}
var om = function(t) {
  var n, r = t, o = rm;
  return wd && typeof Proxy < "u" && (n = /* @__PURE__ */ new Set(), r = new Proxy(t, {
    get: function(s, a) {
      if (ya) {
        var c;
        (c = n) === null || c === void 0 || c.add(a);
      }
      return s[a];
    }
  }), o = function(s, a) {
    var c;
    jl[s] = {
      global: Array.from(n),
      component: K(K({}, (c = jl[s]) === null || c === void 0 ? void 0 : c.component), a)
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
    return n(xn(t, (r = t[e]) !== null && r !== void 0 ? r : {}));
  }
  return n ?? {};
}
function im(e) {
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
var sm = 1e3 * 60 * 10, am = /* @__PURE__ */ function() {
  function e() {
    bt(this, e), U(this, "map", /* @__PURE__ */ new Map()), U(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), U(this, "nextID", 0), U(this, "lastAccessBeat", /* @__PURE__ */ new Map()), U(this, "accessBeat", 0);
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
        return i && Ee(i) === "object" ? "obj_".concat(r.getObjectID(i)) : "".concat(Ee(i), "_").concat(i);
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
          r - o > sm && (n.map.delete(i), n.lastAccessBeat.delete(i));
        }), this.accessBeat = 0;
      }
    }
  }]), e;
}(), Ml = new am();
function cm(e, t) {
  return q.useMemo(function() {
    var n = Ml.get(t);
    if (n)
      return n;
    var r = e();
    return Ml.set(t, r), r;
  }, t);
}
var lm = function() {
  return {};
};
function um(e) {
  var t = e.useCSP, n = t === void 0 ? lm : t, r = e.useToken, o = e.usePrefix, i = e.getResetStyles, s = e.getCommonStyle, a = e.getCompUnitless;
  function c(f, v, g, p) {
    var x = Array.isArray(f) ? f[0] : f;
    function S(j) {
      return "".concat(String(x)).concat(j.slice(0, 1).toUpperCase()).concat(j.slice(1));
    }
    var C = (p == null ? void 0 : p.unitless) || {}, h = typeof a == "function" ? a(f) : {}, E = K(K({}, h), {}, U({}, S("zIndexPopup"), !0));
    Object.keys(C).forEach(function(j) {
      E[S(j)] = C[j];
    });
    var y = K(K({}, p), {}, {
      unitless: E,
      prefixToken: S
    }), A = u(f, v, g, y), _ = l(x, g, y);
    return function(j) {
      var D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : j, G = A(j, D), oe = se(G, 2), ne = oe[1], z = _(D), X = se(z, 2), Z = X[0], I = X[1];
      return [Z, ne, I];
    };
  }
  function l(f, v, g) {
    var p = g.unitless, x = g.injectStyle, S = x === void 0 ? !0 : x, C = g.prefixToken, h = g.ignore, E = function(_) {
      var j = _.rootCls, D = _.cssVar, G = D === void 0 ? {} : D, oe = r(), ne = oe.realToken;
      return C1({
        path: [f],
        prefix: G.prefix,
        key: G.key,
        unitless: p,
        ignore: h,
        token: ne,
        scope: j
      }, function() {
        var z = Ll(f, ne, v), X = kl(f, ne, z, {
          deprecatedTokens: g == null ? void 0 : g.deprecatedTokens
        });
        return Object.keys(z).forEach(function(Z) {
          X[C(Z)] = X[Z], delete X[Z];
        }), X;
      }), null;
    }, y = function(_) {
      var j = r(), D = j.cssVar;
      return [function(G) {
        return S && D ? /* @__PURE__ */ q.createElement(q.Fragment, null, /* @__PURE__ */ q.createElement(E, {
          rootCls: _,
          cssVar: D,
          component: f
        }), G) : G;
      }, D == null ? void 0 : D.key];
    };
    return y;
  }
  function u(f, v, g) {
    var p = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, x = Array.isArray(f) ? f : [f, f], S = se(x, 1), C = S[0], h = x.join("-"), E = e.layer || {
      name: "antd"
    };
    return function(y) {
      var A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : y, _ = r(), j = _.theme, D = _.realToken, G = _.hashId, oe = _.token, ne = _.cssVar, z = o(), X = z.rootPrefixCls, Z = z.iconPrefixCls, I = n(), T = ne ? "css" : "js", R = cm(function() {
        var J = /* @__PURE__ */ new Set();
        return ne && Object.keys(p.unitless || {}).forEach(function(ae) {
          J.add(Ro(ae, ne.prefix)), J.add(Ro(ae, Nl(C, ne.prefix)));
        }), tm(T, J);
      }, [T, C, ne == null ? void 0 : ne.prefix]), N = im(T), $ = N.max, F = N.min, Y = {
        theme: j,
        token: oe,
        hashId: G,
        nonce: function() {
          return I.nonce;
        },
        clientOnly: p.clientOnly,
        layer: E,
        // antd is always at top of styles
        order: p.order || -999
      };
      typeof i == "function" && oa(K(K({}, Y), {}, {
        clientOnly: !1,
        path: ["Shared", X]
      }), function() {
        return i(oe, {
          prefix: {
            rootPrefixCls: X,
            iconPrefixCls: Z
          },
          csp: I
        });
      });
      var re = oa(K(K({}, Y), {}, {
        path: [h, y, Z]
      }), function() {
        if (p.injectStyle === !1)
          return [];
        var J = om(oe), ae = J.token, le = J.flush, ue = Ll(C, D, g), Ae = ".".concat(y), ge = kl(C, D, ue, {
          deprecatedTokens: p.deprecatedTokens
        });
        ne && ue && Ee(ue) === "object" && Object.keys(ue).forEach(function(k) {
          ue[k] = "var(".concat(Ro(k, Nl(C, ne.prefix)), ")");
        });
        var Le = xn(ae, {
          componentCls: Ae,
          prefixCls: y,
          iconCls: ".".concat(Z),
          antCls: ".".concat(X),
          calc: R,
          // @ts-ignore
          max: $,
          // @ts-ignore
          min: F
        }, ne ? ue : ge), ke = v(Le, {
          hashId: G,
          prefixCls: y,
          rootPrefixCls: X,
          iconPrefixCls: Z
        });
        le(C, ge);
        var pe = typeof s == "function" ? s(Le, y, A, p.resetFont) : null;
        return [p.resetStyle === !1 ? null : pe, ke];
      });
      return [re, G];
    };
  }
  function d(f, v, g) {
    var p = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, x = u(f, v, g, K({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, p)), S = function(h) {
      var E = h.prefixCls, y = h.rootCls, A = y === void 0 ? E : y;
      return x(E, A), null;
    };
    return process.env.NODE_ENV !== "production" && (S.displayName = "SubStyle_".concat(String(Array.isArray(f) ? f.join(".") : f))), S;
  }
  return {
    genStyleHooks: c,
    genSubStyleComponent: d,
    genComponentStyleHook: u
  };
}
const hc = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"], fm = "5.24.6";
function ps(e) {
  return e >= 0 && e <= 255;
}
function Ar(e, t) {
  const {
    r: n,
    g: r,
    b: o,
    a: i
  } = new nt(e).toRgb();
  if (i < 1)
    return e;
  const {
    r: s,
    g: a,
    b: c
  } = new nt(t).toRgb();
  for (let l = 0.01; l <= 1; l += 0.01) {
    const u = Math.round((n - s * (1 - l)) / l), d = Math.round((r - a * (1 - l)) / l), f = Math.round((o - c * (1 - l)) / l);
    if (ps(u) && ps(d) && ps(f))
      return new nt({
        r: u,
        g: d,
        b: f,
        a: Math.round(l * 100) / 100
      }).toRgbString();
  }
  return new nt({
    r: n,
    g: r,
    b: o,
    a: 1
  }).toRgbString();
}
var dm = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function Ed(e) {
  const {
    override: t
  } = e, n = dm(e, ["override"]), r = Object.assign({}, t);
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
      0 1px 2px -2px ${new nt("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new nt("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new nt("rgba(0, 0, 0, 0.09)").toRgbString()}
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
}, hm = {
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
}, pm = {
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
function Gr() {
  const {
    token: e,
    hashed: t,
    theme: n,
    override: r,
    cssVar: o
  } = q.useContext(bd), i = `${fm}-${t || ""}`, s = n || yd, [a, c, l] = Gg(s, [Mr, e], {
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
      ignore: hm,
      preserve: pm
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
}), xm = (e) => ({
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
}), gm = (e, t, n, r) => {
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
}, mm = (e, t) => ({
  outline: `${Kt(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
  outlineOffset: t ?? 1,
  transition: "outline-offset 0s, outline 0s"
}), vm = (e, t) => ({
  "&:focus-visible": Object.assign({}, mm(e, t))
}), Rd = (e) => ({
  [`.${e}`]: Object.assign(Object.assign({}, Td()), {
    [`.${e} .${e}-icon`]: {
      display: "block"
    }
  })
}), {
  genStyleHooks: Ti,
  genComponentStyleHook: ym,
  genSubStyleComponent: bm
} = um({
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
    const [e, t, n, r, o] = Gr();
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
    const r = xm(e);
    return [r, {
      "&": r
    }, Rd((n = t == null ? void 0 : t.prefix.iconPrefixCls) !== null && n !== void 0 ? n : fc)];
  },
  getCommonStyle: gm,
  getCompUnitless: () => _d
}), Sm = (e, t) => {
  const [n, r] = Gr();
  return oa({
    token: r,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => t == null ? void 0 : t.nonce,
    layer: {
      name: "antd"
    }
  }, () => [Rd(e)]);
}, Cm = Object.assign({}, w), {
  useId: Bl
} = Cm, wm = () => "", Em = typeof Bl > "u" ? wm : Bl;
function _m(e, t, n) {
  var r, o;
  const i = pn("ConfigProvider"), s = e || {}, a = s.inherit === !1 || !t ? Object.assign(Object.assign({}, va), {
    hashed: (r = t == null ? void 0 : t.hashed) !== null && r !== void 0 ? r : va.hashed,
    cssVar: t == null ? void 0 : t.cssVar
  }) : t, c = Em();
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
    return !yg(d, v, !0);
  }));
}
var Om = ["children"], Pd = /* @__PURE__ */ w.createContext({});
function Am(e) {
  var t = e.children, n = Nn(e, Om);
  return /* @__PURE__ */ w.createElement(Pd.Provider, {
    value: n
  }, t);
}
var Tm = /* @__PURE__ */ function(e) {
  cr(n, e);
  var t = Wr(n);
  function n() {
    return bt(this, n), t.apply(this, arguments);
  }
  return St(n, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), n;
}(w.Component);
function Rm(e) {
  var t = w.useReducer(function(a) {
    return a + 1;
  }, 0), n = se(t, 2), r = n[1], o = w.useRef(e), i = dn(function() {
    return o.current;
  }), s = dn(function(a) {
    o.current = typeof a == "function" ? a(o.current) : a, r();
  });
  return [i, s];
}
var sn = "none", ho = "appear", po = "enter", xo = "leave", zl = "none", Rt = "prepare", zn = "start", Hn = "active", pc = "end", Id = "prepared";
function Hl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit".concat(e)] = "webkit".concat(t), n["Moz".concat(e)] = "moz".concat(t), n["ms".concat(e)] = "MS".concat(t), n["O".concat(e)] = "o".concat(t.toLowerCase()), n;
}
function Pm(e, t) {
  var n = {
    animationend: Hl("Animation", "AnimationEnd"),
    transitionend: Hl("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete n.animationend.animation, "TransitionEvent" in t || delete n.transitionend.transition), n;
}
var Im = Pm(Jt(), typeof window < "u" ? window : {}), Nd = {};
if (Jt()) {
  var Nm = document.createElement("div");
  Nd = Nm.style;
}
var go = {};
function kd(e) {
  if (go[e])
    return go[e];
  var t = Im[e];
  if (t)
    for (var n = Object.keys(t), r = n.length, o = 0; o < r; o += 1) {
      var i = n[o];
      if (Object.prototype.hasOwnProperty.call(t, i) && i in Nd)
        return go[e] = t[i], go[e];
    }
  return "";
}
var jd = kd("animationend"), Ld = kd("transitionend"), Md = !!(jd && Ld), $l = jd || "animationend", Fl = Ld || "transitionend";
function Vl(e, t) {
  if (!e) return null;
  if (Ee(e) === "object") {
    var n = t.replace(/-\w/g, function(r) {
      return r[1].toUpperCase();
    });
    return e[n];
  }
  return "".concat(e, "-").concat(t);
}
const km = function(e) {
  var t = Oe();
  function n(o) {
    o && (o.removeEventListener(Fl, e), o.removeEventListener($l, e));
  }
  function r(o) {
    t.current && t.current !== o && n(t.current), o && o !== t.current && (o.addEventListener(Fl, e), o.addEventListener($l, e), t.current = o);
  }
  return w.useEffect(function() {
    return function() {
      n(t.current);
    };
  }, []), [r, n];
};
var Dd = Jt() ? eh : Xe;
const jm = function() {
  var e = w.useRef(null);
  function t() {
    fn.cancel(e.current);
  }
  function n(r) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var i = fn(function() {
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
var Lm = [Rt, zn, Hn, pc], Mm = [Rt, Id], Bd = !1, Dm = !0;
function zd(e) {
  return e === Hn || e === pc;
}
const Bm = function(e, t, n) {
  var r = Br(zl), o = se(r, 2), i = o[0], s = o[1], a = jm(), c = se(a, 2), l = c[0], u = c[1];
  function d() {
    s(Rt, !0);
  }
  var f = t ? Mm : Lm;
  return Dd(function() {
    if (i !== zl && i !== pc) {
      var v = f.indexOf(i), g = f[v + 1], p = n(i);
      p === Bd ? s(g, !0) : g && l(function(x) {
        function S() {
          x.isCanceled() || s(g, !0);
        }
        p === !0 ? S() : Promise.resolve(p).then(S);
      });
    }
  }, [e, i]), w.useEffect(function() {
    return function() {
      u();
    };
  }, []), [d, i];
};
function zm(e, t, n, r) {
  var o = r.motionEnter, i = o === void 0 ? !0 : o, s = r.motionAppear, a = s === void 0 ? !0 : s, c = r.motionLeave, l = c === void 0 ? !0 : c, u = r.motionDeadline, d = r.motionLeaveImmediately, f = r.onAppearPrepare, v = r.onEnterPrepare, g = r.onLeavePrepare, p = r.onAppearStart, x = r.onEnterStart, S = r.onLeaveStart, C = r.onAppearActive, h = r.onEnterActive, E = r.onLeaveActive, y = r.onAppearEnd, A = r.onEnterEnd, _ = r.onLeaveEnd, j = r.onVisibleChanged, D = Br(), G = se(D, 2), oe = G[0], ne = G[1], z = Rm(sn), X = se(z, 2), Z = X[0], I = X[1], T = Br(null), R = se(T, 2), N = R[0], $ = R[1], F = Z(), Y = Oe(!1), re = Oe(null);
  function J() {
    return n();
  }
  var ae = Oe(!1);
  function le() {
    I(sn), $(null, !0);
  }
  var ue = dn(function(ze) {
    var Ne = Z();
    if (Ne !== sn) {
      var Qe = J();
      if (!(ze && !ze.deadline && ze.target !== Qe)) {
        var ft = ae.current, lt;
        Ne === ho && ft ? lt = y == null ? void 0 : y(Qe, ze) : Ne === po && ft ? lt = A == null ? void 0 : A(Qe, ze) : Ne === xo && ft && (lt = _ == null ? void 0 : _(Qe, ze)), ft && lt !== !1 && le();
      }
    }
  }), Ae = km(ue), ge = se(Ae, 1), Le = ge[0], ke = function(Ne) {
    switch (Ne) {
      case ho:
        return U(U(U({}, Rt, f), zn, p), Hn, C);
      case po:
        return U(U(U({}, Rt, v), zn, x), Hn, h);
      case xo:
        return U(U(U({}, Rt, g), zn, S), Hn, E);
      default:
        return {};
    }
  }, pe = w.useMemo(function() {
    return ke(F);
  }, [F]), k = Bm(F, !e, function(ze) {
    if (ze === Rt) {
      var Ne = pe[Rt];
      return Ne ? Ne(J()) : Bd;
    }
    if (V in pe) {
      var Qe;
      $(((Qe = pe[V]) === null || Qe === void 0 ? void 0 : Qe.call(pe, J(), null)) || null);
    }
    return V === Hn && F !== sn && (Le(J()), u > 0 && (clearTimeout(re.current), re.current = setTimeout(function() {
      ue({
        deadline: !0
      });
    }, u))), V === Id && le(), Dm;
  }), L = se(k, 2), H = L[0], V = L[1], O = zd(V);
  ae.current = O;
  var ee = Oe(null);
  Dd(function() {
    if (!(Y.current && ee.current === t)) {
      ne(t);
      var ze = Y.current;
      Y.current = !0;
      var Ne;
      !ze && t && a && (Ne = ho), ze && t && i && (Ne = po), (ze && !t && l || !ze && d && !t && l) && (Ne = xo);
      var Qe = ke(Ne);
      Ne && (e || Qe[Rt]) ? (I(Ne), H()) : I(sn), ee.current = t;
    }
  }, [t]), Xe(function() {
    // Cancel appear
    (F === ho && !a || // Cancel enter
    F === po && !i || // Cancel leave
    F === xo && !l) && I(sn);
  }, [a, i, l]), Xe(function() {
    return function() {
      Y.current = !1, clearTimeout(re.current);
    };
  }, []);
  var Q = w.useRef(!1);
  Xe(function() {
    oe && (Q.current = !0), oe !== void 0 && F === sn && ((Q.current || oe) && (j == null || j(oe)), Q.current = !0);
  }, [oe, F]);
  var Me = N;
  return pe[Rt] && V === zn && (Me = K({
    transition: "none"
  }, Me)), [F, V, Me, oe ?? t];
}
function Hm(e) {
  var t = e;
  Ee(e) === "object" && (t = e.transitionSupport);
  function n(o, i) {
    return !!(o.motionName && t && i !== !1);
  }
  var r = /* @__PURE__ */ w.forwardRef(function(o, i) {
    var s = o.visible, a = s === void 0 ? !0 : s, c = o.removeOnLeave, l = c === void 0 ? !0 : c, u = o.forceRender, d = o.children, f = o.motionName, v = o.leavedClassName, g = o.eventProps, p = w.useContext(Pd), x = p.motion, S = n(o, x), C = Oe(), h = Oe();
    function E() {
      try {
        return C.current instanceof HTMLElement ? C.current : cg(h.current);
      } catch {
        return null;
      }
    }
    var y = zm(S, a, E, o), A = se(y, 4), _ = A[0], j = A[1], D = A[2], G = A[3], oe = w.useRef(G);
    G && (oe.current = !0);
    var ne = w.useCallback(function(R) {
      C.current = R, Pf(i, R);
    }, [i]), z, X = K(K({}, g), {}, {
      visible: a
    });
    if (!d)
      z = null;
    else if (_ === sn)
      G ? z = d(K({}, X), ne) : !l && oe.current && v ? z = d(K(K({}, X), {}, {
        className: v
      }), ne) : u || !l && !v ? z = d(K(K({}, X), {}, {
        style: {
          display: "none"
        }
      }), ne) : z = null;
    else {
      var Z;
      j === Rt ? Z = "prepare" : zd(j) ? Z = "active" : j === zn && (Z = "start");
      var I = Vl(f, "".concat(_, "-").concat(Z));
      z = d(K(K({}, X), {}, {
        className: we(Vl(f, _), U(U({}, I, I && Z), f, typeof f == "string")),
        style: D
      }), ne);
    }
    if (/* @__PURE__ */ w.isValidElement(z) && If(z)) {
      var T = kf(z);
      T || (z = /* @__PURE__ */ w.cloneElement(z, {
        ref: ne
      }));
    }
    return /* @__PURE__ */ w.createElement(Tm, {
      ref: h
    }, z);
  });
  return r.displayName = "CSSMotion", r;
}
const Ri = Hm(Md);
var ba = "add", Sa = "keep", Ca = "remove", xs = "removed";
function $m(e) {
  var t;
  return e && Ee(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, K(K({}, t), {}, {
    key: String(t.key)
  });
}
function wa() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map($m);
}
function Fm() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = [], r = 0, o = t.length, i = wa(e), s = wa(t);
  i.forEach(function(l) {
    for (var u = !1, d = r; d < o; d += 1) {
      var f = s[d];
      if (f.key === l.key) {
        r < d && (n = n.concat(s.slice(r, d).map(function(v) {
          return K(K({}, v), {}, {
            status: ba
          });
        })), r = d), n.push(K(K({}, f), {}, {
          status: Sa
        })), r += 1, u = !0;
        break;
      }
    }
    u || n.push(K(K({}, l), {}, {
      status: Ca
    }));
  }), r < o && (n = n.concat(s.slice(r).map(function(l) {
    return K(K({}, l), {}, {
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
      return d !== l || f !== Ca;
    }), n.forEach(function(u) {
      u.key === l && (u.status = Sa);
    });
  }), n;
}
var Vm = ["component", "children", "onVisibleChanged", "onAllRemoved"], Wm = ["status"], qm = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function Um(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ri, n = /* @__PURE__ */ function(r) {
    cr(i, r);
    var o = Wr(i);
    function i() {
      var s;
      bt(this, i);
      for (var a = arguments.length, c = new Array(a), l = 0; l < a; l++)
        c[l] = arguments[l];
      return s = o.call.apply(o, [this].concat(c)), U(An(s), "state", {
        keyEntities: []
      }), U(An(s), "removeKey", function(u) {
        s.setState(function(d) {
          var f = d.keyEntities.map(function(v) {
            return v.key !== u ? v : K(K({}, v), {}, {
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
        var v = Nn(l, Vm), g = u || w.Fragment, p = {};
        return qm.forEach(function(x) {
          p[x] = v[x], delete v[x];
        }), delete v.keys, /* @__PURE__ */ w.createElement(g, v, c.map(function(x, S) {
          var C = x.status, h = Nn(x, Wm), E = C === ba || C === Sa;
          return /* @__PURE__ */ w.createElement(t, xt({}, p, {
            key: h.key,
            visible: E,
            eventProps: h,
            onVisibleChanged: function(A) {
              f == null || f(A, {
                key: h.key
              }), A || a.removeKey(h.key);
            }
          }), function(y, A) {
            return d(K(K({}, y), {}, {
              index: S
            }), A);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(a, c) {
        var l = a.keys, u = c.keyEntities, d = wa(l), f = Fm(u, d);
        return {
          keyEntities: f.filter(function(v) {
            var g = u.find(function(p) {
              var x = p.key;
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
Um(Md);
function Gm(e) {
  const {
    children: t
  } = e, [, n] = Gr(), {
    motion: r
  } = n, o = w.useRef(!1);
  return o.current = o.current || r === !1, o.current ? /* @__PURE__ */ w.createElement(Am, {
    motion: r
  }, t) : t;
}
const Hd = /* @__PURE__ */ w.memo((e) => {
  let {
    dropdownMatchSelectWidth: t
  } = e;
  return pn("ConfigProvider").deprecated(t === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
process.env.NODE_ENV !== "production" && (Hd.displayName = "PropWarning");
const Ym = process.env.NODE_ENV !== "production" ? Hd : () => null;
var Xm = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
let Ea = !1;
process.env.NODE_ENV;
const Km = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let $d;
function Zm() {
  return $d || Yo;
}
function Jm(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const Qm = (e) => {
  const {
    prefixCls: t,
    iconPrefixCls: n,
    theme: r,
    holderRender: o
  } = e;
  t !== void 0 && ($d = t), r && Jm(r) && (process.env.NODE_ENV !== "production" && Ur(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), Y1(Zm(), r));
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
    popupOverflow: p,
    legacyLocale: x,
    parentContext: S,
    iconPrefixCls: C,
    theme: h,
    componentDisabled: E,
    segmented: y,
    statistic: A,
    spin: _,
    calendar: j,
    carousel: D,
    cascader: G,
    collapse: oe,
    typography: ne,
    checkbox: z,
    descriptions: X,
    divider: Z,
    drawer: I,
    skeleton: T,
    steps: R,
    image: N,
    layout: $,
    list: F,
    mentions: Y,
    modal: re,
    progress: J,
    result: ae,
    slider: le,
    breadcrumb: ue,
    menu: Ae,
    pagination: ge,
    input: Le,
    textArea: ke,
    empty: pe,
    badge: k,
    radio: L,
    rate: H,
    switch: V,
    transfer: O,
    avatar: ee,
    message: Q,
    tag: Me,
    table: ze,
    card: Ne,
    tabs: Qe,
    timeline: ft,
    timePicker: lt,
    upload: Vt,
    notification: B,
    tree: b,
    colorPicker: ve,
    datePicker: ye,
    rangePicker: _e,
    flex: ce,
    wave: He,
    dropdown: be,
    warning: Se,
    tour: Be,
    tooltip: vt,
    popover: gn,
    popconfirm: et,
    floatButtonGroup: Fe,
    variant: dt,
    inputNumber: en,
    treeSelect: Mt
  } = e, tn = w.useCallback((Ve, m) => {
    const {
      prefixCls: M
    } = e;
    if (m)
      return m;
    const W = M || S.getPrefixCls("");
    return Ve ? `${W}-${Ve}` : W;
  }, [S.getPrefixCls, e.prefixCls]), Wt = C || S.iconPrefixCls || fc, jn = n || S.csp;
  Sm(Wt, jn);
  const mn = _m(h, S.theme, {
    prefixCls: tn("")
  });
  process.env.NODE_ENV !== "production" && (Ea = Ea || !!mn);
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
    getPrefixCls: tn,
    iconPrefixCls: Wt,
    theme: mn,
    segmented: y,
    statistic: A,
    spin: _,
    calendar: j,
    carousel: D,
    cascader: G,
    collapse: oe,
    typography: ne,
    checkbox: z,
    descriptions: X,
    divider: Z,
    drawer: I,
    skeleton: T,
    steps: R,
    image: N,
    input: Le,
    textArea: ke,
    layout: $,
    list: F,
    mentions: Y,
    modal: re,
    progress: J,
    result: ae,
    slider: le,
    breadcrumb: ue,
    menu: Ae,
    pagination: ge,
    empty: pe,
    badge: k,
    radio: L,
    rate: H,
    switch: V,
    transfer: O,
    avatar: ee,
    message: Q,
    tag: Me,
    table: ze,
    card: Ne,
    tabs: Qe,
    timeline: ft,
    timePicker: lt,
    upload: Vt,
    notification: B,
    tree: b,
    colorPicker: ve,
    datePicker: ye,
    rangePicker: _e,
    flex: ce,
    wave: He,
    dropdown: be,
    warning: Se,
    tour: Be,
    tooltip: vt,
    popover: gn,
    popconfirm: et,
    floatButtonGroup: Fe,
    variant: dt,
    inputNumber: en,
    treeSelect: Mt
  };
  process.env.NODE_ENV !== "production" && pn("ConfigProvider")(!("autoInsertSpaceInButton" in e), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const nn = Object.assign({}, S);
  Object.keys(Ln).forEach((Ve) => {
    Ln[Ve] !== void 0 && (nn[Ve] = Ln[Ve]);
  }), Km.forEach((Ve) => {
    const m = e[Ve];
    m && (nn[Ve] = m);
  }), typeof r < "u" && (nn.button = Object.assign({
    autoInsertSpace: r
  }, nn.button));
  const rn = ec(() => nn, nn, (Ve, m) => {
    const M = Object.keys(Ve), W = Object.keys(m);
    return M.length !== W.length || M.some((ie) => Ve[ie] !== m[ie]);
  }), {
    layer: pr
  } = w.useContext(qr), Zr = w.useMemo(() => ({
    prefixCls: Wt,
    csp: jn,
    layer: pr ? "antd" : void 0
  }), [Wt, jn, pr]);
  let tt = /* @__PURE__ */ w.createElement(w.Fragment, null, /* @__PURE__ */ w.createElement(Ym, {
    dropdownMatchSelectWidth: v
  }), t);
  const Jr = w.useMemo(() => {
    var Ve, m, M, W;
    return A1(((Ve = Ai.Form) === null || Ve === void 0 ? void 0 : Ve.defaultValidateMessages) || {}, ((M = (m = rn.locale) === null || m === void 0 ? void 0 : m.Form) === null || M === void 0 ? void 0 : M.defaultValidateMessages) || {}, ((W = rn.form) === null || W === void 0 ? void 0 : W.validateMessages) || {}, (s == null ? void 0 : s.validateMessages) || {});
  }, [rn, s == null ? void 0 : s.validateMessages]);
  Object.keys(Jr).length > 0 && (tt = /* @__PURE__ */ w.createElement(R1.Provider, {
    value: Jr
  }, tt)), a && (tt = /* @__PURE__ */ w.createElement(pd, {
    locale: a,
    _ANT_MARK__: hd
  }, tt)), tt = /* @__PURE__ */ w.createElement(lc.Provider, {
    value: Zr
  }, tt), c && (tt = /* @__PURE__ */ w.createElement(K1, {
    size: c
  }, tt)), tt = /* @__PURE__ */ w.createElement(Gm, null, tt);
  const Gi = w.useMemo(() => {
    const Ve = mn || {}, {
      algorithm: m,
      token: M,
      components: W,
      cssVar: ie
    } = Ve, Ce = Xm(Ve, ["algorithm", "token", "components", "cssVar"]), Te = m && (!Array.isArray(m) || m.length > 0) ? Qs(m) : yd, xe = {};
    Object.entries(W || {}).forEach((at) => {
      let [$e, We] = at;
      const qe = Object.assign({}, We);
      "algorithm" in qe && (qe.algorithm === !0 ? qe.theme = Te : (Array.isArray(qe.algorithm) || typeof qe.algorithm == "function") && (qe.theme = Qs(qe.algorithm)), delete qe.algorithm), xe[$e] = qe;
    });
    const he = Object.assign(Object.assign({}, Mr), M);
    return Object.assign(Object.assign({}, Ce), {
      theme: Te,
      token: he,
      components: xe,
      override: Object.assign({
        override: he
      }, xe),
      cssVar: ie
    });
  }, [mn]);
  return h && (tt = /* @__PURE__ */ w.createElement(bd.Provider, {
    value: Gi
  }, tt)), rn.warning && (tt = /* @__PURE__ */ w.createElement(fd.Provider, {
    value: rn.warning
  }, tt)), E !== void 0 && (tt = /* @__PURE__ */ w.createElement(X1, {
    disabled: E
  }, tt)), /* @__PURE__ */ w.createElement(kt.Provider, {
    value: rn
  }, tt);
}, ur = (e) => {
  const t = w.useContext(kt), n = w.useContext(dd);
  return /* @__PURE__ */ w.createElement(ev, Object.assign({
    parentContext: t,
    legacyLocale: n
  }, e));
};
ur.ConfigContext = kt;
ur.SizeContext = er;
ur.config = Qm;
ur.useConfig = Z1;
Object.defineProperty(ur, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && Ur(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), er)
});
process.env.NODE_ENV !== "production" && (ur.displayName = "ConfigProvider");
function Fd(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function tv(e) {
  return Fd(e) instanceof ShadowRoot;
}
function nv(e) {
  return tv(e) ? Fd(e) : null;
}
function rv(e) {
  return e.replace(/-(.)/g, function(t, n) {
    return n.toUpperCase();
  });
}
function ov(e, t) {
  hn(e, "[@ant-design/icons] ".concat(t));
}
function Wl(e) {
  return Ee(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (Ee(e.icon) === "object" || typeof e.icon == "function");
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
  return n ? /* @__PURE__ */ q.createElement(e.tag, K(K({
    key: t
  }, ql(e.attrs)), n), (e.children || []).map(function(r, o) {
    return _a(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
  })) : /* @__PURE__ */ q.createElement(e.tag, K({
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
}`)), Xe(function() {
    var a = t.current, c = nv(a);
    Tn(s, "@ant-design-icons", {
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
  return K({}, Ir);
}
var fr = function(t) {
  var n = t.icon, r = t.className, o = t.onClick, i = t.style, s = t.primaryColor, a = t.secondaryColor, c = Nn(t, av), l = w.useRef(), u = Ir;
  if (s && (u = {
    primaryColor: s,
    secondaryColor: a || Vd(s)
  }), sv(l), ov(Wl(n), "icon should be icon definiton, but got ".concat(n)), !Wl(n))
    return null;
  var d = n;
  return d && typeof d.icon == "function" && (d = K(K({}, d), {}, {
    icon: d.icon(u.primaryColor, u.secondaryColor)
  })), _a(d.icon, "svg-".concat(d.name), K(K({
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
qd(Go.primary);
var Qt = /* @__PURE__ */ w.forwardRef(function(e, t) {
  var n = e.className, r = e.icon, o = e.spin, i = e.rotate, s = e.tabIndex, a = e.onClick, c = e.twoToneColor, l = Nn(e, fv), u = w.useContext(lc), d = u.prefixCls, f = d === void 0 ? "anticon" : d, v = u.rootClassName, g = we(v, f, U(U({}, "".concat(f, "-").concat(r.name), !!r.name), "".concat(f, "-spin"), !!o || r.name === "loading"), n), p = s;
  p === void 0 && a && (p = -1);
  var x = i ? {
    msTransform: "rotate(".concat(i, "deg)"),
    transform: "rotate(".concat(i, "deg)")
  } : void 0, S = Wd(c), C = se(S, 2), h = C[0], E = C[1];
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
Qt.displayName = "AntdIcon";
Qt.getTwoToneColor = uv;
Qt.setTwoToneColor = qd;
var dv = function(t, n) {
  return /* @__PURE__ */ w.createElement(Qt, xt({}, t, {
    ref: n,
    icon: Gp
  }));
}, Ud = /* @__PURE__ */ w.forwardRef(dv);
process.env.NODE_ENV !== "production" && (Ud.displayName = "CheckCircleFilled");
var hv = function(t, n) {
  return /* @__PURE__ */ w.createElement(Qt, xt({}, t, {
    ref: n,
    icon: Yp
  }));
}, Gd = /* @__PURE__ */ w.forwardRef(hv);
process.env.NODE_ENV !== "production" && (Gd.displayName = "CloseCircleFilled");
var pv = function(t, n) {
  return /* @__PURE__ */ w.createElement(Qt, xt({}, t, {
    ref: n,
    icon: Xp
  }));
}, Yd = /* @__PURE__ */ w.forwardRef(pv);
process.env.NODE_ENV !== "production" && (Yd.displayName = "CloseOutlined");
var xv = function(t, n) {
  return /* @__PURE__ */ w.createElement(Qt, xt({}, t, {
    ref: n,
    icon: Kp
  }));
}, Xd = /* @__PURE__ */ w.forwardRef(xv);
process.env.NODE_ENV !== "production" && (Xd.displayName = "ExclamationCircleFilled");
var gv = function(t, n) {
  return /* @__PURE__ */ w.createElement(Qt, xt({}, t, {
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
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, yv = "".concat(mv, " ").concat(vv).split(/[\s\n]+/), bv = "aria-", Sv = "data-";
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
  } : n = K({}, t);
  var r = {};
  return Object.keys(e).forEach(function(o) {
    // Aria
    (n.aria && (o === "role" || Ul(o, bv)) || // Data
    n.data && Ul(o, Sv) || // Attr
    n.attr && yv.includes(o)) && (r[o] = e[o]);
  }), r;
}
function wv(e) {
  return e && /* @__PURE__ */ q.isValidElement(e) && e.type === q.Fragment;
}
const Zd = (e, t, n) => /* @__PURE__ */ q.isValidElement(e) ? /* @__PURE__ */ q.cloneElement(e, typeof n == "function" ? n(e.props || {}) : n) : t;
function xc(e, t) {
  return Zd(e, e, t);
}
const mo = (e, t, n, r, o) => ({
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
      "&-success": mo(o, r, n, e, t),
      "&-info": mo(v, f, d, e, t),
      "&-warning": mo(a, s, i, e, t),
      "&-error": Object.assign(Object.assign({}, mo(u, l, c, e, t)), {
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
    className: we(`${n}-icon`, t.props.className)
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
    closeText: p,
    closeIcon: x,
    action: S,
    id: C
  } = e, h = Gl(e, ["description", "prefixCls", "message", "banner", "className", "rootClassName", "style", "onMouseEnter", "onMouseLeave", "onClick", "afterClose", "showIcon", "closable", "closeText", "closeIcon", "action", "id"]), [E, y] = w.useState(!1);
  process.env.NODE_ENV !== "production" && pn("Alert").deprecated(!p, "closeText", "closable.closeIcon");
  const A = w.useRef(null);
  w.useImperativeHandle(t, () => ({
    nativeElement: A.current
  }));
  const {
    getPrefixCls: _,
    direction: j,
    closable: D,
    closeIcon: G,
    className: oe,
    style: ne
  } = dc("alert"), z = _("alert", r), [X, Z, I] = Tv(z), T = (ae) => {
    var le;
    y(!0), (le = e.onClose) === null || le === void 0 || le.call(e, ae);
  }, R = w.useMemo(() => e.type !== void 0 ? e.type : i ? "warning" : "info", [e.type, i]), N = w.useMemo(() => typeof g == "object" && g.closeIcon || p ? !0 : typeof g == "boolean" ? g : x !== !1 && x !== null && x !== void 0 ? !0 : !!D, [p, x, g, D]), $ = i && v === void 0 ? !0 : v, F = we(z, `${z}-${R}`, {
    [`${z}-with-description`]: !!n,
    [`${z}-no-icon`]: !$,
    [`${z}-banner`]: !!i,
    [`${z}-rtl`]: j === "rtl"
  }, oe, s, a, I, Z), Y = Cv(h, {
    aria: !0,
    data: !0
  }), re = w.useMemo(() => typeof g == "object" && g.closeIcon ? g.closeIcon : p || (x !== void 0 ? x : typeof D == "object" && D.closeIcon ? D.closeIcon : G), [x, g, p, G]), J = w.useMemo(() => {
    const ae = g ?? D;
    if (typeof ae == "object") {
      const {
        closeIcon: le
      } = ae;
      return Gl(ae, ["closeIcon"]);
    }
    return {};
  }, [g, D]);
  return X(/* @__PURE__ */ w.createElement(Ri, {
    visible: !E,
    motionName: `${z}-motion`,
    motionAppear: !1,
    motionEnter: !1,
    onLeaveStart: (ae) => ({
      maxHeight: ae.offsetHeight
    }),
    onLeaveEnd: f
  }, (ae, le) => {
    let {
      className: ue,
      style: Ae
    } = ae;
    return /* @__PURE__ */ w.createElement("div", Object.assign({
      id: C,
      ref: Ci(A, le),
      "data-show": !E,
      className: we(F, ue),
      style: Object.assign(Object.assign(Object.assign({}, ne), c), Ae),
      onMouseEnter: l,
      onMouseLeave: u,
      onClick: d,
      role: "alert"
    }, Y), $ ? /* @__PURE__ */ w.createElement(Pv, {
      description: n,
      icon: e.icon,
      prefixCls: z,
      type: R
    }) : null, /* @__PURE__ */ w.createElement("div", {
      className: `${z}-content`
    }, o ? /* @__PURE__ */ w.createElement("div", {
      className: `${z}-message`
    }, o) : null, n ? /* @__PURE__ */ w.createElement("div", {
      className: `${z}-description`
    }, n) : null), S ? /* @__PURE__ */ w.createElement("div", {
      className: `${z}-action`
    }, S) : null, /* @__PURE__ */ w.createElement(Iv, {
      isClosable: N,
      prefixCls: z,
      closeIcon: re,
      handleClose: T,
      ariaProps: J
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
    return bt(this, t), n = Nv(this, t, arguments), n.state = {
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
  return /* @__PURE__ */ w.createElement(Qt, xt({}, t, {
    ref: n,
    icon: Jp
  }));
}, Qd = /* @__PURE__ */ w.forwardRef(jv);
process.env.NODE_ENV !== "production" && (Qd.displayName = "LoadingOutlined");
function zr() {
  zr = function() {
    return t;
  };
  var e, t = {}, n = Object.prototype, r = n.hasOwnProperty, o = Object.defineProperty || function(I, T, R) {
    I[T] = R.value;
  }, i = typeof Symbol == "function" ? Symbol : {}, s = i.iterator || "@@iterator", a = i.asyncIterator || "@@asyncIterator", c = i.toStringTag || "@@toStringTag";
  function l(I, T, R) {
    return Object.defineProperty(I, T, {
      value: R,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), I[T];
  }
  try {
    l({}, "");
  } catch {
    l = function(R, N, $) {
      return R[N] = $;
    };
  }
  function u(I, T, R, N) {
    var $ = T && T.prototype instanceof S ? T : S, F = Object.create($.prototype), Y = new X(N || []);
    return o(F, "_invoke", {
      value: G(I, R, Y)
    }), F;
  }
  function d(I, T, R) {
    try {
      return {
        type: "normal",
        arg: I.call(T, R)
      };
    } catch (N) {
      return {
        type: "throw",
        arg: N
      };
    }
  }
  t.wrap = u;
  var f = "suspendedStart", v = "suspendedYield", g = "executing", p = "completed", x = {};
  function S() {
  }
  function C() {
  }
  function h() {
  }
  var E = {};
  l(E, s, function() {
    return this;
  });
  var y = Object.getPrototypeOf, A = y && y(y(Z([])));
  A && A !== n && r.call(A, s) && (E = A);
  var _ = h.prototype = S.prototype = Object.create(E);
  function j(I) {
    ["next", "throw", "return"].forEach(function(T) {
      l(I, T, function(R) {
        return this._invoke(T, R);
      });
    });
  }
  function D(I, T) {
    function R($, F, Y, re) {
      var J = d(I[$], I, F);
      if (J.type !== "throw") {
        var ae = J.arg, le = ae.value;
        return le && Ee(le) == "object" && r.call(le, "__await") ? T.resolve(le.__await).then(function(ue) {
          R("next", ue, Y, re);
        }, function(ue) {
          R("throw", ue, Y, re);
        }) : T.resolve(le).then(function(ue) {
          ae.value = ue, Y(ae);
        }, function(ue) {
          return R("throw", ue, Y, re);
        });
      }
      re(J.arg);
    }
    var N;
    o(this, "_invoke", {
      value: function(F, Y) {
        function re() {
          return new T(function(J, ae) {
            R(F, Y, J, ae);
          });
        }
        return N = N ? N.then(re, re) : re();
      }
    });
  }
  function G(I, T, R) {
    var N = f;
    return function($, F) {
      if (N === g) throw Error("Generator is already running");
      if (N === p) {
        if ($ === "throw") throw F;
        return {
          value: e,
          done: !0
        };
      }
      for (R.method = $, R.arg = F; ; ) {
        var Y = R.delegate;
        if (Y) {
          var re = oe(Y, R);
          if (re) {
            if (re === x) continue;
            return re;
          }
        }
        if (R.method === "next") R.sent = R._sent = R.arg;
        else if (R.method === "throw") {
          if (N === f) throw N = p, R.arg;
          R.dispatchException(R.arg);
        } else R.method === "return" && R.abrupt("return", R.arg);
        N = g;
        var J = d(I, T, R);
        if (J.type === "normal") {
          if (N = R.done ? p : v, J.arg === x) continue;
          return {
            value: J.arg,
            done: R.done
          };
        }
        J.type === "throw" && (N = p, R.method = "throw", R.arg = J.arg);
      }
    };
  }
  function oe(I, T) {
    var R = T.method, N = I.iterator[R];
    if (N === e) return T.delegate = null, R === "throw" && I.iterator.return && (T.method = "return", T.arg = e, oe(I, T), T.method === "throw") || R !== "return" && (T.method = "throw", T.arg = new TypeError("The iterator does not provide a '" + R + "' method")), x;
    var $ = d(N, I.iterator, T.arg);
    if ($.type === "throw") return T.method = "throw", T.arg = $.arg, T.delegate = null, x;
    var F = $.arg;
    return F ? F.done ? (T[I.resultName] = F.value, T.next = I.nextLoc, T.method !== "return" && (T.method = "next", T.arg = e), T.delegate = null, x) : F : (T.method = "throw", T.arg = new TypeError("iterator result is not an object"), T.delegate = null, x);
  }
  function ne(I) {
    var T = {
      tryLoc: I[0]
    };
    1 in I && (T.catchLoc = I[1]), 2 in I && (T.finallyLoc = I[2], T.afterLoc = I[3]), this.tryEntries.push(T);
  }
  function z(I) {
    var T = I.completion || {};
    T.type = "normal", delete T.arg, I.completion = T;
  }
  function X(I) {
    this.tryEntries = [{
      tryLoc: "root"
    }], I.forEach(ne, this), this.reset(!0);
  }
  function Z(I) {
    if (I || I === "") {
      var T = I[s];
      if (T) return T.call(I);
      if (typeof I.next == "function") return I;
      if (!isNaN(I.length)) {
        var R = -1, N = function $() {
          for (; ++R < I.length; ) if (r.call(I, R)) return $.value = I[R], $.done = !1, $;
          return $.value = e, $.done = !0, $;
        };
        return N.next = N;
      }
    }
    throw new TypeError(Ee(I) + " is not iterable");
  }
  return C.prototype = h, o(_, "constructor", {
    value: h,
    configurable: !0
  }), o(h, "constructor", {
    value: C,
    configurable: !0
  }), C.displayName = l(h, c, "GeneratorFunction"), t.isGeneratorFunction = function(I) {
    var T = typeof I == "function" && I.constructor;
    return !!T && (T === C || (T.displayName || T.name) === "GeneratorFunction");
  }, t.mark = function(I) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(I, h) : (I.__proto__ = h, l(I, c, "GeneratorFunction")), I.prototype = Object.create(_), I;
  }, t.awrap = function(I) {
    return {
      __await: I
    };
  }, j(D.prototype), l(D.prototype, a, function() {
    return this;
  }), t.AsyncIterator = D, t.async = function(I, T, R, N, $) {
    $ === void 0 && ($ = Promise);
    var F = new D(u(I, T, R, N), $);
    return t.isGeneratorFunction(T) ? F : F.next().then(function(Y) {
      return Y.done ? Y.value : F.next();
    });
  }, j(_), l(_, c, "Generator"), l(_, s, function() {
    return this;
  }), l(_, "toString", function() {
    return "[object Generator]";
  }), t.keys = function(I) {
    var T = Object(I), R = [];
    for (var N in T) R.push(N);
    return R.reverse(), function $() {
      for (; R.length; ) {
        var F = R.pop();
        if (F in T) return $.value = F, $.done = !1, $;
      }
      return $.done = !0, $;
    };
  }, t.values = Z, X.prototype = {
    constructor: X,
    reset: function(T) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(z), !T) for (var R in this) R.charAt(0) === "t" && r.call(this, R) && !isNaN(+R.slice(1)) && (this[R] = e);
    },
    stop: function() {
      this.done = !0;
      var T = this.tryEntries[0].completion;
      if (T.type === "throw") throw T.arg;
      return this.rval;
    },
    dispatchException: function(T) {
      if (this.done) throw T;
      var R = this;
      function N(ae, le) {
        return Y.type = "throw", Y.arg = T, R.next = ae, le && (R.method = "next", R.arg = e), !!le;
      }
      for (var $ = this.tryEntries.length - 1; $ >= 0; --$) {
        var F = this.tryEntries[$], Y = F.completion;
        if (F.tryLoc === "root") return N("end");
        if (F.tryLoc <= this.prev) {
          var re = r.call(F, "catchLoc"), J = r.call(F, "finallyLoc");
          if (re && J) {
            if (this.prev < F.catchLoc) return N(F.catchLoc, !0);
            if (this.prev < F.finallyLoc) return N(F.finallyLoc);
          } else if (re) {
            if (this.prev < F.catchLoc) return N(F.catchLoc, !0);
          } else {
            if (!J) throw Error("try statement without catch or finally");
            if (this.prev < F.finallyLoc) return N(F.finallyLoc);
          }
        }
      }
    },
    abrupt: function(T, R) {
      for (var N = this.tryEntries.length - 1; N >= 0; --N) {
        var $ = this.tryEntries[N];
        if ($.tryLoc <= this.prev && r.call($, "finallyLoc") && this.prev < $.finallyLoc) {
          var F = $;
          break;
        }
      }
      F && (T === "break" || T === "continue") && F.tryLoc <= R && R <= F.finallyLoc && (F = null);
      var Y = F ? F.completion : {};
      return Y.type = T, Y.arg = R, F ? (this.method = "next", this.next = F.finallyLoc, x) : this.complete(Y);
    },
    complete: function(T, R) {
      if (T.type === "throw") throw T.arg;
      return T.type === "break" || T.type === "continue" ? this.next = T.arg : T.type === "return" ? (this.rval = this.arg = T.arg, this.method = "return", this.next = "end") : T.type === "normal" && R && (this.next = R), x;
    },
    finish: function(T) {
      for (var R = this.tryEntries.length - 1; R >= 0; --R) {
        var N = this.tryEntries[R];
        if (N.finallyLoc === T) return this.complete(N.completion, N.afterLoc), z(N), x;
      }
    },
    catch: function(T) {
      for (var R = this.tryEntries.length - 1; R >= 0; --R) {
        var N = this.tryEntries[R];
        if (N.tryLoc === T) {
          var $ = N.completion;
          if ($.type === "throw") {
            var F = $.arg;
            z(N);
          }
          return F;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function(T, R, N) {
      return this.delegate = {
        iterator: Z(T),
        resultName: R,
        nextLoc: N
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
var Yr = K({}, Ru), Lv = Yr.version, gs = Yr.render, Mv = Yr.unmountComponentAtNode, Pi;
try {
  var Dv = Number((Lv || "").split(".")[0]);
  Dv >= 18 && (Pi = Yr.createRoot);
} catch {
}
function Xl(e) {
  var t = Yr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && Ee(t) === "object" && (t.usingClientEntryPoint = e);
}
var Ko = "__rc_react_root__";
function Bv(e, t) {
  Xl(!0);
  var n = t[Ko] || Pi(t);
  Xl(!1), n.render(e), t[Ko] = n;
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
function $v(e) {
  return Oa.apply(this, arguments);
}
function Oa() {
  return Oa = e0(/* @__PURE__ */ zr().mark(function e(t) {
    return zr().wrap(function(r) {
      for (; ; ) switch (r.prev = r.next) {
        case 0:
          return r.abrupt("return", Promise.resolve().then(function() {
            var o;
            (o = t[Ko]) === null || o === void 0 || o.unmount(), delete t[Ko];
          }));
        case 1:
        case "end":
          return r.stop();
      }
    }, e);
  })), Oa.apply(this, arguments);
}
function Fv(e) {
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
          return r.abrupt("return", $v(t));
        case 2:
          Fv(t);
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
    process.env.NODE_ENV !== "production" && Ur(n < 19 || r.includes("createRoot"), "compatible", "antd v5 support React is 16 ~ 18. see https://u.ant.design/v5-for-19 for compatible.");
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
}, Xv = ym("Wave", (e) => [Yv(e)]), n0 = `${Yo}-wave-target`;
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
  const [a, c] = w.useState(null), [l, u] = w.useState([]), [d, f] = w.useState(0), [v, g] = w.useState(0), [p, x] = w.useState(0), [S, C] = w.useState(0), [h, E] = w.useState(!1), y = {
    left: d,
    top: v,
    width: p,
    height: S,
    borderRadius: l.map((j) => `${j}px`).join(" ")
  };
  a && (y["--wave-color"] = a);
  function A() {
    const j = getComputedStyle(n);
    c(Kv(n));
    const D = j.position === "static", {
      borderLeftWidth: G,
      borderTopWidth: oe
    } = j;
    f(D ? n.offsetLeft : vs(-parseFloat(G))), g(D ? n.offsetTop : vs(-parseFloat(oe))), x(n.offsetWidth), C(n.offsetHeight);
    const {
      borderTopLeftRadius: ne,
      borderTopRightRadius: z,
      borderBottomLeftRadius: X,
      borderBottomRightRadius: Z
    } = j;
    u([ne, z, Z, X].map((I) => vs(parseFloat(I))));
  }
  if (w.useEffect(() => {
    if (n) {
      const j = fn(() => {
        A(), E(!0);
      });
      let D;
      return typeof ResizeObserver < "u" && (D = new ResizeObserver(A), D.observe(n)), () => {
        fn.cancel(j), D == null || D.disconnect();
      };
    }
  }, []), !h)
    return null;
  const _ = (r === "Checkbox" || r === "Radio") && (n == null ? void 0 : n.classList.contains(n0));
  return /* @__PURE__ */ w.createElement(Ri, {
    visible: !0,
    motionAppear: !0,
    motionName: "wave-motion",
    motionDeadline: 5e3,
    onAppearEnd: (j, D) => {
      var G, oe;
      if (D.deadline || D.propertyName === "opacity") {
        const ne = (G = i.current) === null || G === void 0 ? void 0 : G.parentElement;
        (oe = s.current) === null || oe === void 0 || oe.call(s).then(() => {
          ne == null || ne.remove();
        });
      }
      return !1;
    }
  }, (j, D) => {
    let {
      className: G
    } = j;
    return /* @__PURE__ */ w.createElement("div", {
      ref: Ci(i, D),
      className: we(t, G, {
        "wave-quick": _
      }),
      style: y
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
  } = w.useContext(kt), [, o, i] = Gr(), s = dn((l) => {
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
    fn.cancel(a.current), a.current = fn(() => {
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
  } = _t(kt), i = Oe(null), s = o("wave"), [, a] = Xv(s), c = Qv(i, we(s, a), r);
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
const ey = (e) => {
  const t = q.useContext(er);
  return q.useMemo(() => e ? typeof e == "string" ? e ?? t : typeof e == "function" ? e(t) : t : t, [e, t]);
}, ty = /* @__PURE__ */ w.createContext(null), ny = (e, t) => {
  const n = w.useContext(ty), r = w.useMemo(() => {
    if (!n)
      return "";
    const {
      compactDirection: o,
      isFirstItem: i,
      isLastItem: s
    } = n, a = o === "vertical" ? "-vertical-" : "-";
    return we(`${e}-compact${a}item`, {
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
var ry = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const o0 = /* @__PURE__ */ w.createContext(void 0), oy = (e) => {
  const {
    getPrefixCls: t,
    direction: n
  } = w.useContext(kt), {
    prefixCls: r,
    size: o,
    className: i
  } = e, s = ry(e, ["prefixCls", "size", "className"]), a = t("btn-group", r), [, , c] = Gr(), l = w.useMemo(() => {
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
    const d = pn("Button.Group");
    d.deprecated(!1, "Button.Group", "Space.Compact"), process.env.NODE_ENV !== "production" && d(!o || ["large", "small", "middle"].includes(o), "usage", "Invalid prop `size`.");
  }
  const u = we(a, {
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
function vo(e) {
  return e === "text" || e === "link";
}
function iy(e, t) {
  if (e == null)
    return;
  const n = t ? " " : "";
  return typeof e != "string" && typeof e != "number" && Zl(e.type) && Ta(e.props.children) ? xc(e, {
    children: e.props.children.split("").join(n)
  }) : Zl(e) ? Ta(e) ? /* @__PURE__ */ q.createElement("span", null, e.split("").join(n)) : /* @__PURE__ */ q.createElement("span", null, e) : wv(e) ? /* @__PURE__ */ q.createElement("span", null, e) : e;
}
function sy(e, t) {
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
  }), q.Children.map(r, (o) => iy(o, t));
}
["default", "primary", "danger"].concat($t(hc));
const Ra = /* @__PURE__ */ rr((e, t) => {
  const {
    className: n,
    style: r,
    children: o,
    prefixCls: i
  } = e, s = we(`${i}-icon`, n);
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
  } = e, s = we(`${n}-loading-icon`, r);
  return /* @__PURE__ */ q.createElement(Ra, {
    prefixCls: n,
    className: s,
    style: o,
    ref: t
  }, /* @__PURE__ */ q.createElement(Qd, {
    className: i
  }));
}), ys = () => ({
  width: 0,
  opacity: 0,
  transform: "scale(0)"
}), bs = (e) => ({
  width: e.scrollWidth,
  opacity: 1,
  transform: "scale(1)"
}), ay = (e) => {
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
    onAppearStart: ys,
    onAppearActive: bs,
    onEnterStart: ys,
    onEnterActive: bs,
    onLeaveStart: bs,
    onLeaveActive: ys
  }, (c, l) => {
    let {
      className: u,
      style: d
    } = c;
    const f = Object.assign(Object.assign({}, i), d);
    return /* @__PURE__ */ q.createElement(Jl, {
      prefixCls: t,
      className: we(o, u),
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
}), cy = (e) => {
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
var ly = ["b"], uy = ["v"], Cs = function(t) {
  return Math.round(Number(t || 0));
}, fy = function(t) {
  if (t instanceof Ii)
    return t;
  if (t && Ee(t) === "object" && "h" in t && "b" in t) {
    var n = t, r = n.b, o = Nn(n, ly);
    return K(K({}, o), {}, {
      v: r
    });
  }
  return typeof t == "string" && /hsb/.test(t) ? t.replace(/hsb/, "hsv") : t;
}, Zt = /* @__PURE__ */ function(e) {
  cr(n, e);
  var t = Wr(n);
  function n(r) {
    return bt(this, n), t.call(this, fy(r));
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
      var o = this.toHsv(), i = o.v, s = Nn(o, uy);
      return K(K({}, s), {}, {
        b: i,
        a: this.a
      });
    }
  }]), n;
}(Ii), dy = "rc-color-picker", Vn = function(t) {
  return t instanceof Zt ? t : new Zt(t);
}, hy = Vn("#1677ff"), i0 = function(t) {
  var n = t.offset, r = t.targetRef, o = t.containerRef, i = t.color, s = t.type, a = o.current.getBoundingClientRect(), c = a.width, l = a.height, u = r.current.getBoundingClientRect(), d = u.width, f = u.height, v = d / 2, g = f / 2, p = (n.x + v) / c, x = 1 - (n.y + g) / l, S = i.toHsb(), C = p, h = (n.x + v) / c * 360;
  if (s)
    switch (s) {
      case "hue":
        return Vn(K(K({}, S), {}, {
          h: h <= 0 ? 0 : h
        }));
      case "alpha":
        return Vn(K(K({}, S), {}, {
          a: C <= 0 ? 0 : C
        }));
    }
  return Vn({
    h: S.h,
    s: p <= 0 ? 0 : p,
    b: x >= 1 ? 1 : x,
    a: S.a
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
}, py = function(t) {
  var n = t.color, r = t.prefixCls, o = t.className, i = t.style, s = t.onClick, a = "".concat(r, "-color-block");
  return /* @__PURE__ */ q.createElement("div", {
    className: we(a, o),
    style: i,
    onClick: s
  }, /* @__PURE__ */ q.createElement("div", {
    className: "".concat(a, "-inner"),
    style: {
      background: n
    }
  }));
};
function xy(e) {
  var t = "touches" in e ? e.touches[0] : e, n = document.documentElement.scrollLeft || document.body.scrollLeft || window.pageXOffset, r = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
  return {
    pageX: t.pageX - n,
    pageY: t.pageY - r
  };
}
function a0(e) {
  var t = e.targetRef, n = e.containerRef, r = e.direction, o = e.onDragChange, i = e.onDragChangeComplete, s = e.calculate, a = e.color, c = e.disabledDrag, l = ut({
    x: 0,
    y: 0
  }), u = se(l, 2), d = u[0], f = u[1], v = Oe(null), g = Oe(null);
  Xe(function() {
    f(s());
  }, [a]), Xe(function() {
    return function() {
      document.removeEventListener("mousemove", v.current), document.removeEventListener("mouseup", g.current), document.removeEventListener("touchmove", v.current), document.removeEventListener("touchend", g.current), v.current = null, g.current = null;
    };
  }, []);
  var p = function(E) {
    var y = xy(E), A = y.pageX, _ = y.pageY, j = n.current.getBoundingClientRect(), D = j.x, G = j.y, oe = j.width, ne = j.height, z = t.current.getBoundingClientRect(), X = z.width, Z = z.height, I = X / 2, T = Z / 2, R = Math.max(0, Math.min(A - D, oe)) - I, N = Math.max(0, Math.min(_ - G, ne)) - T, $ = {
      x: R,
      y: r === "x" ? d.y : N
    };
    if (X === 0 && Z === 0 || X !== Z)
      return !1;
    o == null || o($);
  }, x = function(E) {
    E.preventDefault(), p(E);
  }, S = function(E) {
    E.preventDefault(), document.removeEventListener("mousemove", v.current), document.removeEventListener("mouseup", g.current), document.removeEventListener("touchmove", v.current), document.removeEventListener("touchend", g.current), v.current = null, g.current = null, i == null || i();
  }, C = function(E) {
    document.removeEventListener("mousemove", v.current), document.removeEventListener("mouseup", g.current), !c && (p(E), document.addEventListener("mousemove", x), document.addEventListener("mouseup", S), document.addEventListener("touchmove", x), document.addEventListener("touchend", S), v.current = x, g.current = S);
  };
  return [d, C];
}
var c0 = function(t) {
  var n = t.size, r = n === void 0 ? "default" : n, o = t.color, i = t.prefixCls;
  return /* @__PURE__ */ q.createElement("div", {
    className: we("".concat(i, "-handler"), U({}, "".concat(i, "-handler-sm"), r === "small")),
    style: {
      backgroundColor: o
    }
  });
}, l0 = function(t) {
  var n = t.children, r = t.style, o = t.prefixCls;
  return /* @__PURE__ */ q.createElement("div", {
    className: "".concat(o, "-palette"),
    style: K({
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
}), gy = function(t) {
  var n = t.color, r = t.onChange, o = t.prefixCls, i = t.onChangeComplete, s = t.disabled, a = Oe(), c = Oe(), l = Oe(n), u = dn(function(p) {
    var x = i0({
      offset: p,
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
}, my = function(t, n) {
  var r = nm(t, {
    value: n
  }), o = se(r, 2), i = o[0], s = o[1], a = kr(function() {
    return Vn(i);
  }, [i]);
  return [a, s];
}, vy = function(t) {
  var n = t.colors, r = t.children, o = t.direction, i = o === void 0 ? "to right" : o, s = t.type, a = t.prefixCls, c = kr(function() {
    return n.map(function(l, u) {
      var d = Vn(l);
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
}, yy = function(t) {
  var n = t.prefixCls, r = t.colors, o = t.disabled, i = t.onChange, s = t.onChangeComplete, a = t.color, c = t.type, l = Oe(), u = Oe(), d = Oe(a), f = function(y) {
    return c === "hue" ? y.getHue() : y.a * 100;
  }, v = dn(function(E) {
    var y = i0({
      offset: E,
      targetRef: u,
      containerRef: l,
      color: a,
      type: c
    });
    d.current = y, i(f(y));
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
  }), p = se(g, 2), x = p[0], S = p[1], C = q.useMemo(function() {
    if (c === "hue") {
      var E = a.toHsb();
      E.s = 1, E.b = 1, E.a = 1;
      var y = new Zt(E);
      return y;
    }
    return a;
  }, [a, c]), h = q.useMemo(function() {
    return r.map(function(E) {
      return "".concat(E.color, " ").concat(E.percent, "%");
    });
  }, [r]);
  return /* @__PURE__ */ q.createElement("div", {
    ref: l,
    className: we("".concat(n, "-slider"), "".concat(n, "-slider-").concat(c)),
    onMouseDown: S,
    onTouchStart: S
  }, /* @__PURE__ */ q.createElement(l0, {
    prefixCls: n
  }, /* @__PURE__ */ q.createElement(u0, {
    x: x.x,
    y: x.y,
    ref: u
  }, /* @__PURE__ */ q.createElement(c0, {
    size: "small",
    color: C.toHexString(),
    prefixCls: n
  })), /* @__PURE__ */ q.createElement(vy, {
    colors: h,
    type: c,
    prefixCls: n
  })));
};
function by(e) {
  return w.useMemo(function() {
    var t = e || {}, n = t.slider;
    return [n || yy];
  }, [e]);
}
var Sy = [{
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
}], Cy = /* @__PURE__ */ rr(function(e, t) {
  var n = e.value, r = e.defaultValue, o = e.prefixCls, i = o === void 0 ? dy : o, s = e.onChange, a = e.onChangeComplete, c = e.className, l = e.style, u = e.panelRender, d = e.disabledAlpha, f = d === void 0 ? !1 : d, v = e.disabled, g = v === void 0 ? !1 : v, p = e.components, x = by(p), S = se(x, 1), C = S[0], h = my(r || hy, n), E = se(h, 2), y = E[0], A = E[1], _ = kr(function() {
    return y.setA(1).toRgbString();
  }, [y]), j = function(N, $) {
    n || A(N), s == null || s(N, $);
  }, D = function(N) {
    return new Zt(y.setHue(N));
  }, G = function(N) {
    return new Zt(y.setA(N / 100));
  }, oe = function(N) {
    j(D(N), {
      type: "hue",
      value: N
    });
  }, ne = function(N) {
    j(G(N), {
      type: "alpha",
      value: N
    });
  }, z = function(N) {
    a && a(D(N));
  }, X = function(N) {
    a && a(G(N));
  }, Z = we("".concat(i, "-panel"), c, U({}, "".concat(i, "-panel-disabled"), g)), I = {
    prefixCls: i,
    disabled: g,
    color: y
  }, T = /* @__PURE__ */ q.createElement(q.Fragment, null, /* @__PURE__ */ q.createElement(gy, xt({
    onChange: j
  }, I, {
    onChangeComplete: a
  })), /* @__PURE__ */ q.createElement("div", {
    className: "".concat(i, "-slider-container")
  }, /* @__PURE__ */ q.createElement("div", {
    className: we("".concat(i, "-slider-group"), U({}, "".concat(i, "-slider-group-disabled-alpha"), f))
  }, /* @__PURE__ */ q.createElement(C, xt({}, I, {
    type: "hue",
    colors: Sy,
    min: 0,
    max: 359,
    value: y.getHue(),
    onChange: oe,
    onChangeComplete: z
  })), !f && /* @__PURE__ */ q.createElement(C, xt({}, I, {
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
    value: y.a * 100,
    onChange: ne,
    onChangeComplete: X
  }))), /* @__PURE__ */ q.createElement(py, {
    color: y.toRgbString(),
    prefixCls: i
  })));
  return /* @__PURE__ */ q.createElement("div", {
    className: Z,
    style: l,
    ref: t
  }, typeof u == "function" ? u(T) : T);
});
process.env.NODE_ENV !== "production" && (Cy.displayName = "ColorPicker");
const wy = (e, t) => (e == null ? void 0 : e.replace(/[^\w/]/g, "").slice(0, t ? 8 : 6)) || "", Ey = (e, t) => e ? wy(e, t) : "";
let _y = /* @__PURE__ */ function() {
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
      return Ey(this.toHexString(), this.metaColor.a < 1);
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
const Oy = (e, t) => {
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
  return xn(e, {
    buttonPaddingHorizontal: t,
    buttonPaddingVertical: 0,
    buttonIconOnlyFontSize: n
  });
}, d0 = (e) => {
  var t, n, r, o, i, s;
  const a = (t = e.contentFontSize) !== null && t !== void 0 ? t : e.fontSize, c = (n = e.contentFontSizeSM) !== null && n !== void 0 ? n : e.fontSize, l = (r = e.contentFontSizeLG) !== null && r !== void 0 ? r : e.fontSizeLG, u = (o = e.contentLineHeight) !== null && o !== void 0 ? o : Lo(a), d = (i = e.contentLineHeightSM) !== null && i !== void 0 ? i : Lo(c), f = (s = e.contentLineHeightLG) !== null && s !== void 0 ? s : Lo(l), v = Oy(new _y(e.colorBgSolid), "#fff") ? "#000" : "#fff", g = hc.reduce((p, x) => Object.assign(Object.assign({}, p), {
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
}, Ay = (e) => {
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
      "&:not(:disabled)": vm(e),
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
}), Ty = (e) => ({
  minWidth: e.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
}), Ry = (e) => ({
  borderRadius: e.controlHeight,
  paddingInlineStart: e.calc(e.controlHeight).div(2).equal(),
  paddingInlineEnd: e.calc(e.controlHeight).div(2).equal()
}), Py = (e) => ({
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
}), Iy = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, Py(e))
}), Ny = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: {
    cursor: "not-allowed",
    color: e.colorTextDisabled
  }
}), ki = (e, t, n, r) => {
  const i = r && ["link", "text"].includes(r) ? Ny : Iy;
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
}), Ft = (e, t, n, r, o) => ({
  [`&${e.componentCls}-variant-${n}`]: Object.assign({
    color: t,
    boxShadow: "none"
  }, ki(e, r, o, n))
}), ky = (e) => {
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
      })), Ft(e, o, "link", {
        color: s
      }, {
        color: l
      })), Ft(e, o, "text", {
        color: s,
        background: i
      }, {
        color: l,
        background: c
      }))
    });
  }, {});
}, jy = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
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
})), Ni(e.componentCls, e.ghostBg, e.defaultGhostColor, e.defaultGhostBorderColor, e.colorTextDisabled, e.colorBorder)), Ft(e, e.textTextColor, "link", {
  color: e.colorLinkHover,
  background: e.linkHoverBg
}, {
  color: e.colorLinkActive
})), Ly = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
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
})), Ft(e, e.colorPrimaryText, "text", {
  color: e.colorPrimaryTextHover,
  background: e.colorPrimaryBg
}, {
  color: e.colorPrimaryTextActive,
  background: e.colorPrimaryBorder
})), Ft(e, e.colorPrimaryText, "link", {
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
})), My = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
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
})), Ft(e, e.colorError, "text", {
  color: e.colorErrorHover,
  background: e.colorErrorBg
}, {
  color: e.colorErrorHover,
  background: e.colorErrorBgActive
})), Ft(e, e.colorError, "link", {
  color: e.colorErrorHover
}, {
  color: e.colorErrorActive
})), Ni(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
  color: e.colorErrorHover,
  borderColor: e.colorErrorHover
}, {
  color: e.colorErrorActive,
  borderColor: e.colorErrorActive
})), Dy = (e) => Object.assign(Object.assign({}, Ft(e, e.colorLink, "link", {
  color: e.colorLinkHover
}, {
  color: e.colorLinkActive
})), Ni(e.componentCls, e.ghostBg, e.colorInfo, e.colorInfo, e.colorTextDisabled, e.colorBorder, {
  color: e.colorInfoHover,
  borderColor: e.colorInfoHover
}, {
  color: e.colorInfoActive,
  borderColor: e.colorInfoActive
})), By = (e) => {
  const {
    componentCls: t
  } = e;
  return Object.assign({
    [`${t}-color-default`]: jy(e),
    [`${t}-color-primary`]: Ly(e),
    [`${t}-color-dangerous`]: My(e),
    [`${t}-color-link`]: Dy(e)
  }, ky(e));
}, zy = (e) => Object.assign(Object.assign(Object.assign(Object.assign({}, Li(e, e.defaultBorderColor, e.defaultBg, {
  color: e.defaultHoverColor,
  borderColor: e.defaultHoverBorderColor,
  background: e.defaultHoverBg
}, {
  color: e.defaultActiveColor,
  borderColor: e.defaultActiveBorderColor,
  background: e.defaultActiveBg
})), Ft(e, e.textTextColor, "text", {
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
})), Ft(e, e.colorLink, "link", {
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
      [`${n}${n}-circle${t}`]: Ty(e)
    },
    {
      [`${n}${n}-round${t}`]: Ry(e)
    }
  ];
}, Hy = (e) => {
  const t = xn(e, {
    fontSize: e.contentFontSize
  });
  return mc(t, e.componentCls);
}, $y = (e) => {
  const t = xn(e, {
    controlHeight: e.controlHeightSM,
    fontSize: e.contentFontSizeSM,
    padding: e.paddingXS,
    buttonPaddingHorizontal: e.paddingInlineSM,
    buttonPaddingVertical: 0,
    borderRadius: e.borderRadiusSM,
    buttonIconOnlyFontSize: e.onlyIconSizeSM
  });
  return mc(t, `${e.componentCls}-sm`);
}, Fy = (e) => {
  const t = xn(e, {
    controlHeight: e.controlHeightLG,
    fontSize: e.contentFontSizeLG,
    buttonPaddingHorizontal: e.paddingInlineLG,
    buttonPaddingVertical: 0,
    borderRadius: e.borderRadiusLG,
    buttonIconOnlyFontSize: e.onlyIconSizeLG
  });
  return mc(t, `${e.componentCls}-lg`);
}, Vy = (e) => {
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
}, Wy = Ti("Button", (e) => {
  const t = f0(e);
  return [
    // Shared
    Ay(t),
    // Size
    Hy(t),
    $y(t),
    Fy(t),
    // Block
    Vy(t),
    // Color
    By(t),
    // https://github.com/ant-design/ant-design/issues/50969
    zy(t),
    // Button Group
    cy(t)
  ];
}, d0, {
  unitless: {
    fontWeight: !0,
    contentLineHeight: !0,
    contentLineHeightSM: !0,
    contentLineHeightLG: !0
  }
});
function qy(e, t, n) {
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
function Uy(e, t, n) {
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
function Gy(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: !0
  };
  const {
    componentCls: n
  } = e, r = `${n}-compact`;
  return {
    [r]: Object.assign(Object.assign({}, qy(e, r, t)), Uy(n, r, t))
  };
}
function Yy(e, t) {
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
function Xy(e, t) {
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
function Ky(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: Object.assign(Object.assign({}, Yy(e, t)), Xy(e.componentCls, t))
  };
}
const Zy = (e) => {
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
}, Jy = bm(["Button", "compact"], (e) => {
  const t = f0(e);
  return [
    // Space Compact
    Gy(t),
    Ky(t),
    Zy(t)
  ];
}, d0);
var Qy = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function eb(e) {
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
const tb = {
  default: ["default", "outlined"],
  primary: ["primary", "solid"],
  dashed: ["default", "dashed"],
  // `link` is not a real color but we should compatible with it
  link: ["link", "link"],
  text: ["default", "text"]
}, nb = /* @__PURE__ */ q.forwardRef((e, t) => {
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
    icon: S,
    iconPosition: C = "start",
    ghost: h = !1,
    block: E = !1,
    // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    htmlType: y = "button",
    classNames: A,
    style: _ = {},
    autoInsertSpace: j,
    autoFocus: D
  } = e, G = Qy(e, ["loading", "prefixCls", "color", "variant", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "iconPosition", "ghost", "block", "htmlType", "classNames", "style", "autoInsertSpace", "autoFocus"]), oe = c || "default", [ne, z] = kr(() => {
    if (s && a)
      return [s, a];
    const Se = tb[oe] || [];
    return l ? ["danger", Se[1]] : Se;
  }, [c, s, a, l]), Z = ne === "danger" ? "dangerous" : ne, {
    getPrefixCls: I,
    direction: T,
    autoInsertSpace: R,
    className: N,
    style: $,
    classNames: F,
    styles: Y
  } = dc("button"), re = (n = j ?? R) !== null && n !== void 0 ? n : !0, J = I("btn", i), [ae, le, ue] = Wy(J), Ae = _t(Xo), ge = v ?? Ae, Le = _t(o0), ke = kr(() => eb(o), [o]), [pe, k] = ut(ke.loading), [L, H] = ut(!1), V = Oe(null), O = ug(t, V), ee = th.count(x) === 1 && !S && !vo(z), Q = Oe(!0);
  q.useEffect(() => (Q.current = !1, () => {
    Q.current = !0;
  }), []), Xe(() => {
    let Se = null;
    ke.delay > 0 ? Se = setTimeout(() => {
      Se = null, k(!0);
    }, ke.delay) : k(ke.loading);
    function Be() {
      Se && (clearTimeout(Se), Se = null);
    }
    return Be;
  }, [ke]), Xe(() => {
    if (!V.current || !re)
      return;
    const Se = V.current.textContent || "";
    ee && Ta(Se) ? L || H(!0) : L && H(!1);
  }), Xe(() => {
    D && V.current && V.current.focus();
  }, []);
  const Me = q.useCallback((Se) => {
    var Be;
    if (pe || ge) {
      Se.preventDefault();
      return;
    }
    (Be = e.onClick) === null || Be === void 0 || Be.call(e, ("href" in e, Se));
  }, [e.onClick, pe, ge]);
  if (process.env.NODE_ENV !== "production") {
    const Se = pn("Button");
    process.env.NODE_ENV !== "production" && Se(!(typeof S == "string" && S.length > 2), "breaking", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${S}\` at https://ant.design/components/icon`), process.env.NODE_ENV !== "production" && Se(!(h && vo(z)), "usage", "`link` or `text` button can't be a `ghost` button.");
  }
  const {
    compactSize: ze,
    compactItemClassnames: Ne
  } = ny(J, T), Qe = {
    large: "lg",
    small: "sm",
    middle: void 0
  }, ft = ey((Se) => {
    var Be, vt;
    return (vt = (Be = d ?? ze) !== null && Be !== void 0 ? Be : Le) !== null && vt !== void 0 ? vt : Se;
  }), lt = ft && (r = Qe[ft]) !== null && r !== void 0 ? r : "", Vt = pe ? "loading" : S, B = t0(G, ["navigate"]), b = we(J, le, ue, {
    [`${J}-${u}`]: u !== "default" && u,
    // line(253 - 254): Compatible with versions earlier than 5.21.0
    [`${J}-${oe}`]: oe,
    [`${J}-dangerous`]: l,
    [`${J}-color-${Z}`]: Z,
    [`${J}-variant-${z}`]: z,
    [`${J}-${lt}`]: lt,
    [`${J}-icon-only`]: !x && x !== 0 && !!Vt,
    [`${J}-background-ghost`]: h && !vo(z),
    [`${J}-loading`]: pe,
    [`${J}-two-chinese-chars`]: L && re && !pe,
    [`${J}-block`]: E,
    [`${J}-rtl`]: T === "rtl",
    [`${J}-icon-end`]: C === "end"
  }, Ne, g, p, N), ve = Object.assign(Object.assign({}, $), _), ye = we(A == null ? void 0 : A.icon, F.icon), _e = Object.assign(Object.assign({}, (f == null ? void 0 : f.icon) || {}), Y.icon || {}), ce = S && !pe ? /* @__PURE__ */ q.createElement(Ra, {
    prefixCls: J,
    className: ye,
    style: _e
  }, S) : o && typeof o == "object" && o.icon ? /* @__PURE__ */ q.createElement(Ra, {
    prefixCls: J,
    className: ye,
    style: _e
  }, o.icon) : /* @__PURE__ */ q.createElement(ay, {
    existIcon: !!S,
    prefixCls: J,
    loading: pe,
    mount: Q.current
  }), He = x || x === 0 ? sy(x, ee && re) : null;
  if (B.href !== void 0)
    return ae(/* @__PURE__ */ q.createElement("a", Object.assign({}, B, {
      className: we(b, {
        [`${J}-disabled`]: ge
      }),
      href: ge ? void 0 : B.href,
      style: ve,
      onClick: Me,
      ref: O,
      tabIndex: ge ? -1 : 0
    }), ce, He));
  let be = /* @__PURE__ */ q.createElement("button", Object.assign({}, G, {
    type: y,
    className: b,
    style: ve,
    onClick: Me,
    disabled: ge,
    ref: O
  }), ce, He, Ne && /* @__PURE__ */ q.createElement(Jy, {
    prefixCls: J
  }));
  return vo(z) || (be = /* @__PURE__ */ q.createElement(r0, {
    component: "Button",
    disabled: pe
  }, be)), ae(be);
}), Bi = nb;
Bi.Group = oy;
Bi.__ANT_BUTTON = !0;
process.env.NODE_ENV !== "production" && (Bi.displayName = "Button");
function rb(e, t, n) {
  var r = n || {}, o = r.noTrailing, i = o === void 0 ? !1 : o, s = r.noLeading, a = s === void 0 ? !1 : s, c = r.debounceMode, l = c === void 0 ? void 0 : c, u, d = !1, f = 0;
  function v() {
    u && clearTimeout(u);
  }
  function g(x) {
    var S = x || {}, C = S.upcomingOnly, h = C === void 0 ? !1 : C;
    v(), d = !h;
  }
  function p() {
    for (var x = arguments.length, S = new Array(x), C = 0; C < x; C++)
      S[C] = arguments[C];
    var h = this, E = Date.now() - f;
    if (d)
      return;
    function y() {
      f = Date.now(), t.apply(h, S);
    }
    function A() {
      u = void 0;
    }
    !a && l && !u && y(), v(), l === void 0 && E > e ? a ? (f = Date.now(), i || (u = setTimeout(l ? A : y, e))) : y() : i !== !0 && (u = setTimeout(l ? A : y, l === void 0 ? e - E : e));
  }
  return p.cancel = g, p;
}
function ob(e, t, n) {
  var r = {}, o = r.atBegin, i = o === void 0 ? !1 : o;
  return rb(e, t, {
    debounceMode: i !== !1
  });
}
function tu(e) {
  return ["small", "middle", "large"].includes(e);
}
const p0 = ["wrap", "nowrap", "wrap-reverse"], x0 = ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around", "space-evenly", "stretch", "normal", "left", "right"], g0 = ["center", "start", "end", "flex-start", "flex-end", "self-start", "self-end", "baseline", "normal", "stretch"], ib = (e, t) => {
  const n = t.wrap === !0 ? "wrap" : t.wrap;
  return {
    [`${e}-wrap-${n}`]: n && p0.includes(n)
  };
}, sb = (e, t) => {
  const n = {};
  return g0.forEach((r) => {
    n[`${e}-align-${r}`] = t.align === r;
  }), n[`${e}-align-stretch`] = !t.align && !!t.vertical, n;
}, ab = (e, t) => {
  const n = {};
  return x0.forEach((r) => {
    n[`${e}-justify-${r}`] = t.justify === r;
  }), n;
};
function cb(e, t) {
  return we(Object.assign(Object.assign(Object.assign({}, ib(e, t)), sb(e, t)), ab(e, t)));
}
const lb = (e) => {
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
}, ub = (e) => {
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
}, fb = (e) => {
  const {
    componentCls: t
  } = e, n = {};
  return p0.forEach((r) => {
    n[`${t}-wrap-${r}`] = {
      flexWrap: r
    };
  }), n;
}, db = (e) => {
  const {
    componentCls: t
  } = e, n = {};
  return g0.forEach((r) => {
    n[`${t}-align-${r}`] = {
      alignItems: r
    };
  }), n;
}, hb = (e) => {
  const {
    componentCls: t
  } = e, n = {};
  return x0.forEach((r) => {
    n[`${t}-justify-${r}`] = {
      justifyContent: r
    };
  }), n;
}, pb = () => ({}), xb = Ti("Flex", (e) => {
  const {
    paddingXS: t,
    padding: n,
    paddingLG: r
  } = e, o = xn(e, {
    flexGapSM: t,
    flexGap: n,
    flexGapLG: r
  });
  return [lb(o), ub(o), fb(o), db(o), hb(o)];
}, pb, {
  // Flex component don't apply extra font style
  // https://github.com/ant-design/ant-design/issues/46403
  resetStyle: !1
});
var gb = function(e, t) {
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
  } = e, d = gb(e, ["prefixCls", "rootClassName", "className", "style", "flex", "gap", "children", "vertical", "component"]), {
    flex: f,
    direction: v,
    getPrefixCls: g
  } = q.useContext(kt), p = g("flex", n), [x, S, C] = xb(p), h = l ?? (f == null ? void 0 : f.vertical), E = we(o, r, f == null ? void 0 : f.className, p, S, C, cb(p, e), {
    [`${p}-rtl`]: v === "rtl",
    [`${p}-gap-${a}`]: tu(a),
    [`${p}-vertical`]: h
  }), y = Object.assign(Object.assign({}, f == null ? void 0 : f.style), i);
  return s && (y.flex = s), a && !tu(a) && (y.gap = a), x(/* @__PURE__ */ q.createElement(u, Object.assign({
    ref: t,
    className: E,
    style: y
  }, t0(d, ["justify", "wrap", "align"])), c));
});
process.env.NODE_ENV !== "production" && (m0.displayName = "Flex");
const Zo = 100, v0 = Zo / 5, y0 = Zo / 2 - v0 / 2, ws = y0 * 2 * Math.PI, nu = 50, ru = (e) => {
  const {
    dotClassName: t,
    style: n,
    hasCircleCls: r
  } = e;
  return /* @__PURE__ */ w.createElement("circle", {
    className: we(`${t}-circle`, {
      [`${t}-circle-bg`]: r
    }),
    r: y0,
    cx: nu,
    cy: nu,
    strokeWidth: v0,
    style: n
  });
}, mb = (e) => {
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
    className: we(o, `${r}-progress`, c <= 0 && i)
  }, /* @__PURE__ */ w.createElement("svg", {
    viewBox: `0 0 ${Zo} ${Zo}`,
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
function vb(e) {
  const {
    prefixCls: t,
    percent: n = 0
  } = e, r = `${t}-dot`, o = `${r}-holder`, i = `${o}-hidden`;
  return /* @__PURE__ */ w.createElement(w.Fragment, null, /* @__PURE__ */ w.createElement("span", {
    className: we(o, n > 0 && i)
  }, /* @__PURE__ */ w.createElement("span", {
    className: we(r, `${t}-dot-spin`)
  }, [1, 2, 3, 4].map((s) => /* @__PURE__ */ w.createElement("i", {
    className: `${t}-dot-item`,
    key: s
  })))), /* @__PURE__ */ w.createElement(mb, {
    prefixCls: t,
    percent: n
  }));
}
function yb(e) {
  const {
    prefixCls: t,
    indicator: n,
    percent: r
  } = e, o = `${t}-dot`;
  return n && /* @__PURE__ */ w.isValidElement(n) ? xc(n, {
    className: we(n.props.className, o),
    percent: r
  }) : /* @__PURE__ */ w.createElement(vb, {
    prefixCls: t,
    percent: r
  });
}
const bb = new cd("antSpinMove", {
  to: {
    opacity: 1
  }
}), Sb = new cd("antRotate", {
  to: {
    transform: "rotate(405deg)"
  }
}), Cb = (e) => {
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
          animationName: bb,
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
          animationName: Sb,
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
}, wb = (e) => {
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
}, Eb = Ti("Spin", (e) => {
  const t = xn(e, {
    spinDotDefault: e.colorTextDescription
  });
  return [Cb(t)];
}, wb), _b = 200, ou = [[30, 0.05], [70, 0.03], [96, 0.01]];
function Ob(e, t) {
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
  }, _b)), () => {
    clearInterval(o.current);
  }), [i, e]), i ? n : t;
}
var Ab = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
let b0;
function Tb(e, t) {
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
  } = e, p = Ab(e, ["prefixCls", "spinning", "delay", "className", "rootClassName", "size", "tip", "wrapperClassName", "style", "children", "fullscreen", "indicator", "percent"]), {
    getPrefixCls: x,
    direction: S,
    className: C,
    style: h,
    indicator: E
  } = dc("spin"), y = x("spin", n), [A, _, j] = Eb(y), [D, G] = w.useState(() => r && !Tb(r, o)), oe = Ob(D, g);
  w.useEffect(() => {
    if (r) {
      const R = ob(o, () => {
        G(!0);
      });
      return R(), () => {
        var N;
        (N = R == null ? void 0 : R.cancel) === null || N === void 0 || N.call(R);
      };
    }
    G(!1);
  }, [o, r]);
  const ne = w.useMemo(() => typeof d < "u" && !f, [d, f]);
  if (process.env.NODE_ENV !== "production") {
    const R = pn("Spin");
    process.env.NODE_ENV !== "production" && R(!c || ne || f, "usage", "`tip` only work in nest or fullscreen pattern.");
  }
  const z = we(y, C, {
    [`${y}-sm`]: a === "small",
    [`${y}-lg`]: a === "large",
    [`${y}-spinning`]: D,
    [`${y}-show-text`]: !!c,
    [`${y}-rtl`]: S === "rtl"
  }, i, !f && s, _, j), X = we(`${y}-container`, {
    [`${y}-blur`]: D
  }), Z = (t = v ?? E) !== null && t !== void 0 ? t : b0, I = Object.assign(Object.assign({}, h), u), T = /* @__PURE__ */ w.createElement("div", Object.assign({}, p, {
    style: I,
    className: z,
    "aria-live": "polite",
    "aria-busy": D
  }), /* @__PURE__ */ w.createElement(yb, {
    prefixCls: y,
    indicator: Z,
    percent: oe
  }), c && (ne || f) ? /* @__PURE__ */ w.createElement("div", {
    className: `${y}-text`
  }, c) : null);
  return A(ne ? /* @__PURE__ */ w.createElement("div", Object.assign({}, p, {
    className: we(`${y}-nested-loading`, l, _, j)
  }), D && /* @__PURE__ */ w.createElement("div", {
    key: "loading"
  }, T), /* @__PURE__ */ w.createElement("div", {
    className: X,
    key: "container"
  }, d)) : f ? /* @__PURE__ */ w.createElement("div", {
    className: we(`${y}-fullscreen`, {
      [`${y}-fullscreen-show`]: D
    }, s, _, j)
  }, T) : T);
};
Nr.setDefaultIndicator = (e) => {
  b0 = e;
};
process.env.NODE_ENV !== "production" && (Nr.displayName = "Spin");
function S0(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Rb } = Object.prototype, { getPrototypeOf: vc } = Object, { iterator: zi, toStringTag: C0 } = Symbol, Hi = /* @__PURE__ */ ((e) => (t) => {
  const n = Rb.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Lt = (e) => (e = e.toLowerCase(), (t) => Hi(t) === e), $i = (e) => (t) => typeof t === e, { isArray: dr } = Array, Hr = $i("undefined");
function Pb(e) {
  return e !== null && !Hr(e) && e.constructor !== null && !Hr(e.constructor) && gt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const w0 = Lt("ArrayBuffer");
function Ib(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && w0(e.buffer), t;
}
const Nb = $i("string"), gt = $i("function"), E0 = $i("number"), Fi = (e) => e !== null && typeof e == "object", kb = (e) => e === !0 || e === !1, Mo = (e) => {
  if (Hi(e) !== "object")
    return !1;
  const t = vc(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(C0 in e) && !(zi in e);
}, jb = Lt("Date"), Lb = Lt("File"), Mb = Lt("Blob"), Db = Lt("FileList"), Bb = (e) => Fi(e) && gt(e.pipe), zb = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || gt(e.append) && ((t = Hi(e)) === "formdata" || // detect form-data instance
  t === "object" && gt(e.toString) && e.toString() === "[object FormData]"));
}, Hb = Lt("URLSearchParams"), [$b, Fb, Vb, Wb] = ["ReadableStream", "Request", "Response", "Headers"].map(Lt), qb = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Xr(e, t, { allOwnKeys: n = !1 } = {}) {
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
const wn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, O0 = (e) => !Hr(e) && e !== wn;
function Pa() {
  const { caseless: e } = O0(this) && this || {}, t = {}, n = (r, o) => {
    const i = e && _0(t, o) || o;
    Mo(t[i]) && Mo(r) ? t[i] = Pa(t[i], r) : Mo(r) ? t[i] = Pa({}, r) : dr(r) ? t[i] = r.slice() : t[i] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Xr(arguments[r], n);
  return t;
}
const Ub = (e, t, n, { allOwnKeys: r } = {}) => (Xr(t, (o, i) => {
  n && gt(o) ? e[i] = S0(o, n) : e[i] = o;
}, { allOwnKeys: r }), e), Gb = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Yb = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Xb = (e, t, n, r) => {
  let o, i, s;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      s = o[i], (!r || r(s, e, t)) && !a[s] && (t[s] = e[s], a[s] = !0);
    e = n !== !1 && vc(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Kb = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Zb = (e) => {
  if (!e) return null;
  if (dr(e)) return e;
  let t = e.length;
  if (!E0(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Jb = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && vc(Uint8Array)), Qb = (e, t) => {
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
  Xr(n, (o, i) => {
    let s;
    (s = t(o, i, e)) !== !1 && (r[i] = s || o);
  }), Object.defineProperties(e, r);
}, o2 = (e) => {
  A0(e, (t, n) => {
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
  return !!(e && gt(e.append) && e[C0] === "FormData" && e[zi]);
}
const l2 = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (Fi(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[o] = r;
        const i = dr(r) ? [] : {};
        return Xr(r, (s, a) => {
          const c = n(s, o + 1);
          !Hr(c) && (i[a] = c);
        }), t[o] = void 0, i;
      }
    }
    return r;
  };
  return n(e, 0);
}, u2 = Lt("AsyncFunction"), f2 = (e) => e && (Fi(e) || gt(e)) && gt(e.then) && gt(e.catch), T0 = ((e, t) => e ? setImmediate : t ? ((n, r) => (wn.addEventListener("message", ({ source: o, data: i }) => {
  o === wn && i === n && r.length && r.shift()();
}, !1), (o) => {
  r.push(o), wn.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  gt(wn.postMessage)
), d2 = typeof queueMicrotask < "u" ? queueMicrotask.bind(wn) : typeof process < "u" && process.nextTick || T0, h2 = (e) => e != null && gt(e[zi]), P = {
  isArray: dr,
  isArrayBuffer: w0,
  isBuffer: Pb,
  isFormData: zb,
  isArrayBufferView: Ib,
  isString: Nb,
  isNumber: E0,
  isBoolean: kb,
  isObject: Fi,
  isPlainObject: Mo,
  isReadableStream: $b,
  isRequest: Fb,
  isResponse: Vb,
  isHeaders: Wb,
  isUndefined: Hr,
  isDate: jb,
  isFile: Lb,
  isBlob: Mb,
  isRegExp: r2,
  isFunction: gt,
  isStream: Bb,
  isURLSearchParams: Hb,
  isTypedArray: Jb,
  isFileList: Db,
  forEach: Xr,
  merge: Pa,
  extend: Ub,
  trim: qb,
  stripBOM: Gb,
  inherits: Yb,
  toFlatObject: Xb,
  kindOf: Hi,
  kindOfTest: Lt,
  endsWith: Kb,
  toArray: Zb,
  forEachEntry: Qb,
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
  global: wn,
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
P.inherits(fe, Error, {
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
      config: P.toJSONObject(this.config),
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
  return P.toFlatObject(e, s, function(c) {
    return c !== Error.prototype;
  }, (a) => a !== "isAxiosError"), fe.call(s, e.message, t, n, r, o), s.cause = e, s.name = e.name, i && Object.assign(s, i), s;
};
const p2 = null;
function Ia(e) {
  return P.isPlainObject(e) || P.isArray(e);
}
function I0(e) {
  return P.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function su(e, t, n) {
  return e ? e.concat(t).map(function(o, i) {
    return o = I0(o), !n && i ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function x2(e) {
  return P.isArray(e) && !e.some(Ia);
}
const g2 = P.toFlatObject(P, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Vi(e, t, n) {
  if (!P.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = P.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(p, x) {
    return !P.isUndefined(x[p]);
  });
  const r = n.metaTokens, o = n.visitor || u, i = n.dots, s = n.indexes, c = (n.Blob || typeof Blob < "u" && Blob) && P.isSpecCompliantForm(t);
  if (!P.isFunction(o))
    throw new TypeError("visitor must be a function");
  function l(g) {
    if (g === null) return "";
    if (P.isDate(g))
      return g.toISOString();
    if (!c && P.isBlob(g))
      throw new fe("Blob is not supported. Use a Buffer instead.");
    return P.isArrayBuffer(g) || P.isTypedArray(g) ? c && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function u(g, p, x) {
    let S = g;
    if (g && !x && typeof g == "object") {
      if (P.endsWith(p, "{}"))
        p = r ? p : p.slice(0, -2), g = JSON.stringify(g);
      else if (P.isArray(g) && x2(g) || (P.isFileList(g) || P.endsWith(p, "[]")) && (S = P.toArray(g)))
        return p = I0(p), S.forEach(function(h, E) {
          !(P.isUndefined(h) || h === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? su([p], E, i) : s === null ? p : p + "[]",
            l(h)
          );
        }), !1;
    }
    return Ia(g) ? !0 : (t.append(su(x, p, i), l(g)), !1);
  }
  const d = [], f = Object.assign(g2, {
    defaultVisitor: u,
    convertValue: l,
    isVisitable: Ia
  });
  function v(g, p) {
    if (!P.isUndefined(g)) {
      if (d.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + p.join("."));
      d.push(g), P.forEach(g, function(S, C) {
        (!(P.isUndefined(S) || S === null) && o.call(
          t,
          S,
          P.isString(C) ? C.trim() : C,
          p,
          f
        )) === !0 && v(S, p ? p.concat(C) : [C]);
      }), d.pop();
    }
  }
  if (!P.isObject(e))
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
function yc(e, t) {
  this._pairs = [], e && Vi(e, this, t);
}
const N0 = yc.prototype;
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
  P.isFunction(n) && (n = {
    serialize: n
  });
  const o = n && n.serialize;
  let i;
  if (o ? i = o(t, n) : i = P.isURLSearchParams(t) ? t.toString() : new yc(t, n).toString(r), i) {
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
    P.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const j0 = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, v2 = typeof URLSearchParams < "u" ? URLSearchParams : yc, y2 = typeof FormData < "u" ? FormData : null, b2 = typeof Blob < "u" ? Blob : null, S2 = {
  isBrowser: !0,
  classes: {
    URLSearchParams: v2,
    FormData: y2,
    Blob: b2
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, bc = typeof window < "u" && typeof document < "u", Na = typeof navigator == "object" && navigator || void 0, C2 = bc && (!Na || ["ReactNative", "NativeScript", "NS"].indexOf(Na.product) < 0), w2 = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", E2 = bc && window.location.href || "http://localhost", _2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: bc,
  hasStandardBrowserEnv: C2,
  hasStandardBrowserWebWorkerEnv: w2,
  navigator: Na,
  origin: E2
}, Symbol.toStringTag, { value: "Module" })), ct = {
  ..._2,
  ...S2
};
function O2(e, t) {
  return Vi(e, new ct.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, i) {
      return ct.isNode && P.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function A2(e) {
  return P.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
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
    return s = !s && P.isArray(o) ? o.length : s, c ? (P.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !a) : ((!o[s] || !P.isObject(o[s])) && (o[s] = []), t(n, r, o[s], i) && P.isArray(o[s]) && (o[s] = T2(o[s])), !a);
  }
  if (P.isFormData(e) && P.isFunction(e.entries)) {
    const n = {};
    return P.forEachEntry(e, (r, o) => {
      t(A2(r), o, n, 0);
    }), n;
  }
  return null;
}
function R2(e, t, n) {
  if (P.isString(e))
    try {
      return (t || JSON.parse)(e), P.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Kr = {
  transitional: j0,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, i = P.isObject(t);
    if (i && P.isHTMLForm(t) && (t = new FormData(t)), P.isFormData(t))
      return o ? JSON.stringify(L0(t)) : t;
    if (P.isArrayBuffer(t) || P.isBuffer(t) || P.isStream(t) || P.isFile(t) || P.isBlob(t) || P.isReadableStream(t))
      return t;
    if (P.isArrayBufferView(t))
      return t.buffer;
    if (P.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return O2(t, this.formSerializer).toString();
      if ((a = P.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
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
    const n = this.transitional || Kr.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (P.isResponse(t) || P.isReadableStream(t))
      return t;
    if (t && P.isString(t) && (r && !this.responseType || o)) {
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
P.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Kr.headers[e] = {};
});
const P2 = P.toObjectSet([
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
function Do(e) {
  return e === !1 || e == null ? e : P.isArray(e) ? e.map(Do) : String(e);
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
  if (P.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!P.isString(t)) {
    if (P.isString(r))
      return t.indexOf(r) !== -1;
    if (P.isRegExp(r))
      return r.test(t);
  }
}
function j2(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function L2(e, t) {
  const n = P.toCamelCase(" " + t);
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
      const d = P.findKey(o, u);
      (!d || o[d] === void 0 || l === !0 || l === void 0 && o[d] !== !1) && (o[d || c] = Do(a));
    }
    const s = (a, c) => P.forEach(a, (l, u) => i(l, u, c));
    if (P.isPlainObject(t) || t instanceof this.constructor)
      s(t, n);
    else if (P.isString(t) && (t = t.trim()) && !k2(t))
      s(I2(t), n);
    else if (P.isObject(t) && P.isIterable(t)) {
      let a = {}, c, l;
      for (const u of t) {
        if (!P.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        a[l = u[0]] = (c = a[l]) ? P.isArray(c) ? [...c, u[1]] : [c, u[1]] : u[1];
      }
      s(a, n);
    } else
      t != null && i(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = wr(t), t) {
      const r = P.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return N2(o);
        if (P.isFunction(n))
          return n.call(this, o, r);
        if (P.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = wr(t), t) {
      const r = P.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Es(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(s) {
      if (s = wr(s), s) {
        const a = P.findKey(r, s);
        a && (!n || Es(r, r[a], a, n)) && (delete r[a], o = !0);
      }
    }
    return P.isArray(t) ? t.forEach(i) : i(t), o;
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
    return P.forEach(this, (o, i) => {
      const s = P.findKey(r, i);
      if (s) {
        n[s] = Do(o), delete n[i];
        return;
      }
      const a = t ? j2(i) : String(i).trim();
      a !== i && delete n[i], n[a] = Do(o), r[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return P.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = t && P.isArray(r) ? r.join(", ") : r);
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
    return P.isArray(t) ? t.forEach(i) : i(t), this;
  }
};
mt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
P.reduceDescriptors(mt.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
P.freezeMethods(mt);
function _s(e, t) {
  const n = this || Kr, r = t || n, o = mt.from(r.headers);
  let i = r.data;
  return P.forEach(e, function(a) {
    i = a.call(n, i, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), i;
}
function M0(e) {
  return !!(e && e.__CANCEL__);
}
function hr(e, t, n) {
  fe.call(this, e ?? "canceled", fe.ERR_CANCELED, t, n), this.name = "CanceledError";
}
P.inherits(hr, fe, {
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
const Jo = (e, t, n = 3) => {
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
}, fu = (e) => (...t) => P.asap(() => e(...t)), z2 = ct.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, ct.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(ct.origin),
  ct.navigator && /(msie|trident)/i.test(ct.navigator.userAgent)
) : () => !0, H2 = ct.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, o, i) {
      const s = [e + "=" + encodeURIComponent(t)];
      P.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), P.isString(r) && s.push("path=" + r), P.isString(o) && s.push("domain=" + o), i === !0 && s.push("secure"), document.cookie = s.join("; ");
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
function $2(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function F2(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function B0(e, t, n) {
  let r = !$2(t);
  return e && (r || n == !1) ? F2(e, t) : t;
}
const du = (e) => e instanceof mt ? { ...e } : e;
function kn(e, t) {
  t = t || {};
  const n = {};
  function r(l, u, d, f) {
    return P.isPlainObject(l) && P.isPlainObject(u) ? P.merge.call({ caseless: f }, l, u) : P.isPlainObject(u) ? P.merge({}, u) : P.isArray(u) ? u.slice() : u;
  }
  function o(l, u, d, f) {
    if (P.isUndefined(u)) {
      if (!P.isUndefined(l))
        return r(void 0, l, d, f);
    } else return r(l, u, d, f);
  }
  function i(l, u) {
    if (!P.isUndefined(u))
      return r(void 0, u);
  }
  function s(l, u) {
    if (P.isUndefined(u)) {
      if (!P.isUndefined(l))
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
  return P.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const d = c[u] || o, f = d(e[u], t[u], u);
    P.isUndefined(f) && d !== a || (n[u] = f);
  }), n;
}
const z0 = (e) => {
  const t = kn({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: i, headers: s, auth: a } = t;
  t.headers = s = mt.from(s), t.url = k0(B0(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), a && s.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let c;
  if (P.isFormData(n)) {
    if (ct.hasStandardBrowserEnv || ct.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if ((c = s.getContentType()) !== !1) {
      const [l, ...u] = c ? c.split(";").map((d) => d.trim()).filter(Boolean) : [];
      s.setContentType([l || "multipart/form-data", ...u].join("; "));
    }
  }
  if (ct.hasStandardBrowserEnv && (r && P.isFunction(r) && (r = r(t)), r || r !== !1 && z2(t.url))) {
    const l = o && i && H2.read(i);
    l && s.set(o, l);
  }
  return t;
}, V2 = typeof XMLHttpRequest < "u", W2 = V2 && function(e) {
  return new Promise(function(n, r) {
    const o = z0(e);
    let i = o.data;
    const s = mt.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: c, onDownloadProgress: l } = o, u, d, f, v, g;
    function p() {
      v && v(), g && g(), o.cancelToken && o.cancelToken.unsubscribe(u), o.signal && o.signal.removeEventListener("abort", u);
    }
    let x = new XMLHttpRequest();
    x.open(o.method.toUpperCase(), o.url, !0), x.timeout = o.timeout;
    function S() {
      if (!x)
        return;
      const h = mt.from(
        "getAllResponseHeaders" in x && x.getAllResponseHeaders()
      ), y = {
        data: !a || a === "text" || a === "json" ? x.responseText : x.response,
        status: x.status,
        statusText: x.statusText,
        headers: h,
        config: e,
        request: x
      };
      D0(function(_) {
        n(_), p();
      }, function(_) {
        r(_), p();
      }, y), x = null;
    }
    "onloadend" in x ? x.onloadend = S : x.onreadystatechange = function() {
      !x || x.readyState !== 4 || x.status === 0 && !(x.responseURL && x.responseURL.indexOf("file:") === 0) || setTimeout(S);
    }, x.onabort = function() {
      x && (r(new fe("Request aborted", fe.ECONNABORTED, e, x)), x = null);
    }, x.onerror = function() {
      r(new fe("Network Error", fe.ERR_NETWORK, e, x)), x = null;
    }, x.ontimeout = function() {
      let E = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const y = o.transitional || j0;
      o.timeoutErrorMessage && (E = o.timeoutErrorMessage), r(new fe(
        E,
        y.clarifyTimeoutError ? fe.ETIMEDOUT : fe.ECONNABORTED,
        e,
        x
      )), x = null;
    }, i === void 0 && s.setContentType(null), "setRequestHeader" in x && P.forEach(s.toJSON(), function(E, y) {
      x.setRequestHeader(y, E);
    }), P.isUndefined(o.withCredentials) || (x.withCredentials = !!o.withCredentials), a && a !== "json" && (x.responseType = o.responseType), l && ([f, g] = Jo(l, !0), x.addEventListener("progress", f)), c && x.upload && ([d, v] = Jo(c), x.upload.addEventListener("progress", d), x.upload.addEventListener("loadend", v)), (o.cancelToken || o.signal) && (u = (h) => {
      x && (r(!h || h.type ? new hr(null, e, x) : h), x.abort(), x = null);
    }, o.cancelToken && o.cancelToken.subscribe(u), o.signal && (o.signal.aborted ? u() : o.signal.addEventListener("abort", u)));
    const C = M2(o.url);
    if (C && ct.protocols.indexOf(C) === -1) {
      r(new fe("Unsupported protocol " + C + ":", fe.ERR_BAD_REQUEST, e));
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
    return c.unsubscribe = () => P.asap(a), c;
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
}, Wi = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", H0 = Wi && typeof ReadableStream == "function", X2 = Wi && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), $0 = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, K2 = H0 && $0(() => {
  let e = !1;
  const t = new Request(ct.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), pu = 64 * 1024, ka = H0 && $0(() => P.isReadableStream(new Response("").body)), Qo = {
  stream: ka && ((e) => e.body)
};
Wi && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Qo[t] && (Qo[t] = P.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new fe(`Response type '${t}' is not supported`, fe.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Z2 = async (e) => {
  if (e == null)
    return 0;
  if (P.isBlob(e))
    return e.size;
  if (P.isSpecCompliantForm(e))
    return (await new Request(ct.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (P.isArrayBufferView(e) || P.isArrayBuffer(e))
    return e.byteLength;
  if (P.isURLSearchParams(e) && (e = e + ""), P.isString(e))
    return (await X2(e)).byteLength;
}, J2 = async (e, t) => {
  const n = P.toFiniteNumber(e.getContentLength());
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
  const p = v && v.unsubscribe && (() => {
    v.unsubscribe();
  });
  let x;
  try {
    if (c && K2 && n !== "get" && n !== "head" && (x = await J2(u, r)) !== 0) {
      let y = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), A;
      if (P.isFormData(r) && (A = y.headers.get("content-type")) && u.setContentType(A), y.body) {
        const [_, j] = uu(
          x,
          Jo(fu(c))
        );
        r = hu(y.body, pu, _, j);
      }
    }
    P.isString(d) || (d = d ? "include" : "omit");
    const S = "credentials" in Request.prototype;
    g = new Request(t, {
      ...f,
      signal: v,
      method: n.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: S ? d : void 0
    });
    let C = await fetch(g);
    const h = ka && (l === "stream" || l === "response");
    if (ka && (a || h && p)) {
      const y = {};
      ["status", "statusText", "headers"].forEach((D) => {
        y[D] = C[D];
      });
      const A = P.toFiniteNumber(C.headers.get("content-length")), [_, j] = a && uu(
        A,
        Jo(fu(a), !0)
      ) || [];
      C = new Response(
        hu(C.body, pu, _, () => {
          j && j(), p && p();
        }),
        y
      );
    }
    l = l || "text";
    let E = await Qo[P.findKey(Qo, l) || "text"](C, e);
    return !h && p && p(), await new Promise((y, A) => {
      D0(y, A, {
        data: E,
        headers: mt.from(C.headers),
        status: C.status,
        statusText: C.statusText,
        config: e,
        request: g
      });
    });
  } catch (S) {
    throw p && p(), S && S.name === "TypeError" && /Load failed|fetch/i.test(S.message) ? Object.assign(
      new fe("Network Error", fe.ERR_NETWORK, e, g),
      {
        cause: S.cause || S
      }
    ) : fe.from(S, S && S.code, e, g);
  }
}), ja = {
  http: p2,
  xhr: W2,
  fetch: Q2
};
P.forEach(ja, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const xu = (e) => `- ${e}`, eS = (e) => P.isFunction(e) || e === null || e === !1, F0 = {
  getAdapter: (e) => {
    e = P.isArray(e) ? e : [e];
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
  return Os(e), e.headers = mt.from(e.headers), e.data = _s.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), F0.getAdapter(e.adapter || Kr.adapter)(e).then(function(r) {
    return Os(e), r.data = _s.call(
      e,
      e.transformResponse,
      r
    ), r.headers = mt.from(r.headers), r;
  }, function(r) {
    return M0(r) || (Os(e), r && r.response && (r.response.data = _s.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = mt.from(r.response.headers))), Promise.reject(r);
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
const Bo = {
  assertOptions: tS,
  validators: qi
}, Dt = Bo.validators;
let Pn = class {
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = kn(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 && Bo.assertOptions(r, {
      silentJSONParsing: Dt.transitional(Dt.boolean),
      forcedJSONParsing: Dt.transitional(Dt.boolean),
      clarifyTimeoutError: Dt.transitional(Dt.boolean)
    }, !1), o != null && (P.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : Bo.assertOptions(o, {
      encode: Dt.function,
      serialize: Dt.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Bo.assertOptions(n, {
      baseUrl: Dt.spelling("baseURL"),
      withXsrfToken: Dt.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let s = i && P.merge(
      i.common,
      i[n.method]
    );
    i && P.forEach(
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
      const g = [gu.bind(this), void 0];
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
      u = gu.call(this, v);
    } catch (g) {
      return Promise.reject(g);
    }
    for (d = 0, f = l.length; d < f; )
      u = u.then(l[d++], l[d++]);
    return u;
  }
  getUri(t) {
    t = kn(this.defaults, t);
    const n = B0(t.baseURL, t.url, t.allowAbsoluteUrls);
    return k0(n, t.params, t.paramsSerializer);
  }
};
P.forEach(["delete", "get", "head", "options"], function(t) {
  Pn.prototype[t] = function(n, r) {
    return this.request(kn(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
P.forEach(["post", "put", "patch"], function(t) {
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
  return P.isObject(e) && e.isAxiosError === !0;
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
  const t = new Pn(e), n = S0(Pn.prototype.request, t);
  return P.extend(n, Pn.prototype, t, { allOwnKeys: !0 }), P.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return q0(kn(e, o));
  }, n;
}
const Ge = q0(Kr);
Ge.Axios = Pn;
Ge.CanceledError = hr;
Ge.CancelToken = nS;
Ge.isCancel = M0;
Ge.VERSION = V0;
Ge.toFormData = Vi;
Ge.AxiosError = fe;
Ge.Cancel = Ge.CanceledError;
Ge.all = function(t) {
  return Promise.all(t);
};
Ge.spread = rS;
Ge.isAxiosError = oS;
Ge.mergeConfig = kn;
Ge.AxiosHeaders = mt;
Ge.formToJSON = (e) => L0(P.isHTMLForm(e) ? new FormData(e) : e);
Ge.getAdapter = F0.getAdapter;
Ge.HttpStatusCode = La;
Ge.default = Ge;
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
  formToJSON: $S,
  getAdapter: FS,
  mergeConfig: VS
} = Ge;
function ei() {
  const e = ["PUT", "Content-Ty", "1106157YlLJfA", "tials", "ient", "1138964eQorFr", "response", "6654291BStlmh", "1538516Ovhoea", "applicatio", "/api/v1/cl", "error", "DELETE", "2981058IZqidD", "642234KKivua", "POST", "withCreden", "data", "message", "defaults", "n/json", "PATCH", "params", "1707905FUzPxL", "GET"];
  return ei = function() {
    return e;
  }, ei();
}
const Xt = ti;
(function(e, t) {
  const n = ti, r = e();
  for (; ; )
    try {
      if (-parseInt(n(312)) / 1 + -parseInt(n(303)) / 2 + parseInt(n(300)) / 3 + parseInt(n(306)) / 4 + parseInt(n(296)) / 5 + -parseInt(n(311)) / 6 + parseInt(n(305)) / 7 === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ei, 336983);
Xt(308) + Xt(302);
Ge[Xt(292)][Xt(289) + Xt(301)] = !0;
const iS = async (e) => {
  var n, r, o, i;
  const t = Xt;
  try {
    return (await Ge(e))[t(290)];
  } catch (s) {
    throw ((r = (n = s[t(304)]) == null ? void 0 : n[t(290)]) == null ? void 0 : r[t(291)]) || ((i = (o = s[t(304)]) == null ? void 0 : o[t(290)]) == null ? void 0 : i[t(309)]) || s[t(291)];
  }
};
function ti(e, t) {
  const n = ei();
  return ti = function(r, o) {
    return r = r - 288, n[r];
  }, ti(e, t);
}
const sS = {};
sS[Xt(299) + "pe"] = Xt(307) + Xt(293);
const je = ri;
function ni() {
  const e = ["touchstart", "Event", "keyup", "937184WEesjp", "2431743gsVmkE", "wheelEvent", "7243794GqBYRP", "ACTION_UP", "7855dSaRBs", "564031vzdiYX", "mousedown", "enuHide", "4yGwoRI", "keyBoardEv", "touchmove", "14fYTaoX", "ent", "keydown", "assistiveM", "touchend", "fullscreen", "mouseup", "7580850MtXaJW", "ACTION_MOV", "mousemove", "ACTION_DOW", "2934fvibRI", "moveEvent", "shortcutEv", "781328fNdmRI"];
  return ni = function() {
    return e;
  }, ni();
}
(function(e, t) {
  const n = ri, r = e();
  for (; ; )
    try {
      if (-parseInt(n(245)) / 1 + -parseInt(n(235)) / 2 + parseInt(n(240)) / 3 * (parseInt(n(218)) / 4) + -parseInt(n(244)) / 5 * (parseInt(n(232)) / 6) + -parseInt(n(221)) / 7 * (parseInt(n(239)) / 8) + parseInt(n(242)) / 9 + parseInt(n(228)) / 10 === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ni, 416322);
const yn = {};
yn[je(230)] = je(229) + "E", yn[je(227)] = je(243), yn[je(216)] = je(231) + "N", yn[je(220)] = je(229) + "E", yn[je(225)] = je(243), yn[je(236)] = je(231) + "N";
function ri(e, t) {
  const n = ni();
  return ri = function(r, o) {
    return r = r - 216, n[r];
  }, ri(e, t);
}
const Et = yn, Ma = {};
Ma[je(238)] = je(243), Ma[je(223)] = je(231) + "N";
const aS = Ma, cS = je(233), lS = je(241), uS = je(219) + je(222), U0 = je(224) + je(217), Da = je(234) + je(222), fS = je(226) + je(237);
function En(e, t) {
  const n = oi();
  return En = function(r, o) {
    return r = r - 362, n[r];
  }, En(e, t);
}
(function(e, t) {
  const n = En, r = e();
  for (; ; )
    try {
      if (-parseInt(n(370)) / 1 + parseInt(n(454)) / 2 * (-parseInt(n(465)) / 3) + parseInt(n(367)) / 4 * (parseInt(n(375)) / 5) + -parseInt(n(437)) / 6 + -parseInt(n(470)) / 7 + parseInt(n(395)) / 8 + -parseInt(n(409)) / 9 * (-parseInt(n(431)) / 10) === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(oi, 365602);
function oi() {
  const e = ["1239012htxdif", "PaCQQ", "touchmove", "LmPRy", "arrowdown", "type", "CHRhU", "qZlOn", "FGTnc", "AMTOv", "top", "nYGgd", "UkGSG", "SpyTs", "QniOq", "HTWrG", "wgcMm", "269666xzjARs", "EXT", "CcRBw", "removeEven", "NAxTA", "offsetHeig", "forEach", "width", "DGsgs", "mousemove", "keydown", "3DPhXEF", "COPY_TEXT", "wheelEvent", "pqIle", "arrowup", "3420263alsyvT", "ctrlKey", "toLowerCas", "now", "JZwVg", "touch", "sHDFy", "touchstart", "offsetWidt", "isDown", "1186612wSKueE", "arrowright", "addEventLi", "125644WWsFhR", "readText", "TthUN", "touchend", "sign", "10Mkgsaw", "tListener", "shift", "TaycC", "includes", "mousedown", "focus", "KEYBOARD_T", "shiftKey", "showMenu", "yYHhd", "tVMPE", "qnKJO", "getBoundin", "tab", "current", "passive", "action", "meta_state", "XeAAo", "3325992EYjGtC", "deltaY", "preventDef", "clipboard", "YNqxt", "KEYBOARD_C", "gClientRec", "Qtdlr", "arrowleft", "control", "left", "key", "pageY", "typeKey", "561843OYzPqz", "mouseup", "keyAction", "max", "Zpdsv", "stener", "ODE", "PmgmZ", "height", "pageX", "PASTE_TEXT", "vskIf", "ault", "backspace", "JdTcQ", "keyEvent", "BZOYe", "mouse", "toUpperCas", "touchEvent", "enter", "zeSZI", "50DqWFPS", "clientY", "capslock", "repeat", "clientX", "BpzvV"];
  return oi = function() {
    return e;
  }, oi();
}
const dS = ({ isMobile: e, assistive: t, onRemoteEvent: n, canvasContent: r, canvasRef: o }) => {
  const [i, s] = ut(!1), a = (d) => {
    const f = En;
    if (d[f(397) + f(421)](), !o[f(390)]) return;
    const v = o[f(390)], g = v[f(388) + f(401) + "t"]();
    let p = Et[d[f(442)]];
    if (t[f(366)] == !0 || t[f(384)] == !0)
      if (f(413) !== f(456)) {
        p == Et[f(410)] && (f(443) !== f(443) ? _0x11d6c4[f(408)] = f(466) : n(U0, {}));
        return;
      } else _0x3356f2[f(383)] == !0 && (_0x1753da[f(406)] = _0x2fbfa6[f(406)][f(427) + "e"]());
    if (p == Et[f(380)] && s(!0), p != Et[f(380)] && i == !1) return;
    p == Et[f(410)] && (f(451) !== f(436) ? s(!1) : (_0x220d6a[f(408)] = f(400) + f(415), _0x46d654[f(406)] = 21));
    let x, S;
    if (d[f(442)][f(379)](f(362)))
      if (f(448) !== f(448)) {
        const { touches: y, changedTouches: A } = _0x30587c, _ = y[0] ?? A[0];
        _0x1244cb = _[f(418)] - _0x4ab1d6[f(405)], _0x3643bd = _[f(407)] - _0x69383f[f(447)];
      } else {
        const { touches: y, changedTouches: A } = d, _ = y[0] ?? A[0];
        x = _[f(418)] - g[f(405)], S = _[f(407)] - g[f(447)];
      }
    else d[f(442)][f(379)](f(426)) && (x = d[f(435)] - g[f(405)], S = d[f(432)] - g[f(447)]);
    const C = 1, h = x < C || x > v[f(461)] - C, E = S < C || S > v[f(417)] - C;
    (h || E) && (x = Math[f(412)](1, x), S = Math[f(412)](1, S), p = Et[f(410)]), n(cS, { action: f(428), keyAction: p, x, y: S, width: g[f(461)], height: g[f(417)], ts: Date[f(473)]() }), v[f(381)]();
  }, c = (d) => {
    const f = En;
    if (f(363) === f(363)) {
      if (d[f(397) + f(421)](), !o[f(390)]) return;
      const v = o[f(390)], g = Math[f(374)](d[f(396)]), p = v[f(388) + f(401) + "t"]();
      n(lS, { action: f(467), width: v[f(365) + "h"], height: v[f(459) + "ht"], x: d[f(435)] - p[f(405)], y: d[f(432)] - p[f(447)], delta: g, ts: Date[f(473)]() }), v[f(381)]();
    } else [f(463), f(380), f(410)][f(460)]((v) => {
      const g = f;
      _0x53bfdc[g(457) + g(376)](v, _0x5a4873);
    }), _0x5bb037[f(457) + f(376)](f(464), _0x2bc13b);
  }, l = async (d) => {
    const f = En;
    if (f(402) === f(402)) {
      if (d[f(397) + f(421)](), !o[f(390)]) {
        if (f(449) === f(449)) return;
        _0x385e1c(!1);
      }
      const v = o[f(390)], g = aS[d[f(442)]], p = d[f(406)][f(472) + "e"]();
      if (((h) => {
        const E = f;
        if (E(385) !== E(385)) _0x32fcc8(_0x218ae1, {});
        else
          return [E(404), E(377), E(433)][E(379)](h);
      })(p) == !0) return;
      const S = async () => {
        const h = f, E = {};
        E[h(392)] = h(424), E[h(411)] = g, E[h(408)] = h(382) + h(455), E[h(406)] = d[h(406)], E[h(434)] = 0, E[h(393)] = 0;
        const y = E;
        if (d[h(471)] == !0)
          h(474) !== h(474) ? _0x4bf4ba[h(369) + h(414)](_0x7baa27, _0x58e0f5) : p == "c" ? h(425) === h(394) ? (_0x3f27ea[h(408)] = h(400) + h(415), _0x476a57[h(406)] = 61) : y[h(408)] = h(466) : p == "a" ? (y[h(408)] = h(400) + h(415), y[h(393)] = 4096, y[h(406)] = 29) : p == "v" && (h(444) !== h(444) ? _0x8bbeba[h(457) + h(376)](_0x4bcaa8, _0x4bbf82) : (y[h(408)] = h(419), y[h(406)] = await navigator[h(398)][h(371)]()));
        else if (p == h(469)) h(452) === h(399) ? (_0x405340[h(408)] = h(400) + h(415), _0xe1f689[h(406)] = 22) : (y[h(408)] = h(400) + h(415), y[h(406)] = 19);
        else if (p == h(441)) h(468) !== h(372) ? (y[h(408)] = h(400) + h(415), y[h(406)] = 20) : (_0x5e0c8c[h(369) + h(414)](h(364), _0x35f50c, _0x1595d3), _0x1a9fe5[h(369) + h(414)](h(439), _0x62a007, _0x37d366), _0x1153ef[h(369) + h(414)](h(373), _0x9866));
        else if (p == h(403)) h(386) !== h(386) ? _0x127563(!0) : (y[h(408)] = h(400) + h(415), y[h(406)] = 21);
        else if (p == h(368)) y[h(408)] = h(400) + h(415), y[h(406)] = 22;
        else if (p == h(422)) h(387) === h(462) ? (_0x5dc087[h(369) + h(414)](h(464), _0x2dd52d), [h(463), h(380), h(410)][h(460)]((A) => {
          const _ = h;
          _0x183bca[_(369) + _(414)](A, _0x2ed2da);
        })) : (y[h(408)] = h(400) + h(415), y[h(406)] = 67);
        else if (p == h(429)) h(378) === h(378) ? (y[h(408)] = h(400) + h(415), y[h(406)] = 66) : (_0x515e2e = _0x154bea[h(435)] - _0x145fa9[h(405)], _0x3c5047 = _0x329378[h(432)] - _0x4c4ffb[h(447)]);
        else if (p == h(389)) {
          if (h(446) === h(450)) return;
          y[h(408)] = h(400) + h(415), y[h(406)] = 61;
        }
        return y[h(442)] == h(382) + h(455) && d[h(383)] == !0 && (h(438) !== h(458) ? y[h(406)] = y[h(406)][h(427) + "e"]() : (_0x51a0d2 = _0xc9e8e6[h(412)](1, _0x5005e4), _0xcec2c1 = _0x368fb7[h(412)](1, _0x139531), _0x19c55d = _0x527de4[h(410)])), y;
      }, C = await S();
      C && n(uS, C), v[f(381)]();
    } else _0x415ea2[f(408)] = f(400) + f(415), _0x42a6bb[f(406)] = 19;
  };
  Xe(() => {
    const d = En, f = o[d(390)];
    if (f)
      if (d(423) === d(423)) {
        const v = {};
        v[d(391)] = !1;
        const g = v;
        return e ? (f[d(369) + d(414)](d(364), a, g), f[d(369) + d(414)](d(439), a, g), f[d(369) + d(414)](d(373), a)) : (f[d(369) + d(414)](d(464), l), [d(463), d(380), d(410)][d(460)]((p) => {
          const x = d;
          if (x(445) !== x(420)) f[x(369) + x(414)](p, a);
          else return;
        })), () => {
          const p = d;
          p(440) !== p(430) ? f && (e ? [p(364), p(439), p(373)][p(460)]((x) => {
            const S = p;
            f[S(457) + S(376)](x, a);
          }) : ([p(463), p(380), p(410)][p(460)]((x) => {
            const S = p;
            S(453) !== S(416) && f[S(457) + S(376)](x, a);
          }), f[p(457) + p(376)](p(464), l))) : (_0x37e03c[p(408)] = p(400) + p(415), _0x1e7919[p(406)] = 20);
        };
      } else {
        if (_0x7baf40[d(397) + d(421)](), !_0x33d942[d(390)]) return;
        const v = _0x4b0829[d(390)], g = _0x37caf7[d(374)](_0x417292[d(396)]), p = v[d(388) + d(401) + "t"]();
        _0x3b736a(_0x59bda8, { action: d(467), width: v[d(365) + "h"], height: v[d(459) + "ht"], x: _0x1f2262[d(435)] - p[d(405)], y: _0x508992[d(432)] - p[d(447)], delta: g, ts: _0x1f437e[d(473)]() }), v[d(381)]();
      }
  }, [e, a, c, l, o]);
  const u = { ref: o, ...r };
  return te.jsx(xp, u);
}, hS = "data:image/png;base64,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";
function ii(e, t) {
  const n = si();
  return ii = function(r, o) {
    return r = r - 384, n[r];
  }, ii(e, t);
}
function si() {
  const e = ["95313afYrww", "14395vrWAEJ", "div", "622792dImQnc", "6NcAOFk", "565033DAJadN", "356vDahyi", "594990iSHKMa", "214390rGAEkc", "img", "7660KhABMz"];
  return si = function() {
    return e;
  }, si();
}
const Ui = ii;
(function(e, t) {
  const n = ii, r = e();
  for (; ; )
    try {
      if (-parseInt(n(386)) / 1 + -parseInt(n(388)) / 2 + parseInt(n(389)) / 3 + parseInt(n(384)) / 4 * (parseInt(n(390)) / 5) + -parseInt(n(393)) / 6 * (-parseInt(n(394)) / 7) + parseInt(n(392)) / 8 + -parseInt(n(385)) / 9 === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(si, 162240);
const pS = jt[Ui(391)]`
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
`, qt = jt[Ui(391)]`
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
`, xS = jt[Ui(387)]`
  position: absolute;
  backdrop-filter: blur(46px);
  border-radius: 50%;
  z-index: 999;
`, gS = jt[Ui(391)]`
  user-select: none;
  transition: opacity 0.6s ease;
  z-index: 3;
  opacity: 0.3;
`;
(function(e, t) {
  const n = tr, r = e();
  for (; ; )
    try {
      if (-parseInt(n(227)) / 1 * (-parseInt(n(212)) / 2) + parseInt(n(243)) / 3 * (parseInt(n(215)) / 4) + -parseInt(n(236)) / 5 + -parseInt(n(242)) / 6 * (-parseInt(n(229)) / 7) + -parseInt(n(223)) / 8 * (-parseInt(n(245)) / 9) + parseInt(n(210)) / 10 * (parseInt(n(235)) / 11) + parseInt(n(228)) / 12 * (-parseInt(n(222)) / 13) === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ai, 664130);
function tr(e, t) {
  const n = ai();
  return tr = function(r, o) {
    return r = r - 202, n[r];
  }, tr(e, t);
}
const vu = () => {
  const e = tr;
  return document[e(220) + e(216)] || document[e(221) + e(206)] || document[e(233) + e(202) + e(231)] || document[e(219) + e(237)];
}, mS = (e) => {
  const t = tr, n = document[t(207) + t(211)](t(238) + e);
  n[t(218) + t(226)] ? n[t(218) + t(226)]() : n[t(203) + t(225)] ? n[t(203) + t(225)]() : n[t(232) + t(239) + t(241)] ? t(204) === t(204) ? n[t(232) + t(239) + t(241)]() : _0x2e475e[t(213) + t(224)]() : n[t(234) + t(230)] && n[t(234) + t(230)]();
};
function ai() {
  const e = ["LSmjH", "webkitExit", "eenElement", "querySelec", "ullScreen", "msExitFull", "10rZyRAI", "tor", "292SOlYcS", "exitFullsc", "Fullscreen", "136012TclGgo", "Element", "WEePY", "requestFul", "msFullscre", "fullscreen", "mozFullScr", "35341982LXFJQf", "488UDcbJA", "reen", "FullScreen", "lscreen", "5340lIUMRu", "12oJcXsl", "7721287jvKfYP", "ullscreen", "ent", "webkitRequ", "webkitFull", "msRequestF", "12317239KxQhlB", "4460880xeLrev", "enElement", "#screen_", "estFullscr", "screen", "een", "6yFOEjB", "102MQuzvE", "mozCancelF", "17172BDSivy", "screenElem", "mozRequest"];
  return ai = function() {
    return e;
  }, ai();
}
const vS = () => {
  const e = tr;
  document[e(213) + e(224)] ? document[e(213) + e(224)]() : document[e(244) + e(208)] ? e(217) !== e(217) ? _0x3c9d40[e(203) + e(225)]() : document[e(244) + e(208)]() : document[e(205) + e(214)] ? document[e(205) + e(214)]() : document[e(209) + e(240)] && document[e(209) + e(240)]();
};
function $r(e, t) {
  const n = ci();
  return $r = function(r, o) {
    return r = r - 446, n[r];
  }, $r(e, t);
}
(function(e, t) {
  const n = $r, r = e();
  for (; ; )
    try {
      if (-parseInt(n(511)) / 1 + parseInt(n(620)) / 2 * (parseInt(n(484)) / 3) + -parseInt(n(521)) / 4 + parseInt(n(595)) / 5 * (-parseInt(n(714)) / 6) + -parseInt(n(657)) / 7 * (-parseInt(n(745)) / 8) + parseInt(n(610)) / 9 * (parseInt(n(600)) / 10) + -parseInt(n(568)) / 11 * (-parseInt(n(570)) / 12) === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ci, 756405);
function ci() {
  const e = ["0a.999.999", "0V4a1 1 0 ", " 0 0 0-.57", "clientY", " 0 0 0-.38", "v5h-5v2h7z", "forEach", " 2v10c0 1.", "8.347l-3.0", ".116c.026-", "3 9a1.003 ", "017.082-.0", "zM4 20V10h", "Show ID", ".614 16 19", " 0-2 .897-", "m4.431 12.", " 3.999 4.0", " 2-2v-7c0-", "rgba(255, ", "h4zm12-6h-", "grab", "75.931l2 1", " 15H4V9z", "v2h8V5h3v6", "closest", "6v2H4z", "-1.103-.89", "59 15.016 ", "231ULGnOe", "6a1 1 0 0 ", "208080ZpCxCA", "h-2v6h6z", "msfullscre", "7.032 15 7", "0 0 24 24", "M20 2H10c-", "passive", "s-.775-3.9", "enchange", "pageX", "h-5c-1.103", "addEventLi", ".387 1.386", "copy", "0 0 1.645z", "-2-5zM4 17", "2 2h10c1.1", "MExbE", "path", "l10.283 7.", "H4zm16-6h-", ".103.897 2", "height", "M16 21c3.5", "03 0 2-.89", "773635FWsprf", "M10 4H8v4H", "M20 3H4a1 ", "4.445-2.96", "Sync", "10GaAVDf", "left", "c1.103 0 2", "V5h14v14z", "Paste", "mouseup", "M16 7v10c1", "M20 11V5c0", "0 0 0 .38-", "uPohS", "2775753WWtdOw", "0 1.767.51", "11.75", "zMRPq", "mousedown", "27-1.547 5", "VYTZI", "shortcutCo", ".897-2-2-2", "Copy", "62PoOtUd", "2-2h-4V4h1", "1zm-1 16H5", "http://www", "2H4zm0 5h1", "M6 12h6v2H", "08 3.677L7", ".004 1.004", " 0 0 0 1.0", "getAttribu", "4c-.025-.0", "2 2zm2 7v-", "change", ".999-4.909", "Screen", "8v12.264l-", "H13z", "mozfullscr", "action", "XwxJd", "clipboard", "svg", "1.048z", "0v10z", "1.103 0-2 ", "17-.056-.0", "move", "BowqL", "4c0-1.103-", "48 3.832a1", "click", "-3.229 2-5", ".024l-14-1", "12%", "ent", "fZmYS", "M20.978 13", "245cRMRez", "6zm0 4h6v2", "assistive", "herNg", "a.995.995 ", "0 0 0 14 2", "tListener", "6v6h2v-4h4", "061-.016.0", "9.527 4.54", "v7h2zm5 14", "255, 255, ", "57-5.428 6", "zIndex", "m-2-4h2V3h", "MKIqD", "gClientRec", "touch_", "4v2h6zM8 2", "2 2h7c0 1.", "IhzQn", "M5 5h5V3H3", "readText", "0 18V4h10l", " 2v13c0 1.", "0 0-.396-1", "-7v2h5z", "5px", ".015.057-.", "mouse", " 7H4c-1.10", "touchstart", "4v-4c0-1.1", "00/svg", "shortcut", "M16.75 2h-", "v2z", "7a1 1 0 0 ", "822 13 9A1", "S18.387 17", "Recents", "2-.082-.03", "touch", "-2-2-2zm-1", "tdUqd", "3 0-2 .897", "Back", "preventDef", "0 1-1V4a1 ", " 0 0 0-1.5", "2-.116C7.0", "3c.033 0 .", " 1 0 0 0 1", "4zm0 5h16v", "47 3.999 7", "shortcutEv", "cursor", "6UulCGg", "showMenu", "fill", " 2v16c0 1.", "103.897 2 ", "H5v-5H3v7h", "screenchan", "current", "menu_", "webkitfull", "focus", " 5.999-9S1", "Home", ".002 16H6.", "6l3.612-4.", "7 2-2v-4h4", ".21a1 1 0 ", "-2-2-2zm-9", "back", "type", "recents", "data-id", "3a.986.986", "assistive_", "Icon", "a1 1 0 0 0", ".897-2 2v4", "zm0-6h-4V4", "027 1.027 ", "345-5.236 ", ".225-1.1 2", "210232WmzBfq", "674.31a1 1", "1 0 0 0-1 ", "removeEven", "jFjDX", "1 0 0 0-1-", "includes", "7h7l.001 7", "1.103-.897", "-1.052-3.3", "0-2 .897-2", "0 0 0 .782", "1v16a1 1 0", "h2.697l5.7", "Volume", "home", "416 3.377 ", "3 0 2-.897", "style", "-1-1H8a1 1", "wtabu", "stener", "69-.823l-1", "7 2-2V4c0-", "-.769zm-8.", "fullscreen", "paste", "33L12 5.86", " 0 0 0-1 1", "7-2-2-2h-3", "H4c-1.103 ", "clientX", "div", "0 0-1.554-", "children", "03-.897-2-", ".089-1.218", "touchmove", ".257 5.127", "HDmoK", "9573nxgsQH", "ZLibu", "Hide ID", "getBoundin", "volume", "sync", "0h2v-6H4v2", ".w3.org/20", "QxvUJ", "9 21V3a1 1", "ault", "5.46 1.701", "pageY", "1.003 0 0 ", "landscape", "10l.002 10", "2 2h7c1.10", "right", ".832L6.697", "CIysS", "touchend", "75z", "touch_clas", "top", "now", "circle", "mousemove", "245909NwTQbz", "-2 2v6c0 1", "width", "data", "isDown", "mkpWU", "M4 6h16v2H", "opacity", "Meutk", " 0 0 1 1h1", "2136808WqdtRx", "7zm11-5h-2", "20px", "get", "93-.019a1.", "eenchange", " 2 2zm0-8h", "set", "10c-1.103 ", "ZInLz", "target", "H6z", "7 16 3v2c2", "-.897 2-2V", "taskId", " 2v5H4V5h3", "27.05A1 1 ", "device_id"];
  return ci = function() {
    return e;
  }, ci();
}
const yS = rr((e, t) => {
  const n = $r, { displayId: r, isMobile: o, onSenData: i, status: s, canvasRef: a, isShowDeviceId: c } = e, l = {};
  l.x = 0, l.y = 0;
  const u = Oe(l), d = {};
  d.x = 0, d.y = 0;
  const f = Oe(d), [v, g] = ut(null), [p, x] = ut(0), S = Oe(null), C = Oe(null), h = Oe(null), E = {};
  E[n(713)] = n(646), E[n(518)] = 0.3, E[n(670)] = 999;
  const [y, A] = ut(E), _ = {};
  _[n(670)] = 1e3;
  const [j, D] = ut(_), G = Oe(null), [oe, ne] = ut(null), z = (B) => {
    const b = n;
    if (B[b(704) + b(494)](), s[b(524)][b(715)] == !0) {
      if (b(464) === b(464)) return;
      _0x31e18b[b(581) + b(465)](_0x3d698f, _0x320663);
    }
    const ve = Et[B[b(733)]], ye = a[b(721)], _e = h[b(721)], ce = ye[b(487) + b(673) + "t"](), He = _e[b(487) + b(673) + "t"](), be = 5;
    let Se, Be;
    const vt = ce[b(513)] - He[b(513)], gn = ce[b(592)] - He[b(592)];
    if (B[b(733)][b(450)](b(699))) {
      const { touches: et, changedTouches: Fe } = B, dt = et[0] ?? Fe[0];
      Se = dt[b(579)], Be = dt[b(496)];
    } else B[b(733)][b(450)](b(686)) && (b(639) !== b(516) ? (Se = B[b(475)], Be = B[b(542)]) : [b(510), b(614), b(605)][b(545)]((et) => {
      const Fe = b;
      _0x1bc1df[Fe(581) + Fe(465)](et, _0x4efadc);
    }));
    if (ve == Et[b(614)]) {
      s[b(528)]({ ...s[b(524)], isDown: !0 }), u[b(721)].x = Se - He[b(601)], u[b(721)].y = Be - He[b(507)];
      const et = {};
      et[b(518)] = 1, et[b(713)] = b(560);
      const Fe = { ...y, ...et };
      A(Fe), x(performance[b(508)]());
    } else if (ve == Et[b(510)]) {
      if (s[b(524)][b(515)] == !1) return;
      let et = Se - u[b(721)].x - ce[b(601)], Fe = Be - u[b(721)].y - ce[b(507)];
      const dt = vt - be;
      if (et < be || et > dt || Fe < be || Fe > gn - be) {
        const Mt = f[b(721)].x > vt / 2 ? vt - be : be;
        _e[b(462)][b(601)] = Mt + "px";
        const tn = {};
        tn[b(518)] = 0.3, tn[b(713)] = b(646);
        const Wt = { ...y, ...tn };
        A(Wt), g(Et[b(605)]), s[b(528)]({ ...s[b(524)], isDown: !1 });
      } else _e[b(462)][b(601)] = et + "px", _e[b(462)][b(507)] = Fe + "px", f[b(721)].x = et, f[b(721)].y = Fe;
    } else if (ve == Et[b(605)])
      if (b(492) === b(492)) {
        const et = performance[b(508)]() - p;
        if (v == Et[b(614)] || et < 200) {
          const Mt = {};
          Mt[b(715)] = !0, Mt[b(515)] = !1, s[b(528)]({ ...s[b(524)], ...Mt });
        } else s[b(528)]({ ...s[b(524)], isDown: !1 });
        const Fe = f[b(721)].x > vt / 2 ? vt - be : be;
        _e[b(462)][b(601)] = Fe + "px";
        const dt = {};
        dt[b(518)] = 0.3, dt[b(713)] = b(646);
        const en = { ...y, ...dt };
        A(en);
      } else _0x3b96c1[b(447) + b(663)](_0x220b7c, _0x2951f0);
    g(ve), _e[b(724)]();
  }, X = async (B) => {
    const b = n;
    if (b(701) === b(701)) {
      B[b(704) + b(494)]();
      const ve = B[b(531)][b(564)](b(476))[b(629) + "te"](b(735));
      if (ve === b(469))
        if (b(503) === b(503))
          if (!vu()) mS(r);
          else if (b(655) !== b(655)) {
            const _e = {};
            _e[b(715)] = !0, _e[b(515)] = !1;
            const ce = { ..._0x39cb7c[b(524)], ..._e };
            _0x526de5[b(528)](ce);
          } else vS();
        else _0x5ab93a[b(462)][b(601)] = _0x3a0f91 + "px", _0x55b902[b(462)][b(507)] = _0x51c466 + "px", _0x30fc1a[b(721)].x = _0x26d8f5, _0x501110[b(721)].y = _0x284e44;
      else {
        const ye = {};
        ye[b(638)] = b(712) + b(654), ye[b(691)] = ve, ye[b(514)] = "";
        const _e = ye;
        ve === b(470) && (b(616) !== b(616) ? _0x3b8cf0(() => {
          const ce = b, He = { ..._0x1f6d5c };
          He[ce(518)] = _0x387a66[ce(524)][ce(715)] ? 1 : 0, _0x38d03d(He);
        }) : _e[b(514)] = await navigator[b(640)][b(679)]()), ve === b(583) && (_e[b(535)] = b(617) + "py"), i(Da, _e);
      }
      s[b(528)]({ ...s[b(524)], showMenu: !1 }), C[b(721)][b(724)]();
    } else {
      const ve = { ..._0xa08960[b(524)] };
      ve[b(515)] = !0, _0x2594fa[b(528)](ve), _0xac703a[b(721)].x = _0x3c0209 - _0x341dda[b(601)], _0x4ac080[b(721)].y = _0x532000 - _0x19fbf5[b(507)];
      const ye = {};
      ye[b(518)] = 1, ye[b(713)] = b(560);
      const _e = { ..._0xc49de2, ...ye };
      _0x13c88c(_e), _0x34ccbb(_0x4a2aab[b(508)]());
    }
  }, Z = (B) => {
    const b = n;
    if (b(647) === b(647)) {
      const ve = vu();
      i(fS, ve);
    } else _0x3e8366(_0x2ac463);
  };
  Xe(() => {
    requestAnimationFrame(() => {
      const B = $r, b = { ...j };
      b[B(518)] = s[B(524)][B(715)] ? 1 : 0, D(b);
    });
  }, [s]), Xe(() => {
    const B = n;
    if (B(530) !== B(485)) {
      const b = a[B(721)], ve = [B(469) + B(632), B(723) + B(720) + "ge", B(637) + B(526), B(572) + B(578)];
      return b && ve[B(545)]((ye) => {
        const _e = B;
        b[_e(581) + _e(465)](ye, Z);
      }), () => {
        const ye = B;
        b && b[ye(447) + ye(663)](ye(650), Z);
      };
    } else _0x30f8c4();
  }, []), Xe(() => {
    const B = n, b = h[B(721)], ve = C[B(721)];
    if (ve && ve[B(581) + B(465)](B(650), X), b) {
      if (B(519) === B(660)) return;
      {
        const ye = {};
        ye[B(576)] = !1;
        const _e = ye;
        return o ? B(672) === B(672) ? (b[B(581) + B(465)](B(688), z, _e), b[B(581) + B(465)](B(481), z, _e), b[B(581) + B(465)](B(504), z)) : _0x1d5dd6[B(721)] = _0x29937f : [B(510), B(614), B(605)][B(545)]((ce) => {
          const He = B;
          b[He(581) + He(465)](ce, z);
        }), () => {
          const ce = B;
          ce(677) !== ce(483) ? (ve && ve[ce(447) + ce(663)](ce(650), X), b && (o ? ce(609) === ce(609) ? [ce(688), ce(481), ce(504)][ce(545)]((He) => {
            const be = ce;
            b[be(447) + be(663)](He, z);
          }) : _0x2cb57a[ce(581) + ce(465)](ce(650), _0xc864ac) : [ce(510), ce(614), ce(605)][ce(545)]((He) => {
            const be = ce;
            be(613) === be(613) ? b[be(447) + be(663)](He, z) : [be(688), be(481), be(504)][be(545)]((Se) => {
              const Be = be;
              _0x47c0b9[Be(447) + Be(663)](Se, _0x1be857);
            });
          }))) : _0x4b1f6c[ce(447) + ce(663)](ce(650), _0x341271);
        };
      }
    }
  }, [o, z]);
  const I = () => {
    const B = n;
    if (B(587) !== B(587)) {
      const b = { ..._0xfd238e[B(524)] };
      b[B(515)] = !1, _0xfe67e3[B(528)](b);
    } else {
      const b = h[B(721)];
      b[B(462)][B(513)] = G[B(721)] != B(498) ? B(653) : "", b[B(462)][B(592)] = G[B(721)] == B(498) ? B(653) : "", b[B(462)][B(501)] = B(684), b[B(462)][B(507)] = B(523), b[B(462)][B(601)] = "";
    }
  };
  Tu(t, () => ({ fixTouch: (B) => {
    const b = n;
    B && (G[b(721)] = B), I();
  }, setFullscreen: (B) => {
    const b = n;
    if (b(448) !== b(448)) {
      if (_0x435b0f[b(524)][b(515)] == !1) return;
      let ve = _0xd45038 - _0x3317bc[b(721)].x - _0x2a4be8[b(601)], ye = _0x53f7d4 - _0x2d4a7a[b(721)].y - _0x4fbfaf[b(507)];
      const _e = _0x28b25d - _0x2c10b7;
      if (ve < _0x276900 || ve > _e || ye < _0x577ccb || ye > _0x41f901 - _0x2dc506) {
        const He = _0x17db64[b(721)].x > _0x21c8a4 / 2 ? _0x2b5764 - _0x167128 : _0x4b607d;
        _0x3d7ad1[b(462)][b(601)] = He + "px";
        const be = {};
        be[b(518)] = 0.3, be[b(713)] = b(646);
        const Se = { ..._0x58f2da, ...be };
        _0x32759b(Se), _0x565993(_0x1f350e[b(605)]);
        const Be = { ..._0x1bed63[b(524)] };
        Be[b(515)] = !1, _0x211868[b(528)](Be);
      } else _0x5d7adc[b(462)][b(601)] = ve + "px", _0xb9825c[b(462)][b(507)] = ye + "px", _0x917f95[b(721)].x = ve, _0x49fe95[b(721)].y = ye;
    } else ne(B);
  } }));
  const T = {};
  T[n(716)] = n(558) + n(668) + "1)";
  const R = {};
  R.d = oe ? n(596) + n(675) + n(490) + n(559) + n(664) + n(741) + n(571) : n(678) + n(667) + n(719) + n(522) + n(544) + n(671) + n(683);
  const N = {};
  N[n(478)] = n(634);
  const $ = {};
  $[n(716)] = n(558) + n(668) + "1)";
  const F = {};
  F.d = n(575) + n(644) + n(740) + n(474) + n(454) + n(546) + n(718) + n(586) + n(594) + n(729) + n(602) + n(534) + n(648) + n(618) + n(551) + n(499) + n(590) + n(689) + n(479) + n(621) + n(643);
  const Y = {};
  Y.d = n(625) + n(658) + n(532);
  const re = {};
  re[n(478)] = n(619);
  const J = {};
  J[n(716)] = n(558) + n(668) + "1)";
  const ae = {};
  ae.d = n(607) + n(566) + n(473) + n(739) + n(463) + n(472) + n(474) + n(454) + n(681) + n(718) + n(676) + n(718) + n(500) + n(461) + n(557) + n(452) + n(731) + n(536) + n(563) + n(580) + n(554) + n(631) + n(451) + n(636);
  const le = {};
  le[n(478)] = n(604);
  const ue = {};
  ue[n(716)] = n(558) + n(668) + "1)";
  const Ae = {};
  Ae.d = n(692) + n(529) + n(454) + n(717) + n(718) + n(586) + n(594) + n(467) + n(452) + n(700) + n(680) + n(727) + n(505);
  const ge = {};
  ge.cx = n(612), ge.cy = "18", ge.r = "1";
  const Le = {};
  Le[n(478)] = n(c ? 486 : 552);
  const ke = {};
  ke[n(716)] = n(558) + n(668) + "1)";
  const pe = {};
  pe.d = n(593) + n(615) + n(633) + n(725) + n(666) + n(533) + n(582) + n(556) + n(711) + n(696) + n(553) + n(693);
  const k = {};
  k.d = n(606) + n(744) + n(651) + n(577) + n(585) + n(457) + n(649) + n(627) + n(628) + n(537) + n(662) + n(540) + n(477) + n(502) + n(687) + n(702) + n(512) + n(591) + n(527) + n(708) + n(665) + n(525) + n(742) + n(608) + n(548) + n(685) + n(550) + n(471) + n(635) + n(598) + n(630) + n(645) + n(698) + n(736) + n(543) + n(707) + n(567) + n(573) + n(562);
  const L = {};
  L[n(478)] = n(458);
  const H = {};
  H[n(716)] = n(558) + n(668) + "1)";
  const V = {};
  V.d = n(656) + n(730) + n(682) + n(652) + n(539) + n(706) + n(561) + n(694) + n(611) + n(728) + n(460) + n(495) + n(453) + n(669) + n(480) + n(661) + n(455) + n(468) + n(746) + n(541) + n(547) + n(626) + n(482) + n(589) + n(743) + n(642);
  const O = {};
  O[n(478)] = n(599);
  const ee = {};
  ee[n(716)] = n(558) + n(668) + "1)";
  const Q = {};
  Q.d = n(517) + n(710) + n(624) + n(565);
  const Me = {};
  Me[n(478)] = n(697);
  const ze = {};
  ze[n(716)] = n(558) + n(668) + "1)";
  const Ne = {};
  Ne.d = n(597) + n(446) + n(456) + n(520) + n(569) + n(705) + n(449) + n(622) + n(603);
  const Qe = {};
  Qe[n(478)] = n(726);
  const ft = {};
  ft[n(716)] = n(558) + n(668) + "1)";
  const lt = {};
  lt.d = n(555) + n(695) + n(709) + n(493) + n(706) + n(466) + n(549) + n(497) + n(584);
  const Vt = {};
  return Vt[n(478)] = n(703), te.jsxs(te.Fragment, { children: [s[n(524)][n(715)] ? te.jsxs(pS, { id: n(737) + n(722) + r, style: j, ref: C, children: [te.jsxs(qt, { "data-id": n(469), children: [te.jsx(n(641), { xmlns: n(623) + n(491) + n(690), width: "28", height: "28", viewBox: n(574), style: T, children: te.jsx(n(588), R) }), te.jsx(Ut, N)] }), te.jsxs(qt, { "data-id": n(583), children: [te.jsxs(n(641), { xmlns: n(623) + n(491) + n(690), width: "28", height: "28", viewBox: n(574), style: $, children: [te.jsx(n(588), F), te.jsx(n(588), Y)] }), te.jsx(Ut, re)] }), te.jsxs(qt, { "data-id": n(470), children: [te.jsx(n(641), { xmlns: n(623) + n(491) + n(690), width: "28", height: "28", viewBox: n(574), style: J, children: te.jsx(n(588), ae) }), te.jsx(Ut, le)] }), te.jsxs(qt, { "data-id": n(538), children: [te.jsxs(n(641), { xmlns: n(623) + n(491) + n(690), width: "28", height: "28", viewBox: n(574), style: ue, children: [te.jsx(n(588), Ae), te.jsx(n(509), ge)] }), te.jsx(Ut, Le)] }), te.jsxs(qt, { "data-id": n(488), children: [te.jsxs(n(641), { xmlns: n(623) + n(491) + n(690), width: "25", height: "25", viewBox: n(574), style: ke, children: [te.jsx(n(588), pe), te.jsx(n(588), k)] }), te.jsx(Ut, L)] }), te.jsxs(qt, { "data-id": n(489), children: [te.jsx(n(641), { xmlns: n(623) + n(491) + n(690), width: "28", height: "28", viewBox: n(574), style: H, children: te.jsx(n(588), V) }), te.jsx(Ut, O)] }), te.jsxs(qt, { "data-id": n(734), children: [te.jsx(n(641), { xmlns: n(623) + n(491) + n(690), width: "28", height: "28", viewBox: n(574), style: ee, children: te.jsx(n(588), Q) }), te.jsx(Ut, Me)] }), te.jsxs(qt, { "data-id": n(459), children: [te.jsx(n(641), { xmlns: n(623) + n(491) + n(690), width: "28", height: "28", viewBox: n(574), style: ze, children: te.jsx(n(588), Ne) }), te.jsx(Ut, Qe)] }), te.jsxs(qt, { "data-id": n(732), children: [te.jsx(n(641), { xmlns: n(623) + n(491) + n(690), width: "28", height: "28", viewBox: n(574), style: ft, children: te.jsx(n(588), lt) }), te.jsx(Ut, Vt)] })] }) : null, te.jsx(gS, { id: n(737) + n(506) + "s_" + r, className: n(659), ref: S, style: y, children: te.jsx(xS, { src: hS, className: n(659), id: n(737) + n(674) + r, alt: n(738), ref: h, draggable: !1 }) })] });
}), Ye = nr;
function li() {
  const e = ["222481chEhDD", "614550KoMaTC", "length", "clearRect", "codedHeigh", "NXHNv", "now", "concat", "isPlay", "autoResize", "setVideoMe", "iframe", "xGkAe", "configure", "landscape", "maxWidth", "een", "rLatency", "buildDecod", "close", "984234XzEnvD", "Decoder er", "setIsConne", "scale", "key", "setFullscr", "lock", "decode", "IyBkO", "delta", "8Arrays", "width", "MuWRD", "isKeyFrame", "59cfYYrI", "round", "mvxGm", "BsLqN", "ror:", "error", "IvYhg", "hardwareAc", "getContext", "concatUint", "ZoyCM", "portrait", "rootSize", "ctx", "tion", "10ncLGjd", "from", "celeration", "codedWidth", "hkyiA", "orientatio", "setOrienta", "videoMeta", "optimizeFo", "canvas", "OVkIg", "60fqcFfz", "height", "rotate", "drawImage", "state", "isMobile", "919629fLQgMt", "158VNCVGa", "codec", "innerHeigh", "5360400AJgwvb", "232084Jyachq", "decoder", "resizedWid", "translate"];
  return li = function() {
    return e;
  }, li();
}
(function(e, t) {
  const n = nr, r = e();
  for (; ; )
    try {
      if (-parseInt(n(288)) / 1 * (-parseInt(n(321)) / 2) + parseInt(n(255)) / 3 + parseInt(n(325)) / 4 * (-parseInt(n(303)) / 5) + parseInt(n(274)) / 6 + parseInt(n(329)) / 7 + parseInt(n(324)) / 8 + -parseInt(n(320)) / 9 * (parseInt(n(314)) / 10) === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(li, 346255);
var yu, bu, Su, Cu, wu, Eu, _u, Ou, Au;
Au = Ye(279) + Ye(270), Ou = Ye(327) + "th", _u = Ye(309) + Ye(302), Eu = Ye(263), wu = Ye(264) + "ta", Cu = Ye(272) + "er", Su = Ye(287), bu = Ye(297) + Ye(284), yu = Ye(281);
class bS {
  constructor(t, n, r, o, i, s) {
    Ue(this, Au, (t) => {
      const n = Ye;
      if (t) {
        const r = window[n(323) + "t"] + 10, o = this[n(327) + "th"](null, this[n(300)][n(285)], this[n(300)][n(315)], r, r);
        this[n(285)] = o[n(285)], this[n(315)] = o[n(315)];
      } else this[n(285)] = this[n(300)][n(285)], this[n(315)] = this[n(300)][n(315)];
    });
    Ue(this, Ou, (t, n, r, o, i) => {
      const s = Ye;
      let a;
      return t && o > this[s(269)] && r > n && (s(282) === s(282) ? i = this[s(269)] : (this[s(312)][s(285)] = this[s(315)], this[s(312)][s(315)] = this[s(285)], this[s(301)][s(328)](0, this[s(285)]), this[s(301)][s(316)](_0x469db3.PI / 2), this[s(301)][s(277)](-1, -1), this[s(301)][s(317)](_0x469e5a, 0, 0, this[s(285)], this[s(315)]))), i && (a = i / n * r, a > o && (s(286) === s(313) ? (_0x3bdc3a = _0xfef2a / _0xae552a * _0x311059, _0x5ab268 > _0x3815f1 && (_0x526897 = _0x2eaba6 / _0x28c12d * _0x911c6c, _0x3ec663 = _0x5521c0 / _0x3dfb51 * _0xbf4403)) : (i = o / r * n, a = o / n * n))), { width: Math[s(289)](i), height: Math[s(289)](a) };
    });
    Ue(this, _u, (t) => {
      const n = Ye;
      this[n(308) + "n"] = t, this[n(319)] && (n(291) === n(259) ? (this[n(308) + "n"] = _0x3cbe1a, this[n(319)] && _0x4710d6[n(308) + "n"][n(280)](_0x15e050)) : screen[n(308) + "n"][n(280)](t));
    });
    Ue(this, Eu, (t, n) => {
      var a;
      const r = Ye, o = this[r(319)] == !0 ? window[r(323) + "t"] - 12 : window[r(323) + "t"] - 50, i = this[r(327) + "th"](!0, t, n, o, o);
      this[r(285)] = i[r(285)], this[r(315)] = i[r(315)], !this[r(300)] && ((a = this[r(276) + "ct"]) == null || a.call(this, !0));
      const s = {};
      s[r(285)] = i[r(285)], s[r(315)] = i[r(315)], this[r(300)] = s;
    });
    Ue(this, wu, (t) => {
      const n = Ye, r = t instanceof Uint8Array ? t : new Uint8Array(t);
      this[n(310)] = r;
    });
    Ue(this, Cu, () => {
      const t = Ye, n = new VideoDecoder({ output: async (o) => {
        const i = nr, s = await createImageBitmap(o);
        (!this[i(285)] || !this[i(315)]) && this[i(263)](o[i(306)], o[i(258) + "t"]), this[i(301)][i(257)](0, 0, this[i(285)], this[i(315)]), this[i(308) + "n"] == i(268) ? (this[i(312)][i(285)] = this[i(315)], this[i(312)][i(315)] = this[i(285)], this[i(301)][i(328)](0, this[i(285)]), this[i(301)][i(316)](Math.PI / 2), this[i(301)][i(277)](-1, -1), this[i(301)][i(317)](s, 0, 0, this[i(285)], this[i(315)])) : (this[i(312)][i(285)] = this[i(285)], this[i(312)][i(315)] = this[i(315)], this[i(301)][i(317)](s, 0, 0, this[i(285)], this[i(315)])), s[i(273)](), o[i(273)]();
      }, error: (o) => console[t(293)](t(275) + t(292), o) }), r = {};
      return r[t(322)] = this[t(322)], r[t(295) + t(305)] = this[t(295) + t(305)], r[t(311) + t(271)] = !0, n[t(267)](r), n;
    });
    Ue(this, Su, (t) => {
      const n = Ye;
      for (let r = 0; r <= t[n(256)] - 4; r++)
        if (n(290) !== n(266)) {
          if (t[r] === 0 && t[r + 1] === 0 && t[r + 2] === 0 && t[r + 3] === 1) {
            if (n(298) === n(298))
              return (t[r + 4] & 31) === 5;
            if (_0x4201fa[_0x4de3fa] === 0 && _0x29f8dc[_0x58e328 + 1] === 0 && _0x3b3141[_0x40aa6e + 2] === 0 && _0x4dc438[_0x3cd883 + 3] === 1)
              return (_0x63638c[_0x21d8e9 + 4] & 31) === 5;
          }
        } else this[n(312)][n(285)] = this[n(285)], this[n(312)][n(315)] = this[n(315)], this[n(301)][n(317)](_0x4e4500, 0, 0, this[n(285)], this[n(315)]);
      for (let r = 0; r <= t[n(256)] - 3; r++)
        if (t[r] === 0 && t[r + 1] === 0 && t[r + 2] === 1)
          if (n(294) === n(307)) _0x366433 = this[n(297) + n(284)](this[n(310)], this[n(265)]), this[n(262)] = !0;
          else
            return (t[r + 3] & 31) === 5;
      return !1;
    });
    Ue(this, bu, (t, n) => {
      const r = Ye, o = Array[r(304)](t)[r(261)](Array[r(304)](n));
      return new Uint8Array(o);
    });
    Ue(this, yu, (t) => {
      const n = Ye;
      if (!this[n(326)] || this[n(326)][n(318)] == n(273) || !this[n(310)]) return;
      let r = t instanceof Uint8Array ? t : new Uint8Array(t);
      const o = this[n(287)](r);
      o && (this[n(265)] = r), this[n(265)] && this[n(310)] && (!this[n(262)] && (r = this[n(297) + n(284)](this[n(310)], this[n(265)]), this[n(262)] = !0), this[n(326)][n(281)](new EncodedVideoChunk({ timestamp: performance[n(260)]() * 1e3, type: n(o ? 278 : 283), data: r })));
    });
    const a = nr;
    this[a(312)] = t, this[a(269)] = n, this[a(319)] = r, this[a(276) + "ct"] = o, this[a(301)] = t[a(296)]("2d"), this[a(326)] = this[a(272) + "er"](), this[a(310)] = null, this[a(265)] = null, this[a(262)] = null, this[a(285)] = null, this[a(315)] = null, this[a(300)] = null, this[a(308) + "n"] = a(299), this[a(322)] = i, this[a(295) + a(305)] = s;
  }
}
function nr(e, t) {
  const n = li();
  return nr = function(r, o) {
    return r = r - 255, n[r];
  }, nr(e, t);
}
(function(e, t) {
  const n = an, r = e();
  for (; ; )
    try {
      if (-parseInt(n(385)) / 1 + -parseInt(n(348)) / 2 + -parseInt(n(265)) / 3 + -parseInt(n(339)) / 4 * (-parseInt(n(372)) / 5) + -parseInt(n(299)) / 6 * (parseInt(n(392)) / 7) + -parseInt(n(273)) / 8 * (parseInt(n(257)) / 9) + -parseInt(n(330)) / 10 * (-parseInt(n(377)) / 11) === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ui, 420560);
function an(e, t) {
  const n = ui();
  return an = function(r, o) {
    return r = r - 255, n[r];
  }, an(e, t);
}
function ui() {
  const e = ["msFullscre", "9BHyvPB", "screen_mai", "change", "removeEven", "shortcut", "iting for ", "taskId", "set", "738120hVgiZP", "draggable", "setOrienta", "showMenu", "iOgPH", "error", " closed co", "text", "4435208mspVnh", "device_id", "timeout", "code", "center", "ror", "tListener", "screen_", "headers", "Reconnect", "DzSbU", "addEventLi", "reconnecti", "large", "timeSync", "iframe", "size", "primary", "sCHCn", "screenElem", "IdWzx", "uZQvx", "meta", "nqoji", "tion", "false", "12510TcuRLe", "AbvEb", "pBhia", "ngpcx", "orientatio", "roDEy", "sync", "Lrvux", "stener", "fixTouch", "mozFullScr", "spin", "setVideoMe", "data", "clipboard", "value", "disconnect", "webkitFull", "onScreenEv", "jtpRo", "gsvQE", "WneOC", "middle", "applicatio", "get_video_", "SbiXI", "enElement", "length", "current", "RSkaj", "password", "10ZupXWr", "image_", "margin", "de: ", "info", "PTXZv", "connect_er", "jlYgy", "type", "1531268bHzaZH", "connect", "children", "get", "writeText", "method", "userAgent", "GCbvd", "connection", "1135090IzmWZi", "width", "map", "msg", "een", "message", "post", "action", "url", "lIlIO", "n/json", "join_room", "test", "eenElement", "isDown", "status", "decode", "type_clien", "video_meta", "imSHo", "fullscreen", "tabIndex", "pnTjQ", "shortcutEv", "5IXWIAg", "OOvVS", "COPY_TEXT", "height", "onSyncIFra", "23834239uVJVIo", "ent", "control", "passwd", "screen", "nZtoC", "Content-Ty", "bnDDC", "133435LgdhNo", "Element", "now", "GmSMi", "response", "isMobile", "delete", "2107osuobg", "setFullscr", "emit", "Timeout wa"];
  return ui = function() {
    return e;
  }, ui();
}
const WS = rr((e, t) => {
  const n = an, { serve: r, dataDevice: o, maxWidth: i, showAssistive: s, showDeviceId: a, syncEvent: c, syncButton: l, codec: u, hardwareAcceleration: d } = e, f = o[n(274)], v = /iPhone|iPad|iPod|Android/i[n(360)](navigator[n(345)]), g = n(379), p = Oe(null), x = Oe(null), S = Oe(null), [C, h] = ut(null), [E, y] = ut(null), A = {};
  A[n(268)] = !1, A[n(362)] = !1;
  const [_, j] = ut(A), [D, G] = ut(null), [oe, ne] = ut(null), z = n(331) + f, X = n(280) + f, Z = n(258) + "n_" + f, I = Oe(null), [T, R] = ut([]), N = Oe(null), $ = Oe(/* @__PURE__ */ new Map());
  Xe(() => {
    const k = n;
    k(304) !== k(304) ? (_0xf38935[k(327)][k(267) + k(297)](_0x138c40[k(314)]), _0x4be1c3[k(327)][k(308)](_0x2208d3[k(314)])) : y(a);
  }, [a]);
  const F = (k) => {
    R((L) => [...L, k]);
  }, Y = (k) => {
    const L = n;
    p[L(327)][L(394)](L(353), k), c == null || c(k);
  };
  Tu(t, () => ({ api: async function(k, L = 5e3) {
    return new Promise((H, V) => {
      const O = an;
      if (O(370) !== O(320)) {
        const ee = setTimeout(() => {
          const Q = O;
          if (Q(319) === Q(337)) {
            const Me = _0x378e64[Q(327)][Q(342)](_0x1b95e7[Q(263)]);
            Me && (Me(_0x2c87e1), _0x4d2d9b[Q(327)][Q(391)](_0x2f0b59[Q(263)]));
          } else {
            $[Q(327)][Q(391)](k[Q(263)]);
            const Me = {};
            Me[Q(355)] = k[Q(355)], Me[Q(263)] = k[Q(263)], Me[Q(363)] = !1, Me[Q(353)] = Q(255) + Q(262) + Q(389), V(Me);
          }
        }, L);
        $[O(327)][O(264)](k[O(263)], (Q) => {
          clearTimeout(ee), H(Q);
        }), p[O(327)][O(394)](O(353), k);
      } else {
        const ee = () => {
          const Q = O, Me = _0x4fd87c[Q(368) + Q(386)] || _0x5567b6[Q(316) + Q(292) + Q(378)] || _0x23adcf[Q(309) + Q(361)] || _0x324ec7[Q(256) + Q(325)];
          _0x140317[Q(327)][Q(393) + Q(352)](!!Me), _0x51e0c2[Q(327)][Q(393) + Q(352)](!!Me), _0xa0e134[Q(327)][Q(308)]();
        };
        return _0x335812[O(284) + O(307)](O(368) + O(259), ee), () => {
          const Q = O;
          _0x5e2324[Q(260) + Q(279)](Q(368) + Q(259), ee);
        };
      }
    });
  }, sync: function(k) {
    const L = n;
    p[L(327)][L(394)](L(353), k);
  }, getDeviceId: function() {
    const k = n;
    if (k(324) === k(324)) return o[k(274)];
    _0x1d9c93(_0x4dd182);
  } })), Xe(() => {
    (async () => {
      const k = an;
      if (k(293) !== k(367)) try {
        const L = {};
        L[k(383) + "pe"] = k(322) + k(358);
        const H = {};
        H[k(274)] = o[k(274)], H[k(329)] = o[k(380)];
        const V = {};
        V[k(356)] = r, V[k(344)] = k(354), V[k(275)] = 1e4, V[k(281)] = L, V[k(312)] = H;
        const O = V, ee = await iS(O);
        h(ee[k(312)]);
      } catch (L) {
        const H = {};
        H[k(351)] = L, H[k(338)] = k(270), F(H);
      }
      else {
        const L = _0x3334f4[k(327)];
        L && (_0x18d93b[k(327)] = new _0x4b16b3(L, _0x3e8275, _0x428226, _0x481711, _0x4dbe74, _0x2eb908));
      }
    })();
  }, [oe]), Xe(() => {
    const k = n;
    if (p[k(327)] || !C) return;
    const L = {};
    L[k(285) + "on"] = !1;
    const H = To(C, L);
    return H.on(k(340), () => {
      const V = k, O = {};
      O[V(355)] = V(340), O[V(365) + "t"] = g, O[V(274)] = o[V(274)], O[V(390)] = v, O[V(380)] = o[V(380)], H[V(394)](V(359), O);
    }), H.on(k(359), (V) => {
      const O = k;
      if (V[O(363)] == !0)
        if (O(335) === O(346)) _0x40060e(_0x473e9c);
        else {
          p[O(327)] = H, H[O(394)](O(353), { action: O(287), ts: Date[O(387)]() });
          const ee = {};
          ee[O(355)] = O(317) + O(378), H[O(394)](O(353), ee);
        }
      else {
        const ee = {};
        ee[O(351)] = V[O(351)], ee[O(338)] = O(270), F(ee);
      }
    }), H.on(k(381), (V) => {
      const O = k;
      O(382) === O(302) ? (_0x142b86[O(327)][O(394)](O(353), _0x48c9fc), _0x477e26 == null || _0x477e26(_0x499f73)) : N[O(327)][O(364)](V);
    }), H.on(k(366), (V) => {
      const O = k;
      if (V) {
        if (N[O(327)][O(311) + "ta"](V), !N[O(327)][O(288)])
          if (O(294) !== O(294)) _0x18480e[O(327)] = null, _0x4241c5(null), _0x1424b4([]), _0x456dc1(null), _0x8b4c8a(_0x3411e3[O(387)]());
          else {
            const ee = {};
            ee[O(355)] = O(376) + "me", H[O(394)](O(353), ee);
          }
      } else {
        const ee = {};
        ee[O(355)] = O(323) + O(295), H[O(394)](O(366), ee);
      }
    }), H.on(k(353), (V) => {
      const O = k;
      if (O(306) !== O(291)) {
        if ((V[O(355)] == O(374) || V[O(355)] == O(371) + O(378)) && V[O(272)][O(326)] > 0 ? navigator[O(313)][O(343)](V[O(272)]) : V[O(355)] == O(303) + "n" && (N[O(327)][O(267) + O(297)](V[O(314)]), I[O(327)][O(308)](V[O(314)])), V[O(263)])
          if (O(373) === O(283)) _0x994414(!_0x167ef9);
          else {
            const ee = $[O(327)][O(342)](V[O(263)]);
            ee && (ee(V), $[O(327)][O(391)](V[O(263)]));
          }
      } else return _0x3c1af2[O(274)];
    }), H.on(k(336) + k(278), (V) => {
      const O = k;
      if (O(328) !== O(328))
        if (_0x4e39a8[O(363)] == !0) {
          _0xfe2a3c[O(327)] = _0x11ceed, _0x36f3f3[O(394)](O(353), { action: O(287), ts: _0x291c85[O(387)]() });
          const ee = {};
          ee[O(355)] = O(317) + O(378), _0x2e3285[O(394)](O(353), ee);
        } else {
          const ee = {};
          ee[O(351)] = _0x5269aa[O(351)], ee[O(338)] = O(270), _0x1ce123(ee);
        }
      else {
        const ee = {};
        ee[O(351)] = V, ee[O(338)] = O(270), F(ee);
      }
    }), H.on(k(315), (V) => {
      const O = k;
      if (O(384) === O(384)) {
        const ee = {};
        ee[O(351)] = O(347) + O(271) + O(333) + V[O(276)], ee[O(338)] = O(334), F(ee);
      } else _0x2204af[O(327)][O(364)](_0x50d454);
    }), () => {
      H && H[k(315)]();
    };
  }, [C]), Xe(() => {
    const k = n;
    if (k(269) !== k(300)) {
      const L = S[k(327)];
      L && (N[k(327)] = new bS(L, i, v, G, u, d));
    } else return new _0x1cbbc0((L, H) => {
      const V = k, O = _0x3cf19b(() => {
        const ee = an;
        _0x112d59[ee(327)][ee(391)](_0x105a06[ee(263)]);
        const Q = {};
        Q[ee(355)] = _0x4e33b3[ee(355)], Q[ee(263)] = _0xae8aba[ee(263)], Q[ee(363)] = !1, Q[ee(353)] = ee(255) + ee(262) + ee(389), H(Q);
      }, _0x340715);
      _0x6e7a90[V(327)][V(264)](_0x385eed[V(263)], (ee) => {
        _0x5290ce(O), L(ee);
      }), _0x11fd4b[V(327)][V(394)](V(353), _0x4ace64);
    });
  }, [oe]), Xe(() => {
    const k = n, L = () => {
      const H = an;
      if (H(296) === H(296)) {
        const V = document[H(368) + H(386)] || document[H(316) + H(292) + H(378)] || document[H(309) + H(361)] || document[H(256) + H(325)];
        N[H(327)][H(393) + H(352)](!!V), I[H(327)][H(393) + H(352)](!!V), I[H(327)][H(308)]();
      }
    };
    return document[k(284) + k(307)](k(368) + k(259), L), () => {
      const H = k;
      document[H(260) + H(279)](H(368) + H(259), L);
    };
  }, [oe]), Xe(() => {
    const k = n;
    let L;
    if (p[k(327)])
      return L = setInterval(() => {
        const H = k;
        p[H(327)][H(394)](H(353), { action: H(287), ts: Date[H(387)]() });
      }, 6e4), () => clearInterval(L);
  }, [D]);
  const re = {};
  re[n(341)] = o[n(274)];
  const J = {};
  J[n(289)] = n(286);
  const ae = {};
  ae[n(289)] = n(286);
  const le = {};
  le[n(289)] = n(286);
  const ue = {};
  ue[n(375)] = 0, ue[n(349)] = 0;
  const Ae = {};
  Ae[n(342)] = _, Ae[n(264)] = j;
  const ge = {};
  ge.id = z, ge[n(369)] = "0", ge[n(266)] = n(298);
  const Le = {};
  Le[n(332)] = 5;
  const ke = {};
  ke[n(332)] = 10;
  const pe = {};
  return pe[n(310)] = !0, te.jsxs(hp, { id: Z, children: [E && te.jsx(mp, { children: te.jsx(gp, re) }), T[n(326)] == 0 ? te.jsxs(te.Fragment, { children: [!D && te.jsxs(m0, { align: n(277), gap: n(321), children: [te.jsx(Nr, J), te.jsx(Nr, ae), te.jsx(Nr, le)] }), te.jsxs(pp, { ref: x, id: X, style: D ? {} : ue, children: [s ? te.jsx(yS, { status: Ae, ref: I, canvasRef: S, displayId: f, isMobile: v, isShowDeviceId: E, onSenData: (k, L) => {
    const H = n;
    if (H(388) === H(301)) {
      let V;
      return _0x5f0bfd[H(327)] ? (V = _0x184033(() => {
        const O = H;
        _0x221f98[O(327)][O(394)](O(353), { action: O(287), ts: _0x3893c6[O(387)]() });
      }, 6e4), () => _0x4fa675(V)) : void 0;
    } else
      k === Da && L[H(261)] === H(274) ? H(357) !== H(357) ? _0x52cbff[H(260) + H(279)](H(368) + H(259), _0x1ed421) : y(!E) : k === Da && L[H(261)] === H(305) ? l == null || l(o[H(274)]) : Y(L);
  } }) : null, te.jsx(dS, { canvasContent: ge, canvasRef: S, isMobile: v, assistive: _, onRemoteEvent: (k, L) => {
    const H = n;
    if (k === U0) {
      const V = { ..._ };
      V[H(268)] = !1, j(V);
    } else Y(L);
  } })] })] }) : te.jsxs(te.Fragment, { children: [T == null ? void 0 : T[n(350)]((k, L) => te.jsx(Jd, { style: Le, message: k[n(351)], type: k[n(338)], showIcon: !0, closable: !0 }, L)), te.jsx(Bi, { style: ke, type: n(290), icon: te.jsx(df, {}), loading: !D && { icon: te.jsx(hf, pe) }, onClick: () => {
    const k = n;
    if (k(318) === k(318)) p[k(327)] = null, h(null), R([]), G(null), ne(Date[k(387)]());
    else {
      const L = {};
      L[k(351)] = k(347) + k(271) + k(333) + _0x23bff0[k(276)], L[k(338)] = k(334), _0x5604af(L);
    }
  }, children: n(282) })] })] });
});
(function(e, t) {
  for (var n = Ba, r = e(); ; )
    try {
      var o = -parseInt(n(393)) / 1 + -parseInt(n(389)) / 2 + parseInt(n(388)) / 3 + -parseInt(n(392)) / 4 + parseInt(n(387)) / 5 * (parseInt(n(390)) / 6) + -parseInt(n(386)) / 7 + -parseInt(n(394)) / 8 * (-parseInt(n(391)) / 9);
      if (o === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(fi, 426562);
function Ba(e, t) {
  var n = fi();
  return Ba = function(r, o) {
    r = r - 386;
    var i = n[r];
    return i;
  }, Ba(e, t);
}
function fi() {
  var e = ["499913cMfsnw", "9574616DoIupP", "483798uqGeSQ", "1950GHfNwL", "1586934MrjBRu", "1653212iLAYAo", "5508MyJqWO", "9yRKANQ", "1046520LgvhTw"];
  return fi = function() {
    return e;
  }, fi();
}
export {
  WS as ViewRP
};
