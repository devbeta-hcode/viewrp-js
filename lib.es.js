var Jf = Object.defineProperty;
var Qf = (n, t, e) => t in n ? Jf(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var kt = (n, t, e) => Qf(n, typeof t != "symbol" ? t + "" : t, e);
import * as _ from "react";
import Fe, { useDebugValue as pa, createElement as e0, useRef as $e, useContext as en, isValidElement as t0, version as n0, createContext as Fs, useLayoutEffect as r0, useEffect as tt, useState as et, forwardRef as il, useImperativeHandle as sl } from "react";
import ma from "react-dom";
function ho(n, t) {
  var e = xo();
  return ho = function(r, o) {
    r = r - 343;
    var i = e[r];
    return i;
  }, ho(n, t);
}
var cr = ho;
(function(n, t) {
  for (var e = ho, r = n(); ; )
    try {
      var o = -parseInt(e(372)) / 1 * (parseInt(e(358)) / 2) + parseInt(e(359)) / 3 * (parseInt(e(343)) / 4) + parseInt(e(352)) / 5 + parseInt(e(367)) / 6 + parseInt(e(361)) / 7 + parseInt(e(365)) / 8 + -parseInt(e(356)) / 9 * (parseInt(e(373)) / 10);
      if (o === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(xo, 502329);
typeof globalThis !== cr(345) || typeof window !== cr(345) || (typeof global !== cr(345) ? global : cr(345));
function o0(n) {
  var t = cr;
  return n && n[t(355)] && Object[t(360)][t(374) + t(354)][t(350)](n, t(362)) ? n[t(362)] : n;
}
function xo() {
  var n = ["546280WlvlcT", "getOwnProp", "5047002RzoVXP", "length", "ertyDescri", "forEach", "value", "11993ViipWM", "1930QJVWBl", "hasOwnProp", "100EppMKM", "apply", "undefined", "construct", "RAQuq", "JTJzB", "keys", "call", "ptor", "3341090wKuwpT", "defineProp", "erty", "__esModule", "81261PRrObA", "get", "38drkHgQ", "12849CcoihZ", "prototype", "5516336naBBnw", "default", "constructo", "function"];
  return xo = function() {
    return n;
  }, xo();
}
var kr = { exports: {} }, tr = {};
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
  var n = Fe, t = Symbol.for("react.element"), e = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(a, c, u) {
    var f, d = {}, l = null, v = null;
    u !== void 0 && (l = "" + u), c.key !== void 0 && (l = "" + c.key), c.ref !== void 0 && (v = c.ref);
    for (f in c) r.call(c, f) && !i.hasOwnProperty(f) && (d[f] = c[f]);
    if (a && a.defaultProps) for (f in c = a.defaultProps, c) d[f] === void 0 && (d[f] = c[f]);
    return { $$typeof: t, type: a, key: l, ref: v, props: d, _owner: o.current };
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
    var n = Fe, t = Symbol.for("react.element"), e = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), l = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g = Symbol.iterator, p = "@@iterator";
    function h(x) {
      if (x === null || typeof x != "object")
        return null;
      var I = g && x[g] || x[p];
      return typeof I == "function" ? I : null;
    }
    var E = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(x) {
      {
        for (var I = arguments.length, D = new Array(I > 1 ? I - 1 : 0), X = 1; X < I; X++)
          D[X - 1] = arguments[X];
        m("error", x, D);
      }
    }
    function m(x, I, D) {
      {
        var X = E.ReactDebugCurrentFrame, ge = X.getStackAddendum();
        ge !== "" && (I += "%s", D = D.concat([ge]));
        var be = D.map(function(le) {
          return String(le);
        });
        be.unshift("Warning: " + I), Function.prototype.apply.call(console[x], console, be);
      }
    }
    var A = !1, y = !1, O = !1, C = !1, j = !1, z;
    z = Symbol.for("react.module.reference");
    function Y(x) {
      return !!(typeof x == "string" || typeof x == "function" || x === r || x === i || j || x === o || x === u || x === f || C || x === v || A || y || O || typeof x == "object" && x !== null && (x.$$typeof === l || x.$$typeof === d || x.$$typeof === s || x.$$typeof === a || x.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      x.$$typeof === z || x.getModuleId !== void 0));
    }
    function ne(x, I, D) {
      var X = x.displayName;
      if (X)
        return X;
      var ge = I.displayName || I.name || "";
      return ge !== "" ? D + "(" + ge + ")" : D;
    }
    function $(x) {
      return x.displayName || "Context";
    }
    function F(x) {
      if (x == null)
        return null;
      if (typeof x.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof x == "function")
        return x.displayName || x.name || null;
      if (typeof x == "string")
        return x;
      switch (x) {
        case r:
          return "Fragment";
        case e:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case u:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case a:
            var I = x;
            return $(I) + ".Consumer";
          case s:
            var D = x;
            return $(D._context) + ".Provider";
          case c:
            return ne(x, x.render, "ForwardRef");
          case d:
            var X = x.displayName || null;
            return X !== null ? X : F(x.type) || "Memo";
          case l: {
            var ge = x, be = ge._payload, le = ge._init;
            try {
              return F(le(be));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var W = Object.assign, H = 0, G, Q, Z, J, re, oe, K;
    function ee() {
    }
    ee.__reactDisabledLog = !0;
    function pe() {
      {
        if (H === 0) {
          G = console.log, Q = console.info, Z = console.warn, J = console.error, re = console.group, oe = console.groupCollapsed, K = console.groupEnd;
          var x = {
            configurable: !0,
            enumerable: !0,
            value: ee,
            writable: !0
          };
          Object.defineProperties(console, {
            info: x,
            log: x,
            warn: x,
            error: x,
            group: x,
            groupCollapsed: x,
            groupEnd: x
          });
        }
        H++;
      }
    }
    function ue() {
      {
        if (H--, H === 0) {
          var x = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: W({}, x, {
              value: G
            }),
            info: W({}, x, {
              value: Q
            }),
            warn: W({}, x, {
              value: Z
            }),
            error: W({}, x, {
              value: J
            }),
            group: W({}, x, {
              value: re
            }),
            groupCollapsed: W({}, x, {
              value: oe
            }),
            groupEnd: W({}, x, {
              value: K
            })
          });
        }
        H < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ve = E.ReactCurrentDispatcher, P;
    function L(x, I, D) {
      {
        if (P === void 0)
          try {
            throw Error();
          } catch (ge) {
            var X = ge.stack.trim().match(/\n( *(at )?)/);
            P = X && X[1] || "";
          }
        return `
` + P + x;
      }
    }
    var R = !1, N;
    {
      var b = typeof WeakMap == "function" ? WeakMap : Map;
      N = new b();
    }
    function B(x, I) {
      if (!x || R)
        return "";
      {
        var D = N.get(x);
        if (D !== void 0)
          return D;
      }
      var X;
      R = !0;
      var ge = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var be;
      be = ve.current, ve.current = null, pe();
      try {
        if (I) {
          var le = function() {
            throw Error();
          };
          if (Object.defineProperty(le.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(le, []);
            } catch (Qe) {
              X = Qe;
            }
            Reflect.construct(x, [], le);
          } else {
            try {
              le.call();
            } catch (Qe) {
              X = Qe;
            }
            x.call(le.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Qe) {
            X = Qe;
          }
          x();
        }
      } catch (Qe) {
        if (Qe && X && typeof Qe.stack == "string") {
          for (var ae = Qe.stack.split(`
`), Ke = X.stack.split(`
`), ke = ae.length - 1, Ie = Ke.length - 1; ke >= 1 && Ie >= 0 && ae[ke] !== Ke[Ie]; )
            Ie--;
          for (; ke >= 1 && Ie >= 0; ke--, Ie--)
            if (ae[ke] !== Ke[Ie]) {
              if (ke !== 1 || Ie !== 1)
                do
                  if (ke--, Ie--, Ie < 0 || ae[ke] !== Ke[Ie]) {
                    var Ne = `
` + ae[ke].replace(" at new ", " at ");
                    return x.displayName && Ne.includes("<anonymous>") && (Ne = Ne.replace("<anonymous>", x.displayName)), typeof x == "function" && N.set(x, Ne), Ne;
                  }
                while (ke >= 1 && Ie >= 0);
              break;
            }
        }
      } finally {
        R = !1, ve.current = be, ue(), Error.prepareStackTrace = ge;
      }
      var Cn = x ? x.displayName || x.name : "", cn = Cn ? L(Cn) : "";
      return typeof x == "function" && N.set(x, cn), cn;
    }
    function fe(x, I, D) {
      return B(x, !1);
    }
    function M(x) {
      var I = x.prototype;
      return !!(I && I.isReactComponent);
    }
    function qe(x, I, D) {
      if (x == null)
        return "";
      if (typeof x == "function")
        return B(x, M(x));
      if (typeof x == "string")
        return L(x);
      switch (x) {
        case u:
          return L("Suspense");
        case f:
          return L("SuspenseList");
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case c:
            return fe(x.render);
          case d:
            return qe(x.type, I, D);
          case l: {
            var X = x, ge = X._payload, be = X._init;
            try {
              return qe(be(ge), I, D);
            } catch {
            }
          }
        }
      return "";
    }
    var Re = Object.prototype.hasOwnProperty, at = {}, Tt = E.ReactDebugCurrentFrame;
    function it(x) {
      if (x) {
        var I = x._owner, D = qe(x.type, x._source, I ? I.type : null);
        Tt.setExtraStackFrame(D);
      } else
        Tt.setExtraStackFrame(null);
    }
    function Ot(x, I, D, X, ge) {
      {
        var be = Function.call.bind(Re);
        for (var le in x)
          if (be(x, le)) {
            var ae = void 0;
            try {
              if (typeof x[le] != "function") {
                var Ke = Error((X || "React class") + ": " + D + " type `" + le + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof x[le] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ke.name = "Invariant Violation", Ke;
              }
              ae = x[le](I, le, X, D, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ke) {
              ae = ke;
            }
            ae && !(ae instanceof Error) && (it(ge), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", X || "React class", D, le, typeof ae), it(null)), ae instanceof Error && !(ae.message in at) && (at[ae.message] = !0, it(ge), w("Failed %s type: %s", D, ae.message), it(null));
          }
      }
    }
    var Me = Array.isArray;
    function Ae(x) {
      return Me(x);
    }
    function Ge(x) {
      {
        var I = typeof Symbol == "function" && Symbol.toStringTag, D = I && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return D;
      }
    }
    function mt(x) {
      try {
        return ct(x), !1;
      } catch {
        return !0;
      }
    }
    function ct(x) {
      return "" + x;
    }
    function on(x) {
      if (mt(x))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(x)), ct(x);
    }
    var sn = E.ReactCurrentOwner, En = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, an, k;
    function S(x) {
      if (Re.call(x, "ref")) {
        var I = Object.getOwnPropertyDescriptor(x, "ref").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return x.ref !== void 0;
    }
    function me(x) {
      if (Re.call(x, "key")) {
        var I = Object.getOwnPropertyDescriptor(x, "key").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return x.key !== void 0;
    }
    function de(x, I) {
      typeof x.ref == "string" && sn.current;
    }
    function he(x, I) {
      {
        var D = function() {
          an || (an = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        D.isReactWarning = !0, Object.defineProperty(x, "key", {
          get: D,
          configurable: !0
        });
      }
    }
    function ie(x, I) {
      {
        var D = function() {
          k || (k = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        D.isReactWarning = !0, Object.defineProperty(x, "ref", {
          get: D,
          configurable: !0
        });
      }
    }
    var Oe = function(x, I, D, X, ge, be, le) {
      var ae = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: x,
        key: I,
        ref: D,
        props: le,
        // Record the component responsible for creating this element.
        _owner: be
      };
      return ae._store = {}, Object.defineProperty(ae._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ae, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: X
      }), Object.defineProperty(ae, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ge
      }), Object.freeze && (Object.freeze(ae.props), Object.freeze(ae)), ae;
    };
    function We(x, I, D, X, ge) {
      {
        var be, le = {}, ae = null, Ke = null;
        D !== void 0 && (on(D), ae = "" + D), me(I) && (on(I.key), ae = "" + I.key), S(I) && (Ke = I.ref, de(I, ge));
        for (be in I)
          Re.call(I, be) && !En.hasOwnProperty(be) && (le[be] = I[be]);
        if (x && x.defaultProps) {
          var ke = x.defaultProps;
          for (be in ke)
            le[be] === void 0 && (le[be] = ke[be]);
        }
        if (ae || Ke) {
          var Ie = typeof x == "function" ? x.displayName || x.name || "Unknown" : x;
          ae && he(le, Ie), Ke && ie(le, Ie);
        }
        return Oe(x, ae, Ke, ge, X, sn.current, le);
      }
    }
    var lt = E.ReactCurrentOwner, _n = E.ReactDebugCurrentFrame;
    function Rt(x) {
      if (x) {
        var I = x._owner, D = qe(x.type, x._source, I ? I.type : null);
        _n.setExtraStackFrame(D);
      } else
        _n.setExtraStackFrame(null);
    }
    var Dt;
    Dt = !1;
    function Bt(x) {
      return typeof x == "object" && x !== null && x.$$typeof === t;
    }
    function Wt() {
      {
        if (lt.current) {
          var x = F(lt.current.type);
          if (x)
            return `

Check the render method of \`` + x + "`.";
        }
        return "";
      }
    }
    function Yt(x) {
      return "";
    }
    var ye = {};
    function Le(x) {
      {
        var I = Wt();
        if (!I) {
          var D = typeof x == "string" ? x : x.displayName || x.name;
          D && (I = `

Check the top-level render call using <` + D + ">.");
        }
        return I;
      }
    }
    function ut(x, I) {
      {
        if (!x._store || x._store.validated || x.key != null)
          return;
        x._store.validated = !0;
        var D = Le(I);
        if (ye[D])
          return;
        ye[D] = !0;
        var X = "";
        x && x._owner && x._owner !== lt.current && (X = " It was passed a child from " + F(x._owner.type) + "."), Rt(x), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', D, X), Rt(null);
      }
    }
    function ft(x, I) {
      {
        if (typeof x != "object")
          return;
        if (Ae(x))
          for (var D = 0; D < x.length; D++) {
            var X = x[D];
            Bt(X) && ut(X, I);
          }
        else if (Bt(x))
          x._store && (x._store.validated = !0);
        else if (x) {
          var ge = h(x);
          if (typeof ge == "function" && ge !== x.entries)
            for (var be = ge.call(x), le; !(le = be.next()).done; )
              Bt(le.value) && ut(le.value, I);
        }
      }
    }
    function Xt(x) {
      {
        var I = x.type;
        if (I == null || typeof I == "string")
          return;
        var D;
        if (typeof I == "function")
          D = I.propTypes;
        else if (typeof I == "object" && (I.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        I.$$typeof === d))
          D = I.propTypes;
        else
          return;
        if (D) {
          var X = F(I);
          Ot(D, x.props, "prop", X, x);
        } else if (I.PropTypes !== void 0 && !Dt) {
          Dt = !0;
          var ge = F(I);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ge || "Unknown");
        }
        typeof I.getDefaultProps == "function" && !I.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function $t(x) {
      {
        for (var I = Object.keys(x.props), D = 0; D < I.length; D++) {
          var X = I[D];
          if (X !== "children" && X !== "key") {
            Rt(x), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", X), Rt(null);
            break;
          }
        }
        x.ref !== null && (Rt(x), w("Invalid attribute `ref` supplied to `React.Fragment`."), Rt(null));
      }
    }
    var er = {};
    function Or(x, I, D, X, ge, be) {
      {
        var le = Y(x);
        if (!le) {
          var ae = "";
          (x === void 0 || typeof x == "object" && x !== null && Object.keys(x).length === 0) && (ae += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ke = Yt();
          Ke ? ae += Ke : ae += Wt();
          var ke;
          x === null ? ke = "null" : Ae(x) ? ke = "array" : x !== void 0 && x.$$typeof === t ? (ke = "<" + (F(x.type) || "Unknown") + " />", ae = " Did you accidentally export a JSX literal instead of a component?") : ke = typeof x, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ke, ae);
        }
        var Ie = We(x, I, D, ge, be);
        if (Ie == null)
          return Ie;
        if (le) {
          var Ne = I.children;
          if (Ne !== void 0)
            if (X)
              if (Ae(Ne)) {
                for (var Cn = 0; Cn < Ne.length; Cn++)
                  ft(Ne[Cn], x);
                Object.freeze && Object.freeze(Ne);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ft(Ne, x);
        }
        if (Re.call(I, "key")) {
          var cn = F(x), Qe = Object.keys(I).filter(function(Zf) {
            return Zf !== "key";
          }), ui = Qe.length > 0 ? "{key: someKey, " + Qe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!er[cn + ui]) {
            var Kf = Qe.length > 0 ? "{" + Qe.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ui, cn, Kf, cn), er[cn + ui] = !0;
          }
        }
        return x === r ? $t(Ie) : Xt(Ie), Ie;
      }
    }
    function Ue(x, I, D) {
      return Or(x, I, D, !0);
    }
    function Rr(x, I, D) {
      return Or(x, I, D, !1);
    }
    var li = Rr, Pe = Ue;
    nr.Fragment = r, nr.jsx = li, nr.jsxs = Pe;
  }()), nr;
}
var ya;
function a0() {
  return ya || (ya = 1, process.env.NODE_ENV === "production" ? kr.exports = i0() : kr.exports = s0()), kr.exports;
}
var U = a0(), nt = function() {
  return nt = Object.assign || function(t) {
    for (var e, r = 1, o = arguments.length; r < o; r++) {
      e = arguments[r];
      for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
  }, nt.apply(this, arguments);
};
function Nn(n, t, e) {
  if (e || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return n.concat(i || Array.prototype.slice.call(t));
}
function c0(n) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(e) {
    return t[e] === void 0 && (t[e] = n(e)), t[e];
  };
}
var l0 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, u0 = /* @__PURE__ */ c0(
  function(n) {
    return l0.test(n) || n.charCodeAt(0) === 111 && n.charCodeAt(1) === 110 && n.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Te = "-ms-", fr = "-moz-", Ee = "-webkit-", al = "comm", Fo = "rule", zs = "decl", f0 = "@import", cl = "@keyframes", d0 = "@layer", ll = Math.abs, Vs = String.fromCharCode, ji = Object.assign;
function h0(n, t) {
  return Xe(n, 0) ^ 45 ? (((t << 2 ^ Xe(n, 0)) << 2 ^ Xe(n, 1)) << 2 ^ Xe(n, 2)) << 2 ^ Xe(n, 3) : 0;
}
function ul(n) {
  return n.trim();
}
function Ht(n, t) {
  return (n = t.exec(n)) ? n[0] : n;
}
function se(n, t, e) {
  return n.replace(t, e);
}
function Xr(n, t, e) {
  return n.indexOf(t, e);
}
function Xe(n, t) {
  return n.charCodeAt(t) | 0;
}
function jn(n, t, e) {
  return n.slice(t, e);
}
function Nt(n) {
  return n.length;
}
function fl(n) {
  return n.length;
}
function lr(n, t) {
  return t.push(n), n;
}
function x0(n, t) {
  return n.map(t).join("");
}
function ba(n, t) {
  return n.filter(function(e) {
    return !Ht(e, t);
  });
}
var zo = 1, Mn = 1, dl = 0, xt = 0, ze = 0, Wn = "";
function Vo(n, t, e, r, o, i, s, a) {
  return { value: n, root: t, parent: e, type: r, props: o, children: i, line: zo, column: Mn, length: s, return: "", siblings: a };
}
function Gt(n, t) {
  return ji(Vo("", null, null, "", null, null, 0, n.siblings), n, { length: -n.length }, t);
}
function An(n) {
  for (; n.root; )
    n = Gt(n.root, { children: [n] });
  lr(n, n.siblings);
}
function p0() {
  return ze;
}
function m0() {
  return ze = xt > 0 ? Xe(Wn, --xt) : 0, Mn--, ze === 10 && (Mn = 1, zo--), ze;
}
function bt() {
  return ze = xt < dl ? Xe(Wn, xt++) : 0, Mn++, ze === 10 && (Mn = 1, zo++), ze;
}
function pn() {
  return Xe(Wn, xt);
}
function $r() {
  return xt;
}
function Ho(n, t) {
  return jn(Wn, n, t);
}
function Mi(n) {
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
function g0(n) {
  return zo = Mn = 1, dl = Nt(Wn = n), xt = 0, [];
}
function v0(n) {
  return Wn = "", n;
}
function fi(n) {
  return ul(Ho(xt - 1, Li(n === 91 ? n + 2 : n === 40 ? n + 1 : n)));
}
function y0(n) {
  for (; (ze = pn()) && ze < 33; )
    bt();
  return Mi(n) > 2 || Mi(ze) > 3 ? "" : " ";
}
function b0(n, t) {
  for (; --t && bt() && !(ze < 48 || ze > 102 || ze > 57 && ze < 65 || ze > 70 && ze < 97); )
    ;
  return Ho(n, $r() + (t < 6 && pn() == 32 && bt() == 32));
}
function Li(n) {
  for (; bt(); )
    switch (ze) {
      // ] ) " '
      case n:
        return xt;
      // " '
      case 34:
      case 39:
        n !== 34 && n !== 39 && Li(ze);
        break;
      // (
      case 40:
        n === 41 && Li(n);
        break;
      // \
      case 92:
        bt();
        break;
    }
  return xt;
}
function S0(n, t) {
  for (; bt() && n + ze !== 57; )
    if (n + ze === 84 && pn() === 47)
      break;
  return "/*" + Ho(t, xt - 1) + "*" + Vs(n === 47 ? n : bt());
}
function w0(n) {
  for (; !Mi(pn()); )
    bt();
  return Ho(n, xt);
}
function E0(n) {
  return v0(Gr("", null, null, null, [""], n = g0(n), 0, [0], n));
}
function Gr(n, t, e, r, o, i, s, a, c) {
  for (var u = 0, f = 0, d = s, l = 0, v = 0, g = 0, p = 1, h = 1, E = 1, w = 0, m = "", A = o, y = i, O = r, C = m; h; )
    switch (g = w, w = bt()) {
      // (
      case 40:
        if (g != 108 && Xe(C, d - 1) == 58) {
          Xr(C += se(fi(w), "&", "&\f"), "&\f", ll(u ? a[u - 1] : 0)) != -1 && (E = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        C += fi(w);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        C += y0(g);
        break;
      // \
      case 92:
        C += b0($r() - 1, 7);
        continue;
      // /
      case 47:
        switch (pn()) {
          case 42:
          case 47:
            lr(_0(S0(bt(), $r()), t, e, c), c);
            break;
          default:
            C += "/";
        }
        break;
      // {
      case 123 * p:
        a[u++] = Nt(C) * E;
      // } ; \0
      case 125 * p:
      case 59:
      case 0:
        switch (w) {
          // \0 }
          case 0:
          case 125:
            h = 0;
          // ;
          case 59 + f:
            E == -1 && (C = se(C, /\f/g, "")), v > 0 && Nt(C) - d && lr(v > 32 ? wa(C + ";", r, e, d - 1, c) : wa(se(C, " ", "") + ";", r, e, d - 2, c), c);
            break;
          // @ ;
          case 59:
            C += ";";
          // { rule/at-rule
          default:
            if (lr(O = Sa(C, t, e, u, f, o, a, m, A = [], y = [], d, i), i), w === 123)
              if (f === 0)
                Gr(C, t, O, O, A, i, d, a, y);
              else
                switch (l === 99 && Xe(C, 3) === 110 ? 100 : l) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Gr(n, O, O, r && lr(Sa(n, O, O, 0, 0, o, a, m, o, A = [], d, y), y), o, y, d, a, r ? A : y);
                    break;
                  default:
                    Gr(C, O, O, O, [""], y, 0, a, y);
                }
        }
        u = f = v = 0, p = E = 1, m = C = "", d = s;
        break;
      // :
      case 58:
        d = 1 + Nt(C), v = g;
      default:
        if (p < 1) {
          if (w == 123)
            --p;
          else if (w == 125 && p++ == 0 && m0() == 125)
            continue;
        }
        switch (C += Vs(w), w * p) {
          // &
          case 38:
            E = f > 0 ? 1 : (C += "\f", -1);
            break;
          // ,
          case 44:
            a[u++] = (Nt(C) - 1) * E, E = 1;
            break;
          // @
          case 64:
            pn() === 45 && (C += fi(bt())), l = pn(), f = d = Nt(m = C += w0($r())), w++;
            break;
          // -
          case 45:
            g === 45 && Nt(C) == 2 && (p = 0);
        }
    }
  return i;
}
function Sa(n, t, e, r, o, i, s, a, c, u, f, d) {
  for (var l = o - 1, v = o === 0 ? i : [""], g = fl(v), p = 0, h = 0, E = 0; p < r; ++p)
    for (var w = 0, m = jn(n, l + 1, l = ll(h = s[p])), A = n; w < g; ++w)
      (A = ul(h > 0 ? v[w] + " " + m : se(m, /&\f/g, v[w]))) && (c[E++] = A);
  return Vo(n, t, e, o === 0 ? Fo : a, c, u, f, d);
}
function _0(n, t, e, r) {
  return Vo(n, t, e, al, Vs(p0()), jn(n, 2, -2), 0, r);
}
function wa(n, t, e, r, o) {
  return Vo(n, t, e, zs, jn(n, 0, r), jn(n, r + 1, -1), r, o);
}
function hl(n, t, e) {
  switch (h0(n, t)) {
    // color-adjust
    case 5103:
      return Ee + "print-" + n + n;
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
      return Ee + n + n;
    // tab-size
    case 4789:
      return fr + n + n;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Ee + n + fr + n + Te + n + n;
    // writing-mode
    case 5936:
      switch (Xe(n, t + 11)) {
        // vertical-l(r)
        case 114:
          return Ee + n + Te + se(n, /[svh]\w+-[tblr]{2}/, "tb") + n;
        // vertical-r(l)
        case 108:
          return Ee + n + Te + se(n, /[svh]\w+-[tblr]{2}/, "tb-rl") + n;
        // horizontal(-)tb
        case 45:
          return Ee + n + Te + se(n, /[svh]\w+-[tblr]{2}/, "lr") + n;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return Ee + n + Te + n + n;
    // order
    case 6165:
      return Ee + n + Te + "flex-" + n + n;
    // align-items
    case 5187:
      return Ee + n + se(n, /(\w+).+(:[^]+)/, Ee + "box-$1$2" + Te + "flex-$1$2") + n;
    // align-self
    case 5443:
      return Ee + n + Te + "flex-item-" + se(n, /flex-|-self/g, "") + (Ht(n, /flex-|baseline/) ? "" : Te + "grid-row-" + se(n, /flex-|-self/g, "")) + n;
    // align-content
    case 4675:
      return Ee + n + Te + "flex-line-pack" + se(n, /align-content|flex-|-self/g, "") + n;
    // flex-shrink
    case 5548:
      return Ee + n + Te + se(n, "shrink", "negative") + n;
    // flex-basis
    case 5292:
      return Ee + n + Te + se(n, "basis", "preferred-size") + n;
    // flex-grow
    case 6060:
      return Ee + "box-" + se(n, "-grow", "") + Ee + n + Te + se(n, "grow", "positive") + n;
    // transition
    case 4554:
      return Ee + se(n, /([^-])(transform)/g, "$1" + Ee + "$2") + n;
    // cursor
    case 6187:
      return se(se(se(n, /(zoom-|grab)/, Ee + "$1"), /(image-set)/, Ee + "$1"), n, "") + n;
    // background, background-image
    case 5495:
    case 3959:
      return se(n, /(image-set\([^]*)/, Ee + "$1$`$1");
    // justify-content
    case 4968:
      return se(se(n, /(.+:)(flex-)?(.*)/, Ee + "box-pack:$3" + Te + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Ee + n + n;
    // justify-self
    case 4200:
      if (!Ht(n, /flex-|baseline/)) return Te + "grid-column-align" + jn(n, t) + n;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return Te + se(n, "template-", "") + n;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return e && e.some(function(r, o) {
        return t = o, Ht(r.props, /grid-\w+-end/);
      }) ? ~Xr(n + (e = e[t].value), "span", 0) ? n : Te + se(n, "-start", "") + n + Te + "grid-row-span:" + (~Xr(e, "span", 0) ? Ht(e, /\d+/) : +Ht(e, /\d+/) - +Ht(n, /\d+/)) + ";" : Te + se(n, "-start", "") + n;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return e && e.some(function(r) {
        return Ht(r.props, /grid-\w+-start/);
      }) ? n : Te + se(se(n, "-end", "-span"), "span ", "") + n;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return se(n, /(.+)-inline(.+)/, Ee + "$1$2") + n;
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
      if (Nt(n) - 1 - t > 6)
        switch (Xe(n, t + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (Xe(n, t + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return se(n, /(.+:)(.+)-([^]+)/, "$1" + Ee + "$2-$3$1" + fr + (Xe(n, t + 3) == 108 ? "$3" : "$2-$3")) + n;
          // (s)tretch
          case 115:
            return ~Xr(n, "stretch", 0) ? hl(se(n, "stretch", "fill-available"), t, e) + n : n;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return se(n, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, s, a, c, u) {
        return Te + o + ":" + i + u + (s ? Te + o + "-span:" + (a ? c : +c - +i) + u : "") + n;
      });
    // position: sticky
    case 4949:
      if (Xe(n, t + 6) === 121)
        return se(n, ":", ":" + Ee) + n;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (Xe(n, Xe(n, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return se(n, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + Ee + (Xe(n, 14) === 45 ? "inline-" : "") + "box$3$1" + Ee + "$2$3$1" + Te + "$2box$3") + n;
        // (inline-)?gri(d)
        case 100:
          return se(n, ":", ":" + Te) + n;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return se(n, "scroll-", "scroll-snap-") + n;
  }
  return n;
}
function po(n, t) {
  for (var e = "", r = 0; r < n.length; r++)
    e += t(n[r], r, n, t) || "";
  return e;
}
function C0(n, t, e, r) {
  switch (n.type) {
    case d0:
      if (n.children.length) break;
    case f0:
    case zs:
      return n.return = n.return || n.value;
    case al:
      return "";
    case cl:
      return n.return = n.value + "{" + po(n.children, r) + "}";
    case Fo:
      if (!Nt(n.value = n.props.join(","))) return "";
  }
  return Nt(e = po(n.children, r)) ? n.return = n.value + "{" + e + "}" : "";
}
function A0(n) {
  var t = fl(n);
  return function(e, r, o, i) {
    for (var s = "", a = 0; a < t; a++)
      s += n[a](e, r, o, i) || "";
    return s;
  };
}
function T0(n) {
  return function(t) {
    t.root || (t = t.return) && n(t);
  };
}
function O0(n, t, e, r) {
  if (n.length > -1 && !n.return)
    switch (n.type) {
      case zs:
        n.return = hl(n.value, n.length, e);
        return;
      case cl:
        return po([Gt(n, { value: se(n.value, "@", "@" + Ee) })], r);
      case Fo:
        if (n.length)
          return x0(e = n.props, function(o) {
            switch (Ht(o, r = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                An(Gt(n, { props: [se(o, /:(read-\w+)/, ":" + fr + "$1")] })), An(Gt(n, { props: [o] })), ji(n, { props: ba(e, r) });
                break;
              // :placeholder
              case "::placeholder":
                An(Gt(n, { props: [se(o, /:(plac\w+)/, ":" + Ee + "input-$1")] })), An(Gt(n, { props: [se(o, /:(plac\w+)/, ":" + fr + "$1")] })), An(Gt(n, { props: [se(o, /:(plac\w+)/, Te + "input-$1")] })), An(Gt(n, { props: [o] })), ji(n, { props: ba(e, r) });
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
}, Sn = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", xl = "active", pl = "data-styled-version", Uo = "6.1.18", Hs = `/*!sc*/
`, mo = typeof window < "u" && typeof document < "u", k0 = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Ea = /invalid hook call/i, Pr = /* @__PURE__ */ new Set(), P0 = function(n, t) {
  if (process.env.NODE_ENV !== "production") {
    var e = t ? ' with the id of "'.concat(t, '"') : "", r = "The component ".concat(n).concat(e, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, o = console.error;
    try {
      var i = !0;
      console.error = function(s) {
        for (var a = [], c = 1; c < arguments.length; c++) a[c - 1] = arguments[c];
        Ea.test(s) ? (i = !1, Pr.delete(r)) : o.apply(void 0, Nn([s], a, !1));
      }, $e(), i && !Pr.has(r) && (console.warn(r), Pr.add(r));
    } catch (s) {
      Ea.test(s.message) && Pr.delete(r);
    } finally {
      console.error = o;
    }
  }
}, qo = Object.freeze([]), Ln = Object.freeze({});
function I0(n, t, e) {
  return e === void 0 && (e = Ln), n.theme !== e.theme && n.theme || t || e.theme;
}
var Di = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), N0 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, j0 = /(^-|-$)/g;
function _a(n) {
  return n.replace(N0, "-").replace(j0, "");
}
var M0 = /(a)(d)/gi, Ir = 52, Ca = function(n) {
  return String.fromCharCode(n + (n > 25 ? 39 : 97));
};
function Bi(n) {
  var t, e = "";
  for (t = Math.abs(n); t > Ir; t = t / Ir | 0) e = Ca(t % Ir) + e;
  return (Ca(t % Ir) + e).replace(M0, "$1-$2");
}
var di, ml = 5381, un = function(n, t) {
  for (var e = t.length; e; ) n = 33 * n ^ t.charCodeAt(--e);
  return n;
}, gl = function(n) {
  return un(ml, n);
};
function L0(n) {
  return Bi(gl(n) >>> 0);
}
function vl(n) {
  return process.env.NODE_ENV !== "production" && typeof n == "string" && n || n.displayName || n.name || "Component";
}
function hi(n) {
  return typeof n == "string" && (process.env.NODE_ENV === "production" || n.charAt(0) === n.charAt(0).toLowerCase());
}
var yl = typeof Symbol == "function" && Symbol.for, bl = yl ? Symbol.for("react.memo") : 60115, D0 = yl ? Symbol.for("react.forward_ref") : 60112, B0 = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, F0 = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Sl = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, z0 = ((di = {})[D0] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, di[bl] = Sl, di);
function Aa(n) {
  return ("type" in (t = n) && t.type.$$typeof) === bl ? Sl : "$$typeof" in n ? z0[n.$$typeof] : B0;
  var t;
}
var V0 = Object.defineProperty, H0 = Object.getOwnPropertyNames, Ta = Object.getOwnPropertySymbols, U0 = Object.getOwnPropertyDescriptor, q0 = Object.getPrototypeOf, Oa = Object.prototype;
function wl(n, t, e) {
  if (typeof t != "string") {
    if (Oa) {
      var r = q0(t);
      r && r !== Oa && wl(n, r, e);
    }
    var o = H0(t);
    Ta && (o = o.concat(Ta(t)));
    for (var i = Aa(n), s = Aa(t), a = 0; a < o.length; ++a) {
      var c = o[a];
      if (!(c in F0 || e && e[c] || s && c in s || i && c in i)) {
        var u = U0(t, c);
        try {
          V0(n, c, u);
        } catch {
        }
      }
    }
  }
  return n;
}
function Dn(n) {
  return typeof n == "function";
}
function Us(n) {
  return typeof n == "object" && "styledComponentId" in n;
}
function dn(n, t) {
  return n && t ? "".concat(n, " ").concat(t) : n || t || "";
}
function Ra(n, t) {
  if (n.length === 0) return "";
  for (var e = n[0], r = 1; r < n.length; r++) e += n[r];
  return e;
}
function Bn(n) {
  return n !== null && typeof n == "object" && n.constructor.name === Object.name && !("props" in n && n.$$typeof);
}
function Fi(n, t, e) {
  if (e === void 0 && (e = !1), !e && !Bn(n) && !Array.isArray(n)) return t;
  if (Array.isArray(t)) for (var r = 0; r < t.length; r++) n[r] = Fi(n[r], t[r]);
  else if (Bn(t)) for (var r in t) n[r] = Fi(n[r], t[r]);
  return n;
}
function qs(n, t) {
  Object.defineProperty(n, "toString", { value: t });
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
function Y0() {
  for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
  for (var e = n[0], r = [], o = 1, i = n.length; o < i; o += 1) r.push(n[o]);
  return r.forEach(function(s) {
    e = e.replace(/%[a-z]/, s);
  }), e;
}
function Yn(n) {
  for (var t = [], e = 1; e < arguments.length; e++) t[e - 1] = arguments[e];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(Y0.apply(void 0, Nn([W0[n]], t, !1)).trim());
}
var X0 = function() {
  function n(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return n.prototype.indexOfGroup = function(t) {
    for (var e = 0, r = 0; r < t; r++) e += this.groupSizes[r];
    return e;
  }, n.prototype.insertRules = function(t, e) {
    if (t >= this.groupSizes.length) {
      for (var r = this.groupSizes, o = r.length, i = o; t >= i; ) if ((i <<= 1) < 0) throw Yn(16, "".concat(t));
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(r), this.length = i;
      for (var s = o; s < i; s++) this.groupSizes[s] = 0;
    }
    for (var a = this.indexOfGroup(t + 1), c = (s = 0, e.length); s < c; s++) this.tag.insertRule(a, e[s]) && (this.groupSizes[t]++, a++);
  }, n.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var e = this.groupSizes[t], r = this.indexOfGroup(t), o = r + e;
      this.groupSizes[t] = 0;
      for (var i = r; i < o; i++) this.tag.deleteRule(r);
    }
  }, n.prototype.getGroup = function(t) {
    var e = "";
    if (t >= this.length || this.groupSizes[t] === 0) return e;
    for (var r = this.groupSizes[t], o = this.indexOfGroup(t), i = o + r, s = o; s < i; s++) e += "".concat(this.tag.getRule(s)).concat(Hs);
    return e;
  }, n;
}(), $0 = 1 << 30, Kr = /* @__PURE__ */ new Map(), go = /* @__PURE__ */ new Map(), Zr = 1, Nr = function(n) {
  if (Kr.has(n)) return Kr.get(n);
  for (; go.has(Zr); ) Zr++;
  var t = Zr++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > $0)) throw Yn(16, "".concat(t));
  return Kr.set(n, t), go.set(t, n), t;
}, G0 = function(n, t) {
  Zr = t + 1, Kr.set(n, t), go.set(t, n);
}, K0 = "style[".concat(Sn, "][").concat(pl, '="').concat(Uo, '"]'), Z0 = new RegExp("^".concat(Sn, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), J0 = function(n, t, e) {
  for (var r, o = e.split(","), i = 0, s = o.length; i < s; i++) (r = o[i]) && n.registerName(t, r);
}, Q0 = function(n, t) {
  for (var e, r = ((e = t.textContent) !== null && e !== void 0 ? e : "").split(Hs), o = [], i = 0, s = r.length; i < s; i++) {
    var a = r[i].trim();
    if (a) {
      var c = a.match(Z0);
      if (c) {
        var u = 0 | parseInt(c[1], 10), f = c[2];
        u !== 0 && (G0(f, u), J0(n, f, c[3]), n.getTag().insertRules(u, o)), o.length = 0;
      } else o.push(a);
    }
  }
}, ka = function(n) {
  for (var t = document.querySelectorAll(K0), e = 0, r = t.length; e < r; e++) {
    var o = t[e];
    o && o.getAttribute(Sn) !== xl && (Q0(n, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function ed() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var El = function(n) {
  var t = document.head, e = n || t, r = document.createElement("style"), o = function(a) {
    var c = Array.from(a.querySelectorAll("style[".concat(Sn, "]")));
    return c[c.length - 1];
  }(e), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(Sn, xl), r.setAttribute(pl, Uo);
  var s = ed();
  return s && r.setAttribute("nonce", s), e.insertBefore(r, i), r;
}, td = function() {
  function n(t) {
    this.element = El(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(e) {
      if (e.sheet) return e.sheet;
      for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
        var s = r[o];
        if (s.ownerNode === e) return s;
      }
      throw Yn(17);
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
}(), nd = function() {
  function n(t) {
    this.element = El(t), this.nodes = this.element.childNodes, this.length = 0;
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
}(), rd = function() {
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
}(), Pa = mo, od = { isServer: !mo, useCSSOMInjection: !k0 }, _l = function() {
  function n(t, e, r) {
    t === void 0 && (t = Ln), e === void 0 && (e = {});
    var o = this;
    this.options = nt(nt({}, od), t), this.gs = e, this.names = new Map(r), this.server = !!t.isServer, !this.server && mo && Pa && (Pa = !1, ka(this)), qs(this, function() {
      return function(i) {
        for (var s = i.getTag(), a = s.length, c = "", u = function(d) {
          var l = function(E) {
            return go.get(E);
          }(d);
          if (l === void 0) return "continue";
          var v = i.names.get(l), g = s.getGroup(d);
          if (v === void 0 || !v.size || g.length === 0) return "continue";
          var p = "".concat(Sn, ".g").concat(d, '[id="').concat(l, '"]'), h = "";
          v !== void 0 && v.forEach(function(E) {
            E.length > 0 && (h += "".concat(E, ","));
          }), c += "".concat(g).concat(p, '{content:"').concat(h, '"}').concat(Hs);
        }, f = 0; f < a; f++) u(f);
        return c;
      }(o);
    });
  }
  return n.registerId = function(t) {
    return Nr(t);
  }, n.prototype.rehydrate = function() {
    !this.server && mo && ka(this);
  }, n.prototype.reconstructWithOptions = function(t, e) {
    return e === void 0 && (e = !0), new n(nt(nt({}, this.options), t), this.gs, e && this.names || void 0);
  }, n.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, n.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(e) {
      var r = e.useCSSOMInjection, o = e.target;
      return e.isServer ? new rd(o) : r ? new td(o) : new nd(o);
    }(this.options), new X0(t)));
    var t;
  }, n.prototype.hasNameForId = function(t, e) {
    return this.names.has(t) && this.names.get(t).has(e);
  }, n.prototype.registerName = function(t, e) {
    if (Nr(t), this.names.has(t)) this.names.get(t).add(e);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(e), this.names.set(t, r);
    }
  }, n.prototype.insertRules = function(t, e, r) {
    this.registerName(t, e), this.getTag().insertRules(Nr(t), r);
  }, n.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, n.prototype.clearRules = function(t) {
    this.getTag().clearGroup(Nr(t)), this.clearNames(t);
  }, n.prototype.clearTag = function() {
    this.tag = void 0;
  }, n;
}(), id = /&/g, sd = /^\s*\/\/.*$/gm;
function Cl(n, t) {
  return n.map(function(e) {
    return e.type === "rule" && (e.value = "".concat(t, " ").concat(e.value), e.value = e.value.replaceAll(",", ",".concat(t, " ")), e.props = e.props.map(function(r) {
      return "".concat(t, " ").concat(r);
    })), Array.isArray(e.children) && e.type !== "@keyframes" && (e.children = Cl(e.children, t)), e;
  });
}
function ad(n) {
  var t, e, r, o = Ln, i = o.options, s = i === void 0 ? Ln : i, a = o.plugins, c = a === void 0 ? qo : a, u = function(l, v, g) {
    return g.startsWith(e) && g.endsWith(e) && g.replaceAll(e, "").length > 0 ? ".".concat(t) : l;
  }, f = c.slice();
  f.push(function(l) {
    l.type === Fo && l.value.includes("&") && (l.props[0] = l.props[0].replace(id, e).replace(r, u));
  }), s.prefix && f.push(O0), f.push(C0);
  var d = function(l, v, g, p) {
    v === void 0 && (v = ""), g === void 0 && (g = ""), p === void 0 && (p = "&"), t = p, e = v, r = new RegExp("\\".concat(e, "\\b"), "g");
    var h = l.replace(sd, ""), E = E0(g || v ? "".concat(g, " ").concat(v, " { ").concat(h, " }") : h);
    s.namespace && (E = Cl(E, s.namespace));
    var w = [];
    return po(E, A0(f.concat(T0(function(m) {
      return w.push(m);
    })))), w;
  };
  return d.hash = c.length ? c.reduce(function(l, v) {
    return v.name || Yn(15), un(l, v.name);
  }, ml).toString() : "", d;
}
var cd = new _l(), zi = ad(), Al = Fe.createContext({ shouldForwardProp: void 0, styleSheet: cd, stylis: zi });
Al.Consumer;
Fe.createContext(void 0);
function Ia() {
  return en(Al);
}
var Na = function() {
  function n(t, e) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = zi);
      var s = r.name + i.hash;
      o.hasNameForId(r.id, s) || o.insertRules(r.id, s, i(r.rules, s, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = e, qs(this, function() {
      throw Yn(12, String(r.name));
    });
  }
  return n.prototype.getName = function(t) {
    return t === void 0 && (t = zi), this.name + t.hash;
  }, n;
}(), ld = function(n) {
  return n >= "A" && n <= "Z";
};
function ja(n) {
  for (var t = "", e = 0; e < n.length; e++) {
    var r = n[e];
    if (e === 1 && r === "-" && n[0] === "-") return n;
    ld(r) ? t += "-" + r.toLowerCase() : t += r;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Tl = function(n) {
  return n == null || n === !1 || n === "";
}, Ol = function(n) {
  var t, e, r = [];
  for (var o in n) {
    var i = n[o];
    n.hasOwnProperty(o) && !Tl(i) && (Array.isArray(i) && i.isCss || Dn(i) ? r.push("".concat(ja(o), ":"), i, ";") : Bn(i) ? r.push.apply(r, Nn(Nn(["".concat(o, " {")], Ol(i), !1), ["}"], !1)) : r.push("".concat(ja(o), ": ").concat((t = o, (e = i) == null || typeof e == "boolean" || e === "" ? "" : typeof e != "number" || e === 0 || t in R0 || t.startsWith("--") ? String(e).trim() : "".concat(e, "px")), ";")));
  }
  return r;
};
function mn(n, t, e, r) {
  if (Tl(n)) return [];
  if (Us(n)) return [".".concat(n.styledComponentId)];
  if (Dn(n)) {
    if (!Dn(i = n) || i.prototype && i.prototype.isReactComponent || !t) return [n];
    var o = n(t);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof Na || Bn(o) || o === null || console.error("".concat(vl(n), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), mn(o, t, e, r);
  }
  var i;
  return n instanceof Na ? e ? (n.inject(e, r), [n.getName(r)]) : [n] : Bn(n) ? Ol(n) : Array.isArray(n) ? Array.prototype.concat.apply(qo, n.map(function(s) {
    return mn(s, t, e, r);
  })) : [n.toString()];
}
function ud(n) {
  for (var t = 0; t < n.length; t += 1) {
    var e = n[t];
    if (Dn(e) && !Us(e)) return !1;
  }
  return !0;
}
var fd = gl(Uo), dd = function() {
  function n(t, e, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && ud(t), this.componentId = e, this.baseHash = un(fd, e), this.baseStyle = r, _l.registerId(e);
  }
  return n.prototype.generateAndInjectStyles = function(t, e, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, e, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && e.hasNameForId(this.componentId, this.staticRulesId)) o = dn(o, this.staticRulesId);
    else {
      var i = Ra(mn(this.rules, t, e, r)), s = Bi(un(this.baseHash, i) >>> 0);
      if (!e.hasNameForId(this.componentId, s)) {
        var a = r(i, ".".concat(s), void 0, this.componentId);
        e.insertRules(this.componentId, s, a);
      }
      o = dn(o, s), this.staticRulesId = s;
    }
    else {
      for (var c = un(this.baseHash, r.hash), u = "", f = 0; f < this.rules.length; f++) {
        var d = this.rules[f];
        if (typeof d == "string") u += d, process.env.NODE_ENV !== "production" && (c = un(c, d));
        else if (d) {
          var l = Ra(mn(d, t, e, r));
          c = un(c, l + f), u += l;
        }
      }
      if (u) {
        var v = Bi(c >>> 0);
        e.hasNameForId(this.componentId, v) || e.insertRules(this.componentId, v, r(u, ".".concat(v), void 0, this.componentId)), o = dn(o, v);
      }
    }
    return o;
  }, n;
}(), Rl = Fe.createContext(void 0);
Rl.Consumer;
var xi = {}, Ma = /* @__PURE__ */ new Set();
function hd(n, t, e) {
  var r = Us(n), o = n, i = !hi(n), s = t.attrs, a = s === void 0 ? qo : s, c = t.componentId, u = c === void 0 ? function(A, y) {
    var O = typeof A != "string" ? "sc" : _a(A);
    xi[O] = (xi[O] || 0) + 1;
    var C = "".concat(O, "-").concat(L0(Uo + O + xi[O]));
    return y ? "".concat(y, "-").concat(C) : C;
  }(t.displayName, t.parentComponentId) : c, f = t.displayName, d = f === void 0 ? function(A) {
    return hi(A) ? "styled.".concat(A) : "Styled(".concat(vl(A), ")");
  }(n) : f, l = t.displayName && t.componentId ? "".concat(_a(t.displayName), "-").concat(t.componentId) : t.componentId || u, v = r && o.attrs ? o.attrs.concat(a).filter(Boolean) : a, g = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var p = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var h = t.shouldForwardProp;
      g = function(A, y) {
        return p(A, y) && h(A, y);
      };
    } else g = p;
  }
  var E = new dd(e, l, r ? o.componentStyle : void 0);
  function w(A, y) {
    return function(O, C, j) {
      var z = O.attrs, Y = O.componentStyle, ne = O.defaultProps, $ = O.foldedComponentIds, F = O.styledComponentId, W = O.target, H = Fe.useContext(Rl), G = Ia(), Q = O.shouldForwardProp || G.shouldForwardProp;
      process.env.NODE_ENV !== "production" && pa(F);
      var Z = I0(C, H, ne) || Ln, J = function(ue, ve, P) {
        for (var L, R = nt(nt({}, ve), { className: void 0, theme: P }), N = 0; N < ue.length; N += 1) {
          var b = Dn(L = ue[N]) ? L(R) : L;
          for (var B in b) R[B] = B === "className" ? dn(R[B], b[B]) : B === "style" ? nt(nt({}, R[B]), b[B]) : b[B];
        }
        return ve.className && (R.className = dn(R.className, ve.className)), R;
      }(z, C, Z), re = J.as || W, oe = {};
      for (var K in J) J[K] === void 0 || K[0] === "$" || K === "as" || K === "theme" && J.theme === Z || (K === "forwardedAs" ? oe.as = J.forwardedAs : Q && !Q(K, re) || (oe[K] = J[K], Q || process.env.NODE_ENV !== "development" || u0(K) || Ma.has(K) || !Di.has(re) || (Ma.add(K), console.warn('styled-components: it looks like an unknown prop "'.concat(K, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var ee = function(ue, ve) {
        var P = Ia(), L = ue.generateAndInjectStyles(ve, P.styleSheet, P.stylis);
        return process.env.NODE_ENV !== "production" && pa(L), L;
      }(Y, J);
      process.env.NODE_ENV !== "production" && O.warnTooManyClasses && O.warnTooManyClasses(ee);
      var pe = dn($, F);
      return ee && (pe += " " + ee), J.className && (pe += " " + J.className), oe[hi(re) && !Di.has(re) ? "class" : "className"] = pe, j && (oe.ref = j), e0(re, oe);
    }(m, A, y);
  }
  w.displayName = d;
  var m = Fe.forwardRef(w);
  return m.attrs = v, m.componentStyle = E, m.displayName = d, m.shouldForwardProp = g, m.foldedComponentIds = r ? dn(o.foldedComponentIds, o.styledComponentId) : "", m.styledComponentId = l, m.target = r ? o.target : n, Object.defineProperty(m, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(A) {
    this._foldedDefaultProps = r ? function(y) {
      for (var O = [], C = 1; C < arguments.length; C++) O[C - 1] = arguments[C];
      for (var j = 0, z = O; j < z.length; j++) Fi(y, z[j], !0);
      return y;
    }({}, o.defaultProps, A) : A;
  } }), process.env.NODE_ENV !== "production" && (P0(d, l), m.warnTooManyClasses = /* @__PURE__ */ function(A, y) {
    var O = {}, C = !1;
    return function(j) {
      if (!C && (O[j] = !0, Object.keys(O).length >= 200)) {
        var z = y ? ' with the id of "'.concat(y, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(A).concat(z, `.
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
  }(d, l)), qs(m, function() {
    return ".".concat(m.styledComponentId);
  }), i && wl(m, n, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), m;
}
function La(n, t) {
  for (var e = [n[0]], r = 0, o = t.length; r < o; r += 1) e.push(t[r], n[r + 1]);
  return e;
}
var Da = function(n) {
  return Object.assign(n, { isCss: !0 });
};
function xd(n) {
  for (var t = [], e = 1; e < arguments.length; e++) t[e - 1] = arguments[e];
  if (Dn(n) || Bn(n)) return Da(mn(La(qo, Nn([n], t, !0))));
  var r = n;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string" ? mn(r) : Da(mn(La(r, t)));
}
function Vi(n, t, e) {
  if (e === void 0 && (e = Ln), !t) throw Yn(1, t);
  var r = function(o) {
    for (var i = [], s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
    return n(t, e, xd.apply(void 0, Nn([o], i, !1)));
  };
  return r.attrs = function(o) {
    return Vi(n, t, nt(nt({}, e), { attrs: Array.prototype.concat(e.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return Vi(n, t, nt(nt({}, e), o));
  }, r;
}
var kl = function(n) {
  return Vi(hd, n);
}, Et = kl;
Di.forEach(function(n) {
  Et[n] = kl(n);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var jr = "__sc-".concat(Sn, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[jr] || (window[jr] = 0), window[jr] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[jr] += 1);
function vo(n, t) {
  const e = yo();
  return vo = function(r, o) {
    return r = r - 322, e[r];
  }, vo(n, t);
}
const Er = vo;
(function(n, t) {
  const e = vo, r = n();
  for (; ; )
    try {
      if (parseInt(e(326)) / 1 * (parseInt(e(322)) / 2) + -parseInt(e(338)) / 3 * (-parseInt(e(335)) / 4) + -parseInt(e(325)) / 5 * (-parseInt(e(327)) / 6) + parseInt(e(328)) / 7 * (-parseInt(e(323)) / 8) + parseInt(e(331)) / 9 * (parseInt(e(329)) / 10) + parseInt(e(324)) / 11 * (parseInt(e(330)) / 12) + parseInt(e(337)) / 13 * (-parseInt(e(333)) / 14) === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(yo, 457065);
const pd = Et[Er(332)]`
  flex-direction: column;
  border-radius: 15px;
  border: 3px solid #a0beeb;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
  justify-items: center;
  align-items: center;
`, md = Et[Er(332)]`
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
function yo() {
  const n = ["canvas", "8983TMLDcx", "4065NEybOZ", "106HaSGJO", "538528bLcTMH", "1041062rINDtp", "10oReEYK", "13371pijbMJ", "1441236iDIwTW", "35oeifVk", "10QuPFss", "12rmwwwo", "3982221dkwuNm", "div", "33334iEqaFv", "span", "2104WrYHYl"];
  return yo = function() {
    return n;
  }, yo();
}
const gd = Et[Er(336)]`
  border-radius: 7px;
  display: inline;
  padding: 0;
  &:focus-visible {
    outline: none;
  }
`, vd = Et[Er(334)]`
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
`, yd = Et[Er(332)]`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  pointer-events: none;
`, Mt = /* @__PURE__ */ Object.create(null);
Mt.open = "0";
Mt.close = "1";
Mt.ping = "2";
Mt.pong = "3";
Mt.message = "4";
Mt.upgrade = "5";
Mt.noop = "6";
const Jr = /* @__PURE__ */ Object.create(null);
Object.keys(Mt).forEach((n) => {
  Jr[Mt[n]] = n;
});
const Hi = { type: "error", data: "parser error" }, Pl = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", Il = typeof ArrayBuffer == "function", Nl = (n) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(n) : n && n.buffer instanceof ArrayBuffer, Ws = ({ type: n, data: t }, e, r) => Pl && t instanceof Blob ? e ? r(t) : Ba(t, r) : Il && (t instanceof ArrayBuffer || Nl(t)) ? e ? r(t) : Ba(new Blob([t]), r) : r(Mt[n] + (t || "")), Ba = (n, t) => {
  const e = new FileReader();
  return e.onload = function() {
    const r = e.result.split(",")[1];
    t("b" + (r || ""));
  }, e.readAsDataURL(n);
};
function Fa(n) {
  return n instanceof Uint8Array ? n : n instanceof ArrayBuffer ? new Uint8Array(n) : new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
}
let pi;
function bd(n, t) {
  if (Pl && n.data instanceof Blob)
    return n.data.arrayBuffer().then(Fa).then(t);
  if (Il && (n.data instanceof ArrayBuffer || Nl(n.data)))
    return t(Fa(n.data));
  Ws(n, !1, (e) => {
    pi || (pi = new TextEncoder()), t(pi.encode(e));
  });
}
const za = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ur = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let n = 0; n < za.length; n++)
  ur[za.charCodeAt(n)] = n;
const Sd = (n) => {
  let t = n.length * 0.75, e = n.length, r, o = 0, i, s, a, c;
  n[n.length - 1] === "=" && (t--, n[n.length - 2] === "=" && t--);
  const u = new ArrayBuffer(t), f = new Uint8Array(u);
  for (r = 0; r < e; r += 4)
    i = ur[n.charCodeAt(r)], s = ur[n.charCodeAt(r + 1)], a = ur[n.charCodeAt(r + 2)], c = ur[n.charCodeAt(r + 3)], f[o++] = i << 2 | s >> 4, f[o++] = (s & 15) << 4 | a >> 2, f[o++] = (a & 3) << 6 | c & 63;
  return u;
}, wd = typeof ArrayBuffer == "function", Ys = (n, t) => {
  if (typeof n != "string")
    return {
      type: "message",
      data: jl(n, t)
    };
  const e = n.charAt(0);
  return e === "b" ? {
    type: "message",
    data: Ed(n.substring(1), t)
  } : Jr[e] ? n.length > 1 ? {
    type: Jr[e],
    data: n.substring(1)
  } : {
    type: Jr[e]
  } : Hi;
}, Ed = (n, t) => {
  if (wd) {
    const e = Sd(n);
    return jl(e, t);
  } else
    return { base64: !0, data: n };
}, jl = (n, t) => {
  switch (t) {
    case "blob":
      return n instanceof Blob ? n : new Blob([n]);
    case "arraybuffer":
    default:
      return n instanceof ArrayBuffer ? n : n.buffer;
  }
}, Ml = "", _d = (n, t) => {
  const e = n.length, r = new Array(e);
  let o = 0;
  n.forEach((i, s) => {
    Ws(i, !1, (a) => {
      r[s] = a, ++o === e && t(r.join(Ml));
    });
  });
}, Cd = (n, t) => {
  const e = n.split(Ml), r = [];
  for (let o = 0; o < e.length; o++) {
    const i = Ys(e[o], t);
    if (r.push(i), i.type === "error")
      break;
  }
  return r;
};
function Ad() {
  return new TransformStream({
    transform(n, t) {
      bd(n, (e) => {
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
        n.data && typeof n.data != "string" && (o[0] |= 128), t.enqueue(o), t.enqueue(e);
      });
    }
  });
}
let mi;
function Mr(n) {
  return n.reduce((t, e) => t + e.length, 0);
}
function Lr(n, t) {
  if (n[0].length === t)
    return n.shift();
  const e = new Uint8Array(t);
  let r = 0;
  for (let o = 0; o < t; o++)
    e[o] = n[0][r++], r === n[0].length && (n.shift(), r = 0);
  return n.length && r < n[0].length && (n[0] = n[0].slice(r)), e;
}
function Td(n, t) {
  mi || (mi = new TextDecoder());
  const e = [];
  let r = 0, o = -1, i = !1;
  return new TransformStream({
    transform(s, a) {
      for (e.push(s); ; ) {
        if (r === 0) {
          if (Mr(e) < 1)
            break;
          const c = Lr(e, 1);
          i = (c[0] & 128) === 128, o = c[0] & 127, o < 126 ? r = 3 : o === 126 ? r = 1 : r = 2;
        } else if (r === 1) {
          if (Mr(e) < 2)
            break;
          const c = Lr(e, 2);
          o = new DataView(c.buffer, c.byteOffset, c.length).getUint16(0), r = 3;
        } else if (r === 2) {
          if (Mr(e) < 8)
            break;
          const c = Lr(e, 8), u = new DataView(c.buffer, c.byteOffset, c.length), f = u.getUint32(0);
          if (f > Math.pow(2, 21) - 1) {
            a.enqueue(Hi);
            break;
          }
          o = f * Math.pow(2, 32) + u.getUint32(4), r = 3;
        } else {
          if (Mr(e) < o)
            break;
          const c = Lr(e, o);
          a.enqueue(Ys(i ? c : mi.decode(c), t)), r = 0;
        }
        if (o === 0 || o > n) {
          a.enqueue(Hi);
          break;
        }
      }
    }
  });
}
const Ll = 4;
function He(n) {
  if (n) return Od(n);
}
function Od(n) {
  for (var t in He.prototype)
    n[t] = He.prototype[t];
  return n;
}
He.prototype.on = He.prototype.addEventListener = function(n, t) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + n] = this._callbacks["$" + n] || []).push(t), this;
};
He.prototype.once = function(n, t) {
  function e() {
    this.off(n, e), t.apply(this, arguments);
  }
  return e.fn = t, this.on(n, e), this;
};
He.prototype.off = He.prototype.removeListener = He.prototype.removeAllListeners = He.prototype.removeEventListener = function(n, t) {
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
He.prototype.emit = function(n) {
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
He.prototype.emitReserved = He.prototype.emit;
He.prototype.listeners = function(n) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + n] || [];
};
He.prototype.hasListeners = function(n) {
  return !!this.listeners(n).length;
};
const Wo = typeof Promise == "function" && typeof Promise.resolve == "function" ? (t) => Promise.resolve().then(t) : (t, e) => e(t, 0), ht = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), Rd = "arraybuffer";
function Dl(n, ...t) {
  return t.reduce((e, r) => (n.hasOwnProperty(r) && (e[r] = n[r]), e), {});
}
const kd = ht.setTimeout, Pd = ht.clearTimeout;
function Yo(n, t) {
  t.useNativeTimers ? (n.setTimeoutFn = kd.bind(ht), n.clearTimeoutFn = Pd.bind(ht)) : (n.setTimeoutFn = ht.setTimeout.bind(ht), n.clearTimeoutFn = ht.clearTimeout.bind(ht));
}
const Id = 1.33;
function Nd(n) {
  return typeof n == "string" ? jd(n) : Math.ceil((n.byteLength || n.size) * Id);
}
function jd(n) {
  let t = 0, e = 0;
  for (let r = 0, o = n.length; r < o; r++)
    t = n.charCodeAt(r), t < 128 ? e += 1 : t < 2048 ? e += 2 : t < 55296 || t >= 57344 ? e += 3 : (r++, e += 4);
  return e;
}
function Bl() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function Md(n) {
  let t = "";
  for (let e in n)
    n.hasOwnProperty(e) && (t.length && (t += "&"), t += encodeURIComponent(e) + "=" + encodeURIComponent(n[e]));
  return t;
}
function Ld(n) {
  let t = {}, e = n.split("&");
  for (let r = 0, o = e.length; r < o; r++) {
    let i = e[r].split("=");
    t[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
  }
  return t;
}
class Dd extends Error {
  constructor(t, e, r) {
    super(t), this.description = e, this.context = r, this.type = "TransportError";
  }
}
class Xs extends He {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(t) {
    super(), this.writable = !1, Yo(this, t), this.opts = t, this.query = t.query, this.socket = t.socket, this.supportsBinary = !t.forceBase64;
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
    return super.emitReserved("error", new Dd(t, e, r)), this;
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
    const e = Ys(t, this.socket.binaryType);
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
    const e = Md(t);
    return e.length ? "?" + e : "";
  }
}
class Bd extends Xs {
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
    Cd(t, this.socket.binaryType).forEach(e), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
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
    this.writable = !1, _d(t, (e) => {
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
    return this.opts.timestampRequests !== !1 && (e[this.opts.timestampParam] = Bl()), !this.supportsBinary && !e.sid && (e.b64 = 1), this.createUri(t, e);
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
    const t = this.request();
    t.on("data", this.onData.bind(this)), t.on("error", (e, r) => {
      this.onError("xhr poll error", e, r);
    }), this.pollXhr = t;
  }
}
let kn = class Qr extends He {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(t, e, r) {
    super(), this.createRequest = t, Yo(this, r), this._opts = r, this._method = r.method || "GET", this._uri = e, this._data = r.data !== void 0 ? r.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var t;
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
    typeof document < "u" && (this._index = Qr.requestsCount++, Qr.requests[this._index] = this);
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
      if (this._xhr.onreadystatechange = zd, t)
        try {
          this._xhr.abort();
        } catch {
        }
      typeof document < "u" && delete Qr.requests[this._index], this._xhr = null;
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
kn.requestsCount = 0;
kn.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", Va);
  else if (typeof addEventListener == "function") {
    const n = "onpagehide" in ht ? "pagehide" : "unload";
    addEventListener(n, Va, !1);
  }
}
function Va() {
  for (let n in kn.requests)
    kn.requests.hasOwnProperty(n) && kn.requests[n].abort();
}
const Hd = function() {
  const n = zl({
    xdomain: !1
  });
  return n && n.responseType !== null;
}();
class Ud extends Vd {
  constructor(t) {
    super(t);
    const e = t && t.forceBase64;
    this.supportsBinary = Hd && !e;
  }
  request(t = {}) {
    return Object.assign(t, { xd: this.xd }, this.opts), new kn(zl, this.uri(), t);
  }
}
function zl(n) {
  const t = n.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!t || Fd))
      return new XMLHttpRequest();
  } catch {
  }
  if (!t)
    try {
      return new ht[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const Vl = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class qd extends Xs {
  get name() {
    return "websocket";
  }
  doOpen() {
    const t = this.uri(), e = this.opts.protocols, r = Vl ? {} : Dl(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
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
    const t = this.opts.secure ? "wss" : "ws", e = this.query || {};
    return this.opts.timestampRequests && (e[this.opts.timestampParam] = Bl()), this.supportsBinary || (e.b64 = 1), this.createUri(t, e);
  }
}
const gi = ht.WebSocket || ht.MozWebSocket;
class Wd extends qd {
  createSocket(t, e, r) {
    return Vl ? new gi(t, e, r) : e ? new gi(t, e) : new gi(t);
  }
  doWrite(t, e) {
    this.ws.send(e);
  }
}
class Yd extends Xs {
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
        const e = Td(Number.MAX_SAFE_INTEGER, this.socket.binaryType), r = t.readable.pipeThrough(e).getReader(), o = Ad();
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
    for (let e = 0; e < t.length; e++) {
      const r = t[e], o = e === t.length - 1;
      this._writer.write(r).then(() => {
        o && Wo(() => {
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
const Xd = {
  websocket: Wd,
  webtransport: Yd,
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
function Ui(n) {
  if (n.length > 8e3)
    throw "URI too long";
  const t = n, e = n.indexOf("["), r = n.indexOf("]");
  e != -1 && r != -1 && (n = n.substring(0, e) + n.substring(e, r).replace(/:/g, ";") + n.substring(r, n.length));
  let o = $d.exec(n || ""), i = {}, s = 14;
  for (; s--; )
    i[Gd[s]] = o[s] || "";
  return e != -1 && r != -1 && (i.source = t, i.host = i.host.substring(1, i.host.length - 1).replace(/;/g, ":"), i.authority = i.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), i.ipv6uri = !0), i.pathNames = Kd(i, i.path), i.queryKey = Zd(i, i.query), i;
}
function Kd(n, t) {
  const e = /\/{2,9}/g, r = t.replace(e, "/").split("/");
  return (t.slice(0, 1) == "/" || t.length === 0) && r.splice(0, 1), t.slice(-1) == "/" && r.splice(r.length - 1, 1), r;
}
function Zd(n, t) {
  const e = {};
  return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(r, o, i) {
    o && (e[o] = i);
  }), e;
}
const qi = typeof addEventListener == "function" && typeof removeEventListener == "function", eo = [];
qi && addEventListener("offline", () => {
  eo.forEach((n) => n());
}, !1);
class Qt extends He {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(t, e) {
    if (super(), this.binaryType = Rd, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, t && typeof t == "object" && (e = t, t = null), t) {
      const r = Ui(t);
      e.hostname = r.host, e.secure = r.protocol === "https" || r.protocol === "wss", e.port = r.port, r.query && (e.query = r.query);
    } else e.host && (e.hostname = Ui(e.host).host);
    Yo(this, e), this.secure = e.secure != null ? e.secure : typeof location < "u" && location.protocol === "https:", e.hostname && !e.port && (e.port = this.secure ? "443" : "80"), this.hostname = e.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = e.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, e.transports.forEach((r) => {
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
    }, eo.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
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
    e.EIO = Ll, e.transport = t, this.id && (e.sid = this.id);
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
    const t = this.opts.rememberUpgrade && Qt.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
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
    this.readyState = "open", Qt.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
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
    const t = Date.now() > this._pingTimeoutTime;
    return t && (this._pingTimeoutTime = 0, Wo(() => {
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
    const i = {
      type: t,
      data: e,
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
    if (Qt.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
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
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), qi && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const r = eo.indexOf(this._offlineEventListener);
        r !== -1 && eo.splice(r, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", t, e), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
Qt.protocol = Ll;
class Jd extends Qt {
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
    Qt.priorWebsocketSuccess = !1;
    const o = () => {
      r || (e.send([{ type: "ping", data: "probe" }]), e.once("packet", (d) => {
        if (!r)
          if (d.type === "pong" && d.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", e), !e)
              return;
            Qt.priorWebsocketSuccess = e.name === "websocket", this.transport.pause(() => {
              r || this.readyState !== "closed" && (f(), this.setTransport(e), e.send([{ type: "upgrade" }]), this.emitReserved("upgrade", e), e = null, this.upgrading = !1, this.flush());
            });
          } else {
            const l = new Error("probe error");
            l.transport = e.name, this.emitReserved("upgradeError", l);
          }
      }));
    };
    function i() {
      r || (r = !0, f(), e.close(), e = null);
    }
    const s = (d) => {
      const l = new Error("probe error: " + d);
      l.transport = e.name, i(), this.emitReserved("upgradeError", l);
    };
    function a() {
      s("transport closed");
    }
    function c() {
      s("socket closed");
    }
    function u(d) {
      e && d.name !== e.name && i();
    }
    const f = () => {
      e.removeListener("open", o), e.removeListener("error", s), e.removeListener("close", a), this.off("close", c), this.off("upgrading", u);
    };
    e.once("open", o), e.once("error", s), e.once("close", a), this.once("close", c), this.once("upgrading", u), this._upgrades.indexOf("webtransport") !== -1 && t !== "webtransport" ? this.setTimeoutFn(() => {
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
let Qd = class extends Jd {
  constructor(t, e = {}) {
    const r = typeof t == "object" ? t : e;
    (!r.transports || r.transports && typeof r.transports[0] == "string") && (r.transports = (r.transports || ["polling", "websocket", "webtransport"]).map((o) => Xd[o]).filter((o) => !!o)), super(t, r);
  }
};
function eh(n, t = "", e) {
  let r = n;
  e = e || typeof location < "u" && location, n == null && (n = e.protocol + "//" + e.host), typeof n == "string" && (n.charAt(0) === "/" && (n.charAt(1) === "/" ? n = e.protocol + n : n = e.host + n), /^(https?|wss?):\/\//.test(n) || (typeof e < "u" ? n = e.protocol + "//" + n : n = "https://" + n), r = Ui(n)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
  const i = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return r.id = r.protocol + "://" + i + ":" + r.port + t, r.href = r.protocol + "://" + i + (e && e.port === r.port ? "" : ":" + r.port), r;
}
const th = typeof ArrayBuffer == "function", nh = (n) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(n) : n.buffer instanceof ArrayBuffer, Hl = Object.prototype.toString, rh = typeof Blob == "function" || typeof Blob < "u" && Hl.call(Blob) === "[object BlobConstructor]", oh = typeof File == "function" || typeof File < "u" && Hl.call(File) === "[object FileConstructor]";
function $s(n) {
  return th && (n instanceof ArrayBuffer || nh(n)) || rh && n instanceof Blob || oh && n instanceof File;
}
function to(n, t) {
  if (!n || typeof n != "object")
    return !1;
  if (Array.isArray(n)) {
    for (let e = 0, r = n.length; e < r; e++)
      if (to(n[e]))
        return !0;
    return !1;
  }
  if ($s(n))
    return !0;
  if (n.toJSON && typeof n.toJSON == "function" && arguments.length === 1)
    return to(n.toJSON(), !0);
  for (const e in n)
    if (Object.prototype.hasOwnProperty.call(n, e) && to(n[e]))
      return !0;
  return !1;
}
function ih(n) {
  const t = [], e = n.data, r = n;
  return r.data = Wi(e, t), r.attachments = t.length, { packet: r, buffers: t };
}
function Wi(n, t) {
  if (!n)
    return n;
  if ($s(n)) {
    const e = { _placeholder: !0, num: t.length };
    return t.push(n), e;
  } else if (Array.isArray(n)) {
    const e = new Array(n.length);
    for (let r = 0; r < n.length; r++)
      e[r] = Wi(n[r], t);
    return e;
  } else if (typeof n == "object" && !(n instanceof Date)) {
    const e = {};
    for (const r in n)
      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = Wi(n[r], t));
    return e;
  }
  return n;
}
function sh(n, t) {
  return n.data = Yi(n.data, t), delete n.attachments, n;
}
function Yi(n, t) {
  if (!n)
    return n;
  if (n && n._placeholder === !0) {
    if (typeof n.num == "number" && n.num >= 0 && n.num < t.length)
      return t[n.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(n))
    for (let e = 0; e < n.length; e++)
      n[e] = Yi(n[e], t);
  else if (typeof n == "object")
    for (const e in n)
      Object.prototype.hasOwnProperty.call(n, e) && (n[e] = Yi(n[e], t));
  return n;
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
var xe;
(function(n) {
  n[n.CONNECT = 0] = "CONNECT", n[n.DISCONNECT = 1] = "DISCONNECT", n[n.EVENT = 2] = "EVENT", n[n.ACK = 3] = "ACK", n[n.CONNECT_ERROR = 4] = "CONNECT_ERROR", n[n.BINARY_EVENT = 5] = "BINARY_EVENT", n[n.BINARY_ACK = 6] = "BINARY_ACK";
})(xe || (xe = {}));
class lh {
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
    return (t.type === xe.EVENT || t.type === xe.ACK) && to(t) ? this.encodeAsBinary({
      type: t.type === xe.EVENT ? xe.BINARY_EVENT : xe.BINARY_ACK,
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
    return (t.type === xe.BINARY_EVENT || t.type === xe.BINARY_ACK) && (e += t.attachments + "-"), t.nsp && t.nsp !== "/" && (e += t.nsp + ","), t.id != null && (e += t.id), t.data != null && (e += JSON.stringify(t.data, this.replacer)), e;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(t) {
    const e = ih(t), r = this.encodeAsString(e.packet), o = e.buffers;
    return o.unshift(r), o;
  }
}
function Ha(n) {
  return Object.prototype.toString.call(n) === "[object Object]";
}
class Gs extends He {
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
      const r = e.type === xe.BINARY_EVENT;
      r || e.type === xe.BINARY_ACK ? (e.type = r ? xe.EVENT : xe.ACK, this.reconstructor = new uh(e), e.attachments === 0 && super.emitReserved("decoded", e)) : super.emitReserved("decoded", e);
    } else if ($s(t) || t.base64)
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
    if (xe[r.type] === void 0)
      throw new Error("unknown packet type " + r.type);
    if (r.type === xe.BINARY_EVENT || r.type === xe.BINARY_ACK) {
      const i = e + 1;
      for (; t.charAt(++e) !== "-" && e != t.length; )
        ;
      const s = t.substring(i, e);
      if (s != Number(s) || t.charAt(e) !== "-")
        throw new Error("Illegal attachments");
      r.attachments = Number(s);
    }
    if (t.charAt(e + 1) === "/") {
      const i = e + 1;
      for (; ++e && !(t.charAt(e) === "," || e === t.length); )
        ;
      r.nsp = t.substring(i, e);
    } else
      r.nsp = "/";
    const o = t.charAt(e + 1);
    if (o !== "" && Number(o) == o) {
      const i = e + 1;
      for (; ++e; ) {
        const s = t.charAt(e);
        if (s == null || Number(s) != s) {
          --e;
          break;
        }
        if (e === t.length)
          break;
      }
      r.id = Number(t.substring(i, e + 1));
    }
    if (t.charAt(++e)) {
      const i = this.tryParse(t.substr(e));
      if (Gs.isPayloadValid(r.type, i))
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
  static isPayloadValid(t, e) {
    switch (t) {
      case xe.CONNECT:
        return Ha(e);
      case xe.DISCONNECT:
        return e === void 0;
      case xe.CONNECT_ERROR:
        return typeof e == "string" || Ha(e);
      case xe.EVENT:
      case xe.BINARY_EVENT:
        return Array.isArray(e) && (typeof e[0] == "number" || typeof e[0] == "string" && ah.indexOf(e[0]) === -1);
      case xe.ACK:
      case xe.BINARY_ACK:
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
    return xe;
  },
  protocol: ch
}, Symbol.toStringTag, { value: "Module" }));
function gt(n, t, e) {
  return n.on(t, e), function() {
    n.off(t, e);
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
class Ul extends He {
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
      gt(t, "open", this.onopen.bind(this)),
      gt(t, "packet", this.onpacket.bind(this)),
      gt(t, "error", this.onerror.bind(this)),
      gt(t, "close", this.onclose.bind(this))
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
    var r, o, i;
    if (dh.hasOwnProperty(t))
      throw new Error('"' + t.toString() + '" is a reserved event name');
    if (e.unshift(t), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(e), this;
    const s = {
      type: xe.EVENT,
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
  _registerAckCallback(t, e) {
    var r;
    const o = (r = this.flags.timeout) !== null && r !== void 0 ? r : this._opts.ackTimeout;
    if (o === void 0) {
      this.acks[t] = e;
      return;
    }
    const i = this.io.setTimeoutFn(() => {
      delete this.acks[t];
      for (let a = 0; a < this.sendBuffer.length; a++)
        this.sendBuffer[a].id === t && this.sendBuffer.splice(a, 1);
      e.call(this, new Error("operation has timed out"));
    }, o), s = (...a) => {
      this.io.clearTimeoutFn(i), e.apply(this, a);
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
  emitWithAck(t, ...e) {
    return new Promise((r, o) => {
      const i = (s, a) => s ? o(s) : r(a);
      i.withError = !0, e.push(i), this.emit(t, ...e);
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
    t.push((o, ...i) => r !== this._queue[0] ? void 0 : (o !== null ? r.tryCount > this._opts.retries && (this._queue.shift(), e && e(o)) : (this._queue.shift(), e && e(null, ...i)), r.pending = !1, this._drainQueue())), this._queue.push(r), this._drainQueue();
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
      type: xe.CONNECT,
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
        case xe.CONNECT:
          t.data && t.data.sid ? this.onconnect(t.data.sid, t.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case xe.EVENT:
        case xe.BINARY_EVENT:
          this.onevent(t);
          break;
        case xe.ACK:
        case xe.BINARY_ACK:
          this.onack(t);
          break;
        case xe.DISCONNECT:
          this.ondisconnect();
          break;
        case xe.CONNECT_ERROR:
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
        type: xe.ACK,
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
    return this.connected && this.packet({ type: xe.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
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
function Xn(n) {
  n = n || {}, this.ms = n.min || 100, this.max = n.max || 1e4, this.factor = n.factor || 2, this.jitter = n.jitter > 0 && n.jitter <= 1 ? n.jitter : 0, this.attempts = 0;
}
Xn.prototype.duration = function() {
  var n = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var t = Math.random(), e = Math.floor(t * this.jitter * n);
    n = (Math.floor(t * 10) & 1) == 0 ? n - e : n + e;
  }
  return Math.min(n, this.max) | 0;
};
Xn.prototype.reset = function() {
  this.attempts = 0;
};
Xn.prototype.setMin = function(n) {
  this.ms = n;
};
Xn.prototype.setMax = function(n) {
  this.max = n;
};
Xn.prototype.setJitter = function(n) {
  this.jitter = n;
};
class Xi extends He {
  constructor(t, e) {
    var r;
    super(), this.nsps = {}, this.subs = [], t && typeof t == "object" && (e = t, t = void 0), e = e || {}, e.path = e.path || "/socket.io", this.opts = e, Yo(this, e), this.reconnection(e.reconnection !== !1), this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0), this.reconnectionDelay(e.reconnectionDelay || 1e3), this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3), this.randomizationFactor((r = e.randomizationFactor) !== null && r !== void 0 ? r : 0.5), this.backoff = new Xn({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(e.timeout == null ? 2e4 : e.timeout), this._readyState = "closed", this.uri = t;
    const o = e.parser || fh;
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
    this.engine = new Qd(this.uri, this.opts);
    const e = this.engine, r = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const o = gt(e, "open", function() {
      r.onopen(), t && t();
    }), i = (a) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", a), t ? t(a) : this.maybeReconnectOnOpen();
    }, s = gt(e, "error", i);
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
      gt(t, "ping", this.onping.bind(this)),
      gt(t, "data", this.ondata.bind(this)),
      gt(t, "error", this.onerror.bind(this)),
      gt(t, "close", this.onclose.bind(this)),
      // @ts-ignore
      gt(this.decoder, "decoded", this.ondecoded.bind(this))
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
    Wo(() => {
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
    return r ? this._autoConnect && !r.active && r.connect() : (r = new Ul(this, t, e), this.nsps[t] = r), r;
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
const rr = {};
function no(n, t) {
  typeof n == "object" && (t = n, n = void 0), t = t || {};
  const e = eh(n, t.path || "/socket.io"), r = e.source, o = e.id, i = e.path, s = rr[o] && i in rr[o].nsps, a = t.forceNew || t["force new connection"] || t.multiplex === !1 || s;
  let c;
  return a ? c = new Xi(r, t) : (rr[o] || (rr[o] = new Xi(r, t)), c = rr[o]), e.query && !t.query && (t.query = e.queryKey), c.socket(e.path, t);
}
Object.assign(no, {
  Manager: Xi,
  Socket: Ul,
  io: no,
  connect: no
});
var vi = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Ua;
function hh() {
  return Ua || (Ua = 1, function(n) {
    (function() {
      var t = {}.hasOwnProperty;
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
          t.call(i, a) && i[a] && (s = o(s, a));
        return s;
      }
      function o(i, s) {
        return s ? i ? i + " " + s : i + s : i;
      }
      n.exports ? (e.default = e, n.exports = e) : window.classNames = e;
    })();
  }(vi)), vi.exports;
}
var xh = hh();
const Je = /* @__PURE__ */ o0(xh);
function Lt() {
  return Lt = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var r in e) ({}).hasOwnProperty.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }, Lt.apply(null, arguments);
}
function _e(n) {
  "@babel/helpers - typeof";
  return _e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _e(n);
}
var ph = Symbol.for("react.element"), mh = Symbol.for("react.transitional.element"), gh = Symbol.for("react.fragment");
function vh(n) {
  return (
    // Base object type
    n && _e(n) === "object" && // React Element type
    (n.$$typeof === ph || n.$$typeof === mh) && // React Fragment type
    n.type === gh
  );
}
var $i = {}, Ks = [], yh = function(t) {
  Ks.push(t);
};
function Zs(n, t) {
  if (process.env.NODE_ENV !== "production" && !n && console !== void 0) {
    var e = Ks.reduce(function(r, o) {
      return o(r ?? "", "warning");
    }, t);
    e && console.error("Warning: ".concat(e));
  }
}
function bh(n, t) {
  if (process.env.NODE_ENV !== "production" && !n && console !== void 0) {
    var e = Ks.reduce(function(r, o) {
      return o(r ?? "", "note");
    }, t);
    e && console.warn("Note: ".concat(e));
  }
}
function ql() {
  $i = {};
}
function Wl(n, t, e) {
  !t && !$i[e] && (n(!1, e), $i[e] = !0);
}
function nn(n, t) {
  Wl(Zs, n, t);
}
function Sh(n, t) {
  Wl(bh, n, t);
}
nn.preMessage = yh;
nn.resetWarned = ql;
nn.noteOnce = Sh;
function wh(n, t) {
  if (_e(n) != "object" || !n) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var r = e.call(n, t);
    if (_e(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function Yl(n) {
  var t = wh(n, "string");
  return _e(t) == "symbol" ? t : t + "";
}
function q(n, t, e) {
  return (t = Yl(t)) in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
function qa(n, t) {
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
    t % 2 ? qa(Object(e), !0).forEach(function(r) {
      q(n, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : qa(Object(e)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return n;
}
function Wa(n) {
  return n instanceof HTMLElement || n instanceof SVGElement;
}
function Eh(n) {
  return n && _e(n) === "object" && Wa(n.nativeElement) ? n.nativeElement : Wa(n) ? n : null;
}
function _h(n) {
  var t = Eh(n);
  if (t)
    return t;
  if (n instanceof Fe.Component) {
    var e;
    return (e = ma.findDOMNode) === null || e === void 0 ? void 0 : e.call(ma, n);
  }
  return null;
}
var Dr = { exports: {} }, Se = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ya;
function Ch() {
  if (Ya) return Se;
  Ya = 1;
  var n = Symbol.for("react.element"), t = Symbol.for("react.portal"), e = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), l = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g;
  g = Symbol.for("react.module.reference");
  function p(h) {
    if (typeof h == "object" && h !== null) {
      var E = h.$$typeof;
      switch (E) {
        case n:
          switch (h = h.type, h) {
            case e:
            case o:
            case r:
            case u:
            case f:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case a:
                case s:
                case c:
                case l:
                case d:
                case i:
                  return h;
                default:
                  return E;
              }
          }
        case t:
          return E;
      }
    }
  }
  return Se.ContextConsumer = s, Se.ContextProvider = i, Se.Element = n, Se.ForwardRef = c, Se.Fragment = e, Se.Lazy = l, Se.Memo = d, Se.Portal = t, Se.Profiler = o, Se.StrictMode = r, Se.Suspense = u, Se.SuspenseList = f, Se.isAsyncMode = function() {
    return !1;
  }, Se.isConcurrentMode = function() {
    return !1;
  }, Se.isContextConsumer = function(h) {
    return p(h) === s;
  }, Se.isContextProvider = function(h) {
    return p(h) === i;
  }, Se.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === n;
  }, Se.isForwardRef = function(h) {
    return p(h) === c;
  }, Se.isFragment = function(h) {
    return p(h) === e;
  }, Se.isLazy = function(h) {
    return p(h) === l;
  }, Se.isMemo = function(h) {
    return p(h) === d;
  }, Se.isPortal = function(h) {
    return p(h) === t;
  }, Se.isProfiler = function(h) {
    return p(h) === o;
  }, Se.isStrictMode = function(h) {
    return p(h) === r;
  }, Se.isSuspense = function(h) {
    return p(h) === u;
  }, Se.isSuspenseList = function(h) {
    return p(h) === f;
  }, Se.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === e || h === o || h === r || h === u || h === f || h === v || typeof h == "object" && h !== null && (h.$$typeof === l || h.$$typeof === d || h.$$typeof === i || h.$$typeof === s || h.$$typeof === c || h.$$typeof === g || h.getModuleId !== void 0);
  }, Se.typeOf = p, Se;
}
var we = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xa;
function Ah() {
  return Xa || (Xa = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Symbol.for("react.element"), t = Symbol.for("react.portal"), e = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), l = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g = !1, p = !1, h = !1, E = !1, w = !1, m;
    m = Symbol.for("react.module.reference");
    function A(M) {
      return !!(typeof M == "string" || typeof M == "function" || M === e || M === o || w || M === r || M === u || M === f || E || M === v || g || p || h || typeof M == "object" && M !== null && (M.$$typeof === l || M.$$typeof === d || M.$$typeof === i || M.$$typeof === s || M.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      M.$$typeof === m || M.getModuleId !== void 0));
    }
    function y(M) {
      if (typeof M == "object" && M !== null) {
        var qe = M.$$typeof;
        switch (qe) {
          case n:
            var Re = M.type;
            switch (Re) {
              case e:
              case o:
              case r:
              case u:
              case f:
                return Re;
              default:
                var at = Re && Re.$$typeof;
                switch (at) {
                  case a:
                  case s:
                  case c:
                  case l:
                  case d:
                  case i:
                    return at;
                  default:
                    return qe;
                }
            }
          case t:
            return qe;
        }
      }
    }
    var O = s, C = i, j = n, z = c, Y = e, ne = l, $ = d, F = t, W = o, H = r, G = u, Q = f, Z = !1, J = !1;
    function re(M) {
      return Z || (Z = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function oe(M) {
      return J || (J = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function K(M) {
      return y(M) === s;
    }
    function ee(M) {
      return y(M) === i;
    }
    function pe(M) {
      return typeof M == "object" && M !== null && M.$$typeof === n;
    }
    function ue(M) {
      return y(M) === c;
    }
    function ve(M) {
      return y(M) === e;
    }
    function P(M) {
      return y(M) === l;
    }
    function L(M) {
      return y(M) === d;
    }
    function R(M) {
      return y(M) === t;
    }
    function N(M) {
      return y(M) === o;
    }
    function b(M) {
      return y(M) === r;
    }
    function B(M) {
      return y(M) === u;
    }
    function fe(M) {
      return y(M) === f;
    }
    we.ContextConsumer = O, we.ContextProvider = C, we.Element = j, we.ForwardRef = z, we.Fragment = Y, we.Lazy = ne, we.Memo = $, we.Portal = F, we.Profiler = W, we.StrictMode = H, we.Suspense = G, we.SuspenseList = Q, we.isAsyncMode = re, we.isConcurrentMode = oe, we.isContextConsumer = K, we.isContextProvider = ee, we.isElement = pe, we.isForwardRef = ue, we.isFragment = ve, we.isLazy = P, we.isMemo = L, we.isPortal = R, we.isProfiler = N, we.isStrictMode = b, we.isSuspense = B, we.isSuspenseList = fe, we.isValidElementType = A, we.typeOf = y;
  }()), we;
}
var $a;
function Th() {
  return $a || ($a = 1, process.env.NODE_ENV === "production" ? Dr.exports = Ch() : Dr.exports = Ah()), Dr.exports;
}
var yi = Th();
function Xl(n, t, e) {
  var r = _.useRef({});
  return (!("value" in r.current) || e(r.current.condition, t)) && (r.current.value = n(), r.current.condition = t), r.current.value;
}
var Oh = Number(n0.split(".")[0]), $l = function(t, e) {
  typeof t == "function" ? t(e) : _e(t) === "object" && t && "current" in t && (t.current = e);
}, Rh = function() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
    e[r] = arguments[r];
  var o = e.filter(Boolean);
  return o.length <= 1 ? o[0] : function(i) {
    e.forEach(function(s) {
      $l(s, i);
    });
  };
}, kh = function(t) {
  var e, r;
  if (!t)
    return !1;
  if (Gl(t) && Oh >= 19)
    return !0;
  var o = yi.isMemo(t) ? t.type.type : t.type;
  return !(typeof o == "function" && !((e = o.prototype) !== null && e !== void 0 && e.render) && o.$$typeof !== yi.ForwardRef || typeof t == "function" && !((r = t.prototype) !== null && r !== void 0 && r.render) && t.$$typeof !== yi.ForwardRef);
};
function Gl(n) {
  return /* @__PURE__ */ t0(n) && !vh(n);
}
var Ph = function(t) {
  if (t && Gl(t)) {
    var e = t;
    return e.props.propertyIsEnumerable("ref") ? e.props.ref : e.ref;
  }
  return null;
};
function _t(n, t) {
  if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Ga(n, t) {
  for (var e = 0; e < t.length; e++) {
    var r = t[e];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, Yl(r.key), r);
  }
}
function Ct(n, t, e) {
  return t && Ga(n.prototype, t), e && Ga(n, e), Object.defineProperty(n, "prototype", {
    writable: !1
  }), n;
}
function Gi(n, t) {
  return Gi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, r) {
    return e.__proto__ = r, e;
  }, Gi(n, t);
}
function _r(n, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  n.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: n,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(n, "prototype", {
    writable: !1
  }), t && Gi(n, t);
}
function Fn(n) {
  return Fn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Fn(n);
}
function Js() {
  try {
    var n = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Js = function() {
    return !!n;
  })();
}
function gn(n) {
  if (n === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n;
}
function Kl(n, t) {
  if (t && (_e(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return gn(n);
}
function Xo(n) {
  var t = Js();
  return function() {
    var e, r = Fn(n);
    if (t) {
      var o = Fn(this).constructor;
      e = Reflect.construct(r, arguments, o);
    } else e = r.apply(this, arguments);
    return Kl(this, e);
  };
}
function Ki(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, r = Array(t); e < t; e++) r[e] = n[e];
  return r;
}
function Ih(n) {
  if (Array.isArray(n)) return Ki(n);
}
function Zl(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function Qs(n, t) {
  if (n) {
    if (typeof n == "string") return Ki(n, t);
    var e = {}.toString.call(n).slice(8, -1);
    return e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set" ? Array.from(n) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? Ki(n, t) : void 0;
  }
}
function Nh() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ut(n) {
  return Ih(n) || Zl(n) || Qs(n) || Nh();
}
var Jl = function(t) {
  return +setTimeout(t, 16);
}, Ql = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (Jl = function(t) {
  return window.requestAnimationFrame(t);
}, Ql = function(t) {
  return window.cancelAnimationFrame(t);
});
var Ka = 0, $o = /* @__PURE__ */ new Map();
function eu(n) {
  $o.delete(n);
}
var bo = function(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  Ka += 1;
  var r = Ka;
  function o(i) {
    if (i === 0)
      eu(r), t();
    else {
      var s = Jl(function() {
        o(i - 1);
      });
      $o.set(r, s);
    }
  }
  return o(e), r;
};
bo.cancel = function(n) {
  var t = $o.get(n);
  return eu(n), Ql(t);
};
process.env.NODE_ENV !== "production" && (bo.ids = function() {
  return $o;
});
function tu(n) {
  if (Array.isArray(n)) return n;
}
function jh(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var r, o, i, s, a = [], c = !0, u = !1;
    try {
      if (i = (e = e.call(n)).next, t === 0) {
        if (Object(e) !== e) return;
        c = !1;
      } else for (; !(c = (r = i.call(e)).done) && (a.push(r.value), a.length !== t); c = !0) ;
    } catch (f) {
      u = !0, o = f;
    } finally {
      try {
        if (!c && e.return != null && (s = e.return(), Object(s) !== s)) return;
      } finally {
        if (u) throw o;
      }
    }
    return a;
  }
}
function nu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ce(n, t) {
  return tu(n) || jh(n, t) || Qs(n, t) || nu();
}
function pr(n) {
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
function qt() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Mh(n, t) {
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
var Za = "data-rc-order", Ja = "data-rc-priority", Lh = "rc-util-key", Zi = /* @__PURE__ */ new Map();
function ru() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = n.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : Lh;
}
function Go(n) {
  if (n.attachTo)
    return n.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function Dh(n) {
  return n === "queue" ? "prependQueue" : n ? "prepend" : "append";
}
function ea(n) {
  return Array.from((Zi.get(n) || n).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function ou(n) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!qt())
    return null;
  var e = t.csp, r = t.prepend, o = t.priority, i = o === void 0 ? 0 : o, s = Dh(r), a = s === "prependQueue", c = document.createElement("style");
  c.setAttribute(Za, s), a && i && c.setAttribute(Ja, "".concat(i)), e != null && e.nonce && (c.nonce = e == null ? void 0 : e.nonce), c.innerHTML = n;
  var u = Go(t), f = u.firstChild;
  if (r) {
    if (a) {
      var d = (t.styles || ea(u)).filter(function(l) {
        if (!["prepend", "prependQueue"].includes(l.getAttribute(Za)))
          return !1;
        var v = Number(l.getAttribute(Ja) || 0);
        return i >= v;
      });
      if (d.length)
        return u.insertBefore(c, d[d.length - 1].nextSibling), c;
    }
    u.insertBefore(c, f);
  } else
    u.appendChild(c);
  return c;
}
function iu(n) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = Go(t);
  return (t.styles || ea(e)).find(function(r) {
    return r.getAttribute(ru(t)) === n;
  });
}
function su(n) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = iu(n, t);
  if (e) {
    var r = Go(t);
    r.removeChild(e);
  }
}
function Bh(n, t) {
  var e = Zi.get(n);
  if (!e || !Mh(document, e)) {
    var r = ou("", t), o = r.parentNode;
    Zi.set(n, o), n.removeChild(r);
  }
}
function vn(n, t) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Go(e), o = ea(r), i = V(V({}, e), {}, {
    styles: o
  });
  Bh(r, i);
  var s = iu(t, i);
  if (s) {
    var a, c;
    if ((a = i.csp) !== null && a !== void 0 && a.nonce && s.nonce !== ((c = i.csp) === null || c === void 0 ? void 0 : c.nonce)) {
      var u;
      s.nonce = (u = i.csp) === null || u === void 0 ? void 0 : u.nonce;
    }
    return s.innerHTML !== n && (s.innerHTML = n), s;
  }
  var f = ou(n, i);
  return f.setAttribute(ru(i), t), f;
}
function Fh(n, t) {
  if (n == null) return {};
  var e = {};
  for (var r in n) if ({}.hasOwnProperty.call(n, r)) {
    if (t.indexOf(r) !== -1) continue;
    e[r] = n[r];
  }
  return e;
}
function mr(n, t) {
  if (n == null) return {};
  var e, r, o = Fh(n, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(n);
    for (r = 0; r < i.length; r++) e = i[r], t.indexOf(e) === -1 && {}.propertyIsEnumerable.call(n, e) && (o[e] = n[e]);
  }
  return o;
}
function zh(n, t) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = /* @__PURE__ */ new Set();
  function o(i, s) {
    var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, c = r.has(i);
    if (nn(!c, "Warning: There may be circular references"), c)
      return !1;
    if (i === s)
      return !0;
    if (e && a > 1)
      return !1;
    r.add(i);
    var u = a + 1;
    if (Array.isArray(i)) {
      if (!Array.isArray(s) || i.length !== s.length)
        return !1;
      for (var f = 0; f < i.length; f++)
        if (!o(i[f], s[f], u))
          return !1;
      return !0;
    }
    if (i && s && _e(i) === "object" && _e(s) === "object") {
      var d = Object.keys(i);
      return d.length !== Object.keys(s).length ? !1 : d.every(function(l) {
        return o(i[l], s[l], u);
      });
    }
    return !1;
  }
  return o(n, t);
}
var Vh = "%";
function Ji(n) {
  return n.join(Vh);
}
var Hh = /* @__PURE__ */ function() {
  function n(t) {
    _t(this, n), q(this, "instanceId", void 0), q(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = t;
  }
  return Ct(n, [{
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
  }]), n;
}(), zn = "data-token-hash", St = "data-css-hash", Uh = "data-cache-path", Zt = "__cssinjs_instance__";
function qh() {
  var n = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(St, "]")) || [], e = document.head.firstChild;
    Array.from(t).forEach(function(o) {
      o[Zt] = o[Zt] || n, o[Zt] === n && document.head.insertBefore(o, e);
    });
    var r = {};
    Array.from(document.querySelectorAll("style[".concat(St, "]"))).forEach(function(o) {
      var i = o.getAttribute(St);
      if (r[i]) {
        if (o[Zt] === n) {
          var s;
          (s = o.parentNode) === null || s === void 0 || s.removeChild(o);
        }
      } else
        r[i] = !0;
    });
  }
  return new Hh(n);
}
var Cr = /* @__PURE__ */ _.createContext({
  hashPriority: "low",
  cache: qh(),
  defaultCache: !0
});
function Wh(n, t) {
  if (n.length !== t.length)
    return !1;
  for (var e = 0; e < n.length; e++)
    if (n[e] !== t[e])
      return !1;
  return !0;
}
var ta = /* @__PURE__ */ function() {
  function n() {
    _t(this, n), q(this, "cache", void 0), q(this, "keys", void 0), q(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return Ct(n, [{
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
        if (this.size() + 1 > n.MAX_CACHE_SIZE + n.MAX_CACHE_OFFSET) {
          var i = this.keys.reduce(function(u, f) {
            var d = ce(u, 2), l = d[1];
            return o.internalGet(f)[1] < l ? [f, o.internalGet(f)[1]] : u;
          }, [this.keys[0], this.cacheCallTimes]), s = ce(i, 1), a = s[0];
          this.delete(a);
        }
        this.keys.push(e);
      }
      var c = this.cache;
      e.forEach(function(u, f) {
        if (f === e.length - 1)
          c.set(u, {
            value: [r, o.cacheCallTimes++]
          });
        else {
          var d = c.get(u);
          d ? d.map || (d.map = /* @__PURE__ */ new Map()) : c.set(u, {
            map: /* @__PURE__ */ new Map()
          }), c = c.get(u).map;
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
  }]), n;
}();
q(ta, "MAX_CACHE_SIZE", 20);
q(ta, "MAX_CACHE_OFFSET", 5);
var Qa = 0, au = /* @__PURE__ */ function() {
  function n(t) {
    _t(this, n), q(this, "derivatives", void 0), q(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = Qa, t.length === 0 && Zs(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), Qa += 1;
  }
  return Ct(n, [{
    key: "getDerivativeToken",
    value: function(e) {
      return this.derivatives.reduce(function(r, o) {
        return o(e, r);
      }, void 0);
    }
  }]), n;
}(), bi = new ta();
function Qi(n) {
  var t = Array.isArray(n) ? n : [n];
  return bi.has(t) || bi.set(t, new au(t)), bi.get(t);
}
var Yh = /* @__PURE__ */ new WeakMap(), Si = {};
function Xh(n, t) {
  for (var e = Yh, r = 0; r < t.length; r += 1) {
    var o = t[r];
    e.has(o) || e.set(o, /* @__PURE__ */ new WeakMap()), e = e.get(o);
  }
  return e.has(Si) || e.set(Si, n()), e.get(Si);
}
var ec = /* @__PURE__ */ new WeakMap();
function dr(n) {
  var t = ec.get(n) || "";
  return t || (Object.keys(n).forEach(function(e) {
    var r = n[e];
    t += e, r instanceof au ? t += r.id : r && _e(r) === "object" ? t += dr(r) : t += r;
  }), t = pr(t), ec.set(n, t)), t;
}
function tc(n, t) {
  return pr("".concat(t, "_").concat(dr(n)));
}
var es = qt();
function So(n) {
  return typeof n == "number" ? "".concat(n, "px") : n;
}
function wo(n, t, e) {
  var r, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (i)
    return n;
  var s = V(V({}, o), {}, (r = {}, q(r, zn, t), q(r, St, e), r)), a = Object.keys(s).map(function(c) {
    var u = s[c];
    return u ? "".concat(c, '="').concat(u, '"') : null;
  }).filter(function(c) {
    return c;
  }).join(" ");
  return "<style ".concat(a, ">").concat(n, "</style>");
}
var ro = function(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(e ? "".concat(e, "-") : "").concat(t).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, $h = function(t, e, r) {
  return Object.keys(t).length ? ".".concat(e).concat(r != null && r.scope ? ".".concat(r.scope) : "", "{").concat(Object.entries(t).map(function(o) {
    var i = ce(o, 2), s = i[0], a = i[1];
    return "".concat(s, ":").concat(a, ";");
  }).join(""), "}") : "";
}, cu = function(t, e, r) {
  var o = {}, i = {};
  return Object.entries(t).forEach(function(s) {
    var a, c, u = ce(s, 2), f = u[0], d = u[1];
    if (r != null && (a = r.preserve) !== null && a !== void 0 && a[f])
      i[f] = d;
    else if ((typeof d == "string" || typeof d == "number") && !(r != null && (c = r.ignore) !== null && c !== void 0 && c[f])) {
      var l, v = ro(f, r == null ? void 0 : r.prefix);
      o[v] = typeof d == "number" && !(r != null && (l = r.unitless) !== null && l !== void 0 && l[f]) ? "".concat(d, "px") : String(d), i[f] = "var(".concat(v, ")");
    }
  }), [i, $h(o, e, {
    scope: r == null ? void 0 : r.scope
  })];
}, nc = process.env.NODE_ENV !== "test" && qt() ? _.useLayoutEffect : _.useEffect, lu = function(t, e) {
  var r = _.useRef(!0);
  nc(function() {
    return t(r.current);
  }, e), nc(function() {
    return r.current = !1, function() {
      r.current = !0;
    };
  }, []);
}, Gh = V({}, _), rc = Gh.useInsertionEffect, Kh = function(t, e, r) {
  _.useMemo(t, r), lu(function() {
    return e(!0);
  }, r);
}, Zh = rc ? function(n, t, e) {
  return rc(function() {
    return n(), t();
  }, e);
} : Kh, Jh = V({}, _), Qh = Jh.useInsertionEffect, ex = function(t) {
  var e = [], r = !1;
  function o(i) {
    if (r) {
      process.env.NODE_ENV !== "production" && Zs(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    e.push(i);
  }
  return _.useEffect(function() {
    return r = !1, function() {
      r = !0, e.length && e.forEach(function(i) {
        return i();
      });
    };
  }, t), o;
}, tx = function() {
  return function(t) {
    t();
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
  var Br = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : null;
  if (Br && typeof Br.webpackHotUpdate == "function") {
    var sx = Br.webpackHotUpdate;
    Br.webpackHotUpdate = function() {
      return ts = !0, setTimeout(function() {
        ts = !1;
      }, 0), sx.apply(void 0, arguments);
    };
  }
}
function na(n, t, e, r, o) {
  var i = _.useContext(Cr), s = i.cache, a = [n].concat(Ut(t)), c = Ji(a), u = nx([c]), f = ix(), d = function(p) {
    s.opUpdate(c, function(h) {
      var E = h || [void 0, void 0], w = ce(E, 2), m = w[0], A = m === void 0 ? 0 : m, y = w[1], O = y;
      process.env.NODE_ENV !== "production" && y && f && (r == null || r(O, f), O = null);
      var C = O || e(), j = [A, C];
      return p ? p(j) : j;
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
  var l = s.opGet(c);
  process.env.NODE_ENV !== "production" && !l && (d(), l = s.opGet(c));
  var v = l[1];
  return Zh(function() {
    o == null || o(v);
  }, function(g) {
    return d(function(p) {
      var h = ce(p, 2), E = h[0], w = h[1];
      return g && E === 0 && (o == null || o(v)), [E + 1, w];
    }), function() {
      s.opUpdate(c, function(p) {
        var h = p || [], E = ce(h, 2), w = E[0], m = w === void 0 ? 0 : w, A = E[1], y = m - 1;
        return y === 0 ? (u(function() {
          (g || !s.opGet(c)) && (r == null || r(A, !1));
        }), null) : [m - 1, A];
      });
    };
  }, [c]), v;
}
var ax = {}, cx = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", fn = /* @__PURE__ */ new Map();
function lx(n) {
  fn.set(n, (fn.get(n) || 0) + 1);
}
function ux(n, t) {
  if (typeof document < "u") {
    var e = document.querySelectorAll("style[".concat(zn, '="').concat(n, '"]'));
    e.forEach(function(r) {
      if (r[Zt] === t) {
        var o;
        (o = r.parentNode) === null || o === void 0 || o.removeChild(r);
      }
    });
  }
}
var fx = 0;
function dx(n, t) {
  fn.set(n, (fn.get(n) || 0) - 1);
  var e = Array.from(fn.keys()), r = e.filter(function(o) {
    var i = fn.get(o) || 0;
    return i <= 0;
  });
  e.length - r.length > fx && r.forEach(function(o) {
    ux(o, t), fn.delete(o);
  });
}
var hx = function(t, e, r, o) {
  var i = r.getDerivativeToken(t), s = V(V({}, i), e);
  return o && (s = o(s)), s;
}, uu = "token";
function xx(n, t) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = en(Cr), o = r.cache.instanceId, i = r.container, s = e.salt, a = s === void 0 ? "" : s, c = e.override, u = c === void 0 ? ax : c, f = e.formatToken, d = e.getComputedToken, l = e.cssVar, v = Xh(function() {
    return Object.assign.apply(Object, [{}].concat(Ut(t)));
  }, t), g = dr(v), p = dr(u), h = l ? dr(l) : "", E = na(uu, [a, n.id, g, p, h], function() {
    var w, m = d ? d(v, u, n) : hx(v, u, n, f), A = V({}, m), y = "";
    if (l) {
      var O = cu(m, l.key, {
        prefix: l.prefix,
        ignore: l.ignore,
        unitless: l.unitless,
        preserve: l.preserve
      }), C = ce(O, 2);
      m = C[0], y = C[1];
    }
    var j = tc(m, a);
    m._tokenKey = j, A._tokenKey = tc(A, a);
    var z = (w = l == null ? void 0 : l.key) !== null && w !== void 0 ? w : j;
    m._themeKey = z, lx(z);
    var Y = "".concat(cx, "-").concat(pr(j));
    return m._hashId = Y, [m, Y, A, y, (l == null ? void 0 : l.key) || ""];
  }, function(w) {
    dx(w[0]._themeKey, o);
  }, function(w) {
    var m = ce(w, 4), A = m[0], y = m[3];
    if (l && y) {
      var O = vn(y, pr("css-variables-".concat(A._themeKey)), {
        mark: St,
        prepend: "queue",
        attachTo: i,
        priority: -999
      });
      O[Zt] = o, O.setAttribute(zn, A._themeKey);
    }
  });
  return E;
}
var px = function(t, e, r) {
  var o = ce(t, 5), i = o[2], s = o[3], a = o[4], c = r || {}, u = c.plain;
  if (!s)
    return null;
  var f = i._tokenKey, d = -999, l = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(d)
  }, v = wo(s, a, f, l, u);
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
function pu(n) {
  return n.trim();
}
function oo(n, t, e) {
  return n.replace(t, e);
}
function Sx(n, t, e) {
  return n.indexOf(t, e);
}
function Pn(n, t) {
  return n.charCodeAt(t) | 0;
}
function Vn(n, t, e) {
  return n.slice(t, e);
}
function It(n) {
  return n.length;
}
function wx(n) {
  return n.length;
}
function Fr(n, t) {
  return t.push(n), n;
}
var Ko = 1, Hn = 1, mu = 0, pt = 0, Ve = 0, $n = "";
function oa(n, t, e, r, o, i, s, a) {
  return { value: n, root: t, parent: e, type: r, props: o, children: i, line: Ko, column: Hn, length: s, return: "", siblings: a };
}
function Ex() {
  return Ve;
}
function _x() {
  return Ve = pt > 0 ? Pn($n, --pt) : 0, Hn--, Ve === 10 && (Hn = 1, Ko--), Ve;
}
function wt() {
  return Ve = pt < mu ? Pn($n, pt++) : 0, Hn++, Ve === 10 && (Hn = 1, Ko++), Ve;
}
function Jt() {
  return Pn($n, pt);
}
function io() {
  return pt;
}
function Zo(n, t) {
  return Vn($n, n, t);
}
function gr(n) {
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
function Cx(n) {
  return Ko = Hn = 1, mu = It($n = n), pt = 0, [];
}
function Ax(n) {
  return $n = "", n;
}
function wi(n) {
  return pu(Zo(pt - 1, ns(n === 91 ? n + 2 : n === 40 ? n + 1 : n)));
}
function Tx(n) {
  for (; (Ve = Jt()) && Ve < 33; )
    wt();
  return gr(n) > 2 || gr(Ve) > 3 ? "" : " ";
}
function Ox(n, t) {
  for (; --t && wt() && !(Ve < 48 || Ve > 102 || Ve > 57 && Ve < 65 || Ve > 70 && Ve < 97); )
    ;
  return Zo(n, io() + (t < 6 && Jt() == 32 && wt() == 32));
}
function ns(n) {
  for (; wt(); )
    switch (Ve) {
      // ] ) " '
      case n:
        return pt;
      // " '
      case 34:
      case 39:
        n !== 34 && n !== 39 && ns(Ve);
        break;
      // (
      case 40:
        n === 41 && ns(n);
        break;
      // \
      case 92:
        wt();
        break;
    }
  return pt;
}
function Rx(n, t) {
  for (; wt() && n + Ve !== 57; )
    if (n + Ve === 84 && Jt() === 47)
      break;
  return "/*" + Zo(t, pt - 1) + "*" + ra(n === 47 ? n : wt());
}
function kx(n) {
  for (; !gr(Jt()); )
    wt();
  return Zo(n, pt);
}
function Px(n) {
  return Ax(so("", null, null, null, [""], n = Cx(n), 0, [0], n));
}
function so(n, t, e, r, o, i, s, a, c) {
  for (var u = 0, f = 0, d = s, l = 0, v = 0, g = 0, p = 1, h = 1, E = 1, w = 0, m = "", A = o, y = i, O = r, C = m; h; )
    switch (g = w, w = wt()) {
      // (
      case 40:
        if (g != 108 && Pn(C, d - 1) == 58) {
          Sx(C += oo(wi(w), "&", "&\f"), "&\f", xu(u ? a[u - 1] : 0)) != -1 && (E = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        C += wi(w);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        C += Tx(g);
        break;
      // \
      case 92:
        C += Ox(io() - 1, 7);
        continue;
      // /
      case 47:
        switch (Jt()) {
          case 42:
          case 47:
            Fr(Ix(Rx(wt(), io()), t, e, c), c), (gr(g || 1) == 5 || gr(Jt() || 1) == 5) && It(C) && Vn(C, -1, void 0) !== " " && (C += " ");
            break;
          default:
            C += "/";
        }
        break;
      // {
      case 123 * p:
        a[u++] = It(C) * E;
      // } ; \0
      case 125 * p:
      case 59:
      case 0:
        switch (w) {
          // \0 }
          case 0:
          case 125:
            h = 0;
          // ;
          case 59 + f:
            E == -1 && (C = oo(C, /\f/g, "")), v > 0 && (It(C) - d || p === 0 && g === 47) && Fr(v > 32 ? ic(C + ";", r, e, d - 1, c) : ic(oo(C, " ", "") + ";", r, e, d - 2, c), c);
            break;
          // @ ;
          case 59:
            C += ";";
          // { rule/at-rule
          default:
            if (Fr(O = oc(C, t, e, u, f, o, a, m, A = [], y = [], d, i), i), w === 123)
              if (f === 0)
                so(C, t, O, O, A, i, d, a, y);
              else {
                switch (l) {
                  // c(ontainer)
                  case 99:
                    if (Pn(C, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (Pn(C, 2) === 97) break;
                  default:
                    f = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                f ? so(n, O, O, r && Fr(oc(n, O, O, 0, 0, o, a, m, o, A = [], d, y), y), o, y, d, a, r ? A : y) : so(C, O, O, O, [""], y, 0, a, y);
              }
        }
        u = f = v = 0, p = E = 1, m = C = "", d = s;
        break;
      // :
      case 58:
        d = 1 + It(C), v = g;
      default:
        if (p < 1) {
          if (w == 123)
            --p;
          else if (w == 125 && p++ == 0 && _x() == 125)
            continue;
        }
        switch (C += ra(w), w * p) {
          // &
          case 38:
            E = f > 0 ? 1 : (C += "\f", -1);
            break;
          // ,
          case 44:
            a[u++] = (It(C) - 1) * E, E = 1;
            break;
          // @
          case 64:
            Jt() === 45 && (C += wi(wt())), l = Jt(), f = d = It(m = C += kx(io())), w++;
            break;
          // -
          case 45:
            g === 45 && It(C) == 2 && (p = 0);
        }
    }
  return i;
}
function oc(n, t, e, r, o, i, s, a, c, u, f, d) {
  for (var l = o - 1, v = o === 0 ? i : [""], g = wx(v), p = 0, h = 0, E = 0; p < r; ++p)
    for (var w = 0, m = Vn(n, l + 1, l = xu(h = s[p])), A = n; w < g; ++w)
      (A = pu(h > 0 ? v[w] + " " + m : oo(m, /&\f/g, v[w]))) && (c[E++] = A);
  return oa(n, t, e, o === 0 ? du : a, c, u, f, d);
}
function Ix(n, t, e, r) {
  return oa(n, t, e, fu, ra(Ex()), Vn(n, 2, -2), 0, r);
}
function ic(n, t, e, r, o) {
  return oa(n, t, e, hu, Vn(n, 0, r), Vn(n, r + 1, -1), r, o);
}
function rs(n, t) {
  for (var e = "", r = 0; r < n.length; r++)
    e += t(n[r], r, n, t) || "";
  return e;
}
function Nx(n, t, e, r) {
  switch (n.type) {
    case bx:
      if (n.children.length) break;
    case gx:
    case vx:
    case hu:
      return n.return = n.return || n.value;
    case fu:
      return "";
    case yx:
      return n.return = n.value + "{" + rs(n.children, r) + "}";
    case du:
      if (!It(n.value = n.props.join(","))) return "";
  }
  return It(e = rs(n.children, r)) ? n.return = n.value + "{" + e + "}" : "";
}
function gu(n, t) {
  var e = t.path, r = t.parentSelectors;
  nn(!1, "[Ant Design CSS-in-JS] ".concat(e ? "Error in ".concat(e, ": ") : "").concat(n).concat(r.length ? " Selector: ".concat(r.join(" | ")) : ""));
}
var jx = function(t, e, r) {
  if (t === "content") {
    var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, i = ["normal", "none", "initial", "inherit", "unset"];
    (typeof e != "string" || i.indexOf(e) === -1 && !o.test(e) && (e.charAt(0) !== e.charAt(e.length - 1) || e.charAt(0) !== '"' && e.charAt(0) !== "'")) && gu("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(e, "\"'`."), r);
  }
}, Mx = function(t, e, r) {
  t === "animation" && r.hashId && e !== "none" && gu("You seem to be using hashed animation '".concat(e, "', in which case 'animationName' with Keyframe as value is recommended."), r);
}, sc = "data-ant-cssinjs-cache-path", vu = "_FILE_STYLE__", yn, yu = !0;
function Lx() {
  if (!yn && (yn = {}, qt())) {
    var n = document.createElement("div");
    n.className = sc, n.style.position = "fixed", n.style.visibility = "hidden", n.style.top = "-9999px", document.body.appendChild(n);
    var t = getComputedStyle(n).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(o) {
      var i = o.split(":"), s = ce(i, 2), a = s[0], c = s[1];
      yn[a] = c;
    });
    var e = document.querySelector("style[".concat(sc, "]"));
    if (e) {
      var r;
      yu = !1, (r = e.parentNode) === null || r === void 0 || r.removeChild(e);
    }
    document.body.removeChild(n);
  }
}
function Dx(n) {
  return Lx(), !!yn[n];
}
function Bx(n) {
  var t = yn[n], e = null;
  if (t && qt())
    if (yu)
      e = vu;
    else {
      var r = document.querySelector("style[".concat(St, '="').concat(yn[n], '"]'));
      r ? e = r.innerHTML : delete yn[n];
    }
  return [e, t];
}
var bu = "_skip_check_", Su = "_multi_value_";
function ao(n) {
  var t = rs(Px(n), Nx);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function Fx(n) {
  return _e(n) === "object" && n && (bu in n || Su in n);
}
function ac(n, t, e) {
  if (!t)
    return n;
  var r = ".".concat(t), o = e === "low" ? ":where(".concat(r, ")") : r, i = n.split(",").map(function(s) {
    var a, c = s.trim().split(/\s+/), u = c[0] || "", f = ((a = u.match(/^\w+/)) === null || a === void 0 ? void 0 : a[0]) || "";
    return u = "".concat(f).concat(o).concat(u.slice(f.length)), [u].concat(Ut(c.slice(1))).join(" ");
  });
  return i.join(",");
}
var zx = function n(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = r.root, i = r.injectHash, s = r.parentSelectors, a = e.hashId, c = e.layer, u = e.path, f = e.hashPriority, d = e.transformers, l = d === void 0 ? [] : d, v = e.linters, g = v === void 0 ? [] : v, p = "", h = {};
  function E(A) {
    var y = A.getName(a);
    if (!h[y]) {
      var O = n(A.style, e, {
        root: !1,
        parentSelectors: s
      }), C = ce(O, 1), j = C[0];
      h[y] = "@keyframes ".concat(A.getName(a)).concat(j);
    }
  }
  function w(A) {
    var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return A.forEach(function(O) {
      Array.isArray(O) ? w(O, y) : O && y.push(O);
    }), y;
  }
  var m = w(Array.isArray(t) ? t : [t]);
  return m.forEach(function(A) {
    var y = typeof A == "string" && !o ? {} : A;
    if (typeof y == "string")
      p += "".concat(y, `
`);
    else if (y._keyframe)
      E(y);
    else {
      var O = l.reduce(function(C, j) {
        var z;
        return (j == null || (z = j.visit) === null || z === void 0 ? void 0 : z.call(j, C)) || C;
      }, y);
      Object.keys(O).forEach(function(C) {
        var j = O[C];
        if (_e(j) === "object" && j && (C !== "animationName" || !j._keyframe) && !Fx(j)) {
          var z = !1, Y = C.trim(), ne = !1;
          (o || i) && a ? Y.startsWith("@") ? z = !0 : Y === "&" ? Y = ac("", a, f) : Y = ac(C, a, f) : o && !a && (Y === "&" || Y === "") && (Y = "", ne = !0);
          var $ = n(j, e, {
            root: ne,
            injectHash: z,
            parentSelectors: [].concat(Ut(s), [Y])
          }), F = ce($, 2), W = F[0], H = F[1];
          h = V(V({}, h), H), p += "".concat(Y).concat(W);
        } else {
          let Z = function(J, re) {
            process.env.NODE_ENV !== "production" && (_e(j) !== "object" || !(j != null && j[bu])) && [jx, Mx].concat(Ut(g)).forEach(function(ee) {
              return ee(J, re, {
                path: u,
                hashId: a,
                parentSelectors: s
              });
            });
            var oe = J.replace(/[A-Z]/g, function(ee) {
              return "-".concat(ee.toLowerCase());
            }), K = re;
            !mx[J] && typeof K == "number" && K !== 0 && (K = "".concat(K, "px")), J === "animationName" && re !== null && re !== void 0 && re._keyframe && (E(re), K = re.getName(a)), p += "".concat(oe, ":").concat(K, ";");
          };
          var G, Q = (G = j == null ? void 0 : j.value) !== null && G !== void 0 ? G : j;
          _e(j) === "object" && j !== null && j !== void 0 && j[Su] && Array.isArray(Q) ? Q.forEach(function(J) {
            Z(C, J);
          }) : Z(C, Q);
        }
      });
    }
  }), o ? c && (p && (p = "@layer ".concat(c.name, " {").concat(p, "}")), c.dependencies && (h["@layer ".concat(c.name)] = c.dependencies.map(function(A) {
    return "@layer ".concat(A, ", ").concat(c.name, ";");
  }).join(`
`))) : p = "{".concat(p, "}"), [p, h];
};
function wu(n, t) {
  return pr("".concat(n.join("%")).concat(t));
}
function Vx() {
  return null;
}
var Eu = "style";
function os(n, t) {
  var e = n.token, r = n.path, o = n.hashId, i = n.layer, s = n.nonce, a = n.clientOnly, c = n.order, u = c === void 0 ? 0 : c, f = _.useContext(Cr), d = f.autoClear, l = f.mock, v = f.defaultCache, g = f.hashPriority, p = f.container, h = f.ssrInline, E = f.transformers, w = f.linters, m = f.cache, A = f.layer, y = e._tokenKey, O = [y];
  A && O.push("layer"), O.push.apply(O, Ut(r));
  var C = es;
  process.env.NODE_ENV !== "production" && l !== void 0 && (C = l === "client");
  var j = na(
    Eu,
    O,
    // Create cache if needed
    function() {
      var F = O.join("|");
      if (Dx(F)) {
        var W = Bx(F), H = ce(W, 2), G = H[0], Q = H[1];
        if (G)
          return [G, y, Q, {}, a, u];
      }
      var Z = t(), J = zx(Z, {
        hashId: o,
        hashPriority: g,
        layer: A ? i : void 0,
        path: r.join("-"),
        transformers: E,
        linters: w
      }), re = ce(J, 2), oe = re[0], K = re[1], ee = ao(oe), pe = wu(O, ee);
      return [ee, y, pe, K, a, u];
    },
    // Remove cache if no need
    function(F, W) {
      var H = ce(F, 3), G = H[2];
      (W || d) && es && su(G, {
        mark: St
      });
    },
    // Effect: Inject style here
    function(F) {
      var W = ce(F, 4), H = W[0];
      W[1];
      var G = W[2], Q = W[3];
      if (C && H !== vu) {
        var Z = {
          mark: St,
          prepend: A ? !1 : "queue",
          attachTo: p,
          priority: u
        }, J = typeof s == "function" ? s() : s;
        J && (Z.csp = {
          nonce: J
        });
        var re = [], oe = [];
        Object.keys(Q).forEach(function(ee) {
          ee.startsWith("@layer") ? re.push(ee) : oe.push(ee);
        }), re.forEach(function(ee) {
          vn(ao(Q[ee]), "_layer-".concat(ee), V(V({}, Z), {}, {
            prepend: !0
          }));
        });
        var K = vn(H, G, Z);
        K[Zt] = m.instanceId, K.setAttribute(zn, y), process.env.NODE_ENV !== "production" && K.setAttribute(Uh, O.join("|")), oe.forEach(function(ee) {
          vn(ao(Q[ee]), "_effect-".concat(ee), Z);
        });
      }
    }
  ), z = ce(j, 3), Y = z[0], ne = z[1], $ = z[2];
  return function(F) {
    var W;
    if (!h || C || !v)
      W = /* @__PURE__ */ _.createElement(Vx, null);
    else {
      var H;
      W = /* @__PURE__ */ _.createElement("style", Lt({}, (H = {}, q(H, zn, ne), q(H, St, $), H), {
        dangerouslySetInnerHTML: {
          __html: Y
        }
      }));
    }
    return /* @__PURE__ */ _.createElement(_.Fragment, null, W, F);
  };
}
var Hx = function(t, e, r) {
  var o = ce(t, 6), i = o[0], s = o[1], a = o[2], c = o[3], u = o[4], f = o[5], d = r || {}, l = d.plain;
  if (u)
    return null;
  var v = i, g = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(f)
  };
  return v = wo(i, s, a, g, l), c && Object.keys(c).forEach(function(p) {
    if (!e[p]) {
      e[p] = !0;
      var h = ao(c[p]), E = wo(h, s, "_effect-".concat(p), g, l);
      p.startsWith("@layer") ? v = E + v : v += E;
    }
  }), [f, a, v];
}, _u = "cssVar", Ux = function(t, e) {
  var r = t.key, o = t.prefix, i = t.unitless, s = t.ignore, a = t.token, c = t.scope, u = c === void 0 ? "" : c, f = en(Cr), d = f.cache.instanceId, l = f.container, v = a._tokenKey, g = [].concat(Ut(t.path), [r, u, v]), p = na(_u, g, function() {
    var h = e(), E = cu(h, r, {
      prefix: o,
      unitless: i,
      ignore: s,
      scope: u
    }), w = ce(E, 2), m = w[0], A = w[1], y = wu(g, A);
    return [m, A, y, r];
  }, function(h) {
    var E = ce(h, 3), w = E[2];
    es && su(w, {
      mark: St
    });
  }, function(h) {
    var E = ce(h, 3), w = E[1], m = E[2];
    if (w) {
      var A = vn(w, m, {
        mark: St,
        prepend: "queue",
        attachTo: l,
        priority: -999
      });
      A[Zt] = d, A.setAttribute(zn, r);
    }
  });
  return p;
}, qx = function(t, e, r) {
  var o = ce(t, 4), i = o[1], s = o[2], a = o[3], c = r || {}, u = c.plain;
  if (!i)
    return null;
  var f = -999, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(f)
  }, l = wo(i, a, s, d, u);
  return [f, s, l];
}, or;
or = {}, q(or, Eu, Hx), q(or, uu, px), q(or, _u, qx);
var Cu = /* @__PURE__ */ function() {
  function n(t, e) {
    _t(this, n), q(this, "name", void 0), q(this, "style", void 0), q(this, "_keyframe", !0), this.name = t, this.style = e;
  }
  return Ct(n, [{
    key: "getName",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return e ? "".concat(e, "-").concat(this.name) : this.name;
    }
  }]), n;
}();
function Tn(n) {
  return n.notSplit = !0, n;
}
Tn(["borderTop", "borderBottom"]), Tn(["borderTop"]), Tn(["borderBottom"]), Tn(["borderLeft", "borderRight"]), Tn(["borderLeft"]), Tn(["borderRight"]);
var ia = /* @__PURE__ */ Fs({});
function Wx(n) {
  return tu(n) || Zl(n) || Qs(n) || nu();
}
function is(n, t) {
  for (var e = n, r = 0; r < t.length; r += 1) {
    if (e == null)
      return;
    e = e[t[r]];
  }
  return e;
}
function Au(n, t, e, r) {
  if (!t.length)
    return e;
  var o = Wx(t), i = o[0], s = o.slice(1), a;
  return !n && typeof i == "number" ? a = [] : Array.isArray(n) ? a = Ut(n) : a = V({}, n), r && e === void 0 && s.length === 1 ? delete a[i][s[0]] : a[i] = Au(a[i], s, e, r), a;
}
function Ei(n, t, e) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && r && e === void 0 && !is(n, t.slice(0, -1)) ? n : Au(n, t, e, r);
}
function Yx(n) {
  return _e(n) === "object" && n !== null && Object.getPrototypeOf(n) === Object.prototype;
}
function cc(n) {
  return Array.isArray(n) ? [] : {};
}
var Xx = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function $x() {
  for (var n = arguments.length, t = new Array(n), e = 0; e < n; e++)
    t[e] = arguments[e];
  var r = cc(t[0]);
  return t.forEach(function(o) {
    function i(s, a) {
      var c = new Set(a), u = is(o, s), f = Array.isArray(u);
      if (f || Yx(u)) {
        if (!c.has(u)) {
          c.add(u);
          var d = is(r, s);
          f ? r = Ei(r, s, []) : (!d || _e(d) !== "object") && (r = Ei(r, s, cc(u))), Xx(u).forEach(function(l) {
            i([].concat(Ut(s), [l]), c);
          });
        }
      } else
        r = Ei(r, s, u);
    }
    i([]);
  }), r;
}
function Tu() {
}
let Vt = null;
function Gx() {
  Vt = null, ql();
}
let sa = Tu;
process.env.NODE_ENV !== "production" && (sa = (n, t, e) => {
  nn(n, `[antd: ${t}] ${e}`), process.env.NODE_ENV === "test" && Gx();
});
const Ou = /* @__PURE__ */ _.createContext({}), Gn = process.env.NODE_ENV !== "production" ? (n) => {
  const {
    strict: t
  } = _.useContext(Ou), e = (r, o, i) => {
    if (!r)
      if (t === !1 && o === "deprecated") {
        const s = Vt;
        Vt || (Vt = {}), Vt[n] = Vt[n] || [], Vt[n].includes(i || "") || Vt[n].push(i || ""), s || console.warn("[antd] There exists deprecated usage in your code:", Vt);
      } else
        process.env.NODE_ENV !== "production" && sa(r, n, i);
  };
  return e.deprecated = (r, o, i, s) => {
    e(r, "deprecated", `\`${o}\` is deprecated. Please use \`${i}\` instead.${s ? ` ${s}` : ""}`);
  }, e;
} : () => {
  const n = () => {
  };
  return n.deprecated = Tu, n;
}, Jo = sa, Kx = /* @__PURE__ */ Fs(void 0), st = "${label} is not a valid ${type}", Qo = {
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
        string: st,
        method: st,
        array: st,
        object: st,
        number: st,
        date: st,
        boolean: st,
        integer: st,
        float: st,
        regexp: st,
        email: st,
        url: st,
        hex: st
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
let co = [];
const lc = () => co.reduce((n, t) => Object.assign(Object.assign({}, n), t), Qo.Modal);
function Zx(n) {
  if (n) {
    const t = Object.assign({}, n);
    return co.push(t), lc(), () => {
      co = co.filter((e) => e !== t), lc();
    };
  }
  Object.assign({}, Qo.Modal);
}
const Ru = /* @__PURE__ */ Fs(void 0), ku = "internalMark", Pu = (n) => {
  const {
    locale: t = {},
    children: e,
    _ANT_MARK__: r
  } = n;
  if (process.env.NODE_ENV !== "production") {
    const i = Gn("LocaleProvider");
    process.env.NODE_ENV !== "production" && i(r === ku, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  _.useEffect(() => Zx(t == null ? void 0 : t.Modal), [t]);
  const o = _.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ _.createElement(Ru.Provider, {
    value: o
  }, e);
};
process.env.NODE_ENV !== "production" && (Pu.displayName = "LocaleProvider");
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
}), Ye = Math.round;
function _i(n, t) {
  const e = n.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], r = e.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    r[o] = t(r[o] || 0, e[o] || "", o);
  return e[3] ? r[3] = e[3].includes("%") ? r[3] / 100 : r[3] : r[3] = 1, r;
}
const uc = (n, t, e) => e === 0 ? n : n / 100;
function ir(n, t) {
  const e = t || 255;
  return n > e ? e : n < 0 ? 0 : n;
}
class Be {
  constructor(t) {
    q(this, "isValid", !0), q(this, "r", 0), q(this, "g", 0), q(this, "b", 0), q(this, "a", 1), q(this, "_h", void 0), q(this, "_s", void 0), q(this, "_l", void 0), q(this, "_v", void 0), q(this, "_max", void 0), q(this, "_min", void 0), q(this, "_brightness", void 0);
    function e(r) {
      return r[0] in t && r[1] in t && r[2] in t;
    }
    if (t) if (typeof t == "string") {
      let o = function(i) {
        return r.startsWith(i);
      };
      const r = t.trim();
      /^#?[A-F\d]{3,8}$/i.test(r) ? this.fromHexString(r) : o("rgb") ? this.fromRgbString(r) : o("hsl") ? this.fromHslString(r) : (o("hsv") || o("hsb")) && this.fromHsvString(r);
    } else if (t instanceof Be)
      this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this._h = t._h, this._s = t._s, this._l = t._l, this._v = t._v;
    else if (e("rgb"))
      this.r = ir(t.r), this.g = ir(t.g), this.b = ir(t.b), this.a = typeof t.a == "number" ? ir(t.a, 1) : 1;
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
    function t(i) {
      const s = i / 255;
      return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
    }
    const e = t(this.r), r = t(this.g), o = t(this.b);
    return 0.2126 * e + 0.7152 * r + 0.0722 * o;
  }
  getHue() {
    if (typeof this._h > "u") {
      const t = this.getMax() - this.getMin();
      t === 0 ? this._h = 0 : this._h = Ye(60 * (this.r === this.getMax() ? (this.g - this.b) / t + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / t + 2 : (this.r - this.g) / t + 4));
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
    const r = this._c(t), o = e / 100, i = (a) => (r[a] - this[a]) * o + this[a], s = {
      r: Ye(i("r")),
      g: Ye(i("g")),
      b: Ye(i("b")),
      a: Ye(i("a") * 100) / 100
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
    const e = this._c(t), r = this.a + e.a * (1 - this.a), o = (i) => Ye((this[i] * this.a + e[i] * e.a * (1 - this.a)) / r);
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
      const i = Ye(this.a * 255).toString(16);
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
    const t = this.getHue(), e = Ye(this.getSaturation() * 100), r = Ye(this.getLightness() * 100);
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
    return o[t] = ir(e, r), o;
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
    function r(o, i) {
      return parseInt(e[o] + e[i || o], 16);
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
      const l = Ye(r * 255);
      this.r = l, this.g = l, this.b = l;
    }
    let i = 0, s = 0, a = 0;
    const c = t / 60, u = (1 - Math.abs(2 * r - 1)) * e, f = u * (1 - Math.abs(c % 2 - 1));
    c >= 0 && c < 1 ? (i = u, s = f) : c >= 1 && c < 2 ? (i = f, s = u) : c >= 2 && c < 3 ? (s = u, a = f) : c >= 3 && c < 4 ? (s = f, a = u) : c >= 4 && c < 5 ? (i = f, a = u) : c >= 5 && c < 6 && (i = u, a = f);
    const d = r - u / 2;
    this.r = Ye((i + d) * 255), this.g = Ye((s + d) * 255), this.b = Ye((a + d) * 255);
  }
  fromHsv({
    h: t,
    s: e,
    v: r,
    a: o
  }) {
    this._h = t % 360, this._s = e, this._v = r, this.a = typeof o == "number" ? o : 1;
    const i = Ye(r * 255);
    if (this.r = i, this.g = i, this.b = i, e <= 0)
      return;
    const s = t / 60, a = Math.floor(s), c = s - a, u = Ye(r * (1 - e) * 255), f = Ye(r * (1 - e * c) * 255), d = Ye(r * (1 - e * (1 - c)) * 255);
    switch (a) {
      case 0:
        this.g = d, this.b = u;
        break;
      case 1:
        this.r = f, this.b = u;
        break;
      case 2:
        this.r = u, this.b = d;
        break;
      case 3:
        this.r = u, this.g = f;
        break;
      case 4:
        this.r = d, this.g = u;
        break;
      case 5:
      default:
        this.g = u, this.b = f;
        break;
    }
  }
  fromHsvString(t) {
    const e = _i(t, uc);
    this.fromHsv({
      h: e[0],
      s: e[1],
      v: e[2],
      a: e[3]
    });
  }
  fromHslString(t) {
    const e = _i(t, uc);
    this.fromHsl({
      h: e[0],
      s: e[1],
      l: e[2],
      a: e[3]
    });
  }
  fromRgbString(t) {
    const e = _i(t, (r, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? Ye(r / 100 * 255) : r
    ));
    this.r = e[0], this.g = e[1], this.b = e[2], this.a = e[3];
  }
}
var zr = 2, fc = 0.16, Jx = 0.05, Qx = 0.05, ep = 0.15, Nu = 5, ju = 4, tp = [{
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
function dc(n, t, e) {
  var r;
  return Math.round(n.h) >= 60 && Math.round(n.h) <= 240 ? r = e ? Math.round(n.h) - zr * t : Math.round(n.h) + zr * t : r = e ? Math.round(n.h) + zr * t : Math.round(n.h) - zr * t, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function hc(n, t, e) {
  if (n.h === 0 && n.s === 0)
    return n.s;
  var r;
  return e ? r = n.s - fc * t : t === ju ? r = n.s + fc : r = n.s + Jx * t, r > 1 && (r = 1), e && t === Nu && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Math.round(r * 100) / 100;
}
function xc(n, t, e) {
  var r;
  return e ? r = n.v + Qx * t : r = n.v - ep * t, r = Math.max(0, Math.min(1, r)), Math.round(r * 100) / 100;
}
function yr(n) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = [], r = new Be(n), o = r.toHsv(), i = Nu; i > 0; i -= 1) {
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
  return t.theme === "dark" ? tp.map(function(u) {
    var f = u.index, d = u.amount;
    return new Be(t.backgroundColor || "#141414").mix(e[f], d).toHexString();
  }) : e.map(function(u) {
    return u.toHexString();
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
var Eo = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
Eo.primary = Eo[5];
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
  blue: Eo,
  geekblue: xs,
  purple: ps,
  magenta: ms,
  grey: gs
};
function np(n, t) {
  let {
    generateColorPalettes: e,
    generateNeutralColorPalettes: r
  } = t;
  const {
    colorSuccess: o,
    colorWarning: i,
    colorError: s,
    colorInfo: a,
    colorPrimary: c,
    colorBgBase: u,
    colorTextBase: f
  } = n, d = e(c), l = e(o), v = e(i), g = e(s), p = e(a), h = r(u, f), E = n.colorLink || n.colorInfo, w = e(E), m = new Be(g[1]).mix(new Be(g[3]), 50).toHexString();
  return Object.assign(Object.assign({}, h), {
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
    colorSuccessBg: l[1],
    colorSuccessBgHover: l[2],
    colorSuccessBorder: l[3],
    colorSuccessBorderHover: l[4],
    colorSuccessHover: l[4],
    colorSuccess: l[6],
    colorSuccessActive: l[7],
    colorSuccessTextHover: l[8],
    colorSuccessText: l[9],
    colorSuccessTextActive: l[10],
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
    colorLinkHover: w[4],
    colorLink: w[6],
    colorLinkActive: w[7],
    colorBgMask: new Be("#000").setA(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const rp = (n) => {
  let t = n, e = n, r = n, o = n;
  return n < 6 && n >= 5 ? t = n + 1 : n < 16 && n >= 6 ? t = n + 2 : n >= 16 && (t = 16), n < 7 && n >= 5 ? e = 4 : n < 8 && n >= 7 ? e = 5 : n < 14 && n >= 8 ? e = 6 : n < 16 && n >= 14 ? e = 7 : n >= 16 && (e = 8), n < 6 && n >= 2 ? r = 1 : n >= 6 && (r = 2), n > 4 && n < 8 ? o = 4 : n >= 8 && (o = 6), {
    borderRadius: n,
    borderRadiusXS: r,
    borderRadiusSM: e,
    borderRadiusLG: t,
    borderRadiusOuter: o
  };
};
function op(n) {
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
  }, rp(r));
}
const ip = (n) => {
  const {
    controlHeight: t
  } = n;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function sp(n) {
  return (n + 8) / n;
}
function ap(n) {
  const t = Array.from({
    length: 10
  }).map((e, r) => {
    const o = r - 1, i = n * Math.pow(Math.E, o / 5), s = r > 1 ? Math.floor(i) : Math.ceil(i);
    return Math.floor(s / 2) * 2;
  });
  return t[1] = n, t.map((e) => ({
    size: e,
    lineHeight: sp(e)
  }));
}
const cp = (n) => {
  const t = ap(n), e = t.map((f) => f.size), r = t.map((f) => f.lineHeight), o = e[1], i = e[0], s = e[2], a = r[1], c = r[0], u = r[2];
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
    lineHeightLG: u,
    lineHeightSM: c,
    fontHeight: Math.round(a * o),
    fontHeightLG: Math.round(u * s),
    fontHeightSM: Math.round(c * i),
    lineHeightHeading1: r[6],
    lineHeightHeading2: r[5],
    lineHeightHeading3: r[4],
    lineHeightHeading4: r[3],
    lineHeightHeading5: r[2]
  };
};
function lp(n) {
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
const dt = (n, t) => new Be(n).setA(t).toRgbString(), sr = (n, t) => new Be(n).darken(t).toHexString(), up = (n) => {
  const t = yr(n);
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
}, fp = (n, t) => {
  const e = n || "#fff", r = t || "#000";
  return {
    colorBgBase: e,
    colorTextBase: r,
    colorText: dt(r, 0.88),
    colorTextSecondary: dt(r, 0.65),
    colorTextTertiary: dt(r, 0.45),
    colorTextQuaternary: dt(r, 0.25),
    colorFill: dt(r, 0.15),
    colorFillSecondary: dt(r, 0.06),
    colorFillTertiary: dt(r, 0.04),
    colorFillQuaternary: dt(r, 0.02),
    colorBgSolid: dt(r, 1),
    colorBgSolidHover: dt(r, 0.75),
    colorBgSolidActive: dt(r, 0.95),
    colorBgLayout: sr(e, 4),
    colorBgContainer: sr(e, 0),
    colorBgElevated: sr(e, 0),
    colorBgSpotlight: dt(r, 0.85),
    colorBgBlur: "transparent",
    colorBorder: sr(e, 15),
    colorBorderSecondary: sr(e, 6)
  };
};
function dp(n) {
  Ci.pink = Ci.magenta, Ai.pink = Ai.magenta;
  const t = Object.keys(Iu).map((e) => {
    const r = n[e] === Ci[e] ? Ai[e] : yr(n[e]);
    return Array.from({
      length: 10
    }, () => 1).reduce((o, i, s) => (o[`${e}-${s + 1}`] = r[s], o[`${e}${s + 1}`] = r[s], o), {});
  }).reduce((e, r) => (e = Object.assign(Object.assign({}, e), r), e), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, n), t), np(n, {
    generateColorPalettes: up,
    generateNeutralColorPalettes: fp
  })), cp(n.fontSize)), lp(n)), ip(n)), op(n));
}
const Mu = Qi(dp), vs = {
  token: vr,
  override: {
    override: vr
  },
  hashed: !0
}, Lu = /* @__PURE__ */ Fe.createContext(vs), ys = "ant", aa = "anticon", hp = (n, t) => t || (n ? `${ys}-${n}` : ys), tn = /* @__PURE__ */ _.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: hp,
  iconPrefixCls: aa
}), {
  Consumer: Av
} = tn, pc = {};
function Du(n) {
  const t = _.useContext(tn), {
    getPrefixCls: e,
    direction: r,
    getPopupContainer: o
  } = t, i = t[n];
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
function pp(n, t) {
  const e = {}, r = (s, a) => {
    let c = s.clone();
    return c = (a == null ? void 0 : a(c)) || c, c.toRgbString();
  }, o = (s, a) => {
    const c = new Be(s), u = yr(c.toRgbString());
    e[`${a}-color`] = r(c), e[`${a}-color-disabled`] = u[1], e[`${a}-color-hover`] = u[4], e[`${a}-color-active`] = u[6], e[`${a}-color-outline`] = c.clone().setA(0.2).toRgbString(), e[`${a}-color-deprecated-bg`] = u[0], e[`${a}-color-deprecated-border`] = u[2];
  };
  if (t.primaryColor) {
    o(t.primaryColor, "primary");
    const s = new Be(t.primaryColor), a = yr(s.toRgbString());
    a.forEach((u, f) => {
      e[`primary-${f + 1}`] = u;
    }), e["primary-color-deprecated-l-35"] = r(s, (u) => u.lighten(35)), e["primary-color-deprecated-l-20"] = r(s, (u) => u.lighten(20)), e["primary-color-deprecated-t-20"] = r(s, (u) => u.tint(20)), e["primary-color-deprecated-t-50"] = r(s, (u) => u.tint(50)), e["primary-color-deprecated-f-12"] = r(s, (u) => u.setA(u.a * 0.12));
    const c = new Be(a[0]);
    e["primary-color-active-deprecated-f-30"] = r(c, (u) => u.setA(u.a * 0.3)), e["primary-color-active-deprecated-d-02"] = r(c, (u) => u.darken(2));
  }
  return t.successColor && o(t.successColor, "success"), t.warningColor && o(t.warningColor, "warning"), t.errorColor && o(t.errorColor, "error"), t.infoColor && o(t.infoColor, "info"), `
  :root {
    ${Object.keys(e).map((s) => `--${n}-${s}: ${e[s]};`).join(`
`)}
  }
  `.trim();
}
function mp(n, t) {
  const e = pp(n, t);
  qt() ? vn(e, `${xp}-dynamic-theme`) : process.env.NODE_ENV !== "production" && Jo(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const bs = /* @__PURE__ */ _.createContext(!1), gp = (n) => {
  let {
    children: t,
    disabled: e
  } = n;
  const r = _.useContext(bs);
  return /* @__PURE__ */ _.createElement(bs.Provider, {
    value: e ?? r
  }, t);
}, br = /* @__PURE__ */ _.createContext(void 0), vp = (n) => {
  let {
    children: t,
    size: e
  } = n;
  const r = _.useContext(br);
  return /* @__PURE__ */ _.createElement(br.Provider, {
    value: e || r
  }, t);
};
function yp() {
  const n = en(bs), t = en(br);
  return {
    componentDisabled: n,
    componentSize: t
  };
}
var Bu = /* @__PURE__ */ Ct(function n() {
  _t(this, n);
}), Fu = "CALC_UNIT", bp = new RegExp(Fu, "g");
function Ti(n) {
  return typeof n == "number" ? "".concat(n).concat(Fu) : n;
}
var Sp = /* @__PURE__ */ function(n) {
  _r(e, n);
  var t = Xo(e);
  function e(r, o) {
    var i;
    _t(this, e), i = t.call(this), q(gn(i), "result", ""), q(gn(i), "unitlessCssVar", void 0), q(gn(i), "lowPriority", void 0);
    var s = _e(r);
    return i.unitlessCssVar = o, r instanceof e ? i.result = "(".concat(r.result, ")") : s === "number" ? i.result = Ti(r) : s === "string" && (i.result = r), i;
  }
  return Ct(e, [{
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
      return typeof a == "boolean" ? c = a : Array.from(this.unitlessCssVar).some(function(u) {
        return i.result.includes(u);
      }) && (c = !1), this.result = this.result.replace(bp, c ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), e;
}(Bu), wp = /* @__PURE__ */ function(n) {
  _r(e, n);
  var t = Xo(e);
  function e(r) {
    var o;
    return _t(this, e), o = t.call(this), q(gn(o), "result", 0), r instanceof e ? o.result = r.result : typeof r == "number" && (o.result = r), o;
  }
  return Ct(e, [{
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
}(Bu), Ep = function(t, e) {
  var r = t === "css" ? Sp : wp;
  return function(o) {
    return new r(o, e);
  };
}, mc = function(t, e) {
  return "".concat([e, t.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function Ss(n) {
  var t = _.useRef();
  t.current = n;
  var e = _.useCallback(function() {
    for (var r, o = arguments.length, i = new Array(o), s = 0; s < o; s++)
      i[s] = arguments[s];
    return (r = t.current) === null || r === void 0 ? void 0 : r.call.apply(r, [t].concat(i));
  }, []);
  return e;
}
function ws(n) {
  var t = _.useRef(!1), e = _.useState(n), r = ce(e, 2), o = r[0], i = r[1];
  _.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function s(a, c) {
    c && t.current || i(a);
  }
  return [o, s];
}
function gc(n, t, e, r) {
  var o = V({}, t[n]);
  if (r != null && r.deprecatedTokens) {
    var i = r.deprecatedTokens;
    i.forEach(function(a) {
      var c = ce(a, 2), u = c[0], f = c[1];
      if (process.env.NODE_ENV !== "production" && nn(!(o != null && o[u]), "Component Token `".concat(String(u), "` of ").concat(String(n), " is deprecated. Please use `").concat(String(f), "` instead.")), o != null && o[u] || o != null && o[f]) {
        var d;
        (d = o[f]) !== null && d !== void 0 || (o[f] = o == null ? void 0 : o[u]);
      }
    });
  }
  var s = V(V({}, e), o);
  return Object.keys(s).forEach(function(a) {
    s[a] === t[a] && delete s[a];
  }), s;
}
var zu = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", Es = !0;
function ei() {
  for (var n = arguments.length, t = new Array(n), e = 0; e < n; e++)
    t[e] = arguments[e];
  if (!zu)
    return Object.assign.apply(Object, [{}].concat(t));
  Es = !1;
  var r = {};
  return t.forEach(function(o) {
    if (_e(o) === "object") {
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
var Cp = function(t) {
  var e, r = t, o = _p;
  return zu && typeof Proxy < "u" && (e = /* @__PURE__ */ new Set(), r = new Proxy(t, {
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
function yc(n, t, e) {
  if (typeof e == "function") {
    var r;
    return e(ei(t, (r = t[n]) !== null && r !== void 0 ? r : {}));
  }
  return e ?? {};
}
function Ap(n) {
  return n === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++)
        r[o] = arguments[o];
      return "max(".concat(r.map(function(i) {
        return So(i);
      }).join(","), ")");
    },
    min: function() {
      for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++)
        r[o] = arguments[o];
      return "min(".concat(r.map(function(i) {
        return So(i);
      }).join(","), ")");
    }
  };
}
var Tp = 1e3 * 60 * 10, Op = /* @__PURE__ */ function() {
  function n() {
    _t(this, n), q(this, "map", /* @__PURE__ */ new Map()), q(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), q(this, "nextID", 0), q(this, "lastAccessBeat", /* @__PURE__ */ new Map()), q(this, "accessBeat", 0);
  }
  return Ct(n, [{
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
        return i && _e(i) === "object" ? "obj_".concat(r.getObjectID(i)) : "".concat(_e(i), "_").concat(i);
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
  }]), n;
}(), bc = new Op();
function Rp(n, t) {
  return Fe.useMemo(function() {
    var e = bc.get(t);
    if (e)
      return e;
    var r = n();
    return bc.set(t, r), r;
  }, t);
}
var kp = function() {
  return {};
};
function Pp(n) {
  var t = n.useCSP, e = t === void 0 ? kp : t, r = n.useToken, o = n.usePrefix, i = n.getResetStyles, s = n.getCommonStyle, a = n.getCompUnitless;
  function c(l, v, g, p) {
    var h = Array.isArray(l) ? l[0] : l;
    function E(j) {
      return "".concat(String(h)).concat(j.slice(0, 1).toUpperCase()).concat(j.slice(1));
    }
    var w = (p == null ? void 0 : p.unitless) || {}, m = typeof a == "function" ? a(l) : {}, A = V(V({}, m), {}, q({}, E("zIndexPopup"), !0));
    Object.keys(w).forEach(function(j) {
      A[E(j)] = w[j];
    });
    var y = V(V({}, p), {}, {
      unitless: A,
      prefixToken: E
    }), O = f(l, v, g, y), C = u(h, g, y);
    return function(j) {
      var z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : j, Y = O(j, z), ne = ce(Y, 2), $ = ne[1], F = C(z), W = ce(F, 2), H = W[0], G = W[1];
      return [H, $, G];
    };
  }
  function u(l, v, g) {
    var p = g.unitless, h = g.injectStyle, E = h === void 0 ? !0 : h, w = g.prefixToken, m = g.ignore, A = function(C) {
      var j = C.rootCls, z = C.cssVar, Y = z === void 0 ? {} : z, ne = r(), $ = ne.realToken;
      return Ux({
        path: [l],
        prefix: Y.prefix,
        key: Y.key,
        unitless: p,
        ignore: m,
        token: $,
        scope: j
      }, function() {
        var F = yc(l, $, v), W = gc(l, $, F, {
          deprecatedTokens: g == null ? void 0 : g.deprecatedTokens
        });
        return Object.keys(F).forEach(function(H) {
          W[w(H)] = W[H], delete W[H];
        }), W;
      }), null;
    }, y = function(C) {
      var j = r(), z = j.cssVar;
      return [function(Y) {
        return E && z ? /* @__PURE__ */ Fe.createElement(Fe.Fragment, null, /* @__PURE__ */ Fe.createElement(A, {
          rootCls: C,
          cssVar: z,
          component: l
        }), Y) : Y;
      }, z == null ? void 0 : z.key];
    };
    return y;
  }
  function f(l, v, g) {
    var p = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, h = Array.isArray(l) ? l : [l, l], E = ce(h, 1), w = E[0], m = h.join("-"), A = n.layer || {
      name: "antd"
    };
    return function(y) {
      var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : y, C = r(), j = C.theme, z = C.realToken, Y = C.hashId, ne = C.token, $ = C.cssVar, F = o(), W = F.rootPrefixCls, H = F.iconPrefixCls, G = e(), Q = $ ? "css" : "js", Z = Rp(function() {
        var pe = /* @__PURE__ */ new Set();
        return $ && Object.keys(p.unitless || {}).forEach(function(ue) {
          pe.add(ro(ue, $.prefix)), pe.add(ro(ue, mc(w, $.prefix)));
        }), Ep(Q, pe);
      }, [Q, w, $ == null ? void 0 : $.prefix]), J = Ap(Q), re = J.max, oe = J.min, K = {
        theme: j,
        token: ne,
        hashId: Y,
        nonce: function() {
          return G.nonce;
        },
        clientOnly: p.clientOnly,
        layer: A,
        // antd is always at top of styles
        order: p.order || -999
      };
      typeof i == "function" && os(V(V({}, K), {}, {
        clientOnly: !1,
        path: ["Shared", W]
      }), function() {
        return i(ne, {
          prefix: {
            rootPrefixCls: W,
            iconPrefixCls: H
          },
          csp: G
        });
      });
      var ee = os(V(V({}, K), {}, {
        path: [m, y, H]
      }), function() {
        if (p.injectStyle === !1)
          return [];
        var pe = Cp(ne), ue = pe.token, ve = pe.flush, P = yc(w, z, g), L = ".".concat(y), R = gc(w, z, P, {
          deprecatedTokens: p.deprecatedTokens
        });
        $ && P && _e(P) === "object" && Object.keys(P).forEach(function(fe) {
          P[fe] = "var(".concat(ro(fe, mc(w, $.prefix)), ")");
        });
        var N = ei(ue, {
          componentCls: L,
          prefixCls: y,
          iconCls: ".".concat(H),
          antCls: ".".concat(W),
          calc: Z,
          // @ts-ignore
          max: re,
          // @ts-ignore
          min: oe
        }, $ ? P : R), b = v(N, {
          hashId: Y,
          prefixCls: y,
          rootPrefixCls: W,
          iconPrefixCls: H
        });
        ve(w, R);
        var B = typeof s == "function" ? s(N, y, O, p.resetFont) : null;
        return [p.resetStyle === !1 ? null : B, b];
      });
      return [ee, Y];
    };
  }
  function d(l, v, g) {
    var p = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, h = f(l, v, g, V({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, p)), E = function(m) {
      var A = m.prefixCls, y = m.rootCls, O = y === void 0 ? A : y;
      return h(A, O), null;
    };
    return process.env.NODE_ENV !== "production" && (E.displayName = "SubStyle_".concat(String(Array.isArray(l) ? l.join(".") : l))), E;
  }
  return {
    genStyleHooks: c,
    genSubStyleComponent: d,
    genComponentStyleHook: f
  };
}
const Ip = "5.24.6";
function Oi(n) {
  return n >= 0 && n <= 255;
}
function Vr(n, t) {
  const {
    r: e,
    g: r,
    b: o,
    a: i
  } = new Be(n).toRgb();
  if (i < 1)
    return n;
  const {
    r: s,
    g: a,
    b: c
  } = new Be(t).toRgb();
  for (let u = 0.01; u <= 1; u += 0.01) {
    const f = Math.round((e - s * (1 - u)) / u), d = Math.round((r - a * (1 - u)) / u), l = Math.round((o - c * (1 - u)) / u);
    if (Oi(f) && Oi(d) && Oi(l))
      return new Be({
        r: f,
        g: d,
        b: l,
        a: Math.round(u * 100) / 100
      }).toRgbString();
  }
  return new Be({
    r: e,
    g: r,
    b: o,
    a: 1
  }).toRgbString();
}
var Np = function(n, t) {
  var e = {};
  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && t.indexOf(r) < 0 && (e[r] = n[r]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(n); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(n, r[o]) && (e[r[o]] = n[r[o]]);
  return e;
};
function Vu(n) {
  const {
    override: t
  } = n, e = Np(n, ["override"]), r = Object.assign({}, t);
  Object.keys(vr).forEach((l) => {
    delete r[l];
  });
  const o = Object.assign(Object.assign({}, e), r), i = 480, s = 576, a = 768, c = 992, u = 1200, f = 1600;
  if (o.motion === !1) {
    const l = "0s";
    o.motionDurationFast = l, o.motionDurationMid = l, o.motionDurationSlow = l;
  }
  return Object.assign(Object.assign(Object.assign({}, o), {
    // ============== Background ============== //
    colorFillContent: o.colorFillSecondary,
    colorFillContentHover: o.colorFill,
    colorFillAlter: o.colorFillQuaternary,
    colorBgContainerDisabled: o.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: o.colorBgContainer,
    colorSplit: Vr(o.colorBorderSecondary, o.colorBgContainer),
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
    colorErrorOutline: Vr(o.colorErrorBg, o.colorBgContainer),
    colorWarningOutline: Vr(o.colorWarningBg, o.colorBgContainer),
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
    controlOutline: Vr(o.colorPrimaryBg, o.colorBgContainer),
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
    screenLGMax: u - 1,
    screenXL: u,
    screenXLMin: u,
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
var Sc = function(n, t) {
  var e = {};
  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && t.indexOf(r) < 0 && (e[r] = n[r]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(n); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(n, r[o]) && (e[r[o]] = n[r[o]]);
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
}, Uu = (n, t, e) => {
  const r = e.getDerivativeToken(n), {
    override: o
  } = t, i = Sc(t, ["override"]);
  let s = Object.assign(Object.assign({}, r), {
    override: o
  });
  return s = Vu(s), i && Object.entries(i).forEach((a) => {
    let [c, u] = a;
    const {
      theme: f
    } = u, d = Sc(u, ["theme"]);
    let l = d;
    f && (l = Uu(Object.assign(Object.assign({}, s), d), {
      override: d
    }, f)), s[c] = l;
  }), s;
};
function ca() {
  const {
    token: n,
    hashed: t,
    theme: e,
    override: r,
    cssVar: o
  } = Fe.useContext(Lu), i = `${Ip}-${t || ""}`, s = e || Mu, [a, c, u] = xx(s, [vr, n], {
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
  return [s, u, t ? c : "", a, o];
}
const qu = function(n) {
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
}), Dp = (n) => ({
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
}), Bp = (n, t, e, r) => {
  const o = `[class^="${t}"], [class*=" ${t}"]`, i = e ? `.${e}` : o, s = {
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
    [i]: Object.assign(Object.assign(Object.assign({}, a), s), {
      [o]: s
    })
  };
}, Wu = (n) => ({
  [`.${n}`]: Object.assign(Object.assign({}, Lp()), {
    [`.${n} .${n}-icon`]: {
      display: "block"
    }
  })
}), {
  genStyleHooks: la
} = Pp({
  usePrefix: () => {
    const {
      getPrefixCls: n,
      iconPrefixCls: t
    } = en(tn);
    return {
      rootPrefixCls: n(),
      iconPrefixCls: t
    };
  },
  useToken: () => {
    const [n, t, e, r, o] = ca();
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
    } = en(tn);
    return n ?? {};
  },
  getResetStyles: (n, t) => {
    var e;
    const r = Dp(n);
    return [r, {
      "&": r
    }, Wu((e = t == null ? void 0 : t.prefix.iconPrefixCls) !== null && e !== void 0 ? e : aa)];
  },
  getCommonStyle: Bp,
  getCompUnitless: () => Hu
}), Fp = (n, t) => {
  const [e, r] = ca();
  return os({
    token: r,
    hashId: "",
    path: ["ant-design-icons", n],
    nonce: () => t == null ? void 0 : t.nonce,
    layer: {
      name: "antd"
    }
  }, () => [Wu(n)]);
}, zp = Object.assign({}, _), {
  useId: wc
} = zp, Vp = () => "", Hp = typeof wc > "u" ? Vp : wc;
function Up(n, t, e) {
  var r, o;
  const i = Gn("ConfigProvider"), s = n || {}, a = s.inherit === !1 || !t ? Object.assign(Object.assign({}, vs), {
    hashed: (r = t == null ? void 0 : t.hashed) !== null && r !== void 0 ? r : vs.hashed,
    cssVar: t == null ? void 0 : t.cssVar
  }) : t, c = Hp();
  if (process.env.NODE_ENV !== "production") {
    const u = s.cssVar || a.cssVar, f = !!(typeof s.cssVar == "object" && (!((o = s.cssVar) === null || o === void 0) && o.key) || c);
    process.env.NODE_ENV !== "production" && i(!u || f, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return Xl(() => {
    var u, f;
    if (!n)
      return t;
    const d = Object.assign({}, a.components);
    Object.keys(n.components || {}).forEach((g) => {
      d[g] = Object.assign(Object.assign({}, d[g]), n.components[g]);
    });
    const l = `css-var-${c.replace(/:/g, "")}`, v = ((u = s.cssVar) !== null && u !== void 0 ? u : a.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: e == null ? void 0 : e.prefixCls
    }, typeof a.cssVar == "object" ? a.cssVar : {}), typeof s.cssVar == "object" ? s.cssVar : {}), {
      key: typeof s.cssVar == "object" && ((f = s.cssVar) === null || f === void 0 ? void 0 : f.key) || l
    });
    return Object.assign(Object.assign(Object.assign({}, a), s), {
      token: Object.assign(Object.assign({}, a.token), s.token),
      components: d,
      cssVar: v
    });
  }, [s, a], (u, f) => u.some((d, l) => {
    const v = f[l];
    return !zh(d, v, !0);
  }));
}
var qp = ["children"], Yu = /* @__PURE__ */ _.createContext({});
function Wp(n) {
  var t = n.children, e = mr(n, qp);
  return /* @__PURE__ */ _.createElement(Yu.Provider, {
    value: e
  }, t);
}
var Yp = /* @__PURE__ */ function(n) {
  _r(e, n);
  var t = Xo(e);
  function e() {
    return _t(this, e), t.apply(this, arguments);
  }
  return Ct(e, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), e;
}(_.Component);
function Xp(n) {
  var t = _.useReducer(function(a) {
    return a + 1;
  }, 0), e = ce(t, 2), r = e[1], o = _.useRef(n), i = Ss(function() {
    return o.current;
  }), s = Ss(function(a) {
    o.current = typeof a == "function" ? a(o.current) : a, r();
  });
  return [i, s];
}
var Kt = "none", Hr = "appear", Ur = "enter", qr = "leave", Ec = "none", vt = "prepare", On = "start", Rn = "active", ua = "end", Xu = "prepared";
function _c(n, t) {
  var e = {};
  return e[n.toLowerCase()] = t.toLowerCase(), e["Webkit".concat(n)] = "webkit".concat(t), e["Moz".concat(n)] = "moz".concat(t), e["ms".concat(n)] = "MS".concat(t), e["O".concat(n)] = "o".concat(t.toLowerCase()), e;
}
function $p(n, t) {
  var e = {
    animationend: _c("Animation", "AnimationEnd"),
    transitionend: _c("Transition", "TransitionEnd")
  };
  return n && ("AnimationEvent" in t || delete e.animationend.animation, "TransitionEvent" in t || delete e.transitionend.transition), e;
}
var Gp = $p(qt(), typeof window < "u" ? window : {}), $u = {};
if (qt()) {
  var Kp = document.createElement("div");
  $u = Kp.style;
}
var Wr = {};
function Gu(n) {
  if (Wr[n])
    return Wr[n];
  var t = Gp[n];
  if (t)
    for (var e = Object.keys(t), r = e.length, o = 0; o < r; o += 1) {
      var i = e[o];
      if (Object.prototype.hasOwnProperty.call(t, i) && i in $u)
        return Wr[n] = t[i], Wr[n];
    }
  return "";
}
var Ku = Gu("animationend"), Zu = Gu("transitionend"), Ju = !!(Ku && Zu), Cc = Ku || "animationend", Ac = Zu || "transitionend";
function Tc(n, t) {
  if (!n) return null;
  if (_e(n) === "object") {
    var e = t.replace(/-\w/g, function(r) {
      return r[1].toUpperCase();
    });
    return n[e];
  }
  return "".concat(n, "-").concat(t);
}
const Zp = function(n) {
  var t = $e();
  function e(o) {
    o && (o.removeEventListener(Ac, n), o.removeEventListener(Cc, n));
  }
  function r(o) {
    t.current && t.current !== o && e(t.current), o && o !== t.current && (o.addEventListener(Ac, n), o.addEventListener(Cc, n), t.current = o);
  }
  return _.useEffect(function() {
    return function() {
      e(t.current);
    };
  }, []), [r, e];
};
var Qu = qt() ? r0 : tt;
const Jp = function() {
  var n = _.useRef(null);
  function t() {
    bo.cancel(n.current);
  }
  function e(r) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var i = bo(function() {
      o <= 1 ? r({
        isCanceled: function() {
          return i !== n.current;
        }
      }) : e(r, o - 1);
    });
    n.current = i;
  }
  return _.useEffect(function() {
    return function() {
      t();
    };
  }, []), [e, t];
};
var Qp = [vt, On, Rn, ua], e1 = [vt, Xu], ef = !1, t1 = !0;
function tf(n) {
  return n === Rn || n === ua;
}
const n1 = function(n, t, e) {
  var r = ws(Ec), o = ce(r, 2), i = o[0], s = o[1], a = Jp(), c = ce(a, 2), u = c[0], f = c[1];
  function d() {
    s(vt, !0);
  }
  var l = t ? e1 : Qp;
  return Qu(function() {
    if (i !== Ec && i !== ua) {
      var v = l.indexOf(i), g = l[v + 1], p = e(i);
      p === ef ? s(g, !0) : g && u(function(h) {
        function E() {
          h.isCanceled() || s(g, !0);
        }
        p === !0 ? E() : Promise.resolve(p).then(E);
      });
    }
  }, [n, i]), _.useEffect(function() {
    return function() {
      f();
    };
  }, []), [d, i];
};
function r1(n, t, e, r) {
  var o = r.motionEnter, i = o === void 0 ? !0 : o, s = r.motionAppear, a = s === void 0 ? !0 : s, c = r.motionLeave, u = c === void 0 ? !0 : c, f = r.motionDeadline, d = r.motionLeaveImmediately, l = r.onAppearPrepare, v = r.onEnterPrepare, g = r.onLeavePrepare, p = r.onAppearStart, h = r.onEnterStart, E = r.onLeaveStart, w = r.onAppearActive, m = r.onEnterActive, A = r.onLeaveActive, y = r.onAppearEnd, O = r.onEnterEnd, C = r.onLeaveEnd, j = r.onVisibleChanged, z = ws(), Y = ce(z, 2), ne = Y[0], $ = Y[1], F = Xp(Kt), W = ce(F, 2), H = W[0], G = W[1], Q = ws(null), Z = ce(Q, 2), J = Z[0], re = Z[1], oe = H(), K = $e(!1), ee = $e(null);
  function pe() {
    return e();
  }
  var ue = $e(!1);
  function ve() {
    G(Kt), re(null, !0);
  }
  var P = Ss(function(Me) {
    var Ae = H();
    if (Ae !== Kt) {
      var Ge = pe();
      if (!(Me && !Me.deadline && Me.target !== Ge)) {
        var mt = ue.current, ct;
        Ae === Hr && mt ? ct = y == null ? void 0 : y(Ge, Me) : Ae === Ur && mt ? ct = O == null ? void 0 : O(Ge, Me) : Ae === qr && mt && (ct = C == null ? void 0 : C(Ge, Me)), mt && ct !== !1 && ve();
      }
    }
  }), L = Zp(P), R = ce(L, 1), N = R[0], b = function(Ae) {
    switch (Ae) {
      case Hr:
        return q(q(q({}, vt, l), On, p), Rn, w);
      case Ur:
        return q(q(q({}, vt, v), On, h), Rn, m);
      case qr:
        return q(q(q({}, vt, g), On, E), Rn, A);
      default:
        return {};
    }
  }, B = _.useMemo(function() {
    return b(oe);
  }, [oe]), fe = n1(oe, !n, function(Me) {
    if (Me === vt) {
      var Ae = B[vt];
      return Ae ? Ae(pe()) : ef;
    }
    if (Re in B) {
      var Ge;
      re(((Ge = B[Re]) === null || Ge === void 0 ? void 0 : Ge.call(B, pe(), null)) || null);
    }
    return Re === Rn && oe !== Kt && (N(pe()), f > 0 && (clearTimeout(ee.current), ee.current = setTimeout(function() {
      P({
        deadline: !0
      });
    }, f))), Re === Xu && ve(), t1;
  }), M = ce(fe, 2), qe = M[0], Re = M[1], at = tf(Re);
  ue.current = at;
  var Tt = $e(null);
  Qu(function() {
    if (!(K.current && Tt.current === t)) {
      $(t);
      var Me = K.current;
      K.current = !0;
      var Ae;
      !Me && t && a && (Ae = Hr), Me && t && i && (Ae = Ur), (Me && !t && u || !Me && d && !t && u) && (Ae = qr);
      var Ge = b(Ae);
      Ae && (n || Ge[vt]) ? (G(Ae), qe()) : G(Kt), Tt.current = t;
    }
  }, [t]), tt(function() {
    // Cancel appear
    (oe === Hr && !a || // Cancel enter
    oe === Ur && !i || // Cancel leave
    oe === qr && !u) && G(Kt);
  }, [a, i, u]), tt(function() {
    return function() {
      K.current = !1, clearTimeout(ee.current);
    };
  }, []);
  var it = _.useRef(!1);
  tt(function() {
    ne && (it.current = !0), ne !== void 0 && oe === Kt && ((it.current || ne) && (j == null || j(ne)), it.current = !0);
  }, [ne, oe]);
  var Ot = J;
  return B[vt] && Re === On && (Ot = V({
    transition: "none"
  }, Ot)), [oe, Re, Ot, ne ?? t];
}
function o1(n) {
  var t = n;
  _e(n) === "object" && (t = n.transitionSupport);
  function e(o, i) {
    return !!(o.motionName && t && i !== !1);
  }
  var r = /* @__PURE__ */ _.forwardRef(function(o, i) {
    var s = o.visible, a = s === void 0 ? !0 : s, c = o.removeOnLeave, u = c === void 0 ? !0 : c, f = o.forceRender, d = o.children, l = o.motionName, v = o.leavedClassName, g = o.eventProps, p = _.useContext(Yu), h = p.motion, E = e(o, h), w = $e(), m = $e();
    function A() {
      try {
        return w.current instanceof HTMLElement ? w.current : _h(m.current);
      } catch {
        return null;
      }
    }
    var y = r1(E, a, A, o), O = ce(y, 4), C = O[0], j = O[1], z = O[2], Y = O[3], ne = _.useRef(Y);
    Y && (ne.current = !0);
    var $ = _.useCallback(function(Z) {
      w.current = Z, $l(i, Z);
    }, [i]), F, W = V(V({}, g), {}, {
      visible: a
    });
    if (!d)
      F = null;
    else if (C === Kt)
      Y ? F = d(V({}, W), $) : !u && ne.current && v ? F = d(V(V({}, W), {}, {
        className: v
      }), $) : f || !u && !v ? F = d(V(V({}, W), {}, {
        style: {
          display: "none"
        }
      }), $) : F = null;
    else {
      var H;
      j === vt ? H = "prepare" : tf(j) ? H = "active" : j === On && (H = "start");
      var G = Tc(l, "".concat(C, "-").concat(H));
      F = d(V(V({}, W), {}, {
        className: Je(Tc(l, C), q(q({}, G, G && H), l, typeof l == "string")),
        style: z
      }), $);
    }
    if (/* @__PURE__ */ _.isValidElement(F) && kh(F)) {
      var Q = Ph(F);
      Q || (F = /* @__PURE__ */ _.cloneElement(F, {
        ref: $
      }));
    }
    return /* @__PURE__ */ _.createElement(Yp, {
      ref: m
    }, F);
  });
  return r.displayName = "CSSMotion", r;
}
const nf = o1(Ju);
var _s = "add", Cs = "keep", As = "remove", Ri = "removed";
function i1(n) {
  var t;
  return n && _e(n) === "object" && "key" in n ? t = n : t = {
    key: n
  }, V(V({}, t), {}, {
    key: String(t.key)
  });
}
function Ts() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return n.map(i1);
}
function s1() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], e = [], r = 0, o = t.length, i = Ts(n), s = Ts(t);
  i.forEach(function(u) {
    for (var f = !1, d = r; d < o; d += 1) {
      var l = s[d];
      if (l.key === u.key) {
        r < d && (e = e.concat(s.slice(r, d).map(function(v) {
          return V(V({}, v), {}, {
            status: _s
          });
        })), r = d), e.push(V(V({}, l), {}, {
          status: Cs
        })), r += 1, f = !0;
        break;
      }
    }
    f || e.push(V(V({}, u), {}, {
      status: As
    }));
  }), r < o && (e = e.concat(s.slice(r).map(function(u) {
    return V(V({}, u), {}, {
      status: _s
    });
  })));
  var a = {};
  e.forEach(function(u) {
    var f = u.key;
    a[f] = (a[f] || 0) + 1;
  });
  var c = Object.keys(a).filter(function(u) {
    return a[u] > 1;
  });
  return c.forEach(function(u) {
    e = e.filter(function(f) {
      var d = f.key, l = f.status;
      return d !== u || l !== As;
    }), e.forEach(function(f) {
      f.key === u && (f.status = Cs);
    });
  }), e;
}
var a1 = ["component", "children", "onVisibleChanged", "onAllRemoved"], c1 = ["status"], l1 = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function u1(n) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : nf, e = /* @__PURE__ */ function(r) {
    _r(i, r);
    var o = Xo(i);
    function i() {
      var s;
      _t(this, i);
      for (var a = arguments.length, c = new Array(a), u = 0; u < a; u++)
        c[u] = arguments[u];
      return s = o.call.apply(o, [this].concat(c)), q(gn(s), "state", {
        keyEntities: []
      }), q(gn(s), "removeKey", function(f) {
        s.setState(function(d) {
          var l = d.keyEntities.map(function(v) {
            return v.key !== f ? v : V(V({}, v), {}, {
              status: Ri
            });
          });
          return {
            keyEntities: l
          };
        }, function() {
          var d = s.state.keyEntities, l = d.filter(function(v) {
            var g = v.status;
            return g !== Ri;
          }).length;
          l === 0 && s.props.onAllRemoved && s.props.onAllRemoved();
        });
      }), s;
    }
    return Ct(i, [{
      key: "render",
      value: function() {
        var a = this, c = this.state.keyEntities, u = this.props, f = u.component, d = u.children, l = u.onVisibleChanged;
        u.onAllRemoved;
        var v = mr(u, a1), g = f || _.Fragment, p = {};
        return l1.forEach(function(h) {
          p[h] = v[h], delete v[h];
        }), delete v.keys, /* @__PURE__ */ _.createElement(g, v, c.map(function(h, E) {
          var w = h.status, m = mr(h, c1), A = w === _s || w === Cs;
          return /* @__PURE__ */ _.createElement(t, Lt({}, p, {
            key: m.key,
            visible: A,
            eventProps: m,
            onVisibleChanged: function(O) {
              l == null || l(O, {
                key: m.key
              }), O || a.removeKey(m.key);
            }
          }), function(y, O) {
            return d(V(V({}, y), {}, {
              index: E
            }), O);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(a, c) {
        var u = a.keys, f = c.keyEntities, d = Ts(u), l = s1(f, d);
        return {
          keyEntities: l.filter(function(v) {
            var g = f.find(function(p) {
              var h = p.key;
              return v.key === h;
            });
            return !(g && g.status === Ri && v.status === As);
          })
        };
      }
    }]), i;
  }(_.Component);
  return q(e, "defaultProps", {
    component: "div"
  }), e;
}
u1(Ju);
function f1(n) {
  const {
    children: t
  } = n, [, e] = ca(), {
    motion: r
  } = e, o = _.useRef(!1);
  return o.current = o.current || r === !1, o.current ? /* @__PURE__ */ _.createElement(Wp, {
    motion: r
  }, t) : t;
}
const rf = /* @__PURE__ */ _.memo((n) => {
  let {
    dropdownMatchSelectWidth: t
  } = n;
  return Gn("ConfigProvider").deprecated(t === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
process.env.NODE_ENV !== "production" && (rf.displayName = "PropWarning");
const d1 = process.env.NODE_ENV !== "production" ? rf : () => null;
var h1 = function(n, t) {
  var e = {};
  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && t.indexOf(r) < 0 && (e[r] = n[r]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(n); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(n, r[o]) && (e[r[o]] = n[r[o]]);
  return e;
};
let Os = !1;
process.env.NODE_ENV;
const x1 = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let of;
function p1() {
  return of || ys;
}
function m1(n) {
  return Object.keys(n).some((t) => t.endsWith("Color"));
}
const g1 = (n) => {
  const {
    prefixCls: t,
    iconPrefixCls: e,
    theme: r,
    holderRender: o
  } = n;
  t !== void 0 && (of = t), r && m1(r) && (process.env.NODE_ENV !== "production" && Jo(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), mp(p1(), r));
}, v1 = (n) => {
  const {
    children: t,
    csp: e,
    autoInsertSpaceInButton: r,
    alert: o,
    anchor: i,
    form: s,
    locale: a,
    componentSize: c,
    direction: u,
    space: f,
    splitter: d,
    virtual: l,
    dropdownMatchSelectWidth: v,
    popupMatchSelectWidth: g,
    popupOverflow: p,
    legacyLocale: h,
    parentContext: E,
    iconPrefixCls: w,
    theme: m,
    componentDisabled: A,
    segmented: y,
    statistic: O,
    spin: C,
    calendar: j,
    carousel: z,
    cascader: Y,
    collapse: ne,
    typography: $,
    checkbox: F,
    descriptions: W,
    divider: H,
    drawer: G,
    skeleton: Q,
    steps: Z,
    image: J,
    layout: re,
    list: oe,
    mentions: K,
    modal: ee,
    progress: pe,
    result: ue,
    slider: ve,
    breadcrumb: P,
    menu: L,
    pagination: R,
    input: N,
    textArea: b,
    empty: B,
    badge: fe,
    radio: M,
    rate: qe,
    switch: Re,
    transfer: at,
    avatar: Tt,
    message: it,
    tag: Ot,
    table: Me,
    card: Ae,
    tabs: Ge,
    timeline: mt,
    timePicker: ct,
    upload: on,
    notification: sn,
    tree: En,
    colorPicker: an,
    datePicker: k,
    rangePicker: S,
    flex: me,
    wave: de,
    dropdown: he,
    warning: ie,
    tour: Oe,
    tooltip: We,
    popover: lt,
    popconfirm: _n,
    floatButtonGroup: Rt,
    variant: Dt,
    inputNumber: Bt,
    treeSelect: Wt
  } = n, Yt = _.useCallback((Pe, x) => {
    const {
      prefixCls: I
    } = n;
    if (x)
      return x;
    const D = I || E.getPrefixCls("");
    return Pe ? `${D}-${Pe}` : D;
  }, [E.getPrefixCls, n.prefixCls]), ye = w || E.iconPrefixCls || aa, Le = e || E.csp;
  Fp(ye, Le);
  const ut = Up(m, E.theme, {
    prefixCls: Yt("")
  });
  process.env.NODE_ENV !== "production" && (Os = Os || !!ut);
  const ft = {
    csp: Le,
    autoInsertSpaceInButton: r,
    alert: o,
    anchor: i,
    locale: a || h,
    direction: u,
    space: f,
    splitter: d,
    virtual: l,
    popupMatchSelectWidth: g ?? v,
    popupOverflow: p,
    getPrefixCls: Yt,
    iconPrefixCls: ye,
    theme: ut,
    segmented: y,
    statistic: O,
    spin: C,
    calendar: j,
    carousel: z,
    cascader: Y,
    collapse: ne,
    typography: $,
    checkbox: F,
    descriptions: W,
    divider: H,
    drawer: G,
    skeleton: Q,
    steps: Z,
    image: J,
    input: N,
    textArea: b,
    layout: re,
    list: oe,
    mentions: K,
    modal: ee,
    progress: pe,
    result: ue,
    slider: ve,
    breadcrumb: P,
    menu: L,
    pagination: R,
    empty: B,
    badge: fe,
    radio: M,
    rate: qe,
    switch: Re,
    transfer: at,
    avatar: Tt,
    message: it,
    tag: Ot,
    table: Me,
    card: Ae,
    tabs: Ge,
    timeline: mt,
    timePicker: ct,
    upload: on,
    notification: sn,
    tree: En,
    colorPicker: an,
    datePicker: k,
    rangePicker: S,
    flex: me,
    wave: de,
    dropdown: he,
    warning: ie,
    tour: Oe,
    tooltip: We,
    popover: lt,
    popconfirm: _n,
    floatButtonGroup: Rt,
    variant: Dt,
    inputNumber: Bt,
    treeSelect: Wt
  };
  process.env.NODE_ENV !== "production" && Gn("ConfigProvider")(!("autoInsertSpaceInButton" in n), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const Xt = Object.assign({}, E);
  Object.keys(ft).forEach((Pe) => {
    ft[Pe] !== void 0 && (Xt[Pe] = ft[Pe]);
  }), x1.forEach((Pe) => {
    const x = n[Pe];
    x && (Xt[Pe] = x);
  }), typeof r < "u" && (Xt.button = Object.assign({
    autoInsertSpace: r
  }, Xt.button));
  const $t = Xl(() => Xt, Xt, (Pe, x) => {
    const I = Object.keys(Pe), D = Object.keys(x);
    return I.length !== D.length || I.some((X) => Pe[X] !== x[X]);
  }), {
    layer: er
  } = _.useContext(Cr), Or = _.useMemo(() => ({
    prefixCls: ye,
    csp: Le,
    layer: er ? "antd" : void 0
  }), [ye, Le, er]);
  let Ue = /* @__PURE__ */ _.createElement(_.Fragment, null, /* @__PURE__ */ _.createElement(d1, {
    dropdownMatchSelectWidth: v
  }), t);
  const Rr = _.useMemo(() => {
    var Pe, x, I, D;
    return $x(((Pe = Qo.Form) === null || Pe === void 0 ? void 0 : Pe.defaultValidateMessages) || {}, ((I = (x = $t.locale) === null || x === void 0 ? void 0 : x.Form) === null || I === void 0 ? void 0 : I.defaultValidateMessages) || {}, ((D = $t.form) === null || D === void 0 ? void 0 : D.validateMessages) || {}, (s == null ? void 0 : s.validateMessages) || {});
  }, [$t, s == null ? void 0 : s.validateMessages]);
  Object.keys(Rr).length > 0 && (Ue = /* @__PURE__ */ _.createElement(Kx.Provider, {
    value: Rr
  }, Ue)), a && (Ue = /* @__PURE__ */ _.createElement(Pu, {
    locale: a,
    _ANT_MARK__: ku
  }, Ue)), Ue = /* @__PURE__ */ _.createElement(ia.Provider, {
    value: Or
  }, Ue), c && (Ue = /* @__PURE__ */ _.createElement(vp, {
    size: c
  }, Ue)), Ue = /* @__PURE__ */ _.createElement(f1, null, Ue);
  const li = _.useMemo(() => {
    const Pe = ut || {}, {
      algorithm: x,
      token: I,
      components: D,
      cssVar: X
    } = Pe, ge = h1(Pe, ["algorithm", "token", "components", "cssVar"]), be = x && (!Array.isArray(x) || x.length > 0) ? Qi(x) : Mu, le = {};
    Object.entries(D || {}).forEach((Ke) => {
      let [ke, Ie] = Ke;
      const Ne = Object.assign({}, Ie);
      "algorithm" in Ne && (Ne.algorithm === !0 ? Ne.theme = be : (Array.isArray(Ne.algorithm) || typeof Ne.algorithm == "function") && (Ne.theme = Qi(Ne.algorithm)), delete Ne.algorithm), le[ke] = Ne;
    });
    const ae = Object.assign(Object.assign({}, vr), I);
    return Object.assign(Object.assign({}, ge), {
      theme: be,
      token: ae,
      components: le,
      override: Object.assign({
        override: ae
      }, le),
      cssVar: X
    });
  }, [ut]);
  return m && (Ue = /* @__PURE__ */ _.createElement(Lu.Provider, {
    value: li
  }, Ue)), $t.warning && (Ue = /* @__PURE__ */ _.createElement(Ou.Provider, {
    value: $t.warning
  }, Ue)), A !== void 0 && (Ue = /* @__PURE__ */ _.createElement(gp, {
    disabled: A
  }, Ue)), /* @__PURE__ */ _.createElement(tn.Provider, {
    value: $t
  }, Ue);
}, Kn = (n) => {
  const t = _.useContext(tn), e = _.useContext(Ru);
  return /* @__PURE__ */ _.createElement(v1, Object.assign({
    parentContext: t,
    legacyLocale: e
  }, n));
};
Kn.ConfigContext = tn;
Kn.SizeContext = br;
Kn.config = g1;
Kn.useConfig = yp;
Object.defineProperty(Kn, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && Jo(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), br)
});
process.env.NODE_ENV !== "production" && (Kn.displayName = "ConfigProvider");
var y1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
function sf(n) {
  var t;
  return n == null || (t = n.getRootNode) === null || t === void 0 ? void 0 : t.call(n);
}
function b1(n) {
  return sf(n) instanceof ShadowRoot;
}
function S1(n) {
  return b1(n) ? sf(n) : null;
}
function w1(n) {
  return n.replace(/-(.)/g, function(t, e) {
    return e.toUpperCase();
  });
}
function E1(n, t) {
  nn(n, "[@ant-design/icons] ".concat(t));
}
function Oc(n) {
  return _e(n) === "object" && typeof n.name == "string" && typeof n.theme == "string" && (_e(n.icon) === "object" || typeof n.icon == "function");
}
function Rc() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(n).reduce(function(t, e) {
    var r = n[e];
    switch (e) {
      case "class":
        t.className = r, delete t.class;
        break;
      default:
        delete t[e], t[w1(e)] = r;
    }
    return t;
  }, {});
}
function Rs(n, t, e) {
  return e ? /* @__PURE__ */ Fe.createElement(n.tag, V(V({
    key: t
  }, Rc(n.attrs)), e), (n.children || []).map(function(r, o) {
    return Rs(r, "".concat(t, "-").concat(n.tag, "-").concat(o));
  })) : /* @__PURE__ */ Fe.createElement(n.tag, V({
    key: t
  }, Rc(n.attrs)), (n.children || []).map(function(r, o) {
    return Rs(r, "".concat(t, "-").concat(n.tag, "-").concat(o));
  }));
}
function af(n) {
  return yr(n)[0];
}
function cf(n) {
  return n ? Array.isArray(n) ? n : [n] : [];
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
`, C1 = function(t) {
  var e = en(ia), r = e.csp, o = e.prefixCls, i = e.layer, s = _1;
  o && (s = s.replace(/anticon/g, o)), i && (s = "@layer ".concat(i, ` {
`).concat(s, `
}`)), tt(function() {
    var a = t.current, c = S1(a);
    vn(s, "@ant-design-icons", {
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
function T1(n) {
  var t = n.primaryColor, e = n.secondaryColor;
  hr.primaryColor = t, hr.secondaryColor = e || af(t), hr.calculated = !!e;
}
function O1() {
  return V({}, hr);
}
var Zn = function(t) {
  var e = t.icon, r = t.className, o = t.onClick, i = t.style, s = t.primaryColor, a = t.secondaryColor, c = mr(t, A1), u = _.useRef(), f = hr;
  if (s && (f = {
    primaryColor: s,
    secondaryColor: a || af(s)
  }), C1(u), E1(Oc(e), "icon should be icon definiton, but got ".concat(e)), !Oc(e))
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
    ref: u
  }));
};
Zn.displayName = "IconReact";
Zn.getTwoToneColors = O1;
Zn.setTwoToneColors = T1;
function lf(n) {
  var t = cf(n), e = ce(t, 2), r = e[0], o = e[1];
  return Zn.setTwoToneColors({
    primaryColor: r,
    secondaryColor: o
  });
}
function R1() {
  var n = Zn.getTwoToneColors();
  return n.calculated ? [n.primaryColor, n.secondaryColor] : n.primaryColor;
}
var k1 = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
lf(Eo.primary);
var rn = /* @__PURE__ */ _.forwardRef(function(n, t) {
  var e = n.className, r = n.icon, o = n.spin, i = n.rotate, s = n.tabIndex, a = n.onClick, c = n.twoToneColor, u = mr(n, k1), f = _.useContext(ia), d = f.prefixCls, l = d === void 0 ? "anticon" : d, v = f.rootClassName, g = Je(v, l, q(q({}, "".concat(l, "-").concat(r.name), !!r.name), "".concat(l, "-spin"), !!o || r.name === "loading"), e), p = s;
  p === void 0 && a && (p = -1);
  var h = i ? {
    msTransform: "rotate(".concat(i, "deg)"),
    transform: "rotate(".concat(i, "deg)")
  } : void 0, E = cf(c), w = ce(E, 2), m = w[0], A = w[1];
  return /* @__PURE__ */ _.createElement("span", Lt({
    role: "img",
    "aria-label": r.name
  }, u, {
    ref: t,
    tabIndex: p,
    onClick: a,
    className: g
  }), /* @__PURE__ */ _.createElement(Zn, {
    icon: r,
    primaryColor: m,
    secondaryColor: A,
    style: h
  }));
});
rn.displayName = "AntdIcon";
rn.getTwoToneColor = R1;
rn.setTwoToneColor = lf;
var P1 = function(t, e) {
  return /* @__PURE__ */ _.createElement(rn, Lt({}, t, {
    ref: e,
    icon: y1
  }));
}, uf = /* @__PURE__ */ _.forwardRef(P1);
process.env.NODE_ENV !== "production" && (uf.displayName = "CheckCircleFilled");
var I1 = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, N1 = function(t, e) {
  return /* @__PURE__ */ _.createElement(rn, Lt({}, t, {
    ref: e,
    icon: I1
  }));
}, ff = /* @__PURE__ */ _.forwardRef(N1);
process.env.NODE_ENV !== "production" && (ff.displayName = "CloseCircleFilled");
var j1 = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, M1 = function(t, e) {
  return /* @__PURE__ */ _.createElement(rn, Lt({}, t, {
    ref: e,
    icon: j1
  }));
}, df = /* @__PURE__ */ _.forwardRef(M1);
process.env.NODE_ENV !== "production" && (df.displayName = "CloseOutlined");
var L1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" }, D1 = function(t, e) {
  return /* @__PURE__ */ _.createElement(rn, Lt({}, t, {
    ref: e,
    icon: L1
  }));
}, hf = /* @__PURE__ */ _.forwardRef(D1);
process.env.NODE_ENV !== "production" && (hf.displayName = "ExclamationCircleFilled");
var B1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" }, F1 = function(t, e) {
  return /* @__PURE__ */ _.createElement(rn, Lt({}, t, {
    ref: e,
    icon: B1
  }));
}, xf = /* @__PURE__ */ _.forwardRef(F1);
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
function kc(n, t) {
  return n.indexOf(t) === 0;
}
function W1(n) {
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
    (e.aria && (o === "role" || kc(o, U1)) || // Data
    e.data && kc(o, q1) || // Attr
    e.attr && H1.includes(o)) && (r[o] = n[o]);
  }), r;
}
const pf = (n, t, e) => /* @__PURE__ */ Fe.isValidElement(n) ? /* @__PURE__ */ Fe.cloneElement(n, typeof e == "function" ? e(n.props || {}) : e) : t;
function Y1(n, t) {
  return pf(n, n, t);
}
const Yr = (n, t, e, r, o) => ({
  background: n,
  border: `${So(r.lineWidth)} ${r.lineType} ${t}`,
  [`${o}-icon`]: {
    color: e
  }
}), X1 = (n) => {
  const {
    componentCls: t,
    motionDurationSlow: e,
    marginXS: r,
    marginSM: o,
    fontSize: i,
    fontSizeLG: s,
    lineHeight: a,
    borderRadiusLG: c,
    motionEaseInOutCirc: u,
    withDescriptionIconSize: f,
    colorText: d,
    colorTextHeading: l,
    withDescriptionPadding: v,
    defaultPadding: g
  } = n;
  return {
    [t]: Object.assign(Object.assign({}, qu(n)), {
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
        color: l
      },
      [`&${t}-motion-leave`]: {
        overflow: "hidden",
        opacity: 1,
        transition: `max-height ${e} ${u}, opacity ${e} ${u},
        padding-top ${e} ${u}, padding-bottom ${e} ${u},
        margin-bottom ${e} ${u}`
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
        color: l,
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
}, $1 = (n) => {
  const {
    componentCls: t,
    colorSuccess: e,
    colorSuccessBorder: r,
    colorSuccessBg: o,
    colorWarning: i,
    colorWarningBorder: s,
    colorWarningBg: a,
    colorError: c,
    colorErrorBorder: u,
    colorErrorBg: f,
    colorInfo: d,
    colorInfoBorder: l,
    colorInfoBg: v
  } = n;
  return {
    [t]: {
      "&-success": Yr(o, r, e, n, t),
      "&-info": Yr(v, l, d, n, t),
      "&-warning": Yr(a, s, i, n, t),
      "&-error": Object.assign(Object.assign({}, Yr(f, u, c, n, t)), {
        [`${t}-description > pre`]: {
          margin: 0,
          padding: 0
        }
      })
    }
  };
}, G1 = (n) => {
  const {
    componentCls: t,
    iconCls: e,
    motionDurationMid: r,
    marginXS: o,
    fontSizeIcon: i,
    colorIcon: s,
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
        fontSize: i,
        lineHeight: So(i),
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
}, K1 = (n) => ({
  withDescriptionIconSize: n.fontSizeHeading3,
  defaultPadding: `${n.paddingContentVerticalSM}px 12px`,
  withDescriptionPadding: `${n.paddingMD}px ${n.paddingContentHorizontalLG}px`
}), Z1 = la("Alert", (n) => [X1(n), $1(n), G1(n)], K1);
var Pc = function(n, t) {
  var e = {};
  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && t.indexOf(r) < 0 && (e[r] = n[r]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(n); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(n, r[o]) && (e[r[o]] = n[r[o]]);
  return e;
};
const J1 = {
  success: uf,
  info: xf,
  error: ff,
  warning: hf
}, Q1 = (n) => {
  const {
    icon: t,
    prefixCls: e,
    type: r
  } = n, o = J1[r] || null;
  return t ? pf(t, /* @__PURE__ */ _.createElement("span", {
    className: `${e}-icon`
  }, t), () => ({
    className: Je(`${e}-icon`, t.props.className)
  })) : /* @__PURE__ */ _.createElement(o, {
    className: `${e}-icon`
  });
}, em = (n) => {
  const {
    isClosable: t,
    prefixCls: e,
    closeIcon: r,
    handleClose: o,
    ariaProps: i
  } = n, s = r === !0 || r === void 0 ? /* @__PURE__ */ _.createElement(df, null) : r;
  return t ? /* @__PURE__ */ _.createElement("button", Object.assign({
    type: "button",
    onClick: o,
    className: `${e}-close-icon`,
    tabIndex: 0
  }, i), s) : null;
}, fa = /* @__PURE__ */ _.forwardRef((n, t) => {
  const {
    description: e,
    prefixCls: r,
    message: o,
    banner: i,
    className: s,
    rootClassName: a,
    style: c,
    onMouseEnter: u,
    onMouseLeave: f,
    onClick: d,
    afterClose: l,
    showIcon: v,
    closable: g,
    closeText: p,
    closeIcon: h,
    action: E,
    id: w
  } = n, m = Pc(n, ["description", "prefixCls", "message", "banner", "className", "rootClassName", "style", "onMouseEnter", "onMouseLeave", "onClick", "afterClose", "showIcon", "closable", "closeText", "closeIcon", "action", "id"]), [A, y] = _.useState(!1);
  process.env.NODE_ENV !== "production" && Gn("Alert").deprecated(!p, "closeText", "closable.closeIcon");
  const O = _.useRef(null);
  _.useImperativeHandle(t, () => ({
    nativeElement: O.current
  }));
  const {
    getPrefixCls: C,
    direction: j,
    closable: z,
    closeIcon: Y,
    className: ne,
    style: $
  } = Du("alert"), F = C("alert", r), [W, H, G] = Z1(F), Q = (ue) => {
    var ve;
    y(!0), (ve = n.onClose) === null || ve === void 0 || ve.call(n, ue);
  }, Z = _.useMemo(() => n.type !== void 0 ? n.type : i ? "warning" : "info", [n.type, i]), J = _.useMemo(() => typeof g == "object" && g.closeIcon || p ? !0 : typeof g == "boolean" ? g : h !== !1 && h !== null && h !== void 0 ? !0 : !!z, [p, h, g, z]), re = i && v === void 0 ? !0 : v, oe = Je(F, `${F}-${Z}`, {
    [`${F}-with-description`]: !!e,
    [`${F}-no-icon`]: !re,
    [`${F}-banner`]: !!i,
    [`${F}-rtl`]: j === "rtl"
  }, ne, s, a, G, H), K = W1(m, {
    aria: !0,
    data: !0
  }), ee = _.useMemo(() => typeof g == "object" && g.closeIcon ? g.closeIcon : p || (h !== void 0 ? h : typeof z == "object" && z.closeIcon ? z.closeIcon : Y), [h, g, p, Y]), pe = _.useMemo(() => {
    const ue = g ?? z;
    if (typeof ue == "object") {
      const {
        closeIcon: ve
      } = ue;
      return Pc(ue, ["closeIcon"]);
    }
    return {};
  }, [g, z]);
  return W(/* @__PURE__ */ _.createElement(nf, {
    visible: !A,
    motionName: `${F}-motion`,
    motionAppear: !1,
    motionEnter: !1,
    onLeaveStart: (ue) => ({
      maxHeight: ue.offsetHeight
    }),
    onLeaveEnd: l
  }, (ue, ve) => {
    let {
      className: P,
      style: L
    } = ue;
    return /* @__PURE__ */ _.createElement("div", Object.assign({
      id: w,
      ref: Rh(O, ve),
      "data-show": !A,
      className: Je(oe, P),
      style: Object.assign(Object.assign(Object.assign({}, $), c), L),
      onMouseEnter: u,
      onMouseLeave: f,
      onClick: d,
      role: "alert"
    }, K), re ? /* @__PURE__ */ _.createElement(Q1, {
      description: e,
      icon: n.icon,
      prefixCls: F,
      type: Z
    }) : null, /* @__PURE__ */ _.createElement("div", {
      className: `${F}-content`
    }, o ? /* @__PURE__ */ _.createElement("div", {
      className: `${F}-message`
    }, o) : null, e ? /* @__PURE__ */ _.createElement("div", {
      className: `${F}-description`
    }, e) : null), E ? /* @__PURE__ */ _.createElement("div", {
      className: `${F}-action`
    }, E) : null, /* @__PURE__ */ _.createElement(em, {
      isClosable: J,
      prefixCls: F,
      closeIcon: ee,
      handleClose: Q,
      ariaProps: pe
    }));
  }));
});
process.env.NODE_ENV !== "production" && (fa.displayName = "Alert");
function tm(n, t, e) {
  return t = Fn(t), Kl(n, Js() ? Reflect.construct(t, e || [], Fn(n).constructor) : t.apply(n, e));
}
let nm = /* @__PURE__ */ function(n) {
  function t() {
    var e;
    return _t(this, t), e = tm(this, t, arguments), e.state = {
      error: void 0,
      info: {
        componentStack: ""
      }
    }, e;
  }
  return _r(t, n), Ct(t, [{
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
      } = this.state, u = (c == null ? void 0 : c.componentStack) || null, f = typeof r > "u" ? (a || "").toString() : r, d = typeof o > "u" ? u : o;
      return a ? /* @__PURE__ */ _.createElement(fa, {
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
const mf = fa;
mf.ErrorBoundary = nm;
function rm(n, t) {
  var e = Object.assign({}, n);
  return Array.isArray(t) && t.forEach(function(r) {
    delete e[r];
  }), e;
}
function om(n, t, e) {
  var r = e || {}, o = r.noTrailing, i = o === void 0 ? !1 : o, s = r.noLeading, a = s === void 0 ? !1 : s, c = r.debounceMode, u = c === void 0 ? void 0 : c, f, d = !1, l = 0;
  function v() {
    f && clearTimeout(f);
  }
  function g(h) {
    var E = h || {}, w = E.upcomingOnly, m = w === void 0 ? !1 : w;
    v(), d = !m;
  }
  function p() {
    for (var h = arguments.length, E = new Array(h), w = 0; w < h; w++)
      E[w] = arguments[w];
    var m = this, A = Date.now() - l;
    if (d)
      return;
    function y() {
      l = Date.now(), t.apply(m, E);
    }
    function O() {
      f = void 0;
    }
    !a && u && !f && y(), v(), u === void 0 && A > n ? a ? (l = Date.now(), i || (f = setTimeout(u ? O : y, n))) : y() : i !== !0 && (f = setTimeout(u ? O : y, u === void 0 ? n - A : n));
  }
  return p.cancel = g, p;
}
function im(n, t, e) {
  var r = {}, o = r.atBegin, i = o === void 0 ? !1 : o;
  return om(n, t, {
    debounceMode: i !== !1
  });
}
function Ic(n) {
  return ["small", "middle", "large"].includes(n);
}
const gf = ["wrap", "nowrap", "wrap-reverse"], vf = ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around", "space-evenly", "stretch", "normal", "left", "right"], yf = ["center", "start", "end", "flex-start", "flex-end", "self-start", "self-end", "baseline", "normal", "stretch"], sm = (n, t) => {
  const e = t.wrap === !0 ? "wrap" : t.wrap;
  return {
    [`${n}-wrap-${e}`]: e && gf.includes(e)
  };
}, am = (n, t) => {
  const e = {};
  return yf.forEach((r) => {
    e[`${n}-align-${r}`] = t.align === r;
  }), e[`${n}-align-stretch`] = !t.align && !!t.vertical, e;
}, cm = (n, t) => {
  const e = {};
  return vf.forEach((r) => {
    e[`${n}-justify-${r}`] = t.justify === r;
  }), e;
};
function lm(n, t) {
  return Je(Object.assign(Object.assign(Object.assign({}, sm(n, t)), am(n, t)), cm(n, t)));
}
const um = (n) => {
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
}, fm = (n) => {
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
}, dm = (n) => {
  const {
    componentCls: t
  } = n, e = {};
  return gf.forEach((r) => {
    e[`${t}-wrap-${r}`] = {
      flexWrap: r
    };
  }), e;
}, hm = (n) => {
  const {
    componentCls: t
  } = n, e = {};
  return yf.forEach((r) => {
    e[`${t}-align-${r}`] = {
      alignItems: r
    };
  }), e;
}, xm = (n) => {
  const {
    componentCls: t
  } = n, e = {};
  return vf.forEach((r) => {
    e[`${t}-justify-${r}`] = {
      justifyContent: r
    };
  }), e;
}, pm = () => ({}), mm = la("Flex", (n) => {
  const {
    paddingXS: t,
    padding: e,
    paddingLG: r
  } = n, o = ei(n, {
    flexGapSM: t,
    flexGap: e,
    flexGapLG: r
  });
  return [um(o), fm(o), dm(o), hm(o), xm(o)];
}, pm, {
  // Flex component don't apply extra font style
  // https://github.com/ant-design/ant-design/issues/46403
  resetStyle: !1
});
var gm = function(n, t) {
  var e = {};
  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && t.indexOf(r) < 0 && (e[r] = n[r]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(n); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(n, r[o]) && (e[r[o]] = n[r[o]]);
  return e;
};
const bf = /* @__PURE__ */ Fe.forwardRef((n, t) => {
  const {
    prefixCls: e,
    rootClassName: r,
    className: o,
    style: i,
    flex: s,
    gap: a,
    children: c,
    vertical: u = !1,
    component: f = "div"
  } = n, d = gm(n, ["prefixCls", "rootClassName", "className", "style", "flex", "gap", "children", "vertical", "component"]), {
    flex: l,
    direction: v,
    getPrefixCls: g
  } = Fe.useContext(tn), p = g("flex", e), [h, E, w] = mm(p), m = u ?? (l == null ? void 0 : l.vertical), A = Je(o, r, l == null ? void 0 : l.className, p, E, w, lm(p, n), {
    [`${p}-rtl`]: v === "rtl",
    [`${p}-gap-${a}`]: Ic(a),
    [`${p}-vertical`]: m
  }), y = Object.assign(Object.assign({}, l == null ? void 0 : l.style), i);
  return s && (y.flex = s), a && !Ic(a) && (y.gap = a), h(/* @__PURE__ */ Fe.createElement(f, Object.assign({
    ref: t,
    className: A,
    style: y
  }, rm(d, ["justify", "wrap", "align"])), c));
});
process.env.NODE_ENV !== "production" && (bf.displayName = "Flex");
const _o = 100, Sf = _o / 5, wf = _o / 2 - Sf / 2, ki = wf * 2 * Math.PI, Nc = 50, jc = (n) => {
  const {
    dotClassName: t,
    style: e,
    hasCircleCls: r
  } = n;
  return /* @__PURE__ */ _.createElement("circle", {
    className: Je(`${t}-circle`, {
      [`${t}-circle-bg`]: r
    }),
    r: wf,
    cx: Nc,
    cy: Nc,
    strokeWidth: Sf,
    style: e
  });
}, vm = (n) => {
  let {
    percent: t,
    prefixCls: e
  } = n;
  const r = `${e}-dot`, o = `${r}-holder`, i = `${o}-hidden`, [s, a] = _.useState(!1);
  lu(() => {
    t !== 0 && a(!0);
  }, [t !== 0]);
  const c = Math.max(Math.min(t, 100), 0);
  if (!s)
    return null;
  const u = {
    strokeDashoffset: `${ki / 4}`,
    strokeDasharray: `${ki * c / 100} ${ki * (100 - c) / 100}`
  };
  return /* @__PURE__ */ _.createElement("span", {
    className: Je(o, `${r}-progress`, c <= 0 && i)
  }, /* @__PURE__ */ _.createElement("svg", {
    viewBox: `0 0 ${_o} ${_o}`,
    // biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole: progressbar could be readonly
    role: "progressbar",
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": c
  }, /* @__PURE__ */ _.createElement(jc, {
    dotClassName: r,
    hasCircleCls: !0
  }), /* @__PURE__ */ _.createElement(jc, {
    dotClassName: r,
    style: u
  })));
};
function ym(n) {
  const {
    prefixCls: t,
    percent: e = 0
  } = n, r = `${t}-dot`, o = `${r}-holder`, i = `${o}-hidden`;
  return /* @__PURE__ */ _.createElement(_.Fragment, null, /* @__PURE__ */ _.createElement("span", {
    className: Je(o, e > 0 && i)
  }, /* @__PURE__ */ _.createElement("span", {
    className: Je(r, `${t}-dot-spin`)
  }, [1, 2, 3, 4].map((s) => /* @__PURE__ */ _.createElement("i", {
    className: `${t}-dot-item`,
    key: s
  })))), /* @__PURE__ */ _.createElement(vm, {
    prefixCls: t,
    percent: e
  }));
}
function bm(n) {
  const {
    prefixCls: t,
    indicator: e,
    percent: r
  } = n, o = `${t}-dot`;
  return e && /* @__PURE__ */ _.isValidElement(e) ? Y1(e, {
    className: Je(e.props.className, o),
    percent: r
  }) : /* @__PURE__ */ _.createElement(ym, {
    prefixCls: t,
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
}), Em = (n) => {
  const {
    componentCls: t,
    calc: e
  } = n;
  return {
    [t]: Object.assign(Object.assign({}, qu(n)), {
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
}, _m = (n) => {
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
}, Cm = la("Spin", (n) => {
  const t = ei(n, {
    spinDotDefault: n.colorTextDescription
  });
  return [Em(t)];
}, _m), Am = 200, Mc = [[30, 0.05], [70, 0.03], [96, 0.01]];
function Tm(n, t) {
  const [e, r] = _.useState(0), o = _.useRef(null), i = t === "auto";
  return _.useEffect(() => (i && n && (r(0), o.current = setInterval(() => {
    r((s) => {
      const a = 100 - s;
      for (let c = 0; c < Mc.length; c += 1) {
        const [u, f] = Mc[c];
        if (s <= u)
          return s + a * f;
      }
      return s;
    });
  }, Am)), () => {
    clearInterval(o.current);
  }), [i, n]), i ? e : t;
}
var Om = function(n, t) {
  var e = {};
  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && t.indexOf(r) < 0 && (e[r] = n[r]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(n); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(n, r[o]) && (e[r[o]] = n[r[o]]);
  return e;
};
let Ef;
function Rm(n, t) {
  return !!n && !!t && !Number.isNaN(Number(t));
}
const xr = (n) => {
  var t;
  const {
    prefixCls: e,
    spinning: r = !0,
    delay: o = 0,
    className: i,
    rootClassName: s,
    size: a = "default",
    tip: c,
    wrapperClassName: u,
    style: f,
    children: d,
    fullscreen: l = !1,
    indicator: v,
    percent: g
  } = n, p = Om(n, ["prefixCls", "spinning", "delay", "className", "rootClassName", "size", "tip", "wrapperClassName", "style", "children", "fullscreen", "indicator", "percent"]), {
    getPrefixCls: h,
    direction: E,
    className: w,
    style: m,
    indicator: A
  } = Du("spin"), y = h("spin", e), [O, C, j] = Cm(y), [z, Y] = _.useState(() => r && !Rm(r, o)), ne = Tm(z, g);
  _.useEffect(() => {
    if (r) {
      const Z = im(o, () => {
        Y(!0);
      });
      return Z(), () => {
        var J;
        (J = Z == null ? void 0 : Z.cancel) === null || J === void 0 || J.call(Z);
      };
    }
    Y(!1);
  }, [o, r]);
  const $ = _.useMemo(() => typeof d < "u" && !l, [d, l]);
  if (process.env.NODE_ENV !== "production") {
    const Z = Gn("Spin");
    process.env.NODE_ENV !== "production" && Z(!c || $ || l, "usage", "`tip` only work in nest or fullscreen pattern.");
  }
  const F = Je(y, w, {
    [`${y}-sm`]: a === "small",
    [`${y}-lg`]: a === "large",
    [`${y}-spinning`]: z,
    [`${y}-show-text`]: !!c,
    [`${y}-rtl`]: E === "rtl"
  }, i, !l && s, C, j), W = Je(`${y}-container`, {
    [`${y}-blur`]: z
  }), H = (t = v ?? A) !== null && t !== void 0 ? t : Ef, G = Object.assign(Object.assign({}, m), f), Q = /* @__PURE__ */ _.createElement("div", Object.assign({}, p, {
    style: G,
    className: F,
    "aria-live": "polite",
    "aria-busy": z
  }), /* @__PURE__ */ _.createElement(bm, {
    prefixCls: y,
    indicator: H,
    percent: ne
  }), c && ($ || l) ? /* @__PURE__ */ _.createElement("div", {
    className: `${y}-text`
  }, c) : null);
  return O($ ? /* @__PURE__ */ _.createElement("div", Object.assign({}, p, {
    className: Je(`${y}-nested-loading`, u, C, j)
  }), z && /* @__PURE__ */ _.createElement("div", {
    key: "loading"
  }, Q), /* @__PURE__ */ _.createElement("div", {
    className: W,
    key: "container"
  }, d)) : l ? /* @__PURE__ */ _.createElement("div", {
    className: Je(`${y}-fullscreen`, {
      [`${y}-fullscreen-show`]: z
    }, s, C, j)
  }, Q) : Q);
};
xr.setDefaultIndicator = (n) => {
  Ef = n;
};
process.env.NODE_ENV !== "production" && (xr.displayName = "Spin");
function _f(n, t) {
  return function() {
    return n.apply(t, arguments);
  };
}
const { toString: km } = Object.prototype, { getPrototypeOf: da } = Object, { iterator: ti, toStringTag: Cf } = Symbol, ni = /* @__PURE__ */ ((n) => (t) => {
  const e = km.call(t);
  return n[e] || (n[e] = e.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), At = (n) => (n = n.toLowerCase(), (t) => ni(t) === n), ri = (n) => (t) => typeof t === n, { isArray: Jn } = Array, Sr = ri("undefined");
function Pm(n) {
  return n !== null && !Sr(n) && n.constructor !== null && !Sr(n.constructor) && rt(n.constructor.isBuffer) && n.constructor.isBuffer(n);
}
const Af = At("ArrayBuffer");
function Im(n) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(n) : t = n && n.buffer && Af(n.buffer), t;
}
const Nm = ri("string"), rt = ri("function"), Tf = ri("number"), oi = (n) => n !== null && typeof n == "object", jm = (n) => n === !0 || n === !1, lo = (n) => {
  if (ni(n) !== "object")
    return !1;
  const t = da(n);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Cf in n) && !(ti in n);
}, Mm = At("Date"), Lm = At("File"), Dm = At("Blob"), Bm = At("FileList"), Fm = (n) => oi(n) && rt(n.pipe), zm = (n) => {
  let t;
  return n && (typeof FormData == "function" && n instanceof FormData || rt(n.append) && ((t = ni(n)) === "formdata" || // detect form-data instance
  t === "object" && rt(n.toString) && n.toString() === "[object FormData]"));
}, Vm = At("URLSearchParams"), [Hm, Um, qm, Wm] = ["ReadableStream", "Request", "Response", "Headers"].map(At), Ym = (n) => n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ar(n, t, { allOwnKeys: e = !1 } = {}) {
  if (n === null || typeof n > "u")
    return;
  let r, o;
  if (typeof n != "object" && (n = [n]), Jn(n))
    for (r = 0, o = n.length; r < o; r++)
      t.call(null, n[r], r, n);
  else {
    const i = e ? Object.getOwnPropertyNames(n) : Object.keys(n), s = i.length;
    let a;
    for (r = 0; r < s; r++)
      a = i[r], t.call(null, n[a], a, n);
  }
}
function Of(n, t) {
  t = t.toLowerCase();
  const e = Object.keys(n);
  let r = e.length, o;
  for (; r-- > 0; )
    if (o = e[r], t === o.toLowerCase())
      return o;
  return null;
}
const hn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Rf = (n) => !Sr(n) && n !== hn;
function ks() {
  const { caseless: n } = Rf(this) && this || {}, t = {}, e = (r, o) => {
    const i = n && Of(t, o) || o;
    lo(t[i]) && lo(r) ? t[i] = ks(t[i], r) : lo(r) ? t[i] = ks({}, r) : Jn(r) ? t[i] = r.slice() : t[i] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Ar(arguments[r], e);
  return t;
}
const Xm = (n, t, e, { allOwnKeys: r } = {}) => (Ar(t, (o, i) => {
  e && rt(o) ? n[i] = _f(o, e) : n[i] = o;
}, { allOwnKeys: r }), n), $m = (n) => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n), Gm = (n, t, e, r) => {
  n.prototype = Object.create(t.prototype, r), n.prototype.constructor = n, Object.defineProperty(n, "super", {
    value: t.prototype
  }), e && Object.assign(n.prototype, e);
}, Km = (n, t, e, r) => {
  let o, i, s;
  const a = {};
  if (t = t || {}, n == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(n), i = o.length; i-- > 0; )
      s = o[i], (!r || r(s, n, t)) && !a[s] && (t[s] = n[s], a[s] = !0);
    n = e !== !1 && da(n);
  } while (n && (!e || e(n, t)) && n !== Object.prototype);
  return t;
}, Zm = (n, t, e) => {
  n = String(n), (e === void 0 || e > n.length) && (e = n.length), e -= t.length;
  const r = n.indexOf(t, e);
  return r !== -1 && r === e;
}, Jm = (n) => {
  if (!n) return null;
  if (Jn(n)) return n;
  let t = n.length;
  if (!Tf(t)) return null;
  const e = new Array(t);
  for (; t-- > 0; )
    e[t] = n[t];
  return e;
}, Qm = /* @__PURE__ */ ((n) => (t) => n && t instanceof n)(typeof Uint8Array < "u" && da(Uint8Array)), eg = (n, t) => {
  const r = (n && n[ti]).call(n);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const i = o.value;
    t.call(n, i[0], i[1]);
  }
}, tg = (n, t) => {
  let e;
  const r = [];
  for (; (e = n.exec(t)) !== null; )
    r.push(e);
  return r;
}, ng = At("HTMLFormElement"), rg = (n) => n.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(e, r, o) {
    return r.toUpperCase() + o;
  }
), Lc = (({ hasOwnProperty: n }) => (t, e) => n.call(t, e))(Object.prototype), og = At("RegExp"), kf = (n, t) => {
  const e = Object.getOwnPropertyDescriptors(n), r = {};
  Ar(e, (o, i) => {
    let s;
    (s = t(o, i, n)) !== !1 && (r[i] = s || o);
  }), Object.defineProperties(n, r);
}, ig = (n) => {
  kf(n, (t, e) => {
    if (rt(n) && ["arguments", "caller", "callee"].indexOf(e) !== -1)
      return !1;
    const r = n[e];
    if (rt(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + e + "'");
      });
    }
  });
}, sg = (n, t) => {
  const e = {}, r = (o) => {
    o.forEach((i) => {
      e[i] = !0;
    });
  };
  return Jn(n) ? r(n) : r(String(n).split(t)), e;
}, ag = () => {
}, cg = (n, t) => n != null && Number.isFinite(n = +n) ? n : t;
function lg(n) {
  return !!(n && rt(n.append) && n[Cf] === "FormData" && n[ti]);
}
const ug = (n) => {
  const t = new Array(10), e = (r, o) => {
    if (oi(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[o] = r;
        const i = Jn(r) ? [] : {};
        return Ar(r, (s, a) => {
          const c = e(s, o + 1);
          !Sr(c) && (i[a] = c);
        }), t[o] = void 0, i;
      }
    }
    return r;
  };
  return e(n, 0);
}, fg = At("AsyncFunction"), dg = (n) => n && (oi(n) || rt(n)) && rt(n.then) && rt(n.catch), Pf = ((n, t) => n ? setImmediate : t ? ((e, r) => (hn.addEventListener("message", ({ source: o, data: i }) => {
  o === hn && i === e && r.length && r.shift()();
}, !1), (o) => {
  r.push(o), hn.postMessage(e, "*");
}))(`axios@${Math.random()}`, []) : (e) => setTimeout(e))(
  typeof setImmediate == "function",
  rt(hn.postMessage)
), hg = typeof queueMicrotask < "u" ? queueMicrotask.bind(hn) : typeof process < "u" && process.nextTick || Pf, xg = (n) => n != null && rt(n[ti]), T = {
  isArray: Jn,
  isArrayBuffer: Af,
  isBuffer: Pm,
  isFormData: zm,
  isArrayBufferView: Im,
  isString: Nm,
  isNumber: Tf,
  isBoolean: jm,
  isObject: oi,
  isPlainObject: lo,
  isReadableStream: Hm,
  isRequest: Um,
  isResponse: qm,
  isHeaders: Wm,
  isUndefined: Sr,
  isDate: Mm,
  isFile: Lm,
  isBlob: Dm,
  isRegExp: og,
  isFunction: rt,
  isStream: Fm,
  isURLSearchParams: Vm,
  isTypedArray: Qm,
  isFileList: Bm,
  forEach: Ar,
  merge: ks,
  extend: Xm,
  trim: Ym,
  stripBOM: $m,
  inherits: Gm,
  toFlatObject: Km,
  kindOf: ni,
  kindOfTest: At,
  endsWith: Zm,
  toArray: Jm,
  forEachEntry: eg,
  matchAll: tg,
  isHTMLForm: ng,
  hasOwnProperty: Lc,
  hasOwnProp: Lc,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: kf,
  freezeMethods: ig,
  toObjectSet: sg,
  toCamelCase: rg,
  noop: ag,
  toFiniteNumber: cg,
  findKey: Of,
  global: hn,
  isContextDefined: Rf,
  isSpecCompliantForm: lg,
  toJSONObject: ug,
  isAsyncFn: fg,
  isThenable: dg,
  setImmediate: Pf,
  asap: hg,
  isIterable: xg
};
function te(n, t, e, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = n, this.name = "AxiosError", t && (this.code = t), e && (this.config = e), r && (this.request = r), o && (this.response = o, this.status = o.status ? o.status : null);
}
T.inherits(te, Error, {
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
      config: T.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const If = te.prototype, Nf = {};
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
  Nf[n] = { value: n };
});
Object.defineProperties(te, Nf);
Object.defineProperty(If, "isAxiosError", { value: !0 });
te.from = (n, t, e, r, o, i) => {
  const s = Object.create(If);
  return T.toFlatObject(n, s, function(c) {
    return c !== Error.prototype;
  }, (a) => a !== "isAxiosError"), te.call(s, n.message, t, e, r, o), s.cause = n, s.name = n.name, i && Object.assign(s, i), s;
};
const pg = null;
function Ps(n) {
  return T.isPlainObject(n) || T.isArray(n);
}
function jf(n) {
  return T.endsWith(n, "[]") ? n.slice(0, -2) : n;
}
function Dc(n, t, e) {
  return n ? n.concat(t).map(function(o, i) {
    return o = jf(o), !e && i ? "[" + o + "]" : o;
  }).join(e ? "." : "") : t;
}
function mg(n) {
  return T.isArray(n) && !n.some(Ps);
}
const gg = T.toFlatObject(T, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ii(n, t, e) {
  if (!T.isObject(n))
    throw new TypeError("target must be an object");
  t = t || new FormData(), e = T.toFlatObject(e, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(p, h) {
    return !T.isUndefined(h[p]);
  });
  const r = e.metaTokens, o = e.visitor || f, i = e.dots, s = e.indexes, c = (e.Blob || typeof Blob < "u" && Blob) && T.isSpecCompliantForm(t);
  if (!T.isFunction(o))
    throw new TypeError("visitor must be a function");
  function u(g) {
    if (g === null) return "";
    if (T.isDate(g))
      return g.toISOString();
    if (!c && T.isBlob(g))
      throw new te("Blob is not supported. Use a Buffer instead.");
    return T.isArrayBuffer(g) || T.isTypedArray(g) ? c && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function f(g, p, h) {
    let E = g;
    if (g && !h && typeof g == "object") {
      if (T.endsWith(p, "{}"))
        p = r ? p : p.slice(0, -2), g = JSON.stringify(g);
      else if (T.isArray(g) && mg(g) || (T.isFileList(g) || T.endsWith(p, "[]")) && (E = T.toArray(g)))
        return p = jf(p), E.forEach(function(m, A) {
          !(T.isUndefined(m) || m === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? Dc([p], A, i) : s === null ? p : p + "[]",
            u(m)
          );
        }), !1;
    }
    return Ps(g) ? !0 : (t.append(Dc(h, p, i), u(g)), !1);
  }
  const d = [], l = Object.assign(gg, {
    defaultVisitor: f,
    convertValue: u,
    isVisitable: Ps
  });
  function v(g, p) {
    if (!T.isUndefined(g)) {
      if (d.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + p.join("."));
      d.push(g), T.forEach(g, function(E, w) {
        (!(T.isUndefined(E) || E === null) && o.call(
          t,
          E,
          T.isString(w) ? w.trim() : w,
          p,
          l
        )) === !0 && v(E, p ? p.concat(w) : [w]);
      }), d.pop();
    }
  }
  if (!T.isObject(n))
    throw new TypeError("data must be an object");
  return v(n), t;
}
function Bc(n) {
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
function ha(n, t) {
  this._pairs = [], n && ii(n, this, t);
}
const Mf = ha.prototype;
Mf.append = function(t, e) {
  this._pairs.push([t, e]);
};
Mf.toString = function(t) {
  const e = t ? function(r) {
    return t.call(this, r, Bc);
  } : Bc;
  return this._pairs.map(function(o) {
    return e(o[0]) + "=" + e(o[1]);
  }, "").join("&");
};
function vg(n) {
  return encodeURIComponent(n).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Lf(n, t, e) {
  if (!t)
    return n;
  const r = e && e.encode || vg;
  T.isFunction(e) && (e = {
    serialize: e
  });
  const o = e && e.serialize;
  let i;
  if (o ? i = o(t, e) : i = T.isURLSearchParams(t) ? t.toString() : new ha(t, e).toString(r), i) {
    const s = n.indexOf("#");
    s !== -1 && (n = n.slice(0, s)), n += (n.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return n;
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
    T.forEach(this.handlers, function(r) {
      r !== null && t(r);
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
}, Symbol.toStringTag, { value: "Module" })), Ze = {
  ...Ag,
  ...wg
};
function Tg(n, t) {
  return ii(n, new Ze.classes.URLSearchParams(), Object.assign({
    visitor: function(e, r, o, i) {
      return Ze.isNode && T.isBuffer(e) ? (this.append(r, e.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Og(n) {
  return T.matchAll(/\w+|\[(\w*)]/g, n).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Rg(n) {
  const t = {}, e = Object.keys(n);
  let r;
  const o = e.length;
  let i;
  for (r = 0; r < o; r++)
    i = e[r], t[i] = n[i];
  return t;
}
function Bf(n) {
  function t(e, r, o, i) {
    let s = e[i++];
    if (s === "__proto__") return !0;
    const a = Number.isFinite(+s), c = i >= e.length;
    return s = !s && T.isArray(o) ? o.length : s, c ? (T.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !a) : ((!o[s] || !T.isObject(o[s])) && (o[s] = []), t(e, r, o[s], i) && T.isArray(o[s]) && (o[s] = Rg(o[s])), !a);
  }
  if (T.isFormData(n) && T.isFunction(n.entries)) {
    const e = {};
    return T.forEachEntry(n, (r, o) => {
      t(Og(r), o, e, 0);
    }), e;
  }
  return null;
}
function kg(n, t, e) {
  if (T.isString(n))
    try {
      return (t || JSON.parse)(n), T.trim(n);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (e || JSON.stringify)(n);
}
const Tr = {
  transitional: Df,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, e) {
    const r = e.getContentType() || "", o = r.indexOf("application/json") > -1, i = T.isObject(t);
    if (i && T.isHTMLForm(t) && (t = new FormData(t)), T.isFormData(t))
      return o ? JSON.stringify(Bf(t)) : t;
    if (T.isArrayBuffer(t) || T.isBuffer(t) || T.isStream(t) || T.isFile(t) || T.isBlob(t) || T.isReadableStream(t))
      return t;
    if (T.isArrayBufferView(t))
      return t.buffer;
    if (T.isURLSearchParams(t))
      return e.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Tg(t, this.formSerializer).toString();
      if ((a = T.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return ii(
          a ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return i || o ? (e.setContentType("application/json", !1), kg(t)) : t;
  }],
  transformResponse: [function(t) {
    const e = this.transitional || Tr.transitional, r = e && e.forcedJSONParsing, o = this.responseType === "json";
    if (T.isResponse(t) || T.isReadableStream(t))
      return t;
    if (t && T.isString(t) && (r && !this.responseType || o)) {
      const s = !(e && e.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (s)
          throw a.name === "SyntaxError" ? te.from(a, te.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
    FormData: Ze.classes.FormData,
    Blob: Ze.classes.Blob
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
T.forEach(["delete", "get", "head", "post", "put", "patch"], (n) => {
  Tr.headers[n] = {};
});
const Pg = T.toObjectSet([
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
]), Ig = (n) => {
  const t = {};
  let e, r, o;
  return n && n.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), e = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!e || t[e] && Pg[e]) && (e === "set-cookie" ? t[e] ? t[e].push(r) : t[e] = [r] : t[e] = t[e] ? t[e] + ", " + r : r);
  }), t;
}, zc = Symbol("internals");
function ar(n) {
  return n && String(n).trim().toLowerCase();
}
function uo(n) {
  return n === !1 || n == null ? n : T.isArray(n) ? n.map(uo) : String(n);
}
function Ng(n) {
  const t = /* @__PURE__ */ Object.create(null), e = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = e.exec(n); )
    t[r[1]] = r[2];
  return t;
}
const jg = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function Pi(n, t, e, r, o) {
  if (T.isFunction(r))
    return r.call(this, t, e);
  if (o && (t = e), !!T.isString(t)) {
    if (T.isString(r))
      return t.indexOf(r) !== -1;
    if (T.isRegExp(r))
      return r.test(t);
  }
}
function Mg(n) {
  return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, e, r) => e.toUpperCase() + r);
}
function Lg(n, t) {
  const e = T.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(n, r + e, {
      value: function(o, i, s) {
        return this[r].call(this, t, o, i, s);
      },
      configurable: !0
    });
  });
}
let ot = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, e, r) {
    const o = this;
    function i(a, c, u) {
      const f = ar(c);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const d = T.findKey(o, f);
      (!d || o[d] === void 0 || u === !0 || u === void 0 && o[d] !== !1) && (o[d || c] = uo(a));
    }
    const s = (a, c) => T.forEach(a, (u, f) => i(u, f, c));
    if (T.isPlainObject(t) || t instanceof this.constructor)
      s(t, e);
    else if (T.isString(t) && (t = t.trim()) && !jg(t))
      s(Ig(t), e);
    else if (T.isObject(t) && T.isIterable(t)) {
      let a = {}, c, u;
      for (const f of t) {
        if (!T.isArray(f))
          throw TypeError("Object iterator must return a key-value pair");
        a[u = f[0]] = (c = a[u]) ? T.isArray(c) ? [...c, f[1]] : [c, f[1]] : f[1];
      }
      s(a, e);
    } else
      t != null && i(e, t, r);
    return this;
  }
  get(t, e) {
    if (t = ar(t), t) {
      const r = T.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!e)
          return o;
        if (e === !0)
          return Ng(o);
        if (T.isFunction(e))
          return e.call(this, o, r);
        if (T.isRegExp(e))
          return e.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, e) {
    if (t = ar(t), t) {
      const r = T.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!e || Pi(this, this[r], r, e)));
    }
    return !1;
  }
  delete(t, e) {
    const r = this;
    let o = !1;
    function i(s) {
      if (s = ar(s), s) {
        const a = T.findKey(r, s);
        a && (!e || Pi(r, r[a], a, e)) && (delete r[a], o = !0);
      }
    }
    return T.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const e = Object.keys(this);
    let r = e.length, o = !1;
    for (; r--; ) {
      const i = e[r];
      (!t || Pi(this, this[i], i, t, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(t) {
    const e = this, r = {};
    return T.forEach(this, (o, i) => {
      const s = T.findKey(r, i);
      if (s) {
        e[s] = uo(o), delete e[i];
        return;
      }
      const a = t ? Mg(i) : String(i).trim();
      a !== i && delete e[i], e[a] = uo(o), r[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const e = /* @__PURE__ */ Object.create(null);
    return T.forEach(this, (r, o) => {
      r != null && r !== !1 && (e[o] = t && T.isArray(r) ? r.join(", ") : r);
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
    const r = (this[zc] = this[zc] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(s) {
      const a = ar(s);
      r[a] || (Lg(o, s), r[a] = !0);
    }
    return T.isArray(t) ? t.forEach(i) : i(t), this;
  }
};
ot.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
T.reduceDescriptors(ot.prototype, ({ value: n }, t) => {
  let e = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => n,
    set(r) {
      this[e] = r;
    }
  };
});
T.freezeMethods(ot);
function Ii(n, t) {
  const e = this || Tr, r = t || e, o = ot.from(r.headers);
  let i = r.data;
  return T.forEach(n, function(a) {
    i = a.call(e, i, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), i;
}
function Ff(n) {
  return !!(n && n.__CANCEL__);
}
function Qn(n, t, e) {
  te.call(this, n ?? "canceled", te.ERR_CANCELED, t, e), this.name = "CanceledError";
}
T.inherits(Qn, te, {
  __CANCEL__: !0
});
function zf(n, t, e) {
  const r = e.config.validateStatus;
  !e.status || !r || r(e.status) ? n(e) : t(new te(
    "Request failed with status code " + e.status,
    [te.ERR_BAD_REQUEST, te.ERR_BAD_RESPONSE][Math.floor(e.status / 100) - 4],
    e.config,
    e.request,
    e
  ));
}
function Dg(n) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
  return t && t[1] || "";
}
function Bg(n, t) {
  n = n || 10;
  const e = new Array(n), r = new Array(n);
  let o = 0, i = 0, s;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const u = Date.now(), f = r[i];
    s || (s = u), e[o] = c, r[o] = u;
    let d = i, l = 0;
    for (; d !== o; )
      l += e[d++], d = d % n;
    if (o = (o + 1) % n, o === i && (i = (i + 1) % n), u - s < t)
      return;
    const v = f && u - f;
    return v ? Math.round(l * 1e3 / v) : void 0;
  };
}
function Fg(n, t) {
  let e = 0, r = 1e3 / t, o, i;
  const s = (u, f = Date.now()) => {
    e = f, o = null, i && (clearTimeout(i), i = null), n.apply(null, u);
  };
  return [(...u) => {
    const f = Date.now(), d = f - e;
    d >= r ? s(u, f) : (o = u, i || (i = setTimeout(() => {
      i = null, s(o);
    }, r - d)));
  }, () => o && s(o)];
}
const Co = (n, t, e = 3) => {
  let r = 0;
  const o = Bg(50, 250);
  return Fg((i) => {
    const s = i.loaded, a = i.lengthComputable ? i.total : void 0, c = s - r, u = o(c), f = s <= a;
    r = s;
    const d = {
      loaded: s,
      total: a,
      progress: a ? s / a : void 0,
      bytes: c,
      rate: u || void 0,
      estimated: u && a && f ? (a - s) / u : void 0,
      event: i,
      lengthComputable: a != null,
      [t ? "download" : "upload"]: !0
    };
    n(d);
  }, e);
}, Vc = (n, t) => {
  const e = n != null;
  return [(r) => t[0]({
    lengthComputable: e,
    total: n,
    loaded: r
  }), t[1]];
}, Hc = (n) => (...t) => T.asap(() => n(...t)), zg = Ze.hasStandardBrowserEnv ? /* @__PURE__ */ ((n, t) => (e) => (e = new URL(e, Ze.origin), n.protocol === e.protocol && n.host === e.host && (t || n.port === e.port)))(
  new URL(Ze.origin),
  Ze.navigator && /(msie|trident)/i.test(Ze.navigator.userAgent)
) : () => !0, Vg = Ze.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(n, t, e, r, o, i) {
      const s = [n + "=" + encodeURIComponent(t)];
      T.isNumber(e) && s.push("expires=" + new Date(e).toGMTString()), T.isString(r) && s.push("path=" + r), T.isString(o) && s.push("domain=" + o), i === !0 && s.push("secure"), document.cookie = s.join("; ");
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
function Hg(n) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}
function Ug(n, t) {
  return t ? n.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : n;
}
function Vf(n, t, e) {
  let r = !Hg(t);
  return n && (r || e == !1) ? Ug(n, t) : t;
}
const Uc = (n) => n instanceof ot ? { ...n } : n;
function wn(n, t) {
  t = t || {};
  const e = {};
  function r(u, f, d, l) {
    return T.isPlainObject(u) && T.isPlainObject(f) ? T.merge.call({ caseless: l }, u, f) : T.isPlainObject(f) ? T.merge({}, f) : T.isArray(f) ? f.slice() : f;
  }
  function o(u, f, d, l) {
    if (T.isUndefined(f)) {
      if (!T.isUndefined(u))
        return r(void 0, u, d, l);
    } else return r(u, f, d, l);
  }
  function i(u, f) {
    if (!T.isUndefined(f))
      return r(void 0, f);
  }
  function s(u, f) {
    if (T.isUndefined(f)) {
      if (!T.isUndefined(u))
        return r(void 0, u);
    } else return r(void 0, f);
  }
  function a(u, f, d) {
    if (d in t)
      return r(u, f);
    if (d in n)
      return r(void 0, u);
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
    headers: (u, f, d) => o(Uc(u), Uc(f), d, !0)
  };
  return T.forEach(Object.keys(Object.assign({}, n, t)), function(f) {
    const d = c[f] || o, l = d(n[f], t[f], f);
    T.isUndefined(l) && d !== a || (e[f] = l);
  }), e;
}
const Hf = (n) => {
  const t = wn({}, n);
  let { data: e, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: i, headers: s, auth: a } = t;
  t.headers = s = ot.from(s), t.url = Lf(Vf(t.baseURL, t.url, t.allowAbsoluteUrls), n.params, n.paramsSerializer), a && s.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let c;
  if (T.isFormData(e)) {
    if (Ze.hasStandardBrowserEnv || Ze.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if ((c = s.getContentType()) !== !1) {
      const [u, ...f] = c ? c.split(";").map((d) => d.trim()).filter(Boolean) : [];
      s.setContentType([u || "multipart/form-data", ...f].join("; "));
    }
  }
  if (Ze.hasStandardBrowserEnv && (r && T.isFunction(r) && (r = r(t)), r || r !== !1 && zg(t.url))) {
    const u = o && i && Vg.read(i);
    u && s.set(o, u);
  }
  return t;
}, qg = typeof XMLHttpRequest < "u", Wg = qg && function(n) {
  return new Promise(function(e, r) {
    const o = Hf(n);
    let i = o.data;
    const s = ot.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: c, onDownloadProgress: u } = o, f, d, l, v, g;
    function p() {
      v && v(), g && g(), o.cancelToken && o.cancelToken.unsubscribe(f), o.signal && o.signal.removeEventListener("abort", f);
    }
    let h = new XMLHttpRequest();
    h.open(o.method.toUpperCase(), o.url, !0), h.timeout = o.timeout;
    function E() {
      if (!h)
        return;
      const m = ot.from(
        "getAllResponseHeaders" in h && h.getAllResponseHeaders()
      ), y = {
        data: !a || a === "text" || a === "json" ? h.responseText : h.response,
        status: h.status,
        statusText: h.statusText,
        headers: m,
        config: n,
        request: h
      };
      zf(function(C) {
        e(C), p();
      }, function(C) {
        r(C), p();
      }, y), h = null;
    }
    "onloadend" in h ? h.onloadend = E : h.onreadystatechange = function() {
      !h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.indexOf("file:") === 0) || setTimeout(E);
    }, h.onabort = function() {
      h && (r(new te("Request aborted", te.ECONNABORTED, n, h)), h = null);
    }, h.onerror = function() {
      r(new te("Network Error", te.ERR_NETWORK, n, h)), h = null;
    }, h.ontimeout = function() {
      let A = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const y = o.transitional || Df;
      o.timeoutErrorMessage && (A = o.timeoutErrorMessage), r(new te(
        A,
        y.clarifyTimeoutError ? te.ETIMEDOUT : te.ECONNABORTED,
        n,
        h
      )), h = null;
    }, i === void 0 && s.setContentType(null), "setRequestHeader" in h && T.forEach(s.toJSON(), function(A, y) {
      h.setRequestHeader(y, A);
    }), T.isUndefined(o.withCredentials) || (h.withCredentials = !!o.withCredentials), a && a !== "json" && (h.responseType = o.responseType), u && ([l, g] = Co(u, !0), h.addEventListener("progress", l)), c && h.upload && ([d, v] = Co(c), h.upload.addEventListener("progress", d), h.upload.addEventListener("loadend", v)), (o.cancelToken || o.signal) && (f = (m) => {
      h && (r(!m || m.type ? new Qn(null, n, h) : m), h.abort(), h = null);
    }, o.cancelToken && o.cancelToken.subscribe(f), o.signal && (o.signal.aborted ? f() : o.signal.addEventListener("abort", f)));
    const w = Dg(o.url);
    if (w && Ze.protocols.indexOf(w) === -1) {
      r(new te("Unsupported protocol " + w + ":", te.ERR_BAD_REQUEST, n));
      return;
    }
    h.send(i || null);
  });
}, Yg = (n, t) => {
  const { length: e } = n = n ? n.filter(Boolean) : [];
  if (t || e) {
    let r = new AbortController(), o;
    const i = function(u) {
      if (!o) {
        o = !0, a();
        const f = u instanceof Error ? u : this.reason;
        r.abort(f instanceof te ? f : new Qn(f instanceof Error ? f.message : f));
      }
    };
    let s = t && setTimeout(() => {
      s = null, i(new te(`timeout ${t} of ms exceeded`, te.ETIMEDOUT));
    }, t);
    const a = () => {
      n && (s && clearTimeout(s), s = null, n.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(i) : u.removeEventListener("abort", i);
      }), n = null);
    };
    n.forEach((u) => u.addEventListener("abort", i));
    const { signal: c } = r;
    return c.unsubscribe = () => T.asap(a), c;
  }
}, Xg = function* (n, t) {
  let e = n.byteLength;
  if (e < t) {
    yield n;
    return;
  }
  let r = 0, o;
  for (; r < e; )
    o = r + t, yield n.slice(r, o), r = o;
}, $g = async function* (n, t) {
  for await (const e of Gg(n))
    yield* Xg(e, t);
}, Gg = async function* (n) {
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
}, qc = (n, t, e, r) => {
  const o = $g(n, t);
  let i = 0, s, a = (c) => {
    s || (s = !0, r && r(c));
  };
  return new ReadableStream({
    async pull(c) {
      try {
        const { done: u, value: f } = await o.next();
        if (u) {
          a(), c.close();
          return;
        }
        let d = f.byteLength;
        if (e) {
          let l = i += d;
          e(l);
        }
        c.enqueue(new Uint8Array(f));
      } catch (u) {
        throw a(u), u;
      }
    },
    cancel(c) {
      return a(c), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, si = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Uf = si && typeof ReadableStream == "function", Kg = si && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((n) => (t) => n.encode(t))(new TextEncoder()) : async (n) => new Uint8Array(await new Response(n).arrayBuffer())), qf = (n, ...t) => {
  try {
    return !!n(...t);
  } catch {
    return !1;
  }
}, Zg = Uf && qf(() => {
  let n = !1;
  const t = new Request(Ze.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return n = !0, "half";
    }
  }).headers.has("Content-Type");
  return n && !t;
}), Wc = 64 * 1024, Ns = Uf && qf(() => T.isReadableStream(new Response("").body)), Ao = {
  stream: Ns && ((n) => n.body)
};
si && ((n) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Ao[t] && (Ao[t] = T.isFunction(n[t]) ? (e) => e[t]() : (e, r) => {
      throw new te(`Response type '${t}' is not supported`, te.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Jg = async (n) => {
  if (n == null)
    return 0;
  if (T.isBlob(n))
    return n.size;
  if (T.isSpecCompliantForm(n))
    return (await new Request(Ze.origin, {
      method: "POST",
      body: n
    }).arrayBuffer()).byteLength;
  if (T.isArrayBufferView(n) || T.isArrayBuffer(n))
    return n.byteLength;
  if (T.isURLSearchParams(n) && (n = n + ""), T.isString(n))
    return (await Kg(n)).byteLength;
}, Qg = async (n, t) => {
  const e = T.toFiniteNumber(n.getContentLength());
  return e ?? Jg(t);
}, ev = si && (async (n) => {
  let {
    url: t,
    method: e,
    data: r,
    signal: o,
    cancelToken: i,
    timeout: s,
    onDownloadProgress: a,
    onUploadProgress: c,
    responseType: u,
    headers: f,
    withCredentials: d = "same-origin",
    fetchOptions: l
  } = Hf(n);
  u = u ? (u + "").toLowerCase() : "text";
  let v = Yg([o, i && i.toAbortSignal()], s), g;
  const p = v && v.unsubscribe && (() => {
    v.unsubscribe();
  });
  let h;
  try {
    if (c && Zg && e !== "get" && e !== "head" && (h = await Qg(f, r)) !== 0) {
      let y = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), O;
      if (T.isFormData(r) && (O = y.headers.get("content-type")) && f.setContentType(O), y.body) {
        const [C, j] = Vc(
          h,
          Co(Hc(c))
        );
        r = qc(y.body, Wc, C, j);
      }
    }
    T.isString(d) || (d = d ? "include" : "omit");
    const E = "credentials" in Request.prototype;
    g = new Request(t, {
      ...l,
      signal: v,
      method: e.toUpperCase(),
      headers: f.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: E ? d : void 0
    });
    let w = await fetch(g);
    const m = Ns && (u === "stream" || u === "response");
    if (Ns && (a || m && p)) {
      const y = {};
      ["status", "statusText", "headers"].forEach((z) => {
        y[z] = w[z];
      });
      const O = T.toFiniteNumber(w.headers.get("content-length")), [C, j] = a && Vc(
        O,
        Co(Hc(a), !0)
      ) || [];
      w = new Response(
        qc(w.body, Wc, C, () => {
          j && j(), p && p();
        }),
        y
      );
    }
    u = u || "text";
    let A = await Ao[T.findKey(Ao, u) || "text"](w, n);
    return !m && p && p(), await new Promise((y, O) => {
      zf(y, O, {
        data: A,
        headers: ot.from(w.headers),
        status: w.status,
        statusText: w.statusText,
        config: n,
        request: g
      });
    });
  } catch (E) {
    throw p && p(), E && E.name === "TypeError" && /Load failed|fetch/i.test(E.message) ? Object.assign(
      new te("Network Error", te.ERR_NETWORK, n, g),
      {
        cause: E.cause || E
      }
    ) : te.from(E, E && E.code, n, g);
  }
}), js = {
  http: pg,
  xhr: Wg,
  fetch: ev
};
T.forEach(js, (n, t) => {
  if (n) {
    try {
      Object.defineProperty(n, "name", { value: t });
    } catch {
    }
    Object.defineProperty(n, "adapterName", { value: t });
  }
});
const Yc = (n) => `- ${n}`, tv = (n) => T.isFunction(n) || n === null || n === !1, Wf = {
  getAdapter: (n) => {
    n = T.isArray(n) ? n : [n];
    const { length: t } = n;
    let e, r;
    const o = {};
    for (let i = 0; i < t; i++) {
      e = n[i];
      let s;
      if (r = e, !tv(e) && (r = js[(s = String(e)).toLowerCase()], r === void 0))
        throw new te(`Unknown adapter '${s}'`);
      if (r)
        break;
      o[s || "#" + i] = r;
    }
    if (!r) {
      const i = Object.entries(o).map(
        ([a, c]) => `adapter ${a} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let s = t ? i.length > 1 ? `since :
` + i.map(Yc).join(`
`) : " " + Yc(i[0]) : "as no adapter specified";
      throw new te(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: js
};
function Ni(n) {
  if (n.cancelToken && n.cancelToken.throwIfRequested(), n.signal && n.signal.aborted)
    throw new Qn(null, n);
}
function Xc(n) {
  return Ni(n), n.headers = ot.from(n.headers), n.data = Ii.call(
    n,
    n.transformRequest
  ), ["post", "put", "patch"].indexOf(n.method) !== -1 && n.headers.setContentType("application/x-www-form-urlencoded", !1), Wf.getAdapter(n.adapter || Tr.adapter)(n).then(function(r) {
    return Ni(n), r.data = Ii.call(
      n,
      n.transformResponse,
      r
    ), r.headers = ot.from(r.headers), r;
  }, function(r) {
    return Ff(r) || (Ni(n), r && r.response && (r.response.data = Ii.call(
      n,
      n.transformResponse,
      r.response
    ), r.response.headers = ot.from(r.response.headers))), Promise.reject(r);
  });
}
const Yf = "1.9.0", ai = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((n, t) => {
  ai[n] = function(r) {
    return typeof r === n || "a" + (t < 1 ? "n " : " ") + n;
  };
});
const $c = {};
ai.transitional = function(t, e, r) {
  function o(i, s) {
    return "[Axios v" + Yf + "] Transitional option '" + i + "'" + s + (r ? ". " + r : "");
  }
  return (i, s, a) => {
    if (t === !1)
      throw new te(
        o(s, " has been removed" + (e ? " in " + e : "")),
        te.ERR_DEPRECATED
      );
    return e && !$c[s] && ($c[s] = !0, console.warn(
      o(
        s,
        " has been deprecated since v" + e + " and will be removed in the near future"
      )
    )), t ? t(i, s, a) : !0;
  };
};
ai.spelling = function(t) {
  return (e, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function nv(n, t, e) {
  if (typeof n != "object")
    throw new te("options must be an object", te.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(n);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o], s = t[i];
    if (s) {
      const a = n[i], c = a === void 0 || s(a, i, n);
      if (c !== !0)
        throw new te("option " + i + " must be " + c, te.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (e !== !0)
      throw new te("Unknown option " + i, te.ERR_BAD_OPTION);
  }
}
const fo = {
  assertOptions: nv,
  validators: ai
}, Pt = fo.validators;
let bn = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
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
  async request(t, e) {
    try {
      return await this._request(t, e);
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
  _request(t, e) {
    typeof t == "string" ? (e = e || {}, e.url = t) : e = t || {}, e = wn(this.defaults, e);
    const { transitional: r, paramsSerializer: o, headers: i } = e;
    r !== void 0 && fo.assertOptions(r, {
      silentJSONParsing: Pt.transitional(Pt.boolean),
      forcedJSONParsing: Pt.transitional(Pt.boolean),
      clarifyTimeoutError: Pt.transitional(Pt.boolean)
    }, !1), o != null && (T.isFunction(o) ? e.paramsSerializer = {
      serialize: o
    } : fo.assertOptions(o, {
      encode: Pt.function,
      serialize: Pt.function
    }, !0)), e.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? e.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : e.allowAbsoluteUrls = !0), fo.assertOptions(e, {
      baseUrl: Pt.spelling("baseURL"),
      withXsrfToken: Pt.spelling("withXSRFToken")
    }, !0), e.method = (e.method || this.defaults.method || "get").toLowerCase();
    let s = i && T.merge(
      i.common,
      i[e.method]
    );
    i && T.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (g) => {
        delete i[g];
      }
    ), e.headers = ot.concat(s, i);
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function(p) {
      typeof p.runWhen == "function" && p.runWhen(e) === !1 || (c = c && p.synchronous, a.unshift(p.fulfilled, p.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(p) {
      u.push(p.fulfilled, p.rejected);
    });
    let f, d = 0, l;
    if (!c) {
      const g = [Xc.bind(this), void 0];
      for (g.unshift.apply(g, a), g.push.apply(g, u), l = g.length, f = Promise.resolve(e); d < l; )
        f = f.then(g[d++], g[d++]);
      return f;
    }
    l = a.length;
    let v = e;
    for (d = 0; d < l; ) {
      const g = a[d++], p = a[d++];
      try {
        v = g(v);
      } catch (h) {
        p.call(this, h);
        break;
      }
    }
    try {
      f = Xc.call(this, v);
    } catch (g) {
      return Promise.reject(g);
    }
    for (d = 0, l = u.length; d < l; )
      f = f.then(u[d++], u[d++]);
    return f;
  }
  getUri(t) {
    t = wn(this.defaults, t);
    const e = Vf(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Lf(e, t.params, t.paramsSerializer);
  }
};
T.forEach(["delete", "get", "head", "options"], function(t) {
  bn.prototype[t] = function(e, r) {
    return this.request(wn(r || {}, {
      method: t,
      url: e,
      data: (r || {}).data
    }));
  };
});
T.forEach(["post", "put", "patch"], function(t) {
  function e(r) {
    return function(i, s, a) {
      return this.request(wn(a || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: s
      }));
    };
  }
  bn.prototype[t] = e(), bn.prototype[t + "Form"] = e(!0);
});
let rv = class Xf {
  constructor(t) {
    if (typeof t != "function")
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
    }, t(function(i, s, a) {
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
      token: new Xf(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
};
function ov(n) {
  return function(e) {
    return n.apply(null, e);
  };
}
function iv(n) {
  return T.isObject(n) && n.isAxiosError === !0;
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
Object.entries(Ms).forEach(([n, t]) => {
  Ms[t] = n;
});
function $f(n) {
  const t = new bn(n), e = _f(bn.prototype.request, t);
  return T.extend(e, bn.prototype, t, { allOwnKeys: !0 }), T.extend(e, t, null, { allOwnKeys: !0 }), e.create = function(o) {
    return $f(wn(n, o));
  }, e;
}
const je = $f(Tr);
je.Axios = bn;
je.CanceledError = Qn;
je.CancelToken = rv;
je.isCancel = Ff;
je.VERSION = Yf;
je.toFormData = ii;
je.AxiosError = te;
je.Cancel = je.CanceledError;
je.all = function(t) {
  return Promise.all(t);
};
je.spread = ov;
je.isAxiosError = iv;
je.mergeConfig = wn;
je.AxiosHeaders = ot;
je.formToJSON = (n) => Bf(T.isHTMLForm(n) ? new FormData(n) : n);
je.getAdapter = Wf.getAdapter;
je.HttpStatusCode = Ms;
je.default = je;
const {
  Axios: Rv,
  AxiosError: kv,
  CanceledError: Pv,
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
} = je, yt = To;
(function(n, t) {
  const e = To, r = n();
  for (; ; )
    try {
      if (-parseInt(e(136)) / 1 * (parseInt(e(130)) / 2) + -parseInt(e(135)) / 3 + -parseInt(e(120)) / 4 * (-parseInt(e(132)) / 5) + -parseInt(e(133)) / 6 + parseInt(e(119)) / 7 + parseInt(e(122)) / 8 + parseInt(e(123)) / 9 === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Oo, 873861);
function To(n, t) {
  const e = Oo();
  return To = function(r, o) {
    return r = r - 116, e[r];
  }, To(n, t);
}
yt(131) + yt(142) + yt(139) + yt(125);
je[yt(137)][yt(141) + yt(118)] = !0;
const sv = async (n) => {
  var e, r, o, i;
  const t = yt;
  try {
    return (await je(n))[t(121)];
  } catch (s) {
    throw ((r = (e = s[t(134)]) == null ? void 0 : e[t(121)]) == null ? void 0 : r[t(129)]) || ((i = (o = s[t(134)]) == null ? void 0 : o[t(121)]) == null ? void 0 : i[t(140)]) || s[t(129)];
  }
}, av = {};
av[yt(116) + "pe"] = yt(138) + yt(127);
function Oo() {
  const n = ["POST", "message", "2015918yHejkp", "http://192", "85LcksTP", "5588346gmaxZM", "response", "3290244ZcIAaK", "1iyaIYG", "defaults", "applicatio", ":3000/api/", "error", "withCreden", ".168.11.76", "PATCH", "PUT", "Content-Ty", "DELETE", "tials", "9838794DjHklr", "58328uwuMBz", "data", "7226840CCZGpM", "12178512GjFzLW", "GET", "v1/client", "params", "n/json"];
  return Oo = function() {
    return n;
  }, Oo();
}
const Ce = ko;
(function(n, t) {
  const e = ko, r = n();
  for (; ; )
    try {
      if (-parseInt(e(228)) / 1 + parseInt(e(235)) / 2 * (parseInt(e(223)) / 3) + parseInt(e(229)) / 4 + -parseInt(e(233)) / 5 + -parseInt(e(241)) / 6 * (-parseInt(e(220)) / 7) + -parseInt(e(231)) / 8 + parseInt(e(237)) / 9 === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Ro, 902483);
const ln = {};
ln[Ce(227)] = Ce(219) + "E", ln[Ce(238)] = Ce(244), ln[Ce(225)] = Ce(217) + "N", ln[Ce(234)] = Ce(219) + "E", ln[Ce(232)] = Ce(244), ln[Ce(242)] = Ce(217) + "N";
const jt = ln, Ls = {};
function Ro() {
  const n = ["ent", "moveEvent", "318OcUYzG", "touchstart", "fullscreen", "ACTION_UP", "assistiveM", "ACTION_DOW", "Event", "ACTION_MOV", "105903daYKTf", "enuHide", "keydown", "3fXEMeA", "wheelEvent", "mousedown", "keyBoardEv", "mousemove", "1187315AlpVCN", "356132RpQayS", "shortcutEv", "13493112hzPpgb", "touchend", "6117650cyMDSt", "touchmove", "2805526qhdNKe", "keyup", "24357006xbWWiv", "mouseup"];
  return Ro = function() {
    return n;
  }, Ro();
}
Ls[Ce(236)] = Ce(244), Ls[Ce(222)] = Ce(217) + "N";
const cv = Ls, lv = Ce(240), uv = Ce(224), fv = Ce(226) + Ce(239), Gf = Ce(245) + Ce(221);
function ko(n, t) {
  const e = Ro();
  return ko = function(r, o) {
    return r = r - 217, e[r];
  }, ko(n, t);
}
const Ds = Ce(230) + Ce(239), dv = Ce(243) + Ce(218);
(function(n, t) {
  const e = xn, r = n();
  for (; ; )
    try {
      if (parseInt(e(376)) / 1 + -parseInt(e(401)) / 2 * (-parseInt(e(383)) / 3) + parseInt(e(382)) / 4 + -parseInt(e(372)) / 5 * (parseInt(e(398)) / 6) + parseInt(e(412)) / 7 * (parseInt(e(464)) / 8) + -parseInt(e(468)) / 9 * (parseInt(e(407)) / 10) + -parseInt(e(438)) / 11 === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Po, 469177);
function xn(n, t) {
  const e = Po();
  return xn = function(r, o) {
    return r = r - 365, e[r];
  }, xn(n, t);
}
const hv = ({ isMobile: n, assistive: t, onImgEvent: e, canvasContent: r, imageRef: o }) => {
  const [i, s] = et(!1), a = (d) => {
    const l = xn;
    if (d[l(444) + l(384)](), !o[l(415)])
      if (l(386) === l(411)) _0x1f47c5[l(413)] = l(448) + l(421), _0x50fe66[l(429)] = 21;
      else return;
    const v = o[l(415)];
    let g = jt[d[l(422)]];
    if (t[l(430)] == !0 || t[l(414)] == !0) {
      g == jt[l(403)] && e(Gf, {});
      return;
    }
    if (g == jt[l(465)] && (l(404) === l(388) ? (_0x5d69fa[l(413)] = l(448) + l(421), _0xd6ca0c[l(429)] = 61) : s(!0)), g != jt[l(465)] && i == !1) return;
    g == jt[l(403)] && s(!1);
    let p, h;
    const E = v[l(457) + l(426) + "t"]();
    if (d[l(422)][l(370)](l(446)))
      if (l(402) !== l(395)) {
        const { touches: m, changedTouches: A } = d, y = m[0] ?? A[0];
        p = y[l(366)] - E[l(368)], h = y[l(424)] - E[l(466)];
      } else {
        if (_0x5d8335[l(444) + l(384)](), !_0x4d0b46[l(415)]) return;
        const m = _0x381c41[l(415)], A = _0x4c55dd[l(432)](_0x2a93c1[l(396)]), y = m[l(457) + l(426) + "t"](), O = {};
        O[l(451)] = l(373), O[l(455)] = m[l(390) + "h"], O[l(436)] = m[l(399) + "ht"], O.x = _0x5e8ccb[l(365)] - y[l(368)], O.y = _0x48c65b[l(389)] - y[l(466)], O[l(454)] = A, _0x3859a8(_0x4b1328, O), m[l(419)]();
      }
    else d[l(422)][l(370)](l(440)) && (p = d[l(365)] - E[l(368)], h = d[l(389)] - E[l(466)]);
    const w = {};
    w[l(451)] = l(397), w[l(462)] = g, w.x = p, w.y = h, w[l(455)] = E[l(455)], w[l(436)] = E[l(436)], e(lv, w), v[l(419)]();
  }, c = (d) => {
    const l = xn;
    if (d[l(444) + l(384)](), !o[l(415)])
      if (l(427) === l(467)) _0x310e6b = _0x4eec9c[l(365)] - _0xbb7b8a[l(368)], _0x32f58a = _0xddcaca[l(389)] - _0xa03a75[l(466)];
      else return;
    const v = o[l(415)], g = Math[l(432)](d[l(396)]), p = v[l(457) + l(426) + "t"](), h = {};
    h[l(451)] = l(373), h[l(455)] = v[l(390) + "h"], h[l(436)] = v[l(399) + "ht"], h.x = d[l(365)] - p[l(368)], h.y = d[l(389)] - p[l(466)], h[l(454)] = g, e(uv, h), v[l(419)]();
  }, u = async (d) => {
    const l = xn;
    if (l(418) === l(425)) _0x1c3422(_0x2aee77, _0x543331);
    else {
      if (d[l(444) + l(384)](), !o[l(415)]) return;
      const v = o[l(415)], g = cv[d[l(422)]], p = d[l(429)][l(385) + "e"]();
      if (((m) => {
        const A = l;
        return [A(393), A(416), A(406)][A(370)](m);
      })(p) == !0) return;
      const E = async () => {
        const m = l;
        if (m(442) !== m(442))
          return [m(393), m(416), m(406)][m(370)](_0x211868);
        {
          const A = {};
          A[m(451)] = m(439), A[m(462)] = g, A[m(413)] = m(453) + m(450), A[m(429)] = d[m(429)], A[m(377)] = 0, A[m(434)] = 0;
          const y = A;
          if (d[m(469)] == !0)
            if (p == "c") y[m(413)] = m(447);
            else if (p == "a")
              if (m(420) !== m(387)) y[m(413)] = m(448) + m(421), y[m(434)] = 4096, y[m(429)] = 29;
              else return;
            else p == "v" && (y[m(413)] = m(379), y[m(429)] = await navigator[m(409)][m(380)]());
          else if (p == m(378)) y[m(413)] = m(448) + m(421), y[m(429)] = 19;
          else if (p == m(417)) y[m(413)] = m(448) + m(421), y[m(429)] = 20;
          else if (p == m(460)) y[m(413)] = m(448) + m(421), y[m(429)] = 21;
          else if (p == m(458)) m(374) !== m(369) ? (y[m(413)] = m(448) + m(421), y[m(429)] = 22) : (_0x397f18[m(435) + m(408)](m(381), _0x25c1e9, _0x39eacb), _0x51b41e[m(435) + m(408)](m(428), _0xde08fb, _0x289b75), _0x4469ed[m(435) + m(408)](m(394), _0x4e76d8));
          else if (p == m(461))
            if (m(449) === m(449)) y[m(413)] = m(448) + m(421), y[m(429)] = 67;
            else return;
          else if (p == m(441)) {
            if (m(431) !== m(431)) return;
            y[m(413)] = m(448) + m(421), y[m(429)] = 66;
          } else p == m(437) && (y[m(413)] = m(448) + m(421), y[m(429)] = 61);
          return y[m(422)] == m(453) + m(450) && d[m(405)] == !0 && (y[m(429)] = y[m(429)][m(443) + "e"]()), y;
        }
      }, w = await E();
      w && (l(400) === l(391) ? (_0x786830[l(413)] = l(448) + l(421), _0x40539f[l(429)] = 19) : e(fv, w)), v[l(419)]();
    }
  };
  tt(() => {
    const d = xn, l = o[d(415)];
    if (l)
      if (d(452) === d(375)) _0x3c5694[d(413)] = d(448) + d(421), _0x180309[d(429)] = 66;
      else {
        const v = {};
        v[d(433)] = !1;
        const g = v;
        return n ? d(456) !== d(456) ? _0x4299fe[d(435) + d(408)](_0xe867da, _0x512435) : (l[d(435) + d(408)](d(381), a, g), l[d(435) + d(408)](d(428), a, g), l[d(435) + d(408)](d(394), a)) : (l[d(435) + d(408)](d(392), c, g), l[d(435) + d(408)](d(459), u), [d(445), d(465), d(403)][d(367)]((p) => {
          const h = d;
          l[h(435) + h(408)](p, a);
        })), () => {
          const p = d;
          l && (n ? [p(381), p(428), p(394)][p(367)]((h) => {
            const E = p;
            E(463) === E(410) ? (_0x198ad9[E(413)] = E(448) + E(421), _0x43af1f[E(429)] = 22) : l[E(371) + E(423)](h, a);
          }) : ([p(445), p(465), p(403), p(392), p(459)][p(367)]((h) => {
            const E = p;
            l[E(371) + E(423)](h, a);
          }), l[p(371) + p(423)](p(459), u)));
        };
      }
  }, [n, a, c, u]);
  const f = { ref: o, ...r };
  return U.jsx(gd, f);
};
function Po() {
  const n = ["HBAiK", "cCRou", "357ZADEVQ", "typeKey", "showMenu", "current", "shift", "arrowdown", "quLqQ", "focus", "erSDG", "ODE", "type", "tListener", "pageY", "ABqtR", "gClientRec", "tDoaM", "touchmove", "key", "isDown", "OVLfE", "sign", "passive", "meta_state", "addEventLi", "height", "tab", "7779959taWNpi", "keyEvent", "mouse", "enter", "Wswfp", "toUpperCas", "preventDef", "mousemove", "touch", "COPY_TEXT", "KEYBOARD_C", "lllpB", "EXT", "action", "yPlmf", "KEYBOARD_T", "delta", "width", "PZEwT", "getBoundin", "arrowright", "keydown", "arrowleft", "backspace", "keyAction", "tBHAY", "90824KHCeOI", "mousedown", "top", "DBoKV", "72kfvEHi", "ctrlKey", "clientX", "pageX", "forEach", "left", "YIVOQ", "includes", "removeEven", "361245GTOFRD", "wheelEvent", "CrGor", "ZRPRb", "31439ihwaCE", "repeat", "arrowup", "PASTE_TEXT", "readText", "touchstart", "3617732IGqIwY", "12uoTojA", "ault", "toLowerCas", "ctArm", "bddOk", "rOdwi", "clientY", "offsetWidt", "kwfyQ", "wheel", "control", "touchend", "UAXmY", "deltaY", "touchEvent", "54ROjYeu", "offsetHeig", "IXBrf", "300454ZeVlSb", "euyDN", "mouseup", "HQsTf", "shiftKey", "capslock", "361370AVfqTv", "stener", "clipboard"];
  return Po = function() {
    return n;
  }, Po();
}
const xv = "data:image/png;base64,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", ci = No;
(function(n, t) {
  const e = No, r = n();
  for (; ; )
    try {
      if (parseInt(e(140)) / 1 + -parseInt(e(142)) / 2 * (parseInt(e(139)) / 3) + parseInt(e(143)) / 4 * (parseInt(e(138)) / 5) + -parseInt(e(141)) / 6 + -parseInt(e(145)) / 7 * (parseInt(e(134)) / 8) + -parseInt(e(144)) / 9 * (parseInt(e(136)) / 10) + parseInt(e(135)) / 11 === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Io, 879490);
function Io() {
  const n = ["544uYRcJO", "18eHiZQS", "2100182nNduKh", "img", "8vpWEqD", "25191804DnNAbx", "744130VxqLna", "div", "2190SjzHWO", "3zYCglR", "952799pKfYvj", "2613600EakQYc", "3077178oBqZWq"];
  return Io = function() {
    return n;
  }, Io();
}
const pv = Et[ci(137)]`
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
`, Ft = Et[ci(137)]`
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
`, zt = Et.p`
  height: 5px;
  margin-top: 2px;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
`, mv = Et[ci(133)]`
  position: absolute;
  backdrop-filter: blur(46px);
  border-radius: 50%;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.723);
  top: 50%;
  right: 5%;
`;
function No(n, t) {
  const e = Io();
  return No = function(r, o) {
    return r = r - 133, e[r];
  }, No(n, t);
}
const gv = Et[ci(137)]`
  user-select: none;
  transition: opacity 0.6s ease;
  z-index: 3;
  opacity: 0.3;
`;
function Un(n, t) {
  const e = jo();
  return Un = function(r, o) {
    return r = r - 309, e[r];
  }, Un(n, t);
}
(function(n, t) {
  const e = Un, r = n();
  for (; ; )
    try {
      if (-parseInt(e(316)) / 1 + parseInt(e(323)) / 2 * (parseInt(e(345)) / 3) + -parseInt(e(320)) / 4 * (parseInt(e(317)) / 5) + -parseInt(e(321)) / 6 + parseInt(e(348)) / 7 * (-parseInt(e(336)) / 8) + -parseInt(e(327)) / 9 * (parseInt(e(324)) / 10) + parseInt(e(331)) / 11 === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(jo, 143449);
const Gc = () => {
  const n = Un;
  return document[n(309) + n(326)] || document[n(349) + n(322)] || document[n(344) + n(337) + n(319)] || document[n(328) + n(310)];
}, vv = (n) => {
  const t = Un, e = document[t(335) + t(340)](t(314) + n);
  e[t(346) + t(313)] ? e[t(346) + t(313)]() : e[t(325) + t(338)] ? t(339) !== t(339) ? _0x231148[t(311) + t(330) + t(341)]() : e[t(325) + t(338)]() : e[t(311) + t(330) + t(341)] ? e[t(311) + t(330) + t(341)]() : e[t(329) + t(342)] && e[t(329) + t(342)]();
};
function jo() {
  const n = ["webkitExit", "mozCancelF", "querySelec", "986152MhwGrX", "screenElem", "FullScreen", "ZNjlj", "tor", "een", "ullscreen", "screen", "webkitFull", "165GidXUr", "requestFul", "reen", "7DmKnHp", "mozFullScr", "fullscreen", "enElement", "webkitRequ", "exitFullsc", "lscreen", "#screen_", "msExitFull", "78207QMQOiA", "59005UBZHYY", "ullScreen", "ent", "44HIympt", "1019310aqhptF", "eenElement", "3552QNhKjL", "531430vhxmHF", "mozRequest", "Element", "45ezhCPl", "msFullscre", "msRequestF", "estFullscr", "8939216fpRhpY", "Fullscreen"];
  return jo = function() {
    return n;
  }, jo();
}
const yv = () => {
  const n = Un;
  document[n(312) + n(347)] ? document[n(312) + n(347)]() : document[n(334) + n(318)] ? document[n(334) + n(318)]() : document[n(333) + n(332)] ? document[n(333) + n(332)]() : document[n(315) + n(343)] && document[n(315) + n(343)]();
};
(function(n, t) {
  const e = wr, r = n();
  for (; ; )
    try {
      if (parseInt(e(575)) / 1 + parseInt(e(389)) / 2 + parseInt(e(459)) / 3 + parseInt(e(604)) / 4 * (parseInt(e(561)) / 5) + -parseInt(e(388)) / 6 * (-parseInt(e(413)) / 7) + -parseInt(e(660)) / 8 * (-parseInt(e(471)) / 9) + -parseInt(e(643)) / 10 * (parseInt(e(370)) / 11) === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Mo, 813721);
function Mo() {
  const n = ["00/svg", "03 0 2-.89", "3c.033 0 .", "M6 12h6v2H", "H5v-5H3v7h", "children", "shortcutEv", "27-1.547 5", "0 0-.396-1", "current", "home", "v2h8V5h3v6", "2 2h10c1.1", ".897-2 2v4", "Show ID", "822 13 9A1", "-2-2-2zm-1", "ivfHb", "eenchange", "11.75", "2 2h7c0 1.", ".015.057-.", "H4zm16-6h-", ".103.897 2", ".21a1 1 0 ", "1.103-.897", "closest", "M10 4H8v4H", "M16.75 2h-", " 2v16c0 1.", "mousedown", "M20 3H4a1 ", "205Kqpcri", "recents", "7.032 15 7", "Hide ID", "copy", "Back", "height", "4.445-2.96", "taskId", "zm0-6h-4V4", "click", "set", "M16 21c3.5", "H13z", "1228091siwOZg", "touch_", "getBoundin", "PtSQY", "4v-4c0-1.1", "13%", "0h2v-6H4v2", ".832L6.697", "674.31a1 1", "-3.229 2-5", "4c0-1.103-", "M16 7v10c1", "2H4zm0 5h1", " 2v10c0 1.", "assistive", "clientX", "1 0 0 0-1-", ".387 1.386", "Recents", "h2.697l5.7", "focus", "touchend", "50%", "pageX", "-1-1H8a1 1", ".257 5.127", "3 0-2 .897", "Screen", "255, 255, ", "35232EtnXfi", "move", "4zm0 5h16v", "fullscreen", ".024l-14-1", "svg", "17-.056-.0", ".w3.org/20", "0 0 1.645z", "1.103 0-2 ", "Volume", ".116c.026-", "zM4 20V10h", "AAUpF", "tListener", "5.46 1.701", "touchmove", "-1.103-.89", "zRsIc", "data-id", "7 2-2V4c0-", "c1.103 0 2", " 0 0 0-.38", "103.897 2 ", "-2-2-2zm-9", "shortcutCo", "landscape", "showMenu", "0 0-1.554-", "clipboard", "clientY", "2-.082-.03", "M20 2H10c-", "m-2-4h2V3h", "mousemove", " 0 0 0-1.5", "0v10z", "grab", "8v12.264l-", "24208220PBzdiO", "IcNWz", "7 16 3v2c2", "touch_clas", " 2v13c0 1.", "efbRN", "WhPou", "width", " 0 0 0-1 1", " 2 2zm0-8h", "cursor", "M5 5h5V3H3", "l10.283 7.", "max", "forEach", "12%", "stener", "9470576nrdLfX", "now", "6v2H4z", "a.995.995 ", "V5h14v14z", "75z", "hpOrF", "shortcut", "change", "yKrdW", "webkitfull", "left", "027 1.027 ", "1.048z", "22pqJMrc", " 0-2 .897-", "device_id", "assistive_", "10c-1.103 ", "345-5.236 ", "ault", "type", "paste", " 3.999 4.0", "path", "-7v2h5z", "readText", ".999-4.909", "passive", "59 15.016 ", "a1 1 0 0 0", "1zm-1 16H5", "115974XQUuJp", "3182944jWOkIG", "screenchan", "volume", "gClientRec", "http://www", "s-.775-3.9", "M4 6h16v2H", "93-.019a1.", "Sync", "7h7l.001 7", "0 18V4h10l", "addEventLi", "4c-.025-.0", "Icon", "mouseup", "ssMzH", "right", "4v2h6zM8 2", " 2v5H4V5h3", "-2-5zM4 17", "27.05A1 1 ", "mozfullscr", "6v6h2v-4h4", "47 3.999 7", "21dCFbUV", "xWVOq", "H6z", "getAttribu", "hpsWu", "Copy", "0 0 0 14 2", ".225-1.1 2", "3a.986.986", "Paste", "7a1 1 0 0 ", "2 2zm2 7v-", "0 0 24 24", "back", "fVGAy", "circle", "aqneU", "33L12 5.86", " 2-2v-7c0-", "get", "v2z", "top", "2-.116C7.0", "-.769zm-8.", "qHAhV", "416 3.377 ", "57-5.428 6", "preventDef", "includes", "target", "pageY", "3 9a1.003 ", "h-2v6h6z", "v5h-5v2h7z", "0V4a1 1 0 ", "10l.002 10", "7zm11-5h-2", " 0 0 0 1.0", "h-5c-1.103", "h4zm12-6h-", "7 2-2v-4h4", "mouse", "3 0 2-.897", "6zm0 4h6v2", "0-2 .897-2", "03-.897-2-", "3698595fmRHNn", "div", "0 1.767.51", "m4.431 12.", "ent", "-2 2v6c0 1", "GdDOK", "opacity", " 5.999-9S1", "-1.052-3.3", ".614 16 19", "H4c-1.103 ", "9vGdWNM", "VpNNm", "isDown", "touchstart", "S18.387 17", "9.527 4.54", " 1 0 0 0 1", "9 21V3a1 1", ".002 16H6.", "MPokW", "data", "removeEven", ".089-1.218", "menu_", "sync", "nnZTa", "HeJVY", "Home", "v7h2zm5 14", "min", "touch", "msfullscre", ".897-2-2-2", "2-2h-4V4h1", "0a.999.999", "XbNBj", "fill", "M20 11V5c0", "75.931l2 1", "6l3.612-4.", "061-.016.0", "8.347l-3.0", "0 0 0 .782", "enchange", "-.897 2-2V", "48 3.832a1", "0 0 0 .38-", "2 2h7c1.10", "69-.823l-1", "1 0 0 0-1 ", "zIndex", " 0 0 0-.57", " 7H4c-1.10", "M20.978 13", "HWsTJ", "0 1-1V4a1 ", "action", "fRzWt", "rgba(255, ", "017.082-.0", "7-2-2-2h-3", "1v16a1 1 0", ".004 1.004", " 15H4V9z", "1.003 0 0 ", "08 3.677L7", "6a1 1 0 0 ", " 0 0 1 1h1"];
  return Mo = function() {
    return n;
  }, Mo();
}
function wr(n, t) {
  const e = Mo();
  return wr = function(r, o) {
    return r = r - 367, e[r];
  }, wr(n, t);
}
const bv = il((n, t) => {
  const e = wr, { displayId: r, isMobile: o, onSenData: i, status: s, imageRef: a, isShowDeviceId: c } = n, [u, f] = et(0), [d, l] = et(0), [v, g] = et(null), [p, h] = et(0), E = $e(null), w = $e(null), m = $e(null), A = {};
  A[e(653)] = e(605), A[e(466)] = 0.3, A[e(511)] = 999;
  const [y, O] = et(A), C = {};
  C[e(511)] = 999, C[e(567)] = "", C[e(650)] = e(580);
  const [j, z] = et(C), Y = {};
  Y[e(511)] = 1e3;
  const [ne, $] = et(Y), F = $e(null), [W, H] = et(null), G = (k) => {
    const S = e;
    if (k[S(440) + S(376)](), s[S(432)][S(631)] == !0) {
      if (S(417) !== S(486)) return;
      _0x55c1e7[S(482) + S(618)](_0x643dc0, _0xa170d3);
    }
    const me = jt[k[S(377)]], de = a[S(538)], he = m[S(538)], ie = de[S(577) + S(392) + "t"](), Oe = he[S(577) + S(392) + "t"]();
    let We, lt;
    const _n = ie[S(650)] - Oe[S(650)], Rt = ie[S(567)] - Oe[S(567)];
    if (k[S(377)][S(441)](S(491)))
      if (S(437) === S(546)) _0x107817 = _0x52a8f1[S(590)], _0x548971 = _0x15f8a6[S(634)];
      else {
        const { touches: ye, changedTouches: Le } = k, ut = ye[0] ?? Le[0];
        We = ut[S(598)], lt = ut[S(443)];
      }
    else k[S(377)][S(441)](S(454)) && (S(465) === S(465) ? (We = k[S(590)], lt = k[S(634)]) : _0x2a01ca(() => {
      const ye = S, Le = { ..._0x3e1a97 };
      Le[ye(466)] = _0x240ee9[ye(432)][ye(631)] ? 1 : 0, _0x7726a8(Le);
    }));
    if (me == jt[S(559)])
      if (S(472) !== S(472)) {
        if (_0xc3fe64[S(432)][S(473)] == !1) return;
        var Dt = _0x2b1e01 - _0x1c1e4e - _0x2fa882[S(367)], Bt = _0x3f9150 - _0x44fa8e - _0xee0735[S(434)];
        Dt = _0x597d46[S(656)](3, _0x5a2a63[S(490)](Dt, _0xad5194) - 3), Bt = _0x38c866[S(656)](3, _0x53fa3e[S(490)](Bt, _0x506c1c) - 3);
        const ye = {};
        ye[S(434)] = Bt + "px", ye[S(367)] = Dt + "px";
        const Le = { ..._0x1efddb, ...ye };
        _0x4a5faa(Le);
      } else {
        s[S(572)]({ ...s[S(432)], isDown: !0 }), f(We - Oe[S(367)]), l(lt - Oe[S(434)]);
        const ye = {};
        ye[S(466)] = 1, ye[S(653)] = S(641);
        const Le = { ...y, ...ye };
        O(Le), h(performance[S(661)]());
      }
    else if (me == jt[S(638)]) {
      if (s[S(432)][S(473)] == !1) return;
      var Wt = We - u - ie[S(367)], Yt = lt - d - ie[S(434)];
      Wt = Math[S(656)](3, Math[S(490)](Wt, _n) - 3), Yt = Math[S(656)](3, Math[S(490)](Yt, Rt) - 3);
      const ye = {};
      ye[S(434)] = Yt + "px", ye[S(367)] = Wt + "px";
      const Le = { ...j, ...ye };
      z(Le);
    } else if (me == jt[S(403)])
      if (S(480) === S(480)) {
        const ye = performance[S(661)]() - p;
        if (v == jt[S(559)] || ye < 100) {
          const ft = {};
          ft[S(631)] = !0, ft[S(473)] = !1, s[S(572)]({ ...s[S(432)], ...ft });
        } else if (S(622) === S(622)) s[S(572)]({ ...s[S(432)], isDown: !1 });
        else {
          const ft = _0x4ba32d();
          _0x4e2bdd(_0x19fc2c, ft);
        }
        const Le = {};
        Le[S(466)] = 0.3, Le[S(653)] = S(605);
        const ut = { ...y, ...Le };
        O(ut);
      } else {
        const ye = { ..._0x53079a[S(432)] };
        ye[S(473)] = !1, _0x4f340d[S(572)](ye);
      }
    g(me), he[S(595)]();
  }, Q = async (k) => {
    const S = e;
    k[S(440) + S(376)]();
    const me = k[S(442)][S(555)](S(460))[S(416) + "te"](S(623));
    if (me === S(607))
      S(515) !== S(648) ? Gc() ? yv() : vv(r) : _0x1e1a2b[S(400) + S(659)](_0x102a64, _0x54fb2b);
    else if (S(644) !== S(644)) [S(638), S(559), S(403)][S(657)]((de) => {
      const he = S;
      _0x4c6a94[he(482) + he(618)](de, _0x319b90);
    });
    else {
      const de = {};
      de[S(517)] = S(535) + S(463), de[S(667)] = me, de[S(481)] = "";
      const he = de;
      me === S(378) && (he[S(481)] = await navigator[S(633)][S(382)]()), me === S(565) && (he[S(569)] = S(629) + "py"), i(Ds, he);
    }
    s[S(572)]({ ...s[S(432)], showMenu: !1 }), w[S(538)][S(595)]();
  }, Z = (k) => {
    const S = Gc();
    i(dv, S);
  };
  tt(() => {
    requestAnimationFrame(() => {
      const k = wr, S = { ...ne };
      S[k(466)] = s[k(432)][k(631)] ? 1 : 0, $(S);
    });
  }, [s]), tt(() => {
    const k = e;
    if (k(427) !== k(496)) {
      const S = a[k(538)], me = [k(607) + k(668), k(670) + k(390) + "ge", k(410) + k(547), k(492) + k(504)];
      return S && me[k(657)]((de) => {
        const he = k;
        S[he(400) + he(659)](de, Z);
      }), () => {
        const de = k;
        de(617) === de(617) ? S && S[de(482) + de(618)](de(571), Z) : [de(638), de(559), de(403)][de(657)]((he) => {
          const ie = de;
          _0x232783[ie(400) + ie(659)](he, _0x51a360);
        });
      };
    } else {
      const S = _0x5bcb40[k(661)]() - _0x3066c8;
      if (_0x266314 == _0x559e14[k(559)] || S < 100) {
        const he = {};
        he[k(631)] = !0, he[k(473)] = !1;
        const ie = { ..._0x5ec6aa[k(432)], ...he };
        _0x473a75[k(572)](ie);
      } else {
        const he = { ..._0x51ff10[k(432)] };
        he[k(473)] = !1, _0x2c2d70[k(572)](he);
      }
      const me = {};
      me[k(466)] = 0.3, me[k(653)] = k(605);
      const de = { ..._0x2d542f, ...me };
      _0x482bef(de);
    }
  }, []), tt(() => {
    const k = e;
    if (k(518) !== k(518)) _0x43103d[k(400) + k(659)](k(474), _0x11fcea, _0x43246d), _0x2c86b7[k(400) + k(659)](k(620), _0x5cbdc5, _0x808ceb), _0x23be14[k(400) + k(659)](k(596), _0x52e8ef);
    else {
      const S = m[k(538)], me = w[k(538)];
      if (me)
        if (k(429) !== k(404)) me[k(400) + k(659)](k(571), Q);
        else {
          const de = { ..._0x339658[k(432)] };
          de[k(473)] = !0, _0x14c993[k(572)](de), _0xc364c4(_0x50e802 - _0x56aa59[k(367)]), _0x586ee2(_0x12df0e - _0x152451[k(434)]);
          const he = {};
          he[k(466)] = 1, he[k(653)] = k(641);
          const ie = { ..._0x274b7d, ...he };
          _0x2f366a(ie), _0x183442(_0x5b67ca[k(661)]());
        }
      if (S) {
        const de = {};
        de[k(384)] = !1;
        const he = de;
        return o ? (S[k(400) + k(659)](k(474), G, he), S[k(400) + k(659)](k(620), G, he), S[k(400) + k(659)](k(596), G)) : [k(638), k(559), k(403)][k(657)]((ie) => {
          const Oe = k;
          if (Oe(666) !== Oe(487)) S[Oe(400) + Oe(659)](ie, G);
          else {
            const We = {};
            We[Oe(631)] = !0, We[Oe(473)] = !1;
            const lt = { ..._0x1e09c2[Oe(432)], ...We };
            _0x87fc61[Oe(572)](lt);
          }
        }), () => {
          const ie = k;
          if (ie(669) === ie(669)) me && me[ie(482) + ie(618)](ie(571), Q), S && (o ? [ie(474), ie(620), ie(596)][ie(657)]((Oe) => {
            const We = ie;
            S[We(482) + We(618)](Oe, G);
          }) : ie(649) === ie(649) ? [ie(638), ie(559), ie(403)][ie(657)]((Oe) => {
            const We = ie;
            S[We(482) + We(618)](Oe, G);
          }) : _0x2e3a81[ie(482) + ie(618)](_0x33cf7e, _0x4b8d07));
          else {
            const Oe = { ..._0x5b488f };
            Oe[ie(466)] = _0x43b7bc[ie(432)][ie(631)] ? 1 : 0, _0xb5d96c(Oe);
          }
        };
      }
    }
  }, [o, G]);
  const J = () => {
    const k = e, S = {};
    S[k(511)] = 999, S[k(567)] = F[k(538)] == k(630) ? k(658) : null, S[k(650)] = F[k(538)] != k(630) ? k(658) : null, S[k(434)] = k(597), S[k(405)] = "5%", z(S);
  };
  sl(t, () => ({ fixTouch: (k) => {
    const S = e;
    if (S(414) === S(414)) {
      if (k)
        if (S(578) !== S(578)) {
          const me = {};
          me[S(511)] = 999, me[S(567)] = _0x2a5e72[S(538)] == S(630) ? S(658) : null, me[S(650)] = _0xc97b22[S(538)] != S(630) ? S(658) : null, me[S(434)] = S(597), me[S(405)] = "5%", _0x559389(me);
        } else F[S(538)] = k;
      J();
    } else {
      const { touches: me, changedTouches: de } = _0x2e2eca, he = me[0] ?? de[0];
      _0x4f7ca1 = he[S(598)], _0x366a56 = he[S(443)];
    }
  }, setFullscreen: (k) => {
    H(k);
  } }));
  const re = {};
  re[e(497)] = e(519) + e(603) + "1)";
  const oe = {};
  oe.d = W ? e(556) + e(406) + e(581) + e(452) + e(411) + e(570) + e(445) : e(654) + e(489) + e(533) + e(449) + e(446) + e(637) + e(381);
  const K = {};
  K[e(534)] = e(602);
  const ee = {};
  ee[e(497)] = e(519) + e(603) + "1)";
  const pe = {};
  pe.d = e(636) + e(613) + e(542) + e(470) + e(457) + e(588) + e(627) + e(541) + e(530) + e(453) + e(625) + e(505) + e(585) + e(493) + e(616) + e(448) + e(551) + e(579) + e(458) + e(494) + e(640);
  const ue = {};
  ue.d = e(532) + e(456) + e(415);
  const ve = {};
  ve[e(534)] = e(418);
  const P = {};
  P[e(497)] = e(519) + e(603) + "1)";
  const L = {};
  L.d = e(498) + e(621) + e(521) + e(386) + e(599) + e(651) + e(470) + e(457) + e(647) + e(627) + e(549) + e(627) + e(508) + e(455) + e(431) + e(554) + e(628) + e(407) + e(540) + e(451) + e(371) + e(424) + e(398) + e(574);
  const R = {};
  R[e(534)] = e(422);
  const N = {};
  N[e(497)] = e(519) + e(603) + "1)";
  const b = {};
  b.d = e(557) + e(374) + e(457) + e(558) + e(627) + e(541) + e(530) + e(624) + e(554) + e(545) + e(399) + e(479) + e(665);
  const B = {};
  B.cx = e(548), B.cy = "18", B.r = "1";
  const fe = {};
  fe[e(534)] = e(c ? 564 : 543);
  const M = {};
  M[e(497)] = e(519) + e(603) + "1)";
  const qe = {};
  qe.d = e(573) + e(536) + e(383) + e(467) + e(476) + e(645) + e(592) + e(379) + e(412) + e(475) + e(469) + e(433);
  const Re = {};
  Re.d = e(586) + e(420) + e(584) + e(394) + e(408) + e(594) + e(506) + e(523) + e(450) + e(409) + e(419) + e(447) + e(632) + e(582) + e(513) + e(601) + e(464) + e(552) + e(652) + e(531) + e(501) + e(396) + e(368) + e(507) + e(615) + e(550) + e(520) + e(430) + e(642) + e(568) + e(401) + e(610) + e(635) + e(421) + e(626) + e(435) + e(385) + e(563) + e(524);
  const at = {};
  at[e(534)] = e(614);
  const Tt = {};
  Tt[e(497)] = e(519) + e(603) + "1)";
  const it = {};
  it.d = e(514) + e(553) + e(537) + e(608) + e(495) + e(639) + e(499) + e(423) + e(461) + e(500) + e(438) + e(619) + e(468) + e(439) + e(483) + e(663) + e(503) + e(436) + e(583) + e(512) + e(502) + e(526) + e(600) + e(655) + e(375) + e(369);
  const Ot = {};
  Ot[e(534)] = e(397);
  const Me = {};
  Me[e(497)] = e(519) + e(603) + "1)";
  const Ae = {};
  Ae.d = e(395) + e(606) + e(587) + e(662);
  const Ge = {};
  Ge[e(534)] = e(593);
  const mt = {};
  mt[e(497)] = e(519) + e(603) + "1)";
  const ct = {};
  ct.d = e(560) + e(510) + e(522) + e(528) + e(527) + e(516) + e(591) + e(387) + e(664);
  const on = {};
  on[e(534)] = e(488);
  const sn = {};
  sn[e(497)] = e(519) + e(603) + "1)";
  const En = {};
  En.d = e(462) + e(544) + e(477) + e(478) + e(639) + e(509) + e(444) + e(525) + e(612);
  const an = {};
  return an[e(534)] = e(566), U.jsxs(U.Fragment, { children: [s[e(432)][e(631)] ? U.jsxs(pv, { id: e(373) + e(484) + r, style: ne, ref: w, children: [U.jsxs(Ft, { "data-id": e(607), children: [U.jsx(e(609), { xmlns: e(393) + e(611) + e(529), width: "28", height: "28", viewBox: e(425), style: re, children: U.jsx(e(380), oe) }), U.jsx(zt, K)] }), U.jsxs(Ft, { "data-id": e(565), children: [U.jsxs(e(609), { xmlns: e(393) + e(611) + e(529), width: "28", height: "28", viewBox: e(425), style: ee, children: [U.jsx(e(380), pe), U.jsx(e(380), ue)] }), U.jsx(zt, ve)] }), U.jsxs(Ft, { "data-id": e(378), children: [U.jsx(e(609), { xmlns: e(393) + e(611) + e(529), width: "28", height: "28", viewBox: e(425), style: P, children: U.jsx(e(380), L) }), U.jsx(zt, R)] }), U.jsxs(Ft, { "data-id": e(372), children: [U.jsxs(e(609), { xmlns: e(393) + e(611) + e(529), width: "28", height: "28", viewBox: e(425), style: N, children: [U.jsx(e(380), b), U.jsx(e(428), B)] }), U.jsx(zt, fe)] }), U.jsxs(Ft, { "data-id": e(391), children: [U.jsxs(e(609), { xmlns: e(393) + e(611) + e(529), width: "25", height: "25", viewBox: e(425), style: M, children: [U.jsx(e(380), qe), U.jsx(e(380), Re)] }), U.jsx(zt, at)] }), U.jsxs(Ft, { "data-id": e(485), children: [U.jsx(e(609), { xmlns: e(393) + e(611) + e(529), width: "28", height: "28", viewBox: e(425), style: Tt, children: U.jsx(e(380), it) }), U.jsx(zt, Ot)] }), U.jsxs(Ft, { "data-id": e(562), children: [U.jsx(e(609), { xmlns: e(393) + e(611) + e(529), width: "28", height: "28", viewBox: e(425), style: Me, children: U.jsx(e(380), Ae) }), U.jsx(zt, Ge)] }), U.jsxs(Ft, { "data-id": e(539), children: [U.jsx(e(609), { xmlns: e(393) + e(611) + e(529), width: "28", height: "28", viewBox: e(425), style: mt, children: U.jsx(e(380), ct) }), U.jsx(zt, on)] }), U.jsxs(Ft, { "data-id": e(426), children: [U.jsx(e(609), { xmlns: e(393) + e(611) + e(529), width: "28", height: "28", viewBox: e(425), style: sn, children: U.jsx(e(380), En) }), U.jsx(zt, an)] })] }) : null, U.jsx(gv, { id: e(373) + e(646) + "s_" + r, className: e(589), ref: E, style: y, children: U.jsx(mv, { style: j, src: xv, className: e(589), id: e(373) + e(576) + r, alt: e(402), ref: m, draggable: !1 }) })] });
}), De = qn;
function Lo() {
  const n = ["uApKq", "prefer-har", "portrait", "yRmqL", "YyyRF", "resizedWid", "ctx", "2129694pwHqeV", "error", "iframe", "concat", "EiLqU", "translate", "now", "scale", "7FZXenb", "setIsConne", "codedWidth", "52dngTbf", "dware", "avc1.64001", "codedHeigh", "configure", "state", "concatUint", "canvas", "width", "height", "celeration", "zueeo", "maxWidth", "rotate", "598714MEYnmb", "decode", "setOrienta", "clearRect", "setVideoMe", "buildDecod", "round", "from", "decoder", "iACiE", "4026SKEVgf", "getContext", "lock", "videoMeta", "codec", "2036510AzQnLi", "rLatency", "545QKtRlx", "orientatio", "rootSize", "tion", "nSlBs", "200lAbnUK", "length", "een", "UDNxE", "OfySW", "1SIpZjT", "isPlay", "5676eokTsH", "8Arrays", "Decoder er", "1184304hhzFEM", "9DTHxua", "delta", "key", "landscape", "ror:", "14571njJIJg", "isKeyFrame", "setFullscr", "optimizeFo", "isMobile", "autoResize", "innerHeigh", "close", "5976GcTPLf", "NvUUx", "hardwareAc", "drawImage"];
  return Lo = function() {
    return n;
  }, Lo();
}
(function(n, t) {
  const e = qn, r = n();
  for (; ; )
    try {
      if (-parseInt(e(488)) / 1 * (-parseInt(e(543)) / 2) + -parseInt(e(499)) / 3 * (-parseInt(e(483)) / 4) + parseInt(e(560)) / 5 * (-parseInt(e(553)) / 6) + parseInt(e(526)) / 7 * (-parseInt(e(493)) / 8) + parseInt(e(494)) / 9 * (parseInt(e(558)) / 10) + -parseInt(e(490)) / 11 * (-parseInt(e(507)) / 12) + -parseInt(e(529)) / 13 * (parseInt(e(518)) / 14) === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Lo, 173165);
function qn(n, t) {
  const e = Lo();
  return qn = function(r, o) {
    return r = r - 480, e[r];
  }, qn(n, t);
}
var Kc, Zc, Jc, Qc, el, tl, nl, rl, ol;
ol = De(501) + De(485), rl = De(516) + "th", nl = De(545) + De(481), tl = De(504), el = De(547) + "ta", Qc = De(548) + "er", Jc = De(500), Zc = De(535) + De(491), Kc = De(544);
class Sv {
  constructor(t, e, r, o) {
    kt(this, ol, (t) => {
      const e = De;
      if (t)
        if (e(508) === e(508)) {
          const r = window[e(505) + "t"] + 10, o = this[e(516) + "th"](null, this[e(480)][e(537)], this[e(480)][e(538)], r, r);
          this[e(537)] = o[e(537)], this[e(538)] = o[e(538)];
        } else {
          let r;
          return _0x5f32d6 && _0x5e3694 > this[e(541)] && _0x3d983b > _0x1a06af && (_0x920907 = this[e(541)]), _0x939757 && (r = _0x2f4dbe / _0x4fb7fd * _0x5eae09, r > _0x21f658 && (_0xcde46 = _0x22c1a9 / _0x5430b5 * _0x3f5d85, r = _0x1ef903 / _0x678679 * _0x6b1fec)), { width: _0x3ffc06[e(549)](_0x38300a), height: _0x4798c6[e(549)](r) };
        }
      else e(514) !== e(486) ? (this[e(537)] = this[e(480)][e(537)], this[e(538)] = this[e(480)][e(538)]) : (this[e(536)] = _0x1fe4c4, this[e(541)] = _0xcf44ba, this[e(503)] = _0x15cfc9, this[e(527) + "ct"] = _0x29be2d, this[e(517)] = _0x1d6375[e(554)]("2d"), this[e(551)] = this[e(548) + "er"](), this[e(556)] = null, this[e(520)] = null, this[e(489)] = null, this[e(537)] = null, this[e(538)] = null, this[e(480)] = null, this[e(561) + "n"] = e(513));
    });
    kt(this, rl, (t, e, r, o, i) => {
      const s = De;
      let a;
      return t && o > this[s(541)] && r > e && (i = this[s(541)]), i && (s(487) !== s(487) ? (_0x4f2220 = _0x42413a / _0x112f4a * _0x12483e, _0xb5ef93 = _0x5cd010 / _0x1c0ee0 * _0x5765ec) : (a = i / e * r, a > o && (i = o / r * e, a = o / e * e))), { width: Math[s(549)](i), height: Math[s(549)](a) };
    });
    kt(this, nl, (t) => {
      const e = De;
      this[e(561) + "n"] = t, this[e(503)] && screen[e(561) + "n"][e(555)](t);
    });
    kt(this, tl, (t, e) => {
      var a;
      const r = De, o = this[r(503)] == !0 ? window[r(505) + "t"] - 12 : window[r(505) + "t"] - 50, i = this[r(516) + "th"](!0, t, e, o, o);
      this[r(537)] = i[r(537)], this[r(538)] = i[r(538)], !this[r(480)] && (r(515) !== r(482) ? (a = this[r(527) + "ct"]) == null || a.call(this, !0) : this[r(504)](_0x2eb3d1[r(528)], _0x38d663[r(532) + "t"]));
      const s = {};
      s[r(537)] = i[r(537)], s[r(538)] = i[r(538)], this[r(480)] = s;
    });
    kt(this, el, (t) => {
      const e = De, r = t instanceof Uint8Array ? t : new Uint8Array(t);
      this[e(556)] = r;
    });
    kt(this, Qc, () => {
      const t = De, e = new VideoDecoder({ output: async (o) => {
        const i = qn, s = await createImageBitmap(o);
        (!this[i(537)] || !this[i(538)]) && (i(511) === i(540) ? (this[i(536)][i(537)] = this[i(537)], this[i(536)][i(538)] = this[i(538)], this[i(517)][i(510)](_0x5f37d7, 0, 0, this[i(537)], this[i(538)])) : this[i(504)](o[i(528)], o[i(532) + "t"])), this[i(517)][i(546)](0, 0, this[i(537)], this[i(538)]), this[i(561) + "n"] == i(497) ? (this[i(536)][i(537)] = this[i(538)], this[i(536)][i(538)] = this[i(537)], this[i(517)][i(523)](0, this[i(537)]), this[i(517)][i(542)](Math.PI / 2), this[i(517)][i(525)](-1, -1), this[i(517)][i(510)](s, 0, 0, this[i(537)], this[i(538)])) : (this[i(536)][i(537)] = this[i(537)], this[i(536)][i(538)] = this[i(538)], this[i(517)][i(510)](s, 0, 0, this[i(537)], this[i(538)])), s[i(506)](), o[i(506)]();
      }, error: (o) => console[t(519)](t(492) + t(498), o) }), r = {};
      return r[t(557)] = t(531) + "E", r[t(509) + t(539)] = t(512) + t(530), r[t(502) + t(559)] = !0, e[t(533)](r), e;
    });
    kt(this, Jc, (t) => {
      const e = De;
      for (let r = 0; r <= t[e(484)] - 4; r++)
        if (e(552) !== e(552)) this[e(520)] = _0x4d6b0e;
        else if (t[r] === 0 && t[r + 1] === 0 && t[r + 2] === 0 && t[r + 3] === 1)
          return (t[r + 4] & 31) === 5;
      for (let r = 0; r <= t[e(484)] - 3; r++)
        if (e(522) === e(522)) {
          if (t[r] === 0 && t[r + 1] === 0 && t[r + 2] === 1)
            return (t[r + 3] & 31) === 5;
        } else _0x1fc3bd = _0x43f174 / _0x3f1110 * _0x1bbf67, _0x2c294e > _0x17b105 && (_0x1fc9f7 = _0x440b4e / _0x562ae1 * _0x2a23af, _0xf78bb0 = _0x496d68 / _0xb1b56b * _0x25d4f5);
      return !1;
    });
    kt(this, Zc, (t, e) => {
      const r = De, o = Array[r(550)](t)[r(521)](Array[r(550)](e));
      return new Uint8Array(o);
    });
    kt(this, Kc, (t) => {
      const e = De;
      if (!this[e(551)] || this[e(551)][e(534)] == e(506) || !this[e(556)]) return;
      let r = t instanceof Uint8Array ? t : new Uint8Array(t);
      const o = this[e(500)](r);
      o && (this[e(520)] = r), this[e(520)] && this[e(556)] && (!this[e(489)] && (r = this[e(535) + e(491)](this[e(556)], this[e(520)]), this[e(489)] = !0), this[e(551)][e(544)](new EncodedVideoChunk({ timestamp: performance[e(524)]() * 1e3, type: e(o ? 496 : 495), data: r })));
    });
    const i = qn;
    this[i(536)] = t, this[i(541)] = e, this[i(503)] = r, this[i(527) + "ct"] = o, this[i(517)] = t[i(554)]("2d"), this[i(551)] = this[i(548) + "er"](), this[i(556)] = null, this[i(520)] = null, this[i(489)] = null, this[i(537)] = null, this[i(538)] = null, this[i(480)] = null, this[i(561) + "n"] = i(513);
  }
}
(function(n, t) {
  const e = In, r = n();
  for (; ; )
    try {
      if (parseInt(e(432)) / 1 * (-parseInt(e(448)) / 2) + -parseInt(e(458)) / 3 + parseInt(e(526)) / 4 + parseInt(e(488)) / 5 * (-parseInt(e(517)) / 6) + parseInt(e(461)) / 7 * (-parseInt(e(464)) / 8) + -parseInt(e(551)) / 9 + parseInt(e(480)) / 10 * (parseInt(e(435)) / 11) === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Do, 206077);
function Do() {
  const n = ["webkitFull", "message", "stener", "ror", "PiVQm", "FIbom", "screen", "screenElem", "LDuJG", "iting for ", "type", "isMobile", "fullscreen", " closed co", "34QakJyw", "Content-Ty", "connection", "3219579xZFpJH", "setFullscr", "center", "COPY_TEXT", "NfkAn", "value", "eenElement", "de: ", "response", "rUKoC", "device_id", "set", "emit", "8914zSrPeG", "onScreenEv", "control", "length", "screen_", "QDJCA", "method", "sync", "status", "uVaDz", "690120GMQdns", "text", "width", "1700461dKdjtX", "writeText", "setOrienta", "8adcuws", "data", "n/json", "delete", "error", "post", "size", "false", "CqpBt", "OQTng", "screen_mai", "fXxKI", "current", "map", "OWAgO", "vxsmM", "30inlDFa", "type_clien", "TlhAp", "image_", "action", "info", "password", "shortcutEv", "30ZFIUtF", "removeEven", "meta", "connect_er", "enElement", "timeout", "fixTouch", "NNyHL", "video_meta", "children", "KmUWT", "cQDHj", "mozFullScr", "headers", "yUoyd", "LofxC", "iframe", "taskId", "userAgent", "LIctV", "change", "code", "BMYap", "pfasd", "test", "url", "aWHnI", "Element", "msFullscre", "157116kdvARf", "een", "oCMst", "addEventLi", "cpGFb", "ent", "get", "clipboard", "middle", "771916rXhwrH", "marginTop", "isDown", "disconnect", "msg", "ehgNj", "get_video_", "join_room", "XrKeO", "setVideoMe", "decode", "WULrx", "HPmNx", "height", "kVwMf", "tListener", "orientatio", "onSyncIFra", "showMenu", "reconnecti", "shortcut", "connect", "bgCeV", "draggable", "XfGWP", "750168qNTwjG", "applicatio", "large", "jWhNR", "MKroJ", "Timeout wa", "tabIndex", "passwd", "tion", "jfMUy"];
  return Do = function() {
    return n;
  }, Do();
}
function In(n, t) {
  const e = Do();
  return In = function(r, o) {
    return r = r - 417, e[r];
  }, In(n, t);
}
const Wv = il((n, t) => {
  const e = In, { serve: r, dataDevice: o, maxWidth: i, showAssistive: s, showDeviceId: a, syncEvent: c, syncButton: u } = n, f = o[e(445)], d = /iPhone|iPad|iPod|Android/i[e(512)](navigator[e(506)]), l = e(450), v = $e(null), g = $e(null), p = $e(null), [h, E] = et(null), [w, m] = et(null), A = {};
  A[e(544)] = !1, A[e(528)] = !1;
  const [y, O] = et(A), [C, j] = et(null), z = e(483) + f, Y = e(452) + f, ne = e(474) + "n_" + f, $ = $e(null), [F, W] = et([]), H = $e(null), G = $e(/* @__PURE__ */ new Map());
  tt(() => {
    m(a);
  }, [a]);
  const Q = (P) => {
    W((L) => [...L, P]);
  }, Z = (P) => {
    const L = e;
    v[L(476)][L(447)](L(419), P), c == null || c(P);
  };
  sl(t, () => ({ api: async function(P, L = 5e3) {
    return new Promise((R, N) => {
      const b = In, B = setTimeout(() => {
        const fe = In;
        G[fe(476)][fe(467)](P[fe(505)]);
        const M = {};
        M[fe(484)] = P[fe(484)], M[fe(505)] = P[fe(505)], M[fe(456)] = !1, M[fe(419)] = fe(556) + fe(427) + fe(443), N(M);
      }, L);
      G[b(476)][b(446)](P[b(505)], (fe) => {
        const M = b;
        if (M(422) === M(422)) clearTimeout(B), R(fe);
        else {
          const qe = _0x4186f6[M(430) + M(515)] || _0x58384f[M(418) + M(425) + M(522)] || _0x59d6eb[M(500) + M(441)] || _0x59c161[M(516) + M(492)];
          _0x1644b1[M(476)][M(436) + M(518)](!!qe), _0xb721ca[M(476)][M(436) + M(518)](!!qe), _0x504ce7[M(476)][M(494)]();
        }
      }), v[b(476)][b(447)](b(419), P);
    });
  }, sync: function(P) {
    const L = e;
    L(423) === L(423) ? v[L(476)][L(447)](L(419), P) : _0x3efd60(_0x4de8cc);
  } })), tt(() => {
    const P = e;
    P(498) === P(498) ? (async () => {
      const L = P;
      if (L(502) !== L(472)) try {
        const R = {};
        R[L(433) + "pe"] = L(552) + L(466);
        const N = {};
        N[L(445)] = o[L(445)], N[L(486)] = o[L(558)];
        const b = {};
        b[L(513)] = r, b[L(454)] = L(469), b[L(493)] = 1e4, b[L(501)] = R, b[L(465)] = N;
        const B = b, fe = await sv(B);
        E(fe[L(465)]);
      } catch (R) {
        if (L(439) !== L(537)) {
          const N = {};
          N[L(530)] = R, N[L(428)] = L(468), Q(N);
        } else _0x47f533(!_0x569a57);
      }
      else if (_0x1694e9 === _0xa05d1d) {
        const R = { ..._0x121215 };
        R[L(544)] = !1, _0x95c155(R);
      } else _0x34a7e2(_0x1369d3);
    })() : _0x508c4c[P(476)][P(536)](_0x214b24);
  }, []), tt(() => {
    const P = e;
    if (v[P(476)] || !h) return;
    const L = {};
    L[P(545) + "on"] = !1;
    const R = no(h, L);
    return R.on(P(547), () => {
      const N = P;
      if (N(555) !== N(453)) {
        const b = {};
        b[N(484)] = N(547), b[N(481) + "t"] = l, b[N(445)] = o[N(445)], b[N(429)] = d, b[N(558)] = o[N(558)], R[N(447)](N(533), b);
      } else {
        const b = _0x58ac6c[N(476)];
        _0x211869[N(476)] = new _0x28ea84(b, _0x586986, _0xa53f90, _0x114291);
      }
    }), R.on(P(533), (N) => {
      const b = P;
      if (N[b(456)] == !0) {
        v[b(476)] = R;
        const B = {};
        B[b(484)] = b(449) + b(522), R[b(447)](b(419), B);
      } else if (b(507) === b(507)) {
        const B = {};
        B[b(530)] = N[b(530)], B[b(428)] = b(468), Q(B);
      } else {
        const B = {};
        B[b(484)] = b(547), B[b(481) + "t"] = _0x50cd67, B[b(445)] = _0x9763be[b(445)], B[b(429)] = _0x1a283f, B[b(558)] = _0x296baa[b(558)], _0x3df809[b(447)](b(533), B);
      }
    }), R.on(P(424), (N) => {
      const b = P;
      if (b(550) === b(495)) {
        const B = {};
        B[b(530)] = _0x1e9bb7[b(530)], B[b(428)] = b(468), _0x42d83e(B);
      } else H[b(476)][b(536)](N);
    }), R.on(P(496), (N) => {
      const b = P;
      if (b(511) !== b(511)) _0x33af30[b(524)][b(462)](_0xeaa13c[b(459)]);
      else if (N)
        if (b(538) === b(538)) {
          if (H[b(476)][b(535) + "ta"](N), !H[b(476)][b(504)]) {
            const B = {};
            B[b(484)] = b(543) + "me", R[b(447)](b(419), B);
          }
        } else _0x1f4587[b(476)][b(447)](b(419), _0x369602);
      else {
        const B = {};
        B[b(484)] = b(532) + b(490), R[b(447)](b(496), B);
      }
    }), R.on(P(419), (N) => {
      const b = P;
      if (b(482) === b(482)) {
        if ((N[b(484)] == b(438) || N[b(484)] == b(487) + b(522)) && N[b(459)][b(451)] > 0 ? navigator[b(524)][b(462)](N[b(459)]) : N[b(484)] == b(542) + "n" && (b(426) === b(426) ? (H[b(476)][b(463) + b(559)](N[b(440)]), $[b(476)][b(494)](N[b(440)])) : _0x3b8466 && _0x38890e[b(529)]()), N[b(505)])
          if (b(519) === b(519)) {
            const B = G[b(476)][b(523)](N[b(505)]);
            if (B)
              if (b(444) === b(417))
                if (_0xe6faee[b(456)] == !0) {
                  _0x3e8e49[b(476)] = _0x29dd73;
                  const fe = {};
                  fe[b(484)] = b(449) + b(522), _0x2faa55[b(447)](b(419), fe);
                } else {
                  const fe = {};
                  fe[b(530)] = _0x38ed40[b(530)], fe[b(428)] = b(468), _0x5356c4(fe);
                }
              else B(N), G[b(476)][b(467)](N[b(505)]);
          } else {
            const B = _0x34a374[b(476)][b(523)](_0x108af2[b(505)]);
            B && (B(_0x3885f9), _0x2c4d3d[b(476)][b(467)](_0x105281[b(505)]));
          }
      } else {
        _0x247e9b[b(476)] = _0x419725;
        const B = {};
        B[b(484)] = b(449) + b(522), _0x505329[b(447)](b(419), B);
      }
    }), R.on(P(491) + P(421), (N) => {
      const b = P;
      if (b(473) === b(534)) _0x4b8788((B) => [...B, _0x1d4802]);
      else {
        const B = {};
        B[b(530)] = N, B[b(428)] = b(468), Q(B);
      }
    }), R.on(P(529), (N) => {
      const b = P;
      if (b(531) === b(531)) {
        const B = {};
        B[b(530)] = b(434) + b(431) + b(442) + N[b(509)], B[b(428)] = b(485), Q(B);
      } else _0xd0fcb(_0x1b3870);
    }), () => {
      const N = P;
      if (N(554) !== N(554)) {
        const b = {};
        b[N(530)] = _0x4b993f, b[N(428)] = N(468), _0xb3aef4(b);
      } else R && R[N(529)]();
    };
  }, [h]), tt(() => {
    const P = e;
    if (P(521) === P(510))
      if (_0x24a5b2) {
        if (_0x3115fe[P(476)][P(535) + "ta"](_0x2738cc), !_0xd8aa89[P(476)][P(504)]) {
          const L = {};
          L[P(484)] = P(543) + "me", _0x5ebbc5[P(447)](P(419), L);
        }
      } else {
        const L = {};
        L[P(484)] = P(532) + P(490), _0x29d859[P(447)](P(496), L);
      }
    else {
      const L = p[P(476)];
      H[P(476)] = new Sv(L, i, d, j);
    }
  }, []), tt(() => {
    const P = e;
    if (P(475) !== P(475)) {
      const L = _0xe61399(() => {
        const R = P;
        _0x33f62f[R(476)][R(467)](_0x18b43d[R(505)]);
        const N = {};
        N[R(484)] = _0x1c3fb7[R(484)], N[R(505)] = _0x17430c[R(505)], N[R(456)] = !1, N[R(419)] = R(556) + R(427) + R(443), _0x1d41db(N);
      }, _0xd07130);
      _0x5638cb[P(476)][P(446)](_0x236187[P(505)], (R) => {
        _0x41d3a7(L), _0x33ac42(R);
      }), _0x52d767[P(476)][P(447)](P(419), _0x5e33be);
    } else {
      const L = () => {
        const R = P;
        if (R(540) === R(457)) _0xfcb441(_0x224507), _0x2f4f7b(_0x3f4bb0);
        else {
          const N = document[R(430) + R(515)] || document[R(418) + R(425) + R(522)] || document[R(500) + R(441)] || document[R(516) + R(492)];
          H[R(476)][R(436) + R(518)](!!N), $[R(476)][R(436) + R(518)](!!N), $[R(476)][R(494)]();
        }
      };
      return document[P(520) + P(420)](P(430) + P(508), L), () => {
        const R = P;
        document[R(489) + R(541)](R(430) + R(508), L);
      };
    }
  }, []);
  const J = {};
  J[e(497)] = o[e(445)];
  const re = {};
  re[e(470)] = e(553);
  const oe = {};
  oe[e(470)] = e(553);
  const K = {};
  K[e(470)] = e(553);
  const ee = {};
  ee[e(539)] = 0, ee[e(460)] = 0;
  const pe = {};
  pe[e(523)] = y, pe[e(446)] = O;
  const ue = {};
  ue.id = z, ue[e(557)] = "0", ue[e(549)] = e(471);
  const ve = {};
  return ve[e(527)] = 5, U.jsxs(pd, { id: ne, children: [w && U.jsx(yd, { children: U.jsx(vd, J) }), F[e(451)] == 0 ? U.jsxs(U.Fragment, { children: [!C && U.jsxs(bf, { align: e(437), gap: e(525), children: [U.jsx(xr, re), U.jsx(xr, oe), U.jsx(xr, K)] }), U.jsxs(md, { ref: g, id: Y, style: C ? {} : ee, children: [s ? U.jsx(bv, { status: pe, ref: $, imageRef: p, displayId: f, isMobile: d, isShowDeviceId: w, onSenData: (P, L) => {
    const R = e;
    if (R(514) !== R(514)) _0x4685e7(_0x5c107e), _0x7197c2[R(476)][R(467)](_0x2449b5[R(505)]);
    else if (P === Ds && L[R(546)] === R(445))
      if (R(479) === R(478)) {
        const N = {};
        N[R(484)] = R(543) + "me", _0x581e88[R(447)](R(419), N);
      } else m(!w);
    else if (P === Ds && L[R(546)] === R(455)) u(o[R(445)]);
    else if (R(548) === R(499)) {
      const N = {};
      N[R(484)] = R(532) + R(490), _0x5027af[R(447)](R(496), N);
    } else Z(L);
  } }) : null, U.jsx(hv, { canvasContent: ue, imageRef: p, isMobile: d, assistive: y, onImgEvent: (P, L) => {
    const R = e;
    if (P === Gf) {
      const N = { ...y };
      N[R(544)] = !1, O(N);
    } else R(503) === R(503) ? Z(L) : (_0x5d2148[R(476)][R(463) + R(559)](_0x2b190d[R(440)]), _0x1cf7c3[R(476)][R(494)](_0x22b4bc[R(440)]));
  } })] })] }) : F[e(477)]((P, L) => U.jsx(mf, { style: ve, message: P[e(530)], type: P[e(428)], showIcon: !0, closable: !0 }, L))] });
});
function Bo() {
  var n = ["8871926bTGtnh", "2422524dhtNCz", "6IFoJbl", "2719168wmfWgZ", "2779650ZsqqTa", "1244809JCBLwT", "38449240iqKyNf", "478340sNmtof"];
  return Bo = function() {
    return n;
  }, Bo();
}
(function(n, t) {
  for (var e = Bs, r = n(); ; )
    try {
      var o = parseInt(e(234)) / 1 + parseInt(e(233)) / 2 + parseInt(e(231)) / 3 * (parseInt(e(232)) / 4) + -parseInt(e(236)) / 5 + parseInt(e(230)) / 6 + parseInt(e(229)) / 7 + -parseInt(e(235)) / 8;
      if (o === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Bo, 763567);
function Bs(n, t) {
  var e = Bo();
  return Bs = function(r, o) {
    r = r - 229;
    var i = e[r];
    return i;
  }, Bs(n, t);
}
export {
  Wv as ViewRP
};
