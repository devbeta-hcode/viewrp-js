var l0 = Object.defineProperty;
var u0 = (e, n, t) => n in e ? l0(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var kt = (e, n, t) => u0(e, typeof n != "symbol" ? n + "" : n, t);
import * as _ from "react";
import Fe, { useDebugValue as Aa, createElement as f0, useRef as qe, useContext as tn, isValidElement as d0, version as h0, createContext as Ks, useLayoutEffect as x0, useEffect as st, useState as it, forwardRef as ml, useImperativeHandle as gl } from "react";
import Ta from "react-dom";
function Mn(e, n) {
  var t = yo();
  return Mn = function(r, o) {
    r = r - 242;
    var i = t[r];
    return i;
  }, Mn(e, n);
}
var xr = Mn;
(function(e, n) {
  for (var t = Mn, r = e(); ; )
    try {
      var o = -parseInt(t(272)) / 1 + parseInt(t(249)) / 2 * (parseInt(t(269)) / 3) + parseInt(t(277)) / 4 * (parseInt(t(263)) / 5) + -parseInt(t(278)) / 6 * (-parseInt(t(250)) / 7) + -parseInt(t(252)) / 8 + parseInt(t(273)) / 9 * (-parseInt(t(248)) / 10) + parseInt(t(282)) / 11;
      if (o === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(yo, 996994);
var p0 = /* @__PURE__ */ function() {
  var e = !0;
  return function(n, t) {
    var r = Mn;
    if (r(253) === r(280)) return _0x1b7c71 && _0x58ab66[r(244)] && _0x1d14db[r(266)][r(268) + r(254)][r(259)](_0x85c647, r(265)) ? _0x5a0b80[r(265)] : _0x496258;
    var o = e ? function() {
      var i = r;
      if (t)
        if (i(261) !== i(261)) {
          var s = _0x189d87 ? function() {
            var c = i;
            if (_0x56b488) {
              var l = _0x47ade7[c(275)](_0x5a4f2f, arguments);
              return _0x26331d = null, l;
            }
          } : function() {
          };
          return _0x25c58e = !1, s;
        } else {
          var a = t[i(275)](n, arguments);
          return t = null, a;
        }
    } : function() {
    };
    return e = !1, o;
  };
}(), Li = p0(void 0, function() {
  var e = Mn;
  return Li[e(271)]()[e(260)](e(247) + "+$")[e(271)]()[e(270) + "r"](Li)[e(260)](e(247) + "+$");
});
function yo() {
  var e = ["call", "search", "jqDzv", "undefined", "10445dFrIoh", "FotNK", "default", "prototype", "function", "hasOwnProp", "57lbKcnW", "constructo", "toString", "1435205Bvhwcc", "7876377azZftn", "defineProp", "apply", "lEGZg", "564PedEgG", "3702oRuzBm", "forEach", "CDwDc", "construct", "29031178yOqBxM", "getOwnProp", "Tgpnz", "__esModule", "ertyDescri", "get", "(((.+)+)+)", "10MQaGZh", "26314trSyWg", "9723EOaGYt", "keys", "5867128LZCXcI", "lemvE", "erty", "value", "length", "enumerable", "ptor"];
  return yo = function() {
    return e;
  }, yo();
}
Li();
typeof globalThis !== xr(262) || typeof window !== xr(262) || (typeof global !== xr(262) ? global : xr(262));
function m0(e) {
  var n = xr;
  return e && e[n(244)] && Object[n(266)][n(268) + n(254)][n(259)](e, n(265)) ? e[n(265)] : e;
}
var Mr = { exports: {} }, ar = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oa;
function g0() {
  if (Oa) return ar;
  Oa = 1;
  var e = Fe, n = Symbol.for("react.element"), t = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(a, c, l) {
    var f, d = {}, u = null, v = null;
    l !== void 0 && (u = "" + l), c.key !== void 0 && (u = "" + c.key), c.ref !== void 0 && (v = c.ref);
    for (f in c) r.call(c, f) && !i.hasOwnProperty(f) && (d[f] = c[f]);
    if (a && a.defaultProps) for (f in c = a.defaultProps, c) d[f] === void 0 && (d[f] = c[f]);
    return { $$typeof: n, type: a, key: u, ref: v, props: d, _owner: o.current };
  }
  return ar.Fragment = t, ar.jsx = s, ar.jsxs = s, ar;
}
var cr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ra;
function v0() {
  return Ra || (Ra = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Fe, n = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g = Symbol.iterator, h = "@@iterator";
    function x(p) {
      if (p === null || typeof p != "object")
        return null;
      var R = g && p[g] || p[h];
      return typeof R == "function" ? R : null;
    }
    var S = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(p) {
      {
        for (var R = arguments.length, M = new Array(R > 1 ? R - 1 : 0), Y = 1; Y < R; Y++)
          M[Y - 1] = arguments[Y];
        m("error", p, M);
      }
    }
    function m(p, R, M) {
      {
        var Y = S.ReactDebugCurrentFrame, me = Y.getStackAddendum();
        me !== "" && (R += "%s", M = M.concat([me]));
        var ve = M.map(function(ue) {
          return String(ue);
        });
        ve.unshift("Warning: " + R), Function.prototype.apply.call(console[p], console, ve);
      }
    }
    var T = !1, y = !1, O = !1, C = !1, I = !1, F;
    F = Symbol.for("react.module.reference");
    function W(p) {
      return !!(typeof p == "string" || typeof p == "function" || p === r || p === i || I || p === o || p === l || p === f || C || p === v || T || y || O || typeof p == "object" && p !== null && (p.$$typeof === u || p.$$typeof === d || p.$$typeof === s || p.$$typeof === a || p.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      p.$$typeof === F || p.getModuleId !== void 0));
    }
    function ne(p, R, M) {
      var Y = p.displayName;
      if (Y)
        return Y;
      var me = R.displayName || R.name || "";
      return me !== "" ? M + "(" + me + ")" : M;
    }
    function X(p) {
      return p.displayName || "Context";
    }
    function D(p) {
      if (p == null)
        return null;
      if (typeof p.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof p == "function")
        return p.displayName || p.name || null;
      if (typeof p == "string")
        return p;
      switch (p) {
        case r:
          return "Fragment";
        case t:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case l:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof p == "object")
        switch (p.$$typeof) {
          case a:
            var R = p;
            return X(R) + ".Consumer";
          case s:
            var M = p;
            return X(M._context) + ".Provider";
          case c:
            return ne(p, p.render, "ForwardRef");
          case d:
            var Y = p.displayName || null;
            return Y !== null ? Y : D(p.type) || "Memo";
          case u: {
            var me = p, ve = me._payload, ue = me._init;
            try {
              return D(ue(ve));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var V = Object.assign, q = 0, $, ee, K, Q, oe, ie, Z;
    function re() {
    }
    re.__reactDisabledLog = !0;
    function xe() {
      {
        if (q === 0) {
          $ = console.log, ee = console.info, K = console.warn, Q = console.error, oe = console.group, ie = console.groupCollapsed, Z = console.groupEnd;
          var p = {
            configurable: !0,
            enumerable: !0,
            value: re,
            writable: !0
          };
          Object.defineProperties(console, {
            info: p,
            log: p,
            warn: p,
            error: p,
            group: p,
            groupCollapsed: p,
            groupEnd: p
          });
        }
        q++;
      }
    }
    function fe() {
      {
        if (q--, q === 0) {
          var p = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: V({}, p, {
              value: $
            }),
            info: V({}, p, {
              value: ee
            }),
            warn: V({}, p, {
              value: K
            }),
            error: V({}, p, {
              value: Q
            }),
            group: V({}, p, {
              value: oe
            }),
            groupCollapsed: V({}, p, {
              value: ie
            }),
            groupEnd: V({}, p, {
              value: Z
            })
          });
        }
        q < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var pe = S.ReactCurrentDispatcher, ge;
    function j(p, R, M) {
      {
        if (ge === void 0)
          try {
            throw Error();
          } catch (me) {
            var Y = me.stack.trim().match(/\n( *(at )?)/);
            ge = Y && Y[1] || "";
          }
        return `
` + ge + p;
      }
    }
    var N = !1, L;
    {
      var B = typeof WeakMap == "function" ? WeakMap : Map;
      L = new B();
    }
    function E(p, R) {
      if (!p || N)
        return "";
      {
        var M = L.get(p);
        if (M !== void 0)
          return M;
      }
      var Y;
      N = !0;
      var me = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ve;
      ve = pe.current, pe.current = null, xe();
      try {
        if (R) {
          var ue = function() {
            throw Error();
          };
          if (Object.defineProperty(ue.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ue, []);
            } catch (ot) {
              Y = ot;
            }
            Reflect.construct(p, [], ue);
          } else {
            try {
              ue.call();
            } catch (ot) {
              Y = ot;
            }
            p.call(ue.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ot) {
            Y = ot;
          }
          p();
        }
      } catch (ot) {
        if (ot && Y && typeof ot.stack == "string") {
          for (var ce = ot.stack.split(`
`), Ke = Y.stack.split(`
`), Pe = ce.length - 1, Ie = Ke.length - 1; Pe >= 1 && Ie >= 0 && ce[Pe] !== Ke[Ie]; )
            Ie--;
          for (; Pe >= 1 && Ie >= 0; Pe--, Ie--)
            if (ce[Pe] !== Ke[Ie]) {
              if (Pe !== 1 || Ie !== 1)
                do
                  if (Pe--, Ie--, Ie < 0 || ce[Pe] !== Ke[Ie]) {
                    var Ne = `
` + ce[Pe].replace(" at new ", " at ");
                    return p.displayName && Ne.includes("<anonymous>") && (Ne = Ne.replace("<anonymous>", p.displayName)), typeof p == "function" && L.set(p, Ne), Ne;
                  }
                while (Pe >= 1 && Ie >= 0);
              break;
            }
        }
      } finally {
        N = !1, pe.current = ve, fe(), Error.prepareStackTrace = me;
      }
      var Rn = p ? p.displayName || p.name : "", dn = Rn ? j(Rn) : "";
      return typeof p == "function" && L.set(p, dn), dn;
    }
    function G(p, R, M) {
      return E(p, !1);
    }
    function k(p) {
      var R = p.prototype;
      return !!(R && R.isReactComponent);
    }
    function he(p, R, M) {
      if (p == null)
        return "";
      if (typeof p == "function")
        return E(p, k(p));
      if (typeof p == "string")
        return j(p);
      switch (p) {
        case l:
          return j("Suspense");
        case f:
          return j("SuspenseList");
      }
      if (typeof p == "object")
        switch (p.$$typeof) {
          case c:
            return G(p.render);
          case d:
            return he(p.type, R, M);
          case u: {
            var Y = p, me = Y._payload, ve = Y._init;
            try {
              return he(ve(me), R, M);
            } catch {
            }
          }
        }
      return "";
    }
    var Ce = Object.prototype.hasOwnProperty, Ee = {}, Ze = S.ReactDebugCurrentFrame;
    function ut(p) {
      if (p) {
        var R = p._owner, M = he(p.type, p._source, R ? R.type : null);
        Ze.setExtraStackFrame(M);
      } else
        Ze.setExtraStackFrame(null);
    }
    function Ot(p, R, M, Y, me) {
      {
        var ve = Function.call.bind(Ce);
        for (var ue in p)
          if (ve(p, ue)) {
            var ce = void 0;
            try {
              if (typeof p[ue] != "function") {
                var Ke = Error((Y || "React class") + ": " + M + " type `" + ue + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof p[ue] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ke.name = "Invariant Violation", Ke;
              }
              ce = p[ue](R, ue, Y, M, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Pe) {
              ce = Pe;
            }
            ce && !(ce instanceof Error) && (ut(me), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Y || "React class", M, ue, typeof ce), ut(null)), ce instanceof Error && !(ce.message in Ee) && (Ee[ce.message] = !0, ut(me), b("Failed %s type: %s", M, ce.message), ut(null));
          }
      }
    }
    var Le = Array.isArray;
    function Ae(p) {
      return Le(p);
    }
    function Xe(p) {
      {
        var R = typeof Symbol == "function" && Symbol.toStringTag, M = R && p[Symbol.toStringTag] || p.constructor.name || "Object";
        return M;
      }
    }
    function gt(p) {
      try {
        return dt(p), !1;
      } catch {
        return !0;
      }
    }
    function dt(p) {
      return "" + p;
    }
    function cn(p) {
      if (gt(p))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Xe(p)), dt(p);
    }
    var ln = S.ReactCurrentOwner, Tn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, un, P;
    function w(p) {
      if (Ce.call(p, "ref")) {
        var R = Object.getOwnPropertyDescriptor(p, "ref").get;
        if (R && R.isReactWarning)
          return !1;
      }
      return p.ref !== void 0;
    }
    function Te(p) {
      if (Ce.call(p, "key")) {
        var R = Object.getOwnPropertyDescriptor(p, "key").get;
        if (R && R.isReactWarning)
          return !1;
      }
      return p.key !== void 0;
    }
    function ae(p, R) {
      typeof p.ref == "string" && ln.current;
    }
    function Re(p, R) {
      {
        var M = function() {
          un || (un = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        M.isReactWarning = !0, Object.defineProperty(p, "key", {
          get: M,
          configurable: !0
        });
      }
    }
    function Je(p, R) {
      {
        var M = function() {
          P || (P = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        M.isReactWarning = !0, Object.defineProperty(p, "ref", {
          get: M,
          configurable: !0
        });
      }
    }
    var Ge = function(p, R, M, Y, me, ve, ue) {
      var ce = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: p,
        key: R,
        ref: M,
        props: ue,
        // Record the component responsible for creating this element.
        _owner: ve
      };
      return ce._store = {}, Object.defineProperty(ce._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ce, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Y
      }), Object.defineProperty(ce, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: me
      }), Object.freeze && (Object.freeze(ce.props), Object.freeze(ce)), ce;
    };
    function J(p, R, M, Y, me) {
      {
        var ve, ue = {}, ce = null, Ke = null;
        M !== void 0 && (cn(M), ce = "" + M), Te(R) && (cn(R.key), ce = "" + R.key), w(R) && (Ke = R.ref, ae(R, me));
        for (ve in R)
          Ce.call(R, ve) && !Tn.hasOwnProperty(ve) && (ue[ve] = R[ve]);
        if (p && p.defaultProps) {
          var Pe = p.defaultProps;
          for (ve in Pe)
            ue[ve] === void 0 && (ue[ve] = Pe[ve]);
        }
        if (ce || Ke) {
          var Ie = typeof p == "function" ? p.displayName || p.name || "Unknown" : p;
          ce && Re(ue, Ie), Ke && Je(ue, Ie);
        }
        return Ge(p, ce, Ke, me, Y, ln.current, ue);
      }
    }
    var Me = S.ReactCurrentOwner, nt = S.ReactDebugCurrentFrame;
    function Rt(p) {
      if (p) {
        var R = p._owner, M = he(p.type, p._source, R ? R.type : null);
        nt.setExtraStackFrame(M);
      } else
        nt.setExtraStackFrame(null);
    }
    var Ft;
    Ft = !1;
    function zt(p) {
      return typeof p == "object" && p !== null && p.$$typeof === n;
    }
    function We() {
      {
        if (Me.current) {
          var p = D(Me.current.type);
          if (p)
            return `

Check the render method of \`` + p + "`.";
        }
        return "";
      }
    }
    function Qe(p) {
      return "";
    }
    var rt = {};
    function Pt(p) {
      {
        var R = We();
        if (!R) {
          var M = typeof p == "string" ? p : p.displayName || p.name;
          M && (R = `

Check the top-level render call using <` + M + ">.");
        }
        return R;
      }
    }
    function fn(p, R) {
      {
        if (!p._store || p._store.validated || p.key != null)
          return;
        p._store.validated = !0;
        var M = Pt(R);
        if (rt[M])
          return;
        rt[M] = !0;
        var Y = "";
        p && p._owner && p._owner !== Me.current && (Y = " It was passed a child from " + D(p._owner.type) + "."), Rt(p), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', M, Y), Rt(null);
      }
    }
    function On(p, R) {
      {
        if (typeof p != "object")
          return;
        if (Ae(p))
          for (var M = 0; M < p.length; M++) {
            var Y = p[M];
            zt(Y) && fn(Y, R);
          }
        else if (zt(p))
          p._store && (p._store.validated = !0);
        else if (p) {
          var me = x(p);
          if (typeof me == "function" && me !== p.entries)
            for (var ve = me.call(p), ue; !(ue = ve.next()).done; )
              zt(ue.value) && fn(ue.value, R);
        }
      }
    }
    function Xt(p) {
      {
        var R = p.type;
        if (R == null || typeof R == "string")
          return;
        var M;
        if (typeof R == "function")
          M = R.propTypes;
        else if (typeof R == "object" && (R.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        R.$$typeof === d))
          M = R.propTypes;
        else
          return;
        if (M) {
          var Y = D(R);
          Ot(M, p.props, "prop", Y, p);
        } else if (R.PropTypes !== void 0 && !Ft) {
          Ft = !0;
          var me = D(R);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", me || "Unknown");
        }
        typeof R.getDefaultProps == "function" && !R.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Gt(p) {
      {
        for (var R = Object.keys(p.props), M = 0; M < R.length; M++) {
          var Y = R[M];
          if (Y !== "children" && Y !== "key") {
            Rt(p), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Y), Rt(null);
            break;
          }
        }
        p.ref !== null && (Rt(p), b("Invalid attribute `ref` supplied to `React.Fragment`."), Rt(null));
      }
    }
    var sr = {};
    function jr(p, R, M, Y, me, ve) {
      {
        var ue = W(p);
        if (!ue) {
          var ce = "";
          (p === void 0 || typeof p == "object" && p !== null && Object.keys(p).length === 0) && (ce += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ke = Qe();
          Ke ? ce += Ke : ce += We();
          var Pe;
          p === null ? Pe = "null" : Ae(p) ? Pe = "array" : p !== void 0 && p.$$typeof === n ? (Pe = "<" + (D(p.type) || "Unknown") + " />", ce = " Did you accidentally export a JSX literal instead of a component?") : Pe = typeof p, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Pe, ce);
        }
        var Ie = J(p, R, M, me, ve);
        if (Ie == null)
          return Ie;
        if (ue) {
          var Ne = R.children;
          if (Ne !== void 0)
            if (Y)
              if (Ae(Ne)) {
                for (var Rn = 0; Rn < Ne.length; Rn++)
                  On(Ne[Rn], p);
                Object.freeze && Object.freeze(Ne);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              On(Ne, p);
        }
        if (Ce.call(R, "key")) {
          var dn = D(p), ot = Object.keys(R).filter(function(c0) {
            return c0 !== "key";
          }), fi = ot.length > 0 ? "{key: someKey, " + ot.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!sr[dn + fi]) {
            var a0 = ot.length > 0 ? "{" + ot.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, fi, dn, a0, dn), sr[dn + fi] = !0;
          }
        }
        return p === r ? Gt(Ie) : Xt(Ie), Ie;
      }
    }
    function Ue(p, R, M) {
      return jr(p, R, M, !0);
    }
    function Lr(p, R, M) {
      return jr(p, R, M, !1);
    }
    var ui = Lr, ke = Ue;
    cr.Fragment = r, cr.jsx = ui, cr.jsxs = ke;
  }()), cr;
}
var Pa;
function y0() {
  return Pa || (Pa = 1, process.env.NODE_ENV === "production" ? Mr.exports = g0() : Mr.exports = v0()), Mr.exports;
}
var H = y0(), at = function() {
  return at = Object.assign || function(n) {
    for (var t, r = 1, o = arguments.length; r < o; r++) {
      t = arguments[r];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
    }
    return n;
  }, at.apply(this, arguments);
};
function Dn(e, n, t) {
  if (t || arguments.length === 2) for (var r = 0, o = n.length, i; r < o; r++)
    (i || !(r in n)) && (i || (i = Array.prototype.slice.call(n, 0, r)), i[r] = n[r]);
  return e.concat(i || Array.prototype.slice.call(n));
}
function b0(e) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return n[t] === void 0 && (n[t] = e(t)), n[t];
  };
}
var S0 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, w0 = /* @__PURE__ */ b0(
  function(e) {
    return S0.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Oe = "-ms-", gr = "-moz-", Se = "-webkit-", vl = "comm", zo = "rule", Zs = "decl", E0 = "@import", yl = "@keyframes", _0 = "@layer", bl = Math.abs, Js = String.fromCharCode, Mi = Object.assign;
function C0(e, n) {
  return Ye(e, 0) ^ 45 ? (((n << 2 ^ Ye(e, 0)) << 2 ^ Ye(e, 1)) << 2 ^ Ye(e, 2)) << 2 ^ Ye(e, 3) : 0;
}
function Sl(e) {
  return e.trim();
}
function qt(e, n) {
  return (e = n.exec(e)) ? e[0] : e;
}
function se(e, n, t) {
  return e.replace(n, t);
}
function Qr(e, n, t) {
  return e.indexOf(n, t);
}
function Ye(e, n) {
  return e.charCodeAt(n) | 0;
}
function Bn(e, n, t) {
  return e.slice(n, t);
}
function jt(e) {
  return e.length;
}
function wl(e) {
  return e.length;
}
function pr(e, n) {
  return n.push(e), e;
}
function A0(e, n) {
  return e.map(n).join("");
}
function ka(e, n) {
  return e.filter(function(t) {
    return !qt(t, n);
  });
}
var Vo = 1, Fn = 1, El = 0, pt = 0, ze = 0, Zn = "";
function Ho(e, n, t, r, o, i, s, a) {
  return { value: e, root: n, parent: t, type: r, props: o, children: i, line: Vo, column: Fn, length: s, return: "", siblings: a };
}
function Kt(e, n) {
  return Mi(Ho("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, n);
}
function Pn(e) {
  for (; e.root; )
    e = Kt(e.root, { children: [e] });
  pr(e, e.siblings);
}
function T0() {
  return ze;
}
function O0() {
  return ze = pt > 0 ? Ye(Zn, --pt) : 0, Fn--, ze === 10 && (Fn = 1, Vo--), ze;
}
function St() {
  return ze = pt < El ? Ye(Zn, pt++) : 0, Fn++, ze === 10 && (Fn = 1, Vo++), ze;
}
function vn() {
  return Ye(Zn, pt);
}
function eo() {
  return pt;
}
function Uo(e, n) {
  return Bn(Zn, e, n);
}
function Di(e) {
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
function R0(e) {
  return Vo = Fn = 1, El = jt(Zn = e), pt = 0, [];
}
function P0(e) {
  return Zn = "", e;
}
function di(e) {
  return Sl(Uo(pt - 1, Bi(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function k0(e) {
  for (; (ze = vn()) && ze < 33; )
    St();
  return Di(e) > 2 || Di(ze) > 3 ? "" : " ";
}
function I0(e, n) {
  for (; --n && St() && !(ze < 48 || ze > 102 || ze > 57 && ze < 65 || ze > 70 && ze < 97); )
    ;
  return Uo(e, eo() + (n < 6 && vn() == 32 && St() == 32));
}
function Bi(e) {
  for (; St(); )
    switch (ze) {
      // ] ) " '
      case e:
        return pt;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Bi(ze);
        break;
      // (
      case 40:
        e === 41 && Bi(e);
        break;
      // \
      case 92:
        St();
        break;
    }
  return pt;
}
function N0(e, n) {
  for (; St() && e + ze !== 57; )
    if (e + ze === 84 && vn() === 47)
      break;
  return "/*" + Uo(n, pt - 1) + "*" + Js(e === 47 ? e : St());
}
function j0(e) {
  for (; !Di(vn()); )
    St();
  return Uo(e, pt);
}
function L0(e) {
  return P0(to("", null, null, null, [""], e = R0(e), 0, [0], e));
}
function to(e, n, t, r, o, i, s, a, c) {
  for (var l = 0, f = 0, d = s, u = 0, v = 0, g = 0, h = 1, x = 1, S = 1, b = 0, m = "", T = o, y = i, O = r, C = m; x; )
    switch (g = b, b = St()) {
      // (
      case 40:
        if (g != 108 && Ye(C, d - 1) == 58) {
          Qr(C += se(di(b), "&", "&\f"), "&\f", bl(l ? a[l - 1] : 0)) != -1 && (S = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        C += di(b);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        C += k0(g);
        break;
      // \
      case 92:
        C += I0(eo() - 1, 7);
        continue;
      // /
      case 47:
        switch (vn()) {
          case 42:
          case 47:
            pr(M0(N0(St(), eo()), n, t, c), c);
            break;
          default:
            C += "/";
        }
        break;
      // {
      case 123 * h:
        a[l++] = jt(C) * S;
      // } ; \0
      case 125 * h:
      case 59:
      case 0:
        switch (b) {
          // \0 }
          case 0:
          case 125:
            x = 0;
          // ;
          case 59 + f:
            S == -1 && (C = se(C, /\f/g, "")), v > 0 && jt(C) - d && pr(v > 32 ? Na(C + ";", r, t, d - 1, c) : Na(se(C, " ", "") + ";", r, t, d - 2, c), c);
            break;
          // @ ;
          case 59:
            C += ";";
          // { rule/at-rule
          default:
            if (pr(O = Ia(C, n, t, l, f, o, a, m, T = [], y = [], d, i), i), b === 123)
              if (f === 0)
                to(C, n, O, O, T, i, d, a, y);
              else
                switch (u === 99 && Ye(C, 3) === 110 ? 100 : u) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    to(e, O, O, r && pr(Ia(e, O, O, 0, 0, o, a, m, o, T = [], d, y), y), o, y, d, a, r ? T : y);
                    break;
                  default:
                    to(C, O, O, O, [""], y, 0, a, y);
                }
        }
        l = f = v = 0, h = S = 1, m = C = "", d = s;
        break;
      // :
      case 58:
        d = 1 + jt(C), v = g;
      default:
        if (h < 1) {
          if (b == 123)
            --h;
          else if (b == 125 && h++ == 0 && O0() == 125)
            continue;
        }
        switch (C += Js(b), b * h) {
          // &
          case 38:
            S = f > 0 ? 1 : (C += "\f", -1);
            break;
          // ,
          case 44:
            a[l++] = (jt(C) - 1) * S, S = 1;
            break;
          // @
          case 64:
            vn() === 45 && (C += di(St())), u = vn(), f = d = jt(m = C += j0(eo())), b++;
            break;
          // -
          case 45:
            g === 45 && jt(C) == 2 && (h = 0);
        }
    }
  return i;
}
function Ia(e, n, t, r, o, i, s, a, c, l, f, d) {
  for (var u = o - 1, v = o === 0 ? i : [""], g = wl(v), h = 0, x = 0, S = 0; h < r; ++h)
    for (var b = 0, m = Bn(e, u + 1, u = bl(x = s[h])), T = e; b < g; ++b)
      (T = Sl(x > 0 ? v[b] + " " + m : se(m, /&\f/g, v[b]))) && (c[S++] = T);
  return Ho(e, n, t, o === 0 ? zo : a, c, l, f, d);
}
function M0(e, n, t, r) {
  return Ho(e, n, t, vl, Js(T0()), Bn(e, 2, -2), 0, r);
}
function Na(e, n, t, r, o) {
  return Ho(e, n, t, Zs, Bn(e, 0, r), Bn(e, r + 1, -1), r, o);
}
function _l(e, n, t) {
  switch (C0(e, n)) {
    // color-adjust
    case 5103:
      return Se + "print-" + e + e;
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
      return Se + e + e;
    // tab-size
    case 4789:
      return gr + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Se + e + gr + e + Oe + e + e;
    // writing-mode
    case 5936:
      switch (Ye(e, n + 11)) {
        // vertical-l(r)
        case 114:
          return Se + e + Oe + se(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return Se + e + Oe + se(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return Se + e + Oe + se(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return Se + e + Oe + e + e;
    // order
    case 6165:
      return Se + e + Oe + "flex-" + e + e;
    // align-items
    case 5187:
      return Se + e + se(e, /(\w+).+(:[^]+)/, Se + "box-$1$2" + Oe + "flex-$1$2") + e;
    // align-self
    case 5443:
      return Se + e + Oe + "flex-item-" + se(e, /flex-|-self/g, "") + (qt(e, /flex-|baseline/) ? "" : Oe + "grid-row-" + se(e, /flex-|-self/g, "")) + e;
    // align-content
    case 4675:
      return Se + e + Oe + "flex-line-pack" + se(e, /align-content|flex-|-self/g, "") + e;
    // flex-shrink
    case 5548:
      return Se + e + Oe + se(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return Se + e + Oe + se(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return Se + "box-" + se(e, "-grow", "") + Se + e + Oe + se(e, "grow", "positive") + e;
    // transition
    case 4554:
      return Se + se(e, /([^-])(transform)/g, "$1" + Se + "$2") + e;
    // cursor
    case 6187:
      return se(se(se(e, /(zoom-|grab)/, Se + "$1"), /(image-set)/, Se + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return se(e, /(image-set\([^]*)/, Se + "$1$`$1");
    // justify-content
    case 4968:
      return se(se(e, /(.+:)(flex-)?(.*)/, Se + "box-pack:$3" + Oe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Se + e + e;
    // justify-self
    case 4200:
      if (!qt(e, /flex-|baseline/)) return Oe + "grid-column-align" + Bn(e, n) + e;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return Oe + se(e, "template-", "") + e;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return t && t.some(function(r, o) {
        return n = o, qt(r.props, /grid-\w+-end/);
      }) ? ~Qr(e + (t = t[n].value), "span", 0) ? e : Oe + se(e, "-start", "") + e + Oe + "grid-row-span:" + (~Qr(t, "span", 0) ? qt(t, /\d+/) : +qt(t, /\d+/) - +qt(e, /\d+/)) + ";" : Oe + se(e, "-start", "") + e;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return t && t.some(function(r) {
        return qt(r.props, /grid-\w+-start/);
      }) ? e : Oe + se(se(e, "-end", "-span"), "span ", "") + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return se(e, /(.+)-inline(.+)/, Se + "$1$2") + e;
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
      if (jt(e) - 1 - n > 6)
        switch (Ye(e, n + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (Ye(e, n + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return se(e, /(.+:)(.+)-([^]+)/, "$1" + Se + "$2-$3$1" + gr + (Ye(e, n + 3) == 108 ? "$3" : "$2-$3")) + e;
          // (s)tretch
          case 115:
            return ~Qr(e, "stretch", 0) ? _l(se(e, "stretch", "fill-available"), n, t) + e : e;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return se(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, s, a, c, l) {
        return Oe + o + ":" + i + l + (s ? Oe + o + "-span:" + (a ? c : +c - +i) + l : "") + e;
      });
    // position: sticky
    case 4949:
      if (Ye(e, n + 6) === 121)
        return se(e, ":", ":" + Se) + e;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (Ye(e, Ye(e, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return se(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + Se + (Ye(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Se + "$2$3$1" + Oe + "$2box$3") + e;
        // (inline-)?gri(d)
        case 100:
          return se(e, ":", ":" + Oe) + e;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return se(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function bo(e, n) {
  for (var t = "", r = 0; r < e.length; r++)
    t += n(e[r], r, e, n) || "";
  return t;
}
function D0(e, n, t, r) {
  switch (e.type) {
    case _0:
      if (e.children.length) break;
    case E0:
    case Zs:
      return e.return = e.return || e.value;
    case vl:
      return "";
    case yl:
      return e.return = e.value + "{" + bo(e.children, r) + "}";
    case zo:
      if (!jt(e.value = e.props.join(","))) return "";
  }
  return jt(t = bo(e.children, r)) ? e.return = e.value + "{" + t + "}" : "";
}
function B0(e) {
  var n = wl(e);
  return function(t, r, o, i) {
    for (var s = "", a = 0; a < n; a++)
      s += e[a](t, r, o, i) || "";
    return s;
  };
}
function F0(e) {
  return function(n) {
    n.root || (n = n.return) && e(n);
  };
}
function z0(e, n, t, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Zs:
        e.return = _l(e.value, e.length, t);
        return;
      case yl:
        return bo([Kt(e, { value: se(e.value, "@", "@" + Se) })], r);
      case zo:
        if (e.length)
          return A0(t = e.props, function(o) {
            switch (qt(o, r = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                Pn(Kt(e, { props: [se(o, /:(read-\w+)/, ":" + gr + "$1")] })), Pn(Kt(e, { props: [o] })), Mi(e, { props: ka(t, r) });
                break;
              // :placeholder
              case "::placeholder":
                Pn(Kt(e, { props: [se(o, /:(plac\w+)/, ":" + Se + "input-$1")] })), Pn(Kt(e, { props: [se(o, /:(plac\w+)/, ":" + gr + "$1")] })), Pn(Kt(e, { props: [se(o, /:(plac\w+)/, Oe + "input-$1")] })), Pn(Kt(e, { props: [o] })), Mi(e, { props: ka(t, r) });
                break;
            }
            return "";
          });
    }
}
var V0 = {
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
}, _n = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Cl = "active", Al = "data-styled-version", qo = "6.1.18", Qs = `/*!sc*/
`, So = typeof window < "u" && typeof document < "u", H0 = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), ja = /invalid hook call/i, Dr = /* @__PURE__ */ new Set(), U0 = function(e, n) {
  if (process.env.NODE_ENV !== "production") {
    var t = n ? ' with the id of "'.concat(n, '"') : "", r = "The component ".concat(e).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, o = console.error;
    try {
      var i = !0;
      console.error = function(s) {
        for (var a = [], c = 1; c < arguments.length; c++) a[c - 1] = arguments[c];
        ja.test(s) ? (i = !1, Dr.delete(r)) : o.apply(void 0, Dn([s], a, !1));
      }, qe(), i && !Dr.has(r) && (console.warn(r), Dr.add(r));
    } catch (s) {
      ja.test(s.message) && Dr.delete(r);
    } finally {
      console.error = o;
    }
  }
}, Wo = Object.freeze([]), zn = Object.freeze({});
function q0(e, n, t) {
  return t === void 0 && (t = zn), e.theme !== t.theme && e.theme || n || t.theme;
}
var Fi = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), W0 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, $0 = /(^-|-$)/g;
function La(e) {
  return e.replace(W0, "-").replace($0, "");
}
var Y0 = /(a)(d)/gi, Br = 52, Ma = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function zi(e) {
  var n, t = "";
  for (n = Math.abs(e); n > Br; n = n / Br | 0) t = Ma(n % Br) + t;
  return (Ma(n % Br) + t).replace(Y0, "$1-$2");
}
var hi, Tl = 5381, xn = function(e, n) {
  for (var t = n.length; t; ) e = 33 * e ^ n.charCodeAt(--t);
  return e;
}, Ol = function(e) {
  return xn(Tl, e);
};
function X0(e) {
  return zi(Ol(e) >>> 0);
}
function Rl(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function xi(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Pl = typeof Symbol == "function" && Symbol.for, kl = Pl ? Symbol.for("react.memo") : 60115, G0 = Pl ? Symbol.for("react.forward_ref") : 60112, K0 = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Z0 = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Il = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, J0 = ((hi = {})[G0] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, hi[kl] = Il, hi);
function Da(e) {
  return ("type" in (n = e) && n.type.$$typeof) === kl ? Il : "$$typeof" in e ? J0[e.$$typeof] : K0;
  var n;
}
var Q0 = Object.defineProperty, ed = Object.getOwnPropertyNames, Ba = Object.getOwnPropertySymbols, td = Object.getOwnPropertyDescriptor, nd = Object.getPrototypeOf, Fa = Object.prototype;
function Nl(e, n, t) {
  if (typeof n != "string") {
    if (Fa) {
      var r = nd(n);
      r && r !== Fa && Nl(e, r, t);
    }
    var o = ed(n);
    Ba && (o = o.concat(Ba(n)));
    for (var i = Da(e), s = Da(n), a = 0; a < o.length; ++a) {
      var c = o[a];
      if (!(c in Z0 || t && t[c] || s && c in s || i && c in i)) {
        var l = td(n, c);
        try {
          Q0(e, c, l);
        } catch {
        }
      }
    }
  }
  return e;
}
function Vn(e) {
  return typeof e == "function";
}
function ea(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function mn(e, n) {
  return e && n ? "".concat(e, " ").concat(n) : e || n || "";
}
function za(e, n) {
  if (e.length === 0) return "";
  for (var t = e[0], r = 1; r < e.length; r++) t += e[r];
  return t;
}
function Hn(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Vi(e, n, t) {
  if (t === void 0 && (t = !1), !t && !Hn(e) && !Array.isArray(e)) return n;
  if (Array.isArray(n)) for (var r = 0; r < n.length; r++) e[r] = Vi(e[r], n[r]);
  else if (Hn(n)) for (var r in n) e[r] = Vi(e[r], n[r]);
  return e;
}
function ta(e, n) {
  Object.defineProperty(e, "toString", { value: n });
}
var rd = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function od() {
  for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
  for (var t = e[0], r = [], o = 1, i = e.length; o < i; o += 1) r.push(e[o]);
  return r.forEach(function(s) {
    t = t.replace(/%[a-z]/, s);
  }), t;
}
function Jn(e) {
  for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(n.length > 0 ? " Args: ".concat(n.join(", ")) : "")) : new Error(od.apply(void 0, Dn([rd[e]], n, !1)).trim());
}
var id = function() {
  function e(n) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = n;
  }
  return e.prototype.indexOfGroup = function(n) {
    for (var t = 0, r = 0; r < n; r++) t += this.groupSizes[r];
    return t;
  }, e.prototype.insertRules = function(n, t) {
    if (n >= this.groupSizes.length) {
      for (var r = this.groupSizes, o = r.length, i = o; n >= i; ) if ((i <<= 1) < 0) throw Jn(16, "".concat(n));
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(r), this.length = i;
      for (var s = o; s < i; s++) this.groupSizes[s] = 0;
    }
    for (var a = this.indexOfGroup(n + 1), c = (s = 0, t.length); s < c; s++) this.tag.insertRule(a, t[s]) && (this.groupSizes[n]++, a++);
  }, e.prototype.clearGroup = function(n) {
    if (n < this.length) {
      var t = this.groupSizes[n], r = this.indexOfGroup(n), o = r + t;
      this.groupSizes[n] = 0;
      for (var i = r; i < o; i++) this.tag.deleteRule(r);
    }
  }, e.prototype.getGroup = function(n) {
    var t = "";
    if (n >= this.length || this.groupSizes[n] === 0) return t;
    for (var r = this.groupSizes[n], o = this.indexOfGroup(n), i = o + r, s = o; s < i; s++) t += "".concat(this.tag.getRule(s)).concat(Qs);
    return t;
  }, e;
}(), sd = 1 << 30, no = /* @__PURE__ */ new Map(), wo = /* @__PURE__ */ new Map(), ro = 1, Fr = function(e) {
  if (no.has(e)) return no.get(e);
  for (; wo.has(ro); ) ro++;
  var n = ro++;
  if (process.env.NODE_ENV !== "production" && ((0 | n) < 0 || n > sd)) throw Jn(16, "".concat(n));
  return no.set(e, n), wo.set(n, e), n;
}, ad = function(e, n) {
  ro = n + 1, no.set(e, n), wo.set(n, e);
}, cd = "style[".concat(_n, "][").concat(Al, '="').concat(qo, '"]'), ld = new RegExp("^".concat(_n, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), ud = function(e, n, t) {
  for (var r, o = t.split(","), i = 0, s = o.length; i < s; i++) (r = o[i]) && e.registerName(n, r);
}, fd = function(e, n) {
  for (var t, r = ((t = n.textContent) !== null && t !== void 0 ? t : "").split(Qs), o = [], i = 0, s = r.length; i < s; i++) {
    var a = r[i].trim();
    if (a) {
      var c = a.match(ld);
      if (c) {
        var l = 0 | parseInt(c[1], 10), f = c[2];
        l !== 0 && (ad(f, l), ud(e, f, c[3]), e.getTag().insertRules(l, o)), o.length = 0;
      } else o.push(a);
    }
  }
}, Va = function(e) {
  for (var n = document.querySelectorAll(cd), t = 0, r = n.length; t < r; t++) {
    var o = n[t];
    o && o.getAttribute(_n) !== Cl && (fd(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function dd() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var jl = function(e) {
  var n = document.head, t = e || n, r = document.createElement("style"), o = function(a) {
    var c = Array.from(a.querySelectorAll("style[".concat(_n, "]")));
    return c[c.length - 1];
  }(t), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(_n, Cl), r.setAttribute(Al, qo);
  var s = dd();
  return s && r.setAttribute("nonce", s), t.insertBefore(r, i), r;
}, hd = function() {
  function e(n) {
    this.element = jl(n), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
        var s = r[o];
        if (s.ownerNode === t) return s;
      }
      throw Jn(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(n, t) {
    try {
      return this.sheet.insertRule(t, n), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(n) {
    this.sheet.deleteRule(n), this.length--;
  }, e.prototype.getRule = function(n) {
    var t = this.sheet.cssRules[n];
    return t && t.cssText ? t.cssText : "";
  }, e;
}(), xd = function() {
  function e(n) {
    this.element = jl(n), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(n, t) {
    if (n <= this.length && n >= 0) {
      var r = document.createTextNode(t);
      return this.element.insertBefore(r, this.nodes[n] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(n) {
    this.element.removeChild(this.nodes[n]), this.length--;
  }, e.prototype.getRule = function(n) {
    return n < this.length ? this.nodes[n].textContent : "";
  }, e;
}(), pd = function() {
  function e(n) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(n, t) {
    return n <= this.length && (this.rules.splice(n, 0, t), this.length++, !0);
  }, e.prototype.deleteRule = function(n) {
    this.rules.splice(n, 1), this.length--;
  }, e.prototype.getRule = function(n) {
    return n < this.length ? this.rules[n] : "";
  }, e;
}(), Ha = So, md = { isServer: !So, useCSSOMInjection: !H0 }, Ll = function() {
  function e(n, t, r) {
    n === void 0 && (n = zn), t === void 0 && (t = {});
    var o = this;
    this.options = at(at({}, md), n), this.gs = t, this.names = new Map(r), this.server = !!n.isServer, !this.server && So && Ha && (Ha = !1, Va(this)), ta(this, function() {
      return function(i) {
        for (var s = i.getTag(), a = s.length, c = "", l = function(d) {
          var u = function(S) {
            return wo.get(S);
          }(d);
          if (u === void 0) return "continue";
          var v = i.names.get(u), g = s.getGroup(d);
          if (v === void 0 || !v.size || g.length === 0) return "continue";
          var h = "".concat(_n, ".g").concat(d, '[id="').concat(u, '"]'), x = "";
          v !== void 0 && v.forEach(function(S) {
            S.length > 0 && (x += "".concat(S, ","));
          }), c += "".concat(g).concat(h, '{content:"').concat(x, '"}').concat(Qs);
        }, f = 0; f < a; f++) l(f);
        return c;
      }(o);
    });
  }
  return e.registerId = function(n) {
    return Fr(n);
  }, e.prototype.rehydrate = function() {
    !this.server && So && Va(this);
  }, e.prototype.reconstructWithOptions = function(n, t) {
    return t === void 0 && (t = !0), new e(at(at({}, this.options), n), this.gs, t && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(n) {
    return this.gs[n] = (this.gs[n] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (n = function(t) {
      var r = t.useCSSOMInjection, o = t.target;
      return t.isServer ? new pd(o) : r ? new hd(o) : new xd(o);
    }(this.options), new id(n)));
    var n;
  }, e.prototype.hasNameForId = function(n, t) {
    return this.names.has(n) && this.names.get(n).has(t);
  }, e.prototype.registerName = function(n, t) {
    if (Fr(n), this.names.has(n)) this.names.get(n).add(t);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(t), this.names.set(n, r);
    }
  }, e.prototype.insertRules = function(n, t, r) {
    this.registerName(n, t), this.getTag().insertRules(Fr(n), r);
  }, e.prototype.clearNames = function(n) {
    this.names.has(n) && this.names.get(n).clear();
  }, e.prototype.clearRules = function(n) {
    this.getTag().clearGroup(Fr(n)), this.clearNames(n);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), gd = /&/g, vd = /^\s*\/\/.*$/gm;
function Ml(e, n) {
  return e.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(n, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(n, " ")), t.props = t.props.map(function(r) {
      return "".concat(n, " ").concat(r);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = Ml(t.children, n)), t;
  });
}
function yd(e) {
  var n, t, r, o = zn, i = o.options, s = i === void 0 ? zn : i, a = o.plugins, c = a === void 0 ? Wo : a, l = function(u, v, g) {
    return g.startsWith(t) && g.endsWith(t) && g.replaceAll(t, "").length > 0 ? ".".concat(n) : u;
  }, f = c.slice();
  f.push(function(u) {
    u.type === zo && u.value.includes("&") && (u.props[0] = u.props[0].replace(gd, t).replace(r, l));
  }), s.prefix && f.push(z0), f.push(D0);
  var d = function(u, v, g, h) {
    v === void 0 && (v = ""), g === void 0 && (g = ""), h === void 0 && (h = "&"), n = h, t = v, r = new RegExp("\\".concat(t, "\\b"), "g");
    var x = u.replace(vd, ""), S = L0(g || v ? "".concat(g, " ").concat(v, " { ").concat(x, " }") : x);
    s.namespace && (S = Ml(S, s.namespace));
    var b = [];
    return bo(S, B0(f.concat(F0(function(m) {
      return b.push(m);
    })))), b;
  };
  return d.hash = c.length ? c.reduce(function(u, v) {
    return v.name || Jn(15), xn(u, v.name);
  }, Tl).toString() : "", d;
}
var bd = new Ll(), Hi = yd(), Dl = Fe.createContext({ shouldForwardProp: void 0, styleSheet: bd, stylis: Hi });
Dl.Consumer;
Fe.createContext(void 0);
function Ua() {
  return tn(Dl);
}
var qa = function() {
  function e(n, t) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Hi);
      var s = r.name + i.hash;
      o.hasNameForId(r.id, s) || o.insertRules(r.id, s, i(r.rules, s, "@keyframes"));
    }, this.name = n, this.id = "sc-keyframes-".concat(n), this.rules = t, ta(this, function() {
      throw Jn(12, String(r.name));
    });
  }
  return e.prototype.getName = function(n) {
    return n === void 0 && (n = Hi), this.name + n.hash;
  }, e;
}(), Sd = function(e) {
  return e >= "A" && e <= "Z";
};
function Wa(e) {
  for (var n = "", t = 0; t < e.length; t++) {
    var r = e[t];
    if (t === 1 && r === "-" && e[0] === "-") return e;
    Sd(r) ? n += "-" + r.toLowerCase() : n += r;
  }
  return n.startsWith("ms-") ? "-" + n : n;
}
var Bl = function(e) {
  return e == null || e === !1 || e === "";
}, Fl = function(e) {
  var n, t, r = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !Bl(i) && (Array.isArray(i) && i.isCss || Vn(i) ? r.push("".concat(Wa(o), ":"), i, ";") : Hn(i) ? r.push.apply(r, Dn(Dn(["".concat(o, " {")], Fl(i), !1), ["}"], !1)) : r.push("".concat(Wa(o), ": ").concat((n = o, (t = i) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || t === 0 || n in V0 || n.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return r;
};
function yn(e, n, t, r) {
  if (Bl(e)) return [];
  if (ea(e)) return [".".concat(e.styledComponentId)];
  if (Vn(e)) {
    if (!Vn(i = e) || i.prototype && i.prototype.isReactComponent || !n) return [e];
    var o = e(n);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof qa || Hn(o) || o === null || console.error("".concat(Rl(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), yn(o, n, t, r);
  }
  var i;
  return e instanceof qa ? t ? (e.inject(t, r), [e.getName(r)]) : [e] : Hn(e) ? Fl(e) : Array.isArray(e) ? Array.prototype.concat.apply(Wo, e.map(function(s) {
    return yn(s, n, t, r);
  })) : [e.toString()];
}
function wd(e) {
  for (var n = 0; n < e.length; n += 1) {
    var t = e[n];
    if (Vn(t) && !ea(t)) return !1;
  }
  return !0;
}
var Ed = Ol(qo), _d = function() {
  function e(n, t, r) {
    this.rules = n, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && wd(n), this.componentId = t, this.baseHash = xn(Ed, t), this.baseStyle = r, Ll.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(n, t, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(n, t, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) o = mn(o, this.staticRulesId);
    else {
      var i = za(yn(this.rules, n, t, r)), s = zi(xn(this.baseHash, i) >>> 0);
      if (!t.hasNameForId(this.componentId, s)) {
        var a = r(i, ".".concat(s), void 0, this.componentId);
        t.insertRules(this.componentId, s, a);
      }
      o = mn(o, s), this.staticRulesId = s;
    }
    else {
      for (var c = xn(this.baseHash, r.hash), l = "", f = 0; f < this.rules.length; f++) {
        var d = this.rules[f];
        if (typeof d == "string") l += d, process.env.NODE_ENV !== "production" && (c = xn(c, d));
        else if (d) {
          var u = za(yn(d, n, t, r));
          c = xn(c, u + f), l += u;
        }
      }
      if (l) {
        var v = zi(c >>> 0);
        t.hasNameForId(this.componentId, v) || t.insertRules(this.componentId, v, r(l, ".".concat(v), void 0, this.componentId)), o = mn(o, v);
      }
    }
    return o;
  }, e;
}(), zl = Fe.createContext(void 0);
zl.Consumer;
var pi = {}, $a = /* @__PURE__ */ new Set();
function Cd(e, n, t) {
  var r = ea(e), o = e, i = !xi(e), s = n.attrs, a = s === void 0 ? Wo : s, c = n.componentId, l = c === void 0 ? function(T, y) {
    var O = typeof T != "string" ? "sc" : La(T);
    pi[O] = (pi[O] || 0) + 1;
    var C = "".concat(O, "-").concat(X0(qo + O + pi[O]));
    return y ? "".concat(y, "-").concat(C) : C;
  }(n.displayName, n.parentComponentId) : c, f = n.displayName, d = f === void 0 ? function(T) {
    return xi(T) ? "styled.".concat(T) : "Styled(".concat(Rl(T), ")");
  }(e) : f, u = n.displayName && n.componentId ? "".concat(La(n.displayName), "-").concat(n.componentId) : n.componentId || l, v = r && o.attrs ? o.attrs.concat(a).filter(Boolean) : a, g = n.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var h = o.shouldForwardProp;
    if (n.shouldForwardProp) {
      var x = n.shouldForwardProp;
      g = function(T, y) {
        return h(T, y) && x(T, y);
      };
    } else g = h;
  }
  var S = new _d(t, u, r ? o.componentStyle : void 0);
  function b(T, y) {
    return function(O, C, I) {
      var F = O.attrs, W = O.componentStyle, ne = O.defaultProps, X = O.foldedComponentIds, D = O.styledComponentId, V = O.target, q = Fe.useContext(zl), $ = Ua(), ee = O.shouldForwardProp || $.shouldForwardProp;
      process.env.NODE_ENV !== "production" && Aa(D);
      var K = q0(C, q, ne) || zn, Q = function(fe, pe, ge) {
        for (var j, N = at(at({}, pe), { className: void 0, theme: ge }), L = 0; L < fe.length; L += 1) {
          var B = Vn(j = fe[L]) ? j(N) : j;
          for (var E in B) N[E] = E === "className" ? mn(N[E], B[E]) : E === "style" ? at(at({}, N[E]), B[E]) : B[E];
        }
        return pe.className && (N.className = mn(N.className, pe.className)), N;
      }(F, C, K), oe = Q.as || V, ie = {};
      for (var Z in Q) Q[Z] === void 0 || Z[0] === "$" || Z === "as" || Z === "theme" && Q.theme === K || (Z === "forwardedAs" ? ie.as = Q.forwardedAs : ee && !ee(Z, oe) || (ie[Z] = Q[Z], ee || process.env.NODE_ENV !== "development" || w0(Z) || $a.has(Z) || !Fi.has(oe) || ($a.add(Z), console.warn('styled-components: it looks like an unknown prop "'.concat(Z, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var re = function(fe, pe) {
        var ge = Ua(), j = fe.generateAndInjectStyles(pe, ge.styleSheet, ge.stylis);
        return process.env.NODE_ENV !== "production" && Aa(j), j;
      }(W, Q);
      process.env.NODE_ENV !== "production" && O.warnTooManyClasses && O.warnTooManyClasses(re);
      var xe = mn(X, D);
      return re && (xe += " " + re), Q.className && (xe += " " + Q.className), ie[xi(oe) && !Fi.has(oe) ? "class" : "className"] = xe, I && (ie.ref = I), f0(oe, ie);
    }(m, T, y);
  }
  b.displayName = d;
  var m = Fe.forwardRef(b);
  return m.attrs = v, m.componentStyle = S, m.displayName = d, m.shouldForwardProp = g, m.foldedComponentIds = r ? mn(o.foldedComponentIds, o.styledComponentId) : "", m.styledComponentId = u, m.target = r ? o.target : e, Object.defineProperty(m, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(T) {
    this._foldedDefaultProps = r ? function(y) {
      for (var O = [], C = 1; C < arguments.length; C++) O[C - 1] = arguments[C];
      for (var I = 0, F = O; I < F.length; I++) Vi(y, F[I], !0);
      return y;
    }({}, o.defaultProps, T) : T;
  } }), process.env.NODE_ENV !== "production" && (U0(d, u), m.warnTooManyClasses = /* @__PURE__ */ function(T, y) {
    var O = {}, C = !1;
    return function(I) {
      if (!C && (O[I] = !0, Object.keys(O).length >= 200)) {
        var F = y ? ' with the id of "'.concat(y, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(T).concat(F, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), C = !0, O = {};
      }
    };
  }(d, u)), ta(m, function() {
    return ".".concat(m.styledComponentId);
  }), i && Nl(m, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), m;
}
function Ya(e, n) {
  for (var t = [e[0]], r = 0, o = n.length; r < o; r += 1) t.push(n[r], e[r + 1]);
  return t;
}
var Xa = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function Ad(e) {
  for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
  if (Vn(e) || Hn(e)) return Xa(yn(Ya(Wo, Dn([e], n, !0))));
  var r = e;
  return n.length === 0 && r.length === 1 && typeof r[0] == "string" ? yn(r) : Xa(yn(Ya(r, n)));
}
function Ui(e, n, t) {
  if (t === void 0 && (t = zn), !n) throw Jn(1, n);
  var r = function(o) {
    for (var i = [], s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
    return e(n, t, Ad.apply(void 0, Dn([o], i, !1)));
  };
  return r.attrs = function(o) {
    return Ui(e, n, at(at({}, t), { attrs: Array.prototype.concat(t.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return Ui(e, n, at(at({}, t), o));
  }, r;
}
var Vl = function(e) {
  return Ui(Cd, e);
}, _t = Vl;
Fi.forEach(function(e) {
  _t[e] = Vl(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var zr = "__sc-".concat(_n, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[zr] || (window[zr] = 0), window[zr] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[zr] += 1);
function Un(e, n) {
  const t = Eo();
  return Un = function(r, o) {
    return r = r - 494, t[r];
  }, Un(e, n);
}
function Eo() {
  const e = ["4382680QCyyfK", "span", "(((.+)+)+)", "40030lPlvKf", "div", "4659396esdvGH", "search", "canvas", "993924rRJeES", "toString", "7nzoLzz", "7954360zYKPxO", "23572089SpoOIT", "22BoOxGw", "apply", "constructo", "4640864cMJdAf"];
  return Eo = function() {
    return e;
  }, Eo();
}
const Rr = Un;
(function(e, n) {
  const t = Un, r = e();
  for (; ; )
    try {
      if (-parseInt(t(498)) / 1 * (parseInt(t(505)) / 2) + -parseInt(t(510)) / 3 + -parseInt(t(501)) / 4 + parseInt(t(496)) / 5 + -parseInt(t(507)) / 6 * (parseInt(t(495)) / 7) + -parseInt(t(502)) / 8 + parseInt(t(497)) / 9 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Eo, 953738);
const Td = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = Un;
      if (t) {
        const i = t[o(499)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), qi = Td(void 0, function() {
  const e = Un;
  return qi[e(494)]()[e(508)](e(504) + "+$")[e(494)]()[e(500) + "r"](qi)[e(508)](e(504) + "+$");
});
qi();
const Od = _t[Rr(506)]`
  flex-direction: column;
  border-radius: 15px;
  border: 3px solid #a0beeb;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
  justify-items: center;
  align-items: center;
`, Rd = _t[Rr(506)]`
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
`, Pd = _t[Rr(509)]`
  border-radius: 7px;
  display: inline;
  padding: 0;
  &:focus-visible {
    outline: none;
  }
`, kd = _t[Rr(503)]`
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
`, Id = _t[Rr(506)]`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  pointer-events: none;
`, Dt = /* @__PURE__ */ Object.create(null);
Dt.open = "0";
Dt.close = "1";
Dt.ping = "2";
Dt.pong = "3";
Dt.message = "4";
Dt.upgrade = "5";
Dt.noop = "6";
const oo = /* @__PURE__ */ Object.create(null);
Object.keys(Dt).forEach((e) => {
  oo[Dt[e]] = e;
});
const Wi = { type: "error", data: "parser error" }, Hl = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", Ul = typeof ArrayBuffer == "function", ql = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer, na = ({ type: e, data: n }, t, r) => Hl && n instanceof Blob ? t ? r(n) : Ga(n, r) : Ul && (n instanceof ArrayBuffer || ql(n)) ? t ? r(n) : Ga(new Blob([n]), r) : r(Dt[e] + (n || "")), Ga = (e, n) => {
  const t = new FileReader();
  return t.onload = function() {
    const r = t.result.split(",")[1];
    n("b" + (r || ""));
  }, t.readAsDataURL(e);
};
function Ka(e) {
  return e instanceof Uint8Array ? e : e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
let mi;
function Nd(e, n) {
  if (Hl && e.data instanceof Blob)
    return e.data.arrayBuffer().then(Ka).then(n);
  if (Ul && (e.data instanceof ArrayBuffer || ql(e.data)))
    return n(Ka(e.data));
  na(e, !1, (t) => {
    mi || (mi = new TextEncoder()), n(mi.encode(t));
  });
}
const Za = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", mr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < Za.length; e++)
  mr[Za.charCodeAt(e)] = e;
const jd = (e) => {
  let n = e.length * 0.75, t = e.length, r, o = 0, i, s, a, c;
  e[e.length - 1] === "=" && (n--, e[e.length - 2] === "=" && n--);
  const l = new ArrayBuffer(n), f = new Uint8Array(l);
  for (r = 0; r < t; r += 4)
    i = mr[e.charCodeAt(r)], s = mr[e.charCodeAt(r + 1)], a = mr[e.charCodeAt(r + 2)], c = mr[e.charCodeAt(r + 3)], f[o++] = i << 2 | s >> 4, f[o++] = (s & 15) << 4 | a >> 2, f[o++] = (a & 3) << 6 | c & 63;
  return l;
}, Ld = typeof ArrayBuffer == "function", ra = (e, n) => {
  if (typeof e != "string")
    return {
      type: "message",
      data: Wl(e, n)
    };
  const t = e.charAt(0);
  return t === "b" ? {
    type: "message",
    data: Md(e.substring(1), n)
  } : oo[t] ? e.length > 1 ? {
    type: oo[t],
    data: e.substring(1)
  } : {
    type: oo[t]
  } : Wi;
}, Md = (e, n) => {
  if (Ld) {
    const t = jd(e);
    return Wl(t, n);
  } else
    return { base64: !0, data: e };
}, Wl = (e, n) => {
  switch (n) {
    case "blob":
      return e instanceof Blob ? e : new Blob([e]);
    case "arraybuffer":
    default:
      return e instanceof ArrayBuffer ? e : e.buffer;
  }
}, $l = "", Dd = (e, n) => {
  const t = e.length, r = new Array(t);
  let o = 0;
  e.forEach((i, s) => {
    na(i, !1, (a) => {
      r[s] = a, ++o === t && n(r.join($l));
    });
  });
}, Bd = (e, n) => {
  const t = e.split($l), r = [];
  for (let o = 0; o < t.length; o++) {
    const i = ra(t[o], n);
    if (r.push(i), i.type === "error")
      break;
  }
  return r;
};
function Fd() {
  return new TransformStream({
    transform(e, n) {
      Nd(e, (t) => {
        const r = t.length;
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
        e.data && typeof e.data != "string" && (o[0] |= 128), n.enqueue(o), n.enqueue(t);
      });
    }
  });
}
let gi;
function Vr(e) {
  return e.reduce((n, t) => n + t.length, 0);
}
function Hr(e, n) {
  if (e[0].length === n)
    return e.shift();
  const t = new Uint8Array(n);
  let r = 0;
  for (let o = 0; o < n; o++)
    t[o] = e[0][r++], r === e[0].length && (e.shift(), r = 0);
  return e.length && r < e[0].length && (e[0] = e[0].slice(r)), t;
}
function zd(e, n) {
  gi || (gi = new TextDecoder());
  const t = [];
  let r = 0, o = -1, i = !1;
  return new TransformStream({
    transform(s, a) {
      for (t.push(s); ; ) {
        if (r === 0) {
          if (Vr(t) < 1)
            break;
          const c = Hr(t, 1);
          i = (c[0] & 128) === 128, o = c[0] & 127, o < 126 ? r = 3 : o === 126 ? r = 1 : r = 2;
        } else if (r === 1) {
          if (Vr(t) < 2)
            break;
          const c = Hr(t, 2);
          o = new DataView(c.buffer, c.byteOffset, c.length).getUint16(0), r = 3;
        } else if (r === 2) {
          if (Vr(t) < 8)
            break;
          const c = Hr(t, 8), l = new DataView(c.buffer, c.byteOffset, c.length), f = l.getUint32(0);
          if (f > Math.pow(2, 21) - 1) {
            a.enqueue(Wi);
            break;
          }
          o = f * Math.pow(2, 32) + l.getUint32(4), r = 3;
        } else {
          if (Vr(t) < o)
            break;
          const c = Hr(t, o);
          a.enqueue(ra(i ? c : gi.decode(c), n)), r = 0;
        }
        if (o === 0 || o > e) {
          a.enqueue(Wi);
          break;
        }
      }
    }
  });
}
const Yl = 4;
function He(e) {
  if (e) return Vd(e);
}
function Vd(e) {
  for (var n in He.prototype)
    e[n] = He.prototype[n];
  return e;
}
He.prototype.on = He.prototype.addEventListener = function(e, n) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(n), this;
};
He.prototype.once = function(e, n) {
  function t() {
    this.off(e, t), n.apply(this, arguments);
  }
  return t.fn = n, this.on(e, t), this;
};
He.prototype.off = He.prototype.removeListener = He.prototype.removeAllListeners = He.prototype.removeEventListener = function(e, n) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var t = this._callbacks["$" + e];
  if (!t) return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + e], this;
  for (var r, o = 0; o < t.length; o++)
    if (r = t[o], r === n || r.fn === n) {
      t.splice(o, 1);
      break;
    }
  return t.length === 0 && delete this._callbacks["$" + e], this;
};
He.prototype.emit = function(e) {
  this._callbacks = this._callbacks || {};
  for (var n = new Array(arguments.length - 1), t = this._callbacks["$" + e], r = 1; r < arguments.length; r++)
    n[r - 1] = arguments[r];
  if (t) {
    t = t.slice(0);
    for (var r = 0, o = t.length; r < o; ++r)
      t[r].apply(this, n);
  }
  return this;
};
He.prototype.emitReserved = He.prototype.emit;
He.prototype.listeners = function(e) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [];
};
He.prototype.hasListeners = function(e) {
  return !!this.listeners(e).length;
};
const $o = typeof Promise == "function" && typeof Promise.resolve == "function" ? (n) => Promise.resolve().then(n) : (n, t) => t(n, 0), xt = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), Hd = "arraybuffer";
function Xl(e, ...n) {
  return n.reduce((t, r) => (e.hasOwnProperty(r) && (t[r] = e[r]), t), {});
}
const Ud = xt.setTimeout, qd = xt.clearTimeout;
function Yo(e, n) {
  n.useNativeTimers ? (e.setTimeoutFn = Ud.bind(xt), e.clearTimeoutFn = qd.bind(xt)) : (e.setTimeoutFn = xt.setTimeout.bind(xt), e.clearTimeoutFn = xt.clearTimeout.bind(xt));
}
const Wd = 1.33;
function $d(e) {
  return typeof e == "string" ? Yd(e) : Math.ceil((e.byteLength || e.size) * Wd);
}
function Yd(e) {
  let n = 0, t = 0;
  for (let r = 0, o = e.length; r < o; r++)
    n = e.charCodeAt(r), n < 128 ? t += 1 : n < 2048 ? t += 2 : n < 55296 || n >= 57344 ? t += 3 : (r++, t += 4);
  return t;
}
function Gl() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function Xd(e) {
  let n = "";
  for (let t in e)
    e.hasOwnProperty(t) && (n.length && (n += "&"), n += encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
  return n;
}
function Gd(e) {
  let n = {}, t = e.split("&");
  for (let r = 0, o = t.length; r < o; r++) {
    let i = t[r].split("=");
    n[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
  }
  return n;
}
class Kd extends Error {
  constructor(n, t, r) {
    super(n), this.description = t, this.context = r, this.type = "TransportError";
  }
}
class oa extends He {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(n) {
    super(), this.writable = !1, Yo(this, n), this.opts = n, this.query = n.query, this.socket = n.socket, this.supportsBinary = !n.forceBase64;
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
  onError(n, t, r) {
    return super.emitReserved("error", new Kd(n, t, r)), this;
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
  send(n) {
    this.readyState === "open" && this.write(n);
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
  onData(n) {
    const t = ra(n, this.socket.binaryType);
    this.onPacket(t);
  }
  /**
   * Called with a decoded packet.
   *
   * @protected
   */
  onPacket(n) {
    super.emitReserved("packet", n);
  }
  /**
   * Called upon close.
   *
   * @protected
   */
  onClose(n) {
    this.readyState = "closed", super.emitReserved("close", n);
  }
  /**
   * Pauses the transport, in order not to lose packets during an upgrade.
   *
   * @param onPause
   */
  pause(n) {
  }
  createUri(n, t = {}) {
    return n + "://" + this._hostname() + this._port() + this.opts.path + this._query(t);
  }
  _hostname() {
    const n = this.opts.hostname;
    return n.indexOf(":") === -1 ? n : "[" + n + "]";
  }
  _port() {
    return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : "";
  }
  _query(n) {
    const t = Xd(n);
    return t.length ? "?" + t : "";
  }
}
class Zd extends oa {
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
  pause(n) {
    this.readyState = "pausing";
    const t = () => {
      this.readyState = "paused", n();
    };
    if (this._polling || !this.writable) {
      let r = 0;
      this._polling && (r++, this.once("pollComplete", function() {
        --r || t();
      })), this.writable || (r++, this.once("drain", function() {
        --r || t();
      }));
    } else
      t();
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
  onData(n) {
    const t = (r) => {
      if (this.readyState === "opening" && r.type === "open" && this.onOpen(), r.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(r);
    };
    Bd(n, this.socket.binaryType).forEach(t), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
  }
  /**
   * For polling, send a close packet.
   *
   * @protected
   */
  doClose() {
    const n = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? n() : this.once("open", n);
  }
  /**
   * Writes a packets payload.
   *
   * @param {Array} packets - data packets
   * @protected
   */
  write(n) {
    this.writable = !1, Dd(n, (t) => {
      this.doWrite(t, () => {
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
    const n = this.opts.secure ? "https" : "http", t = this.query || {};
    return this.opts.timestampRequests !== !1 && (t[this.opts.timestampParam] = Gl()), !this.supportsBinary && !t.sid && (t.b64 = 1), this.createUri(n, t);
  }
}
let Kl = !1;
try {
  Kl = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const Jd = Kl;
function Qd() {
}
class eh extends Zd {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(n) {
    if (super(n), typeof location < "u") {
      const t = location.protocol === "https:";
      let r = location.port;
      r || (r = t ? "443" : "80"), this.xd = typeof location < "u" && n.hostname !== location.hostname || r !== n.port;
    }
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(n, t) {
    const r = this.request({
      method: "POST",
      data: n
    });
    r.on("success", t), r.on("error", (o, i) => {
      this.onError("xhr post error", o, i);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    const n = this.request();
    n.on("data", this.onData.bind(this)), n.on("error", (t, r) => {
      this.onError("xhr poll error", t, r);
    }), this.pollXhr = n;
  }
}
let jn = class io extends He {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(n, t, r) {
    super(), this.createRequest = n, Yo(this, r), this._opts = r, this._method = r.method || "GET", this._uri = t, this._data = r.data !== void 0 ? r.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var n;
    const t = Xl(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    t.xdomain = !!this._opts.xd;
    const r = this._xhr = this.createRequest(t);
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
      (n = this._opts.cookieJar) === null || n === void 0 || n.addCookies(r), "withCredentials" in r && (r.withCredentials = this._opts.withCredentials), this._opts.requestTimeout && (r.timeout = this._opts.requestTimeout), r.onreadystatechange = () => {
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
    typeof document < "u" && (this._index = io.requestsCount++, io.requests[this._index] = this);
  }
  /**
   * Called upon error.
   *
   * @private
   */
  _onError(n) {
    this.emitReserved("error", n, this._xhr), this._cleanup(!0);
  }
  /**
   * Cleans up house.
   *
   * @private
   */
  _cleanup(n) {
    if (!(typeof this._xhr > "u" || this._xhr === null)) {
      if (this._xhr.onreadystatechange = Qd, n)
        try {
          this._xhr.abort();
        } catch {
        }
      typeof document < "u" && delete io.requests[this._index], this._xhr = null;
    }
  }
  /**
   * Called upon load.
   *
   * @private
   */
  _onLoad() {
    const n = this._xhr.responseText;
    n !== null && (this.emitReserved("data", n), this.emitReserved("success"), this._cleanup());
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
jn.requestsCount = 0;
jn.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", Ja);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in xt ? "pagehide" : "unload";
    addEventListener(e, Ja, !1);
  }
}
function Ja() {
  for (let e in jn.requests)
    jn.requests.hasOwnProperty(e) && jn.requests[e].abort();
}
const th = function() {
  const e = Zl({
    xdomain: !1
  });
  return e && e.responseType !== null;
}();
class nh extends eh {
  constructor(n) {
    super(n);
    const t = n && n.forceBase64;
    this.supportsBinary = th && !t;
  }
  request(n = {}) {
    return Object.assign(n, { xd: this.xd }, this.opts), new jn(Zl, this.uri(), n);
  }
}
function Zl(e) {
  const n = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!n || Jd))
      return new XMLHttpRequest();
  } catch {
  }
  if (!n)
    try {
      return new xt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const Jl = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class rh extends oa {
  get name() {
    return "websocket";
  }
  doOpen() {
    const n = this.uri(), t = this.opts.protocols, r = Jl ? {} : Xl(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(n, t, r);
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
    }, this.ws.onclose = (n) => this.onClose({
      description: "websocket connection closed",
      context: n
    }), this.ws.onmessage = (n) => this.onData(n.data), this.ws.onerror = (n) => this.onError("websocket error", n);
  }
  write(n) {
    this.writable = !1;
    for (let t = 0; t < n.length; t++) {
      const r = n[t], o = t === n.length - 1;
      na(r, this.supportsBinary, (i) => {
        try {
          this.doWrite(r, i);
        } catch {
        }
        o && $o(() => {
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
    const n = this.opts.secure ? "wss" : "ws", t = this.query || {};
    return this.opts.timestampRequests && (t[this.opts.timestampParam] = Gl()), this.supportsBinary || (t.b64 = 1), this.createUri(n, t);
  }
}
const vi = xt.WebSocket || xt.MozWebSocket;
class oh extends rh {
  createSocket(n, t, r) {
    return Jl ? new vi(n, t, r) : t ? new vi(n, t) : new vi(n);
  }
  doWrite(n, t) {
    this.ws.send(t);
  }
}
class ih extends oa {
  get name() {
    return "webtransport";
  }
  doOpen() {
    try {
      this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
    } catch (n) {
      return this.emitReserved("error", n);
    }
    this._transport.closed.then(() => {
      this.onClose();
    }).catch((n) => {
      this.onError("webtransport error", n);
    }), this._transport.ready.then(() => {
      this._transport.createBidirectionalStream().then((n) => {
        const t = zd(Number.MAX_SAFE_INTEGER, this.socket.binaryType), r = n.readable.pipeThrough(t).getReader(), o = Fd();
        o.readable.pipeTo(n.writable), this._writer = o.writable.getWriter();
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
  write(n) {
    this.writable = !1;
    for (let t = 0; t < n.length; t++) {
      const r = n[t], o = t === n.length - 1;
      this._writer.write(r).then(() => {
        o && $o(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var n;
    (n = this._transport) === null || n === void 0 || n.close();
  }
}
const sh = {
  websocket: oh,
  webtransport: ih,
  polling: nh
}, ah = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, ch = [
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
function $i(e) {
  if (e.length > 8e3)
    throw "URI too long";
  const n = e, t = e.indexOf("["), r = e.indexOf("]");
  t != -1 && r != -1 && (e = e.substring(0, t) + e.substring(t, r).replace(/:/g, ";") + e.substring(r, e.length));
  let o = ah.exec(e || ""), i = {}, s = 14;
  for (; s--; )
    i[ch[s]] = o[s] || "";
  return t != -1 && r != -1 && (i.source = n, i.host = i.host.substring(1, i.host.length - 1).replace(/;/g, ":"), i.authority = i.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), i.ipv6uri = !0), i.pathNames = lh(i, i.path), i.queryKey = uh(i, i.query), i;
}
function lh(e, n) {
  const t = /\/{2,9}/g, r = n.replace(t, "/").split("/");
  return (n.slice(0, 1) == "/" || n.length === 0) && r.splice(0, 1), n.slice(-1) == "/" && r.splice(r.length - 1, 1), r;
}
function uh(e, n) {
  const t = {};
  return n.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(r, o, i) {
    o && (t[o] = i);
  }), t;
}
const Yi = typeof addEventListener == "function" && typeof removeEventListener == "function", so = [];
Yi && addEventListener("offline", () => {
  so.forEach((e) => e());
}, !1);
class en extends He {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(n, t) {
    if (super(), this.binaryType = Hd, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, n && typeof n == "object" && (t = n, n = null), n) {
      const r = $i(n);
      t.hostname = r.host, t.secure = r.protocol === "https" || r.protocol === "wss", t.port = r.port, r.query && (t.query = r.query);
    } else t.host && (t.hostname = $i(t.host).host);
    Yo(this, t), this.secure = t.secure != null ? t.secure : typeof location < "u" && location.protocol === "https:", t.hostname && !t.port && (t.port = this.secure ? "443" : "80"), this.hostname = t.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = t.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, t.transports.forEach((r) => {
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
    }, t), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = Gd(this.opts.query)), Yi && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, so.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} name - transport name
   * @return {Transport}
   * @private
   */
  createTransport(n) {
    const t = Object.assign({}, this.opts.query);
    t.EIO = Yl, t.transport = n, this.id && (t.sid = this.id);
    const r = Object.assign({}, this.opts, {
      query: t,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[n]);
    return new this._transportsByName[n](r);
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
    const n = this.opts.rememberUpgrade && en.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
    this.readyState = "opening";
    const t = this.createTransport(n);
    t.open(), this.setTransport(t);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(n) {
    this.transport && this.transport.removeAllListeners(), this.transport = n, n.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", (t) => this._onClose("transport close", t));
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    this.readyState = "open", en.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
  }
  /**
   * Handles a packet.
   *
   * @private
   */
  _onPacket(n) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
      switch (this.emitReserved("packet", n), this.emitReserved("heartbeat"), n.type) {
        case "open":
          this.onHandshake(JSON.parse(n.data));
          break;
        case "ping":
          this._sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong"), this._resetPingTimeout();
          break;
        case "error":
          const t = new Error("server error");
          t.code = n.data, this._onError(t);
          break;
        case "message":
          this.emitReserved("data", n.data), this.emitReserved("message", n.data);
          break;
      }
  }
  /**
   * Called upon handshake completion.
   *
   * @param {Object} data - handshake obj
   * @private
   */
  onHandshake(n) {
    this.emitReserved("handshake", n), this.id = n.sid, this.transport.query.sid = n.sid, this._pingInterval = n.pingInterval, this._pingTimeout = n.pingTimeout, this._maxPayload = n.maxPayload, this.onOpen(), this.readyState !== "closed" && this._resetPingTimeout();
  }
  /**
   * Sets and resets ping timeout timer based on server pings.
   *
   * @private
   */
  _resetPingTimeout() {
    this.clearTimeoutFn(this._pingTimeoutTimer);
    const n = this._pingInterval + this._pingTimeout;
    this._pingTimeoutTime = Date.now() + n, this._pingTimeoutTimer = this.setTimeoutFn(() => {
      this._onClose("ping timeout");
    }, n), this.opts.autoUnref && this._pingTimeoutTimer.unref();
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
      const n = this._getWritablePackets();
      this.transport.send(n), this._prevBufferLen = n.length, this.emitReserved("flush");
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
    let t = 1;
    for (let r = 0; r < this.writeBuffer.length; r++) {
      const o = this.writeBuffer[r].data;
      if (o && (t += $d(o)), r > 0 && t > this._maxPayload)
        return this.writeBuffer.slice(0, r);
      t += 2;
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
    const n = Date.now() > this._pingTimeoutTime;
    return n && (this._pingTimeoutTime = 0, $o(() => {
      this._onClose("ping timeout");
    }, this.setTimeoutFn)), n;
  }
  /**
   * Sends a message.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  write(n, t, r) {
    return this._sendPacket("message", n, t, r), this;
  }
  /**
   * Sends a message. Alias of {@link Socket#write}.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  send(n, t, r) {
    return this._sendPacket("message", n, t, r), this;
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
  _sendPacket(n, t, r, o) {
    if (typeof t == "function" && (o = t, t = void 0), typeof r == "function" && (o = r, r = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    r = r || {}, r.compress = r.compress !== !1;
    const i = {
      type: n,
      data: t,
      options: r
    };
    this.emitReserved("packetCreate", i), this.writeBuffer.push(i), o && this.once("flush", o), this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const n = () => {
      this._onClose("forced close"), this.transport.close();
    }, t = () => {
      this.off("upgrade", t), this.off("upgradeError", t), n();
    }, r = () => {
      this.once("upgrade", t), this.once("upgradeError", t);
    };
    return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
      this.upgrading ? r() : n();
    }) : this.upgrading ? r() : n()), this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  _onError(n) {
    if (en.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
      return this.transports.shift(), this._open();
    this.emitReserved("error", n), this._onClose("transport error", n);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  _onClose(n, t) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), Yi && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const r = so.indexOf(this._offlineEventListener);
        r !== -1 && so.splice(r, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", n, t), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
en.protocol = Yl;
class fh extends en {
  constructor() {
    super(...arguments), this._upgrades = [];
  }
  onOpen() {
    if (super.onOpen(), this.readyState === "open" && this.opts.upgrade)
      for (let n = 0; n < this._upgrades.length; n++)
        this._probe(this._upgrades[n]);
  }
  /**
   * Probes a transport.
   *
   * @param {String} name - transport name
   * @private
   */
  _probe(n) {
    let t = this.createTransport(n), r = !1;
    en.priorWebsocketSuccess = !1;
    const o = () => {
      r || (t.send([{ type: "ping", data: "probe" }]), t.once("packet", (d) => {
        if (!r)
          if (d.type === "pong" && d.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", t), !t)
              return;
            en.priorWebsocketSuccess = t.name === "websocket", this.transport.pause(() => {
              r || this.readyState !== "closed" && (f(), this.setTransport(t), t.send([{ type: "upgrade" }]), this.emitReserved("upgrade", t), t = null, this.upgrading = !1, this.flush());
            });
          } else {
            const u = new Error("probe error");
            u.transport = t.name, this.emitReserved("upgradeError", u);
          }
      }));
    };
    function i() {
      r || (r = !0, f(), t.close(), t = null);
    }
    const s = (d) => {
      const u = new Error("probe error: " + d);
      u.transport = t.name, i(), this.emitReserved("upgradeError", u);
    };
    function a() {
      s("transport closed");
    }
    function c() {
      s("socket closed");
    }
    function l(d) {
      t && d.name !== t.name && i();
    }
    const f = () => {
      t.removeListener("open", o), t.removeListener("error", s), t.removeListener("close", a), this.off("close", c), this.off("upgrading", l);
    };
    t.once("open", o), t.once("error", s), t.once("close", a), this.once("close", c), this.once("upgrading", l), this._upgrades.indexOf("webtransport") !== -1 && n !== "webtransport" ? this.setTimeoutFn(() => {
      r || t.open();
    }, 200) : t.open();
  }
  onHandshake(n) {
    this._upgrades = this._filterUpgrades(n.upgrades), super.onHandshake(n);
  }
  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} upgrades - server upgrades
   * @private
   */
  _filterUpgrades(n) {
    const t = [];
    for (let r = 0; r < n.length; r++)
      ~this.transports.indexOf(n[r]) && t.push(n[r]);
    return t;
  }
}
let dh = class extends fh {
  constructor(n, t = {}) {
    const r = typeof n == "object" ? n : t;
    (!r.transports || r.transports && typeof r.transports[0] == "string") && (r.transports = (r.transports || ["polling", "websocket", "webtransport"]).map((o) => sh[o]).filter((o) => !!o)), super(n, r);
  }
};
function hh(e, n = "", t) {
  let r = e;
  t = t || typeof location < "u" && location, e == null && (e = t.protocol + "//" + t.host), typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = t.protocol + e : e = t.host + e), /^(https?|wss?):\/\//.test(e) || (typeof t < "u" ? e = t.protocol + "//" + e : e = "https://" + e), r = $i(e)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
  const i = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return r.id = r.protocol + "://" + i + ":" + r.port + n, r.href = r.protocol + "://" + i + (t && t.port === r.port ? "" : ":" + r.port), r;
}
const xh = typeof ArrayBuffer == "function", ph = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer, Ql = Object.prototype.toString, mh = typeof Blob == "function" || typeof Blob < "u" && Ql.call(Blob) === "[object BlobConstructor]", gh = typeof File == "function" || typeof File < "u" && Ql.call(File) === "[object FileConstructor]";
function ia(e) {
  return xh && (e instanceof ArrayBuffer || ph(e)) || mh && e instanceof Blob || gh && e instanceof File;
}
function ao(e, n) {
  if (!e || typeof e != "object")
    return !1;
  if (Array.isArray(e)) {
    for (let t = 0, r = e.length; t < r; t++)
      if (ao(e[t]))
        return !0;
    return !1;
  }
  if (ia(e))
    return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return ao(e.toJSON(), !0);
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && ao(e[t]))
      return !0;
  return !1;
}
function vh(e) {
  const n = [], t = e.data, r = e;
  return r.data = Xi(t, n), r.attachments = n.length, { packet: r, buffers: n };
}
function Xi(e, n) {
  if (!e)
    return e;
  if (ia(e)) {
    const t = { _placeholder: !0, num: n.length };
    return n.push(e), t;
  } else if (Array.isArray(e)) {
    const t = new Array(e.length);
    for (let r = 0; r < e.length; r++)
      t[r] = Xi(e[r], n);
    return t;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const t = {};
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (t[r] = Xi(e[r], n));
    return t;
  }
  return e;
}
function yh(e, n) {
  return e.data = Gi(e.data, n), delete e.attachments, e;
}
function Gi(e, n) {
  if (!e)
    return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < n.length)
      return n[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let t = 0; t < e.length; t++)
      e[t] = Gi(e[t], n);
  else if (typeof e == "object")
    for (const t in e)
      Object.prototype.hasOwnProperty.call(e, t) && (e[t] = Gi(e[t], n));
  return e;
}
const bh = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], Sh = 5;
var de;
(function(e) {
  e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK";
})(de || (de = {}));
class wh {
  /**
   * Encoder constructor
   *
   * @param {function} replacer - custom replacer to pass down to JSON.parse
   */
  constructor(n) {
    this.replacer = n;
  }
  /**
   * Encode a packet as a single string if non-binary, or as a
   * buffer sequence, depending on packet type.
   *
   * @param {Object} obj - packet object
   */
  encode(n) {
    return (n.type === de.EVENT || n.type === de.ACK) && ao(n) ? this.encodeAsBinary({
      type: n.type === de.EVENT ? de.BINARY_EVENT : de.BINARY_ACK,
      nsp: n.nsp,
      data: n.data,
      id: n.id
    }) : [this.encodeAsString(n)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(n) {
    let t = "" + n.type;
    return (n.type === de.BINARY_EVENT || n.type === de.BINARY_ACK) && (t += n.attachments + "-"), n.nsp && n.nsp !== "/" && (t += n.nsp + ","), n.id != null && (t += n.id), n.data != null && (t += JSON.stringify(n.data, this.replacer)), t;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(n) {
    const t = vh(n), r = this.encodeAsString(t.packet), o = t.buffers;
    return o.unshift(r), o;
  }
}
function Qa(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
class sa extends He {
  /**
   * Decoder constructor
   *
   * @param {function} reviver - custom reviver to pass down to JSON.stringify
   */
  constructor(n) {
    super(), this.reviver = n;
  }
  /**
   * Decodes an encoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   */
  add(n) {
    let t;
    if (typeof n == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      t = this.decodeString(n);
      const r = t.type === de.BINARY_EVENT;
      r || t.type === de.BINARY_ACK ? (t.type = r ? de.EVENT : de.ACK, this.reconstructor = new Eh(t), t.attachments === 0 && super.emitReserved("decoded", t)) : super.emitReserved("decoded", t);
    } else if (ia(n) || n.base64)
      if (this.reconstructor)
        t = this.reconstructor.takeBinaryData(n), t && (this.reconstructor = null, super.emitReserved("decoded", t));
      else
        throw new Error("got binary data when not reconstructing a packet");
    else
      throw new Error("Unknown type: " + n);
  }
  /**
   * Decode a packet String (JSON data)
   *
   * @param {String} str
   * @return {Object} packet
   */
  decodeString(n) {
    let t = 0;
    const r = {
      type: Number(n.charAt(0))
    };
    if (de[r.type] === void 0)
      throw new Error("unknown packet type " + r.type);
    if (r.type === de.BINARY_EVENT || r.type === de.BINARY_ACK) {
      const i = t + 1;
      for (; n.charAt(++t) !== "-" && t != n.length; )
        ;
      const s = n.substring(i, t);
      if (s != Number(s) || n.charAt(t) !== "-")
        throw new Error("Illegal attachments");
      r.attachments = Number(s);
    }
    if (n.charAt(t + 1) === "/") {
      const i = t + 1;
      for (; ++t && !(n.charAt(t) === "," || t === n.length); )
        ;
      r.nsp = n.substring(i, t);
    } else
      r.nsp = "/";
    const o = n.charAt(t + 1);
    if (o !== "" && Number(o) == o) {
      const i = t + 1;
      for (; ++t; ) {
        const s = n.charAt(t);
        if (s == null || Number(s) != s) {
          --t;
          break;
        }
        if (t === n.length)
          break;
      }
      r.id = Number(n.substring(i, t + 1));
    }
    if (n.charAt(++t)) {
      const i = this.tryParse(n.substr(t));
      if (sa.isPayloadValid(r.type, i))
        r.data = i;
      else
        throw new Error("invalid payload");
    }
    return r;
  }
  tryParse(n) {
    try {
      return JSON.parse(n, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(n, t) {
    switch (n) {
      case de.CONNECT:
        return Qa(t);
      case de.DISCONNECT:
        return t === void 0;
      case de.CONNECT_ERROR:
        return typeof t == "string" || Qa(t);
      case de.EVENT:
      case de.BINARY_EVENT:
        return Array.isArray(t) && (typeof t[0] == "number" || typeof t[0] == "string" && bh.indexOf(t[0]) === -1);
      case de.ACK:
      case de.BINARY_ACK:
        return Array.isArray(t);
    }
  }
  /**
   * Deallocates a parser's resources
   */
  destroy() {
    this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null);
  }
}
class Eh {
  constructor(n) {
    this.packet = n, this.buffers = [], this.reconPack = n;
  }
  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   */
  takeBinaryData(n) {
    if (this.buffers.push(n), this.buffers.length === this.reconPack.attachments) {
      const t = yh(this.reconPack, this.buffers);
      return this.finishedReconstruction(), t;
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
const _h = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: sa,
  Encoder: wh,
  get PacketType() {
    return de;
  },
  protocol: Sh
}, Symbol.toStringTag, { value: "Module" }));
function vt(e, n, t) {
  return e.on(n, t), function() {
    e.off(n, t);
  };
}
const Ch = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class eu extends He {
  /**
   * `Socket` constructor.
   */
  constructor(n, t, r) {
    super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = n, this.nsp = t, r && r.auth && (this.auth = r.auth), this._opts = Object.assign({}, r), this.io._autoConnect && this.open();
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
    const n = this.io;
    this.subs = [
      vt(n, "open", this.onopen.bind(this)),
      vt(n, "packet", this.onpacket.bind(this)),
      vt(n, "error", this.onerror.bind(this)),
      vt(n, "close", this.onclose.bind(this))
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
  send(...n) {
    return n.unshift("message"), this.emit.apply(this, n), this;
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
  emit(n, ...t) {
    var r, o, i;
    if (Ch.hasOwnProperty(n))
      throw new Error('"' + n.toString() + '" is a reserved event name');
    if (t.unshift(n), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(t), this;
    const s = {
      type: de.EVENT,
      data: t
    };
    if (s.options = {}, s.options.compress = this.flags.compress !== !1, typeof t[t.length - 1] == "function") {
      const f = this.ids++, d = t.pop();
      this._registerAckCallback(f, d), s.id = f;
    }
    const a = (o = (r = this.io.engine) === null || r === void 0 ? void 0 : r.transport) === null || o === void 0 ? void 0 : o.writable, c = this.connected && !(!((i = this.io.engine) === null || i === void 0) && i._hasPingExpired());
    return this.flags.volatile && !a || (c ? (this.notifyOutgoingListeners(s), this.packet(s)) : this.sendBuffer.push(s)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(n, t) {
    var r;
    const o = (r = this.flags.timeout) !== null && r !== void 0 ? r : this._opts.ackTimeout;
    if (o === void 0) {
      this.acks[n] = t;
      return;
    }
    const i = this.io.setTimeoutFn(() => {
      delete this.acks[n];
      for (let a = 0; a < this.sendBuffer.length; a++)
        this.sendBuffer[a].id === n && this.sendBuffer.splice(a, 1);
      t.call(this, new Error("operation has timed out"));
    }, o), s = (...a) => {
      this.io.clearTimeoutFn(i), t.apply(this, a);
    };
    s.withError = !0, this.acks[n] = s;
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
  emitWithAck(n, ...t) {
    return new Promise((r, o) => {
      const i = (s, a) => s ? o(s) : r(a);
      i.withError = !0, t.push(i), this.emit(n, ...t);
    });
  }
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
  _addToQueue(n) {
    let t;
    typeof n[n.length - 1] == "function" && (t = n.pop());
    const r = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: n,
      flags: Object.assign({ fromQueue: !0 }, this.flags)
    };
    n.push((o, ...i) => r !== this._queue[0] ? void 0 : (o !== null ? r.tryCount > this._opts.retries && (this._queue.shift(), t && t(o)) : (this._queue.shift(), t && t(null, ...i)), r.pending = !1, this._drainQueue())), this._queue.push(r), this._drainQueue();
  }
  /**
   * Send the first packet of the queue, and wait for an acknowledgement from the server.
   * @param force - whether to resend a packet that has not been acknowledged yet
   *
   * @private
   */
  _drainQueue(n = !1) {
    if (!this.connected || this._queue.length === 0)
      return;
    const t = this._queue[0];
    t.pending && !n || (t.pending = !0, t.tryCount++, this.flags = t.flags, this.emit.apply(this, t.args));
  }
  /**
   * Sends a packet.
   *
   * @param packet
   * @private
   */
  packet(n) {
    n.nsp = this.nsp, this.io._packet(n);
  }
  /**
   * Called upon engine `open`.
   *
   * @private
   */
  onopen() {
    typeof this.auth == "function" ? this.auth((n) => {
      this._sendConnectPacket(n);
    }) : this._sendConnectPacket(this.auth);
  }
  /**
   * Sends a CONNECT packet to initiate the Socket.IO session.
   *
   * @param data
   * @private
   */
  _sendConnectPacket(n) {
    this.packet({
      type: de.CONNECT,
      data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, n) : n
    });
  }
  /**
   * Called upon engine or manager `error`.
   *
   * @param err
   * @private
   */
  onerror(n) {
    this.connected || this.emitReserved("connect_error", n);
  }
  /**
   * Called upon engine `close`.
   *
   * @param reason
   * @param description
   * @private
   */
  onclose(n, t) {
    this.connected = !1, delete this.id, this.emitReserved("disconnect", n, t), this._clearAcks();
  }
  /**
   * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
   * the server.
   *
   * @private
   */
  _clearAcks() {
    Object.keys(this.acks).forEach((n) => {
      if (!this.sendBuffer.some((r) => String(r.id) === n)) {
        const r = this.acks[n];
        delete this.acks[n], r.withError && r.call(this, new Error("socket has been disconnected"));
      }
    });
  }
  /**
   * Called with socket packet.
   *
   * @param packet
   * @private
   */
  onpacket(n) {
    if (n.nsp === this.nsp)
      switch (n.type) {
        case de.CONNECT:
          n.data && n.data.sid ? this.onconnect(n.data.sid, n.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case de.EVENT:
        case de.BINARY_EVENT:
          this.onevent(n);
          break;
        case de.ACK:
        case de.BINARY_ACK:
          this.onack(n);
          break;
        case de.DISCONNECT:
          this.ondisconnect();
          break;
        case de.CONNECT_ERROR:
          this.destroy();
          const r = new Error(n.data.message);
          r.data = n.data.data, this.emitReserved("connect_error", r);
          break;
      }
  }
  /**
   * Called upon a server event.
   *
   * @param packet
   * @private
   */
  onevent(n) {
    const t = n.data || [];
    n.id != null && t.push(this.ack(n.id)), this.connected ? this.emitEvent(t) : this.receiveBuffer.push(Object.freeze(t));
  }
  emitEvent(n) {
    if (this._anyListeners && this._anyListeners.length) {
      const t = this._anyListeners.slice();
      for (const r of t)
        r.apply(this, n);
    }
    super.emit.apply(this, n), this._pid && n.length && typeof n[n.length - 1] == "string" && (this._lastOffset = n[n.length - 1]);
  }
  /**
   * Produces an ack callback to emit with an event.
   *
   * @private
   */
  ack(n) {
    const t = this;
    let r = !1;
    return function(...o) {
      r || (r = !0, t.packet({
        type: de.ACK,
        id: n,
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
  onack(n) {
    const t = this.acks[n.id];
    typeof t == "function" && (delete this.acks[n.id], t.withError && n.data.unshift(null), t.apply(this, n.data));
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(n, t) {
    this.id = n, this.recovered = t && this._pid === t, this._pid = t, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0);
  }
  /**
   * Emit buffered events (received and emitted).
   *
   * @private
   */
  emitBuffered() {
    this.receiveBuffer.forEach((n) => this.emitEvent(n)), this.receiveBuffer = [], this.sendBuffer.forEach((n) => {
      this.notifyOutgoingListeners(n), this.packet(n);
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
    this.subs && (this.subs.forEach((n) => n()), this.subs = void 0), this.io._destroy(this);
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
    return this.connected && this.packet({ type: de.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
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
  compress(n) {
    return this.flags.compress = n, this;
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
  timeout(n) {
    return this.flags.timeout = n, this;
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
  onAny(n) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.push(n), this;
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
  prependAny(n) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(n), this;
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
  offAny(n) {
    if (!this._anyListeners)
      return this;
    if (n) {
      const t = this._anyListeners;
      for (let r = 0; r < t.length; r++)
        if (n === t[r])
          return t.splice(r, 1), this;
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
  onAnyOutgoing(n) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(n), this;
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
  prependAnyOutgoing(n) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(n), this;
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
  offAnyOutgoing(n) {
    if (!this._anyOutgoingListeners)
      return this;
    if (n) {
      const t = this._anyOutgoingListeners;
      for (let r = 0; r < t.length; r++)
        if (n === t[r])
          return t.splice(r, 1), this;
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
  notifyOutgoingListeners(n) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const t = this._anyOutgoingListeners.slice();
      for (const r of t)
        r.apply(this, n.data);
    }
  }
}
function Qn(e) {
  e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0;
}
Qn.prototype.duration = function() {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var n = Math.random(), t = Math.floor(n * this.jitter * e);
    e = (Math.floor(n * 10) & 1) == 0 ? e - t : e + t;
  }
  return Math.min(e, this.max) | 0;
};
Qn.prototype.reset = function() {
  this.attempts = 0;
};
Qn.prototype.setMin = function(e) {
  this.ms = e;
};
Qn.prototype.setMax = function(e) {
  this.max = e;
};
Qn.prototype.setJitter = function(e) {
  this.jitter = e;
};
class Ki extends He {
  constructor(n, t) {
    var r;
    super(), this.nsps = {}, this.subs = [], n && typeof n == "object" && (t = n, n = void 0), t = t || {}, t.path = t.path || "/socket.io", this.opts = t, Yo(this, t), this.reconnection(t.reconnection !== !1), this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0), this.reconnectionDelay(t.reconnectionDelay || 1e3), this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3), this.randomizationFactor((r = t.randomizationFactor) !== null && r !== void 0 ? r : 0.5), this.backoff = new Qn({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(t.timeout == null ? 2e4 : t.timeout), this._readyState = "closed", this.uri = n;
    const o = t.parser || _h;
    this.encoder = new o.Encoder(), this.decoder = new o.Decoder(), this._autoConnect = t.autoConnect !== !1, this._autoConnect && this.open();
  }
  reconnection(n) {
    return arguments.length ? (this._reconnection = !!n, n || (this.skipReconnect = !0), this) : this._reconnection;
  }
  reconnectionAttempts(n) {
    return n === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = n, this);
  }
  reconnectionDelay(n) {
    var t;
    return n === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = n, (t = this.backoff) === null || t === void 0 || t.setMin(n), this);
  }
  randomizationFactor(n) {
    var t;
    return n === void 0 ? this._randomizationFactor : (this._randomizationFactor = n, (t = this.backoff) === null || t === void 0 || t.setJitter(n), this);
  }
  reconnectionDelayMax(n) {
    var t;
    return n === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = n, (t = this.backoff) === null || t === void 0 || t.setMax(n), this);
  }
  timeout(n) {
    return arguments.length ? (this._timeout = n, this) : this._timeout;
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
  open(n) {
    if (~this._readyState.indexOf("open"))
      return this;
    this.engine = new dh(this.uri, this.opts);
    const t = this.engine, r = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const o = vt(t, "open", function() {
      r.onopen(), n && n();
    }), i = (a) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", a), n ? n(a) : this.maybeReconnectOnOpen();
    }, s = vt(t, "error", i);
    if (this._timeout !== !1) {
      const a = this._timeout, c = this.setTimeoutFn(() => {
        o(), i(new Error("timeout")), t.close();
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
  connect(n) {
    return this.open(n);
  }
  /**
   * Called upon transport open.
   *
   * @private
   */
  onopen() {
    this.cleanup(), this._readyState = "open", this.emitReserved("open");
    const n = this.engine;
    this.subs.push(
      vt(n, "ping", this.onping.bind(this)),
      vt(n, "data", this.ondata.bind(this)),
      vt(n, "error", this.onerror.bind(this)),
      vt(n, "close", this.onclose.bind(this)),
      // @ts-ignore
      vt(this.decoder, "decoded", this.ondecoded.bind(this))
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
  ondata(n) {
    try {
      this.decoder.add(n);
    } catch (t) {
      this.onclose("parse error", t);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(n) {
    $o(() => {
      this.emitReserved("packet", n);
    }, this.setTimeoutFn);
  }
  /**
   * Called upon socket error.
   *
   * @private
   */
  onerror(n) {
    this.emitReserved("error", n);
  }
  /**
   * Creates a new socket for the given `nsp`.
   *
   * @return {Socket}
   * @public
   */
  socket(n, t) {
    let r = this.nsps[n];
    return r ? this._autoConnect && !r.active && r.connect() : (r = new eu(this, n, t), this.nsps[n] = r), r;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(n) {
    const t = Object.keys(this.nsps);
    for (const r of t)
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
  _packet(n) {
    const t = this.encoder.encode(n);
    for (let r = 0; r < t.length; r++)
      this.engine.write(t[r], n.options);
  }
  /**
   * Clean up transport subscriptions and packet buffer.
   *
   * @private
   */
  cleanup() {
    this.subs.forEach((n) => n()), this.subs.length = 0, this.decoder.destroy();
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
  onclose(n, t) {
    var r;
    this.cleanup(), (r = this.engine) === null || r === void 0 || r.close(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", n, t), this._reconnection && !this.skipReconnect && this.reconnect();
  }
  /**
   * Attempt a reconnection.
   *
   * @private
   */
  reconnect() {
    if (this._reconnecting || this.skipReconnect)
      return this;
    const n = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
    else {
      const t = this.backoff.duration();
      this._reconnecting = !0;
      const r = this.setTimeoutFn(() => {
        n.skipReconnect || (this.emitReserved("reconnect_attempt", n.backoff.attempts), !n.skipReconnect && n.open((o) => {
          o ? (n._reconnecting = !1, n.reconnect(), this.emitReserved("reconnect_error", o)) : n.onreconnect();
        }));
      }, t);
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
    const n = this.backoff.attempts;
    this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", n);
  }
}
const lr = {};
function co(e, n) {
  typeof e == "object" && (n = e, e = void 0), n = n || {};
  const t = hh(e, n.path || "/socket.io"), r = t.source, o = t.id, i = t.path, s = lr[o] && i in lr[o].nsps, a = n.forceNew || n["force new connection"] || n.multiplex === !1 || s;
  let c;
  return a ? c = new Ki(r, n) : (lr[o] || (lr[o] = new Ki(r, n)), c = lr[o]), t.query && !n.query && (n.query = t.queryKey), c.socket(t.path, n);
}
Object.assign(co, {
  Manager: Ki,
  Socket: eu,
  io: co,
  connect: co
});
var yi = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var ec;
function Ah() {
  return ec || (ec = 1, function(e) {
    (function() {
      var n = {}.hasOwnProperty;
      function t() {
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
          return t.apply(null, i);
        if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]"))
          return i.toString();
        var s = "";
        for (var a in i)
          n.call(i, a) && i[a] && (s = o(s, a));
        return s;
      }
      function o(i, s) {
        return s ? i ? i + " " + s : i + s : i;
      }
      e.exports ? (t.default = t, e.exports = t) : window.classNames = t;
    })();
  }(yi)), yi.exports;
}
var Th = Ah();
const tt = /* @__PURE__ */ m0(Th);
function Bt() {
  return Bt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, Bt.apply(null, arguments);
}
function we(e) {
  "@babel/helpers - typeof";
  return we = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, we(e);
}
var Oh = Symbol.for("react.element"), Rh = Symbol.for("react.transitional.element"), Ph = Symbol.for("react.fragment");
function kh(e) {
  return (
    // Base object type
    e && we(e) === "object" && // React Element type
    (e.$$typeof === Oh || e.$$typeof === Rh) && // React Fragment type
    e.type === Ph
  );
}
var Zi = {}, aa = [], Ih = function(n) {
  aa.push(n);
};
function ca(e, n) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var t = aa.reduce(function(r, o) {
      return o(r ?? "", "warning");
    }, n);
    t && console.error("Warning: ".concat(t));
  }
}
function Nh(e, n) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var t = aa.reduce(function(r, o) {
      return o(r ?? "", "note");
    }, n);
    t && console.warn("Note: ".concat(t));
  }
}
function tu() {
  Zi = {};
}
function nu(e, n, t) {
  !n && !Zi[t] && (e(!1, t), Zi[t] = !0);
}
function sn(e, n) {
  nu(ca, e, n);
}
function jh(e, n) {
  nu(Nh, e, n);
}
sn.preMessage = Ih;
sn.resetWarned = tu;
sn.noteOnce = jh;
function Lh(e, n) {
  if (we(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(e, n);
    if (we(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function ru(e) {
  var n = Lh(e, "string");
  return we(n) == "symbol" ? n : n + "";
}
function U(e, n, t) {
  return (n = ru(n)) in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = t, e;
}
function tc(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function z(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? tc(Object(t), !0).forEach(function(r) {
      U(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : tc(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function nc(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function Mh(e) {
  return e && we(e) === "object" && nc(e.nativeElement) ? e.nativeElement : nc(e) ? e : null;
}
function Dh(e) {
  var n = Mh(e);
  if (n)
    return n;
  if (e instanceof Fe.Component) {
    var t;
    return (t = Ta.findDOMNode) === null || t === void 0 ? void 0 : t.call(Ta, e);
  }
  return null;
}
var Ur = { exports: {} }, ye = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rc;
function Bh() {
  if (rc) return ye;
  rc = 1;
  var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g;
  g = Symbol.for("react.module.reference");
  function h(x) {
    if (typeof x == "object" && x !== null) {
      var S = x.$$typeof;
      switch (S) {
        case e:
          switch (x = x.type, x) {
            case t:
            case o:
            case r:
            case l:
            case f:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case a:
                case s:
                case c:
                case u:
                case d:
                case i:
                  return x;
                default:
                  return S;
              }
          }
        case n:
          return S;
      }
    }
  }
  return ye.ContextConsumer = s, ye.ContextProvider = i, ye.Element = e, ye.ForwardRef = c, ye.Fragment = t, ye.Lazy = u, ye.Memo = d, ye.Portal = n, ye.Profiler = o, ye.StrictMode = r, ye.Suspense = l, ye.SuspenseList = f, ye.isAsyncMode = function() {
    return !1;
  }, ye.isConcurrentMode = function() {
    return !1;
  }, ye.isContextConsumer = function(x) {
    return h(x) === s;
  }, ye.isContextProvider = function(x) {
    return h(x) === i;
  }, ye.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === e;
  }, ye.isForwardRef = function(x) {
    return h(x) === c;
  }, ye.isFragment = function(x) {
    return h(x) === t;
  }, ye.isLazy = function(x) {
    return h(x) === u;
  }, ye.isMemo = function(x) {
    return h(x) === d;
  }, ye.isPortal = function(x) {
    return h(x) === n;
  }, ye.isProfiler = function(x) {
    return h(x) === o;
  }, ye.isStrictMode = function(x) {
    return h(x) === r;
  }, ye.isSuspense = function(x) {
    return h(x) === l;
  }, ye.isSuspenseList = function(x) {
    return h(x) === f;
  }, ye.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === t || x === o || x === r || x === l || x === f || x === v || typeof x == "object" && x !== null && (x.$$typeof === u || x.$$typeof === d || x.$$typeof === i || x.$$typeof === s || x.$$typeof === c || x.$$typeof === g || x.getModuleId !== void 0);
  }, ye.typeOf = h, ye;
}
var be = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oc;
function Fh() {
  return oc || (oc = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g = !1, h = !1, x = !1, S = !1, b = !1, m;
    m = Symbol.for("react.module.reference");
    function T(k) {
      return !!(typeof k == "string" || typeof k == "function" || k === t || k === o || b || k === r || k === l || k === f || S || k === v || g || h || x || typeof k == "object" && k !== null && (k.$$typeof === u || k.$$typeof === d || k.$$typeof === i || k.$$typeof === s || k.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      k.$$typeof === m || k.getModuleId !== void 0));
    }
    function y(k) {
      if (typeof k == "object" && k !== null) {
        var he = k.$$typeof;
        switch (he) {
          case e:
            var Ce = k.type;
            switch (Ce) {
              case t:
              case o:
              case r:
              case l:
              case f:
                return Ce;
              default:
                var Ee = Ce && Ce.$$typeof;
                switch (Ee) {
                  case a:
                  case s:
                  case c:
                  case u:
                  case d:
                  case i:
                    return Ee;
                  default:
                    return he;
                }
            }
          case n:
            return he;
        }
      }
    }
    var O = s, C = i, I = e, F = c, W = t, ne = u, X = d, D = n, V = o, q = r, $ = l, ee = f, K = !1, Q = !1;
    function oe(k) {
      return K || (K = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ie(k) {
      return Q || (Q = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Z(k) {
      return y(k) === s;
    }
    function re(k) {
      return y(k) === i;
    }
    function xe(k) {
      return typeof k == "object" && k !== null && k.$$typeof === e;
    }
    function fe(k) {
      return y(k) === c;
    }
    function pe(k) {
      return y(k) === t;
    }
    function ge(k) {
      return y(k) === u;
    }
    function j(k) {
      return y(k) === d;
    }
    function N(k) {
      return y(k) === n;
    }
    function L(k) {
      return y(k) === o;
    }
    function B(k) {
      return y(k) === r;
    }
    function E(k) {
      return y(k) === l;
    }
    function G(k) {
      return y(k) === f;
    }
    be.ContextConsumer = O, be.ContextProvider = C, be.Element = I, be.ForwardRef = F, be.Fragment = W, be.Lazy = ne, be.Memo = X, be.Portal = D, be.Profiler = V, be.StrictMode = q, be.Suspense = $, be.SuspenseList = ee, be.isAsyncMode = oe, be.isConcurrentMode = ie, be.isContextConsumer = Z, be.isContextProvider = re, be.isElement = xe, be.isForwardRef = fe, be.isFragment = pe, be.isLazy = ge, be.isMemo = j, be.isPortal = N, be.isProfiler = L, be.isStrictMode = B, be.isSuspense = E, be.isSuspenseList = G, be.isValidElementType = T, be.typeOf = y;
  }()), be;
}
var ic;
function zh() {
  return ic || (ic = 1, process.env.NODE_ENV === "production" ? Ur.exports = Bh() : Ur.exports = Fh()), Ur.exports;
}
var bi = zh();
function ou(e, n, t) {
  var r = _.useRef({});
  return (!("value" in r.current) || t(r.current.condition, n)) && (r.current.value = e(), r.current.condition = n), r.current.value;
}
var Vh = Number(h0.split(".")[0]), iu = function(n, t) {
  typeof n == "function" ? n(t) : we(n) === "object" && n && "current" in n && (n.current = t);
}, Hh = function() {
  for (var n = arguments.length, t = new Array(n), r = 0; r < n; r++)
    t[r] = arguments[r];
  var o = t.filter(Boolean);
  return o.length <= 1 ? o[0] : function(i) {
    t.forEach(function(s) {
      iu(s, i);
    });
  };
}, Uh = function(n) {
  var t, r;
  if (!n)
    return !1;
  if (su(n) && Vh >= 19)
    return !0;
  var o = bi.isMemo(n) ? n.type.type : n.type;
  return !(typeof o == "function" && !((t = o.prototype) !== null && t !== void 0 && t.render) && o.$$typeof !== bi.ForwardRef || typeof n == "function" && !((r = n.prototype) !== null && r !== void 0 && r.render) && n.$$typeof !== bi.ForwardRef);
};
function su(e) {
  return /* @__PURE__ */ d0(e) && !kh(e);
}
var qh = function(n) {
  if (n && su(n)) {
    var t = n;
    return t.props.propertyIsEnumerable("ref") ? t.props.ref : t.ref;
  }
  return null;
};
function Ct(e, n) {
  if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function sc(e, n) {
  for (var t = 0; t < n.length; t++) {
    var r = n[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, ru(r.key), r);
  }
}
function At(e, n, t) {
  return n && sc(e.prototype, n), t && sc(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Ji(e, n) {
  return Ji = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, r) {
    return t.__proto__ = r, t;
  }, Ji(e, n);
}
function Pr(e, n) {
  if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(n && n.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), n && Ji(e, n);
}
function qn(e) {
  return qn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, qn(e);
}
function la() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (la = function() {
    return !!e;
  })();
}
function bn(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function au(e, n) {
  if (n && (we(n) == "object" || typeof n == "function")) return n;
  if (n !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return bn(e);
}
function Xo(e) {
  var n = la();
  return function() {
    var t, r = qn(e);
    if (n) {
      var o = qn(this).constructor;
      t = Reflect.construct(r, arguments, o);
    } else t = r.apply(this, arguments);
    return au(this, t);
  };
}
function Qi(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, r = Array(n); t < n; t++) r[t] = e[t];
  return r;
}
function Wh(e) {
  if (Array.isArray(e)) return Qi(e);
}
function cu(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function ua(e, n) {
  if (e) {
    if (typeof e == "string") return Qi(e, n);
    var t = {}.toString.call(e).slice(8, -1);
    return t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set" ? Array.from(e) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Qi(e, n) : void 0;
  }
}
function $h() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $t(e) {
  return Wh(e) || cu(e) || ua(e) || $h();
}
var lu = function(n) {
  return +setTimeout(n, 16);
}, uu = function(n) {
  return clearTimeout(n);
};
typeof window < "u" && "requestAnimationFrame" in window && (lu = function(n) {
  return window.requestAnimationFrame(n);
}, uu = function(n) {
  return window.cancelAnimationFrame(n);
});
var ac = 0, Go = /* @__PURE__ */ new Map();
function fu(e) {
  Go.delete(e);
}
var _o = function(n) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  ac += 1;
  var r = ac;
  function o(i) {
    if (i === 0)
      fu(r), n();
    else {
      var s = lu(function() {
        o(i - 1);
      });
      Go.set(r, s);
    }
  }
  return o(t), r;
};
_o.cancel = function(e) {
  var n = Go.get(e);
  return fu(e), uu(n);
};
process.env.NODE_ENV !== "production" && (_o.ids = function() {
  return Go;
});
function du(e) {
  if (Array.isArray(e)) return e;
}
function Yh(e, n) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var r, o, i, s, a = [], c = !0, l = !1;
    try {
      if (i = (t = t.call(e)).next, n === 0) {
        if (Object(t) !== t) return;
        c = !1;
      } else for (; !(c = (r = i.call(t)).done) && (a.push(r.value), a.length !== n); c = !0) ;
    } catch (f) {
      l = !0, o = f;
    } finally {
      try {
        if (!c && t.return != null && (s = t.return(), Object(s) !== s)) return;
      } finally {
        if (l) throw o;
      }
    }
    return a;
  }
}
function hu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function le(e, n) {
  return du(e) || Yh(e, n) || ua(e, n) || hu();
}
function Sr(e) {
  for (var n = 0, t, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    t = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, n = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      n ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      n ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      n ^= e.charCodeAt(r) & 255, n = /* Math.imul(h, m): */
      (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16);
  }
  return n ^= n >>> 13, n = /* Math.imul(h, m): */
  (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), ((n ^ n >>> 15) >>> 0).toString(36);
}
function Yt() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Xh(e, n) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(n);
  for (var t = n; t; ) {
    if (t === e)
      return !0;
    t = t.parentNode;
  }
  return !1;
}
var cc = "data-rc-order", lc = "data-rc-priority", Gh = "rc-util-key", es = /* @__PURE__ */ new Map();
function xu() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.mark;
  return n ? n.startsWith("data-") ? n : "data-".concat(n) : Gh;
}
function Ko(e) {
  if (e.attachTo)
    return e.attachTo;
  var n = document.querySelector("head");
  return n || document.body;
}
function Kh(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function fa(e) {
  return Array.from((es.get(e) || e).children).filter(function(n) {
    return n.tagName === "STYLE";
  });
}
function pu(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Yt())
    return null;
  var t = n.csp, r = n.prepend, o = n.priority, i = o === void 0 ? 0 : o, s = Kh(r), a = s === "prependQueue", c = document.createElement("style");
  c.setAttribute(cc, s), a && i && c.setAttribute(lc, "".concat(i)), t != null && t.nonce && (c.nonce = t == null ? void 0 : t.nonce), c.innerHTML = e;
  var l = Ko(n), f = l.firstChild;
  if (r) {
    if (a) {
      var d = (n.styles || fa(l)).filter(function(u) {
        if (!["prepend", "prependQueue"].includes(u.getAttribute(cc)))
          return !1;
        var v = Number(u.getAttribute(lc) || 0);
        return i >= v;
      });
      if (d.length)
        return l.insertBefore(c, d[d.length - 1].nextSibling), c;
    }
    l.insertBefore(c, f);
  } else
    l.appendChild(c);
  return c;
}
function mu(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = Ko(n);
  return (n.styles || fa(t)).find(function(r) {
    return r.getAttribute(xu(n)) === e;
  });
}
function gu(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = mu(e, n);
  if (t) {
    var r = Ko(n);
    r.removeChild(t);
  }
}
function Zh(e, n) {
  var t = es.get(e);
  if (!t || !Xh(document, t)) {
    var r = pu("", n), o = r.parentNode;
    es.set(e, o), e.removeChild(r);
  }
}
function Sn(e, n) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Ko(t), o = fa(r), i = z(z({}, t), {}, {
    styles: o
  });
  Zh(r, i);
  var s = mu(n, i);
  if (s) {
    var a, c;
    if ((a = i.csp) !== null && a !== void 0 && a.nonce && s.nonce !== ((c = i.csp) === null || c === void 0 ? void 0 : c.nonce)) {
      var l;
      s.nonce = (l = i.csp) === null || l === void 0 ? void 0 : l.nonce;
    }
    return s.innerHTML !== e && (s.innerHTML = e), s;
  }
  var f = pu(e, i);
  return f.setAttribute(xu(i), n), f;
}
function Jh(e, n) {
  if (e == null) return {};
  var t = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (n.indexOf(r) !== -1) continue;
    t[r] = e[r];
  }
  return t;
}
function wr(e, n) {
  if (e == null) return {};
  var t, r, o = Jh(e, n);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++) t = i[r], n.indexOf(t) === -1 && {}.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
  }
  return o;
}
function Qh(e, n) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = /* @__PURE__ */ new Set();
  function o(i, s) {
    var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, c = r.has(i);
    if (sn(!c, "Warning: There may be circular references"), c)
      return !1;
    if (i === s)
      return !0;
    if (t && a > 1)
      return !1;
    r.add(i);
    var l = a + 1;
    if (Array.isArray(i)) {
      if (!Array.isArray(s) || i.length !== s.length)
        return !1;
      for (var f = 0; f < i.length; f++)
        if (!o(i[f], s[f], l))
          return !1;
      return !0;
    }
    if (i && s && we(i) === "object" && we(s) === "object") {
      var d = Object.keys(i);
      return d.length !== Object.keys(s).length ? !1 : d.every(function(u) {
        return o(i[u], s[u], l);
      });
    }
    return !1;
  }
  return o(e, n);
}
var ex = "%";
function ts(e) {
  return e.join(ex);
}
var tx = /* @__PURE__ */ function() {
  function e(n) {
    Ct(this, e), U(this, "instanceId", void 0), U(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = n;
  }
  return At(e, [{
    key: "get",
    value: function(t) {
      return this.opGet(ts(t));
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opGet",
    value: function(t) {
      return this.cache.get(t) || null;
    }
  }, {
    key: "update",
    value: function(t, r) {
      return this.opUpdate(ts(t), r);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(t, r) {
      var o = this.cache.get(t), i = r(o);
      i === null ? this.cache.delete(t) : this.cache.set(t, i);
    }
  }]), e;
}(), Wn = "data-token-hash", wt = "data-css-hash", nx = "data-cache-path", Jt = "__cssinjs_instance__";
function rx() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var n = document.body.querySelectorAll("style[".concat(wt, "]")) || [], t = document.head.firstChild;
    Array.from(n).forEach(function(o) {
      o[Jt] = o[Jt] || e, o[Jt] === e && document.head.insertBefore(o, t);
    });
    var r = {};
    Array.from(document.querySelectorAll("style[".concat(wt, "]"))).forEach(function(o) {
      var i = o.getAttribute(wt);
      if (r[i]) {
        if (o[Jt] === e) {
          var s;
          (s = o.parentNode) === null || s === void 0 || s.removeChild(o);
        }
      } else
        r[i] = !0;
    });
  }
  return new tx(e);
}
var kr = /* @__PURE__ */ _.createContext({
  hashPriority: "low",
  cache: rx(),
  defaultCache: !0
});
function ox(e, n) {
  if (e.length !== n.length)
    return !1;
  for (var t = 0; t < e.length; t++)
    if (e[t] !== n[t])
      return !1;
  return !0;
}
var da = /* @__PURE__ */ function() {
  function e() {
    Ct(this, e), U(this, "cache", void 0), U(this, "keys", void 0), U(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return At(e, [{
    key: "size",
    value: function() {
      return this.keys.length;
    }
  }, {
    key: "internalGet",
    value: function(t) {
      var r, o, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, s = {
        map: this.cache
      };
      return t.forEach(function(a) {
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
    value: function(t) {
      var r;
      return (r = this.internalGet(t, !0)) === null || r === void 0 ? void 0 : r[0];
    }
  }, {
    key: "has",
    value: function(t) {
      return !!this.internalGet(t);
    }
  }, {
    key: "set",
    value: function(t, r) {
      var o = this;
      if (!this.has(t)) {
        if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
          var i = this.keys.reduce(function(l, f) {
            var d = le(l, 2), u = d[1];
            return o.internalGet(f)[1] < u ? [f, o.internalGet(f)[1]] : l;
          }, [this.keys[0], this.cacheCallTimes]), s = le(i, 1), a = s[0];
          this.delete(a);
        }
        this.keys.push(t);
      }
      var c = this.cache;
      t.forEach(function(l, f) {
        if (f === t.length - 1)
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
    value: function(t, r) {
      var o = t.get(r[0]);
      if (r.length === 1) {
        var i;
        return o.map ? t.set(r[0], {
          map: o.map
        }) : t.delete(r[0]), (i = o.value) === null || i === void 0 ? void 0 : i[0];
      }
      var s = this.deleteByPath(o.map, r.slice(1));
      return (!o.map || o.map.size === 0) && !o.value && t.delete(r[0]), s;
    }
  }, {
    key: "delete",
    value: function(t) {
      if (this.has(t))
        return this.keys = this.keys.filter(function(r) {
          return !ox(r, t);
        }), this.deleteByPath(this.cache, t);
    }
  }]), e;
}();
U(da, "MAX_CACHE_SIZE", 20);
U(da, "MAX_CACHE_OFFSET", 5);
var uc = 0, vu = /* @__PURE__ */ function() {
  function e(n) {
    Ct(this, e), U(this, "derivatives", void 0), U(this, "id", void 0), this.derivatives = Array.isArray(n) ? n : [n], this.id = uc, n.length === 0 && ca(n.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), uc += 1;
  }
  return At(e, [{
    key: "getDerivativeToken",
    value: function(t) {
      return this.derivatives.reduce(function(r, o) {
        return o(t, r);
      }, void 0);
    }
  }]), e;
}(), Si = new da();
function ns(e) {
  var n = Array.isArray(e) ? e : [e];
  return Si.has(n) || Si.set(n, new vu(n)), Si.get(n);
}
var ix = /* @__PURE__ */ new WeakMap(), wi = {};
function sx(e, n) {
  for (var t = ix, r = 0; r < n.length; r += 1) {
    var o = n[r];
    t.has(o) || t.set(o, /* @__PURE__ */ new WeakMap()), t = t.get(o);
  }
  return t.has(wi) || t.set(wi, e()), t.get(wi);
}
var fc = /* @__PURE__ */ new WeakMap();
function vr(e) {
  var n = fc.get(e) || "";
  return n || (Object.keys(e).forEach(function(t) {
    var r = e[t];
    n += t, r instanceof vu ? n += r.id : r && we(r) === "object" ? n += vr(r) : n += r;
  }), n = Sr(n), fc.set(e, n)), n;
}
function dc(e, n) {
  return Sr("".concat(n, "_").concat(vr(e)));
}
var rs = Yt();
function Co(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function Ao(e, n, t) {
  var r, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (i)
    return e;
  var s = z(z({}, o), {}, (r = {}, U(r, Wn, n), U(r, wt, t), r)), a = Object.keys(s).map(function(c) {
    var l = s[c];
    return l ? "".concat(c, '="').concat(l, '"') : null;
  }).filter(function(c) {
    return c;
  }).join(" ");
  return "<style ".concat(a, ">").concat(e, "</style>");
}
var lo = function(n) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(t ? "".concat(t, "-") : "").concat(n).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, ax = function(n, t, r) {
  return Object.keys(n).length ? ".".concat(t).concat(r != null && r.scope ? ".".concat(r.scope) : "", "{").concat(Object.entries(n).map(function(o) {
    var i = le(o, 2), s = i[0], a = i[1];
    return "".concat(s, ":").concat(a, ";");
  }).join(""), "}") : "";
}, yu = function(n, t, r) {
  var o = {}, i = {};
  return Object.entries(n).forEach(function(s) {
    var a, c, l = le(s, 2), f = l[0], d = l[1];
    if (r != null && (a = r.preserve) !== null && a !== void 0 && a[f])
      i[f] = d;
    else if ((typeof d == "string" || typeof d == "number") && !(r != null && (c = r.ignore) !== null && c !== void 0 && c[f])) {
      var u, v = lo(f, r == null ? void 0 : r.prefix);
      o[v] = typeof d == "number" && !(r != null && (u = r.unitless) !== null && u !== void 0 && u[f]) ? "".concat(d, "px") : String(d), i[f] = "var(".concat(v, ")");
    }
  }), [i, ax(o, t, {
    scope: r == null ? void 0 : r.scope
  })];
}, hc = process.env.NODE_ENV !== "test" && Yt() ? _.useLayoutEffect : _.useEffect, bu = function(n, t) {
  var r = _.useRef(!0);
  hc(function() {
    return n(r.current);
  }, t), hc(function() {
    return r.current = !1, function() {
      r.current = !0;
    };
  }, []);
}, cx = z({}, _), xc = cx.useInsertionEffect, lx = function(n, t, r) {
  _.useMemo(n, r), bu(function() {
    return t(!0);
  }, r);
}, ux = xc ? function(e, n, t) {
  return xc(function() {
    return e(), n();
  }, t);
} : lx, fx = z({}, _), dx = fx.useInsertionEffect, hx = function(n) {
  var t = [], r = !1;
  function o(i) {
    if (r) {
      process.env.NODE_ENV !== "production" && ca(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    t.push(i);
  }
  return _.useEffect(function() {
    return r = !1, function() {
      r = !0, t.length && t.forEach(function(i) {
        return i();
      });
    };
  }, n), o;
}, xx = function() {
  return function(n) {
    n();
  };
}, px = typeof dx < "u" ? hx : xx;
function mx() {
  return !1;
}
var os = !1;
function gx() {
  return os;
}
const vx = process.env.NODE_ENV === "production" ? mx : gx;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var qr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : null;
  if (qr && typeof qr.webpackHotUpdate == "function") {
    var yx = qr.webpackHotUpdate;
    qr.webpackHotUpdate = function() {
      return os = !0, setTimeout(function() {
        os = !1;
      }, 0), yx.apply(void 0, arguments);
    };
  }
}
function ha(e, n, t, r, o) {
  var i = _.useContext(kr), s = i.cache, a = [e].concat($t(n)), c = ts(a), l = px([c]), f = vx(), d = function(h) {
    s.opUpdate(c, function(x) {
      var S = x || [void 0, void 0], b = le(S, 2), m = b[0], T = m === void 0 ? 0 : m, y = b[1], O = y;
      process.env.NODE_ENV !== "production" && y && f && (r == null || r(O, f), O = null);
      var C = O || t(), I = [T, C];
      return h ? h(I) : I;
    });
  };
  _.useMemo(
    function() {
      d();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [c]
    /* eslint-enable */
  );
  var u = s.opGet(c);
  process.env.NODE_ENV !== "production" && !u && (d(), u = s.opGet(c));
  var v = u[1];
  return ux(function() {
    o == null || o(v);
  }, function(g) {
    return d(function(h) {
      var x = le(h, 2), S = x[0], b = x[1];
      return g && S === 0 && (o == null || o(v)), [S + 1, b];
    }), function() {
      s.opUpdate(c, function(h) {
        var x = h || [], S = le(x, 2), b = S[0], m = b === void 0 ? 0 : b, T = S[1], y = m - 1;
        return y === 0 ? (l(function() {
          (g || !s.opGet(c)) && (r == null || r(T, !1));
        }), null) : [m - 1, T];
      });
    };
  }, [c]), v;
}
var bx = {}, Sx = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", pn = /* @__PURE__ */ new Map();
function wx(e) {
  pn.set(e, (pn.get(e) || 0) + 1);
}
function Ex(e, n) {
  if (typeof document < "u") {
    var t = document.querySelectorAll("style[".concat(Wn, '="').concat(e, '"]'));
    t.forEach(function(r) {
      if (r[Jt] === n) {
        var o;
        (o = r.parentNode) === null || o === void 0 || o.removeChild(r);
      }
    });
  }
}
var _x = 0;
function Cx(e, n) {
  pn.set(e, (pn.get(e) || 0) - 1);
  var t = Array.from(pn.keys()), r = t.filter(function(o) {
    var i = pn.get(o) || 0;
    return i <= 0;
  });
  t.length - r.length > _x && r.forEach(function(o) {
    Ex(o, n), pn.delete(o);
  });
}
var Ax = function(n, t, r, o) {
  var i = r.getDerivativeToken(n), s = z(z({}, i), t);
  return o && (s = o(s)), s;
}, Su = "token";
function Tx(e, n) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = tn(kr), o = r.cache.instanceId, i = r.container, s = t.salt, a = s === void 0 ? "" : s, c = t.override, l = c === void 0 ? bx : c, f = t.formatToken, d = t.getComputedToken, u = t.cssVar, v = sx(function() {
    return Object.assign.apply(Object, [{}].concat($t(n)));
  }, n), g = vr(v), h = vr(l), x = u ? vr(u) : "", S = ha(Su, [a, e.id, g, h, x], function() {
    var b, m = d ? d(v, l, e) : Ax(v, l, e, f), T = z({}, m), y = "";
    if (u) {
      var O = yu(m, u.key, {
        prefix: u.prefix,
        ignore: u.ignore,
        unitless: u.unitless,
        preserve: u.preserve
      }), C = le(O, 2);
      m = C[0], y = C[1];
    }
    var I = dc(m, a);
    m._tokenKey = I, T._tokenKey = dc(T, a);
    var F = (b = u == null ? void 0 : u.key) !== null && b !== void 0 ? b : I;
    m._themeKey = F, wx(F);
    var W = "".concat(Sx, "-").concat(Sr(I));
    return m._hashId = W, [m, W, T, y, (u == null ? void 0 : u.key) || ""];
  }, function(b) {
    Cx(b[0]._themeKey, o);
  }, function(b) {
    var m = le(b, 4), T = m[0], y = m[3];
    if (u && y) {
      var O = Sn(y, Sr("css-variables-".concat(T._themeKey)), {
        mark: wt,
        prepend: "queue",
        attachTo: i,
        priority: -999
      });
      O[Jt] = o, O.setAttribute(Wn, T._themeKey);
    }
  });
  return S;
}
var Ox = function(n, t, r) {
  var o = le(n, 5), i = o[2], s = o[3], a = o[4], c = r || {}, l = c.plain;
  if (!s)
    return null;
  var f = i._tokenKey, d = -999, u = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(d)
  }, v = Ao(s, a, f, u, l);
  return [d, f, v];
}, Rx = {
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
}, wu = "comm", Eu = "rule", _u = "decl", Px = "@import", kx = "@namespace", Ix = "@keyframes", Nx = "@layer", Cu = Math.abs, xa = String.fromCharCode;
function Au(e) {
  return e.trim();
}
function uo(e, n, t) {
  return e.replace(n, t);
}
function jx(e, n, t) {
  return e.indexOf(n, t);
}
function Ln(e, n) {
  return e.charCodeAt(n) | 0;
}
function $n(e, n, t) {
  return e.slice(n, t);
}
function Nt(e) {
  return e.length;
}
function Lx(e) {
  return e.length;
}
function Wr(e, n) {
  return n.push(e), e;
}
var Zo = 1, Yn = 1, Tu = 0, mt = 0, Ve = 0, er = "";
function pa(e, n, t, r, o, i, s, a) {
  return { value: e, root: n, parent: t, type: r, props: o, children: i, line: Zo, column: Yn, length: s, return: "", siblings: a };
}
function Mx() {
  return Ve;
}
function Dx() {
  return Ve = mt > 0 ? Ln(er, --mt) : 0, Yn--, Ve === 10 && (Yn = 1, Zo--), Ve;
}
function Et() {
  return Ve = mt < Tu ? Ln(er, mt++) : 0, Yn++, Ve === 10 && (Yn = 1, Zo++), Ve;
}
function Qt() {
  return Ln(er, mt);
}
function fo() {
  return mt;
}
function Jo(e, n) {
  return $n(er, e, n);
}
function Er(e) {
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
function Bx(e) {
  return Zo = Yn = 1, Tu = Nt(er = e), mt = 0, [];
}
function Fx(e) {
  return er = "", e;
}
function Ei(e) {
  return Au(Jo(mt - 1, is(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function zx(e) {
  for (; (Ve = Qt()) && Ve < 33; )
    Et();
  return Er(e) > 2 || Er(Ve) > 3 ? "" : " ";
}
function Vx(e, n) {
  for (; --n && Et() && !(Ve < 48 || Ve > 102 || Ve > 57 && Ve < 65 || Ve > 70 && Ve < 97); )
    ;
  return Jo(e, fo() + (n < 6 && Qt() == 32 && Et() == 32));
}
function is(e) {
  for (; Et(); )
    switch (Ve) {
      // ] ) " '
      case e:
        return mt;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && is(Ve);
        break;
      // (
      case 40:
        e === 41 && is(e);
        break;
      // \
      case 92:
        Et();
        break;
    }
  return mt;
}
function Hx(e, n) {
  for (; Et() && e + Ve !== 57; )
    if (e + Ve === 84 && Qt() === 47)
      break;
  return "/*" + Jo(n, mt - 1) + "*" + xa(e === 47 ? e : Et());
}
function Ux(e) {
  for (; !Er(Qt()); )
    Et();
  return Jo(e, mt);
}
function qx(e) {
  return Fx(ho("", null, null, null, [""], e = Bx(e), 0, [0], e));
}
function ho(e, n, t, r, o, i, s, a, c) {
  for (var l = 0, f = 0, d = s, u = 0, v = 0, g = 0, h = 1, x = 1, S = 1, b = 0, m = "", T = o, y = i, O = r, C = m; x; )
    switch (g = b, b = Et()) {
      // (
      case 40:
        if (g != 108 && Ln(C, d - 1) == 58) {
          jx(C += uo(Ei(b), "&", "&\f"), "&\f", Cu(l ? a[l - 1] : 0)) != -1 && (S = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        C += Ei(b);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        C += zx(g);
        break;
      // \
      case 92:
        C += Vx(fo() - 1, 7);
        continue;
      // /
      case 47:
        switch (Qt()) {
          case 42:
          case 47:
            Wr(Wx(Hx(Et(), fo()), n, t, c), c), (Er(g || 1) == 5 || Er(Qt() || 1) == 5) && Nt(C) && $n(C, -1, void 0) !== " " && (C += " ");
            break;
          default:
            C += "/";
        }
        break;
      // {
      case 123 * h:
        a[l++] = Nt(C) * S;
      // } ; \0
      case 125 * h:
      case 59:
      case 0:
        switch (b) {
          // \0 }
          case 0:
          case 125:
            x = 0;
          // ;
          case 59 + f:
            S == -1 && (C = uo(C, /\f/g, "")), v > 0 && (Nt(C) - d || h === 0 && g === 47) && Wr(v > 32 ? mc(C + ";", r, t, d - 1, c) : mc(uo(C, " ", "") + ";", r, t, d - 2, c), c);
            break;
          // @ ;
          case 59:
            C += ";";
          // { rule/at-rule
          default:
            if (Wr(O = pc(C, n, t, l, f, o, a, m, T = [], y = [], d, i), i), b === 123)
              if (f === 0)
                ho(C, n, O, O, T, i, d, a, y);
              else {
                switch (u) {
                  // c(ontainer)
                  case 99:
                    if (Ln(C, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (Ln(C, 2) === 97) break;
                  default:
                    f = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                f ? ho(e, O, O, r && Wr(pc(e, O, O, 0, 0, o, a, m, o, T = [], d, y), y), o, y, d, a, r ? T : y) : ho(C, O, O, O, [""], y, 0, a, y);
              }
        }
        l = f = v = 0, h = S = 1, m = C = "", d = s;
        break;
      // :
      case 58:
        d = 1 + Nt(C), v = g;
      default:
        if (h < 1) {
          if (b == 123)
            --h;
          else if (b == 125 && h++ == 0 && Dx() == 125)
            continue;
        }
        switch (C += xa(b), b * h) {
          // &
          case 38:
            S = f > 0 ? 1 : (C += "\f", -1);
            break;
          // ,
          case 44:
            a[l++] = (Nt(C) - 1) * S, S = 1;
            break;
          // @
          case 64:
            Qt() === 45 && (C += Ei(Et())), u = Qt(), f = d = Nt(m = C += Ux(fo())), b++;
            break;
          // -
          case 45:
            g === 45 && Nt(C) == 2 && (h = 0);
        }
    }
  return i;
}
function pc(e, n, t, r, o, i, s, a, c, l, f, d) {
  for (var u = o - 1, v = o === 0 ? i : [""], g = Lx(v), h = 0, x = 0, S = 0; h < r; ++h)
    for (var b = 0, m = $n(e, u + 1, u = Cu(x = s[h])), T = e; b < g; ++b)
      (T = Au(x > 0 ? v[b] + " " + m : uo(m, /&\f/g, v[b]))) && (c[S++] = T);
  return pa(e, n, t, o === 0 ? Eu : a, c, l, f, d);
}
function Wx(e, n, t, r) {
  return pa(e, n, t, wu, xa(Mx()), $n(e, 2, -2), 0, r);
}
function mc(e, n, t, r, o) {
  return pa(e, n, t, _u, $n(e, 0, r), $n(e, r + 1, -1), r, o);
}
function ss(e, n) {
  for (var t = "", r = 0; r < e.length; r++)
    t += n(e[r], r, e, n) || "";
  return t;
}
function $x(e, n, t, r) {
  switch (e.type) {
    case Nx:
      if (e.children.length) break;
    case Px:
    case kx:
    case _u:
      return e.return = e.return || e.value;
    case wu:
      return "";
    case Ix:
      return e.return = e.value + "{" + ss(e.children, r) + "}";
    case Eu:
      if (!Nt(e.value = e.props.join(","))) return "";
  }
  return Nt(t = ss(e.children, r)) ? e.return = e.value + "{" + t + "}" : "";
}
function Ou(e, n) {
  var t = n.path, r = n.parentSelectors;
  sn(!1, "[Ant Design CSS-in-JS] ".concat(t ? "Error in ".concat(t, ": ") : "").concat(e).concat(r.length ? " Selector: ".concat(r.join(" | ")) : ""));
}
var Yx = function(n, t, r) {
  if (n === "content") {
    var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, i = ["normal", "none", "initial", "inherit", "unset"];
    (typeof t != "string" || i.indexOf(t) === -1 && !o.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")) && Ou("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(t, "\"'`."), r);
  }
}, Xx = function(n, t, r) {
  n === "animation" && r.hashId && t !== "none" && Ou("You seem to be using hashed animation '".concat(t, "', in which case 'animationName' with Keyframe as value is recommended."), r);
}, gc = "data-ant-cssinjs-cache-path", Ru = "_FILE_STYLE__", wn, Pu = !0;
function Gx() {
  if (!wn && (wn = {}, Yt())) {
    var e = document.createElement("div");
    e.className = gc, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var n = getComputedStyle(e).content || "";
    n = n.replace(/^"/, "").replace(/"$/, ""), n.split(";").forEach(function(o) {
      var i = o.split(":"), s = le(i, 2), a = s[0], c = s[1];
      wn[a] = c;
    });
    var t = document.querySelector("style[".concat(gc, "]"));
    if (t) {
      var r;
      Pu = !1, (r = t.parentNode) === null || r === void 0 || r.removeChild(t);
    }
    document.body.removeChild(e);
  }
}
function Kx(e) {
  return Gx(), !!wn[e];
}
function Zx(e) {
  var n = wn[e], t = null;
  if (n && Yt())
    if (Pu)
      t = Ru;
    else {
      var r = document.querySelector("style[".concat(wt, '="').concat(wn[e], '"]'));
      r ? t = r.innerHTML : delete wn[e];
    }
  return [t, n];
}
var ku = "_skip_check_", Iu = "_multi_value_";
function xo(e) {
  var n = ss(qx(e), $x);
  return n.replace(/\{%%%\:[^;];}/g, ";");
}
function Jx(e) {
  return we(e) === "object" && e && (ku in e || Iu in e);
}
function vc(e, n, t) {
  if (!n)
    return e;
  var r = ".".concat(n), o = t === "low" ? ":where(".concat(r, ")") : r, i = e.split(",").map(function(s) {
    var a, c = s.trim().split(/\s+/), l = c[0] || "", f = ((a = l.match(/^\w+/)) === null || a === void 0 ? void 0 : a[0]) || "";
    return l = "".concat(f).concat(o).concat(l.slice(f.length)), [l].concat($t(c.slice(1))).join(" ");
  });
  return i.join(",");
}
var Qx = function e(n) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = r.root, i = r.injectHash, s = r.parentSelectors, a = t.hashId, c = t.layer, l = t.path, f = t.hashPriority, d = t.transformers, u = d === void 0 ? [] : d, v = t.linters, g = v === void 0 ? [] : v, h = "", x = {};
  function S(T) {
    var y = T.getName(a);
    if (!x[y]) {
      var O = e(T.style, t, {
        root: !1,
        parentSelectors: s
      }), C = le(O, 1), I = C[0];
      x[y] = "@keyframes ".concat(T.getName(a)).concat(I);
    }
  }
  function b(T) {
    var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return T.forEach(function(O) {
      Array.isArray(O) ? b(O, y) : O && y.push(O);
    }), y;
  }
  var m = b(Array.isArray(n) ? n : [n]);
  return m.forEach(function(T) {
    var y = typeof T == "string" && !o ? {} : T;
    if (typeof y == "string")
      h += "".concat(y, `
`);
    else if (y._keyframe)
      S(y);
    else {
      var O = u.reduce(function(C, I) {
        var F;
        return (I == null || (F = I.visit) === null || F === void 0 ? void 0 : F.call(I, C)) || C;
      }, y);
      Object.keys(O).forEach(function(C) {
        var I = O[C];
        if (we(I) === "object" && I && (C !== "animationName" || !I._keyframe) && !Jx(I)) {
          var F = !1, W = C.trim(), ne = !1;
          (o || i) && a ? W.startsWith("@") ? F = !0 : W === "&" ? W = vc("", a, f) : W = vc(C, a, f) : o && !a && (W === "&" || W === "") && (W = "", ne = !0);
          var X = e(I, t, {
            root: ne,
            injectHash: F,
            parentSelectors: [].concat($t(s), [W])
          }), D = le(X, 2), V = D[0], q = D[1];
          x = z(z({}, x), q), h += "".concat(W).concat(V);
        } else {
          let K = function(Q, oe) {
            process.env.NODE_ENV !== "production" && (we(I) !== "object" || !(I != null && I[ku])) && [Yx, Xx].concat($t(g)).forEach(function(re) {
              return re(Q, oe, {
                path: l,
                hashId: a,
                parentSelectors: s
              });
            });
            var ie = Q.replace(/[A-Z]/g, function(re) {
              return "-".concat(re.toLowerCase());
            }), Z = oe;
            !Rx[Q] && typeof Z == "number" && Z !== 0 && (Z = "".concat(Z, "px")), Q === "animationName" && oe !== null && oe !== void 0 && oe._keyframe && (S(oe), Z = oe.getName(a)), h += "".concat(ie, ":").concat(Z, ";");
          };
          var $, ee = ($ = I == null ? void 0 : I.value) !== null && $ !== void 0 ? $ : I;
          we(I) === "object" && I !== null && I !== void 0 && I[Iu] && Array.isArray(ee) ? ee.forEach(function(Q) {
            K(C, Q);
          }) : K(C, ee);
        }
      });
    }
  }), o ? c && (h && (h = "@layer ".concat(c.name, " {").concat(h, "}")), c.dependencies && (x["@layer ".concat(c.name)] = c.dependencies.map(function(T) {
    return "@layer ".concat(T, ", ").concat(c.name, ";");
  }).join(`
`))) : h = "{".concat(h, "}"), [h, x];
};
function Nu(e, n) {
  return Sr("".concat(e.join("%")).concat(n));
}
function ep() {
  return null;
}
var ju = "style";
function as(e, n) {
  var t = e.token, r = e.path, o = e.hashId, i = e.layer, s = e.nonce, a = e.clientOnly, c = e.order, l = c === void 0 ? 0 : c, f = _.useContext(kr), d = f.autoClear, u = f.mock, v = f.defaultCache, g = f.hashPriority, h = f.container, x = f.ssrInline, S = f.transformers, b = f.linters, m = f.cache, T = f.layer, y = t._tokenKey, O = [y];
  T && O.push("layer"), O.push.apply(O, $t(r));
  var C = rs;
  process.env.NODE_ENV !== "production" && u !== void 0 && (C = u === "client");
  var I = ha(
    ju,
    O,
    // Create cache if needed
    function() {
      var D = O.join("|");
      if (Kx(D)) {
        var V = Zx(D), q = le(V, 2), $ = q[0], ee = q[1];
        if ($)
          return [$, y, ee, {}, a, l];
      }
      var K = n(), Q = Qx(K, {
        hashId: o,
        hashPriority: g,
        layer: T ? i : void 0,
        path: r.join("-"),
        transformers: S,
        linters: b
      }), oe = le(Q, 2), ie = oe[0], Z = oe[1], re = xo(ie), xe = Nu(O, re);
      return [re, y, xe, Z, a, l];
    },
    // Remove cache if no need
    function(D, V) {
      var q = le(D, 3), $ = q[2];
      (V || d) && rs && gu($, {
        mark: wt
      });
    },
    // Effect: Inject style here
    function(D) {
      var V = le(D, 4), q = V[0];
      V[1];
      var $ = V[2], ee = V[3];
      if (C && q !== Ru) {
        var K = {
          mark: wt,
          prepend: T ? !1 : "queue",
          attachTo: h,
          priority: l
        }, Q = typeof s == "function" ? s() : s;
        Q && (K.csp = {
          nonce: Q
        });
        var oe = [], ie = [];
        Object.keys(ee).forEach(function(re) {
          re.startsWith("@layer") ? oe.push(re) : ie.push(re);
        }), oe.forEach(function(re) {
          Sn(xo(ee[re]), "_layer-".concat(re), z(z({}, K), {}, {
            prepend: !0
          }));
        });
        var Z = Sn(q, $, K);
        Z[Jt] = m.instanceId, Z.setAttribute(Wn, y), process.env.NODE_ENV !== "production" && Z.setAttribute(nx, O.join("|")), ie.forEach(function(re) {
          Sn(xo(ee[re]), "_effect-".concat(re), K);
        });
      }
    }
  ), F = le(I, 3), W = F[0], ne = F[1], X = F[2];
  return function(D) {
    var V;
    if (!x || C || !v)
      V = /* @__PURE__ */ _.createElement(ep, null);
    else {
      var q;
      V = /* @__PURE__ */ _.createElement("style", Bt({}, (q = {}, U(q, Wn, ne), U(q, wt, X), q), {
        dangerouslySetInnerHTML: {
          __html: W
        }
      }));
    }
    return /* @__PURE__ */ _.createElement(_.Fragment, null, V, D);
  };
}
var tp = function(n, t, r) {
  var o = le(n, 6), i = o[0], s = o[1], a = o[2], c = o[3], l = o[4], f = o[5], d = r || {}, u = d.plain;
  if (l)
    return null;
  var v = i, g = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(f)
  };
  return v = Ao(i, s, a, g, u), c && Object.keys(c).forEach(function(h) {
    if (!t[h]) {
      t[h] = !0;
      var x = xo(c[h]), S = Ao(x, s, "_effect-".concat(h), g, u);
      h.startsWith("@layer") ? v = S + v : v += S;
    }
  }), [f, a, v];
}, Lu = "cssVar", np = function(n, t) {
  var r = n.key, o = n.prefix, i = n.unitless, s = n.ignore, a = n.token, c = n.scope, l = c === void 0 ? "" : c, f = tn(kr), d = f.cache.instanceId, u = f.container, v = a._tokenKey, g = [].concat($t(n.path), [r, l, v]), h = ha(Lu, g, function() {
    var x = t(), S = yu(x, r, {
      prefix: o,
      unitless: i,
      ignore: s,
      scope: l
    }), b = le(S, 2), m = b[0], T = b[1], y = Nu(g, T);
    return [m, T, y, r];
  }, function(x) {
    var S = le(x, 3), b = S[2];
    rs && gu(b, {
      mark: wt
    });
  }, function(x) {
    var S = le(x, 3), b = S[1], m = S[2];
    if (b) {
      var T = Sn(b, m, {
        mark: wt,
        prepend: "queue",
        attachTo: u,
        priority: -999
      });
      T[Jt] = d, T.setAttribute(Wn, r);
    }
  });
  return h;
}, rp = function(n, t, r) {
  var o = le(n, 4), i = o[1], s = o[2], a = o[3], c = r || {}, l = c.plain;
  if (!i)
    return null;
  var f = -999, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(f)
  }, u = Ao(i, a, s, d, l);
  return [f, s, u];
}, ur;
ur = {}, U(ur, ju, tp), U(ur, Su, Ox), U(ur, Lu, rp);
var Mu = /* @__PURE__ */ function() {
  function e(n, t) {
    Ct(this, e), U(this, "name", void 0), U(this, "style", void 0), U(this, "_keyframe", !0), this.name = n, this.style = t;
  }
  return At(e, [{
    key: "getName",
    value: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return t ? "".concat(t, "-").concat(this.name) : this.name;
    }
  }]), e;
}();
function kn(e) {
  return e.notSplit = !0, e;
}
kn(["borderTop", "borderBottom"]), kn(["borderTop"]), kn(["borderBottom"]), kn(["borderLeft", "borderRight"]), kn(["borderLeft"]), kn(["borderRight"]);
var ma = /* @__PURE__ */ Ks({});
function op(e) {
  return du(e) || cu(e) || ua(e) || hu();
}
function cs(e, n) {
  for (var t = e, r = 0; r < n.length; r += 1) {
    if (t == null)
      return;
    t = t[n[r]];
  }
  return t;
}
function Du(e, n, t, r) {
  if (!n.length)
    return t;
  var o = op(n), i = o[0], s = o.slice(1), a;
  return !e && typeof i == "number" ? a = [] : Array.isArray(e) ? a = $t(e) : a = z({}, e), r && t === void 0 && s.length === 1 ? delete a[i][s[0]] : a[i] = Du(a[i], s, t, r), a;
}
function _i(e, n, t) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return n.length && r && t === void 0 && !cs(e, n.slice(0, -1)) ? e : Du(e, n, t, r);
}
function ip(e) {
  return we(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function yc(e) {
  return Array.isArray(e) ? [] : {};
}
var sp = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function ap() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  var r = yc(n[0]);
  return n.forEach(function(o) {
    function i(s, a) {
      var c = new Set(a), l = cs(o, s), f = Array.isArray(l);
      if (f || ip(l)) {
        if (!c.has(l)) {
          c.add(l);
          var d = cs(r, s);
          f ? r = _i(r, s, []) : (!d || we(d) !== "object") && (r = _i(r, s, yc(l))), sp(l).forEach(function(u) {
            i([].concat($t(s), [u]), c);
          });
        }
      } else
        r = _i(r, s, l);
    }
    i([]);
  }), r;
}
function Bu() {
}
let Ut = null;
function cp() {
  Ut = null, tu();
}
let ga = Bu;
process.env.NODE_ENV !== "production" && (ga = (e, n, t) => {
  sn(e, `[antd: ${n}] ${t}`), process.env.NODE_ENV === "test" && cp();
});
const Fu = /* @__PURE__ */ _.createContext({}), tr = process.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: n
  } = _.useContext(Fu), t = (r, o, i) => {
    if (!r)
      if (n === !1 && o === "deprecated") {
        const s = Ut;
        Ut || (Ut = {}), Ut[e] = Ut[e] || [], Ut[e].includes(i || "") || Ut[e].push(i || ""), s || console.warn("[antd] There exists deprecated usage in your code:", Ut);
      } else
        process.env.NODE_ENV !== "production" && ga(r, e, i);
  };
  return t.deprecated = (r, o, i, s) => {
    t(r, "deprecated", `\`${o}\` is deprecated. Please use \`${i}\` instead.${s ? ` ${s}` : ""}`);
  }, t;
} : () => {
  const e = () => {
  };
  return e.deprecated = Bu, e;
}, Qo = ga, lp = /* @__PURE__ */ Ks(void 0), ft = "${label} is not a valid ${type}", ei = {
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
        string: ft,
        method: ft,
        array: ft,
        object: ft,
        number: ft,
        date: ft,
        boolean: ft,
        integer: ft,
        float: ft,
        regexp: ft,
        email: ft,
        url: ft,
        hex: ft
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
Object.assign({}, ei.Modal);
let po = [];
const bc = () => po.reduce((e, n) => Object.assign(Object.assign({}, e), n), ei.Modal);
function up(e) {
  if (e) {
    const n = Object.assign({}, e);
    return po.push(n), bc(), () => {
      po = po.filter((t) => t !== n), bc();
    };
  }
  Object.assign({}, ei.Modal);
}
const zu = /* @__PURE__ */ Ks(void 0), Vu = "internalMark", Hu = (e) => {
  const {
    locale: n = {},
    children: t,
    _ANT_MARK__: r
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const i = tr("LocaleProvider");
    process.env.NODE_ENV !== "production" && i(r === Vu, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  _.useEffect(() => up(n == null ? void 0 : n.Modal), [n]);
  const o = _.useMemo(() => Object.assign(Object.assign({}, n), {
    exist: !0
  }), [n]);
  return /* @__PURE__ */ _.createElement(zu.Provider, {
    value: o
  }, t);
};
process.env.NODE_ENV !== "production" && (Hu.displayName = "LocaleProvider");
const Uu = {
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
}, _r = Object.assign(Object.assign({}, Uu), {
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
}), $e = Math.round;
function Ci(e, n) {
  const t = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], r = t.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    r[o] = n(r[o] || 0, t[o] || "", o);
  return t[3] ? r[3] = t[3].includes("%") ? r[3] / 100 : r[3] : r[3] = 1, r;
}
const Sc = (e, n, t) => t === 0 ? e : e / 100;
function fr(e, n) {
  const t = n || 255;
  return e > t ? t : e < 0 ? 0 : e;
}
class Be {
  constructor(n) {
    U(this, "isValid", !0), U(this, "r", 0), U(this, "g", 0), U(this, "b", 0), U(this, "a", 1), U(this, "_h", void 0), U(this, "_s", void 0), U(this, "_l", void 0), U(this, "_v", void 0), U(this, "_max", void 0), U(this, "_min", void 0), U(this, "_brightness", void 0);
    function t(r) {
      return r[0] in n && r[1] in n && r[2] in n;
    }
    if (n) if (typeof n == "string") {
      let o = function(i) {
        return r.startsWith(i);
      };
      const r = n.trim();
      /^#?[A-F\d]{3,8}$/i.test(r) ? this.fromHexString(r) : o("rgb") ? this.fromRgbString(r) : o("hsl") ? this.fromHslString(r) : (o("hsv") || o("hsb")) && this.fromHsvString(r);
    } else if (n instanceof Be)
      this.r = n.r, this.g = n.g, this.b = n.b, this.a = n.a, this._h = n._h, this._s = n._s, this._l = n._l, this._v = n._v;
    else if (t("rgb"))
      this.r = fr(n.r), this.g = fr(n.g), this.b = fr(n.b), this.a = typeof n.a == "number" ? fr(n.a, 1) : 1;
    else if (t("hsl"))
      this.fromHsl(n);
    else if (t("hsv"))
      this.fromHsv(n);
    else
      throw new Error("@ant-design/fast-color: unsupported input " + JSON.stringify(n));
  }
  // ======================= Setter =======================
  setR(n) {
    return this._sc("r", n);
  }
  setG(n) {
    return this._sc("g", n);
  }
  setB(n) {
    return this._sc("b", n);
  }
  setA(n) {
    return this._sc("a", n, 1);
  }
  setHue(n) {
    const t = this.toHsv();
    return t.h = n, this._c(t);
  }
  // ======================= Getter =======================
  /**
   * Returns the perceived luminance of a color, from 0-1.
   * @see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
   */
  getLuminance() {
    function n(i) {
      const s = i / 255;
      return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
    }
    const t = n(this.r), r = n(this.g), o = n(this.b);
    return 0.2126 * t + 0.7152 * r + 0.0722 * o;
  }
  getHue() {
    if (typeof this._h > "u") {
      const n = this.getMax() - this.getMin();
      n === 0 ? this._h = 0 : this._h = $e(60 * (this.r === this.getMax() ? (this.g - this.b) / n + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / n + 2 : (this.r - this.g) / n + 4));
    }
    return this._h;
  }
  getSaturation() {
    if (typeof this._s > "u") {
      const n = this.getMax() - this.getMin();
      n === 0 ? this._s = 0 : this._s = n / this.getMax();
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
  darken(n = 10) {
    const t = this.getHue(), r = this.getSaturation();
    let o = this.getLightness() - n / 100;
    return o < 0 && (o = 0), this._c({
      h: t,
      s: r,
      l: o,
      a: this.a
    });
  }
  lighten(n = 10) {
    const t = this.getHue(), r = this.getSaturation();
    let o = this.getLightness() + n / 100;
    return o > 1 && (o = 1), this._c({
      h: t,
      s: r,
      l: o,
      a: this.a
    });
  }
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  mix(n, t = 50) {
    const r = this._c(n), o = t / 100, i = (a) => (r[a] - this[a]) * o + this[a], s = {
      r: $e(i("r")),
      g: $e(i("g")),
      b: $e(i("b")),
      a: $e(i("a") * 100) / 100
    };
    return this._c(s);
  }
  /**
   * Mix the color with pure white, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return white.
   */
  tint(n = 10) {
    return this.mix({
      r: 255,
      g: 255,
      b: 255,
      a: 1
    }, n);
  }
  /**
   * Mix the color with pure black, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return black.
   */
  shade(n = 10) {
    return this.mix({
      r: 0,
      g: 0,
      b: 0,
      a: 1
    }, n);
  }
  onBackground(n) {
    const t = this._c(n), r = this.a + t.a * (1 - this.a), o = (i) => $e((this[i] * this.a + t[i] * t.a * (1 - this.a)) / r);
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
  equals(n) {
    return this.r === n.r && this.g === n.g && this.b === n.b && this.a === n.a;
  }
  clone() {
    return this._c(this);
  }
  // ======================= Format =======================
  toHexString() {
    let n = "#";
    const t = (this.r || 0).toString(16);
    n += t.length === 2 ? t : "0" + t;
    const r = (this.g || 0).toString(16);
    n += r.length === 2 ? r : "0" + r;
    const o = (this.b || 0).toString(16);
    if (n += o.length === 2 ? o : "0" + o, typeof this.a == "number" && this.a >= 0 && this.a < 1) {
      const i = $e(this.a * 255).toString(16);
      n += i.length === 2 ? i : "0" + i;
    }
    return n;
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
    const n = this.getHue(), t = $e(this.getSaturation() * 100), r = $e(this.getLightness() * 100);
    return this.a !== 1 ? `hsla(${n},${t}%,${r}%,${this.a})` : `hsl(${n},${t}%,${r}%)`;
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
  _sc(n, t, r) {
    const o = this.clone();
    return o[n] = fr(t, r), o;
  }
  _c(n) {
    return new this.constructor(n);
  }
  getMax() {
    return typeof this._max > "u" && (this._max = Math.max(this.r, this.g, this.b)), this._max;
  }
  getMin() {
    return typeof this._min > "u" && (this._min = Math.min(this.r, this.g, this.b)), this._min;
  }
  fromHexString(n) {
    const t = n.replace("#", "");
    function r(o, i) {
      return parseInt(t[o] + t[i || o], 16);
    }
    t.length < 6 ? (this.r = r(0), this.g = r(1), this.b = r(2), this.a = t[3] ? r(3) / 255 : 1) : (this.r = r(0, 1), this.g = r(2, 3), this.b = r(4, 5), this.a = t[6] ? r(6, 7) / 255 : 1);
  }
  fromHsl({
    h: n,
    s: t,
    l: r,
    a: o
  }) {
    if (this._h = n % 360, this._s = t, this._l = r, this.a = typeof o == "number" ? o : 1, t <= 0) {
      const u = $e(r * 255);
      this.r = u, this.g = u, this.b = u;
    }
    let i = 0, s = 0, a = 0;
    const c = n / 60, l = (1 - Math.abs(2 * r - 1)) * t, f = l * (1 - Math.abs(c % 2 - 1));
    c >= 0 && c < 1 ? (i = l, s = f) : c >= 1 && c < 2 ? (i = f, s = l) : c >= 2 && c < 3 ? (s = l, a = f) : c >= 3 && c < 4 ? (s = f, a = l) : c >= 4 && c < 5 ? (i = f, a = l) : c >= 5 && c < 6 && (i = l, a = f);
    const d = r - l / 2;
    this.r = $e((i + d) * 255), this.g = $e((s + d) * 255), this.b = $e((a + d) * 255);
  }
  fromHsv({
    h: n,
    s: t,
    v: r,
    a: o
  }) {
    this._h = n % 360, this._s = t, this._v = r, this.a = typeof o == "number" ? o : 1;
    const i = $e(r * 255);
    if (this.r = i, this.g = i, this.b = i, t <= 0)
      return;
    const s = n / 60, a = Math.floor(s), c = s - a, l = $e(r * (1 - t) * 255), f = $e(r * (1 - t * c) * 255), d = $e(r * (1 - t * (1 - c)) * 255);
    switch (a) {
      case 0:
        this.g = d, this.b = l;
        break;
      case 1:
        this.r = f, this.b = l;
        break;
      case 2:
        this.r = l, this.b = d;
        break;
      case 3:
        this.r = l, this.g = f;
        break;
      case 4:
        this.r = d, this.g = l;
        break;
      case 5:
      default:
        this.g = l, this.b = f;
        break;
    }
  }
  fromHsvString(n) {
    const t = Ci(n, Sc);
    this.fromHsv({
      h: t[0],
      s: t[1],
      v: t[2],
      a: t[3]
    });
  }
  fromHslString(n) {
    const t = Ci(n, Sc);
    this.fromHsl({
      h: t[0],
      s: t[1],
      l: t[2],
      a: t[3]
    });
  }
  fromRgbString(n) {
    const t = Ci(n, (r, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? $e(r / 100 * 255) : r
    ));
    this.r = t[0], this.g = t[1], this.b = t[2], this.a = t[3];
  }
}
var $r = 2, wc = 0.16, fp = 0.05, dp = 0.05, hp = 0.15, qu = 5, Wu = 4, xp = [{
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
function Ec(e, n, t) {
  var r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = t ? Math.round(e.h) - $r * n : Math.round(e.h) + $r * n : r = t ? Math.round(e.h) + $r * n : Math.round(e.h) - $r * n, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function _c(e, n, t) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var r;
  return t ? r = e.s - wc * n : n === Wu ? r = e.s + wc : r = e.s + fp * n, r > 1 && (r = 1), t && n === qu && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Math.round(r * 100) / 100;
}
function Cc(e, n, t) {
  var r;
  return t ? r = e.v + dp * n : r = e.v - hp * n, r = Math.max(0, Math.min(1, r)), Math.round(r * 100) / 100;
}
function Cr(e) {
  for (var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = [], r = new Be(e), o = r.toHsv(), i = qu; i > 0; i -= 1) {
    var s = new Be({
      h: Ec(o, i, !0),
      s: _c(o, i, !0),
      v: Cc(o, i, !0)
    });
    t.push(s);
  }
  t.push(r);
  for (var a = 1; a <= Wu; a += 1) {
    var c = new Be({
      h: Ec(o, a),
      s: _c(o, a),
      v: Cc(o, a)
    });
    t.push(c);
  }
  return n.theme === "dark" ? xp.map(function(l) {
    var f = l.index, d = l.amount;
    return new Be(n.backgroundColor || "#141414").mix(t[f], d).toHexString();
  }) : t.map(function(l) {
    return l.toHexString();
  });
}
var Ai = {
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
}, ls = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
ls.primary = ls[5];
var us = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
us.primary = us[5];
var fs = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
fs.primary = fs[5];
var ds = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
ds.primary = ds[5];
var hs = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
hs.primary = hs[5];
var xs = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
xs.primary = xs[5];
var ps = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
ps.primary = ps[5];
var ms = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
ms.primary = ms[5];
var To = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
To.primary = To[5];
var gs = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
gs.primary = gs[5];
var vs = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
vs.primary = vs[5];
var ys = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
ys.primary = ys[5];
var bs = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
bs.primary = bs[5];
var Ti = {
  red: ls,
  volcano: us,
  orange: fs,
  gold: ds,
  yellow: hs,
  lime: xs,
  green: ps,
  cyan: ms,
  blue: To,
  geekblue: gs,
  purple: vs,
  magenta: ys,
  grey: bs
};
function pp(e, n) {
  let {
    generateColorPalettes: t,
    generateNeutralColorPalettes: r
  } = n;
  const {
    colorSuccess: o,
    colorWarning: i,
    colorError: s,
    colorInfo: a,
    colorPrimary: c,
    colorBgBase: l,
    colorTextBase: f
  } = e, d = t(c), u = t(o), v = t(i), g = t(s), h = t(a), x = r(l, f), S = e.colorLink || e.colorInfo, b = t(S), m = new Be(g[1]).mix(new Be(g[3]), 50).toHexString();
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
    colorSuccessBg: u[1],
    colorSuccessBgHover: u[2],
    colorSuccessBorder: u[3],
    colorSuccessBorderHover: u[4],
    colorSuccessHover: u[4],
    colorSuccess: u[6],
    colorSuccessActive: u[7],
    colorSuccessTextHover: u[8],
    colorSuccessText: u[9],
    colorSuccessTextActive: u[10],
    colorErrorBg: g[1],
    colorErrorBgHover: g[2],
    colorErrorBgFilledHover: m,
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
    colorLinkHover: b[4],
    colorLink: b[6],
    colorLinkActive: b[7],
    colorBgMask: new Be("#000").setA(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const mp = (e) => {
  let n = e, t = e, r = e, o = e;
  return e < 6 && e >= 5 ? n = e + 1 : e < 16 && e >= 6 ? n = e + 2 : e >= 16 && (n = 16), e < 7 && e >= 5 ? t = 4 : e < 8 && e >= 7 ? t = 5 : e < 14 && e >= 8 ? t = 6 : e < 16 && e >= 14 ? t = 7 : e >= 16 && (t = 8), e < 6 && e >= 2 ? r = 1 : e >= 6 && (r = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
    borderRadius: e,
    borderRadiusXS: r,
    borderRadiusSM: t,
    borderRadiusLG: n,
    borderRadiusOuter: o
  };
};
function gp(e) {
  const {
    motionUnit: n,
    motionBase: t,
    borderRadius: r,
    lineWidth: o
  } = e;
  return Object.assign({
    // motion
    motionDurationFast: `${(t + n).toFixed(1)}s`,
    motionDurationMid: `${(t + n * 2).toFixed(1)}s`,
    motionDurationSlow: `${(t + n * 3).toFixed(1)}s`,
    // line
    lineWidthBold: o + 1
  }, mp(r));
}
const vp = (e) => {
  const {
    controlHeight: n
  } = e;
  return {
    controlHeightSM: n * 0.75,
    controlHeightXS: n * 0.5,
    controlHeightLG: n * 1.25
  };
};
function yp(e) {
  return (e + 8) / e;
}
function bp(e) {
  const n = Array.from({
    length: 10
  }).map((t, r) => {
    const o = r - 1, i = e * Math.pow(Math.E, o / 5), s = r > 1 ? Math.floor(i) : Math.ceil(i);
    return Math.floor(s / 2) * 2;
  });
  return n[1] = e, n.map((t) => ({
    size: t,
    lineHeight: yp(t)
  }));
}
const Sp = (e) => {
  const n = bp(e), t = n.map((f) => f.size), r = n.map((f) => f.lineHeight), o = t[1], i = t[0], s = t[2], a = r[1], c = r[0], l = r[2];
  return {
    fontSizeSM: i,
    fontSize: o,
    fontSizeLG: s,
    fontSizeXL: t[3],
    fontSizeHeading1: t[6],
    fontSizeHeading2: t[5],
    fontSizeHeading3: t[4],
    fontSizeHeading4: t[3],
    fontSizeHeading5: t[2],
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
function wp(e) {
  const {
    sizeUnit: n,
    sizeStep: t
  } = e;
  return {
    sizeXXL: n * (t + 8),
    // 48
    sizeXL: n * (t + 4),
    // 32
    sizeLG: n * (t + 2),
    // 24
    sizeMD: n * (t + 1),
    // 20
    sizeMS: n * t,
    // 16
    size: n * t,
    // 16
    sizeSM: n * (t - 1),
    // 12
    sizeXS: n * (t - 2),
    // 8
    sizeXXS: n * (t - 3)
    // 4
  };
}
const ht = (e, n) => new Be(e).setA(n).toRgbString(), dr = (e, n) => new Be(e).darken(n).toHexString(), Ep = (e) => {
  const n = Cr(e);
  return {
    1: n[0],
    2: n[1],
    3: n[2],
    4: n[3],
    5: n[4],
    6: n[5],
    7: n[6],
    8: n[4],
    9: n[5],
    10: n[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
}, _p = (e, n) => {
  const t = e || "#fff", r = n || "#000";
  return {
    colorBgBase: t,
    colorTextBase: r,
    colorText: ht(r, 0.88),
    colorTextSecondary: ht(r, 0.65),
    colorTextTertiary: ht(r, 0.45),
    colorTextQuaternary: ht(r, 0.25),
    colorFill: ht(r, 0.15),
    colorFillSecondary: ht(r, 0.06),
    colorFillTertiary: ht(r, 0.04),
    colorFillQuaternary: ht(r, 0.02),
    colorBgSolid: ht(r, 1),
    colorBgSolidHover: ht(r, 0.75),
    colorBgSolidActive: ht(r, 0.95),
    colorBgLayout: dr(t, 4),
    colorBgContainer: dr(t, 0),
    colorBgElevated: dr(t, 0),
    colorBgSpotlight: ht(r, 0.85),
    colorBgBlur: "transparent",
    colorBorder: dr(t, 15),
    colorBorderSecondary: dr(t, 6)
  };
};
function Cp(e) {
  Ai.pink = Ai.magenta, Ti.pink = Ti.magenta;
  const n = Object.keys(Uu).map((t) => {
    const r = e[t] === Ai[t] ? Ti[t] : Cr(e[t]);
    return Array.from({
      length: 10
    }, () => 1).reduce((o, i, s) => (o[`${t}-${s + 1}`] = r[s], o[`${t}${s + 1}`] = r[s], o), {});
  }).reduce((t, r) => (t = Object.assign(Object.assign({}, t), r), t), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), n), pp(e, {
    generateColorPalettes: Ep,
    generateNeutralColorPalettes: _p
  })), Sp(e.fontSize)), wp(e)), vp(e)), gp(e));
}
const $u = ns(Cp), Ss = {
  token: _r,
  override: {
    override: _r
  },
  hashed: !0
}, Yu = /* @__PURE__ */ Fe.createContext(Ss), ws = "ant", va = "anticon", Ap = (e, n) => n || (e ? `${ws}-${e}` : ws), nn = /* @__PURE__ */ _.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: Ap,
  iconPrefixCls: va
}), {
  Consumer: Xv
} = nn, Ac = {};
function Xu(e) {
  const n = _.useContext(nn), {
    getPrefixCls: t,
    direction: r,
    getPopupContainer: o
  } = n, i = n[e];
  return Object.assign(Object.assign({
    classNames: Ac,
    styles: Ac
  }, i), {
    getPrefixCls: t,
    direction: r,
    getPopupContainer: o
  });
}
const Tp = `-ant-${Date.now()}-${Math.random()}`;
function Op(e, n) {
  const t = {}, r = (s, a) => {
    let c = s.clone();
    return c = (a == null ? void 0 : a(c)) || c, c.toRgbString();
  }, o = (s, a) => {
    const c = new Be(s), l = Cr(c.toRgbString());
    t[`${a}-color`] = r(c), t[`${a}-color-disabled`] = l[1], t[`${a}-color-hover`] = l[4], t[`${a}-color-active`] = l[6], t[`${a}-color-outline`] = c.clone().setA(0.2).toRgbString(), t[`${a}-color-deprecated-bg`] = l[0], t[`${a}-color-deprecated-border`] = l[2];
  };
  if (n.primaryColor) {
    o(n.primaryColor, "primary");
    const s = new Be(n.primaryColor), a = Cr(s.toRgbString());
    a.forEach((l, f) => {
      t[`primary-${f + 1}`] = l;
    }), t["primary-color-deprecated-l-35"] = r(s, (l) => l.lighten(35)), t["primary-color-deprecated-l-20"] = r(s, (l) => l.lighten(20)), t["primary-color-deprecated-t-20"] = r(s, (l) => l.tint(20)), t["primary-color-deprecated-t-50"] = r(s, (l) => l.tint(50)), t["primary-color-deprecated-f-12"] = r(s, (l) => l.setA(l.a * 0.12));
    const c = new Be(a[0]);
    t["primary-color-active-deprecated-f-30"] = r(c, (l) => l.setA(l.a * 0.3)), t["primary-color-active-deprecated-d-02"] = r(c, (l) => l.darken(2));
  }
  return n.successColor && o(n.successColor, "success"), n.warningColor && o(n.warningColor, "warning"), n.errorColor && o(n.errorColor, "error"), n.infoColor && o(n.infoColor, "info"), `
  :root {
    ${Object.keys(t).map((s) => `--${e}-${s}: ${t[s]};`).join(`
`)}
  }
  `.trim();
}
function Rp(e, n) {
  const t = Op(e, n);
  Yt() ? Sn(t, `${Tp}-dynamic-theme`) : process.env.NODE_ENV !== "production" && Qo(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const Es = /* @__PURE__ */ _.createContext(!1), Pp = (e) => {
  let {
    children: n,
    disabled: t
  } = e;
  const r = _.useContext(Es);
  return /* @__PURE__ */ _.createElement(Es.Provider, {
    value: t ?? r
  }, n);
}, Ar = /* @__PURE__ */ _.createContext(void 0), kp = (e) => {
  let {
    children: n,
    size: t
  } = e;
  const r = _.useContext(Ar);
  return /* @__PURE__ */ _.createElement(Ar.Provider, {
    value: t || r
  }, n);
};
function Ip() {
  const e = tn(Es), n = tn(Ar);
  return {
    componentDisabled: e,
    componentSize: n
  };
}
var Gu = /* @__PURE__ */ At(function e() {
  Ct(this, e);
}), Ku = "CALC_UNIT", Np = new RegExp(Ku, "g");
function Oi(e) {
  return typeof e == "number" ? "".concat(e).concat(Ku) : e;
}
var jp = /* @__PURE__ */ function(e) {
  Pr(t, e);
  var n = Xo(t);
  function t(r, o) {
    var i;
    Ct(this, t), i = n.call(this), U(bn(i), "result", ""), U(bn(i), "unitlessCssVar", void 0), U(bn(i), "lowPriority", void 0);
    var s = we(r);
    return i.unitlessCssVar = o, r instanceof t ? i.result = "(".concat(r.result, ")") : s === "number" ? i.result = Oi(r) : s === "string" && (i.result = r), i;
  }
  return At(t, [{
    key: "add",
    value: function(o) {
      return o instanceof t ? this.result = "".concat(this.result, " + ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " + ").concat(Oi(o))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(o) {
      return o instanceof t ? this.result = "".concat(this.result, " - ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " - ").concat(Oi(o))), this.lowPriority = !0, this;
    }
  }, {
    key: "mul",
    value: function(o) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), o instanceof t ? this.result = "".concat(this.result, " * ").concat(o.getResult(!0)) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " * ").concat(o)), this.lowPriority = !1, this;
    }
  }, {
    key: "div",
    value: function(o) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), o instanceof t ? this.result = "".concat(this.result, " / ").concat(o.getResult(!0)) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " / ").concat(o)), this.lowPriority = !1, this;
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
      }) && (c = !1), this.result = this.result.replace(Np, c ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), t;
}(Gu), Lp = /* @__PURE__ */ function(e) {
  Pr(t, e);
  var n = Xo(t);
  function t(r) {
    var o;
    return Ct(this, t), o = n.call(this), U(bn(o), "result", 0), r instanceof t ? o.result = r.result : typeof r == "number" && (o.result = r), o;
  }
  return At(t, [{
    key: "add",
    value: function(o) {
      return o instanceof t ? this.result += o.result : typeof o == "number" && (this.result += o), this;
    }
  }, {
    key: "sub",
    value: function(o) {
      return o instanceof t ? this.result -= o.result : typeof o == "number" && (this.result -= o), this;
    }
  }, {
    key: "mul",
    value: function(o) {
      return o instanceof t ? this.result *= o.result : typeof o == "number" && (this.result *= o), this;
    }
  }, {
    key: "div",
    value: function(o) {
      return o instanceof t ? this.result /= o.result : typeof o == "number" && (this.result /= o), this;
    }
  }, {
    key: "equal",
    value: function() {
      return this.result;
    }
  }]), t;
}(Gu), Mp = function(n, t) {
  var r = n === "css" ? jp : Lp;
  return function(o) {
    return new r(o, t);
  };
}, Tc = function(n, t) {
  return "".concat([t, n.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function _s(e) {
  var n = _.useRef();
  n.current = e;
  var t = _.useCallback(function() {
    for (var r, o = arguments.length, i = new Array(o), s = 0; s < o; s++)
      i[s] = arguments[s];
    return (r = n.current) === null || r === void 0 ? void 0 : r.call.apply(r, [n].concat(i));
  }, []);
  return t;
}
function Cs(e) {
  var n = _.useRef(!1), t = _.useState(e), r = le(t, 2), o = r[0], i = r[1];
  _.useEffect(function() {
    return n.current = !1, function() {
      n.current = !0;
    };
  }, []);
  function s(a, c) {
    c && n.current || i(a);
  }
  return [o, s];
}
function Oc(e, n, t, r) {
  var o = z({}, n[e]);
  if (r != null && r.deprecatedTokens) {
    var i = r.deprecatedTokens;
    i.forEach(function(a) {
      var c = le(a, 2), l = c[0], f = c[1];
      if (process.env.NODE_ENV !== "production" && sn(!(o != null && o[l]), "Component Token `".concat(String(l), "` of ").concat(String(e), " is deprecated. Please use `").concat(String(f), "` instead.")), o != null && o[l] || o != null && o[f]) {
        var d;
        (d = o[f]) !== null && d !== void 0 || (o[f] = o == null ? void 0 : o[l]);
      }
    });
  }
  var s = z(z({}, t), o);
  return Object.keys(s).forEach(function(a) {
    s[a] === n[a] && delete s[a];
  }), s;
}
var Zu = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", As = !0;
function ti() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  if (!Zu)
    return Object.assign.apply(Object, [{}].concat(n));
  As = !1;
  var r = {};
  return n.forEach(function(o) {
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
  }), As = !0, r;
}
var Rc = {};
function Dp() {
}
var Bp = function(n) {
  var t, r = n, o = Dp;
  return Zu && typeof Proxy < "u" && (t = /* @__PURE__ */ new Set(), r = new Proxy(n, {
    get: function(s, a) {
      if (As) {
        var c;
        (c = t) === null || c === void 0 || c.add(a);
      }
      return s[a];
    }
  }), o = function(s, a) {
    var c;
    Rc[s] = {
      global: Array.from(t),
      component: z(z({}, (c = Rc[s]) === null || c === void 0 ? void 0 : c.component), a)
    };
  }), {
    token: r,
    keys: t,
    flush: o
  };
};
function Pc(e, n, t) {
  if (typeof t == "function") {
    var r;
    return t(ti(n, (r = n[e]) !== null && r !== void 0 ? r : {}));
  }
  return t ?? {};
}
function Fp(e) {
  return e === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++)
        r[o] = arguments[o];
      return "max(".concat(r.map(function(i) {
        return Co(i);
      }).join(","), ")");
    },
    min: function() {
      for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++)
        r[o] = arguments[o];
      return "min(".concat(r.map(function(i) {
        return Co(i);
      }).join(","), ")");
    }
  };
}
var zp = 1e3 * 60 * 10, Vp = /* @__PURE__ */ function() {
  function e() {
    Ct(this, e), U(this, "map", /* @__PURE__ */ new Map()), U(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), U(this, "nextID", 0), U(this, "lastAccessBeat", /* @__PURE__ */ new Map()), U(this, "accessBeat", 0);
  }
  return At(e, [{
    key: "set",
    value: function(t, r) {
      this.clear();
      var o = this.getCompositeKey(t);
      this.map.set(o, r), this.lastAccessBeat.set(o, Date.now());
    }
  }, {
    key: "get",
    value: function(t) {
      var r = this.getCompositeKey(t), o = this.map.get(r);
      return this.lastAccessBeat.set(r, Date.now()), this.accessBeat += 1, o;
    }
  }, {
    key: "getCompositeKey",
    value: function(t) {
      var r = this, o = t.map(function(i) {
        return i && we(i) === "object" ? "obj_".concat(r.getObjectID(i)) : "".concat(we(i), "_").concat(i);
      });
      return o.join("|");
    }
  }, {
    key: "getObjectID",
    value: function(t) {
      if (this.objectIDMap.has(t))
        return this.objectIDMap.get(t);
      var r = this.nextID;
      return this.objectIDMap.set(t, r), this.nextID += 1, r;
    }
  }, {
    key: "clear",
    value: function() {
      var t = this;
      if (this.accessBeat > 1e4) {
        var r = Date.now();
        this.lastAccessBeat.forEach(function(o, i) {
          r - o > zp && (t.map.delete(i), t.lastAccessBeat.delete(i));
        }), this.accessBeat = 0;
      }
    }
  }]), e;
}(), kc = new Vp();
function Hp(e, n) {
  return Fe.useMemo(function() {
    var t = kc.get(n);
    if (t)
      return t;
    var r = e();
    return kc.set(n, r), r;
  }, n);
}
var Up = function() {
  return {};
};
function qp(e) {
  var n = e.useCSP, t = n === void 0 ? Up : n, r = e.useToken, o = e.usePrefix, i = e.getResetStyles, s = e.getCommonStyle, a = e.getCompUnitless;
  function c(u, v, g, h) {
    var x = Array.isArray(u) ? u[0] : u;
    function S(I) {
      return "".concat(String(x)).concat(I.slice(0, 1).toUpperCase()).concat(I.slice(1));
    }
    var b = (h == null ? void 0 : h.unitless) || {}, m = typeof a == "function" ? a(u) : {}, T = z(z({}, m), {}, U({}, S("zIndexPopup"), !0));
    Object.keys(b).forEach(function(I) {
      T[S(I)] = b[I];
    });
    var y = z(z({}, h), {}, {
      unitless: T,
      prefixToken: S
    }), O = f(u, v, g, y), C = l(x, g, y);
    return function(I) {
      var F = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : I, W = O(I, F), ne = le(W, 2), X = ne[1], D = C(F), V = le(D, 2), q = V[0], $ = V[1];
      return [q, X, $];
    };
  }
  function l(u, v, g) {
    var h = g.unitless, x = g.injectStyle, S = x === void 0 ? !0 : x, b = g.prefixToken, m = g.ignore, T = function(C) {
      var I = C.rootCls, F = C.cssVar, W = F === void 0 ? {} : F, ne = r(), X = ne.realToken;
      return np({
        path: [u],
        prefix: W.prefix,
        key: W.key,
        unitless: h,
        ignore: m,
        token: X,
        scope: I
      }, function() {
        var D = Pc(u, X, v), V = Oc(u, X, D, {
          deprecatedTokens: g == null ? void 0 : g.deprecatedTokens
        });
        return Object.keys(D).forEach(function(q) {
          V[b(q)] = V[q], delete V[q];
        }), V;
      }), null;
    }, y = function(C) {
      var I = r(), F = I.cssVar;
      return [function(W) {
        return S && F ? /* @__PURE__ */ Fe.createElement(Fe.Fragment, null, /* @__PURE__ */ Fe.createElement(T, {
          rootCls: C,
          cssVar: F,
          component: u
        }), W) : W;
      }, F == null ? void 0 : F.key];
    };
    return y;
  }
  function f(u, v, g) {
    var h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, x = Array.isArray(u) ? u : [u, u], S = le(x, 1), b = S[0], m = x.join("-"), T = e.layer || {
      name: "antd"
    };
    return function(y) {
      var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : y, C = r(), I = C.theme, F = C.realToken, W = C.hashId, ne = C.token, X = C.cssVar, D = o(), V = D.rootPrefixCls, q = D.iconPrefixCls, $ = t(), ee = X ? "css" : "js", K = Hp(function() {
        var xe = /* @__PURE__ */ new Set();
        return X && Object.keys(h.unitless || {}).forEach(function(fe) {
          xe.add(lo(fe, X.prefix)), xe.add(lo(fe, Tc(b, X.prefix)));
        }), Mp(ee, xe);
      }, [ee, b, X == null ? void 0 : X.prefix]), Q = Fp(ee), oe = Q.max, ie = Q.min, Z = {
        theme: I,
        token: ne,
        hashId: W,
        nonce: function() {
          return $.nonce;
        },
        clientOnly: h.clientOnly,
        layer: T,
        // antd is always at top of styles
        order: h.order || -999
      };
      typeof i == "function" && as(z(z({}, Z), {}, {
        clientOnly: !1,
        path: ["Shared", V]
      }), function() {
        return i(ne, {
          prefix: {
            rootPrefixCls: V,
            iconPrefixCls: q
          },
          csp: $
        });
      });
      var re = as(z(z({}, Z), {}, {
        path: [m, y, q]
      }), function() {
        if (h.injectStyle === !1)
          return [];
        var xe = Bp(ne), fe = xe.token, pe = xe.flush, ge = Pc(b, F, g), j = ".".concat(y), N = Oc(b, F, ge, {
          deprecatedTokens: h.deprecatedTokens
        });
        X && ge && we(ge) === "object" && Object.keys(ge).forEach(function(G) {
          ge[G] = "var(".concat(lo(G, Tc(b, X.prefix)), ")");
        });
        var L = ti(fe, {
          componentCls: j,
          prefixCls: y,
          iconCls: ".".concat(q),
          antCls: ".".concat(V),
          calc: K,
          // @ts-ignore
          max: oe,
          // @ts-ignore
          min: ie
        }, X ? ge : N), B = v(L, {
          hashId: W,
          prefixCls: y,
          rootPrefixCls: V,
          iconPrefixCls: q
        });
        pe(b, N);
        var E = typeof s == "function" ? s(L, y, O, h.resetFont) : null;
        return [h.resetStyle === !1 ? null : E, B];
      });
      return [re, W];
    };
  }
  function d(u, v, g) {
    var h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, x = f(u, v, g, z({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, h)), S = function(m) {
      var T = m.prefixCls, y = m.rootCls, O = y === void 0 ? T : y;
      return x(T, O), null;
    };
    return process.env.NODE_ENV !== "production" && (S.displayName = "SubStyle_".concat(String(Array.isArray(u) ? u.join(".") : u))), S;
  }
  return {
    genStyleHooks: c,
    genSubStyleComponent: d,
    genComponentStyleHook: f
  };
}
const Wp = "5.24.6";
function Ri(e) {
  return e >= 0 && e <= 255;
}
function Yr(e, n) {
  const {
    r: t,
    g: r,
    b: o,
    a: i
  } = new Be(e).toRgb();
  if (i < 1)
    return e;
  const {
    r: s,
    g: a,
    b: c
  } = new Be(n).toRgb();
  for (let l = 0.01; l <= 1; l += 0.01) {
    const f = Math.round((t - s * (1 - l)) / l), d = Math.round((r - a * (1 - l)) / l), u = Math.round((o - c * (1 - l)) / l);
    if (Ri(f) && Ri(d) && Ri(u))
      return new Be({
        r: f,
        g: d,
        b: u,
        a: Math.round(l * 100) / 100
      }).toRgbString();
  }
  return new Be({
    r: t,
    g: r,
    b: o,
    a: 1
  }).toRgbString();
}
var $p = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
function Ju(e) {
  const {
    override: n
  } = e, t = $p(e, ["override"]), r = Object.assign({}, n);
  Object.keys(_r).forEach((u) => {
    delete r[u];
  });
  const o = Object.assign(Object.assign({}, t), r), i = 480, s = 576, a = 768, c = 992, l = 1200, f = 1600;
  if (o.motion === !1) {
    const u = "0s";
    o.motionDurationFast = u, o.motionDurationMid = u, o.motionDurationSlow = u;
  }
  return Object.assign(Object.assign(Object.assign({}, o), {
    // ============== Background ============== //
    colorFillContent: o.colorFillSecondary,
    colorFillContentHover: o.colorFill,
    colorFillAlter: o.colorFillQuaternary,
    colorBgContainerDisabled: o.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: o.colorBgContainer,
    colorSplit: Yr(o.colorBorderSecondary, o.colorBgContainer),
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
    colorErrorOutline: Yr(o.colorErrorBg, o.colorBgContainer),
    colorWarningOutline: Yr(o.colorWarningBg, o.colorBgContainer),
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
    controlOutline: Yr(o.colorPrimaryBg, o.colorBgContainer),
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
    screenXLMax: f - 1,
    screenXXL: f,
    screenXXLMin: f,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new Be("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new Be("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new Be("rgba(0, 0, 0, 0.09)").toRgbString()}
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
var Ic = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
const Qu = {
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
}, Yp = {
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
}, Xp = {
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
}, ef = (e, n, t) => {
  const r = t.getDerivativeToken(e), {
    override: o
  } = n, i = Ic(n, ["override"]);
  let s = Object.assign(Object.assign({}, r), {
    override: o
  });
  return s = Ju(s), i && Object.entries(i).forEach((a) => {
    let [c, l] = a;
    const {
      theme: f
    } = l, d = Ic(l, ["theme"]);
    let u = d;
    f && (u = ef(Object.assign(Object.assign({}, s), d), {
      override: d
    }, f)), s[c] = u;
  }), s;
};
function ya() {
  const {
    token: e,
    hashed: n,
    theme: t,
    override: r,
    cssVar: o
  } = Fe.useContext(Yu), i = `${Wp}-${n || ""}`, s = t || $u, [a, c, l] = Tx(s, [_r, e], {
    salt: i,
    override: r,
    getComputedToken: ef,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: Ju,
    cssVar: o && {
      prefix: o.prefix,
      key: o.key,
      unitless: Qu,
      ignore: Yp,
      preserve: Xp
    }
  });
  return [s, l, n ? c : "", a, o];
}
const tf = function(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
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
    fontFamily: n ? "inherit" : e.fontFamily
  };
}, Gp = () => ({
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
}), Kp = (e) => ({
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
}), Zp = (e, n, t, r) => {
  const o = `[class^="${n}"], [class*=" ${n}"]`, i = t ? `.${t}` : o, s = {
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
}, nf = (e) => ({
  [`.${e}`]: Object.assign(Object.assign({}, Gp()), {
    [`.${e} .${e}-icon`]: {
      display: "block"
    }
  })
}), {
  genStyleHooks: ba
} = qp({
  usePrefix: () => {
    const {
      getPrefixCls: e,
      iconPrefixCls: n
    } = tn(nn);
    return {
      rootPrefixCls: e(),
      iconPrefixCls: n
    };
  },
  useToken: () => {
    const [e, n, t, r, o] = ya();
    return {
      theme: e,
      realToken: n,
      hashId: t,
      token: r,
      cssVar: o
    };
  },
  useCSP: () => {
    const {
      csp: e
    } = tn(nn);
    return e ?? {};
  },
  getResetStyles: (e, n) => {
    var t;
    const r = Kp(e);
    return [r, {
      "&": r
    }, nf((t = n == null ? void 0 : n.prefix.iconPrefixCls) !== null && t !== void 0 ? t : va)];
  },
  getCommonStyle: Zp,
  getCompUnitless: () => Qu
}), Jp = (e, n) => {
  const [t, r] = ya();
  return as({
    token: r,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => n == null ? void 0 : n.nonce,
    layer: {
      name: "antd"
    }
  }, () => [nf(e)]);
}, Qp = Object.assign({}, _), {
  useId: Nc
} = Qp, e1 = () => "", t1 = typeof Nc > "u" ? e1 : Nc;
function n1(e, n, t) {
  var r, o;
  const i = tr("ConfigProvider"), s = e || {}, a = s.inherit === !1 || !n ? Object.assign(Object.assign({}, Ss), {
    hashed: (r = n == null ? void 0 : n.hashed) !== null && r !== void 0 ? r : Ss.hashed,
    cssVar: n == null ? void 0 : n.cssVar
  }) : n, c = t1();
  if (process.env.NODE_ENV !== "production") {
    const l = s.cssVar || a.cssVar, f = !!(typeof s.cssVar == "object" && (!((o = s.cssVar) === null || o === void 0) && o.key) || c);
    process.env.NODE_ENV !== "production" && i(!l || f, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return ou(() => {
    var l, f;
    if (!e)
      return n;
    const d = Object.assign({}, a.components);
    Object.keys(e.components || {}).forEach((g) => {
      d[g] = Object.assign(Object.assign({}, d[g]), e.components[g]);
    });
    const u = `css-var-${c.replace(/:/g, "")}`, v = ((l = s.cssVar) !== null && l !== void 0 ? l : a.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: t == null ? void 0 : t.prefixCls
    }, typeof a.cssVar == "object" ? a.cssVar : {}), typeof s.cssVar == "object" ? s.cssVar : {}), {
      key: typeof s.cssVar == "object" && ((f = s.cssVar) === null || f === void 0 ? void 0 : f.key) || u
    });
    return Object.assign(Object.assign(Object.assign({}, a), s), {
      token: Object.assign(Object.assign({}, a.token), s.token),
      components: d,
      cssVar: v
    });
  }, [s, a], (l, f) => l.some((d, u) => {
    const v = f[u];
    return !Qh(d, v, !0);
  }));
}
var r1 = ["children"], rf = /* @__PURE__ */ _.createContext({});
function o1(e) {
  var n = e.children, t = wr(e, r1);
  return /* @__PURE__ */ _.createElement(rf.Provider, {
    value: t
  }, n);
}
var i1 = /* @__PURE__ */ function(e) {
  Pr(t, e);
  var n = Xo(t);
  function t() {
    return Ct(this, t), n.apply(this, arguments);
  }
  return At(t, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), t;
}(_.Component);
function s1(e) {
  var n = _.useReducer(function(a) {
    return a + 1;
  }, 0), t = le(n, 2), r = t[1], o = _.useRef(e), i = _s(function() {
    return o.current;
  }), s = _s(function(a) {
    o.current = typeof a == "function" ? a(o.current) : a, r();
  });
  return [i, s];
}
var Zt = "none", Xr = "appear", Gr = "enter", Kr = "leave", jc = "none", yt = "prepare", In = "start", Nn = "active", Sa = "end", of = "prepared";
function Lc(e, n) {
  var t = {};
  return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit".concat(e)] = "webkit".concat(n), t["Moz".concat(e)] = "moz".concat(n), t["ms".concat(e)] = "MS".concat(n), t["O".concat(e)] = "o".concat(n.toLowerCase()), t;
}
function a1(e, n) {
  var t = {
    animationend: Lc("Animation", "AnimationEnd"),
    transitionend: Lc("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in n || delete t.animationend.animation, "TransitionEvent" in n || delete t.transitionend.transition), t;
}
var c1 = a1(Yt(), typeof window < "u" ? window : {}), sf = {};
if (Yt()) {
  var l1 = document.createElement("div");
  sf = l1.style;
}
var Zr = {};
function af(e) {
  if (Zr[e])
    return Zr[e];
  var n = c1[e];
  if (n)
    for (var t = Object.keys(n), r = t.length, o = 0; o < r; o += 1) {
      var i = t[o];
      if (Object.prototype.hasOwnProperty.call(n, i) && i in sf)
        return Zr[e] = n[i], Zr[e];
    }
  return "";
}
var cf = af("animationend"), lf = af("transitionend"), uf = !!(cf && lf), Mc = cf || "animationend", Dc = lf || "transitionend";
function Bc(e, n) {
  if (!e) return null;
  if (we(e) === "object") {
    var t = n.replace(/-\w/g, function(r) {
      return r[1].toUpperCase();
    });
    return e[t];
  }
  return "".concat(e, "-").concat(n);
}
const u1 = function(e) {
  var n = qe();
  function t(o) {
    o && (o.removeEventListener(Dc, e), o.removeEventListener(Mc, e));
  }
  function r(o) {
    n.current && n.current !== o && t(n.current), o && o !== n.current && (o.addEventListener(Dc, e), o.addEventListener(Mc, e), n.current = o);
  }
  return _.useEffect(function() {
    return function() {
      t(n.current);
    };
  }, []), [r, t];
};
var ff = Yt() ? x0 : st;
const f1 = function() {
  var e = _.useRef(null);
  function n() {
    _o.cancel(e.current);
  }
  function t(r) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    n();
    var i = _o(function() {
      o <= 1 ? r({
        isCanceled: function() {
          return i !== e.current;
        }
      }) : t(r, o - 1);
    });
    e.current = i;
  }
  return _.useEffect(function() {
    return function() {
      n();
    };
  }, []), [t, n];
};
var d1 = [yt, In, Nn, Sa], h1 = [yt, of], df = !1, x1 = !0;
function hf(e) {
  return e === Nn || e === Sa;
}
const p1 = function(e, n, t) {
  var r = Cs(jc), o = le(r, 2), i = o[0], s = o[1], a = f1(), c = le(a, 2), l = c[0], f = c[1];
  function d() {
    s(yt, !0);
  }
  var u = n ? h1 : d1;
  return ff(function() {
    if (i !== jc && i !== Sa) {
      var v = u.indexOf(i), g = u[v + 1], h = t(i);
      h === df ? s(g, !0) : g && l(function(x) {
        function S() {
          x.isCanceled() || s(g, !0);
        }
        h === !0 ? S() : Promise.resolve(h).then(S);
      });
    }
  }, [e, i]), _.useEffect(function() {
    return function() {
      f();
    };
  }, []), [d, i];
};
function m1(e, n, t, r) {
  var o = r.motionEnter, i = o === void 0 ? !0 : o, s = r.motionAppear, a = s === void 0 ? !0 : s, c = r.motionLeave, l = c === void 0 ? !0 : c, f = r.motionDeadline, d = r.motionLeaveImmediately, u = r.onAppearPrepare, v = r.onEnterPrepare, g = r.onLeavePrepare, h = r.onAppearStart, x = r.onEnterStart, S = r.onLeaveStart, b = r.onAppearActive, m = r.onEnterActive, T = r.onLeaveActive, y = r.onAppearEnd, O = r.onEnterEnd, C = r.onLeaveEnd, I = r.onVisibleChanged, F = Cs(), W = le(F, 2), ne = W[0], X = W[1], D = s1(Zt), V = le(D, 2), q = V[0], $ = V[1], ee = Cs(null), K = le(ee, 2), Q = K[0], oe = K[1], ie = q(), Z = qe(!1), re = qe(null);
  function xe() {
    return t();
  }
  var fe = qe(!1);
  function pe() {
    $(Zt), oe(null, !0);
  }
  var ge = _s(function(Le) {
    var Ae = q();
    if (Ae !== Zt) {
      var Xe = xe();
      if (!(Le && !Le.deadline && Le.target !== Xe)) {
        var gt = fe.current, dt;
        Ae === Xr && gt ? dt = y == null ? void 0 : y(Xe, Le) : Ae === Gr && gt ? dt = O == null ? void 0 : O(Xe, Le) : Ae === Kr && gt && (dt = C == null ? void 0 : C(Xe, Le)), gt && dt !== !1 && pe();
      }
    }
  }), j = u1(ge), N = le(j, 1), L = N[0], B = function(Ae) {
    switch (Ae) {
      case Xr:
        return U(U(U({}, yt, u), In, h), Nn, b);
      case Gr:
        return U(U(U({}, yt, v), In, x), Nn, m);
      case Kr:
        return U(U(U({}, yt, g), In, S), Nn, T);
      default:
        return {};
    }
  }, E = _.useMemo(function() {
    return B(ie);
  }, [ie]), G = p1(ie, !e, function(Le) {
    if (Le === yt) {
      var Ae = E[yt];
      return Ae ? Ae(xe()) : df;
    }
    if (Ce in E) {
      var Xe;
      oe(((Xe = E[Ce]) === null || Xe === void 0 ? void 0 : Xe.call(E, xe(), null)) || null);
    }
    return Ce === Nn && ie !== Zt && (L(xe()), f > 0 && (clearTimeout(re.current), re.current = setTimeout(function() {
      ge({
        deadline: !0
      });
    }, f))), Ce === of && pe(), x1;
  }), k = le(G, 2), he = k[0], Ce = k[1], Ee = hf(Ce);
  fe.current = Ee;
  var Ze = qe(null);
  ff(function() {
    if (!(Z.current && Ze.current === n)) {
      X(n);
      var Le = Z.current;
      Z.current = !0;
      var Ae;
      !Le && n && a && (Ae = Xr), Le && n && i && (Ae = Gr), (Le && !n && l || !Le && d && !n && l) && (Ae = Kr);
      var Xe = B(Ae);
      Ae && (e || Xe[yt]) ? ($(Ae), he()) : $(Zt), Ze.current = n;
    }
  }, [n]), st(function() {
    // Cancel appear
    (ie === Xr && !a || // Cancel enter
    ie === Gr && !i || // Cancel leave
    ie === Kr && !l) && $(Zt);
  }, [a, i, l]), st(function() {
    return function() {
      Z.current = !1, clearTimeout(re.current);
    };
  }, []);
  var ut = _.useRef(!1);
  st(function() {
    ne && (ut.current = !0), ne !== void 0 && ie === Zt && ((ut.current || ne) && (I == null || I(ne)), ut.current = !0);
  }, [ne, ie]);
  var Ot = Q;
  return E[yt] && Ce === In && (Ot = z({
    transition: "none"
  }, Ot)), [ie, Ce, Ot, ne ?? n];
}
function g1(e) {
  var n = e;
  we(e) === "object" && (n = e.transitionSupport);
  function t(o, i) {
    return !!(o.motionName && n && i !== !1);
  }
  var r = /* @__PURE__ */ _.forwardRef(function(o, i) {
    var s = o.visible, a = s === void 0 ? !0 : s, c = o.removeOnLeave, l = c === void 0 ? !0 : c, f = o.forceRender, d = o.children, u = o.motionName, v = o.leavedClassName, g = o.eventProps, h = _.useContext(rf), x = h.motion, S = t(o, x), b = qe(), m = qe();
    function T() {
      try {
        return b.current instanceof HTMLElement ? b.current : Dh(m.current);
      } catch {
        return null;
      }
    }
    var y = m1(S, a, T, o), O = le(y, 4), C = O[0], I = O[1], F = O[2], W = O[3], ne = _.useRef(W);
    W && (ne.current = !0);
    var X = _.useCallback(function(K) {
      b.current = K, iu(i, K);
    }, [i]), D, V = z(z({}, g), {}, {
      visible: a
    });
    if (!d)
      D = null;
    else if (C === Zt)
      W ? D = d(z({}, V), X) : !l && ne.current && v ? D = d(z(z({}, V), {}, {
        className: v
      }), X) : f || !l && !v ? D = d(z(z({}, V), {}, {
        style: {
          display: "none"
        }
      }), X) : D = null;
    else {
      var q;
      I === yt ? q = "prepare" : hf(I) ? q = "active" : I === In && (q = "start");
      var $ = Bc(u, "".concat(C, "-").concat(q));
      D = d(z(z({}, V), {}, {
        className: tt(Bc(u, C), U(U({}, $, $ && q), u, typeof u == "string")),
        style: F
      }), X);
    }
    if (/* @__PURE__ */ _.isValidElement(D) && Uh(D)) {
      var ee = qh(D);
      ee || (D = /* @__PURE__ */ _.cloneElement(D, {
        ref: X
      }));
    }
    return /* @__PURE__ */ _.createElement(i1, {
      ref: m
    }, D);
  });
  return r.displayName = "CSSMotion", r;
}
const xf = g1(uf);
var Ts = "add", Os = "keep", Rs = "remove", Pi = "removed";
function v1(e) {
  var n;
  return e && we(e) === "object" && "key" in e ? n = e : n = {
    key: e
  }, z(z({}, n), {}, {
    key: String(n.key)
  });
}
function Ps() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(v1);
}
function y1() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], t = [], r = 0, o = n.length, i = Ps(e), s = Ps(n);
  i.forEach(function(l) {
    for (var f = !1, d = r; d < o; d += 1) {
      var u = s[d];
      if (u.key === l.key) {
        r < d && (t = t.concat(s.slice(r, d).map(function(v) {
          return z(z({}, v), {}, {
            status: Ts
          });
        })), r = d), t.push(z(z({}, u), {}, {
          status: Os
        })), r += 1, f = !0;
        break;
      }
    }
    f || t.push(z(z({}, l), {}, {
      status: Rs
    }));
  }), r < o && (t = t.concat(s.slice(r).map(function(l) {
    return z(z({}, l), {}, {
      status: Ts
    });
  })));
  var a = {};
  t.forEach(function(l) {
    var f = l.key;
    a[f] = (a[f] || 0) + 1;
  });
  var c = Object.keys(a).filter(function(l) {
    return a[l] > 1;
  });
  return c.forEach(function(l) {
    t = t.filter(function(f) {
      var d = f.key, u = f.status;
      return d !== l || u !== Rs;
    }), t.forEach(function(f) {
      f.key === l && (f.status = Os);
    });
  }), t;
}
var b1 = ["component", "children", "onVisibleChanged", "onAllRemoved"], S1 = ["status"], w1 = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function E1(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : xf, t = /* @__PURE__ */ function(r) {
    Pr(i, r);
    var o = Xo(i);
    function i() {
      var s;
      Ct(this, i);
      for (var a = arguments.length, c = new Array(a), l = 0; l < a; l++)
        c[l] = arguments[l];
      return s = o.call.apply(o, [this].concat(c)), U(bn(s), "state", {
        keyEntities: []
      }), U(bn(s), "removeKey", function(f) {
        s.setState(function(d) {
          var u = d.keyEntities.map(function(v) {
            return v.key !== f ? v : z(z({}, v), {}, {
              status: Pi
            });
          });
          return {
            keyEntities: u
          };
        }, function() {
          var d = s.state.keyEntities, u = d.filter(function(v) {
            var g = v.status;
            return g !== Pi;
          }).length;
          u === 0 && s.props.onAllRemoved && s.props.onAllRemoved();
        });
      }), s;
    }
    return At(i, [{
      key: "render",
      value: function() {
        var a = this, c = this.state.keyEntities, l = this.props, f = l.component, d = l.children, u = l.onVisibleChanged;
        l.onAllRemoved;
        var v = wr(l, b1), g = f || _.Fragment, h = {};
        return w1.forEach(function(x) {
          h[x] = v[x], delete v[x];
        }), delete v.keys, /* @__PURE__ */ _.createElement(g, v, c.map(function(x, S) {
          var b = x.status, m = wr(x, S1), T = b === Ts || b === Os;
          return /* @__PURE__ */ _.createElement(n, Bt({}, h, {
            key: m.key,
            visible: T,
            eventProps: m,
            onVisibleChanged: function(O) {
              u == null || u(O, {
                key: m.key
              }), O || a.removeKey(m.key);
            }
          }), function(y, O) {
            return d(z(z({}, y), {}, {
              index: S
            }), O);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(a, c) {
        var l = a.keys, f = c.keyEntities, d = Ps(l), u = y1(f, d);
        return {
          keyEntities: u.filter(function(v) {
            var g = f.find(function(h) {
              var x = h.key;
              return v.key === x;
            });
            return !(g && g.status === Pi && v.status === Rs);
          })
        };
      }
    }]), i;
  }(_.Component);
  return U(t, "defaultProps", {
    component: "div"
  }), t;
}
E1(uf);
function _1(e) {
  const {
    children: n
  } = e, [, t] = ya(), {
    motion: r
  } = t, o = _.useRef(!1);
  return o.current = o.current || r === !1, o.current ? /* @__PURE__ */ _.createElement(o1, {
    motion: r
  }, n) : n;
}
const pf = /* @__PURE__ */ _.memo((e) => {
  let {
    dropdownMatchSelectWidth: n
  } = e;
  return tr("ConfigProvider").deprecated(n === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
process.env.NODE_ENV !== "production" && (pf.displayName = "PropWarning");
const C1 = process.env.NODE_ENV !== "production" ? pf : () => null;
var A1 = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
let ks = !1;
process.env.NODE_ENV;
const T1 = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let mf;
function O1() {
  return mf || ws;
}
function R1(e) {
  return Object.keys(e).some((n) => n.endsWith("Color"));
}
const P1 = (e) => {
  const {
    prefixCls: n,
    iconPrefixCls: t,
    theme: r,
    holderRender: o
  } = e;
  n !== void 0 && (mf = n), r && R1(r) && (process.env.NODE_ENV !== "production" && Qo(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), Rp(O1(), r));
}, k1 = (e) => {
  const {
    children: n,
    csp: t,
    autoInsertSpaceInButton: r,
    alert: o,
    anchor: i,
    form: s,
    locale: a,
    componentSize: c,
    direction: l,
    space: f,
    splitter: d,
    virtual: u,
    dropdownMatchSelectWidth: v,
    popupMatchSelectWidth: g,
    popupOverflow: h,
    legacyLocale: x,
    parentContext: S,
    iconPrefixCls: b,
    theme: m,
    componentDisabled: T,
    segmented: y,
    statistic: O,
    spin: C,
    calendar: I,
    carousel: F,
    cascader: W,
    collapse: ne,
    typography: X,
    checkbox: D,
    descriptions: V,
    divider: q,
    drawer: $,
    skeleton: ee,
    steps: K,
    image: Q,
    layout: oe,
    list: ie,
    mentions: Z,
    modal: re,
    progress: xe,
    result: fe,
    slider: pe,
    breadcrumb: ge,
    menu: j,
    pagination: N,
    input: L,
    textArea: B,
    empty: E,
    badge: G,
    radio: k,
    rate: he,
    switch: Ce,
    transfer: Ee,
    avatar: Ze,
    message: ut,
    tag: Ot,
    table: Le,
    card: Ae,
    tabs: Xe,
    timeline: gt,
    timePicker: dt,
    upload: cn,
    notification: ln,
    tree: Tn,
    colorPicker: un,
    datePicker: P,
    rangePicker: w,
    flex: Te,
    wave: ae,
    dropdown: Re,
    warning: Je,
    tour: Ge,
    tooltip: J,
    popover: Me,
    popconfirm: nt,
    floatButtonGroup: Rt,
    variant: Ft,
    inputNumber: zt,
    treeSelect: We
  } = e, Qe = _.useCallback((ke, p) => {
    const {
      prefixCls: R
    } = e;
    if (p)
      return p;
    const M = R || S.getPrefixCls("");
    return ke ? `${M}-${ke}` : M;
  }, [S.getPrefixCls, e.prefixCls]), rt = b || S.iconPrefixCls || va, Pt = t || S.csp;
  Jp(rt, Pt);
  const fn = n1(m, S.theme, {
    prefixCls: Qe("")
  });
  process.env.NODE_ENV !== "production" && (ks = ks || !!fn);
  const On = {
    csp: Pt,
    autoInsertSpaceInButton: r,
    alert: o,
    anchor: i,
    locale: a || x,
    direction: l,
    space: f,
    splitter: d,
    virtual: u,
    popupMatchSelectWidth: g ?? v,
    popupOverflow: h,
    getPrefixCls: Qe,
    iconPrefixCls: rt,
    theme: fn,
    segmented: y,
    statistic: O,
    spin: C,
    calendar: I,
    carousel: F,
    cascader: W,
    collapse: ne,
    typography: X,
    checkbox: D,
    descriptions: V,
    divider: q,
    drawer: $,
    skeleton: ee,
    steps: K,
    image: Q,
    input: L,
    textArea: B,
    layout: oe,
    list: ie,
    mentions: Z,
    modal: re,
    progress: xe,
    result: fe,
    slider: pe,
    breadcrumb: ge,
    menu: j,
    pagination: N,
    empty: E,
    badge: G,
    radio: k,
    rate: he,
    switch: Ce,
    transfer: Ee,
    avatar: Ze,
    message: ut,
    tag: Ot,
    table: Le,
    card: Ae,
    tabs: Xe,
    timeline: gt,
    timePicker: dt,
    upload: cn,
    notification: ln,
    tree: Tn,
    colorPicker: un,
    datePicker: P,
    rangePicker: w,
    flex: Te,
    wave: ae,
    dropdown: Re,
    warning: Je,
    tour: Ge,
    tooltip: J,
    popover: Me,
    popconfirm: nt,
    floatButtonGroup: Rt,
    variant: Ft,
    inputNumber: zt,
    treeSelect: We
  };
  process.env.NODE_ENV !== "production" && tr("ConfigProvider")(!("autoInsertSpaceInButton" in e), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const Xt = Object.assign({}, S);
  Object.keys(On).forEach((ke) => {
    On[ke] !== void 0 && (Xt[ke] = On[ke]);
  }), T1.forEach((ke) => {
    const p = e[ke];
    p && (Xt[ke] = p);
  }), typeof r < "u" && (Xt.button = Object.assign({
    autoInsertSpace: r
  }, Xt.button));
  const Gt = ou(() => Xt, Xt, (ke, p) => {
    const R = Object.keys(ke), M = Object.keys(p);
    return R.length !== M.length || R.some((Y) => ke[Y] !== p[Y]);
  }), {
    layer: sr
  } = _.useContext(kr), jr = _.useMemo(() => ({
    prefixCls: rt,
    csp: Pt,
    layer: sr ? "antd" : void 0
  }), [rt, Pt, sr]);
  let Ue = /* @__PURE__ */ _.createElement(_.Fragment, null, /* @__PURE__ */ _.createElement(C1, {
    dropdownMatchSelectWidth: v
  }), n);
  const Lr = _.useMemo(() => {
    var ke, p, R, M;
    return ap(((ke = ei.Form) === null || ke === void 0 ? void 0 : ke.defaultValidateMessages) || {}, ((R = (p = Gt.locale) === null || p === void 0 ? void 0 : p.Form) === null || R === void 0 ? void 0 : R.defaultValidateMessages) || {}, ((M = Gt.form) === null || M === void 0 ? void 0 : M.validateMessages) || {}, (s == null ? void 0 : s.validateMessages) || {});
  }, [Gt, s == null ? void 0 : s.validateMessages]);
  Object.keys(Lr).length > 0 && (Ue = /* @__PURE__ */ _.createElement(lp.Provider, {
    value: Lr
  }, Ue)), a && (Ue = /* @__PURE__ */ _.createElement(Hu, {
    locale: a,
    _ANT_MARK__: Vu
  }, Ue)), Ue = /* @__PURE__ */ _.createElement(ma.Provider, {
    value: jr
  }, Ue), c && (Ue = /* @__PURE__ */ _.createElement(kp, {
    size: c
  }, Ue)), Ue = /* @__PURE__ */ _.createElement(_1, null, Ue);
  const ui = _.useMemo(() => {
    const ke = fn || {}, {
      algorithm: p,
      token: R,
      components: M,
      cssVar: Y
    } = ke, me = A1(ke, ["algorithm", "token", "components", "cssVar"]), ve = p && (!Array.isArray(p) || p.length > 0) ? ns(p) : $u, ue = {};
    Object.entries(M || {}).forEach((Ke) => {
      let [Pe, Ie] = Ke;
      const Ne = Object.assign({}, Ie);
      "algorithm" in Ne && (Ne.algorithm === !0 ? Ne.theme = ve : (Array.isArray(Ne.algorithm) || typeof Ne.algorithm == "function") && (Ne.theme = ns(Ne.algorithm)), delete Ne.algorithm), ue[Pe] = Ne;
    });
    const ce = Object.assign(Object.assign({}, _r), R);
    return Object.assign(Object.assign({}, me), {
      theme: ve,
      token: ce,
      components: ue,
      override: Object.assign({
        override: ce
      }, ue),
      cssVar: Y
    });
  }, [fn]);
  return m && (Ue = /* @__PURE__ */ _.createElement(Yu.Provider, {
    value: ui
  }, Ue)), Gt.warning && (Ue = /* @__PURE__ */ _.createElement(Fu.Provider, {
    value: Gt.warning
  }, Ue)), T !== void 0 && (Ue = /* @__PURE__ */ _.createElement(Pp, {
    disabled: T
  }, Ue)), /* @__PURE__ */ _.createElement(nn.Provider, {
    value: Gt
  }, Ue);
}, nr = (e) => {
  const n = _.useContext(nn), t = _.useContext(zu);
  return /* @__PURE__ */ _.createElement(k1, Object.assign({
    parentContext: n,
    legacyLocale: t
  }, e));
};
nr.ConfigContext = nn;
nr.SizeContext = Ar;
nr.config = P1;
nr.useConfig = Ip;
Object.defineProperty(nr, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && Qo(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), Ar)
});
process.env.NODE_ENV !== "production" && (nr.displayName = "ConfigProvider");
var I1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
function gf(e) {
  var n;
  return e == null || (n = e.getRootNode) === null || n === void 0 ? void 0 : n.call(e);
}
function N1(e) {
  return gf(e) instanceof ShadowRoot;
}
function j1(e) {
  return N1(e) ? gf(e) : null;
}
function L1(e) {
  return e.replace(/-(.)/g, function(n, t) {
    return t.toUpperCase();
  });
}
function M1(e, n) {
  sn(e, "[@ant-design/icons] ".concat(n));
}
function Fc(e) {
  return we(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (we(e.icon) === "object" || typeof e.icon == "function");
}
function zc() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(n, t) {
    var r = e[t];
    switch (t) {
      case "class":
        n.className = r, delete n.class;
        break;
      default:
        delete n[t], n[L1(t)] = r;
    }
    return n;
  }, {});
}
function Is(e, n, t) {
  return t ? /* @__PURE__ */ Fe.createElement(e.tag, z(z({
    key: n
  }, zc(e.attrs)), t), (e.children || []).map(function(r, o) {
    return Is(r, "".concat(n, "-").concat(e.tag, "-").concat(o));
  })) : /* @__PURE__ */ Fe.createElement(e.tag, z({
    key: n
  }, zc(e.attrs)), (e.children || []).map(function(r, o) {
    return Is(r, "".concat(n, "-").concat(e.tag, "-").concat(o));
  }));
}
function vf(e) {
  return Cr(e)[0];
}
function yf(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var D1 = `
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
`, B1 = function(n) {
  var t = tn(ma), r = t.csp, o = t.prefixCls, i = t.layer, s = D1;
  o && (s = s.replace(/anticon/g, o)), i && (s = "@layer ".concat(i, ` {
`).concat(s, `
}`)), st(function() {
    var a = n.current, c = j1(a);
    Sn(s, "@ant-design-icons", {
      prepend: !i,
      csp: r,
      attachTo: c
    });
  }, []);
}, F1 = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], yr = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function z1(e) {
  var n = e.primaryColor, t = e.secondaryColor;
  yr.primaryColor = n, yr.secondaryColor = t || vf(n), yr.calculated = !!t;
}
function V1() {
  return z({}, yr);
}
var rr = function(n) {
  var t = n.icon, r = n.className, o = n.onClick, i = n.style, s = n.primaryColor, a = n.secondaryColor, c = wr(n, F1), l = _.useRef(), f = yr;
  if (s && (f = {
    primaryColor: s,
    secondaryColor: a || vf(s)
  }), B1(l), M1(Fc(t), "icon should be icon definiton, but got ".concat(t)), !Fc(t))
    return null;
  var d = t;
  return d && typeof d.icon == "function" && (d = z(z({}, d), {}, {
    icon: d.icon(f.primaryColor, f.secondaryColor)
  })), Is(d.icon, "svg-".concat(d.name), z(z({
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
rr.displayName = "IconReact";
rr.getTwoToneColors = V1;
rr.setTwoToneColors = z1;
function bf(e) {
  var n = yf(e), t = le(n, 2), r = t[0], o = t[1];
  return rr.setTwoToneColors({
    primaryColor: r,
    secondaryColor: o
  });
}
function H1() {
  var e = rr.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var U1 = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
bf(To.primary);
var an = /* @__PURE__ */ _.forwardRef(function(e, n) {
  var t = e.className, r = e.icon, o = e.spin, i = e.rotate, s = e.tabIndex, a = e.onClick, c = e.twoToneColor, l = wr(e, U1), f = _.useContext(ma), d = f.prefixCls, u = d === void 0 ? "anticon" : d, v = f.rootClassName, g = tt(v, u, U(U({}, "".concat(u, "-").concat(r.name), !!r.name), "".concat(u, "-spin"), !!o || r.name === "loading"), t), h = s;
  h === void 0 && a && (h = -1);
  var x = i ? {
    msTransform: "rotate(".concat(i, "deg)"),
    transform: "rotate(".concat(i, "deg)")
  } : void 0, S = yf(c), b = le(S, 2), m = b[0], T = b[1];
  return /* @__PURE__ */ _.createElement("span", Bt({
    role: "img",
    "aria-label": r.name
  }, l, {
    ref: n,
    tabIndex: h,
    onClick: a,
    className: g
  }), /* @__PURE__ */ _.createElement(rr, {
    icon: r,
    primaryColor: m,
    secondaryColor: T,
    style: x
  }));
});
an.displayName = "AntdIcon";
an.getTwoToneColor = H1;
an.setTwoToneColor = bf;
var q1 = function(n, t) {
  return /* @__PURE__ */ _.createElement(an, Bt({}, n, {
    ref: t,
    icon: I1
  }));
}, Sf = /* @__PURE__ */ _.forwardRef(q1);
process.env.NODE_ENV !== "production" && (Sf.displayName = "CheckCircleFilled");
var W1 = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, $1 = function(n, t) {
  return /* @__PURE__ */ _.createElement(an, Bt({}, n, {
    ref: t,
    icon: W1
  }));
}, wf = /* @__PURE__ */ _.forwardRef($1);
process.env.NODE_ENV !== "production" && (wf.displayName = "CloseCircleFilled");
var Y1 = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, X1 = function(n, t) {
  return /* @__PURE__ */ _.createElement(an, Bt({}, n, {
    ref: t,
    icon: Y1
  }));
}, Ef = /* @__PURE__ */ _.forwardRef(X1);
process.env.NODE_ENV !== "production" && (Ef.displayName = "CloseOutlined");
var G1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" }, K1 = function(n, t) {
  return /* @__PURE__ */ _.createElement(an, Bt({}, n, {
    ref: t,
    icon: G1
  }));
}, _f = /* @__PURE__ */ _.forwardRef(K1);
process.env.NODE_ENV !== "production" && (_f.displayName = "ExclamationCircleFilled");
var Z1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" }, J1 = function(n, t) {
  return /* @__PURE__ */ _.createElement(an, Bt({}, n, {
    ref: t,
    icon: Z1
  }));
}, Cf = /* @__PURE__ */ _.forwardRef(J1);
process.env.NODE_ENV !== "production" && (Cf.displayName = "InfoCircleFilled");
var Q1 = `accept acceptCharset accessKey action allowFullScreen allowTransparency
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
    summary tabIndex target title type useMap value width wmode wrap`, em = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, tm = "".concat(Q1, " ").concat(em).split(/[\s\n]+/), nm = "aria-", rm = "data-";
function Vc(e, n) {
  return e.indexOf(n) === 0;
}
function om(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, t;
  n === !1 ? t = {
    aria: !0,
    data: !0,
    attr: !0
  } : n === !0 ? t = {
    aria: !0
  } : t = z({}, n);
  var r = {};
  return Object.keys(e).forEach(function(o) {
    // Aria
    (t.aria && (o === "role" || Vc(o, nm)) || // Data
    t.data && Vc(o, rm) || // Attr
    t.attr && tm.includes(o)) && (r[o] = e[o]);
  }), r;
}
const Af = (e, n, t) => /* @__PURE__ */ Fe.isValidElement(e) ? /* @__PURE__ */ Fe.cloneElement(e, typeof t == "function" ? t(e.props || {}) : t) : n;
function im(e, n) {
  return Af(e, e, n);
}
const Jr = (e, n, t, r, o) => ({
  background: e,
  border: `${Co(r.lineWidth)} ${r.lineType} ${n}`,
  [`${o}-icon`]: {
    color: t
  }
}), sm = (e) => {
  const {
    componentCls: n,
    motionDurationSlow: t,
    marginXS: r,
    marginSM: o,
    fontSize: i,
    fontSizeLG: s,
    lineHeight: a,
    borderRadiusLG: c,
    motionEaseInOutCirc: l,
    withDescriptionIconSize: f,
    colorText: d,
    colorTextHeading: u,
    withDescriptionPadding: v,
    defaultPadding: g
  } = e;
  return {
    [n]: Object.assign(Object.assign({}, tf(e)), {
      position: "relative",
      display: "flex",
      alignItems: "center",
      padding: g,
      wordWrap: "break-word",
      borderRadius: c,
      [`&${n}-rtl`]: {
        direction: "rtl"
      },
      [`${n}-content`]: {
        flex: 1,
        minWidth: 0
      },
      [`${n}-icon`]: {
        marginInlineEnd: r,
        lineHeight: 0
      },
      "&-description": {
        display: "none",
        fontSize: i,
        lineHeight: a
      },
      "&-message": {
        color: u
      },
      [`&${n}-motion-leave`]: {
        overflow: "hidden",
        opacity: 1,
        transition: `max-height ${t} ${l}, opacity ${t} ${l},
        padding-top ${t} ${l}, padding-bottom ${t} ${l},
        margin-bottom ${t} ${l}`
      },
      [`&${n}-motion-leave-active`]: {
        maxHeight: 0,
        marginBottom: "0 !important",
        paddingTop: 0,
        paddingBottom: 0,
        opacity: 0
      }
    }),
    [`${n}-with-description`]: {
      alignItems: "flex-start",
      padding: v,
      [`${n}-icon`]: {
        marginInlineEnd: o,
        fontSize: f,
        lineHeight: 0
      },
      [`${n}-message`]: {
        display: "block",
        marginBottom: r,
        color: u,
        fontSize: s
      },
      [`${n}-description`]: {
        display: "block",
        color: d
      }
    },
    [`${n}-banner`]: {
      marginBottom: 0,
      border: "0 !important",
      borderRadius: 0
    }
  };
}, am = (e) => {
  const {
    componentCls: n,
    colorSuccess: t,
    colorSuccessBorder: r,
    colorSuccessBg: o,
    colorWarning: i,
    colorWarningBorder: s,
    colorWarningBg: a,
    colorError: c,
    colorErrorBorder: l,
    colorErrorBg: f,
    colorInfo: d,
    colorInfoBorder: u,
    colorInfoBg: v
  } = e;
  return {
    [n]: {
      "&-success": Jr(o, r, t, e, n),
      "&-info": Jr(v, u, d, e, n),
      "&-warning": Jr(a, s, i, e, n),
      "&-error": Object.assign(Object.assign({}, Jr(f, l, c, e, n)), {
        [`${n}-description > pre`]: {
          margin: 0,
          padding: 0
        }
      })
    }
  };
}, cm = (e) => {
  const {
    componentCls: n,
    iconCls: t,
    motionDurationMid: r,
    marginXS: o,
    fontSizeIcon: i,
    colorIcon: s,
    colorIconHover: a
  } = e;
  return {
    [n]: {
      "&-action": {
        marginInlineStart: o
      },
      [`${n}-close-icon`]: {
        marginInlineStart: o,
        padding: 0,
        overflow: "hidden",
        fontSize: i,
        lineHeight: Co(i),
        backgroundColor: "transparent",
        border: "none",
        outline: "none",
        cursor: "pointer",
        [`${t}-close`]: {
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
}, lm = (e) => ({
  withDescriptionIconSize: e.fontSizeHeading3,
  defaultPadding: `${e.paddingContentVerticalSM}px 12px`,
  withDescriptionPadding: `${e.paddingMD}px ${e.paddingContentHorizontalLG}px`
}), um = ba("Alert", (e) => [sm(e), am(e), cm(e)], lm);
var Hc = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
const fm = {
  success: Sf,
  info: Cf,
  error: wf,
  warning: _f
}, dm = (e) => {
  const {
    icon: n,
    prefixCls: t,
    type: r
  } = e, o = fm[r] || null;
  return n ? Af(n, /* @__PURE__ */ _.createElement("span", {
    className: `${t}-icon`
  }, n), () => ({
    className: tt(`${t}-icon`, n.props.className)
  })) : /* @__PURE__ */ _.createElement(o, {
    className: `${t}-icon`
  });
}, hm = (e) => {
  const {
    isClosable: n,
    prefixCls: t,
    closeIcon: r,
    handleClose: o,
    ariaProps: i
  } = e, s = r === !0 || r === void 0 ? /* @__PURE__ */ _.createElement(Ef, null) : r;
  return n ? /* @__PURE__ */ _.createElement("button", Object.assign({
    type: "button",
    onClick: o,
    className: `${t}-close-icon`,
    tabIndex: 0
  }, i), s) : null;
}, wa = /* @__PURE__ */ _.forwardRef((e, n) => {
  const {
    description: t,
    prefixCls: r,
    message: o,
    banner: i,
    className: s,
    rootClassName: a,
    style: c,
    onMouseEnter: l,
    onMouseLeave: f,
    onClick: d,
    afterClose: u,
    showIcon: v,
    closable: g,
    closeText: h,
    closeIcon: x,
    action: S,
    id: b
  } = e, m = Hc(e, ["description", "prefixCls", "message", "banner", "className", "rootClassName", "style", "onMouseEnter", "onMouseLeave", "onClick", "afterClose", "showIcon", "closable", "closeText", "closeIcon", "action", "id"]), [T, y] = _.useState(!1);
  process.env.NODE_ENV !== "production" && tr("Alert").deprecated(!h, "closeText", "closable.closeIcon");
  const O = _.useRef(null);
  _.useImperativeHandle(n, () => ({
    nativeElement: O.current
  }));
  const {
    getPrefixCls: C,
    direction: I,
    closable: F,
    closeIcon: W,
    className: ne,
    style: X
  } = Xu("alert"), D = C("alert", r), [V, q, $] = um(D), ee = (fe) => {
    var pe;
    y(!0), (pe = e.onClose) === null || pe === void 0 || pe.call(e, fe);
  }, K = _.useMemo(() => e.type !== void 0 ? e.type : i ? "warning" : "info", [e.type, i]), Q = _.useMemo(() => typeof g == "object" && g.closeIcon || h ? !0 : typeof g == "boolean" ? g : x !== !1 && x !== null && x !== void 0 ? !0 : !!F, [h, x, g, F]), oe = i && v === void 0 ? !0 : v, ie = tt(D, `${D}-${K}`, {
    [`${D}-with-description`]: !!t,
    [`${D}-no-icon`]: !oe,
    [`${D}-banner`]: !!i,
    [`${D}-rtl`]: I === "rtl"
  }, ne, s, a, $, q), Z = om(m, {
    aria: !0,
    data: !0
  }), re = _.useMemo(() => typeof g == "object" && g.closeIcon ? g.closeIcon : h || (x !== void 0 ? x : typeof F == "object" && F.closeIcon ? F.closeIcon : W), [x, g, h, W]), xe = _.useMemo(() => {
    const fe = g ?? F;
    if (typeof fe == "object") {
      const {
        closeIcon: pe
      } = fe;
      return Hc(fe, ["closeIcon"]);
    }
    return {};
  }, [g, F]);
  return V(/* @__PURE__ */ _.createElement(xf, {
    visible: !T,
    motionName: `${D}-motion`,
    motionAppear: !1,
    motionEnter: !1,
    onLeaveStart: (fe) => ({
      maxHeight: fe.offsetHeight
    }),
    onLeaveEnd: u
  }, (fe, pe) => {
    let {
      className: ge,
      style: j
    } = fe;
    return /* @__PURE__ */ _.createElement("div", Object.assign({
      id: b,
      ref: Hh(O, pe),
      "data-show": !T,
      className: tt(ie, ge),
      style: Object.assign(Object.assign(Object.assign({}, X), c), j),
      onMouseEnter: l,
      onMouseLeave: f,
      onClick: d,
      role: "alert"
    }, Z), oe ? /* @__PURE__ */ _.createElement(dm, {
      description: t,
      icon: e.icon,
      prefixCls: D,
      type: K
    }) : null, /* @__PURE__ */ _.createElement("div", {
      className: `${D}-content`
    }, o ? /* @__PURE__ */ _.createElement("div", {
      className: `${D}-message`
    }, o) : null, t ? /* @__PURE__ */ _.createElement("div", {
      className: `${D}-description`
    }, t) : null), S ? /* @__PURE__ */ _.createElement("div", {
      className: `${D}-action`
    }, S) : null, /* @__PURE__ */ _.createElement(hm, {
      isClosable: Q,
      prefixCls: D,
      closeIcon: re,
      handleClose: ee,
      ariaProps: xe
    }));
  }));
});
process.env.NODE_ENV !== "production" && (wa.displayName = "Alert");
function xm(e, n, t) {
  return n = qn(n), au(e, la() ? Reflect.construct(n, t || [], qn(e).constructor) : n.apply(e, t));
}
let pm = /* @__PURE__ */ function(e) {
  function n() {
    var t;
    return Ct(this, n), t = xm(this, n, arguments), t.state = {
      error: void 0,
      info: {
        componentStack: ""
      }
    }, t;
  }
  return Pr(n, e), At(n, [{
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
      } = this.state, l = (c == null ? void 0 : c.componentStack) || null, f = typeof r > "u" ? (a || "").toString() : r, d = typeof o > "u" ? l : o;
      return a ? /* @__PURE__ */ _.createElement(wa, {
        id: i,
        type: "error",
        message: f,
        description: /* @__PURE__ */ _.createElement("pre", {
          style: {
            fontSize: "0.9em",
            overflowX: "auto"
          }
        }, d)
      }) : s;
    }
  }]);
}(_.Component);
const Tf = wa;
Tf.ErrorBoundary = pm;
function mm(e, n) {
  var t = Object.assign({}, e);
  return Array.isArray(n) && n.forEach(function(r) {
    delete t[r];
  }), t;
}
function gm(e, n, t) {
  var r = t || {}, o = r.noTrailing, i = o === void 0 ? !1 : o, s = r.noLeading, a = s === void 0 ? !1 : s, c = r.debounceMode, l = c === void 0 ? void 0 : c, f, d = !1, u = 0;
  function v() {
    f && clearTimeout(f);
  }
  function g(x) {
    var S = x || {}, b = S.upcomingOnly, m = b === void 0 ? !1 : b;
    v(), d = !m;
  }
  function h() {
    for (var x = arguments.length, S = new Array(x), b = 0; b < x; b++)
      S[b] = arguments[b];
    var m = this, T = Date.now() - u;
    if (d)
      return;
    function y() {
      u = Date.now(), n.apply(m, S);
    }
    function O() {
      f = void 0;
    }
    !a && l && !f && y(), v(), l === void 0 && T > e ? a ? (u = Date.now(), i || (f = setTimeout(l ? O : y, e))) : y() : i !== !0 && (f = setTimeout(l ? O : y, l === void 0 ? e - T : e));
  }
  return h.cancel = g, h;
}
function vm(e, n, t) {
  var r = {}, o = r.atBegin, i = o === void 0 ? !1 : o;
  return gm(e, n, {
    debounceMode: i !== !1
  });
}
function Uc(e) {
  return ["small", "middle", "large"].includes(e);
}
const Of = ["wrap", "nowrap", "wrap-reverse"], Rf = ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around", "space-evenly", "stretch", "normal", "left", "right"], Pf = ["center", "start", "end", "flex-start", "flex-end", "self-start", "self-end", "baseline", "normal", "stretch"], ym = (e, n) => {
  const t = n.wrap === !0 ? "wrap" : n.wrap;
  return {
    [`${e}-wrap-${t}`]: t && Of.includes(t)
  };
}, bm = (e, n) => {
  const t = {};
  return Pf.forEach((r) => {
    t[`${e}-align-${r}`] = n.align === r;
  }), t[`${e}-align-stretch`] = !n.align && !!n.vertical, t;
}, Sm = (e, n) => {
  const t = {};
  return Rf.forEach((r) => {
    t[`${e}-justify-${r}`] = n.justify === r;
  }), t;
};
function wm(e, n) {
  return tt(Object.assign(Object.assign(Object.assign({}, ym(e, n)), bm(e, n)), Sm(e, n)));
}
const Em = (e) => {
  const {
    componentCls: n
  } = e;
  return {
    [n]: {
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
}, _m = (e) => {
  const {
    componentCls: n
  } = e;
  return {
    [n]: {
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
}, Cm = (e) => {
  const {
    componentCls: n
  } = e, t = {};
  return Of.forEach((r) => {
    t[`${n}-wrap-${r}`] = {
      flexWrap: r
    };
  }), t;
}, Am = (e) => {
  const {
    componentCls: n
  } = e, t = {};
  return Pf.forEach((r) => {
    t[`${n}-align-${r}`] = {
      alignItems: r
    };
  }), t;
}, Tm = (e) => {
  const {
    componentCls: n
  } = e, t = {};
  return Rf.forEach((r) => {
    t[`${n}-justify-${r}`] = {
      justifyContent: r
    };
  }), t;
}, Om = () => ({}), Rm = ba("Flex", (e) => {
  const {
    paddingXS: n,
    padding: t,
    paddingLG: r
  } = e, o = ti(e, {
    flexGapSM: n,
    flexGap: t,
    flexGapLG: r
  });
  return [Em(o), _m(o), Cm(o), Am(o), Tm(o)];
}, Om, {
  // Flex component don't apply extra font style
  // https://github.com/ant-design/ant-design/issues/46403
  resetStyle: !1
});
var Pm = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
const kf = /* @__PURE__ */ Fe.forwardRef((e, n) => {
  const {
    prefixCls: t,
    rootClassName: r,
    className: o,
    style: i,
    flex: s,
    gap: a,
    children: c,
    vertical: l = !1,
    component: f = "div"
  } = e, d = Pm(e, ["prefixCls", "rootClassName", "className", "style", "flex", "gap", "children", "vertical", "component"]), {
    flex: u,
    direction: v,
    getPrefixCls: g
  } = Fe.useContext(nn), h = g("flex", t), [x, S, b] = Rm(h), m = l ?? (u == null ? void 0 : u.vertical), T = tt(o, r, u == null ? void 0 : u.className, h, S, b, wm(h, e), {
    [`${h}-rtl`]: v === "rtl",
    [`${h}-gap-${a}`]: Uc(a),
    [`${h}-vertical`]: m
  }), y = Object.assign(Object.assign({}, u == null ? void 0 : u.style), i);
  return s && (y.flex = s), a && !Uc(a) && (y.gap = a), x(/* @__PURE__ */ Fe.createElement(f, Object.assign({
    ref: n,
    className: T,
    style: y
  }, mm(d, ["justify", "wrap", "align"])), c));
});
process.env.NODE_ENV !== "production" && (kf.displayName = "Flex");
const Oo = 100, If = Oo / 5, Nf = Oo / 2 - If / 2, ki = Nf * 2 * Math.PI, qc = 50, Wc = (e) => {
  const {
    dotClassName: n,
    style: t,
    hasCircleCls: r
  } = e;
  return /* @__PURE__ */ _.createElement("circle", {
    className: tt(`${n}-circle`, {
      [`${n}-circle-bg`]: r
    }),
    r: Nf,
    cx: qc,
    cy: qc,
    strokeWidth: If,
    style: t
  });
}, km = (e) => {
  let {
    percent: n,
    prefixCls: t
  } = e;
  const r = `${t}-dot`, o = `${r}-holder`, i = `${o}-hidden`, [s, a] = _.useState(!1);
  bu(() => {
    n !== 0 && a(!0);
  }, [n !== 0]);
  const c = Math.max(Math.min(n, 100), 0);
  if (!s)
    return null;
  const l = {
    strokeDashoffset: `${ki / 4}`,
    strokeDasharray: `${ki * c / 100} ${ki * (100 - c) / 100}`
  };
  return /* @__PURE__ */ _.createElement("span", {
    className: tt(o, `${r}-progress`, c <= 0 && i)
  }, /* @__PURE__ */ _.createElement("svg", {
    viewBox: `0 0 ${Oo} ${Oo}`,
    // biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole: progressbar could be readonly
    role: "progressbar",
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": c
  }, /* @__PURE__ */ _.createElement(Wc, {
    dotClassName: r,
    hasCircleCls: !0
  }), /* @__PURE__ */ _.createElement(Wc, {
    dotClassName: r,
    style: l
  })));
};
function Im(e) {
  const {
    prefixCls: n,
    percent: t = 0
  } = e, r = `${n}-dot`, o = `${r}-holder`, i = `${o}-hidden`;
  return /* @__PURE__ */ _.createElement(_.Fragment, null, /* @__PURE__ */ _.createElement("span", {
    className: tt(o, t > 0 && i)
  }, /* @__PURE__ */ _.createElement("span", {
    className: tt(r, `${n}-dot-spin`)
  }, [1, 2, 3, 4].map((s) => /* @__PURE__ */ _.createElement("i", {
    className: `${n}-dot-item`,
    key: s
  })))), /* @__PURE__ */ _.createElement(km, {
    prefixCls: n,
    percent: t
  }));
}
function Nm(e) {
  const {
    prefixCls: n,
    indicator: t,
    percent: r
  } = e, o = `${n}-dot`;
  return t && /* @__PURE__ */ _.isValidElement(t) ? im(t, {
    className: tt(t.props.className, o),
    percent: r
  }) : /* @__PURE__ */ _.createElement(Im, {
    prefixCls: n,
    percent: r
  });
}
const jm = new Mu("antSpinMove", {
  to: {
    opacity: 1
  }
}), Lm = new Mu("antRotate", {
  to: {
    transform: "rotate(405deg)"
  }
}), Mm = (e) => {
  const {
    componentCls: n,
    calc: t
  } = e;
  return {
    [n]: Object.assign(Object.assign({}, tf(e)), {
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
      [`${n}-text`]: {
        fontSize: e.fontSize,
        paddingTop: t(t(e.dotSize).sub(e.fontSize)).div(2).add(2).equal()
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
        [n]: {
          [`${n}-dot-holder`]: {
            color: e.colorWhite
          },
          [`${n}-text`]: {
            color: e.colorTextLightSolid
          }
        }
      },
      "&-nested-loading": {
        position: "relative",
        [`> div > ${n}`]: {
          position: "absolute",
          top: 0,
          insetInlineStart: 0,
          zIndex: 4,
          display: "block",
          width: "100%",
          height: "100%",
          maxHeight: e.contentHeight,
          [`${n}-dot`]: {
            position: "absolute",
            top: "50%",
            insetInlineStart: "50%",
            margin: t(e.dotSize).mul(-1).div(2).equal()
          },
          [`${n}-text`]: {
            position: "absolute",
            top: "50%",
            width: "100%",
            textShadow: `0 1px 2px ${e.colorBgContainer}`
            // FIXME: shadow
          },
          [`&${n}-show-text ${n}-dot`]: {
            marginTop: t(e.dotSize).div(2).mul(-1).sub(10).equal()
          },
          "&-sm": {
            [`${n}-dot`]: {
              margin: t(e.dotSizeSM).mul(-1).div(2).equal()
            },
            [`${n}-text`]: {
              paddingTop: t(t(e.dotSizeSM).sub(e.fontSize)).div(2).add(2).equal()
            },
            [`&${n}-show-text ${n}-dot`]: {
              marginTop: t(e.dotSizeSM).div(2).mul(-1).sub(10).equal()
            }
          },
          "&-lg": {
            [`${n}-dot`]: {
              margin: t(e.dotSizeLG).mul(-1).div(2).equal()
            },
            [`${n}-text`]: {
              paddingTop: t(t(e.dotSizeLG).sub(e.fontSize)).div(2).add(2).equal()
            },
            [`&${n}-show-text ${n}-dot`]: {
              marginTop: t(e.dotSizeLG).div(2).mul(-1).sub(10).equal()
            }
          }
        },
        [`${n}-container`]: {
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
        [`${n}-blur`]: {
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
      [`${n}-dot-holder`]: {
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
      [`${n}-dot-progress`]: {
        position: "absolute",
        inset: 0
      },
      // dots
      // ------------------------------
      [`${n}-dot`]: {
        position: "relative",
        display: "inline-block",
        fontSize: e.dotSize,
        width: "1em",
        height: "1em",
        "&-item": {
          position: "absolute",
          display: "block",
          width: t(e.dotSize).sub(t(e.marginXXS).div(2)).div(2).equal(),
          height: t(e.dotSize).sub(t(e.marginXXS).div(2)).div(2).equal(),
          background: "currentColor",
          borderRadius: "100%",
          transform: "scale(0.75)",
          transformOrigin: "50% 50%",
          opacity: 0.3,
          animationName: jm,
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
          animationName: Lm,
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
      [`&-sm ${n}-dot`]: {
        "&, &-holder": {
          fontSize: e.dotSizeSM
        }
      },
      [`&-sm ${n}-dot-holder`]: {
        i: {
          width: t(t(e.dotSizeSM).sub(t(e.marginXXS).div(2))).div(2).equal(),
          height: t(t(e.dotSizeSM).sub(t(e.marginXXS).div(2))).div(2).equal()
        }
      },
      // large
      [`&-lg ${n}-dot`]: {
        "&, &-holder": {
          fontSize: e.dotSizeLG
        }
      },
      [`&-lg ${n}-dot-holder`]: {
        i: {
          width: t(t(e.dotSizeLG).sub(e.marginXXS)).div(2).equal(),
          height: t(t(e.dotSizeLG).sub(e.marginXXS)).div(2).equal()
        }
      },
      [`&${n}-show-text ${n}-text`]: {
        display: "block"
      }
    })
  };
}, Dm = (e) => {
  const {
    controlHeightLG: n,
    controlHeight: t
  } = e;
  return {
    contentHeight: 400,
    dotSize: n / 2,
    dotSizeSM: n * 0.35,
    dotSizeLG: t
  };
}, Bm = ba("Spin", (e) => {
  const n = ti(e, {
    spinDotDefault: e.colorTextDescription
  });
  return [Mm(n)];
}, Dm), Fm = 200, $c = [[30, 0.05], [70, 0.03], [96, 0.01]];
function zm(e, n) {
  const [t, r] = _.useState(0), o = _.useRef(null), i = n === "auto";
  return _.useEffect(() => (i && e && (r(0), o.current = setInterval(() => {
    r((s) => {
      const a = 100 - s;
      for (let c = 0; c < $c.length; c += 1) {
        const [l, f] = $c[c];
        if (s <= l)
          return s + a * f;
      }
      return s;
    });
  }, Fm)), () => {
    clearInterval(o.current);
  }), [i, e]), i ? t : n;
}
var Vm = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
let jf;
function Hm(e, n) {
  return !!e && !!n && !Number.isNaN(Number(n));
}
const br = (e) => {
  var n;
  const {
    prefixCls: t,
    spinning: r = !0,
    delay: o = 0,
    className: i,
    rootClassName: s,
    size: a = "default",
    tip: c,
    wrapperClassName: l,
    style: f,
    children: d,
    fullscreen: u = !1,
    indicator: v,
    percent: g
  } = e, h = Vm(e, ["prefixCls", "spinning", "delay", "className", "rootClassName", "size", "tip", "wrapperClassName", "style", "children", "fullscreen", "indicator", "percent"]), {
    getPrefixCls: x,
    direction: S,
    className: b,
    style: m,
    indicator: T
  } = Xu("spin"), y = x("spin", t), [O, C, I] = Bm(y), [F, W] = _.useState(() => r && !Hm(r, o)), ne = zm(F, g);
  _.useEffect(() => {
    if (r) {
      const K = vm(o, () => {
        W(!0);
      });
      return K(), () => {
        var Q;
        (Q = K == null ? void 0 : K.cancel) === null || Q === void 0 || Q.call(K);
      };
    }
    W(!1);
  }, [o, r]);
  const X = _.useMemo(() => typeof d < "u" && !u, [d, u]);
  if (process.env.NODE_ENV !== "production") {
    const K = tr("Spin");
    process.env.NODE_ENV !== "production" && K(!c || X || u, "usage", "`tip` only work in nest or fullscreen pattern.");
  }
  const D = tt(y, b, {
    [`${y}-sm`]: a === "small",
    [`${y}-lg`]: a === "large",
    [`${y}-spinning`]: F,
    [`${y}-show-text`]: !!c,
    [`${y}-rtl`]: S === "rtl"
  }, i, !u && s, C, I), V = tt(`${y}-container`, {
    [`${y}-blur`]: F
  }), q = (n = v ?? T) !== null && n !== void 0 ? n : jf, $ = Object.assign(Object.assign({}, m), f), ee = /* @__PURE__ */ _.createElement("div", Object.assign({}, h, {
    style: $,
    className: D,
    "aria-live": "polite",
    "aria-busy": F
  }), /* @__PURE__ */ _.createElement(Nm, {
    prefixCls: y,
    indicator: q,
    percent: ne
  }), c && (X || u) ? /* @__PURE__ */ _.createElement("div", {
    className: `${y}-text`
  }, c) : null);
  return O(X ? /* @__PURE__ */ _.createElement("div", Object.assign({}, h, {
    className: tt(`${y}-nested-loading`, l, C, I)
  }), F && /* @__PURE__ */ _.createElement("div", {
    key: "loading"
  }, ee), /* @__PURE__ */ _.createElement("div", {
    className: V,
    key: "container"
  }, d)) : u ? /* @__PURE__ */ _.createElement("div", {
    className: tt(`${y}-fullscreen`, {
      [`${y}-fullscreen-show`]: F
    }, s, C, I)
  }, ee) : ee);
};
br.setDefaultIndicator = (e) => {
  jf = e;
};
process.env.NODE_ENV !== "production" && (br.displayName = "Spin");
function Lf(e, n) {
  return function() {
    return e.apply(n, arguments);
  };
}
const { toString: Um } = Object.prototype, { getPrototypeOf: Ea } = Object, { iterator: ni, toStringTag: Mf } = Symbol, ri = /* @__PURE__ */ ((e) => (n) => {
  const t = Um.call(n);
  return e[t] || (e[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Tt = (e) => (e = e.toLowerCase(), (n) => ri(n) === e), oi = (e) => (n) => typeof n === e, { isArray: or } = Array, Tr = oi("undefined");
function qm(e) {
  return e !== null && !Tr(e) && e.constructor !== null && !Tr(e.constructor) && ct(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Df = Tt("ArrayBuffer");
function Wm(e) {
  let n;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? n = ArrayBuffer.isView(e) : n = e && e.buffer && Df(e.buffer), n;
}
const $m = oi("string"), ct = oi("function"), Bf = oi("number"), ii = (e) => e !== null && typeof e == "object", Ym = (e) => e === !0 || e === !1, mo = (e) => {
  if (ri(e) !== "object")
    return !1;
  const n = Ea(e);
  return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Mf in e) && !(ni in e);
}, Xm = Tt("Date"), Gm = Tt("File"), Km = Tt("Blob"), Zm = Tt("FileList"), Jm = (e) => ii(e) && ct(e.pipe), Qm = (e) => {
  let n;
  return e && (typeof FormData == "function" && e instanceof FormData || ct(e.append) && ((n = ri(e)) === "formdata" || // detect form-data instance
  n === "object" && ct(e.toString) && e.toString() === "[object FormData]"));
}, eg = Tt("URLSearchParams"), [tg, ng, rg, og] = ["ReadableStream", "Request", "Response", "Headers"].map(Tt), ig = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ir(e, n, { allOwnKeys: t = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), or(e))
    for (r = 0, o = e.length; r < o; r++)
      n.call(null, e[r], r, e);
  else {
    const i = t ? Object.getOwnPropertyNames(e) : Object.keys(e), s = i.length;
    let a;
    for (r = 0; r < s; r++)
      a = i[r], n.call(null, e[a], a, e);
  }
}
function Ff(e, n) {
  n = n.toLowerCase();
  const t = Object.keys(e);
  let r = t.length, o;
  for (; r-- > 0; )
    if (o = t[r], n === o.toLowerCase())
      return o;
  return null;
}
const gn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, zf = (e) => !Tr(e) && e !== gn;
function Ns() {
  const { caseless: e } = zf(this) && this || {}, n = {}, t = (r, o) => {
    const i = e && Ff(n, o) || o;
    mo(n[i]) && mo(r) ? n[i] = Ns(n[i], r) : mo(r) ? n[i] = Ns({}, r) : or(r) ? n[i] = r.slice() : n[i] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Ir(arguments[r], t);
  return n;
}
const sg = (e, n, t, { allOwnKeys: r } = {}) => (Ir(n, (o, i) => {
  t && ct(o) ? e[i] = Lf(o, t) : e[i] = o;
}, { allOwnKeys: r }), e), ag = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), cg = (e, n, t, r) => {
  e.prototype = Object.create(n.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: n.prototype
  }), t && Object.assign(e.prototype, t);
}, lg = (e, n, t, r) => {
  let o, i, s;
  const a = {};
  if (n = n || {}, e == null) return n;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      s = o[i], (!r || r(s, e, n)) && !a[s] && (n[s] = e[s], a[s] = !0);
    e = t !== !1 && Ea(e);
  } while (e && (!t || t(e, n)) && e !== Object.prototype);
  return n;
}, ug = (e, n, t) => {
  e = String(e), (t === void 0 || t > e.length) && (t = e.length), t -= n.length;
  const r = e.indexOf(n, t);
  return r !== -1 && r === t;
}, fg = (e) => {
  if (!e) return null;
  if (or(e)) return e;
  let n = e.length;
  if (!Bf(n)) return null;
  const t = new Array(n);
  for (; n-- > 0; )
    t[n] = e[n];
  return t;
}, dg = /* @__PURE__ */ ((e) => (n) => e && n instanceof e)(typeof Uint8Array < "u" && Ea(Uint8Array)), hg = (e, n) => {
  const r = (e && e[ni]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const i = o.value;
    n.call(e, i[0], i[1]);
  }
}, xg = (e, n) => {
  let t;
  const r = [];
  for (; (t = e.exec(n)) !== null; )
    r.push(t);
  return r;
}, pg = Tt("HTMLFormElement"), mg = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(t, r, o) {
    return r.toUpperCase() + o;
  }
), Yc = (({ hasOwnProperty: e }) => (n, t) => e.call(n, t))(Object.prototype), gg = Tt("RegExp"), Vf = (e, n) => {
  const t = Object.getOwnPropertyDescriptors(e), r = {};
  Ir(t, (o, i) => {
    let s;
    (s = n(o, i, e)) !== !1 && (r[i] = s || o);
  }), Object.defineProperties(e, r);
}, vg = (e) => {
  Vf(e, (n, t) => {
    if (ct(e) && ["arguments", "caller", "callee"].indexOf(t) !== -1)
      return !1;
    const r = e[t];
    if (ct(r)) {
      if (n.enumerable = !1, "writable" in n) {
        n.writable = !1;
        return;
      }
      n.set || (n.set = () => {
        throw Error("Can not rewrite read-only method '" + t + "'");
      });
    }
  });
}, yg = (e, n) => {
  const t = {}, r = (o) => {
    o.forEach((i) => {
      t[i] = !0;
    });
  };
  return or(e) ? r(e) : r(String(e).split(n)), t;
}, bg = () => {
}, Sg = (e, n) => e != null && Number.isFinite(e = +e) ? e : n;
function wg(e) {
  return !!(e && ct(e.append) && e[Mf] === "FormData" && e[ni]);
}
const Eg = (e) => {
  const n = new Array(10), t = (r, o) => {
    if (ii(r)) {
      if (n.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        n[o] = r;
        const i = or(r) ? [] : {};
        return Ir(r, (s, a) => {
          const c = t(s, o + 1);
          !Tr(c) && (i[a] = c);
        }), n[o] = void 0, i;
      }
    }
    return r;
  };
  return t(e, 0);
}, _g = Tt("AsyncFunction"), Cg = (e) => e && (ii(e) || ct(e)) && ct(e.then) && ct(e.catch), Hf = ((e, n) => e ? setImmediate : n ? ((t, r) => (gn.addEventListener("message", ({ source: o, data: i }) => {
  o === gn && i === t && r.length && r.shift()();
}, !1), (o) => {
  r.push(o), gn.postMessage(t, "*");
}))(`axios@${Math.random()}`, []) : (t) => setTimeout(t))(
  typeof setImmediate == "function",
  ct(gn.postMessage)
), Ag = typeof queueMicrotask < "u" ? queueMicrotask.bind(gn) : typeof process < "u" && process.nextTick || Hf, Tg = (e) => e != null && ct(e[ni]), A = {
  isArray: or,
  isArrayBuffer: Df,
  isBuffer: qm,
  isFormData: Qm,
  isArrayBufferView: Wm,
  isString: $m,
  isNumber: Bf,
  isBoolean: Ym,
  isObject: ii,
  isPlainObject: mo,
  isReadableStream: tg,
  isRequest: ng,
  isResponse: rg,
  isHeaders: og,
  isUndefined: Tr,
  isDate: Xm,
  isFile: Gm,
  isBlob: Km,
  isRegExp: gg,
  isFunction: ct,
  isStream: Jm,
  isURLSearchParams: eg,
  isTypedArray: dg,
  isFileList: Zm,
  forEach: Ir,
  merge: Ns,
  extend: sg,
  trim: ig,
  stripBOM: ag,
  inherits: cg,
  toFlatObject: lg,
  kindOf: ri,
  kindOfTest: Tt,
  endsWith: ug,
  toArray: fg,
  forEachEntry: hg,
  matchAll: xg,
  isHTMLForm: pg,
  hasOwnProperty: Yc,
  hasOwnProp: Yc,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Vf,
  freezeMethods: vg,
  toObjectSet: yg,
  toCamelCase: mg,
  noop: bg,
  toFiniteNumber: Sg,
  findKey: Ff,
  global: gn,
  isContextDefined: zf,
  isSpecCompliantForm: wg,
  toJSONObject: Eg,
  isAsyncFn: _g,
  isThenable: Cg,
  setImmediate: Hf,
  asap: Ag,
  isIterable: Tg
};
function te(e, n, t, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", n && (this.code = n), t && (this.config = t), r && (this.request = r), o && (this.response = o, this.status = o.status ? o.status : null);
}
A.inherits(te, Error, {
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
      config: A.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Uf = te.prototype, qf = {};
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
  qf[e] = { value: e };
});
Object.defineProperties(te, qf);
Object.defineProperty(Uf, "isAxiosError", { value: !0 });
te.from = (e, n, t, r, o, i) => {
  const s = Object.create(Uf);
  return A.toFlatObject(e, s, function(c) {
    return c !== Error.prototype;
  }, (a) => a !== "isAxiosError"), te.call(s, e.message, n, t, r, o), s.cause = e, s.name = e.name, i && Object.assign(s, i), s;
};
const Og = null;
function js(e) {
  return A.isPlainObject(e) || A.isArray(e);
}
function Wf(e) {
  return A.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Xc(e, n, t) {
  return e ? e.concat(n).map(function(o, i) {
    return o = Wf(o), !t && i ? "[" + o + "]" : o;
  }).join(t ? "." : "") : n;
}
function Rg(e) {
  return A.isArray(e) && !e.some(js);
}
const Pg = A.toFlatObject(A, {}, null, function(n) {
  return /^is[A-Z]/.test(n);
});
function si(e, n, t) {
  if (!A.isObject(e))
    throw new TypeError("target must be an object");
  n = n || new FormData(), t = A.toFlatObject(t, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(h, x) {
    return !A.isUndefined(x[h]);
  });
  const r = t.metaTokens, o = t.visitor || f, i = t.dots, s = t.indexes, c = (t.Blob || typeof Blob < "u" && Blob) && A.isSpecCompliantForm(n);
  if (!A.isFunction(o))
    throw new TypeError("visitor must be a function");
  function l(g) {
    if (g === null) return "";
    if (A.isDate(g))
      return g.toISOString();
    if (!c && A.isBlob(g))
      throw new te("Blob is not supported. Use a Buffer instead.");
    return A.isArrayBuffer(g) || A.isTypedArray(g) ? c && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function f(g, h, x) {
    let S = g;
    if (g && !x && typeof g == "object") {
      if (A.endsWith(h, "{}"))
        h = r ? h : h.slice(0, -2), g = JSON.stringify(g);
      else if (A.isArray(g) && Rg(g) || (A.isFileList(g) || A.endsWith(h, "[]")) && (S = A.toArray(g)))
        return h = Wf(h), S.forEach(function(m, T) {
          !(A.isUndefined(m) || m === null) && n.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? Xc([h], T, i) : s === null ? h : h + "[]",
            l(m)
          );
        }), !1;
    }
    return js(g) ? !0 : (n.append(Xc(x, h, i), l(g)), !1);
  }
  const d = [], u = Object.assign(Pg, {
    defaultVisitor: f,
    convertValue: l,
    isVisitable: js
  });
  function v(g, h) {
    if (!A.isUndefined(g)) {
      if (d.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      d.push(g), A.forEach(g, function(S, b) {
        (!(A.isUndefined(S) || S === null) && o.call(
          n,
          S,
          A.isString(b) ? b.trim() : b,
          h,
          u
        )) === !0 && v(S, h ? h.concat(b) : [b]);
      }), d.pop();
    }
  }
  if (!A.isObject(e))
    throw new TypeError("data must be an object");
  return v(e), n;
}
function Gc(e) {
  const n = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return n[r];
  });
}
function _a(e, n) {
  this._pairs = [], e && si(e, this, n);
}
const $f = _a.prototype;
$f.append = function(n, t) {
  this._pairs.push([n, t]);
};
$f.toString = function(n) {
  const t = n ? function(r) {
    return n.call(this, r, Gc);
  } : Gc;
  return this._pairs.map(function(o) {
    return t(o[0]) + "=" + t(o[1]);
  }, "").join("&");
};
function kg(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Yf(e, n, t) {
  if (!n)
    return e;
  const r = t && t.encode || kg;
  A.isFunction(t) && (t = {
    serialize: t
  });
  const o = t && t.serialize;
  let i;
  if (o ? i = o(n, t) : i = A.isURLSearchParams(n) ? n.toString() : new _a(n, t).toString(r), i) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class Kc {
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
  use(n, t, r) {
    return this.handlers.push({
      fulfilled: n,
      rejected: t,
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
  eject(n) {
    this.handlers[n] && (this.handlers[n] = null);
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
  forEach(n) {
    A.forEach(this.handlers, function(r) {
      r !== null && n(r);
    });
  }
}
const Xf = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Ig = typeof URLSearchParams < "u" ? URLSearchParams : _a, Ng = typeof FormData < "u" ? FormData : null, jg = typeof Blob < "u" ? Blob : null, Lg = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Ig,
    FormData: Ng,
    Blob: jg
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ca = typeof window < "u" && typeof document < "u", Ls = typeof navigator == "object" && navigator || void 0, Mg = Ca && (!Ls || ["ReactNative", "NativeScript", "NS"].indexOf(Ls.product) < 0), Dg = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Bg = Ca && window.location.href || "http://localhost", Fg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ca,
  hasStandardBrowserEnv: Mg,
  hasStandardBrowserWebWorkerEnv: Dg,
  navigator: Ls,
  origin: Bg
}, Symbol.toStringTag, { value: "Module" })), et = {
  ...Fg,
  ...Lg
};
function zg(e, n) {
  return si(e, new et.classes.URLSearchParams(), Object.assign({
    visitor: function(t, r, o, i) {
      return et.isNode && A.isBuffer(t) ? (this.append(r, t.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, n));
}
function Vg(e) {
  return A.matchAll(/\w+|\[(\w*)]/g, e).map((n) => n[0] === "[]" ? "" : n[1] || n[0]);
}
function Hg(e) {
  const n = {}, t = Object.keys(e);
  let r;
  const o = t.length;
  let i;
  for (r = 0; r < o; r++)
    i = t[r], n[i] = e[i];
  return n;
}
function Gf(e) {
  function n(t, r, o, i) {
    let s = t[i++];
    if (s === "__proto__") return !0;
    const a = Number.isFinite(+s), c = i >= t.length;
    return s = !s && A.isArray(o) ? o.length : s, c ? (A.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !a) : ((!o[s] || !A.isObject(o[s])) && (o[s] = []), n(t, r, o[s], i) && A.isArray(o[s]) && (o[s] = Hg(o[s])), !a);
  }
  if (A.isFormData(e) && A.isFunction(e.entries)) {
    const t = {};
    return A.forEachEntry(e, (r, o) => {
      n(Vg(r), o, t, 0);
    }), t;
  }
  return null;
}
function Ug(e, n, t) {
  if (A.isString(e))
    try {
      return (n || JSON.parse)(e), A.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (t || JSON.stringify)(e);
}
const Nr = {
  transitional: Xf,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(n, t) {
    const r = t.getContentType() || "", o = r.indexOf("application/json") > -1, i = A.isObject(n);
    if (i && A.isHTMLForm(n) && (n = new FormData(n)), A.isFormData(n))
      return o ? JSON.stringify(Gf(n)) : n;
    if (A.isArrayBuffer(n) || A.isBuffer(n) || A.isStream(n) || A.isFile(n) || A.isBlob(n) || A.isReadableStream(n))
      return n;
    if (A.isArrayBufferView(n))
      return n.buffer;
    if (A.isURLSearchParams(n))
      return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), n.toString();
    let a;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return zg(n, this.formSerializer).toString();
      if ((a = A.isFileList(n)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return si(
          a ? { "files[]": n } : n,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return i || o ? (t.setContentType("application/json", !1), Ug(n)) : n;
  }],
  transformResponse: [function(n) {
    const t = this.transitional || Nr.transitional, r = t && t.forcedJSONParsing, o = this.responseType === "json";
    if (A.isResponse(n) || A.isReadableStream(n))
      return n;
    if (n && A.isString(n) && (r && !this.responseType || o)) {
      const s = !(t && t.silentJSONParsing) && o;
      try {
        return JSON.parse(n);
      } catch (a) {
        if (s)
          throw a.name === "SyntaxError" ? te.from(a, te.ERR_BAD_RESPONSE, this, null, this.response) : a;
      }
    }
    return n;
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
    FormData: et.classes.FormData,
    Blob: et.classes.Blob
  },
  validateStatus: function(n) {
    return n >= 200 && n < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
A.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Nr.headers[e] = {};
});
const qg = A.toObjectSet([
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
]), Wg = (e) => {
  const n = {};
  let t, r, o;
  return e && e.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), t = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!t || n[t] && qg[t]) && (t === "set-cookie" ? n[t] ? n[t].push(r) : n[t] = [r] : n[t] = n[t] ? n[t] + ", " + r : r);
  }), n;
}, Zc = Symbol("internals");
function hr(e) {
  return e && String(e).trim().toLowerCase();
}
function go(e) {
  return e === !1 || e == null ? e : A.isArray(e) ? e.map(go) : String(e);
}
function $g(e) {
  const n = /* @__PURE__ */ Object.create(null), t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = t.exec(e); )
    n[r[1]] = r[2];
  return n;
}
const Yg = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ii(e, n, t, r, o) {
  if (A.isFunction(r))
    return r.call(this, n, t);
  if (o && (n = t), !!A.isString(n)) {
    if (A.isString(r))
      return n.indexOf(r) !== -1;
    if (A.isRegExp(r))
      return r.test(n);
  }
}
function Xg(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (n, t, r) => t.toUpperCase() + r);
}
function Gg(e, n) {
  const t = A.toCamelCase(" " + n);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + t, {
      value: function(o, i, s) {
        return this[r].call(this, n, o, i, s);
      },
      configurable: !0
    });
  });
}
let lt = class {
  constructor(n) {
    n && this.set(n);
  }
  set(n, t, r) {
    const o = this;
    function i(a, c, l) {
      const f = hr(c);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const d = A.findKey(o, f);
      (!d || o[d] === void 0 || l === !0 || l === void 0 && o[d] !== !1) && (o[d || c] = go(a));
    }
    const s = (a, c) => A.forEach(a, (l, f) => i(l, f, c));
    if (A.isPlainObject(n) || n instanceof this.constructor)
      s(n, t);
    else if (A.isString(n) && (n = n.trim()) && !Yg(n))
      s(Wg(n), t);
    else if (A.isObject(n) && A.isIterable(n)) {
      let a = {}, c, l;
      for (const f of n) {
        if (!A.isArray(f))
          throw TypeError("Object iterator must return a key-value pair");
        a[l = f[0]] = (c = a[l]) ? A.isArray(c) ? [...c, f[1]] : [c, f[1]] : f[1];
      }
      s(a, t);
    } else
      n != null && i(t, n, r);
    return this;
  }
  get(n, t) {
    if (n = hr(n), n) {
      const r = A.findKey(this, n);
      if (r) {
        const o = this[r];
        if (!t)
          return o;
        if (t === !0)
          return $g(o);
        if (A.isFunction(t))
          return t.call(this, o, r);
        if (A.isRegExp(t))
          return t.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(n, t) {
    if (n = hr(n), n) {
      const r = A.findKey(this, n);
      return !!(r && this[r] !== void 0 && (!t || Ii(this, this[r], r, t)));
    }
    return !1;
  }
  delete(n, t) {
    const r = this;
    let o = !1;
    function i(s) {
      if (s = hr(s), s) {
        const a = A.findKey(r, s);
        a && (!t || Ii(r, r[a], a, t)) && (delete r[a], o = !0);
      }
    }
    return A.isArray(n) ? n.forEach(i) : i(n), o;
  }
  clear(n) {
    const t = Object.keys(this);
    let r = t.length, o = !1;
    for (; r--; ) {
      const i = t[r];
      (!n || Ii(this, this[i], i, n, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(n) {
    const t = this, r = {};
    return A.forEach(this, (o, i) => {
      const s = A.findKey(r, i);
      if (s) {
        t[s] = go(o), delete t[i];
        return;
      }
      const a = n ? Xg(i) : String(i).trim();
      a !== i && delete t[i], t[a] = go(o), r[a] = !0;
    }), this;
  }
  concat(...n) {
    return this.constructor.concat(this, ...n);
  }
  toJSON(n) {
    const t = /* @__PURE__ */ Object.create(null);
    return A.forEach(this, (r, o) => {
      r != null && r !== !1 && (t[o] = n && A.isArray(r) ? r.join(", ") : r);
    }), t;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([n, t]) => n + ": " + t).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(n) {
    return n instanceof this ? n : new this(n);
  }
  static concat(n, ...t) {
    const r = new this(n);
    return t.forEach((o) => r.set(o)), r;
  }
  static accessor(n) {
    const r = (this[Zc] = this[Zc] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(s) {
      const a = hr(s);
      r[a] || (Gg(o, s), r[a] = !0);
    }
    return A.isArray(n) ? n.forEach(i) : i(n), this;
  }
};
lt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
A.reduceDescriptors(lt.prototype, ({ value: e }, n) => {
  let t = n[0].toUpperCase() + n.slice(1);
  return {
    get: () => e,
    set(r) {
      this[t] = r;
    }
  };
});
A.freezeMethods(lt);
function Ni(e, n) {
  const t = this || Nr, r = n || t, o = lt.from(r.headers);
  let i = r.data;
  return A.forEach(e, function(a) {
    i = a.call(t, i, o.normalize(), n ? n.status : void 0);
  }), o.normalize(), i;
}
function Kf(e) {
  return !!(e && e.__CANCEL__);
}
function ir(e, n, t) {
  te.call(this, e ?? "canceled", te.ERR_CANCELED, n, t), this.name = "CanceledError";
}
A.inherits(ir, te, {
  __CANCEL__: !0
});
function Zf(e, n, t) {
  const r = t.config.validateStatus;
  !t.status || !r || r(t.status) ? e(t) : n(new te(
    "Request failed with status code " + t.status,
    [te.ERR_BAD_REQUEST, te.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],
    t.config,
    t.request,
    t
  ));
}
function Kg(e) {
  const n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return n && n[1] || "";
}
function Zg(e, n) {
  e = e || 10;
  const t = new Array(e), r = new Array(e);
  let o = 0, i = 0, s;
  return n = n !== void 0 ? n : 1e3, function(c) {
    const l = Date.now(), f = r[i];
    s || (s = l), t[o] = c, r[o] = l;
    let d = i, u = 0;
    for (; d !== o; )
      u += t[d++], d = d % e;
    if (o = (o + 1) % e, o === i && (i = (i + 1) % e), l - s < n)
      return;
    const v = f && l - f;
    return v ? Math.round(u * 1e3 / v) : void 0;
  };
}
function Jg(e, n) {
  let t = 0, r = 1e3 / n, o, i;
  const s = (l, f = Date.now()) => {
    t = f, o = null, i && (clearTimeout(i), i = null), e.apply(null, l);
  };
  return [(...l) => {
    const f = Date.now(), d = f - t;
    d >= r ? s(l, f) : (o = l, i || (i = setTimeout(() => {
      i = null, s(o);
    }, r - d)));
  }, () => o && s(o)];
}
const Ro = (e, n, t = 3) => {
  let r = 0;
  const o = Zg(50, 250);
  return Jg((i) => {
    const s = i.loaded, a = i.lengthComputable ? i.total : void 0, c = s - r, l = o(c), f = s <= a;
    r = s;
    const d = {
      loaded: s,
      total: a,
      progress: a ? s / a : void 0,
      bytes: c,
      rate: l || void 0,
      estimated: l && a && f ? (a - s) / l : void 0,
      event: i,
      lengthComputable: a != null,
      [n ? "download" : "upload"]: !0
    };
    e(d);
  }, t);
}, Jc = (e, n) => {
  const t = e != null;
  return [(r) => n[0]({
    lengthComputable: t,
    total: e,
    loaded: r
  }), n[1]];
}, Qc = (e) => (...n) => A.asap(() => e(...n)), Qg = et.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, n) => (t) => (t = new URL(t, et.origin), e.protocol === t.protocol && e.host === t.host && (n || e.port === t.port)))(
  new URL(et.origin),
  et.navigator && /(msie|trident)/i.test(et.navigator.userAgent)
) : () => !0, ev = et.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, n, t, r, o, i) {
      const s = [e + "=" + encodeURIComponent(n)];
      A.isNumber(t) && s.push("expires=" + new Date(t).toGMTString()), A.isString(r) && s.push("path=" + r), A.isString(o) && s.push("domain=" + o), i === !0 && s.push("secure"), document.cookie = s.join("; ");
    },
    read(e) {
      const n = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return n ? decodeURIComponent(n[3]) : null;
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
function tv(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function nv(e, n) {
  return n ? e.replace(/\/?\/$/, "") + "/" + n.replace(/^\/+/, "") : e;
}
function Jf(e, n, t) {
  let r = !tv(n);
  return e && (r || t == !1) ? nv(e, n) : n;
}
const el = (e) => e instanceof lt ? { ...e } : e;
function Cn(e, n) {
  n = n || {};
  const t = {};
  function r(l, f, d, u) {
    return A.isPlainObject(l) && A.isPlainObject(f) ? A.merge.call({ caseless: u }, l, f) : A.isPlainObject(f) ? A.merge({}, f) : A.isArray(f) ? f.slice() : f;
  }
  function o(l, f, d, u) {
    if (A.isUndefined(f)) {
      if (!A.isUndefined(l))
        return r(void 0, l, d, u);
    } else return r(l, f, d, u);
  }
  function i(l, f) {
    if (!A.isUndefined(f))
      return r(void 0, f);
  }
  function s(l, f) {
    if (A.isUndefined(f)) {
      if (!A.isUndefined(l))
        return r(void 0, l);
    } else return r(void 0, f);
  }
  function a(l, f, d) {
    if (d in n)
      return r(l, f);
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
    headers: (l, f, d) => o(el(l), el(f), d, !0)
  };
  return A.forEach(Object.keys(Object.assign({}, e, n)), function(f) {
    const d = c[f] || o, u = d(e[f], n[f], f);
    A.isUndefined(u) && d !== a || (t[f] = u);
  }), t;
}
const Qf = (e) => {
  const n = Cn({}, e);
  let { data: t, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: i, headers: s, auth: a } = n;
  n.headers = s = lt.from(s), n.url = Yf(Jf(n.baseURL, n.url, n.allowAbsoluteUrls), e.params, e.paramsSerializer), a && s.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let c;
  if (A.isFormData(t)) {
    if (et.hasStandardBrowserEnv || et.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if ((c = s.getContentType()) !== !1) {
      const [l, ...f] = c ? c.split(";").map((d) => d.trim()).filter(Boolean) : [];
      s.setContentType([l || "multipart/form-data", ...f].join("; "));
    }
  }
  if (et.hasStandardBrowserEnv && (r && A.isFunction(r) && (r = r(n)), r || r !== !1 && Qg(n.url))) {
    const l = o && i && ev.read(i);
    l && s.set(o, l);
  }
  return n;
}, rv = typeof XMLHttpRequest < "u", ov = rv && function(e) {
  return new Promise(function(t, r) {
    const o = Qf(e);
    let i = o.data;
    const s = lt.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: c, onDownloadProgress: l } = o, f, d, u, v, g;
    function h() {
      v && v(), g && g(), o.cancelToken && o.cancelToken.unsubscribe(f), o.signal && o.signal.removeEventListener("abort", f);
    }
    let x = new XMLHttpRequest();
    x.open(o.method.toUpperCase(), o.url, !0), x.timeout = o.timeout;
    function S() {
      if (!x)
        return;
      const m = lt.from(
        "getAllResponseHeaders" in x && x.getAllResponseHeaders()
      ), y = {
        data: !a || a === "text" || a === "json" ? x.responseText : x.response,
        status: x.status,
        statusText: x.statusText,
        headers: m,
        config: e,
        request: x
      };
      Zf(function(C) {
        t(C), h();
      }, function(C) {
        r(C), h();
      }, y), x = null;
    }
    "onloadend" in x ? x.onloadend = S : x.onreadystatechange = function() {
      !x || x.readyState !== 4 || x.status === 0 && !(x.responseURL && x.responseURL.indexOf("file:") === 0) || setTimeout(S);
    }, x.onabort = function() {
      x && (r(new te("Request aborted", te.ECONNABORTED, e, x)), x = null);
    }, x.onerror = function() {
      r(new te("Network Error", te.ERR_NETWORK, e, x)), x = null;
    }, x.ontimeout = function() {
      let T = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const y = o.transitional || Xf;
      o.timeoutErrorMessage && (T = o.timeoutErrorMessage), r(new te(
        T,
        y.clarifyTimeoutError ? te.ETIMEDOUT : te.ECONNABORTED,
        e,
        x
      )), x = null;
    }, i === void 0 && s.setContentType(null), "setRequestHeader" in x && A.forEach(s.toJSON(), function(T, y) {
      x.setRequestHeader(y, T);
    }), A.isUndefined(o.withCredentials) || (x.withCredentials = !!o.withCredentials), a && a !== "json" && (x.responseType = o.responseType), l && ([u, g] = Ro(l, !0), x.addEventListener("progress", u)), c && x.upload && ([d, v] = Ro(c), x.upload.addEventListener("progress", d), x.upload.addEventListener("loadend", v)), (o.cancelToken || o.signal) && (f = (m) => {
      x && (r(!m || m.type ? new ir(null, e, x) : m), x.abort(), x = null);
    }, o.cancelToken && o.cancelToken.subscribe(f), o.signal && (o.signal.aborted ? f() : o.signal.addEventListener("abort", f)));
    const b = Kg(o.url);
    if (b && et.protocols.indexOf(b) === -1) {
      r(new te("Unsupported protocol " + b + ":", te.ERR_BAD_REQUEST, e));
      return;
    }
    x.send(i || null);
  });
}, iv = (e, n) => {
  const { length: t } = e = e ? e.filter(Boolean) : [];
  if (n || t) {
    let r = new AbortController(), o;
    const i = function(l) {
      if (!o) {
        o = !0, a();
        const f = l instanceof Error ? l : this.reason;
        r.abort(f instanceof te ? f : new ir(f instanceof Error ? f.message : f));
      }
    };
    let s = n && setTimeout(() => {
      s = null, i(new te(`timeout ${n} of ms exceeded`, te.ETIMEDOUT));
    }, n);
    const a = () => {
      e && (s && clearTimeout(s), s = null, e.forEach((l) => {
        l.unsubscribe ? l.unsubscribe(i) : l.removeEventListener("abort", i);
      }), e = null);
    };
    e.forEach((l) => l.addEventListener("abort", i));
    const { signal: c } = r;
    return c.unsubscribe = () => A.asap(a), c;
  }
}, sv = function* (e, n) {
  let t = e.byteLength;
  if (t < n) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < t; )
    o = r + n, yield e.slice(r, o), r = o;
}, av = async function* (e, n) {
  for await (const t of cv(e))
    yield* sv(t, n);
}, cv = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const n = e.getReader();
  try {
    for (; ; ) {
      const { done: t, value: r } = await n.read();
      if (t)
        break;
      yield r;
    }
  } finally {
    await n.cancel();
  }
}, tl = (e, n, t, r) => {
  const o = av(e, n);
  let i = 0, s, a = (c) => {
    s || (s = !0, r && r(c));
  };
  return new ReadableStream({
    async pull(c) {
      try {
        const { done: l, value: f } = await o.next();
        if (l) {
          a(), c.close();
          return;
        }
        let d = f.byteLength;
        if (t) {
          let u = i += d;
          t(u);
        }
        c.enqueue(new Uint8Array(f));
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
}, ai = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", e0 = ai && typeof ReadableStream == "function", lv = ai && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (n) => e.encode(n))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), t0 = (e, ...n) => {
  try {
    return !!e(...n);
  } catch {
    return !1;
  }
}, uv = e0 && t0(() => {
  let e = !1;
  const n = new Request(et.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !n;
}), nl = 64 * 1024, Ms = e0 && t0(() => A.isReadableStream(new Response("").body)), Po = {
  stream: Ms && ((e) => e.body)
};
ai && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((n) => {
    !Po[n] && (Po[n] = A.isFunction(e[n]) ? (t) => t[n]() : (t, r) => {
      throw new te(`Response type '${n}' is not supported`, te.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const fv = async (e) => {
  if (e == null)
    return 0;
  if (A.isBlob(e))
    return e.size;
  if (A.isSpecCompliantForm(e))
    return (await new Request(et.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (A.isArrayBufferView(e) || A.isArrayBuffer(e))
    return e.byteLength;
  if (A.isURLSearchParams(e) && (e = e + ""), A.isString(e))
    return (await lv(e)).byteLength;
}, dv = async (e, n) => {
  const t = A.toFiniteNumber(e.getContentLength());
  return t ?? fv(n);
}, hv = ai && (async (e) => {
  let {
    url: n,
    method: t,
    data: r,
    signal: o,
    cancelToken: i,
    timeout: s,
    onDownloadProgress: a,
    onUploadProgress: c,
    responseType: l,
    headers: f,
    withCredentials: d = "same-origin",
    fetchOptions: u
  } = Qf(e);
  l = l ? (l + "").toLowerCase() : "text";
  let v = iv([o, i && i.toAbortSignal()], s), g;
  const h = v && v.unsubscribe && (() => {
    v.unsubscribe();
  });
  let x;
  try {
    if (c && uv && t !== "get" && t !== "head" && (x = await dv(f, r)) !== 0) {
      let y = new Request(n, {
        method: "POST",
        body: r,
        duplex: "half"
      }), O;
      if (A.isFormData(r) && (O = y.headers.get("content-type")) && f.setContentType(O), y.body) {
        const [C, I] = Jc(
          x,
          Ro(Qc(c))
        );
        r = tl(y.body, nl, C, I);
      }
    }
    A.isString(d) || (d = d ? "include" : "omit");
    const S = "credentials" in Request.prototype;
    g = new Request(n, {
      ...u,
      signal: v,
      method: t.toUpperCase(),
      headers: f.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: S ? d : void 0
    });
    let b = await fetch(g);
    const m = Ms && (l === "stream" || l === "response");
    if (Ms && (a || m && h)) {
      const y = {};
      ["status", "statusText", "headers"].forEach((F) => {
        y[F] = b[F];
      });
      const O = A.toFiniteNumber(b.headers.get("content-length")), [C, I] = a && Jc(
        O,
        Ro(Qc(a), !0)
      ) || [];
      b = new Response(
        tl(b.body, nl, C, () => {
          I && I(), h && h();
        }),
        y
      );
    }
    l = l || "text";
    let T = await Po[A.findKey(Po, l) || "text"](b, e);
    return !m && h && h(), await new Promise((y, O) => {
      Zf(y, O, {
        data: T,
        headers: lt.from(b.headers),
        status: b.status,
        statusText: b.statusText,
        config: e,
        request: g
      });
    });
  } catch (S) {
    throw h && h(), S && S.name === "TypeError" && /Load failed|fetch/i.test(S.message) ? Object.assign(
      new te("Network Error", te.ERR_NETWORK, e, g),
      {
        cause: S.cause || S
      }
    ) : te.from(S, S && S.code, e, g);
  }
}), Ds = {
  http: Og,
  xhr: ov,
  fetch: hv
};
A.forEach(Ds, (e, n) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: n });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: n });
  }
});
const rl = (e) => `- ${e}`, xv = (e) => A.isFunction(e) || e === null || e === !1, n0 = {
  getAdapter: (e) => {
    e = A.isArray(e) ? e : [e];
    const { length: n } = e;
    let t, r;
    const o = {};
    for (let i = 0; i < n; i++) {
      t = e[i];
      let s;
      if (r = t, !xv(t) && (r = Ds[(s = String(t)).toLowerCase()], r === void 0))
        throw new te(`Unknown adapter '${s}'`);
      if (r)
        break;
      o[s || "#" + i] = r;
    }
    if (!r) {
      const i = Object.entries(o).map(
        ([a, c]) => `adapter ${a} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let s = n ? i.length > 1 ? `since :
` + i.map(rl).join(`
`) : " " + rl(i[0]) : "as no adapter specified";
      throw new te(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Ds
};
function ji(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ir(null, e);
}
function ol(e) {
  return ji(e), e.headers = lt.from(e.headers), e.data = Ni.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), n0.getAdapter(e.adapter || Nr.adapter)(e).then(function(r) {
    return ji(e), r.data = Ni.call(
      e,
      e.transformResponse,
      r
    ), r.headers = lt.from(r.headers), r;
  }, function(r) {
    return Kf(r) || (ji(e), r && r.response && (r.response.data = Ni.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = lt.from(r.response.headers))), Promise.reject(r);
  });
}
const r0 = "1.9.0", ci = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, n) => {
  ci[e] = function(r) {
    return typeof r === e || "a" + (n < 1 ? "n " : " ") + e;
  };
});
const il = {};
ci.transitional = function(n, t, r) {
  function o(i, s) {
    return "[Axios v" + r0 + "] Transitional option '" + i + "'" + s + (r ? ". " + r : "");
  }
  return (i, s, a) => {
    if (n === !1)
      throw new te(
        o(s, " has been removed" + (t ? " in " + t : "")),
        te.ERR_DEPRECATED
      );
    return t && !il[s] && (il[s] = !0, console.warn(
      o(
        s,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), n ? n(i, s, a) : !0;
  };
};
ci.spelling = function(n) {
  return (t, r) => (console.warn(`${r} is likely a misspelling of ${n}`), !0);
};
function pv(e, n, t) {
  if (typeof e != "object")
    throw new te("options must be an object", te.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o], s = n[i];
    if (s) {
      const a = e[i], c = a === void 0 || s(a, i, e);
      if (c !== !0)
        throw new te("option " + i + " must be " + c, te.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0)
      throw new te("Unknown option " + i, te.ERR_BAD_OPTION);
  }
}
const vo = {
  assertOptions: pv,
  validators: ci
}, It = vo.validators;
let En = class {
  constructor(n) {
    this.defaults = n || {}, this.interceptors = {
      request: new Kc(),
      response: new Kc()
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
  async request(n, t) {
    try {
      return await this._request(n, t);
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
  _request(n, t) {
    typeof n == "string" ? (t = t || {}, t.url = n) : t = n || {}, t = Cn(this.defaults, t);
    const { transitional: r, paramsSerializer: o, headers: i } = t;
    r !== void 0 && vo.assertOptions(r, {
      silentJSONParsing: It.transitional(It.boolean),
      forcedJSONParsing: It.transitional(It.boolean),
      clarifyTimeoutError: It.transitional(It.boolean)
    }, !1), o != null && (A.isFunction(o) ? t.paramsSerializer = {
      serialize: o
    } : vo.assertOptions(o, {
      encode: It.function,
      serialize: It.function
    }, !0)), t.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : t.allowAbsoluteUrls = !0), vo.assertOptions(t, {
      baseUrl: It.spelling("baseURL"),
      withXsrfToken: It.spelling("withXSRFToken")
    }, !0), t.method = (t.method || this.defaults.method || "get").toLowerCase();
    let s = i && A.merge(
      i.common,
      i[t.method]
    );
    i && A.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (g) => {
        delete i[g];
      }
    ), t.headers = lt.concat(s, i);
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function(h) {
      typeof h.runWhen == "function" && h.runWhen(t) === !1 || (c = c && h.synchronous, a.unshift(h.fulfilled, h.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(h) {
      l.push(h.fulfilled, h.rejected);
    });
    let f, d = 0, u;
    if (!c) {
      const g = [ol.bind(this), void 0];
      for (g.unshift.apply(g, a), g.push.apply(g, l), u = g.length, f = Promise.resolve(t); d < u; )
        f = f.then(g[d++], g[d++]);
      return f;
    }
    u = a.length;
    let v = t;
    for (d = 0; d < u; ) {
      const g = a[d++], h = a[d++];
      try {
        v = g(v);
      } catch (x) {
        h.call(this, x);
        break;
      }
    }
    try {
      f = ol.call(this, v);
    } catch (g) {
      return Promise.reject(g);
    }
    for (d = 0, u = l.length; d < u; )
      f = f.then(l[d++], l[d++]);
    return f;
  }
  getUri(n) {
    n = Cn(this.defaults, n);
    const t = Jf(n.baseURL, n.url, n.allowAbsoluteUrls);
    return Yf(t, n.params, n.paramsSerializer);
  }
};
A.forEach(["delete", "get", "head", "options"], function(n) {
  En.prototype[n] = function(t, r) {
    return this.request(Cn(r || {}, {
      method: n,
      url: t,
      data: (r || {}).data
    }));
  };
});
A.forEach(["post", "put", "patch"], function(n) {
  function t(r) {
    return function(i, s, a) {
      return this.request(Cn(a || {}, {
        method: n,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: s
      }));
    };
  }
  En.prototype[n] = t(), En.prototype[n + "Form"] = t(!0);
});
let mv = class o0 {
  constructor(n) {
    if (typeof n != "function")
      throw new TypeError("executor must be a function.");
    let t;
    this.promise = new Promise(function(i) {
      t = i;
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
    }, n(function(i, s, a) {
      r.reason || (r.reason = new ir(i, s, a), t(r.reason));
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
  subscribe(n) {
    if (this.reason) {
      n(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(n) : this._listeners = [n];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(n) {
    if (!this._listeners)
      return;
    const t = this._listeners.indexOf(n);
    t !== -1 && this._listeners.splice(t, 1);
  }
  toAbortSignal() {
    const n = new AbortController(), t = (r) => {
      n.abort(r);
    };
    return this.subscribe(t), n.signal.unsubscribe = () => this.unsubscribe(t), n.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let n;
    return {
      token: new o0(function(o) {
        n = o;
      }),
      cancel: n
    };
  }
};
function gv(e) {
  return function(t) {
    return e.apply(null, t);
  };
}
function vv(e) {
  return A.isObject(e) && e.isAxiosError === !0;
}
const Bs = {
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
Object.entries(Bs).forEach(([e, n]) => {
  Bs[n] = e;
});
function i0(e) {
  const n = new En(e), t = Lf(En.prototype.request, n);
  return A.extend(t, En.prototype, n, { allOwnKeys: !0 }), A.extend(t, n, null, { allOwnKeys: !0 }), t.create = function(o) {
    return i0(Cn(e, o));
  }, t;
}
const je = i0(Nr);
je.Axios = En;
je.CanceledError = ir;
je.CancelToken = mv;
je.isCancel = Kf;
je.VERSION = r0;
je.toFormData = si;
je.AxiosError = te;
je.Cancel = je.CanceledError;
je.all = function(n) {
  return Promise.all(n);
};
je.spread = gv;
je.isAxiosError = vv;
je.mergeConfig = Cn;
je.AxiosHeaders = lt;
je.formToJSON = (e) => Gf(A.isHTMLForm(e) ? new FormData(e) : e);
je.getAdapter = n0.getAdapter;
je.HttpStatusCode = Bs;
je.default = je;
const {
  Axios: Zv,
  AxiosError: Jv,
  CanceledError: Qv,
  isCancel: ey,
  CancelToken: ty,
  VERSION: ny,
  all: ry,
  Cancel: oy,
  isAxiosError: iy,
  spread: sy,
  toFormData: ay,
  AxiosHeaders: cy,
  HttpStatusCode: ly,
  formToJSON: uy,
  getAdapter: fy,
  mergeConfig: dy
} = je, bt = Xn;
(function(e, n) {
  const t = Xn, r = e();
  for (; ; )
    try {
      if (-parseInt(t(212)) / 1 + -parseInt(t(211)) / 2 + parseInt(t(188)) / 3 * (parseInt(t(203)) / 4) + parseInt(t(191)) / 5 * (-parseInt(t(218)) / 6) + -parseInt(t(187)) / 7 * (-parseInt(t(217)) / 8) + parseInt(t(194)) / 9 + parseInt(t(184)) / 10 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ko, 828972);
const yv = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = Xn;
    if (r(196) === r(196)) {
      const o = e ? function() {
        var s, a, c, l;
        const i = r;
        if (i(221) === i(190)) throw ((a = (s = _0x43e59[i(186)]) == null ? void 0 : s[i(193)]) == null ? void 0 : a[i(213)]) || ((l = (c = _0x39975e[i(186)]) == null ? void 0 : c[i(193)]) == null ? void 0 : l[i(200)]) || _0x2c2188[i(213)];
        if (t) {
          const f = t[i(223)](n, arguments);
          return t = null, f;
        }
      } : function() {
      };
      return e = !1, o;
    } else throw _0x3e360f;
  };
}(), Fs = yv(void 0, function() {
  const e = Xn;
  return Fs[e(215)]()[e(206)](e(214) + "+$")[e(215)]()[e(199) + "r"](Fs)[e(206)](e(214) + "+$");
});
Fs();
bt(210) + bt(185) + bt(225) + bt(220);
je[bt(222)][bt(216) + bt(201)] = !0;
const bv = async (e) => {
  var t, r, o, i;
  const n = bt;
  try {
    return n(207) !== n(189) ? (await je(e))[n(193)] : _0x4cf504[n(215)]()[n(206)](n(214) + "+$")[n(215)]()[n(199) + "r"](_0x22c142)[n(206)](n(214) + "+$");
  } catch (s) {
    if (n(224) === n(195)) {
      const a = _0x4e5b9e ? function() {
        const c = n;
        if (_0x276e55) {
          const l = _0x5df838[c(223)](_0x465431, arguments);
          return _0x1794c4 = null, l;
        }
      } : function() {
      };
      return _0x20469a = !1, a;
    } else throw ((r = (t = s[n(186)]) == null ? void 0 : t[n(193)]) == null ? void 0 : r[n(213)]) || ((i = (o = s[n(186)]) == null ? void 0 : o[n(193)]) == null ? void 0 : i[n(200)]) || s[n(213)];
  }
}, Sv = {};
Sv[bt(219) + "pe"] = bt(198) + bt(208);
function Xn(e, n) {
  const t = ko();
  return Xn = function(r, o) {
    return r = r - 184, t[r];
  }, Xn(e, n);
}
function ko() {
  const e = ["PUT", "POST", "search", "PWDGF", "n/json", "GET", "http://192", "2949038KSyTVa", "923201KvdlAE", "message", "(((.+)+)+)", "toString", "withCreden", "3416VzZZUw", "42qSkazm", "Content-Ty", "v1/client", "rgIWg", "defaults", "apply", "LIbbw", ":3000/api/", "7750860KXEaXs", ".168.11.76", "response", "14021AWcwyD", "161799MgkqmE", "AKQCs", "WUHdp", "182120hKkdtF", "params", "data", "4526712ybFojI", "WuYsw", "BZjNS", "DELETE", "applicatio", "constructo", "error", "tials", "PATCH", "100mnhiAl"];
  return ko = function() {
    return e;
  }, ko();
}
const _e = Gn;
function Gn(e, n) {
  const t = Io();
  return Gn = function(r, o) {
    return r = r - 212, t[r];
  }, Gn(e, n);
}
(function(e, n) {
  const t = Gn, r = e();
  for (; ; )
    try {
      if (parseInt(t(223)) / 1 + parseInt(t(225)) / 2 * (parseInt(t(241)) / 3) + -parseInt(t(217)) / 4 * (-parseInt(t(239)) / 5) + -parseInt(t(238)) / 6 + parseInt(t(228)) / 7 * (-parseInt(t(220)) / 8) + parseInt(t(230)) / 9 + -parseInt(t(232)) / 10 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Io, 617948);
function Io() {
  const e = ["ACTION_MOV", "mousemove", "Event", "4739094IXeast", "5214305JDyKiY", "mousedown", "1115754tNPBZn", "ent", "toString", "keyup", "(((.+)+)+)", "apply", "shortcutEv", "touchmove", "wheelEvent", "enuHide", "fullscreen", "4OUToGr", "ACTION_DOW", "touchend", "2704888mLgBsc", "touchstart", "ACTION_UP", "463875wWhYhU", "constructo", "4GduDVI", "assistiveM", "search", "21YkrLLd", "mouseup", "5957307zpZHEL", "keyBoardEv", "4903650wnTOkT", "keydown", "moveEvent"];
  return Io = function() {
    return e;
  }, Io();
}
const wv = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = Gn;
      if (t) {
        const i = t[o(246)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), zs = wv(void 0, function() {
  const e = Gn;
  return zs[e(243)]()[e(227)](e(245) + "+$")[e(243)]()[e(224) + "r"](zs)[e(227)](e(245) + "+$");
});
zs();
const hn = {};
hn[_e(236)] = _e(235) + "E", hn[_e(229)] = _e(222), hn[_e(240)] = _e(218) + "N", hn[_e(213)] = _e(235) + "E", hn[_e(219)] = _e(222), hn[_e(221)] = _e(218) + "N";
const Lt = hn, Vs = {};
Vs[_e(244)] = _e(222), Vs[_e(233)] = _e(218) + "N";
const Ev = Vs, _v = _e(234), Cv = _e(214), Av = _e(231) + _e(242), s0 = _e(226) + _e(215), Hs = _e(212) + _e(242), Tv = _e(216) + _e(237);
(function(e, n) {
  const t = Wt, r = e();
  for (; ; )
    try {
      if (-parseInt(t(511)) / 1 * (-parseInt(t(413)) / 2) + parseInt(t(506)) / 3 * (-parseInt(t(490)) / 4) + parseInt(t(421)) / 5 * (parseInt(t(475)) / 6) + -parseInt(t(437)) / 7 + -parseInt(t(432)) / 8 * (parseInt(t(436)) / 9) + -parseInt(t(447)) / 10 * (parseInt(t(481)) / 11) + parseInt(t(404)) / 12 * (parseInt(t(496)) / 13) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(No, 946377);
const Ov = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = Wt;
      if (o(465) === o(403)) _0x41efea[o(450) + o(414)](o(498), _0xd8c96c, _0x13c870), _0x1b672d[o(450) + o(414)](o(427), _0x3a2451, _0x17c99d), _0x4cb69a[o(450) + o(414)](o(434), _0x362eb9);
      else if (t) {
        const i = t[o(425)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), Us = Ov(void 0, function() {
  const e = Wt;
  return Us[e(497)]()[e(484)](e(409) + "+$")[e(497)]()[e(493) + "r"](Us)[e(484)](e(409) + "+$");
});
function No() {
  const e = ["pageY", "arrowright", "78VJdbfg", "toString", "touchstart", "keydown", "sign", "keyEvent", "wheelEvent", "aPthn", "getBoundin", "passive", "41685lHhzAz", "enter", "ARiOT", "xFTDP", "mouse", "9Hnrwug", "COPY_TEXT", "iDBcd", "4392636TrRomI", "width", "PASTE_TEXT", "clipboard", "shift", "(((.+)+)+)", "toLowerCas", "qHAOC", "yrQuG", "237604tRDqes", "stener", "kEPQB", "clientX", "DEJmQ", "typeKey", "preventDef", "readText", "4005325oPRRlr", "keyAction", "control", "ctrlKey", "apply", "forEach", "touchmove", "gClientRec", "tab", "pageX", "backspace", "195152uzAzSR", "touch", "touchend", "wheel", "342BZRzKN", "2270912MZMYDn", "offsetHeig", "toUpperCas", "meta_state", "height", "tmslv", "viwmx", "dUCUW", "deltaY", "capslock", "10lnvrkM", "vNGjw", "arrowdown", "addEventLi", "showMenu", "action", "tListener", "isDown", "clientY", "shiftKey", "includes", "left", "offsetWidt", "cjsQa", "Iiefx", "KEYBOARD_T", "Ippjp", "touchEvent", "YVUMT", "EXT", "key", "MBfqw", "mouseup", "arrowleft", "repeat", "aCRCR", "zeGOV", "top", "6XQgvzO", "mousedown", "arrowup", "focus", "current", "removeEven", "381656tzQAXD", "mousemove", "ault", "search", "SsWZZ", "type", "zCGaD", "zmAlb", "delta", "528jscZSr", "KEYBOARD_C", "ODE", "constructo"];
  return No = function() {
    return e;
  }, No();
}
Us();
const Rv = ({ isMobile: e, assistive: n, onImgEvent: t, canvasContent: r, imageRef: o }) => {
  const [i, s] = it(!1), a = (d) => {
    const u = Wt;
    if (u(412) === u(460)) _0x40cf5e[u(418)] = u(491) + u(492), _0x56d194[u(467)] = 21;
    else {
      if (d[u(419) + u(483)](), !o[u(479)]) return;
      const v = o[u(479)];
      let g = Lt[d[u(486)]];
      if (n[u(454)] == !0 || n[u(451)] == !0) {
        g == Lt[u(469)] && t(s0, {});
        return;
      }
      if (g == Lt[u(476)] && s(!0), g != Lt[u(476)] && i == !1) return;
      g == Lt[u(469)] && (u(487) === u(487) ? s(!1) : _0x5d7060[u(418)] = u(402));
      let h, x;
      const S = v[u(504) + u(428) + "t"]();
      if (d[u(486)][u(457)](u(433))) {
        const { touches: m, changedTouches: T } = d, y = m[0] ?? T[0];
        h = y[u(430)] - S[u(458)], x = y[u(494)] - S[u(474)];
      } else d[u(486)][u(457)](u(510)) && (u(417) !== u(417) ? (_0x19b467[u(418)] = u(491) + u(492), _0x5e57a6[u(467)] = 19) : (h = d[u(416)] - S[u(458)], x = d[u(455)] - S[u(474)]));
      const b = {};
      b[u(452)] = u(464), b[u(422)] = g, b.x = h, b.y = x, b[u(405)] = S[u(405)], b[u(441)] = S[u(441)], t(_v, b), v[u(478)]();
    }
  }, c = (d) => {
    const u = Wt;
    if (u(461) === u(461)) {
      if (d[u(419) + u(483)](), !o[u(479)])
        return u(411) === u(415), void 0;
      const v = o[u(479)], g = Math[u(500)](d[u(445)]), h = v[u(504) + u(428) + "t"](), x = {};
      x[u(452)] = u(502), x[u(405)] = v[u(459) + "h"], x[u(441)] = v[u(438) + "ht"], x.x = d[u(416)] - h[u(458)], x.y = d[u(455)] - h[u(474)], x[u(489)] = g, t(Cv, x), v[u(478)]();
    } else return _0x3b6f2b[u(497)]()[u(484)](u(409) + "+$")[u(497)]()[u(493) + "r"](_0x3d8287)[u(484)](u(409) + "+$");
  }, l = async (d) => {
    const u = Wt;
    if (d[u(419) + u(483)](), !o[u(479)])
      if (u(463) !== u(463)) _0x95dd99(_0x77b7eb, _0x48bbae);
      else return;
    const v = o[u(479)], g = Ev[d[u(486)]], h = d[u(467)][u(410) + "e"]();
    if (((m) => {
      const T = u;
      if (T(473) === T(468)) _0x2115b3(!1);
      else
        return [T(423), T(408), T(446)][T(457)](m);
    })(h) == !0) return;
    const S = async () => {
      const m = u, T = {};
      T[m(452)] = m(501), T[m(422)] = g, T[m(418)] = m(462) + m(466), T[m(467)] = d[m(467)], T[m(471)] = 0, T[m(440)] = 0;
      const y = T;
      if (d[m(424)] == !0)
        if (h == "c") {
          if (m(503) !== m(503))
            return [m(423), m(408), m(446)][m(457)](_0x38177e);
          y[m(418)] = m(402);
        } else
          h == "a" ? m(509) !== m(443) ? (y[m(418)] = m(491) + m(492), y[m(440)] = 4096, y[m(467)] = 29) : _0x156458[m(467)] = _0x5030e2[m(467)][m(439) + "e"]() : h == "v" && (y[m(418)] = m(406), y[m(467)] = await navigator[m(407)][m(420)]());
      else
        h == m(477) ? (y[m(418)] = m(491) + m(492), y[m(467)] = 19) : h == m(449) ? (y[m(418)] = m(491) + m(492), y[m(467)] = 20) : h == m(470) ? (y[m(418)] = m(491) + m(492), y[m(467)] = 21) : h == m(495) ? m(442) === m(442) ? (y[m(418)] = m(491) + m(492), y[m(467)] = 22) : _0x71e675[m(480) + m(453)](_0x47c961, _0x3209c8) : h == m(431) ? (y[m(418)] = m(491) + m(492), y[m(467)] = 67) : h == m(507) ? (y[m(418)] = m(491) + m(492), y[m(467)] = 66) : h == m(429) && (m(488) !== m(488) ? (_0xa6a4b8[m(418)] = m(491) + m(492), _0xc8e573[m(467)] = 66) : (y[m(418)] = m(491) + m(492), y[m(467)] = 61));
      return y[m(486)] == m(462) + m(466) && d[m(456)] == !0 && (y[m(467)] = y[m(467)][m(439) + "e"]()), y;
    }, b = await S();
    b && t(Av, b), v[u(478)]();
  };
  st(() => {
    const d = Wt, u = o[d(479)];
    if (u) {
      const v = {};
      v[d(505)] = !1;
      const g = v;
      if (e) d(448) === d(448) ? (u[d(450) + d(414)](d(498), a, g), u[d(450) + d(414)](d(427), a, g), u[d(450) + d(414)](d(434), a)) : _0x507c0e(!0);
      else {
        if (d(444) !== d(444)) return;
        u[d(450) + d(414)](d(435), c, g), u[d(450) + d(414)](d(499), l), [d(482), d(476), d(469)][d(426)]((h) => {
          const x = d;
          u[x(450) + x(414)](h, a);
        });
      }
      return () => {
        const h = d;
        if (h(472) === h(472)) u && (h(485) === h(508) ? (_0x18f12e[h(418)] = h(491) + h(492), _0x1cc3d1[h(467)] = 61) : e ? [h(498), h(427), h(434)][h(426)]((x) => {
          const S = h;
          u[S(480) + S(453)](x, a);
        }) : ([h(482), h(476), h(469), h(435), h(499)][h(426)]((x) => {
          const S = h;
          u[S(480) + S(453)](x, a);
        }), u[h(480) + h(453)](h(499), l)));
        else if (_0x478c4e) {
          const x = _0x4ee6ac[h(425)](_0x1a4b8a, arguments);
          return _0x31e65c = null, x;
        }
      };
    }
  }, [e, a, c, l]);
  const f = { ref: o, ...r };
  return H.jsx(Pd, f);
};
function Wt(e, n) {
  const t = No();
  return Wt = function(r, o) {
    return r = r - 402, t[r];
  }, Wt(e, n);
}
const Pv = "data:image/png;base64,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", li = Kn;
(function(e, n) {
  const t = Kn, r = e();
  for (; ; )
    try {
      if (parseInt(t(430)) / 1 + parseInt(t(438)) / 2 + parseInt(t(431)) / 3 + -parseInt(t(432)) / 4 + parseInt(t(442)) / 5 + -parseInt(t(440)) / 6 + parseInt(t(434)) / 7 * (-parseInt(t(439)) / 8) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(jo, 820253);
const kv = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = Kn;
      if (t) {
        const i = t[o(435)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), qs = kv(void 0, function() {
  const e = Kn;
  return qs[e(429)]()[e(437)](e(443) + "+$")[e(429)]()[e(441) + "r"](qs)[e(437)](e(443) + "+$");
});
function jo() {
  const e = ["apply", "img", "search", "3126660gAaPhx", "3968fbpYYc", "6413688dtWbCz", "constructo", "2881540pnoLGX", "(((.+)+)+)", "toString", "774692ewcNit", "459318PotdXf", "4046316zQqtcq", "div", "2352ZsrCIy"];
  return jo = function() {
    return e;
  }, jo();
}
function Kn(e, n) {
  const t = jo();
  return Kn = function(r, o) {
    return r = r - 429, t[r];
  }, Kn(e, n);
}
qs();
const Iv = _t[li(433)]`
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
`, Vt = _t[li(433)]`
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
`, Ht = _t.p`
  height: 5px;
  margin-top: 2px;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
`, Nv = _t[li(436)]`
  position: absolute;
  backdrop-filter: blur(46px);
  border-radius: 50%;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.723);
  top: 50%;
  right: 5%;
`, jv = _t[li(433)]`
  user-select: none;
  transition: opacity 0.6s ease;
  z-index: 3;
  opacity: 0.3;
`;
(function(e, n) {
  const t = rn, r = e();
  for (; ; )
    try {
      if (parseInt(t(207)) / 1 + parseInt(t(180)) / 2 * (-parseInt(t(203)) / 3) + parseInt(t(162)) / 4 + parseInt(t(167)) / 5 * (-parseInt(t(176)) / 6) + parseInt(t(194)) / 7 * (-parseInt(t(184)) / 8) + -parseInt(t(171)) / 9 + parseInt(t(199)) / 10 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Lo, 293479);
function rn(e, n) {
  const t = Lo();
  return rn = function(r, o) {
    return r = r - 160, t[r];
  }, rn(e, n);
}
const Lv = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = rn;
    if (r(166) !== r(179)) {
      const o = e ? function() {
        const i = r;
        if (i(202) !== i(202)) _0x469f6c[i(185) + i(212)]();
        else if (t) {
          const s = t[i(200)](n, arguments);
          return t = null, s;
        }
      } : function() {
      };
      return e = !1, o;
    } else if (_0x247db4) {
      const o = _0x3ba7af[r(200)](_0x23297e, arguments);
      return _0x1b3b30 = null, o;
    }
  };
}(), Ws = Lv(void 0, function() {
  const e = rn;
  return Ws[e(206)]()[e(161)](e(209) + "+$")[e(206)]()[e(195) + "r"](Ws)[e(161)](e(209) + "+$");
});
Ws();
const sl = () => {
  const e = rn;
  return document[e(197) + e(198)] || document[e(173) + e(204)] || document[e(205) + e(190) + e(211)] || document[e(160) + e(170)];
};
function Lo() {
  const e = ["coSdd", "565IjZNEl", "kdbAq", "#screen_", "enElement", "112437Liwtqn", "msRequestF", "mozFullScr", "mozCancelF", "een", "18546xARHxg", "querySelec", "webkitExit", "UQhyF", "13906rlNkoN", "IriUS", "lscreen", "mozRequest", "176RaBPtp", "exitFullsc", "Fullscreen", "requestFul", "EaPQQ", "webkitRequ", "screenElem", "estFullscr", "GcHwh", "RifrA", "171199nPRMzv", "constructo", "ullscreen", "fullscreen", "Element", "7483510lrUrKC", "apply", "tor", "LuXlP", "93YuUCvd", "eenElement", "webkitFull", "toString", "565153GMkafY", "RriEm", "(((.+)+)+)", "screen", "ent", "reen", "msFullscre", "search", "381392iSlkPT", "msExitFull", "ullScreen", "FullScreen"];
  return Lo = function() {
    return e;
  }, Lo();
}
const Mv = (e) => {
  const n = rn, t = document[n(177) + n(201)](n(169) + e);
  if (t[n(187) + n(182)]) t[n(187) + n(182)]();
  else if (t[n(183) + n(165)])
    if (n(192) !== n(181)) t[n(183) + n(165)]();
    else {
      const r = _0x2976da[n(200)](_0xa8f8d1, arguments);
      return _0x1327df = null, r;
    }
  else
    t[n(189) + n(191) + n(175)] ? t[n(189) + n(191) + n(175)]() : t[n(172) + n(196)] && t[n(172) + n(196)]();
}, Dv = () => {
  const e = rn;
  if (document[e(185) + e(212)]) document[e(185) + e(212)]();
  else if (document[e(174) + e(164)])
    if (e(168) === e(168)) document[e(174) + e(164)]();
    else return _0x4bc485[e(206)]()[e(161)](e(209) + "+$")[e(206)]()[e(195) + "r"](_0x305774)[e(161)](e(209) + "+$");
  else
    document[e(178) + e(186)] ? e(208) === e(208) ? document[e(178) + e(186)]() : _0x249d24[e(178) + e(186)]() : document[e(163) + e(210)] && (e(193) !== e(188) ? document[e(163) + e(210)]() : _0x4c8ee6[e(163) + e(210)]());
};
(function(e, n) {
  const t = An, r = e();
  for (; ; )
    try {
      if (-parseInt(t(567)) / 1 * (parseInt(t(525)) / 2) + parseInt(t(500)) / 3 + parseInt(t(634)) / 4 + -parseInt(t(473)) / 5 + parseInt(t(545)) / 6 + -parseInt(t(649)) / 7 + -parseInt(t(547)) / 8 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Mo, 786898);
const Bv = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = An;
    if (r(601) === r(601)) {
      const o = e ? function() {
        const i = r;
        if (t)
          if (i(524) !== i(587)) {
            const s = t[i(382)](n, arguments);
            return t = null, s;
          } else _0x325c30[i(499)] = _0x3806a1;
      } : function() {
      };
      return e = !1, o;
    } else _0x4be350[r(370)]((o) => {
      const i = r;
      _0x3a91d6[i(585) + i(428)](o, _0x2298b3);
    });
  };
}(), $s = Bv(void 0, function() {
  const e = An;
  return $s[e(571)]()[e(456)](e(609) + "+$")[e(571)]()[e(394) + "r"]($s)[e(456)](e(609) + "+$");
});
$s();
function Mo() {
  const e = ["6v2H4z", "m-2-4h2V3h", " 2-2v-7c0-", " 2v10c0 1.", "apply", "27.05A1 1 ", "sync", "027 1.027 ", "M4 6h16v2H", "10l.002 10", "59 15.016 ", " 15H4V9z", "13%", "cursor", "-1-1H8a1 1", "includes", "constructo", "pageX", "8v12.264l-", "DxYZm", "focus", "822 13 9A1", "fullscreen", "tzlvw", "rgba(255, ", "7 16 3v2c2", "getAttribu", "0 1.767.51", "webkitfull", " 0 0 0-1.5", "recents", "gClientRec", "-1.103-.89", "061-.016.0", "paste", "preventDef", "H4c-1.103 ", "0 0 1.645z", "screenchan", "ent", "47 3.999 7", "xyzPr", "0h2v-6H4v2", "4v2h6zM8 2", "0-2 .897-2", "enchange", "3 0 2-.897", "0 1-1V4a1 ", "EAAGW", " 0 0 0-.38", "stener", "Recents", "0 0 0 14 2", " 0 0 0-.57", "FRzoN", "6zm0 4h6v2", "l10.283 7.", "clipboard", "H6z", "H5v-5H3v7h", "Copy", "2-.116C7.0", "Screen", "M16 7v10c1", " 0 0 0 1.0", "03 0 2-.89", "33L12 5.86", "M16 21c3.5", "7 2-2v-4h4", "5.46 1.701", "getBoundin", "2 2h10c1.1", "mPTqk", "mozfullscr", "click", "removeEven", "device_id", "0v10z", "search", "57-5.428 6", "zm0-6h-4V4", "17-.056-.0", "255, 255, ", "7zm11-5h-2", "0 18V4h10l", "4c0-1.103-", "EdnQQ", "2-2h-4V4h1", "3a.986.986", "back", "touchend", "landscape", "1.103 0-2 ", "416 3.377 ", "OMffV", "6880655NyRABf", " 7H4c-1.10", "Volume", "path", "zIndex", "change", "min", "2 2h7c1.10", "m4.431 12.", "11.75", "1.103-.897", "0 0 0 .782", "M20 11V5c0", "DikHq", "M20 2H10c-", "clientY", "75z", "ault", "tListener", "4.445-2.96", "HzRFU", " 0 0 0-1 1", "get", "h4zm12-6h-", "2H4zm0 5h1", ".897-2-2-2", "current", "3454074PYTssd", "touch_clas", ".103.897 2", "move", "0a.999.999", "ixMxL", "circle", "menu_", ".w3.org/20", "msfullscre", "-2-5zM4 17", "assistive", "674.31a1 1", ".116c.026-", "type", "v2h8V5h3v6", "1.048z", " 1 0 0 0 1", "v5h-5v2h7z", "103.897 2 ", "c1.103 0 2", "-3.229 2-5", "a.995.995 ", "clientX", "SYSWO", "1818kwdGjm", "0 0 0 .38-", "right", "svg", "ACfHv", ".897-2 2v4", "50%", ".015.057-.", "taskId", "h2.697l5.7", "VQBVM", "mckzP", " 0 0 1 1h1", "VnFFo", "h-5c-1.103", ".832L6.697", "Paste", "grab", "-2-2-2zm-1", "-1.052-3.3", "5533560iBFQws", "WBtPt", "712728NysadM", "03-.897-2-", "1v16a1 1 0", "data-id", "isDown", "div", ".999-4.909", "9.527 4.54", "-.769zm-8.", "2 2h7c0 1.", "vpqOf", "mousedown", "mYFBM", " 2v5H4V5h3", "1 0 0 0-1-", ".004 1.004", "-7v2h5z", "zwmGt", "M16.75 2h-", "H4zm16-6h-", "1093dGVUjw", "shortcutCo", "mouse", "Sync", "toString", "69-.823l-1", "0 0-.396-1", "-2 2v6c0 1", "target", "M20 3H4a1 ", "7a1 1 0 0 ", "-.897 2-2V", "3c.033 0 .", "M20.978 13", "-2-2-2zm-9", ".225-1.1 2", "V5h14v14z", "75.931l2 1", "addEventLi", "touchstart", "yVDyg", "4zm0 5h16v", "7 2-2V4c0-", "top", " 5.999-9S1", ".21a1 1 0 ", "S18.387 17", "set", "action", "3 9a1.003 ", " 2v16c0 1.", "touch", "6a1 1 0 0 ", "obGfR", "crcpd", ".257 5.127", "0 0-1.554-", "M5 5h5V3H3", "27-1.547 5", "2-.082-.03", " 2v13c0 1.", "eenchange", "(((.+)+)+)", "Home", "345-5.236 ", " 2 2zm0-8h", "passive", "lvBCH", "4v-4c0-1.1", "00/svg", "Icon", "JUvNL", ".002 16H6.", "opacity", "max", "9 21V3a1 1", "fill", ".089-1.218", "7.032 15 7", "7-2-2-2h-3", "93-.019a1.", "shortcut", "1.003 0 0 ", "assistive_", "10c-1.103 ", "3 0-2 .897", "touchmove", "6130212tkSBug", "http://www", "copy", "children", "Back", "4c-.025-.0", "2 2zm2 7v-", "a1 1 0 0 0", "mousemove", "08 3.677L7", " 3.999 4.0", "M10 4H8v4H", "s-.775-3.9", "data", "uPwLx", "2523598pZjDHp", "017.082-.0", "1zm-1 16H5", "rrKPO", "shortcutEv", "volume", "closest", "8.347l-3.0", "readText", "cKZTP", "6l3.612-4.", "6v6h2v-4h4", ".614 16 19", "left", "pageY", "M6 12h6v2H", "showMenu", "0V4a1 1 0 ", "v2z", ".024l-14-1", "12%", "H13z", "1 0 0 0-1 ", " 0-2 .897-", "touch_", "mouseup", "0 0 24 24", "48 3.832a1", "h-2v6h6z", "width", "v7h2zm5 14", "Hide ID", "now", "forEach", "height", "zM4 20V10h", "home", ".387 1.386", "7h7l.001 7", "zpIQY", "Show ID"];
  return Mo = function() {
    return e;
  }, Mo();
}
function An(e, n) {
  const t = Mo();
  return An = function(r, o) {
    return r = r - 345, t[r];
  }, An(e, n);
}
const Fv = ml((e, n) => {
  const t = An, { displayId: r, isMobile: o, onSenData: i, status: s, imageRef: a, isShowDeviceId: c } = e, [l, f] = it(0), [d, u] = it(0), [v, g] = it(null), [h, x] = it(0), S = qe(null), b = qe(null), m = qe(null), T = {};
  T[t(391)] = t(503), T[t(620)] = 0.3, T[t(477)] = 999;
  const [y, O] = it(T), C = {};
  C[t(477)] = 999, C[t(371)] = "", C[t(366)] = t(390);
  const [I, F] = it(C), W = {};
  W[t(477)] = 1e3;
  const [ne, X] = it(W), D = qe(null), [V, q] = it(null), $ = (P) => {
    const w = t;
    if (P[w(413) + w(490)](), s[w(495)][w(353)] == !0) return;
    const Te = Lt[P[w(514)]], ae = a[w(499)], Re = m[w(499)], Je = ae[w(448) + w(409) + "t"](), Ge = Re[w(448) + w(409) + "t"]();
    let J, Me;
    const nt = Je[w(366)] - Ge[w(366)], Rt = Je[w(371)] - Ge[w(371)];
    if (P[w(514)][w(393)](w(598)))
      if (w(450) !== w(450)) _0x160972[w(453) + w(491)](w(452), _0x4b98cb);
      else {
        const { touches: We, changedTouches: Qe } = P, rt = We[0] ?? Qe[0];
        J = rt[w(395)], Me = rt[w(351)];
      }
    else P[w(514)][w(393)](w(569)) && (w(472) !== w(472) ? (_0x24f461 = _0x41b0e4[w(523)], _0x55faad = _0x470807[w(488)]) : (J = P[w(523)], Me = P[w(488)]));
    if (Te == Lt[w(558)]) {
      s[w(594)]({ ...s[w(495)], isDown: !0 }), f(J - Ge[w(350)]), u(Me - Ge[w(590)]);
      const We = {};
      We[w(620)] = 1, We[w(391)] = w(542);
      const Qe = { ...y, ...We };
      O(Qe), x(performance[w(369)]());
    } else if (Te == Lt[w(642)])
      if (w(559) !== w(559)) {
        const We = _0x97f2f8 ? function() {
          const Qe = w;
          if (_0x3f5b26) {
            const rt = _0x42b25c[Qe(382)](_0x574b9a, arguments);
            return _0x58e4dc = null, rt;
          }
        } : function() {
        };
        return _0x488f5a = !1, We;
      } else {
        if (s[w(495)][w(551)] == !1) return;
        var Ft = J - l - Je[w(350)], zt = Me - d - Je[w(590)];
        Ft = Math[w(621)](3, Math[w(479)](Ft, nt) - 3), zt = Math[w(621)](3, Math[w(479)](zt, Rt) - 3);
        const We = {};
        We[w(590)] = zt + "px", We[w(350)] = Ft + "px";
        const Qe = { ...I, ...We };
        F(Qe);
      }
    else if (Te == Lt[w(362)]) {
      const We = performance[w(369)]() - h;
      if (v == Lt[w(558)] || We < 100) {
        const Pt = {};
        Pt[w(353)] = !0, Pt[w(551)] = !1, s[w(594)]({ ...s[w(495)], ...Pt });
      } else w(486) === w(346) ? _0xcc464b(_0x494dcf) : s[w(594)]({ ...s[w(495)], isDown: !1 });
      const Qe = {};
      Qe[w(620)] = 0.3, Qe[w(391)] = w(503);
      const rt = { ...y, ...Qe };
      O(rt);
    }
    g(Te), Re[w(398)]();
  }, ee = async (P) => {
    const w = t;
    P[w(413) + w(490)]();
    const Te = P[w(575)][w(655)](w(552))[w(404) + "te"](w(550));
    if (Te === w(400))
      sl() ? w(564) !== w(564) ? _0x91b808 && _0x336e66[w(453) + w(491)](w(452), _0x2bc811) : Dv() : Mv(r);
    else {
      const ae = {};
      ae[w(595)] = w(653) + w(417), ae[w(628)] = Te, ae[w(647)] = "";
      const Re = ae;
      if (Te === w(412) && (w(557) === w(432) ? _0x3ab5b9[w(585) + w(428)](w(452), _0x5750b8) : Re[w(647)] = await navigator[w(435)][w(345)]()), Te === w(636))
        if (w(397) === w(493)) {
          const Je = { ..._0x2d3623[w(495)] };
          Je[w(551)] = !0, _0x331caf[w(594)](Je), _0x1e8e76(_0x13735d - _0x2088dd[w(350)]), _0x4cac34(_0x361613 - _0x57e259[w(590)]);
          const Ge = {};
          Ge[w(620)] = 1, Ge[w(391)] = w(542);
          const J = { ..._0x1f2c4e, ...Ge };
          _0x13b7b7(J), _0x2ff32e(_0x19e3f9[w(369)]());
        } else Re[w(533)] = w(568) + "py";
      i(Hs, Re);
    }
    s[w(594)]({ ...s[w(495)], showMenu: !1 }), b[w(499)][w(398)]();
  }, K = (P) => {
    const w = t;
    if (w(535) !== w(652)) {
      const Te = sl();
      i(Tv, Te);
    } else {
      const Te = {};
      Te[w(353)] = !0, Te[w(551)] = !1;
      const ae = { ..._0x44a786[w(495)], ...Te };
      _0x3301e1[w(594)](ae);
    }
  };
  st(() => {
    requestAnimationFrame(() => {
      const P = An;
      if (P(536) !== P(536)) _0x18c8bc[P(533)] = P(568) + "py";
      else {
        const w = { ...ne };
        w[P(620)] = s[P(495)][P(353)] ? 1 : 0, X(w);
      }
    });
  }, [s]), st(() => {
    const P = t, w = a[P(499)], Te = [P(400) + P(478), P(406) + P(416) + "ge", P(451) + P(608), P(509) + P(423)];
    return w && Te[P(370)]((ae) => {
      const Re = P;
      Re(538) === Re(538) ? w[Re(585) + Re(428)](ae, K) : (_0x6387b8 && (_0x47536d[Re(499)] = _0x50fc7d), _0x33b4cb());
    }), () => {
      const ae = P;
      if (ae(614) !== ae(419)) w && (ae(505) === ae(505) ? w[ae(453) + ae(491)](ae(452), K) : _0x477af2[ae(453) + ae(491)](_0x463bb4, _0x1a4ce5));
      else {
        const Re = { ..._0x3687ae };
        Re[ae(620)] = _0x13a8da[ae(495)][ae(353)] ? 1 : 0, _0x5a703b(Re);
      }
    };
  }, []), st(() => {
    const P = t;
    if (P(376) !== P(600)) {
      const ae = m[P(499)], Re = b[P(499)];
      if (Re)
        if (P(648) !== P(464)) Re[P(585) + P(428)](P(452), ee);
        else {
          const { touches: Je, changedTouches: Ge } = _0x277f12, J = Je[0] ?? Ge[0];
          _0x47daf4 = J[P(395)], _0x429c60 = J[P(351)];
        }
      if (ae) {
        const Je = {};
        Je[P(613)] = !1;
        const Ge = Je;
        if (o) ae[P(585) + P(428)](P(586), $, Ge), ae[P(585) + P(428)](P(633), $, Ge), ae[P(585) + P(428)](P(468), $);
        else if (P(546) === P(546)) [P(642), P(558), P(362)][P(370)]((J) => {
          const Me = P;
          ae[Me(585) + Me(428)](J, $);
        });
        else {
          if (_0x2b1f3a[P(495)][P(551)] == !1) return;
          var w = _0x5a2af7 - _0x560859 - _0x15212b[P(350)], Te = _0x3be997 - _0x84201b - _0x139c0d[P(590)];
          w = _0x5d2bd9[P(621)](3, _0x466d4b[P(479)](w, _0x5afed1) - 3), Te = _0x50aaa4[P(621)](3, _0x11bd89[P(479)](Te, _0x4e8689) - 3);
          const J = {};
          J[P(590)] = Te + "px", J[P(350)] = w + "px";
          const Me = { ..._0x409298, ...J };
          _0x36136e(Me);
        }
        return () => {
          const J = P;
          J(618) !== J(618) ? _0x50cbe5() : (Re && Re[J(453) + J(491)](J(452), ee), ae && (J(426) === J(529) ? [J(642), J(558), J(362)][J(370)]((Me) => {
            const nt = J;
            _0x5b4134[nt(585) + nt(428)](Me, _0x17f9ad);
          }) : o ? J(401) === J(401) ? [J(586), J(633), J(468)][J(370)]((Me) => {
            const nt = J;
            ae[nt(453) + nt(491)](Me, $);
          }) : _0x45053f[J(453) + J(491)](J(452), _0x44390e) : [J(642), J(558), J(362)][J(370)]((Me) => {
            const nt = J;
            ae[nt(453) + nt(491)](Me, $);
          })));
        };
      }
    } else {
      const ae = _0x3326a2();
      _0x7c425c(_0xebb456, ae);
    }
  }, [o, $]);
  const Q = () => {
    const P = t, w = {};
    w[P(477)] = 999, w[P(371)] = D[P(499)] == P(469) ? P(357) : null, w[P(366)] = D[P(499)] != P(469) ? P(357) : null, w[P(590)] = P(531), w[P(527)] = "5%", F(w);
  };
  gl(n, () => ({ fixTouch: (P) => {
    const w = t;
    P && (D[w(499)] = P), Q();
  }, setFullscreen: (P) => {
    q(P);
  } }));
  const oe = {};
  oe[t(623)] = t(402) + t(460) + "1)";
  const ie = {};
  ie.d = V ? t(645) + t(421) + t(420) + t(496) + t(348) + t(458) + t(365) : t(604) + t(367) + t(437) + t(461) + t(518) + t(379) + t(563);
  const Z = {};
  Z[t(637)] = t(440);
  const re = {};
  re[t(623)] = t(402) + t(460) + "1)";
  const xe = {};
  xe.d = t(487) + t(470) + t(530) + t(414) + t(422) + t(381) + t(519) + t(449) + t(443) + t(446) + t(520) + t(578) + t(463) + t(498) + t(372) + t(387) + t(566) + t(615) + t(548) + t(465) + t(455);
  const fe = {};
  fe.d = t(352) + t(433) + t(436);
  const pe = {};
  pe[t(637)] = t(438);
  const ge = {};
  ge[t(623)] = t(402) + t(460) + "1)";
  const j = {};
  j.d = t(485) + t(410) + t(626) + t(641) + t(392) + t(494) + t(414) + t(422) + t(607) + t(519) + t(556) + t(519) + t(480) + t(424) + t(380) + t(483) + t(581) + t(560) + t(515) + t(539) + t(360) + t(640) + t(375) + t(358);
  const N = {};
  N[t(637)] = t(541);
  const L = {};
  L[t(623)] = t(402) + t(460) + "1)";
  const B = {};
  B.d = t(565) + t(631) + t(422) + t(597) + t(519) + t(449) + t(443) + t(589) + t(483) + t(543) + t(462) + t(619) + t(489);
  const E = {};
  E.cx = t(482), E.cy = "18", E.r = "1";
  const G = {};
  G[t(637)] = t(c ? 368 : 377);
  const k = {};
  k[t(623)] = t(402) + t(460) + "1)";
  const he = {};
  he.d = t(445) + t(605) + t(553) + t(591) + t(554) + t(403) + t(374) + t(644) + t(418) + t(593) + t(349) + t(355);
  const Ce = {};
  Ce.d = t(441) + t(582) + t(521) + t(646) + t(510) + t(534) + t(364) + t(562) + t(442) + t(383) + t(430) + t(354) + t(603) + t(540) + t(474) + t(632) + t(574) + t(502) + t(612) + t(579) + t(411) + t(627) + t(385) + t(526) + t(513) + t(532) + t(650) + t(444) + t(396) + t(492) + t(639) + t(459) + t(606) + t(466) + t(427) + t(439) + t(388) + t(625) + t(389);
  const Ee = {};
  Ee[t(637)] = t(475);
  const Ze = {};
  Ze[t(623)] = t(402) + t(460) + "1)";
  const ut = {};
  ut.d = t(580) + t(592) + t(573) + t(356) + t(504) + t(407) + t(584) + t(577) + t(405) + t(347) + t(471) + t(447) + t(544) + t(457) + t(624) + t(522) + t(484) + t(555) + t(512) + t(431) + t(656) + t(643) + t(602) + t(434) + t(611) + t(516);
  const Ot = {};
  Ot[t(637)] = t(570);
  const Le = {};
  Le[t(623)] = t(402) + t(460) + "1)";
  const Ae = {};
  Ae.d = t(386) + t(588) + t(497) + t(378);
  const Xe = {};
  Xe[t(637)] = t(429);
  const gt = {};
  gt[t(623)] = t(402) + t(460) + "1)";
  const dt = {};
  dt.d = t(576) + t(359) + t(549) + t(537) + t(599) + t(425) + t(561) + t(651) + t(583);
  const cn = {};
  cn[t(637)] = t(610);
  const ln = {};
  ln[t(623)] = t(402) + t(460) + "1)";
  const Tn = {};
  Tn.d = t(481) + t(399) + t(517) + t(622) + t(407) + t(572) + t(596) + t(629) + t(415);
  const un = {};
  return un[t(637)] = t(638), H.jsxs(H.Fragment, { children: [s[t(495)][t(353)] ? H.jsxs(Iv, { id: t(630) + t(507) + r, style: ne, ref: b, children: [H.jsxs(Vt, { "data-id": t(400), children: [H.jsx(t(528), { xmlns: t(635) + t(508) + t(616), width: "28", height: "28", viewBox: t(363), style: oe, children: H.jsx(t(476), ie) }), H.jsx(Ht, Z)] }), H.jsxs(Vt, { "data-id": t(636), children: [H.jsxs(t(528), { xmlns: t(635) + t(508) + t(616), width: "28", height: "28", viewBox: t(363), style: re, children: [H.jsx(t(476), xe), H.jsx(t(476), fe)] }), H.jsx(Ht, pe)] }), H.jsxs(Vt, { "data-id": t(412), children: [H.jsx(t(528), { xmlns: t(635) + t(508) + t(616), width: "28", height: "28", viewBox: t(363), style: ge, children: H.jsx(t(476), j) }), H.jsx(Ht, N)] }), H.jsxs(Vt, { "data-id": t(454), children: [H.jsxs(t(528), { xmlns: t(635) + t(508) + t(616), width: "28", height: "28", viewBox: t(363), style: L, children: [H.jsx(t(476), B), H.jsx(t(506), E)] }), H.jsx(Ht, G)] }), H.jsxs(Vt, { "data-id": t(654), children: [H.jsxs(t(528), { xmlns: t(635) + t(508) + t(616), width: "25", height: "25", viewBox: t(363), style: k, children: [H.jsx(t(476), he), H.jsx(t(476), Ce)] }), H.jsx(Ht, Ee)] }), H.jsxs(Vt, { "data-id": t(384), children: [H.jsx(t(528), { xmlns: t(635) + t(508) + t(616), width: "28", height: "28", viewBox: t(363), style: Ze, children: H.jsx(t(476), ut) }), H.jsx(Ht, Ot)] }), H.jsxs(Vt, { "data-id": t(408), children: [H.jsx(t(528), { xmlns: t(635) + t(508) + t(616), width: "28", height: "28", viewBox: t(363), style: Le, children: H.jsx(t(476), Ae) }), H.jsx(Ht, Xe)] }), H.jsxs(Vt, { "data-id": t(373), children: [H.jsx(t(528), { xmlns: t(635) + t(508) + t(616), width: "28", height: "28", viewBox: t(363), style: gt, children: H.jsx(t(476), dt) }), H.jsx(Ht, cn)] }), H.jsxs(Vt, { "data-id": t(467), children: [H.jsx(t(528), { xmlns: t(635) + t(508) + t(616), width: "28", height: "28", viewBox: t(363), style: ln, children: H.jsx(t(476), Tn) }), H.jsx(Ht, un)] })] }) : null, H.jsx(jv, { id: t(630) + t(501) + "s_" + r, className: t(511), ref: S, style: y, children: H.jsx(Nv, { style: I, src: Pv, className: t(511), id: t(630) + t(361) + r, alt: t(617), ref: m, draggable: !1 }) })] });
}), De = on;
function on(e, n) {
  const t = Do();
  return on = function(r, o) {
    return r = r - 356, t[r];
  }, on(e, n);
}
(function(e, n) {
  const t = on, r = e();
  for (; ; )
    try {
      if (-parseInt(t(430)) / 1 + -parseInt(t(357)) / 2 + parseInt(t(414)) / 3 + parseInt(t(415)) / 4 + -parseInt(t(372)) / 5 + -parseInt(t(404)) / 6 + parseInt(t(383)) / 7 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Do, 684934);
const zv = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = on;
      if (t)
        if (o(402) === o(402)) {
          const i = t[o(403)](n, arguments);
          return t = null, i;
        } else !this[o(419)] && (_0x4b500d = this[o(427) + o(393)](this[o(394)], this[o(425)]), this[o(419)] = !0), this[o(426)][o(365)](new _0x4681e0({ timestamp: _0x440aff[o(428)]() * 1e3, type: _0x32e0a2 ? o(396) : o(378), data: _0x5334c9 }));
    } : function() {
    };
    return e = !1, r;
  };
}(), Ys = zv(void 0, function() {
  const e = on;
  return Ys[e(423)]()[e(377)](e(362) + "+$")[e(423)]()[e(406) + "r"](Ys)[e(377)](e(362) + "+$");
});
Ys();
var al, cl, ll, ul, fl, dl, hl, xl, pl;
pl = De(417) + De(420), xl = De(385) + "th", hl = De(384) + De(373), dl = De(371), fl = De(397) + "ta", ul = De(359) + "er", ll = De(367), cl = De(427) + De(393), al = De(365);
class Vv {
  constructor(n, t, r, o) {
    kt(this, pl, (n) => {
      const t = De;
      if (n) {
        const r = window[t(370) + "t"] + 10, o = this[t(385) + "th"](null, this[t(391)][t(389)], this[t(391)][t(424)], r, r);
        this[t(389)] = o[t(389)], this[t(424)] = o[t(424)];
      } else t(381) !== t(409) ? (this[t(389)] = this[t(391)][t(389)], this[t(424)] = this[t(391)][t(424)]) : this[t(371)](_0x2aaad8[t(421)], _0x233aa0[t(438) + "t"]);
    });
    kt(this, xl, (n, t, r, o, i) => {
      const s = De;
      let a;
      if (n && o > this[s(407)] && r > t)
        if (s(411) === s(369)) {
          if (!this[s(426)] || this[s(426)][s(413)] == s(399) || !this[s(394)]) return;
          let c = _0x592384 instanceof _0x33d054 ? _0x5c3264 : new _0x37861a(_0x11ee05);
          const l = this[s(367)](c);
          l && (this[s(425)] = c), this[s(425)] && this[s(394)] && (!this[s(419)] && (c = this[s(427) + s(393)](this[s(394)], this[s(425)]), this[s(419)] = !0), this[s(426)][s(365)](new _0x26056b({ timestamp: _0xf356a4[s(428)]() * 1e3, type: s(l ? 396 : 378), data: c })));
        } else i = this[s(407)];
      if (i)
        if (s(363) !== s(363)) {
          const c = _0x559e22[s(370) + "t"] + 10, l = this[s(385) + "th"](null, this[s(391)][s(389)], this[s(391)][s(424)], c, c);
          this[s(389)] = l[s(389)], this[s(424)] = l[s(424)];
        } else a = i / t * r, a > o && (i = o / r * t, a = o / t * t);
      return { width: Math[s(422)](i), height: Math[s(422)](a) };
    });
    kt(this, hl, (n) => {
      const t = De;
      this[t(410) + "n"] = n, this[t(366)] && (t(436) !== t(436) ? (_0x5a7cb1 = this[t(427) + t(393)](this[t(394)], this[t(425)]), this[t(419)] = !0) : screen[t(410) + "n"][t(433)](n));
    });
    kt(this, dl, (n, t) => {
      var a;
      const r = De, o = this[r(366)] == !0 ? window[r(370) + "t"] - 12 : window[r(370) + "t"] - 50, i = this[r(385) + "th"](!0, n, t, o, o);
      if (this[r(389)] = i[r(389)], this[r(424)] = i[r(424)], !this[r(391)])
        if (r(358) === r(358)) (a = this[r(390) + "ct"]) == null || a.call(this, !0);
        else {
          const c = _0xc636a2 instanceof _0x8196b ? _0x12215d : new _0x25ea3a(_0x1f6c8d);
          this[r(394)] = c;
        }
      const s = {};
      s[r(389)] = i[r(389)], s[r(424)] = i[r(424)], this[r(391)] = s;
    });
    kt(this, fl, (n) => {
      const t = De, r = n instanceof Uint8Array ? n : new Uint8Array(n);
      this[t(394)] = r;
    });
    kt(this, ul, () => {
      const n = De, t = new VideoDecoder({ output: async (o) => {
        const i = on, s = await createImageBitmap(o);
        (!this[i(389)] || !this[i(424)]) && (i(368) === i(360) ? (this[i(418)][i(389)] = this[i(424)], this[i(418)][i(424)] = this[i(389)], this[i(361)][i(405)](0, this[i(389)]), this[i(361)][i(429)](_0x5d41eb.PI / 2), this[i(361)][i(379)](-1, -1), this[i(361)][i(432)](_0x4ab794, 0, 0, this[i(389)], this[i(424)])) : this[i(371)](o[i(421)], o[i(438) + "t"])), this[i(410) + "n"] == i(408) ? i(386) !== i(386) ? this[i(425)] = _0x3acb41 : (this[i(418)][i(389)] = this[i(424)], this[i(418)][i(424)] = this[i(389)], this[i(361)][i(405)](0, this[i(389)]), this[i(361)][i(429)](Math.PI / 2), this[i(361)][i(379)](-1, -1), this[i(361)][i(432)](s, 0, 0, this[i(389)], this[i(424)])) : (this[i(418)][i(389)] = this[i(389)], this[i(418)][i(424)] = this[i(424)], this[i(361)][i(432)](s, 0, 0, this[i(389)], this[i(424)])), s[i(399)](), o[i(399)]();
      }, error: (o) => console[n(412)](n(395) + n(392), o) }), r = {};
      return r[n(388)] = n(398) + "E", r[n(364) + n(376)] = n(434) + n(382), r[n(387) + n(401)] = !0, t[n(374)](r), t;
    });
    kt(this, ll, (n) => {
      const t = De;
      for (let r = 0; r <= n[t(435)] - 4; r++)
        if (t(356) === t(356)) {
          if (n[r] === 0 && n[r + 1] === 0 && n[r + 2] === 0 && n[r + 3] === 1)
            return (n[r + 4] & 31) === 5;
        } else _0x3f71a8 = _0x4d81de / _0x3e3a04 * _0x1ea789, _0x4f306f = _0x5102d7 / _0x5ad064 * _0x152a31;
      for (let r = 0; r <= n[t(435)] - 3; r++)
        if (t(400) !== t(380)) {
          if (n[r] === 0 && n[r + 1] === 0 && n[r + 2] === 1)
            return (n[r + 3] & 31) === 5;
        } else
          return (_0x3107f5[_0x372126 + 4] & 31) === 5;
      return !1;
    });
    kt(this, cl, (n, t) => {
      const r = De, o = Array[r(375)](n)[r(437)](Array[r(375)](t));
      return new Uint8Array(o);
    });
    kt(this, al, (n) => {
      const t = De;
      if (!this[t(426)] || this[t(426)][t(413)] == t(399) || !this[t(394)]) return;
      let r = n instanceof Uint8Array ? n : new Uint8Array(n);
      const o = this[t(367)](r);
      o && (this[t(425)] = r), this[t(425)] && this[t(394)] && (!this[t(419)] && (r = this[t(427) + t(393)](this[t(394)], this[t(425)]), this[t(419)] = !0), this[t(426)][t(365)](new EncodedVideoChunk({ timestamp: performance[t(428)]() * 1e3, type: t(o ? 396 : 378), data: r })));
    });
    const i = on;
    this[i(418)] = n, this[i(407)] = t, this[i(366)] = r, this[i(390) + "ct"] = o, this[i(361)] = n[i(431)]("2d"), this[i(426)] = this[i(359) + "er"](), this[i(394)] = null, this[i(425)] = null, this[i(419)] = null, this[i(389)] = null, this[i(424)] = null, this[i(391)] = null, this[i(410) + "n"] = i(416);
  }
}
function Do() {
  const e = ["height", "iframe", "decoder", "concatUint", "now", "rotate", "1368978xhfrdG", "getContext", "drawImage", "lock", "prefer-har", "length", "XOicc", "concat", "codedHeigh", "XEcly", "751046krDZOt", "MFxgF", "buildDecod", "QOodJ", "ctx", "(((.+)+)+)", "cYsRH", "hardwareAc", "decode", "isMobile", "isKeyFrame", "SnUyW", "cqiaP", "innerHeigh", "autoResize", "5703900JWISGq", "tion", "configure", "from", "celeration", "search", "delta", "scale", "AZpAl", "KReYC", "dware", "16260139SEwHIH", "setOrienta", "resizedWid", "rnpXY", "optimizeFo", "codec", "width", "setIsConne", "rootSize", "ror:", "8Arrays", "videoMeta", "Decoder er", "key", "setVideoMe", "avc1.64001", "close", "zsBLL", "rLatency", "xbtGa", "apply", "2365926vRurQP", "translate", "constructo", "maxWidth", "landscape", "oQcwb", "orientatio", "KKLxQ", "error", "state", "3020823BJjFhf", "2538872rJPwoR", "portrait", "setFullscr", "canvas", "isPlay", "een", "codedWidth", "round", "toString"];
  return Do = function() {
    return e;
  }, Do();
}
(function(e, n) {
  const t = Mt, r = e();
  for (; ; )
    try {
      if (parseInt(t(526)) / 1 + -parseInt(t(471)) / 2 * (parseInt(t(457)) / 3) + -parseInt(t(541)) / 4 + -parseInt(t(484)) / 5 * (parseInt(t(524)) / 6) + parseInt(t(497)) / 7 + -parseInt(t(551)) / 8 + parseInt(t(476)) / 9 * (parseInt(t(459)) / 10) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Bo, 674749);
const Hv = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = Mt;
    if (r(495) === r(495)) {
      const o = e ? function() {
        const i = r;
        if (t) {
          const s = t[i(528)](n, arguments);
          return t = null, s;
        }
      } : function() {
      };
      return e = !1, o;
    } else return _0x3005e5[r(539)]()[r(514)](r(486) + "+$")[r(539)]()[r(508) + "r"](_0x427ff8)[r(514)](r(486) + "+$");
  };
}(), Xs = Hv(void 0, function() {
  const e = Mt;
  return Xs[e(539)]()[e(514)](e(486) + "+$")[e(539)]()[e(508) + "r"](Xs)[e(514)](e(486) + "+$");
});
function Mt(e, n) {
  const t = Bo();
  return Mt = function(r, o) {
    return r = r - 440, t[r];
  }, Mt(e, n);
}
Xs();
function Bo() {
  const e = ["iframe", "ror", "search", "message", "setFullscr", "stener", "tListener", "fullscreen", "reconnecti", "password", "onSyncIFra", "viZnJ", "24NajUAM", "method", "201052eaagEy", "center", "apply", "een", "join_room", "applicatio", "enElement", "removeEven", "CwBVs", "connect", "video_meta", "hZVLT", " closed co", "toString", "Element", "3928248mkeZdB", "action", "get", "status", "screenElem", "type_clien", "tabIndex", "type", "marginTop", "meta", "5689816XYVqWo", "LSpOl", "change", "tion", "middle", "width", "delete", "code", "shortcutEv", "onScreenEv", "image_", "info", "clipboard", "PBGQg", "control", "shortcut", "screen", "QRypz", "DagyH", "wtLcz", "close", "connect_er", "mozFullScr", "data", "isMobile", "ent", "taskId", "size", "de: ", "response", "COPY_TEXT", "large", "url", "connection", "writeText", "setVideoMe", "decode", "1941585TAVnXx", "isDown", "40fUCkky", "Content-Ty", "EKcUG", "hYwdL", "fqFvg", "eenElement", "sync", "set", "webkitFull", "value", "current", "timeout", "2HzHEXq", "post", "showMenu", "addEventLi", "msg", "5305644RWwbzr", "screen_mai", "passwd", "get_video_", "error", "iting for ", "fixTouch", "ynLUB", "943105eNGKoS", "screen_", "(((.+)+)+)", "false", "children", "test", "draggable", "TEGGH", "map", "setOrienta", "emit", "Jlovz", "OauWj", "8474207pjunVB", "Timeout wa", "userAgent", "PPsSK", "device_id", "wPrbn", "length", "disconnect", "height", "text", "n/json", "constructo", "orientatio", "msFullscre", "headers"];
  return Bo = function() {
    return e;
  }, Bo();
}
const hy = ml((e, n) => {
  const t = Mt, { serve: r, dataDevice: o, maxWidth: i, showAssistive: s, showDeviceId: a, syncEvent: c, syncButton: l } = e, f = o[t(501)], d = /iPhone|iPad|iPod|Android/i[t(489)](navigator[t(499)]), u = t(565), [v, g] = it(null), [h, x] = it(a), S = {};
  S[t(473)] = !1, S[t(458)] = !1;
  const [b, m] = it(S), T = qe(null), y = qe(null), [O, C] = it(null), I = t(561) + f, F = t(485) + f, W = t(477) + "n_" + f, ne = qe(null), X = qe(null), D = qe(null), [V, q] = it([]), $ = qe(null), ee = qe(/* @__PURE__ */ new Map());
  st(() => {
    x(a);
  }, [a]);
  const K = (j) => {
    q((N) => [...N, j]);
  }, Q = (j) => {
    const N = t;
    y[N(469)][N(494)](N(515), j), c == null || c(j);
  };
  gl(n, () => ({ api: async function(j, N = 5e3) {
    return new Promise((L, B) => {
      const E = Mt, G = setTimeout(() => {
        const k = Mt;
        ee[k(469)][k(557)](j[k(446)]);
        const he = {};
        he[k(542)] = j[k(542)], he[k(446)] = j[k(446)], he[k(544)] = !1, he[k(515)] = k(498) + k(481) + k(449), B(he);
      }, N);
      ee[E(469)][E(466)](j[E(446)], (k) => {
        clearTimeout(G), L(k);
      }), y[E(469)][E(494)](E(515), j);
    });
  }, sync: function(j) {
    const N = t;
    N(500) !== N(552) ? y[N(469)][N(494)](N(515), j) : _0x37c7dd[N(469)][N(494)](N(515), _0x1a1886);
  }, showDeviceId: function(j) {
    x(j);
  } })), st(() => {
    const j = t;
    if (j(502) !== j(463)) (async () => {
      const N = j;
      try {
        if (N(568) !== N(564)) {
          const L = {};
          L[N(460) + "pe"] = N(531) + N(507);
          const B = {};
          B[N(501)] = o[N(501)], B[N(521)] = o[N(478)];
          const E = {};
          E[N(452)] = r, E[N(525)] = N(472), E[N(470)] = 1e4, E[N(511)] = L, E[N(443)] = B;
          const G = E, k = await bv(G);
          g(k[N(443)]);
        } else _0x330c23(!_0x572839);
      } catch (L) {
        if (N(461) === N(523)) {
          _0xec6ab4[N(469)] = _0x53c6b5;
          const B = {};
          B[N(542)] = N(560) + N(445), _0x446a67[N(494)](N(515), B);
        } else {
          const B = {};
          B[N(475)] = L, B[N(548)] = N(480), K(B);
        }
      }
    })();
    else {
      const N = {};
      N[j(542)] = j(522) + "me", _0x4fed9f[j(494)](j(515), N);
    }
  }, []), st(() => {
    const j = t;
    if (y[j(469)] || !v) return;
    const N = {};
    N[j(520) + "on"] = !1;
    const L = co(v, N);
    return L.on(j(535), () => {
      const B = j, E = {};
      E[B(542)] = B(535), E[B(546) + "t"] = u, E[B(501)] = o[B(501)], E[B(444)] = d, E[B(478)] = o[B(478)], L[B(494)](B(530), E);
    }), L.on(j(530), (B) => {
      const E = j;
      if (E(537) !== E(483))
        if (B[E(544)] == !0)
          if (E(462) !== E(462)) _0x41599d && _0x393e69[E(504)]();
          else {
            y[E(469)] = L;
            const G = {};
            G[E(542)] = E(560) + E(445), L[E(494)](E(515), G);
          }
        else if (E(491) !== E(491)) {
          const G = _0x3cedae(() => {
            const k = E;
            _0x3c3013[k(469)][k(557)](_0xdf2317[k(446)]);
            const he = {};
            he[k(542)] = _0x34ad59[k(542)], he[k(446)] = _0x44f3ca[k(446)], he[k(544)] = !1, he[k(515)] = k(498) + k(481) + k(449), _0x56a411(he);
          }, _0x7964fb);
          _0x216f4f[E(469)][E(466)](_0x22a9d2[E(446)], (k) => {
            _0x337d84(G), _0x5143c8(k);
          }), _0x744898[E(469)][E(494)](E(515), _0x5ea498);
        } else {
          const G = {};
          G[E(475)] = B[E(475)], G[E(548)] = E(480), K(G);
        }
      else {
        const G = {};
        G[E(475)] = _0x3a5ef9, G[E(548)] = E(480), _0xe49d31(G);
      }
    }), L.on(j(567), (B) => {
      const E = j;
      $[E(469)][E(456)](B);
    }), L.on(j(536), (B) => {
      const E = j;
      if (B)
        if (E(534) !== E(570)) {
          if ($[E(469)][E(455) + "ta"](B), !$[E(469)][E(512)]) {
            const G = {};
            G[E(542)] = E(522) + "me", L[E(494)](E(515), G);
          }
        } else return new _0xcc4d45((G, k) => {
          const he = E, Ce = _0x28f194(() => {
            const Ee = Mt;
            _0x4278fc[Ee(469)][Ee(557)](_0xd42743[Ee(446)]);
            const Ze = {};
            Ze[Ee(542)] = _0x63ff72[Ee(542)], Ze[Ee(446)] = _0x3f452c[Ee(446)], Ze[Ee(544)] = !1, Ze[Ee(515)] = Ee(498) + Ee(481) + Ee(449), k(Ze);
          }, _0x2d07d8);
          _0x15fff2[he(469)][he(466)](_0xb07ebc[he(446)], (Ee) => {
            _0x438a3a(Ce), G(Ee);
          }), _0x8d54e0[he(469)][he(494)](he(515), _0x5984ed);
        });
      else {
        const G = {};
        G[E(542)] = E(479) + E(550), L[E(494)](E(536), G);
      }
    }), L.on(j(515), (B) => {
      const E = j;
      if ((B[E(542)] == E(450) || B[E(542)] == E(559) + E(445)) && B[E(506)][E(503)] > 0 ? navigator[E(563)][E(454)](B[E(506)]) : B[E(542)] == E(509) + "n" && ($[E(469)][E(493) + E(554)](B[E(468)]), D[E(469)][E(482)](B[E(468)])), B[E(446)]) {
        const G = ee[E(469)][E(543)](B[E(446)]);
        G && (E(496) !== E(496) ? (_0x4f597d(_0x1b8e16), _0x5b95bb[E(469)][E(557)](_0x2a6276[E(446)])) : (G(B), ee[E(469)][E(557)](B[E(446)])));
      }
    }), L.on(j(441) + j(513), (B) => {
      const E = j, G = {};
      G[E(475)] = B, G[E(548)] = E(480), K(G);
    }), L.on(j(504), (B) => {
      const E = j, G = {};
      G[E(475)] = E(453) + E(538) + E(448) + B[E(558)], G[E(548)] = E(562), K(G), T[E(469)] && T[E(469)][E(440)]();
    }), () => {
      L && L[j(504)]();
    };
  }, [v]), st(() => {
    const j = t, N = X[j(469)];
    $[j(469)] = new Vv(N, i, d, C);
  }, []), st(() => {
    const j = t, N = () => {
      const L = Mt, B = document[L(519) + L(540)] || document[L(467) + L(545) + L(445)] || document[L(442) + L(464)] || document[L(510) + L(532)];
      $[L(469)][L(516) + L(529)](!!B), D[L(469)][L(516) + L(529)](!!B), D[L(469)][L(482)]();
    };
    return document[j(474) + j(517)](j(519) + j(553), N), () => {
      const L = j;
      document[L(533) + L(518)](L(519) + L(553), N);
    };
  }, []);
  const oe = {};
  oe[t(488)] = o[t(501)];
  const ie = {};
  ie[t(447)] = t(451);
  const Z = {};
  Z[t(447)] = t(451);
  const re = {};
  re[t(447)] = t(451);
  const xe = {};
  xe[t(505)] = 0, xe[t(556)] = 0;
  const fe = {};
  fe[t(543)] = b, fe[t(466)] = m;
  const pe = {};
  pe.id = I, pe[t(547)] = "0", pe[t(490)] = t(487);
  const ge = {};
  return ge[t(549)] = 5, H.jsxs(Od, { id: W, children: [h && H.jsx(Id, { children: H.jsx(kd, oe) }), V[t(503)] == 0 ? H.jsxs(H.Fragment, { children: [!O && H.jsxs(kf, { align: t(527), gap: t(555), children: [H.jsx(br, ie), H.jsx(br, Z), H.jsx(br, re)] }), H.jsxs(Rd, { ref: ne, id: F, style: O ? {} : xe, children: [s ? H.jsx(Fv, { status: fe, ref: D, imageRef: X, displayId: f, isMobile: d, isShowDeviceId: h, onSenData: (j, N) => {
    const L = t;
    L(569) !== L(569) ? (_0x14d746[L(469)][L(493) + L(554)](_0x14181d[L(468)]), _0x2e17f3[L(469)][L(482)](_0x5b90f5[L(468)])) : j === Hs && N[L(566)] === L(501) ? x(!h) : j === Hs && N[L(566)] === L(465) ? l(o[L(501)]) : Q(N);
  } }) : null, H.jsx(Rv, { canvasContent: pe, imageRef: X, isMobile: d, assistive: b, onImgEvent: (j, N) => {
    const L = t;
    if (j === s0) {
      const B = { ...b };
      B[L(473)] = !1, m(B);
    } else Q(N);
  } })] })] }) : V[t(492)]((j, N) => H.jsx(Tf, { style: ge, message: j[t(475)], type: j[t(548)], showIcon: !0, closable: !0 }, N))] });
});
function Fo() {
  var e = ["constructo", "70pmOsvb", "apply", "577700YORHrn", "3920MgPltn", "203044WeSRMS", "141978mtDVkN", "2ChqOUj", "toString", "search", "1574100ZddxPW", "4718XvMguU", "(((.+)+)+)", "9647550EFtdKD", "6WmsaSK", "284092kQRKVC"];
  return Fo = function() {
    return e;
  }, Fo();
}
(function(e, n) {
  for (var t = Or, r = e(); ; )
    try {
      var o = -parseInt(t(270)) / 1 * (-parseInt(t(262)) / 2) + -parseInt(t(269)) / 3 * (parseInt(t(260)) / 4) + -parseInt(t(272)) / 5 * (-parseInt(t(261)) / 6) + parseInt(t(266)) / 7 * (parseInt(t(275)) / 8) + parseInt(t(265)) / 9 + parseInt(t(274)) / 10 + -parseInt(t(268)) / 11;
      if (o === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Fo, 199732);
function Or(e, n) {
  var t = Fo();
  return Or = function(r, o) {
    r = r - 260;
    var i = t[r];
    return i;
  }, Or(e, n);
}
var Uv = /* @__PURE__ */ function() {
  var e = !0;
  return function(n, t) {
    var r = e ? function() {
      var o = Or;
      if (t) {
        var i = t[o(273)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), Gs = Uv(void 0, function() {
  var e = Or;
  return Gs[e(263)]()[e(264)](e(267) + "+$")[e(263)]()[e(271) + "r"](Gs)[e(264)](e(267) + "+$");
});
Gs();
export {
  hy as ControlMyRPP
};
