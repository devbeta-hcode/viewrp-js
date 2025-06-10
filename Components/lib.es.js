var Jf = Object.defineProperty;
var Qf = (t, n, e) => n in t ? Jf(t, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[n] = e;
var Nt = (t, n, e) => Qf(t, typeof n != "symbol" ? n + "" : n, e);
import * as E from "react";
import Fe, { useDebugValue as pa, createElement as e0, useRef as Ye, useContext as Qt, isValidElement as t0, version as n0, createContext as Fs, useLayoutEffect as r0, useEffect as it, useState as ot, forwardRef as il, useImperativeHandle as sl } from "react";
import ma from "react-dom";
var cr = fo;
(function(t, n) {
  for (var e = fo, r = t(); ; )
    try {
      var o = -parseInt(e(341)) / 1 * (-parseInt(e(355)) / 2) + -parseInt(e(354)) / 3 * (-parseInt(e(365)) / 4) + parseInt(e(346)) / 5 + -parseInt(e(375)) / 6 * (parseInt(e(359)) / 7) + parseInt(e(367)) / 8 + -parseInt(e(351)) / 9 * (-parseInt(e(373)) / 10) + parseInt(e(370)) / 11 * (-parseInt(e(358)) / 12);
      if (o === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ho, 266382);
typeof globalThis !== cr(352) || typeof window !== cr(352) || (typeof global !== cr(352) ? global : cr(352));
function o0(t) {
  var n = cr;
  return t && t[n(350)] && Object[n(374)][n(364) + n(357)][n(353)](t, n(361)) ? t[n(361)] : t;
}
function fo(t, n) {
  var e = ho();
  return fo = function(r, o) {
    r = r - 341;
    var i = e[r];
    return i;
  }, fo(t, n);
}
function ho() {
  var t = ["ptor", "get", "keys", "constructo", "567605gqBclU", "niocV", "apply", "defineProp", "__esModule", "819216COtTfb", "undefined", "call", "9RbBWQr", "171128vopscN", "function", "erty", "3296172POxIPp", "7FQmPmB", "length", "default", "DjMJf", "getOwnProp", "hasOwnProp", "23824RGAQaM", "forEach", "1600288kxVsbb", "nUykW", "construct", "11DGgIXF", "value", "ertyDescri", "10UcRnYI", "prototype", "315084VncAJh", "2PLyVWN"];
  return ho = function() {
    return t;
  }, ho();
}
var Rr = { exports: {} }, tr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ga;
function i0() {
  if (ga) return tr;
  ga = 1;
  var t = Fe, n = Symbol.for("react.element"), e = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(a, c, l) {
    var f, d = {}, u = null, v = null;
    l !== void 0 && (u = "" + l), c.key !== void 0 && (u = "" + c.key), c.ref !== void 0 && (v = c.ref);
    for (f in c) r.call(c, f) && !i.hasOwnProperty(f) && (d[f] = c[f]);
    if (a && a.defaultProps) for (f in c = a.defaultProps, c) d[f] === void 0 && (d[f] = c[f]);
    return { $$typeof: n, type: a, key: u, ref: v, props: d, _owner: o.current };
  }
  return tr.Fragment = e, tr.jsx = s, tr.jsxs = s, tr;
}
var nr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var va;
function s0() {
  return va || (va = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Fe, n = Symbol.for("react.element"), e = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g = Symbol.iterator, h = "@@iterator";
    function x(m) {
      if (m === null || typeof m != "object")
        return null;
      var k = g && m[g] || m[h];
      return typeof k == "function" ? k : null;
    }
    var w = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(m) {
      {
        for (var k = arguments.length, M = new Array(k > 1 ? k - 1 : 0), Y = 1; Y < k; Y++)
          M[Y - 1] = arguments[Y];
        p("error", m, M);
      }
    }
    function p(m, k, M) {
      {
        var Y = w.ReactDebugCurrentFrame, xe = Y.getStackAddendum();
        xe !== "" && (k += "%s", M = M.concat([xe]));
        var me = M.map(function(ue) {
          return String(ue);
        });
        me.unshift("Warning: " + k), Function.prototype.apply.call(console[m], console, me);
      }
    }
    var C = !1, y = !1, R = !1, _ = !1, j = !1, B;
    B = Symbol.for("react.module.reference");
    function X(m) {
      return !!(typeof m == "string" || typeof m == "function" || m === r || m === i || j || m === o || m === l || m === f || _ || m === v || C || y || R || typeof m == "object" && m !== null && (m.$$typeof === u || m.$$typeof === d || m.$$typeof === s || m.$$typeof === a || m.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      m.$$typeof === B || m.getModuleId !== void 0));
    }
    function re(m, k, M) {
      var Y = m.displayName;
      if (Y)
        return Y;
      var xe = k.displayName || k.name || "";
      return xe !== "" ? M + "(" + xe + ")" : M;
    }
    function $(m) {
      return m.displayName || "Context";
    }
    function D(m) {
      if (m == null)
        return null;
      if (typeof m.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof m == "function")
        return m.displayName || m.name || null;
      if (typeof m == "string")
        return m;
      switch (m) {
        case r:
          return "Fragment";
        case e:
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
      if (typeof m == "object")
        switch (m.$$typeof) {
          case a:
            var k = m;
            return $(k) + ".Consumer";
          case s:
            var M = m;
            return $(M._context) + ".Provider";
          case c:
            return re(m, m.render, "ForwardRef");
          case d:
            var Y = m.displayName || null;
            return Y !== null ? Y : D(m.type) || "Memo";
          case u: {
            var xe = m, me = xe._payload, ue = xe._init;
            try {
              return D(ue(me));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var W = Object.assign, H = 0, Q, K, Z, J, ae, oe, G;
    function ee() {
    }
    ee.__reactDisabledLog = !0;
    function he() {
      {
        if (H === 0) {
          Q = console.log, K = console.info, Z = console.warn, J = console.error, ae = console.group, oe = console.groupCollapsed, G = console.groupEnd;
          var m = {
            configurable: !0,
            enumerable: !0,
            value: ee,
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
        H++;
      }
    }
    function fe() {
      {
        if (H--, H === 0) {
          var m = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: W({}, m, {
              value: Q
            }),
            info: W({}, m, {
              value: K
            }),
            warn: W({}, m, {
              value: Z
            }),
            error: W({}, m, {
              value: J
            }),
            group: W({}, m, {
              value: ae
            }),
            groupCollapsed: W({}, m, {
              value: oe
            }),
            groupEnd: W({}, m, {
              value: G
            })
          });
        }
        H < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var pe = w.ReactCurrentDispatcher, P;
    function F(m, k, M) {
      {
        if (P === void 0)
          try {
            throw Error();
          } catch (xe) {
            var Y = xe.stack.trim().match(/\n( *(at )?)/);
            P = Y && Y[1] || "";
          }
        return `
` + P + m;
      }
    }
    var T = !1, N;
    {
      var O = typeof WeakMap == "function" ? WeakMap : Map;
      N = new O();
    }
    function z(m, k) {
      if (!m || T)
        return "";
      {
        var M = N.get(m);
        if (M !== void 0)
          return M;
      }
      var Y;
      T = !0;
      var xe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var me;
      me = pe.current, pe.current = null, he();
      try {
        if (k) {
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
            } catch (rt) {
              Y = rt;
            }
            Reflect.construct(m, [], ue);
          } else {
            try {
              ue.call();
            } catch (rt) {
              Y = rt;
            }
            m.call(ue.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (rt) {
            Y = rt;
          }
          m();
        }
      } catch (rt) {
        if (rt && Y && typeof rt.stack == "string") {
          for (var ce = rt.stack.split(`
`), Je = Y.stack.split(`
`), Oe = ce.length - 1, ke = Je.length - 1; Oe >= 1 && ke >= 0 && ce[Oe] !== Je[ke]; )
            ke--;
          for (; Oe >= 1 && ke >= 0; Oe--, ke--)
            if (ce[Oe] !== Je[ke]) {
              if (Oe !== 1 || ke !== 1)
                do
                  if (Oe--, ke--, ke < 0 || ce[Oe] !== Je[ke]) {
                    var Ie = `
` + ce[Oe].replace(" at new ", " at ");
                    return m.displayName && Ie.includes("<anonymous>") && (Ie = Ie.replace("<anonymous>", m.displayName)), typeof m == "function" && N.set(m, Ie), Ie;
                  }
                while (Oe >= 1 && ke >= 0);
              break;
            }
        }
      } finally {
        T = !1, pe.current = me, fe(), Error.prepareStackTrace = xe;
      }
      var Cn = m ? m.displayName || m.name : "", ln = Cn ? F(Cn) : "";
      return typeof m == "function" && N.set(m, ln), ln;
    }
    function je(m, k, M) {
      return z(m, !1);
    }
    function L(m) {
      var k = m.prototype;
      return !!(k && k.isReactComponent);
    }
    function Me(m, k, M) {
      if (m == null)
        return "";
      if (typeof m == "function")
        return z(m, L(m));
      if (typeof m == "string")
        return F(m);
      switch (m) {
        case l:
          return F("Suspense");
        case f:
          return F("SuspenseList");
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case c:
            return je(m.render);
          case d:
            return Me(m.type, k, M);
          case u: {
            var Y = m, xe = Y._payload, me = Y._init;
            try {
              return Me(me(xe), k, M);
            } catch {
            }
          }
        }
      return "";
    }
    var Te = Object.prototype.hasOwnProperty, ft = {}, Pt = w.ReactDebugCurrentFrame;
    function lt(m) {
      if (m) {
        var k = m._owner, M = Me(m.type, m._source, k ? k.type : null);
        Pt.setExtraStackFrame(M);
      } else
        Pt.setExtraStackFrame(null);
    }
    function kt(m, k, M, Y, xe) {
      {
        var me = Function.call.bind(Te);
        for (var ue in m)
          if (me(m, ue)) {
            var ce = void 0;
            try {
              if (typeof m[ue] != "function") {
                var Je = Error((Y || "React class") + ": " + M + " type `" + ue + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof m[ue] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Je.name = "Invariant Violation", Je;
              }
              ce = m[ue](k, ue, Y, M, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Oe) {
              ce = Oe;
            }
            ce && !(ce instanceof Error) && (lt(xe), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Y || "React class", M, ue, typeof ce), lt(null)), ce instanceof Error && !(ce.message in ft) && (ft[ce.message] = !0, lt(xe), S("Failed %s type: %s", M, ce.message), lt(null));
          }
      }
    }
    var Le = Array.isArray;
    function Ce(m) {
      return Le(m);
    }
    function Ke(m) {
      {
        var k = typeof Symbol == "function" && Symbol.toStringTag, M = k && m[Symbol.toStringTag] || m.constructor.name || "Object";
        return M;
      }
    }
    function gt(m) {
      try {
        return dt(m), !1;
      } catch {
        return !0;
      }
    }
    function dt(m) {
      return "" + m;
    }
    function rn(m) {
      if (gt(m))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke(m)), dt(m);
    }
    var on = w.ReactCurrentOwner, _n = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, sn, an;
    function I(m) {
      if (Te.call(m, "ref")) {
        var k = Object.getOwnPropertyDescriptor(m, "ref").get;
        if (k && k.isReactWarning)
          return !1;
      }
      return m.ref !== void 0;
    }
    function b(m) {
      if (Te.call(m, "key")) {
        var k = Object.getOwnPropertyDescriptor(m, "key").get;
        if (k && k.isReactWarning)
          return !1;
      }
      return m.key !== void 0;
    }
    function Se(m, k) {
      typeof m.ref == "string" && on.current;
    }
    function ie(m, k) {
      {
        var M = function() {
          sn || (sn = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", k));
        };
        M.isReactWarning = !0, Object.defineProperty(m, "key", {
          get: M,
          configurable: !0
        });
      }
    }
    function we(m, k) {
      {
        var M = function() {
          an || (an = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", k));
        };
        M.isReactWarning = !0, Object.defineProperty(m, "ref", {
          get: M,
          configurable: !0
        });
      }
    }
    var te = function(m, k, M, Y, xe, me, ue) {
      var ce = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: m,
        key: k,
        ref: M,
        props: ue,
        // Record the component responsible for creating this element.
        _owner: me
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
        value: xe
      }), Object.freeze && (Object.freeze(ce.props), Object.freeze(ce)), ce;
    };
    function Re(m, k, M, Y, xe) {
      {
        var me, ue = {}, ce = null, Je = null;
        M !== void 0 && (rn(M), ce = "" + M), b(k) && (rn(k.key), ce = "" + k.key), I(k) && (Je = k.ref, Se(k, xe));
        for (me in k)
          Te.call(k, me) && !_n.hasOwnProperty(me) && (ue[me] = k[me]);
        if (m && m.defaultProps) {
          var Oe = m.defaultProps;
          for (me in Oe)
            ue[me] === void 0 && (ue[me] = Oe[me]);
        }
        if (ce || Je) {
          var ke = typeof m == "function" ? m.displayName || m.name || "Unknown" : m;
          ce && ie(ue, ke), Je && we(ue, ke);
        }
        return te(m, ce, Je, xe, Y, on.current, ue);
      }
    }
    var Ee = w.ReactCurrentOwner, vt = w.ReactDebugCurrentFrame;
    function ze(m) {
      if (m) {
        var k = m._owner, M = Me(m.type, m._source, k ? k.type : null);
        vt.setExtraStackFrame(M);
      } else
        vt.setExtraStackFrame(null);
    }
    var yt;
    yt = !1;
    function cn(m) {
      return typeof m == "object" && m !== null && m.$$typeof === n;
    }
    function We() {
      {
        if (Ee.current) {
          var m = D(Ee.current.type);
          if (m)
            return `

Check the render method of \`` + m + "`.";
        }
        return "";
      }
    }
    function Ze(m) {
      return "";
    }
    var Ve = {};
    function It(m) {
      {
        var k = We();
        if (!k) {
          var M = typeof m == "string" ? m : m.displayName || m.name;
          M && (k = `

Check the top-level render call using <` + M + ">.");
        }
        return k;
      }
    }
    function nt(m, k) {
      {
        if (!m._store || m._store.validated || m.key != null)
          return;
        m._store.validated = !0;
        var M = It(k);
        if (Ve[M])
          return;
        Ve[M] = !0;
        var Y = "";
        m && m._owner && m._owner !== Ee.current && (Y = " It was passed a child from " + D(m._owner.type) + "."), ze(m), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', M, Y), ze(null);
      }
    }
    function Yt(m, k) {
      {
        if (typeof m != "object")
          return;
        if (Ce(m))
          for (var M = 0; M < m.length; M++) {
            var Y = m[M];
            cn(Y) && nt(Y, k);
          }
        else if (cn(m))
          m._store && (m._store.validated = !0);
        else if (m) {
          var xe = x(m);
          if (typeof xe == "function" && xe !== m.entries)
            for (var me = xe.call(m), ue; !(ue = me.next()).done; )
              cn(ue.value) && nt(ue.value, k);
        }
      }
    }
    function Qe(m) {
      {
        var k = m.type;
        if (k == null || typeof k == "string")
          return;
        var M;
        if (typeof k == "function")
          M = k.propTypes;
        else if (typeof k == "object" && (k.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        k.$$typeof === d))
          M = k.propTypes;
        else
          return;
        if (M) {
          var Y = D(k);
          kt(M, m.props, "prop", Y, m);
        } else if (k.PropTypes !== void 0 && !yt) {
          yt = !0;
          var xe = D(k);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", xe || "Unknown");
        }
        typeof k.getDefaultProps == "function" && !k.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function bt(m) {
      {
        for (var k = Object.keys(m.props), M = 0; M < k.length; M++) {
          var Y = k[M];
          if (Y !== "children" && Y !== "key") {
            ze(m), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Y), ze(null);
            break;
          }
        }
        m.ref !== null && (ze(m), S("Invalid attribute `ref` supplied to `React.Fragment`."), ze(null));
      }
    }
    var er = {};
    function Tr(m, k, M, Y, xe, me) {
      {
        var ue = X(m);
        if (!ue) {
          var ce = "";
          (m === void 0 || typeof m == "object" && m !== null && Object.keys(m).length === 0) && (ce += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Je = Ze();
          Je ? ce += Je : ce += We();
          var Oe;
          m === null ? Oe = "null" : Ce(m) ? Oe = "array" : m !== void 0 && m.$$typeof === n ? (Oe = "<" + (D(m.type) || "Unknown") + " />", ce = " Did you accidentally export a JSX literal instead of a component?") : Oe = typeof m, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Oe, ce);
        }
        var ke = Re(m, k, M, xe, me);
        if (ke == null)
          return ke;
        if (ue) {
          var Ie = k.children;
          if (Ie !== void 0)
            if (Y)
              if (Ce(Ie)) {
                for (var Cn = 0; Cn < Ie.length; Cn++)
                  Yt(Ie[Cn], m);
                Object.freeze && Object.freeze(Ie);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Yt(Ie, m);
        }
        if (Te.call(k, "key")) {
          var ln = D(m), rt = Object.keys(k).filter(function(Zf) {
            return Zf !== "key";
          }), ui = rt.length > 0 ? "{key: someKey, " + rt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!er[ln + ui]) {
            var Kf = rt.length > 0 ? "{" + rt.join(": ..., ") + ": ...}" : "{}";
            S(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ui, ln, Kf, ln), er[ln + ui] = !0;
          }
        }
        return m === r ? bt(ke) : Qe(ke), ke;
      }
    }
    function Xe(m, k, M) {
      return Tr(m, k, M, !0);
    }
    function Or(m, k, M) {
      return Tr(m, k, M, !1);
    }
    var li = Or, Pe = Xe;
    nr.Fragment = r, nr.jsx = li, nr.jsxs = Pe;
  }()), nr;
}
var ya;
function a0() {
  return ya || (ya = 1, process.env.NODE_ENV === "production" ? Rr.exports = i0() : Rr.exports = s0()), Rr.exports;
}
var U = a0(), st = function() {
  return st = Object.assign || function(n) {
    for (var e, r = 1, o = arguments.length; r < o; r++) {
      e = arguments[r];
      for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
    }
    return n;
  }, st.apply(this, arguments);
};
function Nn(t, n, e) {
  if (e || arguments.length === 2) for (var r = 0, o = n.length, i; r < o; r++)
    (i || !(r in n)) && (i || (i = Array.prototype.slice.call(n, 0, r)), i[r] = n[r]);
  return t.concat(i || Array.prototype.slice.call(n));
}
function c0(t) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(e) {
    return n[e] === void 0 && (n[e] = t(e)), n[e];
  };
}
var l0 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, u0 = /* @__PURE__ */ c0(
  function(t) {
    return l0.test(t) || t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ae = "-ms-", fr = "-moz-", ye = "-webkit-", al = "comm", Fo = "rule", zs = "decl", f0 = "@import", cl = "@keyframes", d0 = "@layer", ll = Math.abs, Vs = String.fromCharCode, ji = Object.assign;
function h0(t, n) {
  return Ge(t, 0) ^ 45 ? (((n << 2 ^ Ge(t, 0)) << 2 ^ Ge(t, 1)) << 2 ^ Ge(t, 2)) << 2 ^ Ge(t, 3) : 0;
}
function ul(t) {
  return t.trim();
}
function Ut(t, n) {
  return (t = n.exec(t)) ? t[0] : t;
}
function se(t, n, e) {
  return t.replace(n, e);
}
function Xr(t, n, e) {
  return t.indexOf(n, e);
}
function Ge(t, n) {
  return t.charCodeAt(n) | 0;
}
function jn(t, n, e) {
  return t.slice(n, e);
}
function Lt(t) {
  return t.length;
}
function fl(t) {
  return t.length;
}
function lr(t, n) {
  return n.push(t), t;
}
function x0(t, n) {
  return t.map(n).join("");
}
function ba(t, n) {
  return t.filter(function(e) {
    return !Ut(e, n);
  });
}
var zo = 1, Mn = 1, dl = 0, pt = 0, He = 0, Wn = "";
function Vo(t, n, e, r, o, i, s, a) {
  return { value: t, root: n, parent: e, type: r, props: o, children: i, line: zo, column: Mn, length: s, return: "", siblings: a };
}
function $t(t, n) {
  return ji(Vo("", null, null, "", null, null, 0, t.siblings), t, { length: -t.length }, n);
}
function An(t) {
  for (; t.root; )
    t = $t(t.root, { children: [t] });
  lr(t, t.siblings);
}
function p0() {
  return He;
}
function m0() {
  return He = pt > 0 ? Ge(Wn, --pt) : 0, Mn--, He === 10 && (Mn = 1, zo--), He;
}
function Et() {
  return He = pt < dl ? Ge(Wn, pt++) : 0, Mn++, He === 10 && (Mn = 1, zo++), He;
}
function mn() {
  return Ge(Wn, pt);
}
function Yr() {
  return pt;
}
function Ho(t, n) {
  return jn(Wn, t, n);
}
function Mi(t) {
  switch (t) {
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
function g0(t) {
  return zo = Mn = 1, dl = Lt(Wn = t), pt = 0, [];
}
function v0(t) {
  return Wn = "", t;
}
function fi(t) {
  return ul(Ho(pt - 1, Li(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function y0(t) {
  for (; (He = mn()) && He < 33; )
    Et();
  return Mi(t) > 2 || Mi(He) > 3 ? "" : " ";
}
function b0(t, n) {
  for (; --n && Et() && !(He < 48 || He > 102 || He > 57 && He < 65 || He > 70 && He < 97); )
    ;
  return Ho(t, Yr() + (n < 6 && mn() == 32 && Et() == 32));
}
function Li(t) {
  for (; Et(); )
    switch (He) {
      // ] ) " '
      case t:
        return pt;
      // " '
      case 34:
      case 39:
        t !== 34 && t !== 39 && Li(He);
        break;
      // (
      case 40:
        t === 41 && Li(t);
        break;
      // \
      case 92:
        Et();
        break;
    }
  return pt;
}
function S0(t, n) {
  for (; Et() && t + He !== 57; )
    if (t + He === 84 && mn() === 47)
      break;
  return "/*" + Ho(n, pt - 1) + "*" + Vs(t === 47 ? t : Et());
}
function w0(t) {
  for (; !Mi(mn()); )
    Et();
  return Ho(t, pt);
}
function E0(t) {
  return v0($r("", null, null, null, [""], t = g0(t), 0, [0], t));
}
function $r(t, n, e, r, o, i, s, a, c) {
  for (var l = 0, f = 0, d = s, u = 0, v = 0, g = 0, h = 1, x = 1, w = 1, S = 0, p = "", C = o, y = i, R = r, _ = p; x; )
    switch (g = S, S = Et()) {
      // (
      case 40:
        if (g != 108 && Ge(_, d - 1) == 58) {
          Xr(_ += se(fi(S), "&", "&\f"), "&\f", ll(l ? a[l - 1] : 0)) != -1 && (w = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        _ += fi(S);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        _ += y0(g);
        break;
      // \
      case 92:
        _ += b0(Yr() - 1, 7);
        continue;
      // /
      case 47:
        switch (mn()) {
          case 42:
          case 47:
            lr(_0(S0(Et(), Yr()), n, e, c), c);
            break;
          default:
            _ += "/";
        }
        break;
      // {
      case 123 * h:
        a[l++] = Lt(_) * w;
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
          case 59 + f:
            w == -1 && (_ = se(_, /\f/g, "")), v > 0 && Lt(_) - d && lr(v > 32 ? wa(_ + ";", r, e, d - 1, c) : wa(se(_, " ", "") + ";", r, e, d - 2, c), c);
            break;
          // @ ;
          case 59:
            _ += ";";
          // { rule/at-rule
          default:
            if (lr(R = Sa(_, n, e, l, f, o, a, p, C = [], y = [], d, i), i), S === 123)
              if (f === 0)
                $r(_, n, R, R, C, i, d, a, y);
              else
                switch (u === 99 && Ge(_, 3) === 110 ? 100 : u) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    $r(t, R, R, r && lr(Sa(t, R, R, 0, 0, o, a, p, o, C = [], d, y), y), o, y, d, a, r ? C : y);
                    break;
                  default:
                    $r(_, R, R, R, [""], y, 0, a, y);
                }
        }
        l = f = v = 0, h = w = 1, p = _ = "", d = s;
        break;
      // :
      case 58:
        d = 1 + Lt(_), v = g;
      default:
        if (h < 1) {
          if (S == 123)
            --h;
          else if (S == 125 && h++ == 0 && m0() == 125)
            continue;
        }
        switch (_ += Vs(S), S * h) {
          // &
          case 38:
            w = f > 0 ? 1 : (_ += "\f", -1);
            break;
          // ,
          case 44:
            a[l++] = (Lt(_) - 1) * w, w = 1;
            break;
          // @
          case 64:
            mn() === 45 && (_ += fi(Et())), u = mn(), f = d = Lt(p = _ += w0(Yr())), S++;
            break;
          // -
          case 45:
            g === 45 && Lt(_) == 2 && (h = 0);
        }
    }
  return i;
}
function Sa(t, n, e, r, o, i, s, a, c, l, f, d) {
  for (var u = o - 1, v = o === 0 ? i : [""], g = fl(v), h = 0, x = 0, w = 0; h < r; ++h)
    for (var S = 0, p = jn(t, u + 1, u = ll(x = s[h])), C = t; S < g; ++S)
      (C = ul(x > 0 ? v[S] + " " + p : se(p, /&\f/g, v[S]))) && (c[w++] = C);
  return Vo(t, n, e, o === 0 ? Fo : a, c, l, f, d);
}
function _0(t, n, e, r) {
  return Vo(t, n, e, al, Vs(p0()), jn(t, 2, -2), 0, r);
}
function wa(t, n, e, r, o) {
  return Vo(t, n, e, zs, jn(t, 0, r), jn(t, r + 1, -1), r, o);
}
function hl(t, n, e) {
  switch (h0(t, n)) {
    // color-adjust
    case 5103:
      return ye + "print-" + t + t;
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
      return ye + t + t;
    // tab-size
    case 4789:
      return fr + t + t;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ye + t + fr + t + Ae + t + t;
    // writing-mode
    case 5936:
      switch (Ge(t, n + 11)) {
        // vertical-l(r)
        case 114:
          return ye + t + Ae + se(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
        // vertical-r(l)
        case 108:
          return ye + t + Ae + se(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
        // horizontal(-)tb
        case 45:
          return ye + t + Ae + se(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return ye + t + Ae + t + t;
    // order
    case 6165:
      return ye + t + Ae + "flex-" + t + t;
    // align-items
    case 5187:
      return ye + t + se(t, /(\w+).+(:[^]+)/, ye + "box-$1$2" + Ae + "flex-$1$2") + t;
    // align-self
    case 5443:
      return ye + t + Ae + "flex-item-" + se(t, /flex-|-self/g, "") + (Ut(t, /flex-|baseline/) ? "" : Ae + "grid-row-" + se(t, /flex-|-self/g, "")) + t;
    // align-content
    case 4675:
      return ye + t + Ae + "flex-line-pack" + se(t, /align-content|flex-|-self/g, "") + t;
    // flex-shrink
    case 5548:
      return ye + t + Ae + se(t, "shrink", "negative") + t;
    // flex-basis
    case 5292:
      return ye + t + Ae + se(t, "basis", "preferred-size") + t;
    // flex-grow
    case 6060:
      return ye + "box-" + se(t, "-grow", "") + ye + t + Ae + se(t, "grow", "positive") + t;
    // transition
    case 4554:
      return ye + se(t, /([^-])(transform)/g, "$1" + ye + "$2") + t;
    // cursor
    case 6187:
      return se(se(se(t, /(zoom-|grab)/, ye + "$1"), /(image-set)/, ye + "$1"), t, "") + t;
    // background, background-image
    case 5495:
    case 3959:
      return se(t, /(image-set\([^]*)/, ye + "$1$`$1");
    // justify-content
    case 4968:
      return se(se(t, /(.+:)(flex-)?(.*)/, ye + "box-pack:$3" + Ae + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ye + t + t;
    // justify-self
    case 4200:
      if (!Ut(t, /flex-|baseline/)) return Ae + "grid-column-align" + jn(t, n) + t;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return Ae + se(t, "template-", "") + t;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return e && e.some(function(r, o) {
        return n = o, Ut(r.props, /grid-\w+-end/);
      }) ? ~Xr(t + (e = e[n].value), "span", 0) ? t : Ae + se(t, "-start", "") + t + Ae + "grid-row-span:" + (~Xr(e, "span", 0) ? Ut(e, /\d+/) : +Ut(e, /\d+/) - +Ut(t, /\d+/)) + ";" : Ae + se(t, "-start", "") + t;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return e && e.some(function(r) {
        return Ut(r.props, /grid-\w+-start/);
      }) ? t : Ae + se(se(t, "-end", "-span"), "span ", "") + t;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return se(t, /(.+)-inline(.+)/, ye + "$1$2") + t;
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
      if (Lt(t) - 1 - n > 6)
        switch (Ge(t, n + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (Ge(t, n + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return se(t, /(.+:)(.+)-([^]+)/, "$1" + ye + "$2-$3$1" + fr + (Ge(t, n + 3) == 108 ? "$3" : "$2-$3")) + t;
          // (s)tretch
          case 115:
            return ~Xr(t, "stretch", 0) ? hl(se(t, "stretch", "fill-available"), n, e) + t : t;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return se(t, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, s, a, c, l) {
        return Ae + o + ":" + i + l + (s ? Ae + o + "-span:" + (a ? c : +c - +i) + l : "") + t;
      });
    // position: sticky
    case 4949:
      if (Ge(t, n + 6) === 121)
        return se(t, ":", ":" + ye) + t;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (Ge(t, Ge(t, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return se(t, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + ye + (Ge(t, 14) === 45 ? "inline-" : "") + "box$3$1" + ye + "$2$3$1" + Ae + "$2box$3") + t;
        // (inline-)?gri(d)
        case 100:
          return se(t, ":", ":" + Ae) + t;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return se(t, "scroll-", "scroll-snap-") + t;
  }
  return t;
}
function xo(t, n) {
  for (var e = "", r = 0; r < t.length; r++)
    e += n(t[r], r, t, n) || "";
  return e;
}
function C0(t, n, e, r) {
  switch (t.type) {
    case d0:
      if (t.children.length) break;
    case f0:
    case zs:
      return t.return = t.return || t.value;
    case al:
      return "";
    case cl:
      return t.return = t.value + "{" + xo(t.children, r) + "}";
    case Fo:
      if (!Lt(t.value = t.props.join(","))) return "";
  }
  return Lt(e = xo(t.children, r)) ? t.return = t.value + "{" + e + "}" : "";
}
function A0(t) {
  var n = fl(t);
  return function(e, r, o, i) {
    for (var s = "", a = 0; a < n; a++)
      s += t[a](e, r, o, i) || "";
    return s;
  };
}
function T0(t) {
  return function(n) {
    n.root || (n = n.return) && t(n);
  };
}
function O0(t, n, e, r) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case zs:
        t.return = hl(t.value, t.length, e);
        return;
      case cl:
        return xo([$t(t, { value: se(t.value, "@", "@" + ye) })], r);
      case Fo:
        if (t.length)
          return x0(e = t.props, function(o) {
            switch (Ut(o, r = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                An($t(t, { props: [se(o, /:(read-\w+)/, ":" + fr + "$1")] })), An($t(t, { props: [o] })), ji(t, { props: ba(e, r) });
                break;
              // :placeholder
              case "::placeholder":
                An($t(t, { props: [se(o, /:(plac\w+)/, ":" + ye + "input-$1")] })), An($t(t, { props: [se(o, /:(plac\w+)/, ":" + fr + "$1")] })), An($t(t, { props: [se(o, /:(plac\w+)/, Ae + "input-$1")] })), An($t(t, { props: [o] })), ji(t, { props: ba(e, r) });
                break;
            }
            return "";
          });
    }
}
var R0 = {
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
}, wn = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", xl = "active", pl = "data-styled-version", Uo = "6.1.18", Hs = `/*!sc*/
`, po = typeof window < "u" && typeof document < "u", P0 = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Ea = /invalid hook call/i, Pr = /* @__PURE__ */ new Set(), k0 = function(t, n) {
  if (process.env.NODE_ENV !== "production") {
    var e = n ? ' with the id of "'.concat(n, '"') : "", r = "The component ".concat(t).concat(e, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, o = console.error;
    try {
      var i = !0;
      console.error = function(s) {
        for (var a = [], c = 1; c < arguments.length; c++) a[c - 1] = arguments[c];
        Ea.test(s) ? (i = !1, Pr.delete(r)) : o.apply(void 0, Nn([s], a, !1));
      }, Ye(), i && !Pr.has(r) && (console.warn(r), Pr.add(r));
    } catch (s) {
      Ea.test(s.message) && Pr.delete(r);
    } finally {
      console.error = o;
    }
  }
}, qo = Object.freeze([]), Ln = Object.freeze({});
function I0(t, n, e) {
  return e === void 0 && (e = Ln), t.theme !== e.theme && t.theme || n || e.theme;
}
var Di = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), N0 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, j0 = /(^-|-$)/g;
function _a(t) {
  return t.replace(N0, "-").replace(j0, "");
}
var M0 = /(a)(d)/gi, kr = 52, Ca = function(t) {
  return String.fromCharCode(t + (t > 25 ? 39 : 97));
};
function Bi(t) {
  var n, e = "";
  for (n = Math.abs(t); n > kr; n = n / kr | 0) e = Ca(n % kr) + e;
  return (Ca(n % kr) + e).replace(M0, "$1-$2");
}
var di, ml = 5381, fn = function(t, n) {
  for (var e = n.length; e; ) t = 33 * t ^ n.charCodeAt(--e);
  return t;
}, gl = function(t) {
  return fn(ml, t);
};
function L0(t) {
  return Bi(gl(t) >>> 0);
}
function vl(t) {
  return process.env.NODE_ENV !== "production" && typeof t == "string" && t || t.displayName || t.name || "Component";
}
function hi(t) {
  return typeof t == "string" && (process.env.NODE_ENV === "production" || t.charAt(0) === t.charAt(0).toLowerCase());
}
var yl = typeof Symbol == "function" && Symbol.for, bl = yl ? Symbol.for("react.memo") : 60115, D0 = yl ? Symbol.for("react.forward_ref") : 60112, B0 = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, F0 = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Sl = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, z0 = ((di = {})[D0] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, di[bl] = Sl, di);
function Aa(t) {
  return ("type" in (n = t) && n.type.$$typeof) === bl ? Sl : "$$typeof" in t ? z0[t.$$typeof] : B0;
  var n;
}
var V0 = Object.defineProperty, H0 = Object.getOwnPropertyNames, Ta = Object.getOwnPropertySymbols, U0 = Object.getOwnPropertyDescriptor, q0 = Object.getPrototypeOf, Oa = Object.prototype;
function wl(t, n, e) {
  if (typeof n != "string") {
    if (Oa) {
      var r = q0(n);
      r && r !== Oa && wl(t, r, e);
    }
    var o = H0(n);
    Ta && (o = o.concat(Ta(n)));
    for (var i = Aa(t), s = Aa(n), a = 0; a < o.length; ++a) {
      var c = o[a];
      if (!(c in F0 || e && e[c] || s && c in s || i && c in i)) {
        var l = U0(n, c);
        try {
          V0(t, c, l);
        } catch {
        }
      }
    }
  }
  return t;
}
function Dn(t) {
  return typeof t == "function";
}
function Us(t) {
  return typeof t == "object" && "styledComponentId" in t;
}
function hn(t, n) {
  return t && n ? "".concat(t, " ").concat(n) : t || n || "";
}
function Ra(t, n) {
  if (t.length === 0) return "";
  for (var e = t[0], r = 1; r < t.length; r++) e += t[r];
  return e;
}
function Bn(t) {
  return t !== null && typeof t == "object" && t.constructor.name === Object.name && !("props" in t && t.$$typeof);
}
function Fi(t, n, e) {
  if (e === void 0 && (e = !1), !e && !Bn(t) && !Array.isArray(t)) return n;
  if (Array.isArray(n)) for (var r = 0; r < n.length; r++) t[r] = Fi(t[r], n[r]);
  else if (Bn(n)) for (var r in n) t[r] = Fi(t[r], n[r]);
  return t;
}
function qs(t, n) {
  Object.defineProperty(t, "toString", { value: n });
}
var W0 = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function X0() {
  for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
  for (var e = t[0], r = [], o = 1, i = t.length; o < i; o += 1) r.push(t[o]);
  return r.forEach(function(s) {
    e = e.replace(/%[a-z]/, s);
  }), e;
}
function Xn(t) {
  for (var n = [], e = 1; e < arguments.length; e++) n[e - 1] = arguments[e];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t, " for more information.").concat(n.length > 0 ? " Args: ".concat(n.join(", ")) : "")) : new Error(X0.apply(void 0, Nn([W0[t]], n, !1)).trim());
}
var Y0 = function() {
  function t(n) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = n;
  }
  return t.prototype.indexOfGroup = function(n) {
    for (var e = 0, r = 0; r < n; r++) e += this.groupSizes[r];
    return e;
  }, t.prototype.insertRules = function(n, e) {
    if (n >= this.groupSizes.length) {
      for (var r = this.groupSizes, o = r.length, i = o; n >= i; ) if ((i <<= 1) < 0) throw Xn(16, "".concat(n));
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(r), this.length = i;
      for (var s = o; s < i; s++) this.groupSizes[s] = 0;
    }
    for (var a = this.indexOfGroup(n + 1), c = (s = 0, e.length); s < c; s++) this.tag.insertRule(a, e[s]) && (this.groupSizes[n]++, a++);
  }, t.prototype.clearGroup = function(n) {
    if (n < this.length) {
      var e = this.groupSizes[n], r = this.indexOfGroup(n), o = r + e;
      this.groupSizes[n] = 0;
      for (var i = r; i < o; i++) this.tag.deleteRule(r);
    }
  }, t.prototype.getGroup = function(n) {
    var e = "";
    if (n >= this.length || this.groupSizes[n] === 0) return e;
    for (var r = this.groupSizes[n], o = this.indexOfGroup(n), i = o + r, s = o; s < i; s++) e += "".concat(this.tag.getRule(s)).concat(Hs);
    return e;
  }, t;
}(), $0 = 1 << 30, Gr = /* @__PURE__ */ new Map(), mo = /* @__PURE__ */ new Map(), Kr = 1, Ir = function(t) {
  if (Gr.has(t)) return Gr.get(t);
  for (; mo.has(Kr); ) Kr++;
  var n = Kr++;
  if (process.env.NODE_ENV !== "production" && ((0 | n) < 0 || n > $0)) throw Xn(16, "".concat(n));
  return Gr.set(t, n), mo.set(n, t), n;
}, G0 = function(t, n) {
  Kr = n + 1, Gr.set(t, n), mo.set(n, t);
}, K0 = "style[".concat(wn, "][").concat(pl, '="').concat(Uo, '"]'), Z0 = new RegExp("^".concat(wn, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), J0 = function(t, n, e) {
  for (var r, o = e.split(","), i = 0, s = o.length; i < s; i++) (r = o[i]) && t.registerName(n, r);
}, Q0 = function(t, n) {
  for (var e, r = ((e = n.textContent) !== null && e !== void 0 ? e : "").split(Hs), o = [], i = 0, s = r.length; i < s; i++) {
    var a = r[i].trim();
    if (a) {
      var c = a.match(Z0);
      if (c) {
        var l = 0 | parseInt(c[1], 10), f = c[2];
        l !== 0 && (G0(f, l), J0(t, f, c[3]), t.getTag().insertRules(l, o)), o.length = 0;
      } else o.push(a);
    }
  }
}, Pa = function(t) {
  for (var n = document.querySelectorAll(K0), e = 0, r = n.length; e < r; e++) {
    var o = n[e];
    o && o.getAttribute(wn) !== xl && (Q0(t, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function ed() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var El = function(t) {
  var n = document.head, e = t || n, r = document.createElement("style"), o = function(a) {
    var c = Array.from(a.querySelectorAll("style[".concat(wn, "]")));
    return c[c.length - 1];
  }(e), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(wn, xl), r.setAttribute(pl, Uo);
  var s = ed();
  return s && r.setAttribute("nonce", s), e.insertBefore(r, i), r;
}, td = function() {
  function t(n) {
    this.element = El(n), this.element.appendChild(document.createTextNode("")), this.sheet = function(e) {
      if (e.sheet) return e.sheet;
      for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
        var s = r[o];
        if (s.ownerNode === e) return s;
      }
      throw Xn(17);
    }(this.element), this.length = 0;
  }
  return t.prototype.insertRule = function(n, e) {
    try {
      return this.sheet.insertRule(e, n), this.length++, !0;
    } catch {
      return !1;
    }
  }, t.prototype.deleteRule = function(n) {
    this.sheet.deleteRule(n), this.length--;
  }, t.prototype.getRule = function(n) {
    var e = this.sheet.cssRules[n];
    return e && e.cssText ? e.cssText : "";
  }, t;
}(), nd = function() {
  function t(n) {
    this.element = El(n), this.nodes = this.element.childNodes, this.length = 0;
  }
  return t.prototype.insertRule = function(n, e) {
    if (n <= this.length && n >= 0) {
      var r = document.createTextNode(e);
      return this.element.insertBefore(r, this.nodes[n] || null), this.length++, !0;
    }
    return !1;
  }, t.prototype.deleteRule = function(n) {
    this.element.removeChild(this.nodes[n]), this.length--;
  }, t.prototype.getRule = function(n) {
    return n < this.length ? this.nodes[n].textContent : "";
  }, t;
}(), rd = function() {
  function t(n) {
    this.rules = [], this.length = 0;
  }
  return t.prototype.insertRule = function(n, e) {
    return n <= this.length && (this.rules.splice(n, 0, e), this.length++, !0);
  }, t.prototype.deleteRule = function(n) {
    this.rules.splice(n, 1), this.length--;
  }, t.prototype.getRule = function(n) {
    return n < this.length ? this.rules[n] : "";
  }, t;
}(), ka = po, od = { isServer: !po, useCSSOMInjection: !P0 }, _l = function() {
  function t(n, e, r) {
    n === void 0 && (n = Ln), e === void 0 && (e = {});
    var o = this;
    this.options = st(st({}, od), n), this.gs = e, this.names = new Map(r), this.server = !!n.isServer, !this.server && po && ka && (ka = !1, Pa(this)), qs(this, function() {
      return function(i) {
        for (var s = i.getTag(), a = s.length, c = "", l = function(d) {
          var u = function(w) {
            return mo.get(w);
          }(d);
          if (u === void 0) return "continue";
          var v = i.names.get(u), g = s.getGroup(d);
          if (v === void 0 || !v.size || g.length === 0) return "continue";
          var h = "".concat(wn, ".g").concat(d, '[id="').concat(u, '"]'), x = "";
          v !== void 0 && v.forEach(function(w) {
            w.length > 0 && (x += "".concat(w, ","));
          }), c += "".concat(g).concat(h, '{content:"').concat(x, '"}').concat(Hs);
        }, f = 0; f < a; f++) l(f);
        return c;
      }(o);
    });
  }
  return t.registerId = function(n) {
    return Ir(n);
  }, t.prototype.rehydrate = function() {
    !this.server && po && Pa(this);
  }, t.prototype.reconstructWithOptions = function(n, e) {
    return e === void 0 && (e = !0), new t(st(st({}, this.options), n), this.gs, e && this.names || void 0);
  }, t.prototype.allocateGSInstance = function(n) {
    return this.gs[n] = (this.gs[n] || 0) + 1;
  }, t.prototype.getTag = function() {
    return this.tag || (this.tag = (n = function(e) {
      var r = e.useCSSOMInjection, o = e.target;
      return e.isServer ? new rd(o) : r ? new td(o) : new nd(o);
    }(this.options), new Y0(n)));
    var n;
  }, t.prototype.hasNameForId = function(n, e) {
    return this.names.has(n) && this.names.get(n).has(e);
  }, t.prototype.registerName = function(n, e) {
    if (Ir(n), this.names.has(n)) this.names.get(n).add(e);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(e), this.names.set(n, r);
    }
  }, t.prototype.insertRules = function(n, e, r) {
    this.registerName(n, e), this.getTag().insertRules(Ir(n), r);
  }, t.prototype.clearNames = function(n) {
    this.names.has(n) && this.names.get(n).clear();
  }, t.prototype.clearRules = function(n) {
    this.getTag().clearGroup(Ir(n)), this.clearNames(n);
  }, t.prototype.clearTag = function() {
    this.tag = void 0;
  }, t;
}(), id = /&/g, sd = /^\s*\/\/.*$/gm;
function Cl(t, n) {
  return t.map(function(e) {
    return e.type === "rule" && (e.value = "".concat(n, " ").concat(e.value), e.value = e.value.replaceAll(",", ",".concat(n, " ")), e.props = e.props.map(function(r) {
      return "".concat(n, " ").concat(r);
    })), Array.isArray(e.children) && e.type !== "@keyframes" && (e.children = Cl(e.children, n)), e;
  });
}
function ad(t) {
  var n, e, r, o = Ln, i = o.options, s = i === void 0 ? Ln : i, a = o.plugins, c = a === void 0 ? qo : a, l = function(u, v, g) {
    return g.startsWith(e) && g.endsWith(e) && g.replaceAll(e, "").length > 0 ? ".".concat(n) : u;
  }, f = c.slice();
  f.push(function(u) {
    u.type === Fo && u.value.includes("&") && (u.props[0] = u.props[0].replace(id, e).replace(r, l));
  }), s.prefix && f.push(O0), f.push(C0);
  var d = function(u, v, g, h) {
    v === void 0 && (v = ""), g === void 0 && (g = ""), h === void 0 && (h = "&"), n = h, e = v, r = new RegExp("\\".concat(e, "\\b"), "g");
    var x = u.replace(sd, ""), w = E0(g || v ? "".concat(g, " ").concat(v, " { ").concat(x, " }") : x);
    s.namespace && (w = Cl(w, s.namespace));
    var S = [];
    return xo(w, A0(f.concat(T0(function(p) {
      return S.push(p);
    })))), S;
  };
  return d.hash = c.length ? c.reduce(function(u, v) {
    return v.name || Xn(15), fn(u, v.name);
  }, ml).toString() : "", d;
}
var cd = new _l(), zi = ad(), Al = Fe.createContext({ shouldForwardProp: void 0, styleSheet: cd, stylis: zi });
Al.Consumer;
Fe.createContext(void 0);
function Ia() {
  return Qt(Al);
}
var Na = function() {
  function t(n, e) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = zi);
      var s = r.name + i.hash;
      o.hasNameForId(r.id, s) || o.insertRules(r.id, s, i(r.rules, s, "@keyframes"));
    }, this.name = n, this.id = "sc-keyframes-".concat(n), this.rules = e, qs(this, function() {
      throw Xn(12, String(r.name));
    });
  }
  return t.prototype.getName = function(n) {
    return n === void 0 && (n = zi), this.name + n.hash;
  }, t;
}(), ld = function(t) {
  return t >= "A" && t <= "Z";
};
function ja(t) {
  for (var n = "", e = 0; e < t.length; e++) {
    var r = t[e];
    if (e === 1 && r === "-" && t[0] === "-") return t;
    ld(r) ? n += "-" + r.toLowerCase() : n += r;
  }
  return n.startsWith("ms-") ? "-" + n : n;
}
var Tl = function(t) {
  return t == null || t === !1 || t === "";
}, Ol = function(t) {
  var n, e, r = [];
  for (var o in t) {
    var i = t[o];
    t.hasOwnProperty(o) && !Tl(i) && (Array.isArray(i) && i.isCss || Dn(i) ? r.push("".concat(ja(o), ":"), i, ";") : Bn(i) ? r.push.apply(r, Nn(Nn(["".concat(o, " {")], Ol(i), !1), ["}"], !1)) : r.push("".concat(ja(o), ": ").concat((n = o, (e = i) == null || typeof e == "boolean" || e === "" ? "" : typeof e != "number" || e === 0 || n in R0 || n.startsWith("--") ? String(e).trim() : "".concat(e, "px")), ";")));
  }
  return r;
};
function gn(t, n, e, r) {
  if (Tl(t)) return [];
  if (Us(t)) return [".".concat(t.styledComponentId)];
  if (Dn(t)) {
    if (!Dn(i = t) || i.prototype && i.prototype.isReactComponent || !n) return [t];
    var o = t(n);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof Na || Bn(o) || o === null || console.error("".concat(vl(t), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), gn(o, n, e, r);
  }
  var i;
  return t instanceof Na ? e ? (t.inject(e, r), [t.getName(r)]) : [t] : Bn(t) ? Ol(t) : Array.isArray(t) ? Array.prototype.concat.apply(qo, t.map(function(s) {
    return gn(s, n, e, r);
  })) : [t.toString()];
}
function ud(t) {
  for (var n = 0; n < t.length; n += 1) {
    var e = t[n];
    if (Dn(e) && !Us(e)) return !1;
  }
  return !0;
}
var fd = gl(Uo), dd = function() {
  function t(n, e, r) {
    this.rules = n, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && ud(n), this.componentId = e, this.baseHash = fn(fd, e), this.baseStyle = r, _l.registerId(e);
  }
  return t.prototype.generateAndInjectStyles = function(n, e, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(n, e, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && e.hasNameForId(this.componentId, this.staticRulesId)) o = hn(o, this.staticRulesId);
    else {
      var i = Ra(gn(this.rules, n, e, r)), s = Bi(fn(this.baseHash, i) >>> 0);
      if (!e.hasNameForId(this.componentId, s)) {
        var a = r(i, ".".concat(s), void 0, this.componentId);
        e.insertRules(this.componentId, s, a);
      }
      o = hn(o, s), this.staticRulesId = s;
    }
    else {
      for (var c = fn(this.baseHash, r.hash), l = "", f = 0; f < this.rules.length; f++) {
        var d = this.rules[f];
        if (typeof d == "string") l += d, process.env.NODE_ENV !== "production" && (c = fn(c, d));
        else if (d) {
          var u = Ra(gn(d, n, e, r));
          c = fn(c, u + f), l += u;
        }
      }
      if (l) {
        var v = Bi(c >>> 0);
        e.hasNameForId(this.componentId, v) || e.insertRules(this.componentId, v, r(l, ".".concat(v), void 0, this.componentId)), o = hn(o, v);
      }
    }
    return o;
  }, t;
}(), Rl = Fe.createContext(void 0);
Rl.Consumer;
var xi = {}, Ma = /* @__PURE__ */ new Set();
function hd(t, n, e) {
  var r = Us(t), o = t, i = !hi(t), s = n.attrs, a = s === void 0 ? qo : s, c = n.componentId, l = c === void 0 ? function(C, y) {
    var R = typeof C != "string" ? "sc" : _a(C);
    xi[R] = (xi[R] || 0) + 1;
    var _ = "".concat(R, "-").concat(L0(Uo + R + xi[R]));
    return y ? "".concat(y, "-").concat(_) : _;
  }(n.displayName, n.parentComponentId) : c, f = n.displayName, d = f === void 0 ? function(C) {
    return hi(C) ? "styled.".concat(C) : "Styled(".concat(vl(C), ")");
  }(t) : f, u = n.displayName && n.componentId ? "".concat(_a(n.displayName), "-").concat(n.componentId) : n.componentId || l, v = r && o.attrs ? o.attrs.concat(a).filter(Boolean) : a, g = n.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var h = o.shouldForwardProp;
    if (n.shouldForwardProp) {
      var x = n.shouldForwardProp;
      g = function(C, y) {
        return h(C, y) && x(C, y);
      };
    } else g = h;
  }
  var w = new dd(e, u, r ? o.componentStyle : void 0);
  function S(C, y) {
    return function(R, _, j) {
      var B = R.attrs, X = R.componentStyle, re = R.defaultProps, $ = R.foldedComponentIds, D = R.styledComponentId, W = R.target, H = Fe.useContext(Rl), Q = Ia(), K = R.shouldForwardProp || Q.shouldForwardProp;
      process.env.NODE_ENV !== "production" && pa(D);
      var Z = I0(_, H, re) || Ln, J = function(fe, pe, P) {
        for (var F, T = st(st({}, pe), { className: void 0, theme: P }), N = 0; N < fe.length; N += 1) {
          var O = Dn(F = fe[N]) ? F(T) : F;
          for (var z in O) T[z] = z === "className" ? hn(T[z], O[z]) : z === "style" ? st(st({}, T[z]), O[z]) : O[z];
        }
        return pe.className && (T.className = hn(T.className, pe.className)), T;
      }(B, _, Z), ae = J.as || W, oe = {};
      for (var G in J) J[G] === void 0 || G[0] === "$" || G === "as" || G === "theme" && J.theme === Z || (G === "forwardedAs" ? oe.as = J.forwardedAs : K && !K(G, ae) || (oe[G] = J[G], K || process.env.NODE_ENV !== "development" || u0(G) || Ma.has(G) || !Di.has(ae) || (Ma.add(G), console.warn('styled-components: it looks like an unknown prop "'.concat(G, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var ee = function(fe, pe) {
        var P = Ia(), F = fe.generateAndInjectStyles(pe, P.styleSheet, P.stylis);
        return process.env.NODE_ENV !== "production" && pa(F), F;
      }(X, J);
      process.env.NODE_ENV !== "production" && R.warnTooManyClasses && R.warnTooManyClasses(ee);
      var he = hn($, D);
      return ee && (he += " " + ee), J.className && (he += " " + J.className), oe[hi(ae) && !Di.has(ae) ? "class" : "className"] = he, j && (oe.ref = j), e0(ae, oe);
    }(p, C, y);
  }
  S.displayName = d;
  var p = Fe.forwardRef(S);
  return p.attrs = v, p.componentStyle = w, p.displayName = d, p.shouldForwardProp = g, p.foldedComponentIds = r ? hn(o.foldedComponentIds, o.styledComponentId) : "", p.styledComponentId = u, p.target = r ? o.target : t, Object.defineProperty(p, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(C) {
    this._foldedDefaultProps = r ? function(y) {
      for (var R = [], _ = 1; _ < arguments.length; _++) R[_ - 1] = arguments[_];
      for (var j = 0, B = R; j < B.length; j++) Fi(y, B[j], !0);
      return y;
    }({}, o.defaultProps, C) : C;
  } }), process.env.NODE_ENV !== "production" && (k0(d, u), p.warnTooManyClasses = /* @__PURE__ */ function(C, y) {
    var R = {}, _ = !1;
    return function(j) {
      if (!_ && (R[j] = !0, Object.keys(R).length >= 200)) {
        var B = y ? ' with the id of "'.concat(y, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(C).concat(B, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), _ = !0, R = {};
      }
    };
  }(d, u)), qs(p, function() {
    return ".".concat(p.styledComponentId);
  }), i && wl(p, t, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), p;
}
function La(t, n) {
  for (var e = [t[0]], r = 0, o = n.length; r < o; r += 1) e.push(n[r], t[r + 1]);
  return e;
}
var Da = function(t) {
  return Object.assign(t, { isCss: !0 });
};
function xd(t) {
  for (var n = [], e = 1; e < arguments.length; e++) n[e - 1] = arguments[e];
  if (Dn(t) || Bn(t)) return Da(gn(La(qo, Nn([t], n, !0))));
  var r = t;
  return n.length === 0 && r.length === 1 && typeof r[0] == "string" ? gn(r) : Da(gn(La(r, n)));
}
function Vi(t, n, e) {
  if (e === void 0 && (e = Ln), !n) throw Xn(1, n);
  var r = function(o) {
    for (var i = [], s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
    return t(n, e, xd.apply(void 0, Nn([o], i, !1)));
  };
  return r.attrs = function(o) {
    return Vi(t, n, st(st({}, e), { attrs: Array.prototype.concat(e.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return Vi(t, n, st(st({}, e), o));
  }, r;
}
var Pl = function(t) {
  return Vi(hd, t);
}, At = Pl;
Di.forEach(function(t) {
  At[t] = Pl(t);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Nr = "__sc-".concat(wn, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[Nr] || (window[Nr] = 0), window[Nr] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Nr] += 1);
const wr = go;
function go(t, n) {
  const e = vo();
  return go = function(r, o) {
    return r = r - 108, e[r];
  }, go(t, n);
}
(function(t, n) {
  const e = go, r = t();
  for (; ; )
    try {
      if (-parseInt(e(108)) / 1 * (-parseInt(e(109)) / 2) + parseInt(e(119)) / 3 + parseInt(e(120)) / 4 + parseInt(e(112)) / 5 + parseInt(e(118)) / 6 + -parseInt(e(113)) / 7 * (parseInt(e(114)) / 8) + -parseInt(e(111)) / 9 * (parseInt(e(117)) / 10) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(vo, 780214);
const pd = At[wr(110)]`
  flex-direction: column;
  border-radius: 15px;
  border: 3px solid #a0beeb;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
  justify-items: center;
  align-items: center;
`, md = At[wr(110)]`
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
`, gd = At[wr(116)]`
  border-radius: 7px;
  display: inline;
  padding: 0;
  &:focus-visible {
    outline: none;
  }
`, vd = At[wr(115)]`
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
function vo() {
  const t = ["2veZewk", "div", "9bzLDZq", "378950YIHaIw", "7dUeqTa", "3307680hMQepW", "span", "canvas", "4229740cOlJbC", "2880YqFHjq", "3838482IbPRQl", "1011908HHpoaS", "7907rukbVO"];
  return vo = function() {
    return t;
  }, vo();
}
const yd = At[wr(110)]`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  pointer-events: none;
`, Bt = /* @__PURE__ */ Object.create(null);
Bt.open = "0";
Bt.close = "1";
Bt.ping = "2";
Bt.pong = "3";
Bt.message = "4";
Bt.upgrade = "5";
Bt.noop = "6";
const Zr = /* @__PURE__ */ Object.create(null);
Object.keys(Bt).forEach((t) => {
  Zr[Bt[t]] = t;
});
const Hi = { type: "error", data: "parser error" }, kl = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", Il = typeof ArrayBuffer == "function", Nl = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t && t.buffer instanceof ArrayBuffer, Ws = ({ type: t, data: n }, e, r) => kl && n instanceof Blob ? e ? r(n) : Ba(n, r) : Il && (n instanceof ArrayBuffer || Nl(n)) ? e ? r(n) : Ba(new Blob([n]), r) : r(Bt[t] + (n || "")), Ba = (t, n) => {
  const e = new FileReader();
  return e.onload = function() {
    const r = e.result.split(",")[1];
    n("b" + (r || ""));
  }, e.readAsDataURL(t);
};
function Fa(t) {
  return t instanceof Uint8Array ? t : t instanceof ArrayBuffer ? new Uint8Array(t) : new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
}
let pi;
function bd(t, n) {
  if (kl && t.data instanceof Blob)
    return t.data.arrayBuffer().then(Fa).then(n);
  if (Il && (t.data instanceof ArrayBuffer || Nl(t.data)))
    return n(Fa(t.data));
  Ws(t, !1, (e) => {
    pi || (pi = new TextEncoder()), n(pi.encode(e));
  });
}
const za = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ur = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let t = 0; t < za.length; t++)
  ur[za.charCodeAt(t)] = t;
const Sd = (t) => {
  let n = t.length * 0.75, e = t.length, r, o = 0, i, s, a, c;
  t[t.length - 1] === "=" && (n--, t[t.length - 2] === "=" && n--);
  const l = new ArrayBuffer(n), f = new Uint8Array(l);
  for (r = 0; r < e; r += 4)
    i = ur[t.charCodeAt(r)], s = ur[t.charCodeAt(r + 1)], a = ur[t.charCodeAt(r + 2)], c = ur[t.charCodeAt(r + 3)], f[o++] = i << 2 | s >> 4, f[o++] = (s & 15) << 4 | a >> 2, f[o++] = (a & 3) << 6 | c & 63;
  return l;
}, wd = typeof ArrayBuffer == "function", Xs = (t, n) => {
  if (typeof t != "string")
    return {
      type: "message",
      data: jl(t, n)
    };
  const e = t.charAt(0);
  return e === "b" ? {
    type: "message",
    data: Ed(t.substring(1), n)
  } : Zr[e] ? t.length > 1 ? {
    type: Zr[e],
    data: t.substring(1)
  } : {
    type: Zr[e]
  } : Hi;
}, Ed = (t, n) => {
  if (wd) {
    const e = Sd(t);
    return jl(e, n);
  } else
    return { base64: !0, data: t };
}, jl = (t, n) => {
  switch (n) {
    case "blob":
      return t instanceof Blob ? t : new Blob([t]);
    case "arraybuffer":
    default:
      return t instanceof ArrayBuffer ? t : t.buffer;
  }
}, Ml = "", _d = (t, n) => {
  const e = t.length, r = new Array(e);
  let o = 0;
  t.forEach((i, s) => {
    Ws(i, !1, (a) => {
      r[s] = a, ++o === e && n(r.join(Ml));
    });
  });
}, Cd = (t, n) => {
  const e = t.split(Ml), r = [];
  for (let o = 0; o < e.length; o++) {
    const i = Xs(e[o], n);
    if (r.push(i), i.type === "error")
      break;
  }
  return r;
};
function Ad() {
  return new TransformStream({
    transform(t, n) {
      bd(t, (e) => {
        const r = e.length;
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
        t.data && typeof t.data != "string" && (o[0] |= 128), n.enqueue(o), n.enqueue(e);
      });
    }
  });
}
let mi;
function jr(t) {
  return t.reduce((n, e) => n + e.length, 0);
}
function Mr(t, n) {
  if (t[0].length === n)
    return t.shift();
  const e = new Uint8Array(n);
  let r = 0;
  for (let o = 0; o < n; o++)
    e[o] = t[0][r++], r === t[0].length && (t.shift(), r = 0);
  return t.length && r < t[0].length && (t[0] = t[0].slice(r)), e;
}
function Td(t, n) {
  mi || (mi = new TextDecoder());
  const e = [];
  let r = 0, o = -1, i = !1;
  return new TransformStream({
    transform(s, a) {
      for (e.push(s); ; ) {
        if (r === 0) {
          if (jr(e) < 1)
            break;
          const c = Mr(e, 1);
          i = (c[0] & 128) === 128, o = c[0] & 127, o < 126 ? r = 3 : o === 126 ? r = 1 : r = 2;
        } else if (r === 1) {
          if (jr(e) < 2)
            break;
          const c = Mr(e, 2);
          o = new DataView(c.buffer, c.byteOffset, c.length).getUint16(0), r = 3;
        } else if (r === 2) {
          if (jr(e) < 8)
            break;
          const c = Mr(e, 8), l = new DataView(c.buffer, c.byteOffset, c.length), f = l.getUint32(0);
          if (f > Math.pow(2, 21) - 1) {
            a.enqueue(Hi);
            break;
          }
          o = f * Math.pow(2, 32) + l.getUint32(4), r = 3;
        } else {
          if (jr(e) < o)
            break;
          const c = Mr(e, o);
          a.enqueue(Xs(i ? c : mi.decode(c), n)), r = 0;
        }
        if (o === 0 || o > t) {
          a.enqueue(Hi);
          break;
        }
      }
    }
  });
}
const Ll = 4;
function qe(t) {
  if (t) return Od(t);
}
function Od(t) {
  for (var n in qe.prototype)
    t[n] = qe.prototype[n];
  return t;
}
qe.prototype.on = qe.prototype.addEventListener = function(t, n) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(n), this;
};
qe.prototype.once = function(t, n) {
  function e() {
    this.off(t, e), n.apply(this, arguments);
  }
  return e.fn = n, this.on(t, e), this;
};
qe.prototype.off = qe.prototype.removeListener = qe.prototype.removeAllListeners = qe.prototype.removeEventListener = function(t, n) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var e = this._callbacks["$" + t];
  if (!e) return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + t], this;
  for (var r, o = 0; o < e.length; o++)
    if (r = e[o], r === n || r.fn === n) {
      e.splice(o, 1);
      break;
    }
  return e.length === 0 && delete this._callbacks["$" + t], this;
};
qe.prototype.emit = function(t) {
  this._callbacks = this._callbacks || {};
  for (var n = new Array(arguments.length - 1), e = this._callbacks["$" + t], r = 1; r < arguments.length; r++)
    n[r - 1] = arguments[r];
  if (e) {
    e = e.slice(0);
    for (var r = 0, o = e.length; r < o; ++r)
      e[r].apply(this, n);
  }
  return this;
};
qe.prototype.emitReserved = qe.prototype.emit;
qe.prototype.listeners = function(t) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [];
};
qe.prototype.hasListeners = function(t) {
  return !!this.listeners(t).length;
};
const Wo = typeof Promise == "function" && typeof Promise.resolve == "function" ? (n) => Promise.resolve().then(n) : (n, e) => e(n, 0), xt = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), Rd = "arraybuffer";
function Dl(t, ...n) {
  return n.reduce((e, r) => (t.hasOwnProperty(r) && (e[r] = t[r]), e), {});
}
const Pd = xt.setTimeout, kd = xt.clearTimeout;
function Xo(t, n) {
  n.useNativeTimers ? (t.setTimeoutFn = Pd.bind(xt), t.clearTimeoutFn = kd.bind(xt)) : (t.setTimeoutFn = xt.setTimeout.bind(xt), t.clearTimeoutFn = xt.clearTimeout.bind(xt));
}
const Id = 1.33;
function Nd(t) {
  return typeof t == "string" ? jd(t) : Math.ceil((t.byteLength || t.size) * Id);
}
function jd(t) {
  let n = 0, e = 0;
  for (let r = 0, o = t.length; r < o; r++)
    n = t.charCodeAt(r), n < 128 ? e += 1 : n < 2048 ? e += 2 : n < 55296 || n >= 57344 ? e += 3 : (r++, e += 4);
  return e;
}
function Bl() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function Md(t) {
  let n = "";
  for (let e in t)
    t.hasOwnProperty(e) && (n.length && (n += "&"), n += encodeURIComponent(e) + "=" + encodeURIComponent(t[e]));
  return n;
}
function Ld(t) {
  let n = {}, e = t.split("&");
  for (let r = 0, o = e.length; r < o; r++) {
    let i = e[r].split("=");
    n[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
  }
  return n;
}
class Dd extends Error {
  constructor(n, e, r) {
    super(n), this.description = e, this.context = r, this.type = "TransportError";
  }
}
class Ys extends qe {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(n) {
    super(), this.writable = !1, Xo(this, n), this.opts = n, this.query = n.query, this.socket = n.socket, this.supportsBinary = !n.forceBase64;
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
  onError(n, e, r) {
    return super.emitReserved("error", new Dd(n, e, r)), this;
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
    const e = Xs(n, this.socket.binaryType);
    this.onPacket(e);
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
  createUri(n, e = {}) {
    return n + "://" + this._hostname() + this._port() + this.opts.path + this._query(e);
  }
  _hostname() {
    const n = this.opts.hostname;
    return n.indexOf(":") === -1 ? n : "[" + n + "]";
  }
  _port() {
    return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : "";
  }
  _query(n) {
    const e = Md(n);
    return e.length ? "?" + e : "";
  }
}
class Bd extends Ys {
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
    const e = () => {
      this.readyState = "paused", n();
    };
    if (this._polling || !this.writable) {
      let r = 0;
      this._polling && (r++, this.once("pollComplete", function() {
        --r || e();
      })), this.writable || (r++, this.once("drain", function() {
        --r || e();
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
  onData(n) {
    const e = (r) => {
      if (this.readyState === "opening" && r.type === "open" && this.onOpen(), r.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(r);
    };
    Cd(n, this.socket.binaryType).forEach(e), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
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
    this.writable = !1, _d(n, (e) => {
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
    const n = this.opts.secure ? "https" : "http", e = this.query || {};
    return this.opts.timestampRequests !== !1 && (e[this.opts.timestampParam] = Bl()), !this.supportsBinary && !e.sid && (e.b64 = 1), this.createUri(n, e);
  }
}
let Fl = !1;
try {
  Fl = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const Fd = Fl;
function zd() {
}
class Vd extends Bd {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(n) {
    if (super(n), typeof location < "u") {
      const e = location.protocol === "https:";
      let r = location.port;
      r || (r = e ? "443" : "80"), this.xd = typeof location < "u" && n.hostname !== location.hostname || r !== n.port;
    }
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(n, e) {
    const r = this.request({
      method: "POST",
      data: n
    });
    r.on("success", e), r.on("error", (o, i) => {
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
    n.on("data", this.onData.bind(this)), n.on("error", (e, r) => {
      this.onError("xhr poll error", e, r);
    }), this.pollXhr = n;
  }
}
let Pn = class Jr extends qe {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(n, e, r) {
    super(), this.createRequest = n, Xo(this, r), this._opts = r, this._method = r.method || "GET", this._uri = e, this._data = r.data !== void 0 ? r.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var n;
    const e = Dl(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    e.xdomain = !!this._opts.xd;
    const r = this._xhr = this.createRequest(e);
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
    typeof document < "u" && (this._index = Jr.requestsCount++, Jr.requests[this._index] = this);
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
      if (this._xhr.onreadystatechange = zd, n)
        try {
          this._xhr.abort();
        } catch {
        }
      typeof document < "u" && delete Jr.requests[this._index], this._xhr = null;
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
Pn.requestsCount = 0;
Pn.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", Va);
  else if (typeof addEventListener == "function") {
    const t = "onpagehide" in xt ? "pagehide" : "unload";
    addEventListener(t, Va, !1);
  }
}
function Va() {
  for (let t in Pn.requests)
    Pn.requests.hasOwnProperty(t) && Pn.requests[t].abort();
}
const Hd = function() {
  const t = zl({
    xdomain: !1
  });
  return t && t.responseType !== null;
}();
class Ud extends Vd {
  constructor(n) {
    super(n);
    const e = n && n.forceBase64;
    this.supportsBinary = Hd && !e;
  }
  request(n = {}) {
    return Object.assign(n, { xd: this.xd }, this.opts), new Pn(zl, this.uri(), n);
  }
}
function zl(t) {
  const n = t.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!n || Fd))
      return new XMLHttpRequest();
  } catch {
  }
  if (!n)
    try {
      return new xt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const Vl = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class qd extends Ys {
  get name() {
    return "websocket";
  }
  doOpen() {
    const n = this.uri(), e = this.opts.protocols, r = Vl ? {} : Dl(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(n, e, r);
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
    for (let e = 0; e < n.length; e++) {
      const r = n[e], o = e === n.length - 1;
      Ws(r, this.supportsBinary, (i) => {
        try {
          this.doWrite(r, i);
        } catch {
        }
        o && Wo(() => {
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
    const n = this.opts.secure ? "wss" : "ws", e = this.query || {};
    return this.opts.timestampRequests && (e[this.opts.timestampParam] = Bl()), this.supportsBinary || (e.b64 = 1), this.createUri(n, e);
  }
}
const gi = xt.WebSocket || xt.MozWebSocket;
class Wd extends qd {
  createSocket(n, e, r) {
    return Vl ? new gi(n, e, r) : e ? new gi(n, e) : new gi(n);
  }
  doWrite(n, e) {
    this.ws.send(e);
  }
}
class Xd extends Ys {
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
        const e = Td(Number.MAX_SAFE_INTEGER, this.socket.binaryType), r = n.readable.pipeThrough(e).getReader(), o = Ad();
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
    for (let e = 0; e < n.length; e++) {
      const r = n[e], o = e === n.length - 1;
      this._writer.write(r).then(() => {
        o && Wo(() => {
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
const Yd = {
  websocket: Wd,
  webtransport: Xd,
  polling: Ud
}, $d = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, Gd = [
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
function Ui(t) {
  if (t.length > 8e3)
    throw "URI too long";
  const n = t, e = t.indexOf("["), r = t.indexOf("]");
  e != -1 && r != -1 && (t = t.substring(0, e) + t.substring(e, r).replace(/:/g, ";") + t.substring(r, t.length));
  let o = $d.exec(t || ""), i = {}, s = 14;
  for (; s--; )
    i[Gd[s]] = o[s] || "";
  return e != -1 && r != -1 && (i.source = n, i.host = i.host.substring(1, i.host.length - 1).replace(/;/g, ":"), i.authority = i.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), i.ipv6uri = !0), i.pathNames = Kd(i, i.path), i.queryKey = Zd(i, i.query), i;
}
function Kd(t, n) {
  const e = /\/{2,9}/g, r = n.replace(e, "/").split("/");
  return (n.slice(0, 1) == "/" || n.length === 0) && r.splice(0, 1), n.slice(-1) == "/" && r.splice(r.length - 1, 1), r;
}
function Zd(t, n) {
  const e = {};
  return n.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(r, o, i) {
    o && (e[o] = i);
  }), e;
}
const qi = typeof addEventListener == "function" && typeof removeEventListener == "function", Qr = [];
qi && addEventListener("offline", () => {
  Qr.forEach((t) => t());
}, !1);
class Jt extends qe {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(n, e) {
    if (super(), this.binaryType = Rd, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, n && typeof n == "object" && (e = n, n = null), n) {
      const r = Ui(n);
      e.hostname = r.host, e.secure = r.protocol === "https" || r.protocol === "wss", e.port = r.port, r.query && (e.query = r.query);
    } else e.host && (e.hostname = Ui(e.host).host);
    Xo(this, e), this.secure = e.secure != null ? e.secure : typeof location < "u" && location.protocol === "https:", e.hostname && !e.port && (e.port = this.secure ? "443" : "80"), this.hostname = e.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = e.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, e.transports.forEach((r) => {
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
    }, e), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = Ld(this.opts.query)), qi && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, Qr.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} name - transport name
   * @return {Transport}
   * @private
   */
  createTransport(n) {
    const e = Object.assign({}, this.opts.query);
    e.EIO = Ll, e.transport = n, this.id && (e.sid = this.id);
    const r = Object.assign({}, this.opts, {
      query: e,
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
    const n = this.opts.rememberUpgrade && Jt.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
    this.readyState = "opening";
    const e = this.createTransport(n);
    e.open(), this.setTransport(e);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(n) {
    this.transport && this.transport.removeAllListeners(), this.transport = n, n.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", (e) => this._onClose("transport close", e));
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    this.readyState = "open", Jt.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
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
          const e = new Error("server error");
          e.code = n.data, this._onError(e);
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
    let e = 1;
    for (let r = 0; r < this.writeBuffer.length; r++) {
      const o = this.writeBuffer[r].data;
      if (o && (e += Nd(o)), r > 0 && e > this._maxPayload)
        return this.writeBuffer.slice(0, r);
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
    const n = Date.now() > this._pingTimeoutTime;
    return n && (this._pingTimeoutTime = 0, Wo(() => {
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
  write(n, e, r) {
    return this._sendPacket("message", n, e, r), this;
  }
  /**
   * Sends a message. Alias of {@link Socket#write}.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  send(n, e, r) {
    return this._sendPacket("message", n, e, r), this;
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
  _sendPacket(n, e, r, o) {
    if (typeof e == "function" && (o = e, e = void 0), typeof r == "function" && (o = r, r = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    r = r || {}, r.compress = r.compress !== !1;
    const i = {
      type: n,
      data: e,
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
    }, e = () => {
      this.off("upgrade", e), this.off("upgradeError", e), n();
    }, r = () => {
      this.once("upgrade", e), this.once("upgradeError", e);
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
    if (Jt.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
      return this.transports.shift(), this._open();
    this.emitReserved("error", n), this._onClose("transport error", n);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  _onClose(n, e) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), qi && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const r = Qr.indexOf(this._offlineEventListener);
        r !== -1 && Qr.splice(r, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", n, e), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
Jt.protocol = Ll;
class Jd extends Jt {
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
    let e = this.createTransport(n), r = !1;
    Jt.priorWebsocketSuccess = !1;
    const o = () => {
      r || (e.send([{ type: "ping", data: "probe" }]), e.once("packet", (d) => {
        if (!r)
          if (d.type === "pong" && d.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", e), !e)
              return;
            Jt.priorWebsocketSuccess = e.name === "websocket", this.transport.pause(() => {
              r || this.readyState !== "closed" && (f(), this.setTransport(e), e.send([{ type: "upgrade" }]), this.emitReserved("upgrade", e), e = null, this.upgrading = !1, this.flush());
            });
          } else {
            const u = new Error("probe error");
            u.transport = e.name, this.emitReserved("upgradeError", u);
          }
      }));
    };
    function i() {
      r || (r = !0, f(), e.close(), e = null);
    }
    const s = (d) => {
      const u = new Error("probe error: " + d);
      u.transport = e.name, i(), this.emitReserved("upgradeError", u);
    };
    function a() {
      s("transport closed");
    }
    function c() {
      s("socket closed");
    }
    function l(d) {
      e && d.name !== e.name && i();
    }
    const f = () => {
      e.removeListener("open", o), e.removeListener("error", s), e.removeListener("close", a), this.off("close", c), this.off("upgrading", l);
    };
    e.once("open", o), e.once("error", s), e.once("close", a), this.once("close", c), this.once("upgrading", l), this._upgrades.indexOf("webtransport") !== -1 && n !== "webtransport" ? this.setTimeoutFn(() => {
      r || e.open();
    }, 200) : e.open();
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
    const e = [];
    for (let r = 0; r < n.length; r++)
      ~this.transports.indexOf(n[r]) && e.push(n[r]);
    return e;
  }
}
let Qd = class extends Jd {
  constructor(n, e = {}) {
    const r = typeof n == "object" ? n : e;
    (!r.transports || r.transports && typeof r.transports[0] == "string") && (r.transports = (r.transports || ["polling", "websocket", "webtransport"]).map((o) => Yd[o]).filter((o) => !!o)), super(n, r);
  }
};
function eh(t, n = "", e) {
  let r = t;
  e = e || typeof location < "u" && location, t == null && (t = e.protocol + "//" + e.host), typeof t == "string" && (t.charAt(0) === "/" && (t.charAt(1) === "/" ? t = e.protocol + t : t = e.host + t), /^(https?|wss?):\/\//.test(t) || (typeof e < "u" ? t = e.protocol + "//" + t : t = "https://" + t), r = Ui(t)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
  const i = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return r.id = r.protocol + "://" + i + ":" + r.port + n, r.href = r.protocol + "://" + i + (e && e.port === r.port ? "" : ":" + r.port), r;
}
const th = typeof ArrayBuffer == "function", nh = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer, Hl = Object.prototype.toString, rh = typeof Blob == "function" || typeof Blob < "u" && Hl.call(Blob) === "[object BlobConstructor]", oh = typeof File == "function" || typeof File < "u" && Hl.call(File) === "[object FileConstructor]";
function $s(t) {
  return th && (t instanceof ArrayBuffer || nh(t)) || rh && t instanceof Blob || oh && t instanceof File;
}
function eo(t, n) {
  if (!t || typeof t != "object")
    return !1;
  if (Array.isArray(t)) {
    for (let e = 0, r = t.length; e < r; e++)
      if (eo(t[e]))
        return !0;
    return !1;
  }
  if ($s(t))
    return !0;
  if (t.toJSON && typeof t.toJSON == "function" && arguments.length === 1)
    return eo(t.toJSON(), !0);
  for (const e in t)
    if (Object.prototype.hasOwnProperty.call(t, e) && eo(t[e]))
      return !0;
  return !1;
}
function ih(t) {
  const n = [], e = t.data, r = t;
  return r.data = Wi(e, n), r.attachments = n.length, { packet: r, buffers: n };
}
function Wi(t, n) {
  if (!t)
    return t;
  if ($s(t)) {
    const e = { _placeholder: !0, num: n.length };
    return n.push(t), e;
  } else if (Array.isArray(t)) {
    const e = new Array(t.length);
    for (let r = 0; r < t.length; r++)
      e[r] = Wi(t[r], n);
    return e;
  } else if (typeof t == "object" && !(t instanceof Date)) {
    const e = {};
    for (const r in t)
      Object.prototype.hasOwnProperty.call(t, r) && (e[r] = Wi(t[r], n));
    return e;
  }
  return t;
}
function sh(t, n) {
  return t.data = Xi(t.data, n), delete t.attachments, t;
}
function Xi(t, n) {
  if (!t)
    return t;
  if (t && t._placeholder === !0) {
    if (typeof t.num == "number" && t.num >= 0 && t.num < n.length)
      return n[t.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(t))
    for (let e = 0; e < t.length; e++)
      t[e] = Xi(t[e], n);
  else if (typeof t == "object")
    for (const e in t)
      Object.prototype.hasOwnProperty.call(t, e) && (t[e] = Xi(t[e], n));
  return t;
}
const ah = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], ch = 5;
var de;
(function(t) {
  t[t.CONNECT = 0] = "CONNECT", t[t.DISCONNECT = 1] = "DISCONNECT", t[t.EVENT = 2] = "EVENT", t[t.ACK = 3] = "ACK", t[t.CONNECT_ERROR = 4] = "CONNECT_ERROR", t[t.BINARY_EVENT = 5] = "BINARY_EVENT", t[t.BINARY_ACK = 6] = "BINARY_ACK";
})(de || (de = {}));
class lh {
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
    return (n.type === de.EVENT || n.type === de.ACK) && eo(n) ? this.encodeAsBinary({
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
    let e = "" + n.type;
    return (n.type === de.BINARY_EVENT || n.type === de.BINARY_ACK) && (e += n.attachments + "-"), n.nsp && n.nsp !== "/" && (e += n.nsp + ","), n.id != null && (e += n.id), n.data != null && (e += JSON.stringify(n.data, this.replacer)), e;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(n) {
    const e = ih(n), r = this.encodeAsString(e.packet), o = e.buffers;
    return o.unshift(r), o;
  }
}
function Ha(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
class Gs extends qe {
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
    let e;
    if (typeof n == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      e = this.decodeString(n);
      const r = e.type === de.BINARY_EVENT;
      r || e.type === de.BINARY_ACK ? (e.type = r ? de.EVENT : de.ACK, this.reconstructor = new uh(e), e.attachments === 0 && super.emitReserved("decoded", e)) : super.emitReserved("decoded", e);
    } else if ($s(n) || n.base64)
      if (this.reconstructor)
        e = this.reconstructor.takeBinaryData(n), e && (this.reconstructor = null, super.emitReserved("decoded", e));
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
    let e = 0;
    const r = {
      type: Number(n.charAt(0))
    };
    if (de[r.type] === void 0)
      throw new Error("unknown packet type " + r.type);
    if (r.type === de.BINARY_EVENT || r.type === de.BINARY_ACK) {
      const i = e + 1;
      for (; n.charAt(++e) !== "-" && e != n.length; )
        ;
      const s = n.substring(i, e);
      if (s != Number(s) || n.charAt(e) !== "-")
        throw new Error("Illegal attachments");
      r.attachments = Number(s);
    }
    if (n.charAt(e + 1) === "/") {
      const i = e + 1;
      for (; ++e && !(n.charAt(e) === "," || e === n.length); )
        ;
      r.nsp = n.substring(i, e);
    } else
      r.nsp = "/";
    const o = n.charAt(e + 1);
    if (o !== "" && Number(o) == o) {
      const i = e + 1;
      for (; ++e; ) {
        const s = n.charAt(e);
        if (s == null || Number(s) != s) {
          --e;
          break;
        }
        if (e === n.length)
          break;
      }
      r.id = Number(n.substring(i, e + 1));
    }
    if (n.charAt(++e)) {
      const i = this.tryParse(n.substr(e));
      if (Gs.isPayloadValid(r.type, i))
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
  static isPayloadValid(n, e) {
    switch (n) {
      case de.CONNECT:
        return Ha(e);
      case de.DISCONNECT:
        return e === void 0;
      case de.CONNECT_ERROR:
        return typeof e == "string" || Ha(e);
      case de.EVENT:
      case de.BINARY_EVENT:
        return Array.isArray(e) && (typeof e[0] == "number" || typeof e[0] == "string" && ah.indexOf(e[0]) === -1);
      case de.ACK:
      case de.BINARY_ACK:
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
class uh {
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
      const e = sh(this.reconPack, this.buffers);
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
const fh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: Gs,
  Encoder: lh,
  get PacketType() {
    return de;
  },
  protocol: ch
}, Symbol.toStringTag, { value: "Module" }));
function St(t, n, e) {
  return t.on(n, e), function() {
    t.off(n, e);
  };
}
const dh = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class Ul extends qe {
  /**
   * `Socket` constructor.
   */
  constructor(n, e, r) {
    super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = n, this.nsp = e, r && r.auth && (this.auth = r.auth), this._opts = Object.assign({}, r), this.io._autoConnect && this.open();
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
      St(n, "open", this.onopen.bind(this)),
      St(n, "packet", this.onpacket.bind(this)),
      St(n, "error", this.onerror.bind(this)),
      St(n, "close", this.onclose.bind(this))
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
  emit(n, ...e) {
    var r, o, i;
    if (dh.hasOwnProperty(n))
      throw new Error('"' + n.toString() + '" is a reserved event name');
    if (e.unshift(n), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(e), this;
    const s = {
      type: de.EVENT,
      data: e
    };
    if (s.options = {}, s.options.compress = this.flags.compress !== !1, typeof e[e.length - 1] == "function") {
      const f = this.ids++, d = e.pop();
      this._registerAckCallback(f, d), s.id = f;
    }
    const a = (o = (r = this.io.engine) === null || r === void 0 ? void 0 : r.transport) === null || o === void 0 ? void 0 : o.writable, c = this.connected && !(!((i = this.io.engine) === null || i === void 0) && i._hasPingExpired());
    return this.flags.volatile && !a || (c ? (this.notifyOutgoingListeners(s), this.packet(s)) : this.sendBuffer.push(s)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(n, e) {
    var r;
    const o = (r = this.flags.timeout) !== null && r !== void 0 ? r : this._opts.ackTimeout;
    if (o === void 0) {
      this.acks[n] = e;
      return;
    }
    const i = this.io.setTimeoutFn(() => {
      delete this.acks[n];
      for (let a = 0; a < this.sendBuffer.length; a++)
        this.sendBuffer[a].id === n && this.sendBuffer.splice(a, 1);
      e.call(this, new Error("operation has timed out"));
    }, o), s = (...a) => {
      this.io.clearTimeoutFn(i), e.apply(this, a);
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
  emitWithAck(n, ...e) {
    return new Promise((r, o) => {
      const i = (s, a) => s ? o(s) : r(a);
      i.withError = !0, e.push(i), this.emit(n, ...e);
    });
  }
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
  _addToQueue(n) {
    let e;
    typeof n[n.length - 1] == "function" && (e = n.pop());
    const r = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: n,
      flags: Object.assign({ fromQueue: !0 }, this.flags)
    };
    n.push((o, ...i) => r !== this._queue[0] ? void 0 : (o !== null ? r.tryCount > this._opts.retries && (this._queue.shift(), e && e(o)) : (this._queue.shift(), e && e(null, ...i)), r.pending = !1, this._drainQueue())), this._queue.push(r), this._drainQueue();
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
    const e = this._queue[0];
    e.pending && !n || (e.pending = !0, e.tryCount++, this.flags = e.flags, this.emit.apply(this, e.args));
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
  onclose(n, e) {
    this.connected = !1, delete this.id, this.emitReserved("disconnect", n, e), this._clearAcks();
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
    const e = n.data || [];
    n.id != null && e.push(this.ack(n.id)), this.connected ? this.emitEvent(e) : this.receiveBuffer.push(Object.freeze(e));
  }
  emitEvent(n) {
    if (this._anyListeners && this._anyListeners.length) {
      const e = this._anyListeners.slice();
      for (const r of e)
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
    const e = this;
    let r = !1;
    return function(...o) {
      r || (r = !0, e.packet({
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
    const e = this.acks[n.id];
    typeof e == "function" && (delete this.acks[n.id], e.withError && n.data.unshift(null), e.apply(this, n.data));
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(n, e) {
    this.id = n, this.recovered = e && this._pid === e, this._pid = e, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0);
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
      const e = this._anyListeners;
      for (let r = 0; r < e.length; r++)
        if (n === e[r])
          return e.splice(r, 1), this;
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
      const e = this._anyOutgoingListeners;
      for (let r = 0; r < e.length; r++)
        if (n === e[r])
          return e.splice(r, 1), this;
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
      const e = this._anyOutgoingListeners.slice();
      for (const r of e)
        r.apply(this, n.data);
    }
  }
}
function Yn(t) {
  t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0;
}
Yn.prototype.duration = function() {
  var t = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var n = Math.random(), e = Math.floor(n * this.jitter * t);
    t = (Math.floor(n * 10) & 1) == 0 ? t - e : t + e;
  }
  return Math.min(t, this.max) | 0;
};
Yn.prototype.reset = function() {
  this.attempts = 0;
};
Yn.prototype.setMin = function(t) {
  this.ms = t;
};
Yn.prototype.setMax = function(t) {
  this.max = t;
};
Yn.prototype.setJitter = function(t) {
  this.jitter = t;
};
class Yi extends qe {
  constructor(n, e) {
    var r;
    super(), this.nsps = {}, this.subs = [], n && typeof n == "object" && (e = n, n = void 0), e = e || {}, e.path = e.path || "/socket.io", this.opts = e, Xo(this, e), this.reconnection(e.reconnection !== !1), this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0), this.reconnectionDelay(e.reconnectionDelay || 1e3), this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3), this.randomizationFactor((r = e.randomizationFactor) !== null && r !== void 0 ? r : 0.5), this.backoff = new Yn({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(e.timeout == null ? 2e4 : e.timeout), this._readyState = "closed", this.uri = n;
    const o = e.parser || fh;
    this.encoder = new o.Encoder(), this.decoder = new o.Decoder(), this._autoConnect = e.autoConnect !== !1, this._autoConnect && this.open();
  }
  reconnection(n) {
    return arguments.length ? (this._reconnection = !!n, n || (this.skipReconnect = !0), this) : this._reconnection;
  }
  reconnectionAttempts(n) {
    return n === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = n, this);
  }
  reconnectionDelay(n) {
    var e;
    return n === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = n, (e = this.backoff) === null || e === void 0 || e.setMin(n), this);
  }
  randomizationFactor(n) {
    var e;
    return n === void 0 ? this._randomizationFactor : (this._randomizationFactor = n, (e = this.backoff) === null || e === void 0 || e.setJitter(n), this);
  }
  reconnectionDelayMax(n) {
    var e;
    return n === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = n, (e = this.backoff) === null || e === void 0 || e.setMax(n), this);
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
    this.engine = new Qd(this.uri, this.opts);
    const e = this.engine, r = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const o = St(e, "open", function() {
      r.onopen(), n && n();
    }), i = (a) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", a), n ? n(a) : this.maybeReconnectOnOpen();
    }, s = St(e, "error", i);
    if (this._timeout !== !1) {
      const a = this._timeout, c = this.setTimeoutFn(() => {
        o(), i(new Error("timeout")), e.close();
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
      St(n, "ping", this.onping.bind(this)),
      St(n, "data", this.ondata.bind(this)),
      St(n, "error", this.onerror.bind(this)),
      St(n, "close", this.onclose.bind(this)),
      // @ts-ignore
      St(this.decoder, "decoded", this.ondecoded.bind(this))
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
    } catch (e) {
      this.onclose("parse error", e);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(n) {
    Wo(() => {
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
  socket(n, e) {
    let r = this.nsps[n];
    return r ? this._autoConnect && !r.active && r.connect() : (r = new Ul(this, n, e), this.nsps[n] = r), r;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(n) {
    const e = Object.keys(this.nsps);
    for (const r of e)
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
    const e = this.encoder.encode(n);
    for (let r = 0; r < e.length; r++)
      this.engine.write(e[r], n.options);
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
  onclose(n, e) {
    var r;
    this.cleanup(), (r = this.engine) === null || r === void 0 || r.close(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", n, e), this._reconnection && !this.skipReconnect && this.reconnect();
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
      const e = this.backoff.duration();
      this._reconnecting = !0;
      const r = this.setTimeoutFn(() => {
        n.skipReconnect || (this.emitReserved("reconnect_attempt", n.backoff.attempts), !n.skipReconnect && n.open((o) => {
          o ? (n._reconnecting = !1, n.reconnect(), this.emitReserved("reconnect_error", o)) : n.onreconnect();
        }));
      }, e);
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
const rr = {};
function to(t, n) {
  typeof t == "object" && (n = t, t = void 0), n = n || {};
  const e = eh(t, n.path || "/socket.io"), r = e.source, o = e.id, i = e.path, s = rr[o] && i in rr[o].nsps, a = n.forceNew || n["force new connection"] || n.multiplex === !1 || s;
  let c;
  return a ? c = new Yi(r, n) : (rr[o] || (rr[o] = new Yi(r, n)), c = rr[o]), e.query && !n.query && (n.query = e.queryKey), c.socket(e.path, n);
}
Object.assign(to, {
  Manager: Yi,
  Socket: Ul,
  io: to,
  connect: to
});
var vi = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Ua;
function hh() {
  return Ua || (Ua = 1, function(t) {
    (function() {
      var n = {}.hasOwnProperty;
      function e() {
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
          return e.apply(null, i);
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
      t.exports ? (e.default = e, t.exports = e) : window.classNames = e;
    })();
  }(vi)), vi.exports;
}
var xh = hh();
const tt = /* @__PURE__ */ o0(xh);
function Ft() {
  return Ft = Object.assign ? Object.assign.bind() : function(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = arguments[n];
      for (var r in e) ({}).hasOwnProperty.call(e, r) && (t[r] = e[r]);
    }
    return t;
  }, Ft.apply(null, arguments);
}
function be(t) {
  "@babel/helpers - typeof";
  return be = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, be(t);
}
var ph = Symbol.for("react.element"), mh = Symbol.for("react.transitional.element"), gh = Symbol.for("react.fragment");
function vh(t) {
  return (
    // Base object type
    t && be(t) === "object" && // React Element type
    (t.$$typeof === ph || t.$$typeof === mh) && // React Fragment type
    t.type === gh
  );
}
var $i = {}, Ks = [], yh = function(n) {
  Ks.push(n);
};
function Zs(t, n) {
  if (process.env.NODE_ENV !== "production" && !t && console !== void 0) {
    var e = Ks.reduce(function(r, o) {
      return o(r ?? "", "warning");
    }, n);
    e && console.error("Warning: ".concat(e));
  }
}
function bh(t, n) {
  if (process.env.NODE_ENV !== "production" && !t && console !== void 0) {
    var e = Ks.reduce(function(r, o) {
      return o(r ?? "", "note");
    }, n);
    e && console.warn("Note: ".concat(e));
  }
}
function ql() {
  $i = {};
}
function Wl(t, n, e) {
  !n && !$i[e] && (t(!1, e), $i[e] = !0);
}
function tn(t, n) {
  Wl(Zs, t, n);
}
function Sh(t, n) {
  Wl(bh, t, n);
}
tn.preMessage = yh;
tn.resetWarned = ql;
tn.noteOnce = Sh;
function wh(t, n) {
  if (be(t) != "object" || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var r = e.call(t, n);
    if (be(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(t);
}
function Xl(t) {
  var n = wh(t, "string");
  return be(n) == "symbol" ? n : n + "";
}
function q(t, n, e) {
  return (n = Xl(n)) in t ? Object.defineProperty(t, n, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[n] = e, t;
}
function qa(t, n) {
  var e = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    n && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), e.push.apply(e, r);
  }
  return e;
}
function V(t) {
  for (var n = 1; n < arguments.length; n++) {
    var e = arguments[n] != null ? arguments[n] : {};
    n % 2 ? qa(Object(e), !0).forEach(function(r) {
      q(t, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : qa(Object(e)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return t;
}
function Wa(t) {
  return t instanceof HTMLElement || t instanceof SVGElement;
}
function Eh(t) {
  return t && be(t) === "object" && Wa(t.nativeElement) ? t.nativeElement : Wa(t) ? t : null;
}
function _h(t) {
  var n = Eh(t);
  if (n)
    return n;
  if (t instanceof Fe.Component) {
    var e;
    return (e = ma.findDOMNode) === null || e === void 0 ? void 0 : e.call(ma, t);
  }
  return null;
}
var Lr = { exports: {} }, ge = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xa;
function Ch() {
  if (Xa) return ge;
  Xa = 1;
  var t = Symbol.for("react.element"), n = Symbol.for("react.portal"), e = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g;
  g = Symbol.for("react.module.reference");
  function h(x) {
    if (typeof x == "object" && x !== null) {
      var w = x.$$typeof;
      switch (w) {
        case t:
          switch (x = x.type, x) {
            case e:
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
                  return w;
              }
          }
        case n:
          return w;
      }
    }
  }
  return ge.ContextConsumer = s, ge.ContextProvider = i, ge.Element = t, ge.ForwardRef = c, ge.Fragment = e, ge.Lazy = u, ge.Memo = d, ge.Portal = n, ge.Profiler = o, ge.StrictMode = r, ge.Suspense = l, ge.SuspenseList = f, ge.isAsyncMode = function() {
    return !1;
  }, ge.isConcurrentMode = function() {
    return !1;
  }, ge.isContextConsumer = function(x) {
    return h(x) === s;
  }, ge.isContextProvider = function(x) {
    return h(x) === i;
  }, ge.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }, ge.isForwardRef = function(x) {
    return h(x) === c;
  }, ge.isFragment = function(x) {
    return h(x) === e;
  }, ge.isLazy = function(x) {
    return h(x) === u;
  }, ge.isMemo = function(x) {
    return h(x) === d;
  }, ge.isPortal = function(x) {
    return h(x) === n;
  }, ge.isProfiler = function(x) {
    return h(x) === o;
  }, ge.isStrictMode = function(x) {
    return h(x) === r;
  }, ge.isSuspense = function(x) {
    return h(x) === l;
  }, ge.isSuspenseList = function(x) {
    return h(x) === f;
  }, ge.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === e || x === o || x === r || x === l || x === f || x === v || typeof x == "object" && x !== null && (x.$$typeof === u || x.$$typeof === d || x.$$typeof === i || x.$$typeof === s || x.$$typeof === c || x.$$typeof === g || x.getModuleId !== void 0);
  }, ge.typeOf = h, ge;
}
var ve = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ya;
function Ah() {
  return Ya || (Ya = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Symbol.for("react.element"), n = Symbol.for("react.portal"), e = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g = !1, h = !1, x = !1, w = !1, S = !1, p;
    p = Symbol.for("react.module.reference");
    function C(L) {
      return !!(typeof L == "string" || typeof L == "function" || L === e || L === o || S || L === r || L === l || L === f || w || L === v || g || h || x || typeof L == "object" && L !== null && (L.$$typeof === u || L.$$typeof === d || L.$$typeof === i || L.$$typeof === s || L.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      L.$$typeof === p || L.getModuleId !== void 0));
    }
    function y(L) {
      if (typeof L == "object" && L !== null) {
        var Me = L.$$typeof;
        switch (Me) {
          case t:
            var Te = L.type;
            switch (Te) {
              case e:
              case o:
              case r:
              case l:
              case f:
                return Te;
              default:
                var ft = Te && Te.$$typeof;
                switch (ft) {
                  case a:
                  case s:
                  case c:
                  case u:
                  case d:
                  case i:
                    return ft;
                  default:
                    return Me;
                }
            }
          case n:
            return Me;
        }
      }
    }
    var R = s, _ = i, j = t, B = c, X = e, re = u, $ = d, D = n, W = o, H = r, Q = l, K = f, Z = !1, J = !1;
    function ae(L) {
      return Z || (Z = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function oe(L) {
      return J || (J = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function G(L) {
      return y(L) === s;
    }
    function ee(L) {
      return y(L) === i;
    }
    function he(L) {
      return typeof L == "object" && L !== null && L.$$typeof === t;
    }
    function fe(L) {
      return y(L) === c;
    }
    function pe(L) {
      return y(L) === e;
    }
    function P(L) {
      return y(L) === u;
    }
    function F(L) {
      return y(L) === d;
    }
    function T(L) {
      return y(L) === n;
    }
    function N(L) {
      return y(L) === o;
    }
    function O(L) {
      return y(L) === r;
    }
    function z(L) {
      return y(L) === l;
    }
    function je(L) {
      return y(L) === f;
    }
    ve.ContextConsumer = R, ve.ContextProvider = _, ve.Element = j, ve.ForwardRef = B, ve.Fragment = X, ve.Lazy = re, ve.Memo = $, ve.Portal = D, ve.Profiler = W, ve.StrictMode = H, ve.Suspense = Q, ve.SuspenseList = K, ve.isAsyncMode = ae, ve.isConcurrentMode = oe, ve.isContextConsumer = G, ve.isContextProvider = ee, ve.isElement = he, ve.isForwardRef = fe, ve.isFragment = pe, ve.isLazy = P, ve.isMemo = F, ve.isPortal = T, ve.isProfiler = N, ve.isStrictMode = O, ve.isSuspense = z, ve.isSuspenseList = je, ve.isValidElementType = C, ve.typeOf = y;
  }()), ve;
}
var $a;
function Th() {
  return $a || ($a = 1, process.env.NODE_ENV === "production" ? Lr.exports = Ch() : Lr.exports = Ah()), Lr.exports;
}
var yi = Th();
function Yl(t, n, e) {
  var r = E.useRef({});
  return (!("value" in r.current) || e(r.current.condition, n)) && (r.current.value = t(), r.current.condition = n), r.current.value;
}
var Oh = Number(n0.split(".")[0]), $l = function(n, e) {
  typeof n == "function" ? n(e) : be(n) === "object" && n && "current" in n && (n.current = e);
}, Rh = function() {
  for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++)
    e[r] = arguments[r];
  var o = e.filter(Boolean);
  return o.length <= 1 ? o[0] : function(i) {
    e.forEach(function(s) {
      $l(s, i);
    });
  };
}, Ph = function(n) {
  var e, r;
  if (!n)
    return !1;
  if (Gl(n) && Oh >= 19)
    return !0;
  var o = yi.isMemo(n) ? n.type.type : n.type;
  return !(typeof o == "function" && !((e = o.prototype) !== null && e !== void 0 && e.render) && o.$$typeof !== yi.ForwardRef || typeof n == "function" && !((r = n.prototype) !== null && r !== void 0 && r.render) && n.$$typeof !== yi.ForwardRef);
};
function Gl(t) {
  return /* @__PURE__ */ t0(t) && !vh(t);
}
var kh = function(n) {
  if (n && Gl(n)) {
    var e = n;
    return e.props.propertyIsEnumerable("ref") ? e.props.ref : e.ref;
  }
  return null;
};
function Tt(t, n) {
  if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function Ga(t, n) {
  for (var e = 0; e < n.length; e++) {
    var r = n[e];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, Xl(r.key), r);
  }
}
function Ot(t, n, e) {
  return n && Ga(t.prototype, n), e && Ga(t, e), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t;
}
function Gi(t, n) {
  return Gi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, r) {
    return e.__proto__ = r, e;
  }, Gi(t, n);
}
function Er(t, n) {
  if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(n && n.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), n && Gi(t, n);
}
function Fn(t) {
  return Fn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Fn(t);
}
function Js() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Js = function() {
    return !!t;
  })();
}
function vn(t) {
  if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Kl(t, n) {
  if (n && (be(n) == "object" || typeof n == "function")) return n;
  if (n !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return vn(t);
}
function Yo(t) {
  var n = Js();
  return function() {
    var e, r = Fn(t);
    if (n) {
      var o = Fn(this).constructor;
      e = Reflect.construct(r, arguments, o);
    } else e = r.apply(this, arguments);
    return Kl(this, e);
  };
}
function Ki(t, n) {
  (n == null || n > t.length) && (n = t.length);
  for (var e = 0, r = Array(n); e < n; e++) r[e] = t[e];
  return r;
}
function Ih(t) {
  if (Array.isArray(t)) return Ki(t);
}
function Zl(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function Qs(t, n) {
  if (t) {
    if (typeof t == "string") return Ki(t, n);
    var e = {}.toString.call(t).slice(8, -1);
    return e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set" ? Array.from(t) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? Ki(t, n) : void 0;
  }
}
function Nh() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Wt(t) {
  return Ih(t) || Zl(t) || Qs(t) || Nh();
}
var Jl = function(n) {
  return +setTimeout(n, 16);
}, Ql = function(n) {
  return clearTimeout(n);
};
typeof window < "u" && "requestAnimationFrame" in window && (Jl = function(n) {
  return window.requestAnimationFrame(n);
}, Ql = function(n) {
  return window.cancelAnimationFrame(n);
});
var Ka = 0, $o = /* @__PURE__ */ new Map();
function eu(t) {
  $o.delete(t);
}
var yo = function(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  Ka += 1;
  var r = Ka;
  function o(i) {
    if (i === 0)
      eu(r), n();
    else {
      var s = Jl(function() {
        o(i - 1);
      });
      $o.set(r, s);
    }
  }
  return o(e), r;
};
yo.cancel = function(t) {
  var n = $o.get(t);
  return eu(t), Ql(n);
};
process.env.NODE_ENV !== "production" && (yo.ids = function() {
  return $o;
});
function tu(t) {
  if (Array.isArray(t)) return t;
}
function jh(t, n) {
  var e = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (e != null) {
    var r, o, i, s, a = [], c = !0, l = !1;
    try {
      if (i = (e = e.call(t)).next, n === 0) {
        if (Object(e) !== e) return;
        c = !1;
      } else for (; !(c = (r = i.call(e)).done) && (a.push(r.value), a.length !== n); c = !0) ;
    } catch (f) {
      l = !0, o = f;
    } finally {
      try {
        if (!c && e.return != null && (s = e.return(), Object(s) !== s)) return;
      } finally {
        if (l) throw o;
      }
    }
    return a;
  }
}
function nu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function le(t, n) {
  return tu(t) || jh(t, n) || Qs(t, n) || nu();
}
function pr(t) {
  for (var n = 0, e, r = 0, o = t.length; o >= 4; ++r, o -= 4)
    e = t.charCodeAt(r) & 255 | (t.charCodeAt(++r) & 255) << 8 | (t.charCodeAt(++r) & 255) << 16 | (t.charCodeAt(++r) & 255) << 24, e = /* Math.imul(k, m): */
    (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16), e ^= /* k >>> r: */
    e >>> 24, n = /* Math.imul(k, m): */
    (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      n ^= (t.charCodeAt(r + 2) & 255) << 16;
    case 2:
      n ^= (t.charCodeAt(r + 1) & 255) << 8;
    case 1:
      n ^= t.charCodeAt(r) & 255, n = /* Math.imul(h, m): */
      (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16);
  }
  return n ^= n >>> 13, n = /* Math.imul(h, m): */
  (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), ((n ^ n >>> 15) >>> 0).toString(36);
}
function Xt() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Mh(t, n) {
  if (!t)
    return !1;
  if (t.contains)
    return t.contains(n);
  for (var e = n; e; ) {
    if (e === t)
      return !0;
    e = e.parentNode;
  }
  return !1;
}
var Za = "data-rc-order", Ja = "data-rc-priority", Lh = "rc-util-key", Zi = /* @__PURE__ */ new Map();
function ru() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.mark;
  return n ? n.startsWith("data-") ? n : "data-".concat(n) : Lh;
}
function Go(t) {
  if (t.attachTo)
    return t.attachTo;
  var n = document.querySelector("head");
  return n || document.body;
}
function Dh(t) {
  return t === "queue" ? "prependQueue" : t ? "prepend" : "append";
}
function ea(t) {
  return Array.from((Zi.get(t) || t).children).filter(function(n) {
    return n.tagName === "STYLE";
  });
}
function ou(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Xt())
    return null;
  var e = n.csp, r = n.prepend, o = n.priority, i = o === void 0 ? 0 : o, s = Dh(r), a = s === "prependQueue", c = document.createElement("style");
  c.setAttribute(Za, s), a && i && c.setAttribute(Ja, "".concat(i)), e != null && e.nonce && (c.nonce = e == null ? void 0 : e.nonce), c.innerHTML = t;
  var l = Go(n), f = l.firstChild;
  if (r) {
    if (a) {
      var d = (n.styles || ea(l)).filter(function(u) {
        if (!["prepend", "prependQueue"].includes(u.getAttribute(Za)))
          return !1;
        var v = Number(u.getAttribute(Ja) || 0);
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
function iu(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = Go(n);
  return (n.styles || ea(e)).find(function(r) {
    return r.getAttribute(ru(n)) === t;
  });
}
function su(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = iu(t, n);
  if (e) {
    var r = Go(n);
    r.removeChild(e);
  }
}
function Bh(t, n) {
  var e = Zi.get(t);
  if (!e || !Mh(document, e)) {
    var r = ou("", n), o = r.parentNode;
    Zi.set(t, o), t.removeChild(r);
  }
}
function yn(t, n) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Go(e), o = ea(r), i = V(V({}, e), {}, {
    styles: o
  });
  Bh(r, i);
  var s = iu(n, i);
  if (s) {
    var a, c;
    if ((a = i.csp) !== null && a !== void 0 && a.nonce && s.nonce !== ((c = i.csp) === null || c === void 0 ? void 0 : c.nonce)) {
      var l;
      s.nonce = (l = i.csp) === null || l === void 0 ? void 0 : l.nonce;
    }
    return s.innerHTML !== t && (s.innerHTML = t), s;
  }
  var f = ou(t, i);
  return f.setAttribute(ru(i), n), f;
}
function Fh(t, n) {
  if (t == null) return {};
  var e = {};
  for (var r in t) if ({}.hasOwnProperty.call(t, r)) {
    if (n.indexOf(r) !== -1) continue;
    e[r] = t[r];
  }
  return e;
}
function mr(t, n) {
  if (t == null) return {};
  var e, r, o = Fh(t, n);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (r = 0; r < i.length; r++) e = i[r], n.indexOf(e) === -1 && {}.propertyIsEnumerable.call(t, e) && (o[e] = t[e]);
  }
  return o;
}
function zh(t, n) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = /* @__PURE__ */ new Set();
  function o(i, s) {
    var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, c = r.has(i);
    if (tn(!c, "Warning: There may be circular references"), c)
      return !1;
    if (i === s)
      return !0;
    if (e && a > 1)
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
    if (i && s && be(i) === "object" && be(s) === "object") {
      var d = Object.keys(i);
      return d.length !== Object.keys(s).length ? !1 : d.every(function(u) {
        return o(i[u], s[u], l);
      });
    }
    return !1;
  }
  return o(t, n);
}
var Vh = "%";
function Ji(t) {
  return t.join(Vh);
}
var Hh = /* @__PURE__ */ function() {
  function t(n) {
    Tt(this, t), q(this, "instanceId", void 0), q(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = n;
  }
  return Ot(t, [{
    key: "get",
    value: function(e) {
      return this.opGet(Ji(e));
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opGet",
    value: function(e) {
      return this.cache.get(e) || null;
    }
  }, {
    key: "update",
    value: function(e, r) {
      return this.opUpdate(Ji(e), r);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(e, r) {
      var o = this.cache.get(e), i = r(o);
      i === null ? this.cache.delete(e) : this.cache.set(e, i);
    }
  }]), t;
}(), zn = "data-token-hash", _t = "data-css-hash", Uh = "data-cache-path", Kt = "__cssinjs_instance__";
function qh() {
  var t = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var n = document.body.querySelectorAll("style[".concat(_t, "]")) || [], e = document.head.firstChild;
    Array.from(n).forEach(function(o) {
      o[Kt] = o[Kt] || t, o[Kt] === t && document.head.insertBefore(o, e);
    });
    var r = {};
    Array.from(document.querySelectorAll("style[".concat(_t, "]"))).forEach(function(o) {
      var i = o.getAttribute(_t);
      if (r[i]) {
        if (o[Kt] === t) {
          var s;
          (s = o.parentNode) === null || s === void 0 || s.removeChild(o);
        }
      } else
        r[i] = !0;
    });
  }
  return new Hh(t);
}
var _r = /* @__PURE__ */ E.createContext({
  hashPriority: "low",
  cache: qh(),
  defaultCache: !0
});
function Wh(t, n) {
  if (t.length !== n.length)
    return !1;
  for (var e = 0; e < t.length; e++)
    if (t[e] !== n[e])
      return !1;
  return !0;
}
var ta = /* @__PURE__ */ function() {
  function t() {
    Tt(this, t), q(this, "cache", void 0), q(this, "keys", void 0), q(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return Ot(t, [{
    key: "size",
    value: function() {
      return this.keys.length;
    }
  }, {
    key: "internalGet",
    value: function(e) {
      var r, o, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, s = {
        map: this.cache
      };
      return e.forEach(function(a) {
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
    value: function(e) {
      var r;
      return (r = this.internalGet(e, !0)) === null || r === void 0 ? void 0 : r[0];
    }
  }, {
    key: "has",
    value: function(e) {
      return !!this.internalGet(e);
    }
  }, {
    key: "set",
    value: function(e, r) {
      var o = this;
      if (!this.has(e)) {
        if (this.size() + 1 > t.MAX_CACHE_SIZE + t.MAX_CACHE_OFFSET) {
          var i = this.keys.reduce(function(l, f) {
            var d = le(l, 2), u = d[1];
            return o.internalGet(f)[1] < u ? [f, o.internalGet(f)[1]] : l;
          }, [this.keys[0], this.cacheCallTimes]), s = le(i, 1), a = s[0];
          this.delete(a);
        }
        this.keys.push(e);
      }
      var c = this.cache;
      e.forEach(function(l, f) {
        if (f === e.length - 1)
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
    value: function(e, r) {
      var o = e.get(r[0]);
      if (r.length === 1) {
        var i;
        return o.map ? e.set(r[0], {
          map: o.map
        }) : e.delete(r[0]), (i = o.value) === null || i === void 0 ? void 0 : i[0];
      }
      var s = this.deleteByPath(o.map, r.slice(1));
      return (!o.map || o.map.size === 0) && !o.value && e.delete(r[0]), s;
    }
  }, {
    key: "delete",
    value: function(e) {
      if (this.has(e))
        return this.keys = this.keys.filter(function(r) {
          return !Wh(r, e);
        }), this.deleteByPath(this.cache, e);
    }
  }]), t;
}();
q(ta, "MAX_CACHE_SIZE", 20);
q(ta, "MAX_CACHE_OFFSET", 5);
var Qa = 0, au = /* @__PURE__ */ function() {
  function t(n) {
    Tt(this, t), q(this, "derivatives", void 0), q(this, "id", void 0), this.derivatives = Array.isArray(n) ? n : [n], this.id = Qa, n.length === 0 && Zs(n.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), Qa += 1;
  }
  return Ot(t, [{
    key: "getDerivativeToken",
    value: function(e) {
      return this.derivatives.reduce(function(r, o) {
        return o(e, r);
      }, void 0);
    }
  }]), t;
}(), bi = new ta();
function Qi(t) {
  var n = Array.isArray(t) ? t : [t];
  return bi.has(n) || bi.set(n, new au(n)), bi.get(n);
}
var Xh = /* @__PURE__ */ new WeakMap(), Si = {};
function Yh(t, n) {
  for (var e = Xh, r = 0; r < n.length; r += 1) {
    var o = n[r];
    e.has(o) || e.set(o, /* @__PURE__ */ new WeakMap()), e = e.get(o);
  }
  return e.has(Si) || e.set(Si, t()), e.get(Si);
}
var ec = /* @__PURE__ */ new WeakMap();
function dr(t) {
  var n = ec.get(t) || "";
  return n || (Object.keys(t).forEach(function(e) {
    var r = t[e];
    n += e, r instanceof au ? n += r.id : r && be(r) === "object" ? n += dr(r) : n += r;
  }), n = pr(n), ec.set(t, n)), n;
}
function tc(t, n) {
  return pr("".concat(n, "_").concat(dr(t)));
}
var es = Xt();
function bo(t) {
  return typeof t == "number" ? "".concat(t, "px") : t;
}
function So(t, n, e) {
  var r, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (i)
    return t;
  var s = V(V({}, o), {}, (r = {}, q(r, zn, n), q(r, _t, e), r)), a = Object.keys(s).map(function(c) {
    var l = s[c];
    return l ? "".concat(c, '="').concat(l, '"') : null;
  }).filter(function(c) {
    return c;
  }).join(" ");
  return "<style ".concat(a, ">").concat(t, "</style>");
}
var no = function(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(e ? "".concat(e, "-") : "").concat(n).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, $h = function(n, e, r) {
  return Object.keys(n).length ? ".".concat(e).concat(r != null && r.scope ? ".".concat(r.scope) : "", "{").concat(Object.entries(n).map(function(o) {
    var i = le(o, 2), s = i[0], a = i[1];
    return "".concat(s, ":").concat(a, ";");
  }).join(""), "}") : "";
}, cu = function(n, e, r) {
  var o = {}, i = {};
  return Object.entries(n).forEach(function(s) {
    var a, c, l = le(s, 2), f = l[0], d = l[1];
    if (r != null && (a = r.preserve) !== null && a !== void 0 && a[f])
      i[f] = d;
    else if ((typeof d == "string" || typeof d == "number") && !(r != null && (c = r.ignore) !== null && c !== void 0 && c[f])) {
      var u, v = no(f, r == null ? void 0 : r.prefix);
      o[v] = typeof d == "number" && !(r != null && (u = r.unitless) !== null && u !== void 0 && u[f]) ? "".concat(d, "px") : String(d), i[f] = "var(".concat(v, ")");
    }
  }), [i, $h(o, e, {
    scope: r == null ? void 0 : r.scope
  })];
}, nc = process.env.NODE_ENV !== "test" && Xt() ? E.useLayoutEffect : E.useEffect, lu = function(n, e) {
  var r = E.useRef(!0);
  nc(function() {
    return n(r.current);
  }, e), nc(function() {
    return r.current = !1, function() {
      r.current = !0;
    };
  }, []);
}, Gh = V({}, E), rc = Gh.useInsertionEffect, Kh = function(n, e, r) {
  E.useMemo(n, r), lu(function() {
    return e(!0);
  }, r);
}, Zh = rc ? function(t, n, e) {
  return rc(function() {
    return t(), n();
  }, e);
} : Kh, Jh = V({}, E), Qh = Jh.useInsertionEffect, ex = function(n) {
  var e = [], r = !1;
  function o(i) {
    if (r) {
      process.env.NODE_ENV !== "production" && Zs(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    e.push(i);
  }
  return E.useEffect(function() {
    return r = !1, function() {
      r = !0, e.length && e.forEach(function(i) {
        return i();
      });
    };
  }, n), o;
}, tx = function() {
  return function(n) {
    n();
  };
}, nx = typeof Qh < "u" ? ex : tx;
function rx() {
  return !1;
}
var ts = !1;
function ox() {
  return ts;
}
const ix = process.env.NODE_ENV === "production" ? rx : ox;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var Dr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : null;
  if (Dr && typeof Dr.webpackHotUpdate == "function") {
    var sx = Dr.webpackHotUpdate;
    Dr.webpackHotUpdate = function() {
      return ts = !0, setTimeout(function() {
        ts = !1;
      }, 0), sx.apply(void 0, arguments);
    };
  }
}
function na(t, n, e, r, o) {
  var i = E.useContext(_r), s = i.cache, a = [t].concat(Wt(n)), c = Ji(a), l = nx([c]), f = ix(), d = function(h) {
    s.opUpdate(c, function(x) {
      var w = x || [void 0, void 0], S = le(w, 2), p = S[0], C = p === void 0 ? 0 : p, y = S[1], R = y;
      process.env.NODE_ENV !== "production" && y && f && (r == null || r(R, f), R = null);
      var _ = R || e(), j = [C, _];
      return h ? h(j) : j;
    });
  };
  E.useMemo(
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
  return Zh(function() {
    o == null || o(v);
  }, function(g) {
    return d(function(h) {
      var x = le(h, 2), w = x[0], S = x[1];
      return g && w === 0 && (o == null || o(v)), [w + 1, S];
    }), function() {
      s.opUpdate(c, function(h) {
        var x = h || [], w = le(x, 2), S = w[0], p = S === void 0 ? 0 : S, C = w[1], y = p - 1;
        return y === 0 ? (l(function() {
          (g || !s.opGet(c)) && (r == null || r(C, !1));
        }), null) : [p - 1, C];
      });
    };
  }, [c]), v;
}
var ax = {}, cx = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", dn = /* @__PURE__ */ new Map();
function lx(t) {
  dn.set(t, (dn.get(t) || 0) + 1);
}
function ux(t, n) {
  if (typeof document < "u") {
    var e = document.querySelectorAll("style[".concat(zn, '="').concat(t, '"]'));
    e.forEach(function(r) {
      if (r[Kt] === n) {
        var o;
        (o = r.parentNode) === null || o === void 0 || o.removeChild(r);
      }
    });
  }
}
var fx = 0;
function dx(t, n) {
  dn.set(t, (dn.get(t) || 0) - 1);
  var e = Array.from(dn.keys()), r = e.filter(function(o) {
    var i = dn.get(o) || 0;
    return i <= 0;
  });
  e.length - r.length > fx && r.forEach(function(o) {
    ux(o, n), dn.delete(o);
  });
}
var hx = function(n, e, r, o) {
  var i = r.getDerivativeToken(n), s = V(V({}, i), e);
  return o && (s = o(s)), s;
}, uu = "token";
function xx(t, n) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Qt(_r), o = r.cache.instanceId, i = r.container, s = e.salt, a = s === void 0 ? "" : s, c = e.override, l = c === void 0 ? ax : c, f = e.formatToken, d = e.getComputedToken, u = e.cssVar, v = Yh(function() {
    return Object.assign.apply(Object, [{}].concat(Wt(n)));
  }, n), g = dr(v), h = dr(l), x = u ? dr(u) : "", w = na(uu, [a, t.id, g, h, x], function() {
    var S, p = d ? d(v, l, t) : hx(v, l, t, f), C = V({}, p), y = "";
    if (u) {
      var R = cu(p, u.key, {
        prefix: u.prefix,
        ignore: u.ignore,
        unitless: u.unitless,
        preserve: u.preserve
      }), _ = le(R, 2);
      p = _[0], y = _[1];
    }
    var j = tc(p, a);
    p._tokenKey = j, C._tokenKey = tc(C, a);
    var B = (S = u == null ? void 0 : u.key) !== null && S !== void 0 ? S : j;
    p._themeKey = B, lx(B);
    var X = "".concat(cx, "-").concat(pr(j));
    return p._hashId = X, [p, X, C, y, (u == null ? void 0 : u.key) || ""];
  }, function(S) {
    dx(S[0]._themeKey, o);
  }, function(S) {
    var p = le(S, 4), C = p[0], y = p[3];
    if (u && y) {
      var R = yn(y, pr("css-variables-".concat(C._themeKey)), {
        mark: _t,
        prepend: "queue",
        attachTo: i,
        priority: -999
      });
      R[Kt] = o, R.setAttribute(zn, C._themeKey);
    }
  });
  return w;
}
var px = function(n, e, r) {
  var o = le(n, 5), i = o[2], s = o[3], a = o[4], c = r || {}, l = c.plain;
  if (!s)
    return null;
  var f = i._tokenKey, d = -999, u = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(d)
  }, v = So(s, a, f, u, l);
  return [d, f, v];
}, mx = {
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
}, fu = "comm", du = "rule", hu = "decl", gx = "@import", vx = "@namespace", yx = "@keyframes", bx = "@layer", xu = Math.abs, ra = String.fromCharCode;
function pu(t) {
  return t.trim();
}
function ro(t, n, e) {
  return t.replace(n, e);
}
function Sx(t, n, e) {
  return t.indexOf(n, e);
}
function kn(t, n) {
  return t.charCodeAt(n) | 0;
}
function Vn(t, n, e) {
  return t.slice(n, e);
}
function Mt(t) {
  return t.length;
}
function wx(t) {
  return t.length;
}
function Br(t, n) {
  return n.push(t), t;
}
var Ko = 1, Hn = 1, mu = 0, mt = 0, Ue = 0, $n = "";
function oa(t, n, e, r, o, i, s, a) {
  return { value: t, root: n, parent: e, type: r, props: o, children: i, line: Ko, column: Hn, length: s, return: "", siblings: a };
}
function Ex() {
  return Ue;
}
function _x() {
  return Ue = mt > 0 ? kn($n, --mt) : 0, Hn--, Ue === 10 && (Hn = 1, Ko--), Ue;
}
function Ct() {
  return Ue = mt < mu ? kn($n, mt++) : 0, Hn++, Ue === 10 && (Hn = 1, Ko++), Ue;
}
function Zt() {
  return kn($n, mt);
}
function oo() {
  return mt;
}
function Zo(t, n) {
  return Vn($n, t, n);
}
function gr(t) {
  switch (t) {
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
function Cx(t) {
  return Ko = Hn = 1, mu = Mt($n = t), mt = 0, [];
}
function Ax(t) {
  return $n = "", t;
}
function wi(t) {
  return pu(Zo(mt - 1, ns(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function Tx(t) {
  for (; (Ue = Zt()) && Ue < 33; )
    Ct();
  return gr(t) > 2 || gr(Ue) > 3 ? "" : " ";
}
function Ox(t, n) {
  for (; --n && Ct() && !(Ue < 48 || Ue > 102 || Ue > 57 && Ue < 65 || Ue > 70 && Ue < 97); )
    ;
  return Zo(t, oo() + (n < 6 && Zt() == 32 && Ct() == 32));
}
function ns(t) {
  for (; Ct(); )
    switch (Ue) {
      // ] ) " '
      case t:
        return mt;
      // " '
      case 34:
      case 39:
        t !== 34 && t !== 39 && ns(Ue);
        break;
      // (
      case 40:
        t === 41 && ns(t);
        break;
      // \
      case 92:
        Ct();
        break;
    }
  return mt;
}
function Rx(t, n) {
  for (; Ct() && t + Ue !== 57; )
    if (t + Ue === 84 && Zt() === 47)
      break;
  return "/*" + Zo(n, mt - 1) + "*" + ra(t === 47 ? t : Ct());
}
function Px(t) {
  for (; !gr(Zt()); )
    Ct();
  return Zo(t, mt);
}
function kx(t) {
  return Ax(io("", null, null, null, [""], t = Cx(t), 0, [0], t));
}
function io(t, n, e, r, o, i, s, a, c) {
  for (var l = 0, f = 0, d = s, u = 0, v = 0, g = 0, h = 1, x = 1, w = 1, S = 0, p = "", C = o, y = i, R = r, _ = p; x; )
    switch (g = S, S = Ct()) {
      // (
      case 40:
        if (g != 108 && kn(_, d - 1) == 58) {
          Sx(_ += ro(wi(S), "&", "&\f"), "&\f", xu(l ? a[l - 1] : 0)) != -1 && (w = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        _ += wi(S);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        _ += Tx(g);
        break;
      // \
      case 92:
        _ += Ox(oo() - 1, 7);
        continue;
      // /
      case 47:
        switch (Zt()) {
          case 42:
          case 47:
            Br(Ix(Rx(Ct(), oo()), n, e, c), c), (gr(g || 1) == 5 || gr(Zt() || 1) == 5) && Mt(_) && Vn(_, -1, void 0) !== " " && (_ += " ");
            break;
          default:
            _ += "/";
        }
        break;
      // {
      case 123 * h:
        a[l++] = Mt(_) * w;
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
          case 59 + f:
            w == -1 && (_ = ro(_, /\f/g, "")), v > 0 && (Mt(_) - d || h === 0 && g === 47) && Br(v > 32 ? ic(_ + ";", r, e, d - 1, c) : ic(ro(_, " ", "") + ";", r, e, d - 2, c), c);
            break;
          // @ ;
          case 59:
            _ += ";";
          // { rule/at-rule
          default:
            if (Br(R = oc(_, n, e, l, f, o, a, p, C = [], y = [], d, i), i), S === 123)
              if (f === 0)
                io(_, n, R, R, C, i, d, a, y);
              else {
                switch (u) {
                  // c(ontainer)
                  case 99:
                    if (kn(_, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (kn(_, 2) === 97) break;
                  default:
                    f = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                f ? io(t, R, R, r && Br(oc(t, R, R, 0, 0, o, a, p, o, C = [], d, y), y), o, y, d, a, r ? C : y) : io(_, R, R, R, [""], y, 0, a, y);
              }
        }
        l = f = v = 0, h = w = 1, p = _ = "", d = s;
        break;
      // :
      case 58:
        d = 1 + Mt(_), v = g;
      default:
        if (h < 1) {
          if (S == 123)
            --h;
          else if (S == 125 && h++ == 0 && _x() == 125)
            continue;
        }
        switch (_ += ra(S), S * h) {
          // &
          case 38:
            w = f > 0 ? 1 : (_ += "\f", -1);
            break;
          // ,
          case 44:
            a[l++] = (Mt(_) - 1) * w, w = 1;
            break;
          // @
          case 64:
            Zt() === 45 && (_ += wi(Ct())), u = Zt(), f = d = Mt(p = _ += Px(oo())), S++;
            break;
          // -
          case 45:
            g === 45 && Mt(_) == 2 && (h = 0);
        }
    }
  return i;
}
function oc(t, n, e, r, o, i, s, a, c, l, f, d) {
  for (var u = o - 1, v = o === 0 ? i : [""], g = wx(v), h = 0, x = 0, w = 0; h < r; ++h)
    for (var S = 0, p = Vn(t, u + 1, u = xu(x = s[h])), C = t; S < g; ++S)
      (C = pu(x > 0 ? v[S] + " " + p : ro(p, /&\f/g, v[S]))) && (c[w++] = C);
  return oa(t, n, e, o === 0 ? du : a, c, l, f, d);
}
function Ix(t, n, e, r) {
  return oa(t, n, e, fu, ra(Ex()), Vn(t, 2, -2), 0, r);
}
function ic(t, n, e, r, o) {
  return oa(t, n, e, hu, Vn(t, 0, r), Vn(t, r + 1, -1), r, o);
}
function rs(t, n) {
  for (var e = "", r = 0; r < t.length; r++)
    e += n(t[r], r, t, n) || "";
  return e;
}
function Nx(t, n, e, r) {
  switch (t.type) {
    case bx:
      if (t.children.length) break;
    case gx:
    case vx:
    case hu:
      return t.return = t.return || t.value;
    case fu:
      return "";
    case yx:
      return t.return = t.value + "{" + rs(t.children, r) + "}";
    case du:
      if (!Mt(t.value = t.props.join(","))) return "";
  }
  return Mt(e = rs(t.children, r)) ? t.return = t.value + "{" + e + "}" : "";
}
function gu(t, n) {
  var e = n.path, r = n.parentSelectors;
  tn(!1, "[Ant Design CSS-in-JS] ".concat(e ? "Error in ".concat(e, ": ") : "").concat(t).concat(r.length ? " Selector: ".concat(r.join(" | ")) : ""));
}
var jx = function(n, e, r) {
  if (n === "content") {
    var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, i = ["normal", "none", "initial", "inherit", "unset"];
    (typeof e != "string" || i.indexOf(e) === -1 && !o.test(e) && (e.charAt(0) !== e.charAt(e.length - 1) || e.charAt(0) !== '"' && e.charAt(0) !== "'")) && gu("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(e, "\"'`."), r);
  }
}, Mx = function(n, e, r) {
  n === "animation" && r.hashId && e !== "none" && gu("You seem to be using hashed animation '".concat(e, "', in which case 'animationName' with Keyframe as value is recommended."), r);
}, sc = "data-ant-cssinjs-cache-path", vu = "_FILE_STYLE__", bn, yu = !0;
function Lx() {
  if (!bn && (bn = {}, Xt())) {
    var t = document.createElement("div");
    t.className = sc, t.style.position = "fixed", t.style.visibility = "hidden", t.style.top = "-9999px", document.body.appendChild(t);
    var n = getComputedStyle(t).content || "";
    n = n.replace(/^"/, "").replace(/"$/, ""), n.split(";").forEach(function(o) {
      var i = o.split(":"), s = le(i, 2), a = s[0], c = s[1];
      bn[a] = c;
    });
    var e = document.querySelector("style[".concat(sc, "]"));
    if (e) {
      var r;
      yu = !1, (r = e.parentNode) === null || r === void 0 || r.removeChild(e);
    }
    document.body.removeChild(t);
  }
}
function Dx(t) {
  return Lx(), !!bn[t];
}
function Bx(t) {
  var n = bn[t], e = null;
  if (n && Xt())
    if (yu)
      e = vu;
    else {
      var r = document.querySelector("style[".concat(_t, '="').concat(bn[t], '"]'));
      r ? e = r.innerHTML : delete bn[t];
    }
  return [e, n];
}
var bu = "_skip_check_", Su = "_multi_value_";
function so(t) {
  var n = rs(kx(t), Nx);
  return n.replace(/\{%%%\:[^;];}/g, ";");
}
function Fx(t) {
  return be(t) === "object" && t && (bu in t || Su in t);
}
function ac(t, n, e) {
  if (!n)
    return t;
  var r = ".".concat(n), o = e === "low" ? ":where(".concat(r, ")") : r, i = t.split(",").map(function(s) {
    var a, c = s.trim().split(/\s+/), l = c[0] || "", f = ((a = l.match(/^\w+/)) === null || a === void 0 ? void 0 : a[0]) || "";
    return l = "".concat(f).concat(o).concat(l.slice(f.length)), [l].concat(Wt(c.slice(1))).join(" ");
  });
  return i.join(",");
}
var zx = function t(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = r.root, i = r.injectHash, s = r.parentSelectors, a = e.hashId, c = e.layer, l = e.path, f = e.hashPriority, d = e.transformers, u = d === void 0 ? [] : d, v = e.linters, g = v === void 0 ? [] : v, h = "", x = {};
  function w(C) {
    var y = C.getName(a);
    if (!x[y]) {
      var R = t(C.style, e, {
        root: !1,
        parentSelectors: s
      }), _ = le(R, 1), j = _[0];
      x[y] = "@keyframes ".concat(C.getName(a)).concat(j);
    }
  }
  function S(C) {
    var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return C.forEach(function(R) {
      Array.isArray(R) ? S(R, y) : R && y.push(R);
    }), y;
  }
  var p = S(Array.isArray(n) ? n : [n]);
  return p.forEach(function(C) {
    var y = typeof C == "string" && !o ? {} : C;
    if (typeof y == "string")
      h += "".concat(y, `
`);
    else if (y._keyframe)
      w(y);
    else {
      var R = u.reduce(function(_, j) {
        var B;
        return (j == null || (B = j.visit) === null || B === void 0 ? void 0 : B.call(j, _)) || _;
      }, y);
      Object.keys(R).forEach(function(_) {
        var j = R[_];
        if (be(j) === "object" && j && (_ !== "animationName" || !j._keyframe) && !Fx(j)) {
          var B = !1, X = _.trim(), re = !1;
          (o || i) && a ? X.startsWith("@") ? B = !0 : X === "&" ? X = ac("", a, f) : X = ac(_, a, f) : o && !a && (X === "&" || X === "") && (X = "", re = !0);
          var $ = t(j, e, {
            root: re,
            injectHash: B,
            parentSelectors: [].concat(Wt(s), [X])
          }), D = le($, 2), W = D[0], H = D[1];
          x = V(V({}, x), H), h += "".concat(X).concat(W);
        } else {
          let Z = function(J, ae) {
            process.env.NODE_ENV !== "production" && (be(j) !== "object" || !(j != null && j[bu])) && [jx, Mx].concat(Wt(g)).forEach(function(ee) {
              return ee(J, ae, {
                path: l,
                hashId: a,
                parentSelectors: s
              });
            });
            var oe = J.replace(/[A-Z]/g, function(ee) {
              return "-".concat(ee.toLowerCase());
            }), G = ae;
            !mx[J] && typeof G == "number" && G !== 0 && (G = "".concat(G, "px")), J === "animationName" && ae !== null && ae !== void 0 && ae._keyframe && (w(ae), G = ae.getName(a)), h += "".concat(oe, ":").concat(G, ";");
          };
          var Q, K = (Q = j == null ? void 0 : j.value) !== null && Q !== void 0 ? Q : j;
          be(j) === "object" && j !== null && j !== void 0 && j[Su] && Array.isArray(K) ? K.forEach(function(J) {
            Z(_, J);
          }) : Z(_, K);
        }
      });
    }
  }), o ? c && (h && (h = "@layer ".concat(c.name, " {").concat(h, "}")), c.dependencies && (x["@layer ".concat(c.name)] = c.dependencies.map(function(C) {
    return "@layer ".concat(C, ", ").concat(c.name, ";");
  }).join(`
`))) : h = "{".concat(h, "}"), [h, x];
};
function wu(t, n) {
  return pr("".concat(t.join("%")).concat(n));
}
function Vx() {
  return null;
}
var Eu = "style";
function os(t, n) {
  var e = t.token, r = t.path, o = t.hashId, i = t.layer, s = t.nonce, a = t.clientOnly, c = t.order, l = c === void 0 ? 0 : c, f = E.useContext(_r), d = f.autoClear, u = f.mock, v = f.defaultCache, g = f.hashPriority, h = f.container, x = f.ssrInline, w = f.transformers, S = f.linters, p = f.cache, C = f.layer, y = e._tokenKey, R = [y];
  C && R.push("layer"), R.push.apply(R, Wt(r));
  var _ = es;
  process.env.NODE_ENV !== "production" && u !== void 0 && (_ = u === "client");
  var j = na(
    Eu,
    R,
    // Create cache if needed
    function() {
      var D = R.join("|");
      if (Dx(D)) {
        var W = Bx(D), H = le(W, 2), Q = H[0], K = H[1];
        if (Q)
          return [Q, y, K, {}, a, l];
      }
      var Z = n(), J = zx(Z, {
        hashId: o,
        hashPriority: g,
        layer: C ? i : void 0,
        path: r.join("-"),
        transformers: w,
        linters: S
      }), ae = le(J, 2), oe = ae[0], G = ae[1], ee = so(oe), he = wu(R, ee);
      return [ee, y, he, G, a, l];
    },
    // Remove cache if no need
    function(D, W) {
      var H = le(D, 3), Q = H[2];
      (W || d) && es && su(Q, {
        mark: _t
      });
    },
    // Effect: Inject style here
    function(D) {
      var W = le(D, 4), H = W[0];
      W[1];
      var Q = W[2], K = W[3];
      if (_ && H !== vu) {
        var Z = {
          mark: _t,
          prepend: C ? !1 : "queue",
          attachTo: h,
          priority: l
        }, J = typeof s == "function" ? s() : s;
        J && (Z.csp = {
          nonce: J
        });
        var ae = [], oe = [];
        Object.keys(K).forEach(function(ee) {
          ee.startsWith("@layer") ? ae.push(ee) : oe.push(ee);
        }), ae.forEach(function(ee) {
          yn(so(K[ee]), "_layer-".concat(ee), V(V({}, Z), {}, {
            prepend: !0
          }));
        });
        var G = yn(H, Q, Z);
        G[Kt] = p.instanceId, G.setAttribute(zn, y), process.env.NODE_ENV !== "production" && G.setAttribute(Uh, R.join("|")), oe.forEach(function(ee) {
          yn(so(K[ee]), "_effect-".concat(ee), Z);
        });
      }
    }
  ), B = le(j, 3), X = B[0], re = B[1], $ = B[2];
  return function(D) {
    var W;
    if (!x || _ || !v)
      W = /* @__PURE__ */ E.createElement(Vx, null);
    else {
      var H;
      W = /* @__PURE__ */ E.createElement("style", Ft({}, (H = {}, q(H, zn, re), q(H, _t, $), H), {
        dangerouslySetInnerHTML: {
          __html: X
        }
      }));
    }
    return /* @__PURE__ */ E.createElement(E.Fragment, null, W, D);
  };
}
var Hx = function(n, e, r) {
  var o = le(n, 6), i = o[0], s = o[1], a = o[2], c = o[3], l = o[4], f = o[5], d = r || {}, u = d.plain;
  if (l)
    return null;
  var v = i, g = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(f)
  };
  return v = So(i, s, a, g, u), c && Object.keys(c).forEach(function(h) {
    if (!e[h]) {
      e[h] = !0;
      var x = so(c[h]), w = So(x, s, "_effect-".concat(h), g, u);
      h.startsWith("@layer") ? v = w + v : v += w;
    }
  }), [f, a, v];
}, _u = "cssVar", Ux = function(n, e) {
  var r = n.key, o = n.prefix, i = n.unitless, s = n.ignore, a = n.token, c = n.scope, l = c === void 0 ? "" : c, f = Qt(_r), d = f.cache.instanceId, u = f.container, v = a._tokenKey, g = [].concat(Wt(n.path), [r, l, v]), h = na(_u, g, function() {
    var x = e(), w = cu(x, r, {
      prefix: o,
      unitless: i,
      ignore: s,
      scope: l
    }), S = le(w, 2), p = S[0], C = S[1], y = wu(g, C);
    return [p, C, y, r];
  }, function(x) {
    var w = le(x, 3), S = w[2];
    es && su(S, {
      mark: _t
    });
  }, function(x) {
    var w = le(x, 3), S = w[1], p = w[2];
    if (S) {
      var C = yn(S, p, {
        mark: _t,
        prepend: "queue",
        attachTo: u,
        priority: -999
      });
      C[Kt] = d, C.setAttribute(zn, r);
    }
  });
  return h;
}, qx = function(n, e, r) {
  var o = le(n, 4), i = o[1], s = o[2], a = o[3], c = r || {}, l = c.plain;
  if (!i)
    return null;
  var f = -999, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(f)
  }, u = So(i, a, s, d, l);
  return [f, s, u];
}, or;
or = {}, q(or, Eu, Hx), q(or, uu, px), q(or, _u, qx);
var Cu = /* @__PURE__ */ function() {
  function t(n, e) {
    Tt(this, t), q(this, "name", void 0), q(this, "style", void 0), q(this, "_keyframe", !0), this.name = n, this.style = e;
  }
  return Ot(t, [{
    key: "getName",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return e ? "".concat(e, "-").concat(this.name) : this.name;
    }
  }]), t;
}();
function Tn(t) {
  return t.notSplit = !0, t;
}
Tn(["borderTop", "borderBottom"]), Tn(["borderTop"]), Tn(["borderBottom"]), Tn(["borderLeft", "borderRight"]), Tn(["borderLeft"]), Tn(["borderRight"]);
var ia = /* @__PURE__ */ Fs({});
function Wx(t) {
  return tu(t) || Zl(t) || Qs(t) || nu();
}
function is(t, n) {
  for (var e = t, r = 0; r < n.length; r += 1) {
    if (e == null)
      return;
    e = e[n[r]];
  }
  return e;
}
function Au(t, n, e, r) {
  if (!n.length)
    return e;
  var o = Wx(n), i = o[0], s = o.slice(1), a;
  return !t && typeof i == "number" ? a = [] : Array.isArray(t) ? a = Wt(t) : a = V({}, t), r && e === void 0 && s.length === 1 ? delete a[i][s[0]] : a[i] = Au(a[i], s, e, r), a;
}
function Ei(t, n, e) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return n.length && r && e === void 0 && !is(t, n.slice(0, -1)) ? t : Au(t, n, e, r);
}
function Xx(t) {
  return be(t) === "object" && t !== null && Object.getPrototypeOf(t) === Object.prototype;
}
function cc(t) {
  return Array.isArray(t) ? [] : {};
}
var Yx = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function $x() {
  for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++)
    n[e] = arguments[e];
  var r = cc(n[0]);
  return n.forEach(function(o) {
    function i(s, a) {
      var c = new Set(a), l = is(o, s), f = Array.isArray(l);
      if (f || Xx(l)) {
        if (!c.has(l)) {
          c.add(l);
          var d = is(r, s);
          f ? r = Ei(r, s, []) : (!d || be(d) !== "object") && (r = Ei(r, s, cc(l))), Yx(l).forEach(function(u) {
            i([].concat(Wt(s), [u]), c);
          });
        }
      } else
        r = Ei(r, s, l);
    }
    i([]);
  }), r;
}
function Tu() {
}
let Ht = null;
function Gx() {
  Ht = null, ql();
}
let sa = Tu;
process.env.NODE_ENV !== "production" && (sa = (t, n, e) => {
  tn(t, `[antd: ${n}] ${e}`), process.env.NODE_ENV === "test" && Gx();
});
const Ou = /* @__PURE__ */ E.createContext({}), Gn = process.env.NODE_ENV !== "production" ? (t) => {
  const {
    strict: n
  } = E.useContext(Ou), e = (r, o, i) => {
    if (!r)
      if (n === !1 && o === "deprecated") {
        const s = Ht;
        Ht || (Ht = {}), Ht[t] = Ht[t] || [], Ht[t].includes(i || "") || Ht[t].push(i || ""), s || console.warn("[antd] There exists deprecated usage in your code:", Ht);
      } else
        process.env.NODE_ENV !== "production" && sa(r, t, i);
  };
  return e.deprecated = (r, o, i, s) => {
    e(r, "deprecated", `\`${o}\` is deprecated. Please use \`${i}\` instead.${s ? ` ${s}` : ""}`);
  }, e;
} : () => {
  const t = () => {
  };
  return t.deprecated = Tu, t;
}, Jo = sa, Kx = /* @__PURE__ */ Fs(void 0), ut = "${label} is not a valid ${type}", Qo = {
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
        string: ut,
        method: ut,
        array: ut,
        object: ut,
        number: ut,
        date: ut,
        boolean: ut,
        integer: ut,
        float: ut,
        regexp: ut,
        email: ut,
        url: ut,
        hex: ut
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
Object.assign({}, Qo.Modal);
let ao = [];
const lc = () => ao.reduce((t, n) => Object.assign(Object.assign({}, t), n), Qo.Modal);
function Zx(t) {
  if (t) {
    const n = Object.assign({}, t);
    return ao.push(n), lc(), () => {
      ao = ao.filter((e) => e !== n), lc();
    };
  }
  Object.assign({}, Qo.Modal);
}
const Ru = /* @__PURE__ */ Fs(void 0), Pu = "internalMark", ku = (t) => {
  const {
    locale: n = {},
    children: e,
    _ANT_MARK__: r
  } = t;
  if (process.env.NODE_ENV !== "production") {
    const i = Gn("LocaleProvider");
    process.env.NODE_ENV !== "production" && i(r === Pu, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  E.useEffect(() => Zx(n == null ? void 0 : n.Modal), [n]);
  const o = E.useMemo(() => Object.assign(Object.assign({}, n), {
    exist: !0
  }), [n]);
  return /* @__PURE__ */ E.createElement(Ru.Provider, {
    value: o
  }, e);
};
process.env.NODE_ENV !== "production" && (ku.displayName = "LocaleProvider");
const Iu = {
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
}, vr = Object.assign(Object.assign({}, Iu), {
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
function _i(t, n) {
  const e = t.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], r = e.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    r[o] = n(r[o] || 0, e[o] || "", o);
  return e[3] ? r[3] = e[3].includes("%") ? r[3] / 100 : r[3] : r[3] = 1, r;
}
const uc = (t, n, e) => e === 0 ? t : t / 100;
function ir(t, n) {
  const e = n || 255;
  return t > e ? e : t < 0 ? 0 : t;
}
class Be {
  constructor(n) {
    q(this, "isValid", !0), q(this, "r", 0), q(this, "g", 0), q(this, "b", 0), q(this, "a", 1), q(this, "_h", void 0), q(this, "_s", void 0), q(this, "_l", void 0), q(this, "_v", void 0), q(this, "_max", void 0), q(this, "_min", void 0), q(this, "_brightness", void 0);
    function e(r) {
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
    else if (e("rgb"))
      this.r = ir(n.r), this.g = ir(n.g), this.b = ir(n.b), this.a = typeof n.a == "number" ? ir(n.a, 1) : 1;
    else if (e("hsl"))
      this.fromHsl(n);
    else if (e("hsv"))
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
    const e = this.toHsv();
    return e.h = n, this._c(e);
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
    const e = n(this.r), r = n(this.g), o = n(this.b);
    return 0.2126 * e + 0.7152 * r + 0.0722 * o;
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
    const e = this.getHue(), r = this.getSaturation();
    let o = this.getLightness() - n / 100;
    return o < 0 && (o = 0), this._c({
      h: e,
      s: r,
      l: o,
      a: this.a
    });
  }
  lighten(n = 10) {
    const e = this.getHue(), r = this.getSaturation();
    let o = this.getLightness() + n / 100;
    return o > 1 && (o = 1), this._c({
      h: e,
      s: r,
      l: o,
      a: this.a
    });
  }
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  mix(n, e = 50) {
    const r = this._c(n), o = e / 100, i = (a) => (r[a] - this[a]) * o + this[a], s = {
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
    const e = this._c(n), r = this.a + e.a * (1 - this.a), o = (i) => $e((this[i] * this.a + e[i] * e.a * (1 - this.a)) / r);
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
    const e = (this.r || 0).toString(16);
    n += e.length === 2 ? e : "0" + e;
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
    const n = this.getHue(), e = $e(this.getSaturation() * 100), r = $e(this.getLightness() * 100);
    return this.a !== 1 ? `hsla(${n},${e}%,${r}%,${this.a})` : `hsl(${n},${e}%,${r}%)`;
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
  _sc(n, e, r) {
    const o = this.clone();
    return o[n] = ir(e, r), o;
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
    const e = n.replace("#", "");
    function r(o, i) {
      return parseInt(e[o] + e[i || o], 16);
    }
    e.length < 6 ? (this.r = r(0), this.g = r(1), this.b = r(2), this.a = e[3] ? r(3) / 255 : 1) : (this.r = r(0, 1), this.g = r(2, 3), this.b = r(4, 5), this.a = e[6] ? r(6, 7) / 255 : 1);
  }
  fromHsl({
    h: n,
    s: e,
    l: r,
    a: o
  }) {
    if (this._h = n % 360, this._s = e, this._l = r, this.a = typeof o == "number" ? o : 1, e <= 0) {
      const u = $e(r * 255);
      this.r = u, this.g = u, this.b = u;
    }
    let i = 0, s = 0, a = 0;
    const c = n / 60, l = (1 - Math.abs(2 * r - 1)) * e, f = l * (1 - Math.abs(c % 2 - 1));
    c >= 0 && c < 1 ? (i = l, s = f) : c >= 1 && c < 2 ? (i = f, s = l) : c >= 2 && c < 3 ? (s = l, a = f) : c >= 3 && c < 4 ? (s = f, a = l) : c >= 4 && c < 5 ? (i = f, a = l) : c >= 5 && c < 6 && (i = l, a = f);
    const d = r - l / 2;
    this.r = $e((i + d) * 255), this.g = $e((s + d) * 255), this.b = $e((a + d) * 255);
  }
  fromHsv({
    h: n,
    s: e,
    v: r,
    a: o
  }) {
    this._h = n % 360, this._s = e, this._v = r, this.a = typeof o == "number" ? o : 1;
    const i = $e(r * 255);
    if (this.r = i, this.g = i, this.b = i, e <= 0)
      return;
    const s = n / 60, a = Math.floor(s), c = s - a, l = $e(r * (1 - e) * 255), f = $e(r * (1 - e * c) * 255), d = $e(r * (1 - e * (1 - c)) * 255);
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
    const e = _i(n, uc);
    this.fromHsv({
      h: e[0],
      s: e[1],
      v: e[2],
      a: e[3]
    });
  }
  fromHslString(n) {
    const e = _i(n, uc);
    this.fromHsl({
      h: e[0],
      s: e[1],
      l: e[2],
      a: e[3]
    });
  }
  fromRgbString(n) {
    const e = _i(n, (r, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? $e(r / 100 * 255) : r
    ));
    this.r = e[0], this.g = e[1], this.b = e[2], this.a = e[3];
  }
}
var Fr = 2, fc = 0.16, Jx = 0.05, Qx = 0.05, ep = 0.15, Nu = 5, ju = 4, tp = [{
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
function dc(t, n, e) {
  var r;
  return Math.round(t.h) >= 60 && Math.round(t.h) <= 240 ? r = e ? Math.round(t.h) - Fr * n : Math.round(t.h) + Fr * n : r = e ? Math.round(t.h) + Fr * n : Math.round(t.h) - Fr * n, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function hc(t, n, e) {
  if (t.h === 0 && t.s === 0)
    return t.s;
  var r;
  return e ? r = t.s - fc * n : n === ju ? r = t.s + fc : r = t.s + Jx * n, r > 1 && (r = 1), e && n === Nu && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Math.round(r * 100) / 100;
}
function xc(t, n, e) {
  var r;
  return e ? r = t.v + Qx * n : r = t.v - ep * n, r = Math.max(0, Math.min(1, r)), Math.round(r * 100) / 100;
}
function yr(t) {
  for (var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = [], r = new Be(t), o = r.toHsv(), i = Nu; i > 0; i -= 1) {
    var s = new Be({
      h: dc(o, i, !0),
      s: hc(o, i, !0),
      v: xc(o, i, !0)
    });
    e.push(s);
  }
  e.push(r);
  for (var a = 1; a <= ju; a += 1) {
    var c = new Be({
      h: dc(o, a),
      s: hc(o, a),
      v: xc(o, a)
    });
    e.push(c);
  }
  return n.theme === "dark" ? tp.map(function(l) {
    var f = l.index, d = l.amount;
    return new Be(n.backgroundColor || "#141414").mix(e[f], d).toHexString();
  }) : e.map(function(l) {
    return l.toHexString();
  });
}
var Ci = {
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
}, ss = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
ss.primary = ss[5];
var as = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
as.primary = as[5];
var cs = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
cs.primary = cs[5];
var ls = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
ls.primary = ls[5];
var us = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
us.primary = us[5];
var fs = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
fs.primary = fs[5];
var ds = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
ds.primary = ds[5];
var hs = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
hs.primary = hs[5];
var wo = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
wo.primary = wo[5];
var xs = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
xs.primary = xs[5];
var ps = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
ps.primary = ps[5];
var ms = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
ms.primary = ms[5];
var gs = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
gs.primary = gs[5];
var Ai = {
  red: ss,
  volcano: as,
  orange: cs,
  gold: ls,
  yellow: us,
  lime: fs,
  green: ds,
  cyan: hs,
  blue: wo,
  geekblue: xs,
  purple: ps,
  magenta: ms,
  grey: gs
};
function np(t, n) {
  let {
    generateColorPalettes: e,
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
  } = t, d = e(c), u = e(o), v = e(i), g = e(s), h = e(a), x = r(l, f), w = t.colorLink || t.colorInfo, S = e(w), p = new Be(g[1]).mix(new Be(g[3]), 50).toHexString();
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
    colorBgMask: new Be("#000").setA(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const rp = (t) => {
  let n = t, e = t, r = t, o = t;
  return t < 6 && t >= 5 ? n = t + 1 : t < 16 && t >= 6 ? n = t + 2 : t >= 16 && (n = 16), t < 7 && t >= 5 ? e = 4 : t < 8 && t >= 7 ? e = 5 : t < 14 && t >= 8 ? e = 6 : t < 16 && t >= 14 ? e = 7 : t >= 16 && (e = 8), t < 6 && t >= 2 ? r = 1 : t >= 6 && (r = 2), t > 4 && t < 8 ? o = 4 : t >= 8 && (o = 6), {
    borderRadius: t,
    borderRadiusXS: r,
    borderRadiusSM: e,
    borderRadiusLG: n,
    borderRadiusOuter: o
  };
};
function op(t) {
  const {
    motionUnit: n,
    motionBase: e,
    borderRadius: r,
    lineWidth: o
  } = t;
  return Object.assign({
    // motion
    motionDurationFast: `${(e + n).toFixed(1)}s`,
    motionDurationMid: `${(e + n * 2).toFixed(1)}s`,
    motionDurationSlow: `${(e + n * 3).toFixed(1)}s`,
    // line
    lineWidthBold: o + 1
  }, rp(r));
}
const ip = (t) => {
  const {
    controlHeight: n
  } = t;
  return {
    controlHeightSM: n * 0.75,
    controlHeightXS: n * 0.5,
    controlHeightLG: n * 1.25
  };
};
function sp(t) {
  return (t + 8) / t;
}
function ap(t) {
  const n = Array.from({
    length: 10
  }).map((e, r) => {
    const o = r - 1, i = t * Math.pow(Math.E, o / 5), s = r > 1 ? Math.floor(i) : Math.ceil(i);
    return Math.floor(s / 2) * 2;
  });
  return n[1] = t, n.map((e) => ({
    size: e,
    lineHeight: sp(e)
  }));
}
const cp = (t) => {
  const n = ap(t), e = n.map((f) => f.size), r = n.map((f) => f.lineHeight), o = e[1], i = e[0], s = e[2], a = r[1], c = r[0], l = r[2];
  return {
    fontSizeSM: i,
    fontSize: o,
    fontSizeLG: s,
    fontSizeXL: e[3],
    fontSizeHeading1: e[6],
    fontSizeHeading2: e[5],
    fontSizeHeading3: e[4],
    fontSizeHeading4: e[3],
    fontSizeHeading5: e[2],
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
function lp(t) {
  const {
    sizeUnit: n,
    sizeStep: e
  } = t;
  return {
    sizeXXL: n * (e + 8),
    // 48
    sizeXL: n * (e + 4),
    // 32
    sizeLG: n * (e + 2),
    // 24
    sizeMD: n * (e + 1),
    // 20
    sizeMS: n * e,
    // 16
    size: n * e,
    // 16
    sizeSM: n * (e - 1),
    // 12
    sizeXS: n * (e - 2),
    // 8
    sizeXXS: n * (e - 3)
    // 4
  };
}
const ht = (t, n) => new Be(t).setA(n).toRgbString(), sr = (t, n) => new Be(t).darken(n).toHexString(), up = (t) => {
  const n = yr(t);
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
}, fp = (t, n) => {
  const e = t || "#fff", r = n || "#000";
  return {
    colorBgBase: e,
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
    colorBgLayout: sr(e, 4),
    colorBgContainer: sr(e, 0),
    colorBgElevated: sr(e, 0),
    colorBgSpotlight: ht(r, 0.85),
    colorBgBlur: "transparent",
    colorBorder: sr(e, 15),
    colorBorderSecondary: sr(e, 6)
  };
};
function dp(t) {
  Ci.pink = Ci.magenta, Ai.pink = Ai.magenta;
  const n = Object.keys(Iu).map((e) => {
    const r = t[e] === Ci[e] ? Ai[e] : yr(t[e]);
    return Array.from({
      length: 10
    }, () => 1).reduce((o, i, s) => (o[`${e}-${s + 1}`] = r[s], o[`${e}${s + 1}`] = r[s], o), {});
  }).reduce((e, r) => (e = Object.assign(Object.assign({}, e), r), e), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, t), n), np(t, {
    generateColorPalettes: up,
    generateNeutralColorPalettes: fp
  })), cp(t.fontSize)), lp(t)), ip(t)), op(t));
}
const Mu = Qi(dp), vs = {
  token: vr,
  override: {
    override: vr
  },
  hashed: !0
}, Lu = /* @__PURE__ */ Fe.createContext(vs), ys = "ant", aa = "anticon", hp = (t, n) => n || (t ? `${ys}-${t}` : ys), en = /* @__PURE__ */ E.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: hp,
  iconPrefixCls: aa
}), {
  Consumer: Av
} = en, pc = {};
function Du(t) {
  const n = E.useContext(en), {
    getPrefixCls: e,
    direction: r,
    getPopupContainer: o
  } = n, i = n[t];
  return Object.assign(Object.assign({
    classNames: pc,
    styles: pc
  }, i), {
    getPrefixCls: e,
    direction: r,
    getPopupContainer: o
  });
}
const xp = `-ant-${Date.now()}-${Math.random()}`;
function pp(t, n) {
  const e = {}, r = (s, a) => {
    let c = s.clone();
    return c = (a == null ? void 0 : a(c)) || c, c.toRgbString();
  }, o = (s, a) => {
    const c = new Be(s), l = yr(c.toRgbString());
    e[`${a}-color`] = r(c), e[`${a}-color-disabled`] = l[1], e[`${a}-color-hover`] = l[4], e[`${a}-color-active`] = l[6], e[`${a}-color-outline`] = c.clone().setA(0.2).toRgbString(), e[`${a}-color-deprecated-bg`] = l[0], e[`${a}-color-deprecated-border`] = l[2];
  };
  if (n.primaryColor) {
    o(n.primaryColor, "primary");
    const s = new Be(n.primaryColor), a = yr(s.toRgbString());
    a.forEach((l, f) => {
      e[`primary-${f + 1}`] = l;
    }), e["primary-color-deprecated-l-35"] = r(s, (l) => l.lighten(35)), e["primary-color-deprecated-l-20"] = r(s, (l) => l.lighten(20)), e["primary-color-deprecated-t-20"] = r(s, (l) => l.tint(20)), e["primary-color-deprecated-t-50"] = r(s, (l) => l.tint(50)), e["primary-color-deprecated-f-12"] = r(s, (l) => l.setA(l.a * 0.12));
    const c = new Be(a[0]);
    e["primary-color-active-deprecated-f-30"] = r(c, (l) => l.setA(l.a * 0.3)), e["primary-color-active-deprecated-d-02"] = r(c, (l) => l.darken(2));
  }
  return n.successColor && o(n.successColor, "success"), n.warningColor && o(n.warningColor, "warning"), n.errorColor && o(n.errorColor, "error"), n.infoColor && o(n.infoColor, "info"), `
  :root {
    ${Object.keys(e).map((s) => `--${t}-${s}: ${e[s]};`).join(`
`)}
  }
  `.trim();
}
function mp(t, n) {
  const e = pp(t, n);
  Xt() ? yn(e, `${xp}-dynamic-theme`) : process.env.NODE_ENV !== "production" && Jo(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const bs = /* @__PURE__ */ E.createContext(!1), gp = (t) => {
  let {
    children: n,
    disabled: e
  } = t;
  const r = E.useContext(bs);
  return /* @__PURE__ */ E.createElement(bs.Provider, {
    value: e ?? r
  }, n);
}, br = /* @__PURE__ */ E.createContext(void 0), vp = (t) => {
  let {
    children: n,
    size: e
  } = t;
  const r = E.useContext(br);
  return /* @__PURE__ */ E.createElement(br.Provider, {
    value: e || r
  }, n);
};
function yp() {
  const t = Qt(bs), n = Qt(br);
  return {
    componentDisabled: t,
    componentSize: n
  };
}
var Bu = /* @__PURE__ */ Ot(function t() {
  Tt(this, t);
}), Fu = "CALC_UNIT", bp = new RegExp(Fu, "g");
function Ti(t) {
  return typeof t == "number" ? "".concat(t).concat(Fu) : t;
}
var Sp = /* @__PURE__ */ function(t) {
  Er(e, t);
  var n = Yo(e);
  function e(r, o) {
    var i;
    Tt(this, e), i = n.call(this), q(vn(i), "result", ""), q(vn(i), "unitlessCssVar", void 0), q(vn(i), "lowPriority", void 0);
    var s = be(r);
    return i.unitlessCssVar = o, r instanceof e ? i.result = "(".concat(r.result, ")") : s === "number" ? i.result = Ti(r) : s === "string" && (i.result = r), i;
  }
  return Ot(e, [{
    key: "add",
    value: function(o) {
      return o instanceof e ? this.result = "".concat(this.result, " + ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " + ").concat(Ti(o))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(o) {
      return o instanceof e ? this.result = "".concat(this.result, " - ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " - ").concat(Ti(o))), this.lowPriority = !0, this;
    }
  }, {
    key: "mul",
    value: function(o) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), o instanceof e ? this.result = "".concat(this.result, " * ").concat(o.getResult(!0)) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " * ").concat(o)), this.lowPriority = !1, this;
    }
  }, {
    key: "div",
    value: function(o) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), o instanceof e ? this.result = "".concat(this.result, " / ").concat(o.getResult(!0)) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " / ").concat(o)), this.lowPriority = !1, this;
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
      }) && (c = !1), this.result = this.result.replace(bp, c ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), e;
}(Bu), wp = /* @__PURE__ */ function(t) {
  Er(e, t);
  var n = Yo(e);
  function e(r) {
    var o;
    return Tt(this, e), o = n.call(this), q(vn(o), "result", 0), r instanceof e ? o.result = r.result : typeof r == "number" && (o.result = r), o;
  }
  return Ot(e, [{
    key: "add",
    value: function(o) {
      return o instanceof e ? this.result += o.result : typeof o == "number" && (this.result += o), this;
    }
  }, {
    key: "sub",
    value: function(o) {
      return o instanceof e ? this.result -= o.result : typeof o == "number" && (this.result -= o), this;
    }
  }, {
    key: "mul",
    value: function(o) {
      return o instanceof e ? this.result *= o.result : typeof o == "number" && (this.result *= o), this;
    }
  }, {
    key: "div",
    value: function(o) {
      return o instanceof e ? this.result /= o.result : typeof o == "number" && (this.result /= o), this;
    }
  }, {
    key: "equal",
    value: function() {
      return this.result;
    }
  }]), e;
}(Bu), Ep = function(n, e) {
  var r = n === "css" ? Sp : wp;
  return function(o) {
    return new r(o, e);
  };
}, mc = function(n, e) {
  return "".concat([e, n.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function Ss(t) {
  var n = E.useRef();
  n.current = t;
  var e = E.useCallback(function() {
    for (var r, o = arguments.length, i = new Array(o), s = 0; s < o; s++)
      i[s] = arguments[s];
    return (r = n.current) === null || r === void 0 ? void 0 : r.call.apply(r, [n].concat(i));
  }, []);
  return e;
}
function ws(t) {
  var n = E.useRef(!1), e = E.useState(t), r = le(e, 2), o = r[0], i = r[1];
  E.useEffect(function() {
    return n.current = !1, function() {
      n.current = !0;
    };
  }, []);
  function s(a, c) {
    c && n.current || i(a);
  }
  return [o, s];
}
function gc(t, n, e, r) {
  var o = V({}, n[t]);
  if (r != null && r.deprecatedTokens) {
    var i = r.deprecatedTokens;
    i.forEach(function(a) {
      var c = le(a, 2), l = c[0], f = c[1];
      if (process.env.NODE_ENV !== "production" && tn(!(o != null && o[l]), "Component Token `".concat(String(l), "` of ").concat(String(t), " is deprecated. Please use `").concat(String(f), "` instead.")), o != null && o[l] || o != null && o[f]) {
        var d;
        (d = o[f]) !== null && d !== void 0 || (o[f] = o == null ? void 0 : o[l]);
      }
    });
  }
  var s = V(V({}, e), o);
  return Object.keys(s).forEach(function(a) {
    s[a] === n[a] && delete s[a];
  }), s;
}
var zu = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", Es = !0;
function ei() {
  for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++)
    n[e] = arguments[e];
  if (!zu)
    return Object.assign.apply(Object, [{}].concat(n));
  Es = !1;
  var r = {};
  return n.forEach(function(o) {
    if (be(o) === "object") {
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
  }), Es = !0, r;
}
var vc = {};
function _p() {
}
var Cp = function(n) {
  var e, r = n, o = _p;
  return zu && typeof Proxy < "u" && (e = /* @__PURE__ */ new Set(), r = new Proxy(n, {
    get: function(s, a) {
      if (Es) {
        var c;
        (c = e) === null || c === void 0 || c.add(a);
      }
      return s[a];
    }
  }), o = function(s, a) {
    var c;
    vc[s] = {
      global: Array.from(e),
      component: V(V({}, (c = vc[s]) === null || c === void 0 ? void 0 : c.component), a)
    };
  }), {
    token: r,
    keys: e,
    flush: o
  };
};
function yc(t, n, e) {
  if (typeof e == "function") {
    var r;
    return e(ei(n, (r = n[t]) !== null && r !== void 0 ? r : {}));
  }
  return e ?? {};
}
function Ap(t) {
  return t === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++)
        r[o] = arguments[o];
      return "max(".concat(r.map(function(i) {
        return bo(i);
      }).join(","), ")");
    },
    min: function() {
      for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++)
        r[o] = arguments[o];
      return "min(".concat(r.map(function(i) {
        return bo(i);
      }).join(","), ")");
    }
  };
}
var Tp = 1e3 * 60 * 10, Op = /* @__PURE__ */ function() {
  function t() {
    Tt(this, t), q(this, "map", /* @__PURE__ */ new Map()), q(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), q(this, "nextID", 0), q(this, "lastAccessBeat", /* @__PURE__ */ new Map()), q(this, "accessBeat", 0);
  }
  return Ot(t, [{
    key: "set",
    value: function(e, r) {
      this.clear();
      var o = this.getCompositeKey(e);
      this.map.set(o, r), this.lastAccessBeat.set(o, Date.now());
    }
  }, {
    key: "get",
    value: function(e) {
      var r = this.getCompositeKey(e), o = this.map.get(r);
      return this.lastAccessBeat.set(r, Date.now()), this.accessBeat += 1, o;
    }
  }, {
    key: "getCompositeKey",
    value: function(e) {
      var r = this, o = e.map(function(i) {
        return i && be(i) === "object" ? "obj_".concat(r.getObjectID(i)) : "".concat(be(i), "_").concat(i);
      });
      return o.join("|");
    }
  }, {
    key: "getObjectID",
    value: function(e) {
      if (this.objectIDMap.has(e))
        return this.objectIDMap.get(e);
      var r = this.nextID;
      return this.objectIDMap.set(e, r), this.nextID += 1, r;
    }
  }, {
    key: "clear",
    value: function() {
      var e = this;
      if (this.accessBeat > 1e4) {
        var r = Date.now();
        this.lastAccessBeat.forEach(function(o, i) {
          r - o > Tp && (e.map.delete(i), e.lastAccessBeat.delete(i));
        }), this.accessBeat = 0;
      }
    }
  }]), t;
}(), bc = new Op();
function Rp(t, n) {
  return Fe.useMemo(function() {
    var e = bc.get(n);
    if (e)
      return e;
    var r = t();
    return bc.set(n, r), r;
  }, n);
}
var Pp = function() {
  return {};
};
function kp(t) {
  var n = t.useCSP, e = n === void 0 ? Pp : n, r = t.useToken, o = t.usePrefix, i = t.getResetStyles, s = t.getCommonStyle, a = t.getCompUnitless;
  function c(u, v, g, h) {
    var x = Array.isArray(u) ? u[0] : u;
    function w(j) {
      return "".concat(String(x)).concat(j.slice(0, 1).toUpperCase()).concat(j.slice(1));
    }
    var S = (h == null ? void 0 : h.unitless) || {}, p = typeof a == "function" ? a(u) : {}, C = V(V({}, p), {}, q({}, w("zIndexPopup"), !0));
    Object.keys(S).forEach(function(j) {
      C[w(j)] = S[j];
    });
    var y = V(V({}, h), {}, {
      unitless: C,
      prefixToken: w
    }), R = f(u, v, g, y), _ = l(x, g, y);
    return function(j) {
      var B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : j, X = R(j, B), re = le(X, 2), $ = re[1], D = _(B), W = le(D, 2), H = W[0], Q = W[1];
      return [H, $, Q];
    };
  }
  function l(u, v, g) {
    var h = g.unitless, x = g.injectStyle, w = x === void 0 ? !0 : x, S = g.prefixToken, p = g.ignore, C = function(_) {
      var j = _.rootCls, B = _.cssVar, X = B === void 0 ? {} : B, re = r(), $ = re.realToken;
      return Ux({
        path: [u],
        prefix: X.prefix,
        key: X.key,
        unitless: h,
        ignore: p,
        token: $,
        scope: j
      }, function() {
        var D = yc(u, $, v), W = gc(u, $, D, {
          deprecatedTokens: g == null ? void 0 : g.deprecatedTokens
        });
        return Object.keys(D).forEach(function(H) {
          W[S(H)] = W[H], delete W[H];
        }), W;
      }), null;
    }, y = function(_) {
      var j = r(), B = j.cssVar;
      return [function(X) {
        return w && B ? /* @__PURE__ */ Fe.createElement(Fe.Fragment, null, /* @__PURE__ */ Fe.createElement(C, {
          rootCls: _,
          cssVar: B,
          component: u
        }), X) : X;
      }, B == null ? void 0 : B.key];
    };
    return y;
  }
  function f(u, v, g) {
    var h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, x = Array.isArray(u) ? u : [u, u], w = le(x, 1), S = w[0], p = x.join("-"), C = t.layer || {
      name: "antd"
    };
    return function(y) {
      var R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : y, _ = r(), j = _.theme, B = _.realToken, X = _.hashId, re = _.token, $ = _.cssVar, D = o(), W = D.rootPrefixCls, H = D.iconPrefixCls, Q = e(), K = $ ? "css" : "js", Z = Rp(function() {
        var he = /* @__PURE__ */ new Set();
        return $ && Object.keys(h.unitless || {}).forEach(function(fe) {
          he.add(no(fe, $.prefix)), he.add(no(fe, mc(S, $.prefix)));
        }), Ep(K, he);
      }, [K, S, $ == null ? void 0 : $.prefix]), J = Ap(K), ae = J.max, oe = J.min, G = {
        theme: j,
        token: re,
        hashId: X,
        nonce: function() {
          return Q.nonce;
        },
        clientOnly: h.clientOnly,
        layer: C,
        // antd is always at top of styles
        order: h.order || -999
      };
      typeof i == "function" && os(V(V({}, G), {}, {
        clientOnly: !1,
        path: ["Shared", W]
      }), function() {
        return i(re, {
          prefix: {
            rootPrefixCls: W,
            iconPrefixCls: H
          },
          csp: Q
        });
      });
      var ee = os(V(V({}, G), {}, {
        path: [p, y, H]
      }), function() {
        if (h.injectStyle === !1)
          return [];
        var he = Cp(re), fe = he.token, pe = he.flush, P = yc(S, B, g), F = ".".concat(y), T = gc(S, B, P, {
          deprecatedTokens: h.deprecatedTokens
        });
        $ && P && be(P) === "object" && Object.keys(P).forEach(function(je) {
          P[je] = "var(".concat(no(je, mc(S, $.prefix)), ")");
        });
        var N = ei(fe, {
          componentCls: F,
          prefixCls: y,
          iconCls: ".".concat(H),
          antCls: ".".concat(W),
          calc: Z,
          // @ts-ignore
          max: ae,
          // @ts-ignore
          min: oe
        }, $ ? P : T), O = v(N, {
          hashId: X,
          prefixCls: y,
          rootPrefixCls: W,
          iconPrefixCls: H
        });
        pe(S, T);
        var z = typeof s == "function" ? s(N, y, R, h.resetFont) : null;
        return [h.resetStyle === !1 ? null : z, O];
      });
      return [ee, X];
    };
  }
  function d(u, v, g) {
    var h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, x = f(u, v, g, V({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, h)), w = function(p) {
      var C = p.prefixCls, y = p.rootCls, R = y === void 0 ? C : y;
      return x(C, R), null;
    };
    return process.env.NODE_ENV !== "production" && (w.displayName = "SubStyle_".concat(String(Array.isArray(u) ? u.join(".") : u))), w;
  }
  return {
    genStyleHooks: c,
    genSubStyleComponent: d,
    genComponentStyleHook: f
  };
}
const Ip = "5.24.6";
function Oi(t) {
  return t >= 0 && t <= 255;
}
function zr(t, n) {
  const {
    r: e,
    g: r,
    b: o,
    a: i
  } = new Be(t).toRgb();
  if (i < 1)
    return t;
  const {
    r: s,
    g: a,
    b: c
  } = new Be(n).toRgb();
  for (let l = 0.01; l <= 1; l += 0.01) {
    const f = Math.round((e - s * (1 - l)) / l), d = Math.round((r - a * (1 - l)) / l), u = Math.round((o - c * (1 - l)) / l);
    if (Oi(f) && Oi(d) && Oi(u))
      return new Be({
        r: f,
        g: d,
        b: u,
        a: Math.round(l * 100) / 100
      }).toRgbString();
  }
  return new Be({
    r: e,
    g: r,
    b: o,
    a: 1
  }).toRgbString();
}
var Np = function(t, n) {
  var e = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && n.indexOf(r) < 0 && (e[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(t); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (e[r[o]] = t[r[o]]);
  return e;
};
function Vu(t) {
  const {
    override: n
  } = t, e = Np(t, ["override"]), r = Object.assign({}, n);
  Object.keys(vr).forEach((u) => {
    delete r[u];
  });
  const o = Object.assign(Object.assign({}, e), r), i = 480, s = 576, a = 768, c = 992, l = 1200, f = 1600;
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
    colorSplit: zr(o.colorBorderSecondary, o.colorBgContainer),
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
    colorErrorOutline: zr(o.colorErrorBg, o.colorBgContainer),
    colorWarningOutline: zr(o.colorWarningBg, o.colorBgContainer),
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
    controlOutline: zr(o.colorPrimaryBg, o.colorBgContainer),
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
var Sc = function(t, n) {
  var e = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && n.indexOf(r) < 0 && (e[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(t); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (e[r[o]] = t[r[o]]);
  return e;
};
const Hu = {
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
}, jp = {
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
}, Mp = {
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
}, Uu = (t, n, e) => {
  const r = e.getDerivativeToken(t), {
    override: o
  } = n, i = Sc(n, ["override"]);
  let s = Object.assign(Object.assign({}, r), {
    override: o
  });
  return s = Vu(s), i && Object.entries(i).forEach((a) => {
    let [c, l] = a;
    const {
      theme: f
    } = l, d = Sc(l, ["theme"]);
    let u = d;
    f && (u = Uu(Object.assign(Object.assign({}, s), d), {
      override: d
    }, f)), s[c] = u;
  }), s;
};
function ca() {
  const {
    token: t,
    hashed: n,
    theme: e,
    override: r,
    cssVar: o
  } = Fe.useContext(Lu), i = `${Ip}-${n || ""}`, s = e || Mu, [a, c, l] = xx(s, [vr, t], {
    salt: i,
    override: r,
    getComputedToken: Uu,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: Vu,
    cssVar: o && {
      prefix: o.prefix,
      key: o.key,
      unitless: Hu,
      ignore: jp,
      preserve: Mp
    }
  });
  return [s, l, n ? c : "", a, o];
}
const qu = function(t) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  return {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    color: t.colorText,
    fontSize: t.fontSize,
    // font-variant: @font-variant-base;
    lineHeight: t.lineHeight,
    listStyle: "none",
    // font-feature-settings: @font-feature-settings-base;
    fontFamily: n ? "inherit" : t.fontFamily
  };
}, Lp = () => ({
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
}), Dp = (t) => ({
  a: {
    color: t.colorLink,
    textDecoration: t.linkDecoration,
    backgroundColor: "transparent",
    // remove the gray background on active links in IE 10.
    outline: "none",
    cursor: "pointer",
    transition: `color ${t.motionDurationSlow}`,
    "-webkit-text-decoration-skip": "objects",
    // remove gaps in links underline in iOS 8+ and Safari 8+.
    "&:hover": {
      color: t.colorLinkHover
    },
    "&:active": {
      color: t.colorLinkActive
    },
    "&:active, &:hover": {
      textDecoration: t.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    "&:focus": {
      textDecoration: t.linkFocusDecoration,
      outline: 0
    },
    "&[disabled]": {
      color: t.colorTextDisabled,
      cursor: "not-allowed"
    }
  }
}), Bp = (t, n, e, r) => {
  const o = `[class^="${n}"], [class*=" ${n}"]`, i = e ? `.${e}` : o, s = {
    boxSizing: "border-box",
    "&::before, &::after": {
      boxSizing: "border-box"
    }
  };
  let a = {};
  return r !== !1 && (a = {
    fontFamily: t.fontFamily,
    fontSize: t.fontSize
  }), {
    [i]: Object.assign(Object.assign(Object.assign({}, a), s), {
      [o]: s
    })
  };
}, Wu = (t) => ({
  [`.${t}`]: Object.assign(Object.assign({}, Lp()), {
    [`.${t} .${t}-icon`]: {
      display: "block"
    }
  })
}), {
  genStyleHooks: la
} = kp({
  usePrefix: () => {
    const {
      getPrefixCls: t,
      iconPrefixCls: n
    } = Qt(en);
    return {
      rootPrefixCls: t(),
      iconPrefixCls: n
    };
  },
  useToken: () => {
    const [t, n, e, r, o] = ca();
    return {
      theme: t,
      realToken: n,
      hashId: e,
      token: r,
      cssVar: o
    };
  },
  useCSP: () => {
    const {
      csp: t
    } = Qt(en);
    return t ?? {};
  },
  getResetStyles: (t, n) => {
    var e;
    const r = Dp(t);
    return [r, {
      "&": r
    }, Wu((e = n == null ? void 0 : n.prefix.iconPrefixCls) !== null && e !== void 0 ? e : aa)];
  },
  getCommonStyle: Bp,
  getCompUnitless: () => Hu
}), Fp = (t, n) => {
  const [e, r] = ca();
  return os({
    token: r,
    hashId: "",
    path: ["ant-design-icons", t],
    nonce: () => n == null ? void 0 : n.nonce,
    layer: {
      name: "antd"
    }
  }, () => [Wu(t)]);
}, zp = Object.assign({}, E), {
  useId: wc
} = zp, Vp = () => "", Hp = typeof wc > "u" ? Vp : wc;
function Up(t, n, e) {
  var r, o;
  const i = Gn("ConfigProvider"), s = t || {}, a = s.inherit === !1 || !n ? Object.assign(Object.assign({}, vs), {
    hashed: (r = n == null ? void 0 : n.hashed) !== null && r !== void 0 ? r : vs.hashed,
    cssVar: n == null ? void 0 : n.cssVar
  }) : n, c = Hp();
  if (process.env.NODE_ENV !== "production") {
    const l = s.cssVar || a.cssVar, f = !!(typeof s.cssVar == "object" && (!((o = s.cssVar) === null || o === void 0) && o.key) || c);
    process.env.NODE_ENV !== "production" && i(!l || f, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return Yl(() => {
    var l, f;
    if (!t)
      return n;
    const d = Object.assign({}, a.components);
    Object.keys(t.components || {}).forEach((g) => {
      d[g] = Object.assign(Object.assign({}, d[g]), t.components[g]);
    });
    const u = `css-var-${c.replace(/:/g, "")}`, v = ((l = s.cssVar) !== null && l !== void 0 ? l : a.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: e == null ? void 0 : e.prefixCls
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
    return !zh(d, v, !0);
  }));
}
var qp = ["children"], Xu = /* @__PURE__ */ E.createContext({});
function Wp(t) {
  var n = t.children, e = mr(t, qp);
  return /* @__PURE__ */ E.createElement(Xu.Provider, {
    value: e
  }, n);
}
var Xp = /* @__PURE__ */ function(t) {
  Er(e, t);
  var n = Yo(e);
  function e() {
    return Tt(this, e), n.apply(this, arguments);
  }
  return Ot(e, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), e;
}(E.Component);
function Yp(t) {
  var n = E.useReducer(function(a) {
    return a + 1;
  }, 0), e = le(n, 2), r = e[1], o = E.useRef(t), i = Ss(function() {
    return o.current;
  }), s = Ss(function(a) {
    o.current = typeof a == "function" ? a(o.current) : a, r();
  });
  return [i, s];
}
var Gt = "none", Vr = "appear", Hr = "enter", Ur = "leave", Ec = "none", wt = "prepare", On = "start", Rn = "active", ua = "end", Yu = "prepared";
function _c(t, n) {
  var e = {};
  return e[t.toLowerCase()] = n.toLowerCase(), e["Webkit".concat(t)] = "webkit".concat(n), e["Moz".concat(t)] = "moz".concat(n), e["ms".concat(t)] = "MS".concat(n), e["O".concat(t)] = "o".concat(n.toLowerCase()), e;
}
function $p(t, n) {
  var e = {
    animationend: _c("Animation", "AnimationEnd"),
    transitionend: _c("Transition", "TransitionEnd")
  };
  return t && ("AnimationEvent" in n || delete e.animationend.animation, "TransitionEvent" in n || delete e.transitionend.transition), e;
}
var Gp = $p(Xt(), typeof window < "u" ? window : {}), $u = {};
if (Xt()) {
  var Kp = document.createElement("div");
  $u = Kp.style;
}
var qr = {};
function Gu(t) {
  if (qr[t])
    return qr[t];
  var n = Gp[t];
  if (n)
    for (var e = Object.keys(n), r = e.length, o = 0; o < r; o += 1) {
      var i = e[o];
      if (Object.prototype.hasOwnProperty.call(n, i) && i in $u)
        return qr[t] = n[i], qr[t];
    }
  return "";
}
var Ku = Gu("animationend"), Zu = Gu("transitionend"), Ju = !!(Ku && Zu), Cc = Ku || "animationend", Ac = Zu || "transitionend";
function Tc(t, n) {
  if (!t) return null;
  if (be(t) === "object") {
    var e = n.replace(/-\w/g, function(r) {
      return r[1].toUpperCase();
    });
    return t[e];
  }
  return "".concat(t, "-").concat(n);
}
const Zp = function(t) {
  var n = Ye();
  function e(o) {
    o && (o.removeEventListener(Ac, t), o.removeEventListener(Cc, t));
  }
  function r(o) {
    n.current && n.current !== o && e(n.current), o && o !== n.current && (o.addEventListener(Ac, t), o.addEventListener(Cc, t), n.current = o);
  }
  return E.useEffect(function() {
    return function() {
      e(n.current);
    };
  }, []), [r, e];
};
var Qu = Xt() ? r0 : it;
const Jp = function() {
  var t = E.useRef(null);
  function n() {
    yo.cancel(t.current);
  }
  function e(r) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    n();
    var i = yo(function() {
      o <= 1 ? r({
        isCanceled: function() {
          return i !== t.current;
        }
      }) : e(r, o - 1);
    });
    t.current = i;
  }
  return E.useEffect(function() {
    return function() {
      n();
    };
  }, []), [e, n];
};
var Qp = [wt, On, Rn, ua], e1 = [wt, Yu], ef = !1, t1 = !0;
function tf(t) {
  return t === Rn || t === ua;
}
const n1 = function(t, n, e) {
  var r = ws(Ec), o = le(r, 2), i = o[0], s = o[1], a = Jp(), c = le(a, 2), l = c[0], f = c[1];
  function d() {
    s(wt, !0);
  }
  var u = n ? e1 : Qp;
  return Qu(function() {
    if (i !== Ec && i !== ua) {
      var v = u.indexOf(i), g = u[v + 1], h = e(i);
      h === ef ? s(g, !0) : g && l(function(x) {
        function w() {
          x.isCanceled() || s(g, !0);
        }
        h === !0 ? w() : Promise.resolve(h).then(w);
      });
    }
  }, [t, i]), E.useEffect(function() {
    return function() {
      f();
    };
  }, []), [d, i];
};
function r1(t, n, e, r) {
  var o = r.motionEnter, i = o === void 0 ? !0 : o, s = r.motionAppear, a = s === void 0 ? !0 : s, c = r.motionLeave, l = c === void 0 ? !0 : c, f = r.motionDeadline, d = r.motionLeaveImmediately, u = r.onAppearPrepare, v = r.onEnterPrepare, g = r.onLeavePrepare, h = r.onAppearStart, x = r.onEnterStart, w = r.onLeaveStart, S = r.onAppearActive, p = r.onEnterActive, C = r.onLeaveActive, y = r.onAppearEnd, R = r.onEnterEnd, _ = r.onLeaveEnd, j = r.onVisibleChanged, B = ws(), X = le(B, 2), re = X[0], $ = X[1], D = Yp(Gt), W = le(D, 2), H = W[0], Q = W[1], K = ws(null), Z = le(K, 2), J = Z[0], ae = Z[1], oe = H(), G = Ye(!1), ee = Ye(null);
  function he() {
    return e();
  }
  var fe = Ye(!1);
  function pe() {
    Q(Gt), ae(null, !0);
  }
  var P = Ss(function(Le) {
    var Ce = H();
    if (Ce !== Gt) {
      var Ke = he();
      if (!(Le && !Le.deadline && Le.target !== Ke)) {
        var gt = fe.current, dt;
        Ce === Vr && gt ? dt = y == null ? void 0 : y(Ke, Le) : Ce === Hr && gt ? dt = R == null ? void 0 : R(Ke, Le) : Ce === Ur && gt && (dt = _ == null ? void 0 : _(Ke, Le)), gt && dt !== !1 && pe();
      }
    }
  }), F = Zp(P), T = le(F, 1), N = T[0], O = function(Ce) {
    switch (Ce) {
      case Vr:
        return q(q(q({}, wt, u), On, h), Rn, S);
      case Hr:
        return q(q(q({}, wt, v), On, x), Rn, p);
      case Ur:
        return q(q(q({}, wt, g), On, w), Rn, C);
      default:
        return {};
    }
  }, z = E.useMemo(function() {
    return O(oe);
  }, [oe]), je = n1(oe, !t, function(Le) {
    if (Le === wt) {
      var Ce = z[wt];
      return Ce ? Ce(he()) : ef;
    }
    if (Te in z) {
      var Ke;
      ae(((Ke = z[Te]) === null || Ke === void 0 ? void 0 : Ke.call(z, he(), null)) || null);
    }
    return Te === Rn && oe !== Gt && (N(he()), f > 0 && (clearTimeout(ee.current), ee.current = setTimeout(function() {
      P({
        deadline: !0
      });
    }, f))), Te === Yu && pe(), t1;
  }), L = le(je, 2), Me = L[0], Te = L[1], ft = tf(Te);
  fe.current = ft;
  var Pt = Ye(null);
  Qu(function() {
    if (!(G.current && Pt.current === n)) {
      $(n);
      var Le = G.current;
      G.current = !0;
      var Ce;
      !Le && n && a && (Ce = Vr), Le && n && i && (Ce = Hr), (Le && !n && l || !Le && d && !n && l) && (Ce = Ur);
      var Ke = O(Ce);
      Ce && (t || Ke[wt]) ? (Q(Ce), Me()) : Q(Gt), Pt.current = n;
    }
  }, [n]), it(function() {
    // Cancel appear
    (oe === Vr && !a || // Cancel enter
    oe === Hr && !i || // Cancel leave
    oe === Ur && !l) && Q(Gt);
  }, [a, i, l]), it(function() {
    return function() {
      G.current = !1, clearTimeout(ee.current);
    };
  }, []);
  var lt = E.useRef(!1);
  it(function() {
    re && (lt.current = !0), re !== void 0 && oe === Gt && ((lt.current || re) && (j == null || j(re)), lt.current = !0);
  }, [re, oe]);
  var kt = J;
  return z[wt] && Te === On && (kt = V({
    transition: "none"
  }, kt)), [oe, Te, kt, re ?? n];
}
function o1(t) {
  var n = t;
  be(t) === "object" && (n = t.transitionSupport);
  function e(o, i) {
    return !!(o.motionName && n && i !== !1);
  }
  var r = /* @__PURE__ */ E.forwardRef(function(o, i) {
    var s = o.visible, a = s === void 0 ? !0 : s, c = o.removeOnLeave, l = c === void 0 ? !0 : c, f = o.forceRender, d = o.children, u = o.motionName, v = o.leavedClassName, g = o.eventProps, h = E.useContext(Xu), x = h.motion, w = e(o, x), S = Ye(), p = Ye();
    function C() {
      try {
        return S.current instanceof HTMLElement ? S.current : _h(p.current);
      } catch {
        return null;
      }
    }
    var y = r1(w, a, C, o), R = le(y, 4), _ = R[0], j = R[1], B = R[2], X = R[3], re = E.useRef(X);
    X && (re.current = !0);
    var $ = E.useCallback(function(Z) {
      S.current = Z, $l(i, Z);
    }, [i]), D, W = V(V({}, g), {}, {
      visible: a
    });
    if (!d)
      D = null;
    else if (_ === Gt)
      X ? D = d(V({}, W), $) : !l && re.current && v ? D = d(V(V({}, W), {}, {
        className: v
      }), $) : f || !l && !v ? D = d(V(V({}, W), {}, {
        style: {
          display: "none"
        }
      }), $) : D = null;
    else {
      var H;
      j === wt ? H = "prepare" : tf(j) ? H = "active" : j === On && (H = "start");
      var Q = Tc(u, "".concat(_, "-").concat(H));
      D = d(V(V({}, W), {}, {
        className: tt(Tc(u, _), q(q({}, Q, Q && H), u, typeof u == "string")),
        style: B
      }), $);
    }
    if (/* @__PURE__ */ E.isValidElement(D) && Ph(D)) {
      var K = kh(D);
      K || (D = /* @__PURE__ */ E.cloneElement(D, {
        ref: $
      }));
    }
    return /* @__PURE__ */ E.createElement(Xp, {
      ref: p
    }, D);
  });
  return r.displayName = "CSSMotion", r;
}
const nf = o1(Ju);
var _s = "add", Cs = "keep", As = "remove", Ri = "removed";
function i1(t) {
  var n;
  return t && be(t) === "object" && "key" in t ? n = t : n = {
    key: t
  }, V(V({}, n), {}, {
    key: String(n.key)
  });
}
function Ts() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return t.map(i1);
}
function s1() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], e = [], r = 0, o = n.length, i = Ts(t), s = Ts(n);
  i.forEach(function(l) {
    for (var f = !1, d = r; d < o; d += 1) {
      var u = s[d];
      if (u.key === l.key) {
        r < d && (e = e.concat(s.slice(r, d).map(function(v) {
          return V(V({}, v), {}, {
            status: _s
          });
        })), r = d), e.push(V(V({}, u), {}, {
          status: Cs
        })), r += 1, f = !0;
        break;
      }
    }
    f || e.push(V(V({}, l), {}, {
      status: As
    }));
  }), r < o && (e = e.concat(s.slice(r).map(function(l) {
    return V(V({}, l), {}, {
      status: _s
    });
  })));
  var a = {};
  e.forEach(function(l) {
    var f = l.key;
    a[f] = (a[f] || 0) + 1;
  });
  var c = Object.keys(a).filter(function(l) {
    return a[l] > 1;
  });
  return c.forEach(function(l) {
    e = e.filter(function(f) {
      var d = f.key, u = f.status;
      return d !== l || u !== As;
    }), e.forEach(function(f) {
      f.key === l && (f.status = Cs);
    });
  }), e;
}
var a1 = ["component", "children", "onVisibleChanged", "onAllRemoved"], c1 = ["status"], l1 = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function u1(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : nf, e = /* @__PURE__ */ function(r) {
    Er(i, r);
    var o = Yo(i);
    function i() {
      var s;
      Tt(this, i);
      for (var a = arguments.length, c = new Array(a), l = 0; l < a; l++)
        c[l] = arguments[l];
      return s = o.call.apply(o, [this].concat(c)), q(vn(s), "state", {
        keyEntities: []
      }), q(vn(s), "removeKey", function(f) {
        s.setState(function(d) {
          var u = d.keyEntities.map(function(v) {
            return v.key !== f ? v : V(V({}, v), {}, {
              status: Ri
            });
          });
          return {
            keyEntities: u
          };
        }, function() {
          var d = s.state.keyEntities, u = d.filter(function(v) {
            var g = v.status;
            return g !== Ri;
          }).length;
          u === 0 && s.props.onAllRemoved && s.props.onAllRemoved();
        });
      }), s;
    }
    return Ot(i, [{
      key: "render",
      value: function() {
        var a = this, c = this.state.keyEntities, l = this.props, f = l.component, d = l.children, u = l.onVisibleChanged;
        l.onAllRemoved;
        var v = mr(l, a1), g = f || E.Fragment, h = {};
        return l1.forEach(function(x) {
          h[x] = v[x], delete v[x];
        }), delete v.keys, /* @__PURE__ */ E.createElement(g, v, c.map(function(x, w) {
          var S = x.status, p = mr(x, c1), C = S === _s || S === Cs;
          return /* @__PURE__ */ E.createElement(n, Ft({}, h, {
            key: p.key,
            visible: C,
            eventProps: p,
            onVisibleChanged: function(R) {
              u == null || u(R, {
                key: p.key
              }), R || a.removeKey(p.key);
            }
          }), function(y, R) {
            return d(V(V({}, y), {}, {
              index: w
            }), R);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(a, c) {
        var l = a.keys, f = c.keyEntities, d = Ts(l), u = s1(f, d);
        return {
          keyEntities: u.filter(function(v) {
            var g = f.find(function(h) {
              var x = h.key;
              return v.key === x;
            });
            return !(g && g.status === Ri && v.status === As);
          })
        };
      }
    }]), i;
  }(E.Component);
  return q(e, "defaultProps", {
    component: "div"
  }), e;
}
u1(Ju);
function f1(t) {
  const {
    children: n
  } = t, [, e] = ca(), {
    motion: r
  } = e, o = E.useRef(!1);
  return o.current = o.current || r === !1, o.current ? /* @__PURE__ */ E.createElement(Wp, {
    motion: r
  }, n) : n;
}
const rf = /* @__PURE__ */ E.memo((t) => {
  let {
    dropdownMatchSelectWidth: n
  } = t;
  return Gn("ConfigProvider").deprecated(n === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
process.env.NODE_ENV !== "production" && (rf.displayName = "PropWarning");
const d1 = process.env.NODE_ENV !== "production" ? rf : () => null;
var h1 = function(t, n) {
  var e = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && n.indexOf(r) < 0 && (e[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(t); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (e[r[o]] = t[r[o]]);
  return e;
};
let Os = !1;
process.env.NODE_ENV;
const x1 = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let of;
function p1() {
  return of || ys;
}
function m1(t) {
  return Object.keys(t).some((n) => n.endsWith("Color"));
}
const g1 = (t) => {
  const {
    prefixCls: n,
    iconPrefixCls: e,
    theme: r,
    holderRender: o
  } = t;
  n !== void 0 && (of = n), r && m1(r) && (process.env.NODE_ENV !== "production" && Jo(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), mp(p1(), r));
}, v1 = (t) => {
  const {
    children: n,
    csp: e,
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
    parentContext: w,
    iconPrefixCls: S,
    theme: p,
    componentDisabled: C,
    segmented: y,
    statistic: R,
    spin: _,
    calendar: j,
    carousel: B,
    cascader: X,
    collapse: re,
    typography: $,
    checkbox: D,
    descriptions: W,
    divider: H,
    drawer: Q,
    skeleton: K,
    steps: Z,
    image: J,
    layout: ae,
    list: oe,
    mentions: G,
    modal: ee,
    progress: he,
    result: fe,
    slider: pe,
    breadcrumb: P,
    menu: F,
    pagination: T,
    input: N,
    textArea: O,
    empty: z,
    badge: je,
    radio: L,
    rate: Me,
    switch: Te,
    transfer: ft,
    avatar: Pt,
    message: lt,
    tag: kt,
    table: Le,
    card: Ce,
    tabs: Ke,
    timeline: gt,
    timePicker: dt,
    upload: rn,
    notification: on,
    tree: _n,
    colorPicker: sn,
    datePicker: an,
    rangePicker: I,
    flex: b,
    wave: Se,
    dropdown: ie,
    warning: we,
    tour: te,
    tooltip: Re,
    popover: Ee,
    popconfirm: vt,
    floatButtonGroup: ze,
    variant: yt,
    inputNumber: cn,
    treeSelect: We
  } = t, Ze = E.useCallback((Pe, m) => {
    const {
      prefixCls: k
    } = t;
    if (m)
      return m;
    const M = k || w.getPrefixCls("");
    return Pe ? `${M}-${Pe}` : M;
  }, [w.getPrefixCls, t.prefixCls]), Ve = S || w.iconPrefixCls || aa, It = e || w.csp;
  Fp(Ve, It);
  const nt = Up(p, w.theme, {
    prefixCls: Ze("")
  });
  process.env.NODE_ENV !== "production" && (Os = Os || !!nt);
  const Yt = {
    csp: It,
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
    getPrefixCls: Ze,
    iconPrefixCls: Ve,
    theme: nt,
    segmented: y,
    statistic: R,
    spin: _,
    calendar: j,
    carousel: B,
    cascader: X,
    collapse: re,
    typography: $,
    checkbox: D,
    descriptions: W,
    divider: H,
    drawer: Q,
    skeleton: K,
    steps: Z,
    image: J,
    input: N,
    textArea: O,
    layout: ae,
    list: oe,
    mentions: G,
    modal: ee,
    progress: he,
    result: fe,
    slider: pe,
    breadcrumb: P,
    menu: F,
    pagination: T,
    empty: z,
    badge: je,
    radio: L,
    rate: Me,
    switch: Te,
    transfer: ft,
    avatar: Pt,
    message: lt,
    tag: kt,
    table: Le,
    card: Ce,
    tabs: Ke,
    timeline: gt,
    timePicker: dt,
    upload: rn,
    notification: on,
    tree: _n,
    colorPicker: sn,
    datePicker: an,
    rangePicker: I,
    flex: b,
    wave: Se,
    dropdown: ie,
    warning: we,
    tour: te,
    tooltip: Re,
    popover: Ee,
    popconfirm: vt,
    floatButtonGroup: ze,
    variant: yt,
    inputNumber: cn,
    treeSelect: We
  };
  process.env.NODE_ENV !== "production" && Gn("ConfigProvider")(!("autoInsertSpaceInButton" in t), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const Qe = Object.assign({}, w);
  Object.keys(Yt).forEach((Pe) => {
    Yt[Pe] !== void 0 && (Qe[Pe] = Yt[Pe]);
  }), x1.forEach((Pe) => {
    const m = t[Pe];
    m && (Qe[Pe] = m);
  }), typeof r < "u" && (Qe.button = Object.assign({
    autoInsertSpace: r
  }, Qe.button));
  const bt = Yl(() => Qe, Qe, (Pe, m) => {
    const k = Object.keys(Pe), M = Object.keys(m);
    return k.length !== M.length || k.some((Y) => Pe[Y] !== m[Y]);
  }), {
    layer: er
  } = E.useContext(_r), Tr = E.useMemo(() => ({
    prefixCls: Ve,
    csp: It,
    layer: er ? "antd" : void 0
  }), [Ve, It, er]);
  let Xe = /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement(d1, {
    dropdownMatchSelectWidth: v
  }), n);
  const Or = E.useMemo(() => {
    var Pe, m, k, M;
    return $x(((Pe = Qo.Form) === null || Pe === void 0 ? void 0 : Pe.defaultValidateMessages) || {}, ((k = (m = bt.locale) === null || m === void 0 ? void 0 : m.Form) === null || k === void 0 ? void 0 : k.defaultValidateMessages) || {}, ((M = bt.form) === null || M === void 0 ? void 0 : M.validateMessages) || {}, (s == null ? void 0 : s.validateMessages) || {});
  }, [bt, s == null ? void 0 : s.validateMessages]);
  Object.keys(Or).length > 0 && (Xe = /* @__PURE__ */ E.createElement(Kx.Provider, {
    value: Or
  }, Xe)), a && (Xe = /* @__PURE__ */ E.createElement(ku, {
    locale: a,
    _ANT_MARK__: Pu
  }, Xe)), Xe = /* @__PURE__ */ E.createElement(ia.Provider, {
    value: Tr
  }, Xe), c && (Xe = /* @__PURE__ */ E.createElement(vp, {
    size: c
  }, Xe)), Xe = /* @__PURE__ */ E.createElement(f1, null, Xe);
  const li = E.useMemo(() => {
    const Pe = nt || {}, {
      algorithm: m,
      token: k,
      components: M,
      cssVar: Y
    } = Pe, xe = h1(Pe, ["algorithm", "token", "components", "cssVar"]), me = m && (!Array.isArray(m) || m.length > 0) ? Qi(m) : Mu, ue = {};
    Object.entries(M || {}).forEach((Je) => {
      let [Oe, ke] = Je;
      const Ie = Object.assign({}, ke);
      "algorithm" in Ie && (Ie.algorithm === !0 ? Ie.theme = me : (Array.isArray(Ie.algorithm) || typeof Ie.algorithm == "function") && (Ie.theme = Qi(Ie.algorithm)), delete Ie.algorithm), ue[Oe] = Ie;
    });
    const ce = Object.assign(Object.assign({}, vr), k);
    return Object.assign(Object.assign({}, xe), {
      theme: me,
      token: ce,
      components: ue,
      override: Object.assign({
        override: ce
      }, ue),
      cssVar: Y
    });
  }, [nt]);
  return p && (Xe = /* @__PURE__ */ E.createElement(Lu.Provider, {
    value: li
  }, Xe)), bt.warning && (Xe = /* @__PURE__ */ E.createElement(Ou.Provider, {
    value: bt.warning
  }, Xe)), C !== void 0 && (Xe = /* @__PURE__ */ E.createElement(gp, {
    disabled: C
  }, Xe)), /* @__PURE__ */ E.createElement(en.Provider, {
    value: bt
  }, Xe);
}, Kn = (t) => {
  const n = E.useContext(en), e = E.useContext(Ru);
  return /* @__PURE__ */ E.createElement(v1, Object.assign({
    parentContext: n,
    legacyLocale: e
  }, t));
};
Kn.ConfigContext = en;
Kn.SizeContext = br;
Kn.config = g1;
Kn.useConfig = yp;
Object.defineProperty(Kn, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && Jo(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), br)
});
process.env.NODE_ENV !== "production" && (Kn.displayName = "ConfigProvider");
var y1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
function sf(t) {
  var n;
  return t == null || (n = t.getRootNode) === null || n === void 0 ? void 0 : n.call(t);
}
function b1(t) {
  return sf(t) instanceof ShadowRoot;
}
function S1(t) {
  return b1(t) ? sf(t) : null;
}
function w1(t) {
  return t.replace(/-(.)/g, function(n, e) {
    return e.toUpperCase();
  });
}
function E1(t, n) {
  tn(t, "[@ant-design/icons] ".concat(n));
}
function Oc(t) {
  return be(t) === "object" && typeof t.name == "string" && typeof t.theme == "string" && (be(t.icon) === "object" || typeof t.icon == "function");
}
function Rc() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(t).reduce(function(n, e) {
    var r = t[e];
    switch (e) {
      case "class":
        n.className = r, delete n.class;
        break;
      default:
        delete n[e], n[w1(e)] = r;
    }
    return n;
  }, {});
}
function Rs(t, n, e) {
  return e ? /* @__PURE__ */ Fe.createElement(t.tag, V(V({
    key: n
  }, Rc(t.attrs)), e), (t.children || []).map(function(r, o) {
    return Rs(r, "".concat(n, "-").concat(t.tag, "-").concat(o));
  })) : /* @__PURE__ */ Fe.createElement(t.tag, V({
    key: n
  }, Rc(t.attrs)), (t.children || []).map(function(r, o) {
    return Rs(r, "".concat(n, "-").concat(t.tag, "-").concat(o));
  }));
}
function af(t) {
  return yr(t)[0];
}
function cf(t) {
  return t ? Array.isArray(t) ? t : [t] : [];
}
var _1 = `
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
`, C1 = function(n) {
  var e = Qt(ia), r = e.csp, o = e.prefixCls, i = e.layer, s = _1;
  o && (s = s.replace(/anticon/g, o)), i && (s = "@layer ".concat(i, ` {
`).concat(s, `
}`)), it(function() {
    var a = n.current, c = S1(a);
    yn(s, "@ant-design-icons", {
      prepend: !i,
      csp: r,
      attachTo: c
    });
  }, []);
}, A1 = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], hr = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function T1(t) {
  var n = t.primaryColor, e = t.secondaryColor;
  hr.primaryColor = n, hr.secondaryColor = e || af(n), hr.calculated = !!e;
}
function O1() {
  return V({}, hr);
}
var Zn = function(n) {
  var e = n.icon, r = n.className, o = n.onClick, i = n.style, s = n.primaryColor, a = n.secondaryColor, c = mr(n, A1), l = E.useRef(), f = hr;
  if (s && (f = {
    primaryColor: s,
    secondaryColor: a || af(s)
  }), C1(l), E1(Oc(e), "icon should be icon definiton, but got ".concat(e)), !Oc(e))
    return null;
  var d = e;
  return d && typeof d.icon == "function" && (d = V(V({}, d), {}, {
    icon: d.icon(f.primaryColor, f.secondaryColor)
  })), Rs(d.icon, "svg-".concat(d.name), V(V({
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
Zn.displayName = "IconReact";
Zn.getTwoToneColors = O1;
Zn.setTwoToneColors = T1;
function lf(t) {
  var n = cf(t), e = le(n, 2), r = e[0], o = e[1];
  return Zn.setTwoToneColors({
    primaryColor: r,
    secondaryColor: o
  });
}
function R1() {
  var t = Zn.getTwoToneColors();
  return t.calculated ? [t.primaryColor, t.secondaryColor] : t.primaryColor;
}
var P1 = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
lf(wo.primary);
var nn = /* @__PURE__ */ E.forwardRef(function(t, n) {
  var e = t.className, r = t.icon, o = t.spin, i = t.rotate, s = t.tabIndex, a = t.onClick, c = t.twoToneColor, l = mr(t, P1), f = E.useContext(ia), d = f.prefixCls, u = d === void 0 ? "anticon" : d, v = f.rootClassName, g = tt(v, u, q(q({}, "".concat(u, "-").concat(r.name), !!r.name), "".concat(u, "-spin"), !!o || r.name === "loading"), e), h = s;
  h === void 0 && a && (h = -1);
  var x = i ? {
    msTransform: "rotate(".concat(i, "deg)"),
    transform: "rotate(".concat(i, "deg)")
  } : void 0, w = cf(c), S = le(w, 2), p = S[0], C = S[1];
  return /* @__PURE__ */ E.createElement("span", Ft({
    role: "img",
    "aria-label": r.name
  }, l, {
    ref: n,
    tabIndex: h,
    onClick: a,
    className: g
  }), /* @__PURE__ */ E.createElement(Zn, {
    icon: r,
    primaryColor: p,
    secondaryColor: C,
    style: x
  }));
});
nn.displayName = "AntdIcon";
nn.getTwoToneColor = R1;
nn.setTwoToneColor = lf;
var k1 = function(n, e) {
  return /* @__PURE__ */ E.createElement(nn, Ft({}, n, {
    ref: e,
    icon: y1
  }));
}, uf = /* @__PURE__ */ E.forwardRef(k1);
process.env.NODE_ENV !== "production" && (uf.displayName = "CheckCircleFilled");
var I1 = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, N1 = function(n, e) {
  return /* @__PURE__ */ E.createElement(nn, Ft({}, n, {
    ref: e,
    icon: I1
  }));
}, ff = /* @__PURE__ */ E.forwardRef(N1);
process.env.NODE_ENV !== "production" && (ff.displayName = "CloseCircleFilled");
var j1 = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, M1 = function(n, e) {
  return /* @__PURE__ */ E.createElement(nn, Ft({}, n, {
    ref: e,
    icon: j1
  }));
}, df = /* @__PURE__ */ E.forwardRef(M1);
process.env.NODE_ENV !== "production" && (df.displayName = "CloseOutlined");
var L1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" }, D1 = function(n, e) {
  return /* @__PURE__ */ E.createElement(nn, Ft({}, n, {
    ref: e,
    icon: L1
  }));
}, hf = /* @__PURE__ */ E.forwardRef(D1);
process.env.NODE_ENV !== "production" && (hf.displayName = "ExclamationCircleFilled");
var B1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" }, F1 = function(n, e) {
  return /* @__PURE__ */ E.createElement(nn, Ft({}, n, {
    ref: e,
    icon: B1
  }));
}, xf = /* @__PURE__ */ E.forwardRef(F1);
process.env.NODE_ENV !== "production" && (xf.displayName = "InfoCircleFilled");
var z1 = `accept acceptCharset accessKey action allowFullScreen allowTransparency
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
    summary tabIndex target title type useMap value width wmode wrap`, V1 = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, H1 = "".concat(z1, " ").concat(V1).split(/[\s\n]+/), U1 = "aria-", q1 = "data-";
function Pc(t, n) {
  return t.indexOf(n) === 0;
}
function W1(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, e;
  n === !1 ? e = {
    aria: !0,
    data: !0,
    attr: !0
  } : n === !0 ? e = {
    aria: !0
  } : e = V({}, n);
  var r = {};
  return Object.keys(t).forEach(function(o) {
    // Aria
    (e.aria && (o === "role" || Pc(o, U1)) || // Data
    e.data && Pc(o, q1) || // Attr
    e.attr && H1.includes(o)) && (r[o] = t[o]);
  }), r;
}
const pf = (t, n, e) => /* @__PURE__ */ Fe.isValidElement(t) ? /* @__PURE__ */ Fe.cloneElement(t, typeof e == "function" ? e(t.props || {}) : e) : n;
function X1(t, n) {
  return pf(t, t, n);
}
const Wr = (t, n, e, r, o) => ({
  background: t,
  border: `${bo(r.lineWidth)} ${r.lineType} ${n}`,
  [`${o}-icon`]: {
    color: e
  }
}), Y1 = (t) => {
  const {
    componentCls: n,
    motionDurationSlow: e,
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
  } = t;
  return {
    [n]: Object.assign(Object.assign({}, qu(t)), {
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
        transition: `max-height ${e} ${l}, opacity ${e} ${l},
        padding-top ${e} ${l}, padding-bottom ${e} ${l},
        margin-bottom ${e} ${l}`
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
}, $1 = (t) => {
  const {
    componentCls: n,
    colorSuccess: e,
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
  } = t;
  return {
    [n]: {
      "&-success": Wr(o, r, e, t, n),
      "&-info": Wr(v, u, d, t, n),
      "&-warning": Wr(a, s, i, t, n),
      "&-error": Object.assign(Object.assign({}, Wr(f, l, c, t, n)), {
        [`${n}-description > pre`]: {
          margin: 0,
          padding: 0
        }
      })
    }
  };
}, G1 = (t) => {
  const {
    componentCls: n,
    iconCls: e,
    motionDurationMid: r,
    marginXS: o,
    fontSizeIcon: i,
    colorIcon: s,
    colorIconHover: a
  } = t;
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
        lineHeight: bo(i),
        backgroundColor: "transparent",
        border: "none",
        outline: "none",
        cursor: "pointer",
        [`${e}-close`]: {
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
}, K1 = (t) => ({
  withDescriptionIconSize: t.fontSizeHeading3,
  defaultPadding: `${t.paddingContentVerticalSM}px 12px`,
  withDescriptionPadding: `${t.paddingMD}px ${t.paddingContentHorizontalLG}px`
}), Z1 = la("Alert", (t) => [Y1(t), $1(t), G1(t)], K1);
var kc = function(t, n) {
  var e = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && n.indexOf(r) < 0 && (e[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(t); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (e[r[o]] = t[r[o]]);
  return e;
};
const J1 = {
  success: uf,
  info: xf,
  error: ff,
  warning: hf
}, Q1 = (t) => {
  const {
    icon: n,
    prefixCls: e,
    type: r
  } = t, o = J1[r] || null;
  return n ? pf(n, /* @__PURE__ */ E.createElement("span", {
    className: `${e}-icon`
  }, n), () => ({
    className: tt(`${e}-icon`, n.props.className)
  })) : /* @__PURE__ */ E.createElement(o, {
    className: `${e}-icon`
  });
}, em = (t) => {
  const {
    isClosable: n,
    prefixCls: e,
    closeIcon: r,
    handleClose: o,
    ariaProps: i
  } = t, s = r === !0 || r === void 0 ? /* @__PURE__ */ E.createElement(df, null) : r;
  return n ? /* @__PURE__ */ E.createElement("button", Object.assign({
    type: "button",
    onClick: o,
    className: `${e}-close-icon`,
    tabIndex: 0
  }, i), s) : null;
}, fa = /* @__PURE__ */ E.forwardRef((t, n) => {
  const {
    description: e,
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
    action: w,
    id: S
  } = t, p = kc(t, ["description", "prefixCls", "message", "banner", "className", "rootClassName", "style", "onMouseEnter", "onMouseLeave", "onClick", "afterClose", "showIcon", "closable", "closeText", "closeIcon", "action", "id"]), [C, y] = E.useState(!1);
  process.env.NODE_ENV !== "production" && Gn("Alert").deprecated(!h, "closeText", "closable.closeIcon");
  const R = E.useRef(null);
  E.useImperativeHandle(n, () => ({
    nativeElement: R.current
  }));
  const {
    getPrefixCls: _,
    direction: j,
    closable: B,
    closeIcon: X,
    className: re,
    style: $
  } = Du("alert"), D = _("alert", r), [W, H, Q] = Z1(D), K = (fe) => {
    var pe;
    y(!0), (pe = t.onClose) === null || pe === void 0 || pe.call(t, fe);
  }, Z = E.useMemo(() => t.type !== void 0 ? t.type : i ? "warning" : "info", [t.type, i]), J = E.useMemo(() => typeof g == "object" && g.closeIcon || h ? !0 : typeof g == "boolean" ? g : x !== !1 && x !== null && x !== void 0 ? !0 : !!B, [h, x, g, B]), ae = i && v === void 0 ? !0 : v, oe = tt(D, `${D}-${Z}`, {
    [`${D}-with-description`]: !!e,
    [`${D}-no-icon`]: !ae,
    [`${D}-banner`]: !!i,
    [`${D}-rtl`]: j === "rtl"
  }, re, s, a, Q, H), G = W1(p, {
    aria: !0,
    data: !0
  }), ee = E.useMemo(() => typeof g == "object" && g.closeIcon ? g.closeIcon : h || (x !== void 0 ? x : typeof B == "object" && B.closeIcon ? B.closeIcon : X), [x, g, h, X]), he = E.useMemo(() => {
    const fe = g ?? B;
    if (typeof fe == "object") {
      const {
        closeIcon: pe
      } = fe;
      return kc(fe, ["closeIcon"]);
    }
    return {};
  }, [g, B]);
  return W(/* @__PURE__ */ E.createElement(nf, {
    visible: !C,
    motionName: `${D}-motion`,
    motionAppear: !1,
    motionEnter: !1,
    onLeaveStart: (fe) => ({
      maxHeight: fe.offsetHeight
    }),
    onLeaveEnd: u
  }, (fe, pe) => {
    let {
      className: P,
      style: F
    } = fe;
    return /* @__PURE__ */ E.createElement("div", Object.assign({
      id: S,
      ref: Rh(R, pe),
      "data-show": !C,
      className: tt(oe, P),
      style: Object.assign(Object.assign(Object.assign({}, $), c), F),
      onMouseEnter: l,
      onMouseLeave: f,
      onClick: d,
      role: "alert"
    }, G), ae ? /* @__PURE__ */ E.createElement(Q1, {
      description: e,
      icon: t.icon,
      prefixCls: D,
      type: Z
    }) : null, /* @__PURE__ */ E.createElement("div", {
      className: `${D}-content`
    }, o ? /* @__PURE__ */ E.createElement("div", {
      className: `${D}-message`
    }, o) : null, e ? /* @__PURE__ */ E.createElement("div", {
      className: `${D}-description`
    }, e) : null), w ? /* @__PURE__ */ E.createElement("div", {
      className: `${D}-action`
    }, w) : null, /* @__PURE__ */ E.createElement(em, {
      isClosable: J,
      prefixCls: D,
      closeIcon: ee,
      handleClose: K,
      ariaProps: he
    }));
  }));
});
process.env.NODE_ENV !== "production" && (fa.displayName = "Alert");
function tm(t, n, e) {
  return n = Fn(n), Kl(t, Js() ? Reflect.construct(n, e || [], Fn(t).constructor) : n.apply(t, e));
}
let nm = /* @__PURE__ */ function(t) {
  function n() {
    var e;
    return Tt(this, n), e = tm(this, n, arguments), e.state = {
      error: void 0,
      info: {
        componentStack: ""
      }
    }, e;
  }
  return Er(n, t), Ot(n, [{
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
      return a ? /* @__PURE__ */ E.createElement(fa, {
        id: i,
        type: "error",
        message: f,
        description: /* @__PURE__ */ E.createElement("pre", {
          style: {
            fontSize: "0.9em",
            overflowX: "auto"
          }
        }, d)
      }) : s;
    }
  }]);
}(E.Component);
const mf = fa;
mf.ErrorBoundary = nm;
function rm(t, n) {
  var e = Object.assign({}, t);
  return Array.isArray(n) && n.forEach(function(r) {
    delete e[r];
  }), e;
}
function om(t, n, e) {
  var r = e || {}, o = r.noTrailing, i = o === void 0 ? !1 : o, s = r.noLeading, a = s === void 0 ? !1 : s, c = r.debounceMode, l = c === void 0 ? void 0 : c, f, d = !1, u = 0;
  function v() {
    f && clearTimeout(f);
  }
  function g(x) {
    var w = x || {}, S = w.upcomingOnly, p = S === void 0 ? !1 : S;
    v(), d = !p;
  }
  function h() {
    for (var x = arguments.length, w = new Array(x), S = 0; S < x; S++)
      w[S] = arguments[S];
    var p = this, C = Date.now() - u;
    if (d)
      return;
    function y() {
      u = Date.now(), n.apply(p, w);
    }
    function R() {
      f = void 0;
    }
    !a && l && !f && y(), v(), l === void 0 && C > t ? a ? (u = Date.now(), i || (f = setTimeout(l ? R : y, t))) : y() : i !== !0 && (f = setTimeout(l ? R : y, l === void 0 ? t - C : t));
  }
  return h.cancel = g, h;
}
function im(t, n, e) {
  var r = {}, o = r.atBegin, i = o === void 0 ? !1 : o;
  return om(t, n, {
    debounceMode: i !== !1
  });
}
function Ic(t) {
  return ["small", "middle", "large"].includes(t);
}
const gf = ["wrap", "nowrap", "wrap-reverse"], vf = ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around", "space-evenly", "stretch", "normal", "left", "right"], yf = ["center", "start", "end", "flex-start", "flex-end", "self-start", "self-end", "baseline", "normal", "stretch"], sm = (t, n) => {
  const e = n.wrap === !0 ? "wrap" : n.wrap;
  return {
    [`${t}-wrap-${e}`]: e && gf.includes(e)
  };
}, am = (t, n) => {
  const e = {};
  return yf.forEach((r) => {
    e[`${t}-align-${r}`] = n.align === r;
  }), e[`${t}-align-stretch`] = !n.align && !!n.vertical, e;
}, cm = (t, n) => {
  const e = {};
  return vf.forEach((r) => {
    e[`${t}-justify-${r}`] = n.justify === r;
  }), e;
};
function lm(t, n) {
  return tt(Object.assign(Object.assign(Object.assign({}, sm(t, n)), am(t, n)), cm(t, n)));
}
const um = (t) => {
  const {
    componentCls: n
  } = t;
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
}, fm = (t) => {
  const {
    componentCls: n
  } = t;
  return {
    [n]: {
      "&-gap-small": {
        gap: t.flexGapSM
      },
      "&-gap-middle": {
        gap: t.flexGap
      },
      "&-gap-large": {
        gap: t.flexGapLG
      }
    }
  };
}, dm = (t) => {
  const {
    componentCls: n
  } = t, e = {};
  return gf.forEach((r) => {
    e[`${n}-wrap-${r}`] = {
      flexWrap: r
    };
  }), e;
}, hm = (t) => {
  const {
    componentCls: n
  } = t, e = {};
  return yf.forEach((r) => {
    e[`${n}-align-${r}`] = {
      alignItems: r
    };
  }), e;
}, xm = (t) => {
  const {
    componentCls: n
  } = t, e = {};
  return vf.forEach((r) => {
    e[`${n}-justify-${r}`] = {
      justifyContent: r
    };
  }), e;
}, pm = () => ({}), mm = la("Flex", (t) => {
  const {
    paddingXS: n,
    padding: e,
    paddingLG: r
  } = t, o = ei(t, {
    flexGapSM: n,
    flexGap: e,
    flexGapLG: r
  });
  return [um(o), fm(o), dm(o), hm(o), xm(o)];
}, pm, {
  // Flex component don't apply extra font style
  // https://github.com/ant-design/ant-design/issues/46403
  resetStyle: !1
});
var gm = function(t, n) {
  var e = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && n.indexOf(r) < 0 && (e[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(t); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (e[r[o]] = t[r[o]]);
  return e;
};
const bf = /* @__PURE__ */ Fe.forwardRef((t, n) => {
  const {
    prefixCls: e,
    rootClassName: r,
    className: o,
    style: i,
    flex: s,
    gap: a,
    children: c,
    vertical: l = !1,
    component: f = "div"
  } = t, d = gm(t, ["prefixCls", "rootClassName", "className", "style", "flex", "gap", "children", "vertical", "component"]), {
    flex: u,
    direction: v,
    getPrefixCls: g
  } = Fe.useContext(en), h = g("flex", e), [x, w, S] = mm(h), p = l ?? (u == null ? void 0 : u.vertical), C = tt(o, r, u == null ? void 0 : u.className, h, w, S, lm(h, t), {
    [`${h}-rtl`]: v === "rtl",
    [`${h}-gap-${a}`]: Ic(a),
    [`${h}-vertical`]: p
  }), y = Object.assign(Object.assign({}, u == null ? void 0 : u.style), i);
  return s && (y.flex = s), a && !Ic(a) && (y.gap = a), x(/* @__PURE__ */ Fe.createElement(f, Object.assign({
    ref: n,
    className: C,
    style: y
  }, rm(d, ["justify", "wrap", "align"])), c));
});
process.env.NODE_ENV !== "production" && (bf.displayName = "Flex");
const Eo = 100, Sf = Eo / 5, wf = Eo / 2 - Sf / 2, Pi = wf * 2 * Math.PI, Nc = 50, jc = (t) => {
  const {
    dotClassName: n,
    style: e,
    hasCircleCls: r
  } = t;
  return /* @__PURE__ */ E.createElement("circle", {
    className: tt(`${n}-circle`, {
      [`${n}-circle-bg`]: r
    }),
    r: wf,
    cx: Nc,
    cy: Nc,
    strokeWidth: Sf,
    style: e
  });
}, vm = (t) => {
  let {
    percent: n,
    prefixCls: e
  } = t;
  const r = `${e}-dot`, o = `${r}-holder`, i = `${o}-hidden`, [s, a] = E.useState(!1);
  lu(() => {
    n !== 0 && a(!0);
  }, [n !== 0]);
  const c = Math.max(Math.min(n, 100), 0);
  if (!s)
    return null;
  const l = {
    strokeDashoffset: `${Pi / 4}`,
    strokeDasharray: `${Pi * c / 100} ${Pi * (100 - c) / 100}`
  };
  return /* @__PURE__ */ E.createElement("span", {
    className: tt(o, `${r}-progress`, c <= 0 && i)
  }, /* @__PURE__ */ E.createElement("svg", {
    viewBox: `0 0 ${Eo} ${Eo}`,
    // biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole: progressbar could be readonly
    role: "progressbar",
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": c
  }, /* @__PURE__ */ E.createElement(jc, {
    dotClassName: r,
    hasCircleCls: !0
  }), /* @__PURE__ */ E.createElement(jc, {
    dotClassName: r,
    style: l
  })));
};
function ym(t) {
  const {
    prefixCls: n,
    percent: e = 0
  } = t, r = `${n}-dot`, o = `${r}-holder`, i = `${o}-hidden`;
  return /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement("span", {
    className: tt(o, e > 0 && i)
  }, /* @__PURE__ */ E.createElement("span", {
    className: tt(r, `${n}-dot-spin`)
  }, [1, 2, 3, 4].map((s) => /* @__PURE__ */ E.createElement("i", {
    className: `${n}-dot-item`,
    key: s
  })))), /* @__PURE__ */ E.createElement(vm, {
    prefixCls: n,
    percent: e
  }));
}
function bm(t) {
  const {
    prefixCls: n,
    indicator: e,
    percent: r
  } = t, o = `${n}-dot`;
  return e && /* @__PURE__ */ E.isValidElement(e) ? X1(e, {
    className: tt(e.props.className, o),
    percent: r
  }) : /* @__PURE__ */ E.createElement(ym, {
    prefixCls: n,
    percent: r
  });
}
const Sm = new Cu("antSpinMove", {
  to: {
    opacity: 1
  }
}), wm = new Cu("antRotate", {
  to: {
    transform: "rotate(405deg)"
  }
}), Em = (t) => {
  const {
    componentCls: n,
    calc: e
  } = t;
  return {
    [n]: Object.assign(Object.assign({}, qu(t)), {
      position: "absolute",
      display: "none",
      color: t.colorPrimary,
      fontSize: 0,
      textAlign: "center",
      verticalAlign: "middle",
      opacity: 0,
      transition: `transform ${t.motionDurationSlow} ${t.motionEaseInOutCirc}`,
      "&-spinning": {
        position: "relative",
        display: "inline-block",
        opacity: 1
      },
      [`${n}-text`]: {
        fontSize: t.fontSize,
        paddingTop: e(e(t.dotSize).sub(t.fontSize)).div(2).add(2).equal()
      },
      "&-fullscreen": {
        position: "fixed",
        width: "100vw",
        height: "100vh",
        backgroundColor: t.colorBgMask,
        zIndex: t.zIndexPopupBase,
        inset: 0,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        opacity: 0,
        visibility: "hidden",
        transition: `all ${t.motionDurationMid}`,
        "&-show": {
          opacity: 1,
          visibility: "visible"
        },
        [n]: {
          [`${n}-dot-holder`]: {
            color: t.colorWhite
          },
          [`${n}-text`]: {
            color: t.colorTextLightSolid
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
          maxHeight: t.contentHeight,
          [`${n}-dot`]: {
            position: "absolute",
            top: "50%",
            insetInlineStart: "50%",
            margin: e(t.dotSize).mul(-1).div(2).equal()
          },
          [`${n}-text`]: {
            position: "absolute",
            top: "50%",
            width: "100%",
            textShadow: `0 1px 2px ${t.colorBgContainer}`
            // FIXME: shadow
          },
          [`&${n}-show-text ${n}-dot`]: {
            marginTop: e(t.dotSize).div(2).mul(-1).sub(10).equal()
          },
          "&-sm": {
            [`${n}-dot`]: {
              margin: e(t.dotSizeSM).mul(-1).div(2).equal()
            },
            [`${n}-text`]: {
              paddingTop: e(e(t.dotSizeSM).sub(t.fontSize)).div(2).add(2).equal()
            },
            [`&${n}-show-text ${n}-dot`]: {
              marginTop: e(t.dotSizeSM).div(2).mul(-1).sub(10).equal()
            }
          },
          "&-lg": {
            [`${n}-dot`]: {
              margin: e(t.dotSizeLG).mul(-1).div(2).equal()
            },
            [`${n}-text`]: {
              paddingTop: e(e(t.dotSizeLG).sub(t.fontSize)).div(2).add(2).equal()
            },
            [`&${n}-show-text ${n}-dot`]: {
              marginTop: e(t.dotSizeLG).div(2).mul(-1).sub(10).equal()
            }
          }
        },
        [`${n}-container`]: {
          position: "relative",
          transition: `opacity ${t.motionDurationSlow}`,
          "&::after": {
            position: "absolute",
            top: 0,
            insetInlineEnd: 0,
            bottom: 0,
            insetInlineStart: 0,
            zIndex: 10,
            width: "100%",
            height: "100%",
            background: t.colorBgContainer,
            opacity: 0,
            transition: `all ${t.motionDurationSlow}`,
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
        color: t.spinDotDefault
      },
      // holder
      // ------------------------------
      [`${n}-dot-holder`]: {
        width: "1em",
        height: "1em",
        fontSize: t.dotSize,
        display: "inline-block",
        transition: `transform ${t.motionDurationSlow} ease, opacity ${t.motionDurationSlow} ease`,
        transformOrigin: "50% 50%",
        lineHeight: 1,
        color: t.colorPrimary,
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
        fontSize: t.dotSize,
        width: "1em",
        height: "1em",
        "&-item": {
          position: "absolute",
          display: "block",
          width: e(t.dotSize).sub(e(t.marginXXS).div(2)).div(2).equal(),
          height: e(t.dotSize).sub(e(t.marginXXS).div(2)).div(2).equal(),
          background: "currentColor",
          borderRadius: "100%",
          transform: "scale(0.75)",
          transformOrigin: "50% 50%",
          opacity: 0.3,
          animationName: Sm,
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
          animationName: wm,
          animationDuration: "1.2s",
          animationIterationCount: "infinite",
          animationTimingFunction: "linear"
        },
        "&-circle": {
          strokeLinecap: "round",
          transition: ["stroke-dashoffset", "stroke-dasharray", "stroke", "stroke-width", "opacity"].map((r) => `${r} ${t.motionDurationSlow} ease`).join(","),
          fillOpacity: 0,
          stroke: "currentcolor"
        },
        "&-circle-bg": {
          stroke: t.colorFillSecondary
        }
      },
      // small
      [`&-sm ${n}-dot`]: {
        "&, &-holder": {
          fontSize: t.dotSizeSM
        }
      },
      [`&-sm ${n}-dot-holder`]: {
        i: {
          width: e(e(t.dotSizeSM).sub(e(t.marginXXS).div(2))).div(2).equal(),
          height: e(e(t.dotSizeSM).sub(e(t.marginXXS).div(2))).div(2).equal()
        }
      },
      // large
      [`&-lg ${n}-dot`]: {
        "&, &-holder": {
          fontSize: t.dotSizeLG
        }
      },
      [`&-lg ${n}-dot-holder`]: {
        i: {
          width: e(e(t.dotSizeLG).sub(t.marginXXS)).div(2).equal(),
          height: e(e(t.dotSizeLG).sub(t.marginXXS)).div(2).equal()
        }
      },
      [`&${n}-show-text ${n}-text`]: {
        display: "block"
      }
    })
  };
}, _m = (t) => {
  const {
    controlHeightLG: n,
    controlHeight: e
  } = t;
  return {
    contentHeight: 400,
    dotSize: n / 2,
    dotSizeSM: n * 0.35,
    dotSizeLG: e
  };
}, Cm = la("Spin", (t) => {
  const n = ei(t, {
    spinDotDefault: t.colorTextDescription
  });
  return [Em(n)];
}, _m), Am = 200, Mc = [[30, 0.05], [70, 0.03], [96, 0.01]];
function Tm(t, n) {
  const [e, r] = E.useState(0), o = E.useRef(null), i = n === "auto";
  return E.useEffect(() => (i && t && (r(0), o.current = setInterval(() => {
    r((s) => {
      const a = 100 - s;
      for (let c = 0; c < Mc.length; c += 1) {
        const [l, f] = Mc[c];
        if (s <= l)
          return s + a * f;
      }
      return s;
    });
  }, Am)), () => {
    clearInterval(o.current);
  }), [i, t]), i ? e : n;
}
var Om = function(t, n) {
  var e = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && n.indexOf(r) < 0 && (e[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(t); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (e[r[o]] = t[r[o]]);
  return e;
};
let Ef;
function Rm(t, n) {
  return !!t && !!n && !Number.isNaN(Number(n));
}
const xr = (t) => {
  var n;
  const {
    prefixCls: e,
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
  } = t, h = Om(t, ["prefixCls", "spinning", "delay", "className", "rootClassName", "size", "tip", "wrapperClassName", "style", "children", "fullscreen", "indicator", "percent"]), {
    getPrefixCls: x,
    direction: w,
    className: S,
    style: p,
    indicator: C
  } = Du("spin"), y = x("spin", e), [R, _, j] = Cm(y), [B, X] = E.useState(() => r && !Rm(r, o)), re = Tm(B, g);
  E.useEffect(() => {
    if (r) {
      const Z = im(o, () => {
        X(!0);
      });
      return Z(), () => {
        var J;
        (J = Z == null ? void 0 : Z.cancel) === null || J === void 0 || J.call(Z);
      };
    }
    X(!1);
  }, [o, r]);
  const $ = E.useMemo(() => typeof d < "u" && !u, [d, u]);
  if (process.env.NODE_ENV !== "production") {
    const Z = Gn("Spin");
    process.env.NODE_ENV !== "production" && Z(!c || $ || u, "usage", "`tip` only work in nest or fullscreen pattern.");
  }
  const D = tt(y, S, {
    [`${y}-sm`]: a === "small",
    [`${y}-lg`]: a === "large",
    [`${y}-spinning`]: B,
    [`${y}-show-text`]: !!c,
    [`${y}-rtl`]: w === "rtl"
  }, i, !u && s, _, j), W = tt(`${y}-container`, {
    [`${y}-blur`]: B
  }), H = (n = v ?? C) !== null && n !== void 0 ? n : Ef, Q = Object.assign(Object.assign({}, p), f), K = /* @__PURE__ */ E.createElement("div", Object.assign({}, h, {
    style: Q,
    className: D,
    "aria-live": "polite",
    "aria-busy": B
  }), /* @__PURE__ */ E.createElement(bm, {
    prefixCls: y,
    indicator: H,
    percent: re
  }), c && ($ || u) ? /* @__PURE__ */ E.createElement("div", {
    className: `${y}-text`
  }, c) : null);
  return R($ ? /* @__PURE__ */ E.createElement("div", Object.assign({}, h, {
    className: tt(`${y}-nested-loading`, l, _, j)
  }), B && /* @__PURE__ */ E.createElement("div", {
    key: "loading"
  }, K), /* @__PURE__ */ E.createElement("div", {
    className: W,
    key: "container"
  }, d)) : u ? /* @__PURE__ */ E.createElement("div", {
    className: tt(`${y}-fullscreen`, {
      [`${y}-fullscreen-show`]: B
    }, s, _, j)
  }, K) : K);
};
xr.setDefaultIndicator = (t) => {
  Ef = t;
};
process.env.NODE_ENV !== "production" && (xr.displayName = "Spin");
function _f(t, n) {
  return function() {
    return t.apply(n, arguments);
  };
}
const { toString: Pm } = Object.prototype, { getPrototypeOf: da } = Object, { iterator: ti, toStringTag: Cf } = Symbol, ni = /* @__PURE__ */ ((t) => (n) => {
  const e = Pm.call(n);
  return t[e] || (t[e] = e.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Rt = (t) => (t = t.toLowerCase(), (n) => ni(n) === t), ri = (t) => (n) => typeof n === t, { isArray: Jn } = Array, Sr = ri("undefined");
function km(t) {
  return t !== null && !Sr(t) && t.constructor !== null && !Sr(t.constructor) && at(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const Af = Rt("ArrayBuffer");
function Im(t) {
  let n;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? n = ArrayBuffer.isView(t) : n = t && t.buffer && Af(t.buffer), n;
}
const Nm = ri("string"), at = ri("function"), Tf = ri("number"), oi = (t) => t !== null && typeof t == "object", jm = (t) => t === !0 || t === !1, co = (t) => {
  if (ni(t) !== "object")
    return !1;
  const n = da(t);
  return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Cf in t) && !(ti in t);
}, Mm = Rt("Date"), Lm = Rt("File"), Dm = Rt("Blob"), Bm = Rt("FileList"), Fm = (t) => oi(t) && at(t.pipe), zm = (t) => {
  let n;
  return t && (typeof FormData == "function" && t instanceof FormData || at(t.append) && ((n = ni(t)) === "formdata" || // detect form-data instance
  n === "object" && at(t.toString) && t.toString() === "[object FormData]"));
}, Vm = Rt("URLSearchParams"), [Hm, Um, qm, Wm] = ["ReadableStream", "Request", "Response", "Headers"].map(Rt), Xm = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Cr(t, n, { allOwnKeys: e = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let r, o;
  if (typeof t != "object" && (t = [t]), Jn(t))
    for (r = 0, o = t.length; r < o; r++)
      n.call(null, t[r], r, t);
  else {
    const i = e ? Object.getOwnPropertyNames(t) : Object.keys(t), s = i.length;
    let a;
    for (r = 0; r < s; r++)
      a = i[r], n.call(null, t[a], a, t);
  }
}
function Of(t, n) {
  n = n.toLowerCase();
  const e = Object.keys(t);
  let r = e.length, o;
  for (; r-- > 0; )
    if (o = e[r], n === o.toLowerCase())
      return o;
  return null;
}
const xn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Rf = (t) => !Sr(t) && t !== xn;
function Ps() {
  const { caseless: t } = Rf(this) && this || {}, n = {}, e = (r, o) => {
    const i = t && Of(n, o) || o;
    co(n[i]) && co(r) ? n[i] = Ps(n[i], r) : co(r) ? n[i] = Ps({}, r) : Jn(r) ? n[i] = r.slice() : n[i] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Cr(arguments[r], e);
  return n;
}
const Ym = (t, n, e, { allOwnKeys: r } = {}) => (Cr(n, (o, i) => {
  e && at(o) ? t[i] = _f(o, e) : t[i] = o;
}, { allOwnKeys: r }), t), $m = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), Gm = (t, n, e, r) => {
  t.prototype = Object.create(n.prototype, r), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: n.prototype
  }), e && Object.assign(t.prototype, e);
}, Km = (t, n, e, r) => {
  let o, i, s;
  const a = {};
  if (n = n || {}, t == null) return n;
  do {
    for (o = Object.getOwnPropertyNames(t), i = o.length; i-- > 0; )
      s = o[i], (!r || r(s, t, n)) && !a[s] && (n[s] = t[s], a[s] = !0);
    t = e !== !1 && da(t);
  } while (t && (!e || e(t, n)) && t !== Object.prototype);
  return n;
}, Zm = (t, n, e) => {
  t = String(t), (e === void 0 || e > t.length) && (e = t.length), e -= n.length;
  const r = t.indexOf(n, e);
  return r !== -1 && r === e;
}, Jm = (t) => {
  if (!t) return null;
  if (Jn(t)) return t;
  let n = t.length;
  if (!Tf(n)) return null;
  const e = new Array(n);
  for (; n-- > 0; )
    e[n] = t[n];
  return e;
}, Qm = /* @__PURE__ */ ((t) => (n) => t && n instanceof t)(typeof Uint8Array < "u" && da(Uint8Array)), eg = (t, n) => {
  const r = (t && t[ti]).call(t);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const i = o.value;
    n.call(t, i[0], i[1]);
  }
}, tg = (t, n) => {
  let e;
  const r = [];
  for (; (e = t.exec(n)) !== null; )
    r.push(e);
  return r;
}, ng = Rt("HTMLFormElement"), rg = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(e, r, o) {
    return r.toUpperCase() + o;
  }
), Lc = (({ hasOwnProperty: t }) => (n, e) => t.call(n, e))(Object.prototype), og = Rt("RegExp"), Pf = (t, n) => {
  const e = Object.getOwnPropertyDescriptors(t), r = {};
  Cr(e, (o, i) => {
    let s;
    (s = n(o, i, t)) !== !1 && (r[i] = s || o);
  }), Object.defineProperties(t, r);
}, ig = (t) => {
  Pf(t, (n, e) => {
    if (at(t) && ["arguments", "caller", "callee"].indexOf(e) !== -1)
      return !1;
    const r = t[e];
    if (at(r)) {
      if (n.enumerable = !1, "writable" in n) {
        n.writable = !1;
        return;
      }
      n.set || (n.set = () => {
        throw Error("Can not rewrite read-only method '" + e + "'");
      });
    }
  });
}, sg = (t, n) => {
  const e = {}, r = (o) => {
    o.forEach((i) => {
      e[i] = !0;
    });
  };
  return Jn(t) ? r(t) : r(String(t).split(n)), e;
}, ag = () => {
}, cg = (t, n) => t != null && Number.isFinite(t = +t) ? t : n;
function lg(t) {
  return !!(t && at(t.append) && t[Cf] === "FormData" && t[ti]);
}
const ug = (t) => {
  const n = new Array(10), e = (r, o) => {
    if (oi(r)) {
      if (n.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        n[o] = r;
        const i = Jn(r) ? [] : {};
        return Cr(r, (s, a) => {
          const c = e(s, o + 1);
          !Sr(c) && (i[a] = c);
        }), n[o] = void 0, i;
      }
    }
    return r;
  };
  return e(t, 0);
}, fg = Rt("AsyncFunction"), dg = (t) => t && (oi(t) || at(t)) && at(t.then) && at(t.catch), kf = ((t, n) => t ? setImmediate : n ? ((e, r) => (xn.addEventListener("message", ({ source: o, data: i }) => {
  o === xn && i === e && r.length && r.shift()();
}, !1), (o) => {
  r.push(o), xn.postMessage(e, "*");
}))(`axios@${Math.random()}`, []) : (e) => setTimeout(e))(
  typeof setImmediate == "function",
  at(xn.postMessage)
), hg = typeof queueMicrotask < "u" ? queueMicrotask.bind(xn) : typeof process < "u" && process.nextTick || kf, xg = (t) => t != null && at(t[ti]), A = {
  isArray: Jn,
  isArrayBuffer: Af,
  isBuffer: km,
  isFormData: zm,
  isArrayBufferView: Im,
  isString: Nm,
  isNumber: Tf,
  isBoolean: jm,
  isObject: oi,
  isPlainObject: co,
  isReadableStream: Hm,
  isRequest: Um,
  isResponse: qm,
  isHeaders: Wm,
  isUndefined: Sr,
  isDate: Mm,
  isFile: Lm,
  isBlob: Dm,
  isRegExp: og,
  isFunction: at,
  isStream: Fm,
  isURLSearchParams: Vm,
  isTypedArray: Qm,
  isFileList: Bm,
  forEach: Cr,
  merge: Ps,
  extend: Ym,
  trim: Xm,
  stripBOM: $m,
  inherits: Gm,
  toFlatObject: Km,
  kindOf: ni,
  kindOfTest: Rt,
  endsWith: Zm,
  toArray: Jm,
  forEachEntry: eg,
  matchAll: tg,
  isHTMLForm: ng,
  hasOwnProperty: Lc,
  hasOwnProp: Lc,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Pf,
  freezeMethods: ig,
  toObjectSet: sg,
  toCamelCase: rg,
  noop: ag,
  toFiniteNumber: cg,
  findKey: Of,
  global: xn,
  isContextDefined: Rf,
  isSpecCompliantForm: lg,
  toJSONObject: ug,
  isAsyncFn: fg,
  isThenable: dg,
  setImmediate: kf,
  asap: hg,
  isIterable: xg
};
function ne(t, n, e, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", n && (this.code = n), e && (this.config = e), r && (this.request = r), o && (this.response = o, this.status = o.status ? o.status : null);
}
A.inherits(ne, Error, {
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
const If = ne.prototype, Nf = {};
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
].forEach((t) => {
  Nf[t] = { value: t };
});
Object.defineProperties(ne, Nf);
Object.defineProperty(If, "isAxiosError", { value: !0 });
ne.from = (t, n, e, r, o, i) => {
  const s = Object.create(If);
  return A.toFlatObject(t, s, function(c) {
    return c !== Error.prototype;
  }, (a) => a !== "isAxiosError"), ne.call(s, t.message, n, e, r, o), s.cause = t, s.name = t.name, i && Object.assign(s, i), s;
};
const pg = null;
function ks(t) {
  return A.isPlainObject(t) || A.isArray(t);
}
function jf(t) {
  return A.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Dc(t, n, e) {
  return t ? t.concat(n).map(function(o, i) {
    return o = jf(o), !e && i ? "[" + o + "]" : o;
  }).join(e ? "." : "") : n;
}
function mg(t) {
  return A.isArray(t) && !t.some(ks);
}
const gg = A.toFlatObject(A, {}, null, function(n) {
  return /^is[A-Z]/.test(n);
});
function ii(t, n, e) {
  if (!A.isObject(t))
    throw new TypeError("target must be an object");
  n = n || new FormData(), e = A.toFlatObject(e, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(h, x) {
    return !A.isUndefined(x[h]);
  });
  const r = e.metaTokens, o = e.visitor || f, i = e.dots, s = e.indexes, c = (e.Blob || typeof Blob < "u" && Blob) && A.isSpecCompliantForm(n);
  if (!A.isFunction(o))
    throw new TypeError("visitor must be a function");
  function l(g) {
    if (g === null) return "";
    if (A.isDate(g))
      return g.toISOString();
    if (!c && A.isBlob(g))
      throw new ne("Blob is not supported. Use a Buffer instead.");
    return A.isArrayBuffer(g) || A.isTypedArray(g) ? c && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function f(g, h, x) {
    let w = g;
    if (g && !x && typeof g == "object") {
      if (A.endsWith(h, "{}"))
        h = r ? h : h.slice(0, -2), g = JSON.stringify(g);
      else if (A.isArray(g) && mg(g) || (A.isFileList(g) || A.endsWith(h, "[]")) && (w = A.toArray(g)))
        return h = jf(h), w.forEach(function(p, C) {
          !(A.isUndefined(p) || p === null) && n.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? Dc([h], C, i) : s === null ? h : h + "[]",
            l(p)
          );
        }), !1;
    }
    return ks(g) ? !0 : (n.append(Dc(x, h, i), l(g)), !1);
  }
  const d = [], u = Object.assign(gg, {
    defaultVisitor: f,
    convertValue: l,
    isVisitable: ks
  });
  function v(g, h) {
    if (!A.isUndefined(g)) {
      if (d.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      d.push(g), A.forEach(g, function(w, S) {
        (!(A.isUndefined(w) || w === null) && o.call(
          n,
          w,
          A.isString(S) ? S.trim() : S,
          h,
          u
        )) === !0 && v(w, h ? h.concat(S) : [S]);
      }), d.pop();
    }
  }
  if (!A.isObject(t))
    throw new TypeError("data must be an object");
  return v(t), n;
}
function Bc(t) {
  const n = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(r) {
    return n[r];
  });
}
function ha(t, n) {
  this._pairs = [], t && ii(t, this, n);
}
const Mf = ha.prototype;
Mf.append = function(n, e) {
  this._pairs.push([n, e]);
};
Mf.toString = function(n) {
  const e = n ? function(r) {
    return n.call(this, r, Bc);
  } : Bc;
  return this._pairs.map(function(o) {
    return e(o[0]) + "=" + e(o[1]);
  }, "").join("&");
};
function vg(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Lf(t, n, e) {
  if (!n)
    return t;
  const r = e && e.encode || vg;
  A.isFunction(e) && (e = {
    serialize: e
  });
  const o = e && e.serialize;
  let i;
  if (o ? i = o(n, e) : i = A.isURLSearchParams(n) ? n.toString() : new ha(n, e).toString(r), i) {
    const s = t.indexOf("#");
    s !== -1 && (t = t.slice(0, s)), t += (t.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return t;
}
class Fc {
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
  use(n, e, r) {
    return this.handlers.push({
      fulfilled: n,
      rejected: e,
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
const Df = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, yg = typeof URLSearchParams < "u" ? URLSearchParams : ha, bg = typeof FormData < "u" ? FormData : null, Sg = typeof Blob < "u" ? Blob : null, wg = {
  isBrowser: !0,
  classes: {
    URLSearchParams: yg,
    FormData: bg,
    Blob: Sg
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, xa = typeof window < "u" && typeof document < "u", Is = typeof navigator == "object" && navigator || void 0, Eg = xa && (!Is || ["ReactNative", "NativeScript", "NS"].indexOf(Is.product) < 0), _g = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Cg = xa && window.location.href || "http://localhost", Ag = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: xa,
  hasStandardBrowserEnv: Eg,
  hasStandardBrowserWebWorkerEnv: _g,
  navigator: Is,
  origin: Cg
}, Symbol.toStringTag, { value: "Module" })), et = {
  ...Ag,
  ...wg
};
function Tg(t, n) {
  return ii(t, new et.classes.URLSearchParams(), Object.assign({
    visitor: function(e, r, o, i) {
      return et.isNode && A.isBuffer(e) ? (this.append(r, e.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, n));
}
function Og(t) {
  return A.matchAll(/\w+|\[(\w*)]/g, t).map((n) => n[0] === "[]" ? "" : n[1] || n[0]);
}
function Rg(t) {
  const n = {}, e = Object.keys(t);
  let r;
  const o = e.length;
  let i;
  for (r = 0; r < o; r++)
    i = e[r], n[i] = t[i];
  return n;
}
function Bf(t) {
  function n(e, r, o, i) {
    let s = e[i++];
    if (s === "__proto__") return !0;
    const a = Number.isFinite(+s), c = i >= e.length;
    return s = !s && A.isArray(o) ? o.length : s, c ? (A.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !a) : ((!o[s] || !A.isObject(o[s])) && (o[s] = []), n(e, r, o[s], i) && A.isArray(o[s]) && (o[s] = Rg(o[s])), !a);
  }
  if (A.isFormData(t) && A.isFunction(t.entries)) {
    const e = {};
    return A.forEachEntry(t, (r, o) => {
      n(Og(r), o, e, 0);
    }), e;
  }
  return null;
}
function Pg(t, n, e) {
  if (A.isString(t))
    try {
      return (n || JSON.parse)(t), A.trim(t);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (e || JSON.stringify)(t);
}
const Ar = {
  transitional: Df,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(n, e) {
    const r = e.getContentType() || "", o = r.indexOf("application/json") > -1, i = A.isObject(n);
    if (i && A.isHTMLForm(n) && (n = new FormData(n)), A.isFormData(n))
      return o ? JSON.stringify(Bf(n)) : n;
    if (A.isArrayBuffer(n) || A.isBuffer(n) || A.isStream(n) || A.isFile(n) || A.isBlob(n) || A.isReadableStream(n))
      return n;
    if (A.isArrayBufferView(n))
      return n.buffer;
    if (A.isURLSearchParams(n))
      return e.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), n.toString();
    let a;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Tg(n, this.formSerializer).toString();
      if ((a = A.isFileList(n)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return ii(
          a ? { "files[]": n } : n,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return i || o ? (e.setContentType("application/json", !1), Pg(n)) : n;
  }],
  transformResponse: [function(n) {
    const e = this.transitional || Ar.transitional, r = e && e.forcedJSONParsing, o = this.responseType === "json";
    if (A.isResponse(n) || A.isReadableStream(n))
      return n;
    if (n && A.isString(n) && (r && !this.responseType || o)) {
      const s = !(e && e.silentJSONParsing) && o;
      try {
        return JSON.parse(n);
      } catch (a) {
        if (s)
          throw a.name === "SyntaxError" ? ne.from(a, ne.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
A.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  Ar.headers[t] = {};
});
const kg = A.toObjectSet([
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
]), Ig = (t) => {
  const n = {};
  let e, r, o;
  return t && t.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), e = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!e || n[e] && kg[e]) && (e === "set-cookie" ? n[e] ? n[e].push(r) : n[e] = [r] : n[e] = n[e] ? n[e] + ", " + r : r);
  }), n;
}, zc = Symbol("internals");
function ar(t) {
  return t && String(t).trim().toLowerCase();
}
function lo(t) {
  return t === !1 || t == null ? t : A.isArray(t) ? t.map(lo) : String(t);
}
function Ng(t) {
  const n = /* @__PURE__ */ Object.create(null), e = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = e.exec(t); )
    n[r[1]] = r[2];
  return n;
}
const jg = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function ki(t, n, e, r, o) {
  if (A.isFunction(r))
    return r.call(this, n, e);
  if (o && (n = e), !!A.isString(n)) {
    if (A.isString(r))
      return n.indexOf(r) !== -1;
    if (A.isRegExp(r))
      return r.test(n);
  }
}
function Mg(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (n, e, r) => e.toUpperCase() + r);
}
function Lg(t, n) {
  const e = A.toCamelCase(" " + n);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(t, r + e, {
      value: function(o, i, s) {
        return this[r].call(this, n, o, i, s);
      },
      configurable: !0
    });
  });
}
let ct = class {
  constructor(n) {
    n && this.set(n);
  }
  set(n, e, r) {
    const o = this;
    function i(a, c, l) {
      const f = ar(c);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const d = A.findKey(o, f);
      (!d || o[d] === void 0 || l === !0 || l === void 0 && o[d] !== !1) && (o[d || c] = lo(a));
    }
    const s = (a, c) => A.forEach(a, (l, f) => i(l, f, c));
    if (A.isPlainObject(n) || n instanceof this.constructor)
      s(n, e);
    else if (A.isString(n) && (n = n.trim()) && !jg(n))
      s(Ig(n), e);
    else if (A.isObject(n) && A.isIterable(n)) {
      let a = {}, c, l;
      for (const f of n) {
        if (!A.isArray(f))
          throw TypeError("Object iterator must return a key-value pair");
        a[l = f[0]] = (c = a[l]) ? A.isArray(c) ? [...c, f[1]] : [c, f[1]] : f[1];
      }
      s(a, e);
    } else
      n != null && i(e, n, r);
    return this;
  }
  get(n, e) {
    if (n = ar(n), n) {
      const r = A.findKey(this, n);
      if (r) {
        const o = this[r];
        if (!e)
          return o;
        if (e === !0)
          return Ng(o);
        if (A.isFunction(e))
          return e.call(this, o, r);
        if (A.isRegExp(e))
          return e.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(n, e) {
    if (n = ar(n), n) {
      const r = A.findKey(this, n);
      return !!(r && this[r] !== void 0 && (!e || ki(this, this[r], r, e)));
    }
    return !1;
  }
  delete(n, e) {
    const r = this;
    let o = !1;
    function i(s) {
      if (s = ar(s), s) {
        const a = A.findKey(r, s);
        a && (!e || ki(r, r[a], a, e)) && (delete r[a], o = !0);
      }
    }
    return A.isArray(n) ? n.forEach(i) : i(n), o;
  }
  clear(n) {
    const e = Object.keys(this);
    let r = e.length, o = !1;
    for (; r--; ) {
      const i = e[r];
      (!n || ki(this, this[i], i, n, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(n) {
    const e = this, r = {};
    return A.forEach(this, (o, i) => {
      const s = A.findKey(r, i);
      if (s) {
        e[s] = lo(o), delete e[i];
        return;
      }
      const a = n ? Mg(i) : String(i).trim();
      a !== i && delete e[i], e[a] = lo(o), r[a] = !0;
    }), this;
  }
  concat(...n) {
    return this.constructor.concat(this, ...n);
  }
  toJSON(n) {
    const e = /* @__PURE__ */ Object.create(null);
    return A.forEach(this, (r, o) => {
      r != null && r !== !1 && (e[o] = n && A.isArray(r) ? r.join(", ") : r);
    }), e;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([n, e]) => n + ": " + e).join(`
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
  static concat(n, ...e) {
    const r = new this(n);
    return e.forEach((o) => r.set(o)), r;
  }
  static accessor(n) {
    const r = (this[zc] = this[zc] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(s) {
      const a = ar(s);
      r[a] || (Lg(o, s), r[a] = !0);
    }
    return A.isArray(n) ? n.forEach(i) : i(n), this;
  }
};
ct.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
A.reduceDescriptors(ct.prototype, ({ value: t }, n) => {
  let e = n[0].toUpperCase() + n.slice(1);
  return {
    get: () => t,
    set(r) {
      this[e] = r;
    }
  };
});
A.freezeMethods(ct);
function Ii(t, n) {
  const e = this || Ar, r = n || e, o = ct.from(r.headers);
  let i = r.data;
  return A.forEach(t, function(a) {
    i = a.call(e, i, o.normalize(), n ? n.status : void 0);
  }), o.normalize(), i;
}
function Ff(t) {
  return !!(t && t.__CANCEL__);
}
function Qn(t, n, e) {
  ne.call(this, t ?? "canceled", ne.ERR_CANCELED, n, e), this.name = "CanceledError";
}
A.inherits(Qn, ne, {
  __CANCEL__: !0
});
function zf(t, n, e) {
  const r = e.config.validateStatus;
  !e.status || !r || r(e.status) ? t(e) : n(new ne(
    "Request failed with status code " + e.status,
    [ne.ERR_BAD_REQUEST, ne.ERR_BAD_RESPONSE][Math.floor(e.status / 100) - 4],
    e.config,
    e.request,
    e
  ));
}
function Dg(t) {
  const n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return n && n[1] || "";
}
function Bg(t, n) {
  t = t || 10;
  const e = new Array(t), r = new Array(t);
  let o = 0, i = 0, s;
  return n = n !== void 0 ? n : 1e3, function(c) {
    const l = Date.now(), f = r[i];
    s || (s = l), e[o] = c, r[o] = l;
    let d = i, u = 0;
    for (; d !== o; )
      u += e[d++], d = d % t;
    if (o = (o + 1) % t, o === i && (i = (i + 1) % t), l - s < n)
      return;
    const v = f && l - f;
    return v ? Math.round(u * 1e3 / v) : void 0;
  };
}
function Fg(t, n) {
  let e = 0, r = 1e3 / n, o, i;
  const s = (l, f = Date.now()) => {
    e = f, o = null, i && (clearTimeout(i), i = null), t.apply(null, l);
  };
  return [(...l) => {
    const f = Date.now(), d = f - e;
    d >= r ? s(l, f) : (o = l, i || (i = setTimeout(() => {
      i = null, s(o);
    }, r - d)));
  }, () => o && s(o)];
}
const _o = (t, n, e = 3) => {
  let r = 0;
  const o = Bg(50, 250);
  return Fg((i) => {
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
    t(d);
  }, e);
}, Vc = (t, n) => {
  const e = t != null;
  return [(r) => n[0]({
    lengthComputable: e,
    total: t,
    loaded: r
  }), n[1]];
}, Hc = (t) => (...n) => A.asap(() => t(...n)), zg = et.hasStandardBrowserEnv ? /* @__PURE__ */ ((t, n) => (e) => (e = new URL(e, et.origin), t.protocol === e.protocol && t.host === e.host && (n || t.port === e.port)))(
  new URL(et.origin),
  et.navigator && /(msie|trident)/i.test(et.navigator.userAgent)
) : () => !0, Vg = et.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, n, e, r, o, i) {
      const s = [t + "=" + encodeURIComponent(n)];
      A.isNumber(e) && s.push("expires=" + new Date(e).toGMTString()), A.isString(r) && s.push("path=" + r), A.isString(o) && s.push("domain=" + o), i === !0 && s.push("secure"), document.cookie = s.join("; ");
    },
    read(t) {
      const n = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
      return n ? decodeURIComponent(n[3]) : null;
    },
    remove(t) {
      this.write(t, "", Date.now() - 864e5);
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
function Hg(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function Ug(t, n) {
  return n ? t.replace(/\/?\/$/, "") + "/" + n.replace(/^\/+/, "") : t;
}
function Vf(t, n, e) {
  let r = !Hg(n);
  return t && (r || e == !1) ? Ug(t, n) : n;
}
const Uc = (t) => t instanceof ct ? { ...t } : t;
function En(t, n) {
  n = n || {};
  const e = {};
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
    if (d in t)
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
    headers: (l, f, d) => o(Uc(l), Uc(f), d, !0)
  };
  return A.forEach(Object.keys(Object.assign({}, t, n)), function(f) {
    const d = c[f] || o, u = d(t[f], n[f], f);
    A.isUndefined(u) && d !== a || (e[f] = u);
  }), e;
}
const Hf = (t) => {
  const n = En({}, t);
  let { data: e, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: i, headers: s, auth: a } = n;
  n.headers = s = ct.from(s), n.url = Lf(Vf(n.baseURL, n.url, n.allowAbsoluteUrls), t.params, t.paramsSerializer), a && s.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let c;
  if (A.isFormData(e)) {
    if (et.hasStandardBrowserEnv || et.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if ((c = s.getContentType()) !== !1) {
      const [l, ...f] = c ? c.split(";").map((d) => d.trim()).filter(Boolean) : [];
      s.setContentType([l || "multipart/form-data", ...f].join("; "));
    }
  }
  if (et.hasStandardBrowserEnv && (r && A.isFunction(r) && (r = r(n)), r || r !== !1 && zg(n.url))) {
    const l = o && i && Vg.read(i);
    l && s.set(o, l);
  }
  return n;
}, qg = typeof XMLHttpRequest < "u", Wg = qg && function(t) {
  return new Promise(function(e, r) {
    const o = Hf(t);
    let i = o.data;
    const s = ct.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: c, onDownloadProgress: l } = o, f, d, u, v, g;
    function h() {
      v && v(), g && g(), o.cancelToken && o.cancelToken.unsubscribe(f), o.signal && o.signal.removeEventListener("abort", f);
    }
    let x = new XMLHttpRequest();
    x.open(o.method.toUpperCase(), o.url, !0), x.timeout = o.timeout;
    function w() {
      if (!x)
        return;
      const p = ct.from(
        "getAllResponseHeaders" in x && x.getAllResponseHeaders()
      ), y = {
        data: !a || a === "text" || a === "json" ? x.responseText : x.response,
        status: x.status,
        statusText: x.statusText,
        headers: p,
        config: t,
        request: x
      };
      zf(function(_) {
        e(_), h();
      }, function(_) {
        r(_), h();
      }, y), x = null;
    }
    "onloadend" in x ? x.onloadend = w : x.onreadystatechange = function() {
      !x || x.readyState !== 4 || x.status === 0 && !(x.responseURL && x.responseURL.indexOf("file:") === 0) || setTimeout(w);
    }, x.onabort = function() {
      x && (r(new ne("Request aborted", ne.ECONNABORTED, t, x)), x = null);
    }, x.onerror = function() {
      r(new ne("Network Error", ne.ERR_NETWORK, t, x)), x = null;
    }, x.ontimeout = function() {
      let C = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const y = o.transitional || Df;
      o.timeoutErrorMessage && (C = o.timeoutErrorMessage), r(new ne(
        C,
        y.clarifyTimeoutError ? ne.ETIMEDOUT : ne.ECONNABORTED,
        t,
        x
      )), x = null;
    }, i === void 0 && s.setContentType(null), "setRequestHeader" in x && A.forEach(s.toJSON(), function(C, y) {
      x.setRequestHeader(y, C);
    }), A.isUndefined(o.withCredentials) || (x.withCredentials = !!o.withCredentials), a && a !== "json" && (x.responseType = o.responseType), l && ([u, g] = _o(l, !0), x.addEventListener("progress", u)), c && x.upload && ([d, v] = _o(c), x.upload.addEventListener("progress", d), x.upload.addEventListener("loadend", v)), (o.cancelToken || o.signal) && (f = (p) => {
      x && (r(!p || p.type ? new Qn(null, t, x) : p), x.abort(), x = null);
    }, o.cancelToken && o.cancelToken.subscribe(f), o.signal && (o.signal.aborted ? f() : o.signal.addEventListener("abort", f)));
    const S = Dg(o.url);
    if (S && et.protocols.indexOf(S) === -1) {
      r(new ne("Unsupported protocol " + S + ":", ne.ERR_BAD_REQUEST, t));
      return;
    }
    x.send(i || null);
  });
}, Xg = (t, n) => {
  const { length: e } = t = t ? t.filter(Boolean) : [];
  if (n || e) {
    let r = new AbortController(), o;
    const i = function(l) {
      if (!o) {
        o = !0, a();
        const f = l instanceof Error ? l : this.reason;
        r.abort(f instanceof ne ? f : new Qn(f instanceof Error ? f.message : f));
      }
    };
    let s = n && setTimeout(() => {
      s = null, i(new ne(`timeout ${n} of ms exceeded`, ne.ETIMEDOUT));
    }, n);
    const a = () => {
      t && (s && clearTimeout(s), s = null, t.forEach((l) => {
        l.unsubscribe ? l.unsubscribe(i) : l.removeEventListener("abort", i);
      }), t = null);
    };
    t.forEach((l) => l.addEventListener("abort", i));
    const { signal: c } = r;
    return c.unsubscribe = () => A.asap(a), c;
  }
}, Yg = function* (t, n) {
  let e = t.byteLength;
  if (e < n) {
    yield t;
    return;
  }
  let r = 0, o;
  for (; r < e; )
    o = r + n, yield t.slice(r, o), r = o;
}, $g = async function* (t, n) {
  for await (const e of Gg(t))
    yield* Yg(e, n);
}, Gg = async function* (t) {
  if (t[Symbol.asyncIterator]) {
    yield* t;
    return;
  }
  const n = t.getReader();
  try {
    for (; ; ) {
      const { done: e, value: r } = await n.read();
      if (e)
        break;
      yield r;
    }
  } finally {
    await n.cancel();
  }
}, qc = (t, n, e, r) => {
  const o = $g(t, n);
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
        if (e) {
          let u = i += d;
          e(u);
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
}, si = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Uf = si && typeof ReadableStream == "function", Kg = si && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((t) => (n) => t.encode(n))(new TextEncoder()) : async (t) => new Uint8Array(await new Response(t).arrayBuffer())), qf = (t, ...n) => {
  try {
    return !!t(...n);
  } catch {
    return !1;
  }
}, Zg = Uf && qf(() => {
  let t = !1;
  const n = new Request(et.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return t = !0, "half";
    }
  }).headers.has("Content-Type");
  return t && !n;
}), Wc = 64 * 1024, Ns = Uf && qf(() => A.isReadableStream(new Response("").body)), Co = {
  stream: Ns && ((t) => t.body)
};
si && ((t) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((n) => {
    !Co[n] && (Co[n] = A.isFunction(t[n]) ? (e) => e[n]() : (e, r) => {
      throw new ne(`Response type '${n}' is not supported`, ne.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Jg = async (t) => {
  if (t == null)
    return 0;
  if (A.isBlob(t))
    return t.size;
  if (A.isSpecCompliantForm(t))
    return (await new Request(et.origin, {
      method: "POST",
      body: t
    }).arrayBuffer()).byteLength;
  if (A.isArrayBufferView(t) || A.isArrayBuffer(t))
    return t.byteLength;
  if (A.isURLSearchParams(t) && (t = t + ""), A.isString(t))
    return (await Kg(t)).byteLength;
}, Qg = async (t, n) => {
  const e = A.toFiniteNumber(t.getContentLength());
  return e ?? Jg(n);
}, ev = si && (async (t) => {
  let {
    url: n,
    method: e,
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
  } = Hf(t);
  l = l ? (l + "").toLowerCase() : "text";
  let v = Xg([o, i && i.toAbortSignal()], s), g;
  const h = v && v.unsubscribe && (() => {
    v.unsubscribe();
  });
  let x;
  try {
    if (c && Zg && e !== "get" && e !== "head" && (x = await Qg(f, r)) !== 0) {
      let y = new Request(n, {
        method: "POST",
        body: r,
        duplex: "half"
      }), R;
      if (A.isFormData(r) && (R = y.headers.get("content-type")) && f.setContentType(R), y.body) {
        const [_, j] = Vc(
          x,
          _o(Hc(c))
        );
        r = qc(y.body, Wc, _, j);
      }
    }
    A.isString(d) || (d = d ? "include" : "omit");
    const w = "credentials" in Request.prototype;
    g = new Request(n, {
      ...u,
      signal: v,
      method: e.toUpperCase(),
      headers: f.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: w ? d : void 0
    });
    let S = await fetch(g);
    const p = Ns && (l === "stream" || l === "response");
    if (Ns && (a || p && h)) {
      const y = {};
      ["status", "statusText", "headers"].forEach((B) => {
        y[B] = S[B];
      });
      const R = A.toFiniteNumber(S.headers.get("content-length")), [_, j] = a && Vc(
        R,
        _o(Hc(a), !0)
      ) || [];
      S = new Response(
        qc(S.body, Wc, _, () => {
          j && j(), h && h();
        }),
        y
      );
    }
    l = l || "text";
    let C = await Co[A.findKey(Co, l) || "text"](S, t);
    return !p && h && h(), await new Promise((y, R) => {
      zf(y, R, {
        data: C,
        headers: ct.from(S.headers),
        status: S.status,
        statusText: S.statusText,
        config: t,
        request: g
      });
    });
  } catch (w) {
    throw h && h(), w && w.name === "TypeError" && /Load failed|fetch/i.test(w.message) ? Object.assign(
      new ne("Network Error", ne.ERR_NETWORK, t, g),
      {
        cause: w.cause || w
      }
    ) : ne.from(w, w && w.code, t, g);
  }
}), js = {
  http: pg,
  xhr: Wg,
  fetch: ev
};
A.forEach(js, (t, n) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: n });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: n });
  }
});
const Xc = (t) => `- ${t}`, tv = (t) => A.isFunction(t) || t === null || t === !1, Wf = {
  getAdapter: (t) => {
    t = A.isArray(t) ? t : [t];
    const { length: n } = t;
    let e, r;
    const o = {};
    for (let i = 0; i < n; i++) {
      e = t[i];
      let s;
      if (r = e, !tv(e) && (r = js[(s = String(e)).toLowerCase()], r === void 0))
        throw new ne(`Unknown adapter '${s}'`);
      if (r)
        break;
      o[s || "#" + i] = r;
    }
    if (!r) {
      const i = Object.entries(o).map(
        ([a, c]) => `adapter ${a} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let s = n ? i.length > 1 ? `since :
` + i.map(Xc).join(`
`) : " " + Xc(i[0]) : "as no adapter specified";
      throw new ne(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: js
};
function Ni(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new Qn(null, t);
}
function Yc(t) {
  return Ni(t), t.headers = ct.from(t.headers), t.data = Ii.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), Wf.getAdapter(t.adapter || Ar.adapter)(t).then(function(r) {
    return Ni(t), r.data = Ii.call(
      t,
      t.transformResponse,
      r
    ), r.headers = ct.from(r.headers), r;
  }, function(r) {
    return Ff(r) || (Ni(t), r && r.response && (r.response.data = Ii.call(
      t,
      t.transformResponse,
      r.response
    ), r.response.headers = ct.from(r.response.headers))), Promise.reject(r);
  });
}
const Xf = "1.9.0", ai = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, n) => {
  ai[t] = function(r) {
    return typeof r === t || "a" + (n < 1 ? "n " : " ") + t;
  };
});
const $c = {};
ai.transitional = function(n, e, r) {
  function o(i, s) {
    return "[Axios v" + Xf + "] Transitional option '" + i + "'" + s + (r ? ". " + r : "");
  }
  return (i, s, a) => {
    if (n === !1)
      throw new ne(
        o(s, " has been removed" + (e ? " in " + e : "")),
        ne.ERR_DEPRECATED
      );
    return e && !$c[s] && ($c[s] = !0, console.warn(
      o(
        s,
        " has been deprecated since v" + e + " and will be removed in the near future"
      )
    )), n ? n(i, s, a) : !0;
  };
};
ai.spelling = function(n) {
  return (e, r) => (console.warn(`${r} is likely a misspelling of ${n}`), !0);
};
function nv(t, n, e) {
  if (typeof t != "object")
    throw new ne("options must be an object", ne.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(t);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o], s = n[i];
    if (s) {
      const a = t[i], c = a === void 0 || s(a, i, t);
      if (c !== !0)
        throw new ne("option " + i + " must be " + c, ne.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (e !== !0)
      throw new ne("Unknown option " + i, ne.ERR_BAD_OPTION);
  }
}
const uo = {
  assertOptions: nv,
  validators: ai
}, jt = uo.validators;
let Sn = class {
  constructor(n) {
    this.defaults = n || {}, this.interceptors = {
      request: new Fc(),
      response: new Fc()
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
  async request(n, e) {
    try {
      return await this._request(n, e);
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
  _request(n, e) {
    typeof n == "string" ? (e = e || {}, e.url = n) : e = n || {}, e = En(this.defaults, e);
    const { transitional: r, paramsSerializer: o, headers: i } = e;
    r !== void 0 && uo.assertOptions(r, {
      silentJSONParsing: jt.transitional(jt.boolean),
      forcedJSONParsing: jt.transitional(jt.boolean),
      clarifyTimeoutError: jt.transitional(jt.boolean)
    }, !1), o != null && (A.isFunction(o) ? e.paramsSerializer = {
      serialize: o
    } : uo.assertOptions(o, {
      encode: jt.function,
      serialize: jt.function
    }, !0)), e.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? e.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : e.allowAbsoluteUrls = !0), uo.assertOptions(e, {
      baseUrl: jt.spelling("baseURL"),
      withXsrfToken: jt.spelling("withXSRFToken")
    }, !0), e.method = (e.method || this.defaults.method || "get").toLowerCase();
    let s = i && A.merge(
      i.common,
      i[e.method]
    );
    i && A.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (g) => {
        delete i[g];
      }
    ), e.headers = ct.concat(s, i);
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function(h) {
      typeof h.runWhen == "function" && h.runWhen(e) === !1 || (c = c && h.synchronous, a.unshift(h.fulfilled, h.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(h) {
      l.push(h.fulfilled, h.rejected);
    });
    let f, d = 0, u;
    if (!c) {
      const g = [Yc.bind(this), void 0];
      for (g.unshift.apply(g, a), g.push.apply(g, l), u = g.length, f = Promise.resolve(e); d < u; )
        f = f.then(g[d++], g[d++]);
      return f;
    }
    u = a.length;
    let v = e;
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
      f = Yc.call(this, v);
    } catch (g) {
      return Promise.reject(g);
    }
    for (d = 0, u = l.length; d < u; )
      f = f.then(l[d++], l[d++]);
    return f;
  }
  getUri(n) {
    n = En(this.defaults, n);
    const e = Vf(n.baseURL, n.url, n.allowAbsoluteUrls);
    return Lf(e, n.params, n.paramsSerializer);
  }
};
A.forEach(["delete", "get", "head", "options"], function(n) {
  Sn.prototype[n] = function(e, r) {
    return this.request(En(r || {}, {
      method: n,
      url: e,
      data: (r || {}).data
    }));
  };
});
A.forEach(["post", "put", "patch"], function(n) {
  function e(r) {
    return function(i, s, a) {
      return this.request(En(a || {}, {
        method: n,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: s
      }));
    };
  }
  Sn.prototype[n] = e(), Sn.prototype[n + "Form"] = e(!0);
});
let rv = class Yf {
  constructor(n) {
    if (typeof n != "function")
      throw new TypeError("executor must be a function.");
    let e;
    this.promise = new Promise(function(i) {
      e = i;
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
      r.reason || (r.reason = new Qn(i, s, a), e(r.reason));
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
    const e = this._listeners.indexOf(n);
    e !== -1 && this._listeners.splice(e, 1);
  }
  toAbortSignal() {
    const n = new AbortController(), e = (r) => {
      n.abort(r);
    };
    return this.subscribe(e), n.signal.unsubscribe = () => this.unsubscribe(e), n.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let n;
    return {
      token: new Yf(function(o) {
        n = o;
      }),
      cancel: n
    };
  }
};
function ov(t) {
  return function(e) {
    return t.apply(null, e);
  };
}
function iv(t) {
  return A.isObject(t) && t.isAxiosError === !0;
}
const Ms = {
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
Object.entries(Ms).forEach(([t, n]) => {
  Ms[n] = t;
});
function $f(t) {
  const n = new Sn(t), e = _f(Sn.prototype.request, n);
  return A.extend(e, Sn.prototype, n, { allOwnKeys: !0 }), A.extend(e, n, null, { allOwnKeys: !0 }), e.create = function(o) {
    return $f(En(t, o));
  }, e;
}
const Ne = $f(Ar);
Ne.Axios = Sn;
Ne.CanceledError = Qn;
Ne.CancelToken = rv;
Ne.isCancel = Ff;
Ne.VERSION = Xf;
Ne.toFormData = ii;
Ne.AxiosError = ne;
Ne.Cancel = Ne.CanceledError;
Ne.all = function(n) {
  return Promise.all(n);
};
Ne.spread = ov;
Ne.isAxiosError = iv;
Ne.mergeConfig = En;
Ne.AxiosHeaders = ct;
Ne.formToJSON = (t) => Bf(A.isHTMLForm(t) ? new FormData(t) : t);
Ne.getAdapter = Wf.getAdapter;
Ne.HttpStatusCode = Ms;
Ne.default = Ne;
const {
  Axios: Rv,
  AxiosError: Pv,
  CanceledError: kv,
  isCancel: Iv,
  CancelToken: Nv,
  VERSION: jv,
  all: Mv,
  Cancel: Lv,
  isAxiosError: Dv,
  spread: Bv,
  toFormData: Fv,
  AxiosHeaders: zv,
  HttpStatusCode: Vv,
  formToJSON: Hv,
  getAdapter: Uv,
  mergeConfig: qv
} = Ne, qt = To;
(function(t, n) {
  const e = To, r = t();
  for (; ; )
    try {
      if (parseInt(e(321)) / 1 + -parseInt(e(320)) / 2 * (parseInt(e(311)) / 3) + parseInt(e(322)) / 4 + -parseInt(e(339)) / 5 + parseInt(e(327)) / 6 * (parseInt(e(335)) / 7) + -parseInt(e(312)) / 8 * (-parseInt(e(326)) / 9) + parseInt(e(316)) / 10 * (-parseInt(e(325)) / 11) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Ao, 218342);
qt(330) + qt(319);
Ne[qt(323)][qt(338) + qt(328)] = !0;
const sv = async (t) => {
  var e, r, o, i;
  const n = qt;
  try {
    return (await Ne(t))[n(333)];
  } catch (s) {
    throw ((r = (e = s[n(315)]) == null ? void 0 : e[n(333)]) == null ? void 0 : r[n(331)]) || ((i = (o = s[n(315)]) == null ? void 0 : o[n(333)]) == null ? void 0 : i[n(332)]) || s[n(331)];
  }
}, av = {};
av[qt(334) + "pe"] = qt(324) + qt(313);
function Ao() {
  const t = ["withCreden", "45760blkfSx", "15nZAvCN", "608QzMFKV", "n/json", "PATCH", "response", "250borEHr", "params", "DELETE", "ient", "9298jYpEYV", "139255gCHfFw", "45724Tslsvl", "defaults", "applicatio", "92081yNCeAg", "17748ahsdLk", "956736ttyLjO", "tials", "PUT", "/api/v1/cl", "message", "error", "data", "Content-Ty", "7vtvoSk", "GET", "POST"];
  return Ao = function() {
    return t;
  }, Ao();
}
function To(t, n) {
  const e = Ao();
  return To = function(r, o) {
    return r = r - 311, e[r];
  }, To(t, n);
}
const _e = Oo;
(function(t, n) {
  const e = Oo, r = t();
  for (; ; )
    try {
      if (-parseInt(e(512)) / 1 * (parseInt(e(483)) / 2) + -parseInt(e(505)) / 3 + -parseInt(e(482)) / 4 * (-parseInt(e(492)) / 5) + parseInt(e(491)) / 6 + parseInt(e(501)) / 7 * (-parseInt(e(500)) / 8) + -parseInt(e(495)) / 9 * (-parseInt(e(485)) / 10) + -parseInt(e(497)) / 11 * (-parseInt(e(496)) / 12) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Ro, 438052);
function Oo(t, n) {
  const e = Ro();
  return Oo = function(r, o) {
    return r = r - 482, e[r];
  }, Oo(t, n);
}
const un = {};
un[_e(498)] = _e(489) + "E", un[_e(490)] = _e(488), un[_e(510)] = _e(506) + "N", un[_e(511)] = _e(489) + "E", un[_e(499)] = _e(488), un[_e(486)] = _e(506) + "N";
const Dt = un, Ls = {};
Ls[_e(503)] = _e(488), Ls[_e(513)] = _e(506) + "N";
const cv = Ls, lv = _e(502), uv = _e(484), fv = _e(487) + _e(493);
function Ro() {
  const t = ["38549tHGwfx", "moveEvent", "keyup", "fullscreen", "1751934VKRsON", "ACTION_DOW", "assistiveM", "shortcutEv", "Event", "mousedown", "touchmove", "8327iPOZhL", "keydown", "163092qRmCQX", "50NwryrW", "wheelEvent", "488540HNluiq", "touchstart", "keyBoardEv", "ACTION_UP", "ACTION_MOV", "mouseup", "1422648sAjzXC", "5Rgknhc", "ent", "enuHide", "54ggEYjW", "228vPzXSm", "780175PXuVBo", "mousemove", "touchend", "1000XiuvNh"];
  return Ro = function() {
    return t;
  }, Ro();
}
const Gf = _e(507) + _e(494), Ds = _e(508) + _e(493), dv = _e(504) + _e(509);
(function(t, n) {
  const e = pn, r = t();
  for (; ; )
    try {
      if (parseInt(e(444)) / 1 * (parseInt(e(416)) / 2) + parseInt(e(429)) / 3 + -parseInt(e(464)) / 4 * (parseInt(e(498)) / 5) + parseInt(e(445)) / 6 + -parseInt(e(461)) / 7 * (-parseInt(e(466)) / 8) + parseInt(e(438)) / 9 * (parseInt(e(431)) / 10) + parseInt(e(457)) / 11 * (-parseInt(e(435)) / 12) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Po, 378720);
function pn(t, n) {
  const e = Po();
  return pn = function(r, o) {
    return r = r - 403, e[r];
  }, pn(t, n);
}
function Po() {
  const t = ["1199565DvFMbf", "tab", "260990FOmYGj", "clientX", "JgPeb", "clipboard", "10227324mGTNMo", "CMuBp", "arrowdown", "135aDJXct", "shift", "AZZPm", "gXkQF", "HHYrW", "readText", "5491OZPWlr", "2482422LqVCCb", "includes", "zrUtg", "clientY", "type", "ault", "mouse", "meta_state", "XHjEO", "capslock", "KEYBOARD_T", "key", "11aaQYrY", "ctrlKey", "touchEvent", "TkGgW", "1351jNUaxO", "gClientRec", "typeKey", "93560MaArXi", "COPY_TEXT", "23888KiexFm", "width", "JkTwz", "pgyYx", "txYQb", "backspace", "current", "offsetWidt", "KXQpG", "keyAction", "pageY", "arrowright", "FKscG", "focus", "SsOBU", "pageX", "mgofy", "TPnOQ", "touch", "plDXM", "FIrFO", "isDown", "toUpperCas", "addEventLi", "LRwls", "ODE", "sstaj", "delta", "sRtqb", "passive", "enter", "KEYBOARD_C", "120iZTmej", "touchend", "control", "toLowerCas", "showMenu", "top", "vDyVj", "tListener", "left", "MNVBA", "kaPCR", "getBoundin", "PASTE_TEXT", "mouseup", "offsetHeig", "ULIDM", "wheelEvent", "forEach", "arrowleft", "hWyiv", "keyEvent", "XjJzE", "zyLbw", "deltaY", "trtPY", "removeEven", "preventDef", "BwMJg", "arrowup", "fSzfX", "EXT", "repeat", "mousemove", "4teEebt", "keydown", "touchmove", "action", "height", "shiftKey", "XBZSs", "stener", "zlMCe", "wheel", "touchstart", "ZopVU", "mousedown"];
  return Po = function() {
    return t;
  }, Po();
}
const hv = ({ isMobile: t, assistive: n, onImgEvent: e, canvasContent: r, imageRef: o }) => {
  const [i, s] = ot(!1), a = (d) => {
    const u = pn;
    if (u(407) === u(441)) _0x15604e[u(489) + u(423)](_0x19e244, _0x3f9be2);
    else {
      if (d[u(409) + u(450)](), !o[u(472)]) return;
      const v = o[u(472)];
      let g = Dt[d[u(449)]];
      if (n[u(487)] == !0 || n[u(502)] == !0) {
        if (g == Dt[u(511)])
          if (u(504) !== u(486)) e(Gf, {});
          else return;
        return;
      }
      if (g == Dt[u(428)] && s(!0), g != Dt[u(428)] && i == !1)
        if (u(453) === u(405)) _0x517a8f[u(463)] = u(497) + u(491), _0xaf8f0d[u(456)] = 66;
        else return;
      g == Dt[u(511)] && (u(485) === u(482) ? (_0xe58fbc[u(489) + u(423)](u(425), _0x17c2c9, _0xb4e78a), _0x5b70dd[u(489) + u(423)](u(417), _0x53fcea), [u(415), u(428), u(511)][u(515)]((p) => {
        const C = u;
        _0x322fd6[C(489) + C(423)](p, _0x166055);
      })) : s(!1));
      let h, x;
      const w = v[u(509) + u(462) + "t"]();
      if (d[u(449)][u(446)](u(484))) {
        const { touches: p, changedTouches: C } = d, y = p[0] ?? C[0];
        h = y[u(481)] - w[u(506)], x = y[u(476)] - w[u(503)];
      } else d[u(449)][u(446)](u(451)) && (u(480) === u(480) ? (h = d[u(432)] - w[u(506)], x = d[u(448)] - w[u(503)]) : (_0x19afa5[u(489) + u(423)](u(426), _0x5eb629, _0x1efff7), _0x278656[u(489) + u(423)](u(418), _0xf572b6, _0x45f6a5), _0x37a98f[u(489) + u(423)](u(499), _0x28ed08)));
      const S = {};
      S[u(419)] = u(459), S[u(475)] = g, S.x = h, S.y = x, S[u(467)] = w[u(467)], S[u(420)] = w[u(420)], e(lv, S), v[u(479)]();
    }
  }, c = (d) => {
    const u = pn;
    if (d[u(409) + u(450)](), !o[u(472)]) return;
    const v = o[u(472)], g = d[u(406)], h = v[u(509) + u(462) + "t"](), x = {};
    x[u(419)] = u(514), x[u(467)] = v[u(473) + "h"], x[u(420)] = v[u(512) + "ht"], x.x = d[u(432)] - h[u(506)], x.y = d[u(448)] - h[u(503)], x[u(493)] = g, e(uv, x), v[u(479)]();
  }, l = async (d) => {
    const u = pn;
    if (d[u(409) + u(450)](), !o[u(472)])
      if (u(433) === u(460)) _0x2af45f[u(408) + u(505)](_0x570551, _0x1b3944);
      else return;
    const v = o[u(472)], g = cv[d[u(449)]], h = d[u(456)][u(501) + "e"]();
    if (((p) => {
      const C = u;
      if (C(468) === C(440)) _0xc77a2d(!1);
      else
        return [C(500), C(439), C(454)][C(446)](p);
    })(h) == !0) return;
    const w = async () => {
      const p = u;
      if (p(427) !== p(427)) {
        _0x57c992 == _0x2b2d93[p(511)] && _0x30e74f(_0x5de16f, {});
        return;
      } else {
        const C = {};
        C[p(419)] = p(403), C[p(475)] = g, C[p(463)] = p(455) + p(413), C[p(456)] = d[p(456)], C[p(414)] = 0, C[p(452)] = 0;
        const y = C;
        if (d[p(458)] == !0)
          h == "c" ? p(447) !== p(513) ? y[p(463)] = p(465) : [p(426), p(418), p(499)][p(515)]((R) => {
            const _ = p;
            _0x158e54[_(408) + _(505)](R, _0x183817);
          }) : h == "a" ? (y[p(463)] = p(497) + p(491), y[p(452)] = 4096, y[p(456)] = 29) : h == "v" && (p(410) !== p(404) ? (y[p(463)] = p(510), y[p(456)] = await navigator[p(434)][p(443)]()) : (_0x489750[p(463)] = p(497) + p(491), _0x240c34[p(456)] = 67));
        else if (h == p(411)) p(490) !== p(492) ? (y[p(463)] = p(497) + p(491), y[p(456)] = 19) : (_0x2a238c[p(463)] = p(497) + p(491), _0x2077e5[p(456)] = 20);
        else if (h == p(437)) y[p(463)] = p(497) + p(491), y[p(456)] = 20;
        else if (h == p(516)) y[p(463)] = p(497) + p(491), y[p(456)] = 21;
        else if (h == p(477)) {
          if (p(469) === p(422)) return;
          y[p(463)] = p(497) + p(491), y[p(456)] = 22;
        } else if (h == p(471)) y[p(463)] = p(497) + p(491), y[p(456)] = 67;
        else if (h == p(496)) {
          if (p(424) === p(517))
            return [p(500), p(439), p(454)][p(446)](_0x4fa86f);
          y[p(463)] = p(497) + p(491), y[p(456)] = 66;
        } else if (h == p(430))
          if (p(508) === p(508)) y[p(463)] = p(497) + p(491), y[p(456)] = 61;
          else {
            const { touches: R, changedTouches: _ } = _0x58bea6, j = R[0] ?? _[0];
            _0x417397 = j[p(481)] - _0x5a0ce4[p(506)], _0x1ebc58 = j[p(476)] - _0x71acf4[p(503)];
          }
        if (y[p(449)] == p(455) + p(413)) {
          if (p(478) !== p(478)) _0x48dbdd[p(463)] = p(465);
          else if (d[p(421)] == !0)
            if (p(483) === p(483)) y[p(456)] = y[p(456)][p(488) + "e"]();
            else return;
        }
        return y;
      }
    }, S = await w();
    if (S)
      if (u(507) !== u(470)) e(fv, S);
      else return;
    v[u(479)]();
  };
  it(() => {
    const d = pn, u = o[d(472)];
    if (u) {
      const v = {};
      v[d(495)] = !1;
      const g = v;
      return t ? (u[d(489) + d(423)](d(426), a, g), u[d(489) + d(423)](d(418), a, g), u[d(489) + d(423)](d(499), a)) : d(436) === d(436) ? (u[d(489) + d(423)](d(425), c, g), u[d(489) + d(423)](d(417), l), [d(415), d(428), d(511)][d(515)]((h) => {
        const x = d;
        x(442) === x(442) ? u[x(489) + x(423)](h, a) : (_0x268b96 = _0x21cd66[x(432)] - _0x5f5411[x(506)], _0x417c29 = _0x31e817[x(448)] - _0x4f89ae[x(503)]);
      })) : _0x22e4fe(!0), () => {
        const h = d;
        u && (h(474) === h(474) ? t ? h(494) === h(494) ? [h(426), h(418), h(499)][h(515)]((x) => {
          const w = h;
          u[w(408) + w(505)](x, a);
        }) : _0x134548[h(408) + h(505)](_0x16680e, _0x4d27b7) : ([h(415), h(428), h(511), h(425), h(417)][h(515)]((x) => {
          const w = h;
          w(412) !== w(412) ? _0x7d108b[w(456)] = _0x33301b[w(456)][w(488) + "e"]() : u[w(408) + w(505)](x, a);
        }), u[h(408) + h(505)](h(417), l)) : (_0x1d1486[h(463)] = h(497) + h(491), _0x1bd54b[h(456)] = 19));
      };
    }
  }, [t, a, c, l]);
  const f = { ref: o, ...r };
  return U.jsx(gd, f);
}, xv = "data:image/png;base64,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", ci = ko;
(function(t, n) {
  const e = ko, r = t();
  for (; ; )
    try {
      if (parseInt(e(389)) / 1 + -parseInt(e(390)) / 2 + -parseInt(e(385)) / 3 + parseInt(e(395)) / 4 * (parseInt(e(384)) / 5) + parseInt(e(386)) / 6 * (-parseInt(e(388)) / 7) + -parseInt(e(387)) / 8 + -parseInt(e(391)) / 9 * (-parseInt(e(392)) / 10) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Io, 568950);
function ko(t, n) {
  const e = Io();
  return ko = function(r, o) {
    return r = r - 384, e[r];
  }, ko(t, n);
}
function Io() {
  const t = ["8504992ccYdJH", "1660015cVsLXL", "551764EkGDOz", "2269236EYVhNb", "47997EiwEBN", "4660iUtNKU", "div", "img", "160jjLOPE", "80945lqHdSi", "619125PBYnPh", "18BdTaGR"];
  return Io = function() {
    return t;
  }, Io();
}
const pv = At[ci(393)]`
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
`, zt = At[ci(393)]`
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
`, Vt = At.p`
  height: 5px;
  margin-top: 2px;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
`, mv = At[ci(394)]`
  position: absolute;
  backdrop-filter: blur(46px);
  border-radius: 50%;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.723);
  top: 50%;
  right: 5%;
`, gv = At[ci(393)]`
  user-select: none;
  transition: opacity 0.6s ease;
  z-index: 3;
  opacity: 0.3;
`;
function Un(t, n) {
  const e = No();
  return Un = function(r, o) {
    return r = r - 101, e[r];
  }, Un(t, n);
}
(function(t, n) {
  const e = Un, r = t();
  for (; ; )
    try {
      if (-parseInt(e(121)) / 1 * (-parseInt(e(119)) / 2) + parseInt(e(102)) / 3 * (parseInt(e(124)) / 4) + parseInt(e(126)) / 5 + parseInt(e(108)) / 6 + -parseInt(e(117)) / 7 + parseInt(e(141)) / 8 * (-parseInt(e(101)) / 9) + -parseInt(e(131)) / 10 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(No, 342780);
const Gc = () => {
  const t = Un;
  return document[t(104) + t(116)] || document[t(133) + t(136)] || document[t(135) + t(118) + t(107)] || document[t(123) + t(112)];
};
function No() {
  const t = ["een", "9016420MUoeVP", "mozRequest", "mozFullScr", "webkitRequ", "webkitFull", "eenElement", "screen", "msRequestF", "lscreen", "Cocyw", "264vXyypR", "87471bZVKYl", "223026NWuwLt", "msExitFull", "fullscreen", "mozCancelF", "Fullscreen", "ent", "1641330QEjfce", "webkitExit", "ullscreen", "FullScreen", "enElement", "tor", "exitFullsc", "#screen_", "Element", "2029552jqrivg", "screenElem", "159746mGoRer", "ullScreen", "7jbdSQc", "ykMij", "msFullscre", "36NnDaNZ", "requestFul", "1766705qMJETa", "estFullscr", "reen", "querySelec"];
  return No = function() {
    return t;
  }, No();
}
const vv = (t) => {
  const n = Un, e = document[n(129) + n(113)](n(115) + t);
  e[n(125) + n(139)] ? e[n(125) + n(139)]() : e[n(132) + n(111)] ? e[n(132) + n(111)]() : e[n(134) + n(127) + n(130)] ? e[n(134) + n(127) + n(130)]() : e[n(138) + n(110)] && e[n(138) + n(110)]();
}, yv = () => {
  const t = Un;
  document[t(114) + t(128)] ? document[t(114) + t(128)]() : document[t(105) + t(120)] ? document[t(105) + t(120)]() : document[t(109) + t(106)] ? document[t(109) + t(106)]() : document[t(103) + t(137)] && (t(122) === t(140) ? _0x27bafe[t(114) + t(128)]() : document[t(103) + t(137)]());
};
(function(t, n) {
  const e = Mo, r = t();
  for (; ; )
    try {
      if (-parseInt(e(242)) / 1 * (-parseInt(e(507)) / 2) + -parseInt(e(520)) / 3 + parseInt(e(510)) / 4 + -parseInt(e(267)) / 5 + parseInt(e(302)) / 6 * (-parseInt(e(258)) / 7) + parseInt(e(266)) / 8 + -parseInt(e(250)) / 9 * (parseInt(e(368)) / 10) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(jo, 893257);
function jo() {
  const t = ["M16 7v10c1", "0 0 1.645z", "data-id", "mozfullscr", "Sync", "taskId", "1zm-1 16H5", "48 3.832a1", "paste", "-2-2-2zm-9", "2 2zm2 7v-", "6a1 1 0 0 ", "Phrxb", "03-.897-2-", "c1.103 0 2", "h-5c-1.103", "v2h8V5h3v6", "416 3.377 ", "M20 3H4a1 ", " 0 0 0-.38", "3 0 2-.897", "svg", "zInjl", "lWnji", "M16 21c3.5", "1.048z", "CjPkh", "menu_", "readText", "shortcutCo", "27-1.547 5", "landscape", "4c0-1.103-", "6710VCNDcq", "Show ID", "max", ".024l-14-1", "kMPDA", "M10 4H8v4H", "Recents", "xFMhq", "focus", "4c-.025-.0", "mouseup", "0v10z", "0 0 0 .782", "set", "gClientRec", "47 3.999 7", "lGwjx", "Back", "7a1 1 0 0 ", "-3.229 2-5", "2-2h-4V4h1", "0 1-1V4a1 ", "removeEven", "08 3.677L7", "4.445-2.96", "1.003 0 0 ", "1v16a1 1 0", "opacity", " 2-2v-7c0-", "75.931l2 1", "getBoundin", "gkdfF", "width", "passive", "touch", "zIndex", "3c.033 0 .", "2 2h10c1.1", "get", "closest", " 2v16c0 1.", "showMenu", "zM4 20V10h", "061-.016.0", "pageX", "H4c-1.103 ", "path", "EmHhR", "-2-5zM4 17", ".614 16 19", "7h7l.001 7", "103.897 2 ", "H6z", "VXyBg", "TSJdS", "jnRUx", "7-2-2-2h-3", ".897-2 2v4", ".897-2-2-2", "recents", "10l.002 10", "type", "69-.823l-1", "clientX", "6l3.612-4.", "KYScW", "017.082-.0", ".002 16H6.", "17-.056-.0", "822 13 9A1", "ent", "clientY", "forEach", "cursor", "H13z", "enchange", ".257 5.127", " 0 0 1 1h1", "Hide ID", "ypVTP", "FFOXC", "1.103 0-2 ", "now", "Screen", " 2 2zm0-8h", "children", "M20 2H10c-", "3px", "75z", "4v2h6zM8 2", "div", "m-2-4h2V3h", "03 0 2-.89", "Icon", "11.75", "grab", " 15H4V9z", "height", "4v-4c0-1.1", "EyQbX", "preventDef", "shortcutEv", "getAttribu", "0 0 0 .38-", "fill", "cJOfY", "0 0 0 14 2", "00/svg", ".015.057-.", "assistive_", "8.347l-3.0", "2 2h7c0 1.", "back", "move", "13%", "Copy", "rgba(255, ", ".832L6.697", "9.527 4.54", "action", ".21a1 1 0 ", "8v12.264l-", "-2 2v6c0 1", "Paste", "9 21V3a1 1", "s-.775-3.9", "h4zm12-6h-", " 0 0 0-.57", "data", "Volume", "sync", "M16.75 2h-", "m4.431 12.", "-.769zm-8.", "6zm0 4h6v2", "stener", "3 9a1.003 ", "-1.103-.89", "M6 12h6v2H", "8nMmZft", "2-.082-.03", "7 2-2V4c0-", "6987012FDVfUT", "left", "-1.052-3.3", "0 1.767.51", "touch_clas", "yASAB", " 2v13c0 1.", "255, 255, ", "WwiMz", "1.103-.897", "4711680nFLmdG", "l10.283 7.", "HNthS", "Dcglj", "0h2v-6H4v2", "h2.697l5.7", " 0 0 0-1 1", "2H4zm0 5h1", "M20.978 13", "-.897 2-2V", " 2v10c0 1.", "eenchange", "ault", " 7H4c-1.10", ".116c.026-", "webkitfull", "a.995.995 ", "screenchan", "-7v2h5z", "59 15.016 ", "1 0 0 0-1-", "0a.999.999", "-1-1H8a1 1", "pageY", ".225-1.1 2", "0V4a1 1 0 ", "zm0-6h-4V4", " 5.999-9S1", "12%", "238691lYSQqf", "7zm11-5h-2", "M5 5h5V3H3", "93-.019a1.", "uqwoa", "5.46 1.701", "v7h2zm5 14", ".999-4.909", "14157Bfapcw", " 1 0 0 0 1", "57-5.428 6", "4zm0 5h16v", "27.05A1 1 ", "touch_", "674.31a1 1", "shortcut", "817747xbxIYy", "right", "0 0-.396-1", "clipboard", "Home", "mousemove", "10c-1.103 ", "M20 11V5c0", "12393552YWpIKd", "1904740glVtPG", "33L12 5.86", "1 0 0 0-1 ", "isDown", "7 16 3v2c2", ".387 1.386", "nGHaL", "H5v-5H3v7h", " 0 0 0-1.5", "6v2H4z", "click", "FQYTu", "S18.387 17", "0 18V4h10l", "volume", "msfullscre", "3 0-2 .897", "top", "V5h14v14z", "mouse", "http://www", "kMfBd", "assistive", "0 0 24 24", "copy", "min", " 0-2 .897-", "2-.116C7.0", "touchend", "addEventLi", "includes", "a1 1 0 0 0", "-2-2-2zm-1", ".w3.org/20", "h-2v6h6z", "18fWVAXm", "fullscreen", "v5h-5v2h7z", "WOopk", "0-2 .897-2", "current", "0 0-1.554-", "20px", "v2z", "3a.986.986", ".089-1.218", "home", "027 1.027 ", "circle", ".004 1.004", " 2v5H4V5h3", "device_id", "target", "345-5.236 ", "7 2-2v-4h4", "touchmove", "touchstart", "H4zm16-6h-", "M4 6h16v2H", "mousedown", " 0 0 0 1.0", "6v6h2v-4h4", "tListener", "7.032 15 7", ".103.897 2", " 3.999 4.0", "2 2h7c1.10", "change"];
  return jo = function() {
    return t;
  }, jo();
}
function Mo(t, n) {
  const e = jo();
  return Mo = function(r, o) {
    return r = r - 215, e[r];
  }, Mo(t, n);
}
const bv = il((t, n) => {
  const e = Mo, { displayId: r, isMobile: o, onSenData: i, status: s, imageRef: a, isShowDeviceId: c } = t, [l, f] = ot(0), [d, u] = ot(0), [v, g] = ot(null), [h, x] = ot(0), w = Ye(null), S = Ye(null), p = Ye(null), C = {};
  C[e(441)] = e(481), C[e(395)] = 0.3, C[e(403)] = 999;
  const [y, R] = ot(C), _ = {};
  _[e(403)] = 999, _[e(465)] = "", _[e(400)] = e(482);
  const [j, B] = ot(_), X = {};
  X[e(403)] = 1e3;
  const [re, $] = ot(X), D = Ye(null), [W, H] = ot(null), Q = Ye(null), K = (I) => {
    const b = e;
    if (I[b(468) + b(225)](), s[b(406)][b(409)] == !0) return;
    const Se = Dt[I[b(429)]], ie = a[b(307)], we = p[b(307)], te = ie[b(398) + b(382) + "t"](), Re = we[b(398) + b(382) + "t"](), Ee = 3;
    let vt, ze;
    const yt = te[b(400)] - Re[b(400)], cn = te[b(465)] - Re[b(465)];
    if (I[b(429)][b(297)](b(402)))
      if (b(216) !== b(216)) _0x5e92f1[b(296) + b(503)](b(323), _0x2dfdbd, _0x153abc), _0x814d7b[b(296) + b(503)](b(322), _0x3f512b, _0x32eab8), _0x4e64fe[b(296) + b(503)](b(295), _0x4da511);
      else {
        const { touches: We, changedTouches: Ze } = I, Ve = We[0] ?? Ze[0];
        vt = Ve[b(412)], ze = Ve[b(236)];
      }
    else I[b(429)][b(297)](b(286)) && (vt = I[b(431)], ze = I[b(439)]);
    if (Se == Dt[b(326)])
      if (b(415) !== b(288)) {
        s[b(381)]({ ...s[b(406)], isDown: !0 }), f(vt - Re[b(511)]), u(ze - Re[b(284)]);
        const We = {};
        We[b(395)] = 1, We[b(441)] = b(463);
        const Ze = { ...y, ...We };
        R(Ze), x(performance[b(450)]());
      } else {
        const { touches: We, changedTouches: Ze } = _0x4b3ede, Ve = We[0] ?? Ze[0];
        _0x36e7c8 = Ve[b(412)], _0x2a9715 = Ve[b(236)];
      }
    else if (Se == Dt[b(263)]) {
      if (s[b(406)][b(270)] == !1) return;
      let We = vt - l - te[b(511)], Ze = ze - d - te[b(284)];
      We = Math[b(370)](Ee, Math[b(292)](We, yt) - Ee), Ze = Math[b(370)](Ee, Math[b(292)](Ze, cn) - Ee);
      const Ve = {};
      Ve[b(284)] = Ze + "px", Ve[b(511)] = We + "px";
      const It = { ...j, ...Ve };
      B(It);
      const nt = {};
      nt.x = We, nt.y = Ze, Q[b(307)] = nt;
    } else if (Se == Dt[b(378)]) {
      const We = performance[b(450)]() - h;
      if (v == Dt[b(326)] || We < 100)
        if (b(421) === b(421)) {
          const Qe = {};
          Qe[b(409)] = !0, Qe[b(270)] = !1, s[b(381)]({ ...s[b(406)], ...Qe });
        } else _0x450072(() => {
          const Qe = b, bt = { ..._0x2d8cf6 };
          bt[Qe(395)] = _0x456813[Qe(406)][Qe(409)] ? 1 : 0, _0x2a27c7(bt);
        });
      else b(347) === b(473) ? _0x23c219(_0x56e8f0) : s[b(381)]({ ...s[b(406)], isDown: !1 });
      const Ze = Q[b(307)].x > yt / 2 ? yt - Ee : Ee, Ve = {};
      Ve[b(511)] = Ze + "px";
      const It = { ...j, ...Ve };
      B(It);
      const nt = {};
      nt[b(395)] = 0.3, nt[b(441)] = b(481);
      const Yt = { ...y, ...nt };
      R(Yt);
    }
    g(Se), we[b(376)]();
  }, Z = async (I) => {
    const b = e;
    I[b(468) + b(225)]();
    const Se = I[b(319)][b(407)](b(458))[b(470) + "te"](b(337));
    if (Se === b(303))
      if (b(215) === b(215))
        if (Gc())
          yv();
        else if (b(448) === b(447)) {
          const we = {};
          we[b(409)] = !0, we[b(270)] = !1;
          const te = { ..._0x35ba28[b(406)], ...we };
          _0x5dbcdc[b(381)](te);
        } else vv(r);
      else {
        if (_0x2f6166[b(406)][b(270)] == !1) return;
        let ie = _0x1cdf4d - _0x5c0065 - _0x1ce438[b(511)], we = _0xd2e977 - _0x322ae5 - _0xb4f53[b(284)];
        ie = _0x4dd4e2[b(370)](_0x661d47, _0x39de9d[b(292)](ie, _0x52a6f2) - _0x3042c5), we = _0x27337f[b(370)](_0x1494cd, _0x551057[b(292)](we, _0x134d09) - _0x533e05);
        const te = {};
        te[b(284)] = we + "px", te[b(511)] = ie + "px";
        const Re = { ..._0x409356, ...te };
        _0x5acec9(Re);
        const Ee = {};
        Ee.x = ie, Ee.y = we, _0x1821fe[b(307)] = Ee;
      }
    else {
      const ie = {};
      ie[b(487)] = b(469) + b(438), ie[b(257)] = Se, ie[b(496)] = "";
      const we = ie;
      if (Se === b(343) && (we[b(496)] = await navigator[b(261)][b(363)]()), Se === b(291)) {
        if (b(433) === b(399)) return;
        we[b(340)] = b(364) + "py";
      }
      i(Ds, we);
    }
    s[b(381)]({ ...s[b(406)], showMenu: !1 }), S[b(307)][b(376)]();
  }, J = (I) => {
    const b = e;
    if (b(372) === b(423)) _0x3673b7[b(390) + b(329)](_0x1ffadd, _0xd192df);
    else {
      const Se = Gc();
      i(dv, Se);
    }
  };
  it(() => {
    const I = e;
    I(384) === I(384) ? requestAnimationFrame(() => {
      const b = I;
      if (b(358) === b(358)) {
        const Se = { ...re };
        Se[b(395)] = s[b(406)][b(409)] ? 1 : 0, $(Se);
      } else [b(263), b(326), b(378)][b(440)]((Se) => {
        const ie = b;
        _0x246808[ie(390) + ie(329)](Se, _0x1c4903);
      });
    }) : _0xd91789[I(390) + I(329)](_0x3f56de, _0xaeef7d);
  }, [s]), it(() => {
    const I = e, b = a[I(307)], Se = [I(303) + I(334), I(228) + I(230) + "ge", I(338) + I(224), I(282) + I(443)];
    if (b)
      if (I(467) === I(467)) Se[I(440)]((ie) => {
        const we = I;
        b[we(296) + we(503)](ie, J);
      });
      else {
        const ie = _0x4c5b3d[I(450)]() - _0x306348;
        if (_0x116787 == _0x19e017[I(326)] || ie < 100) {
          const ze = {};
          ze[I(409)] = !0, ze[I(270)] = !1;
          const yt = { ..._0x10ddd2[I(406)], ...ze };
          _0x6857bc[I(381)](yt);
        } else {
          const ze = { ..._0x418f3f[I(406)] };
          ze[I(270)] = !1, _0xd008ab[I(381)](ze);
        }
        const we = _0x1e6b7b[I(307)].x > _0x2959c3 / 2 ? _0x4a36be - _0x5e3d89 : _0x28904a, te = {};
        te[I(511)] = we + "px";
        const Re = { ..._0x5e3abd, ...te };
        _0x5f1b79(Re);
        const Ee = {};
        Ee[I(395)] = 0.3, Ee[I(441)] = I(481);
        const vt = { ..._0x255fc3, ...Ee };
        _0x1b3085(vt);
      }
    return () => {
      const ie = I;
      ie(361) === ie(361) ? b && (ie(305) !== ie(305) ? (_0x56438e = _0x31e930[ie(431)], _0x4b4926 = _0x51b3bd[ie(439)]) : b[ie(390) + ie(329)](ie(277), J)) : _0x1fed90[ie(296) + ie(503)](_0xd811d3, _0x17ba1e);
    };
  }, []), it(() => {
    const I = e, b = p[I(307)], Se = S[I(307)];
    if (Se && (I(375) !== I(515) ? Se[I(296) + I(503)](I(277), Z) : _0x43fd77[I(296) + I(503)](I(277), _0x243128)), b)
      if (I(422) === I(422)) {
        const ie = {};
        ie[I(401)] = !1;
        const we = ie;
        return o ? (b[I(296) + I(503)](I(323), K, we), b[I(296) + I(503)](I(322), K, we), b[I(296) + I(503)](I(295), K)) : [I(263), I(326), I(378)][I(440)]((te) => {
          const Re = I;
          b[Re(296) + Re(503)](te, K);
        }), () => {
          const te = I;
          if (te(278) === te(278)) {
            if (Se && Se[te(390) + te(329)](te(277), Z), b)
              if (o)
                if (te(246) === te(246)) [te(323), te(322), te(295)][te(440)]((Re) => {
                  const Ee = te;
                  b[Ee(390) + Ee(329)](Re, K);
                });
                else {
                  const Re = { ..._0x23a008 };
                  Re[te(395)] = _0x1031d6[te(406)][te(409)] ? 1 : 0, _0x547ce8(Re);
                }
              else [te(263), te(326), te(378)][te(440)]((Re) => {
                const Ee = te;
                b[Ee(390) + Ee(329)](Re, K);
              });
          } else _0x4f0a9a[te(296) + te(503)](_0x7aadc0, _0x277155);
        };
      } else {
        const ie = _0xa71e31();
        _0x36bcc9(_0x1e915f, ie);
      }
  }, [o, K]);
  const ae = () => {
    const I = e;
    if (I(357) === I(518)) _0x298024[I(390) + I(329)](I(277), _0x58d516);
    else {
      const b = {};
      b[I(403)] = 999, b[I(465)] = D[I(307)] == I(366) ? I(241) : null, b[I(400)] = D[I(307)] != I(366) ? I(241) : null, b[I(284)] = I(309), b[I(259)] = I(455), B(b);
    }
  };
  sl(n, () => ({ fixTouch: (I) => {
    const b = e;
    b(273) === b(273) ? (I && (D[b(307)] = I), ae()) : _0x2bed31 && _0x23fc31[b(390) + b(329)](b(277), _0x17cb7e);
  }, setFullscreen: (I) => {
    H(I);
  } }));
  const oe = {};
  oe[e(472)] = e(484) + e(517) + "1)";
  const G = {};
  G.d = W ? e(373) + e(457) + e(217) + e(494) + e(328) + e(239) + e(301) : e(244) + e(248) + e(274) + e(243) + e(304) + e(459) + e(231);
  const ee = {};
  ee[e(453)] = e(451);
  const he = {};
  he[e(472)] = e(484) + e(517) + "1)";
  const fe = {};
  fe.d = e(454) + e(449) + e(425) + e(413) + e(306) + e(223) + e(419) + e(405) + e(460) + e(321) + e(349) + e(222) + e(367) + e(426) + e(410) + e(428) + e(324) + e(466) + e(348) + e(388) + e(379);
  const pe = {};
  pe.d = e(506) + e(502) + e(420);
  const P = {};
  P[e(453)] = e(483);
  const F = {};
  F[e(472)] = e(484) + e(517) + "1)";
  const T = {};
  T.d = e(265) + e(505) + e(424) + e(298) + e(235) + e(219) + e(413) + e(306) + e(516) + e(419) + e(479) + e(419) + e(333) + e(355) + e(396) + e(519) + e(344) + e(317) + e(351) + e(350) + e(293) + e(345) + e(418) + e(442);
  const N = {};
  N[e(453)] = e(491);
  const O = {};
  O[e(472)] = e(484) + e(517) + "1)";
  const z = {};
  z.d = e(499) + e(264) + e(306) + e(408) + e(419) + e(405) + e(460) + e(509) + e(519) + e(299) + e(280) + e(435) + e(456);
  const je = {};
  je.cx = e(462), je.cy = "18", je.r = "1";
  const L = {};
  L[e(453)] = e(c ? 446 : 369);
  const Me = {};
  Me[e(472)] = e(484) + e(517) + "1)";
  const Te = {};
  Te.d = e(359) + e(365) + e(249) + e(240) + e(486) + e(271) + e(272) + e(332) + e(383) + e(279) + e(417) + e(310);
  const ft = {};
  ft.d = e(335) + e(237) + e(387) + e(493) + e(416) + e(218) + e(342) + e(316) + e(327) + e(254) + e(474) + e(238) + e(308) + e(485) + e(226) + e(283) + e(490) + e(331) + e(452) + e(404) + e(411) + e(245) + e(314) + e(471) + e(227) + e(476) + e(434) + e(268) + e(489) + e(392) + e(377) + e(436) + e(508) + e(311) + e(354) + e(294) + e(232) + e(330) + e(464);
  const Pt = {};
  Pt[e(453)] = e(497);
  const lt = {};
  lt[e(472)] = e(484) + e(517) + "1)";
  const kt = {};
  kt.d = e(221) + e(488) + e(260) + e(371) + e(234) + e(275) + e(397) + e(386) + e(513) + e(432) + e(352) + e(247) + e(512) + e(252) + e(312) + e(229) + e(380) + e(501) + e(256) + e(495) + e(478) + e(391) + e(444) + e(521) + e(320) + e(360);
  const Le = {};
  Le[e(453)] = e(339);
  const Ce = {};
  Ce[e(472)] = e(484) + e(517) + "1)";
  const Ke = {};
  Ke.d = e(325) + e(253) + e(220) + e(276);
  const gt = {};
  gt[e(453)] = e(374);
  const dt = {};
  dt[e(472)] = e(484) + e(517) + "1)";
  const rn = {};
  rn.d = e(353) + e(269) + e(394) + e(445) + e(346) + e(389) + e(233) + e(341) + e(285);
  const on = {};
  on[e(453)] = e(262);
  const _n = {};
  _n[e(472)] = e(484) + e(517) + "1)";
  const sn = {};
  sn.d = e(500) + e(437) + e(251) + e(492) + e(275) + e(430) + e(504) + e(393) + e(336);
  const an = {};
  return an[e(453)] = e(385), U.jsxs(U.Fragment, { children: [s[e(406)][e(409)] ? U.jsxs(pv, { id: e(477) + e(362) + r, style: re, ref: S, children: [U.jsxs(zt, { "data-id": e(303), children: [U.jsx(e(356), { xmlns: e(287) + e(300) + e(475), width: "28", height: "28", viewBox: e(290), style: oe, children: U.jsx(e(414), G) }), U.jsx(Vt, ee)] }), U.jsxs(zt, { "data-id": e(291), children: [U.jsxs(e(356), { xmlns: e(287) + e(300) + e(475), width: "28", height: "28", viewBox: e(290), style: he, children: [U.jsx(e(414), fe), U.jsx(e(414), pe)] }), U.jsx(Vt, P)] }), U.jsxs(zt, { "data-id": e(343), children: [U.jsx(e(356), { xmlns: e(287) + e(300) + e(475), width: "28", height: "28", viewBox: e(290), style: F, children: U.jsx(e(414), T) }), U.jsx(Vt, N)] }), U.jsxs(zt, { "data-id": e(318), children: [U.jsxs(e(356), { xmlns: e(287) + e(300) + e(475), width: "28", height: "28", viewBox: e(290), style: O, children: [U.jsx(e(414), z), U.jsx(e(315), je)] }), U.jsx(Vt, L)] }), U.jsxs(zt, { "data-id": e(281), children: [U.jsxs(e(356), { xmlns: e(287) + e(300) + e(475), width: "25", height: "25", viewBox: e(290), style: Me, children: [U.jsx(e(414), Te), U.jsx(e(414), ft)] }), U.jsx(Vt, Pt)] }), U.jsxs(zt, { "data-id": e(498), children: [U.jsx(e(356), { xmlns: e(287) + e(300) + e(475), width: "28", height: "28", viewBox: e(290), style: lt, children: U.jsx(e(414), kt) }), U.jsx(Vt, Le)] }), U.jsxs(zt, { "data-id": e(427), children: [U.jsx(e(356), { xmlns: e(287) + e(300) + e(475), width: "28", height: "28", viewBox: e(290), style: Ce, children: U.jsx(e(414), Ke) }), U.jsx(Vt, gt)] }), U.jsxs(zt, { "data-id": e(313), children: [U.jsx(e(356), { xmlns: e(287) + e(300) + e(475), width: "28", height: "28", viewBox: e(290), style: dt, children: U.jsx(e(414), rn) }), U.jsx(Vt, on)] }), U.jsxs(zt, { "data-id": e(480), children: [U.jsx(e(356), { xmlns: e(287) + e(300) + e(475), width: "28", height: "28", viewBox: e(290), style: _n, children: U.jsx(e(414), sn) }), U.jsx(Vt, an)] })] }) : null, U.jsx(gv, { id: e(477) + e(514) + "s_" + r, className: e(289), ref: w, style: y, children: U.jsx(mv, { style: j, src: xv, className: e(289), id: e(477) + e(255) + r, alt: e(461), ref: p, draggable: !1 }) })] });
}), De = qn;
(function(t, n) {
  const e = qn, r = t();
  for (; ; )
    try {
      if (-parseInt(e(326)) / 1 * (parseInt(e(330)) / 2) + -parseInt(e(373)) / 3 + parseInt(e(340)) / 4 * (parseInt(e(353)) / 5) + -parseInt(e(392)) / 6 * (-parseInt(e(363)) / 7) + parseInt(e(381)) / 8 + -parseInt(e(354)) / 9 + parseInt(e(342)) / 10 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Lo, 307638);
var Kc, Zc, Jc, Qc, el, tl, nl, rl, ol;
ol = De(371) + De(346), rl = De(359) + "th", nl = De(364) + De(328), tl = De(335), el = De(339) + "ta", Qc = De(384) + "er", Jc = De(361), Zc = De(344) + De(395), Kc = De(327);
class Sv {
  constructor(n, e, r, o) {
    Nt(this, ol, (n) => {
      const e = De;
      if (n) {
        const r = window[e(372) + "t"] + 10, o = this[e(359) + "th"](null, this[e(366)][e(383)], this[e(366)][e(349)], r, r);
        this[e(383)] = o[e(383)], this[e(349)] = o[e(349)];
      } else this[e(383)] = this[e(366)][e(383)], this[e(349)] = this[e(366)][e(349)];
    });
    Nt(this, rl, (n, e, r, o, i) => {
      const s = De;
      let a;
      return n && o > this[s(345)] && r > e && (i = this[s(345)]), i && (s(389) !== s(389) ? (this[s(333)] = _0x4b51c2, this[s(345)] = _0x35e40b, this[s(357)] = _0x42df96, this[s(385) + "ct"] = _0x4ef8a3, this[s(387)] = _0x106ae9[s(380)]("2d"), this[s(365)] = this[s(384) + "er"](), this[s(351)] = null, this[s(350)] = null, this[s(376)] = null, this[s(383)] = null, this[s(349)] = null, this[s(366)] = null, this[s(352) + "n"] = s(356)) : (a = i / e * r, a > o && (i = o / r * e, a = o / e * e))), { width: Math[s(369)](i), height: Math[s(369)](a) };
    });
    Nt(this, nl, (n) => {
      const e = De;
      this[e(352) + "n"] = n, this[e(357)] && screen[e(352) + "n"][e(343)](n);
    });
    Nt(this, tl, (n, e) => {
      var a;
      const r = De, o = this[r(357)] == !0 ? window[r(372) + "t"] - 12 : window[r(372) + "t"] - 50, i = this[r(359) + "th"](!0, n, e, o, o);
      this[r(383)] = i[r(383)], this[r(349)] = i[r(349)], !this[r(366)] && ((a = this[r(385) + "ct"]) == null || a.call(this, !0));
      const s = {};
      s[r(383)] = i[r(383)], s[r(349)] = i[r(349)], this[r(366)] = s;
    });
    Nt(this, el, (n) => {
      const e = De, r = n instanceof Uint8Array ? n : new Uint8Array(n);
      this[e(351)] = r;
    });
    Nt(this, Qc, () => {
      const n = De, e = new VideoDecoder({ output: async (o) => {
        const i = qn, s = await createImageBitmap(o);
        (!this[i(383)] || !this[i(349)]) && this[i(335)](o[i(367)], o[i(382) + "t"]), this[i(387)][i(334)](0, 0, this[i(383)], this[i(349)]), this[i(352) + "n"] == i(362) ? (this[i(333)][i(383)] = this[i(349)], this[i(333)][i(349)] = this[i(383)], this[i(387)][i(338)](0, this[i(383)]), this[i(387)][i(358)](Math.PI / 2), this[i(387)][i(325)](-1, -1), this[i(387)][i(375)](s, 0, 0, this[i(383)], this[i(349)])) : (this[i(333)][i(383)] = this[i(383)], this[i(333)][i(349)] = this[i(349)], this[i(387)][i(375)](s, 0, 0, this[i(383)], this[i(349)])), s[i(390)](), o[i(390)]();
      }, error: (o) => console[n(336)](n(331) + n(370), o) }), r = {};
      return r[n(323)] = n(386) + "E", r[n(394) + n(374)] = n(378) + n(377), r[n(329) + n(379)] = !0, e[n(368)](r), e;
    });
    Nt(this, Jc, (n) => {
      const e = De;
      for (let r = 0; r <= n[e(322)] - 4; r++)
        if (n[r] === 0 && n[r + 1] === 0 && n[r + 2] === 0 && n[r + 3] === 1)
          return (n[r + 4] & 31) === 5;
      for (let r = 0; r <= n[e(322)] - 3; r++)
        if (e(391) === e(332)) _0x1bd21c = _0x21433a / _0x31ea5b * _0x214fb8, _0x2919e5 = _0x4b1dfe / _0x14d7ae * _0x1fb870;
        else if (n[r] === 0 && n[r + 1] === 0 && n[r + 2] === 1)
          return (n[r + 3] & 31) === 5;
      return !1;
    });
    Nt(this, Zc, (n, e) => {
      const r = De, o = Array[r(355)](n)[r(388)](Array[r(355)](e));
      return new Uint8Array(o);
    });
    Nt(this, Kc, (n) => {
      var i;
      const e = De;
      if (!this[e(365)] || this[e(365)][e(348)] == e(390) || !this[e(351)]) return;
      let r = n instanceof Uint8Array ? n : new Uint8Array(n);
      const o = this[e(361)](r);
      if (o && (e(324) !== e(324) ? (i = this[e(385) + "ct"]) == null || i.call(this, !0) : this[e(350)] = r), this[e(350)] && this[e(351)]) {
        if (!this[e(376)])
          if (e(360) === e(337)) {
            let s;
            return _0xe1690a && _0x2fa482 > this[e(345)] && _0x49c45f > _0x31b01e && (_0x37d061 = this[e(345)]), _0x2803e6 && (s = _0x5e127e / _0x23e275 * _0x449b4, s > _0x359ae4 && (_0x2274e4 = _0x5dccfc / _0xca450b * _0x9cf042, s = _0x454d11 / _0x2e71b8 * _0x3b4f62)), { width: _0x1b99e9[e(369)](_0x421a21), height: _0x5ca471[e(369)](s) };
          } else r = this[e(344) + e(395)](this[e(351)], this[e(350)]), this[e(376)] = !0;
        this[e(365)][e(327)](new EncodedVideoChunk({ timestamp: performance[e(341)]() * 1e3, type: e(o ? 347 : 393), data: r }));
      }
    });
    const i = qn;
    this[i(333)] = n, this[i(345)] = e, this[i(357)] = r, this[i(385) + "ct"] = o, this[i(387)] = n[i(380)]("2d"), this[i(365)] = this[i(384) + "er"](), this[i(351)] = null, this[i(350)] = null, this[i(376)] = null, this[i(383)] = null, this[i(349)] = null, this[i(366)] = null, this[i(352) + "n"] = i(356);
  }
}
function qn(t, n) {
  const e = Lo();
  return qn = function(r, o) {
    return r = r - 322, e[r];
  }, qn(t, n);
}
function Lo() {
  const t = ["innerHeigh", "1375167GPpdjA", "celeration", "drawImage", "isPlay", "dware", "prefer-har", "rLatency", "getContext", "3320032seXhnc", "codedHeigh", "width", "buildDecod", "setIsConne", "avc1.64001", "ctx", "concat", "RwJnt", "close", "rOGWb", "6UqRfEi", "delta", "hardwareAc", "8Arrays", "length", "codec", "BrRcz", "scale", "1qQZUlx", "decode", "tion", "optimizeFo", "777156FiSKXS", "Decoder er", "Khrfv", "canvas", "clearRect", "autoResize", "error", "UFvDi", "translate", "setVideoMe", "63760vxeXgO", "now", "3088150CooGTO", "lock", "concatUint", "maxWidth", "een", "key", "state", "height", "iframe", "videoMeta", "orientatio", "125KdnYJz", "3479175anywOr", "from", "portrait", "isMobile", "rotate", "resizedWid", "HNzCv", "isKeyFrame", "landscape", "2932027YHsvQU", "setOrienta", "decoder", "rootSize", "codedWidth", "configure", "round", "ror:", "setFullscr"];
  return Lo = function() {
    return t;
  }, Lo();
}
(function(t, n) {
  const e = In, r = t();
  for (; ; )
    try {
      if (parseInt(e(223)) / 1 + parseInt(e(233)) / 2 + -parseInt(e(259)) / 3 * (-parseInt(e(181)) / 4) + -parseInt(e(290)) / 5 * (-parseInt(e(185)) / 6) + parseInt(e(200)) / 7 + -parseInt(e(213)) / 8 * (-parseInt(e(190)) / 9) + -parseInt(e(201)) / 10 * (parseInt(e(234)) / 11) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Do, 691270);
function Do() {
  const t = ["device_id", "Element", "stener", "current", "url", "type_clien", "shortcut", "YUdAG", "de: ", "821057xZePSF", "screenElem", "mwKXw", "code", "fwiJH", "children", "large", "reconnecti", "map", "connect", "1404822CGTTVY", "22oqFtCl", "password", "screen_", "WbgzO", "een", "data", "set", "CSUtR", "CnhwR", "setVideoMe", "DMFHr", "mozFullScr", "vTNjk", "shortcutEv", "QtUCM", "Timeout wa", "userAgent", "FnACf", "test", "showMenu", "wbkzD", "size", "msg", "tabIndex", "DyHKo", "21MCymLN", "ent", "marginTop", "msFullscre", "removeEven", "WwJIc", "writeText", "taskId", "height", "ror", "get", "text", "applicatio", "decode", "join_room", "response", "COPY_TEXT", "clipboard", "type", "bPCpx", "message", "middle", "mPTGB", "isMobile", " closed co", "BrYoq", "width", "fixTouch", "addEventLi", "fullscreen", "error", "5670LnSdVG", "status", "value", "zaqBL", "dGwGH", "eenElement", "draggable", "meta", "webkitFull", "iting for ", "disconnect", "passwd", "length", "orientatio", "video_meta", "info", "connect_er", "isDown", "enElement", "method", "center", "image_", "BwwPq", "QddvO", "tion", "screen", "TbZhk", "iframe", "srTDi", "366368IPLsgw", "post", "control", "delete", "1842PEGjXO", "ASAQT", "nQZou", "uDTBE", "screen_mai", "4328838GIDnSk", "n/json", "get_video_", "emit", "onSyncIFra", "jXwXm", "onScreenEv", "sync", "headers", "cQlws", "4162620ZKRfcn", "14485610bVCKeN", "change", "timeout", "Content-Ty", "jFZIl", "PDEEO", "action", "connection", "false", "setFullscr", "tListener", "setOrienta", "8aqzpfr"];
  return Do = function() {
    return t;
  }, Do();
}
function In(t, n) {
  const e = Do();
  return In = function(r, o) {
    return r = r - 174, e[r];
  }, In(t, n);
}
const Wv = il((t, n) => {
  const e = In, { serve: r, dataDevice: o, maxWidth: i, showAssistive: s, showDeviceId: a, syncEvent: c, syncButton: l } = t, f = o[e(214)], d = /iPhone|iPad|iPod|Android/i[e(252)](navigator[e(250)]), u = e(183), v = Ye(null), g = Ye(null), h = Ye(null), [x, w] = ot(null), [S, p] = ot(null), C = {};
  C[e(253)] = !1, C[e(307)] = !1;
  const [y, R] = ot(C), [_, j] = ot(null), B = e(311) + f, X = e(236) + f, re = e(189) + "n_" + f, $ = Ye(null), [D, W] = ot([]), H = Ye(null), Q = Ye(/* @__PURE__ */ new Map());
  it(() => {
    p(a);
  }, [a]);
  const K = (P) => {
    const F = e;
    if (F(293) !== F(254)) W((T) => [...T, P]);
    else {
      const T = {};
      T[F(256)] = _0x3d91b9[F(256)], T[F(277)] = F(289), _0x3bffb6(T);
    }
  }, Z = (P) => {
    const F = e;
    v[F(217)][F(193)](F(279), P), c == null || c(P);
  };
  sl(n, () => ({ api: async function(P, F = 5e3) {
    const T = e;
    if (T(258) === T(205))
      if (_0x3fe6de[T(291)] == !0) {
        _0x4b7fc4[T(217)] = _0x431633;
        const N = {};
        N[T(207)] = T(196) + T(260), _0x491f1f[T(193)](T(279), N);
      } else {
        const N = {};
        N[T(256)] = _0x156f86[T(256)], N[T(277)] = T(289), _0x1dcb21(N);
      }
    else return new Promise((N, O) => {
      const z = T, je = setTimeout(() => {
        const L = In;
        Q[L(217)][L(184)](P[L(266)]);
        const Me = {};
        Me[L(207)] = P[L(207)], Me[L(266)] = P[L(266)], Me[L(291)] = !1, Me[L(279)] = L(249) + L(299) + L(274), O(Me);
      }, F);
      Q[z(217)][z(240)](P[z(266)], (L) => {
        clearTimeout(je), N(L);
      }), v[z(217)][z(193)](z(279), P);
    });
  }, sync: function(P) {
    const F = e;
    v[F(217)][F(193)](F(279), P);
  }, getDeviceId: function() {
    return o[e(214)];
  } })), it(() => {
    (async () => {
      const P = In;
      try {
        if (P(188) === P(199)) {
          const F = _0x512931[P(217)][P(269)](_0x462165[P(266)]);
          F && (F(_0x566a07), _0x16c1dc[P(217)][P(184)](_0x10cd65[P(266)]));
        } else {
          const F = {};
          F[P(204) + "pe"] = P(271) + P(191);
          const T = {};
          T[P(214)] = o[P(214)], T[P(235)] = o[P(301)];
          const N = {};
          N[P(218)] = r, N[P(309)] = P(182), N[P(203)] = 1e4, N[P(198)] = F, N[P(239)] = T;
          const O = N, z = await sv(O);
          w(z[P(239)]);
        }
      } catch (F) {
        if (P(237) !== P(294)) {
          const T = {};
          T[P(256)] = F, T[P(277)] = P(289), K(T);
        } else if (_0x8f3061) {
          if (_0x39a55f[P(217)][P(243) + "ta"](_0x4f76c9), !_0xddb0c7[P(217)][P(179)]) {
            const T = {};
            T[P(207)] = P(194) + "me", _0xf10f06[P(193)](P(279), T);
          }
        } else {
          const T = {};
          T[P(207)] = P(192) + P(297), _0x5bffaa[P(193)](P(304), T);
        }
      }
    })();
  }, []), it(() => {
    const P = e;
    if (P(225) !== P(248)) {
      if (v[P(217)] || !x) return;
      const F = {};
      F[P(230) + "on"] = !1;
      const T = to(x, F);
      return T.on(P(232), () => {
        const N = P, O = {};
        O[N(207)] = N(232), O[N(219) + "t"] = u, O[N(214)] = o[N(214)], O[N(282)] = d, O[N(301)] = o[N(301)], T[N(193)](N(273), O);
      }), T.on(P(273), (N) => {
        const O = P;
        if (O(186) === O(281)) _0x2b6545[O(217)][O(193)](O(279), _0x3aa454);
        else if (N[O(291)] == !0)
          if (O(175) === O(221)) _0x432552((z) => [...z, _0x24effc]);
          else {
            v[O(217)] = T;
            const z = {};
            z[O(207)] = O(196) + O(260), T[O(193)](O(279), z);
          }
        else {
          const z = {};
          z[O(256)] = N[O(256)], z[O(277)] = O(289), K(z);
        }
      }), T.on(P(177), (N) => {
        const O = P;
        H[O(217)][O(272)](N);
      }), T.on(P(304), (N) => {
        const O = P;
        if (N) {
          if (H[O(217)][O(243) + "ta"](N), !H[O(217)][O(179)]) {
            const z = {};
            z[O(207)] = O(194) + "me", T[O(193)](O(279), z);
          }
        } else {
          const z = {};
          z[O(207)] = O(192) + O(297), T[O(193)](O(304), z);
        }
      }), T.on(P(279), (N) => {
        const O = P;
        if ((N[O(207)] == O(275) || N[O(207)] == O(247) + O(260)) && N[O(270)][O(302)] > 0) navigator[O(276)][O(265)](N[O(270)]);
        else if (N[O(207)] == O(303) + "n") {
          if (O(246) !== O(206)) H[O(217)][O(212) + O(176)](N[O(292)]), $[O(217)][O(286)](N[O(292)]);
          else if (_0x4526f2[O(217)][O(243) + "ta"](_0x1fc750), !_0x3530e3[O(217)][O(179)]) {
            const z = {};
            z[O(207)] = O(194) + "me", _0x47aa58[O(193)](O(279), z);
          }
        }
        if (N[O(266)]) {
          const z = Q[O(217)][O(269)](N[O(266)]);
          if (z)
            if (O(174) !== O(174)) {
              const je = {};
              je[O(256)] = O(208) + O(283) + O(222) + _0x35c06e[O(226)], je[O(277)] = O(305), _0x301b68(je);
            } else z(N), Q[O(217)][O(184)](N[O(266)]);
        }
      }), T.on(P(306) + P(268), (N) => {
        const O = P;
        if (O(244) === O(284)) {
          const z = {};
          z[O(207)] = O(192) + O(297), _0x5d41b5[O(193)](O(304), z);
        } else {
          const z = {};
          z[O(256)] = N, z[O(277)] = O(289), K(z);
        }
      }), T.on(P(300), (N) => {
        const O = P, z = {};
        z[O(256)] = O(208) + O(283) + O(222) + N[O(226)], z[O(277)] = O(305), K(z);
      }), () => {
        const N = P;
        T && (N(180) !== N(241) ? T[N(300)]() : _0x17da21 === _0x441958 && _0x1cf2b3[N(220)] === N(214) ? _0x297a8e(!_0x453850) : _0x181d08 === _0x4623b5 && _0x28929e[N(220)] === N(197) ? _0x363131(_0x4c5c01[N(214)]) : _0x23b850(_0x1aee0e));
      };
    } else _0x3a346d && _0xb153a[P(300)]();
  }, [x]), it(() => {
    const P = e, F = h[P(217)];
    H[P(217)] = new Sv(F, i, d, j);
  }, []), it(() => {
    const P = e;
    if (P(227) !== P(227)) {
      const F = {};
      F[P(207)] = P(194) + "me", _0x2a21e4[P(193)](P(279), F);
    } else {
      const F = () => {
        const T = P, N = document[T(288) + T(215)] || document[T(298) + T(224) + T(260)] || document[T(245) + T(295)] || document[T(262) + T(308)];
        H[T(217)][T(210) + T(238)](!!N), $[T(217)][T(210) + T(238)](!!N), $[T(217)][T(286)]();
      };
      return document[P(287) + P(216)](P(288) + P(202), F), () => {
        const T = P;
        document[T(263) + T(211)](T(288) + T(202), F);
      };
    }
  }, []);
  const J = {};
  J[e(228)] = o[e(214)];
  const ae = {};
  ae[e(255)] = e(229);
  const oe = {};
  oe[e(255)] = e(229);
  const G = {};
  G[e(255)] = e(229);
  const ee = {};
  ee[e(267)] = 0, ee[e(285)] = 0;
  const he = {};
  he[e(269)] = y, he[e(240)] = R;
  const fe = {};
  fe.id = B, fe[e(257)] = "0", fe[e(296)] = e(209);
  const pe = {};
  return pe[e(261)] = 5, U.jsxs(pd, { id: re, children: [S && U.jsx(yd, { children: U.jsx(vd, J) }), D[e(302)] == 0 ? U.jsxs(U.Fragment, { children: [!_ && U.jsxs(bf, { align: e(310), gap: e(280), children: [U.jsx(xr, ae), U.jsx(xr, oe), U.jsx(xr, G)] }), U.jsxs(md, { ref: g, id: X, style: _ ? {} : ee, children: [s ? U.jsx(bv, { status: he, ref: $, imageRef: h, displayId: f, isMobile: d, isShowDeviceId: S, onSenData: (P, F) => {
    const T = e;
    if (T(278) === T(264)) _0x273a0f(!_0x5c5512);
    else if (P === Ds && F[T(220)] === T(214)) p(!S);
    else if (P === Ds && F[T(220)] === T(197)) T(187) !== T(187) ? _0x24edc9[T(217)][T(272)](_0x2065c9) : l(o[T(214)]);
    else if (T(178) === T(195)) {
      const N = {};
      N[T(256)] = _0x32c3d4, N[T(277)] = T(289), _0x27a45b(N);
    } else Z(F);
  } }) : null, U.jsx(hv, { canvasContent: fe, imageRef: h, isMobile: d, assistive: y, onImgEvent: (P, F) => {
    const T = e;
    if (T(251) !== T(251)) return _0x78fa9[T(214)];
    if (P === Gf) {
      const N = { ...y };
      N[T(253)] = !1, R(N);
    } else if (T(242) !== T(242)) {
      _0x4b1913[T(217)][T(184)](_0x1dd4d2[T(266)]);
      const N = {};
      N[T(207)] = _0x2e5b02[T(207)], N[T(266)] = _0x629a57[T(266)], N[T(291)] = !1, N[T(279)] = T(249) + T(299) + T(274), _0x20e387(N);
    } else Z(F);
  } })] })] }) : D[e(231)]((P, F) => U.jsx(mf, { style: pe, message: P[e(256)], type: P[e(277)], showIcon: !0, closable: !0 }, F))] });
});
(function(t, n) {
  for (var e = Bs, r = t(); ; )
    try {
      var o = -parseInt(e(310)) / 1 + parseInt(e(306)) / 2 * (parseInt(e(311)) / 3) + parseInt(e(308)) / 4 + parseInt(e(307)) / 5 + parseInt(e(304)) / 6 * (-parseInt(e(309)) / 7) + -parseInt(e(305)) / 8 + -parseInt(e(303)) / 9;
      if (o === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Bo, 864461);
function Bs(t, n) {
  var e = Bo();
  return Bs = function(r, o) {
    r = r - 303;
    var i = e[r];
    return i;
  }, Bs(t, n);
}
function Bo() {
  var t = ["5812444mMfiQn", "352632FGkoWu", "1200260xCoxbw", "1269uCzlLi", "1417050AunDyJ", "102NHvoiP", "2613792ScoPht", "1358TEtbbI", "8324795xsPEtW"];
  return Bo = function() {
    return t;
  }, Bo();
}
export {
  Wv as ViewRP
};
