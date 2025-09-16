var Wd = Object.defineProperty;
var Gd = (e, n, t) => n in e ? Wd(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var Xe = (e, n, t) => Gd(e, typeof n != "symbol" ? n + "" : n, t);
import * as S from "react";
import U, { useDebugValue as bc, createElement as Xd, useRef as Se, useContext as Ot, createContext as fi, useEffect as Ue, isValidElement as Yd, version as Kd, useLayoutEffect as Jd, forwardRef as ir, useState as dt, useMemo as jr, Children as Qd, useImperativeHandle as Ou } from "react";
import * as Tu from "react-dom";
import yc from "react-dom";
var Or = Lo;
(function(e, n) {
  for (var t = Lo, r = e(); ; )
    try {
      var o = parseInt(t(417)) / 1 + parseInt(t(396)) / 2 * (-parseInt(t(397)) / 3) + -parseInt(t(411)) / 4 * (-parseInt(t(388)) / 5) + parseInt(t(395)) / 6 + -parseInt(t(409)) / 7 * (parseInt(t(401)) / 8) + -parseInt(t(420)) / 9 * (-parseInt(t(391)) / 10) + -parseInt(t(403)) / 11 * (parseInt(t(398)) / 12);
      if (o === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Do, 632113);
typeof globalThis !== Or(394) || typeof window !== Or(394) || (typeof global !== Or(394) ? global : Or(394));
function Zd(e) {
  var n = Or;
  return e && e[n(413)] && Object[n(415)][n(390) + n(404)][n(408)](e, n(416)) ? e[n(416)] : e;
}
function Lo(e, n) {
  var t = Do();
  return Lo = function(r, o) {
    r = r - 387;
    var i = t[r];
    return i;
  }, Lo(e, n);
}
function Do() {
  var e = ["function", "8ZahigZ", "getOwnProp", "31361bNYaRF", "erty", "ertyDescri", "construct", "get", "call", "4115041IECrxV", "constructo", "765980SPiqKS", "value", "__esModule", "enumerable", "prototype", "default", "400765jAHtfT", "SwXlr", "forEach", "1385685xsNhZD", "KOkTB", "defineProp", "25PLKIGs", "length", "hasOwnProp", "50qpduXz", "keys", "apply", "undefined", "6826140NPvGeQ", "1588380mjfOJx", "3xTjihE", "5268KHYSbf", "ptor"];
  return Do = function() {
    return e;
  }, Do();
}
var Jr = { exports: {} }, mr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _c;
function eh() {
  if (_c) return mr;
  _c = 1;
  var e = U, n = Symbol.for("react.element"), t = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(a, c, l) {
    var u, f = {}, h = null, m = null;
    l !== void 0 && (h = "" + l), c.key !== void 0 && (h = "" + c.key), c.ref !== void 0 && (m = c.ref);
    for (u in c) r.call(c, u) && !i.hasOwnProperty(u) && (f[u] = c[u]);
    if (a && a.defaultProps) for (u in c = a.defaultProps, c) f[u] === void 0 && (f[u] = c[u]);
    return { $$typeof: n, type: a, key: h, ref: m, props: f, _owner: o.current };
  }
  return mr.Fragment = t, mr.jsx = s, mr.jsxs = s, mr;
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
var Sc;
function th() {
  return Sc || (Sc = 1, process.env.NODE_ENV !== "production" && function() {
    var e = U, n = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), d = Symbol.iterator, g = "@@iterator";
    function p(v) {
      if (v === null || typeof v != "object")
        return null;
      var L = d && v[d] || v[g];
      return typeof L == "function" ? L : null;
    }
    var b = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(v) {
      {
        for (var L = arguments.length, V = new Array(L > 1 ? L - 1 : 0), oe = 1; oe < L; oe++)
          V[oe - 1] = arguments[oe];
        C("error", v, V);
      }
    }
    function C(v, L, V) {
      {
        var oe = b.ReactDebugCurrentFrame, Ce = oe.getStackAddendum();
        Ce !== "" && (L += "%s", V = V.concat([Ce]));
        var Ae = V.map(function(ge) {
          return String(ge);
        });
        Ae.unshift("Warning: " + L), Function.prototype.apply.call(console[v], console, Ae);
      }
    }
    var O = !1, x = !1, R = !1, _ = !1, j = !1, M;
    M = Symbol.for("react.module.reference");
    function X(v) {
      return !!(typeof v == "string" || typeof v == "function" || v === r || v === i || j || v === o || v === l || v === u || _ || v === m || O || x || R || typeof v == "object" && v !== null && (v.$$typeof === h || v.$$typeof === f || v.$$typeof === s || v.$$typeof === a || v.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      v.$$typeof === M || v.getModuleId !== void 0));
    }
    function re(v, L, V) {
      var oe = v.displayName;
      if (oe)
        return oe;
      var Ce = L.displayName || L.name || "";
      return Ce !== "" ? V + "(" + Ce + ")" : V;
    }
    function te(v) {
      return v.displayName || "Context";
    }
    function z(v) {
      if (v == null)
        return null;
      if (typeof v.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof v == "function")
        return v.displayName || v.name || null;
      if (typeof v == "string")
        return v;
      switch (v) {
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
        case u:
          return "SuspenseList";
      }
      if (typeof v == "object")
        switch (v.$$typeof) {
          case a:
            var L = v;
            return te(L) + ".Consumer";
          case s:
            var V = v;
            return te(V._context) + ".Provider";
          case c:
            return re(v, v.render, "ForwardRef");
          case f:
            var oe = v.displayName || null;
            return oe !== null ? oe : z(v.type) || "Memo";
          case h: {
            var Ce = v, Ae = Ce._payload, ge = Ce._init;
            try {
              return z(ge(Ae));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var W = Object.assign, Z = 0, N, A, P, k, B, H, J;
    function ne() {
    }
    ne.__reactDisabledLog = !0;
    function ee() {
      {
        if (Z === 0) {
          N = console.log, A = console.info, P = console.warn, k = console.error, B = console.group, H = console.groupCollapsed, J = console.groupEnd;
          var v = {
            configurable: !0,
            enumerable: !0,
            value: ne,
            writable: !0
          };
          Object.defineProperties(console, {
            info: v,
            log: v,
            warn: v,
            error: v,
            group: v,
            groupCollapsed: v,
            groupEnd: v
          });
        }
        Z++;
      }
    }
    function ce() {
      {
        if (Z--, Z === 0) {
          var v = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: W({}, v, {
              value: N
            }),
            info: W({}, v, {
              value: A
            }),
            warn: W({}, v, {
              value: P
            }),
            error: W({}, v, {
              value: k
            }),
            group: W({}, v, {
              value: B
            }),
            groupCollapsed: W({}, v, {
              value: H
            }),
            groupEnd: W({}, v, {
              value: J
            })
          });
        }
        Z < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ue = b.ReactCurrentDispatcher, de;
    function Oe(v, L, V) {
      {
        if (de === void 0)
          try {
            throw Error();
          } catch (Ce) {
            var oe = Ce.stack.trim().match(/\n( *(at )?)/);
            de = oe && oe[1] || "";
          }
        return `
` + de + v;
      }
    }
    var _e = !1, ke;
    {
      var Ne = typeof WeakMap == "function" ? WeakMap : Map;
      ke = new Ne();
    }
    function pe(v, L) {
      if (!v || _e)
        return "";
      {
        var V = ke.get(v);
        if (V !== void 0)
          return V;
      }
      var oe;
      _e = !0;
      var Ce = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ae;
      Ae = ue.current, ue.current = null, ee();
      try {
        if (L) {
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
            } catch (xt) {
              oe = xt;
            }
            Reflect.construct(v, [], ge);
          } else {
            try {
              ge.call();
            } catch (xt) {
              oe = xt;
            }
            v.call(ge.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (xt) {
            oe = xt;
          }
          v();
        }
      } catch (xt) {
        if (xt && oe && typeof xt.stack == "string") {
          for (var xe = xt.stack.split(`
`), at = oe.stack.split(`
`), ze = xe.length - 1, Ve = at.length - 1; ze >= 1 && Ve >= 0 && xe[ze] !== at[Ve]; )
            Ve--;
          for (; ze >= 1 && Ve >= 0; ze--, Ve--)
            if (xe[ze] !== at[Ve]) {
              if (ze !== 1 || Ve !== 1)
                do
                  if (ze--, Ve--, Ve < 0 || xe[ze] !== at[Ve]) {
                    var qe = `
` + xe[ze].replace(" at new ", " at ");
                    return v.displayName && qe.includes("<anonymous>") && (qe = qe.replace("<anonymous>", v.displayName)), typeof v == "function" && ke.set(v, qe), qe;
                  }
                while (ze >= 1 && Ve >= 0);
              break;
            }
        }
      } finally {
        _e = !1, ue.current = Ae, ce(), Error.prepareStackTrace = Ce;
      }
      var Dn = v ? v.displayName || v.name : "", Cn = Dn ? Oe(Dn) : "";
      return typeof v == "function" && ke.set(v, Cn), Cn;
    }
    function Ze(v, L, V) {
      return pe(v, !1);
    }
    function T(v) {
      var L = v.prototype;
      return !!(L && L.isReactComponent);
    }
    function F(v, L, V) {
      if (v == null)
        return "";
      if (typeof v == "function")
        return pe(v, T(v));
      if (typeof v == "string")
        return Oe(v);
      switch (v) {
        case l:
          return Oe("Suspense");
        case u:
          return Oe("SuspenseList");
      }
      if (typeof v == "object")
        switch (v.$$typeof) {
          case c:
            return Ze(v.render);
          case f:
            return F(v.type, L, V);
          case h: {
            var oe = v, Ce = oe._payload, Ae = oe._init;
            try {
              return F(Ae(Ce), L, V);
            } catch {
            }
          }
        }
      return "";
    }
    var $ = Object.prototype.hasOwnProperty, G = {}, w = b.ReactDebugCurrentFrame;
    function Y(v) {
      if (v) {
        var L = v._owner, V = F(v.type, v._source, L ? L.type : null);
        w.setExtraStackFrame(V);
      } else
        w.setExtraStackFrame(null);
    }
    function se(v, L, V, oe, Ce) {
      {
        var Ae = Function.call.bind($);
        for (var ge in v)
          if (Ae(v, ge)) {
            var xe = void 0;
            try {
              if (typeof v[ge] != "function") {
                var at = Error((oe || "React class") + ": " + V + " type `" + ge + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof v[ge] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw at.name = "Invariant Violation", at;
              }
              xe = v[ge](L, ge, oe, V, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ze) {
              xe = ze;
            }
            xe && !(xe instanceof Error) && (Y(Ce), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", oe || "React class", V, ge, typeof xe), Y(null)), xe instanceof Error && !(xe.message in G) && (G[xe.message] = !0, Y(Ce), y("Failed %s type: %s", V, xe.message), Y(null));
          }
      }
    }
    var le = Array.isArray;
    function Re(v) {
      return le(v);
    }
    function ve(v) {
      {
        var L = typeof Symbol == "function" && Symbol.toStringTag, V = L && v[Symbol.toStringTag] || v.constructor.name || "Object";
        return V;
      }
    }
    function Ye(v) {
      try {
        return ft(v), !1;
      } catch {
        return !0;
      }
    }
    function ft(v) {
      return "" + v;
    }
    function Qt(v) {
      if (Ye(v))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ve(v)), ft(v);
    }
    var At = b.ReactCurrentOwner, Zt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Bt, Ht;
    function en(v) {
      if ($.call(v, "ref")) {
        var L = Object.getOwnPropertyDescriptor(v, "ref").get;
        if (L && L.isReactWarning)
          return !1;
      }
      return v.ref !== void 0;
    }
    function tn(v) {
      if ($.call(v, "key")) {
        var L = Object.getOwnPropertyDescriptor(v, "key").get;
        if (L && L.isReactWarning)
          return !1;
      }
      return v.key !== void 0;
    }
    function nn(v, L) {
      typeof v.ref == "string" && At.current;
    }
    function zt(v, L) {
      {
        var V = function() {
          Bt || (Bt = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", L));
        };
        V.isReactWarning = !0, Object.defineProperty(v, "key", {
          get: V,
          configurable: !0
        });
      }
    }
    function je(v, L) {
      {
        var V = function() {
          Ht || (Ht = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", L));
        };
        V.isReactWarning = !0, Object.defineProperty(v, "ref", {
          get: V,
          configurable: !0
        });
      }
    }
    var ct = function(v, L, V, oe, Ce, Ae, ge) {
      var xe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: v,
        key: L,
        ref: V,
        props: ge,
        // Record the component responsible for creating this element.
        _owner: Ae
      };
      return xe._store = {}, Object.defineProperty(xe._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(xe, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: oe
      }), Object.defineProperty(xe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ce
      }), Object.freeze && (Object.freeze(xe.props), Object.freeze(xe)), xe;
    };
    function Ft(v, L, V, oe, Ce) {
      {
        var Ae, ge = {}, xe = null, at = null;
        V !== void 0 && (Qt(V), xe = "" + V), tn(L) && (Qt(L.key), xe = "" + L.key), en(L) && (at = L.ref, nn(L, Ce));
        for (Ae in L)
          $.call(L, Ae) && !Zt.hasOwnProperty(Ae) && (ge[Ae] = L[Ae]);
        if (v && v.defaultProps) {
          var ze = v.defaultProps;
          for (Ae in ze)
            ge[Ae] === void 0 && (ge[Ae] = ze[Ae]);
        }
        if (xe || at) {
          var Ve = typeof v == "function" ? v.displayName || v.name || "Unknown" : v;
          xe && zt(ge, Ve), at && je(ge, Ve);
        }
        return ct(v, xe, at, Ce, oe, At.current, ge);
      }
    }
    var D = b.ReactCurrentOwner, E = b.ReactDebugCurrentFrame;
    function be(v) {
      if (v) {
        var L = v._owner, V = F(v.type, v._source, L ? L.type : null);
        E.setExtraStackFrame(V);
      } else
        E.setExtraStackFrame(null);
    }
    var ie;
    ie = !1;
    function Me(v) {
      return typeof v == "object" && v !== null && v.$$typeof === n;
    }
    function ye() {
      {
        if (D.current) {
          var v = z(D.current.type);
          if (v)
            return `

Check the render method of \`` + v + "`.";
        }
        return "";
      }
    }
    function et(v) {
      return "";
    }
    var Te = {};
    function ht(v) {
      {
        var L = ye();
        if (!L) {
          var V = typeof v == "string" ? v : v.displayName || v.name;
          V && (L = `

Check the top-level render call using <` + V + ">.");
        }
        return L;
      }
    }
    function lt(v, L) {
      {
        if (!v._store || v._store.validated || v.key != null)
          return;
        v._store.validated = !0;
        var V = ht(L);
        if (Te[V])
          return;
        Te[V] = !0;
        var oe = "";
        v && v._owner && v._owner !== D.current && (oe = " It was passed a child from " + z(v._owner.type) + "."), be(v), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', V, oe), be(null);
      }
    }
    function Vt(v, L) {
      {
        if (typeof v != "object")
          return;
        if (Re(v))
          for (var V = 0; V < v.length; V++) {
            var oe = v[V];
            Me(oe) && lt(oe, L);
          }
        else if (Me(v))
          v._store && (v._store.validated = !0);
        else if (v) {
          var Ce = p(v);
          if (typeof Ce == "function" && Ce !== v.entries)
            for (var Ae = Ce.call(v), ge; !(ge = Ae.next()).done; )
              Me(ge.value) && lt(ge.value, L);
        }
      }
    }
    function qt(v) {
      {
        var L = v.type;
        if (L == null || typeof L == "string")
          return;
        var V;
        if (typeof L == "function")
          V = L.propTypes;
        else if (typeof L == "object" && (L.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        L.$$typeof === f))
          V = L.propTypes;
        else
          return;
        if (V) {
          var oe = z(L);
          se(V, v.props, "prop", oe, v);
        } else if (L.PropTypes !== void 0 && !ie) {
          ie = !0;
          var Ce = z(L);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ce || "Unknown");
        }
        typeof L.getDefaultProps == "function" && !L.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function De(v) {
      {
        for (var L = Object.keys(v.props), V = 0; V < L.length; V++) {
          var oe = L[V];
          if (oe !== "children" && oe !== "key") {
            be(v), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", oe), be(null);
            break;
          }
        }
        v.ref !== null && (be(v), y("Invalid attribute `ref` supplied to `React.Fragment`."), be(null));
      }
    }
    var Ge = {};
    function $t(v, L, V, oe, Ce, Ae) {
      {
        var ge = X(v);
        if (!ge) {
          var xe = "";
          (v === void 0 || typeof v == "object" && v !== null && Object.keys(v).length === 0) && (xe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var at = et();
          at ? xe += at : xe += ye();
          var ze;
          v === null ? ze = "null" : Re(v) ? ze = "array" : v !== void 0 && v.$$typeof === n ? (ze = "<" + (z(v.type) || "Unknown") + " />", xe = " Did you accidentally export a JSX literal instead of a component?") : ze = typeof v, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ze, xe);
        }
        var Ve = Ft(v, L, V, Ce, Ae);
        if (Ve == null)
          return Ve;
        if (ge) {
          var qe = L.children;
          if (qe !== void 0)
            if (oe)
              if (Re(qe)) {
                for (var Dn = 0; Dn < qe.length; Dn++)
                  Vt(qe[Dn], v);
                Object.freeze && Object.freeze(qe);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Vt(qe, v);
        }
        if ($.call(L, "key")) {
          var Cn = z(v), xt = Object.keys(L).filter(function(Ud) {
            return Ud !== "key";
          }), Xi = xt.length > 0 ? "{key: someKey, " + xt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ge[Cn + Xi]) {
            var qd = xt.length > 0 ? "{" + xt.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Xi, Cn, qd, Cn), Ge[Cn + Xi] = !0;
          }
        }
        return v === r ? De(Ve) : qt(Ve), Ve;
      }
    }
    function He(v, L, V) {
      return $t(v, L, V, !0);
    }
    function dn(v, L, V) {
      return $t(v, L, V, !1);
    }
    var gr = dn, Fe = He;
    vr.Fragment = r, vr.jsx = gr, vr.jsxs = Fe;
  }()), vr;
}
var Cc;
function nh() {
  return Cc || (Cc = 1, process.env.NODE_ENV === "production" ? Jr.exports = eh() : Jr.exports = th()), Jr.exports;
}
var q = nh(), pt = function() {
  return pt = Object.assign || function(n) {
    for (var t, r = 1, o = arguments.length; r < o; r++) {
      t = arguments[r];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
    }
    return n;
  }, pt.apply(this, arguments);
};
function Wn(e, n, t) {
  if (t || arguments.length === 2) for (var r = 0, o = n.length, i; r < o; r++)
    (i || !(r in n)) && (i || (i = Array.prototype.slice.call(n, 0, r)), i[r] = n[r]);
  return e.concat(i || Array.prototype.slice.call(n));
}
function rh(e) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return n[t] === void 0 && (n[t] = e(t)), n[t];
  };
}
var oh = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ih = /* @__PURE__ */ rh(
  function(e) {
    return oh.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Be = "-ms-", $r = "-moz-", Ie = "-webkit-", Ru = "comm", di = "rule", La = "decl", sh = "@import", Au = "@keyframes", ah = "@layer", $u = Math.abs, Da = String.fromCharCode, Ts = Object.assign;
function ch(e, n) {
  return st(e, 0) ^ 45 ? (((n << 2 ^ st(e, 0)) << 2 ^ st(e, 1)) << 2 ^ st(e, 2)) << 2 ^ st(e, 3) : 0;
}
function Pu(e) {
  return e.trim();
}
function on(e, n) {
  return (e = n.exec(e)) ? e[0] : e;
}
function he(e, n, t) {
  return e.replace(n, t);
}
function mo(e, n, t) {
  return e.indexOf(n, t);
}
function st(e, n) {
  return e.charCodeAt(n) | 0;
}
function Gn(e, n, t) {
  return e.slice(n, t);
}
function Gt(e) {
  return e.length;
}
function Iu(e) {
  return e.length;
}
function Tr(e, n) {
  return n.push(e), e;
}
function lh(e, n) {
  return e.map(n).join("");
}
function wc(e, n) {
  return e.filter(function(t) {
    return !on(t, n);
  });
}
var hi = 1, Xn = 1, Nu = 0, Tt = 0, Ke = 0, sr = "";
function xi(e, n, t, r, o, i, s, a) {
  return { value: e, root: n, parent: t, type: r, props: o, children: i, line: hi, column: Xn, length: s, return: "", siblings: a };
}
function hn(e, n) {
  return Ts(xi("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, n);
}
function Bn(e) {
  for (; e.root; )
    e = hn(e.root, { children: [e] });
  Tr(e, e.siblings);
}
function uh() {
  return Ke;
}
function fh() {
  return Ke = Tt > 0 ? st(sr, --Tt) : 0, Xn--, Ke === 10 && (Xn = 1, hi--), Ke;
}
function kt() {
  return Ke = Tt < Nu ? st(sr, Tt++) : 0, Xn++, Ke === 10 && (Xn = 1, hi++), Ke;
}
function An() {
  return st(sr, Tt);
}
function vo() {
  return Tt;
}
function pi(e, n) {
  return Gn(sr, e, n);
}
function Rs(e) {
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
function dh(e) {
  return hi = Xn = 1, Nu = Gt(sr = e), Tt = 0, [];
}
function hh(e) {
  return sr = "", e;
}
function Yi(e) {
  return Pu(pi(Tt - 1, As(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function xh(e) {
  for (; (Ke = An()) && Ke < 33; )
    kt();
  return Rs(e) > 2 || Rs(Ke) > 3 ? "" : " ";
}
function ph(e, n) {
  for (; --n && kt() && !(Ke < 48 || Ke > 102 || Ke > 57 && Ke < 65 || Ke > 70 && Ke < 97); )
    ;
  return pi(e, vo() + (n < 6 && An() == 32 && kt() == 32));
}
function As(e) {
  for (; kt(); )
    switch (Ke) {
      // ] ) " '
      case e:
        return Tt;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && As(Ke);
        break;
      // (
      case 40:
        e === 41 && As(e);
        break;
      // \
      case 92:
        kt();
        break;
    }
  return Tt;
}
function gh(e, n) {
  for (; kt() && e + Ke !== 57; )
    if (e + Ke === 84 && An() === 47)
      break;
  return "/*" + pi(n, Tt - 1) + "*" + Da(e === 47 ? e : kt());
}
function mh(e) {
  for (; !Rs(An()); )
    kt();
  return pi(e, Tt);
}
function vh(e) {
  return hh(bo("", null, null, null, [""], e = dh(e), 0, [0], e));
}
function bo(e, n, t, r, o, i, s, a, c) {
  for (var l = 0, u = 0, f = s, h = 0, m = 0, d = 0, g = 1, p = 1, b = 1, y = 0, C = "", O = o, x = i, R = r, _ = C; p; )
    switch (d = y, y = kt()) {
      // (
      case 40:
        if (d != 108 && st(_, f - 1) == 58) {
          mo(_ += he(Yi(y), "&", "&\f"), "&\f", $u(l ? a[l - 1] : 0)) != -1 && (b = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        _ += Yi(y);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        _ += xh(d);
        break;
      // \
      case 92:
        _ += ph(vo() - 1, 7);
        continue;
      // /
      case 47:
        switch (An()) {
          case 42:
          case 47:
            Tr(bh(gh(kt(), vo()), n, t, c), c);
            break;
          default:
            _ += "/";
        }
        break;
      // {
      case 123 * g:
        a[l++] = Gt(_) * b;
      // } ; \0
      case 125 * g:
      case 59:
      case 0:
        switch (y) {
          // \0 }
          case 0:
          case 125:
            p = 0;
          // ;
          case 59 + u:
            b == -1 && (_ = he(_, /\f/g, "")), m > 0 && Gt(_) - f && Tr(m > 32 ? Oc(_ + ";", r, t, f - 1, c) : Oc(he(_, " ", "") + ";", r, t, f - 2, c), c);
            break;
          // @ ;
          case 59:
            _ += ";";
          // { rule/at-rule
          default:
            if (Tr(R = Ec(_, n, t, l, u, o, a, C, O = [], x = [], f, i), i), y === 123)
              if (u === 0)
                bo(_, n, R, R, O, i, f, a, x);
              else
                switch (h === 99 && st(_, 3) === 110 ? 100 : h) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    bo(e, R, R, r && Tr(Ec(e, R, R, 0, 0, o, a, C, o, O = [], f, x), x), o, x, f, a, r ? O : x);
                    break;
                  default:
                    bo(_, R, R, R, [""], x, 0, a, x);
                }
        }
        l = u = m = 0, g = b = 1, C = _ = "", f = s;
        break;
      // :
      case 58:
        f = 1 + Gt(_), m = d;
      default:
        if (g < 1) {
          if (y == 123)
            --g;
          else if (y == 125 && g++ == 0 && fh() == 125)
            continue;
        }
        switch (_ += Da(y), y * g) {
          // &
          case 38:
            b = u > 0 ? 1 : (_ += "\f", -1);
            break;
          // ,
          case 44:
            a[l++] = (Gt(_) - 1) * b, b = 1;
            break;
          // @
          case 64:
            An() === 45 && (_ += Yi(kt())), h = An(), u = f = Gt(C = _ += mh(vo())), y++;
            break;
          // -
          case 45:
            d === 45 && Gt(_) == 2 && (g = 0);
        }
    }
  return i;
}
function Ec(e, n, t, r, o, i, s, a, c, l, u, f) {
  for (var h = o - 1, m = o === 0 ? i : [""], d = Iu(m), g = 0, p = 0, b = 0; g < r; ++g)
    for (var y = 0, C = Gn(e, h + 1, h = $u(p = s[g])), O = e; y < d; ++y)
      (O = Pu(p > 0 ? m[y] + " " + C : he(C, /&\f/g, m[y]))) && (c[b++] = O);
  return xi(e, n, t, o === 0 ? di : a, c, l, u, f);
}
function bh(e, n, t, r) {
  return xi(e, n, t, Ru, Da(uh()), Gn(e, 2, -2), 0, r);
}
function Oc(e, n, t, r, o) {
  return xi(e, n, t, La, Gn(e, 0, r), Gn(e, r + 1, -1), r, o);
}
function ku(e, n, t) {
  switch (ch(e, n)) {
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
      return $r + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Ie + e + $r + e + Be + e + e;
    // writing-mode
    case 5936:
      switch (st(e, n + 11)) {
        // vertical-l(r)
        case 114:
          return Ie + e + Be + he(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return Ie + e + Be + he(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return Ie + e + Be + he(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return Ie + e + Be + e + e;
    // order
    case 6165:
      return Ie + e + Be + "flex-" + e + e;
    // align-items
    case 5187:
      return Ie + e + he(e, /(\w+).+(:[^]+)/, Ie + "box-$1$2" + Be + "flex-$1$2") + e;
    // align-self
    case 5443:
      return Ie + e + Be + "flex-item-" + he(e, /flex-|-self/g, "") + (on(e, /flex-|baseline/) ? "" : Be + "grid-row-" + he(e, /flex-|-self/g, "")) + e;
    // align-content
    case 4675:
      return Ie + e + Be + "flex-line-pack" + he(e, /align-content|flex-|-self/g, "") + e;
    // flex-shrink
    case 5548:
      return Ie + e + Be + he(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return Ie + e + Be + he(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return Ie + "box-" + he(e, "-grow", "") + Ie + e + Be + he(e, "grow", "positive") + e;
    // transition
    case 4554:
      return Ie + he(e, /([^-])(transform)/g, "$1" + Ie + "$2") + e;
    // cursor
    case 6187:
      return he(he(he(e, /(zoom-|grab)/, Ie + "$1"), /(image-set)/, Ie + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return he(e, /(image-set\([^]*)/, Ie + "$1$`$1");
    // justify-content
    case 4968:
      return he(he(e, /(.+:)(flex-)?(.*)/, Ie + "box-pack:$3" + Be + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Ie + e + e;
    // justify-self
    case 4200:
      if (!on(e, /flex-|baseline/)) return Be + "grid-column-align" + Gn(e, n) + e;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return Be + he(e, "template-", "") + e;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return t && t.some(function(r, o) {
        return n = o, on(r.props, /grid-\w+-end/);
      }) ? ~mo(e + (t = t[n].value), "span", 0) ? e : Be + he(e, "-start", "") + e + Be + "grid-row-span:" + (~mo(t, "span", 0) ? on(t, /\d+/) : +on(t, /\d+/) - +on(e, /\d+/)) + ";" : Be + he(e, "-start", "") + e;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return t && t.some(function(r) {
        return on(r.props, /grid-\w+-start/);
      }) ? e : Be + he(he(e, "-end", "-span"), "span ", "") + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return he(e, /(.+)-inline(.+)/, Ie + "$1$2") + e;
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
      if (Gt(e) - 1 - n > 6)
        switch (st(e, n + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (st(e, n + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return he(e, /(.+:)(.+)-([^]+)/, "$1" + Ie + "$2-$3$1" + $r + (st(e, n + 3) == 108 ? "$3" : "$2-$3")) + e;
          // (s)tretch
          case 115:
            return ~mo(e, "stretch", 0) ? ku(he(e, "stretch", "fill-available"), n, t) + e : e;
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
      if (st(e, n + 6) === 121)
        return he(e, ":", ":" + Ie) + e;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (st(e, st(e, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return he(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + Ie + (st(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Ie + "$2$3$1" + Be + "$2box$3") + e;
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
function Bo(e, n) {
  for (var t = "", r = 0; r < e.length; r++)
    t += n(e[r], r, e, n) || "";
  return t;
}
function yh(e, n, t, r) {
  switch (e.type) {
    case ah:
      if (e.children.length) break;
    case sh:
    case La:
      return e.return = e.return || e.value;
    case Ru:
      return "";
    case Au:
      return e.return = e.value + "{" + Bo(e.children, r) + "}";
    case di:
      if (!Gt(e.value = e.props.join(","))) return "";
  }
  return Gt(t = Bo(e.children, r)) ? e.return = e.value + "{" + t + "}" : "";
}
function _h(e) {
  var n = Iu(e);
  return function(t, r, o, i) {
    for (var s = "", a = 0; a < n; a++)
      s += e[a](t, r, o, i) || "";
    return s;
  };
}
function Sh(e) {
  return function(n) {
    n.root || (n = n.return) && e(n);
  };
}
function Ch(e, n, t, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case La:
        e.return = ku(e.value, e.length, t);
        return;
      case Au:
        return Bo([hn(e, { value: he(e.value, "@", "@" + Ie) })], r);
      case di:
        if (e.length)
          return lh(t = e.props, function(o) {
            switch (on(o, r = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                Bn(hn(e, { props: [he(o, /:(read-\w+)/, ":" + $r + "$1")] })), Bn(hn(e, { props: [o] })), Ts(e, { props: wc(t, r) });
                break;
              // :placeholder
              case "::placeholder":
                Bn(hn(e, { props: [he(o, /:(plac\w+)/, ":" + Ie + "input-$1")] })), Bn(hn(e, { props: [he(o, /:(plac\w+)/, ":" + $r + "$1")] })), Bn(hn(e, { props: [he(o, /:(plac\w+)/, Be + "input-$1")] })), Bn(hn(e, { props: [o] })), Ts(e, { props: wc(t, r) });
                break;
            }
            return "";
          });
    }
}
var wh = {
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
}, jn = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", ju = "active", Mu = "data-styled-version", gi = "6.1.18", Ba = `/*!sc*/
`, Ho = typeof window < "u" && typeof document < "u", Eh = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Tc = /invalid hook call/i, Qr = /* @__PURE__ */ new Set(), Oh = function(e, n) {
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
        Tc.test(s) ? (i = !1, Qr.delete(r)) : o.apply(void 0, Wn([s], a, !1));
      }, Se(), i && !Qr.has(r) && (console.warn(r), Qr.add(r));
    } catch (s) {
      Tc.test(s.message) && Qr.delete(r);
    } finally {
      console.error = o;
    }
  }
}, mi = Object.freeze([]), Yn = Object.freeze({});
function Th(e, n, t) {
  return t === void 0 && (t = Yn), e.theme !== t.theme && e.theme || n || t.theme;
}
var $s = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Rh = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Ah = /(^-|-$)/g;
function Rc(e) {
  return e.replace(Rh, "-").replace(Ah, "");
}
var $h = /(a)(d)/gi, Zr = 52, Ac = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Ps(e) {
  var n, t = "";
  for (n = Math.abs(e); n > Zr; n = n / Zr | 0) t = Ac(n % Zr) + t;
  return (Ac(n % Zr) + t).replace($h, "$1-$2");
}
var Ki, Lu = 5381, En = function(e, n) {
  for (var t = n.length; t; ) e = 33 * e ^ n.charCodeAt(--t);
  return e;
}, Du = function(e) {
  return En(Lu, e);
};
function Ph(e) {
  return Ps(Du(e) >>> 0);
}
function Bu(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Ji(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Hu = typeof Symbol == "function" && Symbol.for, zu = Hu ? Symbol.for("react.memo") : 60115, Ih = Hu ? Symbol.for("react.forward_ref") : 60112, Nh = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, kh = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Fu = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, jh = ((Ki = {})[Ih] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Ki[zu] = Fu, Ki);
function $c(e) {
  return ("type" in (n = e) && n.type.$$typeof) === zu ? Fu : "$$typeof" in e ? jh[e.$$typeof] : Nh;
  var n;
}
var Mh = Object.defineProperty, Lh = Object.getOwnPropertyNames, Pc = Object.getOwnPropertySymbols, Dh = Object.getOwnPropertyDescriptor, Bh = Object.getPrototypeOf, Ic = Object.prototype;
function Vu(e, n, t) {
  if (typeof n != "string") {
    if (Ic) {
      var r = Bh(n);
      r && r !== Ic && Vu(e, r, t);
    }
    var o = Lh(n);
    Pc && (o = o.concat(Pc(n)));
    for (var i = $c(e), s = $c(n), a = 0; a < o.length; ++a) {
      var c = o[a];
      if (!(c in kh || t && t[c] || s && c in s || i && c in i)) {
        var l = Dh(n, c);
        try {
          Mh(e, c, l);
        } catch {
        }
      }
    }
  }
  return e;
}
function Kn(e) {
  return typeof e == "function";
}
function Ha(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function Tn(e, n) {
  return e && n ? "".concat(e, " ").concat(n) : e || n || "";
}
function Nc(e, n) {
  if (e.length === 0) return "";
  for (var t = e[0], r = 1; r < e.length; r++) t += e[r];
  return t;
}
function Jn(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Is(e, n, t) {
  if (t === void 0 && (t = !1), !t && !Jn(e) && !Array.isArray(e)) return n;
  if (Array.isArray(n)) for (var r = 0; r < n.length; r++) e[r] = Is(e[r], n[r]);
  else if (Jn(n)) for (var r in n) e[r] = Is(e[r], n[r]);
  return e;
}
function za(e, n) {
  Object.defineProperty(e, "toString", { value: n });
}
var Hh = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function zh() {
  for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
  for (var t = e[0], r = [], o = 1, i = e.length; o < i; o += 1) r.push(e[o]);
  return r.forEach(function(s) {
    t = t.replace(/%[a-z]/, s);
  }), t;
}
function ar(e) {
  for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(n.length > 0 ? " Args: ".concat(n.join(", ")) : "")) : new Error(zh.apply(void 0, Wn([Hh[e]], n, !1)).trim());
}
var Fh = function() {
  function e(n) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = n;
  }
  return e.prototype.indexOfGroup = function(n) {
    for (var t = 0, r = 0; r < n; r++) t += this.groupSizes[r];
    return t;
  }, e.prototype.insertRules = function(n, t) {
    if (n >= this.groupSizes.length) {
      for (var r = this.groupSizes, o = r.length, i = o; n >= i; ) if ((i <<= 1) < 0) throw ar(16, "".concat(n));
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
    for (var r = this.groupSizes[n], o = this.indexOfGroup(n), i = o + r, s = o; s < i; s++) t += "".concat(this.tag.getRule(s)).concat(Ba);
    return t;
  }, e;
}(), Vh = 1 << 30, yo = /* @__PURE__ */ new Map(), zo = /* @__PURE__ */ new Map(), _o = 1, eo = function(e) {
  if (yo.has(e)) return yo.get(e);
  for (; zo.has(_o); ) _o++;
  var n = _o++;
  if (process.env.NODE_ENV !== "production" && ((0 | n) < 0 || n > Vh)) throw ar(16, "".concat(n));
  return yo.set(e, n), zo.set(n, e), n;
}, qh = function(e, n) {
  _o = n + 1, yo.set(e, n), zo.set(n, e);
}, Uh = "style[".concat(jn, "][").concat(Mu, '="').concat(gi, '"]'), Wh = new RegExp("^".concat(jn, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Gh = function(e, n, t) {
  for (var r, o = t.split(","), i = 0, s = o.length; i < s; i++) (r = o[i]) && e.registerName(n, r);
}, Xh = function(e, n) {
  for (var t, r = ((t = n.textContent) !== null && t !== void 0 ? t : "").split(Ba), o = [], i = 0, s = r.length; i < s; i++) {
    var a = r[i].trim();
    if (a) {
      var c = a.match(Wh);
      if (c) {
        var l = 0 | parseInt(c[1], 10), u = c[2];
        l !== 0 && (qh(u, l), Gh(e, u, c[3]), e.getTag().insertRules(l, o)), o.length = 0;
      } else o.push(a);
    }
  }
}, kc = function(e) {
  for (var n = document.querySelectorAll(Uh), t = 0, r = n.length; t < r; t++) {
    var o = n[t];
    o && o.getAttribute(jn) !== ju && (Xh(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function Yh() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var qu = function(e) {
  var n = document.head, t = e || n, r = document.createElement("style"), o = function(a) {
    var c = Array.from(a.querySelectorAll("style[".concat(jn, "]")));
    return c[c.length - 1];
  }(t), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(jn, ju), r.setAttribute(Mu, gi);
  var s = Yh();
  return s && r.setAttribute("nonce", s), t.insertBefore(r, i), r;
}, Kh = function() {
  function e(n) {
    this.element = qu(n), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
        var s = r[o];
        if (s.ownerNode === t) return s;
      }
      throw ar(17);
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
}(), Jh = function() {
  function e(n) {
    this.element = qu(n), this.nodes = this.element.childNodes, this.length = 0;
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
}(), Qh = function() {
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
}(), jc = Ho, Zh = { isServer: !Ho, useCSSOMInjection: !Eh }, Uu = function() {
  function e(n, t, r) {
    n === void 0 && (n = Yn), t === void 0 && (t = {});
    var o = this;
    this.options = pt(pt({}, Zh), n), this.gs = t, this.names = new Map(r), this.server = !!n.isServer, !this.server && Ho && jc && (jc = !1, kc(this)), za(this, function() {
      return function(i) {
        for (var s = i.getTag(), a = s.length, c = "", l = function(f) {
          var h = function(b) {
            return zo.get(b);
          }(f);
          if (h === void 0) return "continue";
          var m = i.names.get(h), d = s.getGroup(f);
          if (m === void 0 || !m.size || d.length === 0) return "continue";
          var g = "".concat(jn, ".g").concat(f, '[id="').concat(h, '"]'), p = "";
          m !== void 0 && m.forEach(function(b) {
            b.length > 0 && (p += "".concat(b, ","));
          }), c += "".concat(d).concat(g, '{content:"').concat(p, '"}').concat(Ba);
        }, u = 0; u < a; u++) l(u);
        return c;
      }(o);
    });
  }
  return e.registerId = function(n) {
    return eo(n);
  }, e.prototype.rehydrate = function() {
    !this.server && Ho && kc(this);
  }, e.prototype.reconstructWithOptions = function(n, t) {
    return t === void 0 && (t = !0), new e(pt(pt({}, this.options), n), this.gs, t && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(n) {
    return this.gs[n] = (this.gs[n] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (n = function(t) {
      var r = t.useCSSOMInjection, o = t.target;
      return t.isServer ? new Qh(o) : r ? new Kh(o) : new Jh(o);
    }(this.options), new Fh(n)));
    var n;
  }, e.prototype.hasNameForId = function(n, t) {
    return this.names.has(n) && this.names.get(n).has(t);
  }, e.prototype.registerName = function(n, t) {
    if (eo(n), this.names.has(n)) this.names.get(n).add(t);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(t), this.names.set(n, r);
    }
  }, e.prototype.insertRules = function(n, t, r) {
    this.registerName(n, t), this.getTag().insertRules(eo(n), r);
  }, e.prototype.clearNames = function(n) {
    this.names.has(n) && this.names.get(n).clear();
  }, e.prototype.clearRules = function(n) {
    this.getTag().clearGroup(eo(n)), this.clearNames(n);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), ex = /&/g, tx = /^\s*\/\/.*$/gm;
function Wu(e, n) {
  return e.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(n, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(n, " ")), t.props = t.props.map(function(r) {
      return "".concat(n, " ").concat(r);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = Wu(t.children, n)), t;
  });
}
function nx(e) {
  var n, t, r, o = Yn, i = o.options, s = i === void 0 ? Yn : i, a = o.plugins, c = a === void 0 ? mi : a, l = function(h, m, d) {
    return d.startsWith(t) && d.endsWith(t) && d.replaceAll(t, "").length > 0 ? ".".concat(n) : h;
  }, u = c.slice();
  u.push(function(h) {
    h.type === di && h.value.includes("&") && (h.props[0] = h.props[0].replace(ex, t).replace(r, l));
  }), s.prefix && u.push(Ch), u.push(yh);
  var f = function(h, m, d, g) {
    m === void 0 && (m = ""), d === void 0 && (d = ""), g === void 0 && (g = "&"), n = g, t = m, r = new RegExp("\\".concat(t, "\\b"), "g");
    var p = h.replace(tx, ""), b = vh(d || m ? "".concat(d, " ").concat(m, " { ").concat(p, " }") : p);
    s.namespace && (b = Wu(b, s.namespace));
    var y = [];
    return Bo(b, _h(u.concat(Sh(function(C) {
      return y.push(C);
    })))), y;
  };
  return f.hash = c.length ? c.reduce(function(h, m) {
    return m.name || ar(15), En(h, m.name);
  }, Lu).toString() : "", f;
}
var rx = new Uu(), Ns = nx(), Gu = U.createContext({ shouldForwardProp: void 0, styleSheet: rx, stylis: Ns });
Gu.Consumer;
U.createContext(void 0);
function Mc() {
  return Ot(Gu);
}
var Lc = function() {
  function e(n, t) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Ns);
      var s = r.name + i.hash;
      o.hasNameForId(r.id, s) || o.insertRules(r.id, s, i(r.rules, s, "@keyframes"));
    }, this.name = n, this.id = "sc-keyframes-".concat(n), this.rules = t, za(this, function() {
      throw ar(12, String(r.name));
    });
  }
  return e.prototype.getName = function(n) {
    return n === void 0 && (n = Ns), this.name + n.hash;
  }, e;
}(), ox = function(e) {
  return e >= "A" && e <= "Z";
};
function Dc(e) {
  for (var n = "", t = 0; t < e.length; t++) {
    var r = e[t];
    if (t === 1 && r === "-" && e[0] === "-") return e;
    ox(r) ? n += "-" + r.toLowerCase() : n += r;
  }
  return n.startsWith("ms-") ? "-" + n : n;
}
var Xu = function(e) {
  return e == null || e === !1 || e === "";
}, Yu = function(e) {
  var n, t, r = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !Xu(i) && (Array.isArray(i) && i.isCss || Kn(i) ? r.push("".concat(Dc(o), ":"), i, ";") : Jn(i) ? r.push.apply(r, Wn(Wn(["".concat(o, " {")], Yu(i), !1), ["}"], !1)) : r.push("".concat(Dc(o), ": ").concat((n = o, (t = i) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || t === 0 || n in wh || n.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return r;
};
function $n(e, n, t, r) {
  if (Xu(e)) return [];
  if (Ha(e)) return [".".concat(e.styledComponentId)];
  if (Kn(e)) {
    if (!Kn(i = e) || i.prototype && i.prototype.isReactComponent || !n) return [e];
    var o = e(n);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof Lc || Jn(o) || o === null || console.error("".concat(Bu(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), $n(o, n, t, r);
  }
  var i;
  return e instanceof Lc ? t ? (e.inject(t, r), [e.getName(r)]) : [e] : Jn(e) ? Yu(e) : Array.isArray(e) ? Array.prototype.concat.apply(mi, e.map(function(s) {
    return $n(s, n, t, r);
  })) : [e.toString()];
}
function ix(e) {
  for (var n = 0; n < e.length; n += 1) {
    var t = e[n];
    if (Kn(t) && !Ha(t)) return !1;
  }
  return !0;
}
var sx = Du(gi), ax = function() {
  function e(n, t, r) {
    this.rules = n, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && ix(n), this.componentId = t, this.baseHash = En(sx, t), this.baseStyle = r, Uu.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(n, t, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(n, t, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) o = Tn(o, this.staticRulesId);
    else {
      var i = Nc($n(this.rules, n, t, r)), s = Ps(En(this.baseHash, i) >>> 0);
      if (!t.hasNameForId(this.componentId, s)) {
        var a = r(i, ".".concat(s), void 0, this.componentId);
        t.insertRules(this.componentId, s, a);
      }
      o = Tn(o, s), this.staticRulesId = s;
    }
    else {
      for (var c = En(this.baseHash, r.hash), l = "", u = 0; u < this.rules.length; u++) {
        var f = this.rules[u];
        if (typeof f == "string") l += f, process.env.NODE_ENV !== "production" && (c = En(c, f));
        else if (f) {
          var h = Nc($n(f, n, t, r));
          c = En(c, h + u), l += h;
        }
      }
      if (l) {
        var m = Ps(c >>> 0);
        t.hasNameForId(this.componentId, m) || t.insertRules(this.componentId, m, r(l, ".".concat(m), void 0, this.componentId)), o = Tn(o, m);
      }
    }
    return o;
  }, e;
}(), Ku = U.createContext(void 0);
Ku.Consumer;
var Qi = {}, Bc = /* @__PURE__ */ new Set();
function cx(e, n, t) {
  var r = Ha(e), o = e, i = !Ji(e), s = n.attrs, a = s === void 0 ? mi : s, c = n.componentId, l = c === void 0 ? function(O, x) {
    var R = typeof O != "string" ? "sc" : Rc(O);
    Qi[R] = (Qi[R] || 0) + 1;
    var _ = "".concat(R, "-").concat(Ph(gi + R + Qi[R]));
    return x ? "".concat(x, "-").concat(_) : _;
  }(n.displayName, n.parentComponentId) : c, u = n.displayName, f = u === void 0 ? function(O) {
    return Ji(O) ? "styled.".concat(O) : "Styled(".concat(Bu(O), ")");
  }(e) : u, h = n.displayName && n.componentId ? "".concat(Rc(n.displayName), "-").concat(n.componentId) : n.componentId || l, m = r && o.attrs ? o.attrs.concat(a).filter(Boolean) : a, d = n.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var g = o.shouldForwardProp;
    if (n.shouldForwardProp) {
      var p = n.shouldForwardProp;
      d = function(O, x) {
        return g(O, x) && p(O, x);
      };
    } else d = g;
  }
  var b = new ax(t, h, r ? o.componentStyle : void 0);
  function y(O, x) {
    return function(R, _, j) {
      var M = R.attrs, X = R.componentStyle, re = R.defaultProps, te = R.foldedComponentIds, z = R.styledComponentId, W = R.target, Z = U.useContext(Ku), N = Mc(), A = R.shouldForwardProp || N.shouldForwardProp;
      process.env.NODE_ENV !== "production" && bc(z);
      var P = Th(_, Z, re) || Yn, k = function(ce, ue, de) {
        for (var Oe, _e = pt(pt({}, ue), { className: void 0, theme: de }), ke = 0; ke < ce.length; ke += 1) {
          var Ne = Kn(Oe = ce[ke]) ? Oe(_e) : Oe;
          for (var pe in Ne) _e[pe] = pe === "className" ? Tn(_e[pe], Ne[pe]) : pe === "style" ? pt(pt({}, _e[pe]), Ne[pe]) : Ne[pe];
        }
        return ue.className && (_e.className = Tn(_e.className, ue.className)), _e;
      }(M, _, P), B = k.as || W, H = {};
      for (var J in k) k[J] === void 0 || J[0] === "$" || J === "as" || J === "theme" && k.theme === P || (J === "forwardedAs" ? H.as = k.forwardedAs : A && !A(J, B) || (H[J] = k[J], A || process.env.NODE_ENV !== "development" || ih(J) || Bc.has(J) || !$s.has(B) || (Bc.add(J), console.warn('styled-components: it looks like an unknown prop "'.concat(J, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var ne = function(ce, ue) {
        var de = Mc(), Oe = ce.generateAndInjectStyles(ue, de.styleSheet, de.stylis);
        return process.env.NODE_ENV !== "production" && bc(Oe), Oe;
      }(X, k);
      process.env.NODE_ENV !== "production" && R.warnTooManyClasses && R.warnTooManyClasses(ne);
      var ee = Tn(te, z);
      return ne && (ee += " " + ne), k.className && (ee += " " + k.className), H[Ji(B) && !$s.has(B) ? "class" : "className"] = ee, j && (H.ref = j), Xd(B, H);
    }(C, O, x);
  }
  y.displayName = f;
  var C = U.forwardRef(y);
  return C.attrs = m, C.componentStyle = b, C.displayName = f, C.shouldForwardProp = d, C.foldedComponentIds = r ? Tn(o.foldedComponentIds, o.styledComponentId) : "", C.styledComponentId = h, C.target = r ? o.target : e, Object.defineProperty(C, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(O) {
    this._foldedDefaultProps = r ? function(x) {
      for (var R = [], _ = 1; _ < arguments.length; _++) R[_ - 1] = arguments[_];
      for (var j = 0, M = R; j < M.length; j++) Is(x, M[j], !0);
      return x;
    }({}, o.defaultProps, O) : O;
  } }), process.env.NODE_ENV !== "production" && (Oh(f, h), C.warnTooManyClasses = /* @__PURE__ */ function(O, x) {
    var R = {}, _ = !1;
    return function(j) {
      if (!_ && (R[j] = !0, Object.keys(R).length >= 200)) {
        var M = x ? ' with the id of "'.concat(x, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(O).concat(M, `.
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
  }(f, h)), za(C, function() {
    return ".".concat(C.styledComponentId);
  }), i && Vu(C, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), C;
}
function Hc(e, n) {
  for (var t = [e[0]], r = 0, o = n.length; r < o; r += 1) t.push(n[r], e[r + 1]);
  return t;
}
var zc = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function lx(e) {
  for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
  if (Kn(e) || Jn(e)) return zc($n(Hc(mi, Wn([e], n, !0))));
  var r = e;
  return n.length === 0 && r.length === 1 && typeof r[0] == "string" ? $n(r) : zc($n(Hc(r, n)));
}
function ks(e, n, t) {
  if (t === void 0 && (t = Yn), !n) throw ar(1, n);
  var r = function(o) {
    for (var i = [], s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
    return e(n, t, lx.apply(void 0, Wn([o], i, !1)));
  };
  return r.attrs = function(o) {
    return ks(e, n, pt(pt({}, t), { attrs: Array.prototype.concat(t.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return ks(e, n, pt(pt({}, t), o));
  }, r;
}
var Ju = function(e) {
  return ks(cx, e);
}, Jt = Ju;
$s.forEach(function(e) {
  Jt[e] = Ju(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var to = "__sc-".concat(jn, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[to] || (window[to] = 0), window[to] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[to] += 1);
const vi = Vo;
(function(e, n) {
  const t = Vo, r = e();
  for (; ; )
    try {
      if (-parseInt(t(123)) / 1 * (parseInt(t(119)) / 2) + parseInt(t(116)) / 3 + -parseInt(t(112)) / 4 * (parseInt(t(115)) / 5) + parseInt(t(114)) / 6 * (-parseInt(t(117)) / 7) + -parseInt(t(113)) / 8 * (-parseInt(t(122)) / 9) + parseInt(t(111)) / 10 + parseInt(t(118)) / 11 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Fo, 462021);
const ux = Jt[vi(110)]`
  position: relative;
  /* flex-direction: column; */
  border-radius: 15px;
  /* border: 1px solid #a0beeb; */
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
  justify-items: center;
  align-items: center;
  :fullscreen & {
    border: none;
  }
`;
function Fo() {
  const e = ["109207XwlOxl", "14196006xDabuO", "2866AoOeqM", "canvas", "span", "4346145Ykiwhk", "508jzynHj", "div", "3042530XEpTRc", "309196CUfrVw", "8sQyDVq", "282ZYToSE", "35pTeAxg", "1159863EiYkky"];
  return Fo = function() {
    return e;
  }, Fo();
}
const fx = Jt[vi(110)]`
  border-radius: 15px;
  position: relative;
  object-fit: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  overflow: hidden;
  &:focus-visible {
    outline: none;
  }
  :fullscreen & {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`, dx = Jt[vi(120)]`
  border: 2px solid #a0beeb;
  border-radius: 15px;
  display: inline;
  padding: 0;
  &:focus-visible {
    outline: none;
  }
`;
function Vo(e, n) {
  const t = Fo();
  return Vo = function(r, o) {
    return r = r - 110, t[r];
  }, Vo(e, n);
}
const Fc = Jt[vi(121)]`
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
  pointer-events: none;
`, Qu = /* @__PURE__ */ fi({});
var Zi = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Vc;
function hx() {
  return Vc || (Vc = 1, function(e) {
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
  }(Zi)), Zi.exports;
}
var xx = hx();
const we = /* @__PURE__ */ Zd(xx), px = {
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
}, nt = Math.round;
function es(e, n) {
  const t = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], r = t.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    r[o] = n(r[o] || 0, t[o] || "", o);
  return t[3] ? r[3] = t[3].includes("%") ? r[3] / 100 : r[3] : r[3] = 1, r;
}
const qc = (e, n, t) => t === 0 ? e : e / 100;
function br(e, n) {
  const t = n || 255;
  return e > t ? t : e < 0 ? 0 : e;
}
let no = class Zu {
  constructor(n) {
    /**
     * All FastColor objects are valid. So isValid is always true. This property is kept to be compatible with TinyColor.
     */
    Xe(this, "isValid", !0);
    /**
     * Red, R in RGB
     */
    Xe(this, "r", 0);
    /**
     * Green, G in RGB
     */
    Xe(this, "g", 0);
    /**
     * Blue, B in RGB
     */
    Xe(this, "b", 0);
    /**
     * Alpha/Opacity, A in RGBA/HSLA
     */
    Xe(this, "a", 1);
    // HSV privates
    Xe(this, "_h");
    Xe(this, "_s");
    Xe(this, "_l");
    Xe(this, "_v");
    // intermediate variables to calculate HSL/HSV
    Xe(this, "_max");
    Xe(this, "_min");
    Xe(this, "_brightness");
    function t(r) {
      return r[0] in n && r[1] in n && r[2] in n;
    }
    if (n) if (typeof n == "string") {
      let o = function(i) {
        return r.startsWith(i);
      };
      const r = n.trim();
      if (/^#?[A-F\d]{3,8}$/i.test(r))
        this.fromHexString(r);
      else if (o("rgb"))
        this.fromRgbString(r);
      else if (o("hsl"))
        this.fromHslString(r);
      else if (o("hsv") || o("hsb"))
        this.fromHsvString(r);
      else {
        const i = px[r.toLowerCase()];
        i && this.fromHexString(
          // Convert 36 hex to 16 hex
          parseInt(i, 36).toString(16).padStart(6, "0")
        );
      }
    } else if (n instanceof Zu)
      this.r = n.r, this.g = n.g, this.b = n.b, this.a = n.a, this._h = n._h, this._s = n._s, this._l = n._l, this._v = n._v;
    else if (t("rgb"))
      this.r = br(n.r), this.g = br(n.g), this.b = br(n.b), this.a = typeof n.a == "number" ? br(n.a, 1) : 1;
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
      n === 0 ? this._h = 0 : this._h = nt(60 * (this.r === this.getMax() ? (this.g - this.b) / n + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / n + 2 : (this.r - this.g) / n + 4));
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
      r: nt(i("r")),
      g: nt(i("g")),
      b: nt(i("b")),
      a: nt(i("a") * 100) / 100
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
    const t = this._c(n), r = this.a + t.a * (1 - this.a), o = (i) => nt((this[i] * this.a + t[i] * t.a * (1 - this.a)) / r);
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
      const i = nt(this.a * 255).toString(16);
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
    const n = this.getHue(), t = nt(this.getSaturation() * 100), r = nt(this.getLightness() * 100);
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
    return o[n] = br(t, r), o;
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
      const h = nt(r * 255);
      this.r = h, this.g = h, this.b = h;
    }
    let i = 0, s = 0, a = 0;
    const c = n / 60, l = (1 - Math.abs(2 * r - 1)) * t, u = l * (1 - Math.abs(c % 2 - 1));
    c >= 0 && c < 1 ? (i = l, s = u) : c >= 1 && c < 2 ? (i = u, s = l) : c >= 2 && c < 3 ? (s = l, a = u) : c >= 3 && c < 4 ? (s = u, a = l) : c >= 4 && c < 5 ? (i = u, a = l) : c >= 5 && c < 6 && (i = l, a = u);
    const f = r - l / 2;
    this.r = nt((i + f) * 255), this.g = nt((s + f) * 255), this.b = nt((a + f) * 255);
  }
  fromHsv({
    h: n,
    s: t,
    v: r,
    a: o
  }) {
    this._h = n % 360, this._s = t, this._v = r, this.a = typeof o == "number" ? o : 1;
    const i = nt(r * 255);
    if (this.r = i, this.g = i, this.b = i, t <= 0)
      return;
    const s = n / 60, a = Math.floor(s), c = s - a, l = nt(r * (1 - t) * 255), u = nt(r * (1 - t * c) * 255), f = nt(r * (1 - t * (1 - c)) * 255);
    switch (a) {
      case 0:
        this.g = f, this.b = l;
        break;
      case 1:
        this.r = u, this.b = l;
        break;
      case 2:
        this.r = l, this.b = f;
        break;
      case 3:
        this.r = l, this.g = u;
        break;
      case 4:
        this.r = f, this.g = l;
        break;
      case 5:
      default:
        this.g = l, this.b = u;
        break;
    }
  }
  fromHsvString(n) {
    const t = es(n, qc);
    this.fromHsv({
      h: t[0],
      s: t[1],
      v: t[2],
      a: t[3]
    });
  }
  fromHslString(n) {
    const t = es(n, qc);
    this.fromHsl({
      h: t[0],
      s: t[1],
      l: t[2],
      a: t[3]
    });
  }
  fromRgbString(n) {
    const t = es(n, (r, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? nt(r / 100 * 255) : r
    ));
    this.r = t[0], this.g = t[1], this.b = t[2], this.a = t[3];
  }
};
const ro = 2, Uc = 0.16, gx = 0.05, mx = 0.05, vx = 0.15, ef = 5, tf = 4, bx = [{
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
function Wc(e, n, t) {
  let r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = t ? Math.round(e.h) - ro * n : Math.round(e.h) + ro * n : r = t ? Math.round(e.h) + ro * n : Math.round(e.h) - ro * n, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function Gc(e, n, t) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  let r;
  return t ? r = e.s - Uc * n : n === tf ? r = e.s + Uc : r = e.s + gx * n, r > 1 && (r = 1), t && n === ef && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Math.round(r * 100) / 100;
}
function Xc(e, n, t) {
  let r;
  return t ? r = e.v + mx * n : r = e.v - vx * n, r = Math.max(0, Math.min(1, r)), Math.round(r * 100) / 100;
}
function yx(e, n = {}) {
  const t = [], r = new no(e), o = r.toHsv();
  for (let i = ef; i > 0; i -= 1) {
    const s = new no({
      h: Wc(o, i, !0),
      s: Gc(o, i, !0),
      v: Xc(o, i, !0)
    });
    t.push(s);
  }
  t.push(r);
  for (let i = 1; i <= tf; i += 1) {
    const s = new no({
      h: Wc(o, i),
      s: Gc(o, i),
      v: Xc(o, i)
    });
    t.push(s);
  }
  return n.theme === "dark" ? bx.map(({
    index: i,
    amount: s
  }) => new no(n.backgroundColor || "#141414").mix(t[i], s).toHexString()) : t.map((i) => i.toHexString());
}
const js = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
js.primary = js[5];
function _x() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Sx(e, n) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(n);
  let t = n;
  for (; t; ) {
    if (t === e)
      return !0;
    t = t.parentNode;
  }
  return !1;
}
const Yc = "data-rc-order", Kc = "data-rc-priority", Cx = "rc-util-key", Ms = /* @__PURE__ */ new Map();
function nf({
  mark: e
} = {}) {
  return e ? e.startsWith("data-") ? e : `data-${e}` : Cx;
}
function Fa(e) {
  return e.attachTo ? e.attachTo : document.querySelector("head") || document.body;
}
function wx(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Va(e) {
  return Array.from((Ms.get(e) || e).children).filter((n) => n.tagName === "STYLE");
}
function rf(e, n = {}) {
  if (!_x())
    return null;
  const {
    csp: t,
    prepend: r,
    priority: o = 0
  } = n, i = wx(r), s = i === "prependQueue", a = document.createElement("style");
  a.setAttribute(Yc, i), s && o && a.setAttribute(Kc, `${o}`), t != null && t.nonce && (a.nonce = t == null ? void 0 : t.nonce), a.innerHTML = e;
  const c = Fa(n), {
    firstChild: l
  } = c;
  if (r) {
    if (s) {
      const u = (n.styles || Va(c)).filter((f) => {
        if (!["prepend", "prependQueue"].includes(f.getAttribute(Yc)))
          return !1;
        const h = Number(f.getAttribute(Kc) || 0);
        return o >= h;
      });
      if (u.length)
        return c.insertBefore(a, u[u.length - 1].nextSibling), a;
    }
    c.insertBefore(a, l);
  } else
    c.appendChild(a);
  return a;
}
function Ex(e, n = {}) {
  let {
    styles: t
  } = n;
  return t || (t = Va(Fa(n))), t.find((r) => r.getAttribute(nf(n)) === e);
}
function Ox(e, n) {
  const t = Ms.get(e);
  if (!t || !Sx(document, t)) {
    const r = rf("", n), {
      parentNode: o
    } = r;
    Ms.set(e, o), e.removeChild(r);
  }
}
function Tx(e, n, t = {}) {
  var c, l, u;
  const r = Fa(t), o = Va(r), i = {
    ...t,
    styles: o
  };
  Ox(r, i);
  const s = Ex(n, i);
  if (s)
    return (c = i.csp) != null && c.nonce && s.nonce !== ((l = i.csp) == null ? void 0 : l.nonce) && (s.nonce = (u = i.csp) == null ? void 0 : u.nonce), s.innerHTML !== e && (s.innerHTML = e), s;
  const a = rf(e, i);
  return a.setAttribute(nf(i), n), a;
}
function of(e) {
  var n;
  return (n = e == null ? void 0 : e.getRootNode) == null ? void 0 : n.call(e);
}
function Rx(e) {
  return of(e) instanceof ShadowRoot;
}
function Ax(e) {
  return Rx(e) ? of(e) : null;
}
let Ls = {};
const qa = [], $x = (e) => {
  qa.push(e);
};
function Px(e, n) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    const t = qa.reduce((r, o) => o(r ?? "", "warning"), n);
    t && console.error(`Warning: ${t}`);
  }
}
function Ix(e, n) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    const t = qa.reduce((r, o) => o(r ?? "", "note"), n);
    t && console.warn(`Note: ${t}`);
  }
}
function Nx() {
  Ls = {};
}
function sf(e, n, t) {
  !n && !Ls[t] && (e(!1, t), Ls[t] = !0);
}
function bi(e, n) {
  sf(Px, e, n);
}
function kx(e, n) {
  sf(Ix, e, n);
}
bi.preMessage = $x;
bi.resetWarned = Nx;
bi.noteOnce = kx;
function jx(e) {
  return e.replace(/-(.)/g, (n, t) => t.toUpperCase());
}
function Mx(e, n) {
  bi(e, `[@ant-design/icons] ${n}`);
}
function Jc(e) {
  return typeof e == "object" && typeof e.name == "string" && typeof e.theme == "string" && (typeof e.icon == "object" || typeof e.icon == "function");
}
function Qc(e = {}) {
  return Object.keys(e).reduce((n, t) => {
    const r = e[t];
    switch (t) {
      case "class":
        n.className = r, delete n.class;
        break;
      default:
        delete n[t], n[jx(t)] = r;
    }
    return n;
  }, {});
}
function Ds(e, n, t) {
  return t ? /* @__PURE__ */ U.createElement(e.tag, {
    key: n,
    ...Qc(e.attrs),
    ...t
  }, (e.children || []).map((r, o) => Ds(r, `${n}-${e.tag}-${o}`))) : /* @__PURE__ */ U.createElement(e.tag, {
    key: n,
    ...Qc(e.attrs)
  }, (e.children || []).map((r, o) => Ds(r, `${n}-${e.tag}-${o}`)));
}
function af(e) {
  return yx(e)[0];
}
function cf(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
const Lx = `
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
`, Dx = (e) => {
  const {
    csp: n,
    prefixCls: t,
    layer: r
  } = Ot(Qu);
  let o = Lx;
  t && (o = o.replace(/anticon/g, t)), r && (o = `@layer ${r} {
${o}
}`), Ue(() => {
    const i = e.current, s = Ax(i);
    Tx(o, "@ant-design-icons", {
      prepend: !r,
      csp: n,
      attachTo: s
    });
  }, []);
}, Pr = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function Bx({
  primaryColor: e,
  secondaryColor: n
}) {
  Pr.primaryColor = e, Pr.secondaryColor = n || af(e), Pr.calculated = !!n;
}
function Hx() {
  return {
    ...Pr
  };
}
const cr = (e) => {
  const {
    icon: n,
    className: t,
    onClick: r,
    style: o,
    primaryColor: i,
    secondaryColor: s,
    ...a
  } = e, c = S.useRef();
  let l = Pr;
  if (i && (l = {
    primaryColor: i,
    secondaryColor: s || af(i)
  }), Dx(c), Mx(Jc(n), `icon should be icon definiton, but got ${n}`), !Jc(n))
    return null;
  let u = n;
  return u && typeof u.icon == "function" && (u = {
    ...u,
    icon: u.icon(l.primaryColor, l.secondaryColor)
  }), Ds(u.icon, `svg-${u.name}`, {
    className: t,
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
cr.displayName = "IconReact";
cr.getTwoToneColors = Hx;
cr.setTwoToneColors = Bx;
function lf(e) {
  const [n, t] = cf(e);
  return cr.setTwoToneColors({
    primaryColor: n,
    secondaryColor: t
  });
}
function zx() {
  const e = cr.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
function Bs() {
  return Bs = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, Bs.apply(this, arguments);
}
lf(js.primary);
const yi = /* @__PURE__ */ S.forwardRef((e, n) => {
  const {
    // affect outter <i>...</i>
    className: t,
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
    rootClassName: f
  } = S.useContext(Qu), h = we(f, u, {
    [`${u}-${r.name}`]: !!r.name,
    [`${u}-spin`]: !!o || r.name === "loading"
  }, t);
  let m = s;
  m === void 0 && a && (m = -1);
  const d = i ? {
    msTransform: `rotate(${i}deg)`,
    transform: `rotate(${i}deg)`
  } : void 0, [g, p] = cf(c);
  return /* @__PURE__ */ S.createElement("span", Bs({
    role: "img",
    "aria-label": r.name
  }, l, {
    ref: n,
    tabIndex: m,
    onClick: a,
    className: h
  }), /* @__PURE__ */ S.createElement(cr, {
    icon: r,
    primaryColor: g,
    secondaryColor: p,
    style: d
  }));
});
yi.displayName = "AntdIcon";
yi.getTwoToneColor = zx;
yi.setTwoToneColor = lf;
var Fx = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" }, Vx = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, qx = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, Ux = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" }, Wx = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" }, Gx = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" }, Xx = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z" } }] }, name: "reload", theme: "outlined" };
function Hs() {
  return Hs = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, Hs.apply(this, arguments);
}
const Yx = (e, n) => /* @__PURE__ */ S.createElement(yi, Hs({}, e, {
  ref: n,
  icon: Xx
})), uf = /* @__PURE__ */ S.forwardRef(Yx);
process.env.NODE_ENV !== "production" && (uf.displayName = "ReloadOutlined");
var oo = { exports: {} }, $e = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zc;
function Kx() {
  if (Zc) return $e;
  Zc = 1;
  var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), d;
  d = Symbol.for("react.module.reference");
  function g(p) {
    if (typeof p == "object" && p !== null) {
      var b = p.$$typeof;
      switch (b) {
        case e:
          switch (p = p.type, p) {
            case t:
            case o:
            case r:
            case l:
            case u:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case a:
                case s:
                case c:
                case h:
                case f:
                case i:
                  return p;
                default:
                  return b;
              }
          }
        case n:
          return b;
      }
    }
  }
  return $e.ContextConsumer = s, $e.ContextProvider = i, $e.Element = e, $e.ForwardRef = c, $e.Fragment = t, $e.Lazy = h, $e.Memo = f, $e.Portal = n, $e.Profiler = o, $e.StrictMode = r, $e.Suspense = l, $e.SuspenseList = u, $e.isAsyncMode = function() {
    return !1;
  }, $e.isConcurrentMode = function() {
    return !1;
  }, $e.isContextConsumer = function(p) {
    return g(p) === s;
  }, $e.isContextProvider = function(p) {
    return g(p) === i;
  }, $e.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, $e.isForwardRef = function(p) {
    return g(p) === c;
  }, $e.isFragment = function(p) {
    return g(p) === t;
  }, $e.isLazy = function(p) {
    return g(p) === h;
  }, $e.isMemo = function(p) {
    return g(p) === f;
  }, $e.isPortal = function(p) {
    return g(p) === n;
  }, $e.isProfiler = function(p) {
    return g(p) === o;
  }, $e.isStrictMode = function(p) {
    return g(p) === r;
  }, $e.isSuspense = function(p) {
    return g(p) === l;
  }, $e.isSuspenseList = function(p) {
    return g(p) === u;
  }, $e.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === t || p === o || p === r || p === l || p === u || p === m || typeof p == "object" && p !== null && (p.$$typeof === h || p.$$typeof === f || p.$$typeof === i || p.$$typeof === s || p.$$typeof === c || p.$$typeof === d || p.getModuleId !== void 0);
  }, $e.typeOf = g, $e;
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
var el;
function Jx() {
  return el || (el = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), d = !1, g = !1, p = !1, b = !1, y = !1, C;
    C = Symbol.for("react.module.reference");
    function O(T) {
      return !!(typeof T == "string" || typeof T == "function" || T === t || T === o || y || T === r || T === l || T === u || b || T === m || d || g || p || typeof T == "object" && T !== null && (T.$$typeof === h || T.$$typeof === f || T.$$typeof === i || T.$$typeof === s || T.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      T.$$typeof === C || T.getModuleId !== void 0));
    }
    function x(T) {
      if (typeof T == "object" && T !== null) {
        var F = T.$$typeof;
        switch (F) {
          case e:
            var $ = T.type;
            switch ($) {
              case t:
              case o:
              case r:
              case l:
              case u:
                return $;
              default:
                var G = $ && $.$$typeof;
                switch (G) {
                  case a:
                  case s:
                  case c:
                  case h:
                  case f:
                  case i:
                    return G;
                  default:
                    return F;
                }
            }
          case n:
            return F;
        }
      }
    }
    var R = s, _ = i, j = e, M = c, X = t, re = h, te = f, z = n, W = o, Z = r, N = l, A = u, P = !1, k = !1;
    function B(T) {
      return P || (P = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function H(T) {
      return k || (k = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function J(T) {
      return x(T) === s;
    }
    function ne(T) {
      return x(T) === i;
    }
    function ee(T) {
      return typeof T == "object" && T !== null && T.$$typeof === e;
    }
    function ce(T) {
      return x(T) === c;
    }
    function ue(T) {
      return x(T) === t;
    }
    function de(T) {
      return x(T) === h;
    }
    function Oe(T) {
      return x(T) === f;
    }
    function _e(T) {
      return x(T) === n;
    }
    function ke(T) {
      return x(T) === o;
    }
    function Ne(T) {
      return x(T) === r;
    }
    function pe(T) {
      return x(T) === l;
    }
    function Ze(T) {
      return x(T) === u;
    }
    Pe.ContextConsumer = R, Pe.ContextProvider = _, Pe.Element = j, Pe.ForwardRef = M, Pe.Fragment = X, Pe.Lazy = re, Pe.Memo = te, Pe.Portal = z, Pe.Profiler = W, Pe.StrictMode = Z, Pe.Suspense = N, Pe.SuspenseList = A, Pe.isAsyncMode = B, Pe.isConcurrentMode = H, Pe.isContextConsumer = J, Pe.isContextProvider = ne, Pe.isElement = ee, Pe.isForwardRef = ce, Pe.isFragment = ue, Pe.isLazy = de, Pe.isMemo = Oe, Pe.isPortal = _e, Pe.isProfiler = ke, Pe.isStrictMode = Ne, Pe.isSuspense = pe, Pe.isSuspenseList = Ze, Pe.isValidElementType = O, Pe.typeOf = x;
  }()), Pe;
}
var tl;
function Qx() {
  return tl || (tl = 1, process.env.NODE_ENV === "production" ? oo.exports = Kx() : oo.exports = Jx()), oo.exports;
}
var ts = Qx();
const Xt = /* @__PURE__ */ Object.create(null);
Xt.open = "0";
Xt.close = "1";
Xt.ping = "2";
Xt.pong = "3";
Xt.message = "4";
Xt.upgrade = "5";
Xt.noop = "6";
const So = /* @__PURE__ */ Object.create(null);
Object.keys(Xt).forEach((e) => {
  So[Xt[e]] = e;
});
const zs = { type: "error", data: "parser error" }, ff = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", df = typeof ArrayBuffer == "function", hf = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer, Ua = ({ type: e, data: n }, t, r) => ff && n instanceof Blob ? t ? r(n) : nl(n, r) : df && (n instanceof ArrayBuffer || hf(n)) ? t ? r(n) : nl(new Blob([n]), r) : r(Xt[e] + (n || "")), nl = (e, n) => {
  const t = new FileReader();
  return t.onload = function() {
    const r = t.result.split(",")[1];
    n("b" + (r || ""));
  }, t.readAsDataURL(e);
};
function rl(e) {
  return e instanceof Uint8Array ? e : e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
let ns;
function Zx(e, n) {
  if (ff && e.data instanceof Blob)
    return e.data.arrayBuffer().then(rl).then(n);
  if (df && (e.data instanceof ArrayBuffer || hf(e.data)))
    return n(rl(e.data));
  Ua(e, !1, (t) => {
    ns || (ns = new TextEncoder()), n(ns.encode(t));
  });
}
const ol = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Rr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < ol.length; e++)
  Rr[ol.charCodeAt(e)] = e;
const ep = (e) => {
  let n = e.length * 0.75, t = e.length, r, o = 0, i, s, a, c;
  e[e.length - 1] === "=" && (n--, e[e.length - 2] === "=" && n--);
  const l = new ArrayBuffer(n), u = new Uint8Array(l);
  for (r = 0; r < t; r += 4)
    i = Rr[e.charCodeAt(r)], s = Rr[e.charCodeAt(r + 1)], a = Rr[e.charCodeAt(r + 2)], c = Rr[e.charCodeAt(r + 3)], u[o++] = i << 2 | s >> 4, u[o++] = (s & 15) << 4 | a >> 2, u[o++] = (a & 3) << 6 | c & 63;
  return l;
}, tp = typeof ArrayBuffer == "function", Wa = (e, n) => {
  if (typeof e != "string")
    return {
      type: "message",
      data: xf(e, n)
    };
  const t = e.charAt(0);
  return t === "b" ? {
    type: "message",
    data: np(e.substring(1), n)
  } : So[t] ? e.length > 1 ? {
    type: So[t],
    data: e.substring(1)
  } : {
    type: So[t]
  } : zs;
}, np = (e, n) => {
  if (tp) {
    const t = ep(e);
    return xf(t, n);
  } else
    return { base64: !0, data: e };
}, xf = (e, n) => {
  switch (n) {
    case "blob":
      return e instanceof Blob ? e : new Blob([e]);
    case "arraybuffer":
    default:
      return e instanceof ArrayBuffer ? e : e.buffer;
  }
}, pf = "", rp = (e, n) => {
  const t = e.length, r = new Array(t);
  let o = 0;
  e.forEach((i, s) => {
    Ua(i, !1, (a) => {
      r[s] = a, ++o === t && n(r.join(pf));
    });
  });
}, op = (e, n) => {
  const t = e.split(pf), r = [];
  for (let o = 0; o < t.length; o++) {
    const i = Wa(t[o], n);
    if (r.push(i), i.type === "error")
      break;
  }
  return r;
};
function ip() {
  return new TransformStream({
    transform(e, n) {
      Zx(e, (t) => {
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
let rs;
function io(e) {
  return e.reduce((n, t) => n + t.length, 0);
}
function so(e, n) {
  if (e[0].length === n)
    return e.shift();
  const t = new Uint8Array(n);
  let r = 0;
  for (let o = 0; o < n; o++)
    t[o] = e[0][r++], r === e[0].length && (e.shift(), r = 0);
  return e.length && r < e[0].length && (e[0] = e[0].slice(r)), t;
}
function sp(e, n) {
  rs || (rs = new TextDecoder());
  const t = [];
  let r = 0, o = -1, i = !1;
  return new TransformStream({
    transform(s, a) {
      for (t.push(s); ; ) {
        if (r === 0) {
          if (io(t) < 1)
            break;
          const c = so(t, 1);
          i = (c[0] & 128) === 128, o = c[0] & 127, o < 126 ? r = 3 : o === 126 ? r = 1 : r = 2;
        } else if (r === 1) {
          if (io(t) < 2)
            break;
          const c = so(t, 2);
          o = new DataView(c.buffer, c.byteOffset, c.length).getUint16(0), r = 3;
        } else if (r === 2) {
          if (io(t) < 8)
            break;
          const c = so(t, 8), l = new DataView(c.buffer, c.byteOffset, c.length), u = l.getUint32(0);
          if (u > Math.pow(2, 21) - 1) {
            a.enqueue(zs);
            break;
          }
          o = u * Math.pow(2, 32) + l.getUint32(4), r = 3;
        } else {
          if (io(t) < o)
            break;
          const c = so(t, o);
          a.enqueue(Wa(i ? c : rs.decode(c), n)), r = 0;
        }
        if (o === 0 || o > e) {
          a.enqueue(zs);
          break;
        }
      }
    }
  });
}
const gf = 4;
function Qe(e) {
  if (e) return ap(e);
}
function ap(e) {
  for (var n in Qe.prototype)
    e[n] = Qe.prototype[n];
  return e;
}
Qe.prototype.on = Qe.prototype.addEventListener = function(e, n) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(n), this;
};
Qe.prototype.once = function(e, n) {
  function t() {
    this.off(e, t), n.apply(this, arguments);
  }
  return t.fn = n, this.on(e, t), this;
};
Qe.prototype.off = Qe.prototype.removeListener = Qe.prototype.removeAllListeners = Qe.prototype.removeEventListener = function(e, n) {
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
Qe.prototype.emit = function(e) {
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
Qe.prototype.emitReserved = Qe.prototype.emit;
Qe.prototype.listeners = function(e) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [];
};
Qe.prototype.hasListeners = function(e) {
  return !!this.listeners(e).length;
};
const _i = typeof Promise == "function" && typeof Promise.resolve == "function" ? (n) => Promise.resolve().then(n) : (n, t) => t(n, 0), Et = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), cp = "arraybuffer";
function mf(e, ...n) {
  return n.reduce((t, r) => (e.hasOwnProperty(r) && (t[r] = e[r]), t), {});
}
const lp = Et.setTimeout, up = Et.clearTimeout;
function Si(e, n) {
  n.useNativeTimers ? (e.setTimeoutFn = lp.bind(Et), e.clearTimeoutFn = up.bind(Et)) : (e.setTimeoutFn = Et.setTimeout.bind(Et), e.clearTimeoutFn = Et.clearTimeout.bind(Et));
}
const fp = 1.33;
function dp(e) {
  return typeof e == "string" ? hp(e) : Math.ceil((e.byteLength || e.size) * fp);
}
function hp(e) {
  let n = 0, t = 0;
  for (let r = 0, o = e.length; r < o; r++)
    n = e.charCodeAt(r), n < 128 ? t += 1 : n < 2048 ? t += 2 : n < 55296 || n >= 57344 ? t += 3 : (r++, t += 4);
  return t;
}
function vf() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function xp(e) {
  let n = "";
  for (let t in e)
    e.hasOwnProperty(t) && (n.length && (n += "&"), n += encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
  return n;
}
function pp(e) {
  let n = {}, t = e.split("&");
  for (let r = 0, o = t.length; r < o; r++) {
    let i = t[r].split("=");
    n[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
  }
  return n;
}
class gp extends Error {
  constructor(n, t, r) {
    super(n), this.description = t, this.context = r, this.type = "TransportError";
  }
}
class Ga extends Qe {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(n) {
    super(), this.writable = !1, Si(this, n), this.opts = n, this.query = n.query, this.socket = n.socket, this.supportsBinary = !n.forceBase64;
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
    return super.emitReserved("error", new gp(n, t, r)), this;
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
    const t = Wa(n, this.socket.binaryType);
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
    const t = xp(n);
    return t.length ? "?" + t : "";
  }
}
class mp extends Ga {
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
    op(n, this.socket.binaryType).forEach(t), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
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
    this.writable = !1, rp(n, (t) => {
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
    return this.opts.timestampRequests !== !1 && (t[this.opts.timestampParam] = vf()), !this.supportsBinary && !t.sid && (t.b64 = 1), this.createUri(n, t);
  }
}
let bf = !1;
try {
  bf = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const vp = bf;
function bp() {
}
class yp extends mp {
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
let Vn = class Co extends Qe {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(n, t, r) {
    super(), this.createRequest = n, Si(this, r), this._opts = r, this._method = r.method || "GET", this._uri = t, this._data = r.data !== void 0 ? r.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var n;
    const t = mf(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
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
    typeof document < "u" && (this._index = Co.requestsCount++, Co.requests[this._index] = this);
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
      if (this._xhr.onreadystatechange = bp, n)
        try {
          this._xhr.abort();
        } catch {
        }
      typeof document < "u" && delete Co.requests[this._index], this._xhr = null;
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
Vn.requestsCount = 0;
Vn.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", il);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in Et ? "pagehide" : "unload";
    addEventListener(e, il, !1);
  }
}
function il() {
  for (let e in Vn.requests)
    Vn.requests.hasOwnProperty(e) && Vn.requests[e].abort();
}
const _p = function() {
  const e = yf({
    xdomain: !1
  });
  return e && e.responseType !== null;
}();
class Sp extends yp {
  constructor(n) {
    super(n);
    const t = n && n.forceBase64;
    this.supportsBinary = _p && !t;
  }
  request(n = {}) {
    return Object.assign(n, { xd: this.xd }, this.opts), new Vn(yf, this.uri(), n);
  }
}
function yf(e) {
  const n = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!n || vp))
      return new XMLHttpRequest();
  } catch {
  }
  if (!n)
    try {
      return new Et[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const _f = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class Cp extends Ga {
  get name() {
    return "websocket";
  }
  doOpen() {
    const n = this.uri(), t = this.opts.protocols, r = _f ? {} : mf(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
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
      Ua(r, this.supportsBinary, (i) => {
        try {
          this.doWrite(r, i);
        } catch {
        }
        o && _i(() => {
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
    return this.opts.timestampRequests && (t[this.opts.timestampParam] = vf()), this.supportsBinary || (t.b64 = 1), this.createUri(n, t);
  }
}
const os = Et.WebSocket || Et.MozWebSocket;
class wp extends Cp {
  createSocket(n, t, r) {
    return _f ? new os(n, t, r) : t ? new os(n, t) : new os(n);
  }
  doWrite(n, t) {
    this.ws.send(t);
  }
}
class Ep extends Ga {
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
        const t = sp(Number.MAX_SAFE_INTEGER, this.socket.binaryType), r = n.readable.pipeThrough(t).getReader(), o = ip();
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
        o && _i(() => {
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
const Op = {
  websocket: wp,
  webtransport: Ep,
  polling: Sp
}, Tp = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, Rp = [
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
function Fs(e) {
  if (e.length > 8e3)
    throw "URI too long";
  const n = e, t = e.indexOf("["), r = e.indexOf("]");
  t != -1 && r != -1 && (e = e.substring(0, t) + e.substring(t, r).replace(/:/g, ";") + e.substring(r, e.length));
  let o = Tp.exec(e || ""), i = {}, s = 14;
  for (; s--; )
    i[Rp[s]] = o[s] || "";
  return t != -1 && r != -1 && (i.source = n, i.host = i.host.substring(1, i.host.length - 1).replace(/;/g, ":"), i.authority = i.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), i.ipv6uri = !0), i.pathNames = Ap(i, i.path), i.queryKey = $p(i, i.query), i;
}
function Ap(e, n) {
  const t = /\/{2,9}/g, r = n.replace(t, "/").split("/");
  return (n.slice(0, 1) == "/" || n.length === 0) && r.splice(0, 1), n.slice(-1) == "/" && r.splice(r.length - 1, 1), r;
}
function $p(e, n) {
  const t = {};
  return n.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(r, o, i) {
    o && (t[o] = i);
  }), t;
}
const Vs = typeof addEventListener == "function" && typeof removeEventListener == "function", wo = [];
Vs && addEventListener("offline", () => {
  wo.forEach((e) => e());
}, !1);
class mn extends Qe {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(n, t) {
    if (super(), this.binaryType = cp, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, n && typeof n == "object" && (t = n, n = null), n) {
      const r = Fs(n);
      t.hostname = r.host, t.secure = r.protocol === "https" || r.protocol === "wss", t.port = r.port, r.query && (t.query = r.query);
    } else t.host && (t.hostname = Fs(t.host).host);
    Si(this, t), this.secure = t.secure != null ? t.secure : typeof location < "u" && location.protocol === "https:", t.hostname && !t.port && (t.port = this.secure ? "443" : "80"), this.hostname = t.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = t.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, t.transports.forEach((r) => {
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
    }, t), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = pp(this.opts.query)), Vs && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, wo.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
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
    t.EIO = gf, t.transport = n, this.id && (t.sid = this.id);
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
    const n = this.opts.rememberUpgrade && mn.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
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
    this.readyState = "open", mn.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
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
      if (o && (t += dp(o)), r > 0 && t > this._maxPayload)
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
    return n && (this._pingTimeoutTime = 0, _i(() => {
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
    if (mn.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
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
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), Vs && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const r = wo.indexOf(this._offlineEventListener);
        r !== -1 && wo.splice(r, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", n, t), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
mn.protocol = gf;
class Pp extends mn {
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
    mn.priorWebsocketSuccess = !1;
    const o = () => {
      r || (t.send([{ type: "ping", data: "probe" }]), t.once("packet", (f) => {
        if (!r)
          if (f.type === "pong" && f.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", t), !t)
              return;
            mn.priorWebsocketSuccess = t.name === "websocket", this.transport.pause(() => {
              r || this.readyState !== "closed" && (u(), this.setTransport(t), t.send([{ type: "upgrade" }]), this.emitReserved("upgrade", t), t = null, this.upgrading = !1, this.flush());
            });
          } else {
            const h = new Error("probe error");
            h.transport = t.name, this.emitReserved("upgradeError", h);
          }
      }));
    };
    function i() {
      r || (r = !0, u(), t.close(), t = null);
    }
    const s = (f) => {
      const h = new Error("probe error: " + f);
      h.transport = t.name, i(), this.emitReserved("upgradeError", h);
    };
    function a() {
      s("transport closed");
    }
    function c() {
      s("socket closed");
    }
    function l(f) {
      t && f.name !== t.name && i();
    }
    const u = () => {
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
let Ip = class extends Pp {
  constructor(n, t = {}) {
    const r = typeof n == "object" ? n : t;
    (!r.transports || r.transports && typeof r.transports[0] == "string") && (r.transports = (r.transports || ["polling", "websocket", "webtransport"]).map((o) => Op[o]).filter((o) => !!o)), super(n, r);
  }
};
function Np(e, n = "", t) {
  let r = e;
  t = t || typeof location < "u" && location, e == null && (e = t.protocol + "//" + t.host), typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = t.protocol + e : e = t.host + e), /^(https?|wss?):\/\//.test(e) || (typeof t < "u" ? e = t.protocol + "//" + e : e = "https://" + e), r = Fs(e)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
  const i = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return r.id = r.protocol + "://" + i + ":" + r.port + n, r.href = r.protocol + "://" + i + (t && t.port === r.port ? "" : ":" + r.port), r;
}
const kp = typeof ArrayBuffer == "function", jp = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer, Sf = Object.prototype.toString, Mp = typeof Blob == "function" || typeof Blob < "u" && Sf.call(Blob) === "[object BlobConstructor]", Lp = typeof File == "function" || typeof File < "u" && Sf.call(File) === "[object FileConstructor]";
function Xa(e) {
  return kp && (e instanceof ArrayBuffer || jp(e)) || Mp && e instanceof Blob || Lp && e instanceof File;
}
function Eo(e, n) {
  if (!e || typeof e != "object")
    return !1;
  if (Array.isArray(e)) {
    for (let t = 0, r = e.length; t < r; t++)
      if (Eo(e[t]))
        return !0;
    return !1;
  }
  if (Xa(e))
    return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return Eo(e.toJSON(), !0);
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && Eo(e[t]))
      return !0;
  return !1;
}
function Dp(e) {
  const n = [], t = e.data, r = e;
  return r.data = qs(t, n), r.attachments = n.length, { packet: r, buffers: n };
}
function qs(e, n) {
  if (!e)
    return e;
  if (Xa(e)) {
    const t = { _placeholder: !0, num: n.length };
    return n.push(e), t;
  } else if (Array.isArray(e)) {
    const t = new Array(e.length);
    for (let r = 0; r < e.length; r++)
      t[r] = qs(e[r], n);
    return t;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const t = {};
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (t[r] = qs(e[r], n));
    return t;
  }
  return e;
}
function Bp(e, n) {
  return e.data = Us(e.data, n), delete e.attachments, e;
}
function Us(e, n) {
  if (!e)
    return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < n.length)
      return n[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let t = 0; t < e.length; t++)
      e[t] = Us(e[t], n);
  else if (typeof e == "object")
    for (const t in e)
      Object.prototype.hasOwnProperty.call(e, t) && (e[t] = Us(e[t], n));
  return e;
}
const Hp = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], zp = 5;
var me;
(function(e) {
  e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK";
})(me || (me = {}));
class Fp {
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
    return (n.type === me.EVENT || n.type === me.ACK) && Eo(n) ? this.encodeAsBinary({
      type: n.type === me.EVENT ? me.BINARY_EVENT : me.BINARY_ACK,
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
    return (n.type === me.BINARY_EVENT || n.type === me.BINARY_ACK) && (t += n.attachments + "-"), n.nsp && n.nsp !== "/" && (t += n.nsp + ","), n.id != null && (t += n.id), n.data != null && (t += JSON.stringify(n.data, this.replacer)), t;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(n) {
    const t = Dp(n), r = this.encodeAsString(t.packet), o = t.buffers;
    return o.unshift(r), o;
  }
}
function sl(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
class Ya extends Qe {
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
      const r = t.type === me.BINARY_EVENT;
      r || t.type === me.BINARY_ACK ? (t.type = r ? me.EVENT : me.ACK, this.reconstructor = new Vp(t), t.attachments === 0 && super.emitReserved("decoded", t)) : super.emitReserved("decoded", t);
    } else if (Xa(n) || n.base64)
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
    if (me[r.type] === void 0)
      throw new Error("unknown packet type " + r.type);
    if (r.type === me.BINARY_EVENT || r.type === me.BINARY_ACK) {
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
      if (Ya.isPayloadValid(r.type, i))
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
      case me.CONNECT:
        return sl(t);
      case me.DISCONNECT:
        return t === void 0;
      case me.CONNECT_ERROR:
        return typeof t == "string" || sl(t);
      case me.EVENT:
      case me.BINARY_EVENT:
        return Array.isArray(t) && (typeof t[0] == "number" || typeof t[0] == "string" && Hp.indexOf(t[0]) === -1);
      case me.ACK:
      case me.BINARY_ACK:
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
class Vp {
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
      const t = Bp(this.reconPack, this.buffers);
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
const qp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: Ya,
  Encoder: Fp,
  get PacketType() {
    return me;
  },
  protocol: zp
}, Symbol.toStringTag, { value: "Module" }));
function Pt(e, n, t) {
  return e.on(n, t), function() {
    e.off(n, t);
  };
}
const Up = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class Cf extends Qe {
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
      Pt(n, "open", this.onopen.bind(this)),
      Pt(n, "packet", this.onpacket.bind(this)),
      Pt(n, "error", this.onerror.bind(this)),
      Pt(n, "close", this.onclose.bind(this))
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
    if (Up.hasOwnProperty(n))
      throw new Error('"' + n.toString() + '" is a reserved event name');
    if (t.unshift(n), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(t), this;
    const s = {
      type: me.EVENT,
      data: t
    };
    if (s.options = {}, s.options.compress = this.flags.compress !== !1, typeof t[t.length - 1] == "function") {
      const u = this.ids++, f = t.pop();
      this._registerAckCallback(u, f), s.id = u;
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
      type: me.CONNECT,
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
        case me.CONNECT:
          n.data && n.data.sid ? this.onconnect(n.data.sid, n.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case me.EVENT:
        case me.BINARY_EVENT:
          this.onevent(n);
          break;
        case me.ACK:
        case me.BINARY_ACK:
          this.onack(n);
          break;
        case me.DISCONNECT:
          this.ondisconnect();
          break;
        case me.CONNECT_ERROR:
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
        type: me.ACK,
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
function lr(e) {
  e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0;
}
lr.prototype.duration = function() {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var n = Math.random(), t = Math.floor(n * this.jitter * e);
    e = (Math.floor(n * 10) & 1) == 0 ? e - t : e + t;
  }
  return Math.min(e, this.max) | 0;
};
lr.prototype.reset = function() {
  this.attempts = 0;
};
lr.prototype.setMin = function(e) {
  this.ms = e;
};
lr.prototype.setMax = function(e) {
  this.max = e;
};
lr.prototype.setJitter = function(e) {
  this.jitter = e;
};
class Ws extends Qe {
  constructor(n, t) {
    var r;
    super(), this.nsps = {}, this.subs = [], n && typeof n == "object" && (t = n, n = void 0), t = t || {}, t.path = t.path || "/socket.io", this.opts = t, Si(this, t), this.reconnection(t.reconnection !== !1), this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0), this.reconnectionDelay(t.reconnectionDelay || 1e3), this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3), this.randomizationFactor((r = t.randomizationFactor) !== null && r !== void 0 ? r : 0.5), this.backoff = new lr({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(t.timeout == null ? 2e4 : t.timeout), this._readyState = "closed", this.uri = n;
    const o = t.parser || qp;
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
    this.engine = new Ip(this.uri, this.opts);
    const t = this.engine, r = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const o = Pt(t, "open", function() {
      r.onopen(), n && n();
    }), i = (a) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", a), n ? n(a) : this.maybeReconnectOnOpen();
    }, s = Pt(t, "error", i);
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
      Pt(n, "ping", this.onping.bind(this)),
      Pt(n, "data", this.ondata.bind(this)),
      Pt(n, "error", this.onerror.bind(this)),
      Pt(n, "close", this.onclose.bind(this)),
      // @ts-ignore
      Pt(this.decoder, "decoded", this.ondecoded.bind(this))
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
    _i(() => {
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
    return r ? this._autoConnect && !r.active && r.connect() : (r = new Cf(this, n, t), this.nsps[n] = r), r;
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
const yr = {};
function Oo(e, n) {
  typeof e == "object" && (n = e, e = void 0), n = n || {};
  const t = Np(e, n.path || "/socket.io"), r = t.source, o = t.id, i = t.path, s = yr[o] && i in yr[o].nsps, a = n.forceNew || n["force new connection"] || n.multiplex === !1 || s;
  let c;
  return a ? c = new Ws(r, n) : (yr[o] || (yr[o] = new Ws(r, n)), c = yr[o]), t.query && !n.query && (n.query = t.queryKey), c.socket(t.path, n);
}
Object.assign(Oo, {
  Manager: Ws,
  Socket: Cf,
  io: Oo,
  connect: Oo
});
function gt() {
  return gt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, gt.apply(null, arguments);
}
function Ee(e) {
  "@babel/helpers - typeof";
  return Ee = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Ee(e);
}
var Wp = Symbol.for("react.element"), Gp = Symbol.for("react.transitional.element"), Xp = Symbol.for("react.fragment");
function Yp(e) {
  return (
    // Base object type
    e && Ee(e) === "object" && // React Element type
    (e.$$typeof === Wp || e.$$typeof === Gp) && // React Fragment type
    e.type === Xp
  );
}
var Gs = {}, Ka = [], Kp = function(n) {
  Ka.push(n);
};
function Ja(e, n) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var t = Ka.reduce(function(r, o) {
      return o(r ?? "", "warning");
    }, n);
    t && console.error("Warning: ".concat(t));
  }
}
function Jp(e, n) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var t = Ka.reduce(function(r, o) {
      return o(r ?? "", "note");
    }, n);
    t && console.warn("Note: ".concat(t));
  }
}
function wf() {
  Gs = {};
}
function Ef(e, n, t) {
  !n && !Gs[t] && (e(!1, t), Gs[t] = !0);
}
function yn(e, n) {
  Ef(Ja, e, n);
}
function Qp(e, n) {
  Ef(Jp, e, n);
}
yn.preMessage = Kp;
yn.resetWarned = wf;
yn.noteOnce = Qp;
function Zp(e, n) {
  if (Ee(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(e, n);
    if (Ee(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function Of(e) {
  var n = Zp(e, "string");
  return Ee(n) == "symbol" ? n : n + "";
}
function K(e, n, t) {
  return (n = Of(n)) in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = t, e;
}
function al(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Q(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? al(Object(t), !0).forEach(function(r) {
      K(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : al(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function cl(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function e1(e) {
  return e && Ee(e) === "object" && cl(e.nativeElement) ? e.nativeElement : cl(e) ? e : null;
}
function t1(e) {
  var n = e1(e);
  if (n)
    return n;
  if (e instanceof U.Component) {
    var t;
    return (t = yc.findDOMNode) === null || t === void 0 ? void 0 : t.call(yc, e);
  }
  return null;
}
function Qa(e, n, t) {
  var r = S.useRef({});
  return (!("value" in r.current) || t(r.current.condition, n)) && (r.current.value = e(), r.current.condition = n), r.current.value;
}
var n1 = Number(Kd.split(".")[0]), Tf = function(n, t) {
  typeof n == "function" ? n(t) : Ee(n) === "object" && n && "current" in n && (n.current = t);
}, Ci = function() {
  for (var n = arguments.length, t = new Array(n), r = 0; r < n; r++)
    t[r] = arguments[r];
  var o = t.filter(Boolean);
  return o.length <= 1 ? o[0] : function(i) {
    t.forEach(function(s) {
      Tf(s, i);
    });
  };
}, r1 = function() {
  for (var n = arguments.length, t = new Array(n), r = 0; r < n; r++)
    t[r] = arguments[r];
  return Qa(function() {
    return Ci.apply(void 0, t);
  }, t, function(o, i) {
    return o.length !== i.length || o.every(function(s, a) {
      return s !== i[a];
    });
  });
}, Rf = function(n) {
  var t, r;
  if (!n)
    return !1;
  if (Af(n) && n1 >= 19)
    return !0;
  var o = ts.isMemo(n) ? n.type.type : n.type;
  return !(typeof o == "function" && !((t = o.prototype) !== null && t !== void 0 && t.render) && o.$$typeof !== ts.ForwardRef || typeof n == "function" && !((r = n.prototype) !== null && r !== void 0 && r.render) && n.$$typeof !== ts.ForwardRef);
};
function Af(e) {
  return /* @__PURE__ */ Yd(e) && !Yp(e);
}
var $f = function(n) {
  if (n && Af(n)) {
    var t = n;
    return t.props.propertyIsEnumerable("ref") ? t.props.ref : t.ref;
  }
  return null;
};
function yt(e, n) {
  if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function ll(e, n) {
  for (var t = 0; t < n.length; t++) {
    var r = n[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Of(r.key), r);
  }
}
function _t(e, n, t) {
  return n && ll(e.prototype, n), t && ll(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Xs(e, n) {
  return Xs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, r) {
    return t.__proto__ = r, t;
  }, Xs(e, n);
}
function ur(e, n) {
  if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(n && n.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), n && Xs(e, n);
}
function Qn(e) {
  return Qn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Qn(e);
}
function Za() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Za = function() {
    return !!e;
  })();
}
function Pn(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Pf(e, n) {
  if (n && (Ee(n) == "object" || typeof n == "function")) return n;
  if (n !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Pn(e);
}
function qr(e) {
  var n = Za();
  return function() {
    var t, r = Qn(e);
    if (n) {
      var o = Qn(this).constructor;
      t = Reflect.construct(r, arguments, o);
    } else t = r.apply(this, arguments);
    return Pf(this, t);
  };
}
function Ys(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, r = Array(n); t < n; t++) r[t] = e[t];
  return r;
}
function o1(e) {
  if (Array.isArray(e)) return Ys(e);
}
function If(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function ec(e, n) {
  if (e) {
    if (typeof e == "string") return Ys(e, n);
    var t = {}.toString.call(e).slice(8, -1);
    return t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set" ? Array.from(e) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Ys(e, n) : void 0;
  }
}
function i1() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Yt(e) {
  return o1(e) || If(e) || ec(e) || i1();
}
var Nf = function(n) {
  return +setTimeout(n, 16);
}, kf = function(n) {
  return clearTimeout(n);
};
typeof window < "u" && "requestAnimationFrame" in window && (Nf = function(n) {
  return window.requestAnimationFrame(n);
}, kf = function(n) {
  return window.cancelAnimationFrame(n);
});
var ul = 0, wi = /* @__PURE__ */ new Map();
function jf(e) {
  wi.delete(e);
}
var vn = function(n) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  ul += 1;
  var r = ul;
  function o(i) {
    if (i === 0)
      jf(r), n();
    else {
      var s = Nf(function() {
        o(i - 1);
      });
      wi.set(r, s);
    }
  }
  return o(t), r;
};
vn.cancel = function(e) {
  var n = wi.get(e);
  return jf(e), kf(n);
};
process.env.NODE_ENV !== "production" && (vn.ids = function() {
  return wi;
});
function Mf(e) {
  if (Array.isArray(e)) return e;
}
function s1(e, n) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var r, o, i, s, a = [], c = !0, l = !1;
    try {
      if (i = (t = t.call(e)).next, n === 0) {
        if (Object(t) !== t) return;
        c = !1;
      } else for (; !(c = (r = i.call(t)).done) && (a.push(r.value), a.length !== n); c = !0) ;
    } catch (u) {
      l = !0, o = u;
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
function Lf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ae(e, n) {
  return Mf(e) || s1(e, n) || ec(e, n) || Lf();
}
function Mr(e) {
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
function un() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function a1(e, n) {
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
var fl = "data-rc-order", dl = "data-rc-priority", c1 = "rc-util-key", Ks = /* @__PURE__ */ new Map();
function Df() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.mark;
  return n ? n.startsWith("data-") ? n : "data-".concat(n) : c1;
}
function Ei(e) {
  if (e.attachTo)
    return e.attachTo;
  var n = document.querySelector("head");
  return n || document.body;
}
function l1(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function tc(e) {
  return Array.from((Ks.get(e) || e).children).filter(function(n) {
    return n.tagName === "STYLE";
  });
}
function Bf(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!un())
    return null;
  var t = n.csp, r = n.prepend, o = n.priority, i = o === void 0 ? 0 : o, s = l1(r), a = s === "prependQueue", c = document.createElement("style");
  c.setAttribute(fl, s), a && i && c.setAttribute(dl, "".concat(i)), t != null && t.nonce && (c.nonce = t == null ? void 0 : t.nonce), c.innerHTML = e;
  var l = Ei(n), u = l.firstChild;
  if (r) {
    if (a) {
      var f = (n.styles || tc(l)).filter(function(h) {
        if (!["prepend", "prependQueue"].includes(h.getAttribute(fl)))
          return !1;
        var m = Number(h.getAttribute(dl) || 0);
        return i >= m;
      });
      if (f.length)
        return l.insertBefore(c, f[f.length - 1].nextSibling), c;
    }
    l.insertBefore(c, u);
  } else
    l.appendChild(c);
  return c;
}
function Hf(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = Ei(n);
  return (n.styles || tc(t)).find(function(r) {
    return r.getAttribute(Df(n)) === e;
  });
}
function zf(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = Hf(e, n);
  if (t) {
    var r = Ei(n);
    r.removeChild(t);
  }
}
function u1(e, n) {
  var t = Ks.get(e);
  if (!t || !a1(document, t)) {
    var r = Bf("", n), o = r.parentNode;
    Ks.set(e, o), e.removeChild(r);
  }
}
function In(e, n) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Ei(t), o = tc(r), i = Q(Q({}, t), {}, {
    styles: o
  });
  u1(r, i);
  var s = Hf(n, i);
  if (s) {
    var a, c;
    if ((a = i.csp) !== null && a !== void 0 && a.nonce && s.nonce !== ((c = i.csp) === null || c === void 0 ? void 0 : c.nonce)) {
      var l;
      s.nonce = (l = i.csp) === null || l === void 0 ? void 0 : l.nonce;
    }
    return s.innerHTML !== e && (s.innerHTML = e), s;
  }
  var u = Bf(e, i);
  return u.setAttribute(Df(i), n), u;
}
function f1(e, n) {
  if (e == null) return {};
  var t = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (n.indexOf(r) !== -1) continue;
    t[r] = e[r];
  }
  return t;
}
function Mn(e, n) {
  if (e == null) return {};
  var t, r, o = f1(e, n);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++) t = i[r], n.indexOf(t) === -1 && {}.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
  }
  return o;
}
function d1(e, n) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = /* @__PURE__ */ new Set();
  function o(i, s) {
    var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, c = r.has(i);
    if (yn(!c, "Warning: There may be circular references"), c)
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
      for (var u = 0; u < i.length; u++)
        if (!o(i[u], s[u], l))
          return !1;
      return !0;
    }
    if (i && s && Ee(i) === "object" && Ee(s) === "object") {
      var f = Object.keys(i);
      return f.length !== Object.keys(s).length ? !1 : f.every(function(h) {
        return o(i[h], s[h], l);
      });
    }
    return !1;
  }
  return o(e, n);
}
var h1 = "%";
function Js(e) {
  return e.join(h1);
}
var x1 = /* @__PURE__ */ function() {
  function e(n) {
    yt(this, e), K(this, "instanceId", void 0), K(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = n;
  }
  return _t(e, [{
    key: "get",
    value: function(t) {
      return this.opGet(Js(t));
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
      return this.opUpdate(Js(t), r);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(t, r) {
      var o = this.cache.get(t), i = r(o);
      i === null ? this.cache.delete(t) : this.cache.set(t, i);
    }
  }]), e;
}(), Zn = "data-token-hash", jt = "data-css-hash", p1 = "data-cache-path", pn = "__cssinjs_instance__";
function g1() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var n = document.body.querySelectorAll("style[".concat(jt, "]")) || [], t = document.head.firstChild;
    Array.from(n).forEach(function(o) {
      o[pn] = o[pn] || e, o[pn] === e && document.head.insertBefore(o, t);
    });
    var r = {};
    Array.from(document.querySelectorAll("style[".concat(jt, "]"))).forEach(function(o) {
      var i = o.getAttribute(jt);
      if (r[i]) {
        if (o[pn] === e) {
          var s;
          (s = o.parentNode) === null || s === void 0 || s.removeChild(o);
        }
      } else
        r[i] = !0;
    });
  }
  return new x1(e);
}
var Ur = /* @__PURE__ */ S.createContext({
  hashPriority: "low",
  cache: g1(),
  defaultCache: !0
});
function m1(e, n) {
  if (e.length !== n.length)
    return !1;
  for (var t = 0; t < e.length; t++)
    if (e[t] !== n[t])
      return !1;
  return !0;
}
var nc = /* @__PURE__ */ function() {
  function e() {
    yt(this, e), K(this, "cache", void 0), K(this, "keys", void 0), K(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return _t(e, [{
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
          var i = this.keys.reduce(function(l, u) {
            var f = ae(l, 2), h = f[1];
            return o.internalGet(u)[1] < h ? [u, o.internalGet(u)[1]] : l;
          }, [this.keys[0], this.cacheCallTimes]), s = ae(i, 1), a = s[0];
          this.delete(a);
        }
        this.keys.push(t);
      }
      var c = this.cache;
      t.forEach(function(l, u) {
        if (u === t.length - 1)
          c.set(l, {
            value: [r, o.cacheCallTimes++]
          });
        else {
          var f = c.get(l);
          f ? f.map || (f.map = /* @__PURE__ */ new Map()) : c.set(l, {
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
          return !m1(r, t);
        }), this.deleteByPath(this.cache, t);
    }
  }]), e;
}();
K(nc, "MAX_CACHE_SIZE", 20);
K(nc, "MAX_CACHE_OFFSET", 5);
var hl = 0, Ff = /* @__PURE__ */ function() {
  function e(n) {
    yt(this, e), K(this, "derivatives", void 0), K(this, "id", void 0), this.derivatives = Array.isArray(n) ? n : [n], this.id = hl, n.length === 0 && Ja(n.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), hl += 1;
  }
  return _t(e, [{
    key: "getDerivativeToken",
    value: function(t) {
      return this.derivatives.reduce(function(r, o) {
        return o(t, r);
      }, void 0);
    }
  }]), e;
}(), is = new nc();
function Qs(e) {
  var n = Array.isArray(e) ? e : [e];
  return is.has(n) || is.set(n, new Ff(n)), is.get(n);
}
var v1 = /* @__PURE__ */ new WeakMap(), ss = {};
function b1(e, n) {
  for (var t = v1, r = 0; r < n.length; r += 1) {
    var o = n[r];
    t.has(o) || t.set(o, /* @__PURE__ */ new WeakMap()), t = t.get(o);
  }
  return t.has(ss) || t.set(ss, e()), t.get(ss);
}
var xl = /* @__PURE__ */ new WeakMap();
function Ir(e) {
  var n = xl.get(e) || "";
  return n || (Object.keys(e).forEach(function(t) {
    var r = e[t];
    n += t, r instanceof Ff ? n += r.id : r && Ee(r) === "object" ? n += Ir(r) : n += r;
  }), n = Mr(n), xl.set(e, n)), n;
}
function pl(e, n) {
  return Mr("".concat(n, "_").concat(Ir(e)));
}
var Zs = un();
function cn(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function qo(e, n, t) {
  var r, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (i)
    return e;
  var s = Q(Q({}, o), {}, (r = {}, K(r, Zn, n), K(r, jt, t), r)), a = Object.keys(s).map(function(c) {
    var l = s[c];
    return l ? "".concat(c, '="').concat(l, '"') : null;
  }).filter(function(c) {
    return c;
  }).join(" ");
  return "<style ".concat(a, ">").concat(e, "</style>");
}
var To = function(n) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(t ? "".concat(t, "-") : "").concat(n).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, y1 = function(n, t, r) {
  return Object.keys(n).length ? ".".concat(t).concat(r != null && r.scope ? ".".concat(r.scope) : "", "{").concat(Object.entries(n).map(function(o) {
    var i = ae(o, 2), s = i[0], a = i[1];
    return "".concat(s, ":").concat(a, ";");
  }).join(""), "}") : "";
}, Vf = function(n, t, r) {
  var o = {}, i = {};
  return Object.entries(n).forEach(function(s) {
    var a, c, l = ae(s, 2), u = l[0], f = l[1];
    if (r != null && (a = r.preserve) !== null && a !== void 0 && a[u])
      i[u] = f;
    else if ((typeof f == "string" || typeof f == "number") && !(r != null && (c = r.ignore) !== null && c !== void 0 && c[u])) {
      var h, m = To(u, r == null ? void 0 : r.prefix);
      o[m] = typeof f == "number" && !(r != null && (h = r.unitless) !== null && h !== void 0 && h[u]) ? "".concat(f, "px") : String(f), i[u] = "var(".concat(m, ")");
    }
  }), [i, y1(o, t, {
    scope: r == null ? void 0 : r.scope
  })];
}, gl = process.env.NODE_ENV !== "test" && un() ? S.useLayoutEffect : S.useEffect, rc = function(n, t) {
  var r = S.useRef(!0);
  gl(function() {
    return n(r.current);
  }, t), gl(function() {
    return r.current = !1, function() {
      r.current = !0;
    };
  }, []);
}, ml = function(n, t) {
  rc(function(r) {
    if (!r)
      return n();
  }, t);
}, _1 = Q({}, S), vl = _1.useInsertionEffect, S1 = function(n, t, r) {
  S.useMemo(n, r), rc(function() {
    return t(!0);
  }, r);
}, C1 = vl ? function(e, n, t) {
  return vl(function() {
    return e(), n();
  }, t);
} : S1, w1 = Q({}, S), E1 = w1.useInsertionEffect, O1 = function(n) {
  var t = [], r = !1;
  function o(i) {
    if (r) {
      process.env.NODE_ENV !== "production" && Ja(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    t.push(i);
  }
  return S.useEffect(function() {
    return r = !1, function() {
      r = !0, t.length && t.forEach(function(i) {
        return i();
      });
    };
  }, n), o;
}, T1 = function() {
  return function(n) {
    n();
  };
}, R1 = typeof E1 < "u" ? O1 : T1;
function A1() {
  return !1;
}
var ea = !1;
function $1() {
  return ea;
}
const P1 = process.env.NODE_ENV === "production" ? A1 : $1;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var ao = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : null;
  if (ao && typeof ao.webpackHotUpdate == "function") {
    var I1 = ao.webpackHotUpdate;
    ao.webpackHotUpdate = function() {
      return ea = !0, setTimeout(function() {
        ea = !1;
      }, 0), I1.apply(void 0, arguments);
    };
  }
}
function oc(e, n, t, r, o) {
  var i = S.useContext(Ur), s = i.cache, a = [e].concat(Yt(n)), c = Js(a), l = R1([c]), u = P1(), f = function(g) {
    s.opUpdate(c, function(p) {
      var b = p || [void 0, void 0], y = ae(b, 2), C = y[0], O = C === void 0 ? 0 : C, x = y[1], R = x;
      process.env.NODE_ENV !== "production" && x && u && (r == null || r(R, u), R = null);
      var _ = R || t(), j = [O, _];
      return g ? g(j) : j;
    });
  };
  S.useMemo(
    function() {
      f();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [c]
    /* eslint-enable */
  );
  var h = s.opGet(c);
  process.env.NODE_ENV !== "production" && !h && (f(), h = s.opGet(c));
  var m = h[1];
  return C1(function() {
    o == null || o(m);
  }, function(d) {
    return f(function(g) {
      var p = ae(g, 2), b = p[0], y = p[1];
      return d && b === 0 && (o == null || o(m)), [b + 1, y];
    }), function() {
      s.opUpdate(c, function(g) {
        var p = g || [], b = ae(p, 2), y = b[0], C = y === void 0 ? 0 : y, O = b[1], x = C - 1;
        return x === 0 ? (l(function() {
          (d || !s.opGet(c)) && (r == null || r(O, !1));
        }), null) : [C - 1, O];
      });
    };
  }, [c]), m;
}
var N1 = {}, k1 = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", On = /* @__PURE__ */ new Map();
function j1(e) {
  On.set(e, (On.get(e) || 0) + 1);
}
function M1(e, n) {
  if (typeof document < "u") {
    var t = document.querySelectorAll("style[".concat(Zn, '="').concat(e, '"]'));
    t.forEach(function(r) {
      if (r[pn] === n) {
        var o;
        (o = r.parentNode) === null || o === void 0 || o.removeChild(r);
      }
    });
  }
}
var L1 = 0;
function D1(e, n) {
  On.set(e, (On.get(e) || 0) - 1);
  var t = Array.from(On.keys()), r = t.filter(function(o) {
    var i = On.get(o) || 0;
    return i <= 0;
  });
  t.length - r.length > L1 && r.forEach(function(o) {
    M1(o, n), On.delete(o);
  });
}
var B1 = function(n, t, r, o) {
  var i = r.getDerivativeToken(n), s = Q(Q({}, i), t);
  return o && (s = o(s)), s;
}, qf = "token";
function H1(e, n) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Ot(Ur), o = r.cache.instanceId, i = r.container, s = t.salt, a = s === void 0 ? "" : s, c = t.override, l = c === void 0 ? N1 : c, u = t.formatToken, f = t.getComputedToken, h = t.cssVar, m = b1(function() {
    return Object.assign.apply(Object, [{}].concat(Yt(n)));
  }, n), d = Ir(m), g = Ir(l), p = h ? Ir(h) : "", b = oc(qf, [a, e.id, d, g, p], function() {
    var y, C = f ? f(m, l, e) : B1(m, l, e, u), O = Q({}, C), x = "";
    if (h) {
      var R = Vf(C, h.key, {
        prefix: h.prefix,
        ignore: h.ignore,
        unitless: h.unitless,
        preserve: h.preserve
      }), _ = ae(R, 2);
      C = _[0], x = _[1];
    }
    var j = pl(C, a);
    C._tokenKey = j, O._tokenKey = pl(O, a);
    var M = (y = h == null ? void 0 : h.key) !== null && y !== void 0 ? y : j;
    C._themeKey = M, j1(M);
    var X = "".concat(k1, "-").concat(Mr(j));
    return C._hashId = X, [C, X, O, x, (h == null ? void 0 : h.key) || ""];
  }, function(y) {
    D1(y[0]._themeKey, o);
  }, function(y) {
    var C = ae(y, 4), O = C[0], x = C[3];
    if (h && x) {
      var R = In(x, Mr("css-variables-".concat(O._themeKey)), {
        mark: jt,
        prepend: "queue",
        attachTo: i,
        priority: -999
      });
      R[pn] = o, R.setAttribute(Zn, O._themeKey);
    }
  });
  return b;
}
var z1 = function(n, t, r) {
  var o = ae(n, 5), i = o[2], s = o[3], a = o[4], c = r || {}, l = c.plain;
  if (!s)
    return null;
  var u = i._tokenKey, f = -999, h = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(f)
  }, m = qo(s, a, u, h, l);
  return [f, u, m];
}, F1 = {
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
}, Uf = "comm", Wf = "rule", Gf = "decl", V1 = "@import", q1 = "@namespace", U1 = "@keyframes", W1 = "@layer", Xf = Math.abs, ic = String.fromCharCode;
function Yf(e) {
  return e.trim();
}
function Ro(e, n, t) {
  return e.replace(n, t);
}
function G1(e, n, t) {
  return e.indexOf(n, t);
}
function qn(e, n) {
  return e.charCodeAt(n) | 0;
}
function er(e, n, t) {
  return e.slice(n, t);
}
function Wt(e) {
  return e.length;
}
function X1(e) {
  return e.length;
}
function co(e, n) {
  return n.push(e), e;
}
var Oi = 1, tr = 1, Kf = 0, Rt = 0, Je = 0, fr = "";
function sc(e, n, t, r, o, i, s, a) {
  return { value: e, root: n, parent: t, type: r, props: o, children: i, line: Oi, column: tr, length: s, return: "", siblings: a };
}
function Y1() {
  return Je;
}
function K1() {
  return Je = Rt > 0 ? qn(fr, --Rt) : 0, tr--, Je === 10 && (tr = 1, Oi--), Je;
}
function Mt() {
  return Je = Rt < Kf ? qn(fr, Rt++) : 0, tr++, Je === 10 && (tr = 1, Oi++), Je;
}
function gn() {
  return qn(fr, Rt);
}
function Ao() {
  return Rt;
}
function Ti(e, n) {
  return er(fr, e, n);
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
function J1(e) {
  return Oi = tr = 1, Kf = Wt(fr = e), Rt = 0, [];
}
function Q1(e) {
  return fr = "", e;
}
function as(e) {
  return Yf(Ti(Rt - 1, ta(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Z1(e) {
  for (; (Je = gn()) && Je < 33; )
    Mt();
  return Lr(e) > 2 || Lr(Je) > 3 ? "" : " ";
}
function eg(e, n) {
  for (; --n && Mt() && !(Je < 48 || Je > 102 || Je > 57 && Je < 65 || Je > 70 && Je < 97); )
    ;
  return Ti(e, Ao() + (n < 6 && gn() == 32 && Mt() == 32));
}
function ta(e) {
  for (; Mt(); )
    switch (Je) {
      // ] ) " '
      case e:
        return Rt;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && ta(Je);
        break;
      // (
      case 40:
        e === 41 && ta(e);
        break;
      // \
      case 92:
        Mt();
        break;
    }
  return Rt;
}
function tg(e, n) {
  for (; Mt() && e + Je !== 57; )
    if (e + Je === 84 && gn() === 47)
      break;
  return "/*" + Ti(n, Rt - 1) + "*" + ic(e === 47 ? e : Mt());
}
function ng(e) {
  for (; !Lr(gn()); )
    Mt();
  return Ti(e, Rt);
}
function rg(e) {
  return Q1($o("", null, null, null, [""], e = J1(e), 0, [0], e));
}
function $o(e, n, t, r, o, i, s, a, c) {
  for (var l = 0, u = 0, f = s, h = 0, m = 0, d = 0, g = 1, p = 1, b = 1, y = 0, C = "", O = o, x = i, R = r, _ = C; p; )
    switch (d = y, y = Mt()) {
      // (
      case 40:
        if (d != 108 && qn(_, f - 1) == 58) {
          G1(_ += Ro(as(y), "&", "&\f"), "&\f", Xf(l ? a[l - 1] : 0)) != -1 && (b = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        _ += as(y);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        _ += Z1(d);
        break;
      // \
      case 92:
        _ += eg(Ao() - 1, 7);
        continue;
      // /
      case 47:
        switch (gn()) {
          case 42:
          case 47:
            co(og(tg(Mt(), Ao()), n, t, c), c), (Lr(d || 1) == 5 || Lr(gn() || 1) == 5) && Wt(_) && er(_, -1, void 0) !== " " && (_ += " ");
            break;
          default:
            _ += "/";
        }
        break;
      // {
      case 123 * g:
        a[l++] = Wt(_) * b;
      // } ; \0
      case 125 * g:
      case 59:
      case 0:
        switch (y) {
          // \0 }
          case 0:
          case 125:
            p = 0;
          // ;
          case 59 + u:
            b == -1 && (_ = Ro(_, /\f/g, "")), m > 0 && (Wt(_) - f || g === 0 && d === 47) && co(m > 32 ? yl(_ + ";", r, t, f - 1, c) : yl(Ro(_, " ", "") + ";", r, t, f - 2, c), c);
            break;
          // @ ;
          case 59:
            _ += ";";
          // { rule/at-rule
          default:
            if (co(R = bl(_, n, t, l, u, o, a, C, O = [], x = [], f, i), i), y === 123)
              if (u === 0)
                $o(_, n, R, R, O, i, f, a, x);
              else {
                switch (h) {
                  // c(ontainer)
                  case 99:
                    if (qn(_, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (qn(_, 2) === 97) break;
                  default:
                    u = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                u ? $o(e, R, R, r && co(bl(e, R, R, 0, 0, o, a, C, o, O = [], f, x), x), o, x, f, a, r ? O : x) : $o(_, R, R, R, [""], x, 0, a, x);
              }
        }
        l = u = m = 0, g = b = 1, C = _ = "", f = s;
        break;
      // :
      case 58:
        f = 1 + Wt(_), m = d;
      default:
        if (g < 1) {
          if (y == 123)
            --g;
          else if (y == 125 && g++ == 0 && K1() == 125)
            continue;
        }
        switch (_ += ic(y), y * g) {
          // &
          case 38:
            b = u > 0 ? 1 : (_ += "\f", -1);
            break;
          // ,
          case 44:
            a[l++] = (Wt(_) - 1) * b, b = 1;
            break;
          // @
          case 64:
            gn() === 45 && (_ += as(Mt())), h = gn(), u = f = Wt(C = _ += ng(Ao())), y++;
            break;
          // -
          case 45:
            d === 45 && Wt(_) == 2 && (g = 0);
        }
    }
  return i;
}
function bl(e, n, t, r, o, i, s, a, c, l, u, f) {
  for (var h = o - 1, m = o === 0 ? i : [""], d = X1(m), g = 0, p = 0, b = 0; g < r; ++g)
    for (var y = 0, C = er(e, h + 1, h = Xf(p = s[g])), O = e; y < d; ++y)
      (O = Yf(p > 0 ? m[y] + " " + C : Ro(C, /&\f/g, m[y]))) && (c[b++] = O);
  return sc(e, n, t, o === 0 ? Wf : a, c, l, u, f);
}
function og(e, n, t, r) {
  return sc(e, n, t, Uf, ic(Y1()), er(e, 2, -2), 0, r);
}
function yl(e, n, t, r, o) {
  return sc(e, n, t, Gf, er(e, 0, r), er(e, r + 1, -1), r, o);
}
function na(e, n) {
  for (var t = "", r = 0; r < e.length; r++)
    t += n(e[r], r, e, n) || "";
  return t;
}
function ig(e, n, t, r) {
  switch (e.type) {
    case W1:
      if (e.children.length) break;
    case V1:
    case q1:
    case Gf:
      return e.return = e.return || e.value;
    case Uf:
      return "";
    case U1:
      return e.return = e.value + "{" + na(e.children, r) + "}";
    case Wf:
      if (!Wt(e.value = e.props.join(","))) return "";
  }
  return Wt(t = na(e.children, r)) ? e.return = e.value + "{" + t + "}" : "";
}
function Jf(e, n) {
  var t = n.path, r = n.parentSelectors;
  yn(!1, "[Ant Design CSS-in-JS] ".concat(t ? "Error in ".concat(t, ": ") : "").concat(e).concat(r.length ? " Selector: ".concat(r.join(" | ")) : ""));
}
var sg = function(n, t, r) {
  if (n === "content") {
    var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, i = ["normal", "none", "initial", "inherit", "unset"];
    (typeof t != "string" || i.indexOf(t) === -1 && !o.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")) && Jf("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(t, "\"'`."), r);
  }
}, ag = function(n, t, r) {
  n === "animation" && r.hashId && t !== "none" && Jf("You seem to be using hashed animation '".concat(t, "', in which case 'animationName' with Keyframe as value is recommended."), r);
}, _l = "data-ant-cssinjs-cache-path", Qf = "_FILE_STYLE__", Nn, Zf = !0;
function cg() {
  if (!Nn && (Nn = {}, un())) {
    var e = document.createElement("div");
    e.className = _l, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var n = getComputedStyle(e).content || "";
    n = n.replace(/^"/, "").replace(/"$/, ""), n.split(";").forEach(function(o) {
      var i = o.split(":"), s = ae(i, 2), a = s[0], c = s[1];
      Nn[a] = c;
    });
    var t = document.querySelector("style[".concat(_l, "]"));
    if (t) {
      var r;
      Zf = !1, (r = t.parentNode) === null || r === void 0 || r.removeChild(t);
    }
    document.body.removeChild(e);
  }
}
function lg(e) {
  return cg(), !!Nn[e];
}
function ug(e) {
  var n = Nn[e], t = null;
  if (n && un())
    if (Zf)
      t = Qf;
    else {
      var r = document.querySelector("style[".concat(jt, '="').concat(Nn[e], '"]'));
      r ? t = r.innerHTML : delete Nn[e];
    }
  return [t, n];
}
var e0 = "_skip_check_", t0 = "_multi_value_";
function Po(e) {
  var n = na(rg(e), ig);
  return n.replace(/\{%%%\:[^;];}/g, ";");
}
function fg(e) {
  return Ee(e) === "object" && e && (e0 in e || t0 in e);
}
function Sl(e, n, t) {
  if (!n)
    return e;
  var r = ".".concat(n), o = t === "low" ? ":where(".concat(r, ")") : r, i = e.split(",").map(function(s) {
    var a, c = s.trim().split(/\s+/), l = c[0] || "", u = ((a = l.match(/^\w+/)) === null || a === void 0 ? void 0 : a[0]) || "";
    return l = "".concat(u).concat(o).concat(l.slice(u.length)), [l].concat(Yt(c.slice(1))).join(" ");
  });
  return i.join(",");
}
var dg = function e(n) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = r.root, i = r.injectHash, s = r.parentSelectors, a = t.hashId, c = t.layer, l = t.path, u = t.hashPriority, f = t.transformers, h = f === void 0 ? [] : f, m = t.linters, d = m === void 0 ? [] : m, g = "", p = {};
  function b(O) {
    var x = O.getName(a);
    if (!p[x]) {
      var R = e(O.style, t, {
        root: !1,
        parentSelectors: s
      }), _ = ae(R, 1), j = _[0];
      p[x] = "@keyframes ".concat(O.getName(a)).concat(j);
    }
  }
  function y(O) {
    var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return O.forEach(function(R) {
      Array.isArray(R) ? y(R, x) : R && x.push(R);
    }), x;
  }
  var C = y(Array.isArray(n) ? n : [n]);
  return C.forEach(function(O) {
    var x = typeof O == "string" && !o ? {} : O;
    if (typeof x == "string")
      g += "".concat(x, `
`);
    else if (x._keyframe)
      b(x);
    else {
      var R = h.reduce(function(_, j) {
        var M;
        return (j == null || (M = j.visit) === null || M === void 0 ? void 0 : M.call(j, _)) || _;
      }, x);
      Object.keys(R).forEach(function(_) {
        var j = R[_];
        if (Ee(j) === "object" && j && (_ !== "animationName" || !j._keyframe) && !fg(j)) {
          var M = !1, X = _.trim(), re = !1;
          (o || i) && a ? X.startsWith("@") ? M = !0 : X === "&" ? X = Sl("", a, u) : X = Sl(_, a, u) : o && !a && (X === "&" || X === "") && (X = "", re = !0);
          var te = e(j, t, {
            root: re,
            injectHash: M,
            parentSelectors: [].concat(Yt(s), [X])
          }), z = ae(te, 2), W = z[0], Z = z[1];
          p = Q(Q({}, p), Z), g += "".concat(X).concat(W);
        } else {
          let P = function(k, B) {
            process.env.NODE_ENV !== "production" && (Ee(j) !== "object" || !(j != null && j[e0])) && [sg, ag].concat(Yt(d)).forEach(function(ne) {
              return ne(k, B, {
                path: l,
                hashId: a,
                parentSelectors: s
              });
            });
            var H = k.replace(/[A-Z]/g, function(ne) {
              return "-".concat(ne.toLowerCase());
            }), J = B;
            !F1[k] && typeof J == "number" && J !== 0 && (J = "".concat(J, "px")), k === "animationName" && B !== null && B !== void 0 && B._keyframe && (b(B), J = B.getName(a)), g += "".concat(H, ":").concat(J, ";");
          };
          var N, A = (N = j == null ? void 0 : j.value) !== null && N !== void 0 ? N : j;
          Ee(j) === "object" && j !== null && j !== void 0 && j[t0] && Array.isArray(A) ? A.forEach(function(k) {
            P(_, k);
          }) : P(_, A);
        }
      });
    }
  }), o ? c && (g && (g = "@layer ".concat(c.name, " {").concat(g, "}")), c.dependencies && (p["@layer ".concat(c.name)] = c.dependencies.map(function(O) {
    return "@layer ".concat(O, ", ").concat(c.name, ";");
  }).join(`
`))) : g = "{".concat(g, "}"), [g, p];
};
function n0(e, n) {
  return Mr("".concat(e.join("%")).concat(n));
}
function hg() {
  return null;
}
var r0 = "style";
function ra(e, n) {
  var t = e.token, r = e.path, o = e.hashId, i = e.layer, s = e.nonce, a = e.clientOnly, c = e.order, l = c === void 0 ? 0 : c, u = S.useContext(Ur), f = u.autoClear, h = u.mock, m = u.defaultCache, d = u.hashPriority, g = u.container, p = u.ssrInline, b = u.transformers, y = u.linters, C = u.cache, O = u.layer, x = t._tokenKey, R = [x];
  O && R.push("layer"), R.push.apply(R, Yt(r));
  var _ = Zs;
  process.env.NODE_ENV !== "production" && h !== void 0 && (_ = h === "client");
  var j = oc(
    r0,
    R,
    // Create cache if needed
    function() {
      var z = R.join("|");
      if (lg(z)) {
        var W = ug(z), Z = ae(W, 2), N = Z[0], A = Z[1];
        if (N)
          return [N, x, A, {}, a, l];
      }
      var P = n(), k = dg(P, {
        hashId: o,
        hashPriority: d,
        layer: O ? i : void 0,
        path: r.join("-"),
        transformers: b,
        linters: y
      }), B = ae(k, 2), H = B[0], J = B[1], ne = Po(H), ee = n0(R, ne);
      return [ne, x, ee, J, a, l];
    },
    // Remove cache if no need
    function(z, W) {
      var Z = ae(z, 3), N = Z[2];
      (W || f) && Zs && zf(N, {
        mark: jt
      });
    },
    // Effect: Inject style here
    function(z) {
      var W = ae(z, 4), Z = W[0];
      W[1];
      var N = W[2], A = W[3];
      if (_ && Z !== Qf) {
        var P = {
          mark: jt,
          prepend: O ? !1 : "queue",
          attachTo: g,
          priority: l
        }, k = typeof s == "function" ? s() : s;
        k && (P.csp = {
          nonce: k
        });
        var B = [], H = [];
        Object.keys(A).forEach(function(ne) {
          ne.startsWith("@layer") ? B.push(ne) : H.push(ne);
        }), B.forEach(function(ne) {
          In(Po(A[ne]), "_layer-".concat(ne), Q(Q({}, P), {}, {
            prepend: !0
          }));
        });
        var J = In(Z, N, P);
        J[pn] = C.instanceId, J.setAttribute(Zn, x), process.env.NODE_ENV !== "production" && J.setAttribute(p1, R.join("|")), H.forEach(function(ne) {
          In(Po(A[ne]), "_effect-".concat(ne), P);
        });
      }
    }
  ), M = ae(j, 3), X = M[0], re = M[1], te = M[2];
  return function(z) {
    var W;
    if (!p || _ || !m)
      W = /* @__PURE__ */ S.createElement(hg, null);
    else {
      var Z;
      W = /* @__PURE__ */ S.createElement("style", gt({}, (Z = {}, K(Z, Zn, re), K(Z, jt, te), Z), {
        dangerouslySetInnerHTML: {
          __html: X
        }
      }));
    }
    return /* @__PURE__ */ S.createElement(S.Fragment, null, W, z);
  };
}
var xg = function(n, t, r) {
  var o = ae(n, 6), i = o[0], s = o[1], a = o[2], c = o[3], l = o[4], u = o[5], f = r || {}, h = f.plain;
  if (l)
    return null;
  var m = i, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  };
  return m = qo(i, s, a, d, h), c && Object.keys(c).forEach(function(g) {
    if (!t[g]) {
      t[g] = !0;
      var p = Po(c[g]), b = qo(p, s, "_effect-".concat(g), d, h);
      g.startsWith("@layer") ? m = b + m : m += b;
    }
  }), [u, a, m];
}, o0 = "cssVar", pg = function(n, t) {
  var r = n.key, o = n.prefix, i = n.unitless, s = n.ignore, a = n.token, c = n.scope, l = c === void 0 ? "" : c, u = Ot(Ur), f = u.cache.instanceId, h = u.container, m = a._tokenKey, d = [].concat(Yt(n.path), [r, l, m]), g = oc(o0, d, function() {
    var p = t(), b = Vf(p, r, {
      prefix: o,
      unitless: i,
      ignore: s,
      scope: l
    }), y = ae(b, 2), C = y[0], O = y[1], x = n0(d, O);
    return [C, O, x, r];
  }, function(p) {
    var b = ae(p, 3), y = b[2];
    Zs && zf(y, {
      mark: jt
    });
  }, function(p) {
    var b = ae(p, 3), y = b[1], C = b[2];
    if (y) {
      var O = In(y, C, {
        mark: jt,
        prepend: "queue",
        attachTo: h,
        priority: -999
      });
      O[pn] = f, O.setAttribute(Zn, r);
    }
  });
  return g;
}, gg = function(n, t, r) {
  var o = ae(n, 4), i = o[1], s = o[2], a = o[3], c = r || {}, l = c.plain;
  if (!i)
    return null;
  var u = -999, f = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  }, h = qo(i, a, s, f, l);
  return [u, s, h];
}, _r;
_r = {}, K(_r, r0, xg), K(_r, qf, z1), K(_r, o0, gg);
var i0 = /* @__PURE__ */ function() {
  function e(n, t) {
    yt(this, e), K(this, "name", void 0), K(this, "style", void 0), K(this, "_keyframe", !0), this.name = n, this.style = t;
  }
  return _t(e, [{
    key: "getName",
    value: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return t ? "".concat(t, "-").concat(this.name) : this.name;
    }
  }]), e;
}();
function Hn(e) {
  return e.notSplit = !0, e;
}
Hn(["borderTop", "borderBottom"]), Hn(["borderTop"]), Hn(["borderBottom"]), Hn(["borderLeft", "borderRight"]), Hn(["borderLeft"]), Hn(["borderRight"]);
var ac = /* @__PURE__ */ fi({});
function mg(e) {
  return Mf(e) || If(e) || ec(e) || Lf();
}
function oa(e, n) {
  for (var t = e, r = 0; r < n.length; r += 1) {
    if (t == null)
      return;
    t = t[n[r]];
  }
  return t;
}
function s0(e, n, t, r) {
  if (!n.length)
    return t;
  var o = mg(n), i = o[0], s = o.slice(1), a;
  return !e && typeof i == "number" ? a = [] : Array.isArray(e) ? a = Yt(e) : a = Q({}, e), r && t === void 0 && s.length === 1 ? delete a[i][s[0]] : a[i] = s0(a[i], s, t, r), a;
}
function cs(e, n, t) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return n.length && r && t === void 0 && !oa(e, n.slice(0, -1)) ? e : s0(e, n, t, r);
}
function vg(e) {
  return Ee(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function Cl(e) {
  return Array.isArray(e) ? [] : {};
}
var bg = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function yg() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  var r = Cl(n[0]);
  return n.forEach(function(o) {
    function i(s, a) {
      var c = new Set(a), l = oa(o, s), u = Array.isArray(l);
      if (u || vg(l)) {
        if (!c.has(l)) {
          c.add(l);
          var f = oa(r, s);
          u ? r = cs(r, s, []) : (!f || Ee(f) !== "object") && (r = cs(r, s, Cl(l))), bg(l).forEach(function(h) {
            i([].concat(Yt(s), [h]), c);
          });
        }
      } else
        r = cs(r, s, l);
    }
    i([]);
  }), r;
}
function a0() {
}
let rn = null;
function _g() {
  rn = null, wf();
}
let cc = a0;
process.env.NODE_ENV !== "production" && (cc = (e, n, t) => {
  yn(e, `[antd: ${n}] ${t}`), process.env.NODE_ENV === "test" && _g();
});
const c0 = /* @__PURE__ */ S.createContext({}), _n = process.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: n
  } = S.useContext(c0), t = (r, o, i) => {
    if (!r)
      if (n === !1 && o === "deprecated") {
        const s = rn;
        rn || (rn = {}), rn[e] = rn[e] || [], rn[e].includes(i || "") || rn[e].push(i || ""), s || console.warn("[antd] There exists deprecated usage in your code:", rn);
      } else
        process.env.NODE_ENV !== "production" && cc(r, e, i);
  };
  return t.deprecated = (r, o, i, s) => {
    t(r, "deprecated", `\`${o}\` is deprecated. Please use \`${i}\` instead.${s ? ` ${s}` : ""}`);
  }, t;
} : () => {
  const e = () => {
  };
  return e.deprecated = a0, e;
}, Wr = cc, Sg = /* @__PURE__ */ fi(void 0), bt = "${label} is not a valid ${type}", Ri = {
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
Object.assign({}, Ri.Modal);
let Io = [];
const wl = () => Io.reduce((e, n) => Object.assign(Object.assign({}, e), n), Ri.Modal);
function Cg(e) {
  if (e) {
    const n = Object.assign({}, e);
    return Io.push(n), wl(), () => {
      Io = Io.filter((t) => t !== n), wl();
    };
  }
  Object.assign({}, Ri.Modal);
}
const l0 = /* @__PURE__ */ fi(void 0), u0 = "internalMark", f0 = (e) => {
  const {
    locale: n = {},
    children: t,
    _ANT_MARK__: r
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const i = _n("LocaleProvider");
    process.env.NODE_ENV !== "production" && i(r === u0, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  S.useEffect(() => Cg(n == null ? void 0 : n.Modal), [n]);
  const o = S.useMemo(() => Object.assign(Object.assign({}, n), {
    exist: !0
  }), [n]);
  return /* @__PURE__ */ S.createElement(l0.Provider, {
    value: o
  }, t);
};
process.env.NODE_ENV !== "production" && (f0.displayName = "LocaleProvider");
const d0 = {
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
}, Dr = Object.assign(Object.assign({}, d0), {
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
}), rt = Math.round;
function ls(e, n) {
  const t = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], r = t.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    r[o] = n(r[o] || 0, t[o] || "", o);
  return t[3] ? r[3] = t[3].includes("%") ? r[3] / 100 : r[3] : r[3] = 1, r;
}
const El = (e, n, t) => t === 0 ? e : e / 100;
function Sr(e, n) {
  const t = n || 255;
  return e > t ? t : e < 0 ? 0 : e;
}
let tt = class h0 {
  constructor(n) {
    K(this, "isValid", !0), K(this, "r", 0), K(this, "g", 0), K(this, "b", 0), K(this, "a", 1), K(this, "_h", void 0), K(this, "_s", void 0), K(this, "_l", void 0), K(this, "_v", void 0), K(this, "_max", void 0), K(this, "_min", void 0), K(this, "_brightness", void 0);
    function t(r) {
      return r[0] in n && r[1] in n && r[2] in n;
    }
    if (n) if (typeof n == "string") {
      let o = function(i) {
        return r.startsWith(i);
      };
      const r = n.trim();
      /^#?[A-F\d]{3,8}$/i.test(r) ? this.fromHexString(r) : o("rgb") ? this.fromRgbString(r) : o("hsl") ? this.fromHslString(r) : (o("hsv") || o("hsb")) && this.fromHsvString(r);
    } else if (n instanceof h0)
      this.r = n.r, this.g = n.g, this.b = n.b, this.a = n.a, this._h = n._h, this._s = n._s, this._l = n._l, this._v = n._v;
    else if (t("rgb"))
      this.r = Sr(n.r), this.g = Sr(n.g), this.b = Sr(n.b), this.a = typeof n.a == "number" ? Sr(n.a, 1) : 1;
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
      n === 0 ? this._h = 0 : this._h = rt(60 * (this.r === this.getMax() ? (this.g - this.b) / n + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / n + 2 : (this.r - this.g) / n + 4));
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
    const t = this._c(n), r = this.a + t.a * (1 - this.a), o = (i) => rt((this[i] * this.a + t[i] * t.a * (1 - this.a)) / r);
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
      const i = rt(this.a * 255).toString(16);
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
    const n = this.getHue(), t = rt(this.getSaturation() * 100), r = rt(this.getLightness() * 100);
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
    return o[n] = Sr(t, r), o;
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
      const h = rt(r * 255);
      this.r = h, this.g = h, this.b = h;
    }
    let i = 0, s = 0, a = 0;
    const c = n / 60, l = (1 - Math.abs(2 * r - 1)) * t, u = l * (1 - Math.abs(c % 2 - 1));
    c >= 0 && c < 1 ? (i = l, s = u) : c >= 1 && c < 2 ? (i = u, s = l) : c >= 2 && c < 3 ? (s = l, a = u) : c >= 3 && c < 4 ? (s = u, a = l) : c >= 4 && c < 5 ? (i = u, a = l) : c >= 5 && c < 6 && (i = l, a = u);
    const f = r - l / 2;
    this.r = rt((i + f) * 255), this.g = rt((s + f) * 255), this.b = rt((a + f) * 255);
  }
  fromHsv({
    h: n,
    s: t,
    v: r,
    a: o
  }) {
    this._h = n % 360, this._s = t, this._v = r, this.a = typeof o == "number" ? o : 1;
    const i = rt(r * 255);
    if (this.r = i, this.g = i, this.b = i, t <= 0)
      return;
    const s = n / 60, a = Math.floor(s), c = s - a, l = rt(r * (1 - t) * 255), u = rt(r * (1 - t * c) * 255), f = rt(r * (1 - t * (1 - c)) * 255);
    switch (a) {
      case 0:
        this.g = f, this.b = l;
        break;
      case 1:
        this.r = u, this.b = l;
        break;
      case 2:
        this.r = l, this.b = f;
        break;
      case 3:
        this.r = l, this.g = u;
        break;
      case 4:
        this.r = f, this.g = l;
        break;
      case 5:
      default:
        this.g = l, this.b = u;
        break;
    }
  }
  fromHsvString(n) {
    const t = ls(n, El);
    this.fromHsv({
      h: t[0],
      s: t[1],
      v: t[2],
      a: t[3]
    });
  }
  fromHslString(n) {
    const t = ls(n, El);
    this.fromHsl({
      h: t[0],
      s: t[1],
      l: t[2],
      a: t[3]
    });
  }
  fromRgbString(n) {
    const t = ls(n, (r, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? rt(r / 100 * 255) : r
    ));
    this.r = t[0], this.g = t[1], this.b = t[2], this.a = t[3];
  }
};
var lo = 2, Ol = 0.16, wg = 0.05, Eg = 0.05, Og = 0.15, x0 = 5, p0 = 4, Tg = [{
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
function Tl(e, n, t) {
  var r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = t ? Math.round(e.h) - lo * n : Math.round(e.h) + lo * n : r = t ? Math.round(e.h) + lo * n : Math.round(e.h) - lo * n, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function Rl(e, n, t) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var r;
  return t ? r = e.s - Ol * n : n === p0 ? r = e.s + Ol : r = e.s + wg * n, r > 1 && (r = 1), t && n === x0 && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Math.round(r * 100) / 100;
}
function Al(e, n, t) {
  var r;
  return t ? r = e.v + Eg * n : r = e.v - Og * n, r = Math.max(0, Math.min(1, r)), Math.round(r * 100) / 100;
}
function Br(e) {
  for (var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = [], r = new tt(e), o = r.toHsv(), i = x0; i > 0; i -= 1) {
    var s = new tt({
      h: Tl(o, i, !0),
      s: Rl(o, i, !0),
      v: Al(o, i, !0)
    });
    t.push(s);
  }
  t.push(r);
  for (var a = 1; a <= p0; a += 1) {
    var c = new tt({
      h: Tl(o, a),
      s: Rl(o, a),
      v: Al(o, a)
    });
    t.push(c);
  }
  return n.theme === "dark" ? Tg.map(function(l) {
    var u = l.index, f = l.amount;
    return new tt(n.backgroundColor || "#141414").mix(t[u], f).toHexString();
  }) : t.map(function(l) {
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
var xa = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
xa.primary = xa[5];
var pa = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
pa.primary = pa[5];
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
  purple: xa,
  magenta: pa,
  grey: ga
};
function Rg(e, n) {
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
    colorTextBase: u
  } = e, f = t(c), h = t(o), m = t(i), d = t(s), g = t(a), p = r(l, u), b = e.colorLink || e.colorInfo, y = t(b), C = new tt(d[1]).mix(new tt(d[3]), 50).toHexString();
  return Object.assign(Object.assign({}, p), {
    colorPrimaryBg: f[1],
    colorPrimaryBgHover: f[2],
    colorPrimaryBorder: f[3],
    colorPrimaryBorderHover: f[4],
    colorPrimaryHover: f[5],
    colorPrimary: f[6],
    colorPrimaryActive: f[7],
    colorPrimaryTextHover: f[8],
    colorPrimaryText: f[9],
    colorPrimaryTextActive: f[10],
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
    colorErrorBg: d[1],
    colorErrorBgHover: d[2],
    colorErrorBgFilledHover: C,
    colorErrorBgActive: d[3],
    colorErrorBorder: d[3],
    colorErrorBorderHover: d[4],
    colorErrorHover: d[5],
    colorError: d[6],
    colorErrorActive: d[7],
    colorErrorTextHover: d[8],
    colorErrorText: d[9],
    colorErrorTextActive: d[10],
    colorWarningBg: m[1],
    colorWarningBgHover: m[2],
    colorWarningBorder: m[3],
    colorWarningBorderHover: m[4],
    colorWarningHover: m[4],
    colorWarning: m[6],
    colorWarningActive: m[7],
    colorWarningTextHover: m[8],
    colorWarningText: m[9],
    colorWarningTextActive: m[10],
    colorInfoBg: g[1],
    colorInfoBgHover: g[2],
    colorInfoBorder: g[3],
    colorInfoBorderHover: g[4],
    colorInfoHover: g[4],
    colorInfo: g[6],
    colorInfoActive: g[7],
    colorInfoTextHover: g[8],
    colorInfoText: g[9],
    colorInfoTextActive: g[10],
    colorLinkHover: y[4],
    colorLink: y[6],
    colorLinkActive: y[7],
    colorBgMask: new tt("#000").setA(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const Ag = (e) => {
  let n = e, t = e, r = e, o = e;
  return e < 6 && e >= 5 ? n = e + 1 : e < 16 && e >= 6 ? n = e + 2 : e >= 16 && (n = 16), e < 7 && e >= 5 ? t = 4 : e < 8 && e >= 7 ? t = 5 : e < 14 && e >= 8 ? t = 6 : e < 16 && e >= 14 ? t = 7 : e >= 16 && (t = 8), e < 6 && e >= 2 ? r = 1 : e >= 6 && (r = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
    borderRadius: e,
    borderRadiusXS: r,
    borderRadiusSM: t,
    borderRadiusLG: n,
    borderRadiusOuter: o
  };
};
function $g(e) {
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
  }, Ag(r));
}
const Pg = (e) => {
  const {
    controlHeight: n
  } = e;
  return {
    controlHeightSM: n * 0.75,
    controlHeightXS: n * 0.5,
    controlHeightLG: n * 1.25
  };
};
function No(e) {
  return (e + 8) / e;
}
function Ig(e) {
  const n = Array.from({
    length: 10
  }).map((t, r) => {
    const o = r - 1, i = e * Math.pow(Math.E, o / 5), s = r > 1 ? Math.floor(i) : Math.ceil(i);
    return Math.floor(s / 2) * 2;
  });
  return n[1] = e, n.map((t) => ({
    size: t,
    lineHeight: No(t)
  }));
}
const Ng = (e) => {
  const n = Ig(e), t = n.map((u) => u.size), r = n.map((u) => u.lineHeight), o = t[1], i = t[0], s = t[2], a = r[1], c = r[0], l = r[2];
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
function kg(e) {
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
const St = (e, n) => new tt(e).setA(n).toRgbString(), Cr = (e, n) => new tt(e).darken(n).toHexString(), jg = (e) => {
  const n = Br(e);
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
}, Mg = (e, n) => {
  const t = e || "#fff", r = n || "#000";
  return {
    colorBgBase: t,
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
    colorBgLayout: Cr(t, 4),
    colorBgContainer: Cr(t, 0),
    colorBgElevated: Cr(t, 0),
    colorBgSpotlight: St(r, 0.85),
    colorBgBlur: "transparent",
    colorBorder: Cr(t, 15),
    colorBorderSecondary: Cr(t, 6)
  };
};
function Lg(e) {
  us.pink = us.magenta, fs.pink = fs.magenta;
  const n = Object.keys(d0).map((t) => {
    const r = e[t] === us[t] ? fs[t] : Br(e[t]);
    return Array.from({
      length: 10
    }, () => 1).reduce((o, i, s) => (o[`${t}-${s + 1}`] = r[s], o[`${t}${s + 1}`] = r[s], o), {});
  }).reduce((t, r) => (t = Object.assign(Object.assign({}, t), r), t), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), n), Rg(e, {
    generateColorPalettes: jg,
    generateNeutralColorPalettes: Mg
  })), Ng(e.fontSize)), kg(e)), Pg(e)), $g(e));
}
const g0 = Qs(Lg), ma = {
  token: Dr,
  override: {
    override: Dr
  },
  hashed: !0
}, m0 = /* @__PURE__ */ U.createContext(ma), Wo = "ant", lc = "anticon", Dg = (e, n) => n || (e ? `${Wo}-${e}` : Wo), Lt = /* @__PURE__ */ S.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: Dg,
  iconPrefixCls: lc
}), {
  Consumer: b_
} = Lt, $l = {};
function uc(e) {
  const n = S.useContext(Lt), {
    getPrefixCls: t,
    direction: r,
    getPopupContainer: o
  } = n, i = n[e];
  return Object.assign(Object.assign({
    classNames: $l,
    styles: $l
  }, i), {
    getPrefixCls: t,
    direction: r,
    getPopupContainer: o
  });
}
const Bg = `-ant-${Date.now()}-${Math.random()}`;
function Hg(e, n) {
  const t = {}, r = (s, a) => {
    let c = s.clone();
    return c = (a == null ? void 0 : a(c)) || c, c.toRgbString();
  }, o = (s, a) => {
    const c = new tt(s), l = Br(c.toRgbString());
    t[`${a}-color`] = r(c), t[`${a}-color-disabled`] = l[1], t[`${a}-color-hover`] = l[4], t[`${a}-color-active`] = l[6], t[`${a}-color-outline`] = c.clone().setA(0.2).toRgbString(), t[`${a}-color-deprecated-bg`] = l[0], t[`${a}-color-deprecated-border`] = l[2];
  };
  if (n.primaryColor) {
    o(n.primaryColor, "primary");
    const s = new tt(n.primaryColor), a = Br(s.toRgbString());
    a.forEach((l, u) => {
      t[`primary-${u + 1}`] = l;
    }), t["primary-color-deprecated-l-35"] = r(s, (l) => l.lighten(35)), t["primary-color-deprecated-l-20"] = r(s, (l) => l.lighten(20)), t["primary-color-deprecated-t-20"] = r(s, (l) => l.tint(20)), t["primary-color-deprecated-t-50"] = r(s, (l) => l.tint(50)), t["primary-color-deprecated-f-12"] = r(s, (l) => l.setA(l.a * 0.12));
    const c = new tt(a[0]);
    t["primary-color-active-deprecated-f-30"] = r(c, (l) => l.setA(l.a * 0.3)), t["primary-color-active-deprecated-d-02"] = r(c, (l) => l.darken(2));
  }
  return n.successColor && o(n.successColor, "success"), n.warningColor && o(n.warningColor, "warning"), n.errorColor && o(n.errorColor, "error"), n.infoColor && o(n.infoColor, "info"), `
  :root {
    ${Object.keys(t).map((s) => `--${e}-${s}: ${t[s]};`).join(`
`)}
  }
  `.trim();
}
function zg(e, n) {
  const t = Hg(e, n);
  un() ? In(t, `${Bg}-dynamic-theme`) : process.env.NODE_ENV !== "production" && Wr(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const Go = /* @__PURE__ */ S.createContext(!1), Fg = (e) => {
  let {
    children: n,
    disabled: t
  } = e;
  const r = S.useContext(Go);
  return /* @__PURE__ */ S.createElement(Go.Provider, {
    value: t ?? r
  }, n);
}, nr = /* @__PURE__ */ S.createContext(void 0), Vg = (e) => {
  let {
    children: n,
    size: t
  } = e;
  const r = S.useContext(nr);
  return /* @__PURE__ */ S.createElement(nr.Provider, {
    value: t || r
  }, n);
};
function qg() {
  const e = Ot(Go), n = Ot(nr);
  return {
    componentDisabled: e,
    componentSize: n
  };
}
var v0 = /* @__PURE__ */ _t(function e() {
  yt(this, e);
}), b0 = "CALC_UNIT", Ug = new RegExp(b0, "g");
function ds(e) {
  return typeof e == "number" ? "".concat(e).concat(b0) : e;
}
var Wg = /* @__PURE__ */ function(e) {
  ur(t, e);
  var n = qr(t);
  function t(r, o) {
    var i;
    yt(this, t), i = n.call(this), K(Pn(i), "result", ""), K(Pn(i), "unitlessCssVar", void 0), K(Pn(i), "lowPriority", void 0);
    var s = Ee(r);
    return i.unitlessCssVar = o, r instanceof t ? i.result = "(".concat(r.result, ")") : s === "number" ? i.result = ds(r) : s === "string" && (i.result = r), i;
  }
  return _t(t, [{
    key: "add",
    value: function(o) {
      return o instanceof t ? this.result = "".concat(this.result, " + ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " + ").concat(ds(o))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(o) {
      return o instanceof t ? this.result = "".concat(this.result, " - ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " - ").concat(ds(o))), this.lowPriority = !0, this;
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
      }) && (c = !1), this.result = this.result.replace(Ug, c ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), t;
}(v0), Gg = /* @__PURE__ */ function(e) {
  ur(t, e);
  var n = qr(t);
  function t(r) {
    var o;
    return yt(this, t), o = n.call(this), K(Pn(o), "result", 0), r instanceof t ? o.result = r.result : typeof r == "number" && (o.result = r), o;
  }
  return _t(t, [{
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
}(v0), Xg = function(n, t) {
  var r = n === "css" ? Wg : Gg;
  return function(o) {
    return new r(o, t);
  };
}, Pl = function(n, t) {
  return "".concat([t, n.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function bn(e) {
  var n = S.useRef();
  n.current = e;
  var t = S.useCallback(function() {
    for (var r, o = arguments.length, i = new Array(o), s = 0; s < o; s++)
      i[s] = arguments[s];
    return (r = n.current) === null || r === void 0 ? void 0 : r.call.apply(r, [n].concat(i));
  }, []);
  return t;
}
function Hr(e) {
  var n = S.useRef(!1), t = S.useState(e), r = ae(t, 2), o = r[0], i = r[1];
  S.useEffect(function() {
    return n.current = !1, function() {
      n.current = !0;
    };
  }, []);
  function s(a, c) {
    c && n.current || i(a);
  }
  return [o, s];
}
function hs(e) {
  return e !== void 0;
}
function Yg(e, n) {
  var t = n || {}, r = t.defaultValue, o = t.value, i = t.onChange, s = t.postState, a = Hr(function() {
    return hs(o) ? o : hs(r) ? typeof r == "function" ? r() : r : typeof e == "function" ? e() : e;
  }), c = ae(a, 2), l = c[0], u = c[1], f = o !== void 0 ? o : l, h = s ? s(f) : f, m = bn(i), d = Hr([f]), g = ae(d, 2), p = g[0], b = g[1];
  ml(function() {
    var C = p[0];
    l !== C && m(l, C);
  }, [p]), ml(function() {
    hs(o) || u(o);
  }, [o]);
  var y = bn(function(C, O) {
    u(C, O), b([f], O);
  });
  return [h, y];
}
function Il(e, n, t, r) {
  var o = Q({}, n[e]);
  if (r != null && r.deprecatedTokens) {
    var i = r.deprecatedTokens;
    i.forEach(function(a) {
      var c = ae(a, 2), l = c[0], u = c[1];
      if (process.env.NODE_ENV !== "production" && yn(!(o != null && o[l]), "Component Token `".concat(String(l), "` of ").concat(String(e), " is deprecated. Please use `").concat(String(u), "` instead.")), o != null && o[l] || o != null && o[u]) {
        var f;
        (f = o[u]) !== null && f !== void 0 || (o[u] = o == null ? void 0 : o[l]);
      }
    });
  }
  var s = Q(Q({}, t), o);
  return Object.keys(s).forEach(function(a) {
    s[a] === n[a] && delete s[a];
  }), s;
}
var y0 = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", va = !0;
function Sn() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  if (!y0)
    return Object.assign.apply(Object, [{}].concat(n));
  va = !1;
  var r = {};
  return n.forEach(function(o) {
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
  }), va = !0, r;
}
var Nl = {};
function Kg() {
}
var Jg = function(n) {
  var t, r = n, o = Kg;
  return y0 && typeof Proxy < "u" && (t = /* @__PURE__ */ new Set(), r = new Proxy(n, {
    get: function(s, a) {
      if (va) {
        var c;
        (c = t) === null || c === void 0 || c.add(a);
      }
      return s[a];
    }
  }), o = function(s, a) {
    var c;
    Nl[s] = {
      global: Array.from(t),
      component: Q(Q({}, (c = Nl[s]) === null || c === void 0 ? void 0 : c.component), a)
    };
  }), {
    token: r,
    keys: t,
    flush: o
  };
};
function kl(e, n, t) {
  if (typeof t == "function") {
    var r;
    return t(Sn(n, (r = n[e]) !== null && r !== void 0 ? r : {}));
  }
  return t ?? {};
}
function Qg(e) {
  return e === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++)
        r[o] = arguments[o];
      return "max(".concat(r.map(function(i) {
        return cn(i);
      }).join(","), ")");
    },
    min: function() {
      for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++)
        r[o] = arguments[o];
      return "min(".concat(r.map(function(i) {
        return cn(i);
      }).join(","), ")");
    }
  };
}
var Zg = 1e3 * 60 * 10, em = /* @__PURE__ */ function() {
  function e() {
    yt(this, e), K(this, "map", /* @__PURE__ */ new Map()), K(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), K(this, "nextID", 0), K(this, "lastAccessBeat", /* @__PURE__ */ new Map()), K(this, "accessBeat", 0);
  }
  return _t(e, [{
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
        return i && Ee(i) === "object" ? "obj_".concat(r.getObjectID(i)) : "".concat(Ee(i), "_").concat(i);
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
          r - o > Zg && (t.map.delete(i), t.lastAccessBeat.delete(i));
        }), this.accessBeat = 0;
      }
    }
  }]), e;
}(), jl = new em();
function tm(e, n) {
  return U.useMemo(function() {
    var t = jl.get(n);
    if (t)
      return t;
    var r = e();
    return jl.set(n, r), r;
  }, n);
}
var nm = function() {
  return {};
};
function rm(e) {
  var n = e.useCSP, t = n === void 0 ? nm : n, r = e.useToken, o = e.usePrefix, i = e.getResetStyles, s = e.getCommonStyle, a = e.getCompUnitless;
  function c(h, m, d, g) {
    var p = Array.isArray(h) ? h[0] : h;
    function b(j) {
      return "".concat(String(p)).concat(j.slice(0, 1).toUpperCase()).concat(j.slice(1));
    }
    var y = (g == null ? void 0 : g.unitless) || {}, C = typeof a == "function" ? a(h) : {}, O = Q(Q({}, C), {}, K({}, b("zIndexPopup"), !0));
    Object.keys(y).forEach(function(j) {
      O[b(j)] = y[j];
    });
    var x = Q(Q({}, g), {}, {
      unitless: O,
      prefixToken: b
    }), R = u(h, m, d, x), _ = l(p, d, x);
    return function(j) {
      var M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : j, X = R(j, M), re = ae(X, 2), te = re[1], z = _(M), W = ae(z, 2), Z = W[0], N = W[1];
      return [Z, te, N];
    };
  }
  function l(h, m, d) {
    var g = d.unitless, p = d.injectStyle, b = p === void 0 ? !0 : p, y = d.prefixToken, C = d.ignore, O = function(_) {
      var j = _.rootCls, M = _.cssVar, X = M === void 0 ? {} : M, re = r(), te = re.realToken;
      return pg({
        path: [h],
        prefix: X.prefix,
        key: X.key,
        unitless: g,
        ignore: C,
        token: te,
        scope: j
      }, function() {
        var z = kl(h, te, m), W = Il(h, te, z, {
          deprecatedTokens: d == null ? void 0 : d.deprecatedTokens
        });
        return Object.keys(z).forEach(function(Z) {
          W[y(Z)] = W[Z], delete W[Z];
        }), W;
      }), null;
    }, x = function(_) {
      var j = r(), M = j.cssVar;
      return [function(X) {
        return b && M ? /* @__PURE__ */ U.createElement(U.Fragment, null, /* @__PURE__ */ U.createElement(O, {
          rootCls: _,
          cssVar: M,
          component: h
        }), X) : X;
      }, M == null ? void 0 : M.key];
    };
    return x;
  }
  function u(h, m, d) {
    var g = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, p = Array.isArray(h) ? h : [h, h], b = ae(p, 1), y = b[0], C = p.join("-"), O = e.layer || {
      name: "antd"
    };
    return function(x) {
      var R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : x, _ = r(), j = _.theme, M = _.realToken, X = _.hashId, re = _.token, te = _.cssVar, z = o(), W = z.rootPrefixCls, Z = z.iconPrefixCls, N = t(), A = te ? "css" : "js", P = tm(function() {
        var ee = /* @__PURE__ */ new Set();
        return te && Object.keys(g.unitless || {}).forEach(function(ce) {
          ee.add(To(ce, te.prefix)), ee.add(To(ce, Pl(y, te.prefix)));
        }), Xg(A, ee);
      }, [A, y, te == null ? void 0 : te.prefix]), k = Qg(A), B = k.max, H = k.min, J = {
        theme: j,
        token: re,
        hashId: X,
        nonce: function() {
          return N.nonce;
        },
        clientOnly: g.clientOnly,
        layer: O,
        // antd is always at top of styles
        order: g.order || -999
      };
      typeof i == "function" && ra(Q(Q({}, J), {}, {
        clientOnly: !1,
        path: ["Shared", W]
      }), function() {
        return i(re, {
          prefix: {
            rootPrefixCls: W,
            iconPrefixCls: Z
          },
          csp: N
        });
      });
      var ne = ra(Q(Q({}, J), {}, {
        path: [C, x, Z]
      }), function() {
        if (g.injectStyle === !1)
          return [];
        var ee = Jg(re), ce = ee.token, ue = ee.flush, de = kl(y, M, d), Oe = ".".concat(x), _e = Il(y, M, de, {
          deprecatedTokens: g.deprecatedTokens
        });
        te && de && Ee(de) === "object" && Object.keys(de).forEach(function(Ze) {
          de[Ze] = "var(".concat(To(Ze, Pl(y, te.prefix)), ")");
        });
        var ke = Sn(ce, {
          componentCls: Oe,
          prefixCls: x,
          iconCls: ".".concat(Z),
          antCls: ".".concat(W),
          calc: P,
          // @ts-ignore
          max: B,
          // @ts-ignore
          min: H
        }, te ? de : _e), Ne = m(ke, {
          hashId: X,
          prefixCls: x,
          rootPrefixCls: W,
          iconPrefixCls: Z
        });
        ue(y, _e);
        var pe = typeof s == "function" ? s(ke, x, R, g.resetFont) : null;
        return [g.resetStyle === !1 ? null : pe, Ne];
      });
      return [ne, X];
    };
  }
  function f(h, m, d) {
    var g = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, p = u(h, m, d, Q({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, g)), b = function(C) {
      var O = C.prefixCls, x = C.rootCls, R = x === void 0 ? O : x;
      return p(O, R), null;
    };
    return process.env.NODE_ENV !== "production" && (b.displayName = "SubStyle_".concat(String(Array.isArray(h) ? h.join(".") : h))), b;
  }
  return {
    genStyleHooks: c,
    genSubStyleComponent: f,
    genComponentStyleHook: u
  };
}
const fc = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"], om = "5.24.6";
function xs(e) {
  return e >= 0 && e <= 255;
}
function Ar(e, n) {
  const {
    r: t,
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
  } = new tt(n).toRgb();
  for (let l = 0.01; l <= 1; l += 0.01) {
    const u = Math.round((t - s * (1 - l)) / l), f = Math.round((r - a * (1 - l)) / l), h = Math.round((o - c * (1 - l)) / l);
    if (xs(u) && xs(f) && xs(h))
      return new tt({
        r: u,
        g: f,
        b: h,
        a: Math.round(l * 100) / 100
      }).toRgbString();
  }
  return new tt({
    r: t,
    g: r,
    b: o,
    a: 1
  }).toRgbString();
}
var im = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
function _0(e) {
  const {
    override: n
  } = e, t = im(e, ["override"]), r = Object.assign({}, n);
  Object.keys(Dr).forEach((h) => {
    delete r[h];
  });
  const o = Object.assign(Object.assign({}, t), r), i = 480, s = 576, a = 768, c = 992, l = 1200, u = 1600;
  if (o.motion === !1) {
    const h = "0s";
    o.motionDurationFast = h, o.motionDurationMid = h, o.motionDurationSlow = h;
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
var Ml = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
const S0 = {
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
}, sm = {
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
}, am = {
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
}, C0 = (e, n, t) => {
  const r = t.getDerivativeToken(e), {
    override: o
  } = n, i = Ml(n, ["override"]);
  let s = Object.assign(Object.assign({}, r), {
    override: o
  });
  return s = _0(s), i && Object.entries(i).forEach((a) => {
    let [c, l] = a;
    const {
      theme: u
    } = l, f = Ml(l, ["theme"]);
    let h = f;
    u && (h = C0(Object.assign(Object.assign({}, s), f), {
      override: f
    }, u)), s[c] = h;
  }), s;
};
function Gr() {
  const {
    token: e,
    hashed: n,
    theme: t,
    override: r,
    cssVar: o
  } = U.useContext(m0), i = `${om}-${n || ""}`, s = t || g0, [a, c, l] = H1(s, [Dr, e], {
    salt: i,
    override: r,
    getComputedToken: C0,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: _0,
    cssVar: o && {
      prefix: o.prefix,
      key: o.key,
      unitless: S0,
      ignore: sm,
      preserve: am
    }
  });
  return [s, l, n ? c : "", a, o];
}
const w0 = function(e) {
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
}, E0 = () => ({
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
}), cm = (e) => ({
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
}), lm = (e, n, t, r) => {
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
}, um = (e, n) => ({
  outline: `${cn(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
  outlineOffset: n ?? 1,
  transition: "outline-offset 0s, outline 0s"
}), fm = (e, n) => ({
  "&:focus-visible": Object.assign({}, um(e, n))
}), O0 = (e) => ({
  [`.${e}`]: Object.assign(Object.assign({}, E0()), {
    [`.${e} .${e}-icon`]: {
      display: "block"
    }
  })
}), {
  genStyleHooks: Ai,
  genComponentStyleHook: dm,
  genSubStyleComponent: hm
} = rm({
  usePrefix: () => {
    const {
      getPrefixCls: e,
      iconPrefixCls: n
    } = Ot(Lt);
    return {
      rootPrefixCls: e(),
      iconPrefixCls: n
    };
  },
  useToken: () => {
    const [e, n, t, r, o] = Gr();
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
    } = Ot(Lt);
    return e ?? {};
  },
  getResetStyles: (e, n) => {
    var t;
    const r = cm(e);
    return [r, {
      "&": r
    }, O0((t = n == null ? void 0 : n.prefix.iconPrefixCls) !== null && t !== void 0 ? t : lc)];
  },
  getCommonStyle: lm,
  getCompUnitless: () => S0
}), xm = (e, n) => {
  const [t, r] = Gr();
  return ra({
    token: r,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => n == null ? void 0 : n.nonce,
    layer: {
      name: "antd"
    }
  }, () => [O0(e)]);
}, pm = Object.assign({}, S), {
  useId: Ll
} = pm, gm = () => "", mm = typeof Ll > "u" ? gm : Ll;
function vm(e, n, t) {
  var r, o;
  const i = _n("ConfigProvider"), s = e || {}, a = s.inherit === !1 || !n ? Object.assign(Object.assign({}, ma), {
    hashed: (r = n == null ? void 0 : n.hashed) !== null && r !== void 0 ? r : ma.hashed,
    cssVar: n == null ? void 0 : n.cssVar
  }) : n, c = mm();
  if (process.env.NODE_ENV !== "production") {
    const l = s.cssVar || a.cssVar, u = !!(typeof s.cssVar == "object" && (!((o = s.cssVar) === null || o === void 0) && o.key) || c);
    process.env.NODE_ENV !== "production" && i(!l || u, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return Qa(() => {
    var l, u;
    if (!e)
      return n;
    const f = Object.assign({}, a.components);
    Object.keys(e.components || {}).forEach((d) => {
      f[d] = Object.assign(Object.assign({}, f[d]), e.components[d]);
    });
    const h = `css-var-${c.replace(/:/g, "")}`, m = ((l = s.cssVar) !== null && l !== void 0 ? l : a.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: t == null ? void 0 : t.prefixCls
    }, typeof a.cssVar == "object" ? a.cssVar : {}), typeof s.cssVar == "object" ? s.cssVar : {}), {
      key: typeof s.cssVar == "object" && ((u = s.cssVar) === null || u === void 0 ? void 0 : u.key) || h
    });
    return Object.assign(Object.assign(Object.assign({}, a), s), {
      token: Object.assign(Object.assign({}, a.token), s.token),
      components: f,
      cssVar: m
    });
  }, [s, a], (l, u) => l.some((f, h) => {
    const m = u[h];
    return !d1(f, m, !0);
  }));
}
var bm = ["children"], T0 = /* @__PURE__ */ S.createContext({});
function ym(e) {
  var n = e.children, t = Mn(e, bm);
  return /* @__PURE__ */ S.createElement(T0.Provider, {
    value: t
  }, n);
}
var _m = /* @__PURE__ */ function(e) {
  ur(t, e);
  var n = qr(t);
  function t() {
    return yt(this, t), n.apply(this, arguments);
  }
  return _t(t, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), t;
}(S.Component);
function Sm(e) {
  var n = S.useReducer(function(a) {
    return a + 1;
  }, 0), t = ae(n, 2), r = t[1], o = S.useRef(e), i = bn(function() {
    return o.current;
  }), s = bn(function(a) {
    o.current = typeof a == "function" ? a(o.current) : a, r();
  });
  return [i, s];
}
var xn = "none", uo = "appear", fo = "enter", ho = "leave", Dl = "none", It = "prepare", zn = "start", Fn = "active", dc = "end", R0 = "prepared";
function Bl(e, n) {
  var t = {};
  return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit".concat(e)] = "webkit".concat(n), t["Moz".concat(e)] = "moz".concat(n), t["ms".concat(e)] = "MS".concat(n), t["O".concat(e)] = "o".concat(n.toLowerCase()), t;
}
function Cm(e, n) {
  var t = {
    animationend: Bl("Animation", "AnimationEnd"),
    transitionend: Bl("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in n || delete t.animationend.animation, "TransitionEvent" in n || delete t.transitionend.transition), t;
}
var wm = Cm(un(), typeof window < "u" ? window : {}), A0 = {};
if (un()) {
  var Em = document.createElement("div");
  A0 = Em.style;
}
var xo = {};
function $0(e) {
  if (xo[e])
    return xo[e];
  var n = wm[e];
  if (n)
    for (var t = Object.keys(n), r = t.length, o = 0; o < r; o += 1) {
      var i = t[o];
      if (Object.prototype.hasOwnProperty.call(n, i) && i in A0)
        return xo[e] = n[i], xo[e];
    }
  return "";
}
var P0 = $0("animationend"), I0 = $0("transitionend"), N0 = !!(P0 && I0), Hl = P0 || "animationend", zl = I0 || "transitionend";
function Fl(e, n) {
  if (!e) return null;
  if (Ee(e) === "object") {
    var t = n.replace(/-\w/g, function(r) {
      return r[1].toUpperCase();
    });
    return e[t];
  }
  return "".concat(e, "-").concat(n);
}
const Om = function(e) {
  var n = Se();
  function t(o) {
    o && (o.removeEventListener(zl, e), o.removeEventListener(Hl, e));
  }
  function r(o) {
    n.current && n.current !== o && t(n.current), o && o !== n.current && (o.addEventListener(zl, e), o.addEventListener(Hl, e), n.current = o);
  }
  return S.useEffect(function() {
    return function() {
      t(n.current);
    };
  }, []), [r, t];
};
var k0 = un() ? Jd : Ue;
const Tm = function() {
  var e = S.useRef(null);
  function n() {
    vn.cancel(e.current);
  }
  function t(r) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    n();
    var i = vn(function() {
      o <= 1 ? r({
        isCanceled: function() {
          return i !== e.current;
        }
      }) : t(r, o - 1);
    });
    e.current = i;
  }
  return S.useEffect(function() {
    return function() {
      n();
    };
  }, []), [t, n];
};
var Rm = [It, zn, Fn, dc], Am = [It, R0], j0 = !1, $m = !0;
function M0(e) {
  return e === Fn || e === dc;
}
const Pm = function(e, n, t) {
  var r = Hr(Dl), o = ae(r, 2), i = o[0], s = o[1], a = Tm(), c = ae(a, 2), l = c[0], u = c[1];
  function f() {
    s(It, !0);
  }
  var h = n ? Am : Rm;
  return k0(function() {
    if (i !== Dl && i !== dc) {
      var m = h.indexOf(i), d = h[m + 1], g = t(i);
      g === j0 ? s(d, !0) : d && l(function(p) {
        function b() {
          p.isCanceled() || s(d, !0);
        }
        g === !0 ? b() : Promise.resolve(g).then(b);
      });
    }
  }, [e, i]), S.useEffect(function() {
    return function() {
      u();
    };
  }, []), [f, i];
};
function Im(e, n, t, r) {
  var o = r.motionEnter, i = o === void 0 ? !0 : o, s = r.motionAppear, a = s === void 0 ? !0 : s, c = r.motionLeave, l = c === void 0 ? !0 : c, u = r.motionDeadline, f = r.motionLeaveImmediately, h = r.onAppearPrepare, m = r.onEnterPrepare, d = r.onLeavePrepare, g = r.onAppearStart, p = r.onEnterStart, b = r.onLeaveStart, y = r.onAppearActive, C = r.onEnterActive, O = r.onLeaveActive, x = r.onAppearEnd, R = r.onEnterEnd, _ = r.onLeaveEnd, j = r.onVisibleChanged, M = Hr(), X = ae(M, 2), re = X[0], te = X[1], z = Sm(xn), W = ae(z, 2), Z = W[0], N = W[1], A = Hr(null), P = ae(A, 2), k = P[0], B = P[1], H = Z(), J = Se(!1), ne = Se(null);
  function ee() {
    return t();
  }
  var ce = Se(!1);
  function ue() {
    N(xn), B(null, !0);
  }
  var de = bn(function(le) {
    var Re = Z();
    if (Re !== xn) {
      var ve = ee();
      if (!(le && !le.deadline && le.target !== ve)) {
        var Ye = ce.current, ft;
        Re === uo && Ye ? ft = x == null ? void 0 : x(ve, le) : Re === fo && Ye ? ft = R == null ? void 0 : R(ve, le) : Re === ho && Ye && (ft = _ == null ? void 0 : _(ve, le)), Ye && ft !== !1 && ue();
      }
    }
  }), Oe = Om(de), _e = ae(Oe, 1), ke = _e[0], Ne = function(Re) {
    switch (Re) {
      case uo:
        return K(K(K({}, It, h), zn, g), Fn, y);
      case fo:
        return K(K(K({}, It, m), zn, p), Fn, C);
      case ho:
        return K(K(K({}, It, d), zn, b), Fn, O);
      default:
        return {};
    }
  }, pe = S.useMemo(function() {
    return Ne(H);
  }, [H]), Ze = Pm(H, !e, function(le) {
    if (le === It) {
      var Re = pe[It];
      return Re ? Re(ee()) : j0;
    }
    if ($ in pe) {
      var ve;
      B(((ve = pe[$]) === null || ve === void 0 ? void 0 : ve.call(pe, ee(), null)) || null);
    }
    return $ === Fn && H !== xn && (ke(ee()), u > 0 && (clearTimeout(ne.current), ne.current = setTimeout(function() {
      de({
        deadline: !0
      });
    }, u))), $ === R0 && ue(), $m;
  }), T = ae(Ze, 2), F = T[0], $ = T[1], G = M0($);
  ce.current = G;
  var w = Se(null);
  k0(function() {
    if (!(J.current && w.current === n)) {
      te(n);
      var le = J.current;
      J.current = !0;
      var Re;
      !le && n && a && (Re = uo), le && n && i && (Re = fo), (le && !n && l || !le && f && !n && l) && (Re = ho);
      var ve = Ne(Re);
      Re && (e || ve[It]) ? (N(Re), F()) : N(xn), w.current = n;
    }
  }, [n]), Ue(function() {
    // Cancel appear
    (H === uo && !a || // Cancel enter
    H === fo && !i || // Cancel leave
    H === ho && !l) && N(xn);
  }, [a, i, l]), Ue(function() {
    return function() {
      J.current = !1, clearTimeout(ne.current);
    };
  }, []);
  var Y = S.useRef(!1);
  Ue(function() {
    re && (Y.current = !0), re !== void 0 && H === xn && ((Y.current || re) && (j == null || j(re)), Y.current = !0);
  }, [re, H]);
  var se = k;
  return pe[It] && $ === zn && (se = Q({
    transition: "none"
  }, se)), [H, $, se, re ?? n];
}
function Nm(e) {
  var n = e;
  Ee(e) === "object" && (n = e.transitionSupport);
  function t(o, i) {
    return !!(o.motionName && n && i !== !1);
  }
  var r = /* @__PURE__ */ S.forwardRef(function(o, i) {
    var s = o.visible, a = s === void 0 ? !0 : s, c = o.removeOnLeave, l = c === void 0 ? !0 : c, u = o.forceRender, f = o.children, h = o.motionName, m = o.leavedClassName, d = o.eventProps, g = S.useContext(T0), p = g.motion, b = t(o, p), y = Se(), C = Se();
    function O() {
      try {
        return y.current instanceof HTMLElement ? y.current : t1(C.current);
      } catch {
        return null;
      }
    }
    var x = Im(b, a, O, o), R = ae(x, 4), _ = R[0], j = R[1], M = R[2], X = R[3], re = S.useRef(X);
    X && (re.current = !0);
    var te = S.useCallback(function(P) {
      y.current = P, Tf(i, P);
    }, [i]), z, W = Q(Q({}, d), {}, {
      visible: a
    });
    if (!f)
      z = null;
    else if (_ === xn)
      X ? z = f(Q({}, W), te) : !l && re.current && m ? z = f(Q(Q({}, W), {}, {
        className: m
      }), te) : u || !l && !m ? z = f(Q(Q({}, W), {}, {
        style: {
          display: "none"
        }
      }), te) : z = null;
    else {
      var Z;
      j === It ? Z = "prepare" : M0(j) ? Z = "active" : j === zn && (Z = "start");
      var N = Fl(h, "".concat(_, "-").concat(Z));
      z = f(Q(Q({}, W), {}, {
        className: we(Fl(h, _), K(K({}, N, N && Z), h, typeof h == "string")),
        style: M
      }), te);
    }
    if (/* @__PURE__ */ S.isValidElement(z) && Rf(z)) {
      var A = $f(z);
      A || (z = /* @__PURE__ */ S.cloneElement(z, {
        ref: te
      }));
    }
    return /* @__PURE__ */ S.createElement(_m, {
      ref: C
    }, z);
  });
  return r.displayName = "CSSMotion", r;
}
const $i = Nm(N0);
var ba = "add", ya = "keep", _a = "remove", ps = "removed";
function km(e) {
  var n;
  return e && Ee(e) === "object" && "key" in e ? n = e : n = {
    key: e
  }, Q(Q({}, n), {}, {
    key: String(n.key)
  });
}
function Sa() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(km);
}
function jm() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], t = [], r = 0, o = n.length, i = Sa(e), s = Sa(n);
  i.forEach(function(l) {
    for (var u = !1, f = r; f < o; f += 1) {
      var h = s[f];
      if (h.key === l.key) {
        r < f && (t = t.concat(s.slice(r, f).map(function(m) {
          return Q(Q({}, m), {}, {
            status: ba
          });
        })), r = f), t.push(Q(Q({}, h), {}, {
          status: ya
        })), r += 1, u = !0;
        break;
      }
    }
    u || t.push(Q(Q({}, l), {}, {
      status: _a
    }));
  }), r < o && (t = t.concat(s.slice(r).map(function(l) {
    return Q(Q({}, l), {}, {
      status: ba
    });
  })));
  var a = {};
  t.forEach(function(l) {
    var u = l.key;
    a[u] = (a[u] || 0) + 1;
  });
  var c = Object.keys(a).filter(function(l) {
    return a[l] > 1;
  });
  return c.forEach(function(l) {
    t = t.filter(function(u) {
      var f = u.key, h = u.status;
      return f !== l || h !== _a;
    }), t.forEach(function(u) {
      u.key === l && (u.status = ya);
    });
  }), t;
}
var Mm = ["component", "children", "onVisibleChanged", "onAllRemoved"], Lm = ["status"], Dm = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function Bm(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : $i, t = /* @__PURE__ */ function(r) {
    ur(i, r);
    var o = qr(i);
    function i() {
      var s;
      yt(this, i);
      for (var a = arguments.length, c = new Array(a), l = 0; l < a; l++)
        c[l] = arguments[l];
      return s = o.call.apply(o, [this].concat(c)), K(Pn(s), "state", {
        keyEntities: []
      }), K(Pn(s), "removeKey", function(u) {
        s.setState(function(f) {
          var h = f.keyEntities.map(function(m) {
            return m.key !== u ? m : Q(Q({}, m), {}, {
              status: ps
            });
          });
          return {
            keyEntities: h
          };
        }, function() {
          var f = s.state.keyEntities, h = f.filter(function(m) {
            var d = m.status;
            return d !== ps;
          }).length;
          h === 0 && s.props.onAllRemoved && s.props.onAllRemoved();
        });
      }), s;
    }
    return _t(i, [{
      key: "render",
      value: function() {
        var a = this, c = this.state.keyEntities, l = this.props, u = l.component, f = l.children, h = l.onVisibleChanged;
        l.onAllRemoved;
        var m = Mn(l, Mm), d = u || S.Fragment, g = {};
        return Dm.forEach(function(p) {
          g[p] = m[p], delete m[p];
        }), delete m.keys, /* @__PURE__ */ S.createElement(d, m, c.map(function(p, b) {
          var y = p.status, C = Mn(p, Lm), O = y === ba || y === ya;
          return /* @__PURE__ */ S.createElement(n, gt({}, g, {
            key: C.key,
            visible: O,
            eventProps: C,
            onVisibleChanged: function(R) {
              h == null || h(R, {
                key: C.key
              }), R || a.removeKey(C.key);
            }
          }), function(x, R) {
            return f(Q(Q({}, x), {}, {
              index: b
            }), R);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(a, c) {
        var l = a.keys, u = c.keyEntities, f = Sa(l), h = jm(u, f);
        return {
          keyEntities: h.filter(function(m) {
            var d = u.find(function(g) {
              var p = g.key;
              return m.key === p;
            });
            return !(d && d.status === ps && m.status === _a);
          })
        };
      }
    }]), i;
  }(S.Component);
  return K(t, "defaultProps", {
    component: "div"
  }), t;
}
Bm(N0);
function Hm(e) {
  const {
    children: n
  } = e, [, t] = Gr(), {
    motion: r
  } = t, o = S.useRef(!1);
  return o.current = o.current || r === !1, o.current ? /* @__PURE__ */ S.createElement(ym, {
    motion: r
  }, n) : n;
}
const L0 = /* @__PURE__ */ S.memo((e) => {
  let {
    dropdownMatchSelectWidth: n
  } = e;
  return _n("ConfigProvider").deprecated(n === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
process.env.NODE_ENV !== "production" && (L0.displayName = "PropWarning");
const zm = process.env.NODE_ENV !== "production" ? L0 : () => null;
var Fm = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
let Ca = !1;
process.env.NODE_ENV;
const Vm = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let D0;
function qm() {
  return D0 || Wo;
}
function Um(e) {
  return Object.keys(e).some((n) => n.endsWith("Color"));
}
const Wm = (e) => {
  const {
    prefixCls: n,
    iconPrefixCls: t,
    theme: r,
    holderRender: o
  } = e;
  n !== void 0 && (D0 = n), r && Um(r) && (process.env.NODE_ENV !== "production" && Wr(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), zg(qm(), r));
}, Gm = (e) => {
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
    space: u,
    splitter: f,
    virtual: h,
    dropdownMatchSelectWidth: m,
    popupMatchSelectWidth: d,
    popupOverflow: g,
    legacyLocale: p,
    parentContext: b,
    iconPrefixCls: y,
    theme: C,
    componentDisabled: O,
    segmented: x,
    statistic: R,
    spin: _,
    calendar: j,
    carousel: M,
    cascader: X,
    collapse: re,
    typography: te,
    checkbox: z,
    descriptions: W,
    divider: Z,
    drawer: N,
    skeleton: A,
    steps: P,
    image: k,
    layout: B,
    list: H,
    mentions: J,
    modal: ne,
    progress: ee,
    result: ce,
    slider: ue,
    breadcrumb: de,
    menu: Oe,
    pagination: _e,
    input: ke,
    textArea: Ne,
    empty: pe,
    badge: Ze,
    radio: T,
    rate: F,
    switch: $,
    transfer: G,
    avatar: w,
    message: Y,
    tag: se,
    table: le,
    card: Re,
    tabs: ve,
    timeline: Ye,
    timePicker: ft,
    upload: Qt,
    notification: At,
    tree: Zt,
    colorPicker: Bt,
    datePicker: Ht,
    rangePicker: en,
    flex: tn,
    wave: nn,
    dropdown: zt,
    warning: je,
    tour: ct,
    tooltip: Ft,
    popover: D,
    popconfirm: E,
    floatButtonGroup: be,
    variant: ie,
    inputNumber: Me,
    treeSelect: ye
  } = e, et = S.useCallback((Fe, v) => {
    const {
      prefixCls: L
    } = e;
    if (v)
      return v;
    const V = L || b.getPrefixCls("");
    return Fe ? `${V}-${Fe}` : V;
  }, [b.getPrefixCls, e.prefixCls]), Te = y || b.iconPrefixCls || lc, ht = t || b.csp;
  xm(Te, ht);
  const lt = vm(C, b.theme, {
    prefixCls: et("")
  });
  process.env.NODE_ENV !== "production" && (Ca = Ca || !!lt);
  const Vt = {
    csp: ht,
    autoInsertSpaceInButton: r,
    alert: o,
    anchor: i,
    locale: a || p,
    direction: l,
    space: u,
    splitter: f,
    virtual: h,
    popupMatchSelectWidth: d ?? m,
    popupOverflow: g,
    getPrefixCls: et,
    iconPrefixCls: Te,
    theme: lt,
    segmented: x,
    statistic: R,
    spin: _,
    calendar: j,
    carousel: M,
    cascader: X,
    collapse: re,
    typography: te,
    checkbox: z,
    descriptions: W,
    divider: Z,
    drawer: N,
    skeleton: A,
    steps: P,
    image: k,
    input: ke,
    textArea: Ne,
    layout: B,
    list: H,
    mentions: J,
    modal: ne,
    progress: ee,
    result: ce,
    slider: ue,
    breadcrumb: de,
    menu: Oe,
    pagination: _e,
    empty: pe,
    badge: Ze,
    radio: T,
    rate: F,
    switch: $,
    transfer: G,
    avatar: w,
    message: Y,
    tag: se,
    table: le,
    card: Re,
    tabs: ve,
    timeline: Ye,
    timePicker: ft,
    upload: Qt,
    notification: At,
    tree: Zt,
    colorPicker: Bt,
    datePicker: Ht,
    rangePicker: en,
    flex: tn,
    wave: nn,
    dropdown: zt,
    warning: je,
    tour: ct,
    tooltip: Ft,
    popover: D,
    popconfirm: E,
    floatButtonGroup: be,
    variant: ie,
    inputNumber: Me,
    treeSelect: ye
  };
  process.env.NODE_ENV !== "production" && _n("ConfigProvider")(!("autoInsertSpaceInButton" in e), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const qt = Object.assign({}, b);
  Object.keys(Vt).forEach((Fe) => {
    Vt[Fe] !== void 0 && (qt[Fe] = Vt[Fe]);
  }), Vm.forEach((Fe) => {
    const v = e[Fe];
    v && (qt[Fe] = v);
  }), typeof r < "u" && (qt.button = Object.assign({
    autoInsertSpace: r
  }, qt.button));
  const De = Qa(() => qt, qt, (Fe, v) => {
    const L = Object.keys(Fe), V = Object.keys(v);
    return L.length !== V.length || L.some((oe) => Fe[oe] !== v[oe]);
  }), {
    layer: Ge
  } = S.useContext(Ur), $t = S.useMemo(() => ({
    prefixCls: Te,
    csp: ht,
    layer: Ge ? "antd" : void 0
  }), [Te, ht, Ge]);
  let He = /* @__PURE__ */ S.createElement(S.Fragment, null, /* @__PURE__ */ S.createElement(zm, {
    dropdownMatchSelectWidth: m
  }), n);
  const dn = S.useMemo(() => {
    var Fe, v, L, V;
    return yg(((Fe = Ri.Form) === null || Fe === void 0 ? void 0 : Fe.defaultValidateMessages) || {}, ((L = (v = De.locale) === null || v === void 0 ? void 0 : v.Form) === null || L === void 0 ? void 0 : L.defaultValidateMessages) || {}, ((V = De.form) === null || V === void 0 ? void 0 : V.validateMessages) || {}, (s == null ? void 0 : s.validateMessages) || {});
  }, [De, s == null ? void 0 : s.validateMessages]);
  Object.keys(dn).length > 0 && (He = /* @__PURE__ */ S.createElement(Sg.Provider, {
    value: dn
  }, He)), a && (He = /* @__PURE__ */ S.createElement(f0, {
    locale: a,
    _ANT_MARK__: u0
  }, He)), He = /* @__PURE__ */ S.createElement(ac.Provider, {
    value: $t
  }, He), c && (He = /* @__PURE__ */ S.createElement(Vg, {
    size: c
  }, He)), He = /* @__PURE__ */ S.createElement(Hm, null, He);
  const gr = S.useMemo(() => {
    const Fe = lt || {}, {
      algorithm: v,
      token: L,
      components: V,
      cssVar: oe
    } = Fe, Ce = Fm(Fe, ["algorithm", "token", "components", "cssVar"]), Ae = v && (!Array.isArray(v) || v.length > 0) ? Qs(v) : g0, ge = {};
    Object.entries(V || {}).forEach((at) => {
      let [ze, Ve] = at;
      const qe = Object.assign({}, Ve);
      "algorithm" in qe && (qe.algorithm === !0 ? qe.theme = Ae : (Array.isArray(qe.algorithm) || typeof qe.algorithm == "function") && (qe.theme = Qs(qe.algorithm)), delete qe.algorithm), ge[ze] = qe;
    });
    const xe = Object.assign(Object.assign({}, Dr), L);
    return Object.assign(Object.assign({}, Ce), {
      theme: Ae,
      token: xe,
      components: ge,
      override: Object.assign({
        override: xe
      }, ge),
      cssVar: oe
    });
  }, [lt]);
  return C && (He = /* @__PURE__ */ S.createElement(m0.Provider, {
    value: gr
  }, He)), De.warning && (He = /* @__PURE__ */ S.createElement(c0.Provider, {
    value: De.warning
  }, He)), O !== void 0 && (He = /* @__PURE__ */ S.createElement(Fg, {
    disabled: O
  }, He)), /* @__PURE__ */ S.createElement(Lt.Provider, {
    value: De
  }, He);
}, dr = (e) => {
  const n = S.useContext(Lt), t = S.useContext(l0);
  return /* @__PURE__ */ S.createElement(Gm, Object.assign({
    parentContext: n,
    legacyLocale: t
  }, e));
};
dr.ConfigContext = Lt;
dr.SizeContext = nr;
dr.config = Wm;
dr.useConfig = qg;
Object.defineProperty(dr, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && Wr(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), nr)
});
process.env.NODE_ENV !== "production" && (dr.displayName = "ConfigProvider");
function B0(e) {
  var n;
  return e == null || (n = e.getRootNode) === null || n === void 0 ? void 0 : n.call(e);
}
function Xm(e) {
  return B0(e) instanceof ShadowRoot;
}
function Ym(e) {
  return Xm(e) ? B0(e) : null;
}
function Km(e) {
  return e.replace(/-(.)/g, function(n, t) {
    return t.toUpperCase();
  });
}
function Jm(e, n) {
  yn(e, "[@ant-design/icons] ".concat(n));
}
function Vl(e) {
  return Ee(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (Ee(e.icon) === "object" || typeof e.icon == "function");
}
function ql() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(n, t) {
    var r = e[t];
    switch (t) {
      case "class":
        n.className = r, delete n.class;
        break;
      default:
        delete n[t], n[Km(t)] = r;
    }
    return n;
  }, {});
}
function wa(e, n, t) {
  return t ? /* @__PURE__ */ U.createElement(e.tag, Q(Q({
    key: n
  }, ql(e.attrs)), t), (e.children || []).map(function(r, o) {
    return wa(r, "".concat(n, "-").concat(e.tag, "-").concat(o));
  })) : /* @__PURE__ */ U.createElement(e.tag, Q({
    key: n
  }, ql(e.attrs)), (e.children || []).map(function(r, o) {
    return wa(r, "".concat(n, "-").concat(e.tag, "-").concat(o));
  }));
}
function H0(e) {
  return Br(e)[0];
}
function z0(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var Qm = `
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
`, Zm = function(n) {
  var t = Ot(ac), r = t.csp, o = t.prefixCls, i = t.layer, s = Qm;
  o && (s = s.replace(/anticon/g, o)), i && (s = "@layer ".concat(i, ` {
`).concat(s, `
}`)), Ue(function() {
    var a = n.current, c = Ym(a);
    In(s, "@ant-design-icons", {
      prepend: !i,
      csp: r,
      attachTo: c
    });
  }, []);
}, ev = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], Nr = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function tv(e) {
  var n = e.primaryColor, t = e.secondaryColor;
  Nr.primaryColor = n, Nr.secondaryColor = t || H0(n), Nr.calculated = !!t;
}
function nv() {
  return Q({}, Nr);
}
var hr = function(n) {
  var t = n.icon, r = n.className, o = n.onClick, i = n.style, s = n.primaryColor, a = n.secondaryColor, c = Mn(n, ev), l = S.useRef(), u = Nr;
  if (s && (u = {
    primaryColor: s,
    secondaryColor: a || H0(s)
  }), Zm(l), Jm(Vl(t), "icon should be icon definiton, but got ".concat(t)), !Vl(t))
    return null;
  var f = t;
  return f && typeof f.icon == "function" && (f = Q(Q({}, f), {}, {
    icon: f.icon(u.primaryColor, u.secondaryColor)
  })), wa(f.icon, "svg-".concat(f.name), Q(Q({
    className: r,
    onClick: o,
    style: i,
    "data-icon": f.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, c), {}, {
    ref: l
  }));
};
hr.displayName = "IconReact";
hr.getTwoToneColors = nv;
hr.setTwoToneColors = tv;
function F0(e) {
  var n = z0(e), t = ae(n, 2), r = t[0], o = t[1];
  return hr.setTwoToneColors({
    primaryColor: r,
    secondaryColor: o
  });
}
function rv() {
  var e = hr.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var ov = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
F0(Uo.primary);
var fn = /* @__PURE__ */ S.forwardRef(function(e, n) {
  var t = e.className, r = e.icon, o = e.spin, i = e.rotate, s = e.tabIndex, a = e.onClick, c = e.twoToneColor, l = Mn(e, ov), u = S.useContext(ac), f = u.prefixCls, h = f === void 0 ? "anticon" : f, m = u.rootClassName, d = we(m, h, K(K({}, "".concat(h, "-").concat(r.name), !!r.name), "".concat(h, "-spin"), !!o || r.name === "loading"), t), g = s;
  g === void 0 && a && (g = -1);
  var p = i ? {
    msTransform: "rotate(".concat(i, "deg)"),
    transform: "rotate(".concat(i, "deg)")
  } : void 0, b = z0(c), y = ae(b, 2), C = y[0], O = y[1];
  return /* @__PURE__ */ S.createElement("span", gt({
    role: "img",
    "aria-label": r.name
  }, l, {
    ref: n,
    tabIndex: g,
    onClick: a,
    className: d
  }), /* @__PURE__ */ S.createElement(hr, {
    icon: r,
    primaryColor: C,
    secondaryColor: O,
    style: p
  }));
});
fn.displayName = "AntdIcon";
fn.getTwoToneColor = rv;
fn.setTwoToneColor = F0;
var iv = function(n, t) {
  return /* @__PURE__ */ S.createElement(fn, gt({}, n, {
    ref: t,
    icon: Fx
  }));
}, V0 = /* @__PURE__ */ S.forwardRef(iv);
process.env.NODE_ENV !== "production" && (V0.displayName = "CheckCircleFilled");
var sv = function(n, t) {
  return /* @__PURE__ */ S.createElement(fn, gt({}, n, {
    ref: t,
    icon: Vx
  }));
}, q0 = /* @__PURE__ */ S.forwardRef(sv);
process.env.NODE_ENV !== "production" && (q0.displayName = "CloseCircleFilled");
var av = function(n, t) {
  return /* @__PURE__ */ S.createElement(fn, gt({}, n, {
    ref: t,
    icon: qx
  }));
}, U0 = /* @__PURE__ */ S.forwardRef(av);
process.env.NODE_ENV !== "production" && (U0.displayName = "CloseOutlined");
var cv = function(n, t) {
  return /* @__PURE__ */ S.createElement(fn, gt({}, n, {
    ref: t,
    icon: Ux
  }));
}, W0 = /* @__PURE__ */ S.forwardRef(cv);
process.env.NODE_ENV !== "production" && (W0.displayName = "ExclamationCircleFilled");
var lv = function(n, t) {
  return /* @__PURE__ */ S.createElement(fn, gt({}, n, {
    ref: t,
    icon: Wx
  }));
}, G0 = /* @__PURE__ */ S.forwardRef(lv);
process.env.NODE_ENV !== "production" && (G0.displayName = "InfoCircleFilled");
var uv = `accept acceptCharset accessKey action allowFullScreen allowTransparency
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
    summary tabIndex target title type useMap value width wmode wrap`, fv = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, dv = "".concat(uv, " ").concat(fv).split(/[\s\n]+/), hv = "aria-", xv = "data-";
function Ul(e, n) {
  return e.indexOf(n) === 0;
}
function pv(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, t;
  n === !1 ? t = {
    aria: !0,
    data: !0,
    attr: !0
  } : n === !0 ? t = {
    aria: !0
  } : t = Q({}, n);
  var r = {};
  return Object.keys(e).forEach(function(o) {
    // Aria
    (t.aria && (o === "role" || Ul(o, hv)) || // Data
    t.data && Ul(o, xv) || // Attr
    t.attr && dv.includes(o)) && (r[o] = e[o]);
  }), r;
}
function gv(e) {
  return e && /* @__PURE__ */ U.isValidElement(e) && e.type === U.Fragment;
}
const X0 = (e, n, t) => /* @__PURE__ */ U.isValidElement(e) ? /* @__PURE__ */ U.cloneElement(e, typeof t == "function" ? t(e.props || {}) : t) : n;
function hc(e, n) {
  return X0(e, e, n);
}
const po = (e, n, t, r, o) => ({
  background: e,
  border: `${cn(r.lineWidth)} ${r.lineType} ${n}`,
  [`${o}-icon`]: {
    color: t
  }
}), mv = (e) => {
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
    withDescriptionIconSize: u,
    colorText: f,
    colorTextHeading: h,
    withDescriptionPadding: m,
    defaultPadding: d
  } = e;
  return {
    [n]: Object.assign(Object.assign({}, w0(e)), {
      position: "relative",
      display: "flex",
      alignItems: "center",
      padding: d,
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
        color: h
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
      padding: m,
      [`${n}-icon`]: {
        marginInlineEnd: o,
        fontSize: u,
        lineHeight: 0
      },
      [`${n}-message`]: {
        display: "block",
        marginBottom: r,
        color: h,
        fontSize: s
      },
      [`${n}-description`]: {
        display: "block",
        color: f
      }
    },
    [`${n}-banner`]: {
      marginBottom: 0,
      border: "0 !important",
      borderRadius: 0
    }
  };
}, vv = (e) => {
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
    colorErrorBg: u,
    colorInfo: f,
    colorInfoBorder: h,
    colorInfoBg: m
  } = e;
  return {
    [n]: {
      "&-success": po(o, r, t, e, n),
      "&-info": po(m, h, f, e, n),
      "&-warning": po(a, s, i, e, n),
      "&-error": Object.assign(Object.assign({}, po(u, l, c, e, n)), {
        [`${n}-description > pre`]: {
          margin: 0,
          padding: 0
        }
      })
    }
  };
}, bv = (e) => {
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
        lineHeight: cn(i),
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
}, yv = (e) => ({
  withDescriptionIconSize: e.fontSizeHeading3,
  defaultPadding: `${e.paddingContentVerticalSM}px 12px`,
  withDescriptionPadding: `${e.paddingMD}px ${e.paddingContentHorizontalLG}px`
}), _v = Ai("Alert", (e) => [mv(e), vv(e), bv(e)], yv);
var Wl = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
const Sv = {
  success: V0,
  info: G0,
  error: q0,
  warning: W0
}, Cv = (e) => {
  const {
    icon: n,
    prefixCls: t,
    type: r
  } = e, o = Sv[r] || null;
  return n ? X0(n, /* @__PURE__ */ S.createElement("span", {
    className: `${t}-icon`
  }, n), () => ({
    className: we(`${t}-icon`, n.props.className)
  })) : /* @__PURE__ */ S.createElement(o, {
    className: `${t}-icon`
  });
}, wv = (e) => {
  const {
    isClosable: n,
    prefixCls: t,
    closeIcon: r,
    handleClose: o,
    ariaProps: i
  } = e, s = r === !0 || r === void 0 ? /* @__PURE__ */ S.createElement(U0, null) : r;
  return n ? /* @__PURE__ */ S.createElement("button", Object.assign({
    type: "button",
    onClick: o,
    className: `${t}-close-icon`,
    tabIndex: 0
  }, i), s) : null;
}, xc = /* @__PURE__ */ S.forwardRef((e, n) => {
  const {
    description: t,
    prefixCls: r,
    message: o,
    banner: i,
    className: s,
    rootClassName: a,
    style: c,
    onMouseEnter: l,
    onMouseLeave: u,
    onClick: f,
    afterClose: h,
    showIcon: m,
    closable: d,
    closeText: g,
    closeIcon: p,
    action: b,
    id: y
  } = e, C = Wl(e, ["description", "prefixCls", "message", "banner", "className", "rootClassName", "style", "onMouseEnter", "onMouseLeave", "onClick", "afterClose", "showIcon", "closable", "closeText", "closeIcon", "action", "id"]), [O, x] = S.useState(!1);
  process.env.NODE_ENV !== "production" && _n("Alert").deprecated(!g, "closeText", "closable.closeIcon");
  const R = S.useRef(null);
  S.useImperativeHandle(n, () => ({
    nativeElement: R.current
  }));
  const {
    getPrefixCls: _,
    direction: j,
    closable: M,
    closeIcon: X,
    className: re,
    style: te
  } = uc("alert"), z = _("alert", r), [W, Z, N] = _v(z), A = (ce) => {
    var ue;
    x(!0), (ue = e.onClose) === null || ue === void 0 || ue.call(e, ce);
  }, P = S.useMemo(() => e.type !== void 0 ? e.type : i ? "warning" : "info", [e.type, i]), k = S.useMemo(() => typeof d == "object" && d.closeIcon || g ? !0 : typeof d == "boolean" ? d : p !== !1 && p !== null && p !== void 0 ? !0 : !!M, [g, p, d, M]), B = i && m === void 0 ? !0 : m, H = we(z, `${z}-${P}`, {
    [`${z}-with-description`]: !!t,
    [`${z}-no-icon`]: !B,
    [`${z}-banner`]: !!i,
    [`${z}-rtl`]: j === "rtl"
  }, re, s, a, N, Z), J = pv(C, {
    aria: !0,
    data: !0
  }), ne = S.useMemo(() => typeof d == "object" && d.closeIcon ? d.closeIcon : g || (p !== void 0 ? p : typeof M == "object" && M.closeIcon ? M.closeIcon : X), [p, d, g, X]), ee = S.useMemo(() => {
    const ce = d ?? M;
    if (typeof ce == "object") {
      const {
        closeIcon: ue
      } = ce;
      return Wl(ce, ["closeIcon"]);
    }
    return {};
  }, [d, M]);
  return W(/* @__PURE__ */ S.createElement($i, {
    visible: !O,
    motionName: `${z}-motion`,
    motionAppear: !1,
    motionEnter: !1,
    onLeaveStart: (ce) => ({
      maxHeight: ce.offsetHeight
    }),
    onLeaveEnd: h
  }, (ce, ue) => {
    let {
      className: de,
      style: Oe
    } = ce;
    return /* @__PURE__ */ S.createElement("div", Object.assign({
      id: y,
      ref: Ci(R, ue),
      "data-show": !O,
      className: we(H, de),
      style: Object.assign(Object.assign(Object.assign({}, te), c), Oe),
      onMouseEnter: l,
      onMouseLeave: u,
      onClick: f,
      role: "alert"
    }, J), B ? /* @__PURE__ */ S.createElement(Cv, {
      description: t,
      icon: e.icon,
      prefixCls: z,
      type: P
    }) : null, /* @__PURE__ */ S.createElement("div", {
      className: `${z}-content`
    }, o ? /* @__PURE__ */ S.createElement("div", {
      className: `${z}-message`
    }, o) : null, t ? /* @__PURE__ */ S.createElement("div", {
      className: `${z}-description`
    }, t) : null), b ? /* @__PURE__ */ S.createElement("div", {
      className: `${z}-action`
    }, b) : null, /* @__PURE__ */ S.createElement(wv, {
      isClosable: k,
      prefixCls: z,
      closeIcon: ne,
      handleClose: A,
      ariaProps: ee
    }));
  }));
});
process.env.NODE_ENV !== "production" && (xc.displayName = "Alert");
function Ev(e, n, t) {
  return n = Qn(n), Pf(e, Za() ? Reflect.construct(n, t || [], Qn(e).constructor) : n.apply(e, t));
}
let Ov = /* @__PURE__ */ function(e) {
  function n() {
    var t;
    return yt(this, n), t = Ev(this, n, arguments), t.state = {
      error: void 0,
      info: {
        componentStack: ""
      }
    }, t;
  }
  return ur(n, e), _t(n, [{
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
      } = this.state, l = (c == null ? void 0 : c.componentStack) || null, u = typeof r > "u" ? (a || "").toString() : r, f = typeof o > "u" ? l : o;
      return a ? /* @__PURE__ */ S.createElement(xc, {
        id: i,
        type: "error",
        message: u,
        description: /* @__PURE__ */ S.createElement("pre", {
          style: {
            fontSize: "0.9em",
            overflowX: "auto"
          }
        }, f)
      }) : s;
    }
  }]);
}(S.Component);
const Y0 = xc;
Y0.ErrorBoundary = Ov;
var Tv = function(n, t) {
  return /* @__PURE__ */ S.createElement(fn, gt({}, n, {
    ref: t,
    icon: Gx
  }));
}, K0 = /* @__PURE__ */ S.forwardRef(Tv);
process.env.NODE_ENV !== "production" && (K0.displayName = "LoadingOutlined");
function zr() {
  zr = function() {
    return n;
  };
  var e, n = {}, t = Object.prototype, r = t.hasOwnProperty, o = Object.defineProperty || function(N, A, P) {
    N[A] = P.value;
  }, i = typeof Symbol == "function" ? Symbol : {}, s = i.iterator || "@@iterator", a = i.asyncIterator || "@@asyncIterator", c = i.toStringTag || "@@toStringTag";
  function l(N, A, P) {
    return Object.defineProperty(N, A, {
      value: P,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), N[A];
  }
  try {
    l({}, "");
  } catch {
    l = function(P, k, B) {
      return P[k] = B;
    };
  }
  function u(N, A, P, k) {
    var B = A && A.prototype instanceof b ? A : b, H = Object.create(B.prototype), J = new W(k || []);
    return o(H, "_invoke", {
      value: X(N, P, J)
    }), H;
  }
  function f(N, A, P) {
    try {
      return {
        type: "normal",
        arg: N.call(A, P)
      };
    } catch (k) {
      return {
        type: "throw",
        arg: k
      };
    }
  }
  n.wrap = u;
  var h = "suspendedStart", m = "suspendedYield", d = "executing", g = "completed", p = {};
  function b() {
  }
  function y() {
  }
  function C() {
  }
  var O = {};
  l(O, s, function() {
    return this;
  });
  var x = Object.getPrototypeOf, R = x && x(x(Z([])));
  R && R !== t && r.call(R, s) && (O = R);
  var _ = C.prototype = b.prototype = Object.create(O);
  function j(N) {
    ["next", "throw", "return"].forEach(function(A) {
      l(N, A, function(P) {
        return this._invoke(A, P);
      });
    });
  }
  function M(N, A) {
    function P(B, H, J, ne) {
      var ee = f(N[B], N, H);
      if (ee.type !== "throw") {
        var ce = ee.arg, ue = ce.value;
        return ue && Ee(ue) == "object" && r.call(ue, "__await") ? A.resolve(ue.__await).then(function(de) {
          P("next", de, J, ne);
        }, function(de) {
          P("throw", de, J, ne);
        }) : A.resolve(ue).then(function(de) {
          ce.value = de, J(ce);
        }, function(de) {
          return P("throw", de, J, ne);
        });
      }
      ne(ee.arg);
    }
    var k;
    o(this, "_invoke", {
      value: function(H, J) {
        function ne() {
          return new A(function(ee, ce) {
            P(H, J, ee, ce);
          });
        }
        return k = k ? k.then(ne, ne) : ne();
      }
    });
  }
  function X(N, A, P) {
    var k = h;
    return function(B, H) {
      if (k === d) throw Error("Generator is already running");
      if (k === g) {
        if (B === "throw") throw H;
        return {
          value: e,
          done: !0
        };
      }
      for (P.method = B, P.arg = H; ; ) {
        var J = P.delegate;
        if (J) {
          var ne = re(J, P);
          if (ne) {
            if (ne === p) continue;
            return ne;
          }
        }
        if (P.method === "next") P.sent = P._sent = P.arg;
        else if (P.method === "throw") {
          if (k === h) throw k = g, P.arg;
          P.dispatchException(P.arg);
        } else P.method === "return" && P.abrupt("return", P.arg);
        k = d;
        var ee = f(N, A, P);
        if (ee.type === "normal") {
          if (k = P.done ? g : m, ee.arg === p) continue;
          return {
            value: ee.arg,
            done: P.done
          };
        }
        ee.type === "throw" && (k = g, P.method = "throw", P.arg = ee.arg);
      }
    };
  }
  function re(N, A) {
    var P = A.method, k = N.iterator[P];
    if (k === e) return A.delegate = null, P === "throw" && N.iterator.return && (A.method = "return", A.arg = e, re(N, A), A.method === "throw") || P !== "return" && (A.method = "throw", A.arg = new TypeError("The iterator does not provide a '" + P + "' method")), p;
    var B = f(k, N.iterator, A.arg);
    if (B.type === "throw") return A.method = "throw", A.arg = B.arg, A.delegate = null, p;
    var H = B.arg;
    return H ? H.done ? (A[N.resultName] = H.value, A.next = N.nextLoc, A.method !== "return" && (A.method = "next", A.arg = e), A.delegate = null, p) : H : (A.method = "throw", A.arg = new TypeError("iterator result is not an object"), A.delegate = null, p);
  }
  function te(N) {
    var A = {
      tryLoc: N[0]
    };
    1 in N && (A.catchLoc = N[1]), 2 in N && (A.finallyLoc = N[2], A.afterLoc = N[3]), this.tryEntries.push(A);
  }
  function z(N) {
    var A = N.completion || {};
    A.type = "normal", delete A.arg, N.completion = A;
  }
  function W(N) {
    this.tryEntries = [{
      tryLoc: "root"
    }], N.forEach(te, this), this.reset(!0);
  }
  function Z(N) {
    if (N || N === "") {
      var A = N[s];
      if (A) return A.call(N);
      if (typeof N.next == "function") return N;
      if (!isNaN(N.length)) {
        var P = -1, k = function B() {
          for (; ++P < N.length; ) if (r.call(N, P)) return B.value = N[P], B.done = !1, B;
          return B.value = e, B.done = !0, B;
        };
        return k.next = k;
      }
    }
    throw new TypeError(Ee(N) + " is not iterable");
  }
  return y.prototype = C, o(_, "constructor", {
    value: C,
    configurable: !0
  }), o(C, "constructor", {
    value: y,
    configurable: !0
  }), y.displayName = l(C, c, "GeneratorFunction"), n.isGeneratorFunction = function(N) {
    var A = typeof N == "function" && N.constructor;
    return !!A && (A === y || (A.displayName || A.name) === "GeneratorFunction");
  }, n.mark = function(N) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(N, C) : (N.__proto__ = C, l(N, c, "GeneratorFunction")), N.prototype = Object.create(_), N;
  }, n.awrap = function(N) {
    return {
      __await: N
    };
  }, j(M.prototype), l(M.prototype, a, function() {
    return this;
  }), n.AsyncIterator = M, n.async = function(N, A, P, k, B) {
    B === void 0 && (B = Promise);
    var H = new M(u(N, A, P, k), B);
    return n.isGeneratorFunction(A) ? H : H.next().then(function(J) {
      return J.done ? J.value : H.next();
    });
  }, j(_), l(_, c, "Generator"), l(_, s, function() {
    return this;
  }), l(_, "toString", function() {
    return "[object Generator]";
  }), n.keys = function(N) {
    var A = Object(N), P = [];
    for (var k in A) P.push(k);
    return P.reverse(), function B() {
      for (; P.length; ) {
        var H = P.pop();
        if (H in A) return B.value = H, B.done = !1, B;
      }
      return B.done = !0, B;
    };
  }, n.values = Z, W.prototype = {
    constructor: W,
    reset: function(A) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(z), !A) for (var P in this) P.charAt(0) === "t" && r.call(this, P) && !isNaN(+P.slice(1)) && (this[P] = e);
    },
    stop: function() {
      this.done = !0;
      var A = this.tryEntries[0].completion;
      if (A.type === "throw") throw A.arg;
      return this.rval;
    },
    dispatchException: function(A) {
      if (this.done) throw A;
      var P = this;
      function k(ce, ue) {
        return J.type = "throw", J.arg = A, P.next = ce, ue && (P.method = "next", P.arg = e), !!ue;
      }
      for (var B = this.tryEntries.length - 1; B >= 0; --B) {
        var H = this.tryEntries[B], J = H.completion;
        if (H.tryLoc === "root") return k("end");
        if (H.tryLoc <= this.prev) {
          var ne = r.call(H, "catchLoc"), ee = r.call(H, "finallyLoc");
          if (ne && ee) {
            if (this.prev < H.catchLoc) return k(H.catchLoc, !0);
            if (this.prev < H.finallyLoc) return k(H.finallyLoc);
          } else if (ne) {
            if (this.prev < H.catchLoc) return k(H.catchLoc, !0);
          } else {
            if (!ee) throw Error("try statement without catch or finally");
            if (this.prev < H.finallyLoc) return k(H.finallyLoc);
          }
        }
      }
    },
    abrupt: function(A, P) {
      for (var k = this.tryEntries.length - 1; k >= 0; --k) {
        var B = this.tryEntries[k];
        if (B.tryLoc <= this.prev && r.call(B, "finallyLoc") && this.prev < B.finallyLoc) {
          var H = B;
          break;
        }
      }
      H && (A === "break" || A === "continue") && H.tryLoc <= P && P <= H.finallyLoc && (H = null);
      var J = H ? H.completion : {};
      return J.type = A, J.arg = P, H ? (this.method = "next", this.next = H.finallyLoc, p) : this.complete(J);
    },
    complete: function(A, P) {
      if (A.type === "throw") throw A.arg;
      return A.type === "break" || A.type === "continue" ? this.next = A.arg : A.type === "return" ? (this.rval = this.arg = A.arg, this.method = "return", this.next = "end") : A.type === "normal" && P && (this.next = P), p;
    },
    finish: function(A) {
      for (var P = this.tryEntries.length - 1; P >= 0; --P) {
        var k = this.tryEntries[P];
        if (k.finallyLoc === A) return this.complete(k.completion, k.afterLoc), z(k), p;
      }
    },
    catch: function(A) {
      for (var P = this.tryEntries.length - 1; P >= 0; --P) {
        var k = this.tryEntries[P];
        if (k.tryLoc === A) {
          var B = k.completion;
          if (B.type === "throw") {
            var H = B.arg;
            z(k);
          }
          return H;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function(A, P, k) {
      return this.delegate = {
        iterator: Z(A),
        resultName: P,
        nextLoc: k
      }, this.method === "next" && (this.arg = e), p;
    }
  }, n;
}
function Gl(e, n, t, r, o, i, s) {
  try {
    var a = e[i](s), c = a.value;
  } catch (l) {
    return void t(l);
  }
  a.done ? n(c) : Promise.resolve(c).then(r, o);
}
function J0(e) {
  return function() {
    var n = this, t = arguments;
    return new Promise(function(r, o) {
      var i = e.apply(n, t);
      function s(c) {
        Gl(i, r, o, s, a, "next", c);
      }
      function a(c) {
        Gl(i, r, o, s, a, "throw", c);
      }
      s(void 0);
    });
  };
}
var Xr = Q({}, Tu), Rv = Xr.version, gs = Xr.render, Av = Xr.unmountComponentAtNode, Pi;
try {
  var $v = Number((Rv || "").split(".")[0]);
  $v >= 18 && (Pi = Xr.createRoot);
} catch {
}
function Xl(e) {
  var n = Xr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  n && Ee(n) === "object" && (n.usingClientEntryPoint = e);
}
var Xo = "__rc_react_root__";
function Pv(e, n) {
  Xl(!0);
  var t = n[Xo] || Pi(n);
  Xl(!1), t.render(e), n[Xo] = t;
}
function Iv(e, n) {
  gs == null || gs(e, n);
}
function Nv(e, n) {
  if (Pi) {
    Pv(e, n);
    return;
  }
  Iv(e, n);
}
function kv(e) {
  return Ea.apply(this, arguments);
}
function Ea() {
  return Ea = J0(/* @__PURE__ */ zr().mark(function e(n) {
    return zr().wrap(function(r) {
      for (; ; ) switch (r.prev = r.next) {
        case 0:
          return r.abrupt("return", Promise.resolve().then(function() {
            var o;
            (o = n[Xo]) === null || o === void 0 || o.unmount(), delete n[Xo];
          }));
        case 1:
        case "end":
          return r.stop();
      }
    }, e);
  })), Ea.apply(this, arguments);
}
function jv(e) {
  Av(e);
}
function Mv(e) {
  return Oa.apply(this, arguments);
}
function Oa() {
  return Oa = J0(/* @__PURE__ */ zr().mark(function e(n) {
    return zr().wrap(function(r) {
      for (; ; ) switch (r.prev = r.next) {
        case 0:
          if (Pi === void 0) {
            r.next = 2;
            break;
          }
          return r.abrupt("return", kv(n));
        case 2:
          jv(n);
        case 3:
        case "end":
          return r.stop();
      }
    }, e);
  })), Oa.apply(this, arguments);
}
const Lv = (e, n) => {
  if (process.env.NODE_ENV !== "production") {
    const t = parseInt(S.version.split(".")[0], 10), r = Object.keys(Tu);
    process.env.NODE_ENV !== "production" && Wr(t < 19 || r.includes("createRoot"), "compatible", "antd v5 support React is 16 ~ 18. see https://u.ant.design/v5-for-19 for compatible.");
  }
  return Nv(e, n), () => Mv(n);
};
let Dv = Lv;
function Bv() {
  return Dv;
}
function Q0(e, n) {
  var t = Object.assign({}, e);
  return Array.isArray(n) && n.forEach(function(r) {
    delete t[r];
  }), t;
}
const Hv = function(e) {
  if (!e)
    return !1;
  if (e instanceof Element) {
    if (e.offsetParent)
      return !0;
    if (e.getBBox) {
      var n = e.getBBox(), t = n.width, r = n.height;
      if (t || r)
        return !0;
    }
    if (e.getBoundingClientRect) {
      var o = e.getBoundingClientRect(), i = o.width, s = o.height;
      if (i || s)
        return !0;
    }
  }
  return !1;
}, zv = (e) => {
  const {
    componentCls: n,
    colorPrimary: t
  } = e;
  return {
    [n]: {
      position: "absolute",
      background: "transparent",
      pointerEvents: "none",
      boxSizing: "border-box",
      color: `var(--wave-color, ${t})`,
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
}, Fv = dm("Wave", (e) => [zv(e)]), Z0 = `${Wo}-wave-target`;
function ms(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
  e !== "transparent";
}
function Vv(e) {
  const {
    borderTopColor: n,
    borderColor: t,
    backgroundColor: r
  } = getComputedStyle(e);
  return ms(n) ? n : ms(t) ? t : ms(r) ? r : null;
}
function vs(e) {
  return Number.isNaN(e) ? 0 : e;
}
const qv = (e) => {
  const {
    className: n,
    target: t,
    component: r,
    registerUnmount: o
  } = e, i = S.useRef(null), s = S.useRef(null);
  S.useEffect(() => {
    s.current = o();
  }, []);
  const [a, c] = S.useState(null), [l, u] = S.useState([]), [f, h] = S.useState(0), [m, d] = S.useState(0), [g, p] = S.useState(0), [b, y] = S.useState(0), [C, O] = S.useState(!1), x = {
    left: f,
    top: m,
    width: g,
    height: b,
    borderRadius: l.map((j) => `${j}px`).join(" ")
  };
  a && (x["--wave-color"] = a);
  function R() {
    const j = getComputedStyle(t);
    c(Vv(t));
    const M = j.position === "static", {
      borderLeftWidth: X,
      borderTopWidth: re
    } = j;
    h(M ? t.offsetLeft : vs(-parseFloat(X))), d(M ? t.offsetTop : vs(-parseFloat(re))), p(t.offsetWidth), y(t.offsetHeight);
    const {
      borderTopLeftRadius: te,
      borderTopRightRadius: z,
      borderBottomLeftRadius: W,
      borderBottomRightRadius: Z
    } = j;
    u([te, z, Z, W].map((N) => vs(parseFloat(N))));
  }
  if (S.useEffect(() => {
    if (t) {
      const j = vn(() => {
        R(), O(!0);
      });
      let M;
      return typeof ResizeObserver < "u" && (M = new ResizeObserver(R), M.observe(t)), () => {
        vn.cancel(j), M == null || M.disconnect();
      };
    }
  }, []), !C)
    return null;
  const _ = (r === "Checkbox" || r === "Radio") && (t == null ? void 0 : t.classList.contains(Z0));
  return /* @__PURE__ */ S.createElement($i, {
    visible: !0,
    motionAppear: !0,
    motionName: "wave-motion",
    motionDeadline: 5e3,
    onAppearEnd: (j, M) => {
      var X, re;
      if (M.deadline || M.propertyName === "opacity") {
        const te = (X = i.current) === null || X === void 0 ? void 0 : X.parentElement;
        (re = s.current) === null || re === void 0 || re.call(s).then(() => {
          te == null || te.remove();
        });
      }
      return !1;
    }
  }, (j, M) => {
    let {
      className: X
    } = j;
    return /* @__PURE__ */ S.createElement("div", {
      ref: Ci(i, M),
      className: we(n, X, {
        "wave-quick": _
      }),
      style: x
    });
  });
}, Uv = (e, n) => {
  var t;
  const {
    component: r
  } = n;
  if (r === "Checkbox" && !(!((t = e.querySelector("input")) === null || t === void 0) && t.checked))
    return;
  const o = document.createElement("div");
  o.style.position = "absolute", o.style.left = "0px", o.style.top = "0px", e == null || e.insertBefore(o, e == null ? void 0 : e.firstChild);
  const i = Bv();
  let s = null;
  function a() {
    return s;
  }
  s = i(/* @__PURE__ */ S.createElement(qv, Object.assign({}, n, {
    target: e,
    registerUnmount: a
  })), o);
}, Wv = (e, n, t) => {
  const {
    wave: r
  } = S.useContext(Lt), [, o, i] = Gr(), s = bn((l) => {
    const u = e.current;
    if (r != null && r.disabled || !u)
      return;
    const f = u.querySelector(`.${Z0}`) || u, {
      showEffect: h
    } = r || {};
    (h || Uv)(f, {
      className: n,
      token: o,
      component: t,
      event: l,
      hashId: i
    });
  }), a = S.useRef(null);
  return (l) => {
    vn.cancel(a.current), a.current = vn(() => {
      s(l);
    });
  };
}, ed = (e) => {
  const {
    children: n,
    disabled: t,
    component: r
  } = e, {
    getPrefixCls: o
  } = Ot(Lt), i = Se(null), s = o("wave"), [, a] = Fv(s), c = Wv(i, we(s, a), r);
  if (U.useEffect(() => {
    const u = i.current;
    if (!u || u.nodeType !== 1 || t)
      return;
    const f = (h) => {
      !Hv(h.target) || // No need wave
      !u.getAttribute || u.getAttribute("disabled") || u.disabled || u.className.includes("disabled") || u.className.includes("-leave") || c(h);
    };
    return u.addEventListener("click", f, !0), () => {
      u.removeEventListener("click", f, !0);
    };
  }, [t]), !/* @__PURE__ */ U.isValidElement(n))
    return n ?? null;
  const l = Rf(n) ? Ci($f(n), i) : i;
  return hc(n, {
    ref: l
  });
};
process.env.NODE_ENV !== "production" && (ed.displayName = "Wave");
const Gv = (e) => {
  const n = U.useContext(nr);
  return U.useMemo(() => e ? typeof e == "string" ? e ?? n : typeof e == "function" ? e(n) : n : n, [e, n]);
}, Xv = /* @__PURE__ */ S.createContext(null), Yv = (e, n) => {
  const t = S.useContext(Xv), r = S.useMemo(() => {
    if (!t)
      return "";
    const {
      compactDirection: o,
      isFirstItem: i,
      isLastItem: s
    } = t, a = o === "vertical" ? "-vertical-" : "-";
    return we(`${e}-compact${a}item`, {
      [`${e}-compact${a}first-item`]: i,
      [`${e}-compact${a}last-item`]: s,
      [`${e}-compact${a}item-rtl`]: n === "rtl"
    });
  }, [e, n, t]);
  return {
    compactSize: t == null ? void 0 : t.compactSize,
    compactDirection: t == null ? void 0 : t.compactDirection,
    compactItemClassnames: r
  };
};
var Kv = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
const td = /* @__PURE__ */ S.createContext(void 0), Jv = (e) => {
  const {
    getPrefixCls: n,
    direction: t
  } = S.useContext(Lt), {
    prefixCls: r,
    size: o,
    className: i
  } = e, s = Kv(e, ["prefixCls", "size", "className"]), a = n("btn-group", r), [, , c] = Gr(), l = S.useMemo(() => {
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
    const f = _n("Button.Group");
    f.deprecated(!1, "Button.Group", "Space.Compact"), process.env.NODE_ENV !== "production" && f(!o || ["large", "small", "middle"].includes(o), "usage", "Invalid prop `size`.");
  }
  const u = we(a, {
    [`${a}-${l}`]: l,
    [`${a}-rtl`]: t === "rtl"
  }, i, c);
  return /* @__PURE__ */ S.createElement(td.Provider, {
    value: o
  }, /* @__PURE__ */ S.createElement("div", Object.assign({}, s, {
    className: u
  })));
}, Yl = /^[\u4E00-\u9FA5]{2}$/, Ta = Yl.test.bind(Yl);
function Kl(e) {
  return typeof e == "string";
}
function go(e) {
  return e === "text" || e === "link";
}
function Qv(e, n) {
  if (e == null)
    return;
  const t = n ? " " : "";
  return typeof e != "string" && typeof e != "number" && Kl(e.type) && Ta(e.props.children) ? hc(e, {
    children: e.props.children.split("").join(t)
  }) : Kl(e) ? Ta(e) ? /* @__PURE__ */ U.createElement("span", null, e.split("").join(t)) : /* @__PURE__ */ U.createElement("span", null, e) : gv(e) ? /* @__PURE__ */ U.createElement("span", null, e) : e;
}
function Zv(e, n) {
  let t = !1;
  const r = [];
  return U.Children.forEach(e, (o) => {
    const i = typeof o, s = i === "string" || i === "number";
    if (t && s) {
      const a = r.length - 1, c = r[a];
      r[a] = `${c}${o}`;
    } else
      r.push(o);
    t = s;
  }), U.Children.map(r, (o) => Qv(o, n));
}
["default", "primary", "danger"].concat(Yt(fc));
const Ra = /* @__PURE__ */ ir((e, n) => {
  const {
    className: t,
    style: r,
    children: o,
    prefixCls: i
  } = e, s = we(`${i}-icon`, t);
  return /* @__PURE__ */ U.createElement("span", {
    ref: n,
    className: s,
    style: r
  }, o);
}), Jl = /* @__PURE__ */ ir((e, n) => {
  const {
    prefixCls: t,
    className: r,
    style: o,
    iconClassName: i
  } = e, s = we(`${t}-loading-icon`, r);
  return /* @__PURE__ */ U.createElement(Ra, {
    prefixCls: t,
    className: s,
    style: o,
    ref: n
  }, /* @__PURE__ */ U.createElement(K0, {
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
}), eb = (e) => {
  const {
    prefixCls: n,
    loading: t,
    existIcon: r,
    className: o,
    style: i,
    mount: s
  } = e, a = !!t;
  return r ? /* @__PURE__ */ U.createElement(Jl, {
    prefixCls: n,
    className: o,
    style: i
  }) : /* @__PURE__ */ U.createElement($i, {
    visible: a,
    // Used for minus flex gap style only
    motionName: `${n}-loading-icon-motion`,
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
      style: f
    } = c;
    const h = Object.assign(Object.assign({}, i), f);
    return /* @__PURE__ */ U.createElement(Jl, {
      prefixCls: n,
      className: we(o, u),
      style: h,
      ref: l
    });
  });
}, Ql = (e, n) => ({
  // Border
  [`> span, > ${e}`]: {
    "&:not(:last-child)": {
      [`&, & > ${e}`]: {
        "&:not(:disabled)": {
          borderInlineEndColor: n
        }
      }
    },
    "&:not(:first-child)": {
      [`&, & > ${e}`]: {
        "&:not(:disabled)": {
          borderInlineStartColor: n
        }
      }
    }
  }
}), tb = (e) => {
  const {
    componentCls: n,
    fontSize: t,
    lineWidth: r,
    groupBorderColor: o,
    colorErrorHover: i
  } = e;
  return {
    [`${n}-group`]: [
      {
        position: "relative",
        display: "inline-flex",
        // Border
        [`> span, > ${n}`]: {
          "&:not(:last-child)": {
            [`&, & > ${n}`]: {
              borderStartEndRadius: 0,
              borderEndEndRadius: 0
            }
          },
          "&:not(:first-child)": {
            marginInlineStart: e.calc(r).mul(-1).equal(),
            [`&, & > ${n}`]: {
              borderStartStartRadius: 0,
              borderEndStartRadius: 0
            }
          }
        },
        [n]: {
          position: "relative",
          zIndex: 1,
          "&:hover, &:focus, &:active": {
            zIndex: 2
          },
          "&[disabled]": {
            zIndex: 0
          }
        },
        [`${n}-icon-only`]: {
          fontSize: t
        }
      },
      // Border Color
      Ql(`${n}-primary`, o),
      Ql(`${n}-danger`, i)
    ]
  };
}, ot = Math.round;
function _s(e, n) {
  const t = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], r = t.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    r[o] = n(r[o] || 0, t[o] || "", o);
  return t[3] ? r[3] = t[3].includes("%") ? r[3] / 100 : r[3] : r[3] = 1, r;
}
const Zl = (e, n, t) => t === 0 ? e : e / 100;
function wr(e, n) {
  const t = n || 255;
  return e > t ? t : e < 0 ? 0 : e;
}
class Ii {
  constructor(n) {
    K(this, "isValid", !0), K(this, "r", 0), K(this, "g", 0), K(this, "b", 0), K(this, "a", 1), K(this, "_h", void 0), K(this, "_s", void 0), K(this, "_l", void 0), K(this, "_v", void 0), K(this, "_max", void 0), K(this, "_min", void 0), K(this, "_brightness", void 0);
    function t(r) {
      return r[0] in n && r[1] in n && r[2] in n;
    }
    if (n) if (typeof n == "string") {
      let o = function(i) {
        return r.startsWith(i);
      };
      const r = n.trim();
      /^#?[A-F\d]{3,8}$/i.test(r) ? this.fromHexString(r) : o("rgb") ? this.fromRgbString(r) : o("hsl") ? this.fromHslString(r) : (o("hsv") || o("hsb")) && this.fromHsvString(r);
    } else if (n instanceof Ii)
      this.r = n.r, this.g = n.g, this.b = n.b, this.a = n.a, this._h = n._h, this._s = n._s, this._l = n._l, this._v = n._v;
    else if (t("rgb"))
      this.r = wr(n.r), this.g = wr(n.g), this.b = wr(n.b), this.a = typeof n.a == "number" ? wr(n.a, 1) : 1;
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
      n === 0 ? this._h = 0 : this._h = ot(60 * (this.r === this.getMax() ? (this.g - this.b) / n + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / n + 2 : (this.r - this.g) / n + 4));
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
    const t = this._c(n), r = this.a + t.a * (1 - this.a), o = (i) => ot((this[i] * this.a + t[i] * t.a * (1 - this.a)) / r);
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
      const i = ot(this.a * 255).toString(16);
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
    const n = this.getHue(), t = ot(this.getSaturation() * 100), r = ot(this.getLightness() * 100);
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
    return o[n] = wr(t, r), o;
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
      const h = ot(r * 255);
      this.r = h, this.g = h, this.b = h;
    }
    let i = 0, s = 0, a = 0;
    const c = n / 60, l = (1 - Math.abs(2 * r - 1)) * t, u = l * (1 - Math.abs(c % 2 - 1));
    c >= 0 && c < 1 ? (i = l, s = u) : c >= 1 && c < 2 ? (i = u, s = l) : c >= 2 && c < 3 ? (s = l, a = u) : c >= 3 && c < 4 ? (s = u, a = l) : c >= 4 && c < 5 ? (i = u, a = l) : c >= 5 && c < 6 && (i = l, a = u);
    const f = r - l / 2;
    this.r = ot((i + f) * 255), this.g = ot((s + f) * 255), this.b = ot((a + f) * 255);
  }
  fromHsv({
    h: n,
    s: t,
    v: r,
    a: o
  }) {
    this._h = n % 360, this._s = t, this._v = r, this.a = typeof o == "number" ? o : 1;
    const i = ot(r * 255);
    if (this.r = i, this.g = i, this.b = i, t <= 0)
      return;
    const s = n / 60, a = Math.floor(s), c = s - a, l = ot(r * (1 - t) * 255), u = ot(r * (1 - t * c) * 255), f = ot(r * (1 - t * (1 - c)) * 255);
    switch (a) {
      case 0:
        this.g = f, this.b = l;
        break;
      case 1:
        this.r = u, this.b = l;
        break;
      case 2:
        this.r = l, this.b = f;
        break;
      case 3:
        this.r = l, this.g = u;
        break;
      case 4:
        this.r = f, this.g = l;
        break;
      case 5:
      default:
        this.g = l, this.b = u;
        break;
    }
  }
  fromHsvString(n) {
    const t = _s(n, Zl);
    this.fromHsv({
      h: t[0],
      s: t[1],
      v: t[2],
      a: t[3]
    });
  }
  fromHslString(n) {
    const t = _s(n, Zl);
    this.fromHsl({
      h: t[0],
      s: t[1],
      l: t[2],
      a: t[3]
    });
  }
  fromRgbString(n) {
    const t = _s(n, (r, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? ot(r / 100 * 255) : r
    ));
    this.r = t[0], this.g = t[1], this.b = t[2], this.a = t[3];
  }
}
var nb = ["b"], rb = ["v"], Ss = function(n) {
  return Math.round(Number(n || 0));
}, ob = function(n) {
  if (n instanceof Ii)
    return n;
  if (n && Ee(n) === "object" && "h" in n && "b" in n) {
    var t = n, r = t.b, o = Mn(t, nb);
    return Q(Q({}, o), {}, {
      v: r
    });
  }
  return typeof n == "string" && /hsb/.test(n) ? n.replace(/hsb/, "hsv") : n;
}, ln = /* @__PURE__ */ function(e) {
  ur(t, e);
  var n = qr(t);
  function t(r) {
    return yt(this, t), n.call(this, ob(r));
  }
  return _t(t, [{
    key: "toHsbString",
    value: function() {
      var o = this.toHsb(), i = Ss(o.s * 100), s = Ss(o.b * 100), a = Ss(o.h), c = o.a, l = "hsb(".concat(a, ", ").concat(i, "%, ").concat(s, "%)"), u = "hsba(".concat(a, ", ").concat(i, "%, ").concat(s, "%, ").concat(c.toFixed(c === 0 ? 0 : 2), ")");
      return c === 1 ? l : u;
    }
  }, {
    key: "toHsb",
    value: function() {
      var o = this.toHsv(), i = o.v, s = Mn(o, rb);
      return Q(Q({}, s), {}, {
        b: i,
        a: this.a
      });
    }
  }]), t;
}(Ii), ib = "rc-color-picker", Un = function(n) {
  return n instanceof ln ? n : new ln(n);
}, sb = Un("#1677ff"), nd = function(n) {
  var t = n.offset, r = n.targetRef, o = n.containerRef, i = n.color, s = n.type, a = o.current.getBoundingClientRect(), c = a.width, l = a.height, u = r.current.getBoundingClientRect(), f = u.width, h = u.height, m = f / 2, d = h / 2, g = (t.x + m) / c, p = 1 - (t.y + d) / l, b = i.toHsb(), y = g, C = (t.x + m) / c * 360;
  if (s)
    switch (s) {
      case "hue":
        return Un(Q(Q({}, b), {}, {
          h: C <= 0 ? 0 : C
        }));
      case "alpha":
        return Un(Q(Q({}, b), {}, {
          a: y <= 0 ? 0 : y
        }));
    }
  return Un({
    h: b.h,
    s: g <= 0 ? 0 : g,
    b: p >= 1 ? 1 : p,
    a: b.a
  });
}, rd = function(n, t) {
  var r = n.toHsb();
  switch (t) {
    case "hue":
      return {
        x: r.h / 360 * 100,
        y: 50
      };
    case "alpha":
      return {
        x: n.a * 100,
        y: 50
      };
    // Picker panel
    default:
      return {
        x: r.s * 100,
        y: (1 - r.b) * 100
      };
  }
}, ab = function(n) {
  var t = n.color, r = n.prefixCls, o = n.className, i = n.style, s = n.onClick, a = "".concat(r, "-color-block");
  return /* @__PURE__ */ U.createElement("div", {
    className: we(a, o),
    style: i,
    onClick: s
  }, /* @__PURE__ */ U.createElement("div", {
    className: "".concat(a, "-inner"),
    style: {
      background: t
    }
  }));
};
function cb(e) {
  var n = "touches" in e ? e.touches[0] : e, t = document.documentElement.scrollLeft || document.body.scrollLeft || window.pageXOffset, r = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
  return {
    pageX: n.pageX - t,
    pageY: n.pageY - r
  };
}
function od(e) {
  var n = e.targetRef, t = e.containerRef, r = e.direction, o = e.onDragChange, i = e.onDragChangeComplete, s = e.calculate, a = e.color, c = e.disabledDrag, l = dt({
    x: 0,
    y: 0
  }), u = ae(l, 2), f = u[0], h = u[1], m = Se(null), d = Se(null);
  Ue(function() {
    h(s());
  }, [a]), Ue(function() {
    return function() {
      document.removeEventListener("mousemove", m.current), document.removeEventListener("mouseup", d.current), document.removeEventListener("touchmove", m.current), document.removeEventListener("touchend", d.current), m.current = null, d.current = null;
    };
  }, []);
  var g = function(O) {
    var x = cb(O), R = x.pageX, _ = x.pageY, j = t.current.getBoundingClientRect(), M = j.x, X = j.y, re = j.width, te = j.height, z = n.current.getBoundingClientRect(), W = z.width, Z = z.height, N = W / 2, A = Z / 2, P = Math.max(0, Math.min(R - M, re)) - N, k = Math.max(0, Math.min(_ - X, te)) - A, B = {
      x: P,
      y: r === "x" ? f.y : k
    };
    if (W === 0 && Z === 0 || W !== Z)
      return !1;
    o == null || o(B);
  }, p = function(O) {
    O.preventDefault(), g(O);
  }, b = function(O) {
    O.preventDefault(), document.removeEventListener("mousemove", m.current), document.removeEventListener("mouseup", d.current), document.removeEventListener("touchmove", m.current), document.removeEventListener("touchend", d.current), m.current = null, d.current = null, i == null || i();
  }, y = function(O) {
    document.removeEventListener("mousemove", m.current), document.removeEventListener("mouseup", d.current), !c && (g(O), document.addEventListener("mousemove", p), document.addEventListener("mouseup", b), document.addEventListener("touchmove", p), document.addEventListener("touchend", b), m.current = p, d.current = b);
  };
  return [f, y];
}
var id = function(n) {
  var t = n.size, r = t === void 0 ? "default" : t, o = n.color, i = n.prefixCls;
  return /* @__PURE__ */ U.createElement("div", {
    className: we("".concat(i, "-handler"), K({}, "".concat(i, "-handler-sm"), r === "small")),
    style: {
      backgroundColor: o
    }
  });
}, sd = function(n) {
  var t = n.children, r = n.style, o = n.prefixCls;
  return /* @__PURE__ */ U.createElement("div", {
    className: "".concat(o, "-palette"),
    style: Q({
      position: "relative"
    }, r)
  }, t);
}, ad = /* @__PURE__ */ ir(function(e, n) {
  var t = e.children, r = e.x, o = e.y;
  return /* @__PURE__ */ U.createElement("div", {
    ref: n,
    style: {
      position: "absolute",
      left: "".concat(r, "%"),
      top: "".concat(o, "%"),
      zIndex: 1,
      transform: "translate(-50%, -50%)"
    }
  }, t);
}), lb = function(n) {
  var t = n.color, r = n.onChange, o = n.prefixCls, i = n.onChangeComplete, s = n.disabled, a = Se(), c = Se(), l = Se(t), u = bn(function(g) {
    var p = nd({
      offset: g,
      targetRef: c,
      containerRef: a,
      color: t
    });
    l.current = p, r(p);
  }), f = od({
    color: t,
    containerRef: a,
    targetRef: c,
    calculate: function() {
      return rd(t);
    },
    onDragChange: u,
    onDragChangeComplete: function() {
      return i == null ? void 0 : i(l.current);
    },
    disabledDrag: s
  }), h = ae(f, 2), m = h[0], d = h[1];
  return /* @__PURE__ */ U.createElement("div", {
    ref: a,
    className: "".concat(o, "-select"),
    onMouseDown: d,
    onTouchStart: d
  }, /* @__PURE__ */ U.createElement(sd, {
    prefixCls: o
  }, /* @__PURE__ */ U.createElement(ad, {
    x: m.x,
    y: m.y,
    ref: c
  }, /* @__PURE__ */ U.createElement(id, {
    color: t.toRgbString(),
    prefixCls: o
  })), /* @__PURE__ */ U.createElement("div", {
    className: "".concat(o, "-saturation"),
    style: {
      backgroundColor: "hsl(".concat(t.toHsb().h, ",100%, 50%)"),
      backgroundImage: "linear-gradient(0deg, #000, transparent),linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0))"
    }
  })));
}, ub = function(n, t) {
  var r = Yg(n, {
    value: t
  }), o = ae(r, 2), i = o[0], s = o[1], a = jr(function() {
    return Un(i);
  }, [i]);
  return [a, s];
}, fb = function(n) {
  var t = n.colors, r = n.children, o = n.direction, i = o === void 0 ? "to right" : o, s = n.type, a = n.prefixCls, c = jr(function() {
    return t.map(function(l, u) {
      var f = Un(l);
      return s === "alpha" && u === t.length - 1 && (f = new ln(f.setA(1))), f.toRgbString();
    }).join(",");
  }, [t, s]);
  return /* @__PURE__ */ U.createElement("div", {
    className: "".concat(a, "-gradient"),
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(".concat(i, ", ").concat(c, ")")
    }
  }, r);
}, db = function(n) {
  var t = n.prefixCls, r = n.colors, o = n.disabled, i = n.onChange, s = n.onChangeComplete, a = n.color, c = n.type, l = Se(), u = Se(), f = Se(a), h = function(x) {
    return c === "hue" ? x.getHue() : x.a * 100;
  }, m = bn(function(O) {
    var x = nd({
      offset: O,
      targetRef: u,
      containerRef: l,
      color: a,
      type: c
    });
    f.current = x, i(h(x));
  }), d = od({
    color: a,
    targetRef: u,
    containerRef: l,
    calculate: function() {
      return rd(a, c);
    },
    onDragChange: m,
    onDragChangeComplete: function() {
      s(h(f.current));
    },
    direction: "x",
    disabledDrag: o
  }), g = ae(d, 2), p = g[0], b = g[1], y = U.useMemo(function() {
    if (c === "hue") {
      var O = a.toHsb();
      O.s = 1, O.b = 1, O.a = 1;
      var x = new ln(O);
      return x;
    }
    return a;
  }, [a, c]), C = U.useMemo(function() {
    return r.map(function(O) {
      return "".concat(O.color, " ").concat(O.percent, "%");
    });
  }, [r]);
  return /* @__PURE__ */ U.createElement("div", {
    ref: l,
    className: we("".concat(t, "-slider"), "".concat(t, "-slider-").concat(c)),
    onMouseDown: b,
    onTouchStart: b
  }, /* @__PURE__ */ U.createElement(sd, {
    prefixCls: t
  }, /* @__PURE__ */ U.createElement(ad, {
    x: p.x,
    y: p.y,
    ref: u
  }, /* @__PURE__ */ U.createElement(id, {
    size: "small",
    color: y.toHexString(),
    prefixCls: t
  })), /* @__PURE__ */ U.createElement(fb, {
    colors: C,
    type: c,
    prefixCls: t
  })));
};
function hb(e) {
  return S.useMemo(function() {
    var n = e || {}, t = n.slider;
    return [t || db];
  }, [e]);
}
var xb = [{
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
}], pb = /* @__PURE__ */ ir(function(e, n) {
  var t = e.value, r = e.defaultValue, o = e.prefixCls, i = o === void 0 ? ib : o, s = e.onChange, a = e.onChangeComplete, c = e.className, l = e.style, u = e.panelRender, f = e.disabledAlpha, h = f === void 0 ? !1 : f, m = e.disabled, d = m === void 0 ? !1 : m, g = e.components, p = hb(g), b = ae(p, 1), y = b[0], C = ub(r || sb, t), O = ae(C, 2), x = O[0], R = O[1], _ = jr(function() {
    return x.setA(1).toRgbString();
  }, [x]), j = function(k, B) {
    t || R(k), s == null || s(k, B);
  }, M = function(k) {
    return new ln(x.setHue(k));
  }, X = function(k) {
    return new ln(x.setA(k / 100));
  }, re = function(k) {
    j(M(k), {
      type: "hue",
      value: k
    });
  }, te = function(k) {
    j(X(k), {
      type: "alpha",
      value: k
    });
  }, z = function(k) {
    a && a(M(k));
  }, W = function(k) {
    a && a(X(k));
  }, Z = we("".concat(i, "-panel"), c, K({}, "".concat(i, "-panel-disabled"), d)), N = {
    prefixCls: i,
    disabled: d,
    color: x
  }, A = /* @__PURE__ */ U.createElement(U.Fragment, null, /* @__PURE__ */ U.createElement(lb, gt({
    onChange: j
  }, N, {
    onChangeComplete: a
  })), /* @__PURE__ */ U.createElement("div", {
    className: "".concat(i, "-slider-container")
  }, /* @__PURE__ */ U.createElement("div", {
    className: we("".concat(i, "-slider-group"), K({}, "".concat(i, "-slider-group-disabled-alpha"), h))
  }, /* @__PURE__ */ U.createElement(y, gt({}, N, {
    type: "hue",
    colors: xb,
    min: 0,
    max: 359,
    value: x.getHue(),
    onChange: re,
    onChangeComplete: z
  })), !h && /* @__PURE__ */ U.createElement(y, gt({}, N, {
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
    value: x.a * 100,
    onChange: te,
    onChangeComplete: W
  }))), /* @__PURE__ */ U.createElement(ab, {
    color: x.toRgbString(),
    prefixCls: i
  })));
  return /* @__PURE__ */ U.createElement("div", {
    className: Z,
    style: l,
    ref: n
  }, typeof u == "function" ? u(A) : A);
});
process.env.NODE_ENV !== "production" && (pb.displayName = "ColorPicker");
const gb = (e, n) => (e == null ? void 0 : e.replace(/[^\w/]/g, "").slice(0, n ? 8 : 6)) || "", mb = (e, n) => e ? gb(e, n) : "";
let vb = /* @__PURE__ */ function() {
  function e(n) {
    yt(this, e);
    var t;
    if (this.cleared = !1, n instanceof e) {
      this.metaColor = n.metaColor.clone(), this.colors = (t = n.colors) === null || t === void 0 ? void 0 : t.map((o) => ({
        color: new e(o.color),
        percent: o.percent
      })), this.cleared = n.cleared;
      return;
    }
    const r = Array.isArray(n);
    r && n.length ? (this.colors = n.map((o) => {
      let {
        color: i,
        percent: s
      } = o;
      return {
        color: new e(i),
        percent: s
      };
    }), this.metaColor = new ln(this.colors[0].color.metaColor)) : this.metaColor = new ln(r ? "" : n), (!n || r && !this.colors) && (this.metaColor = this.metaColor.setA(0), this.cleared = !0);
  }
  return _t(e, [{
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
      return mb(this.toHexString(), this.metaColor.a < 1);
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
        colors: t
      } = this;
      return t ? `linear-gradient(90deg, ${t.map((o) => `${o.color.toRgbString()} ${o.percent}%`).join(", ")})` : this.metaColor.toRgbString();
    }
  }, {
    key: "equals",
    value: function(t) {
      return !t || this.isGradient() !== t.isGradient() ? !1 : this.isGradient() ? this.colors.length === t.colors.length && this.colors.every((r, o) => {
        const i = t.colors[o];
        return r.percent === i.percent && r.color.equals(i.color);
      }) : this.toHexString() === t.toHexString();
    }
  }]);
}();
const bb = (e, n) => {
  const {
    r: t,
    g: r,
    b: o,
    a: i
  } = e.toRgb(), s = new ln(e.toRgbString()).onBackground(n).toHsv();
  return i <= 0.5 ? s.v > 0.5 : t * 0.299 + r * 0.587 + o * 0.114 > 192;
}, cd = (e) => {
  const {
    paddingInline: n,
    onlyIconSize: t
  } = e;
  return Sn(e, {
    buttonPaddingHorizontal: n,
    buttonPaddingVertical: 0,
    buttonIconOnlyFontSize: t
  });
}, ld = (e) => {
  var n, t, r, o, i, s;
  const a = (n = e.contentFontSize) !== null && n !== void 0 ? n : e.fontSize, c = (t = e.contentFontSizeSM) !== null && t !== void 0 ? t : e.fontSize, l = (r = e.contentFontSizeLG) !== null && r !== void 0 ? r : e.fontSizeLG, u = (o = e.contentLineHeight) !== null && o !== void 0 ? o : No(a), f = (i = e.contentLineHeightSM) !== null && i !== void 0 ? i : No(c), h = (s = e.contentLineHeightLG) !== null && s !== void 0 ? s : No(l), m = bb(new vb(e.colorBgSolid), "#fff") ? "#000" : "#fff", d = fc.reduce((g, p) => Object.assign(Object.assign({}, g), {
    [`${p}ShadowColor`]: `0 ${cn(e.controlOutlineWidth)} 0 ${Ar(e[`${p}1`], e.colorBgContainer)}`
  }), {});
  return Object.assign(Object.assign({}, d), {
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
    solidTextColor: m,
    contentFontSize: a,
    contentFontSizeSM: c,
    contentFontSizeLG: l,
    contentLineHeight: u,
    contentLineHeightSM: f,
    contentLineHeightLG: h,
    paddingBlock: Math.max((e.controlHeight - a * u) / 2 - e.lineWidth, 0),
    paddingBlockSM: Math.max((e.controlHeightSM - c * f) / 2 - e.lineWidth, 0),
    paddingBlockLG: Math.max((e.controlHeightLG - l * h) / 2 - e.lineWidth, 0)
  });
}, yb = (e) => {
  const {
    componentCls: n,
    iconCls: t,
    fontWeight: r,
    opacityLoading: o,
    motionDurationSlow: i,
    motionEaseInOut: s,
    marginXS: a,
    calc: c
  } = e;
  return {
    [n]: {
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
      border: `${cn(e.lineWidth)} ${e.lineType} transparent`,
      cursor: "pointer",
      transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
      userSelect: "none",
      touchAction: "manipulation",
      color: e.colorText,
      "&:disabled > *": {
        pointerEvents: "none"
      },
      // https://github.com/ant-design/ant-design/issues/51380
      [`${n}-icon > svg`]: E0(),
      "> a": {
        color: "currentColor"
      },
      "&:not(:disabled)": fm(e),
      [`&${n}-two-chinese-chars::first-letter`]: {
        letterSpacing: "0.34em"
      },
      [`&${n}-two-chinese-chars > *:not(${t})`]: {
        marginInlineEnd: "-0.34em",
        letterSpacing: "0.34em"
      },
      [`&${n}-icon-only`]: {
        paddingInline: 0,
        // make `btn-icon-only` not too narrow
        [`&${n}-compact-item`]: {
          flex: "none"
        },
        [`&${n}-round`]: {
          width: "auto"
        }
      },
      // Loading
      [`&${n}-loading`]: {
        opacity: o,
        cursor: "default"
      },
      [`${n}-loading-icon`]: {
        transition: ["width", "opacity", "margin"].map((l) => `${l} ${i} ${s}`).join(",")
      },
      // iconPosition
      [`&:not(${n}-icon-end)`]: {
        [`${n}-loading-icon-motion`]: {
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
        [`${n}-loading-icon-motion`]: {
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
}, ud = (e, n, t) => ({
  [`&:not(:disabled):not(${e}-disabled)`]: {
    "&:hover": n,
    "&:active": t
  }
}), _b = (e) => ({
  minWidth: e.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
}), Sb = (e) => ({
  borderRadius: e.controlHeight,
  paddingInlineStart: e.calc(e.controlHeight).div(2).equal(),
  paddingInlineEnd: e.calc(e.controlHeight).div(2).equal()
}), Cb = (e) => ({
  cursor: "not-allowed",
  borderColor: e.borderColorDisabled,
  color: e.colorTextDisabled,
  background: e.colorBgContainerDisabled,
  boxShadow: "none"
}), Ni = (e, n, t, r, o, i, s, a) => ({
  [`&${e}-background-ghost`]: Object.assign(Object.assign({
    color: t || void 0,
    background: n,
    borderColor: r || void 0,
    boxShadow: "none"
  }, ud(e, Object.assign({
    background: n
  }, s), Object.assign({
    background: n
  }, a))), {
    "&:disabled": {
      cursor: "not-allowed",
      color: o || void 0,
      borderColor: i || void 0
    }
  })
}), wb = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, Cb(e))
}), Eb = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: {
    cursor: "not-allowed",
    color: e.colorTextDisabled
  }
}), ki = (e, n, t, r) => {
  const i = r && ["link", "text"].includes(r) ? Eb : wb;
  return Object.assign(Object.assign({}, i(e)), ud(e.componentCls, n, t));
}, ji = (e, n, t, r, o) => ({
  [`&${e.componentCls}-variant-solid`]: Object.assign({
    color: n,
    background: t
  }, ki(e, r, o))
}), Mi = (e, n, t, r, o) => ({
  [`&${e.componentCls}-variant-outlined, &${e.componentCls}-variant-dashed`]: Object.assign({
    borderColor: n,
    background: t
  }, ki(e, r, o))
}), Li = (e) => ({
  [`&${e.componentCls}-variant-dashed`]: {
    borderStyle: "dashed"
  }
}), Di = (e, n, t, r) => ({
  [`&${e.componentCls}-variant-filled`]: Object.assign({
    boxShadow: "none",
    background: n
  }, ki(e, t, r))
}), Kt = (e, n, t, r, o) => ({
  [`&${e.componentCls}-variant-${t}`]: Object.assign({
    color: n,
    boxShadow: "none"
  }, ki(e, r, o, t))
}), Ob = (e) => {
  const {
    componentCls: n
  } = e;
  return fc.reduce((t, r) => {
    const o = e[`${r}6`], i = e[`${r}1`], s = e[`${r}5`], a = e[`${r}2`], c = e[`${r}3`], l = e[`${r}7`];
    return Object.assign(Object.assign({}, t), {
      [`&${n}-color-${r}`]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
        color: o,
        boxShadow: e[`${r}ShadowColor`]
      }, ji(e, e.colorTextLightSolid, o, {
        background: s
      }, {
        background: l
      })), Mi(e, o, e.colorBgContainer, {
        color: s,
        borderColor: s,
        background: e.colorBgContainer
      }, {
        color: l,
        borderColor: l,
        background: e.colorBgContainer
      })), Li(e)), Di(e, i, {
        background: a
      }, {
        background: c
      })), Kt(e, o, "link", {
        color: s
      }, {
        color: l
      })), Kt(e, o, "text", {
        color: s,
        background: i
      }, {
        color: l,
        background: c
      }))
    });
  }, {});
}, Tb = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.defaultColor,
  boxShadow: e.defaultShadow
}, ji(e, e.solidTextColor, e.colorBgSolid, {
  color: e.solidTextColor,
  background: e.colorBgSolidHover
}, {
  color: e.solidTextColor,
  background: e.colorBgSolidActive
})), Li(e)), Di(e, e.colorFillTertiary, {
  background: e.colorFillSecondary
}, {
  background: e.colorFill
})), Ni(e.componentCls, e.ghostBg, e.defaultGhostColor, e.defaultGhostBorderColor, e.colorTextDisabled, e.colorBorder)), Kt(e, e.textTextColor, "link", {
  color: e.colorLinkHover,
  background: e.linkHoverBg
}, {
  color: e.colorLinkActive
})), Rb = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.colorPrimary,
  boxShadow: e.primaryShadow
}, Mi(e, e.colorPrimary, e.colorBgContainer, {
  color: e.colorPrimaryTextHover,
  borderColor: e.colorPrimaryHover,
  background: e.colorBgContainer
}, {
  color: e.colorPrimaryTextActive,
  borderColor: e.colorPrimaryActive,
  background: e.colorBgContainer
})), Li(e)), Di(e, e.colorPrimaryBg, {
  background: e.colorPrimaryBgHover
}, {
  background: e.colorPrimaryBorder
})), Kt(e, e.colorPrimaryText, "text", {
  color: e.colorPrimaryTextHover,
  background: e.colorPrimaryBg
}, {
  color: e.colorPrimaryTextActive,
  background: e.colorPrimaryBorder
})), Kt(e, e.colorPrimaryText, "link", {
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
})), Ab = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.colorError,
  boxShadow: e.dangerShadow
}, ji(e, e.dangerColor, e.colorError, {
  background: e.colorErrorHover
}, {
  background: e.colorErrorActive
})), Mi(e, e.colorError, e.colorBgContainer, {
  color: e.colorErrorHover,
  borderColor: e.colorErrorBorderHover
}, {
  color: e.colorErrorActive,
  borderColor: e.colorErrorActive
})), Li(e)), Di(e, e.colorErrorBg, {
  background: e.colorErrorBgFilledHover
}, {
  background: e.colorErrorBgActive
})), Kt(e, e.colorError, "text", {
  color: e.colorErrorHover,
  background: e.colorErrorBg
}, {
  color: e.colorErrorHover,
  background: e.colorErrorBgActive
})), Kt(e, e.colorError, "link", {
  color: e.colorErrorHover
}, {
  color: e.colorErrorActive
})), Ni(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
  color: e.colorErrorHover,
  borderColor: e.colorErrorHover
}, {
  color: e.colorErrorActive,
  borderColor: e.colorErrorActive
})), $b = (e) => Object.assign(Object.assign({}, Kt(e, e.colorLink, "link", {
  color: e.colorLinkHover
}, {
  color: e.colorLinkActive
})), Ni(e.componentCls, e.ghostBg, e.colorInfo, e.colorInfo, e.colorTextDisabled, e.colorBorder, {
  color: e.colorInfoHover,
  borderColor: e.colorInfoHover
}, {
  color: e.colorInfoActive,
  borderColor: e.colorInfoActive
})), Pb = (e) => {
  const {
    componentCls: n
  } = e;
  return Object.assign({
    [`${n}-color-default`]: Tb(e),
    [`${n}-color-primary`]: Rb(e),
    [`${n}-color-dangerous`]: Ab(e),
    [`${n}-color-link`]: $b(e)
  }, Ob(e));
}, Ib = (e) => Object.assign(Object.assign(Object.assign(Object.assign({}, Mi(e, e.defaultBorderColor, e.defaultBg, {
  color: e.defaultHoverColor,
  borderColor: e.defaultHoverBorderColor,
  background: e.defaultHoverBg
}, {
  color: e.defaultActiveColor,
  borderColor: e.defaultActiveBorderColor,
  background: e.defaultActiveBg
})), Kt(e, e.textTextColor, "text", {
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
})), Kt(e, e.colorLink, "link", {
  color: e.colorLinkHover,
  background: e.linkHoverBg
}, {
  color: e.colorLinkActive
})), pc = function(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  const {
    componentCls: t,
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
      [n]: {
        fontSize: o,
        height: r,
        padding: `${cn(c)} ${cn(s)}`,
        borderRadius: i,
        [`&${t}-icon-only`]: {
          width: r,
          [a]: {
            fontSize: l
          }
        }
      }
    },
    // Shape - patch prefixCls again to override solid border radius style
    {
      [`${t}${t}-circle${n}`]: _b(e)
    },
    {
      [`${t}${t}-round${n}`]: Sb(e)
    }
  ];
}, Nb = (e) => {
  const n = Sn(e, {
    fontSize: e.contentFontSize
  });
  return pc(n, e.componentCls);
}, kb = (e) => {
  const n = Sn(e, {
    controlHeight: e.controlHeightSM,
    fontSize: e.contentFontSizeSM,
    padding: e.paddingXS,
    buttonPaddingHorizontal: e.paddingInlineSM,
    buttonPaddingVertical: 0,
    borderRadius: e.borderRadiusSM,
    buttonIconOnlyFontSize: e.onlyIconSizeSM
  });
  return pc(n, `${e.componentCls}-sm`);
}, jb = (e) => {
  const n = Sn(e, {
    controlHeight: e.controlHeightLG,
    fontSize: e.contentFontSizeLG,
    buttonPaddingHorizontal: e.paddingInlineLG,
    buttonPaddingVertical: 0,
    borderRadius: e.borderRadiusLG,
    buttonIconOnlyFontSize: e.onlyIconSizeLG
  });
  return pc(n, `${e.componentCls}-lg`);
}, Mb = (e) => {
  const {
    componentCls: n
  } = e;
  return {
    [n]: {
      [`&${n}-block`]: {
        width: "100%"
      }
    }
  };
}, Lb = Ai("Button", (e) => {
  const n = cd(e);
  return [
    // Shared
    yb(n),
    // Size
    Nb(n),
    kb(n),
    jb(n),
    // Block
    Mb(n),
    // Color
    Pb(n),
    // https://github.com/ant-design/ant-design/issues/50969
    Ib(n),
    // Button Group
    tb(n)
  ];
}, ld, {
  unitless: {
    fontWeight: !0,
    contentLineHeight: !0,
    contentLineHeightSM: !0,
    contentLineHeightLG: !0
  }
});
function Db(e, n, t) {
  const {
    focusElCls: r,
    focus: o,
    borderElCls: i
  } = t, s = i ? "> *" : "", a = ["hover", o ? "focus" : null, "active"].filter(Boolean).map((c) => `&:${c} ${s}`).join(",");
  return {
    [`&-item:not(${n}-last-item)`]: {
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
function Bb(e, n, t) {
  const {
    borderElCls: r
  } = t, o = r ? `> ${r}` : "";
  return {
    [`&-item:not(${n}-first-item):not(${n}-last-item) ${o}`]: {
      borderRadius: 0
    },
    [`&-item:not(${n}-last-item)${n}-first-item`]: {
      [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${n}-first-item)${n}-last-item`]: {
      [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function Hb(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: !0
  };
  const {
    componentCls: t
  } = e, r = `${t}-compact`;
  return {
    [r]: Object.assign(Object.assign({}, Db(e, r, n)), Bb(t, r, n))
  };
}
function zb(e, n) {
  return {
    // border collapse
    [`&-item:not(${n}-last-item)`]: {
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
function Fb(e, n) {
  return {
    [`&-item:not(${n}-first-item):not(${n}-last-item)`]: {
      borderRadius: 0
    },
    [`&-item${n}-first-item:not(${n}-last-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&-item${n}-last-item:not(${n}-first-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0
      }
    }
  };
}
function Vb(e) {
  const n = `${e.componentCls}-compact-vertical`;
  return {
    [n]: Object.assign(Object.assign({}, zb(e, n)), Fb(e.componentCls, n))
  };
}
const qb = (e) => {
  const {
    componentCls: n,
    colorPrimaryHover: t,
    lineWidth: r,
    calc: o
  } = e, i = o(r).mul(-1).equal(), s = (a) => {
    const c = `${n}-compact${a ? "-vertical" : ""}-item${n}-primary:not([disabled])`;
    return {
      [`${c} + ${c}::before`]: {
        position: "absolute",
        top: a ? i : 0,
        insetInlineStart: a ? 0 : i,
        backgroundColor: t,
        content: '""',
        width: a ? "100%" : r,
        height: a ? r : "100%"
      }
    };
  };
  return Object.assign(Object.assign({}, s()), s(!0));
}, Ub = hm(["Button", "compact"], (e) => {
  const n = cd(e);
  return [
    // Space Compact
    Hb(n),
    Vb(n),
    qb(n)
  ];
}, ld);
var Wb = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
function Gb(e) {
  if (typeof e == "object" && e) {
    let n = e == null ? void 0 : e.delay;
    return n = !Number.isNaN(n) && typeof n == "number" ? n : 0, {
      loading: n <= 0,
      delay: n
    };
  }
  return {
    loading: !!e,
    delay: 0
  };
}
const Xb = {
  default: ["default", "outlined"],
  primary: ["primary", "solid"],
  dashed: ["default", "dashed"],
  // `link` is not a real color but we should compatible with it
  link: ["link", "link"],
  text: ["default", "text"]
}, Yb = /* @__PURE__ */ U.forwardRef((e, n) => {
  var t, r;
  const {
    loading: o = !1,
    prefixCls: i,
    color: s,
    variant: a,
    type: c,
    danger: l = !1,
    shape: u = "default",
    size: f,
    styles: h,
    disabled: m,
    className: d,
    rootClassName: g,
    children: p,
    icon: b,
    iconPosition: y = "start",
    ghost: C = !1,
    block: O = !1,
    // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    htmlType: x = "button",
    classNames: R,
    style: _ = {},
    autoInsertSpace: j,
    autoFocus: M
  } = e, X = Wb(e, ["loading", "prefixCls", "color", "variant", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "iconPosition", "ghost", "block", "htmlType", "classNames", "style", "autoInsertSpace", "autoFocus"]), re = c || "default", [te, z] = jr(() => {
    if (s && a)
      return [s, a];
    const je = Xb[re] || [];
    return l ? ["danger", je[1]] : je;
  }, [c, s, a, l]), Z = te === "danger" ? "dangerous" : te, {
    getPrefixCls: N,
    direction: A,
    autoInsertSpace: P,
    className: k,
    style: B,
    classNames: H,
    styles: J
  } = uc("button"), ne = (t = j ?? P) !== null && t !== void 0 ? t : !0, ee = N("btn", i), [ce, ue, de] = Lb(ee), Oe = Ot(Go), _e = m ?? Oe, ke = Ot(td), Ne = jr(() => Gb(o), [o]), [pe, Ze] = dt(Ne.loading), [T, F] = dt(!1), $ = Se(null), G = r1(n, $), w = Qd.count(p) === 1 && !b && !go(z), Y = Se(!0);
  U.useEffect(() => (Y.current = !1, () => {
    Y.current = !0;
  }), []), Ue(() => {
    let je = null;
    Ne.delay > 0 ? je = setTimeout(() => {
      je = null, Ze(!0);
    }, Ne.delay) : Ze(Ne.loading);
    function ct() {
      je && (clearTimeout(je), je = null);
    }
    return ct;
  }, [Ne]), Ue(() => {
    if (!$.current || !ne)
      return;
    const je = $.current.textContent || "";
    w && Ta(je) ? T || F(!0) : T && F(!1);
  }), Ue(() => {
    M && $.current && $.current.focus();
  }, []);
  const se = U.useCallback((je) => {
    var ct;
    if (pe || _e) {
      je.preventDefault();
      return;
    }
    (ct = e.onClick) === null || ct === void 0 || ct.call(e, ("href" in e, je));
  }, [e.onClick, pe, _e]);
  if (process.env.NODE_ENV !== "production") {
    const je = _n("Button");
    process.env.NODE_ENV !== "production" && je(!(typeof b == "string" && b.length > 2), "breaking", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${b}\` at https://ant.design/components/icon`), process.env.NODE_ENV !== "production" && je(!(C && go(z)), "usage", "`link` or `text` button can't be a `ghost` button.");
  }
  const {
    compactSize: le,
    compactItemClassnames: Re
  } = Yv(ee, A), ve = {
    large: "lg",
    small: "sm",
    middle: void 0
  }, Ye = Gv((je) => {
    var ct, Ft;
    return (Ft = (ct = f ?? le) !== null && ct !== void 0 ? ct : ke) !== null && Ft !== void 0 ? Ft : je;
  }), ft = Ye && (r = ve[Ye]) !== null && r !== void 0 ? r : "", Qt = pe ? "loading" : b, At = Q0(X, ["navigate"]), Zt = we(ee, ue, de, {
    [`${ee}-${u}`]: u !== "default" && u,
    // line(253 - 254): Compatible with versions earlier than 5.21.0
    [`${ee}-${re}`]: re,
    [`${ee}-dangerous`]: l,
    [`${ee}-color-${Z}`]: Z,
    [`${ee}-variant-${z}`]: z,
    [`${ee}-${ft}`]: ft,
    [`${ee}-icon-only`]: !p && p !== 0 && !!Qt,
    [`${ee}-background-ghost`]: C && !go(z),
    [`${ee}-loading`]: pe,
    [`${ee}-two-chinese-chars`]: T && ne && !pe,
    [`${ee}-block`]: O,
    [`${ee}-rtl`]: A === "rtl",
    [`${ee}-icon-end`]: y === "end"
  }, Re, d, g, k), Bt = Object.assign(Object.assign({}, B), _), Ht = we(R == null ? void 0 : R.icon, H.icon), en = Object.assign(Object.assign({}, (h == null ? void 0 : h.icon) || {}), J.icon || {}), tn = b && !pe ? /* @__PURE__ */ U.createElement(Ra, {
    prefixCls: ee,
    className: Ht,
    style: en
  }, b) : o && typeof o == "object" && o.icon ? /* @__PURE__ */ U.createElement(Ra, {
    prefixCls: ee,
    className: Ht,
    style: en
  }, o.icon) : /* @__PURE__ */ U.createElement(eb, {
    existIcon: !!b,
    prefixCls: ee,
    loading: pe,
    mount: Y.current
  }), nn = p || p === 0 ? Zv(p, w && ne) : null;
  if (At.href !== void 0)
    return ce(/* @__PURE__ */ U.createElement("a", Object.assign({}, At, {
      className: we(Zt, {
        [`${ee}-disabled`]: _e
      }),
      href: _e ? void 0 : At.href,
      style: Bt,
      onClick: se,
      ref: G,
      tabIndex: _e ? -1 : 0
    }), tn, nn));
  let zt = /* @__PURE__ */ U.createElement("button", Object.assign({}, X, {
    type: x,
    className: Zt,
    style: Bt,
    onClick: se,
    disabled: _e,
    ref: G
  }), tn, nn, Re && /* @__PURE__ */ U.createElement(Ub, {
    prefixCls: ee
  }));
  return go(z) || (zt = /* @__PURE__ */ U.createElement(ed, {
    component: "Button",
    disabled: pe
  }, zt)), ce(zt);
}), Bi = Yb;
Bi.Group = Jv;
Bi.__ANT_BUTTON = !0;
process.env.NODE_ENV !== "production" && (Bi.displayName = "Button");
function Kb(e, n, t) {
  var r = t || {}, o = r.noTrailing, i = o === void 0 ? !1 : o, s = r.noLeading, a = s === void 0 ? !1 : s, c = r.debounceMode, l = c === void 0 ? void 0 : c, u, f = !1, h = 0;
  function m() {
    u && clearTimeout(u);
  }
  function d(p) {
    var b = p || {}, y = b.upcomingOnly, C = y === void 0 ? !1 : y;
    m(), f = !C;
  }
  function g() {
    for (var p = arguments.length, b = new Array(p), y = 0; y < p; y++)
      b[y] = arguments[y];
    var C = this, O = Date.now() - h;
    if (f)
      return;
    function x() {
      h = Date.now(), n.apply(C, b);
    }
    function R() {
      u = void 0;
    }
    !a && l && !u && x(), m(), l === void 0 && O > e ? a ? (h = Date.now(), i || (u = setTimeout(l ? R : x, e))) : x() : i !== !0 && (u = setTimeout(l ? R : x, l === void 0 ? e - O : e));
  }
  return g.cancel = d, g;
}
function Jb(e, n, t) {
  var r = {}, o = r.atBegin, i = o === void 0 ? !1 : o;
  return Kb(e, n, {
    debounceMode: i !== !1
  });
}
function eu(e) {
  return ["small", "middle", "large"].includes(e);
}
const fd = ["wrap", "nowrap", "wrap-reverse"], dd = ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around", "space-evenly", "stretch", "normal", "left", "right"], hd = ["center", "start", "end", "flex-start", "flex-end", "self-start", "self-end", "baseline", "normal", "stretch"], Qb = (e, n) => {
  const t = n.wrap === !0 ? "wrap" : n.wrap;
  return {
    [`${e}-wrap-${t}`]: t && fd.includes(t)
  };
}, Zb = (e, n) => {
  const t = {};
  return hd.forEach((r) => {
    t[`${e}-align-${r}`] = n.align === r;
  }), t[`${e}-align-stretch`] = !n.align && !!n.vertical, t;
}, ey = (e, n) => {
  const t = {};
  return dd.forEach((r) => {
    t[`${e}-justify-${r}`] = n.justify === r;
  }), t;
};
function ty(e, n) {
  return we(Object.assign(Object.assign(Object.assign({}, Qb(e, n)), Zb(e, n)), ey(e, n)));
}
const ny = (e) => {
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
}, ry = (e) => {
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
}, oy = (e) => {
  const {
    componentCls: n
  } = e, t = {};
  return fd.forEach((r) => {
    t[`${n}-wrap-${r}`] = {
      flexWrap: r
    };
  }), t;
}, iy = (e) => {
  const {
    componentCls: n
  } = e, t = {};
  return hd.forEach((r) => {
    t[`${n}-align-${r}`] = {
      alignItems: r
    };
  }), t;
}, sy = (e) => {
  const {
    componentCls: n
  } = e, t = {};
  return dd.forEach((r) => {
    t[`${n}-justify-${r}`] = {
      justifyContent: r
    };
  }), t;
}, ay = () => ({}), cy = Ai("Flex", (e) => {
  const {
    paddingXS: n,
    padding: t,
    paddingLG: r
  } = e, o = Sn(e, {
    flexGapSM: n,
    flexGap: t,
    flexGapLG: r
  });
  return [ny(o), ry(o), oy(o), iy(o), sy(o)];
}, ay, {
  // Flex component don't apply extra font style
  // https://github.com/ant-design/ant-design/issues/46403
  resetStyle: !1
});
var ly = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
const xd = /* @__PURE__ */ U.forwardRef((e, n) => {
  const {
    prefixCls: t,
    rootClassName: r,
    className: o,
    style: i,
    flex: s,
    gap: a,
    children: c,
    vertical: l = !1,
    component: u = "div"
  } = e, f = ly(e, ["prefixCls", "rootClassName", "className", "style", "flex", "gap", "children", "vertical", "component"]), {
    flex: h,
    direction: m,
    getPrefixCls: d
  } = U.useContext(Lt), g = d("flex", t), [p, b, y] = cy(g), C = l ?? (h == null ? void 0 : h.vertical), O = we(o, r, h == null ? void 0 : h.className, g, b, y, ty(g, e), {
    [`${g}-rtl`]: m === "rtl",
    [`${g}-gap-${a}`]: eu(a),
    [`${g}-vertical`]: C
  }), x = Object.assign(Object.assign({}, h == null ? void 0 : h.style), i);
  return s && (x.flex = s), a && !eu(a) && (x.gap = a), p(/* @__PURE__ */ U.createElement(u, Object.assign({
    ref: n,
    className: O,
    style: x
  }, Q0(f, ["justify", "wrap", "align"])), c));
});
process.env.NODE_ENV !== "production" && (xd.displayName = "Flex");
const Yo = 100, pd = Yo / 5, gd = Yo / 2 - pd / 2, Cs = gd * 2 * Math.PI, tu = 50, nu = (e) => {
  const {
    dotClassName: n,
    style: t,
    hasCircleCls: r
  } = e;
  return /* @__PURE__ */ S.createElement("circle", {
    className: we(`${n}-circle`, {
      [`${n}-circle-bg`]: r
    }),
    r: gd,
    cx: tu,
    cy: tu,
    strokeWidth: pd,
    style: t
  });
}, uy = (e) => {
  let {
    percent: n,
    prefixCls: t
  } = e;
  const r = `${t}-dot`, o = `${r}-holder`, i = `${o}-hidden`, [s, a] = S.useState(!1);
  rc(() => {
    n !== 0 && a(!0);
  }, [n !== 0]);
  const c = Math.max(Math.min(n, 100), 0);
  if (!s)
    return null;
  const l = {
    strokeDashoffset: `${Cs / 4}`,
    strokeDasharray: `${Cs * c / 100} ${Cs * (100 - c) / 100}`
  };
  return /* @__PURE__ */ S.createElement("span", {
    className: we(o, `${r}-progress`, c <= 0 && i)
  }, /* @__PURE__ */ S.createElement("svg", {
    viewBox: `0 0 ${Yo} ${Yo}`,
    // biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole: progressbar could be readonly
    role: "progressbar",
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": c
  }, /* @__PURE__ */ S.createElement(nu, {
    dotClassName: r,
    hasCircleCls: !0
  }), /* @__PURE__ */ S.createElement(nu, {
    dotClassName: r,
    style: l
  })));
};
function fy(e) {
  const {
    prefixCls: n,
    percent: t = 0
  } = e, r = `${n}-dot`, o = `${r}-holder`, i = `${o}-hidden`;
  return /* @__PURE__ */ S.createElement(S.Fragment, null, /* @__PURE__ */ S.createElement("span", {
    className: we(o, t > 0 && i)
  }, /* @__PURE__ */ S.createElement("span", {
    className: we(r, `${n}-dot-spin`)
  }, [1, 2, 3, 4].map((s) => /* @__PURE__ */ S.createElement("i", {
    className: `${n}-dot-item`,
    key: s
  })))), /* @__PURE__ */ S.createElement(uy, {
    prefixCls: n,
    percent: t
  }));
}
function dy(e) {
  const {
    prefixCls: n,
    indicator: t,
    percent: r
  } = e, o = `${n}-dot`;
  return t && /* @__PURE__ */ S.isValidElement(t) ? hc(t, {
    className: we(t.props.className, o),
    percent: r
  }) : /* @__PURE__ */ S.createElement(fy, {
    prefixCls: n,
    percent: r
  });
}
const hy = new i0("antSpinMove", {
  to: {
    opacity: 1
  }
}), xy = new i0("antRotate", {
  to: {
    transform: "rotate(405deg)"
  }
}), py = (e) => {
  const {
    componentCls: n,
    calc: t
  } = e;
  return {
    [n]: Object.assign(Object.assign({}, w0(e)), {
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
          animationName: hy,
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
          animationName: xy,
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
}, gy = (e) => {
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
}, my = Ai("Spin", (e) => {
  const n = Sn(e, {
    spinDotDefault: e.colorTextDescription
  });
  return [py(n)];
}, gy), vy = 200, ru = [[30, 0.05], [70, 0.03], [96, 0.01]];
function by(e, n) {
  const [t, r] = S.useState(0), o = S.useRef(null), i = n === "auto";
  return S.useEffect(() => (i && e && (r(0), o.current = setInterval(() => {
    r((s) => {
      const a = 100 - s;
      for (let c = 0; c < ru.length; c += 1) {
        const [l, u] = ru[c];
        if (s <= l)
          return s + a * u;
      }
      return s;
    });
  }, vy)), () => {
    clearInterval(o.current);
  }), [i, e]), i ? t : n;
}
var yy = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
let md;
function _y(e, n) {
  return !!e && !!n && !Number.isNaN(Number(n));
}
const kr = (e) => {
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
    style: u,
    children: f,
    fullscreen: h = !1,
    indicator: m,
    percent: d
  } = e, g = yy(e, ["prefixCls", "spinning", "delay", "className", "rootClassName", "size", "tip", "wrapperClassName", "style", "children", "fullscreen", "indicator", "percent"]), {
    getPrefixCls: p,
    direction: b,
    className: y,
    style: C,
    indicator: O
  } = uc("spin"), x = p("spin", t), [R, _, j] = my(x), [M, X] = S.useState(() => r && !_y(r, o)), re = by(M, d);
  S.useEffect(() => {
    if (r) {
      const P = Jb(o, () => {
        X(!0);
      });
      return P(), () => {
        var k;
        (k = P == null ? void 0 : P.cancel) === null || k === void 0 || k.call(P);
      };
    }
    X(!1);
  }, [o, r]);
  const te = S.useMemo(() => typeof f < "u" && !h, [f, h]);
  if (process.env.NODE_ENV !== "production") {
    const P = _n("Spin");
    process.env.NODE_ENV !== "production" && P(!c || te || h, "usage", "`tip` only work in nest or fullscreen pattern.");
  }
  const z = we(x, y, {
    [`${x}-sm`]: a === "small",
    [`${x}-lg`]: a === "large",
    [`${x}-spinning`]: M,
    [`${x}-show-text`]: !!c,
    [`${x}-rtl`]: b === "rtl"
  }, i, !h && s, _, j), W = we(`${x}-container`, {
    [`${x}-blur`]: M
  }), Z = (n = m ?? O) !== null && n !== void 0 ? n : md, N = Object.assign(Object.assign({}, C), u), A = /* @__PURE__ */ S.createElement("div", Object.assign({}, g, {
    style: N,
    className: z,
    "aria-live": "polite",
    "aria-busy": M
  }), /* @__PURE__ */ S.createElement(dy, {
    prefixCls: x,
    indicator: Z,
    percent: re
  }), c && (te || h) ? /* @__PURE__ */ S.createElement("div", {
    className: `${x}-text`
  }, c) : null);
  return R(te ? /* @__PURE__ */ S.createElement("div", Object.assign({}, g, {
    className: we(`${x}-nested-loading`, l, _, j)
  }), M && /* @__PURE__ */ S.createElement("div", {
    key: "loading"
  }, A), /* @__PURE__ */ S.createElement("div", {
    className: W,
    key: "container"
  }, f)) : h ? /* @__PURE__ */ S.createElement("div", {
    className: we(`${x}-fullscreen`, {
      [`${x}-fullscreen-show`]: M
    }, s, _, j)
  }, A) : A);
};
kr.setDefaultIndicator = (e) => {
  md = e;
};
process.env.NODE_ENV !== "production" && (kr.displayName = "Spin");
function vd(e, n) {
  return function() {
    return e.apply(n, arguments);
  };
}
const { toString: Sy } = Object.prototype, { getPrototypeOf: gc } = Object, { iterator: Hi, toStringTag: bd } = Symbol, zi = /* @__PURE__ */ ((e) => (n) => {
  const t = Sy.call(n);
  return e[t] || (e[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Dt = (e) => (e = e.toLowerCase(), (n) => zi(n) === e), Fi = (e) => (n) => typeof n === e, { isArray: xr } = Array, Fr = Fi("undefined");
function Cy(e) {
  return e !== null && !Fr(e) && e.constructor !== null && !Fr(e.constructor) && mt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const yd = Dt("ArrayBuffer");
function wy(e) {
  let n;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? n = ArrayBuffer.isView(e) : n = e && e.buffer && yd(e.buffer), n;
}
const Ey = Fi("string"), mt = Fi("function"), _d = Fi("number"), Vi = (e) => e !== null && typeof e == "object", Oy = (e) => e === !0 || e === !1, ko = (e) => {
  if (zi(e) !== "object")
    return !1;
  const n = gc(e);
  return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(bd in e) && !(Hi in e);
}, Ty = Dt("Date"), Ry = Dt("File"), Ay = Dt("Blob"), $y = Dt("FileList"), Py = (e) => Vi(e) && mt(e.pipe), Iy = (e) => {
  let n;
  return e && (typeof FormData == "function" && e instanceof FormData || mt(e.append) && ((n = zi(e)) === "formdata" || // detect form-data instance
  n === "object" && mt(e.toString) && e.toString() === "[object FormData]"));
}, Ny = Dt("URLSearchParams"), [ky, jy, My, Ly] = ["ReadableStream", "Request", "Response", "Headers"].map(Dt), Dy = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Yr(e, n, { allOwnKeys: t = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), xr(e))
    for (r = 0, o = e.length; r < o; r++)
      n.call(null, e[r], r, e);
  else {
    const i = t ? Object.getOwnPropertyNames(e) : Object.keys(e), s = i.length;
    let a;
    for (r = 0; r < s; r++)
      a = i[r], n.call(null, e[a], a, e);
  }
}
function Sd(e, n) {
  n = n.toLowerCase();
  const t = Object.keys(e);
  let r = t.length, o;
  for (; r-- > 0; )
    if (o = t[r], n === o.toLowerCase())
      return o;
  return null;
}
const Rn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Cd = (e) => !Fr(e) && e !== Rn;
function Aa() {
  const { caseless: e } = Cd(this) && this || {}, n = {}, t = (r, o) => {
    const i = e && Sd(n, o) || o;
    ko(n[i]) && ko(r) ? n[i] = Aa(n[i], r) : ko(r) ? n[i] = Aa({}, r) : xr(r) ? n[i] = r.slice() : n[i] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Yr(arguments[r], t);
  return n;
}
const By = (e, n, t, { allOwnKeys: r } = {}) => (Yr(n, (o, i) => {
  t && mt(o) ? e[i] = vd(o, t) : e[i] = o;
}, { allOwnKeys: r }), e), Hy = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), zy = (e, n, t, r) => {
  e.prototype = Object.create(n.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: n.prototype
  }), t && Object.assign(e.prototype, t);
}, Fy = (e, n, t, r) => {
  let o, i, s;
  const a = {};
  if (n = n || {}, e == null) return n;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      s = o[i], (!r || r(s, e, n)) && !a[s] && (n[s] = e[s], a[s] = !0);
    e = t !== !1 && gc(e);
  } while (e && (!t || t(e, n)) && e !== Object.prototype);
  return n;
}, Vy = (e, n, t) => {
  e = String(e), (t === void 0 || t > e.length) && (t = e.length), t -= n.length;
  const r = e.indexOf(n, t);
  return r !== -1 && r === t;
}, qy = (e) => {
  if (!e) return null;
  if (xr(e)) return e;
  let n = e.length;
  if (!_d(n)) return null;
  const t = new Array(n);
  for (; n-- > 0; )
    t[n] = e[n];
  return t;
}, Uy = /* @__PURE__ */ ((e) => (n) => e && n instanceof e)(typeof Uint8Array < "u" && gc(Uint8Array)), Wy = (e, n) => {
  const r = (e && e[Hi]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const i = o.value;
    n.call(e, i[0], i[1]);
  }
}, Gy = (e, n) => {
  let t;
  const r = [];
  for (; (t = e.exec(n)) !== null; )
    r.push(t);
  return r;
}, Xy = Dt("HTMLFormElement"), Yy = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(t, r, o) {
    return r.toUpperCase() + o;
  }
), ou = (({ hasOwnProperty: e }) => (n, t) => e.call(n, t))(Object.prototype), Ky = Dt("RegExp"), wd = (e, n) => {
  const t = Object.getOwnPropertyDescriptors(e), r = {};
  Yr(t, (o, i) => {
    let s;
    (s = n(o, i, e)) !== !1 && (r[i] = s || o);
  }), Object.defineProperties(e, r);
}, Jy = (e) => {
  wd(e, (n, t) => {
    if (mt(e) && ["arguments", "caller", "callee"].indexOf(t) !== -1)
      return !1;
    const r = e[t];
    if (mt(r)) {
      if (n.enumerable = !1, "writable" in n) {
        n.writable = !1;
        return;
      }
      n.set || (n.set = () => {
        throw Error("Can not rewrite read-only method '" + t + "'");
      });
    }
  });
}, Qy = (e, n) => {
  const t = {}, r = (o) => {
    o.forEach((i) => {
      t[i] = !0;
    });
  };
  return xr(e) ? r(e) : r(String(e).split(n)), t;
}, Zy = () => {
}, e2 = (e, n) => e != null && Number.isFinite(e = +e) ? e : n;
function t2(e) {
  return !!(e && mt(e.append) && e[bd] === "FormData" && e[Hi]);
}
const n2 = (e) => {
  const n = new Array(10), t = (r, o) => {
    if (Vi(r)) {
      if (n.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        n[o] = r;
        const i = xr(r) ? [] : {};
        return Yr(r, (s, a) => {
          const c = t(s, o + 1);
          !Fr(c) && (i[a] = c);
        }), n[o] = void 0, i;
      }
    }
    return r;
  };
  return t(e, 0);
}, r2 = Dt("AsyncFunction"), o2 = (e) => e && (Vi(e) || mt(e)) && mt(e.then) && mt(e.catch), Ed = ((e, n) => e ? setImmediate : n ? ((t, r) => (Rn.addEventListener("message", ({ source: o, data: i }) => {
  o === Rn && i === t && r.length && r.shift()();
}, !1), (o) => {
  r.push(o), Rn.postMessage(t, "*");
}))(`axios@${Math.random()}`, []) : (t) => setTimeout(t))(
  typeof setImmediate == "function",
  mt(Rn.postMessage)
), i2 = typeof queueMicrotask < "u" ? queueMicrotask.bind(Rn) : typeof process < "u" && process.nextTick || Ed, s2 = (e) => e != null && mt(e[Hi]), I = {
  isArray: xr,
  isArrayBuffer: yd,
  isBuffer: Cy,
  isFormData: Iy,
  isArrayBufferView: wy,
  isString: Ey,
  isNumber: _d,
  isBoolean: Oy,
  isObject: Vi,
  isPlainObject: ko,
  isReadableStream: ky,
  isRequest: jy,
  isResponse: My,
  isHeaders: Ly,
  isUndefined: Fr,
  isDate: Ty,
  isFile: Ry,
  isBlob: Ay,
  isRegExp: Ky,
  isFunction: mt,
  isStream: Py,
  isURLSearchParams: Ny,
  isTypedArray: Uy,
  isFileList: $y,
  forEach: Yr,
  merge: Aa,
  extend: By,
  trim: Dy,
  stripBOM: Hy,
  inherits: zy,
  toFlatObject: Fy,
  kindOf: zi,
  kindOfTest: Dt,
  endsWith: Vy,
  toArray: qy,
  forEachEntry: Wy,
  matchAll: Gy,
  isHTMLForm: Xy,
  hasOwnProperty: ou,
  hasOwnProp: ou,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: wd,
  freezeMethods: Jy,
  toObjectSet: Qy,
  toCamelCase: Yy,
  noop: Zy,
  toFiniteNumber: e2,
  findKey: Sd,
  global: Rn,
  isContextDefined: Cd,
  isSpecCompliantForm: t2,
  toJSONObject: n2,
  isAsyncFn: r2,
  isThenable: o2,
  setImmediate: Ed,
  asap: i2,
  isIterable: s2
};
function fe(e, n, t, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", n && (this.code = n), t && (this.config = t), r && (this.request = r), o && (this.response = o, this.status = o.status ? o.status : null);
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
const Od = fe.prototype, Td = {};
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
  Td[e] = { value: e };
});
Object.defineProperties(fe, Td);
Object.defineProperty(Od, "isAxiosError", { value: !0 });
fe.from = (e, n, t, r, o, i) => {
  const s = Object.create(Od);
  return I.toFlatObject(e, s, function(c) {
    return c !== Error.prototype;
  }, (a) => a !== "isAxiosError"), fe.call(s, e.message, n, t, r, o), s.cause = e, s.name = e.name, i && Object.assign(s, i), s;
};
const a2 = null;
function $a(e) {
  return I.isPlainObject(e) || I.isArray(e);
}
function Rd(e) {
  return I.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function iu(e, n, t) {
  return e ? e.concat(n).map(function(o, i) {
    return o = Rd(o), !t && i ? "[" + o + "]" : o;
  }).join(t ? "." : "") : n;
}
function c2(e) {
  return I.isArray(e) && !e.some($a);
}
const l2 = I.toFlatObject(I, {}, null, function(n) {
  return /^is[A-Z]/.test(n);
});
function qi(e, n, t) {
  if (!I.isObject(e))
    throw new TypeError("target must be an object");
  n = n || new FormData(), t = I.toFlatObject(t, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, p) {
    return !I.isUndefined(p[g]);
  });
  const r = t.metaTokens, o = t.visitor || u, i = t.dots, s = t.indexes, c = (t.Blob || typeof Blob < "u" && Blob) && I.isSpecCompliantForm(n);
  if (!I.isFunction(o))
    throw new TypeError("visitor must be a function");
  function l(d) {
    if (d === null) return "";
    if (I.isDate(d))
      return d.toISOString();
    if (!c && I.isBlob(d))
      throw new fe("Blob is not supported. Use a Buffer instead.");
    return I.isArrayBuffer(d) || I.isTypedArray(d) ? c && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function u(d, g, p) {
    let b = d;
    if (d && !p && typeof d == "object") {
      if (I.endsWith(g, "{}"))
        g = r ? g : g.slice(0, -2), d = JSON.stringify(d);
      else if (I.isArray(d) && c2(d) || (I.isFileList(d) || I.endsWith(g, "[]")) && (b = I.toArray(d)))
        return g = Rd(g), b.forEach(function(C, O) {
          !(I.isUndefined(C) || C === null) && n.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? iu([g], O, i) : s === null ? g : g + "[]",
            l(C)
          );
        }), !1;
    }
    return $a(d) ? !0 : (n.append(iu(p, g, i), l(d)), !1);
  }
  const f = [], h = Object.assign(l2, {
    defaultVisitor: u,
    convertValue: l,
    isVisitable: $a
  });
  function m(d, g) {
    if (!I.isUndefined(d)) {
      if (f.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      f.push(d), I.forEach(d, function(b, y) {
        (!(I.isUndefined(b) || b === null) && o.call(
          n,
          b,
          I.isString(y) ? y.trim() : y,
          g,
          h
        )) === !0 && m(b, g ? g.concat(y) : [y]);
      }), f.pop();
    }
  }
  if (!I.isObject(e))
    throw new TypeError("data must be an object");
  return m(e), n;
}
function su(e) {
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
function mc(e, n) {
  this._pairs = [], e && qi(e, this, n);
}
const Ad = mc.prototype;
Ad.append = function(n, t) {
  this._pairs.push([n, t]);
};
Ad.toString = function(n) {
  const t = n ? function(r) {
    return n.call(this, r, su);
  } : su;
  return this._pairs.map(function(o) {
    return t(o[0]) + "=" + t(o[1]);
  }, "").join("&");
};
function u2(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function $d(e, n, t) {
  if (!n)
    return e;
  const r = t && t.encode || u2;
  I.isFunction(t) && (t = {
    serialize: t
  });
  const o = t && t.serialize;
  let i;
  if (o ? i = o(n, t) : i = I.isURLSearchParams(n) ? n.toString() : new mc(n, t).toString(r), i) {
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
    I.forEach(this.handlers, function(r) {
      r !== null && n(r);
    });
  }
}
const Pd = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, f2 = typeof URLSearchParams < "u" ? URLSearchParams : mc, d2 = typeof FormData < "u" ? FormData : null, h2 = typeof Blob < "u" ? Blob : null, x2 = {
  isBrowser: !0,
  classes: {
    URLSearchParams: f2,
    FormData: d2,
    Blob: h2
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, vc = typeof window < "u" && typeof document < "u", Pa = typeof navigator == "object" && navigator || void 0, p2 = vc && (!Pa || ["ReactNative", "NativeScript", "NS"].indexOf(Pa.product) < 0), g2 = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", m2 = vc && window.location.href || "http://localhost", v2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: vc,
  hasStandardBrowserEnv: p2,
  hasStandardBrowserWebWorkerEnv: g2,
  navigator: Pa,
  origin: m2
}, Symbol.toStringTag, { value: "Module" })), ut = {
  ...v2,
  ...x2
};
function b2(e, n) {
  return qi(e, new ut.classes.URLSearchParams(), Object.assign({
    visitor: function(t, r, o, i) {
      return ut.isNode && I.isBuffer(t) ? (this.append(r, t.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, n));
}
function y2(e) {
  return I.matchAll(/\w+|\[(\w*)]/g, e).map((n) => n[0] === "[]" ? "" : n[1] || n[0]);
}
function _2(e) {
  const n = {}, t = Object.keys(e);
  let r;
  const o = t.length;
  let i;
  for (r = 0; r < o; r++)
    i = t[r], n[i] = e[i];
  return n;
}
function Id(e) {
  function n(t, r, o, i) {
    let s = t[i++];
    if (s === "__proto__") return !0;
    const a = Number.isFinite(+s), c = i >= t.length;
    return s = !s && I.isArray(o) ? o.length : s, c ? (I.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !a) : ((!o[s] || !I.isObject(o[s])) && (o[s] = []), n(t, r, o[s], i) && I.isArray(o[s]) && (o[s] = _2(o[s])), !a);
  }
  if (I.isFormData(e) && I.isFunction(e.entries)) {
    const t = {};
    return I.forEachEntry(e, (r, o) => {
      n(y2(r), o, t, 0);
    }), t;
  }
  return null;
}
function S2(e, n, t) {
  if (I.isString(e))
    try {
      return (n || JSON.parse)(e), I.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (t || JSON.stringify)(e);
}
const Kr = {
  transitional: Pd,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(n, t) {
    const r = t.getContentType() || "", o = r.indexOf("application/json") > -1, i = I.isObject(n);
    if (i && I.isHTMLForm(n) && (n = new FormData(n)), I.isFormData(n))
      return o ? JSON.stringify(Id(n)) : n;
    if (I.isArrayBuffer(n) || I.isBuffer(n) || I.isStream(n) || I.isFile(n) || I.isBlob(n) || I.isReadableStream(n))
      return n;
    if (I.isArrayBufferView(n))
      return n.buffer;
    if (I.isURLSearchParams(n))
      return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), n.toString();
    let a;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return b2(n, this.formSerializer).toString();
      if ((a = I.isFileList(n)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return qi(
          a ? { "files[]": n } : n,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return i || o ? (t.setContentType("application/json", !1), S2(n)) : n;
  }],
  transformResponse: [function(n) {
    const t = this.transitional || Kr.transitional, r = t && t.forcedJSONParsing, o = this.responseType === "json";
    if (I.isResponse(n) || I.isReadableStream(n))
      return n;
    if (n && I.isString(n) && (r && !this.responseType || o)) {
      const s = !(t && t.silentJSONParsing) && o;
      try {
        return JSON.parse(n);
      } catch (a) {
        if (s)
          throw a.name === "SyntaxError" ? fe.from(a, fe.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
    FormData: ut.classes.FormData,
    Blob: ut.classes.Blob
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
I.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Kr.headers[e] = {};
});
const C2 = I.toObjectSet([
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
]), w2 = (e) => {
  const n = {};
  let t, r, o;
  return e && e.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), t = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!t || n[t] && C2[t]) && (t === "set-cookie" ? n[t] ? n[t].push(r) : n[t] = [r] : n[t] = n[t] ? n[t] + ", " + r : r);
  }), n;
}, cu = Symbol("internals");
function Er(e) {
  return e && String(e).trim().toLowerCase();
}
function jo(e) {
  return e === !1 || e == null ? e : I.isArray(e) ? e.map(jo) : String(e);
}
function E2(e) {
  const n = /* @__PURE__ */ Object.create(null), t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = t.exec(e); )
    n[r[1]] = r[2];
  return n;
}
const O2 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ws(e, n, t, r, o) {
  if (I.isFunction(r))
    return r.call(this, n, t);
  if (o && (n = t), !!I.isString(n)) {
    if (I.isString(r))
      return n.indexOf(r) !== -1;
    if (I.isRegExp(r))
      return r.test(n);
  }
}
function T2(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (n, t, r) => t.toUpperCase() + r);
}
function R2(e, n) {
  const t = I.toCamelCase(" " + n);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + t, {
      value: function(o, i, s) {
        return this[r].call(this, n, o, i, s);
      },
      configurable: !0
    });
  });
}
let vt = class {
  constructor(n) {
    n && this.set(n);
  }
  set(n, t, r) {
    const o = this;
    function i(a, c, l) {
      const u = Er(c);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const f = I.findKey(o, u);
      (!f || o[f] === void 0 || l === !0 || l === void 0 && o[f] !== !1) && (o[f || c] = jo(a));
    }
    const s = (a, c) => I.forEach(a, (l, u) => i(l, u, c));
    if (I.isPlainObject(n) || n instanceof this.constructor)
      s(n, t);
    else if (I.isString(n) && (n = n.trim()) && !O2(n))
      s(w2(n), t);
    else if (I.isObject(n) && I.isIterable(n)) {
      let a = {}, c, l;
      for (const u of n) {
        if (!I.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        a[l = u[0]] = (c = a[l]) ? I.isArray(c) ? [...c, u[1]] : [c, u[1]] : u[1];
      }
      s(a, t);
    } else
      n != null && i(t, n, r);
    return this;
  }
  get(n, t) {
    if (n = Er(n), n) {
      const r = I.findKey(this, n);
      if (r) {
        const o = this[r];
        if (!t)
          return o;
        if (t === !0)
          return E2(o);
        if (I.isFunction(t))
          return t.call(this, o, r);
        if (I.isRegExp(t))
          return t.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(n, t) {
    if (n = Er(n), n) {
      const r = I.findKey(this, n);
      return !!(r && this[r] !== void 0 && (!t || ws(this, this[r], r, t)));
    }
    return !1;
  }
  delete(n, t) {
    const r = this;
    let o = !1;
    function i(s) {
      if (s = Er(s), s) {
        const a = I.findKey(r, s);
        a && (!t || ws(r, r[a], a, t)) && (delete r[a], o = !0);
      }
    }
    return I.isArray(n) ? n.forEach(i) : i(n), o;
  }
  clear(n) {
    const t = Object.keys(this);
    let r = t.length, o = !1;
    for (; r--; ) {
      const i = t[r];
      (!n || ws(this, this[i], i, n, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(n) {
    const t = this, r = {};
    return I.forEach(this, (o, i) => {
      const s = I.findKey(r, i);
      if (s) {
        t[s] = jo(o), delete t[i];
        return;
      }
      const a = n ? T2(i) : String(i).trim();
      a !== i && delete t[i], t[a] = jo(o), r[a] = !0;
    }), this;
  }
  concat(...n) {
    return this.constructor.concat(this, ...n);
  }
  toJSON(n) {
    const t = /* @__PURE__ */ Object.create(null);
    return I.forEach(this, (r, o) => {
      r != null && r !== !1 && (t[o] = n && I.isArray(r) ? r.join(", ") : r);
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
    const r = (this[cu] = this[cu] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(s) {
      const a = Er(s);
      r[a] || (R2(o, s), r[a] = !0);
    }
    return I.isArray(n) ? n.forEach(i) : i(n), this;
  }
};
vt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
I.reduceDescriptors(vt.prototype, ({ value: e }, n) => {
  let t = n[0].toUpperCase() + n.slice(1);
  return {
    get: () => e,
    set(r) {
      this[t] = r;
    }
  };
});
I.freezeMethods(vt);
function Es(e, n) {
  const t = this || Kr, r = n || t, o = vt.from(r.headers);
  let i = r.data;
  return I.forEach(e, function(a) {
    i = a.call(t, i, o.normalize(), n ? n.status : void 0);
  }), o.normalize(), i;
}
function Nd(e) {
  return !!(e && e.__CANCEL__);
}
function pr(e, n, t) {
  fe.call(this, e ?? "canceled", fe.ERR_CANCELED, n, t), this.name = "CanceledError";
}
I.inherits(pr, fe, {
  __CANCEL__: !0
});
function kd(e, n, t) {
  const r = t.config.validateStatus;
  !t.status || !r || r(t.status) ? e(t) : n(new fe(
    "Request failed with status code " + t.status,
    [fe.ERR_BAD_REQUEST, fe.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],
    t.config,
    t.request,
    t
  ));
}
function A2(e) {
  const n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return n && n[1] || "";
}
function $2(e, n) {
  e = e || 10;
  const t = new Array(e), r = new Array(e);
  let o = 0, i = 0, s;
  return n = n !== void 0 ? n : 1e3, function(c) {
    const l = Date.now(), u = r[i];
    s || (s = l), t[o] = c, r[o] = l;
    let f = i, h = 0;
    for (; f !== o; )
      h += t[f++], f = f % e;
    if (o = (o + 1) % e, o === i && (i = (i + 1) % e), l - s < n)
      return;
    const m = u && l - u;
    return m ? Math.round(h * 1e3 / m) : void 0;
  };
}
function P2(e, n) {
  let t = 0, r = 1e3 / n, o, i;
  const s = (l, u = Date.now()) => {
    t = u, o = null, i && (clearTimeout(i), i = null), e.apply(null, l);
  };
  return [(...l) => {
    const u = Date.now(), f = u - t;
    f >= r ? s(l, u) : (o = l, i || (i = setTimeout(() => {
      i = null, s(o);
    }, r - f)));
  }, () => o && s(o)];
}
const Ko = (e, n, t = 3) => {
  let r = 0;
  const o = $2(50, 250);
  return P2((i) => {
    const s = i.loaded, a = i.lengthComputable ? i.total : void 0, c = s - r, l = o(c), u = s <= a;
    r = s;
    const f = {
      loaded: s,
      total: a,
      progress: a ? s / a : void 0,
      bytes: c,
      rate: l || void 0,
      estimated: l && a && u ? (a - s) / l : void 0,
      event: i,
      lengthComputable: a != null,
      [n ? "download" : "upload"]: !0
    };
    e(f);
  }, t);
}, lu = (e, n) => {
  const t = e != null;
  return [(r) => n[0]({
    lengthComputable: t,
    total: e,
    loaded: r
  }), n[1]];
}, uu = (e) => (...n) => I.asap(() => e(...n)), I2 = ut.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, n) => (t) => (t = new URL(t, ut.origin), e.protocol === t.protocol && e.host === t.host && (n || e.port === t.port)))(
  new URL(ut.origin),
  ut.navigator && /(msie|trident)/i.test(ut.navigator.userAgent)
) : () => !0, N2 = ut.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, n, t, r, o, i) {
      const s = [e + "=" + encodeURIComponent(n)];
      I.isNumber(t) && s.push("expires=" + new Date(t).toGMTString()), I.isString(r) && s.push("path=" + r), I.isString(o) && s.push("domain=" + o), i === !0 && s.push("secure"), document.cookie = s.join("; ");
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
function k2(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function j2(e, n) {
  return n ? e.replace(/\/?\/$/, "") + "/" + n.replace(/^\/+/, "") : e;
}
function jd(e, n, t) {
  let r = !k2(n);
  return e && (r || t == !1) ? j2(e, n) : n;
}
const fu = (e) => e instanceof vt ? { ...e } : e;
function Ln(e, n) {
  n = n || {};
  const t = {};
  function r(l, u, f, h) {
    return I.isPlainObject(l) && I.isPlainObject(u) ? I.merge.call({ caseless: h }, l, u) : I.isPlainObject(u) ? I.merge({}, u) : I.isArray(u) ? u.slice() : u;
  }
  function o(l, u, f, h) {
    if (I.isUndefined(u)) {
      if (!I.isUndefined(l))
        return r(void 0, l, f, h);
    } else return r(l, u, f, h);
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
  function a(l, u, f) {
    if (f in n)
      return r(l, u);
    if (f in e)
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
    headers: (l, u, f) => o(fu(l), fu(u), f, !0)
  };
  return I.forEach(Object.keys(Object.assign({}, e, n)), function(u) {
    const f = c[u] || o, h = f(e[u], n[u], u);
    I.isUndefined(h) && f !== a || (t[u] = h);
  }), t;
}
const Md = (e) => {
  const n = Ln({}, e);
  let { data: t, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: i, headers: s, auth: a } = n;
  n.headers = s = vt.from(s), n.url = $d(jd(n.baseURL, n.url, n.allowAbsoluteUrls), e.params, e.paramsSerializer), a && s.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let c;
  if (I.isFormData(t)) {
    if (ut.hasStandardBrowserEnv || ut.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if ((c = s.getContentType()) !== !1) {
      const [l, ...u] = c ? c.split(";").map((f) => f.trim()).filter(Boolean) : [];
      s.setContentType([l || "multipart/form-data", ...u].join("; "));
    }
  }
  if (ut.hasStandardBrowserEnv && (r && I.isFunction(r) && (r = r(n)), r || r !== !1 && I2(n.url))) {
    const l = o && i && N2.read(i);
    l && s.set(o, l);
  }
  return n;
}, M2 = typeof XMLHttpRequest < "u", L2 = M2 && function(e) {
  return new Promise(function(t, r) {
    const o = Md(e);
    let i = o.data;
    const s = vt.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: c, onDownloadProgress: l } = o, u, f, h, m, d;
    function g() {
      m && m(), d && d(), o.cancelToken && o.cancelToken.unsubscribe(u), o.signal && o.signal.removeEventListener("abort", u);
    }
    let p = new XMLHttpRequest();
    p.open(o.method.toUpperCase(), o.url, !0), p.timeout = o.timeout;
    function b() {
      if (!p)
        return;
      const C = vt.from(
        "getAllResponseHeaders" in p && p.getAllResponseHeaders()
      ), x = {
        data: !a || a === "text" || a === "json" ? p.responseText : p.response,
        status: p.status,
        statusText: p.statusText,
        headers: C,
        config: e,
        request: p
      };
      kd(function(_) {
        t(_), g();
      }, function(_) {
        r(_), g();
      }, x), p = null;
    }
    "onloadend" in p ? p.onloadend = b : p.onreadystatechange = function() {
      !p || p.readyState !== 4 || p.status === 0 && !(p.responseURL && p.responseURL.indexOf("file:") === 0) || setTimeout(b);
    }, p.onabort = function() {
      p && (r(new fe("Request aborted", fe.ECONNABORTED, e, p)), p = null);
    }, p.onerror = function() {
      r(new fe("Network Error", fe.ERR_NETWORK, e, p)), p = null;
    }, p.ontimeout = function() {
      let O = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const x = o.transitional || Pd;
      o.timeoutErrorMessage && (O = o.timeoutErrorMessage), r(new fe(
        O,
        x.clarifyTimeoutError ? fe.ETIMEDOUT : fe.ECONNABORTED,
        e,
        p
      )), p = null;
    }, i === void 0 && s.setContentType(null), "setRequestHeader" in p && I.forEach(s.toJSON(), function(O, x) {
      p.setRequestHeader(x, O);
    }), I.isUndefined(o.withCredentials) || (p.withCredentials = !!o.withCredentials), a && a !== "json" && (p.responseType = o.responseType), l && ([h, d] = Ko(l, !0), p.addEventListener("progress", h)), c && p.upload && ([f, m] = Ko(c), p.upload.addEventListener("progress", f), p.upload.addEventListener("loadend", m)), (o.cancelToken || o.signal) && (u = (C) => {
      p && (r(!C || C.type ? new pr(null, e, p) : C), p.abort(), p = null);
    }, o.cancelToken && o.cancelToken.subscribe(u), o.signal && (o.signal.aborted ? u() : o.signal.addEventListener("abort", u)));
    const y = A2(o.url);
    if (y && ut.protocols.indexOf(y) === -1) {
      r(new fe("Unsupported protocol " + y + ":", fe.ERR_BAD_REQUEST, e));
      return;
    }
    p.send(i || null);
  });
}, D2 = (e, n) => {
  const { length: t } = e = e ? e.filter(Boolean) : [];
  if (n || t) {
    let r = new AbortController(), o;
    const i = function(l) {
      if (!o) {
        o = !0, a();
        const u = l instanceof Error ? l : this.reason;
        r.abort(u instanceof fe ? u : new pr(u instanceof Error ? u.message : u));
      }
    };
    let s = n && setTimeout(() => {
      s = null, i(new fe(`timeout ${n} of ms exceeded`, fe.ETIMEDOUT));
    }, n);
    const a = () => {
      e && (s && clearTimeout(s), s = null, e.forEach((l) => {
        l.unsubscribe ? l.unsubscribe(i) : l.removeEventListener("abort", i);
      }), e = null);
    };
    e.forEach((l) => l.addEventListener("abort", i));
    const { signal: c } = r;
    return c.unsubscribe = () => I.asap(a), c;
  }
}, B2 = function* (e, n) {
  let t = e.byteLength;
  if (t < n) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < t; )
    o = r + n, yield e.slice(r, o), r = o;
}, H2 = async function* (e, n) {
  for await (const t of z2(e))
    yield* B2(t, n);
}, z2 = async function* (e) {
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
}, du = (e, n, t, r) => {
  const o = H2(e, n);
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
        let f = u.byteLength;
        if (t) {
          let h = i += f;
          t(h);
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
}, Ui = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Ld = Ui && typeof ReadableStream == "function", F2 = Ui && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (n) => e.encode(n))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Dd = (e, ...n) => {
  try {
    return !!e(...n);
  } catch {
    return !1;
  }
}, V2 = Ld && Dd(() => {
  let e = !1;
  const n = new Request(ut.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !n;
}), hu = 64 * 1024, Ia = Ld && Dd(() => I.isReadableStream(new Response("").body)), Jo = {
  stream: Ia && ((e) => e.body)
};
Ui && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((n) => {
    !Jo[n] && (Jo[n] = I.isFunction(e[n]) ? (t) => t[n]() : (t, r) => {
      throw new fe(`Response type '${n}' is not supported`, fe.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const q2 = async (e) => {
  if (e == null)
    return 0;
  if (I.isBlob(e))
    return e.size;
  if (I.isSpecCompliantForm(e))
    return (await new Request(ut.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (I.isArrayBufferView(e) || I.isArrayBuffer(e))
    return e.byteLength;
  if (I.isURLSearchParams(e) && (e = e + ""), I.isString(e))
    return (await F2(e)).byteLength;
}, U2 = async (e, n) => {
  const t = I.toFiniteNumber(e.getContentLength());
  return t ?? q2(n);
}, W2 = Ui && (async (e) => {
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
    headers: u,
    withCredentials: f = "same-origin",
    fetchOptions: h
  } = Md(e);
  l = l ? (l + "").toLowerCase() : "text";
  let m = D2([o, i && i.toAbortSignal()], s), d;
  const g = m && m.unsubscribe && (() => {
    m.unsubscribe();
  });
  let p;
  try {
    if (c && V2 && t !== "get" && t !== "head" && (p = await U2(u, r)) !== 0) {
      let x = new Request(n, {
        method: "POST",
        body: r,
        duplex: "half"
      }), R;
      if (I.isFormData(r) && (R = x.headers.get("content-type")) && u.setContentType(R), x.body) {
        const [_, j] = lu(
          p,
          Ko(uu(c))
        );
        r = du(x.body, hu, _, j);
      }
    }
    I.isString(f) || (f = f ? "include" : "omit");
    const b = "credentials" in Request.prototype;
    d = new Request(n, {
      ...h,
      signal: m,
      method: t.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: b ? f : void 0
    });
    let y = await fetch(d);
    const C = Ia && (l === "stream" || l === "response");
    if (Ia && (a || C && g)) {
      const x = {};
      ["status", "statusText", "headers"].forEach((M) => {
        x[M] = y[M];
      });
      const R = I.toFiniteNumber(y.headers.get("content-length")), [_, j] = a && lu(
        R,
        Ko(uu(a), !0)
      ) || [];
      y = new Response(
        du(y.body, hu, _, () => {
          j && j(), g && g();
        }),
        x
      );
    }
    l = l || "text";
    let O = await Jo[I.findKey(Jo, l) || "text"](y, e);
    return !C && g && g(), await new Promise((x, R) => {
      kd(x, R, {
        data: O,
        headers: vt.from(y.headers),
        status: y.status,
        statusText: y.statusText,
        config: e,
        request: d
      });
    });
  } catch (b) {
    throw g && g(), b && b.name === "TypeError" && /Load failed|fetch/i.test(b.message) ? Object.assign(
      new fe("Network Error", fe.ERR_NETWORK, e, d),
      {
        cause: b.cause || b
      }
    ) : fe.from(b, b && b.code, e, d);
  }
}), Na = {
  http: a2,
  xhr: L2,
  fetch: W2
};
I.forEach(Na, (e, n) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: n });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: n });
  }
});
const xu = (e) => `- ${e}`, G2 = (e) => I.isFunction(e) || e === null || e === !1, Bd = {
  getAdapter: (e) => {
    e = I.isArray(e) ? e : [e];
    const { length: n } = e;
    let t, r;
    const o = {};
    for (let i = 0; i < n; i++) {
      t = e[i];
      let s;
      if (r = t, !G2(t) && (r = Na[(s = String(t)).toLowerCase()], r === void 0))
        throw new fe(`Unknown adapter '${s}'`);
      if (r)
        break;
      o[s || "#" + i] = r;
    }
    if (!r) {
      const i = Object.entries(o).map(
        ([a, c]) => `adapter ${a} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let s = n ? i.length > 1 ? `since :
` + i.map(xu).join(`
`) : " " + xu(i[0]) : "as no adapter specified";
      throw new fe(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Na
};
function Os(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new pr(null, e);
}
function pu(e) {
  return Os(e), e.headers = vt.from(e.headers), e.data = Es.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Bd.getAdapter(e.adapter || Kr.adapter)(e).then(function(r) {
    return Os(e), r.data = Es.call(
      e,
      e.transformResponse,
      r
    ), r.headers = vt.from(r.headers), r;
  }, function(r) {
    return Nd(r) || (Os(e), r && r.response && (r.response.data = Es.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = vt.from(r.response.headers))), Promise.reject(r);
  });
}
const Hd = "1.9.0", Wi = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, n) => {
  Wi[e] = function(r) {
    return typeof r === e || "a" + (n < 1 ? "n " : " ") + e;
  };
});
const gu = {};
Wi.transitional = function(n, t, r) {
  function o(i, s) {
    return "[Axios v" + Hd + "] Transitional option '" + i + "'" + s + (r ? ". " + r : "");
  }
  return (i, s, a) => {
    if (n === !1)
      throw new fe(
        o(s, " has been removed" + (t ? " in " + t : "")),
        fe.ERR_DEPRECATED
      );
    return t && !gu[s] && (gu[s] = !0, console.warn(
      o(
        s,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), n ? n(i, s, a) : !0;
  };
};
Wi.spelling = function(n) {
  return (t, r) => (console.warn(`${r} is likely a misspelling of ${n}`), !0);
};
function X2(e, n, t) {
  if (typeof e != "object")
    throw new fe("options must be an object", fe.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o], s = n[i];
    if (s) {
      const a = e[i], c = a === void 0 || s(a, i, e);
      if (c !== !0)
        throw new fe("option " + i + " must be " + c, fe.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0)
      throw new fe("Unknown option " + i, fe.ERR_BAD_OPTION);
  }
}
const Mo = {
  assertOptions: X2,
  validators: Wi
}, Ut = Mo.validators;
let kn = class {
  constructor(n) {
    this.defaults = n || {}, this.interceptors = {
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
    typeof n == "string" ? (t = t || {}, t.url = n) : t = n || {}, t = Ln(this.defaults, t);
    const { transitional: r, paramsSerializer: o, headers: i } = t;
    r !== void 0 && Mo.assertOptions(r, {
      silentJSONParsing: Ut.transitional(Ut.boolean),
      forcedJSONParsing: Ut.transitional(Ut.boolean),
      clarifyTimeoutError: Ut.transitional(Ut.boolean)
    }, !1), o != null && (I.isFunction(o) ? t.paramsSerializer = {
      serialize: o
    } : Mo.assertOptions(o, {
      encode: Ut.function,
      serialize: Ut.function
    }, !0)), t.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : t.allowAbsoluteUrls = !0), Mo.assertOptions(t, {
      baseUrl: Ut.spelling("baseURL"),
      withXsrfToken: Ut.spelling("withXSRFToken")
    }, !0), t.method = (t.method || this.defaults.method || "get").toLowerCase();
    let s = i && I.merge(
      i.common,
      i[t.method]
    );
    i && I.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (d) => {
        delete i[d];
      }
    ), t.headers = vt.concat(s, i);
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function(g) {
      typeof g.runWhen == "function" && g.runWhen(t) === !1 || (c = c && g.synchronous, a.unshift(g.fulfilled, g.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(g) {
      l.push(g.fulfilled, g.rejected);
    });
    let u, f = 0, h;
    if (!c) {
      const d = [pu.bind(this), void 0];
      for (d.unshift.apply(d, a), d.push.apply(d, l), h = d.length, u = Promise.resolve(t); f < h; )
        u = u.then(d[f++], d[f++]);
      return u;
    }
    h = a.length;
    let m = t;
    for (f = 0; f < h; ) {
      const d = a[f++], g = a[f++];
      try {
        m = d(m);
      } catch (p) {
        g.call(this, p);
        break;
      }
    }
    try {
      u = pu.call(this, m);
    } catch (d) {
      return Promise.reject(d);
    }
    for (f = 0, h = l.length; f < h; )
      u = u.then(l[f++], l[f++]);
    return u;
  }
  getUri(n) {
    n = Ln(this.defaults, n);
    const t = jd(n.baseURL, n.url, n.allowAbsoluteUrls);
    return $d(t, n.params, n.paramsSerializer);
  }
};
I.forEach(["delete", "get", "head", "options"], function(n) {
  kn.prototype[n] = function(t, r) {
    return this.request(Ln(r || {}, {
      method: n,
      url: t,
      data: (r || {}).data
    }));
  };
});
I.forEach(["post", "put", "patch"], function(n) {
  function t(r) {
    return function(i, s, a) {
      return this.request(Ln(a || {}, {
        method: n,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: s
      }));
    };
  }
  kn.prototype[n] = t(), kn.prototype[n + "Form"] = t(!0);
});
let Y2 = class zd {
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
      r.reason || (r.reason = new pr(i, s, a), t(r.reason));
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
      token: new zd(function(o) {
        n = o;
      }),
      cancel: n
    };
  }
};
function K2(e) {
  return function(t) {
    return e.apply(null, t);
  };
}
function J2(e) {
  return I.isObject(e) && e.isAxiosError === !0;
}
const ka = {
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
Object.entries(ka).forEach(([e, n]) => {
  ka[n] = e;
});
function Fd(e) {
  const n = new kn(e), t = vd(kn.prototype.request, n);
  return I.extend(t, kn.prototype, n, { allOwnKeys: !0 }), I.extend(t, n, null, { allOwnKeys: !0 }), t.create = function(o) {
    return Fd(Ln(e, o));
  }, t;
}
const We = Fd(Kr);
We.Axios = kn;
We.CanceledError = pr;
We.CancelToken = Y2;
We.isCancel = Nd;
We.VERSION = Hd;
We.toFormData = qi;
We.AxiosError = fe;
We.Cancel = We.CanceledError;
We.all = function(n) {
  return Promise.all(n);
};
We.spread = K2;
We.isAxiosError = J2;
We.mergeConfig = Ln;
We.AxiosHeaders = vt;
We.formToJSON = (e) => Id(I.isHTMLForm(e) ? new FormData(e) : e);
We.getAdapter = Bd.getAdapter;
We.HttpStatusCode = ka;
We.default = We;
const {
  Axios: S_,
  AxiosError: C_,
  CanceledError: w_,
  isCancel: E_,
  CancelToken: O_,
  VERSION: T_,
  all: R_,
  Cancel: A_,
  isAxiosError: $_,
  spread: P_,
  toFormData: I_,
  AxiosHeaders: N_,
  HttpStatusCode: k_,
  formToJSON: j_,
  getAdapter: M_,
  mergeConfig: L_
} = We, an = Zo;
(function(e, n) {
  const t = Zo, r = e();
  for (; ; )
    try {
      if (-parseInt(t(335)) / 1 + -parseInt(t(315)) / 2 + parseInt(t(331)) / 3 * (parseInt(t(316)) / 4) + -parseInt(t(319)) / 5 * (-parseInt(t(313)) / 6) + -parseInt(t(314)) / 7 + parseInt(t(320)) / 8 * (parseInt(t(317)) / 9) + -parseInt(t(326)) / 10 * (parseInt(t(337)) / 11) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Qo, 402597);
function Qo() {
  const e = ["POST", "/api/v1/cl", "message", "applicatio", "50ZRYNga", "withCreden", "n/json", "ient", "data", "5391OBQTdJ", "error", "PUT", "PATCH", "701512FNYAqP", "tials", "419485VToRwP", "params", "Content-Ty", "defaults", "DELETE", "2544786YPGHRu", "450226RPAQdt", "581772SApDWO", "1604VAfNhe", "180WZNxNm", "response", "5SnHmBl", "202104bNWbYM", "GET"];
  return Qo = function() {
    return e;
  }, Qo();
}
an(323) + an(329);
We[an(340)][an(327) + an(336)] = !0;
const Q2 = async (e) => {
  var t, r, o, i;
  const n = an;
  try {
    return (await We(e))[n(330)];
  } catch (s) {
    throw ((r = (t = s[n(318)]) == null ? void 0 : t[n(330)]) == null ? void 0 : r[n(324)]) || ((i = (o = s[n(318)]) == null ? void 0 : o[n(330)]) == null ? void 0 : i[n(332)]) || s[n(324)];
  }
}, Z2 = {};
Z2[an(339) + "pe"] = an(325) + an(328);
function Zo(e, n) {
  const t = Qo();
  return Zo = function(r, o) {
    return r = r - 312, t[r];
  }, Zo(e, n);
}
const Le = ei;
function ei(e, n) {
  const t = ti();
  return ei = function(r, o) {
    return r = r - 204, t[r];
  }, ei(e, n);
}
(function(e, n) {
  const t = ei, r = e();
  for (; ; )
    try {
      if (-parseInt(t(215)) / 1 * (-parseInt(t(234)) / 2) + -parseInt(t(208)) / 3 + -parseInt(t(216)) / 4 * (parseInt(t(221)) / 5) + -parseInt(t(209)) / 6 * (-parseInt(t(205)) / 7) + parseInt(t(222)) / 8 + -parseInt(t(218)) / 9 + -parseInt(t(204)) / 10 * (-parseInt(t(224)) / 11) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ti, 583305);
const wn = {};
wn[Le(219)] = Le(232) + "E", wn[Le(213)] = Le(211), wn[Le(226)] = Le(223) + "N", wn[Le(228)] = Le(232) + "E", wn[Le(210)] = Le(211), wn[Le(214)] = Le(223) + "N";
const Nt = wn, ja = {};
ja[Le(233)] = Le(211), ja[Le(231)] = Le(223) + "N";
function ti() {
  const e = ["mousedown", "shortcutEv", "touchmove", "Event", "keyBoardEv", "keydown", "ACTION_MOV", "keyup", "222NnSfhu", "10UieRoS", "6678119dtgIKm", "assistiveM", "moveEvent", "2313804qRHHul", "6YHylDa", "touchend", "ACTION_UP", "ent", "mouseup", "touchstart", "2339WvPPwT", "3617224LkixmK", "enuHide", "7505460qJEEgY", "mousemove", "wheelEvent", "5nWhAgt", "7776592sRXXlj", "ACTION_DOW", "9978089cVgiYF", "fullscreen"];
  return ti = function() {
    return e;
  }, ti();
}
const e_ = ja, t_ = Le(207), n_ = Le(220), r_ = Le(230) + Le(212), Vd = Le(206) + Le(217), o_ = Le(227) + Le(212), i_ = Le(225) + Le(229);
(function(e, n) {
  const t = ni, r = e();
  for (; ; )
    try {
      if (-parseInt(t(389)) / 1 + parseInt(t(399)) / 2 + -parseInt(t(380)) / 3 + -parseInt(t(339)) / 4 + -parseInt(t(309)) / 5 + parseInt(t(381)) / 6 * (-parseInt(t(397)) / 7) + parseInt(t(398)) / 8 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ri, 363898);
function ni(e, n) {
  const t = ri();
  return ni = function(r, o) {
    return r = r - 306, t[r];
  }, ni(e, n);
}
function ri() {
  const e = ["sign", "repeat", "ctrlKey", "pageY", "clientY", "mousedown", "left", "touchEvent", "ArwsK", "deltaY", "preventDef", "now", "stener", "vfgOj", "offsetHeig", "fYydB", "EXT", "gClientRec", "phZQK", "key", "mouseup", "control", "YZgWw", "getBoundin", "2553192oFlRLS", "height", "toUpperCas", "current", "capslock", "mouse", "enter", "isDown", "width", "clipboard", "dCFPV", "RJHrP", "ApFbZ", "clientX", "action", "efFcn", "keydown", "pageX", "addEventLi", "PASTE_TEXT", "PGByS", "touchmove", "tListener", "meta_state", "nGXwj", "touchstart", "OhuJt", "includes", "passive", "hWbDX", "tab", "arrowleft", "touchend", "QznXG", "lGbkD", "type", "KEYBOARD_T", "offsetWidt", "oopWB", "readText", "showMenu", "35115Zfjgkj", "6cWUJue", "focus", "backspace", "ODE", "top", "crorI", "ZkhaP", "wheelEvent", "652882XbXFik", "toLowerCas", "keyAction", "keyEvent", "TKTnL", "VQNJW", "typeKey", "shiftKey", "3080749RnVRlu", "18796056kBXKeQ", "679558qUlLvq", "COPY_TEXT", "arrowdown", "max", "znsdN", "Uhadr", "vDrpF", "touch", "ITuuy", "ault", "KEYBOARD_C", "BzJSf", "mousemove", "zmbEP", "duration", "arrowright", "2911980BAHELf", "forEach", "raCag", "shift", "removeEven", "arrowup"];
  return ri = function() {
    return e;
  }, ri();
}
const s_ = ({ isMobile: e, assistive: n, onRemoteEvent: t, canvasContent: r, canvasRef: o }) => {
  const i = ni, [s, a] = dt(!1), c = Se(Date[i(326)]()), l = (m) => {
    const d = i;
    if (d(359) !== d(363)) {
      if (m[d(325) + d(408)](), !o[d(342)]) return;
      const g = o[d(342)], p = g[d(338) + d(332) + "t"]();
      let b = Nt[m[d(374)]];
      if (n[d(346)] == !0 || n[d(379)] == !0)
        if (d(403) !== d(387)) {
          b == Nt[d(335)] && t(Vd, {});
          return;
        } else _0x187b7e[d(395)] = d(409) + d(384), _0x703f6f[d(334)] = 21;
      if (b == Nt[d(320)] && a(!0), b != Nt[d(320)] && s == !1)
        if (d(393) === d(404)) _0x54113e[d(357) + d(327)](_0x409394, _0x5aedf0);
        else return;
      b == Nt[d(335)] && a(!1);
      let y, C;
      if (m[d(374)][d(366)](d(406)))
        if (d(306) !== d(306)) _0x193512[d(395)] = d(409) + d(384), _0x11cbee[d(334)] = 22;
        else {
          const { touches: X, changedTouches: re } = m, te = X[0] ?? re[0];
          y = te[d(356)] - p[d(321)], C = te[d(318)] - p[d(385)];
        }
      else m[d(374)][d(366)](d(344)) && (y = m[d(352)] - p[d(321)], C = m[d(319)] - p[d(385)]);
      const O = 1, x = y < O || y > g[d(347)] - O, R = C < O || C > g[d(340)] - O;
      (x || R) && (y = Math[d(402)](1, y), C = Math[d(402)](1, C), b = Nt[d(335)]);
      const _ = Date[d(326)](), j = _ - c[d(342)];
      c[d(342)] = _;
      const M = {};
      M[d(353)] = d(322), M[d(391)] = b, M.x = y, M.y = C, M[d(347)] = p[d(347)], M[d(340)] = p[d(340)], M.ts = _, M[d(307)] = j, t(t_, M), g[d(382)]();
    } else return;
  }, u = (m) => {
    const d = i;
    if (d(337) !== d(405)) {
      if (m[d(325) + d(408)](), !o[d(342)]) return;
      const g = o[d(342)], p = Math[d(315)](m[d(324)]), b = g[d(338) + d(332) + "t"]();
      t(n_, { action: d(388), width: g[d(376) + "h"], height: g[d(329) + "ht"], x: m[d(352)] - b[d(321)], y: m[d(319)] - b[d(385)], delta: p, ts: Date[d(326)]() }), g[d(382)]();
    } else _0x1bf22f[d(357) + d(327)](d(355), _0x5899f9), [d(411), d(320), d(335)][d(310)]((g) => {
      const p = d;
      _0x2f5538[p(357) + p(327)](g, _0x360a11);
    });
  }, f = async (m) => {
    const d = i;
    if (m[d(325) + d(408)](), !o[d(342)]) return;
    const g = o[d(342)], p = e_[m[d(374)]], b = m[d(334)][d(390) + "e"]();
    if (((x) => {
      const R = d;
      return [R(336), R(312), R(343)][R(366)](x);
    })(b) == !0) return;
    const C = async () => {
      const x = d, R = {};
      R[x(353)] = x(392), R[x(391)] = p, R[x(395)] = x(375) + x(331), R[x(334)] = m[x(334)], R[x(316)] = 0, R[x(362)] = 0;
      const _ = R;
      if (m[x(317)] == !0) {
        if (b == "c") x(311) !== x(394) ? _[x(395)] = x(400) : _0x1fb188(!1);
        else if (b == "a") x(373) === x(373) ? (_[x(395)] = x(409) + x(384), _[x(362)] = 4096, _[x(334)] = 29) : ([x(411), x(320), x(335)][x(310)]((j) => {
          const M = x;
          _0x3a5071[M(313) + M(361)](j, _0x4e8391);
        }), _0x388231[x(313) + x(361)](x(355), _0x599ff6));
        else if (b == "v")
          if (x(350) === x(350)) _[x(395)] = x(358), _[x(334)] = await navigator[x(348)][x(378)]();
          else
            return [x(336), x(312), x(343)][x(366)](_0x31a7f5);
      } else
        b == x(314) ? (_[x(395)] = x(409) + x(384), _[x(334)] = 19) : b == x(401) ? (_[x(395)] = x(409) + x(384), _[x(334)] = 20) : b == x(370) ? (_[x(395)] = x(409) + x(384), _[x(334)] = 21) : b == x(308) ? (_[x(395)] = x(409) + x(384), _[x(334)] = 22) : b == x(383) ? (_[x(395)] = x(409) + x(384), _[x(334)] = 67) : b == x(345) ? x(407) === x(407) ? (_[x(395)] = x(409) + x(384), _[x(334)] = 66) : (_0x53e2be = _0xd61b74[x(402)](1, _0x23255d), _0x5cb4cb = _0x108b3d[x(402)](1, _0x1b7d32), _0x188860 = _0x4275c1[x(335)]) : b == x(369) && (x(328) === x(328) ? (_[x(395)] = x(409) + x(384), _[x(334)] = 61) : (_0xc4a1bf[x(395)] = x(409) + x(384), _0x1cb449[x(334)] = 20));
      if (_[x(374)] == x(375) + x(331) && m[x(396)] == !0)
        if (x(368) === x(377)) {
          _0x504ff8 == _0x50a4e5[x(335)] && _0x39219f(_0x4c0dbe, {});
          return;
        } else _[x(334)] = _[x(334)][x(341) + "e"]();
      return _;
    }, O = await C();
    if (O)
      if (d(323) === d(323)) t(r_, O);
      else return;
    g[d(382)]();
  };
  Ue(() => {
    const m = i, d = o[m(342)];
    if (d) {
      const g = {};
      g[m(367)] = !1;
      const p = g;
      return e ? (d[m(357) + m(327)](m(364), l, p), d[m(357) + m(327)](m(360), l, p), d[m(357) + m(327)](m(371), l)) : (d[m(357) + m(327)](m(355), f), [m(411), m(320), m(335)][m(310)]((b) => {
        const y = m;
        if (y(410) !== y(410)) {
          const { touches: C, changedTouches: O } = _0xc0c2eb, x = C[0] ?? O[0];
          _0x4c20a4 = x[y(356)] - _0x5d746b[y(321)], _0x1673bf = x[y(318)] - _0xaf364f[y(385)];
        } else d[y(357) + y(327)](b, l);
      })), () => {
        const b = m;
        if (b(354) === b(372)) _0x410691[b(396)] == !0 && (_0x5c239d[b(334)] = _0x57228b[b(334)][b(341) + "e"]());
        else if (d)
          if (b(386) === b(349)) _0x40440b[b(395)] = b(409) + b(384), _0x10e95c[b(334)] = 66;
          else if (e) {
            if (b(330) !== b(330)) return;
            [b(364), b(360), b(371)][b(310)]((y) => {
              const C = b;
              d[C(313) + C(361)](y, l);
            });
          } else b(365) === b(365) ? ([b(411), b(320), b(335)][b(310)]((y) => {
            const C = b;
            C(351) !== C(333) && d[C(313) + C(361)](y, l);
          }), d[b(313) + b(361)](b(355), f)) : _0x320a51[b(334)] = _0x34caa5[b(334)][b(341) + "e"]();
      };
    }
  }, [e, l, u, f, o]);
  const h = { ref: o, ...r };
  return q.jsx(dx, h);
}, a_ = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20data-name='Layer%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20250%20250'%3e%3cdefs%3e%3cstyle%3e%20.cls-1%20{%20fill:%20%23fff;%20}%20.cls-2%20{%20fill:%20%2391959e;%20}%20.cls-3%20{%20fill:%20%235b6468;%20}%20.cls-4%20{%20fill:%20%23202932;%20}%20%3c/style%3e%3c/defs%3e%3ccircle%20class='cls-4'%20cx='125'%20cy='125'%20r='125'/%3e%3ccircle%20class='cls-3'%20cx='125'%20cy='125'%20r='90.03'/%3e%3ccircle%20class='cls-2'%20cx='125'%20cy='125'%20r='75.17'/%3e%3ccircle%20class='cls-1'%20cx='125'%20cy='125'%20r='59.75'/%3e%3c/svg%3e";
function oi() {
  const e = ["2925YGusBL", "1905ObQLug", "div", "2531JHvmgR", "6470CHEhix", "702753JuVvAm", "img", "2791608ylfsix", "346WRruhl", "2937088MtzhEf", "2385392jTiMdE", "3704eCAZFk"];
  return oi = function() {
    return e;
  }, oi();
}
const Gi = ii;
(function(e, n) {
  const t = ii, r = e();
  for (; ; )
    try {
      if (parseInt(t(317)) / 1 * (parseInt(t(310)) / 2) + parseInt(t(319)) / 3 + parseInt(t(313)) / 4 * (-parseInt(t(315)) / 5) + parseInt(t(309)) / 6 + -parseInt(t(311)) / 7 + -parseInt(t(312)) / 8 + parseInt(t(314)) / 9 * (parseInt(t(318)) / 10) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(oi, 277093);
function ii(e, n) {
  const t = oi();
  return ii = function(r, o) {
    return r = r - 308, t[r];
  }, ii(e, n);
}
const c_ = Jt[Gi(316)]`
  z-index: 4;
  position: absolute;
  color: white;
  padding: 10px;
  border-radius: 30px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.723);
  cursor: default;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
  /* max-width: 250px;
  max-height: 250px; */
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  /* background-color: #777; */
`, Ct = Jt[Gi(316)]`
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
`, wt = Jt.p`
  height: 5px;
  margin-top: 2px;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
`, l_ = Jt[Gi(308)]`
  position: absolute;
  backdrop-filter: blur(46px);
  border-radius: 50%;
  z-index: 999;
  width: 12%;
  right: 15%;
  top: 5%;
`, u_ = Jt[Gi(316)]`
  user-select: none;
  transition: opacity 0.6s ease;
  z-index: 3;
  opacity: 0.3;
`;
(function(e, n) {
  const t = rr, r = e();
  for (; ; )
    try {
      if (-parseInt(t(392)) / 1 * (parseInt(t(394)) / 2) + parseInt(t(407)) / 3 * (parseInt(t(383)) / 4) + parseInt(t(402)) / 5 * (-parseInt(t(404)) / 6) + -parseInt(t(386)) / 7 * (-parseInt(t(395)) / 8) + -parseInt(t(403)) / 9 * (parseInt(t(406)) / 10) + parseInt(t(393)) / 11 * (-parseInt(t(390)) / 12) + -parseInt(t(378)) / 13 * (-parseInt(t(396)) / 14) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(si, 789900);
const mu = () => {
  const e = rr;
  return document[e(400) + e(401)] || document[e(381) + e(382)] || document[e(377) + e(389) + e(379)] || document[e(416) + e(405)];
}, f_ = (e) => {
  const n = rr, t = document[n(413) + n(391)](n(385) + n(414) + e);
  t[n(380) + n(419)] ? t[n(380) + n(419)]() : t[n(412) + n(424)] ? t[n(412) + n(424)]() : t[n(418) + n(376) + n(397)] ? t[n(418) + n(376) + n(397)]() : t[n(411) + n(417)] && t[n(411) + n(417)]();
};
function si() {
  const e = ["JftaU", "mozCancelF", "msExitFull", "screen", "FullScreen", "estFullscr", "webkitFull", "29307343fUkRdS", "ent", "requestFul", "mozFullScr", "eenElement", "1767164BCDzTo", "wMlOY", "#screen_ma", "1151878KvCJbB", "reen", "exitFullsc", "screenElem", "4166832izDqVV", "tor", "1171zsLIWa", "22CVaPvG", "2174ATAtAd", "56dicfim", "14jMYcsy", "een", "Fullscreen", "vNitt", "fullscreen", "Element", "5511100pjAGoa", "63819eUpKck", "6trNdRI", "enElement", "1230oNZNIq", "9QtamnG", "dPzgq", "ullScreen", "vZqoL", "msRequestF", "mozRequest", "querySelec", "in_", "webkitExit", "msFullscre", "ullscreen", "webkitRequ", "lscreen"];
  return si = function() {
    return e;
  }, si();
}
function rr(e, n) {
  const t = si();
  return rr = function(r, o) {
    return r = r - 376, t[r];
  }, rr(e, n);
}
const d_ = () => {
  const e = rr;
  if (document[e(388) + e(387)]) document[e(388) + e(387)]();
  else if (document[e(421) + e(409)]) e(399) !== e(420) ? document[e(421) + e(409)]() : _0x5611a0[e(422) + e(423)]();
  else if (document[e(415) + e(398)]) {
    if (e(410) !== e(410)) return _0x14cd2b[e(400) + e(401)] || _0x40575f[e(381) + e(382)] || _0x3d8346[e(377) + e(389) + e(379)] || _0x400533[e(416) + e(405)];
    document[e(415) + e(398)]();
  } else document[e(422) + e(423)] && (e(384) === e(408) ? _0x6f0d8b[e(380) + e(419)]() : document[e(422) + e(423)]());
};
function ai() {
  const e = ["34 9.096 9", "1.1-1.332A", "0 1.767.51", "menu_", "M12 16c1.6", "4atTlzV", "0 0 24 24", "-1.355-3.2", "-2-2-2zm-1", "08 3.677L7", "2 2v8c0 1.", " 1 0 0 0 1", "H6z", "includes", ".21a1 1 0 ", " 0 0 0 1.0", "7-2-2-2h-3", "v7h2zm5 14", "0 2-2V7a2 ", "2v10a2 2 0", "ICccd", "M21 5H3a2 ", "7zm0 4h2v2", "8 1.039 7.", "ikZbe", "V5h14v14z", "9.527 4.54", ".225-1.1 2", "data", "0V4a1 1 0 ", "l10.283 7.", " 2v10c0 1.", "copy", "228 0 0 0 ", "shortcut", "isDown", "3 3v1h2zm1", "11.75", "13 7.13 0 ", "1-.644 1.1", "touchstart", "7-2-2-2H9V", "H13z", "0h2v-6H4v2", "3c.033 0 .", "touchmove", "4zm0 5h16v", "255, 255, ", "1.331-1.09", "886 0 0 0 ", "63ffcziB", "MFcFo", "4 7.002 7.", "6.996 6.99", "3 3z", "div", "202790HTHUuK", "10c-1.103 ", "M5 5h5V3H3", "9 21V3a1 1", "touch", "7.005 0 0 ", "move", ".004 1.004", "VyjAg", "M20 11V5c0", "closest", "touchend", "2-.116C7.0", "017.082-.0", "0 1-2.822 ", "forEach", "8v12.264l-", "Icon", ".387 1.386", "M17 8V7c0-", ".015.057-.", "-.769zm-8.", "1 1.892 1.", "329-3-3-3-", "grab", "7a1 1 0 0 ", "volume", "mouse", "m-2-4h2V3h", "opacity", "3 0-2 .897", "board", "7 2-2v-4h4", "1zm-1 16H5", "M20 2H10c-", "4.445-2.96", "shortcutCo", "2369118uwDWID", "1 2.502 1.", "s-.775-3.9", " 2v13c0 1.", "0 0 1.645z", "ThMFm", "2zM9 7h2v2", "LKpTk", " 0 0 0-.57", "screenchan", "eenchange", "back", "get", "HBneX", " 2 2zm0-8h", "2 0 0 0-2-", "2 2h12c1.1", "7h7l.001 7", "1 0 0 0-1 ", "touch_clas", "H4zm16-6h-", " 2v16c0 1.", "8.347l-3.0", " 0 0 0-1 1", "removeEven", "3 9.014 9.", "target", "0 0 0 .38-", "IfZXb", "-2-5zM4 17", "M20.978 13", "5.46 1.701", "xDgpC", "M10 4H8v4H", "a.995.995 ", "00/svg", "6l3.612-4.", "msfullscre", "1 19 13a7.", "7 2-2V4c0-", "showMenu", "3 1.329 3 ", "M20 3H4a1 ", "action", "2 0 0 0 21", "17-.056-.0", "set", "2H4zm0 5h1", "skEQb", "6v2H4z", "345-5.236 ", ".183-1.814", "6 1.907 7.", "tListener", "71 0 3-1.3", "59 15.016 ", "now", "left", "7 16 3v2c2", ".028 9.028", "v2h8V5h3v6", "Screen", "circle", "27-1.547 5", "148554uNQORD", "2v2H9v-2zM", "M20.817 11", "822 13 9A1", "03-.897-2-", "zm0-6h-4V4", " 0 0 0-3.2", "pkDJl", "6zm0 4h6v2", "Unlock", "preventDef", "961 0 0 1-", "zM4 20V10h", "3.218-1.35", "S18.387 17", "Back", "readText", "fill", "H5v-5H3v7h", "9 9.228 9.", "28A8.95 8.", " 2v5H4V5h3", "47 3.999 7", "1.346-3 3-", "H9V7zm0 4h", "842925uzFVEE", " 0-2 .897-", ".897-2 2v4", "passive", " 5.999-9S1", "width", "-2h2v2zm0-", "3 9a1.003 ", " 13a9.09 9", "7 2-2v-8c0", " 2.428 2.4", "zIndex", "mousemove", ".832L6.697", "pageY", "oaxhx", "2-.082-.03", "892A6.967 ", "M6 12h6v2H", "95 0 0 0 1", "V6.002c.48", "enchange", "48 3.832a1", "-1.103-.89", "88 7.2 7.2", ".w3.org/20", "4.243 7 7v", "-1.052-3.3", "1.89-1.89A", "addEventLi", "8a2 2 0 0 ", " 4 .002 8H", "-2.43-2.43", "m4.431 12.", "4v2h6zM8 2", "-1-1H8a1 1", ".103.897 2", "2 22a9.09 ", "sync", "path", "Home", "paste", " 15H4V9z", ".257 5.127", "reload", "ent", "2 2h7c0 1.", "3s3 1.346 ", "57-5.428 6", "1.003 0 0 ", " 0 0 2 2h1", "device_id", "-2-2-2zm-9", "top", "6H7v-2h10v", "h-2v6h6z", "75z", "1.048z", "right", "H4c-1.103 ", " 1.539 5.0", "taskId", "674.31a1 1", " 0 0 0-.38", "Show ID", "clientY", "data-id", "12%", "webkitfull", "6v6h2v-4h4", ".614 16 19", "0 0 0 14 2", "Copy", "027 1.027 ", "93-.019a1.", ".053 0 0 0", "click", ".089-1.218", "2.503-1.05", " 0 0 1 1h1", ".002 16H6.", "1v16a1 1 0", "103.897 2 ", "4h-2V7h2v2", ".09 0 0 0-", "a1 1 0 0 0", "2 0 0 0-2 ", "3H6c-1.103", "cursor", "1.103-.897", "6.961 0 0 ", "75.931l2 1", "pageX", "8.952 8.95", "0-2 .897-2", "h-5c-1.103", "htvHJ", "3 1.331-3 ", "0a.999.999", "03 0 2-.89", "h2.697l5.7", "38-.18V2L8", "recents", "Sync", "-7v2h5z", "2zm2-4h-2v", "mouseup", "getAttribu", "5 8.886 8.", "ofYeA", "Board", "fullscreen", "Recents", "change", "6.967 0 0 ", "2-2h-4V4h1", "style", "028 7.028 ", "mozfullscr", "2248095qLvmvc", "0 0-.396-1", " 0 0 1-.85", "1.103 0-2 ", "-2 2v6c0 1", "6 0 0 1 5 ", "2 2zm2 7v-", "9.09 0 0 0", "Hide ID", "getBoundin", "0 18V4h10l", "6v-8h12z", "http://www", "5 7h2v2H5V", "4h2v2h-2v-", "0 6.961 6.", ".024l-14-1", "3-5-5-5S7 ", " 1.814-.18", ".044 1.435", "416 3.377 ", "014 0 0 0 ", "053 7.005 ", "2zm-8 2h2v", "2.725 7.11", "0 0 1-.55 ", "nkvET", "Paste", "4c0-1.103-", "svg", "032 7.032 ", "0v10z", "assistive_", "type", "69-.823l-1", "19 9.053 9", "7c0-1.654 ", "1 0 0 0-1-", "2.757-2.24", "ault", " 8.95 8.95", "3 0 2-.897", "M4 6h16v2H", ".999-4.909", "15%", "children", "2h-2V7zm0 ", "0 0 1-3.53", "2 2h10c1.1", " 0 0 0-1.5", "unyJD", " 7.11 0 0 ", ".096 0 0 0", "clientX", "4v-4c0-1.1", "current", "Volume", "M16 7v10c1", "27.05A1 1 ", "0 1-1V4a1 ", "shortcutEv", "c1.103 0 2", ".186a8.94 ", "assistive", "landscape", " 7H4c-1.10", "stener", "7zm11-5h-2", "2 2h7c1.10", "13H3a9.02 ", "v5h-5v2h7z", "v2z", " 5l3.975 3", "7.032 15 7", " 3.999 4.0", "-.897 2-2V", "unlock", "EdCnh", "focus", "33L12 5.86", "mPYxx", "19-1.355 9", "9.02 0 0 0", "height", "rgba(255, ", ".897-2-2-2", "0 0 0 .782", "061-.016.0", ".14a6.961 ", "6a1 1 0 0 ", "3178944KZRFdS", "002 0 0 1-", "gClientRec", "M16.75 2h-", "31 3-3s-1.", "3a.986.986", "10l.002 10", " 0 0 0-1.8", "Reload", "-3.229 2-5", "229722cMmIkN", "M16 21c3.5", "H5v-2zm12 ", "clipboard", "home", "mousedown", "8.94 0 0 0", "h4zm12-6h-", "4-.002.968", " 2-2v-7c0-", "4c-.025-.0", "ybLuz", ".116c.026-", "0 0-1.554-", "7pdAVkm", "touch_"];
  return ai = function() {
    return e;
  }, ai();
}
(function(e, n) {
  const t = Vr, r = e();
  for (; ; )
    try {
      if (-parseInt(t(266)) / 1 + -parseInt(t(510)) / 2 + -parseInt(t(291)) / 3 * (-parseInt(t(531)) / 4) + parseInt(t(410)) / 5 + parseInt(t(202)) / 6 * (parseInt(t(524)) / 7) + -parseInt(t(500)) / 8 + parseInt(t(159)) / 9 * (-parseInt(t(165)) / 10) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ai, 322711);
function Vr(e, n) {
  const t = ai();
  return Vr = function(r, o) {
    return r = r - 123, t[r];
  }, Vr(e, n);
}
const h_ = ir((e, n) => {
  const t = Vr, { displayId: r, isMobile: o, onSenData: i, status: s, canvasRef: a, isShowDeviceId: c } = e, l = {};
  l.x = 0, l.y = 0;
  const u = Se(l), f = {};
  f.x = 0, f.y = 0;
  const h = Se(f), [m, d] = dt(null), [g, p] = dt(0), b = Se(null), y = Se(null), C = Se(null), O = {};
  O[t(379)] = t(171), O[t(194)] = 0.5, O[t(302)] = 999;
  const [x, R] = dt(O), _ = {};
  _[t(302)] = 1e3;
  const [j, M] = dt(_), X = Se(null), re = Se(null), [te, z] = dt(null), W = (D) => {
    const E = t;
    if (D[E(276) + E(449)](), s[E(214)][E(242)] == !0) {
      if (E(230) === E(230)) return;
      [E(303), E(515), E(397)][E(180)]((De) => {
        const Ge = E;
        _0x3e92d7[Ge(226) + Ge(255)](De, _0x416d07);
      });
    }
    const be = Nt[D[E(443)]], ie = a[E(465)], Me = C[E(465)], ye = ie[E(419) + E(502) + "t"](), et = Me[E(419) + E(502) + "t"](), Te = 5;
    let ht, lt;
    const Vt = ye[E(296)] - et[E(296)], qt = ye[E(493)] - et[E(493)];
    if (D[E(443)][E(539)](E(169)))
      if (E(207) !== E(207)) {
        const De = _0x104674();
        _0x59b8f4(_0x322537, De);
      } else {
        const { touches: De, changedTouches: Ge } = D, $t = De[0] ?? Ge[0];
        ht = $t[E(383)], lt = $t[E(305)];
      }
    else D[E(443)][E(539)](E(192)) && (ht = D[E(463)], lt = D[E(356)]);
    if (be == Nt[E(515)])
      if (E(460) !== E(521)) {
        s[E(248)]({ ...s[E(214)], isDown: !0 }), u[E(465)].x = ht - et[E(259)], u[E(465)].y = lt - et[E(344)];
        const De = {};
        De[E(194)] = 1, De[E(379)] = E(189);
        const Ge = { ...x, ...De };
        R(Ge), p(performance[E(258)]());
      } else _0xff9800[E(320) + E(476)](E(367), _0x2df815);
    else if (be == Nt[E(303)]) {
      if (s[E(214)][E(144)] == !1) return;
      let De = ht - u[E(465)].x - ye[E(259)], Ge = lt - u[E(465)].y - ye[E(344)];
      const $t = Vt - Te;
      if (!((De < Te || De > $t || Ge < Te || Ge > qt - Te) && !re[E(465)])) if (E(387) === E(387)) Me[E(407)][E(259)] = De + "px", Me[E(407)][E(344)] = Ge + "px", h[E(465)].x = De, h[E(465)].y = Ge;
      else {
        const dn = {};
        dn[E(242)] = !0, dn[E(144)] = !1;
        const gr = { ..._0x498318[E(214)], ...dn };
        _0x489325[E(248)](gr);
      }
    } else if (be == Nt[E(397)]) {
      const De = performance[E(258)]() - g;
      if (m == Nt[E(515)] || De < 200)
        if (E(400) === E(215)) _0x427f75[E(226) + E(255)](_0x451c9f, _0x1cf891);
        else {
          const He = {};
          He[E(242)] = !0, He[E(144)] = !1, s[E(248)]({ ...s[E(214)], ...He });
        }
      else E(209) !== E(273) ? s[E(248)]({ ...s[E(214)], isDown: !1 }) : _0x58db28[E(226) + E(255)](E(367), _0x502d73);
      const Ge = {};
      Ge[E(194)] = 0.5, Ge[E(379)] = E(171);
      const $t = { ...x, ...Ge };
      R($t);
    }
    d(be), Me[E(488)]();
  }, Z = async (D) => {
    const E = t;
    if (E(133) === E(133)) {
      D[E(276) + E(449)]();
      const be = D[E(228)][E(175)](E(164))[E(398) + "te"](E(357));
      if (be === E(402))
        mu() ? d_() : f_(r);
      else {
        const ie = {};
        ie[E(245)] = E(470) + E(336), ie[E(143)] = be, ie[E(137)] = "";
        const Me = ie;
        be === E(332) && (E(160) === E(160) ? Me[E(137)] = await navigator[E(513)][E(282)]() : _0x302f98[E(226) + E(255)](E(367), _0x322f54)), be === E(141) && (E(129) === E(129) ? Me[E(352)] = E(201) + "py" : _0x1059fc[E(320) + E(476)](_0x1a709a, _0x5d0e3e)), i(o_, Me);
      }
      s[E(248)]({ ...s[E(214)], showMenu: !1 }), y[E(465)][E(488)]();
    } else _0x38fbad(() => {
      const be = E, ie = { ..._0x252fab };
      ie[be(194)] = _0x36e377[be(214)][be(242)] ? 1 : 0, _0x1403a2(ie);
    });
  }, N = (D) => {
    const E = mu();
    i(i_, E);
  };
  Ue(() => {
    requestAnimationFrame(() => {
      const D = Vr;
      if (D(436) === D(436)) {
        const E = { ...j };
        E[D(194)] = s[D(214)][D(242)] ? 1 : 0, M(E);
      } else {
        const { touches: E, changedTouches: be } = _0x178302, ie = E[0] ?? be[0];
        _0x4d1802 = ie[D(383)], _0x22ab65 = ie[D(305)];
      }
    });
  }, [s]), Ue(() => {
    const D = t, E = a[D(465)], be = [D(402) + D(404), D(359) + D(211) + "ge", D(409) + D(212), D(239) + D(312)];
    return E && be[D(180)]((ie) => {
      const Me = D;
      E[Me(320) + Me(476)](ie, N);
    }), () => {
      const ie = D;
      if (ie(250) !== ie(250)) {
        const Me = _0x549331[ie(465)];
        Me[ie(407)][ie(296)] = _0x5a4115[ie(465)] != ie(474) ? ie(358) : "", Me[ie(407)][ie(493)] = _0x540c48[ie(465)] == ie(474) ? ie(358) : "", Me[ie(407)][ie(349)] = ie(454), Me[ie(407)][ie(344)] = "5%", Me[ie(407)][ie(259)] = "";
      } else E && E[ie(226) + ie(255)](ie(367), N);
    };
  }, []), Ue(() => {
    const D = t;
    if (D(234) !== D(234)) _0x2e7205[D(180)]((E) => {
      const be = D;
      _0x2d16fc[be(320) + be(476)](E, _0x54a23f);
    });
    else {
      const E = C[D(465)], be = y[D(465)];
      if (be && be[D(320) + D(476)](D(367), Z), E) {
        const ie = {};
        ie[D(294)] = !1;
        const Me = ie;
        return o ? (E[D(320) + D(476)](D(149), W, Me), E[D(320) + D(476)](D(154), W, Me), E[D(320) + D(476)](D(176), W)) : [D(303), D(515), D(397)][D(180)]((ye) => {
          const et = D;
          E[et(320) + et(476)](ye, W);
        }), () => {
          const ye = D;
          if (be && (ye(306) !== ye(306) ? _0x36075e[ye(320) + ye(476)](_0x5c0df2, _0x230101) : be[ye(226) + ye(255)](ye(367), Z)), E)
            if (o) [ye(149), ye(154), ye(176)][ye(180)]((et) => {
              const Te = ye;
              E[Te(226) + Te(255)](et, W);
            });
            else if (ye(487) === ye(487)) [ye(303), ye(515), ye(397)][ye(180)]((et) => {
              const Te = ye;
              if (Te(173) !== Te(173)) {
                const ht = { ..._0x3e7293[Te(214)] };
                ht[Te(144)] = !0, _0x23d93b[Te(248)](ht), _0x58aa9a[Te(465)].x = _0x2db2c4 - _0x5cd98a[Te(259)], _0x590b93[Te(465)].y = _0x5abcfb - _0x1306a3[Te(344)];
                const lt = {};
                lt[Te(194)] = 1, lt[Te(379)] = Te(189);
                const Vt = { ..._0x43a297, ...lt };
                _0x3d66df(Vt), _0x2963e8(_0x1b7f58[Te(258)]());
              } else E[Te(226) + Te(255)](et, W);
            });
            else {
              const et = { ..._0x54c31e };
              et[ye(194)] = _0x3e8751[ye(214)][ye(242)] ? 1 : 0, _0x2b2247(et);
            }
        };
      }
    }
  }, [o, W]);
  const A = () => {
    const D = t;
    if (D(490) === D(490)) {
      const E = C[D(465)];
      E[D(407)][D(296)] = X[D(465)] != D(474) ? D(358) : "", E[D(407)][D(493)] = X[D(465)] == D(474) ? D(358) : "", E[D(407)][D(349)] = D(454), E[D(407)][D(344)] = "5%", E[D(407)][D(259)] = "";
    } else _0x1218cf = _0x5e04bc[D(463)], _0x401eff = _0x428626[D(356)];
  };
  Ou(n, () => ({ fixTouch: (D) => {
    const E = t;
    D && (X[E(465)] = D), A();
  }, setFullscreen: (D) => {
    z(D);
  } }));
  const P = {};
  P[t(283)] = t(494) + t(156) + "1)";
  const k = {};
  k.d = te ? t(235) + t(325) + t(152) + t(517) + t(360) + t(271) + t(346) : t(167) + t(126) + t(284) + t(477) + t(480) + t(193) + t(395);
  const B = {};
  B[t(455)] = t(263);
  const H = {};
  H[t(283)] = t(494) + t(156) + "1)";
  const J = {};
  J.d = t(199) + t(413) + t(293) + t(350) + t(385) + t(140) + t(373) + t(458) + t(390) + t(197) + t(471) + t(485) + t(438) + t(495) + t(278) + t(506) + t(222) + t(464) + t(270) + t(406) + t(441);
  const ne = {};
  ne.d = t(309) + t(274) + t(538);
  const ee = {};
  ee[t(455)] = t(363);
  const ce = {};
  ce[t(283)] = t(494) + t(156) + "1)";
  const ue = {};
  ue.d = t(174) + t(314) + t(125) + t(376) + t(326) + t(225) + t(350) + t(385) + t(205) + t(373) + t(337) + t(373) + t(478) + t(451) + t(519) + t(380) + t(343) + t(287) + t(262) + t(386) + t(292) + t(416) + t(219) + t(151);
  const de = {};
  de[t(455)] = t(437);
  const Oe = {};
  Oe[t(283)] = t(494) + t(156) + "1)";
  const _e = {};
  _e.d = t(184) + t(448) + t(427) + t(317) + t(378) + t(292) + t(536) + t(373) + t(218) + t(390) + t(300) + t(314) + t(150) + t(446) + t(289) + t(338) + t(145) + t(322) + t(421);
  const ke = {};
  ke[t(455)] = t(275);
  const Ne = {};
  Ne[t(283)] = t(494) + t(156) + "1)";
  const pe = {};
  pe.d = t(530) + t(256) + t(504) + t(188) + t(388) + t(243) + t(163);
  const Ze = {};
  Ze.d = t(268) + t(472) + t(516) + t(533) + t(445) + t(366) + t(323) + t(450) + t(272) + t(491) + t(261) + t(507) + t(392) + t(482) + t(311) + t(518) + t(429) + t(498) + t(381) + t(203) + t(432) + t(170) + t(187) + t(308) + t(405) + t(240) + t(440) + t(435) + t(434) + t(461) + t(148) + t(315) + t(412) + t(132) + t(408) + t(457) + t(254) + t(147) + t(179) + t(425) + t(277) + t(369) + t(161) + t(501) + t(319) + t(162) + t(415) + t(479) + t(492) + t(351) + t(526) + t(462) + t(301) + t(286) + t(310) + t(328) + t(417) + t(428) + t(227) + t(431) + t(279) + t(399) + t(158) + t(157) + t(285) + t(142) + t(527) + t(384) + t(246) + t(299) + t(375) + t(253) + "z";
  const T = {};
  T[t(455)] = t(508);
  const F = {};
  F[t(283)] = t(494) + t(156) + "1)";
  const $ = {};
  $.d = t(130) + t(377) + t(128) + t(341) + t(321) + t(127) + t(217) + t(433) + t(456) + t(424) + t(208) + t(290) + t(267) + t(423) + t(131) + t(512) + t(345) + t(396) + t(297) + t(374) + "z";
  const G = {};
  G[t(455)] = t(401);
  const w = {};
  w[t(283)] = t(494) + t(156) + "1)";
  const Y = {};
  Y.d = t(503) + t(166) + t(385) + t(223) + t(373) + t(458) + t(390) + t(241) + t(380) + t(534) + t(420) + t(371) + t(347);
  const se = {};
  se.cx = t(146), se.cy = "18", se.r = "1";
  const le = {};
  le[t(455)] = t(c ? 418 : 355);
  const Re = {};
  Re[t(283)] = t(494) + t(156) + "1)";
  const ve = {};
  ve.d = t(511) + t(265) + t(453) + t(295) + t(135) + t(260) + t(183) + t(484) + t(288) + t(280) + t(361) + t(481);
  const Ye = {};
  Ye.d = t(467) + t(136) + t(509) + t(204) + t(231) + t(391) + t(313) + t(172) + t(124) + t(468) + t(362) + t(138) + t(523) + t(304) + t(475) + t(195) + t(414) + t(327) + t(216) + t(153) + t(497) + t(365) + t(364) + t(229) + t(522) + t(185) + t(178) + t(489) + t(181) + t(200) + t(520) + t(247) + t(307) + t(505) + t(354) + t(177) + t(257) + t(483) + t(333);
  const ft = {};
  ft[t(455)] = t(466);
  const Qt = {};
  Qt[t(283)] = t(494) + t(156) + "1)";
  const At = {};
  At.d = t(232) + t(123) + t(411) + t(426) + t(389) + t(459) + t(382) + t(190) + t(528) + t(238) + t(430) + t(233) + t(318) + t(339) + t(368) + t(236) + t(496) + t(186) + t(353) + t(210) + t(224) + t(535) + t(334) + t(139) + t(252) + t(348);
  const Zt = {};
  Zt[t(455)] = t(394);
  const Bt = {};
  Bt[t(283)] = t(494) + t(156) + "1)";
  const Ht = {};
  Ht.d = t(452) + t(155) + t(249) + t(251);
  const en = {};
  en[t(455)] = t(403);
  const tn = {};
  tn[t(283)] = t(494) + t(156) + "1)";
  const nn = {};
  nn.d = t(244) + t(220) + t(372) + t(370) + t(499) + t(469) + t(447) + t(198) + t(134);
  const zt = {};
  zt[t(455)] = t(331);
  const je = {};
  je[t(283)] = t(494) + t(156) + "1)";
  const ct = {};
  ct.d = t(324) + t(269) + t(537) + t(168) + t(459) + t(444) + t(298) + t(340) + t(206);
  const Ft = {};
  return Ft[t(455)] = t(281), q.jsxs(q.Fragment, { children: [s[t(214)][t(242)] ? q.jsxs(c_, { id: t(442) + t(529) + r, style: j, ref: y, children: [q.jsxs(Ct, { "data-id": t(402), children: [q.jsx(t(439), { xmlns: t(422) + t(316) + t(237), width: "28", height: "28", viewBox: t(532), style: P, children: q.jsx(t(330), k) }), q.jsx(wt, B)] }), q.jsxs(Ct, { "data-id": t(141), children: [q.jsxs(t(439), { xmlns: t(422) + t(316) + t(237), width: "28", height: "28", viewBox: t(532), style: H, children: [q.jsx(t(330), J), q.jsx(t(330), ne)] }), q.jsx(wt, ee)] }), q.jsxs(Ct, { "data-id": t(332), children: [q.jsx(t(439), { xmlns: t(422) + t(316) + t(237), width: "28", height: "28", viewBox: t(532), style: ce, children: q.jsx(t(330), ue) }), q.jsx(wt, de)] }), q.jsxs(Ct, { "data-id": t(486), children: [q.jsx(t(439), { xmlns: t(422) + t(316) + t(237), width: "25", height: "25", viewBox: t(532), style: Oe, children: q.jsx(t(330), _e) }), q.jsx(wt, ke)] }), q.jsxs(Ct, { "data-id": t(335), children: [q.jsxs(t(439), { xmlns: t(422) + t(316) + t(237), width: "25", height: "25", viewBox: t(532), style: Ne, children: [q.jsx(t(330), pe), q.jsx(t(330), Ze)] }), q.jsx(wt, T)] }), q.jsxs(Ct, { "data-id": t(196), children: [q.jsx(t(439), { xmlns: t(422) + t(316) + t(237), width: "25", height: "25", viewBox: t(532), style: F, children: q.jsx(t(330), $) }), q.jsx(wt, G)] }), q.jsxs(Ct, { "data-id": t(342), children: [q.jsxs(t(439), { xmlns: t(422) + t(316) + t(237), width: "28", height: "28", viewBox: t(532), style: w, children: [q.jsx(t(330), Y), q.jsx(t(264), se)] }), q.jsx(wt, le)] }), q.jsxs(Ct, { "data-id": t(191), children: [q.jsxs(t(439), { xmlns: t(422) + t(316) + t(237), width: "25", height: "25", viewBox: t(532), style: Re, children: [q.jsx(t(330), ve), q.jsx(t(330), Ye)] }), q.jsx(wt, ft)] }), q.jsxs(Ct, { "data-id": t(329), children: [q.jsx(t(439), { xmlns: t(422) + t(316) + t(237), width: "28", height: "28", viewBox: t(532), style: Qt, children: q.jsx(t(330), At) }), q.jsx(wt, Zt)] }), q.jsxs(Ct, { "data-id": t(393), children: [q.jsx(t(439), { xmlns: t(422) + t(316) + t(237), width: "28", height: "28", viewBox: t(532), style: Bt, children: q.jsx(t(330), Ht) }), q.jsx(wt, en)] }), q.jsxs(Ct, { "data-id": t(514), children: [q.jsx(t(439), { xmlns: t(422) + t(316) + t(237), width: "28", height: "28", viewBox: t(532), style: tn, children: q.jsx(t(330), nn) }), q.jsx(wt, zt)] }), q.jsxs(Ct, { "data-id": t(213), children: [q.jsx(t(439), { xmlns: t(422) + t(316) + t(237), width: "28", height: "28", viewBox: t(532), style: je, children: q.jsx(t(330), ct) }), q.jsx(wt, Ft)] })] }) : null, q.jsx(u_, { id: t(442) + t(221) + "s_" + r, className: t(473), ref: b, style: x, children: q.jsx(l_, { src: a_, className: t(473), id: t(442) + t(525) + r, alt: t(182), ref: C, draggable: !1 }) })] });
}), it = or;
function or(e, n) {
  const t = ci();
  return or = function(r, o) {
    return r = r - 486, t[r];
  }, or(e, n);
}
(function(e, n) {
  const t = or, r = e();
  for (; ; )
    try {
      if (parseInt(t(534)) / 1 * (-parseInt(t(538)) / 2) + parseInt(t(490)) / 3 * (-parseInt(t(555)) / 4) + -parseInt(t(492)) / 5 + -parseInt(t(553)) / 6 + parseInt(t(546)) / 7 * (parseInt(t(497)) / 8) + parseInt(t(556)) / 9 + parseInt(t(561)) / 10 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ci, 427852);
var vu, bu, yu, _u, Su, Cu, wu, Eu;
Eu = it(515), wu = it(524), Cu = it(511) + it(531), Su = it(489) + "ta", _u = it(530) + "er", yu = it(563), bu = it(496) + it(499), vu = it(533);
class x_ {
  constructor(n, t, r, o, i, s) {
    Xe(this, Eu, (n, t, r, o) => {
      const i = it, s = r / n, a = o / t;
      if (a < 0.4 && s > a) {
        if (i(520) !== i(520)) return;
        {
          const u = {};
          return u[i(527)] = r, u[i(502)] = t * s, u;
        }
      }
      const c = Math[i(494)](s, a), l = {};
      return l[i(527)] = n * c, l[i(502)] = t * c, l;
    });
    Xe(this, wu, () => {
      var s;
      const n = it;
      if (!this[n(487)][n(521)]) return;
      const t = this[n(540) + "en"] ? this[n(558)] ? window[n(557)] - 20 : this[n(498)] : this[n(498)], r = this[n(543) + "n"] == n(526) ? window[n(557)] : window[n(506) + "t"] - (this[n(558)] ? 12 : 50), o = this[n(515)](this[n(487)][n(521)], this[n(487)][n(548) + "t"], t, r);
      this[n(527)] = o[n(527)], this[n(502)] = o[n(502)], !this[n(519)] && ((s = this[n(544) + "ct"]) == null || s.call(this, !0));
      const i = {};
      i[n(527)] = o[n(527)], i[n(502)] = o[n(502)], this[n(519)] = i;
    });
    Xe(this, Cu, (n) => {
      const t = it;
      if (this[t(543) + "n"] = n, this[t(558)]) {
        if (t(539) === t(504))
          return (_0x489cde[_0x2a7283 + 3] & 31) === 5;
        screen[t(543) + "n"][t(552)](n);
      }
    });
    Xe(this, Su, (n) => {
      const t = it, r = n instanceof Uint8Array ? n : new Uint8Array(n);
      this[t(532)] = r;
    });
    Xe(this, _u, () => {
      const n = it, t = new VideoDecoder({ output: async (o) => {
        const i = or, s = await createImageBitmap(o), a = {};
        a[i(521)] = o[i(521)], a[i(548) + "t"] = o[i(548) + "t"], this[i(487)] = a, this[i(488)][i(516)](0, 0, this[i(502)], this[i(502)]);
        const c = this[i(493)][i(486)];
        this[i(543) + "n"] == i(526) ? (c[i(527)] = this[i(502)], c[i(502)] = this[i(527)], this[i(488)][i(495)](0, this[i(527)]), this[i(488)][i(562)](Math.PI / 2), this[i(488)][i(491)](-1, -1), this[i(488)][i(509)](s, 0, 0, this[i(527)], this[i(502)])) : (c[i(527)] = this[i(527)], c[i(502)] = this[i(502)], this[i(488)][i(509)](s, 0, 0, this[i(527)], this[i(502)])), s[i(517)](), o[i(517)]();
      }, error: (o) => console[n(508)](n(541) + n(549), o) }), r = {};
      return r[n(560)] = this[n(560)], r[n(542) + n(536)] = this[n(542) + n(536)], r[n(554) + n(564)] = !0, t[n(501)](r), t;
    });
    Xe(this, yu, (n) => {
      const t = it;
      for (let r = 0; r <= n[t(529)] - 4; r++)
        if (t(547) !== t(559)) {
          if (n[r] === 0 && n[r + 1] === 0 && n[r + 2] === 0 && n[r + 3] === 1) {
            if (t(518) !== t(500))
              return (n[r + 4] & 31) === 5;
            _0x3360ce[t(527)] = this[t(502)], _0x4b22d4[t(502)] = this[t(527)], this[t(488)][t(495)](0, this[t(527)]), this[t(488)][t(562)](_0x57652f.PI / 2), this[t(488)][t(491)](-1, -1), this[t(488)][t(509)](_0x2eba48, 0, 0, this[t(527)], this[t(502)]);
          }
        } else _0x39a062[t(527)] = this[t(527)], _0x94acc5[t(502)] = this[t(502)], this[t(488)][t(509)](_0x1f8b2e, 0, 0, this[t(527)], this[t(502)]);
      for (let r = 0; r <= n[t(529)] - 3; r++)
        if (t(523) !== t(522)) {
          if (n[r] === 0 && n[r + 1] === 0 && n[r + 2] === 1)
            if (t(510) !== t(510)) {
              this[t(493)] = _0x3c6674, this[t(560)] = _0xf46203, this[t(558)] = _0x55edc3, this[t(498)] = _0x53bb66, this[t(544) + "ct"] = _0x26b78a, this[t(527)] = null, this[t(502)] = null, this[t(545)] = null, this[t(532)] = null, this[t(514)] = null;
              const o = {};
              o[t(527)] = null, o[t(502)] = null, this[t(487)] = o, this[t(519)] = null, this[t(543) + "n"] = t(537), this[t(540) + "en"] = null, this[t(542) + t(536)] = _0x608d2a, this[t(488)] = _0x512388[t(486)][t(528)]("2d"), this[t(503)] = this[t(530) + "er"]();
            } else
              return (n[r + 3] & 31) === 5;
        } else !this[t(545)] && (_0xd50740 = this[t(496) + t(499)](this[t(532)], this[t(514)]), this[t(545)] = !0), this[t(503)][t(533)](new _0x476523({ timestamp: _0x13db09[t(535)]() * 1e3, type: _0x52a9c0 ? t(505) : t(512), data: _0x10f225 }));
      return !1;
    });
    Xe(this, bu, (n, t) => {
      const r = it, o = Array[r(550)](n)[r(507)](Array[r(550)](t));
      return new Uint8Array(o);
    });
    Xe(this, vu, (n) => {
      var i;
      const t = it;
      if (!this[t(503)] || this[t(503)][t(513)] == t(517) || !this[t(532)]) return;
      let r = n instanceof Uint8Array ? n : new Uint8Array(n);
      const o = this[t(563)](r);
      o && (this[t(514)] = r), this[t(514)] && this[t(532)] && (!this[t(545)] && (t(525) !== t(551) ? (r = this[t(496) + t(499)](this[t(532)], this[t(514)]), this[t(545)] = !0) : (i = this[t(544) + "ct"]) == null || i.call(this, !0)), this[t(503)][t(533)](new EncodedVideoChunk({ timestamp: performance[t(535)]() * 1e3, type: t(o ? 505 : 512), data: r })));
    });
    const a = or;
    this[a(493)] = r, this[a(560)] = o, this[a(558)] = n, this[a(498)] = t, this[a(544) + "ct"] = s, this[a(527)] = null, this[a(502)] = null, this[a(545)] = null, this[a(532)] = null, this[a(514)] = null;
    const c = {};
    c[a(527)] = null, c[a(502)] = null, this[a(487)] = c, this[a(519)] = null, this[a(543) + "n"] = a(537), this[a(540) + "en"] = null, this[a(542) + a(536)] = i, this[a(488)] = r[a(486)][a(528)]("2d"), this[a(503)] = this[a(530) + "er"]();
  }
}
function ci() {
  const e = ["maxWidth", "8Arrays", "NyQvB", "configure", "height", "decoder", "GfPbM", "key", "innerHeigh", "concat", "error", "drawImage", "tNMtn", "setOrienta", "delta", "state", "iframe", "scaleSize", "clearRect", "close", "dtrby", "rootSize", "mWLxw", "codedWidth", "QAkes", "mNOVd", "autoResize", "EALTN", "landscape", "width", "getContext", "length", "buildDecod", "tion", "videoMeta", "decode", "14583DZffyT", "now", "celeration", "portrait", "50LlYGHU", "CiRcQ", "isFullsCre", "Decoder er", "hardwareAc", "orientatio", "setIsConne", "isPlay", "1874726bxYYXj", "VFeuq", "codedHeigh", "ror:", "from", "mzpKN", "lock", "2818518zdDhce", "optimizeFo", "6092tAgmEg", "5920668VGVNlF", "innerWidth", "isMobile", "KRLHx", "codec", "4008560bSElBU", "rotate", "isKeyFrame", "rLatency", "current", "frameSize", "ctx", "setVideoMe", "177QjHbqE", "scale", "1211535ISBdaF", "canvasRef", "min", "translate", "concatUint", "16gjkrym"];
  return ci = function() {
    return e;
  }, ci();
}
(function(e, n) {
  const t = sn, r = e();
  for (; ; )
    try {
      if (-parseInt(t(393)) / 1 * (parseInt(t(434)) / 2) + parseInt(t(404)) / 3 + parseInt(t(443)) / 4 * (-parseInt(t(380)) / 5) + -parseInt(t(438)) / 6 + parseInt(t(355)) / 7 * (-parseInt(t(427)) / 8) + -parseInt(t(388)) / 9 + parseInt(t(344)) / 10 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(li, 349819);
function sn(e, n) {
  const t = li();
  return sn = function(r, o) {
    return r = r - 293, t[r];
  }, sn(e, n);
}
const D_ = ir((e, n) => {
  const t = sn, { api: r, dataDevice: o, showAssistive: i, showDeviceId: s, onSyncEvent: a, onSyncButton: c, maxWidth: l, codec: u, hardwareAcceleration: f } = e, h = o[t(360)], m = /iPhone|iPad|iPod|Android/i[t(423)](navigator[t(350)]), d = t(354), g = Se(null), p = Se(null), b = Se(null), y = Se(null), [C, O] = dt(null), [x, R] = dt(null), _ = {};
  _[t(333)] = !1, _[t(357)] = !1;
  const [j, M] = dt(_), [X, re] = dt(null), [te, z] = dt(null), W = t(417) + h, Z = t(361) + h, N = t(431) + "n_" + h, [A, P] = dt([]), k = Se(null), B = Se(/* @__PURE__ */ new Map());
  Ue(() => {
    const T = t;
    T(372) !== T(303) ? R(s) : (_0x9f0d35[T(310)] && _0x29569f[T(310)][T(345)](), _0x47fef1 = _0x12b19b(_0xac6449));
  }, [s]);
  const H = (T) => {
    const F = t;
    if (F(349) !== F(349))
      if (_0x32d949[F(440)] == !0) {
        _0x34ede2[F(310)] = _0x8a14bc, _0x52f84a[F(298)](F(425), { action: F(430), ts: _0xc85bbd[F(304)]() });
        const $ = {};
        $[F(422)] = F(373) + F(309), _0x56afb6[F(298)](F(425), $);
      } else {
        const $ = {};
        $[F(348)] = _0x3a6048[F(348)], $[F(389)] = F(395), _0x37fe68($);
      }
    else P(($) => [...$, T]);
  }, J = (T) => {
    const F = t;
    F(323) !== F(416) ? (g[F(310)][F(298)](F(425), T), a == null || a(T)) : (_0x363952[F(310)][F(437) + F(387)](_0x2f33f9[F(322)]), _0x449ee2[F(310)][F(295)](_0x35d82c[F(322)]));
  };
  Ou(n, () => ({ api: async function(T, F = 5e3) {
    return new Promise(($, G) => {
      const w = sn, Y = setTimeout(() => {
        const se = sn;
        B[se(310)][se(351)](T[se(363)]);
        const le = {};
        le[se(422)] = T[se(422)], le[se(363)] = T[se(363)], le[se(440)] = !1, le[se(425)] = se(371) + se(308) + se(398), G(le);
      }, F);
      B[w(310)][w(300)](T[w(363)], (se) => {
        const le = w;
        le(293) === le(293) ? (clearTimeout(Y), $(se)) : _0x321953(_0x582899);
      }), g[w(310)][w(298)](w(425), T);
    });
  }, sync: function(T) {
    const F = t;
    F(338) === F(338) ? g[F(310)][F(298)](F(425), T) : _0x52b0de(_0x474d8d);
  }, getDeviceId: function() {
    return o[t(360)];
  } })), Ue(() => {
    (async () => {
      const T = sn;
      try {
        if (T(340) !== T(377)) {
          const F = {};
          F[T(370) + "pe"] = T(442) + T(394);
          const $ = {};
          $[T(360)] = o[T(360)], $[T(364)] = o[T(413)];
          const G = {};
          G[T(397)] = r, G[T(433)] = T(367), G[T(429)] = 1e4, G[T(359)] = F, G[T(386)] = $;
          const w = G, Y = await Q2(w);
          O(Y[T(386)]);
        } else _0x597f1f[T(310)][T(298)](T(425), _0x1827d1);
      } catch (F) {
        if (T(435) === T(435)) {
          const $ = {};
          $[T(348)] = F, $[T(389)] = T(395), H($);
        } else _0x3f0785(_0x550077);
      }
    })();
  }, [te]), Ue(() => {
    const T = t;
    if (g[T(310)] || !C) return;
    const F = {};
    F[T(337) + "on"] = !1;
    const $ = Oo(C, F);
    return $.on(T(318), () => {
      const G = T, w = {};
      w[G(422)] = G(318), w[G(327) + "t"] = d, w[G(360)] = o[G(360)], w[G(301)] = m, w[G(413)] = o[G(413)], $[G(298)](G(376), w);
    }), $.on(T(376), (G) => {
      const w = T;
      if (w(421) !== w(414))
        if (G[w(440)] == !0)
          if (w(329) !== w(329)) {
            const Y = {};
            Y[w(422)] = w(373) + w(309), _0x58a3c6[w(310)][w(298)](w(425), Y);
          } else {
            g[w(310)] = $, $[w(298)](w(425), { action: w(430), ts: Date[w(304)]() });
            const Y = {};
            Y[w(422)] = w(373) + w(309), $[w(298)](w(425), Y);
          }
        else {
          const Y = {};
          Y[w(348)] = G[w(348)], Y[w(389)] = w(395), H(Y);
        }
      else if (_0x4da119) {
        if (_0x2857b9[w(310)][w(405) + "ta"](_0x5ebecd), !_0xeb14f9[w(310)][w(385)]) {
          const Y = {};
          Y[w(422)] = w(353) + "me", _0x4df41c[w(298)](w(425), Y);
        }
      } else {
        const Y = {};
        Y[w(422)] = w(331) + w(415), _0x1edba2[w(298)](w(366), Y);
      }
    }), $.on(T(441), (G) => {
      const w = T;
      k[w(310)][w(409)](G);
    }), $.on(T(366), (G) => {
      const w = T;
      if (w(369) === w(369))
        if (G) {
          if (w(410) !== w(410)) {
            const Y = _0x48307d(() => {
              const se = w;
              _0x582b22[se(310)][se(351)](_0xcf48cc[se(363)]);
              const le = {};
              le[se(422)] = _0x3ca1f1[se(422)], le[se(363)] = _0x2bc362[se(363)], le[se(440)] = !1, le[se(425)] = se(371) + se(308) + se(398), _0x741e39(le);
            }, _0x33fcbb);
            _0x4fbca3[w(310)][w(300)](_0x59dd57[w(363)], (se) => {
              _0x57dcf8(Y), _0x4a352b(se);
            }), _0x35de4[w(310)][w(298)](w(425), _0x5b985a);
          } else if (k[w(310)][w(405) + "ta"](G), !k[w(310)][w(385)])
            if (w(400) !== w(400)) {
              const Y = { ..._0xba5c5f };
              Y[w(333)] = !1, _0xfca2f2(Y);
            } else {
              const Y = {};
              Y[w(422)] = w(353) + "me", $[w(298)](w(425), Y);
            }
        } else if (w(428) !== w(305)) {
          const Y = {};
          Y[w(422)] = w(331) + w(415), $[w(298)](w(366), Y);
        } else {
          const Y = {};
          Y[w(422)] = w(331) + w(415), _0x246325[w(298)](w(366), Y);
        }
      else {
        const Y = {};
        Y[w(348)] = _0x197106[w(348)], Y[w(389)] = w(395), _0x405025(Y);
      }
    }), $.on(T(425), (G) => {
      const w = T;
      if ((G[w(422)] == w(296) || G[w(422)] == w(315) + w(309)) && G[w(347)][w(418)] > 0) navigator[w(302)][w(396)](G[w(347)]);
      else if (G[w(422)] == w(406) + "n")
        if (w(356) !== w(356)) {
          _0x518660[w(310)][w(351)](_0x3fb9b6[w(363)]);
          const Y = {};
          Y[w(422)] = _0x159215[w(422)], Y[w(363)] = _0x2544c0[w(363)], Y[w(440)] = !1, Y[w(425)] = w(371) + w(308) + w(398), _0x18f068(Y);
        } else k[w(310)][w(437) + w(387)](G[w(322)]), y[w(310)][w(295)](G[w(322)]);
      if (G[w(363)]) {
        const Y = B[w(310)][w(332)](G[w(363)]);
        Y && (Y(G), B[w(310)][w(351)](G[w(363)]));
      }
    }), $.on(T(324) + T(402), (G) => {
      const w = T;
      if (w(335) === w(321)) _0x2507e3[w(310)][w(330)](), _0x343f65[w(310)] = null;
      else {
        const Y = {};
        Y[w(348)] = G, Y[w(389)] = w(395), H(Y);
      }
    }), $.on(T(330), (G) => {
      const w = T;
      if (w(407) !== w(381)) {
        const Y = {};
        Y[w(348)] = w(403) + w(319) + w(317) + G[w(432)], Y[w(389)] = w(294), H(Y);
      } else return new _0x5208d0((Y, se) => {
        const le = w, Re = _0x1129c9(() => {
          const ve = sn;
          _0x4f54ef[ve(310)][ve(351)](_0x22dbe5[ve(363)]);
          const Ye = {};
          Ye[ve(422)] = _0x1990f7[ve(422)], Ye[ve(363)] = _0x45f3e7[ve(363)], Ye[ve(440)] = !1, Ye[ve(425)] = ve(371) + ve(308) + ve(398), se(Ye);
        }, _0x36747f);
        _0x2650a6[le(310)][le(300)](_0x55911c[le(363)], (ve) => {
          _0x344e89(Re), Y(ve);
        }), _0x3af5e3[le(310)][le(298)](le(425), _0x2ee9fb);
      });
    }), () => {
      $ && $[T(330)]();
    };
  }, [C]), Ue(() => {
    const T = t;
    b[T(310)] && (k[T(310)] = new x_(m, l, b, u, f, re));
  }, [te]), Ue(() => {
    const T = t;
    if (T(334) !== T(412)) {
      const F = () => {
        const $ = T, G = document[$(299) + $(368)] || document[$(362) + $(420) + $(309)] || document[$(343) + $(408)] || document[$(384) + $(390)];
        k[$(310)][$(375) + "en"] = !!G, y[$(310)][$(339) + $(401)](!!G), y[$(310)][$(295)]();
      };
      return document[T(325) + T(374)](T(299) + T(346), F), () => {
        const $ = T;
        document[$(411) + $(399)]($(299) + $(346), F);
      };
    } else _0x5a5fa3[T(310)][T(298)](T(425), _0x480d3b), _0x1f0ab7 == null || _0x1f0ab7(_0x2e5fad);
  }, [te]), Ue(() => {
    let T;
    const F = () => {
      const $ = sn;
      if ($(419) === $(419)) k[$(310)] && k[$(310)][$(345)](), T = requestAnimationFrame(F);
      else return _0x12ac6a[$(360)];
    };
    return F(), () => cancelAnimationFrame(T);
  }, []), Ue(() => {
    const T = t;
    if (T(439) === T(439)) {
      let F;
      return F = setInterval(() => {
        const $ = T;
        g[$(310)] && ($(382) !== $(328) ? g[$(310)][$(298)]($(425), { action: $(430), ts: Date[$(304)]() }) : _0x132d1c[$(310)] && _0x1caf30[$(310)][$(298)]($(425), { action: $(430), ts: _0x567472[$(304)]() }));
      }, 6e4), () => clearInterval(F);
    } else _0x596dd9[T(330)]();
  }, [te]);
  const ne = () => {
    const T = t;
    g[T(310)] && (g[T(310)][T(330)](), g[T(310)] = null), O(null), P([]), re(null), z(Date[T(304)]());
  }, ee = {};
  ee[t(383)] = o[t(360)];
  const ce = {};
  ce[t(306)] = t(392);
  const ue = {};
  ue[t(306)] = t(392);
  const de = {};
  de[t(306)] = t(392);
  const Oe = {};
  Oe[t(316)] = 0, Oe[t(352)] = 0, Oe[t(307) + t(378)] = t(365);
  const _e = {};
  _e[t(383)] = o[t(360)];
  const ke = {};
  ke[t(332)] = j, ke[t(300)] = M;
  const Ne = {};
  Ne.id = W, Ne[t(311)] = "0", Ne[t(444)] = t(326);
  const pe = {};
  pe[t(426)] = 5;
  const Ze = {};
  return Ze[t(426)] = 10, q.jsx(ux, { id: N, children: A[t(418)] == 0 ? q.jsxs(q.Fragment, { children: [!X && q.jsxs(q.Fragment, { children: [x && q.jsx(Fc, ee), q.jsxs(xd, { align: t(313), gap: t(391), children: [q.jsx(kr, ce), q.jsx(kr, ue), q.jsx(kr, de)] })] }), q.jsxs(fx, { ref: p, id: Z, style: X ? {} : Oe, children: [x && q.jsx(Fc, _e), i ? q.jsx(h_, { status: ke, ref: y, canvasRef: b, displayId: h, isMobile: m, isShowDeviceId: x, onSenData: (T, F) => {
    const $ = t;
    if ($(341) !== $(436))
      if (F[$(297)] === $(360)) R(!x);
      else if (F[$(297)] === $(424)) c == null || c(o[$(360)]);
      else if (F[$(297)] === $(379)) ne();
      else if (F[$(297)] === $(358)) {
        const G = {};
        G[$(422)] = $(373) + $(309), g[$(310)][$(298)]($(425), G);
      } else J(F);
    else {
      const G = {};
      G[$(422)] = $(353) + "me", _0x2a31db[$(298)]($(425), G);
    }
  } }) : null, q.jsx(s_, { canvasContent: Ne, canvasRef: b, isMobile: m, assistive: j, onRemoteEvent: (T, F) => {
    const $ = t;
    if (T === Vd) {
      const G = { ...j };
      G[$(333)] = !1, M(G);
    } else if ($(312) !== $(314)) J(F);
    else if (_0x4f3038[$(310)][$(405) + "ta"](_0xddb17a), !_0x56a029[$(310)][$(385)]) {
      const G = {};
      G[$(422)] = $(353) + "me", _0x5c936c[$(298)]($(425), G);
    }
  } })] })] }) : q.jsxs(q.Fragment, { children: [A == null ? void 0 : A[t(336)]((T, F) => q.jsx(Y0, { style: pe, message: T[t(348)], type: T[t(389)], showIcon: !0, closable: !0 }, F)), q.jsx(Bi, { style: Ze, type: t(342), icon: q.jsx(uf, {}), onClick: ne, children: t(320) })] }) });
});
function li() {
  const e = ["false", "type_clien", "wzaCZ", "OnsKq", "disconnect", "get_video_", "get", "showMenu", "BdMKS", "SBkBT", "map", "reconnecti", "murWi", "setFullscr", "Okbzq", "KsdLT", "primary", "mozFullScr", "16798650xZsydN", "autoResize", "change", "text", "msg", "CiLqN", "userAgent", "delete", "width", "onSyncIFra", "control", "147ZWDXBL", "hALOB", "isDown", "unlock", "headers", "device_id", "screen_", "webkitFull", "taskId", "password", "red", "video_meta", "POST", "Element", "dqQYK", "Content-Ty", "Timeout wa", "UoXff", "onScreenEv", "stener", "isFullsCre", "join_room", "fMNLS", "Color", "reload", "155KlyEgC", "IMVYA", "EDLpM", "children", "msFullscre", "iframe", "data", "tion", "1188486yHIiEV", "type", "enElement", "middle", "large", "78665BnhJQT", "n/json", "error", "writeText", "url", "response", "tListener", "exnbs", "een", "ror", "connection", "1098591ucHbRc", "setVideoMe", "orientatio", "OqNQH", "eenElement", "decode", "kOtIF", "removeEven", "GOyRX", "passwd", "ghMrn", "meta", "niKom", "canvas_", "length", "QgCdD", "screenElem", "DKdko", "action", "test", "sync", "message", "margin", "255128BClRix", "oUyYy", "timeout", "timeSync", "screen_mai", "code", "method", "2maPDEE", "gHiWP", "ztDol", "setOrienta", "1535532LxqDWD", "vWDRl", "status", "screen", "applicatio", "72244VbJpyd", "draggable", "JgZyr", "info", "fixTouch", "COPY_TEXT", "shortcut", "emit", "fullscreen", "set", "isMobile", "clipboard", "LTdsp", "now", "xtPLx", "size", "background", "iting for ", "ent", "current", "tabIndex", "qczKM", "center", "VpCma", "shortcutEv", "height", "de: ", "connect", " closed co", "Reconnect", "HVKYK", "value", "UhHMx", "connect_er", "addEventLi"];
  return li = function() {
    return e;
  }, li();
}
(function(e, n) {
  for (var t = Ma, r = e(); ; )
    try {
      var o = parseInt(t(149)) / 1 + parseInt(t(148)) / 2 * (-parseInt(t(153)) / 3) + parseInt(t(151)) / 4 * (parseInt(t(145)) / 5) + -parseInt(t(147)) / 6 * (-parseInt(t(144)) / 7) + -parseInt(t(143)) / 8 + -parseInt(t(154)) / 9 * (parseInt(t(152)) / 10) + -parseInt(t(146)) / 11 * (-parseInt(t(150)) / 12);
      if (o === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ui, 177066);
function ui() {
  var e = ["1281ngjRaN", "55NsSCZA", "11CipRXI", "6738MHOClO", "150ahGowx", "348816rXzjUD", "1179852jaOgHc", "53780HrXYRY", "370mfDBBR", "11415WWrzkh", "55683rneAkv", "873448xlRvuJ"];
  return ui = function() {
    return e;
  }, ui();
}
function Ma(e, n) {
  var t = ui();
  return Ma = function(r, o) {
    r = r - 143;
    var i = t[r];
    return i;
  }, Ma(e, n);
}
export {
  D_ as ViewRP
};
