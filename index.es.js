var Vm = Object.defineProperty;
var Hm = (e, r, t) => r in e ? Vm(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var ot = (e, r, t) => Hm(e, typeof r != "symbol" ? r + "" : r, t);
import * as x from "react";
import Q, { useDebugValue as Od, createElement as Wm, useRef as Pe, useContext as ir, createContext as Cs, useEffect as ut, isValidElement as kh, version as qm, useLayoutEffect as Um, forwardRef as Wr, useState as jt, useMemo as Nn, Children as Gm, useImperativeHandle as gi, cloneElement as Xm } from "react";
import * as Dh from "react-dom";
import Rd, { createPortal as Km } from "react-dom";
var Uo = ja;
(function(e, r) {
  for (var t = ja, n = e(); ; )
    try {
      var o = -parseInt(t(149)) / 1 + -parseInt(t(126)) / 2 * (parseInt(t(148)) / 3) + parseInt(t(155)) / 4 + -parseInt(t(151)) / 5 * (-parseInt(t(147)) / 6) + parseInt(t(137)) / 7 * (-parseInt(t(146)) / 8) + parseInt(t(131)) / 9 + -parseInt(t(143)) / 10 * (-parseInt(t(134)) / 11);
      if (o === r) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ma, 437336);
typeof globalThis !== Uo(127) || typeof window !== Uo(127) || (typeof global !== Uo(127) ? global : Uo(127));
function ja(e, r) {
  var t = Ma();
  return ja = function(n, o) {
    n = n - 126;
    var i = t[n];
    return i;
  }, ja(e, r);
}
function zh(e) {
  var r = Uo;
  return e && e[r(139)] && Object[r(150)][r(145) + r(135)][r(132)](e, r(130)) ? e[r(130)] : e;
}
function Ma() {
  var e = ["2370JqQFUO", "construct", "hasOwnProp", "64TuySFr", "498qZzXyR", "184812upCOAp", "754919HFSlkY", "prototype", "27080pbekfu", "function", "keys", "apply", "709392AxucxB", "forEach", "26HpafEt", "undefined", "ptor", "value", "default", "1484514KXoiUD", "call", "defineProp", "66891abuBFo", "erty", "ertyDescri", "209923etYoFt", "constructo", "__esModule", "get", "length", "getOwnProp"];
  return Ma = function() {
    return e;
  }, Ma();
}
var Wi = { exports: {} }, Fo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $d;
function Ym() {
  if ($d) return Fo;
  $d = 1;
  var e = Q, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(s, c, l) {
    var u, d = {}, h = null, v = null;
    l !== void 0 && (h = "" + l), c.key !== void 0 && (h = "" + c.key), c.ref !== void 0 && (v = c.ref);
    for (u in c) n.call(c, u) && !i.hasOwnProperty(u) && (d[u] = c[u]);
    if (s && s.defaultProps) for (u in c = s.defaultProps, c) d[u] === void 0 && (d[u] = c[u]);
    return { $$typeof: r, type: s, key: h, ref: v, props: d, _owner: o.current };
  }
  return Fo.Fragment = t, Fo.jsx = a, Fo.jsxs = a, Fo;
}
var Lo = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Td;
function Jm() {
  return Td || (Td = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Q, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), f = Symbol.iterator, g = "@@iterator";
    function p(R) {
      if (R === null || typeof R != "object")
        return null;
      var ee = f && R[f] || R[g];
      return typeof ee == "function" ? ee : null;
    }
    var y = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(R) {
      {
        for (var ee = arguments.length, oe = new Array(ee > 1 ? ee - 1 : 0), Oe = 1; Oe < ee; Oe++)
          oe[Oe - 1] = arguments[Oe];
        C("error", R, oe);
      }
    }
    function C(R, ee, oe) {
      {
        var Oe = y.ReactDebugCurrentFrame, Qe = Oe.getStackAddendum();
        Qe !== "" && (ee += "%s", oe = oe.concat([Qe]));
        var Ze = oe.map(function(Fe) {
          return String(Fe);
        });
        Ze.unshift("Warning: " + ee), Function.prototype.apply.call(console[R], console, Ze);
      }
    }
    var E = !1, m = !1, _ = !1, w = !1, A = !1, N;
    N = Symbol.for("react.module.reference");
    function D(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === n || R === i || A || R === o || R === l || R === u || w || R === v || E || m || _ || typeof R == "object" && R !== null && (R.$$typeof === h || R.$$typeof === d || R.$$typeof === a || R.$$typeof === s || R.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === N || R.getModuleId !== void 0));
    }
    function V(R, ee, oe) {
      var Oe = R.displayName;
      if (Oe)
        return Oe;
      var Qe = ee.displayName || ee.name || "";
      return Qe !== "" ? oe + "(" + Qe + ")" : oe;
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
          case d:
            var Oe = R.displayName || null;
            return Oe !== null ? Oe : L(R.type) || "Memo";
          case h: {
            var Qe = R, Ze = Qe._payload, Fe = Qe._init;
            try {
              return L(Fe(Ze));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var z = Object.assign, H = 0, T, I, P, B, W, Y, K;
    function Z() {
    }
    Z.__reactDisabledLog = !0;
    function G() {
      {
        if (H === 0) {
          T = console.log, I = console.info, P = console.warn, B = console.error, W = console.group, Y = console.groupCollapsed, K = console.groupEnd;
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
              value: T
            }),
            info: z({}, R, {
              value: I
            }),
            warn: z({}, R, {
              value: P
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
              value: K
            })
          });
        }
        H < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = y.ReactCurrentDispatcher, he;
    function pe(R, ee, oe) {
      {
        if (he === void 0)
          try {
            throw Error();
          } catch (Qe) {
            var Oe = Qe.stack.trim().match(/\n( *(at )?)/);
            he = Oe && Oe[1] || "";
          }
        return `
` + he + R;
      }
    }
    var xe = !1, Se;
    {
      var ae = typeof WeakMap == "function" ? WeakMap : Map;
      Se = new ae();
    }
    function se(R, ee) {
      if (!R || xe)
        return "";
      {
        var oe = Se.get(R);
        if (oe !== void 0)
          return oe;
      }
      var Oe;
      xe = !0;
      var Qe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ze;
      Ze = ie.current, ie.current = null, G();
      try {
        if (ee) {
          var Fe = function() {
            throw Error();
          };
          if (Object.defineProperty(Fe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Fe, []);
            } catch (Et) {
              Oe = Et;
            }
            Reflect.construct(R, [], Fe);
          } else {
            try {
              Fe.call();
            } catch (Et) {
              Oe = Et;
            }
            R.call(Fe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Et) {
            Oe = Et;
          }
          R();
        }
      } catch (Et) {
        if (Et && Oe && typeof Et.stack == "string") {
          for (var Ne = Et.stack.split(`
`), yt = Oe.stack.split(`
`), at = Ne.length - 1, ht = yt.length - 1; at >= 1 && ht >= 0 && Ne[at] !== yt[ht]; )
            ht--;
          for (; at >= 1 && ht >= 0; at--, ht--)
            if (Ne[at] !== yt[ht]) {
              if (at !== 1 || ht !== 1)
                do
                  if (at--, ht--, ht < 0 || Ne[at] !== yt[ht]) {
                    var qe = `
` + Ne[at].replace(" at new ", " at ");
                    return R.displayName && qe.includes("<anonymous>") && (qe = qe.replace("<anonymous>", R.displayName)), typeof R == "function" && Se.set(R, qe), qe;
                  }
                while (at >= 1 && ht >= 0);
              break;
            }
        }
      } finally {
        xe = !1, ie.current = Ze, te(), Error.prepareStackTrace = Qe;
      }
      var Sr = R ? R.displayName || R.name : "", Cr = Sr ? pe(Sr) : "";
      return typeof R == "function" && Se.set(R, Cr), Cr;
    }
    function _e(R, ee, oe) {
      return se(R, !1);
    }
    function re(R) {
      var ee = R.prototype;
      return !!(ee && ee.isReactComponent);
    }
    function ve(R, ee, oe) {
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
          case d:
            return ve(R.type, ee, oe);
          case h: {
            var Oe = R, Qe = Oe._payload, Ze = Oe._init;
            try {
              return ve(Ze(Qe), ee, oe);
            } catch {
            }
          }
        }
      return "";
    }
    var ce = Object.prototype.hasOwnProperty, be = {}, Ce = y.ReactDebugCurrentFrame;
    function we(R) {
      if (R) {
        var ee = R._owner, oe = ve(R.type, R._source, ee ? ee.type : null);
        Ce.setExtraStackFrame(oe);
      } else
        Ce.setExtraStackFrame(null);
    }
    function ze(R, ee, oe, Oe, Qe) {
      {
        var Ze = Function.call.bind(ce);
        for (var Fe in R)
          if (Ze(R, Fe)) {
            var Ne = void 0;
            try {
              if (typeof R[Fe] != "function") {
                var yt = Error((Oe || "React class") + ": " + oe + " type `" + Fe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[Fe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw yt.name = "Invariant Violation", yt;
              }
              Ne = R[Fe](ee, Fe, Oe, oe, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (at) {
              Ne = at;
            }
            Ne && !(Ne instanceof Error) && (we(Qe), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Oe || "React class", oe, Fe, typeof Ne), we(null)), Ne instanceof Error && !(Ne.message in be) && (be[Ne.message] = !0, we(Qe), b("Failed %s type: %s", oe, Ne.message), we(null));
          }
      }
    }
    var Te = Array.isArray;
    function S(R) {
      return Te(R);
    }
    function $(R) {
      {
        var ee = typeof Symbol == "function" && Symbol.toStringTag, oe = ee && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return oe;
      }
    }
    function O(R) {
      try {
        return j(R), !1;
      } catch {
        return !0;
      }
    }
    function j(R) {
      return "" + R;
    }
    function M(R) {
      if (O(R))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", $(R)), j(R);
    }
    var le = y.ReactCurrentOwner, Je = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, We, je;
    function et(R) {
      if (ce.call(R, "ref")) {
        var ee = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (ee && ee.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function Ve(R) {
      if (ce.call(R, "key")) {
        var ee = Object.getOwnPropertyDescriptor(R, "key").get;
        if (ee && ee.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function Le(R, ee) {
      typeof R.ref == "string" && le.current;
    }
    function ge(R, ee) {
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
    function Ee(R, ee) {
      {
        var oe = function() {
          je || (je = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ee));
        };
        oe.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: oe,
          configurable: !0
        });
      }
    }
    var ue = function(R, ee, oe, Oe, Qe, Ze, Fe) {
      var Ne = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: R,
        key: ee,
        ref: oe,
        props: Fe,
        // Record the component responsible for creating this element.
        _owner: Ze
      };
      return Ne._store = {}, Object.defineProperty(Ne._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ne, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Oe
      }), Object.defineProperty(Ne, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Qe
      }), Object.freeze && (Object.freeze(Ne.props), Object.freeze(Ne)), Ne;
    };
    function Re(R, ee, oe, Oe, Qe) {
      {
        var Ze, Fe = {}, Ne = null, yt = null;
        oe !== void 0 && (M(oe), Ne = "" + oe), Ve(ee) && (M(ee.key), Ne = "" + ee.key), et(ee) && (yt = ee.ref, Le(ee, Qe));
        for (Ze in ee)
          ce.call(ee, Ze) && !Je.hasOwnProperty(Ze) && (Fe[Ze] = ee[Ze]);
        if (R && R.defaultProps) {
          var at = R.defaultProps;
          for (Ze in at)
            Fe[Ze] === void 0 && (Fe[Ze] = at[Ze]);
        }
        if (Ne || yt) {
          var ht = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          Ne && ge(Fe, ht), yt && Ee(Fe, ht);
        }
        return ue(R, Ne, yt, Qe, Oe, le.current, Fe);
      }
    }
    var dt = y.ReactCurrentOwner, Jt = y.ReactDebugCurrentFrame;
    function Lt(R) {
      if (R) {
        var ee = R._owner, oe = ve(R.type, R._source, ee ? ee.type : null);
        Jt.setExtraStackFrame(oe);
      } else
        Jt.setExtraStackFrame(null);
    }
    var J;
    J = !1;
    function k(R) {
      return typeof R == "object" && R !== null && R.$$typeof === r;
    }
    function ke() {
      {
        if (dt.current) {
          var R = L(dt.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function Ge(R) {
      return "";
    }
    var Xe = {};
    function me(R) {
      {
        var ee = ke();
        if (!ee) {
          var oe = typeof R == "string" ? R : R.displayName || R.name;
          oe && (ee = `

Check the top-level render call using <` + oe + ">.");
        }
        return ee;
      }
    }
    function it(R, ee) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var oe = me(ee);
        if (Xe[oe])
          return;
        Xe[oe] = !0;
        var Oe = "";
        R && R._owner && R._owner !== dt.current && (Oe = " It was passed a child from " + L(R._owner.type) + "."), Lt(R), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', oe, Oe), Lt(null);
      }
    }
    function De(R, ee) {
      {
        if (typeof R != "object")
          return;
        if (S(R))
          for (var oe = 0; oe < R.length; oe++) {
            var Oe = R[oe];
            k(Oe) && it(Oe, ee);
          }
        else if (k(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var Qe = p(R);
          if (typeof Qe == "function" && Qe !== R.entries)
            for (var Ze = Qe.call(R), Fe; !(Fe = Ze.next()).done; )
              k(Fe.value) && it(Fe.value, ee);
        }
      }
    }
    function Ke(R) {
      {
        var ee = R.type;
        if (ee == null || typeof ee == "string")
          return;
        var oe;
        if (typeof ee == "function")
          oe = ee.propTypes;
        else if (typeof ee == "object" && (ee.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ee.$$typeof === d))
          oe = ee.propTypes;
        else
          return;
        if (oe) {
          var Oe = L(ee);
          ze(oe, R.props, "prop", Oe, R);
        } else if (ee.PropTypes !== void 0 && !J) {
          J = !0;
          var Qe = L(ee);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Qe || "Unknown");
        }
        typeof ee.getDefaultProps == "function" && !ee.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function mt(R) {
      {
        for (var ee = Object.keys(R.props), oe = 0; oe < ee.length; oe++) {
          var Oe = ee[oe];
          if (Oe !== "children" && Oe !== "key") {
            Lt(R), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Oe), Lt(null);
            break;
          }
        }
        R.ref !== null && (Lt(R), b("Invalid attribute `ref` supplied to `React.Fragment`."), Lt(null));
      }
    }
    var Qt = {};
    function fr(R, ee, oe, Oe, Qe, Ze) {
      {
        var Fe = D(R);
        if (!Fe) {
          var Ne = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (Ne += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var yt = Ge();
          yt ? Ne += yt : Ne += ke();
          var at;
          R === null ? at = "null" : S(R) ? at = "array" : R !== void 0 && R.$$typeof === r ? (at = "<" + (L(R.type) || "Unknown") + " />", Ne = " Did you accidentally export a JSX literal instead of a component?") : at = typeof R, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", at, Ne);
        }
        var ht = Re(R, ee, oe, Qe, Ze);
        if (ht == null)
          return ht;
        if (Fe) {
          var qe = ee.children;
          if (qe !== void 0)
            if (Oe)
              if (S(qe)) {
                for (var Sr = 0; Sr < qe.length; Sr++)
                  De(qe[Sr], R);
                Object.freeze && Object.freeze(qe);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              De(qe, R);
        }
        if (ce.call(ee, "key")) {
          var Cr = L(R), Et = Object.keys(ee).filter(function(zn) {
            return zn !== "key";
          }), rn = Et.length > 0 ? "{key: someKey, " + Et.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Qt[Cr + rn]) {
            var No = Et.length > 0 ? "{" + Et.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, rn, Cr, No, Cr), Qt[Cr + rn] = !0;
          }
        }
        return R === n ? mt(ht) : Ke(ht), ht;
      }
    }
    function Me(R, ee, oe) {
      return fr(R, ee, oe, !0);
    }
    function pt(R, ee, oe) {
      return fr(R, ee, oe, !1);
    }
    var kt = pt, Be = Me;
    Lo.Fragment = n, Lo.jsx = kt, Lo.jsxs = Be;
  }()), Lo;
}
var Pd;
function Qm() {
  return Pd || (Pd = 1, process.env.NODE_ENV === "production" ? Wi.exports = Ym() : Wi.exports = Jm()), Wi.exports;
}
var de = Qm(), rr = function() {
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
), vt = "-ms-", Jo = "-moz-", lt = "-webkit-", Bh = "comm", _s = "rule", Mu = "decl", rv = "@import", Vh = "@keyframes", nv = "@layer", Hh = Math.abs, Fu = String.fromCharCode, pl = Object.assign;
function ov(e, r) {
  return Vt(e, 0) ^ 45 ? (((r << 2 ^ Vt(e, 0)) << 2 ^ Vt(e, 1)) << 2 ^ Vt(e, 2)) << 2 ^ Vt(e, 3) : 0;
}
function Wh(e) {
  return e.trim();
}
function Xr(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function Ue(e, r, t) {
  return e.replace(r, t);
}
function pa(e, r, t) {
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
function Ad(e, r) {
  return e.filter(function(t) {
    return !Xr(t, r);
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
function $n() {
  return Vt(So, yr);
}
function xa() {
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
  for (; (Pt = $n()) && Pt < 33; )
    Tr();
  return xl(e) > 2 || xl(Pt) > 3 ? "" : " ";
}
function dv(e, r) {
  for (; --r && Tr() && !(Pt < 48 || Pt > 102 || Pt > 57 && Pt < 65 || Pt > 70 && Pt < 97); )
    ;
  return Rs(e, xa() + (r < 6 && $n() == 32 && Tr() == 32));
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
function fv(e, r) {
  for (; Tr() && e + Pt !== 57; )
    if (e + Pt === 84 && $n() === 47)
      break;
  return "/*" + Rs(r, yr - 1) + "*" + Fu(e === 47 ? e : Tr());
}
function hv(e) {
  for (; !xl($n()); )
    Tr();
  return Rs(e, yr);
}
function pv(e) {
  return lv(ga("", null, null, null, [""], e = cv(e), 0, [0], e));
}
function ga(e, r, t, n, o, i, a, s, c) {
  for (var l = 0, u = 0, d = a, h = 0, v = 0, f = 0, g = 1, p = 1, y = 1, b = 0, C = "", E = o, m = i, _ = n, w = C; p; )
    switch (f = b, b = Tr()) {
      // (
      case 40:
        if (f != 108 && Vt(w, d - 1) == 58) {
          pa(w += Ue(wc(b), "&", "&\f"), "&\f", Hh(l ? s[l - 1] : 0)) != -1 && (y = -1);
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
        w += uv(f);
        break;
      // \
      case 92:
        w += dv(xa() - 1, 7);
        continue;
      // /
      case 47:
        switch ($n()) {
          case 42:
          case 47:
            Go(xv(fv(Tr(), xa()), r, t, c), c);
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
            y == -1 && (w = Ue(w, /\f/g, "")), v > 0 && kr(w) - d && Go(v > 32 ? Id(w + ";", n, t, d - 1, c) : Id(Ue(w, " ", "") + ";", n, t, d - 2, c), c);
            break;
          // @ ;
          case 59:
            w += ";";
          // { rule/at-rule
          default:
            if (Go(_ = Nd(w, r, t, l, u, o, s, C, E = [], m = [], d, i), i), b === 123)
              if (u === 0)
                ga(w, r, _, _, E, i, d, s, m);
              else
                switch (h === 99 && Vt(w, 3) === 110 ? 100 : h) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ga(e, _, _, n && Go(Nd(e, _, _, 0, 0, o, s, C, o, E = [], d, m), m), o, m, d, s, n ? E : m);
                    break;
                  default:
                    ga(w, _, _, _, [""], m, 0, s, m);
                }
        }
        l = u = v = 0, g = y = 1, C = w = "", d = a;
        break;
      // :
      case 58:
        d = 1 + kr(w), v = f;
      default:
        if (g < 1) {
          if (b == 123)
            --g;
          else if (b == 125 && g++ == 0 && sv() == 125)
            continue;
        }
        switch (w += Fu(b), b * g) {
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
            $n() === 45 && (w += wc(Tr())), h = $n(), u = d = kr(C = w += hv(xa())), b++;
            break;
          // -
          case 45:
            f === 45 && kr(w) == 2 && (g = 0);
        }
    }
  return i;
}
function Nd(e, r, t, n, o, i, a, s, c, l, u, d) {
  for (var h = o - 1, v = o === 0 ? i : [""], f = qh(v), g = 0, p = 0, y = 0; g < n; ++g)
    for (var b = 0, C = io(e, h + 1, h = Hh(p = a[g])), E = e; b < f; ++b)
      (E = Wh(p > 0 ? v[b] + " " + C : Ue(C, /&\f/g, v[b]))) && (c[y++] = E);
  return Os(e, r, t, o === 0 ? _s : s, c, l, u, d);
}
function xv(e, r, t, n) {
  return Os(e, r, t, Bh, Fu(av()), io(e, 2, -2), 0, n);
}
function Id(e, r, t, n, o) {
  return Os(e, r, t, Mu, io(e, 0, n), io(e, n + 1, -1), n, o);
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
          return lt + e + vt + Ue(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return lt + e + vt + Ue(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return lt + e + vt + Ue(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
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
      return lt + e + Ue(e, /(\w+).+(:[^]+)/, lt + "box-$1$2" + vt + "flex-$1$2") + e;
    // align-self
    case 5443:
      return lt + e + vt + "flex-item-" + Ue(e, /flex-|-self/g, "") + (Xr(e, /flex-|baseline/) ? "" : vt + "grid-row-" + Ue(e, /flex-|-self/g, "")) + e;
    // align-content
    case 4675:
      return lt + e + vt + "flex-line-pack" + Ue(e, /align-content|flex-|-self/g, "") + e;
    // flex-shrink
    case 5548:
      return lt + e + vt + Ue(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return lt + e + vt + Ue(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return lt + "box-" + Ue(e, "-grow", "") + lt + e + vt + Ue(e, "grow", "positive") + e;
    // transition
    case 4554:
      return lt + Ue(e, /([^-])(transform)/g, "$1" + lt + "$2") + e;
    // cursor
    case 6187:
      return Ue(Ue(Ue(e, /(zoom-|grab)/, lt + "$1"), /(image-set)/, lt + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return Ue(e, /(image-set\([^]*)/, lt + "$1$`$1");
    // justify-content
    case 4968:
      return Ue(Ue(e, /(.+:)(flex-)?(.*)/, lt + "box-pack:$3" + vt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + lt + e + e;
    // justify-self
    case 4200:
      if (!Xr(e, /flex-|baseline/)) return vt + "grid-column-align" + io(e, r) + e;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return vt + Ue(e, "template-", "") + e;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return t && t.some(function(n, o) {
        return r = o, Xr(n.props, /grid-\w+-end/);
      }) ? ~pa(e + (t = t[r].value), "span", 0) ? e : vt + Ue(e, "-start", "") + e + vt + "grid-row-span:" + (~pa(t, "span", 0) ? Xr(t, /\d+/) : +Xr(t, /\d+/) - +Xr(e, /\d+/)) + ";" : vt + Ue(e, "-start", "") + e;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return t && t.some(function(n) {
        return Xr(n.props, /grid-\w+-start/);
      }) ? e : vt + Ue(Ue(e, "-end", "-span"), "span ", "") + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Ue(e, /(.+)-inline(.+)/, lt + "$1$2") + e;
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
            return Ue(e, /(.+:)(.+)-([^]+)/, "$1" + lt + "$2-$3$1" + Jo + (Vt(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
          // (s)tretch
          case 115:
            return ~pa(e, "stretch", 0) ? Gh(Ue(e, "stretch", "fill-available"), r, t) + e : e;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return Ue(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, o, i, a, s, c, l) {
        return vt + o + ":" + i + l + (a ? vt + o + "-span:" + (s ? c : +c - +i) + l : "") + e;
      });
    // position: sticky
    case 4949:
      if (Vt(e, r + 6) === 121)
        return Ue(e, ":", ":" + lt) + e;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (Vt(e, Vt(e, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return Ue(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + lt + (Vt(e, 14) === 45 ? "inline-" : "") + "box$3$1" + lt + "$2$3$1" + vt + "$2box$3") + e;
        // (inline-)?gri(d)
        case 100:
          return Ue(e, ":", ":" + vt) + e;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return Ue(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function Fa(e, r) {
  for (var t = "", n = 0; n < e.length; n++)
    t += r(e[n], n, e, r) || "";
  return t;
}
function gv(e, r, t, n) {
  switch (e.type) {
    case nv:
      if (e.children.length) break;
    case rv:
    case Mu:
      return e.return = e.return || e.value;
    case Bh:
      return "";
    case Vh:
      return e.return = e.value + "{" + Fa(e.children, n) + "}";
    case _s:
      if (!kr(e.value = e.props.join(","))) return "";
  }
  return kr(t = Fa(e.children, n)) ? e.return = e.value + "{" + t + "}" : "";
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
      case Mu:
        e.return = Gh(e.value, e.length, t);
        return;
      case Vh:
        return Fa([ln(e, { value: Ue(e.value, "@", "@" + lt) })], n);
      case _s:
        if (e.length)
          return iv(t = e.props, function(o) {
            switch (Xr(o, n = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                qn(ln(e, { props: [Ue(o, /:(read-\w+)/, ":" + Jo + "$1")] })), qn(ln(e, { props: [o] })), pl(e, { props: Ad(t, n) });
                break;
              // :placeholder
              case "::placeholder":
                qn(ln(e, { props: [Ue(o, /:(plac\w+)/, ":" + lt + "input-$1")] })), qn(ln(e, { props: [Ue(o, /:(plac\w+)/, ":" + Jo + "$1")] })), qn(ln(e, { props: [Ue(o, /:(plac\w+)/, vt + "input-$1")] })), qn(ln(e, { props: [o] })), pl(e, { props: Ad(t, n) });
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
}, In = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Xh = "active", Kh = "data-styled-version", $s = "6.1.18", Lu = `/*!sc*/
`, La = typeof window < "u" && typeof document < "u", wv = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), jd = /invalid hook call/i, qi = /* @__PURE__ */ new Set(), Sv = function(e, r) {
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
        jd.test(a) ? (i = !1, qi.delete(n)) : o.apply(void 0, oo([a], s, !1));
      }, Pe(), i && !qi.has(n) && (console.warn(n), qi.add(n));
    } catch (a) {
      jd.test(a.message) && qi.delete(n);
    } finally {
      console.error = o;
    }
  }
}, Ts = Object.freeze([]), so = Object.freeze({});
function Cv(e, r, t) {
  return t === void 0 && (t = so), e.theme !== t.theme && e.theme || r || t.theme;
}
var ml = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), _v = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Ev = /(^-|-$)/g;
function Md(e) {
  return e.replace(_v, "-").replace(Ev, "");
}
var Ov = /(a)(d)/gi, Ui = 52, Fd = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function vl(e) {
  var r, t = "";
  for (r = Math.abs(e); r > Ui; r = r / Ui | 0) t = Fd(r % Ui) + t;
  return (Fd(r % Ui) + t).replace(Ov, "$1-$2");
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
function Cc(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Zh = typeof Symbol == "function" && Symbol.for, ep = Zh ? Symbol.for("react.memo") : 60115, $v = Zh ? Symbol.for("react.forward_ref") : 60112, Tv = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Pv = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, tp = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Av = ((Sc = {})[$v] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Sc[ep] = tp, Sc);
function Ld(e) {
  return ("type" in (r = e) && r.type.$$typeof) === ep ? tp : "$$typeof" in e ? Av[e.$$typeof] : Tv;
  var r;
}
var Nv = Object.defineProperty, Iv = Object.getOwnPropertyNames, kd = Object.getOwnPropertySymbols, jv = Object.getOwnPropertyDescriptor, Mv = Object.getPrototypeOf, Dd = Object.prototype;
function rp(e, r, t) {
  if (typeof r != "string") {
    if (Dd) {
      var n = Mv(r);
      n && n !== Dd && rp(e, n, t);
    }
    var o = Iv(r);
    kd && (o = o.concat(kd(r)));
    for (var i = Ld(e), a = Ld(r), s = 0; s < o.length; ++s) {
      var c = o[s];
      if (!(c in Pv || t && t[c] || a && c in a || i && c in i)) {
        var l = jv(r, c);
        try {
          Nv(e, c, l);
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
function _n(e, r) {
  return e && r ? "".concat(e, " ").concat(r) : e || r || "";
}
function zd(e, r) {
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
function Du(e, r) {
  Object.defineProperty(e, "toString", { value: r });
}
var Fv = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function Lv() {
  for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
  for (var t = e[0], n = [], o = 1, i = e.length; o < i; o += 1) n.push(e[o]);
  return n.forEach(function(a) {
    t = t.replace(/%[a-z]/, a);
  }), t;
}
function Co(e) {
  for (var r = [], t = 1; t < arguments.length; t++) r[t - 1] = arguments[t];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(r.length > 0 ? " Args: ".concat(r.join(", ")) : "")) : new Error(Lv.apply(void 0, oo([Fv[e]], r, !1)).trim());
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
      for (var n = this.groupSizes, o = n.length, i = o; r >= i; ) if ((i <<= 1) < 0) throw Co(16, "".concat(r));
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
    for (var n = this.groupSizes[r], o = this.indexOfGroup(r), i = o + n, a = o; a < i; a++) t += "".concat(this.tag.getRule(a)).concat(Lu);
    return t;
  }, e;
}(), Dv = 1 << 30, ma = /* @__PURE__ */ new Map(), ka = /* @__PURE__ */ new Map(), va = 1, Gi = function(e) {
  if (ma.has(e)) return ma.get(e);
  for (; ka.has(va); ) va++;
  var r = va++;
  if (process.env.NODE_ENV !== "production" && ((0 | r) < 0 || r > Dv)) throw Co(16, "".concat(r));
  return ma.set(e, r), ka.set(r, e), r;
}, zv = function(e, r) {
  va = r + 1, ma.set(e, r), ka.set(r, e);
}, Bv = "style[".concat(In, "][").concat(Kh, '="').concat($s, '"]'), Vv = new RegExp("^".concat(In, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Hv = function(e, r, t) {
  for (var n, o = t.split(","), i = 0, a = o.length; i < a; i++) (n = o[i]) && e.registerName(r, n);
}, Wv = function(e, r) {
  for (var t, n = ((t = r.textContent) !== null && t !== void 0 ? t : "").split(Lu), o = [], i = 0, a = n.length; i < a; i++) {
    var s = n[i].trim();
    if (s) {
      var c = s.match(Vv);
      if (c) {
        var l = 0 | parseInt(c[1], 10), u = c[2];
        l !== 0 && (zv(u, l), Hv(e, u, c[3]), e.getTag().insertRules(l, o)), o.length = 0;
      } else o.push(s);
    }
  }
}, Bd = function(e) {
  for (var r = document.querySelectorAll(Bv), t = 0, n = r.length; t < n; t++) {
    var o = r[t];
    o && o.getAttribute(In) !== Xh && (Wv(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function qv() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var np = function(e) {
  var r = document.head, t = e || r, n = document.createElement("style"), o = function(s) {
    var c = Array.from(s.querySelectorAll("style[".concat(In, "]")));
    return c[c.length - 1];
  }(t), i = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(In, Xh), n.setAttribute(Kh, $s);
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
      throw Co(17);
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
}(), Xv = function() {
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
}(), Vd = La, Kv = { isServer: !La, useCSSOMInjection: !wv }, op = function() {
  function e(r, t, n) {
    r === void 0 && (r = so), t === void 0 && (t = {});
    var o = this;
    this.options = rr(rr({}, Kv), r), this.gs = t, this.names = new Map(n), this.server = !!r.isServer, !this.server && La && Vd && (Vd = !1, Bd(this)), Du(this, function() {
      return function(i) {
        for (var a = i.getTag(), s = a.length, c = "", l = function(d) {
          var h = function(y) {
            return ka.get(y);
          }(d);
          if (h === void 0) return "continue";
          var v = i.names.get(h), f = a.getGroup(d);
          if (v === void 0 || !v.size || f.length === 0) return "continue";
          var g = "".concat(In, ".g").concat(d, '[id="').concat(h, '"]'), p = "";
          v !== void 0 && v.forEach(function(y) {
            y.length > 0 && (p += "".concat(y, ","));
          }), c += "".concat(f).concat(g, '{content:"').concat(p, '"}').concat(Lu);
        }, u = 0; u < s; u++) l(u);
        return c;
      }(o);
    });
  }
  return e.registerId = function(r) {
    return Gi(r);
  }, e.prototype.rehydrate = function() {
    !this.server && La && Bd(this);
  }, e.prototype.reconstructWithOptions = function(r, t) {
    return t === void 0 && (t = !0), new e(rr(rr({}, this.options), r), this.gs, t && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (r = function(t) {
      var n = t.useCSSOMInjection, o = t.target;
      return t.isServer ? new Xv(o) : n ? new Uv(o) : new Gv(o);
    }(this.options), new kv(r)));
    var r;
  }, e.prototype.hasNameForId = function(r, t) {
    return this.names.has(r) && this.names.get(r).has(t);
  }, e.prototype.registerName = function(r, t) {
    if (Gi(r), this.names.has(r)) this.names.get(r).add(t);
    else {
      var n = /* @__PURE__ */ new Set();
      n.add(t), this.names.set(r, n);
    }
  }, e.prototype.insertRules = function(r, t, n) {
    this.registerName(r, t), this.getTag().insertRules(Gi(r), n);
  }, e.prototype.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, e.prototype.clearRules = function(r) {
    this.getTag().clearGroup(Gi(r)), this.clearNames(r);
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
  var r, t, n, o = so, i = o.options, a = i === void 0 ? so : i, s = o.plugins, c = s === void 0 ? Ts : s, l = function(h, v, f) {
    return f.startsWith(t) && f.endsWith(t) && f.replaceAll(t, "").length > 0 ? ".".concat(r) : h;
  }, u = c.slice();
  u.push(function(h) {
    h.type === _s && h.value.includes("&") && (h.props[0] = h.props[0].replace(Yv, t).replace(n, l));
  }), a.prefix && u.push(bv), u.push(gv);
  var d = function(h, v, f, g) {
    v === void 0 && (v = ""), f === void 0 && (f = ""), g === void 0 && (g = "&"), r = g, t = v, n = new RegExp("\\".concat(t, "\\b"), "g");
    var p = h.replace(Jv, ""), y = pv(f || v ? "".concat(f, " ").concat(v, " { ").concat(p, " }") : p);
    a.namespace && (y = ip(y, a.namespace));
    var b = [];
    return Fa(y, mv(u.concat(vv(function(C) {
      return b.push(C);
    })))), b;
  };
  return d.hash = c.length ? c.reduce(function(h, v) {
    return v.name || Co(15), Sn(h, v.name);
  }, Yh).toString() : "", d;
}
var Zv = new op(), yl = Qv(), ap = Q.createContext({ shouldForwardProp: void 0, styleSheet: Zv, stylis: yl });
ap.Consumer;
Q.createContext(void 0);
function Hd() {
  return ir(ap);
}
var Wd = function() {
  function e(r, t) {
    var n = this;
    this.inject = function(o, i) {
      i === void 0 && (i = yl);
      var a = n.name + i.hash;
      o.hasNameForId(n.id, a) || o.insertRules(n.id, a, i(n.rules, a, "@keyframes"));
    }, this.name = r, this.id = "sc-keyframes-".concat(r), this.rules = t, Du(this, function() {
      throw Co(12, String(n.name));
    });
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = yl), this.name + r.hash;
  }, e;
}(), e1 = function(e) {
  return e >= "A" && e <= "Z";
};
function qd(e) {
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
    e.hasOwnProperty(o) && !sp(i) && (Array.isArray(i) && i.isCss || co(i) ? n.push("".concat(qd(o), ":"), i, ";") : lo(i) ? n.push.apply(n, oo(oo(["".concat(o, " {")], cp(i), !1), ["}"], !1)) : n.push("".concat(qd(o), ": ").concat((r = o, (t = i) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || t === 0 || r in yv || r.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return n;
};
function Tn(e, r, t, n) {
  if (sp(e)) return [];
  if (ku(e)) return [".".concat(e.styledComponentId)];
  if (co(e)) {
    if (!co(i = e) || i.prototype && i.prototype.isReactComponent || !r) return [e];
    var o = e(r);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof Wd || lo(o) || o === null || console.error("".concat(Qh(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Tn(o, r, t, n);
  }
  var i;
  return e instanceof Wd ? t ? (e.inject(t, n), [e.getName(n)]) : [e] : lo(e) ? cp(e) : Array.isArray(e) ? Array.prototype.concat.apply(Ts, e.map(function(a) {
    return Tn(a, r, t, n);
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
    if (this.isStatic && !n.hash) if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) o = _n(o, this.staticRulesId);
    else {
      var i = zd(Tn(this.rules, r, t, n)), a = vl(Sn(this.baseHash, i) >>> 0);
      if (!t.hasNameForId(this.componentId, a)) {
        var s = n(i, ".".concat(a), void 0, this.componentId);
        t.insertRules(this.componentId, a, s);
      }
      o = _n(o, a), this.staticRulesId = a;
    }
    else {
      for (var c = Sn(this.baseHash, n.hash), l = "", u = 0; u < this.rules.length; u++) {
        var d = this.rules[u];
        if (typeof d == "string") l += d, process.env.NODE_ENV !== "production" && (c = Sn(c, d));
        else if (d) {
          var h = zd(Tn(d, r, t, n));
          c = Sn(c, h + u), l += h;
        }
      }
      if (l) {
        var v = vl(c >>> 0);
        t.hasNameForId(this.componentId, v) || t.insertRules(this.componentId, v, n(l, ".".concat(v), void 0, this.componentId)), o = _n(o, v);
      }
    }
    return o;
  }, e;
}(), lp = Q.createContext(void 0);
lp.Consumer;
var _c = {}, Ud = /* @__PURE__ */ new Set();
function o1(e, r, t) {
  var n = ku(e), o = e, i = !Cc(e), a = r.attrs, s = a === void 0 ? Ts : a, c = r.componentId, l = c === void 0 ? function(E, m) {
    var _ = typeof E != "string" ? "sc" : Md(E);
    _c[_] = (_c[_] || 0) + 1;
    var w = "".concat(_, "-").concat(Rv($s + _ + _c[_]));
    return m ? "".concat(m, "-").concat(w) : w;
  }(r.displayName, r.parentComponentId) : c, u = r.displayName, d = u === void 0 ? function(E) {
    return Cc(E) ? "styled.".concat(E) : "Styled(".concat(Qh(E), ")");
  }(e) : u, h = r.displayName && r.componentId ? "".concat(Md(r.displayName), "-").concat(r.componentId) : r.componentId || l, v = n && o.attrs ? o.attrs.concat(s).filter(Boolean) : s, f = r.shouldForwardProp;
  if (n && o.shouldForwardProp) {
    var g = o.shouldForwardProp;
    if (r.shouldForwardProp) {
      var p = r.shouldForwardProp;
      f = function(E, m) {
        return g(E, m) && p(E, m);
      };
    } else f = g;
  }
  var y = new n1(t, h, n ? o.componentStyle : void 0);
  function b(E, m) {
    return function(_, w, A) {
      var N = _.attrs, D = _.componentStyle, V = _.defaultProps, U = _.foldedComponentIds, L = _.styledComponentId, z = _.target, H = Q.useContext(lp), T = Hd(), I = _.shouldForwardProp || T.shouldForwardProp;
      process.env.NODE_ENV !== "production" && Od(L);
      var P = Cv(w, H, V) || so, B = function(te, ie, he) {
        for (var pe, xe = rr(rr({}, ie), { className: void 0, theme: he }), Se = 0; Se < te.length; Se += 1) {
          var ae = co(pe = te[Se]) ? pe(xe) : pe;
          for (var se in ae) xe[se] = se === "className" ? _n(xe[se], ae[se]) : se === "style" ? rr(rr({}, xe[se]), ae[se]) : ae[se];
        }
        return ie.className && (xe.className = _n(xe.className, ie.className)), xe;
      }(N, w, P), W = B.as || z, Y = {};
      for (var K in B) B[K] === void 0 || K[0] === "$" || K === "as" || K === "theme" && B.theme === P || (K === "forwardedAs" ? Y.as = B.forwardedAs : I && !I(K, W) || (Y[K] = B[K], I || process.env.NODE_ENV !== "development" || tv(K) || Ud.has(K) || !ml.has(W) || (Ud.add(K), console.warn('styled-components: it looks like an unknown prop "'.concat(K, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Z = function(te, ie) {
        var he = Hd(), pe = te.generateAndInjectStyles(ie, he.styleSheet, he.stylis);
        return process.env.NODE_ENV !== "production" && Od(pe), pe;
      }(D, B);
      process.env.NODE_ENV !== "production" && _.warnTooManyClasses && _.warnTooManyClasses(Z);
      var G = _n(U, L);
      return Z && (G += " " + Z), B.className && (G += " " + B.className), Y[Cc(W) && !ml.has(W) ? "class" : "className"] = G, A && (Y.ref = A), Wm(W, Y);
    }(C, E, m);
  }
  b.displayName = d;
  var C = Q.forwardRef(b);
  return C.attrs = v, C.componentStyle = y, C.displayName = d, C.shouldForwardProp = f, C.foldedComponentIds = n ? _n(o.foldedComponentIds, o.styledComponentId) : "", C.styledComponentId = h, C.target = n ? o.target : e, Object.defineProperty(C, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(E) {
    this._foldedDefaultProps = n ? function(m) {
      for (var _ = [], w = 1; w < arguments.length; w++) _[w - 1] = arguments[w];
      for (var A = 0, N = _; A < N.length; A++) bl(m, N[A], !0);
      return m;
    }({}, o.defaultProps, E) : E;
  } }), process.env.NODE_ENV !== "production" && (Sv(d, h), C.warnTooManyClasses = /* @__PURE__ */ function(E, m) {
    var _ = {}, w = !1;
    return function(A) {
      if (!w && (_[A] = !0, Object.keys(_).length >= 200)) {
        var N = m ? ' with the id of "'.concat(m, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(E).concat(N, `.
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
  }(d, h)), Du(C, function() {
    return ".".concat(C.styledComponentId);
  }), i && rp(C, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), C;
}
function Gd(e, r) {
  for (var t = [e[0]], n = 0, o = r.length; n < o; n += 1) t.push(r[n], e[n + 1]);
  return t;
}
var Xd = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function i1(e) {
  for (var r = [], t = 1; t < arguments.length; t++) r[t - 1] = arguments[t];
  if (co(e) || lo(e)) return Xd(Tn(Gd(Ts, oo([e], r, !0))));
  var n = e;
  return r.length === 0 && n.length === 1 && typeof n[0] == "string" ? Tn(n) : Xd(Tn(Gd(n, r)));
}
function wl(e, r, t) {
  if (t === void 0 && (t = so), !r) throw Co(1, r);
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
var Xi = "__sc-".concat(In, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[Xi] || (window[Xi] = 0), window[Xi] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Xi] += 1);
const Ps = za;
(function(e, r) {
  const t = za, n = e();
  for (; ; )
    try {
      if (parseInt(t(444)) / 1 * (parseInt(t(441)) / 2) + parseInt(t(446)) / 3 * (parseInt(t(436)) / 4) + -parseInt(t(448)) / 5 * (-parseInt(t(437)) / 6) + -parseInt(t(450)) / 7 * (-parseInt(t(440)) / 8) + parseInt(t(447)) / 9 + -parseInt(t(445)) / 10 + -parseInt(t(438)) / 11 * (parseInt(t(439)) / 12) === r) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Da, 377660);
function Da() {
  const e = ["5yjMomD", "canvas", "66388NqynjK", "492asTXSD", "4171542EqPtvc", "1365518nrDVYL", "96KeHsSm", "264LjrCBz", "6EbUvCO", "span", "div", "123482wIfwZM", "7133550NzLiOS", "15057KECoHs", "792963DngolQ"];
  return Da = function() {
    return e;
  }, Da();
}
const a1 = qr[Ps(443)]`
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
`, s1 = qr[Ps(443)]`
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
`;
function za(e, r) {
  const t = Da();
  return za = function(n, o) {
    return n = n - 436, t[n];
  }, za(e, r);
}
const c1 = qr[Ps(449)]`
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
`, Kd = qr[Ps(442)]`
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
`, dp = /* @__PURE__ */ Cs({});
var Ec = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Yd;
function l1() {
  return Yd || (Yd = 1, function(e) {
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
const fe = /* @__PURE__ */ zh(u1), d1 = {
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
}, Dt = Math.round;
function Oc(e, r) {
  const t = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], n = t.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    n[o] = r(n[o] || 0, t[o] || "", o);
  return t[3] ? n[3] = t[3].includes("%") ? n[3] / 100 : n[3] : n[3] = 1, n;
}
const Jd = (e, r, t) => t === 0 ? e : e / 100;
function ko(e, r) {
  const t = r || 255;
  return e > t ? t : e < 0 ? 0 : e;
}
let Ki = class fp {
  constructor(r) {
    /**
     * All FastColor objects are valid. So isValid is always true. This property is kept to be compatible with TinyColor.
     */
    ot(this, "isValid", !0);
    /**
     * Red, R in RGB
     */
    ot(this, "r", 0);
    /**
     * Green, G in RGB
     */
    ot(this, "g", 0);
    /**
     * Blue, B in RGB
     */
    ot(this, "b", 0);
    /**
     * Alpha/Opacity, A in RGBA/HSLA
     */
    ot(this, "a", 1);
    // HSV privates
    ot(this, "_h");
    ot(this, "_s");
    ot(this, "_l");
    ot(this, "_v");
    // intermediate variables to calculate HSL/HSV
    ot(this, "_max");
    ot(this, "_min");
    ot(this, "_brightness");
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
        const i = d1[n.toLowerCase()];
        i && this.fromHexString(
          // Convert 36 hex to 16 hex
          parseInt(i, 36).toString(16).padStart(6, "0")
        );
      }
    } else if (r instanceof fp)
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
      r === 0 ? this._h = 0 : this._h = Dt(60 * (this.r === this.getMax() ? (this.g - this.b) / r + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / r + 2 : (this.r - this.g) / r + 4));
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
      r: Dt(i("r")),
      g: Dt(i("g")),
      b: Dt(i("b")),
      a: Dt(i("a") * 100) / 100
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
    const t = this._c(r), n = this.a + t.a * (1 - this.a), o = (i) => Dt((this[i] * this.a + t[i] * t.a * (1 - this.a)) / n);
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
      const i = Dt(this.a * 255).toString(16);
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
    const r = this.getHue(), t = Dt(this.getSaturation() * 100), n = Dt(this.getLightness() * 100);
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
      const h = Dt(n * 255);
      this.r = h, this.g = h, this.b = h;
    }
    let i = 0, a = 0, s = 0;
    const c = r / 60, l = (1 - Math.abs(2 * n - 1)) * t, u = l * (1 - Math.abs(c % 2 - 1));
    c >= 0 && c < 1 ? (i = l, a = u) : c >= 1 && c < 2 ? (i = u, a = l) : c >= 2 && c < 3 ? (a = l, s = u) : c >= 3 && c < 4 ? (a = u, s = l) : c >= 4 && c < 5 ? (i = u, s = l) : c >= 5 && c < 6 && (i = l, s = u);
    const d = n - l / 2;
    this.r = Dt((i + d) * 255), this.g = Dt((a + d) * 255), this.b = Dt((s + d) * 255);
  }
  fromHsv({
    h: r,
    s: t,
    v: n,
    a: o
  }) {
    this._h = r % 360, this._s = t, this._v = n, this.a = typeof o == "number" ? o : 1;
    const i = Dt(n * 255);
    if (this.r = i, this.g = i, this.b = i, t <= 0)
      return;
    const a = r / 60, s = Math.floor(a), c = a - s, l = Dt(n * (1 - t) * 255), u = Dt(n * (1 - t * c) * 255), d = Dt(n * (1 - t * (1 - c)) * 255);
    switch (s) {
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
  fromHsvString(r) {
    const t = Oc(r, Jd);
    this.fromHsv({
      h: t[0],
      s: t[1],
      v: t[2],
      a: t[3]
    });
  }
  fromHslString(r) {
    const t = Oc(r, Jd);
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
      o.includes("%") ? Dt(n / 100 * 255) : n
    ));
    this.r = t[0], this.g = t[1], this.b = t[2], this.a = t[3];
  }
};
const Yi = 2, Qd = 0.16, f1 = 0.05, h1 = 0.05, p1 = 0.15, hp = 5, pp = 4, x1 = [{
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
function Zd(e, r, t) {
  let n;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? n = t ? Math.round(e.h) - Yi * r : Math.round(e.h) + Yi * r : n = t ? Math.round(e.h) + Yi * r : Math.round(e.h) - Yi * r, n < 0 ? n += 360 : n >= 360 && (n -= 360), n;
}
function ef(e, r, t) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  let n;
  return t ? n = e.s - Qd * r : r === pp ? n = e.s + Qd : n = e.s + f1 * r, n > 1 && (n = 1), t && r === hp && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Math.round(n * 100) / 100;
}
function tf(e, r, t) {
  let n;
  return t ? n = e.v + h1 * r : n = e.v - p1 * r, n = Math.max(0, Math.min(1, n)), Math.round(n * 100) / 100;
}
function g1(e, r = {}) {
  const t = [], n = new Ki(e), o = n.toHsv();
  for (let i = hp; i > 0; i -= 1) {
    const a = new Ki({
      h: Zd(o, i, !0),
      s: ef(o, i, !0),
      v: tf(o, i, !0)
    });
    t.push(a);
  }
  t.push(n);
  for (let i = 1; i <= pp; i += 1) {
    const a = new Ki({
      h: Zd(o, i),
      s: ef(o, i),
      v: tf(o, i)
    });
    t.push(a);
  }
  return r.theme === "dark" ? x1.map(({
    index: i,
    amount: a
  }) => new Ki(r.backgroundColor || "#141414").mix(t[i], a).toHexString()) : t.map((i) => i.toHexString());
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
const rf = "data-rc-order", nf = "data-rc-priority", b1 = "rc-util-key", Cl = /* @__PURE__ */ new Map();
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
  return Array.from((Cl.get(e) || e).children).filter((r) => r.tagName === "STYLE");
}
function gp(e, r = {}) {
  if (!m1())
    return null;
  const {
    csp: t,
    prepend: n,
    priority: o = 0
  } = r, i = y1(n), a = i === "prependQueue", s = document.createElement("style");
  s.setAttribute(rf, i), a && o && s.setAttribute(nf, `${o}`), t != null && t.nonce && (s.nonce = t == null ? void 0 : t.nonce), s.innerHTML = e;
  const c = zu(r), {
    firstChild: l
  } = c;
  if (n) {
    if (a) {
      const u = (r.styles || Bu(c)).filter((d) => {
        if (!["prepend", "prependQueue"].includes(d.getAttribute(rf)))
          return !1;
        const h = Number(d.getAttribute(nf) || 0);
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
  const t = Cl.get(e);
  if (!t || !v1(document, t)) {
    const n = gp("", r), {
      parentNode: o
    } = n;
    Cl.set(e, o), e.removeChild(n);
  }
}
function C1(e, r, t = {}) {
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
function _1(e) {
  return mp(e) instanceof ShadowRoot;
}
function E1(e) {
  return _1(e) ? mp(e) : null;
}
let _l = {};
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
  _l = {};
}
function vp(e, r, t) {
  !r && !_l[t] && (e(!1, t), _l[t] = !0);
}
function As(e, r) {
  vp(R1, e, r);
}
function P1(e, r) {
  vp($1, e, r);
}
As.preMessage = O1;
As.resetWarned = T1;
As.noteOnce = P1;
function A1(e) {
  return e.replace(/-(.)/g, (r, t) => t.toUpperCase());
}
function N1(e, r) {
  As(e, `[@ant-design/icons] ${r}`);
}
function of(e) {
  return typeof e == "object" && typeof e.name == "string" && typeof e.theme == "string" && (typeof e.icon == "object" || typeof e.icon == "function");
}
function af(e = {}) {
  return Object.keys(e).reduce((r, t) => {
    const n = e[t];
    switch (t) {
      case "class":
        r.className = n, delete r.class;
        break;
      default:
        delete r[t], r[A1(t)] = n;
    }
    return r;
  }, {});
}
function El(e, r, t) {
  return t ? /* @__PURE__ */ Q.createElement(e.tag, {
    key: r,
    ...af(e.attrs),
    ...t
  }, (e.children || []).map((n, o) => El(n, `${r}-${e.tag}-${o}`))) : /* @__PURE__ */ Q.createElement(e.tag, {
    key: r,
    ...af(e.attrs)
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
`, j1 = (e) => {
  const {
    csp: r,
    prefixCls: t,
    layer: n
  } = ir(dp);
  let o = I1;
  t && (o = o.replace(/anticon/g, t)), n && (o = `@layer ${n} {
${o}
}`), ut(() => {
    const i = e.current, a = E1(i);
    C1(o, "@ant-design-icons", {
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
function M1({
  primaryColor: e,
  secondaryColor: r
}) {
  Qo.primaryColor = e, Qo.secondaryColor = r || bp(e), Qo.calculated = !!r;
}
function F1() {
  return {
    ...Qo
  };
}
const _o = (e) => {
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
  }), j1(c), N1(of(r), `icon should be icon definiton, but got ${r}`), !of(r))
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
_o.displayName = "IconReact";
_o.getTwoToneColors = F1;
_o.setTwoToneColors = M1;
function wp(e) {
  const [r, t] = yp(e);
  return _o.setTwoToneColors({
    primaryColor: r,
    secondaryColor: t
  });
}
function L1() {
  const e = _o.getTwoToneColors();
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
const Ns = /* @__PURE__ */ x.forwardRef((e, r) => {
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
    rootClassName: d
  } = x.useContext(dp), h = fe(d, u, {
    [`${u}-${n.name}`]: !!n.name,
    [`${u}-spin`]: !!o || n.name === "loading"
  }, t);
  let v = a;
  v === void 0 && s && (v = -1);
  const f = i ? {
    msTransform: `rotate(${i}deg)`,
    transform: `rotate(${i}deg)`
  } : void 0, [g, p] = yp(c);
  return /* @__PURE__ */ x.createElement("span", Ol({
    role: "img",
    "aria-label": n.name
  }, l, {
    ref: r,
    tabIndex: v,
    onClick: s,
    className: h
  }), /* @__PURE__ */ x.createElement(_o, {
    icon: n,
    primaryColor: g,
    secondaryColor: p,
    style: f
  }));
});
Ns.displayName = "AntdIcon";
Ns.getTwoToneColor = L1;
Ns.setTwoToneColor = wp;
var k1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, name: "check", theme: "outlined" }, D1 = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, z1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z" } }] }, name: "copy", theme: "outlined" }, B1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z" } }] }, name: "edit", theme: "outlined" }, V1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z" } }] }, name: "enter", theme: "outlined" }, H1 = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" }, W1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z" } }] }, name: "reload", theme: "outlined" };
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
const q1 = (e, r) => /* @__PURE__ */ x.createElement(Ns, Rl({}, e, {
  ref: r,
  icon: W1
})), Sp = /* @__PURE__ */ x.forwardRef(q1);
process.env.NODE_ENV !== "production" && (Sp.displayName = "ReloadOutlined");
var Ji = { exports: {} }, st = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sf;
function U1() {
  if (sf) return st;
  sf = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), f;
  f = Symbol.for("react.module.reference");
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
                case d:
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
  return st.ContextConsumer = a, st.ContextProvider = i, st.Element = e, st.ForwardRef = c, st.Fragment = t, st.Lazy = h, st.Memo = d, st.Portal = r, st.Profiler = o, st.StrictMode = n, st.Suspense = l, st.SuspenseList = u, st.isAsyncMode = function() {
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
    return g(p) === d;
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
    return typeof p == "string" || typeof p == "function" || p === t || p === o || p === n || p === l || p === u || p === v || typeof p == "object" && p !== null && (p.$$typeof === h || p.$$typeof === d || p.$$typeof === i || p.$$typeof === a || p.$$typeof === c || p.$$typeof === f || p.getModuleId !== void 0);
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
var cf;
function G1() {
  return cf || (cf = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), f = !1, g = !1, p = !1, y = !1, b = !1, C;
    C = Symbol.for("react.module.reference");
    function E(re) {
      return !!(typeof re == "string" || typeof re == "function" || re === t || re === o || b || re === n || re === l || re === u || y || re === v || f || g || p || typeof re == "object" && re !== null && (re.$$typeof === h || re.$$typeof === d || re.$$typeof === i || re.$$typeof === a || re.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      re.$$typeof === C || re.getModuleId !== void 0));
    }
    function m(re) {
      if (typeof re == "object" && re !== null) {
        var ve = re.$$typeof;
        switch (ve) {
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
                var be = ce && ce.$$typeof;
                switch (be) {
                  case s:
                  case a:
                  case c:
                  case h:
                  case d:
                  case i:
                    return be;
                  default:
                    return ve;
                }
            }
          case r:
            return ve;
        }
      }
    }
    var _ = a, w = i, A = e, N = c, D = t, V = h, U = d, L = r, z = o, H = n, T = l, I = u, P = !1, B = !1;
    function W(re) {
      return P || (P = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Y(re) {
      return B || (B = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function K(re) {
      return m(re) === a;
    }
    function Z(re) {
      return m(re) === i;
    }
    function G(re) {
      return typeof re == "object" && re !== null && re.$$typeof === e;
    }
    function te(re) {
      return m(re) === c;
    }
    function ie(re) {
      return m(re) === t;
    }
    function he(re) {
      return m(re) === h;
    }
    function pe(re) {
      return m(re) === d;
    }
    function xe(re) {
      return m(re) === r;
    }
    function Se(re) {
      return m(re) === o;
    }
    function ae(re) {
      return m(re) === n;
    }
    function se(re) {
      return m(re) === l;
    }
    function _e(re) {
      return m(re) === u;
    }
    ct.ContextConsumer = _, ct.ContextProvider = w, ct.Element = A, ct.ForwardRef = N, ct.Fragment = D, ct.Lazy = V, ct.Memo = U, ct.Portal = L, ct.Profiler = z, ct.StrictMode = H, ct.Suspense = T, ct.SuspenseList = I, ct.isAsyncMode = W, ct.isConcurrentMode = Y, ct.isContextConsumer = K, ct.isContextProvider = Z, ct.isElement = G, ct.isForwardRef = te, ct.isFragment = ie, ct.isLazy = he, ct.isMemo = pe, ct.isPortal = xe, ct.isProfiler = Se, ct.isStrictMode = ae, ct.isSuspense = se, ct.isSuspenseList = _e, ct.isValidElementType = E, ct.typeOf = m;
  }()), ct;
}
var lf;
function X1() {
  return lf || (lf = 1, process.env.NODE_ENV === "production" ? Ji.exports = U1() : Ji.exports = G1()), Ji.exports;
}
var Rc = X1();
const Br = /* @__PURE__ */ Object.create(null);
Br.open = "0";
Br.close = "1";
Br.ping = "2";
Br.pong = "3";
Br.message = "4";
Br.upgrade = "5";
Br.noop = "6";
const ba = /* @__PURE__ */ Object.create(null);
Object.keys(Br).forEach((e) => {
  ba[Br[e]] = e;
});
const $l = { type: "error", data: "parser error" }, Cp = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", _p = typeof ArrayBuffer == "function", Ep = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer, Hu = ({ type: e, data: r }, t, n) => Cp && r instanceof Blob ? t ? n(r) : uf(r, n) : _p && (r instanceof ArrayBuffer || Ep(r)) ? t ? n(r) : uf(new Blob([r]), n) : n(Br[e] + (r || "")), uf = (e, r) => {
  const t = new FileReader();
  return t.onload = function() {
    const n = t.result.split(",")[1];
    r("b" + (n || ""));
  }, t.readAsDataURL(e);
};
function df(e) {
  return e instanceof Uint8Array ? e : e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
let $c;
function K1(e, r) {
  if (Cp && e.data instanceof Blob)
    return e.data.arrayBuffer().then(df).then(r);
  if (_p && (e.data instanceof ArrayBuffer || Ep(e.data)))
    return r(df(e.data));
  Hu(e, !1, (t) => {
    $c || ($c = new TextEncoder()), r($c.encode(t));
  });
}
const ff = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Xo = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < ff.length; e++)
  Xo[ff.charCodeAt(e)] = e;
const Y1 = (e) => {
  let r = e.length * 0.75, t = e.length, n, o = 0, i, a, s, c;
  e[e.length - 1] === "=" && (r--, e[e.length - 2] === "=" && r--);
  const l = new ArrayBuffer(r), u = new Uint8Array(l);
  for (n = 0; n < t; n += 4)
    i = Xo[e.charCodeAt(n)], a = Xo[e.charCodeAt(n + 1)], s = Xo[e.charCodeAt(n + 2)], c = Xo[e.charCodeAt(n + 3)], u[o++] = i << 2 | a >> 4, u[o++] = (a & 15) << 4 | s >> 2, u[o++] = (s & 3) << 6 | c & 63;
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
  } : ba[t] ? e.length > 1 ? {
    type: ba[t],
    data: e.substring(1)
  } : {
    type: ba[t]
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
      K1(e, (t) => {
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
function Qi(e) {
  return e.reduce((r, t) => r + t.length, 0);
}
function Zi(e, r) {
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
          if (Qi(t) < 1)
            break;
          const c = Zi(t, 1);
          i = (c[0] & 128) === 128, o = c[0] & 127, o < 126 ? n = 3 : o === 126 ? n = 1 : n = 2;
        } else if (n === 1) {
          if (Qi(t) < 2)
            break;
          const c = Zi(t, 2);
          o = new DataView(c.buffer, c.byteOffset, c.length).getUint16(0), n = 3;
        } else if (n === 2) {
          if (Qi(t) < 8)
            break;
          const c = Zi(t, 8), l = new DataView(c.buffer, c.byteOffset, c.length), u = l.getUint32(0);
          if (u > Math.pow(2, 21) - 1) {
            s.enqueue($l);
            break;
          }
          o = u * Math.pow(2, 32) + l.getUint32(4), n = 3;
        } else {
          if (Qi(t) < o)
            break;
          const c = Zi(t, o);
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
function Nt(e) {
  if (e) return nb(e);
}
function nb(e) {
  for (var r in Nt.prototype)
    e[r] = Nt.prototype[r];
  return e;
}
Nt.prototype.on = Nt.prototype.addEventListener = function(e, r) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(r), this;
};
Nt.prototype.once = function(e, r) {
  function t() {
    this.off(e, t), r.apply(this, arguments);
  }
  return t.fn = r, this.on(e, t), this;
};
Nt.prototype.off = Nt.prototype.removeListener = Nt.prototype.removeAllListeners = Nt.prototype.removeEventListener = function(e, r) {
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
Nt.prototype.emit = function(e) {
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
Nt.prototype.emitReserved = Nt.prototype.emit;
Nt.prototype.listeners = function(e) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [];
};
Nt.prototype.hasListeners = function(e) {
  return !!this.listeners(e).length;
};
const Is = typeof Promise == "function" && typeof Promise.resolve == "function" ? (r) => Promise.resolve().then(r) : (r, t) => t(r, 0), br = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), ob = "arraybuffer";
function Tp(e, ...r) {
  return r.reduce((t, n) => (e.hasOwnProperty(n) && (t[n] = e[n]), t), {});
}
const ib = br.setTimeout, ab = br.clearTimeout;
function js(e, r) {
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
function db(e) {
  let r = {}, t = e.split("&");
  for (let n = 0, o = t.length; n < o; n++) {
    let i = t[n].split("=");
    r[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
  }
  return r;
}
class fb extends Error {
  constructor(r, t, n) {
    super(r), this.description = t, this.context = n, this.type = "TransportError";
  }
}
class qu extends Nt {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(r) {
    super(), this.writable = !1, js(this, r), this.opts = r, this.query = r.query, this.socket = r.socket, this.supportsBinary = !r.forceBase64;
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
    return super.emitReserved("error", new fb(r, t, n)), this;
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
let Ap = !1;
try {
  Ap = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const pb = Ap;
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
class zr extends Nt {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(r, t, n) {
    super(), this.createRequest = r, js(this, n), this._opts = n, this._method = n.method || "GET", this._uri = t, this._data = n.data !== void 0 ? n.data : null, this._create();
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
    attachEvent("onunload", hf);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in br ? "pagehide" : "unload";
    addEventListener(e, hf, !1);
  }
}
function hf() {
  for (let e in zr.requests)
    zr.requests.hasOwnProperty(e) && zr.requests[e].abort();
}
const mb = function() {
  const e = Np({
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
    return Object.assign(r, { xd: this.xd }, this.opts), new zr(Np, this.uri(), r);
  }
}
function Np(e) {
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
}, Cb = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, _b = [
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
  let o = Cb.exec(e || ""), i = {}, a = 14;
  for (; a--; )
    i[_b[a]] = o[a] || "";
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
const Pl = typeof addEventListener == "function" && typeof removeEventListener == "function", ya = [];
Pl && addEventListener("offline", () => {
  ya.forEach((e) => e());
}, !1);
class pn extends Nt {
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
    js(this, t), this.secure = t.secure != null ? t.secure : typeof location < "u" && location.protocol === "https:", t.hostname && !t.port && (t.port = this.secure ? "443" : "80"), this.hostname = t.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = t.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, t.transports.forEach((n) => {
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
    }, t), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = db(this.opts.query)), Pl && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, ya.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
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
    const r = this.opts.rememberUpgrade && pn.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
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
    this.readyState = "open", pn.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
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
    if (pn.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
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
        const n = ya.indexOf(this._offlineEventListener);
        n !== -1 && ya.splice(n, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", r, t), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
pn.protocol = $p;
class Rb extends pn {
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
    pn.priorWebsocketSuccess = !1;
    const o = () => {
      n || (t.send([{ type: "ping", data: "probe" }]), t.once("packet", (d) => {
        if (!n)
          if (d.type === "pong" && d.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", t), !t)
              return;
            pn.priorWebsocketSuccess = t.name === "websocket", this.transport.pause(() => {
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
    const a = (d) => {
      const h = new Error("probe error: " + d);
      h.transport = t.name, i(), this.emitReserved("upgradeError", h);
    };
    function s() {
      a("transport closed");
    }
    function c() {
      a("socket closed");
    }
    function l(d) {
      t && d.name !== t.name && i();
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
const Pb = typeof ArrayBuffer == "function", Ab = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer, jp = Object.prototype.toString, Nb = typeof Blob == "function" || typeof Blob < "u" && jp.call(Blob) === "[object BlobConstructor]", Ib = typeof File == "function" || typeof File < "u" && jp.call(File) === "[object FileConstructor]";
function Uu(e) {
  return Pb && (e instanceof ArrayBuffer || Ab(e)) || Nb && e instanceof Blob || Ib && e instanceof File;
}
function wa(e, r) {
  if (!e || typeof e != "object")
    return !1;
  if (Array.isArray(e)) {
    for (let t = 0, n = e.length; t < n; t++)
      if (wa(e[t]))
        return !0;
    return !1;
  }
  if (Uu(e))
    return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return wa(e.toJSON(), !0);
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && wa(e[t]))
      return !0;
  return !1;
}
function jb(e) {
  const r = [], t = e.data, n = e;
  return n.data = Al(t, r), n.attachments = r.length, { packet: n, buffers: r };
}
function Al(e, r) {
  if (!e)
    return e;
  if (Uu(e)) {
    const t = { _placeholder: !0, num: r.length };
    return r.push(e), t;
  } else if (Array.isArray(e)) {
    const t = new Array(e.length);
    for (let n = 0; n < e.length; n++)
      t[n] = Al(e[n], r);
    return t;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const t = {};
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (t[n] = Al(e[n], r));
    return t;
  }
  return e;
}
function Mb(e, r) {
  return e.data = Nl(e.data, r), delete e.attachments, e;
}
function Nl(e, r) {
  if (!e)
    return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < r.length)
      return r[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let t = 0; t < e.length; t++)
      e[t] = Nl(e[t], r);
  else if (typeof e == "object")
    for (const t in e)
      Object.prototype.hasOwnProperty.call(e, t) && (e[t] = Nl(e[t], r));
  return e;
}
const Fb = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], Lb = 5;
var rt;
(function(e) {
  e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK";
})(rt || (rt = {}));
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
    return (r.type === rt.EVENT || r.type === rt.ACK) && wa(r) ? this.encodeAsBinary({
      type: r.type === rt.EVENT ? rt.BINARY_EVENT : rt.BINARY_ACK,
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
    return (r.type === rt.BINARY_EVENT || r.type === rt.BINARY_ACK) && (t += r.attachments + "-"), r.nsp && r.nsp !== "/" && (t += r.nsp + ","), r.id != null && (t += r.id), r.data != null && (t += JSON.stringify(r.data, this.replacer)), t;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(r) {
    const t = jb(r), n = this.encodeAsString(t.packet), o = t.buffers;
    return o.unshift(n), o;
  }
}
function pf(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
class Gu extends Nt {
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
      const n = t.type === rt.BINARY_EVENT;
      n || t.type === rt.BINARY_ACK ? (t.type = n ? rt.EVENT : rt.ACK, this.reconstructor = new Db(t), t.attachments === 0 && super.emitReserved("decoded", t)) : super.emitReserved("decoded", t);
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
    if (rt[n.type] === void 0)
      throw new Error("unknown packet type " + n.type);
    if (n.type === rt.BINARY_EVENT || n.type === rt.BINARY_ACK) {
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
      case rt.CONNECT:
        return pf(t);
      case rt.DISCONNECT:
        return t === void 0;
      case rt.CONNECT_ERROR:
        return typeof t == "string" || pf(t);
      case rt.EVENT:
      case rt.BINARY_EVENT:
        return Array.isArray(t) && (typeof t[0] == "number" || typeof t[0] == "string" && Fb.indexOf(t[0]) === -1);
      case rt.ACK:
      case rt.BINARY_ACK:
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
class Db {
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
      const t = Mb(this.reconPack, this.buffers);
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
    return rt;
  },
  protocol: Lb
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
class Mp extends Nt {
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
      type: rt.EVENT,
      data: t
    };
    if (a.options = {}, a.options.compress = this.flags.compress !== !1, typeof t[t.length - 1] == "function") {
      const u = this.ids++, d = t.pop();
      this._registerAckCallback(u, d), a.id = u;
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
      type: rt.CONNECT,
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
        case rt.CONNECT:
          r.data && r.data.sid ? this.onconnect(r.data.sid, r.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case rt.EVENT:
        case rt.BINARY_EVENT:
          this.onevent(r);
          break;
        case rt.ACK:
        case rt.BINARY_ACK:
          this.onack(r);
          break;
        case rt.DISCONNECT:
          this.ondisconnect();
          break;
        case rt.CONNECT_ERROR:
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
        type: rt.ACK,
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
    return this.connected && this.packet({ type: rt.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
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
class Il extends Nt {
  constructor(r, t) {
    var n;
    super(), this.nsps = {}, this.subs = [], r && typeof r == "object" && (t = r, r = void 0), t = t || {}, t.path = t.path || "/socket.io", this.opts = t, js(this, t), this.reconnection(t.reconnection !== !1), this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0), this.reconnectionDelay(t.reconnectionDelay || 1e3), this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3), this.randomizationFactor((n = t.randomizationFactor) !== null && n !== void 0 ? n : 0.5), this.backoff = new Eo({
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
    return n ? this._autoConnect && !n.active && n.connect() : (n = new Mp(this, r, t), this.nsps[r] = n), n;
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
const Do = {};
function Sa(e, r) {
  typeof e == "object" && (r = e, e = void 0), r = r || {};
  const t = Tb(e, r.path || "/socket.io"), n = t.source, o = t.id, i = t.path, a = Do[o] && i in Do[o].nsps, s = r.forceNew || r["force new connection"] || r.multiplex === !1 || a;
  let c;
  return s ? c = new Il(n, r) : (Do[o] || (Do[o] = new Il(n, r)), c = Do[o]), t.query && !r.query && (r.query = t.queryKey), c.socket(t.path, r);
}
Object.assign(Sa, {
  Manager: Il,
  Socket: Mp,
  io: Sa,
  connect: Sa
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
function Ae(e) {
  "@babel/helpers - typeof";
  return Ae = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Ae(e);
}
var Vb = Symbol.for("react.element"), Hb = Symbol.for("react.transitional.element"), Wb = Symbol.for("react.fragment");
function Fp(e) {
  return (
    // Base object type
    e && Ae(e) === "object" && // React Element type
    (e.$$typeof === Vb || e.$$typeof === Hb) && // React Fragment type
    e.type === Wb
  );
}
function xn(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = [];
  return Q.Children.forEach(e, function(n) {
    n == null && !r.keepEmpty || (Array.isArray(n) ? t = t.concat(xn(n)) : Fp(n) && n.props ? t = t.concat(xn(n.props.children, r)) : t.push(n));
  }), t;
}
var jl = {}, Xu = [], qb = function(r) {
  Xu.push(r);
};
function uo(e, r) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var t = Xu.reduce(function(n, o) {
      return o(n ?? "", "warning");
    }, r);
    t && console.error("Warning: ".concat(t));
  }
}
function Ub(e, r) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var t = Xu.reduce(function(n, o) {
      return o(n ?? "", "note");
    }, r);
    t && console.warn("Note: ".concat(t));
  }
}
function Lp() {
  jl = {};
}
function kp(e, r, t) {
  !r && !jl[t] && (e(!1, t), jl[t] = !0);
}
function Ct(e, r) {
  kp(uo, e, r);
}
function Gb(e, r) {
  kp(Ub, e, r);
}
Ct.preMessage = qb;
Ct.resetWarned = Lp;
Ct.noteOnce = Gb;
function Xb(e, r) {
  if (Ae(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(e, r);
    if (Ae(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
function Dp(e) {
  var r = Xb(e, "string");
  return Ae(r) == "symbol" ? r : r + "";
}
function F(e, r, t) {
  return (r = Dp(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function xf(e, r) {
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
    r % 2 ? xf(Object(t), !0).forEach(function(n) {
      F(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : xf(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function ni(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function Kb(e) {
  return e && Ae(e) === "object" && ni(e.nativeElement) ? e.nativeElement : ni(e) ? e : null;
}
function Ca(e) {
  var r = Kb(e);
  if (r)
    return r;
  if (e instanceof Q.Component) {
    var t;
    return (t = Rd.findDOMNode) === null || t === void 0 ? void 0 : t.call(Rd, e);
  }
  return null;
}
function Ku(e, r, t) {
  var n = x.useRef({});
  return (!("value" in n.current) || t(n.current.condition, r)) && (n.current.value = e(), n.current.condition = r), n.current.value;
}
var Yb = Number(qm.split(".")[0]), Yu = function(r, t) {
  typeof r == "function" ? r(t) : Ae(r) === "object" && r && "current" in r && (r.current = t);
}, Ln = function() {
  for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
    t[n] = arguments[n];
  var o = t.filter(Boolean);
  return o.length <= 1 ? o[0] : function(i) {
    t.forEach(function(a) {
      Yu(a, i);
    });
  };
}, Ms = function() {
  for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
    t[n] = arguments[n];
  return Ku(function() {
    return Ln.apply(void 0, t);
  }, t, function(o, i) {
    return o.length !== i.length || o.every(function(a, s) {
      return a !== i[s];
    });
  });
}, mi = function(r) {
  var t, n;
  if (!r)
    return !1;
  if (zp(r) && Yb >= 19)
    return !0;
  var o = Rc.isMemo(r) ? r.type.type : r.type;
  return !(typeof o == "function" && !((t = o.prototype) !== null && t !== void 0 && t.render) && o.$$typeof !== Rc.ForwardRef || typeof r == "function" && !((n = r.prototype) !== null && n !== void 0 && n.render) && r.$$typeof !== Rc.ForwardRef);
};
function zp(e) {
  return /* @__PURE__ */ kh(e) && !Fp(e);
}
var Fs = function(r) {
  if (r && zp(r)) {
    var t = r;
    return t.props.propertyIsEnumerable("ref") ? t.props.ref : t.ref;
  }
  return null;
}, Ml = /* @__PURE__ */ x.createContext(null);
function Jb(e) {
  var r = e.children, t = e.onBatchResize, n = x.useRef(0), o = x.useRef([]), i = x.useContext(Ml), a = x.useCallback(function(s, c, l) {
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
  return /* @__PURE__ */ x.createElement(Ml.Provider, {
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
}(), Fl = typeof window < "u" && typeof document < "u" && window.document === document, Ba = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), Qb = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Ba) : function(e) {
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
      !Fl || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), ny ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !Fl || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
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
  return r || Ba;
}, Hp = Ls(0, 0, 0, 0);
function Va(e) {
  return parseFloat(e) || 0;
}
function gf(e) {
  for (var r = [], t = 1; t < arguments.length; t++)
    r[t - 1] = arguments[t];
  return r.reduce(function(n, o) {
    var i = e["border-" + o + "-width"];
    return n + Va(i);
  }, 0);
}
function iy(e) {
  for (var r = ["top", "right", "bottom", "left"], t = {}, n = 0, o = r; n < o.length; n++) {
    var i = o[n], a = e["padding-" + i];
    t[i] = Va(a);
  }
  return t;
}
function ay(e) {
  var r = e.getBBox();
  return Ls(0, 0, r.width, r.height);
}
function sy(e) {
  var r = e.clientWidth, t = e.clientHeight;
  if (!r && !t)
    return Hp;
  var n = fo(e).getComputedStyle(e), o = iy(n), i = o.left + o.right, a = o.top + o.bottom, s = Va(n.width), c = Va(n.height);
  if (n.boxSizing === "border-box" && (Math.round(s + i) !== r && (s -= gf(n, "left", "right") + i), Math.round(c + a) !== t && (c -= gf(n, "top", "bottom") + a)), !ly(e)) {
    var l = Math.round(s + i) - r, u = Math.round(c + a) - t;
    Math.abs(l) !== 1 && (s -= l), Math.abs(u) !== 1 && (c -= u);
  }
  return Ls(o.left, o.top, s, c);
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
  return Fl ? cy(e) ? ay(e) : sy(e) : Hp;
}
function dy(e) {
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
function Ls(e, r, t, n) {
  return { x: e, y: r, width: t, height: n };
}
var fy = (
  /** @class */
  function() {
    function e(r) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Ls(0, 0, 0, 0), this.target = r;
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
      var n = dy(t);
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
        t.has(r) || (t.set(r, new fy(r)), this.controller_.addObserver(this), this.controller_.refresh());
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
  return typeof Ba.ResizeObserver < "u" ? Ba.ResizeObserver : qp;
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
function mf(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Dp(n.key), n);
  }
}
function Wt(e, r, t) {
  return r && mf(e.prototype, r), t && mf(e, t), Object.defineProperty(e, "prototype", {
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
  if (r && (Ae(r) == "object" || typeof r == "function")) return r;
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
  var t = e.children, n = e.disabled, o = x.useRef(null), i = x.useRef(null), a = x.useContext(Ml), s = typeof t == "function", c = s ? t(o) : t, l = x.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  }), u = !s && /* @__PURE__ */ x.isValidElement(c) && mi(c), d = u ? Fs(c) : null, h = Ms(d, o), v = function() {
    var y;
    return Ca(o.current) || // Support `nativeElement` format
    (o.current && Ae(o.current) === "object" ? Ca((y = o.current) === null || y === void 0 ? void 0 : y.nativeElement) : null) || Ca(i.current);
  };
  x.useImperativeHandle(r, function() {
    return v();
  });
  var f = x.useRef(e);
  f.current = e;
  var g = x.useCallback(function(p) {
    var y = f.current, b = y.onResize, C = y.data, E = p.getBoundingClientRect(), m = E.width, _ = E.height, w = p.offsetWidth, A = p.offsetHeight, N = Math.floor(m), D = Math.floor(_);
    if (l.current.width !== N || l.current.height !== D || l.current.offsetWidth !== w || l.current.offsetHeight !== A) {
      var V = {
        width: N,
        height: D,
        offsetWidth: w,
        offsetHeight: A
      };
      l.current = V;
      var U = w === Math.round(m) ? m : w, L = A === Math.round(_) ? _ : A, z = q(q({}, V), {}, {
        offsetWidth: U,
        offsetHeight: L
      });
      a == null || a(z, p, C), b && Promise.resolve().then(function() {
        b(z, p);
      });
    }
  }, []);
  return x.useEffect(function() {
    var p = v();
    return p && !n && gy(p, g), function() {
      return my(p, g);
    };
  }, [o.current, n]), /* @__PURE__ */ x.createElement(by, {
    ref: i
  }, u ? /* @__PURE__ */ x.cloneElement(c, {
    ref: h
  }) : c);
}
var Xp = /* @__PURE__ */ x.forwardRef(yy);
process.env.NODE_ENV !== "production" && (Xp.displayName = "SingleObserver");
var wy = "rc-observer-key";
function Sy(e, r) {
  var t = e.children, n = typeof t == "function" ? [t] : xn(t);
  return process.env.NODE_ENV !== "production" && (n.length > 1 ? uo(!1, "Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.") : n.length === 0 && uo(!1, "`children` of ResizeObserver is empty. Nothing is in observe.")), n.map(function(o, i) {
    var a = (o == null ? void 0 : o.key) || "".concat(wy, "-").concat(i);
    return /* @__PURE__ */ x.createElement(Xp, bt({}, e, {
      key: a,
      ref: i === 0 ? r : void 0
    }), o);
  });
}
var Oo = /* @__PURE__ */ x.forwardRef(Sy);
process.env.NODE_ENV !== "production" && (Oo.displayName = "ResizeObserver");
Oo.Collection = Jb;
function Ll(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function Cy(e) {
  if (Array.isArray(e)) return Ll(e);
}
function Kp(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Qu(e, r) {
  if (e) {
    if (typeof e == "string") return Ll(e, r);
    var t = {}.toString.call(e).slice(8, -1);
    return t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set" ? Array.from(e) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Ll(e, r) : void 0;
  }
}
function _y() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $e(e) {
  return Cy(e) || Kp(e) || Qu(e) || _y();
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
var vf = 0, ks = /* @__PURE__ */ new Map();
function Qp(e) {
  ks.delete(e);
}
var Vr = function(r) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  vf += 1;
  var n = vf;
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
var bf = "data-rc-order", yf = "data-rc-priority", Ry = "rc-util-key", kl = /* @__PURE__ */ new Map();
function tx() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = e.mark;
  return r ? r.startsWith("data-") ? r : "data-".concat(r) : Ry;
}
function Ds(e) {
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
  c.setAttribute(bf, a), s && i && c.setAttribute(yf, "".concat(i)), t != null && t.nonce && (c.nonce = t == null ? void 0 : t.nonce), c.innerHTML = e;
  var l = Ds(r), u = l.firstChild;
  if (n) {
    if (s) {
      var d = (r.styles || Zu(l)).filter(function(h) {
        if (!["prepend", "prependQueue"].includes(h.getAttribute(bf)))
          return !1;
        var v = Number(h.getAttribute(yf) || 0);
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
function nx(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = Ds(r);
  return (r.styles || Zu(t)).find(function(n) {
    return n.getAttribute(tx(r)) === e;
  });
}
function si(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = nx(e, r);
  if (t) {
    var n = Ds(r);
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
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = Ds(t), o = Zu(n), i = q(q({}, t), {}, {
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
function Xt(e, r) {
  if (e == null) return {};
  var t, n, o = Py(e, r);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) t = i[n], r.indexOf(t) === -1 && {}.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
  }
  return o;
}
function Dl(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = /* @__PURE__ */ new Set();
  function o(i, a) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, c = n.has(i);
    if (Ct(!c, "Warning: There may be circular references"), c)
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
    if (i && a && Ae(i) === "object" && Ae(a) === "object") {
      var d = Object.keys(i);
      return d.length !== Object.keys(a).length ? !1 : d.every(function(h) {
        return o(i[h], a[h], l);
      });
    }
    return !1;
  }
  return o(e, r);
}
var Ay = "%";
function zl(e) {
  return e.join(Ay);
}
var Ny = /* @__PURE__ */ function() {
  function e(r) {
    Ht(this, e), F(this, "instanceId", void 0), F(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = r;
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
function jy() {
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
  return new Ny(e);
}
var vi = /* @__PURE__ */ x.createContext({
  hashPriority: "low",
  cache: jy(),
  defaultCache: !0
});
function My(e, r) {
  if (e.length !== r.length)
    return !1;
  for (var t = 0; t < e.length; t++)
    if (e[t] !== r[t])
      return !1;
  return !0;
}
var ed = /* @__PURE__ */ function() {
  function e() {
    Ht(this, e), F(this, "cache", void 0), F(this, "keys", void 0), F(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
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
            var d = ne(l, 2), h = d[1];
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
          var d = c.get(l);
          d ? d.map || (d.map = /* @__PURE__ */ new Map()) : c.set(l, {
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
          return !My(n, t);
        }), this.deleteByPath(this.cache, t);
    }
  }]), e;
}();
F(ed, "MAX_CACHE_SIZE", 20);
F(ed, "MAX_CACHE_OFFSET", 5);
var wf = 0, ox = /* @__PURE__ */ function() {
  function e(r) {
    Ht(this, e), F(this, "derivatives", void 0), F(this, "id", void 0), this.derivatives = Array.isArray(r) ? r : [r], this.id = wf, r.length === 0 && uo(r.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), wf += 1;
  }
  return Wt(e, [{
    key: "getDerivativeToken",
    value: function(t) {
      return this.derivatives.reduce(function(n, o) {
        return o(t, n);
      }, void 0);
    }
  }]), e;
}(), Ac = new ed();
function Bl(e) {
  var r = Array.isArray(e) ? e : [e];
  return Ac.has(r) || Ac.set(r, new ox(r)), Ac.get(r);
}
var Fy = /* @__PURE__ */ new WeakMap(), Nc = {};
function Ly(e, r) {
  for (var t = Fy, n = 0; n < r.length; n += 1) {
    var o = r[n];
    t.has(o) || t.set(o, /* @__PURE__ */ new WeakMap()), t = t.get(o);
  }
  return t.has(Nc) || t.set(Nc, e()), t.get(Nc);
}
var Sf = /* @__PURE__ */ new WeakMap();
function Zo(e) {
  var r = Sf.get(e) || "";
  return r || (Object.keys(e).forEach(function(t) {
    var n = e[t];
    r += t, n instanceof ox ? r += n.id : n && Ae(n) === "object" ? r += Zo(n) : r += n;
  }), r = ai(r), Sf.set(e, r)), r;
}
function Cf(e, r) {
  return ai("".concat(r, "_").concat(Zo(e)));
}
var Vl = Zt();
function nt(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function Ha(e, r, t) {
  var n, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (i)
    return e;
  var a = q(q({}, o), {}, (n = {}, F(n, ho, r), F(n, Pr, t), n)), s = Object.keys(a).map(function(c) {
    var l = a[c];
    return l ? "".concat(c, '="').concat(l, '"') : null;
  }).filter(function(c) {
    return c;
  }).join(" ");
  return "<style ".concat(s, ">").concat(e, "</style>");
}
var _a = function(r) {
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
    var s, c, l = ne(a, 2), u = l[0], d = l[1];
    if (n != null && (s = n.preserve) !== null && s !== void 0 && s[u])
      i[u] = d;
    else if ((typeof d == "string" || typeof d == "number") && !(n != null && (c = n.ignore) !== null && c !== void 0 && c[u])) {
      var h, v = _a(u, n == null ? void 0 : n.prefix);
      o[v] = typeof d == "number" && !(n != null && (h = n.unitless) !== null && h !== void 0 && h[u]) ? "".concat(d, "px") : String(d), i[u] = "var(".concat(v, ")");
    }
  }), [i, ky(o, t, {
    scope: n == null ? void 0 : n.scope
  })];
}, _f = process.env.NODE_ENV !== "test" && Zt() ? x.useLayoutEffect : x.useEffect, St = function(r, t) {
  var n = x.useRef(!0);
  _f(function() {
    return r(n.current);
  }, t), _f(function() {
    return n.current = !1, function() {
      n.current = !0;
    };
  }, []);
}, Ef = function(r, t) {
  St(function(n) {
    if (!n)
      return r();
  }, t);
}, Dy = q({}, x), Of = Dy.useInsertionEffect, zy = function(r, t, n) {
  x.useMemo(r, n), St(function() {
    return t(!0);
  }, n);
}, By = Of ? function(e, r, t) {
  return Of(function() {
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
function Xy() {
  return Hl;
}
const Ky = process.env.NODE_ENV === "production" ? Gy : Xy;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var ea = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : null;
  if (ea && typeof ea.webpackHotUpdate == "function") {
    var Yy = ea.webpackHotUpdate;
    ea.webpackHotUpdate = function() {
      return Hl = !0, setTimeout(function() {
        Hl = !1;
      }, 0), Yy.apply(void 0, arguments);
    };
  }
}
function td(e, r, t, n, o) {
  var i = x.useContext(vi), a = i.cache, s = [e].concat($e(r)), c = zl(s), l = Uy([c]), u = Ky(), d = function(g) {
    a.opUpdate(c, function(p) {
      var y = p || [void 0, void 0], b = ne(y, 2), C = b[0], E = C === void 0 ? 0 : C, m = b[1], _ = m;
      process.env.NODE_ENV !== "production" && m && u && (n == null || n(_, u), _ = null);
      var w = _ || t(), A = [E, w];
      return g ? g(A) : A;
    });
  };
  x.useMemo(
    function() {
      d();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [c]
    /* eslint-enable */
  );
  var h = a.opGet(c);
  process.env.NODE_ENV !== "production" && !h && (d(), h = a.opGet(c));
  var v = h[1];
  return By(function() {
    o == null || o(v);
  }, function(f) {
    return d(function(g) {
      var p = ne(g, 2), y = p[0], b = p[1];
      return f && y === 0 && (o == null || o(v)), [y + 1, b];
    }), function() {
      a.opUpdate(c, function(g) {
        var p = g || [], y = ne(p, 2), b = y[0], C = b === void 0 ? 0 : b, E = y[1], m = C - 1;
        return m === 0 ? (l(function() {
          (f || !a.opGet(c)) && (n == null || n(E, !1));
        }), null) : [C - 1, E];
      });
    };
  }, [c]), v;
}
var Jy = {}, Qy = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", Cn = /* @__PURE__ */ new Map();
function Zy(e) {
  Cn.set(e, (Cn.get(e) || 0) + 1);
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
  Cn.set(e, (Cn.get(e) || 0) - 1);
  var t = Array.from(Cn.keys()), n = t.filter(function(o) {
    var i = Cn.get(o) || 0;
    return i <= 0;
  });
  t.length - n.length > t2 && n.forEach(function(o) {
    e2(o, r), Cn.delete(o);
  });
}
var n2 = function(r, t, n, o) {
  var i = n.getDerivativeToken(r), a = q(q({}, i), t);
  return o && (a = o(a)), a;
}, ax = "token";
function o2(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = ir(vi), o = n.cache.instanceId, i = n.container, a = t.salt, s = a === void 0 ? "" : a, c = t.override, l = c === void 0 ? Jy : c, u = t.formatToken, d = t.getComputedToken, h = t.cssVar, v = Ly(function() {
    return Object.assign.apply(Object, [{}].concat($e(r)));
  }, r), f = Zo(v), g = Zo(l), p = h ? Zo(h) : "", y = td(ax, [s, e.id, f, g, p], function() {
    var b, C = d ? d(v, l, e) : n2(v, l, e, u), E = q({}, C), m = "";
    if (h) {
      var _ = ix(C, h.key, {
        prefix: h.prefix,
        ignore: h.ignore,
        unitless: h.unitless,
        preserve: h.preserve
      }), w = ne(_, 2);
      C = w[0], m = w[1];
    }
    var A = Cf(C, s);
    C._tokenKey = A, E._tokenKey = Cf(E, s);
    var N = (b = h == null ? void 0 : h.key) !== null && b !== void 0 ? b : A;
    C._themeKey = N, Zy(N);
    var D = "".concat(Qy, "-").concat(ai(A));
    return C._hashId = D, [C, D, E, m, (h == null ? void 0 : h.key) || ""];
  }, function(b) {
    r2(b[0]._themeKey, o);
  }, function(b) {
    var C = ne(b, 4), E = C[0], m = C[3];
    if (h && m) {
      var _ = Jr(m, ai("css-variables-".concat(E._themeKey)), {
        mark: Pr,
        prepend: "queue",
        attachTo: i,
        priority: -999
      });
      _[dn] = o, _.setAttribute(ho, E._themeKey);
    }
  });
  return y;
}
var i2 = function(r, t, n) {
  var o = ne(r, 5), i = o[2], a = o[3], s = o[4], c = n || {}, l = c.plain;
  if (!a)
    return null;
  var u = i._tokenKey, d = -999, h = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(d)
  }, v = Ha(a, s, u, h, l);
  return [d, u, v];
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
}, sx = "comm", cx = "rule", lx = "decl", s2 = "@import", c2 = "@namespace", l2 = "@keyframes", u2 = "@layer", ux = Math.abs, rd = String.fromCharCode;
function dx(e) {
  return e.trim();
}
function Ea(e, r, t) {
  return e.replace(r, t);
}
function d2(e, r, t) {
  return e.indexOf(r, t);
}
function to(e, r) {
  return e.charCodeAt(r) | 0;
}
function po(e, r, t) {
  return e.slice(r, t);
}
function Lr(e) {
  return e.length;
}
function f2(e) {
  return e.length;
}
function ta(e, r) {
  return r.push(e), e;
}
var zs = 1, xo = 1, fx = 0, wr = 0, At = 0, Ro = "";
function nd(e, r, t, n, o, i, a, s) {
  return { value: e, root: r, parent: t, type: n, props: o, children: i, line: zs, column: xo, length: a, return: "", siblings: s };
}
function h2() {
  return At;
}
function p2() {
  return At = wr > 0 ? to(Ro, --wr) : 0, xo--, At === 10 && (xo = 1, zs--), At;
}
function Ar() {
  return At = wr < fx ? to(Ro, wr++) : 0, xo++, At === 10 && (xo = 1, zs++), At;
}
function fn() {
  return to(Ro, wr);
}
function Oa() {
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
  return zs = xo = 1, fx = Lr(Ro = e), wr = 0, [];
}
function g2(e) {
  return Ro = "", e;
}
function Ic(e) {
  return dx(Bs(wr - 1, Wl(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function m2(e) {
  for (; (At = fn()) && At < 33; )
    Ar();
  return ci(e) > 2 || ci(At) > 3 ? "" : " ";
}
function v2(e, r) {
  for (; --r && Ar() && !(At < 48 || At > 102 || At > 57 && At < 65 || At > 70 && At < 97); )
    ;
  return Bs(e, Oa() + (r < 6 && fn() == 32 && Ar() == 32));
}
function Wl(e) {
  for (; Ar(); )
    switch (At) {
      // ] ) " '
      case e:
        return wr;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Wl(At);
        break;
      // (
      case 40:
        e === 41 && Wl(e);
        break;
      // \
      case 92:
        Ar();
        break;
    }
  return wr;
}
function b2(e, r) {
  for (; Ar() && e + At !== 57; )
    if (e + At === 84 && fn() === 47)
      break;
  return "/*" + Bs(r, wr - 1) + "*" + rd(e === 47 ? e : Ar());
}
function y2(e) {
  for (; !ci(fn()); )
    Ar();
  return Bs(e, wr);
}
function w2(e) {
  return g2(Ra("", null, null, null, [""], e = x2(e), 0, [0], e));
}
function Ra(e, r, t, n, o, i, a, s, c) {
  for (var l = 0, u = 0, d = a, h = 0, v = 0, f = 0, g = 1, p = 1, y = 1, b = 0, C = "", E = o, m = i, _ = n, w = C; p; )
    switch (f = b, b = Ar()) {
      // (
      case 40:
        if (f != 108 && to(w, d - 1) == 58) {
          d2(w += Ea(Ic(b), "&", "&\f"), "&\f", ux(l ? s[l - 1] : 0)) != -1 && (y = -1);
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
        w += m2(f);
        break;
      // \
      case 92:
        w += v2(Oa() - 1, 7);
        continue;
      // /
      case 47:
        switch (fn()) {
          case 42:
          case 47:
            ta(S2(b2(Ar(), Oa()), r, t, c), c), (ci(f || 1) == 5 || ci(fn() || 1) == 5) && Lr(w) && po(w, -1, void 0) !== " " && (w += " ");
            break;
          default:
            w += "/";
        }
        break;
      // {
      case 123 * g:
        s[l++] = Lr(w) * y;
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
            y == -1 && (w = Ea(w, /\f/g, "")), v > 0 && (Lr(w) - d || g === 0 && f === 47) && ta(v > 32 ? $f(w + ";", n, t, d - 1, c) : $f(Ea(w, " ", "") + ";", n, t, d - 2, c), c);
            break;
          // @ ;
          case 59:
            w += ";";
          // { rule/at-rule
          default:
            if (ta(_ = Rf(w, r, t, l, u, o, s, C, E = [], m = [], d, i), i), b === 123)
              if (u === 0)
                Ra(w, r, _, _, E, i, d, s, m);
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
                u ? Ra(e, _, _, n && ta(Rf(e, _, _, 0, 0, o, s, C, o, E = [], d, m), m), o, m, d, s, n ? E : m) : Ra(w, _, _, _, [""], m, 0, s, m);
              }
        }
        l = u = v = 0, g = y = 1, C = w = "", d = a;
        break;
      // :
      case 58:
        d = 1 + Lr(w), v = f;
      default:
        if (g < 1) {
          if (b == 123)
            --g;
          else if (b == 125 && g++ == 0 && p2() == 125)
            continue;
        }
        switch (w += rd(b), b * g) {
          // &
          case 38:
            y = u > 0 ? 1 : (w += "\f", -1);
            break;
          // ,
          case 44:
            s[l++] = (Lr(w) - 1) * y, y = 1;
            break;
          // @
          case 64:
            fn() === 45 && (w += Ic(Ar())), h = fn(), u = d = Lr(C = w += y2(Oa())), b++;
            break;
          // -
          case 45:
            f === 45 && Lr(w) == 2 && (g = 0);
        }
    }
  return i;
}
function Rf(e, r, t, n, o, i, a, s, c, l, u, d) {
  for (var h = o - 1, v = o === 0 ? i : [""], f = f2(v), g = 0, p = 0, y = 0; g < n; ++g)
    for (var b = 0, C = po(e, h + 1, h = ux(p = a[g])), E = e; b < f; ++b)
      (E = dx(p > 0 ? v[b] + " " + C : Ea(C, /&\f/g, v[b]))) && (c[y++] = E);
  return nd(e, r, t, o === 0 ? cx : s, c, l, u, d);
}
function S2(e, r, t, n) {
  return nd(e, r, t, sx, rd(h2()), po(e, 2, -2), 0, n);
}
function $f(e, r, t, n, o) {
  return nd(e, r, t, lx, po(e, 0, n), po(e, n + 1, -1), n, o);
}
function ql(e, r) {
  for (var t = "", n = 0; n < e.length; n++)
    t += r(e[n], n, e, r) || "";
  return t;
}
function C2(e, r, t, n) {
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
      if (!Lr(e.value = e.props.join(","))) return "";
  }
  return Lr(t = ql(e.children, n)) ? e.return = e.value + "{" + t + "}" : "";
}
function hx(e, r) {
  var t = r.path, n = r.parentSelectors;
  Ct(!1, "[Ant Design CSS-in-JS] ".concat(t ? "Error in ".concat(t, ": ") : "").concat(e).concat(n.length ? " Selector: ".concat(n.join(" | ")) : ""));
}
var _2 = function(r, t, n) {
  if (r === "content") {
    var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, i = ["normal", "none", "initial", "inherit", "unset"];
    (typeof t != "string" || i.indexOf(t) === -1 && !o.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")) && hx("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(t, "\"'`."), n);
  }
}, E2 = function(r, t, n) {
  r === "animation" && n.hashId && t !== "none" && hx("You seem to be using hashed animation '".concat(t, "', in which case 'animationName' with Keyframe as value is recommended."), n);
}, Tf = "data-ant-cssinjs-cache-path", px = "_FILE_STYLE__", Pn, xx = !0;
function O2() {
  if (!Pn && (Pn = {}, Zt())) {
    var e = document.createElement("div");
    e.className = Tf, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var r = getComputedStyle(e).content || "";
    r = r.replace(/^"/, "").replace(/"$/, ""), r.split(";").forEach(function(o) {
      var i = o.split(":"), a = ne(i, 2), s = a[0], c = a[1];
      Pn[s] = c;
    });
    var t = document.querySelector("style[".concat(Tf, "]"));
    if (t) {
      var n;
      xx = !1, (n = t.parentNode) === null || n === void 0 || n.removeChild(t);
    }
    document.body.removeChild(e);
  }
}
function R2(e) {
  return O2(), !!Pn[e];
}
function $2(e) {
  var r = Pn[e], t = null;
  if (r && Zt())
    if (xx)
      t = px;
    else {
      var n = document.querySelector("style[".concat(Pr, '="').concat(Pn[e], '"]'));
      n ? t = n.innerHTML : delete Pn[e];
    }
  return [t, r];
}
var gx = "_skip_check_", mx = "_multi_value_";
function $a(e) {
  var r = ql(w2(e), C2);
  return r.replace(/\{%%%\:[^;];}/g, ";");
}
function T2(e) {
  return Ae(e) === "object" && e && (gx in e || mx in e);
}
function Pf(e, r, t) {
  if (!r)
    return e;
  var n = ".".concat(r), o = t === "low" ? ":where(".concat(n, ")") : n, i = e.split(",").map(function(a) {
    var s, c = a.trim().split(/\s+/), l = c[0] || "", u = ((s = l.match(/^\w+/)) === null || s === void 0 ? void 0 : s[0]) || "";
    return l = "".concat(u).concat(o).concat(l.slice(u.length)), [l].concat($e(c.slice(1))).join(" ");
  });
  return i.join(",");
}
var P2 = function e(r) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = n.root, i = n.injectHash, a = n.parentSelectors, s = t.hashId, c = t.layer, l = t.path, u = t.hashPriority, d = t.transformers, h = d === void 0 ? [] : d, v = t.linters, f = v === void 0 ? [] : v, g = "", p = {};
  function y(E) {
    var m = E.getName(s);
    if (!p[m]) {
      var _ = e(E.style, t, {
        root: !1,
        parentSelectors: a
      }), w = ne(_, 1), A = w[0];
      p[m] = "@keyframes ".concat(E.getName(s)).concat(A);
    }
  }
  function b(E) {
    var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return E.forEach(function(_) {
      Array.isArray(_) ? b(_, m) : _ && m.push(_);
    }), m;
  }
  var C = b(Array.isArray(r) ? r : [r]);
  return C.forEach(function(E) {
    var m = typeof E == "string" && !o ? {} : E;
    if (typeof m == "string")
      g += "".concat(m, `
`);
    else if (m._keyframe)
      y(m);
    else {
      var _ = h.reduce(function(w, A) {
        var N;
        return (A == null || (N = A.visit) === null || N === void 0 ? void 0 : N.call(A, w)) || w;
      }, m);
      Object.keys(_).forEach(function(w) {
        var A = _[w];
        if (Ae(A) === "object" && A && (w !== "animationName" || !A._keyframe) && !T2(A)) {
          var N = !1, D = w.trim(), V = !1;
          (o || i) && s ? D.startsWith("@") ? N = !0 : D === "&" ? D = Pf("", s, u) : D = Pf(w, s, u) : o && !s && (D === "&" || D === "") && (D = "", V = !0);
          var U = e(A, t, {
            root: V,
            injectHash: N,
            parentSelectors: [].concat($e(a), [D])
          }), L = ne(U, 2), z = L[0], H = L[1];
          p = q(q({}, p), H), g += "".concat(D).concat(z);
        } else {
          let P = function(B, W) {
            process.env.NODE_ENV !== "production" && (Ae(A) !== "object" || !(A != null && A[gx])) && [_2, E2].concat($e(f)).forEach(function(Z) {
              return Z(B, W, {
                path: l,
                hashId: s,
                parentSelectors: a
              });
            });
            var Y = B.replace(/[A-Z]/g, function(Z) {
              return "-".concat(Z.toLowerCase());
            }), K = W;
            !a2[B] && typeof K == "number" && K !== 0 && (K = "".concat(K, "px")), B === "animationName" && W !== null && W !== void 0 && W._keyframe && (y(W), K = W.getName(s)), g += "".concat(Y, ":").concat(K, ";");
          };
          var T, I = (T = A == null ? void 0 : A.value) !== null && T !== void 0 ? T : A;
          Ae(A) === "object" && A !== null && A !== void 0 && A[mx] && Array.isArray(I) ? I.forEach(function(B) {
            P(w, B);
          }) : P(w, I);
        }
      });
    }
  }), o ? c && (g && (g = "@layer ".concat(c.name, " {").concat(g, "}")), c.dependencies && (p["@layer ".concat(c.name)] = c.dependencies.map(function(E) {
    return "@layer ".concat(E, ", ").concat(c.name, ";");
  }).join(`
`))) : g = "{".concat(g, "}"), [g, p];
};
function vx(e, r) {
  return ai("".concat(e.join("%")).concat(r));
}
function A2() {
  return null;
}
var bx = "style";
function Ul(e, r) {
  var t = e.token, n = e.path, o = e.hashId, i = e.layer, a = e.nonce, s = e.clientOnly, c = e.order, l = c === void 0 ? 0 : c, u = x.useContext(vi), d = u.autoClear, h = u.mock, v = u.defaultCache, f = u.hashPriority, g = u.container, p = u.ssrInline, y = u.transformers, b = u.linters, C = u.cache, E = u.layer, m = t._tokenKey, _ = [m];
  E && _.push("layer"), _.push.apply(_, $e(n));
  var w = Vl;
  process.env.NODE_ENV !== "production" && h !== void 0 && (w = h === "client");
  var A = td(
    bx,
    _,
    // Create cache if needed
    function() {
      var L = _.join("|");
      if (R2(L)) {
        var z = $2(L), H = ne(z, 2), T = H[0], I = H[1];
        if (T)
          return [T, m, I, {}, s, l];
      }
      var P = r(), B = P2(P, {
        hashId: o,
        hashPriority: f,
        layer: E ? i : void 0,
        path: n.join("-"),
        transformers: y,
        linters: b
      }), W = ne(B, 2), Y = W[0], K = W[1], Z = $a(Y), G = vx(_, Z);
      return [Z, m, G, K, s, l];
    },
    // Remove cache if no need
    function(L, z) {
      var H = ne(L, 3), T = H[2];
      (z || d) && Vl && si(T, {
        mark: Pr
      });
    },
    // Effect: Inject style here
    function(L) {
      var z = ne(L, 4), H = z[0];
      z[1];
      var T = z[2], I = z[3];
      if (w && H !== px) {
        var P = {
          mark: Pr,
          prepend: E ? !1 : "queue",
          attachTo: g,
          priority: l
        }, B = typeof a == "function" ? a() : a;
        B && (P.csp = {
          nonce: B
        });
        var W = [], Y = [];
        Object.keys(I).forEach(function(Z) {
          Z.startsWith("@layer") ? W.push(Z) : Y.push(Z);
        }), W.forEach(function(Z) {
          Jr($a(I[Z]), "_layer-".concat(Z), q(q({}, P), {}, {
            prepend: !0
          }));
        });
        var K = Jr(H, T, P);
        K[dn] = C.instanceId, K.setAttribute(ho, m), process.env.NODE_ENV !== "production" && K.setAttribute(Iy, _.join("|")), Y.forEach(function(Z) {
          Jr($a(I[Z]), "_effect-".concat(Z), P);
        });
      }
    }
  ), N = ne(A, 3), D = N[0], V = N[1], U = N[2];
  return function(L) {
    var z;
    if (!p || w || !v)
      z = /* @__PURE__ */ x.createElement(A2, null);
    else {
      var H;
      z = /* @__PURE__ */ x.createElement("style", bt({}, (H = {}, F(H, ho, V), F(H, Pr, U), H), {
        dangerouslySetInnerHTML: {
          __html: D
        }
      }));
    }
    return /* @__PURE__ */ x.createElement(x.Fragment, null, z, L);
  };
}
var N2 = function(r, t, n) {
  var o = ne(r, 6), i = o[0], a = o[1], s = o[2], c = o[3], l = o[4], u = o[5], d = n || {}, h = d.plain;
  if (l)
    return null;
  var v = i, f = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  };
  return v = Ha(i, a, s, f, h), c && Object.keys(c).forEach(function(g) {
    if (!t[g]) {
      t[g] = !0;
      var p = $a(c[g]), y = Ha(p, a, "_effect-".concat(g), f, h);
      g.startsWith("@layer") ? v = y + v : v += y;
    }
  }), [u, s, v];
}, yx = "cssVar", I2 = function(r, t) {
  var n = r.key, o = r.prefix, i = r.unitless, a = r.ignore, s = r.token, c = r.scope, l = c === void 0 ? "" : c, u = ir(vi), d = u.cache.instanceId, h = u.container, v = s._tokenKey, f = [].concat($e(r.path), [n, l, v]), g = td(yx, f, function() {
    var p = t(), y = ix(p, n, {
      prefix: o,
      unitless: i,
      ignore: a,
      scope: l
    }), b = ne(y, 2), C = b[0], E = b[1], m = vx(f, E);
    return [C, E, m, n];
  }, function(p) {
    var y = ne(p, 3), b = y[2];
    Vl && si(b, {
      mark: Pr
    });
  }, function(p) {
    var y = ne(p, 3), b = y[1], C = y[2];
    if (b) {
      var E = Jr(b, C, {
        mark: Pr,
        prepend: "queue",
        attachTo: h,
        priority: -999
      });
      E[dn] = d, E.setAttribute(ho, n);
    }
  });
  return g;
}, j2 = function(r, t, n) {
  var o = ne(r, 4), i = o[1], a = o[2], s = o[3], c = n || {}, l = c.plain;
  if (!i)
    return null;
  var u = -999, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  }, h = Ha(i, s, a, d, l);
  return [u, a, h];
}, zo;
zo = {}, F(zo, bx, N2), F(zo, ax, i2), F(zo, yx, j2);
var ar = /* @__PURE__ */ function() {
  function e(r, t) {
    Ht(this, e), F(this, "name", void 0), F(this, "style", void 0), F(this, "_keyframe", !0), this.name = r, this.style = t;
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
var od = /* @__PURE__ */ Cs({});
function M2(e) {
  return Zp(e) || Kp(e) || Qu(e) || ex();
}
function Dr(e, r) {
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
  var o = M2(r), i = o[0], a = o.slice(1), s;
  return !e && typeof i == "number" ? s = [] : Array.isArray(e) ? s = $e(e) : s = q({}, e), n && t === void 0 && a.length === 1 ? delete s[i][a[0]] : s[i] = wx(s[i], a, t, n), s;
}
function Or(e, r, t) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return r.length && n && t === void 0 && !Dr(e, r.slice(0, -1)) ? e : wx(e, r, t, n);
}
function F2(e) {
  return Ae(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function Af(e) {
  return Array.isArray(e) ? [] : {};
}
var L2 = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function Qn() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  var n = Af(r[0]);
  return r.forEach(function(o) {
    function i(a, s) {
      var c = new Set(s), l = Dr(o, a), u = Array.isArray(l);
      if (u || F2(l)) {
        if (!c.has(l)) {
          c.add(l);
          var d = Dr(n, a);
          u ? n = Or(n, a, []) : (!d || Ae(d) !== "object") && (n = Or(n, a, Af(l))), L2(l).forEach(function(h) {
            i([].concat($e(a), [h]), c);
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
  Gr = null, Lp();
}
let id = Sx;
process.env.NODE_ENV !== "production" && (id = (e, r, t) => {
  Ct(e, `[antd: ${r}] ${t}`), process.env.NODE_ENV === "test" && k2();
});
const Cx = /* @__PURE__ */ x.createContext({}), Kt = process.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: r
  } = x.useContext(Cx), t = (n, o, i) => {
    if (!n)
      if (r === !1 && o === "deprecated") {
        const a = Gr;
        Gr || (Gr = {}), Gr[e] = Gr[e] || [], Gr[e].includes(i || "") || Gr[e].push(i || ""), a || console.warn("[antd] There exists deprecated usage in your code:", Gr);
      } else
        process.env.NODE_ENV !== "production" && id(n, e, i);
  };
  return t.deprecated = (n, o, i, a) => {
    t(n, "deprecated", `\`${o}\` is deprecated. Please use \`${i}\` instead.${a ? ` ${a}` : ""}`);
  }, t;
} : () => {
  const e = () => {
  };
  return e.deprecated = Sx, e;
}, bi = id, D2 = /* @__PURE__ */ Cs(void 0);
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
const _x = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, Nf = {
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
  timePickerLocale: Object.assign({}, _x)
}, sr = "${label} is not a valid ${type}", go = {
  locale: "en",
  Pagination: z2,
  DatePicker: Nf,
  TimePicker: _x,
  Calendar: Nf,
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
let Ta = [];
const If = () => Ta.reduce((e, r) => Object.assign(Object.assign({}, e), r), go.Modal);
function H2(e) {
  if (e) {
    const r = Object.assign({}, e);
    return Ta.push(r), If(), () => {
      Ta = Ta.filter((t) => t !== r), If();
    };
  }
  Object.assign({}, go.Modal);
}
const ad = /* @__PURE__ */ Cs(void 0), W2 = (e, r) => {
  const t = x.useContext(ad), n = x.useMemo(() => {
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
    const i = Kt("LocaleProvider");
    process.env.NODE_ENV !== "production" && i(n === Ex, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  x.useEffect(() => H2(r == null ? void 0 : r.Modal), [r]);
  const o = x.useMemo(() => Object.assign(Object.assign({}, r), {
    exist: !0
  }), [r]);
  return /* @__PURE__ */ x.createElement(ad.Provider, {
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
function jc(e, r) {
  const t = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], n = t.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    n[o] = r(n[o] || 0, t[o] || "", o);
  return t[3] ? n[3] = t[3].includes("%") ? n[3] / 100 : n[3] : n[3] = 1, n;
}
const jf = (e, r, t) => t === 0 ? e : e / 100;
function Bo(e, r) {
  const t = r || 255;
  return e > t ? t : e < 0 ? 0 : e;
}
let Mt = class $x {
  constructor(r) {
    F(this, "isValid", !0), F(this, "r", 0), F(this, "g", 0), F(this, "b", 0), F(this, "a", 1), F(this, "_h", void 0), F(this, "_s", void 0), F(this, "_l", void 0), F(this, "_v", void 0), F(this, "_max", void 0), F(this, "_min", void 0), F(this, "_brightness", void 0);
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
    const d = n - l / 2;
    this.r = zt((i + d) * 255), this.g = zt((a + d) * 255), this.b = zt((s + d) * 255);
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
    const a = r / 60, s = Math.floor(a), c = a - s, l = zt(n * (1 - t) * 255), u = zt(n * (1 - t * c) * 255), d = zt(n * (1 - t * (1 - c)) * 255);
    switch (s) {
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
  fromHsvString(r) {
    const t = jc(r, jf);
    this.fromHsv({
      h: t[0],
      s: t[1],
      v: t[2],
      a: t[3]
    });
  }
  fromHslString(r) {
    const t = jc(r, jf);
    this.fromHsl({
      h: t[0],
      s: t[1],
      l: t[2],
      a: t[3]
    });
  }
  fromRgbString(r) {
    const t = jc(r, (n, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? zt(n / 100 * 255) : n
    ));
    this.r = t[0], this.g = t[1], this.b = t[2], this.a = t[3];
  }
};
var ra = 2, Mf = 0.16, q2 = 0.05, U2 = 0.05, G2 = 0.15, Tx = 5, Px = 4, X2 = [{
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
function Ff(e, r, t) {
  var n;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? n = t ? Math.round(e.h) - ra * r : Math.round(e.h) + ra * r : n = t ? Math.round(e.h) + ra * r : Math.round(e.h) - ra * r, n < 0 ? n += 360 : n >= 360 && (n -= 360), n;
}
function Lf(e, r, t) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var n;
  return t ? n = e.s - Mf * r : r === Px ? n = e.s + Mf : n = e.s + q2 * r, n > 1 && (n = 1), t && r === Tx && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Math.round(n * 100) / 100;
}
function kf(e, r, t) {
  var n;
  return t ? n = e.v + U2 * r : n = e.v - G2 * r, n = Math.max(0, Math.min(1, n)), Math.round(n * 100) / 100;
}
function ui(e) {
  for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = [], n = new Mt(e), o = n.toHsv(), i = Tx; i > 0; i -= 1) {
    var a = new Mt({
      h: Ff(o, i, !0),
      s: Lf(o, i, !0),
      v: kf(o, i, !0)
    });
    t.push(a);
  }
  t.push(n);
  for (var s = 1; s <= Px; s += 1) {
    var c = new Mt({
      h: Ff(o, s),
      s: Lf(o, s),
      v: kf(o, s)
    });
    t.push(c);
  }
  return r.theme === "dark" ? X2.map(function(l) {
    var u = l.index, d = l.amount;
    return new Mt(r.backgroundColor || "#141414").mix(t[u], d).toHexString();
  }) : t.map(function(l) {
    return l.toHexString();
  });
}
var Mc = {
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
var Xl = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
Xl.primary = Xl[5];
var Kl = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
Kl.primary = Kl[5];
var Wa = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
Wa.primary = Wa[5];
var Yl = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
Yl.primary = Yl[5];
var Jl = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
Jl.primary = Jl[5];
var Ql = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
Ql.primary = Ql[5];
var Zl = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
Zl.primary = Zl[5];
var qa = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
qa.primary = qa[5];
var eu = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
eu.primary = eu[5];
var tu = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
tu.primary = tu[5];
var ru = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
ru.primary = ru[5];
var nu = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
nu.primary = nu[5];
var Fc = {
  red: Gl,
  volcano: Xl,
  orange: Kl,
  gold: Wa,
  yellow: Yl,
  lime: Jl,
  green: Ql,
  cyan: Zl,
  blue: qa,
  geekblue: eu,
  purple: tu,
  magenta: ru,
  grey: nu
};
function K2(e, r) {
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
  } = e, d = t(c), h = t(o), v = t(i), f = t(a), g = t(s), p = n(l, u), y = e.colorLink || e.colorInfo, b = t(y), C = new Mt(f[1]).mix(new Mt(f[3]), 50).toHexString();
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
    colorErrorBg: f[1],
    colorErrorBgHover: f[2],
    colorErrorBgFilledHover: C,
    colorErrorBgActive: f[3],
    colorErrorBorder: f[3],
    colorErrorBorderHover: f[4],
    colorErrorHover: f[5],
    colorError: f[6],
    colorErrorActive: f[7],
    colorErrorTextHover: f[8],
    colorErrorText: f[9],
    colorErrorTextActive: f[10],
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
    colorBgMask: new Mt("#000").setA(0.45).toRgbString(),
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
function Pa(e) {
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
    lineHeight: Pa(t)
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
const pr = (e, r) => new Mt(e).setA(r).toRgbString(), Vo = (e, r) => new Mt(e).darken(r).toHexString(), rw = (e) => {
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
  Mc.pink = Mc.magenta, Fc.pink = Fc.magenta;
  const r = Object.keys(Rx).map((t) => {
    const n = e[t] === Mc[t] ? Fc[t] : ui(e[t]);
    return Array.from({
      length: 10
    }, () => 1).reduce((o, i, a) => (o[`${t}-${a + 1}`] = n[a], o[`${t}${a + 1}`] = n[a], o), {});
  }).reduce((t, n) => (t = Object.assign(Object.assign({}, t), n), t), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), r), K2(e, {
    generateColorPalettes: rw,
    generateNeutralColorPalettes: nw
  })), ew(e.fontSize)), tw(e)), Q2(e)), J2(e));
}
const Ax = Bl(ow), ou = {
  token: li,
  override: {
    override: li
  },
  hashed: !0
}, Nx = /* @__PURE__ */ Q.createContext(ou), Ua = "ant", sd = "anticon", iw = ["outlined", "borderless", "filled", "underlined"], aw = (e, r) => r || (e ? `${Ua}-${e}` : Ua), er = /* @__PURE__ */ x.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: aw,
  iconPrefixCls: sd
}), {
  Consumer: t4
} = er, Df = {};
function kn(e) {
  const r = x.useContext(er), {
    getPrefixCls: t,
    direction: n,
    getPopupContainer: o
  } = r, i = r[e];
  return Object.assign(Object.assign({
    classNames: Df,
    styles: Df
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
    const c = new Mt(a), l = ui(c.toRgbString());
    t[`${s}-color`] = n(c), t[`${s}-color-disabled`] = l[1], t[`${s}-color-hover`] = l[4], t[`${s}-color-active`] = l[6], t[`${s}-color-outline`] = c.clone().setA(0.2).toRgbString(), t[`${s}-color-deprecated-bg`] = l[0], t[`${s}-color-deprecated-border`] = l[2];
  };
  if (r.primaryColor) {
    o(r.primaryColor, "primary");
    const a = new Mt(r.primaryColor), s = ui(a.toRgbString());
    s.forEach((l, u) => {
      t[`primary-${u + 1}`] = l;
    }), t["primary-color-deprecated-l-35"] = n(a, (l) => l.lighten(35)), t["primary-color-deprecated-l-20"] = n(a, (l) => l.lighten(20)), t["primary-color-deprecated-t-20"] = n(a, (l) => l.tint(20)), t["primary-color-deprecated-t-50"] = n(a, (l) => l.tint(50)), t["primary-color-deprecated-f-12"] = n(a, (l) => l.setA(l.a * 0.12));
    const c = new Mt(s[0]);
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
  Zt() ? Jr(t, `${sw}-dynamic-theme`) : process.env.NODE_ENV !== "production" && bi(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
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
}, vo = /* @__PURE__ */ x.createContext(void 0), dw = (e) => {
  let {
    children: r,
    size: t
  } = e;
  const n = x.useContext(vo);
  return /* @__PURE__ */ x.createElement(vo.Provider, {
    value: t || n
  }, r);
};
function fw() {
  const e = ir(mo), r = ir(vo);
  return {
    componentDisabled: e,
    componentSize: r
  };
}
var Ix = /* @__PURE__ */ Wt(function e() {
  Ht(this, e);
}), jx = "CALC_UNIT", hw = new RegExp(jx, "g");
function Lc(e) {
  return typeof e == "number" ? "".concat(e).concat(jx) : e;
}
var pw = /* @__PURE__ */ function(e) {
  mn(t, e);
  var r = vn(t);
  function t(n, o) {
    var i;
    Ht(this, t), i = r.call(this), F(Ye(i), "result", ""), F(Ye(i), "unitlessCssVar", void 0), F(Ye(i), "lowPriority", void 0);
    var a = Ae(n);
    return i.unitlessCssVar = o, n instanceof t ? i.result = "(".concat(n.result, ")") : a === "number" ? i.result = Lc(n) : a === "string" && (i.result = n), i;
  }
  return Wt(t, [{
    key: "add",
    value: function(o) {
      return o instanceof t ? this.result = "".concat(this.result, " + ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " + ").concat(Lc(o))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(o) {
      return o instanceof t ? this.result = "".concat(this.result, " - ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " - ").concat(Lc(o))), this.lowPriority = !0, this;
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
    return Ht(this, t), o = r.call(this), F(Ye(o), "result", 0), n instanceof t ? o.result = n.result : typeof n == "number" && (o.result = n), o;
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
}, zf = function(r, t) {
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
function di(e) {
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
function jn(e, r) {
  var t = r || {}, n = t.defaultValue, o = t.value, i = t.onChange, a = t.postState, s = di(function() {
    return kc(o) ? o : kc(n) ? typeof n == "function" ? n() : n : typeof e == "function" ? e() : e;
  }), c = ne(s, 2), l = c[0], u = c[1], d = o !== void 0 ? o : l, h = a ? a(d) : d, v = Ut(i), f = di([d]), g = ne(f, 2), p = g[0], y = g[1];
  Ef(function() {
    var C = p[0];
    l !== C && v(l, C);
  }, [p]), Ef(function() {
    kc(o) || u(o);
  }, [o]);
  var b = Ut(function(C, E) {
    u(C, E), y([d], E);
  });
  return [h, b];
}
function Bf(e, r, t, n) {
  var o = q({}, r[e]);
  if (n != null && n.deprecatedTokens) {
    var i = n.deprecatedTokens;
    i.forEach(function(s) {
      var c = ne(s, 2), l = c[0], u = c[1];
      if (process.env.NODE_ENV !== "production" && Ct(!(o != null && o[l]), "Component Token `".concat(String(l), "` of ").concat(String(e), " is deprecated. Please use `").concat(String(u), "` instead.")), o != null && o[l] || o != null && o[u]) {
        var d;
        (d = o[u]) !== null && d !== void 0 || (o[u] = o == null ? void 0 : o[l]);
      }
    });
  }
  var a = q(q({}, t), o);
  return Object.keys(a).forEach(function(s) {
    a[s] === r[s] && delete a[s];
  }), a;
}
var Mx = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", iu = !0;
function Yt() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  if (!Mx)
    return Object.assign.apply(Object, [{}].concat(r));
  iu = !1;
  var n = {};
  return r.forEach(function(o) {
    if (Ae(o) === "object") {
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
var Vf = {};
function mw() {
}
var vw = function(r) {
  var t, n = r, o = mw;
  return Mx && typeof Proxy < "u" && (t = /* @__PURE__ */ new Set(), n = new Proxy(r, {
    get: function(a, s) {
      if (iu) {
        var c;
        (c = t) === null || c === void 0 || c.add(s);
      }
      return a[s];
    }
  }), o = function(a, s) {
    var c;
    Vf[a] = {
      global: Array.from(t),
      component: q(q({}, (c = Vf[a]) === null || c === void 0 ? void 0 : c.component), s)
    };
  }), {
    token: n,
    keys: t,
    flush: o
  };
};
function Hf(e, r, t) {
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
        return nt(i);
      }).join(","), ")");
    },
    min: function() {
      for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
        n[o] = arguments[o];
      return "min(".concat(n.map(function(i) {
        return nt(i);
      }).join(","), ")");
    }
  };
}
var yw = 1e3 * 60 * 10, ww = /* @__PURE__ */ function() {
  function e() {
    Ht(this, e), F(this, "map", /* @__PURE__ */ new Map()), F(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), F(this, "nextID", 0), F(this, "lastAccessBeat", /* @__PURE__ */ new Map()), F(this, "accessBeat", 0);
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
        return i && Ae(i) === "object" ? "obj_".concat(n.getObjectID(i)) : "".concat(Ae(i), "_").concat(i);
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
}(), Wf = new ww();
function Sw(e, r) {
  return Q.useMemo(function() {
    var t = Wf.get(r);
    if (t)
      return t;
    var n = e();
    return Wf.set(r, n), n;
  }, r);
}
var Cw = function() {
  return {};
};
function _w(e) {
  var r = e.useCSP, t = r === void 0 ? Cw : r, n = e.useToken, o = e.usePrefix, i = e.getResetStyles, a = e.getCommonStyle, s = e.getCompUnitless;
  function c(h, v, f, g) {
    var p = Array.isArray(h) ? h[0] : h;
    function y(A) {
      return "".concat(String(p)).concat(A.slice(0, 1).toUpperCase()).concat(A.slice(1));
    }
    var b = (g == null ? void 0 : g.unitless) || {}, C = typeof s == "function" ? s(h) : {}, E = q(q({}, C), {}, F({}, y("zIndexPopup"), !0));
    Object.keys(b).forEach(function(A) {
      E[y(A)] = b[A];
    });
    var m = q(q({}, g), {}, {
      unitless: E,
      prefixToken: y
    }), _ = u(h, v, f, m), w = l(p, f, m);
    return function(A) {
      var N = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : A, D = _(A, N), V = ne(D, 2), U = V[1], L = w(N), z = ne(L, 2), H = z[0], T = z[1];
      return [H, U, T];
    };
  }
  function l(h, v, f) {
    var g = f.unitless, p = f.injectStyle, y = p === void 0 ? !0 : p, b = f.prefixToken, C = f.ignore, E = function(w) {
      var A = w.rootCls, N = w.cssVar, D = N === void 0 ? {} : N, V = n(), U = V.realToken;
      return I2({
        path: [h],
        prefix: D.prefix,
        key: D.key,
        unitless: g,
        ignore: C,
        token: U,
        scope: A
      }, function() {
        var L = Hf(h, U, v), z = Bf(h, U, L, {
          deprecatedTokens: f == null ? void 0 : f.deprecatedTokens
        });
        return Object.keys(L).forEach(function(H) {
          z[b(H)] = z[H], delete z[H];
        }), z;
      }), null;
    }, m = function(w) {
      var A = n(), N = A.cssVar;
      return [function(D) {
        return y && N ? /* @__PURE__ */ Q.createElement(Q.Fragment, null, /* @__PURE__ */ Q.createElement(E, {
          rootCls: w,
          cssVar: N,
          component: h
        }), D) : D;
      }, N == null ? void 0 : N.key];
    };
    return m;
  }
  function u(h, v, f) {
    var g = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, p = Array.isArray(h) ? h : [h, h], y = ne(p, 1), b = y[0], C = p.join("-"), E = e.layer || {
      name: "antd"
    };
    return function(m) {
      var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : m, w = n(), A = w.theme, N = w.realToken, D = w.hashId, V = w.token, U = w.cssVar, L = o(), z = L.rootPrefixCls, H = L.iconPrefixCls, T = t(), I = U ? "css" : "js", P = Sw(function() {
        var G = /* @__PURE__ */ new Set();
        return U && Object.keys(g.unitless || {}).forEach(function(te) {
          G.add(_a(te, U.prefix)), G.add(_a(te, zf(b, U.prefix)));
        }), gw(I, G);
      }, [I, b, U == null ? void 0 : U.prefix]), B = bw(I), W = B.max, Y = B.min, K = {
        theme: A,
        token: V,
        hashId: D,
        nonce: function() {
          return T.nonce;
        },
        clientOnly: g.clientOnly,
        layer: E,
        // antd is always at top of styles
        order: g.order || -999
      };
      typeof i == "function" && Ul(q(q({}, K), {}, {
        clientOnly: !1,
        path: ["Shared", z]
      }), function() {
        return i(V, {
          prefix: {
            rootPrefixCls: z,
            iconPrefixCls: H
          },
          csp: T
        });
      });
      var Z = Ul(q(q({}, K), {}, {
        path: [C, m, H]
      }), function() {
        if (g.injectStyle === !1)
          return [];
        var G = vw(V), te = G.token, ie = G.flush, he = Hf(b, N, f), pe = ".".concat(m), xe = Bf(b, N, he, {
          deprecatedTokens: g.deprecatedTokens
        });
        U && he && Ae(he) === "object" && Object.keys(he).forEach(function(_e) {
          he[_e] = "var(".concat(_a(_e, zf(b, U.prefix)), ")");
        });
        var Se = Yt(te, {
          componentCls: pe,
          prefixCls: m,
          iconCls: ".".concat(H),
          antCls: ".".concat(z),
          calc: P,
          // @ts-ignore
          max: W,
          // @ts-ignore
          min: Y
        }, U ? he : xe), ae = v(Se, {
          hashId: D,
          prefixCls: m,
          rootPrefixCls: z,
          iconPrefixCls: H
        });
        ie(b, xe);
        var se = typeof a == "function" ? a(Se, m, _, g.resetFont) : null;
        return [g.resetStyle === !1 ? null : se, ae];
      });
      return [Z, D];
    };
  }
  function d(h, v, f) {
    var g = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, p = u(h, v, f, q({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, g)), y = function(C) {
      var E = C.prefixCls, m = C.rootCls, _ = m === void 0 ? E : m;
      return p(E, _), null;
    };
    return process.env.NODE_ENV !== "production" && (y.displayName = "SubStyle_".concat(String(Array.isArray(h) ? h.join(".") : h))), y;
  }
  return {
    genStyleHooks: c,
    genSubStyleComponent: d,
    genComponentStyleHook: u
  };
}
const Mn = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"], Ew = "5.24.6";
function Dc(e) {
  return e >= 0 && e <= 255;
}
function Ko(e, r) {
  const {
    r: t,
    g: n,
    b: o,
    a: i
  } = new Mt(e).toRgb();
  if (i < 1)
    return e;
  const {
    r: a,
    g: s,
    b: c
  } = new Mt(r).toRgb();
  for (let l = 0.01; l <= 1; l += 0.01) {
    const u = Math.round((t - a * (1 - l)) / l), d = Math.round((n - s * (1 - l)) / l), h = Math.round((o - c * (1 - l)) / l);
    if (Dc(u) && Dc(d) && Dc(h))
      return new Mt({
        r: u,
        g: d,
        b: h,
        a: Math.round(l * 100) / 100
      }).toRgbString();
  }
  return new Mt({
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
function Fx(e) {
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
    colorSplit: Ko(o.colorBorderSecondary, o.colorBgContainer),
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
    colorErrorOutline: Ko(o.colorErrorBg, o.colorBgContainer),
    colorWarningOutline: Ko(o.colorWarningBg, o.colorBgContainer),
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
    controlOutline: Ko(o.colorPrimaryBg, o.colorBgContainer),
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
      0 1px 2px -2px ${new Mt("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new Mt("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new Mt("rgba(0, 0, 0, 0.09)").toRgbString()}
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
var qf = function(e, r) {
  var t = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    r.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (t[n[o]] = e[n[o]]);
  return t;
};
const Lx = {
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
  } = r, i = qf(r, ["override"]);
  let a = Object.assign(Object.assign({}, n), {
    override: o
  });
  return a = Fx(a), i && Object.entries(i).forEach((s) => {
    let [c, l] = s;
    const {
      theme: u
    } = l, d = qf(l, ["theme"]);
    let h = d;
    u && (h = kx(Object.assign(Object.assign({}, a), d), {
      override: d
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
  } = Q.useContext(Nx), i = `${Ew}-${r || ""}`, a = t || Ax, [s, c, l] = o2(a, [li, e], {
    salt: i,
    override: n,
    getComputedToken: kx,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: Fx,
    cssVar: o && {
      prefix: o.prefix,
      key: o.key,
      unitless: Lx,
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
}, Dx = () => ({
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
}), Aw = (e, r, t, n) => {
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
}, Nw = (e, r) => ({
  outline: `${nt(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
  outlineOffset: r ?? 1,
  transition: "outline-offset 0s, outline 0s"
}), zx = (e, r) => ({
  "&:focus-visible": Object.assign({}, Nw(e, r))
}), Bx = (e) => ({
  [`.${e}`]: Object.assign(Object.assign({}, Dx()), {
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
  genSubStyleComponent: jw
} = _w({
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
    }, Bx((t = r == null ? void 0 : r.prefix.iconPrefixCls) !== null && t !== void 0 ? t : sd)];
  },
  getCommonStyle: Aw,
  getCompUnitless: () => Lx
});
function Mw(e, r) {
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
const Fw = (e, r) => {
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
}, Lw = Object.assign({}, x), {
  useId: Uf
} = Lw, kw = () => "", Dw = typeof Uf > "u" ? kw : Uf;
function zw(e, r, t) {
  var n, o;
  const i = Kt("ConfigProvider"), a = e || {}, s = a.inherit === !1 || !r ? Object.assign(Object.assign({}, ou), {
    hashed: (n = r == null ? void 0 : r.hashed) !== null && n !== void 0 ? n : ou.hashed,
    cssVar: r == null ? void 0 : r.cssVar
  }) : r, c = Dw();
  if (process.env.NODE_ENV !== "production") {
    const l = a.cssVar || s.cssVar, u = !!(typeof a.cssVar == "object" && (!((o = a.cssVar) === null || o === void 0) && o.key) || c);
    process.env.NODE_ENV !== "production" && i(!l || u, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return Ku(() => {
    var l, u;
    if (!e)
      return r;
    const d = Object.assign({}, s.components);
    Object.keys(e.components || {}).forEach((f) => {
      d[f] = Object.assign(Object.assign({}, d[f]), e.components[f]);
    });
    const h = `css-var-${c.replace(/:/g, "")}`, v = ((l = a.cssVar) !== null && l !== void 0 ? l : s.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: t == null ? void 0 : t.prefixCls
    }, typeof s.cssVar == "object" ? s.cssVar : {}), typeof a.cssVar == "object" ? a.cssVar : {}), {
      key: typeof a.cssVar == "object" && ((u = a.cssVar) === null || u === void 0 ? void 0 : u.key) || h
    });
    return Object.assign(Object.assign(Object.assign({}, s), a), {
      token: Object.assign(Object.assign({}, s.token), a.token),
      components: d,
      cssVar: v
    });
  }, [a, s], (l, u) => l.some((d, h) => {
    const v = u[h];
    return !Dl(d, v, !0);
  }));
}
var Bw = ["children"], Hx = /* @__PURE__ */ x.createContext({});
function Vw(e) {
  var r = e.children, t = Xt(e, Bw);
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
var un = "none", na = "appear", oa = "enter", ia = "leave", Gf = "none", Rr = "prepare", Zn = "start", eo = "active", cd = "end", Wx = "prepared";
function Xf(e, r) {
  var t = {};
  return t[e.toLowerCase()] = r.toLowerCase(), t["Webkit".concat(e)] = "webkit".concat(r), t["Moz".concat(e)] = "moz".concat(r), t["ms".concat(e)] = "MS".concat(r), t["O".concat(e)] = "o".concat(r.toLowerCase()), t;
}
function qw(e, r) {
  var t = {
    animationend: Xf("Animation", "AnimationEnd"),
    transitionend: Xf("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in r || delete t.animationend.animation, "TransitionEvent" in r || delete t.transitionend.transition), t;
}
var Uw = qw(Zt(), typeof window < "u" ? window : {}), qx = {};
if (Zt()) {
  var Gw = document.createElement("div");
  qx = Gw.style;
}
var aa = {};
function Ux(e) {
  if (aa[e])
    return aa[e];
  var r = Uw[e];
  if (r)
    for (var t = Object.keys(r), n = t.length, o = 0; o < n; o += 1) {
      var i = t[o];
      if (Object.prototype.hasOwnProperty.call(r, i) && i in qx)
        return aa[e] = r[i], aa[e];
    }
  return "";
}
var Gx = Ux("animationend"), Xx = Ux("transitionend"), Kx = !!(Gx && Xx), Kf = Gx || "animationend", Yf = Xx || "transitionend";
function Jf(e, r) {
  if (!e) return null;
  if (Ae(e) === "object") {
    var t = r.replace(/-\w/g, function(n) {
      return n[1].toUpperCase();
    });
    return e[t];
  }
  return "".concat(e, "-").concat(r);
}
const Xw = function(e) {
  var r = Pe();
  function t(o) {
    o && (o.removeEventListener(Yf, e), o.removeEventListener(Kf, e));
  }
  function n(o) {
    r.current && r.current !== o && t(r.current), o && o !== r.current && (o.addEventListener(Yf, e), o.addEventListener(Kf, e), r.current = o);
  }
  return x.useEffect(function() {
    return function() {
      t(r.current);
    };
  }, []), [n, t];
};
var Yx = Zt() ? Um : ut;
const Kw = function() {
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
var Yw = [Rr, Zn, eo, cd], Jw = [Rr, Wx], Jx = !1, Qw = !0;
function Qx(e) {
  return e === eo || e === cd;
}
const Zw = function(e, r, t) {
  var n = di(Gf), o = ne(n, 2), i = o[0], a = o[1], s = Kw(), c = ne(s, 2), l = c[0], u = c[1];
  function d() {
    a(Rr, !0);
  }
  var h = r ? Jw : Yw;
  return Yx(function() {
    if (i !== Gf && i !== cd) {
      var v = h.indexOf(i), f = h[v + 1], g = t(i);
      g === Jx ? a(f, !0) : f && l(function(p) {
        function y() {
          p.isCanceled() || a(f, !0);
        }
        g === !0 ? y() : Promise.resolve(g).then(y);
      });
    }
  }, [e, i]), x.useEffect(function() {
    return function() {
      u();
    };
  }, []), [d, i];
};
function eS(e, r, t, n) {
  var o = n.motionEnter, i = o === void 0 ? !0 : o, a = n.motionAppear, s = a === void 0 ? !0 : a, c = n.motionLeave, l = c === void 0 ? !0 : c, u = n.motionDeadline, d = n.motionLeaveImmediately, h = n.onAppearPrepare, v = n.onEnterPrepare, f = n.onLeavePrepare, g = n.onAppearStart, p = n.onEnterStart, y = n.onLeaveStart, b = n.onAppearActive, C = n.onEnterActive, E = n.onLeaveActive, m = n.onAppearEnd, _ = n.onEnterEnd, w = n.onLeaveEnd, A = n.onVisibleChanged, N = di(), D = ne(N, 2), V = D[0], U = D[1], L = Ww(un), z = ne(L, 2), H = z[0], T = z[1], I = di(null), P = ne(I, 2), B = P[0], W = P[1], Y = H(), K = Pe(!1), Z = Pe(null);
  function G() {
    return t();
  }
  var te = Pe(!1);
  function ie() {
    T(un), W(null, !0);
  }
  var he = Ut(function(Te) {
    var S = H();
    if (S !== un) {
      var $ = G();
      if (!(Te && !Te.deadline && Te.target !== $)) {
        var O = te.current, j;
        S === na && O ? j = m == null ? void 0 : m($, Te) : S === oa && O ? j = _ == null ? void 0 : _($, Te) : S === ia && O && (j = w == null ? void 0 : w($, Te)), O && j !== !1 && ie();
      }
    }
  }), pe = Xw(he), xe = ne(pe, 1), Se = xe[0], ae = function(S) {
    switch (S) {
      case na:
        return F(F(F({}, Rr, h), Zn, g), eo, b);
      case oa:
        return F(F(F({}, Rr, v), Zn, p), eo, C);
      case ia:
        return F(F(F({}, Rr, f), Zn, y), eo, E);
      default:
        return {};
    }
  }, se = x.useMemo(function() {
    return ae(Y);
  }, [Y]), _e = Zw(Y, !e, function(Te) {
    if (Te === Rr) {
      var S = se[Rr];
      return S ? S(G()) : Jx;
    }
    if (ce in se) {
      var $;
      W((($ = se[ce]) === null || $ === void 0 ? void 0 : $.call(se, G(), null)) || null);
    }
    return ce === eo && Y !== un && (Se(G()), u > 0 && (clearTimeout(Z.current), Z.current = setTimeout(function() {
      he({
        deadline: !0
      });
    }, u))), ce === Wx && ie(), Qw;
  }), re = ne(_e, 2), ve = re[0], ce = re[1], be = Qx(ce);
  te.current = be;
  var Ce = Pe(null);
  Yx(function() {
    if (!(K.current && Ce.current === r)) {
      U(r);
      var Te = K.current;
      K.current = !0;
      var S;
      !Te && r && s && (S = na), Te && r && i && (S = oa), (Te && !r && l || !Te && d && !r && l) && (S = ia);
      var $ = ae(S);
      S && (e || $[Rr]) ? (T(S), ve()) : T(un), Ce.current = r;
    }
  }, [r]), ut(function() {
    // Cancel appear
    (Y === na && !s || // Cancel enter
    Y === oa && !i || // Cancel leave
    Y === ia && !l) && T(un);
  }, [s, i, l]), ut(function() {
    return function() {
      K.current = !1, clearTimeout(Z.current);
    };
  }, []);
  var we = x.useRef(!1);
  ut(function() {
    V && (we.current = !0), V !== void 0 && Y === un && ((we.current || V) && (A == null || A(V)), we.current = !0);
  }, [V, Y]);
  var ze = B;
  return se[Rr] && ce === Zn && (ze = q({
    transition: "none"
  }, ze)), [Y, ce, ze, V ?? r];
}
function tS(e) {
  var r = e;
  Ae(e) === "object" && (r = e.transitionSupport);
  function t(o, i) {
    return !!(o.motionName && r && i !== !1);
  }
  var n = /* @__PURE__ */ x.forwardRef(function(o, i) {
    var a = o.visible, s = a === void 0 ? !0 : a, c = o.removeOnLeave, l = c === void 0 ? !0 : c, u = o.forceRender, d = o.children, h = o.motionName, v = o.leavedClassName, f = o.eventProps, g = x.useContext(Hx), p = g.motion, y = t(o, p), b = Pe(), C = Pe();
    function E() {
      try {
        return b.current instanceof HTMLElement ? b.current : Ca(C.current);
      } catch {
        return null;
      }
    }
    var m = eS(y, s, E, o), _ = ne(m, 4), w = _[0], A = _[1], N = _[2], D = _[3], V = x.useRef(D);
    D && (V.current = !0);
    var U = x.useCallback(function(P) {
      b.current = P, Yu(i, P);
    }, [i]), L, z = q(q({}, f), {}, {
      visible: s
    });
    if (!d)
      L = null;
    else if (w === un)
      D ? L = d(q({}, z), U) : !l && V.current && v ? L = d(q(q({}, z), {}, {
        className: v
      }), U) : u || !l && !v ? L = d(q(q({}, z), {}, {
        style: {
          display: "none"
        }
      }), U) : L = null;
    else {
      var H;
      A === Rr ? H = "prepare" : Qx(A) ? H = "active" : A === Zn && (H = "start");
      var T = Jf(h, "".concat(w, "-").concat(H));
      L = d(q(q({}, z), {}, {
        className: fe(Jf(h, w), F(F({}, T, T && H), h, typeof h == "string")),
        style: N
      }), U);
    }
    if (/* @__PURE__ */ x.isValidElement(L) && mi(L)) {
      var I = Fs(L);
      I || (L = /* @__PURE__ */ x.cloneElement(L, {
        ref: U
      }));
    }
    return /* @__PURE__ */ x.createElement(Hw, {
      ref: C
    }, L);
  });
  return n.displayName = "CSSMotion", n;
}
const yi = tS(Kx);
var au = "add", su = "keep", cu = "remove", zc = "removed";
function rS(e) {
  var r;
  return e && Ae(e) === "object" && "key" in e ? r = e : r = {
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
    for (var u = !1, d = n; d < o; d += 1) {
      var h = a[d];
      if (h.key === l.key) {
        n < d && (t = t.concat(a.slice(n, d).map(function(v) {
          return q(q({}, v), {}, {
            status: au
          });
        })), n = d), t.push(q(q({}, h), {}, {
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
      var d = u.key, h = u.status;
      return d !== l || h !== cu;
    }), t.forEach(function(u) {
      u.key === l && (u.status = su);
    });
  }), t;
}
var oS = ["component", "children", "onVisibleChanged", "onAllRemoved"], iS = ["status"], aS = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function sS(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : yi, t = /* @__PURE__ */ function(n) {
    mn(i, n);
    var o = vn(i);
    function i() {
      var a;
      Ht(this, i);
      for (var s = arguments.length, c = new Array(s), l = 0; l < s; l++)
        c[l] = arguments[l];
      return a = o.call.apply(o, [this].concat(c)), F(Ye(a), "state", {
        keyEntities: []
      }), F(Ye(a), "removeKey", function(u) {
        a.setState(function(d) {
          var h = d.keyEntities.map(function(v) {
            return v.key !== u ? v : q(q({}, v), {}, {
              status: zc
            });
          });
          return {
            keyEntities: h
          };
        }, function() {
          var d = a.state.keyEntities, h = d.filter(function(v) {
            var f = v.status;
            return f !== zc;
          }).length;
          h === 0 && a.props.onAllRemoved && a.props.onAllRemoved();
        });
      }), a;
    }
    return Wt(i, [{
      key: "render",
      value: function() {
        var s = this, c = this.state.keyEntities, l = this.props, u = l.component, d = l.children, h = l.onVisibleChanged;
        l.onAllRemoved;
        var v = Xt(l, oS), f = u || x.Fragment, g = {};
        return aS.forEach(function(p) {
          g[p] = v[p], delete v[p];
        }), delete v.keys, /* @__PURE__ */ x.createElement(f, v, c.map(function(p, y) {
          var b = p.status, C = Xt(p, iS), E = b === au || b === su;
          return /* @__PURE__ */ x.createElement(r, bt({}, g, {
            key: C.key,
            visible: E,
            eventProps: C,
            onVisibleChanged: function(_) {
              h == null || h(_, {
                key: C.key
              }), _ || s.removeKey(C.key);
            }
          }), function(m, _) {
            return d(q(q({}, m), {}, {
              index: y
            }), _);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(s, c) {
        var l = s.keys, u = c.keyEntities, d = lu(l), h = nS(u, d);
        return {
          keyEntities: h.filter(function(v) {
            var f = u.find(function(g) {
              var p = g.key;
              return v.key === p;
            });
            return !(f && f.status === zc && v.status === cu);
          })
        };
      }
    }]), i;
  }(x.Component);
  return F(t, "defaultProps", {
    component: "div"
  }), t;
}
sS(Kx);
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
  return Kt("ConfigProvider").deprecated(r === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
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
const dS = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let eg;
function fS() {
  return eg || Ua;
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
  r !== void 0 && (eg = r), n && hS(n) && (process.env.NODE_ENV !== "production" && bi(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), lw(fS(), n));
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
    splitter: d,
    virtual: h,
    dropdownMatchSelectWidth: v,
    popupMatchSelectWidth: f,
    popupOverflow: g,
    legacyLocale: p,
    parentContext: y,
    iconPrefixCls: b,
    theme: C,
    componentDisabled: E,
    segmented: m,
    statistic: _,
    spin: w,
    calendar: A,
    carousel: N,
    cascader: D,
    collapse: V,
    typography: U,
    checkbox: L,
    descriptions: z,
    divider: H,
    drawer: T,
    skeleton: I,
    steps: P,
    image: B,
    layout: W,
    list: Y,
    mentions: K,
    modal: Z,
    progress: G,
    result: te,
    slider: ie,
    breadcrumb: he,
    menu: pe,
    pagination: xe,
    input: Se,
    textArea: ae,
    empty: se,
    badge: _e,
    radio: re,
    rate: ve,
    switch: ce,
    transfer: be,
    avatar: Ce,
    message: we,
    tag: ze,
    table: Te,
    card: S,
    tabs: $,
    timeline: O,
    timePicker: j,
    upload: M,
    notification: le,
    tree: Je,
    colorPicker: We,
    datePicker: je,
    rangePicker: et,
    flex: Ve,
    wave: Le,
    dropdown: ge,
    warning: Ee,
    tour: ue,
    tooltip: Re,
    popover: dt,
    popconfirm: Jt,
    floatButtonGroup: Lt,
    variant: J,
    inputNumber: k,
    treeSelect: ke
  } = e, Ge = x.useCallback((Be, R) => {
    const {
      prefixCls: ee
    } = e;
    if (R)
      return R;
    const oe = ee || y.getPrefixCls("");
    return Be ? `${oe}-${Be}` : oe;
  }, [y.getPrefixCls, e.prefixCls]), Xe = b || y.iconPrefixCls || sd, me = t || y.csp;
  Fw(Xe, me);
  const it = zw(C, y.theme, {
    prefixCls: Ge("")
  });
  process.env.NODE_ENV !== "production" && (uu = uu || !!it);
  const De = {
    csp: me,
    autoInsertSpaceInButton: n,
    alert: o,
    anchor: i,
    locale: s || p,
    direction: l,
    space: u,
    splitter: d,
    virtual: h,
    popupMatchSelectWidth: f ?? v,
    popupOverflow: g,
    getPrefixCls: Ge,
    iconPrefixCls: Xe,
    theme: it,
    segmented: m,
    statistic: _,
    spin: w,
    calendar: A,
    carousel: N,
    cascader: D,
    collapse: V,
    typography: U,
    checkbox: L,
    descriptions: z,
    divider: H,
    drawer: T,
    skeleton: I,
    steps: P,
    image: B,
    input: Se,
    textArea: ae,
    layout: W,
    list: Y,
    mentions: K,
    modal: Z,
    progress: G,
    result: te,
    slider: ie,
    breadcrumb: he,
    menu: pe,
    pagination: xe,
    empty: se,
    badge: _e,
    radio: re,
    rate: ve,
    switch: ce,
    transfer: be,
    avatar: Ce,
    message: we,
    tag: ze,
    table: Te,
    card: S,
    tabs: $,
    timeline: O,
    timePicker: j,
    upload: M,
    notification: le,
    tree: Je,
    colorPicker: We,
    datePicker: je,
    rangePicker: et,
    flex: Ve,
    wave: Le,
    dropdown: ge,
    warning: Ee,
    tour: ue,
    tooltip: Re,
    popover: dt,
    popconfirm: Jt,
    floatButtonGroup: Lt,
    variant: J,
    inputNumber: k,
    treeSelect: ke
  };
  process.env.NODE_ENV !== "production" && Kt("ConfigProvider")(!("autoInsertSpaceInButton" in e), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const Ke = Object.assign({}, y);
  Object.keys(De).forEach((Be) => {
    De[Be] !== void 0 && (Ke[Be] = De[Be]);
  }), dS.forEach((Be) => {
    const R = e[Be];
    R && (Ke[Be] = R);
  }), typeof n < "u" && (Ke.button = Object.assign({
    autoInsertSpace: n
  }, Ke.button));
  const mt = Ku(() => Ke, Ke, (Be, R) => {
    const ee = Object.keys(Be), oe = Object.keys(R);
    return ee.length !== oe.length || ee.some((Oe) => Be[Oe] !== R[Oe]);
  }), {
    layer: Qt
  } = x.useContext(vi), fr = x.useMemo(() => ({
    prefixCls: Xe,
    csp: me,
    layer: Qt ? "antd" : void 0
  }), [Xe, me, Qt]);
  let Me = /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ x.createElement(lS, {
    dropdownMatchSelectWidth: v
  }), r);
  const pt = x.useMemo(() => {
    var Be, R, ee, oe;
    return Qn(((Be = go.Form) === null || Be === void 0 ? void 0 : Be.defaultValidateMessages) || {}, ((ee = (R = mt.locale) === null || R === void 0 ? void 0 : R.Form) === null || ee === void 0 ? void 0 : ee.defaultValidateMessages) || {}, ((oe = mt.form) === null || oe === void 0 ? void 0 : oe.validateMessages) || {}, (a == null ? void 0 : a.validateMessages) || {});
  }, [mt, a == null ? void 0 : a.validateMessages]);
  Object.keys(pt).length > 0 && (Me = /* @__PURE__ */ x.createElement(D2.Provider, {
    value: pt
  }, Me)), s && (Me = /* @__PURE__ */ x.createElement(Ox, {
    locale: s,
    _ANT_MARK__: Ex
  }, Me)), Me = /* @__PURE__ */ x.createElement(od.Provider, {
    value: fr
  }, Me), c && (Me = /* @__PURE__ */ x.createElement(dw, {
    size: c
  }, Me)), Me = /* @__PURE__ */ x.createElement(cS, null, Me);
  const kt = x.useMemo(() => {
    const Be = it || {}, {
      algorithm: R,
      token: ee,
      components: oe,
      cssVar: Oe
    } = Be, Qe = uS(Be, ["algorithm", "token", "components", "cssVar"]), Ze = R && (!Array.isArray(R) || R.length > 0) ? Bl(R) : Ax, Fe = {};
    Object.entries(oe || {}).forEach((yt) => {
      let [at, ht] = yt;
      const qe = Object.assign({}, ht);
      "algorithm" in qe && (qe.algorithm === !0 ? qe.theme = Ze : (Array.isArray(qe.algorithm) || typeof qe.algorithm == "function") && (qe.theme = Bl(qe.algorithm)), delete qe.algorithm), Fe[at] = qe;
    });
    const Ne = Object.assign(Object.assign({}, li), ee);
    return Object.assign(Object.assign({}, Qe), {
      theme: Ze,
      token: Ne,
      components: Fe,
      override: Object.assign({
        override: Ne
      }, Fe),
      cssVar: Oe
    });
  }, [it]);
  return C && (Me = /* @__PURE__ */ x.createElement(Nx.Provider, {
    value: kt
  }, Me)), mt.warning && (Me = /* @__PURE__ */ x.createElement(Cx.Provider, {
    value: mt.warning
  }, Me)), E !== void 0 && (Me = /* @__PURE__ */ x.createElement(uw, {
    disabled: E
  }, Me)), /* @__PURE__ */ x.createElement(er.Provider, {
    value: mt
  }, Me);
}, $o = (e) => {
  const r = x.useContext(er), t = x.useContext(ad);
  return /* @__PURE__ */ x.createElement(xS, Object.assign({
    parentContext: r,
    legacyLocale: t
  }, e));
};
$o.ConfigContext = er;
$o.SizeContext = vo;
$o.config = pS;
$o.useConfig = fw;
Object.defineProperty($o, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && bi(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), vo)
});
process.env.NODE_ENV !== "production" && ($o.displayName = "ConfigProvider");
function tg(e) {
  var r;
  return e == null || (r = e.getRootNode) === null || r === void 0 ? void 0 : r.call(e);
}
function gS(e) {
  return tg(e) instanceof ShadowRoot;
}
function Ga(e) {
  return gS(e) ? tg(e) : null;
}
function mS(e) {
  return e.replace(/-(.)/g, function(r, t) {
    return t.toUpperCase();
  });
}
function vS(e, r) {
  Ct(e, "[@ant-design/icons] ".concat(r));
}
function Qf(e) {
  return Ae(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (Ae(e.icon) === "object" || typeof e.icon == "function");
}
function Zf() {
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
function du(e, r, t) {
  return t ? /* @__PURE__ */ Q.createElement(e.tag, q(q({
    key: r
  }, Zf(e.attrs)), t), (e.children || []).map(function(n, o) {
    return du(n, "".concat(r, "-").concat(e.tag, "-").concat(o));
  })) : /* @__PURE__ */ Q.createElement(e.tag, q({
    key: r
  }, Zf(e.attrs)), (e.children || []).map(function(n, o) {
    return du(n, "".concat(r, "-").concat(e.tag, "-").concat(o));
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
  var t = ir(od), n = t.csp, o = t.prefixCls, i = t.layer, a = bS;
  o && (a = a.replace(/anticon/g, o)), i && (a = "@layer ".concat(i, ` {
`).concat(a, `
}`)), ut(function() {
    var s = r.current, c = Ga(s);
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
function CS() {
  return q({}, ei);
}
var To = function(r) {
  var t = r.icon, n = r.className, o = r.onClick, i = r.style, a = r.primaryColor, s = r.secondaryColor, c = Xt(r, wS), l = x.useRef(), u = ei;
  if (a && (u = {
    primaryColor: a,
    secondaryColor: s || rg(a)
  }), yS(l), vS(Qf(t), "icon should be icon definiton, but got ".concat(t)), !Qf(t))
    return null;
  var d = t;
  return d && typeof d.icon == "function" && (d = q(q({}, d), {}, {
    icon: d.icon(u.primaryColor, u.secondaryColor)
  })), du(d.icon, "svg-".concat(d.name), q(q({
    className: n,
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
To.displayName = "IconReact";
To.getTwoToneColors = CS;
To.setTwoToneColors = SS;
function og(e) {
  var r = ng(e), t = ne(r, 2), n = t[0], o = t[1];
  return To.setTwoToneColors({
    primaryColor: n,
    secondaryColor: o
  });
}
function _S() {
  var e = To.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var ES = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
og(qa.primary);
var tn = /* @__PURE__ */ x.forwardRef(function(e, r) {
  var t = e.className, n = e.icon, o = e.spin, i = e.rotate, a = e.tabIndex, s = e.onClick, c = e.twoToneColor, l = Xt(e, ES), u = x.useContext(od), d = u.prefixCls, h = d === void 0 ? "anticon" : d, v = u.rootClassName, f = fe(v, h, F(F({}, "".concat(h, "-").concat(n.name), !!n.name), "".concat(h, "-spin"), !!o || n.name === "loading"), t), g = a;
  g === void 0 && s && (g = -1);
  var p = i ? {
    msTransform: "rotate(".concat(i, "deg)"),
    transform: "rotate(".concat(i, "deg)")
  } : void 0, y = ng(c), b = ne(y, 2), C = b[0], E = b[1];
  return /* @__PURE__ */ x.createElement("span", bt({
    role: "img",
    "aria-label": n.name
  }, l, {
    ref: r,
    tabIndex: g,
    onClick: s,
    className: f
  }), /* @__PURE__ */ x.createElement(To, {
    icon: n,
    primaryColor: C,
    secondaryColor: E,
    style: p
  }));
});
tn.displayName = "AntdIcon";
tn.getTwoToneColor = _S;
tn.setTwoToneColor = og;
var OS = function(r, t) {
  return /* @__PURE__ */ x.createElement(tn, bt({}, r, {
    ref: t,
    icon: D1
  }));
}, ig = /* @__PURE__ */ x.forwardRef(OS);
process.env.NODE_ENV !== "production" && (ig.displayName = "CloseCircleFilled");
function ag(e) {
  return e && /* @__PURE__ */ Q.isValidElement(e) && e.type === Q.Fragment;
}
const RS = (e, r, t) => /* @__PURE__ */ Q.isValidElement(e) ? /* @__PURE__ */ Q.cloneElement(e, typeof t == "function" ? t(e.props || {}) : t) : r;
function wi(e, r) {
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
}, ld = /* @__PURE__ */ x.forwardRef($S);
process.env.NODE_ENV !== "production" && (ld.displayName = "LoadingOutlined");
const ud = /* @__PURE__ */ Q.createContext(void 0);
process.env.NODE_ENV !== "production" && (ud.displayName = "zIndexContext");
const Kr = 100, TS = 10, PS = Kr * TS, AS = PS + Kr, cg = {
  Modal: Kr,
  Drawer: Kr,
  Popover: Kr,
  Popconfirm: Kr,
  Tooltip: Kr,
  Tour: Kr,
  FloatButton: Kr
}, NS = {
  SelectLike: 50,
  Dropdown: 50,
  DatePicker: 50,
  Menu: 50,
  ImagePreview: 1
};
function IS(e) {
  return e in cg;
}
const jS = (e, r) => {
  const [, t] = bn(), n = Q.useContext(ud), o = IS(e);
  let i;
  if (r !== void 0)
    i = [r, r];
  else {
    let a = n ?? 0;
    o ? a += // Use preset token zIndex by default but not stack when has parent container
    (n ? 0 : t.zIndexPopupBase) + // Container offset
    cg[e] : a += NS[e], i = [n === void 0 ? r : a, a];
  }
  if (process.env.NODE_ENV !== "production") {
    const a = Kt(e), s = t.zIndexPopupBase + AS, c = i[0] || 0;
    process.env.NODE_ENV !== "production" && a(r !== void 0 || c <= s, "usage", "`zIndex` is over design token `zIndexPopupBase` too much. It may cause unexpected override.");
  }
  return i;
};
function tr() {
  tr = function() {
    return r;
  };
  var e, r = {}, t = Object.prototype, n = t.hasOwnProperty, o = Object.defineProperty || function(T, I, P) {
    T[I] = P.value;
  }, i = typeof Symbol == "function" ? Symbol : {}, a = i.iterator || "@@iterator", s = i.asyncIterator || "@@asyncIterator", c = i.toStringTag || "@@toStringTag";
  function l(T, I, P) {
    return Object.defineProperty(T, I, {
      value: P,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), T[I];
  }
  try {
    l({}, "");
  } catch {
    l = function(P, B, W) {
      return P[B] = W;
    };
  }
  function u(T, I, P, B) {
    var W = I && I.prototype instanceof y ? I : y, Y = Object.create(W.prototype), K = new z(B || []);
    return o(Y, "_invoke", {
      value: D(T, P, K)
    }), Y;
  }
  function d(T, I, P) {
    try {
      return {
        type: "normal",
        arg: T.call(I, P)
      };
    } catch (B) {
      return {
        type: "throw",
        arg: B
      };
    }
  }
  r.wrap = u;
  var h = "suspendedStart", v = "suspendedYield", f = "executing", g = "completed", p = {};
  function y() {
  }
  function b() {
  }
  function C() {
  }
  var E = {};
  l(E, a, function() {
    return this;
  });
  var m = Object.getPrototypeOf, _ = m && m(m(H([])));
  _ && _ !== t && n.call(_, a) && (E = _);
  var w = C.prototype = y.prototype = Object.create(E);
  function A(T) {
    ["next", "throw", "return"].forEach(function(I) {
      l(T, I, function(P) {
        return this._invoke(I, P);
      });
    });
  }
  function N(T, I) {
    function P(W, Y, K, Z) {
      var G = d(T[W], T, Y);
      if (G.type !== "throw") {
        var te = G.arg, ie = te.value;
        return ie && Ae(ie) == "object" && n.call(ie, "__await") ? I.resolve(ie.__await).then(function(he) {
          P("next", he, K, Z);
        }, function(he) {
          P("throw", he, K, Z);
        }) : I.resolve(ie).then(function(he) {
          te.value = he, K(te);
        }, function(he) {
          return P("throw", he, K, Z);
        });
      }
      Z(G.arg);
    }
    var B;
    o(this, "_invoke", {
      value: function(Y, K) {
        function Z() {
          return new I(function(G, te) {
            P(Y, K, G, te);
          });
        }
        return B = B ? B.then(Z, Z) : Z();
      }
    });
  }
  function D(T, I, P) {
    var B = h;
    return function(W, Y) {
      if (B === f) throw Error("Generator is already running");
      if (B === g) {
        if (W === "throw") throw Y;
        return {
          value: e,
          done: !0
        };
      }
      for (P.method = W, P.arg = Y; ; ) {
        var K = P.delegate;
        if (K) {
          var Z = V(K, P);
          if (Z) {
            if (Z === p) continue;
            return Z;
          }
        }
        if (P.method === "next") P.sent = P._sent = P.arg;
        else if (P.method === "throw") {
          if (B === h) throw B = g, P.arg;
          P.dispatchException(P.arg);
        } else P.method === "return" && P.abrupt("return", P.arg);
        B = f;
        var G = d(T, I, P);
        if (G.type === "normal") {
          if (B = P.done ? g : v, G.arg === p) continue;
          return {
            value: G.arg,
            done: P.done
          };
        }
        G.type === "throw" && (B = g, P.method = "throw", P.arg = G.arg);
      }
    };
  }
  function V(T, I) {
    var P = I.method, B = T.iterator[P];
    if (B === e) return I.delegate = null, P === "throw" && T.iterator.return && (I.method = "return", I.arg = e, V(T, I), I.method === "throw") || P !== "return" && (I.method = "throw", I.arg = new TypeError("The iterator does not provide a '" + P + "' method")), p;
    var W = d(B, T.iterator, I.arg);
    if (W.type === "throw") return I.method = "throw", I.arg = W.arg, I.delegate = null, p;
    var Y = W.arg;
    return Y ? Y.done ? (I[T.resultName] = Y.value, I.next = T.nextLoc, I.method !== "return" && (I.method = "next", I.arg = e), I.delegate = null, p) : Y : (I.method = "throw", I.arg = new TypeError("iterator result is not an object"), I.delegate = null, p);
  }
  function U(T) {
    var I = {
      tryLoc: T[0]
    };
    1 in T && (I.catchLoc = T[1]), 2 in T && (I.finallyLoc = T[2], I.afterLoc = T[3]), this.tryEntries.push(I);
  }
  function L(T) {
    var I = T.completion || {};
    I.type = "normal", delete I.arg, T.completion = I;
  }
  function z(T) {
    this.tryEntries = [{
      tryLoc: "root"
    }], T.forEach(U, this), this.reset(!0);
  }
  function H(T) {
    if (T || T === "") {
      var I = T[a];
      if (I) return I.call(T);
      if (typeof T.next == "function") return T;
      if (!isNaN(T.length)) {
        var P = -1, B = function W() {
          for (; ++P < T.length; ) if (n.call(T, P)) return W.value = T[P], W.done = !1, W;
          return W.value = e, W.done = !0, W;
        };
        return B.next = B;
      }
    }
    throw new TypeError(Ae(T) + " is not iterable");
  }
  return b.prototype = C, o(w, "constructor", {
    value: C,
    configurable: !0
  }), o(C, "constructor", {
    value: b,
    configurable: !0
  }), b.displayName = l(C, c, "GeneratorFunction"), r.isGeneratorFunction = function(T) {
    var I = typeof T == "function" && T.constructor;
    return !!I && (I === b || (I.displayName || I.name) === "GeneratorFunction");
  }, r.mark = function(T) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(T, C) : (T.__proto__ = C, l(T, c, "GeneratorFunction")), T.prototype = Object.create(w), T;
  }, r.awrap = function(T) {
    return {
      __await: T
    };
  }, A(N.prototype), l(N.prototype, s, function() {
    return this;
  }), r.AsyncIterator = N, r.async = function(T, I, P, B, W) {
    W === void 0 && (W = Promise);
    var Y = new N(u(T, I, P, B), W);
    return r.isGeneratorFunction(I) ? Y : Y.next().then(function(K) {
      return K.done ? K.value : Y.next();
    });
  }, A(w), l(w, c, "Generator"), l(w, a, function() {
    return this;
  }), l(w, "toString", function() {
    return "[object Generator]";
  }), r.keys = function(T) {
    var I = Object(T), P = [];
    for (var B in I) P.push(B);
    return P.reverse(), function W() {
      for (; P.length; ) {
        var Y = P.pop();
        if (Y in I) return W.value = Y, W.done = !1, W;
      }
      return W.done = !0, W;
    };
  }, r.values = H, z.prototype = {
    constructor: z,
    reset: function(I) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(L), !I) for (var P in this) P.charAt(0) === "t" && n.call(this, P) && !isNaN(+P.slice(1)) && (this[P] = e);
    },
    stop: function() {
      this.done = !0;
      var I = this.tryEntries[0].completion;
      if (I.type === "throw") throw I.arg;
      return this.rval;
    },
    dispatchException: function(I) {
      if (this.done) throw I;
      var P = this;
      function B(te, ie) {
        return K.type = "throw", K.arg = I, P.next = te, ie && (P.method = "next", P.arg = e), !!ie;
      }
      for (var W = this.tryEntries.length - 1; W >= 0; --W) {
        var Y = this.tryEntries[W], K = Y.completion;
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
    abrupt: function(I, P) {
      for (var B = this.tryEntries.length - 1; B >= 0; --B) {
        var W = this.tryEntries[B];
        if (W.tryLoc <= this.prev && n.call(W, "finallyLoc") && this.prev < W.finallyLoc) {
          var Y = W;
          break;
        }
      }
      Y && (I === "break" || I === "continue") && Y.tryLoc <= P && P <= Y.finallyLoc && (Y = null);
      var K = Y ? Y.completion : {};
      return K.type = I, K.arg = P, Y ? (this.method = "next", this.next = Y.finallyLoc, p) : this.complete(K);
    },
    complete: function(I, P) {
      if (I.type === "throw") throw I.arg;
      return I.type === "break" || I.type === "continue" ? this.next = I.arg : I.type === "return" ? (this.rval = this.arg = I.arg, this.method = "return", this.next = "end") : I.type === "normal" && P && (this.next = P), p;
    },
    finish: function(I) {
      for (var P = this.tryEntries.length - 1; P >= 0; --P) {
        var B = this.tryEntries[P];
        if (B.finallyLoc === I) return this.complete(B.completion, B.afterLoc), L(B), p;
      }
    },
    catch: function(I) {
      for (var P = this.tryEntries.length - 1; P >= 0; --P) {
        var B = this.tryEntries[P];
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
    delegateYield: function(I, P, B) {
      return this.delegate = {
        iterator: H(I),
        resultName: P,
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
function Dn(e) {
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
var Si = q({}, Dh), MS = Si.version, Bc = Si.render, FS = Si.unmountComponentAtNode, Hs;
try {
  var LS = Number((MS || "").split(".")[0]);
  LS >= 18 && (Hs = Si.createRoot);
} catch {
}
function r0(e) {
  var r = Si.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  r && Ae(r) === "object" && (r.usingClientEntryPoint = e);
}
var Xa = "__rc_react_root__";
function kS(e, r) {
  r0(!0);
  var t = r[Xa] || Hs(r);
  r0(!1), t.render(e), r[Xa] = t;
}
function DS(e, r) {
  Bc == null || Bc(e, r);
}
function zS(e, r) {
  if (Hs) {
    kS(e, r);
    return;
  }
  DS(e, r);
}
function BS(e) {
  return fu.apply(this, arguments);
}
function fu() {
  return fu = Dn(/* @__PURE__ */ tr().mark(function e(r) {
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
  })), fu.apply(this, arguments);
}
function VS(e) {
  FS(e);
}
function HS(e) {
  return hu.apply(this, arguments);
}
function hu() {
  return hu = Dn(/* @__PURE__ */ tr().mark(function e(r) {
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
    const t = parseInt(x.version.split(".")[0], 10), n = Object.keys(Dh);
    process.env.NODE_ENV !== "production" && bi(t < 19 || n.includes("createRoot"), "compatible", "antd v5 support React is 16 ~ 18. see https://u.ant.design/v5-for-19 for compatible.");
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
}, XS = (e) => {
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
}, KS = Iw("Wave", (e) => [XS(e)]), ug = `${Ua}-wave-target`;
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
  const [s, c] = x.useState(null), [l, u] = x.useState([]), [d, h] = x.useState(0), [v, f] = x.useState(0), [g, p] = x.useState(0), [y, b] = x.useState(0), [C, E] = x.useState(!1), m = {
    left: d,
    top: v,
    width: g,
    height: y,
    borderRadius: l.map((A) => `${A}px`).join(" ")
  };
  s && (m["--wave-color"] = s);
  function _() {
    const A = getComputedStyle(t);
    c(YS(t));
    const N = A.position === "static", {
      borderLeftWidth: D,
      borderTopWidth: V
    } = A;
    h(N ? t.offsetLeft : Hc(-parseFloat(D))), f(N ? t.offsetTop : Hc(-parseFloat(V))), p(t.offsetWidth), b(t.offsetHeight);
    const {
      borderTopLeftRadius: U,
      borderTopRightRadius: L,
      borderBottomLeftRadius: z,
      borderBottomRightRadius: H
    } = A;
    u([U, L, H, z].map((T) => Hc(parseFloat(T))));
  }
  if (x.useEffect(() => {
    if (t) {
      const A = Vr(() => {
        _(), E(!0);
      });
      let N;
      return typeof ResizeObserver < "u" && (N = new ResizeObserver(_), N.observe(t)), () => {
        Vr.cancel(A), N == null || N.disconnect();
      };
    }
  }, []), !C)
    return null;
  const w = (n === "Checkbox" || n === "Radio") && (t == null ? void 0 : t.classList.contains(ug));
  return /* @__PURE__ */ x.createElement(yi, {
    visible: !0,
    motionAppear: !0,
    motionName: "wave-motion",
    motionDeadline: 5e3,
    onAppearEnd: (A, N) => {
      var D, V;
      if (N.deadline || N.propertyName === "opacity") {
        const U = (D = i.current) === null || D === void 0 ? void 0 : D.parentElement;
        (V = a.current) === null || V === void 0 || V.call(a).then(() => {
          U == null || U.remove();
        });
      }
      return !1;
    }
  }, (A, N) => {
    let {
      className: D
    } = A;
    return /* @__PURE__ */ x.createElement("div", {
      ref: Ln(i, N),
      className: fe(r, D, {
        "wave-quick": w
      }),
      style: m
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
    const d = u.querySelector(`.${ug}`) || u, {
      showEffect: h
    } = n || {};
    (h || QS)(d, {
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
}, dg = (e) => {
  const {
    children: r,
    disabled: t,
    component: n
  } = e, {
    getPrefixCls: o
  } = ir(er), i = Pe(null), a = o("wave"), [, s] = KS(a), c = ZS(i, fe(a, s), n);
  if (Q.useEffect(() => {
    const u = i.current;
    if (!u || u.nodeType !== 1 || t)
      return;
    const d = (h) => {
      !lg(h.target) || // No need wave
      !u.getAttribute || u.getAttribute("disabled") || u.disabled || u.className.includes("disabled") || u.className.includes("-leave") || c(h);
    };
    return u.addEventListener("click", d, !0), () => {
      u.removeEventListener("click", d, !0);
    };
  }, [t]), !/* @__PURE__ */ Q.isValidElement(r))
    return r ?? null;
  const l = mi(r) ? Ln(Fs(r), i) : i;
  return wi(r, {
    ref: l
  });
};
process.env.NODE_ENV !== "production" && (dg.displayName = "Wave");
const Ws = (e) => {
  const r = Q.useContext(vo);
  return Q.useMemo(() => e ? typeof e == "string" ? e ?? r : typeof e == "function" ? e(r) : r : r, [e, r]);
}, eC = (e) => {
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
}, tC = (e) => {
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
}, rC = (e) => {
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
}, fg = en("Space", (e) => {
  const r = Yt(e, {
    spaceGapSmallSize: e.paddingXS,
    spaceGapMiddleSize: e.padding,
    spaceGapLargeSize: e.paddingLG
  });
  return [tC(r), rC(r), eC(r)];
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
const qs = /* @__PURE__ */ x.createContext(null), dd = (e, r) => {
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
}, nC = (e) => {
  const {
    children: r
  } = e;
  return /* @__PURE__ */ x.createElement(qs.Provider, {
    value: null
  }, r);
}, oC = (e) => {
  const {
    children: r
  } = e, t = hg(e, ["children"]);
  return /* @__PURE__ */ x.createElement(qs.Provider, {
    value: x.useMemo(() => t, [t])
  }, r);
}, iC = (e) => {
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
  } = e, u = hg(e, ["size", "direction", "block", "prefixCls", "className", "rootClassName", "children"]), d = Ws((C) => n ?? C), h = r("space-compact", a), [v, f] = fg(h), g = fe(h, f, {
    [`${h}-rtl`]: t === "rtl",
    [`${h}-block`]: i,
    [`${h}-vertical`]: o === "vertical"
  }, s, c), p = x.useContext(qs), y = xn(l), b = x.useMemo(() => y.map((C, E) => {
    const m = (C == null ? void 0 : C.key) || `${h}-item-${E}`;
    return /* @__PURE__ */ x.createElement(oC, {
      key: m,
      compactSize: d,
      compactDirection: o,
      isFirstItem: E === 0 && (!p || (p == null ? void 0 : p.isFirstItem)),
      isLastItem: E === y.length - 1 && (!p || (p == null ? void 0 : p.isLastItem))
    }, C);
  }), [n, y, p]);
  return y.length === 0 ? null : v(/* @__PURE__ */ x.createElement("div", Object.assign({
    className: g
  }, u), b));
};
var aC = function(e, r) {
  var t = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    r.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (t[n[o]] = e[n[o]]);
  return t;
};
const pg = /* @__PURE__ */ x.createContext(void 0), sC = (e) => {
  const {
    getPrefixCls: r,
    direction: t
  } = x.useContext(er), {
    prefixCls: n,
    size: o,
    className: i
  } = e, a = aC(e, ["prefixCls", "size", "className"]), s = r("btn-group", n), [, , c] = bn(), l = x.useMemo(() => {
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
    const d = Kt("Button.Group");
    d.deprecated(!1, "Button.Group", "Space.Compact"), process.env.NODE_ENV !== "production" && d(!o || ["large", "small", "middle"].includes(o), "usage", "Invalid prop `size`.");
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
function sa(e) {
  return e === "text" || e === "link";
}
function cC(e, r) {
  if (e == null)
    return;
  const t = r ? " " : "";
  return typeof e != "string" && typeof e != "number" && o0(e.type) && pu(e.props.children) ? wi(e, {
    children: e.props.children.split("").join(t)
  }) : o0(e) ? pu(e) ? /* @__PURE__ */ Q.createElement("span", null, e.split("").join(t)) : /* @__PURE__ */ Q.createElement("span", null, e) : ag(e) ? /* @__PURE__ */ Q.createElement("span", null, e) : e;
}
function lC(e, r) {
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
  }), Q.Children.map(n, (o) => cC(o, r));
}
["default", "primary", "danger"].concat($e(Mn));
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
  }, /* @__PURE__ */ Q.createElement(ld, {
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
}), uC = (e) => {
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
  }) : /* @__PURE__ */ Q.createElement(yi, {
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
      style: d
    } = c;
    const h = Object.assign(Object.assign({}, i), d);
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
}), dC = (e) => {
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
    F(this, "isValid", !0), F(this, "r", 0), F(this, "g", 0), F(this, "b", 0), F(this, "a", 1), F(this, "_h", void 0), F(this, "_s", void 0), F(this, "_l", void 0), F(this, "_v", void 0), F(this, "_max", void 0), F(this, "_min", void 0), F(this, "_brightness", void 0);
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
    const d = n - l / 2;
    this.r = Bt((i + d) * 255), this.g = Bt((a + d) * 255), this.b = Bt((s + d) * 255);
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
    const a = r / 60, s = Math.floor(a), c = a - s, l = Bt(n * (1 - t) * 255), u = Bt(n * (1 - t * c) * 255), d = Bt(n * (1 - t * (1 - c)) * 255);
    switch (s) {
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
var fC = ["b"], hC = ["v"], Gc = function(r) {
  return Math.round(Number(r || 0));
}, pC = function(r) {
  if (r instanceof Us)
    return r;
  if (r && Ae(r) === "object" && "h" in r && "b" in r) {
    var t = r, n = t.b, o = Xt(t, fC);
    return q(q({}, o), {}, {
      v: n
    });
  }
  return typeof r == "string" && /hsb/.test(r) ? r.replace(/hsb/, "hsv") : r;
}, Zr = /* @__PURE__ */ function(e) {
  mn(t, e);
  var r = vn(t);
  function t(n) {
    return Ht(this, t), r.call(this, pC(n));
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
      var o = this.toHsv(), i = o.v, a = Xt(o, hC);
      return q(q({}, a), {}, {
        b: i,
        a: this.a
      });
    }
  }]), t;
}(Us), xC = "rc-color-picker", ro = function(r) {
  return r instanceof Zr ? r : new Zr(r);
}, gC = ro("#1677ff"), xg = function(r) {
  var t = r.offset, n = r.targetRef, o = r.containerRef, i = r.color, a = r.type, s = o.current.getBoundingClientRect(), c = s.width, l = s.height, u = n.current.getBoundingClientRect(), d = u.width, h = u.height, v = d / 2, f = h / 2, g = (t.x + v) / c, p = 1 - (t.y + f) / l, y = i.toHsb(), b = g, C = (t.x + v) / c * 360;
  if (a)
    switch (a) {
      case "hue":
        return ro(q(q({}, y), {}, {
          h: C <= 0 ? 0 : C
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
}, mC = function(r) {
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
function vC(e) {
  var r = "touches" in e ? e.touches[0] : e, t = document.documentElement.scrollLeft || document.body.scrollLeft || window.pageXOffset, n = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
  return {
    pageX: r.pageX - t,
    pageY: r.pageY - n
  };
}
function mg(e) {
  var r = e.targetRef, t = e.containerRef, n = e.direction, o = e.onDragChange, i = e.onDragChangeComplete, a = e.calculate, s = e.color, c = e.disabledDrag, l = jt({
    x: 0,
    y: 0
  }), u = ne(l, 2), d = u[0], h = u[1], v = Pe(null), f = Pe(null);
  ut(function() {
    h(a());
  }, [s]), ut(function() {
    return function() {
      document.removeEventListener("mousemove", v.current), document.removeEventListener("mouseup", f.current), document.removeEventListener("touchmove", v.current), document.removeEventListener("touchend", f.current), v.current = null, f.current = null;
    };
  }, []);
  var g = function(E) {
    var m = vC(E), _ = m.pageX, w = m.pageY, A = t.current.getBoundingClientRect(), N = A.x, D = A.y, V = A.width, U = A.height, L = r.current.getBoundingClientRect(), z = L.width, H = L.height, T = z / 2, I = H / 2, P = Math.max(0, Math.min(_ - N, V)) - T, B = Math.max(0, Math.min(w - D, U)) - I, W = {
      x: P,
      y: n === "x" ? d.y : B
    };
    if (z === 0 && H === 0 || z !== H)
      return !1;
    o == null || o(W);
  }, p = function(E) {
    E.preventDefault(), g(E);
  }, y = function(E) {
    E.preventDefault(), document.removeEventListener("mousemove", v.current), document.removeEventListener("mouseup", f.current), document.removeEventListener("touchmove", v.current), document.removeEventListener("touchend", f.current), v.current = null, f.current = null, i == null || i();
  }, b = function(E) {
    document.removeEventListener("mousemove", v.current), document.removeEventListener("mouseup", f.current), !c && (g(E), document.addEventListener("mousemove", p), document.addEventListener("mouseup", y), document.addEventListener("touchmove", p), document.addEventListener("touchend", y), v.current = p, f.current = y);
  };
  return [d, b];
}
var vg = function(r) {
  var t = r.size, n = t === void 0 ? "default" : t, o = r.color, i = r.prefixCls;
  return /* @__PURE__ */ Q.createElement("div", {
    className: fe("".concat(i, "-handler"), F({}, "".concat(i, "-handler-sm"), n === "small")),
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
}), bC = function(r) {
  var t = r.color, n = r.onChange, o = r.prefixCls, i = r.onChangeComplete, a = r.disabled, s = Pe(), c = Pe(), l = Pe(t), u = Ut(function(g) {
    var p = xg({
      offset: g,
      targetRef: c,
      containerRef: s,
      color: t
    });
    l.current = p, n(p);
  }), d = mg({
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
  }), h = ne(d, 2), v = h[0], f = h[1];
  return /* @__PURE__ */ Q.createElement("div", {
    ref: s,
    className: "".concat(o, "-select"),
    onMouseDown: f,
    onTouchStart: f
  }, /* @__PURE__ */ Q.createElement(bg, {
    prefixCls: o
  }, /* @__PURE__ */ Q.createElement(yg, {
    x: v.x,
    y: v.y,
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
}, yC = function(r, t) {
  var n = jn(r, {
    value: t
  }), o = ne(n, 2), i = o[0], a = o[1], s = Nn(function() {
    return ro(i);
  }, [i]);
  return [s, a];
}, wC = function(r) {
  var t = r.colors, n = r.children, o = r.direction, i = o === void 0 ? "to right" : o, a = r.type, s = r.prefixCls, c = Nn(function() {
    return t.map(function(l, u) {
      var d = ro(l);
      return a === "alpha" && u === t.length - 1 && (d = new Zr(d.setA(1))), d.toRgbString();
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
}, SC = function(r) {
  var t = r.prefixCls, n = r.colors, o = r.disabled, i = r.onChange, a = r.onChangeComplete, s = r.color, c = r.type, l = Pe(), u = Pe(), d = Pe(s), h = function(m) {
    return c === "hue" ? m.getHue() : m.a * 100;
  }, v = Ut(function(E) {
    var m = xg({
      offset: E,
      targetRef: u,
      containerRef: l,
      color: s,
      type: c
    });
    d.current = m, i(h(m));
  }), f = mg({
    color: s,
    targetRef: u,
    containerRef: l,
    calculate: function() {
      return gg(s, c);
    },
    onDragChange: v,
    onDragChangeComplete: function() {
      a(h(d.current));
    },
    direction: "x",
    disabledDrag: o
  }), g = ne(f, 2), p = g[0], y = g[1], b = Q.useMemo(function() {
    if (c === "hue") {
      var E = s.toHsb();
      E.s = 1, E.b = 1, E.a = 1;
      var m = new Zr(E);
      return m;
    }
    return s;
  }, [s, c]), C = Q.useMemo(function() {
    return n.map(function(E) {
      return "".concat(E.color, " ").concat(E.percent, "%");
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
  })), /* @__PURE__ */ Q.createElement(wC, {
    colors: C,
    type: c,
    prefixCls: t
  })));
};
function CC(e) {
  return x.useMemo(function() {
    var r = e || {}, t = r.slider;
    return [t || SC];
  }, [e]);
}
var _C = [{
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
}], EC = /* @__PURE__ */ Wr(function(e, r) {
  var t = e.value, n = e.defaultValue, o = e.prefixCls, i = o === void 0 ? xC : o, a = e.onChange, s = e.onChangeComplete, c = e.className, l = e.style, u = e.panelRender, d = e.disabledAlpha, h = d === void 0 ? !1 : d, v = e.disabled, f = v === void 0 ? !1 : v, g = e.components, p = CC(g), y = ne(p, 1), b = y[0], C = yC(n || gC, t), E = ne(C, 2), m = E[0], _ = E[1], w = Nn(function() {
    return m.setA(1).toRgbString();
  }, [m]), A = function(B, W) {
    t || _(B), a == null || a(B, W);
  }, N = function(B) {
    return new Zr(m.setHue(B));
  }, D = function(B) {
    return new Zr(m.setA(B / 100));
  }, V = function(B) {
    A(N(B), {
      type: "hue",
      value: B
    });
  }, U = function(B) {
    A(D(B), {
      type: "alpha",
      value: B
    });
  }, L = function(B) {
    s && s(N(B));
  }, z = function(B) {
    s && s(D(B));
  }, H = fe("".concat(i, "-panel"), c, F({}, "".concat(i, "-panel-disabled"), f)), T = {
    prefixCls: i,
    disabled: f,
    color: m
  }, I = /* @__PURE__ */ Q.createElement(Q.Fragment, null, /* @__PURE__ */ Q.createElement(bC, bt({
    onChange: A
  }, T, {
    onChangeComplete: s
  })), /* @__PURE__ */ Q.createElement("div", {
    className: "".concat(i, "-slider-container")
  }, /* @__PURE__ */ Q.createElement("div", {
    className: fe("".concat(i, "-slider-group"), F({}, "".concat(i, "-slider-group-disabled-alpha"), h))
  }, /* @__PURE__ */ Q.createElement(b, bt({}, T, {
    type: "hue",
    colors: _C,
    min: 0,
    max: 359,
    value: m.getHue(),
    onChange: V,
    onChangeComplete: L
  })), !h && /* @__PURE__ */ Q.createElement(b, bt({}, T, {
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
    value: m.a * 100,
    onChange: U,
    onChangeComplete: z
  }))), /* @__PURE__ */ Q.createElement(mC, {
    color: m.toRgbString(),
    prefixCls: i
  })));
  return /* @__PURE__ */ Q.createElement("div", {
    className: H,
    style: l,
    ref: r
  }, typeof u == "function" ? u(I) : I);
});
process.env.NODE_ENV !== "production" && (EC.displayName = "ColorPicker");
const OC = (e, r) => (e == null ? void 0 : e.replace(/[^\w/]/g, "").slice(0, r ? 8 : 6)) || "", RC = (e, r) => e ? OC(e, r) : "";
let $C = /* @__PURE__ */ function() {
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
      return RC(this.toHexString(), this.metaColor.a < 1);
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
const TC = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), PC = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), AC = function(e, r, t, n) {
  const i = (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1) ? "&" : "";
  return {
    [`
      ${i}${e}-enter,
      ${i}${e}-appear
    `]: Object.assign(Object.assign({}, TC(n)), {
      animationPlayState: "paused"
    }),
    [`${i}${e}-leave`]: Object.assign(Object.assign({}, PC(n)), {
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
}, NC = new ar("antZoomIn", {
  "0%": {
    transform: "scale(0.2)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), IC = new ar("antZoomOut", {
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
}), jC = new ar("antZoomUpIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  }
}), MC = new ar("antZoomUpOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  }
}), FC = new ar("antZoomLeftIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  }
}), LC = new ar("antZoomLeftOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  }
}), kC = new ar("antZoomRightIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  }
}), DC = new ar("antZoomRightOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  }
}), zC = new ar("antZoomDownIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  }
}), BC = new ar("antZoomDownOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  }
}), VC = {
  zoom: {
    inKeyframes: NC,
    outKeyframes: IC
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
    inKeyframes: FC,
    outKeyframes: LC
  },
  "zoom-right": {
    inKeyframes: kC,
    outKeyframes: DC
  },
  "zoom-up": {
    inKeyframes: jC,
    outKeyframes: MC
  },
  "zoom-down": {
    inKeyframes: zC,
    outKeyframes: BC
  }
}, HC = (e, r) => {
  const {
    antCls: t
  } = e, n = `${t}-${r}`, {
    inKeyframes: o,
    outKeyframes: i
  } = VC[r];
  return [AC(n, o, i, e.motionDurationFast), {
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
}, WC = (e, r) => {
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
  const s = (r = e.contentFontSize) !== null && r !== void 0 ? r : e.fontSize, c = (t = e.contentFontSizeSM) !== null && t !== void 0 ? t : e.fontSize, l = (n = e.contentFontSizeLG) !== null && n !== void 0 ? n : e.fontSizeLG, u = (o = e.contentLineHeight) !== null && o !== void 0 ? o : Pa(s), d = (i = e.contentLineHeightSM) !== null && i !== void 0 ? i : Pa(c), h = (a = e.contentLineHeightLG) !== null && a !== void 0 ? a : Pa(l), v = WC(new $C(e.colorBgSolid), "#fff") ? "#000" : "#fff", f = Mn.reduce((g, p) => Object.assign(Object.assign({}, g), {
    [`${p}ShadowColor`]: `0 ${nt(e.controlOutlineWidth)} 0 ${Ko(e[`${p}1`], e.colorBgContainer)}`
  }), {});
  return Object.assign(Object.assign({}, f), {
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
    contentFontSize: s,
    contentFontSizeSM: c,
    contentFontSizeLG: l,
    contentLineHeight: u,
    contentLineHeightSM: d,
    contentLineHeightLG: h,
    paddingBlock: Math.max((e.controlHeight - s * u) / 2 - e.lineWidth, 0),
    paddingBlockSM: Math.max((e.controlHeightSM - c * d) / 2 - e.lineWidth, 0),
    paddingBlockLG: Math.max((e.controlHeightLG - l * h) / 2 - e.lineWidth, 0)
  });
}, qC = (e) => {
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
      border: `${nt(e.lineWidth)} ${e.lineType} transparent`,
      cursor: "pointer",
      transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
      userSelect: "none",
      touchAction: "manipulation",
      color: e.colorText,
      "&:disabled > *": {
        pointerEvents: "none"
      },
      // https://github.com/ant-design/ant-design/issues/51380
      [`${r}-icon > svg`]: Dx(),
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
}, Cg = (e, r, t) => ({
  [`&:not(:disabled):not(${e}-disabled)`]: {
    "&:hover": r,
    "&:active": t
  }
}), UC = (e) => ({
  minWidth: e.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
}), GC = (e) => ({
  borderRadius: e.controlHeight,
  paddingInlineStart: e.calc(e.controlHeight).div(2).equal(),
  paddingInlineEnd: e.calc(e.controlHeight).div(2).equal()
}), XC = (e) => ({
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
  }, Cg(e, Object.assign({
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
}), KC = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, XC(e))
}), YC = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: {
    cursor: "not-allowed",
    color: e.colorTextDisabled
  }
}), Xs = (e, r, t, n) => {
  const i = n && ["link", "text"].includes(n) ? YC : KC;
  return Object.assign(Object.assign({}, i(e)), Cg(e.componentCls, r, t));
}, Ks = (e, r, t, n, o) => ({
  [`&${e.componentCls}-variant-solid`]: Object.assign({
    color: r,
    background: t
  }, Xs(e, n, o))
}), Ys = (e, r, t, n, o) => ({
  [`&${e.componentCls}-variant-outlined, &${e.componentCls}-variant-dashed`]: Object.assign({
    borderColor: r,
    background: t
  }, Xs(e, n, o))
}), Js = (e) => ({
  [`&${e.componentCls}-variant-dashed`]: {
    borderStyle: "dashed"
  }
}), Qs = (e, r, t, n) => ({
  [`&${e.componentCls}-variant-filled`]: Object.assign({
    boxShadow: "none",
    background: r
  }, Xs(e, t, n))
}), Hr = (e, r, t, n, o) => ({
  [`&${e.componentCls}-variant-${t}`]: Object.assign({
    color: r,
    boxShadow: "none"
  }, Xs(e, n, o, t))
}), JC = (e) => {
  const {
    componentCls: r
  } = e;
  return Mn.reduce((t, n) => {
    const o = e[`${n}6`], i = e[`${n}1`], a = e[`${n}5`], s = e[`${n}2`], c = e[`${n}3`], l = e[`${n}7`];
    return Object.assign(Object.assign({}, t), {
      [`&${r}-color-${n}`]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
        color: o,
        boxShadow: e[`${n}ShadowColor`]
      }, Ks(e, e.colorTextLightSolid, o, {
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
}, QC = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.defaultColor,
  boxShadow: e.defaultShadow
}, Ks(e, e.solidTextColor, e.colorBgSolid, {
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
})), ZC = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
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
})), e_ = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.colorError,
  boxShadow: e.dangerShadow
}, Ks(e, e.dangerColor, e.colorError, {
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
})), t_ = (e) => Object.assign(Object.assign({}, Hr(e, e.colorLink, "link", {
  color: e.colorLinkHover
}, {
  color: e.colorLinkActive
})), Gs(e.componentCls, e.ghostBg, e.colorInfo, e.colorInfo, e.colorTextDisabled, e.colorBorder, {
  color: e.colorInfoHover,
  borderColor: e.colorInfoHover
}, {
  color: e.colorInfoActive,
  borderColor: e.colorInfoActive
})), r_ = (e) => {
  const {
    componentCls: r
  } = e;
  return Object.assign({
    [`${r}-color-default`]: QC(e),
    [`${r}-color-primary`]: ZC(e),
    [`${r}-color-dangerous`]: e_(e),
    [`${r}-color-link`]: t_(e)
  }, JC(e));
}, n_ = (e) => Object.assign(Object.assign(Object.assign(Object.assign({}, Ys(e, e.defaultBorderColor, e.defaultBg, {
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
})), Ks(e, e.primaryColor, e.colorPrimary, {
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
})), fd = function(e) {
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
        padding: `${nt(c)} ${nt(a)}`,
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
      [`${t}${t}-circle${r}`]: UC(e)
    },
    {
      [`${t}${t}-round${r}`]: GC(e)
    }
  ];
}, o_ = (e) => {
  const r = Yt(e, {
    fontSize: e.contentFontSize
  });
  return fd(r, e.componentCls);
}, i_ = (e) => {
  const r = Yt(e, {
    controlHeight: e.controlHeightSM,
    fontSize: e.contentFontSizeSM,
    padding: e.paddingXS,
    buttonPaddingHorizontal: e.paddingInlineSM,
    buttonPaddingVertical: 0,
    borderRadius: e.borderRadiusSM,
    buttonIconOnlyFontSize: e.onlyIconSizeSM
  });
  return fd(r, `${e.componentCls}-sm`);
}, a_ = (e) => {
  const r = Yt(e, {
    controlHeight: e.controlHeightLG,
    fontSize: e.contentFontSizeLG,
    buttonPaddingHorizontal: e.paddingInlineLG,
    buttonPaddingVertical: 0,
    borderRadius: e.borderRadiusLG,
    buttonIconOnlyFontSize: e.onlyIconSizeLG
  });
  return fd(r, `${e.componentCls}-lg`);
}, s_ = (e) => {
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
}, c_ = en("Button", (e) => {
  const r = wg(e);
  return [
    // Shared
    qC(r),
    // Size
    o_(r),
    i_(r),
    a_(r),
    // Block
    s_(r),
    // Color
    r_(r),
    // https://github.com/ant-design/ant-design/issues/50969
    n_(r),
    // Button Group
    dC(r)
  ];
}, Sg, {
  unitless: {
    fontWeight: !0,
    contentLineHeight: !0,
    contentLineHeightSM: !0,
    contentLineHeightLG: !0
  }
});
function l_(e, r, t) {
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
function u_(e, r, t) {
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
function _g(e) {
  let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: !0
  };
  const {
    componentCls: t
  } = e, n = `${t}-compact`;
  return {
    [n]: Object.assign(Object.assign({}, l_(e, n, r)), u_(t, n, r))
  };
}
function d_(e, r) {
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
function f_(e, r) {
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
function h_(e) {
  const r = `${e.componentCls}-compact-vertical`;
  return {
    [r]: Object.assign(Object.assign({}, d_(e, r)), f_(e.componentCls, r))
  };
}
const p_ = (e) => {
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
}, x_ = jw(["Button", "compact"], (e) => {
  const r = wg(e);
  return [
    // Space Compact
    _g(r),
    h_(r),
    p_(r)
  ];
}, Sg);
var g_ = function(e, r) {
  var t = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    r.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (t[n[o]] = e[n[o]]);
  return t;
};
function m_(e) {
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
const v_ = {
  default: ["default", "outlined"],
  primary: ["primary", "solid"],
  dashed: ["default", "dashed"],
  // `link` is not a real color but we should compatible with it
  link: ["link", "link"],
  text: ["default", "text"]
}, b_ = /* @__PURE__ */ Q.forwardRef((e, r) => {
  var t, n;
  const {
    loading: o = !1,
    prefixCls: i,
    color: a,
    variant: s,
    type: c,
    danger: l = !1,
    shape: u = "default",
    size: d,
    styles: h,
    disabled: v,
    className: f,
    rootClassName: g,
    children: p,
    icon: y,
    iconPosition: b = "start",
    ghost: C = !1,
    block: E = !1,
    // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    htmlType: m = "button",
    classNames: _,
    style: w = {},
    autoInsertSpace: A,
    autoFocus: N
  } = e, D = g_(e, ["loading", "prefixCls", "color", "variant", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "iconPosition", "ghost", "block", "htmlType", "classNames", "style", "autoInsertSpace", "autoFocus"]), V = c || "default", [U, L] = Nn(() => {
    if (a && s)
      return [a, s];
    const Ee = v_[V] || [];
    return l ? ["danger", Ee[1]] : Ee;
  }, [c, a, s, l]), H = U === "danger" ? "dangerous" : U, {
    getPrefixCls: T,
    direction: I,
    autoInsertSpace: P,
    className: B,
    style: W,
    classNames: Y,
    styles: K
  } = kn("button"), Z = (t = A ?? P) !== null && t !== void 0 ? t : !0, G = T("btn", i), [te, ie, he] = c_(G), pe = ir(mo), xe = v ?? pe, Se = ir(pg), ae = Nn(() => m_(o), [o]), [se, _e] = jt(ae.loading), [re, ve] = jt(!1), ce = Pe(null), be = Ms(r, ce), Ce = Gm.count(p) === 1 && !y && !sa(L), we = Pe(!0);
  Q.useEffect(() => (we.current = !1, () => {
    we.current = !0;
  }), []), ut(() => {
    let Ee = null;
    ae.delay > 0 ? Ee = setTimeout(() => {
      Ee = null, _e(!0);
    }, ae.delay) : _e(ae.loading);
    function ue() {
      Ee && (clearTimeout(Ee), Ee = null);
    }
    return ue;
  }, [ae]), ut(() => {
    if (!ce.current || !Z)
      return;
    const Ee = ce.current.textContent || "";
    Ce && pu(Ee) ? re || ve(!0) : re && ve(!1);
  }), ut(() => {
    N && ce.current && ce.current.focus();
  }, []);
  const ze = Q.useCallback((Ee) => {
    var ue;
    if (se || xe) {
      Ee.preventDefault();
      return;
    }
    (ue = e.onClick) === null || ue === void 0 || ue.call(e, ("href" in e, Ee));
  }, [e.onClick, se, xe]);
  if (process.env.NODE_ENV !== "production") {
    const Ee = Kt("Button");
    process.env.NODE_ENV !== "production" && Ee(!(typeof y == "string" && y.length > 2), "breaking", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${y}\` at https://ant.design/components/icon`), process.env.NODE_ENV !== "production" && Ee(!(C && sa(L)), "usage", "`link` or `text` button can't be a `ghost` button.");
  }
  const {
    compactSize: Te,
    compactItemClassnames: S
  } = dd(G, I), $ = {
    large: "lg",
    small: "sm",
    middle: void 0
  }, O = Ws((Ee) => {
    var ue, Re;
    return (Re = (ue = d ?? Te) !== null && ue !== void 0 ? ue : Se) !== null && Re !== void 0 ? Re : Ee;
  }), j = O && (n = $[O]) !== null && n !== void 0 ? n : "", M = se ? "loading" : y, le = Ci(D, ["navigate"]), Je = fe(G, ie, he, {
    [`${G}-${u}`]: u !== "default" && u,
    // line(253 - 254): Compatible with versions earlier than 5.21.0
    [`${G}-${V}`]: V,
    [`${G}-dangerous`]: l,
    [`${G}-color-${H}`]: H,
    [`${G}-variant-${L}`]: L,
    [`${G}-${j}`]: j,
    [`${G}-icon-only`]: !p && p !== 0 && !!M,
    [`${G}-background-ghost`]: C && !sa(L),
    [`${G}-loading`]: se,
    [`${G}-two-chinese-chars`]: re && Z && !se,
    [`${G}-block`]: E,
    [`${G}-rtl`]: I === "rtl",
    [`${G}-icon-end`]: b === "end"
  }, S, f, g, B), We = Object.assign(Object.assign({}, W), w), je = fe(_ == null ? void 0 : _.icon, Y.icon), et = Object.assign(Object.assign({}, (h == null ? void 0 : h.icon) || {}), K.icon || {}), Ve = y && !se ? /* @__PURE__ */ Q.createElement(xu, {
    prefixCls: G,
    className: je,
    style: et
  }, y) : o && typeof o == "object" && o.icon ? /* @__PURE__ */ Q.createElement(xu, {
    prefixCls: G,
    className: je,
    style: et
  }, o.icon) : /* @__PURE__ */ Q.createElement(uC, {
    existIcon: !!y,
    prefixCls: G,
    loading: se,
    mount: we.current
  }), Le = p || p === 0 ? lC(p, Ce && Z) : null;
  if (le.href !== void 0)
    return te(/* @__PURE__ */ Q.createElement("a", Object.assign({}, le, {
      className: fe(Je, {
        [`${G}-disabled`]: xe
      }),
      href: xe ? void 0 : le.href,
      style: We,
      onClick: ze,
      ref: be,
      tabIndex: xe ? -1 : 0
    }), Ve, Le));
  let ge = /* @__PURE__ */ Q.createElement("button", Object.assign({}, D, {
    type: m,
    className: Je,
    style: We,
    onClick: ze,
    disabled: xe,
    ref: be
  }), Ve, Le, S && /* @__PURE__ */ Q.createElement(x_, {
    prefixCls: G
  }));
  return sa(L) || (ge = /* @__PURE__ */ Q.createElement(dg, {
    component: "Button",
    disabled: se
  }, ge)), te(ge);
}), Zs = b_;
Zs.Group = sC;
Zs.__ANT_BUTTON = !0;
process.env.NODE_ENV !== "production" && (Zs.displayName = "Button");
var Eg = /* @__PURE__ */ x.createContext(null), u0 = [];
function y_(e, r) {
  var t = x.useState(function() {
    if (!Zt())
      return null;
    var f = document.createElement("div");
    return process.env.NODE_ENV !== "production" && r && f.setAttribute("data-debug", r), f;
  }), n = ne(t, 1), o = n[0], i = x.useRef(!1), a = x.useContext(Eg), s = x.useState(u0), c = ne(s, 2), l = c[0], u = c[1], d = a || (i.current ? void 0 : function(f) {
    u(function(g) {
      var p = [f].concat($e(g));
      return p;
    });
  });
  function h() {
    o.parentElement || document.body.appendChild(o), i.current = !0;
  }
  function v() {
    var f;
    (f = o.parentElement) === null || f === void 0 || f.removeChild(o), i.current = !1;
  }
  return St(function() {
    return e ? a ? a(h) : h() : v(), v;
  }, [e]), St(function() {
    l.length && (l.forEach(function(f) {
      return f();
    }), u(u0));
  }, [l]), [o, d];
}
function w_(e) {
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
      var u = c ? "width: ".concat(s.width, ";") : "", d = l ? "height: ".concat(s.height, ";") : "";
      Jr(`
#`.concat(r, `::-webkit-scrollbar {
`).concat(u, `
`).concat(d, `
}`), r);
    } catch (f) {
      console.error(f), o = c, i = l;
    }
  }
  document.body.appendChild(t);
  var h = e && o && !isNaN(o) ? o : t.offsetWidth - t.clientWidth, v = e && i && !isNaN(i) ? i : t.offsetHeight - t.clientHeight;
  return document.body.removeChild(t), si(r), {
    width: h,
    height: v
  };
}
function S_(e) {
  return typeof document > "u" || !e || !(e instanceof Element) ? {
    width: 0,
    height: 0
  } : w_(e);
}
function C_() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
var __ = "rc-util-locker-".concat(Date.now()), d0 = 0;
function E_(e) {
  var r = !!e, t = x.useState(function() {
    return d0 += 1, "".concat(__, "_").concat(d0);
  }), n = ne(t, 1), o = n[0];
  St(function() {
    if (r) {
      var i = S_(document.body).width, a = C_();
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
var O_ = !1;
function R_(e) {
  return O_;
}
var f0 = function(r) {
  return r === !1 ? !1 : !Zt() || !r ? null : typeof r == "string" ? document.querySelector(r) : typeof r == "function" ? r() : r;
}, hd = /* @__PURE__ */ x.forwardRef(function(e, r) {
  var t = e.open, n = e.autoLock, o = e.getContainer, i = e.debug, a = e.autoDestroy, s = a === void 0 ? !0 : a, c = e.children, l = x.useState(t), u = ne(l, 2), d = u[0], h = u[1], v = d || t;
  process.env.NODE_ENV !== "production" && Ct(Zt() || !t, "Portal only work in client side. Please call 'useEffect' to show Portal instead default render in SSR."), x.useEffect(function() {
    (s || t) && h(t);
  }, [t, s]);
  var f = x.useState(function() {
    return f0(o);
  }), g = ne(f, 2), p = g[0], y = g[1];
  x.useEffect(function() {
    var U = f0(o);
    y(U ?? null);
  });
  var b = y_(v && !p, i), C = ne(b, 2), E = C[0], m = C[1], _ = p ?? E;
  E_(n && t && Zt() && (_ === E || _ === document.body));
  var w = null;
  if (c && mi(c) && r) {
    var A = c;
    w = A.ref;
  }
  var N = Ms(w, r);
  if (!v || !Zt() || p === void 0)
    return null;
  var D = _ === !1 || R_(), V = c;
  return r && (V = /* @__PURE__ */ x.cloneElement(c, {
    ref: N
  })), /* @__PURE__ */ x.createElement(Eg.Provider, {
    value: m
  }, D ? V : /* @__PURE__ */ Km(V, _));
});
process.env.NODE_ENV !== "production" && (hd.displayName = "Portal");
function $_() {
  var e = q({}, x);
  return e.useId;
}
var h0 = 0, p0 = $_();
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
var En = "RC_FORM_INTERNAL_HOOKS", ft = function() {
  Ct(!1, "Can not find FormContext. Please make sure you wrap Field under Form.");
}, bo = /* @__PURE__ */ x.createContext({
  getFieldValue: ft,
  getFieldsValue: ft,
  getFieldError: ft,
  getFieldWarning: ft,
  getFieldsError: ft,
  isFieldsTouched: ft,
  isFieldTouched: ft,
  isFieldValidating: ft,
  isFieldsValidating: ft,
  resetFields: ft,
  setFields: ft,
  setFieldValue: ft,
  setFieldsValue: ft,
  validateFields: ft,
  submit: ft,
  getInternalHooks: function() {
    return ft(), {
      dispatch: ft,
      initEntityValue: ft,
      registerField: ft,
      useSubscribe: ft,
      setInitialValues: ft,
      destroyForm: ft,
      setCallbacks: ft,
      registerWatch: ft,
      getFields: ft,
      setValidateMessages: ft,
      setPreserve: ft,
      getInitialValue: ft
    };
  }
}), Ka = /* @__PURE__ */ x.createContext(null);
function gu(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function T_(e) {
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
function P_(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function A_(e, r, t) {
  if (Ju()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, r);
  var o = new (e.bind.apply(e, n))();
  return t && oi(o, t.prototype), o;
}
function bu(e) {
  var r = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return bu = function(n) {
    if (n === null || !P_(n)) return n;
    if (typeof n != "function") throw new TypeError("Super expression must either be null or a function");
    if (r !== void 0) {
      if (r.has(n)) return r.get(n);
      r.set(n, o);
    }
    function o() {
      return A_(n, arguments, ii(this).constructor);
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
var N_ = /%[sdj%]/g, Rg = function() {
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
function dr(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  var o = 0, i = t.length;
  if (typeof e == "function")
    return e.apply(null, t);
  if (typeof e == "string") {
    var a = e.replace(N_, function(s) {
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
function I_(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function Ft(e, r) {
  return !!(e == null || r === "array" && Array.isArray(e) && !e.length || I_(r) && typeof e == "string" && !e);
}
function j_(e, r, t) {
  var n = [], o = 0, i = e.length;
  function a(s) {
    n.push.apply(n, $e(s || [])), o++, o === i && t(n);
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
function M_(e) {
  var r = [];
  return Object.keys(e).forEach(function(t) {
    r.push.apply(r, $e(e[t] || []));
  }), r;
}
var g0 = /* @__PURE__ */ function(e) {
  mn(t, e);
  var r = vn(t);
  function t(n, o) {
    var i;
    return Ht(this, t), i = r.call(this, "Async Validation Error"), F(Ye(i), "errors", void 0), F(Ye(i), "fields", void 0), i.errors = n, i.fields = o, i;
  }
  return Wt(t);
}(/* @__PURE__ */ bu(Error));
function F_(e, r, t, n, o) {
  if (r.first) {
    var i = new Promise(function(h, v) {
      var f = function(y) {
        return n(y), y.length ? v(new g0(y, yu(y))) : h(o);
      }, g = M_(e);
      x0(g, t, f);
    });
    return i.catch(function(h) {
      return h;
    }), i;
  }
  var a = r.firstFields === !0 ? Object.keys(e) : r.firstFields || [], s = Object.keys(e), c = s.length, l = 0, u = [], d = new Promise(function(h, v) {
    var f = function(p) {
      if (u.push.apply(u, p), l++, l === c)
        return n(u), u.length ? v(new g0(u, yu(u))) : h(o);
    };
    s.length || (n(u), h(o)), s.forEach(function(g) {
      var p = e[g];
      a.indexOf(g) !== -1 ? x0(p, t, f) : j_(p, t, f);
    });
  });
  return d.catch(function(h) {
    return h;
  }), d;
}
function L_(e) {
  return !!(e && e.message !== void 0);
}
function k_(e, r) {
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
    return e.fullFields ? n = k_(r, e.fullFields) : n = r[t.field || e.fullField], L_(t) ? (t.field = t.field || e.fullField, t.fieldValue = n, t) : {
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
        Ae(n) === "object" && Ae(e[t]) === "object" ? e[t] = q(q({}, e[t]), n) : e[t] = n;
      }
  }
  return e;
}
var Gn = "enum", D_ = function(r, t, n, o, i) {
  r[Gn] = Array.isArray(r[Gn]) ? r[Gn] : [], r[Gn].indexOf(t) === -1 && o.push(dr(i.messages[Gn], r.fullField, r[Gn].join(", ")));
}, z_ = function(r, t, n, o, i) {
  if (r.pattern) {
    if (r.pattern instanceof RegExp)
      r.pattern.lastIndex = 0, r.pattern.test(t) || o.push(dr(i.messages.pattern.mismatch, r.fullField, t, r.pattern));
    else if (typeof r.pattern == "string") {
      var a = new RegExp(r.pattern);
      a.test(t) || o.push(dr(i.messages.pattern.mismatch, r.fullField, t, r.pattern));
    }
  }
}, B_ = function(r, t, n, o, i) {
  var a = typeof r.len == "number", s = typeof r.min == "number", c = typeof r.max == "number", l = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, u = t, d = null, h = typeof t == "number", v = typeof t == "string", f = Array.isArray(t);
  if (h ? d = "number" : v ? d = "string" : f && (d = "array"), !d)
    return !1;
  f && (u = t.length), v && (u = t.replace(l, "_").length), a ? u !== r.len && o.push(dr(i.messages[d].len, r.fullField, r.len)) : s && !c && u < r.min ? o.push(dr(i.messages[d].min, r.fullField, r.min)) : c && !s && u > r.max ? o.push(dr(i.messages[d].max, r.fullField, r.max)) : s && c && (u < r.min || u > r.max) && o.push(dr(i.messages[d].range, r.fullField, r.min, r.max));
}, $g = function(r, t, n, o, i, a) {
  r.required && (!n.hasOwnProperty(r.field) || Ft(t, a || r.type)) && o.push(dr(i.messages.required, r.fullField));
}, ca;
const V_ = function() {
  if (ca)
    return ca;
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
  u.v4 = function(m) {
    return m && m.exact ? c : new RegExp("".concat(r(m)).concat(t).concat(r(m)), "g");
  }, u.v6 = function(m) {
    return m && m.exact ? l : new RegExp("".concat(r(m)).concat(a).concat(r(m)), "g");
  };
  var d = "(?:(?:[a-z]+:)?//)", h = "(?:\\S+(?::\\S*)?@)?", v = u.v4().source, f = u.v6().source, g = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", p = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", y = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", b = "(?::\\d{2,5})?", C = '(?:[/?#][^\\s"]*)?', E = "(?:".concat(d, "|www\\.)").concat(h, "(?:localhost|").concat(v, "|").concat(f, "|").concat(g).concat(p).concat(y, ")").concat(b).concat(C);
  return ca = new RegExp("(?:^".concat(E, "$)"), "i"), ca;
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
    return Ae(r) === "object" && !Yo.array(r);
  },
  method: function(r) {
    return typeof r == "function";
  },
  email: function(r) {
    return typeof r == "string" && r.length <= 320 && !!r.match(b0.email);
  },
  url: function(r) {
    return typeof r == "string" && r.length <= 2048 && !!r.match(V_());
  },
  hex: function(r) {
    return typeof r == "string" && !!r.match(b0.hex);
  }
}, H_ = function(r, t, n, o, i) {
  if (r.required && t === void 0) {
    $g(r, t, n, o, i);
    return;
  }
  var a = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = r.type;
  a.indexOf(s) > -1 ? Yo[s](t) || o.push(dr(i.messages.types[s], r.fullField, r.type)) : s && Ae(t) !== r.type && o.push(dr(i.messages.types[s], r.fullField, r.type));
}, W_ = function(r, t, n, o, i) {
  (/^\s+$/.test(t) || t === "") && o.push(dr(i.messages.whitespace, r.fullField));
};
const tt = {
  required: $g,
  whitespace: W_,
  type: H_,
  range: B_,
  enum: D_,
  pattern: z_
};
var q_ = function(r, t, n, o, i) {
  var a = [], s = r.required || !r.required && o.hasOwnProperty(r.field);
  if (s) {
    if (Ft(t) && !r.required)
      return n();
    tt.required(r, t, o, a, i);
  }
  n(a);
}, U_ = function(r, t, n, o, i) {
  var a = [], s = r.required || !r.required && o.hasOwnProperty(r.field);
  if (s) {
    if (t == null && !r.required)
      return n();
    tt.required(r, t, o, a, i, "array"), t != null && (tt.type(r, t, o, a, i), tt.range(r, t, o, a, i));
  }
  n(a);
}, G_ = function(r, t, n, o, i) {
  var a = [], s = r.required || !r.required && o.hasOwnProperty(r.field);
  if (s) {
    if (Ft(t) && !r.required)
      return n();
    tt.required(r, t, o, a, i), t !== void 0 && tt.type(r, t, o, a, i);
  }
  n(a);
}, X_ = function(r, t, n, o, i) {
  var a = [], s = r.required || !r.required && o.hasOwnProperty(r.field);
  if (s) {
    if (Ft(t, "date") && !r.required)
      return n();
    if (tt.required(r, t, o, a, i), !Ft(t, "date")) {
      var c;
      t instanceof Date ? c = t : c = new Date(t), tt.type(r, c, o, a, i), c && tt.range(r, c.getTime(), o, a, i);
    }
  }
  n(a);
}, K_ = "enum", Y_ = function(r, t, n, o, i) {
  var a = [], s = r.required || !r.required && o.hasOwnProperty(r.field);
  if (s) {
    if (Ft(t) && !r.required)
      return n();
    tt.required(r, t, o, a, i), t !== void 0 && tt[K_](r, t, o, a, i);
  }
  n(a);
}, J_ = function(r, t, n, o, i) {
  var a = [], s = r.required || !r.required && o.hasOwnProperty(r.field);
  if (s) {
    if (Ft(t) && !r.required)
      return n();
    tt.required(r, t, o, a, i), t !== void 0 && (tt.type(r, t, o, a, i), tt.range(r, t, o, a, i));
  }
  n(a);
}, Q_ = function(r, t, n, o, i) {
  var a = [], s = r.required || !r.required && o.hasOwnProperty(r.field);
  if (s) {
    if (Ft(t) && !r.required)
      return n();
    tt.required(r, t, o, a, i), t !== void 0 && (tt.type(r, t, o, a, i), tt.range(r, t, o, a, i));
  }
  n(a);
}, Z_ = function(r, t, n, o, i) {
  var a = [], s = r.required || !r.required && o.hasOwnProperty(r.field);
  if (s) {
    if (Ft(t) && !r.required)
      return n();
    tt.required(r, t, o, a, i), t !== void 0 && tt.type(r, t, o, a, i);
  }
  n(a);
}, eE = function(r, t, n, o, i) {
  var a = [], s = r.required || !r.required && o.hasOwnProperty(r.field);
  if (s) {
    if (t === "" && (t = void 0), Ft(t) && !r.required)
      return n();
    tt.required(r, t, o, a, i), t !== void 0 && (tt.type(r, t, o, a, i), tt.range(r, t, o, a, i));
  }
  n(a);
}, tE = function(r, t, n, o, i) {
  var a = [], s = r.required || !r.required && o.hasOwnProperty(r.field);
  if (s) {
    if (Ft(t) && !r.required)
      return n();
    tt.required(r, t, o, a, i), t !== void 0 && tt.type(r, t, o, a, i);
  }
  n(a);
}, rE = function(r, t, n, o, i) {
  var a = [], s = r.required || !r.required && o.hasOwnProperty(r.field);
  if (s) {
    if (Ft(t, "string") && !r.required)
      return n();
    tt.required(r, t, o, a, i), Ft(t, "string") || tt.pattern(r, t, o, a, i);
  }
  n(a);
}, nE = function(r, t, n, o, i) {
  var a = [], s = r.required || !r.required && o.hasOwnProperty(r.field);
  if (s) {
    if (Ft(t) && !r.required)
      return n();
    tt.required(r, t, o, a, i), Ft(t) || tt.type(r, t, o, a, i);
  }
  n(a);
}, oE = function(r, t, n, o, i) {
  var a = [], s = Array.isArray(t) ? "array" : Ae(t);
  tt.required(r, t, o, a, i, s), n(a);
}, iE = function(r, t, n, o, i) {
  var a = [], s = r.required || !r.required && o.hasOwnProperty(r.field);
  if (s) {
    if (Ft(t, "string") && !r.required)
      return n();
    tt.required(r, t, o, a, i, "string"), Ft(t, "string") || (tt.type(r, t, o, a, i), tt.range(r, t, o, a, i), tt.pattern(r, t, o, a, i), r.whitespace === !0 && tt.whitespace(r, t, o, a, i));
  }
  n(a);
}, Xc = function(r, t, n, o, i) {
  var a = r.type, s = [], c = r.required || !r.required && o.hasOwnProperty(r.field);
  if (c) {
    if (Ft(t, a) && !r.required)
      return n();
    tt.required(r, t, o, s, i, a), Ft(t, a) || tt.type(r, t, o, s, i);
  }
  n(s);
};
const ti = {
  string: iE,
  method: Z_,
  number: eE,
  boolean: G_,
  regexp: nE,
  integer: Q_,
  float: J_,
  array: U_,
  object: tE,
  enum: Y_,
  pattern: rE,
  date: X_,
  url: Xc,
  hex: Xc,
  email: Xc,
  required: oE,
  any: q_
};
var _i = /* @__PURE__ */ function() {
  function e(r) {
    Ht(this, e), F(this, "rules", null), F(this, "_messages", vu), this.define(r);
  }
  return Wt(e, [{
    key: "define",
    value: function(t) {
      var n = this;
      if (!t)
        throw new Error("Cannot configure a schema with no rules");
      if (Ae(t) !== "object" || Array.isArray(t))
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
      function l(f) {
        var g = [], p = {};
        function y(C) {
          if (Array.isArray(C)) {
            var E;
            g = (E = g).concat.apply(E, $e(C));
          } else
            g.push(C);
        }
        for (var b = 0; b < f.length; b++)
          y(f[b]);
        g.length ? (p = yu(g), c(g, p)) : c(null, a);
      }
      if (s.messages) {
        var u = this.messages();
        u === vu && (u = mu()), v0(u, s.messages), s.messages = u;
      } else
        s.messages = this.messages();
      var d = {}, h = s.keys || Object.keys(this.rules);
      h.forEach(function(f) {
        var g = n.rules[f], p = a[f];
        g.forEach(function(y) {
          var b = y;
          typeof b.transform == "function" && (a === t && (a = q({}, a)), p = a[f] = b.transform(p), p != null && (b.type = b.type || (Array.isArray(p) ? "array" : Ae(p)))), typeof b == "function" ? b = {
            validator: b
          } : b = q({}, b), b.validator = n.getValidationMethod(b), b.validator && (b.field = f, b.fullField = b.fullField || f, b.type = n.getType(b), d[f] = d[f] || [], d[f].push({
            rule: b,
            value: p,
            source: a,
            field: f
          }));
        });
      });
      var v = {};
      return F_(d, s, function(f, g) {
        var p = f.rule, y = (p.type === "object" || p.type === "array") && (Ae(p.fields) === "object" || Ae(p.defaultField) === "object");
        y = y && (p.required || !p.required && f.value), p.field = f.field;
        function b(w, A) {
          return q(q({}, A), {}, {
            fullField: "".concat(p.fullField, ".").concat(w),
            fullFields: p.fullFields ? [].concat($e(p.fullFields), [w]) : [w]
          });
        }
        function C() {
          var w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], A = Array.isArray(w) ? w : [w];
          !s.suppressWarning && A.length && e.warning("async-validator:", A), A.length && p.message !== void 0 && (A = [].concat(p.message));
          var N = A.map(m0(p, a));
          if (s.first && N.length)
            return v[p.field] = 1, g(N);
          if (!y)
            g(N);
          else {
            if (p.required && !f.value)
              return p.message !== void 0 ? N = [].concat(p.message).map(m0(p, a)) : s.error && (N = [s.error(p, dr(s.messages.required, p.field))]), g(N);
            var D = {};
            p.defaultField && Object.keys(f.value).map(function(L) {
              D[L] = p.defaultField;
            }), D = q(q({}, D), f.rule.fields);
            var V = {};
            Object.keys(D).forEach(function(L) {
              var z = D[L], H = Array.isArray(z) ? z : [z];
              V[L] = H.map(b.bind(null, L));
            });
            var U = new e(V);
            U.messages(s.messages), f.rule.options && (f.rule.options.messages = s.messages, f.rule.options.error = s.error), U.validate(f.value, f.rule.options || s, function(L) {
              var z = [];
              N && N.length && z.push.apply(z, $e(N)), L && L.length && z.push.apply(z, $e(L)), g(z.length ? z : null);
            });
          }
        }
        var E;
        if (p.asyncValidator)
          E = p.asyncValidator(p, f.value, C, f.source, s);
        else if (p.validator) {
          try {
            E = p.validator(p, f.value, C, f.source, s);
          } catch (w) {
            var m, _;
            (m = (_ = console).error) === null || m === void 0 || m.call(_, w), s.suppressValidatorError || setTimeout(function() {
              throw w;
            }, 0), C(w.message);
          }
          E === !0 ? C() : E === !1 ? C(typeof p.message == "function" ? p.message(p.fullField || p.field) : p.message || "".concat(p.fullField || p.field, " fails")) : E instanceof Array ? C(E) : E instanceof Error && C(E.message);
        }
        E && E.then && E.then(function() {
          return C();
        }, function(w) {
          return C(w);
        });
      }, function(f) {
        l(f);
      }, a);
    }
  }, {
    key: "getType",
    value: function(t) {
      if (t.type === void 0 && t.pattern instanceof RegExp && (t.type = "pattern"), typeof t.validator != "function" && t.type && !ti.hasOwnProperty(t.type))
        throw new Error(dr("Unknown rule type %s", t.type));
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
F(_i, "register", function(r, t) {
  if (typeof t != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  ti[r] = t;
});
F(_i, "warning", Rg);
F(_i, "messages", vu);
F(_i, "validators", ti);
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
}, y0 = _i;
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
  return Su = Dn(/* @__PURE__ */ tr().mark(function e(r, t, n, o, i) {
    var a, s, c, l, u, d, h, v, f;
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
          }), c = null, a && a.type === "array" && a.defaultField && (c = a.defaultField, delete a.defaultField), l = new y0(F({}, r, [a])), u = Qn(Tg, o.validateMessages), l.messages(u), d = [], p.prev = 10, p.next = 13, Promise.resolve(l.validate(F({}, r, t), q({}, o)));
        case 13:
          p.next = 18;
          break;
        case 15:
          p.prev = 15, p.t0 = p.catch(10), p.t0.errors && (d = p.t0.errors.map(function(y, b) {
            var C = y.message, E = C === w0 ? u.default : C;
            return /* @__PURE__ */ x.isValidElement(E) ? (
              // Wrap ReactNode with `key`
              /* @__PURE__ */ x.cloneElement(E, {
                key: "error_".concat(b)
              })
            ) : E;
          }));
        case 18:
          if (!(!d.length && c)) {
            p.next = 23;
            break;
          }
          return p.next = 21, Promise.all(t.map(function(y, b) {
            return wu("".concat(r, ".").concat(b), y, c, o, i);
          }));
        case 21:
          return h = p.sent, p.abrupt("return", h.reduce(function(y, b) {
            return [].concat($e(y), $e(b));
          }, []));
        case 23:
          return v = q(q({}, n), {}, {
            name: r,
            enum: (n.enum || []).join(", ")
          }, i), f = d.map(function(y) {
            return typeof y == "string" ? aE(y, v) : y;
          }), p.abrupt("return", f);
        case 26:
        case "end":
          return p.stop();
      }
    }, e, null, [[10, 15]]);
  })), Su.apply(this, arguments);
}
function sE(e, r, t, n, o, i) {
  var a = e.join("."), s = t.map(function(u, d) {
    var h = u.validator, v = q(q({}, u), {}, {
      ruleIndex: d
    });
    return h && (v.validator = function(f, g, p) {
      var y = !1, b = function() {
        for (var m = arguments.length, _ = new Array(m), w = 0; w < m; w++)
          _[w] = arguments[w];
        Promise.resolve().then(function() {
          Ct(!y, "Your validator function has already return a promise. `callback` will be ignored."), y || p.apply(void 0, _);
        });
      }, C = h(f, g, b);
      y = C && typeof C.then == "function" && typeof C.catch == "function", Ct(y, "`callback` is deprecated. Please return a promise instead."), y && C.then(function() {
        p();
      }).catch(function(E) {
        p(E || " ");
      });
    }), v;
  }).sort(function(u, d) {
    var h = u.warningOnly, v = u.ruleIndex, f = d.warningOnly, g = d.ruleIndex;
    return !!h == !!f ? v - g : h ? 1 : -1;
  }), c;
  if (o === !0)
    c = new Promise(/* @__PURE__ */ function() {
      var u = Dn(/* @__PURE__ */ tr().mark(function d(h, v) {
        var f, g, p;
        return tr().wrap(function(b) {
          for (; ; ) switch (b.prev = b.next) {
            case 0:
              f = 0;
            case 1:
              if (!(f < s.length)) {
                b.next = 12;
                break;
              }
              return g = s[f], b.next = 5, wu(a, r, g, n, i);
            case 5:
              if (p = b.sent, !p.length) {
                b.next = 9;
                break;
              }
              return v([{
                errors: p,
                rule: g
              }]), b.abrupt("return");
            case 9:
              f += 1, b.next = 1;
              break;
            case 12:
              h([]);
            case 13:
            case "end":
              return b.stop();
          }
        }, d);
      }));
      return function(d, h) {
        return u.apply(this, arguments);
      };
    }());
  else {
    var l = s.map(function(u) {
      return wu(a, r, u, n, i).then(function(d) {
        return {
          errors: d,
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
  return Cu.apply(this, arguments);
}
function Cu() {
  return Cu = Dn(/* @__PURE__ */ tr().mark(function e(r) {
    return tr().wrap(function(n) {
      for (; ; ) switch (n.prev = n.next) {
        case 0:
          return n.abrupt("return", Promise.all(r).then(function(o) {
            var i, a = (i = []).concat.apply(i, $e(o));
            return a;
          }));
        case 1:
        case "end":
          return n.stop();
      }
    }, e);
  })), Cu.apply(this, arguments);
}
function lE(e) {
  return _u.apply(this, arguments);
}
function _u() {
  return _u = Dn(/* @__PURE__ */ tr().mark(function e(r) {
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
  })), _u.apply(this, arguments);
}
function $t(e) {
  return gu(e);
}
function S0(e, r) {
  var t = {};
  return r.forEach(function(n) {
    var o = Dr(e, n);
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
  if (!e && r || e && !r || !e || !r || Ae(e) !== "object" || Ae(r) !== "object")
    return !1;
  var t = Object.keys(e), n = Object.keys(r), o = new Set([].concat(t, n));
  return $e(o).every(function(i) {
    var a = e[i], s = r[i];
    return typeof a == "function" && typeof s == "function" ? !0 : a === s;
  });
}
function dE(e) {
  var r = arguments.length <= 1 ? void 0 : arguments[1];
  return r && r.target && Ae(r.target) === "object" && e in r.target ? r.target[e] : r;
}
function C0(e, r, t) {
  var n = e.length;
  if (r < 0 || r >= n || t < 0 || t >= n)
    return e;
  var o = e[r], i = r - t;
  return i > 0 ? [].concat($e(e.slice(0, t)), [o], $e(e.slice(t, r)), $e(e.slice(r + 1, n))) : i < 0 ? [].concat($e(e.slice(0, r)), $e(e.slice(r + 1, t + 1)), [o], $e(e.slice(t + 1, n))) : e;
}
var fE = ["name"], xr = [];
function Kc(e, r, t, n, o, i) {
  return typeof e == "function" ? e(r, t, "source" in i ? {
    source: i.source
  } : {}) : n !== o;
}
var pd = /* @__PURE__ */ function(e) {
  mn(t, e);
  var r = vn(t);
  function t(n) {
    var o;
    if (Ht(this, t), o = r.call(this, n), F(Ye(o), "state", {
      resetCount: 0
    }), F(Ye(o), "cancelRegisterFunc", null), F(Ye(o), "mounted", !1), F(Ye(o), "touched", !1), F(Ye(o), "dirty", !1), F(Ye(o), "validatePromise", void 0), F(Ye(o), "prevValidating", void 0), F(Ye(o), "errors", xr), F(Ye(o), "warnings", xr), F(Ye(o), "cancelRegister", function() {
      var c = o.props, l = c.preserve, u = c.isListField, d = c.name;
      o.cancelRegisterFunc && o.cancelRegisterFunc(u, l, $t(d)), o.cancelRegisterFunc = null;
    }), F(Ye(o), "getNamePath", function() {
      var c = o.props, l = c.name, u = c.fieldContext, d = u.prefixName, h = d === void 0 ? [] : d;
      return l !== void 0 ? [].concat($e(h), $e(l)) : [];
    }), F(Ye(o), "getRules", function() {
      var c = o.props, l = c.rules, u = l === void 0 ? [] : l, d = c.fieldContext;
      return u.map(function(h) {
        return typeof h == "function" ? h(d) : h;
      });
    }), F(Ye(o), "refresh", function() {
      o.mounted && o.setState(function(c) {
        var l = c.resetCount;
        return {
          resetCount: l + 1
        };
      });
    }), F(Ye(o), "metaCache", null), F(Ye(o), "triggerMetaEvent", function(c) {
      var l = o.props.onMetaChange;
      if (l) {
        var u = q(q({}, o.getMeta()), {}, {
          destroy: c
        });
        Dl(o.metaCache, u) || l(u), o.metaCache = u;
      } else
        o.metaCache = null;
    }), F(Ye(o), "onStoreChange", function(c, l, u) {
      var d = o.props, h = d.shouldUpdate, v = d.dependencies, f = v === void 0 ? [] : v, g = d.onReset, p = u.store, y = o.getNamePath(), b = o.getValue(c), C = o.getValue(p), E = l && no(l, y);
      switch (u.type === "valueUpdate" && u.source === "external" && !Dl(b, C) && (o.touched = !0, o.dirty = !0, o.validatePromise = null, o.errors = xr, o.warnings = xr, o.triggerMetaEvent()), u.type) {
        case "reset":
          if (!l || E) {
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
          if (h && Kc(h, c, p, b, C, u)) {
            o.reRender();
            return;
          }
          break;
        }
        case "setField": {
          var m = u.data;
          if (E) {
            "touched" in m && (o.touched = m.touched), "validating" in m && !("originRCField" in m) && (o.validatePromise = m.validating ? Promise.resolve([]) : null), "errors" in m && (o.errors = m.errors || xr), "warnings" in m && (o.warnings = m.warnings || xr), o.dirty = !0, o.triggerMetaEvent(), o.reRender();
            return;
          } else if ("value" in m && no(l, y, !0)) {
            o.reRender();
            return;
          }
          if (h && !y.length && Kc(h, c, p, b, C, u)) {
            o.reRender();
            return;
          }
          break;
        }
        case "dependenciesUpdate": {
          var _ = f.map($t);
          if (_.some(function(w) {
            return no(u.relatedFields, w);
          })) {
            o.reRender();
            return;
          }
          break;
        }
        default:
          if (E || (!f.length || y.length || h) && Kc(h, c, p, b, C, u)) {
            o.reRender();
            return;
          }
          break;
      }
      h === !0 && o.reRender();
    }), F(Ye(o), "validateRules", function(c) {
      var l = o.getNamePath(), u = o.getValue(), d = c || {}, h = d.triggerName, v = d.validateOnly, f = v === void 0 ? !1 : v, g = Promise.resolve().then(/* @__PURE__ */ Dn(/* @__PURE__ */ tr().mark(function p() {
        var y, b, C, E, m, _, w;
        return tr().wrap(function(N) {
          for (; ; ) switch (N.prev = N.next) {
            case 0:
              if (o.mounted) {
                N.next = 2;
                break;
              }
              return N.abrupt("return", []);
            case 2:
              if (y = o.props, b = y.validateFirst, C = b === void 0 ? !1 : b, E = y.messageVariables, m = y.validateDebounce, _ = o.getRules(), h && (_ = _.filter(function(D) {
                return D;
              }).filter(function(D) {
                var V = D.validateTrigger;
                if (!V)
                  return !0;
                var U = gu(V);
                return U.includes(h);
              })), !(m && h)) {
                N.next = 10;
                break;
              }
              return N.next = 8, new Promise(function(D) {
                setTimeout(D, m);
              });
            case 8:
              if (o.validatePromise === g) {
                N.next = 10;
                break;
              }
              return N.abrupt("return", []);
            case 10:
              return w = sE(l, u, _, c, C, E), w.catch(function(D) {
                return D;
              }).then(function() {
                var D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : xr;
                if (o.validatePromise === g) {
                  var V;
                  o.validatePromise = null;
                  var U = [], L = [];
                  (V = D.forEach) === null || V === void 0 || V.call(D, function(z) {
                    var H = z.rule.warningOnly, T = z.errors, I = T === void 0 ? xr : T;
                    H ? L.push.apply(L, $e(I)) : U.push.apply(U, $e(I));
                  }), o.errors = U, o.warnings = L, o.triggerMetaEvent(), o.reRender();
                }
              }), N.abrupt("return", w);
            case 13:
            case "end":
              return N.stop();
          }
        }, p);
      })));
      return f || (o.validatePromise = g, o.dirty = !0, o.errors = xr, o.warnings = xr, o.triggerMetaEvent(), o.reRender()), g;
    }), F(Ye(o), "isFieldValidating", function() {
      return !!o.validatePromise;
    }), F(Ye(o), "isFieldTouched", function() {
      return o.touched;
    }), F(Ye(o), "isFieldDirty", function() {
      if (o.dirty || o.props.initialValue !== void 0)
        return !0;
      var c = o.props.fieldContext, l = c.getInternalHooks(En), u = l.getInitialValue;
      return u(o.getNamePath()) !== void 0;
    }), F(Ye(o), "getErrors", function() {
      return o.errors;
    }), F(Ye(o), "getWarnings", function() {
      return o.warnings;
    }), F(Ye(o), "isListField", function() {
      return o.props.isListField;
    }), F(Ye(o), "isList", function() {
      return o.props.isList;
    }), F(Ye(o), "isPreserve", function() {
      return o.props.preserve;
    }), F(Ye(o), "getMeta", function() {
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
    }), F(Ye(o), "getOnlyChild", function(c) {
      if (typeof c == "function") {
        var l = o.getMeta();
        return q(q({}, o.getOnlyChild(c(o.getControlled(), l, o.props.fieldContext))), {}, {
          isFunction: !0
        });
      }
      var u = xn(c);
      return u.length !== 1 || !/* @__PURE__ */ x.isValidElement(u[0]) ? {
        child: u,
        isFunction: !1
      } : {
        child: u[0],
        isFunction: !1
      };
    }), F(Ye(o), "getValue", function(c) {
      var l = o.props.fieldContext.getFieldsValue, u = o.getNamePath();
      return Dr(c || l(!0), u);
    }), F(Ye(o), "getControlled", function() {
      var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = o.props, u = l.name, d = l.trigger, h = l.validateTrigger, v = l.getValueFromEvent, f = l.normalize, g = l.valuePropName, p = l.getValueProps, y = l.fieldContext, b = h !== void 0 ? h : y.validateTrigger, C = o.getNamePath(), E = y.getInternalHooks, m = y.getFieldsValue, _ = E(En), w = _.dispatch, A = o.getValue(), N = p || function(z) {
        return F({}, g, z);
      }, D = c[d], V = u !== void 0 ? N(A) : {};
      process.env.NODE_ENV !== "production" && V && Object.keys(V).forEach(function(z) {
        Ct(typeof V[z] != "function", "It's not recommended to generate dynamic function prop by `getValueProps`. Please pass it to child component directly (prop: ".concat(z, ")"));
      });
      var U = q(q({}, c), V);
      U[d] = function() {
        o.touched = !0, o.dirty = !0, o.triggerMetaEvent();
        for (var z, H = arguments.length, T = new Array(H), I = 0; I < H; I++)
          T[I] = arguments[I];
        v ? z = v.apply(void 0, T) : z = dE.apply(void 0, [g].concat(T)), f && (z = f(z, A, m(!0))), z !== A && w({
          type: "updateValue",
          namePath: C,
          value: z
        }), D && D.apply(void 0, T);
      };
      var L = gu(b || []);
      return L.forEach(function(z) {
        var H = U[z];
        U[z] = function() {
          H && H.apply(void 0, arguments);
          var T = o.props.rules;
          T && T.length && w({
            type: "validateField",
            namePath: C,
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
      return c ? l = s : /* @__PURE__ */ x.isValidElement(s) ? l = /* @__PURE__ */ x.cloneElement(s, this.getControlled(s.props)) : (Ct(!s, "`children` of Field is not validate ReactElement."), l = s), /* @__PURE__ */ x.createElement(x.Fragment, {
        key: o
      }, l);
    }
  }]), t;
}(x.Component);
F(pd, "contextType", bo);
F(pd, "defaultProps", {
  trigger: "onChange",
  valuePropName: "value"
});
function Ag(e) {
  var r, t = e.name, n = Xt(e, fE), o = x.useContext(bo), i = x.useContext(Ka), a = t !== void 0 ? $t(t) : void 0, s = (r = n.isListField) !== null && r !== void 0 ? r : !!i, c = "keep";
  return s || (c = "_".concat((a || []).join("_"))), process.env.NODE_ENV !== "production" && n.preserve === !1 && s && a.length <= 1 && Ct(!1, "`preserve` should not apply on Form.List fields."), /* @__PURE__ */ x.createElement(pd, bt({
    key: c,
    name: a,
    isListField: s
  }, n, {
    fieldContext: o
  }));
}
function hE(e) {
  var r = e.name, t = e.initialValue, n = e.children, o = e.rules, i = e.validateTrigger, a = e.isListField, s = x.useContext(bo), c = x.useContext(Ka), l = x.useRef({
    keys: [],
    id: 0
  }), u = l.current, d = x.useMemo(function() {
    var g = $t(s.prefixName) || [];
    return [].concat($e(g), $e($t(r)));
  }, [s.prefixName, r]), h = x.useMemo(function() {
    return q(q({}, s), {}, {
      prefixName: d
    });
  }, [s, d]), v = x.useMemo(function() {
    return {
      getKey: function(p) {
        var y = d.length, b = p[y];
        return [u.keys[b], p.slice(y + 1)];
      }
    };
  }, [d]);
  if (typeof n != "function")
    return Ct(!1, "Form.List only accepts function as children."), null;
  var f = function(p, y, b) {
    var C = b.source;
    return C === "internal" ? !1 : p !== y;
  };
  return /* @__PURE__ */ x.createElement(Ka.Provider, {
    value: v
  }, /* @__PURE__ */ x.createElement(bo.Provider, {
    value: h
  }, /* @__PURE__ */ x.createElement(Ag, {
    name: [],
    shouldUpdate: f,
    rules: o,
    validateTrigger: i,
    initialValue: t,
    isList: !0,
    isListField: a ?? !!c
  }, function(g, p) {
    var y = g.value, b = y === void 0 ? [] : y, C = g.onChange, E = s.getFieldValue, m = function() {
      var N = E(d || []);
      return N || [];
    }, _ = {
      add: function(N, D) {
        var V = m();
        D >= 0 && D <= V.length ? (u.keys = [].concat($e(u.keys.slice(0, D)), [u.id], $e(u.keys.slice(D))), C([].concat($e(V.slice(0, D)), [N], $e(V.slice(D))))) : (process.env.NODE_ENV !== "production" && (D < 0 || D > V.length) && Ct(!1, "The second parameter of the add function should be a valid positive number."), u.keys = [].concat($e(u.keys), [u.id]), C([].concat($e(V), [N]))), u.id += 1;
      },
      remove: function(N) {
        var D = m(), V = new Set(Array.isArray(N) ? N : [N]);
        V.size <= 0 || (u.keys = u.keys.filter(function(U, L) {
          return !V.has(L);
        }), C(D.filter(function(U, L) {
          return !V.has(L);
        })));
      },
      move: function(N, D) {
        if (N !== D) {
          var V = m();
          N < 0 || N >= V.length || D < 0 || D >= V.length || (u.keys = C0(u.keys, N, D), C(C0(V, N, D)));
        }
      }
    }, w = b || [];
    return Array.isArray(w) || (w = [], process.env.NODE_ENV !== "production" && Ct(!1, "Current value of '".concat(d.join(" > "), "' is not an array type."))), n(w.map(function(A, N) {
      var D = u.keys[N];
      return D === void 0 && (u.keys[N] = u.id, D = u.keys[N], u.id += 1), {
        name: N,
        key: D,
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
var Ng = "__@field_split__";
function Yc(e) {
  return e.map(function(r) {
    return "".concat(Ae(r), ":").concat(r);
  }).join(Ng);
}
var Xn = /* @__PURE__ */ function() {
  function e() {
    Ht(this, e), F(this, "kvs", /* @__PURE__ */ new Map());
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
      return $e(this.kvs.entries()).map(function(n) {
        var o = ne(n, 2), i = o[0], a = o[1], s = i.split(Ng);
        return t({
          key: s.map(function(c) {
            var l = c.match(/^([^:]*):(.*)$/), u = ne(l, 3), d = u[1], h = u[2];
            return d === "number" ? Number(h) : h;
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
  Ht(this, e), F(this, "formHooked", !1), F(this, "forceRootUpdate", void 0), F(this, "subscribable", !0), F(this, "store", {}), F(this, "fieldEntities", []), F(this, "initialValues", {}), F(this, "callbacks", {}), F(this, "validateMessages", null), F(this, "preserve", null), F(this, "lastValidatePromise", null), F(this, "getForm", function() {
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
  }), F(this, "getInternalHooks", function(n) {
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
    }) : (Ct(!1, "`getInternalHooks` is internal usage. Should not call directly."), null);
  }), F(this, "useSubscribe", function(n) {
    t.subscribable = n;
  }), F(this, "prevWithoutPreserves", null), F(this, "setInitialValues", function(n, o) {
    if (t.initialValues = n || {}, o) {
      var i, a = Qn(n, t.store);
      (i = t.prevWithoutPreserves) === null || i === void 0 || i.map(function(s) {
        var c = s.key;
        a = Or(a, c, Dr(n, c));
      }), t.prevWithoutPreserves = null, t.updateStore(a);
    }
  }), F(this, "destroyForm", function(n) {
    if (n)
      t.updateStore({});
    else {
      var o = new Xn();
      t.getFieldEntities(!0).forEach(function(i) {
        t.isMergedPreserve(i.isPreserve()) || o.set(i.getNamePath(), !0);
      }), t.prevWithoutPreserves = o;
    }
  }), F(this, "getInitialValue", function(n) {
    var o = Dr(t.initialValues, n);
    return n.length ? Qn(o) : o;
  }), F(this, "setCallbacks", function(n) {
    t.callbacks = n;
  }), F(this, "setValidateMessages", function(n) {
    t.validateMessages = n;
  }), F(this, "setPreserve", function(n) {
    t.preserve = n;
  }), F(this, "watchList", []), F(this, "registerWatch", function(n) {
    return t.watchList.push(n), function() {
      t.watchList = t.watchList.filter(function(o) {
        return o !== n;
      });
    };
  }), F(this, "notifyWatch", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    if (t.watchList.length) {
      var o = t.getFieldsValue(), i = t.getFieldsValue(!0);
      t.watchList.forEach(function(a) {
        a(o, i, n);
      });
    }
  }), F(this, "timeoutId", null), F(this, "warningUnhooked", function() {
    process.env.NODE_ENV !== "production" && !t.timeoutId && typeof window < "u" && (t.timeoutId = setTimeout(function() {
      t.timeoutId = null, t.formHooked || Ct(!1, "Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?");
    }));
  }), F(this, "updateStore", function(n) {
    t.store = n;
  }), F(this, "getFieldEntities", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    return n ? t.fieldEntities.filter(function(o) {
      return o.getNamePath().length;
    }) : t.fieldEntities;
  }), F(this, "getFieldsMap", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, o = new Xn();
    return t.getFieldEntities(n).forEach(function(i) {
      var a = i.getNamePath();
      o.set(a, i);
    }), o;
  }), F(this, "getFieldEntitiesForNamePathList", function(n) {
    if (!n)
      return t.getFieldEntities(!0);
    var o = t.getFieldsMap(!0);
    return n.map(function(i) {
      var a = $t(i);
      return o.get(a) || {
        INVALIDATE_NAME_PATH: $t(i)
      };
    });
  }), F(this, "getFieldsValue", function(n, o) {
    t.warningUnhooked();
    var i, a, s;
    if (n === !0 || Array.isArray(n) ? (i = n, a = o) : n && Ae(n) === "object" && (s = n.strict, a = n.filter), i === !0 && !a)
      return t.store;
    var c = t.getFieldEntitiesForNamePathList(Array.isArray(i) ? i : null), l = [];
    return c.forEach(function(u) {
      var d, h, v = "INVALIDATE_NAME_PATH" in u ? u.INVALIDATE_NAME_PATH : u.getNamePath();
      if (s) {
        var f, g;
        if ((f = (g = u).isList) !== null && f !== void 0 && f.call(g))
          return;
      } else if (!i && (d = (h = u).isListField) !== null && d !== void 0 && d.call(h))
        return;
      if (!a)
        l.push(v);
      else {
        var p = "getMeta" in u ? u.getMeta() : null;
        a(p) && l.push(v);
      }
    }), S0(t.store, l.map($t));
  }), F(this, "getFieldValue", function(n) {
    t.warningUnhooked();
    var o = $t(n);
    return Dr(t.store, o);
  }), F(this, "getFieldsError", function(n) {
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
  }), F(this, "getFieldError", function(n) {
    t.warningUnhooked();
    var o = $t(n), i = t.getFieldsError([o])[0];
    return i.errors;
  }), F(this, "getFieldWarning", function(n) {
    t.warningUnhooked();
    var o = $t(n), i = t.getFieldsError([o])[0];
    return i.warnings;
  }), F(this, "isFieldsTouched", function() {
    t.warningUnhooked();
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    var a = o[0], s = o[1], c, l = !1;
    o.length === 0 ? c = null : o.length === 1 ? Array.isArray(a) ? (c = a.map($t), l = !1) : (c = null, l = a) : (c = a.map($t), l = s);
    var u = t.getFieldEntities(!0), d = function(p) {
      return p.isFieldTouched();
    };
    if (!c)
      return l ? u.every(function(g) {
        return d(g) || g.isList();
      }) : u.some(d);
    var h = new Xn();
    c.forEach(function(g) {
      h.set(g, []);
    }), u.forEach(function(g) {
      var p = g.getNamePath();
      c.forEach(function(y) {
        y.every(function(b, C) {
          return p[C] === b;
        }) && h.update(y, function(b) {
          return [].concat($e(b), [g]);
        });
      });
    });
    var v = function(p) {
      return p.some(d);
    }, f = h.map(function(g) {
      var p = g.value;
      return p;
    });
    return l ? f.every(v) : f.some(v);
  }), F(this, "isFieldTouched", function(n) {
    return t.warningUnhooked(), t.isFieldsTouched([n]);
  }), F(this, "isFieldsValidating", function(n) {
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
  }), F(this, "isFieldValidating", function(n) {
    return t.warningUnhooked(), t.isFieldsValidating([n]);
  }), F(this, "resetWithFieldInitialValue", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = new Xn(), i = t.getFieldEntities(!0);
    i.forEach(function(c) {
      var l = c.props.initialValue, u = c.getNamePath();
      if (l !== void 0) {
        var d = o.get(u) || /* @__PURE__ */ new Set();
        d.add({
          entity: c,
          value: l
        }), o.set(u, d);
      }
    });
    var a = function(l) {
      l.forEach(function(u) {
        var d = u.props.initialValue;
        if (d !== void 0) {
          var h = u.getNamePath(), v = t.getInitialValue(h);
          if (v !== void 0)
            Ct(!1, "Form already set 'initialValues' with path '".concat(h.join("."), "'. Field can not overwrite it."));
          else {
            var f = o.get(h);
            if (f && f.size > 1)
              Ct(!1, "Multiple Field with path '".concat(h.join("."), "' set 'initialValue'. Can not decide which one to pick."));
            else if (f) {
              var g = t.getFieldValue(h), p = u.isListField();
              !p && (!n.skipExist || g === void 0) && t.updateStore(Or(t.store, h, $e(f)[0].value));
            }
          }
        }
      });
    }, s;
    n.entities ? s = n.entities : n.namePathList ? (s = [], n.namePathList.forEach(function(c) {
      var l = o.get(c);
      if (l) {
        var u;
        (u = s).push.apply(u, $e($e(l).map(function(d) {
          return d.entity;
        })));
      }
    })) : s = i, a(s);
  }), F(this, "resetFields", function(n) {
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
  }), F(this, "setFields", function(n) {
    t.warningUnhooked();
    var o = t.store, i = [];
    n.forEach(function(a) {
      var s = a.name, c = Xt(a, xE), l = $t(s);
      i.push(l), "value" in c && t.updateStore(Or(t.store, l, c.value)), t.notifyObservers(o, [l], {
        type: "setField",
        data: a
      });
    }), t.notifyWatch(i);
  }), F(this, "getFields", function() {
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
  }), F(this, "initEntityValue", function(n) {
    var o = n.props.initialValue;
    if (o !== void 0) {
      var i = n.getNamePath(), a = Dr(t.store, i);
      a === void 0 && t.updateStore(Or(t.store, i, o));
    }
  }), F(this, "isMergedPreserve", function(n) {
    var o = n !== void 0 ? n : t.preserve;
    return o ?? !0;
  }), F(this, "registerField", function(n) {
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
      if (t.fieldEntities = t.fieldEntities.filter(function(d) {
        return d !== n;
      }), !t.isMergedPreserve(s) && (!a || c.length > 1)) {
        var l = a ? void 0 : t.getInitialValue(o);
        if (o.length && t.getFieldValue(o) !== l && t.fieldEntities.every(function(d) {
          return (
            // Only reset when no namePath exist
            !Pg(d.getNamePath(), o)
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
  }), F(this, "dispatch", function(n) {
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
  }), F(this, "notifyObservers", function(n, o, i) {
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
  }), F(this, "triggerDependenciesUpdate", function(n, o) {
    var i = t.getDependencyChildrenFields(o);
    return i.length && t.validateFields(i), t.notifyObservers(n, i, {
      type: "dependenciesUpdate",
      relatedFields: [o].concat($e(i))
    }), i;
  }), F(this, "updateValue", function(n, o) {
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
    t.triggerOnFieldsChange([i].concat($e(s)));
  }), F(this, "setFieldsValue", function(n) {
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
  }), F(this, "setFieldValue", function(n, o) {
    t.setFields([{
      name: n,
      value: o,
      errors: [],
      warnings: []
    }]);
  }), F(this, "getDependencyChildrenFields", function(n) {
    var o = /* @__PURE__ */ new Set(), i = [], a = new Xn();
    t.getFieldEntities().forEach(function(c) {
      var l = c.props.dependencies;
      (l || []).forEach(function(u) {
        var d = $t(u);
        a.update(d, function() {
          var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Set();
          return h.add(c), h;
        });
      });
    });
    var s = function c(l) {
      var u = a.get(l) || /* @__PURE__ */ new Set();
      u.forEach(function(d) {
        if (!o.has(d)) {
          o.add(d);
          var h = d.getNamePath();
          d.isFieldDirty() && h.length && (i.push(h), c(h));
        }
      });
    };
    return s(n), i;
  }), F(this, "triggerOnFieldsChange", function(n, o) {
    var i = t.callbacks.onFieldsChange;
    if (i) {
      var a = t.getFields();
      if (o) {
        var s = new Xn();
        o.forEach(function(l) {
          var u = l.name, d = l.errors;
          s.set(u, d);
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
  }), F(this, "validateFields", function(n, o) {
    t.warningUnhooked();
    var i, a;
    Array.isArray(n) || typeof n == "string" || typeof o == "string" ? (i = n, a = o) : a = n;
    var s = !!i, c = s ? i.map($t) : [], l = [], u = String(Date.now()), d = /* @__PURE__ */ new Set(), h = a || {}, v = h.recursive, f = h.dirty;
    t.getFieldEntities(!0).forEach(function(b) {
      if (s || c.push(b.getNamePath()), !(!b.props.rules || !b.props.rules.length) && !(f && !b.isFieldDirty())) {
        var C = b.getNamePath();
        if (d.add(C.join(u)), !s || no(c, C, v)) {
          var E = b.validateRules(q({
            validateMessages: q(q({}, Tg), t.validateMessages)
          }, a));
          l.push(E.then(function() {
            return {
              name: C,
              errors: [],
              warnings: []
            };
          }).catch(function(m) {
            var _, w = [], A = [];
            return (_ = m.forEach) === null || _ === void 0 || _.call(m, function(N) {
              var D = N.rule.warningOnly, V = N.errors;
              D ? A.push.apply(A, $e(V)) : w.push.apply(w, $e(V));
            }), w.length ? Promise.reject({
              name: C,
              errors: w,
              warnings: A
            }) : {
              name: C,
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
      var C = b.map(function(E) {
        var m = E.name;
        return m;
      });
      t.notifyObservers(t.store, C, {
        type: "validateFinish"
      }), t.triggerOnFieldsChange(C, b);
    });
    var p = g.then(function() {
      return t.lastValidatePromise === g ? Promise.resolve(t.getFieldsValue(c)) : Promise.reject([]);
    }).catch(function(b) {
      var C = b.filter(function(E) {
        return E && E.errors.length;
      });
      return Promise.reject({
        values: t.getFieldsValue(c),
        errorFields: C,
        outOfDate: t.lastValidatePromise !== g
      });
    });
    p.catch(function(b) {
      return b;
    });
    var y = c.filter(function(b) {
      return d.has(b.join(u));
    });
    return t.triggerOnFieldsChange(y), p;
  }), F(this, "submit", function() {
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
        l && (s.current = q(q({}, s.current), {}, F({}, l, u))), a.registerForm(l, u);
      },
      unregisterForm: function(l) {
        var u = q({}, s.current);
        delete u[l], s.current = u, a.unregisterForm(l);
      }
    })
  }, i);
}, vE = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed", "clearOnDestroy"], bE = function(r, t) {
  var n = r.name, o = r.initialValues, i = r.fields, a = r.form, s = r.preserve, c = r.children, l = r.component, u = l === void 0 ? "form" : l, d = r.validateMessages, h = r.validateTrigger, v = h === void 0 ? "onChange" : h, f = r.onValuesChange, g = r.onFieldsChange, p = r.onFinish, y = r.onFinishFailed, b = r.clearOnDestroy, C = Xt(r, vE), E = x.useRef(null), m = x.useContext(Eu), _ = Ig(a), w = ne(_, 1), A = w[0], N = A.getInternalHooks(En), D = N.useSubscribe, V = N.setInitialValues, U = N.setCallbacks, L = N.setValidateMessages, z = N.setPreserve, H = N.destroyForm;
  x.useImperativeHandle(t, function() {
    return q(q({}, A), {}, {
      nativeElement: E.current
    });
  }), x.useEffect(function() {
    return m.registerForm(n, A), function() {
      m.unregisterForm(n);
    };
  }, [m, A, n]), L(q(q({}, m.validateMessages), d)), U({
    onValuesChange: f,
    onFieldsChange: function(G) {
      if (m.triggerFormChange(n, G), g) {
        for (var te = arguments.length, ie = new Array(te > 1 ? te - 1 : 0), he = 1; he < te; he++)
          ie[he - 1] = arguments[he];
        g.apply(void 0, [G].concat(ie));
      }
    },
    onFinish: function(G) {
      m.triggerFormFinish(n, G), p && p(G);
    },
    onFinishFailed: y
  }), z(s);
  var T = x.useRef(null);
  V(o, !T.current), T.current || (T.current = !0), x.useEffect(
    function() {
      return function() {
        return H(b);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  var I, P = typeof c == "function";
  if (P) {
    var B = A.getFieldsValue(!0);
    I = c(B, A);
  } else
    I = c;
  D(!P);
  var W = x.useRef();
  x.useEffect(function() {
    uE(W.current || [], i || []) || A.setFields(i || []), W.current = i;
  }, [i, A]);
  var Y = x.useMemo(function() {
    return q(q({}, A), {}, {
      validateTrigger: v
    });
  }, [A, v]), K = /* @__PURE__ */ x.createElement(Ka.Provider, {
    value: null
  }, /* @__PURE__ */ x.createElement(bo.Provider, {
    value: Y
  }, I));
  return u === !1 ? K : /* @__PURE__ */ x.createElement(u, bt({}, C, {
    ref: E,
    onSubmit: function(G) {
      G.preventDefault(), G.stopPropagation(), A.submit();
    },
    onReset: function(G) {
      var te;
      G.preventDefault(), A.resetFields(), (te = C.onReset) === null || te === void 0 || te.call(C, G);
    }
  }), K);
};
function _0(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return Math.random();
  }
}
var yE = process.env.NODE_ENV !== "production" ? function(e) {
  var r = e.join("__RC_FIELD_FORM_SPLIT__"), t = Pe(r);
  Ct(t.current === r, "`useWatch` is not support dynamic `namePath`. Please provide static instead.");
} : function() {
};
function wE() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  var n = r[0], o = r[1], i = o === void 0 ? {} : o, a = T_(i) ? {
    form: i
  } : i, s = a.form, c = jt(), l = ne(c, 2), u = l[0], d = l[1], h = Nn(function() {
    return _0(u);
  }, [u]), v = Pe(h);
  v.current = h;
  var f = ir(bo), g = s || f, p = g && g._init;
  process.env.NODE_ENV !== "production" && Ct(r.length === 2 ? s ? p : !0 : p, "useWatch requires a form instance since it can not auto detect from context.");
  var y = $t(n), b = Pe(y);
  return b.current = y, yE(y), ut(
    function() {
      if (p) {
        var C = g.getFieldsValue, E = g.getInternalHooks, m = E(En), _ = m.registerWatch, w = function(V, U) {
          var L = a.preserve ? U : V;
          return typeof n == "function" ? n(L) : Dr(L, b.current);
        }, A = _(function(D, V) {
          var U = w(D, V), L = _0(U);
          v.current !== L && (v.current = L, d(U));
        }), N = w(C(), C(!0));
        return u !== N && d(N), A;
      }
    },
    // We do not need re-register since namePath content is the same
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [p]
  ), u;
}
var SE = /* @__PURE__ */ x.forwardRef(bE), Ei = SE;
Ei.FormProvider = mE;
Ei.Field = Ag;
Ei.List = hE;
Ei.useForm = Ig;
Ei.useWatch = wE;
const fi = /* @__PURE__ */ x.createContext({});
process.env.NODE_ENV !== "production" && (fi.displayName = "FormItemInputContext");
const CE = (e) => {
  let {
    children: r,
    status: t,
    override: n
  } = e;
  const o = x.useContext(fi), i = x.useMemo(() => {
    const a = Object.assign({}, o);
    return n && delete a.isFormItemInput, t && (delete a.status, delete a.hasFeedback, delete a.feedbackIcon), a;
  }, [t, n, o]);
  return /* @__PURE__ */ x.createElement(fi.Provider, {
    value: i
  }, r);
}, _E = /* @__PURE__ */ x.createContext(void 0), Ou = (e) => {
  const {
    space: r,
    form: t,
    children: n
  } = e;
  if (n == null)
    return null;
  let o = n;
  return t && (o = /* @__PURE__ */ Q.createElement(CE, {
    override: !0,
    status: !0
  }, o)), r && (o = /* @__PURE__ */ Q.createElement(nC, null, o)), o;
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
  var r = e.prefixCls, t = e.align, n = e.arrow, o = e.arrowPos, i = n || {}, a = i.className, s = i.content, c = o.x, l = c === void 0 ? 0 : c, u = o.y, d = u === void 0 ? 0 : u, h = x.useRef();
  if (!t || !t.points)
    return null;
  var v = {
    position: "absolute"
  };
  if (t.autoArrow !== !1) {
    var f = t.points[0], g = t.points[1], p = f[0], y = f[1], b = g[0], C = g[1];
    p === b || !["t", "b"].includes(p) ? v.top = d : p === "t" ? v.top = 0 : v.bottom = 0, y === C || !["l", "r"].includes(y) ? v.left = l : y === "l" ? v.left = 0 : v.right = 0;
  }
  return /* @__PURE__ */ x.createElement("div", {
    ref: h,
    className: fe("".concat(r, "-arrow"), a),
    style: v
  }, s);
}
function $E(e) {
  var r = e.prefixCls, t = e.open, n = e.zIndex, o = e.mask, i = e.motion;
  return o ? /* @__PURE__ */ x.createElement(yi, bt({}, i, {
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
var jg = /* @__PURE__ */ x.memo(function(e) {
  var r = e.children;
  return r;
}, function(e, r) {
  return r.cache;
});
process.env.NODE_ENV !== "production" && (jg.displayName = "PopupContent");
var Mg = /* @__PURE__ */ x.forwardRef(function(e, r) {
  var t = e.popup, n = e.className, o = e.prefixCls, i = e.style, a = e.target, s = e.onVisibleChanged, c = e.open, l = e.keepDom, u = e.fresh, d = e.onClick, h = e.mask, v = e.arrow, f = e.arrowPos, g = e.align, p = e.motion, y = e.maskMotion, b = e.forceRender, C = e.getPopupContainer, E = e.autoDestroy, m = e.portal, _ = e.zIndex, w = e.onMouseEnter, A = e.onMouseLeave, N = e.onPointerEnter, D = e.onPointerDownCapture, V = e.ready, U = e.offsetX, L = e.offsetY, z = e.offsetR, H = e.offsetB, T = e.onAlign, I = e.onPrepare, P = e.stretch, B = e.targetWidth, W = e.targetHeight, Y = typeof t == "function" ? t() : t, K = c || l, Z = (C == null ? void 0 : C.length) > 0, G = x.useState(!C || !Z), te = ne(G, 2), ie = te[0], he = te[1];
  if (St(function() {
    !ie && Z && a && he(!0);
  }, [ie, Z, a]), !ie)
    return null;
  var pe = "auto", xe = {
    left: "-1000vw",
    top: "-1000vh",
    right: pe,
    bottom: pe
  };
  if (V || !c) {
    var Se, ae = g.points, se = g.dynamicInset || ((Se = g._experimental) === null || Se === void 0 ? void 0 : Se.dynamicInset), _e = se && ae[0][1] === "r", re = se && ae[0][0] === "b";
    _e ? (xe.right = z, xe.left = pe) : (xe.left = U, xe.right = pe), re ? (xe.bottom = H, xe.top = pe) : (xe.top = L, xe.bottom = pe);
  }
  var ve = {};
  return P && (P.includes("height") && W ? ve.height = W : P.includes("minHeight") && W && (ve.minHeight = W), P.includes("width") && B ? ve.width = B : P.includes("minWidth") && B && (ve.minWidth = B)), c || (ve.pointerEvents = "none"), /* @__PURE__ */ x.createElement(m, {
    open: b || K,
    getContainer: C && function() {
      return C(a);
    },
    autoDestroy: E
  }, /* @__PURE__ */ x.createElement($E, {
    prefixCls: o,
    open: c,
    zIndex: _,
    mask: h,
    motion: y
  }), /* @__PURE__ */ x.createElement(Oo, {
    onResize: T,
    disabled: !c
  }, function(ce) {
    return /* @__PURE__ */ x.createElement(yi, bt({
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
      onVisibleChanged: function(Ce) {
        var we;
        p == null || (we = p.onVisibleChanged) === null || we === void 0 || we.call(p, Ce), s(Ce);
      }
    }), function(be, Ce) {
      var we = be.className, ze = be.style, Te = fe(o, we, n);
      return /* @__PURE__ */ x.createElement("div", {
        ref: Ln(ce, r, Ce),
        className: Te,
        style: q(q(q(q({
          "--arrow-x": "".concat(f.x || 0, "px"),
          "--arrow-y": "".concat(f.y || 0, "px")
        }, xe), ve), ze), {}, {
          boxSizing: "border-box",
          zIndex: _
        }, i),
        onMouseEnter: w,
        onMouseLeave: A,
        onPointerEnter: N,
        onClick: d,
        onPointerDownCapture: D
      }, v && /* @__PURE__ */ x.createElement(RE, {
        prefixCls: o,
        arrow: v,
        arrowPos: f,
        align: g
      }), /* @__PURE__ */ x.createElement(jg, {
        cache: !c && !u
      }, Y));
    });
  }));
});
process.env.NODE_ENV !== "production" && (Mg.displayName = "Popup");
var Fg = /* @__PURE__ */ x.forwardRef(function(e, r) {
  var t = e.children, n = e.getTriggerDOMNode, o = mi(t), i = x.useCallback(function(s) {
    Yu(r, n ? n(s) : s);
  }, [n]), a = Ms(i, Fs(t));
  return o ? /* @__PURE__ */ x.cloneElement(t, {
    ref: a
  }) : t;
});
process.env.NODE_ENV !== "production" && (Fg.displayName = "TriggerWrapper");
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
function AE(e, r, t, n) {
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
function Oi(e) {
  return e.ownerDocument.defaultView;
}
function Ru(e) {
  for (var r = [], t = e == null ? void 0 : e.parentElement, n = ["hidden", "scroll", "clip", "auto"]; t; ) {
    var o = Oi(t).getComputedStyle(t), i = o.overflowX, a = o.overflowY, s = o.overflow;
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
      var o = Oi(n).getComputedStyle(n), i = o.overflow, a = o.overflowClipMargin, s = o.borderTopWidth, c = o.borderBottomWidth, l = o.borderLeftWidth, u = o.borderRightWidth, d = n.getBoundingClientRect(), h = n.offsetHeight, v = n.clientHeight, f = n.offsetWidth, g = n.clientWidth, p = Wo(s), y = Wo(c), b = Wo(l), C = Wo(u), E = hi(Math.round(d.width / f * 1e3) / 1e3), m = hi(Math.round(d.height / h * 1e3) / 1e3), _ = (f - g - b - C) * E, w = (h - v - p - y) * m, A = p * m, N = y * m, D = b * E, V = C * E, U = 0, L = 0;
      if (i === "clip") {
        var z = Wo(a);
        U = z * E, L = z * m;
      }
      var H = d.x + D - U, T = d.y + A - L, I = H + d.width + 2 * U - D - V - _, P = T + d.height + 2 * L - A - N - w;
      t.left = Math.max(t.left, H), t.top = Math.max(t.top, T), t.right = Math.min(t.right, I), t.bottom = Math.min(t.bottom, P);
    }
  }), t;
}
function P0(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, t = "".concat(r), n = t.match(/^(.*)\%$/);
  return n ? e * (parseFloat(n[1]) / 100) : parseFloat(t);
}
function A0(e, r) {
  var t = r || [], n = ne(t, 2), o = n[0], i = n[1];
  return [P0(e.width, o), P0(e.height, i)];
}
function N0() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return [e[0], e[1]];
}
function Kn(e, r) {
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
function NE(e, r, t, n, o, i, a) {
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
  }), c = ne(s, 2), l = c[0], u = c[1], d = x.useRef(0), h = x.useMemo(function() {
    return r ? Ru(r) : [];
  }, [r]), v = x.useRef({}), f = function() {
    v.current = {};
  };
  e || f();
  var g = Ut(function() {
    if (r && t && e) {
      let hr = function(Wn, nn) {
        var on = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : O, Mo = G.x + Wn, Bi = G.y + nn, mc = Mo + _e, vc = Bi + se, bc = Math.max(Mo, on.left), ye = Math.max(Bi, on.top), Ie = Math.min(mc, on.right), wt = Math.min(vc, on.bottom);
        return Math.max(0, (Ie - bc) * (wt - ye));
      }, zi = function() {
        Ze = G.y + Ke, Fe = Ze + se, Ne = G.x + De, yt = Ne + _e;
      };
      var b, C, E, m, _ = r, w = _.ownerDocument, A = Oi(_), N = A.getComputedStyle(_), D = N.width, V = N.height, U = N.position, L = _.style.left, z = _.style.top, H = _.style.right, T = _.style.bottom, I = _.style.overflow, P = q(q({}, o[n]), i), B = w.createElement("div");
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
        var Y, K, Z = t.getBoundingClientRect();
        Z.x = (Y = Z.x) !== null && Y !== void 0 ? Y : Z.left, Z.y = (K = Z.y) !== null && K !== void 0 ? K : Z.top, W = {
          x: Z.x,
          y: Z.y,
          width: Z.width,
          height: Z.height
        };
      }
      var G = _.getBoundingClientRect();
      G.x = (C = G.x) !== null && C !== void 0 ? C : G.left, G.y = (E = G.y) !== null && E !== void 0 ? E : G.top;
      var te = w.documentElement, ie = te.clientWidth, he = te.clientHeight, pe = te.scrollWidth, xe = te.scrollHeight, Se = te.scrollTop, ae = te.scrollLeft, se = G.height, _e = G.width, re = W.height, ve = W.width, ce = {
        left: 0,
        top: 0,
        right: ie,
        bottom: he
      }, be = {
        left: -ae,
        top: -Se,
        right: pe - ae,
        bottom: xe - Se
      }, Ce = P.htmlRegion, we = "visible", ze = "visibleFirst";
      Ce !== "scroll" && Ce !== ze && (Ce = we);
      var Te = Ce === ze, S = T0(be, h), $ = T0(ce, h), O = Ce === we ? $ : S, j = Te ? $ : O;
      _.style.left = "auto", _.style.top = "auto", _.style.right = "0", _.style.bottom = "0";
      var M = _.getBoundingClientRect();
      _.style.left = L, _.style.top = z, _.style.right = H, _.style.bottom = T, _.style.overflow = I, (m = _.parentElement) === null || m === void 0 || m.removeChild(B);
      var le = hi(Math.round(_e / parseFloat(D) * 1e3) / 1e3), Je = hi(Math.round(se / parseFloat(V) * 1e3) / 1e3);
      if (le === 0 || Je === 0 || ni(t) && !lg(t))
        return;
      var We = P.offset, je = P.targetOffset, et = A0(G, We), Ve = ne(et, 2), Le = Ve[0], ge = Ve[1], Ee = A0(W, je), ue = ne(Ee, 2), Re = ue[0], dt = ue[1];
      W.x -= Re, W.y -= dt;
      var Jt = P.points || [], Lt = ne(Jt, 2), J = Lt[0], k = Lt[1], ke = N0(k), Ge = N0(J), Xe = Kn(W, ke), me = Kn(G, Ge), it = q({}, P), De = Xe.x - me.x + Le, Ke = Xe.y - me.y + ge, mt = hr(De, Ke), Qt = hr(De, Ke, $), fr = Kn(W, ["t", "l"]), Me = Kn(G, ["t", "l"]), pt = Kn(W, ["b", "r"]), kt = Kn(G, ["b", "r"]), Be = P.overflow || {}, R = Be.adjustX, ee = Be.adjustY, oe = Be.shiftX, Oe = Be.shiftY, Qe = function(nn) {
        return typeof nn == "boolean" ? nn : nn >= 0;
      }, Ze, Fe, Ne, yt;
      zi();
      var at = Qe(ee), ht = Ge[0] === ke[0];
      if (at && Ge[0] === "t" && (Fe > j.bottom || v.current.bt)) {
        var qe = Ke;
        ht ? qe -= se - re : qe = fr.y - kt.y - ge;
        var Sr = hr(De, qe), Cr = hr(De, qe, $);
        // Of course use larger one
        Sr > mt || Sr === mt && (!Te || // Choose recommend one
        Cr >= Qt) ? (v.current.bt = !0, Ke = qe, ge = -ge, it.points = [an(Ge, 0), an(ke, 0)]) : v.current.bt = !1;
      }
      if (at && Ge[0] === "b" && (Ze < j.top || v.current.tb)) {
        var Et = Ke;
        ht ? Et += se - re : Et = pt.y - Me.y - ge;
        var rn = hr(De, Et), No = hr(De, Et, $);
        // Of course use larger one
        rn > mt || rn === mt && (!Te || // Choose recommend one
        No >= Qt) ? (v.current.tb = !0, Ke = Et, ge = -ge, it.points = [an(Ge, 0), an(ke, 0)]) : v.current.tb = !1;
      }
      var zn = Qe(R), Ii = Ge[1] === ke[1];
      if (zn && Ge[1] === "l" && (yt > j.right || v.current.rl)) {
        var yn = De;
        Ii ? yn -= _e - ve : yn = fr.x - kt.x - Le;
        var ji = hr(yn, Ke), Bn = hr(yn, Ke, $);
        // Of course use larger one
        ji > mt || ji === mt && (!Te || // Choose recommend one
        Bn >= Qt) ? (v.current.rl = !0, De = yn, Le = -Le, it.points = [an(Ge, 1), an(ke, 1)]) : v.current.rl = !1;
      }
      if (zn && Ge[1] === "r" && (Ne < j.left || v.current.lr)) {
        var Ur = De;
        Ii ? Ur += _e - ve : Ur = pt.x - Me.x - Le;
        var Mi = hr(Ur, Ke), Fi = hr(Ur, Ke, $);
        // Of course use larger one
        Mi > mt || Mi === mt && (!Te || // Choose recommend one
        Fi >= Qt) ? (v.current.lr = !0, De = Ur, Le = -Le, it.points = [an(Ge, 1), an(ke, 1)]) : v.current.lr = !1;
      }
      zi();
      var Ir = oe === !0 ? 0 : oe;
      typeof Ir == "number" && (Ne < $.left && (De -= Ne - $.left - Le, W.x + ve < $.left + Ir && (De += W.x - $.left + ve - Ir)), yt > $.right && (De -= yt - $.right - Le, W.x > $.right - Ir && (De += W.x - $.right + Ir)));
      var _r = Oe === !0 ? 0 : Oe;
      typeof _r == "number" && (Ze < $.top && (Ke -= Ze - $.top - ge, W.y + re < $.top + _r && (Ke += W.y - $.top + re - _r)), Fe > $.bottom && (Ke -= Fe - $.bottom - ge, W.y > $.bottom - _r && (Ke += W.y - $.bottom + _r)));
      var Vn = G.x + De, Hn = Vn + _e, jr = G.y + Ke, sc = jr + se, Li = W.x, cc = Li + ve, Io = W.y, lc = Io + re, uc = Math.max(Vn, Li), dc = Math.min(Hn, cc), ki = (uc + dc) / 2, fc = ki - Vn, hc = Math.max(jr, Io), Di = Math.min(sc, lc), pc = (hc + Di) / 2, xc = pc - jr;
      a == null || a(r, it);
      var jo = M.right - G.x - (De + G.width), Mr = M.bottom - G.y - (Ke + G.height);
      le === 1 && (De = Math.round(De), jo = Math.round(jo)), Je === 1 && (Ke = Math.round(Ke), Mr = Math.round(Mr));
      var gc = {
        ready: !0,
        offsetX: De / le,
        offsetY: Ke / Je,
        offsetR: jo / le,
        offsetB: Mr / Je,
        arrowX: fc / le,
        arrowY: xc / Je,
        scaleX: le,
        scaleY: Je,
        align: it
      };
      u(gc);
    }
  }), p = function() {
    d.current += 1;
    var C = d.current;
    Promise.resolve().then(function() {
      d.current === C && g();
    });
  }, y = function() {
    u(function(C) {
      return q(q({}, C), {}, {
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
      let d = function() {
        n(), o();
      };
      var i = r, a = t, s = Ru(i), c = Ru(a), l = Oi(a), u = new Set([l].concat($e(s), $e(c)));
      return u.forEach(function(h) {
        h.addEventListener("scroll", d, {
          passive: !0
        });
      }), l.addEventListener("resize", d, {
        passive: !0
      }), n(), function() {
        u.forEach(function(h) {
          h.removeEventListener("scroll", d), l.removeEventListener("resize", d);
        });
      };
    }
  }, [e, r, t]);
}
function jE(e, r, t, n, o, i, a, s) {
  var c = x.useRef(e);
  c.current = e;
  var l = x.useRef(!1);
  x.useEffect(function() {
    if (r && n && (!o || i)) {
      var d = function() {
        l.current = !1;
      }, h = function(E) {
        var m;
        c.current && !a(((m = E.composedPath) === null || m === void 0 || (m = m.call(E)) === null || m === void 0 ? void 0 : m[0]) || E.target) && !l.current && s(!1);
      }, v = Oi(n);
      v.addEventListener("pointerdown", d, !0), v.addEventListener("mousedown", h, !0), v.addEventListener("contextmenu", h, !0);
      var f = Ga(t);
      if (f && (f.addEventListener("mousedown", h, !0), f.addEventListener("contextmenu", h, !0)), process.env.NODE_ENV !== "production") {
        var g, p, y = t == null || (g = t.getRootNode) === null || g === void 0 ? void 0 : g.call(t), b = (p = n.getRootNode) === null || p === void 0 ? void 0 : p.call(n);
        uo(y === b, "trigger element and popup element should in same shadow root.");
      }
      return function() {
        v.removeEventListener("pointerdown", d, !0), v.removeEventListener("mousedown", h, !0), v.removeEventListener("contextmenu", h, !0), f && (f.removeEventListener("mousedown", h, !0), f.removeEventListener("contextmenu", h, !0));
      };
    }
  }, [r, t, n, o, i]);
  function u() {
    l.current = !0;
  }
  return u;
}
var ME = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "fresh", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
function FE() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : hd, r = /* @__PURE__ */ x.forwardRef(function(t, n) {
    var o = t.prefixCls, i = o === void 0 ? "rc-trigger-popup" : o, a = t.children, s = t.action, c = s === void 0 ? "hover" : s, l = t.showAction, u = t.hideAction, d = t.popupVisible, h = t.defaultPopupVisible, v = t.onPopupVisibleChange, f = t.afterPopupVisibleChange, g = t.mouseEnterDelay, p = t.mouseLeaveDelay, y = p === void 0 ? 0.1 : p, b = t.focusDelay, C = t.blurDelay, E = t.mask, m = t.maskClosable, _ = m === void 0 ? !0 : m, w = t.getPopupContainer, A = t.forceRender, N = t.autoDestroy, D = t.destroyPopupOnHide, V = t.popup, U = t.popupClassName, L = t.popupStyle, z = t.popupPlacement, H = t.builtinPlacements, T = H === void 0 ? {} : H, I = t.popupAlign, P = t.zIndex, B = t.stretch, W = t.getPopupClassNameFromAlign, Y = t.fresh, K = t.alignPoint, Z = t.onPopupClick, G = t.onPopupAlign, te = t.arrow, ie = t.popupMotion, he = t.maskMotion, pe = t.popupTransitionName, xe = t.popupAnimation, Se = t.maskTransitionName, ae = t.maskAnimation, se = t.className, _e = t.getTriggerDOMNode, re = Xt(t, ME), ve = N || D || !1, ce = x.useState(!1), be = ne(ce, 2), Ce = be[0], we = be[1];
    St(function() {
      we(OE());
    }, []);
    var ze = x.useRef({}), Te = x.useContext(O0), S = x.useMemo(function() {
      return {
        registerSubPopup: function(Ie, wt) {
          ze.current[Ie] = wt, Te == null || Te.registerSubPopup(Ie, wt);
        }
      };
    }, [Te]), $ = Og(), O = x.useState(null), j = ne(O, 2), M = j[0], le = j[1], Je = x.useRef(null), We = Ut(function(ye) {
      Je.current = ye, ni(ye) && M !== ye && le(ye), Te == null || Te.registerSubPopup($, ye);
    }), je = x.useState(null), et = ne(je, 2), Ve = et[0], Le = et[1], ge = x.useRef(null), Ee = Ut(function(ye) {
      ni(ye) && Ve !== ye && (Le(ye), ge.current = ye);
    }), ue = x.Children.only(a), Re = (ue == null ? void 0 : ue.props) || {}, dt = {}, Jt = Ut(function(ye) {
      var Ie, wt, It = Ve;
      return (It == null ? void 0 : It.contains(ye)) || ((Ie = Ga(It)) === null || Ie === void 0 ? void 0 : Ie.host) === ye || ye === It || (M == null ? void 0 : M.contains(ye)) || ((wt = Ga(M)) === null || wt === void 0 ? void 0 : wt.host) === ye || ye === M || Object.values(ze.current).some(function(Ot) {
        return (Ot == null ? void 0 : Ot.contains(ye)) || ye === Ot;
      });
    }), Lt = $0(i, ie, xe, pe), J = $0(i, he, ae, Se), k = x.useState(h || !1), ke = ne(k, 2), Ge = ke[0], Xe = ke[1], me = d ?? Ge, it = Ut(function(ye) {
      d === void 0 && Xe(ye);
    });
    St(function() {
      Xe(d || !1);
    }, [d]);
    var De = x.useRef(me);
    De.current = me;
    var Ke = x.useRef([]);
    Ke.current = [];
    var mt = Ut(function(ye) {
      var Ie;
      it(ye), ((Ie = Ke.current[Ke.current.length - 1]) !== null && Ie !== void 0 ? Ie : me) !== ye && (Ke.current.push(ye), v == null || v(ye));
    }), Qt = x.useRef(), fr = function() {
      clearTimeout(Qt.current);
    }, Me = function(Ie) {
      var wt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      fr(), wt === 0 ? mt(Ie) : Qt.current = setTimeout(function() {
        mt(Ie);
      }, wt * 1e3);
    };
    x.useEffect(function() {
      return fr;
    }, []);
    var pt = x.useState(!1), kt = ne(pt, 2), Be = kt[0], R = kt[1];
    St(function(ye) {
      (!ye || me) && R(!0);
    }, [me]);
    var ee = x.useState(null), oe = ne(ee, 2), Oe = oe[0], Qe = oe[1], Ze = x.useState(null), Fe = ne(Ze, 2), Ne = Fe[0], yt = Fe[1], at = function(Ie) {
      yt([Ie.clientX, Ie.clientY]);
    }, ht = NE(me, M, K && Ne !== null ? Ne : Ve, z, T, I, G), qe = ne(ht, 11), Sr = qe[0], Cr = qe[1], Et = qe[2], rn = qe[3], No = qe[4], zn = qe[5], Ii = qe[6], yn = qe[7], ji = qe[8], Bn = qe[9], Ur = qe[10], Mi = TE(Ce, c, l, u), Fi = ne(Mi, 2), Ir = Fi[0], _r = Fi[1], Vn = Ir.has("click"), Hn = _r.has("click") || _r.has("contextMenu"), jr = Ut(function() {
      Be || Ur();
    }), sc = function() {
      De.current && K && Hn && Me(!1);
    };
    IE(me, Ve, M, jr, sc), St(function() {
      jr();
    }, [Ne, z]), St(function() {
      me && !(T != null && T[z]) && jr();
    }, [JSON.stringify(I)]);
    var Li = x.useMemo(function() {
      var ye = AE(T, i, Bn, K);
      return fe(ye, W == null ? void 0 : W(Bn));
    }, [Bn, W, T, i, K]);
    x.useImperativeHandle(n, function() {
      return {
        nativeElement: ge.current,
        popupElement: Je.current,
        forceAlign: jr
      };
    });
    var cc = x.useState(0), Io = ne(cc, 2), lc = Io[0], uc = Io[1], dc = x.useState(0), ki = ne(dc, 2), fc = ki[0], hc = ki[1], Di = function() {
      if (B && Ve) {
        var Ie = Ve.getBoundingClientRect();
        uc(Ie.width), hc(Ie.height);
      }
    }, pc = function() {
      Di(), jr();
    }, xc = function(Ie) {
      R(!1), Ur(), f == null || f(Ie);
    }, jo = function() {
      return new Promise(function(Ie) {
        Di(), Qe(function() {
          return Ie;
        });
      });
    };
    St(function() {
      Oe && (Ur(), Oe(), Qe(null));
    }, [Oe]);
    function Mr(ye, Ie, wt, It) {
      dt[ye] = function(Ot) {
        var Vi;
        It == null || It(Ot), Me(Ie, wt);
        for (var yc = arguments.length, Ed = new Array(yc > 1 ? yc - 1 : 0), Hi = 1; Hi < yc; Hi++)
          Ed[Hi - 1] = arguments[Hi];
        (Vi = Re[ye]) === null || Vi === void 0 || Vi.call.apply(Vi, [Re, Ot].concat(Ed));
      };
    }
    (Vn || Hn) && (dt.onClick = function(ye) {
      var Ie;
      De.current && Hn ? Me(!1) : !De.current && Vn && (at(ye), Me(!0));
      for (var wt = arguments.length, It = new Array(wt > 1 ? wt - 1 : 0), Ot = 1; Ot < wt; Ot++)
        It[Ot - 1] = arguments[Ot];
      (Ie = Re.onClick) === null || Ie === void 0 || Ie.call.apply(Ie, [Re, ye].concat(It));
    });
    var gc = jE(me, Hn, Ve, M, E, _, Jt, Me), hr = Ir.has("hover"), zi = _r.has("hover"), Wn, nn;
    hr && (Mr("onMouseEnter", !0, g, function(ye) {
      at(ye);
    }), Mr("onPointerEnter", !0, g, function(ye) {
      at(ye);
    }), Wn = function(Ie) {
      (me || Be) && M !== null && M !== void 0 && M.contains(Ie.target) && Me(!0, g);
    }, K && (dt.onMouseMove = function(ye) {
      var Ie;
      (Ie = Re.onMouseMove) === null || Ie === void 0 || Ie.call(Re, ye);
    })), zi && (Mr("onMouseLeave", !1, y), Mr("onPointerLeave", !1, y), nn = function() {
      Me(!1, y);
    }), Ir.has("focus") && Mr("onFocus", !0, b), _r.has("focus") && Mr("onBlur", !1, C), Ir.has("contextMenu") && (dt.onContextMenu = function(ye) {
      var Ie;
      De.current && _r.has("contextMenu") ? Me(!1) : (at(ye), Me(!0)), ye.preventDefault();
      for (var wt = arguments.length, It = new Array(wt > 1 ? wt - 1 : 0), Ot = 1; Ot < wt; Ot++)
        It[Ot - 1] = arguments[Ot];
      (Ie = Re.onContextMenu) === null || Ie === void 0 || Ie.call.apply(Ie, [Re, ye].concat(It));
    }), se && (dt.className = fe(Re.className, se));
    var on = q(q({}, Re), dt), Mo = {}, Bi = ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
    Bi.forEach(function(ye) {
      re[ye] && (Mo[ye] = function() {
        for (var Ie, wt = arguments.length, It = new Array(wt), Ot = 0; Ot < wt; Ot++)
          It[Ot] = arguments[Ot];
        (Ie = on[ye]) === null || Ie === void 0 || Ie.call.apply(Ie, [on].concat(It)), re[ye].apply(re, It);
      });
    });
    var mc = /* @__PURE__ */ x.cloneElement(ue, q(q({}, on), Mo)), vc = {
      x: zn,
      y: Ii
    }, bc = te ? q({}, te !== !0 ? te : {}) : null;
    return /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ x.createElement(Oo, {
      disabled: !me,
      ref: Ee,
      onResize: pc
    }, /* @__PURE__ */ x.createElement(Fg, {
      getTriggerDOMNode: _e
    }, mc)), /* @__PURE__ */ x.createElement(O0.Provider, {
      value: S
    }, /* @__PURE__ */ x.createElement(Mg, {
      portal: e,
      ref: We,
      prefixCls: i,
      popup: V,
      className: fe(U, Li),
      style: L,
      target: Ve,
      onMouseEnter: Wn,
      onMouseLeave: nn,
      onPointerEnter: Wn,
      zIndex: P,
      open: me,
      keepDom: Be,
      fresh: Y,
      onClick: Z,
      onPointerDownCapture: gc,
      mask: E,
      motion: Lt,
      maskMotion: J,
      onVisibleChanged: xc,
      onPrepare: jo,
      forceRender: A,
      autoDestroy: ve,
      getPopupContainer: w,
      align: Bn,
      arrow: bc,
      arrowPos: vc,
      ready: Sr,
      offsetX: Cr,
      offsetY: Et,
      offsetR: rn,
      offsetB: No,
      onAlign: jr,
      stretch: B,
      targetWidth: lc / yn,
      targetHeight: fc / ji
    })));
  });
  return process.env.NODE_ENV !== "production" && (r.displayName = "Trigger"), r;
}
const LE = FE(hd);
function $u(e, r, t) {
  return fe({
    [`${e}-status-success`]: r === "success",
    [`${e}-status-warning`]: r === "warning",
    [`${e}-status-error`]: r === "error",
    [`${e}-status-validating`]: r === "validating",
    [`${e}-has-feedback`]: t
  });
}
const Lg = (e, r) => r || e, kg = function(e, r) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
  var n, o;
  const {
    variant: i,
    [e]: a
  } = x.useContext(er), s = x.useContext(_E), c = a == null ? void 0 : a.variant;
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
}, Dg = /* @__PURE__ */ x.forwardRef(kE);
process.env.NODE_ENV !== "production" && (Dg.displayName = "CheckOutlined");
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
}, gr = [0, 0], DE = {
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
  var n = r.overlayClassName, o = r.trigger, i = o === void 0 ? ["hover"] : o, a = r.mouseEnterDelay, s = a === void 0 ? 0 : a, c = r.mouseLeaveDelay, l = c === void 0 ? 0.1 : c, u = r.overlayStyle, d = r.prefixCls, h = d === void 0 ? "rc-tooltip" : d, v = r.children, f = r.onVisibleChange, g = r.afterVisibleChange, p = r.transitionName, y = r.animation, b = r.motion, C = r.placement, E = C === void 0 ? "right" : C, m = r.align, _ = m === void 0 ? {} : m, w = r.destroyTooltipOnHide, A = w === void 0 ? !1 : w, N = r.defaultVisible, D = r.getTooltipContainer, V = r.overlayInnerStyle;
  r.arrowContent;
  var U = r.overlay, L = r.id, z = r.showArrow, H = z === void 0 ? !0 : z, T = r.classNames, I = r.styles, P = Xt(r, zE), B = Og(L), W = Pe(null);
  gi(t, function() {
    return W.current;
  });
  var Y = q({}, P);
  "visible" in r && (Y.popupVisible = r.visible);
  var K = function() {
    return /* @__PURE__ */ x.createElement(zg, {
      key: "content",
      prefixCls: h,
      id: B,
      bodyClassName: T == null ? void 0 : T.body,
      overlayInnerStyle: q(q({}, V), I == null ? void 0 : I.body)
    }, U);
  }, Z = function() {
    var te = x.Children.only(v), ie = (te == null ? void 0 : te.props) || {}, he = q(q({}, ie), {}, {
      "aria-describedby": U ? B : null
    });
    return /* @__PURE__ */ x.cloneElement(v, he);
  };
  return /* @__PURE__ */ x.createElement(LE, bt({
    popupClassName: fe(n, T == null ? void 0 : T.root),
    prefixCls: h,
    popup: K,
    action: i,
    builtinPlacements: DE,
    popupPlacement: E,
    ref: W,
    popupAlign: _,
    getPopupContainer: D,
    onPopupVisibleChange: f,
    afterPopupVisibleChange: g,
    popupTransitionName: p,
    popupAnimation: y,
    popupMotion: b,
    defaultPopupVisible: N,
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
  } = e, o = r / 2, i = 0, a = o, s = n * 1 / Math.sqrt(2), c = o - n * (1 - 1 / Math.sqrt(2)), l = o - t * (1 / Math.sqrt(2)), u = n * (Math.sqrt(2) - 1) + t * (1 / Math.sqrt(2)), d = 2 * o - l, h = u, v = 2 * o - s, f = c, g = 2 * o - i, p = a, y = o * Math.sqrt(2) + n * (Math.sqrt(2) - 2), b = n * (Math.sqrt(2) - 1), C = `polygon(${b}px 100%, 50% ${b}px, ${2 * o - b}px 100%, ${b}px 100%)`, E = `path('M ${i} ${a} A ${n} ${n} 0 0 0 ${s} ${c} L ${l} ${u} A ${t} ${t} 0 0 1 ${d} ${h} L ${v} ${f} A ${n} ${n} 0 0 0 ${g} ${p} Z')`;
  return {
    arrowShadowWidth: y,
    arrowPath: E,
    arrowPolygon: C
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
        value: `0 0 ${nt(s)} 0`
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
function la(e, r) {
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
    }, la(!!c.top, {
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
        "--arrow-offset-horizontal": `calc(100% - ${nt(a)})`,
        [`> ${n}-arrow`]: {
          right: {
            _skip_check_: !0,
            value: a
          }
        }
      }
    })), la(!!c.bottom, {
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
        "--arrow-offset-horizontal": `calc(100% - ${nt(a)})`,
        [`> ${n}-arrow`]: {
          right: {
            _skip_check_: !0,
            value: a
          }
        }
      }
    })), la(!!c.left, {
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
    })), la(!!c.right, {
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
}, XE = /* @__PURE__ */ new Set(["topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]);
function KE(e) {
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
    switch (s[c] = u, XE.has(c) && (u.autoArrow = !1), c) {
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
    const d = Vg({
      contentRadius: i,
      limitVerticalRadius: !0
    });
    if (n)
      switch (c) {
        case "topLeft":
        case "bottomLeft":
          u.offset[0] = -d.arrowOffsetHorizontal - a;
          break;
        case "topRight":
        case "bottomRight":
          u.offset[0] = d.arrowOffsetHorizontal + a;
          break;
        case "leftTop":
        case "rightTop":
          u.offset[1] = -d.arrowOffsetHorizontal * 2 + a;
          break;
        case "leftBottom":
        case "rightBottom":
          u.offset[1] = d.arrowOffsetHorizontal * 2 - a;
          break;
      }
    u.overflow = UE(c, d, r, t), u.htmlRegion = "visibleFirst";
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
    paddingXS: d,
    arrowOffsetHorizontal: h,
    sizePopupArrow: v
  } = e, f = r(a).add(v).add(h).equal(), g = r(a).mul(2).add(v).equal();
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
          padding: `${nt(e.calc(u).div(2).equal())} ${nt(d)}`,
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
          minWidth: f
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
      }), Mw(e, (p, y) => {
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
    return [YE(s), HC(n, "zoom-big-fast")];
  }, JE, {
    resetStyle: !1,
    // Popover use Tooltip as internal component. We do not need to handle this.
    injectStyle: r
  })(e);
}, QE = Mn.map((e) => `${e}-inverse`);
function ZE(e) {
  return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0) ? [].concat($e(QE), $e(Mn)).includes(e) : Mn.includes(e);
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
  } = x.useContext(er), c = s("tooltip", r), [l, u, d] = Hg(c), h = Wg(c, i), v = h.arrowStyle, f = Object.assign(Object.assign({}, a), h.overlayStyle), g = fe(u, d, c, `${c}-pure`, `${c}-placement-${n}`, t, h.className);
  return l(/* @__PURE__ */ x.createElement("div", {
    className: g,
    style: v
  }, /* @__PURE__ */ x.createElement("div", {
    className: `${c}-arrow`
  }), /* @__PURE__ */ x.createElement(zg, Object.assign({}, e, {
    className: u,
    prefixCls: c,
    overlayInnerStyle: f
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
    afterVisibleChange: d,
    destroyTooltipOnHide: h,
    arrow: v = !0,
    title: f,
    overlay: g,
    builtinPlacements: p,
    arrowPointAtCenter: y = !1,
    autoAdjustOverflow: b = !0,
    motion: C,
    getPopupContainer: E,
    placement: m = "top",
    mouseEnterDelay: _ = 0.1,
    mouseLeaveDelay: w = 0.1,
    overlayStyle: A,
    rootClassName: N,
    overlayClassName: D,
    styles: V,
    classNames: U
  } = e, L = t5(e, ["prefixCls", "openClassName", "getTooltipContainer", "color", "overlayInnerStyle", "children", "afterOpenChange", "afterVisibleChange", "destroyTooltipOnHide", "arrow", "title", "overlay", "builtinPlacements", "arrowPointAtCenter", "autoAdjustOverflow", "motion", "getPopupContainer", "placement", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "rootClassName", "overlayClassName", "styles", "classNames"]), z = !!v, [, H] = bn(), {
    getPopupContainer: T,
    getPrefixCls: I,
    direction: P,
    className: B,
    style: W,
    classNames: Y,
    styles: K
  } = kn("tooltip"), Z = Kt("Tooltip"), G = x.useRef(null), te = () => {
    var je;
    (je = G.current) === null || je === void 0 || je.forceAlign();
  };
  x.useImperativeHandle(r, () => {
    var je, et;
    return {
      forceAlign: te,
      forcePopupAlign: () => {
        Z.deprecated(!1, "forcePopupAlign", "forceAlign"), te();
      },
      nativeElement: (je = G.current) === null || je === void 0 ? void 0 : je.nativeElement,
      popupElement: (et = G.current) === null || et === void 0 ? void 0 : et.popupElement
    };
  }), process.env.NODE_ENV !== "production" && ([["visible", "open"], ["defaultVisible", "defaultOpen"], ["onVisibleChange", "onOpenChange"], ["afterVisibleChange", "afterOpenChange"], ["arrowPointAtCenter", "arrow={{ pointAtCenter: true }}"], ["overlayStyle", "styles={{ root: {} }}"], ["overlayInnerStyle", "styles={{ body: {} }}"], ["overlayClassName", 'classNames={{ root: "" }}']].forEach((je) => {
    let [et, Ve] = je;
    Z.deprecated(!(et in e), et, Ve);
  }), process.env.NODE_ENV !== "production" && Z(!h || typeof h == "boolean", "usage", "`destroyTooltipOnHide` no need config `keepParent` anymore. Please use `boolean` value directly."), process.env.NODE_ENV !== "production" && Z(!v || typeof v == "boolean" || !("arrowPointAtCenter" in v), "deprecated", "`arrowPointAtCenter` in `arrow` is deprecated. Please use `pointAtCenter` instead."));
  const [ie, he] = jn(!1, {
    value: (t = e.open) !== null && t !== void 0 ? t : e.visible,
    defaultValue: (n = e.defaultOpen) !== null && n !== void 0 ? n : e.defaultVisible
  }), pe = !f && !g && f !== 0, xe = (je) => {
    var et, Ve;
    he(pe ? !1 : je), pe || ((et = e.onOpenChange) === null || et === void 0 || et.call(e, je), (Ve = e.onVisibleChange) === null || Ve === void 0 || Ve.call(e, je));
  }, Se = x.useMemo(() => {
    var je, et;
    let Ve = y;
    return typeof v == "object" && (Ve = (et = (je = v.pointAtCenter) !== null && je !== void 0 ? je : v.arrowPointAtCenter) !== null && et !== void 0 ? et : y), p || KE({
      arrowPointAtCenter: Ve,
      autoAdjustOverflow: b,
      arrowWidth: z ? H.sizePopupArrow : 0,
      borderRadius: H.borderRadius,
      offset: H.marginXXS
    });
  }, [y, v, p, H]), ae = x.useMemo(() => f === 0 ? f : g || f || "", [g, f]), se = /* @__PURE__ */ x.createElement(Ou, {
    space: !0
  }, typeof ae == "function" ? ae() : ae), _e = I("tooltip", o), re = I(), ve = e["data-popover-inject"];
  let ce = ie;
  !("open" in e) && !("visible" in e) && pe && (ce = !1);
  const be = /* @__PURE__ */ x.isValidElement(l) && !ag(l) ? l : /* @__PURE__ */ x.createElement("span", null, l), Ce = be.props, we = !Ce.className || typeof Ce.className == "string" ? fe(Ce.className, i || `${_e}-open`) : Ce.className, [ze, Te, S] = Hg(_e, !ve), $ = Wg(_e, s), O = $.arrowStyle, j = fe(D, {
    [`${_e}-rtl`]: P === "rtl"
  }, $.className, N, Te, S, B, Y.root, U == null ? void 0 : U.root), M = fe(Y.body, U == null ? void 0 : U.body), [le, Je] = jS("Tooltip", L.zIndex), We = /* @__PURE__ */ x.createElement(VE, Object.assign({}, L, {
    zIndex: le,
    showArrow: z,
    placement: m,
    mouseEnterDelay: _,
    mouseLeaveDelay: w,
    prefixCls: _e,
    classNames: {
      root: j,
      body: M
    },
    styles: {
      root: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, O), K.root), W), A), V == null ? void 0 : V.root),
      body: Object.assign(Object.assign(Object.assign(Object.assign({}, K.body), c), V == null ? void 0 : V.body), $.overlayStyle)
    },
    getTooltipContainer: E || a || T,
    ref: G,
    builtinPlacements: Se,
    overlay: se,
    visible: ce,
    onVisibleChange: xe,
    afterVisibleChange: u ?? d,
    arrowContent: /* @__PURE__ */ x.createElement("span", {
      className: `${_e}-arrow-content`
    }),
    motion: {
      motionName: GS(re, "zoom-big-fast", e.transitionName),
      motionDeadline: 1e3
    },
    destroyTooltipOnHide: !!h
  }), ce ? wi(be, {
    className: we
  }) : be);
  return ze(/* @__PURE__ */ x.createElement(ud.Provider, {
    value: Je
  }, We));
}), Ri = r5;
process.env.NODE_ENV !== "production" && (Ri.displayName = "Tooltip");
Ri._InternalPanelDoNotUseOrYouWillBeFired = e5;
function xd(e) {
  return Yt(e, {
    inputAffixPadding: e.paddingXXS
  });
}
const gd = (e) => {
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
    controlPaddingHorizontal: d,
    colorFillAlter: h,
    colorPrimaryHover: v,
    colorPrimary: f,
    controlOutlineWidth: g,
    controlOutline: p,
    colorErrorOutline: y,
    colorWarningOutline: b,
    colorBgContainer: C,
    inputFontSize: E,
    inputFontSizeLG: m,
    inputFontSizeSM: _
  } = e, w = E || t, A = _ || w, N = m || s, D = Math.round((r - w * n) / 2 * 10) / 10 - o, V = Math.round((i - A * n) / 2 * 10) / 10 - o, U = Math.ceil((a - N * c) / 2 * 10) / 10 - o;
  return {
    paddingBlock: Math.max(D, 0),
    paddingBlockSM: Math.max(V, 0),
    paddingBlockLG: Math.max(U, 0),
    paddingInline: l - o,
    paddingInlineSM: u - o,
    paddingInlineLG: d - o,
    addonBg: h,
    activeBorderColor: f,
    hoverBorderColor: v,
    activeShadow: `0 0 0 ${g}px ${p}`,
    errorActiveShadow: `0 0 0 ${g}px ${y}`,
    warningActiveShadow: `0 0 0 ${g}px ${b}`,
    hoverBg: C,
    activeBg: C,
    inputFontSize: w,
    inputFontSizeLG: N,
    inputFontSizeSM: A
  };
}, n5 = (e) => ({
  borderColor: e.hoverBorderColor,
  backgroundColor: e.hoverBg
}), md = (e) => ({
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
}), j0 = (e, r) => ({
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
    [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign({}, md(e))
  }), j0(e, {
    status: "error",
    borderColor: e.colorError,
    hoverBorderColor: e.colorErrorBorderHover,
    activeBorderColor: e.colorError,
    activeShadow: e.errorActiveShadow,
    affixColor: e.colorError
  })), j0(e, {
    status: "warning",
    borderColor: e.colorWarning,
    hoverBorderColor: e.colorWarningBorderHover,
    activeBorderColor: e.colorWarning,
    activeShadow: e.warningActiveShadow,
    affixColor: e.colorWarning
  })), r)
}), M0 = (e, r) => ({
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
        border: `${nt(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
      },
      "&-addon:first-child": {
        borderInlineEnd: 0
      },
      "&-addon:last-child": {
        borderInlineStart: 0
      }
    }
  }, M0(e, {
    status: "error",
    addonBorderColor: e.colorError,
    addonColor: e.colorErrorText
  })), M0(e, {
    status: "warning",
    addonBorderColor: e.colorWarning,
    addonColor: e.colorWarningText
  })), {
    [`&${e.componentCls}-group-wrapper-disabled`]: {
      [`${e.componentCls}-group-addon`]: Object.assign({}, md(e))
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
}, F0 = (e, r) => ({
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
    [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign({}, md(e))
  }), F0(e, {
    status: "error",
    bg: e.colorErrorBg,
    hoverBg: e.colorErrorBgHover,
    activeBorderColor: e.colorError,
    inputColor: e.colorErrorText,
    affixColor: e.colorError
  })), F0(e, {
    status: "warning",
    bg: e.colorWarningBg,
    hoverBg: e.colorWarningBgHover,
    activeBorderColor: e.colorWarning,
    inputColor: e.colorWarningText,
    affixColor: e.colorWarning
  })), r)
}), L0 = (e, r) => ({
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
          borderInlineStart: `${nt(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
        },
        "&:not(:last-child)": {
          borderInlineEnd: `${nt(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
        }
      }
    }
  }, L0(e, {
    status: "error",
    addonBg: e.colorErrorBg,
    addonColor: e.colorErrorText
  })), L0(e, {
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
          borderInlineStart: `${nt(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderTop: `${nt(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderBottom: `${nt(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
        },
        "&-addon:last-child": {
          borderInlineEnd: `${nt(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderTop: `${nt(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderBottom: `${nt(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
        }
      }
    }
  })
}), Gg = (e, r) => ({
  background: e.colorBgContainer,
  borderWidth: `${nt(e.lineWidth)} 0`,
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
}), Xg = (e) => {
  const {
    paddingBlockLG: r,
    lineHeightLG: t,
    borderRadiusLG: n,
    paddingInlineLG: o
  } = e;
  return {
    padding: `${nt(r)} ${nt(o)}`,
    fontSize: e.inputFontSizeLG,
    lineHeight: t,
    borderRadius: n
  };
}, Kg = (e) => ({
  padding: `${nt(e.paddingBlockSM)} ${nt(e.paddingInlineSM)}`,
  fontSize: e.inputFontSizeSM,
  borderRadius: e.borderRadiusSM
}), Yg = (e) => Object.assign(Object.assign({
  position: "relative",
  display: "inline-block",
  width: "100%",
  minWidth: 0,
  padding: `${nt(e.paddingBlock)} ${nt(e.paddingInline)}`,
  color: e.colorText,
  fontSize: e.inputFontSize,
  lineHeight: e.lineHeight,
  borderRadius: e.borderRadius,
  transition: `all ${e.motionDurationMid}`
}, u5(e.colorTextPlaceholder)), {
  // Size
  "&-lg": Object.assign({}, Xg(e)),
  "&-sm": Object.assign({}, Kg(e)),
  // RTL
  "&-rtl, &-textarea-rtl": {
    direction: "rtl"
  }
}), d5 = (e) => {
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
    [`&-lg ${r}, &-lg > ${r}-group-addon`]: Object.assign({}, Xg(e)),
    [`&-sm ${r}, &-sm > ${r}-group-addon`]: Object.assign({}, Kg(e)),
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
        padding: `0 ${nt(e.paddingInline)}`,
        color: e.colorText,
        fontWeight: "normal",
        fontSize: e.inputFontSize,
        textAlign: "center",
        borderRadius: e.borderRadius,
        transition: `all ${e.motionDurationSlow}`,
        lineHeight: 1,
        // Reset Select's style in addon
        [`${t}-select`]: {
          margin: `${nt(e.calc(e.paddingBlock).add(1).mul(-1).equal())} ${nt(e.calc(e.paddingInline).mul(-1).equal())}`,
          [`&${t}-select-single:not(${t}-select-customize-input):not(${t}-pagination-size-changer)`]: {
            [`${t}-select-selector`]: {
              backgroundColor: "inherit",
              border: `${nt(e.lineWidth)} ${e.lineType} transparent`,
              boxShadow: "none"
            }
          }
        },
        // https://github.com/ant-design/ant-design/issues/31333
        [`${t}-cascader-picker`]: {
          margin: `-9px ${nt(e.calc(e.paddingInline).mul(-1).equal())}`,
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
}, f5 = (e) => {
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
        margin: `0 ${nt(e.inputAffixPadding)}`
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
    [`${r}-group`]: Object.assign(Object.assign(Object.assign({}, Vs(e)), d5(e)), {
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
  const r = Yt(e, xd(e));
  return [f5(r), p5(r)];
}, gd, {
  resetFont: !1
}), v5 = en(["Input", "Component"], (e) => {
  const r = Yt(e, xd(e));
  return [
    x5(r),
    g5(r),
    m5(r),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    _g(r)
  ];
}, gd, {
  resetFont: !1
});
function b5(e, r, t) {
  var n = t || {}, o = n.noTrailing, i = o === void 0 ? !1 : o, a = n.noLeading, s = a === void 0 ? !1 : a, c = n.debounceMode, l = c === void 0 ? void 0 : c, u, d = !1, h = 0;
  function v() {
    u && clearTimeout(u);
  }
  function f(p) {
    var y = p || {}, b = y.upcomingOnly, C = b === void 0 ? !1 : b;
    v(), d = !C;
  }
  function g() {
    for (var p = arguments.length, y = new Array(p), b = 0; b < p; b++)
      y[b] = arguments[b];
    var C = this, E = Date.now() - h;
    if (d)
      return;
    function m() {
      h = Date.now(), r.apply(C, y);
    }
    function _() {
      u = void 0;
    }
    !s && l && !u && m(), v(), l === void 0 && E > e ? s ? (h = Date.now(), i || (u = setTimeout(l ? _ : m, e))) : m() : i !== !0 && (u = setTimeout(l ? _ : m, l === void 0 ? e - E : e));
  }
  return g.cancel = f, g;
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
function D0(e, r, t) {
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
function Ya(e, r, t, n) {
  if (t) {
    var o = r;
    if (r.type === "click") {
      o = D0(r, e, ""), t(o);
      return;
    }
    if (e.type !== "file" && n !== void 0) {
      o = D0(r, e, n), t(o);
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
  var t, n, o, i = e.inputElement, a = e.children, s = e.prefixCls, c = e.prefix, l = e.suffix, u = e.addonBefore, d = e.addonAfter, h = e.className, v = e.style, f = e.disabled, g = e.readOnly, p = e.focused, y = e.triggerFocus, b = e.allowClear, C = e.value, E = e.handleReset, m = e.hidden, _ = e.classes, w = e.classNames, A = e.dataAttrs, N = e.styles, D = e.components, V = e.onClear, U = a ?? i, L = (D == null ? void 0 : D.affixWrapper) || "span", z = (D == null ? void 0 : D.groupWrapper) || "span", H = (D == null ? void 0 : D.wrapper) || "span", T = (D == null ? void 0 : D.groupAddon) || "span", I = Pe(null), P = function(ve) {
    var ce;
    (ce = I.current) !== null && ce !== void 0 && ce.contains(ve.target) && (y == null || y());
  }, B = S5(e), W = /* @__PURE__ */ Xm(U, {
    value: C,
    className: fe((t = U.props) === null || t === void 0 ? void 0 : t.className, !B && (w == null ? void 0 : w.variant)) || null
  }), Y = Pe(null);
  if (Q.useImperativeHandle(r, function() {
    return {
      nativeElement: Y.current || I.current
    };
  }), B) {
    var K = null;
    if (b) {
      var Z = !f && !g && C, G = "".concat(s, "-clear-icon"), te = Ae(b) === "object" && b !== null && b !== void 0 && b.clearIcon ? b.clearIcon : "✖";
      K = /* @__PURE__ */ Q.createElement("button", {
        type: "button",
        tabIndex: -1,
        onClick: function(ve) {
          E == null || E(ve), V == null || V();
        },
        onMouseDown: function(ve) {
          return ve.preventDefault();
        },
        className: fe(G, F(F({}, "".concat(G, "-hidden"), !Z), "".concat(G, "-has-suffix"), !!l))
      }, te);
    }
    var ie = "".concat(s, "-affix-wrapper"), he = fe(ie, F(F(F(F(F({}, "".concat(s, "-disabled"), f), "".concat(ie, "-disabled"), f), "".concat(ie, "-focused"), p), "".concat(ie, "-readonly"), g), "".concat(ie, "-input-with-clear-btn"), l && b && C), _ == null ? void 0 : _.affixWrapper, w == null ? void 0 : w.affixWrapper, w == null ? void 0 : w.variant), pe = (l || b) && /* @__PURE__ */ Q.createElement("span", {
      className: fe("".concat(s, "-suffix"), w == null ? void 0 : w.suffix),
      style: N == null ? void 0 : N.suffix
    }, K, l);
    W = /* @__PURE__ */ Q.createElement(L, bt({
      className: he,
      style: N == null ? void 0 : N.affixWrapper,
      onClick: P
    }, A == null ? void 0 : A.affixWrapper, {
      ref: I
    }), c && /* @__PURE__ */ Q.createElement("span", {
      className: fe("".concat(s, "-prefix"), w == null ? void 0 : w.prefix),
      style: N == null ? void 0 : N.prefix
    }, c), W, pe);
  }
  if (w5(e)) {
    var xe = "".concat(s, "-group"), Se = "".concat(xe, "-addon"), ae = "".concat(xe, "-wrapper"), se = fe("".concat(s, "-wrapper"), xe, _ == null ? void 0 : _.wrapper, w == null ? void 0 : w.wrapper), _e = fe(ae, F({}, "".concat(ae, "-disabled"), f), _ == null ? void 0 : _.group, w == null ? void 0 : w.groupWrapper);
    W = /* @__PURE__ */ Q.createElement(z, {
      className: _e,
      ref: Y
    }, /* @__PURE__ */ Q.createElement(H, {
      className: se
    }, u && /* @__PURE__ */ Q.createElement(T, {
      className: Se
    }, u), W, d && /* @__PURE__ */ Q.createElement(T, {
      className: Se
    }, d)));
  }
  return /* @__PURE__ */ Q.cloneElement(W, {
    className: fe((n = W.props) === null || n === void 0 ? void 0 : n.className, h) || null,
    style: q(q({}, (o = W.props) === null || o === void 0 ? void 0 : o.style), v),
    hidden: m
  });
}), C5 = ["show"];
function em(e, r) {
  return x.useMemo(function() {
    var t = {};
    r && (t.show = Ae(r) === "object" && r.formatter ? r.formatter : !!r), t = q(q({}, t), e);
    var n = t, o = n.show, i = Xt(n, C5);
    return q(q({}, i), {}, {
      show: !!o,
      showFormatter: typeof o == "function" ? o : void 0,
      strategy: i.strategy || function(a) {
        return a.length;
      }
    });
  }, [e, r]);
}
var _5 = ["autoComplete", "onChange", "onFocus", "onBlur", "onPressEnter", "onKeyDown", "onKeyUp", "prefixCls", "disabled", "htmlSize", "className", "maxLength", "suffix", "showCount", "count", "type", "classes", "classNames", "styles", "onCompositionStart", "onCompositionEnd"], E5 = /* @__PURE__ */ Wr(function(e, r) {
  var t = e.autoComplete, n = e.onChange, o = e.onFocus, i = e.onBlur, a = e.onPressEnter, s = e.onKeyDown, c = e.onKeyUp, l = e.prefixCls, u = l === void 0 ? "rc-input" : l, d = e.disabled, h = e.htmlSize, v = e.className, f = e.maxLength, g = e.suffix, p = e.showCount, y = e.count, b = e.type, C = b === void 0 ? "text" : b, E = e.classes, m = e.classNames, _ = e.styles, w = e.onCompositionStart, A = e.onCompositionEnd, N = Xt(e, _5), D = jt(!1), V = ne(D, 2), U = V[0], L = V[1], z = Pe(!1), H = Pe(!1), T = Pe(null), I = Pe(null), P = function(O) {
    T.current && Qg(T.current, O);
  }, B = jn(e.defaultValue, {
    value: e.value
  }), W = ne(B, 2), Y = W[0], K = W[1], Z = Y == null ? "" : String(Y), G = jt(null), te = ne(G, 2), ie = te[0], he = te[1], pe = em(y, p), xe = pe.max || f, Se = pe.strategy(Z), ae = !!xe && Se > xe;
  gi(r, function() {
    var $;
    return {
      focus: P,
      blur: function() {
        var j;
        (j = T.current) === null || j === void 0 || j.blur();
      },
      setSelectionRange: function(j, M, le) {
        var Je;
        (Je = T.current) === null || Je === void 0 || Je.setSelectionRange(j, M, le);
      },
      select: function() {
        var j;
        (j = T.current) === null || j === void 0 || j.select();
      },
      input: T.current,
      nativeElement: (($ = I.current) === null || $ === void 0 ? void 0 : $.nativeElement) || T.current
    };
  }), ut(function() {
    H.current && (H.current = !1), L(function($) {
      return $ && d ? !1 : $;
    });
  }, [d]);
  var se = function(O, j, M) {
    var le = j;
    if (!z.current && pe.exceedFormatter && pe.max && pe.strategy(j) > pe.max) {
      if (le = pe.exceedFormatter(j, {
        max: pe.max
      }), j !== le) {
        var Je, We;
        he([((Je = T.current) === null || Je === void 0 ? void 0 : Je.selectionStart) || 0, ((We = T.current) === null || We === void 0 ? void 0 : We.selectionEnd) || 0]);
      }
    } else if (M.source === "compositionEnd")
      return;
    K(le), T.current && Ya(T.current, O, n, le);
  };
  ut(function() {
    if (ie) {
      var $;
      ($ = T.current) === null || $ === void 0 || $.setSelectionRange.apply($, $e(ie));
    }
  }, [ie]);
  var _e = function(O) {
    se(O, O.target.value, {
      source: "change"
    });
  }, re = function(O) {
    z.current = !1, se(O, O.currentTarget.value, {
      source: "compositionEnd"
    }), A == null || A(O);
  }, ve = function(O) {
    a && O.key === "Enter" && !H.current && (H.current = !0, a(O)), s == null || s(O);
  }, ce = function(O) {
    O.key === "Enter" && (H.current = !1), c == null || c(O);
  }, be = function(O) {
    L(!0), o == null || o(O);
  }, Ce = function(O) {
    H.current && (H.current = !1), L(!1), i == null || i(O);
  }, we = function(O) {
    K(""), P(), T.current && Ya(T.current, O, n);
  }, ze = ae && "".concat(u, "-out-of-range"), Te = function() {
    var O = Ci(e, [
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
    }, O, {
      onChange: _e,
      onFocus: be,
      onBlur: Ce,
      onKeyDown: ve,
      onKeyUp: ce,
      className: fe(u, F({}, "".concat(u, "-disabled"), d), m == null ? void 0 : m.input),
      style: _ == null ? void 0 : _.input,
      ref: T,
      size: h,
      type: C,
      onCompositionStart: function(M) {
        z.current = !0, w == null || w(M);
      },
      onCompositionEnd: re
    }));
  }, S = function() {
    var O = Number(xe) > 0;
    if (g || pe.show) {
      var j = pe.showFormatter ? pe.showFormatter({
        value: Z,
        count: Se,
        maxLength: xe
      }) : "".concat(Se).concat(O ? " / ".concat(xe) : "");
      return /* @__PURE__ */ Q.createElement(Q.Fragment, null, pe.show && /* @__PURE__ */ Q.createElement("span", {
        className: fe("".concat(u, "-show-count-suffix"), F({}, "".concat(u, "-show-count-has-suffix"), !!g), m == null ? void 0 : m.count),
        style: q({}, _ == null ? void 0 : _.count)
      }, j), g);
    }
    return null;
  };
  return /* @__PURE__ */ Q.createElement(Zg, bt({}, N, {
    prefixCls: u,
    className: fe(v, ze),
    handleReset: we,
    value: Z,
    focused: U,
    triggerFocus: P,
    suffix: S(),
    disabled: d,
    classes: E,
    classNames: m,
    styles: _
  }), Te());
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
    addonAfter: d,
    addonBefore: h,
    className: v,
    style: f,
    styles: g,
    rootClassName: p,
    onChange: y,
    classNames: b,
    variant: C
  } = e, E = $5(e, ["prefixCls", "bordered", "status", "size", "disabled", "onBlur", "onFocus", "suffix", "allowClear", "addonAfter", "addonBefore", "className", "style", "styles", "rootClassName", "onChange", "classNames", "variant"]);
  if (process.env.NODE_ENV !== "production") {
    const {
      deprecated: we
    } = Kt("Input");
    we(!("bordered" in e), "bordered", "variant");
  }
  const {
    getPrefixCls: m,
    direction: _,
    allowClear: w,
    autoComplete: A,
    className: N,
    style: D,
    classNames: V,
    styles: U
  } = kn("input"), L = m("input", t), z = Pe(null), H = sg(L), [T, I, P] = Jg(L, p), [B] = v5(L, H), {
    compactSize: W,
    compactItemClassnames: Y
  } = dd(L, _), K = Ws((we) => {
    var ze;
    return (ze = i ?? W) !== null && ze !== void 0 ? ze : we;
  }), Z = Q.useContext(mo), G = a ?? Z, {
    status: te,
    hasFeedback: ie,
    feedbackIcon: he
  } = ir(fi), pe = Lg(te, o), xe = R5(e) || !!ie, Se = Pe(xe);
  if (process.env.NODE_ENV !== "production") {
    const we = Kt("Input");
    ut(() => {
      var ze;
      xe && !Se.current && process.env.NODE_ENV !== "production" && we(document.activeElement === ((ze = z.current) === null || ze === void 0 ? void 0 : ze.input), "usage", "When Input is focused, dynamic add or remove prefix / suffix will make it lose focus caused by dom structure change. Read more: https://ant.design/components/input/#FAQ"), Se.current = xe;
    }, [xe]);
  }
  const ae = O5(z), se = (we) => {
    ae(), s == null || s(we);
  }, _e = (we) => {
    ae(), c == null || c(we);
  }, re = (we) => {
    ae(), y == null || y(we);
  }, ve = (ie || l) && /* @__PURE__ */ Q.createElement(Q.Fragment, null, l, ie && he), ce = tm(u ?? w), [be, Ce] = kg("input", C, n);
  return T(B(/* @__PURE__ */ Q.createElement(E5, Object.assign({
    ref: Ln(r, z),
    prefixCls: L,
    autoComplete: A
  }, E, {
    disabled: G,
    onBlur: se,
    onFocus: _e,
    style: Object.assign(Object.assign({}, D), f),
    styles: Object.assign(Object.assign({}, U), g),
    suffix: ve,
    allowClear: ce,
    className: fe(v, p, P, H, Y, N),
    onChange: re,
    addonBefore: h && /* @__PURE__ */ Q.createElement(Ou, {
      form: !0,
      space: !0
    }, h),
    addonAfter: d && /* @__PURE__ */ Q.createElement(Ou, {
      form: !0,
      space: !0
    }, d),
    classNames: Object.assign(Object.assign(Object.assign({}, b), V), {
      input: fe({
        [`${L}-sm`]: K === "small",
        [`${L}-lg`]: K === "large",
        [`${L}-rtl`]: _ === "rtl"
      }, b == null ? void 0 : b.input, V.input, I),
      variant: fe({
        [`${L}-${be}`]: Ce
      }, $u(L, pe)),
      affixWrapper: fe({
        [`${L}-affix-wrapper-sm`]: K === "small",
        [`${L}-affix-wrapper-lg`]: K === "large",
        [`${L}-affix-wrapper-rtl`]: _ === "rtl"
      }, I),
      wrapper: fe({
        [`${L}-group-rtl`]: _ === "rtl"
      }, I),
      groupWrapper: fe({
        [`${L}-group-wrapper-sm`]: K === "small",
        [`${L}-group-wrapper-lg`]: K === "large",
        [`${L}-group-wrapper-rtl`]: _ === "rtl",
        [`${L}-group-wrapper-${be}`]: Ce
      }, $u(`${L}-group-wrapper`, pe, ie), I)
    })
  }))));
});
process.env.NODE_ENV !== "production" && (T5.displayName = "Input");
function Ja(e) {
  return ["small", "middle", "large"].includes(e);
}
function z0(e) {
  return e ? typeof e == "number" && !Number.isNaN(e) : !1;
}
const rm = /* @__PURE__ */ Q.createContext({
  latestIndex: 0
}), P5 = rm.Provider, A5 = (e) => {
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
var N5 = function(e, r) {
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
    align: d,
    className: h,
    rootClassName: v,
    children: f,
    direction: g = "horizontal",
    prefixCls: p,
    split: y,
    style: b,
    wrap: C = !1,
    classNames: E,
    styles: m
  } = e, _ = N5(e, ["size", "align", "className", "rootClassName", "children", "direction", "prefixCls", "split", "style", "wrap", "classNames", "styles"]), [w, A] = Array.isArray(u) ? u : [u, u], N = Ja(A), D = Ja(w), V = z0(A), U = z0(w), L = xn(f, {
    keepEmpty: !0
  }), z = d === void 0 && g === "horizontal" ? "center" : d, H = n("space", p), [T, I, P] = fg(H), B = fe(H, a, I, `${H}-${g}`, {
    [`${H}-rtl`]: o === "rtl",
    [`${H}-align-${z}`]: z,
    [`${H}-gap-row-${A}`]: N,
    [`${H}-gap-col-${w}`]: D
  }, h, v, P), W = fe(`${H}-item`, (t = E == null ? void 0 : E.item) !== null && t !== void 0 ? t : c.item);
  let Y = 0;
  const K = L.map((te, ie) => {
    var he;
    te != null && (Y = ie);
    const pe = (te == null ? void 0 : te.key) || `${W}-${ie}`;
    return /* @__PURE__ */ x.createElement(A5, {
      className: W,
      key: pe,
      index: ie,
      split: y,
      style: (he = m == null ? void 0 : m.item) !== null && he !== void 0 ? he : l.item
    }, te);
  }), Z = x.useMemo(() => ({
    latestIndex: Y
  }), [Y]);
  if (L.length === 0)
    return null;
  const G = {};
  return C && (G.flexWrap = "wrap"), !D && U && (G.columnGap = w), !N && V && (G.rowGap = A), T(/* @__PURE__ */ x.createElement("div", Object.assign({
    ref: r,
    className: B,
    style: Object.assign(Object.assign(Object.assign({}, G), s), b)
  }, _), /* @__PURE__ */ x.createElement(P5, {
    value: Z
  }, K)));
}), vd = I5;
vd.Compact = iC;
process.env.NODE_ENV !== "production" && (vd.displayName = "Space");
const nm = ["wrap", "nowrap", "wrap-reverse"], om = ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around", "space-evenly", "stretch", "normal", "left", "right"], im = ["center", "start", "end", "flex-start", "flex-end", "self-start", "self-end", "baseline", "normal", "stretch"], j5 = (e, r) => {
  const t = r.wrap === !0 ? "wrap" : r.wrap;
  return {
    [`${e}-wrap-${t}`]: t && nm.includes(t)
  };
}, M5 = (e, r) => {
  const t = {};
  return im.forEach((n) => {
    t[`${e}-align-${n}`] = r.align === n;
  }), t[`${e}-align-stretch`] = !r.align && !!r.vertical, t;
}, F5 = (e, r) => {
  const t = {};
  return om.forEach((n) => {
    t[`${e}-justify-${n}`] = r.justify === n;
  }), t;
};
function L5(e, r) {
  return fe(Object.assign(Object.assign(Object.assign({}, j5(e, r)), M5(e, r)), F5(e, r)));
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
}, D5 = (e) => {
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
  return [k5(o), D5(o), z5(o), B5(o), V5(o)];
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
  } = e, d = q5(e, ["prefixCls", "rootClassName", "className", "style", "flex", "gap", "children", "vertical", "component"]), {
    flex: h,
    direction: v,
    getPrefixCls: f
  } = Q.useContext(er), g = f("flex", t), [p, y, b] = W5(g), C = l ?? (h == null ? void 0 : h.vertical), E = fe(o, n, h == null ? void 0 : h.className, g, y, b, L5(g, e), {
    [`${g}-rtl`]: v === "rtl",
    [`${g}-gap-${s}`]: Ja(s),
    [`${g}-vertical`]: C
  }), m = Object.assign(Object.assign({}, h == null ? void 0 : h.style), i);
  return a && (m.flex = a), s && !Ja(s) && (m.gap = s), p(/* @__PURE__ */ Q.createElement(u, Object.assign({
    ref: r,
    className: E,
    style: m
  }, Ci(d, ["justify", "wrap", "align"])), c));
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
function X5(e) {
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
function K5(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  lr || (lr = document.createElement("textarea"), lr.setAttribute("tab-index", "-1"), lr.setAttribute("aria-hidden", "true"), lr.setAttribute("name", "hiddenTextarea"), document.body.appendChild(lr)), e.getAttribute("wrap") ? lr.setAttribute("wrap", e.getAttribute("wrap")) : lr.removeAttribute("wrap");
  var o = X5(e, r), i = o.paddingSize, a = o.borderSize, s = o.boxSizing, c = o.sizingStyle;
  lr.setAttribute("style", "".concat(c, ";").concat(U5)), lr.value = e.value || e.placeholder || "";
  var l = void 0, u = void 0, d, h = lr.scrollHeight;
  if (s === "border-box" ? h += a : s === "content-box" && (h -= i), t !== null || n !== null) {
    lr.value = " ";
    var v = lr.scrollHeight - i;
    t !== null && (l = v * t, s === "border-box" && (l = l + i + a), h = Math.max(l, h)), n !== null && (u = v * n, s === "border-box" && (u = u + i + a), d = h > u ? "" : "hidden", h = Math.min(u, h));
  }
  var f = {
    height: h,
    overflowY: d,
    resize: "none"
  };
  return l && (f.minHeight = l), u && (f.maxHeight = u), f;
}
var Y5 = ["prefixCls", "defaultValue", "value", "autoSize", "onResize", "className", "style", "disabled", "onChange", "onInternalAutoSize"], Qc = 0, Zc = 1, el = 2, J5 = /* @__PURE__ */ x.forwardRef(function(e, r) {
  var t = e, n = t.prefixCls, o = t.defaultValue, i = t.value, a = t.autoSize, s = t.onResize, c = t.className, l = t.style, u = t.disabled, d = t.onChange, h = t.onInternalAutoSize, v = Xt(t, Y5), f = jn(o, {
    value: i,
    postState: function(te) {
      return te ?? "";
    }
  }), g = ne(f, 2), p = g[0], y = g[1], b = function(te) {
    y(te.target.value), d == null || d(te);
  }, C = x.useRef();
  x.useImperativeHandle(r, function() {
    return {
      textArea: C.current
    };
  });
  var E = x.useMemo(function() {
    return a && Ae(a) === "object" ? [a.minRows, a.maxRows] : [];
  }, [a]), m = ne(E, 2), _ = m[0], w = m[1], A = !!a, N = function() {
    try {
      if (document.activeElement === C.current) {
        var te = C.current, ie = te.selectionStart, he = te.selectionEnd, pe = te.scrollTop;
        C.current.setSelectionRange(ie, he), C.current.scrollTop = pe;
      }
    } catch {
    }
  }, D = x.useState(el), V = ne(D, 2), U = V[0], L = V[1], z = x.useState(), H = ne(z, 2), T = H[0], I = H[1], P = function() {
    L(Qc), process.env.NODE_ENV === "test" && (h == null || h());
  };
  St(function() {
    A && P();
  }, [i, _, w, A]), St(function() {
    if (U === Qc)
      L(Zc);
    else if (U === Zc) {
      var G = K5(C.current, !1, _, w);
      L(el), I(G);
    } else
      N();
  }, [U]);
  var B = x.useRef(), W = function() {
    Vr.cancel(B.current);
  }, Y = function(te) {
    U === el && (s == null || s(te), a && (W(), B.current = Vr(function() {
      P();
    })));
  };
  x.useEffect(function() {
    return W;
  }, []);
  var K = A ? T : null, Z = q(q({}, l), K);
  return (U === Qc || U === Zc) && (Z.overflowY = "hidden", Z.overflowX = "hidden"), /* @__PURE__ */ x.createElement(Oo, {
    onResize: Y,
    disabled: !(a || s)
  }, /* @__PURE__ */ x.createElement("textarea", bt({}, v, {
    ref: C,
    style: Z,
    className: fe(n, c, F({}, "".concat(n, "-disabled"), u)),
    disabled: u,
    value: p,
    onChange: b
  })));
}), Q5 = ["defaultValue", "value", "onFocus", "onBlur", "onChange", "allowClear", "maxLength", "onCompositionStart", "onCompositionEnd", "suffix", "prefixCls", "showCount", "count", "className", "style", "disabled", "hidden", "classNames", "styles", "onResize", "onClear", "onPressEnter", "readOnly", "autoSize", "onKeyDown"], Z5 = /* @__PURE__ */ Q.forwardRef(function(e, r) {
  var t, n = e.defaultValue, o = e.value, i = e.onFocus, a = e.onBlur, s = e.onChange, c = e.allowClear, l = e.maxLength, u = e.onCompositionStart, d = e.onCompositionEnd, h = e.suffix, v = e.prefixCls, f = v === void 0 ? "rc-textarea" : v, g = e.showCount, p = e.count, y = e.className, b = e.style, C = e.disabled, E = e.hidden, m = e.classNames, _ = e.styles, w = e.onResize, A = e.onClear, N = e.onPressEnter, D = e.readOnly, V = e.autoSize, U = e.onKeyDown, L = Xt(e, Q5), z = jn(n, {
    value: o,
    defaultValue: n
  }), H = ne(z, 2), T = H[0], I = H[1], P = T == null ? "" : String(T), B = Q.useState(!1), W = ne(B, 2), Y = W[0], K = W[1], Z = Q.useRef(!1), G = Q.useState(null), te = ne(G, 2), ie = te[0], he = te[1], pe = Pe(null), xe = Pe(null), Se = function() {
    var ge;
    return (ge = xe.current) === null || ge === void 0 ? void 0 : ge.textArea;
  }, ae = function() {
    Se().focus();
  };
  gi(r, function() {
    var Le;
    return {
      resizableTextArea: xe.current,
      focus: ae,
      blur: function() {
        Se().blur();
      },
      nativeElement: ((Le = pe.current) === null || Le === void 0 ? void 0 : Le.nativeElement) || Se()
    };
  }), ut(function() {
    K(function(Le) {
      return !C && Le;
    });
  }, [C]);
  var se = Q.useState(null), _e = ne(se, 2), re = _e[0], ve = _e[1];
  Q.useEffect(function() {
    if (re) {
      var Le;
      (Le = Se()).setSelectionRange.apply(Le, $e(re));
    }
  }, [re]);
  var ce = em(p, g), be = (t = ce.max) !== null && t !== void 0 ? t : l, Ce = Number(be) > 0, we = ce.strategy(P), ze = !!be && we > be, Te = function(ge, Ee) {
    var ue = Ee;
    !Z.current && ce.exceedFormatter && ce.max && ce.strategy(Ee) > ce.max && (ue = ce.exceedFormatter(Ee, {
      max: ce.max
    }), Ee !== ue && ve([Se().selectionStart || 0, Se().selectionEnd || 0])), I(ue), Ya(ge.currentTarget, ge, s, ue);
  }, S = function(ge) {
    Z.current = !0, u == null || u(ge);
  }, $ = function(ge) {
    Z.current = !1, Te(ge, ge.currentTarget.value), d == null || d(ge);
  }, O = function(ge) {
    Te(ge, ge.target.value);
  }, j = function(ge) {
    ge.key === "Enter" && N && N(ge), U == null || U(ge);
  }, M = function(ge) {
    K(!0), i == null || i(ge);
  }, le = function(ge) {
    K(!1), a == null || a(ge);
  }, Je = function(ge) {
    I(""), ae(), Ya(Se(), ge, s);
  }, We = h, je;
  ce.show && (ce.showFormatter ? je = ce.showFormatter({
    value: P,
    count: we,
    maxLength: be
  }) : je = "".concat(we).concat(Ce ? " / ".concat(be) : ""), We = /* @__PURE__ */ Q.createElement(Q.Fragment, null, We, /* @__PURE__ */ Q.createElement("span", {
    className: fe("".concat(f, "-data-count"), m == null ? void 0 : m.count),
    style: _ == null ? void 0 : _.count
  }, je)));
  var et = function(ge) {
    var Ee;
    w == null || w(ge), (Ee = Se()) !== null && Ee !== void 0 && Ee.style.height && he(!0);
  }, Ve = !V && !g && !c;
  return /* @__PURE__ */ Q.createElement(Zg, {
    ref: pe,
    value: P,
    allowClear: c,
    handleReset: Je,
    suffix: We,
    prefixCls: f,
    classNames: q(q({}, m), {}, {
      affixWrapper: fe(m == null ? void 0 : m.affixWrapper, F(F({}, "".concat(f, "-show-count"), g), "".concat(f, "-textarea-allow-clear"), c))
    }),
    disabled: C,
    focused: Y,
    className: fe(y, ze && "".concat(f, "-out-of-range")),
    style: q(q({}, b), ie && !Ve ? {
      height: "auto"
    } : {}),
    dataAttrs: {
      affixWrapper: {
        "data-count": typeof je == "string" ? je : void 0
      }
    },
    hidden: E,
    readOnly: D,
    onClear: A
  }, /* @__PURE__ */ Q.createElement(J5, bt({}, L, {
    autoSize: V,
    maxLength: l,
    onKeyDown: j,
    onChange: O,
    onFocus: M,
    onBlur: le,
    onCompositionStart: S,
    onCompositionEnd: $,
    className: fe(m == null ? void 0 : m.textarea),
    style: q(q({}, _ == null ? void 0 : _.textarea), {}, {
      resize: b == null ? void 0 : b.resize
    }),
    disabled: C,
    prefixCls: f,
    onResize: et,
    ref: xe,
    readOnly: D
  })));
});
const eO = (e) => {
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
}, tO = en(["Input", "TextArea"], (e) => {
  const r = Yt(e, xd(e));
  return [eO(r)];
}, gd, {
  resetFont: !1
});
var rO = function(e, r) {
  var t = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    r.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (t[n[o]] = e[n[o]]);
  return t;
};
const nO = /* @__PURE__ */ Wr((e, r) => {
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
    className: d,
    style: h,
    styles: v,
    variant: f,
    showCount: g,
    onMouseDown: p,
    onResize: y
  } = e, b = rO(e, ["prefixCls", "bordered", "size", "disabled", "status", "allowClear", "classNames", "rootClassName", "className", "style", "styles", "variant", "showCount", "onMouseDown", "onResize"]);
  if (process.env.NODE_ENV !== "production") {
    const {
      deprecated: ce
    } = Kt("TextArea");
    ce(!("bordered" in e), "bordered", "variant");
  }
  const {
    getPrefixCls: C,
    direction: E,
    allowClear: m,
    autoComplete: _,
    className: w,
    style: A,
    classNames: N,
    styles: D
  } = kn("textArea"), V = x.useContext(mo), U = a ?? V, {
    status: L,
    hasFeedback: z,
    feedbackIcon: H
  } = x.useContext(fi), T = Lg(L, s), I = x.useRef(null);
  x.useImperativeHandle(r, () => {
    var ce;
    return {
      resizableTextArea: (ce = I.current) === null || ce === void 0 ? void 0 : ce.resizableTextArea,
      focus: (be) => {
        var Ce, we;
        Qg((we = (Ce = I.current) === null || Ce === void 0 ? void 0 : Ce.resizableTextArea) === null || we === void 0 ? void 0 : we.textArea, be);
      },
      blur: () => {
        var be;
        return (be = I.current) === null || be === void 0 ? void 0 : be.blur();
      }
    };
  });
  const P = C("input", n), B = sg(P), [W, Y, K] = Jg(P, u), [Z] = tO(P, B), {
    compactSize: G,
    compactItemClassnames: te
  } = dd(P, E), ie = Ws((ce) => {
    var be;
    return (be = i ?? G) !== null && be !== void 0 ? be : ce;
  }), [he, pe] = kg("textArea", f, o), xe = tm(c ?? m), [Se, ae] = x.useState(!1), [se, _e] = x.useState(!1), re = (ce) => {
    ae(!0), p == null || p(ce);
    const be = () => {
      ae(!1), document.removeEventListener("mouseup", be);
    };
    document.addEventListener("mouseup", be);
  }, ve = (ce) => {
    var be, Ce;
    if (y == null || y(ce), Se && typeof getComputedStyle == "function") {
      const we = (Ce = (be = I.current) === null || be === void 0 ? void 0 : be.nativeElement) === null || Ce === void 0 ? void 0 : Ce.querySelector("textarea");
      we && getComputedStyle(we).resize === "both" && _e(!0);
    }
  };
  return W(Z(/* @__PURE__ */ x.createElement(Z5, Object.assign({
    autoComplete: _
  }, b, {
    style: Object.assign(Object.assign({}, A), h),
    styles: Object.assign(Object.assign({}, D), v),
    disabled: U,
    allowClear: xe,
    className: fe(
      K,
      B,
      d,
      u,
      te,
      w,
      // Only for wrapper
      se && `${P}-textarea-affix-wrapper-resize-dirty`
    ),
    classNames: Object.assign(Object.assign(Object.assign({}, l), N), {
      textarea: fe({
        [`${P}-sm`]: ie === "small",
        [`${P}-lg`]: ie === "large"
      }, Y, l == null ? void 0 : l.textarea, N.textarea, Se && `${P}-mouse-active`),
      variant: fe({
        [`${P}-${he}`]: pe
      }, $u(P, T)),
      affixWrapper: fe(`${P}-textarea-affix-wrapper`, {
        [`${P}-affix-wrapper-rtl`]: E === "rtl",
        [`${P}-affix-wrapper-sm`]: ie === "small",
        [`${P}-affix-wrapper-lg`]: ie === "large",
        [`${P}-textarea-show-count`]: g || ((t = e.count) === null || t === void 0 ? void 0 : t.show)
      }, Y)
    }),
    prefixCls: P,
    suffix: z && /* @__PURE__ */ x.createElement("span", {
      className: `${P}-textarea-suffix`
    }, H),
    showCount: g,
    ref: I,
    onResize: ve,
    onMouseDown: re
  }))));
}), Qa = 100, sm = Qa / 5, cm = Qa / 2 - sm / 2, tl = cm * 2 * Math.PI, B0 = 50, V0 = (e) => {
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
}, oO = (e) => {
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
    viewBox: `0 0 ${Qa} ${Qa}`,
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
function iO(e) {
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
  })))), /* @__PURE__ */ x.createElement(oO, {
    prefixCls: r,
    percent: t
  }));
}
function aO(e) {
  const {
    prefixCls: r,
    indicator: t,
    percent: n
  } = e, o = `${r}-dot`;
  return t && /* @__PURE__ */ x.isValidElement(t) ? wi(t, {
    className: fe(t.props.className, o),
    percent: n
  }) : /* @__PURE__ */ x.createElement(iO, {
    prefixCls: r,
    percent: n
  });
}
const sO = new ar("antSpinMove", {
  to: {
    opacity: 1
  }
}), cO = new ar("antRotate", {
  to: {
    transform: "rotate(405deg)"
  }
}), lO = (e) => {
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
          animationName: sO,
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
          animationName: cO,
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
}, uO = (e) => {
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
}, dO = en("Spin", (e) => {
  const r = Yt(e, {
    spinDotDefault: e.colorTextDescription
  });
  return [lO(r)];
}, uO), fO = 200, H0 = [[30, 0.05], [70, 0.03], [96, 0.01]];
function hO(e, r) {
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
  }, fO)), () => {
    clearInterval(o.current);
  }), [i, e]), i ? t : r;
}
var pO = function(e, r) {
  var t = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    r.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (t[n[o]] = e[n[o]]);
  return t;
};
let lm;
function xO(e, r) {
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
    children: d,
    fullscreen: h = !1,
    indicator: v,
    percent: f
  } = e, g = pO(e, ["prefixCls", "spinning", "delay", "className", "rootClassName", "size", "tip", "wrapperClassName", "style", "children", "fullscreen", "indicator", "percent"]), {
    getPrefixCls: p,
    direction: y,
    className: b,
    style: C,
    indicator: E
  } = kn("spin"), m = p("spin", t), [_, w, A] = dO(m), [N, D] = x.useState(() => n && !xO(n, o)), V = hO(N, f);
  x.useEffect(() => {
    if (n) {
      const P = y5(o, () => {
        D(!0);
      });
      return P(), () => {
        var B;
        (B = P == null ? void 0 : P.cancel) === null || B === void 0 || B.call(P);
      };
    }
    D(!1);
  }, [o, n]);
  const U = x.useMemo(() => typeof d < "u" && !h, [d, h]);
  if (process.env.NODE_ENV !== "production") {
    const P = Kt("Spin");
    process.env.NODE_ENV !== "production" && P(!c || U || h, "usage", "`tip` only work in nest or fullscreen pattern.");
  }
  const L = fe(m, b, {
    [`${m}-sm`]: s === "small",
    [`${m}-lg`]: s === "large",
    [`${m}-spinning`]: N,
    [`${m}-show-text`]: !!c,
    [`${m}-rtl`]: y === "rtl"
  }, i, !h && a, w, A), z = fe(`${m}-container`, {
    [`${m}-blur`]: N
  }), H = (r = v ?? E) !== null && r !== void 0 ? r : lm, T = Object.assign(Object.assign({}, C), u), I = /* @__PURE__ */ x.createElement("div", Object.assign({}, g, {
    style: T,
    className: L,
    "aria-live": "polite",
    "aria-busy": N
  }), /* @__PURE__ */ x.createElement(aO, {
    prefixCls: m,
    indicator: H,
    percent: V
  }), c && (U || h) ? /* @__PURE__ */ x.createElement("div", {
    className: `${m}-text`
  }, c) : null);
  return _(U ? /* @__PURE__ */ x.createElement("div", Object.assign({}, g, {
    className: fe(`${m}-nested-loading`, l, w, A)
  }), N && /* @__PURE__ */ x.createElement("div", {
    key: "loading"
  }, I), /* @__PURE__ */ x.createElement("div", {
    className: z,
    key: "container"
  }, d)) : h ? /* @__PURE__ */ x.createElement("div", {
    className: fe(`${m}-fullscreen`, {
      [`${m}-fullscreen-show`]: N
    }, a, w, A)
  }, I) : I);
};
ri.setDefaultIndicator = (e) => {
  lm = e;
};
process.env.NODE_ENV !== "production" && (ri.displayName = "Spin");
const gO = function(e) {
  return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1) && e == null ? [] : Array.isArray(e) ? e : [e];
};
var mO = function(r, t) {
  return /* @__PURE__ */ x.createElement(tn, bt({}, r, {
    ref: t,
    icon: z1
  }));
}, um = /* @__PURE__ */ x.forwardRef(mO);
process.env.NODE_ENV !== "production" && (um.displayName = "CopyOutlined");
var vO = function(r, t) {
  return /* @__PURE__ */ x.createElement(tn, bt({}, r, {
    ref: t,
    icon: B1
  }));
}, dm = /* @__PURE__ */ x.forwardRef(vO);
process.env.NODE_ENV !== "production" && (dm.displayName = "EditOutlined");
var bO = function(r, t) {
  return /* @__PURE__ */ x.createElement(tn, bt({}, r, {
    ref: t,
    icon: V1
  }));
}, fm = /* @__PURE__ */ x.forwardRef(bO);
process.env.NODE_ENV !== "production" && (fm.displayName = "EnterOutlined");
const yO = (e, r, t, n) => {
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
}, wO = (e) => {
  const r = [1, 2, 3, 4, 5], t = {};
  return r.forEach((n) => {
    t[`
      h${n}&,
      div&-h${n},
      div&-h${n} > textarea,
      h${n}
    `] = yO(e[`fontSizeHeading${n}`], e[`lineHeightHeading${n}`], e.colorTextHeading, e);
  }), t;
}, SO = (e) => {
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
}, CO = (e) => ({
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
    backgroundColor: Wa[2]
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
}), _O = (e) => {
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
        marginBottom: `calc(1em - ${nt(n)})`
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
}, EO = (e) => ({
  [`${e.componentCls}-copy-success`]: {
    "\n    &,\n    &:hover,\n    &:focus": {
      color: e.colorSuccess
    }
  },
  [`${e.componentCls}-copy-icon-only`]: {
    marginInlineStart: 0
  }
}), OO = () => ({
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
}), RO = (e) => {
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
    }, wO(e)), {
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
    }), CO(e)), SO(e)), {
      // Operation
      [`
        ${r}-expand,
        ${r}-collapse,
        ${r}-edit,
        ${r}-copy
      `]: Object.assign(Object.assign({}, Vx(e)), {
        marginInlineStart: e.marginXXS
      })
    }), _O(e)), EO(e)), OO()), {
      "&-rtl": {
        direction: "rtl"
      }
    })
  };
}, $O = () => ({
  titleMarginTop: "1.2em",
  titleMarginBottom: "0.5em"
}), hm = en("Typography", (e) => [RO(e)], $O), TO = (e) => {
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
    onEnd: d,
    component: h,
    enterIcon: v = /* @__PURE__ */ x.createElement(fm, null)
  } = e, f = x.useRef(null), g = x.useRef(!1), p = x.useRef(null), [y, b] = x.useState(c);
  x.useEffect(() => {
    b(c);
  }, [c]), x.useEffect(() => {
    var z;
    if (!((z = f.current) === null || z === void 0) && z.resizableTextArea) {
      const {
        textArea: H
      } = f.current.resizableTextArea;
      H.focus();
      const {
        length: T
      } = H.value;
      H.setSelectionRange(T, T);
    }
  }, []);
  const C = (z) => {
    let {
      target: H
    } = z;
    b(H.value.replace(/[\n\r]/g, ""));
  }, E = () => {
    g.current = !0;
  }, m = () => {
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
      ctrlKey: T,
      altKey: I,
      metaKey: P,
      shiftKey: B
    } = z;
    p.current !== H || g.current || T || I || P || B || (H === e0.ENTER ? (w(), d == null || d()) : H === e0.ESC && u());
  }, N = () => {
    w();
  }, [D, V, U] = hm(r), L = fe(r, `${r}-edit-content`, {
    [`${r}-rtl`]: i === "rtl",
    [`${r}-${h}`]: !!h
  }, n, V, U);
  return D(/* @__PURE__ */ x.createElement("div", {
    className: L,
    style: o
  }, /* @__PURE__ */ x.createElement(nO, {
    ref: f,
    maxLength: a,
    value: y,
    onChange: C,
    onKeyDown: _,
    onKeyUp: A,
    onCompositionStart: E,
    onCompositionEnd: m,
    onBlur: N,
    "aria-label": t,
    rows: 1,
    autoSize: s
  }), v !== null ? wi(v, {
    className: `${r}-edit-content-confirm`
  }) : null));
};
var rl, W0;
function PO() {
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
function AO() {
  if (q0) return nl;
  q0 = 1;
  var e = PO(), r = {
    "text/plain": "Text",
    "text/html": "Url",
    default: "Text"
  }, t = "Copy to clipboard: #{key}, Enter";
  function n(i) {
    var a = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
    return i.replace(/#{\s*key\s*}/g, a);
  }
  function o(i, a) {
    var s, c, l, u, d, h, v = !1;
    a || (a = {}), s = a.debug || !1;
    try {
      l = e(), u = document.createRange(), d = document.getSelection(), h = document.createElement("span"), h.textContent = i, h.ariaHidden = "true", h.style.all = "unset", h.style.position = "fixed", h.style.top = 0, h.style.clip = "rect(0, 0, 0, 0)", h.style.whiteSpace = "pre", h.style.webkitUserSelect = "text", h.style.MozUserSelect = "text", h.style.msUserSelect = "text", h.style.userSelect = "text", h.addEventListener("copy", function(g) {
        if (g.stopPropagation(), a.format)
          if (g.preventDefault(), typeof g.clipboardData > "u") {
            s && console.warn("unable to use e.clipboardData"), s && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
            var p = r[a.format] || r.default;
            window.clipboardData.setData(p, i);
          } else
            g.clipboardData.clearData(), g.clipboardData.setData(a.format, i);
        a.onCopy && (g.preventDefault(), a.onCopy(g.clipboardData));
      }), document.body.appendChild(h), u.selectNodeContents(h), d.addRange(u);
      var f = document.execCommand("copy");
      if (!f)
        throw new Error("copy command was unsuccessful");
      v = !0;
    } catch (g) {
      s && console.error("unable to copy using execCommand: ", g), s && console.warn("trying IE specific stuff");
      try {
        window.clipboardData.setData(a.format || "text", i), a.onCopy && a.onCopy(window.clipboardData), v = !0;
      } catch (p) {
        s && console.error("unable to copy using clipboardData: ", p), s && console.error("falling back to prompt"), c = n("message" in a ? a.message : t), window.prompt(c, i);
      }
    } finally {
      d && (typeof d.removeRange == "function" ? d.removeRange(u) : d.removeAllRanges()), h && document.body.removeChild(h), l();
    }
    return v;
  }
  return nl = o, nl;
}
var NO = AO();
const IO = /* @__PURE__ */ zh(NO);
var jO = function(e, r, t, n) {
  function o(i) {
    return i instanceof t ? i : new t(function(a) {
      a(i);
    });
  }
  return new (t || (t = Promise))(function(i, a) {
    function s(u) {
      try {
        l(n.next(u));
      } catch (d) {
        a(d);
      }
    }
    function c(u) {
      try {
        l(n.throw(u));
      } catch (d) {
        a(d);
      }
    }
    function l(u) {
      u.done ? i(u.value) : o(u.value).then(s, c);
    }
    l((n = n.apply(e, r || [])).next());
  });
};
const MO = (e) => {
  let {
    copyConfig: r,
    children: t
  } = e;
  const [n, o] = x.useState(!1), [i, a] = x.useState(!1), s = x.useRef(null), c = () => {
    s.current && clearTimeout(s.current);
  }, l = {};
  r.format && (l.format = r.format), x.useEffect(() => c, []);
  const u = Ut((d) => jO(void 0, void 0, void 0, function* () {
    var h;
    d == null || d.preventDefault(), d == null || d.stopPropagation(), a(!0);
    try {
      const v = typeof r.text == "function" ? yield r.text() : r.text;
      IO(v || gO(t, !0).join("") || "", l), a(!1), o(!0), c(), s.current = setTimeout(() => {
        o(!1);
      }, 3e3), (h = r.onCopy) === null || h === void 0 || h.call(r, d);
    } catch (v) {
      throw a(!1), v;
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
const FO = (e) => {
  const r = Pe(void 0);
  return ut(() => {
    r.current = e;
  }), r.current;
}, LO = (e, r, t) => Nn(() => e === !0 ? {
  title: r ?? t
} : /* @__PURE__ */ kh(e) ? {
  title: e
} : typeof e == "object" ? Object.assign({
  title: r ?? t
}, e) : {
  title: e
}, [e, r, t]);
var kO = function(e, r) {
  var t = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    r.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (t[n[o]] = e[n[o]]);
  return t;
};
const bd = /* @__PURE__ */ x.forwardRef((e, r) => {
  const {
    prefixCls: t,
    component: n = "article",
    className: o,
    rootClassName: i,
    setContentRef: a,
    children: s,
    direction: c,
    style: l
  } = e, u = kO(e, ["prefixCls", "component", "className", "rootClassName", "setContentRef", "children", "direction", "style"]), {
    getPrefixCls: d,
    direction: h,
    className: v,
    style: f
  } = kn("typography"), g = c ?? h, p = a ? Ln(r, a) : r, y = d("typography", t);
  process.env.NODE_ENV !== "production" && Kt("Typography").deprecated(!a, "setContentRef", "ref");
  const [b, C, E] = hm(y), m = fe(y, v, {
    [`${y}-rtl`]: g === "rtl"
  }, o, i, C, E), _ = Object.assign(Object.assign({}, f), l);
  return b(
    // @ts-expect-error: Expression produces a union type that is too complex to represent.
    /* @__PURE__ */ x.createElement(n, Object.assign({
      className: m,
      style: _,
      ref: p
    }, u), s)
  );
});
process.env.NODE_ENV !== "production" && (bd.displayName = "Typography");
function U0(e) {
  return e === !1 ? [!1, !1] : Array.isArray(e) ? e : [e];
}
function il(e, r, t) {
  return e === !0 || e === void 0 ? r : e || t && r;
}
function DO(e) {
  const r = document.createElement("em");
  e.appendChild(r), process.env.NODE_ENV !== "production" && (r.className = "ant-typography-css-ellipsis-content-measure");
  const t = e.getBoundingClientRect(), n = r.getBoundingClientRect();
  return e.removeChild(r), // Horizontal out of range
  t.left > n.left || n.right > t.right || // Vertical out of range
  t.top > n.top || n.bottom > t.bottom;
}
const yd = (e) => ["string", "number"].includes(typeof e), zO = (e) => {
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
  const u = U0(i), d = U0(a), {
    copied: h,
    copy: v
  } = n ?? {}, f = t ? h : v, g = il(u[t ? 1 : 0], f), p = typeof g == "string" ? g : f;
  return /* @__PURE__ */ x.createElement(Ri, {
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
  }, t ? il(d[1], /* @__PURE__ */ x.createElement(Dg, null), !0) : il(d[0], l ? /* @__PURE__ */ x.createElement(ld, null) : /* @__PURE__ */ x.createElement(um, null), !0)));
}, ua = /* @__PURE__ */ x.forwardRef((e, r) => {
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
}), BO = (e) => e.reduce((r, t) => r + (yd(t) ? String(t).length : 1), 0);
function G0(e, r) {
  let t = 0;
  const n = [];
  for (let o = 0; o < e.length; o += 1) {
    if (t === r)
      return n;
    const i = e[o], s = yd(i) ? String(i).length : 1, c = t + s;
    if (c > r) {
      const l = r - t;
      return n.push(String(i).slice(0, l)), n;
    }
    n.push(i), t = c;
  }
  return e;
}
const al = 0, sl = 1, cl = 2, ll = 3, X0 = 4, da = {
  display: "-webkit-box",
  overflow: "hidden",
  WebkitBoxOrient: "vertical"
};
function VO(e) {
  const {
    enableMeasure: r,
    width: t,
    text: n,
    children: o,
    rows: i,
    expanded: a,
    miscDeps: s,
    onEllipsis: c
  } = e, l = x.useMemo(() => xn(n), [n]), u = x.useMemo(() => BO(l), [n]), d = x.useMemo(() => o(l, !1), [n]), [h, v] = x.useState(null), f = x.useRef(null), g = x.useRef(null), p = x.useRef(null), y = x.useRef(null), b = x.useRef(null), [C, E] = x.useState(!1), [m, _] = x.useState(al), [w, A] = x.useState(0), [N, D] = x.useState(null);
  St(() => {
    _(r && t && u ? sl : al);
  }, [t, n, i, r, l]), St(() => {
    var z, H, T, I;
    if (m === sl) {
      _(cl);
      const P = g.current && getComputedStyle(g.current).whiteSpace;
      D(P);
    } else if (m === cl) {
      const P = !!(!((z = p.current) === null || z === void 0) && z.isExceed());
      _(P ? ll : X0), v(P ? [0, u] : null), E(P);
      const B = ((H = p.current) === null || H === void 0 ? void 0 : H.getHeight()) || 0, W = i === 1 ? 0 : ((T = y.current) === null || T === void 0 ? void 0 : T.getHeight()) || 0, Y = ((I = b.current) === null || I === void 0 ? void 0 : I.getHeight()) || 0, K = Math.max(
        B,
        // height of rows with ellipsis
        W + Y
      );
      A(K + 1), c(P);
    }
  }, [m]);
  const V = h ? Math.ceil((h[0] + h[1]) / 2) : 0;
  St(() => {
    var z;
    const [H, T] = h || [0, 0];
    if (H !== T) {
      const P = (((z = f.current) === null || z === void 0 ? void 0 : z.getHeight()) || 0) > w;
      let B = V;
      T - H === 1 && (B = P ? H : T), v(P ? [H, B] : [B, T]);
    }
  }, [h, V]);
  const U = x.useMemo(() => {
    if (!r)
      return o(l, !1);
    if (m !== ll || !h || h[0] !== h[1]) {
      const z = o(l, !1);
      return [X0, al].includes(m) ? z : /* @__PURE__ */ x.createElement("span", {
        style: Object.assign(Object.assign({}, da), {
          WebkitLineClamp: i
        })
      }, z);
    }
    return o(a ? l : G0(l, h[0]), C);
  }, [a, m, h, l].concat($e(s))), L = {
    width: t,
    margin: 0,
    padding: 0,
    whiteSpace: N === "nowrap" ? "normal" : "inherit"
  };
  return /* @__PURE__ */ x.createElement(x.Fragment, null, U, m === cl && /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ x.createElement(ua, {
    style: Object.assign(Object.assign(Object.assign({}, L), da), {
      WebkitLineClamp: i
    }),
    ref: p
  }, d), /* @__PURE__ */ x.createElement(ua, {
    style: Object.assign(Object.assign(Object.assign({}, L), da), {
      WebkitLineClamp: i - 1
    }),
    ref: y
  }, d), /* @__PURE__ */ x.createElement(ua, {
    style: Object.assign(Object.assign(Object.assign({}, L), da), {
      WebkitLineClamp: 1
    }),
    ref: b
  }, o([], !0))), m === ll && h && h[0] !== h[1] && /* @__PURE__ */ x.createElement(ua, {
    style: Object.assign(Object.assign({}, L), {
      top: 400
    }),
    ref: f
  }, o(G0(l, V), !0)), m === sl && /* @__PURE__ */ x.createElement("span", {
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
  return !(o != null && o.title) || !r ? n : /* @__PURE__ */ x.createElement(Ri, Object.assign({
    open: t ? void 0 : !1
  }, o), n);
};
process.env.NODE_ENV !== "production" && (pm.displayName = "EllipsisTooltip");
var HO = function(e, r) {
  var t = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    r.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (t[n[o]] = e[n[o]]);
  return t;
};
function WO(e, r) {
  let {
    mark: t,
    code: n,
    underline: o,
    delete: i,
    strong: a,
    keyboard: s,
    italic: c
  } = e, l = r;
  function u(d, h) {
    h && (l = /* @__PURE__ */ x.createElement(d, {}, l));
  }
  return u("strong", a), u("u", o), u("del", i), u("code", n), u("mark", t), u("kbd", s), u("i", c), l;
}
const qO = "...", ec = /* @__PURE__ */ x.forwardRef((e, r) => {
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
    copyable: d,
    component: h,
    title: v
  } = e, f = HO(e, ["prefixCls", "className", "style", "type", "disabled", "children", "ellipsis", "editable", "copyable", "component", "title"]), {
    getPrefixCls: g,
    direction: p
  } = x.useContext(er), [y] = W2("Text"), b = x.useRef(null), C = x.useRef(null), E = g("typography", n), m = Ci(f, ["mark", "code", "delete", "underline", "strong", "keyboard", "italic"]), [_, w] = ol(u), [A, N] = jn(!1, {
    value: w.editing
  }), {
    triggerType: D = ["icon"]
  } = w, V = (ue) => {
    var Re;
    ue && ((Re = w.onStart) === null || Re === void 0 || Re.call(w)), N(ue);
  }, U = FO(A);
  St(() => {
    var ue;
    !A && U && ((ue = C.current) === null || ue === void 0 || ue.focus());
  }, [A]);
  const L = (ue) => {
    ue == null || ue.preventDefault(), V(!0);
  }, z = (ue) => {
    var Re;
    (Re = w.onChange) === null || Re === void 0 || Re.call(w, ue), V(!1);
  }, H = () => {
    var ue;
    (ue = w.onCancel) === null || ue === void 0 || ue.call(w), V(!1);
  }, [T, I] = ol(d), {
    copied: P,
    copyLoading: B,
    onClick: W
  } = MO({
    copyConfig: I,
    children: c
  }), [Y, K] = x.useState(!1), [Z, G] = x.useState(!1), [te, ie] = x.useState(!1), [he, pe] = x.useState(!1), [xe, Se] = x.useState(!0), [ae, se] = ol(l, {
    expandable: !1,
    symbol: (ue) => ue ? y == null ? void 0 : y.collapse : y == null ? void 0 : y.expand
  }), [_e, re] = jn(se.defaultExpanded || !1, {
    value: se.expanded
  }), ve = ae && (!_e || se.expandable === "collapsible"), {
    rows: ce = 1
  } = se, be = x.useMemo(() => (
    // Disable ellipsis
    ve && // Provide suffix
    (se.suffix !== void 0 || se.onEllipsis || // Can't use css ellipsis since we need to provide the place for button
    se.expandable || _ || T)
  ), [ve, se, _, T]);
  St(() => {
    ae && !be && (K(E0("webkitLineClamp")), G(E0("textOverflow")));
  }, [be, ae]);
  const [Ce, we] = x.useState(ve), ze = x.useMemo(() => be ? !1 : ce === 1 ? Z : Y, [be, Z, Y]);
  St(() => {
    we(ze && ve);
  }, [ze, ve]);
  const Te = ve && (Ce ? he : te), S = ve && ce === 1 && Ce, $ = ve && ce > 1 && Ce, O = (ue, Re) => {
    var dt;
    re(Re.expanded), (dt = se.onExpand) === null || dt === void 0 || dt.call(se, ue, Re);
  }, [j, M] = x.useState(0), le = (ue) => {
    let {
      offsetWidth: Re
    } = ue;
    M(Re);
  }, Je = (ue) => {
    var Re;
    ie(ue), te !== ue && ((Re = se.onEllipsis) === null || Re === void 0 || Re.call(se, ue));
  };
  x.useEffect(() => {
    const ue = b.current;
    if (ae && Ce && ue) {
      const Re = DO(ue);
      he !== Re && pe(Re);
    }
  }, [ae, Ce, c, $, xe, j]), x.useEffect(() => {
    const ue = b.current;
    if (typeof IntersectionObserver > "u" || !ue || !Ce || !ve)
      return;
    const Re = new IntersectionObserver(() => {
      Se(!!ue.offsetParent);
    });
    return Re.observe(ue), () => {
      Re.disconnect();
    };
  }, [Ce, ve]);
  const We = LO(se.tooltip, w.text, c), je = x.useMemo(() => {
    if (!(!ae || Ce))
      return [w.text, c, v, We.title].find(yd);
  }, [ae, Ce, v, We.title, Te]);
  if (A)
    return /* @__PURE__ */ x.createElement(TO, {
      value: (t = w.text) !== null && t !== void 0 ? t : typeof c == "string" ? c : "",
      onSave: z,
      onCancel: H,
      onEnd: w.onEnd,
      prefixCls: E,
      className: o,
      style: i,
      direction: p,
      component: h,
      maxLength: w.maxLength,
      autoSize: w.autoSize,
      enterIcon: w.enterIcon
    });
  const et = () => {
    const {
      expandable: ue,
      symbol: Re
    } = se;
    return ue ? /* @__PURE__ */ x.createElement("button", {
      type: "button",
      key: "expand",
      className: `${E}-${_e ? "collapse" : "expand"}`,
      onClick: (dt) => O(dt, {
        expanded: !_e
      }),
      "aria-label": _e ? y.collapse : y == null ? void 0 : y.expand
    }, typeof Re == "function" ? Re(_e) : Re) : null;
  }, Ve = () => {
    if (!_)
      return;
    const {
      icon: ue,
      tooltip: Re,
      tabIndex: dt
    } = w, Jt = xn(Re)[0] || (y == null ? void 0 : y.edit), Lt = typeof Jt == "string" ? Jt : "";
    return D.includes("icon") ? /* @__PURE__ */ x.createElement(Ri, {
      key: "edit",
      title: Re === !1 ? "" : Jt
    }, /* @__PURE__ */ x.createElement("button", {
      type: "button",
      ref: C,
      className: `${E}-edit`,
      onClick: L,
      "aria-label": Lt,
      tabIndex: dt
    }, ue || /* @__PURE__ */ x.createElement(dm, {
      role: "button"
    }))) : null;
  }, Le = () => T ? /* @__PURE__ */ x.createElement(zO, Object.assign({
    key: "copy"
  }, I, {
    prefixCls: E,
    copied: P,
    locale: y,
    onCopy: W,
    loading: B,
    iconOnly: c == null
  })) : null, ge = (ue) => [ue && et(), Ve(), Le()], Ee = (ue) => [ue && !_e && /* @__PURE__ */ x.createElement("span", {
    "aria-hidden": !0,
    key: "ellipsis"
  }, qO), se.suffix, ge(ue)];
  return /* @__PURE__ */ x.createElement(Oo, {
    onResize: le,
    disabled: !ve
  }, (ue) => /* @__PURE__ */ x.createElement(pm, {
    tooltipProps: We,
    enableEllipsis: ve,
    isEllipsis: Te
  }, /* @__PURE__ */ x.createElement(bd, Object.assign({
    className: fe({
      [`${E}-${a}`]: a,
      [`${E}-disabled`]: s,
      [`${E}-ellipsis`]: ae,
      [`${E}-ellipsis-single-line`]: S,
      [`${E}-ellipsis-multiple-line`]: $
    }, o),
    prefixCls: n,
    style: Object.assign(Object.assign({}, i), {
      WebkitLineClamp: $ ? ce : void 0
    }),
    component: h,
    ref: Ln(ue, b, r),
    direction: p,
    onClick: D.includes("text") ? L : void 0,
    "aria-label": je == null ? void 0 : je.toString(),
    title: v
  }, m), /* @__PURE__ */ x.createElement(VO, {
    enableMeasure: ve && !Ce,
    text: c,
    rows: ce,
    width: j,
    onEllipsis: Je,
    expanded: _e,
    miscDeps: [P, _e, B, _, T, y]
  }, (Re, dt) => WO(e, /* @__PURE__ */ x.createElement(x.Fragment, null, Re.length > 0 && dt && !_e && je ? /* @__PURE__ */ x.createElement("span", {
    key: "show-content",
    "aria-hidden": !0
  }, Re) : Re, Ee(dt)))))));
});
var UO = function(e, r) {
  var t = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    r.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (t[n[o]] = e[n[o]]);
  return t;
};
const GO = /* @__PURE__ */ x.forwardRef((e, r) => {
  var {
    ellipsis: t,
    rel: n
  } = e, o = UO(e, ["ellipsis", "rel"]);
  if (process.env.NODE_ENV !== "production") {
    const a = Kt("Typography.Link");
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
}), XO = /* @__PURE__ */ x.forwardRef((e, r) => /* @__PURE__ */ x.createElement(ec, Object.assign({
  ref: r
}, e, {
  component: "div"
})));
var KO = function(e, r) {
  var t = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    r.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (t[n[o]] = e[n[o]]);
  return t;
};
const YO = (e, r) => {
  var {
    ellipsis: t
  } = e, n = KO(e, ["ellipsis"]);
  const o = x.useMemo(() => t && typeof t == "object" ? Ci(t, ["expandable", "rows"]) : t, [t]);
  if (process.env.NODE_ENV !== "production") {
    const i = Kt("Typography.Text");
    process.env.NODE_ENV !== "production" && i(typeof t != "object" || !t || !("expandable" in t) && !("rows" in t), "usage", "`ellipsis` do not support `expandable` or `rows` props.");
  }
  return /* @__PURE__ */ x.createElement(ec, Object.assign({
    ref: r
  }, n, {
    ellipsis: o,
    component: "span"
  }));
}, JO = /* @__PURE__ */ x.forwardRef(YO);
var QO = function(e, r) {
  var t = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    r.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (t[n[o]] = e[n[o]]);
  return t;
};
const K0 = [1, 2, 3, 4, 5], ZO = /* @__PURE__ */ x.forwardRef((e, r) => {
  const {
    level: t = 1
  } = e, n = QO(e, ["level"]);
  if (process.env.NODE_ENV !== "production") {
    const i = Kt("Typography.Title");
    process.env.NODE_ENV !== "production" && i(K0.includes(t), "usage", "Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version.");
  }
  const o = K0.includes(t) ? `h${t}` : "h1";
  return /* @__PURE__ */ x.createElement(ec, Object.assign({
    ref: r
  }, n, {
    component: o
  }));
}), $i = bd;
$i.Text = JO;
$i.Link = GO;
$i.Title = ZO;
$i.Paragraph = XO;
function xm(e, r) {
  return function() {
    return e.apply(r, arguments);
  };
}
const { toString: e3 } = Object.prototype, { getPrototypeOf: wd } = Object, { iterator: tc, toStringTag: gm } = Symbol, rc = /* @__PURE__ */ ((e) => (r) => {
  const t = e3.call(r);
  return e[t] || (e[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Nr = (e) => (e = e.toLowerCase(), (r) => rc(r) === e), nc = (e) => (r) => typeof r === e, { isArray: Po } = Array, yo = nc("undefined");
function Ti(e) {
  return e !== null && !yo(e) && e.constructor !== null && !yo(e.constructor) && nr(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const mm = Nr("ArrayBuffer");
function t3(e) {
  let r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(e) : r = e && e.buffer && mm(e.buffer), r;
}
const r3 = nc("string"), nr = nc("function"), vm = nc("number"), Pi = (e) => e !== null && typeof e == "object", n3 = (e) => e === !0 || e === !1, Aa = (e) => {
  if (rc(e) !== "object")
    return !1;
  const r = wd(e);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(gm in e) && !(tc in e);
}, o3 = (e) => {
  if (!Pi(e) || Ti(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, i3 = Nr("Date"), a3 = Nr("File"), s3 = Nr("Blob"), c3 = Nr("FileList"), l3 = (e) => Pi(e) && nr(e.pipe), u3 = (e) => {
  let r;
  return e && (typeof FormData == "function" && e instanceof FormData || nr(e.append) && ((r = rc(e)) === "formdata" || // detect form-data instance
  r === "object" && nr(e.toString) && e.toString() === "[object FormData]"));
}, d3 = Nr("URLSearchParams"), [f3, h3, p3, x3] = ["ReadableStream", "Request", "Response", "Headers"].map(Nr), g3 = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ai(e, r, { allOwnKeys: t = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, o;
  if (typeof e != "object" && (e = [e]), Po(e))
    for (n = 0, o = e.length; n < o; n++)
      r.call(null, e[n], n, e);
  else {
    if (Ti(e))
      return;
    const i = t ? Object.getOwnPropertyNames(e) : Object.keys(e), a = i.length;
    let s;
    for (n = 0; n < a; n++)
      s = i[n], r.call(null, e[s], s, e);
  }
}
function bm(e, r) {
  if (Ti(e))
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
const m3 = (e, r, t, { allOwnKeys: n } = {}) => (Ai(r, (o, i) => {
  t && nr(o) ? e[i] = xm(o, t) : e[i] = o;
}, { allOwnKeys: n }), e), v3 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), b3 = (e, r, t, n) => {
  e.prototype = Object.create(r.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: r.prototype
  }), t && Object.assign(e.prototype, t);
}, y3 = (e, r, t, n) => {
  let o, i, a;
  const s = {};
  if (r = r || {}, e == null) return r;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      a = o[i], (!n || n(a, e, r)) && !s[a] && (r[a] = e[a], s[a] = !0);
    e = t !== !1 && wd(e);
  } while (e && (!t || t(e, r)) && e !== Object.prototype);
  return r;
}, w3 = (e, r, t) => {
  e = String(e), (t === void 0 || t > e.length) && (t = e.length), t -= r.length;
  const n = e.indexOf(r, t);
  return n !== -1 && n === t;
}, S3 = (e) => {
  if (!e) return null;
  if (Po(e)) return e;
  let r = e.length;
  if (!vm(r)) return null;
  const t = new Array(r);
  for (; r-- > 0; )
    t[r] = e[r];
  return t;
}, C3 = /* @__PURE__ */ ((e) => (r) => e && r instanceof e)(typeof Uint8Array < "u" && wd(Uint8Array)), _3 = (e, r) => {
  const n = (e && e[tc]).call(e);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const i = o.value;
    r.call(e, i[0], i[1]);
  }
}, E3 = (e, r) => {
  let t;
  const n = [];
  for (; (t = e.exec(r)) !== null; )
    n.push(t);
  return n;
}, O3 = Nr("HTMLFormElement"), R3 = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(t, n, o) {
    return n.toUpperCase() + o;
  }
), Y0 = (({ hasOwnProperty: e }) => (r, t) => e.call(r, t))(Object.prototype), $3 = Nr("RegExp"), wm = (e, r) => {
  const t = Object.getOwnPropertyDescriptors(e), n = {};
  Ai(t, (o, i) => {
    let a;
    (a = r(o, i, e)) !== !1 && (n[i] = a || o);
  }), Object.defineProperties(e, n);
}, T3 = (e) => {
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
}, P3 = (e, r) => {
  const t = {}, n = (o) => {
    o.forEach((i) => {
      t[i] = !0;
    });
  };
  return Po(e) ? n(e) : n(String(e).split(r)), t;
}, A3 = () => {
}, N3 = (e, r) => e != null && Number.isFinite(e = +e) ? e : r;
function I3(e) {
  return !!(e && nr(e.append) && e[gm] === "FormData" && e[tc]);
}
const j3 = (e) => {
  const r = new Array(10), t = (n, o) => {
    if (Pi(n)) {
      if (r.indexOf(n) >= 0)
        return;
      if (Ti(n))
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
}, M3 = Nr("AsyncFunction"), F3 = (e) => e && (Pi(e) || nr(e)) && nr(e.then) && nr(e.catch), Sm = ((e, r) => e ? setImmediate : r ? ((t, n) => (On.addEventListener("message", ({ source: o, data: i }) => {
  o === On && i === t && n.length && n.shift()();
}, !1), (o) => {
  n.push(o), On.postMessage(t, "*");
}))(`axios@${Math.random()}`, []) : (t) => setTimeout(t))(
  typeof setImmediate == "function",
  nr(On.postMessage)
), L3 = typeof queueMicrotask < "u" ? queueMicrotask.bind(On) : typeof process < "u" && process.nextTick || Sm, k3 = (e) => e != null && nr(e[tc]), X = {
  isArray: Po,
  isArrayBuffer: mm,
  isBuffer: Ti,
  isFormData: u3,
  isArrayBufferView: t3,
  isString: r3,
  isNumber: vm,
  isBoolean: n3,
  isObject: Pi,
  isPlainObject: Aa,
  isEmptyObject: o3,
  isReadableStream: f3,
  isRequest: h3,
  isResponse: p3,
  isHeaders: x3,
  isUndefined: yo,
  isDate: i3,
  isFile: a3,
  isBlob: s3,
  isRegExp: $3,
  isFunction: nr,
  isStream: l3,
  isURLSearchParams: d3,
  isTypedArray: C3,
  isFileList: c3,
  forEach: Ai,
  merge: Tu,
  extend: m3,
  trim: g3,
  stripBOM: v3,
  inherits: b3,
  toFlatObject: y3,
  kindOf: rc,
  kindOfTest: Nr,
  endsWith: w3,
  toArray: S3,
  forEachEntry: _3,
  matchAll: E3,
  isHTMLForm: O3,
  hasOwnProperty: Y0,
  hasOwnProp: Y0,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: wm,
  freezeMethods: T3,
  toObjectSet: P3,
  toCamelCase: R3,
  noop: A3,
  toFiniteNumber: N3,
  findKey: bm,
  global: On,
  isContextDefined: ym,
  isSpecCompliantForm: I3,
  toJSONObject: j3,
  isAsyncFn: M3,
  isThenable: F3,
  setImmediate: Sm,
  asap: L3,
  isIterable: k3
};
function He(e, r, t, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", r && (this.code = r), t && (this.config = t), n && (this.request = n), o && (this.response = o, this.status = o.status ? o.status : null);
}
X.inherits(He, Error, {
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
      config: X.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Cm = He.prototype, _m = {};
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
  _m[e] = { value: e };
});
Object.defineProperties(He, _m);
Object.defineProperty(Cm, "isAxiosError", { value: !0 });
He.from = (e, r, t, n, o, i) => {
  const a = Object.create(Cm);
  X.toFlatObject(e, a, function(u) {
    return u !== Error.prototype;
  }, (l) => l !== "isAxiosError");
  const s = e && e.message ? e.message : "Error", c = r == null && e ? e.code : r;
  return He.call(a, s, c, t, n, o), e && a.cause == null && Object.defineProperty(a, "cause", { value: e, configurable: !0 }), a.name = e && e.name || "Error", i && Object.assign(a, i), a;
};
const D3 = null;
function Pu(e) {
  return X.isPlainObject(e) || X.isArray(e);
}
function Em(e) {
  return X.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function J0(e, r, t) {
  return e ? e.concat(r).map(function(o, i) {
    return o = Em(o), !t && i ? "[" + o + "]" : o;
  }).join(t ? "." : "") : r;
}
function z3(e) {
  return X.isArray(e) && !e.some(Pu);
}
const B3 = X.toFlatObject(X, {}, null, function(r) {
  return /^is[A-Z]/.test(r);
});
function oc(e, r, t) {
  if (!X.isObject(e))
    throw new TypeError("target must be an object");
  r = r || new FormData(), t = X.toFlatObject(t, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, p) {
    return !X.isUndefined(p[g]);
  });
  const n = t.metaTokens, o = t.visitor || u, i = t.dots, a = t.indexes, c = (t.Blob || typeof Blob < "u" && Blob) && X.isSpecCompliantForm(r);
  if (!X.isFunction(o))
    throw new TypeError("visitor must be a function");
  function l(f) {
    if (f === null) return "";
    if (X.isDate(f))
      return f.toISOString();
    if (X.isBoolean(f))
      return f.toString();
    if (!c && X.isBlob(f))
      throw new He("Blob is not supported. Use a Buffer instead.");
    return X.isArrayBuffer(f) || X.isTypedArray(f) ? c && typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
  }
  function u(f, g, p) {
    let y = f;
    if (f && !p && typeof f == "object") {
      if (X.endsWith(g, "{}"))
        g = n ? g : g.slice(0, -2), f = JSON.stringify(f);
      else if (X.isArray(f) && z3(f) || (X.isFileList(f) || X.endsWith(g, "[]")) && (y = X.toArray(f)))
        return g = Em(g), y.forEach(function(C, E) {
          !(X.isUndefined(C) || C === null) && r.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? J0([g], E, i) : a === null ? g : g + "[]",
            l(C)
          );
        }), !1;
    }
    return Pu(f) ? !0 : (r.append(J0(p, g, i), l(f)), !1);
  }
  const d = [], h = Object.assign(B3, {
    defaultVisitor: u,
    convertValue: l,
    isVisitable: Pu
  });
  function v(f, g) {
    if (!X.isUndefined(f)) {
      if (d.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      d.push(f), X.forEach(f, function(y, b) {
        (!(X.isUndefined(y) || y === null) && o.call(
          r,
          y,
          X.isString(b) ? b.trim() : b,
          g,
          h
        )) === !0 && v(y, g ? g.concat(b) : [b]);
      }), d.pop();
    }
  }
  if (!X.isObject(e))
    throw new TypeError("data must be an object");
  return v(e), r;
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
function Sd(e, r) {
  this._pairs = [], e && oc(e, this, r);
}
const Om = Sd.prototype;
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
function V3(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Rm(e, r, t) {
  if (!r)
    return e;
  const n = t && t.encode || V3;
  X.isFunction(t) && (t = {
    serialize: t
  });
  const o = t && t.serialize;
  let i;
  if (o ? i = o(r, t) : i = X.isURLSearchParams(r) ? r.toString() : new Sd(r, t).toString(n), i) {
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
    X.forEach(this.handlers, function(n) {
      n !== null && r(n);
    });
  }
}
const $m = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, H3 = typeof URLSearchParams < "u" ? URLSearchParams : Sd, W3 = typeof FormData < "u" ? FormData : null, q3 = typeof Blob < "u" ? Blob : null, U3 = {
  isBrowser: !0,
  classes: {
    URLSearchParams: H3,
    FormData: W3,
    Blob: q3
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Cd = typeof window < "u" && typeof document < "u", Au = typeof navigator == "object" && navigator || void 0, G3 = Cd && (!Au || ["ReactNative", "NativeScript", "NS"].indexOf(Au.product) < 0), X3 = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", K3 = Cd && window.location.href || "http://localhost", Y3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Cd,
  hasStandardBrowserEnv: G3,
  hasStandardBrowserWebWorkerEnv: X3,
  navigator: Au,
  origin: K3
}, Symbol.toStringTag, { value: "Module" })), Gt = {
  ...Y3,
  ...U3
};
function J3(e, r) {
  return oc(e, new Gt.classes.URLSearchParams(), {
    visitor: function(t, n, o, i) {
      return Gt.isNode && X.isBuffer(t) ? (this.append(n, t.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    },
    ...r
  });
}
function Q3(e) {
  return X.matchAll(/\w+|\[(\w*)]/g, e).map((r) => r[0] === "[]" ? "" : r[1] || r[0]);
}
function Z3(e) {
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
    return a = !a && X.isArray(o) ? o.length : a, c ? (X.hasOwnProp(o, a) ? o[a] = [o[a], n] : o[a] = n, !s) : ((!o[a] || !X.isObject(o[a])) && (o[a] = []), r(t, n, o[a], i) && X.isArray(o[a]) && (o[a] = Z3(o[a])), !s);
  }
  if (X.isFormData(e) && X.isFunction(e.entries)) {
    const t = {};
    return X.forEachEntry(e, (n, o) => {
      r(Q3(n), o, t, 0);
    }), t;
  }
  return null;
}
function e6(e, r, t) {
  if (X.isString(e))
    try {
      return (r || JSON.parse)(e), X.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (t || JSON.stringify)(e);
}
const Ni = {
  transitional: $m,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(r, t) {
    const n = t.getContentType() || "", o = n.indexOf("application/json") > -1, i = X.isObject(r);
    if (i && X.isHTMLForm(r) && (r = new FormData(r)), X.isFormData(r))
      return o ? JSON.stringify(Tm(r)) : r;
    if (X.isArrayBuffer(r) || X.isBuffer(r) || X.isStream(r) || X.isFile(r) || X.isBlob(r) || X.isReadableStream(r))
      return r;
    if (X.isArrayBufferView(r))
      return r.buffer;
    if (X.isURLSearchParams(r))
      return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), r.toString();
    let s;
    if (i) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return J3(r, this.formSerializer).toString();
      if ((s = X.isFileList(r)) || n.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return oc(
          s ? { "files[]": r } : r,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return i || o ? (t.setContentType("application/json", !1), e6(r)) : r;
  }],
  transformResponse: [function(r) {
    const t = this.transitional || Ni.transitional, n = t && t.forcedJSONParsing, o = this.responseType === "json";
    if (X.isResponse(r) || X.isReadableStream(r))
      return r;
    if (r && X.isString(r) && (n && !this.responseType || o)) {
      const a = !(t && t.silentJSONParsing) && o;
      try {
        return JSON.parse(r, this.parseReviver);
      } catch (s) {
        if (a)
          throw s.name === "SyntaxError" ? He.from(s, He.ERR_BAD_RESPONSE, this, null, this.response) : s;
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
X.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Ni.headers[e] = {};
});
const t6 = X.toObjectSet([
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
]), r6 = (e) => {
  const r = {};
  let t, n, o;
  return e && e.split(`
`).forEach(function(a) {
    o = a.indexOf(":"), t = a.substring(0, o).trim().toLowerCase(), n = a.substring(o + 1).trim(), !(!t || r[t] && t6[t]) && (t === "set-cookie" ? r[t] ? r[t].push(n) : r[t] = [n] : r[t] = r[t] ? r[t] + ", " + n : n);
  }), r;
}, eh = Symbol("internals");
function qo(e) {
  return e && String(e).trim().toLowerCase();
}
function Na(e) {
  return e === !1 || e == null ? e : X.isArray(e) ? e.map(Na) : String(e);
}
function n6(e) {
  const r = /* @__PURE__ */ Object.create(null), t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = t.exec(e); )
    r[n[1]] = n[2];
  return r;
}
const o6 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ul(e, r, t, n, o) {
  if (X.isFunction(n))
    return n.call(this, r, t);
  if (o && (r = t), !!X.isString(r)) {
    if (X.isString(n))
      return r.indexOf(n) !== -1;
    if (X.isRegExp(n))
      return n.test(r);
  }
}
function i6(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (r, t, n) => t.toUpperCase() + n);
}
function a6(e, r) {
  const t = X.toCamelCase(" " + r);
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
      const d = X.findKey(o, u);
      (!d || o[d] === void 0 || l === !0 || l === void 0 && o[d] !== !1) && (o[d || c] = Na(s));
    }
    const a = (s, c) => X.forEach(s, (l, u) => i(l, u, c));
    if (X.isPlainObject(r) || r instanceof this.constructor)
      a(r, t);
    else if (X.isString(r) && (r = r.trim()) && !o6(r))
      a(r6(r), t);
    else if (X.isObject(r) && X.isIterable(r)) {
      let s = {}, c, l;
      for (const u of r) {
        if (!X.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        s[l = u[0]] = (c = s[l]) ? X.isArray(c) ? [...c, u[1]] : [c, u[1]] : u[1];
      }
      a(s, t);
    } else
      r != null && i(t, r, n);
    return this;
  }
  get(r, t) {
    if (r = qo(r), r) {
      const n = X.findKey(this, r);
      if (n) {
        const o = this[n];
        if (!t)
          return o;
        if (t === !0)
          return n6(o);
        if (X.isFunction(t))
          return t.call(this, o, n);
        if (X.isRegExp(t))
          return t.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(r, t) {
    if (r = qo(r), r) {
      const n = X.findKey(this, r);
      return !!(n && this[n] !== void 0 && (!t || ul(this, this[n], n, t)));
    }
    return !1;
  }
  delete(r, t) {
    const n = this;
    let o = !1;
    function i(a) {
      if (a = qo(a), a) {
        const s = X.findKey(n, a);
        s && (!t || ul(n, n[s], s, t)) && (delete n[s], o = !0);
      }
    }
    return X.isArray(r) ? r.forEach(i) : i(r), o;
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
    return X.forEach(this, (o, i) => {
      const a = X.findKey(n, i);
      if (a) {
        t[a] = Na(o), delete t[i];
        return;
      }
      const s = r ? i6(i) : String(i).trim();
      s !== i && delete t[i], t[s] = Na(o), n[s] = !0;
    }), this;
  }
  concat(...r) {
    return this.constructor.concat(this, ...r);
  }
  toJSON(r) {
    const t = /* @__PURE__ */ Object.create(null);
    return X.forEach(this, (n, o) => {
      n != null && n !== !1 && (t[o] = r && X.isArray(n) ? n.join(", ") : n);
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
      n[s] || (a6(o, a), n[s] = !0);
    }
    return X.isArray(r) ? r.forEach(i) : i(r), this;
  }
};
or.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
X.reduceDescriptors(or.prototype, ({ value: e }, r) => {
  let t = r[0].toUpperCase() + r.slice(1);
  return {
    get: () => e,
    set(n) {
      this[t] = n;
    }
  };
});
X.freezeMethods(or);
function dl(e, r) {
  const t = this || Ni, n = r || t, o = or.from(n.headers);
  let i = n.data;
  return X.forEach(e, function(s) {
    i = s.call(t, i, o.normalize(), r ? r.status : void 0);
  }), o.normalize(), i;
}
function Pm(e) {
  return !!(e && e.__CANCEL__);
}
function Ao(e, r, t) {
  He.call(this, e ?? "canceled", He.ERR_CANCELED, r, t), this.name = "CanceledError";
}
X.inherits(Ao, He, {
  __CANCEL__: !0
});
function Am(e, r, t) {
  const n = t.config.validateStatus;
  !t.status || !n || n(t.status) ? e(t) : r(new He(
    "Request failed with status code " + t.status,
    [He.ERR_BAD_REQUEST, He.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],
    t.config,
    t.request,
    t
  ));
}
function s6(e) {
  const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return r && r[1] || "";
}
function c6(e, r) {
  e = e || 10;
  const t = new Array(e), n = new Array(e);
  let o = 0, i = 0, a;
  return r = r !== void 0 ? r : 1e3, function(c) {
    const l = Date.now(), u = n[i];
    a || (a = l), t[o] = c, n[o] = l;
    let d = i, h = 0;
    for (; d !== o; )
      h += t[d++], d = d % e;
    if (o = (o + 1) % e, o === i && (i = (i + 1) % e), l - a < r)
      return;
    const v = u && l - u;
    return v ? Math.round(h * 1e3 / v) : void 0;
  };
}
function l6(e, r) {
  let t = 0, n = 1e3 / r, o, i;
  const a = (l, u = Date.now()) => {
    t = u, o = null, i && (clearTimeout(i), i = null), e(...l);
  };
  return [(...l) => {
    const u = Date.now(), d = u - t;
    d >= n ? a(l, u) : (o = l, i || (i = setTimeout(() => {
      i = null, a(o);
    }, n - d)));
  }, () => o && a(o)];
}
const Za = (e, r, t = 3) => {
  let n = 0;
  const o = c6(50, 250);
  return l6((i) => {
    const a = i.loaded, s = i.lengthComputable ? i.total : void 0, c = a - n, l = o(c), u = a <= s;
    n = a;
    const d = {
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
    e(d);
  }, t);
}, th = (e, r) => {
  const t = e != null;
  return [(n) => r[0]({
    lengthComputable: t,
    total: e,
    loaded: n
  }), r[1]];
}, rh = (e) => (...r) => X.asap(() => e(...r)), u6 = Gt.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, r) => (t) => (t = new URL(t, Gt.origin), e.protocol === t.protocol && e.host === t.host && (r || e.port === t.port)))(
  new URL(Gt.origin),
  Gt.navigator && /(msie|trident)/i.test(Gt.navigator.userAgent)
) : () => !0, d6 = Gt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, r, t, n, o, i, a) {
      if (typeof document > "u") return;
      const s = [`${e}=${encodeURIComponent(r)}`];
      X.isNumber(t) && s.push(`expires=${new Date(t).toUTCString()}`), X.isString(n) && s.push(`path=${n}`), X.isString(o) && s.push(`domain=${o}`), i === !0 && s.push("secure"), X.isString(a) && s.push(`SameSite=${a}`), document.cookie = s.join("; ");
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
function f6(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function h6(e, r) {
  return r ? e.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "") : e;
}
function Nm(e, r, t) {
  let n = !f6(r);
  return e && (n || t == !1) ? h6(e, r) : r;
}
const nh = (e) => e instanceof or ? { ...e } : e;
function Fn(e, r) {
  r = r || {};
  const t = {};
  function n(l, u, d, h) {
    return X.isPlainObject(l) && X.isPlainObject(u) ? X.merge.call({ caseless: h }, l, u) : X.isPlainObject(u) ? X.merge({}, u) : X.isArray(u) ? u.slice() : u;
  }
  function o(l, u, d, h) {
    if (X.isUndefined(u)) {
      if (!X.isUndefined(l))
        return n(void 0, l, d, h);
    } else return n(l, u, d, h);
  }
  function i(l, u) {
    if (!X.isUndefined(u))
      return n(void 0, u);
  }
  function a(l, u) {
    if (X.isUndefined(u)) {
      if (!X.isUndefined(l))
        return n(void 0, l);
    } else return n(void 0, u);
  }
  function s(l, u, d) {
    if (d in r)
      return n(l, u);
    if (d in e)
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
    headers: (l, u, d) => o(nh(l), nh(u), d, !0)
  };
  return X.forEach(Object.keys({ ...e, ...r }), function(u) {
    const d = c[u] || o, h = d(e[u], r[u], u);
    X.isUndefined(h) && d !== s || (t[u] = h);
  }), t;
}
const Im = (e) => {
  const r = Fn({}, e);
  let { data: t, withXSRFToken: n, xsrfHeaderName: o, xsrfCookieName: i, headers: a, auth: s } = r;
  if (r.headers = a = or.from(a), r.url = Rm(Nm(r.baseURL, r.url, r.allowAbsoluteUrls), e.params, e.paramsSerializer), s && a.set(
    "Authorization",
    "Basic " + btoa((s.username || "") + ":" + (s.password ? unescape(encodeURIComponent(s.password)) : ""))
  ), X.isFormData(t)) {
    if (Gt.hasStandardBrowserEnv || Gt.hasStandardBrowserWebWorkerEnv)
      a.setContentType(void 0);
    else if (X.isFunction(t.getHeaders)) {
      const c = t.getHeaders(), l = ["content-type", "content-length"];
      Object.entries(c).forEach(([u, d]) => {
        l.includes(u.toLowerCase()) && a.set(u, d);
      });
    }
  }
  if (Gt.hasStandardBrowserEnv && (n && X.isFunction(n) && (n = n(r)), n || n !== !1 && u6(r.url))) {
    const c = o && i && d6.read(i);
    c && a.set(o, c);
  }
  return r;
}, p6 = typeof XMLHttpRequest < "u", x6 = p6 && function(e) {
  return new Promise(function(t, n) {
    const o = Im(e);
    let i = o.data;
    const a = or.from(o.headers).normalize();
    let { responseType: s, onUploadProgress: c, onDownloadProgress: l } = o, u, d, h, v, f;
    function g() {
      v && v(), f && f(), o.cancelToken && o.cancelToken.unsubscribe(u), o.signal && o.signal.removeEventListener("abort", u);
    }
    let p = new XMLHttpRequest();
    p.open(o.method.toUpperCase(), o.url, !0), p.timeout = o.timeout;
    function y() {
      if (!p)
        return;
      const C = or.from(
        "getAllResponseHeaders" in p && p.getAllResponseHeaders()
      ), m = {
        data: !s || s === "text" || s === "json" ? p.responseText : p.response,
        status: p.status,
        statusText: p.statusText,
        headers: C,
        config: e,
        request: p
      };
      Am(function(w) {
        t(w), g();
      }, function(w) {
        n(w), g();
      }, m), p = null;
    }
    "onloadend" in p ? p.onloadend = y : p.onreadystatechange = function() {
      !p || p.readyState !== 4 || p.status === 0 && !(p.responseURL && p.responseURL.indexOf("file:") === 0) || setTimeout(y);
    }, p.onabort = function() {
      p && (n(new He("Request aborted", He.ECONNABORTED, e, p)), p = null);
    }, p.onerror = function(E) {
      const m = E && E.message ? E.message : "Network Error", _ = new He(m, He.ERR_NETWORK, e, p);
      _.event = E || null, n(_), p = null;
    }, p.ontimeout = function() {
      let E = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const m = o.transitional || $m;
      o.timeoutErrorMessage && (E = o.timeoutErrorMessage), n(new He(
        E,
        m.clarifyTimeoutError ? He.ETIMEDOUT : He.ECONNABORTED,
        e,
        p
      )), p = null;
    }, i === void 0 && a.setContentType(null), "setRequestHeader" in p && X.forEach(a.toJSON(), function(E, m) {
      p.setRequestHeader(m, E);
    }), X.isUndefined(o.withCredentials) || (p.withCredentials = !!o.withCredentials), s && s !== "json" && (p.responseType = o.responseType), l && ([h, f] = Za(l, !0), p.addEventListener("progress", h)), c && p.upload && ([d, v] = Za(c), p.upload.addEventListener("progress", d), p.upload.addEventListener("loadend", v)), (o.cancelToken || o.signal) && (u = (C) => {
      p && (n(!C || C.type ? new Ao(null, e, p) : C), p.abort(), p = null);
    }, o.cancelToken && o.cancelToken.subscribe(u), o.signal && (o.signal.aborted ? u() : o.signal.addEventListener("abort", u)));
    const b = s6(o.url);
    if (b && Gt.protocols.indexOf(b) === -1) {
      n(new He("Unsupported protocol " + b + ":", He.ERR_BAD_REQUEST, e));
      return;
    }
    p.send(i || null);
  });
}, g6 = (e, r) => {
  const { length: t } = e = e ? e.filter(Boolean) : [];
  if (r || t) {
    let n = new AbortController(), o;
    const i = function(l) {
      if (!o) {
        o = !0, s();
        const u = l instanceof Error ? l : this.reason;
        n.abort(u instanceof He ? u : new Ao(u instanceof Error ? u.message : u));
      }
    };
    let a = r && setTimeout(() => {
      a = null, i(new He(`timeout ${r} of ms exceeded`, He.ETIMEDOUT));
    }, r);
    const s = () => {
      e && (a && clearTimeout(a), a = null, e.forEach((l) => {
        l.unsubscribe ? l.unsubscribe(i) : l.removeEventListener("abort", i);
      }), e = null);
    };
    e.forEach((l) => l.addEventListener("abort", i));
    const { signal: c } = n;
    return c.unsubscribe = () => X.asap(s), c;
  }
}, m6 = function* (e, r) {
  let t = e.byteLength;
  if (t < r) {
    yield e;
    return;
  }
  let n = 0, o;
  for (; n < t; )
    o = n + r, yield e.slice(n, o), n = o;
}, v6 = async function* (e, r) {
  for await (const t of b6(e))
    yield* m6(t, r);
}, b6 = async function* (e) {
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
  const o = v6(e, r);
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
        let d = u.byteLength;
        if (t) {
          let h = i += d;
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
}, ih = 64 * 1024, { isFunction: fa } = X, y6 = (({ Request: e, Response: r }) => ({
  Request: e,
  Response: r
}))(X.global), {
  ReadableStream: ah,
  TextEncoder: sh
} = X.global, ch = (e, ...r) => {
  try {
    return !!e(...r);
  } catch {
    return !1;
  }
}, w6 = (e) => {
  e = X.merge.call({
    skipUndefined: !0
  }, y6, e);
  const { fetch: r, Request: t, Response: n } = e, o = r ? fa(r) : typeof fetch == "function", i = fa(t), a = fa(n);
  if (!o)
    return !1;
  const s = o && fa(ah), c = o && (typeof sh == "function" ? /* @__PURE__ */ ((f) => (g) => f.encode(g))(new sh()) : async (f) => new Uint8Array(await new t(f).arrayBuffer())), l = i && s && ch(() => {
    let f = !1;
    const g = new t(Gt.origin, {
      body: new ah(),
      method: "POST",
      get duplex() {
        return f = !0, "half";
      }
    }).headers.has("Content-Type");
    return f && !g;
  }), u = a && s && ch(() => X.isReadableStream(new n("").body)), d = {
    stream: u && ((f) => f.body)
  };
  o && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((f) => {
    !d[f] && (d[f] = (g, p) => {
      let y = g && g[f];
      if (y)
        return y.call(g);
      throw new He(`Response type '${f}' is not supported`, He.ERR_NOT_SUPPORT, p);
    });
  });
  const h = async (f) => {
    if (f == null)
      return 0;
    if (X.isBlob(f))
      return f.size;
    if (X.isSpecCompliantForm(f))
      return (await new t(Gt.origin, {
        method: "POST",
        body: f
      }).arrayBuffer()).byteLength;
    if (X.isArrayBufferView(f) || X.isArrayBuffer(f))
      return f.byteLength;
    if (X.isURLSearchParams(f) && (f = f + ""), X.isString(f))
      return (await c(f)).byteLength;
  }, v = async (f, g) => {
    const p = X.toFiniteNumber(f.getContentLength());
    return p ?? h(g);
  };
  return async (f) => {
    let {
      url: g,
      method: p,
      data: y,
      signal: b,
      cancelToken: C,
      timeout: E,
      onDownloadProgress: m,
      onUploadProgress: _,
      responseType: w,
      headers: A,
      withCredentials: N = "same-origin",
      fetchOptions: D
    } = Im(f), V = r || fetch;
    w = w ? (w + "").toLowerCase() : "text";
    let U = g6([b, C && C.toAbortSignal()], E), L = null;
    const z = U && U.unsubscribe && (() => {
      U.unsubscribe();
    });
    let H;
    try {
      if (_ && l && p !== "get" && p !== "head" && (H = await v(A, y)) !== 0) {
        let Y = new t(g, {
          method: "POST",
          body: y,
          duplex: "half"
        }), K;
        if (X.isFormData(y) && (K = Y.headers.get("content-type")) && A.setContentType(K), Y.body) {
          const [Z, G] = th(
            H,
            Za(rh(_))
          );
          y = oh(Y.body, ih, Z, G);
        }
      }
      X.isString(N) || (N = N ? "include" : "omit");
      const T = i && "credentials" in t.prototype, I = {
        ...D,
        signal: U,
        method: p.toUpperCase(),
        headers: A.normalize().toJSON(),
        body: y,
        duplex: "half",
        credentials: T ? N : void 0
      };
      L = i && new t(g, I);
      let P = await (i ? V(L, D) : V(g, I));
      const B = u && (w === "stream" || w === "response");
      if (u && (m || B && z)) {
        const Y = {};
        ["status", "statusText", "headers"].forEach((te) => {
          Y[te] = P[te];
        });
        const K = X.toFiniteNumber(P.headers.get("content-length")), [Z, G] = m && th(
          K,
          Za(rh(m), !0)
        ) || [];
        P = new n(
          oh(P.body, ih, Z, () => {
            G && G(), z && z();
          }),
          Y
        );
      }
      w = w || "text";
      let W = await d[X.findKey(d, w) || "text"](P, f);
      return !B && z && z(), await new Promise((Y, K) => {
        Am(Y, K, {
          data: W,
          headers: or.from(P.headers),
          status: P.status,
          statusText: P.statusText,
          config: f,
          request: L
        });
      });
    } catch (T) {
      throw z && z(), T && T.name === "TypeError" && /Load failed|fetch/i.test(T.message) ? Object.assign(
        new He("Network Error", He.ERR_NETWORK, f, L),
        {
          cause: T.cause || T
        }
      ) : He.from(T, T && T.code, f, L);
    }
  };
}, S6 = /* @__PURE__ */ new Map(), jm = (e) => {
  let r = e && e.env || {};
  const { fetch: t, Request: n, Response: o } = r, i = [
    n,
    o,
    t
  ];
  let a = i.length, s = a, c, l, u = S6;
  for (; s--; )
    c = i[s], l = u.get(c), l === void 0 && u.set(c, l = s ? /* @__PURE__ */ new Map() : w6(r)), u = l;
  return l;
};
jm();
const _d = {
  http: D3,
  xhr: x6,
  fetch: {
    get: jm
  }
};
X.forEach(_d, (e, r) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: r });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: r });
  }
});
const lh = (e) => `- ${e}`, C6 = (e) => X.isFunction(e) || e === null || e === !1;
function _6(e, r) {
  e = X.isArray(e) ? e : [e];
  const { length: t } = e;
  let n, o;
  const i = {};
  for (let a = 0; a < t; a++) {
    n = e[a];
    let s;
    if (o = n, !C6(n) && (o = _d[(s = String(n)).toLowerCase()], o === void 0))
      throw new He(`Unknown adapter '${s}'`);
    if (o && (X.isFunction(o) || (o = o.get(r))))
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
    throw new He(
      "There is no suitable adapter to dispatch the request " + s,
      "ERR_NOT_SUPPORT"
    );
  }
  return o;
}
const Mm = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: _6,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: _d
};
function fl(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Ao(null, e);
}
function uh(e) {
  return fl(e), e.headers = or.from(e.headers), e.data = dl.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Mm.getAdapter(e.adapter || Ni.adapter, e)(e).then(function(n) {
    return fl(e), n.data = dl.call(
      e,
      e.transformResponse,
      n
    ), n.headers = or.from(n.headers), n;
  }, function(n) {
    return Pm(n) || (fl(e), n && n.response && (n.response.data = dl.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = or.from(n.response.headers))), Promise.reject(n);
  });
}
const Fm = "1.13.2", ic = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, r) => {
  ic[e] = function(n) {
    return typeof n === e || "a" + (r < 1 ? "n " : " ") + e;
  };
});
const dh = {};
ic.transitional = function(r, t, n) {
  function o(i, a) {
    return "[Axios v" + Fm + "] Transitional option '" + i + "'" + a + (n ? ". " + n : "");
  }
  return (i, a, s) => {
    if (r === !1)
      throw new He(
        o(a, " has been removed" + (t ? " in " + t : "")),
        He.ERR_DEPRECATED
      );
    return t && !dh[a] && (dh[a] = !0, console.warn(
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
function E6(e, r, t) {
  if (typeof e != "object")
    throw new He("options must be an object", He.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let o = n.length;
  for (; o-- > 0; ) {
    const i = n[o], a = r[i];
    if (a) {
      const s = e[i], c = s === void 0 || a(s, i, e);
      if (c !== !0)
        throw new He("option " + i + " must be " + c, He.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0)
      throw new He("Unknown option " + i, He.ERR_BAD_OPTION);
  }
}
const Ia = {
  assertOptions: E6,
  validators: ic
}, Fr = Ia.validators;
let An = class {
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
    n !== void 0 && Ia.assertOptions(n, {
      silentJSONParsing: Fr.transitional(Fr.boolean),
      forcedJSONParsing: Fr.transitional(Fr.boolean),
      clarifyTimeoutError: Fr.transitional(Fr.boolean)
    }, !1), o != null && (X.isFunction(o) ? t.paramsSerializer = {
      serialize: o
    } : Ia.assertOptions(o, {
      encode: Fr.function,
      serialize: Fr.function
    }, !0)), t.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : t.allowAbsoluteUrls = !0), Ia.assertOptions(t, {
      baseUrl: Fr.spelling("baseURL"),
      withXsrfToken: Fr.spelling("withXSRFToken")
    }, !0), t.method = (t.method || this.defaults.method || "get").toLowerCase();
    let a = i && X.merge(
      i.common,
      i[t.method]
    );
    i && X.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (f) => {
        delete i[f];
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
    let u, d = 0, h;
    if (!c) {
      const f = [uh.bind(this), void 0];
      for (f.unshift(...s), f.push(...l), h = f.length, u = Promise.resolve(t); d < h; )
        u = u.then(f[d++], f[d++]);
      return u;
    }
    h = s.length;
    let v = t;
    for (; d < h; ) {
      const f = s[d++], g = s[d++];
      try {
        v = f(v);
      } catch (p) {
        g.call(this, p);
        break;
      }
    }
    try {
      u = uh.call(this, v);
    } catch (f) {
      return Promise.reject(f);
    }
    for (d = 0, h = l.length; d < h; )
      u = u.then(l[d++], l[d++]);
    return u;
  }
  getUri(r) {
    r = Fn(this.defaults, r);
    const t = Nm(r.baseURL, r.url, r.allowAbsoluteUrls);
    return Rm(t, r.params, r.paramsSerializer);
  }
};
X.forEach(["delete", "get", "head", "options"], function(r) {
  An.prototype[r] = function(t, n) {
    return this.request(Fn(n || {}, {
      method: r,
      url: t,
      data: (n || {}).data
    }));
  };
});
X.forEach(["post", "put", "patch"], function(r) {
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
  An.prototype[r] = t(), An.prototype[r + "Form"] = t(!0);
});
let O6 = class Lm {
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
      n.reason || (n.reason = new Ao(i, a, s), t(n.reason));
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
      token: new Lm(function(o) {
        r = o;
      }),
      cancel: r
    };
  }
};
function R6(e) {
  return function(t) {
    return e.apply(null, t);
  };
}
function $6(e) {
  return X.isObject(e) && e.isAxiosError === !0;
}
const Nu = {
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
Object.entries(Nu).forEach(([e, r]) => {
  Nu[r] = e;
});
function km(e) {
  const r = new An(e), t = xm(An.prototype.request, r);
  return X.extend(t, An.prototype, r, { allOwnKeys: !0 }), X.extend(t, r, null, { allOwnKeys: !0 }), t.create = function(o) {
    return km(Fn(e, o));
  }, t;
}
const Rt = km(Ni);
Rt.Axios = An;
Rt.CanceledError = Ao;
Rt.CancelToken = O6;
Rt.isCancel = Pm;
Rt.VERSION = Fm;
Rt.toFormData = oc;
Rt.AxiosError = He;
Rt.Cancel = Rt.CanceledError;
Rt.all = function(r) {
  return Promise.all(r);
};
Rt.spread = R6;
Rt.isAxiosError = $6;
Rt.mergeConfig = Fn;
Rt.AxiosHeaders = or;
Rt.formToJSON = (e) => Tm(X.isHTMLForm(e) ? new FormData(e) : e);
Rt.getAdapter = Mm.getAdapter;
Rt.HttpStatusCode = Nu;
Rt.default = Rt;
const {
  Axios: o4,
  AxiosError: i4,
  CanceledError: a4,
  isCancel: s4,
  CancelToken: c4,
  VERSION: l4,
  all: u4,
  Cancel: d4,
  isAxiosError: f4,
  spread: h4,
  toFormData: p4,
  AxiosHeaders: x4,
  HttpStatusCode: g4,
  formToJSON: m4,
  getAdapter: v4,
  mergeConfig: b4
} = Rt, Qr = ts;
(function(e, r) {
  const t = ts, n = e();
  for (; ; )
    try {
      if (parseInt(t(444)) / 1 + -parseInt(t(449)) / 2 * (parseInt(t(447)) / 3) + parseInt(t(428)) / 4 * (-parseInt(t(453)) / 5) + parseInt(t(441)) / 6 * (-parseInt(t(451)) / 7) + parseInt(t(442)) / 8 * (parseInt(t(427)) / 9) + parseInt(t(432)) / 10 + parseInt(t(430)) / 11 * (parseInt(t(425)) / 12) === r) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(es, 806512);
Qr(443) + Qr(426);
Rt[Qr(454)][Qr(438) + Qr(452)] = !0;
function es() {
  const e = ["PUT", "779961PEHgip", "tials", "85CbwpKj", "defaults", "5827488orjsvw", "ient", "126UrPdCl", "328124RADqkC", "POST", "22IOSwUp", "Content-Ty", "4140400LretZn", "DELETE", "data", "applicatio", "params", "n/json", "withCreden", "PATCH", "message", "60xyQwEN", "720488pZAfzL", "/api/v1/cl", "993949VGQjGs", "response", "error", "22662rHrVgL", "GET", "86kYzEsD"];
  return es = function() {
    return e;
  }, es();
}
const T6 = async (e) => {
  var t, n, o, i;
  const r = Qr;
  try {
    return (await Rt(e))[r(434)];
  } catch (a) {
    throw ((n = (t = a[r(445)]) == null ? void 0 : t[r(434)]) == null ? void 0 : n[r(440)]) || ((i = (o = a[r(445)]) == null ? void 0 : o[r(434)]) == null ? void 0 : i[r(446)]) || a[r(440)];
  }
}, P6 = {};
function ts(e, r) {
  const t = es();
  return ts = function(n, o) {
    return n = n - 425, t[n];
  }, ts(e, r);
}
P6[Qr(431) + "pe"] = Qr(435) + Qr(437);
const xt = ns;
(function(e, r) {
  const t = ns, n = e();
  for (; ; )
    try {
      if (-parseInt(t(377)) / 1 + -parseInt(t(367)) / 2 + -parseInt(t(388)) / 3 * (parseInt(t(376)) / 4) + -parseInt(t(391)) / 5 + -parseInt(t(375)) / 6 * (-parseInt(t(372)) / 7) + -parseInt(t(378)) / 8 + -parseInt(t(366)) / 9 * (-parseInt(t(379)) / 10) === r) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(rs, 372588);
function rs() {
  const e = ["touchstart", "enuHide", "4276027LTjytY", "assistiveM", "keyup", "6bwUdar", "179804FziDpz", "248532ZXKAwJ", "5804168GsWpQT", "21299830Xqvhei", "keyBoardEv", "mousemove", "shortcutEv", "fullscreen", "wheelEvent", "ACTION_UP", "moveEvent", "ACTION_MOV", "24vOUxsW", "keydown", "touchend", "3054215mqQava", "mousedown", "Event", "mouseup", "ent", "9rVrCrC", "847504klOUjN", "ACTION_DOW", "touchmove"];
  return rs = function() {
    return e;
  }, rs();
}
const wn = {};
wn[xt(381)] = xt(387) + "E", wn[xt(364)] = xt(385), wn[xt(392)] = xt(368) + "N", wn[xt(369)] = xt(387) + "E", wn[xt(390)] = xt(385), wn[xt(370)] = xt(368) + "N";
const $r = wn, Iu = {};
Iu[xt(374)] = xt(385), Iu[xt(389)] = xt(368) + "N";
const A6 = Iu, N6 = xt(386), I6 = xt(384), j6 = xt(380) + xt(365), Dm = xt(373) + xt(371), M6 = xt(382) + xt(365);
function ns(e, r) {
  const t = rs();
  return ns = function(n, o) {
    return n = n - 364, t[n];
  }, ns(e, r);
}
const F6 = xt(383) + xt(393);
(function(e, r) {
  const t = os, n = e();
  for (; ; )
    try {
      if (parseInt(t(403)) / 1 + parseInt(t(408)) / 2 + -parseInt(t(414)) / 3 * (-parseInt(t(364)) / 4) + -parseInt(t(343)) / 5 * (-parseInt(t(374)) / 6) + -parseInt(t(361)) / 7 * (-parseInt(t(371)) / 8) + -parseInt(t(369)) / 9 + -parseInt(t(331)) / 10 === r) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(is, 825663);
function os(e, r) {
  const t = is();
  return os = function(n, o) {
    return n = n - 326, t[n];
  }, os(e, r);
}
const L6 = ({ isMobile: e, assistive: r, onRemoteEvent: t, canvasContent: n, canvasRef: o }) => {
  const i = os, [a, s] = jt(!1), c = Pe(Date[i(363)]()), l = (v) => {
    const f = i;
    if (v[f(399) + f(346)](), !o[f(373)]) {
      if (f(354) !== f(385)) return;
      _0x48095f = _0x2760fb[f(341)] - _0x2fdbba[f(400)], _0x4a1a51 = _0x30d692[f(397)] - _0x4bebc4[f(384)];
    }
    const g = o[f(373)], p = g[f(417) + f(389) + "t"]();
    let y = $r[v[f(394)]];
    if (r[f(382)] == !0 || r[f(358)] == !0)
      if (f(395) === f(395)) {
        y == $r[f(365)] && t(Dm, {});
        return;
      } else _0x5c66e1[f(376)] = f(375) + f(337), _0x5a8bd8[f(338)] = 4096, _0x1fda84[f(421)] = 29;
    if (y == $r[f(328)] && s(!0), y != $r[f(328)] && a == !1) return;
    y == $r[f(365)] && s(!1);
    let b, C;
    if (v[f(394)][f(362)](f(353))) {
      const { touches: D, changedTouches: V } = v, U = D[0] ?? V[0];
      b = U[f(357)] - p[f(400)], C = U[f(401)] - p[f(384)];
    } else v[f(394)][f(362)](f(420)) && (b = v[f(341)] - p[f(400)], C = v[f(397)] - p[f(384)]);
    const E = 1, m = b < E || b > g[f(390)] - E, _ = C < E || C > g[f(407)] - E;
    (m || _) && (b = Math[f(327)](1, b), C = Math[f(327)](1, C), y = $r[f(365)]);
    const w = Date[f(363)](), A = w - c[f(373)];
    c[f(373)] = w;
    const N = {};
    N[f(419)] = f(360), N[f(383)] = y, N.x = b, N.y = C, N[f(390)] = p[f(390)], N[f(407)] = p[f(407)], N.ts = w, N[f(367)] = A, t(N6, N), g[f(355)]();
  }, u = (v) => {
    const f = i;
    if (v[f(399) + f(346)](), !o[f(373)]) return;
    const g = o[f(373)], p = Math[f(350)](v[f(372)]), y = g[f(417) + f(389) + "t"]();
    t(I6, { action: f(402), width: g[f(404) + "h"], height: g[f(418) + "ht"], x: v[f(341)] - y[f(400)], y: v[f(397)] - y[f(384)], delta: p, ts: Date[f(363)]() }), g[f(355)]();
  }, d = async (v) => {
    const f = i;
    if (v[f(399) + f(346)](), !o[f(373)])
      if (f(423) !== f(423)) _0x293cec[f(376)] = f(375) + f(337), _0x29b6c8[f(421)] = 20;
      else return;
    const g = o[f(373)], p = A6[v[f(394)]], y = v[f(421)][f(330) + "e"]();
    if (((m) => {
      const _ = f;
      if (_(387) === _(409)) _0x5efa5d(_0x88539c, _0x2b4b84);
      else
        return [_(412), _(347), _(329)][_(362)](m);
    })(y) == !0) return;
    const C = async () => {
      const m = f;
      if (m(388) !== m(335)) {
        const _ = {};
        _[m(419)] = m(342), _[m(383)] = p, _[m(376)] = m(381) + m(348), _[m(421)] = v[m(421)], _[m(340)] = 0, _[m(338)] = 0;
        const w = _;
        if (v[m(356)] == !0)
          if (m(411) !== m(366))
            y == "c" ? w[m(376)] = m(425) : y == "a" ? m(422) === m(422) ? (w[m(376)] = m(375) + m(337), w[m(338)] = 4096, w[m(421)] = 29) : [m(349), m(370), m(405)][m(410)]((A) => {
              const N = m;
              _0x274c83[N(386) + N(378)](A, _0x1a7839);
            }) : y == "v" && (w[m(376)] = m(339), w[m(421)] = await navigator[m(393)][m(332)]());
          else return;
        else
          y == m(424) ? (w[m(376)] = m(375) + m(337), w[m(421)] = 19) : y == m(368) ? (w[m(376)] = m(375) + m(337), w[m(421)] = 20) : y == m(391) ? m(415) !== m(345) ? (w[m(376)] = m(375) + m(337), w[m(421)] = 21) : _0x331680(!0) : y == m(416) ? (w[m(376)] = m(375) + m(337), w[m(421)] = 22) : y == m(426) ? m(413) === m(336) ? (_0x55b88b[m(376)] = m(375) + m(337), _0x42d5b9[m(421)] = 67) : (w[m(376)] = m(375) + m(337), w[m(421)] = 67) : y == m(380) ? (w[m(376)] = m(375) + m(337), w[m(421)] = 66) : y == m(344) && (w[m(376)] = m(375) + m(337), w[m(421)] = 61);
        if (w[m(394)] == m(381) + m(348) && v[m(351)] == !0) {
          if (m(406) !== m(406))
            return [m(412), m(347), m(329)][m(362)](_0x5b1c2f);
          w[m(421)] = w[m(421)][m(333) + "e"]();
        }
        return w;
      } else _0x4b9ece[m(376)] = m(375) + m(337), _0x30a68d[m(421)] = 61;
    }, E = await C();
    if (E)
      if (f(379) !== f(379)) {
        _0x5e65b6 == _0x3fcd48[f(365)] && _0xecb094(_0x78d0bf, {});
        return;
      } else t(j6, E);
    g[f(355)]();
  };
  ut(() => {
    const v = i, f = o[v(373)];
    if (f)
      if (v(359) !== v(377)) {
        const g = {};
        g[v(334)] = !1;
        const p = g;
        return e ? (f[v(326) + v(398)](v(349), l, p), f[v(326) + v(398)](v(370), l, p), f[v(326) + v(398)](v(405), l)) : (f[v(326) + v(398)](v(352), d), [v(396), v(328), v(365)][v(410)]((y) => {
          const b = v;
          b(392) !== b(392) ? _0x1fb074[b(386) + b(378)](_0x401e1a, _0x3468d2) : f[b(326) + b(398)](y, l);
        })), () => {
          const y = v;
          f && (e ? [y(349), y(370), y(405)][y(410)]((b) => {
            const C = y;
            f[C(386) + C(378)](b, l);
          }) : ([y(396), y(328), y(365)][y(410)]((b) => {
            const C = y;
            f[C(386) + C(378)](b, l);
          }), f[y(386) + y(378)](y(352), d)));
        };
      } else _0x1bf0bf[v(421)] = _0x402d73[v(421)][v(333) + "e"]();
  }, [e, l, u, d, o]);
  const h = { ref: o, ...n };
  return de.jsx(c1, h);
};
function is() {
  const e = ["backspace", "addEventLi", "max", "mousedown", "capslock", "toLowerCas", "13393730TccNeZ", "readText", "toUpperCas", "passive", "Thmqy", "Vslos", "ODE", "meta_state", "PASTE_TEXT", "repeat", "clientX", "keyEvent", "385445NvXuBH", "tab", "KvIbR", "ault", "shift", "EXT", "touchstart", "sign", "shiftKey", "keydown", "touch", "tPmgL", "focus", "ctrlKey", "pageX", "showMenu", "pbezX", "touchEvent", "7385oYWKjJ", "includes", "now", "684HstTQX", "mouseup", "aIABQ", "duration", "arrowdown", "10158597KAWKbK", "touchmove", "3080VLHSEy", "deltaY", "current", "12YoycVR", "KEYBOARD_C", "typeKey", "cHnHR", "tListener", "seqTN", "enter", "KEYBOARD_T", "isDown", "keyAction", "top", "PDMml", "removeEven", "xBNoa", "CJqIl", "gClientRec", "width", "arrowleft", "XMzDC", "clipboard", "type", "wXOpY", "mousemove", "clientY", "stener", "preventDef", "left", "pageY", "wheelEvent", "1421615mhmkoH", "offsetWidt", "touchend", "tUiVY", "height", "1741584KuPujd", "SofSX", "forEach", "ZQJva", "control", "rPbPl", "7737dyXlxO", "IGUYC", "arrowright", "getBoundin", "offsetHeig", "action", "mouse", "key", "LSxnK", "vCAGM", "arrowup", "COPY_TEXT"];
  return is = function() {
    return e;
  }, is();
}
const k6 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20data-name='Layer%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20250%20250'%3e%3cdefs%3e%3cstyle%3e%20.cls-1%20{%20fill:%20%23fff;%20}%20.cls-2%20{%20fill:%20%2391959e;%20}%20.cls-3%20{%20fill:%20%235b6468;%20}%20.cls-4%20{%20fill:%20%23202932;%20}%20%3c/style%3e%3c/defs%3e%3ccircle%20class='cls-4'%20cx='125'%20cy='125'%20r='125'/%3e%3ccircle%20class='cls-3'%20cx='125'%20cy='125'%20r='90.03'/%3e%3ccircle%20class='cls-2'%20cx='125'%20cy='125'%20r='75.17'/%3e%3ccircle%20class='cls-1'%20cx='125'%20cy='125'%20r='59.75'/%3e%3c/svg%3e", ac = as;
(function(e, r) {
  const t = as, n = e();
  for (; ; )
    try {
      if (-parseInt(t(375)) / 1 + parseInt(t(367)) / 2 * (-parseInt(t(373)) / 3) + parseInt(t(366)) / 4 * (-parseInt(t(377)) / 5) + -parseInt(t(372)) / 6 + -parseInt(t(378)) / 7 * (-parseInt(t(371)) / 8) + -parseInt(t(376)) / 9 + -parseInt(t(370)) / 10 * (-parseInt(t(368)) / 11) === r) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ss, 419176);
const D6 = qr[ac(374)]`
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
`, mr = qr[ac(374)]`
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
function as(e, r) {
  const t = ss();
  return as = function(n, o) {
    return n = n - 366, t[n];
  }, as(e, r);
}
const vr = qr.p`
  height: 5px;
  margin-top: 2px;
  font-size: 10px;
  font-weight: 600;
  text-align: center;
`, z6 = qr[ac(369)]`
  position: absolute;
  backdrop-filter: blur(46px);
  border-radius: 50%;
  z-index: 999;
  width: 12%;
  right: 15%;
  top: 5%;
`, B6 = qr[ac(374)]`
  user-select: none;
  transition: opacity 0.6s ease;
  z-index: 3;
  opacity: 0.3;
`;
function ss() {
  const e = ["66565lvhZQE", "4885790NApHvX", "68NqAmAB", "2GJzTAS", "8020419jDARYV", "img", "20EGErzh", "8usNHQS", "690276BZbdJB", "1601739SBUEsF", "div", "702899UaHqOT", "1429857EXCEzg"];
  return ss = function() {
    return e;
  }, ss();
}
(function(e, r) {
  const t = wo, n = e();
  for (; ; )
    try {
      if (-parseInt(t(226)) / 1 + -parseInt(t(234)) / 2 + parseInt(t(223)) / 3 * (-parseInt(t(232)) / 4) + parseInt(t(212)) / 5 * (parseInt(t(216)) / 6) + -parseInt(t(211)) / 7 * (parseInt(t(238)) / 8) + parseInt(t(228)) / 9 + -parseInt(t(206)) / 10 * (-parseInt(t(246)) / 11) === r) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(cs, 398597);
function wo(e, r) {
  const t = cs();
  return wo = function(n, o) {
    return n = n - 202, t[n];
  }, wo(e, r);
}
const fh = () => {
  const e = wo;
  return document[e(218) + e(205)] || document[e(241) + e(242)] || document[e(224) + e(235) + e(229)] || document[e(207) + e(236)];
}, V6 = (e) => {
  const r = wo, t = document[r(243) + r(230)](r(215) + r(209) + e);
  t[r(210) + r(227)] ? t[r(210) + r(227)]() : t[r(239) + r(217)] ? t[r(239) + r(217)]() : t[r(204) + r(221) + r(245)] ? r(222) === r(222) ? t[r(204) + r(221) + r(245)]() : _0xb174e0[r(239) + r(217)]() : t[r(237) + r(202)] && (r(208) !== r(208) ? _0x4eac0a[r(219) + r(214)]() : t[r(237) + r(202)]());
}, H6 = () => {
  const e = wo;
  document[e(225) + e(240)] ? e(231) === e(231) ? document[e(225) + e(240)]() : _0x4e073c[e(213) + e(220)]() : document[e(233) + e(244)] ? document[e(233) + e(244)]() : document[e(219) + e(214)] ? e(203) === e(203) ? document[e(219) + e(214)]() : _0x214767[e(233) + e(244)]() : document[e(213) + e(220)] && document[e(213) + e(220)]();
};
function cs() {
  const e = ["eenElement", "querySelec", "ullScreen", "een", "11nAOKSC", "ullscreen", "bxfHv", "webkitRequ", "Element", "12065310fCEZWT", "msFullscre", "eevYr", "in_", "requestFul", "256473ZiUjFT", "845005zwWPvi", "msExitFull", "Fullscreen", "#screen_ma", "18SdMUAu", "FullScreen", "fullscreen", "webkitExit", "screen", "estFullscr", "LsNtf", "1711581DZttgc", "webkitFull", "exitFullsc", "526820xuYsys", "lscreen", "6911361gtqTwS", "ent", "tor", "yHMQg", "4ZuWALL", "mozCancelF", "578756OkYInp", "screenElem", "enElement", "msRequestF", "152otRRJs", "mozRequest", "reen", "mozFullScr"];
  return cs = function() {
    return e;
  }, cs();
}
(function(e, r) {
  const t = ls, n = e();
  for (; ; )
    try {
      if (parseInt(t(459)) / 1 + parseInt(t(347)) / 2 + parseInt(t(443)) / 3 + parseInt(t(596)) / 4 * (-parseInt(t(616)) / 5) + parseInt(t(300)) / 6 + -parseInt(t(581)) / 7 * (parseInt(t(590)) / 8) + parseInt(t(335)) / 9 === r) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(us, 338231);
function ls(e, r) {
  const t = us();
  return ls = function(n, o) {
    return n = n - 238, t[n];
  }, ls(e, r);
}
function us() {
  const e = ["jUlFv", "48 3.832a1", "1-.644 1.1", "345-5.236 ", "HideID", " 0 0 0-1.8", "2 2h7c0 1.", "8.94 0 0 0", "2 2h7c1.10", "03 0 2-.89", "closest", "mABbb", "preventDef", "2-2h-4V4h1", " 8.95 8.95", "-.897 2-2V", "7zm0 4h2v2", "2.757-2.24", "zIndex", "27-1.547 5", "board", "dRapu", "H5v-2zm12 ", "Copy", "3 3v1h2zm1", " 7.11 0 0 ", "back", "2 2v8c0 1.", "59 15.016 ", "93-.019a1.", "0 1-2.822 ", "top", "http://www", "1 0 0 0-1 ", "3 0-2 .897", "7.005 0 0 ", ".015.057-.", "1zm-1 16H5", " 1 0 0 0 1", "M10 4H8v4H", "11.75", "now", "032 7.032 ", "volume", ".044 1.435", "892A6.967 ", ".089-1.218", "M6 12h6v2H", "taskId", ".002 16H6.", "3 1.331-3 ", "wUGYI", "0 0-.396-1", "m4.431 12.", "M17 8V7c0-", "7-2-2-2h-3", "0 0 1-.55 ", "ault", "current", "reload", ".186a8.94 ", "action", "zM4 20V10h", "27.05A1 1 ", " 0 0 0-3.2", "data-id", "nzfoP", "4 7.002 7.", "3 9a1.003 ", "3a.986.986", " 15H4V9z", "m-2-4h2V3h", "H5v-5H3v7h", "h-2v6h6z", "2 0 0 0-2-", " 0 0 1-.85", "M4 6h16v2H", "19 9.053 9", "-2-2-2zm-9", "pTTfw", " 0 0 0 1.0", "CrXej", "6l3.612-4.", "forEach", "Reload", "014 0 0 0 ", "circle", "3c.033 0 .", "6.967 0 0 ", " 1.539 5.0", "4c0-1.103-", "assistive_", "0 6.961 6.", "click", "053 7.005 ", "v5h-5v2h7z", "2 0 0 0-2 ", "002 0 0 1-", "674.31a1 1", "75.931l2 1", "1.103-.897", "getBoundin", "VmXwi", "7.032 15 7", "h4zm12-6h-", ".999-4.909", "touchstart", "7-2-2-2H9V", "1 0 0 0-1-", "3.218-1.35", " 2-2v-7c0-", "08 3.677L7", "28BQcIIm", ".024l-14-1", "0a.999.999", "061-.016.0", "0 0 0 .38-", "12%", "right", "eILIW", "4c-.025-.0", "657952cqShyp", "a.995.995 ", " 0 0 0-1.5", "SOeDC", "addEventLi", "2v10a2 2 0", "120daUfJH", " 2.428 2.4", ".09 0 0 0-", "7a1 1 0 0 ", "0-2 .897-2", "-2-2-2zm-1", "1 2.502 1.", "Board", "screenchan", "a1 1 0 0 0", "1.103 0-2 ", ".183-1.814", "tListener", "M20.978 13", "2 2zm2 7v-", "mousemove", "FYpan", "6a1 1 0 0 ", "03-.897-2-", "Unlock", "62185HPXbNG", "0 0 24 24", "KuHnP", "removeEven", "13 7.13 0 ", "WhYWa", "1.048z", "stener", "M21 5H3a2 ", "57-5.428 6", "mousedown", "enchange", "7zm11-5h-2", "div", ".w3.org/20", "1 1.892 1.", "touch", "6v2H4z", "H4c-1.103 ", "menu_", "webkitfull", " 5l3.975 3", "Back", " 1.814-.18", "4.445-2.96", ".116c.026-", "-3.229 2-5", "grab", "Icon", "isDown", "M20 2H10c-", "2zM9 7h2v2", "0 0 1.645z", "Volume", "oVCEk", "0V4a1 1 0 ", ".897-2-2-2", "47 3.999 7", "2.725 7.11", "s-.775-3.9", "-.769zm-8.", "assistive", "-2.43-2.43", "4h2v2h-2v-", "0 0-1.554-", " 2v13c0 1.", "ZvYGv", "2h-2V7zm0 ", "7 16 3v2c2", "M20.817 11", "4v-4c0-1.1", " 2v16c0 1.", "0 0 1-3.53", "rfYNC", "focus", "71 0 3-1.3", "9 21V3a1 1", "touch_clas", "M12 16c1.6", " 3.999 4.0", "10c-1.103 ", "M16 7v10c1", "4.243 7 7v", "FIift", "-2h2v2zm0-", "5 8.886 8.", "opacity", ".832L6.697", "msfullscre", "15%", "2-.116C7.0", ".096 0 0 0", "clipboard", "6H7v-2h10v", " 0 0 2 2h1", "6 1.907 7.", "2zm-8 2h2v", ".053 0 0 0", "eenchange", "7 2-2v-8c0", "get", "unlock", ".14a6.961 ", " 13a9.09 9", "3s3 1.346 ", "svg", ".387 1.386", "75z", "0 0 0 14 2", ".225-1.1 2", "sync", ".21a1 1 0 ", "includes", "RlzGD", "-2 2v6c0 1", ".004 1.004", "69-.823l-1", "19-1.355 9", "9.02 0 0 0", "paste", "961 0 0 1-", "qPqau", "landscape", "028 7.028 ", "ynAEM", "fullscreen", "H4zm16-6h-", "YXDer", "1 19 13a7.", "fill", "1813128lknHNl", "ent", "8a2 2 0 0 ", "gXnNi", " 2v10c0 1.", "7 2-2v-4h4", "Screen", " 5.999-9S1", "shortcutCo", "0h2v-6H4v2", "2-.082-.03", "H13z", "M16 21c3.5", "1.346-3 3-", ".614 16 19", "2H4zm0 5h1", "jOYRa", "00/svg", "2 0 0 0 21", "shortcut", " 2v5H4V5h3", "2 2h12c1.1", "822 13 9A1", "6v-8h12z", "zm0-6h-4V4", "6.961 0 0 ", "RhgGh", "touchmove", "left", " 0 0 0-.38", "1.1-1.332A", "-1.103-.89", "Home", "13H3a9.02 ", "H9V7zm0 4h", "1752030JiWZVE", "style", "c1.103 0 2", "pageY", " 0 0 0-.57", "8v12.264l-", "getAttribu", ".897-2 2v4", "v7h2zm5 14", "4v2h6zM8 2", "5.46 1.701", "l10.283 7.", "1008288rYCmCH", "416 3.377 ", "7h7l.001 7", "clientX", "move", "3 1.329 3 ", "228 0 0 0 ", "M20 3H4a1 ", "4-.002.968", "H6z", " 0 0 0-1 1", "1v16a1 1 0", "children", "target", "886 0 0 0 ", "2 2h10c1.1", "showMenu", "0 18V4h10l", "34 9.096 9", "2v2H9v-2zM", "uDVnm", "S18.387 17", "h-5c-1.103", "9.09 0 0 0", "7c0-1.654 ", "1.331-1.09", "copy", "touch_", "-2-5zM4 17", "gClientRec", "-1.355-3.2", "V6.002c.48", "mouse", "2 22a9.09 ", "28A8.95 8.", "3 9.014 9.", "8.347l-3.0", "6v6h2v-4h4", "home", "-1-1H8a1 1", "set", "0 1.767.51", ".103.897 2", "type", "v2h8V5h3v6", "0 2-2V7a2 ", "027 1.027 ", "Paste", "passive", "v2z", "ShowID", "9.527 4.54", "8.952 8.95", "fhwXi", "M16.75 2h-", "17-.056-.0", "4zm0 5h16v", "-7v2h5z", "0 0 0 .782", "UnSync", "height", ".028 9.028", "change", "shortcutEv", "3-5-5-5S7 ", "4h-2V7h2v2", "-1.052-3.3", "mozfullscr", "31 3-3s-1.", "cursor", "7 2-2V4c0-", "5 7h2v2H5V", "data", "1.89-1.89A", "1.003 0 0 ", "2zm2-4h-2v", "95 0 0 0 1", ".257 5.127", "Switch", "readText", "touchend", "Sync", "pageX", "mouseup", "0v10z", "uXqCl", "33L12 5.86", "255, 255, ", "9 9.228 9.", "rgba(255, ", " 2 2zm0-8h", "6zm0 4h6v2", "0 1-1V4a1 ", "38-.18V2L8", "3 3z", " 0 0 1 1h1", "51837NPNVZz", "6 0 0 1 5 ", "329-3-3-3-", "V5h14v14z", "6.996 6.99", "device_id", "h2.697l5.7", " 7H4c-1.10", "2.503-1.05", "M20 11V5c0", "88 7.2 7.2", "M5 5h5V3H3", "vfkAK", "103.897 2 ", "3H6c-1.103", "recents", "22036NfaSwL", "8 1.039 7.", " 4 .002 8H", "width", "3 0 2-.897", "017.082-.0", "path", "10l.002 10", " 0-2 .897-", "clientY"];
  return us = function() {
    return e;
  }, us();
}
const W6 = Wr((e, r) => {
  const t = ls, { displayId: n, isMobile: o, onSenData: i, status: a, canvasRef: s, isShowDeviceId: c, maxWidth: l } = e, u = {};
  u.x = 0, u.y = 0;
  const d = Pe(u), h = {};
  h.x = 0, h.y = 0;
  const v = Pe(h), [f, g] = jt(null), [p, y] = jt(null), [b, C] = jt(0), E = Pe(null), m = Pe(null), _ = Pe(null), w = {};
  w[t(416)] = t(351), w[t(256)] = 0.5, w[t(487)] = 999;
  const [A, N] = jt(w), D = {};
  D[t(487)] = 1e3;
  const [V, U] = jt(D), L = Pe(null), z = Pe(null), [H, T] = jt(null), I = (J) => {
    const k = t;
    if (k(400) !== k(294)) {
      if (J[k(481) + k(526)](), a[k(270)][k(363)] == !0) return;
      const ke = $r[J[k(390)]], Ge = s[k(527)], Xe = _[k(527)], me = Ge[k(570) + k(376) + "t"](), it = Xe[k(570) + k(376) + "t"](), De = 5;
      let Ke, mt;
      const Qt = me[k(462)] - it[k(462)], fr = me[k(407)] - it[k(407)];
      if (J[k(390)][k(282)](k(632))) {
        const { touches: Me, changedTouches: pt } = J, kt = Me[0] ?? pt[0];
        Ke = kt[k(429)], mt = kt[k(338)];
      } else if (J[k(390)][k(282)](k(379)))
        if (k(303) === k(303)) Ke = J[k(350)], mt = J[k(468)];
        else return;
      if (ke == $r[k(626)])
        if (k(283) !== k(367)) {
          a[k(387)]({ ...a[k(270)], isDown: !0 }), d[k(527)].x = Ke - it[k(328)], d[k(527)].y = mt - it[k(500)];
          const Me = {};
          Me[k(256)] = 1, Me[k(416)] = k(643);
          const pt = { ...A, ...Me };
          N(pt), C(performance[k(510)]());
        } else {
          const Me = _0x4e63fa[k(510)]() - _0x4efe89;
          if (_0x3d47f6 == _0x596a67[k(626)] || Me < 200) {
            const Be = {};
            Be[k(363)] = !0, Be[k(645)] = !1;
            const R = { ..._0x12197d[k(270)], ...Be };
            _0x307f3c[k(387)](R);
          } else {
            const Be = { ..._0x290d7a[k(270)] };
            Be[k(645)] = !1, _0xd83fc4[k(387)](Be);
          }
          const pt = {};
          pt[k(256)] = 0.5, pt[k(416)] = k(351);
          const kt = { ..._0x1fe7d1, ...pt };
          _0x8e8c72(kt);
        }
      else if (ke == $r[k(611)]) {
        if (a[k(270)][k(645)] == !1) return;
        let Me = Ke - d[k(527)].x - me[k(328)], pt = mt - d[k(527)].y - me[k(500)];
        const kt = Qt - De;
        (Me < De || Me > kt || pt < De || pt > fr - De) && !z[k(527)] || (Xe[k(336)][k(328)] = Me + "px", Xe[k(336)][k(500)] = pt + "px", v[k(527)].x = Me, v[k(527)].y = pt);
      } else if (ke == $r[k(430)]) {
        const Me = performance[k(510)]() - b;
        if (f == $r[k(626)] || Me < 200)
          if (k(480) !== k(480)) _0x27dcb8 && (_0x4e4c91[k(527)] = _0x51d6df), _0x1a529b();
          else {
            const Be = {};
            Be[k(363)] = !0, Be[k(645)] = !1, a[k(387)]({ ...a[k(270)], ...Be });
          }
        else a[k(387)]({ ...a[k(270)], isDown: !1 });
        const pt = {};
        pt[k(256)] = 0.5, pt[k(416)] = k(351);
        const kt = { ...A, ...pt };
        N(kt);
      }
      g(ke), Xe[k(244)]();
    } else _0x27962b[k(594) + k(623)](k(575), _0x35c016, _0x4904c8), _0x368682[k(594) + k(623)](k(327), _0x6fadc9, _0x4256b1), _0x4685b4[k(594) + k(623)](k(427), _0x5448ad);
  }, P = async (J) => {
    const k = t;
    J[k(481) + k(526)]();
    const ke = J[k(360)][k(479)](k(629))[k(341) + "te"](k(534));
    if (ke === k(295))
      if (!fh()) V6(n);
      else if (k(550) === k(548)) {
        const Xe = _0xb2bcb1();
        _0x5f3c24(_0x598182, Xe);
      } else H6();
    else {
      const Ge = {};
      Ge[k(530)] = k(410) + k(301), Ge[k(319)] = ke, Ge[k(419)] = "";
      const Xe = Ge;
      ke === k(289) && (k(618) !== k(618) ? _0x48fa6f(() => {
        const me = k, it = { ..._0xe609a2 };
        it[me(256)] = _0x2334ac[me(270)][me(363)] ? 1 : 0, _0x39aaee(it);
      }) : Xe[k(419)] = await navigator[k(262)][k(426)]()), ke === k(373) && (k(490) === k(490) ? Xe[k(517)] = k(308) + "py" : _0x6e1385[k(594) + k(623)](_0x3681f8, _0x617bb0)), i(M6, Xe);
    }
    a[k(387)]({ ...a[k(270)], showMenu: !1 }), m[k(527)][k(244)]();
  }, B = (J) => {
    const k = t;
    if (k(621) === k(316)) {
      const ke = { ..._0x4f1541 };
      ke[k(256)] = _0x12beaa[k(270)][k(363)] ? 1 : 0, _0x51d55f(ke);
    } else {
      const ke = fh();
      i(F6, ke);
    }
  };
  ut(() => {
    const J = t;
    J(432) === J(432) ? requestAnimationFrame(() => {
      const k = J, ke = { ...V };
      ke[k(256)] = a[k(270)][k(363)] ? 1 : 0, U(ke);
    }) : _0xae6c0d(_0x2602ca);
  }, [a]), ut(() => {
    const J = t;
    if (J(291) === J(612)) {
      if (_0x40d25b[J(270)][J(645)] == !1) return;
      let k = _0x574687 - _0x246994[J(527)].x - _0x32e2d3[J(328)], ke = _0x422238 - _0x4146a4[J(527)].y - _0x423706[J(500)];
      const Ge = _0x2dc656 - _0x20ebf8;
      (k < _0x4a0847 || k > Ge || ke < _0x3ff106 || ke > _0x6de784 - _0x14c0c8) && !_0x363153[J(527)] || (_0x54a410[J(336)][J(328)] = k + "px", _0x3b8491[J(336)][J(500)] = ke + "px", _0x4d0cc1[J(527)].x = k, _0x38f218[J(527)].y = ke);
    } else {
      const k = s[J(527)], ke = [J(295) + J(409), J(636) + J(604) + "ge", J(414) + J(268), J(258) + J(627)];
      return k && (J(593) === J(593) ? ke[J(552)]((Ge) => {
        const Xe = J;
        Xe(650) !== Xe(297) ? k[Xe(594) + Xe(623)](Ge, B) : (_0x9239f8[Xe(336)][Xe(328)] = _0x28c807 + "px", _0xb0776c[Xe(336)][Xe(500)] = _0x4c6788 + "px", _0xbff080[Xe(527)].x = _0x327da3, _0x2443c0[Xe(527)].y = _0x421ce6);
      }) : _0x358e35[J(619) + J(608)](J(562), _0x39e0e7)), () => {
        const Ge = J;
        k && (Ge(571) === Ge(520) ? _0x4fa1a7() : k[Ge(619) + Ge(608)](Ge(562), B));
      };
    }
  }, []), ut(() => {
    const J = t, k = _[J(527)], ke = m[J(527)];
    if (ke && ke[J(594) + J(623)](J(562), P), k) {
      const Ge = {};
      Ge[J(395)] = !1;
      const Xe = Ge;
      if (o) J(253) !== J(662) ? (k[J(594) + J(623)](J(575), I, Xe), k[J(594) + J(623)](J(327), I, Xe), k[J(594) + J(623)](J(427), I)) : _0x35a2ee[J(517)] = J(308) + "py";
      else if (J(326) === J(326)) [J(611), J(626), J(430)][J(552)]((me) => {
        const it = J;
        k[it(594) + it(623)](me, I);
      });
      else {
        const me = _0x402838[J(527)];
        me[J(336)][J(462)] = _0x4dd5d5[J(527)] != J(292) ? J(586) : "", me[J(336)][J(407)] = _0x4a2d1c[J(527)] == J(292) ? J(586) : "", me[J(336)][J(587)] = J(259), me[J(336)][J(500)] = "5%", me[J(336)][J(328)] = "";
      }
      return () => {
        const me = J;
        me(455) === me(455) ? (ke && ke[me(619) + me(608)](me(562), P), k && (me(535) !== me(535) ? _0x39dcb6 && _0x24fd49[me(619) + me(608)](me(562), _0x5f8911) : o ? [me(575), me(327), me(427)][me(552)]((it) => {
          const De = me;
          k[De(619) + De(608)](it, I);
        }) : me(588) === me(588) ? [me(611), me(626), me(430)][me(552)]((it) => {
          const De = me;
          k[De(619) + De(608)](it, I);
        }) : _0xcca33[me(619) + me(608)](_0x53ec81, _0x20b39d))) : _0x566126[me(594) + me(623)](me(562), _0x282a70);
      };
    }
  }, [o, I]);
  const W = () => {
    const J = t, k = _[J(527)];
    k[J(336)][J(462)] = L[J(527)] != J(292) ? J(586) : "", k[J(336)][J(407)] = L[J(527)] == J(292) ? J(586) : "", k[J(336)][J(587)] = J(259), k[J(336)][J(500)] = "5%", k[J(336)][J(328)] = "";
  };
  gi(r, () => ({ fixTouch: (J) => {
    const k = t;
    k(469) !== k(243) ? (J && (L[k(527)] = J), W()) : _0x5a91ee[k(527)] = _0x336a8;
  }, setFullscreen: (J) => {
    T(J);
  } }));
  const Y = {};
  Y[t(299)] = t(436) + t(434) + "1)";
  const K = {};
  K.d = H ? t(508) + t(344) + t(309) + t(573) + t(384) + t(324) + t(542) : t(454) + t(343) + t(541) + t(628) + t(564) + t(540) + t(404);
  const Z = {};
  Z[t(359)] = t(306);
  const G = {};
  G[t(299)] = t(436) + t(434) + "1)";
  const te = {};
  te.d = t(646) + t(606) + t(342) + t(634) + t(600) + t(304) + t(456) + t(362) + t(478) + t(305) + t(337) + t(484) + t(559) + t(652) + t(531) + t(466) + t(296) + t(240) + t(614) + t(482) + t(431);
  const ie = {};
  ie.d = t(516) + t(438) + t(356);
  const he = {};
  he[t(359)] = t(492);
  const pe = {};
  pe[t(299)] = t(436) + t(434) + "1)";
  const xe = {};
  xe.d = t(452) + t(331) + t(524) + t(605) + t(386) + t(357) + t(634) + t(600) + t(661) + t(456) + t(475) + t(456) + t(477) + t(463) + t(579) + t(569) + t(547) + t(320) + t(391) + t(369) + t(467) + t(610) + t(349) + t(311);
  const Se = {};
  Se[t(359)] = t(394);
  const ae = {};
  ae[t(299)] = t(436) + t(434) + "1)";
  const se = {};
  se.d = t(523) + t(486) + t(411) + t(252) + t(457) + t(467) + t(496) + t(456) + t(321) + t(478) + t(269) + t(331) + t(576) + t(371) + t(313) + t(274) + t(493) + t(461) + t(323);
  const _e = {};
  _e[t(359)] = t(615);
  const re = {};
  re[t(299)] = t(436) + t(434) + "1)";
  const ve = {};
  ve.d = t(248) + t(245) + t(415) + t(445) + t(519) + t(352) + t(441);
  const ce = {};
  ce.d = t(239) + t(529) + t(476) + t(377) + t(546) + t(267) + t(658) + t(483) + t(533) + t(287) + t(408) + t(474) + t(440) + t(637) + t(378) + t(355) + t(513) + t(272) + t(325) + t(602) + t(563) + t(504) + t(631) + t(514) + t(557) + t(298) + t(511) + t(525) + t(654) + t(494) + t(471) + t(453) + t(544) + t(460) + t(293) + t(242) + t(265) + t(620) + t(499) + t(561) + t(290) + t(451) + t(536) + t(566) + t(420) + t(447) + t(444) + t(333) + t(288) + t(558) + t(365) + t(261) + t(597) + t(381) + t(423) + t(380) + t(370) + t(639) + t(382) + t(554) + t(578) + t(255) + t(361) + t(372) + t(435) + t(353) + t(330) + t(399) + t(318) + t(273) + t(598) + t(607) + "z";
  const be = {};
  be[t(359)] = t(553);
  const Ce = {};
  Ce[t(299)] = t(436) + t(434) + "1)";
  const we = {};
  we.d = t(624) + t(565) + t(595) + t(264) + t(302) + t(392) + t(543) + t(266) + t(663) + t(659) + t(647) + t(334) + t(366) + t(418) + t(485) + t(491) + t(263) + t(422) + t(254) + t(412) + "z";
  const ze = {};
  ze[t(359)] = t(603);
  const Te = {};
  Te[t(299)] = t(436) + t(434) + "1)";
  const S = {};
  S.d = t(401) + t(250) + t(600) + t(241) + t(456) + t(362) + t(478) + t(417) + t(569) + t(601) + t(364) + t(518) + t(277);
  const $ = {};
  $.cx = t(509), $.cy = "18", $.r = "1";
  const O = {};
  O[t(359)] = t(c ? 473 : 397);
  const j = {};
  j[t(299)] = t(436) + t(434) + "1)";
  const M = {};
  M.d = t(312) + t(488) + t(574) + t(307) + t(398) + t(238) + t(276) + t(249) + t(653) + t(368) + t(314) + t(396);
  const le = {};
  le.d = t(251) + t(279) + t(642) + t(655) + t(375) + t(449) + t(470) + t(285) + t(549) + t(532) + t(278) + t(651) + t(660) + t(257) + t(450) + t(503) + t(284) + t(389) + t(437) + t(556) + t(584) + t(498) + t(393) + t(585) + t(641) + t(505) + t(464) + t(433) + t(340) + t(640) + t(589) + t(402) + t(310) + t(538) + t(329) + t(260) + t(497) + t(572) + t(539);
  const Je = {};
  Je[t(359)] = t(649);
  const We = {};
  We[t(299)] = t(436) + t(434) + "1)";
  const je = {};
  je.d = t(609) + t(281) + t(521) + t(582) + t(583) + t(592) + t(568) + t(599) + t(388) + t(551) + t(348) + t(345) + t(413) + t(625) + t(515) + t(591) + t(405) + t(656) + t(567) + t(339) + t(383) + t(580) + t(424) + t(346) + t(472) + t(622);
  const et = {};
  et[t(359)] = t(p ? 406 : 428);
  const Ve = {};
  Ve[t(299)] = t(436) + t(434) + "1)";
  const Le = {};
  Le.d = t(545) + t(403) + t(315) + t(633);
  const ge = {};
  ge[t(359)] = t(425);
  const Ee = {};
  Ee[t(299)] = t(436) + t(434) + "1)";
  const ue = {};
  ue.d = t(354) + t(502) + t(358) + t(442) + t(613) + t(439) + t(577) + t(506) + t(446);
  const Re = {};
  Re[t(359)] = t(332);
  const dt = {};
  dt[t(299)] = t(436) + t(434) + "1)";
  const Jt = {};
  Jt.d = t(522) + t(322) + t(507) + t(246) + t(592) + t(286) + t(537) + t(421) + t(648);
  const Lt = {};
  return Lt[t(359)] = t(638), de.jsxs(de.Fragment, { children: [a[t(270)][t(363)] ? de.jsxs(D6, { id: t(560) + t(635) + n, style: V, ref: m, children: [de.jsxs(mr, { "data-id": t(295), children: [de.jsx(t(275), { xmlns: t(501) + t(630) + t(317), width: "28", height: "28", viewBox: t(617), style: Y, children: de.jsx(t(465), K) }), de.jsx(vr, Z)] }), de.jsxs(mr, { "data-id": t(373), children: [de.jsxs(t(275), { xmlns: t(501) + t(630) + t(317), width: "28", height: "28", viewBox: t(617), style: G, children: [de.jsx(t(465), te), de.jsx(t(465), ie)] }), de.jsx(vr, he)] }), de.jsxs(mr, { "data-id": t(289), children: [de.jsx(t(275), { xmlns: t(501) + t(630) + t(317), width: "28", height: "28", viewBox: t(617), style: pe, children: de.jsx(t(465), xe) }), de.jsx(vr, Se)] }), de.jsxs(mr, { "data-id": t(271), children: [de.jsx(t(275), { xmlns: t(501) + t(630) + t(317), width: "25", height: "25", viewBox: t(617), style: ae, children: de.jsx(t(465), se) }), de.jsx(vr, _e)] }), de.jsxs(mr, { "data-id": t(528), children: [de.jsxs(t(275), { xmlns: t(501) + t(630) + t(317), width: "25", height: "25", viewBox: t(617), style: re, children: [de.jsx(t(465), ve), de.jsx(t(465), ce)] }), de.jsx(vr, be)] }), de.jsxs(mr, { "data-id": t(489), children: [de.jsx(t(275), { xmlns: t(501) + t(630) + t(317), width: "25", height: "25", viewBox: t(617), style: Ce, children: de.jsx(t(465), we) }), de.jsx(vr, ze)] }), de.jsxs(mr, { "data-id": t(448), children: [de.jsxs(t(275), { xmlns: t(501) + t(630) + t(317), width: "28", height: "28", viewBox: t(617), style: Te, children: [de.jsx(t(465), S), de.jsx(t(555), $)] }), de.jsx(vr, O)] }), de.jsxs(mr, { "data-id": t(512), children: [de.jsxs(t(275), { xmlns: t(501) + t(630) + t(317), width: "25", height: "25", viewBox: t(617), style: j, children: [de.jsx(t(465), M), de.jsx(t(465), le)] }), de.jsx(vr, Je)] }), de.jsxs(mr, { "data-id": t(280), children: [de.jsx(t(275), { xmlns: t(501) + t(630) + t(317), width: "28", height: "28", viewBox: t(617), style: We, children: de.jsx(t(465), je) }), de.jsx(vr, et)] }), de.jsxs(mr, { "data-id": t(458), children: [de.jsx(t(275), { xmlns: t(501) + t(630) + t(317), width: "28", height: "28", viewBox: t(617), style: Ve, children: de.jsx(t(465), Le) }), de.jsx(vr, ge)] }), de.jsxs(mr, { "data-id": t(385), children: [de.jsx(t(275), { xmlns: t(501) + t(630) + t(317), width: "28", height: "28", viewBox: t(617), style: Ee, children: de.jsx(t(465), ue) }), de.jsx(vr, Re)] }), de.jsxs(mr, { "data-id": t(495), children: [de.jsx(t(275), { xmlns: t(501) + t(630) + t(317), width: "28", height: "28", viewBox: t(617), style: dt, children: de.jsx(t(465), Jt) }), de.jsx(vr, Lt)] })] }) : null, de.jsx(B6, { id: t(560) + t(247) + "s_" + n, className: t(657), ref: E, style: A, children: de.jsx(z6, { src: k6, className: t(657), id: t(560) + t(374) + n, alt: t(644), ref: _, draggable: !1 }) })] });
});
function gn(e, r) {
  const t = ds();
  return gn = function(n, o) {
    return n = n - 121, t[n];
  }, gn(e, r);
}
const _t = gn;
(function(e, r) {
  const t = gn, n = e();
  for (; ; )
    try {
      if (parseInt(t(183)) / 1 + parseInt(t(169)) / 2 + -parseInt(t(190)) / 3 * (parseInt(t(171)) / 4) + -parseInt(t(191)) / 5 + -parseInt(t(208)) / 6 + -parseInt(t(188)) / 7 + -parseInt(t(217)) / 8 === r) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ds, 707848);
function ds() {
  const e = ["setTransfo", "iZlFT", "scale", "landscape", "canvasRef", "decode", "drawImage", "height", "1365143HlOnsb", "restore", "getBigUint", "buildDecod", "setOrienta", "4265457rNsATj", "optimizeFo", "6XOtvjk", "3950720EtHfsQ", "frVKw", "codec", "chunks", "portrait", "save", "slice", "orientatio", "getContext", "rootSize", "NIkEL", "ror:", "innerHeigh", "width", "tion", "hardwareAc", "TCrOf", "1005306JwGAyT", "push", "isMobile", "tdLhS", "type", "now", "key", "current", "AMVnn", "2696544JPSmAe", "isPlay", "autoResize", "NfVLG", "amp", "translate", "frameSize", "endBytes", "buffer", "isPause", "celeration", "wMHoP", "YhWpG", "innerWidth", "setPause", "maxWidth", "from", "close", "OUdeY", "videoMeta", "codedWidth", "ctx", "startBytes", "KTKjt", "min", "izVUQ", "codedHeigh", "state", "decoder", "resize", "TmkIm", "clearRect", "lock", "isFullsCre", "setIsConne", "timestamp", "concatUint", "8Chunks", "qVkVj", "error", "configure", "delta", "NPJDl", "data", "concat", "iframe", "Decoder er", "setVideoMe", "scaleSize", "baseTimest", "every", "rLatency", "set", "length", "2520286rofOAj", "style", "26648lgZhGx", "rotate", "8Arrays", "CCTEL"];
  return ds = function() {
    return e;
  }, ds();
}
const hh = (e, r) => {
  const t = gn;
  return e[t(168)] < r[t(168)] ? !1 : r[t(165)]((n, o) => n === e[o]);
}, q6 = (e) => {
  const r = gn, t = new Uint8Array(e);
  for (let n = 0; n <= t[r(168)] - 5; n++) {
    let o = 0;
    if (t[n] === 0 && t[n + 1] === 0 && t[n + 2] === 1 ? o = 3 : t[n] === 0 && t[n + 1] === 0 && t[n + 2] === 0 && t[n + 3] === 1 && (o = 4), o > 0 && (t[n + o] & 31) === 5)
      return !0;
  }
  return !1;
};
var gh, mh, vh, bh, yh, wh, Sh, Ch, _h, Eh;
class U6 {
  constructor(r, t, n, o, i, a) {
    ot(this, Eh, (r, t, n, o) => {
      const i = _t, a = n / r, s = o / t;
      if (s < 0.4 && a > s) {
        const u = {};
        return u[i(204)] = n, u[i(182)] = t * a, u;
      }
      const c = Math[i(139)](a, s), l = {};
      return l[i(204)] = r * c, l[i(182)] = t * c, l;
    });
    ot(this, _h, () => {
      var a;
      const r = _t;
      if (!this[r(121)][r(135)])
        if (r(207) !== r(207)) _0x43359c = this[r(151) + r(173)](this[r(134)], this[r(160)]), this[r(218)] = !0;
        else return;
      const t = this[r(148) + "en"] ? this[r(210)] ? window[r(128)] - 20 : this[r(130)] : this[r(130)], n = this[r(198) + "n"] == r(178) ? window[r(128)] : window[r(203) + "t"] - (this[r(210)] ? 12 : 50), o = this[r(163)](this[r(121)][r(135)], this[r(121)][r(141) + "t"], t, n);
      if (this[r(204)] = o[r(204)], this[r(182)] = o[r(182)], !this[r(200)])
        if (r(216) === r(216)) (a = this[r(149) + "ct"]) == null || a.call(this, !0);
        else {
          const s = {};
          return s[r(204)] = _0x326ca6, s[r(182)] = _0x393f73 * _0x5c43db, s;
        }
      const i = {};
      i[r(204)] = o[r(204)], i[r(182)] = o[r(182)], this[r(200)] = i;
    });
    ot(this, Ch, (r) => {
      const t = _t, n = this[t(179)][t(215)];
      if (!n) return;
      const o = this[t(204)], i = this[t(182)], a = i / o;
      this[t(204)] = r, this[t(182)] = r * a, n[t(170)][t(204)] = (this[t(198) + "n"] == t(195) ? this[t(204)] : this[t(182)]) + "px", n[t(170)][t(182)] = (this[t(198) + "n"] == t(195) ? this[t(182)] : this[t(204)]) + "px";
    });
    ot(this, Sh, (r) => {
      const t = _t;
      if (this[t(198) + "n"] = r, this[t(210)])
        if (t(127) === t(157)) {
          this[t(194)] = [];
          return;
        } else screen[t(198) + "n"][t(147)](r);
    });
    ot(this, wh, (r) => {
      const t = _t;
      this[t(124)] = r;
    });
    ot(this, yh, (r) => {
      const t = _t, n = r instanceof Uint8Array ? r : new Uint8Array(r);
      this[t(134)] = n;
    });
    ot(this, bh, () => {
      const r = _t, t = new VideoDecoder({ output: async (o) => {
        const i = gn, a = {};
        a[i(135)] = o[i(135)], a[i(141) + "t"] = o[i(141) + "t"], this[i(121)] = a, this[i(136)][i(175) + "rm"](1, 0, 0, 1, 0, 0), this[i(136)][i(146)](0, 0, this[i(182)], this[i(182)]);
        const s = this[i(179)][i(215)];
        if (this[i(198) + "n"] == i(178)) (s[i(204)] != this[i(182)] || s[i(182)] != this[i(204)]) && (i(145) === i(174) ? ((_0x25a8c8[i(204)] != this[i(204)] || _0x29010b[i(182)] != this[i(182)]) && (_0x54dc0f[i(204)] = this[i(204)], _0x307391[i(182)] = this[i(182)]), this[i(136)][i(181)](_0x35732c, 0, 0, this[i(204)], this[i(182)])) : (s[i(204)] = this[i(182)], s[i(182)] = this[i(204)])), this[i(136)][i(196)](), this[i(136)][i(222)](0, this[i(204)]), this[i(136)][i(172)](Math.PI / 2), this[i(136)][i(177)](-1, -1), this[i(136)][i(181)](o, 0, 0, this[i(204)], this[i(182)]), this[i(136)][i(184)]();
        else {
          if (s[i(204)] != this[i(204)] || s[i(182)] != this[i(182)])
            if (i(138) !== i(201)) s[i(204)] = this[i(204)], s[i(182)] = this[i(182)];
            else {
              !this[i(218)] && (_0x4948aa = this[i(151) + i(173)](this[i(134)], this[i(160)]), this[i(218)] = !0);
              const c = {};
              c[i(150)] = _0x74c834, c[i(212)] = _0x1db250 ? i(214) : i(156), c[i(158)] = _0x1f857d, this[i(143)][i(180)](new _0x329632(c));
            }
          this[i(136)][i(181)](o, 0, 0, this[i(204)], this[i(182)]);
        }
        o[i(132)]();
      }, error: (o) => console[r(154)](r(161) + r(202), o) }), n = {};
      return n[r(193)] = this[r(193)], n[r(206) + r(125)] = this[r(206) + r(125)], n[r(189) + r(166)] = !0, t[r(155)](n), t;
    });
    ot(this, mh, (r, t) => {
      const n = _t, o = Array[n(131)](r)[n(159)](Array[n(131)](t));
      return new Uint8Array(o);
    });
    ot(this, gh, (r) => {
      const t = _t;
      if (!this[t(143)] || this[t(143)][t(142)] == t(132) || !this[t(134)] || this[t(124)]) return;
      let n = r instanceof Uint8Array ? r : new Uint8Array(r), o = performance[t(213)]() * 1e3;
      if (hh(n, this[t(137)]))
        if (t(176) !== t(126)) {
          this[t(194)] = [];
          return;
        } else _0xef53a8[t(167)](_0x3bc2d3, _0x1512ad), _0xb50182 += _0x488530[t(168)];
      else if (hh(n, this[t(122)])) {
        const a = n[t(197)](5), s = new DataView(a[t(123)]);
        o = Number(s[t(185) + "64"](0, !1)), n = this[t(151) + t(152)](), this[t(194)] = [];
      } else if (t(192) !== t(192)) {
        this[t(179)] = _0x225204, this[t(193)] = _0x5154e8, this[t(210)] = _0x2d16e4, this[t(130)] = _0x1b675f, this[t(149) + "ct"] = _0x206cd8, this[t(204)] = null, this[t(182)] = null, this[t(218)] = null, this[t(134)] = null, this[t(160)] = null;
        const a = {};
        a[t(204)] = null, a[t(182)] = null, this[t(121)] = a, this[t(200)] = null, this[t(198) + "n"] = t(195), this[t(148) + "en"] = null, this[t(206) + t(125)] = _0x27bd2d, this[t(136)] = _0x37040d[t(215)][t(199)]("2d"), this[t(143)] = this[t(186) + "er"](), this[t(194)] = [], this[t(137)] = new _0x137778([115, 116, 97, 114, 116]), this[t(122)] = new _0x5744f3([101, 110, 100, 33, 33]), this[t(164) + t(221)] = 0, this[t(124)];
      } else {
        this[t(194)][t(209)](n);
        return;
      }
      const i = q6(n);
      if (i) {
        if (t(153) === t(211))
          return _0x1311a2[t(168)] < _0x4e6ccf[t(168)] ? !1 : _0x2bbad9[t(165)]((a, s) => a === _0x3ff9ae[s]);
        this[t(160)] = n;
      }
      if (this[t(160)] && this[t(134)])
        if (t(133) === t(133)) {
          if (!this[t(218)])
            if (t(220) !== t(140)) n = this[t(151) + t(173)](this[t(134)], this[t(160)]), this[t(218)] = !0;
            else {
              const s = this[t(179)][t(215)];
              if (!s) return;
              const c = this[t(204)], l = this[t(182)], u = l / c;
              this[t(204)] = _0x1ea7a7, this[t(182)] = _0x96f89e * u, s[t(170)][t(204)] = (this[t(198) + "n"] == t(195) ? this[t(204)] : this[t(182)]) + "px", s[t(170)][t(182)] = (this[t(198) + "n"] == t(195) ? this[t(182)] : this[t(204)]) + "px";
            }
          const a = {};
          a[t(150)] = o, a[t(212)] = t(i ? 214 : 156), a[t(158)] = n, this[t(143)][t(180)](new EncodedVideoChunk(a));
        } else {
          const a = new _0x2ca9eb(_0x1aad2b);
          for (let s = 0; s <= a[t(168)] - 5; s++) {
            let c = 0;
            if (a[s] === 0 && a[s + 1] === 0 && a[s + 2] === 1 ? c = 3 : a[s] === 0 && a[s + 1] === 0 && a[s + 2] === 0 && a[s + 3] === 1 && (c = 4), c > 0 && (a[s + c] & 31) === 5)
              return !0;
          }
          return !1;
        }
    });
    const s = gn;
    this[s(179)] = n, this[s(193)] = o, this[s(210)] = r, this[s(130)] = t, this[s(149) + "ct"] = a, this[s(204)] = null, this[s(182)] = null, this[s(218)] = null, this[s(134)] = null, this[s(160)] = null;
    const c = {};
    c[s(204)] = null, c[s(182)] = null, this[s(121)] = c, this[s(200)] = null, this[s(198) + "n"] = s(195), this[s(148) + "en"] = null, this[s(206) + s(125)] = i, this[s(136)] = n[s(215)][s(199)]("2d"), this[s(143)] = this[s(186) + "er"](), this[s(194)] = [], this[s(137)] = new Uint8Array([115, 116, 97, 114, 116]), this[s(122)] = new Uint8Array([101, 110, 100, 33, 33]), this[s(164) + s(221)] = 0, this[s(124)];
  }
  [(Eh = _t(163), _h = _t(219), Ch = _t(144), Sh = _t(187) + _t(205), wh = _t(129), yh = _t(162) + "ta", bh = _t(186) + "er", vh = _t(151) + _t(152), mh = _t(151) + _t(173), gh = _t(180), vh)]() {
    const r = _t;
    let t = 0;
    for (const i of this[r(194)]) t += i[r(168)];
    const n = new Uint8Array(t);
    let o = 0;
    for (const i of this[r(194)])
      n[r(167)](i, o), o += i[r(168)];
    return n;
  }
}
const qt = [];
for (let e = 0; e < 256; ++e)
  qt.push((e + 256).toString(16).slice(1));
function G6(e, r = 0) {
  return (qt[e[r + 0]] + qt[e[r + 1]] + qt[e[r + 2]] + qt[e[r + 3]] + "-" + qt[e[r + 4]] + qt[e[r + 5]] + "-" + qt[e[r + 6]] + qt[e[r + 7]] + "-" + qt[e[r + 8]] + qt[e[r + 9]] + "-" + qt[e[r + 10]] + qt[e[r + 11]] + qt[e[r + 12]] + qt[e[r + 13]] + qt[e[r + 14]] + qt[e[r + 15]]).toLowerCase();
}
let hl;
const X6 = new Uint8Array(16);
function K6() {
  if (!hl) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    hl = crypto.getRandomValues.bind(crypto);
  }
  return hl(X6);
}
const Y6 = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), ph = { randomUUID: Y6 };
function zm(e, r, t) {
  var o;
  if (ph.randomUUID && !e)
    return ph.randomUUID();
  e = e || {};
  const n = e.random ?? ((o = e.rng) == null ? void 0 : o.call(e)) ?? K6();
  if (n.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, G6(n);
}
var sn = pi;
function pi(e, r) {
  var t = fs();
  return pi = function(n, o) {
    n = n - 107;
    var i = t[n];
    return i;
  }, pi(e, r);
}
(function(e, r) {
  for (var t = pi, n = e(); ; )
    try {
      var o = -parseInt(t(127)) / 1 + -parseInt(t(126)) / 2 * (parseInt(t(113)) / 3) + -parseInt(t(107)) / 4 + -parseInt(t(122)) / 5 * (parseInt(t(124)) / 6) + -parseInt(t(108)) / 7 + parseInt(t(114)) / 8 * (-parseInt(t(116)) / 9) + parseInt(t(112)) / 10;
      if (o === r) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(fs, 348802);
class Bm {
  constructor(r, t) {
    var n = pi, o = {};
    o[n(130)] = r, o[n(115)] = t, this[n(128)] = o;
  }
  [sn(109)]() {
    var r = sn;
    return this[r(128)][r(119)] = r(111) + "ts", this[r(128)];
  }
  [sn(129)]() {
    var r = sn;
    return this[r(128)][r(119)] = r(111) + "ts", this[r(128)];
  }
  [sn(117)](r = 0) {
    var t = sn;
    return this[t(128)][t(119)] = t(110) + "nt", this[t(128)][t(123)] = r, this[t(128)];
  }
  [sn(121)](r = 0, t) {
    var n = sn;
    return this[n(128)][n(119)] = n(125) + n(120), this[n(128)][n(123)] = r, this[n(128)][n(118)] = t, this[n(128)];
  }
}
function fs() {
  var e = ["value", "126sLGkyH", "click", "text", "action", "ment", "setText", "1385EoYrvs", "index", "786SRLCJV", "setTextEle", "76948ewmWwQ", "124728hwWtMr", "data", "all", "keyName", "1200176TyUCOP", "3366594HigFXe", "dumpJson", "clickEleme", "findElemen", "21134830SxBYYQ", "39MjPpVk", "184296KaOBso"];
  return fs = function() {
    return e;
  }, fs();
}
var gt = hs;
(function(e, r) {
  for (var t = hs, n = e(); ; )
    try {
      var o = parseInt(t(338)) / 1 + -parseInt(t(358)) / 2 + parseInt(t(342)) / 3 * (parseInt(t(361)) / 4) + -parseInt(t(362)) / 5 + parseInt(t(350)) / 6 + -parseInt(t(344)) / 7 * (-parseInt(t(339)) / 8) + -parseInt(t(355)) / 9;
      if (o === r) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ps, 856944);
function hs(e, r) {
  var t = ps();
  return hs = function(n, o) {
    n = n - 338;
    var i = t[n];
    return i;
  }, hs(e, r);
}
function ps() {
  var e = ["resourceId", "2792696LgsyLX", "openInfo", "set", "8ZXTWun", "3043745xjfYja", "354853voUvPz", "1328AaOPJx", "ODE", "xpath", "1855182gxfmcA", "stop", "8764FXzRLy", "text", "info", "KEYBOARD_C", "className", "get", "7561800STxZKC", "KEYBOARD_T", "clear", "start", "code", "1779588SCiNeY", "EXT"];
  return ps = function() {
    return e;
  }, ps();
}
var Oh, Rh, $h, Th;
Th = gt(353), $h = gt(343), Rh = gt(352), Oh = gt(346);
class hn {
}
ot(hn, Th, gt(353)), ot(hn, $h, gt(343)), ot(hn, Rh, gt(352)), ot(hn, Oh, gt(359));
var Ph, Ah;
Ah = gt(345), Ph = gt(354);
class xs {
}
ot(xs, Ah, gt(351) + gt(356)), ot(xs, Ph, gt(347) + gt(340));
var Nh, Ih, jh, Mh;
Mh = gt(345), jh = gt(348), Ih = gt(357), Nh = gt(341);
class ha {
}
ot(ha, Mh, gt(345)), ot(ha, jh, gt(348)), ot(ha, Ih, gt(357)), ot(ha, Nh, gt(341));
var Fh, Lh;
Lh = gt(349), Fh = gt(360);
class gs {
}
ot(gs, Lh, gt(349)), ot(gs, Fh, gt(360));
var cn = xi;
(function(e, r) {
  for (var t = xi, n = e(); ; )
    try {
      var o = parseInt(t(480)) / 1 * (-parseInt(t(470)) / 2) + -parseInt(t(465)) / 3 * (-parseInt(t(473)) / 4) + parseInt(t(476)) / 5 + -parseInt(t(477)) / 6 + -parseInt(t(467)) / 7 + parseInt(t(469)) / 8 + parseInt(t(481)) / 9 * (parseInt(t(478)) / 10);
      if (o === r) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ms, 217521);
function ms() {
  var e = ["1084965hYFWfU", "663906GBlBrm", "1090wSqnsI", "strategy", "962GffTWK", "58095QgjPbB", "834fVjALc", "callbackAp", "2528183PUqYhG", "all", "1363672TQXfuP", "860SZvgeS", "dumpJson", "setText", "172MJpIad", "click", "value"];
  return ms = function() {
    return e;
  }, ms();
}
function xi(e, r) {
  var t = ms();
  return xi = function(n, o) {
    n = n - 465;
    var i = t[n];
    return i;
  }, xi(e, r);
}
class xh {
  constructor(r, t, n) {
    var o = xi;
    this[o(479)] = r, this[o(475)] = t, this[o(466) + "i"] = n, this.el = new Bm(this[o(479)], this[o(475)]);
  }
  async [cn(474)]({ index: r = 0, retry_time: t = 0, timeout: n = 5e3 } = {}) {
    var o = cn;
    return await this[o(466) + "i"](this.el[o(474)](r), n, t);
  }
  async [cn(472)]({ text: r, index: t = 0, retry_time: n = 0, timeout: o = 5e3 } = {}) {
    var i = cn;
    return await this[i(466) + "i"](this.el[i(472)](t, r), o, n);
  }
  async [cn(468)]({ retry_time: r = 0, timeout: t = 5e3 } = {}) {
    var n = cn;
    return await this[n(466) + "i"](this.el[n(468)](), t, r);
  }
  async [cn(471)](r) {
    var t = cn;
    return await this[t(466) + "i"](this.el[t(471)](), r);
  }
}
var Tt = vs;
(function(e, r) {
  for (var t = vs, n = e(); ; )
    try {
      var o = parseInt(t(301)) / 1 + -parseInt(t(337)) / 2 * (-parseInt(t(296)) / 3) + parseInt(t(324)) / 4 * (-parseInt(t(333)) / 5) + -parseInt(t(297)) / 6 + -parseInt(t(329)) / 7 + parseInt(t(323)) / 8 * (-parseInt(t(309)) / 9) + parseInt(t(302)) / 10;
      if (o === r) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(bs, 806383);
function vs(e, r) {
  var t = bs();
  return vs = function(n, o) {
    n = n - 295;
    var i = t[n];
    return i;
  }, vs(e, r);
}
class ur {
  static [Tt(318)](r) {
    var t = Tt;
    return r[t(330)] = zm(), r;
  }
  static [Tt(334)](r) {
    var t = Tt, n = {};
    return n[t(300)] = t(332), n[t(338)] = r, this[t(318)](n);
  }
  static [Tt(304)](r, t = "") {
    var n = Tt, o = {};
    return o[n(300)] = n(304), o[n(325)] = r, o[n(338)] = t, this[n(318)](o);
  }
  static [Tt(335) + "en"]() {
    var r = Tt, t = {};
    return t[r(300)] = r(315) + r(298), this[r(318)](t);
  }
  static [Tt(339) + "ts"](r, t) {
    var n = Tt;
    return new Bm(r, t, this[n(318)]);
  }
  static [Tt(326)](r, t) {
    var n = Tt, o = {};
    return o[n(300)] = n(311), o[n(313)] = r, o[n(306) + "e"] = t, this[n(318)](o);
  }
  static [Tt(310)](r, t, n = 0, o = 0) {
    var i = Tt, a = {};
    return a[i(300)] = i(336), a[i(312)] = i(305) + "N", a[i(308)] = r, a[i(314)] = t, a[i(295)] = o, a[i(319)] = n, this[i(318)](a);
  }
  static [Tt(316)](r, t, n) {
    var o = Tt, i = {};
    return i[o(300)] = o(321), i.x = r, i.y = t, i[o(317)] = n, this[o(318)](i);
  }
  static [Tt(322)](r, t, n, o, i) {
    var a = Tt, s = {};
    return s[a(300)] = a(320), s[a(307)] = r, s[a(303)] = t, s[a(327)] = n, s[a(299)] = o, s[a(317)] = i, this[a(318)](s);
  }
  static [Tt(328)](r) {
    var t = Tt, n = {};
    return n[t(300)] = t(331) + "nt", n[t(338)] = r, this[t(318)](n);
  }
}
function bs() {
  var e = ["click", "duration", "sendData", "meta_state", "swipeEvent", "clickEvent", "swipe", "176PokeBK", "314504hYpoXJ", "keyName", "app", "end_x", "setText", "8887536kxPvMJ", "taskId", "setTextEve", "toastEvent", "75LPMwRL", "toast", "unlockScre", "keyEvent", "194262mPwZtd", "text", "findElemen", "repeat", "39tbCdFZ", "3878880QPVsRH", "ent", "end_y", "action", "281625IBRQdZ", "36272590QuseuJ", "start_y", "clipboard", "ACTION_DOW", "packageNam", "start_x", "typeKey", "519417IirgJS", "keyboard", "appEvent", "keyAction", "command", "key", "onScreenEv"];
  return bs = function() {
    return e;
  }, bs();
}
(function(e, r) {
  const t = Rn, n = e();
  for (; ; )
    try {
      if (-parseInt(t(657)) / 1 + -parseInt(t(628)) / 2 * (-parseInt(t(498)) / 3) + -parseInt(t(555)) / 4 * (parseInt(t(574)) / 5) + parseInt(t(647)) / 6 + -parseInt(t(662)) / 7 * (parseInt(t(677)) / 8) + parseInt(t(551)) / 9 + parseInt(t(576)) / 10 * (parseInt(t(542)) / 11) === r) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(ys, 924218);
function ys() {
  const e = ["emit", "marginBott", "GSlrU", "LnUiZ", "_time time", "action", "QgIey", "ent", "video_meta", "secondary", "addEventLi", "ArtPA", "unlock", "applicatio", "size", "recents", "TyDok", "msg", "Hmblp", "92018kQyGVg", "meta", "dumpJson", "writeText", "webkitFull", "ZKIov", "method", "CUwii", "type", "aDdcW", "resize", "message", "clipboard", "timeSync", "center", "screen_mai", "ms)", "bvdGr", "QRgaV", "223872CERagd", "vertical", "get", "data", "setOrienta", "code", "showMenu", "draggable", "marginTop", "status", "683091StqnFz", "keyboard", "kLNWG", "parse", "mozFullScr", "1190MCVmqC", "map", "AlkZN", "screen", "back", "info", "Text", "ose", "small", "xMjsW", "password", "connect cl", "eenElement", "large", "onScreenEv", "64280KMfqIw", "Content-Ty", "msFullscre", "EZjZR", "onnect", "MIOVi", "RxBEE", "app", "toDataURL", "setText", "connect_er", "iframe", "reload", "sync", "decode", "outlined", "RkiNP", "click", "danger", "swipe", "ugLaJ", "setVideoMe", "PpjPw", "dJPNl", "iting for ", "xLmmF", "clear", "current", "unlockScre", "CMCgy", "IgPQP", "75pEAAYu", "isMobile", "false", "onSyncIFra", "cLfxw", "pFSvX", "borderRadi", "isDown", "OyJNh", "div", "RLAyE", "control", "headers", "join_room", "RUPXd", "yyXqv", "xFyfL", "shortcut", "index", "vuASs", "passwd", "PyiPu", "tabIndex", "fixTouch", "timeout", "POST", "uWQnh", "zoWvX", "shortcutEv", "Element", "findElemen", "disconnect", "Timeout wa", "tavlY", "reconnecti", "tvNAu", "autoResize", "YFLgj", "text", "canvas_", "yZhlv", "ror", "width", "screen_", "1507zGtzIb", "rootSize", "tListener", "connect", "fullscreen", "XhUIn", "change", "screenElem", "taskId", "5746617jvrgre", "start", "HjpLE", "YmNpO", "12MOFXRT", "oxROE", "test", "middle", "removeEven", "setPause", "set", "type_clien", "toast", "red", "RLkOq", "LQhXk", "Color", "otal retry", "children", "iStEP", "length", "rfsEa", "stener", "1804795XHWHQv", "n/json", "162780kAjpLX", "RlEmK", "COPY_TEXT", "een", "device_id", "enElement", "join", "XZcVJ", "isFullsCre", "value", "url", "background", "RqQPj", "HqtSq", "delete", "response", "height", "stop", "tCRiV", "CqhCV", "jVqeZ", "home", "Exceeded t", "get_video_", "orientatio", "setFullscr", "isChunk", "tion", "userAgent", "blue", "qZbWY", "force_disc", "now"];
  return ys = function() {
    return e;
  }, ys();
}
function Rn(e, r) {
  const t = ys();
  return Rn = function(n, o) {
    return n = n - 493, t[n];
  }, Rn(e, r);
}
const y4 = Wr((e, r) => {
  const t = Rn, { api: n, dataDevice: o, showAssistive: i, showDeviceId: a, autoResize: s, onSyncEvent: c, onSyncButton: l, maxWidth: u, codec: d, hardwareAcceleration: h, style: v, evtIsConnect: f } = e, g = o[t(580)], p = /iPhone|iPad|iPod|Android/i[t(557)](navigator[t(604)]), y = t(509), b = Pe(null), C = Pe(null), E = Pe(null), m = Pe(null), [_, w] = jt(null), [A, N] = jt(null), D = {};
  D[t(653)] = !1, D[t(505)] = !1;
  const [V, U] = jt(D), [L, z] = jt(null), [H, T] = jt(null), I = t(537) + g, P = t(541) + g, B = t(643) + "n_" + g, [W, Y] = jt([]), K = Pe(null), Z = Pe(null), G = Pe(null), te = Pe(null), ie = Pe({}), he = Pe(/* @__PURE__ */ new Map());
  ut(() => {
    N(a), f == null || f(L);
  }, [a, L]);
  const pe = (S) => {
    const $ = t;
    $(565) === $(538) ? _0x34456f() : Y((O) => [...O, S]);
  }, xe = (S) => {
    const $ = t;
    if ($(595) === $(595)) b[$(494)][$(609)]($(639), S), c == null || c(S);
    else return { base64: _0x43a06e[$(494)][$(685)]() };
  }, Se = (S) => new Promise(($) => setTimeout($, S));
  async function ae(S, $ = 5e3, O = 0) {
    const j = t;
    !S[j(550)] && (S[j(550)] = zm());
    const M = Date[j(608)]();
    let le = null;
    for (; ; ) {
      if (Date[j(608)]() - M > O) {
        const We = {};
        throw We[j(614)] = S[j(614)], We[j(656)] = !1, We[j(639)] = j(598) + j(568) + j(613) + " (" + O + j(644), le || We;
      }
      try {
        return await new Promise((je, et) => {
          const Ve = j, Le = setTimeout(() => {
            const ge = Rn;
            he[ge(494)][ge(590)](S[ge(550)]);
            const Ee = {};
            Ee[ge(614)] = S[ge(614)], Ee[ge(550)] = S[ge(550)], Ee[ge(656)] = !1, Ee[ge(639)] = ge(530) + ge(701) + ge(591), et(Ee);
          }, $);
          he[Ve(494)][Ve(561)](S[Ve(550)], (ge) => {
            const Ee = Ve;
            if (Ee(612) === Ee(612)) clearTimeout(Le), ge[Ee(656)] == !0 ? je(ge) : et(ge);
            else if (_0x568ce9[Ee(494)] = _0x1fd269, _0x597d3d[Ee(494)][Ee(560)](_0x5f08e7), !_0x5a0d51) {
              const ue = {};
              ue[Ee(614)] = Ee(501) + "me", _0x17dcbb[Ee(609)](Ee(639), ue);
            }
          }), b[Ve(494)][Ve(609)](Ve(639), S);
        });
      } catch (We) {
        if (j(547) !== j(596)) le = We, await Se(1e3);
        else {
          const je = _0x2378d3[j(494)][_0x1463a9[j(550)]][j(582)]("");
          _0x2912a0[j(650)] = _0x15838c[j(660)](je), delete _0x45ec73[j(494)][_0x1765d6[j(550)]];
        }
      }
    }
  }
  gi(r, () => ({ api: async function(S, $) {
    return await ae(S, $);
  }, sync: async function(S) {
    const $ = t;
    b[$(494)][$(609)]($(639), S);
  }, pause: function(S) {
    const $ = t;
    if (G[$(494)] = S, K[$(494)][$(560)](S), !S) {
      const O = {};
      O[$(614)] = $(501) + "me", ws[$(609)]($(639), O);
    }
  }, deviceId: function() {
    const S = t;
    if (S(503) === S(697)) _0x103b3f[S(550)] = _0x169099();
    else {
      const $ = {};
      return $.id = o[S(580)], $;
    }
  }, resolution: function() {
    const S = t;
    if (S(635) === S(699)) {
      _0x12e634[S(494)][S(590)](_0x4d8289[S(550)]);
      const $ = {};
      $[S(614)] = _0x489e8d[S(614)], $[S(550)] = _0x5c834f[S(550)], $[S(656)] = !1, $[S(639)] = S(530) + S(701) + S(591), _0x7a6884($);
    } else {
      const $ = Z[S(494)];
      return $[S(600) + "n"] = $[S(585)], delete $[S(614)], delete $[S(585)], delete $[S(550)], $;
    }
  }, sleep: async function(S) {
    return await Se(S);
  }, screenshot: function() {
    const S = t;
    if (S(572) === S(506)) {
      const $ = {};
      $[S(626)] = _0x1f8c70[S(626)], $[S(636)] = S(695), _0x5e6b0f($);
    } else return { base64: E[S(494)][S(685)]() };
  }, toast: async function(S, $) {
    return await ae(ur[t(563)](S), $);
  }, unlockScreen: async function(S) {
    return await ae(ur[t(495) + "en"](), S);
  }, pressHome: async function(S) {
    const $ = t, O = {};
    return O[$(614)] = $(526) + $(616), O[$(515)] = $(597), O[$(650)] = "", await ae(O, S);
  }, pressBack: async function(S) {
    const $ = t, O = {};
    return O[$(614)] = $(526) + $(616), O[$(515)] = $(666), O[$(650)] = "", await ae(O, S);
  }, pressSwitch: async function(S) {
    const $ = t;
    if ($(570) !== $(570)) _0x2f2635(_0x32177e);
    else {
      const O = {};
      return O[$(614)] = $(526) + $(616), O[$(515)] = $(624), O[$(650)] = "", await ae(O, S);
    }
  }, getClipboard: async function(S) {
    const $ = t;
    return await ae(ur[$(640)](gs[$(649)]), S);
  }, setClipboard: async function(S, $) {
    const O = t;
    return await ae(ur[O(640)](gs[O(561)], S), $);
  }, appStart: async function(S, $) {
    const O = t;
    if (O(625) === O(589)) {
      const j = {};
      throw j[O(614)] = _0x21ad9a[O(614)], j[O(656)] = !1, j[O(639)] = O(598) + O(568) + O(613) + " (" + _0x21b0b8 + O(644), _0x4cb01b || j;
    } else return await ae(ur[O(684)](hn[O(552)], S), $);
  }, appStop: async function(S, $) {
    const O = t;
    if (O(611) === O(611)) return await ae(ur[O(684)](hn[O(593)], S), $);
    {
      _0x40a1af[O(494)] = _0x2ee7dd, _0x4e0d24[O(609)](O(639), { action: O(641), ts: _0x3a7ec8[O(608)]() });
      const j = {};
      j[O(614)] = O(676) + O(616), _0x7e9bea[O(609)](O(639), j);
    }
  }, appClear: async function(S, $) {
    const O = t;
    return await ae(ur[O(684)](hn[O(493)], S), $);
  }, appInfo: async function(S, $) {
    const O = t;
    return await ae(ur[O(684)](hn[O(667)], S), $);
  }, click: async function(S, $, O, j) {
    return await ae(ur[t(694)](S, $, 1), j);
  }, swipe: async function(S, $, O, j, M = 1, le) {
    return await ae(ur[t(696)](S, $, O, j, M), le);
  }, keyCode: async function(S, $, O, j) {
    const M = t;
    return await ae(ur[M(658)](xs[M(652)], S, $, O), j);
  }, keyText: async function(S, $) {
    const O = t;
    return await ae(ur[O(658)](xs[O(536)], S), $);
  }, setText: async function(S, $) {
    const O = t;
    if (O(702) !== O(702)) {
      const j = { ..._0x5b9e44 };
      j[O(653)] = !1, _0x1d99bc(j);
    } else return await ae(ur[O(686)](S), $);
  }, findElements: function(S, $) {
    return new xh(S, $, ae);
  }, dumpJson: async function() {
    const S = t;
    if (S(645) !== S(645)) _0x58225c[S(640)][S(631)](_0x106ad6[S(536)]);
    else
      return await new xh(S(630), "", ae)[S(630)]();
  } })), ut(() => {
    (async () => {
      const S = Rn;
      try {
        const $ = {};
        $[S(678) + "pe"] = S(622) + S(575);
        const O = {};
        O[S(580)] = o[S(580)], O[S(672)] = o[S(518)];
        const j = {};
        j[S(586)] = n, j[S(634)] = S(523), j[S(522)] = 1e4, j[S(510)] = $, j[S(650)] = O;
        const M = j, le = await T6(M);
        w(le[S(650)]);
      } catch ($) {
        const O = {};
        O[S(626)] = $, O[S(636)] = S(695), pe(O);
      }
    })();
  }, [H]), ut(() => {
    const S = t;
    if (b[S(494)] || !_) return;
    const $ = {};
    $[S(532) + "on"] = !1;
    const O = Sa(_, $);
    return O.on(S(545), () => {
      const j = S, M = {};
      M[j(614)] = j(545), M[j(562) + "t"] = y, M[j(580)] = o[j(580)], M[j(499)] = p, M[j(518)] = o[j(518)], O[j(609)](j(511), M);
    }), O.on(S(511), (j) => {
      const M = S;
      if (M(671) === M(671))
        if (j[M(656)] == !0) {
          b[M(494)] = O, O[M(609)](M(639), { action: M(641), ts: Date[M(608)]() });
          const le = {};
          le[M(614)] = M(676) + M(616), O[M(609)](M(639), le);
        } else {
          const le = {};
          le[M(626)] = j[M(626)], le[M(636)] = M(695), pe(le);
        }
      else _0x4236e7[M(494)][M(691)](_0x1359e1);
    }), O.on(S(607) + S(681), (j) => {
      const M = S;
      te[M(494)] = !0;
    }), O.on(S(665), (j) => {
      const M = S;
      K[M(494)][M(691)](j);
    }), O.on(S(617), (j) => {
      const M = S;
      if (j)
        if (M(517) === M(517)) {
          if (K[M(494)][M(698) + "ta"](j), !K[M(494)][M(688)])
            if (M(508) === M(533)) {
              const le = {};
              le[M(626)] = _0x15826e, le[M(636)] = M(695), _0x2c5301(le);
            } else {
              const le = {};
              le[M(614)] = M(501) + "me", O[M(609)](M(639), le);
            }
        } else _0x1f0329(_0x1aad8b);
      else if (M(633) === M(633)) {
        const le = {};
        le[M(614)] = M(599) + M(629), O[M(609)](M(617), le);
      } else {
        const le = {};
        le[M(614)] = M(501) + "me", _0x44069[M(609)](M(639), le);
      }
    }), O.on(S(639), (j) => {
      var le;
      const M = S;
      if ((j[M(614)] == M(578) || j[M(614)] == M(526) + M(616)) && j[M(536)][M(571)] > 0 ? M(525) === M(525) ? navigator[M(640)][M(631)](j[M(536)]) : _0x234af0[M(559) + M(544)](M(546) + M(548), _0x4f41ff) : j[M(614)] == M(600) + "n" && (Z[M(494)] = j, K[M(494)][M(651) + M(603)](j[M(585)]), (le = m[M(494)]) == null || le[M(521)](j[M(585)]), !s && K[M(494)][M(638)](u)), j[M(550)]) {
        if (j[M(614)] == M(528) + "ts")
          if (M(512) === M(512)) {
            if (!ie[M(494)][j[M(550)]])
              if (M(531) !== M(531)) {
                const We = {};
                return We.id = _0x6cdf04[M(580)], We;
              } else ie[M(494)][j[M(550)]] = [];
            if (ie[M(494)][j[M(550)]][j[M(516)]] = j[M(650)], j[M(602)]) return;
            if (!j[M(602)]) {
              const We = ie[M(494)][j[M(550)]][M(582)]("");
              j[M(650)] = JSON[M(660)](We), delete ie[M(494)][j[M(550)]];
            }
          } else _0x26037d[M(529)]();
        const Je = he[M(494)][M(649)](j[M(550)]);
        Je && (Je(j), he[M(494)][M(590)](j[M(550)]));
      }
    }), O.on(S(687) + S(539), (j) => {
      const M = S, le = {};
      le[M(626)] = j, le[M(636)] = M(695), pe(le);
    }), O.on(S(529), (j) => {
      const M = S, le = {};
      le[M(626)] = M(673) + M(669), le[M(636)] = M(618), pe(le);
    }), () => {
      O && O[S(529)]();
    };
  }, [_]), ut(() => {
    const S = t;
    if (S(535) !== S(637)) E[S(494)] && (K[S(494)] = new U6(p, u, E, d, h, z));
    else {
      const $ = {};
      $[S(614)] = S(545), $[S(562) + "t"] = _0x17a356, $[S(580)] = _0x557534[S(580)], $[S(499)] = _0x4a18b8, $[S(518)] = _0x561664[S(518)], _0xc11fc0[S(609)](S(511), $);
    }
  }, [H]), ut(() => {
    const S = t;
    if (S(554) !== S(615)) {
      const $ = () => {
        const O = S, j = document[O(546) + O(527)] || document[O(632) + O(549) + O(616)] || document[O(661) + O(674)] || document[O(679) + O(581)];
        K[O(494)][O(584) + "en"] = !!j, m[O(494)][O(601) + O(579)](!!j), m[O(494)][O(521)]();
      };
      return document[S(619) + S(573)](S(546) + S(548), $), () => {
        const O = S;
        O(682) === O(682) ? document[O(559) + O(544)](O(546) + O(548), $) : _0x48707b[O(494)][O(609)](O(639), { action: O(641), ts: _0x181721[O(608)]() });
      };
    } else {
      if (!_0x4e68e7[S(494)][_0xa5e0e6[S(550)]] && (_0x33f422[S(494)][_0x92075f[S(550)]] = []), _0x521bf8[S(494)][_0x1e51e8[S(550)]][_0x2011e5[S(516)]] = _0x19595a[S(650)], _0x203922[S(602)]) return;
      if (!_0x15202c[S(602)]) {
        const $ = _0x55f34f[S(494)][_0x2cc48b[S(550)]][S(582)]("");
        _0x113f4e[S(650)] = _0x5f5534[S(660)]($), delete _0xbc422f[S(494)][_0x41579c[S(550)]];
      }
    }
  }, [H]), ut(() => {
    const S = t;
    if (S(659) === S(566))
      if (_0x2c0844[S(656)] == !0) {
        _0x14c46d[S(494)] = _0xad270, _0x542edf[S(609)](S(639), { action: S(641), ts: _0x3e3469[S(608)]() });
        const $ = {};
        $[S(614)] = S(676) + S(616), _0xed9326[S(609)](S(639), $);
      } else {
        const $ = {};
        $[S(626)] = _0x3efe84[S(626)], $[S(636)] = S(695), _0xbcb134($);
      }
    else {
      let $;
      const O = () => {
        const j = S;
        if (j(620) === j(620)) {
          if (K[j(494)] && (j(594) === j(594) ? K[j(494)][j(534)]() : (_0x4eedec[j(494)][j(529)](), _0x3696de[j(494)] = null)), !s && K[j(494)][j(543)])
            if (j(683) === j(646)) _0x2187a2((M) => [...M, _0x496b96]);
            else {
              K[j(494)][j(638)](u), cancelAnimationFrame($);
              return;
            }
          $ = requestAnimationFrame(O);
        } else {
          const M = _0xd99266[j(494)];
          return M[j(600) + "n"] = M[j(585)], delete M[j(614)], delete M[j(585)], delete M[j(550)], M;
        }
      };
      return O(), () => cancelAnimationFrame($);
    }
  }, [H]), ut(() => {
    var $;
    const S = t;
    S(583) !== S(588) ? K[S(494)] && !s && (S(524) === S(524) ? K[S(494)][S(638)](u) : _0x15bf40(!_0xf13e91)) : (_0x259139[S(494)] = _0x215a14, _0x3d6fde[S(494)][S(651) + S(603)](_0x517677[S(585)]), ($ = _0x51a1e3[S(494)]) == null || $[S(521)](_0x38c09e[S(585)]), !_0x21d094 && _0x407038[S(494)][S(638)](_0x49f3b0));
  }, [u]), ut(() => {
    let S;
    return S = setInterval(() => {
      const $ = Rn;
      if (b[$(494)])
        if ($(514) === $(514)) b[$(494)][$(609)]($(639), { action: $(641), ts: Date[$(608)]() });
        else {
          let O;
          return O = _0x57d648(() => {
            const j = $;
            _0x3e14e4[j(494)] && _0xdff58f[j(494)][j(609)](j(639), { action: j(641), ts: _0x44ee0b[j(608)]() });
          }, 1e4), () => _0x177f6a(O);
        }
    }, 1e4), () => clearInterval(S);
  }, [H]);
  const se = () => {
    const S = t;
    if (S(556) !== S(606)) {
      if (te[S(494)] = !1, b[S(494)] && (S(502) === S(502) ? (b[S(494)][S(529)](), b[S(494)] = null) : _0x44dd91[S(494)][S(543)] = null), K[S(494)])
        if (S(553) !== S(496)) K[S(494)][S(543)] = null;
        else {
          const $ = _0xca09e2[S(546) + S(527)] || _0x2e4568[S(632) + S(549) + S(616)] || _0x1e6e99[S(661) + S(674)] || _0x1eb310[S(679) + S(581)];
          _0x5ef864[S(494)][S(584) + "en"] = !!$, _0x184c1c[S(494)][S(601) + S(579)](!!$), _0x346c41[S(494)][S(521)]();
        }
      w(null), Y([]), z(null), T(Date[S(608)]());
    } else {
      const $ = {};
      $[S(614)] = S(599) + S(629), _0x5cf584[S(609)](S(617), $);
    }
  }, _e = {};
  _e[t(569)] = o[t(580)];
  const re = {};
  re[t(623)] = t(675);
  const ve = {};
  ve[t(623)] = t(675);
  const ce = {};
  ce[t(623)] = t(675);
  const be = {};
  be[t(592)] = 0, be[t(540)] = 0, be[t(587) + t(567)] = t(564);
  const Ce = {};
  Ce[t(569)] = o[t(580)];
  const we = {};
  we[t(649)] = V, we[t(561)] = U;
  const ze = {};
  ze.id = I, ze[t(520)] = "0", ze[t(654)] = t(500);
  const Te = {};
  return Te[t(655)] = 5, Te[t(610) + "om"] = 5, Te[t(504) + "us"] = 10, de.jsx(a1, { id: B, style: v, children: W[t(571)] == 0 ? de.jsxs(de.Fragment, { children: [!L && de.jsxs(de.Fragment, { children: [A && de.jsx(Kd, _e), de.jsxs(am, { align: t(642), gap: t(558), children: [de.jsx(ri, re), de.jsx(ri, ve), de.jsx(ri, ce)] })] }), de.jsxs(s1, { ref: C, id: P, style: L ? {} : be, children: [A && de.jsx(Kd, Ce), i ? de.jsx(W6, { maxWidth: u, status: we, ref: m, canvasRef: E, displayId: g, isMobile: p, isShowDeviceId: A, onSenData: (S, $) => {
    const O = t;
    if (!G[O(494)])
      if ($[O(515)] === O(580))
        if (O(680) === O(700)) {
          let j;
          const M = () => {
            const le = O;
            if (_0x3a04e4[le(494)] && _0x5e9223[le(494)][le(534)](), !_0xb5ed6d && _0xa76ef8[le(494)][le(543)]) {
              _0xd67db6[le(494)][le(638)](_0x32911d), _0x533d96(j);
              return;
            }
            j = _0x4e9849(M);
          };
          return M(), () => _0x49bd67(j);
        } else N(!A);
      else if ($[O(515)] === O(690)) O(577) !== O(577) ? (_0x139862(_0x145df4), _0x1db2f1[O(656)] == !0 ? _0x11967e(_0x4c1bcb) : _0x37db07(_0x1617b8)) : l == null || l(o[O(580)]);
      else if ($[O(515)] === O(689))
        if (O(513) !== O(513)) {
          if (_0xd0d5ab[O(494)][O(698) + "ta"](_0x399590), !_0x20b924[O(494)][O(688)]) {
            const j = {};
            j[O(614)] = O(501) + "me", _0x207038[O(609)](O(639), j);
          }
        } else se();
      else if ($[O(515)] === O(621)) {
        const j = {};
        j[O(614)] = O(676) + O(616), b[O(494)][O(609)](O(639), j);
      } else O(497) !== O(627) ? xe($) : _0xfcb7b8[O(494)] = !0;
  } }) : null, de.jsx(L6, { canvasContent: ze, canvasRef: E, isMobile: p, assistive: V, onRemoteEvent: (S, $) => {
    const O = t;
    if (S === Dm)
      if (O(693) !== O(519)) {
        const j = { ...V };
        j[O(653)] = !1, U(j);
      } else {
        const j = {};
        j[O(614)] = O(676) + O(616), _0x5540d6[O(494)][O(609)](O(639), j);
      }
    else if (O(664) !== O(664)) {
      if (_0x2cc32d[O(494)] && _0x1f9cfc[O(494)][O(534)](), !_0x126ca9 && _0x200c51[O(494)][O(543)]) {
        _0x2633a9[O(494)][O(638)](_0x394846), _0xfe020(_0x1319a9);
        return;
      }
      _0x958a05 = _0x4ac3d8(_0x14b52b);
    } else xe($);
  } })] })] }) : de.jsx(t(507), { style: { textAlign: t(642), padding: 5, width: u }, children: de.jsxs(vd, { direction: t(648), children: [W == null ? void 0 : W[t(663)]((S, $) => de.jsx($i[t(668)], { type: S[t(636)], children: S[t(626)] }, $)), de.jsx(Zs, { size: t(670), style: Te, variant: t(692), color: t(605), icon: de.jsx(Sp, {}), onClick: se, children: o[t(580)] })] }) }) });
});
function ju(e, r) {
  var t = Ss();
  return ju = function(n, o) {
    n = n - 225;
    var i = t[n];
    return i;
  }, ju(e, r);
}
(function(e, r) {
  for (var t = ju, n = e(); ; )
    try {
      var o = parseInt(t(226)) / 1 * (-parseInt(t(228)) / 2) + -parseInt(t(234)) / 3 * (-parseInt(t(233)) / 4) + -parseInt(t(232)) / 5 * (-parseInt(t(235)) / 6) + -parseInt(t(225)) / 7 * (-parseInt(t(230)) / 8) + -parseInt(t(227)) / 9 + -parseInt(t(231)) / 10 + -parseInt(t(229)) / 11;
      if (o === r) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ss, 957450);
function Ss() {
  var e = ["344oDNCrb", "4423040FeRSQt", "8549095KiusKH", "7639804GAaClg", "3oQnCWx", "6vEBiWl", "121681UMjtgW", "3piaQAM", "1302489fvrlHs", "612562YHhLbV", "20943131Juqhmx"];
  return Ss = function() {
    return e;
  }, Ss();
}
export {
  y4 as ViewRP
};
