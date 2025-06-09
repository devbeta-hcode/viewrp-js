var C0 = Object.defineProperty;
var A0 = (n, t, e) => t in n ? C0(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var Be = (n, t, e) => A0(n, typeof t != "symbol" ? t + "" : t, e);
import * as _ from "react";
import Ve, { useDebugValue as Oa, createElement as T0, useRef as Ye, useContext as nn, isValidElement as O0, version as R0, createContext as Zi, useLayoutEffect as k0, useEffect as ct, useState as at, forwardRef as Il, useImperativeHandle as Nl } from "react";
import Ra from "react-dom";
var dr = yo;
(function(n, t) {
  for (var e = yo, r = n(); ; )
    try {
      var o = -parseInt(e(417)) / 1 + parseInt(e(392)) / 2 * (-parseInt(e(408)) / 3) + parseInt(e(410)) / 4 * (parseInt(e(414)) / 5) + parseInt(e(419)) / 6 + -parseInt(e(413)) / 7 * (parseInt(e(394)) / 8) + parseInt(e(388)) / 9 + -parseInt(e(397)) / 10 * (parseInt(e(400)) / 11);
      if (o === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(So, 722373);
typeof globalThis !== dr(403) || typeof window !== dr(403) || (typeof global !== dr(403) ? global : dr(403));
function yo(n, t) {
  var e = So();
  return yo = function(r, o) {
    r = r - 387;
    var s = e[r];
    return s;
  }, yo(n, t);
}
function P0(n) {
  var t = dr;
  return n && n[t(398)] && Object[t(395)][t(401) + t(387)][t(412)](n, t(415)) ? n[t(415)] : n;
}
function So() {
  var n = ["1142798QBffRm", "ptor", "549496Nebktk", "prototype", "apply", "4524070hxarrm", "__esModule", "length", "11meQgnJ", "hasOwnProp", "constructo", "undefined", "value", "forEach", "ertyDescri", "function", "3TrHngY", "getOwnProp", "76QAInYO", "defineProp", "call", "7hTCAXG", "101645PGSboo", "default", "construct", "492834pyzBTm", "KtRCB", "8118150BTnTdL", "erty", "5115816mlDlWP", "keys", "DJerq", "get"];
  return So = function() {
    return n;
  }, So();
}
var Dr = { exports: {} }, sr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ka;
function I0() {
  if (ka) return sr;
  ka = 1;
  var n = Ve, t = Symbol.for("react.element"), e = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(a, c, l) {
    var f, d = {}, u = null, v = null;
    l !== void 0 && (u = "" + l), c.key !== void 0 && (u = "" + c.key), c.ref !== void 0 && (v = c.ref);
    for (f in c) r.call(c, f) && !s.hasOwnProperty(f) && (d[f] = c[f]);
    if (a && a.defaultProps) for (f in c = a.defaultProps, c) d[f] === void 0 && (d[f] = c[f]);
    return { $$typeof: t, type: a, key: u, ref: v, props: d, _owner: o.current };
  }
  return sr.Fragment = e, sr.jsx = i, sr.jsxs = i, sr;
}
var ir = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pa;
function N0() {
  return Pa || (Pa = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Ve, t = Symbol.for("react.element"), e = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g = Symbol.iterator, h = "@@iterator";
    function p(m) {
      if (m === null || typeof m != "object")
        return null;
      var R = g && m[g] || m[h];
      return typeof R == "function" ? R : null;
    }
    var w = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(m) {
      {
        for (var R = arguments.length, D = new Array(R > 1 ? R - 1 : 0), G = 1; G < R; G++)
          D[G - 1] = arguments[G];
        x("error", m, D);
      }
    }
    function x(m, R, D) {
      {
        var G = w.ReactDebugCurrentFrame, xe = G.getStackAddendum();
        xe !== "" && (R += "%s", D = D.concat([xe]));
        var me = D.map(function(ue) {
          return String(ue);
        });
        me.unshift("Warning: " + R), Function.prototype.apply.call(console[m], console, me);
      }
    }
    var T = !1, b = !1, O = !1, C = !1, N = !1, z;
    z = Symbol.for("react.module.reference");
    function $(m) {
      return !!(typeof m == "string" || typeof m == "function" || m === r || m === s || N || m === o || m === l || m === f || C || m === v || T || b || O || typeof m == "object" && m !== null && (m.$$typeof === u || m.$$typeof === d || m.$$typeof === i || m.$$typeof === a || m.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      m.$$typeof === z || m.getModuleId !== void 0));
    }
    function oe(m, R, D) {
      var G = m.displayName;
      if (G)
        return G;
      var xe = R.displayName || R.name || "";
      return xe !== "" ? D + "(" + xe + ")" : D;
    }
    function K(m) {
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
        case e:
          return "Portal";
        case s:
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
            var R = m;
            return K(R) + ".Consumer";
          case i:
            var D = m;
            return K(D._context) + ".Provider";
          case c:
            return oe(m, m.render, "ForwardRef");
          case d:
            var G = m.displayName || null;
            return G !== null ? G : B(m.type) || "Memo";
          case u: {
            var xe = m, me = xe._payload, ue = xe._init;
            try {
              return B(ue(me));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var W = Object.assign, H = 0, te, Z, Q, ee, ae, se, J;
    function ne() {
    }
    ne.__reactDisabledLog = !0;
    function he() {
      {
        if (H === 0) {
          te = console.log, Z = console.info, Q = console.warn, ee = console.error, ae = console.group, se = console.groupCollapsed, J = console.groupEnd;
          var m = {
            configurable: !0,
            enumerable: !0,
            value: ne,
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
              value: te
            }),
            info: W({}, m, {
              value: Z
            }),
            warn: W({}, m, {
              value: Q
            }),
            error: W({}, m, {
              value: ee
            }),
            group: W({}, m, {
              value: ae
            }),
            groupCollapsed: W({}, m, {
              value: se
            }),
            groupEnd: W({}, m, {
              value: J
            })
          });
        }
        H < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var pe = w.ReactCurrentDispatcher, P;
    function j(m, R, D) {
      {
        if (P === void 0)
          try {
            throw Error();
          } catch (xe) {
            var G = xe.stack.trim().match(/\n( *(at )?)/);
            P = G && G[1] || "";
          }
        return `
` + P + m;
      }
    }
    var I = !1, L;
    {
      var y = typeof WeakMap == "function" ? WeakMap : Map;
      L = new y();
    }
    function F(m, R) {
      if (!m || I)
        return "";
      {
        var D = L.get(m);
        if (D !== void 0)
          return D;
      }
      var G;
      I = !0;
      var xe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var me;
      me = pe.current, pe.current = null, he();
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
            } catch (it) {
              G = it;
            }
            Reflect.construct(m, [], ue);
          } else {
            try {
              ue.call();
            } catch (it) {
              G = it;
            }
            m.call(ue.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (it) {
            G = it;
          }
          m();
        }
      } catch (it) {
        if (it && G && typeof it.stack == "string") {
          for (var ce = it.stack.split(`
`), et = G.stack.split(`
`), Pe = ce.length - 1, Ne = et.length - 1; Pe >= 1 && Ne >= 0 && ce[Pe] !== et[Ne]; )
            Ne--;
          for (; Pe >= 1 && Ne >= 0; Pe--, Ne--)
            if (ce[Pe] !== et[Ne]) {
              if (Pe !== 1 || Ne !== 1)
                do
                  if (Pe--, Ne--, Ne < 0 || ce[Pe] !== et[Ne]) {
                    var je = `
` + ce[Pe].replace(" at new ", " at ");
                    return m.displayName && je.includes("<anonymous>") && (je = je.replace("<anonymous>", m.displayName)), typeof m == "function" && L.set(m, je), je;
                  }
                while (Pe >= 1 && Ne >= 0);
              break;
            }
        }
      } finally {
        I = !1, pe.current = me, fe(), Error.prepareStackTrace = xe;
      }
      var Rn = m ? m.displayName || m.name : "", dn = Rn ? j(Rn) : "";
      return typeof m == "function" && L.set(m, dn), dn;
    }
    function X(m, R, D) {
      return F(m, !1);
    }
    function M(m) {
      var R = m.prototype;
      return !!(R && R.isReactComponent);
    }
    function ot(m, R, D) {
      if (m == null)
        return "";
      if (typeof m == "function")
        return F(m, M(m));
      if (typeof m == "string")
        return j(m);
      switch (m) {
        case l:
          return j("Suspense");
        case f:
          return j("SuspenseList");
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case c:
            return X(m.render);
          case d:
            return ot(m.type, R, D);
          case u: {
            var G = m, xe = G._payload, me = G._init;
            try {
              return ot(me(xe), R, D);
            } catch {
            }
          }
        }
      return "";
    }
    var Re = Object.prototype.hasOwnProperty, xt = {}, Nt = w.ReactDebugCurrentFrame;
    function dt(m) {
      if (m) {
        var R = m._owner, D = ot(m.type, m._source, R ? R.type : null);
        Nt.setExtraStackFrame(D);
      } else
        Nt.setExtraStackFrame(null);
    }
    function jt(m, R, D, G, xe) {
      {
        var me = Function.call.bind(Re);
        for (var ue in m)
          if (me(m, ue)) {
            var ce = void 0;
            try {
              if (typeof m[ue] != "function") {
                var et = Error((G || "React class") + ": " + D + " type `" + ue + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof m[ue] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw et.name = "Invariant Violation", et;
              }
              ce = m[ue](R, ue, G, D, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Pe) {
              ce = Pe;
            }
            ce && !(ce instanceof Error) && (dt(xe), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", G || "React class", D, ue, typeof ce), dt(null)), ce instanceof Error && !(ce.message in xt) && (xt[ce.message] = !0, dt(xe), S("Failed %s type: %s", D, ce.message), dt(null));
          }
      }
    }
    var De = Array.isArray;
    function _e(m) {
      return De(m);
    }
    function Ke(m) {
      {
        var R = typeof Symbol == "function" && Symbol.toStringTag, D = R && m[Symbol.toStringTag] || m.constructor.name || "Object";
        return D;
      }
    }
    function St(m) {
      try {
        return pt(m), !1;
      } catch {
        return !0;
      }
    }
    function pt(m) {
      return "" + m;
    }
    function an(m) {
      if (St(m))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke(m)), pt(m);
    }
    var cn = w.ReactCurrentOwner, On = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ln, un;
    function k(m) {
      if (Re.call(m, "ref")) {
        var R = Object.getOwnPropertyDescriptor(m, "ref").get;
        if (R && R.isReactWarning)
          return !1;
      }
      return m.ref !== void 0;
    }
    function E(m) {
      if (Re.call(m, "key")) {
        var R = Object.getOwnPropertyDescriptor(m, "key").get;
        if (R && R.isReactWarning)
          return !1;
      }
      return m.key !== void 0;
    }
    function Ae(m, R) {
      typeof m.ref == "string" && cn.current;
    }
    function we(m, R) {
      {
        var D = function() {
          ln || (ln = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        D.isReactWarning = !0, Object.defineProperty(m, "key", {
          get: D,
          configurable: !0
        });
      }
    }
    function ke(m, R) {
      {
        var D = function() {
          un || (un = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        D.isReactWarning = !0, Object.defineProperty(m, "ref", {
          get: D,
          configurable: !0
        });
      }
    }
    var Y = function(m, R, D, G, xe, me, ue) {
      var ce = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: m,
        key: R,
        ref: D,
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
        value: G
      }), Object.defineProperty(ce, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: xe
      }), Object.freeze && (Object.freeze(ce.props), Object.freeze(ce)), ce;
    };
    function Te(m, R, D, G, xe) {
      {
        var me, ue = {}, ce = null, et = null;
        D !== void 0 && (an(D), ce = "" + D), E(R) && (an(R.key), ce = "" + R.key), k(R) && (et = R.ref, Ae(R, xe));
        for (me in R)
          Re.call(R, me) && !On.hasOwnProperty(me) && (ue[me] = R[me]);
        if (m && m.defaultProps) {
          var Pe = m.defaultProps;
          for (me in Pe)
            ue[me] === void 0 && (ue[me] = Pe[me]);
        }
        if (ce || et) {
          var Ne = typeof m == "function" ? m.displayName || m.name || "Unknown" : m;
          ce && we(ue, Ne), et && ke(ue, Ne);
        }
        return Y(m, ce, et, xe, G, cn.current, ue);
      }
    }
    var ye = w.ReactCurrentOwner, wt = w.ReactDebugCurrentFrame;
    function Je(m) {
      if (m) {
        var R = m._owner, D = ot(m.type, m._source, R ? R.type : null);
        wt.setExtraStackFrame(D);
      } else
        wt.setExtraStackFrame(null);
    }
    var Ht;
    Ht = !1;
    function fn(m) {
      return typeof m == "object" && m !== null && m.$$typeof === t;
    }
    function Me() {
      {
        if (ye.current) {
          var m = B(ye.current.type);
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
    var Qe = {};
    function Lt(m) {
      {
        var R = Me();
        if (!R) {
          var D = typeof m == "string" ? m : m.displayName || m.name;
          D && (R = `

Check the top-level render call using <` + D + ">.");
        }
        return R;
      }
    }
    function st(m, R) {
      {
        if (!m._store || m._store.validated || m.key != null)
          return;
        m._store.validated = !0;
        var D = Lt(R);
        if (Qe[D])
          return;
        Qe[D] = !0;
        var G = "";
        m && m._owner && m._owner !== ye.current && (G = " It was passed a child from " + B(m._owner.type) + "."), Je(m), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', D, G), Je(null);
      }
    }
    function Gt(m, R) {
      {
        if (typeof m != "object")
          return;
        if (_e(m))
          for (var D = 0; D < m.length; D++) {
            var G = m[D];
            fn(G) && st(G, R);
          }
        else if (fn(m))
          m._store && (m._store.validated = !0);
        else if (m) {
          var xe = p(m);
          if (typeof xe == "function" && xe !== m.entries)
            for (var me = xe.call(m), ue; !(ue = me.next()).done; )
              fn(ue.value) && st(ue.value, R);
        }
      }
    }
    function mt(m) {
      {
        var R = m.type;
        if (R == null || typeof R == "string")
          return;
        var D;
        if (typeof R == "function")
          D = R.propTypes;
        else if (typeof R == "object" && (R.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        R.$$typeof === d))
          D = R.propTypes;
        else
          return;
        if (D) {
          var G = B(R);
          jt(D, m.props, "prop", G, m);
        } else if (R.PropTypes !== void 0 && !Ht) {
          Ht = !0;
          var xe = B(R);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", xe || "Unknown");
        }
        typeof R.getDefaultProps == "function" && !R.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Kt(m) {
      {
        for (var R = Object.keys(m.props), D = 0; D < R.length; D++) {
          var G = R[D];
          if (G !== "children" && G !== "key") {
            Je(m), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", G), Je(null);
            break;
          }
        }
        m.ref !== null && (Je(m), S("Invalid attribute `ref` supplied to `React.Fragment`."), Je(null));
      }
    }
    var or = {};
    function jr(m, R, D, G, xe, me) {
      {
        var ue = $(m);
        if (!ue) {
          var ce = "";
          (m === void 0 || typeof m == "object" && m !== null && Object.keys(m).length === 0) && (ce += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var et = Ze();
          et ? ce += et : ce += Me();
          var Pe;
          m === null ? Pe = "null" : _e(m) ? Pe = "array" : m !== void 0 && m.$$typeof === t ? (Pe = "<" + (B(m.type) || "Unknown") + " />", ce = " Did you accidentally export a JSX literal instead of a component?") : Pe = typeof m, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Pe, ce);
        }
        var Ne = Te(m, R, D, xe, me);
        if (Ne == null)
          return Ne;
        if (ue) {
          var je = R.children;
          if (je !== void 0)
            if (G)
              if (_e(je)) {
                for (var Rn = 0; Rn < je.length; Rn++)
                  Gt(je[Rn], m);
                Object.freeze && Object.freeze(je);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Gt(je, m);
        }
        if (Re.call(R, "key")) {
          var dn = B(m), it = Object.keys(R).filter(function(_0) {
            return _0 !== "key";
          }), Ss = it.length > 0 ? "{key: someKey, " + it.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!or[dn + Ss]) {
            var E0 = it.length > 0 ? "{" + it.join(": ..., ") + ": ...}" : "{}";
            S(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ss, dn, E0, dn), or[dn + Ss] = !0;
          }
        }
        return m === r ? Kt(Ne) : mt(Ne), Ne;
      }
    }
    function Xe(m, R, D) {
      return jr(m, R, D, !0);
    }
    function Lr(m, R, D) {
      return jr(m, R, D, !1);
    }
    var ys = Lr, Ie = Xe;
    ir.Fragment = r, ir.jsx = ys, ir.jsxs = Ie;
  }()), ir;
}
var Ia;
function j0() {
  return Ia || (Ia = 1, process.env.NODE_ENV === "production" ? Dr.exports = I0() : Dr.exports = N0()), Dr.exports;
}
var U = j0(), lt = function() {
  return lt = Object.assign || function(t) {
    for (var e, r = 1, o = arguments.length; r < o; r++) {
      e = arguments[r];
      for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
    }
    return t;
  }, lt.apply(this, arguments);
};
function Mn(n, t, e) {
  if (e || arguments.length === 2) for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return n.concat(s || Array.prototype.slice.call(t));
}
function L0(n) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(e) {
    return t[e] === void 0 && (t[e] = n(e)), t[e];
  };
}
var D0 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, M0 = /* @__PURE__ */ L0(
  function(n) {
    return D0.test(n) || n.charCodeAt(0) === 111 && n.charCodeAt(1) === 110 && n.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ce = "-ms-", pr = "-moz-", be = "-webkit-", jl = "comm", Ko = "rule", Qi = "decl", B0 = "@import", Ll = "@keyframes", F0 = "@layer", Dl = Math.abs, ea = String.fromCharCode, Ys = Object.assign;
function z0(n, t) {
  return Ge(n, 0) ^ 45 ? (((t << 2 ^ Ge(n, 0)) << 2 ^ Ge(n, 1)) << 2 ^ Ge(n, 2)) << 2 ^ Ge(n, 3) : 0;
}
function Ml(n) {
  return n.trim();
}
function Xt(n, t) {
  return (n = t.exec(n)) ? n[0] : n;
}
function ie(n, t, e) {
  return n.replace(t, e);
}
function eo(n, t, e) {
  return n.indexOf(t, e);
}
function Ge(n, t) {
  return n.charCodeAt(t) | 0;
}
function Bn(n, t, e) {
  return n.slice(t, e);
}
function Bt(n) {
  return n.length;
}
function Bl(n) {
  return n.length;
}
function hr(n, t) {
  return t.push(n), n;
}
function V0(n, t) {
  return n.map(t).join("");
}
function Na(n, t) {
  return n.filter(function(e) {
    return !Xt(e, t);
  });
}
var Jo = 1, Fn = 1, Fl = 0, bt = 0, Ue = 0, Gn = "";
function Zo(n, t, e, r, o, s, i, a) {
  return { value: n, root: t, parent: e, type: r, props: o, children: s, line: Jo, column: Fn, length: i, return: "", siblings: a };
}
function Jt(n, t) {
  return Ys(Zo("", null, null, "", null, null, 0, n.siblings), n, { length: -n.length }, t);
}
function kn(n) {
  for (; n.root; )
    n = Jt(n.root, { children: [n] });
  hr(n, n.siblings);
}
function H0() {
  return Ue;
}
function U0() {
  return Ue = bt > 0 ? Ge(Gn, --bt) : 0, Fn--, Ue === 10 && (Fn = 1, Jo--), Ue;
}
function At() {
  return Ue = bt < Fl ? Ge(Gn, bt++) : 0, Fn++, Ue === 10 && (Fn = 1, Jo++), Ue;
}
function yn() {
  return Ge(Gn, bt);
}
function to() {
  return bt;
}
function Qo(n, t) {
  return Bn(Gn, n, t);
}
function $s(n) {
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
function q0(n) {
  return Jo = Fn = 1, Fl = Bt(Gn = n), bt = 0, [];
}
function W0(n) {
  return Gn = "", n;
}
function ws(n) {
  return Ml(Qo(bt - 1, Gs(n === 91 ? n + 2 : n === 40 ? n + 1 : n)));
}
function X0(n) {
  for (; (Ue = yn()) && Ue < 33; )
    At();
  return $s(n) > 2 || $s(Ue) > 3 ? "" : " ";
}
function Y0(n, t) {
  for (; --t && At() && !(Ue < 48 || Ue > 102 || Ue > 57 && Ue < 65 || Ue > 70 && Ue < 97); )
    ;
  return Qo(n, to() + (t < 6 && yn() == 32 && At() == 32));
}
function Gs(n) {
  for (; At(); )
    switch (Ue) {
      // ] ) " '
      case n:
        return bt;
      // " '
      case 34:
      case 39:
        n !== 34 && n !== 39 && Gs(Ue);
        break;
      // (
      case 40:
        n === 41 && Gs(n);
        break;
      // \
      case 92:
        At();
        break;
    }
  return bt;
}
function $0(n, t) {
  for (; At() && n + Ue !== 57; )
    if (n + Ue === 84 && yn() === 47)
      break;
  return "/*" + Qo(t, bt - 1) + "*" + ea(n === 47 ? n : At());
}
function G0(n) {
  for (; !$s(yn()); )
    At();
  return Qo(n, bt);
}
function K0(n) {
  return W0(no("", null, null, null, [""], n = q0(n), 0, [0], n));
}
function no(n, t, e, r, o, s, i, a, c) {
  for (var l = 0, f = 0, d = i, u = 0, v = 0, g = 0, h = 1, p = 1, w = 1, S = 0, x = "", T = o, b = s, O = r, C = x; p; )
    switch (g = S, S = At()) {
      // (
      case 40:
        if (g != 108 && Ge(C, d - 1) == 58) {
          eo(C += ie(ws(S), "&", "&\f"), "&\f", Dl(l ? a[l - 1] : 0)) != -1 && (w = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        C += ws(S);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        C += X0(g);
        break;
      // \
      case 92:
        C += Y0(to() - 1, 7);
        continue;
      // /
      case 47:
        switch (yn()) {
          case 42:
          case 47:
            hr(J0($0(At(), to()), t, e, c), c);
            break;
          default:
            C += "/";
        }
        break;
      // {
      case 123 * h:
        a[l++] = Bt(C) * w;
      // } ; \0
      case 125 * h:
      case 59:
      case 0:
        switch (S) {
          // \0 }
          case 0:
          case 125:
            p = 0;
          // ;
          case 59 + f:
            w == -1 && (C = ie(C, /\f/g, "")), v > 0 && Bt(C) - d && hr(v > 32 ? La(C + ";", r, e, d - 1, c) : La(ie(C, " ", "") + ";", r, e, d - 2, c), c);
            break;
          // @ ;
          case 59:
            C += ";";
          // { rule/at-rule
          default:
            if (hr(O = ja(C, t, e, l, f, o, a, x, T = [], b = [], d, s), s), S === 123)
              if (f === 0)
                no(C, t, O, O, T, s, d, a, b);
              else
                switch (u === 99 && Ge(C, 3) === 110 ? 100 : u) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    no(n, O, O, r && hr(ja(n, O, O, 0, 0, o, a, x, o, T = [], d, b), b), o, b, d, a, r ? T : b);
                    break;
                  default:
                    no(C, O, O, O, [""], b, 0, a, b);
                }
        }
        l = f = v = 0, h = w = 1, x = C = "", d = i;
        break;
      // :
      case 58:
        d = 1 + Bt(C), v = g;
      default:
        if (h < 1) {
          if (S == 123)
            --h;
          else if (S == 125 && h++ == 0 && U0() == 125)
            continue;
        }
        switch (C += ea(S), S * h) {
          // &
          case 38:
            w = f > 0 ? 1 : (C += "\f", -1);
            break;
          // ,
          case 44:
            a[l++] = (Bt(C) - 1) * w, w = 1;
            break;
          // @
          case 64:
            yn() === 45 && (C += ws(At())), u = yn(), f = d = Bt(x = C += G0(to())), S++;
            break;
          // -
          case 45:
            g === 45 && Bt(C) == 2 && (h = 0);
        }
    }
  return s;
}
function ja(n, t, e, r, o, s, i, a, c, l, f, d) {
  for (var u = o - 1, v = o === 0 ? s : [""], g = Bl(v), h = 0, p = 0, w = 0; h < r; ++h)
    for (var S = 0, x = Bn(n, u + 1, u = Dl(p = i[h])), T = n; S < g; ++S)
      (T = Ml(p > 0 ? v[S] + " " + x : ie(x, /&\f/g, v[S]))) && (c[w++] = T);
  return Zo(n, t, e, o === 0 ? Ko : a, c, l, f, d);
}
function J0(n, t, e, r) {
  return Zo(n, t, e, jl, ea(H0()), Bn(n, 2, -2), 0, r);
}
function La(n, t, e, r, o) {
  return Zo(n, t, e, Qi, Bn(n, 0, r), Bn(n, r + 1, -1), r, o);
}
function zl(n, t, e) {
  switch (z0(n, t)) {
    // color-adjust
    case 5103:
      return be + "print-" + n + n;
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
      return be + n + n;
    // tab-size
    case 4789:
      return pr + n + n;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return be + n + pr + n + Ce + n + n;
    // writing-mode
    case 5936:
      switch (Ge(n, t + 11)) {
        // vertical-l(r)
        case 114:
          return be + n + Ce + ie(n, /[svh]\w+-[tblr]{2}/, "tb") + n;
        // vertical-r(l)
        case 108:
          return be + n + Ce + ie(n, /[svh]\w+-[tblr]{2}/, "tb-rl") + n;
        // horizontal(-)tb
        case 45:
          return be + n + Ce + ie(n, /[svh]\w+-[tblr]{2}/, "lr") + n;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return be + n + Ce + n + n;
    // order
    case 6165:
      return be + n + Ce + "flex-" + n + n;
    // align-items
    case 5187:
      return be + n + ie(n, /(\w+).+(:[^]+)/, be + "box-$1$2" + Ce + "flex-$1$2") + n;
    // align-self
    case 5443:
      return be + n + Ce + "flex-item-" + ie(n, /flex-|-self/g, "") + (Xt(n, /flex-|baseline/) ? "" : Ce + "grid-row-" + ie(n, /flex-|-self/g, "")) + n;
    // align-content
    case 4675:
      return be + n + Ce + "flex-line-pack" + ie(n, /align-content|flex-|-self/g, "") + n;
    // flex-shrink
    case 5548:
      return be + n + Ce + ie(n, "shrink", "negative") + n;
    // flex-basis
    case 5292:
      return be + n + Ce + ie(n, "basis", "preferred-size") + n;
    // flex-grow
    case 6060:
      return be + "box-" + ie(n, "-grow", "") + be + n + Ce + ie(n, "grow", "positive") + n;
    // transition
    case 4554:
      return be + ie(n, /([^-])(transform)/g, "$1" + be + "$2") + n;
    // cursor
    case 6187:
      return ie(ie(ie(n, /(zoom-|grab)/, be + "$1"), /(image-set)/, be + "$1"), n, "") + n;
    // background, background-image
    case 5495:
    case 3959:
      return ie(n, /(image-set\([^]*)/, be + "$1$`$1");
    // justify-content
    case 4968:
      return ie(ie(n, /(.+:)(flex-)?(.*)/, be + "box-pack:$3" + Ce + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + be + n + n;
    // justify-self
    case 4200:
      if (!Xt(n, /flex-|baseline/)) return Ce + "grid-column-align" + Bn(n, t) + n;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return Ce + ie(n, "template-", "") + n;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return e && e.some(function(r, o) {
        return t = o, Xt(r.props, /grid-\w+-end/);
      }) ? ~eo(n + (e = e[t].value), "span", 0) ? n : Ce + ie(n, "-start", "") + n + Ce + "grid-row-span:" + (~eo(e, "span", 0) ? Xt(e, /\d+/) : +Xt(e, /\d+/) - +Xt(n, /\d+/)) + ";" : Ce + ie(n, "-start", "") + n;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return e && e.some(function(r) {
        return Xt(r.props, /grid-\w+-start/);
      }) ? n : Ce + ie(ie(n, "-end", "-span"), "span ", "") + n;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ie(n, /(.+)-inline(.+)/, be + "$1$2") + n;
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
      if (Bt(n) - 1 - t > 6)
        switch (Ge(n, t + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (Ge(n, t + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return ie(n, /(.+:)(.+)-([^]+)/, "$1" + be + "$2-$3$1" + pr + (Ge(n, t + 3) == 108 ? "$3" : "$2-$3")) + n;
          // (s)tretch
          case 115:
            return ~eo(n, "stretch", 0) ? zl(ie(n, "stretch", "fill-available"), t, e) + n : n;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return ie(n, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, s, i, a, c, l) {
        return Ce + o + ":" + s + l + (i ? Ce + o + "-span:" + (a ? c : +c - +s) + l : "") + n;
      });
    // position: sticky
    case 4949:
      if (Ge(n, t + 6) === 121)
        return ie(n, ":", ":" + be) + n;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (Ge(n, Ge(n, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return ie(n, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + be + (Ge(n, 14) === 45 ? "inline-" : "") + "box$3$1" + be + "$2$3$1" + Ce + "$2box$3") + n;
        // (inline-)?gri(d)
        case 100:
          return ie(n, ":", ":" + Ce) + n;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return ie(n, "scroll-", "scroll-snap-") + n;
  }
  return n;
}
function wo(n, t) {
  for (var e = "", r = 0; r < n.length; r++)
    e += t(n[r], r, n, t) || "";
  return e;
}
function Z0(n, t, e, r) {
  switch (n.type) {
    case F0:
      if (n.children.length) break;
    case B0:
    case Qi:
      return n.return = n.return || n.value;
    case jl:
      return "";
    case Ll:
      return n.return = n.value + "{" + wo(n.children, r) + "}";
    case Ko:
      if (!Bt(n.value = n.props.join(","))) return "";
  }
  return Bt(e = wo(n.children, r)) ? n.return = n.value + "{" + e + "}" : "";
}
function Q0(n) {
  var t = Bl(n);
  return function(e, r, o, s) {
    for (var i = "", a = 0; a < t; a++)
      i += n[a](e, r, o, s) || "";
    return i;
  };
}
function ed(n) {
  return function(t) {
    t.root || (t = t.return) && n(t);
  };
}
function td(n, t, e, r) {
  if (n.length > -1 && !n.return)
    switch (n.type) {
      case Qi:
        n.return = zl(n.value, n.length, e);
        return;
      case Ll:
        return wo([Jt(n, { value: ie(n.value, "@", "@" + be) })], r);
      case Ko:
        if (n.length)
          return V0(e = n.props, function(o) {
            switch (Xt(o, r = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                kn(Jt(n, { props: [ie(o, /:(read-\w+)/, ":" + pr + "$1")] })), kn(Jt(n, { props: [o] })), Ys(n, { props: Na(e, r) });
                break;
              // :placeholder
              case "::placeholder":
                kn(Jt(n, { props: [ie(o, /:(plac\w+)/, ":" + be + "input-$1")] })), kn(Jt(n, { props: [ie(o, /:(plac\w+)/, ":" + pr + "$1")] })), kn(Jt(n, { props: [ie(o, /:(plac\w+)/, Ce + "input-$1")] })), kn(Jt(n, { props: [o] })), Ys(n, { props: Na(e, r) });
                break;
            }
            return "";
          });
    }
}
var nd = {
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
}, An = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Vl = "active", Hl = "data-styled-version", es = "6.1.18", ta = `/*!sc*/
`, Eo = typeof window < "u" && typeof document < "u", rd = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Da = /invalid hook call/i, Mr = /* @__PURE__ */ new Set(), od = function(n, t) {
  if (process.env.NODE_ENV !== "production") {
    var e = t ? ' with the id of "'.concat(t, '"') : "", r = "The component ".concat(n).concat(e, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, o = console.error;
    try {
      var s = !0;
      console.error = function(i) {
        for (var a = [], c = 1; c < arguments.length; c++) a[c - 1] = arguments[c];
        Da.test(i) ? (s = !1, Mr.delete(r)) : o.apply(void 0, Mn([i], a, !1));
      }, Ye(), s && !Mr.has(r) && (console.warn(r), Mr.add(r));
    } catch (i) {
      Da.test(i.message) && Mr.delete(r);
    } finally {
      console.error = o;
    }
  }
}, ts = Object.freeze([]), zn = Object.freeze({});
function sd(n, t, e) {
  return e === void 0 && (e = zn), n.theme !== e.theme && n.theme || t || e.theme;
}
var Ks = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), id = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, ad = /(^-|-$)/g;
function Ma(n) {
  return n.replace(id, "-").replace(ad, "");
}
var cd = /(a)(d)/gi, Br = 52, Ba = function(n) {
  return String.fromCharCode(n + (n > 25 ? 39 : 97));
};
function Js(n) {
  var t, e = "";
  for (t = Math.abs(n); t > Br; t = t / Br | 0) e = Ba(t % Br) + e;
  return (Ba(t % Br) + e).replace(cd, "$1-$2");
}
var Es, Ul = 5381, xn = function(n, t) {
  for (var e = t.length; e; ) n = 33 * n ^ t.charCodeAt(--e);
  return n;
}, ql = function(n) {
  return xn(Ul, n);
};
function ld(n) {
  return Js(ql(n) >>> 0);
}
function Wl(n) {
  return process.env.NODE_ENV !== "production" && typeof n == "string" && n || n.displayName || n.name || "Component";
}
function _s(n) {
  return typeof n == "string" && (process.env.NODE_ENV === "production" || n.charAt(0) === n.charAt(0).toLowerCase());
}
var Xl = typeof Symbol == "function" && Symbol.for, Yl = Xl ? Symbol.for("react.memo") : 60115, ud = Xl ? Symbol.for("react.forward_ref") : 60112, fd = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, dd = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, $l = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, hd = ((Es = {})[ud] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Es[Yl] = $l, Es);
function Fa(n) {
  return ("type" in (t = n) && t.type.$$typeof) === Yl ? $l : "$$typeof" in n ? hd[n.$$typeof] : fd;
  var t;
}
var xd = Object.defineProperty, pd = Object.getOwnPropertyNames, za = Object.getOwnPropertySymbols, md = Object.getOwnPropertyDescriptor, gd = Object.getPrototypeOf, Va = Object.prototype;
function Gl(n, t, e) {
  if (typeof t != "string") {
    if (Va) {
      var r = gd(t);
      r && r !== Va && Gl(n, r, e);
    }
    var o = pd(t);
    za && (o = o.concat(za(t)));
    for (var s = Fa(n), i = Fa(t), a = 0; a < o.length; ++a) {
      var c = o[a];
      if (!(c in dd || e && e[c] || i && c in i || s && c in s)) {
        var l = md(t, c);
        try {
          xd(n, c, l);
        } catch {
        }
      }
    }
  }
  return n;
}
function Vn(n) {
  return typeof n == "function";
}
function na(n) {
  return typeof n == "object" && "styledComponentId" in n;
}
function mn(n, t) {
  return n && t ? "".concat(n, " ").concat(t) : n || t || "";
}
function Ha(n, t) {
  if (n.length === 0) return "";
  for (var e = n[0], r = 1; r < n.length; r++) e += n[r];
  return e;
}
function Hn(n) {
  return n !== null && typeof n == "object" && n.constructor.name === Object.name && !("props" in n && n.$$typeof);
}
function Zs(n, t, e) {
  if (e === void 0 && (e = !1), !e && !Hn(n) && !Array.isArray(n)) return t;
  if (Array.isArray(t)) for (var r = 0; r < t.length; r++) n[r] = Zs(n[r], t[r]);
  else if (Hn(t)) for (var r in t) n[r] = Zs(n[r], t[r]);
  return n;
}
function ra(n, t) {
  Object.defineProperty(n, "toString", { value: t });
}
var vd = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function bd() {
  for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
  for (var e = n[0], r = [], o = 1, s = n.length; o < s; o += 1) r.push(n[o]);
  return r.forEach(function(i) {
    e = e.replace(/%[a-z]/, i);
  }), e;
}
function Kn(n) {
  for (var t = [], e = 1; e < arguments.length; e++) t[e - 1] = arguments[e];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(bd.apply(void 0, Mn([vd[n]], t, !1)).trim());
}
var yd = function() {
  function n(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return n.prototype.indexOfGroup = function(t) {
    for (var e = 0, r = 0; r < t; r++) e += this.groupSizes[r];
    return e;
  }, n.prototype.insertRules = function(t, e) {
    if (t >= this.groupSizes.length) {
      for (var r = this.groupSizes, o = r.length, s = o; t >= s; ) if ((s <<= 1) < 0) throw Kn(16, "".concat(t));
      this.groupSizes = new Uint32Array(s), this.groupSizes.set(r), this.length = s;
      for (var i = o; i < s; i++) this.groupSizes[i] = 0;
    }
    for (var a = this.indexOfGroup(t + 1), c = (i = 0, e.length); i < c; i++) this.tag.insertRule(a, e[i]) && (this.groupSizes[t]++, a++);
  }, n.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var e = this.groupSizes[t], r = this.indexOfGroup(t), o = r + e;
      this.groupSizes[t] = 0;
      for (var s = r; s < o; s++) this.tag.deleteRule(r);
    }
  }, n.prototype.getGroup = function(t) {
    var e = "";
    if (t >= this.length || this.groupSizes[t] === 0) return e;
    for (var r = this.groupSizes[t], o = this.indexOfGroup(t), s = o + r, i = o; i < s; i++) e += "".concat(this.tag.getRule(i)).concat(ta);
    return e;
  }, n;
}(), Sd = 1 << 30, ro = /* @__PURE__ */ new Map(), _o = /* @__PURE__ */ new Map(), oo = 1, Fr = function(n) {
  if (ro.has(n)) return ro.get(n);
  for (; _o.has(oo); ) oo++;
  var t = oo++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > Sd)) throw Kn(16, "".concat(t));
  return ro.set(n, t), _o.set(t, n), t;
}, wd = function(n, t) {
  oo = t + 1, ro.set(n, t), _o.set(t, n);
}, Ed = "style[".concat(An, "][").concat(Hl, '="').concat(es, '"]'), _d = new RegExp("^".concat(An, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Cd = function(n, t, e) {
  for (var r, o = e.split(","), s = 0, i = o.length; s < i; s++) (r = o[s]) && n.registerName(t, r);
}, Ad = function(n, t) {
  for (var e, r = ((e = t.textContent) !== null && e !== void 0 ? e : "").split(ta), o = [], s = 0, i = r.length; s < i; s++) {
    var a = r[s].trim();
    if (a) {
      var c = a.match(_d);
      if (c) {
        var l = 0 | parseInt(c[1], 10), f = c[2];
        l !== 0 && (wd(f, l), Cd(n, f, c[3]), n.getTag().insertRules(l, o)), o.length = 0;
      } else o.push(a);
    }
  }
}, Ua = function(n) {
  for (var t = document.querySelectorAll(Ed), e = 0, r = t.length; e < r; e++) {
    var o = t[e];
    o && o.getAttribute(An) !== Vl && (Ad(n, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function Td() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Kl = function(n) {
  var t = document.head, e = n || t, r = document.createElement("style"), o = function(a) {
    var c = Array.from(a.querySelectorAll("style[".concat(An, "]")));
    return c[c.length - 1];
  }(e), s = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(An, Vl), r.setAttribute(Hl, es);
  var i = Td();
  return i && r.setAttribute("nonce", i), e.insertBefore(r, s), r;
}, Od = function() {
  function n(t) {
    this.element = Kl(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(e) {
      if (e.sheet) return e.sheet;
      for (var r = document.styleSheets, o = 0, s = r.length; o < s; o++) {
        var i = r[o];
        if (i.ownerNode === e) return i;
      }
      throw Kn(17);
    }(this.element), this.length = 0;
  }
  return n.prototype.insertRule = function(t, e) {
    try {
      return this.sheet.insertRule(e, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, n.prototype.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, n.prototype.getRule = function(t) {
    var e = this.sheet.cssRules[t];
    return e && e.cssText ? e.cssText : "";
  }, n;
}(), Rd = function() {
  function n(t) {
    this.element = Kl(t), this.nodes = this.element.childNodes, this.length = 0;
  }
  return n.prototype.insertRule = function(t, e) {
    if (t <= this.length && t >= 0) {
      var r = document.createTextNode(e);
      return this.element.insertBefore(r, this.nodes[t] || null), this.length++, !0;
    }
    return !1;
  }, n.prototype.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, n.prototype.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, n;
}(), kd = function() {
  function n(t) {
    this.rules = [], this.length = 0;
  }
  return n.prototype.insertRule = function(t, e) {
    return t <= this.length && (this.rules.splice(t, 0, e), this.length++, !0);
  }, n.prototype.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, n.prototype.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, n;
}(), qa = Eo, Pd = { isServer: !Eo, useCSSOMInjection: !rd }, Jl = function() {
  function n(t, e, r) {
    t === void 0 && (t = zn), e === void 0 && (e = {});
    var o = this;
    this.options = lt(lt({}, Pd), t), this.gs = e, this.names = new Map(r), this.server = !!t.isServer, !this.server && Eo && qa && (qa = !1, Ua(this)), ra(this, function() {
      return function(s) {
        for (var i = s.getTag(), a = i.length, c = "", l = function(d) {
          var u = function(w) {
            return _o.get(w);
          }(d);
          if (u === void 0) return "continue";
          var v = s.names.get(u), g = i.getGroup(d);
          if (v === void 0 || !v.size || g.length === 0) return "continue";
          var h = "".concat(An, ".g").concat(d, '[id="').concat(u, '"]'), p = "";
          v !== void 0 && v.forEach(function(w) {
            w.length > 0 && (p += "".concat(w, ","));
          }), c += "".concat(g).concat(h, '{content:"').concat(p, '"}').concat(ta);
        }, f = 0; f < a; f++) l(f);
        return c;
      }(o);
    });
  }
  return n.registerId = function(t) {
    return Fr(t);
  }, n.prototype.rehydrate = function() {
    !this.server && Eo && Ua(this);
  }, n.prototype.reconstructWithOptions = function(t, e) {
    return e === void 0 && (e = !0), new n(lt(lt({}, this.options), t), this.gs, e && this.names || void 0);
  }, n.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, n.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(e) {
      var r = e.useCSSOMInjection, o = e.target;
      return e.isServer ? new kd(o) : r ? new Od(o) : new Rd(o);
    }(this.options), new yd(t)));
    var t;
  }, n.prototype.hasNameForId = function(t, e) {
    return this.names.has(t) && this.names.get(t).has(e);
  }, n.prototype.registerName = function(t, e) {
    if (Fr(t), this.names.has(t)) this.names.get(t).add(e);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(e), this.names.set(t, r);
    }
  }, n.prototype.insertRules = function(t, e, r) {
    this.registerName(t, e), this.getTag().insertRules(Fr(t), r);
  }, n.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, n.prototype.clearRules = function(t) {
    this.getTag().clearGroup(Fr(t)), this.clearNames(t);
  }, n.prototype.clearTag = function() {
    this.tag = void 0;
  }, n;
}(), Id = /&/g, Nd = /^\s*\/\/.*$/gm;
function Zl(n, t) {
  return n.map(function(e) {
    return e.type === "rule" && (e.value = "".concat(t, " ").concat(e.value), e.value = e.value.replaceAll(",", ",".concat(t, " ")), e.props = e.props.map(function(r) {
      return "".concat(t, " ").concat(r);
    })), Array.isArray(e.children) && e.type !== "@keyframes" && (e.children = Zl(e.children, t)), e;
  });
}
function jd(n) {
  var t, e, r, o = zn, s = o.options, i = s === void 0 ? zn : s, a = o.plugins, c = a === void 0 ? ts : a, l = function(u, v, g) {
    return g.startsWith(e) && g.endsWith(e) && g.replaceAll(e, "").length > 0 ? ".".concat(t) : u;
  }, f = c.slice();
  f.push(function(u) {
    u.type === Ko && u.value.includes("&") && (u.props[0] = u.props[0].replace(Id, e).replace(r, l));
  }), i.prefix && f.push(td), f.push(Z0);
  var d = function(u, v, g, h) {
    v === void 0 && (v = ""), g === void 0 && (g = ""), h === void 0 && (h = "&"), t = h, e = v, r = new RegExp("\\".concat(e, "\\b"), "g");
    var p = u.replace(Nd, ""), w = K0(g || v ? "".concat(g, " ").concat(v, " { ").concat(p, " }") : p);
    i.namespace && (w = Zl(w, i.namespace));
    var S = [];
    return wo(w, Q0(f.concat(ed(function(x) {
      return S.push(x);
    })))), S;
  };
  return d.hash = c.length ? c.reduce(function(u, v) {
    return v.name || Kn(15), xn(u, v.name);
  }, Ul).toString() : "", d;
}
var Ld = new Jl(), Qs = jd(), Ql = Ve.createContext({ shouldForwardProp: void 0, styleSheet: Ld, stylis: Qs });
Ql.Consumer;
Ve.createContext(void 0);
function Wa() {
  return nn(Ql);
}
var Xa = function() {
  function n(t, e) {
    var r = this;
    this.inject = function(o, s) {
      s === void 0 && (s = Qs);
      var i = r.name + s.hash;
      o.hasNameForId(r.id, i) || o.insertRules(r.id, i, s(r.rules, i, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = e, ra(this, function() {
      throw Kn(12, String(r.name));
    });
  }
  return n.prototype.getName = function(t) {
    return t === void 0 && (t = Qs), this.name + t.hash;
  }, n;
}(), Dd = function(n) {
  return n >= "A" && n <= "Z";
};
function Ya(n) {
  for (var t = "", e = 0; e < n.length; e++) {
    var r = n[e];
    if (e === 1 && r === "-" && n[0] === "-") return n;
    Dd(r) ? t += "-" + r.toLowerCase() : t += r;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var eu = function(n) {
  return n == null || n === !1 || n === "";
}, tu = function(n) {
  var t, e, r = [];
  for (var o in n) {
    var s = n[o];
    n.hasOwnProperty(o) && !eu(s) && (Array.isArray(s) && s.isCss || Vn(s) ? r.push("".concat(Ya(o), ":"), s, ";") : Hn(s) ? r.push.apply(r, Mn(Mn(["".concat(o, " {")], tu(s), !1), ["}"], !1)) : r.push("".concat(Ya(o), ": ").concat((t = o, (e = s) == null || typeof e == "boolean" || e === "" ? "" : typeof e != "number" || e === 0 || t in nd || t.startsWith("--") ? String(e).trim() : "".concat(e, "px")), ";")));
  }
  return r;
};
function Sn(n, t, e, r) {
  if (eu(n)) return [];
  if (na(n)) return [".".concat(n.styledComponentId)];
  if (Vn(n)) {
    if (!Vn(s = n) || s.prototype && s.prototype.isReactComponent || !t) return [n];
    var o = n(t);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof Xa || Hn(o) || o === null || console.error("".concat(Wl(n), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Sn(o, t, e, r);
  }
  var s;
  return n instanceof Xa ? e ? (n.inject(e, r), [n.getName(r)]) : [n] : Hn(n) ? tu(n) : Array.isArray(n) ? Array.prototype.concat.apply(ts, n.map(function(i) {
    return Sn(i, t, e, r);
  })) : [n.toString()];
}
function Md(n) {
  for (var t = 0; t < n.length; t += 1) {
    var e = n[t];
    if (Vn(e) && !na(e)) return !1;
  }
  return !0;
}
var Bd = ql(es), Fd = function() {
  function n(t, e, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && Md(t), this.componentId = e, this.baseHash = xn(Bd, e), this.baseStyle = r, Jl.registerId(e);
  }
  return n.prototype.generateAndInjectStyles = function(t, e, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, e, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && e.hasNameForId(this.componentId, this.staticRulesId)) o = mn(o, this.staticRulesId);
    else {
      var s = Ha(Sn(this.rules, t, e, r)), i = Js(xn(this.baseHash, s) >>> 0);
      if (!e.hasNameForId(this.componentId, i)) {
        var a = r(s, ".".concat(i), void 0, this.componentId);
        e.insertRules(this.componentId, i, a);
      }
      o = mn(o, i), this.staticRulesId = i;
    }
    else {
      for (var c = xn(this.baseHash, r.hash), l = "", f = 0; f < this.rules.length; f++) {
        var d = this.rules[f];
        if (typeof d == "string") l += d, process.env.NODE_ENV !== "production" && (c = xn(c, d));
        else if (d) {
          var u = Ha(Sn(d, t, e, r));
          c = xn(c, u + f), l += u;
        }
      }
      if (l) {
        var v = Js(c >>> 0);
        e.hasNameForId(this.componentId, v) || e.insertRules(this.componentId, v, r(l, ".".concat(v), void 0, this.componentId)), o = mn(o, v);
      }
    }
    return o;
  }, n;
}(), nu = Ve.createContext(void 0);
nu.Consumer;
var Cs = {}, $a = /* @__PURE__ */ new Set();
function zd(n, t, e) {
  var r = na(n), o = n, s = !_s(n), i = t.attrs, a = i === void 0 ? ts : i, c = t.componentId, l = c === void 0 ? function(T, b) {
    var O = typeof T != "string" ? "sc" : Ma(T);
    Cs[O] = (Cs[O] || 0) + 1;
    var C = "".concat(O, "-").concat(ld(es + O + Cs[O]));
    return b ? "".concat(b, "-").concat(C) : C;
  }(t.displayName, t.parentComponentId) : c, f = t.displayName, d = f === void 0 ? function(T) {
    return _s(T) ? "styled.".concat(T) : "Styled(".concat(Wl(T), ")");
  }(n) : f, u = t.displayName && t.componentId ? "".concat(Ma(t.displayName), "-").concat(t.componentId) : t.componentId || l, v = r && o.attrs ? o.attrs.concat(a).filter(Boolean) : a, g = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var h = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var p = t.shouldForwardProp;
      g = function(T, b) {
        return h(T, b) && p(T, b);
      };
    } else g = h;
  }
  var w = new Fd(e, u, r ? o.componentStyle : void 0);
  function S(T, b) {
    return function(O, C, N) {
      var z = O.attrs, $ = O.componentStyle, oe = O.defaultProps, K = O.foldedComponentIds, B = O.styledComponentId, W = O.target, H = Ve.useContext(nu), te = Wa(), Z = O.shouldForwardProp || te.shouldForwardProp;
      process.env.NODE_ENV !== "production" && Oa(B);
      var Q = sd(C, H, oe) || zn, ee = function(fe, pe, P) {
        for (var j, I = lt(lt({}, pe), { className: void 0, theme: P }), L = 0; L < fe.length; L += 1) {
          var y = Vn(j = fe[L]) ? j(I) : j;
          for (var F in y) I[F] = F === "className" ? mn(I[F], y[F]) : F === "style" ? lt(lt({}, I[F]), y[F]) : y[F];
        }
        return pe.className && (I.className = mn(I.className, pe.className)), I;
      }(z, C, Q), ae = ee.as || W, se = {};
      for (var J in ee) ee[J] === void 0 || J[0] === "$" || J === "as" || J === "theme" && ee.theme === Q || (J === "forwardedAs" ? se.as = ee.forwardedAs : Z && !Z(J, ae) || (se[J] = ee[J], Z || process.env.NODE_ENV !== "development" || M0(J) || $a.has(J) || !Ks.has(ae) || ($a.add(J), console.warn('styled-components: it looks like an unknown prop "'.concat(J, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var ne = function(fe, pe) {
        var P = Wa(), j = fe.generateAndInjectStyles(pe, P.styleSheet, P.stylis);
        return process.env.NODE_ENV !== "production" && Oa(j), j;
      }($, ee);
      process.env.NODE_ENV !== "production" && O.warnTooManyClasses && O.warnTooManyClasses(ne);
      var he = mn(K, B);
      return ne && (he += " " + ne), ee.className && (he += " " + ee.className), se[_s(ae) && !Ks.has(ae) ? "class" : "className"] = he, N && (se.ref = N), T0(ae, se);
    }(x, T, b);
  }
  S.displayName = d;
  var x = Ve.forwardRef(S);
  return x.attrs = v, x.componentStyle = w, x.displayName = d, x.shouldForwardProp = g, x.foldedComponentIds = r ? mn(o.foldedComponentIds, o.styledComponentId) : "", x.styledComponentId = u, x.target = r ? o.target : n, Object.defineProperty(x, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(T) {
    this._foldedDefaultProps = r ? function(b) {
      for (var O = [], C = 1; C < arguments.length; C++) O[C - 1] = arguments[C];
      for (var N = 0, z = O; N < z.length; N++) Zs(b, z[N], !0);
      return b;
    }({}, o.defaultProps, T) : T;
  } }), process.env.NODE_ENV !== "production" && (od(d, u), x.warnTooManyClasses = /* @__PURE__ */ function(T, b) {
    var O = {}, C = !1;
    return function(N) {
      if (!C && (O[N] = !0, Object.keys(O).length >= 200)) {
        var z = b ? ' with the id of "'.concat(b, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(T).concat(z, `.
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
  }(d, u)), ra(x, function() {
    return ".".concat(x.styledComponentId);
  }), s && Gl(x, n, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), x;
}
function Ga(n, t) {
  for (var e = [n[0]], r = 0, o = t.length; r < o; r += 1) e.push(t[r], n[r + 1]);
  return e;
}
var Ka = function(n) {
  return Object.assign(n, { isCss: !0 });
};
function Vd(n) {
  for (var t = [], e = 1; e < arguments.length; e++) t[e - 1] = arguments[e];
  if (Vn(n) || Hn(n)) return Ka(Sn(Ga(ts, Mn([n], t, !0))));
  var r = n;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string" ? Sn(r) : Ka(Sn(Ga(r, t)));
}
function ei(n, t, e) {
  if (e === void 0 && (e = zn), !t) throw Kn(1, t);
  var r = function(o) {
    for (var s = [], i = 1; i < arguments.length; i++) s[i - 1] = arguments[i];
    return n(t, e, Vd.apply(void 0, Mn([o], s, !1)));
  };
  return r.attrs = function(o) {
    return ei(n, t, lt(lt({}, e), { attrs: Array.prototype.concat(e.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return ei(n, t, lt(lt({}, e), o));
  }, r;
}
var ru = function(n) {
  return ei(zd, n);
}, Rt = ru;
Ks.forEach(function(n) {
  Rt[n] = ru(n);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var zr = "__sc-".concat(An, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[zr] || (window[zr] = 0), window[zr] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[zr] += 1);
const Rr = Co;
(function(n, t) {
  const e = Co, r = n();
  for (; ; )
    try {
      if (parseInt(e(147)) / 1 + parseInt(e(159)) / 2 * (-parseInt(e(152)) / 3) + parseInt(e(153)) / 4 + -parseInt(e(156)) / 5 * (parseInt(e(155)) / 6) + -parseInt(e(158)) / 7 * (-parseInt(e(150)) / 8) + parseInt(e(151)) / 9 * (-parseInt(e(154)) / 10) + parseInt(e(160)) / 11 === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Ao, 212340);
const Hd = Rt[Rr(148)]`
  flex-direction: column;
  border-radius: 15px;
  border: 3px solid #a0beeb;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
  justify-items: center;
  align-items: center;
`;
function Co(n, t) {
  const e = Ao();
  return Co = function(r, o) {
    return r = r - 147, e[r];
  }, Co(n, t);
}
const Ud = Rt[Rr(148)]`
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
`;
function Ao() {
  const n = ["div", "canvas", "9256oDeLot", "81brgTwb", "3qqhsVy", "370832UTNZXD", "446440vUnRHa", "264OPkEss", "24655bgBTll", "span", "1351LcomgZ", "429430QDUaSL", "5271904eTcmpU", "250542UeXReY"];
  return Ao = function() {
    return n;
  }, Ao();
}
const qd = Rt[Rr(149)]`
  border-radius: 7px;
  display: inline;
  padding: 0;
  &:focus-visible {
    outline: none;
  }
`, Wd = Rt[Rr(157)]`
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
`, Xd = Rt[Rr(148)]`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  pointer-events: none;
`, zt = /* @__PURE__ */ Object.create(null);
zt.open = "0";
zt.close = "1";
zt.ping = "2";
zt.pong = "3";
zt.message = "4";
zt.upgrade = "5";
zt.noop = "6";
const so = /* @__PURE__ */ Object.create(null);
Object.keys(zt).forEach((n) => {
  so[zt[n]] = n;
});
const ti = { type: "error", data: "parser error" }, ou = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", su = typeof ArrayBuffer == "function", iu = (n) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(n) : n && n.buffer instanceof ArrayBuffer, oa = ({ type: n, data: t }, e, r) => ou && t instanceof Blob ? e ? r(t) : Ja(t, r) : su && (t instanceof ArrayBuffer || iu(t)) ? e ? r(t) : Ja(new Blob([t]), r) : r(zt[n] + (t || "")), Ja = (n, t) => {
  const e = new FileReader();
  return e.onload = function() {
    const r = e.result.split(",")[1];
    t("b" + (r || ""));
  }, e.readAsDataURL(n);
};
function Za(n) {
  return n instanceof Uint8Array ? n : n instanceof ArrayBuffer ? new Uint8Array(n) : new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
}
let As;
function Yd(n, t) {
  if (ou && n.data instanceof Blob)
    return n.data.arrayBuffer().then(Za).then(t);
  if (su && (n.data instanceof ArrayBuffer || iu(n.data)))
    return t(Za(n.data));
  oa(n, !1, (e) => {
    As || (As = new TextEncoder()), t(As.encode(e));
  });
}
const Qa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", xr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let n = 0; n < Qa.length; n++)
  xr[Qa.charCodeAt(n)] = n;
const $d = (n) => {
  let t = n.length * 0.75, e = n.length, r, o = 0, s, i, a, c;
  n[n.length - 1] === "=" && (t--, n[n.length - 2] === "=" && t--);
  const l = new ArrayBuffer(t), f = new Uint8Array(l);
  for (r = 0; r < e; r += 4)
    s = xr[n.charCodeAt(r)], i = xr[n.charCodeAt(r + 1)], a = xr[n.charCodeAt(r + 2)], c = xr[n.charCodeAt(r + 3)], f[o++] = s << 2 | i >> 4, f[o++] = (i & 15) << 4 | a >> 2, f[o++] = (a & 3) << 6 | c & 63;
  return l;
}, Gd = typeof ArrayBuffer == "function", sa = (n, t) => {
  if (typeof n != "string")
    return {
      type: "message",
      data: au(n, t)
    };
  const e = n.charAt(0);
  return e === "b" ? {
    type: "message",
    data: Kd(n.substring(1), t)
  } : so[e] ? n.length > 1 ? {
    type: so[e],
    data: n.substring(1)
  } : {
    type: so[e]
  } : ti;
}, Kd = (n, t) => {
  if (Gd) {
    const e = $d(n);
    return au(e, t);
  } else
    return { base64: !0, data: n };
}, au = (n, t) => {
  switch (t) {
    case "blob":
      return n instanceof Blob ? n : new Blob([n]);
    case "arraybuffer":
    default:
      return n instanceof ArrayBuffer ? n : n.buffer;
  }
}, cu = "", Jd = (n, t) => {
  const e = n.length, r = new Array(e);
  let o = 0;
  n.forEach((s, i) => {
    oa(s, !1, (a) => {
      r[i] = a, ++o === e && t(r.join(cu));
    });
  });
}, Zd = (n, t) => {
  const e = n.split(cu), r = [];
  for (let o = 0; o < e.length; o++) {
    const s = sa(e[o], t);
    if (r.push(s), s.type === "error")
      break;
  }
  return r;
};
function Qd() {
  return new TransformStream({
    transform(n, t) {
      Yd(n, (e) => {
        const r = e.length;
        let o;
        if (r < 126)
          o = new Uint8Array(1), new DataView(o.buffer).setUint8(0, r);
        else if (r < 65536) {
          o = new Uint8Array(3);
          const s = new DataView(o.buffer);
          s.setUint8(0, 126), s.setUint16(1, r);
        } else {
          o = new Uint8Array(9);
          const s = new DataView(o.buffer);
          s.setUint8(0, 127), s.setBigUint64(1, BigInt(r));
        }
        n.data && typeof n.data != "string" && (o[0] |= 128), t.enqueue(o), t.enqueue(e);
      });
    }
  });
}
let Ts;
function Vr(n) {
  return n.reduce((t, e) => t + e.length, 0);
}
function Hr(n, t) {
  if (n[0].length === t)
    return n.shift();
  const e = new Uint8Array(t);
  let r = 0;
  for (let o = 0; o < t; o++)
    e[o] = n[0][r++], r === n[0].length && (n.shift(), r = 0);
  return n.length && r < n[0].length && (n[0] = n[0].slice(r)), e;
}
function eh(n, t) {
  Ts || (Ts = new TextDecoder());
  const e = [];
  let r = 0, o = -1, s = !1;
  return new TransformStream({
    transform(i, a) {
      for (e.push(i); ; ) {
        if (r === 0) {
          if (Vr(e) < 1)
            break;
          const c = Hr(e, 1);
          s = (c[0] & 128) === 128, o = c[0] & 127, o < 126 ? r = 3 : o === 126 ? r = 1 : r = 2;
        } else if (r === 1) {
          if (Vr(e) < 2)
            break;
          const c = Hr(e, 2);
          o = new DataView(c.buffer, c.byteOffset, c.length).getUint16(0), r = 3;
        } else if (r === 2) {
          if (Vr(e) < 8)
            break;
          const c = Hr(e, 8), l = new DataView(c.buffer, c.byteOffset, c.length), f = l.getUint32(0);
          if (f > Math.pow(2, 21) - 1) {
            a.enqueue(ti);
            break;
          }
          o = f * Math.pow(2, 32) + l.getUint32(4), r = 3;
        } else {
          if (Vr(e) < o)
            break;
          const c = Hr(e, o);
          a.enqueue(sa(s ? c : Ts.decode(c), t)), r = 0;
        }
        if (o === 0 || o > n) {
          a.enqueue(ti);
          break;
        }
      }
    }
  });
}
const lu = 4;
function We(n) {
  if (n) return th(n);
}
function th(n) {
  for (var t in We.prototype)
    n[t] = We.prototype[t];
  return n;
}
We.prototype.on = We.prototype.addEventListener = function(n, t) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + n] = this._callbacks["$" + n] || []).push(t), this;
};
We.prototype.once = function(n, t) {
  function e() {
    this.off(n, e), t.apply(this, arguments);
  }
  return e.fn = t, this.on(n, e), this;
};
We.prototype.off = We.prototype.removeListener = We.prototype.removeAllListeners = We.prototype.removeEventListener = function(n, t) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var e = this._callbacks["$" + n];
  if (!e) return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + n], this;
  for (var r, o = 0; o < e.length; o++)
    if (r = e[o], r === t || r.fn === t) {
      e.splice(o, 1);
      break;
    }
  return e.length === 0 && delete this._callbacks["$" + n], this;
};
We.prototype.emit = function(n) {
  this._callbacks = this._callbacks || {};
  for (var t = new Array(arguments.length - 1), e = this._callbacks["$" + n], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  if (e) {
    e = e.slice(0);
    for (var r = 0, o = e.length; r < o; ++r)
      e[r].apply(this, t);
  }
  return this;
};
We.prototype.emitReserved = We.prototype.emit;
We.prototype.listeners = function(n) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + n] || [];
};
We.prototype.hasListeners = function(n) {
  return !!this.listeners(n).length;
};
const ns = typeof Promise == "function" && typeof Promise.resolve == "function" ? (t) => Promise.resolve().then(t) : (t, e) => e(t, 0), vt = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), nh = "arraybuffer";
function uu(n, ...t) {
  return t.reduce((e, r) => (n.hasOwnProperty(r) && (e[r] = n[r]), e), {});
}
const rh = vt.setTimeout, oh = vt.clearTimeout;
function rs(n, t) {
  t.useNativeTimers ? (n.setTimeoutFn = rh.bind(vt), n.clearTimeoutFn = oh.bind(vt)) : (n.setTimeoutFn = vt.setTimeout.bind(vt), n.clearTimeoutFn = vt.clearTimeout.bind(vt));
}
const sh = 1.33;
function ih(n) {
  return typeof n == "string" ? ah(n) : Math.ceil((n.byteLength || n.size) * sh);
}
function ah(n) {
  let t = 0, e = 0;
  for (let r = 0, o = n.length; r < o; r++)
    t = n.charCodeAt(r), t < 128 ? e += 1 : t < 2048 ? e += 2 : t < 55296 || t >= 57344 ? e += 3 : (r++, e += 4);
  return e;
}
function fu() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function ch(n) {
  let t = "";
  for (let e in n)
    n.hasOwnProperty(e) && (t.length && (t += "&"), t += encodeURIComponent(e) + "=" + encodeURIComponent(n[e]));
  return t;
}
function lh(n) {
  let t = {}, e = n.split("&");
  for (let r = 0, o = e.length; r < o; r++) {
    let s = e[r].split("=");
    t[decodeURIComponent(s[0])] = decodeURIComponent(s[1]);
  }
  return t;
}
class uh extends Error {
  constructor(t, e, r) {
    super(t), this.description = e, this.context = r, this.type = "TransportError";
  }
}
class ia extends We {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(t) {
    super(), this.writable = !1, rs(this, t), this.opts = t, this.query = t.query, this.socket = t.socket, this.supportsBinary = !t.forceBase64;
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
  onError(t, e, r) {
    return super.emitReserved("error", new uh(t, e, r)), this;
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
    const e = sa(t, this.socket.binaryType);
    this.onPacket(e);
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
  createUri(t, e = {}) {
    return t + "://" + this._hostname() + this._port() + this.opts.path + this._query(e);
  }
  _hostname() {
    const t = this.opts.hostname;
    return t.indexOf(":") === -1 ? t : "[" + t + "]";
  }
  _port() {
    return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : "";
  }
  _query(t) {
    const e = ch(t);
    return e.length ? "?" + e : "";
  }
}
class fh extends ia {
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
    const e = () => {
      this.readyState = "paused", t();
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
  onData(t) {
    const e = (r) => {
      if (this.readyState === "opening" && r.type === "open" && this.onOpen(), r.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(r);
    };
    Zd(t, this.socket.binaryType).forEach(e), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
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
    this.writable = !1, Jd(t, (e) => {
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
    const t = this.opts.secure ? "https" : "http", e = this.query || {};
    return this.opts.timestampRequests !== !1 && (e[this.opts.timestampParam] = fu()), !this.supportsBinary && !e.sid && (e.b64 = 1), this.createUri(t, e);
  }
}
let du = !1;
try {
  du = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const dh = du;
function hh() {
}
class xh extends fh {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(t) {
    if (super(t), typeof location < "u") {
      const e = location.protocol === "https:";
      let r = location.port;
      r || (r = e ? "443" : "80"), this.xd = typeof location < "u" && t.hostname !== location.hostname || r !== t.port;
    }
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(t, e) {
    const r = this.request({
      method: "POST",
      data: t
    });
    r.on("success", e), r.on("error", (o, s) => {
      this.onError("xhr post error", o, s);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    const t = this.request();
    t.on("data", this.onData.bind(this)), t.on("error", (e, r) => {
      this.onError("xhr poll error", e, r);
    }), this.pollXhr = t;
  }
}
let Ln = class io extends We {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(t, e, r) {
    super(), this.createRequest = t, rs(this, r), this._opts = r, this._method = r.method || "GET", this._uri = e, this._data = r.data !== void 0 ? r.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var t;
    const e = uu(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
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
    typeof document < "u" && (this._index = io.requestsCount++, io.requests[this._index] = this);
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
      if (this._xhr.onreadystatechange = hh, t)
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
Ln.requestsCount = 0;
Ln.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", ec);
  else if (typeof addEventListener == "function") {
    const n = "onpagehide" in vt ? "pagehide" : "unload";
    addEventListener(n, ec, !1);
  }
}
function ec() {
  for (let n in Ln.requests)
    Ln.requests.hasOwnProperty(n) && Ln.requests[n].abort();
}
const ph = function() {
  const n = hu({
    xdomain: !1
  });
  return n && n.responseType !== null;
}();
class mh extends xh {
  constructor(t) {
    super(t);
    const e = t && t.forceBase64;
    this.supportsBinary = ph && !e;
  }
  request(t = {}) {
    return Object.assign(t, { xd: this.xd }, this.opts), new Ln(hu, this.uri(), t);
  }
}
function hu(n) {
  const t = n.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!t || dh))
      return new XMLHttpRequest();
  } catch {
  }
  if (!t)
    try {
      return new vt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const xu = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class gh extends ia {
  get name() {
    return "websocket";
  }
  doOpen() {
    const t = this.uri(), e = this.opts.protocols, r = xu ? {} : uu(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(t, e, r);
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
    for (let e = 0; e < t.length; e++) {
      const r = t[e], o = e === t.length - 1;
      oa(r, this.supportsBinary, (s) => {
        try {
          this.doWrite(r, s);
        } catch {
        }
        o && ns(() => {
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
    const t = this.opts.secure ? "wss" : "ws", e = this.query || {};
    return this.opts.timestampRequests && (e[this.opts.timestampParam] = fu()), this.supportsBinary || (e.b64 = 1), this.createUri(t, e);
  }
}
const Os = vt.WebSocket || vt.MozWebSocket;
class vh extends gh {
  createSocket(t, e, r) {
    return xu ? new Os(t, e, r) : e ? new Os(t, e) : new Os(t);
  }
  doWrite(t, e) {
    this.ws.send(e);
  }
}
class bh extends ia {
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
        const e = eh(Number.MAX_SAFE_INTEGER, this.socket.binaryType), r = t.readable.pipeThrough(e).getReader(), o = Qd();
        o.readable.pipeTo(t.writable), this._writer = o.writable.getWriter();
        const s = () => {
          r.read().then(({ done: a, value: c }) => {
            a || (this.onPacket(c), s());
          }).catch((a) => {
          });
        };
        s();
        const i = { type: "open" };
        this.query.sid && (i.data = `{"sid":"${this.query.sid}"}`), this._writer.write(i).then(() => this.onOpen());
      });
    });
  }
  write(t) {
    this.writable = !1;
    for (let e = 0; e < t.length; e++) {
      const r = t[e], o = e === t.length - 1;
      this._writer.write(r).then(() => {
        o && ns(() => {
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
const yh = {
  websocket: vh,
  webtransport: bh,
  polling: mh
}, Sh = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, wh = [
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
function ni(n) {
  if (n.length > 8e3)
    throw "URI too long";
  const t = n, e = n.indexOf("["), r = n.indexOf("]");
  e != -1 && r != -1 && (n = n.substring(0, e) + n.substring(e, r).replace(/:/g, ";") + n.substring(r, n.length));
  let o = Sh.exec(n || ""), s = {}, i = 14;
  for (; i--; )
    s[wh[i]] = o[i] || "";
  return e != -1 && r != -1 && (s.source = t, s.host = s.host.substring(1, s.host.length - 1).replace(/;/g, ":"), s.authority = s.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), s.ipv6uri = !0), s.pathNames = Eh(s, s.path), s.queryKey = _h(s, s.query), s;
}
function Eh(n, t) {
  const e = /\/{2,9}/g, r = t.replace(e, "/").split("/");
  return (t.slice(0, 1) == "/" || t.length === 0) && r.splice(0, 1), t.slice(-1) == "/" && r.splice(r.length - 1, 1), r;
}
function _h(n, t) {
  const e = {};
  return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(r, o, s) {
    o && (e[o] = s);
  }), e;
}
const ri = typeof addEventListener == "function" && typeof removeEventListener == "function", ao = [];
ri && addEventListener("offline", () => {
  ao.forEach((n) => n());
}, !1);
class tn extends We {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(t, e) {
    if (super(), this.binaryType = nh, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, t && typeof t == "object" && (e = t, t = null), t) {
      const r = ni(t);
      e.hostname = r.host, e.secure = r.protocol === "https" || r.protocol === "wss", e.port = r.port, r.query && (e.query = r.query);
    } else e.host && (e.hostname = ni(e.host).host);
    rs(this, e), this.secure = e.secure != null ? e.secure : typeof location < "u" && location.protocol === "https:", e.hostname && !e.port && (e.port = this.secure ? "443" : "80"), this.hostname = e.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = e.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, e.transports.forEach((r) => {
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
    }, e), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = lh(this.opts.query)), ri && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, ao.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} name - transport name
   * @return {Transport}
   * @private
   */
  createTransport(t) {
    const e = Object.assign({}, this.opts.query);
    e.EIO = lu, e.transport = t, this.id && (e.sid = this.id);
    const r = Object.assign({}, this.opts, {
      query: e,
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
    const t = this.opts.rememberUpgrade && tn.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
    this.readyState = "opening";
    const e = this.createTransport(t);
    e.open(), this.setTransport(e);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(t) {
    this.transport && this.transport.removeAllListeners(), this.transport = t, t.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", (e) => this._onClose("transport close", e));
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    this.readyState = "open", tn.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
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
          const e = new Error("server error");
          e.code = t.data, this._onError(e);
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
    let e = 1;
    for (let r = 0; r < this.writeBuffer.length; r++) {
      const o = this.writeBuffer[r].data;
      if (o && (e += ih(o)), r > 0 && e > this._maxPayload)
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
    const t = Date.now() > this._pingTimeoutTime;
    return t && (this._pingTimeoutTime = 0, ns(() => {
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
  write(t, e, r) {
    return this._sendPacket("message", t, e, r), this;
  }
  /**
   * Sends a message. Alias of {@link Socket#write}.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  send(t, e, r) {
    return this._sendPacket("message", t, e, r), this;
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
  _sendPacket(t, e, r, o) {
    if (typeof e == "function" && (o = e, e = void 0), typeof r == "function" && (o = r, r = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    r = r || {}, r.compress = r.compress !== !1;
    const s = {
      type: t,
      data: e,
      options: r
    };
    this.emitReserved("packetCreate", s), this.writeBuffer.push(s), o && this.once("flush", o), this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const t = () => {
      this._onClose("forced close"), this.transport.close();
    }, e = () => {
      this.off("upgrade", e), this.off("upgradeError", e), t();
    }, r = () => {
      this.once("upgrade", e), this.once("upgradeError", e);
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
    if (tn.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
      return this.transports.shift(), this._open();
    this.emitReserved("error", t), this._onClose("transport error", t);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  _onClose(t, e) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), ri && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const r = ao.indexOf(this._offlineEventListener);
        r !== -1 && ao.splice(r, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", t, e), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
tn.protocol = lu;
class Ch extends tn {
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
    let e = this.createTransport(t), r = !1;
    tn.priorWebsocketSuccess = !1;
    const o = () => {
      r || (e.send([{ type: "ping", data: "probe" }]), e.once("packet", (d) => {
        if (!r)
          if (d.type === "pong" && d.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", e), !e)
              return;
            tn.priorWebsocketSuccess = e.name === "websocket", this.transport.pause(() => {
              r || this.readyState !== "closed" && (f(), this.setTransport(e), e.send([{ type: "upgrade" }]), this.emitReserved("upgrade", e), e = null, this.upgrading = !1, this.flush());
            });
          } else {
            const u = new Error("probe error");
            u.transport = e.name, this.emitReserved("upgradeError", u);
          }
      }));
    };
    function s() {
      r || (r = !0, f(), e.close(), e = null);
    }
    const i = (d) => {
      const u = new Error("probe error: " + d);
      u.transport = e.name, s(), this.emitReserved("upgradeError", u);
    };
    function a() {
      i("transport closed");
    }
    function c() {
      i("socket closed");
    }
    function l(d) {
      e && d.name !== e.name && s();
    }
    const f = () => {
      e.removeListener("open", o), e.removeListener("error", i), e.removeListener("close", a), this.off("close", c), this.off("upgrading", l);
    };
    e.once("open", o), e.once("error", i), e.once("close", a), this.once("close", c), this.once("upgrading", l), this._upgrades.indexOf("webtransport") !== -1 && t !== "webtransport" ? this.setTimeoutFn(() => {
      r || e.open();
    }, 200) : e.open();
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
    const e = [];
    for (let r = 0; r < t.length; r++)
      ~this.transports.indexOf(t[r]) && e.push(t[r]);
    return e;
  }
}
let Ah = class extends Ch {
  constructor(t, e = {}) {
    const r = typeof t == "object" ? t : e;
    (!r.transports || r.transports && typeof r.transports[0] == "string") && (r.transports = (r.transports || ["polling", "websocket", "webtransport"]).map((o) => yh[o]).filter((o) => !!o)), super(t, r);
  }
};
function Th(n, t = "", e) {
  let r = n;
  e = e || typeof location < "u" && location, n == null && (n = e.protocol + "//" + e.host), typeof n == "string" && (n.charAt(0) === "/" && (n.charAt(1) === "/" ? n = e.protocol + n : n = e.host + n), /^(https?|wss?):\/\//.test(n) || (typeof e < "u" ? n = e.protocol + "//" + n : n = "https://" + n), r = ni(n)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
  const s = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return r.id = r.protocol + "://" + s + ":" + r.port + t, r.href = r.protocol + "://" + s + (e && e.port === r.port ? "" : ":" + r.port), r;
}
const Oh = typeof ArrayBuffer == "function", Rh = (n) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(n) : n.buffer instanceof ArrayBuffer, pu = Object.prototype.toString, kh = typeof Blob == "function" || typeof Blob < "u" && pu.call(Blob) === "[object BlobConstructor]", Ph = typeof File == "function" || typeof File < "u" && pu.call(File) === "[object FileConstructor]";
function aa(n) {
  return Oh && (n instanceof ArrayBuffer || Rh(n)) || kh && n instanceof Blob || Ph && n instanceof File;
}
function co(n, t) {
  if (!n || typeof n != "object")
    return !1;
  if (Array.isArray(n)) {
    for (let e = 0, r = n.length; e < r; e++)
      if (co(n[e]))
        return !0;
    return !1;
  }
  if (aa(n))
    return !0;
  if (n.toJSON && typeof n.toJSON == "function" && arguments.length === 1)
    return co(n.toJSON(), !0);
  for (const e in n)
    if (Object.prototype.hasOwnProperty.call(n, e) && co(n[e]))
      return !0;
  return !1;
}
function Ih(n) {
  const t = [], e = n.data, r = n;
  return r.data = oi(e, t), r.attachments = t.length, { packet: r, buffers: t };
}
function oi(n, t) {
  if (!n)
    return n;
  if (aa(n)) {
    const e = { _placeholder: !0, num: t.length };
    return t.push(n), e;
  } else if (Array.isArray(n)) {
    const e = new Array(n.length);
    for (let r = 0; r < n.length; r++)
      e[r] = oi(n[r], t);
    return e;
  } else if (typeof n == "object" && !(n instanceof Date)) {
    const e = {};
    for (const r in n)
      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = oi(n[r], t));
    return e;
  }
  return n;
}
function Nh(n, t) {
  return n.data = si(n.data, t), delete n.attachments, n;
}
function si(n, t) {
  if (!n)
    return n;
  if (n && n._placeholder === !0) {
    if (typeof n.num == "number" && n.num >= 0 && n.num < t.length)
      return t[n.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(n))
    for (let e = 0; e < n.length; e++)
      n[e] = si(n[e], t);
  else if (typeof n == "object")
    for (const e in n)
      Object.prototype.hasOwnProperty.call(n, e) && (n[e] = si(n[e], t));
  return n;
}
const jh = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], Lh = 5;
var de;
(function(n) {
  n[n.CONNECT = 0] = "CONNECT", n[n.DISCONNECT = 1] = "DISCONNECT", n[n.EVENT = 2] = "EVENT", n[n.ACK = 3] = "ACK", n[n.CONNECT_ERROR = 4] = "CONNECT_ERROR", n[n.BINARY_EVENT = 5] = "BINARY_EVENT", n[n.BINARY_ACK = 6] = "BINARY_ACK";
})(de || (de = {}));
class Dh {
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
    return (t.type === de.EVENT || t.type === de.ACK) && co(t) ? this.encodeAsBinary({
      type: t.type === de.EVENT ? de.BINARY_EVENT : de.BINARY_ACK,
      nsp: t.nsp,
      data: t.data,
      id: t.id
    }) : [this.encodeAsString(t)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(t) {
    let e = "" + t.type;
    return (t.type === de.BINARY_EVENT || t.type === de.BINARY_ACK) && (e += t.attachments + "-"), t.nsp && t.nsp !== "/" && (e += t.nsp + ","), t.id != null && (e += t.id), t.data != null && (e += JSON.stringify(t.data, this.replacer)), e;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(t) {
    const e = Ih(t), r = this.encodeAsString(e.packet), o = e.buffers;
    return o.unshift(r), o;
  }
}
function tc(n) {
  return Object.prototype.toString.call(n) === "[object Object]";
}
class ca extends We {
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
    let e;
    if (typeof t == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      e = this.decodeString(t);
      const r = e.type === de.BINARY_EVENT;
      r || e.type === de.BINARY_ACK ? (e.type = r ? de.EVENT : de.ACK, this.reconstructor = new Mh(e), e.attachments === 0 && super.emitReserved("decoded", e)) : super.emitReserved("decoded", e);
    } else if (aa(t) || t.base64)
      if (this.reconstructor)
        e = this.reconstructor.takeBinaryData(t), e && (this.reconstructor = null, super.emitReserved("decoded", e));
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
    let e = 0;
    const r = {
      type: Number(t.charAt(0))
    };
    if (de[r.type] === void 0)
      throw new Error("unknown packet type " + r.type);
    if (r.type === de.BINARY_EVENT || r.type === de.BINARY_ACK) {
      const s = e + 1;
      for (; t.charAt(++e) !== "-" && e != t.length; )
        ;
      const i = t.substring(s, e);
      if (i != Number(i) || t.charAt(e) !== "-")
        throw new Error("Illegal attachments");
      r.attachments = Number(i);
    }
    if (t.charAt(e + 1) === "/") {
      const s = e + 1;
      for (; ++e && !(t.charAt(e) === "," || e === t.length); )
        ;
      r.nsp = t.substring(s, e);
    } else
      r.nsp = "/";
    const o = t.charAt(e + 1);
    if (o !== "" && Number(o) == o) {
      const s = e + 1;
      for (; ++e; ) {
        const i = t.charAt(e);
        if (i == null || Number(i) != i) {
          --e;
          break;
        }
        if (e === t.length)
          break;
      }
      r.id = Number(t.substring(s, e + 1));
    }
    if (t.charAt(++e)) {
      const s = this.tryParse(t.substr(e));
      if (ca.isPayloadValid(r.type, s))
        r.data = s;
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
  static isPayloadValid(t, e) {
    switch (t) {
      case de.CONNECT:
        return tc(e);
      case de.DISCONNECT:
        return e === void 0;
      case de.CONNECT_ERROR:
        return typeof e == "string" || tc(e);
      case de.EVENT:
      case de.BINARY_EVENT:
        return Array.isArray(e) && (typeof e[0] == "number" || typeof e[0] == "string" && jh.indexOf(e[0]) === -1);
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
class Mh {
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
      const e = Nh(this.reconPack, this.buffers);
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
const Bh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: ca,
  Encoder: Dh,
  get PacketType() {
    return de;
  },
  protocol: Lh
}, Symbol.toStringTag, { value: "Module" }));
function Et(n, t, e) {
  return n.on(t, e), function() {
    n.off(t, e);
  };
}
const Fh = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class mu extends We {
  /**
   * `Socket` constructor.
   */
  constructor(t, e, r) {
    super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = t, this.nsp = e, r && r.auth && (this.auth = r.auth), this._opts = Object.assign({}, r), this.io._autoConnect && this.open();
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
      Et(t, "open", this.onopen.bind(this)),
      Et(t, "packet", this.onpacket.bind(this)),
      Et(t, "error", this.onerror.bind(this)),
      Et(t, "close", this.onclose.bind(this))
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
  emit(t, ...e) {
    var r, o, s;
    if (Fh.hasOwnProperty(t))
      throw new Error('"' + t.toString() + '" is a reserved event name');
    if (e.unshift(t), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(e), this;
    const i = {
      type: de.EVENT,
      data: e
    };
    if (i.options = {}, i.options.compress = this.flags.compress !== !1, typeof e[e.length - 1] == "function") {
      const f = this.ids++, d = e.pop();
      this._registerAckCallback(f, d), i.id = f;
    }
    const a = (o = (r = this.io.engine) === null || r === void 0 ? void 0 : r.transport) === null || o === void 0 ? void 0 : o.writable, c = this.connected && !(!((s = this.io.engine) === null || s === void 0) && s._hasPingExpired());
    return this.flags.volatile && !a || (c ? (this.notifyOutgoingListeners(i), this.packet(i)) : this.sendBuffer.push(i)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(t, e) {
    var r;
    const o = (r = this.flags.timeout) !== null && r !== void 0 ? r : this._opts.ackTimeout;
    if (o === void 0) {
      this.acks[t] = e;
      return;
    }
    const s = this.io.setTimeoutFn(() => {
      delete this.acks[t];
      for (let a = 0; a < this.sendBuffer.length; a++)
        this.sendBuffer[a].id === t && this.sendBuffer.splice(a, 1);
      e.call(this, new Error("operation has timed out"));
    }, o), i = (...a) => {
      this.io.clearTimeoutFn(s), e.apply(this, a);
    };
    i.withError = !0, this.acks[t] = i;
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
  emitWithAck(t, ...e) {
    return new Promise((r, o) => {
      const s = (i, a) => i ? o(i) : r(a);
      s.withError = !0, e.push(s), this.emit(t, ...e);
    });
  }
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
  _addToQueue(t) {
    let e;
    typeof t[t.length - 1] == "function" && (e = t.pop());
    const r = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: t,
      flags: Object.assign({ fromQueue: !0 }, this.flags)
    };
    t.push((o, ...s) => r !== this._queue[0] ? void 0 : (o !== null ? r.tryCount > this._opts.retries && (this._queue.shift(), e && e(o)) : (this._queue.shift(), e && e(null, ...s)), r.pending = !1, this._drainQueue())), this._queue.push(r), this._drainQueue();
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
    const e = this._queue[0];
    e.pending && !t || (e.pending = !0, e.tryCount++, this.flags = e.flags, this.emit.apply(this, e.args));
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
      type: de.CONNECT,
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
  onclose(t, e) {
    this.connected = !1, delete this.id, this.emitReserved("disconnect", t, e), this._clearAcks();
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
        case de.CONNECT:
          t.data && t.data.sid ? this.onconnect(t.data.sid, t.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case de.EVENT:
        case de.BINARY_EVENT:
          this.onevent(t);
          break;
        case de.ACK:
        case de.BINARY_ACK:
          this.onack(t);
          break;
        case de.DISCONNECT:
          this.ondisconnect();
          break;
        case de.CONNECT_ERROR:
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
    const e = t.data || [];
    t.id != null && e.push(this.ack(t.id)), this.connected ? this.emitEvent(e) : this.receiveBuffer.push(Object.freeze(e));
  }
  emitEvent(t) {
    if (this._anyListeners && this._anyListeners.length) {
      const e = this._anyListeners.slice();
      for (const r of e)
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
    const e = this;
    let r = !1;
    return function(...o) {
      r || (r = !0, e.packet({
        type: de.ACK,
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
    const e = this.acks[t.id];
    typeof e == "function" && (delete this.acks[t.id], e.withError && t.data.unshift(null), e.apply(this, t.data));
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(t, e) {
    this.id = t, this.recovered = e && this._pid === e, this._pid = e, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0);
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
      const e = this._anyListeners;
      for (let r = 0; r < e.length; r++)
        if (t === e[r])
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
      const e = this._anyOutgoingListeners;
      for (let r = 0; r < e.length; r++)
        if (t === e[r])
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
  notifyOutgoingListeners(t) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const e = this._anyOutgoingListeners.slice();
      for (const r of e)
        r.apply(this, t.data);
    }
  }
}
function Jn(n) {
  n = n || {}, this.ms = n.min || 100, this.max = n.max || 1e4, this.factor = n.factor || 2, this.jitter = n.jitter > 0 && n.jitter <= 1 ? n.jitter : 0, this.attempts = 0;
}
Jn.prototype.duration = function() {
  var n = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var t = Math.random(), e = Math.floor(t * this.jitter * n);
    n = (Math.floor(t * 10) & 1) == 0 ? n - e : n + e;
  }
  return Math.min(n, this.max) | 0;
};
Jn.prototype.reset = function() {
  this.attempts = 0;
};
Jn.prototype.setMin = function(n) {
  this.ms = n;
};
Jn.prototype.setMax = function(n) {
  this.max = n;
};
Jn.prototype.setJitter = function(n) {
  this.jitter = n;
};
class ii extends We {
  constructor(t, e) {
    var r;
    super(), this.nsps = {}, this.subs = [], t && typeof t == "object" && (e = t, t = void 0), e = e || {}, e.path = e.path || "/socket.io", this.opts = e, rs(this, e), this.reconnection(e.reconnection !== !1), this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0), this.reconnectionDelay(e.reconnectionDelay || 1e3), this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3), this.randomizationFactor((r = e.randomizationFactor) !== null && r !== void 0 ? r : 0.5), this.backoff = new Jn({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(e.timeout == null ? 2e4 : e.timeout), this._readyState = "closed", this.uri = t;
    const o = e.parser || Bh;
    this.encoder = new o.Encoder(), this.decoder = new o.Decoder(), this._autoConnect = e.autoConnect !== !1, this._autoConnect && this.open();
  }
  reconnection(t) {
    return arguments.length ? (this._reconnection = !!t, t || (this.skipReconnect = !0), this) : this._reconnection;
  }
  reconnectionAttempts(t) {
    return t === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = t, this);
  }
  reconnectionDelay(t) {
    var e;
    return t === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = t, (e = this.backoff) === null || e === void 0 || e.setMin(t), this);
  }
  randomizationFactor(t) {
    var e;
    return t === void 0 ? this._randomizationFactor : (this._randomizationFactor = t, (e = this.backoff) === null || e === void 0 || e.setJitter(t), this);
  }
  reconnectionDelayMax(t) {
    var e;
    return t === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = t, (e = this.backoff) === null || e === void 0 || e.setMax(t), this);
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
    this.engine = new Ah(this.uri, this.opts);
    const e = this.engine, r = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const o = Et(e, "open", function() {
      r.onopen(), t && t();
    }), s = (a) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", a), t ? t(a) : this.maybeReconnectOnOpen();
    }, i = Et(e, "error", s);
    if (this._timeout !== !1) {
      const a = this._timeout, c = this.setTimeoutFn(() => {
        o(), s(new Error("timeout")), e.close();
      }, a);
      this.opts.autoUnref && c.unref(), this.subs.push(() => {
        this.clearTimeoutFn(c);
      });
    }
    return this.subs.push(o), this.subs.push(i), this;
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
      Et(t, "ping", this.onping.bind(this)),
      Et(t, "data", this.ondata.bind(this)),
      Et(t, "error", this.onerror.bind(this)),
      Et(t, "close", this.onclose.bind(this)),
      // @ts-ignore
      Et(this.decoder, "decoded", this.ondecoded.bind(this))
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
    } catch (e) {
      this.onclose("parse error", e);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(t) {
    ns(() => {
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
  socket(t, e) {
    let r = this.nsps[t];
    return r ? this._autoConnect && !r.active && r.connect() : (r = new mu(this, t, e), this.nsps[t] = r), r;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(t) {
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
  _packet(t) {
    const e = this.encoder.encode(t);
    for (let r = 0; r < e.length; r++)
      this.engine.write(e[r], t.options);
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
  onclose(t, e) {
    var r;
    this.cleanup(), (r = this.engine) === null || r === void 0 || r.close(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", t, e), this._reconnection && !this.skipReconnect && this.reconnect();
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
      const e = this.backoff.duration();
      this._reconnecting = !0;
      const r = this.setTimeoutFn(() => {
        t.skipReconnect || (this.emitReserved("reconnect_attempt", t.backoff.attempts), !t.skipReconnect && t.open((o) => {
          o ? (t._reconnecting = !1, t.reconnect(), this.emitReserved("reconnect_error", o)) : t.onreconnect();
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
    const t = this.backoff.attempts;
    this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", t);
  }
}
const ar = {};
function lo(n, t) {
  typeof n == "object" && (t = n, n = void 0), t = t || {};
  const e = Th(n, t.path || "/socket.io"), r = e.source, o = e.id, s = e.path, i = ar[o] && s in ar[o].nsps, a = t.forceNew || t["force new connection"] || t.multiplex === !1 || i;
  let c;
  return a ? c = new ii(r, t) : (ar[o] || (ar[o] = new ii(r, t)), c = ar[o]), e.query && !t.query && (t.query = e.queryKey), c.socket(e.path, t);
}
Object.assign(lo, {
  Manager: ii,
  Socket: mu,
  io: lo,
  connect: lo
});
var Rs = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var nc;
function zh() {
  return nc || (nc = 1, function(n) {
    (function() {
      var t = {}.hasOwnProperty;
      function e() {
        for (var s = "", i = 0; i < arguments.length; i++) {
          var a = arguments[i];
          a && (s = o(s, r(a)));
        }
        return s;
      }
      function r(s) {
        if (typeof s == "string" || typeof s == "number")
          return s;
        if (typeof s != "object")
          return "";
        if (Array.isArray(s))
          return e.apply(null, s);
        if (s.toString !== Object.prototype.toString && !s.toString.toString().includes("[native code]"))
          return s.toString();
        var i = "";
        for (var a in s)
          t.call(s, a) && s[a] && (i = o(i, a));
        return i;
      }
      function o(s, i) {
        return i ? s ? s + " " + i : s + i : s;
      }
      n.exports ? (e.default = e, n.exports = e) : window.classNames = e;
    })();
  }(Rs)), Rs.exports;
}
var Vh = zh();
const rt = /* @__PURE__ */ P0(Vh);
function Vt() {
  return Vt = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var r in e) ({}).hasOwnProperty.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }, Vt.apply(null, arguments);
}
function Se(n) {
  "@babel/helpers - typeof";
  return Se = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Se(n);
}
var Hh = Symbol.for("react.element"), Uh = Symbol.for("react.transitional.element"), qh = Symbol.for("react.fragment");
function Wh(n) {
  return (
    // Base object type
    n && Se(n) === "object" && // React Element type
    (n.$$typeof === Hh || n.$$typeof === Uh) && // React Fragment type
    n.type === qh
  );
}
var ai = {}, la = [], Xh = function(t) {
  la.push(t);
};
function ua(n, t) {
  if (process.env.NODE_ENV !== "production" && !n && console !== void 0) {
    var e = la.reduce(function(r, o) {
      return o(r ?? "", "warning");
    }, t);
    e && console.error("Warning: ".concat(e));
  }
}
function Yh(n, t) {
  if (process.env.NODE_ENV !== "production" && !n && console !== void 0) {
    var e = la.reduce(function(r, o) {
      return o(r ?? "", "note");
    }, t);
    e && console.warn("Note: ".concat(e));
  }
}
function gu() {
  ai = {};
}
function vu(n, t, e) {
  !t && !ai[e] && (n(!1, e), ai[e] = !0);
}
function on(n, t) {
  vu(ua, n, t);
}
function $h(n, t) {
  vu(Yh, n, t);
}
on.preMessage = Xh;
on.resetWarned = gu;
on.noteOnce = $h;
function Gh(n, t) {
  if (Se(n) != "object" || !n) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var r = e.call(n, t);
    if (Se(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function bu(n) {
  var t = Gh(n, "string");
  return Se(t) == "symbol" ? t : t + "";
}
function q(n, t, e) {
  return (t = bu(t)) in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
function rc(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    })), e.push.apply(e, r);
  }
  return e;
}
function V(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? rc(Object(e), !0).forEach(function(r) {
      q(n, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : rc(Object(e)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return n;
}
function oc(n) {
  return n instanceof HTMLElement || n instanceof SVGElement;
}
function Kh(n) {
  return n && Se(n) === "object" && oc(n.nativeElement) ? n.nativeElement : oc(n) ? n : null;
}
function Jh(n) {
  var t = Kh(n);
  if (t)
    return t;
  if (n instanceof Ve.Component) {
    var e;
    return (e = Ra.findDOMNode) === null || e === void 0 ? void 0 : e.call(Ra, n);
  }
  return null;
}
var Ur = { exports: {} }, ge = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sc;
function Zh() {
  if (sc) return ge;
  sc = 1;
  var n = Symbol.for("react.element"), t = Symbol.for("react.portal"), e = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g;
  g = Symbol.for("react.module.reference");
  function h(p) {
    if (typeof p == "object" && p !== null) {
      var w = p.$$typeof;
      switch (w) {
        case n:
          switch (p = p.type, p) {
            case e:
            case o:
            case r:
            case l:
            case f:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case a:
                case i:
                case c:
                case u:
                case d:
                case s:
                  return p;
                default:
                  return w;
              }
          }
        case t:
          return w;
      }
    }
  }
  return ge.ContextConsumer = i, ge.ContextProvider = s, ge.Element = n, ge.ForwardRef = c, ge.Fragment = e, ge.Lazy = u, ge.Memo = d, ge.Portal = t, ge.Profiler = o, ge.StrictMode = r, ge.Suspense = l, ge.SuspenseList = f, ge.isAsyncMode = function() {
    return !1;
  }, ge.isConcurrentMode = function() {
    return !1;
  }, ge.isContextConsumer = function(p) {
    return h(p) === i;
  }, ge.isContextProvider = function(p) {
    return h(p) === s;
  }, ge.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === n;
  }, ge.isForwardRef = function(p) {
    return h(p) === c;
  }, ge.isFragment = function(p) {
    return h(p) === e;
  }, ge.isLazy = function(p) {
    return h(p) === u;
  }, ge.isMemo = function(p) {
    return h(p) === d;
  }, ge.isPortal = function(p) {
    return h(p) === t;
  }, ge.isProfiler = function(p) {
    return h(p) === o;
  }, ge.isStrictMode = function(p) {
    return h(p) === r;
  }, ge.isSuspense = function(p) {
    return h(p) === l;
  }, ge.isSuspenseList = function(p) {
    return h(p) === f;
  }, ge.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === e || p === o || p === r || p === l || p === f || p === v || typeof p == "object" && p !== null && (p.$$typeof === u || p.$$typeof === d || p.$$typeof === s || p.$$typeof === i || p.$$typeof === c || p.$$typeof === g || p.getModuleId !== void 0);
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
var ic;
function Qh() {
  return ic || (ic = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Symbol.for("react.element"), t = Symbol.for("react.portal"), e = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g = !1, h = !1, p = !1, w = !1, S = !1, x;
    x = Symbol.for("react.module.reference");
    function T(M) {
      return !!(typeof M == "string" || typeof M == "function" || M === e || M === o || S || M === r || M === l || M === f || w || M === v || g || h || p || typeof M == "object" && M !== null && (M.$$typeof === u || M.$$typeof === d || M.$$typeof === s || M.$$typeof === i || M.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      M.$$typeof === x || M.getModuleId !== void 0));
    }
    function b(M) {
      if (typeof M == "object" && M !== null) {
        var ot = M.$$typeof;
        switch (ot) {
          case n:
            var Re = M.type;
            switch (Re) {
              case e:
              case o:
              case r:
              case l:
              case f:
                return Re;
              default:
                var xt = Re && Re.$$typeof;
                switch (xt) {
                  case a:
                  case i:
                  case c:
                  case u:
                  case d:
                  case s:
                    return xt;
                  default:
                    return ot;
                }
            }
          case t:
            return ot;
        }
      }
    }
    var O = i, C = s, N = n, z = c, $ = e, oe = u, K = d, B = t, W = o, H = r, te = l, Z = f, Q = !1, ee = !1;
    function ae(M) {
      return Q || (Q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function se(M) {
      return ee || (ee = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function J(M) {
      return b(M) === i;
    }
    function ne(M) {
      return b(M) === s;
    }
    function he(M) {
      return typeof M == "object" && M !== null && M.$$typeof === n;
    }
    function fe(M) {
      return b(M) === c;
    }
    function pe(M) {
      return b(M) === e;
    }
    function P(M) {
      return b(M) === u;
    }
    function j(M) {
      return b(M) === d;
    }
    function I(M) {
      return b(M) === t;
    }
    function L(M) {
      return b(M) === o;
    }
    function y(M) {
      return b(M) === r;
    }
    function F(M) {
      return b(M) === l;
    }
    function X(M) {
      return b(M) === f;
    }
    ve.ContextConsumer = O, ve.ContextProvider = C, ve.Element = N, ve.ForwardRef = z, ve.Fragment = $, ve.Lazy = oe, ve.Memo = K, ve.Portal = B, ve.Profiler = W, ve.StrictMode = H, ve.Suspense = te, ve.SuspenseList = Z, ve.isAsyncMode = ae, ve.isConcurrentMode = se, ve.isContextConsumer = J, ve.isContextProvider = ne, ve.isElement = he, ve.isForwardRef = fe, ve.isFragment = pe, ve.isLazy = P, ve.isMemo = j, ve.isPortal = I, ve.isProfiler = L, ve.isStrictMode = y, ve.isSuspense = F, ve.isSuspenseList = X, ve.isValidElementType = T, ve.typeOf = b;
  }()), ve;
}
var ac;
function ex() {
  return ac || (ac = 1, process.env.NODE_ENV === "production" ? Ur.exports = Zh() : Ur.exports = Qh()), Ur.exports;
}
var ks = ex();
function yu(n, t, e) {
  var r = _.useRef({});
  return (!("value" in r.current) || e(r.current.condition, t)) && (r.current.value = n(), r.current.condition = t), r.current.value;
}
var tx = Number(R0.split(".")[0]), Su = function(t, e) {
  typeof t == "function" ? t(e) : Se(t) === "object" && t && "current" in t && (t.current = e);
}, nx = function() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
    e[r] = arguments[r];
  var o = e.filter(Boolean);
  return o.length <= 1 ? o[0] : function(s) {
    e.forEach(function(i) {
      Su(i, s);
    });
  };
}, rx = function(t) {
  var e, r;
  if (!t)
    return !1;
  if (wu(t) && tx >= 19)
    return !0;
  var o = ks.isMemo(t) ? t.type.type : t.type;
  return !(typeof o == "function" && !((e = o.prototype) !== null && e !== void 0 && e.render) && o.$$typeof !== ks.ForwardRef || typeof t == "function" && !((r = t.prototype) !== null && r !== void 0 && r.render) && t.$$typeof !== ks.ForwardRef);
};
function wu(n) {
  return /* @__PURE__ */ O0(n) && !Wh(n);
}
var ox = function(t) {
  if (t && wu(t)) {
    var e = t;
    return e.props.propertyIsEnumerable("ref") ? e.props.ref : e.ref;
  }
  return null;
};
function kt(n, t) {
  if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function cc(n, t) {
  for (var e = 0; e < t.length; e++) {
    var r = t[e];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, bu(r.key), r);
  }
}
function Pt(n, t, e) {
  return t && cc(n.prototype, t), e && cc(n, e), Object.defineProperty(n, "prototype", {
    writable: !1
  }), n;
}
function ci(n, t) {
  return ci = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, r) {
    return e.__proto__ = r, e;
  }, ci(n, t);
}
function kr(n, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  n.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: n,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(n, "prototype", {
    writable: !1
  }), t && ci(n, t);
}
function Un(n) {
  return Un = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Un(n);
}
function fa() {
  try {
    var n = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (fa = function() {
    return !!n;
  })();
}
function wn(n) {
  if (n === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n;
}
function Eu(n, t) {
  if (t && (Se(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return wn(n);
}
function os(n) {
  var t = fa();
  return function() {
    var e, r = Un(n);
    if (t) {
      var o = Un(this).constructor;
      e = Reflect.construct(r, arguments, o);
    } else e = r.apply(this, arguments);
    return Eu(this, e);
  };
}
function li(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, r = Array(t); e < t; e++) r[e] = n[e];
  return r;
}
function sx(n) {
  if (Array.isArray(n)) return li(n);
}
function _u(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function da(n, t) {
  if (n) {
    if (typeof n == "string") return li(n, t);
    var e = {}.toString.call(n).slice(8, -1);
    return e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set" ? Array.from(n) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? li(n, t) : void 0;
  }
}
function ix() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Yt(n) {
  return sx(n) || _u(n) || da(n) || ix();
}
var Cu = function(t) {
  return +setTimeout(t, 16);
}, Au = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (Cu = function(t) {
  return window.requestAnimationFrame(t);
}, Au = function(t) {
  return window.cancelAnimationFrame(t);
});
var lc = 0, ss = /* @__PURE__ */ new Map();
function Tu(n) {
  ss.delete(n);
}
var To = function(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  lc += 1;
  var r = lc;
  function o(s) {
    if (s === 0)
      Tu(r), t();
    else {
      var i = Cu(function() {
        o(s - 1);
      });
      ss.set(r, i);
    }
  }
  return o(e), r;
};
To.cancel = function(n) {
  var t = ss.get(n);
  return Tu(n), Au(t);
};
process.env.NODE_ENV !== "production" && (To.ids = function() {
  return ss;
});
function Ou(n) {
  if (Array.isArray(n)) return n;
}
function ax(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var r, o, s, i, a = [], c = !0, l = !1;
    try {
      if (s = (e = e.call(n)).next, t === 0) {
        if (Object(e) !== e) return;
        c = !1;
      } else for (; !(c = (r = s.call(e)).done) && (a.push(r.value), a.length !== t); c = !0) ;
    } catch (f) {
      l = !0, o = f;
    } finally {
      try {
        if (!c && e.return != null && (i = e.return(), Object(i) !== i)) return;
      } finally {
        if (l) throw o;
      }
    }
    return a;
  }
}
function Ru() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function le(n, t) {
  return Ou(n) || ax(n, t) || da(n, t) || Ru();
}
function br(n) {
  for (var t = 0, e, r = 0, o = n.length; o >= 4; ++r, o -= 4)
    e = n.charCodeAt(r) & 255 | (n.charCodeAt(++r) & 255) << 8 | (n.charCodeAt(++r) & 255) << 16 | (n.charCodeAt(++r) & 255) << 24, e = /* Math.imul(k, m): */
    (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16), e ^= /* k >>> r: */
    e >>> 24, t = /* Math.imul(k, m): */
    (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (n.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (n.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= n.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
function $t() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function cx(n, t) {
  if (!n)
    return !1;
  if (n.contains)
    return n.contains(t);
  for (var e = t; e; ) {
    if (e === n)
      return !0;
    e = e.parentNode;
  }
  return !1;
}
var uc = "data-rc-order", fc = "data-rc-priority", lx = "rc-util-key", ui = /* @__PURE__ */ new Map();
function ku() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = n.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : lx;
}
function is(n) {
  if (n.attachTo)
    return n.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function ux(n) {
  return n === "queue" ? "prependQueue" : n ? "prepend" : "append";
}
function ha(n) {
  return Array.from((ui.get(n) || n).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function Pu(n) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!$t())
    return null;
  var e = t.csp, r = t.prepend, o = t.priority, s = o === void 0 ? 0 : o, i = ux(r), a = i === "prependQueue", c = document.createElement("style");
  c.setAttribute(uc, i), a && s && c.setAttribute(fc, "".concat(s)), e != null && e.nonce && (c.nonce = e == null ? void 0 : e.nonce), c.innerHTML = n;
  var l = is(t), f = l.firstChild;
  if (r) {
    if (a) {
      var d = (t.styles || ha(l)).filter(function(u) {
        if (!["prepend", "prependQueue"].includes(u.getAttribute(uc)))
          return !1;
        var v = Number(u.getAttribute(fc) || 0);
        return s >= v;
      });
      if (d.length)
        return l.insertBefore(c, d[d.length - 1].nextSibling), c;
    }
    l.insertBefore(c, f);
  } else
    l.appendChild(c);
  return c;
}
function Iu(n) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = is(t);
  return (t.styles || ha(e)).find(function(r) {
    return r.getAttribute(ku(t)) === n;
  });
}
function Nu(n) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = Iu(n, t);
  if (e) {
    var r = is(t);
    r.removeChild(e);
  }
}
function fx(n, t) {
  var e = ui.get(n);
  if (!e || !cx(document, e)) {
    var r = Pu("", t), o = r.parentNode;
    ui.set(n, o), n.removeChild(r);
  }
}
function En(n, t) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = is(e), o = ha(r), s = V(V({}, e), {}, {
    styles: o
  });
  fx(r, s);
  var i = Iu(t, s);
  if (i) {
    var a, c;
    if ((a = s.csp) !== null && a !== void 0 && a.nonce && i.nonce !== ((c = s.csp) === null || c === void 0 ? void 0 : c.nonce)) {
      var l;
      i.nonce = (l = s.csp) === null || l === void 0 ? void 0 : l.nonce;
    }
    return i.innerHTML !== n && (i.innerHTML = n), i;
  }
  var f = Pu(n, s);
  return f.setAttribute(ku(s), t), f;
}
function dx(n, t) {
  if (n == null) return {};
  var e = {};
  for (var r in n) if ({}.hasOwnProperty.call(n, r)) {
    if (t.indexOf(r) !== -1) continue;
    e[r] = n[r];
  }
  return e;
}
function yr(n, t) {
  if (n == null) return {};
  var e, r, o = dx(n, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(n);
    for (r = 0; r < s.length; r++) e = s[r], t.indexOf(e) === -1 && {}.propertyIsEnumerable.call(n, e) && (o[e] = n[e]);
  }
  return o;
}
function hx(n, t) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = /* @__PURE__ */ new Set();
  function o(s, i) {
    var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, c = r.has(s);
    if (on(!c, "Warning: There may be circular references"), c)
      return !1;
    if (s === i)
      return !0;
    if (e && a > 1)
      return !1;
    r.add(s);
    var l = a + 1;
    if (Array.isArray(s)) {
      if (!Array.isArray(i) || s.length !== i.length)
        return !1;
      for (var f = 0; f < s.length; f++)
        if (!o(s[f], i[f], l))
          return !1;
      return !0;
    }
    if (s && i && Se(s) === "object" && Se(i) === "object") {
      var d = Object.keys(s);
      return d.length !== Object.keys(i).length ? !1 : d.every(function(u) {
        return o(s[u], i[u], l);
      });
    }
    return !1;
  }
  return o(n, t);
}
var xx = "%";
function fi(n) {
  return n.join(xx);
}
var px = /* @__PURE__ */ function() {
  function n(t) {
    kt(this, n), q(this, "instanceId", void 0), q(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = t;
  }
  return Pt(n, [{
    key: "get",
    value: function(e) {
      return this.opGet(fi(e));
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
      return this.opUpdate(fi(e), r);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(e, r) {
      var o = this.cache.get(e), s = r(o);
      s === null ? this.cache.delete(e) : this.cache.set(e, s);
    }
  }]), n;
}(), qn = "data-token-hash", Tt = "data-css-hash", mx = "data-cache-path", Qt = "__cssinjs_instance__";
function gx() {
  var n = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(Tt, "]")) || [], e = document.head.firstChild;
    Array.from(t).forEach(function(o) {
      o[Qt] = o[Qt] || n, o[Qt] === n && document.head.insertBefore(o, e);
    });
    var r = {};
    Array.from(document.querySelectorAll("style[".concat(Tt, "]"))).forEach(function(o) {
      var s = o.getAttribute(Tt);
      if (r[s]) {
        if (o[Qt] === n) {
          var i;
          (i = o.parentNode) === null || i === void 0 || i.removeChild(o);
        }
      } else
        r[s] = !0;
    });
  }
  return new px(n);
}
var Pr = /* @__PURE__ */ _.createContext({
  hashPriority: "low",
  cache: gx(),
  defaultCache: !0
});
function vx(n, t) {
  if (n.length !== t.length)
    return !1;
  for (var e = 0; e < n.length; e++)
    if (n[e] !== t[e])
      return !1;
  return !0;
}
var xa = /* @__PURE__ */ function() {
  function n() {
    kt(this, n), q(this, "cache", void 0), q(this, "keys", void 0), q(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return Pt(n, [{
    key: "size",
    value: function() {
      return this.keys.length;
    }
  }, {
    key: "internalGet",
    value: function(e) {
      var r, o, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = {
        map: this.cache
      };
      return e.forEach(function(a) {
        if (!i)
          i = void 0;
        else {
          var c;
          i = (c = i) === null || c === void 0 || (c = c.map) === null || c === void 0 ? void 0 : c.get(a);
        }
      }), (r = i) !== null && r !== void 0 && r.value && s && (i.value[1] = this.cacheCallTimes++), (o = i) === null || o === void 0 ? void 0 : o.value;
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
        if (this.size() + 1 > n.MAX_CACHE_SIZE + n.MAX_CACHE_OFFSET) {
          var s = this.keys.reduce(function(l, f) {
            var d = le(l, 2), u = d[1];
            return o.internalGet(f)[1] < u ? [f, o.internalGet(f)[1]] : l;
          }, [this.keys[0], this.cacheCallTimes]), i = le(s, 1), a = i[0];
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
        var s;
        return o.map ? e.set(r[0], {
          map: o.map
        }) : e.delete(r[0]), (s = o.value) === null || s === void 0 ? void 0 : s[0];
      }
      var i = this.deleteByPath(o.map, r.slice(1));
      return (!o.map || o.map.size === 0) && !o.value && e.delete(r[0]), i;
    }
  }, {
    key: "delete",
    value: function(e) {
      if (this.has(e))
        return this.keys = this.keys.filter(function(r) {
          return !vx(r, e);
        }), this.deleteByPath(this.cache, e);
    }
  }]), n;
}();
q(xa, "MAX_CACHE_SIZE", 20);
q(xa, "MAX_CACHE_OFFSET", 5);
var dc = 0, ju = /* @__PURE__ */ function() {
  function n(t) {
    kt(this, n), q(this, "derivatives", void 0), q(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = dc, t.length === 0 && ua(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), dc += 1;
  }
  return Pt(n, [{
    key: "getDerivativeToken",
    value: function(e) {
      return this.derivatives.reduce(function(r, o) {
        return o(e, r);
      }, void 0);
    }
  }]), n;
}(), Ps = new xa();
function di(n) {
  var t = Array.isArray(n) ? n : [n];
  return Ps.has(t) || Ps.set(t, new ju(t)), Ps.get(t);
}
var bx = /* @__PURE__ */ new WeakMap(), Is = {};
function yx(n, t) {
  for (var e = bx, r = 0; r < t.length; r += 1) {
    var o = t[r];
    e.has(o) || e.set(o, /* @__PURE__ */ new WeakMap()), e = e.get(o);
  }
  return e.has(Is) || e.set(Is, n()), e.get(Is);
}
var hc = /* @__PURE__ */ new WeakMap();
function mr(n) {
  var t = hc.get(n) || "";
  return t || (Object.keys(n).forEach(function(e) {
    var r = n[e];
    t += e, r instanceof ju ? t += r.id : r && Se(r) === "object" ? t += mr(r) : t += r;
  }), t = br(t), hc.set(n, t)), t;
}
function xc(n, t) {
  return br("".concat(t, "_").concat(mr(n)));
}
var hi = $t();
function Oo(n) {
  return typeof n == "number" ? "".concat(n, "px") : n;
}
function Ro(n, t, e) {
  var r, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (s)
    return n;
  var i = V(V({}, o), {}, (r = {}, q(r, qn, t), q(r, Tt, e), r)), a = Object.keys(i).map(function(c) {
    var l = i[c];
    return l ? "".concat(c, '="').concat(l, '"') : null;
  }).filter(function(c) {
    return c;
  }).join(" ");
  return "<style ".concat(a, ">").concat(n, "</style>");
}
var uo = function(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(e ? "".concat(e, "-") : "").concat(t).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, Sx = function(t, e, r) {
  return Object.keys(t).length ? ".".concat(e).concat(r != null && r.scope ? ".".concat(r.scope) : "", "{").concat(Object.entries(t).map(function(o) {
    var s = le(o, 2), i = s[0], a = s[1];
    return "".concat(i, ":").concat(a, ";");
  }).join(""), "}") : "";
}, Lu = function(t, e, r) {
  var o = {}, s = {};
  return Object.entries(t).forEach(function(i) {
    var a, c, l = le(i, 2), f = l[0], d = l[1];
    if (r != null && (a = r.preserve) !== null && a !== void 0 && a[f])
      s[f] = d;
    else if ((typeof d == "string" || typeof d == "number") && !(r != null && (c = r.ignore) !== null && c !== void 0 && c[f])) {
      var u, v = uo(f, r == null ? void 0 : r.prefix);
      o[v] = typeof d == "number" && !(r != null && (u = r.unitless) !== null && u !== void 0 && u[f]) ? "".concat(d, "px") : String(d), s[f] = "var(".concat(v, ")");
    }
  }), [s, Sx(o, e, {
    scope: r == null ? void 0 : r.scope
  })];
}, pc = process.env.NODE_ENV !== "test" && $t() ? _.useLayoutEffect : _.useEffect, Du = function(t, e) {
  var r = _.useRef(!0);
  pc(function() {
    return t(r.current);
  }, e), pc(function() {
    return r.current = !1, function() {
      r.current = !0;
    };
  }, []);
}, wx = V({}, _), mc = wx.useInsertionEffect, Ex = function(t, e, r) {
  _.useMemo(t, r), Du(function() {
    return e(!0);
  }, r);
}, _x = mc ? function(n, t, e) {
  return mc(function() {
    return n(), t();
  }, e);
} : Ex, Cx = V({}, _), Ax = Cx.useInsertionEffect, Tx = function(t) {
  var e = [], r = !1;
  function o(s) {
    if (r) {
      process.env.NODE_ENV !== "production" && ua(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    e.push(s);
  }
  return _.useEffect(function() {
    return r = !1, function() {
      r = !0, e.length && e.forEach(function(s) {
        return s();
      });
    };
  }, t), o;
}, Ox = function() {
  return function(t) {
    t();
  };
}, Rx = typeof Ax < "u" ? Tx : Ox;
function kx() {
  return !1;
}
var xi = !1;
function Px() {
  return xi;
}
const Ix = process.env.NODE_ENV === "production" ? kx : Px;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var qr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : null;
  if (qr && typeof qr.webpackHotUpdate == "function") {
    var Nx = qr.webpackHotUpdate;
    qr.webpackHotUpdate = function() {
      return xi = !0, setTimeout(function() {
        xi = !1;
      }, 0), Nx.apply(void 0, arguments);
    };
  }
}
function pa(n, t, e, r, o) {
  var s = _.useContext(Pr), i = s.cache, a = [n].concat(Yt(t)), c = fi(a), l = Rx([c]), f = Ix(), d = function(h) {
    i.opUpdate(c, function(p) {
      var w = p || [void 0, void 0], S = le(w, 2), x = S[0], T = x === void 0 ? 0 : x, b = S[1], O = b;
      process.env.NODE_ENV !== "production" && b && f && (r == null || r(O, f), O = null);
      var C = O || e(), N = [T, C];
      return h ? h(N) : N;
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
  var u = i.opGet(c);
  process.env.NODE_ENV !== "production" && !u && (d(), u = i.opGet(c));
  var v = u[1];
  return _x(function() {
    o == null || o(v);
  }, function(g) {
    return d(function(h) {
      var p = le(h, 2), w = p[0], S = p[1];
      return g && w === 0 && (o == null || o(v)), [w + 1, S];
    }), function() {
      i.opUpdate(c, function(h) {
        var p = h || [], w = le(p, 2), S = w[0], x = S === void 0 ? 0 : S, T = w[1], b = x - 1;
        return b === 0 ? (l(function() {
          (g || !i.opGet(c)) && (r == null || r(T, !1));
        }), null) : [x - 1, T];
      });
    };
  }, [c]), v;
}
var jx = {}, Lx = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", pn = /* @__PURE__ */ new Map();
function Dx(n) {
  pn.set(n, (pn.get(n) || 0) + 1);
}
function Mx(n, t) {
  if (typeof document < "u") {
    var e = document.querySelectorAll("style[".concat(qn, '="').concat(n, '"]'));
    e.forEach(function(r) {
      if (r[Qt] === t) {
        var o;
        (o = r.parentNode) === null || o === void 0 || o.removeChild(r);
      }
    });
  }
}
var Bx = 0;
function Fx(n, t) {
  pn.set(n, (pn.get(n) || 0) - 1);
  var e = Array.from(pn.keys()), r = e.filter(function(o) {
    var s = pn.get(o) || 0;
    return s <= 0;
  });
  e.length - r.length > Bx && r.forEach(function(o) {
    Mx(o, t), pn.delete(o);
  });
}
var zx = function(t, e, r, o) {
  var s = r.getDerivativeToken(t), i = V(V({}, s), e);
  return o && (i = o(i)), i;
}, Mu = "token";
function Vx(n, t) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = nn(Pr), o = r.cache.instanceId, s = r.container, i = e.salt, a = i === void 0 ? "" : i, c = e.override, l = c === void 0 ? jx : c, f = e.formatToken, d = e.getComputedToken, u = e.cssVar, v = yx(function() {
    return Object.assign.apply(Object, [{}].concat(Yt(t)));
  }, t), g = mr(v), h = mr(l), p = u ? mr(u) : "", w = pa(Mu, [a, n.id, g, h, p], function() {
    var S, x = d ? d(v, l, n) : zx(v, l, n, f), T = V({}, x), b = "";
    if (u) {
      var O = Lu(x, u.key, {
        prefix: u.prefix,
        ignore: u.ignore,
        unitless: u.unitless,
        preserve: u.preserve
      }), C = le(O, 2);
      x = C[0], b = C[1];
    }
    var N = xc(x, a);
    x._tokenKey = N, T._tokenKey = xc(T, a);
    var z = (S = u == null ? void 0 : u.key) !== null && S !== void 0 ? S : N;
    x._themeKey = z, Dx(z);
    var $ = "".concat(Lx, "-").concat(br(N));
    return x._hashId = $, [x, $, T, b, (u == null ? void 0 : u.key) || ""];
  }, function(S) {
    Fx(S[0]._themeKey, o);
  }, function(S) {
    var x = le(S, 4), T = x[0], b = x[3];
    if (u && b) {
      var O = En(b, br("css-variables-".concat(T._themeKey)), {
        mark: Tt,
        prepend: "queue",
        attachTo: s,
        priority: -999
      });
      O[Qt] = o, O.setAttribute(qn, T._themeKey);
    }
  });
  return w;
}
var Hx = function(t, e, r) {
  var o = le(t, 5), s = o[2], i = o[3], a = o[4], c = r || {}, l = c.plain;
  if (!i)
    return null;
  var f = s._tokenKey, d = -999, u = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(d)
  }, v = Ro(i, a, f, u, l);
  return [d, f, v];
}, Ux = {
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
}, Bu = "comm", Fu = "rule", zu = "decl", qx = "@import", Wx = "@namespace", Xx = "@keyframes", Yx = "@layer", Vu = Math.abs, ma = String.fromCharCode;
function Hu(n) {
  return n.trim();
}
function fo(n, t, e) {
  return n.replace(t, e);
}
function $x(n, t, e) {
  return n.indexOf(t, e);
}
function Dn(n, t) {
  return n.charCodeAt(t) | 0;
}
function Wn(n, t, e) {
  return n.slice(t, e);
}
function Mt(n) {
  return n.length;
}
function Gx(n) {
  return n.length;
}
function Wr(n, t) {
  return t.push(n), n;
}
var as = 1, Xn = 1, Uu = 0, yt = 0, qe = 0, Zn = "";
function ga(n, t, e, r, o, s, i, a) {
  return { value: n, root: t, parent: e, type: r, props: o, children: s, line: as, column: Xn, length: i, return: "", siblings: a };
}
function Kx() {
  return qe;
}
function Jx() {
  return qe = yt > 0 ? Dn(Zn, --yt) : 0, Xn--, qe === 10 && (Xn = 1, as--), qe;
}
function Ot() {
  return qe = yt < Uu ? Dn(Zn, yt++) : 0, Xn++, qe === 10 && (Xn = 1, as++), qe;
}
function en() {
  return Dn(Zn, yt);
}
function ho() {
  return yt;
}
function cs(n, t) {
  return Wn(Zn, n, t);
}
function Sr(n) {
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
function Zx(n) {
  return as = Xn = 1, Uu = Mt(Zn = n), yt = 0, [];
}
function Qx(n) {
  return Zn = "", n;
}
function Ns(n) {
  return Hu(cs(yt - 1, pi(n === 91 ? n + 2 : n === 40 ? n + 1 : n)));
}
function ep(n) {
  for (; (qe = en()) && qe < 33; )
    Ot();
  return Sr(n) > 2 || Sr(qe) > 3 ? "" : " ";
}
function tp(n, t) {
  for (; --t && Ot() && !(qe < 48 || qe > 102 || qe > 57 && qe < 65 || qe > 70 && qe < 97); )
    ;
  return cs(n, ho() + (t < 6 && en() == 32 && Ot() == 32));
}
function pi(n) {
  for (; Ot(); )
    switch (qe) {
      // ] ) " '
      case n:
        return yt;
      // " '
      case 34:
      case 39:
        n !== 34 && n !== 39 && pi(qe);
        break;
      // (
      case 40:
        n === 41 && pi(n);
        break;
      // \
      case 92:
        Ot();
        break;
    }
  return yt;
}
function np(n, t) {
  for (; Ot() && n + qe !== 57; )
    if (n + qe === 84 && en() === 47)
      break;
  return "/*" + cs(t, yt - 1) + "*" + ma(n === 47 ? n : Ot());
}
function rp(n) {
  for (; !Sr(en()); )
    Ot();
  return cs(n, yt);
}
function op(n) {
  return Qx(xo("", null, null, null, [""], n = Zx(n), 0, [0], n));
}
function xo(n, t, e, r, o, s, i, a, c) {
  for (var l = 0, f = 0, d = i, u = 0, v = 0, g = 0, h = 1, p = 1, w = 1, S = 0, x = "", T = o, b = s, O = r, C = x; p; )
    switch (g = S, S = Ot()) {
      // (
      case 40:
        if (g != 108 && Dn(C, d - 1) == 58) {
          $x(C += fo(Ns(S), "&", "&\f"), "&\f", Vu(l ? a[l - 1] : 0)) != -1 && (w = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        C += Ns(S);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        C += ep(g);
        break;
      // \
      case 92:
        C += tp(ho() - 1, 7);
        continue;
      // /
      case 47:
        switch (en()) {
          case 42:
          case 47:
            Wr(sp(np(Ot(), ho()), t, e, c), c), (Sr(g || 1) == 5 || Sr(en() || 1) == 5) && Mt(C) && Wn(C, -1, void 0) !== " " && (C += " ");
            break;
          default:
            C += "/";
        }
        break;
      // {
      case 123 * h:
        a[l++] = Mt(C) * w;
      // } ; \0
      case 125 * h:
      case 59:
      case 0:
        switch (S) {
          // \0 }
          case 0:
          case 125:
            p = 0;
          // ;
          case 59 + f:
            w == -1 && (C = fo(C, /\f/g, "")), v > 0 && (Mt(C) - d || h === 0 && g === 47) && Wr(v > 32 ? vc(C + ";", r, e, d - 1, c) : vc(fo(C, " ", "") + ";", r, e, d - 2, c), c);
            break;
          // @ ;
          case 59:
            C += ";";
          // { rule/at-rule
          default:
            if (Wr(O = gc(C, t, e, l, f, o, a, x, T = [], b = [], d, s), s), S === 123)
              if (f === 0)
                xo(C, t, O, O, T, s, d, a, b);
              else {
                switch (u) {
                  // c(ontainer)
                  case 99:
                    if (Dn(C, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (Dn(C, 2) === 97) break;
                  default:
                    f = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                f ? xo(n, O, O, r && Wr(gc(n, O, O, 0, 0, o, a, x, o, T = [], d, b), b), o, b, d, a, r ? T : b) : xo(C, O, O, O, [""], b, 0, a, b);
              }
        }
        l = f = v = 0, h = w = 1, x = C = "", d = i;
        break;
      // :
      case 58:
        d = 1 + Mt(C), v = g;
      default:
        if (h < 1) {
          if (S == 123)
            --h;
          else if (S == 125 && h++ == 0 && Jx() == 125)
            continue;
        }
        switch (C += ma(S), S * h) {
          // &
          case 38:
            w = f > 0 ? 1 : (C += "\f", -1);
            break;
          // ,
          case 44:
            a[l++] = (Mt(C) - 1) * w, w = 1;
            break;
          // @
          case 64:
            en() === 45 && (C += Ns(Ot())), u = en(), f = d = Mt(x = C += rp(ho())), S++;
            break;
          // -
          case 45:
            g === 45 && Mt(C) == 2 && (h = 0);
        }
    }
  return s;
}
function gc(n, t, e, r, o, s, i, a, c, l, f, d) {
  for (var u = o - 1, v = o === 0 ? s : [""], g = Gx(v), h = 0, p = 0, w = 0; h < r; ++h)
    for (var S = 0, x = Wn(n, u + 1, u = Vu(p = i[h])), T = n; S < g; ++S)
      (T = Hu(p > 0 ? v[S] + " " + x : fo(x, /&\f/g, v[S]))) && (c[w++] = T);
  return ga(n, t, e, o === 0 ? Fu : a, c, l, f, d);
}
function sp(n, t, e, r) {
  return ga(n, t, e, Bu, ma(Kx()), Wn(n, 2, -2), 0, r);
}
function vc(n, t, e, r, o) {
  return ga(n, t, e, zu, Wn(n, 0, r), Wn(n, r + 1, -1), r, o);
}
function mi(n, t) {
  for (var e = "", r = 0; r < n.length; r++)
    e += t(n[r], r, n, t) || "";
  return e;
}
function ip(n, t, e, r) {
  switch (n.type) {
    case Yx:
      if (n.children.length) break;
    case qx:
    case Wx:
    case zu:
      return n.return = n.return || n.value;
    case Bu:
      return "";
    case Xx:
      return n.return = n.value + "{" + mi(n.children, r) + "}";
    case Fu:
      if (!Mt(n.value = n.props.join(","))) return "";
  }
  return Mt(e = mi(n.children, r)) ? n.return = n.value + "{" + e + "}" : "";
}
function qu(n, t) {
  var e = t.path, r = t.parentSelectors;
  on(!1, "[Ant Design CSS-in-JS] ".concat(e ? "Error in ".concat(e, ": ") : "").concat(n).concat(r.length ? " Selector: ".concat(r.join(" | ")) : ""));
}
var ap = function(t, e, r) {
  if (t === "content") {
    var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, s = ["normal", "none", "initial", "inherit", "unset"];
    (typeof e != "string" || s.indexOf(e) === -1 && !o.test(e) && (e.charAt(0) !== e.charAt(e.length - 1) || e.charAt(0) !== '"' && e.charAt(0) !== "'")) && qu("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(e, "\"'`."), r);
  }
}, cp = function(t, e, r) {
  t === "animation" && r.hashId && e !== "none" && qu("You seem to be using hashed animation '".concat(e, "', in which case 'animationName' with Keyframe as value is recommended."), r);
}, bc = "data-ant-cssinjs-cache-path", Wu = "_FILE_STYLE__", _n, Xu = !0;
function lp() {
  if (!_n && (_n = {}, $t())) {
    var n = document.createElement("div");
    n.className = bc, n.style.position = "fixed", n.style.visibility = "hidden", n.style.top = "-9999px", document.body.appendChild(n);
    var t = getComputedStyle(n).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(o) {
      var s = o.split(":"), i = le(s, 2), a = i[0], c = i[1];
      _n[a] = c;
    });
    var e = document.querySelector("style[".concat(bc, "]"));
    if (e) {
      var r;
      Xu = !1, (r = e.parentNode) === null || r === void 0 || r.removeChild(e);
    }
    document.body.removeChild(n);
  }
}
function up(n) {
  return lp(), !!_n[n];
}
function fp(n) {
  var t = _n[n], e = null;
  if (t && $t())
    if (Xu)
      e = Wu;
    else {
      var r = document.querySelector("style[".concat(Tt, '="').concat(_n[n], '"]'));
      r ? e = r.innerHTML : delete _n[n];
    }
  return [e, t];
}
var Yu = "_skip_check_", $u = "_multi_value_";
function po(n) {
  var t = mi(op(n), ip);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function dp(n) {
  return Se(n) === "object" && n && (Yu in n || $u in n);
}
function yc(n, t, e) {
  if (!t)
    return n;
  var r = ".".concat(t), o = e === "low" ? ":where(".concat(r, ")") : r, s = n.split(",").map(function(i) {
    var a, c = i.trim().split(/\s+/), l = c[0] || "", f = ((a = l.match(/^\w+/)) === null || a === void 0 ? void 0 : a[0]) || "";
    return l = "".concat(f).concat(o).concat(l.slice(f.length)), [l].concat(Yt(c.slice(1))).join(" ");
  });
  return s.join(",");
}
var hp = function n(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = r.root, s = r.injectHash, i = r.parentSelectors, a = e.hashId, c = e.layer, l = e.path, f = e.hashPriority, d = e.transformers, u = d === void 0 ? [] : d, v = e.linters, g = v === void 0 ? [] : v, h = "", p = {};
  function w(T) {
    var b = T.getName(a);
    if (!p[b]) {
      var O = n(T.style, e, {
        root: !1,
        parentSelectors: i
      }), C = le(O, 1), N = C[0];
      p[b] = "@keyframes ".concat(T.getName(a)).concat(N);
    }
  }
  function S(T) {
    var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return T.forEach(function(O) {
      Array.isArray(O) ? S(O, b) : O && b.push(O);
    }), b;
  }
  var x = S(Array.isArray(t) ? t : [t]);
  return x.forEach(function(T) {
    var b = typeof T == "string" && !o ? {} : T;
    if (typeof b == "string")
      h += "".concat(b, `
`);
    else if (b._keyframe)
      w(b);
    else {
      var O = u.reduce(function(C, N) {
        var z;
        return (N == null || (z = N.visit) === null || z === void 0 ? void 0 : z.call(N, C)) || C;
      }, b);
      Object.keys(O).forEach(function(C) {
        var N = O[C];
        if (Se(N) === "object" && N && (C !== "animationName" || !N._keyframe) && !dp(N)) {
          var z = !1, $ = C.trim(), oe = !1;
          (o || s) && a ? $.startsWith("@") ? z = !0 : $ === "&" ? $ = yc("", a, f) : $ = yc(C, a, f) : o && !a && ($ === "&" || $ === "") && ($ = "", oe = !0);
          var K = n(N, e, {
            root: oe,
            injectHash: z,
            parentSelectors: [].concat(Yt(i), [$])
          }), B = le(K, 2), W = B[0], H = B[1];
          p = V(V({}, p), H), h += "".concat($).concat(W);
        } else {
          let Q = function(ee, ae) {
            process.env.NODE_ENV !== "production" && (Se(N) !== "object" || !(N != null && N[Yu])) && [ap, cp].concat(Yt(g)).forEach(function(ne) {
              return ne(ee, ae, {
                path: l,
                hashId: a,
                parentSelectors: i
              });
            });
            var se = ee.replace(/[A-Z]/g, function(ne) {
              return "-".concat(ne.toLowerCase());
            }), J = ae;
            !Ux[ee] && typeof J == "number" && J !== 0 && (J = "".concat(J, "px")), ee === "animationName" && ae !== null && ae !== void 0 && ae._keyframe && (w(ae), J = ae.getName(a)), h += "".concat(se, ":").concat(J, ";");
          };
          var te, Z = (te = N == null ? void 0 : N.value) !== null && te !== void 0 ? te : N;
          Se(N) === "object" && N !== null && N !== void 0 && N[$u] && Array.isArray(Z) ? Z.forEach(function(ee) {
            Q(C, ee);
          }) : Q(C, Z);
        }
      });
    }
  }), o ? c && (h && (h = "@layer ".concat(c.name, " {").concat(h, "}")), c.dependencies && (p["@layer ".concat(c.name)] = c.dependencies.map(function(T) {
    return "@layer ".concat(T, ", ").concat(c.name, ";");
  }).join(`
`))) : h = "{".concat(h, "}"), [h, p];
};
function Gu(n, t) {
  return br("".concat(n.join("%")).concat(t));
}
function xp() {
  return null;
}
var Ku = "style";
function gi(n, t) {
  var e = n.token, r = n.path, o = n.hashId, s = n.layer, i = n.nonce, a = n.clientOnly, c = n.order, l = c === void 0 ? 0 : c, f = _.useContext(Pr), d = f.autoClear, u = f.mock, v = f.defaultCache, g = f.hashPriority, h = f.container, p = f.ssrInline, w = f.transformers, S = f.linters, x = f.cache, T = f.layer, b = e._tokenKey, O = [b];
  T && O.push("layer"), O.push.apply(O, Yt(r));
  var C = hi;
  process.env.NODE_ENV !== "production" && u !== void 0 && (C = u === "client");
  var N = pa(
    Ku,
    O,
    // Create cache if needed
    function() {
      var B = O.join("|");
      if (up(B)) {
        var W = fp(B), H = le(W, 2), te = H[0], Z = H[1];
        if (te)
          return [te, b, Z, {}, a, l];
      }
      var Q = t(), ee = hp(Q, {
        hashId: o,
        hashPriority: g,
        layer: T ? s : void 0,
        path: r.join("-"),
        transformers: w,
        linters: S
      }), ae = le(ee, 2), se = ae[0], J = ae[1], ne = po(se), he = Gu(O, ne);
      return [ne, b, he, J, a, l];
    },
    // Remove cache if no need
    function(B, W) {
      var H = le(B, 3), te = H[2];
      (W || d) && hi && Nu(te, {
        mark: Tt
      });
    },
    // Effect: Inject style here
    function(B) {
      var W = le(B, 4), H = W[0];
      W[1];
      var te = W[2], Z = W[3];
      if (C && H !== Wu) {
        var Q = {
          mark: Tt,
          prepend: T ? !1 : "queue",
          attachTo: h,
          priority: l
        }, ee = typeof i == "function" ? i() : i;
        ee && (Q.csp = {
          nonce: ee
        });
        var ae = [], se = [];
        Object.keys(Z).forEach(function(ne) {
          ne.startsWith("@layer") ? ae.push(ne) : se.push(ne);
        }), ae.forEach(function(ne) {
          En(po(Z[ne]), "_layer-".concat(ne), V(V({}, Q), {}, {
            prepend: !0
          }));
        });
        var J = En(H, te, Q);
        J[Qt] = x.instanceId, J.setAttribute(qn, b), process.env.NODE_ENV !== "production" && J.setAttribute(mx, O.join("|")), se.forEach(function(ne) {
          En(po(Z[ne]), "_effect-".concat(ne), Q);
        });
      }
    }
  ), z = le(N, 3), $ = z[0], oe = z[1], K = z[2];
  return function(B) {
    var W;
    if (!p || C || !v)
      W = /* @__PURE__ */ _.createElement(xp, null);
    else {
      var H;
      W = /* @__PURE__ */ _.createElement("style", Vt({}, (H = {}, q(H, qn, oe), q(H, Tt, K), H), {
        dangerouslySetInnerHTML: {
          __html: $
        }
      }));
    }
    return /* @__PURE__ */ _.createElement(_.Fragment, null, W, B);
  };
}
var pp = function(t, e, r) {
  var o = le(t, 6), s = o[0], i = o[1], a = o[2], c = o[3], l = o[4], f = o[5], d = r || {}, u = d.plain;
  if (l)
    return null;
  var v = s, g = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(f)
  };
  return v = Ro(s, i, a, g, u), c && Object.keys(c).forEach(function(h) {
    if (!e[h]) {
      e[h] = !0;
      var p = po(c[h]), w = Ro(p, i, "_effect-".concat(h), g, u);
      h.startsWith("@layer") ? v = w + v : v += w;
    }
  }), [f, a, v];
}, Ju = "cssVar", mp = function(t, e) {
  var r = t.key, o = t.prefix, s = t.unitless, i = t.ignore, a = t.token, c = t.scope, l = c === void 0 ? "" : c, f = nn(Pr), d = f.cache.instanceId, u = f.container, v = a._tokenKey, g = [].concat(Yt(t.path), [r, l, v]), h = pa(Ju, g, function() {
    var p = e(), w = Lu(p, r, {
      prefix: o,
      unitless: s,
      ignore: i,
      scope: l
    }), S = le(w, 2), x = S[0], T = S[1], b = Gu(g, T);
    return [x, T, b, r];
  }, function(p) {
    var w = le(p, 3), S = w[2];
    hi && Nu(S, {
      mark: Tt
    });
  }, function(p) {
    var w = le(p, 3), S = w[1], x = w[2];
    if (S) {
      var T = En(S, x, {
        mark: Tt,
        prepend: "queue",
        attachTo: u,
        priority: -999
      });
      T[Qt] = d, T.setAttribute(qn, r);
    }
  });
  return h;
}, gp = function(t, e, r) {
  var o = le(t, 4), s = o[1], i = o[2], a = o[3], c = r || {}, l = c.plain;
  if (!s)
    return null;
  var f = -999, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(f)
  }, u = Ro(s, a, i, d, l);
  return [f, i, u];
}, cr;
cr = {}, q(cr, Ku, pp), q(cr, Mu, Hx), q(cr, Ju, gp);
var Zu = /* @__PURE__ */ function() {
  function n(t, e) {
    kt(this, n), q(this, "name", void 0), q(this, "style", void 0), q(this, "_keyframe", !0), this.name = t, this.style = e;
  }
  return Pt(n, [{
    key: "getName",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return e ? "".concat(e, "-").concat(this.name) : this.name;
    }
  }]), n;
}();
function Pn(n) {
  return n.notSplit = !0, n;
}
Pn(["borderTop", "borderBottom"]), Pn(["borderTop"]), Pn(["borderBottom"]), Pn(["borderLeft", "borderRight"]), Pn(["borderLeft"]), Pn(["borderRight"]);
var va = /* @__PURE__ */ Zi({});
function vp(n) {
  return Ou(n) || _u(n) || da(n) || Ru();
}
function vi(n, t) {
  for (var e = n, r = 0; r < t.length; r += 1) {
    if (e == null)
      return;
    e = e[t[r]];
  }
  return e;
}
function Qu(n, t, e, r) {
  if (!t.length)
    return e;
  var o = vp(t), s = o[0], i = o.slice(1), a;
  return !n && typeof s == "number" ? a = [] : Array.isArray(n) ? a = Yt(n) : a = V({}, n), r && e === void 0 && i.length === 1 ? delete a[s][i[0]] : a[s] = Qu(a[s], i, e, r), a;
}
function js(n, t, e) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && r && e === void 0 && !vi(n, t.slice(0, -1)) ? n : Qu(n, t, e, r);
}
function bp(n) {
  return Se(n) === "object" && n !== null && Object.getPrototypeOf(n) === Object.prototype;
}
function Sc(n) {
  return Array.isArray(n) ? [] : {};
}
var yp = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function Sp() {
  for (var n = arguments.length, t = new Array(n), e = 0; e < n; e++)
    t[e] = arguments[e];
  var r = Sc(t[0]);
  return t.forEach(function(o) {
    function s(i, a) {
      var c = new Set(a), l = vi(o, i), f = Array.isArray(l);
      if (f || bp(l)) {
        if (!c.has(l)) {
          c.add(l);
          var d = vi(r, i);
          f ? r = js(r, i, []) : (!d || Se(d) !== "object") && (r = js(r, i, Sc(l))), yp(l).forEach(function(u) {
            s([].concat(Yt(i), [u]), c);
          });
        }
      } else
        r = js(r, i, l);
    }
    s([]);
  }), r;
}
function ef() {
}
let Wt = null;
function wp() {
  Wt = null, gu();
}
let ba = ef;
process.env.NODE_ENV !== "production" && (ba = (n, t, e) => {
  on(n, `[antd: ${t}] ${e}`), process.env.NODE_ENV === "test" && wp();
});
const tf = /* @__PURE__ */ _.createContext({}), Qn = process.env.NODE_ENV !== "production" ? (n) => {
  const {
    strict: t
  } = _.useContext(tf), e = (r, o, s) => {
    if (!r)
      if (t === !1 && o === "deprecated") {
        const i = Wt;
        Wt || (Wt = {}), Wt[n] = Wt[n] || [], Wt[n].includes(s || "") || Wt[n].push(s || ""), i || console.warn("[antd] There exists deprecated usage in your code:", Wt);
      } else
        process.env.NODE_ENV !== "production" && ba(r, n, s);
  };
  return e.deprecated = (r, o, s, i) => {
    e(r, "deprecated", `\`${o}\` is deprecated. Please use \`${s}\` instead.${i ? ` ${i}` : ""}`);
  }, e;
} : () => {
  const n = () => {
  };
  return n.deprecated = ef, n;
}, ls = ba, Ep = /* @__PURE__ */ Zi(void 0), ht = "${label} is not a valid ${type}", us = {
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
        string: ht,
        method: ht,
        array: ht,
        object: ht,
        number: ht,
        date: ht,
        boolean: ht,
        integer: ht,
        float: ht,
        regexp: ht,
        email: ht,
        url: ht,
        hex: ht
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
Object.assign({}, us.Modal);
let mo = [];
const wc = () => mo.reduce((n, t) => Object.assign(Object.assign({}, n), t), us.Modal);
function _p(n) {
  if (n) {
    const t = Object.assign({}, n);
    return mo.push(t), wc(), () => {
      mo = mo.filter((e) => e !== t), wc();
    };
  }
  Object.assign({}, us.Modal);
}
const nf = /* @__PURE__ */ Zi(void 0), rf = "internalMark", of = (n) => {
  const {
    locale: t = {},
    children: e,
    _ANT_MARK__: r
  } = n;
  if (process.env.NODE_ENV !== "production") {
    const s = Qn("LocaleProvider");
    process.env.NODE_ENV !== "production" && s(r === rf, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  _.useEffect(() => _p(t == null ? void 0 : t.Modal), [t]);
  const o = _.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ _.createElement(nf.Provider, {
    value: o
  }, e);
};
process.env.NODE_ENV !== "production" && (of.displayName = "LocaleProvider");
const sf = {
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
}, wr = Object.assign(Object.assign({}, sf), {
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
function Ls(n, t) {
  const e = n.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], r = e.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    r[o] = t(r[o] || 0, e[o] || "", o);
  return e[3] ? r[3] = e[3].includes("%") ? r[3] / 100 : r[3] : r[3] = 1, r;
}
const Ec = (n, t, e) => e === 0 ? n : n / 100;
function lr(n, t) {
  const e = t || 255;
  return n > e ? e : n < 0 ? 0 : n;
}
class ze {
  constructor(t) {
    q(this, "isValid", !0), q(this, "r", 0), q(this, "g", 0), q(this, "b", 0), q(this, "a", 1), q(this, "_h", void 0), q(this, "_s", void 0), q(this, "_l", void 0), q(this, "_v", void 0), q(this, "_max", void 0), q(this, "_min", void 0), q(this, "_brightness", void 0);
    function e(r) {
      return r[0] in t && r[1] in t && r[2] in t;
    }
    if (t) if (typeof t == "string") {
      let o = function(s) {
        return r.startsWith(s);
      };
      const r = t.trim();
      /^#?[A-F\d]{3,8}$/i.test(r) ? this.fromHexString(r) : o("rgb") ? this.fromRgbString(r) : o("hsl") ? this.fromHslString(r) : (o("hsv") || o("hsb")) && this.fromHsvString(r);
    } else if (t instanceof ze)
      this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this._h = t._h, this._s = t._s, this._l = t._l, this._v = t._v;
    else if (e("rgb"))
      this.r = lr(t.r), this.g = lr(t.g), this.b = lr(t.b), this.a = typeof t.a == "number" ? lr(t.a, 1) : 1;
    else if (e("hsl"))
      this.fromHsl(t);
    else if (e("hsv"))
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
    const e = this.toHsv();
    return e.h = t, this._c(e);
  }
  // ======================= Getter =======================
  /**
   * Returns the perceived luminance of a color, from 0-1.
   * @see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
   */
  getLuminance() {
    function t(s) {
      const i = s / 255;
      return i <= 0.03928 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4);
    }
    const e = t(this.r), r = t(this.g), o = t(this.b);
    return 0.2126 * e + 0.7152 * r + 0.0722 * o;
  }
  getHue() {
    if (typeof this._h > "u") {
      const t = this.getMax() - this.getMin();
      t === 0 ? this._h = 0 : this._h = $e(60 * (this.r === this.getMax() ? (this.g - this.b) / t + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / t + 2 : (this.r - this.g) / t + 4));
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
    const e = this.getHue(), r = this.getSaturation();
    let o = this.getLightness() - t / 100;
    return o < 0 && (o = 0), this._c({
      h: e,
      s: r,
      l: o,
      a: this.a
    });
  }
  lighten(t = 10) {
    const e = this.getHue(), r = this.getSaturation();
    let o = this.getLightness() + t / 100;
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
  mix(t, e = 50) {
    const r = this._c(t), o = e / 100, s = (a) => (r[a] - this[a]) * o + this[a], i = {
      r: $e(s("r")),
      g: $e(s("g")),
      b: $e(s("b")),
      a: $e(s("a") * 100) / 100
    };
    return this._c(i);
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
    const e = this._c(t), r = this.a + e.a * (1 - this.a), o = (s) => $e((this[s] * this.a + e[s] * e.a * (1 - this.a)) / r);
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
    const e = (this.r || 0).toString(16);
    t += e.length === 2 ? e : "0" + e;
    const r = (this.g || 0).toString(16);
    t += r.length === 2 ? r : "0" + r;
    const o = (this.b || 0).toString(16);
    if (t += o.length === 2 ? o : "0" + o, typeof this.a == "number" && this.a >= 0 && this.a < 1) {
      const s = $e(this.a * 255).toString(16);
      t += s.length === 2 ? s : "0" + s;
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
    const t = this.getHue(), e = $e(this.getSaturation() * 100), r = $e(this.getLightness() * 100);
    return this.a !== 1 ? `hsla(${t},${e}%,${r}%,${this.a})` : `hsl(${t},${e}%,${r}%)`;
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
  _sc(t, e, r) {
    const o = this.clone();
    return o[t] = lr(e, r), o;
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
    const e = t.replace("#", "");
    function r(o, s) {
      return parseInt(e[o] + e[s || o], 16);
    }
    e.length < 6 ? (this.r = r(0), this.g = r(1), this.b = r(2), this.a = e[3] ? r(3) / 255 : 1) : (this.r = r(0, 1), this.g = r(2, 3), this.b = r(4, 5), this.a = e[6] ? r(6, 7) / 255 : 1);
  }
  fromHsl({
    h: t,
    s: e,
    l: r,
    a: o
  }) {
    if (this._h = t % 360, this._s = e, this._l = r, this.a = typeof o == "number" ? o : 1, e <= 0) {
      const u = $e(r * 255);
      this.r = u, this.g = u, this.b = u;
    }
    let s = 0, i = 0, a = 0;
    const c = t / 60, l = (1 - Math.abs(2 * r - 1)) * e, f = l * (1 - Math.abs(c % 2 - 1));
    c >= 0 && c < 1 ? (s = l, i = f) : c >= 1 && c < 2 ? (s = f, i = l) : c >= 2 && c < 3 ? (i = l, a = f) : c >= 3 && c < 4 ? (i = f, a = l) : c >= 4 && c < 5 ? (s = f, a = l) : c >= 5 && c < 6 && (s = l, a = f);
    const d = r - l / 2;
    this.r = $e((s + d) * 255), this.g = $e((i + d) * 255), this.b = $e((a + d) * 255);
  }
  fromHsv({
    h: t,
    s: e,
    v: r,
    a: o
  }) {
    this._h = t % 360, this._s = e, this._v = r, this.a = typeof o == "number" ? o : 1;
    const s = $e(r * 255);
    if (this.r = s, this.g = s, this.b = s, e <= 0)
      return;
    const i = t / 60, a = Math.floor(i), c = i - a, l = $e(r * (1 - e) * 255), f = $e(r * (1 - e * c) * 255), d = $e(r * (1 - e * (1 - c)) * 255);
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
  fromHsvString(t) {
    const e = Ls(t, Ec);
    this.fromHsv({
      h: e[0],
      s: e[1],
      v: e[2],
      a: e[3]
    });
  }
  fromHslString(t) {
    const e = Ls(t, Ec);
    this.fromHsl({
      h: e[0],
      s: e[1],
      l: e[2],
      a: e[3]
    });
  }
  fromRgbString(t) {
    const e = Ls(t, (r, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? $e(r / 100 * 255) : r
    ));
    this.r = e[0], this.g = e[1], this.b = e[2], this.a = e[3];
  }
}
var Xr = 2, _c = 0.16, Cp = 0.05, Ap = 0.05, Tp = 0.15, af = 5, cf = 4, Op = [{
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
function Cc(n, t, e) {
  var r;
  return Math.round(n.h) >= 60 && Math.round(n.h) <= 240 ? r = e ? Math.round(n.h) - Xr * t : Math.round(n.h) + Xr * t : r = e ? Math.round(n.h) + Xr * t : Math.round(n.h) - Xr * t, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function Ac(n, t, e) {
  if (n.h === 0 && n.s === 0)
    return n.s;
  var r;
  return e ? r = n.s - _c * t : t === cf ? r = n.s + _c : r = n.s + Cp * t, r > 1 && (r = 1), e && t === af && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Math.round(r * 100) / 100;
}
function Tc(n, t, e) {
  var r;
  return e ? r = n.v + Ap * t : r = n.v - Tp * t, r = Math.max(0, Math.min(1, r)), Math.round(r * 100) / 100;
}
function Er(n) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = [], r = new ze(n), o = r.toHsv(), s = af; s > 0; s -= 1) {
    var i = new ze({
      h: Cc(o, s, !0),
      s: Ac(o, s, !0),
      v: Tc(o, s, !0)
    });
    e.push(i);
  }
  e.push(r);
  for (var a = 1; a <= cf; a += 1) {
    var c = new ze({
      h: Cc(o, a),
      s: Ac(o, a),
      v: Tc(o, a)
    });
    e.push(c);
  }
  return t.theme === "dark" ? Op.map(function(l) {
    var f = l.index, d = l.amount;
    return new ze(t.backgroundColor || "#141414").mix(e[f], d).toHexString();
  }) : e.map(function(l) {
    return l.toHexString();
  });
}
var Ds = {
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
}, bi = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
bi.primary = bi[5];
var yi = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
yi.primary = yi[5];
var Si = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
Si.primary = Si[5];
var wi = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
wi.primary = wi[5];
var Ei = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
Ei.primary = Ei[5];
var _i = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
_i.primary = _i[5];
var Ci = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
Ci.primary = Ci[5];
var Ai = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
Ai.primary = Ai[5];
var ko = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
ko.primary = ko[5];
var Ti = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
Ti.primary = Ti[5];
var Oi = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
Oi.primary = Oi[5];
var Ri = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
Ri.primary = Ri[5];
var ki = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
ki.primary = ki[5];
var Ms = {
  red: bi,
  volcano: yi,
  orange: Si,
  gold: wi,
  yellow: Ei,
  lime: _i,
  green: Ci,
  cyan: Ai,
  blue: ko,
  geekblue: Ti,
  purple: Oi,
  magenta: Ri,
  grey: ki
};
function Rp(n, t) {
  let {
    generateColorPalettes: e,
    generateNeutralColorPalettes: r
  } = t;
  const {
    colorSuccess: o,
    colorWarning: s,
    colorError: i,
    colorInfo: a,
    colorPrimary: c,
    colorBgBase: l,
    colorTextBase: f
  } = n, d = e(c), u = e(o), v = e(s), g = e(i), h = e(a), p = r(l, f), w = n.colorLink || n.colorInfo, S = e(w), x = new ze(g[1]).mix(new ze(g[3]), 50).toHexString();
  return Object.assign(Object.assign({}, p), {
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
    colorErrorBgFilledHover: x,
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
    colorBgMask: new ze("#000").setA(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const kp = (n) => {
  let t = n, e = n, r = n, o = n;
  return n < 6 && n >= 5 ? t = n + 1 : n < 16 && n >= 6 ? t = n + 2 : n >= 16 && (t = 16), n < 7 && n >= 5 ? e = 4 : n < 8 && n >= 7 ? e = 5 : n < 14 && n >= 8 ? e = 6 : n < 16 && n >= 14 ? e = 7 : n >= 16 && (e = 8), n < 6 && n >= 2 ? r = 1 : n >= 6 && (r = 2), n > 4 && n < 8 ? o = 4 : n >= 8 && (o = 6), {
    borderRadius: n,
    borderRadiusXS: r,
    borderRadiusSM: e,
    borderRadiusLG: t,
    borderRadiusOuter: o
  };
};
function Pp(n) {
  const {
    motionUnit: t,
    motionBase: e,
    borderRadius: r,
    lineWidth: o
  } = n;
  return Object.assign({
    // motion
    motionDurationFast: `${(e + t).toFixed(1)}s`,
    motionDurationMid: `${(e + t * 2).toFixed(1)}s`,
    motionDurationSlow: `${(e + t * 3).toFixed(1)}s`,
    // line
    lineWidthBold: o + 1
  }, kp(r));
}
const Ip = (n) => {
  const {
    controlHeight: t
  } = n;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function Np(n) {
  return (n + 8) / n;
}
function jp(n) {
  const t = Array.from({
    length: 10
  }).map((e, r) => {
    const o = r - 1, s = n * Math.pow(Math.E, o / 5), i = r > 1 ? Math.floor(s) : Math.ceil(s);
    return Math.floor(i / 2) * 2;
  });
  return t[1] = n, t.map((e) => ({
    size: e,
    lineHeight: Np(e)
  }));
}
const Lp = (n) => {
  const t = jp(n), e = t.map((f) => f.size), r = t.map((f) => f.lineHeight), o = e[1], s = e[0], i = e[2], a = r[1], c = r[0], l = r[2];
  return {
    fontSizeSM: s,
    fontSize: o,
    fontSizeLG: i,
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
    fontHeightLG: Math.round(l * i),
    fontHeightSM: Math.round(c * s),
    lineHeightHeading1: r[6],
    lineHeightHeading2: r[5],
    lineHeightHeading3: r[4],
    lineHeightHeading4: r[3],
    lineHeightHeading5: r[2]
  };
};
function Dp(n) {
  const {
    sizeUnit: t,
    sizeStep: e
  } = n;
  return {
    sizeXXL: t * (e + 8),
    // 48
    sizeXL: t * (e + 4),
    // 32
    sizeLG: t * (e + 2),
    // 24
    sizeMD: t * (e + 1),
    // 20
    sizeMS: t * e,
    // 16
    size: t * e,
    // 16
    sizeSM: t * (e - 1),
    // 12
    sizeXS: t * (e - 2),
    // 8
    sizeXXS: t * (e - 3)
    // 4
  };
}
const gt = (n, t) => new ze(n).setA(t).toRgbString(), ur = (n, t) => new ze(n).darken(t).toHexString(), Mp = (n) => {
  const t = Er(n);
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
}, Bp = (n, t) => {
  const e = n || "#fff", r = t || "#000";
  return {
    colorBgBase: e,
    colorTextBase: r,
    colorText: gt(r, 0.88),
    colorTextSecondary: gt(r, 0.65),
    colorTextTertiary: gt(r, 0.45),
    colorTextQuaternary: gt(r, 0.25),
    colorFill: gt(r, 0.15),
    colorFillSecondary: gt(r, 0.06),
    colorFillTertiary: gt(r, 0.04),
    colorFillQuaternary: gt(r, 0.02),
    colorBgSolid: gt(r, 1),
    colorBgSolidHover: gt(r, 0.75),
    colorBgSolidActive: gt(r, 0.95),
    colorBgLayout: ur(e, 4),
    colorBgContainer: ur(e, 0),
    colorBgElevated: ur(e, 0),
    colorBgSpotlight: gt(r, 0.85),
    colorBgBlur: "transparent",
    colorBorder: ur(e, 15),
    colorBorderSecondary: ur(e, 6)
  };
};
function Fp(n) {
  Ds.pink = Ds.magenta, Ms.pink = Ms.magenta;
  const t = Object.keys(sf).map((e) => {
    const r = n[e] === Ds[e] ? Ms[e] : Er(n[e]);
    return Array.from({
      length: 10
    }, () => 1).reduce((o, s, i) => (o[`${e}-${i + 1}`] = r[i], o[`${e}${i + 1}`] = r[i], o), {});
  }).reduce((e, r) => (e = Object.assign(Object.assign({}, e), r), e), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, n), t), Rp(n, {
    generateColorPalettes: Mp,
    generateNeutralColorPalettes: Bp
  })), Lp(n.fontSize)), Dp(n)), Ip(n)), Pp(n));
}
const lf = di(Fp), Pi = {
  token: wr,
  override: {
    override: wr
  },
  hashed: !0
}, uf = /* @__PURE__ */ Ve.createContext(Pi), Ii = "ant", ya = "anticon", zp = (n, t) => t || (n ? `${Ii}-${n}` : Ii), rn = /* @__PURE__ */ _.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: zp,
  iconPrefixCls: ya
}), {
  Consumer: sv
} = rn, Oc = {};
function ff(n) {
  const t = _.useContext(rn), {
    getPrefixCls: e,
    direction: r,
    getPopupContainer: o
  } = t, s = t[n];
  return Object.assign(Object.assign({
    classNames: Oc,
    styles: Oc
  }, s), {
    getPrefixCls: e,
    direction: r,
    getPopupContainer: o
  });
}
const Vp = `-ant-${Date.now()}-${Math.random()}`;
function Hp(n, t) {
  const e = {}, r = (i, a) => {
    let c = i.clone();
    return c = (a == null ? void 0 : a(c)) || c, c.toRgbString();
  }, o = (i, a) => {
    const c = new ze(i), l = Er(c.toRgbString());
    e[`${a}-color`] = r(c), e[`${a}-color-disabled`] = l[1], e[`${a}-color-hover`] = l[4], e[`${a}-color-active`] = l[6], e[`${a}-color-outline`] = c.clone().setA(0.2).toRgbString(), e[`${a}-color-deprecated-bg`] = l[0], e[`${a}-color-deprecated-border`] = l[2];
  };
  if (t.primaryColor) {
    o(t.primaryColor, "primary");
    const i = new ze(t.primaryColor), a = Er(i.toRgbString());
    a.forEach((l, f) => {
      e[`primary-${f + 1}`] = l;
    }), e["primary-color-deprecated-l-35"] = r(i, (l) => l.lighten(35)), e["primary-color-deprecated-l-20"] = r(i, (l) => l.lighten(20)), e["primary-color-deprecated-t-20"] = r(i, (l) => l.tint(20)), e["primary-color-deprecated-t-50"] = r(i, (l) => l.tint(50)), e["primary-color-deprecated-f-12"] = r(i, (l) => l.setA(l.a * 0.12));
    const c = new ze(a[0]);
    e["primary-color-active-deprecated-f-30"] = r(c, (l) => l.setA(l.a * 0.3)), e["primary-color-active-deprecated-d-02"] = r(c, (l) => l.darken(2));
  }
  return t.successColor && o(t.successColor, "success"), t.warningColor && o(t.warningColor, "warning"), t.errorColor && o(t.errorColor, "error"), t.infoColor && o(t.infoColor, "info"), `
  :root {
    ${Object.keys(e).map((i) => `--${n}-${i}: ${e[i]};`).join(`
`)}
  }
  `.trim();
}
function Up(n, t) {
  const e = Hp(n, t);
  $t() ? En(e, `${Vp}-dynamic-theme`) : process.env.NODE_ENV !== "production" && ls(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const Ni = /* @__PURE__ */ _.createContext(!1), qp = (n) => {
  let {
    children: t,
    disabled: e
  } = n;
  const r = _.useContext(Ni);
  return /* @__PURE__ */ _.createElement(Ni.Provider, {
    value: e ?? r
  }, t);
}, _r = /* @__PURE__ */ _.createContext(void 0), Wp = (n) => {
  let {
    children: t,
    size: e
  } = n;
  const r = _.useContext(_r);
  return /* @__PURE__ */ _.createElement(_r.Provider, {
    value: e || r
  }, t);
};
function Xp() {
  const n = nn(Ni), t = nn(_r);
  return {
    componentDisabled: n,
    componentSize: t
  };
}
var df = /* @__PURE__ */ Pt(function n() {
  kt(this, n);
}), hf = "CALC_UNIT", Yp = new RegExp(hf, "g");
function Bs(n) {
  return typeof n == "number" ? "".concat(n).concat(hf) : n;
}
var $p = /* @__PURE__ */ function(n) {
  kr(e, n);
  var t = os(e);
  function e(r, o) {
    var s;
    kt(this, e), s = t.call(this), q(wn(s), "result", ""), q(wn(s), "unitlessCssVar", void 0), q(wn(s), "lowPriority", void 0);
    var i = Se(r);
    return s.unitlessCssVar = o, r instanceof e ? s.result = "(".concat(r.result, ")") : i === "number" ? s.result = Bs(r) : i === "string" && (s.result = r), s;
  }
  return Pt(e, [{
    key: "add",
    value: function(o) {
      return o instanceof e ? this.result = "".concat(this.result, " + ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " + ").concat(Bs(o))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(o) {
      return o instanceof e ? this.result = "".concat(this.result, " - ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " - ").concat(Bs(o))), this.lowPriority = !0, this;
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
      var s = this, i = o || {}, a = i.unit, c = !0;
      return typeof a == "boolean" ? c = a : Array.from(this.unitlessCssVar).some(function(l) {
        return s.result.includes(l);
      }) && (c = !1), this.result = this.result.replace(Yp, c ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), e;
}(df), Gp = /* @__PURE__ */ function(n) {
  kr(e, n);
  var t = os(e);
  function e(r) {
    var o;
    return kt(this, e), o = t.call(this), q(wn(o), "result", 0), r instanceof e ? o.result = r.result : typeof r == "number" && (o.result = r), o;
  }
  return Pt(e, [{
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
}(df), Kp = function(t, e) {
  var r = t === "css" ? $p : Gp;
  return function(o) {
    return new r(o, e);
  };
}, Rc = function(t, e) {
  return "".concat([e, t.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function ji(n) {
  var t = _.useRef();
  t.current = n;
  var e = _.useCallback(function() {
    for (var r, o = arguments.length, s = new Array(o), i = 0; i < o; i++)
      s[i] = arguments[i];
    return (r = t.current) === null || r === void 0 ? void 0 : r.call.apply(r, [t].concat(s));
  }, []);
  return e;
}
function Li(n) {
  var t = _.useRef(!1), e = _.useState(n), r = le(e, 2), o = r[0], s = r[1];
  _.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function i(a, c) {
    c && t.current || s(a);
  }
  return [o, i];
}
function kc(n, t, e, r) {
  var o = V({}, t[n]);
  if (r != null && r.deprecatedTokens) {
    var s = r.deprecatedTokens;
    s.forEach(function(a) {
      var c = le(a, 2), l = c[0], f = c[1];
      if (process.env.NODE_ENV !== "production" && on(!(o != null && o[l]), "Component Token `".concat(String(l), "` of ").concat(String(n), " is deprecated. Please use `").concat(String(f), "` instead.")), o != null && o[l] || o != null && o[f]) {
        var d;
        (d = o[f]) !== null && d !== void 0 || (o[f] = o == null ? void 0 : o[l]);
      }
    });
  }
  var i = V(V({}, e), o);
  return Object.keys(i).forEach(function(a) {
    i[a] === t[a] && delete i[a];
  }), i;
}
var xf = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", Di = !0;
function fs() {
  for (var n = arguments.length, t = new Array(n), e = 0; e < n; e++)
    t[e] = arguments[e];
  if (!xf)
    return Object.assign.apply(Object, [{}].concat(t));
  Di = !1;
  var r = {};
  return t.forEach(function(o) {
    if (Se(o) === "object") {
      var s = Object.keys(o);
      s.forEach(function(i) {
        Object.defineProperty(r, i, {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return o[i];
          }
        });
      });
    }
  }), Di = !0, r;
}
var Pc = {};
function Jp() {
}
var Zp = function(t) {
  var e, r = t, o = Jp;
  return xf && typeof Proxy < "u" && (e = /* @__PURE__ */ new Set(), r = new Proxy(t, {
    get: function(i, a) {
      if (Di) {
        var c;
        (c = e) === null || c === void 0 || c.add(a);
      }
      return i[a];
    }
  }), o = function(i, a) {
    var c;
    Pc[i] = {
      global: Array.from(e),
      component: V(V({}, (c = Pc[i]) === null || c === void 0 ? void 0 : c.component), a)
    };
  }), {
    token: r,
    keys: e,
    flush: o
  };
};
function Ic(n, t, e) {
  if (typeof e == "function") {
    var r;
    return e(fs(t, (r = t[n]) !== null && r !== void 0 ? r : {}));
  }
  return e ?? {};
}
function Qp(n) {
  return n === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++)
        r[o] = arguments[o];
      return "max(".concat(r.map(function(s) {
        return Oo(s);
      }).join(","), ")");
    },
    min: function() {
      for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++)
        r[o] = arguments[o];
      return "min(".concat(r.map(function(s) {
        return Oo(s);
      }).join(","), ")");
    }
  };
}
var em = 1e3 * 60 * 10, tm = /* @__PURE__ */ function() {
  function n() {
    kt(this, n), q(this, "map", /* @__PURE__ */ new Map()), q(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), q(this, "nextID", 0), q(this, "lastAccessBeat", /* @__PURE__ */ new Map()), q(this, "accessBeat", 0);
  }
  return Pt(n, [{
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
      var r = this, o = e.map(function(s) {
        return s && Se(s) === "object" ? "obj_".concat(r.getObjectID(s)) : "".concat(Se(s), "_").concat(s);
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
        this.lastAccessBeat.forEach(function(o, s) {
          r - o > em && (e.map.delete(s), e.lastAccessBeat.delete(s));
        }), this.accessBeat = 0;
      }
    }
  }]), n;
}(), Nc = new tm();
function nm(n, t) {
  return Ve.useMemo(function() {
    var e = Nc.get(t);
    if (e)
      return e;
    var r = n();
    return Nc.set(t, r), r;
  }, t);
}
var rm = function() {
  return {};
};
function om(n) {
  var t = n.useCSP, e = t === void 0 ? rm : t, r = n.useToken, o = n.usePrefix, s = n.getResetStyles, i = n.getCommonStyle, a = n.getCompUnitless;
  function c(u, v, g, h) {
    var p = Array.isArray(u) ? u[0] : u;
    function w(N) {
      return "".concat(String(p)).concat(N.slice(0, 1).toUpperCase()).concat(N.slice(1));
    }
    var S = (h == null ? void 0 : h.unitless) || {}, x = typeof a == "function" ? a(u) : {}, T = V(V({}, x), {}, q({}, w("zIndexPopup"), !0));
    Object.keys(S).forEach(function(N) {
      T[w(N)] = S[N];
    });
    var b = V(V({}, h), {}, {
      unitless: T,
      prefixToken: w
    }), O = f(u, v, g, b), C = l(p, g, b);
    return function(N) {
      var z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : N, $ = O(N, z), oe = le($, 2), K = oe[1], B = C(z), W = le(B, 2), H = W[0], te = W[1];
      return [H, K, te];
    };
  }
  function l(u, v, g) {
    var h = g.unitless, p = g.injectStyle, w = p === void 0 ? !0 : p, S = g.prefixToken, x = g.ignore, T = function(C) {
      var N = C.rootCls, z = C.cssVar, $ = z === void 0 ? {} : z, oe = r(), K = oe.realToken;
      return mp({
        path: [u],
        prefix: $.prefix,
        key: $.key,
        unitless: h,
        ignore: x,
        token: K,
        scope: N
      }, function() {
        var B = Ic(u, K, v), W = kc(u, K, B, {
          deprecatedTokens: g == null ? void 0 : g.deprecatedTokens
        });
        return Object.keys(B).forEach(function(H) {
          W[S(H)] = W[H], delete W[H];
        }), W;
      }), null;
    }, b = function(C) {
      var N = r(), z = N.cssVar;
      return [function($) {
        return w && z ? /* @__PURE__ */ Ve.createElement(Ve.Fragment, null, /* @__PURE__ */ Ve.createElement(T, {
          rootCls: C,
          cssVar: z,
          component: u
        }), $) : $;
      }, z == null ? void 0 : z.key];
    };
    return b;
  }
  function f(u, v, g) {
    var h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, p = Array.isArray(u) ? u : [u, u], w = le(p, 1), S = w[0], x = p.join("-"), T = n.layer || {
      name: "antd"
    };
    return function(b) {
      var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : b, C = r(), N = C.theme, z = C.realToken, $ = C.hashId, oe = C.token, K = C.cssVar, B = o(), W = B.rootPrefixCls, H = B.iconPrefixCls, te = e(), Z = K ? "css" : "js", Q = nm(function() {
        var he = /* @__PURE__ */ new Set();
        return K && Object.keys(h.unitless || {}).forEach(function(fe) {
          he.add(uo(fe, K.prefix)), he.add(uo(fe, Rc(S, K.prefix)));
        }), Kp(Z, he);
      }, [Z, S, K == null ? void 0 : K.prefix]), ee = Qp(Z), ae = ee.max, se = ee.min, J = {
        theme: N,
        token: oe,
        hashId: $,
        nonce: function() {
          return te.nonce;
        },
        clientOnly: h.clientOnly,
        layer: T,
        // antd is always at top of styles
        order: h.order || -999
      };
      typeof s == "function" && gi(V(V({}, J), {}, {
        clientOnly: !1,
        path: ["Shared", W]
      }), function() {
        return s(oe, {
          prefix: {
            rootPrefixCls: W,
            iconPrefixCls: H
          },
          csp: te
        });
      });
      var ne = gi(V(V({}, J), {}, {
        path: [x, b, H]
      }), function() {
        if (h.injectStyle === !1)
          return [];
        var he = Zp(oe), fe = he.token, pe = he.flush, P = Ic(S, z, g), j = ".".concat(b), I = kc(S, z, P, {
          deprecatedTokens: h.deprecatedTokens
        });
        K && P && Se(P) === "object" && Object.keys(P).forEach(function(X) {
          P[X] = "var(".concat(uo(X, Rc(S, K.prefix)), ")");
        });
        var L = fs(fe, {
          componentCls: j,
          prefixCls: b,
          iconCls: ".".concat(H),
          antCls: ".".concat(W),
          calc: Q,
          // @ts-ignore
          max: ae,
          // @ts-ignore
          min: se
        }, K ? P : I), y = v(L, {
          hashId: $,
          prefixCls: b,
          rootPrefixCls: W,
          iconPrefixCls: H
        });
        pe(S, I);
        var F = typeof i == "function" ? i(L, b, O, h.resetFont) : null;
        return [h.resetStyle === !1 ? null : F, y];
      });
      return [ne, $];
    };
  }
  function d(u, v, g) {
    var h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, p = f(u, v, g, V({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, h)), w = function(x) {
      var T = x.prefixCls, b = x.rootCls, O = b === void 0 ? T : b;
      return p(T, O), null;
    };
    return process.env.NODE_ENV !== "production" && (w.displayName = "SubStyle_".concat(String(Array.isArray(u) ? u.join(".") : u))), w;
  }
  return {
    genStyleHooks: c,
    genSubStyleComponent: d,
    genComponentStyleHook: f
  };
}
const sm = "5.24.6";
function Fs(n) {
  return n >= 0 && n <= 255;
}
function Yr(n, t) {
  const {
    r: e,
    g: r,
    b: o,
    a: s
  } = new ze(n).toRgb();
  if (s < 1)
    return n;
  const {
    r: i,
    g: a,
    b: c
  } = new ze(t).toRgb();
  for (let l = 0.01; l <= 1; l += 0.01) {
    const f = Math.round((e - i * (1 - l)) / l), d = Math.round((r - a * (1 - l)) / l), u = Math.round((o - c * (1 - l)) / l);
    if (Fs(f) && Fs(d) && Fs(u))
      return new ze({
        r: f,
        g: d,
        b: u,
        a: Math.round(l * 100) / 100
      }).toRgbString();
  }
  return new ze({
    r: e,
    g: r,
    b: o,
    a: 1
  }).toRgbString();
}
var im = function(n, t) {
  var e = {};
  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && t.indexOf(r) < 0 && (e[r] = n[r]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(n); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(n, r[o]) && (e[r[o]] = n[r[o]]);
  return e;
};
function pf(n) {
  const {
    override: t
  } = n, e = im(n, ["override"]), r = Object.assign({}, t);
  Object.keys(wr).forEach((u) => {
    delete r[u];
  });
  const o = Object.assign(Object.assign({}, e), r), s = 480, i = 576, a = 768, c = 992, l = 1200, f = 1600;
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
    screenXS: s,
    screenXSMin: s,
    screenXSMax: i - 1,
    screenSM: i,
    screenSMMin: i,
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
      0 1px 2px -2px ${new ze("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new ze("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new ze("rgba(0, 0, 0, 0.09)").toRgbString()}
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
var jc = function(n, t) {
  var e = {};
  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && t.indexOf(r) < 0 && (e[r] = n[r]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(n); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(n, r[o]) && (e[r[o]] = n[r[o]]);
  return e;
};
const mf = {
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
}, am = {
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
}, cm = {
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
}, gf = (n, t, e) => {
  const r = e.getDerivativeToken(n), {
    override: o
  } = t, s = jc(t, ["override"]);
  let i = Object.assign(Object.assign({}, r), {
    override: o
  });
  return i = pf(i), s && Object.entries(s).forEach((a) => {
    let [c, l] = a;
    const {
      theme: f
    } = l, d = jc(l, ["theme"]);
    let u = d;
    f && (u = gf(Object.assign(Object.assign({}, i), d), {
      override: d
    }, f)), i[c] = u;
  }), i;
};
function Sa() {
  const {
    token: n,
    hashed: t,
    theme: e,
    override: r,
    cssVar: o
  } = Ve.useContext(uf), s = `${sm}-${t || ""}`, i = e || lf, [a, c, l] = Vx(i, [wr, n], {
    salt: s,
    override: r,
    getComputedToken: gf,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: pf,
    cssVar: o && {
      prefix: o.prefix,
      key: o.key,
      unitless: mf,
      ignore: am,
      preserve: cm
    }
  });
  return [i, l, t ? c : "", a, o];
}
const vf = function(n) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
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
    fontFamily: t ? "inherit" : n.fontFamily
  };
}, lm = () => ({
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
}), um = (n) => ({
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
}), fm = (n, t, e, r) => {
  const o = `[class^="${t}"], [class*=" ${t}"]`, s = e ? `.${e}` : o, i = {
    boxSizing: "border-box",
    "&::before, &::after": {
      boxSizing: "border-box"
    }
  };
  let a = {};
  return r !== !1 && (a = {
    fontFamily: n.fontFamily,
    fontSize: n.fontSize
  }), {
    [s]: Object.assign(Object.assign(Object.assign({}, a), i), {
      [o]: i
    })
  };
}, bf = (n) => ({
  [`.${n}`]: Object.assign(Object.assign({}, lm()), {
    [`.${n} .${n}-icon`]: {
      display: "block"
    }
  })
}), {
  genStyleHooks: wa
} = om({
  usePrefix: () => {
    const {
      getPrefixCls: n,
      iconPrefixCls: t
    } = nn(rn);
    return {
      rootPrefixCls: n(),
      iconPrefixCls: t
    };
  },
  useToken: () => {
    const [n, t, e, r, o] = Sa();
    return {
      theme: n,
      realToken: t,
      hashId: e,
      token: r,
      cssVar: o
    };
  },
  useCSP: () => {
    const {
      csp: n
    } = nn(rn);
    return n ?? {};
  },
  getResetStyles: (n, t) => {
    var e;
    const r = um(n);
    return [r, {
      "&": r
    }, bf((e = t == null ? void 0 : t.prefix.iconPrefixCls) !== null && e !== void 0 ? e : ya)];
  },
  getCommonStyle: fm,
  getCompUnitless: () => mf
}), dm = (n, t) => {
  const [e, r] = Sa();
  return gi({
    token: r,
    hashId: "",
    path: ["ant-design-icons", n],
    nonce: () => t == null ? void 0 : t.nonce,
    layer: {
      name: "antd"
    }
  }, () => [bf(n)]);
}, hm = Object.assign({}, _), {
  useId: Lc
} = hm, xm = () => "", pm = typeof Lc > "u" ? xm : Lc;
function mm(n, t, e) {
  var r, o;
  const s = Qn("ConfigProvider"), i = n || {}, a = i.inherit === !1 || !t ? Object.assign(Object.assign({}, Pi), {
    hashed: (r = t == null ? void 0 : t.hashed) !== null && r !== void 0 ? r : Pi.hashed,
    cssVar: t == null ? void 0 : t.cssVar
  }) : t, c = pm();
  if (process.env.NODE_ENV !== "production") {
    const l = i.cssVar || a.cssVar, f = !!(typeof i.cssVar == "object" && (!((o = i.cssVar) === null || o === void 0) && o.key) || c);
    process.env.NODE_ENV !== "production" && s(!l || f, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return yu(() => {
    var l, f;
    if (!n)
      return t;
    const d = Object.assign({}, a.components);
    Object.keys(n.components || {}).forEach((g) => {
      d[g] = Object.assign(Object.assign({}, d[g]), n.components[g]);
    });
    const u = `css-var-${c.replace(/:/g, "")}`, v = ((l = i.cssVar) !== null && l !== void 0 ? l : a.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: e == null ? void 0 : e.prefixCls
    }, typeof a.cssVar == "object" ? a.cssVar : {}), typeof i.cssVar == "object" ? i.cssVar : {}), {
      key: typeof i.cssVar == "object" && ((f = i.cssVar) === null || f === void 0 ? void 0 : f.key) || u
    });
    return Object.assign(Object.assign(Object.assign({}, a), i), {
      token: Object.assign(Object.assign({}, a.token), i.token),
      components: d,
      cssVar: v
    });
  }, [i, a], (l, f) => l.some((d, u) => {
    const v = f[u];
    return !hx(d, v, !0);
  }));
}
var gm = ["children"], yf = /* @__PURE__ */ _.createContext({});
function vm(n) {
  var t = n.children, e = yr(n, gm);
  return /* @__PURE__ */ _.createElement(yf.Provider, {
    value: e
  }, t);
}
var bm = /* @__PURE__ */ function(n) {
  kr(e, n);
  var t = os(e);
  function e() {
    return kt(this, e), t.apply(this, arguments);
  }
  return Pt(e, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), e;
}(_.Component);
function ym(n) {
  var t = _.useReducer(function(a) {
    return a + 1;
  }, 0), e = le(t, 2), r = e[1], o = _.useRef(n), s = ji(function() {
    return o.current;
  }), i = ji(function(a) {
    o.current = typeof a == "function" ? a(o.current) : a, r();
  });
  return [s, i];
}
var Zt = "none", $r = "appear", Gr = "enter", Kr = "leave", Dc = "none", _t = "prepare", Nn = "start", jn = "active", Ea = "end", Sf = "prepared";
function Mc(n, t) {
  var e = {};
  return e[n.toLowerCase()] = t.toLowerCase(), e["Webkit".concat(n)] = "webkit".concat(t), e["Moz".concat(n)] = "moz".concat(t), e["ms".concat(n)] = "MS".concat(t), e["O".concat(n)] = "o".concat(t.toLowerCase()), e;
}
function Sm(n, t) {
  var e = {
    animationend: Mc("Animation", "AnimationEnd"),
    transitionend: Mc("Transition", "TransitionEnd")
  };
  return n && ("AnimationEvent" in t || delete e.animationend.animation, "TransitionEvent" in t || delete e.transitionend.transition), e;
}
var wm = Sm($t(), typeof window < "u" ? window : {}), wf = {};
if ($t()) {
  var Em = document.createElement("div");
  wf = Em.style;
}
var Jr = {};
function Ef(n) {
  if (Jr[n])
    return Jr[n];
  var t = wm[n];
  if (t)
    for (var e = Object.keys(t), r = e.length, o = 0; o < r; o += 1) {
      var s = e[o];
      if (Object.prototype.hasOwnProperty.call(t, s) && s in wf)
        return Jr[n] = t[s], Jr[n];
    }
  return "";
}
var _f = Ef("animationend"), Cf = Ef("transitionend"), Af = !!(_f && Cf), Bc = _f || "animationend", Fc = Cf || "transitionend";
function zc(n, t) {
  if (!n) return null;
  if (Se(n) === "object") {
    var e = t.replace(/-\w/g, function(r) {
      return r[1].toUpperCase();
    });
    return n[e];
  }
  return "".concat(n, "-").concat(t);
}
const _m = function(n) {
  var t = Ye();
  function e(o) {
    o && (o.removeEventListener(Fc, n), o.removeEventListener(Bc, n));
  }
  function r(o) {
    t.current && t.current !== o && e(t.current), o && o !== t.current && (o.addEventListener(Fc, n), o.addEventListener(Bc, n), t.current = o);
  }
  return _.useEffect(function() {
    return function() {
      e(t.current);
    };
  }, []), [r, e];
};
var Tf = $t() ? k0 : ct;
const Cm = function() {
  var n = _.useRef(null);
  function t() {
    To.cancel(n.current);
  }
  function e(r) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var s = To(function() {
      o <= 1 ? r({
        isCanceled: function() {
          return s !== n.current;
        }
      }) : e(r, o - 1);
    });
    n.current = s;
  }
  return _.useEffect(function() {
    return function() {
      t();
    };
  }, []), [e, t];
};
var Am = [_t, Nn, jn, Ea], Tm = [_t, Sf], Of = !1, Om = !0;
function Rf(n) {
  return n === jn || n === Ea;
}
const Rm = function(n, t, e) {
  var r = Li(Dc), o = le(r, 2), s = o[0], i = o[1], a = Cm(), c = le(a, 2), l = c[0], f = c[1];
  function d() {
    i(_t, !0);
  }
  var u = t ? Tm : Am;
  return Tf(function() {
    if (s !== Dc && s !== Ea) {
      var v = u.indexOf(s), g = u[v + 1], h = e(s);
      h === Of ? i(g, !0) : g && l(function(p) {
        function w() {
          p.isCanceled() || i(g, !0);
        }
        h === !0 ? w() : Promise.resolve(h).then(w);
      });
    }
  }, [n, s]), _.useEffect(function() {
    return function() {
      f();
    };
  }, []), [d, s];
};
function km(n, t, e, r) {
  var o = r.motionEnter, s = o === void 0 ? !0 : o, i = r.motionAppear, a = i === void 0 ? !0 : i, c = r.motionLeave, l = c === void 0 ? !0 : c, f = r.motionDeadline, d = r.motionLeaveImmediately, u = r.onAppearPrepare, v = r.onEnterPrepare, g = r.onLeavePrepare, h = r.onAppearStart, p = r.onEnterStart, w = r.onLeaveStart, S = r.onAppearActive, x = r.onEnterActive, T = r.onLeaveActive, b = r.onAppearEnd, O = r.onEnterEnd, C = r.onLeaveEnd, N = r.onVisibleChanged, z = Li(), $ = le(z, 2), oe = $[0], K = $[1], B = ym(Zt), W = le(B, 2), H = W[0], te = W[1], Z = Li(null), Q = le(Z, 2), ee = Q[0], ae = Q[1], se = H(), J = Ye(!1), ne = Ye(null);
  function he() {
    return e();
  }
  var fe = Ye(!1);
  function pe() {
    te(Zt), ae(null, !0);
  }
  var P = ji(function(De) {
    var _e = H();
    if (_e !== Zt) {
      var Ke = he();
      if (!(De && !De.deadline && De.target !== Ke)) {
        var St = fe.current, pt;
        _e === $r && St ? pt = b == null ? void 0 : b(Ke, De) : _e === Gr && St ? pt = O == null ? void 0 : O(Ke, De) : _e === Kr && St && (pt = C == null ? void 0 : C(Ke, De)), St && pt !== !1 && pe();
      }
    }
  }), j = _m(P), I = le(j, 1), L = I[0], y = function(_e) {
    switch (_e) {
      case $r:
        return q(q(q({}, _t, u), Nn, h), jn, S);
      case Gr:
        return q(q(q({}, _t, v), Nn, p), jn, x);
      case Kr:
        return q(q(q({}, _t, g), Nn, w), jn, T);
      default:
        return {};
    }
  }, F = _.useMemo(function() {
    return y(se);
  }, [se]), X = Rm(se, !n, function(De) {
    if (De === _t) {
      var _e = F[_t];
      return _e ? _e(he()) : Of;
    }
    if (Re in F) {
      var Ke;
      ae(((Ke = F[Re]) === null || Ke === void 0 ? void 0 : Ke.call(F, he(), null)) || null);
    }
    return Re === jn && se !== Zt && (L(he()), f > 0 && (clearTimeout(ne.current), ne.current = setTimeout(function() {
      P({
        deadline: !0
      });
    }, f))), Re === Sf && pe(), Om;
  }), M = le(X, 2), ot = M[0], Re = M[1], xt = Rf(Re);
  fe.current = xt;
  var Nt = Ye(null);
  Tf(function() {
    if (!(J.current && Nt.current === t)) {
      K(t);
      var De = J.current;
      J.current = !0;
      var _e;
      !De && t && a && (_e = $r), De && t && s && (_e = Gr), (De && !t && l || !De && d && !t && l) && (_e = Kr);
      var Ke = y(_e);
      _e && (n || Ke[_t]) ? (te(_e), ot()) : te(Zt), Nt.current = t;
    }
  }, [t]), ct(function() {
    // Cancel appear
    (se === $r && !a || // Cancel enter
    se === Gr && !s || // Cancel leave
    se === Kr && !l) && te(Zt);
  }, [a, s, l]), ct(function() {
    return function() {
      J.current = !1, clearTimeout(ne.current);
    };
  }, []);
  var dt = _.useRef(!1);
  ct(function() {
    oe && (dt.current = !0), oe !== void 0 && se === Zt && ((dt.current || oe) && (N == null || N(oe)), dt.current = !0);
  }, [oe, se]);
  var jt = ee;
  return F[_t] && Re === Nn && (jt = V({
    transition: "none"
  }, jt)), [se, Re, jt, oe ?? t];
}
function Pm(n) {
  var t = n;
  Se(n) === "object" && (t = n.transitionSupport);
  function e(o, s) {
    return !!(o.motionName && t && s !== !1);
  }
  var r = /* @__PURE__ */ _.forwardRef(function(o, s) {
    var i = o.visible, a = i === void 0 ? !0 : i, c = o.removeOnLeave, l = c === void 0 ? !0 : c, f = o.forceRender, d = o.children, u = o.motionName, v = o.leavedClassName, g = o.eventProps, h = _.useContext(yf), p = h.motion, w = e(o, p), S = Ye(), x = Ye();
    function T() {
      try {
        return S.current instanceof HTMLElement ? S.current : Jh(x.current);
      } catch {
        return null;
      }
    }
    var b = km(w, a, T, o), O = le(b, 4), C = O[0], N = O[1], z = O[2], $ = O[3], oe = _.useRef($);
    $ && (oe.current = !0);
    var K = _.useCallback(function(Q) {
      S.current = Q, Su(s, Q);
    }, [s]), B, W = V(V({}, g), {}, {
      visible: a
    });
    if (!d)
      B = null;
    else if (C === Zt)
      $ ? B = d(V({}, W), K) : !l && oe.current && v ? B = d(V(V({}, W), {}, {
        className: v
      }), K) : f || !l && !v ? B = d(V(V({}, W), {}, {
        style: {
          display: "none"
        }
      }), K) : B = null;
    else {
      var H;
      N === _t ? H = "prepare" : Rf(N) ? H = "active" : N === Nn && (H = "start");
      var te = zc(u, "".concat(C, "-").concat(H));
      B = d(V(V({}, W), {}, {
        className: rt(zc(u, C), q(q({}, te, te && H), u, typeof u == "string")),
        style: z
      }), K);
    }
    if (/* @__PURE__ */ _.isValidElement(B) && rx(B)) {
      var Z = ox(B);
      Z || (B = /* @__PURE__ */ _.cloneElement(B, {
        ref: K
      }));
    }
    return /* @__PURE__ */ _.createElement(bm, {
      ref: x
    }, B);
  });
  return r.displayName = "CSSMotion", r;
}
const kf = Pm(Af);
var Mi = "add", Bi = "keep", Fi = "remove", zs = "removed";
function Im(n) {
  var t;
  return n && Se(n) === "object" && "key" in n ? t = n : t = {
    key: n
  }, V(V({}, t), {}, {
    key: String(t.key)
  });
}
function zi() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return n.map(Im);
}
function Nm() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], e = [], r = 0, o = t.length, s = zi(n), i = zi(t);
  s.forEach(function(l) {
    for (var f = !1, d = r; d < o; d += 1) {
      var u = i[d];
      if (u.key === l.key) {
        r < d && (e = e.concat(i.slice(r, d).map(function(v) {
          return V(V({}, v), {}, {
            status: Mi
          });
        })), r = d), e.push(V(V({}, u), {}, {
          status: Bi
        })), r += 1, f = !0;
        break;
      }
    }
    f || e.push(V(V({}, l), {}, {
      status: Fi
    }));
  }), r < o && (e = e.concat(i.slice(r).map(function(l) {
    return V(V({}, l), {}, {
      status: Mi
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
      return d !== l || u !== Fi;
    }), e.forEach(function(f) {
      f.key === l && (f.status = Bi);
    });
  }), e;
}
var jm = ["component", "children", "onVisibleChanged", "onAllRemoved"], Lm = ["status"], Dm = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function Mm(n) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : kf, e = /* @__PURE__ */ function(r) {
    kr(s, r);
    var o = os(s);
    function s() {
      var i;
      kt(this, s);
      for (var a = arguments.length, c = new Array(a), l = 0; l < a; l++)
        c[l] = arguments[l];
      return i = o.call.apply(o, [this].concat(c)), q(wn(i), "state", {
        keyEntities: []
      }), q(wn(i), "removeKey", function(f) {
        i.setState(function(d) {
          var u = d.keyEntities.map(function(v) {
            return v.key !== f ? v : V(V({}, v), {}, {
              status: zs
            });
          });
          return {
            keyEntities: u
          };
        }, function() {
          var d = i.state.keyEntities, u = d.filter(function(v) {
            var g = v.status;
            return g !== zs;
          }).length;
          u === 0 && i.props.onAllRemoved && i.props.onAllRemoved();
        });
      }), i;
    }
    return Pt(s, [{
      key: "render",
      value: function() {
        var a = this, c = this.state.keyEntities, l = this.props, f = l.component, d = l.children, u = l.onVisibleChanged;
        l.onAllRemoved;
        var v = yr(l, jm), g = f || _.Fragment, h = {};
        return Dm.forEach(function(p) {
          h[p] = v[p], delete v[p];
        }), delete v.keys, /* @__PURE__ */ _.createElement(g, v, c.map(function(p, w) {
          var S = p.status, x = yr(p, Lm), T = S === Mi || S === Bi;
          return /* @__PURE__ */ _.createElement(t, Vt({}, h, {
            key: x.key,
            visible: T,
            eventProps: x,
            onVisibleChanged: function(O) {
              u == null || u(O, {
                key: x.key
              }), O || a.removeKey(x.key);
            }
          }), function(b, O) {
            return d(V(V({}, b), {}, {
              index: w
            }), O);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(a, c) {
        var l = a.keys, f = c.keyEntities, d = zi(l), u = Nm(f, d);
        return {
          keyEntities: u.filter(function(v) {
            var g = f.find(function(h) {
              var p = h.key;
              return v.key === p;
            });
            return !(g && g.status === zs && v.status === Fi);
          })
        };
      }
    }]), s;
  }(_.Component);
  return q(e, "defaultProps", {
    component: "div"
  }), e;
}
Mm(Af);
function Bm(n) {
  const {
    children: t
  } = n, [, e] = Sa(), {
    motion: r
  } = e, o = _.useRef(!1);
  return o.current = o.current || r === !1, o.current ? /* @__PURE__ */ _.createElement(vm, {
    motion: r
  }, t) : t;
}
const Pf = /* @__PURE__ */ _.memo((n) => {
  let {
    dropdownMatchSelectWidth: t
  } = n;
  return Qn("ConfigProvider").deprecated(t === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
process.env.NODE_ENV !== "production" && (Pf.displayName = "PropWarning");
const Fm = process.env.NODE_ENV !== "production" ? Pf : () => null;
var zm = function(n, t) {
  var e = {};
  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && t.indexOf(r) < 0 && (e[r] = n[r]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(n); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(n, r[o]) && (e[r[o]] = n[r[o]]);
  return e;
};
let Vi = !1;
process.env.NODE_ENV;
const Vm = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let If;
function Hm() {
  return If || Ii;
}
function Um(n) {
  return Object.keys(n).some((t) => t.endsWith("Color"));
}
const qm = (n) => {
  const {
    prefixCls: t,
    iconPrefixCls: e,
    theme: r,
    holderRender: o
  } = n;
  t !== void 0 && (If = t), r && Um(r) && (process.env.NODE_ENV !== "production" && ls(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), Up(Hm(), r));
}, Wm = (n) => {
  const {
    children: t,
    csp: e,
    autoInsertSpaceInButton: r,
    alert: o,
    anchor: s,
    form: i,
    locale: a,
    componentSize: c,
    direction: l,
    space: f,
    splitter: d,
    virtual: u,
    dropdownMatchSelectWidth: v,
    popupMatchSelectWidth: g,
    popupOverflow: h,
    legacyLocale: p,
    parentContext: w,
    iconPrefixCls: S,
    theme: x,
    componentDisabled: T,
    segmented: b,
    statistic: O,
    spin: C,
    calendar: N,
    carousel: z,
    cascader: $,
    collapse: oe,
    typography: K,
    checkbox: B,
    descriptions: W,
    divider: H,
    drawer: te,
    skeleton: Z,
    steps: Q,
    image: ee,
    layout: ae,
    list: se,
    mentions: J,
    modal: ne,
    progress: he,
    result: fe,
    slider: pe,
    breadcrumb: P,
    menu: j,
    pagination: I,
    input: L,
    textArea: y,
    empty: F,
    badge: X,
    radio: M,
    rate: ot,
    switch: Re,
    transfer: xt,
    avatar: Nt,
    message: dt,
    tag: jt,
    table: De,
    card: _e,
    tabs: Ke,
    timeline: St,
    timePicker: pt,
    upload: an,
    notification: cn,
    tree: On,
    colorPicker: ln,
    datePicker: un,
    rangePicker: k,
    flex: E,
    wave: Ae,
    dropdown: we,
    warning: ke,
    tour: Y,
    tooltip: Te,
    popover: ye,
    popconfirm: wt,
    floatButtonGroup: Je,
    variant: Ht,
    inputNumber: fn,
    treeSelect: Me
  } = n, Ze = _.useCallback((Ie, m) => {
    const {
      prefixCls: R
    } = n;
    if (m)
      return m;
    const D = R || w.getPrefixCls("");
    return Ie ? `${D}-${Ie}` : D;
  }, [w.getPrefixCls, n.prefixCls]), Qe = S || w.iconPrefixCls || ya, Lt = e || w.csp;
  dm(Qe, Lt);
  const st = mm(x, w.theme, {
    prefixCls: Ze("")
  });
  process.env.NODE_ENV !== "production" && (Vi = Vi || !!st);
  const Gt = {
    csp: Lt,
    autoInsertSpaceInButton: r,
    alert: o,
    anchor: s,
    locale: a || p,
    direction: l,
    space: f,
    splitter: d,
    virtual: u,
    popupMatchSelectWidth: g ?? v,
    popupOverflow: h,
    getPrefixCls: Ze,
    iconPrefixCls: Qe,
    theme: st,
    segmented: b,
    statistic: O,
    spin: C,
    calendar: N,
    carousel: z,
    cascader: $,
    collapse: oe,
    typography: K,
    checkbox: B,
    descriptions: W,
    divider: H,
    drawer: te,
    skeleton: Z,
    steps: Q,
    image: ee,
    input: L,
    textArea: y,
    layout: ae,
    list: se,
    mentions: J,
    modal: ne,
    progress: he,
    result: fe,
    slider: pe,
    breadcrumb: P,
    menu: j,
    pagination: I,
    empty: F,
    badge: X,
    radio: M,
    rate: ot,
    switch: Re,
    transfer: xt,
    avatar: Nt,
    message: dt,
    tag: jt,
    table: De,
    card: _e,
    tabs: Ke,
    timeline: St,
    timePicker: pt,
    upload: an,
    notification: cn,
    tree: On,
    colorPicker: ln,
    datePicker: un,
    rangePicker: k,
    flex: E,
    wave: Ae,
    dropdown: we,
    warning: ke,
    tour: Y,
    tooltip: Te,
    popover: ye,
    popconfirm: wt,
    floatButtonGroup: Je,
    variant: Ht,
    inputNumber: fn,
    treeSelect: Me
  };
  process.env.NODE_ENV !== "production" && Qn("ConfigProvider")(!("autoInsertSpaceInButton" in n), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const mt = Object.assign({}, w);
  Object.keys(Gt).forEach((Ie) => {
    Gt[Ie] !== void 0 && (mt[Ie] = Gt[Ie]);
  }), Vm.forEach((Ie) => {
    const m = n[Ie];
    m && (mt[Ie] = m);
  }), typeof r < "u" && (mt.button = Object.assign({
    autoInsertSpace: r
  }, mt.button));
  const Kt = yu(() => mt, mt, (Ie, m) => {
    const R = Object.keys(Ie), D = Object.keys(m);
    return R.length !== D.length || R.some((G) => Ie[G] !== m[G]);
  }), {
    layer: or
  } = _.useContext(Pr), jr = _.useMemo(() => ({
    prefixCls: Qe,
    csp: Lt,
    layer: or ? "antd" : void 0
  }), [Qe, Lt, or]);
  let Xe = /* @__PURE__ */ _.createElement(_.Fragment, null, /* @__PURE__ */ _.createElement(Fm, {
    dropdownMatchSelectWidth: v
  }), t);
  const Lr = _.useMemo(() => {
    var Ie, m, R, D;
    return Sp(((Ie = us.Form) === null || Ie === void 0 ? void 0 : Ie.defaultValidateMessages) || {}, ((R = (m = Kt.locale) === null || m === void 0 ? void 0 : m.Form) === null || R === void 0 ? void 0 : R.defaultValidateMessages) || {}, ((D = Kt.form) === null || D === void 0 ? void 0 : D.validateMessages) || {}, (i == null ? void 0 : i.validateMessages) || {});
  }, [Kt, i == null ? void 0 : i.validateMessages]);
  Object.keys(Lr).length > 0 && (Xe = /* @__PURE__ */ _.createElement(Ep.Provider, {
    value: Lr
  }, Xe)), a && (Xe = /* @__PURE__ */ _.createElement(of, {
    locale: a,
    _ANT_MARK__: rf
  }, Xe)), Xe = /* @__PURE__ */ _.createElement(va.Provider, {
    value: jr
  }, Xe), c && (Xe = /* @__PURE__ */ _.createElement(Wp, {
    size: c
  }, Xe)), Xe = /* @__PURE__ */ _.createElement(Bm, null, Xe);
  const ys = _.useMemo(() => {
    const Ie = st || {}, {
      algorithm: m,
      token: R,
      components: D,
      cssVar: G
    } = Ie, xe = zm(Ie, ["algorithm", "token", "components", "cssVar"]), me = m && (!Array.isArray(m) || m.length > 0) ? di(m) : lf, ue = {};
    Object.entries(D || {}).forEach((et) => {
      let [Pe, Ne] = et;
      const je = Object.assign({}, Ne);
      "algorithm" in je && (je.algorithm === !0 ? je.theme = me : (Array.isArray(je.algorithm) || typeof je.algorithm == "function") && (je.theme = di(je.algorithm)), delete je.algorithm), ue[Pe] = je;
    });
    const ce = Object.assign(Object.assign({}, wr), R);
    return Object.assign(Object.assign({}, xe), {
      theme: me,
      token: ce,
      components: ue,
      override: Object.assign({
        override: ce
      }, ue),
      cssVar: G
    });
  }, [st]);
  return x && (Xe = /* @__PURE__ */ _.createElement(uf.Provider, {
    value: ys
  }, Xe)), Kt.warning && (Xe = /* @__PURE__ */ _.createElement(tf.Provider, {
    value: Kt.warning
  }, Xe)), T !== void 0 && (Xe = /* @__PURE__ */ _.createElement(qp, {
    disabled: T
  }, Xe)), /* @__PURE__ */ _.createElement(rn.Provider, {
    value: Kt
  }, Xe);
}, er = (n) => {
  const t = _.useContext(rn), e = _.useContext(nf);
  return /* @__PURE__ */ _.createElement(Wm, Object.assign({
    parentContext: t,
    legacyLocale: e
  }, n));
};
er.ConfigContext = rn;
er.SizeContext = _r;
er.config = qm;
er.useConfig = Xp;
Object.defineProperty(er, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && ls(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), _r)
});
process.env.NODE_ENV !== "production" && (er.displayName = "ConfigProvider");
var Xm = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
function Nf(n) {
  var t;
  return n == null || (t = n.getRootNode) === null || t === void 0 ? void 0 : t.call(n);
}
function Ym(n) {
  return Nf(n) instanceof ShadowRoot;
}
function $m(n) {
  return Ym(n) ? Nf(n) : null;
}
function Gm(n) {
  return n.replace(/-(.)/g, function(t, e) {
    return e.toUpperCase();
  });
}
function Km(n, t) {
  on(n, "[@ant-design/icons] ".concat(t));
}
function Vc(n) {
  return Se(n) === "object" && typeof n.name == "string" && typeof n.theme == "string" && (Se(n.icon) === "object" || typeof n.icon == "function");
}
function Hc() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(n).reduce(function(t, e) {
    var r = n[e];
    switch (e) {
      case "class":
        t.className = r, delete t.class;
        break;
      default:
        delete t[e], t[Gm(e)] = r;
    }
    return t;
  }, {});
}
function Hi(n, t, e) {
  return e ? /* @__PURE__ */ Ve.createElement(n.tag, V(V({
    key: t
  }, Hc(n.attrs)), e), (n.children || []).map(function(r, o) {
    return Hi(r, "".concat(t, "-").concat(n.tag, "-").concat(o));
  })) : /* @__PURE__ */ Ve.createElement(n.tag, V({
    key: t
  }, Hc(n.attrs)), (n.children || []).map(function(r, o) {
    return Hi(r, "".concat(t, "-").concat(n.tag, "-").concat(o));
  }));
}
function jf(n) {
  return Er(n)[0];
}
function Lf(n) {
  return n ? Array.isArray(n) ? n : [n] : [];
}
var Jm = `
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
`, Zm = function(t) {
  var e = nn(va), r = e.csp, o = e.prefixCls, s = e.layer, i = Jm;
  o && (i = i.replace(/anticon/g, o)), s && (i = "@layer ".concat(s, ` {
`).concat(i, `
}`)), ct(function() {
    var a = t.current, c = $m(a);
    En(i, "@ant-design-icons", {
      prepend: !s,
      csp: r,
      attachTo: c
    });
  }, []);
}, Qm = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], gr = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function e1(n) {
  var t = n.primaryColor, e = n.secondaryColor;
  gr.primaryColor = t, gr.secondaryColor = e || jf(t), gr.calculated = !!e;
}
function t1() {
  return V({}, gr);
}
var tr = function(t) {
  var e = t.icon, r = t.className, o = t.onClick, s = t.style, i = t.primaryColor, a = t.secondaryColor, c = yr(t, Qm), l = _.useRef(), f = gr;
  if (i && (f = {
    primaryColor: i,
    secondaryColor: a || jf(i)
  }), Zm(l), Km(Vc(e), "icon should be icon definiton, but got ".concat(e)), !Vc(e))
    return null;
  var d = e;
  return d && typeof d.icon == "function" && (d = V(V({}, d), {}, {
    icon: d.icon(f.primaryColor, f.secondaryColor)
  })), Hi(d.icon, "svg-".concat(d.name), V(V({
    className: r,
    onClick: o,
    style: s,
    "data-icon": d.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, c), {}, {
    ref: l
  }));
};
tr.displayName = "IconReact";
tr.getTwoToneColors = t1;
tr.setTwoToneColors = e1;
function Df(n) {
  var t = Lf(n), e = le(t, 2), r = e[0], o = e[1];
  return tr.setTwoToneColors({
    primaryColor: r,
    secondaryColor: o
  });
}
function n1() {
  var n = tr.getTwoToneColors();
  return n.calculated ? [n.primaryColor, n.secondaryColor] : n.primaryColor;
}
var r1 = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
Df(ko.primary);
var sn = /* @__PURE__ */ _.forwardRef(function(n, t) {
  var e = n.className, r = n.icon, o = n.spin, s = n.rotate, i = n.tabIndex, a = n.onClick, c = n.twoToneColor, l = yr(n, r1), f = _.useContext(va), d = f.prefixCls, u = d === void 0 ? "anticon" : d, v = f.rootClassName, g = rt(v, u, q(q({}, "".concat(u, "-").concat(r.name), !!r.name), "".concat(u, "-spin"), !!o || r.name === "loading"), e), h = i;
  h === void 0 && a && (h = -1);
  var p = s ? {
    msTransform: "rotate(".concat(s, "deg)"),
    transform: "rotate(".concat(s, "deg)")
  } : void 0, w = Lf(c), S = le(w, 2), x = S[0], T = S[1];
  return /* @__PURE__ */ _.createElement("span", Vt({
    role: "img",
    "aria-label": r.name
  }, l, {
    ref: t,
    tabIndex: h,
    onClick: a,
    className: g
  }), /* @__PURE__ */ _.createElement(tr, {
    icon: r,
    primaryColor: x,
    secondaryColor: T,
    style: p
  }));
});
sn.displayName = "AntdIcon";
sn.getTwoToneColor = n1;
sn.setTwoToneColor = Df;
var o1 = function(t, e) {
  return /* @__PURE__ */ _.createElement(sn, Vt({}, t, {
    ref: e,
    icon: Xm
  }));
}, Mf = /* @__PURE__ */ _.forwardRef(o1);
process.env.NODE_ENV !== "production" && (Mf.displayName = "CheckCircleFilled");
var s1 = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, i1 = function(t, e) {
  return /* @__PURE__ */ _.createElement(sn, Vt({}, t, {
    ref: e,
    icon: s1
  }));
}, Bf = /* @__PURE__ */ _.forwardRef(i1);
process.env.NODE_ENV !== "production" && (Bf.displayName = "CloseCircleFilled");
var a1 = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, c1 = function(t, e) {
  return /* @__PURE__ */ _.createElement(sn, Vt({}, t, {
    ref: e,
    icon: a1
  }));
}, Ff = /* @__PURE__ */ _.forwardRef(c1);
process.env.NODE_ENV !== "production" && (Ff.displayName = "CloseOutlined");
var l1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" }, u1 = function(t, e) {
  return /* @__PURE__ */ _.createElement(sn, Vt({}, t, {
    ref: e,
    icon: l1
  }));
}, zf = /* @__PURE__ */ _.forwardRef(u1);
process.env.NODE_ENV !== "production" && (zf.displayName = "ExclamationCircleFilled");
var f1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" }, d1 = function(t, e) {
  return /* @__PURE__ */ _.createElement(sn, Vt({}, t, {
    ref: e,
    icon: f1
  }));
}, Vf = /* @__PURE__ */ _.forwardRef(d1);
process.env.NODE_ENV !== "production" && (Vf.displayName = "InfoCircleFilled");
var h1 = `accept acceptCharset accessKey action allowFullScreen allowTransparency
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
    summary tabIndex target title type useMap value width wmode wrap`, x1 = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, p1 = "".concat(h1, " ").concat(x1).split(/[\s\n]+/), m1 = "aria-", g1 = "data-";
function Uc(n, t) {
  return n.indexOf(t) === 0;
}
function v1(n) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, e;
  t === !1 ? e = {
    aria: !0,
    data: !0,
    attr: !0
  } : t === !0 ? e = {
    aria: !0
  } : e = V({}, t);
  var r = {};
  return Object.keys(n).forEach(function(o) {
    // Aria
    (e.aria && (o === "role" || Uc(o, m1)) || // Data
    e.data && Uc(o, g1) || // Attr
    e.attr && p1.includes(o)) && (r[o] = n[o]);
  }), r;
}
const Hf = (n, t, e) => /* @__PURE__ */ Ve.isValidElement(n) ? /* @__PURE__ */ Ve.cloneElement(n, typeof e == "function" ? e(n.props || {}) : e) : t;
function b1(n, t) {
  return Hf(n, n, t);
}
const Zr = (n, t, e, r, o) => ({
  background: n,
  border: `${Oo(r.lineWidth)} ${r.lineType} ${t}`,
  [`${o}-icon`]: {
    color: e
  }
}), y1 = (n) => {
  const {
    componentCls: t,
    motionDurationSlow: e,
    marginXS: r,
    marginSM: o,
    fontSize: s,
    fontSizeLG: i,
    lineHeight: a,
    borderRadiusLG: c,
    motionEaseInOutCirc: l,
    withDescriptionIconSize: f,
    colorText: d,
    colorTextHeading: u,
    withDescriptionPadding: v,
    defaultPadding: g
  } = n;
  return {
    [t]: Object.assign(Object.assign({}, vf(n)), {
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
        fontSize: s,
        lineHeight: a
      },
      "&-message": {
        color: u
      },
      [`&${t}-motion-leave`]: {
        overflow: "hidden",
        opacity: 1,
        transition: `max-height ${e} ${l}, opacity ${e} ${l},
        padding-top ${e} ${l}, padding-bottom ${e} ${l},
        margin-bottom ${e} ${l}`
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
        fontSize: f,
        lineHeight: 0
      },
      [`${t}-message`]: {
        display: "block",
        marginBottom: r,
        color: u,
        fontSize: i
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
}, S1 = (n) => {
  const {
    componentCls: t,
    colorSuccess: e,
    colorSuccessBorder: r,
    colorSuccessBg: o,
    colorWarning: s,
    colorWarningBorder: i,
    colorWarningBg: a,
    colorError: c,
    colorErrorBorder: l,
    colorErrorBg: f,
    colorInfo: d,
    colorInfoBorder: u,
    colorInfoBg: v
  } = n;
  return {
    [t]: {
      "&-success": Zr(o, r, e, n, t),
      "&-info": Zr(v, u, d, n, t),
      "&-warning": Zr(a, i, s, n, t),
      "&-error": Object.assign(Object.assign({}, Zr(f, l, c, n, t)), {
        [`${t}-description > pre`]: {
          margin: 0,
          padding: 0
        }
      })
    }
  };
}, w1 = (n) => {
  const {
    componentCls: t,
    iconCls: e,
    motionDurationMid: r,
    marginXS: o,
    fontSizeIcon: s,
    colorIcon: i,
    colorIconHover: a
  } = n;
  return {
    [t]: {
      "&-action": {
        marginInlineStart: o
      },
      [`${t}-close-icon`]: {
        marginInlineStart: o,
        padding: 0,
        overflow: "hidden",
        fontSize: s,
        lineHeight: Oo(s),
        backgroundColor: "transparent",
        border: "none",
        outline: "none",
        cursor: "pointer",
        [`${e}-close`]: {
          color: i,
          transition: `color ${r}`,
          "&:hover": {
            color: a
          }
        }
      },
      "&-close-text": {
        color: i,
        transition: `color ${r}`,
        "&:hover": {
          color: a
        }
      }
    }
  };
}, E1 = (n) => ({
  withDescriptionIconSize: n.fontSizeHeading3,
  defaultPadding: `${n.paddingContentVerticalSM}px 12px`,
  withDescriptionPadding: `${n.paddingMD}px ${n.paddingContentHorizontalLG}px`
}), _1 = wa("Alert", (n) => [y1(n), S1(n), w1(n)], E1);
var qc = function(n, t) {
  var e = {};
  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && t.indexOf(r) < 0 && (e[r] = n[r]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(n); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(n, r[o]) && (e[r[o]] = n[r[o]]);
  return e;
};
const C1 = {
  success: Mf,
  info: Vf,
  error: Bf,
  warning: zf
}, A1 = (n) => {
  const {
    icon: t,
    prefixCls: e,
    type: r
  } = n, o = C1[r] || null;
  return t ? Hf(t, /* @__PURE__ */ _.createElement("span", {
    className: `${e}-icon`
  }, t), () => ({
    className: rt(`${e}-icon`, t.props.className)
  })) : /* @__PURE__ */ _.createElement(o, {
    className: `${e}-icon`
  });
}, T1 = (n) => {
  const {
    isClosable: t,
    prefixCls: e,
    closeIcon: r,
    handleClose: o,
    ariaProps: s
  } = n, i = r === !0 || r === void 0 ? /* @__PURE__ */ _.createElement(Ff, null) : r;
  return t ? /* @__PURE__ */ _.createElement("button", Object.assign({
    type: "button",
    onClick: o,
    className: `${e}-close-icon`,
    tabIndex: 0
  }, s), i) : null;
}, _a = /* @__PURE__ */ _.forwardRef((n, t) => {
  const {
    description: e,
    prefixCls: r,
    message: o,
    banner: s,
    className: i,
    rootClassName: a,
    style: c,
    onMouseEnter: l,
    onMouseLeave: f,
    onClick: d,
    afterClose: u,
    showIcon: v,
    closable: g,
    closeText: h,
    closeIcon: p,
    action: w,
    id: S
  } = n, x = qc(n, ["description", "prefixCls", "message", "banner", "className", "rootClassName", "style", "onMouseEnter", "onMouseLeave", "onClick", "afterClose", "showIcon", "closable", "closeText", "closeIcon", "action", "id"]), [T, b] = _.useState(!1);
  process.env.NODE_ENV !== "production" && Qn("Alert").deprecated(!h, "closeText", "closable.closeIcon");
  const O = _.useRef(null);
  _.useImperativeHandle(t, () => ({
    nativeElement: O.current
  }));
  const {
    getPrefixCls: C,
    direction: N,
    closable: z,
    closeIcon: $,
    className: oe,
    style: K
  } = ff("alert"), B = C("alert", r), [W, H, te] = _1(B), Z = (fe) => {
    var pe;
    b(!0), (pe = n.onClose) === null || pe === void 0 || pe.call(n, fe);
  }, Q = _.useMemo(() => n.type !== void 0 ? n.type : s ? "warning" : "info", [n.type, s]), ee = _.useMemo(() => typeof g == "object" && g.closeIcon || h ? !0 : typeof g == "boolean" ? g : p !== !1 && p !== null && p !== void 0 ? !0 : !!z, [h, p, g, z]), ae = s && v === void 0 ? !0 : v, se = rt(B, `${B}-${Q}`, {
    [`${B}-with-description`]: !!e,
    [`${B}-no-icon`]: !ae,
    [`${B}-banner`]: !!s,
    [`${B}-rtl`]: N === "rtl"
  }, oe, i, a, te, H), J = v1(x, {
    aria: !0,
    data: !0
  }), ne = _.useMemo(() => typeof g == "object" && g.closeIcon ? g.closeIcon : h || (p !== void 0 ? p : typeof z == "object" && z.closeIcon ? z.closeIcon : $), [p, g, h, $]), he = _.useMemo(() => {
    const fe = g ?? z;
    if (typeof fe == "object") {
      const {
        closeIcon: pe
      } = fe;
      return qc(fe, ["closeIcon"]);
    }
    return {};
  }, [g, z]);
  return W(/* @__PURE__ */ _.createElement(kf, {
    visible: !T,
    motionName: `${B}-motion`,
    motionAppear: !1,
    motionEnter: !1,
    onLeaveStart: (fe) => ({
      maxHeight: fe.offsetHeight
    }),
    onLeaveEnd: u
  }, (fe, pe) => {
    let {
      className: P,
      style: j
    } = fe;
    return /* @__PURE__ */ _.createElement("div", Object.assign({
      id: S,
      ref: nx(O, pe),
      "data-show": !T,
      className: rt(se, P),
      style: Object.assign(Object.assign(Object.assign({}, K), c), j),
      onMouseEnter: l,
      onMouseLeave: f,
      onClick: d,
      role: "alert"
    }, J), ae ? /* @__PURE__ */ _.createElement(A1, {
      description: e,
      icon: n.icon,
      prefixCls: B,
      type: Q
    }) : null, /* @__PURE__ */ _.createElement("div", {
      className: `${B}-content`
    }, o ? /* @__PURE__ */ _.createElement("div", {
      className: `${B}-message`
    }, o) : null, e ? /* @__PURE__ */ _.createElement("div", {
      className: `${B}-description`
    }, e) : null), w ? /* @__PURE__ */ _.createElement("div", {
      className: `${B}-action`
    }, w) : null, /* @__PURE__ */ _.createElement(T1, {
      isClosable: ee,
      prefixCls: B,
      closeIcon: ne,
      handleClose: Z,
      ariaProps: he
    }));
  }));
});
process.env.NODE_ENV !== "production" && (_a.displayName = "Alert");
function O1(n, t, e) {
  return t = Un(t), Eu(n, fa() ? Reflect.construct(t, e || [], Un(n).constructor) : t.apply(n, e));
}
let R1 = /* @__PURE__ */ function(n) {
  function t() {
    var e;
    return kt(this, t), e = O1(this, t, arguments), e.state = {
      error: void 0,
      info: {
        componentStack: ""
      }
    }, e;
  }
  return kr(t, n), Pt(t, [{
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
        id: s,
        children: i
      } = this.props, {
        error: a,
        info: c
      } = this.state, l = (c == null ? void 0 : c.componentStack) || null, f = typeof r > "u" ? (a || "").toString() : r, d = typeof o > "u" ? l : o;
      return a ? /* @__PURE__ */ _.createElement(_a, {
        id: s,
        type: "error",
        message: f,
        description: /* @__PURE__ */ _.createElement("pre", {
          style: {
            fontSize: "0.9em",
            overflowX: "auto"
          }
        }, d)
      }) : i;
    }
  }]);
}(_.Component);
const Uf = _a;
Uf.ErrorBoundary = R1;
function k1(n, t) {
  var e = Object.assign({}, n);
  return Array.isArray(t) && t.forEach(function(r) {
    delete e[r];
  }), e;
}
function P1(n, t, e) {
  var r = e || {}, o = r.noTrailing, s = o === void 0 ? !1 : o, i = r.noLeading, a = i === void 0 ? !1 : i, c = r.debounceMode, l = c === void 0 ? void 0 : c, f, d = !1, u = 0;
  function v() {
    f && clearTimeout(f);
  }
  function g(p) {
    var w = p || {}, S = w.upcomingOnly, x = S === void 0 ? !1 : S;
    v(), d = !x;
  }
  function h() {
    for (var p = arguments.length, w = new Array(p), S = 0; S < p; S++)
      w[S] = arguments[S];
    var x = this, T = Date.now() - u;
    if (d)
      return;
    function b() {
      u = Date.now(), t.apply(x, w);
    }
    function O() {
      f = void 0;
    }
    !a && l && !f && b(), v(), l === void 0 && T > n ? a ? (u = Date.now(), s || (f = setTimeout(l ? O : b, n))) : b() : s !== !0 && (f = setTimeout(l ? O : b, l === void 0 ? n - T : n));
  }
  return h.cancel = g, h;
}
function I1(n, t, e) {
  var r = {}, o = r.atBegin, s = o === void 0 ? !1 : o;
  return P1(n, t, {
    debounceMode: s !== !1
  });
}
function Wc(n) {
  return ["small", "middle", "large"].includes(n);
}
const qf = ["wrap", "nowrap", "wrap-reverse"], Wf = ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around", "space-evenly", "stretch", "normal", "left", "right"], Xf = ["center", "start", "end", "flex-start", "flex-end", "self-start", "self-end", "baseline", "normal", "stretch"], N1 = (n, t) => {
  const e = t.wrap === !0 ? "wrap" : t.wrap;
  return {
    [`${n}-wrap-${e}`]: e && qf.includes(e)
  };
}, j1 = (n, t) => {
  const e = {};
  return Xf.forEach((r) => {
    e[`${n}-align-${r}`] = t.align === r;
  }), e[`${n}-align-stretch`] = !t.align && !!t.vertical, e;
}, L1 = (n, t) => {
  const e = {};
  return Wf.forEach((r) => {
    e[`${n}-justify-${r}`] = t.justify === r;
  }), e;
};
function D1(n, t) {
  return rt(Object.assign(Object.assign(Object.assign({}, N1(n, t)), j1(n, t)), L1(n, t)));
}
const M1 = (n) => {
  const {
    componentCls: t
  } = n;
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
}, B1 = (n) => {
  const {
    componentCls: t
  } = n;
  return {
    [t]: {
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
}, F1 = (n) => {
  const {
    componentCls: t
  } = n, e = {};
  return qf.forEach((r) => {
    e[`${t}-wrap-${r}`] = {
      flexWrap: r
    };
  }), e;
}, z1 = (n) => {
  const {
    componentCls: t
  } = n, e = {};
  return Xf.forEach((r) => {
    e[`${t}-align-${r}`] = {
      alignItems: r
    };
  }), e;
}, V1 = (n) => {
  const {
    componentCls: t
  } = n, e = {};
  return Wf.forEach((r) => {
    e[`${t}-justify-${r}`] = {
      justifyContent: r
    };
  }), e;
}, H1 = () => ({}), U1 = wa("Flex", (n) => {
  const {
    paddingXS: t,
    padding: e,
    paddingLG: r
  } = n, o = fs(n, {
    flexGapSM: t,
    flexGap: e,
    flexGapLG: r
  });
  return [M1(o), B1(o), F1(o), z1(o), V1(o)];
}, H1, {
  // Flex component don't apply extra font style
  // https://github.com/ant-design/ant-design/issues/46403
  resetStyle: !1
});
var q1 = function(n, t) {
  var e = {};
  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && t.indexOf(r) < 0 && (e[r] = n[r]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(n); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(n, r[o]) && (e[r[o]] = n[r[o]]);
  return e;
};
const Yf = /* @__PURE__ */ Ve.forwardRef((n, t) => {
  const {
    prefixCls: e,
    rootClassName: r,
    className: o,
    style: s,
    flex: i,
    gap: a,
    children: c,
    vertical: l = !1,
    component: f = "div"
  } = n, d = q1(n, ["prefixCls", "rootClassName", "className", "style", "flex", "gap", "children", "vertical", "component"]), {
    flex: u,
    direction: v,
    getPrefixCls: g
  } = Ve.useContext(rn), h = g("flex", e), [p, w, S] = U1(h), x = l ?? (u == null ? void 0 : u.vertical), T = rt(o, r, u == null ? void 0 : u.className, h, w, S, D1(h, n), {
    [`${h}-rtl`]: v === "rtl",
    [`${h}-gap-${a}`]: Wc(a),
    [`${h}-vertical`]: x
  }), b = Object.assign(Object.assign({}, u == null ? void 0 : u.style), s);
  return i && (b.flex = i), a && !Wc(a) && (b.gap = a), p(/* @__PURE__ */ Ve.createElement(f, Object.assign({
    ref: t,
    className: T,
    style: b
  }, k1(d, ["justify", "wrap", "align"])), c));
});
process.env.NODE_ENV !== "production" && (Yf.displayName = "Flex");
const Po = 100, $f = Po / 5, Gf = Po / 2 - $f / 2, Vs = Gf * 2 * Math.PI, Xc = 50, Yc = (n) => {
  const {
    dotClassName: t,
    style: e,
    hasCircleCls: r
  } = n;
  return /* @__PURE__ */ _.createElement("circle", {
    className: rt(`${t}-circle`, {
      [`${t}-circle-bg`]: r
    }),
    r: Gf,
    cx: Xc,
    cy: Xc,
    strokeWidth: $f,
    style: e
  });
}, W1 = (n) => {
  let {
    percent: t,
    prefixCls: e
  } = n;
  const r = `${e}-dot`, o = `${r}-holder`, s = `${o}-hidden`, [i, a] = _.useState(!1);
  Du(() => {
    t !== 0 && a(!0);
  }, [t !== 0]);
  const c = Math.max(Math.min(t, 100), 0);
  if (!i)
    return null;
  const l = {
    strokeDashoffset: `${Vs / 4}`,
    strokeDasharray: `${Vs * c / 100} ${Vs * (100 - c) / 100}`
  };
  return /* @__PURE__ */ _.createElement("span", {
    className: rt(o, `${r}-progress`, c <= 0 && s)
  }, /* @__PURE__ */ _.createElement("svg", {
    viewBox: `0 0 ${Po} ${Po}`,
    // biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole: progressbar could be readonly
    role: "progressbar",
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": c
  }, /* @__PURE__ */ _.createElement(Yc, {
    dotClassName: r,
    hasCircleCls: !0
  }), /* @__PURE__ */ _.createElement(Yc, {
    dotClassName: r,
    style: l
  })));
};
function X1(n) {
  const {
    prefixCls: t,
    percent: e = 0
  } = n, r = `${t}-dot`, o = `${r}-holder`, s = `${o}-hidden`;
  return /* @__PURE__ */ _.createElement(_.Fragment, null, /* @__PURE__ */ _.createElement("span", {
    className: rt(o, e > 0 && s)
  }, /* @__PURE__ */ _.createElement("span", {
    className: rt(r, `${t}-dot-spin`)
  }, [1, 2, 3, 4].map((i) => /* @__PURE__ */ _.createElement("i", {
    className: `${t}-dot-item`,
    key: i
  })))), /* @__PURE__ */ _.createElement(W1, {
    prefixCls: t,
    percent: e
  }));
}
function Y1(n) {
  const {
    prefixCls: t,
    indicator: e,
    percent: r
  } = n, o = `${t}-dot`;
  return e && /* @__PURE__ */ _.isValidElement(e) ? b1(e, {
    className: rt(e.props.className, o),
    percent: r
  }) : /* @__PURE__ */ _.createElement(X1, {
    prefixCls: t,
    percent: r
  });
}
const $1 = new Zu("antSpinMove", {
  to: {
    opacity: 1
  }
}), G1 = new Zu("antRotate", {
  to: {
    transform: "rotate(405deg)"
  }
}), K1 = (n) => {
  const {
    componentCls: t,
    calc: e
  } = n;
  return {
    [t]: Object.assign(Object.assign({}, vf(n)), {
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
      [`${t}-text`]: {
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
        [t]: {
          [`${t}-dot-holder`]: {
            color: n.colorWhite
          },
          [`${t}-text`]: {
            color: n.colorTextLightSolid
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
          maxHeight: n.contentHeight,
          [`${t}-dot`]: {
            position: "absolute",
            top: "50%",
            insetInlineStart: "50%",
            margin: e(n.dotSize).mul(-1).div(2).equal()
          },
          [`${t}-text`]: {
            position: "absolute",
            top: "50%",
            width: "100%",
            textShadow: `0 1px 2px ${n.colorBgContainer}`
            // FIXME: shadow
          },
          [`&${t}-show-text ${t}-dot`]: {
            marginTop: e(n.dotSize).div(2).mul(-1).sub(10).equal()
          },
          "&-sm": {
            [`${t}-dot`]: {
              margin: e(n.dotSizeSM).mul(-1).div(2).equal()
            },
            [`${t}-text`]: {
              paddingTop: e(e(n.dotSizeSM).sub(n.fontSize)).div(2).add(2).equal()
            },
            [`&${t}-show-text ${t}-dot`]: {
              marginTop: e(n.dotSizeSM).div(2).mul(-1).sub(10).equal()
            }
          },
          "&-lg": {
            [`${t}-dot`]: {
              margin: e(n.dotSizeLG).mul(-1).div(2).equal()
            },
            [`${t}-text`]: {
              paddingTop: e(e(n.dotSizeLG).sub(n.fontSize)).div(2).add(2).equal()
            },
            [`&${t}-show-text ${t}-dot`]: {
              marginTop: e(n.dotSizeLG).div(2).mul(-1).sub(10).equal()
            }
          }
        },
        [`${t}-container`]: {
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
        color: n.spinDotDefault
      },
      // holder
      // ------------------------------
      [`${t}-dot-holder`]: {
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
      [`${t}-dot-progress`]: {
        position: "absolute",
        inset: 0
      },
      // dots
      // ------------------------------
      [`${t}-dot`]: {
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
          animationName: $1,
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
          animationName: G1,
          animationDuration: "1.2s",
          animationIterationCount: "infinite",
          animationTimingFunction: "linear"
        },
        "&-circle": {
          strokeLinecap: "round",
          transition: ["stroke-dashoffset", "stroke-dasharray", "stroke", "stroke-width", "opacity"].map((r) => `${r} ${n.motionDurationSlow} ease`).join(","),
          fillOpacity: 0,
          stroke: "currentcolor"
        },
        "&-circle-bg": {
          stroke: n.colorFillSecondary
        }
      },
      // small
      [`&-sm ${t}-dot`]: {
        "&, &-holder": {
          fontSize: n.dotSizeSM
        }
      },
      [`&-sm ${t}-dot-holder`]: {
        i: {
          width: e(e(n.dotSizeSM).sub(e(n.marginXXS).div(2))).div(2).equal(),
          height: e(e(n.dotSizeSM).sub(e(n.marginXXS).div(2))).div(2).equal()
        }
      },
      // large
      [`&-lg ${t}-dot`]: {
        "&, &-holder": {
          fontSize: n.dotSizeLG
        }
      },
      [`&-lg ${t}-dot-holder`]: {
        i: {
          width: e(e(n.dotSizeLG).sub(n.marginXXS)).div(2).equal(),
          height: e(e(n.dotSizeLG).sub(n.marginXXS)).div(2).equal()
        }
      },
      [`&${t}-show-text ${t}-text`]: {
        display: "block"
      }
    })
  };
}, J1 = (n) => {
  const {
    controlHeightLG: t,
    controlHeight: e
  } = n;
  return {
    contentHeight: 400,
    dotSize: t / 2,
    dotSizeSM: t * 0.35,
    dotSizeLG: e
  };
}, Z1 = wa("Spin", (n) => {
  const t = fs(n, {
    spinDotDefault: n.colorTextDescription
  });
  return [K1(t)];
}, J1), Q1 = 200, $c = [[30, 0.05], [70, 0.03], [96, 0.01]];
function eg(n, t) {
  const [e, r] = _.useState(0), o = _.useRef(null), s = t === "auto";
  return _.useEffect(() => (s && n && (r(0), o.current = setInterval(() => {
    r((i) => {
      const a = 100 - i;
      for (let c = 0; c < $c.length; c += 1) {
        const [l, f] = $c[c];
        if (i <= l)
          return i + a * f;
      }
      return i;
    });
  }, Q1)), () => {
    clearInterval(o.current);
  }), [s, n]), s ? e : t;
}
var tg = function(n, t) {
  var e = {};
  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && t.indexOf(r) < 0 && (e[r] = n[r]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(n); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(n, r[o]) && (e[r[o]] = n[r[o]]);
  return e;
};
let Kf;
function ng(n, t) {
  return !!n && !!t && !Number.isNaN(Number(t));
}
const vr = (n) => {
  var t;
  const {
    prefixCls: e,
    spinning: r = !0,
    delay: o = 0,
    className: s,
    rootClassName: i,
    size: a = "default",
    tip: c,
    wrapperClassName: l,
    style: f,
    children: d,
    fullscreen: u = !1,
    indicator: v,
    percent: g
  } = n, h = tg(n, ["prefixCls", "spinning", "delay", "className", "rootClassName", "size", "tip", "wrapperClassName", "style", "children", "fullscreen", "indicator", "percent"]), {
    getPrefixCls: p,
    direction: w,
    className: S,
    style: x,
    indicator: T
  } = ff("spin"), b = p("spin", e), [O, C, N] = Z1(b), [z, $] = _.useState(() => r && !ng(r, o)), oe = eg(z, g);
  _.useEffect(() => {
    if (r) {
      const Q = I1(o, () => {
        $(!0);
      });
      return Q(), () => {
        var ee;
        (ee = Q == null ? void 0 : Q.cancel) === null || ee === void 0 || ee.call(Q);
      };
    }
    $(!1);
  }, [o, r]);
  const K = _.useMemo(() => typeof d < "u" && !u, [d, u]);
  if (process.env.NODE_ENV !== "production") {
    const Q = Qn("Spin");
    process.env.NODE_ENV !== "production" && Q(!c || K || u, "usage", "`tip` only work in nest or fullscreen pattern.");
  }
  const B = rt(b, S, {
    [`${b}-sm`]: a === "small",
    [`${b}-lg`]: a === "large",
    [`${b}-spinning`]: z,
    [`${b}-show-text`]: !!c,
    [`${b}-rtl`]: w === "rtl"
  }, s, !u && i, C, N), W = rt(`${b}-container`, {
    [`${b}-blur`]: z
  }), H = (t = v ?? T) !== null && t !== void 0 ? t : Kf, te = Object.assign(Object.assign({}, x), f), Z = /* @__PURE__ */ _.createElement("div", Object.assign({}, h, {
    style: te,
    className: B,
    "aria-live": "polite",
    "aria-busy": z
  }), /* @__PURE__ */ _.createElement(Y1, {
    prefixCls: b,
    indicator: H,
    percent: oe
  }), c && (K || u) ? /* @__PURE__ */ _.createElement("div", {
    className: `${b}-text`
  }, c) : null);
  return O(K ? /* @__PURE__ */ _.createElement("div", Object.assign({}, h, {
    className: rt(`${b}-nested-loading`, l, C, N)
  }), z && /* @__PURE__ */ _.createElement("div", {
    key: "loading"
  }, Z), /* @__PURE__ */ _.createElement("div", {
    className: W,
    key: "container"
  }, d)) : u ? /* @__PURE__ */ _.createElement("div", {
    className: rt(`${b}-fullscreen`, {
      [`${b}-fullscreen-show`]: z
    }, i, C, N)
  }, Z) : Z);
};
vr.setDefaultIndicator = (n) => {
  Kf = n;
};
process.env.NODE_ENV !== "production" && (vr.displayName = "Spin");
function Jf(n, t) {
  return function() {
    return n.apply(t, arguments);
  };
}
const { toString: rg } = Object.prototype, { getPrototypeOf: Ca } = Object, { iterator: ds, toStringTag: Zf } = Symbol, hs = /* @__PURE__ */ ((n) => (t) => {
  const e = rg.call(t);
  return n[e] || (n[e] = e.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), It = (n) => (n = n.toLowerCase(), (t) => hs(t) === n), xs = (n) => (t) => typeof t === n, { isArray: nr } = Array, Cr = xs("undefined");
function og(n) {
  return n !== null && !Cr(n) && n.constructor !== null && !Cr(n.constructor) && ut(n.constructor.isBuffer) && n.constructor.isBuffer(n);
}
const Qf = It("ArrayBuffer");
function sg(n) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(n) : t = n && n.buffer && Qf(n.buffer), t;
}
const ig = xs("string"), ut = xs("function"), e0 = xs("number"), ps = (n) => n !== null && typeof n == "object", ag = (n) => n === !0 || n === !1, go = (n) => {
  if (hs(n) !== "object")
    return !1;
  const t = Ca(n);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Zf in n) && !(ds in n);
}, cg = It("Date"), lg = It("File"), ug = It("Blob"), fg = It("FileList"), dg = (n) => ps(n) && ut(n.pipe), hg = (n) => {
  let t;
  return n && (typeof FormData == "function" && n instanceof FormData || ut(n.append) && ((t = hs(n)) === "formdata" || // detect form-data instance
  t === "object" && ut(n.toString) && n.toString() === "[object FormData]"));
}, xg = It("URLSearchParams"), [pg, mg, gg, vg] = ["ReadableStream", "Request", "Response", "Headers"].map(It), bg = (n) => n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ir(n, t, { allOwnKeys: e = !1 } = {}) {
  if (n === null || typeof n > "u")
    return;
  let r, o;
  if (typeof n != "object" && (n = [n]), nr(n))
    for (r = 0, o = n.length; r < o; r++)
      t.call(null, n[r], r, n);
  else {
    const s = e ? Object.getOwnPropertyNames(n) : Object.keys(n), i = s.length;
    let a;
    for (r = 0; r < i; r++)
      a = s[r], t.call(null, n[a], a, n);
  }
}
function t0(n, t) {
  t = t.toLowerCase();
  const e = Object.keys(n);
  let r = e.length, o;
  for (; r-- > 0; )
    if (o = e[r], t === o.toLowerCase())
      return o;
  return null;
}
const gn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, n0 = (n) => !Cr(n) && n !== gn;
function Ui() {
  const { caseless: n } = n0(this) && this || {}, t = {}, e = (r, o) => {
    const s = n && t0(t, o) || o;
    go(t[s]) && go(r) ? t[s] = Ui(t[s], r) : go(r) ? t[s] = Ui({}, r) : nr(r) ? t[s] = r.slice() : t[s] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Ir(arguments[r], e);
  return t;
}
const yg = (n, t, e, { allOwnKeys: r } = {}) => (Ir(t, (o, s) => {
  e && ut(o) ? n[s] = Jf(o, e) : n[s] = o;
}, { allOwnKeys: r }), n), Sg = (n) => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n), wg = (n, t, e, r) => {
  n.prototype = Object.create(t.prototype, r), n.prototype.constructor = n, Object.defineProperty(n, "super", {
    value: t.prototype
  }), e && Object.assign(n.prototype, e);
}, Eg = (n, t, e, r) => {
  let o, s, i;
  const a = {};
  if (t = t || {}, n == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(n), s = o.length; s-- > 0; )
      i = o[s], (!r || r(i, n, t)) && !a[i] && (t[i] = n[i], a[i] = !0);
    n = e !== !1 && Ca(n);
  } while (n && (!e || e(n, t)) && n !== Object.prototype);
  return t;
}, _g = (n, t, e) => {
  n = String(n), (e === void 0 || e > n.length) && (e = n.length), e -= t.length;
  const r = n.indexOf(t, e);
  return r !== -1 && r === e;
}, Cg = (n) => {
  if (!n) return null;
  if (nr(n)) return n;
  let t = n.length;
  if (!e0(t)) return null;
  const e = new Array(t);
  for (; t-- > 0; )
    e[t] = n[t];
  return e;
}, Ag = /* @__PURE__ */ ((n) => (t) => n && t instanceof n)(typeof Uint8Array < "u" && Ca(Uint8Array)), Tg = (n, t) => {
  const r = (n && n[ds]).call(n);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const s = o.value;
    t.call(n, s[0], s[1]);
  }
}, Og = (n, t) => {
  let e;
  const r = [];
  for (; (e = n.exec(t)) !== null; )
    r.push(e);
  return r;
}, Rg = It("HTMLFormElement"), kg = (n) => n.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(e, r, o) {
    return r.toUpperCase() + o;
  }
), Gc = (({ hasOwnProperty: n }) => (t, e) => n.call(t, e))(Object.prototype), Pg = It("RegExp"), r0 = (n, t) => {
  const e = Object.getOwnPropertyDescriptors(n), r = {};
  Ir(e, (o, s) => {
    let i;
    (i = t(o, s, n)) !== !1 && (r[s] = i || o);
  }), Object.defineProperties(n, r);
}, Ig = (n) => {
  r0(n, (t, e) => {
    if (ut(n) && ["arguments", "caller", "callee"].indexOf(e) !== -1)
      return !1;
    const r = n[e];
    if (ut(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + e + "'");
      });
    }
  });
}, Ng = (n, t) => {
  const e = {}, r = (o) => {
    o.forEach((s) => {
      e[s] = !0;
    });
  };
  return nr(n) ? r(n) : r(String(n).split(t)), e;
}, jg = () => {
}, Lg = (n, t) => n != null && Number.isFinite(n = +n) ? n : t;
function Dg(n) {
  return !!(n && ut(n.append) && n[Zf] === "FormData" && n[ds]);
}
const Mg = (n) => {
  const t = new Array(10), e = (r, o) => {
    if (ps(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[o] = r;
        const s = nr(r) ? [] : {};
        return Ir(r, (i, a) => {
          const c = e(i, o + 1);
          !Cr(c) && (s[a] = c);
        }), t[o] = void 0, s;
      }
    }
    return r;
  };
  return e(n, 0);
}, Bg = It("AsyncFunction"), Fg = (n) => n && (ps(n) || ut(n)) && ut(n.then) && ut(n.catch), o0 = ((n, t) => n ? setImmediate : t ? ((e, r) => (gn.addEventListener("message", ({ source: o, data: s }) => {
  o === gn && s === e && r.length && r.shift()();
}, !1), (o) => {
  r.push(o), gn.postMessage(e, "*");
}))(`axios@${Math.random()}`, []) : (e) => setTimeout(e))(
  typeof setImmediate == "function",
  ut(gn.postMessage)
), zg = typeof queueMicrotask < "u" ? queueMicrotask.bind(gn) : typeof process < "u" && process.nextTick || o0, Vg = (n) => n != null && ut(n[ds]), A = {
  isArray: nr,
  isArrayBuffer: Qf,
  isBuffer: og,
  isFormData: hg,
  isArrayBufferView: sg,
  isString: ig,
  isNumber: e0,
  isBoolean: ag,
  isObject: ps,
  isPlainObject: go,
  isReadableStream: pg,
  isRequest: mg,
  isResponse: gg,
  isHeaders: vg,
  isUndefined: Cr,
  isDate: cg,
  isFile: lg,
  isBlob: ug,
  isRegExp: Pg,
  isFunction: ut,
  isStream: dg,
  isURLSearchParams: xg,
  isTypedArray: Ag,
  isFileList: fg,
  forEach: Ir,
  merge: Ui,
  extend: yg,
  trim: bg,
  stripBOM: Sg,
  inherits: wg,
  toFlatObject: Eg,
  kindOf: hs,
  kindOfTest: It,
  endsWith: _g,
  toArray: Cg,
  forEachEntry: Tg,
  matchAll: Og,
  isHTMLForm: Rg,
  hasOwnProperty: Gc,
  hasOwnProp: Gc,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: r0,
  freezeMethods: Ig,
  toObjectSet: Ng,
  toCamelCase: kg,
  noop: jg,
  toFiniteNumber: Lg,
  findKey: t0,
  global: gn,
  isContextDefined: n0,
  isSpecCompliantForm: Dg,
  toJSONObject: Mg,
  isAsyncFn: Bg,
  isThenable: Fg,
  setImmediate: o0,
  asap: zg,
  isIterable: Vg
};
function re(n, t, e, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = n, this.name = "AxiosError", t && (this.code = t), e && (this.config = e), r && (this.request = r), o && (this.response = o, this.status = o.status ? o.status : null);
}
A.inherits(re, Error, {
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
const s0 = re.prototype, i0 = {};
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
  i0[n] = { value: n };
});
Object.defineProperties(re, i0);
Object.defineProperty(s0, "isAxiosError", { value: !0 });
re.from = (n, t, e, r, o, s) => {
  const i = Object.create(s0);
  return A.toFlatObject(n, i, function(c) {
    return c !== Error.prototype;
  }, (a) => a !== "isAxiosError"), re.call(i, n.message, t, e, r, o), i.cause = n, i.name = n.name, s && Object.assign(i, s), i;
};
const Hg = null;
function qi(n) {
  return A.isPlainObject(n) || A.isArray(n);
}
function a0(n) {
  return A.endsWith(n, "[]") ? n.slice(0, -2) : n;
}
function Kc(n, t, e) {
  return n ? n.concat(t).map(function(o, s) {
    return o = a0(o), !e && s ? "[" + o + "]" : o;
  }).join(e ? "." : "") : t;
}
function Ug(n) {
  return A.isArray(n) && !n.some(qi);
}
const qg = A.toFlatObject(A, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ms(n, t, e) {
  if (!A.isObject(n))
    throw new TypeError("target must be an object");
  t = t || new FormData(), e = A.toFlatObject(e, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(h, p) {
    return !A.isUndefined(p[h]);
  });
  const r = e.metaTokens, o = e.visitor || f, s = e.dots, i = e.indexes, c = (e.Blob || typeof Blob < "u" && Blob) && A.isSpecCompliantForm(t);
  if (!A.isFunction(o))
    throw new TypeError("visitor must be a function");
  function l(g) {
    if (g === null) return "";
    if (A.isDate(g))
      return g.toISOString();
    if (!c && A.isBlob(g))
      throw new re("Blob is not supported. Use a Buffer instead.");
    return A.isArrayBuffer(g) || A.isTypedArray(g) ? c && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function f(g, h, p) {
    let w = g;
    if (g && !p && typeof g == "object") {
      if (A.endsWith(h, "{}"))
        h = r ? h : h.slice(0, -2), g = JSON.stringify(g);
      else if (A.isArray(g) && Ug(g) || (A.isFileList(g) || A.endsWith(h, "[]")) && (w = A.toArray(g)))
        return h = a0(h), w.forEach(function(x, T) {
          !(A.isUndefined(x) || x === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Kc([h], T, s) : i === null ? h : h + "[]",
            l(x)
          );
        }), !1;
    }
    return qi(g) ? !0 : (t.append(Kc(p, h, s), l(g)), !1);
  }
  const d = [], u = Object.assign(qg, {
    defaultVisitor: f,
    convertValue: l,
    isVisitable: qi
  });
  function v(g, h) {
    if (!A.isUndefined(g)) {
      if (d.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      d.push(g), A.forEach(g, function(w, S) {
        (!(A.isUndefined(w) || w === null) && o.call(
          t,
          w,
          A.isString(S) ? S.trim() : S,
          h,
          u
        )) === !0 && v(w, h ? h.concat(S) : [S]);
      }), d.pop();
    }
  }
  if (!A.isObject(n))
    throw new TypeError("data must be an object");
  return v(n), t;
}
function Jc(n) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function Aa(n, t) {
  this._pairs = [], n && ms(n, this, t);
}
const c0 = Aa.prototype;
c0.append = function(t, e) {
  this._pairs.push([t, e]);
};
c0.toString = function(t) {
  const e = t ? function(r) {
    return t.call(this, r, Jc);
  } : Jc;
  return this._pairs.map(function(o) {
    return e(o[0]) + "=" + e(o[1]);
  }, "").join("&");
};
function Wg(n) {
  return encodeURIComponent(n).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function l0(n, t, e) {
  if (!t)
    return n;
  const r = e && e.encode || Wg;
  A.isFunction(e) && (e = {
    serialize: e
  });
  const o = e && e.serialize;
  let s;
  if (o ? s = o(t, e) : s = A.isURLSearchParams(t) ? t.toString() : new Aa(t, e).toString(r), s) {
    const i = n.indexOf("#");
    i !== -1 && (n = n.slice(0, i)), n += (n.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return n;
}
class Zc {
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
  use(t, e, r) {
    return this.handlers.push({
      fulfilled: t,
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
    A.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const u0 = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Xg = typeof URLSearchParams < "u" ? URLSearchParams : Aa, Yg = typeof FormData < "u" ? FormData : null, $g = typeof Blob < "u" ? Blob : null, Gg = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Xg,
    FormData: Yg,
    Blob: $g
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ta = typeof window < "u" && typeof document < "u", Wi = typeof navigator == "object" && navigator || void 0, Kg = Ta && (!Wi || ["ReactNative", "NativeScript", "NS"].indexOf(Wi.product) < 0), Jg = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Zg = Ta && window.location.href || "http://localhost", Qg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ta,
  hasStandardBrowserEnv: Kg,
  hasStandardBrowserWebWorkerEnv: Jg,
  navigator: Wi,
  origin: Zg
}, Symbol.toStringTag, { value: "Module" })), nt = {
  ...Qg,
  ...Gg
};
function e2(n, t) {
  return ms(n, new nt.classes.URLSearchParams(), Object.assign({
    visitor: function(e, r, o, s) {
      return nt.isNode && A.isBuffer(e) ? (this.append(r, e.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function t2(n) {
  return A.matchAll(/\w+|\[(\w*)]/g, n).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function n2(n) {
  const t = {}, e = Object.keys(n);
  let r;
  const o = e.length;
  let s;
  for (r = 0; r < o; r++)
    s = e[r], t[s] = n[s];
  return t;
}
function f0(n) {
  function t(e, r, o, s) {
    let i = e[s++];
    if (i === "__proto__") return !0;
    const a = Number.isFinite(+i), c = s >= e.length;
    return i = !i && A.isArray(o) ? o.length : i, c ? (A.hasOwnProp(o, i) ? o[i] = [o[i], r] : o[i] = r, !a) : ((!o[i] || !A.isObject(o[i])) && (o[i] = []), t(e, r, o[i], s) && A.isArray(o[i]) && (o[i] = n2(o[i])), !a);
  }
  if (A.isFormData(n) && A.isFunction(n.entries)) {
    const e = {};
    return A.forEachEntry(n, (r, o) => {
      t(t2(r), o, e, 0);
    }), e;
  }
  return null;
}
function r2(n, t, e) {
  if (A.isString(n))
    try {
      return (t || JSON.parse)(n), A.trim(n);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (e || JSON.stringify)(n);
}
const Nr = {
  transitional: u0,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, e) {
    const r = e.getContentType() || "", o = r.indexOf("application/json") > -1, s = A.isObject(t);
    if (s && A.isHTMLForm(t) && (t = new FormData(t)), A.isFormData(t))
      return o ? JSON.stringify(f0(t)) : t;
    if (A.isArrayBuffer(t) || A.isBuffer(t) || A.isStream(t) || A.isFile(t) || A.isBlob(t) || A.isReadableStream(t))
      return t;
    if (A.isArrayBufferView(t))
      return t.buffer;
    if (A.isURLSearchParams(t))
      return e.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (s) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return e2(t, this.formSerializer).toString();
      if ((a = A.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return ms(
          a ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return s || o ? (e.setContentType("application/json", !1), r2(t)) : t;
  }],
  transformResponse: [function(t) {
    const e = this.transitional || Nr.transitional, r = e && e.forcedJSONParsing, o = this.responseType === "json";
    if (A.isResponse(t) || A.isReadableStream(t))
      return t;
    if (t && A.isString(t) && (r && !this.responseType || o)) {
      const i = !(e && e.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (i)
          throw a.name === "SyntaxError" ? re.from(a, re.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
    FormData: nt.classes.FormData,
    Blob: nt.classes.Blob
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
A.forEach(["delete", "get", "head", "post", "put", "patch"], (n) => {
  Nr.headers[n] = {};
});
const o2 = A.toObjectSet([
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
]), s2 = (n) => {
  const t = {};
  let e, r, o;
  return n && n.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), e = i.substring(0, o).trim().toLowerCase(), r = i.substring(o + 1).trim(), !(!e || t[e] && o2[e]) && (e === "set-cookie" ? t[e] ? t[e].push(r) : t[e] = [r] : t[e] = t[e] ? t[e] + ", " + r : r);
  }), t;
}, Qc = Symbol("internals");
function fr(n) {
  return n && String(n).trim().toLowerCase();
}
function vo(n) {
  return n === !1 || n == null ? n : A.isArray(n) ? n.map(vo) : String(n);
}
function i2(n) {
  const t = /* @__PURE__ */ Object.create(null), e = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = e.exec(n); )
    t[r[1]] = r[2];
  return t;
}
const a2 = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function Hs(n, t, e, r, o) {
  if (A.isFunction(r))
    return r.call(this, t, e);
  if (o && (t = e), !!A.isString(t)) {
    if (A.isString(r))
      return t.indexOf(r) !== -1;
    if (A.isRegExp(r))
      return r.test(t);
  }
}
function c2(n) {
  return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, e, r) => e.toUpperCase() + r);
}
function l2(n, t) {
  const e = A.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(n, r + e, {
      value: function(o, s, i) {
        return this[r].call(this, t, o, s, i);
      },
      configurable: !0
    });
  });
}
let ft = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, e, r) {
    const o = this;
    function s(a, c, l) {
      const f = fr(c);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const d = A.findKey(o, f);
      (!d || o[d] === void 0 || l === !0 || l === void 0 && o[d] !== !1) && (o[d || c] = vo(a));
    }
    const i = (a, c) => A.forEach(a, (l, f) => s(l, f, c));
    if (A.isPlainObject(t) || t instanceof this.constructor)
      i(t, e);
    else if (A.isString(t) && (t = t.trim()) && !a2(t))
      i(s2(t), e);
    else if (A.isObject(t) && A.isIterable(t)) {
      let a = {}, c, l;
      for (const f of t) {
        if (!A.isArray(f))
          throw TypeError("Object iterator must return a key-value pair");
        a[l = f[0]] = (c = a[l]) ? A.isArray(c) ? [...c, f[1]] : [c, f[1]] : f[1];
      }
      i(a, e);
    } else
      t != null && s(e, t, r);
    return this;
  }
  get(t, e) {
    if (t = fr(t), t) {
      const r = A.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!e)
          return o;
        if (e === !0)
          return i2(o);
        if (A.isFunction(e))
          return e.call(this, o, r);
        if (A.isRegExp(e))
          return e.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, e) {
    if (t = fr(t), t) {
      const r = A.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!e || Hs(this, this[r], r, e)));
    }
    return !1;
  }
  delete(t, e) {
    const r = this;
    let o = !1;
    function s(i) {
      if (i = fr(i), i) {
        const a = A.findKey(r, i);
        a && (!e || Hs(r, r[a], a, e)) && (delete r[a], o = !0);
      }
    }
    return A.isArray(t) ? t.forEach(s) : s(t), o;
  }
  clear(t) {
    const e = Object.keys(this);
    let r = e.length, o = !1;
    for (; r--; ) {
      const s = e[r];
      (!t || Hs(this, this[s], s, t, !0)) && (delete this[s], o = !0);
    }
    return o;
  }
  normalize(t) {
    const e = this, r = {};
    return A.forEach(this, (o, s) => {
      const i = A.findKey(r, s);
      if (i) {
        e[i] = vo(o), delete e[s];
        return;
      }
      const a = t ? c2(s) : String(s).trim();
      a !== s && delete e[s], e[a] = vo(o), r[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const e = /* @__PURE__ */ Object.create(null);
    return A.forEach(this, (r, o) => {
      r != null && r !== !1 && (e[o] = t && A.isArray(r) ? r.join(", ") : r);
    }), e;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, e]) => t + ": " + e).join(`
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
  static concat(t, ...e) {
    const r = new this(t);
    return e.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[Qc] = this[Qc] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function s(i) {
      const a = fr(i);
      r[a] || (l2(o, i), r[a] = !0);
    }
    return A.isArray(t) ? t.forEach(s) : s(t), this;
  }
};
ft.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
A.reduceDescriptors(ft.prototype, ({ value: n }, t) => {
  let e = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => n,
    set(r) {
      this[e] = r;
    }
  };
});
A.freezeMethods(ft);
function Us(n, t) {
  const e = this || Nr, r = t || e, o = ft.from(r.headers);
  let s = r.data;
  return A.forEach(n, function(a) {
    s = a.call(e, s, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), s;
}
function d0(n) {
  return !!(n && n.__CANCEL__);
}
function rr(n, t, e) {
  re.call(this, n ?? "canceled", re.ERR_CANCELED, t, e), this.name = "CanceledError";
}
A.inherits(rr, re, {
  __CANCEL__: !0
});
function h0(n, t, e) {
  const r = e.config.validateStatus;
  !e.status || !r || r(e.status) ? n(e) : t(new re(
    "Request failed with status code " + e.status,
    [re.ERR_BAD_REQUEST, re.ERR_BAD_RESPONSE][Math.floor(e.status / 100) - 4],
    e.config,
    e.request,
    e
  ));
}
function u2(n) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
  return t && t[1] || "";
}
function f2(n, t) {
  n = n || 10;
  const e = new Array(n), r = new Array(n);
  let o = 0, s = 0, i;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const l = Date.now(), f = r[s];
    i || (i = l), e[o] = c, r[o] = l;
    let d = s, u = 0;
    for (; d !== o; )
      u += e[d++], d = d % n;
    if (o = (o + 1) % n, o === s && (s = (s + 1) % n), l - i < t)
      return;
    const v = f && l - f;
    return v ? Math.round(u * 1e3 / v) : void 0;
  };
}
function d2(n, t) {
  let e = 0, r = 1e3 / t, o, s;
  const i = (l, f = Date.now()) => {
    e = f, o = null, s && (clearTimeout(s), s = null), n.apply(null, l);
  };
  return [(...l) => {
    const f = Date.now(), d = f - e;
    d >= r ? i(l, f) : (o = l, s || (s = setTimeout(() => {
      s = null, i(o);
    }, r - d)));
  }, () => o && i(o)];
}
const Io = (n, t, e = 3) => {
  let r = 0;
  const o = f2(50, 250);
  return d2((s) => {
    const i = s.loaded, a = s.lengthComputable ? s.total : void 0, c = i - r, l = o(c), f = i <= a;
    r = i;
    const d = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: c,
      rate: l || void 0,
      estimated: l && a && f ? (a - i) / l : void 0,
      event: s,
      lengthComputable: a != null,
      [t ? "download" : "upload"]: !0
    };
    n(d);
  }, e);
}, el = (n, t) => {
  const e = n != null;
  return [(r) => t[0]({
    lengthComputable: e,
    total: n,
    loaded: r
  }), t[1]];
}, tl = (n) => (...t) => A.asap(() => n(...t)), h2 = nt.hasStandardBrowserEnv ? /* @__PURE__ */ ((n, t) => (e) => (e = new URL(e, nt.origin), n.protocol === e.protocol && n.host === e.host && (t || n.port === e.port)))(
  new URL(nt.origin),
  nt.navigator && /(msie|trident)/i.test(nt.navigator.userAgent)
) : () => !0, x2 = nt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(n, t, e, r, o, s) {
      const i = [n + "=" + encodeURIComponent(t)];
      A.isNumber(e) && i.push("expires=" + new Date(e).toGMTString()), A.isString(r) && i.push("path=" + r), A.isString(o) && i.push("domain=" + o), s === !0 && i.push("secure"), document.cookie = i.join("; ");
    },
    read(n) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
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
function p2(n) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}
function m2(n, t) {
  return t ? n.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : n;
}
function x0(n, t, e) {
  let r = !p2(t);
  return n && (r || e == !1) ? m2(n, t) : t;
}
const nl = (n) => n instanceof ft ? { ...n } : n;
function Tn(n, t) {
  t = t || {};
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
  function s(l, f) {
    if (!A.isUndefined(f))
      return r(void 0, f);
  }
  function i(l, f) {
    if (A.isUndefined(f)) {
      if (!A.isUndefined(l))
        return r(void 0, l);
    } else return r(void 0, f);
  }
  function a(l, f, d) {
    if (d in t)
      return r(l, f);
    if (d in n)
      return r(void 0, l);
  }
  const c = {
    url: s,
    method: s,
    data: s,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: a,
    headers: (l, f, d) => o(nl(l), nl(f), d, !0)
  };
  return A.forEach(Object.keys(Object.assign({}, n, t)), function(f) {
    const d = c[f] || o, u = d(n[f], t[f], f);
    A.isUndefined(u) && d !== a || (e[f] = u);
  }), e;
}
const p0 = (n) => {
  const t = Tn({}, n);
  let { data: e, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: s, headers: i, auth: a } = t;
  t.headers = i = ft.from(i), t.url = l0(x0(t.baseURL, t.url, t.allowAbsoluteUrls), n.params, n.paramsSerializer), a && i.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let c;
  if (A.isFormData(e)) {
    if (nt.hasStandardBrowserEnv || nt.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((c = i.getContentType()) !== !1) {
      const [l, ...f] = c ? c.split(";").map((d) => d.trim()).filter(Boolean) : [];
      i.setContentType([l || "multipart/form-data", ...f].join("; "));
    }
  }
  if (nt.hasStandardBrowserEnv && (r && A.isFunction(r) && (r = r(t)), r || r !== !1 && h2(t.url))) {
    const l = o && s && x2.read(s);
    l && i.set(o, l);
  }
  return t;
}, g2 = typeof XMLHttpRequest < "u", v2 = g2 && function(n) {
  return new Promise(function(e, r) {
    const o = p0(n);
    let s = o.data;
    const i = ft.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: c, onDownloadProgress: l } = o, f, d, u, v, g;
    function h() {
      v && v(), g && g(), o.cancelToken && o.cancelToken.unsubscribe(f), o.signal && o.signal.removeEventListener("abort", f);
    }
    let p = new XMLHttpRequest();
    p.open(o.method.toUpperCase(), o.url, !0), p.timeout = o.timeout;
    function w() {
      if (!p)
        return;
      const x = ft.from(
        "getAllResponseHeaders" in p && p.getAllResponseHeaders()
      ), b = {
        data: !a || a === "text" || a === "json" ? p.responseText : p.response,
        status: p.status,
        statusText: p.statusText,
        headers: x,
        config: n,
        request: p
      };
      h0(function(C) {
        e(C), h();
      }, function(C) {
        r(C), h();
      }, b), p = null;
    }
    "onloadend" in p ? p.onloadend = w : p.onreadystatechange = function() {
      !p || p.readyState !== 4 || p.status === 0 && !(p.responseURL && p.responseURL.indexOf("file:") === 0) || setTimeout(w);
    }, p.onabort = function() {
      p && (r(new re("Request aborted", re.ECONNABORTED, n, p)), p = null);
    }, p.onerror = function() {
      r(new re("Network Error", re.ERR_NETWORK, n, p)), p = null;
    }, p.ontimeout = function() {
      let T = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const b = o.transitional || u0;
      o.timeoutErrorMessage && (T = o.timeoutErrorMessage), r(new re(
        T,
        b.clarifyTimeoutError ? re.ETIMEDOUT : re.ECONNABORTED,
        n,
        p
      )), p = null;
    }, s === void 0 && i.setContentType(null), "setRequestHeader" in p && A.forEach(i.toJSON(), function(T, b) {
      p.setRequestHeader(b, T);
    }), A.isUndefined(o.withCredentials) || (p.withCredentials = !!o.withCredentials), a && a !== "json" && (p.responseType = o.responseType), l && ([u, g] = Io(l, !0), p.addEventListener("progress", u)), c && p.upload && ([d, v] = Io(c), p.upload.addEventListener("progress", d), p.upload.addEventListener("loadend", v)), (o.cancelToken || o.signal) && (f = (x) => {
      p && (r(!x || x.type ? new rr(null, n, p) : x), p.abort(), p = null);
    }, o.cancelToken && o.cancelToken.subscribe(f), o.signal && (o.signal.aborted ? f() : o.signal.addEventListener("abort", f)));
    const S = u2(o.url);
    if (S && nt.protocols.indexOf(S) === -1) {
      r(new re("Unsupported protocol " + S + ":", re.ERR_BAD_REQUEST, n));
      return;
    }
    p.send(s || null);
  });
}, b2 = (n, t) => {
  const { length: e } = n = n ? n.filter(Boolean) : [];
  if (t || e) {
    let r = new AbortController(), o;
    const s = function(l) {
      if (!o) {
        o = !0, a();
        const f = l instanceof Error ? l : this.reason;
        r.abort(f instanceof re ? f : new rr(f instanceof Error ? f.message : f));
      }
    };
    let i = t && setTimeout(() => {
      i = null, s(new re(`timeout ${t} of ms exceeded`, re.ETIMEDOUT));
    }, t);
    const a = () => {
      n && (i && clearTimeout(i), i = null, n.forEach((l) => {
        l.unsubscribe ? l.unsubscribe(s) : l.removeEventListener("abort", s);
      }), n = null);
    };
    n.forEach((l) => l.addEventListener("abort", s));
    const { signal: c } = r;
    return c.unsubscribe = () => A.asap(a), c;
  }
}, y2 = function* (n, t) {
  let e = n.byteLength;
  if (e < t) {
    yield n;
    return;
  }
  let r = 0, o;
  for (; r < e; )
    o = r + t, yield n.slice(r, o), r = o;
}, S2 = async function* (n, t) {
  for await (const e of w2(n))
    yield* y2(e, t);
}, w2 = async function* (n) {
  if (n[Symbol.asyncIterator]) {
    yield* n;
    return;
  }
  const t = n.getReader();
  try {
    for (; ; ) {
      const { done: e, value: r } = await t.read();
      if (e)
        break;
      yield r;
    }
  } finally {
    await t.cancel();
  }
}, rl = (n, t, e, r) => {
  const o = S2(n, t);
  let s = 0, i, a = (c) => {
    i || (i = !0, r && r(c));
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
          let u = s += d;
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
}, gs = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", m0 = gs && typeof ReadableStream == "function", E2 = gs && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((n) => (t) => n.encode(t))(new TextEncoder()) : async (n) => new Uint8Array(await new Response(n).arrayBuffer())), g0 = (n, ...t) => {
  try {
    return !!n(...t);
  } catch {
    return !1;
  }
}, _2 = m0 && g0(() => {
  let n = !1;
  const t = new Request(nt.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return n = !0, "half";
    }
  }).headers.has("Content-Type");
  return n && !t;
}), ol = 64 * 1024, Xi = m0 && g0(() => A.isReadableStream(new Response("").body)), No = {
  stream: Xi && ((n) => n.body)
};
gs && ((n) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !No[t] && (No[t] = A.isFunction(n[t]) ? (e) => e[t]() : (e, r) => {
      throw new re(`Response type '${t}' is not supported`, re.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const C2 = async (n) => {
  if (n == null)
    return 0;
  if (A.isBlob(n))
    return n.size;
  if (A.isSpecCompliantForm(n))
    return (await new Request(nt.origin, {
      method: "POST",
      body: n
    }).arrayBuffer()).byteLength;
  if (A.isArrayBufferView(n) || A.isArrayBuffer(n))
    return n.byteLength;
  if (A.isURLSearchParams(n) && (n = n + ""), A.isString(n))
    return (await E2(n)).byteLength;
}, A2 = async (n, t) => {
  const e = A.toFiniteNumber(n.getContentLength());
  return e ?? C2(t);
}, T2 = gs && (async (n) => {
  let {
    url: t,
    method: e,
    data: r,
    signal: o,
    cancelToken: s,
    timeout: i,
    onDownloadProgress: a,
    onUploadProgress: c,
    responseType: l,
    headers: f,
    withCredentials: d = "same-origin",
    fetchOptions: u
  } = p0(n);
  l = l ? (l + "").toLowerCase() : "text";
  let v = b2([o, s && s.toAbortSignal()], i), g;
  const h = v && v.unsubscribe && (() => {
    v.unsubscribe();
  });
  let p;
  try {
    if (c && _2 && e !== "get" && e !== "head" && (p = await A2(f, r)) !== 0) {
      let b = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), O;
      if (A.isFormData(r) && (O = b.headers.get("content-type")) && f.setContentType(O), b.body) {
        const [C, N] = el(
          p,
          Io(tl(c))
        );
        r = rl(b.body, ol, C, N);
      }
    }
    A.isString(d) || (d = d ? "include" : "omit");
    const w = "credentials" in Request.prototype;
    g = new Request(t, {
      ...u,
      signal: v,
      method: e.toUpperCase(),
      headers: f.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: w ? d : void 0
    });
    let S = await fetch(g);
    const x = Xi && (l === "stream" || l === "response");
    if (Xi && (a || x && h)) {
      const b = {};
      ["status", "statusText", "headers"].forEach((z) => {
        b[z] = S[z];
      });
      const O = A.toFiniteNumber(S.headers.get("content-length")), [C, N] = a && el(
        O,
        Io(tl(a), !0)
      ) || [];
      S = new Response(
        rl(S.body, ol, C, () => {
          N && N(), h && h();
        }),
        b
      );
    }
    l = l || "text";
    let T = await No[A.findKey(No, l) || "text"](S, n);
    return !x && h && h(), await new Promise((b, O) => {
      h0(b, O, {
        data: T,
        headers: ft.from(S.headers),
        status: S.status,
        statusText: S.statusText,
        config: n,
        request: g
      });
    });
  } catch (w) {
    throw h && h(), w && w.name === "TypeError" && /Load failed|fetch/i.test(w.message) ? Object.assign(
      new re("Network Error", re.ERR_NETWORK, n, g),
      {
        cause: w.cause || w
      }
    ) : re.from(w, w && w.code, n, g);
  }
}), Yi = {
  http: Hg,
  xhr: v2,
  fetch: T2
};
A.forEach(Yi, (n, t) => {
  if (n) {
    try {
      Object.defineProperty(n, "name", { value: t });
    } catch {
    }
    Object.defineProperty(n, "adapterName", { value: t });
  }
});
const sl = (n) => `- ${n}`, O2 = (n) => A.isFunction(n) || n === null || n === !1, v0 = {
  getAdapter: (n) => {
    n = A.isArray(n) ? n : [n];
    const { length: t } = n;
    let e, r;
    const o = {};
    for (let s = 0; s < t; s++) {
      e = n[s];
      let i;
      if (r = e, !O2(e) && (r = Yi[(i = String(e)).toLowerCase()], r === void 0))
        throw new re(`Unknown adapter '${i}'`);
      if (r)
        break;
      o[i || "#" + s] = r;
    }
    if (!r) {
      const s = Object.entries(o).map(
        ([a, c]) => `adapter ${a} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? s.length > 1 ? `since :
` + s.map(sl).join(`
`) : " " + sl(s[0]) : "as no adapter specified";
      throw new re(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Yi
};
function qs(n) {
  if (n.cancelToken && n.cancelToken.throwIfRequested(), n.signal && n.signal.aborted)
    throw new rr(null, n);
}
function il(n) {
  return qs(n), n.headers = ft.from(n.headers), n.data = Us.call(
    n,
    n.transformRequest
  ), ["post", "put", "patch"].indexOf(n.method) !== -1 && n.headers.setContentType("application/x-www-form-urlencoded", !1), v0.getAdapter(n.adapter || Nr.adapter)(n).then(function(r) {
    return qs(n), r.data = Us.call(
      n,
      n.transformResponse,
      r
    ), r.headers = ft.from(r.headers), r;
  }, function(r) {
    return d0(r) || (qs(n), r && r.response && (r.response.data = Us.call(
      n,
      n.transformResponse,
      r.response
    ), r.response.headers = ft.from(r.response.headers))), Promise.reject(r);
  });
}
const b0 = "1.9.0", vs = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((n, t) => {
  vs[n] = function(r) {
    return typeof r === n || "a" + (t < 1 ? "n " : " ") + n;
  };
});
const al = {};
vs.transitional = function(t, e, r) {
  function o(s, i) {
    return "[Axios v" + b0 + "] Transitional option '" + s + "'" + i + (r ? ". " + r : "");
  }
  return (s, i, a) => {
    if (t === !1)
      throw new re(
        o(i, " has been removed" + (e ? " in " + e : "")),
        re.ERR_DEPRECATED
      );
    return e && !al[i] && (al[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + e + " and will be removed in the near future"
      )
    )), t ? t(s, i, a) : !0;
  };
};
vs.spelling = function(t) {
  return (e, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function R2(n, t, e) {
  if (typeof n != "object")
    throw new re("options must be an object", re.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(n);
  let o = r.length;
  for (; o-- > 0; ) {
    const s = r[o], i = t[s];
    if (i) {
      const a = n[s], c = a === void 0 || i(a, s, n);
      if (c !== !0)
        throw new re("option " + s + " must be " + c, re.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (e !== !0)
      throw new re("Unknown option " + s, re.ERR_BAD_OPTION);
  }
}
const bo = {
  assertOptions: R2,
  validators: vs
}, Dt = bo.validators;
let Cn = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Zc(),
      response: new Zc()
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
  async request(t, e) {
    try {
      return await this._request(t, e);
    } catch (r) {
      if (r instanceof Error) {
        let o = {};
        Error.captureStackTrace ? Error.captureStackTrace(o) : o = new Error();
        const s = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? s && !String(r.stack).endsWith(s.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + s) : r.stack = s;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, e) {
    typeof t == "string" ? (e = e || {}, e.url = t) : e = t || {}, e = Tn(this.defaults, e);
    const { transitional: r, paramsSerializer: o, headers: s } = e;
    r !== void 0 && bo.assertOptions(r, {
      silentJSONParsing: Dt.transitional(Dt.boolean),
      forcedJSONParsing: Dt.transitional(Dt.boolean),
      clarifyTimeoutError: Dt.transitional(Dt.boolean)
    }, !1), o != null && (A.isFunction(o) ? e.paramsSerializer = {
      serialize: o
    } : bo.assertOptions(o, {
      encode: Dt.function,
      serialize: Dt.function
    }, !0)), e.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? e.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : e.allowAbsoluteUrls = !0), bo.assertOptions(e, {
      baseUrl: Dt.spelling("baseURL"),
      withXsrfToken: Dt.spelling("withXSRFToken")
    }, !0), e.method = (e.method || this.defaults.method || "get").toLowerCase();
    let i = s && A.merge(
      s.common,
      s[e.method]
    );
    s && A.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (g) => {
        delete s[g];
      }
    ), e.headers = ft.concat(i, s);
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
      const g = [il.bind(this), void 0];
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
      } catch (p) {
        h.call(this, p);
        break;
      }
    }
    try {
      f = il.call(this, v);
    } catch (g) {
      return Promise.reject(g);
    }
    for (d = 0, u = l.length; d < u; )
      f = f.then(l[d++], l[d++]);
    return f;
  }
  getUri(t) {
    t = Tn(this.defaults, t);
    const e = x0(t.baseURL, t.url, t.allowAbsoluteUrls);
    return l0(e, t.params, t.paramsSerializer);
  }
};
A.forEach(["delete", "get", "head", "options"], function(t) {
  Cn.prototype[t] = function(e, r) {
    return this.request(Tn(r || {}, {
      method: t,
      url: e,
      data: (r || {}).data
    }));
  };
});
A.forEach(["post", "put", "patch"], function(t) {
  function e(r) {
    return function(s, i, a) {
      return this.request(Tn(a || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: i
      }));
    };
  }
  Cn.prototype[t] = e(), Cn.prototype[t + "Form"] = e(!0);
});
let k2 = class y0 {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let e;
    this.promise = new Promise(function(s) {
      e = s;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let s = r._listeners.length;
      for (; s-- > 0; )
        r._listeners[s](o);
      r._listeners = null;
    }), this.promise.then = (o) => {
      let s;
      const i = new Promise((a) => {
        r.subscribe(a), s = a;
      }).then(o);
      return i.cancel = function() {
        r.unsubscribe(s);
      }, i;
    }, t(function(s, i, a) {
      r.reason || (r.reason = new rr(s, i, a), e(r.reason));
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
    const e = this._listeners.indexOf(t);
    e !== -1 && this._listeners.splice(e, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), e = (r) => {
      t.abort(r);
    };
    return this.subscribe(e), t.signal.unsubscribe = () => this.unsubscribe(e), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new y0(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
};
function P2(n) {
  return function(e) {
    return n.apply(null, e);
  };
}
function I2(n) {
  return A.isObject(n) && n.isAxiosError === !0;
}
const $i = {
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
Object.entries($i).forEach(([n, t]) => {
  $i[t] = n;
});
function S0(n) {
  const t = new Cn(n), e = Jf(Cn.prototype.request, t);
  return A.extend(e, Cn.prototype, t, { allOwnKeys: !0 }), A.extend(e, t, null, { allOwnKeys: !0 }), e.create = function(o) {
    return S0(Tn(n, o));
  }, e;
}
const Le = S0(Nr);
Le.Axios = Cn;
Le.CanceledError = rr;
Le.CancelToken = k2;
Le.isCancel = d0;
Le.VERSION = b0;
Le.toFormData = ms;
Le.AxiosError = re;
Le.Cancel = Le.CanceledError;
Le.all = function(t) {
  return Promise.all(t);
};
Le.spread = P2;
Le.isAxiosError = I2;
Le.mergeConfig = Tn;
Le.AxiosHeaders = ft;
Le.formToJSON = (n) => f0(A.isHTMLForm(n) ? new FormData(n) : n);
Le.getAdapter = v0.getAdapter;
Le.HttpStatusCode = $i;
Le.default = Le;
const {
  Axios: cv,
  AxiosError: lv,
  CanceledError: uv,
  isCancel: fv,
  CancelToken: dv,
  VERSION: hv,
  all: xv,
  Cancel: pv,
  isAxiosError: mv,
  spread: gv,
  toFormData: vv,
  AxiosHeaders: bv,
  HttpStatusCode: yv,
  formToJSON: Sv,
  getAdapter: wv,
  mergeConfig: Ev
} = Le;
function jo() {
  const n = ["PATCH", "response", "GET", "PUT", "defaults", "http://192", "1370NOObZh", "params", "DELETE", "1070311zehPkj", "1962TpPuPp", "message", "Content-Ty", "data", "23445dbwtCE", "withCreden", "POST", "330GQnzPx", "993477wfWWEq", "applicatio", "n/json", "v1/client", "error", "6458352yBXzeU", "tials", ".168.11.76", "348990pNqPGw", "2EzVUjX", "2299850uihScu", ":3000/api/", "3408fBQfEw"];
  return jo = function() {
    return n;
  }, jo();
}
const Ct = Lo;
(function(n, t) {
  const e = Lo, r = n();
  for (; ; )
    try {
      if (parseInt(e(446)) / 1 * (-parseInt(e(445)) / 2) + parseInt(e(437)) / 3 + -parseInt(e(442)) / 4 + parseInt(e(425)) / 5 * (parseInt(e(429)) / 6) + parseInt(e(416)) / 7 + parseInt(e(418)) / 8 * (-parseInt(e(433)) / 9) + parseInt(e(436)) / 10 * (parseInt(e(428)) / 11) === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(jo, 886932);
Ct(424) + Ct(444) + Ct(417) + Ct(440);
Le[Ct(423)][Ct(434) + Ct(443)] = !0;
const N2 = async (n) => {
  var e, r, o, s;
  const t = Ct;
  try {
    return (await Le(n))[t(432)];
  } catch (i) {
    throw ((r = (e = i[t(420)]) == null ? void 0 : e[t(432)]) == null ? void 0 : r[t(430)]) || ((s = (o = i[t(420)]) == null ? void 0 : o[t(432)]) == null ? void 0 : s[t(441)]) || i[t(430)];
  }
}, j2 = {};
j2[Ct(431) + "pe"] = Ct(438) + Ct(439);
function Lo(n, t) {
  const e = jo();
  return Lo = function(r, o) {
    return r = r - 416, e[r];
  }, Lo(n, t);
}
const Ee = Mo;
(function(n, t) {
  const e = Mo, r = n();
  for (; ; )
    try {
      if (parseInt(e(182)) / 1 * (parseInt(e(191)) / 2) + parseInt(e(173)) / 3 + -parseInt(e(185)) / 4 * (parseInt(e(178)) / 5) + -parseInt(e(188)) / 6 + -parseInt(e(168)) / 7 * (-parseInt(e(192)) / 8) + -parseInt(e(165)) / 9 + parseInt(e(169)) / 10 * (parseInt(e(193)) / 11) === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Do, 408805);
const hn = {};
hn[Ee(181)] = Ee(180) + "E", hn[Ee(172)] = Ee(189), hn[Ee(190)] = Ee(194) + "N", hn[Ee(186)] = Ee(180) + "E", hn[Ee(164)] = Ee(189), hn[Ee(166)] = Ee(194) + "N";
const Ft = hn, Gi = {};
Gi[Ee(176)] = Ee(189), Gi[Ee(183)] = Ee(194) + "N";
const L2 = Gi, D2 = Ee(175);
function Do() {
  const n = ["ent", "moveEvent", "keyup", "wheelEvent", "1392545CklqBh", "enuHide", "ACTION_MOV", "mousemove", "5jrhmhY", "keydown", "Event", "4udfZjy", "touchmove", "shortcutEv", "785562GVXyzy", "ACTION_UP", "mousedown", "110362zpfJJJ", "804768JYOXVP", "12496hiUZgE", "ACTION_DOW", "touchend", "6536394xIodWJ", "touchstart", "assistiveM", "7HuWWkt", "5960pRUeAd", "keyBoardEv", "fullscreen", "mouseup", "1472850jZvHZa"];
  return Do = function() {
    return n;
  }, Do();
}
const M2 = Ee(177), B2 = Ee(170) + Ee(174), w0 = Ee(167) + Ee(179), Ki = Ee(187) + Ee(174);
function Mo(n, t) {
  const e = Do();
  return Mo = function(r, o) {
    return r = r - 164, e[r];
  }, Mo(n, t);
}
const F2 = Ee(171) + Ee(184);
(function(n, t) {
  const e = vn, r = n();
  for (; ; )
    try {
      if (parseInt(e(205)) / 1 * (parseInt(e(154)) / 2) + parseInt(e(139)) / 3 * (parseInt(e(214)) / 4) + -parseInt(e(150)) / 5 + -parseInt(e(177)) / 6 + -parseInt(e(149)) / 7 * (parseInt(e(158)) / 8) + parseInt(e(192)) / 9 * (parseInt(e(178)) / 10) + -parseInt(e(142)) / 11 * (-parseInt(e(133)) / 12) === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Bo, 991243);
function vn(n, t) {
  const e = Bo();
  return vn = function(r, o) {
    return r = r - 132, e[r];
  }, vn(n, t);
}
const z2 = ({ isMobile: n, assistive: t, onImgEvent: e, canvasContent: r, imageRef: o }) => {
  const [s, i] = at(!1), a = (d) => {
    const u = vn;
    if (d[u(193) + u(219)](), !o[u(206)]) return;
    const v = o[u(206)];
    let g = Ft[d[u(191)]];
    if (t[u(231)] == !0 || t[u(134)] == !0)
      if (u(187) !== u(187)) {
        _0x15feb9 == _0x36410d[u(225)] && _0x556212(_0x1114a9, {});
        return;
      } else {
        g == Ft[u(225)] && e(w0, {});
        return;
      }
    if (g == Ft[u(213)] && i(!0), g != Ft[u(213)] && s == !1) {
      if (u(216) !== u(237)) return;
      _0x102cc1[u(222)] = u(186) + u(179), _0x51c892[u(203)] = 19;
    }
    g == Ft[u(225)] && (u(208) !== u(208) ? _0x9dccd[u(235)] == !0 && (_0x2c048a[u(203)] = _0x1177f4[u(203)][u(233) + "e"]()) : i(!1));
    let h, p;
    const w = v[u(227) + u(146) + "t"]();
    if (d[u(191)][u(137)](u(232))) {
      const { touches: x, changedTouches: T } = d, b = x[0] ?? T[0];
      h = b[u(140)] - w[u(172)], p = b[u(184)] - w[u(202)];
    } else d[u(191)][u(137)](u(201)) && (h = d[u(165)] - w[u(172)], p = d[u(166)] - w[u(202)]);
    const S = {};
    S[u(155)] = u(170), S[u(220)] = g, S.x = h, S.y = p, S[u(183)] = w[u(183)], S[u(173)] = w[u(173)], e(D2, S), v[u(143)]();
  }, c = (d) => {
    const u = vn;
    if (d[u(193) + u(219)](), !o[u(206)]) return;
    const v = o[u(206)], g = d[u(207)], h = v[u(227) + u(146) + "t"](), p = {};
    p[u(155)] = u(228), p[u(183)] = v[u(171) + "h"], p[u(173)] = v[u(215) + "ht"], p.x = d[u(165)] - h[u(172)], p.y = d[u(166)] - h[u(202)], p[u(236)] = g, e(M2, p), v[u(143)]();
  }, l = async (d) => {
    const u = vn;
    if (d[u(193) + u(219)](), !o[u(206)]) return;
    const v = o[u(206)], g = L2[d[u(191)]], h = d[u(203)][u(204) + "e"]();
    if (((x) => {
      const T = u;
      return [T(197), T(230), T(157)][T(137)](x);
    })(h) == !0) return;
    const w = async () => {
      const x = u;
      if (x(136) !== x(136)) _0x24518b[x(203)] = _0x474f33[x(203)][x(233) + "e"]();
      else {
        const T = {};
        T[x(155)] = x(135), T[x(220)] = g, T[x(222)] = x(240) + x(195), T[x(203)] = d[x(203)], T[x(153)] = 0, T[x(229)] = 0;
        const b = T;
        if (d[x(198)] == !0)
          if (x(189) !== x(189)) _0x495ef3[x(164) + x(175)](_0x2b63ab, _0x1f461e);
          else if (h == "c")
            if (x(180) === x(180)) b[x(222)] = x(181);
            else return;
          else
            h == "a" ? x(199) === x(241) ? (_0xc4c793[x(222)] = x(186) + x(179), _0x1393ae[x(203)] = 61) : (b[x(222)] = x(186) + x(179), b[x(229)] = 4096, b[x(203)] = 29) : h == "v" && (b[x(222)] = x(234), b[x(203)] = await navigator[x(147)][x(212)]());
        else if (h == x(238)) {
          if (x(242) === x(151))
            return [x(197), x(230), x(157)][x(137)](_0x5d1922);
          b[x(222)] = x(186) + x(179), b[x(203)] = 19;
        } else if (h == x(223))
          if (x(145) === x(209)) {
            const { touches: O, changedTouches: C } = _0x3359b7, N = O[0] ?? C[0];
            _0xa24a6e = N[x(140)] - _0x4004ea[x(172)], _0x53925e = N[x(184)] - _0x4393cb[x(202)];
          } else b[x(222)] = x(186) + x(179), b[x(203)] = 20;
        else if (h == x(141))
          if (x(168) !== x(163)) b[x(222)] = x(186) + x(179), b[x(203)] = 21;
          else return;
        else if (h == x(174))
          if (x(210) !== x(188)) b[x(222)] = x(186) + x(179), b[x(203)] = 22;
          else return;
        else
          h == x(169) ? (b[x(222)] = x(186) + x(179), b[x(203)] = 67) : h == x(167) ? x(176) === x(176) ? (b[x(222)] = x(186) + x(179), b[x(203)] = 66) : (_0xd746f3 = _0x225984[x(165)] - _0x35edae[x(172)], _0x3d47dc = _0x22571e[x(166)] - _0x2f710f[x(202)]) : h == x(160) && (b[x(222)] = x(186) + x(179), b[x(203)] = 61);
        if (b[x(191)] == x(240) + x(195))
          if (x(224) !== x(152)) d[x(235)] == !0 && (x(194) === x(196) ? _0x500b40(!1) : b[x(203)] = b[x(203)][x(233) + "e"]());
          else return;
        return b;
      }
    }, S = await w();
    S && e(B2, S), v[u(143)]();
  };
  ct(() => {
    const d = vn;
    if (d(185) !== d(185)) _0x10b202(!0);
    else {
      const u = o[d(206)];
      if (u)
        if (d(200) === d(200)) {
          const v = {};
          v[d(243)] = !1;
          const g = v;
          return n ? d(161) === d(159) ? (_0x5ab2de[d(222)] = d(186) + d(179), _0x332cfd[d(203)] = 66) : (u[d(164) + d(175)](d(182), a, g), u[d(164) + d(175)](d(162), a, g), u[d(164) + d(175)](d(156), a)) : (u[d(164) + d(175)](d(211), c, g), u[d(164) + d(175)](d(190), l), [d(148), d(213), d(225)][d(221)]((h) => {
            const p = d;
            u[p(164) + p(175)](h, a);
          })), () => {
            const h = d;
            h(218) !== h(218) ? _0x1b4d4d(_0x1caa3d, _0x1bfcf3) : u && (n ? h(132) === h(217) ? (_0x116a06[h(222)] = h(186) + h(179), _0xf8e62b[h(203)] = 20) : [h(182), h(162), h(156)][h(221)]((p) => {
              const w = h;
              u[w(144) + w(239)](p, a);
            }) : h(138) !== h(226) ? ([h(148), h(213), h(225), h(211), h(190)][h(221)]((p) => {
              const w = h;
              u[w(144) + w(239)](p, a);
            }), u[h(144) + h(239)](h(190), l)) : ([h(148), h(213), h(225), h(211), h(190)][h(221)]((p) => {
              const w = h;
              _0x290a5f[w(144) + w(239)](p, _0x571045);
            }), _0x359c58[h(144) + h(239)](h(190), _0x35b907)));
          };
        } else _0x2185d8[d(222)] = d(186) + d(179), _0x314db6[d(229)] = 4096, _0x190837[d(203)] = 29;
    }
  }, [n, a, c, l]);
  const f = { ref: o, ...r };
  return U.jsx(qd, f);
};
function Bo() {
  const n = ["RFYgd", "mouseup", "LXPmc", "getBoundin", "wheelEvent", "meta_state", "shift", "isDown", "touch", "toUpperCas", "PASTE_TEXT", "shiftKey", "delta", "XeHiV", "arrowup", "tListener", "KEYBOARD_T", "APgAH", "jpLFw", "passive", "krqru", "300SEcjNk", "showMenu", "keyEvent", "xObzT", "includes", "vcRNm", "6CkHKkt", "pageX", "arrowleft", "1939663sNhzvQ", "focus", "removeEven", "ATqng", "gClientRec", "clipboard", "mousemove", "52346wGFgSi", "7278525bKCXgO", "tQkqV", "UnuLs", "repeat", "326738gLNDAo", "action", "touchend", "capslock", "1784zhNFoI", "tjfvg", "tab", "gcMZa", "touchmove", "IetdT", "addEventLi", "clientX", "clientY", "enter", "JWojz", "backspace", "touchEvent", "offsetWidt", "left", "height", "arrowright", "stener", "zntGi", "8855298fGznTo", "228210EHIySE", "ODE", "KHxLZ", "COPY_TEXT", "touchstart", "width", "pageY", "jUTIg", "KEYBOARD_C", "lfGXy", "uEUlq", "FnOgR", "keydown", "type", "9eCBMMy", "preventDef", "tRmoi", "EXT", "uhgqs", "control", "ctrlKey", "uNKTl", "utCeo", "mouse", "top", "key", "toLowerCas", "5AnWKos", "current", "deltaY", "HbxUz", "wSsyC", "rgGht", "wheel", "readText", "mousedown", "684868rCBcMS", "offsetHeig", "CVtbx", "LurNv", "UuwWu", "ault", "keyAction", "forEach", "typeKey", "arrowdown"];
  return Bo = function() {
    return n;
  }, Bo();
}
const V2 = "data:image/png;base64,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", bs = zo;
(function(n, t) {
  const e = zo, r = n();
  for (; ; )
    try {
      if (parseInt(e(200)) / 1 * (parseInt(e(205)) / 2) + parseInt(e(202)) / 3 + -parseInt(e(199)) / 4 * (-parseInt(e(198)) / 5) + -parseInt(e(203)) / 6 + -parseInt(e(201)) / 7 * (-parseInt(e(206)) / 8) + -parseInt(e(209)) / 9 + parseInt(e(208)) / 10 === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Fo, 141927);
function Fo() {
  const n = ["div", "242BmIgOm", "155296qruFux", "img", "2118900RjSFIo", "2483082DLLRiT", "116835WcGOoa", "12JmOSAQ", "2261jUQOhT", "7RyHPIs", "88890dvdISb", "1120734zKFlrV"];
  return Fo = function() {
    return n;
  }, Fo();
}
const H2 = Rt[bs(204)]`
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
`, Ut = Rt[bs(204)]`
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
`, qt = Rt.p`
  height: 5px;
  margin-top: 2px;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
`;
function zo(n, t) {
  const e = Fo();
  return zo = function(r, o) {
    return r = r - 198, e[r];
  }, zo(n, t);
}
const U2 = Rt[bs(207)]`
  position: absolute;
  backdrop-filter: blur(46px);
  border-radius: 50%;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.723);
  top: 50%;
  right: 5%;
`, q2 = Rt[bs(204)]`
  user-select: none;
  transition: opacity 0.6s ease;
  z-index: 3;
  opacity: 0.3;
`;
(function(n, t) {
  const e = Yn, r = n();
  for (; ; )
    try {
      if (parseInt(e(457)) / 1 * (-parseInt(e(439)) / 2) + parseInt(e(434)) / 3 * (-parseInt(e(467)) / 4) + parseInt(e(451)) / 5 + -parseInt(e(425)) / 6 + parseInt(e(453)) / 7 * (parseInt(e(441)) / 8) + -parseInt(e(458)) / 9 * (-parseInt(e(447)) / 10) + parseInt(e(433)) / 11 * (parseInt(e(442)) / 12) === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Vo, 818656);
function Yn(n, t) {
  const e = Vo();
  return Yn = function(r, o) {
    return r = r - 425, e[r];
  }, Yn(n, t);
}
const cl = () => {
  const n = Yn;
  return document[n(466) + n(455)] || document[n(456) + n(459)] || document[n(449) + n(432) + n(465)] || document[n(446) + n(435)];
};
function Vo() {
  const n = ["59700NCcakR", "mozRequest", "requestFul", "ullscreen", "msFullscre", "263090GKYdRt", "webkitExit", "webkitFull", "mozCancelF", "910895FqTsYv", "querySelec", "4762639eHETLJ", "estFullscr", "Element", "mozFullScr", "193036QInBCL", "135EaSpPy", "eenElement", "msRequestF", "msExitFull", "NTJMc", "FullScreen", "Fullscreen", "ent", "fullscreen", "4YiStzX", "3022542NhBkmH", "reen", "screen", "#screen_", "ullScreen", "exitFullsc", "een", "screenElem", "3047WuzLwu", "1043019ZkHJHa", "enElement", "lscreen", "rBKKZ", "tor", "10IWygZZ", "webkitRequ", "8ucMaLJ"];
  return Vo = function() {
    return n;
  }, Vo();
}
const W2 = (n) => {
  const t = Yn, e = document[t(452) + t(438)](t(428) + n);
  e[t(444) + t(436)] ? e[t(444) + t(436)]() : e[t(443) + t(463)] ? e[t(443) + t(463)]() : e[t(440) + t(454) + t(431)] ? e[t(440) + t(454) + t(431)]() : e[t(460) + t(445)] && e[t(460) + t(445)]();
}, X2 = () => {
  const n = Yn;
  document[n(430) + n(426)] ? document[n(430) + n(426)]() : document[n(450) + n(429)] ? n(437) !== n(462) ? document[n(450) + n(429)]() : _0x41d24b[n(448) + n(464)]() : document[n(448) + n(464)] ? document[n(448) + n(464)]() : document[n(461) + n(427)] && document[n(461) + n(427)]();
};
(function(n, t) {
  const e = Ar, r = n();
  for (; ; )
    try {
      if (-parseInt(e(591)) / 1 * (-parseInt(e(688)) / 2) + parseInt(e(718)) / 3 + parseInt(e(675)) / 4 * (-parseInt(e(603)) / 5) + -parseInt(e(763)) / 6 * (-parseInt(e(668)) / 7) + -parseInt(e(478)) / 8 * (-parseInt(e(678)) / 9) + -parseInt(e(710)) / 10 * (parseInt(e(567)) / 11) + -parseInt(e(726)) / 12 * (parseInt(e(578)) / 13) === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Ho, 506390);
function Ar(n, t) {
  const e = Ho();
  return Ar = function(r, o) {
    return r = r - 459, e[r];
  }, Ar(n, t);
}
function Ho() {
  const n = ["75z", " 0 0 0-.38", "h4zm12-6h-", " 0 0 0 1.0", "l10.283 7.", "M20 11V5c0", "pageY", "Home", "M4 6h16v2H", "V5h14v14z", " 0-2 .897-", "-2 2v6c0 1", "move", "change", "-1.052-3.3", "27.05A1 1 ", "0h2v-6H4v2", "1.003 0 0 ", "3 0 2-.897", "Icon", "M20 2H10c-", "Volume", "shortcutCo", "228AQpMsn", "click", "Screen", " 1 0 0 0 1", "IigOJ", "47 3.999 7", "RuMDL", "LaLSV", "Recents", ".999-4.909", "Paste", "3 0-2 .897", "gdSyn", "48 3.832a1", ".897-2-2-2", "m-2-4h2V3h", "YJgLX", "h-5c-1.103", "nbJLC", "2-2h-4V4h1", "fullscreen", "webkitfull", "a.995.995 ", "2-.082-.03", "NMyEx", "HbUxq", "6l3.612-4.", "189144BaznAK", "ent", "4v2h6zM8 2", "59 15.016 ", ".21a1 1 0 ", "7zm11-5h-2", "forEach", "M16.75 2h-", "7.032 15 7", "svg", "20px", "17-.056-.0", "0 0-.396-1", "345-5.236 ", "027 1.027 ", "4zm0 5h16v", "preventDef", " 2v5H4V5h3", "showMenu", "volume", "2 2zm2 7v-", "readText", "1.103 0-2 ", "assistive", "clipboard", "get", "017.082-.0", "clientX", "xzJEV", "3 9a1.003 ", "paste", "4c0-1.103-", "menu_", "-1-1H8a1 1", "M20.978 13", "mouse", "-.769zm-8.", "0a.999.999", "2 2h7c0 1.", "recents", ".257 5.127", "data", "10c-1.103 ", "c1.103 0 2", "IAxqI", "061-.016.0", "M16 21c3.5", "m4.431 12.", "2H4zm0 5h1", " 5.999-9S1", "FtQBS", "width", "0V4a1 1 0 ", "3c.033 0 .", "http://www", "addEventLi", "yazmd", "33L12 5.86", " 7H4c-1.10", "6zm0 4h6v2", "03-.897-2-", "nWUJH", ".089-1.218", "57-5.428 6", "device_id", "10l.002 10", "zIndex", "data-id", "getAttribu", "nhqyM", "03 0 2-.89", "7 16 3v2c2", "touchmove", "1 0 0 0-1-", "zM4 20V10h", "knIHd", "home", "height", "set", "circle", "HmiTw", ".897-2 2v4", "type", "0 18V4h10l", "-2-5zM4 17", "removeEven", "27-1.547 5", "ault", "93-.019a1.", "11BGCQzK", "landscape", " 2 2zm0-8h", "H5v-5H3v7h", "7h7l.001 7", "rgba(255, ", "3a.986.986", "grab", "2-.116C7.0", "4v-4c0-1.1", "opacity", "13rWwqKy", "div", "zEMVG", " 0 0 0-1 1", ".225-1.1 2", "9.527 4.54", "ivRHM", "674.31a1 1", "Back", "-2-2-2zm-1", "a1 1 0 0 0", "mouseup", "H4zm16-6h-", "2148tEIaLM", "416 3.377 ", "taskId", "eenchange", "screenchan", "9 21V3a1 1", " 2v16c0 1.", "h2.697l5.7", "-2-2-2zm-9", "255, 255, ", "4.445-2.96", "children", "15yTpFQC", ".004 1.004", "enchange", "back", "4c-.025-.0", "OgJgz", "passive", "7 2-2v-4h4", "-.897 2-2V", "7a1 1 0 0 ", ".116c.026-", "touchend", " 0 0 0-1.5", "mozfullscr", "H4c-1.103 ", "mousemove", "-1.103-.89", "sync", "13%", "jHPjP", "touch_", "shortcutEv", "stener", "1 0 0 0-1 ", "pageX", "assistive_", "0 0 1.645z", "-7v2h5z", "Sync", "gClientRec", "msfullscre", "target", "-3.229 2-5", "1v16a1 1 0", "min", "H6z", " 0 0 0-.57", "Hide ID", "6a1 1 0 0 ", "7-2-2-2h-3", "0-2 .897-2", "v5h-5v2h7z", " 2v10c0 1.", "11.75", "69-.823l-1", "0 1.767.51", "left", "closest", "fill", "SKuad", ".024l-14-1", "0 1-1V4a1 ", "touch", "v2z", "3px", "uERnW", "0 0 0 14 2", "touch_clas", "8v12.264l-", "M5 5h5V3H3", "M6 12h6v2H", "getBoundin", "mousedown", "5.46 1.701", "v2h8V5h3v6", "27867nUmriJ", " 15H4V9z", "0 0 0 .782", "12%", "right", " 0 0 1 1h1", "M16 7v10c1", "831112kPzMNp", "cursor", " 3.999 4.0", "297utffOD", ".387 1.386", "M20 3H4a1 ", "H13z", "00/svg", "2 2h7c1.10", "touchstart", "0v10z", "idbwz", "h-2v6h6z", "918jkHmDZ", "focus", "isDown", "current", " 2-2v-7c0-", "includes", "7 2-2V4c0-", "6v2H4z", "copy", " 2v13c0 1.", "0 0 24 24", "clientY", "103.897 2 ", "path", "shortcut", "M10 4H8v4H", "jcrUY", "Copy", "S18.387 17", "08 3.677L7", "6v6h2v-4h4", "zXHWb", "3501550EcBEex", "75.931l2 1", "s-.775-3.9", "max", ".015.057-.", "0 0-1.554-", "1.048z", "zm0-6h-4V4", "1515837sKCkGT", "tListener", "2 2h10c1.1", "now", "1.103-.897", "0 0 0 .38-", "top", "822 13 9A1", "11313948mRAXJS", ".w3.org/20", "Show ID", ".103.897 2", "zwRdU", "action", "8.347l-3.0", "v7h2zm5 14", ".614 16 19", "HcQrB", "1zm-1 16H5", ".002 16H6.", ".832L6.697", "sAKIP"];
  return Ho = function() {
    return n;
  }, Ho();
}
const Y2 = Il((n, t) => {
  const e = Ar, { displayId: r, isMobile: o, onSenData: s, status: i, imageRef: a, isShowDeviceId: c } = n, [l, f] = at(0), [d, u] = at(0), [v, g] = at(null), [h, p] = at(0), w = Ye(null), S = Ye(null), x = Ye(null), T = {};
  T[e(676)] = e(752), T[e(577)] = 0.3, T[e(544)] = 999;
  const [b, O] = at(T), C = {};
  C[e(544)] = 999, C[e(555)] = "", C[e(529)] = e(621);
  const [N, z] = at(C), $ = {};
  $[e(544)] = 1e3;
  const [oe, K] = at($), B = Ye(null), [W, H] = at(null), te = Ye(null), Z = (k) => {
    const E = e;
    if (E(769) === E(769)) {
      if (k[E(494) + E(565)](), i[E(503)][E(496)] == !0) return;
      const Ae = Ft[k[E(560)]], we = a[E(691)], ke = x[E(691)], Y = we[E(664) + E(632) + "t"](), Te = ke[E(664) + E(632) + "t"](), ye = 3;
      let wt, Je;
      const Ht = Y[E(529)] - Te[E(529)], fn = Y[E(555)] - Te[E(555)];
      if (k[E(560)][E(693)](E(655))) {
        const { touches: Me, changedTouches: Ze } = k, Qe = Me[0] ?? Ze[0];
        wt = Qe[E(627)], Je = Qe[E(746)];
      } else k[E(560)][E(693)](E(513)) && (wt = k[E(505)], Je = k[E(699)]);
      if (Ae == Ft[E(665)])
        if (E(739) !== E(739)) _0x52e832[E(533) + E(625)](E(684), _0x48bf16, _0x5dce92), _0x59cd18[E(533) + E(625)](E(550), _0x3032d7, _0x1e3e41), _0x40c96e[E(533) + E(625)](E(614), _0xe4b2ac);
        else {
          i[E(556)]({ ...i[E(503)], isDown: !0 }), f(wt - Te[E(649)]), u(Je - Te[E(724)]);
          const Me = {};
          Me[E(577)] = 1, Me[E(676)] = E(574);
          const Ze = { ...b, ...Me };
          O(Ze), p(performance[E(721)]());
        }
      else if (Ae == Ft[E(618)])
        if (E(534) !== E(584)) {
          if (i[E(503)][E(690)] == !1) return;
          let Me = wt - l - Y[E(649)], Ze = Je - d - Y[E(724)];
          Me = Math[E(713)](ye, Math[E(637)](Me, Ht) - ye), Ze = Math[E(713)](ye, Math[E(637)](Ze, fn) - ye);
          const Qe = {};
          Qe[E(724)] = Ze + "px", Qe[E(649)] = Me + "px";
          const Lt = { ...N, ...Qe };
          z(Lt);
          const st = {};
          st.x = Me, st.y = Ze, te[E(691)] = st;
        } else _0x4c1bd7[E(691)] = _0x328b38;
      else if (Ae == Ft[E(589)])
        if (E(476) === E(476)) {
          const Me = performance[E(721)]() - h;
          if (v == Ft[E(665)] || Me < 100) {
            const mt = {};
            mt[E(496)] = !0, mt[E(690)] = !1, i[E(556)]({ ...i[E(503)], ...mt });
          } else i[E(556)]({ ...i[E(503)], isDown: !1 });
          const Ze = te[E(691)].x > Ht / 2 ? Ht - ye : ye, Qe = {};
          Qe[E(649)] = Ze + "px";
          const Lt = { ...N, ...Qe };
          z(Lt);
          const st = {};
          st[E(577)] = 0.3, st[E(676)] = E(752);
          const Gt = { ...b, ...st };
          O(Gt);
        } else {
          const Me = {};
          Me[E(496)] = !0, Me[E(690)] = !1;
          const Ze = { ..._0x139bde[E(503)], ...Me };
          _0x32afc5[E(556)](Ze);
        }
      g(Ae), ke[E(689)]();
    } else {
      const Ae = _0x2dd1d0();
      _0x465685(_0x1de1e7, Ae);
    }
  }, Q = async (k) => {
    const E = e;
    if (E(539) === E(528)) _0x251f3d[E(563) + E(719)](_0x471686, _0x2dbfb2);
    else {
      k[E(494) + E(565)]();
      const Ae = k[E(634)][E(650)](E(579))[E(546) + "te"](E(545));
      if (Ae === E(471))
        cl() ? X2() : W2(r);
      else {
        const we = {};
        we[E(731)] = E(624) + E(479), we[E(702)] = Ae, we[E(519)] = "";
        const ke = we;
        Ae === E(508) && (E(553) !== E(463) ? ke[E(519)] = await navigator[E(502)][E(499)]() : _0x2b2cc0[E(563) + E(719)](_0x2f3d0e, _0x42ae72)), Ae === E(696) && (ke[E(593)] = E(762) + "py"), s(Ki, ke);
      }
      i[E(556)]({ ...i[E(503)], showMenu: !1 }), S[E(691)][E(689)]();
    }
  }, ee = (k) => {
    const E = e;
    if (E(767) !== E(767)) _0x2b2fa7[E(563) + E(719)](E(764), _0x42fb82);
    else {
      const Ae = cl();
      s(F2, Ae);
    }
  };
  ct(() => {
    requestAnimationFrame(() => {
      const k = Ar;
      if (k(770) === k(652)) _0x25d639[k(533) + k(625)](k(764), _0xe9266e);
      else {
        const E = { ...oe };
        E[k(577)] = i[k(503)][k(496)] ? 1 : 0, K(E);
      }
    });
  }, [i]), ct(() => {
    const k = e;
    if (k(686) !== k(608)) {
      const E = a[k(691)], Ae = [k(471) + k(753), k(472) + k(595) + "ge", k(616) + k(594), k(633) + k(605)];
      return E && (k(580) === k(580) ? Ae[k(484)]((we) => {
        const ke = k;
        if (ke(467) !== ke(522)) E[ke(533) + ke(625)](we, ee);
        else return;
      }) : _0x18a0f2(_0x530a8d)), () => {
        const we = k;
        we(475) === we(558) ? _0x2b4ab6[we(484)]((ke) => {
          const Y = we;
          _0x5872ac[Y(533) + Y(625)](ke, _0x2c601e);
        }) : E && E[we(563) + we(719)](we(764), ee);
      };
    } else {
      const E = { ..._0x52d7f9[k(503)] };
      E[k(690)] = !1, _0xc52a69[k(556)](E);
    }
  }, []), ct(() => {
    const k = e, E = x[k(691)], Ae = S[k(691)];
    if (Ae && Ae[k(533) + k(625)](k(764), Q), E)
      if (k(506) !== k(658)) {
        const we = {};
        we[k(609)] = !1;
        const ke = we;
        if (o)
          if (k(469) !== k(469)) {
            if (_0x266498[k(503)][k(690)] == !1) return;
            let Y = _0x241c9e - _0x5eecd3 - _0x571f97[k(649)], Te = _0x57e634 - _0x3fc77b - _0x568993[k(724)];
            Y = _0x47c203[k(713)](_0x4f5648, _0x3c9b3b[k(637)](Y, _0x38965c) - _0x3da9d4), Te = _0x2d9b0c[k(713)](_0x53f2d7, _0x203650[k(637)](Te, _0x1c5daf) - _0x2fa00f);
            const ye = {};
            ye[k(724)] = Te + "px", ye[k(649)] = Y + "px";
            const wt = { ..._0xccde8e, ...ye };
            _0x379e60(wt);
            const Je = {};
            Je.x = Y, Je.y = Te, _0x3c5ca4[k(691)] = Je;
          } else E[k(533) + k(625)](k(684), Z, ke), E[k(533) + k(625)](k(550), Z, ke), E[k(533) + k(625)](k(614), Z);
        else [k(618), k(665), k(589)][k(484)]((Y) => {
          const Te = k;
          E[Te(533) + Te(625)](Y, Z);
        });
        return () => {
          const Y = k;
          Y(622) === Y(704) ? _0x4009fb[Y(593)] = Y(762) + "py" : (Ae && (Y(547) === Y(547) ? Ae[Y(563) + Y(719)](Y(764), Q) : _0x497bd2 && _0x520a52[Y(563) + Y(719)](Y(764), _0x194ce1)), E && (o ? Y(735) === Y(735) ? [Y(684), Y(550), Y(614)][Y(484)]((Te) => {
            const ye = Y;
            E[ye(563) + ye(719)](Te, Z);
          }) : [Y(618), Y(665), Y(589)][Y(484)]((Te) => {
            const ye = Y;
            _0xf2f239[ye(563) + ye(719)](Te, _0x225935);
          }) : Y(709) !== Y(730) ? [Y(618), Y(665), Y(589)][Y(484)]((Te) => {
            const ye = Y;
            E[ye(563) + ye(719)](Te, Z);
          }) : [Y(618), Y(665), Y(589)][Y(484)]((Te) => {
            const ye = Y;
            _0x571686[ye(533) + ye(625)](Te, _0x4592d0);
          })));
        };
      } else [k(684), k(550), k(614)][k(484)]((we) => {
        const ke = k;
        _0x289a47[ke(563) + ke(719)](we, _0x2c9394);
      });
  }, [o, Z]);
  const ae = () => {
    const k = e, E = {};
    E[k(544)] = 999, E[k(555)] = B[k(691)] == k(568) ? k(671) : null, E[k(529)] = B[k(691)] != k(568) ? k(671) : null, E[k(724)] = k(488), E[k(672)] = k(657), z(E);
  };
  Nl(t, () => ({ fixTouch: (k) => {
    const E = e;
    k && (B[E(691)] = k), ae();
  }, setFullscreen: (k) => {
    H(k);
  } }));
  const se = {};
  se[e(651)] = e(572) + e(600) + "1)";
  const J = {};
  J.d = W ? e(703) + e(480) + e(756) + e(742) + e(708) + e(717) + e(687) : e(662) + e(733) + e(570) + e(483) + e(644) + e(466) + e(630);
  const ne = {};
  ne[e(602)] = e(765);
  const he = {};
  he[e(651)] = e(572) + e(600) + "1)";
  const fe = {};
  fe.d = e(760) + e(500) + e(559) + e(617) + e(643) + e(645) + e(700) + e(720) + e(548) + e(610) + e(521) + e(611) + e(509) + e(465) + e(552) + e(543) + e(590) + e(576) + e(538) + e(470) + e(685);
  const pe = {};
  pe.d = e(663) + e(537) + e(638);
  const P = {};
  P[e(602)] = e(705);
  const j = {};
  j[e(651)] = e(572) + e(600) + "1)";
  const I = {};
  I.d = e(745) + e(619) + e(642) + e(588) + e(511) + e(581) + e(617) + e(643) + e(697) + e(700) + e(516) + e(700) + e(683) + e(758) + e(692) + e(722) + e(599) + e(495) + e(667) + e(468) + e(750) + e(498) + e(571) + e(681);
  const L = {};
  L[e(602)] = e(461);
  const y = {};
  y[e(651)] = e(572) + e(600) + "1)";
  const F = {};
  F.d = e(485) + e(520) + e(643) + e(597) + e(700) + e(720) + e(548) + e(694) + e(722) + e(587) + e(561) + e(737) + e(740);
  const X = {};
  X.cx = e(646), X.cy = "18", X.r = "1";
  const M = {};
  M[e(602)] = e(c ? 640 : 728);
  const ot = {};
  ot[e(651)] = e(572) + e(600) + "1)";
  const Re = {};
  Re.d = e(524) + e(564) + e(460) + e(527) + e(583) + e(549) + e(679) + e(677) + e(768) + e(706) + e(734) + e(656);
  const xt = {};
  xt.d = e(674) + e(582) + e(635) + e(712) + e(562) + e(598) + e(464) + e(604) + e(743) + e(755) + e(659) + e(530) + e(715) + e(738) + e(536) + e(462) + e(751) + e(729) + e(569) + e(531) + e(523) + e(566) + e(492) + e(723) + e(613) + e(714) + e(504) + e(535) + e(661) + e(601) + e(607) + e(489) + e(474) + e(573) + e(741) + e(575) + e(481) + e(486) + e(669);
  const Nt = {};
  Nt[e(602)] = e(761);
  const dt = {};
  dt[e(651)] = e(572) + e(600) + "1)";
  const jt = {};
  jt.d = e(512) + e(482) + e(490) + e(653) + e(515) + e(615) + e(711) + e(612) + e(648) + e(477) + e(592) + e(666) + e(754) + e(541) + e(540) + e(473) + e(670) + e(514) + e(585) + e(639) + e(732) + e(707) + e(518) + e(744) + e(491) + e(716);
  const De = {};
  De[e(602)] = e(631);
  const _e = {};
  _e[e(651)] = e(572) + e(600) + "1)";
  const Ke = {};
  Ke.d = e(748) + e(493) + e(526) + e(695);
  const St = {};
  St[e(602)] = e(459);
  const pt = {};
  pt[e(651)] = e(572) + e(600) + "1)";
  const an = {};
  an.d = e(680) + e(626) + e(636) + e(673) + e(641) + e(654) + e(551) + e(736) + e(749);
  const cn = {};
  cn[e(602)] = e(747);
  const On = {};
  On[e(651)] = e(572) + e(600) + "1)";
  const ln = {};
  ln.d = e(525) + e(725) + e(766) + e(596) + e(615) + e(647) + e(507) + e(757) + e(629);
  const un = {};
  return un[e(602)] = e(586), U.jsxs(U.Fragment, { children: [i[e(503)][e(496)] ? U.jsxs(H2, { id: e(628) + e(510) + r, style: oe, ref: S, children: [U.jsxs(Ut, { "data-id": e(471), children: [U.jsx(e(487), { xmlns: e(532) + e(727) + e(682), width: "28", height: "28", viewBox: e(698), style: se, children: U.jsx(e(701), J) }), U.jsx(qt, ne)] }), U.jsxs(Ut, { "data-id": e(696), children: [U.jsxs(e(487), { xmlns: e(532) + e(727) + e(682), width: "28", height: "28", viewBox: e(698), style: he, children: [U.jsx(e(701), fe), U.jsx(e(701), pe)] }), U.jsx(qt, P)] }), U.jsxs(Ut, { "data-id": e(508), children: [U.jsx(e(487), { xmlns: e(532) + e(727) + e(682), width: "28", height: "28", viewBox: e(698), style: j, children: U.jsx(e(701), I) }), U.jsx(qt, L)] }), U.jsxs(Ut, { "data-id": e(542), children: [U.jsxs(e(487), { xmlns: e(532) + e(727) + e(682), width: "28", height: "28", viewBox: e(698), style: y, children: [U.jsx(e(701), F), U.jsx(e(557), X)] }), U.jsx(qt, M)] }), U.jsxs(Ut, { "data-id": e(497), children: [U.jsxs(e(487), { xmlns: e(532) + e(727) + e(682), width: "25", height: "25", viewBox: e(698), style: ot, children: [U.jsx(e(701), Re), U.jsx(e(701), xt)] }), U.jsx(qt, Nt)] }), U.jsxs(Ut, { "data-id": e(620), children: [U.jsx(e(487), { xmlns: e(532) + e(727) + e(682), width: "28", height: "28", viewBox: e(698), style: dt, children: U.jsx(e(701), jt) }), U.jsx(qt, De)] }), U.jsxs(Ut, { "data-id": e(517), children: [U.jsx(e(487), { xmlns: e(532) + e(727) + e(682), width: "28", height: "28", viewBox: e(698), style: _e, children: U.jsx(e(701), Ke) }), U.jsx(qt, St)] }), U.jsxs(Ut, { "data-id": e(554), children: [U.jsx(e(487), { xmlns: e(532) + e(727) + e(682), width: "28", height: "28", viewBox: e(698), style: pt, children: U.jsx(e(701), an) }), U.jsx(qt, cn)] }), U.jsxs(Ut, { "data-id": e(606), children: [U.jsx(e(487), { xmlns: e(532) + e(727) + e(682), width: "28", height: "28", viewBox: e(698), style: On, children: U.jsx(e(701), ln) }), U.jsx(qt, un)] })] }) : null, U.jsx(q2, { id: e(628) + e(660) + "s_" + r, className: e(501), ref: w, style: b, children: U.jsx(U2, { style: N, src: V2, className: e(501), id: e(628) + e(623) + r, alt: e(759), ref: x, draggable: !1 }) })] });
}), Fe = $n;
(function(n, t) {
  const e = $n, r = n();
  for (; ; )
    try {
      if (parseInt(e(565)) / 1 + -parseInt(e(537)) / 2 + parseInt(e(536)) / 3 * (parseInt(e(563)) / 4) + -parseInt(e(561)) / 5 * (parseInt(e(521)) / 6) + parseInt(e(551)) / 7 + parseInt(e(548)) / 8 * (parseInt(e(500)) / 9) + -parseInt(e(566)) / 10 === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Uo, 916155);
var dl, hl, xl, pl, ml, gl, vl, bl, yl;
yl = Fe(529) + Fe(523), bl = Fe(509) + "th", vl = Fe(540) + Fe(516), gl = Fe(520), ml = Fe(512) + "ta", pl = Fe(553) + "er", xl = Fe(513), hl = Fe(519) + Fe(501), dl = Fe(532);
class $2 {
  constructor(t, e, r, o) {
    Be(this, yl, (t) => {
      const e = Fe;
      if (t)
        if (e(573) !== e(573)) _0x3d8b2b = this[e(519) + e(501)](this[e(508)], this[e(515)]), this[e(539)] = !0;
        else {
          const r = window[e(503) + "t"] + 10, o = this[e(509) + "th"](null, this[e(530)][e(535)], this[e(530)][e(510)], r, r);
          this[e(535)] = o[e(535)], this[e(510)] = o[e(510)];
        }
      else this[e(535)] = this[e(530)][e(535)], this[e(510)] = this[e(530)][e(510)];
    });
    Be(this, bl, (t, e, r, o, s) => {
      const i = Fe;
      let a;
      if (t && o > this[i(572)] && r > e)
        if (i(570) === i(571)) {
          if (!this[i(545)] || this[i(545)][i(514)] == i(569) || !this[i(508)]) return;
          let c = _0x4bc3e5 instanceof _0x3702a9 ? _0x339734 : new _0x4018b9(_0x419430);
          const l = this[i(513)](c);
          l && (this[i(515)] = c), this[i(515)] && this[i(508)] && (!this[i(539)] && (c = this[i(519) + i(501)](this[i(508)], this[i(515)]), this[i(539)] = !0), this[i(545)][i(532)](new _0x17974a({ timestamp: _0x4be5c8[i(511)]() * 1e3, type: i(l ? 517 : 522), data: c })));
        } else s = this[i(572)];
      return s && (a = s / e * r, a > o && (s = o / r * e, a = o / e * e)), { width: Math[i(502)](s), height: Math[i(502)](a) };
    });
    Be(this, vl, (t) => {
      const e = Fe;
      this[e(496) + "n"] = t, this[e(559)] && screen[e(496) + "n"][e(556)](t);
    });
    Be(this, gl, (t, e) => {
      var a;
      const r = Fe, o = this[r(559)] == !0 ? window[r(503) + "t"] - 12 : window[r(503) + "t"] - 50, s = this[r(509) + "th"](!0, t, e, o, o);
      this[r(535)] = s[r(535)], this[r(510)] = s[r(510)], !this[r(530)] && (r(498) !== r(497) ? (a = this[r(524) + "ct"]) == null || a.call(this, !0) : this[r(515)] = _0x4fd814);
      const i = {};
      i[r(535)] = s[r(535)], i[r(510)] = s[r(510)], this[r(530)] = i;
    });
    Be(this, ml, (t) => {
      const e = Fe, r = t instanceof Uint8Array ? t : new Uint8Array(t);
      this[e(508)] = r;
    });
    Be(this, pl, () => {
      const t = Fe, e = new VideoDecoder({ output: async (o) => {
        var i;
        const s = $n;
        if (s(533) !== s(533)) {
          const a = _0x2513cc[s(503) + "t"] + 10, c = this[s(509) + "th"](null, this[s(530)][s(535)], this[s(530)][s(510)], a, a);
          this[s(535)] = c[s(535)], this[s(510)] = c[s(510)];
        } else {
          const a = await createImageBitmap(o);
          if (!this[s(535)] || !this[s(510)])
            if (s(538) !== s(507)) this[s(520)](o[s(550)], o[s(499) + "t"]);
            else {
              const c = this[s(559)] == !0 ? _0xfe6097[s(503) + "t"] - 12 : _0x3efa19[s(503) + "t"] - 50, l = this[s(509) + "th"](!0, _0x27abc9, _0x57f4e2, c, c);
              this[s(535)] = l[s(535)], this[s(510)] = l[s(510)], !this[s(530)] && ((i = this[s(524) + "ct"]) == null || i.call(this, !0));
              const f = {};
              f[s(535)] = l[s(535)], f[s(510)] = l[s(510)], this[s(530)] = f;
            }
          this[s(562)][s(557)](0, 0, this[s(535)], this[s(510)]), this[s(496) + "n"] == s(568) ? s(544) !== s(527) ? (this[s(528)][s(535)] = this[s(510)], this[s(528)][s(510)] = this[s(535)], this[s(562)][s(555)](0, this[s(535)]), this[s(562)][s(518)](Math.PI / 2), this[s(562)][s(542)](-1, -1), this[s(562)][s(547)](a, 0, 0, this[s(535)], this[s(510)])) : (this[s(496) + "n"] = _0x179d94, this[s(559)] && _0x58e187[s(496) + "n"][s(556)](_0xe67ffa)) : s(558) !== s(558) ? (_0x3aef18 = _0x5eb6a2 / _0x52904b * _0x233a36, _0x3f8998 > _0x276af7 && (_0x226f31 = _0x412930 / _0x5d60bb * _0x2ae7c2, _0x1ada1a = _0x1003b7 / _0x4f55bd * _0x296fdb)) : (this[s(528)][s(535)] = this[s(535)], this[s(528)][s(510)] = this[s(510)], this[s(562)][s(547)](a, 0, 0, this[s(535)], this[s(510)])), a[s(569)](), o[s(569)]();
        }
      }, error: (o) => console[t(543)](t(505) + t(574), o) }), r = {};
      return r[t(567)] = t(560) + "E", r[t(506) + t(546)] = t(541) + t(549), r[t(552) + t(554)] = !0, e[t(531)](r), e;
    });
    Be(this, xl, (t) => {
      const e = Fe;
      for (let r = 0; r <= t[e(564)] - 4; r++)
        if (t[r] === 0 && t[r + 1] === 0 && t[r + 2] === 0 && t[r + 3] === 1)
          return (t[r + 4] & 31) === 5;
      for (let r = 0; r <= t[e(564)] - 3; r++)
        if (t[r] === 0 && t[r + 1] === 0 && t[r + 2] === 1)
          return (t[r + 3] & 31) === 5;
      return !1;
    });
    Be(this, hl, (t, e) => {
      const r = Fe, o = Array[r(504)](t)[r(525)](Array[r(504)](e));
      return new Uint8Array(o);
    });
    Be(this, dl, (t) => {
      const e = Fe;
      if (!this[e(545)] || this[e(545)][e(514)] == e(569) || !this[e(508)]) return;
      let r = t instanceof Uint8Array ? t : new Uint8Array(t);
      const o = this[e(513)](r);
      o && (this[e(515)] = r), this[e(515)] && this[e(508)] && (!this[e(539)] && (r = this[e(519) + e(501)](this[e(508)], this[e(515)]), this[e(539)] = !0), this[e(545)][e(532)](new EncodedVideoChunk({ timestamp: performance[e(511)]() * 1e3, type: e(o ? 517 : 522), data: r })));
    });
    const s = $n;
    this[s(528)] = t, this[s(572)] = e, this[s(559)] = r, this[s(524) + "ct"] = o, this[s(562)] = t[s(534)]("2d"), this[s(545)] = this[s(553) + "er"](), this[s(508)] = null, this[s(515)] = null, this[s(539)] = null, this[s(535)] = null, this[s(510)] = null, this[s(530)] = null, this[s(496) + "n"] = s(526);
  }
}
function $n(n, t) {
  const e = Uo();
  return $n = function(r, o) {
    return r = r - 496, e[r];
  }, $n(n, t);
}
function Uo() {
  const n = ["portrait", "mmjlA", "canvas", "setFullscr", "rootSize", "configure", "decode", "fNDIm", "getContext", "width", "3926127irBHdS", "102958vFaLwK", "eFLug", "isPlay", "setOrienta", "prefer-har", "scale", "error", "ECrUa", "decoder", "celeration", "drawImage", "8CnJAtJ", "dware", "codedWidth", "10967719mtwlfJ", "optimizeFo", "buildDecod", "rLatency", "translate", "lock", "clearRect", "dbAgP", "isMobile", "avc1.64001", "1136175wIKyBC", "ctx", "4FNVFzX", "length", "1448190bHMrJA", "32067050TlLWOr", "codec", "landscape", "close", "njYKU", "eYBxU", "maxWidth", "JsPjj", "ror:", "orientatio", "yBbla", "yAhyf", "codedHeigh", "8881182RaWKbS", "8Arrays", "round", "innerHeigh", "from", "Decoder er", "hardwareAc", "ustvR", "videoMeta", "resizedWid", "height", "now", "setVideoMe", "isKeyFrame", "state", "iframe", "tion", "key", "rotate", "concatUint", "autoResize", "30KtaEUR", "delta", "een", "setIsConne", "concat"];
  return Uo = function() {
    return n;
  }, Uo();
}
(function(n, t) {
  const e = bn, r = n();
  for (; ; )
    try {
      if (-parseInt(e(249)) / 1 * (-parseInt(e(178)) / 2) + -parseInt(e(264)) / 3 * (-parseInt(e(307)) / 4) + -parseInt(e(272)) / 5 * (-parseInt(e(277)) / 6) + parseInt(e(257)) / 7 + parseInt(e(313)) / 8 + parseInt(e(228)) / 9 * (parseInt(e(306)) / 10) + -parseInt(e(221)) / 11 === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(qo, 670246);
function qo() {
  const n = ["setVideoMe", "tabIndex", "type", "de: ", "get_video_", "reconnecti", "62415dlSUpl", "isDown", "webkitFull", "test", "url", "screenElem", "size", "KZVYN", "orientatio", "eenElement", "screen_mai", "lwpCL", "map", "fVcVV", "marginTop", "message", "disconnect", "rEpss", "FlQXG", "COPY_TEXT", "large", "1jEkFKO", "meta", "n/json", "join_room", "text", "ror", "EFJlF", "decode", "7920997QWLImy", "DWWYs", "PSorx", "type_clien", "delete", "device_id", "isMobile", "15BGEYiX", "ent", "current", "center", "image_", "JDEGV", "XyQvc", "XOLTU", "588655MZBUeo", "connect", "middle", "height", "value", "42DKTpsA", "post", "applicatio", "onSyncIFra", "video_meta", "connection", "children", "setOrienta", "OWGOq", "writeText", "shortcutEv", "Content-Ty", "een", "onScreenEv", "GrqiS", "mozFullScr", "method", "screen", "bQNgC", "xOHHE", "false", "set", "usPqD", "addEventLi", "BbQpe", "AMdMl", "tion", "vsyHN", "MJJRQ", "250rpysoZ", "47308zGItfr", "msg", "xjnzz", "screen_", "change", "width", "2840624HleATx", "2481692zHuFqg", "iting for ", "Timeout wa", "get", "tListener", "emit", "eEdfj", "Element", "urRhT", "info", "clipboard", "sync", "response", "headers", "password", "status", "taskId", "connect_er", "length", "removeEven", "fullscreen", "fixTouch", "showMenu", " closed co", "code", "data", "shortcut", "oGshE", "iframe", "msFullscre", "timeout", "error", "draggable", "control", "action", "enElement", "passwd", "stener", "Shmbo", "setFullscr", "XzNhm", "userAgent", "WvGkr", "34252636hxAeRd"];
  return qo = function() {
    return n;
  }, qo();
}
const _v = Il((n, t) => {
  const e = bn, { serve: r, dataDevice: o, maxWidth: s, showAssistive: i, showDeviceId: a, syncEvent: c, syncButton: l } = n, f = o[e(262)], d = /iPhone|iPad|iPod|Android/i[e(231)](navigator[e(219)]), u = e(211), v = Ye(null), g = Ye(null), h = Ye(null), [p, w] = at(null), [S, x] = at(null), T = {};
  T[e(200)] = !1, T[e(229)] = !1;
  const [b, O] = at(T), [C, N] = at(null), z = e(268) + f, $ = e(310) + f, oe = e(238) + "n_" + f, K = Ye(null), [B, W] = at([]), H = Ye(null), te = Ye(/* @__PURE__ */ new Map());
  ct(() => {
    x(a);
  }, [a]);
  const Z = (P) => {
    const j = e;
    if (j(302) === j(302)) W((I) => [...I, P]);
    else {
      const I = {};
      I[j(212)] = j(280) + "me", _0x5599cc[j(183)](j(243), I);
    }
  }, Q = (P) => {
    const j = e;
    v[j(266)][j(183)](j(243), P), c == null || c(P);
  };
  Nl(t, () => ({ api: async function(P, j = 5e3) {
    return new Promise((I, L) => {
      const y = bn;
      if (y(216) !== y(216)) _0x4f6ee2(_0x57b7d5), _0x12dc9[y(266)][y(261)](_0x434cfe[y(194)]);
      else {
        const F = setTimeout(() => {
          const X = y;
          if (X(296) !== X(296)) {
            const M = {};
            M[X(308)] = X(282) + X(201) + X(225) + _0xaaa474[X(202)], M[X(224)] = X(187), _0x198764(M);
          } else {
            te[X(266)][X(261)](P[X(194)]);
            const M = {};
            M[X(212)] = P[X(212)], M[X(194)] = P[X(194)], M[X(193)] = !1, M[X(243)] = X(180) + X(179) + X(190), L(M);
          }
        }, j);
        te[y(266)][y(298)](P[y(194)], (X) => {
          clearTimeout(F), I(X);
        }), v[y(266)][y(183)](y(243), P);
      }
    });
  }, sync: function(P) {
    const j = e;
    v[j(266)][j(183)](j(243), P);
  } })), ct(() => {
    const P = e;
    P(259) !== P(258) ? (async () => {
      const j = P;
      try {
        if (j(241) !== j(184)) {
          const I = {};
          I[j(288) + "pe"] = j(279) + j(251);
          const L = {};
          L[j(262)] = o[j(262)], L[j(192)] = o[j(214)];
          const y = {};
          y[j(232)] = r, y[j(293)] = j(278), y[j(208)] = 1e4, y[j(191)] = I, y[j(203)] = L;
          const F = y, X = await N2(F);
          w(X[j(203)]);
        } else return new _0x4fc289((I, L) => {
          const y = j, F = _0x410c7a(() => {
            const X = bn;
            _0x170fbf[X(266)][X(261)](_0x4fdb5b[X(194)]);
            const M = {};
            M[X(212)] = _0x42aadb[X(212)], M[X(194)] = _0x50de96[X(194)], M[X(193)] = !1, M[X(243)] = X(180) + X(179) + X(190), L(M);
          }, _0x444c2c);
          _0x324118[y(266)][y(298)](_0x184a83[y(194)], (X) => {
            _0x55b8e5(F), I(X);
          }), _0xe7cc11[y(266)][y(183)](y(243), _0x33c6c0);
        });
      } catch (I) {
        const L = {};
        L[j(308)] = I, L[j(224)] = j(209), Z(L);
      }
    })() : _0x71442e[P(244)]();
  }, []), ct(() => {
    const P = e;
    if (v[P(266)] || !p) return;
    const j = {};
    j[P(227) + "on"] = !1;
    const I = lo(p, j);
    return I.on(P(273), () => {
      const L = P;
      if (L(305) === L(245))
        if (_0x4dbec7 === _0x239a69) {
          const y = { ..._0x3ab211 };
          y[L(200)] = !1, _0x8b49bf(y);
        } else _0x5da91c(_0x21a6ff);
      else {
        const y = {};
        y[L(212)] = L(273), y[L(260) + "t"] = u, y[L(262)] = o[L(262)], y[L(263)] = d, y[L(214)] = o[L(214)], I[L(183)](L(252), y);
      }
    }), I.on(P(252), (L) => {
      const y = P;
      if (L[y(193)] == !0)
        if (y(271) === y(186)) {
          const F = {};
          F[y(212)] = y(273), F[y(260) + "t"] = _0x309fbf, F[y(262)] = _0x57e930[y(262)], F[y(263)] = _0x413b3d, F[y(214)] = _0x187d85[y(214)], _0x34489a[y(183)](y(252), F);
        } else {
          v[y(266)] = I;
          const F = {};
          F[y(212)] = y(290) + y(265), I[y(183)](y(243), F);
        }
      else if (y(239) !== y(220)) {
        const F = {};
        F[y(308)] = L[y(308)], F[y(224)] = y(209), Z(F);
      } else _0x55272b[y(266)][y(183)](y(243), _0xeb934d);
    }), I.on(P(294), (L) => {
      const y = P;
      H[y(266)][y(256)](L);
    }), I.on(P(281), (L) => {
      const y = P;
      if (L) {
        if (y(304) !== y(304)) {
          if (_0x4611f2[y(266)][y(222) + "ta"](_0x5351ff), !_0x2bbd7e[y(266)][y(206)]) {
            const F = {};
            F[y(212)] = y(280) + "me", _0x4a1609[y(183)](y(243), F);
          }
        } else if (H[y(266)][y(222) + "ta"](L), !H[y(266)][y(206)]) {
          const F = {};
          F[y(212)] = y(280) + "me", I[y(183)](y(243), F);
        }
      } else {
        const F = {};
        F[y(212)] = y(226) + y(250), I[y(183)](y(281), F);
      }
    }), I.on(P(243), (L) => {
      const y = P;
      if (y(255) !== y(255)) _0x3187a7[y(197) + y(182)](y(198) + y(311), _0x252012);
      else if ((L[y(212)] == y(247) || L[y(212)] == y(287) + y(265)) && L[y(253)][y(196)] > 0 ? navigator[y(188)][y(286)](L[y(253)]) : L[y(212)] == y(236) + "n" && (H[y(266)][y(284) + y(303)](L[y(276)]), K[y(266)][y(199)](L[y(276)])), L[y(194)])
        if (y(218) === y(235)) _0x3d5e2e(!_0x2e5bee);
        else {
          const F = te[y(266)][y(181)](L[y(194)]);
          F && (F(L), te[y(266)][y(261)](L[y(194)]));
        }
    }), I.on(P(195) + P(254), (L) => {
      const y = P, F = {};
      F[y(308)] = L, F[y(224)] = y(209), Z(F);
    }), I.on(P(244), (L) => {
      const y = P;
      if (y(299) !== y(299))
        if (_0x501f34) {
          if (_0x137193[y(266)][y(222) + "ta"](_0x16b3b2), !_0x33d5c3[y(266)][y(206)]) {
            const F = {};
            F[y(212)] = y(280) + "me", _0x45e685[y(183)](y(243), F);
          }
        } else {
          const F = {};
          F[y(212)] = y(226) + y(250), _0x22be2f[y(183)](y(281), F);
        }
      else {
        const F = {};
        F[y(308)] = y(282) + y(201) + y(225) + L[y(202)], F[y(224)] = y(187), Z(F);
      }
    }), () => {
      I && I[P(244)]();
    };
  }, [p]), ct(() => {
    const P = e;
    if (P(269) !== P(269)) {
      _0x49caf9[P(266)][P(261)](_0x981de2[P(194)]);
      const j = {};
      j[P(212)] = _0x2a45aa[P(212)], j[P(194)] = _0x26a9fb[P(194)], j[P(193)] = !1, j[P(243)] = P(180) + P(179) + P(190), _0x447d7f(j);
    } else {
      const j = h[P(266)];
      H[P(266)] = new $2(j, s, d, N);
    }
  }, []), ct(() => {
    const P = e, j = () => {
      const I = bn, L = document[I(198) + I(185)] || document[I(230) + I(233) + I(265)] || document[I(292) + I(237)] || document[I(207) + I(213)];
      H[I(266)][I(217) + I(289)](!!L), K[I(266)][I(217) + I(289)](!!L), K[I(266)][I(199)]();
    };
    return document[P(300) + P(215)](P(198) + P(311), j), () => {
      const I = P;
      I(246) !== I(205) ? document[I(197) + I(182)](I(198) + I(311), j) : _0x4a7451(_0xa3fc6);
    };
  }, []);
  const ee = {};
  ee[e(283)] = o[e(262)];
  const ae = {};
  ae[e(234)] = e(248);
  const se = {};
  se[e(234)] = e(248);
  const J = {};
  J[e(234)] = e(248);
  const ne = {};
  ne[e(275)] = 0, ne[e(312)] = 0;
  const he = {};
  he[e(181)] = b, he[e(298)] = O;
  const fe = {};
  fe.id = z, fe[e(223)] = "0", fe[e(210)] = e(297);
  const pe = {};
  return pe[e(242)] = 5, U.jsxs(Hd, { id: oe, children: [S && U.jsx(Xd, { children: U.jsx(Wd, ee) }), B[e(196)] == 0 ? U.jsxs(U.Fragment, { children: [!C && U.jsxs(Yf, { align: e(267), gap: e(274), children: [U.jsx(vr, ae), U.jsx(vr, se), U.jsx(vr, J)] }), U.jsxs(Ud, { ref: g, id: $, style: C ? {} : ne, children: [i ? U.jsx(Y2, { status: he, ref: K, imageRef: h, displayId: f, isMobile: d, isShowDeviceId: S, onSenData: (P, j) => {
    const I = e;
    if (P === Ki && j[I(204)] === I(262))
      if (I(291) !== I(285)) x(!S);
      else {
        const L = _0x1f50df[I(266)];
        _0x5a6cb9[I(266)] = new _0x2ef7db(L, _0xf80cc8, _0x241033, _0x53c032);
      }
    else P === Ki && j[I(204)] === I(189) ? l(o[I(262)]) : I(309) === I(301) ? _0x1737a8(_0x4abefa) : Q(j);
  } }) : null, U.jsx(z2, { canvasContent: fe, imageRef: h, isMobile: d, assistive: b, onImgEvent: (P, j) => {
    const I = e;
    if (I(270) !== I(295))
      if (P === w0) {
        const L = { ...b };
        L[I(200)] = !1, O(L);
      } else Q(j);
    else _0x118581(_0x1fa3b6), _0x3a78b5(_0x504fa3);
  } })] })] }) : B[e(240)]((P, j) => U.jsx(Uf, { style: pe, message: P[e(308)], type: P[e(224)], showIcon: !0, closable: !0 }, j))] });
});
function bn(n, t) {
  const e = qo();
  return bn = function(r, o) {
    return r = r - 178, e[r];
  }, bn(n, t);
}
const tt = [];
for (let n = 0; n < 256; ++n)
  tt.push((n + 256).toString(16).slice(1));
function G2(n, t = 0) {
  return (tt[n[t + 0]] + tt[n[t + 1]] + tt[n[t + 2]] + tt[n[t + 3]] + "-" + tt[n[t + 4]] + tt[n[t + 5]] + "-" + tt[n[t + 6]] + tt[n[t + 7]] + "-" + tt[n[t + 8]] + tt[n[t + 9]] + "-" + tt[n[t + 10]] + tt[n[t + 11]] + tt[n[t + 12]] + tt[n[t + 13]] + tt[n[t + 14]] + tt[n[t + 15]]).toLowerCase();
}
let Ws;
const K2 = new Uint8Array(16);
function J2() {
  if (!Ws) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    Ws = crypto.getRandomValues.bind(crypto);
  }
  return Ws(K2);
}
const Z2 = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), ll = { randomUUID: Z2 };
function Q2(n, t, e) {
  var o;
  if (ll.randomUUID && !n)
    return ll.randomUUID();
  n = n || {};
  const r = n.random ?? ((o = n.rng) == null ? void 0 : o.call(n)) ?? J2();
  if (r.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, G2(r);
}
var In = Tr;
(function(n, t) {
  for (var e = Tr, r = n(); ; )
    try {
      var o = parseInt(e(388)) / 1 + -parseInt(e(384)) / 2 * (-parseInt(e(376)) / 3) + -parseInt(e(396)) / 4 + -parseInt(e(386)) / 5 + -parseInt(e(380)) / 6 * (parseInt(e(392)) / 7) + -parseInt(e(387)) / 8 * (-parseInt(e(394)) / 9) + parseInt(e(377)) / 10;
      if (o === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Wo, 204389);
function Tr(n, t) {
  var e = Wo();
  return Tr = function(r, o) {
    r = r - 376;
    var s = e[r];
    return s;
  }, Tr(n, t);
}
function Wo() {
  var n = ["clickEleme", "value", "setText", "101438XnAofS", "text", "1871695KUKUCt", "264VqAbRg", "200806jrzeer", "sendData", "setTextEle", "click", "2219mUBROZ", "action", "42291OUPrAv", "index", "802600SvXYjy", "all", "keyName", "data", "15UbCnWJ", "5740850dlNReT", "findElemen", "ment", "7650qtmGqE"];
  return Wo = function() {
    return n;
  }, Wo();
}
class ev {
  constructor(t, e, r) {
    var o = Tr, s = {};
    s[o(398)] = t, s[o(382)] = e, this[o(399)] = s, this[o(389)] = r;
  }
  async [In(397)]() {
    var t = In;
    this[t(399)][t(393)] = t(378) + "ts", await this[t(389)](this[t(399)]);
  }
  async [In(391)](t = 0) {
    var e = In;
    this[e(399)][e(393)] = e(381) + "nt", this[e(399)][e(395)] = t, await this[e(389)](this[e(399)]);
  }
  async [In(383)](t = 0, e) {
    var r = In;
    this[r(399)][r(393)] = r(390) + r(379), this[r(399)][r(395)] = t, this[r(399)][r(385)] = e, await this[r(389)](this[r(399)]);
  }
}
var He = Or;
function Or(n, t) {
  var e = Xo();
  return Or = function(r, o) {
    r = r - 419;
    var s = e[r];
    return s;
  }, Or(n, t);
}
(function(n, t) {
  for (var e = Or, r = n(); ; )
    try {
      var o = -parseInt(e(439)) / 1 + -parseInt(e(462)) / 2 + parseInt(e(451)) / 3 * (-parseInt(e(449)) / 4) + -parseInt(e(435)) / 5 * (-parseInt(e(446)) / 6) + -parseInt(e(448)) / 7 + -parseInt(e(454)) / 8 + parseInt(e(443)) / 9;
      if (o === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Xo, 261661);
class Cv {
  constructor(t) {
    var e = Or;
    this[e(419)] = t;
  }
  async [He(438)](t) {
    var e = He;
    return t[e(444)] = Q2(), await controlRef[e(423)][e(440)](t);
  }
  async [He(453)](t) {
    var e = He, r = {};
    return r[e(465)] = e(461), r[e(450)] = t, await this[e(438)](r);
  }
  async [He(434)](t, e = "") {
    var r = He, o = {};
    return o[r(465)] = r(434), o[r(458)] = t, o[r(450)] = e, await this[r(438)](o);
  }
  async [He(432) + "en"]() {
    var t = He, e = {};
    return e[t(465)] = t(433) + t(431), await this[t(438)](e);
  }
  async [He(428) + "ts"](t, e) {
    var r = He;
    return new ev(t, e, this[r(438)]);
  }
  async [He(427)](t, e) {
    var r = He, o = {};
    return o[r(465)] = r(457), o[r(437)] = t, o[r(429) + "e"] = e, await this[r(438)](o);
  }
  async [He(447)](t, e, r = 0, o = 0) {
    var s = He, i = {};
    return i[s(465)] = s(424), i[s(445)] = s(459) + "N", i[s(441)] = t, i[s(436)] = e, i[s(420)] = r, i[s(422)] = o, await this[s(438)](i);
  }
  async [He(430)](t, e, r) {
    var o = He, s = {};
    return s[o(465)] = o(426), s.x = t, s.y = e, s[o(456)] = r, await this[o(438)](s);
  }
  async [He(442)](t, e, r, o, s) {
    var i = He, a = {};
    return a[i(465)] = i(452), a[i(455)] = t, a[i(464)] = e, a[i(425)] = r, a[i(463)] = o, a[i(456)] = s, await this[i(438)](a);
  }
  async [He(421)](t) {
    var e = He, r = {};
    return r[e(465)] = e(460) + "nt", r[e(450)] = t, await this[e(438)](r);
  }
}
function Xo() {
  var n = ["sendData", "89364pVktnD", "api", "typeKey", "swipe", "9548163qFuhLi", "taskId", "keyAction", "126942itVMDl", "keyboard", "1689317lEjkAg", "130812YygNsG", "text", "3NnItPr", "swipeEvent", "toast", "2840720nYICLj", "start_x", "duration", "appEvent", "keyName", "ACTION_DOW", "setTextEve", "toastEvent", "203830esiSWS", "end_y", "start_y", "action", "controlRef", "repeat", "setText", "meta_state", "current", "keyEvent", "end_x", "clickEvent", "app", "findElemen", "packageNam", "click", "ent", "unlockScre", "onScreenEv", "clipboard", "5pgsoUd", "key", "command"];
  return Xo = function() {
    return n;
  }, Xo();
}
var Oe = Yo;
(function(n, t) {
  for (var e = Yo, r = n(); ; )
    try {
      var o = parseInt(e(299)) / 1 + parseInt(e(300)) / 2 * (parseInt(e(297)) / 3) + parseInt(e(289)) / 4 + parseInt(e(283)) / 5 * (parseInt(e(298)) / 6) + parseInt(e(285)) / 7 * (-parseInt(e(280)) / 8) + -parseInt(e(276)) / 9 + -parseInt(e(294)) / 10 * (parseInt(e(277)) / 11);
      if (o === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})($o, 688202);
var Sl, wl, El;
El = Oe(295), wl = Oe(284), Sl = Oe(290);
class Xs {
}
Be(Xs, El, Oe(295)), Be(Xs, wl, Oe(284)), Be(Xs, Sl, Oe(290));
function Yo(n, t) {
  var e = $o();
  return Yo = function(r, o) {
    r = r - 276;
    var s = e[r];
    return s;
  }, Yo(n, t);
}
function $o() {
  var n = ["text", "ODE", "4988472NdgXpq", "clear", "code", "get", "resourceId", "321830EQgBfQ", "start", "className", "179253xNhObZ", "3054ZUQcNt", "1261754XJksdD", "20sTBBLd", "4421142inQGSY", "737cUdLBc", "KEYBOARD_C", "EXT", "3918224jyyLrC", "set", "KEYBOARD_T", "11875HVFGhP", "stop", "14MDPWlO", "xpath"];
  return $o = function() {
    return n;
  }, $o();
}
var _l, Cl;
Cl = Oe(287), _l = Oe(291);
class ul {
}
Be(ul, Cl, Oe(282) + Oe(279)), Be(ul, _l, Oe(278) + Oe(288));
var Al, Tl, Ol, Rl;
Rl = Oe(287), Ol = Oe(296), Tl = Oe(293), Al = Oe(286);
class Qr {
}
Be(Qr, Rl, Oe(287)), Be(Qr, Ol, Oe(296)), Be(Qr, Tl, Oe(293)), Be(Qr, Al, Oe(286));
var kl, Pl;
Pl = Oe(292), kl = Oe(281);
class fl {
}
Be(fl, Pl, Oe(292)), Be(fl, kl, Oe(281));
(function(n, t) {
  for (var e = Ji, r = n(); ; )
    try {
      var o = parseInt(e(408)) / 1 + -parseInt(e(411)) / 2 + -parseInt(e(413)) / 3 + -parseInt(e(412)) / 4 * (parseInt(e(417)) / 5) + parseInt(e(414)) / 6 * (-parseInt(e(416)) / 7) + -parseInt(e(415)) / 8 + -parseInt(e(409)) / 9 * (-parseInt(e(410)) / 10);
      if (o === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Go, 889512);
function Ji(n, t) {
  var e = Go();
  return Ji = function(r, o) {
    r = r - 408;
    var s = e[r];
    return s;
  }, Ji(n, t);
}
function Go() {
  var n = ["216783ozcBEO", "2230gauDHE", "819426YZOhxm", "16ZDvqtS", "4275453XtNrIh", "6UlBYON", "11652512WubyvW", "10213238tYgwUQ", "1631615axsyfK", "1573865dilaDm"];
  return Go = function() {
    return n;
  }, Go();
}
export {
  Cv as DevApi,
  _v as ViewRP,
  Xs as appEvent,
  fl as clipboardEvent,
  Qr as findElEvent,
  ul as keyEvent
};
