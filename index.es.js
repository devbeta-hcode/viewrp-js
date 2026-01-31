var Vm = Object.defineProperty;
var Hm = (e, r, t) => r in e ? Vm(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var it = (e, r, t) => Hm(e, typeof r != "symbol" ? r + "" : r, t);
import * as x from "react";
import Q, { useDebugValue as Rf, createElement as Wm, useRef as Pe, useContext as ir, createContext as _s, useEffect as ut, isValidElement as kh, version as qm, useLayoutEffect as Um, forwardRef as Wr, useState as Mt, useMemo as Nn, Children as Gm, useImperativeHandle as mi, cloneElement as Km } from "react";
import * as Lh from "react-dom";
import $f, { createPortal as Xm } from "react-dom";
var Uo = ja;
(function(e, r) {
  for (var t = ja, n = e(); ; )
    try {
      var o = -parseInt(t(294)) / 1 + -parseInt(t(310)) / 2 * (parseInt(t(305)) / 3) + parseInt(t(319)) / 4 + -parseInt(t(304)) / 5 * (-parseInt(t(306)) / 6) + -parseInt(t(313)) / 7 + -parseInt(t(303)) / 8 + parseInt(t(296)) / 9;
      if (o === r) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Fa, 732620);
typeof globalThis !== Uo(314) || typeof window !== Uo(314) || (typeof global !== Uo(314) ? global : Uo(314));
function zh(e) {
  var r = Uo;
  return e && e[r(309)] && Object[r(316)][r(324) + r(302)][r(299)](e, r(320)) ? e[r(320)] : e;
}
function Fa() {
  var e = ["apply", "getOwnProp", "hasOwnProp", "uNhUc", "1451242wPkloe", "function", "30713220bTjaiI", "ptor", "value", "call", "constructo", "length", "erty", "3332432texXfD", "5ugzNhK", "61743eZNXuJ", "3401022NZsWjD", "forEach", "get", "__esModule", "16GtbyKA", "kRItc", "defineProp", "8764147qkMTFw", "undefined", "keys", "prototype", "DTzeJ", "construct", "150672XHscXy", "default", "ertyDescri"];
  return Fa = function() {
    return e;
  }, Fa();
}
function ja(e, r) {
  var t = Fa();
  return ja = function(n, o) {
    n = n - 293;
    var i = t[n];
    return i;
  }, ja(e, r);
}
var qi = { exports: {} }, jo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tf;
function Ym() {
  if (Tf) return jo;
  Tf = 1;
  var e = Q, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(s, c, l) {
    var u, f = {}, h = null, m = null;
    l !== void 0 && (h = "" + l), c.key !== void 0 && (h = "" + c.key), c.ref !== void 0 && (m = c.ref);
    for (u in c) n.call(c, u) && !i.hasOwnProperty(u) && (f[u] = c[u]);
    if (s && s.defaultProps) for (u in c = s.defaultProps, c) f[u] === void 0 && (f[u] = c[u]);
    return { $$typeof: r, type: s, key: h, ref: m, props: f, _owner: o.current };
  }
  return jo.Fragment = t, jo.jsx = a, jo.jsxs = a, jo;
}
var Do = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pf;
function Jm() {
  return Pf || (Pf = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Q, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), d = Symbol.iterator, g = "@@iterator";
    function p(R) {
      if (R === null || typeof R != "object")
        return null;
      var ee = d && R[d] || R[g];
      return typeof ee == "function" ? ee : null;
    }
    var y = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(R) {
      {
        for (var ee = arguments.length, oe = new Array(ee > 1 ? ee - 1 : 0), Ce = 1; Ce < ee; Ce++)
          oe[Ce - 1] = arguments[Ce];
        S("error", R, oe);
      }
    }
    function S(R, ee, oe) {
      {
        var Ce = y.ReactDebugCurrentFrame, Je = Ce.getStackAddendum();
        Je !== "" && (ee += "%s", oe = oe.concat([Je]));
        var Qe = oe.map(function(ke) {
          return String(ke);
        });
        Qe.unshift("Warning: " + ee), Function.prototype.apply.call(console[R], console, Qe);
      }
    }
    var C = !1, v = !1, _ = !1, w = !1, A = !1, M;
    M = Symbol.for("react.module.reference");
    function k(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === n || R === i || A || R === o || R === l || R === u || w || R === m || C || v || _ || typeof R == "object" && R !== null && (R.$$typeof === h || R.$$typeof === f || R.$$typeof === a || R.$$typeof === s || R.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === M || R.getModuleId !== void 0));
    }
    function V(R, ee, oe) {
      var Ce = R.displayName;
      if (Ce)
        return Ce;
      var Je = ee.displayName || ee.name || "";
      return Je !== "" ? oe + "(" + Je + ")" : oe;
    }
    function U(R) {
      return R.displayName || "Context";
    }
    function L(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case n:
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
      if (typeof R == "object")
        switch (R.$$typeof) {
          case s:
            var ee = R;
            return U(ee) + ".Consumer";
          case a:
            var oe = R;
            return U(oe._context) + ".Provider";
          case c:
            return V(R, R.render, "ForwardRef");
          case f:
            var Ce = R.displayName || null;
            return Ce !== null ? Ce : L(R.type) || "Memo";
          case h: {
            var Je = R, Qe = Je._payload, ke = Je._init;
            try {
              return L(ke(Qe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var z = Object.assign, H = 0, P, I, N, B, W, Y, X;
    function Z() {
    }
    Z.__reactDisabledLog = !0;
    function G() {
      {
        if (H === 0) {
          P = console.log, I = console.info, N = console.warn, B = console.error, W = console.group, Y = console.groupCollapsed, X = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: Z,
            writable: !0
          };
          Object.defineProperties(console, {
            info: R,
            log: R,
            warn: R,
            error: R,
            group: R,
            groupCollapsed: R,
            groupEnd: R
          });
        }
        H++;
      }
    }
    function te() {
      {
        if (H--, H === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: z({}, R, {
              value: P
            }),
            info: z({}, R, {
              value: I
            }),
            warn: z({}, R, {
              value: N
            }),
            error: z({}, R, {
              value: B
            }),
            group: z({}, R, {
              value: W
            }),
            groupCollapsed: z({}, R, {
              value: Y
            }),
            groupEnd: z({}, R, {
              value: X
            })
          });
        }
        H < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = y.ReactCurrentDispatcher, de;
    function pe(R, ee, oe) {
      {
        if (de === void 0)
          try {
            throw Error();
          } catch (Je) {
            var Ce = Je.stack.trim().match(/\n( *(at )?)/);
            de = Ce && Ce[1] || "";
          }
        return `
` + de + R;
      }
    }
    var xe = !1, we;
    {
      var ae = typeof WeakMap == "function" ? WeakMap : Map;
      we = new ae();
    }
    function se(R, ee) {
      if (!R || xe)
        return "";
      {
        var oe = we.get(R);
        if (oe !== void 0)
          return oe;
      }
      var Ce;
      xe = !0;
      var Je = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Qe;
      Qe = ie.current, ie.current = null, G();
      try {
        if (ee) {
          var ke = function() {
            throw Error();
          };
          if (Object.defineProperty(ke.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ke, []);
            } catch (Et) {
              Ce = Et;
            }
            Reflect.construct(R, [], ke);
          } else {
            try {
              ke.call();
            } catch (Et) {
              Ce = Et;
            }
            R.call(ke.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Et) {
            Ce = Et;
          }
          R();
        }
      } catch (Et) {
        if (Et && Ce && typeof Et.stack == "string") {
          for (var Ie = Et.stack.split(`
`), yt = Ce.stack.split(`
`), at = Ie.length - 1, pt = yt.length - 1; at >= 1 && pt >= 0 && Ie[at] !== yt[pt]; )
            pt--;
          for (; at >= 1 && pt >= 0; at--, pt--)
            if (Ie[at] !== yt[pt]) {
              if (at !== 1 || pt !== 1)
                do
                  if (at--, pt--, pt < 0 || Ie[at] !== yt[pt]) {
                    var Ge = `
` + Ie[at].replace(" at new ", " at ");
                    return R.displayName && Ge.includes("<anonymous>") && (Ge = Ge.replace("<anonymous>", R.displayName)), typeof R == "function" && we.set(R, Ge), Ge;
                  }
                while (at >= 1 && pt >= 0);
              break;
            }
        }
      } finally {
        xe = !1, ie.current = Qe, te(), Error.prepareStackTrace = Je;
      }
      var Sr = R ? R.displayName || R.name : "", _r = Sr ? pe(Sr) : "";
      return typeof R == "function" && we.set(R, _r), _r;
    }
    function _e(R, ee, oe) {
      return se(R, !1);
    }
    function re(R) {
      var ee = R.prototype;
      return !!(ee && ee.isReactComponent);
    }
    function me(R, ee, oe) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return se(R, re(R));
      if (typeof R == "string")
        return pe(R);
      switch (R) {
        case l:
          return pe("Suspense");
        case u:
          return pe("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case c:
            return _e(R.render);
          case f:
            return me(R.type, ee, oe);
          case h: {
            var Ce = R, Je = Ce._payload, Qe = Ce._init;
            try {
              return me(Qe(Je), ee, oe);
            } catch {
            }
          }
        }
      return "";
    }
    var ce = Object.prototype.hasOwnProperty, ve = {}, Se = y.ReactDebugCurrentFrame;
    function ye(R) {
      if (R) {
        var ee = R._owner, oe = me(R.type, R._source, ee ? ee.type : null);
        Se.setExtraStackFrame(oe);
      } else
        Se.setExtraStackFrame(null);
    }
    function Ve(R, ee, oe, Ce, Je) {
      {
        var Qe = Function.call.bind(ce);
        for (var ke in R)
          if (Qe(R, ke)) {
            var Ie = void 0;
            try {
              if (typeof R[ke] != "function") {
                var yt = Error((Ce || "React class") + ": " + oe + " type `" + ke + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[ke] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw yt.name = "Invariant Violation", yt;
              }
              Ie = R[ke](ee, ke, Ce, oe, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (at) {
              Ie = at;
            }
            Ie && !(Ie instanceof Error) && (ye(Je), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ce || "React class", oe, ke, typeof Ie), ye(null)), Ie instanceof Error && !(Ie.message in ve) && (ve[Ie.message] = !0, ye(Je), b("Failed %s type: %s", oe, Ie.message), ye(null));
          }
      }
    }
    var $e = Array.isArray;
    function $(R) {
      return $e(R);
    }
    function O(R) {
      {
        var ee = typeof Symbol == "function" && Symbol.toStringTag, oe = ee && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return oe;
      }
    }
    function E(R) {
      try {
        return F(R), !1;
      } catch {
        return !0;
      }
    }
    function F(R) {
      return "" + R;
    }
    function T(R) {
      if (E(R))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", O(R)), F(R);
    }
    var ge = y.ReactCurrentOwner, Be = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, We, Le;
    function Ze(R) {
      if (ce.call(R, "ref")) {
        var ee = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (ee && ee.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function Fe(R) {
      if (ce.call(R, "key")) {
        var ee = Object.getOwnPropertyDescriptor(R, "key").get;
        if (ee && ee.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function ze(R, ee) {
      typeof R.ref == "string" && ge.current;
    }
    function le(R, ee) {
      {
        var oe = function() {
          We || (We = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ee));
        };
        oe.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: oe,
          configurable: !0
        });
      }
    }
    function Oe(R, ee) {
      {
        var oe = function() {
          Le || (Le = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ee));
        };
        oe.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: oe,
          configurable: !0
        });
      }
    }
    var he = function(R, ee, oe, Ce, Je, Qe, ke) {
      var Ie = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: R,
        key: ee,
        ref: oe,
        props: ke,
        // Record the component responsible for creating this element.
        _owner: Qe
      };
      return Ie._store = {}, Object.defineProperty(Ie._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ie, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ce
      }), Object.defineProperty(Ie, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Je
      }), Object.freeze && (Object.freeze(Ie.props), Object.freeze(Ie)), Ie;
    };
    function Ee(R, ee, oe, Ce, Je) {
      {
        var Qe, ke = {}, Ie = null, yt = null;
        oe !== void 0 && (T(oe), Ie = "" + oe), Fe(ee) && (T(ee.key), Ie = "" + ee.key), Ze(ee) && (yt = ee.ref, ze(ee, Je));
        for (Qe in ee)
          ce.call(ee, Qe) && !Be.hasOwnProperty(Qe) && (ke[Qe] = ee[Qe]);
        if (R && R.defaultProps) {
          var at = R.defaultProps;
          for (Qe in at)
            ke[Qe] === void 0 && (ke[Qe] = at[Qe]);
        }
        if (Ie || yt) {
          var pt = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          Ie && le(ke, pt), yt && Oe(ke, pt);
        }
        return he(R, Ie, yt, Je, Ce, ge.current, ke);
      }
    }
    var ft = y.ReactCurrentOwner, Jt = y.ReactDebugCurrentFrame;
    function Dt(R) {
      if (R) {
        var ee = R._owner, oe = me(R.type, R._source, ee ? ee.type : null);
        Jt.setExtraStackFrame(oe);
      } else
        Jt.setExtraStackFrame(null);
    }
    var J;
    J = !1;
    function D(R) {
      return typeof R == "object" && R !== null && R.$$typeof === r;
    }
    function Xe() {
      {
        if (ft.current) {
          var R = L(ft.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function De(R) {
      return "";
    }
    var tt = {};
    function Ae(R) {
      {
        var ee = Xe();
        if (!ee) {
          var oe = typeof R == "string" ? R : R.displayName || R.name;
          oe && (ee = `

Check the top-level render call using <` + oe + ">.");
        }
        return ee;
      }
    }
    function rt(R, ee) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var oe = Ae(ee);
        if (tt[oe])
          return;
        tt[oe] = !0;
        var Ce = "";
        R && R._owner && R._owner !== ft.current && (Ce = " It was passed a child from " + L(R._owner.type) + "."), Dt(R), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', oe, Ce), Dt(null);
      }
    }
    function Te(R, ee) {
      {
        if (typeof R != "object")
          return;
        if ($(R))
          for (var oe = 0; oe < R.length; oe++) {
            var Ce = R[oe];
            D(Ce) && rt(Ce, ee);
          }
        else if (D(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var Je = p(R);
          if (typeof Je == "function" && Je !== R.entries)
            for (var Qe = Je.call(R), ke; !(ke = Qe.next()).done; )
              D(ke.value) && rt(ke.value, ee);
        }
      }
    }
    function Ue(R) {
      {
        var ee = R.type;
        if (ee == null || typeof ee == "string")
          return;
        var oe;
        if (typeof ee == "function")
          oe = ee.propTypes;
        else if (typeof ee == "object" && (ee.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ee.$$typeof === f))
          oe = ee.propTypes;
        else
          return;
        if (oe) {
          var Ce = L(ee);
          Ve(oe, R.props, "prop", Ce, R);
        } else if (ee.PropTypes !== void 0 && !J) {
          J = !0;
          var Je = L(ee);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Je || "Unknown");
        }
        typeof ee.getDefaultProps == "function" && !ee.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function dt(R) {
      {
        for (var ee = Object.keys(R.props), oe = 0; oe < ee.length; oe++) {
          var Ce = ee[oe];
          if (Ce !== "children" && Ce !== "key") {
            Dt(R), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ce), Dt(null);
            break;
          }
        }
        R.ref !== null && (Dt(R), b("Invalid attribute `ref` supplied to `React.Fragment`."), Dt(null));
      }
    }
    var Qt = {};
    function dr(R, ee, oe, Ce, Je, Qe) {
      {
        var ke = k(R);
        if (!ke) {
          var Ie = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (Ie += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var yt = De();
          yt ? Ie += yt : Ie += Xe();
          var at;
          R === null ? at = "null" : $(R) ? at = "array" : R !== void 0 && R.$$typeof === r ? (at = "<" + (L(R.type) || "Unknown") + " />", Ie = " Did you accidentally export a JSX literal instead of a component?") : at = typeof R, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", at, Ie);
        }
        var pt = Ee(R, ee, oe, Je, Qe);
        if (pt == null)
          return pt;
        if (ke) {
          var Ge = ee.children;
          if (Ge !== void 0)
            if (Ce)
              if ($(Ge)) {
                for (var Sr = 0; Sr < Ge.length; Sr++)
                  Te(Ge[Sr], R);
                Object.freeze && Object.freeze(Ge);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Te(Ge, R);
        }
        if (ce.call(ee, "key")) {
          var _r = L(R), Et = Object.keys(ee).filter(function(zn) {
            return zn !== "key";
          }), rn = Et.length > 0 ? "{key: someKey, " + Et.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Qt[_r + rn]) {
            var Ao = Et.length > 0 ? "{" + Et.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, rn, _r, Ao, _r), Qt[_r + rn] = !0;
          }
        }
        return R === n ? dt(pt) : Ue(pt), pt;
      }
    }
    function je(R, ee, oe) {
      return dr(R, ee, oe, !0);
    }
    function xt(R, ee, oe) {
      return dr(R, ee, oe, !1);
    }
    var kt = xt, He = je;
    Do.Fragment = n, Do.jsx = kt, Do.jsxs = He;
  }()), Do;
}
var Nf;
function Qm() {
  return Nf || (Nf = 1, process.env.NODE_ENV === "production" ? qi.exports = Ym() : qi.exports = Jm()), qi.exports;
}
var ue = Qm(), rr = function() {
  return rr = Object.assign || function(r) {
    for (var t, n = 1, o = arguments.length; n < o; n++) {
      t = arguments[n];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i]);
    }
    return r;
  }, rr.apply(this, arguments);
};
function oo(e, r, t) {
  if (t || arguments.length === 2) for (var n = 0, o = r.length, i; n < o; n++)
    (i || !(n in r)) && (i || (i = Array.prototype.slice.call(r, 0, n)), i[n] = r[n]);
  return e.concat(i || Array.prototype.slice.call(r));
}
function Zm(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var ev = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, tv = /* @__PURE__ */ Zm(
  function(e) {
    return ev.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), vt = "-ms-", Jo = "-moz-", lt = "-webkit-", Bh = "comm", Cs = "rule", Fu = "decl", rv = "@import", Vh = "@keyframes", nv = "@layer", Hh = Math.abs, ju = String.fromCharCode, pl = Object.assign;
function ov(e, r) {
  return Vt(e, 0) ^ 45 ? (((r << 2 ^ Vt(e, 0)) << 2 ^ Vt(e, 1)) << 2 ^ Vt(e, 2)) << 2 ^ Vt(e, 3) : 0;
}
function Wh(e) {
  return e.trim();
}
function Kr(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function Ke(e, r, t) {
  return e.replace(r, t);
}
function xa(e, r, t) {
  return e.indexOf(r, t);
}
function Vt(e, r) {
  return e.charCodeAt(r) | 0;
}
function io(e, r, t) {
  return e.slice(r, t);
}
function kr(e) {
  return e.length;
}
function qh(e) {
  return e.length;
}
function Go(e, r) {
  return r.push(e), e;
}
function iv(e, r) {
  return e.map(r).join("");
}
function Af(e, r) {
  return e.filter(function(t) {
    return !Kr(t, r);
  });
}
var Es = 1, ao = 1, Uh = 0, yr = 0, Pt = 0, So = "";
function Os(e, r, t, n, o, i, a, s) {
  return { value: e, root: r, parent: t, type: n, props: o, children: i, line: Es, column: ao, length: a, return: "", siblings: s };
}
function ln(e, r) {
  return pl(Os("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, r);
}
function qn(e) {
  for (; e.root; )
    e = ln(e.root, { children: [e] });
  Go(e, e.siblings);
}
function av() {
  return Pt;
}
function sv() {
  return Pt = yr > 0 ? Vt(So, --yr) : 0, ao--, Pt === 10 && (ao = 1, Es--), Pt;
}
function Tr() {
  return Pt = yr < Uh ? Vt(So, yr++) : 0, ao++, Pt === 10 && (ao = 1, Es++), Pt;
}
function Rn() {
  return Vt(So, yr);
}
function ga() {
  return yr;
}
function Rs(e, r) {
  return io(So, e, r);
}
function xl(e) {
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
function cv(e) {
  return Es = ao = 1, Uh = kr(So = e), yr = 0, [];
}
function lv(e) {
  return So = "", e;
}
function wc(e) {
  return Wh(Rs(yr - 1, gl(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function uv(e) {
  for (; (Pt = Rn()) && Pt < 33; )
    Tr();
  return xl(e) > 2 || xl(Pt) > 3 ? "" : " ";
}
function fv(e, r) {
  for (; --r && Tr() && !(Pt < 48 || Pt > 102 || Pt > 57 && Pt < 65 || Pt > 70 && Pt < 97); )
    ;
  return Rs(e, ga() + (r < 6 && Rn() == 32 && Tr() == 32));
}
function gl(e) {
  for (; Tr(); )
    switch (Pt) {
      // ] ) " '
      case e:
        return yr;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && gl(Pt);
        break;
      // (
      case 40:
        e === 41 && gl(e);
        break;
      // \
      case 92:
        Tr();
        break;
    }
  return yr;
}
function dv(e, r) {
  for (; Tr() && e + Pt !== 57; )
    if (e + Pt === 84 && Rn() === 47)
      break;
  return "/*" + Rs(r, yr - 1) + "*" + ju(e === 47 ? e : Tr());
}
function hv(e) {
  for (; !xl(Rn()); )
    Tr();
  return Rs(e, yr);
}
function pv(e) {
  return lv(ma("", null, null, null, [""], e = cv(e), 0, [0], e));
}
function ma(e, r, t, n, o, i, a, s, c) {
  for (var l = 0, u = 0, f = a, h = 0, m = 0, d = 0, g = 1, p = 1, y = 1, b = 0, S = "", C = o, v = i, _ = n, w = S; p; )
    switch (d = b, b = Tr()) {
      // (
      case 40:
        if (d != 108 && Vt(w, f - 1) == 58) {
          xa(w += Ke(wc(b), "&", "&\f"), "&\f", Hh(l ? s[l - 1] : 0)) != -1 && (y = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        w += wc(b);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        w += uv(d);
        break;
      // \
      case 92:
        w += fv(ga() - 1, 7);
        continue;
      // /
      case 47:
        switch (Rn()) {
          case 42:
          case 47:
            Go(xv(dv(Tr(), ga()), r, t, c), c);
            break;
          default:
            w += "/";
        }
        break;
      // {
      case 123 * g:
        s[l++] = kr(w) * y;
      // } ; \0
      case 125 * g:
      case 59:
      case 0:
        switch (b) {
          // \0 }
          case 0:
          case 125:
            p = 0;
          // ;
          case 59 + u:
            y == -1 && (w = Ke(w, /\f/g, "")), m > 0 && kr(w) - f && Go(m > 32 ? Mf(w + ";", n, t, f - 1, c) : Mf(Ke(w, " ", "") + ";", n, t, f - 2, c), c);
            break;
          // @ ;
          case 59:
            w += ";";
          // { rule/at-rule
          default:
            if (Go(_ = If(w, r, t, l, u, o, s, S, C = [], v = [], f, i), i), b === 123)
              if (u === 0)
                ma(w, r, _, _, C, i, f, s, v);
              else
                switch (h === 99 && Vt(w, 3) === 110 ? 100 : h) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ma(e, _, _, n && Go(If(e, _, _, 0, 0, o, s, S, o, C = [], f, v), v), o, v, f, s, n ? C : v);
                    break;
                  default:
                    ma(w, _, _, _, [""], v, 0, s, v);
                }
        }
        l = u = m = 0, g = y = 1, S = w = "", f = a;
        break;
      // :
      case 58:
        f = 1 + kr(w), m = d;
      default:
        if (g < 1) {
          if (b == 123)
            --g;
          else if (b == 125 && g++ == 0 && sv() == 125)
            continue;
        }
        switch (w += ju(b), b * g) {
          // &
          case 38:
            y = u > 0 ? 1 : (w += "\f", -1);
            break;
          // ,
          case 44:
            s[l++] = (kr(w) - 1) * y, y = 1;
            break;
          // @
          case 64:
            Rn() === 45 && (w += wc(Tr())), h = Rn(), u = f = kr(S = w += hv(ga())), b++;
            break;
          // -
          case 45:
            d === 45 && kr(w) == 2 && (g = 0);
        }
    }
  return i;
}
function If(e, r, t, n, o, i, a, s, c, l, u, f) {
  for (var h = o - 1, m = o === 0 ? i : [""], d = qh(m), g = 0, p = 0, y = 0; g < n; ++g)
    for (var b = 0, S = io(e, h + 1, h = Hh(p = a[g])), C = e; b < d; ++b)
      (C = Wh(p > 0 ? m[b] + " " + S : Ke(S, /&\f/g, m[b]))) && (c[y++] = C);
  return Os(e, r, t, o === 0 ? Cs : s, c, l, u, f);
}
function xv(e, r, t, n) {
  return Os(e, r, t, Bh, ju(av()), io(e, 2, -2), 0, n);
}
function Mf(e, r, t, n, o) {
  return Os(e, r, t, Fu, io(e, 0, n), io(e, n + 1, -1), n, o);
}
function Gh(e, r, t) {
  switch (ov(e, r)) {
    // color-adjust
    case 5103:
      return lt + "print-" + e + e;
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
      return lt + e + e;
    // tab-size
    case 4789:
      return Jo + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return lt + e + Jo + e + vt + e + e;
    // writing-mode
    case 5936:
      switch (Vt(e, r + 11)) {
        // vertical-l(r)
        case 114:
          return lt + e + vt + Ke(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return lt + e + vt + Ke(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return lt + e + vt + Ke(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return lt + e + vt + e + e;
    // order
    case 6165:
      return lt + e + vt + "flex-" + e + e;
    // align-items
    case 5187:
      return lt + e + Ke(e, /(\w+).+(:[^]+)/, lt + "box-$1$2" + vt + "flex-$1$2") + e;
    // align-self
    case 5443:
      return lt + e + vt + "flex-item-" + Ke(e, /flex-|-self/g, "") + (Kr(e, /flex-|baseline/) ? "" : vt + "grid-row-" + Ke(e, /flex-|-self/g, "")) + e;
    // align-content
    case 4675:
      return lt + e + vt + "flex-line-pack" + Ke(e, /align-content|flex-|-self/g, "") + e;
    // flex-shrink
    case 5548:
      return lt + e + vt + Ke(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return lt + e + vt + Ke(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return lt + "box-" + Ke(e, "-grow", "") + lt + e + vt + Ke(e, "grow", "positive") + e;
    // transition
    case 4554:
      return lt + Ke(e, /([^-])(transform)/g, "$1" + lt + "$2") + e;
    // cursor
    case 6187:
      return Ke(Ke(Ke(e, /(zoom-|grab)/, lt + "$1"), /(image-set)/, lt + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return Ke(e, /(image-set\([^]*)/, lt + "$1$`$1");
    // justify-content
    case 4968:
      return Ke(Ke(e, /(.+:)(flex-)?(.*)/, lt + "box-pack:$3" + vt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + lt + e + e;
    // justify-self
    case 4200:
      if (!Kr(e, /flex-|baseline/)) return vt + "grid-column-align" + io(e, r) + e;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return vt + Ke(e, "template-", "") + e;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return t && t.some(function(n, o) {
        return r = o, Kr(n.props, /grid-\w+-end/);
      }) ? ~xa(e + (t = t[r].value), "span", 0) ? e : vt + Ke(e, "-start", "") + e + vt + "grid-row-span:" + (~xa(t, "span", 0) ? Kr(t, /\d+/) : +Kr(t, /\d+/) - +Kr(e, /\d+/)) + ";" : vt + Ke(e, "-start", "") + e;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return t && t.some(function(n) {
        return Kr(n.props, /grid-\w+-start/);
      }) ? e : vt + Ke(Ke(e, "-end", "-span"), "span ", "") + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Ke(e, /(.+)-inline(.+)/, lt + "$1$2") + e;
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
      if (kr(e) - 1 - r > 6)
        switch (Vt(e, r + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (Vt(e, r + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return Ke(e, /(.+:)(.+)-([^]+)/, "$1" + lt + "$2-$3$1" + Jo + (Vt(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
          // (s)tretch
          case 115:
            return ~xa(e, "stretch", 0) ? Gh(Ke(e, "stretch", "fill-available"), r, t) + e : e;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return Ke(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, o, i, a, s, c, l) {
        return vt + o + ":" + i + l + (a ? vt + o + "-span:" + (s ? c : +c - +i) + l : "") + e;
      });
    // position: sticky
    case 4949:
      if (Vt(e, r + 6) === 121)
        return Ke(e, ":", ":" + lt) + e;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (Vt(e, Vt(e, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return Ke(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + lt + (Vt(e, 14) === 45 ? "inline-" : "") + "box$3$1" + lt + "$2$3$1" + vt + "$2box$3") + e;
        // (inline-)?gri(d)
        case 100:
          return Ke(e, ":", ":" + vt) + e;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return Ke(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function Da(e, r) {
  for (var t = "", n = 0; n < e.length; n++)
    t += r(e[n], n, e, r) || "";
  return t;
}
function gv(e, r, t, n) {
  switch (e.type) {
    case nv:
      if (e.children.length) break;
    case rv:
    case Fu:
      return e.return = e.return || e.value;
    case Bh:
      return "";
    case Vh:
      return e.return = e.value + "{" + Da(e.children, n) + "}";
    case Cs:
      if (!kr(e.value = e.props.join(","))) return "";
  }
  return kr(t = Da(e.children, n)) ? e.return = e.value + "{" + t + "}" : "";
}
function mv(e) {
  var r = qh(e);
  return function(t, n, o, i) {
    for (var a = "", s = 0; s < r; s++)
      a += e[s](t, n, o, i) || "";
    return a;
  };
}
function vv(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
function bv(e, r, t, n) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Fu:
        e.return = Gh(e.value, e.length, t);
        return;
      case Vh:
        return Da([ln(e, { value: Ke(e.value, "@", "@" + lt) })], n);
      case Cs:
        if (e.length)
          return iv(t = e.props, function(o) {
            switch (Kr(o, n = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                qn(ln(e, { props: [Ke(o, /:(read-\w+)/, ":" + Jo + "$1")] })), qn(ln(e, { props: [o] })), pl(e, { props: Af(t, n) });
                break;
              // :placeholder
              case "::placeholder":
                qn(ln(e, { props: [Ke(o, /:(plac\w+)/, ":" + lt + "input-$1")] })), qn(ln(e, { props: [Ke(o, /:(plac\w+)/, ":" + Jo + "$1")] })), qn(ln(e, { props: [Ke(o, /:(plac\w+)/, vt + "input-$1")] })), qn(ln(e, { props: [o] })), pl(e, { props: Af(t, n) });
                break;
            }
            return "";
          });
    }
}
var yv = {
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
}, An = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Kh = "active", Xh = "data-styled-version", $s = "6.1.18", Du = `/*!sc*/
`, ka = typeof window < "u" && typeof document < "u", wv = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Ff = /invalid hook call/i, Ui = /* @__PURE__ */ new Set(), Sv = function(e, r) {
  if (process.env.NODE_ENV !== "production") {
    var t = r ? ' with the id of "'.concat(r, '"') : "", n = "The component ".concat(e).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, o = console.error;
    try {
      var i = !0;
      console.error = function(a) {
        for (var s = [], c = 1; c < arguments.length; c++) s[c - 1] = arguments[c];
        Ff.test(a) ? (i = !1, Ui.delete(n)) : o.apply(void 0, oo([a], s, !1));
      }, Pe(), i && !Ui.has(n) && (console.warn(n), Ui.add(n));
    } catch (a) {
      Ff.test(a.message) && Ui.delete(n);
    } finally {
      console.error = o;
    }
  }
}, Ts = Object.freeze([]), so = Object.freeze({});
function _v(e, r, t) {
  return t === void 0 && (t = so), e.theme !== t.theme && e.theme || r || t.theme;
}
var ml = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Cv = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Ev = /(^-|-$)/g;
function jf(e) {
  return e.replace(Cv, "-").replace(Ev, "");
}
var Ov = /(a)(d)/gi, Gi = 52, Df = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function vl(e) {
  var r, t = "";
  for (r = Math.abs(e); r > Gi; r = r / Gi | 0) t = Df(r % Gi) + t;
  return (Df(r % Gi) + t).replace(Ov, "$1-$2");
}
var Sc, Yh = 5381, Sn = function(e, r) {
  for (var t = r.length; t; ) e = 33 * e ^ r.charCodeAt(--t);
  return e;
}, Jh = function(e) {
  return Sn(Yh, e);
};
function Rv(e) {
  return vl(Jh(e) >>> 0);
}
function Qh(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function _c(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Zh = typeof Symbol == "function" && Symbol.for, ep = Zh ? Symbol.for("react.memo") : 60115, $v = Zh ? Symbol.for("react.forward_ref") : 60112, Tv = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Pv = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, tp = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Nv = ((Sc = {})[$v] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Sc[ep] = tp, Sc);
function kf(e) {
  return ("type" in (r = e) && r.type.$$typeof) === ep ? tp : "$$typeof" in e ? Nv[e.$$typeof] : Tv;
  var r;
}
var Av = Object.defineProperty, Iv = Object.getOwnPropertyNames, Lf = Object.getOwnPropertySymbols, Mv = Object.getOwnPropertyDescriptor, Fv = Object.getPrototypeOf, zf = Object.prototype;
function rp(e, r, t) {
  if (typeof r != "string") {
    if (zf) {
      var n = Fv(r);
      n && n !== zf && rp(e, n, t);
    }
    var o = Iv(r);
    Lf && (o = o.concat(Lf(r)));
    for (var i = kf(e), a = kf(r), s = 0; s < o.length; ++s) {
      var c = o[s];
      if (!(c in Pv || t && t[c] || a && c in a || i && c in i)) {
        var l = Mv(r, c);
        try {
          Av(e, c, l);
        } catch {
        }
      }
    }
  }
  return e;
}
function co(e) {
  return typeof e == "function";
}
function ku(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function Cn(e, r) {
  return e && r ? "".concat(e, " ").concat(r) : e || r || "";
}
function Bf(e, r) {
  if (e.length === 0) return "";
  for (var t = e[0], n = 1; n < e.length; n++) t += e[n];
  return t;
}
function lo(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function bl(e, r, t) {
  if (t === void 0 && (t = !1), !t && !lo(e) && !Array.isArray(e)) return r;
  if (Array.isArray(r)) for (var n = 0; n < r.length; n++) e[n] = bl(e[n], r[n]);
  else if (lo(r)) for (var n in r) e[n] = bl(e[n], r[n]);
  return e;
}
function Lu(e, r) {
  Object.defineProperty(e, "toString", { value: r });
}
var jv = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function Dv() {
  for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
  for (var t = e[0], n = [], o = 1, i = e.length; o < i; o += 1) n.push(e[o]);
  return n.forEach(function(a) {
    t = t.replace(/%[a-z]/, a);
  }), t;
}
function _o(e) {
  for (var r = [], t = 1; t < arguments.length; t++) r[t - 1] = arguments[t];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(r.length > 0 ? " Args: ".concat(r.join(", ")) : "")) : new Error(Dv.apply(void 0, oo([jv[e]], r, !1)).trim());
}
var kv = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  return e.prototype.indexOfGroup = function(r) {
    for (var t = 0, n = 0; n < r; n++) t += this.groupSizes[n];
    return t;
  }, e.prototype.insertRules = function(r, t) {
    if (r >= this.groupSizes.length) {
      for (var n = this.groupSizes, o = n.length, i = o; r >= i; ) if ((i <<= 1) < 0) throw _o(16, "".concat(r));
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(n), this.length = i;
      for (var a = o; a < i; a++) this.groupSizes[a] = 0;
    }
    for (var s = this.indexOfGroup(r + 1), c = (a = 0, t.length); a < c; a++) this.tag.insertRule(s, t[a]) && (this.groupSizes[r]++, s++);
  }, e.prototype.clearGroup = function(r) {
    if (r < this.length) {
      var t = this.groupSizes[r], n = this.indexOfGroup(r), o = n + t;
      this.groupSizes[r] = 0;
      for (var i = n; i < o; i++) this.tag.deleteRule(n);
    }
  }, e.prototype.getGroup = function(r) {
    var t = "";
    if (r >= this.length || this.groupSizes[r] === 0) return t;
    for (var n = this.groupSizes[r], o = this.indexOfGroup(r), i = o + n, a = o; a < i; a++) t += "".concat(this.tag.getRule(a)).concat(Du);
    return t;
  }, e;
}(), Lv = 1 << 30, va = /* @__PURE__ */ new Map(), La = /* @__PURE__ */ new Map(), ba = 1, Ki = function(e) {
  if (va.has(e)) return va.get(e);
  for (; La.has(ba); ) ba++;
  var r = ba++;
  if (process.env.NODE_ENV !== "production" && ((0 | r) < 0 || r > Lv)) throw _o(16, "".concat(r));
  return va.set(e, r), La.set(r, e), r;
}, zv = function(e, r) {
  ba = r + 1, va.set(e, r), La.set(r, e);
}, Bv = "style[".concat(An, "][").concat(Xh, '="').concat($s, '"]'), Vv = new RegExp("^".concat(An, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Hv = function(e, r, t) {
  for (var n, o = t.split(","), i = 0, a = o.length; i < a; i++) (n = o[i]) && e.registerName(r, n);
}, Wv = function(e, r) {
  for (var t, n = ((t = r.textContent) !== null && t !== void 0 ? t : "").split(Du), o = [], i = 0, a = n.length; i < a; i++) {
    var s = n[i].trim();
    if (s) {
      var c = s.match(Vv);
      if (c) {
        var l = 0 | parseInt(c[1], 10), u = c[2];
        l !== 0 && (zv(u, l), Hv(e, u, c[3]), e.getTag().insertRules(l, o)), o.length = 0;
      } else o.push(s);
    }
  }
}, Vf = function(e) {
  for (var r = document.querySelectorAll(Bv), t = 0, n = r.length; t < n; t++) {
    var o = r[t];
    o && o.getAttribute(An) !== Kh && (Wv(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function qv() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var np = function(e) {
  var r = document.head, t = e || r, n = document.createElement("style"), o = function(s) {
    var c = Array.from(s.querySelectorAll("style[".concat(An, "]")));
    return c[c.length - 1];
  }(t), i = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(An, Kh), n.setAttribute(Xh, $s);
  var a = qv();
  return a && n.setAttribute("nonce", a), t.insertBefore(n, i), n;
}, Uv = function() {
  function e(r) {
    this.element = np(r), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var n = document.styleSheets, o = 0, i = n.length; o < i; o++) {
        var a = n[o];
        if (a.ownerNode === t) return a;
      }
      throw _o(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(r, t) {
    try {
      return this.sheet.insertRule(t, r), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(r) {
    this.sheet.deleteRule(r), this.length--;
  }, e.prototype.getRule = function(r) {
    var t = this.sheet.cssRules[r];
    return t && t.cssText ? t.cssText : "";
  }, e;
}(), Gv = function() {
  function e(r) {
    this.element = np(r), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(r, t) {
    if (r <= this.length && r >= 0) {
      var n = document.createTextNode(t);
      return this.element.insertBefore(n, this.nodes[r] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, e.prototype.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, e;
}(), Kv = function() {
  function e(r) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(r, t) {
    return r <= this.length && (this.rules.splice(r, 0, t), this.length++, !0);
  }, e.prototype.deleteRule = function(r) {
    this.rules.splice(r, 1), this.length--;
  }, e.prototype.getRule = function(r) {
    return r < this.length ? this.rules[r] : "";
  }, e;
}(), Hf = ka, Xv = { isServer: !ka, useCSSOMInjection: !wv }, op = function() {
  function e(r, t, n) {
    r === void 0 && (r = so), t === void 0 && (t = {});
    var o = this;
    this.options = rr(rr({}, Xv), r), this.gs = t, this.names = new Map(n), this.server = !!r.isServer, !this.server && ka && Hf && (Hf = !1, Vf(this)), Lu(this, function() {
      return function(i) {
        for (var a = i.getTag(), s = a.length, c = "", l = function(f) {
          var h = function(y) {
            return La.get(y);
          }(f);
          if (h === void 0) return "continue";
          var m = i.names.get(h), d = a.getGroup(f);
          if (m === void 0 || !m.size || d.length === 0) return "continue";
          var g = "".concat(An, ".g").concat(f, '[id="').concat(h, '"]'), p = "";
          m !== void 0 && m.forEach(function(y) {
            y.length > 0 && (p += "".concat(y, ","));
          }), c += "".concat(d).concat(g, '{content:"').concat(p, '"}').concat(Du);
        }, u = 0; u < s; u++) l(u);
        return c;
      }(o);
    });
  }
  return e.registerId = function(r) {
    return Ki(r);
  }, e.prototype.rehydrate = function() {
    !this.server && ka && Vf(this);
  }, e.prototype.reconstructWithOptions = function(r, t) {
    return t === void 0 && (t = !0), new e(rr(rr({}, this.options), r), this.gs, t && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (r = function(t) {
      var n = t.useCSSOMInjection, o = t.target;
      return t.isServer ? new Kv(o) : n ? new Uv(o) : new Gv(o);
    }(this.options), new kv(r)));
    var r;
  }, e.prototype.hasNameForId = function(r, t) {
    return this.names.has(r) && this.names.get(r).has(t);
  }, e.prototype.registerName = function(r, t) {
    if (Ki(r), this.names.has(r)) this.names.get(r).add(t);
    else {
      var n = /* @__PURE__ */ new Set();
      n.add(t), this.names.set(r, n);
    }
  }, e.prototype.insertRules = function(r, t, n) {
    this.registerName(r, t), this.getTag().insertRules(Ki(r), n);
  }, e.prototype.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, e.prototype.clearRules = function(r) {
    this.getTag().clearGroup(Ki(r)), this.clearNames(r);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), Yv = /&/g, Jv = /^\s*\/\/.*$/gm;
function ip(e, r) {
  return e.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(r, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(r, " ")), t.props = t.props.map(function(n) {
      return "".concat(r, " ").concat(n);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = ip(t.children, r)), t;
  });
}
function Qv(e) {
  var r, t, n, o = so, i = o.options, a = i === void 0 ? so : i, s = o.plugins, c = s === void 0 ? Ts : s, l = function(h, m, d) {
    return d.startsWith(t) && d.endsWith(t) && d.replaceAll(t, "").length > 0 ? ".".concat(r) : h;
  }, u = c.slice();
  u.push(function(h) {
    h.type === Cs && h.value.includes("&") && (h.props[0] = h.props[0].replace(Yv, t).replace(n, l));
  }), a.prefix && u.push(bv), u.push(gv);
  var f = function(h, m, d, g) {
    m === void 0 && (m = ""), d === void 0 && (d = ""), g === void 0 && (g = "&"), r = g, t = m, n = new RegExp("\\".concat(t, "\\b"), "g");
    var p = h.replace(Jv, ""), y = pv(d || m ? "".concat(d, " ").concat(m, " { ").concat(p, " }") : p);
    a.namespace && (y = ip(y, a.namespace));
    var b = [];
    return Da(y, mv(u.concat(vv(function(S) {
      return b.push(S);
    })))), b;
  };
  return f.hash = c.length ? c.reduce(function(h, m) {
    return m.name || _o(15), Sn(h, m.name);
  }, Yh).toString() : "", f;
}
var Zv = new op(), yl = Qv(), ap = Q.createContext({ shouldForwardProp: void 0, styleSheet: Zv, stylis: yl });
ap.Consumer;
Q.createContext(void 0);
function Wf() {
  return ir(ap);
}
var qf = function() {
  function e(r, t) {
    var n = this;
    this.inject = function(o, i) {
      i === void 0 && (i = yl);
      var a = n.name + i.hash;
      o.hasNameForId(n.id, a) || o.insertRules(n.id, a, i(n.rules, a, "@keyframes"));
    }, this.name = r, this.id = "sc-keyframes-".concat(r), this.rules = t, Lu(this, function() {
      throw _o(12, String(n.name));
    });
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = yl), this.name + r.hash;
  }, e;
}(), e1 = function(e) {
  return e >= "A" && e <= "Z";
};
function Uf(e) {
  for (var r = "", t = 0; t < e.length; t++) {
    var n = e[t];
    if (t === 1 && n === "-" && e[0] === "-") return e;
    e1(n) ? r += "-" + n.toLowerCase() : r += n;
  }
  return r.startsWith("ms-") ? "-" + r : r;
}
var sp = function(e) {
  return e == null || e === !1 || e === "";
}, cp = function(e) {
  var r, t, n = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !sp(i) && (Array.isArray(i) && i.isCss || co(i) ? n.push("".concat(Uf(o), ":"), i, ";") : lo(i) ? n.push.apply(n, oo(oo(["".concat(o, " {")], cp(i), !1), ["}"], !1)) : n.push("".concat(Uf(o), ": ").concat((r = o, (t = i) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || t === 0 || r in yv || r.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return n;
};
function $n(e, r, t, n) {
  if (sp(e)) return [];
  if (ku(e)) return [".".concat(e.styledComponentId)];
  if (co(e)) {
    if (!co(i = e) || i.prototype && i.prototype.isReactComponent || !r) return [e];
    var o = e(r);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof qf || lo(o) || o === null || console.error("".concat(Qh(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), $n(o, r, t, n);
  }
  var i;
  return e instanceof qf ? t ? (e.inject(t, n), [e.getName(n)]) : [e] : lo(e) ? cp(e) : Array.isArray(e) ? Array.prototype.concat.apply(Ts, e.map(function(a) {
    return $n(a, r, t, n);
  })) : [e.toString()];
}
function t1(e) {
  for (var r = 0; r < e.length; r += 1) {
    var t = e[r];
    if (co(t) && !ku(t)) return !1;
  }
  return !0;
}
var r1 = Jh($s), n1 = function() {
  function e(r, t, n) {
    this.rules = r, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && t1(r), this.componentId = t, this.baseHash = Sn(r1, t), this.baseStyle = n, op.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(r, t, n) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(r, t, n) : "";
    if (this.isStatic && !n.hash) if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) o = Cn(o, this.staticRulesId);
    else {
      var i = Bf($n(this.rules, r, t, n)), a = vl(Sn(this.baseHash, i) >>> 0);
      if (!t.hasNameForId(this.componentId, a)) {
        var s = n(i, ".".concat(a), void 0, this.componentId);
        t.insertRules(this.componentId, a, s);
      }
      o = Cn(o, a), this.staticRulesId = a;
    }
    else {
      for (var c = Sn(this.baseHash, n.hash), l = "", u = 0; u < this.rules.length; u++) {
        var f = this.rules[u];
        if (typeof f == "string") l += f, process.env.NODE_ENV !== "production" && (c = Sn(c, f));
        else if (f) {
          var h = Bf($n(f, r, t, n));
          c = Sn(c, h + u), l += h;
        }
      }
      if (l) {
        var m = vl(c >>> 0);
        t.hasNameForId(this.componentId, m) || t.insertRules(this.componentId, m, n(l, ".".concat(m), void 0, this.componentId)), o = Cn(o, m);
      }
    }
    return o;
  }, e;
}(), lp = Q.createContext(void 0);
lp.Consumer;
var Cc = {}, Gf = /* @__PURE__ */ new Set();
function o1(e, r, t) {
  var n = ku(e), o = e, i = !_c(e), a = r.attrs, s = a === void 0 ? Ts : a, c = r.componentId, l = c === void 0 ? function(C, v) {
    var _ = typeof C != "string" ? "sc" : jf(C);
    Cc[_] = (Cc[_] || 0) + 1;
    var w = "".concat(_, "-").concat(Rv($s + _ + Cc[_]));
    return v ? "".concat(v, "-").concat(w) : w;
  }(r.displayName, r.parentComponentId) : c, u = r.displayName, f = u === void 0 ? function(C) {
    return _c(C) ? "styled.".concat(C) : "Styled(".concat(Qh(C), ")");
  }(e) : u, h = r.displayName && r.componentId ? "".concat(jf(r.displayName), "-").concat(r.componentId) : r.componentId || l, m = n && o.attrs ? o.attrs.concat(s).filter(Boolean) : s, d = r.shouldForwardProp;
  if (n && o.shouldForwardProp) {
    var g = o.shouldForwardProp;
    if (r.shouldForwardProp) {
      var p = r.shouldForwardProp;
      d = function(C, v) {
        return g(C, v) && p(C, v);
      };
    } else d = g;
  }
  var y = new n1(t, h, n ? o.componentStyle : void 0);
  function b(C, v) {
    return function(_, w, A) {
      var M = _.attrs, k = _.componentStyle, V = _.defaultProps, U = _.foldedComponentIds, L = _.styledComponentId, z = _.target, H = Q.useContext(lp), P = Wf(), I = _.shouldForwardProp || P.shouldForwardProp;
      process.env.NODE_ENV !== "production" && Rf(L);
      var N = _v(w, H, V) || so, B = function(te, ie, de) {
        for (var pe, xe = rr(rr({}, ie), { className: void 0, theme: de }), we = 0; we < te.length; we += 1) {
          var ae = co(pe = te[we]) ? pe(xe) : pe;
          for (var se in ae) xe[se] = se === "className" ? Cn(xe[se], ae[se]) : se === "style" ? rr(rr({}, xe[se]), ae[se]) : ae[se];
        }
        return ie.className && (xe.className = Cn(xe.className, ie.className)), xe;
      }(M, w, N), W = B.as || z, Y = {};
      for (var X in B) B[X] === void 0 || X[0] === "$" || X === "as" || X === "theme" && B.theme === N || (X === "forwardedAs" ? Y.as = B.forwardedAs : I && !I(X, W) || (Y[X] = B[X], I || process.env.NODE_ENV !== "development" || tv(X) || Gf.has(X) || !ml.has(W) || (Gf.add(X), console.warn('styled-components: it looks like an unknown prop "'.concat(X, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Z = function(te, ie) {
        var de = Wf(), pe = te.generateAndInjectStyles(ie, de.styleSheet, de.stylis);
        return process.env.NODE_ENV !== "production" && Rf(pe), pe;
      }(k, B);
      process.env.NODE_ENV !== "production" && _.warnTooManyClasses && _.warnTooManyClasses(Z);
      var G = Cn(U, L);
      return Z && (G += " " + Z), B.className && (G += " " + B.className), Y[_c(W) && !ml.has(W) ? "class" : "className"] = G, A && (Y.ref = A), Wm(W, Y);
    }(S, C, v);
  }
  b.displayName = f;
  var S = Q.forwardRef(b);
  return S.attrs = m, S.componentStyle = y, S.displayName = f, S.shouldForwardProp = d, S.foldedComponentIds = n ? Cn(o.foldedComponentIds, o.styledComponentId) : "", S.styledComponentId = h, S.target = n ? o.target : e, Object.defineProperty(S, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(C) {
    this._foldedDefaultProps = n ? function(v) {
      for (var _ = [], w = 1; w < arguments.length; w++) _[w - 1] = arguments[w];
      for (var A = 0, M = _; A < M.length; A++) bl(v, M[A], !0);
      return v;
    }({}, o.defaultProps, C) : C;
  } }), process.env.NODE_ENV !== "production" && (Sv(f, h), S.warnTooManyClasses = /* @__PURE__ */ function(C, v) {
    var _ = {}, w = !1;
    return function(A) {
      if (!w && (_[A] = !0, Object.keys(_).length >= 200)) {
        var M = v ? ' with the id of "'.concat(v, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(C).concat(M, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), w = !0, _ = {};
      }
    };
  }(f, h)), Lu(S, function() {
    return ".".concat(S.styledComponentId);
  }), i && rp(S, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), S;
}
function Kf(e, r) {
  for (var t = [e[0]], n = 0, o = r.length; n < o; n += 1) t.push(r[n], e[n + 1]);
  return t;
}
var Xf = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function i1(e) {
  for (var r = [], t = 1; t < arguments.length; t++) r[t - 1] = arguments[t];
  if (co(e) || lo(e)) return Xf($n(Kf(Ts, oo([e], r, !0))));
  var n = e;
  return r.length === 0 && n.length === 1 && typeof n[0] == "string" ? $n(n) : Xf($n(Kf(n, r)));
}
function wl(e, r, t) {
  if (t === void 0 && (t = so), !r) throw _o(1, r);
  var n = function(o) {
    for (var i = [], a = 1; a < arguments.length; a++) i[a - 1] = arguments[a];
    return e(r, t, i1.apply(void 0, oo([o], i, !1)));
  };
  return n.attrs = function(o) {
    return wl(e, r, rr(rr({}, t), { attrs: Array.prototype.concat(t.attrs, o).filter(Boolean) }));
  }, n.withConfig = function(o) {
    return wl(e, r, rr(rr({}, t), o));
  }, n;
}
var up = function(e) {
  return wl(o1, e);
}, qr = up;
ml.forEach(function(e) {
  qr[e] = up(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Xi = "__sc-".concat(An, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[Xi] || (window[Xi] = 0), window[Xi] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Xi] += 1);
const Ps = za;
(function(e, r) {
  const t = za, n = e();
  for (; ; )
    try {
      if (parseInt(t(422)) / 1 + -parseInt(t(413)) / 2 * (-parseInt(t(425)) / 3) + -parseInt(t(421)) / 4 * (parseInt(t(414)) / 5) + parseInt(t(419)) / 6 * (-parseInt(t(410)) / 7) + parseInt(t(417)) / 8 * (parseInt(t(418)) / 9) + -parseInt(t(420)) / 10 * (parseInt(t(423)) / 11) + parseInt(t(411)) / 12 * (-parseInt(t(416)) / 13) === r) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ba, 963184);
function za(e, r) {
  const t = Ba();
  return za = function(n, o) {
    return n = n - 410, t[n];
  }, za(e, r);
}
function Ba() {
  const e = ["1670xOrRFX", "1057064VEAecW", "882571EhmnPt", "39963gLRMjr", "div", "309PYCocp", "133vDFcPP", "408RQGxJQ", "span", "21110DBVYEA", "10GtRwOD", "canvas", "206947wRmIbR", "496cIQayE", "197055UMIzjK", "217122KZxJZK"];
  return Ba = function() {
    return e;
  }, Ba();
}
const a1 = qr[Ps(424)]`
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
`, s1 = qr[Ps(424)]`
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
`, c1 = qr[Ps(415)]`
  image-rendering: -moz-crisp-edges;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  image-rendering: pixelated;
  border: 2px solid #a0beeb;
  border-radius: 15px;
  display: inline;
  padding: 0;
  &:focus-visible {
    outline: none;
  }
`, Yf = qr[Ps(412)]`
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
`, fp = /* @__PURE__ */ _s({});
var Ec = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Jf;
function l1() {
  return Jf || (Jf = 1, function(e) {
    (function() {
      var r = {}.hasOwnProperty;
      function t() {
        for (var i = "", a = 0; a < arguments.length; a++) {
          var s = arguments[a];
          s && (i = o(i, n(s)));
        }
        return i;
      }
      function n(i) {
        if (typeof i == "string" || typeof i == "number")
          return i;
        if (typeof i != "object")
          return "";
        if (Array.isArray(i))
          return t.apply(null, i);
        if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]"))
          return i.toString();
        var a = "";
        for (var s in i)
          r.call(i, s) && i[s] && (a = o(a, s));
        return a;
      }
      function o(i, a) {
        return a ? i ? i + " " + a : i + a : i;
      }
      e.exports ? (t.default = t, e.exports = t) : window.classNames = t;
    })();
  }(Ec)), Ec.exports;
}
var u1 = l1();
const fe = /* @__PURE__ */ zh(u1), f1 = {
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
}, Lt = Math.round;
function Oc(e, r) {
  const t = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], n = t.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    n[o] = r(n[o] || 0, t[o] || "", o);
  return t[3] ? n[3] = t[3].includes("%") ? n[3] / 100 : n[3] : n[3] = 1, n;
}
const Qf = (e, r, t) => t === 0 ? e : e / 100;
function ko(e, r) {
  const t = r || 255;
  return e > t ? t : e < 0 ? 0 : e;
}
let Yi = class dp {
  constructor(r) {
    /**
     * All FastColor objects are valid. So isValid is always true. This property is kept to be compatible with TinyColor.
     */
    it(this, "isValid", !0);
    /**
     * Red, R in RGB
     */
    it(this, "r", 0);
    /**
     * Green, G in RGB
     */
    it(this, "g", 0);
    /**
     * Blue, B in RGB
     */
    it(this, "b", 0);
    /**
     * Alpha/Opacity, A in RGBA/HSLA
     */
    it(this, "a", 1);
    // HSV privates
    it(this, "_h");
    it(this, "_s");
    it(this, "_l");
    it(this, "_v");
    // intermediate variables to calculate HSL/HSV
    it(this, "_max");
    it(this, "_min");
    it(this, "_brightness");
    function t(n) {
      return n[0] in r && n[1] in r && n[2] in r;
    }
    if (r) if (typeof r == "string") {
      let o = function(i) {
        return n.startsWith(i);
      };
      const n = r.trim();
      if (/^#?[A-F\d]{3,8}$/i.test(n))
        this.fromHexString(n);
      else if (o("rgb"))
        this.fromRgbString(n);
      else if (o("hsl"))
        this.fromHslString(n);
      else if (o("hsv") || o("hsb"))
        this.fromHsvString(n);
      else {
        const i = f1[n.toLowerCase()];
        i && this.fromHexString(
          // Convert 36 hex to 16 hex
          parseInt(i, 36).toString(16).padStart(6, "0")
        );
      }
    } else if (r instanceof dp)
      this.r = r.r, this.g = r.g, this.b = r.b, this.a = r.a, this._h = r._h, this._s = r._s, this._l = r._l, this._v = r._v;
    else if (t("rgb"))
      this.r = ko(r.r), this.g = ko(r.g), this.b = ko(r.b), this.a = typeof r.a == "number" ? ko(r.a, 1) : 1;
    else if (t("hsl"))
      this.fromHsl(r);
    else if (t("hsv"))
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
    const t = this.toHsv();
    return t.h = r, this._c(t);
  }
  // ======================= Getter =======================
  /**
   * Returns the perceived luminance of a color, from 0-1.
   * @see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
   */
  getLuminance() {
    function r(i) {
      const a = i / 255;
      return a <= 0.03928 ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4);
    }
    const t = r(this.r), n = r(this.g), o = r(this.b);
    return 0.2126 * t + 0.7152 * n + 0.0722 * o;
  }
  getHue() {
    if (typeof this._h > "u") {
      const r = this.getMax() - this.getMin();
      r === 0 ? this._h = 0 : this._h = Lt(60 * (this.r === this.getMax() ? (this.g - this.b) / r + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / r + 2 : (this.r - this.g) / r + 4));
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
    const t = this.getHue(), n = this.getSaturation();
    let o = this.getLightness() - r / 100;
    return o < 0 && (o = 0), this._c({
      h: t,
      s: n,
      l: o,
      a: this.a
    });
  }
  lighten(r = 10) {
    const t = this.getHue(), n = this.getSaturation();
    let o = this.getLightness() + r / 100;
    return o > 1 && (o = 1), this._c({
      h: t,
      s: n,
      l: o,
      a: this.a
    });
  }
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  mix(r, t = 50) {
    const n = this._c(r), o = t / 100, i = (s) => (n[s] - this[s]) * o + this[s], a = {
      r: Lt(i("r")),
      g: Lt(i("g")),
      b: Lt(i("b")),
      a: Lt(i("a") * 100) / 100
    };
    return this._c(a);
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
    const t = this._c(r), n = this.a + t.a * (1 - this.a), o = (i) => Lt((this[i] * this.a + t[i] * t.a * (1 - this.a)) / n);
    return this._c({
      r: o("r"),
      g: o("g"),
      b: o("b"),
      a: n
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
    const t = (this.r || 0).toString(16);
    r += t.length === 2 ? t : "0" + t;
    const n = (this.g || 0).toString(16);
    r += n.length === 2 ? n : "0" + n;
    const o = (this.b || 0).toString(16);
    if (r += o.length === 2 ? o : "0" + o, typeof this.a == "number" && this.a >= 0 && this.a < 1) {
      const i = Lt(this.a * 255).toString(16);
      r += i.length === 2 ? i : "0" + i;
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
    const r = this.getHue(), t = Lt(this.getSaturation() * 100), n = Lt(this.getLightness() * 100);
    return this.a !== 1 ? `hsla(${r},${t}%,${n}%,${this.a})` : `hsl(${r},${t}%,${n}%)`;
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
  _sc(r, t, n) {
    const o = this.clone();
    return o[r] = ko(t, n), o;
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
    const t = r.replace("#", "");
    function n(o, i) {
      return parseInt(t[o] + t[i || o], 16);
    }
    t.length < 6 ? (this.r = n(0), this.g = n(1), this.b = n(2), this.a = t[3] ? n(3) / 255 : 1) : (this.r = n(0, 1), this.g = n(2, 3), this.b = n(4, 5), this.a = t[6] ? n(6, 7) / 255 : 1);
  }
  fromHsl({
    h: r,
    s: t,
    l: n,
    a: o
  }) {
    if (this._h = r % 360, this._s = t, this._l = n, this.a = typeof o == "number" ? o : 1, t <= 0) {
      const h = Lt(n * 255);
      this.r = h, this.g = h, this.b = h;
    }
    let i = 0, a = 0, s = 0;
    const c = r / 60, l = (1 - Math.abs(2 * n - 1)) * t, u = l * (1 - Math.abs(c % 2 - 1));
    c >= 0 && c < 1 ? (i = l, a = u) : c >= 1 && c < 2 ? (i = u, a = l) : c >= 2 && c < 3 ? (a = l, s = u) : c >= 3 && c < 4 ? (a = u, s = l) : c >= 4 && c < 5 ? (i = u, s = l) : c >= 5 && c < 6 && (i = l, s = u);
    const f = n - l / 2;
    this.r = Lt((i + f) * 255), this.g = Lt((a + f) * 255), this.b = Lt((s + f) * 255);
  }
  fromHsv({
    h: r,
    s: t,
    v: n,
    a: o
  }) {
    this._h = r % 360, this._s = t, this._v = n, this.a = typeof o == "number" ? o : 1;
    const i = Lt(n * 255);
    if (this.r = i, this.g = i, this.b = i, t <= 0)
      return;
    const a = r / 60, s = Math.floor(a), c = a - s, l = Lt(n * (1 - t) * 255), u = Lt(n * (1 - t * c) * 255), f = Lt(n * (1 - t * (1 - c)) * 255);
    switch (s) {
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
  fromHsvString(r) {
    const t = Oc(r, Qf);
    this.fromHsv({
      h: t[0],
      s: t[1],
      v: t[2],
      a: t[3]
    });
  }
  fromHslString(r) {
    const t = Oc(r, Qf);
    this.fromHsl({
      h: t[0],
      s: t[1],
      l: t[2],
      a: t[3]
    });
  }
  fromRgbString(r) {
    const t = Oc(r, (n, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? Lt(n / 100 * 255) : n
    ));
    this.r = t[0], this.g = t[1], this.b = t[2], this.a = t[3];
  }
};
const Ji = 2, Zf = 0.16, d1 = 0.05, h1 = 0.05, p1 = 0.15, hp = 5, pp = 4, x1 = [{
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
function ed(e, r, t) {
  let n;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? n = t ? Math.round(e.h) - Ji * r : Math.round(e.h) + Ji * r : n = t ? Math.round(e.h) + Ji * r : Math.round(e.h) - Ji * r, n < 0 ? n += 360 : n >= 360 && (n -= 360), n;
}
function td(e, r, t) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  let n;
  return t ? n = e.s - Zf * r : r === pp ? n = e.s + Zf : n = e.s + d1 * r, n > 1 && (n = 1), t && r === hp && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Math.round(n * 100) / 100;
}
function rd(e, r, t) {
  let n;
  return t ? n = e.v + h1 * r : n = e.v - p1 * r, n = Math.max(0, Math.min(1, n)), Math.round(n * 100) / 100;
}
function g1(e, r = {}) {
  const t = [], n = new Yi(e), o = n.toHsv();
  for (let i = hp; i > 0; i -= 1) {
    const a = new Yi({
      h: ed(o, i, !0),
      s: td(o, i, !0),
      v: rd(o, i, !0)
    });
    t.push(a);
  }
  t.push(n);
  for (let i = 1; i <= pp; i += 1) {
    const a = new Yi({
      h: ed(o, i),
      s: td(o, i),
      v: rd(o, i)
    });
    t.push(a);
  }
  return r.theme === "dark" ? x1.map(({
    index: i,
    amount: a
  }) => new Yi(r.backgroundColor || "#141414").mix(t[i], a).toHexString()) : t.map((i) => i.toHexString());
}
const Sl = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
Sl.primary = Sl[5];
function m1() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function v1(e, r) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(r);
  let t = r;
  for (; t; ) {
    if (t === e)
      return !0;
    t = t.parentNode;
  }
  return !1;
}
const nd = "data-rc-order", od = "data-rc-priority", b1 = "rc-util-key", _l = /* @__PURE__ */ new Map();
function xp({
  mark: e
} = {}) {
  return e ? e.startsWith("data-") ? e : `data-${e}` : b1;
}
function zu(e) {
  return e.attachTo ? e.attachTo : document.querySelector("head") || document.body;
}
function y1(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Bu(e) {
  return Array.from((_l.get(e) || e).children).filter((r) => r.tagName === "STYLE");
}
function gp(e, r = {}) {
  if (!m1())
    return null;
  const {
    csp: t,
    prepend: n,
    priority: o = 0
  } = r, i = y1(n), a = i === "prependQueue", s = document.createElement("style");
  s.setAttribute(nd, i), a && o && s.setAttribute(od, `${o}`), t != null && t.nonce && (s.nonce = t == null ? void 0 : t.nonce), s.innerHTML = e;
  const c = zu(r), {
    firstChild: l
  } = c;
  if (n) {
    if (a) {
      const u = (r.styles || Bu(c)).filter((f) => {
        if (!["prepend", "prependQueue"].includes(f.getAttribute(nd)))
          return !1;
        const h = Number(f.getAttribute(od) || 0);
        return o >= h;
      });
      if (u.length)
        return c.insertBefore(s, u[u.length - 1].nextSibling), s;
    }
    c.insertBefore(s, l);
  } else
    c.appendChild(s);
  return s;
}
function w1(e, r = {}) {
  let {
    styles: t
  } = r;
  return t || (t = Bu(zu(r))), t.find((n) => n.getAttribute(xp(r)) === e);
}
function S1(e, r) {
  const t = _l.get(e);
  if (!t || !v1(document, t)) {
    const n = gp("", r), {
      parentNode: o
    } = n;
    _l.set(e, o), e.removeChild(n);
  }
}
function _1(e, r, t = {}) {
  var c, l, u;
  const n = zu(t), o = Bu(n), i = {
    ...t,
    styles: o
  };
  S1(n, i);
  const a = w1(r, i);
  if (a)
    return (c = i.csp) != null && c.nonce && a.nonce !== ((l = i.csp) == null ? void 0 : l.nonce) && (a.nonce = (u = i.csp) == null ? void 0 : u.nonce), a.innerHTML !== e && (a.innerHTML = e), a;
  const s = gp(e, i);
  return s.setAttribute(xp(i), r), s;
}
function mp(e) {
  var r;
  return (r = e == null ? void 0 : e.getRootNode) == null ? void 0 : r.call(e);
}
function C1(e) {
  return mp(e) instanceof ShadowRoot;
}
function E1(e) {
  return C1(e) ? mp(e) : null;
}
let Cl = {};
const Vu = [], O1 = (e) => {
  Vu.push(e);
};
function R1(e, r) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    const t = Vu.reduce((n, o) => o(n ?? "", "warning"), r);
    t && console.error(`Warning: ${t}`);
  }
}
function $1(e, r) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    const t = Vu.reduce((n, o) => o(n ?? "", "note"), r);
    t && console.warn(`Note: ${t}`);
  }
}
function T1() {
  Cl = {};
}
function vp(e, r, t) {
  !r && !Cl[t] && (e(!1, t), Cl[t] = !0);
}
function Ns(e, r) {
  vp(R1, e, r);
}
function P1(e, r) {
  vp($1, e, r);
}
Ns.preMessage = O1;
Ns.resetWarned = T1;
Ns.noteOnce = P1;
function N1(e) {
  return e.replace(/-(.)/g, (r, t) => t.toUpperCase());
}
function A1(e, r) {
  Ns(e, `[@ant-design/icons] ${r}`);
}
function id(e) {
  return typeof e == "object" && typeof e.name == "string" && typeof e.theme == "string" && (typeof e.icon == "object" || typeof e.icon == "function");
}
function ad(e = {}) {
  return Object.keys(e).reduce((r, t) => {
    const n = e[t];
    switch (t) {
      case "class":
        r.className = n, delete r.class;
        break;
      default:
        delete r[t], r[N1(t)] = n;
    }
    return r;
  }, {});
}
function El(e, r, t) {
  return t ? /* @__PURE__ */ Q.createElement(e.tag, {
    key: r,
    ...ad(e.attrs),
    ...t
  }, (e.children || []).map((n, o) => El(n, `${r}-${e.tag}-${o}`))) : /* @__PURE__ */ Q.createElement(e.tag, {
    key: r,
    ...ad(e.attrs)
  }, (e.children || []).map((n, o) => El(n, `${r}-${e.tag}-${o}`)));
}
function bp(e) {
  return g1(e)[0];
}
function yp(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
const I1 = `
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
`, M1 = (e) => {
  const {
    csp: r,
    prefixCls: t,
    layer: n
  } = ir(fp);
  let o = I1;
  t && (o = o.replace(/anticon/g, t)), n && (o = `@layer ${n} {
${o}
}`), ut(() => {
    const i = e.current, a = E1(i);
    _1(o, "@ant-design-icons", {
      prepend: !n,
      csp: r,
      attachTo: a
    });
  }, []);
}, Qo = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function F1({
  primaryColor: e,
  secondaryColor: r
}) {
  Qo.primaryColor = e, Qo.secondaryColor = r || bp(e), Qo.calculated = !!r;
}
function j1() {
  return {
    ...Qo
  };
}
const Co = (e) => {
  const {
    icon: r,
    className: t,
    onClick: n,
    style: o,
    primaryColor: i,
    secondaryColor: a,
    ...s
  } = e, c = x.useRef();
  let l = Qo;
  if (i && (l = {
    primaryColor: i,
    secondaryColor: a || bp(i)
  }), M1(c), A1(id(r), `icon should be icon definiton, but got ${r}`), !id(r))
    return null;
  let u = r;
  return u && typeof u.icon == "function" && (u = {
    ...u,
    icon: u.icon(l.primaryColor, l.secondaryColor)
  }), El(u.icon, `svg-${u.name}`, {
    className: t,
    onClick: n,
    style: o,
    "data-icon": u.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true",
    ...s,
    ref: c
  });
};
Co.displayName = "IconReact";
Co.getTwoToneColors = j1;
Co.setTwoToneColors = F1;
function wp(e) {
  const [r, t] = yp(e);
  return Co.setTwoToneColors({
    primaryColor: r,
    secondaryColor: t
  });
}
function D1() {
  const e = Co.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
function Ol() {
  return Ol = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Ol.apply(this, arguments);
}
wp(Sl.primary);
const As = /* @__PURE__ */ x.forwardRef((e, r) => {
  const {
    // affect outter <i>...</i>
    className: t,
    // affect inner <svg>...</svg>
    icon: n,
    spin: o,
    rotate: i,
    tabIndex: a,
    onClick: s,
    // other
    twoToneColor: c,
    ...l
  } = e, {
    prefixCls: u = "anticon",
    rootClassName: f
  } = x.useContext(fp), h = fe(f, u, {
    [`${u}-${n.name}`]: !!n.name,
    [`${u}-spin`]: !!o || n.name === "loading"
  }, t);
  let m = a;
  m === void 0 && s && (m = -1);
  const d = i ? {
    msTransform: `rotate(${i}deg)`,
    transform: `rotate(${i}deg)`
  } : void 0, [g, p] = yp(c);
  return /* @__PURE__ */ x.createElement("span", Ol({
    role: "img",
    "aria-label": n.name
  }, l, {
    ref: r,
    tabIndex: m,
    onClick: s,
    className: h
  }), /* @__PURE__ */ x.createElement(Co, {
    icon: n,
    primaryColor: g,
    secondaryColor: p,
    style: d
  }));
});
As.displayName = "AntdIcon";
As.getTwoToneColor = D1;
As.setTwoToneColor = wp;
var k1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, name: "check", theme: "outlined" }, L1 = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, z1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z" } }] }, name: "copy", theme: "outlined" }, B1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z" } }] }, name: "edit", theme: "outlined" }, V1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z" } }] }, name: "enter", theme: "outlined" }, H1 = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" }, W1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z" } }] }, name: "reload", theme: "outlined" };
function Rl() {
  return Rl = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Rl.apply(this, arguments);
}
const q1 = (e, r) => /* @__PURE__ */ x.createElement(As, Rl({}, e, {
  ref: r,
  icon: W1
})), Sp = /* @__PURE__ */ x.forwardRef(q1);
process.env.NODE_ENV !== "production" && (Sp.displayName = "ReloadOutlined");
var Qi = { exports: {} }, st = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sd;
function U1() {
  if (sd) return st;
  sd = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), d;
  d = Symbol.for("react.module.reference");
  function g(p) {
    if (typeof p == "object" && p !== null) {
      var y = p.$$typeof;
      switch (y) {
        case e:
          switch (p = p.type, p) {
            case t:
            case o:
            case n:
            case l:
            case u:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case s:
                case a:
                case c:
                case h:
                case f:
                case i:
                  return p;
                default:
                  return y;
              }
          }
        case r:
          return y;
      }
    }
  }
  return st.ContextConsumer = a, st.ContextProvider = i, st.Element = e, st.ForwardRef = c, st.Fragment = t, st.Lazy = h, st.Memo = f, st.Portal = r, st.Profiler = o, st.StrictMode = n, st.Suspense = l, st.SuspenseList = u, st.isAsyncMode = function() {
    return !1;
  }, st.isConcurrentMode = function() {
    return !1;
  }, st.isContextConsumer = function(p) {
    return g(p) === a;
  }, st.isContextProvider = function(p) {
    return g(p) === i;
  }, st.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, st.isForwardRef = function(p) {
    return g(p) === c;
  }, st.isFragment = function(p) {
    return g(p) === t;
  }, st.isLazy = function(p) {
    return g(p) === h;
  }, st.isMemo = function(p) {
    return g(p) === f;
  }, st.isPortal = function(p) {
    return g(p) === r;
  }, st.isProfiler = function(p) {
    return g(p) === o;
  }, st.isStrictMode = function(p) {
    return g(p) === n;
  }, st.isSuspense = function(p) {
    return g(p) === l;
  }, st.isSuspenseList = function(p) {
    return g(p) === u;
  }, st.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === t || p === o || p === n || p === l || p === u || p === m || typeof p == "object" && p !== null && (p.$$typeof === h || p.$$typeof === f || p.$$typeof === i || p.$$typeof === a || p.$$typeof === c || p.$$typeof === d || p.getModuleId !== void 0);
  }, st.typeOf = g, st;
}
var ct = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cd;
function G1() {
  return cd || (cd = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), d = !1, g = !1, p = !1, y = !1, b = !1, S;
    S = Symbol.for("react.module.reference");
    function C(re) {
      return !!(typeof re == "string" || typeof re == "function" || re === t || re === o || b || re === n || re === l || re === u || y || re === m || d || g || p || typeof re == "object" && re !== null && (re.$$typeof === h || re.$$typeof === f || re.$$typeof === i || re.$$typeof === a || re.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      re.$$typeof === S || re.getModuleId !== void 0));
    }
    function v(re) {
      if (typeof re == "object" && re !== null) {
        var me = re.$$typeof;
        switch (me) {
          case e:
            var ce = re.type;
            switch (ce) {
              case t:
              case o:
              case n:
              case l:
              case u:
                return ce;
              default:
                var ve = ce && ce.$$typeof;
                switch (ve) {
                  case s:
                  case a:
                  case c:
                  case h:
                  case f:
                  case i:
                    return ve;
                  default:
                    return me;
                }
            }
          case r:
            return me;
        }
      }
    }
    var _ = a, w = i, A = e, M = c, k = t, V = h, U = f, L = r, z = o, H = n, P = l, I = u, N = !1, B = !1;
    function W(re) {
      return N || (N = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Y(re) {
      return B || (B = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function X(re) {
      return v(re) === a;
    }
    function Z(re) {
      return v(re) === i;
    }
    function G(re) {
      return typeof re == "object" && re !== null && re.$$typeof === e;
    }
    function te(re) {
      return v(re) === c;
    }
    function ie(re) {
      return v(re) === t;
    }
    function de(re) {
      return v(re) === h;
    }
    function pe(re) {
      return v(re) === f;
    }
    function xe(re) {
      return v(re) === r;
    }
    function we(re) {
      return v(re) === o;
    }
    function ae(re) {
      return v(re) === n;
    }
    function se(re) {
      return v(re) === l;
    }
    function _e(re) {
      return v(re) === u;
    }
    ct.ContextConsumer = _, ct.ContextProvider = w, ct.Element = A, ct.ForwardRef = M, ct.Fragment = k, ct.Lazy = V, ct.Memo = U, ct.Portal = L, ct.Profiler = z, ct.StrictMode = H, ct.Suspense = P, ct.SuspenseList = I, ct.isAsyncMode = W, ct.isConcurrentMode = Y, ct.isContextConsumer = X, ct.isContextProvider = Z, ct.isElement = G, ct.isForwardRef = te, ct.isFragment = ie, ct.isLazy = de, ct.isMemo = pe, ct.isPortal = xe, ct.isProfiler = we, ct.isStrictMode = ae, ct.isSuspense = se, ct.isSuspenseList = _e, ct.isValidElementType = C, ct.typeOf = v;
  }()), ct;
}
var ld;
function K1() {
  return ld || (ld = 1, process.env.NODE_ENV === "production" ? Qi.exports = U1() : Qi.exports = G1()), Qi.exports;
}
var Rc = K1();
const Br = /* @__PURE__ */ Object.create(null);
Br.open = "0";
Br.close = "1";
Br.ping = "2";
Br.pong = "3";
Br.message = "4";
Br.upgrade = "5";
Br.noop = "6";
const ya = /* @__PURE__ */ Object.create(null);
Object.keys(Br).forEach((e) => {
  ya[Br[e]] = e;
});
const $l = { type: "error", data: "parser error" }, _p = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", Cp = typeof ArrayBuffer == "function", Ep = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer, Hu = ({ type: e, data: r }, t, n) => _p && r instanceof Blob ? t ? n(r) : ud(r, n) : Cp && (r instanceof ArrayBuffer || Ep(r)) ? t ? n(r) : ud(new Blob([r]), n) : n(Br[e] + (r || "")), ud = (e, r) => {
  const t = new FileReader();
  return t.onload = function() {
    const n = t.result.split(",")[1];
    r("b" + (n || ""));
  }, t.readAsDataURL(e);
};
function fd(e) {
  return e instanceof Uint8Array ? e : e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
let $c;
function X1(e, r) {
  if (_p && e.data instanceof Blob)
    return e.data.arrayBuffer().then(fd).then(r);
  if (Cp && (e.data instanceof ArrayBuffer || Ep(e.data)))
    return r(fd(e.data));
  Hu(e, !1, (t) => {
    $c || ($c = new TextEncoder()), r($c.encode(t));
  });
}
const dd = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ko = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < dd.length; e++)
  Ko[dd.charCodeAt(e)] = e;
const Y1 = (e) => {
  let r = e.length * 0.75, t = e.length, n, o = 0, i, a, s, c;
  e[e.length - 1] === "=" && (r--, e[e.length - 2] === "=" && r--);
  const l = new ArrayBuffer(r), u = new Uint8Array(l);
  for (n = 0; n < t; n += 4)
    i = Ko[e.charCodeAt(n)], a = Ko[e.charCodeAt(n + 1)], s = Ko[e.charCodeAt(n + 2)], c = Ko[e.charCodeAt(n + 3)], u[o++] = i << 2 | a >> 4, u[o++] = (a & 15) << 4 | s >> 2, u[o++] = (s & 3) << 6 | c & 63;
  return l;
}, J1 = typeof ArrayBuffer == "function", Wu = (e, r) => {
  if (typeof e != "string")
    return {
      type: "message",
      data: Op(e, r)
    };
  const t = e.charAt(0);
  return t === "b" ? {
    type: "message",
    data: Q1(e.substring(1), r)
  } : ya[t] ? e.length > 1 ? {
    type: ya[t],
    data: e.substring(1)
  } : {
    type: ya[t]
  } : $l;
}, Q1 = (e, r) => {
  if (J1) {
    const t = Y1(e);
    return Op(t, r);
  } else
    return { base64: !0, data: e };
}, Op = (e, r) => {
  switch (r) {
    case "blob":
      return e instanceof Blob ? e : new Blob([e]);
    case "arraybuffer":
    default:
      return e instanceof ArrayBuffer ? e : e.buffer;
  }
}, Rp = "", Z1 = (e, r) => {
  const t = e.length, n = new Array(t);
  let o = 0;
  e.forEach((i, a) => {
    Hu(i, !1, (s) => {
      n[a] = s, ++o === t && r(n.join(Rp));
    });
  });
}, eb = (e, r) => {
  const t = e.split(Rp), n = [];
  for (let o = 0; o < t.length; o++) {
    const i = Wu(t[o], r);
    if (n.push(i), i.type === "error")
      break;
  }
  return n;
};
function tb() {
  return new TransformStream({
    transform(e, r) {
      X1(e, (t) => {
        const n = t.length;
        let o;
        if (n < 126)
          o = new Uint8Array(1), new DataView(o.buffer).setUint8(0, n);
        else if (n < 65536) {
          o = new Uint8Array(3);
          const i = new DataView(o.buffer);
          i.setUint8(0, 126), i.setUint16(1, n);
        } else {
          o = new Uint8Array(9);
          const i = new DataView(o.buffer);
          i.setUint8(0, 127), i.setBigUint64(1, BigInt(n));
        }
        e.data && typeof e.data != "string" && (o[0] |= 128), r.enqueue(o), r.enqueue(t);
      });
    }
  });
}
let Tc;
function Zi(e) {
  return e.reduce((r, t) => r + t.length, 0);
}
function ea(e, r) {
  if (e[0].length === r)
    return e.shift();
  const t = new Uint8Array(r);
  let n = 0;
  for (let o = 0; o < r; o++)
    t[o] = e[0][n++], n === e[0].length && (e.shift(), n = 0);
  return e.length && n < e[0].length && (e[0] = e[0].slice(n)), t;
}
function rb(e, r) {
  Tc || (Tc = new TextDecoder());
  const t = [];
  let n = 0, o = -1, i = !1;
  return new TransformStream({
    transform(a, s) {
      for (t.push(a); ; ) {
        if (n === 0) {
          if (Zi(t) < 1)
            break;
          const c = ea(t, 1);
          i = (c[0] & 128) === 128, o = c[0] & 127, o < 126 ? n = 3 : o === 126 ? n = 1 : n = 2;
        } else if (n === 1) {
          if (Zi(t) < 2)
            break;
          const c = ea(t, 2);
          o = new DataView(c.buffer, c.byteOffset, c.length).getUint16(0), n = 3;
        } else if (n === 2) {
          if (Zi(t) < 8)
            break;
          const c = ea(t, 8), l = new DataView(c.buffer, c.byteOffset, c.length), u = l.getUint32(0);
          if (u > Math.pow(2, 21) - 1) {
            s.enqueue($l);
            break;
          }
          o = u * Math.pow(2, 32) + l.getUint32(4), n = 3;
        } else {
          if (Zi(t) < o)
            break;
          const c = ea(t, o);
          s.enqueue(Wu(i ? c : Tc.decode(c), r)), n = 0;
        }
        if (o === 0 || o > e) {
          s.enqueue($l);
          break;
        }
      }
    }
  });
}
const $p = 4;
function At(e) {
  if (e) return nb(e);
}
function nb(e) {
  for (var r in At.prototype)
    e[r] = At.prototype[r];
  return e;
}
At.prototype.on = At.prototype.addEventListener = function(e, r) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(r), this;
};
At.prototype.once = function(e, r) {
  function t() {
    this.off(e, t), r.apply(this, arguments);
  }
  return t.fn = r, this.on(e, t), this;
};
At.prototype.off = At.prototype.removeListener = At.prototype.removeAllListeners = At.prototype.removeEventListener = function(e, r) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var t = this._callbacks["$" + e];
  if (!t) return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + e], this;
  for (var n, o = 0; o < t.length; o++)
    if (n = t[o], n === r || n.fn === r) {
      t.splice(o, 1);
      break;
    }
  return t.length === 0 && delete this._callbacks["$" + e], this;
};
At.prototype.emit = function(e) {
  this._callbacks = this._callbacks || {};
  for (var r = new Array(arguments.length - 1), t = this._callbacks["$" + e], n = 1; n < arguments.length; n++)
    r[n - 1] = arguments[n];
  if (t) {
    t = t.slice(0);
    for (var n = 0, o = t.length; n < o; ++n)
      t[n].apply(this, r);
  }
  return this;
};
At.prototype.emitReserved = At.prototype.emit;
At.prototype.listeners = function(e) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [];
};
At.prototype.hasListeners = function(e) {
  return !!this.listeners(e).length;
};
const Is = typeof Promise == "function" && typeof Promise.resolve == "function" ? (r) => Promise.resolve().then(r) : (r, t) => t(r, 0), br = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), ob = "arraybuffer";
function Tp(e, ...r) {
  return r.reduce((t, n) => (e.hasOwnProperty(n) && (t[n] = e[n]), t), {});
}
const ib = br.setTimeout, ab = br.clearTimeout;
function Ms(e, r) {
  r.useNativeTimers ? (e.setTimeoutFn = ib.bind(br), e.clearTimeoutFn = ab.bind(br)) : (e.setTimeoutFn = br.setTimeout.bind(br), e.clearTimeoutFn = br.clearTimeout.bind(br));
}
const sb = 1.33;
function cb(e) {
  return typeof e == "string" ? lb(e) : Math.ceil((e.byteLength || e.size) * sb);
}
function lb(e) {
  let r = 0, t = 0;
  for (let n = 0, o = e.length; n < o; n++)
    r = e.charCodeAt(n), r < 128 ? t += 1 : r < 2048 ? t += 2 : r < 55296 || r >= 57344 ? t += 3 : (n++, t += 4);
  return t;
}
function Pp() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function ub(e) {
  let r = "";
  for (let t in e)
    e.hasOwnProperty(t) && (r.length && (r += "&"), r += encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
  return r;
}
function fb(e) {
  let r = {}, t = e.split("&");
  for (let n = 0, o = t.length; n < o; n++) {
    let i = t[n].split("=");
    r[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
  }
  return r;
}
class db extends Error {
  constructor(r, t, n) {
    super(r), this.description = t, this.context = n, this.type = "TransportError";
  }
}
class qu extends At {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(r) {
    super(), this.writable = !1, Ms(this, r), this.opts = r, this.query = r.query, this.socket = r.socket, this.supportsBinary = !r.forceBase64;
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
  onError(r, t, n) {
    return super.emitReserved("error", new db(r, t, n)), this;
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
    const t = Wu(r, this.socket.binaryType);
    this.onPacket(t);
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
  createUri(r, t = {}) {
    return r + "://" + this._hostname() + this._port() + this.opts.path + this._query(t);
  }
  _hostname() {
    const r = this.opts.hostname;
    return r.indexOf(":") === -1 ? r : "[" + r + "]";
  }
  _port() {
    return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : "";
  }
  _query(r) {
    const t = ub(r);
    return t.length ? "?" + t : "";
  }
}
class hb extends qu {
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
    const t = () => {
      this.readyState = "paused", r();
    };
    if (this._polling || !this.writable) {
      let n = 0;
      this._polling && (n++, this.once("pollComplete", function() {
        --n || t();
      })), this.writable || (n++, this.once("drain", function() {
        --n || t();
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
  onData(r) {
    const t = (n) => {
      if (this.readyState === "opening" && n.type === "open" && this.onOpen(), n.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(n);
    };
    eb(r, this.socket.binaryType).forEach(t), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
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
    this.writable = !1, Z1(r, (t) => {
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
    const r = this.opts.secure ? "https" : "http", t = this.query || {};
    return this.opts.timestampRequests !== !1 && (t[this.opts.timestampParam] = Pp()), !this.supportsBinary && !t.sid && (t.b64 = 1), this.createUri(r, t);
  }
}
let Np = !1;
try {
  Np = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const pb = Np;
function xb() {
}
class gb extends hb {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(r) {
    if (super(r), typeof location < "u") {
      const t = location.protocol === "https:";
      let n = location.port;
      n || (n = t ? "443" : "80"), this.xd = typeof location < "u" && r.hostname !== location.hostname || n !== r.port;
    }
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(r, t) {
    const n = this.request({
      method: "POST",
      data: r
    });
    n.on("success", t), n.on("error", (o, i) => {
      this.onError("xhr post error", o, i);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    const r = this.request();
    r.on("data", this.onData.bind(this)), r.on("error", (t, n) => {
      this.onError("xhr poll error", t, n);
    }), this.pollXhr = r;
  }
}
class zr extends At {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(r, t, n) {
    super(), this.createRequest = r, Ms(this, n), this._opts = n, this._method = n.method || "GET", this._uri = t, this._data = n.data !== void 0 ? n.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var r;
    const t = Tp(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    t.xdomain = !!this._opts.xd;
    const n = this._xhr = this.createRequest(t);
    try {
      n.open(this._method, this._uri, !0);
      try {
        if (this._opts.extraHeaders) {
          n.setDisableHeaderCheck && n.setDisableHeaderCheck(!0);
          for (let o in this._opts.extraHeaders)
            this._opts.extraHeaders.hasOwnProperty(o) && n.setRequestHeader(o, this._opts.extraHeaders[o]);
        }
      } catch {
      }
      if (this._method === "POST")
        try {
          n.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {
        }
      try {
        n.setRequestHeader("Accept", "*/*");
      } catch {
      }
      (r = this._opts.cookieJar) === null || r === void 0 || r.addCookies(n), "withCredentials" in n && (n.withCredentials = this._opts.withCredentials), this._opts.requestTimeout && (n.timeout = this._opts.requestTimeout), n.onreadystatechange = () => {
        var o;
        n.readyState === 3 && ((o = this._opts.cookieJar) === null || o === void 0 || o.parseCookies(
          // @ts-ignore
          n.getResponseHeader("set-cookie")
        )), n.readyState === 4 && (n.status === 200 || n.status === 1223 ? this._onLoad() : this.setTimeoutFn(() => {
          this._onError(typeof n.status == "number" ? n.status : 0);
        }, 0));
      }, n.send(this._data);
    } catch (o) {
      this.setTimeoutFn(() => {
        this._onError(o);
      }, 0);
      return;
    }
    typeof document < "u" && (this._index = zr.requestsCount++, zr.requests[this._index] = this);
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
      if (this._xhr.onreadystatechange = xb, r)
        try {
          this._xhr.abort();
        } catch {
        }
      typeof document < "u" && delete zr.requests[this._index], this._xhr = null;
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
}
zr.requestsCount = 0;
zr.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", hd);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in br ? "pagehide" : "unload";
    addEventListener(e, hd, !1);
  }
}
function hd() {
  for (let e in zr.requests)
    zr.requests.hasOwnProperty(e) && zr.requests[e].abort();
}
const mb = function() {
  const e = Ap({
    xdomain: !1
  });
  return e && e.responseType !== null;
}();
class vb extends gb {
  constructor(r) {
    super(r);
    const t = r && r.forceBase64;
    this.supportsBinary = mb && !t;
  }
  request(r = {}) {
    return Object.assign(r, { xd: this.xd }, this.opts), new zr(Ap, this.uri(), r);
  }
}
function Ap(e) {
  const r = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!r || pb))
      return new XMLHttpRequest();
  } catch {
  }
  if (!r)
    try {
      return new br[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const Ip = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class bb extends qu {
  get name() {
    return "websocket";
  }
  doOpen() {
    const r = this.uri(), t = this.opts.protocols, n = Ip ? {} : Tp(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(r, t, n);
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
    }, this.ws.onclose = (r) => this.onClose({
      description: "websocket connection closed",
      context: r
    }), this.ws.onmessage = (r) => this.onData(r.data), this.ws.onerror = (r) => this.onError("websocket error", r);
  }
  write(r) {
    this.writable = !1;
    for (let t = 0; t < r.length; t++) {
      const n = r[t], o = t === r.length - 1;
      Hu(n, this.supportsBinary, (i) => {
        try {
          this.doWrite(n, i);
        } catch {
        }
        o && Is(() => {
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
    const r = this.opts.secure ? "wss" : "ws", t = this.query || {};
    return this.opts.timestampRequests && (t[this.opts.timestampParam] = Pp()), this.supportsBinary || (t.b64 = 1), this.createUri(r, t);
  }
}
const Pc = br.WebSocket || br.MozWebSocket;
class yb extends bb {
  createSocket(r, t, n) {
    return Ip ? new Pc(r, t, n) : t ? new Pc(r, t) : new Pc(r);
  }
  doWrite(r, t) {
    this.ws.send(t);
  }
}
class wb extends qu {
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
        const t = rb(Number.MAX_SAFE_INTEGER, this.socket.binaryType), n = r.readable.pipeThrough(t).getReader(), o = tb();
        o.readable.pipeTo(r.writable), this._writer = o.writable.getWriter();
        const i = () => {
          n.read().then(({ done: s, value: c }) => {
            s || (this.onPacket(c), i());
          }).catch((s) => {
          });
        };
        i();
        const a = { type: "open" };
        this.query.sid && (a.data = `{"sid":"${this.query.sid}"}`), this._writer.write(a).then(() => this.onOpen());
      });
    });
  }
  write(r) {
    this.writable = !1;
    for (let t = 0; t < r.length; t++) {
      const n = r[t], o = t === r.length - 1;
      this._writer.write(n).then(() => {
        o && Is(() => {
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
const Sb = {
  websocket: yb,
  webtransport: wb,
  polling: vb
}, _b = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, Cb = [
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
function Tl(e) {
  if (e.length > 8e3)
    throw "URI too long";
  const r = e, t = e.indexOf("["), n = e.indexOf("]");
  t != -1 && n != -1 && (e = e.substring(0, t) + e.substring(t, n).replace(/:/g, ";") + e.substring(n, e.length));
  let o = _b.exec(e || ""), i = {}, a = 14;
  for (; a--; )
    i[Cb[a]] = o[a] || "";
  return t != -1 && n != -1 && (i.source = r, i.host = i.host.substring(1, i.host.length - 1).replace(/;/g, ":"), i.authority = i.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), i.ipv6uri = !0), i.pathNames = Eb(i, i.path), i.queryKey = Ob(i, i.query), i;
}
function Eb(e, r) {
  const t = /\/{2,9}/g, n = r.replace(t, "/").split("/");
  return (r.slice(0, 1) == "/" || r.length === 0) && n.splice(0, 1), r.slice(-1) == "/" && n.splice(n.length - 1, 1), n;
}
function Ob(e, r) {
  const t = {};
  return r.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(n, o, i) {
    o && (t[o] = i);
  }), t;
}
const Pl = typeof addEventListener == "function" && typeof removeEventListener == "function", wa = [];
Pl && addEventListener("offline", () => {
  wa.forEach((e) => e());
}, !1);
class xn extends At {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(r, t) {
    if (super(), this.binaryType = ob, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, r && typeof r == "object" && (t = r, r = null), r) {
      const n = Tl(r);
      t.hostname = n.host, t.secure = n.protocol === "https" || n.protocol === "wss", t.port = n.port, n.query && (t.query = n.query);
    } else t.host && (t.hostname = Tl(t.host).host);
    Ms(this, t), this.secure = t.secure != null ? t.secure : typeof location < "u" && location.protocol === "https:", t.hostname && !t.port && (t.port = this.secure ? "443" : "80"), this.hostname = t.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = t.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, t.transports.forEach((n) => {
      const o = n.prototype.name;
      this.transports.push(o), this._transportsByName[o] = n;
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
    }, t), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = fb(this.opts.query)), Pl && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, wa.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} name - transport name
   * @return {Transport}
   * @private
   */
  createTransport(r) {
    const t = Object.assign({}, this.opts.query);
    t.EIO = $p, t.transport = r, this.id && (t.sid = this.id);
    const n = Object.assign({}, this.opts, {
      query: t,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[r]);
    return new this._transportsByName[r](n);
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
    const r = this.opts.rememberUpgrade && xn.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
    this.readyState = "opening";
    const t = this.createTransport(r);
    t.open(), this.setTransport(t);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(r) {
    this.transport && this.transport.removeAllListeners(), this.transport = r, r.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", (t) => this._onClose("transport close", t));
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    this.readyState = "open", xn.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
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
          const t = new Error("server error");
          t.code = r.data, this._onError(t);
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
    let t = 1;
    for (let n = 0; n < this.writeBuffer.length; n++) {
      const o = this.writeBuffer[n].data;
      if (o && (t += cb(o)), n > 0 && t > this._maxPayload)
        return this.writeBuffer.slice(0, n);
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
    const r = Date.now() > this._pingTimeoutTime;
    return r && (this._pingTimeoutTime = 0, Is(() => {
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
  write(r, t, n) {
    return this._sendPacket("message", r, t, n), this;
  }
  /**
   * Sends a message. Alias of {@link Socket#write}.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  send(r, t, n) {
    return this._sendPacket("message", r, t, n), this;
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
  _sendPacket(r, t, n, o) {
    if (typeof t == "function" && (o = t, t = void 0), typeof n == "function" && (o = n, n = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    n = n || {}, n.compress = n.compress !== !1;
    const i = {
      type: r,
      data: t,
      options: n
    };
    this.emitReserved("packetCreate", i), this.writeBuffer.push(i), o && this.once("flush", o), this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const r = () => {
      this._onClose("forced close"), this.transport.close();
    }, t = () => {
      this.off("upgrade", t), this.off("upgradeError", t), r();
    }, n = () => {
      this.once("upgrade", t), this.once("upgradeError", t);
    };
    return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
      this.upgrading ? n() : r();
    }) : this.upgrading ? n() : r()), this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  _onError(r) {
    if (xn.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
      return this.transports.shift(), this._open();
    this.emitReserved("error", r), this._onClose("transport error", r);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  _onClose(r, t) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), Pl && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const n = wa.indexOf(this._offlineEventListener);
        n !== -1 && wa.splice(n, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", r, t), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
xn.protocol = $p;
class Rb extends xn {
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
    let t = this.createTransport(r), n = !1;
    xn.priorWebsocketSuccess = !1;
    const o = () => {
      n || (t.send([{ type: "ping", data: "probe" }]), t.once("packet", (f) => {
        if (!n)
          if (f.type === "pong" && f.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", t), !t)
              return;
            xn.priorWebsocketSuccess = t.name === "websocket", this.transport.pause(() => {
              n || this.readyState !== "closed" && (u(), this.setTransport(t), t.send([{ type: "upgrade" }]), this.emitReserved("upgrade", t), t = null, this.upgrading = !1, this.flush());
            });
          } else {
            const h = new Error("probe error");
            h.transport = t.name, this.emitReserved("upgradeError", h);
          }
      }));
    };
    function i() {
      n || (n = !0, u(), t.close(), t = null);
    }
    const a = (f) => {
      const h = new Error("probe error: " + f);
      h.transport = t.name, i(), this.emitReserved("upgradeError", h);
    };
    function s() {
      a("transport closed");
    }
    function c() {
      a("socket closed");
    }
    function l(f) {
      t && f.name !== t.name && i();
    }
    const u = () => {
      t.removeListener("open", o), t.removeListener("error", a), t.removeListener("close", s), this.off("close", c), this.off("upgrading", l);
    };
    t.once("open", o), t.once("error", a), t.once("close", s), this.once("close", c), this.once("upgrading", l), this._upgrades.indexOf("webtransport") !== -1 && r !== "webtransport" ? this.setTimeoutFn(() => {
      n || t.open();
    }, 200) : t.open();
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
    const t = [];
    for (let n = 0; n < r.length; n++)
      ~this.transports.indexOf(r[n]) && t.push(r[n]);
    return t;
  }
}
let $b = class extends Rb {
  constructor(r, t = {}) {
    const n = typeof r == "object" ? r : t;
    (!n.transports || n.transports && typeof n.transports[0] == "string") && (n.transports = (n.transports || ["polling", "websocket", "webtransport"]).map((o) => Sb[o]).filter((o) => !!o)), super(r, n);
  }
};
function Tb(e, r = "", t) {
  let n = e;
  t = t || typeof location < "u" && location, e == null && (e = t.protocol + "//" + t.host), typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = t.protocol + e : e = t.host + e), /^(https?|wss?):\/\//.test(e) || (typeof t < "u" ? e = t.protocol + "//" + e : e = "https://" + e), n = Tl(e)), n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")), n.path = n.path || "/";
  const i = n.host.indexOf(":") !== -1 ? "[" + n.host + "]" : n.host;
  return n.id = n.protocol + "://" + i + ":" + n.port + r, n.href = n.protocol + "://" + i + (t && t.port === n.port ? "" : ":" + n.port), n;
}
const Pb = typeof ArrayBuffer == "function", Nb = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer, Mp = Object.prototype.toString, Ab = typeof Blob == "function" || typeof Blob < "u" && Mp.call(Blob) === "[object BlobConstructor]", Ib = typeof File == "function" || typeof File < "u" && Mp.call(File) === "[object FileConstructor]";
function Uu(e) {
  return Pb && (e instanceof ArrayBuffer || Nb(e)) || Ab && e instanceof Blob || Ib && e instanceof File;
}
function Sa(e, r) {
  if (!e || typeof e != "object")
    return !1;
  if (Array.isArray(e)) {
    for (let t = 0, n = e.length; t < n; t++)
      if (Sa(e[t]))
        return !0;
    return !1;
  }
  if (Uu(e))
    return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return Sa(e.toJSON(), !0);
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && Sa(e[t]))
      return !0;
  return !1;
}
function Mb(e) {
  const r = [], t = e.data, n = e;
  return n.data = Nl(t, r), n.attachments = r.length, { packet: n, buffers: r };
}
function Nl(e, r) {
  if (!e)
    return e;
  if (Uu(e)) {
    const t = { _placeholder: !0, num: r.length };
    return r.push(e), t;
  } else if (Array.isArray(e)) {
    const t = new Array(e.length);
    for (let n = 0; n < e.length; n++)
      t[n] = Nl(e[n], r);
    return t;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const t = {};
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (t[n] = Nl(e[n], r));
    return t;
  }
  return e;
}
function Fb(e, r) {
  return e.data = Al(e.data, r), delete e.attachments, e;
}
function Al(e, r) {
  if (!e)
    return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < r.length)
      return r[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let t = 0; t < e.length; t++)
      e[t] = Al(e[t], r);
  else if (typeof e == "object")
    for (const t in e)
      Object.prototype.hasOwnProperty.call(e, t) && (e[t] = Al(e[t], r));
  return e;
}
const jb = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], Db = 5;
var nt;
(function(e) {
  e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK";
})(nt || (nt = {}));
class kb {
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
    return (r.type === nt.EVENT || r.type === nt.ACK) && Sa(r) ? this.encodeAsBinary({
      type: r.type === nt.EVENT ? nt.BINARY_EVENT : nt.BINARY_ACK,
      nsp: r.nsp,
      data: r.data,
      id: r.id
    }) : [this.encodeAsString(r)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(r) {
    let t = "" + r.type;
    return (r.type === nt.BINARY_EVENT || r.type === nt.BINARY_ACK) && (t += r.attachments + "-"), r.nsp && r.nsp !== "/" && (t += r.nsp + ","), r.id != null && (t += r.id), r.data != null && (t += JSON.stringify(r.data, this.replacer)), t;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(r) {
    const t = Mb(r), n = this.encodeAsString(t.packet), o = t.buffers;
    return o.unshift(n), o;
  }
}
function pd(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
class Gu extends At {
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
    let t;
    if (typeof r == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      t = this.decodeString(r);
      const n = t.type === nt.BINARY_EVENT;
      n || t.type === nt.BINARY_ACK ? (t.type = n ? nt.EVENT : nt.ACK, this.reconstructor = new Lb(t), t.attachments === 0 && super.emitReserved("decoded", t)) : super.emitReserved("decoded", t);
    } else if (Uu(r) || r.base64)
      if (this.reconstructor)
        t = this.reconstructor.takeBinaryData(r), t && (this.reconstructor = null, super.emitReserved("decoded", t));
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
    let t = 0;
    const n = {
      type: Number(r.charAt(0))
    };
    if (nt[n.type] === void 0)
      throw new Error("unknown packet type " + n.type);
    if (n.type === nt.BINARY_EVENT || n.type === nt.BINARY_ACK) {
      const i = t + 1;
      for (; r.charAt(++t) !== "-" && t != r.length; )
        ;
      const a = r.substring(i, t);
      if (a != Number(a) || r.charAt(t) !== "-")
        throw new Error("Illegal attachments");
      n.attachments = Number(a);
    }
    if (r.charAt(t + 1) === "/") {
      const i = t + 1;
      for (; ++t && !(r.charAt(t) === "," || t === r.length); )
        ;
      n.nsp = r.substring(i, t);
    } else
      n.nsp = "/";
    const o = r.charAt(t + 1);
    if (o !== "" && Number(o) == o) {
      const i = t + 1;
      for (; ++t; ) {
        const a = r.charAt(t);
        if (a == null || Number(a) != a) {
          --t;
          break;
        }
        if (t === r.length)
          break;
      }
      n.id = Number(r.substring(i, t + 1));
    }
    if (r.charAt(++t)) {
      const i = this.tryParse(r.substr(t));
      if (Gu.isPayloadValid(n.type, i))
        n.data = i;
      else
        throw new Error("invalid payload");
    }
    return n;
  }
  tryParse(r) {
    try {
      return JSON.parse(r, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(r, t) {
    switch (r) {
      case nt.CONNECT:
        return pd(t);
      case nt.DISCONNECT:
        return t === void 0;
      case nt.CONNECT_ERROR:
        return typeof t == "string" || pd(t);
      case nt.EVENT:
      case nt.BINARY_EVENT:
        return Array.isArray(t) && (typeof t[0] == "number" || typeof t[0] == "string" && jb.indexOf(t[0]) === -1);
      case nt.ACK:
      case nt.BINARY_ACK:
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
class Lb {
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
      const t = Fb(this.reconPack, this.buffers);
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
const zb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: Gu,
  Encoder: kb,
  get PacketType() {
    return nt;
  },
  protocol: Db
}, Symbol.toStringTag, { value: "Module" }));
function Er(e, r, t) {
  return e.on(r, t), function() {
    e.off(r, t);
  };
}
const Bb = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class Fp extends At {
  /**
   * `Socket` constructor.
   */
  constructor(r, t, n) {
    super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = r, this.nsp = t, n && n.auth && (this.auth = n.auth), this._opts = Object.assign({}, n), this.io._autoConnect && this.open();
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
      Er(r, "open", this.onopen.bind(this)),
      Er(r, "packet", this.onpacket.bind(this)),
      Er(r, "error", this.onerror.bind(this)),
      Er(r, "close", this.onclose.bind(this))
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
  emit(r, ...t) {
    var n, o, i;
    if (Bb.hasOwnProperty(r))
      throw new Error('"' + r.toString() + '" is a reserved event name');
    if (t.unshift(r), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(t), this;
    const a = {
      type: nt.EVENT,
      data: t
    };
    if (a.options = {}, a.options.compress = this.flags.compress !== !1, typeof t[t.length - 1] == "function") {
      const u = this.ids++, f = t.pop();
      this._registerAckCallback(u, f), a.id = u;
    }
    const s = (o = (n = this.io.engine) === null || n === void 0 ? void 0 : n.transport) === null || o === void 0 ? void 0 : o.writable, c = this.connected && !(!((i = this.io.engine) === null || i === void 0) && i._hasPingExpired());
    return this.flags.volatile && !s || (c ? (this.notifyOutgoingListeners(a), this.packet(a)) : this.sendBuffer.push(a)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(r, t) {
    var n;
    const o = (n = this.flags.timeout) !== null && n !== void 0 ? n : this._opts.ackTimeout;
    if (o === void 0) {
      this.acks[r] = t;
      return;
    }
    const i = this.io.setTimeoutFn(() => {
      delete this.acks[r];
      for (let s = 0; s < this.sendBuffer.length; s++)
        this.sendBuffer[s].id === r && this.sendBuffer.splice(s, 1);
      t.call(this, new Error("operation has timed out"));
    }, o), a = (...s) => {
      this.io.clearTimeoutFn(i), t.apply(this, s);
    };
    a.withError = !0, this.acks[r] = a;
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
  emitWithAck(r, ...t) {
    return new Promise((n, o) => {
      const i = (a, s) => a ? o(a) : n(s);
      i.withError = !0, t.push(i), this.emit(r, ...t);
    });
  }
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
  _addToQueue(r) {
    let t;
    typeof r[r.length - 1] == "function" && (t = r.pop());
    const n = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: r,
      flags: Object.assign({ fromQueue: !0 }, this.flags)
    };
    r.push((o, ...i) => n !== this._queue[0] ? void 0 : (o !== null ? n.tryCount > this._opts.retries && (this._queue.shift(), t && t(o)) : (this._queue.shift(), t && t(null, ...i)), n.pending = !1, this._drainQueue())), this._queue.push(n), this._drainQueue();
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
    const t = this._queue[0];
    t.pending && !r || (t.pending = !0, t.tryCount++, this.flags = t.flags, this.emit.apply(this, t.args));
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
      type: nt.CONNECT,
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
  onclose(r, t) {
    this.connected = !1, delete this.id, this.emitReserved("disconnect", r, t), this._clearAcks();
  }
  /**
   * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
   * the server.
   *
   * @private
   */
  _clearAcks() {
    Object.keys(this.acks).forEach((r) => {
      if (!this.sendBuffer.some((n) => String(n.id) === r)) {
        const n = this.acks[r];
        delete this.acks[r], n.withError && n.call(this, new Error("socket has been disconnected"));
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
        case nt.CONNECT:
          r.data && r.data.sid ? this.onconnect(r.data.sid, r.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case nt.EVENT:
        case nt.BINARY_EVENT:
          this.onevent(r);
          break;
        case nt.ACK:
        case nt.BINARY_ACK:
          this.onack(r);
          break;
        case nt.DISCONNECT:
          this.ondisconnect();
          break;
        case nt.CONNECT_ERROR:
          this.destroy();
          const n = new Error(r.data.message);
          n.data = r.data.data, this.emitReserved("connect_error", n);
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
    const t = r.data || [];
    r.id != null && t.push(this.ack(r.id)), this.connected ? this.emitEvent(t) : this.receiveBuffer.push(Object.freeze(t));
  }
  emitEvent(r) {
    if (this._anyListeners && this._anyListeners.length) {
      const t = this._anyListeners.slice();
      for (const n of t)
        n.apply(this, r);
    }
    super.emit.apply(this, r), this._pid && r.length && typeof r[r.length - 1] == "string" && (this._lastOffset = r[r.length - 1]);
  }
  /**
   * Produces an ack callback to emit with an event.
   *
   * @private
   */
  ack(r) {
    const t = this;
    let n = !1;
    return function(...o) {
      n || (n = !0, t.packet({
        type: nt.ACK,
        id: r,
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
  onack(r) {
    const t = this.acks[r.id];
    typeof t == "function" && (delete this.acks[r.id], t.withError && r.data.unshift(null), t.apply(this, r.data));
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(r, t) {
    this.id = r, this.recovered = t && this._pid === t, this._pid = t, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0);
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
    return this.connected && this.packet({ type: nt.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
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
      const t = this._anyListeners;
      for (let n = 0; n < t.length; n++)
        if (r === t[n])
          return t.splice(n, 1), this;
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
      const t = this._anyOutgoingListeners;
      for (let n = 0; n < t.length; n++)
        if (r === t[n])
          return t.splice(n, 1), this;
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
      const t = this._anyOutgoingListeners.slice();
      for (const n of t)
        n.apply(this, r.data);
    }
  }
}
function Eo(e) {
  e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0;
}
Eo.prototype.duration = function() {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var r = Math.random(), t = Math.floor(r * this.jitter * e);
    e = (Math.floor(r * 10) & 1) == 0 ? e - t : e + t;
  }
  return Math.min(e, this.max) | 0;
};
Eo.prototype.reset = function() {
  this.attempts = 0;
};
Eo.prototype.setMin = function(e) {
  this.ms = e;
};
Eo.prototype.setMax = function(e) {
  this.max = e;
};
Eo.prototype.setJitter = function(e) {
  this.jitter = e;
};
class Il extends At {
  constructor(r, t) {
    var n;
    super(), this.nsps = {}, this.subs = [], r && typeof r == "object" && (t = r, r = void 0), t = t || {}, t.path = t.path || "/socket.io", this.opts = t, Ms(this, t), this.reconnection(t.reconnection !== !1), this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0), this.reconnectionDelay(t.reconnectionDelay || 1e3), this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3), this.randomizationFactor((n = t.randomizationFactor) !== null && n !== void 0 ? n : 0.5), this.backoff = new Eo({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(t.timeout == null ? 2e4 : t.timeout), this._readyState = "closed", this.uri = r;
    const o = t.parser || zb;
    this.encoder = new o.Encoder(), this.decoder = new o.Decoder(), this._autoConnect = t.autoConnect !== !1, this._autoConnect && this.open();
  }
  reconnection(r) {
    return arguments.length ? (this._reconnection = !!r, r || (this.skipReconnect = !0), this) : this._reconnection;
  }
  reconnectionAttempts(r) {
    return r === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = r, this);
  }
  reconnectionDelay(r) {
    var t;
    return r === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = r, (t = this.backoff) === null || t === void 0 || t.setMin(r), this);
  }
  randomizationFactor(r) {
    var t;
    return r === void 0 ? this._randomizationFactor : (this._randomizationFactor = r, (t = this.backoff) === null || t === void 0 || t.setJitter(r), this);
  }
  reconnectionDelayMax(r) {
    var t;
    return r === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = r, (t = this.backoff) === null || t === void 0 || t.setMax(r), this);
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
    this.engine = new $b(this.uri, this.opts);
    const t = this.engine, n = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const o = Er(t, "open", function() {
      n.onopen(), r && r();
    }), i = (s) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", s), r ? r(s) : this.maybeReconnectOnOpen();
    }, a = Er(t, "error", i);
    if (this._timeout !== !1) {
      const s = this._timeout, c = this.setTimeoutFn(() => {
        o(), i(new Error("timeout")), t.close();
      }, s);
      this.opts.autoUnref && c.unref(), this.subs.push(() => {
        this.clearTimeoutFn(c);
      });
    }
    return this.subs.push(o), this.subs.push(a), this;
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
      Er(r, "ping", this.onping.bind(this)),
      Er(r, "data", this.ondata.bind(this)),
      Er(r, "error", this.onerror.bind(this)),
      Er(r, "close", this.onclose.bind(this)),
      // @ts-ignore
      Er(this.decoder, "decoded", this.ondecoded.bind(this))
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
    } catch (t) {
      this.onclose("parse error", t);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(r) {
    Is(() => {
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
  socket(r, t) {
    let n = this.nsps[r];
    return n ? this._autoConnect && !n.active && n.connect() : (n = new Fp(this, r, t), this.nsps[r] = n), n;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(r) {
    const t = Object.keys(this.nsps);
    for (const n of t)
      if (this.nsps[n].active)
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
    const t = this.encoder.encode(r);
    for (let n = 0; n < t.length; n++)
      this.engine.write(t[n], r.options);
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
  onclose(r, t) {
    var n;
    this.cleanup(), (n = this.engine) === null || n === void 0 || n.close(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", r, t), this._reconnection && !this.skipReconnect && this.reconnect();
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
      const t = this.backoff.duration();
      this._reconnecting = !0;
      const n = this.setTimeoutFn(() => {
        r.skipReconnect || (this.emitReserved("reconnect_attempt", r.backoff.attempts), !r.skipReconnect && r.open((o) => {
          o ? (r._reconnecting = !1, r.reconnect(), this.emitReserved("reconnect_error", o)) : r.onreconnect();
        }));
      }, t);
      this.opts.autoUnref && n.unref(), this.subs.push(() => {
        this.clearTimeoutFn(n);
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
const Lo = {};
function _a(e, r) {
  typeof e == "object" && (r = e, e = void 0), r = r || {};
  const t = Tb(e, r.path || "/socket.io"), n = t.source, o = t.id, i = t.path, a = Lo[o] && i in Lo[o].nsps, s = r.forceNew || r["force new connection"] || r.multiplex === !1 || a;
  let c;
  return s ? c = new Il(n, r) : (Lo[o] || (Lo[o] = new Il(n, r)), c = Lo[o]), t.query && !r.query && (r.query = t.queryKey), c.socket(t.path, r);
}
Object.assign(_a, {
  Manager: Il,
  Socket: Fp,
  io: _a,
  connect: _a
});
function bt() {
  return bt = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, bt.apply(null, arguments);
}
function Ne(e) {
  "@babel/helpers - typeof";
  return Ne = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Ne(e);
}
var Vb = Symbol.for("react.element"), Hb = Symbol.for("react.transitional.element"), Wb = Symbol.for("react.fragment");
function jp(e) {
  return (
    // Base object type
    e && Ne(e) === "object" && // React Element type
    (e.$$typeof === Vb || e.$$typeof === Hb) && // React Fragment type
    e.type === Wb
  );
}
function gn(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = [];
  return Q.Children.forEach(e, function(n) {
    n == null && !r.keepEmpty || (Array.isArray(n) ? t = t.concat(gn(n)) : jp(n) && n.props ? t = t.concat(gn(n.props.children, r)) : t.push(n));
  }), t;
}
var Ml = {}, Ku = [], qb = function(r) {
  Ku.push(r);
};
function uo(e, r) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var t = Ku.reduce(function(n, o) {
      return o(n ?? "", "warning");
    }, r);
    t && console.error("Warning: ".concat(t));
  }
}
function Ub(e, r) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var t = Ku.reduce(function(n, o) {
      return o(n ?? "", "note");
    }, r);
    t && console.warn("Note: ".concat(t));
  }
}
function Dp() {
  Ml = {};
}
function kp(e, r, t) {
  !r && !Ml[t] && (e(!1, t), Ml[t] = !0);
}
function _t(e, r) {
  kp(uo, e, r);
}
function Gb(e, r) {
  kp(Ub, e, r);
}
_t.preMessage = qb;
_t.resetWarned = Dp;
_t.noteOnce = Gb;
function Kb(e, r) {
  if (Ne(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(e, r);
    if (Ne(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
function Lp(e) {
  var r = Kb(e, "string");
  return Ne(r) == "symbol" ? r : r + "";
}
function j(e, r, t) {
  return (r = Lp(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function xd(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function q(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? xd(Object(t), !0).forEach(function(n) {
      j(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : xd(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function ni(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function Xb(e) {
  return e && Ne(e) === "object" && ni(e.nativeElement) ? e.nativeElement : ni(e) ? e : null;
}
function Ca(e) {
  var r = Xb(e);
  if (r)
    return r;
  if (e instanceof Q.Component) {
    var t;
    return (t = $f.findDOMNode) === null || t === void 0 ? void 0 : t.call($f, e);
  }
  return null;
}
function Xu(e, r, t) {
  var n = x.useRef({});
  return (!("value" in n.current) || t(n.current.condition, r)) && (n.current.value = e(), n.current.condition = r), n.current.value;
}
var Yb = Number(qm.split(".")[0]), Yu = function(r, t) {
  typeof r == "function" ? r(t) : Ne(r) === "object" && r && "current" in r && (r.current = t);
}, Dn = function() {
  for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
    t[n] = arguments[n];
  var o = t.filter(Boolean);
  return o.length <= 1 ? o[0] : function(i) {
    t.forEach(function(a) {
      Yu(a, i);
    });
  };
}, Fs = function() {
  for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
    t[n] = arguments[n];
  return Xu(function() {
    return Dn.apply(void 0, t);
  }, t, function(o, i) {
    return o.length !== i.length || o.every(function(a, s) {
      return a !== i[s];
    });
  });
}, vi = function(r) {
  var t, n;
  if (!r)
    return !1;
  if (zp(r) && Yb >= 19)
    return !0;
  var o = Rc.isMemo(r) ? r.type.type : r.type;
  return !(typeof o == "function" && !((t = o.prototype) !== null && t !== void 0 && t.render) && o.$$typeof !== Rc.ForwardRef || typeof r == "function" && !((n = r.prototype) !== null && n !== void 0 && n.render) && r.$$typeof !== Rc.ForwardRef);
};
function zp(e) {
  return /* @__PURE__ */ kh(e) && !jp(e);
}
var js = function(r) {
  if (r && zp(r)) {
    var t = r;
    return t.props.propertyIsEnumerable("ref") ? t.props.ref : t.ref;
  }
  return null;
}, Fl = /* @__PURE__ */ x.createContext(null);
function Jb(e) {
  var r = e.children, t = e.onBatchResize, n = x.useRef(0), o = x.useRef([]), i = x.useContext(Fl), a = x.useCallback(function(s, c, l) {
    n.current += 1;
    var u = n.current;
    o.current.push({
      size: s,
      element: c,
      data: l
    }), Promise.resolve().then(function() {
      u === n.current && (t == null || t(o.current), o.current = []);
    }), i == null || i(s, c, l);
  }, [t, i]);
  return /* @__PURE__ */ x.createElement(Fl.Provider, {
    value: a
  }, r);
}
var Bp = function() {
  if (typeof Map < "u")
    return Map;
  function e(r, t) {
    var n = -1;
    return r.some(function(o, i) {
      return o[0] === t ? (n = i, !0) : !1;
    }), n;
  }
  return (
    /** @class */
    function() {
      function r() {
        this.__entries__ = [];
      }
      return Object.defineProperty(r.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), r.prototype.get = function(t) {
        var n = e(this.__entries__, t), o = this.__entries__[n];
        return o && o[1];
      }, r.prototype.set = function(t, n) {
        var o = e(this.__entries__, t);
        ~o ? this.__entries__[o][1] = n : this.__entries__.push([t, n]);
      }, r.prototype.delete = function(t) {
        var n = this.__entries__, o = e(n, t);
        ~o && n.splice(o, 1);
      }, r.prototype.has = function(t) {
        return !!~e(this.__entries__, t);
      }, r.prototype.clear = function() {
        this.__entries__.splice(0);
      }, r.prototype.forEach = function(t, n) {
        n === void 0 && (n = null);
        for (var o = 0, i = this.__entries__; o < i.length; o++) {
          var a = i[o];
          t.call(n, a[1], a[0]);
        }
      }, r;
    }()
  );
}(), jl = typeof window < "u" && typeof document < "u" && window.document === document, Va = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), Qb = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Va) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), Zb = 2;
function ey(e, r) {
  var t = !1, n = !1, o = 0;
  function i() {
    t && (t = !1, e()), n && s();
  }
  function a() {
    Qb(i);
  }
  function s() {
    var c = Date.now();
    if (t) {
      if (c - o < Zb)
        return;
      n = !0;
    } else
      t = !0, n = !1, setTimeout(a, r);
    o = c;
  }
  return s;
}
var ty = 20, ry = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], ny = typeof MutationObserver < "u", oy = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = ey(this.refresh.bind(this), ty);
    }
    return e.prototype.addObserver = function(r) {
      ~this.observers_.indexOf(r) || this.observers_.push(r), this.connected_ || this.connect_();
    }, e.prototype.removeObserver = function(r) {
      var t = this.observers_, n = t.indexOf(r);
      ~n && t.splice(n, 1), !t.length && this.connected_ && this.disconnect_();
    }, e.prototype.refresh = function() {
      var r = this.updateObservers_();
      r && this.refresh();
    }, e.prototype.updateObservers_ = function() {
      var r = this.observers_.filter(function(t) {
        return t.gatherActive(), t.hasActive();
      });
      return r.forEach(function(t) {
        return t.broadcastActive();
      }), r.length > 0;
    }, e.prototype.connect_ = function() {
      !jl || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), ny ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !jl || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(r) {
      var t = r.propertyName, n = t === void 0 ? "" : t, o = ry.some(function(i) {
        return !!~n.indexOf(i);
      });
      o && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), Vp = function(e, r) {
  for (var t = 0, n = Object.keys(r); t < n.length; t++) {
    var o = n[t];
    Object.defineProperty(e, o, {
      value: r[o],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}, fo = function(e) {
  var r = e && e.ownerDocument && e.ownerDocument.defaultView;
  return r || Va;
}, Hp = Ds(0, 0, 0, 0);
function Ha(e) {
  return parseFloat(e) || 0;
}
function gd(e) {
  for (var r = [], t = 1; t < arguments.length; t++)
    r[t - 1] = arguments[t];
  return r.reduce(function(n, o) {
    var i = e["border-" + o + "-width"];
    return n + Ha(i);
  }, 0);
}
function iy(e) {
  for (var r = ["top", "right", "bottom", "left"], t = {}, n = 0, o = r; n < o.length; n++) {
    var i = o[n], a = e["padding-" + i];
    t[i] = Ha(a);
  }
  return t;
}
function ay(e) {
  var r = e.getBBox();
  return Ds(0, 0, r.width, r.height);
}
function sy(e) {
  var r = e.clientWidth, t = e.clientHeight;
  if (!r && !t)
    return Hp;
  var n = fo(e).getComputedStyle(e), o = iy(n), i = o.left + o.right, a = o.top + o.bottom, s = Ha(n.width), c = Ha(n.height);
  if (n.boxSizing === "border-box" && (Math.round(s + i) !== r && (s -= gd(n, "left", "right") + i), Math.round(c + a) !== t && (c -= gd(n, "top", "bottom") + a)), !ly(e)) {
    var l = Math.round(s + i) - r, u = Math.round(c + a) - t;
    Math.abs(l) !== 1 && (s -= l), Math.abs(u) !== 1 && (c -= u);
  }
  return Ds(o.left, o.top, s, c);
}
var cy = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof fo(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof fo(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function ly(e) {
  return e === fo(e).document.documentElement;
}
function uy(e) {
  return jl ? cy(e) ? ay(e) : sy(e) : Hp;
}
function fy(e) {
  var r = e.x, t = e.y, n = e.width, o = e.height, i = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, a = Object.create(i.prototype);
  return Vp(a, {
    x: r,
    y: t,
    width: n,
    height: o,
    top: t,
    right: r + n,
    bottom: o + t,
    left: r
  }), a;
}
function Ds(e, r, t, n) {
  return { x: e, y: r, width: t, height: n };
}
var dy = (
  /** @class */
  function() {
    function e(r) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Ds(0, 0, 0, 0), this.target = r;
    }
    return e.prototype.isActive = function() {
      var r = uy(this.target);
      return this.contentRect_ = r, r.width !== this.broadcastWidth || r.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var r = this.contentRect_;
      return this.broadcastWidth = r.width, this.broadcastHeight = r.height, r;
    }, e;
  }()
), hy = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(r, t) {
      var n = fy(t);
      Vp(this, { target: r, contentRect: n });
    }
    return e;
  }()
), py = (
  /** @class */
  function() {
    function e(r, t, n) {
      if (this.activeObservations_ = [], this.observations_ = new Bp(), typeof r != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = r, this.controller_ = t, this.callbackCtx_ = n;
    }
    return e.prototype.observe = function(r) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(r instanceof fo(r).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var t = this.observations_;
        t.has(r) || (t.set(r, new dy(r)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(r) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(r instanceof fo(r).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var t = this.observations_;
        t.has(r) && (t.delete(r), t.size || this.controller_.removeObserver(this));
      }
    }, e.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, e.prototype.gatherActive = function() {
      var r = this;
      this.clearActive(), this.observations_.forEach(function(t) {
        t.isActive() && r.activeObservations_.push(t);
      });
    }, e.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var r = this.callbackCtx_, t = this.activeObservations_.map(function(n) {
          return new hy(n.target, n.broadcastRect());
        });
        this.callback_.call(r, t, r), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), Wp = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Bp(), qp = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(r) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var t = oy.getInstance(), n = new py(r, t, this);
      Wp.set(this, n);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  qp.prototype[e] = function() {
    var r;
    return (r = Wp.get(this))[e].apply(r, arguments);
  };
});
var xy = function() {
  return typeof Va.ResizeObserver < "u" ? Va.ResizeObserver : qp;
}(), Yr = /* @__PURE__ */ new Map();
function Up(e) {
  e.forEach(function(r) {
    var t, n = r.target;
    (t = Yr.get(n)) === null || t === void 0 || t.forEach(function(o) {
      return o(n);
    });
  });
}
var Gp = new xy(Up);
process.env.NODE_ENV;
process.env.NODE_ENV;
function gy(e, r) {
  Yr.has(e) || (Yr.set(e, /* @__PURE__ */ new Set()), Gp.observe(e)), Yr.get(e).add(r);
}
function my(e, r) {
  Yr.has(e) && (Yr.get(e).delete(r), Yr.get(e).size || (Gp.unobserve(e), Yr.delete(e)));
}
function Ht(e, r) {
  if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
}
function md(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Lp(n.key), n);
  }
}
function Wt(e, r, t) {
  return r && md(e.prototype, r), t && md(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function oi(e, r) {
  return oi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, n) {
    return t.__proto__ = n, t;
  }, oi(e, r);
}
function mn(e, r) {
  if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(r && r.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), r && oi(e, r);
}
function ii(e) {
  return ii = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ii(e);
}
function Ju() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Ju = function() {
    return !!e;
  })();
}
function Ye(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function vy(e, r) {
  if (r && (Ne(r) == "object" || typeof r == "function")) return r;
  if (r !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Ye(e);
}
function vn(e) {
  var r = Ju();
  return function() {
    var t, n = ii(e);
    if (r) {
      var o = ii(this).constructor;
      t = Reflect.construct(n, arguments, o);
    } else t = n.apply(this, arguments);
    return vy(this, t);
  };
}
var by = /* @__PURE__ */ function(e) {
  mn(t, e);
  var r = vn(t);
  function t() {
    return Ht(this, t), r.apply(this, arguments);
  }
  return Wt(t, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), t;
}(x.Component);
function yy(e, r) {
  var t = e.children, n = e.disabled, o = x.useRef(null), i = x.useRef(null), a = x.useContext(Fl), s = typeof t == "function", c = s ? t(o) : t, l = x.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  }), u = !s && /* @__PURE__ */ x.isValidElement(c) && vi(c), f = u ? js(c) : null, h = Fs(f, o), m = function() {
    var y;
    return Ca(o.current) || // Support `nativeElement` format
    (o.current && Ne(o.current) === "object" ? Ca((y = o.current) === null || y === void 0 ? void 0 : y.nativeElement) : null) || Ca(i.current);
  };
  x.useImperativeHandle(r, function() {
    return m();
  });
  var d = x.useRef(e);
  d.current = e;
  var g = x.useCallback(function(p) {
    var y = d.current, b = y.onResize, S = y.data, C = p.getBoundingClientRect(), v = C.width, _ = C.height, w = p.offsetWidth, A = p.offsetHeight, M = Math.floor(v), k = Math.floor(_);
    if (l.current.width !== M || l.current.height !== k || l.current.offsetWidth !== w || l.current.offsetHeight !== A) {
      var V = {
        width: M,
        height: k,
        offsetWidth: w,
        offsetHeight: A
      };
      l.current = V;
      var U = w === Math.round(v) ? v : w, L = A === Math.round(_) ? _ : A, z = q(q({}, V), {}, {
        offsetWidth: U,
        offsetHeight: L
      });
      a == null || a(z, p, S), b && Promise.resolve().then(function() {
        b(z, p);
      });
    }
  }, []);
  return x.useEffect(function() {
    var p = m();
    return p && !n && gy(p, g), function() {
      return my(p, g);
    };
  }, [o.current, n]), /* @__PURE__ */ x.createElement(by, {
    ref: i
  }, u ? /* @__PURE__ */ x.cloneElement(c, {
    ref: h
  }) : c);
}
var Kp = /* @__PURE__ */ x.forwardRef(yy);
process.env.NODE_ENV !== "production" && (Kp.displayName = "SingleObserver");
var wy = "rc-observer-key";
function Sy(e, r) {
  var t = e.children, n = typeof t == "function" ? [t] : gn(t);
  return process.env.NODE_ENV !== "production" && (n.length > 1 ? uo(!1, "Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.") : n.length === 0 && uo(!1, "`children` of ResizeObserver is empty. Nothing is in observe.")), n.map(function(o, i) {
    var a = (o == null ? void 0 : o.key) || "".concat(wy, "-").concat(i);
    return /* @__PURE__ */ x.createElement(Kp, bt({}, e, {
      key: a,
      ref: i === 0 ? r : void 0
    }), o);
  });
}
var Oo = /* @__PURE__ */ x.forwardRef(Sy);
process.env.NODE_ENV !== "production" && (Oo.displayName = "ResizeObserver");
Oo.Collection = Jb;
function Dl(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function _y(e) {
  if (Array.isArray(e)) return Dl(e);
}
function Xp(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Qu(e, r) {
  if (e) {
    if (typeof e == "string") return Dl(e, r);
    var t = {}.toString.call(e).slice(8, -1);
    return t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set" ? Array.from(e) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Dl(e, r) : void 0;
  }
}
function Cy() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Re(e) {
  return _y(e) || Xp(e) || Qu(e) || Cy();
}
var Yp = function(r) {
  return +setTimeout(r, 16);
}, Jp = function(r) {
  return clearTimeout(r);
};
typeof window < "u" && "requestAnimationFrame" in window && (Yp = function(r) {
  return window.requestAnimationFrame(r);
}, Jp = function(r) {
  return window.cancelAnimationFrame(r);
});
var vd = 0, ks = /* @__PURE__ */ new Map();
function Qp(e) {
  ks.delete(e);
}
var Vr = function(r) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  vd += 1;
  var n = vd;
  function o(i) {
    if (i === 0)
      Qp(n), r();
    else {
      var a = Yp(function() {
        o(i - 1);
      });
      ks.set(n, a);
    }
  }
  return o(t), n;
};
Vr.cancel = function(e) {
  var r = ks.get(e);
  return Qp(e), Jp(r);
};
process.env.NODE_ENV !== "production" && (Vr.ids = function() {
  return ks;
});
function Zp(e) {
  if (Array.isArray(e)) return e;
}
function Ey(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var n, o, i, a, s = [], c = !0, l = !1;
    try {
      if (i = (t = t.call(e)).next, r === 0) {
        if (Object(t) !== t) return;
        c = !1;
      } else for (; !(c = (n = i.call(t)).done) && (s.push(n.value), s.length !== r); c = !0) ;
    } catch (u) {
      l = !0, o = u;
    } finally {
      try {
        if (!c && t.return != null && (a = t.return(), Object(a) !== a)) return;
      } finally {
        if (l) throw o;
      }
    }
    return s;
  }
}
function ex() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ne(e, r) {
  return Zp(e) || Ey(e, r) || Qu(e, r) || ex();
}
function ai(e) {
  for (var r = 0, t, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    t = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, r = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      r ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      r ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      r ^= e.charCodeAt(n) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
function Zt() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Oy(e, r) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(r);
  for (var t = r; t; ) {
    if (t === e)
      return !0;
    t = t.parentNode;
  }
  return !1;
}
var bd = "data-rc-order", yd = "data-rc-priority", Ry = "rc-util-key", kl = /* @__PURE__ */ new Map();
function tx() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = e.mark;
  return r ? r.startsWith("data-") ? r : "data-".concat(r) : Ry;
}
function Ls(e) {
  if (e.attachTo)
    return e.attachTo;
  var r = document.querySelector("head");
  return r || document.body;
}
function $y(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Zu(e) {
  return Array.from((kl.get(e) || e).children).filter(function(r) {
    return r.tagName === "STYLE";
  });
}
function rx(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Zt())
    return null;
  var t = r.csp, n = r.prepend, o = r.priority, i = o === void 0 ? 0 : o, a = $y(n), s = a === "prependQueue", c = document.createElement("style");
  c.setAttribute(bd, a), s && i && c.setAttribute(yd, "".concat(i)), t != null && t.nonce && (c.nonce = t == null ? void 0 : t.nonce), c.innerHTML = e;
  var l = Ls(r), u = l.firstChild;
  if (n) {
    if (s) {
      var f = (r.styles || Zu(l)).filter(function(h) {
        if (!["prepend", "prependQueue"].includes(h.getAttribute(bd)))
          return !1;
        var m = Number(h.getAttribute(yd) || 0);
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
function nx(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = Ls(r);
  return (r.styles || Zu(t)).find(function(n) {
    return n.getAttribute(tx(r)) === e;
  });
}
function si(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = nx(e, r);
  if (t) {
    var n = Ls(r);
    n.removeChild(t);
  }
}
function Ty(e, r) {
  var t = kl.get(e);
  if (!t || !Oy(document, t)) {
    var n = rx("", r), o = n.parentNode;
    kl.set(e, o), e.removeChild(n);
  }
}
function Jr(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = Ls(t), o = Zu(n), i = q(q({}, t), {}, {
    styles: o
  });
  Ty(n, i);
  var a = nx(r, i);
  if (a) {
    var s, c;
    if ((s = i.csp) !== null && s !== void 0 && s.nonce && a.nonce !== ((c = i.csp) === null || c === void 0 ? void 0 : c.nonce)) {
      var l;
      a.nonce = (l = i.csp) === null || l === void 0 ? void 0 : l.nonce;
    }
    return a.innerHTML !== e && (a.innerHTML = e), a;
  }
  var u = rx(e, i);
  return u.setAttribute(tx(i), r), u;
}
function Py(e, r) {
  if (e == null) return {};
  var t = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (r.indexOf(n) !== -1) continue;
    t[n] = e[n];
  }
  return t;
}
function Kt(e, r) {
  if (e == null) return {};
  var t, n, o = Py(e, r);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) t = i[n], r.indexOf(t) === -1 && {}.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
  }
  return o;
}
function Ll(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = /* @__PURE__ */ new Set();
  function o(i, a) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, c = n.has(i);
    if (_t(!c, "Warning: There may be circular references"), c)
      return !1;
    if (i === a)
      return !0;
    if (t && s > 1)
      return !1;
    n.add(i);
    var l = s + 1;
    if (Array.isArray(i)) {
      if (!Array.isArray(a) || i.length !== a.length)
        return !1;
      for (var u = 0; u < i.length; u++)
        if (!o(i[u], a[u], l))
          return !1;
      return !0;
    }
    if (i && a && Ne(i) === "object" && Ne(a) === "object") {
      var f = Object.keys(i);
      return f.length !== Object.keys(a).length ? !1 : f.every(function(h) {
        return o(i[h], a[h], l);
      });
    }
    return !1;
  }
  return o(e, r);
}
var Ny = "%";
function zl(e) {
  return e.join(Ny);
}
var Ay = /* @__PURE__ */ function() {
  function e(r) {
    Ht(this, e), j(this, "instanceId", void 0), j(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = r;
  }
  return Wt(e, [{
    key: "get",
    value: function(t) {
      return this.opGet(zl(t));
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opGet",
    value: function(t) {
      return this.cache.get(t) || null;
    }
  }, {
    key: "update",
    value: function(t, n) {
      return this.opUpdate(zl(t), n);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(t, n) {
      var o = this.cache.get(t), i = n(o);
      i === null ? this.cache.delete(t) : this.cache.set(t, i);
    }
  }]), e;
}(), ho = "data-token-hash", Pr = "data-css-hash", Iy = "data-cache-path", dn = "__cssinjs_instance__";
function My() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var r = document.body.querySelectorAll("style[".concat(Pr, "]")) || [], t = document.head.firstChild;
    Array.from(r).forEach(function(o) {
      o[dn] = o[dn] || e, o[dn] === e && document.head.insertBefore(o, t);
    });
    var n = {};
    Array.from(document.querySelectorAll("style[".concat(Pr, "]"))).forEach(function(o) {
      var i = o.getAttribute(Pr);
      if (n[i]) {
        if (o[dn] === e) {
          var a;
          (a = o.parentNode) === null || a === void 0 || a.removeChild(o);
        }
      } else
        n[i] = !0;
    });
  }
  return new Ay(e);
}
var bi = /* @__PURE__ */ x.createContext({
  hashPriority: "low",
  cache: My(),
  defaultCache: !0
});
function Fy(e, r) {
  if (e.length !== r.length)
    return !1;
  for (var t = 0; t < e.length; t++)
    if (e[t] !== r[t])
      return !1;
  return !0;
}
var ef = /* @__PURE__ */ function() {
  function e() {
    Ht(this, e), j(this, "cache", void 0), j(this, "keys", void 0), j(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return Wt(e, [{
    key: "size",
    value: function() {
      return this.keys.length;
    }
  }, {
    key: "internalGet",
    value: function(t) {
      var n, o, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, a = {
        map: this.cache
      };
      return t.forEach(function(s) {
        if (!a)
          a = void 0;
        else {
          var c;
          a = (c = a) === null || c === void 0 || (c = c.map) === null || c === void 0 ? void 0 : c.get(s);
        }
      }), (n = a) !== null && n !== void 0 && n.value && i && (a.value[1] = this.cacheCallTimes++), (o = a) === null || o === void 0 ? void 0 : o.value;
    }
  }, {
    key: "get",
    value: function(t) {
      var n;
      return (n = this.internalGet(t, !0)) === null || n === void 0 ? void 0 : n[0];
    }
  }, {
    key: "has",
    value: function(t) {
      return !!this.internalGet(t);
    }
  }, {
    key: "set",
    value: function(t, n) {
      var o = this;
      if (!this.has(t)) {
        if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
          var i = this.keys.reduce(function(l, u) {
            var f = ne(l, 2), h = f[1];
            return o.internalGet(u)[1] < h ? [u, o.internalGet(u)[1]] : l;
          }, [this.keys[0], this.cacheCallTimes]), a = ne(i, 1), s = a[0];
          this.delete(s);
        }
        this.keys.push(t);
      }
      var c = this.cache;
      t.forEach(function(l, u) {
        if (u === t.length - 1)
          c.set(l, {
            value: [n, o.cacheCallTimes++]
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
    value: function(t, n) {
      var o = t.get(n[0]);
      if (n.length === 1) {
        var i;
        return o.map ? t.set(n[0], {
          map: o.map
        }) : t.delete(n[0]), (i = o.value) === null || i === void 0 ? void 0 : i[0];
      }
      var a = this.deleteByPath(o.map, n.slice(1));
      return (!o.map || o.map.size === 0) && !o.value && t.delete(n[0]), a;
    }
  }, {
    key: "delete",
    value: function(t) {
      if (this.has(t))
        return this.keys = this.keys.filter(function(n) {
          return !Fy(n, t);
        }), this.deleteByPath(this.cache, t);
    }
  }]), e;
}();
j(ef, "MAX_CACHE_SIZE", 20);
j(ef, "MAX_CACHE_OFFSET", 5);
var wd = 0, ox = /* @__PURE__ */ function() {
  function e(r) {
    Ht(this, e), j(this, "derivatives", void 0), j(this, "id", void 0), this.derivatives = Array.isArray(r) ? r : [r], this.id = wd, r.length === 0 && uo(r.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), wd += 1;
  }
  return Wt(e, [{
    key: "getDerivativeToken",
    value: function(t) {
      return this.derivatives.reduce(function(n, o) {
        return o(t, n);
      }, void 0);
    }
  }]), e;
}(), Nc = new ef();
function Bl(e) {
  var r = Array.isArray(e) ? e : [e];
  return Nc.has(r) || Nc.set(r, new ox(r)), Nc.get(r);
}
var jy = /* @__PURE__ */ new WeakMap(), Ac = {};
function Dy(e, r) {
  for (var t = jy, n = 0; n < r.length; n += 1) {
    var o = r[n];
    t.has(o) || t.set(o, /* @__PURE__ */ new WeakMap()), t = t.get(o);
  }
  return t.has(Ac) || t.set(Ac, e()), t.get(Ac);
}
var Sd = /* @__PURE__ */ new WeakMap();
function Zo(e) {
  var r = Sd.get(e) || "";
  return r || (Object.keys(e).forEach(function(t) {
    var n = e[t];
    r += t, n instanceof ox ? r += n.id : n && Ne(n) === "object" ? r += Zo(n) : r += n;
  }), r = ai(r), Sd.set(e, r)), r;
}
function _d(e, r) {
  return ai("".concat(r, "_").concat(Zo(e)));
}
var Vl = Zt();
function ot(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function Wa(e, r, t) {
  var n, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (i)
    return e;
  var a = q(q({}, o), {}, (n = {}, j(n, ho, r), j(n, Pr, t), n)), s = Object.keys(a).map(function(c) {
    var l = a[c];
    return l ? "".concat(c, '="').concat(l, '"') : null;
  }).filter(function(c) {
    return c;
  }).join(" ");
  return "<style ".concat(s, ">").concat(e, "</style>");
}
var Ea = function(r) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(t ? "".concat(t, "-") : "").concat(r).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, ky = function(r, t, n) {
  return Object.keys(r).length ? ".".concat(t).concat(n != null && n.scope ? ".".concat(n.scope) : "", "{").concat(Object.entries(r).map(function(o) {
    var i = ne(o, 2), a = i[0], s = i[1];
    return "".concat(a, ":").concat(s, ";");
  }).join(""), "}") : "";
}, ix = function(r, t, n) {
  var o = {}, i = {};
  return Object.entries(r).forEach(function(a) {
    var s, c, l = ne(a, 2), u = l[0], f = l[1];
    if (n != null && (s = n.preserve) !== null && s !== void 0 && s[u])
      i[u] = f;
    else if ((typeof f == "string" || typeof f == "number") && !(n != null && (c = n.ignore) !== null && c !== void 0 && c[u])) {
      var h, m = Ea(u, n == null ? void 0 : n.prefix);
      o[m] = typeof f == "number" && !(n != null && (h = n.unitless) !== null && h !== void 0 && h[u]) ? "".concat(f, "px") : String(f), i[u] = "var(".concat(m, ")");
    }
  }), [i, ky(o, t, {
    scope: n == null ? void 0 : n.scope
  })];
}, Cd = process.env.NODE_ENV !== "test" && Zt() ? x.useLayoutEffect : x.useEffect, St = function(r, t) {
  var n = x.useRef(!0);
  Cd(function() {
    return r(n.current);
  }, t), Cd(function() {
    return n.current = !1, function() {
      n.current = !0;
    };
  }, []);
}, Ed = function(r, t) {
  St(function(n) {
    if (!n)
      return r();
  }, t);
}, Ly = q({}, x), Od = Ly.useInsertionEffect, zy = function(r, t, n) {
  x.useMemo(r, n), St(function() {
    return t(!0);
  }, n);
}, By = Od ? function(e, r, t) {
  return Od(function() {
    return e(), r();
  }, t);
} : zy, Vy = q({}, x), Hy = Vy.useInsertionEffect, Wy = function(r) {
  var t = [], n = !1;
  function o(i) {
    if (n) {
      process.env.NODE_ENV !== "production" && uo(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    t.push(i);
  }
  return x.useEffect(function() {
    return n = !1, function() {
      n = !0, t.length && t.forEach(function(i) {
        return i();
      });
    };
  }, r), o;
}, qy = function() {
  return function(r) {
    r();
  };
}, Uy = typeof Hy < "u" ? Wy : qy;
function Gy() {
  return !1;
}
var Hl = !1;
function Ky() {
  return Hl;
}
const Xy = process.env.NODE_ENV === "production" ? Gy : Ky;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var ta = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : null;
  if (ta && typeof ta.webpackHotUpdate == "function") {
    var Yy = ta.webpackHotUpdate;
    ta.webpackHotUpdate = function() {
      return Hl = !0, setTimeout(function() {
        Hl = !1;
      }, 0), Yy.apply(void 0, arguments);
    };
  }
}
function tf(e, r, t, n, o) {
  var i = x.useContext(bi), a = i.cache, s = [e].concat(Re(r)), c = zl(s), l = Uy([c]), u = Xy(), f = function(g) {
    a.opUpdate(c, function(p) {
      var y = p || [void 0, void 0], b = ne(y, 2), S = b[0], C = S === void 0 ? 0 : S, v = b[1], _ = v;
      process.env.NODE_ENV !== "production" && v && u && (n == null || n(_, u), _ = null);
      var w = _ || t(), A = [C, w];
      return g ? g(A) : A;
    });
  };
  x.useMemo(
    function() {
      f();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [c]
    /* eslint-enable */
  );
  var h = a.opGet(c);
  process.env.NODE_ENV !== "production" && !h && (f(), h = a.opGet(c));
  var m = h[1];
  return By(function() {
    o == null || o(m);
  }, function(d) {
    return f(function(g) {
      var p = ne(g, 2), y = p[0], b = p[1];
      return d && y === 0 && (o == null || o(m)), [y + 1, b];
    }), function() {
      a.opUpdate(c, function(g) {
        var p = g || [], y = ne(p, 2), b = y[0], S = b === void 0 ? 0 : b, C = y[1], v = S - 1;
        return v === 0 ? (l(function() {
          (d || !a.opGet(c)) && (n == null || n(C, !1));
        }), null) : [S - 1, C];
      });
    };
  }, [c]), m;
}
var Jy = {}, Qy = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", _n = /* @__PURE__ */ new Map();
function Zy(e) {
  _n.set(e, (_n.get(e) || 0) + 1);
}
function e2(e, r) {
  if (typeof document < "u") {
    var t = document.querySelectorAll("style[".concat(ho, '="').concat(e, '"]'));
    t.forEach(function(n) {
      if (n[dn] === r) {
        var o;
        (o = n.parentNode) === null || o === void 0 || o.removeChild(n);
      }
    });
  }
}
var t2 = 0;
function r2(e, r) {
  _n.set(e, (_n.get(e) || 0) - 1);
  var t = Array.from(_n.keys()), n = t.filter(function(o) {
    var i = _n.get(o) || 0;
    return i <= 0;
  });
  t.length - n.length > t2 && n.forEach(function(o) {
    e2(o, r), _n.delete(o);
  });
}
var n2 = function(r, t, n, o) {
  var i = n.getDerivativeToken(r), a = q(q({}, i), t);
  return o && (a = o(a)), a;
}, ax = "token";
function o2(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = ir(bi), o = n.cache.instanceId, i = n.container, a = t.salt, s = a === void 0 ? "" : a, c = t.override, l = c === void 0 ? Jy : c, u = t.formatToken, f = t.getComputedToken, h = t.cssVar, m = Dy(function() {
    return Object.assign.apply(Object, [{}].concat(Re(r)));
  }, r), d = Zo(m), g = Zo(l), p = h ? Zo(h) : "", y = tf(ax, [s, e.id, d, g, p], function() {
    var b, S = f ? f(m, l, e) : n2(m, l, e, u), C = q({}, S), v = "";
    if (h) {
      var _ = ix(S, h.key, {
        prefix: h.prefix,
        ignore: h.ignore,
        unitless: h.unitless,
        preserve: h.preserve
      }), w = ne(_, 2);
      S = w[0], v = w[1];
    }
    var A = _d(S, s);
    S._tokenKey = A, C._tokenKey = _d(C, s);
    var M = (b = h == null ? void 0 : h.key) !== null && b !== void 0 ? b : A;
    S._themeKey = M, Zy(M);
    var k = "".concat(Qy, "-").concat(ai(A));
    return S._hashId = k, [S, k, C, v, (h == null ? void 0 : h.key) || ""];
  }, function(b) {
    r2(b[0]._themeKey, o);
  }, function(b) {
    var S = ne(b, 4), C = S[0], v = S[3];
    if (h && v) {
      var _ = Jr(v, ai("css-variables-".concat(C._themeKey)), {
        mark: Pr,
        prepend: "queue",
        attachTo: i,
        priority: -999
      });
      _[dn] = o, _.setAttribute(ho, C._themeKey);
    }
  });
  return y;
}
var i2 = function(r, t, n) {
  var o = ne(r, 5), i = o[2], a = o[3], s = o[4], c = n || {}, l = c.plain;
  if (!a)
    return null;
  var u = i._tokenKey, f = -999, h = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(f)
  }, m = Wa(a, s, u, h, l);
  return [f, u, m];
}, a2 = {
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
}, sx = "comm", cx = "rule", lx = "decl", s2 = "@import", c2 = "@namespace", l2 = "@keyframes", u2 = "@layer", ux = Math.abs, rf = String.fromCharCode;
function fx(e) {
  return e.trim();
}
function Oa(e, r, t) {
  return e.replace(r, t);
}
function f2(e, r, t) {
  return e.indexOf(r, t);
}
function to(e, r) {
  return e.charCodeAt(r) | 0;
}
function po(e, r, t) {
  return e.slice(r, t);
}
function Dr(e) {
  return e.length;
}
function d2(e) {
  return e.length;
}
function ra(e, r) {
  return r.push(e), e;
}
var zs = 1, xo = 1, dx = 0, wr = 0, Nt = 0, Ro = "";
function nf(e, r, t, n, o, i, a, s) {
  return { value: e, root: r, parent: t, type: n, props: o, children: i, line: zs, column: xo, length: a, return: "", siblings: s };
}
function h2() {
  return Nt;
}
function p2() {
  return Nt = wr > 0 ? to(Ro, --wr) : 0, xo--, Nt === 10 && (xo = 1, zs--), Nt;
}
function Nr() {
  return Nt = wr < dx ? to(Ro, wr++) : 0, xo++, Nt === 10 && (xo = 1, zs++), Nt;
}
function hn() {
  return to(Ro, wr);
}
function Ra() {
  return wr;
}
function Bs(e, r) {
  return po(Ro, e, r);
}
function ci(e) {
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
function x2(e) {
  return zs = xo = 1, dx = Dr(Ro = e), wr = 0, [];
}
function g2(e) {
  return Ro = "", e;
}
function Ic(e) {
  return fx(Bs(wr - 1, Wl(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function m2(e) {
  for (; (Nt = hn()) && Nt < 33; )
    Nr();
  return ci(e) > 2 || ci(Nt) > 3 ? "" : " ";
}
function v2(e, r) {
  for (; --r && Nr() && !(Nt < 48 || Nt > 102 || Nt > 57 && Nt < 65 || Nt > 70 && Nt < 97); )
    ;
  return Bs(e, Ra() + (r < 6 && hn() == 32 && Nr() == 32));
}
function Wl(e) {
  for (; Nr(); )
    switch (Nt) {
      // ] ) " '
      case e:
        return wr;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Wl(Nt);
        break;
      // (
      case 40:
        e === 41 && Wl(e);
        break;
      // \
      case 92:
        Nr();
        break;
    }
  return wr;
}
function b2(e, r) {
  for (; Nr() && e + Nt !== 57; )
    if (e + Nt === 84 && hn() === 47)
      break;
  return "/*" + Bs(r, wr - 1) + "*" + rf(e === 47 ? e : Nr());
}
function y2(e) {
  for (; !ci(hn()); )
    Nr();
  return Bs(e, wr);
}
function w2(e) {
  return g2($a("", null, null, null, [""], e = x2(e), 0, [0], e));
}
function $a(e, r, t, n, o, i, a, s, c) {
  for (var l = 0, u = 0, f = a, h = 0, m = 0, d = 0, g = 1, p = 1, y = 1, b = 0, S = "", C = o, v = i, _ = n, w = S; p; )
    switch (d = b, b = Nr()) {
      // (
      case 40:
        if (d != 108 && to(w, f - 1) == 58) {
          f2(w += Oa(Ic(b), "&", "&\f"), "&\f", ux(l ? s[l - 1] : 0)) != -1 && (y = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        w += Ic(b);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        w += m2(d);
        break;
      // \
      case 92:
        w += v2(Ra() - 1, 7);
        continue;
      // /
      case 47:
        switch (hn()) {
          case 42:
          case 47:
            ra(S2(b2(Nr(), Ra()), r, t, c), c), (ci(d || 1) == 5 || ci(hn() || 1) == 5) && Dr(w) && po(w, -1, void 0) !== " " && (w += " ");
            break;
          default:
            w += "/";
        }
        break;
      // {
      case 123 * g:
        s[l++] = Dr(w) * y;
      // } ; \0
      case 125 * g:
      case 59:
      case 0:
        switch (b) {
          // \0 }
          case 0:
          case 125:
            p = 0;
          // ;
          case 59 + u:
            y == -1 && (w = Oa(w, /\f/g, "")), m > 0 && (Dr(w) - f || g === 0 && d === 47) && ra(m > 32 ? $d(w + ";", n, t, f - 1, c) : $d(Oa(w, " ", "") + ";", n, t, f - 2, c), c);
            break;
          // @ ;
          case 59:
            w += ";";
          // { rule/at-rule
          default:
            if (ra(_ = Rd(w, r, t, l, u, o, s, S, C = [], v = [], f, i), i), b === 123)
              if (u === 0)
                $a(w, r, _, _, C, i, f, s, v);
              else {
                switch (h) {
                  // c(ontainer)
                  case 99:
                    if (to(w, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (to(w, 2) === 97) break;
                  default:
                    u = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                u ? $a(e, _, _, n && ra(Rd(e, _, _, 0, 0, o, s, S, o, C = [], f, v), v), o, v, f, s, n ? C : v) : $a(w, _, _, _, [""], v, 0, s, v);
              }
        }
        l = u = m = 0, g = y = 1, S = w = "", f = a;
        break;
      // :
      case 58:
        f = 1 + Dr(w), m = d;
      default:
        if (g < 1) {
          if (b == 123)
            --g;
          else if (b == 125 && g++ == 0 && p2() == 125)
            continue;
        }
        switch (w += rf(b), b * g) {
          // &
          case 38:
            y = u > 0 ? 1 : (w += "\f", -1);
            break;
          // ,
          case 44:
            s[l++] = (Dr(w) - 1) * y, y = 1;
            break;
          // @
          case 64:
            hn() === 45 && (w += Ic(Nr())), h = hn(), u = f = Dr(S = w += y2(Ra())), b++;
            break;
          // -
          case 45:
            d === 45 && Dr(w) == 2 && (g = 0);
        }
    }
  return i;
}
function Rd(e, r, t, n, o, i, a, s, c, l, u, f) {
  for (var h = o - 1, m = o === 0 ? i : [""], d = d2(m), g = 0, p = 0, y = 0; g < n; ++g)
    for (var b = 0, S = po(e, h + 1, h = ux(p = a[g])), C = e; b < d; ++b)
      (C = fx(p > 0 ? m[b] + " " + S : Oa(S, /&\f/g, m[b]))) && (c[y++] = C);
  return nf(e, r, t, o === 0 ? cx : s, c, l, u, f);
}
function S2(e, r, t, n) {
  return nf(e, r, t, sx, rf(h2()), po(e, 2, -2), 0, n);
}
function $d(e, r, t, n, o) {
  return nf(e, r, t, lx, po(e, 0, n), po(e, n + 1, -1), n, o);
}
function ql(e, r) {
  for (var t = "", n = 0; n < e.length; n++)
    t += r(e[n], n, e, r) || "";
  return t;
}
function _2(e, r, t, n) {
  switch (e.type) {
    case u2:
      if (e.children.length) break;
    case s2:
    case c2:
    case lx:
      return e.return = e.return || e.value;
    case sx:
      return "";
    case l2:
      return e.return = e.value + "{" + ql(e.children, n) + "}";
    case cx:
      if (!Dr(e.value = e.props.join(","))) return "";
  }
  return Dr(t = ql(e.children, n)) ? e.return = e.value + "{" + t + "}" : "";
}
function hx(e, r) {
  var t = r.path, n = r.parentSelectors;
  _t(!1, "[Ant Design CSS-in-JS] ".concat(t ? "Error in ".concat(t, ": ") : "").concat(e).concat(n.length ? " Selector: ".concat(n.join(" | ")) : ""));
}
var C2 = function(r, t, n) {
  if (r === "content") {
    var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, i = ["normal", "none", "initial", "inherit", "unset"];
    (typeof t != "string" || i.indexOf(t) === -1 && !o.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")) && hx("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(t, "\"'`."), n);
  }
}, E2 = function(r, t, n) {
  r === "animation" && n.hashId && t !== "none" && hx("You seem to be using hashed animation '".concat(t, "', in which case 'animationName' with Keyframe as value is recommended."), n);
}, Td = "data-ant-cssinjs-cache-path", px = "_FILE_STYLE__", Tn, xx = !0;
function O2() {
  if (!Tn && (Tn = {}, Zt())) {
    var e = document.createElement("div");
    e.className = Td, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var r = getComputedStyle(e).content || "";
    r = r.replace(/^"/, "").replace(/"$/, ""), r.split(";").forEach(function(o) {
      var i = o.split(":"), a = ne(i, 2), s = a[0], c = a[1];
      Tn[s] = c;
    });
    var t = document.querySelector("style[".concat(Td, "]"));
    if (t) {
      var n;
      xx = !1, (n = t.parentNode) === null || n === void 0 || n.removeChild(t);
    }
    document.body.removeChild(e);
  }
}
function R2(e) {
  return O2(), !!Tn[e];
}
function $2(e) {
  var r = Tn[e], t = null;
  if (r && Zt())
    if (xx)
      t = px;
    else {
      var n = document.querySelector("style[".concat(Pr, '="').concat(Tn[e], '"]'));
      n ? t = n.innerHTML : delete Tn[e];
    }
  return [t, r];
}
var gx = "_skip_check_", mx = "_multi_value_";
function Ta(e) {
  var r = ql(w2(e), _2);
  return r.replace(/\{%%%\:[^;];}/g, ";");
}
function T2(e) {
  return Ne(e) === "object" && e && (gx in e || mx in e);
}
function Pd(e, r, t) {
  if (!r)
    return e;
  var n = ".".concat(r), o = t === "low" ? ":where(".concat(n, ")") : n, i = e.split(",").map(function(a) {
    var s, c = a.trim().split(/\s+/), l = c[0] || "", u = ((s = l.match(/^\w+/)) === null || s === void 0 ? void 0 : s[0]) || "";
    return l = "".concat(u).concat(o).concat(l.slice(u.length)), [l].concat(Re(c.slice(1))).join(" ");
  });
  return i.join(",");
}
var P2 = function e(r) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = n.root, i = n.injectHash, a = n.parentSelectors, s = t.hashId, c = t.layer, l = t.path, u = t.hashPriority, f = t.transformers, h = f === void 0 ? [] : f, m = t.linters, d = m === void 0 ? [] : m, g = "", p = {};
  function y(C) {
    var v = C.getName(s);
    if (!p[v]) {
      var _ = e(C.style, t, {
        root: !1,
        parentSelectors: a
      }), w = ne(_, 1), A = w[0];
      p[v] = "@keyframes ".concat(C.getName(s)).concat(A);
    }
  }
  function b(C) {
    var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return C.forEach(function(_) {
      Array.isArray(_) ? b(_, v) : _ && v.push(_);
    }), v;
  }
  var S = b(Array.isArray(r) ? r : [r]);
  return S.forEach(function(C) {
    var v = typeof C == "string" && !o ? {} : C;
    if (typeof v == "string")
      g += "".concat(v, `
`);
    else if (v._keyframe)
      y(v);
    else {
      var _ = h.reduce(function(w, A) {
        var M;
        return (A == null || (M = A.visit) === null || M === void 0 ? void 0 : M.call(A, w)) || w;
      }, v);
      Object.keys(_).forEach(function(w) {
        var A = _[w];
        if (Ne(A) === "object" && A && (w !== "animationName" || !A._keyframe) && !T2(A)) {
          var M = !1, k = w.trim(), V = !1;
          (o || i) && s ? k.startsWith("@") ? M = !0 : k === "&" ? k = Pd("", s, u) : k = Pd(w, s, u) : o && !s && (k === "&" || k === "") && (k = "", V = !0);
          var U = e(A, t, {
            root: V,
            injectHash: M,
            parentSelectors: [].concat(Re(a), [k])
          }), L = ne(U, 2), z = L[0], H = L[1];
          p = q(q({}, p), H), g += "".concat(k).concat(z);
        } else {
          let N = function(B, W) {
            process.env.NODE_ENV !== "production" && (Ne(A) !== "object" || !(A != null && A[gx])) && [C2, E2].concat(Re(d)).forEach(function(Z) {
              return Z(B, W, {
                path: l,
                hashId: s,
                parentSelectors: a
              });
            });
            var Y = B.replace(/[A-Z]/g, function(Z) {
              return "-".concat(Z.toLowerCase());
            }), X = W;
            !a2[B] && typeof X == "number" && X !== 0 && (X = "".concat(X, "px")), B === "animationName" && W !== null && W !== void 0 && W._keyframe && (y(W), X = W.getName(s)), g += "".concat(Y, ":").concat(X, ";");
          };
          var P, I = (P = A == null ? void 0 : A.value) !== null && P !== void 0 ? P : A;
          Ne(A) === "object" && A !== null && A !== void 0 && A[mx] && Array.isArray(I) ? I.forEach(function(B) {
            N(w, B);
          }) : N(w, I);
        }
      });
    }
  }), o ? c && (g && (g = "@layer ".concat(c.name, " {").concat(g, "}")), c.dependencies && (p["@layer ".concat(c.name)] = c.dependencies.map(function(C) {
    return "@layer ".concat(C, ", ").concat(c.name, ";");
  }).join(`
`))) : g = "{".concat(g, "}"), [g, p];
};
function vx(e, r) {
  return ai("".concat(e.join("%")).concat(r));
}
function N2() {
  return null;
}
var bx = "style";
function Ul(e, r) {
  var t = e.token, n = e.path, o = e.hashId, i = e.layer, a = e.nonce, s = e.clientOnly, c = e.order, l = c === void 0 ? 0 : c, u = x.useContext(bi), f = u.autoClear, h = u.mock, m = u.defaultCache, d = u.hashPriority, g = u.container, p = u.ssrInline, y = u.transformers, b = u.linters, S = u.cache, C = u.layer, v = t._tokenKey, _ = [v];
  C && _.push("layer"), _.push.apply(_, Re(n));
  var w = Vl;
  process.env.NODE_ENV !== "production" && h !== void 0 && (w = h === "client");
  var A = tf(
    bx,
    _,
    // Create cache if needed
    function() {
      var L = _.join("|");
      if (R2(L)) {
        var z = $2(L), H = ne(z, 2), P = H[0], I = H[1];
        if (P)
          return [P, v, I, {}, s, l];
      }
      var N = r(), B = P2(N, {
        hashId: o,
        hashPriority: d,
        layer: C ? i : void 0,
        path: n.join("-"),
        transformers: y,
        linters: b
      }), W = ne(B, 2), Y = W[0], X = W[1], Z = Ta(Y), G = vx(_, Z);
      return [Z, v, G, X, s, l];
    },
    // Remove cache if no need
    function(L, z) {
      var H = ne(L, 3), P = H[2];
      (z || f) && Vl && si(P, {
        mark: Pr
      });
    },
    // Effect: Inject style here
    function(L) {
      var z = ne(L, 4), H = z[0];
      z[1];
      var P = z[2], I = z[3];
      if (w && H !== px) {
        var N = {
          mark: Pr,
          prepend: C ? !1 : "queue",
          attachTo: g,
          priority: l
        }, B = typeof a == "function" ? a() : a;
        B && (N.csp = {
          nonce: B
        });
        var W = [], Y = [];
        Object.keys(I).forEach(function(Z) {
          Z.startsWith("@layer") ? W.push(Z) : Y.push(Z);
        }), W.forEach(function(Z) {
          Jr(Ta(I[Z]), "_layer-".concat(Z), q(q({}, N), {}, {
            prepend: !0
          }));
        });
        var X = Jr(H, P, N);
        X[dn] = S.instanceId, X.setAttribute(ho, v), process.env.NODE_ENV !== "production" && X.setAttribute(Iy, _.join("|")), Y.forEach(function(Z) {
          Jr(Ta(I[Z]), "_effect-".concat(Z), N);
        });
      }
    }
  ), M = ne(A, 3), k = M[0], V = M[1], U = M[2];
  return function(L) {
    var z;
    if (!p || w || !m)
      z = /* @__PURE__ */ x.createElement(N2, null);
    else {
      var H;
      z = /* @__PURE__ */ x.createElement("style", bt({}, (H = {}, j(H, ho, V), j(H, Pr, U), H), {
        dangerouslySetInnerHTML: {
          __html: k
        }
      }));
    }
    return /* @__PURE__ */ x.createElement(x.Fragment, null, z, L);
  };
}
var A2 = function(r, t, n) {
  var o = ne(r, 6), i = o[0], a = o[1], s = o[2], c = o[3], l = o[4], u = o[5], f = n || {}, h = f.plain;
  if (l)
    return null;
  var m = i, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  };
  return m = Wa(i, a, s, d, h), c && Object.keys(c).forEach(function(g) {
    if (!t[g]) {
      t[g] = !0;
      var p = Ta(c[g]), y = Wa(p, a, "_effect-".concat(g), d, h);
      g.startsWith("@layer") ? m = y + m : m += y;
    }
  }), [u, s, m];
}, yx = "cssVar", I2 = function(r, t) {
  var n = r.key, o = r.prefix, i = r.unitless, a = r.ignore, s = r.token, c = r.scope, l = c === void 0 ? "" : c, u = ir(bi), f = u.cache.instanceId, h = u.container, m = s._tokenKey, d = [].concat(Re(r.path), [n, l, m]), g = tf(yx, d, function() {
    var p = t(), y = ix(p, n, {
      prefix: o,
      unitless: i,
      ignore: a,
      scope: l
    }), b = ne(y, 2), S = b[0], C = b[1], v = vx(d, C);
    return [S, C, v, n];
  }, function(p) {
    var y = ne(p, 3), b = y[2];
    Vl && si(b, {
      mark: Pr
    });
  }, function(p) {
    var y = ne(p, 3), b = y[1], S = y[2];
    if (b) {
      var C = Jr(b, S, {
        mark: Pr,
        prepend: "queue",
        attachTo: h,
        priority: -999
      });
      C[dn] = f, C.setAttribute(ho, n);
    }
  });
  return g;
}, M2 = function(r, t, n) {
  var o = ne(r, 4), i = o[1], a = o[2], s = o[3], c = n || {}, l = c.plain;
  if (!i)
    return null;
  var u = -999, f = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  }, h = Wa(i, s, a, f, l);
  return [u, a, h];
}, zo;
zo = {}, j(zo, bx, A2), j(zo, ax, i2), j(zo, yx, M2);
var ar = /* @__PURE__ */ function() {
  function e(r, t) {
    Ht(this, e), j(this, "name", void 0), j(this, "style", void 0), j(this, "_keyframe", !0), this.name = r, this.style = t;
  }
  return Wt(e, [{
    key: "getName",
    value: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return t ? "".concat(t, "-").concat(this.name) : this.name;
    }
  }]), e;
}();
function Un(e) {
  return e.notSplit = !0, e;
}
Un(["borderTop", "borderBottom"]), Un(["borderTop"]), Un(["borderBottom"]), Un(["borderLeft", "borderRight"]), Un(["borderLeft"]), Un(["borderRight"]);
var of = /* @__PURE__ */ _s({});
function F2(e) {
  return Zp(e) || Xp(e) || Qu(e) || ex();
}
function Lr(e, r) {
  for (var t = e, n = 0; n < r.length; n += 1) {
    if (t == null)
      return;
    t = t[r[n]];
  }
  return t;
}
function wx(e, r, t, n) {
  if (!r.length)
    return t;
  var o = F2(r), i = o[0], a = o.slice(1), s;
  return !e && typeof i == "number" ? s = [] : Array.isArray(e) ? s = Re(e) : s = q({}, e), n && t === void 0 && a.length === 1 ? delete s[i][a[0]] : s[i] = wx(s[i], a, t, n), s;
}
function Or(e, r, t) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return r.length && n && t === void 0 && !Lr(e, r.slice(0, -1)) ? e : wx(e, r, t, n);
}
function j2(e) {
  return Ne(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function Nd(e) {
  return Array.isArray(e) ? [] : {};
}
var D2 = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function Qn() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  var n = Nd(r[0]);
  return r.forEach(function(o) {
    function i(a, s) {
      var c = new Set(s), l = Lr(o, a), u = Array.isArray(l);
      if (u || j2(l)) {
        if (!c.has(l)) {
          c.add(l);
          var f = Lr(n, a);
          u ? n = Or(n, a, []) : (!f || Ne(f) !== "object") && (n = Or(n, a, Nd(l))), D2(l).forEach(function(h) {
            i([].concat(Re(a), [h]), c);
          });
        }
      } else
        n = Or(n, a, l);
    }
    i([]);
  }), n;
}
function Sx() {
}
let Gr = null;
function k2() {
  Gr = null, Dp();
}
let af = Sx;
process.env.NODE_ENV !== "production" && (af = (e, r, t) => {
  _t(e, `[antd: ${r}] ${t}`), process.env.NODE_ENV === "test" && k2();
});
const _x = /* @__PURE__ */ x.createContext({}), Xt = process.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: r
  } = x.useContext(_x), t = (n, o, i) => {
    if (!n)
      if (r === !1 && o === "deprecated") {
        const a = Gr;
        Gr || (Gr = {}), Gr[e] = Gr[e] || [], Gr[e].includes(i || "") || Gr[e].push(i || ""), a || console.warn("[antd] There exists deprecated usage in your code:", Gr);
      } else
        process.env.NODE_ENV !== "production" && af(n, e, i);
  };
  return t.deprecated = (n, o, i, a) => {
    t(n, "deprecated", `\`${o}\` is deprecated. Please use \`${i}\` instead.${a ? ` ${a}` : ""}`);
  }, t;
} : () => {
  const e = () => {
  };
  return e.deprecated = Sx, e;
}, yi = af, L2 = /* @__PURE__ */ _s(void 0);
var z2 = {
  // Options
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "Page",
  // Pagination
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages",
  page_size: "Page Size"
}, B2 = {
  yearFormat: "YYYY",
  dayFormat: "D",
  cellMeridiemFormat: "A",
  monthBeforeYear: !0
}, V2 = q(q({}, B2), {}, {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "OK",
  clear: "Clear",
  week: "Week",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  dateFormat: "M/D/YYYY",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
});
const Cx = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, Ad = {
  lang: Object.assign({
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"]
  }, V2),
  timePickerLocale: Object.assign({}, Cx)
}, sr = "${label} is not a valid ${type}", go = {
  locale: "en",
  Pagination: z2,
  DatePicker: Ad,
  TimePicker: Cx,
  Calendar: Ad,
  global: {
    placeholder: "Please select"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    filterCheckAll: "Select all items",
    filterSearchPlaceholder: "Search in filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectNone: "Clear all data",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Tour: {
    Next: "Next",
    Previous: "Previous",
    Finish: "Finish"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    deselectAll: "Deselect all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: {
    description: "No data"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand",
    collapse: "Collapse"
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
        string: sr,
        method: sr,
        array: sr,
        object: sr,
        number: sr,
        date: sr,
        boolean: sr,
        integer: sr,
        float: sr,
        regexp: sr,
        email: sr,
        url: sr,
        hex: sr
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
  },
  Image: {
    preview: "Preview"
  },
  QRCode: {
    expired: "QR code expired",
    refresh: "Refresh",
    scanned: "Scanned"
  },
  ColorPicker: {
    presetEmpty: "Empty",
    transparent: "Transparent",
    singleColor: "Single",
    gradientColor: "Gradient"
  }
};
Object.assign({}, go.Modal);
let Pa = [];
const Id = () => Pa.reduce((e, r) => Object.assign(Object.assign({}, e), r), go.Modal);
function H2(e) {
  if (e) {
    const r = Object.assign({}, e);
    return Pa.push(r), Id(), () => {
      Pa = Pa.filter((t) => t !== r), Id();
    };
  }
  Object.assign({}, go.Modal);
}
const sf = /* @__PURE__ */ _s(void 0), W2 = (e, r) => {
  const t = x.useContext(sf), n = x.useMemo(() => {
    var i;
    const a = go[e], s = (i = t == null ? void 0 : t[e]) !== null && i !== void 0 ? i : {};
    return Object.assign(Object.assign({}, typeof a == "function" ? a() : a), s || {});
  }, [e, r, t]), o = x.useMemo(() => {
    const i = t == null ? void 0 : t.locale;
    return t != null && t.exist && !i ? go.locale : i;
  }, [t]);
  return [n, o];
}, Ex = "internalMark", Ox = (e) => {
  const {
    locale: r = {},
    children: t,
    _ANT_MARK__: n
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const i = Xt("LocaleProvider");
    process.env.NODE_ENV !== "production" && i(n === Ex, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  x.useEffect(() => H2(r == null ? void 0 : r.Modal), [r]);
  const o = x.useMemo(() => Object.assign(Object.assign({}, r), {
    exist: !0
  }), [r]);
  return /* @__PURE__ */ x.createElement(sf.Provider, {
    value: o
  }, t);
};
process.env.NODE_ENV !== "production" && (Ox.displayName = "LocaleProvider");
const Rx = {
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
}, li = Object.assign(Object.assign({}, Rx), {
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
}), zt = Math.round;
function Mc(e, r) {
  const t = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], n = t.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    n[o] = r(n[o] || 0, t[o] || "", o);
  return t[3] ? n[3] = t[3].includes("%") ? n[3] / 100 : n[3] : n[3] = 1, n;
}
const Md = (e, r, t) => t === 0 ? e : e / 100;
function Bo(e, r) {
  const t = r || 255;
  return e > t ? t : e < 0 ? 0 : e;
}
let Ft = class $x {
  constructor(r) {
    j(this, "isValid", !0), j(this, "r", 0), j(this, "g", 0), j(this, "b", 0), j(this, "a", 1), j(this, "_h", void 0), j(this, "_s", void 0), j(this, "_l", void 0), j(this, "_v", void 0), j(this, "_max", void 0), j(this, "_min", void 0), j(this, "_brightness", void 0);
    function t(n) {
      return n[0] in r && n[1] in r && n[2] in r;
    }
    if (r) if (typeof r == "string") {
      let o = function(i) {
        return n.startsWith(i);
      };
      const n = r.trim();
      /^#?[A-F\d]{3,8}$/i.test(n) ? this.fromHexString(n) : o("rgb") ? this.fromRgbString(n) : o("hsl") ? this.fromHslString(n) : (o("hsv") || o("hsb")) && this.fromHsvString(n);
    } else if (r instanceof $x)
      this.r = r.r, this.g = r.g, this.b = r.b, this.a = r.a, this._h = r._h, this._s = r._s, this._l = r._l, this._v = r._v;
    else if (t("rgb"))
      this.r = Bo(r.r), this.g = Bo(r.g), this.b = Bo(r.b), this.a = typeof r.a == "number" ? Bo(r.a, 1) : 1;
    else if (t("hsl"))
      this.fromHsl(r);
    else if (t("hsv"))
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
    const t = this.toHsv();
    return t.h = r, this._c(t);
  }
  // ======================= Getter =======================
  /**
   * Returns the perceived luminance of a color, from 0-1.
   * @see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
   */
  getLuminance() {
    function r(i) {
      const a = i / 255;
      return a <= 0.03928 ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4);
    }
    const t = r(this.r), n = r(this.g), o = r(this.b);
    return 0.2126 * t + 0.7152 * n + 0.0722 * o;
  }
  getHue() {
    if (typeof this._h > "u") {
      const r = this.getMax() - this.getMin();
      r === 0 ? this._h = 0 : this._h = zt(60 * (this.r === this.getMax() ? (this.g - this.b) / r + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / r + 2 : (this.r - this.g) / r + 4));
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
    const t = this.getHue(), n = this.getSaturation();
    let o = this.getLightness() - r / 100;
    return o < 0 && (o = 0), this._c({
      h: t,
      s: n,
      l: o,
      a: this.a
    });
  }
  lighten(r = 10) {
    const t = this.getHue(), n = this.getSaturation();
    let o = this.getLightness() + r / 100;
    return o > 1 && (o = 1), this._c({
      h: t,
      s: n,
      l: o,
      a: this.a
    });
  }
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  mix(r, t = 50) {
    const n = this._c(r), o = t / 100, i = (s) => (n[s] - this[s]) * o + this[s], a = {
      r: zt(i("r")),
      g: zt(i("g")),
      b: zt(i("b")),
      a: zt(i("a") * 100) / 100
    };
    return this._c(a);
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
    const t = this._c(r), n = this.a + t.a * (1 - this.a), o = (i) => zt((this[i] * this.a + t[i] * t.a * (1 - this.a)) / n);
    return this._c({
      r: o("r"),
      g: o("g"),
      b: o("b"),
      a: n
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
    const t = (this.r || 0).toString(16);
    r += t.length === 2 ? t : "0" + t;
    const n = (this.g || 0).toString(16);
    r += n.length === 2 ? n : "0" + n;
    const o = (this.b || 0).toString(16);
    if (r += o.length === 2 ? o : "0" + o, typeof this.a == "number" && this.a >= 0 && this.a < 1) {
      const i = zt(this.a * 255).toString(16);
      r += i.length === 2 ? i : "0" + i;
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
    const r = this.getHue(), t = zt(this.getSaturation() * 100), n = zt(this.getLightness() * 100);
    return this.a !== 1 ? `hsla(${r},${t}%,${n}%,${this.a})` : `hsl(${r},${t}%,${n}%)`;
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
  _sc(r, t, n) {
    const o = this.clone();
    return o[r] = Bo(t, n), o;
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
    const t = r.replace("#", "");
    function n(o, i) {
      return parseInt(t[o] + t[i || o], 16);
    }
    t.length < 6 ? (this.r = n(0), this.g = n(1), this.b = n(2), this.a = t[3] ? n(3) / 255 : 1) : (this.r = n(0, 1), this.g = n(2, 3), this.b = n(4, 5), this.a = t[6] ? n(6, 7) / 255 : 1);
  }
  fromHsl({
    h: r,
    s: t,
    l: n,
    a: o
  }) {
    if (this._h = r % 360, this._s = t, this._l = n, this.a = typeof o == "number" ? o : 1, t <= 0) {
      const h = zt(n * 255);
      this.r = h, this.g = h, this.b = h;
    }
    let i = 0, a = 0, s = 0;
    const c = r / 60, l = (1 - Math.abs(2 * n - 1)) * t, u = l * (1 - Math.abs(c % 2 - 1));
    c >= 0 && c < 1 ? (i = l, a = u) : c >= 1 && c < 2 ? (i = u, a = l) : c >= 2 && c < 3 ? (a = l, s = u) : c >= 3 && c < 4 ? (a = u, s = l) : c >= 4 && c < 5 ? (i = u, s = l) : c >= 5 && c < 6 && (i = l, s = u);
    const f = n - l / 2;
    this.r = zt((i + f) * 255), this.g = zt((a + f) * 255), this.b = zt((s + f) * 255);
  }
  fromHsv({
    h: r,
    s: t,
    v: n,
    a: o
  }) {
    this._h = r % 360, this._s = t, this._v = n, this.a = typeof o == "number" ? o : 1;
    const i = zt(n * 255);
    if (this.r = i, this.g = i, this.b = i, t <= 0)
      return;
    const a = r / 60, s = Math.floor(a), c = a - s, l = zt(n * (1 - t) * 255), u = zt(n * (1 - t * c) * 255), f = zt(n * (1 - t * (1 - c)) * 255);
    switch (s) {
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
  fromHsvString(r) {
    const t = Mc(r, Md);
    this.fromHsv({
      h: t[0],
      s: t[1],
      v: t[2],
      a: t[3]
    });
  }
  fromHslString(r) {
    const t = Mc(r, Md);
    this.fromHsl({
      h: t[0],
      s: t[1],
      l: t[2],
      a: t[3]
    });
  }
  fromRgbString(r) {
    const t = Mc(r, (n, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? zt(n / 100 * 255) : n
    ));
    this.r = t[0], this.g = t[1], this.b = t[2], this.a = t[3];
  }
};
var na = 2, Fd = 0.16, q2 = 0.05, U2 = 0.05, G2 = 0.15, Tx = 5, Px = 4, K2 = [{
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
function jd(e, r, t) {
  var n;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? n = t ? Math.round(e.h) - na * r : Math.round(e.h) + na * r : n = t ? Math.round(e.h) + na * r : Math.round(e.h) - na * r, n < 0 ? n += 360 : n >= 360 && (n -= 360), n;
}
function Dd(e, r, t) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var n;
  return t ? n = e.s - Fd * r : r === Px ? n = e.s + Fd : n = e.s + q2 * r, n > 1 && (n = 1), t && r === Tx && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Math.round(n * 100) / 100;
}
function kd(e, r, t) {
  var n;
  return t ? n = e.v + U2 * r : n = e.v - G2 * r, n = Math.max(0, Math.min(1, n)), Math.round(n * 100) / 100;
}
function ui(e) {
  for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = [], n = new Ft(e), o = n.toHsv(), i = Tx; i > 0; i -= 1) {
    var a = new Ft({
      h: jd(o, i, !0),
      s: Dd(o, i, !0),
      v: kd(o, i, !0)
    });
    t.push(a);
  }
  t.push(n);
  for (var s = 1; s <= Px; s += 1) {
    var c = new Ft({
      h: jd(o, s),
      s: Dd(o, s),
      v: kd(o, s)
    });
    t.push(c);
  }
  return r.theme === "dark" ? K2.map(function(l) {
    var u = l.index, f = l.amount;
    return new Ft(r.backgroundColor || "#141414").mix(t[u], f).toHexString();
  }) : t.map(function(l) {
    return l.toHexString();
  });
}
var Fc = {
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
}, Gl = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
Gl.primary = Gl[5];
var Kl = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
Kl.primary = Kl[5];
var Xl = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
Xl.primary = Xl[5];
var qa = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
qa.primary = qa[5];
var Yl = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
Yl.primary = Yl[5];
var Jl = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
Jl.primary = Jl[5];
var Ql = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
Ql.primary = Ql[5];
var Zl = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
Zl.primary = Zl[5];
var Ua = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
Ua.primary = Ua[5];
var eu = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
eu.primary = eu[5];
var tu = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
tu.primary = tu[5];
var ru = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
ru.primary = ru[5];
var nu = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
nu.primary = nu[5];
var jc = {
  red: Gl,
  volcano: Kl,
  orange: Xl,
  gold: qa,
  yellow: Yl,
  lime: Jl,
  green: Ql,
  cyan: Zl,
  blue: Ua,
  geekblue: eu,
  purple: tu,
  magenta: ru,
  grey: nu
};
function X2(e, r) {
  let {
    generateColorPalettes: t,
    generateNeutralColorPalettes: n
  } = r;
  const {
    colorSuccess: o,
    colorWarning: i,
    colorError: a,
    colorInfo: s,
    colorPrimary: c,
    colorBgBase: l,
    colorTextBase: u
  } = e, f = t(c), h = t(o), m = t(i), d = t(a), g = t(s), p = n(l, u), y = e.colorLink || e.colorInfo, b = t(y), S = new Ft(d[1]).mix(new Ft(d[3]), 50).toHexString();
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
    colorErrorBgFilledHover: S,
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
    colorLinkHover: b[4],
    colorLink: b[6],
    colorLinkActive: b[7],
    colorBgMask: new Ft("#000").setA(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const Y2 = (e) => {
  let r = e, t = e, n = e, o = e;
  return e < 6 && e >= 5 ? r = e + 1 : e < 16 && e >= 6 ? r = e + 2 : e >= 16 && (r = 16), e < 7 && e >= 5 ? t = 4 : e < 8 && e >= 7 ? t = 5 : e < 14 && e >= 8 ? t = 6 : e < 16 && e >= 14 ? t = 7 : e >= 16 && (t = 8), e < 6 && e >= 2 ? n = 1 : e >= 6 && (n = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
    borderRadius: e,
    borderRadiusXS: n,
    borderRadiusSM: t,
    borderRadiusLG: r,
    borderRadiusOuter: o
  };
};
function J2(e) {
  const {
    motionUnit: r,
    motionBase: t,
    borderRadius: n,
    lineWidth: o
  } = e;
  return Object.assign({
    // motion
    motionDurationFast: `${(t + r).toFixed(1)}s`,
    motionDurationMid: `${(t + r * 2).toFixed(1)}s`,
    motionDurationSlow: `${(t + r * 3).toFixed(1)}s`,
    // line
    lineWidthBold: o + 1
  }, Y2(n));
}
const Q2 = (e) => {
  const {
    controlHeight: r
  } = e;
  return {
    controlHeightSM: r * 0.75,
    controlHeightXS: r * 0.5,
    controlHeightLG: r * 1.25
  };
};
function Na(e) {
  return (e + 8) / e;
}
function Z2(e) {
  const r = Array.from({
    length: 10
  }).map((t, n) => {
    const o = n - 1, i = e * Math.pow(Math.E, o / 5), a = n > 1 ? Math.floor(i) : Math.ceil(i);
    return Math.floor(a / 2) * 2;
  });
  return r[1] = e, r.map((t) => ({
    size: t,
    lineHeight: Na(t)
  }));
}
const ew = (e) => {
  const r = Z2(e), t = r.map((u) => u.size), n = r.map((u) => u.lineHeight), o = t[1], i = t[0], a = t[2], s = n[1], c = n[0], l = n[2];
  return {
    fontSizeSM: i,
    fontSize: o,
    fontSizeLG: a,
    fontSizeXL: t[3],
    fontSizeHeading1: t[6],
    fontSizeHeading2: t[5],
    fontSizeHeading3: t[4],
    fontSizeHeading4: t[3],
    fontSizeHeading5: t[2],
    lineHeight: s,
    lineHeightLG: l,
    lineHeightSM: c,
    fontHeight: Math.round(s * o),
    fontHeightLG: Math.round(l * a),
    fontHeightSM: Math.round(c * i),
    lineHeightHeading1: n[6],
    lineHeightHeading2: n[5],
    lineHeightHeading3: n[4],
    lineHeightHeading4: n[3],
    lineHeightHeading5: n[2]
  };
};
function tw(e) {
  const {
    sizeUnit: r,
    sizeStep: t
  } = e;
  return {
    sizeXXL: r * (t + 8),
    // 48
    sizeXL: r * (t + 4),
    // 32
    sizeLG: r * (t + 2),
    // 24
    sizeMD: r * (t + 1),
    // 20
    sizeMS: r * t,
    // 16
    size: r * t,
    // 16
    sizeSM: r * (t - 1),
    // 12
    sizeXS: r * (t - 2),
    // 8
    sizeXXS: r * (t - 3)
    // 4
  };
}
const pr = (e, r) => new Ft(e).setA(r).toRgbString(), Vo = (e, r) => new Ft(e).darken(r).toHexString(), rw = (e) => {
  const r = ui(e);
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
}, nw = (e, r) => {
  const t = e || "#fff", n = r || "#000";
  return {
    colorBgBase: t,
    colorTextBase: n,
    colorText: pr(n, 0.88),
    colorTextSecondary: pr(n, 0.65),
    colorTextTertiary: pr(n, 0.45),
    colorTextQuaternary: pr(n, 0.25),
    colorFill: pr(n, 0.15),
    colorFillSecondary: pr(n, 0.06),
    colorFillTertiary: pr(n, 0.04),
    colorFillQuaternary: pr(n, 0.02),
    colorBgSolid: pr(n, 1),
    colorBgSolidHover: pr(n, 0.75),
    colorBgSolidActive: pr(n, 0.95),
    colorBgLayout: Vo(t, 4),
    colorBgContainer: Vo(t, 0),
    colorBgElevated: Vo(t, 0),
    colorBgSpotlight: pr(n, 0.85),
    colorBgBlur: "transparent",
    colorBorder: Vo(t, 15),
    colorBorderSecondary: Vo(t, 6)
  };
};
function ow(e) {
  Fc.pink = Fc.magenta, jc.pink = jc.magenta;
  const r = Object.keys(Rx).map((t) => {
    const n = e[t] === Fc[t] ? jc[t] : ui(e[t]);
    return Array.from({
      length: 10
    }, () => 1).reduce((o, i, a) => (o[`${t}-${a + 1}`] = n[a], o[`${t}${a + 1}`] = n[a], o), {});
  }).reduce((t, n) => (t = Object.assign(Object.assign({}, t), n), t), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), r), X2(e, {
    generateColorPalettes: rw,
    generateNeutralColorPalettes: nw
  })), ew(e.fontSize)), tw(e)), Q2(e)), J2(e));
}
const Nx = Bl(ow), ou = {
  token: li,
  override: {
    override: li
  },
  hashed: !0
}, Ax = /* @__PURE__ */ Q.createContext(ou), Ga = "ant", cf = "anticon", iw = ["outlined", "borderless", "filled", "underlined"], aw = (e, r) => r || (e ? `${Ga}-${e}` : Ga), er = /* @__PURE__ */ x.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: aw,
  iconPrefixCls: cf
}), {
  Consumer: t4
} = er, Ld = {};
function kn(e) {
  const r = x.useContext(er), {
    getPrefixCls: t,
    direction: n,
    getPopupContainer: o
  } = r, i = r[e];
  return Object.assign(Object.assign({
    classNames: Ld,
    styles: Ld
  }, i), {
    getPrefixCls: t,
    direction: n,
    getPopupContainer: o
  });
}
const sw = `-ant-${Date.now()}-${Math.random()}`;
function cw(e, r) {
  const t = {}, n = (a, s) => {
    let c = a.clone();
    return c = (s == null ? void 0 : s(c)) || c, c.toRgbString();
  }, o = (a, s) => {
    const c = new Ft(a), l = ui(c.toRgbString());
    t[`${s}-color`] = n(c), t[`${s}-color-disabled`] = l[1], t[`${s}-color-hover`] = l[4], t[`${s}-color-active`] = l[6], t[`${s}-color-outline`] = c.clone().setA(0.2).toRgbString(), t[`${s}-color-deprecated-bg`] = l[0], t[`${s}-color-deprecated-border`] = l[2];
  };
  if (r.primaryColor) {
    o(r.primaryColor, "primary");
    const a = new Ft(r.primaryColor), s = ui(a.toRgbString());
    s.forEach((l, u) => {
      t[`primary-${u + 1}`] = l;
    }), t["primary-color-deprecated-l-35"] = n(a, (l) => l.lighten(35)), t["primary-color-deprecated-l-20"] = n(a, (l) => l.lighten(20)), t["primary-color-deprecated-t-20"] = n(a, (l) => l.tint(20)), t["primary-color-deprecated-t-50"] = n(a, (l) => l.tint(50)), t["primary-color-deprecated-f-12"] = n(a, (l) => l.setA(l.a * 0.12));
    const c = new Ft(s[0]);
    t["primary-color-active-deprecated-f-30"] = n(c, (l) => l.setA(l.a * 0.3)), t["primary-color-active-deprecated-d-02"] = n(c, (l) => l.darken(2));
  }
  return r.successColor && o(r.successColor, "success"), r.warningColor && o(r.warningColor, "warning"), r.errorColor && o(r.errorColor, "error"), r.infoColor && o(r.infoColor, "info"), `
  :root {
    ${Object.keys(t).map((a) => `--${e}-${a}: ${t[a]};`).join(`
`)}
  }
  `.trim();
}
function lw(e, r) {
  const t = cw(e, r);
  Zt() ? Jr(t, `${sw}-dynamic-theme`) : process.env.NODE_ENV !== "production" && yi(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const mo = /* @__PURE__ */ x.createContext(!1), uw = (e) => {
  let {
    children: r,
    disabled: t
  } = e;
  const n = x.useContext(mo);
  return /* @__PURE__ */ x.createElement(mo.Provider, {
    value: t ?? n
  }, r);
}, vo = /* @__PURE__ */ x.createContext(void 0), fw = (e) => {
  let {
    children: r,
    size: t
  } = e;
  const n = x.useContext(vo);
  return /* @__PURE__ */ x.createElement(vo.Provider, {
    value: t || n
  }, r);
};
function dw() {
  const e = ir(mo), r = ir(vo);
  return {
    componentDisabled: e,
    componentSize: r
  };
}
var Ix = /* @__PURE__ */ Wt(function e() {
  Ht(this, e);
}), Mx = "CALC_UNIT", hw = new RegExp(Mx, "g");
function Dc(e) {
  return typeof e == "number" ? "".concat(e).concat(Mx) : e;
}
var pw = /* @__PURE__ */ function(e) {
  mn(t, e);
  var r = vn(t);
  function t(n, o) {
    var i;
    Ht(this, t), i = r.call(this), j(Ye(i), "result", ""), j(Ye(i), "unitlessCssVar", void 0), j(Ye(i), "lowPriority", void 0);
    var a = Ne(n);
    return i.unitlessCssVar = o, n instanceof t ? i.result = "(".concat(n.result, ")") : a === "number" ? i.result = Dc(n) : a === "string" && (i.result = n), i;
  }
  return Wt(t, [{
    key: "add",
    value: function(o) {
      return o instanceof t ? this.result = "".concat(this.result, " + ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " + ").concat(Dc(o))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(o) {
      return o instanceof t ? this.result = "".concat(this.result, " - ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " - ").concat(Dc(o))), this.lowPriority = !0, this;
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
      var i = this, a = o || {}, s = a.unit, c = !0;
      return typeof s == "boolean" ? c = s : Array.from(this.unitlessCssVar).some(function(l) {
        return i.result.includes(l);
      }) && (c = !1), this.result = this.result.replace(hw, c ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), t;
}(Ix), xw = /* @__PURE__ */ function(e) {
  mn(t, e);
  var r = vn(t);
  function t(n) {
    var o;
    return Ht(this, t), o = r.call(this), j(Ye(o), "result", 0), n instanceof t ? o.result = n.result : typeof n == "number" && (o.result = n), o;
  }
  return Wt(t, [{
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
}(Ix), gw = function(r, t) {
  var n = r === "css" ? pw : xw;
  return function(o) {
    return new n(o, t);
  };
}, zd = function(r, t) {
  return "".concat([t, r.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function Ut(e) {
  var r = x.useRef();
  r.current = e;
  var t = x.useCallback(function() {
    for (var n, o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return (n = r.current) === null || n === void 0 ? void 0 : n.call.apply(n, [r].concat(i));
  }, []);
  return t;
}
function fi(e) {
  var r = x.useRef(!1), t = x.useState(e), n = ne(t, 2), o = n[0], i = n[1];
  x.useEffect(function() {
    return r.current = !1, function() {
      r.current = !0;
    };
  }, []);
  function a(s, c) {
    c && r.current || i(s);
  }
  return [o, a];
}
function kc(e) {
  return e !== void 0;
}
function In(e, r) {
  var t = r || {}, n = t.defaultValue, o = t.value, i = t.onChange, a = t.postState, s = fi(function() {
    return kc(o) ? o : kc(n) ? typeof n == "function" ? n() : n : typeof e == "function" ? e() : e;
  }), c = ne(s, 2), l = c[0], u = c[1], f = o !== void 0 ? o : l, h = a ? a(f) : f, m = Ut(i), d = fi([f]), g = ne(d, 2), p = g[0], y = g[1];
  Ed(function() {
    var S = p[0];
    l !== S && m(l, S);
  }, [p]), Ed(function() {
    kc(o) || u(o);
  }, [o]);
  var b = Ut(function(S, C) {
    u(S, C), y([f], C);
  });
  return [h, b];
}
function Bd(e, r, t, n) {
  var o = q({}, r[e]);
  if (n != null && n.deprecatedTokens) {
    var i = n.deprecatedTokens;
    i.forEach(function(s) {
      var c = ne(s, 2), l = c[0], u = c[1];
      if (process.env.NODE_ENV !== "production" && _t(!(o != null && o[l]), "Component Token `".concat(String(l), "` of ").concat(String(e), " is deprecated. Please use `").concat(String(u), "` instead.")), o != null && o[l] || o != null && o[u]) {
        var f;
        (f = o[u]) !== null && f !== void 0 || (o[u] = o == null ? void 0 : o[l]);
      }
    });
  }
  var a = q(q({}, t), o);
  return Object.keys(a).forEach(function(s) {
    a[s] === r[s] && delete a[s];
  }), a;
}
var Fx = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", iu = !0;
function Yt() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  if (!Fx)
    return Object.assign.apply(Object, [{}].concat(r));
  iu = !1;
  var n = {};
  return r.forEach(function(o) {
    if (Ne(o) === "object") {
      var i = Object.keys(o);
      i.forEach(function(a) {
        Object.defineProperty(n, a, {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return o[a];
          }
        });
      });
    }
  }), iu = !0, n;
}
var Vd = {};
function mw() {
}
var vw = function(r) {
  var t, n = r, o = mw;
  return Fx && typeof Proxy < "u" && (t = /* @__PURE__ */ new Set(), n = new Proxy(r, {
    get: function(a, s) {
      if (iu) {
        var c;
        (c = t) === null || c === void 0 || c.add(s);
      }
      return a[s];
    }
  }), o = function(a, s) {
    var c;
    Vd[a] = {
      global: Array.from(t),
      component: q(q({}, (c = Vd[a]) === null || c === void 0 ? void 0 : c.component), s)
    };
  }), {
    token: n,
    keys: t,
    flush: o
  };
};
function Hd(e, r, t) {
  if (typeof t == "function") {
    var n;
    return t(Yt(r, (n = r[e]) !== null && n !== void 0 ? n : {}));
  }
  return t ?? {};
}
function bw(e) {
  return e === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
        n[o] = arguments[o];
      return "max(".concat(n.map(function(i) {
        return ot(i);
      }).join(","), ")");
    },
    min: function() {
      for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
        n[o] = arguments[o];
      return "min(".concat(n.map(function(i) {
        return ot(i);
      }).join(","), ")");
    }
  };
}
var yw = 1e3 * 60 * 10, ww = /* @__PURE__ */ function() {
  function e() {
    Ht(this, e), j(this, "map", /* @__PURE__ */ new Map()), j(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), j(this, "nextID", 0), j(this, "lastAccessBeat", /* @__PURE__ */ new Map()), j(this, "accessBeat", 0);
  }
  return Wt(e, [{
    key: "set",
    value: function(t, n) {
      this.clear();
      var o = this.getCompositeKey(t);
      this.map.set(o, n), this.lastAccessBeat.set(o, Date.now());
    }
  }, {
    key: "get",
    value: function(t) {
      var n = this.getCompositeKey(t), o = this.map.get(n);
      return this.lastAccessBeat.set(n, Date.now()), this.accessBeat += 1, o;
    }
  }, {
    key: "getCompositeKey",
    value: function(t) {
      var n = this, o = t.map(function(i) {
        return i && Ne(i) === "object" ? "obj_".concat(n.getObjectID(i)) : "".concat(Ne(i), "_").concat(i);
      });
      return o.join("|");
    }
  }, {
    key: "getObjectID",
    value: function(t) {
      if (this.objectIDMap.has(t))
        return this.objectIDMap.get(t);
      var n = this.nextID;
      return this.objectIDMap.set(t, n), this.nextID += 1, n;
    }
  }, {
    key: "clear",
    value: function() {
      var t = this;
      if (this.accessBeat > 1e4) {
        var n = Date.now();
        this.lastAccessBeat.forEach(function(o, i) {
          n - o > yw && (t.map.delete(i), t.lastAccessBeat.delete(i));
        }), this.accessBeat = 0;
      }
    }
  }]), e;
}(), Wd = new ww();
function Sw(e, r) {
  return Q.useMemo(function() {
    var t = Wd.get(r);
    if (t)
      return t;
    var n = e();
    return Wd.set(r, n), n;
  }, r);
}
var _w = function() {
  return {};
};
function Cw(e) {
  var r = e.useCSP, t = r === void 0 ? _w : r, n = e.useToken, o = e.usePrefix, i = e.getResetStyles, a = e.getCommonStyle, s = e.getCompUnitless;
  function c(h, m, d, g) {
    var p = Array.isArray(h) ? h[0] : h;
    function y(A) {
      return "".concat(String(p)).concat(A.slice(0, 1).toUpperCase()).concat(A.slice(1));
    }
    var b = (g == null ? void 0 : g.unitless) || {}, S = typeof s == "function" ? s(h) : {}, C = q(q({}, S), {}, j({}, y("zIndexPopup"), !0));
    Object.keys(b).forEach(function(A) {
      C[y(A)] = b[A];
    });
    var v = q(q({}, g), {}, {
      unitless: C,
      prefixToken: y
    }), _ = u(h, m, d, v), w = l(p, d, v);
    return function(A) {
      var M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : A, k = _(A, M), V = ne(k, 2), U = V[1], L = w(M), z = ne(L, 2), H = z[0], P = z[1];
      return [H, U, P];
    };
  }
  function l(h, m, d) {
    var g = d.unitless, p = d.injectStyle, y = p === void 0 ? !0 : p, b = d.prefixToken, S = d.ignore, C = function(w) {
      var A = w.rootCls, M = w.cssVar, k = M === void 0 ? {} : M, V = n(), U = V.realToken;
      return I2({
        path: [h],
        prefix: k.prefix,
        key: k.key,
        unitless: g,
        ignore: S,
        token: U,
        scope: A
      }, function() {
        var L = Hd(h, U, m), z = Bd(h, U, L, {
          deprecatedTokens: d == null ? void 0 : d.deprecatedTokens
        });
        return Object.keys(L).forEach(function(H) {
          z[b(H)] = z[H], delete z[H];
        }), z;
      }), null;
    }, v = function(w) {
      var A = n(), M = A.cssVar;
      return [function(k) {
        return y && M ? /* @__PURE__ */ Q.createElement(Q.Fragment, null, /* @__PURE__ */ Q.createElement(C, {
          rootCls: w,
          cssVar: M,
          component: h
        }), k) : k;
      }, M == null ? void 0 : M.key];
    };
    return v;
  }
  function u(h, m, d) {
    var g = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, p = Array.isArray(h) ? h : [h, h], y = ne(p, 1), b = y[0], S = p.join("-"), C = e.layer || {
      name: "antd"
    };
    return function(v) {
      var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : v, w = n(), A = w.theme, M = w.realToken, k = w.hashId, V = w.token, U = w.cssVar, L = o(), z = L.rootPrefixCls, H = L.iconPrefixCls, P = t(), I = U ? "css" : "js", N = Sw(function() {
        var G = /* @__PURE__ */ new Set();
        return U && Object.keys(g.unitless || {}).forEach(function(te) {
          G.add(Ea(te, U.prefix)), G.add(Ea(te, zd(b, U.prefix)));
        }), gw(I, G);
      }, [I, b, U == null ? void 0 : U.prefix]), B = bw(I), W = B.max, Y = B.min, X = {
        theme: A,
        token: V,
        hashId: k,
        nonce: function() {
          return P.nonce;
        },
        clientOnly: g.clientOnly,
        layer: C,
        // antd is always at top of styles
        order: g.order || -999
      };
      typeof i == "function" && Ul(q(q({}, X), {}, {
        clientOnly: !1,
        path: ["Shared", z]
      }), function() {
        return i(V, {
          prefix: {
            rootPrefixCls: z,
            iconPrefixCls: H
          },
          csp: P
        });
      });
      var Z = Ul(q(q({}, X), {}, {
        path: [S, v, H]
      }), function() {
        if (g.injectStyle === !1)
          return [];
        var G = vw(V), te = G.token, ie = G.flush, de = Hd(b, M, d), pe = ".".concat(v), xe = Bd(b, M, de, {
          deprecatedTokens: g.deprecatedTokens
        });
        U && de && Ne(de) === "object" && Object.keys(de).forEach(function(_e) {
          de[_e] = "var(".concat(Ea(_e, zd(b, U.prefix)), ")");
        });
        var we = Yt(te, {
          componentCls: pe,
          prefixCls: v,
          iconCls: ".".concat(H),
          antCls: ".".concat(z),
          calc: N,
          // @ts-ignore
          max: W,
          // @ts-ignore
          min: Y
        }, U ? de : xe), ae = m(we, {
          hashId: k,
          prefixCls: v,
          rootPrefixCls: z,
          iconPrefixCls: H
        });
        ie(b, xe);
        var se = typeof a == "function" ? a(we, v, _, g.resetFont) : null;
        return [g.resetStyle === !1 ? null : se, ae];
      });
      return [Z, k];
    };
  }
  function f(h, m, d) {
    var g = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, p = u(h, m, d, q({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, g)), y = function(S) {
      var C = S.prefixCls, v = S.rootCls, _ = v === void 0 ? C : v;
      return p(C, _), null;
    };
    return process.env.NODE_ENV !== "production" && (y.displayName = "SubStyle_".concat(String(Array.isArray(h) ? h.join(".") : h))), y;
  }
  return {
    genStyleHooks: c,
    genSubStyleComponent: f,
    genComponentStyleHook: u
  };
}
const Mn = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"], Ew = "5.24.6";
function Lc(e) {
  return e >= 0 && e <= 255;
}
function Xo(e, r) {
  const {
    r: t,
    g: n,
    b: o,
    a: i
  } = new Ft(e).toRgb();
  if (i < 1)
    return e;
  const {
    r: a,
    g: s,
    b: c
  } = new Ft(r).toRgb();
  for (let l = 0.01; l <= 1; l += 0.01) {
    const u = Math.round((t - a * (1 - l)) / l), f = Math.round((n - s * (1 - l)) / l), h = Math.round((o - c * (1 - l)) / l);
    if (Lc(u) && Lc(f) && Lc(h))
      return new Ft({
        r: u,
        g: f,
        b: h,
        a: Math.round(l * 100) / 100
      }).toRgbString();
  }
  return new Ft({
    r: t,
    g: n,
    b: o,
    a: 1
  }).toRgbString();
}
var Ow = function(e, r) {
  var t = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    r.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (t[n[o]] = e[n[o]]);
  return t;
};
function jx(e) {
  const {
    override: r
  } = e, t = Ow(e, ["override"]), n = Object.assign({}, r);
  Object.keys(li).forEach((h) => {
    delete n[h];
  });
  const o = Object.assign(Object.assign({}, t), n), i = 480, a = 576, s = 768, c = 992, l = 1200, u = 1600;
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
    colorSplit: Xo(o.colorBorderSecondary, o.colorBgContainer),
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
    colorErrorOutline: Xo(o.colorErrorBg, o.colorBgContainer),
    colorWarningOutline: Xo(o.colorWarningBg, o.colorBgContainer),
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
    controlOutline: Xo(o.colorPrimaryBg, o.colorBgContainer),
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
    screenXSMax: a - 1,
    screenSM: a,
    screenSMMin: a,
    screenSMMax: s - 1,
    screenMD: s,
    screenMDMin: s,
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
      0 1px 2px -2px ${new Ft("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new Ft("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new Ft("rgba(0, 0, 0, 0.09)").toRgbString()}
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
  }), n);
}
var qd = function(e, r) {
  var t = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    r.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (t[n[o]] = e[n[o]]);
  return t;
};
const Dx = {
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
}, Rw = {
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
}, $w = {
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
}, kx = (e, r, t) => {
  const n = t.getDerivativeToken(e), {
    override: o
  } = r, i = qd(r, ["override"]);
  let a = Object.assign(Object.assign({}, n), {
    override: o
  });
  return a = jx(a), i && Object.entries(i).forEach((s) => {
    let [c, l] = s;
    const {
      theme: u
    } = l, f = qd(l, ["theme"]);
    let h = f;
    u && (h = kx(Object.assign(Object.assign({}, a), f), {
      override: f
    }, u)), a[c] = h;
  }), a;
};
function bn() {
  const {
    token: e,
    hashed: r,
    theme: t,
    override: n,
    cssVar: o
  } = Q.useContext(Ax), i = `${Ew}-${r || ""}`, a = t || Nx, [s, c, l] = o2(a, [li, e], {
    salt: i,
    override: n,
    getComputedToken: kx,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: jx,
    cssVar: o && {
      prefix: o.prefix,
      key: o.key,
      unitless: Dx,
      ignore: Rw,
      preserve: $w
    }
  });
  return [a, l, r ? c : "", s, o];
}
const Vs = function(e) {
  let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
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
    fontFamily: r ? "inherit" : e.fontFamily
  };
}, Lx = () => ({
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
}), Tw = () => ({
  // https://github.com/ant-design/ant-design/issues/21301#issuecomment-583955229
  "&::before": {
    display: "table",
    content: '""'
  },
  "&::after": {
    // https://github.com/ant-design/ant-design/issues/21864
    display: "table",
    clear: "both",
    content: '""'
  }
}), Pw = (e) => ({
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
}), Nw = (e, r, t, n) => {
  const o = `[class^="${r}"], [class*=" ${r}"]`, i = t ? `.${t}` : o, a = {
    boxSizing: "border-box",
    "&::before, &::after": {
      boxSizing: "border-box"
    }
  };
  let s = {};
  return n !== !1 && (s = {
    fontFamily: e.fontFamily,
    fontSize: e.fontSize
  }), {
    [i]: Object.assign(Object.assign(Object.assign({}, s), a), {
      [o]: a
    })
  };
}, Aw = (e, r) => ({
  outline: `${ot(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
  outlineOffset: r ?? 1,
  transition: "outline-offset 0s, outline 0s"
}), zx = (e, r) => ({
  "&:focus-visible": Object.assign({}, Aw(e, r))
}), Bx = (e) => ({
  [`.${e}`]: Object.assign(Object.assign({}, Lx()), {
    [`.${e} .${e}-icon`]: {
      display: "block"
    }
  })
}), Vx = (e) => Object.assign(Object.assign({
  // FIXME: This use link but is a operation unit. Seems should be a colorPrimary.
  // And Typography use this to generate link style which should not do this.
  color: e.colorLink,
  textDecoration: e.linkDecoration,
  outline: "none",
  cursor: "pointer",
  transition: `all ${e.motionDurationSlow}`,
  border: 0,
  padding: 0,
  background: "none",
  userSelect: "none"
}, zx(e)), {
  "&:focus, &:hover": {
    color: e.colorLinkHover
  },
  "&:active": {
    color: e.colorLinkActive
  }
}), {
  genStyleHooks: en,
  genComponentStyleHook: Iw,
  genSubStyleComponent: Mw
} = Cw({
  usePrefix: () => {
    const {
      getPrefixCls: e,
      iconPrefixCls: r
    } = ir(er);
    return {
      rootPrefixCls: e(),
      iconPrefixCls: r
    };
  },
  useToken: () => {
    const [e, r, t, n, o] = bn();
    return {
      theme: e,
      realToken: r,
      hashId: t,
      token: n,
      cssVar: o
    };
  },
  useCSP: () => {
    const {
      csp: e
    } = ir(er);
    return e ?? {};
  },
  getResetStyles: (e, r) => {
    var t;
    const n = Pw(e);
    return [n, {
      "&": n
    }, Bx((t = r == null ? void 0 : r.prefix.iconPrefixCls) !== null && t !== void 0 ? t : cf)];
  },
  getCommonStyle: Nw,
  getCompUnitless: () => Dx
});
function Fw(e, r) {
  return Mn.reduce((t, n) => {
    const o = e[`${n}1`], i = e[`${n}3`], a = e[`${n}6`], s = e[`${n}7`];
    return Object.assign(Object.assign({}, t), r(n, {
      lightColor: o,
      lightBorderColor: i,
      darkColor: a,
      textColor: s
    }));
  }, {});
}
const jw = (e, r) => {
  const [t, n] = bn();
  return Ul({
    token: n,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => r == null ? void 0 : r.nonce,
    layer: {
      name: "antd"
    }
  }, () => [Bx(e)]);
}, Dw = Object.assign({}, x), {
  useId: Ud
} = Dw, kw = () => "", Lw = typeof Ud > "u" ? kw : Ud;
function zw(e, r, t) {
  var n, o;
  const i = Xt("ConfigProvider"), a = e || {}, s = a.inherit === !1 || !r ? Object.assign(Object.assign({}, ou), {
    hashed: (n = r == null ? void 0 : r.hashed) !== null && n !== void 0 ? n : ou.hashed,
    cssVar: r == null ? void 0 : r.cssVar
  }) : r, c = Lw();
  if (process.env.NODE_ENV !== "production") {
    const l = a.cssVar || s.cssVar, u = !!(typeof a.cssVar == "object" && (!((o = a.cssVar) === null || o === void 0) && o.key) || c);
    process.env.NODE_ENV !== "production" && i(!l || u, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return Xu(() => {
    var l, u;
    if (!e)
      return r;
    const f = Object.assign({}, s.components);
    Object.keys(e.components || {}).forEach((d) => {
      f[d] = Object.assign(Object.assign({}, f[d]), e.components[d]);
    });
    const h = `css-var-${c.replace(/:/g, "")}`, m = ((l = a.cssVar) !== null && l !== void 0 ? l : s.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: t == null ? void 0 : t.prefixCls
    }, typeof s.cssVar == "object" ? s.cssVar : {}), typeof a.cssVar == "object" ? a.cssVar : {}), {
      key: typeof a.cssVar == "object" && ((u = a.cssVar) === null || u === void 0 ? void 0 : u.key) || h
    });
    return Object.assign(Object.assign(Object.assign({}, s), a), {
      token: Object.assign(Object.assign({}, s.token), a.token),
      components: f,
      cssVar: m
    });
  }, [a, s], (l, u) => l.some((f, h) => {
    const m = u[h];
    return !Ll(f, m, !0);
  }));
}
var Bw = ["children"], Hx = /* @__PURE__ */ x.createContext({});
function Vw(e) {
  var r = e.children, t = Kt(e, Bw);
  return /* @__PURE__ */ x.createElement(Hx.Provider, {
    value: t
  }, r);
}
var Hw = /* @__PURE__ */ function(e) {
  mn(t, e);
  var r = vn(t);
  function t() {
    return Ht(this, t), r.apply(this, arguments);
  }
  return Wt(t, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), t;
}(x.Component);
function Ww(e) {
  var r = x.useReducer(function(s) {
    return s + 1;
  }, 0), t = ne(r, 2), n = t[1], o = x.useRef(e), i = Ut(function() {
    return o.current;
  }), a = Ut(function(s) {
    o.current = typeof s == "function" ? s(o.current) : s, n();
  });
  return [i, a];
}
var un = "none", oa = "appear", ia = "enter", aa = "leave", Gd = "none", Rr = "prepare", Zn = "start", eo = "active", lf = "end", Wx = "prepared";
function Kd(e, r) {
  var t = {};
  return t[e.toLowerCase()] = r.toLowerCase(), t["Webkit".concat(e)] = "webkit".concat(r), t["Moz".concat(e)] = "moz".concat(r), t["ms".concat(e)] = "MS".concat(r), t["O".concat(e)] = "o".concat(r.toLowerCase()), t;
}
function qw(e, r) {
  var t = {
    animationend: Kd("Animation", "AnimationEnd"),
    transitionend: Kd("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in r || delete t.animationend.animation, "TransitionEvent" in r || delete t.transitionend.transition), t;
}
var Uw = qw(Zt(), typeof window < "u" ? window : {}), qx = {};
if (Zt()) {
  var Gw = document.createElement("div");
  qx = Gw.style;
}
var sa = {};
function Ux(e) {
  if (sa[e])
    return sa[e];
  var r = Uw[e];
  if (r)
    for (var t = Object.keys(r), n = t.length, o = 0; o < n; o += 1) {
      var i = t[o];
      if (Object.prototype.hasOwnProperty.call(r, i) && i in qx)
        return sa[e] = r[i], sa[e];
    }
  return "";
}
var Gx = Ux("animationend"), Kx = Ux("transitionend"), Xx = !!(Gx && Kx), Xd = Gx || "animationend", Yd = Kx || "transitionend";
function Jd(e, r) {
  if (!e) return null;
  if (Ne(e) === "object") {
    var t = r.replace(/-\w/g, function(n) {
      return n[1].toUpperCase();
    });
    return e[t];
  }
  return "".concat(e, "-").concat(r);
}
const Kw = function(e) {
  var r = Pe();
  function t(o) {
    o && (o.removeEventListener(Yd, e), o.removeEventListener(Xd, e));
  }
  function n(o) {
    r.current && r.current !== o && t(r.current), o && o !== r.current && (o.addEventListener(Yd, e), o.addEventListener(Xd, e), r.current = o);
  }
  return x.useEffect(function() {
    return function() {
      t(r.current);
    };
  }, []), [n, t];
};
var Yx = Zt() ? Um : ut;
const Xw = function() {
  var e = x.useRef(null);
  function r() {
    Vr.cancel(e.current);
  }
  function t(n) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    r();
    var i = Vr(function() {
      o <= 1 ? n({
        isCanceled: function() {
          return i !== e.current;
        }
      }) : t(n, o - 1);
    });
    e.current = i;
  }
  return x.useEffect(function() {
    return function() {
      r();
    };
  }, []), [t, r];
};
var Yw = [Rr, Zn, eo, lf], Jw = [Rr, Wx], Jx = !1, Qw = !0;
function Qx(e) {
  return e === eo || e === lf;
}
const Zw = function(e, r, t) {
  var n = fi(Gd), o = ne(n, 2), i = o[0], a = o[1], s = Xw(), c = ne(s, 2), l = c[0], u = c[1];
  function f() {
    a(Rr, !0);
  }
  var h = r ? Jw : Yw;
  return Yx(function() {
    if (i !== Gd && i !== lf) {
      var m = h.indexOf(i), d = h[m + 1], g = t(i);
      g === Jx ? a(d, !0) : d && l(function(p) {
        function y() {
          p.isCanceled() || a(d, !0);
        }
        g === !0 ? y() : Promise.resolve(g).then(y);
      });
    }
  }, [e, i]), x.useEffect(function() {
    return function() {
      u();
    };
  }, []), [f, i];
};
function eS(e, r, t, n) {
  var o = n.motionEnter, i = o === void 0 ? !0 : o, a = n.motionAppear, s = a === void 0 ? !0 : a, c = n.motionLeave, l = c === void 0 ? !0 : c, u = n.motionDeadline, f = n.motionLeaveImmediately, h = n.onAppearPrepare, m = n.onEnterPrepare, d = n.onLeavePrepare, g = n.onAppearStart, p = n.onEnterStart, y = n.onLeaveStart, b = n.onAppearActive, S = n.onEnterActive, C = n.onLeaveActive, v = n.onAppearEnd, _ = n.onEnterEnd, w = n.onLeaveEnd, A = n.onVisibleChanged, M = fi(), k = ne(M, 2), V = k[0], U = k[1], L = Ww(un), z = ne(L, 2), H = z[0], P = z[1], I = fi(null), N = ne(I, 2), B = N[0], W = N[1], Y = H(), X = Pe(!1), Z = Pe(null);
  function G() {
    return t();
  }
  var te = Pe(!1);
  function ie() {
    P(un), W(null, !0);
  }
  var de = Ut(function($e) {
    var $ = H();
    if ($ !== un) {
      var O = G();
      if (!($e && !$e.deadline && $e.target !== O)) {
        var E = te.current, F;
        $ === oa && E ? F = v == null ? void 0 : v(O, $e) : $ === ia && E ? F = _ == null ? void 0 : _(O, $e) : $ === aa && E && (F = w == null ? void 0 : w(O, $e)), E && F !== !1 && ie();
      }
    }
  }), pe = Kw(de), xe = ne(pe, 1), we = xe[0], ae = function($) {
    switch ($) {
      case oa:
        return j(j(j({}, Rr, h), Zn, g), eo, b);
      case ia:
        return j(j(j({}, Rr, m), Zn, p), eo, S);
      case aa:
        return j(j(j({}, Rr, d), Zn, y), eo, C);
      default:
        return {};
    }
  }, se = x.useMemo(function() {
    return ae(Y);
  }, [Y]), _e = Zw(Y, !e, function($e) {
    if ($e === Rr) {
      var $ = se[Rr];
      return $ ? $(G()) : Jx;
    }
    if (ce in se) {
      var O;
      W(((O = se[ce]) === null || O === void 0 ? void 0 : O.call(se, G(), null)) || null);
    }
    return ce === eo && Y !== un && (we(G()), u > 0 && (clearTimeout(Z.current), Z.current = setTimeout(function() {
      de({
        deadline: !0
      });
    }, u))), ce === Wx && ie(), Qw;
  }), re = ne(_e, 2), me = re[0], ce = re[1], ve = Qx(ce);
  te.current = ve;
  var Se = Pe(null);
  Yx(function() {
    if (!(X.current && Se.current === r)) {
      U(r);
      var $e = X.current;
      X.current = !0;
      var $;
      !$e && r && s && ($ = oa), $e && r && i && ($ = ia), ($e && !r && l || !$e && f && !r && l) && ($ = aa);
      var O = ae($);
      $ && (e || O[Rr]) ? (P($), me()) : P(un), Se.current = r;
    }
  }, [r]), ut(function() {
    // Cancel appear
    (Y === oa && !s || // Cancel enter
    Y === ia && !i || // Cancel leave
    Y === aa && !l) && P(un);
  }, [s, i, l]), ut(function() {
    return function() {
      X.current = !1, clearTimeout(Z.current);
    };
  }, []);
  var ye = x.useRef(!1);
  ut(function() {
    V && (ye.current = !0), V !== void 0 && Y === un && ((ye.current || V) && (A == null || A(V)), ye.current = !0);
  }, [V, Y]);
  var Ve = B;
  return se[Rr] && ce === Zn && (Ve = q({
    transition: "none"
  }, Ve)), [Y, ce, Ve, V ?? r];
}
function tS(e) {
  var r = e;
  Ne(e) === "object" && (r = e.transitionSupport);
  function t(o, i) {
    return !!(o.motionName && r && i !== !1);
  }
  var n = /* @__PURE__ */ x.forwardRef(function(o, i) {
    var a = o.visible, s = a === void 0 ? !0 : a, c = o.removeOnLeave, l = c === void 0 ? !0 : c, u = o.forceRender, f = o.children, h = o.motionName, m = o.leavedClassName, d = o.eventProps, g = x.useContext(Hx), p = g.motion, y = t(o, p), b = Pe(), S = Pe();
    function C() {
      try {
        return b.current instanceof HTMLElement ? b.current : Ca(S.current);
      } catch {
        return null;
      }
    }
    var v = eS(y, s, C, o), _ = ne(v, 4), w = _[0], A = _[1], M = _[2], k = _[3], V = x.useRef(k);
    k && (V.current = !0);
    var U = x.useCallback(function(N) {
      b.current = N, Yu(i, N);
    }, [i]), L, z = q(q({}, d), {}, {
      visible: s
    });
    if (!f)
      L = null;
    else if (w === un)
      k ? L = f(q({}, z), U) : !l && V.current && m ? L = f(q(q({}, z), {}, {
        className: m
      }), U) : u || !l && !m ? L = f(q(q({}, z), {}, {
        style: {
          display: "none"
        }
      }), U) : L = null;
    else {
      var H;
      A === Rr ? H = "prepare" : Qx(A) ? H = "active" : A === Zn && (H = "start");
      var P = Jd(h, "".concat(w, "-").concat(H));
      L = f(q(q({}, z), {}, {
        className: fe(Jd(h, w), j(j({}, P, P && H), h, typeof h == "string")),
        style: M
      }), U);
    }
    if (/* @__PURE__ */ x.isValidElement(L) && vi(L)) {
      var I = js(L);
      I || (L = /* @__PURE__ */ x.cloneElement(L, {
        ref: U
      }));
    }
    return /* @__PURE__ */ x.createElement(Hw, {
      ref: S
    }, L);
  });
  return n.displayName = "CSSMotion", n;
}
const wi = tS(Xx);
var au = "add", su = "keep", cu = "remove", zc = "removed";
function rS(e) {
  var r;
  return e && Ne(e) === "object" && "key" in e ? r = e : r = {
    key: e
  }, q(q({}, r), {}, {
    key: String(r.key)
  });
}
function lu() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(rS);
}
function nS() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], t = [], n = 0, o = r.length, i = lu(e), a = lu(r);
  i.forEach(function(l) {
    for (var u = !1, f = n; f < o; f += 1) {
      var h = a[f];
      if (h.key === l.key) {
        n < f && (t = t.concat(a.slice(n, f).map(function(m) {
          return q(q({}, m), {}, {
            status: au
          });
        })), n = f), t.push(q(q({}, h), {}, {
          status: su
        })), n += 1, u = !0;
        break;
      }
    }
    u || t.push(q(q({}, l), {}, {
      status: cu
    }));
  }), n < o && (t = t.concat(a.slice(n).map(function(l) {
    return q(q({}, l), {}, {
      status: au
    });
  })));
  var s = {};
  t.forEach(function(l) {
    var u = l.key;
    s[u] = (s[u] || 0) + 1;
  });
  var c = Object.keys(s).filter(function(l) {
    return s[l] > 1;
  });
  return c.forEach(function(l) {
    t = t.filter(function(u) {
      var f = u.key, h = u.status;
      return f !== l || h !== cu;
    }), t.forEach(function(u) {
      u.key === l && (u.status = su);
    });
  }), t;
}
var oS = ["component", "children", "onVisibleChanged", "onAllRemoved"], iS = ["status"], aS = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function sS(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : wi, t = /* @__PURE__ */ function(n) {
    mn(i, n);
    var o = vn(i);
    function i() {
      var a;
      Ht(this, i);
      for (var s = arguments.length, c = new Array(s), l = 0; l < s; l++)
        c[l] = arguments[l];
      return a = o.call.apply(o, [this].concat(c)), j(Ye(a), "state", {
        keyEntities: []
      }), j(Ye(a), "removeKey", function(u) {
        a.setState(function(f) {
          var h = f.keyEntities.map(function(m) {
            return m.key !== u ? m : q(q({}, m), {}, {
              status: zc
            });
          });
          return {
            keyEntities: h
          };
        }, function() {
          var f = a.state.keyEntities, h = f.filter(function(m) {
            var d = m.status;
            return d !== zc;
          }).length;
          h === 0 && a.props.onAllRemoved && a.props.onAllRemoved();
        });
      }), a;
    }
    return Wt(i, [{
      key: "render",
      value: function() {
        var s = this, c = this.state.keyEntities, l = this.props, u = l.component, f = l.children, h = l.onVisibleChanged;
        l.onAllRemoved;
        var m = Kt(l, oS), d = u || x.Fragment, g = {};
        return aS.forEach(function(p) {
          g[p] = m[p], delete m[p];
        }), delete m.keys, /* @__PURE__ */ x.createElement(d, m, c.map(function(p, y) {
          var b = p.status, S = Kt(p, iS), C = b === au || b === su;
          return /* @__PURE__ */ x.createElement(r, bt({}, g, {
            key: S.key,
            visible: C,
            eventProps: S,
            onVisibleChanged: function(_) {
              h == null || h(_, {
                key: S.key
              }), _ || s.removeKey(S.key);
            }
          }), function(v, _) {
            return f(q(q({}, v), {}, {
              index: y
            }), _);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(s, c) {
        var l = s.keys, u = c.keyEntities, f = lu(l), h = nS(u, f);
        return {
          keyEntities: h.filter(function(m) {
            var d = u.find(function(g) {
              var p = g.key;
              return m.key === p;
            });
            return !(d && d.status === zc && m.status === cu);
          })
        };
      }
    }]), i;
  }(x.Component);
  return j(t, "defaultProps", {
    component: "div"
  }), t;
}
sS(Xx);
function cS(e) {
  const {
    children: r
  } = e, [, t] = bn(), {
    motion: n
  } = t, o = x.useRef(!1);
  return o.current = o.current || n === !1, o.current ? /* @__PURE__ */ x.createElement(Vw, {
    motion: n
  }, r) : r;
}
const Zx = /* @__PURE__ */ x.memo((e) => {
  let {
    dropdownMatchSelectWidth: r
  } = e;
  return Xt("ConfigProvider").deprecated(r === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
process.env.NODE_ENV !== "production" && (Zx.displayName = "PropWarning");
const lS = process.env.NODE_ENV !== "production" ? Zx : () => null;
var uS = function(e, r) {
  var t = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    r.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (t[n[o]] = e[n[o]]);
  return t;
};
let uu = !1;
process.env.NODE_ENV;
const fS = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let eg;
function dS() {
  return eg || Ga;
}
function hS(e) {
  return Object.keys(e).some((r) => r.endsWith("Color"));
}
const pS = (e) => {
  const {
    prefixCls: r,
    iconPrefixCls: t,
    theme: n,
    holderRender: o
  } = e;
  r !== void 0 && (eg = r), n && hS(n) && (process.env.NODE_ENV !== "production" && yi(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), lw(dS(), n));
}, xS = (e) => {
  const {
    children: r,
    csp: t,
    autoInsertSpaceInButton: n,
    alert: o,
    anchor: i,
    form: a,
    locale: s,
    componentSize: c,
    direction: l,
    space: u,
    splitter: f,
    virtual: h,
    dropdownMatchSelectWidth: m,
    popupMatchSelectWidth: d,
    popupOverflow: g,
    legacyLocale: p,
    parentContext: y,
    iconPrefixCls: b,
    theme: S,
    componentDisabled: C,
    segmented: v,
    statistic: _,
    spin: w,
    calendar: A,
    carousel: M,
    cascader: k,
    collapse: V,
    typography: U,
    checkbox: L,
    descriptions: z,
    divider: H,
    drawer: P,
    skeleton: I,
    steps: N,
    image: B,
    layout: W,
    list: Y,
    mentions: X,
    modal: Z,
    progress: G,
    result: te,
    slider: ie,
    breadcrumb: de,
    menu: pe,
    pagination: xe,
    input: we,
    textArea: ae,
    empty: se,
    badge: _e,
    radio: re,
    rate: me,
    switch: ce,
    transfer: ve,
    avatar: Se,
    message: ye,
    tag: Ve,
    table: $e,
    card: $,
    tabs: O,
    timeline: E,
    timePicker: F,
    upload: T,
    notification: ge,
    tree: Be,
    colorPicker: We,
    datePicker: Le,
    rangePicker: Ze,
    flex: Fe,
    wave: ze,
    dropdown: le,
    warning: Oe,
    tour: he,
    tooltip: Ee,
    popover: ft,
    popconfirm: Jt,
    floatButtonGroup: Dt,
    variant: J,
    inputNumber: D,
    treeSelect: Xe
  } = e, De = x.useCallback((He, R) => {
    const {
      prefixCls: ee
    } = e;
    if (R)
      return R;
    const oe = ee || y.getPrefixCls("");
    return He ? `${oe}-${He}` : oe;
  }, [y.getPrefixCls, e.prefixCls]), tt = b || y.iconPrefixCls || cf, Ae = t || y.csp;
  jw(tt, Ae);
  const rt = zw(S, y.theme, {
    prefixCls: De("")
  });
  process.env.NODE_ENV !== "production" && (uu = uu || !!rt);
  const Te = {
    csp: Ae,
    autoInsertSpaceInButton: n,
    alert: o,
    anchor: i,
    locale: s || p,
    direction: l,
    space: u,
    splitter: f,
    virtual: h,
    popupMatchSelectWidth: d ?? m,
    popupOverflow: g,
    getPrefixCls: De,
    iconPrefixCls: tt,
    theme: rt,
    segmented: v,
    statistic: _,
    spin: w,
    calendar: A,
    carousel: M,
    cascader: k,
    collapse: V,
    typography: U,
    checkbox: L,
    descriptions: z,
    divider: H,
    drawer: P,
    skeleton: I,
    steps: N,
    image: B,
    input: we,
    textArea: ae,
    layout: W,
    list: Y,
    mentions: X,
    modal: Z,
    progress: G,
    result: te,
    slider: ie,
    breadcrumb: de,
    menu: pe,
    pagination: xe,
    empty: se,
    badge: _e,
    radio: re,
    rate: me,
    switch: ce,
    transfer: ve,
    avatar: Se,
    message: ye,
    tag: Ve,
    table: $e,
    card: $,
    tabs: O,
    timeline: E,
    timePicker: F,
    upload: T,
    notification: ge,
    tree: Be,
    colorPicker: We,
    datePicker: Le,
    rangePicker: Ze,
    flex: Fe,
    wave: ze,
    dropdown: le,
    warning: Oe,
    tour: he,
    tooltip: Ee,
    popover: ft,
    popconfirm: Jt,
    floatButtonGroup: Dt,
    variant: J,
    inputNumber: D,
    treeSelect: Xe
  };
  process.env.NODE_ENV !== "production" && Xt("ConfigProvider")(!("autoInsertSpaceInButton" in e), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const Ue = Object.assign({}, y);
  Object.keys(Te).forEach((He) => {
    Te[He] !== void 0 && (Ue[He] = Te[He]);
  }), fS.forEach((He) => {
    const R = e[He];
    R && (Ue[He] = R);
  }), typeof n < "u" && (Ue.button = Object.assign({
    autoInsertSpace: n
  }, Ue.button));
  const dt = Xu(() => Ue, Ue, (He, R) => {
    const ee = Object.keys(He), oe = Object.keys(R);
    return ee.length !== oe.length || ee.some((Ce) => He[Ce] !== R[Ce]);
  }), {
    layer: Qt
  } = x.useContext(bi), dr = x.useMemo(() => ({
    prefixCls: tt,
    csp: Ae,
    layer: Qt ? "antd" : void 0
  }), [tt, Ae, Qt]);
  let je = /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ x.createElement(lS, {
    dropdownMatchSelectWidth: m
  }), r);
  const xt = x.useMemo(() => {
    var He, R, ee, oe;
    return Qn(((He = go.Form) === null || He === void 0 ? void 0 : He.defaultValidateMessages) || {}, ((ee = (R = dt.locale) === null || R === void 0 ? void 0 : R.Form) === null || ee === void 0 ? void 0 : ee.defaultValidateMessages) || {}, ((oe = dt.form) === null || oe === void 0 ? void 0 : oe.validateMessages) || {}, (a == null ? void 0 : a.validateMessages) || {});
  }, [dt, a == null ? void 0 : a.validateMessages]);
  Object.keys(xt).length > 0 && (je = /* @__PURE__ */ x.createElement(L2.Provider, {
    value: xt
  }, je)), s && (je = /* @__PURE__ */ x.createElement(Ox, {
    locale: s,
    _ANT_MARK__: Ex
  }, je)), je = /* @__PURE__ */ x.createElement(of.Provider, {
    value: dr
  }, je), c && (je = /* @__PURE__ */ x.createElement(fw, {
    size: c
  }, je)), je = /* @__PURE__ */ x.createElement(cS, null, je);
  const kt = x.useMemo(() => {
    const He = rt || {}, {
      algorithm: R,
      token: ee,
      components: oe,
      cssVar: Ce
    } = He, Je = uS(He, ["algorithm", "token", "components", "cssVar"]), Qe = R && (!Array.isArray(R) || R.length > 0) ? Bl(R) : Nx, ke = {};
    Object.entries(oe || {}).forEach((yt) => {
      let [at, pt] = yt;
      const Ge = Object.assign({}, pt);
      "algorithm" in Ge && (Ge.algorithm === !0 ? Ge.theme = Qe : (Array.isArray(Ge.algorithm) || typeof Ge.algorithm == "function") && (Ge.theme = Bl(Ge.algorithm)), delete Ge.algorithm), ke[at] = Ge;
    });
    const Ie = Object.assign(Object.assign({}, li), ee);
    return Object.assign(Object.assign({}, Je), {
      theme: Qe,
      token: Ie,
      components: ke,
      override: Object.assign({
        override: Ie
      }, ke),
      cssVar: Ce
    });
  }, [rt]);
  return S && (je = /* @__PURE__ */ x.createElement(Ax.Provider, {
    value: kt
  }, je)), dt.warning && (je = /* @__PURE__ */ x.createElement(_x.Provider, {
    value: dt.warning
  }, je)), C !== void 0 && (je = /* @__PURE__ */ x.createElement(uw, {
    disabled: C
  }, je)), /* @__PURE__ */ x.createElement(er.Provider, {
    value: dt
  }, je);
}, $o = (e) => {
  const r = x.useContext(er), t = x.useContext(sf);
  return /* @__PURE__ */ x.createElement(xS, Object.assign({
    parentContext: r,
    legacyLocale: t
  }, e));
};
$o.ConfigContext = er;
$o.SizeContext = vo;
$o.config = pS;
$o.useConfig = dw;
Object.defineProperty($o, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && yi(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), vo)
});
process.env.NODE_ENV !== "production" && ($o.displayName = "ConfigProvider");
function tg(e) {
  var r;
  return e == null || (r = e.getRootNode) === null || r === void 0 ? void 0 : r.call(e);
}
function gS(e) {
  return tg(e) instanceof ShadowRoot;
}
function Ka(e) {
  return gS(e) ? tg(e) : null;
}
function mS(e) {
  return e.replace(/-(.)/g, function(r, t) {
    return t.toUpperCase();
  });
}
function vS(e, r) {
  _t(e, "[@ant-design/icons] ".concat(r));
}
function Qd(e) {
  return Ne(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (Ne(e.icon) === "object" || typeof e.icon == "function");
}
function Zd() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(r, t) {
    var n = e[t];
    switch (t) {
      case "class":
        r.className = n, delete r.class;
        break;
      default:
        delete r[t], r[mS(t)] = n;
    }
    return r;
  }, {});
}
function fu(e, r, t) {
  return t ? /* @__PURE__ */ Q.createElement(e.tag, q(q({
    key: r
  }, Zd(e.attrs)), t), (e.children || []).map(function(n, o) {
    return fu(n, "".concat(r, "-").concat(e.tag, "-").concat(o));
  })) : /* @__PURE__ */ Q.createElement(e.tag, q({
    key: r
  }, Zd(e.attrs)), (e.children || []).map(function(n, o) {
    return fu(n, "".concat(r, "-").concat(e.tag, "-").concat(o));
  }));
}
function rg(e) {
  return ui(e)[0];
}
function ng(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var bS = `
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
`, yS = function(r) {
  var t = ir(of), n = t.csp, o = t.prefixCls, i = t.layer, a = bS;
  o && (a = a.replace(/anticon/g, o)), i && (a = "@layer ".concat(i, ` {
`).concat(a, `
}`)), ut(function() {
    var s = r.current, c = Ka(s);
    Jr(a, "@ant-design-icons", {
      prepend: !i,
      csp: n,
      attachTo: c
    });
  }, []);
}, wS = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], ei = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function SS(e) {
  var r = e.primaryColor, t = e.secondaryColor;
  ei.primaryColor = r, ei.secondaryColor = t || rg(r), ei.calculated = !!t;
}
function _S() {
  return q({}, ei);
}
var To = function(r) {
  var t = r.icon, n = r.className, o = r.onClick, i = r.style, a = r.primaryColor, s = r.secondaryColor, c = Kt(r, wS), l = x.useRef(), u = ei;
  if (a && (u = {
    primaryColor: a,
    secondaryColor: s || rg(a)
  }), yS(l), vS(Qd(t), "icon should be icon definiton, but got ".concat(t)), !Qd(t))
    return null;
  var f = t;
  return f && typeof f.icon == "function" && (f = q(q({}, f), {}, {
    icon: f.icon(u.primaryColor, u.secondaryColor)
  })), fu(f.icon, "svg-".concat(f.name), q(q({
    className: n,
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
To.displayName = "IconReact";
To.getTwoToneColors = _S;
To.setTwoToneColors = SS;
function og(e) {
  var r = ng(e), t = ne(r, 2), n = t[0], o = t[1];
  return To.setTwoToneColors({
    primaryColor: n,
    secondaryColor: o
  });
}
function CS() {
  var e = To.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var ES = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
og(Ua.primary);
var tn = /* @__PURE__ */ x.forwardRef(function(e, r) {
  var t = e.className, n = e.icon, o = e.spin, i = e.rotate, a = e.tabIndex, s = e.onClick, c = e.twoToneColor, l = Kt(e, ES), u = x.useContext(of), f = u.prefixCls, h = f === void 0 ? "anticon" : f, m = u.rootClassName, d = fe(m, h, j(j({}, "".concat(h, "-").concat(n.name), !!n.name), "".concat(h, "-spin"), !!o || n.name === "loading"), t), g = a;
  g === void 0 && s && (g = -1);
  var p = i ? {
    msTransform: "rotate(".concat(i, "deg)"),
    transform: "rotate(".concat(i, "deg)")
  } : void 0, y = ng(c), b = ne(y, 2), S = b[0], C = b[1];
  return /* @__PURE__ */ x.createElement("span", bt({
    role: "img",
    "aria-label": n.name
  }, l, {
    ref: r,
    tabIndex: g,
    onClick: s,
    className: d
  }), /* @__PURE__ */ x.createElement(To, {
    icon: n,
    primaryColor: S,
    secondaryColor: C,
    style: p
  }));
});
tn.displayName = "AntdIcon";
tn.getTwoToneColor = CS;
tn.setTwoToneColor = og;
var OS = function(r, t) {
  return /* @__PURE__ */ x.createElement(tn, bt({}, r, {
    ref: t,
    icon: L1
  }));
}, ig = /* @__PURE__ */ x.forwardRef(OS);
process.env.NODE_ENV !== "production" && (ig.displayName = "CloseCircleFilled");
function ag(e) {
  return e && /* @__PURE__ */ Q.isValidElement(e) && e.type === Q.Fragment;
}
const RS = (e, r, t) => /* @__PURE__ */ Q.isValidElement(e) ? /* @__PURE__ */ Q.cloneElement(e, typeof t == "function" ? t(e.props || {}) : t) : r;
function Si(e, r) {
  return RS(e, e, r);
}
const sg = (e) => {
  const [, , , , r] = bn();
  return r ? `${e}-css-var` : "";
};
var e0 = {
  // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * ESC
   */
  ESC: 27
}, $S = function(r, t) {
  return /* @__PURE__ */ x.createElement(tn, bt({}, r, {
    ref: t,
    icon: H1
  }));
}, uf = /* @__PURE__ */ x.forwardRef($S);
process.env.NODE_ENV !== "production" && (uf.displayName = "LoadingOutlined");
const ff = /* @__PURE__ */ Q.createContext(void 0);
process.env.NODE_ENV !== "production" && (ff.displayName = "zIndexContext");
const Xr = 100, TS = 10, PS = Xr * TS, NS = PS + Xr, cg = {
  Modal: Xr,
  Drawer: Xr,
  Popover: Xr,
  Popconfirm: Xr,
  Tooltip: Xr,
  Tour: Xr,
  FloatButton: Xr
}, AS = {
  SelectLike: 50,
  Dropdown: 50,
  DatePicker: 50,
  Menu: 50,
  ImagePreview: 1
};
function IS(e) {
  return e in cg;
}
const MS = (e, r) => {
  const [, t] = bn(), n = Q.useContext(ff), o = IS(e);
  let i;
  if (r !== void 0)
    i = [r, r];
  else {
    let a = n ?? 0;
    o ? a += // Use preset token zIndex by default but not stack when has parent container
    (n ? 0 : t.zIndexPopupBase) + // Container offset
    cg[e] : a += AS[e], i = [n === void 0 ? r : a, a];
  }
  if (process.env.NODE_ENV !== "production") {
    const a = Xt(e), s = t.zIndexPopupBase + NS, c = i[0] || 0;
    process.env.NODE_ENV !== "production" && a(r !== void 0 || c <= s, "usage", "`zIndex` is over design token `zIndexPopupBase` too much. It may cause unexpected override.");
  }
  return i;
};
function tr() {
  tr = function() {
    return r;
  };
  var e, r = {}, t = Object.prototype, n = t.hasOwnProperty, o = Object.defineProperty || function(P, I, N) {
    P[I] = N.value;
  }, i = typeof Symbol == "function" ? Symbol : {}, a = i.iterator || "@@iterator", s = i.asyncIterator || "@@asyncIterator", c = i.toStringTag || "@@toStringTag";
  function l(P, I, N) {
    return Object.defineProperty(P, I, {
      value: N,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), P[I];
  }
  try {
    l({}, "");
  } catch {
    l = function(N, B, W) {
      return N[B] = W;
    };
  }
  function u(P, I, N, B) {
    var W = I && I.prototype instanceof y ? I : y, Y = Object.create(W.prototype), X = new z(B || []);
    return o(Y, "_invoke", {
      value: k(P, N, X)
    }), Y;
  }
  function f(P, I, N) {
    try {
      return {
        type: "normal",
        arg: P.call(I, N)
      };
    } catch (B) {
      return {
        type: "throw",
        arg: B
      };
    }
  }
  r.wrap = u;
  var h = "suspendedStart", m = "suspendedYield", d = "executing", g = "completed", p = {};
  function y() {
  }
  function b() {
  }
  function S() {
  }
  var C = {};
  l(C, a, function() {
    return this;
  });
  var v = Object.getPrototypeOf, _ = v && v(v(H([])));
  _ && _ !== t && n.call(_, a) && (C = _);
  var w = S.prototype = y.prototype = Object.create(C);
  function A(P) {
    ["next", "throw", "return"].forEach(function(I) {
      l(P, I, function(N) {
        return this._invoke(I, N);
      });
    });
  }
  function M(P, I) {
    function N(W, Y, X, Z) {
      var G = f(P[W], P, Y);
      if (G.type !== "throw") {
        var te = G.arg, ie = te.value;
        return ie && Ne(ie) == "object" && n.call(ie, "__await") ? I.resolve(ie.__await).then(function(de) {
          N("next", de, X, Z);
        }, function(de) {
          N("throw", de, X, Z);
        }) : I.resolve(ie).then(function(de) {
          te.value = de, X(te);
        }, function(de) {
          return N("throw", de, X, Z);
        });
      }
      Z(G.arg);
    }
    var B;
    o(this, "_invoke", {
      value: function(Y, X) {
        function Z() {
          return new I(function(G, te) {
            N(Y, X, G, te);
          });
        }
        return B = B ? B.then(Z, Z) : Z();
      }
    });
  }
  function k(P, I, N) {
    var B = h;
    return function(W, Y) {
      if (B === d) throw Error("Generator is already running");
      if (B === g) {
        if (W === "throw") throw Y;
        return {
          value: e,
          done: !0
        };
      }
      for (N.method = W, N.arg = Y; ; ) {
        var X = N.delegate;
        if (X) {
          var Z = V(X, N);
          if (Z) {
            if (Z === p) continue;
            return Z;
          }
        }
        if (N.method === "next") N.sent = N._sent = N.arg;
        else if (N.method === "throw") {
          if (B === h) throw B = g, N.arg;
          N.dispatchException(N.arg);
        } else N.method === "return" && N.abrupt("return", N.arg);
        B = d;
        var G = f(P, I, N);
        if (G.type === "normal") {
          if (B = N.done ? g : m, G.arg === p) continue;
          return {
            value: G.arg,
            done: N.done
          };
        }
        G.type === "throw" && (B = g, N.method = "throw", N.arg = G.arg);
      }
    };
  }
  function V(P, I) {
    var N = I.method, B = P.iterator[N];
    if (B === e) return I.delegate = null, N === "throw" && P.iterator.return && (I.method = "return", I.arg = e, V(P, I), I.method === "throw") || N !== "return" && (I.method = "throw", I.arg = new TypeError("The iterator does not provide a '" + N + "' method")), p;
    var W = f(B, P.iterator, I.arg);
    if (W.type === "throw") return I.method = "throw", I.arg = W.arg, I.delegate = null, p;
    var Y = W.arg;
    return Y ? Y.done ? (I[P.resultName] = Y.value, I.next = P.nextLoc, I.method !== "return" && (I.method = "next", I.arg = e), I.delegate = null, p) : Y : (I.method = "throw", I.arg = new TypeError("iterator result is not an object"), I.delegate = null, p);
  }
  function U(P) {
    var I = {
      tryLoc: P[0]
    };
    1 in P && (I.catchLoc = P[1]), 2 in P && (I.finallyLoc = P[2], I.afterLoc = P[3]), this.tryEntries.push(I);
  }
  function L(P) {
    var I = P.completion || {};
    I.type = "normal", delete I.arg, P.completion = I;
  }
  function z(P) {
    this.tryEntries = [{
      tryLoc: "root"
    }], P.forEach(U, this), this.reset(!0);
  }
  function H(P) {
    if (P || P === "") {
      var I = P[a];
      if (I) return I.call(P);
      if (typeof P.next == "function") return P;
      if (!isNaN(P.length)) {
        var N = -1, B = function W() {
          for (; ++N < P.length; ) if (n.call(P, N)) return W.value = P[N], W.done = !1, W;
          return W.value = e, W.done = !0, W;
        };
        return B.next = B;
      }
    }
    throw new TypeError(Ne(P) + " is not iterable");
  }
  return b.prototype = S, o(w, "constructor", {
    value: S,
    configurable: !0
  }), o(S, "constructor", {
    value: b,
    configurable: !0
  }), b.displayName = l(S, c, "GeneratorFunction"), r.isGeneratorFunction = function(P) {
    var I = typeof P == "function" && P.constructor;
    return !!I && (I === b || (I.displayName || I.name) === "GeneratorFunction");
  }, r.mark = function(P) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(P, S) : (P.__proto__ = S, l(P, c, "GeneratorFunction")), P.prototype = Object.create(w), P;
  }, r.awrap = function(P) {
    return {
      __await: P
    };
  }, A(M.prototype), l(M.prototype, s, function() {
    return this;
  }), r.AsyncIterator = M, r.async = function(P, I, N, B, W) {
    W === void 0 && (W = Promise);
    var Y = new M(u(P, I, N, B), W);
    return r.isGeneratorFunction(I) ? Y : Y.next().then(function(X) {
      return X.done ? X.value : Y.next();
    });
  }, A(w), l(w, c, "Generator"), l(w, a, function() {
    return this;
  }), l(w, "toString", function() {
    return "[object Generator]";
  }), r.keys = function(P) {
    var I = Object(P), N = [];
    for (var B in I) N.push(B);
    return N.reverse(), function W() {
      for (; N.length; ) {
        var Y = N.pop();
        if (Y in I) return W.value = Y, W.done = !1, W;
      }
      return W.done = !0, W;
    };
  }, r.values = H, z.prototype = {
    constructor: z,
    reset: function(I) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(L), !I) for (var N in this) N.charAt(0) === "t" && n.call(this, N) && !isNaN(+N.slice(1)) && (this[N] = e);
    },
    stop: function() {
      this.done = !0;
      var I = this.tryEntries[0].completion;
      if (I.type === "throw") throw I.arg;
      return this.rval;
    },
    dispatchException: function(I) {
      if (this.done) throw I;
      var N = this;
      function B(te, ie) {
        return X.type = "throw", X.arg = I, N.next = te, ie && (N.method = "next", N.arg = e), !!ie;
      }
      for (var W = this.tryEntries.length - 1; W >= 0; --W) {
        var Y = this.tryEntries[W], X = Y.completion;
        if (Y.tryLoc === "root") return B("end");
        if (Y.tryLoc <= this.prev) {
          var Z = n.call(Y, "catchLoc"), G = n.call(Y, "finallyLoc");
          if (Z && G) {
            if (this.prev < Y.catchLoc) return B(Y.catchLoc, !0);
            if (this.prev < Y.finallyLoc) return B(Y.finallyLoc);
          } else if (Z) {
            if (this.prev < Y.catchLoc) return B(Y.catchLoc, !0);
          } else {
            if (!G) throw Error("try statement without catch or finally");
            if (this.prev < Y.finallyLoc) return B(Y.finallyLoc);
          }
        }
      }
    },
    abrupt: function(I, N) {
      for (var B = this.tryEntries.length - 1; B >= 0; --B) {
        var W = this.tryEntries[B];
        if (W.tryLoc <= this.prev && n.call(W, "finallyLoc") && this.prev < W.finallyLoc) {
          var Y = W;
          break;
        }
      }
      Y && (I === "break" || I === "continue") && Y.tryLoc <= N && N <= Y.finallyLoc && (Y = null);
      var X = Y ? Y.completion : {};
      return X.type = I, X.arg = N, Y ? (this.method = "next", this.next = Y.finallyLoc, p) : this.complete(X);
    },
    complete: function(I, N) {
      if (I.type === "throw") throw I.arg;
      return I.type === "break" || I.type === "continue" ? this.next = I.arg : I.type === "return" ? (this.rval = this.arg = I.arg, this.method = "return", this.next = "end") : I.type === "normal" && N && (this.next = N), p;
    },
    finish: function(I) {
      for (var N = this.tryEntries.length - 1; N >= 0; --N) {
        var B = this.tryEntries[N];
        if (B.finallyLoc === I) return this.complete(B.completion, B.afterLoc), L(B), p;
      }
    },
    catch: function(I) {
      for (var N = this.tryEntries.length - 1; N >= 0; --N) {
        var B = this.tryEntries[N];
        if (B.tryLoc === I) {
          var W = B.completion;
          if (W.type === "throw") {
            var Y = W.arg;
            L(B);
          }
          return Y;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function(I, N, B) {
      return this.delegate = {
        iterator: H(I),
        resultName: N,
        nextLoc: B
      }, this.method === "next" && (this.arg = e), p;
    }
  }, r;
}
function t0(e, r, t, n, o, i, a) {
  try {
    var s = e[i](a), c = s.value;
  } catch (l) {
    return void t(l);
  }
  s.done ? r(c) : Promise.resolve(c).then(n, o);
}
function Ln(e) {
  return function() {
    var r = this, t = arguments;
    return new Promise(function(n, o) {
      var i = e.apply(r, t);
      function a(c) {
        t0(i, n, o, a, s, "next", c);
      }
      function s(c) {
        t0(i, n, o, a, s, "throw", c);
      }
      a(void 0);
    });
  };
}
var _i = q({}, Lh), FS = _i.version, Bc = _i.render, jS = _i.unmountComponentAtNode, Hs;
try {
  var DS = Number((FS || "").split(".")[0]);
  DS >= 18 && (Hs = _i.createRoot);
} catch {
}
function r0(e) {
  var r = _i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  r && Ne(r) === "object" && (r.usingClientEntryPoint = e);
}
var Xa = "__rc_react_root__";
function kS(e, r) {
  r0(!0);
  var t = r[Xa] || Hs(r);
  r0(!1), t.render(e), r[Xa] = t;
}
function LS(e, r) {
  Bc == null || Bc(e, r);
}
function zS(e, r) {
  if (Hs) {
    kS(e, r);
    return;
  }
  LS(e, r);
}
function BS(e) {
  return du.apply(this, arguments);
}
function du() {
  return du = Ln(/* @__PURE__ */ tr().mark(function e(r) {
    return tr().wrap(function(n) {
      for (; ; ) switch (n.prev = n.next) {
        case 0:
          return n.abrupt("return", Promise.resolve().then(function() {
            var o;
            (o = r[Xa]) === null || o === void 0 || o.unmount(), delete r[Xa];
          }));
        case 1:
        case "end":
          return n.stop();
      }
    }, e);
  })), du.apply(this, arguments);
}
function VS(e) {
  jS(e);
}
function HS(e) {
  return hu.apply(this, arguments);
}
function hu() {
  return hu = Ln(/* @__PURE__ */ tr().mark(function e(r) {
    return tr().wrap(function(n) {
      for (; ; ) switch (n.prev = n.next) {
        case 0:
          if (Hs === void 0) {
            n.next = 2;
            break;
          }
          return n.abrupt("return", BS(r));
        case 2:
          VS(r);
        case 3:
        case "end":
          return n.stop();
      }
    }, e);
  })), hu.apply(this, arguments);
}
const WS = (e, r) => {
  if (process.env.NODE_ENV !== "production") {
    const t = parseInt(x.version.split(".")[0], 10), n = Object.keys(Lh);
    process.env.NODE_ENV !== "production" && yi(t < 19 || n.includes("createRoot"), "compatible", "antd v5 support React is 16 ~ 18. see https://u.ant.design/v5-for-19 for compatible.");
  }
  return zS(e, r), () => HS(r);
};
let qS = WS;
function US() {
  return qS;
}
const GS = (e, r, t) => t !== void 0 ? t : `${e}-${r}`;
function Ci(e, r) {
  var t = Object.assign({}, e);
  return Array.isArray(r) && r.forEach(function(n) {
    delete t[n];
  }), t;
}
const lg = function(e) {
  if (!e)
    return !1;
  if (e instanceof Element) {
    if (e.offsetParent)
      return !0;
    if (e.getBBox) {
      var r = e.getBBox(), t = r.width, n = r.height;
      if (t || n)
        return !0;
    }
    if (e.getBoundingClientRect) {
      var o = e.getBoundingClientRect(), i = o.width, a = o.height;
      if (i || a)
        return !0;
    }
  }
  return !1;
}, KS = (e) => {
  const {
    componentCls: r,
    colorPrimary: t
  } = e;
  return {
    [r]: {
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
}, XS = Iw("Wave", (e) => [KS(e)]), ug = `${Ga}-wave-target`;
function Vc(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
  e !== "transparent";
}
function YS(e) {
  const {
    borderTopColor: r,
    borderColor: t,
    backgroundColor: n
  } = getComputedStyle(e);
  return Vc(r) ? r : Vc(t) ? t : Vc(n) ? n : null;
}
function Hc(e) {
  return Number.isNaN(e) ? 0 : e;
}
const JS = (e) => {
  const {
    className: r,
    target: t,
    component: n,
    registerUnmount: o
  } = e, i = x.useRef(null), a = x.useRef(null);
  x.useEffect(() => {
    a.current = o();
  }, []);
  const [s, c] = x.useState(null), [l, u] = x.useState([]), [f, h] = x.useState(0), [m, d] = x.useState(0), [g, p] = x.useState(0), [y, b] = x.useState(0), [S, C] = x.useState(!1), v = {
    left: f,
    top: m,
    width: g,
    height: y,
    borderRadius: l.map((A) => `${A}px`).join(" ")
  };
  s && (v["--wave-color"] = s);
  function _() {
    const A = getComputedStyle(t);
    c(YS(t));
    const M = A.position === "static", {
      borderLeftWidth: k,
      borderTopWidth: V
    } = A;
    h(M ? t.offsetLeft : Hc(-parseFloat(k))), d(M ? t.offsetTop : Hc(-parseFloat(V))), p(t.offsetWidth), b(t.offsetHeight);
    const {
      borderTopLeftRadius: U,
      borderTopRightRadius: L,
      borderBottomLeftRadius: z,
      borderBottomRightRadius: H
    } = A;
    u([U, L, H, z].map((P) => Hc(parseFloat(P))));
  }
  if (x.useEffect(() => {
    if (t) {
      const A = Vr(() => {
        _(), C(!0);
      });
      let M;
      return typeof ResizeObserver < "u" && (M = new ResizeObserver(_), M.observe(t)), () => {
        Vr.cancel(A), M == null || M.disconnect();
      };
    }
  }, []), !S)
    return null;
  const w = (n === "Checkbox" || n === "Radio") && (t == null ? void 0 : t.classList.contains(ug));
  return /* @__PURE__ */ x.createElement(wi, {
    visible: !0,
    motionAppear: !0,
    motionName: "wave-motion",
    motionDeadline: 5e3,
    onAppearEnd: (A, M) => {
      var k, V;
      if (M.deadline || M.propertyName === "opacity") {
        const U = (k = i.current) === null || k === void 0 ? void 0 : k.parentElement;
        (V = a.current) === null || V === void 0 || V.call(a).then(() => {
          U == null || U.remove();
        });
      }
      return !1;
    }
  }, (A, M) => {
    let {
      className: k
    } = A;
    return /* @__PURE__ */ x.createElement("div", {
      ref: Dn(i, M),
      className: fe(r, k, {
        "wave-quick": w
      }),
      style: v
    });
  });
}, QS = (e, r) => {
  var t;
  const {
    component: n
  } = r;
  if (n === "Checkbox" && !(!((t = e.querySelector("input")) === null || t === void 0) && t.checked))
    return;
  const o = document.createElement("div");
  o.style.position = "absolute", o.style.left = "0px", o.style.top = "0px", e == null || e.insertBefore(o, e == null ? void 0 : e.firstChild);
  const i = US();
  let a = null;
  function s() {
    return a;
  }
  a = i(/* @__PURE__ */ x.createElement(JS, Object.assign({}, r, {
    target: e,
    registerUnmount: s
  })), o);
}, ZS = (e, r, t) => {
  const {
    wave: n
  } = x.useContext(er), [, o, i] = bn(), a = Ut((l) => {
    const u = e.current;
    if (n != null && n.disabled || !u)
      return;
    const f = u.querySelector(`.${ug}`) || u, {
      showEffect: h
    } = n || {};
    (h || QS)(f, {
      className: r,
      token: o,
      component: t,
      event: l,
      hashId: i
    });
  }), s = x.useRef(null);
  return (l) => {
    Vr.cancel(s.current), s.current = Vr(() => {
      a(l);
    });
  };
}, fg = (e) => {
  const {
    children: r,
    disabled: t,
    component: n
  } = e, {
    getPrefixCls: o
  } = ir(er), i = Pe(null), a = o("wave"), [, s] = XS(a), c = ZS(i, fe(a, s), n);
  if (Q.useEffect(() => {
    const u = i.current;
    if (!u || u.nodeType !== 1 || t)
      return;
    const f = (h) => {
      !lg(h.target) || // No need wave
      !u.getAttribute || u.getAttribute("disabled") || u.disabled || u.className.includes("disabled") || u.className.includes("-leave") || c(h);
    };
    return u.addEventListener("click", f, !0), () => {
      u.removeEventListener("click", f, !0);
    };
  }, [t]), !/* @__PURE__ */ Q.isValidElement(r))
    return r ?? null;
  const l = vi(r) ? Dn(js(r), i) : i;
  return Si(r, {
    ref: l
  });
};
process.env.NODE_ENV !== "production" && (fg.displayName = "Wave");
const Ws = (e) => {
  const r = Q.useContext(vo);
  return Q.useMemo(() => e ? typeof e == "string" ? e ?? r : typeof e == "function" ? e(r) : r : r, [e, r]);
}, e_ = (e) => {
  const {
    componentCls: r
  } = e;
  return {
    [r]: {
      "&-block": {
        display: "flex",
        width: "100%"
      },
      "&-vertical": {
        flexDirection: "column"
      }
    }
  };
}, t_ = (e) => {
  const {
    componentCls: r,
    antCls: t
  } = e;
  return {
    [r]: {
      display: "inline-flex",
      "&-rtl": {
        direction: "rtl"
      },
      "&-vertical": {
        flexDirection: "column"
      },
      "&-align": {
        flexDirection: "column",
        "&-center": {
          alignItems: "center"
        },
        "&-start": {
          alignItems: "flex-start"
        },
        "&-end": {
          alignItems: "flex-end"
        },
        "&-baseline": {
          alignItems: "baseline"
        }
      },
      [`${r}-item:empty`]: {
        display: "none"
      },
      // https://github.com/ant-design/ant-design/issues/47875
      [`${r}-item > ${t}-badge-not-a-wrapper:only-child`]: {
        display: "block"
      }
    }
  };
}, r_ = (e) => {
  const {
    componentCls: r
  } = e;
  return {
    [r]: {
      "&-gap-row-small": {
        rowGap: e.spaceGapSmallSize
      },
      "&-gap-row-middle": {
        rowGap: e.spaceGapMiddleSize
      },
      "&-gap-row-large": {
        rowGap: e.spaceGapLargeSize
      },
      "&-gap-col-small": {
        columnGap: e.spaceGapSmallSize
      },
      "&-gap-col-middle": {
        columnGap: e.spaceGapMiddleSize
      },
      "&-gap-col-large": {
        columnGap: e.spaceGapLargeSize
      }
    }
  };
}, dg = en("Space", (e) => {
  const r = Yt(e, {
    spaceGapSmallSize: e.paddingXS,
    spaceGapMiddleSize: e.padding,
    spaceGapLargeSize: e.paddingLG
  });
  return [t_(r), r_(r), e_(r)];
}, () => ({}), {
  // Space component don't apply extra font style
  // https://github.com/ant-design/ant-design/issues/40315
  resetStyle: !1
});
var hg = function(e, r) {
  var t = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    r.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (t[n[o]] = e[n[o]]);
  return t;
};
const qs = /* @__PURE__ */ x.createContext(null), df = (e, r) => {
  const t = x.useContext(qs), n = x.useMemo(() => {
    if (!t)
      return "";
    const {
      compactDirection: o,
      isFirstItem: i,
      isLastItem: a
    } = t, s = o === "vertical" ? "-vertical-" : "-";
    return fe(`${e}-compact${s}item`, {
      [`${e}-compact${s}first-item`]: i,
      [`${e}-compact${s}last-item`]: a,
      [`${e}-compact${s}item-rtl`]: r === "rtl"
    });
  }, [e, r, t]);
  return {
    compactSize: t == null ? void 0 : t.compactSize,
    compactDirection: t == null ? void 0 : t.compactDirection,
    compactItemClassnames: n
  };
}, n_ = (e) => {
  const {
    children: r
  } = e;
  return /* @__PURE__ */ x.createElement(qs.Provider, {
    value: null
  }, r);
}, o_ = (e) => {
  const {
    children: r
  } = e, t = hg(e, ["children"]);
  return /* @__PURE__ */ x.createElement(qs.Provider, {
    value: x.useMemo(() => t, [t])
  }, r);
}, i_ = (e) => {
  const {
    getPrefixCls: r,
    direction: t
  } = x.useContext(er), {
    size: n,
    direction: o,
    block: i,
    prefixCls: a,
    className: s,
    rootClassName: c,
    children: l
  } = e, u = hg(e, ["size", "direction", "block", "prefixCls", "className", "rootClassName", "children"]), f = Ws((S) => n ?? S), h = r("space-compact", a), [m, d] = dg(h), g = fe(h, d, {
    [`${h}-rtl`]: t === "rtl",
    [`${h}-block`]: i,
    [`${h}-vertical`]: o === "vertical"
  }, s, c), p = x.useContext(qs), y = gn(l), b = x.useMemo(() => y.map((S, C) => {
    const v = (S == null ? void 0 : S.key) || `${h}-item-${C}`;
    return /* @__PURE__ */ x.createElement(o_, {
      key: v,
      compactSize: f,
      compactDirection: o,
      isFirstItem: C === 0 && (!p || (p == null ? void 0 : p.isFirstItem)),
      isLastItem: C === y.length - 1 && (!p || (p == null ? void 0 : p.isLastItem))
    }, S);
  }), [n, y, p]);
  return y.length === 0 ? null : m(/* @__PURE__ */ x.createElement("div", Object.assign({
    className: g
  }, u), b));
};
var a_ = function(e, r) {
  var t = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    r.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (t[n[o]] = e[n[o]]);
  return t;
};
const pg = /* @__PURE__ */ x.createContext(void 0), s_ = (e) => {
  const {
    getPrefixCls: r,
    direction: t
  } = x.useContext(er), {
    prefixCls: n,
    size: o,
    className: i
  } = e, a = a_(e, ["prefixCls", "size", "className"]), s = r("btn-group", n), [, , c] = bn(), l = x.useMemo(() => {
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
    const f = Xt("Button.Group");
    f.deprecated(!1, "Button.Group", "Space.Compact"), process.env.NODE_ENV !== "production" && f(!o || ["large", "small", "middle"].includes(o), "usage", "Invalid prop `size`.");
  }
  const u = fe(s, {
    [`${s}-${l}`]: l,
    [`${s}-rtl`]: t === "rtl"
  }, i, c);
  return /* @__PURE__ */ x.createElement(pg.Provider, {
    value: o
  }, /* @__PURE__ */ x.createElement("div", Object.assign({}, a, {
    className: u
  })));
}, n0 = /^[\u4E00-\u9FA5]{2}$/, pu = n0.test.bind(n0);
function o0(e) {
  return typeof e == "string";
}
function ca(e) {
  return e === "text" || e === "link";
}
function c_(e, r) {
  if (e == null)
    return;
  const t = r ? " " : "";
  return typeof e != "string" && typeof e != "number" && o0(e.type) && pu(e.props.children) ? Si(e, {
    children: e.props.children.split("").join(t)
  }) : o0(e) ? pu(e) ? /* @__PURE__ */ Q.createElement("span", null, e.split("").join(t)) : /* @__PURE__ */ Q.createElement("span", null, e) : ag(e) ? /* @__PURE__ */ Q.createElement("span", null, e) : e;
}
function l_(e, r) {
  let t = !1;
  const n = [];
  return Q.Children.forEach(e, (o) => {
    const i = typeof o, a = i === "string" || i === "number";
    if (t && a) {
      const s = n.length - 1, c = n[s];
      n[s] = `${c}${o}`;
    } else
      n.push(o);
    t = a;
  }), Q.Children.map(n, (o) => c_(o, r));
}
["default", "primary", "danger"].concat(Re(Mn));
const xu = /* @__PURE__ */ Wr((e, r) => {
  const {
    className: t,
    style: n,
    children: o,
    prefixCls: i
  } = e, a = fe(`${i}-icon`, t);
  return /* @__PURE__ */ Q.createElement("span", {
    ref: r,
    className: a,
    style: n
  }, o);
}), i0 = /* @__PURE__ */ Wr((e, r) => {
  const {
    prefixCls: t,
    className: n,
    style: o,
    iconClassName: i
  } = e, a = fe(`${t}-loading-icon`, n);
  return /* @__PURE__ */ Q.createElement(xu, {
    prefixCls: t,
    className: a,
    style: o,
    ref: r
  }, /* @__PURE__ */ Q.createElement(uf, {
    className: i
  }));
}), Wc = () => ({
  width: 0,
  opacity: 0,
  transform: "scale(0)"
}), qc = (e) => ({
  width: e.scrollWidth,
  opacity: 1,
  transform: "scale(1)"
}), u_ = (e) => {
  const {
    prefixCls: r,
    loading: t,
    existIcon: n,
    className: o,
    style: i,
    mount: a
  } = e, s = !!t;
  return n ? /* @__PURE__ */ Q.createElement(i0, {
    prefixCls: r,
    className: o,
    style: i
  }) : /* @__PURE__ */ Q.createElement(wi, {
    visible: s,
    // Used for minus flex gap style only
    motionName: `${r}-loading-icon-motion`,
    motionAppear: !a,
    motionEnter: !a,
    motionLeave: !a,
    removeOnLeave: !0,
    onAppearStart: Wc,
    onAppearActive: qc,
    onEnterStart: Wc,
    onEnterActive: qc,
    onLeaveStart: qc,
    onLeaveActive: Wc
  }, (c, l) => {
    let {
      className: u,
      style: f
    } = c;
    const h = Object.assign(Object.assign({}, i), f);
    return /* @__PURE__ */ Q.createElement(i0, {
      prefixCls: r,
      className: fe(o, u),
      style: h,
      ref: l
    });
  });
}, a0 = (e, r) => ({
  // Border
  [`> span, > ${e}`]: {
    "&:not(:last-child)": {
      [`&, & > ${e}`]: {
        "&:not(:disabled)": {
          borderInlineEndColor: r
        }
      }
    },
    "&:not(:first-child)": {
      [`&, & > ${e}`]: {
        "&:not(:disabled)": {
          borderInlineStartColor: r
        }
      }
    }
  }
}), f_ = (e) => {
  const {
    componentCls: r,
    fontSize: t,
    lineWidth: n,
    groupBorderColor: o,
    colorErrorHover: i
  } = e;
  return {
    [`${r}-group`]: [
      {
        position: "relative",
        display: "inline-flex",
        // Border
        [`> span, > ${r}`]: {
          "&:not(:last-child)": {
            [`&, & > ${r}`]: {
              borderStartEndRadius: 0,
              borderEndEndRadius: 0
            }
          },
          "&:not(:first-child)": {
            marginInlineStart: e.calc(n).mul(-1).equal(),
            [`&, & > ${r}`]: {
              borderStartStartRadius: 0,
              borderEndStartRadius: 0
            }
          }
        },
        [r]: {
          position: "relative",
          zIndex: 1,
          "&:hover, &:focus, &:active": {
            zIndex: 2
          },
          "&[disabled]": {
            zIndex: 0
          }
        },
        [`${r}-icon-only`]: {
          fontSize: t
        }
      },
      // Border Color
      a0(`${r}-primary`, o),
      a0(`${r}-danger`, i)
    ]
  };
}, Bt = Math.round;
function Uc(e, r) {
  const t = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], n = t.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    n[o] = r(n[o] || 0, t[o] || "", o);
  return t[3] ? n[3] = t[3].includes("%") ? n[3] / 100 : n[3] : n[3] = 1, n;
}
const s0 = (e, r, t) => t === 0 ? e : e / 100;
function Ho(e, r) {
  const t = r || 255;
  return e > t ? t : e < 0 ? 0 : e;
}
class Us {
  constructor(r) {
    j(this, "isValid", !0), j(this, "r", 0), j(this, "g", 0), j(this, "b", 0), j(this, "a", 1), j(this, "_h", void 0), j(this, "_s", void 0), j(this, "_l", void 0), j(this, "_v", void 0), j(this, "_max", void 0), j(this, "_min", void 0), j(this, "_brightness", void 0);
    function t(n) {
      return n[0] in r && n[1] in r && n[2] in r;
    }
    if (r) if (typeof r == "string") {
      let o = function(i) {
        return n.startsWith(i);
      };
      const n = r.trim();
      /^#?[A-F\d]{3,8}$/i.test(n) ? this.fromHexString(n) : o("rgb") ? this.fromRgbString(n) : o("hsl") ? this.fromHslString(n) : (o("hsv") || o("hsb")) && this.fromHsvString(n);
    } else if (r instanceof Us)
      this.r = r.r, this.g = r.g, this.b = r.b, this.a = r.a, this._h = r._h, this._s = r._s, this._l = r._l, this._v = r._v;
    else if (t("rgb"))
      this.r = Ho(r.r), this.g = Ho(r.g), this.b = Ho(r.b), this.a = typeof r.a == "number" ? Ho(r.a, 1) : 1;
    else if (t("hsl"))
      this.fromHsl(r);
    else if (t("hsv"))
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
    const t = this.toHsv();
    return t.h = r, this._c(t);
  }
  // ======================= Getter =======================
  /**
   * Returns the perceived luminance of a color, from 0-1.
   * @see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
   */
  getLuminance() {
    function r(i) {
      const a = i / 255;
      return a <= 0.03928 ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4);
    }
    const t = r(this.r), n = r(this.g), o = r(this.b);
    return 0.2126 * t + 0.7152 * n + 0.0722 * o;
  }
  getHue() {
    if (typeof this._h > "u") {
      const r = this.getMax() - this.getMin();
      r === 0 ? this._h = 0 : this._h = Bt(60 * (this.r === this.getMax() ? (this.g - this.b) / r + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / r + 2 : (this.r - this.g) / r + 4));
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
    const t = this.getHue(), n = this.getSaturation();
    let o = this.getLightness() - r / 100;
    return o < 0 && (o = 0), this._c({
      h: t,
      s: n,
      l: o,
      a: this.a
    });
  }
  lighten(r = 10) {
    const t = this.getHue(), n = this.getSaturation();
    let o = this.getLightness() + r / 100;
    return o > 1 && (o = 1), this._c({
      h: t,
      s: n,
      l: o,
      a: this.a
    });
  }
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  mix(r, t = 50) {
    const n = this._c(r), o = t / 100, i = (s) => (n[s] - this[s]) * o + this[s], a = {
      r: Bt(i("r")),
      g: Bt(i("g")),
      b: Bt(i("b")),
      a: Bt(i("a") * 100) / 100
    };
    return this._c(a);
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
    const t = this._c(r), n = this.a + t.a * (1 - this.a), o = (i) => Bt((this[i] * this.a + t[i] * t.a * (1 - this.a)) / n);
    return this._c({
      r: o("r"),
      g: o("g"),
      b: o("b"),
      a: n
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
    const t = (this.r || 0).toString(16);
    r += t.length === 2 ? t : "0" + t;
    const n = (this.g || 0).toString(16);
    r += n.length === 2 ? n : "0" + n;
    const o = (this.b || 0).toString(16);
    if (r += o.length === 2 ? o : "0" + o, typeof this.a == "number" && this.a >= 0 && this.a < 1) {
      const i = Bt(this.a * 255).toString(16);
      r += i.length === 2 ? i : "0" + i;
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
    const r = this.getHue(), t = Bt(this.getSaturation() * 100), n = Bt(this.getLightness() * 100);
    return this.a !== 1 ? `hsla(${r},${t}%,${n}%,${this.a})` : `hsl(${r},${t}%,${n}%)`;
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
  _sc(r, t, n) {
    const o = this.clone();
    return o[r] = Ho(t, n), o;
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
    const t = r.replace("#", "");
    function n(o, i) {
      return parseInt(t[o] + t[i || o], 16);
    }
    t.length < 6 ? (this.r = n(0), this.g = n(1), this.b = n(2), this.a = t[3] ? n(3) / 255 : 1) : (this.r = n(0, 1), this.g = n(2, 3), this.b = n(4, 5), this.a = t[6] ? n(6, 7) / 255 : 1);
  }
  fromHsl({
    h: r,
    s: t,
    l: n,
    a: o
  }) {
    if (this._h = r % 360, this._s = t, this._l = n, this.a = typeof o == "number" ? o : 1, t <= 0) {
      const h = Bt(n * 255);
      this.r = h, this.g = h, this.b = h;
    }
    let i = 0, a = 0, s = 0;
    const c = r / 60, l = (1 - Math.abs(2 * n - 1)) * t, u = l * (1 - Math.abs(c % 2 - 1));
    c >= 0 && c < 1 ? (i = l, a = u) : c >= 1 && c < 2 ? (i = u, a = l) : c >= 2 && c < 3 ? (a = l, s = u) : c >= 3 && c < 4 ? (a = u, s = l) : c >= 4 && c < 5 ? (i = u, s = l) : c >= 5 && c < 6 && (i = l, s = u);
    const f = n - l / 2;
    this.r = Bt((i + f) * 255), this.g = Bt((a + f) * 255), this.b = Bt((s + f) * 255);
  }
  fromHsv({
    h: r,
    s: t,
    v: n,
    a: o
  }) {
    this._h = r % 360, this._s = t, this._v = n, this.a = typeof o == "number" ? o : 1;
    const i = Bt(n * 255);
    if (this.r = i, this.g = i, this.b = i, t <= 0)
      return;
    const a = r / 60, s = Math.floor(a), c = a - s, l = Bt(n * (1 - t) * 255), u = Bt(n * (1 - t * c) * 255), f = Bt(n * (1 - t * (1 - c)) * 255);
    switch (s) {
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
  fromHsvString(r) {
    const t = Uc(r, s0);
    this.fromHsv({
      h: t[0],
      s: t[1],
      v: t[2],
      a: t[3]
    });
  }
  fromHslString(r) {
    const t = Uc(r, s0);
    this.fromHsl({
      h: t[0],
      s: t[1],
      l: t[2],
      a: t[3]
    });
  }
  fromRgbString(r) {
    const t = Uc(r, (n, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? Bt(n / 100 * 255) : n
    ));
    this.r = t[0], this.g = t[1], this.b = t[2], this.a = t[3];
  }
}
var d_ = ["b"], h_ = ["v"], Gc = function(r) {
  return Math.round(Number(r || 0));
}, p_ = function(r) {
  if (r instanceof Us)
    return r;
  if (r && Ne(r) === "object" && "h" in r && "b" in r) {
    var t = r, n = t.b, o = Kt(t, d_);
    return q(q({}, o), {}, {
      v: n
    });
  }
  return typeof r == "string" && /hsb/.test(r) ? r.replace(/hsb/, "hsv") : r;
}, Zr = /* @__PURE__ */ function(e) {
  mn(t, e);
  var r = vn(t);
  function t(n) {
    return Ht(this, t), r.call(this, p_(n));
  }
  return Wt(t, [{
    key: "toHsbString",
    value: function() {
      var o = this.toHsb(), i = Gc(o.s * 100), a = Gc(o.b * 100), s = Gc(o.h), c = o.a, l = "hsb(".concat(s, ", ").concat(i, "%, ").concat(a, "%)"), u = "hsba(".concat(s, ", ").concat(i, "%, ").concat(a, "%, ").concat(c.toFixed(c === 0 ? 0 : 2), ")");
      return c === 1 ? l : u;
    }
  }, {
    key: "toHsb",
    value: function() {
      var o = this.toHsv(), i = o.v, a = Kt(o, h_);
      return q(q({}, a), {}, {
        b: i,
        a: this.a
      });
    }
  }]), t;
}(Us), x_ = "rc-color-picker", ro = function(r) {
  return r instanceof Zr ? r : new Zr(r);
}, g_ = ro("#1677ff"), xg = function(r) {
  var t = r.offset, n = r.targetRef, o = r.containerRef, i = r.color, a = r.type, s = o.current.getBoundingClientRect(), c = s.width, l = s.height, u = n.current.getBoundingClientRect(), f = u.width, h = u.height, m = f / 2, d = h / 2, g = (t.x + m) / c, p = 1 - (t.y + d) / l, y = i.toHsb(), b = g, S = (t.x + m) / c * 360;
  if (a)
    switch (a) {
      case "hue":
        return ro(q(q({}, y), {}, {
          h: S <= 0 ? 0 : S
        }));
      case "alpha":
        return ro(q(q({}, y), {}, {
          a: b <= 0 ? 0 : b
        }));
    }
  return ro({
    h: y.h,
    s: g <= 0 ? 0 : g,
    b: p >= 1 ? 1 : p,
    a: y.a
  });
}, gg = function(r, t) {
  var n = r.toHsb();
  switch (t) {
    case "hue":
      return {
        x: n.h / 360 * 100,
        y: 50
      };
    case "alpha":
      return {
        x: r.a * 100,
        y: 50
      };
    // Picker panel
    default:
      return {
        x: n.s * 100,
        y: (1 - n.b) * 100
      };
  }
}, m_ = function(r) {
  var t = r.color, n = r.prefixCls, o = r.className, i = r.style, a = r.onClick, s = "".concat(n, "-color-block");
  return /* @__PURE__ */ Q.createElement("div", {
    className: fe(s, o),
    style: i,
    onClick: a
  }, /* @__PURE__ */ Q.createElement("div", {
    className: "".concat(s, "-inner"),
    style: {
      background: t
    }
  }));
};
function v_(e) {
  var r = "touches" in e ? e.touches[0] : e, t = document.documentElement.scrollLeft || document.body.scrollLeft || window.pageXOffset, n = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
  return {
    pageX: r.pageX - t,
    pageY: r.pageY - n
  };
}
function mg(e) {
  var r = e.targetRef, t = e.containerRef, n = e.direction, o = e.onDragChange, i = e.onDragChangeComplete, a = e.calculate, s = e.color, c = e.disabledDrag, l = Mt({
    x: 0,
    y: 0
  }), u = ne(l, 2), f = u[0], h = u[1], m = Pe(null), d = Pe(null);
  ut(function() {
    h(a());
  }, [s]), ut(function() {
    return function() {
      document.removeEventListener("mousemove", m.current), document.removeEventListener("mouseup", d.current), document.removeEventListener("touchmove", m.current), document.removeEventListener("touchend", d.current), m.current = null, d.current = null;
    };
  }, []);
  var g = function(C) {
    var v = v_(C), _ = v.pageX, w = v.pageY, A = t.current.getBoundingClientRect(), M = A.x, k = A.y, V = A.width, U = A.height, L = r.current.getBoundingClientRect(), z = L.width, H = L.height, P = z / 2, I = H / 2, N = Math.max(0, Math.min(_ - M, V)) - P, B = Math.max(0, Math.min(w - k, U)) - I, W = {
      x: N,
      y: n === "x" ? f.y : B
    };
    if (z === 0 && H === 0 || z !== H)
      return !1;
    o == null || o(W);
  }, p = function(C) {
    C.preventDefault(), g(C);
  }, y = function(C) {
    C.preventDefault(), document.removeEventListener("mousemove", m.current), document.removeEventListener("mouseup", d.current), document.removeEventListener("touchmove", m.current), document.removeEventListener("touchend", d.current), m.current = null, d.current = null, i == null || i();
  }, b = function(C) {
    document.removeEventListener("mousemove", m.current), document.removeEventListener("mouseup", d.current), !c && (g(C), document.addEventListener("mousemove", p), document.addEventListener("mouseup", y), document.addEventListener("touchmove", p), document.addEventListener("touchend", y), m.current = p, d.current = y);
  };
  return [f, b];
}
var vg = function(r) {
  var t = r.size, n = t === void 0 ? "default" : t, o = r.color, i = r.prefixCls;
  return /* @__PURE__ */ Q.createElement("div", {
    className: fe("".concat(i, "-handler"), j({}, "".concat(i, "-handler-sm"), n === "small")),
    style: {
      backgroundColor: o
    }
  });
}, bg = function(r) {
  var t = r.children, n = r.style, o = r.prefixCls;
  return /* @__PURE__ */ Q.createElement("div", {
    className: "".concat(o, "-palette"),
    style: q({
      position: "relative"
    }, n)
  }, t);
}, yg = /* @__PURE__ */ Wr(function(e, r) {
  var t = e.children, n = e.x, o = e.y;
  return /* @__PURE__ */ Q.createElement("div", {
    ref: r,
    style: {
      position: "absolute",
      left: "".concat(n, "%"),
      top: "".concat(o, "%"),
      zIndex: 1,
      transform: "translate(-50%, -50%)"
    }
  }, t);
}), b_ = function(r) {
  var t = r.color, n = r.onChange, o = r.prefixCls, i = r.onChangeComplete, a = r.disabled, s = Pe(), c = Pe(), l = Pe(t), u = Ut(function(g) {
    var p = xg({
      offset: g,
      targetRef: c,
      containerRef: s,
      color: t
    });
    l.current = p, n(p);
  }), f = mg({
    color: t,
    containerRef: s,
    targetRef: c,
    calculate: function() {
      return gg(t);
    },
    onDragChange: u,
    onDragChangeComplete: function() {
      return i == null ? void 0 : i(l.current);
    },
    disabledDrag: a
  }), h = ne(f, 2), m = h[0], d = h[1];
  return /* @__PURE__ */ Q.createElement("div", {
    ref: s,
    className: "".concat(o, "-select"),
    onMouseDown: d,
    onTouchStart: d
  }, /* @__PURE__ */ Q.createElement(bg, {
    prefixCls: o
  }, /* @__PURE__ */ Q.createElement(yg, {
    x: m.x,
    y: m.y,
    ref: c
  }, /* @__PURE__ */ Q.createElement(vg, {
    color: t.toRgbString(),
    prefixCls: o
  })), /* @__PURE__ */ Q.createElement("div", {
    className: "".concat(o, "-saturation"),
    style: {
      backgroundColor: "hsl(".concat(t.toHsb().h, ",100%, 50%)"),
      backgroundImage: "linear-gradient(0deg, #000, transparent),linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0))"
    }
  })));
}, y_ = function(r, t) {
  var n = In(r, {
    value: t
  }), o = ne(n, 2), i = o[0], a = o[1], s = Nn(function() {
    return ro(i);
  }, [i]);
  return [s, a];
}, w_ = function(r) {
  var t = r.colors, n = r.children, o = r.direction, i = o === void 0 ? "to right" : o, a = r.type, s = r.prefixCls, c = Nn(function() {
    return t.map(function(l, u) {
      var f = ro(l);
      return a === "alpha" && u === t.length - 1 && (f = new Zr(f.setA(1))), f.toRgbString();
    }).join(",");
  }, [t, a]);
  return /* @__PURE__ */ Q.createElement("div", {
    className: "".concat(s, "-gradient"),
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(".concat(i, ", ").concat(c, ")")
    }
  }, n);
}, S_ = function(r) {
  var t = r.prefixCls, n = r.colors, o = r.disabled, i = r.onChange, a = r.onChangeComplete, s = r.color, c = r.type, l = Pe(), u = Pe(), f = Pe(s), h = function(v) {
    return c === "hue" ? v.getHue() : v.a * 100;
  }, m = Ut(function(C) {
    var v = xg({
      offset: C,
      targetRef: u,
      containerRef: l,
      color: s,
      type: c
    });
    f.current = v, i(h(v));
  }), d = mg({
    color: s,
    targetRef: u,
    containerRef: l,
    calculate: function() {
      return gg(s, c);
    },
    onDragChange: m,
    onDragChangeComplete: function() {
      a(h(f.current));
    },
    direction: "x",
    disabledDrag: o
  }), g = ne(d, 2), p = g[0], y = g[1], b = Q.useMemo(function() {
    if (c === "hue") {
      var C = s.toHsb();
      C.s = 1, C.b = 1, C.a = 1;
      var v = new Zr(C);
      return v;
    }
    return s;
  }, [s, c]), S = Q.useMemo(function() {
    return n.map(function(C) {
      return "".concat(C.color, " ").concat(C.percent, "%");
    });
  }, [n]);
  return /* @__PURE__ */ Q.createElement("div", {
    ref: l,
    className: fe("".concat(t, "-slider"), "".concat(t, "-slider-").concat(c)),
    onMouseDown: y,
    onTouchStart: y
  }, /* @__PURE__ */ Q.createElement(bg, {
    prefixCls: t
  }, /* @__PURE__ */ Q.createElement(yg, {
    x: p.x,
    y: p.y,
    ref: u
  }, /* @__PURE__ */ Q.createElement(vg, {
    size: "small",
    color: b.toHexString(),
    prefixCls: t
  })), /* @__PURE__ */ Q.createElement(w_, {
    colors: S,
    type: c,
    prefixCls: t
  })));
};
function __(e) {
  return x.useMemo(function() {
    var r = e || {}, t = r.slider;
    return [t || S_];
  }, [e]);
}
var C_ = [{
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
}], E_ = /* @__PURE__ */ Wr(function(e, r) {
  var t = e.value, n = e.defaultValue, o = e.prefixCls, i = o === void 0 ? x_ : o, a = e.onChange, s = e.onChangeComplete, c = e.className, l = e.style, u = e.panelRender, f = e.disabledAlpha, h = f === void 0 ? !1 : f, m = e.disabled, d = m === void 0 ? !1 : m, g = e.components, p = __(g), y = ne(p, 1), b = y[0], S = y_(n || g_, t), C = ne(S, 2), v = C[0], _ = C[1], w = Nn(function() {
    return v.setA(1).toRgbString();
  }, [v]), A = function(B, W) {
    t || _(B), a == null || a(B, W);
  }, M = function(B) {
    return new Zr(v.setHue(B));
  }, k = function(B) {
    return new Zr(v.setA(B / 100));
  }, V = function(B) {
    A(M(B), {
      type: "hue",
      value: B
    });
  }, U = function(B) {
    A(k(B), {
      type: "alpha",
      value: B
    });
  }, L = function(B) {
    s && s(M(B));
  }, z = function(B) {
    s && s(k(B));
  }, H = fe("".concat(i, "-panel"), c, j({}, "".concat(i, "-panel-disabled"), d)), P = {
    prefixCls: i,
    disabled: d,
    color: v
  }, I = /* @__PURE__ */ Q.createElement(Q.Fragment, null, /* @__PURE__ */ Q.createElement(b_, bt({
    onChange: A
  }, P, {
    onChangeComplete: s
  })), /* @__PURE__ */ Q.createElement("div", {
    className: "".concat(i, "-slider-container")
  }, /* @__PURE__ */ Q.createElement("div", {
    className: fe("".concat(i, "-slider-group"), j({}, "".concat(i, "-slider-group-disabled-alpha"), h))
  }, /* @__PURE__ */ Q.createElement(b, bt({}, P, {
    type: "hue",
    colors: C_,
    min: 0,
    max: 359,
    value: v.getHue(),
    onChange: V,
    onChangeComplete: L
  })), !h && /* @__PURE__ */ Q.createElement(b, bt({}, P, {
    type: "alpha",
    colors: [{
      percent: 0,
      color: "rgba(255, 0, 4, 0)"
    }, {
      percent: 100,
      color: w
    }],
    min: 0,
    max: 100,
    value: v.a * 100,
    onChange: U,
    onChangeComplete: z
  }))), /* @__PURE__ */ Q.createElement(m_, {
    color: v.toRgbString(),
    prefixCls: i
  })));
  return /* @__PURE__ */ Q.createElement("div", {
    className: H,
    style: l,
    ref: r
  }, typeof u == "function" ? u(I) : I);
});
process.env.NODE_ENV !== "production" && (E_.displayName = "ColorPicker");
const O_ = (e, r) => (e == null ? void 0 : e.replace(/[^\w/]/g, "").slice(0, r ? 8 : 6)) || "", R_ = (e, r) => e ? O_(e, r) : "";
let $_ = /* @__PURE__ */ function() {
  function e(r) {
    Ht(this, e);
    var t;
    if (this.cleared = !1, r instanceof e) {
      this.metaColor = r.metaColor.clone(), this.colors = (t = r.colors) === null || t === void 0 ? void 0 : t.map((o) => ({
        color: new e(o.color),
        percent: o.percent
      })), this.cleared = r.cleared;
      return;
    }
    const n = Array.isArray(r);
    n && r.length ? (this.colors = r.map((o) => {
      let {
        color: i,
        percent: a
      } = o;
      return {
        color: new e(i),
        percent: a
      };
    }), this.metaColor = new Zr(this.colors[0].color.metaColor)) : this.metaColor = new Zr(n ? "" : r), (!r || n && !this.colors) && (this.metaColor = this.metaColor.setA(0), this.cleared = !0);
  }
  return Wt(e, [{
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
      return R_(this.toHexString(), this.metaColor.a < 1);
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
      return !t || this.isGradient() !== t.isGradient() ? !1 : this.isGradient() ? this.colors.length === t.colors.length && this.colors.every((n, o) => {
        const i = t.colors[o];
        return n.percent === i.percent && n.color.equals(i.color);
      }) : this.toHexString() === t.toHexString();
    }
  }]);
}();
const T_ = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), P_ = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), N_ = function(e, r, t, n) {
  const i = (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1) ? "&" : "";
  return {
    [`
      ${i}${e}-enter,
      ${i}${e}-appear
    `]: Object.assign(Object.assign({}, T_(n)), {
      animationPlayState: "paused"
    }),
    [`${i}${e}-leave`]: Object.assign(Object.assign({}, P_(n)), {
      animationPlayState: "paused"
    }),
    [`
      ${i}${e}-enter${e}-enter-active,
      ${i}${e}-appear${e}-appear-active
    `]: {
      animationName: r,
      animationPlayState: "running"
    },
    [`${i}${e}-leave${e}-leave-active`]: {
      animationName: t,
      animationPlayState: "running",
      pointerEvents: "none"
    }
  };
}, A_ = new ar("antZoomIn", {
  "0%": {
    transform: "scale(0.2)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), I_ = new ar("antZoomOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.2)",
    opacity: 0
  }
}), c0 = new ar("antZoomBigIn", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), l0 = new ar("antZoomBigOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.8)",
    opacity: 0
  }
}), M_ = new ar("antZoomUpIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  }
}), F_ = new ar("antZoomUpOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  }
}), j_ = new ar("antZoomLeftIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  }
}), D_ = new ar("antZoomLeftOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  }
}), k_ = new ar("antZoomRightIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  }
}), L_ = new ar("antZoomRightOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  }
}), z_ = new ar("antZoomDownIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  }
}), B_ = new ar("antZoomDownOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  }
}), V_ = {
  zoom: {
    inKeyframes: A_,
    outKeyframes: I_
  },
  "zoom-big": {
    inKeyframes: c0,
    outKeyframes: l0
  },
  "zoom-big-fast": {
    inKeyframes: c0,
    outKeyframes: l0
  },
  "zoom-left": {
    inKeyframes: j_,
    outKeyframes: D_
  },
  "zoom-right": {
    inKeyframes: k_,
    outKeyframes: L_
  },
  "zoom-up": {
    inKeyframes: M_,
    outKeyframes: F_
  },
  "zoom-down": {
    inKeyframes: z_,
    outKeyframes: B_
  }
}, H_ = (e, r) => {
  const {
    antCls: t
  } = e, n = `${t}-${r}`, {
    inKeyframes: o,
    outKeyframes: i
  } = V_[r];
  return [N_(n, o, i, e.motionDurationFast), {
    [`
        ${n}-enter,
        ${n}-appear
      `]: {
      transform: "scale(0)",
      opacity: 0,
      animationTimingFunction: e.motionEaseOutCirc,
      "&-prepare": {
        transform: "none"
      }
    },
    [`${n}-leave`]: {
      animationTimingFunction: e.motionEaseInOutCirc
    }
  }];
}, W_ = (e, r) => {
  const {
    r: t,
    g: n,
    b: o,
    a: i
  } = e.toRgb(), a = new Zr(e.toRgbString()).onBackground(r).toHsv();
  return i <= 0.5 ? a.v > 0.5 : t * 0.299 + n * 0.587 + o * 0.114 > 192;
}, wg = (e) => {
  const {
    paddingInline: r,
    onlyIconSize: t
  } = e;
  return Yt(e, {
    buttonPaddingHorizontal: r,
    buttonPaddingVertical: 0,
    buttonIconOnlyFontSize: t
  });
}, Sg = (e) => {
  var r, t, n, o, i, a;
  const s = (r = e.contentFontSize) !== null && r !== void 0 ? r : e.fontSize, c = (t = e.contentFontSizeSM) !== null && t !== void 0 ? t : e.fontSize, l = (n = e.contentFontSizeLG) !== null && n !== void 0 ? n : e.fontSizeLG, u = (o = e.contentLineHeight) !== null && o !== void 0 ? o : Na(s), f = (i = e.contentLineHeightSM) !== null && i !== void 0 ? i : Na(c), h = (a = e.contentLineHeightLG) !== null && a !== void 0 ? a : Na(l), m = W_(new $_(e.colorBgSolid), "#fff") ? "#000" : "#fff", d = Mn.reduce((g, p) => Object.assign(Object.assign({}, g), {
    [`${p}ShadowColor`]: `0 ${ot(e.controlOutlineWidth)} 0 ${Xo(e[`${p}1`], e.colorBgContainer)}`
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
    contentFontSize: s,
    contentFontSizeSM: c,
    contentFontSizeLG: l,
    contentLineHeight: u,
    contentLineHeightSM: f,
    contentLineHeightLG: h,
    paddingBlock: Math.max((e.controlHeight - s * u) / 2 - e.lineWidth, 0),
    paddingBlockSM: Math.max((e.controlHeightSM - c * f) / 2 - e.lineWidth, 0),
    paddingBlockLG: Math.max((e.controlHeightLG - l * h) / 2 - e.lineWidth, 0)
  });
}, q_ = (e) => {
  const {
    componentCls: r,
    iconCls: t,
    fontWeight: n,
    opacityLoading: o,
    motionDurationSlow: i,
    motionEaseInOut: a,
    marginXS: s,
    calc: c
  } = e;
  return {
    [r]: {
      outline: "none",
      position: "relative",
      display: "inline-flex",
      gap: e.marginXS,
      alignItems: "center",
      justifyContent: "center",
      fontWeight: n,
      whiteSpace: "nowrap",
      textAlign: "center",
      backgroundImage: "none",
      background: "transparent",
      border: `${ot(e.lineWidth)} ${e.lineType} transparent`,
      cursor: "pointer",
      transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
      userSelect: "none",
      touchAction: "manipulation",
      color: e.colorText,
      "&:disabled > *": {
        pointerEvents: "none"
      },
      // https://github.com/ant-design/ant-design/issues/51380
      [`${r}-icon > svg`]: Lx(),
      "> a": {
        color: "currentColor"
      },
      "&:not(:disabled)": zx(e),
      [`&${r}-two-chinese-chars::first-letter`]: {
        letterSpacing: "0.34em"
      },
      [`&${r}-two-chinese-chars > *:not(${t})`]: {
        marginInlineEnd: "-0.34em",
        letterSpacing: "0.34em"
      },
      [`&${r}-icon-only`]: {
        paddingInline: 0,
        // make `btn-icon-only` not too narrow
        [`&${r}-compact-item`]: {
          flex: "none"
        },
        [`&${r}-round`]: {
          width: "auto"
        }
      },
      // Loading
      [`&${r}-loading`]: {
        opacity: o,
        cursor: "default"
      },
      [`${r}-loading-icon`]: {
        transition: ["width", "opacity", "margin"].map((l) => `${l} ${i} ${a}`).join(",")
      },
      // iconPosition
      [`&:not(${r}-icon-end)`]: {
        [`${r}-loading-icon-motion`]: {
          "&-appear-start, &-enter-start": {
            marginInlineEnd: c(s).mul(-1).equal()
          },
          "&-appear-active, &-enter-active": {
            marginInlineEnd: 0
          },
          "&-leave-start": {
            marginInlineEnd: 0
          },
          "&-leave-active": {
            marginInlineEnd: c(s).mul(-1).equal()
          }
        }
      },
      "&-icon-end": {
        flexDirection: "row-reverse",
        [`${r}-loading-icon-motion`]: {
          "&-appear-start, &-enter-start": {
            marginInlineStart: c(s).mul(-1).equal()
          },
          "&-appear-active, &-enter-active": {
            marginInlineStart: 0
          },
          "&-leave-start": {
            marginInlineStart: 0
          },
          "&-leave-active": {
            marginInlineStart: c(s).mul(-1).equal()
          }
        }
      }
    }
  };
}, _g = (e, r, t) => ({
  [`&:not(:disabled):not(${e}-disabled)`]: {
    "&:hover": r,
    "&:active": t
  }
}), U_ = (e) => ({
  minWidth: e.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
}), G_ = (e) => ({
  borderRadius: e.controlHeight,
  paddingInlineStart: e.calc(e.controlHeight).div(2).equal(),
  paddingInlineEnd: e.calc(e.controlHeight).div(2).equal()
}), K_ = (e) => ({
  cursor: "not-allowed",
  borderColor: e.borderColorDisabled,
  color: e.colorTextDisabled,
  background: e.colorBgContainerDisabled,
  boxShadow: "none"
}), Gs = (e, r, t, n, o, i, a, s) => ({
  [`&${e}-background-ghost`]: Object.assign(Object.assign({
    color: t || void 0,
    background: r,
    borderColor: n || void 0,
    boxShadow: "none"
  }, _g(e, Object.assign({
    background: r
  }, a), Object.assign({
    background: r
  }, s))), {
    "&:disabled": {
      cursor: "not-allowed",
      color: o || void 0,
      borderColor: i || void 0
    }
  })
}), X_ = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, K_(e))
}), Y_ = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: {
    cursor: "not-allowed",
    color: e.colorTextDisabled
  }
}), Ks = (e, r, t, n) => {
  const i = n && ["link", "text"].includes(n) ? Y_ : X_;
  return Object.assign(Object.assign({}, i(e)), _g(e.componentCls, r, t));
}, Xs = (e, r, t, n, o) => ({
  [`&${e.componentCls}-variant-solid`]: Object.assign({
    color: r,
    background: t
  }, Ks(e, n, o))
}), Ys = (e, r, t, n, o) => ({
  [`&${e.componentCls}-variant-outlined, &${e.componentCls}-variant-dashed`]: Object.assign({
    borderColor: r,
    background: t
  }, Ks(e, n, o))
}), Js = (e) => ({
  [`&${e.componentCls}-variant-dashed`]: {
    borderStyle: "dashed"
  }
}), Qs = (e, r, t, n) => ({
  [`&${e.componentCls}-variant-filled`]: Object.assign({
    boxShadow: "none",
    background: r
  }, Ks(e, t, n))
}), Hr = (e, r, t, n, o) => ({
  [`&${e.componentCls}-variant-${t}`]: Object.assign({
    color: r,
    boxShadow: "none"
  }, Ks(e, n, o, t))
}), J_ = (e) => {
  const {
    componentCls: r
  } = e;
  return Mn.reduce((t, n) => {
    const o = e[`${n}6`], i = e[`${n}1`], a = e[`${n}5`], s = e[`${n}2`], c = e[`${n}3`], l = e[`${n}7`];
    return Object.assign(Object.assign({}, t), {
      [`&${r}-color-${n}`]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
        color: o,
        boxShadow: e[`${n}ShadowColor`]
      }, Xs(e, e.colorTextLightSolid, o, {
        background: a
      }, {
        background: l
      })), Ys(e, o, e.colorBgContainer, {
        color: a,
        borderColor: a,
        background: e.colorBgContainer
      }, {
        color: l,
        borderColor: l,
        background: e.colorBgContainer
      })), Js(e)), Qs(e, i, {
        background: s
      }, {
        background: c
      })), Hr(e, o, "link", {
        color: a
      }, {
        color: l
      })), Hr(e, o, "text", {
        color: a,
        background: i
      }, {
        color: l,
        background: c
      }))
    });
  }, {});
}, Q_ = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.defaultColor,
  boxShadow: e.defaultShadow
}, Xs(e, e.solidTextColor, e.colorBgSolid, {
  color: e.solidTextColor,
  background: e.colorBgSolidHover
}, {
  color: e.solidTextColor,
  background: e.colorBgSolidActive
})), Js(e)), Qs(e, e.colorFillTertiary, {
  background: e.colorFillSecondary
}, {
  background: e.colorFill
})), Gs(e.componentCls, e.ghostBg, e.defaultGhostColor, e.defaultGhostBorderColor, e.colorTextDisabled, e.colorBorder)), Hr(e, e.textTextColor, "link", {
  color: e.colorLinkHover,
  background: e.linkHoverBg
}, {
  color: e.colorLinkActive
})), Z_ = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.colorPrimary,
  boxShadow: e.primaryShadow
}, Ys(e, e.colorPrimary, e.colorBgContainer, {
  color: e.colorPrimaryTextHover,
  borderColor: e.colorPrimaryHover,
  background: e.colorBgContainer
}, {
  color: e.colorPrimaryTextActive,
  borderColor: e.colorPrimaryActive,
  background: e.colorBgContainer
})), Js(e)), Qs(e, e.colorPrimaryBg, {
  background: e.colorPrimaryBgHover
}, {
  background: e.colorPrimaryBorder
})), Hr(e, e.colorPrimaryText, "text", {
  color: e.colorPrimaryTextHover,
  background: e.colorPrimaryBg
}, {
  color: e.colorPrimaryTextActive,
  background: e.colorPrimaryBorder
})), Hr(e, e.colorPrimaryText, "link", {
  color: e.colorPrimaryTextHover,
  background: e.linkHoverBg
}, {
  color: e.colorPrimaryTextActive
})), Gs(e.componentCls, e.ghostBg, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), eC = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.colorError,
  boxShadow: e.dangerShadow
}, Xs(e, e.dangerColor, e.colorError, {
  background: e.colorErrorHover
}, {
  background: e.colorErrorActive
})), Ys(e, e.colorError, e.colorBgContainer, {
  color: e.colorErrorHover,
  borderColor: e.colorErrorBorderHover
}, {
  color: e.colorErrorActive,
  borderColor: e.colorErrorActive
})), Js(e)), Qs(e, e.colorErrorBg, {
  background: e.colorErrorBgFilledHover
}, {
  background: e.colorErrorBgActive
})), Hr(e, e.colorError, "text", {
  color: e.colorErrorHover,
  background: e.colorErrorBg
}, {
  color: e.colorErrorHover,
  background: e.colorErrorBgActive
})), Hr(e, e.colorError, "link", {
  color: e.colorErrorHover
}, {
  color: e.colorErrorActive
})), Gs(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
  color: e.colorErrorHover,
  borderColor: e.colorErrorHover
}, {
  color: e.colorErrorActive,
  borderColor: e.colorErrorActive
})), tC = (e) => Object.assign(Object.assign({}, Hr(e, e.colorLink, "link", {
  color: e.colorLinkHover
}, {
  color: e.colorLinkActive
})), Gs(e.componentCls, e.ghostBg, e.colorInfo, e.colorInfo, e.colorTextDisabled, e.colorBorder, {
  color: e.colorInfoHover,
  borderColor: e.colorInfoHover
}, {
  color: e.colorInfoActive,
  borderColor: e.colorInfoActive
})), rC = (e) => {
  const {
    componentCls: r
  } = e;
  return Object.assign({
    [`${r}-color-default`]: Q_(e),
    [`${r}-color-primary`]: Z_(e),
    [`${r}-color-dangerous`]: eC(e),
    [`${r}-color-link`]: tC(e)
  }, J_(e));
}, nC = (e) => Object.assign(Object.assign(Object.assign(Object.assign({}, Ys(e, e.defaultBorderColor, e.defaultBg, {
  color: e.defaultHoverColor,
  borderColor: e.defaultHoverBorderColor,
  background: e.defaultHoverBg
}, {
  color: e.defaultActiveColor,
  borderColor: e.defaultActiveBorderColor,
  background: e.defaultActiveBg
})), Hr(e, e.textTextColor, "text", {
  color: e.textTextHoverColor,
  background: e.textHoverBg
}, {
  color: e.textTextActiveColor,
  background: e.colorBgTextActive
})), Xs(e, e.primaryColor, e.colorPrimary, {
  background: e.colorPrimaryHover,
  color: e.primaryColor
}, {
  background: e.colorPrimaryActive,
  color: e.primaryColor
})), Hr(e, e.colorLink, "link", {
  color: e.colorLinkHover,
  background: e.linkHoverBg
}, {
  color: e.colorLinkActive
})), hf = function(e) {
  let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  const {
    componentCls: t,
    controlHeight: n,
    fontSize: o,
    borderRadius: i,
    buttonPaddingHorizontal: a,
    iconCls: s,
    buttonPaddingVertical: c,
    buttonIconOnlyFontSize: l
  } = e;
  return [
    {
      [r]: {
        fontSize: o,
        height: n,
        padding: `${ot(c)} ${ot(a)}`,
        borderRadius: i,
        [`&${t}-icon-only`]: {
          width: n,
          [s]: {
            fontSize: l
          }
        }
      }
    },
    // Shape - patch prefixCls again to override solid border radius style
    {
      [`${t}${t}-circle${r}`]: U_(e)
    },
    {
      [`${t}${t}-round${r}`]: G_(e)
    }
  ];
}, oC = (e) => {
  const r = Yt(e, {
    fontSize: e.contentFontSize
  });
  return hf(r, e.componentCls);
}, iC = (e) => {
  const r = Yt(e, {
    controlHeight: e.controlHeightSM,
    fontSize: e.contentFontSizeSM,
    padding: e.paddingXS,
    buttonPaddingHorizontal: e.paddingInlineSM,
    buttonPaddingVertical: 0,
    borderRadius: e.borderRadiusSM,
    buttonIconOnlyFontSize: e.onlyIconSizeSM
  });
  return hf(r, `${e.componentCls}-sm`);
}, aC = (e) => {
  const r = Yt(e, {
    controlHeight: e.controlHeightLG,
    fontSize: e.contentFontSizeLG,
    buttonPaddingHorizontal: e.paddingInlineLG,
    buttonPaddingVertical: 0,
    borderRadius: e.borderRadiusLG,
    buttonIconOnlyFontSize: e.onlyIconSizeLG
  });
  return hf(r, `${e.componentCls}-lg`);
}, sC = (e) => {
  const {
    componentCls: r
  } = e;
  return {
    [r]: {
      [`&${r}-block`]: {
        width: "100%"
      }
    }
  };
}, cC = en("Button", (e) => {
  const r = wg(e);
  return [
    // Shared
    q_(r),
    // Size
    oC(r),
    iC(r),
    aC(r),
    // Block
    sC(r),
    // Color
    rC(r),
    // https://github.com/ant-design/ant-design/issues/50969
    nC(r),
    // Button Group
    f_(r)
  ];
}, Sg, {
  unitless: {
    fontWeight: !0,
    contentLineHeight: !0,
    contentLineHeightSM: !0,
    contentLineHeightLG: !0
  }
});
function lC(e, r, t) {
  const {
    focusElCls: n,
    focus: o,
    borderElCls: i
  } = t, a = i ? "> *" : "", s = ["hover", o ? "focus" : null, "active"].filter(Boolean).map((c) => `&:${c} ${a}`).join(",");
  return {
    [`&-item:not(${r}-last-item)`]: {
      marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal()
    },
    "&-item": Object.assign(Object.assign({
      [s]: {
        zIndex: 2
      }
    }, n ? {
      [`&${n}`]: {
        zIndex: 2
      }
    } : {}), {
      [`&[disabled] ${a}`]: {
        zIndex: 0
      }
    })
  };
}
function uC(e, r, t) {
  const {
    borderElCls: n
  } = t, o = n ? `> ${n}` : "";
  return {
    [`&-item:not(${r}-first-item):not(${r}-last-item) ${o}`]: {
      borderRadius: 0
    },
    [`&-item:not(${r}-last-item)${r}-first-item`]: {
      [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${r}-first-item)${r}-last-item`]: {
      [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function Cg(e) {
  let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: !0
  };
  const {
    componentCls: t
  } = e, n = `${t}-compact`;
  return {
    [n]: Object.assign(Object.assign({}, lC(e, n, r)), uC(t, n, r))
  };
}
function fC(e, r) {
  return {
    // border collapse
    [`&-item:not(${r}-last-item)`]: {
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
function dC(e, r) {
  return {
    [`&-item:not(${r}-first-item):not(${r}-last-item)`]: {
      borderRadius: 0
    },
    [`&-item${r}-first-item:not(${r}-last-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&-item${r}-last-item:not(${r}-first-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0
      }
    }
  };
}
function hC(e) {
  const r = `${e.componentCls}-compact-vertical`;
  return {
    [r]: Object.assign(Object.assign({}, fC(e, r)), dC(e.componentCls, r))
  };
}
const pC = (e) => {
  const {
    componentCls: r,
    colorPrimaryHover: t,
    lineWidth: n,
    calc: o
  } = e, i = o(n).mul(-1).equal(), a = (s) => {
    const c = `${r}-compact${s ? "-vertical" : ""}-item${r}-primary:not([disabled])`;
    return {
      [`${c} + ${c}::before`]: {
        position: "absolute",
        top: s ? i : 0,
        insetInlineStart: s ? 0 : i,
        backgroundColor: t,
        content: '""',
        width: s ? "100%" : n,
        height: s ? n : "100%"
      }
    };
  };
  return Object.assign(Object.assign({}, a()), a(!0));
}, xC = Mw(["Button", "compact"], (e) => {
  const r = wg(e);
  return [
    // Space Compact
    Cg(r),
    hC(r),
    pC(r)
  ];
}, Sg);
var gC = function(e, r) {
  var t = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    r.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (t[n[o]] = e[n[o]]);
  return t;
};
function mC(e) {
  if (typeof e == "object" && e) {
    let r = e == null ? void 0 : e.delay;
    return r = !Number.isNaN(r) && typeof r == "number" ? r : 0, {
      loading: r <= 0,
      delay: r
    };
  }
  return {
    loading: !!e,
    delay: 0
  };
}
const vC = {
  default: ["default", "outlined"],
  primary: ["primary", "solid"],
  dashed: ["default", "dashed"],
  // `link` is not a real color but we should compatible with it
  link: ["link", "link"],
  text: ["default", "text"]
}, bC = /* @__PURE__ */ Q.forwardRef((e, r) => {
  var t, n;
  const {
    loading: o = !1,
    prefixCls: i,
    color: a,
    variant: s,
    type: c,
    danger: l = !1,
    shape: u = "default",
    size: f,
    styles: h,
    disabled: m,
    className: d,
    rootClassName: g,
    children: p,
    icon: y,
    iconPosition: b = "start",
    ghost: S = !1,
    block: C = !1,
    // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    htmlType: v = "button",
    classNames: _,
    style: w = {},
    autoInsertSpace: A,
    autoFocus: M
  } = e, k = gC(e, ["loading", "prefixCls", "color", "variant", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "iconPosition", "ghost", "block", "htmlType", "classNames", "style", "autoInsertSpace", "autoFocus"]), V = c || "default", [U, L] = Nn(() => {
    if (a && s)
      return [a, s];
    const Oe = vC[V] || [];
    return l ? ["danger", Oe[1]] : Oe;
  }, [c, a, s, l]), H = U === "danger" ? "dangerous" : U, {
    getPrefixCls: P,
    direction: I,
    autoInsertSpace: N,
    className: B,
    style: W,
    classNames: Y,
    styles: X
  } = kn("button"), Z = (t = A ?? N) !== null && t !== void 0 ? t : !0, G = P("btn", i), [te, ie, de] = cC(G), pe = ir(mo), xe = m ?? pe, we = ir(pg), ae = Nn(() => mC(o), [o]), [se, _e] = Mt(ae.loading), [re, me] = Mt(!1), ce = Pe(null), ve = Fs(r, ce), Se = Gm.count(p) === 1 && !y && !ca(L), ye = Pe(!0);
  Q.useEffect(() => (ye.current = !1, () => {
    ye.current = !0;
  }), []), ut(() => {
    let Oe = null;
    ae.delay > 0 ? Oe = setTimeout(() => {
      Oe = null, _e(!0);
    }, ae.delay) : _e(ae.loading);
    function he() {
      Oe && (clearTimeout(Oe), Oe = null);
    }
    return he;
  }, [ae]), ut(() => {
    if (!ce.current || !Z)
      return;
    const Oe = ce.current.textContent || "";
    Se && pu(Oe) ? re || me(!0) : re && me(!1);
  }), ut(() => {
    M && ce.current && ce.current.focus();
  }, []);
  const Ve = Q.useCallback((Oe) => {
    var he;
    if (se || xe) {
      Oe.preventDefault();
      return;
    }
    (he = e.onClick) === null || he === void 0 || he.call(e, ("href" in e, Oe));
  }, [e.onClick, se, xe]);
  if (process.env.NODE_ENV !== "production") {
    const Oe = Xt("Button");
    process.env.NODE_ENV !== "production" && Oe(!(typeof y == "string" && y.length > 2), "breaking", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${y}\` at https://ant.design/components/icon`), process.env.NODE_ENV !== "production" && Oe(!(S && ca(L)), "usage", "`link` or `text` button can't be a `ghost` button.");
  }
  const {
    compactSize: $e,
    compactItemClassnames: $
  } = df(G, I), O = {
    large: "lg",
    small: "sm",
    middle: void 0
  }, E = Ws((Oe) => {
    var he, Ee;
    return (Ee = (he = f ?? $e) !== null && he !== void 0 ? he : we) !== null && Ee !== void 0 ? Ee : Oe;
  }), F = E && (n = O[E]) !== null && n !== void 0 ? n : "", T = se ? "loading" : y, ge = Ci(k, ["navigate"]), Be = fe(G, ie, de, {
    [`${G}-${u}`]: u !== "default" && u,
    // line(253 - 254): Compatible with versions earlier than 5.21.0
    [`${G}-${V}`]: V,
    [`${G}-dangerous`]: l,
    [`${G}-color-${H}`]: H,
    [`${G}-variant-${L}`]: L,
    [`${G}-${F}`]: F,
    [`${G}-icon-only`]: !p && p !== 0 && !!T,
    [`${G}-background-ghost`]: S && !ca(L),
    [`${G}-loading`]: se,
    [`${G}-two-chinese-chars`]: re && Z && !se,
    [`${G}-block`]: C,
    [`${G}-rtl`]: I === "rtl",
    [`${G}-icon-end`]: b === "end"
  }, $, d, g, B), We = Object.assign(Object.assign({}, W), w), Le = fe(_ == null ? void 0 : _.icon, Y.icon), Ze = Object.assign(Object.assign({}, (h == null ? void 0 : h.icon) || {}), X.icon || {}), Fe = y && !se ? /* @__PURE__ */ Q.createElement(xu, {
    prefixCls: G,
    className: Le,
    style: Ze
  }, y) : o && typeof o == "object" && o.icon ? /* @__PURE__ */ Q.createElement(xu, {
    prefixCls: G,
    className: Le,
    style: Ze
  }, o.icon) : /* @__PURE__ */ Q.createElement(u_, {
    existIcon: !!y,
    prefixCls: G,
    loading: se,
    mount: ye.current
  }), ze = p || p === 0 ? l_(p, Se && Z) : null;
  if (ge.href !== void 0)
    return te(/* @__PURE__ */ Q.createElement("a", Object.assign({}, ge, {
      className: fe(Be, {
        [`${G}-disabled`]: xe
      }),
      href: xe ? void 0 : ge.href,
      style: We,
      onClick: Ve,
      ref: ve,
      tabIndex: xe ? -1 : 0
    }), Fe, ze));
  let le = /* @__PURE__ */ Q.createElement("button", Object.assign({}, k, {
    type: v,
    className: Be,
    style: We,
    onClick: Ve,
    disabled: xe,
    ref: ve
  }), Fe, ze, $ && /* @__PURE__ */ Q.createElement(xC, {
    prefixCls: G
  }));
  return ca(L) || (le = /* @__PURE__ */ Q.createElement(fg, {
    component: "Button",
    disabled: se
  }, le)), te(le);
}), Zs = bC;
Zs.Group = s_;
Zs.__ANT_BUTTON = !0;
process.env.NODE_ENV !== "production" && (Zs.displayName = "Button");
var Eg = /* @__PURE__ */ x.createContext(null), u0 = [];
function yC(e, r) {
  var t = x.useState(function() {
    if (!Zt())
      return null;
    var d = document.createElement("div");
    return process.env.NODE_ENV !== "production" && r && d.setAttribute("data-debug", r), d;
  }), n = ne(t, 1), o = n[0], i = x.useRef(!1), a = x.useContext(Eg), s = x.useState(u0), c = ne(s, 2), l = c[0], u = c[1], f = a || (i.current ? void 0 : function(d) {
    u(function(g) {
      var p = [d].concat(Re(g));
      return p;
    });
  });
  function h() {
    o.parentElement || document.body.appendChild(o), i.current = !0;
  }
  function m() {
    var d;
    (d = o.parentElement) === null || d === void 0 || d.removeChild(o), i.current = !1;
  }
  return St(function() {
    return e ? a ? a(h) : h() : m(), m;
  }, [e]), St(function() {
    l.length && (l.forEach(function(d) {
      return d();
    }), u(u0));
  }, [l]), [o, f];
}
function wC(e) {
  var r = "rc-scrollbar-measure-".concat(Math.random().toString(36).substring(7)), t = document.createElement("div");
  t.id = r;
  var n = t.style;
  n.position = "absolute", n.left = "0", n.top = "0", n.width = "100px", n.height = "100px", n.overflow = "scroll";
  var o, i;
  if (e) {
    var a = getComputedStyle(e);
    n.scrollbarColor = a.scrollbarColor, n.scrollbarWidth = a.scrollbarWidth;
    var s = getComputedStyle(e, "::-webkit-scrollbar"), c = parseInt(s.width, 10), l = parseInt(s.height, 10);
    try {
      var u = c ? "width: ".concat(s.width, ";") : "", f = l ? "height: ".concat(s.height, ";") : "";
      Jr(`
#`.concat(r, `::-webkit-scrollbar {
`).concat(u, `
`).concat(f, `
}`), r);
    } catch (d) {
      console.error(d), o = c, i = l;
    }
  }
  document.body.appendChild(t);
  var h = e && o && !isNaN(o) ? o : t.offsetWidth - t.clientWidth, m = e && i && !isNaN(i) ? i : t.offsetHeight - t.clientHeight;
  return document.body.removeChild(t), si(r), {
    width: h,
    height: m
  };
}
function SC(e) {
  return typeof document > "u" || !e || !(e instanceof Element) ? {
    width: 0,
    height: 0
  } : wC(e);
}
function _C() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
var CC = "rc-util-locker-".concat(Date.now()), f0 = 0;
function EC(e) {
  var r = !!e, t = x.useState(function() {
    return f0 += 1, "".concat(CC, "_").concat(f0);
  }), n = ne(t, 1), o = n[0];
  St(function() {
    if (r) {
      var i = SC(document.body).width, a = _C();
      Jr(`
html body {
  overflow-y: hidden;
  `.concat(a ? "width: calc(100% - ".concat(i, "px);") : "", `
}`), o);
    } else
      si(o);
    return function() {
      si(o);
    };
  }, [r, o]);
}
var OC = !1;
function RC(e) {
  return OC;
}
var d0 = function(r) {
  return r === !1 ? !1 : !Zt() || !r ? null : typeof r == "string" ? document.querySelector(r) : typeof r == "function" ? r() : r;
}, pf = /* @__PURE__ */ x.forwardRef(function(e, r) {
  var t = e.open, n = e.autoLock, o = e.getContainer, i = e.debug, a = e.autoDestroy, s = a === void 0 ? !0 : a, c = e.children, l = x.useState(t), u = ne(l, 2), f = u[0], h = u[1], m = f || t;
  process.env.NODE_ENV !== "production" && _t(Zt() || !t, "Portal only work in client side. Please call 'useEffect' to show Portal instead default render in SSR."), x.useEffect(function() {
    (s || t) && h(t);
  }, [t, s]);
  var d = x.useState(function() {
    return d0(o);
  }), g = ne(d, 2), p = g[0], y = g[1];
  x.useEffect(function() {
    var U = d0(o);
    y(U ?? null);
  });
  var b = yC(m && !p, i), S = ne(b, 2), C = S[0], v = S[1], _ = p ?? C;
  EC(n && t && Zt() && (_ === C || _ === document.body));
  var w = null;
  if (c && vi(c) && r) {
    var A = c;
    w = A.ref;
  }
  var M = Fs(w, r);
  if (!m || !Zt() || p === void 0)
    return null;
  var k = _ === !1 || RC(), V = c;
  return r && (V = /* @__PURE__ */ x.cloneElement(c, {
    ref: M
  })), /* @__PURE__ */ x.createElement(Eg.Provider, {
    value: v
  }, k ? V : /* @__PURE__ */ Xm(V, _));
});
process.env.NODE_ENV !== "production" && (pf.displayName = "Portal");
function $C() {
  var e = q({}, x);
  return e.useId;
}
var h0 = 0, p0 = $C();
const Og = p0 ? (
  // Use React `useId`
  function(r) {
    var t = p0();
    return r || (process.env.NODE_ENV === "test" ? "test-id" : t);
  }
) : (
  // Use compatible of `useId`
  function(r) {
    var t = x.useState("ssr-id"), n = ne(t, 2), o = n[0], i = n[1];
    return x.useEffect(function() {
      var a = h0;
      h0 += 1, i("rc_unique_".concat(a));
    }, []), r || (process.env.NODE_ENV === "test" ? "test-id" : o);
  }
);
var En = "RC_FORM_INTERNAL_HOOKS", ht = function() {
  _t(!1, "Can not find FormContext. Please make sure you wrap Field under Form.");
}, bo = /* @__PURE__ */ x.createContext({
  getFieldValue: ht,
  getFieldsValue: ht,
  getFieldError: ht,
  getFieldWarning: ht,
  getFieldsError: ht,
  isFieldsTouched: ht,
  isFieldTouched: ht,
  isFieldValidating: ht,
  isFieldsValidating: ht,
  resetFields: ht,
  setFields: ht,
  setFieldValue: ht,
  setFieldsValue: ht,
  validateFields: ht,
  submit: ht,
  getInternalHooks: function() {
    return ht(), {
      dispatch: ht,
      initEntityValue: ht,
      registerField: ht,
      useSubscribe: ht,
      setInitialValues: ht,
      destroyForm: ht,
      setCallbacks: ht,
      registerWatch: ht,
      getFields: ht,
      setValidateMessages: ht,
      setPreserve: ht,
      getInitialValue: ht
    };
  }
}), Ya = /* @__PURE__ */ x.createContext(null);
function gu(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function TC(e) {
  return e && !!e._init;
}
function mu() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function() {
      var r = JSON.parse(JSON.stringify(this));
      return r.clone = this.clone, r;
    }
  };
}
var vu = mu();
function PC(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function NC(e, r, t) {
  if (Ju()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, r);
  var o = new (e.bind.apply(e, n))();
  return t && oi(o, t.prototype), o;
}
function bu(e) {
  var r = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return bu = function(n) {
    if (n === null || !PC(n)) return n;
    if (typeof n != "function") throw new TypeError("Super expression must either be null or a function");
    if (r !== void 0) {
      if (r.has(n)) return r.get(n);
      r.set(n, o);
    }
    function o() {
      return NC(n, arguments, ii(this).constructor);
    }
    return o.prototype = Object.create(n.prototype, {
      constructor: {
        value: o,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), oi(o, n);
  }, bu(e);
}
var AC = /%[sdj%]/g, Rg = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (Rg = function(r, t) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && t.every(function(n) {
    return typeof n == "string";
  }) && console.warn(r, t);
});
function yu(e) {
  if (!e || !e.length) return null;
  var r = {};
  return e.forEach(function(t) {
    var n = t.field;
    r[n] = r[n] || [], r[n].push(t);
  }), r;
}
function fr(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  var o = 0, i = t.length;
  if (typeof e == "function")
    return e.apply(null, t);
  if (typeof e == "string") {
    var a = e.replace(AC, function(s) {
      if (s === "%%")
        return "%";
      if (o >= i)
        return s;
      switch (s) {
        case "%s":
          return String(t[o++]);
        case "%d":
          return Number(t[o++]);
        case "%j":
          try {
            return JSON.stringify(t[o++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return s;
      }
    });
    return a;
  }
  return e;
}
function IC(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function jt(e, r) {
  return !!(e == null || r === "array" && Array.isArray(e) && !e.length || IC(r) && typeof e == "string" && !e);
}
function MC(e, r, t) {
  var n = [], o = 0, i = e.length;
  function a(s) {
    n.push.apply(n, Re(s || [])), o++, o === i && t(n);
  }
  e.forEach(function(s) {
    r(s, a);
  });
}
function x0(e, r, t) {
  var n = 0, o = e.length;
  function i(a) {
    if (a && a.length) {
      t(a);
      return;
    }
    var s = n;
    n = n + 1, s < o ? r(e[s], i) : t([]);
  }
  i([]);
}
function FC(e) {
  var r = [];
  return Object.keys(e).forEach(function(t) {
    r.push.apply(r, Re(e[t] || []));
  }), r;
}
var g0 = /* @__PURE__ */ function(e) {
  mn(t, e);
  var r = vn(t);
  function t(n, o) {
    var i;
    return Ht(this, t), i = r.call(this, "Async Validation Error"), j(Ye(i), "errors", void 0), j(Ye(i), "fields", void 0), i.errors = n, i.fields = o, i;
  }
  return Wt(t);
}(/* @__PURE__ */ bu(Error));
function jC(e, r, t, n, o) {
  if (r.first) {
    var i = new Promise(function(h, m) {
      var d = function(y) {
        return n(y), y.length ? m(new g0(y, yu(y))) : h(o);
      }, g = FC(e);
      x0(g, t, d);
    });
    return i.catch(function(h) {
      return h;
    }), i;
  }
  var a = r.firstFields === !0 ? Object.keys(e) : r.firstFields || [], s = Object.keys(e), c = s.length, l = 0, u = [], f = new Promise(function(h, m) {
    var d = function(p) {
      if (u.push.apply(u, p), l++, l === c)
        return n(u), u.length ? m(new g0(u, yu(u))) : h(o);
    };
    s.length || (n(u), h(o)), s.forEach(function(g) {
      var p = e[g];
      a.indexOf(g) !== -1 ? x0(p, t, d) : MC(p, t, d);
    });
  });
  return f.catch(function(h) {
    return h;
  }), f;
}
function DC(e) {
  return !!(e && e.message !== void 0);
}
function kC(e, r) {
  for (var t = e, n = 0; n < r.length; n++) {
    if (t == null)
      return t;
    t = t[r[n]];
  }
  return t;
}
function m0(e, r) {
  return function(t) {
    var n;
    return e.fullFields ? n = kC(r, e.fullFields) : n = r[t.field || e.fullField], DC(t) ? (t.field = t.field || e.fullField, t.fieldValue = n, t) : {
      message: typeof t == "function" ? t() : t,
      fieldValue: n,
      field: t.field || e.fullField
    };
  };
}
function v0(e, r) {
  if (r) {
    for (var t in r)
      if (r.hasOwnProperty(t)) {
        var n = r[t];
        Ne(n) === "object" && Ne(e[t]) === "object" ? e[t] = q(q({}, e[t]), n) : e[t] = n;
      }
  }
  return e;
}
var Gn = "enum", LC = function(r, t, n, o, i) {
  r[Gn] = Array.isArray(r[Gn]) ? r[Gn] : [], r[Gn].indexOf(t) === -1 && o.push(fr(i.messages[Gn], r.fullField, r[Gn].join(", ")));
}, zC = function(r, t, n, o, i) {
  if (r.pattern) {
    if (r.pattern instanceof RegExp)
      r.pattern.lastIndex = 0, r.pattern.test(t) || o.push(fr(i.messages.pattern.mismatch, r.fullField, t, r.pattern));
    else if (typeof r.pattern == "string") {
      var a = new RegExp(r.pattern);
      a.test(t) || o.push(fr(i.messages.pattern.mismatch, r.fullField, t, r.pattern));
    }
  }
}, BC = function(r, t, n, o, i) {
  var a = typeof r.len == "number", s = typeof r.min == "number", c = typeof r.max == "number", l = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, u = t, f = null, h = typeof t == "number", m = typeof t == "string", d = Array.isArray(t);
  if (h ? f = "number" : m ? f = "string" : d && (f = "array"), !f)
    return !1;
  d && (u = t.length), m && (u = t.replace(l, "_").length), a ? u !== r.len && o.push(fr(i.messages[f].len, r.fullField, r.len)) : s && !c && u < r.min ? o.push(fr(i.messages[f].min, r.fullField, r.min)) : c && !s && u > r.max ? o.push(fr(i.messages[f].max, r.fullField, r.max)) : s && c && (u < r.min || u > r.max) && o.push(fr(i.messages[f].range, r.fullField, r.min, r.max));
}, $g = function(r, t, n, o, i, a) {
  r.required && (!n.hasOwnProperty(r.field) || jt(t, a || r.type)) && o.push(fr(i.messages.required, r.fullField));
}, la;
const VC = function() {
  if (la)
    return la;
  var e = "[a-fA-F\\d:]", r = function(_) {
    return _ && _.includeBoundaries ? "(?:(?<=\\s|^)(?=".concat(e, ")|(?<=").concat(e, ")(?=\\s|$))") : "";
  }, t = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", n = "[a-fA-F\\d]{1,4}", o = [
    "(?:".concat(n, ":){7}(?:").concat(n, "|:)"),
    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
    "(?:".concat(n, ":){6}(?:").concat(t, "|:").concat(n, "|:)"),
    // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::
    "(?:".concat(n, ":){5}(?::").concat(t, "|(?::").concat(n, "){1,2}|:)"),
    // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::
    "(?:".concat(n, ":){4}(?:(?::").concat(n, "){0,1}:").concat(t, "|(?::").concat(n, "){1,3}|:)"),
    // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::
    "(?:".concat(n, ":){3}(?:(?::").concat(n, "){0,2}:").concat(t, "|(?::").concat(n, "){1,4}|:)"),
    // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::
    "(?:".concat(n, ":){2}(?:(?::").concat(n, "){0,3}:").concat(t, "|(?::").concat(n, "){1,5}|:)"),
    // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::
    "(?:".concat(n, ":){1}(?:(?::").concat(n, "){0,4}:").concat(t, "|(?::").concat(n, "){1,6}|:)"),
    // 1::              1::3:4:5:6:7:8   1::8            1::
    "(?::(?:(?::".concat(n, "){0,5}:").concat(t, "|(?::").concat(n, "){1,7}|:))")
    // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::
  ], i = "(?:%[0-9a-zA-Z]{1,})?", a = "(?:".concat(o.join("|"), ")").concat(i), s = new RegExp("(?:^".concat(t, "$)|(?:^").concat(a, "$)")), c = new RegExp("^".concat(t, "$")), l = new RegExp("^".concat(a, "$")), u = function(_) {
    return _ && _.exact ? s : new RegExp("(?:".concat(r(_)).concat(t).concat(r(_), ")|(?:").concat(r(_)).concat(a).concat(r(_), ")"), "g");
  };
  u.v4 = function(v) {
    return v && v.exact ? c : new RegExp("".concat(r(v)).concat(t).concat(r(v)), "g");
  }, u.v6 = function(v) {
    return v && v.exact ? l : new RegExp("".concat(r(v)).concat(a).concat(r(v)), "g");
  };
  var f = "(?:(?:[a-z]+:)?//)", h = "(?:\\S+(?::\\S*)?@)?", m = u.v4().source, d = u.v6().source, g = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", p = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", y = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", b = "(?::\\d{2,5})?", S = '(?:[/?#][^\\s"]*)?', C = "(?:".concat(f, "|www\\.)").concat(h, "(?:localhost|").concat(m, "|").concat(d, "|").concat(g).concat(p).concat(y, ")").concat(b).concat(S);
  return la = new RegExp("(?:^".concat(C, "$)"), "i"), la;
};
var b0 = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, Yo = {
  integer: function(r) {
    return Yo.number(r) && parseInt(r, 10) === r;
  },
  float: function(r) {
    return Yo.number(r) && !Yo.integer(r);
  },
  array: function(r) {
    return Array.isArray(r);
  },
  regexp: function(r) {
    if (r instanceof RegExp)
      return !0;
    try {
      return !!new RegExp(r);
    } catch {
      return !1;
    }
  },
  date: function(r) {
    return typeof r.getTime == "function" && typeof r.getMonth == "function" && typeof r.getYear == "function" && !isNaN(r.getTime());
  },
  number: function(r) {
    return isNaN(r) ? !1 : typeof r == "number";
  },
  object: function(r) {
    return Ne(r) === "object" && !Yo.array(r);
  },
  method: function(r) {
    return typeof r == "function";
  },
  email: function(r) {
    return typeof r == "string" && r.length <= 320 && !!r.match(b0.email);
  },
  url: function(r) {
    return typeof r == "string" && r.length <= 2048 && !!r.match(VC());
  },
  hex: function(r) {
    return typeof r == "string" && !!r.match(b0.hex);
  }
}, HC = function(r, t, n, o, i) {
  if (r.required && t === void 0) {
    $g(r, t, n, o, i);
    return;
  }
  var a = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = r.type;
  a.indexOf(s) > -1 ? Yo[s](t) || o.push(fr(i.messages.types[s], r.fullField, r.type)) : s && Ne(t) !== r.type && o.push(fr(i.messages.types[s], r.fullField, r.type));
}, WC = function(r, t, n, o, i) {
  (/^\s+$/.test(t) || t === "") && o.push(fr(i.messages.whitespace, r.fullField));
};
const et = {
  required: $g,
  whitespace: WC,
  type: HC,
  range: BC,
  enum: LC,
  pattern: zC
};
var qC = function(r, t, n, o, i) {
  var a = [], s = r.required || !r.required && o.hasOwnProperty(r.field);
  if (s) {
    if (jt(t) && !r.required)
      return n();
    et.required(r, t, o, a, i);
  }
  n(a);
}, UC = function(r, t, n, o, i) {
  var a = [], s = r.required || !r.required && o.hasOwnProperty(r.field);
  if (s) {
    if (t == null && !r.required)
      return n();
    et.required(r, t, o, a, i, "array"), t != null && (et.type(r, t, o, a, i), et.range(r, t, o, a, i));
  }
  n(a);
}, GC = function(r, t, n, o, i) {
  var a = [], s = r.required || !r.required && o.hasOwnProperty(r.field);
  if (s) {
    if (jt(t) && !r.required)
      return n();
    et.required(r, t, o, a, i), t !== void 0 && et.type(r, t, o, a, i);
  }
  n(a);
}, KC = function(r, t, n, o, i) {
  var a = [], s = r.required || !r.required && o.hasOwnProperty(r.field);
  if (s) {
    if (jt(t, "date") && !r.required)
      return n();
    if (et.required(r, t, o, a, i), !jt(t, "date")) {
      var c;
      t instanceof Date ? c = t : c = new Date(t), et.type(r, c, o, a, i), c && et.range(r, c.getTime(), o, a, i);
    }
  }
  n(a);
}, XC = "enum", YC = function(r, t, n, o, i) {
  var a = [], s = r.required || !r.required && o.hasOwnProperty(r.field);
  if (s) {
    if (jt(t) && !r.required)
      return n();
    et.required(r, t, o, a, i), t !== void 0 && et[XC](r, t, o, a, i);
  }
  n(a);
}, JC = function(r, t, n, o, i) {
  var a = [], s = r.required || !r.required && o.hasOwnProperty(r.field);
  if (s) {
    if (jt(t) && !r.required)
      return n();
    et.required(r, t, o, a, i), t !== void 0 && (et.type(r, t, o, a, i), et.range(r, t, o, a, i));
  }
  n(a);
}, QC = function(r, t, n, o, i) {
  var a = [], s = r.required || !r.required && o.hasOwnProperty(r.field);
  if (s) {
    if (jt(t) && !r.required)
      return n();
    et.required(r, t, o, a, i), t !== void 0 && (et.type(r, t, o, a, i), et.range(r, t, o, a, i));
  }
  n(a);
}, ZC = function(r, t, n, o, i) {
  var a = [], s = r.required || !r.required && o.hasOwnProperty(r.field);
  if (s) {
    if (jt(t) && !r.required)
      return n();
    et.required(r, t, o, a, i), t !== void 0 && et.type(r, t, o, a, i);
  }
  n(a);
}, eE = function(r, t, n, o, i) {
  var a = [], s = r.required || !r.required && o.hasOwnProperty(r.field);
  if (s) {
    if (t === "" && (t = void 0), jt(t) && !r.required)
      return n();
    et.required(r, t, o, a, i), t !== void 0 && (et.type(r, t, o, a, i), et.range(r, t, o, a, i));
  }
  n(a);
}, tE = function(r, t, n, o, i) {
  var a = [], s = r.required || !r.required && o.hasOwnProperty(r.field);
  if (s) {
    if (jt(t) && !r.required)
      return n();
    et.required(r, t, o, a, i), t !== void 0 && et.type(r, t, o, a, i);
  }
  n(a);
}, rE = function(r, t, n, o, i) {
  var a = [], s = r.required || !r.required && o.hasOwnProperty(r.field);
  if (s) {
    if (jt(t, "string") && !r.required)
      return n();
    et.required(r, t, o, a, i), jt(t, "string") || et.pattern(r, t, o, a, i);
  }
  n(a);
}, nE = function(r, t, n, o, i) {
  var a = [], s = r.required || !r.required && o.hasOwnProperty(r.field);
  if (s) {
    if (jt(t) && !r.required)
      return n();
    et.required(r, t, o, a, i), jt(t) || et.type(r, t, o, a, i);
  }
  n(a);
}, oE = function(r, t, n, o, i) {
  var a = [], s = Array.isArray(t) ? "array" : Ne(t);
  et.required(r, t, o, a, i, s), n(a);
}, iE = function(r, t, n, o, i) {
  var a = [], s = r.required || !r.required && o.hasOwnProperty(r.field);
  if (s) {
    if (jt(t, "string") && !r.required)
      return n();
    et.required(r, t, o, a, i, "string"), jt(t, "string") || (et.type(r, t, o, a, i), et.range(r, t, o, a, i), et.pattern(r, t, o, a, i), r.whitespace === !0 && et.whitespace(r, t, o, a, i));
  }
  n(a);
}, Kc = function(r, t, n, o, i) {
  var a = r.type, s = [], c = r.required || !r.required && o.hasOwnProperty(r.field);
  if (c) {
    if (jt(t, a) && !r.required)
      return n();
    et.required(r, t, o, s, i, a), jt(t, a) || et.type(r, t, o, s, i);
  }
  n(s);
};
const ti = {
  string: iE,
  method: ZC,
  number: eE,
  boolean: GC,
  regexp: nE,
  integer: QC,
  float: JC,
  array: UC,
  object: tE,
  enum: YC,
  pattern: rE,
  date: KC,
  url: Kc,
  hex: Kc,
  email: Kc,
  required: oE,
  any: qC
};
var Ei = /* @__PURE__ */ function() {
  function e(r) {
    Ht(this, e), j(this, "rules", null), j(this, "_messages", vu), this.define(r);
  }
  return Wt(e, [{
    key: "define",
    value: function(t) {
      var n = this;
      if (!t)
        throw new Error("Cannot configure a schema with no rules");
      if (Ne(t) !== "object" || Array.isArray(t))
        throw new Error("Rules must be an object");
      this.rules = {}, Object.keys(t).forEach(function(o) {
        var i = t[o];
        n.rules[o] = Array.isArray(i) ? i : [i];
      });
    }
  }, {
    key: "messages",
    value: function(t) {
      return t && (this._messages = v0(mu(), t)), this._messages;
    }
  }, {
    key: "validate",
    value: function(t) {
      var n = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
      }, a = t, s = o, c = i;
      if (typeof s == "function" && (c = s, s = {}), !this.rules || Object.keys(this.rules).length === 0)
        return c && c(null, a), Promise.resolve(a);
      function l(d) {
        var g = [], p = {};
        function y(S) {
          if (Array.isArray(S)) {
            var C;
            g = (C = g).concat.apply(C, Re(S));
          } else
            g.push(S);
        }
        for (var b = 0; b < d.length; b++)
          y(d[b]);
        g.length ? (p = yu(g), c(g, p)) : c(null, a);
      }
      if (s.messages) {
        var u = this.messages();
        u === vu && (u = mu()), v0(u, s.messages), s.messages = u;
      } else
        s.messages = this.messages();
      var f = {}, h = s.keys || Object.keys(this.rules);
      h.forEach(function(d) {
        var g = n.rules[d], p = a[d];
        g.forEach(function(y) {
          var b = y;
          typeof b.transform == "function" && (a === t && (a = q({}, a)), p = a[d] = b.transform(p), p != null && (b.type = b.type || (Array.isArray(p) ? "array" : Ne(p)))), typeof b == "function" ? b = {
            validator: b
          } : b = q({}, b), b.validator = n.getValidationMethod(b), b.validator && (b.field = d, b.fullField = b.fullField || d, b.type = n.getType(b), f[d] = f[d] || [], f[d].push({
            rule: b,
            value: p,
            source: a,
            field: d
          }));
        });
      });
      var m = {};
      return jC(f, s, function(d, g) {
        var p = d.rule, y = (p.type === "object" || p.type === "array") && (Ne(p.fields) === "object" || Ne(p.defaultField) === "object");
        y = y && (p.required || !p.required && d.value), p.field = d.field;
        function b(w, A) {
          return q(q({}, A), {}, {
            fullField: "".concat(p.fullField, ".").concat(w),
            fullFields: p.fullFields ? [].concat(Re(p.fullFields), [w]) : [w]
          });
        }
        function S() {
          var w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], A = Array.isArray(w) ? w : [w];
          !s.suppressWarning && A.length && e.warning("async-validator:", A), A.length && p.message !== void 0 && (A = [].concat(p.message));
          var M = A.map(m0(p, a));
          if (s.first && M.length)
            return m[p.field] = 1, g(M);
          if (!y)
            g(M);
          else {
            if (p.required && !d.value)
              return p.message !== void 0 ? M = [].concat(p.message).map(m0(p, a)) : s.error && (M = [s.error(p, fr(s.messages.required, p.field))]), g(M);
            var k = {};
            p.defaultField && Object.keys(d.value).map(function(L) {
              k[L] = p.defaultField;
            }), k = q(q({}, k), d.rule.fields);
            var V = {};
            Object.keys(k).forEach(function(L) {
              var z = k[L], H = Array.isArray(z) ? z : [z];
              V[L] = H.map(b.bind(null, L));
            });
            var U = new e(V);
            U.messages(s.messages), d.rule.options && (d.rule.options.messages = s.messages, d.rule.options.error = s.error), U.validate(d.value, d.rule.options || s, function(L) {
              var z = [];
              M && M.length && z.push.apply(z, Re(M)), L && L.length && z.push.apply(z, Re(L)), g(z.length ? z : null);
            });
          }
        }
        var C;
        if (p.asyncValidator)
          C = p.asyncValidator(p, d.value, S, d.source, s);
        else if (p.validator) {
          try {
            C = p.validator(p, d.value, S, d.source, s);
          } catch (w) {
            var v, _;
            (v = (_ = console).error) === null || v === void 0 || v.call(_, w), s.suppressValidatorError || setTimeout(function() {
              throw w;
            }, 0), S(w.message);
          }
          C === !0 ? S() : C === !1 ? S(typeof p.message == "function" ? p.message(p.fullField || p.field) : p.message || "".concat(p.fullField || p.field, " fails")) : C instanceof Array ? S(C) : C instanceof Error && S(C.message);
        }
        C && C.then && C.then(function() {
          return S();
        }, function(w) {
          return S(w);
        });
      }, function(d) {
        l(d);
      }, a);
    }
  }, {
    key: "getType",
    value: function(t) {
      if (t.type === void 0 && t.pattern instanceof RegExp && (t.type = "pattern"), typeof t.validator != "function" && t.type && !ti.hasOwnProperty(t.type))
        throw new Error(fr("Unknown rule type %s", t.type));
      return t.type || "string";
    }
  }, {
    key: "getValidationMethod",
    value: function(t) {
      if (typeof t.validator == "function")
        return t.validator;
      var n = Object.keys(t), o = n.indexOf("message");
      return o !== -1 && n.splice(o, 1), n.length === 1 && n[0] === "required" ? ti.required : ti[this.getType(t)] || void 0;
    }
  }]), e;
}();
j(Ei, "register", function(r, t) {
  if (typeof t != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  ti[r] = t;
});
j(Ei, "warning", Rg);
j(Ei, "messages", vu);
j(Ei, "validators", ti);
var cr = "'${name}' is not a valid ${type}", Tg = {
  default: "Validation error on field '${name}'",
  required: "'${name}' is required",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' cannot be empty",
  date: {
    format: "'${name}' is invalid for format date",
    parse: "'${name}' could not be parsed as date",
    invalid: "'${name}' is invalid date"
  },
  types: {
    string: cr,
    method: cr,
    array: cr,
    object: cr,
    number: cr,
    date: cr,
    boolean: cr,
    integer: cr,
    float: cr,
    regexp: cr,
    email: cr,
    url: cr,
    hex: cr
  },
  string: {
    len: "'${name}' must be exactly ${len} characters",
    min: "'${name}' must be at least ${min} characters",
    max: "'${name}' cannot be longer than ${max} characters",
    range: "'${name}' must be between ${min} and ${max} characters"
  },
  number: {
    len: "'${name}' must equal ${len}",
    min: "'${name}' cannot be less than ${min}",
    max: "'${name}' cannot be greater than ${max}",
    range: "'${name}' must be between ${min} and ${max}"
  },
  array: {
    len: "'${name}' must be exactly ${len} in length",
    min: "'${name}' cannot be less than ${min} in length",
    max: "'${name}' cannot be greater than ${max} in length",
    range: "'${name}' must be between ${min} and ${max} in length"
  },
  pattern: {
    mismatch: "'${name}' does not match pattern ${pattern}"
  }
}, y0 = Ei;
function aE(e, r) {
  return e.replace(/\\?\$\{\w+\}/g, function(t) {
    if (t.startsWith("\\"))
      return t.slice(1);
    var n = t.slice(2, -1);
    return r[n];
  });
}
var w0 = "CODE_LOGIC_ERROR";
function wu(e, r, t, n, o) {
  return Su.apply(this, arguments);
}
function Su() {
  return Su = Ln(/* @__PURE__ */ tr().mark(function e(r, t, n, o, i) {
    var a, s, c, l, u, f, h, m, d;
    return tr().wrap(function(p) {
      for (; ; ) switch (p.prev = p.next) {
        case 0:
          return a = q({}, n), delete a.ruleIndex, y0.warning = function() {
          }, a.validator && (s = a.validator, a.validator = function() {
            try {
              return s.apply(void 0, arguments);
            } catch (y) {
              return console.error(y), Promise.reject(w0);
            }
          }), c = null, a && a.type === "array" && a.defaultField && (c = a.defaultField, delete a.defaultField), l = new y0(j({}, r, [a])), u = Qn(Tg, o.validateMessages), l.messages(u), f = [], p.prev = 10, p.next = 13, Promise.resolve(l.validate(j({}, r, t), q({}, o)));
        case 13:
          p.next = 18;
          break;
        case 15:
          p.prev = 15, p.t0 = p.catch(10), p.t0.errors && (f = p.t0.errors.map(function(y, b) {
            var S = y.message, C = S === w0 ? u.default : S;
            return /* @__PURE__ */ x.isValidElement(C) ? (
              // Wrap ReactNode with `key`
              /* @__PURE__ */ x.cloneElement(C, {
                key: "error_".concat(b)
              })
            ) : C;
          }));
        case 18:
          if (!(!f.length && c)) {
            p.next = 23;
            break;
          }
          return p.next = 21, Promise.all(t.map(function(y, b) {
            return wu("".concat(r, ".").concat(b), y, c, o, i);
          }));
        case 21:
          return h = p.sent, p.abrupt("return", h.reduce(function(y, b) {
            return [].concat(Re(y), Re(b));
          }, []));
        case 23:
          return m = q(q({}, n), {}, {
            name: r,
            enum: (n.enum || []).join(", ")
          }, i), d = f.map(function(y) {
            return typeof y == "string" ? aE(y, m) : y;
          }), p.abrupt("return", d);
        case 26:
        case "end":
          return p.stop();
      }
    }, e, null, [[10, 15]]);
  })), Su.apply(this, arguments);
}
function sE(e, r, t, n, o, i) {
  var a = e.join("."), s = t.map(function(u, f) {
    var h = u.validator, m = q(q({}, u), {}, {
      ruleIndex: f
    });
    return h && (m.validator = function(d, g, p) {
      var y = !1, b = function() {
        for (var v = arguments.length, _ = new Array(v), w = 0; w < v; w++)
          _[w] = arguments[w];
        Promise.resolve().then(function() {
          _t(!y, "Your validator function has already return a promise. `callback` will be ignored."), y || p.apply(void 0, _);
        });
      }, S = h(d, g, b);
      y = S && typeof S.then == "function" && typeof S.catch == "function", _t(y, "`callback` is deprecated. Please return a promise instead."), y && S.then(function() {
        p();
      }).catch(function(C) {
        p(C || " ");
      });
    }), m;
  }).sort(function(u, f) {
    var h = u.warningOnly, m = u.ruleIndex, d = f.warningOnly, g = f.ruleIndex;
    return !!h == !!d ? m - g : h ? 1 : -1;
  }), c;
  if (o === !0)
    c = new Promise(/* @__PURE__ */ function() {
      var u = Ln(/* @__PURE__ */ tr().mark(function f(h, m) {
        var d, g, p;
        return tr().wrap(function(b) {
          for (; ; ) switch (b.prev = b.next) {
            case 0:
              d = 0;
            case 1:
              if (!(d < s.length)) {
                b.next = 12;
                break;
              }
              return g = s[d], b.next = 5, wu(a, r, g, n, i);
            case 5:
              if (p = b.sent, !p.length) {
                b.next = 9;
                break;
              }
              return m([{
                errors: p,
                rule: g
              }]), b.abrupt("return");
            case 9:
              d += 1, b.next = 1;
              break;
            case 12:
              h([]);
            case 13:
            case "end":
              return b.stop();
          }
        }, f);
      }));
      return function(f, h) {
        return u.apply(this, arguments);
      };
    }());
  else {
    var l = s.map(function(u) {
      return wu(a, r, u, n, i).then(function(f) {
        return {
          errors: f,
          rule: u
        };
      });
    });
    c = (o ? lE(l) : cE(l)).then(function(u) {
      return Promise.reject(u);
    });
  }
  return c.catch(function(u) {
    return u;
  }), c;
}
function cE(e) {
  return _u.apply(this, arguments);
}
function _u() {
  return _u = Ln(/* @__PURE__ */ tr().mark(function e(r) {
    return tr().wrap(function(n) {
      for (; ; ) switch (n.prev = n.next) {
        case 0:
          return n.abrupt("return", Promise.all(r).then(function(o) {
            var i, a = (i = []).concat.apply(i, Re(o));
            return a;
          }));
        case 1:
        case "end":
          return n.stop();
      }
    }, e);
  })), _u.apply(this, arguments);
}
function lE(e) {
  return Cu.apply(this, arguments);
}
function Cu() {
  return Cu = Ln(/* @__PURE__ */ tr().mark(function e(r) {
    var t;
    return tr().wrap(function(o) {
      for (; ; ) switch (o.prev = o.next) {
        case 0:
          return t = 0, o.abrupt("return", new Promise(function(i) {
            r.forEach(function(a) {
              a.then(function(s) {
                s.errors.length && i([s]), t += 1, t === r.length && i([]);
              });
            });
          }));
        case 2:
        case "end":
          return o.stop();
      }
    }, e);
  })), Cu.apply(this, arguments);
}
function $t(e) {
  return gu(e);
}
function S0(e, r) {
  var t = {};
  return r.forEach(function(n) {
    var o = Lr(e, n);
    t = Or(t, n, o);
  }), t;
}
function no(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return e && e.some(function(n) {
    return Pg(r, n, t);
  });
}
function Pg(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return !e || !r || !t && e.length !== r.length ? !1 : r.every(function(n, o) {
    return e[o] === n;
  });
}
function uE(e, r) {
  if (e === r)
    return !0;
  if (!e && r || e && !r || !e || !r || Ne(e) !== "object" || Ne(r) !== "object")
    return !1;
  var t = Object.keys(e), n = Object.keys(r), o = new Set([].concat(t, n));
  return Re(o).every(function(i) {
    var a = e[i], s = r[i];
    return typeof a == "function" && typeof s == "function" ? !0 : a === s;
  });
}
function fE(e) {
  var r = arguments.length <= 1 ? void 0 : arguments[1];
  return r && r.target && Ne(r.target) === "object" && e in r.target ? r.target[e] : r;
}
function _0(e, r, t) {
  var n = e.length;
  if (r < 0 || r >= n || t < 0 || t >= n)
    return e;
  var o = e[r], i = r - t;
  return i > 0 ? [].concat(Re(e.slice(0, t)), [o], Re(e.slice(t, r)), Re(e.slice(r + 1, n))) : i < 0 ? [].concat(Re(e.slice(0, r)), Re(e.slice(r + 1, t + 1)), [o], Re(e.slice(t + 1, n))) : e;
}
var dE = ["name"], xr = [];
function Xc(e, r, t, n, o, i) {
  return typeof e == "function" ? e(r, t, "source" in i ? {
    source: i.source
  } : {}) : n !== o;
}
var xf = /* @__PURE__ */ function(e) {
  mn(t, e);
  var r = vn(t);
  function t(n) {
    var o;
    if (Ht(this, t), o = r.call(this, n), j(Ye(o), "state", {
      resetCount: 0
    }), j(Ye(o), "cancelRegisterFunc", null), j(Ye(o), "mounted", !1), j(Ye(o), "touched", !1), j(Ye(o), "dirty", !1), j(Ye(o), "validatePromise", void 0), j(Ye(o), "prevValidating", void 0), j(Ye(o), "errors", xr), j(Ye(o), "warnings", xr), j(Ye(o), "cancelRegister", function() {
      var c = o.props, l = c.preserve, u = c.isListField, f = c.name;
      o.cancelRegisterFunc && o.cancelRegisterFunc(u, l, $t(f)), o.cancelRegisterFunc = null;
    }), j(Ye(o), "getNamePath", function() {
      var c = o.props, l = c.name, u = c.fieldContext, f = u.prefixName, h = f === void 0 ? [] : f;
      return l !== void 0 ? [].concat(Re(h), Re(l)) : [];
    }), j(Ye(o), "getRules", function() {
      var c = o.props, l = c.rules, u = l === void 0 ? [] : l, f = c.fieldContext;
      return u.map(function(h) {
        return typeof h == "function" ? h(f) : h;
      });
    }), j(Ye(o), "refresh", function() {
      o.mounted && o.setState(function(c) {
        var l = c.resetCount;
        return {
          resetCount: l + 1
        };
      });
    }), j(Ye(o), "metaCache", null), j(Ye(o), "triggerMetaEvent", function(c) {
      var l = o.props.onMetaChange;
      if (l) {
        var u = q(q({}, o.getMeta()), {}, {
          destroy: c
        });
        Ll(o.metaCache, u) || l(u), o.metaCache = u;
      } else
        o.metaCache = null;
    }), j(Ye(o), "onStoreChange", function(c, l, u) {
      var f = o.props, h = f.shouldUpdate, m = f.dependencies, d = m === void 0 ? [] : m, g = f.onReset, p = u.store, y = o.getNamePath(), b = o.getValue(c), S = o.getValue(p), C = l && no(l, y);
      switch (u.type === "valueUpdate" && u.source === "external" && !Ll(b, S) && (o.touched = !0, o.dirty = !0, o.validatePromise = null, o.errors = xr, o.warnings = xr, o.triggerMetaEvent()), u.type) {
        case "reset":
          if (!l || C) {
            o.touched = !1, o.dirty = !1, o.validatePromise = void 0, o.errors = xr, o.warnings = xr, o.triggerMetaEvent(), g == null || g(), o.refresh();
            return;
          }
          break;
        /**
         * In case field with `preserve = false` nest deps like:
         * - A = 1 => show B
         * - B = 1 => show C
         * - Reset A, need clean B, C
         */
        case "remove": {
          if (h && Xc(h, c, p, b, S, u)) {
            o.reRender();
            return;
          }
          break;
        }
        case "setField": {
          var v = u.data;
          if (C) {
            "touched" in v && (o.touched = v.touched), "validating" in v && !("originRCField" in v) && (o.validatePromise = v.validating ? Promise.resolve([]) : null), "errors" in v && (o.errors = v.errors || xr), "warnings" in v && (o.warnings = v.warnings || xr), o.dirty = !0, o.triggerMetaEvent(), o.reRender();
            return;
          } else if ("value" in v && no(l, y, !0)) {
            o.reRender();
            return;
          }
          if (h && !y.length && Xc(h, c, p, b, S, u)) {
            o.reRender();
            return;
          }
          break;
        }
        case "dependenciesUpdate": {
          var _ = d.map($t);
          if (_.some(function(w) {
            return no(u.relatedFields, w);
          })) {
            o.reRender();
            return;
          }
          break;
        }
        default:
          if (C || (!d.length || y.length || h) && Xc(h, c, p, b, S, u)) {
            o.reRender();
            return;
          }
          break;
      }
      h === !0 && o.reRender();
    }), j(Ye(o), "validateRules", function(c) {
      var l = o.getNamePath(), u = o.getValue(), f = c || {}, h = f.triggerName, m = f.validateOnly, d = m === void 0 ? !1 : m, g = Promise.resolve().then(/* @__PURE__ */ Ln(/* @__PURE__ */ tr().mark(function p() {
        var y, b, S, C, v, _, w;
        return tr().wrap(function(M) {
          for (; ; ) switch (M.prev = M.next) {
            case 0:
              if (o.mounted) {
                M.next = 2;
                break;
              }
              return M.abrupt("return", []);
            case 2:
              if (y = o.props, b = y.validateFirst, S = b === void 0 ? !1 : b, C = y.messageVariables, v = y.validateDebounce, _ = o.getRules(), h && (_ = _.filter(function(k) {
                return k;
              }).filter(function(k) {
                var V = k.validateTrigger;
                if (!V)
                  return !0;
                var U = gu(V);
                return U.includes(h);
              })), !(v && h)) {
                M.next = 10;
                break;
              }
              return M.next = 8, new Promise(function(k) {
                setTimeout(k, v);
              });
            case 8:
              if (o.validatePromise === g) {
                M.next = 10;
                break;
              }
              return M.abrupt("return", []);
            case 10:
              return w = sE(l, u, _, c, S, C), w.catch(function(k) {
                return k;
              }).then(function() {
                var k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : xr;
                if (o.validatePromise === g) {
                  var V;
                  o.validatePromise = null;
                  var U = [], L = [];
                  (V = k.forEach) === null || V === void 0 || V.call(k, function(z) {
                    var H = z.rule.warningOnly, P = z.errors, I = P === void 0 ? xr : P;
                    H ? L.push.apply(L, Re(I)) : U.push.apply(U, Re(I));
                  }), o.errors = U, o.warnings = L, o.triggerMetaEvent(), o.reRender();
                }
              }), M.abrupt("return", w);
            case 13:
            case "end":
              return M.stop();
          }
        }, p);
      })));
      return d || (o.validatePromise = g, o.dirty = !0, o.errors = xr, o.warnings = xr, o.triggerMetaEvent(), o.reRender()), g;
    }), j(Ye(o), "isFieldValidating", function() {
      return !!o.validatePromise;
    }), j(Ye(o), "isFieldTouched", function() {
      return o.touched;
    }), j(Ye(o), "isFieldDirty", function() {
      if (o.dirty || o.props.initialValue !== void 0)
        return !0;
      var c = o.props.fieldContext, l = c.getInternalHooks(En), u = l.getInitialValue;
      return u(o.getNamePath()) !== void 0;
    }), j(Ye(o), "getErrors", function() {
      return o.errors;
    }), j(Ye(o), "getWarnings", function() {
      return o.warnings;
    }), j(Ye(o), "isListField", function() {
      return o.props.isListField;
    }), j(Ye(o), "isList", function() {
      return o.props.isList;
    }), j(Ye(o), "isPreserve", function() {
      return o.props.preserve;
    }), j(Ye(o), "getMeta", function() {
      o.prevValidating = o.isFieldValidating();
      var c = {
        touched: o.isFieldTouched(),
        validating: o.prevValidating,
        errors: o.errors,
        warnings: o.warnings,
        name: o.getNamePath(),
        validated: o.validatePromise === null
      };
      return c;
    }), j(Ye(o), "getOnlyChild", function(c) {
      if (typeof c == "function") {
        var l = o.getMeta();
        return q(q({}, o.getOnlyChild(c(o.getControlled(), l, o.props.fieldContext))), {}, {
          isFunction: !0
        });
      }
      var u = gn(c);
      return u.length !== 1 || !/* @__PURE__ */ x.isValidElement(u[0]) ? {
        child: u,
        isFunction: !1
      } : {
        child: u[0],
        isFunction: !1
      };
    }), j(Ye(o), "getValue", function(c) {
      var l = o.props.fieldContext.getFieldsValue, u = o.getNamePath();
      return Lr(c || l(!0), u);
    }), j(Ye(o), "getControlled", function() {
      var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = o.props, u = l.name, f = l.trigger, h = l.validateTrigger, m = l.getValueFromEvent, d = l.normalize, g = l.valuePropName, p = l.getValueProps, y = l.fieldContext, b = h !== void 0 ? h : y.validateTrigger, S = o.getNamePath(), C = y.getInternalHooks, v = y.getFieldsValue, _ = C(En), w = _.dispatch, A = o.getValue(), M = p || function(z) {
        return j({}, g, z);
      }, k = c[f], V = u !== void 0 ? M(A) : {};
      process.env.NODE_ENV !== "production" && V && Object.keys(V).forEach(function(z) {
        _t(typeof V[z] != "function", "It's not recommended to generate dynamic function prop by `getValueProps`. Please pass it to child component directly (prop: ".concat(z, ")"));
      });
      var U = q(q({}, c), V);
      U[f] = function() {
        o.touched = !0, o.dirty = !0, o.triggerMetaEvent();
        for (var z, H = arguments.length, P = new Array(H), I = 0; I < H; I++)
          P[I] = arguments[I];
        m ? z = m.apply(void 0, P) : z = fE.apply(void 0, [g].concat(P)), d && (z = d(z, A, v(!0))), z !== A && w({
          type: "updateValue",
          namePath: S,
          value: z
        }), k && k.apply(void 0, P);
      };
      var L = gu(b || []);
      return L.forEach(function(z) {
        var H = U[z];
        U[z] = function() {
          H && H.apply(void 0, arguments);
          var P = o.props.rules;
          P && P.length && w({
            type: "validateField",
            namePath: S,
            triggerName: z
          });
        };
      }), U;
    }), n.fieldContext) {
      var i = n.fieldContext.getInternalHooks, a = i(En), s = a.initEntityValue;
      s(Ye(o));
    }
    return o;
  }
  return Wt(t, [{
    key: "componentDidMount",
    value: function() {
      var o = this.props, i = o.shouldUpdate, a = o.fieldContext;
      if (this.mounted = !0, a) {
        var s = a.getInternalHooks, c = s(En), l = c.registerField;
        this.cancelRegisterFunc = l(this);
      }
      i === !0 && this.reRender();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.cancelRegister(), this.triggerMetaEvent(!0), this.mounted = !1;
    }
  }, {
    key: "reRender",
    value: function() {
      this.mounted && this.forceUpdate();
    }
  }, {
    key: "render",
    value: function() {
      var o = this.state.resetCount, i = this.props.children, a = this.getOnlyChild(i), s = a.child, c = a.isFunction, l;
      return c ? l = s : /* @__PURE__ */ x.isValidElement(s) ? l = /* @__PURE__ */ x.cloneElement(s, this.getControlled(s.props)) : (_t(!s, "`children` of Field is not validate ReactElement."), l = s), /* @__PURE__ */ x.createElement(x.Fragment, {
        key: o
      }, l);
    }
  }]), t;
}(x.Component);
j(xf, "contextType", bo);
j(xf, "defaultProps", {
  trigger: "onChange",
  valuePropName: "value"
});
function Ng(e) {
  var r, t = e.name, n = Kt(e, dE), o = x.useContext(bo), i = x.useContext(Ya), a = t !== void 0 ? $t(t) : void 0, s = (r = n.isListField) !== null && r !== void 0 ? r : !!i, c = "keep";
  return s || (c = "_".concat((a || []).join("_"))), process.env.NODE_ENV !== "production" && n.preserve === !1 && s && a.length <= 1 && _t(!1, "`preserve` should not apply on Form.List fields."), /* @__PURE__ */ x.createElement(xf, bt({
    key: c,
    name: a,
    isListField: s
  }, n, {
    fieldContext: o
  }));
}
function hE(e) {
  var r = e.name, t = e.initialValue, n = e.children, o = e.rules, i = e.validateTrigger, a = e.isListField, s = x.useContext(bo), c = x.useContext(Ya), l = x.useRef({
    keys: [],
    id: 0
  }), u = l.current, f = x.useMemo(function() {
    var g = $t(s.prefixName) || [];
    return [].concat(Re(g), Re($t(r)));
  }, [s.prefixName, r]), h = x.useMemo(function() {
    return q(q({}, s), {}, {
      prefixName: f
    });
  }, [s, f]), m = x.useMemo(function() {
    return {
      getKey: function(p) {
        var y = f.length, b = p[y];
        return [u.keys[b], p.slice(y + 1)];
      }
    };
  }, [f]);
  if (typeof n != "function")
    return _t(!1, "Form.List only accepts function as children."), null;
  var d = function(p, y, b) {
    var S = b.source;
    return S === "internal" ? !1 : p !== y;
  };
  return /* @__PURE__ */ x.createElement(Ya.Provider, {
    value: m
  }, /* @__PURE__ */ x.createElement(bo.Provider, {
    value: h
  }, /* @__PURE__ */ x.createElement(Ng, {
    name: [],
    shouldUpdate: d,
    rules: o,
    validateTrigger: i,
    initialValue: t,
    isList: !0,
    isListField: a ?? !!c
  }, function(g, p) {
    var y = g.value, b = y === void 0 ? [] : y, S = g.onChange, C = s.getFieldValue, v = function() {
      var M = C(f || []);
      return M || [];
    }, _ = {
      add: function(M, k) {
        var V = v();
        k >= 0 && k <= V.length ? (u.keys = [].concat(Re(u.keys.slice(0, k)), [u.id], Re(u.keys.slice(k))), S([].concat(Re(V.slice(0, k)), [M], Re(V.slice(k))))) : (process.env.NODE_ENV !== "production" && (k < 0 || k > V.length) && _t(!1, "The second parameter of the add function should be a valid positive number."), u.keys = [].concat(Re(u.keys), [u.id]), S([].concat(Re(V), [M]))), u.id += 1;
      },
      remove: function(M) {
        var k = v(), V = new Set(Array.isArray(M) ? M : [M]);
        V.size <= 0 || (u.keys = u.keys.filter(function(U, L) {
          return !V.has(L);
        }), S(k.filter(function(U, L) {
          return !V.has(L);
        })));
      },
      move: function(M, k) {
        if (M !== k) {
          var V = v();
          M < 0 || M >= V.length || k < 0 || k >= V.length || (u.keys = _0(u.keys, M, k), S(_0(V, M, k)));
        }
      }
    }, w = b || [];
    return Array.isArray(w) || (w = [], process.env.NODE_ENV !== "production" && _t(!1, "Current value of '".concat(f.join(" > "), "' is not an array type."))), n(w.map(function(A, M) {
      var k = u.keys[M];
      return k === void 0 && (u.keys[M] = u.id, k = u.keys[M], u.id += 1), {
        name: M,
        key: k,
        isListField: !0
      };
    }), _, p);
  })));
}
function pE(e) {
  var r = !1, t = e.length, n = [];
  return e.length ? new Promise(function(o, i) {
    e.forEach(function(a, s) {
      a.catch(function(c) {
        return r = !0, c;
      }).then(function(c) {
        t -= 1, n[s] = c, !(t > 0) && (r && i(n), o(n));
      });
    });
  }) : Promise.resolve([]);
}
var Ag = "__@field_split__";
function Yc(e) {
  return e.map(function(r) {
    return "".concat(Ne(r), ":").concat(r);
  }).join(Ag);
}
var Kn = /* @__PURE__ */ function() {
  function e() {
    Ht(this, e), j(this, "kvs", /* @__PURE__ */ new Map());
  }
  return Wt(e, [{
    key: "set",
    value: function(t, n) {
      this.kvs.set(Yc(t), n);
    }
  }, {
    key: "get",
    value: function(t) {
      return this.kvs.get(Yc(t));
    }
  }, {
    key: "update",
    value: function(t, n) {
      var o = this.get(t), i = n(o);
      i ? this.set(t, i) : this.delete(t);
    }
  }, {
    key: "delete",
    value: function(t) {
      this.kvs.delete(Yc(t));
    }
    // Since we only use this in test, let simply realize this
  }, {
    key: "map",
    value: function(t) {
      return Re(this.kvs.entries()).map(function(n) {
        var o = ne(n, 2), i = o[0], a = o[1], s = i.split(Ag);
        return t({
          key: s.map(function(c) {
            var l = c.match(/^([^:]*):(.*)$/), u = ne(l, 3), f = u[1], h = u[2];
            return f === "number" ? Number(h) : h;
          }),
          value: a
        });
      });
    }
  }, {
    key: "toJSON",
    value: function() {
      var t = {};
      return this.map(function(n) {
        var o = n.key, i = n.value;
        return t[o.join(".")] = i, null;
      }), t;
    }
  }]), e;
}(), xE = ["name"], gE = /* @__PURE__ */ Wt(function e(r) {
  var t = this;
  Ht(this, e), j(this, "formHooked", !1), j(this, "forceRootUpdate", void 0), j(this, "subscribable", !0), j(this, "store", {}), j(this, "fieldEntities", []), j(this, "initialValues", {}), j(this, "callbacks", {}), j(this, "validateMessages", null), j(this, "preserve", null), j(this, "lastValidatePromise", null), j(this, "getForm", function() {
    return {
      getFieldValue: t.getFieldValue,
      getFieldsValue: t.getFieldsValue,
      getFieldError: t.getFieldError,
      getFieldWarning: t.getFieldWarning,
      getFieldsError: t.getFieldsError,
      isFieldsTouched: t.isFieldsTouched,
      isFieldTouched: t.isFieldTouched,
      isFieldValidating: t.isFieldValidating,
      isFieldsValidating: t.isFieldsValidating,
      resetFields: t.resetFields,
      setFields: t.setFields,
      setFieldValue: t.setFieldValue,
      setFieldsValue: t.setFieldsValue,
      validateFields: t.validateFields,
      submit: t.submit,
      _init: !0,
      getInternalHooks: t.getInternalHooks
    };
  }), j(this, "getInternalHooks", function(n) {
    return n === En ? (t.formHooked = !0, {
      dispatch: t.dispatch,
      initEntityValue: t.initEntityValue,
      registerField: t.registerField,
      useSubscribe: t.useSubscribe,
      setInitialValues: t.setInitialValues,
      destroyForm: t.destroyForm,
      setCallbacks: t.setCallbacks,
      setValidateMessages: t.setValidateMessages,
      getFields: t.getFields,
      setPreserve: t.setPreserve,
      getInitialValue: t.getInitialValue,
      registerWatch: t.registerWatch
    }) : (_t(!1, "`getInternalHooks` is internal usage. Should not call directly."), null);
  }), j(this, "useSubscribe", function(n) {
    t.subscribable = n;
  }), j(this, "prevWithoutPreserves", null), j(this, "setInitialValues", function(n, o) {
    if (t.initialValues = n || {}, o) {
      var i, a = Qn(n, t.store);
      (i = t.prevWithoutPreserves) === null || i === void 0 || i.map(function(s) {
        var c = s.key;
        a = Or(a, c, Lr(n, c));
      }), t.prevWithoutPreserves = null, t.updateStore(a);
    }
  }), j(this, "destroyForm", function(n) {
    if (n)
      t.updateStore({});
    else {
      var o = new Kn();
      t.getFieldEntities(!0).forEach(function(i) {
        t.isMergedPreserve(i.isPreserve()) || o.set(i.getNamePath(), !0);
      }), t.prevWithoutPreserves = o;
    }
  }), j(this, "getInitialValue", function(n) {
    var o = Lr(t.initialValues, n);
    return n.length ? Qn(o) : o;
  }), j(this, "setCallbacks", function(n) {
    t.callbacks = n;
  }), j(this, "setValidateMessages", function(n) {
    t.validateMessages = n;
  }), j(this, "setPreserve", function(n) {
    t.preserve = n;
  }), j(this, "watchList", []), j(this, "registerWatch", function(n) {
    return t.watchList.push(n), function() {
      t.watchList = t.watchList.filter(function(o) {
        return o !== n;
      });
    };
  }), j(this, "notifyWatch", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    if (t.watchList.length) {
      var o = t.getFieldsValue(), i = t.getFieldsValue(!0);
      t.watchList.forEach(function(a) {
        a(o, i, n);
      });
    }
  }), j(this, "timeoutId", null), j(this, "warningUnhooked", function() {
    process.env.NODE_ENV !== "production" && !t.timeoutId && typeof window < "u" && (t.timeoutId = setTimeout(function() {
      t.timeoutId = null, t.formHooked || _t(!1, "Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?");
    }));
  }), j(this, "updateStore", function(n) {
    t.store = n;
  }), j(this, "getFieldEntities", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    return n ? t.fieldEntities.filter(function(o) {
      return o.getNamePath().length;
    }) : t.fieldEntities;
  }), j(this, "getFieldsMap", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, o = new Kn();
    return t.getFieldEntities(n).forEach(function(i) {
      var a = i.getNamePath();
      o.set(a, i);
    }), o;
  }), j(this, "getFieldEntitiesForNamePathList", function(n) {
    if (!n)
      return t.getFieldEntities(!0);
    var o = t.getFieldsMap(!0);
    return n.map(function(i) {
      var a = $t(i);
      return o.get(a) || {
        INVALIDATE_NAME_PATH: $t(i)
      };
    });
  }), j(this, "getFieldsValue", function(n, o) {
    t.warningUnhooked();
    var i, a, s;
    if (n === !0 || Array.isArray(n) ? (i = n, a = o) : n && Ne(n) === "object" && (s = n.strict, a = n.filter), i === !0 && !a)
      return t.store;
    var c = t.getFieldEntitiesForNamePathList(Array.isArray(i) ? i : null), l = [];
    return c.forEach(function(u) {
      var f, h, m = "INVALIDATE_NAME_PATH" in u ? u.INVALIDATE_NAME_PATH : u.getNamePath();
      if (s) {
        var d, g;
        if ((d = (g = u).isList) !== null && d !== void 0 && d.call(g))
          return;
      } else if (!i && (f = (h = u).isListField) !== null && f !== void 0 && f.call(h))
        return;
      if (!a)
        l.push(m);
      else {
        var p = "getMeta" in u ? u.getMeta() : null;
        a(p) && l.push(m);
      }
    }), S0(t.store, l.map($t));
  }), j(this, "getFieldValue", function(n) {
    t.warningUnhooked();
    var o = $t(n);
    return Lr(t.store, o);
  }), j(this, "getFieldsError", function(n) {
    t.warningUnhooked();
    var o = t.getFieldEntitiesForNamePathList(n);
    return o.map(function(i, a) {
      return i && !("INVALIDATE_NAME_PATH" in i) ? {
        name: i.getNamePath(),
        errors: i.getErrors(),
        warnings: i.getWarnings()
      } : {
        name: $t(n[a]),
        errors: [],
        warnings: []
      };
    });
  }), j(this, "getFieldError", function(n) {
    t.warningUnhooked();
    var o = $t(n), i = t.getFieldsError([o])[0];
    return i.errors;
  }), j(this, "getFieldWarning", function(n) {
    t.warningUnhooked();
    var o = $t(n), i = t.getFieldsError([o])[0];
    return i.warnings;
  }), j(this, "isFieldsTouched", function() {
    t.warningUnhooked();
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    var a = o[0], s = o[1], c, l = !1;
    o.length === 0 ? c = null : o.length === 1 ? Array.isArray(a) ? (c = a.map($t), l = !1) : (c = null, l = a) : (c = a.map($t), l = s);
    var u = t.getFieldEntities(!0), f = function(p) {
      return p.isFieldTouched();
    };
    if (!c)
      return l ? u.every(function(g) {
        return f(g) || g.isList();
      }) : u.some(f);
    var h = new Kn();
    c.forEach(function(g) {
      h.set(g, []);
    }), u.forEach(function(g) {
      var p = g.getNamePath();
      c.forEach(function(y) {
        y.every(function(b, S) {
          return p[S] === b;
        }) && h.update(y, function(b) {
          return [].concat(Re(b), [g]);
        });
      });
    });
    var m = function(p) {
      return p.some(f);
    }, d = h.map(function(g) {
      var p = g.value;
      return p;
    });
    return l ? d.every(m) : d.some(m);
  }), j(this, "isFieldTouched", function(n) {
    return t.warningUnhooked(), t.isFieldsTouched([n]);
  }), j(this, "isFieldsValidating", function(n) {
    t.warningUnhooked();
    var o = t.getFieldEntities();
    if (!n)
      return o.some(function(a) {
        return a.isFieldValidating();
      });
    var i = n.map($t);
    return o.some(function(a) {
      var s = a.getNamePath();
      return no(i, s) && a.isFieldValidating();
    });
  }), j(this, "isFieldValidating", function(n) {
    return t.warningUnhooked(), t.isFieldsValidating([n]);
  }), j(this, "resetWithFieldInitialValue", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = new Kn(), i = t.getFieldEntities(!0);
    i.forEach(function(c) {
      var l = c.props.initialValue, u = c.getNamePath();
      if (l !== void 0) {
        var f = o.get(u) || /* @__PURE__ */ new Set();
        f.add({
          entity: c,
          value: l
        }), o.set(u, f);
      }
    });
    var a = function(l) {
      l.forEach(function(u) {
        var f = u.props.initialValue;
        if (f !== void 0) {
          var h = u.getNamePath(), m = t.getInitialValue(h);
          if (m !== void 0)
            _t(!1, "Form already set 'initialValues' with path '".concat(h.join("."), "'. Field can not overwrite it."));
          else {
            var d = o.get(h);
            if (d && d.size > 1)
              _t(!1, "Multiple Field with path '".concat(h.join("."), "' set 'initialValue'. Can not decide which one to pick."));
            else if (d) {
              var g = t.getFieldValue(h), p = u.isListField();
              !p && (!n.skipExist || g === void 0) && t.updateStore(Or(t.store, h, Re(d)[0].value));
            }
          }
        }
      });
    }, s;
    n.entities ? s = n.entities : n.namePathList ? (s = [], n.namePathList.forEach(function(c) {
      var l = o.get(c);
      if (l) {
        var u;
        (u = s).push.apply(u, Re(Re(l).map(function(f) {
          return f.entity;
        })));
      }
    })) : s = i, a(s);
  }), j(this, "resetFields", function(n) {
    t.warningUnhooked();
    var o = t.store;
    if (!n) {
      t.updateStore(Qn(t.initialValues)), t.resetWithFieldInitialValue(), t.notifyObservers(o, null, {
        type: "reset"
      }), t.notifyWatch();
      return;
    }
    var i = n.map($t);
    i.forEach(function(a) {
      var s = t.getInitialValue(a);
      t.updateStore(Or(t.store, a, s));
    }), t.resetWithFieldInitialValue({
      namePathList: i
    }), t.notifyObservers(o, i, {
      type: "reset"
    }), t.notifyWatch(i);
  }), j(this, "setFields", function(n) {
    t.warningUnhooked();
    var o = t.store, i = [];
    n.forEach(function(a) {
      var s = a.name, c = Kt(a, xE), l = $t(s);
      i.push(l), "value" in c && t.updateStore(Or(t.store, l, c.value)), t.notifyObservers(o, [l], {
        type: "setField",
        data: a
      });
    }), t.notifyWatch(i);
  }), j(this, "getFields", function() {
    var n = t.getFieldEntities(!0), o = n.map(function(i) {
      var a = i.getNamePath(), s = i.getMeta(), c = q(q({}, s), {}, {
        name: a,
        value: t.getFieldValue(a)
      });
      return Object.defineProperty(c, "originRCField", {
        value: !0
      }), c;
    });
    return o;
  }), j(this, "initEntityValue", function(n) {
    var o = n.props.initialValue;
    if (o !== void 0) {
      var i = n.getNamePath(), a = Lr(t.store, i);
      a === void 0 && t.updateStore(Or(t.store, i, o));
    }
  }), j(this, "isMergedPreserve", function(n) {
    var o = n !== void 0 ? n : t.preserve;
    return o ?? !0;
  }), j(this, "registerField", function(n) {
    t.fieldEntities.push(n);
    var o = n.getNamePath();
    if (t.notifyWatch([o]), n.props.initialValue !== void 0) {
      var i = t.store;
      t.resetWithFieldInitialValue({
        entities: [n],
        skipExist: !0
      }), t.notifyObservers(i, [n.getNamePath()], {
        type: "valueUpdate",
        source: "internal"
      });
    }
    return function(a, s) {
      var c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
      if (t.fieldEntities = t.fieldEntities.filter(function(f) {
        return f !== n;
      }), !t.isMergedPreserve(s) && (!a || c.length > 1)) {
        var l = a ? void 0 : t.getInitialValue(o);
        if (o.length && t.getFieldValue(o) !== l && t.fieldEntities.every(function(f) {
          return (
            // Only reset when no namePath exist
            !Pg(f.getNamePath(), o)
          );
        })) {
          var u = t.store;
          t.updateStore(Or(u, o, l, !0)), t.notifyObservers(u, [o], {
            type: "remove"
          }), t.triggerDependenciesUpdate(u, o);
        }
      }
      t.notifyWatch([o]);
    };
  }), j(this, "dispatch", function(n) {
    switch (n.type) {
      case "updateValue": {
        var o = n.namePath, i = n.value;
        t.updateValue(o, i);
        break;
      }
      case "validateField": {
        var a = n.namePath, s = n.triggerName;
        t.validateFields([a], {
          triggerName: s
        });
        break;
      }
    }
  }), j(this, "notifyObservers", function(n, o, i) {
    if (t.subscribable) {
      var a = q(q({}, i), {}, {
        store: t.getFieldsValue(!0)
      });
      t.getFieldEntities().forEach(function(s) {
        var c = s.onStoreChange;
        c(n, o, a);
      });
    } else
      t.forceRootUpdate();
  }), j(this, "triggerDependenciesUpdate", function(n, o) {
    var i = t.getDependencyChildrenFields(o);
    return i.length && t.validateFields(i), t.notifyObservers(n, i, {
      type: "dependenciesUpdate",
      relatedFields: [o].concat(Re(i))
    }), i;
  }), j(this, "updateValue", function(n, o) {
    var i = $t(n), a = t.store;
    t.updateStore(Or(t.store, i, o)), t.notifyObservers(a, [i], {
      type: "valueUpdate",
      source: "internal"
    }), t.notifyWatch([i]);
    var s = t.triggerDependenciesUpdate(a, i), c = t.callbacks.onValuesChange;
    if (c) {
      var l = S0(t.store, [i]);
      c(l, t.getFieldsValue());
    }
    t.triggerOnFieldsChange([i].concat(Re(s)));
  }), j(this, "setFieldsValue", function(n) {
    t.warningUnhooked();
    var o = t.store;
    if (n) {
      var i = Qn(t.store, n);
      t.updateStore(i);
    }
    t.notifyObservers(o, null, {
      type: "valueUpdate",
      source: "external"
    }), t.notifyWatch();
  }), j(this, "setFieldValue", function(n, o) {
    t.setFields([{
      name: n,
      value: o,
      errors: [],
      warnings: []
    }]);
  }), j(this, "getDependencyChildrenFields", function(n) {
    var o = /* @__PURE__ */ new Set(), i = [], a = new Kn();
    t.getFieldEntities().forEach(function(c) {
      var l = c.props.dependencies;
      (l || []).forEach(function(u) {
        var f = $t(u);
        a.update(f, function() {
          var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Set();
          return h.add(c), h;
        });
      });
    });
    var s = function c(l) {
      var u = a.get(l) || /* @__PURE__ */ new Set();
      u.forEach(function(f) {
        if (!o.has(f)) {
          o.add(f);
          var h = f.getNamePath();
          f.isFieldDirty() && h.length && (i.push(h), c(h));
        }
      });
    };
    return s(n), i;
  }), j(this, "triggerOnFieldsChange", function(n, o) {
    var i = t.callbacks.onFieldsChange;
    if (i) {
      var a = t.getFields();
      if (o) {
        var s = new Kn();
        o.forEach(function(l) {
          var u = l.name, f = l.errors;
          s.set(u, f);
        }), a.forEach(function(l) {
          l.errors = s.get(l.name) || l.errors;
        });
      }
      var c = a.filter(function(l) {
        var u = l.name;
        return no(n, u);
      });
      c.length && i(c, a);
    }
  }), j(this, "validateFields", function(n, o) {
    t.warningUnhooked();
    var i, a;
    Array.isArray(n) || typeof n == "string" || typeof o == "string" ? (i = n, a = o) : a = n;
    var s = !!i, c = s ? i.map($t) : [], l = [], u = String(Date.now()), f = /* @__PURE__ */ new Set(), h = a || {}, m = h.recursive, d = h.dirty;
    t.getFieldEntities(!0).forEach(function(b) {
      if (s || c.push(b.getNamePath()), !(!b.props.rules || !b.props.rules.length) && !(d && !b.isFieldDirty())) {
        var S = b.getNamePath();
        if (f.add(S.join(u)), !s || no(c, S, m)) {
          var C = b.validateRules(q({
            validateMessages: q(q({}, Tg), t.validateMessages)
          }, a));
          l.push(C.then(function() {
            return {
              name: S,
              errors: [],
              warnings: []
            };
          }).catch(function(v) {
            var _, w = [], A = [];
            return (_ = v.forEach) === null || _ === void 0 || _.call(v, function(M) {
              var k = M.rule.warningOnly, V = M.errors;
              k ? A.push.apply(A, Re(V)) : w.push.apply(w, Re(V));
            }), w.length ? Promise.reject({
              name: S,
              errors: w,
              warnings: A
            }) : {
              name: S,
              errors: w,
              warnings: A
            };
          }));
        }
      }
    });
    var g = pE(l);
    t.lastValidatePromise = g, g.catch(function(b) {
      return b;
    }).then(function(b) {
      var S = b.map(function(C) {
        var v = C.name;
        return v;
      });
      t.notifyObservers(t.store, S, {
        type: "validateFinish"
      }), t.triggerOnFieldsChange(S, b);
    });
    var p = g.then(function() {
      return t.lastValidatePromise === g ? Promise.resolve(t.getFieldsValue(c)) : Promise.reject([]);
    }).catch(function(b) {
      var S = b.filter(function(C) {
        return C && C.errors.length;
      });
      return Promise.reject({
        values: t.getFieldsValue(c),
        errorFields: S,
        outOfDate: t.lastValidatePromise !== g
      });
    });
    p.catch(function(b) {
      return b;
    });
    var y = c.filter(function(b) {
      return f.has(b.join(u));
    });
    return t.triggerOnFieldsChange(y), p;
  }), j(this, "submit", function() {
    t.warningUnhooked(), t.validateFields().then(function(n) {
      var o = t.callbacks.onFinish;
      if (o)
        try {
          o(n);
        } catch (i) {
          console.error(i);
        }
    }).catch(function(n) {
      var o = t.callbacks.onFinishFailed;
      o && o(n);
    });
  }), this.forceRootUpdate = r;
});
function Ig(e) {
  var r = x.useRef(), t = x.useState({}), n = ne(t, 2), o = n[1];
  if (!r.current)
    if (e)
      r.current = e;
    else {
      var i = function() {
        o({});
      }, a = new gE(i);
      r.current = a.getForm();
    }
  return [r.current];
}
var Eu = /* @__PURE__ */ x.createContext({
  triggerFormChange: function() {
  },
  triggerFormFinish: function() {
  },
  registerForm: function() {
  },
  unregisterForm: function() {
  }
}), mE = function(r) {
  var t = r.validateMessages, n = r.onFormChange, o = r.onFormFinish, i = r.children, a = x.useContext(Eu), s = x.useRef({});
  return /* @__PURE__ */ x.createElement(Eu.Provider, {
    value: q(q({}, a), {}, {
      validateMessages: q(q({}, a.validateMessages), t),
      // =========================================================
      // =                  Global Form Control                  =
      // =========================================================
      triggerFormChange: function(l, u) {
        n && n(l, {
          changedFields: u,
          forms: s.current
        }), a.triggerFormChange(l, u);
      },
      triggerFormFinish: function(l, u) {
        o && o(l, {
          values: u,
          forms: s.current
        }), a.triggerFormFinish(l, u);
      },
      registerForm: function(l, u) {
        l && (s.current = q(q({}, s.current), {}, j({}, l, u))), a.registerForm(l, u);
      },
      unregisterForm: function(l) {
        var u = q({}, s.current);
        delete u[l], s.current = u, a.unregisterForm(l);
      }
    })
  }, i);
}, vE = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed", "clearOnDestroy"], bE = function(r, t) {
  var n = r.name, o = r.initialValues, i = r.fields, a = r.form, s = r.preserve, c = r.children, l = r.component, u = l === void 0 ? "form" : l, f = r.validateMessages, h = r.validateTrigger, m = h === void 0 ? "onChange" : h, d = r.onValuesChange, g = r.onFieldsChange, p = r.onFinish, y = r.onFinishFailed, b = r.clearOnDestroy, S = Kt(r, vE), C = x.useRef(null), v = x.useContext(Eu), _ = Ig(a), w = ne(_, 1), A = w[0], M = A.getInternalHooks(En), k = M.useSubscribe, V = M.setInitialValues, U = M.setCallbacks, L = M.setValidateMessages, z = M.setPreserve, H = M.destroyForm;
  x.useImperativeHandle(t, function() {
    return q(q({}, A), {}, {
      nativeElement: C.current
    });
  }), x.useEffect(function() {
    return v.registerForm(n, A), function() {
      v.unregisterForm(n);
    };
  }, [v, A, n]), L(q(q({}, v.validateMessages), f)), U({
    onValuesChange: d,
    onFieldsChange: function(G) {
      if (v.triggerFormChange(n, G), g) {
        for (var te = arguments.length, ie = new Array(te > 1 ? te - 1 : 0), de = 1; de < te; de++)
          ie[de - 1] = arguments[de];
        g.apply(void 0, [G].concat(ie));
      }
    },
    onFinish: function(G) {
      v.triggerFormFinish(n, G), p && p(G);
    },
    onFinishFailed: y
  }), z(s);
  var P = x.useRef(null);
  V(o, !P.current), P.current || (P.current = !0), x.useEffect(
    function() {
      return function() {
        return H(b);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  var I, N = typeof c == "function";
  if (N) {
    var B = A.getFieldsValue(!0);
    I = c(B, A);
  } else
    I = c;
  k(!N);
  var W = x.useRef();
  x.useEffect(function() {
    uE(W.current || [], i || []) || A.setFields(i || []), W.current = i;
  }, [i, A]);
  var Y = x.useMemo(function() {
    return q(q({}, A), {}, {
      validateTrigger: m
    });
  }, [A, m]), X = /* @__PURE__ */ x.createElement(Ya.Provider, {
    value: null
  }, /* @__PURE__ */ x.createElement(bo.Provider, {
    value: Y
  }, I));
  return u === !1 ? X : /* @__PURE__ */ x.createElement(u, bt({}, S, {
    ref: C,
    onSubmit: function(G) {
      G.preventDefault(), G.stopPropagation(), A.submit();
    },
    onReset: function(G) {
      var te;
      G.preventDefault(), A.resetFields(), (te = S.onReset) === null || te === void 0 || te.call(S, G);
    }
  }), X);
};
function C0(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return Math.random();
  }
}
var yE = process.env.NODE_ENV !== "production" ? function(e) {
  var r = e.join("__RC_FIELD_FORM_SPLIT__"), t = Pe(r);
  _t(t.current === r, "`useWatch` is not support dynamic `namePath`. Please provide static instead.");
} : function() {
};
function wE() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  var n = r[0], o = r[1], i = o === void 0 ? {} : o, a = TC(i) ? {
    form: i
  } : i, s = a.form, c = Mt(), l = ne(c, 2), u = l[0], f = l[1], h = Nn(function() {
    return C0(u);
  }, [u]), m = Pe(h);
  m.current = h;
  var d = ir(bo), g = s || d, p = g && g._init;
  process.env.NODE_ENV !== "production" && _t(r.length === 2 ? s ? p : !0 : p, "useWatch requires a form instance since it can not auto detect from context.");
  var y = $t(n), b = Pe(y);
  return b.current = y, yE(y), ut(
    function() {
      if (p) {
        var S = g.getFieldsValue, C = g.getInternalHooks, v = C(En), _ = v.registerWatch, w = function(V, U) {
          var L = a.preserve ? U : V;
          return typeof n == "function" ? n(L) : Lr(L, b.current);
        }, A = _(function(k, V) {
          var U = w(k, V), L = C0(U);
          m.current !== L && (m.current = L, f(U));
        }), M = w(S(), S(!0));
        return u !== M && f(M), A;
      }
    },
    // We do not need re-register since namePath content is the same
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [p]
  ), u;
}
var SE = /* @__PURE__ */ x.forwardRef(bE), Oi = SE;
Oi.FormProvider = mE;
Oi.Field = Ng;
Oi.List = hE;
Oi.useForm = Ig;
Oi.useWatch = wE;
const di = /* @__PURE__ */ x.createContext({});
process.env.NODE_ENV !== "production" && (di.displayName = "FormItemInputContext");
const _E = (e) => {
  let {
    children: r,
    status: t,
    override: n
  } = e;
  const o = x.useContext(di), i = x.useMemo(() => {
    const a = Object.assign({}, o);
    return n && delete a.isFormItemInput, t && (delete a.status, delete a.hasFeedback, delete a.feedbackIcon), a;
  }, [t, n, o]);
  return /* @__PURE__ */ x.createElement(di.Provider, {
    value: i
  }, r);
}, CE = /* @__PURE__ */ x.createContext(void 0), Ou = (e) => {
  const {
    space: r,
    form: t,
    children: n
  } = e;
  if (n == null)
    return null;
  let o = n;
  return t && (o = /* @__PURE__ */ Q.createElement(_E, {
    override: !0,
    status: !0
  }, o)), r && (o = /* @__PURE__ */ Q.createElement(n_, null, o)), o;
};
var EE = function(r) {
  if (Zt() && window.document.documentElement) {
    var t = Array.isArray(r) ? r : [r], n = window.document.documentElement;
    return t.some(function(o) {
      return o in n.style;
    });
  }
  return !1;
};
function E0(e, r) {
  return EE(e);
}
const OE = function() {
  if (typeof navigator > "u" || typeof window > "u")
    return !1;
  var e = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e == null ? void 0 : e.substr(0, 4));
};
function RE(e) {
  var r = e.prefixCls, t = e.align, n = e.arrow, o = e.arrowPos, i = n || {}, a = i.className, s = i.content, c = o.x, l = c === void 0 ? 0 : c, u = o.y, f = u === void 0 ? 0 : u, h = x.useRef();
  if (!t || !t.points)
    return null;
  var m = {
    position: "absolute"
  };
  if (t.autoArrow !== !1) {
    var d = t.points[0], g = t.points[1], p = d[0], y = d[1], b = g[0], S = g[1];
    p === b || !["t", "b"].includes(p) ? m.top = f : p === "t" ? m.top = 0 : m.bottom = 0, y === S || !["l", "r"].includes(y) ? m.left = l : y === "l" ? m.left = 0 : m.right = 0;
  }
  return /* @__PURE__ */ x.createElement("div", {
    ref: h,
    className: fe("".concat(r, "-arrow"), a),
    style: m
  }, s);
}
function $E(e) {
  var r = e.prefixCls, t = e.open, n = e.zIndex, o = e.mask, i = e.motion;
  return o ? /* @__PURE__ */ x.createElement(wi, bt({}, i, {
    motionAppear: !0,
    visible: t,
    removeOnLeave: !0
  }), function(a) {
    var s = a.className;
    return /* @__PURE__ */ x.createElement("div", {
      style: {
        zIndex: n
      },
      className: fe("".concat(r, "-mask"), s)
    });
  }) : null;
}
var Mg = /* @__PURE__ */ x.memo(function(e) {
  var r = e.children;
  return r;
}, function(e, r) {
  return r.cache;
});
process.env.NODE_ENV !== "production" && (Mg.displayName = "PopupContent");
var Fg = /* @__PURE__ */ x.forwardRef(function(e, r) {
  var t = e.popup, n = e.className, o = e.prefixCls, i = e.style, a = e.target, s = e.onVisibleChanged, c = e.open, l = e.keepDom, u = e.fresh, f = e.onClick, h = e.mask, m = e.arrow, d = e.arrowPos, g = e.align, p = e.motion, y = e.maskMotion, b = e.forceRender, S = e.getPopupContainer, C = e.autoDestroy, v = e.portal, _ = e.zIndex, w = e.onMouseEnter, A = e.onMouseLeave, M = e.onPointerEnter, k = e.onPointerDownCapture, V = e.ready, U = e.offsetX, L = e.offsetY, z = e.offsetR, H = e.offsetB, P = e.onAlign, I = e.onPrepare, N = e.stretch, B = e.targetWidth, W = e.targetHeight, Y = typeof t == "function" ? t() : t, X = c || l, Z = (S == null ? void 0 : S.length) > 0, G = x.useState(!S || !Z), te = ne(G, 2), ie = te[0], de = te[1];
  if (St(function() {
    !ie && Z && a && de(!0);
  }, [ie, Z, a]), !ie)
    return null;
  var pe = "auto", xe = {
    left: "-1000vw",
    top: "-1000vh",
    right: pe,
    bottom: pe
  };
  if (V || !c) {
    var we, ae = g.points, se = g.dynamicInset || ((we = g._experimental) === null || we === void 0 ? void 0 : we.dynamicInset), _e = se && ae[0][1] === "r", re = se && ae[0][0] === "b";
    _e ? (xe.right = z, xe.left = pe) : (xe.left = U, xe.right = pe), re ? (xe.bottom = H, xe.top = pe) : (xe.top = L, xe.bottom = pe);
  }
  var me = {};
  return N && (N.includes("height") && W ? me.height = W : N.includes("minHeight") && W && (me.minHeight = W), N.includes("width") && B ? me.width = B : N.includes("minWidth") && B && (me.minWidth = B)), c || (me.pointerEvents = "none"), /* @__PURE__ */ x.createElement(v, {
    open: b || X,
    getContainer: S && function() {
      return S(a);
    },
    autoDestroy: C
  }, /* @__PURE__ */ x.createElement($E, {
    prefixCls: o,
    open: c,
    zIndex: _,
    mask: h,
    motion: y
  }), /* @__PURE__ */ x.createElement(Oo, {
    onResize: P,
    disabled: !c
  }, function(ce) {
    return /* @__PURE__ */ x.createElement(wi, bt({
      motionAppear: !0,
      motionEnter: !0,
      motionLeave: !0,
      removeOnLeave: !1,
      forceRender: b,
      leavedClassName: "".concat(o, "-hidden")
    }, p, {
      onAppearPrepare: I,
      onEnterPrepare: I,
      visible: c,
      onVisibleChanged: function(Se) {
        var ye;
        p == null || (ye = p.onVisibleChanged) === null || ye === void 0 || ye.call(p, Se), s(Se);
      }
    }), function(ve, Se) {
      var ye = ve.className, Ve = ve.style, $e = fe(o, ye, n);
      return /* @__PURE__ */ x.createElement("div", {
        ref: Dn(ce, r, Se),
        className: $e,
        style: q(q(q(q({
          "--arrow-x": "".concat(d.x || 0, "px"),
          "--arrow-y": "".concat(d.y || 0, "px")
        }, xe), me), Ve), {}, {
          boxSizing: "border-box",
          zIndex: _
        }, i),
        onMouseEnter: w,
        onMouseLeave: A,
        onPointerEnter: M,
        onClick: f,
        onPointerDownCapture: k
      }, m && /* @__PURE__ */ x.createElement(RE, {
        prefixCls: o,
        arrow: m,
        arrowPos: d,
        align: g
      }), /* @__PURE__ */ x.createElement(Mg, {
        cache: !c && !u
      }, Y));
    });
  }));
});
process.env.NODE_ENV !== "production" && (Fg.displayName = "Popup");
var jg = /* @__PURE__ */ x.forwardRef(function(e, r) {
  var t = e.children, n = e.getTriggerDOMNode, o = vi(t), i = x.useCallback(function(s) {
    Yu(r, n ? n(s) : s);
  }, [n]), a = Fs(i, js(t));
  return o ? /* @__PURE__ */ x.cloneElement(t, {
    ref: a
  }) : t;
});
process.env.NODE_ENV !== "production" && (jg.displayName = "TriggerWrapper");
var O0 = /* @__PURE__ */ x.createContext(null);
function R0(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
function TE(e, r, t, n) {
  return x.useMemo(function() {
    var o = R0(t ?? r), i = R0(n ?? r), a = new Set(o), s = new Set(i);
    return e && (a.has("hover") && (a.delete("hover"), a.add("click")), s.has("hover") && (s.delete("hover"), s.add("click"))), [a, s];
  }, [e, r, t, n]);
}
function PE() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], t = arguments.length > 2 ? arguments[2] : void 0;
  return t ? e[0] === r[0] : e[0] === r[0] && e[1] === r[1];
}
function NE(e, r, t, n) {
  for (var o = t.points, i = Object.keys(e), a = 0; a < i.length; a += 1) {
    var s, c = i[a];
    if (PE((s = e[c]) === null || s === void 0 ? void 0 : s.points, o, n))
      return "".concat(r, "-placement-").concat(c);
  }
  return "";
}
function $0(e, r, t, n) {
  return r || (t ? {
    motionName: "".concat(e, "-").concat(t)
  } : n ? {
    motionName: n
  } : null);
}
function Ri(e) {
  return e.ownerDocument.defaultView;
}
function Ru(e) {
  for (var r = [], t = e == null ? void 0 : e.parentElement, n = ["hidden", "scroll", "clip", "auto"]; t; ) {
    var o = Ri(t).getComputedStyle(t), i = o.overflowX, a = o.overflowY, s = o.overflow;
    [i, a, s].some(function(c) {
      return n.includes(c);
    }) && r.push(t), t = t.parentElement;
  }
  return r;
}
function hi(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(e) ? r : e;
}
function Wo(e) {
  return hi(parseFloat(e), 0);
}
function T0(e, r) {
  var t = q({}, e);
  return (r || []).forEach(function(n) {
    if (!(n instanceof HTMLBodyElement || n instanceof HTMLHtmlElement)) {
      var o = Ri(n).getComputedStyle(n), i = o.overflow, a = o.overflowClipMargin, s = o.borderTopWidth, c = o.borderBottomWidth, l = o.borderLeftWidth, u = o.borderRightWidth, f = n.getBoundingClientRect(), h = n.offsetHeight, m = n.clientHeight, d = n.offsetWidth, g = n.clientWidth, p = Wo(s), y = Wo(c), b = Wo(l), S = Wo(u), C = hi(Math.round(f.width / d * 1e3) / 1e3), v = hi(Math.round(f.height / h * 1e3) / 1e3), _ = (d - g - b - S) * C, w = (h - m - p - y) * v, A = p * v, M = y * v, k = b * C, V = S * C, U = 0, L = 0;
      if (i === "clip") {
        var z = Wo(a);
        U = z * C, L = z * v;
      }
      var H = f.x + k - U, P = f.y + A - L, I = H + f.width + 2 * U - k - V - _, N = P + f.height + 2 * L - A - M - w;
      t.left = Math.max(t.left, H), t.top = Math.max(t.top, P), t.right = Math.min(t.right, I), t.bottom = Math.min(t.bottom, N);
    }
  }), t;
}
function P0(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, t = "".concat(r), n = t.match(/^(.*)\%$/);
  return n ? e * (parseFloat(n[1]) / 100) : parseFloat(t);
}
function N0(e, r) {
  var t = r || [], n = ne(t, 2), o = n[0], i = n[1];
  return [P0(e.width, o), P0(e.height, i)];
}
function A0() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return [e[0], e[1]];
}
function Xn(e, r) {
  var t = r[0], n = r[1], o, i;
  return t === "t" ? i = e.y : t === "b" ? i = e.y + e.height : i = e.y + e.height / 2, n === "l" ? o = e.x : n === "r" ? o = e.x + e.width : o = e.x + e.width / 2, {
    x: o,
    y: i
  };
}
function an(e, r) {
  var t = {
    t: "b",
    b: "t",
    l: "r",
    r: "l"
  };
  return e.map(function(n, o) {
    return o === r ? t[n] || "c" : n;
  }).join("");
}
function AE(e, r, t, n, o, i, a) {
  var s = x.useState({
    ready: !1,
    offsetX: 0,
    offsetY: 0,
    offsetR: 0,
    offsetB: 0,
    arrowX: 0,
    arrowY: 0,
    scaleX: 1,
    scaleY: 1,
    align: o[n] || {}
  }), c = ne(s, 2), l = c[0], u = c[1], f = x.useRef(0), h = x.useMemo(function() {
    return r ? Ru(r) : [];
  }, [r]), m = x.useRef({}), d = function() {
    m.current = {};
  };
  e || d();
  var g = Ut(function() {
    if (r && t && e) {
      let hr = function(Wn, nn) {
        var on = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : E, Fo = G.x + Wn, Vi = G.y + nn, mc = Fo + _e, vc = Vi + se, bc = Math.max(Fo, on.left), be = Math.max(Vi, on.top), Me = Math.min(mc, on.right), wt = Math.min(vc, on.bottom);
        return Math.max(0, (Me - bc) * (wt - be));
      }, Bi = function() {
        Qe = G.y + Ue, ke = Qe + se, Ie = G.x + Te, yt = Ie + _e;
      };
      var b, S, C, v, _ = r, w = _.ownerDocument, A = Ri(_), M = A.getComputedStyle(_), k = M.width, V = M.height, U = M.position, L = _.style.left, z = _.style.top, H = _.style.right, P = _.style.bottom, I = _.style.overflow, N = q(q({}, o[n]), i), B = w.createElement("div");
      (b = _.parentElement) === null || b === void 0 || b.appendChild(B), B.style.left = "".concat(_.offsetLeft, "px"), B.style.top = "".concat(_.offsetTop, "px"), B.style.position = U, B.style.height = "".concat(_.offsetHeight, "px"), B.style.width = "".concat(_.offsetWidth, "px"), _.style.left = "0", _.style.top = "0", _.style.right = "auto", _.style.bottom = "auto", _.style.overflow = "hidden";
      var W;
      if (Array.isArray(t))
        W = {
          x: t[0],
          y: t[1],
          width: 0,
          height: 0
        };
      else {
        var Y, X, Z = t.getBoundingClientRect();
        Z.x = (Y = Z.x) !== null && Y !== void 0 ? Y : Z.left, Z.y = (X = Z.y) !== null && X !== void 0 ? X : Z.top, W = {
          x: Z.x,
          y: Z.y,
          width: Z.width,
          height: Z.height
        };
      }
      var G = _.getBoundingClientRect();
      G.x = (S = G.x) !== null && S !== void 0 ? S : G.left, G.y = (C = G.y) !== null && C !== void 0 ? C : G.top;
      var te = w.documentElement, ie = te.clientWidth, de = te.clientHeight, pe = te.scrollWidth, xe = te.scrollHeight, we = te.scrollTop, ae = te.scrollLeft, se = G.height, _e = G.width, re = W.height, me = W.width, ce = {
        left: 0,
        top: 0,
        right: ie,
        bottom: de
      }, ve = {
        left: -ae,
        top: -we,
        right: pe - ae,
        bottom: xe - we
      }, Se = N.htmlRegion, ye = "visible", Ve = "visibleFirst";
      Se !== "scroll" && Se !== Ve && (Se = ye);
      var $e = Se === Ve, $ = T0(ve, h), O = T0(ce, h), E = Se === ye ? O : $, F = $e ? O : E;
      _.style.left = "auto", _.style.top = "auto", _.style.right = "0", _.style.bottom = "0";
      var T = _.getBoundingClientRect();
      _.style.left = L, _.style.top = z, _.style.right = H, _.style.bottom = P, _.style.overflow = I, (v = _.parentElement) === null || v === void 0 || v.removeChild(B);
      var ge = hi(Math.round(_e / parseFloat(k) * 1e3) / 1e3), Be = hi(Math.round(se / parseFloat(V) * 1e3) / 1e3);
      if (ge === 0 || Be === 0 || ni(t) && !lg(t))
        return;
      var We = N.offset, Le = N.targetOffset, Ze = N0(G, We), Fe = ne(Ze, 2), ze = Fe[0], le = Fe[1], Oe = N0(W, Le), he = ne(Oe, 2), Ee = he[0], ft = he[1];
      W.x -= Ee, W.y -= ft;
      var Jt = N.points || [], Dt = ne(Jt, 2), J = Dt[0], D = Dt[1], Xe = A0(D), De = A0(J), tt = Xn(W, Xe), Ae = Xn(G, De), rt = q({}, N), Te = tt.x - Ae.x + ze, Ue = tt.y - Ae.y + le, dt = hr(Te, Ue), Qt = hr(Te, Ue, O), dr = Xn(W, ["t", "l"]), je = Xn(G, ["t", "l"]), xt = Xn(W, ["b", "r"]), kt = Xn(G, ["b", "r"]), He = N.overflow || {}, R = He.adjustX, ee = He.adjustY, oe = He.shiftX, Ce = He.shiftY, Je = function(nn) {
        return typeof nn == "boolean" ? nn : nn >= 0;
      }, Qe, ke, Ie, yt;
      Bi();
      var at = Je(ee), pt = De[0] === Xe[0];
      if (at && De[0] === "t" && (ke > F.bottom || m.current.bt)) {
        var Ge = Ue;
        pt ? Ge -= se - re : Ge = dr.y - kt.y - le;
        var Sr = hr(Te, Ge), _r = hr(Te, Ge, O);
        // Of course use larger one
        Sr > dt || Sr === dt && (!$e || // Choose recommend one
        _r >= Qt) ? (m.current.bt = !0, Ue = Ge, le = -le, rt.points = [an(De, 0), an(Xe, 0)]) : m.current.bt = !1;
      }
      if (at && De[0] === "b" && (Qe < F.top || m.current.tb)) {
        var Et = Ue;
        pt ? Et += se - re : Et = xt.y - je.y - le;
        var rn = hr(Te, Et), Ao = hr(Te, Et, O);
        // Of course use larger one
        rn > dt || rn === dt && (!$e || // Choose recommend one
        Ao >= Qt) ? (m.current.tb = !0, Ue = Et, le = -le, rt.points = [an(De, 0), an(Xe, 0)]) : m.current.tb = !1;
      }
      var zn = Je(R), Mi = De[1] === Xe[1];
      if (zn && De[1] === "l" && (yt > F.right || m.current.rl)) {
        var yn = Te;
        Mi ? yn -= _e - me : yn = dr.x - kt.x - ze;
        var Fi = hr(yn, Ue), Bn = hr(yn, Ue, O);
        // Of course use larger one
        Fi > dt || Fi === dt && (!$e || // Choose recommend one
        Bn >= Qt) ? (m.current.rl = !0, Te = yn, ze = -ze, rt.points = [an(De, 1), an(Xe, 1)]) : m.current.rl = !1;
      }
      if (zn && De[1] === "r" && (Ie < F.left || m.current.lr)) {
        var Ur = Te;
        Mi ? Ur += _e - me : Ur = xt.x - je.x - ze;
        var ji = hr(Ur, Ue), Di = hr(Ur, Ue, O);
        // Of course use larger one
        ji > dt || ji === dt && (!$e || // Choose recommend one
        Di >= Qt) ? (m.current.lr = !0, Te = Ur, ze = -ze, rt.points = [an(De, 1), an(Xe, 1)]) : m.current.lr = !1;
      }
      Bi();
      var Ir = oe === !0 ? 0 : oe;
      typeof Ir == "number" && (Ie < O.left && (Te -= Ie - O.left - ze, W.x + me < O.left + Ir && (Te += W.x - O.left + me - Ir)), yt > O.right && (Te -= yt - O.right - ze, W.x > O.right - Ir && (Te += W.x - O.right + Ir)));
      var Cr = Ce === !0 ? 0 : Ce;
      typeof Cr == "number" && (Qe < O.top && (Ue -= Qe - O.top - le, W.y + re < O.top + Cr && (Ue += W.y - O.top + re - Cr)), ke > O.bottom && (Ue -= ke - O.bottom - le, W.y > O.bottom - Cr && (Ue += W.y - O.bottom + Cr)));
      var Vn = G.x + Te, Hn = Vn + _e, Mr = G.y + Ue, sc = Mr + se, ki = W.x, cc = ki + me, Io = W.y, lc = Io + re, uc = Math.max(Vn, ki), fc = Math.min(Hn, cc), Li = (uc + fc) / 2, dc = Li - Vn, hc = Math.max(Mr, Io), zi = Math.min(sc, lc), pc = (hc + zi) / 2, xc = pc - Mr;
      a == null || a(r, rt);
      var Mo = T.right - G.x - (Te + G.width), Fr = T.bottom - G.y - (Ue + G.height);
      ge === 1 && (Te = Math.round(Te), Mo = Math.round(Mo)), Be === 1 && (Ue = Math.round(Ue), Fr = Math.round(Fr));
      var gc = {
        ready: !0,
        offsetX: Te / ge,
        offsetY: Ue / Be,
        offsetR: Mo / ge,
        offsetB: Fr / Be,
        arrowX: dc / ge,
        arrowY: xc / Be,
        scaleX: ge,
        scaleY: Be,
        align: rt
      };
      u(gc);
    }
  }), p = function() {
    f.current += 1;
    var S = f.current;
    Promise.resolve().then(function() {
      f.current === S && g();
    });
  }, y = function() {
    u(function(S) {
      return q(q({}, S), {}, {
        ready: !1
      });
    });
  };
  return St(y, [n]), St(function() {
    e || y();
  }, [e]), [l.ready, l.offsetX, l.offsetY, l.offsetR, l.offsetB, l.arrowX, l.arrowY, l.scaleX, l.scaleY, l.align, p];
}
function IE(e, r, t, n, o) {
  St(function() {
    if (e && r && t) {
      let f = function() {
        n(), o();
      };
      var i = r, a = t, s = Ru(i), c = Ru(a), l = Ri(a), u = new Set([l].concat(Re(s), Re(c)));
      return u.forEach(function(h) {
        h.addEventListener("scroll", f, {
          passive: !0
        });
      }), l.addEventListener("resize", f, {
        passive: !0
      }), n(), function() {
        u.forEach(function(h) {
          h.removeEventListener("scroll", f), l.removeEventListener("resize", f);
        });
      };
    }
  }, [e, r, t]);
}
function ME(e, r, t, n, o, i, a, s) {
  var c = x.useRef(e);
  c.current = e;
  var l = x.useRef(!1);
  x.useEffect(function() {
    if (r && n && (!o || i)) {
      var f = function() {
        l.current = !1;
      }, h = function(C) {
        var v;
        c.current && !a(((v = C.composedPath) === null || v === void 0 || (v = v.call(C)) === null || v === void 0 ? void 0 : v[0]) || C.target) && !l.current && s(!1);
      }, m = Ri(n);
      m.addEventListener("pointerdown", f, !0), m.addEventListener("mousedown", h, !0), m.addEventListener("contextmenu", h, !0);
      var d = Ka(t);
      if (d && (d.addEventListener("mousedown", h, !0), d.addEventListener("contextmenu", h, !0)), process.env.NODE_ENV !== "production") {
        var g, p, y = t == null || (g = t.getRootNode) === null || g === void 0 ? void 0 : g.call(t), b = (p = n.getRootNode) === null || p === void 0 ? void 0 : p.call(n);
        uo(y === b, "trigger element and popup element should in same shadow root.");
      }
      return function() {
        m.removeEventListener("pointerdown", f, !0), m.removeEventListener("mousedown", h, !0), m.removeEventListener("contextmenu", h, !0), d && (d.removeEventListener("mousedown", h, !0), d.removeEventListener("contextmenu", h, !0));
      };
    }
  }, [r, t, n, o, i]);
  function u() {
    l.current = !0;
  }
  return u;
}
var FE = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "fresh", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
function jE() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : pf, r = /* @__PURE__ */ x.forwardRef(function(t, n) {
    var o = t.prefixCls, i = o === void 0 ? "rc-trigger-popup" : o, a = t.children, s = t.action, c = s === void 0 ? "hover" : s, l = t.showAction, u = t.hideAction, f = t.popupVisible, h = t.defaultPopupVisible, m = t.onPopupVisibleChange, d = t.afterPopupVisibleChange, g = t.mouseEnterDelay, p = t.mouseLeaveDelay, y = p === void 0 ? 0.1 : p, b = t.focusDelay, S = t.blurDelay, C = t.mask, v = t.maskClosable, _ = v === void 0 ? !0 : v, w = t.getPopupContainer, A = t.forceRender, M = t.autoDestroy, k = t.destroyPopupOnHide, V = t.popup, U = t.popupClassName, L = t.popupStyle, z = t.popupPlacement, H = t.builtinPlacements, P = H === void 0 ? {} : H, I = t.popupAlign, N = t.zIndex, B = t.stretch, W = t.getPopupClassNameFromAlign, Y = t.fresh, X = t.alignPoint, Z = t.onPopupClick, G = t.onPopupAlign, te = t.arrow, ie = t.popupMotion, de = t.maskMotion, pe = t.popupTransitionName, xe = t.popupAnimation, we = t.maskTransitionName, ae = t.maskAnimation, se = t.className, _e = t.getTriggerDOMNode, re = Kt(t, FE), me = M || k || !1, ce = x.useState(!1), ve = ne(ce, 2), Se = ve[0], ye = ve[1];
    St(function() {
      ye(OE());
    }, []);
    var Ve = x.useRef({}), $e = x.useContext(O0), $ = x.useMemo(function() {
      return {
        registerSubPopup: function(Me, wt) {
          Ve.current[Me] = wt, $e == null || $e.registerSubPopup(Me, wt);
        }
      };
    }, [$e]), O = Og(), E = x.useState(null), F = ne(E, 2), T = F[0], ge = F[1], Be = x.useRef(null), We = Ut(function(be) {
      Be.current = be, ni(be) && T !== be && ge(be), $e == null || $e.registerSubPopup(O, be);
    }), Le = x.useState(null), Ze = ne(Le, 2), Fe = Ze[0], ze = Ze[1], le = x.useRef(null), Oe = Ut(function(be) {
      ni(be) && Fe !== be && (ze(be), le.current = be);
    }), he = x.Children.only(a), Ee = (he == null ? void 0 : he.props) || {}, ft = {}, Jt = Ut(function(be) {
      var Me, wt, It = Fe;
      return (It == null ? void 0 : It.contains(be)) || ((Me = Ka(It)) === null || Me === void 0 ? void 0 : Me.host) === be || be === It || (T == null ? void 0 : T.contains(be)) || ((wt = Ka(T)) === null || wt === void 0 ? void 0 : wt.host) === be || be === T || Object.values(Ve.current).some(function(Ot) {
        return (Ot == null ? void 0 : Ot.contains(be)) || be === Ot;
      });
    }), Dt = $0(i, ie, xe, pe), J = $0(i, de, ae, we), D = x.useState(h || !1), Xe = ne(D, 2), De = Xe[0], tt = Xe[1], Ae = f ?? De, rt = Ut(function(be) {
      f === void 0 && tt(be);
    });
    St(function() {
      tt(f || !1);
    }, [f]);
    var Te = x.useRef(Ae);
    Te.current = Ae;
    var Ue = x.useRef([]);
    Ue.current = [];
    var dt = Ut(function(be) {
      var Me;
      rt(be), ((Me = Ue.current[Ue.current.length - 1]) !== null && Me !== void 0 ? Me : Ae) !== be && (Ue.current.push(be), m == null || m(be));
    }), Qt = x.useRef(), dr = function() {
      clearTimeout(Qt.current);
    }, je = function(Me) {
      var wt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      dr(), wt === 0 ? dt(Me) : Qt.current = setTimeout(function() {
        dt(Me);
      }, wt * 1e3);
    };
    x.useEffect(function() {
      return dr;
    }, []);
    var xt = x.useState(!1), kt = ne(xt, 2), He = kt[0], R = kt[1];
    St(function(be) {
      (!be || Ae) && R(!0);
    }, [Ae]);
    var ee = x.useState(null), oe = ne(ee, 2), Ce = oe[0], Je = oe[1], Qe = x.useState(null), ke = ne(Qe, 2), Ie = ke[0], yt = ke[1], at = function(Me) {
      yt([Me.clientX, Me.clientY]);
    }, pt = AE(Ae, T, X && Ie !== null ? Ie : Fe, z, P, I, G), Ge = ne(pt, 11), Sr = Ge[0], _r = Ge[1], Et = Ge[2], rn = Ge[3], Ao = Ge[4], zn = Ge[5], Mi = Ge[6], yn = Ge[7], Fi = Ge[8], Bn = Ge[9], Ur = Ge[10], ji = TE(Se, c, l, u), Di = ne(ji, 2), Ir = Di[0], Cr = Di[1], Vn = Ir.has("click"), Hn = Cr.has("click") || Cr.has("contextMenu"), Mr = Ut(function() {
      He || Ur();
    }), sc = function() {
      Te.current && X && Hn && je(!1);
    };
    IE(Ae, Fe, T, Mr, sc), St(function() {
      Mr();
    }, [Ie, z]), St(function() {
      Ae && !(P != null && P[z]) && Mr();
    }, [JSON.stringify(I)]);
    var ki = x.useMemo(function() {
      var be = NE(P, i, Bn, X);
      return fe(be, W == null ? void 0 : W(Bn));
    }, [Bn, W, P, i, X]);
    x.useImperativeHandle(n, function() {
      return {
        nativeElement: le.current,
        popupElement: Be.current,
        forceAlign: Mr
      };
    });
    var cc = x.useState(0), Io = ne(cc, 2), lc = Io[0], uc = Io[1], fc = x.useState(0), Li = ne(fc, 2), dc = Li[0], hc = Li[1], zi = function() {
      if (B && Fe) {
        var Me = Fe.getBoundingClientRect();
        uc(Me.width), hc(Me.height);
      }
    }, pc = function() {
      zi(), Mr();
    }, xc = function(Me) {
      R(!1), Ur(), d == null || d(Me);
    }, Mo = function() {
      return new Promise(function(Me) {
        zi(), Je(function() {
          return Me;
        });
      });
    };
    St(function() {
      Ce && (Ur(), Ce(), Je(null));
    }, [Ce]);
    function Fr(be, Me, wt, It) {
      ft[be] = function(Ot) {
        var Hi;
        It == null || It(Ot), je(Me, wt);
        for (var yc = arguments.length, Of = new Array(yc > 1 ? yc - 1 : 0), Wi = 1; Wi < yc; Wi++)
          Of[Wi - 1] = arguments[Wi];
        (Hi = Ee[be]) === null || Hi === void 0 || Hi.call.apply(Hi, [Ee, Ot].concat(Of));
      };
    }
    (Vn || Hn) && (ft.onClick = function(be) {
      var Me;
      Te.current && Hn ? je(!1) : !Te.current && Vn && (at(be), je(!0));
      for (var wt = arguments.length, It = new Array(wt > 1 ? wt - 1 : 0), Ot = 1; Ot < wt; Ot++)
        It[Ot - 1] = arguments[Ot];
      (Me = Ee.onClick) === null || Me === void 0 || Me.call.apply(Me, [Ee, be].concat(It));
    });
    var gc = ME(Ae, Hn, Fe, T, C, _, Jt, je), hr = Ir.has("hover"), Bi = Cr.has("hover"), Wn, nn;
    hr && (Fr("onMouseEnter", !0, g, function(be) {
      at(be);
    }), Fr("onPointerEnter", !0, g, function(be) {
      at(be);
    }), Wn = function(Me) {
      (Ae || He) && T !== null && T !== void 0 && T.contains(Me.target) && je(!0, g);
    }, X && (ft.onMouseMove = function(be) {
      var Me;
      (Me = Ee.onMouseMove) === null || Me === void 0 || Me.call(Ee, be);
    })), Bi && (Fr("onMouseLeave", !1, y), Fr("onPointerLeave", !1, y), nn = function() {
      je(!1, y);
    }), Ir.has("focus") && Fr("onFocus", !0, b), Cr.has("focus") && Fr("onBlur", !1, S), Ir.has("contextMenu") && (ft.onContextMenu = function(be) {
      var Me;
      Te.current && Cr.has("contextMenu") ? je(!1) : (at(be), je(!0)), be.preventDefault();
      for (var wt = arguments.length, It = new Array(wt > 1 ? wt - 1 : 0), Ot = 1; Ot < wt; Ot++)
        It[Ot - 1] = arguments[Ot];
      (Me = Ee.onContextMenu) === null || Me === void 0 || Me.call.apply(Me, [Ee, be].concat(It));
    }), se && (ft.className = fe(Ee.className, se));
    var on = q(q({}, Ee), ft), Fo = {}, Vi = ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
    Vi.forEach(function(be) {
      re[be] && (Fo[be] = function() {
        for (var Me, wt = arguments.length, It = new Array(wt), Ot = 0; Ot < wt; Ot++)
          It[Ot] = arguments[Ot];
        (Me = on[be]) === null || Me === void 0 || Me.call.apply(Me, [on].concat(It)), re[be].apply(re, It);
      });
    });
    var mc = /* @__PURE__ */ x.cloneElement(he, q(q({}, on), Fo)), vc = {
      x: zn,
      y: Mi
    }, bc = te ? q({}, te !== !0 ? te : {}) : null;
    return /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ x.createElement(Oo, {
      disabled: !Ae,
      ref: Oe,
      onResize: pc
    }, /* @__PURE__ */ x.createElement(jg, {
      getTriggerDOMNode: _e
    }, mc)), /* @__PURE__ */ x.createElement(O0.Provider, {
      value: $
    }, /* @__PURE__ */ x.createElement(Fg, {
      portal: e,
      ref: We,
      prefixCls: i,
      popup: V,
      className: fe(U, ki),
      style: L,
      target: Fe,
      onMouseEnter: Wn,
      onMouseLeave: nn,
      onPointerEnter: Wn,
      zIndex: N,
      open: Ae,
      keepDom: He,
      fresh: Y,
      onClick: Z,
      onPointerDownCapture: gc,
      mask: C,
      motion: Dt,
      maskMotion: J,
      onVisibleChanged: xc,
      onPrepare: Mo,
      forceRender: A,
      autoDestroy: me,
      getPopupContainer: w,
      align: Bn,
      arrow: bc,
      arrowPos: vc,
      ready: Sr,
      offsetX: _r,
      offsetY: Et,
      offsetR: rn,
      offsetB: Ao,
      onAlign: Mr,
      stretch: B,
      targetWidth: lc / yn,
      targetHeight: dc / Fi
    })));
  });
  return process.env.NODE_ENV !== "production" && (r.displayName = "Trigger"), r;
}
const DE = jE(pf);
function $u(e, r, t) {
  return fe({
    [`${e}-status-success`]: r === "success",
    [`${e}-status-warning`]: r === "warning",
    [`${e}-status-error`]: r === "error",
    [`${e}-status-validating`]: r === "validating",
    [`${e}-has-feedback`]: t
  });
}
const Dg = (e, r) => r || e, kg = function(e, r) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
  var n, o;
  const {
    variant: i,
    [e]: a
  } = x.useContext(er), s = x.useContext(CE), c = a == null ? void 0 : a.variant;
  let l;
  typeof r < "u" ? l = r : t === !1 ? l = "borderless" : l = (o = (n = s ?? c) !== null && n !== void 0 ? n : i) !== null && o !== void 0 ? o : "outlined";
  const u = iw.includes(l);
  return [l, u];
};
var kE = function(r, t) {
  return /* @__PURE__ */ x.createElement(tn, bt({}, r, {
    ref: t,
    icon: k1
  }));
}, Lg = /* @__PURE__ */ x.forwardRef(kE);
process.env.NODE_ENV !== "production" && (Lg.displayName = "CheckOutlined");
function zg(e) {
  var r = e.children, t = e.prefixCls, n = e.id, o = e.overlayInnerStyle, i = e.bodyClassName, a = e.className, s = e.style;
  return /* @__PURE__ */ x.createElement("div", {
    className: fe("".concat(t, "-content"), a),
    style: s
  }, /* @__PURE__ */ x.createElement("div", {
    className: fe("".concat(t, "-inner"), i),
    id: n,
    role: "tooltip",
    style: o
  }, typeof r == "function" ? r() : r));
}
var Yn = {
  shiftX: 64,
  adjustY: 1
}, Jn = {
  adjustX: 1,
  shiftY: !0
}, gr = [0, 0], LE = {
  left: {
    points: ["cr", "cl"],
    overflow: Jn,
    offset: [-4, 0],
    targetOffset: gr
  },
  right: {
    points: ["cl", "cr"],
    overflow: Jn,
    offset: [4, 0],
    targetOffset: gr
  },
  top: {
    points: ["bc", "tc"],
    overflow: Yn,
    offset: [0, -4],
    targetOffset: gr
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: Yn,
    offset: [0, 4],
    targetOffset: gr
  },
  topLeft: {
    points: ["bl", "tl"],
    overflow: Yn,
    offset: [0, -4],
    targetOffset: gr
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: Jn,
    offset: [-4, 0],
    targetOffset: gr
  },
  topRight: {
    points: ["br", "tr"],
    overflow: Yn,
    offset: [0, -4],
    targetOffset: gr
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: Jn,
    offset: [4, 0],
    targetOffset: gr
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: Yn,
    offset: [0, 4],
    targetOffset: gr
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: Jn,
    offset: [4, 0],
    targetOffset: gr
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: Yn,
    offset: [0, 4],
    targetOffset: gr
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: Jn,
    offset: [-4, 0],
    targetOffset: gr
  }
}, zE = ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle", "arrowContent", "overlay", "id", "showArrow", "classNames", "styles"], BE = function(r, t) {
  var n = r.overlayClassName, o = r.trigger, i = o === void 0 ? ["hover"] : o, a = r.mouseEnterDelay, s = a === void 0 ? 0 : a, c = r.mouseLeaveDelay, l = c === void 0 ? 0.1 : c, u = r.overlayStyle, f = r.prefixCls, h = f === void 0 ? "rc-tooltip" : f, m = r.children, d = r.onVisibleChange, g = r.afterVisibleChange, p = r.transitionName, y = r.animation, b = r.motion, S = r.placement, C = S === void 0 ? "right" : S, v = r.align, _ = v === void 0 ? {} : v, w = r.destroyTooltipOnHide, A = w === void 0 ? !1 : w, M = r.defaultVisible, k = r.getTooltipContainer, V = r.overlayInnerStyle;
  r.arrowContent;
  var U = r.overlay, L = r.id, z = r.showArrow, H = z === void 0 ? !0 : z, P = r.classNames, I = r.styles, N = Kt(r, zE), B = Og(L), W = Pe(null);
  mi(t, function() {
    return W.current;
  });
  var Y = q({}, N);
  "visible" in r && (Y.popupVisible = r.visible);
  var X = function() {
    return /* @__PURE__ */ x.createElement(zg, {
      key: "content",
      prefixCls: h,
      id: B,
      bodyClassName: P == null ? void 0 : P.body,
      overlayInnerStyle: q(q({}, V), I == null ? void 0 : I.body)
    }, U);
  }, Z = function() {
    var te = x.Children.only(m), ie = (te == null ? void 0 : te.props) || {}, de = q(q({}, ie), {}, {
      "aria-describedby": U ? B : null
    });
    return /* @__PURE__ */ x.cloneElement(m, de);
  };
  return /* @__PURE__ */ x.createElement(DE, bt({
    popupClassName: fe(n, P == null ? void 0 : P.root),
    prefixCls: h,
    popup: X,
    action: i,
    builtinPlacements: LE,
    popupPlacement: C,
    ref: W,
    popupAlign: _,
    getPopupContainer: k,
    onPopupVisibleChange: d,
    afterPopupVisibleChange: g,
    popupTransitionName: p,
    popupAnimation: y,
    popupMotion: b,
    defaultPopupVisible: M,
    autoDestroy: A,
    mouseLeaveDelay: l,
    popupStyle: q(q({}, u), I == null ? void 0 : I.root),
    mouseEnterDelay: s,
    arrow: H
  }, Y), Z());
};
const VE = /* @__PURE__ */ Wr(BE);
function HE(e) {
  const {
    sizePopupArrow: r,
    borderRadiusXS: t,
    borderRadiusOuter: n
  } = e, o = r / 2, i = 0, a = o, s = n * 1 / Math.sqrt(2), c = o - n * (1 - 1 / Math.sqrt(2)), l = o - t * (1 / Math.sqrt(2)), u = n * (Math.sqrt(2) - 1) + t * (1 / Math.sqrt(2)), f = 2 * o - l, h = u, m = 2 * o - s, d = c, g = 2 * o - i, p = a, y = o * Math.sqrt(2) + n * (Math.sqrt(2) - 2), b = n * (Math.sqrt(2) - 1), S = `polygon(${b}px 100%, 50% ${b}px, ${2 * o - b}px 100%, ${b}px 100%)`, C = `path('M ${i} ${a} A ${n} ${n} 0 0 0 ${s} ${c} L ${l} ${u} A ${t} ${t} 0 0 1 ${f} ${h} L ${m} ${d} A ${n} ${n} 0 0 0 ${g} ${p} Z')`;
  return {
    arrowShadowWidth: y,
    arrowPath: C,
    arrowPolygon: S
  };
}
const WE = (e, r, t) => {
  const {
    sizePopupArrow: n,
    arrowPolygon: o,
    arrowPath: i,
    arrowShadowWidth: a,
    borderRadiusXS: s,
    calc: c
  } = e;
  return {
    pointerEvents: "none",
    width: n,
    height: n,
    overflow: "hidden",
    "&::before": {
      position: "absolute",
      bottom: 0,
      insetInlineStart: 0,
      width: n,
      height: c(n).div(2).equal(),
      background: r,
      clipPath: {
        _multi_value_: !0,
        value: [o, i]
      },
      content: '""'
    },
    "&::after": {
      content: '""',
      position: "absolute",
      width: a,
      height: a,
      bottom: 0,
      insetInline: 0,
      margin: "auto",
      borderRadius: {
        _skip_check_: !0,
        value: `0 0 ${ot(s)} 0`
      },
      transform: "translateY(50%) rotate(-135deg)",
      boxShadow: t,
      zIndex: 0,
      background: "transparent"
    }
  };
}, Bg = 8;
function Vg(e) {
  const {
    contentRadius: r,
    limitVerticalRadius: t
  } = e, n = r > 12 ? r + 2 : 12;
  return {
    arrowOffsetHorizontal: n,
    arrowOffsetVertical: t ? Bg : n
  };
}
function ua(e, r) {
  return e ? r : {};
}
function qE(e, r, t) {
  const {
    componentCls: n,
    boxShadowPopoverArrow: o,
    arrowOffsetVertical: i,
    arrowOffsetHorizontal: a
  } = e, {
    arrowDistance: s = 0,
    arrowPlacement: c = {
      left: !0,
      right: !0,
      top: !0,
      bottom: !0
    }
  } = {};
  return {
    [n]: Object.assign(Object.assign(Object.assign(Object.assign({
      // ============================ Basic ============================
      [`${n}-arrow`]: [Object.assign(Object.assign({
        position: "absolute",
        zIndex: 1,
        display: "block"
      }, WE(e, r, o)), {
        "&:before": {
          background: r
        }
      })]
    }, ua(!!c.top, {
      [[`&-placement-top > ${n}-arrow`, `&-placement-topLeft > ${n}-arrow`, `&-placement-topRight > ${n}-arrow`].join(",")]: {
        bottom: s,
        transform: "translateY(100%) rotate(180deg)"
      },
      [`&-placement-top > ${n}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateX(-50%) translateY(100%) rotate(180deg)"
      },
      "&-placement-topLeft": {
        "--arrow-offset-horizontal": a,
        [`> ${n}-arrow`]: {
          left: {
            _skip_check_: !0,
            value: a
          }
        }
      },
      "&-placement-topRight": {
        "--arrow-offset-horizontal": `calc(100% - ${ot(a)})`,
        [`> ${n}-arrow`]: {
          right: {
            _skip_check_: !0,
            value: a
          }
        }
      }
    })), ua(!!c.bottom, {
      [[`&-placement-bottom > ${n}-arrow`, `&-placement-bottomLeft > ${n}-arrow`, `&-placement-bottomRight > ${n}-arrow`].join(",")]: {
        top: s,
        transform: "translateY(-100%)"
      },
      [`&-placement-bottom > ${n}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateX(-50%) translateY(-100%)"
      },
      "&-placement-bottomLeft": {
        "--arrow-offset-horizontal": a,
        [`> ${n}-arrow`]: {
          left: {
            _skip_check_: !0,
            value: a
          }
        }
      },
      "&-placement-bottomRight": {
        "--arrow-offset-horizontal": `calc(100% - ${ot(a)})`,
        [`> ${n}-arrow`]: {
          right: {
            _skip_check_: !0,
            value: a
          }
        }
      }
    })), ua(!!c.left, {
      [[`&-placement-left > ${n}-arrow`, `&-placement-leftTop > ${n}-arrow`, `&-placement-leftBottom > ${n}-arrow`].join(",")]: {
        right: {
          _skip_check_: !0,
          value: s
        },
        transform: "translateX(100%) rotate(90deg)"
      },
      [`&-placement-left > ${n}-arrow`]: {
        top: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(100%) rotate(90deg)"
      },
      [`&-placement-leftTop > ${n}-arrow`]: {
        top: i
      },
      [`&-placement-leftBottom > ${n}-arrow`]: {
        bottom: i
      }
    })), ua(!!c.right, {
      [[`&-placement-right > ${n}-arrow`, `&-placement-rightTop > ${n}-arrow`, `&-placement-rightBottom > ${n}-arrow`].join(",")]: {
        left: {
          _skip_check_: !0,
          value: s
        },
        transform: "translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-right > ${n}-arrow`]: {
        top: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-rightTop > ${n}-arrow`]: {
        top: i
      },
      [`&-placement-rightBottom > ${n}-arrow`]: {
        bottom: i
      }
    }))
  };
}
function UE(e, r, t, n) {
  if (n === !1)
    return {
      adjustX: !1,
      adjustY: !1
    };
  const o = n && typeof n == "object" ? n : {}, i = {};
  switch (e) {
    case "top":
    case "bottom":
      i.shiftX = r.arrowOffsetHorizontal * 2 + t, i.shiftY = !0, i.adjustY = !0;
      break;
    case "left":
    case "right":
      i.shiftY = r.arrowOffsetVertical * 2 + t, i.shiftX = !0, i.adjustX = !0;
      break;
  }
  const a = Object.assign(Object.assign({}, i), o);
  return a.shiftX || (a.adjustX = !0), a.shiftY || (a.adjustY = !0), a;
}
const I0 = {
  left: {
    points: ["cr", "cl"]
  },
  right: {
    points: ["cl", "cr"]
  },
  top: {
    points: ["bc", "tc"]
  },
  bottom: {
    points: ["tc", "bc"]
  },
  topLeft: {
    points: ["bl", "tl"]
  },
  leftTop: {
    points: ["tr", "tl"]
  },
  topRight: {
    points: ["br", "tr"]
  },
  rightTop: {
    points: ["tl", "tr"]
  },
  bottomRight: {
    points: ["tr", "br"]
  },
  rightBottom: {
    points: ["bl", "br"]
  },
  bottomLeft: {
    points: ["tl", "bl"]
  },
  leftBottom: {
    points: ["br", "bl"]
  }
}, GE = {
  topLeft: {
    points: ["bl", "tc"]
  },
  leftTop: {
    points: ["tr", "cl"]
  },
  topRight: {
    points: ["br", "tc"]
  },
  rightTop: {
    points: ["tl", "cr"]
  },
  bottomRight: {
    points: ["tr", "bc"]
  },
  rightBottom: {
    points: ["bl", "cr"]
  },
  bottomLeft: {
    points: ["tl", "bc"]
  },
  leftBottom: {
    points: ["br", "cl"]
  }
}, KE = /* @__PURE__ */ new Set(["topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]);
function XE(e) {
  const {
    arrowWidth: r,
    autoAdjustOverflow: t,
    arrowPointAtCenter: n,
    offset: o,
    borderRadius: i
  } = e, a = r / 2, s = {};
  return Object.keys(I0).forEach((c) => {
    const l = n && GE[c] || I0[c], u = Object.assign(Object.assign({}, l), {
      offset: [0, 0],
      dynamicInset: !0
    });
    switch (s[c] = u, KE.has(c) && (u.autoArrow = !1), c) {
      case "top":
      case "topLeft":
      case "topRight":
        u.offset[1] = -a - o;
        break;
      case "bottom":
      case "bottomLeft":
      case "bottomRight":
        u.offset[1] = a + o;
        break;
      case "left":
      case "leftTop":
      case "leftBottom":
        u.offset[0] = -a - o;
        break;
      case "right":
      case "rightTop":
      case "rightBottom":
        u.offset[0] = a + o;
        break;
    }
    const f = Vg({
      contentRadius: i,
      limitVerticalRadius: !0
    });
    if (n)
      switch (c) {
        case "topLeft":
        case "bottomLeft":
          u.offset[0] = -f.arrowOffsetHorizontal - a;
          break;
        case "topRight":
        case "bottomRight":
          u.offset[0] = f.arrowOffsetHorizontal + a;
          break;
        case "leftTop":
        case "rightTop":
          u.offset[1] = -f.arrowOffsetHorizontal * 2 + a;
          break;
        case "leftBottom":
        case "rightBottom":
          u.offset[1] = f.arrowOffsetHorizontal * 2 - a;
          break;
      }
    u.overflow = UE(c, f, r, t), u.htmlRegion = "visibleFirst";
  }), s;
}
const YE = (e) => {
  const {
    calc: r,
    componentCls: t,
    // ant-tooltip
    tooltipMaxWidth: n,
    tooltipColor: o,
    tooltipBg: i,
    tooltipBorderRadius: a,
    zIndexPopup: s,
    controlHeight: c,
    boxShadowSecondary: l,
    paddingSM: u,
    paddingXS: f,
    arrowOffsetHorizontal: h,
    sizePopupArrow: m
  } = e, d = r(a).add(m).add(h).equal(), g = r(a).mul(2).add(m).equal();
  return [
    {
      [t]: Object.assign(Object.assign(Object.assign(Object.assign({}, Vs(e)), {
        position: "absolute",
        zIndex: s,
        display: "block",
        width: "max-content",
        maxWidth: n,
        visibility: "visible",
        // When use `autoArrow`, origin will follow the arrow position
        "--valid-offset-x": "var(--arrow-offset-horizontal, var(--arrow-x))",
        transformOrigin: ["var(--valid-offset-x, 50%)", "var(--arrow-y, 50%)"].join(" "),
        "&-hidden": {
          display: "none"
        },
        "--antd-arrow-background-color": i,
        // Wrapper for the tooltip content
        [`${t}-inner`]: {
          minWidth: g,
          minHeight: c,
          padding: `${ot(e.calc(u).div(2).equal())} ${ot(f)}`,
          color: o,
          textAlign: "start",
          textDecoration: "none",
          wordWrap: "break-word",
          backgroundColor: i,
          borderRadius: a,
          boxShadow: l,
          boxSizing: "border-box"
        },
        // Align placement should have another min width
        [["&-placement-topLeft", "&-placement-topRight", "&-placement-bottomLeft", "&-placement-bottomRight"].join(",")]: {
          minWidth: d
        },
        // Limit left and right placement radius
        [["&-placement-left", "&-placement-leftTop", "&-placement-leftBottom", "&-placement-right", "&-placement-rightTop", "&-placement-rightBottom"].join(",")]: {
          [`${t}-inner`]: {
            borderRadius: e.min(a, Bg)
          }
        },
        [`${t}-content`]: {
          position: "relative"
        }
      }), Fw(e, (p, y) => {
        let {
          darkColor: b
        } = y;
        return {
          [`&${t}-${p}`]: {
            [`${t}-inner`]: {
              backgroundColor: b
            },
            [`${t}-arrow`]: {
              "--antd-arrow-background-color": b
            }
          }
        };
      })), {
        // RTL
        "&-rtl": {
          direction: "rtl"
        }
      })
    },
    // Arrow Style
    qE(e, "var(--antd-arrow-background-color)"),
    // Pure Render
    {
      [`${t}-pure`]: {
        position: "relative",
        maxWidth: "none",
        margin: e.sizePopupArrow
      }
    }
  ];
}, JE = (e) => Object.assign(Object.assign({
  zIndexPopup: e.zIndexPopupBase + 70
}, Vg({
  contentRadius: e.borderRadius,
  limitVerticalRadius: !0
})), HE(Yt(e, {
  borderRadiusOuter: Math.min(e.borderRadiusOuter, 4)
}))), Hg = function(e) {
  let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return en("Tooltip", (n) => {
    const {
      borderRadius: o,
      colorTextLightSolid: i,
      colorBgSpotlight: a
    } = n, s = Yt(n, {
      // default variables
      tooltipMaxWidth: 250,
      tooltipColor: i,
      tooltipBorderRadius: o,
      tooltipBg: a
    });
    return [YE(s), H_(n, "zoom-big-fast")];
  }, JE, {
    resetStyle: !1,
    // Popover use Tooltip as internal component. We do not need to handle this.
    injectStyle: r
  })(e);
}, QE = Mn.map((e) => `${e}-inverse`);
function ZE(e) {
  return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0) ? [].concat(Re(QE), Re(Mn)).includes(e) : Mn.includes(e);
}
function Wg(e, r) {
  const t = ZE(r), n = fe({
    [`${e}-${r}`]: r && t
  }), o = {}, i = {};
  return r && !t && (o.background = r, i["--antd-arrow-background-color"] = r), {
    className: n,
    overlayStyle: o,
    arrowStyle: i
  };
}
const e5 = (e) => {
  const {
    prefixCls: r,
    className: t,
    placement: n = "top",
    title: o,
    color: i,
    overlayInnerStyle: a
  } = e, {
    getPrefixCls: s
  } = x.useContext(er), c = s("tooltip", r), [l, u, f] = Hg(c), h = Wg(c, i), m = h.arrowStyle, d = Object.assign(Object.assign({}, a), h.overlayStyle), g = fe(u, f, c, `${c}-pure`, `${c}-placement-${n}`, t, h.className);
  return l(/* @__PURE__ */ x.createElement("div", {
    className: g,
    style: m
  }, /* @__PURE__ */ x.createElement("div", {
    className: `${c}-arrow`
  }), /* @__PURE__ */ x.createElement(zg, Object.assign({}, e, {
    className: u,
    prefixCls: c,
    overlayInnerStyle: d
  }), o)));
};
var t5 = function(e, r) {
  var t = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    r.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (t[n[o]] = e[n[o]]);
  return t;
};
const r5 = /* @__PURE__ */ x.forwardRef((e, r) => {
  var t, n;
  const {
    prefixCls: o,
    openClassName: i,
    getTooltipContainer: a,
    color: s,
    overlayInnerStyle: c,
    children: l,
    afterOpenChange: u,
    afterVisibleChange: f,
    destroyTooltipOnHide: h,
    arrow: m = !0,
    title: d,
    overlay: g,
    builtinPlacements: p,
    arrowPointAtCenter: y = !1,
    autoAdjustOverflow: b = !0,
    motion: S,
    getPopupContainer: C,
    placement: v = "top",
    mouseEnterDelay: _ = 0.1,
    mouseLeaveDelay: w = 0.1,
    overlayStyle: A,
    rootClassName: M,
    overlayClassName: k,
    styles: V,
    classNames: U
  } = e, L = t5(e, ["prefixCls", "openClassName", "getTooltipContainer", "color", "overlayInnerStyle", "children", "afterOpenChange", "afterVisibleChange", "destroyTooltipOnHide", "arrow", "title", "overlay", "builtinPlacements", "arrowPointAtCenter", "autoAdjustOverflow", "motion", "getPopupContainer", "placement", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "rootClassName", "overlayClassName", "styles", "classNames"]), z = !!m, [, H] = bn(), {
    getPopupContainer: P,
    getPrefixCls: I,
    direction: N,
    className: B,
    style: W,
    classNames: Y,
    styles: X
  } = kn("tooltip"), Z = Xt("Tooltip"), G = x.useRef(null), te = () => {
    var Le;
    (Le = G.current) === null || Le === void 0 || Le.forceAlign();
  };
  x.useImperativeHandle(r, () => {
    var Le, Ze;
    return {
      forceAlign: te,
      forcePopupAlign: () => {
        Z.deprecated(!1, "forcePopupAlign", "forceAlign"), te();
      },
      nativeElement: (Le = G.current) === null || Le === void 0 ? void 0 : Le.nativeElement,
      popupElement: (Ze = G.current) === null || Ze === void 0 ? void 0 : Ze.popupElement
    };
  }), process.env.NODE_ENV !== "production" && ([["visible", "open"], ["defaultVisible", "defaultOpen"], ["onVisibleChange", "onOpenChange"], ["afterVisibleChange", "afterOpenChange"], ["arrowPointAtCenter", "arrow={{ pointAtCenter: true }}"], ["overlayStyle", "styles={{ root: {} }}"], ["overlayInnerStyle", "styles={{ body: {} }}"], ["overlayClassName", 'classNames={{ root: "" }}']].forEach((Le) => {
    let [Ze, Fe] = Le;
    Z.deprecated(!(Ze in e), Ze, Fe);
  }), process.env.NODE_ENV !== "production" && Z(!h || typeof h == "boolean", "usage", "`destroyTooltipOnHide` no need config `keepParent` anymore. Please use `boolean` value directly."), process.env.NODE_ENV !== "production" && Z(!m || typeof m == "boolean" || !("arrowPointAtCenter" in m), "deprecated", "`arrowPointAtCenter` in `arrow` is deprecated. Please use `pointAtCenter` instead."));
  const [ie, de] = In(!1, {
    value: (t = e.open) !== null && t !== void 0 ? t : e.visible,
    defaultValue: (n = e.defaultOpen) !== null && n !== void 0 ? n : e.defaultVisible
  }), pe = !d && !g && d !== 0, xe = (Le) => {
    var Ze, Fe;
    de(pe ? !1 : Le), pe || ((Ze = e.onOpenChange) === null || Ze === void 0 || Ze.call(e, Le), (Fe = e.onVisibleChange) === null || Fe === void 0 || Fe.call(e, Le));
  }, we = x.useMemo(() => {
    var Le, Ze;
    let Fe = y;
    return typeof m == "object" && (Fe = (Ze = (Le = m.pointAtCenter) !== null && Le !== void 0 ? Le : m.arrowPointAtCenter) !== null && Ze !== void 0 ? Ze : y), p || XE({
      arrowPointAtCenter: Fe,
      autoAdjustOverflow: b,
      arrowWidth: z ? H.sizePopupArrow : 0,
      borderRadius: H.borderRadius,
      offset: H.marginXXS
    });
  }, [y, m, p, H]), ae = x.useMemo(() => d === 0 ? d : g || d || "", [g, d]), se = /* @__PURE__ */ x.createElement(Ou, {
    space: !0
  }, typeof ae == "function" ? ae() : ae), _e = I("tooltip", o), re = I(), me = e["data-popover-inject"];
  let ce = ie;
  !("open" in e) && !("visible" in e) && pe && (ce = !1);
  const ve = /* @__PURE__ */ x.isValidElement(l) && !ag(l) ? l : /* @__PURE__ */ x.createElement("span", null, l), Se = ve.props, ye = !Se.className || typeof Se.className == "string" ? fe(Se.className, i || `${_e}-open`) : Se.className, [Ve, $e, $] = Hg(_e, !me), O = Wg(_e, s), E = O.arrowStyle, F = fe(k, {
    [`${_e}-rtl`]: N === "rtl"
  }, O.className, M, $e, $, B, Y.root, U == null ? void 0 : U.root), T = fe(Y.body, U == null ? void 0 : U.body), [ge, Be] = MS("Tooltip", L.zIndex), We = /* @__PURE__ */ x.createElement(VE, Object.assign({}, L, {
    zIndex: ge,
    showArrow: z,
    placement: v,
    mouseEnterDelay: _,
    mouseLeaveDelay: w,
    prefixCls: _e,
    classNames: {
      root: F,
      body: T
    },
    styles: {
      root: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, E), X.root), W), A), V == null ? void 0 : V.root),
      body: Object.assign(Object.assign(Object.assign(Object.assign({}, X.body), c), V == null ? void 0 : V.body), O.overlayStyle)
    },
    getTooltipContainer: C || a || P,
    ref: G,
    builtinPlacements: we,
    overlay: se,
    visible: ce,
    onVisibleChange: xe,
    afterVisibleChange: u ?? f,
    arrowContent: /* @__PURE__ */ x.createElement("span", {
      className: `${_e}-arrow-content`
    }),
    motion: {
      motionName: GS(re, "zoom-big-fast", e.transitionName),
      motionDeadline: 1e3
    },
    destroyTooltipOnHide: !!h
  }), ce ? Si(ve, {
    className: ye
  }) : ve);
  return Ve(/* @__PURE__ */ x.createElement(ff.Provider, {
    value: Be
  }, We));
}), $i = r5;
process.env.NODE_ENV !== "production" && ($i.displayName = "Tooltip");
$i._InternalPanelDoNotUseOrYouWillBeFired = e5;
function gf(e) {
  return Yt(e, {
    inputAffixPadding: e.paddingXXS
  });
}
const mf = (e) => {
  const {
    controlHeight: r,
    fontSize: t,
    lineHeight: n,
    lineWidth: o,
    controlHeightSM: i,
    controlHeightLG: a,
    fontSizeLG: s,
    lineHeightLG: c,
    paddingSM: l,
    controlPaddingHorizontalSM: u,
    controlPaddingHorizontal: f,
    colorFillAlter: h,
    colorPrimaryHover: m,
    colorPrimary: d,
    controlOutlineWidth: g,
    controlOutline: p,
    colorErrorOutline: y,
    colorWarningOutline: b,
    colorBgContainer: S,
    inputFontSize: C,
    inputFontSizeLG: v,
    inputFontSizeSM: _
  } = e, w = C || t, A = _ || w, M = v || s, k = Math.round((r - w * n) / 2 * 10) / 10 - o, V = Math.round((i - A * n) / 2 * 10) / 10 - o, U = Math.ceil((a - M * c) / 2 * 10) / 10 - o;
  return {
    paddingBlock: Math.max(k, 0),
    paddingBlockSM: Math.max(V, 0),
    paddingBlockLG: Math.max(U, 0),
    paddingInline: l - o,
    paddingInlineSM: u - o,
    paddingInlineLG: f - o,
    addonBg: h,
    activeBorderColor: d,
    hoverBorderColor: m,
    activeShadow: `0 0 0 ${g}px ${p}`,
    errorActiveShadow: `0 0 0 ${g}px ${y}`,
    warningActiveShadow: `0 0 0 ${g}px ${b}`,
    hoverBg: S,
    activeBg: S,
    inputFontSize: w,
    inputFontSizeLG: M,
    inputFontSizeSM: A
  };
}, n5 = (e) => ({
  borderColor: e.hoverBorderColor,
  backgroundColor: e.hoverBg
}), vf = (e) => ({
  color: e.colorTextDisabled,
  backgroundColor: e.colorBgContainerDisabled,
  borderColor: e.colorBorder,
  boxShadow: "none",
  cursor: "not-allowed",
  opacity: 1,
  "input[disabled], textarea[disabled]": {
    cursor: "not-allowed"
  },
  "&:hover:not([disabled])": Object.assign({}, n5(Yt(e, {
    hoverBorderColor: e.colorBorder,
    hoverBg: e.colorBgContainerDisabled
  })))
}), qg = (e, r) => ({
  background: e.colorBgContainer,
  borderWidth: e.lineWidth,
  borderStyle: e.lineType,
  borderColor: r.borderColor,
  "&:hover": {
    borderColor: r.hoverBorderColor,
    backgroundColor: e.hoverBg
  },
  "&:focus, &:focus-within": {
    borderColor: r.activeBorderColor,
    boxShadow: r.activeShadow,
    outline: 0,
    backgroundColor: e.activeBg
  }
}), M0 = (e, r) => ({
  [`&${e.componentCls}-status-${r.status}:not(${e.componentCls}-disabled)`]: Object.assign(Object.assign({}, qg(e, r)), {
    [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
      color: r.affixColor
    }
  }),
  [`&${e.componentCls}-status-${r.status}${e.componentCls}-disabled`]: {
    borderColor: r.borderColor
  }
}), o5 = (e, r) => ({
  "&-outlined": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, qg(e, {
    borderColor: e.colorBorder,
    hoverBorderColor: e.hoverBorderColor,
    activeBorderColor: e.activeBorderColor,
    activeShadow: e.activeShadow
  })), {
    [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign({}, vf(e))
  }), M0(e, {
    status: "error",
    borderColor: e.colorError,
    hoverBorderColor: e.colorErrorBorderHover,
    activeBorderColor: e.colorError,
    activeShadow: e.errorActiveShadow,
    affixColor: e.colorError
  })), M0(e, {
    status: "warning",
    borderColor: e.colorWarning,
    hoverBorderColor: e.colorWarningBorderHover,
    activeBorderColor: e.colorWarning,
    activeShadow: e.warningActiveShadow,
    affixColor: e.colorWarning
  })), r)
}), F0 = (e, r) => ({
  [`&${e.componentCls}-group-wrapper-status-${r.status}`]: {
    [`${e.componentCls}-group-addon`]: {
      borderColor: r.addonBorderColor,
      color: r.addonColor
    }
  }
}), i5 = (e) => ({
  "&-outlined": Object.assign(Object.assign(Object.assign({
    [`${e.componentCls}-group`]: {
      "&-addon": {
        background: e.addonBg,
        border: `${ot(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
      },
      "&-addon:first-child": {
        borderInlineEnd: 0
      },
      "&-addon:last-child": {
        borderInlineStart: 0
      }
    }
  }, F0(e, {
    status: "error",
    addonBorderColor: e.colorError,
    addonColor: e.colorErrorText
  })), F0(e, {
    status: "warning",
    addonBorderColor: e.colorWarning,
    addonColor: e.colorWarningText
  })), {
    [`&${e.componentCls}-group-wrapper-disabled`]: {
      [`${e.componentCls}-group-addon`]: Object.assign({}, vf(e))
    }
  })
}), a5 = (e, r) => {
  const {
    componentCls: t
  } = e;
  return {
    "&-borderless": Object.assign({
      background: "transparent",
      border: "none",
      "&:focus, &:focus-within": {
        outline: "none"
      },
      // >>>>> Disabled
      [`&${t}-disabled, &[disabled]`]: {
        color: e.colorTextDisabled,
        cursor: "not-allowed"
      },
      // >>>>> Status
      [`&${t}-status-error`]: {
        "&, & input, & textarea": {
          color: e.colorError
        }
      },
      [`&${t}-status-warning`]: {
        "&, & input, & textarea": {
          color: e.colorWarning
        }
      }
    }, r)
  };
}, Ug = (e, r) => {
  var t;
  return {
    background: r.bg,
    borderWidth: e.lineWidth,
    borderStyle: e.lineType,
    borderColor: "transparent",
    "input&, & input, textarea&, & textarea": {
      color: (t = r == null ? void 0 : r.inputColor) !== null && t !== void 0 ? t : "unset"
    },
    "&:hover": {
      background: r.hoverBg
    },
    "&:focus, &:focus-within": {
      outline: 0,
      borderColor: r.activeBorderColor,
      backgroundColor: e.activeBg
    }
  };
}, j0 = (e, r) => ({
  [`&${e.componentCls}-status-${r.status}:not(${e.componentCls}-disabled)`]: Object.assign(Object.assign({}, Ug(e, r)), {
    [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
      color: r.affixColor
    }
  })
}), s5 = (e, r) => ({
  "&-filled": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Ug(e, {
    bg: e.colorFillTertiary,
    hoverBg: e.colorFillSecondary,
    activeBorderColor: e.activeBorderColor
  })), {
    [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign({}, vf(e))
  }), j0(e, {
    status: "error",
    bg: e.colorErrorBg,
    hoverBg: e.colorErrorBgHover,
    activeBorderColor: e.colorError,
    inputColor: e.colorErrorText,
    affixColor: e.colorError
  })), j0(e, {
    status: "warning",
    bg: e.colorWarningBg,
    hoverBg: e.colorWarningBgHover,
    activeBorderColor: e.colorWarning,
    inputColor: e.colorWarningText,
    affixColor: e.colorWarning
  })), r)
}), D0 = (e, r) => ({
  [`&${e.componentCls}-group-wrapper-status-${r.status}`]: {
    [`${e.componentCls}-group-addon`]: {
      background: r.addonBg,
      color: r.addonColor
    }
  }
}), c5 = (e) => ({
  "&-filled": Object.assign(Object.assign(Object.assign({
    [`${e.componentCls}-group`]: {
      "&-addon": {
        background: e.colorFillTertiary
      },
      [`${e.componentCls}-filled:not(:focus):not(:focus-within)`]: {
        "&:not(:first-child)": {
          borderInlineStart: `${ot(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
        },
        "&:not(:last-child)": {
          borderInlineEnd: `${ot(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
        }
      }
    }
  }, D0(e, {
    status: "error",
    addonBg: e.colorErrorBg,
    addonColor: e.colorErrorText
  })), D0(e, {
    status: "warning",
    addonBg: e.colorWarningBg,
    addonColor: e.colorWarningText
  })), {
    [`&${e.componentCls}-group-wrapper-disabled`]: {
      [`${e.componentCls}-group`]: {
        "&-addon": {
          background: e.colorFillTertiary,
          color: e.colorTextDisabled
        },
        "&-addon:first-child": {
          borderInlineStart: `${ot(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderTop: `${ot(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderBottom: `${ot(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
        },
        "&-addon:last-child": {
          borderInlineEnd: `${ot(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderTop: `${ot(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderBottom: `${ot(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
        }
      }
    }
  })
}), Gg = (e, r) => ({
  background: e.colorBgContainer,
  borderWidth: `${ot(e.lineWidth)} 0`,
  borderStyle: `${e.lineType} none`,
  borderColor: `transparent transparent ${r.borderColor} transparent`,
  borderRadius: 0,
  "&:hover": {
    borderColor: `transparent transparent ${r.borderColor} transparent`,
    backgroundColor: e.hoverBg
  },
  "&:focus, &:focus-within": {
    borderColor: `transparent transparent ${r.borderColor} transparent`,
    outline: 0,
    backgroundColor: e.activeBg
  }
}), k0 = (e, r) => ({
  [`&${e.componentCls}-status-${r.status}:not(${e.componentCls}-disabled)`]: Object.assign(Object.assign({}, Gg(e, r)), {
    [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
      color: r.affixColor
    }
  }),
  [`&${e.componentCls}-status-${r.status}${e.componentCls}-disabled`]: {
    borderColor: `transparent transparent ${r.borderColor} transparent`
  }
}), l5 = (e, r) => ({
  "&-underlined": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Gg(e, {
    borderColor: e.colorBorder,
    hoverBorderColor: e.hoverBorderColor,
    activeBorderColor: e.activeBorderColor,
    activeShadow: e.activeShadow
  })), {
    // >>>>> Disabled
    [`&${e.componentCls}-disabled, &[disabled]`]: {
      color: e.colorTextDisabled,
      boxShadow: "none",
      cursor: "not-allowed",
      "&:hover": {
        borderColor: `transparent transparent ${e.colorBorder} transparent`
      }
    },
    "input[disabled], textarea[disabled]": {
      cursor: "not-allowed"
    }
  }), k0(e, {
    status: "error",
    borderColor: e.colorError,
    hoverBorderColor: e.colorErrorBorderHover,
    activeBorderColor: e.colorError,
    activeShadow: e.errorActiveShadow,
    affixColor: e.colorError
  })), k0(e, {
    status: "warning",
    borderColor: e.colorWarning,
    hoverBorderColor: e.colorWarningBorderHover,
    activeBorderColor: e.colorWarning,
    activeShadow: e.warningActiveShadow,
    affixColor: e.colorWarning
  })), r)
}), u5 = (e) => ({
  // Firefox
  "&::-moz-placeholder": {
    opacity: 1
  },
  "&::placeholder": {
    color: e,
    userSelect: "none"
    // https://github.com/ant-design/ant-design/pull/32639
  },
  "&:placeholder-shown": {
    textOverflow: "ellipsis"
  }
}), Kg = (e) => {
  const {
    paddingBlockLG: r,
    lineHeightLG: t,
    borderRadiusLG: n,
    paddingInlineLG: o
  } = e;
  return {
    padding: `${ot(r)} ${ot(o)}`,
    fontSize: e.inputFontSizeLG,
    lineHeight: t,
    borderRadius: n
  };
}, Xg = (e) => ({
  padding: `${ot(e.paddingBlockSM)} ${ot(e.paddingInlineSM)}`,
  fontSize: e.inputFontSizeSM,
  borderRadius: e.borderRadiusSM
}), Yg = (e) => Object.assign(Object.assign({
  position: "relative",
  display: "inline-block",
  width: "100%",
  minWidth: 0,
  padding: `${ot(e.paddingBlock)} ${ot(e.paddingInline)}`,
  color: e.colorText,
  fontSize: e.inputFontSize,
  lineHeight: e.lineHeight,
  borderRadius: e.borderRadius,
  transition: `all ${e.motionDurationMid}`
}, u5(e.colorTextPlaceholder)), {
  // Size
  "&-lg": Object.assign({}, Kg(e)),
  "&-sm": Object.assign({}, Xg(e)),
  // RTL
  "&-rtl, &-textarea-rtl": {
    direction: "rtl"
  }
}), f5 = (e) => {
  const {
    componentCls: r,
    antCls: t
  } = e;
  return {
    position: "relative",
    display: "table",
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
    // Undo padding and float of grid classes
    "&[class*='col-']": {
      paddingInlineEnd: e.paddingXS,
      "&:last-child": {
        paddingInlineEnd: 0
      }
    },
    // Sizing options
    [`&-lg ${r}, &-lg > ${r}-group-addon`]: Object.assign({}, Kg(e)),
    [`&-sm ${r}, &-sm > ${r}-group-addon`]: Object.assign({}, Xg(e)),
    // Fix https://github.com/ant-design/ant-design/issues/5754
    [`&-lg ${t}-select-single ${t}-select-selector`]: {
      height: e.controlHeightLG
    },
    [`&-sm ${t}-select-single ${t}-select-selector`]: {
      height: e.controlHeightSM
    },
    [`> ${r}`]: {
      display: "table-cell",
      "&:not(:first-child):not(:last-child)": {
        borderRadius: 0
      }
    },
    [`${r}-group`]: {
      "&-addon, &-wrap": {
        display: "table-cell",
        width: 1,
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        "&:not(:first-child):not(:last-child)": {
          borderRadius: 0
        }
      },
      "&-wrap > *": {
        display: "block !important"
      },
      "&-addon": {
        position: "relative",
        padding: `0 ${ot(e.paddingInline)}`,
        color: e.colorText,
        fontWeight: "normal",
        fontSize: e.inputFontSize,
        textAlign: "center",
        borderRadius: e.borderRadius,
        transition: `all ${e.motionDurationSlow}`,
        lineHeight: 1,
        // Reset Select's style in addon
        [`${t}-select`]: {
          margin: `${ot(e.calc(e.paddingBlock).add(1).mul(-1).equal())} ${ot(e.calc(e.paddingInline).mul(-1).equal())}`,
          [`&${t}-select-single:not(${t}-select-customize-input):not(${t}-pagination-size-changer)`]: {
            [`${t}-select-selector`]: {
              backgroundColor: "inherit",
              border: `${ot(e.lineWidth)} ${e.lineType} transparent`,
              boxShadow: "none"
            }
          }
        },
        // https://github.com/ant-design/ant-design/issues/31333
        [`${t}-cascader-picker`]: {
          margin: `-9px ${ot(e.calc(e.paddingInline).mul(-1).equal())}`,
          backgroundColor: "transparent",
          [`${t}-cascader-input`]: {
            textAlign: "start",
            border: 0,
            boxShadow: "none"
          }
        }
      }
    },
    [r]: {
      width: "100%",
      marginBottom: 0,
      textAlign: "inherit",
      "&:focus": {
        zIndex: 1,
        // Fix https://gw.alipayobjects.com/zos/rmsportal/DHNpoqfMXSfrSnlZvhsJ.png
        borderInlineEndWidth: 1
      },
      "&:hover": {
        zIndex: 1,
        borderInlineEndWidth: 1,
        [`${r}-search-with-button &`]: {
          zIndex: 0
        }
      }
    },
    // Reset rounded corners
    [`> ${r}:first-child, ${r}-group-addon:first-child`]: {
      borderStartEndRadius: 0,
      borderEndEndRadius: 0,
      // Reset Select's style in addon
      [`${t}-select ${t}-select-selector`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${r}-affix-wrapper`]: {
      [`&:not(:first-child) ${r}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      },
      [`&:not(:last-child) ${r}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${r}:last-child, ${r}-group-addon:last-child`]: {
      borderStartStartRadius: 0,
      borderEndStartRadius: 0,
      // Reset Select's style in addon
      [`${t}-select ${t}-select-selector`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`${r}-affix-wrapper`]: {
      "&:not(:last-child)": {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
        [`${r}-search &`]: {
          borderStartStartRadius: e.borderRadius,
          borderEndStartRadius: e.borderRadius
        }
      },
      [`&:not(:first-child), ${r}-search &:not(:first-child)`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&${r}-group-compact`]: Object.assign(Object.assign({
      display: "block"
    }, Tw()), {
      [`${r}-group-addon, ${r}-group-wrap, > ${r}`]: {
        "&:not(:first-child):not(:last-child)": {
          borderInlineEndWidth: e.lineWidth,
          "&:hover, &:focus": {
            zIndex: 1
          }
        }
      },
      "& > *": {
        display: "inline-flex",
        float: "none",
        verticalAlign: "top",
        // https://github.com/ant-design/ant-design-pro/issues/139
        borderRadius: 0
      },
      [`
        & > ${r}-affix-wrapper,
        & > ${r}-number-affix-wrapper,
        & > ${t}-picker-range
      `]: {
        display: "inline-flex"
      },
      "& > *:not(:last-child)": {
        marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal(),
        borderInlineEndWidth: e.lineWidth
      },
      // Undo float for .ant-input-group .ant-input
      [r]: {
        float: "none"
      },
      // reset border for Select, DatePicker, AutoComplete, Cascader, Mention, TimePicker, Input
      [`& > ${t}-select > ${t}-select-selector,
      & > ${t}-select-auto-complete ${r},
      & > ${t}-cascader-picker ${r},
      & > ${r}-group-wrapper ${r}`]: {
        borderInlineEndWidth: e.lineWidth,
        borderRadius: 0,
        "&:hover, &:focus": {
          zIndex: 1
        }
      },
      [`& > ${t}-select-focused`]: {
        zIndex: 1
      },
      // update z-index for arrow icon
      [`& > ${t}-select > ${t}-select-arrow`]: {
        zIndex: 1
        // https://github.com/ant-design/ant-design/issues/20371
      },
      [`& > *:first-child,
      & > ${t}-select:first-child > ${t}-select-selector,
      & > ${t}-select-auto-complete:first-child ${r},
      & > ${t}-cascader-picker:first-child ${r}`]: {
        borderStartStartRadius: e.borderRadius,
        borderEndStartRadius: e.borderRadius
      },
      [`& > *:last-child,
      & > ${t}-select:last-child > ${t}-select-selector,
      & > ${t}-cascader-picker:last-child ${r},
      & > ${t}-cascader-picker-focused:last-child ${r}`]: {
        borderInlineEndWidth: e.lineWidth,
        borderStartEndRadius: e.borderRadius,
        borderEndEndRadius: e.borderRadius
      },
      // https://github.com/ant-design/ant-design/issues/12493
      [`& > ${t}-select-auto-complete ${r}`]: {
        verticalAlign: "top"
      },
      [`${r}-group-wrapper + ${r}-group-wrapper`]: {
        marginInlineStart: e.calc(e.lineWidth).mul(-1).equal(),
        [`${r}-affix-wrapper`]: {
          borderRadius: 0
        }
      },
      [`${r}-group-wrapper:not(:last-child)`]: {
        [`&${r}-search > ${r}-group`]: {
          [`& > ${r}-group-addon > ${r}-search-button`]: {
            borderRadius: 0
          },
          [`& > ${r}`]: {
            borderStartStartRadius: e.borderRadius,
            borderStartEndRadius: 0,
            borderEndEndRadius: 0,
            borderEndStartRadius: e.borderRadius
          }
        }
      }
    })
  };
}, d5 = (e) => {
  const {
    componentCls: r,
    controlHeightSM: t,
    lineWidth: n,
    calc: o
  } = e, a = o(t).sub(o(n).mul(2)).sub(16).div(2).equal();
  return {
    [r]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Vs(e)), Yg(e)), o5(e)), s5(e)), a5(e)), l5(e)), {
      '&[type="color"]': {
        height: e.controlHeight,
        [`&${r}-lg`]: {
          height: e.controlHeightLG
        },
        [`&${r}-sm`]: {
          height: t,
          paddingTop: a,
          paddingBottom: a
        }
      },
      '&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration': {
        appearance: "none"
      }
    })
  };
}, h5 = (e) => {
  const {
    componentCls: r
  } = e;
  return {
    // ========================= Input =========================
    [`${r}-clear-icon`]: {
      margin: 0,
      padding: 0,
      lineHeight: 0,
      color: e.colorTextQuaternary,
      fontSize: e.fontSizeIcon,
      verticalAlign: -1,
      // https://github.com/ant-design/ant-design/pull/18151
      // https://codesandbox.io/s/wizardly-sun-u10br
      cursor: "pointer",
      transition: `color ${e.motionDurationSlow}`,
      border: "none",
      outline: "none",
      backgroundColor: "transparent",
      "&:hover": {
        color: e.colorTextTertiary
      },
      "&:active": {
        color: e.colorText
      },
      "&-hidden": {
        visibility: "hidden"
      },
      "&-has-suffix": {
        margin: `0 ${ot(e.inputAffixPadding)}`
      }
    }
  };
}, p5 = (e) => {
  const {
    componentCls: r,
    inputAffixPadding: t,
    colorTextDescription: n,
    motionDurationSlow: o,
    colorIcon: i,
    colorIconHover: a,
    iconCls: s
  } = e, c = `${r}-affix-wrapper`, l = `${r}-affix-wrapper-disabled`;
  return {
    [c]: Object.assign(Object.assign(Object.assign(Object.assign({}, Yg(e)), {
      display: "inline-flex",
      [`&:not(${r}-disabled):hover`]: {
        zIndex: 1,
        [`${r}-search-with-button &`]: {
          zIndex: 0
        }
      },
      "&-focused, &:focus": {
        zIndex: 1
      },
      [`> input${r}`]: {
        padding: 0
      },
      [`> input${r}, > textarea${r}`]: {
        fontSize: "inherit",
        border: "none",
        borderRadius: 0,
        outline: "none",
        background: "transparent",
        color: "inherit",
        "&::-ms-reveal": {
          display: "none"
        },
        "&:focus": {
          boxShadow: "none !important"
        }
      },
      "&::before": {
        display: "inline-block",
        width: 0,
        visibility: "hidden",
        content: '"\\a0"'
      },
      [r]: {
        "&-prefix, &-suffix": {
          display: "flex",
          flex: "none",
          alignItems: "center",
          "> *:not(:last-child)": {
            marginInlineEnd: e.paddingXS
          }
        },
        "&-show-count-suffix": {
          color: n
        },
        "&-show-count-has-suffix": {
          marginInlineEnd: e.paddingXXS
        },
        "&-prefix": {
          marginInlineEnd: t
        },
        "&-suffix": {
          marginInlineStart: t
        }
      }
    }), h5(e)), {
      // password
      [`${s}${r}-password-icon`]: {
        color: i,
        cursor: "pointer",
        transition: `all ${o}`,
        "&:hover": {
          color: a
        }
      }
    }),
    // 覆盖 affix-wrapper borderRadius！
    [`${r}-underlined`]: {
      borderRadius: 0
    },
    [l]: {
      // password disabled
      [`${s}${r}-password-icon`]: {
        color: i,
        cursor: "not-allowed",
        "&:hover": {
          color: i
        }
      }
    }
  };
}, x5 = (e) => {
  const {
    componentCls: r,
    borderRadiusLG: t,
    borderRadiusSM: n
  } = e;
  return {
    [`${r}-group`]: Object.assign(Object.assign(Object.assign({}, Vs(e)), f5(e)), {
      "&-rtl": {
        direction: "rtl"
      },
      "&-wrapper": Object.assign(Object.assign(Object.assign({
        display: "inline-block",
        width: "100%",
        textAlign: "start",
        verticalAlign: "top",
        "&-rtl": {
          direction: "rtl"
        },
        // Size
        "&-lg": {
          [`${r}-group-addon`]: {
            borderRadius: t,
            fontSize: e.inputFontSizeLG
          }
        },
        "&-sm": {
          [`${r}-group-addon`]: {
            borderRadius: n
          }
        }
      }, i5(e)), c5(e)), {
        // '&-disabled': {
        //   [`${componentCls}-group-addon`]: {
        //     ...genDisabledStyle(token),
        //   },
        // },
        // Fix the issue of using icons in Space Compact mode
        // https://github.com/ant-design/ant-design/issues/42122
        [`&:not(${r}-compact-first-item):not(${r}-compact-last-item)${r}-compact-item`]: {
          [`${r}, ${r}-group-addon`]: {
            borderRadius: 0
          }
        },
        [`&:not(${r}-compact-last-item)${r}-compact-first-item`]: {
          [`${r}, ${r}-group-addon`]: {
            borderStartEndRadius: 0,
            borderEndEndRadius: 0
          }
        },
        [`&:not(${r}-compact-first-item)${r}-compact-last-item`]: {
          [`${r}, ${r}-group-addon`]: {
            borderStartStartRadius: 0,
            borderEndStartRadius: 0
          }
        },
        // Fix the issue of input use show-count param in space compact mode
        // https://github.com/ant-design/ant-design/issues/46872
        [`&:not(${r}-compact-last-item)${r}-compact-item`]: {
          [`${r}-affix-wrapper`]: {
            borderStartEndRadius: 0,
            borderEndEndRadius: 0
          }
        },
        // Fix the issue of input use `addonAfter` param in space compact mode
        // https://github.com/ant-design/ant-design/issues/52483
        [`&:not(${r}-compact-first-item)${r}-compact-item`]: {
          [`${r}-affix-wrapper`]: {
            borderStartStartRadius: 0,
            borderEndStartRadius: 0
          }
        }
      })
    })
  };
}, g5 = (e) => {
  const {
    componentCls: r,
    antCls: t
  } = e, n = `${r}-search`;
  return {
    [n]: {
      [r]: {
        "&:hover, &:focus": {
          [`+ ${r}-group-addon ${n}-button:not(${t}-btn-primary)`]: {
            borderInlineStartColor: e.colorPrimaryHover
          }
        }
      },
      [`${r}-affix-wrapper`]: {
        height: e.controlHeight,
        borderRadius: 0
      },
      // fix slight height diff in Firefox:
      // https://ant.design/components/auto-complete-cn/#auto-complete-demo-certain-category
      [`${r}-lg`]: {
        lineHeight: e.calc(e.lineHeightLG).sub(2e-4).equal()
      },
      [`> ${r}-group`]: {
        [`> ${r}-group-addon:last-child`]: {
          insetInlineStart: -1,
          padding: 0,
          border: 0,
          [`${n}-button`]: {
            // Fix https://github.com/ant-design/ant-design/issues/47150
            marginInlineEnd: -1,
            borderStartStartRadius: 0,
            borderEndStartRadius: 0,
            boxShadow: "none"
          },
          [`${n}-button:not(${t}-btn-primary)`]: {
            color: e.colorTextDescription,
            "&:hover": {
              color: e.colorPrimaryHover
            },
            "&:active": {
              color: e.colorPrimaryActive
            },
            [`&${t}-btn-loading::before`]: {
              insetInlineStart: 0,
              insetInlineEnd: 0,
              insetBlockStart: 0,
              insetBlockEnd: 0
            }
          }
        }
      },
      [`${n}-button`]: {
        height: e.controlHeight,
        "&:hover, &:focus": {
          zIndex: 1
        }
      },
      "&-large": {
        [`${r}-affix-wrapper, ${n}-button`]: {
          height: e.controlHeightLG
        }
      },
      "&-small": {
        [`${r}-affix-wrapper, ${n}-button`]: {
          height: e.controlHeightSM
        }
      },
      "&-rtl": {
        direction: "rtl"
      },
      // ===================== Compact Item Customized Styles =====================
      [`&${r}-compact-item`]: {
        [`&:not(${r}-compact-last-item)`]: {
          [`${r}-group-addon`]: {
            [`${r}-search-button`]: {
              marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal(),
              borderRadius: 0
            }
          }
        },
        [`&:not(${r}-compact-first-item)`]: {
          [`${r},${r}-affix-wrapper`]: {
            borderRadius: 0
          }
        },
        [`> ${r}-group-addon ${r}-search-button,
        > ${r},
        ${r}-affix-wrapper`]: {
          "&:hover, &:focus, &:active": {
            zIndex: 2
          }
        },
        [`> ${r}-affix-wrapper-focused`]: {
          zIndex: 2
        }
      }
    }
  };
}, m5 = (e) => {
  const {
    componentCls: r
  } = e;
  return {
    [`${r}-out-of-range`]: {
      [`&, & input, & textarea, ${r}-show-count-suffix, ${r}-data-count`]: {
        color: e.colorError
      }
    }
  };
}, Jg = en(["Input", "Shared"], (e) => {
  const r = Yt(e, gf(e));
  return [d5(r), p5(r)];
}, mf, {
  resetFont: !1
}), v5 = en(["Input", "Component"], (e) => {
  const r = Yt(e, gf(e));
  return [
    x5(r),
    g5(r),
    m5(r),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    Cg(r)
  ];
}, mf, {
  resetFont: !1
});
function b5(e, r, t) {
  var n = t || {}, o = n.noTrailing, i = o === void 0 ? !1 : o, a = n.noLeading, s = a === void 0 ? !1 : a, c = n.debounceMode, l = c === void 0 ? void 0 : c, u, f = !1, h = 0;
  function m() {
    u && clearTimeout(u);
  }
  function d(p) {
    var y = p || {}, b = y.upcomingOnly, S = b === void 0 ? !1 : b;
    m(), f = !S;
  }
  function g() {
    for (var p = arguments.length, y = new Array(p), b = 0; b < p; b++)
      y[b] = arguments[b];
    var S = this, C = Date.now() - h;
    if (f)
      return;
    function v() {
      h = Date.now(), r.apply(S, y);
    }
    function _() {
      u = void 0;
    }
    !s && l && !u && v(), m(), l === void 0 && C > e ? s ? (h = Date.now(), i || (u = setTimeout(l ? _ : v, e))) : v() : i !== !0 && (u = setTimeout(l ? _ : v, l === void 0 ? e - C : e));
  }
  return g.cancel = d, g;
}
function y5(e, r, t) {
  var n = {}, o = n.atBegin, i = o === void 0 ? !1 : o;
  return b5(e, r, {
    debounceMode: i !== !1
  });
}
function w5(e) {
  return !!(e.addonBefore || e.addonAfter);
}
function S5(e) {
  return !!(e.prefix || e.suffix || e.allowClear);
}
function L0(e, r, t) {
  var n = r.cloneNode(!0), o = Object.create(e, {
    target: {
      value: n
    },
    currentTarget: {
      value: n
    }
  });
  return n.value = t, typeof r.selectionStart == "number" && typeof r.selectionEnd == "number" && (n.selectionStart = r.selectionStart, n.selectionEnd = r.selectionEnd), n.setSelectionRange = function() {
    r.setSelectionRange.apply(r, arguments);
  }, o;
}
function Ja(e, r, t, n) {
  if (t) {
    var o = r;
    if (r.type === "click") {
      o = L0(r, e, ""), t(o);
      return;
    }
    if (e.type !== "file" && n !== void 0) {
      o = L0(r, e, n), t(o);
      return;
    }
    t(o);
  }
}
function Qg(e, r) {
  if (e) {
    e.focus(r);
    var t = r || {}, n = t.cursor;
    if (n) {
      var o = e.value.length;
      switch (n) {
        case "start":
          e.setSelectionRange(0, 0);
          break;
        case "end":
          e.setSelectionRange(o, o);
          break;
        default:
          e.setSelectionRange(0, o);
      }
    }
  }
}
var Zg = /* @__PURE__ */ Q.forwardRef(function(e, r) {
  var t, n, o, i = e.inputElement, a = e.children, s = e.prefixCls, c = e.prefix, l = e.suffix, u = e.addonBefore, f = e.addonAfter, h = e.className, m = e.style, d = e.disabled, g = e.readOnly, p = e.focused, y = e.triggerFocus, b = e.allowClear, S = e.value, C = e.handleReset, v = e.hidden, _ = e.classes, w = e.classNames, A = e.dataAttrs, M = e.styles, k = e.components, V = e.onClear, U = a ?? i, L = (k == null ? void 0 : k.affixWrapper) || "span", z = (k == null ? void 0 : k.groupWrapper) || "span", H = (k == null ? void 0 : k.wrapper) || "span", P = (k == null ? void 0 : k.groupAddon) || "span", I = Pe(null), N = function(me) {
    var ce;
    (ce = I.current) !== null && ce !== void 0 && ce.contains(me.target) && (y == null || y());
  }, B = S5(e), W = /* @__PURE__ */ Km(U, {
    value: S,
    className: fe((t = U.props) === null || t === void 0 ? void 0 : t.className, !B && (w == null ? void 0 : w.variant)) || null
  }), Y = Pe(null);
  if (Q.useImperativeHandle(r, function() {
    return {
      nativeElement: Y.current || I.current
    };
  }), B) {
    var X = null;
    if (b) {
      var Z = !d && !g && S, G = "".concat(s, "-clear-icon"), te = Ne(b) === "object" && b !== null && b !== void 0 && b.clearIcon ? b.clearIcon : "✖";
      X = /* @__PURE__ */ Q.createElement("button", {
        type: "button",
        tabIndex: -1,
        onClick: function(me) {
          C == null || C(me), V == null || V();
        },
        onMouseDown: function(me) {
          return me.preventDefault();
        },
        className: fe(G, j(j({}, "".concat(G, "-hidden"), !Z), "".concat(G, "-has-suffix"), !!l))
      }, te);
    }
    var ie = "".concat(s, "-affix-wrapper"), de = fe(ie, j(j(j(j(j({}, "".concat(s, "-disabled"), d), "".concat(ie, "-disabled"), d), "".concat(ie, "-focused"), p), "".concat(ie, "-readonly"), g), "".concat(ie, "-input-with-clear-btn"), l && b && S), _ == null ? void 0 : _.affixWrapper, w == null ? void 0 : w.affixWrapper, w == null ? void 0 : w.variant), pe = (l || b) && /* @__PURE__ */ Q.createElement("span", {
      className: fe("".concat(s, "-suffix"), w == null ? void 0 : w.suffix),
      style: M == null ? void 0 : M.suffix
    }, X, l);
    W = /* @__PURE__ */ Q.createElement(L, bt({
      className: de,
      style: M == null ? void 0 : M.affixWrapper,
      onClick: N
    }, A == null ? void 0 : A.affixWrapper, {
      ref: I
    }), c && /* @__PURE__ */ Q.createElement("span", {
      className: fe("".concat(s, "-prefix"), w == null ? void 0 : w.prefix),
      style: M == null ? void 0 : M.prefix
    }, c), W, pe);
  }
  if (w5(e)) {
    var xe = "".concat(s, "-group"), we = "".concat(xe, "-addon"), ae = "".concat(xe, "-wrapper"), se = fe("".concat(s, "-wrapper"), xe, _ == null ? void 0 : _.wrapper, w == null ? void 0 : w.wrapper), _e = fe(ae, j({}, "".concat(ae, "-disabled"), d), _ == null ? void 0 : _.group, w == null ? void 0 : w.groupWrapper);
    W = /* @__PURE__ */ Q.createElement(z, {
      className: _e,
      ref: Y
    }, /* @__PURE__ */ Q.createElement(H, {
      className: se
    }, u && /* @__PURE__ */ Q.createElement(P, {
      className: we
    }, u), W, f && /* @__PURE__ */ Q.createElement(P, {
      className: we
    }, f)));
  }
  return /* @__PURE__ */ Q.cloneElement(W, {
    className: fe((n = W.props) === null || n === void 0 ? void 0 : n.className, h) || null,
    style: q(q({}, (o = W.props) === null || o === void 0 ? void 0 : o.style), m),
    hidden: v
  });
}), _5 = ["show"];
function em(e, r) {
  return x.useMemo(function() {
    var t = {};
    r && (t.show = Ne(r) === "object" && r.formatter ? r.formatter : !!r), t = q(q({}, t), e);
    var n = t, o = n.show, i = Kt(n, _5);
    return q(q({}, i), {}, {
      show: !!o,
      showFormatter: typeof o == "function" ? o : void 0,
      strategy: i.strategy || function(a) {
        return a.length;
      }
    });
  }, [e, r]);
}
var C5 = ["autoComplete", "onChange", "onFocus", "onBlur", "onPressEnter", "onKeyDown", "onKeyUp", "prefixCls", "disabled", "htmlSize", "className", "maxLength", "suffix", "showCount", "count", "type", "classes", "classNames", "styles", "onCompositionStart", "onCompositionEnd"], E5 = /* @__PURE__ */ Wr(function(e, r) {
  var t = e.autoComplete, n = e.onChange, o = e.onFocus, i = e.onBlur, a = e.onPressEnter, s = e.onKeyDown, c = e.onKeyUp, l = e.prefixCls, u = l === void 0 ? "rc-input" : l, f = e.disabled, h = e.htmlSize, m = e.className, d = e.maxLength, g = e.suffix, p = e.showCount, y = e.count, b = e.type, S = b === void 0 ? "text" : b, C = e.classes, v = e.classNames, _ = e.styles, w = e.onCompositionStart, A = e.onCompositionEnd, M = Kt(e, C5), k = Mt(!1), V = ne(k, 2), U = V[0], L = V[1], z = Pe(!1), H = Pe(!1), P = Pe(null), I = Pe(null), N = function(E) {
    P.current && Qg(P.current, E);
  }, B = In(e.defaultValue, {
    value: e.value
  }), W = ne(B, 2), Y = W[0], X = W[1], Z = Y == null ? "" : String(Y), G = Mt(null), te = ne(G, 2), ie = te[0], de = te[1], pe = em(y, p), xe = pe.max || d, we = pe.strategy(Z), ae = !!xe && we > xe;
  mi(r, function() {
    var O;
    return {
      focus: N,
      blur: function() {
        var F;
        (F = P.current) === null || F === void 0 || F.blur();
      },
      setSelectionRange: function(F, T, ge) {
        var Be;
        (Be = P.current) === null || Be === void 0 || Be.setSelectionRange(F, T, ge);
      },
      select: function() {
        var F;
        (F = P.current) === null || F === void 0 || F.select();
      },
      input: P.current,
      nativeElement: ((O = I.current) === null || O === void 0 ? void 0 : O.nativeElement) || P.current
    };
  }), ut(function() {
    H.current && (H.current = !1), L(function(O) {
      return O && f ? !1 : O;
    });
  }, [f]);
  var se = function(E, F, T) {
    var ge = F;
    if (!z.current && pe.exceedFormatter && pe.max && pe.strategy(F) > pe.max) {
      if (ge = pe.exceedFormatter(F, {
        max: pe.max
      }), F !== ge) {
        var Be, We;
        de([((Be = P.current) === null || Be === void 0 ? void 0 : Be.selectionStart) || 0, ((We = P.current) === null || We === void 0 ? void 0 : We.selectionEnd) || 0]);
      }
    } else if (T.source === "compositionEnd")
      return;
    X(ge), P.current && Ja(P.current, E, n, ge);
  };
  ut(function() {
    if (ie) {
      var O;
      (O = P.current) === null || O === void 0 || O.setSelectionRange.apply(O, Re(ie));
    }
  }, [ie]);
  var _e = function(E) {
    se(E, E.target.value, {
      source: "change"
    });
  }, re = function(E) {
    z.current = !1, se(E, E.currentTarget.value, {
      source: "compositionEnd"
    }), A == null || A(E);
  }, me = function(E) {
    a && E.key === "Enter" && !H.current && (H.current = !0, a(E)), s == null || s(E);
  }, ce = function(E) {
    E.key === "Enter" && (H.current = !1), c == null || c(E);
  }, ve = function(E) {
    L(!0), o == null || o(E);
  }, Se = function(E) {
    H.current && (H.current = !1), L(!1), i == null || i(E);
  }, ye = function(E) {
    X(""), N(), P.current && Ja(P.current, E, n);
  }, Ve = ae && "".concat(u, "-out-of-range"), $e = function() {
    var E = Ci(e, [
      "prefixCls",
      "onPressEnter",
      "addonBefore",
      "addonAfter",
      "prefix",
      "suffix",
      "allowClear",
      // Input elements must be either controlled or uncontrolled,
      // specify either the value prop, or the defaultValue prop, but not both.
      "defaultValue",
      "showCount",
      "count",
      "classes",
      "htmlSize",
      "styles",
      "classNames",
      "onClear"
    ]);
    return /* @__PURE__ */ Q.createElement("input", bt({
      autoComplete: t
    }, E, {
      onChange: _e,
      onFocus: ve,
      onBlur: Se,
      onKeyDown: me,
      onKeyUp: ce,
      className: fe(u, j({}, "".concat(u, "-disabled"), f), v == null ? void 0 : v.input),
      style: _ == null ? void 0 : _.input,
      ref: P,
      size: h,
      type: S,
      onCompositionStart: function(T) {
        z.current = !0, w == null || w(T);
      },
      onCompositionEnd: re
    }));
  }, $ = function() {
    var E = Number(xe) > 0;
    if (g || pe.show) {
      var F = pe.showFormatter ? pe.showFormatter({
        value: Z,
        count: we,
        maxLength: xe
      }) : "".concat(we).concat(E ? " / ".concat(xe) : "");
      return /* @__PURE__ */ Q.createElement(Q.Fragment, null, pe.show && /* @__PURE__ */ Q.createElement("span", {
        className: fe("".concat(u, "-show-count-suffix"), j({}, "".concat(u, "-show-count-has-suffix"), !!g), v == null ? void 0 : v.count),
        style: q({}, _ == null ? void 0 : _.count)
      }, F), g);
    }
    return null;
  };
  return /* @__PURE__ */ Q.createElement(Zg, bt({}, M, {
    prefixCls: u,
    className: fe(m, Ve),
    handleReset: ye,
    value: Z,
    focused: U,
    triggerFocus: N,
    suffix: $(),
    disabled: f,
    classes: C,
    classNames: v,
    styles: _
  }), $e());
});
const tm = (e) => {
  let r;
  return typeof e == "object" && (e != null && e.clearIcon) ? r = e : e && (r = {
    clearIcon: /* @__PURE__ */ Q.createElement(ig, null)
  }), r;
};
function O5(e, r) {
  const t = Pe([]), n = () => {
    t.current.push(setTimeout(() => {
      var o, i, a, s;
      !((o = e.current) === null || o === void 0) && o.input && ((i = e.current) === null || i === void 0 ? void 0 : i.input.getAttribute("type")) === "password" && (!((a = e.current) === null || a === void 0) && a.input.hasAttribute("value")) && ((s = e.current) === null || s === void 0 || s.input.removeAttribute("value"));
    }));
  };
  return ut(() => (n(), () => t.current.forEach((o) => {
    o && clearTimeout(o);
  })), []), n;
}
function R5(e) {
  return !!(e.prefix || e.suffix || e.allowClear || e.showCount);
}
var $5 = function(e, r) {
  var t = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    r.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (t[n[o]] = e[n[o]]);
  return t;
};
const T5 = /* @__PURE__ */ Wr((e, r) => {
  const {
    prefixCls: t,
    bordered: n = !0,
    status: o,
    size: i,
    disabled: a,
    onBlur: s,
    onFocus: c,
    suffix: l,
    allowClear: u,
    addonAfter: f,
    addonBefore: h,
    className: m,
    style: d,
    styles: g,
    rootClassName: p,
    onChange: y,
    classNames: b,
    variant: S
  } = e, C = $5(e, ["prefixCls", "bordered", "status", "size", "disabled", "onBlur", "onFocus", "suffix", "allowClear", "addonAfter", "addonBefore", "className", "style", "styles", "rootClassName", "onChange", "classNames", "variant"]);
  if (process.env.NODE_ENV !== "production") {
    const {
      deprecated: ye
    } = Xt("Input");
    ye(!("bordered" in e), "bordered", "variant");
  }
  const {
    getPrefixCls: v,
    direction: _,
    allowClear: w,
    autoComplete: A,
    className: M,
    style: k,
    classNames: V,
    styles: U
  } = kn("input"), L = v("input", t), z = Pe(null), H = sg(L), [P, I, N] = Jg(L, p), [B] = v5(L, H), {
    compactSize: W,
    compactItemClassnames: Y
  } = df(L, _), X = Ws((ye) => {
    var Ve;
    return (Ve = i ?? W) !== null && Ve !== void 0 ? Ve : ye;
  }), Z = Q.useContext(mo), G = a ?? Z, {
    status: te,
    hasFeedback: ie,
    feedbackIcon: de
  } = ir(di), pe = Dg(te, o), xe = R5(e) || !!ie, we = Pe(xe);
  if (process.env.NODE_ENV !== "production") {
    const ye = Xt("Input");
    ut(() => {
      var Ve;
      xe && !we.current && process.env.NODE_ENV !== "production" && ye(document.activeElement === ((Ve = z.current) === null || Ve === void 0 ? void 0 : Ve.input), "usage", "When Input is focused, dynamic add or remove prefix / suffix will make it lose focus caused by dom structure change. Read more: https://ant.design/components/input/#FAQ"), we.current = xe;
    }, [xe]);
  }
  const ae = O5(z), se = (ye) => {
    ae(), s == null || s(ye);
  }, _e = (ye) => {
    ae(), c == null || c(ye);
  }, re = (ye) => {
    ae(), y == null || y(ye);
  }, me = (ie || l) && /* @__PURE__ */ Q.createElement(Q.Fragment, null, l, ie && de), ce = tm(u ?? w), [ve, Se] = kg("input", S, n);
  return P(B(/* @__PURE__ */ Q.createElement(E5, Object.assign({
    ref: Dn(r, z),
    prefixCls: L,
    autoComplete: A
  }, C, {
    disabled: G,
    onBlur: se,
    onFocus: _e,
    style: Object.assign(Object.assign({}, k), d),
    styles: Object.assign(Object.assign({}, U), g),
    suffix: me,
    allowClear: ce,
    className: fe(m, p, N, H, Y, M),
    onChange: re,
    addonBefore: h && /* @__PURE__ */ Q.createElement(Ou, {
      form: !0,
      space: !0
    }, h),
    addonAfter: f && /* @__PURE__ */ Q.createElement(Ou, {
      form: !0,
      space: !0
    }, f),
    classNames: Object.assign(Object.assign(Object.assign({}, b), V), {
      input: fe({
        [`${L}-sm`]: X === "small",
        [`${L}-lg`]: X === "large",
        [`${L}-rtl`]: _ === "rtl"
      }, b == null ? void 0 : b.input, V.input, I),
      variant: fe({
        [`${L}-${ve}`]: Se
      }, $u(L, pe)),
      affixWrapper: fe({
        [`${L}-affix-wrapper-sm`]: X === "small",
        [`${L}-affix-wrapper-lg`]: X === "large",
        [`${L}-affix-wrapper-rtl`]: _ === "rtl"
      }, I),
      wrapper: fe({
        [`${L}-group-rtl`]: _ === "rtl"
      }, I),
      groupWrapper: fe({
        [`${L}-group-wrapper-sm`]: X === "small",
        [`${L}-group-wrapper-lg`]: X === "large",
        [`${L}-group-wrapper-rtl`]: _ === "rtl",
        [`${L}-group-wrapper-${ve}`]: Se
      }, $u(`${L}-group-wrapper`, pe, ie), I)
    })
  }))));
});
process.env.NODE_ENV !== "production" && (T5.displayName = "Input");
function Qa(e) {
  return ["small", "middle", "large"].includes(e);
}
function z0(e) {
  return e ? typeof e == "number" && !Number.isNaN(e) : !1;
}
const rm = /* @__PURE__ */ Q.createContext({
  latestIndex: 0
}), P5 = rm.Provider, N5 = (e) => {
  let {
    className: r,
    index: t,
    children: n,
    split: o,
    style: i
  } = e;
  const {
    latestIndex: a
  } = x.useContext(rm);
  return n == null ? null : /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ x.createElement("div", {
    className: r,
    style: i
  }, n), t < a && o && /* @__PURE__ */ x.createElement("span", {
    className: `${r}-split`
  }, o));
};
var A5 = function(e, r) {
  var t = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    r.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (t[n[o]] = e[n[o]]);
  return t;
};
const I5 = /* @__PURE__ */ x.forwardRef((e, r) => {
  var t;
  const {
    getPrefixCls: n,
    direction: o,
    size: i,
    className: a,
    style: s,
    classNames: c,
    styles: l
  } = kn("space"), {
    size: u = i ?? "small",
    align: f,
    className: h,
    rootClassName: m,
    children: d,
    direction: g = "horizontal",
    prefixCls: p,
    split: y,
    style: b,
    wrap: S = !1,
    classNames: C,
    styles: v
  } = e, _ = A5(e, ["size", "align", "className", "rootClassName", "children", "direction", "prefixCls", "split", "style", "wrap", "classNames", "styles"]), [w, A] = Array.isArray(u) ? u : [u, u], M = Qa(A), k = Qa(w), V = z0(A), U = z0(w), L = gn(d, {
    keepEmpty: !0
  }), z = f === void 0 && g === "horizontal" ? "center" : f, H = n("space", p), [P, I, N] = dg(H), B = fe(H, a, I, `${H}-${g}`, {
    [`${H}-rtl`]: o === "rtl",
    [`${H}-align-${z}`]: z,
    [`${H}-gap-row-${A}`]: M,
    [`${H}-gap-col-${w}`]: k
  }, h, m, N), W = fe(`${H}-item`, (t = C == null ? void 0 : C.item) !== null && t !== void 0 ? t : c.item);
  let Y = 0;
  const X = L.map((te, ie) => {
    var de;
    te != null && (Y = ie);
    const pe = (te == null ? void 0 : te.key) || `${W}-${ie}`;
    return /* @__PURE__ */ x.createElement(N5, {
      className: W,
      key: pe,
      index: ie,
      split: y,
      style: (de = v == null ? void 0 : v.item) !== null && de !== void 0 ? de : l.item
    }, te);
  }), Z = x.useMemo(() => ({
    latestIndex: Y
  }), [Y]);
  if (L.length === 0)
    return null;
  const G = {};
  return S && (G.flexWrap = "wrap"), !k && U && (G.columnGap = w), !M && V && (G.rowGap = A), P(/* @__PURE__ */ x.createElement("div", Object.assign({
    ref: r,
    className: B,
    style: Object.assign(Object.assign(Object.assign({}, G), s), b)
  }, _), /* @__PURE__ */ x.createElement(P5, {
    value: Z
  }, X)));
}), bf = I5;
bf.Compact = i_;
process.env.NODE_ENV !== "production" && (bf.displayName = "Space");
const nm = ["wrap", "nowrap", "wrap-reverse"], om = ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around", "space-evenly", "stretch", "normal", "left", "right"], im = ["center", "start", "end", "flex-start", "flex-end", "self-start", "self-end", "baseline", "normal", "stretch"], M5 = (e, r) => {
  const t = r.wrap === !0 ? "wrap" : r.wrap;
  return {
    [`${e}-wrap-${t}`]: t && nm.includes(t)
  };
}, F5 = (e, r) => {
  const t = {};
  return im.forEach((n) => {
    t[`${e}-align-${n}`] = r.align === n;
  }), t[`${e}-align-stretch`] = !r.align && !!r.vertical, t;
}, j5 = (e, r) => {
  const t = {};
  return om.forEach((n) => {
    t[`${e}-justify-${n}`] = r.justify === n;
  }), t;
};
function D5(e, r) {
  return fe(Object.assign(Object.assign(Object.assign({}, M5(e, r)), F5(e, r)), j5(e, r)));
}
const k5 = (e) => {
  const {
    componentCls: r
  } = e;
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
}, L5 = (e) => {
  const {
    componentCls: r
  } = e;
  return {
    [r]: {
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
}, z5 = (e) => {
  const {
    componentCls: r
  } = e, t = {};
  return nm.forEach((n) => {
    t[`${r}-wrap-${n}`] = {
      flexWrap: n
    };
  }), t;
}, B5 = (e) => {
  const {
    componentCls: r
  } = e, t = {};
  return im.forEach((n) => {
    t[`${r}-align-${n}`] = {
      alignItems: n
    };
  }), t;
}, V5 = (e) => {
  const {
    componentCls: r
  } = e, t = {};
  return om.forEach((n) => {
    t[`${r}-justify-${n}`] = {
      justifyContent: n
    };
  }), t;
}, H5 = () => ({}), W5 = en("Flex", (e) => {
  const {
    paddingXS: r,
    padding: t,
    paddingLG: n
  } = e, o = Yt(e, {
    flexGapSM: r,
    flexGap: t,
    flexGapLG: n
  });
  return [k5(o), L5(o), z5(o), B5(o), V5(o)];
}, H5, {
  // Flex component don't apply extra font style
  // https://github.com/ant-design/ant-design/issues/46403
  resetStyle: !1
});
var q5 = function(e, r) {
  var t = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    r.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (t[n[o]] = e[n[o]]);
  return t;
};
const am = /* @__PURE__ */ Q.forwardRef((e, r) => {
  const {
    prefixCls: t,
    rootClassName: n,
    className: o,
    style: i,
    flex: a,
    gap: s,
    children: c,
    vertical: l = !1,
    component: u = "div"
  } = e, f = q5(e, ["prefixCls", "rootClassName", "className", "style", "flex", "gap", "children", "vertical", "component"]), {
    flex: h,
    direction: m,
    getPrefixCls: d
  } = Q.useContext(er), g = d("flex", t), [p, y, b] = W5(g), S = l ?? (h == null ? void 0 : h.vertical), C = fe(o, n, h == null ? void 0 : h.className, g, y, b, D5(g, e), {
    [`${g}-rtl`]: m === "rtl",
    [`${g}-gap-${s}`]: Qa(s),
    [`${g}-vertical`]: S
  }), v = Object.assign(Object.assign({}, h == null ? void 0 : h.style), i);
  return a && (v.flex = a), s && !Qa(s) && (v.gap = s), p(/* @__PURE__ */ Q.createElement(u, Object.assign({
    ref: r,
    className: C,
    style: v
  }, Ci(f, ["justify", "wrap", "align"])), c));
});
process.env.NODE_ENV !== "production" && (am.displayName = "Flex");
var U5 = `
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`, G5 = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "font-variant", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing", "word-break", "white-space"], Jc = {}, lr;
function K5(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, t = e.getAttribute("id") || e.getAttribute("data-reactid") || e.getAttribute("name");
  if (r && Jc[t])
    return Jc[t];
  var n = window.getComputedStyle(e), o = n.getPropertyValue("box-sizing") || n.getPropertyValue("-moz-box-sizing") || n.getPropertyValue("-webkit-box-sizing"), i = parseFloat(n.getPropertyValue("padding-bottom")) + parseFloat(n.getPropertyValue("padding-top")), a = parseFloat(n.getPropertyValue("border-bottom-width")) + parseFloat(n.getPropertyValue("border-top-width")), s = G5.map(function(l) {
    return "".concat(l, ":").concat(n.getPropertyValue(l));
  }).join(";"), c = {
    sizingStyle: s,
    paddingSize: i,
    borderSize: a,
    boxSizing: o
  };
  return r && t && (Jc[t] = c), c;
}
function X5(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  lr || (lr = document.createElement("textarea"), lr.setAttribute("tab-index", "-1"), lr.setAttribute("aria-hidden", "true"), lr.setAttribute("name", "hiddenTextarea"), document.body.appendChild(lr)), e.getAttribute("wrap") ? lr.setAttribute("wrap", e.getAttribute("wrap")) : lr.removeAttribute("wrap");
  var o = K5(e, r), i = o.paddingSize, a = o.borderSize, s = o.boxSizing, c = o.sizingStyle;
  lr.setAttribute("style", "".concat(c, ";").concat(U5)), lr.value = e.value || e.placeholder || "";
  var l = void 0, u = void 0, f, h = lr.scrollHeight;
  if (s === "border-box" ? h += a : s === "content-box" && (h -= i), t !== null || n !== null) {
    lr.value = " ";
    var m = lr.scrollHeight - i;
    t !== null && (l = m * t, s === "border-box" && (l = l + i + a), h = Math.max(l, h)), n !== null && (u = m * n, s === "border-box" && (u = u + i + a), f = h > u ? "" : "hidden", h = Math.min(u, h));
  }
  var d = {
    height: h,
    overflowY: f,
    resize: "none"
  };
  return l && (d.minHeight = l), u && (d.maxHeight = u), d;
}
var Y5 = ["prefixCls", "defaultValue", "value", "autoSize", "onResize", "className", "style", "disabled", "onChange", "onInternalAutoSize"], Qc = 0, Zc = 1, el = 2, J5 = /* @__PURE__ */ x.forwardRef(function(e, r) {
  var t = e, n = t.prefixCls, o = t.defaultValue, i = t.value, a = t.autoSize, s = t.onResize, c = t.className, l = t.style, u = t.disabled, f = t.onChange, h = t.onInternalAutoSize, m = Kt(t, Y5), d = In(o, {
    value: i,
    postState: function(te) {
      return te ?? "";
    }
  }), g = ne(d, 2), p = g[0], y = g[1], b = function(te) {
    y(te.target.value), f == null || f(te);
  }, S = x.useRef();
  x.useImperativeHandle(r, function() {
    return {
      textArea: S.current
    };
  });
  var C = x.useMemo(function() {
    return a && Ne(a) === "object" ? [a.minRows, a.maxRows] : [];
  }, [a]), v = ne(C, 2), _ = v[0], w = v[1], A = !!a, M = function() {
    try {
      if (document.activeElement === S.current) {
        var te = S.current, ie = te.selectionStart, de = te.selectionEnd, pe = te.scrollTop;
        S.current.setSelectionRange(ie, de), S.current.scrollTop = pe;
      }
    } catch {
    }
  }, k = x.useState(el), V = ne(k, 2), U = V[0], L = V[1], z = x.useState(), H = ne(z, 2), P = H[0], I = H[1], N = function() {
    L(Qc), process.env.NODE_ENV === "test" && (h == null || h());
  };
  St(function() {
    A && N();
  }, [i, _, w, A]), St(function() {
    if (U === Qc)
      L(Zc);
    else if (U === Zc) {
      var G = X5(S.current, !1, _, w);
      L(el), I(G);
    } else
      M();
  }, [U]);
  var B = x.useRef(), W = function() {
    Vr.cancel(B.current);
  }, Y = function(te) {
    U === el && (s == null || s(te), a && (W(), B.current = Vr(function() {
      N();
    })));
  };
  x.useEffect(function() {
    return W;
  }, []);
  var X = A ? P : null, Z = q(q({}, l), X);
  return (U === Qc || U === Zc) && (Z.overflowY = "hidden", Z.overflowX = "hidden"), /* @__PURE__ */ x.createElement(Oo, {
    onResize: Y,
    disabled: !(a || s)
  }, /* @__PURE__ */ x.createElement("textarea", bt({}, m, {
    ref: S,
    style: Z,
    className: fe(n, c, j({}, "".concat(n, "-disabled"), u)),
    disabled: u,
    value: p,
    onChange: b
  })));
}), Q5 = ["defaultValue", "value", "onFocus", "onBlur", "onChange", "allowClear", "maxLength", "onCompositionStart", "onCompositionEnd", "suffix", "prefixCls", "showCount", "count", "className", "style", "disabled", "hidden", "classNames", "styles", "onResize", "onClear", "onPressEnter", "readOnly", "autoSize", "onKeyDown"], Z5 = /* @__PURE__ */ Q.forwardRef(function(e, r) {
  var t, n = e.defaultValue, o = e.value, i = e.onFocus, a = e.onBlur, s = e.onChange, c = e.allowClear, l = e.maxLength, u = e.onCompositionStart, f = e.onCompositionEnd, h = e.suffix, m = e.prefixCls, d = m === void 0 ? "rc-textarea" : m, g = e.showCount, p = e.count, y = e.className, b = e.style, S = e.disabled, C = e.hidden, v = e.classNames, _ = e.styles, w = e.onResize, A = e.onClear, M = e.onPressEnter, k = e.readOnly, V = e.autoSize, U = e.onKeyDown, L = Kt(e, Q5), z = In(n, {
    value: o,
    defaultValue: n
  }), H = ne(z, 2), P = H[0], I = H[1], N = P == null ? "" : String(P), B = Q.useState(!1), W = ne(B, 2), Y = W[0], X = W[1], Z = Q.useRef(!1), G = Q.useState(null), te = ne(G, 2), ie = te[0], de = te[1], pe = Pe(null), xe = Pe(null), we = function() {
    var le;
    return (le = xe.current) === null || le === void 0 ? void 0 : le.textArea;
  }, ae = function() {
    we().focus();
  };
  mi(r, function() {
    var ze;
    return {
      resizableTextArea: xe.current,
      focus: ae,
      blur: function() {
        we().blur();
      },
      nativeElement: ((ze = pe.current) === null || ze === void 0 ? void 0 : ze.nativeElement) || we()
    };
  }), ut(function() {
    X(function(ze) {
      return !S && ze;
    });
  }, [S]);
  var se = Q.useState(null), _e = ne(se, 2), re = _e[0], me = _e[1];
  Q.useEffect(function() {
    if (re) {
      var ze;
      (ze = we()).setSelectionRange.apply(ze, Re(re));
    }
  }, [re]);
  var ce = em(p, g), ve = (t = ce.max) !== null && t !== void 0 ? t : l, Se = Number(ve) > 0, ye = ce.strategy(N), Ve = !!ve && ye > ve, $e = function(le, Oe) {
    var he = Oe;
    !Z.current && ce.exceedFormatter && ce.max && ce.strategy(Oe) > ce.max && (he = ce.exceedFormatter(Oe, {
      max: ce.max
    }), Oe !== he && me([we().selectionStart || 0, we().selectionEnd || 0])), I(he), Ja(le.currentTarget, le, s, he);
  }, $ = function(le) {
    Z.current = !0, u == null || u(le);
  }, O = function(le) {
    Z.current = !1, $e(le, le.currentTarget.value), f == null || f(le);
  }, E = function(le) {
    $e(le, le.target.value);
  }, F = function(le) {
    le.key === "Enter" && M && M(le), U == null || U(le);
  }, T = function(le) {
    X(!0), i == null || i(le);
  }, ge = function(le) {
    X(!1), a == null || a(le);
  }, Be = function(le) {
    I(""), ae(), Ja(we(), le, s);
  }, We = h, Le;
  ce.show && (ce.showFormatter ? Le = ce.showFormatter({
    value: N,
    count: ye,
    maxLength: ve
  }) : Le = "".concat(ye).concat(Se ? " / ".concat(ve) : ""), We = /* @__PURE__ */ Q.createElement(Q.Fragment, null, We, /* @__PURE__ */ Q.createElement("span", {
    className: fe("".concat(d, "-data-count"), v == null ? void 0 : v.count),
    style: _ == null ? void 0 : _.count
  }, Le)));
  var Ze = function(le) {
    var Oe;
    w == null || w(le), (Oe = we()) !== null && Oe !== void 0 && Oe.style.height && de(!0);
  }, Fe = !V && !g && !c;
  return /* @__PURE__ */ Q.createElement(Zg, {
    ref: pe,
    value: N,
    allowClear: c,
    handleReset: Be,
    suffix: We,
    prefixCls: d,
    classNames: q(q({}, v), {}, {
      affixWrapper: fe(v == null ? void 0 : v.affixWrapper, j(j({}, "".concat(d, "-show-count"), g), "".concat(d, "-textarea-allow-clear"), c))
    }),
    disabled: S,
    focused: Y,
    className: fe(y, Ve && "".concat(d, "-out-of-range")),
    style: q(q({}, b), ie && !Fe ? {
      height: "auto"
    } : {}),
    dataAttrs: {
      affixWrapper: {
        "data-count": typeof Le == "string" ? Le : void 0
      }
    },
    hidden: C,
    readOnly: k,
    onClear: A
  }, /* @__PURE__ */ Q.createElement(J5, bt({}, L, {
    autoSize: V,
    maxLength: l,
    onKeyDown: F,
    onChange: E,
    onFocus: T,
    onBlur: ge,
    onCompositionStart: $,
    onCompositionEnd: O,
    className: fe(v == null ? void 0 : v.textarea),
    style: q(q({}, _ == null ? void 0 : _.textarea), {}, {
      resize: b == null ? void 0 : b.resize
    }),
    disabled: S,
    prefixCls: d,
    onResize: Ze,
    ref: xe,
    readOnly: k
  })));
});
const e3 = (e) => {
  const {
    componentCls: r,
    paddingLG: t
  } = e, n = `${r}-textarea`;
  return {
    // Raw Textarea
    [`textarea${r}`]: {
      maxWidth: "100%",
      // prevent textarea resize from coming out of its container
      height: "auto",
      minHeight: e.controlHeight,
      lineHeight: e.lineHeight,
      verticalAlign: "bottom",
      transition: `all ${e.motionDurationSlow}`,
      resize: "vertical",
      [`&${r}-mouse-active`]: {
        transition: `all ${e.motionDurationSlow}, height 0s, width 0s`
      }
    },
    // Wrapper for resize
    [`${r}-textarea-affix-wrapper-resize-dirty`]: {
      width: "auto"
    },
    [n]: {
      position: "relative",
      "&-show-count": {
        // https://github.com/ant-design/ant-design/issues/33049
        [`> ${r}`]: {
          height: "100%"
        },
        [`${r}-data-count`]: {
          position: "absolute",
          bottom: e.calc(e.fontSize).mul(e.lineHeight).mul(-1).equal(),
          insetInlineEnd: 0,
          color: e.colorTextDescription,
          whiteSpace: "nowrap",
          pointerEvents: "none"
        }
      },
      [`
        &-allow-clear > ${r},
        &-affix-wrapper${n}-has-feedback ${r}
      `]: {
        paddingInlineEnd: t
      },
      [`&-affix-wrapper${r}-affix-wrapper`]: {
        padding: 0,
        [`> textarea${r}`]: {
          fontSize: "inherit",
          border: "none",
          outline: "none",
          background: "transparent",
          minHeight: e.calc(e.controlHeight).sub(e.calc(e.lineWidth).mul(2)).equal(),
          "&:focus": {
            boxShadow: "none !important"
          }
        },
        [`${r}-suffix`]: {
          margin: 0,
          "> *:not(:last-child)": {
            marginInline: 0
          },
          // Clear Icon
          [`${r}-clear-icon`]: {
            position: "absolute",
            insetInlineEnd: e.paddingInline,
            insetBlockStart: e.paddingXS
          },
          // Feedback Icon
          [`${n}-suffix`]: {
            position: "absolute",
            top: 0,
            insetInlineEnd: e.paddingInline,
            bottom: 0,
            zIndex: 1,
            display: "inline-flex",
            alignItems: "center",
            margin: "auto",
            pointerEvents: "none"
          }
        }
      },
      [`&-affix-wrapper${r}-affix-wrapper-sm`]: {
        [`${r}-suffix`]: {
          [`${r}-clear-icon`]: {
            insetInlineEnd: e.paddingInlineSM
          }
        }
      }
    }
  };
}, t3 = en(["Input", "TextArea"], (e) => {
  const r = Yt(e, gf(e));
  return [e3(r)];
}, mf, {
  resetFont: !1
});
var r3 = function(e, r) {
  var t = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    r.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (t[n[o]] = e[n[o]]);
  return t;
};
const n3 = /* @__PURE__ */ Wr((e, r) => {
  var t;
  const {
    prefixCls: n,
    bordered: o = !0,
    size: i,
    disabled: a,
    status: s,
    allowClear: c,
    classNames: l,
    rootClassName: u,
    className: f,
    style: h,
    styles: m,
    variant: d,
    showCount: g,
    onMouseDown: p,
    onResize: y
  } = e, b = r3(e, ["prefixCls", "bordered", "size", "disabled", "status", "allowClear", "classNames", "rootClassName", "className", "style", "styles", "variant", "showCount", "onMouseDown", "onResize"]);
  if (process.env.NODE_ENV !== "production") {
    const {
      deprecated: ce
    } = Xt("TextArea");
    ce(!("bordered" in e), "bordered", "variant");
  }
  const {
    getPrefixCls: S,
    direction: C,
    allowClear: v,
    autoComplete: _,
    className: w,
    style: A,
    classNames: M,
    styles: k
  } = kn("textArea"), V = x.useContext(mo), U = a ?? V, {
    status: L,
    hasFeedback: z,
    feedbackIcon: H
  } = x.useContext(di), P = Dg(L, s), I = x.useRef(null);
  x.useImperativeHandle(r, () => {
    var ce;
    return {
      resizableTextArea: (ce = I.current) === null || ce === void 0 ? void 0 : ce.resizableTextArea,
      focus: (ve) => {
        var Se, ye;
        Qg((ye = (Se = I.current) === null || Se === void 0 ? void 0 : Se.resizableTextArea) === null || ye === void 0 ? void 0 : ye.textArea, ve);
      },
      blur: () => {
        var ve;
        return (ve = I.current) === null || ve === void 0 ? void 0 : ve.blur();
      }
    };
  });
  const N = S("input", n), B = sg(N), [W, Y, X] = Jg(N, u), [Z] = t3(N, B), {
    compactSize: G,
    compactItemClassnames: te
  } = df(N, C), ie = Ws((ce) => {
    var ve;
    return (ve = i ?? G) !== null && ve !== void 0 ? ve : ce;
  }), [de, pe] = kg("textArea", d, o), xe = tm(c ?? v), [we, ae] = x.useState(!1), [se, _e] = x.useState(!1), re = (ce) => {
    ae(!0), p == null || p(ce);
    const ve = () => {
      ae(!1), document.removeEventListener("mouseup", ve);
    };
    document.addEventListener("mouseup", ve);
  }, me = (ce) => {
    var ve, Se;
    if (y == null || y(ce), we && typeof getComputedStyle == "function") {
      const ye = (Se = (ve = I.current) === null || ve === void 0 ? void 0 : ve.nativeElement) === null || Se === void 0 ? void 0 : Se.querySelector("textarea");
      ye && getComputedStyle(ye).resize === "both" && _e(!0);
    }
  };
  return W(Z(/* @__PURE__ */ x.createElement(Z5, Object.assign({
    autoComplete: _
  }, b, {
    style: Object.assign(Object.assign({}, A), h),
    styles: Object.assign(Object.assign({}, k), m),
    disabled: U,
    allowClear: xe,
    className: fe(
      X,
      B,
      f,
      u,
      te,
      w,
      // Only for wrapper
      se && `${N}-textarea-affix-wrapper-resize-dirty`
    ),
    classNames: Object.assign(Object.assign(Object.assign({}, l), M), {
      textarea: fe({
        [`${N}-sm`]: ie === "small",
        [`${N}-lg`]: ie === "large"
      }, Y, l == null ? void 0 : l.textarea, M.textarea, we && `${N}-mouse-active`),
      variant: fe({
        [`${N}-${de}`]: pe
      }, $u(N, P)),
      affixWrapper: fe(`${N}-textarea-affix-wrapper`, {
        [`${N}-affix-wrapper-rtl`]: C === "rtl",
        [`${N}-affix-wrapper-sm`]: ie === "small",
        [`${N}-affix-wrapper-lg`]: ie === "large",
        [`${N}-textarea-show-count`]: g || ((t = e.count) === null || t === void 0 ? void 0 : t.show)
      }, Y)
    }),
    prefixCls: N,
    suffix: z && /* @__PURE__ */ x.createElement("span", {
      className: `${N}-textarea-suffix`
    }, H),
    showCount: g,
    ref: I,
    onResize: me,
    onMouseDown: re
  }))));
}), Za = 100, sm = Za / 5, cm = Za / 2 - sm / 2, tl = cm * 2 * Math.PI, B0 = 50, V0 = (e) => {
  const {
    dotClassName: r,
    style: t,
    hasCircleCls: n
  } = e;
  return /* @__PURE__ */ x.createElement("circle", {
    className: fe(`${r}-circle`, {
      [`${r}-circle-bg`]: n
    }),
    r: cm,
    cx: B0,
    cy: B0,
    strokeWidth: sm,
    style: t
  });
}, o3 = (e) => {
  let {
    percent: r,
    prefixCls: t
  } = e;
  const n = `${t}-dot`, o = `${n}-holder`, i = `${o}-hidden`, [a, s] = x.useState(!1);
  St(() => {
    r !== 0 && s(!0);
  }, [r !== 0]);
  const c = Math.max(Math.min(r, 100), 0);
  if (!a)
    return null;
  const l = {
    strokeDashoffset: `${tl / 4}`,
    strokeDasharray: `${tl * c / 100} ${tl * (100 - c) / 100}`
  };
  return /* @__PURE__ */ x.createElement("span", {
    className: fe(o, `${n}-progress`, c <= 0 && i)
  }, /* @__PURE__ */ x.createElement("svg", {
    viewBox: `0 0 ${Za} ${Za}`,
    // biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole: progressbar could be readonly
    role: "progressbar",
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": c
  }, /* @__PURE__ */ x.createElement(V0, {
    dotClassName: n,
    hasCircleCls: !0
  }), /* @__PURE__ */ x.createElement(V0, {
    dotClassName: n,
    style: l
  })));
};
function i3(e) {
  const {
    prefixCls: r,
    percent: t = 0
  } = e, n = `${r}-dot`, o = `${n}-holder`, i = `${o}-hidden`;
  return /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ x.createElement("span", {
    className: fe(o, t > 0 && i)
  }, /* @__PURE__ */ x.createElement("span", {
    className: fe(n, `${r}-dot-spin`)
  }, [1, 2, 3, 4].map((a) => /* @__PURE__ */ x.createElement("i", {
    className: `${r}-dot-item`,
    key: a
  })))), /* @__PURE__ */ x.createElement(o3, {
    prefixCls: r,
    percent: t
  }));
}
function a3(e) {
  const {
    prefixCls: r,
    indicator: t,
    percent: n
  } = e, o = `${r}-dot`;
  return t && /* @__PURE__ */ x.isValidElement(t) ? Si(t, {
    className: fe(t.props.className, o),
    percent: n
  }) : /* @__PURE__ */ x.createElement(i3, {
    prefixCls: r,
    percent: n
  });
}
const s3 = new ar("antSpinMove", {
  to: {
    opacity: 1
  }
}), c3 = new ar("antRotate", {
  to: {
    transform: "rotate(405deg)"
  }
}), l3 = (e) => {
  const {
    componentCls: r,
    calc: t
  } = e;
  return {
    [r]: Object.assign(Object.assign({}, Vs(e)), {
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
      [`${r}-text`]: {
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
        [r]: {
          [`${r}-dot-holder`]: {
            color: e.colorWhite
          },
          [`${r}-text`]: {
            color: e.colorTextLightSolid
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
          maxHeight: e.contentHeight,
          [`${r}-dot`]: {
            position: "absolute",
            top: "50%",
            insetInlineStart: "50%",
            margin: t(e.dotSize).mul(-1).div(2).equal()
          },
          [`${r}-text`]: {
            position: "absolute",
            top: "50%",
            width: "100%",
            textShadow: `0 1px 2px ${e.colorBgContainer}`
            // FIXME: shadow
          },
          [`&${r}-show-text ${r}-dot`]: {
            marginTop: t(e.dotSize).div(2).mul(-1).sub(10).equal()
          },
          "&-sm": {
            [`${r}-dot`]: {
              margin: t(e.dotSizeSM).mul(-1).div(2).equal()
            },
            [`${r}-text`]: {
              paddingTop: t(t(e.dotSizeSM).sub(e.fontSize)).div(2).add(2).equal()
            },
            [`&${r}-show-text ${r}-dot`]: {
              marginTop: t(e.dotSizeSM).div(2).mul(-1).sub(10).equal()
            }
          },
          "&-lg": {
            [`${r}-dot`]: {
              margin: t(e.dotSizeLG).mul(-1).div(2).equal()
            },
            [`${r}-text`]: {
              paddingTop: t(t(e.dotSizeLG).sub(e.fontSize)).div(2).add(2).equal()
            },
            [`&${r}-show-text ${r}-dot`]: {
              marginTop: t(e.dotSizeLG).div(2).mul(-1).sub(10).equal()
            }
          }
        },
        [`${r}-container`]: {
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
        color: e.spinDotDefault
      },
      // holder
      // ------------------------------
      [`${r}-dot-holder`]: {
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
      [`${r}-dot-progress`]: {
        position: "absolute",
        inset: 0
      },
      // dots
      // ------------------------------
      [`${r}-dot`]: {
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
          animationName: s3,
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
          animationName: c3,
          animationDuration: "1.2s",
          animationIterationCount: "infinite",
          animationTimingFunction: "linear"
        },
        "&-circle": {
          strokeLinecap: "round",
          transition: ["stroke-dashoffset", "stroke-dasharray", "stroke", "stroke-width", "opacity"].map((n) => `${n} ${e.motionDurationSlow} ease`).join(","),
          fillOpacity: 0,
          stroke: "currentcolor"
        },
        "&-circle-bg": {
          stroke: e.colorFillSecondary
        }
      },
      // small
      [`&-sm ${r}-dot`]: {
        "&, &-holder": {
          fontSize: e.dotSizeSM
        }
      },
      [`&-sm ${r}-dot-holder`]: {
        i: {
          width: t(t(e.dotSizeSM).sub(t(e.marginXXS).div(2))).div(2).equal(),
          height: t(t(e.dotSizeSM).sub(t(e.marginXXS).div(2))).div(2).equal()
        }
      },
      // large
      [`&-lg ${r}-dot`]: {
        "&, &-holder": {
          fontSize: e.dotSizeLG
        }
      },
      [`&-lg ${r}-dot-holder`]: {
        i: {
          width: t(t(e.dotSizeLG).sub(e.marginXXS)).div(2).equal(),
          height: t(t(e.dotSizeLG).sub(e.marginXXS)).div(2).equal()
        }
      },
      [`&${r}-show-text ${r}-text`]: {
        display: "block"
      }
    })
  };
}, u3 = (e) => {
  const {
    controlHeightLG: r,
    controlHeight: t
  } = e;
  return {
    contentHeight: 400,
    dotSize: r / 2,
    dotSizeSM: r * 0.35,
    dotSizeLG: t
  };
}, f3 = en("Spin", (e) => {
  const r = Yt(e, {
    spinDotDefault: e.colorTextDescription
  });
  return [l3(r)];
}, u3), d3 = 200, H0 = [[30, 0.05], [70, 0.03], [96, 0.01]];
function h3(e, r) {
  const [t, n] = x.useState(0), o = x.useRef(null), i = r === "auto";
  return x.useEffect(() => (i && e && (n(0), o.current = setInterval(() => {
    n((a) => {
      const s = 100 - a;
      for (let c = 0; c < H0.length; c += 1) {
        const [l, u] = H0[c];
        if (a <= l)
          return a + s * u;
      }
      return a;
    });
  }, d3)), () => {
    clearInterval(o.current);
  }), [i, e]), i ? t : r;
}
var p3 = function(e, r) {
  var t = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    r.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (t[n[o]] = e[n[o]]);
  return t;
};
let lm;
function x3(e, r) {
  return !!e && !!r && !Number.isNaN(Number(r));
}
const ri = (e) => {
  var r;
  const {
    prefixCls: t,
    spinning: n = !0,
    delay: o = 0,
    className: i,
    rootClassName: a,
    size: s = "default",
    tip: c,
    wrapperClassName: l,
    style: u,
    children: f,
    fullscreen: h = !1,
    indicator: m,
    percent: d
  } = e, g = p3(e, ["prefixCls", "spinning", "delay", "className", "rootClassName", "size", "tip", "wrapperClassName", "style", "children", "fullscreen", "indicator", "percent"]), {
    getPrefixCls: p,
    direction: y,
    className: b,
    style: S,
    indicator: C
  } = kn("spin"), v = p("spin", t), [_, w, A] = f3(v), [M, k] = x.useState(() => n && !x3(n, o)), V = h3(M, d);
  x.useEffect(() => {
    if (n) {
      const N = y5(o, () => {
        k(!0);
      });
      return N(), () => {
        var B;
        (B = N == null ? void 0 : N.cancel) === null || B === void 0 || B.call(N);
      };
    }
    k(!1);
  }, [o, n]);
  const U = x.useMemo(() => typeof f < "u" && !h, [f, h]);
  if (process.env.NODE_ENV !== "production") {
    const N = Xt("Spin");
    process.env.NODE_ENV !== "production" && N(!c || U || h, "usage", "`tip` only work in nest or fullscreen pattern.");
  }
  const L = fe(v, b, {
    [`${v}-sm`]: s === "small",
    [`${v}-lg`]: s === "large",
    [`${v}-spinning`]: M,
    [`${v}-show-text`]: !!c,
    [`${v}-rtl`]: y === "rtl"
  }, i, !h && a, w, A), z = fe(`${v}-container`, {
    [`${v}-blur`]: M
  }), H = (r = m ?? C) !== null && r !== void 0 ? r : lm, P = Object.assign(Object.assign({}, S), u), I = /* @__PURE__ */ x.createElement("div", Object.assign({}, g, {
    style: P,
    className: L,
    "aria-live": "polite",
    "aria-busy": M
  }), /* @__PURE__ */ x.createElement(a3, {
    prefixCls: v,
    indicator: H,
    percent: V
  }), c && (U || h) ? /* @__PURE__ */ x.createElement("div", {
    className: `${v}-text`
  }, c) : null);
  return _(U ? /* @__PURE__ */ x.createElement("div", Object.assign({}, g, {
    className: fe(`${v}-nested-loading`, l, w, A)
  }), M && /* @__PURE__ */ x.createElement("div", {
    key: "loading"
  }, I), /* @__PURE__ */ x.createElement("div", {
    className: z,
    key: "container"
  }, f)) : h ? /* @__PURE__ */ x.createElement("div", {
    className: fe(`${v}-fullscreen`, {
      [`${v}-fullscreen-show`]: M
    }, a, w, A)
  }, I) : I);
};
ri.setDefaultIndicator = (e) => {
  lm = e;
};
process.env.NODE_ENV !== "production" && (ri.displayName = "Spin");
const g3 = function(e) {
  return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1) && e == null ? [] : Array.isArray(e) ? e : [e];
};
var m3 = function(r, t) {
  return /* @__PURE__ */ x.createElement(tn, bt({}, r, {
    ref: t,
    icon: z1
  }));
}, um = /* @__PURE__ */ x.forwardRef(m3);
process.env.NODE_ENV !== "production" && (um.displayName = "CopyOutlined");
var v3 = function(r, t) {
  return /* @__PURE__ */ x.createElement(tn, bt({}, r, {
    ref: t,
    icon: B1
  }));
}, fm = /* @__PURE__ */ x.forwardRef(v3);
process.env.NODE_ENV !== "production" && (fm.displayName = "EditOutlined");
var b3 = function(r, t) {
  return /* @__PURE__ */ x.createElement(tn, bt({}, r, {
    ref: t,
    icon: V1
  }));
}, dm = /* @__PURE__ */ x.forwardRef(b3);
process.env.NODE_ENV !== "production" && (dm.displayName = "EnterOutlined");
const y3 = (e, r, t, n) => {
  const {
    titleMarginBottom: o,
    fontWeightStrong: i
  } = n;
  return {
    marginBottom: o,
    color: t,
    fontWeight: i,
    fontSize: e,
    lineHeight: r
  };
}, w3 = (e) => {
  const r = [1, 2, 3, 4, 5], t = {};
  return r.forEach((n) => {
    t[`
      h${n}&,
      div&-h${n},
      div&-h${n} > textarea,
      h${n}
    `] = y3(e[`fontSizeHeading${n}`], e[`lineHeightHeading${n}`], e.colorTextHeading, e);
  }), t;
}, S3 = (e) => {
  const {
    componentCls: r
  } = e;
  return {
    "a&, a": Object.assign(Object.assign({}, Vx(e)), {
      userSelect: "text",
      [`&[disabled], &${r}-disabled`]: {
        color: e.colorTextDisabled,
        cursor: "not-allowed",
        "&:active, &:hover": {
          color: e.colorTextDisabled
        },
        "&:active": {
          pointerEvents: "none"
        }
      }
    })
  };
}, _3 = (e) => ({
  code: {
    margin: "0 0.2em",
    paddingInline: "0.4em",
    paddingBlock: "0.2em 0.1em",
    fontSize: "85%",
    fontFamily: e.fontFamilyCode,
    background: "rgba(150, 150, 150, 0.1)",
    border: "1px solid rgba(100, 100, 100, 0.2)",
    borderRadius: 3
  },
  kbd: {
    margin: "0 0.2em",
    paddingInline: "0.4em",
    paddingBlock: "0.15em 0.1em",
    fontSize: "90%",
    fontFamily: e.fontFamilyCode,
    background: "rgba(150, 150, 150, 0.06)",
    border: "1px solid rgba(100, 100, 100, 0.2)",
    borderBottomWidth: 2,
    borderRadius: 3
  },
  mark: {
    padding: 0,
    // FIXME hardcode in v4
    backgroundColor: qa[2]
  },
  "u, ins": {
    textDecoration: "underline",
    textDecorationSkipInk: "auto"
  },
  "s, del": {
    textDecoration: "line-through"
  },
  strong: {
    fontWeight: 600
  },
  // list
  "ul, ol": {
    marginInline: 0,
    marginBlock: "0 1em",
    padding: 0,
    li: {
      marginInline: "20px 0",
      marginBlock: 0,
      paddingInline: "4px 0",
      paddingBlock: 0
    }
  },
  ul: {
    listStyleType: "circle",
    ul: {
      listStyleType: "disc"
    }
  },
  ol: {
    listStyleType: "decimal"
  },
  // pre & block
  "pre, blockquote": {
    margin: "1em 0"
  },
  pre: {
    padding: "0.4em 0.6em",
    whiteSpace: "pre-wrap",
    wordWrap: "break-word",
    background: "rgba(150, 150, 150, 0.1)",
    border: "1px solid rgba(100, 100, 100, 0.2)",
    borderRadius: 3,
    fontFamily: e.fontFamilyCode,
    // Compatible for marked
    code: {
      display: "inline",
      margin: 0,
      padding: 0,
      fontSize: "inherit",
      fontFamily: "inherit",
      background: "transparent",
      border: 0
    }
  },
  blockquote: {
    paddingInline: "0.6em 0",
    paddingBlock: 0,
    borderInlineStart: "4px solid rgba(100, 100, 100, 0.2)",
    opacity: 0.85
  }
}), C3 = (e) => {
  const {
    componentCls: r,
    paddingSM: t
  } = e, n = t;
  return {
    "&-edit-content": {
      position: "relative",
      "div&": {
        insetInlineStart: e.calc(e.paddingSM).mul(-1).equal(),
        marginTop: e.calc(n).mul(-1).equal(),
        marginBottom: `calc(1em - ${ot(n)})`
      },
      [`${r}-edit-content-confirm`]: {
        position: "absolute",
        insetInlineEnd: e.calc(e.marginXS).add(2).equal(),
        insetBlockEnd: e.marginXS,
        color: e.colorTextDescription,
        // default style
        fontWeight: "normal",
        fontSize: e.fontSize,
        fontStyle: "normal",
        pointerEvents: "none"
      },
      textarea: {
        margin: "0!important",
        // Fix Editable Textarea flash in Firefox
        MozTransition: "none",
        height: "1em"
      }
    }
  };
}, E3 = (e) => ({
  [`${e.componentCls}-copy-success`]: {
    "\n    &,\n    &:hover,\n    &:focus": {
      color: e.colorSuccess
    }
  },
  [`${e.componentCls}-copy-icon-only`]: {
    marginInlineStart: 0
  }
}), O3 = () => ({
  "\n  a&-ellipsis,\n  span&-ellipsis\n  ": {
    display: "inline-block",
    maxWidth: "100%"
  },
  "&-ellipsis-single-line": {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    // https://blog.csdn.net/iefreer/article/details/50421025
    "a&, span&": {
      verticalAlign: "bottom"
    },
    "> code": {
      paddingBlock: 0,
      maxWidth: "calc(100% - 1.2em)",
      display: "inline-block",
      overflow: "hidden",
      textOverflow: "ellipsis",
      verticalAlign: "bottom",
      // https://github.com/ant-design/ant-design/issues/45953
      boxSizing: "content-box"
    }
  },
  "&-ellipsis-multiple-line": {
    display: "-webkit-box",
    overflow: "hidden",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical"
  }
}), R3 = (e) => {
  const {
    componentCls: r,
    titleMarginTop: t
  } = e;
  return {
    [r]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
      color: e.colorText,
      wordBreak: "break-word",
      lineHeight: e.lineHeight,
      [`&${r}-secondary`]: {
        color: e.colorTextDescription
      },
      [`&${r}-success`]: {
        color: e.colorSuccessText
      },
      [`&${r}-warning`]: {
        color: e.colorWarningText
      },
      [`&${r}-danger`]: {
        color: e.colorErrorText,
        "a&:active, a&:focus": {
          color: e.colorErrorTextActive
        },
        "a&:hover": {
          color: e.colorErrorTextHover
        }
      },
      [`&${r}-disabled`]: {
        color: e.colorTextDisabled,
        cursor: "not-allowed",
        userSelect: "none"
      },
      "\n        div&,\n        p\n      ": {
        marginBottom: "1em"
      }
    }, w3(e)), {
      [`
      & + h1${r},
      & + h2${r},
      & + h3${r},
      & + h4${r},
      & + h5${r}
      `]: {
        marginTop: t
      },
      "\n      div,\n      ul,\n      li,\n      p,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5": {
        "\n        + h1,\n        + h2,\n        + h3,\n        + h4,\n        + h5\n        ": {
          marginTop: t
        }
      }
    }), _3(e)), S3(e)), {
      // Operation
      [`
        ${r}-expand,
        ${r}-collapse,
        ${r}-edit,
        ${r}-copy
      `]: Object.assign(Object.assign({}, Vx(e)), {
        marginInlineStart: e.marginXXS
      })
    }), C3(e)), E3(e)), O3()), {
      "&-rtl": {
        direction: "rtl"
      }
    })
  };
}, $3 = () => ({
  titleMarginTop: "1.2em",
  titleMarginBottom: "0.5em"
}), hm = en("Typography", (e) => [R3(e)], $3), T3 = (e) => {
  const {
    prefixCls: r,
    "aria-label": t,
    className: n,
    style: o,
    direction: i,
    maxLength: a,
    autoSize: s = !0,
    value: c,
    onSave: l,
    onCancel: u,
    onEnd: f,
    component: h,
    enterIcon: m = /* @__PURE__ */ x.createElement(dm, null)
  } = e, d = x.useRef(null), g = x.useRef(!1), p = x.useRef(null), [y, b] = x.useState(c);
  x.useEffect(() => {
    b(c);
  }, [c]), x.useEffect(() => {
    var z;
    if (!((z = d.current) === null || z === void 0) && z.resizableTextArea) {
      const {
        textArea: H
      } = d.current.resizableTextArea;
      H.focus();
      const {
        length: P
      } = H.value;
      H.setSelectionRange(P, P);
    }
  }, []);
  const S = (z) => {
    let {
      target: H
    } = z;
    b(H.value.replace(/[\n\r]/g, ""));
  }, C = () => {
    g.current = !0;
  }, v = () => {
    g.current = !1;
  }, _ = (z) => {
    let {
      keyCode: H
    } = z;
    g.current || (p.current = H);
  }, w = () => {
    l(y.trim());
  }, A = (z) => {
    let {
      keyCode: H,
      ctrlKey: P,
      altKey: I,
      metaKey: N,
      shiftKey: B
    } = z;
    p.current !== H || g.current || P || I || N || B || (H === e0.ENTER ? (w(), f == null || f()) : H === e0.ESC && u());
  }, M = () => {
    w();
  }, [k, V, U] = hm(r), L = fe(r, `${r}-edit-content`, {
    [`${r}-rtl`]: i === "rtl",
    [`${r}-${h}`]: !!h
  }, n, V, U);
  return k(/* @__PURE__ */ x.createElement("div", {
    className: L,
    style: o
  }, /* @__PURE__ */ x.createElement(n3, {
    ref: d,
    maxLength: a,
    value: y,
    onChange: S,
    onKeyDown: _,
    onKeyUp: A,
    onCompositionStart: C,
    onCompositionEnd: v,
    onBlur: M,
    "aria-label": t,
    rows: 1,
    autoSize: s
  }), m !== null ? Si(m, {
    className: `${r}-edit-content-confirm`
  }) : null));
};
var rl, W0;
function P3() {
  return W0 || (W0 = 1, rl = function() {
    var e = document.getSelection();
    if (!e.rangeCount)
      return function() {
      };
    for (var r = document.activeElement, t = [], n = 0; n < e.rangeCount; n++)
      t.push(e.getRangeAt(n));
    switch (r.tagName.toUpperCase()) {
      // .toUpperCase handles XHTML
      case "INPUT":
      case "TEXTAREA":
        r.blur();
        break;
      default:
        r = null;
        break;
    }
    return e.removeAllRanges(), function() {
      e.type === "Caret" && e.removeAllRanges(), e.rangeCount || t.forEach(function(o) {
        e.addRange(o);
      }), r && r.focus();
    };
  }), rl;
}
var nl, q0;
function N3() {
  if (q0) return nl;
  q0 = 1;
  var e = P3(), r = {
    "text/plain": "Text",
    "text/html": "Url",
    default: "Text"
  }, t = "Copy to clipboard: #{key}, Enter";
  function n(i) {
    var a = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
    return i.replace(/#{\s*key\s*}/g, a);
  }
  function o(i, a) {
    var s, c, l, u, f, h, m = !1;
    a || (a = {}), s = a.debug || !1;
    try {
      l = e(), u = document.createRange(), f = document.getSelection(), h = document.createElement("span"), h.textContent = i, h.ariaHidden = "true", h.style.all = "unset", h.style.position = "fixed", h.style.top = 0, h.style.clip = "rect(0, 0, 0, 0)", h.style.whiteSpace = "pre", h.style.webkitUserSelect = "text", h.style.MozUserSelect = "text", h.style.msUserSelect = "text", h.style.userSelect = "text", h.addEventListener("copy", function(g) {
        if (g.stopPropagation(), a.format)
          if (g.preventDefault(), typeof g.clipboardData > "u") {
            s && console.warn("unable to use e.clipboardData"), s && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
            var p = r[a.format] || r.default;
            window.clipboardData.setData(p, i);
          } else
            g.clipboardData.clearData(), g.clipboardData.setData(a.format, i);
        a.onCopy && (g.preventDefault(), a.onCopy(g.clipboardData));
      }), document.body.appendChild(h), u.selectNodeContents(h), f.addRange(u);
      var d = document.execCommand("copy");
      if (!d)
        throw new Error("copy command was unsuccessful");
      m = !0;
    } catch (g) {
      s && console.error("unable to copy using execCommand: ", g), s && console.warn("trying IE specific stuff");
      try {
        window.clipboardData.setData(a.format || "text", i), a.onCopy && a.onCopy(window.clipboardData), m = !0;
      } catch (p) {
        s && console.error("unable to copy using clipboardData: ", p), s && console.error("falling back to prompt"), c = n("message" in a ? a.message : t), window.prompt(c, i);
      }
    } finally {
      f && (typeof f.removeRange == "function" ? f.removeRange(u) : f.removeAllRanges()), h && document.body.removeChild(h), l();
    }
    return m;
  }
  return nl = o, nl;
}
var A3 = N3();
const I3 = /* @__PURE__ */ zh(A3);
var M3 = function(e, r, t, n) {
  function o(i) {
    return i instanceof t ? i : new t(function(a) {
      a(i);
    });
  }
  return new (t || (t = Promise))(function(i, a) {
    function s(u) {
      try {
        l(n.next(u));
      } catch (f) {
        a(f);
      }
    }
    function c(u) {
      try {
        l(n.throw(u));
      } catch (f) {
        a(f);
      }
    }
    function l(u) {
      u.done ? i(u.value) : o(u.value).then(s, c);
    }
    l((n = n.apply(e, r || [])).next());
  });
};
const F3 = (e) => {
  let {
    copyConfig: r,
    children: t
  } = e;
  const [n, o] = x.useState(!1), [i, a] = x.useState(!1), s = x.useRef(null), c = () => {
    s.current && clearTimeout(s.current);
  }, l = {};
  r.format && (l.format = r.format), x.useEffect(() => c, []);
  const u = Ut((f) => M3(void 0, void 0, void 0, function* () {
    var h;
    f == null || f.preventDefault(), f == null || f.stopPropagation(), a(!0);
    try {
      const m = typeof r.text == "function" ? yield r.text() : r.text;
      I3(m || g3(t, !0).join("") || "", l), a(!1), o(!0), c(), s.current = setTimeout(() => {
        o(!1);
      }, 3e3), (h = r.onCopy) === null || h === void 0 || h.call(r, f);
    } catch (m) {
      throw a(!1), m;
    }
  }));
  return {
    copied: n,
    copyLoading: i,
    onClick: u
  };
};
function ol(e, r) {
  return x.useMemo(() => {
    const t = !!e;
    return [t, Object.assign(Object.assign({}, r), t && typeof e == "object" ? e : null)];
  }, [e]);
}
const j3 = (e) => {
  const r = Pe(void 0);
  return ut(() => {
    r.current = e;
  }), r.current;
}, D3 = (e, r, t) => Nn(() => e === !0 ? {
  title: r ?? t
} : /* @__PURE__ */ kh(e) ? {
  title: e
} : typeof e == "object" ? Object.assign({
  title: r ?? t
}, e) : {
  title: e
}, [e, r, t]);
var k3 = function(e, r) {
  var t = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    r.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (t[n[o]] = e[n[o]]);
  return t;
};
const yf = /* @__PURE__ */ x.forwardRef((e, r) => {
  const {
    prefixCls: t,
    component: n = "article",
    className: o,
    rootClassName: i,
    setContentRef: a,
    children: s,
    direction: c,
    style: l
  } = e, u = k3(e, ["prefixCls", "component", "className", "rootClassName", "setContentRef", "children", "direction", "style"]), {
    getPrefixCls: f,
    direction: h,
    className: m,
    style: d
  } = kn("typography"), g = c ?? h, p = a ? Dn(r, a) : r, y = f("typography", t);
  process.env.NODE_ENV !== "production" && Xt("Typography").deprecated(!a, "setContentRef", "ref");
  const [b, S, C] = hm(y), v = fe(y, m, {
    [`${y}-rtl`]: g === "rtl"
  }, o, i, S, C), _ = Object.assign(Object.assign({}, d), l);
  return b(
    // @ts-expect-error: Expression produces a union type that is too complex to represent.
    /* @__PURE__ */ x.createElement(n, Object.assign({
      className: v,
      style: _,
      ref: p
    }, u), s)
  );
});
process.env.NODE_ENV !== "production" && (yf.displayName = "Typography");
function U0(e) {
  return e === !1 ? [!1, !1] : Array.isArray(e) ? e : [e];
}
function il(e, r, t) {
  return e === !0 || e === void 0 ? r : e || t && r;
}
function L3(e) {
  const r = document.createElement("em");
  e.appendChild(r), process.env.NODE_ENV !== "production" && (r.className = "ant-typography-css-ellipsis-content-measure");
  const t = e.getBoundingClientRect(), n = r.getBoundingClientRect();
  return e.removeChild(r), // Horizontal out of range
  t.left > n.left || n.right > t.right || // Vertical out of range
  t.top > n.top || n.bottom > t.bottom;
}
const wf = (e) => ["string", "number"].includes(typeof e), z3 = (e) => {
  let {
    prefixCls: r,
    copied: t,
    locale: n,
    iconOnly: o,
    tooltips: i,
    icon: a,
    tabIndex: s,
    onCopy: c,
    loading: l
  } = e;
  const u = U0(i), f = U0(a), {
    copied: h,
    copy: m
  } = n ?? {}, d = t ? h : m, g = il(u[t ? 1 : 0], d), p = typeof g == "string" ? g : d;
  return /* @__PURE__ */ x.createElement($i, {
    title: g
  }, /* @__PURE__ */ x.createElement("button", {
    type: "button",
    className: fe(`${r}-copy`, {
      [`${r}-copy-success`]: t,
      [`${r}-copy-icon-only`]: o
    }),
    onClick: c,
    "aria-label": p,
    tabIndex: s
  }, t ? il(f[1], /* @__PURE__ */ x.createElement(Lg, null), !0) : il(f[0], l ? /* @__PURE__ */ x.createElement(uf, null) : /* @__PURE__ */ x.createElement(um, null), !0)));
}, fa = /* @__PURE__ */ x.forwardRef((e, r) => {
  let {
    style: t,
    children: n
  } = e;
  const o = x.useRef(null);
  return x.useImperativeHandle(r, () => ({
    isExceed: () => {
      const i = o.current;
      return i.scrollHeight > i.clientHeight;
    },
    getHeight: () => o.current.clientHeight
  })), /* @__PURE__ */ x.createElement("span", {
    "aria-hidden": !0,
    ref: o,
    style: Object.assign({
      position: "fixed",
      display: "block",
      left: 0,
      top: 0,
      pointerEvents: "none",
      backgroundColor: "rgba(255, 0, 0, 0.65)"
    }, t)
  }, n);
}), B3 = (e) => e.reduce((r, t) => r + (wf(t) ? String(t).length : 1), 0);
function G0(e, r) {
  let t = 0;
  const n = [];
  for (let o = 0; o < e.length; o += 1) {
    if (t === r)
      return n;
    const i = e[o], s = wf(i) ? String(i).length : 1, c = t + s;
    if (c > r) {
      const l = r - t;
      return n.push(String(i).slice(0, l)), n;
    }
    n.push(i), t = c;
  }
  return e;
}
const al = 0, sl = 1, cl = 2, ll = 3, K0 = 4, da = {
  display: "-webkit-box",
  overflow: "hidden",
  WebkitBoxOrient: "vertical"
};
function V3(e) {
  const {
    enableMeasure: r,
    width: t,
    text: n,
    children: o,
    rows: i,
    expanded: a,
    miscDeps: s,
    onEllipsis: c
  } = e, l = x.useMemo(() => gn(n), [n]), u = x.useMemo(() => B3(l), [n]), f = x.useMemo(() => o(l, !1), [n]), [h, m] = x.useState(null), d = x.useRef(null), g = x.useRef(null), p = x.useRef(null), y = x.useRef(null), b = x.useRef(null), [S, C] = x.useState(!1), [v, _] = x.useState(al), [w, A] = x.useState(0), [M, k] = x.useState(null);
  St(() => {
    _(r && t && u ? sl : al);
  }, [t, n, i, r, l]), St(() => {
    var z, H, P, I;
    if (v === sl) {
      _(cl);
      const N = g.current && getComputedStyle(g.current).whiteSpace;
      k(N);
    } else if (v === cl) {
      const N = !!(!((z = p.current) === null || z === void 0) && z.isExceed());
      _(N ? ll : K0), m(N ? [0, u] : null), C(N);
      const B = ((H = p.current) === null || H === void 0 ? void 0 : H.getHeight()) || 0, W = i === 1 ? 0 : ((P = y.current) === null || P === void 0 ? void 0 : P.getHeight()) || 0, Y = ((I = b.current) === null || I === void 0 ? void 0 : I.getHeight()) || 0, X = Math.max(
        B,
        // height of rows with ellipsis
        W + Y
      );
      A(X + 1), c(N);
    }
  }, [v]);
  const V = h ? Math.ceil((h[0] + h[1]) / 2) : 0;
  St(() => {
    var z;
    const [H, P] = h || [0, 0];
    if (H !== P) {
      const N = (((z = d.current) === null || z === void 0 ? void 0 : z.getHeight()) || 0) > w;
      let B = V;
      P - H === 1 && (B = N ? H : P), m(N ? [H, B] : [B, P]);
    }
  }, [h, V]);
  const U = x.useMemo(() => {
    if (!r)
      return o(l, !1);
    if (v !== ll || !h || h[0] !== h[1]) {
      const z = o(l, !1);
      return [K0, al].includes(v) ? z : /* @__PURE__ */ x.createElement("span", {
        style: Object.assign(Object.assign({}, da), {
          WebkitLineClamp: i
        })
      }, z);
    }
    return o(a ? l : G0(l, h[0]), S);
  }, [a, v, h, l].concat(Re(s))), L = {
    width: t,
    margin: 0,
    padding: 0,
    whiteSpace: M === "nowrap" ? "normal" : "inherit"
  };
  return /* @__PURE__ */ x.createElement(x.Fragment, null, U, v === cl && /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ x.createElement(fa, {
    style: Object.assign(Object.assign(Object.assign({}, L), da), {
      WebkitLineClamp: i
    }),
    ref: p
  }, f), /* @__PURE__ */ x.createElement(fa, {
    style: Object.assign(Object.assign(Object.assign({}, L), da), {
      WebkitLineClamp: i - 1
    }),
    ref: y
  }, f), /* @__PURE__ */ x.createElement(fa, {
    style: Object.assign(Object.assign(Object.assign({}, L), da), {
      WebkitLineClamp: 1
    }),
    ref: b
  }, o([], !0))), v === ll && h && h[0] !== h[1] && /* @__PURE__ */ x.createElement(fa, {
    style: Object.assign(Object.assign({}, L), {
      top: 400
    }),
    ref: d
  }, o(G0(l, V), !0)), v === sl && /* @__PURE__ */ x.createElement("span", {
    style: {
      whiteSpace: "inherit"
    },
    ref: g
  }));
}
const pm = (e) => {
  let {
    enableEllipsis: r,
    isEllipsis: t,
    children: n,
    tooltipProps: o
  } = e;
  return !(o != null && o.title) || !r ? n : /* @__PURE__ */ x.createElement($i, Object.assign({
    open: t ? void 0 : !1
  }, o), n);
};
process.env.NODE_ENV !== "production" && (pm.displayName = "EllipsisTooltip");
var H3 = function(e, r) {
  var t = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    r.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (t[n[o]] = e[n[o]]);
  return t;
};
function W3(e, r) {
  let {
    mark: t,
    code: n,
    underline: o,
    delete: i,
    strong: a,
    keyboard: s,
    italic: c
  } = e, l = r;
  function u(f, h) {
    h && (l = /* @__PURE__ */ x.createElement(f, {}, l));
  }
  return u("strong", a), u("u", o), u("del", i), u("code", n), u("mark", t), u("kbd", s), u("i", c), l;
}
const q3 = "...", ec = /* @__PURE__ */ x.forwardRef((e, r) => {
  var t;
  const {
    prefixCls: n,
    className: o,
    style: i,
    type: a,
    disabled: s,
    children: c,
    ellipsis: l,
    editable: u,
    copyable: f,
    component: h,
    title: m
  } = e, d = H3(e, ["prefixCls", "className", "style", "type", "disabled", "children", "ellipsis", "editable", "copyable", "component", "title"]), {
    getPrefixCls: g,
    direction: p
  } = x.useContext(er), [y] = W2("Text"), b = x.useRef(null), S = x.useRef(null), C = g("typography", n), v = Ci(d, ["mark", "code", "delete", "underline", "strong", "keyboard", "italic"]), [_, w] = ol(u), [A, M] = In(!1, {
    value: w.editing
  }), {
    triggerType: k = ["icon"]
  } = w, V = (he) => {
    var Ee;
    he && ((Ee = w.onStart) === null || Ee === void 0 || Ee.call(w)), M(he);
  }, U = j3(A);
  St(() => {
    var he;
    !A && U && ((he = S.current) === null || he === void 0 || he.focus());
  }, [A]);
  const L = (he) => {
    he == null || he.preventDefault(), V(!0);
  }, z = (he) => {
    var Ee;
    (Ee = w.onChange) === null || Ee === void 0 || Ee.call(w, he), V(!1);
  }, H = () => {
    var he;
    (he = w.onCancel) === null || he === void 0 || he.call(w), V(!1);
  }, [P, I] = ol(f), {
    copied: N,
    copyLoading: B,
    onClick: W
  } = F3({
    copyConfig: I,
    children: c
  }), [Y, X] = x.useState(!1), [Z, G] = x.useState(!1), [te, ie] = x.useState(!1), [de, pe] = x.useState(!1), [xe, we] = x.useState(!0), [ae, se] = ol(l, {
    expandable: !1,
    symbol: (he) => he ? y == null ? void 0 : y.collapse : y == null ? void 0 : y.expand
  }), [_e, re] = In(se.defaultExpanded || !1, {
    value: se.expanded
  }), me = ae && (!_e || se.expandable === "collapsible"), {
    rows: ce = 1
  } = se, ve = x.useMemo(() => (
    // Disable ellipsis
    me && // Provide suffix
    (se.suffix !== void 0 || se.onEllipsis || // Can't use css ellipsis since we need to provide the place for button
    se.expandable || _ || P)
  ), [me, se, _, P]);
  St(() => {
    ae && !ve && (X(E0("webkitLineClamp")), G(E0("textOverflow")));
  }, [ve, ae]);
  const [Se, ye] = x.useState(me), Ve = x.useMemo(() => ve ? !1 : ce === 1 ? Z : Y, [ve, Z, Y]);
  St(() => {
    ye(Ve && me);
  }, [Ve, me]);
  const $e = me && (Se ? de : te), $ = me && ce === 1 && Se, O = me && ce > 1 && Se, E = (he, Ee) => {
    var ft;
    re(Ee.expanded), (ft = se.onExpand) === null || ft === void 0 || ft.call(se, he, Ee);
  }, [F, T] = x.useState(0), ge = (he) => {
    let {
      offsetWidth: Ee
    } = he;
    T(Ee);
  }, Be = (he) => {
    var Ee;
    ie(he), te !== he && ((Ee = se.onEllipsis) === null || Ee === void 0 || Ee.call(se, he));
  };
  x.useEffect(() => {
    const he = b.current;
    if (ae && Se && he) {
      const Ee = L3(he);
      de !== Ee && pe(Ee);
    }
  }, [ae, Se, c, O, xe, F]), x.useEffect(() => {
    const he = b.current;
    if (typeof IntersectionObserver > "u" || !he || !Se || !me)
      return;
    const Ee = new IntersectionObserver(() => {
      we(!!he.offsetParent);
    });
    return Ee.observe(he), () => {
      Ee.disconnect();
    };
  }, [Se, me]);
  const We = D3(se.tooltip, w.text, c), Le = x.useMemo(() => {
    if (!(!ae || Se))
      return [w.text, c, m, We.title].find(wf);
  }, [ae, Se, m, We.title, $e]);
  if (A)
    return /* @__PURE__ */ x.createElement(T3, {
      value: (t = w.text) !== null && t !== void 0 ? t : typeof c == "string" ? c : "",
      onSave: z,
      onCancel: H,
      onEnd: w.onEnd,
      prefixCls: C,
      className: o,
      style: i,
      direction: p,
      component: h,
      maxLength: w.maxLength,
      autoSize: w.autoSize,
      enterIcon: w.enterIcon
    });
  const Ze = () => {
    const {
      expandable: he,
      symbol: Ee
    } = se;
    return he ? /* @__PURE__ */ x.createElement("button", {
      type: "button",
      key: "expand",
      className: `${C}-${_e ? "collapse" : "expand"}`,
      onClick: (ft) => E(ft, {
        expanded: !_e
      }),
      "aria-label": _e ? y.collapse : y == null ? void 0 : y.expand
    }, typeof Ee == "function" ? Ee(_e) : Ee) : null;
  }, Fe = () => {
    if (!_)
      return;
    const {
      icon: he,
      tooltip: Ee,
      tabIndex: ft
    } = w, Jt = gn(Ee)[0] || (y == null ? void 0 : y.edit), Dt = typeof Jt == "string" ? Jt : "";
    return k.includes("icon") ? /* @__PURE__ */ x.createElement($i, {
      key: "edit",
      title: Ee === !1 ? "" : Jt
    }, /* @__PURE__ */ x.createElement("button", {
      type: "button",
      ref: S,
      className: `${C}-edit`,
      onClick: L,
      "aria-label": Dt,
      tabIndex: ft
    }, he || /* @__PURE__ */ x.createElement(fm, {
      role: "button"
    }))) : null;
  }, ze = () => P ? /* @__PURE__ */ x.createElement(z3, Object.assign({
    key: "copy"
  }, I, {
    prefixCls: C,
    copied: N,
    locale: y,
    onCopy: W,
    loading: B,
    iconOnly: c == null
  })) : null, le = (he) => [he && Ze(), Fe(), ze()], Oe = (he) => [he && !_e && /* @__PURE__ */ x.createElement("span", {
    "aria-hidden": !0,
    key: "ellipsis"
  }, q3), se.suffix, le(he)];
  return /* @__PURE__ */ x.createElement(Oo, {
    onResize: ge,
    disabled: !me
  }, (he) => /* @__PURE__ */ x.createElement(pm, {
    tooltipProps: We,
    enableEllipsis: me,
    isEllipsis: $e
  }, /* @__PURE__ */ x.createElement(yf, Object.assign({
    className: fe({
      [`${C}-${a}`]: a,
      [`${C}-disabled`]: s,
      [`${C}-ellipsis`]: ae,
      [`${C}-ellipsis-single-line`]: $,
      [`${C}-ellipsis-multiple-line`]: O
    }, o),
    prefixCls: n,
    style: Object.assign(Object.assign({}, i), {
      WebkitLineClamp: O ? ce : void 0
    }),
    component: h,
    ref: Dn(he, b, r),
    direction: p,
    onClick: k.includes("text") ? L : void 0,
    "aria-label": Le == null ? void 0 : Le.toString(),
    title: m
  }, v), /* @__PURE__ */ x.createElement(V3, {
    enableMeasure: me && !Se,
    text: c,
    rows: ce,
    width: F,
    onEllipsis: Be,
    expanded: _e,
    miscDeps: [N, _e, B, _, P, y]
  }, (Ee, ft) => W3(e, /* @__PURE__ */ x.createElement(x.Fragment, null, Ee.length > 0 && ft && !_e && Le ? /* @__PURE__ */ x.createElement("span", {
    key: "show-content",
    "aria-hidden": !0
  }, Ee) : Ee, Oe(ft)))))));
});
var U3 = function(e, r) {
  var t = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    r.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (t[n[o]] = e[n[o]]);
  return t;
};
const G3 = /* @__PURE__ */ x.forwardRef((e, r) => {
  var {
    ellipsis: t,
    rel: n
  } = e, o = U3(e, ["ellipsis", "rel"]);
  if (process.env.NODE_ENV !== "production") {
    const a = Xt("Typography.Link");
    process.env.NODE_ENV !== "production" && a(typeof t != "object", "usage", "`ellipsis` only supports boolean value.");
  }
  const i = Object.assign(Object.assign({}, o), {
    rel: n === void 0 && o.target === "_blank" ? "noopener noreferrer" : n
  });
  return delete i.navigate, /* @__PURE__ */ x.createElement(ec, Object.assign({}, i, {
    ref: r,
    ellipsis: !!t,
    component: "a"
  }));
}), K3 = /* @__PURE__ */ x.forwardRef((e, r) => /* @__PURE__ */ x.createElement(ec, Object.assign({
  ref: r
}, e, {
  component: "div"
})));
var X3 = function(e, r) {
  var t = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    r.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (t[n[o]] = e[n[o]]);
  return t;
};
const Y3 = (e, r) => {
  var {
    ellipsis: t
  } = e, n = X3(e, ["ellipsis"]);
  const o = x.useMemo(() => t && typeof t == "object" ? Ci(t, ["expandable", "rows"]) : t, [t]);
  if (process.env.NODE_ENV !== "production") {
    const i = Xt("Typography.Text");
    process.env.NODE_ENV !== "production" && i(typeof t != "object" || !t || !("expandable" in t) && !("rows" in t), "usage", "`ellipsis` do not support `expandable` or `rows` props.");
  }
  return /* @__PURE__ */ x.createElement(ec, Object.assign({
    ref: r
  }, n, {
    ellipsis: o,
    component: "span"
  }));
}, J3 = /* @__PURE__ */ x.forwardRef(Y3);
var Q3 = function(e, r) {
  var t = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    r.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (t[n[o]] = e[n[o]]);
  return t;
};
const X0 = [1, 2, 3, 4, 5], Z3 = /* @__PURE__ */ x.forwardRef((e, r) => {
  const {
    level: t = 1
  } = e, n = Q3(e, ["level"]);
  if (process.env.NODE_ENV !== "production") {
    const i = Xt("Typography.Title");
    process.env.NODE_ENV !== "production" && i(X0.includes(t), "usage", "Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version.");
  }
  const o = X0.includes(t) ? `h${t}` : "h1";
  return /* @__PURE__ */ x.createElement(ec, Object.assign({
    ref: r
  }, n, {
    component: o
  }));
}), Ti = yf;
Ti.Text = J3;
Ti.Link = G3;
Ti.Title = Z3;
Ti.Paragraph = K3;
function xm(e, r) {
  return function() {
    return e.apply(r, arguments);
  };
}
const { toString: eO } = Object.prototype, { getPrototypeOf: Sf } = Object, { iterator: tc, toStringTag: gm } = Symbol, rc = /* @__PURE__ */ ((e) => (r) => {
  const t = eO.call(r);
  return e[t] || (e[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Ar = (e) => (e = e.toLowerCase(), (r) => rc(r) === e), nc = (e) => (r) => typeof r === e, { isArray: Po } = Array, yo = nc("undefined");
function Pi(e) {
  return e !== null && !yo(e) && e.constructor !== null && !yo(e.constructor) && nr(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const mm = Ar("ArrayBuffer");
function tO(e) {
  let r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(e) : r = e && e.buffer && mm(e.buffer), r;
}
const rO = nc("string"), nr = nc("function"), vm = nc("number"), Ni = (e) => e !== null && typeof e == "object", nO = (e) => e === !0 || e === !1, Aa = (e) => {
  if (rc(e) !== "object")
    return !1;
  const r = Sf(e);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(gm in e) && !(tc in e);
}, oO = (e) => {
  if (!Ni(e) || Pi(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, iO = Ar("Date"), aO = Ar("File"), sO = Ar("Blob"), cO = Ar("FileList"), lO = (e) => Ni(e) && nr(e.pipe), uO = (e) => {
  let r;
  return e && (typeof FormData == "function" && e instanceof FormData || nr(e.append) && ((r = rc(e)) === "formdata" || // detect form-data instance
  r === "object" && nr(e.toString) && e.toString() === "[object FormData]"));
}, fO = Ar("URLSearchParams"), [dO, hO, pO, xO] = ["ReadableStream", "Request", "Response", "Headers"].map(Ar), gO = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ai(e, r, { allOwnKeys: t = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, o;
  if (typeof e != "object" && (e = [e]), Po(e))
    for (n = 0, o = e.length; n < o; n++)
      r.call(null, e[n], n, e);
  else {
    if (Pi(e))
      return;
    const i = t ? Object.getOwnPropertyNames(e) : Object.keys(e), a = i.length;
    let s;
    for (n = 0; n < a; n++)
      s = i[n], r.call(null, e[s], s, e);
  }
}
function bm(e, r) {
  if (Pi(e))
    return null;
  r = r.toLowerCase();
  const t = Object.keys(e);
  let n = t.length, o;
  for (; n-- > 0; )
    if (o = t[n], r === o.toLowerCase())
      return o;
  return null;
}
const On = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, ym = (e) => !yo(e) && e !== On;
function Tu() {
  const { caseless: e, skipUndefined: r } = ym(this) && this || {}, t = {}, n = (o, i) => {
    const a = e && bm(t, i) || i;
    Aa(t[a]) && Aa(o) ? t[a] = Tu(t[a], o) : Aa(o) ? t[a] = Tu({}, o) : Po(o) ? t[a] = o.slice() : (!r || !yo(o)) && (t[a] = o);
  };
  for (let o = 0, i = arguments.length; o < i; o++)
    arguments[o] && Ai(arguments[o], n);
  return t;
}
const mO = (e, r, t, { allOwnKeys: n } = {}) => (Ai(r, (o, i) => {
  t && nr(o) ? e[i] = xm(o, t) : e[i] = o;
}, { allOwnKeys: n }), e), vO = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), bO = (e, r, t, n) => {
  e.prototype = Object.create(r.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: r.prototype
  }), t && Object.assign(e.prototype, t);
}, yO = (e, r, t, n) => {
  let o, i, a;
  const s = {};
  if (r = r || {}, e == null) return r;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      a = o[i], (!n || n(a, e, r)) && !s[a] && (r[a] = e[a], s[a] = !0);
    e = t !== !1 && Sf(e);
  } while (e && (!t || t(e, r)) && e !== Object.prototype);
  return r;
}, wO = (e, r, t) => {
  e = String(e), (t === void 0 || t > e.length) && (t = e.length), t -= r.length;
  const n = e.indexOf(r, t);
  return n !== -1 && n === t;
}, SO = (e) => {
  if (!e) return null;
  if (Po(e)) return e;
  let r = e.length;
  if (!vm(r)) return null;
  const t = new Array(r);
  for (; r-- > 0; )
    t[r] = e[r];
  return t;
}, _O = /* @__PURE__ */ ((e) => (r) => e && r instanceof e)(typeof Uint8Array < "u" && Sf(Uint8Array)), CO = (e, r) => {
  const n = (e && e[tc]).call(e);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const i = o.value;
    r.call(e, i[0], i[1]);
  }
}, EO = (e, r) => {
  let t;
  const n = [];
  for (; (t = e.exec(r)) !== null; )
    n.push(t);
  return n;
}, OO = Ar("HTMLFormElement"), RO = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(t, n, o) {
    return n.toUpperCase() + o;
  }
), Y0 = (({ hasOwnProperty: e }) => (r, t) => e.call(r, t))(Object.prototype), $O = Ar("RegExp"), wm = (e, r) => {
  const t = Object.getOwnPropertyDescriptors(e), n = {};
  Ai(t, (o, i) => {
    let a;
    (a = r(o, i, e)) !== !1 && (n[i] = a || o);
  }), Object.defineProperties(e, n);
}, TO = (e) => {
  wm(e, (r, t) => {
    if (nr(e) && ["arguments", "caller", "callee"].indexOf(t) !== -1)
      return !1;
    const n = e[t];
    if (nr(n)) {
      if (r.enumerable = !1, "writable" in r) {
        r.writable = !1;
        return;
      }
      r.set || (r.set = () => {
        throw Error("Can not rewrite read-only method '" + t + "'");
      });
    }
  });
}, PO = (e, r) => {
  const t = {}, n = (o) => {
    o.forEach((i) => {
      t[i] = !0;
    });
  };
  return Po(e) ? n(e) : n(String(e).split(r)), t;
}, NO = () => {
}, AO = (e, r) => e != null && Number.isFinite(e = +e) ? e : r;
function IO(e) {
  return !!(e && nr(e.append) && e[gm] === "FormData" && e[tc]);
}
const MO = (e) => {
  const r = new Array(10), t = (n, o) => {
    if (Ni(n)) {
      if (r.indexOf(n) >= 0)
        return;
      if (Pi(n))
        return n;
      if (!("toJSON" in n)) {
        r[o] = n;
        const i = Po(n) ? [] : {};
        return Ai(n, (a, s) => {
          const c = t(a, o + 1);
          !yo(c) && (i[s] = c);
        }), r[o] = void 0, i;
      }
    }
    return n;
  };
  return t(e, 0);
}, FO = Ar("AsyncFunction"), jO = (e) => e && (Ni(e) || nr(e)) && nr(e.then) && nr(e.catch), Sm = ((e, r) => e ? setImmediate : r ? ((t, n) => (On.addEventListener("message", ({ source: o, data: i }) => {
  o === On && i === t && n.length && n.shift()();
}, !1), (o) => {
  n.push(o), On.postMessage(t, "*");
}))(`axios@${Math.random()}`, []) : (t) => setTimeout(t))(
  typeof setImmediate == "function",
  nr(On.postMessage)
), DO = typeof queueMicrotask < "u" ? queueMicrotask.bind(On) : typeof process < "u" && process.nextTick || Sm, kO = (e) => e != null && nr(e[tc]), K = {
  isArray: Po,
  isArrayBuffer: mm,
  isBuffer: Pi,
  isFormData: uO,
  isArrayBufferView: tO,
  isString: rO,
  isNumber: vm,
  isBoolean: nO,
  isObject: Ni,
  isPlainObject: Aa,
  isEmptyObject: oO,
  isReadableStream: dO,
  isRequest: hO,
  isResponse: pO,
  isHeaders: xO,
  isUndefined: yo,
  isDate: iO,
  isFile: aO,
  isBlob: sO,
  isRegExp: $O,
  isFunction: nr,
  isStream: lO,
  isURLSearchParams: fO,
  isTypedArray: _O,
  isFileList: cO,
  forEach: Ai,
  merge: Tu,
  extend: mO,
  trim: gO,
  stripBOM: vO,
  inherits: bO,
  toFlatObject: yO,
  kindOf: rc,
  kindOfTest: Ar,
  endsWith: wO,
  toArray: SO,
  forEachEntry: CO,
  matchAll: EO,
  isHTMLForm: OO,
  hasOwnProperty: Y0,
  hasOwnProp: Y0,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: wm,
  freezeMethods: TO,
  toObjectSet: PO,
  toCamelCase: RO,
  noop: NO,
  toFiniteNumber: AO,
  findKey: bm,
  global: On,
  isContextDefined: ym,
  isSpecCompliantForm: IO,
  toJSONObject: MO,
  isAsyncFn: FO,
  isThenable: jO,
  setImmediate: Sm,
  asap: DO,
  isIterable: kO
};
function qe(e, r, t, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", r && (this.code = r), t && (this.config = t), n && (this.request = n), o && (this.response = o, this.status = o.status ? o.status : null);
}
K.inherits(qe, Error, {
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
      config: K.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const _m = qe.prototype, Cm = {};
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
  Cm[e] = { value: e };
});
Object.defineProperties(qe, Cm);
Object.defineProperty(_m, "isAxiosError", { value: !0 });
qe.from = (e, r, t, n, o, i) => {
  const a = Object.create(_m);
  K.toFlatObject(e, a, function(u) {
    return u !== Error.prototype;
  }, (l) => l !== "isAxiosError");
  const s = e && e.message ? e.message : "Error", c = r == null && e ? e.code : r;
  return qe.call(a, s, c, t, n, o), e && a.cause == null && Object.defineProperty(a, "cause", { value: e, configurable: !0 }), a.name = e && e.name || "Error", i && Object.assign(a, i), a;
};
const LO = null;
function Pu(e) {
  return K.isPlainObject(e) || K.isArray(e);
}
function Em(e) {
  return K.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function J0(e, r, t) {
  return e ? e.concat(r).map(function(o, i) {
    return o = Em(o), !t && i ? "[" + o + "]" : o;
  }).join(t ? "." : "") : r;
}
function zO(e) {
  return K.isArray(e) && !e.some(Pu);
}
const BO = K.toFlatObject(K, {}, null, function(r) {
  return /^is[A-Z]/.test(r);
});
function oc(e, r, t) {
  if (!K.isObject(e))
    throw new TypeError("target must be an object");
  r = r || new FormData(), t = K.toFlatObject(t, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, p) {
    return !K.isUndefined(p[g]);
  });
  const n = t.metaTokens, o = t.visitor || u, i = t.dots, a = t.indexes, c = (t.Blob || typeof Blob < "u" && Blob) && K.isSpecCompliantForm(r);
  if (!K.isFunction(o))
    throw new TypeError("visitor must be a function");
  function l(d) {
    if (d === null) return "";
    if (K.isDate(d))
      return d.toISOString();
    if (K.isBoolean(d))
      return d.toString();
    if (!c && K.isBlob(d))
      throw new qe("Blob is not supported. Use a Buffer instead.");
    return K.isArrayBuffer(d) || K.isTypedArray(d) ? c && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function u(d, g, p) {
    let y = d;
    if (d && !p && typeof d == "object") {
      if (K.endsWith(g, "{}"))
        g = n ? g : g.slice(0, -2), d = JSON.stringify(d);
      else if (K.isArray(d) && zO(d) || (K.isFileList(d) || K.endsWith(g, "[]")) && (y = K.toArray(d)))
        return g = Em(g), y.forEach(function(S, C) {
          !(K.isUndefined(S) || S === null) && r.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? J0([g], C, i) : a === null ? g : g + "[]",
            l(S)
          );
        }), !1;
    }
    return Pu(d) ? !0 : (r.append(J0(p, g, i), l(d)), !1);
  }
  const f = [], h = Object.assign(BO, {
    defaultVisitor: u,
    convertValue: l,
    isVisitable: Pu
  });
  function m(d, g) {
    if (!K.isUndefined(d)) {
      if (f.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      f.push(d), K.forEach(d, function(y, b) {
        (!(K.isUndefined(y) || y === null) && o.call(
          r,
          y,
          K.isString(b) ? b.trim() : b,
          g,
          h
        )) === !0 && m(y, g ? g.concat(b) : [b]);
      }), f.pop();
    }
  }
  if (!K.isObject(e))
    throw new TypeError("data must be an object");
  return m(e), r;
}
function Q0(e) {
  const r = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return r[n];
  });
}
function _f(e, r) {
  this._pairs = [], e && oc(e, this, r);
}
const Om = _f.prototype;
Om.append = function(r, t) {
  this._pairs.push([r, t]);
};
Om.toString = function(r) {
  const t = r ? function(n) {
    return r.call(this, n, Q0);
  } : Q0;
  return this._pairs.map(function(o) {
    return t(o[0]) + "=" + t(o[1]);
  }, "").join("&");
};
function VO(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Rm(e, r, t) {
  if (!r)
    return e;
  const n = t && t.encode || VO;
  K.isFunction(t) && (t = {
    serialize: t
  });
  const o = t && t.serialize;
  let i;
  if (o ? i = o(r, t) : i = K.isURLSearchParams(r) ? r.toString() : new _f(r, t).toString(n), i) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class Z0 {
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
  use(r, t, n) {
    return this.handlers.push({
      fulfilled: r,
      rejected: t,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
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
    K.forEach(this.handlers, function(n) {
      n !== null && r(n);
    });
  }
}
const $m = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, HO = typeof URLSearchParams < "u" ? URLSearchParams : _f, WO = typeof FormData < "u" ? FormData : null, qO = typeof Blob < "u" ? Blob : null, UO = {
  isBrowser: !0,
  classes: {
    URLSearchParams: HO,
    FormData: WO,
    Blob: qO
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Cf = typeof window < "u" && typeof document < "u", Nu = typeof navigator == "object" && navigator || void 0, GO = Cf && (!Nu || ["ReactNative", "NativeScript", "NS"].indexOf(Nu.product) < 0), KO = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", XO = Cf && window.location.href || "http://localhost", YO = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Cf,
  hasStandardBrowserEnv: GO,
  hasStandardBrowserWebWorkerEnv: KO,
  navigator: Nu,
  origin: XO
}, Symbol.toStringTag, { value: "Module" })), Gt = {
  ...YO,
  ...UO
};
function JO(e, r) {
  return oc(e, new Gt.classes.URLSearchParams(), {
    visitor: function(t, n, o, i) {
      return Gt.isNode && K.isBuffer(t) ? (this.append(n, t.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    },
    ...r
  });
}
function QO(e) {
  return K.matchAll(/\w+|\[(\w*)]/g, e).map((r) => r[0] === "[]" ? "" : r[1] || r[0]);
}
function ZO(e) {
  const r = {}, t = Object.keys(e);
  let n;
  const o = t.length;
  let i;
  for (n = 0; n < o; n++)
    i = t[n], r[i] = e[i];
  return r;
}
function Tm(e) {
  function r(t, n, o, i) {
    let a = t[i++];
    if (a === "__proto__") return !0;
    const s = Number.isFinite(+a), c = i >= t.length;
    return a = !a && K.isArray(o) ? o.length : a, c ? (K.hasOwnProp(o, a) ? o[a] = [o[a], n] : o[a] = n, !s) : ((!o[a] || !K.isObject(o[a])) && (o[a] = []), r(t, n, o[a], i) && K.isArray(o[a]) && (o[a] = ZO(o[a])), !s);
  }
  if (K.isFormData(e) && K.isFunction(e.entries)) {
    const t = {};
    return K.forEachEntry(e, (n, o) => {
      r(QO(n), o, t, 0);
    }), t;
  }
  return null;
}
function eR(e, r, t) {
  if (K.isString(e))
    try {
      return (r || JSON.parse)(e), K.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (t || JSON.stringify)(e);
}
const Ii = {
  transitional: $m,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(r, t) {
    const n = t.getContentType() || "", o = n.indexOf("application/json") > -1, i = K.isObject(r);
    if (i && K.isHTMLForm(r) && (r = new FormData(r)), K.isFormData(r))
      return o ? JSON.stringify(Tm(r)) : r;
    if (K.isArrayBuffer(r) || K.isBuffer(r) || K.isStream(r) || K.isFile(r) || K.isBlob(r) || K.isReadableStream(r))
      return r;
    if (K.isArrayBufferView(r))
      return r.buffer;
    if (K.isURLSearchParams(r))
      return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), r.toString();
    let s;
    if (i) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return JO(r, this.formSerializer).toString();
      if ((s = K.isFileList(r)) || n.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return oc(
          s ? { "files[]": r } : r,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return i || o ? (t.setContentType("application/json", !1), eR(r)) : r;
  }],
  transformResponse: [function(r) {
    const t = this.transitional || Ii.transitional, n = t && t.forcedJSONParsing, o = this.responseType === "json";
    if (K.isResponse(r) || K.isReadableStream(r))
      return r;
    if (r && K.isString(r) && (n && !this.responseType || o)) {
      const a = !(t && t.silentJSONParsing) && o;
      try {
        return JSON.parse(r, this.parseReviver);
      } catch (s) {
        if (a)
          throw s.name === "SyntaxError" ? qe.from(s, qe.ERR_BAD_RESPONSE, this, null, this.response) : s;
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
    FormData: Gt.classes.FormData,
    Blob: Gt.classes.Blob
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
K.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Ii.headers[e] = {};
});
const tR = K.toObjectSet([
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
]), rR = (e) => {
  const r = {};
  let t, n, o;
  return e && e.split(`
`).forEach(function(a) {
    o = a.indexOf(":"), t = a.substring(0, o).trim().toLowerCase(), n = a.substring(o + 1).trim(), !(!t || r[t] && tR[t]) && (t === "set-cookie" ? r[t] ? r[t].push(n) : r[t] = [n] : r[t] = r[t] ? r[t] + ", " + n : n);
  }), r;
}, eh = Symbol("internals");
function qo(e) {
  return e && String(e).trim().toLowerCase();
}
function Ia(e) {
  return e === !1 || e == null ? e : K.isArray(e) ? e.map(Ia) : String(e);
}
function nR(e) {
  const r = /* @__PURE__ */ Object.create(null), t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = t.exec(e); )
    r[n[1]] = n[2];
  return r;
}
const oR = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ul(e, r, t, n, o) {
  if (K.isFunction(n))
    return n.call(this, r, t);
  if (o && (r = t), !!K.isString(r)) {
    if (K.isString(n))
      return r.indexOf(n) !== -1;
    if (K.isRegExp(n))
      return n.test(r);
  }
}
function iR(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (r, t, n) => t.toUpperCase() + n);
}
function aR(e, r) {
  const t = K.toCamelCase(" " + r);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + t, {
      value: function(o, i, a) {
        return this[n].call(this, r, o, i, a);
      },
      configurable: !0
    });
  });
}
let or = class {
  constructor(r) {
    r && this.set(r);
  }
  set(r, t, n) {
    const o = this;
    function i(s, c, l) {
      const u = qo(c);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const f = K.findKey(o, u);
      (!f || o[f] === void 0 || l === !0 || l === void 0 && o[f] !== !1) && (o[f || c] = Ia(s));
    }
    const a = (s, c) => K.forEach(s, (l, u) => i(l, u, c));
    if (K.isPlainObject(r) || r instanceof this.constructor)
      a(r, t);
    else if (K.isString(r) && (r = r.trim()) && !oR(r))
      a(rR(r), t);
    else if (K.isObject(r) && K.isIterable(r)) {
      let s = {}, c, l;
      for (const u of r) {
        if (!K.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        s[l = u[0]] = (c = s[l]) ? K.isArray(c) ? [...c, u[1]] : [c, u[1]] : u[1];
      }
      a(s, t);
    } else
      r != null && i(t, r, n);
    return this;
  }
  get(r, t) {
    if (r = qo(r), r) {
      const n = K.findKey(this, r);
      if (n) {
        const o = this[n];
        if (!t)
          return o;
        if (t === !0)
          return nR(o);
        if (K.isFunction(t))
          return t.call(this, o, n);
        if (K.isRegExp(t))
          return t.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(r, t) {
    if (r = qo(r), r) {
      const n = K.findKey(this, r);
      return !!(n && this[n] !== void 0 && (!t || ul(this, this[n], n, t)));
    }
    return !1;
  }
  delete(r, t) {
    const n = this;
    let o = !1;
    function i(a) {
      if (a = qo(a), a) {
        const s = K.findKey(n, a);
        s && (!t || ul(n, n[s], s, t)) && (delete n[s], o = !0);
      }
    }
    return K.isArray(r) ? r.forEach(i) : i(r), o;
  }
  clear(r) {
    const t = Object.keys(this);
    let n = t.length, o = !1;
    for (; n--; ) {
      const i = t[n];
      (!r || ul(this, this[i], i, r, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(r) {
    const t = this, n = {};
    return K.forEach(this, (o, i) => {
      const a = K.findKey(n, i);
      if (a) {
        t[a] = Ia(o), delete t[i];
        return;
      }
      const s = r ? iR(i) : String(i).trim();
      s !== i && delete t[i], t[s] = Ia(o), n[s] = !0;
    }), this;
  }
  concat(...r) {
    return this.constructor.concat(this, ...r);
  }
  toJSON(r) {
    const t = /* @__PURE__ */ Object.create(null);
    return K.forEach(this, (n, o) => {
      n != null && n !== !1 && (t[o] = r && K.isArray(n) ? n.join(", ") : n);
    }), t;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([r, t]) => r + ": " + t).join(`
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
  static concat(r, ...t) {
    const n = new this(r);
    return t.forEach((o) => n.set(o)), n;
  }
  static accessor(r) {
    const n = (this[eh] = this[eh] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(a) {
      const s = qo(a);
      n[s] || (aR(o, a), n[s] = !0);
    }
    return K.isArray(r) ? r.forEach(i) : i(r), this;
  }
};
or.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
K.reduceDescriptors(or.prototype, ({ value: e }, r) => {
  let t = r[0].toUpperCase() + r.slice(1);
  return {
    get: () => e,
    set(n) {
      this[t] = n;
    }
  };
});
K.freezeMethods(or);
function fl(e, r) {
  const t = this || Ii, n = r || t, o = or.from(n.headers);
  let i = n.data;
  return K.forEach(e, function(s) {
    i = s.call(t, i, o.normalize(), r ? r.status : void 0);
  }), o.normalize(), i;
}
function Pm(e) {
  return !!(e && e.__CANCEL__);
}
function No(e, r, t) {
  qe.call(this, e ?? "canceled", qe.ERR_CANCELED, r, t), this.name = "CanceledError";
}
K.inherits(No, qe, {
  __CANCEL__: !0
});
function Nm(e, r, t) {
  const n = t.config.validateStatus;
  !t.status || !n || n(t.status) ? e(t) : r(new qe(
    "Request failed with status code " + t.status,
    [qe.ERR_BAD_REQUEST, qe.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],
    t.config,
    t.request,
    t
  ));
}
function sR(e) {
  const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return r && r[1] || "";
}
function cR(e, r) {
  e = e || 10;
  const t = new Array(e), n = new Array(e);
  let o = 0, i = 0, a;
  return r = r !== void 0 ? r : 1e3, function(c) {
    const l = Date.now(), u = n[i];
    a || (a = l), t[o] = c, n[o] = l;
    let f = i, h = 0;
    for (; f !== o; )
      h += t[f++], f = f % e;
    if (o = (o + 1) % e, o === i && (i = (i + 1) % e), l - a < r)
      return;
    const m = u && l - u;
    return m ? Math.round(h * 1e3 / m) : void 0;
  };
}
function lR(e, r) {
  let t = 0, n = 1e3 / r, o, i;
  const a = (l, u = Date.now()) => {
    t = u, o = null, i && (clearTimeout(i), i = null), e(...l);
  };
  return [(...l) => {
    const u = Date.now(), f = u - t;
    f >= n ? a(l, u) : (o = l, i || (i = setTimeout(() => {
      i = null, a(o);
    }, n - f)));
  }, () => o && a(o)];
}
const es = (e, r, t = 3) => {
  let n = 0;
  const o = cR(50, 250);
  return lR((i) => {
    const a = i.loaded, s = i.lengthComputable ? i.total : void 0, c = a - n, l = o(c), u = a <= s;
    n = a;
    const f = {
      loaded: a,
      total: s,
      progress: s ? a / s : void 0,
      bytes: c,
      rate: l || void 0,
      estimated: l && s && u ? (s - a) / l : void 0,
      event: i,
      lengthComputable: s != null,
      [r ? "download" : "upload"]: !0
    };
    e(f);
  }, t);
}, th = (e, r) => {
  const t = e != null;
  return [(n) => r[0]({
    lengthComputable: t,
    total: e,
    loaded: n
  }), r[1]];
}, rh = (e) => (...r) => K.asap(() => e(...r)), uR = Gt.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, r) => (t) => (t = new URL(t, Gt.origin), e.protocol === t.protocol && e.host === t.host && (r || e.port === t.port)))(
  new URL(Gt.origin),
  Gt.navigator && /(msie|trident)/i.test(Gt.navigator.userAgent)
) : () => !0, fR = Gt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, r, t, n, o, i, a) {
      if (typeof document > "u") return;
      const s = [`${e}=${encodeURIComponent(r)}`];
      K.isNumber(t) && s.push(`expires=${new Date(t).toUTCString()}`), K.isString(n) && s.push(`path=${n}`), K.isString(o) && s.push(`domain=${o}`), i === !0 && s.push("secure"), K.isString(a) && s.push(`SameSite=${a}`), document.cookie = s.join("; ");
    },
    read(e) {
      if (typeof document > "u") return null;
      const r = document.cookie.match(new RegExp("(?:^|; )" + e + "=([^;]*)"));
      return r ? decodeURIComponent(r[1]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5, "/");
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
function dR(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function hR(e, r) {
  return r ? e.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "") : e;
}
function Am(e, r, t) {
  let n = !dR(r);
  return e && (n || t == !1) ? hR(e, r) : r;
}
const nh = (e) => e instanceof or ? { ...e } : e;
function Fn(e, r) {
  r = r || {};
  const t = {};
  function n(l, u, f, h) {
    return K.isPlainObject(l) && K.isPlainObject(u) ? K.merge.call({ caseless: h }, l, u) : K.isPlainObject(u) ? K.merge({}, u) : K.isArray(u) ? u.slice() : u;
  }
  function o(l, u, f, h) {
    if (K.isUndefined(u)) {
      if (!K.isUndefined(l))
        return n(void 0, l, f, h);
    } else return n(l, u, f, h);
  }
  function i(l, u) {
    if (!K.isUndefined(u))
      return n(void 0, u);
  }
  function a(l, u) {
    if (K.isUndefined(u)) {
      if (!K.isUndefined(l))
        return n(void 0, l);
    } else return n(void 0, u);
  }
  function s(l, u, f) {
    if (f in r)
      return n(l, u);
    if (f in e)
      return n(void 0, l);
  }
  const c = {
    url: i,
    method: i,
    data: i,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    withXSRFToken: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: s,
    headers: (l, u, f) => o(nh(l), nh(u), f, !0)
  };
  return K.forEach(Object.keys({ ...e, ...r }), function(u) {
    const f = c[u] || o, h = f(e[u], r[u], u);
    K.isUndefined(h) && f !== s || (t[u] = h);
  }), t;
}
const Im = (e) => {
  const r = Fn({}, e);
  let { data: t, withXSRFToken: n, xsrfHeaderName: o, xsrfCookieName: i, headers: a, auth: s } = r;
  if (r.headers = a = or.from(a), r.url = Rm(Am(r.baseURL, r.url, r.allowAbsoluteUrls), e.params, e.paramsSerializer), s && a.set(
    "Authorization",
    "Basic " + btoa((s.username || "") + ":" + (s.password ? unescape(encodeURIComponent(s.password)) : ""))
  ), K.isFormData(t)) {
    if (Gt.hasStandardBrowserEnv || Gt.hasStandardBrowserWebWorkerEnv)
      a.setContentType(void 0);
    else if (K.isFunction(t.getHeaders)) {
      const c = t.getHeaders(), l = ["content-type", "content-length"];
      Object.entries(c).forEach(([u, f]) => {
        l.includes(u.toLowerCase()) && a.set(u, f);
      });
    }
  }
  if (Gt.hasStandardBrowserEnv && (n && K.isFunction(n) && (n = n(r)), n || n !== !1 && uR(r.url))) {
    const c = o && i && fR.read(i);
    c && a.set(o, c);
  }
  return r;
}, pR = typeof XMLHttpRequest < "u", xR = pR && function(e) {
  return new Promise(function(t, n) {
    const o = Im(e);
    let i = o.data;
    const a = or.from(o.headers).normalize();
    let { responseType: s, onUploadProgress: c, onDownloadProgress: l } = o, u, f, h, m, d;
    function g() {
      m && m(), d && d(), o.cancelToken && o.cancelToken.unsubscribe(u), o.signal && o.signal.removeEventListener("abort", u);
    }
    let p = new XMLHttpRequest();
    p.open(o.method.toUpperCase(), o.url, !0), p.timeout = o.timeout;
    function y() {
      if (!p)
        return;
      const S = or.from(
        "getAllResponseHeaders" in p && p.getAllResponseHeaders()
      ), v = {
        data: !s || s === "text" || s === "json" ? p.responseText : p.response,
        status: p.status,
        statusText: p.statusText,
        headers: S,
        config: e,
        request: p
      };
      Nm(function(w) {
        t(w), g();
      }, function(w) {
        n(w), g();
      }, v), p = null;
    }
    "onloadend" in p ? p.onloadend = y : p.onreadystatechange = function() {
      !p || p.readyState !== 4 || p.status === 0 && !(p.responseURL && p.responseURL.indexOf("file:") === 0) || setTimeout(y);
    }, p.onabort = function() {
      p && (n(new qe("Request aborted", qe.ECONNABORTED, e, p)), p = null);
    }, p.onerror = function(C) {
      const v = C && C.message ? C.message : "Network Error", _ = new qe(v, qe.ERR_NETWORK, e, p);
      _.event = C || null, n(_), p = null;
    }, p.ontimeout = function() {
      let C = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const v = o.transitional || $m;
      o.timeoutErrorMessage && (C = o.timeoutErrorMessage), n(new qe(
        C,
        v.clarifyTimeoutError ? qe.ETIMEDOUT : qe.ECONNABORTED,
        e,
        p
      )), p = null;
    }, i === void 0 && a.setContentType(null), "setRequestHeader" in p && K.forEach(a.toJSON(), function(C, v) {
      p.setRequestHeader(v, C);
    }), K.isUndefined(o.withCredentials) || (p.withCredentials = !!o.withCredentials), s && s !== "json" && (p.responseType = o.responseType), l && ([h, d] = es(l, !0), p.addEventListener("progress", h)), c && p.upload && ([f, m] = es(c), p.upload.addEventListener("progress", f), p.upload.addEventListener("loadend", m)), (o.cancelToken || o.signal) && (u = (S) => {
      p && (n(!S || S.type ? new No(null, e, p) : S), p.abort(), p = null);
    }, o.cancelToken && o.cancelToken.subscribe(u), o.signal && (o.signal.aborted ? u() : o.signal.addEventListener("abort", u)));
    const b = sR(o.url);
    if (b && Gt.protocols.indexOf(b) === -1) {
      n(new qe("Unsupported protocol " + b + ":", qe.ERR_BAD_REQUEST, e));
      return;
    }
    p.send(i || null);
  });
}, gR = (e, r) => {
  const { length: t } = e = e ? e.filter(Boolean) : [];
  if (r || t) {
    let n = new AbortController(), o;
    const i = function(l) {
      if (!o) {
        o = !0, s();
        const u = l instanceof Error ? l : this.reason;
        n.abort(u instanceof qe ? u : new No(u instanceof Error ? u.message : u));
      }
    };
    let a = r && setTimeout(() => {
      a = null, i(new qe(`timeout ${r} of ms exceeded`, qe.ETIMEDOUT));
    }, r);
    const s = () => {
      e && (a && clearTimeout(a), a = null, e.forEach((l) => {
        l.unsubscribe ? l.unsubscribe(i) : l.removeEventListener("abort", i);
      }), e = null);
    };
    e.forEach((l) => l.addEventListener("abort", i));
    const { signal: c } = n;
    return c.unsubscribe = () => K.asap(s), c;
  }
}, mR = function* (e, r) {
  let t = e.byteLength;
  if (t < r) {
    yield e;
    return;
  }
  let n = 0, o;
  for (; n < t; )
    o = n + r, yield e.slice(n, o), n = o;
}, vR = async function* (e, r) {
  for await (const t of bR(e))
    yield* mR(t, r);
}, bR = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const r = e.getReader();
  try {
    for (; ; ) {
      const { done: t, value: n } = await r.read();
      if (t)
        break;
      yield n;
    }
  } finally {
    await r.cancel();
  }
}, oh = (e, r, t, n) => {
  const o = vR(e, r);
  let i = 0, a, s = (c) => {
    a || (a = !0, n && n(c));
  };
  return new ReadableStream({
    async pull(c) {
      try {
        const { done: l, value: u } = await o.next();
        if (l) {
          s(), c.close();
          return;
        }
        let f = u.byteLength;
        if (t) {
          let h = i += f;
          t(h);
        }
        c.enqueue(new Uint8Array(u));
      } catch (l) {
        throw s(l), l;
      }
    },
    cancel(c) {
      return s(c), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, ih = 64 * 1024, { isFunction: ha } = K, yR = (({ Request: e, Response: r }) => ({
  Request: e,
  Response: r
}))(K.global), {
  ReadableStream: ah,
  TextEncoder: sh
} = K.global, ch = (e, ...r) => {
  try {
    return !!e(...r);
  } catch {
    return !1;
  }
}, wR = (e) => {
  e = K.merge.call({
    skipUndefined: !0
  }, yR, e);
  const { fetch: r, Request: t, Response: n } = e, o = r ? ha(r) : typeof fetch == "function", i = ha(t), a = ha(n);
  if (!o)
    return !1;
  const s = o && ha(ah), c = o && (typeof sh == "function" ? /* @__PURE__ */ ((d) => (g) => d.encode(g))(new sh()) : async (d) => new Uint8Array(await new t(d).arrayBuffer())), l = i && s && ch(() => {
    let d = !1;
    const g = new t(Gt.origin, {
      body: new ah(),
      method: "POST",
      get duplex() {
        return d = !0, "half";
      }
    }).headers.has("Content-Type");
    return d && !g;
  }), u = a && s && ch(() => K.isReadableStream(new n("").body)), f = {
    stream: u && ((d) => d.body)
  };
  o && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((d) => {
    !f[d] && (f[d] = (g, p) => {
      let y = g && g[d];
      if (y)
        return y.call(g);
      throw new qe(`Response type '${d}' is not supported`, qe.ERR_NOT_SUPPORT, p);
    });
  });
  const h = async (d) => {
    if (d == null)
      return 0;
    if (K.isBlob(d))
      return d.size;
    if (K.isSpecCompliantForm(d))
      return (await new t(Gt.origin, {
        method: "POST",
        body: d
      }).arrayBuffer()).byteLength;
    if (K.isArrayBufferView(d) || K.isArrayBuffer(d))
      return d.byteLength;
    if (K.isURLSearchParams(d) && (d = d + ""), K.isString(d))
      return (await c(d)).byteLength;
  }, m = async (d, g) => {
    const p = K.toFiniteNumber(d.getContentLength());
    return p ?? h(g);
  };
  return async (d) => {
    let {
      url: g,
      method: p,
      data: y,
      signal: b,
      cancelToken: S,
      timeout: C,
      onDownloadProgress: v,
      onUploadProgress: _,
      responseType: w,
      headers: A,
      withCredentials: M = "same-origin",
      fetchOptions: k
    } = Im(d), V = r || fetch;
    w = w ? (w + "").toLowerCase() : "text";
    let U = gR([b, S && S.toAbortSignal()], C), L = null;
    const z = U && U.unsubscribe && (() => {
      U.unsubscribe();
    });
    let H;
    try {
      if (_ && l && p !== "get" && p !== "head" && (H = await m(A, y)) !== 0) {
        let Y = new t(g, {
          method: "POST",
          body: y,
          duplex: "half"
        }), X;
        if (K.isFormData(y) && (X = Y.headers.get("content-type")) && A.setContentType(X), Y.body) {
          const [Z, G] = th(
            H,
            es(rh(_))
          );
          y = oh(Y.body, ih, Z, G);
        }
      }
      K.isString(M) || (M = M ? "include" : "omit");
      const P = i && "credentials" in t.prototype, I = {
        ...k,
        signal: U,
        method: p.toUpperCase(),
        headers: A.normalize().toJSON(),
        body: y,
        duplex: "half",
        credentials: P ? M : void 0
      };
      L = i && new t(g, I);
      let N = await (i ? V(L, k) : V(g, I));
      const B = u && (w === "stream" || w === "response");
      if (u && (v || B && z)) {
        const Y = {};
        ["status", "statusText", "headers"].forEach((te) => {
          Y[te] = N[te];
        });
        const X = K.toFiniteNumber(N.headers.get("content-length")), [Z, G] = v && th(
          X,
          es(rh(v), !0)
        ) || [];
        N = new n(
          oh(N.body, ih, Z, () => {
            G && G(), z && z();
          }),
          Y
        );
      }
      w = w || "text";
      let W = await f[K.findKey(f, w) || "text"](N, d);
      return !B && z && z(), await new Promise((Y, X) => {
        Nm(Y, X, {
          data: W,
          headers: or.from(N.headers),
          status: N.status,
          statusText: N.statusText,
          config: d,
          request: L
        });
      });
    } catch (P) {
      throw z && z(), P && P.name === "TypeError" && /Load failed|fetch/i.test(P.message) ? Object.assign(
        new qe("Network Error", qe.ERR_NETWORK, d, L),
        {
          cause: P.cause || P
        }
      ) : qe.from(P, P && P.code, d, L);
    }
  };
}, SR = /* @__PURE__ */ new Map(), Mm = (e) => {
  let r = e && e.env || {};
  const { fetch: t, Request: n, Response: o } = r, i = [
    n,
    o,
    t
  ];
  let a = i.length, s = a, c, l, u = SR;
  for (; s--; )
    c = i[s], l = u.get(c), l === void 0 && u.set(c, l = s ? /* @__PURE__ */ new Map() : wR(r)), u = l;
  return l;
};
Mm();
const Ef = {
  http: LO,
  xhr: xR,
  fetch: {
    get: Mm
  }
};
K.forEach(Ef, (e, r) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: r });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: r });
  }
});
const lh = (e) => `- ${e}`, _R = (e) => K.isFunction(e) || e === null || e === !1;
function CR(e, r) {
  e = K.isArray(e) ? e : [e];
  const { length: t } = e;
  let n, o;
  const i = {};
  for (let a = 0; a < t; a++) {
    n = e[a];
    let s;
    if (o = n, !_R(n) && (o = Ef[(s = String(n)).toLowerCase()], o === void 0))
      throw new qe(`Unknown adapter '${s}'`);
    if (o && (K.isFunction(o) || (o = o.get(r))))
      break;
    i[s || "#" + a] = o;
  }
  if (!o) {
    const a = Object.entries(i).map(
      ([c, l]) => `adapter ${c} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let s = t ? a.length > 1 ? `since :
` + a.map(lh).join(`
`) : " " + lh(a[0]) : "as no adapter specified";
    throw new qe(
      "There is no suitable adapter to dispatch the request " + s,
      "ERR_NOT_SUPPORT"
    );
  }
  return o;
}
const Fm = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: CR,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Ef
};
function dl(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new No(null, e);
}
function uh(e) {
  return dl(e), e.headers = or.from(e.headers), e.data = fl.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Fm.getAdapter(e.adapter || Ii.adapter, e)(e).then(function(n) {
    return dl(e), n.data = fl.call(
      e,
      e.transformResponse,
      n
    ), n.headers = or.from(n.headers), n;
  }, function(n) {
    return Pm(n) || (dl(e), n && n.response && (n.response.data = fl.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = or.from(n.response.headers))), Promise.reject(n);
  });
}
const jm = "1.13.2", ic = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, r) => {
  ic[e] = function(n) {
    return typeof n === e || "a" + (r < 1 ? "n " : " ") + e;
  };
});
const fh = {};
ic.transitional = function(r, t, n) {
  function o(i, a) {
    return "[Axios v" + jm + "] Transitional option '" + i + "'" + a + (n ? ". " + n : "");
  }
  return (i, a, s) => {
    if (r === !1)
      throw new qe(
        o(a, " has been removed" + (t ? " in " + t : "")),
        qe.ERR_DEPRECATED
      );
    return t && !fh[a] && (fh[a] = !0, console.warn(
      o(
        a,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), r ? r(i, a, s) : !0;
  };
};
ic.spelling = function(r) {
  return (t, n) => (console.warn(`${n} is likely a misspelling of ${r}`), !0);
};
function ER(e, r, t) {
  if (typeof e != "object")
    throw new qe("options must be an object", qe.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let o = n.length;
  for (; o-- > 0; ) {
    const i = n[o], a = r[i];
    if (a) {
      const s = e[i], c = s === void 0 || a(s, i, e);
      if (c !== !0)
        throw new qe("option " + i + " must be " + c, qe.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0)
      throw new qe("Unknown option " + i, qe.ERR_BAD_OPTION);
  }
}
const Ma = {
  assertOptions: ER,
  validators: ic
}, jr = Ma.validators;
let Pn = class {
  constructor(r) {
    this.defaults = r || {}, this.interceptors = {
      request: new Z0(),
      response: new Z0()
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
  async request(r, t) {
    try {
      return await this._request(r, t);
    } catch (n) {
      if (n instanceof Error) {
        let o = {};
        Error.captureStackTrace ? Error.captureStackTrace(o) : o = new Error();
        const i = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? i && !String(n.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + i) : n.stack = i;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(r, t) {
    typeof r == "string" ? (t = t || {}, t.url = r) : t = r || {}, t = Fn(this.defaults, t);
    const { transitional: n, paramsSerializer: o, headers: i } = t;
    n !== void 0 && Ma.assertOptions(n, {
      silentJSONParsing: jr.transitional(jr.boolean),
      forcedJSONParsing: jr.transitional(jr.boolean),
      clarifyTimeoutError: jr.transitional(jr.boolean)
    }, !1), o != null && (K.isFunction(o) ? t.paramsSerializer = {
      serialize: o
    } : Ma.assertOptions(o, {
      encode: jr.function,
      serialize: jr.function
    }, !0)), t.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : t.allowAbsoluteUrls = !0), Ma.assertOptions(t, {
      baseUrl: jr.spelling("baseURL"),
      withXsrfToken: jr.spelling("withXSRFToken")
    }, !0), t.method = (t.method || this.defaults.method || "get").toLowerCase();
    let a = i && K.merge(
      i.common,
      i[t.method]
    );
    i && K.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (d) => {
        delete i[d];
      }
    ), t.headers = or.concat(a, i);
    const s = [];
    let c = !0;
    this.interceptors.request.forEach(function(g) {
      typeof g.runWhen == "function" && g.runWhen(t) === !1 || (c = c && g.synchronous, s.unshift(g.fulfilled, g.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(g) {
      l.push(g.fulfilled, g.rejected);
    });
    let u, f = 0, h;
    if (!c) {
      const d = [uh.bind(this), void 0];
      for (d.unshift(...s), d.push(...l), h = d.length, u = Promise.resolve(t); f < h; )
        u = u.then(d[f++], d[f++]);
      return u;
    }
    h = s.length;
    let m = t;
    for (; f < h; ) {
      const d = s[f++], g = s[f++];
      try {
        m = d(m);
      } catch (p) {
        g.call(this, p);
        break;
      }
    }
    try {
      u = uh.call(this, m);
    } catch (d) {
      return Promise.reject(d);
    }
    for (f = 0, h = l.length; f < h; )
      u = u.then(l[f++], l[f++]);
    return u;
  }
  getUri(r) {
    r = Fn(this.defaults, r);
    const t = Am(r.baseURL, r.url, r.allowAbsoluteUrls);
    return Rm(t, r.params, r.paramsSerializer);
  }
};
K.forEach(["delete", "get", "head", "options"], function(r) {
  Pn.prototype[r] = function(t, n) {
    return this.request(Fn(n || {}, {
      method: r,
      url: t,
      data: (n || {}).data
    }));
  };
});
K.forEach(["post", "put", "patch"], function(r) {
  function t(n) {
    return function(i, a, s) {
      return this.request(Fn(s || {}, {
        method: r,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: a
      }));
    };
  }
  Pn.prototype[r] = t(), Pn.prototype[r + "Form"] = t(!0);
});
let OR = class Dm {
  constructor(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    let t;
    this.promise = new Promise(function(i) {
      t = i;
    });
    const n = this;
    this.promise.then((o) => {
      if (!n._listeners) return;
      let i = n._listeners.length;
      for (; i-- > 0; )
        n._listeners[i](o);
      n._listeners = null;
    }), this.promise.then = (o) => {
      let i;
      const a = new Promise((s) => {
        n.subscribe(s), i = s;
      }).then(o);
      return a.cancel = function() {
        n.unsubscribe(i);
      }, a;
    }, r(function(i, a, s) {
      n.reason || (n.reason = new No(i, a, s), t(n.reason));
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
    const t = this._listeners.indexOf(r);
    t !== -1 && this._listeners.splice(t, 1);
  }
  toAbortSignal() {
    const r = new AbortController(), t = (n) => {
      r.abort(n);
    };
    return this.subscribe(t), r.signal.unsubscribe = () => this.unsubscribe(t), r.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let r;
    return {
      token: new Dm(function(o) {
        r = o;
      }),
      cancel: r
    };
  }
};
function RR(e) {
  return function(t) {
    return e.apply(null, t);
  };
}
function $R(e) {
  return K.isObject(e) && e.isAxiosError === !0;
}
const Au = {
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
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526
};
Object.entries(Au).forEach(([e, r]) => {
  Au[r] = e;
});
function km(e) {
  const r = new Pn(e), t = xm(Pn.prototype.request, r);
  return K.extend(t, Pn.prototype, r, { allOwnKeys: !0 }), K.extend(t, r, null, { allOwnKeys: !0 }), t.create = function(o) {
    return km(Fn(e, o));
  }, t;
}
const Rt = km(Ii);
Rt.Axios = Pn;
Rt.CanceledError = No;
Rt.CancelToken = OR;
Rt.isCancel = Pm;
Rt.VERSION = jm;
Rt.toFormData = oc;
Rt.AxiosError = qe;
Rt.Cancel = Rt.CanceledError;
Rt.all = function(r) {
  return Promise.all(r);
};
Rt.spread = RR;
Rt.isAxiosError = $R;
Rt.mergeConfig = Fn;
Rt.AxiosHeaders = or;
Rt.formToJSON = (e) => Tm(K.isHTMLForm(e) ? new FormData(e) : e);
Rt.getAdapter = Fm.getAdapter;
Rt.HttpStatusCode = Au;
Rt.default = Rt;
const {
  Axios: o4,
  AxiosError: i4,
  CanceledError: a4,
  isCancel: s4,
  CancelToken: c4,
  VERSION: l4,
  all: u4,
  Cancel: f4,
  isAxiosError: d4,
  spread: h4,
  toFormData: p4,
  AxiosHeaders: x4,
  HttpStatusCode: g4,
  formToJSON: m4,
  getAdapter: v4,
  mergeConfig: b4
} = Rt, Qr = rs;
(function(e, r) {
  const t = rs, n = e();
  for (; ; )
    try {
      if (-parseInt(t(184)) / 1 + parseInt(t(193)) / 2 * (-parseInt(t(207)) / 3) + -parseInt(t(203)) / 4 + parseInt(t(183)) / 5 * (parseInt(t(190)) / 6) + -parseInt(t(186)) / 7 + -parseInt(t(199)) / 8 * (-parseInt(t(201)) / 9) + parseInt(t(195)) / 10 * (parseInt(t(204)) / 11) === r) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ts, 360222);
Qr(188) + Qr(206);
Rt[Qr(208)][Qr(198) + Qr(196)] = !0;
function ts() {
  const e = ["DELETE", "1887944KQzsZQ", "366443cSxkWL", "response", "ient", "879SuoEEz", "defaults", "applicatio", "PUT", "params", "170KCwkfd", "493423jAzkro", "POST", "1970738VxTNiY", "error", "/api/v1/cl", "message", "32034kKcMIO", "n/json", "Content-Ty", "1414ZrPBea", "data", "380gbEOtW", "tials", "PATCH", "withCreden", "32RrutQL", "GET", "825516LPmeid"];
  return ts = function() {
    return e;
  }, ts();
}
const TR = async (e) => {
  var t, n, o, i;
  const r = Qr;
  try {
    return (await Rt(e))[r(194)];
  } catch (a) {
    throw ((n = (t = a[r(205)]) == null ? void 0 : t[r(194)]) == null ? void 0 : n[r(189)]) || ((i = (o = a[r(205)]) == null ? void 0 : o[r(194)]) == null ? void 0 : i[r(187)]) || a[r(189)];
  }
}, PR = {};
function rs(e, r) {
  const t = ts();
  return rs = function(n, o) {
    return n = n - 181, t[n];
  }, rs(e, r);
}
PR[Qr(192) + "pe"] = Qr(209) + Qr(191);
const gt = ns;
function ns(e, r) {
  const t = os();
  return ns = function(n, o) {
    return n = n - 471, t[n];
  }, ns(e, r);
}
(function(e, r) {
  const t = ns, n = e();
  for (; ; )
    try {
      if (-parseInt(t(484)) / 1 * (-parseInt(t(479)) / 2) + parseInt(t(497)) / 3 + parseInt(t(496)) / 4 + -parseInt(t(486)) / 5 + -parseInt(t(488)) / 6 + parseInt(t(483)) / 7 + parseInt(t(482)) / 8 * (parseInt(t(471)) / 9) === r) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(os, 819686);
const wn = {};
wn[gt(480)] = gt(473) + "E", wn[gt(485)] = gt(487), wn[gt(495)] = gt(489) + "N", wn[gt(491)] = gt(473) + "E", wn[gt(476)] = gt(487), wn[gt(492)] = gt(489) + "N";
const $r = wn, Iu = {};
function os() {
  const e = ["ACTION_DOW", "ent", "touchmove", "touchstart", "assistiveM", "keydown", "mousedown", "3459960qBLLfq", "1980396cvWqiF", "keyBoardEv", "wheelEvent", "754353TiWOmF", "moveEvent", "ACTION_MOV", "enuHide", "fullscreen", "touchend", "keyup", "shortcutEv", "4OFCeZD", "mousemove", "Event", "8JFxzbD", "7460754hHUhoi", "252084lcJvLE", "mouseup", "6724270ppnhEa", "ACTION_UP", "6086334AXwflz"];
  return os = function() {
    return e;
  }, os();
}
Iu[gt(477)] = gt(487), Iu[gt(494)] = gt(489) + "N";
const NR = Iu, AR = gt(472), IR = gt(499), MR = gt(498) + gt(490), Lm = gt(493) + gt(474), FR = gt(478) + gt(490), jR = gt(475) + gt(481);
(function(e, r) {
  const t = as, n = e();
  for (; ; )
    try {
      if (-parseInt(t(257)) / 1 + -parseInt(t(200)) / 2 * (-parseInt(t(210)) / 3) + -parseInt(t(235)) / 4 * (-parseInt(t(169)) / 5) + -parseInt(t(222)) / 6 + -parseInt(t(204)) / 7 + -parseInt(t(182)) / 8 * (-parseInt(t(246)) / 9) + -parseInt(t(260)) / 10 * (-parseInt(t(253)) / 11) === r) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(is, 190197);
function is() {
  const e = ["tListener", "mLjnP", "xrsSv", "repeat", "touchEvent", "control", "forEach", "EYOIu", "left", "1905840NAtCGc", "toUpperCas", "FDvmz", "COPY_TEXT", "arrowleft", "keyEvent", "gClientRec", "10681KDbAja", "addEventLi", "keyAction", "tdInc", "369672QcVGmo", "CQYdX", "keydown", "5630pbDusu", "type", "top", "removeEven", "getBoundin", "PASTE_TEXT", "meta_state", "toLowerCas", "ctrlKey", "action", "fscYa", "capslock", "EXT", "RpcDv", "eMHAs", "clientY", "arrowright", "1485365ishNaI", "XVtnA", "SdZkY", "typeKey", "SrGaC", "isDown", "passive", "touchend", "backspace", "duration", "ZDpDB", "glvBm", "current", "8svkSam", "KEYBOARD_C", "qZofi", "mousedown", "showMenu", "touchstart", "enter", "arrowdown", "mousemove", "deltaY", "includes", "Tucbd", "focus", "pageX", "mouse", "shift", "wheelEvent", "preventDef", "4WQdCSd", "clientX", "height", "LntHT", "2251774ZXzner", "pcbUN", "peGyK", "touch", "arrowup", "offsetWidt", "118461gPYZUI", "touchmove", "KEYBOARD_T", "rCczd", "clipboard", "stener", "pageY", "max", "NPSRi", "readText", "fcfrP", "now", "1517574bmfieh", "tzHjV", "offsetHeig", "tab", "shiftKey", "mouseup", "width", "key", "acxKD", "sign", "ault", "zfrrB", "zAClw", "4RyEdNZ", "ODE"];
  return is = function() {
    return e;
  }, is();
}
function as(e, r) {
  const t = is();
  return as = function(n, o) {
    return n = n - 165, t[n];
  }, as(e, r);
}
const DR = ({ isMobile: e, assistive: r, onRemoteEvent: t, canvasContent: n, canvasRef: o }) => {
  const i = as, [a, s] = Mt(!1), c = Pe(Date[i(221)]()), l = (m) => {
    const d = i;
    if (m[d(199) + d(232)](), !o[d(181)])
      if (d(234) === d(248)) _0xa9c7cc(_0x2efe82, _0x2d7fac);
      else return;
    const g = o[d(181)], p = g[d(264) + d(252) + "t"]();
    let y = $r[m[d(261)]];
    if (r[d(174)] == !0 || r[d(186)] == !0)
      if (d(180) === d(180)) {
        y == $r[d(227)] && t(Lm, {});
        return;
      } else _0x58d5ed[d(172)] = d(183) + d(236), _0x3e5306[d(229)] = 66;
    if (y == $r[d(185)] && s(!0), y != $r[d(185)] && a == !1) return;
    y == $r[d(227)] && s(!1);
    let b, S;
    if (m[d(261)][d(192)](d(207))) {
      const { touches: k, changedTouches: V } = m, U = k[0] ?? V[0];
      b = U[d(195)] - p[d(245)], S = U[d(216)] - p[d(262)];
    } else m[d(261)][d(192)](d(196)) && (d(270) === d(239) ? _0x1a270b(!1) : (b = m[d(201)] - p[d(245)], S = m[d(167)] - p[d(262)]));
    const C = 1, v = b < C || b > g[d(228)] - C, _ = S < C || S > g[d(202)] - C;
    (v || _) && (b = Math[d(217)](1, b), S = Math[d(217)](1, S), y = $r[d(227)]);
    const w = Date[d(221)](), A = w - c[d(181)];
    c[d(181)] = w;
    const M = {};
    M[d(269)] = d(241), M[d(255)] = y, M.x = b, M.y = S, M[d(228)] = p[d(228)], M[d(202)] = p[d(202)], M.ts = w, M[d(178)] = A, t(AR, M), g[d(194)]();
  }, u = (m) => {
    const d = i;
    if (d(238) !== d(166)) {
      if (m[d(199) + d(232)](), !o[d(181)]) return;
      const g = o[d(181)], p = Math[d(231)](m[d(191)]), y = g[d(264) + d(252) + "t"]();
      t(IR, { action: d(198), width: g[d(209) + "h"], height: g[d(224) + "ht"], x: m[d(201)] - y[d(245)], y: m[d(167)] - y[d(262)], delta: p, ts: Date[d(221)]() }), g[d(194)]();
    } else _0x9ccdfe(_0x4418e6, {});
  }, f = async (m) => {
    const d = i;
    if (d(170) === d(170)) {
      if (m[d(199) + d(232)](), !o[d(181)]) return;
      const g = o[d(181)], p = NR[m[d(261)]], y = m[d(229)][d(267) + "e"]();
      if (((v) => {
        const _ = d;
        if (_(173) !== _(258))
          return [_(242), _(197), _(271)][_(192)](v);
      })(y) == !0) return;
      const S = async () => {
        const v = d, _ = {};
        _[v(269)] = v(251), _[v(255)] = p, _[v(172)] = v(212) + v(272), _[v(229)] = m[v(229)], _[v(240)] = 0, _[v(266)] = 0;
        const w = _;
        if (m[v(268)] == !0)
          y == "c" ? w[v(172)] = v(249) : y == "a" ? (w[v(172)] = v(183) + v(236), w[v(266)] = 4096, w[v(229)] = 29) : y == "v" && (w[v(172)] = v(265), w[v(229)] = await navigator[v(214)][v(219)]());
        else if (y == v(208)) w[v(172)] = v(183) + v(236), w[v(229)] = 19;
        else if (y == v(189)) w[v(172)] = v(183) + v(236), w[v(229)] = 20;
        else if (y == v(250))
          if (v(203) !== v(203)) {
            _0x47b9f2 == _0x3274c1[v(227)] && _0x5a2d9e(_0x123617, {});
            return;
          } else w[v(172)] = v(183) + v(236), w[v(229)] = 21;
        else if (y == v(168)) w[v(172)] = v(183) + v(236), w[v(229)] = 22;
        else if (y == v(177)) w[v(172)] = v(183) + v(236), w[v(229)] = 67;
        else if (y == v(188)) w[v(172)] = v(183) + v(236), w[v(229)] = 66;
        else if (y == v(225))
          if (v(244) !== v(233)) w[v(172)] = v(183) + v(236), w[v(229)] = 61;
          else {
            if (_0x1cf648[v(199) + v(232)](), !_0x209f47[v(181)]) return;
            const A = _0x172c8e[v(181)], M = _0x5bc911[v(231)](_0x459b26[v(191)]), k = A[v(264) + v(252) + "t"]();
            _0x5a14ab(_0x3a67d1, { action: v(198), width: A[v(209) + "h"], height: A[v(224) + "ht"], x: _0x3a9a7e[v(201)] - k[v(245)], y: _0x214fc1[v(167)] - k[v(262)], delta: M, ts: _0x109743[v(221)]() }), A[v(194)]();
          }
        return w[v(261)] == v(212) + v(272) && m[v(226)] == !0 && (w[v(229)] = w[v(229)][v(247) + "e"]()), w;
      }, C = await S();
      if (C) {
        if (d(206) === d(165)) return;
        t(MR, C);
      }
      g[d(194)]();
    } else _0x20e79f[d(172)] = d(183) + d(236), _0x5ebab8[d(229)] = 20;
  };
  ut(() => {
    const m = i, d = o[m(181)];
    if (d)
      if (m(193) === m(213)) [m(190), m(185), m(227)][m(243)]((g) => {
        const p = m;
        _0x1c35e0[p(263) + p(237)](g, _0x3748ff);
      }), _0x4c0c67[m(263) + m(237)](m(259), _0x36f4dd);
      else {
        const g = {};
        g[m(175)] = !1;
        const p = g;
        return e ? m(184) === m(205) ? (_0x2670c3 = _0x4c21fe[m(201)] - _0x4b97b9[m(245)], _0x5bca53 = _0x266528[m(167)] - _0x1304bf[m(262)]) : (d[m(254) + m(215)](m(187), l, p), d[m(254) + m(215)](m(211), l, p), d[m(254) + m(215)](m(176), l)) : (d[m(254) + m(215)](m(259), f), [m(190), m(185), m(227)][m(243)]((y) => {
          const b = m;
          b(223) !== b(171) ? d[b(254) + b(215)](y, l) : (_0x323601 = _0x554f07[b(217)](1, _0x523209), _0x45b538 = _0x1d43a8[b(217)](1, _0x489380), _0x4135b9 = _0x3ada4b[b(227)]);
        })), () => {
          const y = m;
          y(218) !== y(218) ? _0x2be7e6(!0) : d && (e ? [y(187), y(211), y(176)][y(243)]((b) => {
            const S = y;
            S(179) === S(179) ? d[S(263) + S(237)](b, l) : (_0x4e1f9b[S(172)] = S(183) + S(236), _0x547370[S(229)] = 21);
          }) : y(220) !== y(256) ? ([y(190), y(185), y(227)][y(243)]((b) => {
            const S = y;
            S(230) === S(230) ? d[S(263) + S(237)](b, l) : _0xd3e701[S(263) + S(237)](_0x50e656, _0x5635cd);
          }), d[y(263) + y(237)](y(259), f)) : (_0x42eadc[y(172)] = y(183) + y(236), _0xbf55ef[y(229)] = 22));
        };
      }
  }, [e, l, u, f, o]);
  const h = { ref: o, ...n };
  return ue.jsx(c1, h);
}, kR = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20data-name='Layer%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20250%20250'%3e%3cdefs%3e%3cstyle%3e%20.cls-1%20{%20fill:%20%23fff;%20}%20.cls-2%20{%20fill:%20%2391959e;%20}%20.cls-3%20{%20fill:%20%235b6468;%20}%20.cls-4%20{%20fill:%20%23202932;%20}%20%3c/style%3e%3c/defs%3e%3ccircle%20class='cls-4'%20cx='125'%20cy='125'%20r='125'/%3e%3ccircle%20class='cls-3'%20cx='125'%20cy='125'%20r='90.03'/%3e%3ccircle%20class='cls-2'%20cx='125'%20cy='125'%20r='75.17'/%3e%3ccircle%20class='cls-1'%20cx='125'%20cy='125'%20r='59.75'/%3e%3c/svg%3e", ac = cs;
function ss() {
  const e = ["18699VnfJgH", "8BxUIne", "1324947EVeERG", "470310rhJxMU", "127070AkcApG", "div", "7011477VaqGvR", "3134750lmFcmv", "140jOytgw", "70kWkpGi", "570512aRogLO", "img", "275dVLtOm"];
  return ss = function() {
    return e;
  }, ss();
}
(function(e, r) {
  const t = cs, n = e();
  for (; ; )
    try {
      if (-parseInt(t(145)) / 1 + parseInt(t(138)) / 2 * (parseInt(t(143)) / 3) + parseInt(t(144)) / 4 * (parseInt(t(137)) / 5) + -parseInt(t(146)) / 6 + -parseInt(t(139)) / 7 * (parseInt(t(140)) / 8) + parseInt(t(136)) / 9 + parseInt(t(147)) / 10 * (parseInt(t(142)) / 11) === r) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ss, 670466);
const LR = qr[ac(135)]`
  z-index: 100;
  position: absolute;
  color: white;
  padding: 8px;
  border-radius: 30px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.723);
  cursor: default;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  border: 2px solid #a0beeb;
  /* grid-template-columns: repeat(auto-fill, minmax(45px, 1fr)); */
  gap: 8px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`, mr = qr[ac(135)]`
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
`, vr = qr.p`
  height: 5px;
  margin-top: 2px;
  font-size: 10px;
  font-weight: 600;
  text-align: center;
`;
function cs(e, r) {
  const t = ss();
  return cs = function(n, o) {
    return n = n - 135, t[n];
  }, cs(e, r);
}
const zR = qr[ac(141)]`
  position: absolute;
  backdrop-filter: blur(46px);
  border-radius: 50%;
  z-index: 999;
  width: 12%;
  right: 15%;
  top: 5%;
`, BR = qr[ac(135)]`
  user-select: none;
  transition: opacity 0.6s ease;
  z-index: 3;
  opacity: 0.3;
`;
(function(e, r) {
  const t = wo, n = e();
  for (; ; )
    try {
      if (parseInt(t(248)) / 1 * (parseInt(t(240)) / 2) + parseInt(t(272)) / 3 * (-parseInt(t(252)) / 4) + -parseInt(t(254)) / 5 + parseInt(t(268)) / 6 * (-parseInt(t(263)) / 7) + parseInt(t(244)) / 8 + -parseInt(t(251)) / 9 + -parseInt(t(267)) / 10 * (-parseInt(t(241)) / 11) === r) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ls, 636698);
const dh = () => {
  const e = wo;
  return document[e(256) + e(274)] || document[e(273) + e(249)] || document[e(282) + e(269) + e(281)] || document[e(270) + e(278)];
};
function wo(e, r) {
  const t = ls();
  return wo = function(n, o) {
    return n = n - 240, t[n];
  }, wo(e, r);
}
const VR = (e) => {
  const r = wo, t = document[r(242) + r(243)](r(262) + r(275) + e);
  if (t[r(264) + r(280)]) r(266) !== r(266) ? _0x53e424[r(261) + r(259) + r(271)]() : t[r(264) + r(280)]();
  else if (t[r(246) + r(258)]) t[r(246) + r(258)]();
  else if (t[r(261) + r(259) + r(271)]) t[r(261) + r(259) + r(271)]();
  else if (t[r(279) + r(257)])
    if (r(260) === r(260)) t[r(279) + r(257)]();
    else return _0x160853[r(256) + r(274)] || _0x420165[r(273) + r(249)] || _0x4f0657[r(282) + r(269) + r(281)] || _0x3d379d[r(270) + r(278)];
}, HR = () => {
  const e = wo;
  document[e(265) + e(276)] ? document[e(265) + e(276)]() : document[e(245) + e(283)] ? e(247) === e(247) ? document[e(245) + e(283)]() : _0x18944c[e(255) + e(253)]() : document[e(255) + e(253)] ? document[e(255) + e(253)]() : document[e(277) + e(250)] && document[e(277) + e(250)]();
};
function ls() {
  const e = ["lscreen", "ent", "webkitFull", "ullScreen", "424276WvHtTn", "167508WiejCi", "querySelec", "tor", "5128880DYxmeP", "mozCancelF", "mozRequest", "IrlsX", "3VOBhWP", "eenElement", "screen", "277542JJEHKm", "155396VLJrqk", "Fullscreen", "1606865AFMgjt", "webkitExit", "fullscreen", "ullscreen", "FullScreen", "estFullscr", "ZRvWO", "webkitRequ", "#screen_ma", "1494871KJMqvA", "requestFul", "exitFullsc", "xOmuz", "550IQDfPh", "24culstj", "screenElem", "msFullscre", "een", "21lKnqBa", "mozFullScr", "Element", "in_", "reen", "msExitFull", "enElement", "msRequestF"];
  return ls = function() {
    return e;
  }, ls();
}
(function(e, r) {
  const t = pi, n = e();
  for (; ; )
    try {
      if (-parseInt(t(344)) / 1 * (parseInt(t(418)) / 2) + parseInt(t(349)) / 3 * (parseInt(t(198)) / 4) + parseInt(t(435)) / 5 * (-parseInt(t(309)) / 6) + parseInt(t(343)) / 7 + -parseInt(t(174)) / 8 + parseInt(t(422)) / 9 + parseInt(t(481)) / 10 === r) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(us, 927390);
function us() {
  const e = ["-2.43-2.43", "2 0 0 0 21", " 0 0 1 1h1", "touch_", "3 1.329 3 ", "rclBA", "copy", "5 7h2v2H5V", "053 7.005 ", "27.05A1 1 ", "03-.897-2-", "2 22a9.09 ", "enchange", "volume", ".096 0 0 0", "shortcut", "m-2-4h2V3h", "69-.823l-1", "9 9.228 9.", "345-5.236 ", ".21a1 1 0 ", "71 0 3-1.3", "4789281iDIKTq", "34987ZgDUHA", "57-5.428 6", "4zm0 5h16v", ".999-4.909", "892A6.967 ", "113415sGiIGm", "top", "4-.002.968", "HwfYT", "move", " 0 0 0-1 1", "svg", " 5.999-9S1", "preventDef", "mouseup", "0 0 1.645z", "Board", "touch_clas", "landscape", "touchend", "PeCii", " 0 0 0-1.8", "2-2h-4V4h1", "tListener", "l10.283 7.", "8.952 8.95", "4h2v2h-2v-", "M20.817 11", "416 3.377 ", "shortcutCo", "2 2h10c1.1", "H4c-1.103 ", "10l.002 10", "pageY", "-2-5zM4 17", "height", "2H4zm0 5h1", "3c.033 0 .", " 0 0 0-3.2", "-7v2h5z", "6 1.907 7.", "forEach", "Icon", ".387 1.386", "M21 5H3a2 ", "1.048z", "grab", "6 0 0 1 5 ", "Unlock", "HYcFz", "ShowID", "7 2-2V4c0-", "set", "UnSync", "eygDO", "M20.978 13", "6v2H4z", "00/svg", ".004 1.004", "get", " 2v13c0 1.", "action", "Home", "H13z", "mousedown", "4.243 7 7v", "eLYkV", "1.346-3 3-", "Sync", "75z", "6v6h2v-4h4", "7-2-2-2h-3", "EaXhn", "Paste", "2DDOzPd", "7a1 1 0 0 ", ".614 16 19", "2.757-2.24", "14146380kdQaWw", "103.897 2 ", "includes", "2 2zm2 7v-", "mouse", "6.961 0 0 ", "2 2v8c0 1.", "2h-2V7zm0 ", "readText", "M10 4H8v4H", "v7h2zm5 14", "M17 8V7c0-", "change", "20bXFgYo", "032 7.032 ", "7-2-2-2H9V", ".186a8.94 ", "zNWSM", "opacity", "2 2h7c1.10", "1 0 0 0-1-", "a.995.995 ", "taskId", "GctTo", "H4zm16-6h-", "QxYGp", "0 18V4h10l", "2-.082-.03", "-2-2-2zm-9", " 1 0 0 0 1", ".015.057-.", "6.967 0 0 ", "focus", "7zm0 4h2v2", "4c-.025-.0", "027 1.027 ", "lAJGv", "4 7.002 7.", " 2.428 2.4", "674.31a1 1", "now", "0 0-.396-1", "0 0 0 .38-", "961 0 0 1-", " 1.539 5.0", "shortcutEv", "27-1.547 5", "type", "zm0-6h-4V4", "0 0-1.554-", "1.003 0 0 ", "1v16a1 1 0", "-1.355-3.2", "13 7.13 0 ", "0 0 1-.55 ", "home", ".089-1.218", "8.347l-3.0", "1-.644 1.1", "2978500KGjXgZ", " 7H4c-1.10", "ent", "2-.116C7.0", "6H7v-2h10v", "-1-1H8a1 1", "stener", "33L12 5.86", "Reload", "3 9.014 9.", "pOddy", "2zm2-4h-2v", "3 0 2-.897", "-2-2-2zm-1", " 0 0 0-.57", "48 3.832a1", "3 1.331-3 ", "touchmove", "v5h-5v2h7z", "msfullscre", "M4 6h16v2H", " 2v16c0 1.", " 7.11 0 0 ", "3a.986.986", "1zm-1 16H5", "3H6c-1.103", "19-1.355 9", "6a1 1 0 0 ", "M20 2H10c-", "329-3-3-3-", "5.46 1.701", "9 21V3a1 1", "8a2 2 0 0 ", "-2h2v2zm0-", "M16.75 2h-", "eenchange", "3-5-5-5S7 ", "3.218-1.35", ".183-1.814", "3 0-2 .897", " 0 0 2 2h1", "Switch", "assistive", "3 9a1.003 ", "children", "014 0 0 0 ", "M6 12h6v2H", ".002 16H6.", "H9V7zm0 4h", "7c0-1.654 ", "a1 1 0 0 0", ".044 1.435", "017.082-.0", "m4.431 12.", "0v10z", "zM4 20V10h", "0 0 0 .782", "75.931l2 1", "03 0 2-.89", "lCjUu", ".832L6.697", "AhnQY", "V6.002c.48", "1 2.502 1.", "data", "M12 16c1.6", "isDown", "9.527 4.54", " 2v10c0 1.", "Volume", "recents", " 5l3.975 3", "1 0 0 0-1 ", "08 3.677L7", " 2 2zm0-8h", "paste", "1.1-1.332A", "assistive_", "EbcmI", "4h-2V7h2v2", "3 3v1h2zm1", ".053 0 0 0", ".897-2 2v4", "4v2h6zM8 2", "UzgMo", "wzKQB", "M20 3H4a1 ", "M20 11V5c0", " 4 .002 8H", "255, 255, ", "click", "0V4a1 1 0 ", "-3.229 2-5", "9.09 0 0 0", "ault", "Screen", "13H3a9.02 ", "47 3.999 7", "h2.697l5.7", "2zM9 7h2v2", "7.005 0 0 ", "002 0 0 1-", " 1.814-.18", "v2z", "0 1.767.51", "s-.775-3.9", "path", "touch", "touchstart", "59 15.016 ", "8v12.264l-", "clipboard", "H6z", "reload", "8 1.039 7.", "2.503-1.05", "mozfullscr", "unlock", "c1.103 0 2", "0 6.961 6.", "10010976nwWdWe", " 15H4V9z", "getBoundin", " 0-2 .897-", "M16 7v10c1", "3s3 1.346 ", "1 1.892 1.", "-.769zm-8.", "H5v-5H3v7h", "zMILC", "1.103-.897", "v2h8V5h3v6", "zIndex", " 2v5H4V5h3", "style", "0 2-2V7a2 ", "2 0 0 0-2 ", "4v-4c0-1.1", "removeEven", "0 0 0 14 2", "28A8.95 8.", "0 0 24 24", "6v-8h12z", "Copy", "128eJyKjD", "passive", "width", "1.331-1.09", "fill", "7.032 15 7", "sync", "screenchan", "061-.016.0", "0-2 .897-2", " 0 0 0-.38", "3 3z", " 2-2v-7c0-", "data-id", "webkitfull", "7h7l.001 7", "0h2v-6H4v2", "YmdpX", "showMenu", " 0 0 1-.85", "gClientRec", "back", "93-.019a1.", "15%", ".897-2-2-2", "88 7.2 7.2", "fullscreen", ".257 5.127", "H5v-2zm12 ", "6l3.612-4.", "0a.999.999", " 3.999 4.0", "right", "pageX", "1.103 0-2 ", "7 2-2v-8c0", "31 3-3s-1.", ".116c.026-", "addEventLi", "yffNy", "10c-1.103 ", "2v2H9v-2zM", "0 0 1-3.53", ".w3.org/20", " 0 0 0-1.5", "clientX", "CFSDo", "rMzmy", " 13a9.09 9", "1.89-1.89A", "clientY", "left", " 8.95 8.95", "2 2h7c0 1.", "HideID", "div", "17-.056-.0", "WWHJX", "7 2-2v-4h4", ".14a6.961 ", "2zm-8 2h2v", "8.94 0 0 0", "5 8.886 8.", "11.75", "7 16 3v2c2", "IXPrg", "CZQHL", ".103.897 2", "M16 21c3.5", ".028 9.028", "4.445-2.96", "12%", "Back", ".225-1.1 2", "6zm0 4h6v2", " 0 0 0 1.0", "board", "-1.052-3.3", "34 9.096 9", "2 2h12c1.1", "device_id", "current", "LYBrz", "228 0 0 0 ", "http://www", "0 1-1V4a1 ", "4c0-1.103-", "getAttribu", "-2 2v6c0 1", "zXCVX", "M5 5h5V3H3", "cursor", "target", "-1.103-.89", "38-.18V2L8", "-.897 2-2V", "2 0 0 0-2-", "028 7.028 ", "2v10a2 2 0", "822 13 9A1", "mousemove", "19 9.053 9", "menu_", "h-5c-1.103", "9.02 0 0 0", "2.725 7.11", "S18.387 17", "lkGAT", "7zm11-5h-2", "6.996 6.99", "1 19 13a7.", "2324796NeuXQO", "closest", "h-2v6h6z", ".024l-14-1", ".09 0 0 0-", "rgba(255, ", "V5h14v14z", "h4zm12-6h-", "886 0 0 0 ", "95 0 0 0 1", "0 1-2.822 ", "circle"];
  return us = function() {
    return e;
  }, us();
}
function pi(e, r) {
  const t = us();
  return pi = function(n, o) {
    return n = n - 123, t[n];
  }, pi(e, r);
}
const WR = Wr((e, r) => {
  const t = pi, { displayId: n, isMobile: o, onSenData: i, status: a, canvasRef: s, isShowDeviceId: c, maxWidth: l } = e, u = {};
  u.x = 0, u.y = 0;
  const f = Pe(u), h = {};
  h.x = 0, h.y = 0;
  const m = Pe(h), [d, g] = Mt(null), [p, y] = Mt(null), [b, S] = Mt(0), C = Pe(null), v = Pe(null), _ = Pe(null), w = {};
  w[t(289)] = t(353), w[t(440)] = 0.5, w[t(186)] = 999;
  const [A, M] = Mt(w), k = {};
  k[t(186)] = 1e3;
  const [V, U] = Mt(k), L = Pe(null), z = Pe(null), [H, P] = Mt(null), I = (J) => {
    const D = t;
    if (J[D(357) + D(148)](), a[D(403)][D(216)] == !0) return;
    const Xe = $r[J[D(469)]], De = s[D(279)], tt = _[D(279)], Ae = De[D(176) + D(218) + "t"](), rt = tt[D(176) + D(218) + "t"](), Te = 5;
    let Ue, dt;
    const Qt = Ae[D(200)] - rt[D(200)], dr = Ae[D(379)] - rt[D(379)];
    if (J[D(469)][D(424)](D(161))) {
      const { touches: je, changedTouches: xt } = J, kt = je[0] ?? xt[0];
      Ue = kt[D(231)], dt = kt[D(377)];
    } else J[D(469)][D(424)](D(426)) && (D(245) !== D(245) ? _0x180be1[D(444)] = D(373) + "py" : (Ue = J[D(243)], dt = J[D(248)]));
    if (Xe == $r[D(408)])
      if (D(132) !== D(305)) {
        a[D(396)]({ ...a[D(403)], isDown: !0 }), f[D(279)].x = Ue - rt[D(249)], f[D(279)].y = dt - rt[D(350)];
        const je = {};
        je[D(440)] = 1, je[D(289)] = D(390);
        const xt = { ...A, ...je };
        M(xt), S(performance[D(462)]());
      } else {
        const je = _0x4a1bb5[D(462)]() - _0x103f0e;
        if (_0x554c9b == _0x3b23d0[D(408)] || je < 200) {
          const He = {};
          He[D(216)] = !0, He[D(547)] = !1;
          const R = { ..._0x51511a[D(403)], ...He };
          _0x5f2984[D(396)](R);
        } else {
          const He = { ..._0x419d80[D(403)] };
          He[D(547)] = !1, _0x5625a7[D(396)](He);
        }
        const xt = {};
        xt[D(440)] = 0.5, xt[D(289)] = D(353);
        const kt = { ..._0x20ec14, ...xt };
        _0x2dd91f(kt);
      }
    else if (Xe == $r[D(298)]) {
      if (a[D(403)][D(547)] == !1) return;
      let je = Ue - f[D(279)].x - Ae[D(249)], xt = dt - f[D(279)].y - Ae[D(350)];
      const kt = Qt - Te;
      if (!((je < Te || je > kt || xt < Te || xt > dr - Te) && !z[D(279)])) {
        if (D(263) !== D(263)) return;
        tt[D(188)][D(249)] = je + "px", tt[D(188)][D(350)] = xt + "px", m[D(279)].x = je, m[D(279)].y = xt;
      }
    } else if (Xe == $r[D(358)]) {
      const je = performance[D(462)]() - b;
      if (d == $r[D(408)] || je < 200) {
        const He = {};
        He[D(216)] = !0, He[D(547)] = !1, a[D(396)]({ ...a[D(403)], ...He });
      } else a[D(396)]({ ...a[D(403)], isDown: !1 });
      const xt = {};
      xt[D(440)] = 0.5, xt[D(289)] = D(353);
      const kt = { ...A, ...xt };
      M(kt);
    }
    g(Xe), tt[D(454)]();
  }, N = async (J) => {
    const D = t;
    if (D(183) !== D(183)) _0x31a375[D(188)][D(249)] = _0x417a9b + "px", _0x20dff9[D(188)][D(350)] = _0x4a396a + "px", _0x34a7fa[D(279)].x = _0x230f0a, _0x9838e2[D(279)].y = _0x35b977;
    else {
      J[D(357) + D(148)]();
      const Xe = J[D(290)][D(310)](D(253))[D(285) + "te"](D(211));
      if (Xe === D(224))
        dh() ? D(264) !== D(264) ? _0x4a97f4() : HR() : D(237) !== D(237) ? _0x4e107e() ? _0x419d13() : _0x325150(_0x13e49f) : VR(n);
      else {
        const De = {};
        De[D(405)] = D(467) + D(483), De[D(336)] = Xe, De[D(545)] = "";
        const tt = De;
        Xe === D(129) && (tt[D(545)] = await navigator[D(165)][D(430)]()), Xe === D(327) && (tt[D(444)] = D(373) + "py"), i(FR, tt);
      }
      a[D(396)]({ ...a[D(403)], showMenu: !1 }), v[D(279)][D(454)]();
    }
  }, B = (J) => {
    const D = t;
    if (D(410) === D(410)) {
      const Xe = dh();
      i(jR, Xe);
    } else _0x3fc04d[D(236) + D(487)](D(162), _0x33a3da, _0x3036ce), _0x499641[D(236) + D(487)](D(498), _0xd67ab9, _0x2fe9f1), _0x5e7ba3[D(236) + D(487)](D(363), _0x44f505);
  };
  ut(() => {
    requestAnimationFrame(() => {
      const J = pi, D = { ...V };
      D[J(440)] = a[J(403)][J(216)] ? 1 : 0, U(D);
    });
  }, [a]), ut(() => {
    const J = t, D = s[J(279)], Xe = [J(224) + J(434), J(212) + J(205) + "ge", J(170) + J(516), J(500) + J(333)];
    return D && Xe[J(385)]((De) => {
      const tt = J;
      tt(416) !== tt(447) ? D[tt(236) + tt(487)](De, B) : (_0x357a29 && (_0x47c292[tt(279)] = _0x220a06), _0x1e72f2());
    }), () => {
      const De = J;
      De(491) === De(542) ? _0x5daead[De(192) + De(367)](De(144), _0x2ae278) : D && D[De(192) + De(367)](De(144), B);
    };
  }, []), ut(() => {
    const J = t, D = _[J(279)], Xe = v[J(279)];
    if (Xe && (J(215) === J(215) ? Xe[J(236) + J(487)](J(144), N) : (_0x2eff5f = _0x154666[J(243)], _0x36a4a7 = _0xb37be8[J(248)])), D)
      if (J(326) !== J(138)) {
        const De = {};
        De[J(199)] = !1;
        const tt = De;
        return o ? J(439) !== J(445) ? (D[J(236) + J(487)](J(162), I, tt), D[J(236) + J(487)](J(498), I, tt), D[J(236) + J(487)](J(363), I)) : _0x29559e[J(192) + J(367)](_0x816161, _0x38f05c) : J(398) !== J(139) ? [J(298), J(408), J(358)][J(385)]((Ae) => {
          const rt = J;
          rt(352) === rt(364) ? _0x590778[rt(236) + rt(487)](rt(144), _0x2609db) : D[rt(236) + rt(487)](Ae, I);
        }) : _0x4efcdd[J(236) + J(487)](_0x270ece, _0x184f43), () => {
          const Ae = J;
          Ae(255) !== Ae(255) ? _0x5cbe84(_0x48f280) : (Xe && Xe[Ae(192) + Ae(367)](Ae(144), N), D && (Ae(540) !== Ae(540) ? _0x574a7e[Ae(385)]((rt) => {
            const Te = Ae;
            _0x1d0f65[Te(236) + Te(487)](rt, _0x4ddb6f);
          }) : o ? [Ae(162), Ae(498), Ae(363)][Ae(385)]((rt) => {
            const Te = Ae;
            Te(287) === Te(287) ? D[Te(192) + Te(367)](rt, I) : [Te(298), Te(408), Te(358)][Te(385)]((Ue) => {
              const dt = Te;
              _0x1b8050[dt(236) + dt(487)](Ue, _0x214cdb);
            });
          }) : [Ae(298), Ae(408), Ae(358)][Ae(385)]((rt) => {
            const Te = Ae;
            D[Te(192) + Te(367)](rt, I);
          })));
        };
      } else {
        const De = {};
        De[J(216)] = !0, De[J(547)] = !1;
        const tt = { ..._0x1f3349[J(403)], ...De };
        _0x5c0341[J(396)](tt);
      }
  }, [o, I]);
  const W = () => {
    const J = t;
    if (J(280) !== J(280)) {
      if (_0x388b28[J(403)][J(547)] == !1) return;
      let D = _0x582e2f - _0x275923[J(279)].x - _0x27063b[J(249)], Xe = _0x5bccaf - _0x33b187[J(279)].y - _0x5acffb[J(350)];
      const De = _0x4077d3 - _0x78fe5;
      (D < _0x2d291c || D > De || Xe < _0x10b135 || Xe > _0x1953ea - _0x4d5707) && !_0x526eb1[J(279)] || (_0x425ff4[J(188)][J(249)] = D + "px", _0x25c622[J(188)][J(350)] = Xe + "px", _0x4318bf[J(279)].x = D, _0x4e1159[J(279)].y = Xe);
    } else {
      const D = _[J(279)];
      D[J(188)][J(200)] = L[J(279)] != J(362) ? J(269) : "", D[J(188)][J(379)] = L[J(279)] == J(362) ? J(269) : "", D[J(188)][J(230)] = J(221), D[J(188)][J(350)] = "5%", D[J(188)][J(249)] = "";
    }
  };
  mi(r, () => ({ fixTouch: (J) => {
    const D = t;
    J && (D(244) !== D(244) ? _0x2b1bba[D(192) + D(367)](_0x5f3b3a, _0x415506) : L[D(279)] = J), W();
  }, setFullscreen: (J) => {
    const D = t;
    D(393) !== D(458) ? P(J) : _0x38d06c[D(192) + D(367)](D(144), _0x5c65d4);
  } }));
  const Y = {};
  Y[t(202)] = t(314) + t(143) + "1)";
  const X = {};
  X.d = H ? t(431) + t(137) + t(214) + t(316) + t(414) + t(470) + t(311) : t(288) + t(432) + t(182) + t(306) + t(499) + t(337) + t(383);
  const Z = {};
  Z[t(525)] = t(149);
  const G = {};
  G[t(202)] = t(314) + t(143) + "1)";
  const te = {};
  te.d = t(509) + t(232) + t(136) + t(375) + t(207) + t(549) + t(423) + t(374) + t(539) + t(256) + t(172) + t(293) + t(284) + t(222) + t(536) + t(376) + t(446) + t(191) + t(331) + t(366) + t(535);
  const ie = {};
  ie.d = t(527) + t(272) + t(166);
  const de = {};
  de[t(525)] = t(197);
  const pe = {};
  pe[t(202)] = t(314) + t(143) + "1)";
  const xe = {};
  xe.d = t(141) + t(291) + t(415) + t(531) + t(486) + t(354) + t(375) + t(207) + t(404) + t(423) + t(251) + t(423) + t(441) + t(493) + t(210) + t(184) + t(450) + t(187) + t(185) + t(301) + t(177) + t(425) + t(213) + t(407);
  const we = {};
  we[t(525)] = t(417);
  const ae = {};
  ae[t(202)] = t(314) + t(143) + "1)";
  const se = {};
  se.d = t(433) + t(421) + t(517) + t(409) + t(506) + t(177) + t(428) + t(423) + t(277) + t(539) + t(233) + t(291) + t(437) + t(530) + t(411) + t(179) + t(134) + t(142) + t(196);
  const _e = {};
  _e[t(525)] = t(392);
  const re = {};
  re[t(202)] = t(314) + t(143) + "1)";
  const me = {};
  me.d = t(546) + t(342) + t(234) + t(510) + t(497) + t(325) + t(209);
  const ce = {};
  ce.d = t(371) + t(438) + t(259) + t(474) + t(299) + t(135) + t(321) + t(250) + t(382) + t(507) + t(267) + t(365) + t(292) + t(125) + t(543) + t(351) + t(532) + t(257) + t(427) + t(544) + t(329) + t(154) + t(180) + t(348) + t(453) + t(308) + t(436) + t(476) + t(303) + t(503) + t(480) + t(223) + t(217) + t(168) + t(295) + t(240) + t(384) + t(475) + t(319) + t(173) + t(465) + t(169) + t(459) + t(155) + t(247) + t(307) + t(391) + t(150) + t(302) + t(466) + t(276) + t(335) + t(460) + t(194) + t(318) + t(332) + t(147) + t(156) + t(490) + t(526) + t(518) + t(260) + t(317) + t(201) + t(339) + t(281) + t(130) + t(369) + t(322) + t(246) + t(313) + t(519) + "z";
  const ve = {};
  ve[t(525)] = t(489);
  const Se = {};
  Se[t(202)] = t(314) + t(143) + "1)";
  const ye = {};
  ye.d = t(388) + t(190) + t(296) + t(521) + t(513) + t(189) + t(294) + t(258) + t(429) + t(370) + t(153) + t(529) + t(239) + t(328) + t(455) + t(226) + t(485) + t(492) + t(514) + t(133) + "z";
  const Ve = {};
  Ve[t(525)] = t(360);
  const $e = {};
  $e[t(202)] = t(314) + t(143) + "1)";
  const $ = {};
  $.d = t(515) + t(238) + t(207) + t(502) + t(423) + t(374) + t(539) + t(395) + t(184) + t(494) + t(448) + t(528) + t(413);
  const O = {};
  O.cx = t(261), O.cy = "18", O.r = "1";
  const E = {};
  E[t(525)] = t(c ? 252 : 394);
  const F = {};
  F[t(202)] = t(314) + t(143) + "1)";
  const T = {};
  T.d = t(266) + t(468) + t(347) + t(356) + t(548) + t(262) + t(387) + t(229) + t(151) + t(304) + t(420) + t(157);
  const ge = {};
  ge.d = t(178) + t(271) + t(146) + t(159) + t(378) + t(152) + t(496) + t(402) + t(273) + t(330) + t(193) + t(145) + t(471) + t(541) + t(482) + t(520) + t(286) + t(265) + t(128) + t(381) + t(206) + t(220) + t(457) + t(464) + t(235) + t(452) + t(533) + t(488) + t(164) + t(268) + t(456) + t(254) + t(449) + t(504) + t(208) + t(484) + t(163) + t(203) + t(175);
  const Be = {};
  Be[t(525)] = t(123);
  const We = {};
  We[t(202)] = t(314) + t(143) + "1)";
  const Le = {};
  Le.d = t(399) + t(341) + t(463) + t(312) + t(228) + t(242) + t(538) + t(419) + t(158) + t(227) + t(372) + t(511) + t(275) + t(345) + t(478) + t(443) + t(537) + t(181) + t(461) + t(495) + t(479) + t(127) + t(225) + t(368) + t(340) + t(389);
  const Ze = {};
  Ze[t(525)] = t(p ? 397 : 412);
  const Fe = {};
  Fe[t(202)] = t(314) + t(143) + "1)";
  const ze = {};
  ze.d = t(501) + t(346) + t(380) + t(400);
  const le = {};
  le[t(525)] = t(522);
  const Oe = {};
  Oe[t(202)] = t(314) + t(143) + "1)";
  const he = {};
  he.d = t(140) + t(126) + t(473) + t(323) + t(508) + t(283) + t(442) + t(505) + t(315);
  const Ee = {};
  Ee[t(525)] = t(406);
  const ft = {};
  ft[t(202)] = t(314) + t(143) + "1)";
  const Jt = {};
  Jt.d = t(534) + t(297) + t(451) + t(512) + t(242) + t(338) + t(524) + t(472) + t(359);
  const Dt = {};
  return Dt[t(525)] = t(270), ue.jsxs(ue.Fragment, { children: [a[t(403)][t(216)] ? ue.jsxs(LR, { id: t(131) + t(300) + n, style: V, ref: v, children: [ue.jsxs(mr, { "data-id": t(224), children: [ue.jsx(t(355), { xmlns: t(282) + t(241) + t(401), width: "28", height: "28", viewBox: t(195), style: Y, children: ue.jsx(t(160), X) }), ue.jsx(vr, Z)] }), ue.jsxs(mr, { "data-id": t(327), children: [ue.jsxs(t(355), { xmlns: t(282) + t(241) + t(401), width: "28", height: "28", viewBox: t(195), style: G, children: [ue.jsx(t(160), te), ue.jsx(t(160), ie)] }), ue.jsx(vr, de)] }), ue.jsxs(mr, { "data-id": t(129), children: [ue.jsx(t(355), { xmlns: t(282) + t(241) + t(401), width: "28", height: "28", viewBox: t(195), style: pe, children: ue.jsx(t(160), xe) }), ue.jsx(vr, we)] }), ue.jsxs(mr, { "data-id": t(171), children: [ue.jsx(t(355), { xmlns: t(282) + t(241) + t(401), width: "25", height: "25", viewBox: t(195), style: ae, children: ue.jsx(t(160), se) }), ue.jsx(vr, _e)] }), ue.jsxs(mr, { "data-id": t(167), children: [ue.jsxs(t(355), { xmlns: t(282) + t(241) + t(401), width: "25", height: "25", viewBox: t(195), style: re, children: [ue.jsx(t(160), me), ue.jsx(t(160), ce)] }), ue.jsx(vr, ve)] }), ue.jsxs(mr, { "data-id": t(274), children: [ue.jsx(t(355), { xmlns: t(282) + t(241) + t(401), width: "25", height: "25", viewBox: t(195), style: Se, children: ue.jsx(t(160), ye) }), ue.jsx(vr, Ve)] }), ue.jsxs(mr, { "data-id": t(278), children: [ue.jsxs(t(355), { xmlns: t(282) + t(241) + t(401), width: "28", height: "28", viewBox: t(195), style: $e, children: [ue.jsx(t(160), $), ue.jsx(t(320), O)] }), ue.jsx(vr, E)] }), ue.jsxs(mr, { "data-id": t(334), children: [ue.jsxs(t(355), { xmlns: t(282) + t(241) + t(401), width: "25", height: "25", viewBox: t(195), style: F, children: [ue.jsx(t(160), T), ue.jsx(t(160), ge)] }), ue.jsx(vr, Be)] }), ue.jsxs(mr, { "data-id": t(204), children: [ue.jsx(t(355), { xmlns: t(282) + t(241) + t(401), width: "28", height: "28", viewBox: t(195), style: We, children: ue.jsx(t(160), Le) }), ue.jsx(vr, Ze)] }), ue.jsxs(mr, { "data-id": t(124), children: [ue.jsx(t(355), { xmlns: t(282) + t(241) + t(401), width: "28", height: "28", viewBox: t(195), style: Fe, children: ue.jsx(t(160), ze) }), ue.jsx(vr, le)] }), ue.jsxs(mr, { "data-id": t(477), children: [ue.jsx(t(355), { xmlns: t(282) + t(241) + t(401), width: "28", height: "28", viewBox: t(195), style: Oe, children: ue.jsx(t(160), he) }), ue.jsx(vr, Ee)] }), ue.jsxs(mr, { "data-id": t(219), children: [ue.jsx(t(355), { xmlns: t(282) + t(241) + t(401), width: "28", height: "28", viewBox: t(195), style: ft, children: ue.jsx(t(160), Jt) }), ue.jsx(vr, Dt)] })] }) : null, ue.jsx(BR, { id: t(131) + t(361) + "s_" + n, className: t(523), ref: C, style: A, children: ue.jsx(zR, { src: kR, className: t(523), id: t(131) + t(324) + n, alt: t(386), ref: _, draggable: !1 }) })] });
}), Ct = jn;
(function(e, r) {
  const t = jn, n = e();
  for (; ; )
    try {
      if (-parseInt(t(234)) / 1 + parseInt(t(300)) / 2 * (-parseInt(t(268)) / 3) + -parseInt(t(208)) / 4 + -parseInt(t(312)) / 5 * (-parseInt(t(225)) / 6) + -parseInt(t(206)) / 7 + -parseInt(t(241)) / 8 * (parseInt(t(239)) / 9) + parseInt(t(251)) / 10 * (parseInt(t(313)) / 11) === r) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(fs, 781326);
function jn(e, r) {
  const t = fs();
  return jn = function(n, o) {
    return n = n - 203, t[n];
  }, jn(e, r);
}
function fs() {
  const e = ["ffeaY", "from", "scaleSize", "frameSize", "setVideoMe", "pported", "maxWidth", "resize", "landscape", "lock", "autoResize", "isPlay", "init", "Decoder er", "concat", "height", "FRJXB", "slice", "GEVRq", "2BaUYEe", "decodeVide", "length", "fTDsR", "save", "portrait", "state", "now", "ror:", "decode", "error", "rootSize", "10JdcjmI", "11XGHXvC", "restore", "startBytes", "8Arrays", "oJOrt", "9319947CZHKyH", "close", "2944496texwxb", "current", "type", "isFullsCre", "ctx", "innerHeigh", "clearRect", "scale", "codedHeigh", "EJVvu", "key", "isMobile", "setIsConne", "setTransfo", "canvasRef", "configure", "XTlNo", "3692526LjDykn", "every", "tware", "celeration", "chunks", "innerWidth", "iframe", "endBytes", "wqMHj", "1291978bufdap", "rotate", "eRMPo", "khXqz", "baseTimest", "583137UFwcoi", "getBigUint", "168ICaivi", "min", "hardwareAc", "fBRfK", "concatUint", "timestamp", "qwKqy", "amp", "decoder", "data", "56391640lztWMy", "isPause", "width", "8Chunks", "drawImage", "codedWidth", "setPause", "videoMeta", "rLatency", "set", "optimizeFo", "delta", "prefer-sof", "isConfigSu", "style", "codec", "NwydU", "4105512CbFsjD", "zAghe", "orientatio", "buffer", "gDcHu", "NoSqF", "tion", "push", "supported", "translate", "TplwL", "setOrienta", "getContext"];
  return fs = function() {
    return e;
  }, fs();
}
const hh = (e, r) => {
  const t = jn;
  return e[t(302)] < r[t(302)] ? !1 : r[t(226)]((n, o) => n === e[o]);
}, qR = (e) => {
  const r = jn, t = new Uint8Array(e);
  for (let n = 0; n <= t[r(302)] - 5; n++) {
    let o = 0;
    if (t[n] === 0 && t[n + 1] === 0 && t[n + 2] === 1 ? o = 3 : t[n] === 0 && t[n + 1] === 0 && t[n + 2] === 0 && t[n + 3] === 1 && (o = 4), o > 0)
      if (r(299) !== r(247)) {
        if ((t[n + o] & 31) === 5) return !0;
      } else {
        const i = _0x44ab20[r(298)](5), a = new _0x1d5988(i[r(271)]);
        _0x4387cf = _0x36693(a[r(240) + "64"](0, !1)), _0x4125f4 = (void 0)[r(245) + r(254)](), (void 0)[r(229)] = [];
      }
  }
  return !1;
};
var gh, mh, vh, bh, yh, wh, Sh, _h, Ch, Eh;
class UR {
  constructor(r, t, n, o, i, a) {
    it(this, Eh, async () => {
      const r = Ct;
      this[r(212)] = this[r(222)][r(209)][r(280)]("2d");
      const t = new VideoDecoder({ output: async (a) => {
        var u;
        const s = r, c = {};
        c[s(256)] = a[s(256)], c[s(216) + "t"] = a[s(216) + "t"], this[s(284)] = c, this[s(212)][s(221) + "rm"](1, 0, 0, 1, 0, 0), this[s(212)][s(214)](0, 0, this[s(296)], this[s(296)]);
        const l = this[s(222)][s(209)];
        if (this[s(270) + "n"] == s(289))
          if (s(272) !== s(272)) {
            const f = {};
            return f[s(253)] = _0xf8acd5, f[s(296)] = _0x592cc9 * _0x3db11e, f;
          } else (l[s(253)] != this[s(296)] || l[s(296)] != this[s(253)]) && (s(233) === s(236) ? (u = this[s(220) + "ct"]) == null || u.call(this, !0) : (l[s(253)] = this[s(296)], l[s(296)] = this[s(253)])), this[s(212)][s(304)](), this[s(212)][s(277)](0, this[s(253)]), this[s(212)][s(235)](Math.PI / 2), this[s(212)][s(215)](-1, -1), this[s(212)][s(255)](a, 0, 0, this[s(253)], this[s(296)]), this[s(212)][s(314)]();
        else (l[s(253)] != this[s(253)] || l[s(296)] != this[s(296)]) && (s(244) === s(281) ? ((_0x26a47b[s(253)] != this[s(296)] || _0x474eae[s(296)] != this[s(253)]) && (_0xd232c3[s(253)] = this[s(296)], _0x397b27[s(296)] = this[s(253)]), this[s(212)][s(304)](), this[s(212)][s(277)](0, this[s(253)]), this[s(212)][s(235)](_0x4e5a77.PI / 2), this[s(212)][s(215)](-1, -1), this[s(212)][s(255)](_0x48efa9, 0, 0, this[s(253)], this[s(296)]), this[s(212)][s(314)]()) : (l[s(253)] = this[s(253)], l[s(296)] = this[s(296)])), this[s(212)][s(255)](a, 0, 0, this[s(253)], this[s(296)]);
        a[s(207)]();
      }, error: (a) => console[r(310)](r(294) + r(308), a) }), n = {};
      n[r(266)] = this[r(266)], n[r(243) + r(228)] = this[r(243) + r(228)], n[r(261) + r(259)] = !0;
      const o = n;
      return !(await VideoDecoder[r(264) + r(286)](o))[r(276)] && (r(237) !== r(237) ? (this[r(270) + "n"] = _0x27c0da, this[r(219)] && _0x54a950[r(270) + "n"][r(290)](_0x5809c9)) : o[r(243) + r(228)] = r(263) + r(227)), t[r(223)](o), this[r(249)] = t, t;
    });
    it(this, Ch, (r, t, n, o) => {
      const i = Ct, a = n / r, s = o / t;
      if (s < 0.4 && a > s)
        if (i(224) !== i(217)) {
          const u = {};
          return u[i(253)] = n, u[i(296)] = t * a, u;
        } else {
          let u = 0;
          if (_0x21d31f[_0x509f03] === 0 && _0x2a0472[_0xfd9947 + 1] === 0 && _0x338ea0[_0x117f78 + 2] === 1 ? u = 3 : _0x2489aa[_0x168dfc] === 0 && _0x496059[_0x2bc057 + 1] === 0 && _0x5660e6[_0x5406eb + 2] === 0 && _0x39ef48[_0x6df59d + 3] === 1 && (u = 4), u > 0 && (_0x375a53[_0xe21390 + u] & 31) === 5)
            return !0;
        }
      const c = Math[i(242)](a, s), l = {};
      return l[i(253)] = r * c, l[i(296)] = t * c, l;
    });
    it(this, _h, () => {
      var a;
      const r = Ct;
      if (!this[r(284)][r(256)]) {
        if (r(269) === r(269)) return;
        {
          const s = _0x1f4aef instanceof _0x559b99 ? _0x4cd931 : new _0x788717(_0x161c5b);
          this[r(258)] = s;
        }
      }
      const t = this[r(211) + "en"] ? this[r(219)] ? window[r(230)] - 20 : this[r(287)] : this[r(287)], n = this[r(270) + "n"] == r(289) ? window[r(230)] : window[r(213) + "t"] - (this[r(219)] ? 12 : 50), o = this[r(283)](this[r(284)][r(256)], this[r(284)][r(216) + "t"], t, n);
      this[r(253)] = o[r(253)], this[r(296)] = o[r(296)], !this[r(311)] && ((a = this[r(220) + "ct"]) == null || a.call(this, !0));
      const i = {};
      i[r(253)] = o[r(253)], i[r(296)] = o[r(296)], this[r(311)] = i;
    });
    it(this, Sh, (r) => {
      const t = Ct, n = this[t(222)][t(209)];
      if (!n) return;
      const o = this[t(253)], i = this[t(296)], a = i / o;
      this[t(253)] = r, this[t(296)] = r * a, n[t(265)][t(253)] = (this[t(270) + "n"] == t(305) ? this[t(253)] : this[t(296)]) + "px", n[t(265)][t(296)] = (this[t(270) + "n"] == t(305) ? this[t(296)] : this[t(253)]) + "px";
    });
    it(this, wh, (r) => {
      const t = Ct;
      this[t(270) + "n"] = r, this[t(219)] && (t(297) === t(297) ? screen[t(270) + "n"][t(290)](r) : _0x50dd91[t(270) + "n"][t(290)](_0xe54268));
    });
    it(this, yh, (r) => {
      const t = Ct;
      this[t(252)] = r;
    });
    it(this, bh, (r) => {
      const t = Ct, n = r instanceof Uint8Array ? r : new Uint8Array(r);
      this[t(258)] = n;
    });
    it(this, mh, (r, t) => {
      const n = Ct, o = Array[n(282)](r)[n(295)](Array[n(282)](t));
      return new Uint8Array(o);
    });
    it(this, gh, async (r) => {
      const t = Ct;
      if (!this[t(249)] || this[t(249)][t(306)] == t(207) || !this[t(258)] || this[t(252)]) return;
      let n = r instanceof Uint8Array ? r : new Uint8Array(r), o = performance[t(307)]() * 1e3;
      if (hh(n, this[t(203)]))
        if (t(267) === t(278)) {
          !this[t(292)] && (_0x18832d = this[t(245) + t(204)](this[t(258)], this[t(231)]), this[t(292)] = !0);
          const a = {};
          a[t(246)] = _0xc847f4, a[t(210)] = _0x3a2bd2 ? t(218) : t(262), a[t(250)] = _0x55c1f9, this[t(249)][t(309)](new _0x10d818(a));
        } else {
          this[t(229)] = [];
          return;
        }
      else if (hh(n, this[t(232)]))
        if (t(205) !== t(205)) _0x441e45 = this[t(245) + t(204)](this[t(258)], this[t(231)]), this[t(292)] = !0;
        else {
          const a = n[t(298)](5), s = new DataView(a[t(271)]);
          o = Number(s[t(240) + "64"](0, !1)), n = this[t(245) + t(254)](), this[t(229)] = [];
        }
      else {
        this[t(229)][t(275)](n);
        return;
      }
      const i = qR(n);
      if (i && (this[t(231)] = n), this[t(231)] && this[t(258)]) {
        !this[t(292)] && (n = this[t(245) + t(204)](this[t(258)], this[t(231)]), this[t(292)] = !0);
        const a = {};
        a[t(246)] = o, a[t(210)] = t(i ? 218 : 262), a[t(250)] = n, this[t(249)][t(309)](new EncodedVideoChunk(a));
      }
    });
    const s = jn;
    this[s(222)] = n, this[s(266)] = o, this[s(219)] = r, this[s(287)] = t, this[s(220) + "ct"] = a, this[s(253)] = null, this[s(296)] = null, this[s(292)] = null, this[s(258)] = null, this[s(231)] = null;
    const c = {};
    c[s(253)] = null, c[s(296)] = null, this[s(284)] = c, this[s(311)] = null, this[s(270) + "n"] = s(305), this[s(211) + "en"] = null, this[s(243) + s(228)] = i, this[s(212)] = null, this[s(249)] = null, this[s(229)] = [], this[s(203)] = new Uint8Array([115, 116, 97, 114, 116]), this[s(232)] = new Uint8Array([101, 110, 100, 33, 33]), this[s(238) + s(248)] = 0, this[s(252)];
  }
  [(Eh = Ct(293), Ch = Ct(283), _h = Ct(291), Sh = Ct(288), wh = Ct(279) + Ct(274), yh = Ct(257), bh = Ct(285) + "ta", vh = Ct(245) + Ct(254), mh = Ct(245) + Ct(204), gh = Ct(301) + "o", vh)]() {
    const r = Ct;
    let t = 0;
    for (const i of this[r(229)]) t += i[r(302)];
    const n = new Uint8Array(t);
    let o = 0;
    for (const i of this[r(229)])
      r(303) !== r(273) ? (n[r(260)](i, o), o += i[r(302)]) : (_0x5e81fd[r(253)] = this[r(253)], _0x262624[r(296)] = this[r(296)]);
    return n;
  }
}
const qt = [];
for (let e = 0; e < 256; ++e)
  qt.push((e + 256).toString(16).slice(1));
function GR(e, r = 0) {
  return (qt[e[r + 0]] + qt[e[r + 1]] + qt[e[r + 2]] + qt[e[r + 3]] + "-" + qt[e[r + 4]] + qt[e[r + 5]] + "-" + qt[e[r + 6]] + qt[e[r + 7]] + "-" + qt[e[r + 8]] + qt[e[r + 9]] + "-" + qt[e[r + 10]] + qt[e[r + 11]] + qt[e[r + 12]] + qt[e[r + 13]] + qt[e[r + 14]] + qt[e[r + 15]]).toLowerCase();
}
let hl;
const KR = new Uint8Array(16);
function XR() {
  if (!hl) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    hl = crypto.getRandomValues.bind(crypto);
  }
  return hl(KR);
}
const YR = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), ph = { randomUUID: YR };
function zm(e, r, t) {
  var o;
  if (ph.randomUUID && !e)
    return ph.randomUUID();
  e = e || {};
  const n = e.random ?? ((o = e.rng) == null ? void 0 : o.call(e)) ?? XR();
  if (n.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, GR(n);
}
var sn = xi;
(function(e, r) {
  for (var t = xi, n = e(); ; )
    try {
      var o = -parseInt(t(322)) / 1 * (parseInt(t(308)) / 2) + parseInt(t(325)) / 3 * (parseInt(t(324)) / 4) + -parseInt(t(310)) / 5 + parseInt(t(321)) / 6 * (-parseInt(t(323)) / 7) + parseInt(t(303)) / 8 * (-parseInt(t(320)) / 9) + -parseInt(t(319)) / 10 + parseInt(t(315)) / 11 * (parseInt(t(317)) / 12);
      if (o === r) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ds, 192948);
function xi(e, r) {
  var t = ds();
  return xi = function(n, o) {
    n = n - 301;
    var i = t[n];
    return i;
  }, xi(e, r);
}
function ds() {
  var e = ["1DabpoZ", "1196993yXsgSb", "328YltPsr", "2367WdIfqO", "action", "findElemen", "data", "16DWHgNf", "text", "clickEleme", "all", "keyName", "459092lWhevS", "index", "1416790TPJctG", "click", "ment", "setText", "setTextEle", "11cJQAhT", "value", "18114708EFYyKX", "dumpJson", "3589680mPPjqD", "1522971qpDidv", "6FytSxF"];
  return ds = function() {
    return e;
  }, ds();
}
class Bm {
  constructor(r, t) {
    var n = xi, o = {};
    o[n(307)] = r, o[n(316)] = t, this[n(302)] = o;
  }
  [sn(318)]() {
    var r = sn;
    return this[r(302)][r(326)] = r(301) + "ts", this[r(302)];
  }
  [sn(306)]() {
    var r = sn;
    return this[r(302)][r(326)] = r(301) + "ts", this[r(302)];
  }
  [sn(311)](r = 0) {
    var t = sn;
    return this[t(302)][t(326)] = t(305) + "nt", this[t(302)][t(309)] = r, this[t(302)];
  }
  [sn(313)](r = 0, t) {
    var n = sn;
    return this[n(302)][n(326)] = n(314) + n(312), this[n(302)][n(309)] = r, this[n(302)][n(304)] = t, this[n(302)];
  }
}
var mt = xs;
(function(e, r) {
  for (var t = xs, n = e(); ; )
    try {
      var o = parseInt(t(370)) / 1 * (parseInt(t(371)) / 2) + -parseInt(t(366)) / 3 + parseInt(t(362)) / 4 + -parseInt(t(374)) / 5 * (parseInt(t(375)) / 6) + -parseInt(t(353)) / 7 * (parseInt(t(355)) / 8) + -parseInt(t(352)) / 9 + -parseInt(t(356)) / 10 * (-parseInt(t(350)) / 11);
      if (o === r) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(hs, 503027);
function hs() {
  var e = ["10fcCoca", "info", "openInfo", "KEYBOARD_C", "xpath", "start", "2827132LQuyWf", "get", "KEYBOARD_T", "text", "209865tRHbUB", "EXT", "code", "stop", "217935fsJMtk", "6uhukmv", "resourceId", "ODE", "7730YPGdYh", "198qXOtWa", "set", "1157464hQiZeS", "className", "4963077dTpVoc", "7SSQcfV", "clear", "2322872Rmwvro"];
  return hs = function() {
    return e;
  }, hs();
}
var Oh, Rh, $h, Th;
Th = mt(361), $h = mt(369), Rh = mt(354), Oh = mt(357);
class pn {
}
it(pn, Th, mt(361)), it(pn, $h, mt(369)), it(pn, Rh, mt(354)), it(pn, Oh, mt(358));
var Ph, Nh;
Nh = mt(365), Ph = mt(368);
class ps {
}
it(ps, Nh, mt(364) + mt(367)), it(ps, Ph, mt(359) + mt(373));
var Ah, Ih, Mh, Fh;
Fh = mt(365), Mh = mt(351), Ih = mt(372), Ah = mt(360);
class pa {
}
it(pa, Fh, mt(365)), it(pa, Mh, mt(351)), it(pa, Ih, mt(372)), it(pa, Ah, mt(360));
function xs(e, r) {
  var t = hs();
  return xs = function(n, o) {
    n = n - 350;
    var i = t[n];
    return i;
  }, xs(e, r);
}
var jh, Dh;
Dh = mt(363), jh = mt(376);
class gs {
}
it(gs, Dh, mt(363)), it(gs, jh, mt(376));
var cn = gi;
function gi(e, r) {
  var t = ms();
  return gi = function(n, o) {
    n = n - 191;
    var i = t[n];
    return i;
  }, gi(e, r);
}
(function(e, r) {
  for (var t = gi, n = e(); ; )
    try {
      var o = parseInt(t(195)) / 1 * (parseInt(t(206)) / 2) + parseInt(t(203)) / 3 + parseInt(t(202)) / 4 * (-parseInt(t(194)) / 5) + -parseInt(t(200)) / 6 + -parseInt(t(197)) / 7 + parseInt(t(201)) / 8 + parseInt(t(204)) / 9;
      if (o === r) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ms, 622225);
function ms() {
  var e = ["1763472xJkEDl", "731319LDohdr", "7813917xPJVGf", "click", "302cFlUwx", "callbackAp", "dumpJson", "strategy", "5RGugoJ", "3423nZiHpi", "all", "3659054KyijtF", "setText", "value", "7074438NdBokj", "9088232AcUuPx"];
  return ms = function() {
    return e;
  }, ms();
}
class xh {
  constructor(r, t, n) {
    var o = gi;
    this[o(193)] = r, this[o(199)] = t, this[o(191) + "i"] = n, this.el = new Bm(this[o(193)], this[o(199)]);
  }
  async [cn(205)]({ index: r = 0, retry_time: t = 0, timeout: n = 5e3 } = {}) {
    var o = cn;
    return await this[o(191) + "i"](this.el[o(205)](r), n, t);
  }
  async [cn(198)]({ text: r, index: t = 0, retry_time: n = 0, timeout: o = 5e3 } = {}) {
    var i = cn;
    return await this[i(191) + "i"](this.el[i(198)](t, r), o, n);
  }
  async [cn(196)]({ retry_time: r = 0, timeout: t = 5e3 } = {}) {
    var n = cn;
    return await this[n(191) + "i"](this.el[n(196)](), t, r);
  }
  async [cn(192)](r) {
    var t = cn;
    return await this[t(191) + "i"](this.el[t(192)](), r);
  }
}
var Tt = vs;
(function(e, r) {
  for (var t = vs, n = e(); ; )
    try {
      var o = -parseInt(t(269)) / 1 * (parseInt(t(272)) / 2) + -parseInt(t(304)) / 3 * (parseInt(t(282)) / 4) + -parseInt(t(286)) / 5 + parseInt(t(263)) / 6 + -parseInt(t(267)) / 7 * (-parseInt(t(294)) / 8) + parseInt(t(283)) / 9 * (-parseInt(t(296)) / 10) + parseInt(t(290)) / 11;
      if (o === r) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(bs, 898380);
class ur {
  static [Tt(262)](r) {
    var t = Tt;
    return r[t(300)] = zm(), r;
  }
  static [Tt(292)](r) {
    var t = Tt, n = {};
    return n[t(297)] = t(306), n[t(295)] = r, this[t(262)](n);
  }
  static [Tt(264)](r, t = "") {
    var n = Tt, o = {};
    return o[n(297)] = n(264), o[n(273)] = r, o[n(295)] = t, this[n(262)](o);
  }
  static [Tt(298) + "en"]() {
    var r = Tt, t = {};
    return t[r(297)] = r(301) + r(270), this[r(262)](t);
  }
  static [Tt(287) + "ts"](r, t) {
    var n = Tt;
    return new Bm(r, t, this[n(262)]);
  }
  static [Tt(266)](r, t) {
    var n = Tt, o = {};
    return o[n(297)] = n(291), o[n(278)] = r, o[n(305) + "e"] = t, this[n(262)](o);
  }
  static [Tt(276)](r, t, n = 0, o = 0) {
    var i = Tt, a = {};
    return a[i(297)] = i(288), a[i(303)] = i(284) + "N", a[i(285)] = r, a[i(275)] = t, a[i(281)] = o, a[i(271)] = n, this[i(262)](a);
  }
  static [Tt(299)](r, t, n) {
    var o = Tt, i = {};
    return i[o(297)] = o(289), i.x = r, i.y = t, i[o(307)] = n, this[o(262)](i);
  }
  static [Tt(265)](r, t, n, o, i) {
    var a = Tt, s = {};
    return s[a(297)] = a(277), s[a(280)] = r, s[a(279)] = t, s[a(302)] = n, s[a(274)] = o, s[a(307)] = i, this[a(262)](s);
  }
  static [Tt(293)](r) {
    var t = Tt, n = {};
    return n[t(297)] = t(268) + "nt", n[t(295)] = r, this[t(262)](n);
  }
}
function vs(e, r) {
  var t = bs();
  return vs = function(n, o) {
    n = n - 262;
    var i = t[n];
    return i;
  }, vs(e, r);
}
function bs() {
  var e = ["findElemen", "keyEvent", "clickEvent", "45487475EzlPdp", "appEvent", "toast", "setText", "8794472JVEkyu", "text", "4701010qGDBpD", "action", "unlockScre", "click", "taskId", "onScreenEv", "end_x", "keyAction", "1011TlQThh", "packageNam", "toastEvent", "duration", "sendData", "3827556qEjwyL", "clipboard", "swipe", "app", "7JxLMhw", "setTextEve", "35WlHefg", "ent", "meta_state", "93266IMWMxt", "keyName", "end_y", "key", "keyboard", "swipeEvent", "command", "start_y", "start_x", "repeat", "15604hfWwKC", "27eZQdTO", "ACTION_DOW", "typeKey", "3084925LFrlhQ"];
  return bs = function() {
    return e;
  }, bs();
}
function fn(e, r) {
  const t = ys();
  return fn = function(n, o) {
    return n = n - 361, t[n];
  }, fn(e, r);
}
(function(e, r) {
  const t = fn, n = e();
  for (; ; )
    try {
      if (-parseInt(t(508)) / 1 + parseInt(t(540)) / 2 + -parseInt(t(534)) / 3 * (-parseInt(t(510)) / 4) + parseInt(t(535)) / 5 * (parseInt(t(515)) / 6) + -parseInt(t(381)) / 7 + parseInt(t(432)) / 8 * (parseInt(t(499)) / 9) + -parseInt(t(412)) / 10 === r) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ys, 277455);
function ys() {
  const e = ["findElemen", "LdNIX", "removeEven", "VNnKM", "response", "type_clien", "parse", "BnLFT", "blue", "middle", "connect_er", "onSyncIFra", "hmgUz", "isMobile", "applicatio", "xWZzP", "canvas_", "control", "fullscreen", "disconnect", "azwNn", "setOrienta", "type", "isChunk", "now", "taskId", "SBQKH", "671139xGGghF", "start", "timeout", "tabIndex", "shortcutEv", "reconnecti", "WXHcJ", "borderRadi", "eenElement", "password", "sync", "decodeVide", "gVAxJ", "VWtez", "draggable", "shortcut", "ms)", "QeMiy", "QSmBE", "url", "get", "jjtUN", "message", "boOcZ", "ZOnJz", "iframe", "marginTop", "MyGLY", "userAgent", "writeText", "wqlkA", "5391630OZGNLv", "leIQD", "test", "center", "rootSize", "zaUXM", "false", "znfUt", "back", "dumpJson", "yKwGg", "Exceeded t", "Element", "mozFullScr", "index", "ent", "force_disc", "vyLuX", "oQHLL", "jisyr", "1768iESlYD", "width", "resize", "secondary", "_time time", "home", "onnect", "children", "size", "dlpui", "webkitFull", "screen_", "large", "VlsKP", "OVxPJ", "div", "addEventLi", "Error", "Color", "set", "get_video_", "passwd", "connect cl", "status", "msFullscre", "emit", "tListener", "danger", "device_id", "unlockScre", "keyboard", "init", "POST", "IExpS", "toDataURL", "iting for ", "SoDBj", "length", "video_meta", "qDtfe", "NyEeh", "setText", "tKezc", "tion", "data", "meta", "setFullscr", "NEzDN", "red", "ose", "btPgE", "dxoWc", "vertical", "Kgnyr", "RLDVj", "swipe", "action", "timeSync", "click", "ySSmZ", "height", "headers", "unlock", "delete", "code", "elMRs", "setPause", "14967ijPNqK", "isDown", "text", "clear", "background", "otal retry", "Success", "Text", "screenElem", "97647EfNDxB", "toast", "12GZlrsv", "onScreenEv", "change", "gLAKP", "map", "18PRSngM", "info", "isFullsCre", "msRTD", "awORt", "screen", "stener", "rJVDi", "small", "een", "value", "screen_mai", "LkvVH", "zUUeC", "vFNAu", "cxgUu", "ror", "SwbbM", "connect", "314565rigpuc", "369070rhpbof", "fixTouch", "reload", "COPY_TEXT", "glFpl", "213224kRIPwD", "n/json", "app", "stop", "enElement", "current", "orientatio", "zkdpI", "miooU", "chKGV", "Content-Ty", "dWbOW", "ixJJj", "vxFti", "setVideoMe", "EZjXU", "EKrli", "autoResize", "showMenu", "join", "method", "clipboard", "outlined", "RvNmR", "RGyOy", "eOvZC", "OmWcs", "recents", "msg", "Timeout wa", "ImDgE", "marginBott", "svXgv", "join_room"];
  return ys = function() {
    return e;
  }, ys();
}
const y4 = Wr((e, r) => {
  const t = fn, { api: n, dataDevice: o, showAssistive: i, showDeviceId: a, autoResize: s, onSyncEvent: c, onSyncButton: l, maxWidth: u, codec: f, hardwareAcceleration: h, style: m, evtIsConnect: d } = e, g = o[t(460)], p = /iPhone|iPad|iPod|Android/i[t(414)](navigator[t(409)]), y = t(371), b = Pe(null), S = Pe(null), C = Pe(null), v = Pe(null), [_, w] = Mt(null), [A, M] = Mt(null), k = {};
  k[t(558)] = !1, k[t(500)] = !1;
  const [V, U] = Mt(k), [L, z] = Mt(null), [H, P] = Mt(null), I = t(370) + g, N = t(443) + g, B = t(526) + "n_" + g, [W, Y] = Mt([]), X = Pe(null), Z = Pe(null), G = Pe(null), te = Pe(null), ie = Pe({}), de = Pe(/* @__PURE__ */ new Map());
  ut(() => {
    M(a), d == null || d(L);
  }, [a, L]);
  const pe = ($) => {
    const O = t;
    O(402) === O(402) ? Y((E) => [...E, $]) : (_0x3ec1a3[O(545)] = !1, _0xb68093[O(545)] && (_0xaabfdf[O(545)][O(373)](), _0x4ff7a4[O(545)] = null), _0x3405c8[O(545)] && (_0x4ef295[O(545)][O(416)] = null), _0xb1a94a(null), _0x251668([]), _0x58e65e(null), _0x2d0e92(_0x5aa128[O(378)]()));
  }, xe = ($) => {
    const O = t;
    if (O(482) !== O(472)) b[O(545)][O(457)](O(403), $), c == null || c($);
    else {
      let E;
      return E = _0x2801b9(() => {
        const F = O;
        _0x4842ae[F(545)] && _0x39c695[F(545)][F(457)](F(403), { action: F(489), ts: _0x43394e[F(378)]() });
      }, 1e4), () => _0x225ce9(E);
    }
  }, we = ($) => new Promise((O) => setTimeout(O, $));
  async function ae($, O = 5e3, E = 0) {
    const F = t;
    if (F(549) === F(549)) {
      !$[F(379)] && ($[F(379)] = zm());
      const T = Date[F(378)]();
      let ge = null;
      for (; ; ) {
        if (Date[F(378)]() - T > E)
          if (F(483) === F(361)) _0x229f88(_0x57ab6e);
          else {
            const We = {};
            throw We[F(455)] = !1, We[F(403)] = F(423) + F(504) + F(436) + " (" + E + F(397), ge || We;
          }
        try {
          return await new Promise((Le, Ze) => {
            const Fe = F;
            if (Fe(485) !== Fe(530)) {
              const ze = setTimeout(() => {
                const le = Fe;
                if (le(366) !== le(553)) {
                  de[le(545)][le(495)]($[le(379)]);
                  const Oe = {};
                  Oe[le(455)] = !1, Oe[le(403)] = le(569) + le(467) + le(578), Ze(Oe);
                } else {
                  const Oe = {};
                  Oe[le(488)] = le(365) + "me", _0x5f5d09[le(457)](le(403), Oe);
                }
              }, O);
              de[Fe(545)][Fe(451)]($[Fe(379)], (le) => {
                const Oe = Fe;
                clearTimeout(ze), delete le[Oe(488)], delete le[Oe(379)], le[Oe(455)] == !0 ? (le[Oe(403)] = Oe(505), Le(le)) : (le[Oe(403)] = Oe(449), Ze(le));
              }), b[Fe(545)][Fe(457)](Fe(403), $);
            } else _0x2313ac[Fe(545)][Fe(416)] = null;
          });
        } catch (We) {
          ge = We, await we(1e3);
        }
      }
    } else {
      const T = _0x4312a7[F(372) + F(424)] || _0x4926a7[F(442) + F(507) + F(427)] || _0x75825c[F(425) + F(389)] || _0x573b4e[F(456) + F(544)];
      _0x871a1[F(545)][F(517) + "en"] = !!T, _0x2f773e[F(545)][F(478) + F(524)](!!T), _0xa81349[F(545)][F(536)]();
    }
  }
  mi(r, () => ({ api: async function($, O) {
    const E = t;
    if (E(552) !== E(491)) return await ae($, O);
    {
      _0x50293c[E(545)] = _0x21af97, _0x4c3883[E(457)](E(403), { action: E(489), ts: _0x3a8641[E(378)]() });
      const F = {};
      F[E(488)] = E(511) + E(427), _0x5cbe71[E(457)](E(403), F);
    }
  }, sync: async function($) {
    const O = t;
    b[O(545)][O(457)](O(403), $);
  }, pause: function($) {
    const O = t;
    if (O(575) === O(575)) {
      if (G[O(545)] = $, X[O(545)][O(498)]($), !$)
        if (O(374) === O(374)) {
          const E = {};
          E[O(488)] = O(365) + "me", ws[O(457)](O(403), E);
        } else _0x46a154[O(576) + O(458)](O(372) + O(512), _0x3ba30a);
    } else {
      const E = { ..._0x595c9d };
      E[O(558)] = !1, _0xf50124(E);
    }
  }, deviceId: function() {
    const $ = t, O = {};
    return O.id = o[$(460)], O;
  }, resolution: function() {
    const $ = t, O = Z[$(545)];
    return O[$(546) + "n"] = O[$(525)], delete O[$(488)], delete O[$(525)], delete O[$(379)], O;
  }, sleep: async function($) {
    const O = t;
    if (O(411) === O(393))
      if (_0x182e5b === _0xfac8cc) {
        const E = { ..._0x7d78b0 };
        E[O(558)] = !1, _0x39110a(E);
      } else _0x2e48ab(_0x2edbb6);
    else return await we($);
  }, screenshot: function() {
    const $ = t;
    if ($(446) !== $(446)) _0x1454d5 == null || _0x1454d5(_0x170b6e[$(460)]);
    else return { base64: C[$(545)][$(466)]() };
  }, toast: async function($, O) {
    const E = t;
    if (E(513) === E(513)) return await ae(ur[E(509)]($), O);
    {
      const F = _0x5302c5[E(545)];
      return F[E(546) + "n"] = F[E(525)], delete F[E(488)], delete F[E(525)], delete F[E(379)], F;
    }
  }, unlockScreen: async function($) {
    const O = t;
    if (O(518) === O(518)) return await ae(ur[O(461) + "en"](), $);
    _0x27249f[O(545)][O(557)]();
  }, pressHome: async function($) {
    const O = t, E = {};
    return E[O(488)] = O(385) + O(427), E[O(396)] = O(437), E[O(476)] = "", await ae(E, $);
  }, pressBack: async function($) {
    const O = t, E = {};
    return E[O(488)] = O(385) + O(427), E[O(396)] = O(420), E[O(476)] = "", await ae(E, $);
  }, pressSwitch: async function($) {
    const O = t, E = {};
    return E[O(488)] = O(385) + O(427), E[O(396)] = O(567), E[O(476)] = "", await ae(E, $);
  }, getClipboard: async function($) {
    const O = t;
    return await ae(ur[O(561)](gs[O(401)]), $);
  }, setClipboard: async function($, O) {
    const E = t;
    return E(486) !== E(497) ? await ae(ur[E(561)](gs[E(451)], $), O) : new _0x11365b(_0x489532, _0x5892ff, _0x4a5cf2);
  }, appStart: async function($, O) {
    const E = t;
    return await ae(ur[E(542)](pn[E(382)], $), O);
  }, appStop: async function($, O) {
    const E = t;
    if (E(479) !== E(479)) _0x501965[E(379)] = _0x17cfa8();
    else return await ae(ur[E(542)](pn[E(543)], $), O);
  }, appClear: async function($, O) {
    const E = t;
    return await ae(ur[E(542)](pn[E(502)], $), O);
  }, appInfo: async function($, O) {
    const E = t;
    if (E(408) !== E(528)) return await ae(ur[E(542)](pn[E(516)], $), O);
    {
      const F = {};
      F[E(568)] = _0x4f1902[E(568)], F[E(376)] = E(459), _0x3ec336(F);
    }
  }, click: async function($, O, E, F) {
    const T = t;
    if (T(563) !== T(532)) return await ae(ur[T(490)]($, O, 1), F);
    {
      const ge = {};
      ge[T(488)] = T(533), ge[T(579) + "t"] = _0x4b52e0, ge[T(460)] = _0x2de10e[T(460)], ge[T(367)] = _0x5f3d8e, ge[T(453)] = _0x1f382f[T(453)], _0x13615d[T(457)](T(573), ge);
    }
  }, swipe: async function($, O, E, F, T = 1, ge) {
    return await ae(ur[t(487)]($, O, E, F, T), ge);
  }, keyCode: async function($, O, E, F) {
    const T = t;
    return await ae(ur[T(462)](ps[T(496)], $, O, E), F);
  }, keyText: async function($, O) {
    const E = t;
    return await ae(ur[E(462)](ps[E(501)], $), O);
  }, setText: async function($, O) {
    return await ae(ur[t(473)]($), O);
  }, findElements: function($, O) {
    return new xh($, O, ae);
  }, dumpJson: async function() {
    const $ = t;
    return $(380) === $(419) ? { base64: _0x42b756[$(545)][$(466)]() } : await new xh($(421), "", ae)[$(421)](2e4);
  } })), ut(() => {
    (async () => {
      const $ = fn;
      if ($(519) === $(551))
        if (_0x2db0c0[$(455)] == !0) {
          _0x4d435a[$(545)] = _0x326aa1, _0x44dd9f[$(457)]($(403), { action: $(489), ts: _0x552f32[$(378)]() });
          const O = {};
          O[$(488)] = $(511) + $(427), _0x51ee34[$(457)]($(403), O);
        } else {
          const O = {};
          O[$(568)] = _0x4d2cbb[$(568)], O[$(376)] = $(459), _0x226c0e(O);
        }
      else try {
        const O = {};
        O[$(550) + "pe"] = $(368) + $(541);
        const E = {};
        E[$(460)] = o[$(460)], E[$(390)] = o[$(453)];
        const F = {};
        F[$(400)] = n, F[$(560)] = $(464), F[$(383)] = 1e4, F[$(493)] = O, F[$(476)] = E;
        const T = F, ge = await TR(T);
        w(ge[$(476)]);
      } catch (O) {
        const E = {};
        E[$(568)] = O, E[$(376)] = $(459), pe(E);
      }
    })();
  }, [H]), ut(() => {
    const $ = t;
    if (b[$(545)] || !_) return;
    const O = {};
    O[$(386) + "on"] = !1;
    const E = _a(_, O);
    return E.on($(533), () => {
      const F = $;
      if (F(413) === F(413)) {
        const T = {};
        T[F(488)] = F(533), T[F(579) + "t"] = y, T[F(460)] = o[F(460)], T[F(367)] = p, T[F(453)] = o[F(453)], E[F(457)](F(573), T);
      } else {
        const T = _0x2f8ea5[F(545)][_0x22b2f1[F(379)]][F(559)]("");
        _0x318e5e[F(476)] = _0x5f53fe[F(580)](T), delete _0x1b9a5e[F(545)][_0x3c11a7[F(379)]];
      }
    }), E.on($(573), (F) => {
      const T = $;
      if (T(441) !== T(565))
        if (F[T(455)] == !0) {
          b[T(545)] = E, E[T(457)](T(403), { action: T(489), ts: Date[T(378)]() });
          const ge = {};
          ge[T(488)] = T(511) + T(427), E[T(457)](T(403), ge);
        } else {
          const ge = {};
          ge[T(568)] = F[T(568)], ge[T(376)] = T(459), pe(ge);
        }
      else _0x767459[T(545)][T(457)](T(403), _0x37e060), _0x3d6537 == null || _0x3d6537(_0xe7687c);
    }), E.on($(428) + $(438), (F) => {
      const T = $;
      te[T(545)] = !0;
    }), E.on($(520), (F) => {
      const T = $;
      T(429) !== T(429) ? _0x35eff6[T(545)] && _0x5d2b74[T(545)][T(457)](T(403), { action: T(489), ts: _0x5a6611[T(378)]() }) : X[T(545)][T(392) + "o"](F);
    }), E.on($(470), (F) => {
      var ge;
      const T = $;
      if (T(556) !== T(556)) _0x3eb317(_0xc3d7d9), _0x451a29[T(545)][T(495)](_0xfe7226[T(379)]);
      else if (F) {
        if (T(547) === T(387)) _0x40aa55[T(545)] = _0x59065b, _0x22e251[T(545)][T(375) + T(475)](_0x707ba6[T(525)]), (ge = _0x1ec00c[T(545)]) == null || ge[T(536)](_0x247328[T(525)]), !_0xfeb895 && _0x5a59fa[T(545)][T(434)](_0x3ee6b4);
        else if (X[T(545)][T(554) + "ta"](F), !X[T(545)][T(406)]) {
          const Be = {};
          Be[T(488)] = T(365) + "me", E[T(457)](T(403), Be);
        }
      } else {
        const Be = {};
        Be[T(488)] = T(452) + T(477), E[T(457)](T(470), Be);
      }
    }), E.on($(403), (F) => {
      var ge;
      const T = $;
      if ((F[T(488)] == T(538) || F[T(488)] == T(385) + T(427)) && F[T(501)][T(469)] > 0 ? navigator[T(561)][T(410)](F[T(501)]) : F[T(488)] == T(546) + "n" && (Z[T(545)] = F, X[T(545)][T(375) + T(475)](F[T(525)]), (ge = v[T(545)]) == null || ge[T(536)](F[T(525)]), !s && X[T(545)][T(434)](u)), F[T(379)]) {
        if (F[T(488)] == T(574) + "ts") {
          if (!ie[T(545)][F[T(379)]] && (ie[T(545)][F[T(379)]] = []), ie[T(545)][F[T(379)]][F[T(426)]] = F[T(476)], F[T(377)]) return;
          if (!F[T(377)])
            if (T(522) !== T(445)) {
              const We = ie[T(545)][F[T(379)]][T(559)]("");
              F[T(476)] = JSON[T(580)](We), delete ie[T(545)][F[T(379)]];
            } else {
              const We = {};
              return We.id = _0x5e7132[T(460)], We;
            }
        }
        const Be = de[T(545)][T(401)](F[T(379)]);
        if (Be)
          if (T(399) !== T(422)) Be(F), de[T(545)][T(495)](F[T(379)]);
          else {
            if (!_0xabb108[T(545)][_0x14b031[T(379)]] && (_0x47f8a8[T(545)][_0x44ac79[T(379)]] = []), _0x2a164c[T(545)][_0x2e03fa[T(379)]][_0x223634[T(426)]] = _0x3d50f1[T(476)], _0xa9ef57[T(377)]) return;
            if (!_0x4dc972[T(377)]) {
              const We = _0x5a74f3[T(545)][_0x616eeb[T(379)]][T(559)]("");
              _0x324eab[T(476)] = _0x536f7e[T(580)](We), delete _0x11bce2[T(545)][_0x1d04e2[T(379)]];
            }
          }
      }
    }), E.on($(364) + $(531), (F) => {
      const T = $, ge = {};
      ge[T(568)] = F, ge[T(376)] = T(459), pe(ge);
    }), E.on($(373), (F) => {
      const T = $;
      if (T(577) !== T(577)) _0x2967b4[T(545)][T(434)](_0x2af237);
      else {
        const ge = {};
        ge[T(568)] = T(454) + T(481), ge[T(376)] = T(435), pe(ge);
      }
    }), () => {
      E && E[$(373)]();
    };
  }, [_]), ut(() => {
    const $ = t;
    C[$(545)] && ($(471) !== $(394) ? (async () => {
      const O = $;
      if (O(566) !== O(566)) {
        if (_0xd61331[O(545)][O(554) + "ta"](_0x56f972), !_0x361f4d[O(545)][O(406)]) {
          const E = {};
          E[O(488)] = O(365) + "me", _0x31d0bc[O(457)](O(403), E);
        }
      } else X[O(545)] = new UR(p, u, C, f, h, z), await X[O(545)][O(463)]();
    })() : _0x5db30b[$(545)] = !0);
  }, [H]), ut(() => {
    const $ = t, O = () => {
      const E = fn, F = document[E(372) + E(424)] || document[E(442) + E(507) + E(427)] || document[E(425) + E(389)] || document[E(456) + E(544)];
      X[E(545)][E(517) + "en"] = !!F, v[E(545)][E(478) + E(524)](!!F), v[E(545)][E(536)]();
    };
    return document[$(448) + $(521)]($(372) + $(512), O), () => {
      const E = $;
      E(468) === E(468) ? document[E(576) + E(458)](E(372) + E(512), O) : (_0x34e878[E(403)] = E(449), _0x485c59(_0x97ed8a));
    };
  }, [H]), ut(() => {
    let $;
    const O = () => {
      const E = fn;
      if (X[E(545)] && X[E(545)][E(557)](), !s && X[E(545)][E(416)])
        if (E(465) === E(564)) {
          const F = {};
          F[E(488)] = E(511) + E(427), _0x56a118[E(545)][E(457)](E(403), F);
        } else {
          X[E(545)][E(434)](u), cancelAnimationFrame($);
          return;
        }
      $ = requestAnimationFrame(O);
    };
    return O(), () => cancelAnimationFrame($);
  }, [H]), ut(() => {
    const $ = t;
    $(405) !== $(529) ? X[$(545)] && !s && ($(369) === $(474) ? _0x2dfb6c((O) => [...O, _0x57ca89]) : X[$(545)][$(434)](u)) : _0x2e0661[$(545)][$(457)]($(403), { action: $(489), ts: _0x17b564[$(378)]() });
  }, [u]), ut(() => {
    let $;
    return $ = setInterval(() => {
      const O = fn;
      if (b[O(545)])
        if (O(430) === O(404)) {
          const E = () => {
            const F = O, T = _0x768d17[F(372) + F(424)] || _0x3f689d[F(442) + F(507) + F(427)] || _0x30c399[F(425) + F(389)] || _0x4e181c[F(456) + F(544)];
            _0x28288b[F(545)][F(517) + "en"] = !!T, _0x26c2a2[F(545)][F(478) + F(524)](!!T), _0x4f0f42[F(545)][F(536)]();
          };
          return _0x229d8b[O(448) + O(521)](O(372) + O(512), E), () => {
            const F = O;
            _0x41b9ee[F(576) + F(458)](F(372) + F(512), E);
          };
        } else b[O(545)][O(457)](O(403), { action: O(489), ts: Date[O(378)]() });
    }, 1e4), () => clearInterval($);
  }, [H]);
  const se = () => {
    const $ = t;
    if ($(572) !== $(398)) te[$(545)] = !1, b[$(545)] && (b[$(545)][$(373)](), b[$(545)] = null), X[$(545)] && (X[$(545)][$(416)] = null), w(null), Y([]), z(null), P(Date[$(378)]());
    else return;
  }, _e = {};
  _e[t(439)] = o[t(460)];
  const re = {};
  re[t(440)] = t(444);
  const me = {};
  me[t(440)] = t(444);
  const ce = {};
  ce[t(440)] = t(444);
  const ve = {};
  ve[t(492)] = 0, ve[t(433)] = 0, ve[t(503) + t(450)] = t(480);
  const Se = {};
  Se[t(439)] = o[t(460)];
  const ye = {};
  ye[t(401)] = V, ye[t(451)] = U;
  const Ve = {};
  Ve.id = I, Ve[t(384)] = "0", Ve[t(395)] = t(418);
  const $e = {};
  return $e[t(407)] = 5, $e[t(571) + "om"] = 5, $e[t(388) + "us"] = 10, ue.jsx(a1, { id: B, style: m, children: W[t(469)] == 0 ? ue.jsxs(ue.Fragment, { children: [!L && ue.jsxs(ue.Fragment, { children: [A && ue.jsx(Yf, _e), ue.jsxs(am, { align: t(415), gap: t(363), children: [ue.jsx(ri, re), ue.jsx(ri, me), ue.jsx(ri, ce)] })] }), ue.jsxs(s1, { ref: S, id: N, style: L ? {} : ve, children: [A && ue.jsx(Yf, Se), i ? ue.jsx(WR, { maxWidth: u, status: ye, ref: v, canvasRef: C, displayId: g, isMobile: p, isShowDeviceId: A, onSenData: ($, O) => {
    const E = t;
    if (E(570) === E(527)) _0x9660dd[E(561)][E(410)](_0x598ffa[E(501)]);
    else if (G[E(545)]) {
      if (E(548) === E(548)) return;
      if (_0x231448[E(545)] && _0x250729[E(545)][E(557)](), !_0x5444d8 && _0x5428bb[E(545)][E(416)]) {
        _0x1d5bc6[E(545)][E(434)](_0x4d7604), _0x375cf0(_0x1425cb);
        return;
      }
      _0x27bf11 = _0xec5648(_0x230679);
    } else if (O[E(396)] === E(460)) M(!A);
    else if (O[E(396)] === E(391))
      if (E(431) !== E(539)) l == null || l(o[E(460)]);
      else {
        _0x323606[E(545)][E(434)](_0x349e2d), _0x5acf29(_0x2de53d);
        return;
      }
    else if (O[E(396)] === E(537)) se();
    else if (O[E(396)] === E(494)) {
      const F = {};
      F[E(488)] = E(511) + E(427), b[E(545)][E(457)](E(403), F);
    } else xe(O);
  } }) : null, ue.jsx(DR, { canvasContent: Ve, canvasRef: C, isMobile: p, assistive: V, onRemoteEvent: ($, O) => {
    const E = t;
    if ($ === Lm) {
      const F = { ...V };
      F[E(558)] = !1, U(F);
    } else E(555) === E(417) ? _0x233f1e() : xe(O);
  } })] })] }) : ue.jsx(t(447), { style: { textAlign: t(415), padding: 5, width: u }, children: ue.jsxs(bf, { direction: t(484), children: [W == null ? void 0 : W[t(514)](($, O) => ue.jsx(Ti[t(506)], { type: $[t(376)], children: $[t(568)] }, O)), ue.jsx(Zs, { size: t(523), style: $e, variant: t(562), color: t(362), icon: ue.jsx(Sp, {}), onClick: se, children: o[t(460)] })] }) }) });
});
function Mu(e, r) {
  var t = Ss();
  return Mu = function(n, o) {
    n = n - 319;
    var i = t[n];
    return i;
  }, Mu(e, r);
}
function Ss() {
  var e = ["2108348MkmCYm", "6977640WoUiXr", "641997WTCRte", "3076199vgpGnK", "197286AnanMy", "1ASDZOi", "219182jYqFxC", "125aroHsA", "3517956KtEpgJ"];
  return Ss = function() {
    return e;
  }, Ss();
}
(function(e, r) {
  for (var t = Mu, n = e(); ; )
    try {
      var o = parseInt(t(325)) / 1 * (-parseInt(t(326)) / 2) + parseInt(t(322)) / 3 + parseInt(t(320)) / 4 + -parseInt(t(327)) / 5 * (-parseInt(t(324)) / 6) + -parseInt(t(323)) / 7 + -parseInt(t(321)) / 8 + parseInt(t(319)) / 9;
      if (o === r) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ss, 532742);
export {
  y4 as ViewRP
};
