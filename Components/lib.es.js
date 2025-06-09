var fd = Object.defineProperty;
var dd = (s, t, e) => t in s ? fd(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var Wt = (s, t, e) => dd(s, typeof t != "symbol" ? t + "" : t, e);
import * as D from "react";
import Je, { useDebugValue as Ra, createElement as hd, useRef as it, useContext as vn, isValidElement as pd, version as xd, createContext as Js, useLayoutEffect as md, useEffect as bt, useState as yt, forwardRef as vl, useImperativeHandle as yl } from "react";
import ka from "react-dom";
var Sr = Ao;
(function(s, t) {
  for (var e = Ao, a = s(); ; )
    try {
      var c = parseInt(e(201)) / 1 + -parseInt(e(210)) / 2 * (parseInt(e(204)) / 3) + parseInt(e(196)) / 4 + parseInt(e(191)) / 5 * (-parseInt(e(188)) / 6) + parseInt(e(198)) / 7 + -parseInt(e(182)) / 8 * (parseInt(e(184)) / 9) + parseInt(e(211)) / 10 * (parseInt(e(179)) / 11);
      if (c === t) break;
      a.push(a.shift());
    } catch {
      a.push(a.shift());
    }
})(To, 302483);
typeof globalThis !== Sr(181) || typeof window !== Sr(181) || (typeof global !== Sr(181) ? global : Sr(181));
function gd(s) {
  var t = Sr;
  return s && s[t(195)] && Object[t(200)][t(212) + t(199)][t(206)](s, t(180)) ? s[t(180)] : s;
}
function Ao(s, t) {
  var e = To();
  return Ao = function(a, c) {
    a = a - 179;
    var u = e[a];
    return u;
  }, Ao(s, t);
}
function To() {
  var s = ["UTDZX", "40RchVYJ", "function", "ertyDescri", "get", "__esModule", "856332gURkbl", "defineProp", "753466VGUXBt", "erty", "prototype", "426127LcAEMM", "ptor", "constructo", "30fTatsM", "apply", "call", "sAaEk", "construct", "sKzHW", "120490BSoVPf", "7874190CIIlEe", "hasOwnProp", "11JRyRWF", "default", "undefined", "8LkFrVJ", "keys", "5036166LcxrCT", "value", "forEach", "length", "53070vNUhtr", "getOwnProp"];
  return To = function() {
    return s;
  }, To();
}
var Hr = { exports: {} }, pr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pa;
function vd() {
  if (Pa) return pr;
  Pa = 1;
  var s = Je, t = Symbol.for("react.element"), e = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, c = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(x, v, y) {
    var S, w = {}, b = null, P = null;
    y !== void 0 && (b = "" + y), v.key !== void 0 && (b = "" + v.key), v.ref !== void 0 && (P = v.ref);
    for (S in v) a.call(v, S) && !u.hasOwnProperty(S) && (w[S] = v[S]);
    if (x && x.defaultProps) for (S in v = x.defaultProps, v) w[S] === void 0 && (w[S] = v[S]);
    return { $$typeof: t, type: x, key: b, ref: P, props: w, _owner: c.current };
  }
  return pr.Fragment = e, pr.jsx = f, pr.jsxs = f, pr;
}
var xr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _a;
function yd() {
  return _a || (_a = 1, process.env.NODE_ENV !== "production" && function() {
    var s = Je, t = Symbol.for("react.element"), e = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), x = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), S = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), O = Symbol.iterator, C = "@@iterator";
    function E(A) {
      if (A === null || typeof A != "object")
        return null;
      var W = O && A[O] || A[C];
      return typeof W == "function" ? W : null;
    }
    var L = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function I(A) {
      {
        for (var W = arguments.length, G = new Array(W > 1 ? W - 1 : 0), ue = 1; ue < W; ue++)
          G[ue - 1] = arguments[ue];
        T("error", A, G);
      }
    }
    function T(A, W, G) {
      {
        var ue = L.ReactDebugCurrentFrame, _e = ue.getStackAddendum();
        _e !== "" && (W += "%s", G = G.concat([_e]));
        var Ne = G.map(function(Te) {
          return String(Te);
        });
        Ne.unshift("Warning: " + W), Function.prototype.apply.call(console[A], console, Ne);
      }
    }
    var F = !1, _ = !1, V = !1, M = !1, Y = !1, J;
    J = Symbol.for("react.module.reference");
    function ce(A) {
      return !!(typeof A == "string" || typeof A == "function" || A === a || A === u || Y || A === c || A === y || A === S || M || A === P || F || _ || V || typeof A == "object" && A !== null && (A.$$typeof === b || A.$$typeof === w || A.$$typeof === f || A.$$typeof === x || A.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      A.$$typeof === J || A.getModuleId !== void 0));
    }
    function Se(A, W, G) {
      var ue = A.displayName;
      if (ue)
        return ue;
      var _e = W.displayName || W.name || "";
      return _e !== "" ? G + "(" + _e + ")" : G;
    }
    function fe(A) {
      return A.displayName || "Context";
    }
    function K(A) {
      if (A == null)
        return null;
      if (typeof A.tag == "number" && I("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof A == "function")
        return A.displayName || A.name || null;
      if (typeof A == "string")
        return A;
      switch (A) {
        case a:
          return "Fragment";
        case e:
          return "Portal";
        case u:
          return "Profiler";
        case c:
          return "StrictMode";
        case y:
          return "Suspense";
        case S:
          return "SuspenseList";
      }
      if (typeof A == "object")
        switch (A.$$typeof) {
          case x:
            var W = A;
            return fe(W) + ".Consumer";
          case f:
            var G = A;
            return fe(G._context) + ".Provider";
          case v:
            return Se(A, A.render, "ForwardRef");
          case w:
            var ue = A.displayName || null;
            return ue !== null ? ue : K(A.type) || "Memo";
          case b: {
            var _e = A, Ne = _e._payload, Te = _e._init;
            try {
              return K(Te(Ne));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var oe = Object.assign, re = 0, ge, he, xe, me, pe, ae, te;
    function le() {
    }
    le.__reactDisabledLog = !0;
    function ve() {
      {
        if (re === 0) {
          ge = console.log, he = console.info, xe = console.warn, me = console.error, pe = console.group, ae = console.groupCollapsed, te = console.groupEnd;
          var A = {
            configurable: !0,
            enumerable: !0,
            value: le,
            writable: !0
          };
          Object.defineProperties(console, {
            info: A,
            log: A,
            warn: A,
            error: A,
            group: A,
            groupCollapsed: A,
            groupEnd: A
          });
        }
        re++;
      }
    }
    function ye() {
      {
        if (re--, re === 0) {
          var A = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: oe({}, A, {
              value: ge
            }),
            info: oe({}, A, {
              value: he
            }),
            warn: oe({}, A, {
              value: xe
            }),
            error: oe({}, A, {
              value: me
            }),
            group: oe({}, A, {
              value: pe
            }),
            groupCollapsed: oe({}, A, {
              value: ae
            }),
            groupEnd: oe({}, A, {
              value: te
            })
          });
        }
        re < 0 && I("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Re = L.ReactCurrentDispatcher, U;
    function Z(A, W, G) {
      {
        if (U === void 0)
          try {
            throw Error();
          } catch (_e) {
            var ue = _e.stack.trim().match(/\n( *(at )?)/);
            U = ue && ue[1] || "";
          }
        return `
` + U + A;
      }
    }
    var B = !1, H;
    {
      var N = typeof WeakMap == "function" ? WeakMap : Map;
      H = new N();
    }
    function X(A, W) {
      if (!A || B)
        return "";
      {
        var G = H.get(A);
        if (G !== void 0)
          return G;
      }
      var ue;
      B = !0;
      var _e = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ne;
      Ne = Re.current, Re.current = null, ve();
      try {
        if (W) {
          var Te = function() {
            throw Error();
          };
          if (Object.defineProperty(Te.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Te, []);
            } catch (vt) {
              ue = vt;
            }
            Reflect.construct(A, [], Te);
          } else {
            try {
              Te.call();
            } catch (vt) {
              ue = vt;
            }
            A.call(Te.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (vt) {
            ue = vt;
          }
          A();
        }
      } catch (vt) {
        if (vt && ue && typeof vt.stack == "string") {
          for (var Ce = vt.stack.split(`
`), ut = ue.stack.split(`
`), qe = Ce.length - 1, $e = ut.length - 1; qe >= 1 && $e >= 0 && Ce[qe] !== ut[$e]; )
            $e--;
          for (; qe >= 1 && $e >= 0; qe--, $e--)
            if (Ce[qe] !== ut[$e]) {
              if (qe !== 1 || $e !== 1)
                do
                  if (qe--, $e--, $e < 0 || Ce[qe] !== ut[$e]) {
                    var Xe = `
` + Ce[qe].replace(" at new ", " at ");
                    return A.displayName && Xe.includes("<anonymous>") && (Xe = Xe.replace("<anonymous>", A.displayName)), typeof A == "function" && H.set(A, Xe), Xe;
                  }
                while (qe >= 1 && $e >= 0);
              break;
            }
        }
      } finally {
        B = !1, Re.current = Ne, ye(), Error.prepareStackTrace = _e;
      }
      var Fn = A ? A.displayName || A.name : "", En = Fn ? Z(Fn) : "";
      return typeof A == "function" && H.set(A, En), En;
    }
    function Q(A, W, G) {
      return X(A, !1);
    }
    function ee(A) {
      var W = A.prototype;
      return !!(W && W.isReactComponent);
    }
    function ct(A, W, G) {
      if (A == null)
        return "";
      if (typeof A == "function")
        return X(A, ee(A));
      if (typeof A == "string")
        return Z(A);
      switch (A) {
        case y:
          return Z("Suspense");
        case S:
          return Z("SuspenseList");
      }
      if (typeof A == "object")
        switch (A.$$typeof) {
          case v:
            return Q(A.render);
          case w:
            return ct(A.type, W, G);
          case b: {
            var ue = A, _e = ue._payload, Ne = ue._init;
            try {
              return ct(Ne(_e), W, G);
            } catch {
            }
          }
        }
      return "";
    }
    var Ve = Object.prototype.hasOwnProperty, xt = {}, Ct = L.ReactDebugCurrentFrame;
    function mt(A) {
      if (A) {
        var W = A._owner, G = ct(A.type, A._source, W ? W.type : null);
        Ct.setExtraStackFrame(G);
      } else
        Ct.setExtraStackFrame(null);
    }
    function It(A, W, G, ue, _e) {
      {
        var Ne = Function.call.bind(Ve);
        for (var Te in A)
          if (Ne(A, Te)) {
            var Ce = void 0;
            try {
              if (typeof A[Te] != "function") {
                var ut = Error((ue || "React class") + ": " + G + " type `" + Te + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof A[Te] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ut.name = "Invariant Violation", ut;
              }
              Ce = A[Te](W, Te, ue, G, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (qe) {
              Ce = qe;
            }
            Ce && !(Ce instanceof Error) && (mt(_e), I("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ue || "React class", G, Te, typeof Ce), mt(null)), Ce instanceof Error && !(Ce.message in xt) && (xt[Ce.message] = !0, mt(_e), I("Failed %s type: %s", G, Ce.message), mt(null));
          }
      }
    }
    var Ue = Array.isArray;
    function Be(A) {
      return Ue(A);
    }
    function rt(A) {
      {
        var W = typeof Symbol == "function" && Symbol.toStringTag, G = W && A[Symbol.toStringTag] || A.constructor.name || "Object";
        return G;
      }
    }
    function At(A) {
      try {
        return gt(A), !1;
      } catch {
        return !0;
      }
    }
    function gt(A) {
      return "" + A;
    }
    function Jt(A) {
      if (At(A))
        return I("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rt(A)), gt(A);
    }
    var Qt = L.ReactCurrentOwner, un = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, en, tn;
    function $(A) {
      if (Ve.call(A, "ref")) {
        var W = Object.getOwnPropertyDescriptor(A, "ref").get;
        if (W && W.isReactWarning)
          return !1;
      }
      return A.ref !== void 0;
    }
    function R(A) {
      if (Ve.call(A, "key")) {
        var W = Object.getOwnPropertyDescriptor(A, "key").get;
        if (W && W.isReactWarning)
          return !1;
      }
      return A.key !== void 0;
    }
    function Oe(A, W) {
      typeof A.ref == "string" && Qt.current;
    }
    function ke(A, W) {
      {
        var G = function() {
          en || (en = !0, I("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", W));
        };
        G.isReactWarning = !0, Object.defineProperty(A, "key", {
          get: G,
          configurable: !0
        });
      }
    }
    function Ee(A, W) {
      {
        var G = function() {
          tn || (tn = !0, I("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", W));
        };
        G.isReactWarning = !0, Object.defineProperty(A, "ref", {
          get: G,
          configurable: !0
        });
      }
    }
    var de = function(A, W, G, ue, _e, Ne, Te) {
      var Ce = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: A,
        key: W,
        ref: G,
        props: Te,
        // Record the component responsible for creating this element.
        _owner: Ne
      };
      return Ce._store = {}, Object.defineProperty(Ce._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ce, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ue
      }), Object.defineProperty(Ce, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _e
      }), Object.freeze && (Object.freeze(Ce.props), Object.freeze(Ce)), Ce;
    };
    function Fe(A, W, G, ue, _e) {
      {
        var Ne, Te = {}, Ce = null, ut = null;
        G !== void 0 && (Jt(G), Ce = "" + G), R(W) && (Jt(W.key), Ce = "" + W.key), $(W) && (ut = W.ref, Oe(W, _e));
        for (Ne in W)
          Ve.call(W, Ne) && !un.hasOwnProperty(Ne) && (Te[Ne] = W[Ne]);
        if (A && A.defaultProps) {
          var qe = A.defaultProps;
          for (Ne in qe)
            Te[Ne] === void 0 && (Te[Ne] = qe[Ne]);
        }
        if (Ce || ut) {
          var $e = typeof A == "function" ? A.displayName || A.name || "Unknown" : A;
          Ce && ke(Te, $e), ut && Ee(Te, $e);
        }
        return de(A, Ce, ut, _e, ue, Qt.current, Te);
      }
    }
    var Ie = L.ReactCurrentOwner, Nt = L.ReactDebugCurrentFrame;
    function Qe(A) {
      if (A) {
        var W = A._owner, G = ct(A.type, A._source, W ? W.type : null);
        Nt.setExtraStackFrame(G);
      } else
        Nt.setExtraStackFrame(null);
    }
    var jt;
    jt = !1;
    function wn(A) {
      return typeof A == "object" && A !== null && A.$$typeof === t;
    }
    function Ge() {
      {
        if (Ie.current) {
          var A = K(Ie.current.type);
          if (A)
            return `

Check the render method of \`` + A + "`.";
        }
        return "";
      }
    }
    function ht(A) {
      return "";
    }
    var lt = {};
    function qt(A) {
      {
        var W = Ge();
        if (!W) {
          var G = typeof A == "string" ? A : A.displayName || A.name;
          G && (W = `

Check the top-level render call using <` + G + ">.");
        }
        return W;
      }
    }
    function pt(A, W) {
      {
        if (!A._store || A._store.validated || A.key != null)
          return;
        A._store.validated = !0;
        var G = qt(W);
        if (lt[G])
          return;
        lt[G] = !0;
        var ue = "";
        A && A._owner && A._owner !== Ie.current && (ue = " It was passed a child from " + K(A._owner.type) + "."), Qe(A), I('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', G, ue), Qe(null);
      }
    }
    function fn(A, W) {
      {
        if (typeof A != "object")
          return;
        if (Be(A))
          for (var G = 0; G < A.length; G++) {
            var ue = A[G];
            wn(ue) && pt(ue, W);
          }
        else if (wn(A))
          A._store && (A._store.validated = !0);
        else if (A) {
          var _e = E(A);
          if (typeof _e == "function" && _e !== A.entries)
            for (var Ne = _e.call(A), Te; !(Te = Ne.next()).done; )
              wn(Te.value) && pt(Te.value, W);
        }
      }
    }
    function Ot(A) {
      {
        var W = A.type;
        if (W == null || typeof W == "string")
          return;
        var G;
        if (typeof W == "function")
          G = W.propTypes;
        else if (typeof W == "object" && (W.$$typeof === v || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        W.$$typeof === w))
          G = W.propTypes;
        else
          return;
        if (G) {
          var ue = K(W);
          It(G, A.props, "prop", ue, A);
        } else if (W.PropTypes !== void 0 && !jt) {
          jt = !0;
          var _e = K(W);
          I("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _e || "Unknown");
        }
        typeof W.getDefaultProps == "function" && !W.getDefaultProps.isReactClassApproved && I("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function dn(A) {
      {
        for (var W = Object.keys(A.props), G = 0; G < W.length; G++) {
          var ue = W[G];
          if (ue !== "children" && ue !== "key") {
            Qe(A), I("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ue), Qe(null);
            break;
          }
        }
        A.ref !== null && (Qe(A), I("Invalid attribute `ref` supplied to `React.Fragment`."), Qe(null));
      }
    }
    var hr = {};
    function zr(A, W, G, ue, _e, Ne) {
      {
        var Te = ce(A);
        if (!Te) {
          var Ce = "";
          (A === void 0 || typeof A == "object" && A !== null && Object.keys(A).length === 0) && (Ce += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ut = ht();
          ut ? Ce += ut : Ce += Ge();
          var qe;
          A === null ? qe = "null" : Be(A) ? qe = "array" : A !== void 0 && A.$$typeof === t ? (qe = "<" + (K(A.type) || "Unknown") + " />", Ce = " Did you accidentally export a JSX literal instead of a component?") : qe = typeof A, I("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", qe, Ce);
        }
        var $e = Fe(A, W, G, _e, Ne);
        if ($e == null)
          return $e;
        if (Te) {
          var Xe = W.children;
          if (Xe !== void 0)
            if (ue)
              if (Be(Xe)) {
                for (var Fn = 0; Fn < Xe.length; Fn++)
                  fn(Xe[Fn], A);
                Object.freeze && Object.freeze(Xe);
              } else
                I("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              fn(Xe, A);
        }
        if (Ve.call(W, "key")) {
          var En = K(A), vt = Object.keys(W).filter(function(ud) {
            return ud !== "key";
          }), Ei = vt.length > 0 ? "{key: someKey, " + vt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!hr[En + Ei]) {
            var ld = vt.length > 0 ? "{" + vt.join(": ..., ") + ": ...}" : "{}";
            I(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ei, En, ld, En), hr[En + Ei] = !0;
          }
        }
        return A === a ? dn($e) : Ot($e), $e;
      }
    }
    function ot(A, W, G) {
      return zr(A, W, G, !0);
    }
    function Vr(A, W, G) {
      return zr(A, W, G, !1);
    }
    var wi = Vr, We = ot;
    xr.Fragment = a, xr.jsx = wi, xr.jsxs = We;
  }()), xr;
}
var Ia;
function bd() {
  return Ia || (Ia = 1, process.env.NODE_ENV === "production" ? Hr.exports = vd() : Hr.exports = yd()), Hr.exports;
}
var ie = bd(), St = function() {
  return St = Object.assign || function(t) {
    for (var e, a = 1, c = arguments.length; a < c; a++) {
      e = arguments[a];
      for (var u in e) Object.prototype.hasOwnProperty.call(e, u) && (t[u] = e[u]);
    }
    return t;
  }, St.apply(this, arguments);
};
function $n(s, t, e) {
  if (e || arguments.length === 2) for (var a = 0, c = t.length, u; a < c; a++)
    (u || !(a in t)) && (u || (u = Array.prototype.slice.call(t, 0, a)), u[a] = t[a]);
  return s.concat(u || Array.prototype.slice.call(t));
}
function Sd(s) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(e) {
    return t[e] === void 0 && (t[e] = s(e)), t[e];
  };
}
var wd = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ed = /* @__PURE__ */ Sd(
  function(s) {
    return wd.test(s) || s.charCodeAt(0) === 111 && s.charCodeAt(1) === 110 && s.charCodeAt(2) < 91;
  }
  /* Z+1 */
), He = "-ms-", Cr = "-moz-", Me = "-webkit-", bl = "comm", Jo = "rule", Qs = "decl", Cd = "@import", Sl = "@keyframes", Ad = "@layer", wl = Math.abs, ea = String.fromCharCode, Xi = Object.assign;
function Td(s, t) {
  return at(s, 0) ^ 45 ? (((t << 2 ^ at(s, 0)) << 2 ^ at(s, 1)) << 2 ^ at(s, 2)) << 2 ^ at(s, 3) : 0;
}
function El(s) {
  return s.trim();
}
function sn(s, t) {
  return (s = t.exec(s)) ? s[0] : s;
}
function we(s, t, e) {
  return s.replace(t, e);
}
function io(s, t, e) {
  return s.indexOf(t, e);
}
function at(s, t) {
  return s.charCodeAt(t) | 0;
}
function Xn(s, t, e) {
  return s.slice(t, e);
}
function Yt(s) {
  return s.length;
}
function Cl(s) {
  return s.length;
}
function wr(s, t) {
  return t.push(s), s;
}
function Od(s, t) {
  return s.map(t).join("");
}
function Na(s, t) {
  return s.filter(function(e) {
    return !sn(e, t);
  });
}
var Qo = 1, Yn = 1, Al = 0, Pt = 0, et = 0, or = "";
function ei(s, t, e, a, c, u, f, x) {
  return { value: s, root: t, parent: e, type: a, props: c, children: u, line: Qo, column: Yn, length: f, return: "", siblings: x };
}
function hn(s, t) {
  return Xi(ei("", null, null, "", null, null, 0, s.siblings), s, { length: -s.length }, t);
}
function zn(s) {
  for (; s.root; )
    s = hn(s.root, { children: [s] });
  wr(s, s.siblings);
}
function Rd() {
  return et;
}
function kd() {
  return et = Pt > 0 ? at(or, --Pt) : 0, Yn--, et === 10 && (Yn = 1, Qo--), et;
}
function Dt() {
  return et = Pt < Al ? at(or, Pt++) : 0, Yn++, et === 10 && (Yn = 1, Qo++), et;
}
function _n() {
  return at(or, Pt);
}
function so() {
  return Pt;
}
function ti(s, t) {
  return Xn(or, s, t);
}
function Yi(s) {
  switch (s) {
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
function Pd(s) {
  return Qo = Yn = 1, Al = Yt(or = s), Pt = 0, [];
}
function _d(s) {
  return or = "", s;
}
function Ci(s) {
  return El(ti(Pt - 1, Gi(s === 91 ? s + 2 : s === 40 ? s + 1 : s)));
}
function Id(s) {
  for (; (et = _n()) && et < 33; )
    Dt();
  return Yi(s) > 2 || Yi(et) > 3 ? "" : " ";
}
function Nd(s, t) {
  for (; --t && Dt() && !(et < 48 || et > 102 || et > 57 && et < 65 || et > 70 && et < 97); )
    ;
  return ti(s, so() + (t < 6 && _n() == 32 && Dt() == 32));
}
function Gi(s) {
  for (; Dt(); )
    switch (et) {
      // ] ) " '
      case s:
        return Pt;
      // " '
      case 34:
      case 39:
        s !== 34 && s !== 39 && Gi(et);
        break;
      // (
      case 40:
        s === 41 && Gi(s);
        break;
      // \
      case 92:
        Dt();
        break;
    }
  return Pt;
}
function jd(s, t) {
  for (; Dt() && s + et !== 57; )
    if (s + et === 84 && _n() === 47)
      break;
  return "/*" + ti(t, Pt - 1) + "*" + ea(s === 47 ? s : Dt());
}
function Ld(s) {
  for (; !Yi(_n()); )
    Dt();
  return ti(s, Pt);
}
function Md(s) {
  return _d(ao("", null, null, null, [""], s = Pd(s), 0, [0], s));
}
function ao(s, t, e, a, c, u, f, x, v) {
  for (var y = 0, S = 0, w = f, b = 0, P = 0, O = 0, C = 1, E = 1, L = 1, I = 0, T = "", F = c, _ = u, V = a, M = T; E; )
    switch (O = I, I = Dt()) {
      // (
      case 40:
        if (O != 108 && at(M, w - 1) == 58) {
          io(M += we(Ci(I), "&", "&\f"), "&\f", wl(y ? x[y - 1] : 0)) != -1 && (L = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        M += Ci(I);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        M += Id(O);
        break;
      // \
      case 92:
        M += Nd(so() - 1, 7);
        continue;
      // /
      case 47:
        switch (_n()) {
          case 42:
          case 47:
            wr(Dd(jd(Dt(), so()), t, e, v), v);
            break;
          default:
            M += "/";
        }
        break;
      // {
      case 123 * C:
        x[y++] = Yt(M) * L;
      // } ; \0
      case 125 * C:
      case 59:
      case 0:
        switch (I) {
          // \0 }
          case 0:
          case 125:
            E = 0;
          // ;
          case 59 + S:
            L == -1 && (M = we(M, /\f/g, "")), P > 0 && Yt(M) - w && wr(P > 32 ? La(M + ";", a, e, w - 1, v) : La(we(M, " ", "") + ";", a, e, w - 2, v), v);
            break;
          // @ ;
          case 59:
            M += ";";
          // { rule/at-rule
          default:
            if (wr(V = ja(M, t, e, y, S, c, x, T, F = [], _ = [], w, u), u), I === 123)
              if (S === 0)
                ao(M, t, V, V, F, u, w, x, _);
              else
                switch (b === 99 && at(M, 3) === 110 ? 100 : b) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ao(s, V, V, a && wr(ja(s, V, V, 0, 0, c, x, T, c, F = [], w, _), _), c, _, w, x, a ? F : _);
                    break;
                  default:
                    ao(M, V, V, V, [""], _, 0, x, _);
                }
        }
        y = S = P = 0, C = L = 1, T = M = "", w = f;
        break;
      // :
      case 58:
        w = 1 + Yt(M), P = O;
      default:
        if (C < 1) {
          if (I == 123)
            --C;
          else if (I == 125 && C++ == 0 && kd() == 125)
            continue;
        }
        switch (M += ea(I), I * C) {
          // &
          case 38:
            L = S > 0 ? 1 : (M += "\f", -1);
            break;
          // ,
          case 44:
            x[y++] = (Yt(M) - 1) * L, L = 1;
            break;
          // @
          case 64:
            _n() === 45 && (M += Ci(Dt())), b = _n(), S = w = Yt(T = M += Ld(so())), I++;
            break;
          // -
          case 45:
            O === 45 && Yt(M) == 2 && (C = 0);
        }
    }
  return u;
}
function ja(s, t, e, a, c, u, f, x, v, y, S, w) {
  for (var b = c - 1, P = c === 0 ? u : [""], O = Cl(P), C = 0, E = 0, L = 0; C < a; ++C)
    for (var I = 0, T = Xn(s, b + 1, b = wl(E = f[C])), F = s; I < O; ++I)
      (F = El(E > 0 ? P[I] + " " + T : we(T, /&\f/g, P[I]))) && (v[L++] = F);
  return ei(s, t, e, c === 0 ? Jo : x, v, y, S, w);
}
function Dd(s, t, e, a) {
  return ei(s, t, e, bl, ea(Rd()), Xn(s, 2, -2), 0, a);
}
function La(s, t, e, a, c) {
  return ei(s, t, e, Qs, Xn(s, 0, a), Xn(s, a + 1, -1), a, c);
}
function Tl(s, t, e) {
  switch (Td(s, t)) {
    // color-adjust
    case 5103:
      return Me + "print-" + s + s;
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
      return Me + s + s;
    // tab-size
    case 4789:
      return Cr + s + s;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Me + s + Cr + s + He + s + s;
    // writing-mode
    case 5936:
      switch (at(s, t + 11)) {
        // vertical-l(r)
        case 114:
          return Me + s + He + we(s, /[svh]\w+-[tblr]{2}/, "tb") + s;
        // vertical-r(l)
        case 108:
          return Me + s + He + we(s, /[svh]\w+-[tblr]{2}/, "tb-rl") + s;
        // horizontal(-)tb
        case 45:
          return Me + s + He + we(s, /[svh]\w+-[tblr]{2}/, "lr") + s;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return Me + s + He + s + s;
    // order
    case 6165:
      return Me + s + He + "flex-" + s + s;
    // align-items
    case 5187:
      return Me + s + we(s, /(\w+).+(:[^]+)/, Me + "box-$1$2" + He + "flex-$1$2") + s;
    // align-self
    case 5443:
      return Me + s + He + "flex-item-" + we(s, /flex-|-self/g, "") + (sn(s, /flex-|baseline/) ? "" : He + "grid-row-" + we(s, /flex-|-self/g, "")) + s;
    // align-content
    case 4675:
      return Me + s + He + "flex-line-pack" + we(s, /align-content|flex-|-self/g, "") + s;
    // flex-shrink
    case 5548:
      return Me + s + He + we(s, "shrink", "negative") + s;
    // flex-basis
    case 5292:
      return Me + s + He + we(s, "basis", "preferred-size") + s;
    // flex-grow
    case 6060:
      return Me + "box-" + we(s, "-grow", "") + Me + s + He + we(s, "grow", "positive") + s;
    // transition
    case 4554:
      return Me + we(s, /([^-])(transform)/g, "$1" + Me + "$2") + s;
    // cursor
    case 6187:
      return we(we(we(s, /(zoom-|grab)/, Me + "$1"), /(image-set)/, Me + "$1"), s, "") + s;
    // background, background-image
    case 5495:
    case 3959:
      return we(s, /(image-set\([^]*)/, Me + "$1$`$1");
    // justify-content
    case 4968:
      return we(we(s, /(.+:)(flex-)?(.*)/, Me + "box-pack:$3" + He + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Me + s + s;
    // justify-self
    case 4200:
      if (!sn(s, /flex-|baseline/)) return He + "grid-column-align" + Xn(s, t) + s;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return He + we(s, "template-", "") + s;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return e && e.some(function(a, c) {
        return t = c, sn(a.props, /grid-\w+-end/);
      }) ? ~io(s + (e = e[t].value), "span", 0) ? s : He + we(s, "-start", "") + s + He + "grid-row-span:" + (~io(e, "span", 0) ? sn(e, /\d+/) : +sn(e, /\d+/) - +sn(s, /\d+/)) + ";" : He + we(s, "-start", "") + s;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return e && e.some(function(a) {
        return sn(a.props, /grid-\w+-start/);
      }) ? s : He + we(we(s, "-end", "-span"), "span ", "") + s;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return we(s, /(.+)-inline(.+)/, Me + "$1$2") + s;
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
      if (Yt(s) - 1 - t > 6)
        switch (at(s, t + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (at(s, t + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return we(s, /(.+:)(.+)-([^]+)/, "$1" + Me + "$2-$3$1" + Cr + (at(s, t + 3) == 108 ? "$3" : "$2-$3")) + s;
          // (s)tretch
          case 115:
            return ~io(s, "stretch", 0) ? Tl(we(s, "stretch", "fill-available"), t, e) + s : s;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return we(s, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(a, c, u, f, x, v, y) {
        return He + c + ":" + u + y + (f ? He + c + "-span:" + (x ? v : +v - +u) + y : "") + s;
      });
    // position: sticky
    case 4949:
      if (at(s, t + 6) === 121)
        return we(s, ":", ":" + Me) + s;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (at(s, at(s, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return we(s, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + Me + (at(s, 14) === 45 ? "inline-" : "") + "box$3$1" + Me + "$2$3$1" + He + "$2box$3") + s;
        // (inline-)?gri(d)
        case 100:
          return we(s, ":", ":" + He) + s;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return we(s, "scroll-", "scroll-snap-") + s;
  }
  return s;
}
function Oo(s, t) {
  for (var e = "", a = 0; a < s.length; a++)
    e += t(s[a], a, s, t) || "";
  return e;
}
function Bd(s, t, e, a) {
  switch (s.type) {
    case Ad:
      if (s.children.length) break;
    case Cd:
    case Qs:
      return s.return = s.return || s.value;
    case bl:
      return "";
    case Sl:
      return s.return = s.value + "{" + Oo(s.children, a) + "}";
    case Jo:
      if (!Yt(s.value = s.props.join(","))) return "";
  }
  return Yt(e = Oo(s.children, a)) ? s.return = s.value + "{" + e + "}" : "";
}
function Fd(s) {
  var t = Cl(s);
  return function(e, a, c, u) {
    for (var f = "", x = 0; x < t; x++)
      f += s[x](e, a, c, u) || "";
    return f;
  };
}
function zd(s) {
  return function(t) {
    t.root || (t = t.return) && s(t);
  };
}
function Vd(s, t, e, a) {
  if (s.length > -1 && !s.return)
    switch (s.type) {
      case Qs:
        s.return = Tl(s.value, s.length, e);
        return;
      case Sl:
        return Oo([hn(s, { value: we(s.value, "@", "@" + Me) })], a);
      case Jo:
        if (s.length)
          return Od(e = s.props, function(c) {
            switch (sn(c, a = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                zn(hn(s, { props: [we(c, /:(read-\w+)/, ":" + Cr + "$1")] })), zn(hn(s, { props: [c] })), Xi(s, { props: Na(e, a) });
                break;
              // :placeholder
              case "::placeholder":
                zn(hn(s, { props: [we(c, /:(plac\w+)/, ":" + Me + "input-$1")] })), zn(hn(s, { props: [we(c, /:(plac\w+)/, ":" + Cr + "$1")] })), zn(hn(s, { props: [we(c, /:(plac\w+)/, He + "input-$1")] })), zn(hn(s, { props: [c] })), Xi(s, { props: Na(e, a) });
                break;
            }
            return "";
          });
    }
}
var Hd = {
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
}, Dn = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Ol = "active", Rl = "data-styled-version", ni = "6.1.18", ta = `/*!sc*/
`, Ro = typeof window < "u" && typeof document < "u", Ud = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Ma = /invalid hook call/i, Ur = /* @__PURE__ */ new Set(), qd = function(s, t) {
  if (process.env.NODE_ENV !== "production") {
    var e = t ? ' with the id of "'.concat(t, '"') : "", a = "The component ".concat(s).concat(e, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, c = console.error;
    try {
      var u = !0;
      console.error = function(f) {
        for (var x = [], v = 1; v < arguments.length; v++) x[v - 1] = arguments[v];
        Ma.test(f) ? (u = !1, Ur.delete(a)) : c.apply(void 0, $n([f], x, !1));
      }, it(), u && !Ur.has(a) && (console.warn(a), Ur.add(a));
    } catch (f) {
      Ma.test(f.message) && Ur.delete(a);
    } finally {
      console.error = c;
    }
  }
}, ri = Object.freeze([]), Gn = Object.freeze({});
function Wd(s, t, e) {
  return e === void 0 && (e = Gn), s.theme !== e.theme && s.theme || t || e.theme;
}
var Ki = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), $d = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Xd = /(^-|-$)/g;
function Da(s) {
  return s.replace($d, "-").replace(Xd, "");
}
var Yd = /(a)(d)/gi, qr = 52, Ba = function(s) {
  return String.fromCharCode(s + (s > 25 ? 39 : 97));
};
function Zi(s) {
  var t, e = "";
  for (t = Math.abs(s); t > qr; t = t / qr | 0) e = Ba(t % qr) + e;
  return (Ba(t % qr) + e).replace(Yd, "$1-$2");
}
var Ai, kl = 5381, An = function(s, t) {
  for (var e = t.length; e; ) s = 33 * s ^ t.charCodeAt(--e);
  return s;
}, Pl = function(s) {
  return An(kl, s);
};
function Gd(s) {
  return Zi(Pl(s) >>> 0);
}
function _l(s) {
  return process.env.NODE_ENV !== "production" && typeof s == "string" && s || s.displayName || s.name || "Component";
}
function Ti(s) {
  return typeof s == "string" && (process.env.NODE_ENV === "production" || s.charAt(0) === s.charAt(0).toLowerCase());
}
var Il = typeof Symbol == "function" && Symbol.for, Nl = Il ? Symbol.for("react.memo") : 60115, Kd = Il ? Symbol.for("react.forward_ref") : 60112, Zd = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Jd = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, jl = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Qd = ((Ai = {})[Kd] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Ai[Nl] = jl, Ai);
function Fa(s) {
  return ("type" in (t = s) && t.type.$$typeof) === Nl ? jl : "$$typeof" in s ? Qd[s.$$typeof] : Zd;
  var t;
}
var e0 = Object.defineProperty, t0 = Object.getOwnPropertyNames, za = Object.getOwnPropertySymbols, n0 = Object.getOwnPropertyDescriptor, r0 = Object.getPrototypeOf, Va = Object.prototype;
function Ll(s, t, e) {
  if (typeof t != "string") {
    if (Va) {
      var a = r0(t);
      a && a !== Va && Ll(s, a, e);
    }
    var c = t0(t);
    za && (c = c.concat(za(t)));
    for (var u = Fa(s), f = Fa(t), x = 0; x < c.length; ++x) {
      var v = c[x];
      if (!(v in Jd || e && e[v] || f && v in f || u && v in u)) {
        var y = n0(t, v);
        try {
          e0(s, v, y);
        } catch {
        }
      }
    }
  }
  return s;
}
function Kn(s) {
  return typeof s == "function";
}
function na(s) {
  return typeof s == "object" && "styledComponentId" in s;
}
function On(s, t) {
  return s && t ? "".concat(s, " ").concat(t) : s || t || "";
}
function Ha(s, t) {
  if (s.length === 0) return "";
  for (var e = s[0], a = 1; a < s.length; a++) e += s[a];
  return e;
}
function Zn(s) {
  return s !== null && typeof s == "object" && s.constructor.name === Object.name && !("props" in s && s.$$typeof);
}
function Ji(s, t, e) {
  if (e === void 0 && (e = !1), !e && !Zn(s) && !Array.isArray(s)) return t;
  if (Array.isArray(t)) for (var a = 0; a < t.length; a++) s[a] = Ji(s[a], t[a]);
  else if (Zn(t)) for (var a in t) s[a] = Ji(s[a], t[a]);
  return s;
}
function ra(s, t) {
  Object.defineProperty(s, "toString", { value: t });
}
var o0 = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function i0() {
  for (var s = [], t = 0; t < arguments.length; t++) s[t] = arguments[t];
  for (var e = s[0], a = [], c = 1, u = s.length; c < u; c += 1) a.push(s[c]);
  return a.forEach(function(f) {
    e = e.replace(/%[a-z]/, f);
  }), e;
}
function ir(s) {
  for (var t = [], e = 1; e < arguments.length; e++) t[e - 1] = arguments[e];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(s, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(i0.apply(void 0, $n([o0[s]], t, !1)).trim());
}
var s0 = function() {
  function s(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return s.prototype.indexOfGroup = function(t) {
    for (var e = 0, a = 0; a < t; a++) e += this.groupSizes[a];
    return e;
  }, s.prototype.insertRules = function(t, e) {
    if (t >= this.groupSizes.length) {
      for (var a = this.groupSizes, c = a.length, u = c; t >= u; ) if ((u <<= 1) < 0) throw ir(16, "".concat(t));
      this.groupSizes = new Uint32Array(u), this.groupSizes.set(a), this.length = u;
      for (var f = c; f < u; f++) this.groupSizes[f] = 0;
    }
    for (var x = this.indexOfGroup(t + 1), v = (f = 0, e.length); f < v; f++) this.tag.insertRule(x, e[f]) && (this.groupSizes[t]++, x++);
  }, s.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var e = this.groupSizes[t], a = this.indexOfGroup(t), c = a + e;
      this.groupSizes[t] = 0;
      for (var u = a; u < c; u++) this.tag.deleteRule(a);
    }
  }, s.prototype.getGroup = function(t) {
    var e = "";
    if (t >= this.length || this.groupSizes[t] === 0) return e;
    for (var a = this.groupSizes[t], c = this.indexOfGroup(t), u = c + a, f = c; f < u; f++) e += "".concat(this.tag.getRule(f)).concat(ta);
    return e;
  }, s;
}(), a0 = 1 << 30, co = /* @__PURE__ */ new Map(), ko = /* @__PURE__ */ new Map(), lo = 1, Wr = function(s) {
  if (co.has(s)) return co.get(s);
  for (; ko.has(lo); ) lo++;
  var t = lo++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > a0)) throw ir(16, "".concat(t));
  return co.set(s, t), ko.set(t, s), t;
}, c0 = function(s, t) {
  lo = t + 1, co.set(s, t), ko.set(t, s);
}, l0 = "style[".concat(Dn, "][").concat(Rl, '="').concat(ni, '"]'), u0 = new RegExp("^".concat(Dn, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), f0 = function(s, t, e) {
  for (var a, c = e.split(","), u = 0, f = c.length; u < f; u++) (a = c[u]) && s.registerName(t, a);
}, d0 = function(s, t) {
  for (var e, a = ((e = t.textContent) !== null && e !== void 0 ? e : "").split(ta), c = [], u = 0, f = a.length; u < f; u++) {
    var x = a[u].trim();
    if (x) {
      var v = x.match(u0);
      if (v) {
        var y = 0 | parseInt(v[1], 10), S = v[2];
        y !== 0 && (c0(S, y), f0(s, S, v[3]), s.getTag().insertRules(y, c)), c.length = 0;
      } else c.push(x);
    }
  }
}, Ua = function(s) {
  for (var t = document.querySelectorAll(l0), e = 0, a = t.length; e < a; e++) {
    var c = t[e];
    c && c.getAttribute(Dn) !== Ol && (d0(s, c), c.parentNode && c.parentNode.removeChild(c));
  }
};
function h0() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Ml = function(s) {
  var t = document.head, e = s || t, a = document.createElement("style"), c = function(x) {
    var v = Array.from(x.querySelectorAll("style[".concat(Dn, "]")));
    return v[v.length - 1];
  }(e), u = c !== void 0 ? c.nextSibling : null;
  a.setAttribute(Dn, Ol), a.setAttribute(Rl, ni);
  var f = h0();
  return f && a.setAttribute("nonce", f), e.insertBefore(a, u), a;
}, p0 = function() {
  function s(t) {
    this.element = Ml(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(e) {
      if (e.sheet) return e.sheet;
      for (var a = document.styleSheets, c = 0, u = a.length; c < u; c++) {
        var f = a[c];
        if (f.ownerNode === e) return f;
      }
      throw ir(17);
    }(this.element), this.length = 0;
  }
  return s.prototype.insertRule = function(t, e) {
    try {
      return this.sheet.insertRule(e, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, s.prototype.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, s.prototype.getRule = function(t) {
    var e = this.sheet.cssRules[t];
    return e && e.cssText ? e.cssText : "";
  }, s;
}(), x0 = function() {
  function s(t) {
    this.element = Ml(t), this.nodes = this.element.childNodes, this.length = 0;
  }
  return s.prototype.insertRule = function(t, e) {
    if (t <= this.length && t >= 0) {
      var a = document.createTextNode(e);
      return this.element.insertBefore(a, this.nodes[t] || null), this.length++, !0;
    }
    return !1;
  }, s.prototype.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, s.prototype.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, s;
}(), m0 = function() {
  function s(t) {
    this.rules = [], this.length = 0;
  }
  return s.prototype.insertRule = function(t, e) {
    return t <= this.length && (this.rules.splice(t, 0, e), this.length++, !0);
  }, s.prototype.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, s.prototype.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, s;
}(), qa = Ro, g0 = { isServer: !Ro, useCSSOMInjection: !Ud }, Dl = function() {
  function s(t, e, a) {
    t === void 0 && (t = Gn), e === void 0 && (e = {});
    var c = this;
    this.options = St(St({}, g0), t), this.gs = e, this.names = new Map(a), this.server = !!t.isServer, !this.server && Ro && qa && (qa = !1, Ua(this)), ra(this, function() {
      return function(u) {
        for (var f = u.getTag(), x = f.length, v = "", y = function(w) {
          var b = function(L) {
            return ko.get(L);
          }(w);
          if (b === void 0) return "continue";
          var P = u.names.get(b), O = f.getGroup(w);
          if (P === void 0 || !P.size || O.length === 0) return "continue";
          var C = "".concat(Dn, ".g").concat(w, '[id="').concat(b, '"]'), E = "";
          P !== void 0 && P.forEach(function(L) {
            L.length > 0 && (E += "".concat(L, ","));
          }), v += "".concat(O).concat(C, '{content:"').concat(E, '"}').concat(ta);
        }, S = 0; S < x; S++) y(S);
        return v;
      }(c);
    });
  }
  return s.registerId = function(t) {
    return Wr(t);
  }, s.prototype.rehydrate = function() {
    !this.server && Ro && Ua(this);
  }, s.prototype.reconstructWithOptions = function(t, e) {
    return e === void 0 && (e = !0), new s(St(St({}, this.options), t), this.gs, e && this.names || void 0);
  }, s.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, s.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(e) {
      var a = e.useCSSOMInjection, c = e.target;
      return e.isServer ? new m0(c) : a ? new p0(c) : new x0(c);
    }(this.options), new s0(t)));
    var t;
  }, s.prototype.hasNameForId = function(t, e) {
    return this.names.has(t) && this.names.get(t).has(e);
  }, s.prototype.registerName = function(t, e) {
    if (Wr(t), this.names.has(t)) this.names.get(t).add(e);
    else {
      var a = /* @__PURE__ */ new Set();
      a.add(e), this.names.set(t, a);
    }
  }, s.prototype.insertRules = function(t, e, a) {
    this.registerName(t, e), this.getTag().insertRules(Wr(t), a);
  }, s.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, s.prototype.clearRules = function(t) {
    this.getTag().clearGroup(Wr(t)), this.clearNames(t);
  }, s.prototype.clearTag = function() {
    this.tag = void 0;
  }, s;
}(), v0 = /&/g, y0 = /^\s*\/\/.*$/gm;
function Bl(s, t) {
  return s.map(function(e) {
    return e.type === "rule" && (e.value = "".concat(t, " ").concat(e.value), e.value = e.value.replaceAll(",", ",".concat(t, " ")), e.props = e.props.map(function(a) {
      return "".concat(t, " ").concat(a);
    })), Array.isArray(e.children) && e.type !== "@keyframes" && (e.children = Bl(e.children, t)), e;
  });
}
function b0(s) {
  var t, e, a, c = Gn, u = c.options, f = u === void 0 ? Gn : u, x = c.plugins, v = x === void 0 ? ri : x, y = function(b, P, O) {
    return O.startsWith(e) && O.endsWith(e) && O.replaceAll(e, "").length > 0 ? ".".concat(t) : b;
  }, S = v.slice();
  S.push(function(b) {
    b.type === Jo && b.value.includes("&") && (b.props[0] = b.props[0].replace(v0, e).replace(a, y));
  }), f.prefix && S.push(Vd), S.push(Bd);
  var w = function(b, P, O, C) {
    P === void 0 && (P = ""), O === void 0 && (O = ""), C === void 0 && (C = "&"), t = C, e = P, a = new RegExp("\\".concat(e, "\\b"), "g");
    var E = b.replace(y0, ""), L = Md(O || P ? "".concat(O, " ").concat(P, " { ").concat(E, " }") : E);
    f.namespace && (L = Bl(L, f.namespace));
    var I = [];
    return Oo(L, Fd(S.concat(zd(function(T) {
      return I.push(T);
    })))), I;
  };
  return w.hash = v.length ? v.reduce(function(b, P) {
    return P.name || ir(15), An(b, P.name);
  }, kl).toString() : "", w;
}
var S0 = new Dl(), Qi = b0(), Fl = Je.createContext({ shouldForwardProp: void 0, styleSheet: S0, stylis: Qi });
Fl.Consumer;
Je.createContext(void 0);
function Wa() {
  return vn(Fl);
}
var $a = function() {
  function s(t, e) {
    var a = this;
    this.inject = function(c, u) {
      u === void 0 && (u = Qi);
      var f = a.name + u.hash;
      c.hasNameForId(a.id, f) || c.insertRules(a.id, f, u(a.rules, f, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = e, ra(this, function() {
      throw ir(12, String(a.name));
    });
  }
  return s.prototype.getName = function(t) {
    return t === void 0 && (t = Qi), this.name + t.hash;
  }, s;
}(), w0 = function(s) {
  return s >= "A" && s <= "Z";
};
function Xa(s) {
  for (var t = "", e = 0; e < s.length; e++) {
    var a = s[e];
    if (e === 1 && a === "-" && s[0] === "-") return s;
    w0(a) ? t += "-" + a.toLowerCase() : t += a;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var zl = function(s) {
  return s == null || s === !1 || s === "";
}, Vl = function(s) {
  var t, e, a = [];
  for (var c in s) {
    var u = s[c];
    s.hasOwnProperty(c) && !zl(u) && (Array.isArray(u) && u.isCss || Kn(u) ? a.push("".concat(Xa(c), ":"), u, ";") : Zn(u) ? a.push.apply(a, $n($n(["".concat(c, " {")], Vl(u), !1), ["}"], !1)) : a.push("".concat(Xa(c), ": ").concat((t = c, (e = u) == null || typeof e == "boolean" || e === "" ? "" : typeof e != "number" || e === 0 || t in Hd || t.startsWith("--") ? String(e).trim() : "".concat(e, "px")), ";")));
  }
  return a;
};
function In(s, t, e, a) {
  if (zl(s)) return [];
  if (na(s)) return [".".concat(s.styledComponentId)];
  if (Kn(s)) {
    if (!Kn(u = s) || u.prototype && u.prototype.isReactComponent || !t) return [s];
    var c = s(t);
    return process.env.NODE_ENV === "production" || typeof c != "object" || Array.isArray(c) || c instanceof $a || Zn(c) || c === null || console.error("".concat(_l(s), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), In(c, t, e, a);
  }
  var u;
  return s instanceof $a ? e ? (s.inject(e, a), [s.getName(a)]) : [s] : Zn(s) ? Vl(s) : Array.isArray(s) ? Array.prototype.concat.apply(ri, s.map(function(f) {
    return In(f, t, e, a);
  })) : [s.toString()];
}
function E0(s) {
  for (var t = 0; t < s.length; t += 1) {
    var e = s[t];
    if (Kn(e) && !na(e)) return !1;
  }
  return !0;
}
var C0 = Pl(ni), A0 = function() {
  function s(t, e, a) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (a === void 0 || a.isStatic) && E0(t), this.componentId = e, this.baseHash = An(C0, e), this.baseStyle = a, Dl.registerId(e);
  }
  return s.prototype.generateAndInjectStyles = function(t, e, a) {
    var c = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, e, a) : "";
    if (this.isStatic && !a.hash) if (this.staticRulesId && e.hasNameForId(this.componentId, this.staticRulesId)) c = On(c, this.staticRulesId);
    else {
      var u = Ha(In(this.rules, t, e, a)), f = Zi(An(this.baseHash, u) >>> 0);
      if (!e.hasNameForId(this.componentId, f)) {
        var x = a(u, ".".concat(f), void 0, this.componentId);
        e.insertRules(this.componentId, f, x);
      }
      c = On(c, f), this.staticRulesId = f;
    }
    else {
      for (var v = An(this.baseHash, a.hash), y = "", S = 0; S < this.rules.length; S++) {
        var w = this.rules[S];
        if (typeof w == "string") y += w, process.env.NODE_ENV !== "production" && (v = An(v, w));
        else if (w) {
          var b = Ha(In(w, t, e, a));
          v = An(v, b + S), y += b;
        }
      }
      if (y) {
        var P = Zi(v >>> 0);
        e.hasNameForId(this.componentId, P) || e.insertRules(this.componentId, P, a(y, ".".concat(P), void 0, this.componentId)), c = On(c, P);
      }
    }
    return c;
  }, s;
}(), Hl = Je.createContext(void 0);
Hl.Consumer;
var Oi = {}, Ya = /* @__PURE__ */ new Set();
function T0(s, t, e) {
  var a = na(s), c = s, u = !Ti(s), f = t.attrs, x = f === void 0 ? ri : f, v = t.componentId, y = v === void 0 ? function(F, _) {
    var V = typeof F != "string" ? "sc" : Da(F);
    Oi[V] = (Oi[V] || 0) + 1;
    var M = "".concat(V, "-").concat(Gd(ni + V + Oi[V]));
    return _ ? "".concat(_, "-").concat(M) : M;
  }(t.displayName, t.parentComponentId) : v, S = t.displayName, w = S === void 0 ? function(F) {
    return Ti(F) ? "styled.".concat(F) : "Styled(".concat(_l(F), ")");
  }(s) : S, b = t.displayName && t.componentId ? "".concat(Da(t.displayName), "-").concat(t.componentId) : t.componentId || y, P = a && c.attrs ? c.attrs.concat(x).filter(Boolean) : x, O = t.shouldForwardProp;
  if (a && c.shouldForwardProp) {
    var C = c.shouldForwardProp;
    if (t.shouldForwardProp) {
      var E = t.shouldForwardProp;
      O = function(F, _) {
        return C(F, _) && E(F, _);
      };
    } else O = C;
  }
  var L = new A0(e, b, a ? c.componentStyle : void 0);
  function I(F, _) {
    return function(V, M, Y) {
      var J = V.attrs, ce = V.componentStyle, Se = V.defaultProps, fe = V.foldedComponentIds, K = V.styledComponentId, oe = V.target, re = Je.useContext(Hl), ge = Wa(), he = V.shouldForwardProp || ge.shouldForwardProp;
      process.env.NODE_ENV !== "production" && Ra(K);
      var xe = Wd(M, re, Se) || Gn, me = function(ye, Re, U) {
        for (var Z, B = St(St({}, Re), { className: void 0, theme: U }), H = 0; H < ye.length; H += 1) {
          var N = Kn(Z = ye[H]) ? Z(B) : Z;
          for (var X in N) B[X] = X === "className" ? On(B[X], N[X]) : X === "style" ? St(St({}, B[X]), N[X]) : N[X];
        }
        return Re.className && (B.className = On(B.className, Re.className)), B;
      }(J, M, xe), pe = me.as || oe, ae = {};
      for (var te in me) me[te] === void 0 || te[0] === "$" || te === "as" || te === "theme" && me.theme === xe || (te === "forwardedAs" ? ae.as = me.forwardedAs : he && !he(te, pe) || (ae[te] = me[te], he || process.env.NODE_ENV !== "development" || Ed(te) || Ya.has(te) || !Ki.has(pe) || (Ya.add(te), console.warn('styled-components: it looks like an unknown prop "'.concat(te, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var le = function(ye, Re) {
        var U = Wa(), Z = ye.generateAndInjectStyles(Re, U.styleSheet, U.stylis);
        return process.env.NODE_ENV !== "production" && Ra(Z), Z;
      }(ce, me);
      process.env.NODE_ENV !== "production" && V.warnTooManyClasses && V.warnTooManyClasses(le);
      var ve = On(fe, K);
      return le && (ve += " " + le), me.className && (ve += " " + me.className), ae[Ti(pe) && !Ki.has(pe) ? "class" : "className"] = ve, Y && (ae.ref = Y), hd(pe, ae);
    }(T, F, _);
  }
  I.displayName = w;
  var T = Je.forwardRef(I);
  return T.attrs = P, T.componentStyle = L, T.displayName = w, T.shouldForwardProp = O, T.foldedComponentIds = a ? On(c.foldedComponentIds, c.styledComponentId) : "", T.styledComponentId = b, T.target = a ? c.target : s, Object.defineProperty(T, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(F) {
    this._foldedDefaultProps = a ? function(_) {
      for (var V = [], M = 1; M < arguments.length; M++) V[M - 1] = arguments[M];
      for (var Y = 0, J = V; Y < J.length; Y++) Ji(_, J[Y], !0);
      return _;
    }({}, c.defaultProps, F) : F;
  } }), process.env.NODE_ENV !== "production" && (qd(w, b), T.warnTooManyClasses = /* @__PURE__ */ function(F, _) {
    var V = {}, M = !1;
    return function(Y) {
      if (!M && (V[Y] = !0, Object.keys(V).length >= 200)) {
        var J = _ ? ' with the id of "'.concat(_, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(F).concat(J, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), M = !0, V = {};
      }
    };
  }(w, b)), ra(T, function() {
    return ".".concat(T.styledComponentId);
  }), u && Ll(T, s, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), T;
}
function Ga(s, t) {
  for (var e = [s[0]], a = 0, c = t.length; a < c; a += 1) e.push(t[a], s[a + 1]);
  return e;
}
var Ka = function(s) {
  return Object.assign(s, { isCss: !0 });
};
function O0(s) {
  for (var t = [], e = 1; e < arguments.length; e++) t[e - 1] = arguments[e];
  if (Kn(s) || Zn(s)) return Ka(In(Ga(ri, $n([s], t, !0))));
  var a = s;
  return t.length === 0 && a.length === 1 && typeof a[0] == "string" ? In(a) : Ka(In(Ga(a, t)));
}
function es(s, t, e) {
  if (e === void 0 && (e = Gn), !t) throw ir(1, t);
  var a = function(c) {
    for (var u = [], f = 1; f < arguments.length; f++) u[f - 1] = arguments[f];
    return s(t, e, O0.apply(void 0, $n([c], u, !1)));
  };
  return a.attrs = function(c) {
    return es(s, t, St(St({}, e), { attrs: Array.prototype.concat(e.attrs, c).filter(Boolean) }));
  }, a.withConfig = function(c) {
    return es(s, t, St(St({}, e), c));
  }, a;
}
var Ul = function(s) {
  return es(T0, s);
}, zt = Ul;
Ki.forEach(function(s) {
  zt[s] = Ul(s);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var $r = "__sc-".concat(Dn, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[$r] || (window[$r] = 0), window[$r] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[$r] += 1);
const Lr = _o;
(function(s, t) {
  const e = _o, a = s();
  for (; ; )
    try {
      if (-parseInt(e(363)) / 1 + -parseInt(e(356)) / 2 + -parseInt(e(358)) / 3 + -parseInt(e(354)) / 4 + -parseInt(e(361)) / 5 + -parseInt(e(355)) / 6 * (parseInt(e(357)) / 7) + parseInt(e(362)) / 8 === t) break;
      a.push(a.shift());
    } catch {
      a.push(a.shift());
    }
})(Po, 714309);
const R0 = zt[Lr(359)]`
  flex-direction: column;
  border-radius: 15px;
  border: 3px solid #a0beeb;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
  justify-items: center;
  align-items: center;
`;
function Po() {
  const s = ["14154AyUJqb", "4143639QcASxB", "div", "canvas", "736415xuwLmM", "47372264RjXQRR", "560541IwJgVm", "span", "3692928OPtenU", "3714umKesX", "1886674WgJUBc"];
  return Po = function() {
    return s;
  }, Po();
}
const k0 = zt[Lr(359)]`
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
`, P0 = zt[Lr(360)]`
  border-radius: 7px;
  display: inline;
  padding: 0;
  &:focus-visible {
    outline: none;
  }
`;
function _o(s, t) {
  const e = Po();
  return _o = function(a, c) {
    return a = a - 353, e[a];
  }, _o(s, t);
}
const _0 = zt[Lr(353)]`
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
`, I0 = zt[Lr(359)]`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  pointer-events: none;
`, Kt = /* @__PURE__ */ Object.create(null);
Kt.open = "0";
Kt.close = "1";
Kt.ping = "2";
Kt.pong = "3";
Kt.message = "4";
Kt.upgrade = "5";
Kt.noop = "6";
const uo = /* @__PURE__ */ Object.create(null);
Object.keys(Kt).forEach((s) => {
  uo[Kt[s]] = s;
});
const ts = { type: "error", data: "parser error" }, ql = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", Wl = typeof ArrayBuffer == "function", $l = (s) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(s) : s && s.buffer instanceof ArrayBuffer, oa = ({ type: s, data: t }, e, a) => ql && t instanceof Blob ? e ? a(t) : Za(t, a) : Wl && (t instanceof ArrayBuffer || $l(t)) ? e ? a(t) : Za(new Blob([t]), a) : a(Kt[s] + (t || "")), Za = (s, t) => {
  const e = new FileReader();
  return e.onload = function() {
    const a = e.result.split(",")[1];
    t("b" + (a || ""));
  }, e.readAsDataURL(s);
};
function Ja(s) {
  return s instanceof Uint8Array ? s : s instanceof ArrayBuffer ? new Uint8Array(s) : new Uint8Array(s.buffer, s.byteOffset, s.byteLength);
}
let Ri;
function N0(s, t) {
  if (ql && s.data instanceof Blob)
    return s.data.arrayBuffer().then(Ja).then(t);
  if (Wl && (s.data instanceof ArrayBuffer || $l(s.data)))
    return t(Ja(s.data));
  oa(s, !1, (e) => {
    Ri || (Ri = new TextEncoder()), t(Ri.encode(e));
  });
}
const Qa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Er = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let s = 0; s < Qa.length; s++)
  Er[Qa.charCodeAt(s)] = s;
const j0 = (s) => {
  let t = s.length * 0.75, e = s.length, a, c = 0, u, f, x, v;
  s[s.length - 1] === "=" && (t--, s[s.length - 2] === "=" && t--);
  const y = new ArrayBuffer(t), S = new Uint8Array(y);
  for (a = 0; a < e; a += 4)
    u = Er[s.charCodeAt(a)], f = Er[s.charCodeAt(a + 1)], x = Er[s.charCodeAt(a + 2)], v = Er[s.charCodeAt(a + 3)], S[c++] = u << 2 | f >> 4, S[c++] = (f & 15) << 4 | x >> 2, S[c++] = (x & 3) << 6 | v & 63;
  return y;
}, L0 = typeof ArrayBuffer == "function", ia = (s, t) => {
  if (typeof s != "string")
    return {
      type: "message",
      data: Xl(s, t)
    };
  const e = s.charAt(0);
  return e === "b" ? {
    type: "message",
    data: M0(s.substring(1), t)
  } : uo[e] ? s.length > 1 ? {
    type: uo[e],
    data: s.substring(1)
  } : {
    type: uo[e]
  } : ts;
}, M0 = (s, t) => {
  if (L0) {
    const e = j0(s);
    return Xl(e, t);
  } else
    return { base64: !0, data: s };
}, Xl = (s, t) => {
  switch (t) {
    case "blob":
      return s instanceof Blob ? s : new Blob([s]);
    case "arraybuffer":
    default:
      return s instanceof ArrayBuffer ? s : s.buffer;
  }
}, Yl = "", D0 = (s, t) => {
  const e = s.length, a = new Array(e);
  let c = 0;
  s.forEach((u, f) => {
    oa(u, !1, (x) => {
      a[f] = x, ++c === e && t(a.join(Yl));
    });
  });
}, B0 = (s, t) => {
  const e = s.split(Yl), a = [];
  for (let c = 0; c < e.length; c++) {
    const u = ia(e[c], t);
    if (a.push(u), u.type === "error")
      break;
  }
  return a;
};
function F0() {
  return new TransformStream({
    transform(s, t) {
      N0(s, (e) => {
        const a = e.length;
        let c;
        if (a < 126)
          c = new Uint8Array(1), new DataView(c.buffer).setUint8(0, a);
        else if (a < 65536) {
          c = new Uint8Array(3);
          const u = new DataView(c.buffer);
          u.setUint8(0, 126), u.setUint16(1, a);
        } else {
          c = new Uint8Array(9);
          const u = new DataView(c.buffer);
          u.setUint8(0, 127), u.setBigUint64(1, BigInt(a));
        }
        s.data && typeof s.data != "string" && (c[0] |= 128), t.enqueue(c), t.enqueue(e);
      });
    }
  });
}
let ki;
function Xr(s) {
  return s.reduce((t, e) => t + e.length, 0);
}
function Yr(s, t) {
  if (s[0].length === t)
    return s.shift();
  const e = new Uint8Array(t);
  let a = 0;
  for (let c = 0; c < t; c++)
    e[c] = s[0][a++], a === s[0].length && (s.shift(), a = 0);
  return s.length && a < s[0].length && (s[0] = s[0].slice(a)), e;
}
function z0(s, t) {
  ki || (ki = new TextDecoder());
  const e = [];
  let a = 0, c = -1, u = !1;
  return new TransformStream({
    transform(f, x) {
      for (e.push(f); ; ) {
        if (a === 0) {
          if (Xr(e) < 1)
            break;
          const v = Yr(e, 1);
          u = (v[0] & 128) === 128, c = v[0] & 127, c < 126 ? a = 3 : c === 126 ? a = 1 : a = 2;
        } else if (a === 1) {
          if (Xr(e) < 2)
            break;
          const v = Yr(e, 2);
          c = new DataView(v.buffer, v.byteOffset, v.length).getUint16(0), a = 3;
        } else if (a === 2) {
          if (Xr(e) < 8)
            break;
          const v = Yr(e, 8), y = new DataView(v.buffer, v.byteOffset, v.length), S = y.getUint32(0);
          if (S > Math.pow(2, 21) - 1) {
            x.enqueue(ts);
            break;
          }
          c = S * Math.pow(2, 32) + y.getUint32(4), a = 3;
        } else {
          if (Xr(e) < c)
            break;
          const v = Yr(e, c);
          x.enqueue(ia(u ? v : ki.decode(v), t)), a = 0;
        }
        if (c === 0 || c > s) {
          x.enqueue(ts);
          break;
        }
      }
    }
  });
}
const Gl = 4;
function nt(s) {
  if (s) return V0(s);
}
function V0(s) {
  for (var t in nt.prototype)
    s[t] = nt.prototype[t];
  return s;
}
nt.prototype.on = nt.prototype.addEventListener = function(s, t) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + s] = this._callbacks["$" + s] || []).push(t), this;
};
nt.prototype.once = function(s, t) {
  function e() {
    this.off(s, e), t.apply(this, arguments);
  }
  return e.fn = t, this.on(s, e), this;
};
nt.prototype.off = nt.prototype.removeListener = nt.prototype.removeAllListeners = nt.prototype.removeEventListener = function(s, t) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var e = this._callbacks["$" + s];
  if (!e) return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + s], this;
  for (var a, c = 0; c < e.length; c++)
    if (a = e[c], a === t || a.fn === t) {
      e.splice(c, 1);
      break;
    }
  return e.length === 0 && delete this._callbacks["$" + s], this;
};
nt.prototype.emit = function(s) {
  this._callbacks = this._callbacks || {};
  for (var t = new Array(arguments.length - 1), e = this._callbacks["$" + s], a = 1; a < arguments.length; a++)
    t[a - 1] = arguments[a];
  if (e) {
    e = e.slice(0);
    for (var a = 0, c = e.length; a < c; ++a)
      e[a].apply(this, t);
  }
  return this;
};
nt.prototype.emitReserved = nt.prototype.emit;
nt.prototype.listeners = function(s) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + s] || [];
};
nt.prototype.hasListeners = function(s) {
  return !!this.listeners(s).length;
};
const oi = typeof Promise == "function" && typeof Promise.resolve == "function" ? (t) => Promise.resolve().then(t) : (t, e) => e(t, 0), kt = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), H0 = "arraybuffer";
function Kl(s, ...t) {
  return t.reduce((e, a) => (s.hasOwnProperty(a) && (e[a] = s[a]), e), {});
}
const U0 = kt.setTimeout, q0 = kt.clearTimeout;
function ii(s, t) {
  t.useNativeTimers ? (s.setTimeoutFn = U0.bind(kt), s.clearTimeoutFn = q0.bind(kt)) : (s.setTimeoutFn = kt.setTimeout.bind(kt), s.clearTimeoutFn = kt.clearTimeout.bind(kt));
}
const W0 = 1.33;
function $0(s) {
  return typeof s == "string" ? X0(s) : Math.ceil((s.byteLength || s.size) * W0);
}
function X0(s) {
  let t = 0, e = 0;
  for (let a = 0, c = s.length; a < c; a++)
    t = s.charCodeAt(a), t < 128 ? e += 1 : t < 2048 ? e += 2 : t < 55296 || t >= 57344 ? e += 3 : (a++, e += 4);
  return e;
}
function Zl() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function Y0(s) {
  let t = "";
  for (let e in s)
    s.hasOwnProperty(e) && (t.length && (t += "&"), t += encodeURIComponent(e) + "=" + encodeURIComponent(s[e]));
  return t;
}
function G0(s) {
  let t = {}, e = s.split("&");
  for (let a = 0, c = e.length; a < c; a++) {
    let u = e[a].split("=");
    t[decodeURIComponent(u[0])] = decodeURIComponent(u[1]);
  }
  return t;
}
class K0 extends Error {
  constructor(t, e, a) {
    super(t), this.description = e, this.context = a, this.type = "TransportError";
  }
}
class sa extends nt {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(t) {
    super(), this.writable = !1, ii(this, t), this.opts = t, this.query = t.query, this.socket = t.socket, this.supportsBinary = !t.forceBase64;
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
  onError(t, e, a) {
    return super.emitReserved("error", new K0(t, e, a)), this;
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
    const e = ia(t, this.socket.binaryType);
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
    const e = Y0(t);
    return e.length ? "?" + e : "";
  }
}
class Z0 extends sa {
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
      let a = 0;
      this._polling && (a++, this.once("pollComplete", function() {
        --a || e();
      })), this.writable || (a++, this.once("drain", function() {
        --a || e();
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
    const e = (a) => {
      if (this.readyState === "opening" && a.type === "open" && this.onOpen(), a.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(a);
    };
    B0(t, this.socket.binaryType).forEach(e), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
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
    this.writable = !1, D0(t, (e) => {
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
    return this.opts.timestampRequests !== !1 && (e[this.opts.timestampParam] = Zl()), !this.supportsBinary && !e.sid && (e.b64 = 1), this.createUri(t, e);
  }
}
let Jl = !1;
try {
  Jl = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const J0 = Jl;
function Q0() {
}
class eh extends Z0 {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(t) {
    if (super(t), typeof location < "u") {
      const e = location.protocol === "https:";
      let a = location.port;
      a || (a = e ? "443" : "80"), this.xd = typeof location < "u" && t.hostname !== location.hostname || a !== t.port;
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
    const a = this.request({
      method: "POST",
      data: t
    });
    a.on("success", e), a.on("error", (c, u) => {
      this.onError("xhr post error", c, u);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    const t = this.request();
    t.on("data", this.onData.bind(this)), t.on("error", (e, a) => {
      this.onError("xhr poll error", e, a);
    }), this.pollXhr = t;
  }
}
let qn = class fo extends nt {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(t, e, a) {
    super(), this.createRequest = t, ii(this, a), this._opts = a, this._method = a.method || "GET", this._uri = e, this._data = a.data !== void 0 ? a.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var t;
    const e = Kl(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    e.xdomain = !!this._opts.xd;
    const a = this._xhr = this.createRequest(e);
    try {
      a.open(this._method, this._uri, !0);
      try {
        if (this._opts.extraHeaders) {
          a.setDisableHeaderCheck && a.setDisableHeaderCheck(!0);
          for (let c in this._opts.extraHeaders)
            this._opts.extraHeaders.hasOwnProperty(c) && a.setRequestHeader(c, this._opts.extraHeaders[c]);
        }
      } catch {
      }
      if (this._method === "POST")
        try {
          a.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {
        }
      try {
        a.setRequestHeader("Accept", "*/*");
      } catch {
      }
      (t = this._opts.cookieJar) === null || t === void 0 || t.addCookies(a), "withCredentials" in a && (a.withCredentials = this._opts.withCredentials), this._opts.requestTimeout && (a.timeout = this._opts.requestTimeout), a.onreadystatechange = () => {
        var c;
        a.readyState === 3 && ((c = this._opts.cookieJar) === null || c === void 0 || c.parseCookies(
          // @ts-ignore
          a.getResponseHeader("set-cookie")
        )), a.readyState === 4 && (a.status === 200 || a.status === 1223 ? this._onLoad() : this.setTimeoutFn(() => {
          this._onError(typeof a.status == "number" ? a.status : 0);
        }, 0));
      }, a.send(this._data);
    } catch (c) {
      this.setTimeoutFn(() => {
        this._onError(c);
      }, 0);
      return;
    }
    typeof document < "u" && (this._index = fo.requestsCount++, fo.requests[this._index] = this);
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
      if (this._xhr.onreadystatechange = Q0, t)
        try {
          this._xhr.abort();
        } catch {
        }
      typeof document < "u" && delete fo.requests[this._index], this._xhr = null;
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
qn.requestsCount = 0;
qn.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", ec);
  else if (typeof addEventListener == "function") {
    const s = "onpagehide" in kt ? "pagehide" : "unload";
    addEventListener(s, ec, !1);
  }
}
function ec() {
  for (let s in qn.requests)
    qn.requests.hasOwnProperty(s) && qn.requests[s].abort();
}
const th = function() {
  const s = Ql({
    xdomain: !1
  });
  return s && s.responseType !== null;
}();
class nh extends eh {
  constructor(t) {
    super(t);
    const e = t && t.forceBase64;
    this.supportsBinary = th && !e;
  }
  request(t = {}) {
    return Object.assign(t, { xd: this.xd }, this.opts), new qn(Ql, this.uri(), t);
  }
}
function Ql(s) {
  const t = s.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!t || J0))
      return new XMLHttpRequest();
  } catch {
  }
  if (!t)
    try {
      return new kt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const eu = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class rh extends sa {
  get name() {
    return "websocket";
  }
  doOpen() {
    const t = this.uri(), e = this.opts.protocols, a = eu ? {} : Kl(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (a.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(t, e, a);
    } catch (c) {
      return this.emitReserved("error", c);
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
      const a = t[e], c = e === t.length - 1;
      oa(a, this.supportsBinary, (u) => {
        try {
          this.doWrite(a, u);
        } catch {
        }
        c && oi(() => {
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
    return this.opts.timestampRequests && (e[this.opts.timestampParam] = Zl()), this.supportsBinary || (e.b64 = 1), this.createUri(t, e);
  }
}
const Pi = kt.WebSocket || kt.MozWebSocket;
class oh extends rh {
  createSocket(t, e, a) {
    return eu ? new Pi(t, e, a) : e ? new Pi(t, e) : new Pi(t);
  }
  doWrite(t, e) {
    this.ws.send(e);
  }
}
class ih extends sa {
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
        const e = z0(Number.MAX_SAFE_INTEGER, this.socket.binaryType), a = t.readable.pipeThrough(e).getReader(), c = F0();
        c.readable.pipeTo(t.writable), this._writer = c.writable.getWriter();
        const u = () => {
          a.read().then(({ done: x, value: v }) => {
            x || (this.onPacket(v), u());
          }).catch((x) => {
          });
        };
        u();
        const f = { type: "open" };
        this.query.sid && (f.data = `{"sid":"${this.query.sid}"}`), this._writer.write(f).then(() => this.onOpen());
      });
    });
  }
  write(t) {
    this.writable = !1;
    for (let e = 0; e < t.length; e++) {
      const a = t[e], c = e === t.length - 1;
      this._writer.write(a).then(() => {
        c && oi(() => {
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
function ns(s) {
  if (s.length > 8e3)
    throw "URI too long";
  const t = s, e = s.indexOf("["), a = s.indexOf("]");
  e != -1 && a != -1 && (s = s.substring(0, e) + s.substring(e, a).replace(/:/g, ";") + s.substring(a, s.length));
  let c = ah.exec(s || ""), u = {}, f = 14;
  for (; f--; )
    u[ch[f]] = c[f] || "";
  return e != -1 && a != -1 && (u.source = t, u.host = u.host.substring(1, u.host.length - 1).replace(/;/g, ":"), u.authority = u.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), u.ipv6uri = !0), u.pathNames = lh(u, u.path), u.queryKey = uh(u, u.query), u;
}
function lh(s, t) {
  const e = /\/{2,9}/g, a = t.replace(e, "/").split("/");
  return (t.slice(0, 1) == "/" || t.length === 0) && a.splice(0, 1), t.slice(-1) == "/" && a.splice(a.length - 1, 1), a;
}
function uh(s, t) {
  const e = {};
  return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(a, c, u) {
    c && (e[c] = u);
  }), e;
}
const rs = typeof addEventListener == "function" && typeof removeEventListener == "function", ho = [];
rs && addEventListener("offline", () => {
  ho.forEach((s) => s());
}, !1);
class gn extends nt {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(t, e) {
    if (super(), this.binaryType = H0, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, t && typeof t == "object" && (e = t, t = null), t) {
      const a = ns(t);
      e.hostname = a.host, e.secure = a.protocol === "https" || a.protocol === "wss", e.port = a.port, a.query && (e.query = a.query);
    } else e.host && (e.hostname = ns(e.host).host);
    ii(this, e), this.secure = e.secure != null ? e.secure : typeof location < "u" && location.protocol === "https:", e.hostname && !e.port && (e.port = this.secure ? "443" : "80"), this.hostname = e.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = e.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, e.transports.forEach((a) => {
      const c = a.prototype.name;
      this.transports.push(c), this._transportsByName[c] = a;
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
    }, e), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = G0(this.opts.query)), rs && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, ho.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
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
    e.EIO = Gl, e.transport = t, this.id && (e.sid = this.id);
    const a = Object.assign({}, this.opts, {
      query: e,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[t]);
    return new this._transportsByName[t](a);
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
    const t = this.opts.rememberUpgrade && gn.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
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
    this.readyState = "open", gn.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
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
    for (let a = 0; a < this.writeBuffer.length; a++) {
      const c = this.writeBuffer[a].data;
      if (c && (e += $0(c)), a > 0 && e > this._maxPayload)
        return this.writeBuffer.slice(0, a);
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
    return t && (this._pingTimeoutTime = 0, oi(() => {
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
  write(t, e, a) {
    return this._sendPacket("message", t, e, a), this;
  }
  /**
   * Sends a message. Alias of {@link Socket#write}.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  send(t, e, a) {
    return this._sendPacket("message", t, e, a), this;
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
  _sendPacket(t, e, a, c) {
    if (typeof e == "function" && (c = e, e = void 0), typeof a == "function" && (c = a, a = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    a = a || {}, a.compress = a.compress !== !1;
    const u = {
      type: t,
      data: e,
      options: a
    };
    this.emitReserved("packetCreate", u), this.writeBuffer.push(u), c && this.once("flush", c), this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const t = () => {
      this._onClose("forced close"), this.transport.close();
    }, e = () => {
      this.off("upgrade", e), this.off("upgradeError", e), t();
    }, a = () => {
      this.once("upgrade", e), this.once("upgradeError", e);
    };
    return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
      this.upgrading ? a() : t();
    }) : this.upgrading ? a() : t()), this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  _onError(t) {
    if (gn.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
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
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), rs && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const a = ho.indexOf(this._offlineEventListener);
        a !== -1 && ho.splice(a, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", t, e), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
gn.protocol = Gl;
class fh extends gn {
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
    let e = this.createTransport(t), a = !1;
    gn.priorWebsocketSuccess = !1;
    const c = () => {
      a || (e.send([{ type: "ping", data: "probe" }]), e.once("packet", (w) => {
        if (!a)
          if (w.type === "pong" && w.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", e), !e)
              return;
            gn.priorWebsocketSuccess = e.name === "websocket", this.transport.pause(() => {
              a || this.readyState !== "closed" && (S(), this.setTransport(e), e.send([{ type: "upgrade" }]), this.emitReserved("upgrade", e), e = null, this.upgrading = !1, this.flush());
            });
          } else {
            const b = new Error("probe error");
            b.transport = e.name, this.emitReserved("upgradeError", b);
          }
      }));
    };
    function u() {
      a || (a = !0, S(), e.close(), e = null);
    }
    const f = (w) => {
      const b = new Error("probe error: " + w);
      b.transport = e.name, u(), this.emitReserved("upgradeError", b);
    };
    function x() {
      f("transport closed");
    }
    function v() {
      f("socket closed");
    }
    function y(w) {
      e && w.name !== e.name && u();
    }
    const S = () => {
      e.removeListener("open", c), e.removeListener("error", f), e.removeListener("close", x), this.off("close", v), this.off("upgrading", y);
    };
    e.once("open", c), e.once("error", f), e.once("close", x), this.once("close", v), this.once("upgrading", y), this._upgrades.indexOf("webtransport") !== -1 && t !== "webtransport" ? this.setTimeoutFn(() => {
      a || e.open();
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
    for (let a = 0; a < t.length; a++)
      ~this.transports.indexOf(t[a]) && e.push(t[a]);
    return e;
  }
}
let dh = class extends fh {
  constructor(t, e = {}) {
    const a = typeof t == "object" ? t : e;
    (!a.transports || a.transports && typeof a.transports[0] == "string") && (a.transports = (a.transports || ["polling", "websocket", "webtransport"]).map((c) => sh[c]).filter((c) => !!c)), super(t, a);
  }
};
function hh(s, t = "", e) {
  let a = s;
  e = e || typeof location < "u" && location, s == null && (s = e.protocol + "//" + e.host), typeof s == "string" && (s.charAt(0) === "/" && (s.charAt(1) === "/" ? s = e.protocol + s : s = e.host + s), /^(https?|wss?):\/\//.test(s) || (typeof e < "u" ? s = e.protocol + "//" + s : s = "https://" + s), a = ns(s)), a.port || (/^(http|ws)$/.test(a.protocol) ? a.port = "80" : /^(http|ws)s$/.test(a.protocol) && (a.port = "443")), a.path = a.path || "/";
  const u = a.host.indexOf(":") !== -1 ? "[" + a.host + "]" : a.host;
  return a.id = a.protocol + "://" + u + ":" + a.port + t, a.href = a.protocol + "://" + u + (e && e.port === a.port ? "" : ":" + a.port), a;
}
const ph = typeof ArrayBuffer == "function", xh = (s) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(s) : s.buffer instanceof ArrayBuffer, tu = Object.prototype.toString, mh = typeof Blob == "function" || typeof Blob < "u" && tu.call(Blob) === "[object BlobConstructor]", gh = typeof File == "function" || typeof File < "u" && tu.call(File) === "[object FileConstructor]";
function aa(s) {
  return ph && (s instanceof ArrayBuffer || xh(s)) || mh && s instanceof Blob || gh && s instanceof File;
}
function po(s, t) {
  if (!s || typeof s != "object")
    return !1;
  if (Array.isArray(s)) {
    for (let e = 0, a = s.length; e < a; e++)
      if (po(s[e]))
        return !0;
    return !1;
  }
  if (aa(s))
    return !0;
  if (s.toJSON && typeof s.toJSON == "function" && arguments.length === 1)
    return po(s.toJSON(), !0);
  for (const e in s)
    if (Object.prototype.hasOwnProperty.call(s, e) && po(s[e]))
      return !0;
  return !1;
}
function vh(s) {
  const t = [], e = s.data, a = s;
  return a.data = os(e, t), a.attachments = t.length, { packet: a, buffers: t };
}
function os(s, t) {
  if (!s)
    return s;
  if (aa(s)) {
    const e = { _placeholder: !0, num: t.length };
    return t.push(s), e;
  } else if (Array.isArray(s)) {
    const e = new Array(s.length);
    for (let a = 0; a < s.length; a++)
      e[a] = os(s[a], t);
    return e;
  } else if (typeof s == "object" && !(s instanceof Date)) {
    const e = {};
    for (const a in s)
      Object.prototype.hasOwnProperty.call(s, a) && (e[a] = os(s[a], t));
    return e;
  }
  return s;
}
function yh(s, t) {
  return s.data = is(s.data, t), delete s.attachments, s;
}
function is(s, t) {
  if (!s)
    return s;
  if (s && s._placeholder === !0) {
    if (typeof s.num == "number" && s.num >= 0 && s.num < t.length)
      return t[s.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(s))
    for (let e = 0; e < s.length; e++)
      s[e] = is(s[e], t);
  else if (typeof s == "object")
    for (const e in s)
      Object.prototype.hasOwnProperty.call(s, e) && (s[e] = is(s[e], t));
  return s;
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
var Pe;
(function(s) {
  s[s.CONNECT = 0] = "CONNECT", s[s.DISCONNECT = 1] = "DISCONNECT", s[s.EVENT = 2] = "EVENT", s[s.ACK = 3] = "ACK", s[s.CONNECT_ERROR = 4] = "CONNECT_ERROR", s[s.BINARY_EVENT = 5] = "BINARY_EVENT", s[s.BINARY_ACK = 6] = "BINARY_ACK";
})(Pe || (Pe = {}));
class wh {
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
    return (t.type === Pe.EVENT || t.type === Pe.ACK) && po(t) ? this.encodeAsBinary({
      type: t.type === Pe.EVENT ? Pe.BINARY_EVENT : Pe.BINARY_ACK,
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
    return (t.type === Pe.BINARY_EVENT || t.type === Pe.BINARY_ACK) && (e += t.attachments + "-"), t.nsp && t.nsp !== "/" && (e += t.nsp + ","), t.id != null && (e += t.id), t.data != null && (e += JSON.stringify(t.data, this.replacer)), e;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(t) {
    const e = vh(t), a = this.encodeAsString(e.packet), c = e.buffers;
    return c.unshift(a), c;
  }
}
function tc(s) {
  return Object.prototype.toString.call(s) === "[object Object]";
}
class ca extends nt {
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
      const a = e.type === Pe.BINARY_EVENT;
      a || e.type === Pe.BINARY_ACK ? (e.type = a ? Pe.EVENT : Pe.ACK, this.reconstructor = new Eh(e), e.attachments === 0 && super.emitReserved("decoded", e)) : super.emitReserved("decoded", e);
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
    const a = {
      type: Number(t.charAt(0))
    };
    if (Pe[a.type] === void 0)
      throw new Error("unknown packet type " + a.type);
    if (a.type === Pe.BINARY_EVENT || a.type === Pe.BINARY_ACK) {
      const u = e + 1;
      for (; t.charAt(++e) !== "-" && e != t.length; )
        ;
      const f = t.substring(u, e);
      if (f != Number(f) || t.charAt(e) !== "-")
        throw new Error("Illegal attachments");
      a.attachments = Number(f);
    }
    if (t.charAt(e + 1) === "/") {
      const u = e + 1;
      for (; ++e && !(t.charAt(e) === "," || e === t.length); )
        ;
      a.nsp = t.substring(u, e);
    } else
      a.nsp = "/";
    const c = t.charAt(e + 1);
    if (c !== "" && Number(c) == c) {
      const u = e + 1;
      for (; ++e; ) {
        const f = t.charAt(e);
        if (f == null || Number(f) != f) {
          --e;
          break;
        }
        if (e === t.length)
          break;
      }
      a.id = Number(t.substring(u, e + 1));
    }
    if (t.charAt(++e)) {
      const u = this.tryParse(t.substr(e));
      if (ca.isPayloadValid(a.type, u))
        a.data = u;
      else
        throw new Error("invalid payload");
    }
    return a;
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
      case Pe.CONNECT:
        return tc(e);
      case Pe.DISCONNECT:
        return e === void 0;
      case Pe.CONNECT_ERROR:
        return typeof e == "string" || tc(e);
      case Pe.EVENT:
      case Pe.BINARY_EVENT:
        return Array.isArray(e) && (typeof e[0] == "number" || typeof e[0] == "string" && bh.indexOf(e[0]) === -1);
      case Pe.ACK:
      case Pe.BINARY_ACK:
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
class Eh {
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
      const e = yh(this.reconPack, this.buffers);
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
const Ch = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: ca,
  Encoder: wh,
  get PacketType() {
    return Pe;
  },
  protocol: Sh
}, Symbol.toStringTag, { value: "Module" }));
function Lt(s, t, e) {
  return s.on(t, e), function() {
    s.off(t, e);
  };
}
const Ah = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class nu extends nt {
  /**
   * `Socket` constructor.
   */
  constructor(t, e, a) {
    super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = t, this.nsp = e, a && a.auth && (this.auth = a.auth), this._opts = Object.assign({}, a), this.io._autoConnect && this.open();
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
      Lt(t, "open", this.onopen.bind(this)),
      Lt(t, "packet", this.onpacket.bind(this)),
      Lt(t, "error", this.onerror.bind(this)),
      Lt(t, "close", this.onclose.bind(this))
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
    var a, c, u;
    if (Ah.hasOwnProperty(t))
      throw new Error('"' + t.toString() + '" is a reserved event name');
    if (e.unshift(t), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(e), this;
    const f = {
      type: Pe.EVENT,
      data: e
    };
    if (f.options = {}, f.options.compress = this.flags.compress !== !1, typeof e[e.length - 1] == "function") {
      const S = this.ids++, w = e.pop();
      this._registerAckCallback(S, w), f.id = S;
    }
    const x = (c = (a = this.io.engine) === null || a === void 0 ? void 0 : a.transport) === null || c === void 0 ? void 0 : c.writable, v = this.connected && !(!((u = this.io.engine) === null || u === void 0) && u._hasPingExpired());
    return this.flags.volatile && !x || (v ? (this.notifyOutgoingListeners(f), this.packet(f)) : this.sendBuffer.push(f)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(t, e) {
    var a;
    const c = (a = this.flags.timeout) !== null && a !== void 0 ? a : this._opts.ackTimeout;
    if (c === void 0) {
      this.acks[t] = e;
      return;
    }
    const u = this.io.setTimeoutFn(() => {
      delete this.acks[t];
      for (let x = 0; x < this.sendBuffer.length; x++)
        this.sendBuffer[x].id === t && this.sendBuffer.splice(x, 1);
      e.call(this, new Error("operation has timed out"));
    }, c), f = (...x) => {
      this.io.clearTimeoutFn(u), e.apply(this, x);
    };
    f.withError = !0, this.acks[t] = f;
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
    return new Promise((a, c) => {
      const u = (f, x) => f ? c(f) : a(x);
      u.withError = !0, e.push(u), this.emit(t, ...e);
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
    const a = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: t,
      flags: Object.assign({ fromQueue: !0 }, this.flags)
    };
    t.push((c, ...u) => a !== this._queue[0] ? void 0 : (c !== null ? a.tryCount > this._opts.retries && (this._queue.shift(), e && e(c)) : (this._queue.shift(), e && e(null, ...u)), a.pending = !1, this._drainQueue())), this._queue.push(a), this._drainQueue();
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
      type: Pe.CONNECT,
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
      if (!this.sendBuffer.some((a) => String(a.id) === t)) {
        const a = this.acks[t];
        delete this.acks[t], a.withError && a.call(this, new Error("socket has been disconnected"));
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
        case Pe.CONNECT:
          t.data && t.data.sid ? this.onconnect(t.data.sid, t.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case Pe.EVENT:
        case Pe.BINARY_EVENT:
          this.onevent(t);
          break;
        case Pe.ACK:
        case Pe.BINARY_ACK:
          this.onack(t);
          break;
        case Pe.DISCONNECT:
          this.ondisconnect();
          break;
        case Pe.CONNECT_ERROR:
          this.destroy();
          const a = new Error(t.data.message);
          a.data = t.data.data, this.emitReserved("connect_error", a);
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
      for (const a of e)
        a.apply(this, t);
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
    let a = !1;
    return function(...c) {
      a || (a = !0, e.packet({
        type: Pe.ACK,
        id: t,
        data: c
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
    return this.connected && this.packet({ type: Pe.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
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
      for (let a = 0; a < e.length; a++)
        if (t === e[a])
          return e.splice(a, 1), this;
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
      for (let a = 0; a < e.length; a++)
        if (t === e[a])
          return e.splice(a, 1), this;
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
      for (const a of e)
        a.apply(this, t.data);
    }
  }
}
function sr(s) {
  s = s || {}, this.ms = s.min || 100, this.max = s.max || 1e4, this.factor = s.factor || 2, this.jitter = s.jitter > 0 && s.jitter <= 1 ? s.jitter : 0, this.attempts = 0;
}
sr.prototype.duration = function() {
  var s = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var t = Math.random(), e = Math.floor(t * this.jitter * s);
    s = (Math.floor(t * 10) & 1) == 0 ? s - e : s + e;
  }
  return Math.min(s, this.max) | 0;
};
sr.prototype.reset = function() {
  this.attempts = 0;
};
sr.prototype.setMin = function(s) {
  this.ms = s;
};
sr.prototype.setMax = function(s) {
  this.max = s;
};
sr.prototype.setJitter = function(s) {
  this.jitter = s;
};
class ss extends nt {
  constructor(t, e) {
    var a;
    super(), this.nsps = {}, this.subs = [], t && typeof t == "object" && (e = t, t = void 0), e = e || {}, e.path = e.path || "/socket.io", this.opts = e, ii(this, e), this.reconnection(e.reconnection !== !1), this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0), this.reconnectionDelay(e.reconnectionDelay || 1e3), this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3), this.randomizationFactor((a = e.randomizationFactor) !== null && a !== void 0 ? a : 0.5), this.backoff = new sr({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(e.timeout == null ? 2e4 : e.timeout), this._readyState = "closed", this.uri = t;
    const c = e.parser || Ch;
    this.encoder = new c.Encoder(), this.decoder = new c.Decoder(), this._autoConnect = e.autoConnect !== !1, this._autoConnect && this.open();
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
    this.engine = new dh(this.uri, this.opts);
    const e = this.engine, a = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const c = Lt(e, "open", function() {
      a.onopen(), t && t();
    }), u = (x) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", x), t ? t(x) : this.maybeReconnectOnOpen();
    }, f = Lt(e, "error", u);
    if (this._timeout !== !1) {
      const x = this._timeout, v = this.setTimeoutFn(() => {
        c(), u(new Error("timeout")), e.close();
      }, x);
      this.opts.autoUnref && v.unref(), this.subs.push(() => {
        this.clearTimeoutFn(v);
      });
    }
    return this.subs.push(c), this.subs.push(f), this;
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
      Lt(t, "ping", this.onping.bind(this)),
      Lt(t, "data", this.ondata.bind(this)),
      Lt(t, "error", this.onerror.bind(this)),
      Lt(t, "close", this.onclose.bind(this)),
      // @ts-ignore
      Lt(this.decoder, "decoded", this.ondecoded.bind(this))
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
    oi(() => {
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
    let a = this.nsps[t];
    return a ? this._autoConnect && !a.active && a.connect() : (a = new nu(this, t, e), this.nsps[t] = a), a;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(t) {
    const e = Object.keys(this.nsps);
    for (const a of e)
      if (this.nsps[a].active)
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
    for (let a = 0; a < e.length; a++)
      this.engine.write(e[a], t.options);
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
    var a;
    this.cleanup(), (a = this.engine) === null || a === void 0 || a.close(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", t, e), this._reconnection && !this.skipReconnect && this.reconnect();
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
      const a = this.setTimeoutFn(() => {
        t.skipReconnect || (this.emitReserved("reconnect_attempt", t.backoff.attempts), !t.skipReconnect && t.open((c) => {
          c ? (t._reconnecting = !1, t.reconnect(), this.emitReserved("reconnect_error", c)) : t.onreconnect();
        }));
      }, e);
      this.opts.autoUnref && a.unref(), this.subs.push(() => {
        this.clearTimeoutFn(a);
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
const mr = {};
function xo(s, t) {
  typeof s == "object" && (t = s, s = void 0), t = t || {};
  const e = hh(s, t.path || "/socket.io"), a = e.source, c = e.id, u = e.path, f = mr[c] && u in mr[c].nsps, x = t.forceNew || t["force new connection"] || t.multiplex === !1 || f;
  let v;
  return x ? v = new ss(a, t) : (mr[c] || (mr[c] = new ss(a, t)), v = mr[c]), e.query && !t.query && (t.query = e.queryKey), v.socket(e.path, t);
}
Object.assign(xo, {
  Manager: ss,
  Socket: nu,
  io: xo,
  connect: xo
});
var _i = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var nc;
function Th() {
  return nc || (nc = 1, function(s) {
    (function() {
      var t = {}.hasOwnProperty;
      function e() {
        for (var u = "", f = 0; f < arguments.length; f++) {
          var x = arguments[f];
          x && (u = c(u, a(x)));
        }
        return u;
      }
      function a(u) {
        if (typeof u == "string" || typeof u == "number")
          return u;
        if (typeof u != "object")
          return "";
        if (Array.isArray(u))
          return e.apply(null, u);
        if (u.toString !== Object.prototype.toString && !u.toString.toString().includes("[native code]"))
          return u.toString();
        var f = "";
        for (var x in u)
          t.call(u, x) && u[x] && (f = c(f, x));
        return f;
      }
      function c(u, f) {
        return f ? u ? u + " " + f : u + f : u;
      }
      s.exports ? (e.default = e, s.exports = e) : window.classNames = e;
    })();
  }(_i)), _i.exports;
}
var Oh = Th();
const dt = /* @__PURE__ */ gd(Oh);
function Zt() {
  return Zt = Object.assign ? Object.assign.bind() : function(s) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var a in e) ({}).hasOwnProperty.call(e, a) && (s[a] = e[a]);
    }
    return s;
  }, Zt.apply(null, arguments);
}
function De(s) {
  "@babel/helpers - typeof";
  return De = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, De(s);
}
var Rh = Symbol.for("react.element"), kh = Symbol.for("react.transitional.element"), Ph = Symbol.for("react.fragment");
function _h(s) {
  return (
    // Base object type
    s && De(s) === "object" && // React Element type
    (s.$$typeof === Rh || s.$$typeof === kh) && // React Fragment type
    s.type === Ph
  );
}
var as = {}, la = [], Ih = function(t) {
  la.push(t);
};
function ua(s, t) {
  if (process.env.NODE_ENV !== "production" && !s && console !== void 0) {
    var e = la.reduce(function(a, c) {
      return c(a ?? "", "warning");
    }, t);
    e && console.error("Warning: ".concat(e));
  }
}
function Nh(s, t) {
  if (process.env.NODE_ENV !== "production" && !s && console !== void 0) {
    var e = la.reduce(function(a, c) {
      return c(a ?? "", "note");
    }, t);
    e && console.warn("Note: ".concat(e));
  }
}
function ru() {
  as = {};
}
function ou(s, t, e) {
  !t && !as[e] && (s(!1, e), as[e] = !0);
}
function bn(s, t) {
  ou(ua, s, t);
}
function jh(s, t) {
  ou(Nh, s, t);
}
bn.preMessage = Ih;
bn.resetWarned = ru;
bn.noteOnce = jh;
function Lh(s, t) {
  if (De(s) != "object" || !s) return s;
  var e = s[Symbol.toPrimitive];
  if (e !== void 0) {
    var a = e.call(s, t);
    if (De(a) != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(s);
}
function iu(s) {
  var t = Lh(s, "string");
  return De(t) == "symbol" ? t : t + "";
}
function se(s, t, e) {
  return (t = iu(t)) in s ? Object.defineProperty(s, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : s[t] = e, s;
}
function rc(s, t) {
  var e = Object.keys(s);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(s);
    t && (a = a.filter(function(c) {
      return Object.getOwnPropertyDescriptor(s, c).enumerable;
    })), e.push.apply(e, a);
  }
  return e;
}
function ne(s) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? rc(Object(e), !0).forEach(function(a) {
      se(s, a, e[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(e)) : rc(Object(e)).forEach(function(a) {
      Object.defineProperty(s, a, Object.getOwnPropertyDescriptor(e, a));
    });
  }
  return s;
}
function oc(s) {
  return s instanceof HTMLElement || s instanceof SVGElement;
}
function Mh(s) {
  return s && De(s) === "object" && oc(s.nativeElement) ? s.nativeElement : oc(s) ? s : null;
}
function Dh(s) {
  var t = Mh(s);
  if (t)
    return t;
  if (s instanceof Je.Component) {
    var e;
    return (e = ka.findDOMNode) === null || e === void 0 ? void 0 : e.call(ka, s);
  }
  return null;
}
var Gr = { exports: {} }, je = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ic;
function Bh() {
  if (ic) return je;
  ic = 1;
  var s = Symbol.for("react.element"), t = Symbol.for("react.portal"), e = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), f = Symbol.for("react.context"), x = Symbol.for("react.server_context"), v = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), S = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), O;
  O = Symbol.for("react.module.reference");
  function C(E) {
    if (typeof E == "object" && E !== null) {
      var L = E.$$typeof;
      switch (L) {
        case s:
          switch (E = E.type, E) {
            case e:
            case c:
            case a:
            case y:
            case S:
              return E;
            default:
              switch (E = E && E.$$typeof, E) {
                case x:
                case f:
                case v:
                case b:
                case w:
                case u:
                  return E;
                default:
                  return L;
              }
          }
        case t:
          return L;
      }
    }
  }
  return je.ContextConsumer = f, je.ContextProvider = u, je.Element = s, je.ForwardRef = v, je.Fragment = e, je.Lazy = b, je.Memo = w, je.Portal = t, je.Profiler = c, je.StrictMode = a, je.Suspense = y, je.SuspenseList = S, je.isAsyncMode = function() {
    return !1;
  }, je.isConcurrentMode = function() {
    return !1;
  }, je.isContextConsumer = function(E) {
    return C(E) === f;
  }, je.isContextProvider = function(E) {
    return C(E) === u;
  }, je.isElement = function(E) {
    return typeof E == "object" && E !== null && E.$$typeof === s;
  }, je.isForwardRef = function(E) {
    return C(E) === v;
  }, je.isFragment = function(E) {
    return C(E) === e;
  }, je.isLazy = function(E) {
    return C(E) === b;
  }, je.isMemo = function(E) {
    return C(E) === w;
  }, je.isPortal = function(E) {
    return C(E) === t;
  }, je.isProfiler = function(E) {
    return C(E) === c;
  }, je.isStrictMode = function(E) {
    return C(E) === a;
  }, je.isSuspense = function(E) {
    return C(E) === y;
  }, je.isSuspenseList = function(E) {
    return C(E) === S;
  }, je.isValidElementType = function(E) {
    return typeof E == "string" || typeof E == "function" || E === e || E === c || E === a || E === y || E === S || E === P || typeof E == "object" && E !== null && (E.$$typeof === b || E.$$typeof === w || E.$$typeof === u || E.$$typeof === f || E.$$typeof === v || E.$$typeof === O || E.getModuleId !== void 0);
  }, je.typeOf = C, je;
}
var Le = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sc;
function Fh() {
  return sc || (sc = 1, process.env.NODE_ENV !== "production" && function() {
    var s = Symbol.for("react.element"), t = Symbol.for("react.portal"), e = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), f = Symbol.for("react.context"), x = Symbol.for("react.server_context"), v = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), S = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), O = !1, C = !1, E = !1, L = !1, I = !1, T;
    T = Symbol.for("react.module.reference");
    function F(ee) {
      return !!(typeof ee == "string" || typeof ee == "function" || ee === e || ee === c || I || ee === a || ee === y || ee === S || L || ee === P || O || C || E || typeof ee == "object" && ee !== null && (ee.$$typeof === b || ee.$$typeof === w || ee.$$typeof === u || ee.$$typeof === f || ee.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      ee.$$typeof === T || ee.getModuleId !== void 0));
    }
    function _(ee) {
      if (typeof ee == "object" && ee !== null) {
        var ct = ee.$$typeof;
        switch (ct) {
          case s:
            var Ve = ee.type;
            switch (Ve) {
              case e:
              case c:
              case a:
              case y:
              case S:
                return Ve;
              default:
                var xt = Ve && Ve.$$typeof;
                switch (xt) {
                  case x:
                  case f:
                  case v:
                  case b:
                  case w:
                  case u:
                    return xt;
                  default:
                    return ct;
                }
            }
          case t:
            return ct;
        }
      }
    }
    var V = f, M = u, Y = s, J = v, ce = e, Se = b, fe = w, K = t, oe = c, re = a, ge = y, he = S, xe = !1, me = !1;
    function pe(ee) {
      return xe || (xe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ae(ee) {
      return me || (me = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function te(ee) {
      return _(ee) === f;
    }
    function le(ee) {
      return _(ee) === u;
    }
    function ve(ee) {
      return typeof ee == "object" && ee !== null && ee.$$typeof === s;
    }
    function ye(ee) {
      return _(ee) === v;
    }
    function Re(ee) {
      return _(ee) === e;
    }
    function U(ee) {
      return _(ee) === b;
    }
    function Z(ee) {
      return _(ee) === w;
    }
    function B(ee) {
      return _(ee) === t;
    }
    function H(ee) {
      return _(ee) === c;
    }
    function N(ee) {
      return _(ee) === a;
    }
    function X(ee) {
      return _(ee) === y;
    }
    function Q(ee) {
      return _(ee) === S;
    }
    Le.ContextConsumer = V, Le.ContextProvider = M, Le.Element = Y, Le.ForwardRef = J, Le.Fragment = ce, Le.Lazy = Se, Le.Memo = fe, Le.Portal = K, Le.Profiler = oe, Le.StrictMode = re, Le.Suspense = ge, Le.SuspenseList = he, Le.isAsyncMode = pe, Le.isConcurrentMode = ae, Le.isContextConsumer = te, Le.isContextProvider = le, Le.isElement = ve, Le.isForwardRef = ye, Le.isFragment = Re, Le.isLazy = U, Le.isMemo = Z, Le.isPortal = B, Le.isProfiler = H, Le.isStrictMode = N, Le.isSuspense = X, Le.isSuspenseList = Q, Le.isValidElementType = F, Le.typeOf = _;
  }()), Le;
}
var ac;
function zh() {
  return ac || (ac = 1, process.env.NODE_ENV === "production" ? Gr.exports = Bh() : Gr.exports = Fh()), Gr.exports;
}
var Ii = zh();
function su(s, t, e) {
  var a = D.useRef({});
  return (!("value" in a.current) || e(a.current.condition, t)) && (a.current.value = s(), a.current.condition = t), a.current.value;
}
var Vh = Number(xd.split(".")[0]), au = function(t, e) {
  typeof t == "function" ? t(e) : De(t) === "object" && t && "current" in t && (t.current = e);
}, Hh = function() {
  for (var t = arguments.length, e = new Array(t), a = 0; a < t; a++)
    e[a] = arguments[a];
  var c = e.filter(Boolean);
  return c.length <= 1 ? c[0] : function(u) {
    e.forEach(function(f) {
      au(f, u);
    });
  };
}, Uh = function(t) {
  var e, a;
  if (!t)
    return !1;
  if (cu(t) && Vh >= 19)
    return !0;
  var c = Ii.isMemo(t) ? t.type.type : t.type;
  return !(typeof c == "function" && !((e = c.prototype) !== null && e !== void 0 && e.render) && c.$$typeof !== Ii.ForwardRef || typeof t == "function" && !((a = t.prototype) !== null && a !== void 0 && a.render) && t.$$typeof !== Ii.ForwardRef);
};
function cu(s) {
  return /* @__PURE__ */ pd(s) && !_h(s);
}
var qh = function(t) {
  if (t && cu(t)) {
    var e = t;
    return e.props.propertyIsEnumerable("ref") ? e.props.ref : e.ref;
  }
  return null;
};
function Vt(s, t) {
  if (!(s instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function cc(s, t) {
  for (var e = 0; e < t.length; e++) {
    var a = t[e];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(s, iu(a.key), a);
  }
}
function Ht(s, t, e) {
  return t && cc(s.prototype, t), e && cc(s, e), Object.defineProperty(s, "prototype", {
    writable: !1
  }), s;
}
function cs(s, t) {
  return cs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, a) {
    return e.__proto__ = a, e;
  }, cs(s, t);
}
function Mr(s, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  s.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: s,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(s, "prototype", {
    writable: !1
  }), t && cs(s, t);
}
function Jn(s) {
  return Jn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Jn(s);
}
function fa() {
  try {
    var s = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (fa = function() {
    return !!s;
  })();
}
function Nn(s) {
  if (s === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return s;
}
function lu(s, t) {
  if (t && (De(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Nn(s);
}
function si(s) {
  var t = fa();
  return function() {
    var e, a = Jn(s);
    if (t) {
      var c = Jn(this).constructor;
      e = Reflect.construct(a, arguments, c);
    } else e = a.apply(this, arguments);
    return lu(this, e);
  };
}
function ls(s, t) {
  (t == null || t > s.length) && (t = s.length);
  for (var e = 0, a = Array(t); e < t; e++) a[e] = s[e];
  return a;
}
function Wh(s) {
  if (Array.isArray(s)) return ls(s);
}
function uu(s) {
  if (typeof Symbol < "u" && s[Symbol.iterator] != null || s["@@iterator"] != null) return Array.from(s);
}
function da(s, t) {
  if (s) {
    if (typeof s == "string") return ls(s, t);
    var e = {}.toString.call(s).slice(8, -1);
    return e === "Object" && s.constructor && (e = s.constructor.name), e === "Map" || e === "Set" ? Array.from(s) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? ls(s, t) : void 0;
  }
}
function $h() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function cn(s) {
  return Wh(s) || uu(s) || da(s) || $h();
}
var fu = function(t) {
  return +setTimeout(t, 16);
}, du = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (fu = function(t) {
  return window.requestAnimationFrame(t);
}, du = function(t) {
  return window.cancelAnimationFrame(t);
});
var lc = 0, ai = /* @__PURE__ */ new Map();
function hu(s) {
  ai.delete(s);
}
var Io = function(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  lc += 1;
  var a = lc;
  function c(u) {
    if (u === 0)
      hu(a), t();
    else {
      var f = fu(function() {
        c(u - 1);
      });
      ai.set(a, f);
    }
  }
  return c(e), a;
};
Io.cancel = function(s) {
  var t = ai.get(s);
  return hu(s), du(t);
};
process.env.NODE_ENV !== "production" && (Io.ids = function() {
  return ai;
});
function pu(s) {
  if (Array.isArray(s)) return s;
}
function Xh(s, t) {
  var e = s == null ? null : typeof Symbol < "u" && s[Symbol.iterator] || s["@@iterator"];
  if (e != null) {
    var a, c, u, f, x = [], v = !0, y = !1;
    try {
      if (u = (e = e.call(s)).next, t === 0) {
        if (Object(e) !== e) return;
        v = !1;
      } else for (; !(v = (a = u.call(e)).done) && (x.push(a.value), x.length !== t); v = !0) ;
    } catch (S) {
      y = !0, c = S;
    } finally {
      try {
        if (!v && e.return != null && (f = e.return(), Object(f) !== f)) return;
      } finally {
        if (y) throw c;
      }
    }
    return x;
  }
}
function xu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ae(s, t) {
  return pu(s) || Xh(s, t) || da(s, t) || xu();
}
function Rr(s) {
  for (var t = 0, e, a = 0, c = s.length; c >= 4; ++a, c -= 4)
    e = s.charCodeAt(a) & 255 | (s.charCodeAt(++a) & 255) << 8 | (s.charCodeAt(++a) & 255) << 16 | (s.charCodeAt(++a) & 255) << 24, e = /* Math.imul(k, m): */
    (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16), e ^= /* k >>> r: */
    e >>> 24, t = /* Math.imul(k, m): */
    (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (c) {
    case 3:
      t ^= (s.charCodeAt(a + 2) & 255) << 16;
    case 2:
      t ^= (s.charCodeAt(a + 1) & 255) << 8;
    case 1:
      t ^= s.charCodeAt(a) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
function ln() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Yh(s, t) {
  if (!s)
    return !1;
  if (s.contains)
    return s.contains(t);
  for (var e = t; e; ) {
    if (e === s)
      return !0;
    e = e.parentNode;
  }
  return !1;
}
var uc = "data-rc-order", fc = "data-rc-priority", Gh = "rc-util-key", us = /* @__PURE__ */ new Map();
function mu() {
  var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = s.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : Gh;
}
function ci(s) {
  if (s.attachTo)
    return s.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function Kh(s) {
  return s === "queue" ? "prependQueue" : s ? "prepend" : "append";
}
function ha(s) {
  return Array.from((us.get(s) || s).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function gu(s) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!ln())
    return null;
  var e = t.csp, a = t.prepend, c = t.priority, u = c === void 0 ? 0 : c, f = Kh(a), x = f === "prependQueue", v = document.createElement("style");
  v.setAttribute(uc, f), x && u && v.setAttribute(fc, "".concat(u)), e != null && e.nonce && (v.nonce = e == null ? void 0 : e.nonce), v.innerHTML = s;
  var y = ci(t), S = y.firstChild;
  if (a) {
    if (x) {
      var w = (t.styles || ha(y)).filter(function(b) {
        if (!["prepend", "prependQueue"].includes(b.getAttribute(uc)))
          return !1;
        var P = Number(b.getAttribute(fc) || 0);
        return u >= P;
      });
      if (w.length)
        return y.insertBefore(v, w[w.length - 1].nextSibling), v;
    }
    y.insertBefore(v, S);
  } else
    y.appendChild(v);
  return v;
}
function vu(s) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = ci(t);
  return (t.styles || ha(e)).find(function(a) {
    return a.getAttribute(mu(t)) === s;
  });
}
function yu(s) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = vu(s, t);
  if (e) {
    var a = ci(t);
    a.removeChild(e);
  }
}
function Zh(s, t) {
  var e = us.get(s);
  if (!e || !Yh(document, e)) {
    var a = gu("", t), c = a.parentNode;
    us.set(s, c), s.removeChild(a);
  }
}
function jn(s, t) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = ci(e), c = ha(a), u = ne(ne({}, e), {}, {
    styles: c
  });
  Zh(a, u);
  var f = vu(t, u);
  if (f) {
    var x, v;
    if ((x = u.csp) !== null && x !== void 0 && x.nonce && f.nonce !== ((v = u.csp) === null || v === void 0 ? void 0 : v.nonce)) {
      var y;
      f.nonce = (y = u.csp) === null || y === void 0 ? void 0 : y.nonce;
    }
    return f.innerHTML !== s && (f.innerHTML = s), f;
  }
  var S = gu(s, u);
  return S.setAttribute(mu(u), t), S;
}
function Jh(s, t) {
  if (s == null) return {};
  var e = {};
  for (var a in s) if ({}.hasOwnProperty.call(s, a)) {
    if (t.indexOf(a) !== -1) continue;
    e[a] = s[a];
  }
  return e;
}
function kr(s, t) {
  if (s == null) return {};
  var e, a, c = Jh(s, t);
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(s);
    for (a = 0; a < u.length; a++) e = u[a], t.indexOf(e) === -1 && {}.propertyIsEnumerable.call(s, e) && (c[e] = s[e]);
  }
  return c;
}
function Qh(s, t) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, a = /* @__PURE__ */ new Set();
  function c(u, f) {
    var x = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, v = a.has(u);
    if (bn(!v, "Warning: There may be circular references"), v)
      return !1;
    if (u === f)
      return !0;
    if (e && x > 1)
      return !1;
    a.add(u);
    var y = x + 1;
    if (Array.isArray(u)) {
      if (!Array.isArray(f) || u.length !== f.length)
        return !1;
      for (var S = 0; S < u.length; S++)
        if (!c(u[S], f[S], y))
          return !1;
      return !0;
    }
    if (u && f && De(u) === "object" && De(f) === "object") {
      var w = Object.keys(u);
      return w.length !== Object.keys(f).length ? !1 : w.every(function(b) {
        return c(u[b], f[b], y);
      });
    }
    return !1;
  }
  return c(s, t);
}
var ep = "%";
function fs(s) {
  return s.join(ep);
}
var tp = /* @__PURE__ */ function() {
  function s(t) {
    Vt(this, s), se(this, "instanceId", void 0), se(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = t;
  }
  return Ht(s, [{
    key: "get",
    value: function(e) {
      return this.opGet(fs(e));
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opGet",
    value: function(e) {
      return this.cache.get(e) || null;
    }
  }, {
    key: "update",
    value: function(e, a) {
      return this.opUpdate(fs(e), a);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(e, a) {
      var c = this.cache.get(e), u = a(c);
      u === null ? this.cache.delete(e) : this.cache.set(e, u);
    }
  }]), s;
}(), Qn = "data-token-hash", Bt = "data-css-hash", np = "data-cache-path", xn = "__cssinjs_instance__";
function rp() {
  var s = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(Bt, "]")) || [], e = document.head.firstChild;
    Array.from(t).forEach(function(c) {
      c[xn] = c[xn] || s, c[xn] === s && document.head.insertBefore(c, e);
    });
    var a = {};
    Array.from(document.querySelectorAll("style[".concat(Bt, "]"))).forEach(function(c) {
      var u = c.getAttribute(Bt);
      if (a[u]) {
        if (c[xn] === s) {
          var f;
          (f = c.parentNode) === null || f === void 0 || f.removeChild(c);
        }
      } else
        a[u] = !0;
    });
  }
  return new tp(s);
}
var Dr = /* @__PURE__ */ D.createContext({
  hashPriority: "low",
  cache: rp(),
  defaultCache: !0
});
function op(s, t) {
  if (s.length !== t.length)
    return !1;
  for (var e = 0; e < s.length; e++)
    if (s[e] !== t[e])
      return !1;
  return !0;
}
var pa = /* @__PURE__ */ function() {
  function s() {
    Vt(this, s), se(this, "cache", void 0), se(this, "keys", void 0), se(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return Ht(s, [{
    key: "size",
    value: function() {
      return this.keys.length;
    }
  }, {
    key: "internalGet",
    value: function(e) {
      var a, c, u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, f = {
        map: this.cache
      };
      return e.forEach(function(x) {
        if (!f)
          f = void 0;
        else {
          var v;
          f = (v = f) === null || v === void 0 || (v = v.map) === null || v === void 0 ? void 0 : v.get(x);
        }
      }), (a = f) !== null && a !== void 0 && a.value && u && (f.value[1] = this.cacheCallTimes++), (c = f) === null || c === void 0 ? void 0 : c.value;
    }
  }, {
    key: "get",
    value: function(e) {
      var a;
      return (a = this.internalGet(e, !0)) === null || a === void 0 ? void 0 : a[0];
    }
  }, {
    key: "has",
    value: function(e) {
      return !!this.internalGet(e);
    }
  }, {
    key: "set",
    value: function(e, a) {
      var c = this;
      if (!this.has(e)) {
        if (this.size() + 1 > s.MAX_CACHE_SIZE + s.MAX_CACHE_OFFSET) {
          var u = this.keys.reduce(function(y, S) {
            var w = Ae(y, 2), b = w[1];
            return c.internalGet(S)[1] < b ? [S, c.internalGet(S)[1]] : y;
          }, [this.keys[0], this.cacheCallTimes]), f = Ae(u, 1), x = f[0];
          this.delete(x);
        }
        this.keys.push(e);
      }
      var v = this.cache;
      e.forEach(function(y, S) {
        if (S === e.length - 1)
          v.set(y, {
            value: [a, c.cacheCallTimes++]
          });
        else {
          var w = v.get(y);
          w ? w.map || (w.map = /* @__PURE__ */ new Map()) : v.set(y, {
            map: /* @__PURE__ */ new Map()
          }), v = v.get(y).map;
        }
      });
    }
  }, {
    key: "deleteByPath",
    value: function(e, a) {
      var c = e.get(a[0]);
      if (a.length === 1) {
        var u;
        return c.map ? e.set(a[0], {
          map: c.map
        }) : e.delete(a[0]), (u = c.value) === null || u === void 0 ? void 0 : u[0];
      }
      var f = this.deleteByPath(c.map, a.slice(1));
      return (!c.map || c.map.size === 0) && !c.value && e.delete(a[0]), f;
    }
  }, {
    key: "delete",
    value: function(e) {
      if (this.has(e))
        return this.keys = this.keys.filter(function(a) {
          return !op(a, e);
        }), this.deleteByPath(this.cache, e);
    }
  }]), s;
}();
se(pa, "MAX_CACHE_SIZE", 20);
se(pa, "MAX_CACHE_OFFSET", 5);
var dc = 0, bu = /* @__PURE__ */ function() {
  function s(t) {
    Vt(this, s), se(this, "derivatives", void 0), se(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = dc, t.length === 0 && ua(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), dc += 1;
  }
  return Ht(s, [{
    key: "getDerivativeToken",
    value: function(e) {
      return this.derivatives.reduce(function(a, c) {
        return c(e, a);
      }, void 0);
    }
  }]), s;
}(), Ni = new pa();
function ds(s) {
  var t = Array.isArray(s) ? s : [s];
  return Ni.has(t) || Ni.set(t, new bu(t)), Ni.get(t);
}
var ip = /* @__PURE__ */ new WeakMap(), ji = {};
function sp(s, t) {
  for (var e = ip, a = 0; a < t.length; a += 1) {
    var c = t[a];
    e.has(c) || e.set(c, /* @__PURE__ */ new WeakMap()), e = e.get(c);
  }
  return e.has(ji) || e.set(ji, s()), e.get(ji);
}
var hc = /* @__PURE__ */ new WeakMap();
function Ar(s) {
  var t = hc.get(s) || "";
  return t || (Object.keys(s).forEach(function(e) {
    var a = s[e];
    t += e, a instanceof bu ? t += a.id : a && De(a) === "object" ? t += Ar(a) : t += a;
  }), t = Rr(t), hc.set(s, t)), t;
}
function pc(s, t) {
  return Rr("".concat(t, "_").concat(Ar(s)));
}
var hs = ln();
function No(s) {
  return typeof s == "number" ? "".concat(s, "px") : s;
}
function jo(s, t, e) {
  var a, c = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, u = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (u)
    return s;
  var f = ne(ne({}, c), {}, (a = {}, se(a, Qn, t), se(a, Bt, e), a)), x = Object.keys(f).map(function(v) {
    var y = f[v];
    return y ? "".concat(v, '="').concat(y, '"') : null;
  }).filter(function(v) {
    return v;
  }).join(" ");
  return "<style ".concat(x, ">").concat(s, "</style>");
}
var mo = function(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(e ? "".concat(e, "-") : "").concat(t).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, ap = function(t, e, a) {
  return Object.keys(t).length ? ".".concat(e).concat(a != null && a.scope ? ".".concat(a.scope) : "", "{").concat(Object.entries(t).map(function(c) {
    var u = Ae(c, 2), f = u[0], x = u[1];
    return "".concat(f, ":").concat(x, ";");
  }).join(""), "}") : "";
}, Su = function(t, e, a) {
  var c = {}, u = {};
  return Object.entries(t).forEach(function(f) {
    var x, v, y = Ae(f, 2), S = y[0], w = y[1];
    if (a != null && (x = a.preserve) !== null && x !== void 0 && x[S])
      u[S] = w;
    else if ((typeof w == "string" || typeof w == "number") && !(a != null && (v = a.ignore) !== null && v !== void 0 && v[S])) {
      var b, P = mo(S, a == null ? void 0 : a.prefix);
      c[P] = typeof w == "number" && !(a != null && (b = a.unitless) !== null && b !== void 0 && b[S]) ? "".concat(w, "px") : String(w), u[S] = "var(".concat(P, ")");
    }
  }), [u, ap(c, e, {
    scope: a == null ? void 0 : a.scope
  })];
}, xc = process.env.NODE_ENV !== "test" && ln() ? D.useLayoutEffect : D.useEffect, wu = function(t, e) {
  var a = D.useRef(!0);
  xc(function() {
    return t(a.current);
  }, e), xc(function() {
    return a.current = !1, function() {
      a.current = !0;
    };
  }, []);
}, cp = ne({}, D), mc = cp.useInsertionEffect, lp = function(t, e, a) {
  D.useMemo(t, a), wu(function() {
    return e(!0);
  }, a);
}, up = mc ? function(s, t, e) {
  return mc(function() {
    return s(), t();
  }, e);
} : lp, fp = ne({}, D), dp = fp.useInsertionEffect, hp = function(t) {
  var e = [], a = !1;
  function c(u) {
    if (a) {
      process.env.NODE_ENV !== "production" && ua(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    e.push(u);
  }
  return D.useEffect(function() {
    return a = !1, function() {
      a = !0, e.length && e.forEach(function(u) {
        return u();
      });
    };
  }, t), c;
}, pp = function() {
  return function(t) {
    t();
  };
}, xp = typeof dp < "u" ? hp : pp;
function mp() {
  return !1;
}
var ps = !1;
function gp() {
  return ps;
}
const vp = process.env.NODE_ENV === "production" ? mp : gp;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var Kr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : null;
  if (Kr && typeof Kr.webpackHotUpdate == "function") {
    var yp = Kr.webpackHotUpdate;
    Kr.webpackHotUpdate = function() {
      return ps = !0, setTimeout(function() {
        ps = !1;
      }, 0), yp.apply(void 0, arguments);
    };
  }
}
function xa(s, t, e, a, c) {
  var u = D.useContext(Dr), f = u.cache, x = [s].concat(cn(t)), v = fs(x), y = xp([v]), S = vp(), w = function(C) {
    f.opUpdate(v, function(E) {
      var L = E || [void 0, void 0], I = Ae(L, 2), T = I[0], F = T === void 0 ? 0 : T, _ = I[1], V = _;
      process.env.NODE_ENV !== "production" && _ && S && (a == null || a(V, S), V = null);
      var M = V || e(), Y = [F, M];
      return C ? C(Y) : Y;
    });
  };
  D.useMemo(
    function() {
      w();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [v]
    /* eslint-enable */
  );
  var b = f.opGet(v);
  process.env.NODE_ENV !== "production" && !b && (w(), b = f.opGet(v));
  var P = b[1];
  return up(function() {
    c == null || c(P);
  }, function(O) {
    return w(function(C) {
      var E = Ae(C, 2), L = E[0], I = E[1];
      return O && L === 0 && (c == null || c(P)), [L + 1, I];
    }), function() {
      f.opUpdate(v, function(C) {
        var E = C || [], L = Ae(E, 2), I = L[0], T = I === void 0 ? 0 : I, F = L[1], _ = T - 1;
        return _ === 0 ? (y(function() {
          (O || !f.opGet(v)) && (a == null || a(F, !1));
        }), null) : [T - 1, F];
      });
    };
  }, [v]), P;
}
var bp = {}, Sp = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", Tn = /* @__PURE__ */ new Map();
function wp(s) {
  Tn.set(s, (Tn.get(s) || 0) + 1);
}
function Ep(s, t) {
  if (typeof document < "u") {
    var e = document.querySelectorAll("style[".concat(Qn, '="').concat(s, '"]'));
    e.forEach(function(a) {
      if (a[xn] === t) {
        var c;
        (c = a.parentNode) === null || c === void 0 || c.removeChild(a);
      }
    });
  }
}
var Cp = 0;
function Ap(s, t) {
  Tn.set(s, (Tn.get(s) || 0) - 1);
  var e = Array.from(Tn.keys()), a = e.filter(function(c) {
    var u = Tn.get(c) || 0;
    return u <= 0;
  });
  e.length - a.length > Cp && a.forEach(function(c) {
    Ep(c, t), Tn.delete(c);
  });
}
var Tp = function(t, e, a, c) {
  var u = a.getDerivativeToken(t), f = ne(ne({}, u), e);
  return c && (f = c(f)), f;
}, Eu = "token";
function Op(s, t) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = vn(Dr), c = a.cache.instanceId, u = a.container, f = e.salt, x = f === void 0 ? "" : f, v = e.override, y = v === void 0 ? bp : v, S = e.formatToken, w = e.getComputedToken, b = e.cssVar, P = sp(function() {
    return Object.assign.apply(Object, [{}].concat(cn(t)));
  }, t), O = Ar(P), C = Ar(y), E = b ? Ar(b) : "", L = xa(Eu, [x, s.id, O, C, E], function() {
    var I, T = w ? w(P, y, s) : Tp(P, y, s, S), F = ne({}, T), _ = "";
    if (b) {
      var V = Su(T, b.key, {
        prefix: b.prefix,
        ignore: b.ignore,
        unitless: b.unitless,
        preserve: b.preserve
      }), M = Ae(V, 2);
      T = M[0], _ = M[1];
    }
    var Y = pc(T, x);
    T._tokenKey = Y, F._tokenKey = pc(F, x);
    var J = (I = b == null ? void 0 : b.key) !== null && I !== void 0 ? I : Y;
    T._themeKey = J, wp(J);
    var ce = "".concat(Sp, "-").concat(Rr(Y));
    return T._hashId = ce, [T, ce, F, _, (b == null ? void 0 : b.key) || ""];
  }, function(I) {
    Ap(I[0]._themeKey, c);
  }, function(I) {
    var T = Ae(I, 4), F = T[0], _ = T[3];
    if (b && _) {
      var V = jn(_, Rr("css-variables-".concat(F._themeKey)), {
        mark: Bt,
        prepend: "queue",
        attachTo: u,
        priority: -999
      });
      V[xn] = c, V.setAttribute(Qn, F._themeKey);
    }
  });
  return L;
}
var Rp = function(t, e, a) {
  var c = Ae(t, 5), u = c[2], f = c[3], x = c[4], v = a || {}, y = v.plain;
  if (!f)
    return null;
  var S = u._tokenKey, w = -999, b = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(w)
  }, P = jo(f, x, S, b, y);
  return [w, S, P];
}, kp = {
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
}, Cu = "comm", Au = "rule", Tu = "decl", Pp = "@import", _p = "@namespace", Ip = "@keyframes", Np = "@layer", Ou = Math.abs, ma = String.fromCharCode;
function Ru(s) {
  return s.trim();
}
function go(s, t, e) {
  return s.replace(t, e);
}
function jp(s, t, e) {
  return s.indexOf(t, e);
}
function Wn(s, t) {
  return s.charCodeAt(t) | 0;
}
function er(s, t, e) {
  return s.slice(t, e);
}
function Xt(s) {
  return s.length;
}
function Lp(s) {
  return s.length;
}
function Zr(s, t) {
  return t.push(s), s;
}
var li = 1, tr = 1, ku = 0, _t = 0, tt = 0, ar = "";
function ga(s, t, e, a, c, u, f, x) {
  return { value: s, root: t, parent: e, type: a, props: c, children: u, line: li, column: tr, length: f, return: "", siblings: x };
}
function Mp() {
  return tt;
}
function Dp() {
  return tt = _t > 0 ? Wn(ar, --_t) : 0, tr--, tt === 10 && (tr = 1, li--), tt;
}
function Ft() {
  return tt = _t < ku ? Wn(ar, _t++) : 0, tr++, tt === 10 && (tr = 1, li++), tt;
}
function mn() {
  return Wn(ar, _t);
}
function vo() {
  return _t;
}
function ui(s, t) {
  return er(ar, s, t);
}
function Pr(s) {
  switch (s) {
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
function Bp(s) {
  return li = tr = 1, ku = Xt(ar = s), _t = 0, [];
}
function Fp(s) {
  return ar = "", s;
}
function Li(s) {
  return Ru(ui(_t - 1, xs(s === 91 ? s + 2 : s === 40 ? s + 1 : s)));
}
function zp(s) {
  for (; (tt = mn()) && tt < 33; )
    Ft();
  return Pr(s) > 2 || Pr(tt) > 3 ? "" : " ";
}
function Vp(s, t) {
  for (; --t && Ft() && !(tt < 48 || tt > 102 || tt > 57 && tt < 65 || tt > 70 && tt < 97); )
    ;
  return ui(s, vo() + (t < 6 && mn() == 32 && Ft() == 32));
}
function xs(s) {
  for (; Ft(); )
    switch (tt) {
      // ] ) " '
      case s:
        return _t;
      // " '
      case 34:
      case 39:
        s !== 34 && s !== 39 && xs(tt);
        break;
      // (
      case 40:
        s === 41 && xs(s);
        break;
      // \
      case 92:
        Ft();
        break;
    }
  return _t;
}
function Hp(s, t) {
  for (; Ft() && s + tt !== 57; )
    if (s + tt === 84 && mn() === 47)
      break;
  return "/*" + ui(t, _t - 1) + "*" + ma(s === 47 ? s : Ft());
}
function Up(s) {
  for (; !Pr(mn()); )
    Ft();
  return ui(s, _t);
}
function qp(s) {
  return Fp(yo("", null, null, null, [""], s = Bp(s), 0, [0], s));
}
function yo(s, t, e, a, c, u, f, x, v) {
  for (var y = 0, S = 0, w = f, b = 0, P = 0, O = 0, C = 1, E = 1, L = 1, I = 0, T = "", F = c, _ = u, V = a, M = T; E; )
    switch (O = I, I = Ft()) {
      // (
      case 40:
        if (O != 108 && Wn(M, w - 1) == 58) {
          jp(M += go(Li(I), "&", "&\f"), "&\f", Ou(y ? x[y - 1] : 0)) != -1 && (L = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        M += Li(I);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        M += zp(O);
        break;
      // \
      case 92:
        M += Vp(vo() - 1, 7);
        continue;
      // /
      case 47:
        switch (mn()) {
          case 42:
          case 47:
            Zr(Wp(Hp(Ft(), vo()), t, e, v), v), (Pr(O || 1) == 5 || Pr(mn() || 1) == 5) && Xt(M) && er(M, -1, void 0) !== " " && (M += " ");
            break;
          default:
            M += "/";
        }
        break;
      // {
      case 123 * C:
        x[y++] = Xt(M) * L;
      // } ; \0
      case 125 * C:
      case 59:
      case 0:
        switch (I) {
          // \0 }
          case 0:
          case 125:
            E = 0;
          // ;
          case 59 + S:
            L == -1 && (M = go(M, /\f/g, "")), P > 0 && (Xt(M) - w || C === 0 && O === 47) && Zr(P > 32 ? vc(M + ";", a, e, w - 1, v) : vc(go(M, " ", "") + ";", a, e, w - 2, v), v);
            break;
          // @ ;
          case 59:
            M += ";";
          // { rule/at-rule
          default:
            if (Zr(V = gc(M, t, e, y, S, c, x, T, F = [], _ = [], w, u), u), I === 123)
              if (S === 0)
                yo(M, t, V, V, F, u, w, x, _);
              else {
                switch (b) {
                  // c(ontainer)
                  case 99:
                    if (Wn(M, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (Wn(M, 2) === 97) break;
                  default:
                    S = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                S ? yo(s, V, V, a && Zr(gc(s, V, V, 0, 0, c, x, T, c, F = [], w, _), _), c, _, w, x, a ? F : _) : yo(M, V, V, V, [""], _, 0, x, _);
              }
        }
        y = S = P = 0, C = L = 1, T = M = "", w = f;
        break;
      // :
      case 58:
        w = 1 + Xt(M), P = O;
      default:
        if (C < 1) {
          if (I == 123)
            --C;
          else if (I == 125 && C++ == 0 && Dp() == 125)
            continue;
        }
        switch (M += ma(I), I * C) {
          // &
          case 38:
            L = S > 0 ? 1 : (M += "\f", -1);
            break;
          // ,
          case 44:
            x[y++] = (Xt(M) - 1) * L, L = 1;
            break;
          // @
          case 64:
            mn() === 45 && (M += Li(Ft())), b = mn(), S = w = Xt(T = M += Up(vo())), I++;
            break;
          // -
          case 45:
            O === 45 && Xt(M) == 2 && (C = 0);
        }
    }
  return u;
}
function gc(s, t, e, a, c, u, f, x, v, y, S, w) {
  for (var b = c - 1, P = c === 0 ? u : [""], O = Lp(P), C = 0, E = 0, L = 0; C < a; ++C)
    for (var I = 0, T = er(s, b + 1, b = Ou(E = f[C])), F = s; I < O; ++I)
      (F = Ru(E > 0 ? P[I] + " " + T : go(T, /&\f/g, P[I]))) && (v[L++] = F);
  return ga(s, t, e, c === 0 ? Au : x, v, y, S, w);
}
function Wp(s, t, e, a) {
  return ga(s, t, e, Cu, ma(Mp()), er(s, 2, -2), 0, a);
}
function vc(s, t, e, a, c) {
  return ga(s, t, e, Tu, er(s, 0, a), er(s, a + 1, -1), a, c);
}
function ms(s, t) {
  for (var e = "", a = 0; a < s.length; a++)
    e += t(s[a], a, s, t) || "";
  return e;
}
function $p(s, t, e, a) {
  switch (s.type) {
    case Np:
      if (s.children.length) break;
    case Pp:
    case _p:
    case Tu:
      return s.return = s.return || s.value;
    case Cu:
      return "";
    case Ip:
      return s.return = s.value + "{" + ms(s.children, a) + "}";
    case Au:
      if (!Xt(s.value = s.props.join(","))) return "";
  }
  return Xt(e = ms(s.children, a)) ? s.return = s.value + "{" + e + "}" : "";
}
function Pu(s, t) {
  var e = t.path, a = t.parentSelectors;
  bn(!1, "[Ant Design CSS-in-JS] ".concat(e ? "Error in ".concat(e, ": ") : "").concat(s).concat(a.length ? " Selector: ".concat(a.join(" | ")) : ""));
}
var Xp = function(t, e, a) {
  if (t === "content") {
    var c = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, u = ["normal", "none", "initial", "inherit", "unset"];
    (typeof e != "string" || u.indexOf(e) === -1 && !c.test(e) && (e.charAt(0) !== e.charAt(e.length - 1) || e.charAt(0) !== '"' && e.charAt(0) !== "'")) && Pu("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(e, "\"'`."), a);
  }
}, Yp = function(t, e, a) {
  t === "animation" && a.hashId && e !== "none" && Pu("You seem to be using hashed animation '".concat(e, "', in which case 'animationName' with Keyframe as value is recommended."), a);
}, yc = "data-ant-cssinjs-cache-path", _u = "_FILE_STYLE__", Ln, Iu = !0;
function Gp() {
  if (!Ln && (Ln = {}, ln())) {
    var s = document.createElement("div");
    s.className = yc, s.style.position = "fixed", s.style.visibility = "hidden", s.style.top = "-9999px", document.body.appendChild(s);
    var t = getComputedStyle(s).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(c) {
      var u = c.split(":"), f = Ae(u, 2), x = f[0], v = f[1];
      Ln[x] = v;
    });
    var e = document.querySelector("style[".concat(yc, "]"));
    if (e) {
      var a;
      Iu = !1, (a = e.parentNode) === null || a === void 0 || a.removeChild(e);
    }
    document.body.removeChild(s);
  }
}
function Kp(s) {
  return Gp(), !!Ln[s];
}
function Zp(s) {
  var t = Ln[s], e = null;
  if (t && ln())
    if (Iu)
      e = _u;
    else {
      var a = document.querySelector("style[".concat(Bt, '="').concat(Ln[s], '"]'));
      a ? e = a.innerHTML : delete Ln[s];
    }
  return [e, t];
}
var Nu = "_skip_check_", ju = "_multi_value_";
function bo(s) {
  var t = ms(qp(s), $p);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function Jp(s) {
  return De(s) === "object" && s && (Nu in s || ju in s);
}
function bc(s, t, e) {
  if (!t)
    return s;
  var a = ".".concat(t), c = e === "low" ? ":where(".concat(a, ")") : a, u = s.split(",").map(function(f) {
    var x, v = f.trim().split(/\s+/), y = v[0] || "", S = ((x = y.match(/^\w+/)) === null || x === void 0 ? void 0 : x[0]) || "";
    return y = "".concat(S).concat(c).concat(y.slice(S.length)), [y].concat(cn(v.slice(1))).join(" ");
  });
  return u.join(",");
}
var Qp = function s(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, c = a.root, u = a.injectHash, f = a.parentSelectors, x = e.hashId, v = e.layer, y = e.path, S = e.hashPriority, w = e.transformers, b = w === void 0 ? [] : w, P = e.linters, O = P === void 0 ? [] : P, C = "", E = {};
  function L(F) {
    var _ = F.getName(x);
    if (!E[_]) {
      var V = s(F.style, e, {
        root: !1,
        parentSelectors: f
      }), M = Ae(V, 1), Y = M[0];
      E[_] = "@keyframes ".concat(F.getName(x)).concat(Y);
    }
  }
  function I(F) {
    var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return F.forEach(function(V) {
      Array.isArray(V) ? I(V, _) : V && _.push(V);
    }), _;
  }
  var T = I(Array.isArray(t) ? t : [t]);
  return T.forEach(function(F) {
    var _ = typeof F == "string" && !c ? {} : F;
    if (typeof _ == "string")
      C += "".concat(_, `
`);
    else if (_._keyframe)
      L(_);
    else {
      var V = b.reduce(function(M, Y) {
        var J;
        return (Y == null || (J = Y.visit) === null || J === void 0 ? void 0 : J.call(Y, M)) || M;
      }, _);
      Object.keys(V).forEach(function(M) {
        var Y = V[M];
        if (De(Y) === "object" && Y && (M !== "animationName" || !Y._keyframe) && !Jp(Y)) {
          var J = !1, ce = M.trim(), Se = !1;
          (c || u) && x ? ce.startsWith("@") ? J = !0 : ce === "&" ? ce = bc("", x, S) : ce = bc(M, x, S) : c && !x && (ce === "&" || ce === "") && (ce = "", Se = !0);
          var fe = s(Y, e, {
            root: Se,
            injectHash: J,
            parentSelectors: [].concat(cn(f), [ce])
          }), K = Ae(fe, 2), oe = K[0], re = K[1];
          E = ne(ne({}, E), re), C += "".concat(ce).concat(oe);
        } else {
          let xe = function(me, pe) {
            process.env.NODE_ENV !== "production" && (De(Y) !== "object" || !(Y != null && Y[Nu])) && [Xp, Yp].concat(cn(O)).forEach(function(le) {
              return le(me, pe, {
                path: y,
                hashId: x,
                parentSelectors: f
              });
            });
            var ae = me.replace(/[A-Z]/g, function(le) {
              return "-".concat(le.toLowerCase());
            }), te = pe;
            !kp[me] && typeof te == "number" && te !== 0 && (te = "".concat(te, "px")), me === "animationName" && pe !== null && pe !== void 0 && pe._keyframe && (L(pe), te = pe.getName(x)), C += "".concat(ae, ":").concat(te, ";");
          };
          var ge, he = (ge = Y == null ? void 0 : Y.value) !== null && ge !== void 0 ? ge : Y;
          De(Y) === "object" && Y !== null && Y !== void 0 && Y[ju] && Array.isArray(he) ? he.forEach(function(me) {
            xe(M, me);
          }) : xe(M, he);
        }
      });
    }
  }), c ? v && (C && (C = "@layer ".concat(v.name, " {").concat(C, "}")), v.dependencies && (E["@layer ".concat(v.name)] = v.dependencies.map(function(F) {
    return "@layer ".concat(F, ", ").concat(v.name, ";");
  }).join(`
`))) : C = "{".concat(C, "}"), [C, E];
};
function Lu(s, t) {
  return Rr("".concat(s.join("%")).concat(t));
}
function ex() {
  return null;
}
var Mu = "style";
function gs(s, t) {
  var e = s.token, a = s.path, c = s.hashId, u = s.layer, f = s.nonce, x = s.clientOnly, v = s.order, y = v === void 0 ? 0 : v, S = D.useContext(Dr), w = S.autoClear, b = S.mock, P = S.defaultCache, O = S.hashPriority, C = S.container, E = S.ssrInline, L = S.transformers, I = S.linters, T = S.cache, F = S.layer, _ = e._tokenKey, V = [_];
  F && V.push("layer"), V.push.apply(V, cn(a));
  var M = hs;
  process.env.NODE_ENV !== "production" && b !== void 0 && (M = b === "client");
  var Y = xa(
    Mu,
    V,
    // Create cache if needed
    function() {
      var K = V.join("|");
      if (Kp(K)) {
        var oe = Zp(K), re = Ae(oe, 2), ge = re[0], he = re[1];
        if (ge)
          return [ge, _, he, {}, x, y];
      }
      var xe = t(), me = Qp(xe, {
        hashId: c,
        hashPriority: O,
        layer: F ? u : void 0,
        path: a.join("-"),
        transformers: L,
        linters: I
      }), pe = Ae(me, 2), ae = pe[0], te = pe[1], le = bo(ae), ve = Lu(V, le);
      return [le, _, ve, te, x, y];
    },
    // Remove cache if no need
    function(K, oe) {
      var re = Ae(K, 3), ge = re[2];
      (oe || w) && hs && yu(ge, {
        mark: Bt
      });
    },
    // Effect: Inject style here
    function(K) {
      var oe = Ae(K, 4), re = oe[0];
      oe[1];
      var ge = oe[2], he = oe[3];
      if (M && re !== _u) {
        var xe = {
          mark: Bt,
          prepend: F ? !1 : "queue",
          attachTo: C,
          priority: y
        }, me = typeof f == "function" ? f() : f;
        me && (xe.csp = {
          nonce: me
        });
        var pe = [], ae = [];
        Object.keys(he).forEach(function(le) {
          le.startsWith("@layer") ? pe.push(le) : ae.push(le);
        }), pe.forEach(function(le) {
          jn(bo(he[le]), "_layer-".concat(le), ne(ne({}, xe), {}, {
            prepend: !0
          }));
        });
        var te = jn(re, ge, xe);
        te[xn] = T.instanceId, te.setAttribute(Qn, _), process.env.NODE_ENV !== "production" && te.setAttribute(np, V.join("|")), ae.forEach(function(le) {
          jn(bo(he[le]), "_effect-".concat(le), xe);
        });
      }
    }
  ), J = Ae(Y, 3), ce = J[0], Se = J[1], fe = J[2];
  return function(K) {
    var oe;
    if (!E || M || !P)
      oe = /* @__PURE__ */ D.createElement(ex, null);
    else {
      var re;
      oe = /* @__PURE__ */ D.createElement("style", Zt({}, (re = {}, se(re, Qn, Se), se(re, Bt, fe), re), {
        dangerouslySetInnerHTML: {
          __html: ce
        }
      }));
    }
    return /* @__PURE__ */ D.createElement(D.Fragment, null, oe, K);
  };
}
var tx = function(t, e, a) {
  var c = Ae(t, 6), u = c[0], f = c[1], x = c[2], v = c[3], y = c[4], S = c[5], w = a || {}, b = w.plain;
  if (y)
    return null;
  var P = u, O = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(S)
  };
  return P = jo(u, f, x, O, b), v && Object.keys(v).forEach(function(C) {
    if (!e[C]) {
      e[C] = !0;
      var E = bo(v[C]), L = jo(E, f, "_effect-".concat(C), O, b);
      C.startsWith("@layer") ? P = L + P : P += L;
    }
  }), [S, x, P];
}, Du = "cssVar", nx = function(t, e) {
  var a = t.key, c = t.prefix, u = t.unitless, f = t.ignore, x = t.token, v = t.scope, y = v === void 0 ? "" : v, S = vn(Dr), w = S.cache.instanceId, b = S.container, P = x._tokenKey, O = [].concat(cn(t.path), [a, y, P]), C = xa(Du, O, function() {
    var E = e(), L = Su(E, a, {
      prefix: c,
      unitless: u,
      ignore: f,
      scope: y
    }), I = Ae(L, 2), T = I[0], F = I[1], _ = Lu(O, F);
    return [T, F, _, a];
  }, function(E) {
    var L = Ae(E, 3), I = L[2];
    hs && yu(I, {
      mark: Bt
    });
  }, function(E) {
    var L = Ae(E, 3), I = L[1], T = L[2];
    if (I) {
      var F = jn(I, T, {
        mark: Bt,
        prepend: "queue",
        attachTo: b,
        priority: -999
      });
      F[xn] = w, F.setAttribute(Qn, a);
    }
  });
  return C;
}, rx = function(t, e, a) {
  var c = Ae(t, 4), u = c[1], f = c[2], x = c[3], v = a || {}, y = v.plain;
  if (!u)
    return null;
  var S = -999, w = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(S)
  }, b = jo(u, x, f, w, y);
  return [S, f, b];
}, gr;
gr = {}, se(gr, Mu, tx), se(gr, Eu, Rp), se(gr, Du, rx);
var Bu = /* @__PURE__ */ function() {
  function s(t, e) {
    Vt(this, s), se(this, "name", void 0), se(this, "style", void 0), se(this, "_keyframe", !0), this.name = t, this.style = e;
  }
  return Ht(s, [{
    key: "getName",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return e ? "".concat(e, "-").concat(this.name) : this.name;
    }
  }]), s;
}();
function Vn(s) {
  return s.notSplit = !0, s;
}
Vn(["borderTop", "borderBottom"]), Vn(["borderTop"]), Vn(["borderBottom"]), Vn(["borderLeft", "borderRight"]), Vn(["borderLeft"]), Vn(["borderRight"]);
var va = /* @__PURE__ */ Js({});
function ox(s) {
  return pu(s) || uu(s) || da(s) || xu();
}
function vs(s, t) {
  for (var e = s, a = 0; a < t.length; a += 1) {
    if (e == null)
      return;
    e = e[t[a]];
  }
  return e;
}
function Fu(s, t, e, a) {
  if (!t.length)
    return e;
  var c = ox(t), u = c[0], f = c.slice(1), x;
  return !s && typeof u == "number" ? x = [] : Array.isArray(s) ? x = cn(s) : x = ne({}, s), a && e === void 0 && f.length === 1 ? delete x[u][f[0]] : x[u] = Fu(x[u], f, e, a), x;
}
function Mi(s, t, e) {
  var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && a && e === void 0 && !vs(s, t.slice(0, -1)) ? s : Fu(s, t, e, a);
}
function ix(s) {
  return De(s) === "object" && s !== null && Object.getPrototypeOf(s) === Object.prototype;
}
function Sc(s) {
  return Array.isArray(s) ? [] : {};
}
var sx = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function ax() {
  for (var s = arguments.length, t = new Array(s), e = 0; e < s; e++)
    t[e] = arguments[e];
  var a = Sc(t[0]);
  return t.forEach(function(c) {
    function u(f, x) {
      var v = new Set(x), y = vs(c, f), S = Array.isArray(y);
      if (S || ix(y)) {
        if (!v.has(y)) {
          v.add(y);
          var w = vs(a, f);
          S ? a = Mi(a, f, []) : (!w || De(w) !== "object") && (a = Mi(a, f, Sc(y))), sx(y).forEach(function(b) {
            u([].concat(cn(f), [b]), v);
          });
        }
      } else
        a = Mi(a, f, y);
    }
    u([]);
  }), a;
}
function zu() {
}
let on = null;
function cx() {
  on = null, ru();
}
let ya = zu;
process.env.NODE_ENV !== "production" && (ya = (s, t, e) => {
  bn(s, `[antd: ${t}] ${e}`), process.env.NODE_ENV === "test" && cx();
});
const Vu = /* @__PURE__ */ D.createContext({}), cr = process.env.NODE_ENV !== "production" ? (s) => {
  const {
    strict: t
  } = D.useContext(Vu), e = (a, c, u) => {
    if (!a)
      if (t === !1 && c === "deprecated") {
        const f = on;
        on || (on = {}), on[s] = on[s] || [], on[s].includes(u || "") || on[s].push(u || ""), f || console.warn("[antd] There exists deprecated usage in your code:", on);
      } else
        process.env.NODE_ENV !== "production" && ya(a, s, u);
  };
  return e.deprecated = (a, c, u, f) => {
    e(a, "deprecated", `\`${c}\` is deprecated. Please use \`${u}\` instead.${f ? ` ${f}` : ""}`);
  }, e;
} : () => {
  const s = () => {
  };
  return s.deprecated = zu, s;
}, fi = ya, lx = /* @__PURE__ */ Js(void 0), Tt = "${label} is not a valid ${type}", di = {
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
        string: Tt,
        method: Tt,
        array: Tt,
        object: Tt,
        number: Tt,
        date: Tt,
        boolean: Tt,
        integer: Tt,
        float: Tt,
        regexp: Tt,
        email: Tt,
        url: Tt,
        hex: Tt
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
Object.assign({}, di.Modal);
let So = [];
const wc = () => So.reduce((s, t) => Object.assign(Object.assign({}, s), t), di.Modal);
function ux(s) {
  if (s) {
    const t = Object.assign({}, s);
    return So.push(t), wc(), () => {
      So = So.filter((e) => e !== t), wc();
    };
  }
  Object.assign({}, di.Modal);
}
const Hu = /* @__PURE__ */ Js(void 0), Uu = "internalMark", qu = (s) => {
  const {
    locale: t = {},
    children: e,
    _ANT_MARK__: a
  } = s;
  if (process.env.NODE_ENV !== "production") {
    const u = cr("LocaleProvider");
    process.env.NODE_ENV !== "production" && u(a === Uu, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  D.useEffect(() => ux(t == null ? void 0 : t.Modal), [t]);
  const c = D.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ D.createElement(Hu.Provider, {
    value: c
  }, e);
};
process.env.NODE_ENV !== "production" && (qu.displayName = "LocaleProvider");
const Wu = {
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
}, _r = Object.assign(Object.assign({}, Wu), {
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
}), st = Math.round;
function Di(s, t) {
  const e = s.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], a = e.map((c) => parseFloat(c));
  for (let c = 0; c < 3; c += 1)
    a[c] = t(a[c] || 0, e[c] || "", c);
  return e[3] ? a[3] = e[3].includes("%") ? a[3] / 100 : a[3] : a[3] = 1, a;
}
const Ec = (s, t, e) => e === 0 ? s : s / 100;
function vr(s, t) {
  const e = t || 255;
  return s > e ? e : s < 0 ? 0 : s;
}
class Ze {
  constructor(t) {
    se(this, "isValid", !0), se(this, "r", 0), se(this, "g", 0), se(this, "b", 0), se(this, "a", 1), se(this, "_h", void 0), se(this, "_s", void 0), se(this, "_l", void 0), se(this, "_v", void 0), se(this, "_max", void 0), se(this, "_min", void 0), se(this, "_brightness", void 0);
    function e(a) {
      return a[0] in t && a[1] in t && a[2] in t;
    }
    if (t) if (typeof t == "string") {
      let c = function(u) {
        return a.startsWith(u);
      };
      const a = t.trim();
      /^#?[A-F\d]{3,8}$/i.test(a) ? this.fromHexString(a) : c("rgb") ? this.fromRgbString(a) : c("hsl") ? this.fromHslString(a) : (c("hsv") || c("hsb")) && this.fromHsvString(a);
    } else if (t instanceof Ze)
      this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this._h = t._h, this._s = t._s, this._l = t._l, this._v = t._v;
    else if (e("rgb"))
      this.r = vr(t.r), this.g = vr(t.g), this.b = vr(t.b), this.a = typeof t.a == "number" ? vr(t.a, 1) : 1;
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
    function t(u) {
      const f = u / 255;
      return f <= 0.03928 ? f / 12.92 : Math.pow((f + 0.055) / 1.055, 2.4);
    }
    const e = t(this.r), a = t(this.g), c = t(this.b);
    return 0.2126 * e + 0.7152 * a + 0.0722 * c;
  }
  getHue() {
    if (typeof this._h > "u") {
      const t = this.getMax() - this.getMin();
      t === 0 ? this._h = 0 : this._h = st(60 * (this.r === this.getMax() ? (this.g - this.b) / t + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / t + 2 : (this.r - this.g) / t + 4));
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
    const e = this.getHue(), a = this.getSaturation();
    let c = this.getLightness() - t / 100;
    return c < 0 && (c = 0), this._c({
      h: e,
      s: a,
      l: c,
      a: this.a
    });
  }
  lighten(t = 10) {
    const e = this.getHue(), a = this.getSaturation();
    let c = this.getLightness() + t / 100;
    return c > 1 && (c = 1), this._c({
      h: e,
      s: a,
      l: c,
      a: this.a
    });
  }
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  mix(t, e = 50) {
    const a = this._c(t), c = e / 100, u = (x) => (a[x] - this[x]) * c + this[x], f = {
      r: st(u("r")),
      g: st(u("g")),
      b: st(u("b")),
      a: st(u("a") * 100) / 100
    };
    return this._c(f);
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
    const e = this._c(t), a = this.a + e.a * (1 - this.a), c = (u) => st((this[u] * this.a + e[u] * e.a * (1 - this.a)) / a);
    return this._c({
      r: c("r"),
      g: c("g"),
      b: c("b"),
      a
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
    const a = (this.g || 0).toString(16);
    t += a.length === 2 ? a : "0" + a;
    const c = (this.b || 0).toString(16);
    if (t += c.length === 2 ? c : "0" + c, typeof this.a == "number" && this.a >= 0 && this.a < 1) {
      const u = st(this.a * 255).toString(16);
      t += u.length === 2 ? u : "0" + u;
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
    const t = this.getHue(), e = st(this.getSaturation() * 100), a = st(this.getLightness() * 100);
    return this.a !== 1 ? `hsla(${t},${e}%,${a}%,${this.a})` : `hsl(${t},${e}%,${a}%)`;
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
  _sc(t, e, a) {
    const c = this.clone();
    return c[t] = vr(e, a), c;
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
    function a(c, u) {
      return parseInt(e[c] + e[u || c], 16);
    }
    e.length < 6 ? (this.r = a(0), this.g = a(1), this.b = a(2), this.a = e[3] ? a(3) / 255 : 1) : (this.r = a(0, 1), this.g = a(2, 3), this.b = a(4, 5), this.a = e[6] ? a(6, 7) / 255 : 1);
  }
  fromHsl({
    h: t,
    s: e,
    l: a,
    a: c
  }) {
    if (this._h = t % 360, this._s = e, this._l = a, this.a = typeof c == "number" ? c : 1, e <= 0) {
      const b = st(a * 255);
      this.r = b, this.g = b, this.b = b;
    }
    let u = 0, f = 0, x = 0;
    const v = t / 60, y = (1 - Math.abs(2 * a - 1)) * e, S = y * (1 - Math.abs(v % 2 - 1));
    v >= 0 && v < 1 ? (u = y, f = S) : v >= 1 && v < 2 ? (u = S, f = y) : v >= 2 && v < 3 ? (f = y, x = S) : v >= 3 && v < 4 ? (f = S, x = y) : v >= 4 && v < 5 ? (u = S, x = y) : v >= 5 && v < 6 && (u = y, x = S);
    const w = a - y / 2;
    this.r = st((u + w) * 255), this.g = st((f + w) * 255), this.b = st((x + w) * 255);
  }
  fromHsv({
    h: t,
    s: e,
    v: a,
    a: c
  }) {
    this._h = t % 360, this._s = e, this._v = a, this.a = typeof c == "number" ? c : 1;
    const u = st(a * 255);
    if (this.r = u, this.g = u, this.b = u, e <= 0)
      return;
    const f = t / 60, x = Math.floor(f), v = f - x, y = st(a * (1 - e) * 255), S = st(a * (1 - e * v) * 255), w = st(a * (1 - e * (1 - v)) * 255);
    switch (x) {
      case 0:
        this.g = w, this.b = y;
        break;
      case 1:
        this.r = S, this.b = y;
        break;
      case 2:
        this.r = y, this.b = w;
        break;
      case 3:
        this.r = y, this.g = S;
        break;
      case 4:
        this.r = w, this.g = y;
        break;
      case 5:
      default:
        this.g = y, this.b = S;
        break;
    }
  }
  fromHsvString(t) {
    const e = Di(t, Ec);
    this.fromHsv({
      h: e[0],
      s: e[1],
      v: e[2],
      a: e[3]
    });
  }
  fromHslString(t) {
    const e = Di(t, Ec);
    this.fromHsl({
      h: e[0],
      s: e[1],
      l: e[2],
      a: e[3]
    });
  }
  fromRgbString(t) {
    const e = Di(t, (a, c) => (
      // Convert percentage to number. e.g. 50% -> 128
      c.includes("%") ? st(a / 100 * 255) : a
    ));
    this.r = e[0], this.g = e[1], this.b = e[2], this.a = e[3];
  }
}
var Jr = 2, Cc = 0.16, fx = 0.05, dx = 0.05, hx = 0.15, $u = 5, Xu = 4, px = [{
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
function Ac(s, t, e) {
  var a;
  return Math.round(s.h) >= 60 && Math.round(s.h) <= 240 ? a = e ? Math.round(s.h) - Jr * t : Math.round(s.h) + Jr * t : a = e ? Math.round(s.h) + Jr * t : Math.round(s.h) - Jr * t, a < 0 ? a += 360 : a >= 360 && (a -= 360), a;
}
function Tc(s, t, e) {
  if (s.h === 0 && s.s === 0)
    return s.s;
  var a;
  return e ? a = s.s - Cc * t : t === Xu ? a = s.s + Cc : a = s.s + fx * t, a > 1 && (a = 1), e && t === $u && a > 0.1 && (a = 0.1), a < 0.06 && (a = 0.06), Math.round(a * 100) / 100;
}
function Oc(s, t, e) {
  var a;
  return e ? a = s.v + dx * t : a = s.v - hx * t, a = Math.max(0, Math.min(1, a)), Math.round(a * 100) / 100;
}
function Ir(s) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = [], a = new Ze(s), c = a.toHsv(), u = $u; u > 0; u -= 1) {
    var f = new Ze({
      h: Ac(c, u, !0),
      s: Tc(c, u, !0),
      v: Oc(c, u, !0)
    });
    e.push(f);
  }
  e.push(a);
  for (var x = 1; x <= Xu; x += 1) {
    var v = new Ze({
      h: Ac(c, x),
      s: Tc(c, x),
      v: Oc(c, x)
    });
    e.push(v);
  }
  return t.theme === "dark" ? px.map(function(y) {
    var S = y.index, w = y.amount;
    return new Ze(t.backgroundColor || "#141414").mix(e[S], w).toHexString();
  }) : e.map(function(y) {
    return y.toHexString();
  });
}
var Bi = {
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
}, ys = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
ys.primary = ys[5];
var bs = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
bs.primary = bs[5];
var Ss = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
Ss.primary = Ss[5];
var ws = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
ws.primary = ws[5];
var Es = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
Es.primary = Es[5];
var Cs = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
Cs.primary = Cs[5];
var As = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
As.primary = As[5];
var Ts = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
Ts.primary = Ts[5];
var Lo = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
Lo.primary = Lo[5];
var Os = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
Os.primary = Os[5];
var Rs = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
Rs.primary = Rs[5];
var ks = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
ks.primary = ks[5];
var Ps = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
Ps.primary = Ps[5];
var Fi = {
  red: ys,
  volcano: bs,
  orange: Ss,
  gold: ws,
  yellow: Es,
  lime: Cs,
  green: As,
  cyan: Ts,
  blue: Lo,
  geekblue: Os,
  purple: Rs,
  magenta: ks,
  grey: Ps
};
function xx(s, t) {
  let {
    generateColorPalettes: e,
    generateNeutralColorPalettes: a
  } = t;
  const {
    colorSuccess: c,
    colorWarning: u,
    colorError: f,
    colorInfo: x,
    colorPrimary: v,
    colorBgBase: y,
    colorTextBase: S
  } = s, w = e(v), b = e(c), P = e(u), O = e(f), C = e(x), E = a(y, S), L = s.colorLink || s.colorInfo, I = e(L), T = new Ze(O[1]).mix(new Ze(O[3]), 50).toHexString();
  return Object.assign(Object.assign({}, E), {
    colorPrimaryBg: w[1],
    colorPrimaryBgHover: w[2],
    colorPrimaryBorder: w[3],
    colorPrimaryBorderHover: w[4],
    colorPrimaryHover: w[5],
    colorPrimary: w[6],
    colorPrimaryActive: w[7],
    colorPrimaryTextHover: w[8],
    colorPrimaryText: w[9],
    colorPrimaryTextActive: w[10],
    colorSuccessBg: b[1],
    colorSuccessBgHover: b[2],
    colorSuccessBorder: b[3],
    colorSuccessBorderHover: b[4],
    colorSuccessHover: b[4],
    colorSuccess: b[6],
    colorSuccessActive: b[7],
    colorSuccessTextHover: b[8],
    colorSuccessText: b[9],
    colorSuccessTextActive: b[10],
    colorErrorBg: O[1],
    colorErrorBgHover: O[2],
    colorErrorBgFilledHover: T,
    colorErrorBgActive: O[3],
    colorErrorBorder: O[3],
    colorErrorBorderHover: O[4],
    colorErrorHover: O[5],
    colorError: O[6],
    colorErrorActive: O[7],
    colorErrorTextHover: O[8],
    colorErrorText: O[9],
    colorErrorTextActive: O[10],
    colorWarningBg: P[1],
    colorWarningBgHover: P[2],
    colorWarningBorder: P[3],
    colorWarningBorderHover: P[4],
    colorWarningHover: P[4],
    colorWarning: P[6],
    colorWarningActive: P[7],
    colorWarningTextHover: P[8],
    colorWarningText: P[9],
    colorWarningTextActive: P[10],
    colorInfoBg: C[1],
    colorInfoBgHover: C[2],
    colorInfoBorder: C[3],
    colorInfoBorderHover: C[4],
    colorInfoHover: C[4],
    colorInfo: C[6],
    colorInfoActive: C[7],
    colorInfoTextHover: C[8],
    colorInfoText: C[9],
    colorInfoTextActive: C[10],
    colorLinkHover: I[4],
    colorLink: I[6],
    colorLinkActive: I[7],
    colorBgMask: new Ze("#000").setA(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const mx = (s) => {
  let t = s, e = s, a = s, c = s;
  return s < 6 && s >= 5 ? t = s + 1 : s < 16 && s >= 6 ? t = s + 2 : s >= 16 && (t = 16), s < 7 && s >= 5 ? e = 4 : s < 8 && s >= 7 ? e = 5 : s < 14 && s >= 8 ? e = 6 : s < 16 && s >= 14 ? e = 7 : s >= 16 && (e = 8), s < 6 && s >= 2 ? a = 1 : s >= 6 && (a = 2), s > 4 && s < 8 ? c = 4 : s >= 8 && (c = 6), {
    borderRadius: s,
    borderRadiusXS: a,
    borderRadiusSM: e,
    borderRadiusLG: t,
    borderRadiusOuter: c
  };
};
function gx(s) {
  const {
    motionUnit: t,
    motionBase: e,
    borderRadius: a,
    lineWidth: c
  } = s;
  return Object.assign({
    // motion
    motionDurationFast: `${(e + t).toFixed(1)}s`,
    motionDurationMid: `${(e + t * 2).toFixed(1)}s`,
    motionDurationSlow: `${(e + t * 3).toFixed(1)}s`,
    // line
    lineWidthBold: c + 1
  }, mx(a));
}
const vx = (s) => {
  const {
    controlHeight: t
  } = s;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function yx(s) {
  return (s + 8) / s;
}
function bx(s) {
  const t = Array.from({
    length: 10
  }).map((e, a) => {
    const c = a - 1, u = s * Math.pow(Math.E, c / 5), f = a > 1 ? Math.floor(u) : Math.ceil(u);
    return Math.floor(f / 2) * 2;
  });
  return t[1] = s, t.map((e) => ({
    size: e,
    lineHeight: yx(e)
  }));
}
const Sx = (s) => {
  const t = bx(s), e = t.map((S) => S.size), a = t.map((S) => S.lineHeight), c = e[1], u = e[0], f = e[2], x = a[1], v = a[0], y = a[2];
  return {
    fontSizeSM: u,
    fontSize: c,
    fontSizeLG: f,
    fontSizeXL: e[3],
    fontSizeHeading1: e[6],
    fontSizeHeading2: e[5],
    fontSizeHeading3: e[4],
    fontSizeHeading4: e[3],
    fontSizeHeading5: e[2],
    lineHeight: x,
    lineHeightLG: y,
    lineHeightSM: v,
    fontHeight: Math.round(x * c),
    fontHeightLG: Math.round(y * f),
    fontHeightSM: Math.round(v * u),
    lineHeightHeading1: a[6],
    lineHeightHeading2: a[5],
    lineHeightHeading3: a[4],
    lineHeightHeading4: a[3],
    lineHeightHeading5: a[2]
  };
};
function wx(s) {
  const {
    sizeUnit: t,
    sizeStep: e
  } = s;
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
const Rt = (s, t) => new Ze(s).setA(t).toRgbString(), yr = (s, t) => new Ze(s).darken(t).toHexString(), Ex = (s) => {
  const t = Ir(s);
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
}, Cx = (s, t) => {
  const e = s || "#fff", a = t || "#000";
  return {
    colorBgBase: e,
    colorTextBase: a,
    colorText: Rt(a, 0.88),
    colorTextSecondary: Rt(a, 0.65),
    colorTextTertiary: Rt(a, 0.45),
    colorTextQuaternary: Rt(a, 0.25),
    colorFill: Rt(a, 0.15),
    colorFillSecondary: Rt(a, 0.06),
    colorFillTertiary: Rt(a, 0.04),
    colorFillQuaternary: Rt(a, 0.02),
    colorBgSolid: Rt(a, 1),
    colorBgSolidHover: Rt(a, 0.75),
    colorBgSolidActive: Rt(a, 0.95),
    colorBgLayout: yr(e, 4),
    colorBgContainer: yr(e, 0),
    colorBgElevated: yr(e, 0),
    colorBgSpotlight: Rt(a, 0.85),
    colorBgBlur: "transparent",
    colorBorder: yr(e, 15),
    colorBorderSecondary: yr(e, 6)
  };
};
function Ax(s) {
  Bi.pink = Bi.magenta, Fi.pink = Fi.magenta;
  const t = Object.keys(Wu).map((e) => {
    const a = s[e] === Bi[e] ? Fi[e] : Ir(s[e]);
    return Array.from({
      length: 10
    }, () => 1).reduce((c, u, f) => (c[`${e}-${f + 1}`] = a[f], c[`${e}${f + 1}`] = a[f], c), {});
  }).reduce((e, a) => (e = Object.assign(Object.assign({}, e), a), e), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, s), t), xx(s, {
    generateColorPalettes: Ex,
    generateNeutralColorPalettes: Cx
  })), Sx(s.fontSize)), wx(s)), vx(s)), gx(s));
}
const Yu = ds(Ax), _s = {
  token: _r,
  override: {
    override: _r
  },
  hashed: !0
}, Gu = /* @__PURE__ */ Je.createContext(_s), Is = "ant", ba = "anticon", Tx = (s, t) => t || (s ? `${Is}-${s}` : Is), yn = /* @__PURE__ */ D.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: Tx,
  iconPrefixCls: ba
}), {
  Consumer: Fv
} = yn, Rc = {};
function Ku(s) {
  const t = D.useContext(yn), {
    getPrefixCls: e,
    direction: a,
    getPopupContainer: c
  } = t, u = t[s];
  return Object.assign(Object.assign({
    classNames: Rc,
    styles: Rc
  }, u), {
    getPrefixCls: e,
    direction: a,
    getPopupContainer: c
  });
}
const Ox = `-ant-${Date.now()}-${Math.random()}`;
function Rx(s, t) {
  const e = {}, a = (f, x) => {
    let v = f.clone();
    return v = (x == null ? void 0 : x(v)) || v, v.toRgbString();
  }, c = (f, x) => {
    const v = new Ze(f), y = Ir(v.toRgbString());
    e[`${x}-color`] = a(v), e[`${x}-color-disabled`] = y[1], e[`${x}-color-hover`] = y[4], e[`${x}-color-active`] = y[6], e[`${x}-color-outline`] = v.clone().setA(0.2).toRgbString(), e[`${x}-color-deprecated-bg`] = y[0], e[`${x}-color-deprecated-border`] = y[2];
  };
  if (t.primaryColor) {
    c(t.primaryColor, "primary");
    const f = new Ze(t.primaryColor), x = Ir(f.toRgbString());
    x.forEach((y, S) => {
      e[`primary-${S + 1}`] = y;
    }), e["primary-color-deprecated-l-35"] = a(f, (y) => y.lighten(35)), e["primary-color-deprecated-l-20"] = a(f, (y) => y.lighten(20)), e["primary-color-deprecated-t-20"] = a(f, (y) => y.tint(20)), e["primary-color-deprecated-t-50"] = a(f, (y) => y.tint(50)), e["primary-color-deprecated-f-12"] = a(f, (y) => y.setA(y.a * 0.12));
    const v = new Ze(x[0]);
    e["primary-color-active-deprecated-f-30"] = a(v, (y) => y.setA(y.a * 0.3)), e["primary-color-active-deprecated-d-02"] = a(v, (y) => y.darken(2));
  }
  return t.successColor && c(t.successColor, "success"), t.warningColor && c(t.warningColor, "warning"), t.errorColor && c(t.errorColor, "error"), t.infoColor && c(t.infoColor, "info"), `
  :root {
    ${Object.keys(e).map((f) => `--${s}-${f}: ${e[f]};`).join(`
`)}
  }
  `.trim();
}
function kx(s, t) {
  const e = Rx(s, t);
  ln() ? jn(e, `${Ox}-dynamic-theme`) : process.env.NODE_ENV !== "production" && fi(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const Ns = /* @__PURE__ */ D.createContext(!1), Px = (s) => {
  let {
    children: t,
    disabled: e
  } = s;
  const a = D.useContext(Ns);
  return /* @__PURE__ */ D.createElement(Ns.Provider, {
    value: e ?? a
  }, t);
}, Nr = /* @__PURE__ */ D.createContext(void 0), _x = (s) => {
  let {
    children: t,
    size: e
  } = s;
  const a = D.useContext(Nr);
  return /* @__PURE__ */ D.createElement(Nr.Provider, {
    value: e || a
  }, t);
};
function Ix() {
  const s = vn(Ns), t = vn(Nr);
  return {
    componentDisabled: s,
    componentSize: t
  };
}
var Zu = /* @__PURE__ */ Ht(function s() {
  Vt(this, s);
}), Ju = "CALC_UNIT", Nx = new RegExp(Ju, "g");
function zi(s) {
  return typeof s == "number" ? "".concat(s).concat(Ju) : s;
}
var jx = /* @__PURE__ */ function(s) {
  Mr(e, s);
  var t = si(e);
  function e(a, c) {
    var u;
    Vt(this, e), u = t.call(this), se(Nn(u), "result", ""), se(Nn(u), "unitlessCssVar", void 0), se(Nn(u), "lowPriority", void 0);
    var f = De(a);
    return u.unitlessCssVar = c, a instanceof e ? u.result = "(".concat(a.result, ")") : f === "number" ? u.result = zi(a) : f === "string" && (u.result = a), u;
  }
  return Ht(e, [{
    key: "add",
    value: function(c) {
      return c instanceof e ? this.result = "".concat(this.result, " + ").concat(c.getResult()) : (typeof c == "number" || typeof c == "string") && (this.result = "".concat(this.result, " + ").concat(zi(c))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(c) {
      return c instanceof e ? this.result = "".concat(this.result, " - ").concat(c.getResult()) : (typeof c == "number" || typeof c == "string") && (this.result = "".concat(this.result, " - ").concat(zi(c))), this.lowPriority = !0, this;
    }
  }, {
    key: "mul",
    value: function(c) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), c instanceof e ? this.result = "".concat(this.result, " * ").concat(c.getResult(!0)) : (typeof c == "number" || typeof c == "string") && (this.result = "".concat(this.result, " * ").concat(c)), this.lowPriority = !1, this;
    }
  }, {
    key: "div",
    value: function(c) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), c instanceof e ? this.result = "".concat(this.result, " / ").concat(c.getResult(!0)) : (typeof c == "number" || typeof c == "string") && (this.result = "".concat(this.result, " / ").concat(c)), this.lowPriority = !1, this;
    }
  }, {
    key: "getResult",
    value: function(c) {
      return this.lowPriority || c ? "(".concat(this.result, ")") : this.result;
    }
  }, {
    key: "equal",
    value: function(c) {
      var u = this, f = c || {}, x = f.unit, v = !0;
      return typeof x == "boolean" ? v = x : Array.from(this.unitlessCssVar).some(function(y) {
        return u.result.includes(y);
      }) && (v = !1), this.result = this.result.replace(Nx, v ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), e;
}(Zu), Lx = /* @__PURE__ */ function(s) {
  Mr(e, s);
  var t = si(e);
  function e(a) {
    var c;
    return Vt(this, e), c = t.call(this), se(Nn(c), "result", 0), a instanceof e ? c.result = a.result : typeof a == "number" && (c.result = a), c;
  }
  return Ht(e, [{
    key: "add",
    value: function(c) {
      return c instanceof e ? this.result += c.result : typeof c == "number" && (this.result += c), this;
    }
  }, {
    key: "sub",
    value: function(c) {
      return c instanceof e ? this.result -= c.result : typeof c == "number" && (this.result -= c), this;
    }
  }, {
    key: "mul",
    value: function(c) {
      return c instanceof e ? this.result *= c.result : typeof c == "number" && (this.result *= c), this;
    }
  }, {
    key: "div",
    value: function(c) {
      return c instanceof e ? this.result /= c.result : typeof c == "number" && (this.result /= c), this;
    }
  }, {
    key: "equal",
    value: function() {
      return this.result;
    }
  }]), e;
}(Zu), Mx = function(t, e) {
  var a = t === "css" ? jx : Lx;
  return function(c) {
    return new a(c, e);
  };
}, kc = function(t, e) {
  return "".concat([e, t.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function js(s) {
  var t = D.useRef();
  t.current = s;
  var e = D.useCallback(function() {
    for (var a, c = arguments.length, u = new Array(c), f = 0; f < c; f++)
      u[f] = arguments[f];
    return (a = t.current) === null || a === void 0 ? void 0 : a.call.apply(a, [t].concat(u));
  }, []);
  return e;
}
function Ls(s) {
  var t = D.useRef(!1), e = D.useState(s), a = Ae(e, 2), c = a[0], u = a[1];
  D.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function f(x, v) {
    v && t.current || u(x);
  }
  return [c, f];
}
function Pc(s, t, e, a) {
  var c = ne({}, t[s]);
  if (a != null && a.deprecatedTokens) {
    var u = a.deprecatedTokens;
    u.forEach(function(x) {
      var v = Ae(x, 2), y = v[0], S = v[1];
      if (process.env.NODE_ENV !== "production" && bn(!(c != null && c[y]), "Component Token `".concat(String(y), "` of ").concat(String(s), " is deprecated. Please use `").concat(String(S), "` instead.")), c != null && c[y] || c != null && c[S]) {
        var w;
        (w = c[S]) !== null && w !== void 0 || (c[S] = c == null ? void 0 : c[y]);
      }
    });
  }
  var f = ne(ne({}, e), c);
  return Object.keys(f).forEach(function(x) {
    f[x] === t[x] && delete f[x];
  }), f;
}
var Qu = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", Ms = !0;
function hi() {
  for (var s = arguments.length, t = new Array(s), e = 0; e < s; e++)
    t[e] = arguments[e];
  if (!Qu)
    return Object.assign.apply(Object, [{}].concat(t));
  Ms = !1;
  var a = {};
  return t.forEach(function(c) {
    if (De(c) === "object") {
      var u = Object.keys(c);
      u.forEach(function(f) {
        Object.defineProperty(a, f, {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return c[f];
          }
        });
      });
    }
  }), Ms = !0, a;
}
var _c = {};
function Dx() {
}
var Bx = function(t) {
  var e, a = t, c = Dx;
  return Qu && typeof Proxy < "u" && (e = /* @__PURE__ */ new Set(), a = new Proxy(t, {
    get: function(f, x) {
      if (Ms) {
        var v;
        (v = e) === null || v === void 0 || v.add(x);
      }
      return f[x];
    }
  }), c = function(f, x) {
    var v;
    _c[f] = {
      global: Array.from(e),
      component: ne(ne({}, (v = _c[f]) === null || v === void 0 ? void 0 : v.component), x)
    };
  }), {
    token: a,
    keys: e,
    flush: c
  };
};
function Ic(s, t, e) {
  if (typeof e == "function") {
    var a;
    return e(hi(t, (a = t[s]) !== null && a !== void 0 ? a : {}));
  }
  return e ?? {};
}
function Fx(s) {
  return s === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var e = arguments.length, a = new Array(e), c = 0; c < e; c++)
        a[c] = arguments[c];
      return "max(".concat(a.map(function(u) {
        return No(u);
      }).join(","), ")");
    },
    min: function() {
      for (var e = arguments.length, a = new Array(e), c = 0; c < e; c++)
        a[c] = arguments[c];
      return "min(".concat(a.map(function(u) {
        return No(u);
      }).join(","), ")");
    }
  };
}
var zx = 1e3 * 60 * 10, Vx = /* @__PURE__ */ function() {
  function s() {
    Vt(this, s), se(this, "map", /* @__PURE__ */ new Map()), se(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), se(this, "nextID", 0), se(this, "lastAccessBeat", /* @__PURE__ */ new Map()), se(this, "accessBeat", 0);
  }
  return Ht(s, [{
    key: "set",
    value: function(e, a) {
      this.clear();
      var c = this.getCompositeKey(e);
      this.map.set(c, a), this.lastAccessBeat.set(c, Date.now());
    }
  }, {
    key: "get",
    value: function(e) {
      var a = this.getCompositeKey(e), c = this.map.get(a);
      return this.lastAccessBeat.set(a, Date.now()), this.accessBeat += 1, c;
    }
  }, {
    key: "getCompositeKey",
    value: function(e) {
      var a = this, c = e.map(function(u) {
        return u && De(u) === "object" ? "obj_".concat(a.getObjectID(u)) : "".concat(De(u), "_").concat(u);
      });
      return c.join("|");
    }
  }, {
    key: "getObjectID",
    value: function(e) {
      if (this.objectIDMap.has(e))
        return this.objectIDMap.get(e);
      var a = this.nextID;
      return this.objectIDMap.set(e, a), this.nextID += 1, a;
    }
  }, {
    key: "clear",
    value: function() {
      var e = this;
      if (this.accessBeat > 1e4) {
        var a = Date.now();
        this.lastAccessBeat.forEach(function(c, u) {
          a - c > zx && (e.map.delete(u), e.lastAccessBeat.delete(u));
        }), this.accessBeat = 0;
      }
    }
  }]), s;
}(), Nc = new Vx();
function Hx(s, t) {
  return Je.useMemo(function() {
    var e = Nc.get(t);
    if (e)
      return e;
    var a = s();
    return Nc.set(t, a), a;
  }, t);
}
var Ux = function() {
  return {};
};
function qx(s) {
  var t = s.useCSP, e = t === void 0 ? Ux : t, a = s.useToken, c = s.usePrefix, u = s.getResetStyles, f = s.getCommonStyle, x = s.getCompUnitless;
  function v(b, P, O, C) {
    var E = Array.isArray(b) ? b[0] : b;
    function L(Y) {
      return "".concat(String(E)).concat(Y.slice(0, 1).toUpperCase()).concat(Y.slice(1));
    }
    var I = (C == null ? void 0 : C.unitless) || {}, T = typeof x == "function" ? x(b) : {}, F = ne(ne({}, T), {}, se({}, L("zIndexPopup"), !0));
    Object.keys(I).forEach(function(Y) {
      F[L(Y)] = I[Y];
    });
    var _ = ne(ne({}, C), {}, {
      unitless: F,
      prefixToken: L
    }), V = S(b, P, O, _), M = y(E, O, _);
    return function(Y) {
      var J = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Y, ce = V(Y, J), Se = Ae(ce, 2), fe = Se[1], K = M(J), oe = Ae(K, 2), re = oe[0], ge = oe[1];
      return [re, fe, ge];
    };
  }
  function y(b, P, O) {
    var C = O.unitless, E = O.injectStyle, L = E === void 0 ? !0 : E, I = O.prefixToken, T = O.ignore, F = function(M) {
      var Y = M.rootCls, J = M.cssVar, ce = J === void 0 ? {} : J, Se = a(), fe = Se.realToken;
      return nx({
        path: [b],
        prefix: ce.prefix,
        key: ce.key,
        unitless: C,
        ignore: T,
        token: fe,
        scope: Y
      }, function() {
        var K = Ic(b, fe, P), oe = Pc(b, fe, K, {
          deprecatedTokens: O == null ? void 0 : O.deprecatedTokens
        });
        return Object.keys(K).forEach(function(re) {
          oe[I(re)] = oe[re], delete oe[re];
        }), oe;
      }), null;
    }, _ = function(M) {
      var Y = a(), J = Y.cssVar;
      return [function(ce) {
        return L && J ? /* @__PURE__ */ Je.createElement(Je.Fragment, null, /* @__PURE__ */ Je.createElement(F, {
          rootCls: M,
          cssVar: J,
          component: b
        }), ce) : ce;
      }, J == null ? void 0 : J.key];
    };
    return _;
  }
  function S(b, P, O) {
    var C = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, E = Array.isArray(b) ? b : [b, b], L = Ae(E, 1), I = L[0], T = E.join("-"), F = s.layer || {
      name: "antd"
    };
    return function(_) {
      var V = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _, M = a(), Y = M.theme, J = M.realToken, ce = M.hashId, Se = M.token, fe = M.cssVar, K = c(), oe = K.rootPrefixCls, re = K.iconPrefixCls, ge = e(), he = fe ? "css" : "js", xe = Hx(function() {
        var ve = /* @__PURE__ */ new Set();
        return fe && Object.keys(C.unitless || {}).forEach(function(ye) {
          ve.add(mo(ye, fe.prefix)), ve.add(mo(ye, kc(I, fe.prefix)));
        }), Mx(he, ve);
      }, [he, I, fe == null ? void 0 : fe.prefix]), me = Fx(he), pe = me.max, ae = me.min, te = {
        theme: Y,
        token: Se,
        hashId: ce,
        nonce: function() {
          return ge.nonce;
        },
        clientOnly: C.clientOnly,
        layer: F,
        // antd is always at top of styles
        order: C.order || -999
      };
      typeof u == "function" && gs(ne(ne({}, te), {}, {
        clientOnly: !1,
        path: ["Shared", oe]
      }), function() {
        return u(Se, {
          prefix: {
            rootPrefixCls: oe,
            iconPrefixCls: re
          },
          csp: ge
        });
      });
      var le = gs(ne(ne({}, te), {}, {
        path: [T, _, re]
      }), function() {
        if (C.injectStyle === !1)
          return [];
        var ve = Bx(Se), ye = ve.token, Re = ve.flush, U = Ic(I, J, O), Z = ".".concat(_), B = Pc(I, J, U, {
          deprecatedTokens: C.deprecatedTokens
        });
        fe && U && De(U) === "object" && Object.keys(U).forEach(function(Q) {
          U[Q] = "var(".concat(mo(Q, kc(I, fe.prefix)), ")");
        });
        var H = hi(ye, {
          componentCls: Z,
          prefixCls: _,
          iconCls: ".".concat(re),
          antCls: ".".concat(oe),
          calc: xe,
          // @ts-ignore
          max: pe,
          // @ts-ignore
          min: ae
        }, fe ? U : B), N = P(H, {
          hashId: ce,
          prefixCls: _,
          rootPrefixCls: oe,
          iconPrefixCls: re
        });
        Re(I, B);
        var X = typeof f == "function" ? f(H, _, V, C.resetFont) : null;
        return [C.resetStyle === !1 ? null : X, N];
      });
      return [le, ce];
    };
  }
  function w(b, P, O) {
    var C = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, E = S(b, P, O, ne({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, C)), L = function(T) {
      var F = T.prefixCls, _ = T.rootCls, V = _ === void 0 ? F : _;
      return E(F, V), null;
    };
    return process.env.NODE_ENV !== "production" && (L.displayName = "SubStyle_".concat(String(Array.isArray(b) ? b.join(".") : b))), L;
  }
  return {
    genStyleHooks: v,
    genSubStyleComponent: w,
    genComponentStyleHook: S
  };
}
const Wx = "5.24.6";
function Vi(s) {
  return s >= 0 && s <= 255;
}
function Qr(s, t) {
  const {
    r: e,
    g: a,
    b: c,
    a: u
  } = new Ze(s).toRgb();
  if (u < 1)
    return s;
  const {
    r: f,
    g: x,
    b: v
  } = new Ze(t).toRgb();
  for (let y = 0.01; y <= 1; y += 0.01) {
    const S = Math.round((e - f * (1 - y)) / y), w = Math.round((a - x * (1 - y)) / y), b = Math.round((c - v * (1 - y)) / y);
    if (Vi(S) && Vi(w) && Vi(b))
      return new Ze({
        r: S,
        g: w,
        b,
        a: Math.round(y * 100) / 100
      }).toRgbString();
  }
  return new Ze({
    r: e,
    g: a,
    b: c,
    a: 1
  }).toRgbString();
}
var $x = function(s, t) {
  var e = {};
  for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && t.indexOf(a) < 0 && (e[a] = s[a]);
  if (s != null && typeof Object.getOwnPropertySymbols == "function") for (var c = 0, a = Object.getOwnPropertySymbols(s); c < a.length; c++)
    t.indexOf(a[c]) < 0 && Object.prototype.propertyIsEnumerable.call(s, a[c]) && (e[a[c]] = s[a[c]]);
  return e;
};
function ef(s) {
  const {
    override: t
  } = s, e = $x(s, ["override"]), a = Object.assign({}, t);
  Object.keys(_r).forEach((b) => {
    delete a[b];
  });
  const c = Object.assign(Object.assign({}, e), a), u = 480, f = 576, x = 768, v = 992, y = 1200, S = 1600;
  if (c.motion === !1) {
    const b = "0s";
    c.motionDurationFast = b, c.motionDurationMid = b, c.motionDurationSlow = b;
  }
  return Object.assign(Object.assign(Object.assign({}, c), {
    // ============== Background ============== //
    colorFillContent: c.colorFillSecondary,
    colorFillContentHover: c.colorFill,
    colorFillAlter: c.colorFillQuaternary,
    colorBgContainerDisabled: c.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: c.colorBgContainer,
    colorSplit: Qr(c.colorBorderSecondary, c.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: c.colorTextQuaternary,
    colorTextDisabled: c.colorTextQuaternary,
    colorTextHeading: c.colorText,
    colorTextLabel: c.colorTextSecondary,
    colorTextDescription: c.colorTextTertiary,
    colorTextLightSolid: c.colorWhite,
    colorHighlight: c.colorError,
    colorBgTextHover: c.colorFillSecondary,
    colorBgTextActive: c.colorFill,
    colorIcon: c.colorTextTertiary,
    colorIconHover: c.colorText,
    colorErrorOutline: Qr(c.colorErrorBg, c.colorBgContainer),
    colorWarningOutline: Qr(c.colorWarningBg, c.colorBgContainer),
    // Font
    fontSizeIcon: c.fontSizeSM,
    // Line
    lineWidthFocus: c.lineWidth * 3,
    // Control
    lineWidth: c.lineWidth,
    controlOutlineWidth: c.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: c.controlHeight / 2,
    controlItemBgHover: c.colorFillTertiary,
    controlItemBgActive: c.colorPrimaryBg,
    controlItemBgActiveHover: c.colorPrimaryBgHover,
    controlItemBgActiveDisabled: c.colorFill,
    controlTmpOutline: c.colorFillQuaternary,
    controlOutline: Qr(c.colorPrimaryBg, c.colorBgContainer),
    lineType: c.lineType,
    borderRadius: c.borderRadius,
    borderRadiusXS: c.borderRadiusXS,
    borderRadiusSM: c.borderRadiusSM,
    borderRadiusLG: c.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: c.sizeXXS,
    paddingXS: c.sizeXS,
    paddingSM: c.sizeSM,
    padding: c.size,
    paddingMD: c.sizeMD,
    paddingLG: c.sizeLG,
    paddingXL: c.sizeXL,
    paddingContentHorizontalLG: c.sizeLG,
    paddingContentVerticalLG: c.sizeMS,
    paddingContentHorizontal: c.sizeMS,
    paddingContentVertical: c.sizeSM,
    paddingContentHorizontalSM: c.size,
    paddingContentVerticalSM: c.sizeXS,
    marginXXS: c.sizeXXS,
    marginXS: c.sizeXS,
    marginSM: c.sizeSM,
    margin: c.size,
    marginMD: c.sizeMD,
    marginLG: c.sizeLG,
    marginXL: c.sizeXL,
    marginXXL: c.sizeXXL,
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
    screenXS: u,
    screenXSMin: u,
    screenXSMax: f - 1,
    screenSM: f,
    screenSMMin: f,
    screenSMMax: x - 1,
    screenMD: x,
    screenMDMin: x,
    screenMDMax: v - 1,
    screenLG: v,
    screenLGMin: v,
    screenLGMax: y - 1,
    screenXL: y,
    screenXLMin: y,
    screenXLMax: S - 1,
    screenXXL: S,
    screenXXLMin: S,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new Ze("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new Ze("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new Ze("rgba(0, 0, 0, 0.09)").toRgbString()}
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
  }), a);
}
var jc = function(s, t) {
  var e = {};
  for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && t.indexOf(a) < 0 && (e[a] = s[a]);
  if (s != null && typeof Object.getOwnPropertySymbols == "function") for (var c = 0, a = Object.getOwnPropertySymbols(s); c < a.length; c++)
    t.indexOf(a[c]) < 0 && Object.prototype.propertyIsEnumerable.call(s, a[c]) && (e[a[c]] = s[a[c]]);
  return e;
};
const tf = {
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
}, Xx = {
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
}, Yx = {
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
}, nf = (s, t, e) => {
  const a = e.getDerivativeToken(s), {
    override: c
  } = t, u = jc(t, ["override"]);
  let f = Object.assign(Object.assign({}, a), {
    override: c
  });
  return f = ef(f), u && Object.entries(u).forEach((x) => {
    let [v, y] = x;
    const {
      theme: S
    } = y, w = jc(y, ["theme"]);
    let b = w;
    S && (b = nf(Object.assign(Object.assign({}, f), w), {
      override: w
    }, S)), f[v] = b;
  }), f;
};
function Sa() {
  const {
    token: s,
    hashed: t,
    theme: e,
    override: a,
    cssVar: c
  } = Je.useContext(Gu), u = `${Wx}-${t || ""}`, f = e || Yu, [x, v, y] = Op(f, [_r, s], {
    salt: u,
    override: a,
    getComputedToken: nf,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: ef,
    cssVar: c && {
      prefix: c.prefix,
      key: c.key,
      unitless: tf,
      ignore: Xx,
      preserve: Yx
    }
  });
  return [f, y, t ? v : "", x, c];
}
const rf = function(s) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  return {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    color: s.colorText,
    fontSize: s.fontSize,
    // font-variant: @font-variant-base;
    lineHeight: s.lineHeight,
    listStyle: "none",
    // font-feature-settings: @font-feature-settings-base;
    fontFamily: t ? "inherit" : s.fontFamily
  };
}, Gx = () => ({
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
}), Kx = (s) => ({
  a: {
    color: s.colorLink,
    textDecoration: s.linkDecoration,
    backgroundColor: "transparent",
    // remove the gray background on active links in IE 10.
    outline: "none",
    cursor: "pointer",
    transition: `color ${s.motionDurationSlow}`,
    "-webkit-text-decoration-skip": "objects",
    // remove gaps in links underline in iOS 8+ and Safari 8+.
    "&:hover": {
      color: s.colorLinkHover
    },
    "&:active": {
      color: s.colorLinkActive
    },
    "&:active, &:hover": {
      textDecoration: s.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    "&:focus": {
      textDecoration: s.linkFocusDecoration,
      outline: 0
    },
    "&[disabled]": {
      color: s.colorTextDisabled,
      cursor: "not-allowed"
    }
  }
}), Zx = (s, t, e, a) => {
  const c = `[class^="${t}"], [class*=" ${t}"]`, u = e ? `.${e}` : c, f = {
    boxSizing: "border-box",
    "&::before, &::after": {
      boxSizing: "border-box"
    }
  };
  let x = {};
  return a !== !1 && (x = {
    fontFamily: s.fontFamily,
    fontSize: s.fontSize
  }), {
    [u]: Object.assign(Object.assign(Object.assign({}, x), f), {
      [c]: f
    })
  };
}, of = (s) => ({
  [`.${s}`]: Object.assign(Object.assign({}, Gx()), {
    [`.${s} .${s}-icon`]: {
      display: "block"
    }
  })
}), {
  genStyleHooks: wa
} = qx({
  usePrefix: () => {
    const {
      getPrefixCls: s,
      iconPrefixCls: t
    } = vn(yn);
    return {
      rootPrefixCls: s(),
      iconPrefixCls: t
    };
  },
  useToken: () => {
    const [s, t, e, a, c] = Sa();
    return {
      theme: s,
      realToken: t,
      hashId: e,
      token: a,
      cssVar: c
    };
  },
  useCSP: () => {
    const {
      csp: s
    } = vn(yn);
    return s ?? {};
  },
  getResetStyles: (s, t) => {
    var e;
    const a = Kx(s);
    return [a, {
      "&": a
    }, of((e = t == null ? void 0 : t.prefix.iconPrefixCls) !== null && e !== void 0 ? e : ba)];
  },
  getCommonStyle: Zx,
  getCompUnitless: () => tf
}), Jx = (s, t) => {
  const [e, a] = Sa();
  return gs({
    token: a,
    hashId: "",
    path: ["ant-design-icons", s],
    nonce: () => t == null ? void 0 : t.nonce,
    layer: {
      name: "antd"
    }
  }, () => [of(s)]);
}, Qx = Object.assign({}, D), {
  useId: Lc
} = Qx, em = () => "", tm = typeof Lc > "u" ? em : Lc;
function nm(s, t, e) {
  var a, c;
  const u = cr("ConfigProvider"), f = s || {}, x = f.inherit === !1 || !t ? Object.assign(Object.assign({}, _s), {
    hashed: (a = t == null ? void 0 : t.hashed) !== null && a !== void 0 ? a : _s.hashed,
    cssVar: t == null ? void 0 : t.cssVar
  }) : t, v = tm();
  if (process.env.NODE_ENV !== "production") {
    const y = f.cssVar || x.cssVar, S = !!(typeof f.cssVar == "object" && (!((c = f.cssVar) === null || c === void 0) && c.key) || v);
    process.env.NODE_ENV !== "production" && u(!y || S, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return su(() => {
    var y, S;
    if (!s)
      return t;
    const w = Object.assign({}, x.components);
    Object.keys(s.components || {}).forEach((O) => {
      w[O] = Object.assign(Object.assign({}, w[O]), s.components[O]);
    });
    const b = `css-var-${v.replace(/:/g, "")}`, P = ((y = f.cssVar) !== null && y !== void 0 ? y : x.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: e == null ? void 0 : e.prefixCls
    }, typeof x.cssVar == "object" ? x.cssVar : {}), typeof f.cssVar == "object" ? f.cssVar : {}), {
      key: typeof f.cssVar == "object" && ((S = f.cssVar) === null || S === void 0 ? void 0 : S.key) || b
    });
    return Object.assign(Object.assign(Object.assign({}, x), f), {
      token: Object.assign(Object.assign({}, x.token), f.token),
      components: w,
      cssVar: P
    });
  }, [f, x], (y, S) => y.some((w, b) => {
    const P = S[b];
    return !Qh(w, P, !0);
  }));
}
var rm = ["children"], sf = /* @__PURE__ */ D.createContext({});
function om(s) {
  var t = s.children, e = kr(s, rm);
  return /* @__PURE__ */ D.createElement(sf.Provider, {
    value: e
  }, t);
}
var im = /* @__PURE__ */ function(s) {
  Mr(e, s);
  var t = si(e);
  function e() {
    return Vt(this, e), t.apply(this, arguments);
  }
  return Ht(e, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), e;
}(D.Component);
function sm(s) {
  var t = D.useReducer(function(x) {
    return x + 1;
  }, 0), e = Ae(t, 2), a = e[1], c = D.useRef(s), u = js(function() {
    return c.current;
  }), f = js(function(x) {
    c.current = typeof x == "function" ? x(c.current) : x, a();
  });
  return [u, f];
}
var pn = "none", eo = "appear", to = "enter", no = "leave", Mc = "none", Mt = "prepare", Hn = "start", Un = "active", Ea = "end", af = "prepared";
function Dc(s, t) {
  var e = {};
  return e[s.toLowerCase()] = t.toLowerCase(), e["Webkit".concat(s)] = "webkit".concat(t), e["Moz".concat(s)] = "moz".concat(t), e["ms".concat(s)] = "MS".concat(t), e["O".concat(s)] = "o".concat(t.toLowerCase()), e;
}
function am(s, t) {
  var e = {
    animationend: Dc("Animation", "AnimationEnd"),
    transitionend: Dc("Transition", "TransitionEnd")
  };
  return s && ("AnimationEvent" in t || delete e.animationend.animation, "TransitionEvent" in t || delete e.transitionend.transition), e;
}
var cm = am(ln(), typeof window < "u" ? window : {}), cf = {};
if (ln()) {
  var lm = document.createElement("div");
  cf = lm.style;
}
var ro = {};
function lf(s) {
  if (ro[s])
    return ro[s];
  var t = cm[s];
  if (t)
    for (var e = Object.keys(t), a = e.length, c = 0; c < a; c += 1) {
      var u = e[c];
      if (Object.prototype.hasOwnProperty.call(t, u) && u in cf)
        return ro[s] = t[u], ro[s];
    }
  return "";
}
var uf = lf("animationend"), ff = lf("transitionend"), df = !!(uf && ff), Bc = uf || "animationend", Fc = ff || "transitionend";
function zc(s, t) {
  if (!s) return null;
  if (De(s) === "object") {
    var e = t.replace(/-\w/g, function(a) {
      return a[1].toUpperCase();
    });
    return s[e];
  }
  return "".concat(s, "-").concat(t);
}
const um = function(s) {
  var t = it();
  function e(c) {
    c && (c.removeEventListener(Fc, s), c.removeEventListener(Bc, s));
  }
  function a(c) {
    t.current && t.current !== c && e(t.current), c && c !== t.current && (c.addEventListener(Fc, s), c.addEventListener(Bc, s), t.current = c);
  }
  return D.useEffect(function() {
    return function() {
      e(t.current);
    };
  }, []), [a, e];
};
var hf = ln() ? md : bt;
const fm = function() {
  var s = D.useRef(null);
  function t() {
    Io.cancel(s.current);
  }
  function e(a) {
    var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var u = Io(function() {
      c <= 1 ? a({
        isCanceled: function() {
          return u !== s.current;
        }
      }) : e(a, c - 1);
    });
    s.current = u;
  }
  return D.useEffect(function() {
    return function() {
      t();
    };
  }, []), [e, t];
};
var dm = [Mt, Hn, Un, Ea], hm = [Mt, af], pf = !1, pm = !0;
function xf(s) {
  return s === Un || s === Ea;
}
const xm = function(s, t, e) {
  var a = Ls(Mc), c = Ae(a, 2), u = c[0], f = c[1], x = fm(), v = Ae(x, 2), y = v[0], S = v[1];
  function w() {
    f(Mt, !0);
  }
  var b = t ? hm : dm;
  return hf(function() {
    if (u !== Mc && u !== Ea) {
      var P = b.indexOf(u), O = b[P + 1], C = e(u);
      C === pf ? f(O, !0) : O && y(function(E) {
        function L() {
          E.isCanceled() || f(O, !0);
        }
        C === !0 ? L() : Promise.resolve(C).then(L);
      });
    }
  }, [s, u]), D.useEffect(function() {
    return function() {
      S();
    };
  }, []), [w, u];
};
function mm(s, t, e, a) {
  var c = a.motionEnter, u = c === void 0 ? !0 : c, f = a.motionAppear, x = f === void 0 ? !0 : f, v = a.motionLeave, y = v === void 0 ? !0 : v, S = a.motionDeadline, w = a.motionLeaveImmediately, b = a.onAppearPrepare, P = a.onEnterPrepare, O = a.onLeavePrepare, C = a.onAppearStart, E = a.onEnterStart, L = a.onLeaveStart, I = a.onAppearActive, T = a.onEnterActive, F = a.onLeaveActive, _ = a.onAppearEnd, V = a.onEnterEnd, M = a.onLeaveEnd, Y = a.onVisibleChanged, J = Ls(), ce = Ae(J, 2), Se = ce[0], fe = ce[1], K = sm(pn), oe = Ae(K, 2), re = oe[0], ge = oe[1], he = Ls(null), xe = Ae(he, 2), me = xe[0], pe = xe[1], ae = re(), te = it(!1), le = it(null);
  function ve() {
    return e();
  }
  var ye = it(!1);
  function Re() {
    ge(pn), pe(null, !0);
  }
  var U = js(function(Ue) {
    var Be = re();
    if (Be !== pn) {
      var rt = ve();
      if (!(Ue && !Ue.deadline && Ue.target !== rt)) {
        var At = ye.current, gt;
        Be === eo && At ? gt = _ == null ? void 0 : _(rt, Ue) : Be === to && At ? gt = V == null ? void 0 : V(rt, Ue) : Be === no && At && (gt = M == null ? void 0 : M(rt, Ue)), At && gt !== !1 && Re();
      }
    }
  }), Z = um(U), B = Ae(Z, 1), H = B[0], N = function(Be) {
    switch (Be) {
      case eo:
        return se(se(se({}, Mt, b), Hn, C), Un, I);
      case to:
        return se(se(se({}, Mt, P), Hn, E), Un, T);
      case no:
        return se(se(se({}, Mt, O), Hn, L), Un, F);
      default:
        return {};
    }
  }, X = D.useMemo(function() {
    return N(ae);
  }, [ae]), Q = xm(ae, !s, function(Ue) {
    if (Ue === Mt) {
      var Be = X[Mt];
      return Be ? Be(ve()) : pf;
    }
    if (Ve in X) {
      var rt;
      pe(((rt = X[Ve]) === null || rt === void 0 ? void 0 : rt.call(X, ve(), null)) || null);
    }
    return Ve === Un && ae !== pn && (H(ve()), S > 0 && (clearTimeout(le.current), le.current = setTimeout(function() {
      U({
        deadline: !0
      });
    }, S))), Ve === af && Re(), pm;
  }), ee = Ae(Q, 2), ct = ee[0], Ve = ee[1], xt = xf(Ve);
  ye.current = xt;
  var Ct = it(null);
  hf(function() {
    if (!(te.current && Ct.current === t)) {
      fe(t);
      var Ue = te.current;
      te.current = !0;
      var Be;
      !Ue && t && x && (Be = eo), Ue && t && u && (Be = to), (Ue && !t && y || !Ue && w && !t && y) && (Be = no);
      var rt = N(Be);
      Be && (s || rt[Mt]) ? (ge(Be), ct()) : ge(pn), Ct.current = t;
    }
  }, [t]), bt(function() {
    // Cancel appear
    (ae === eo && !x || // Cancel enter
    ae === to && !u || // Cancel leave
    ae === no && !y) && ge(pn);
  }, [x, u, y]), bt(function() {
    return function() {
      te.current = !1, clearTimeout(le.current);
    };
  }, []);
  var mt = D.useRef(!1);
  bt(function() {
    Se && (mt.current = !0), Se !== void 0 && ae === pn && ((mt.current || Se) && (Y == null || Y(Se)), mt.current = !0);
  }, [Se, ae]);
  var It = me;
  return X[Mt] && Ve === Hn && (It = ne({
    transition: "none"
  }, It)), [ae, Ve, It, Se ?? t];
}
function gm(s) {
  var t = s;
  De(s) === "object" && (t = s.transitionSupport);
  function e(c, u) {
    return !!(c.motionName && t && u !== !1);
  }
  var a = /* @__PURE__ */ D.forwardRef(function(c, u) {
    var f = c.visible, x = f === void 0 ? !0 : f, v = c.removeOnLeave, y = v === void 0 ? !0 : v, S = c.forceRender, w = c.children, b = c.motionName, P = c.leavedClassName, O = c.eventProps, C = D.useContext(sf), E = C.motion, L = e(c, E), I = it(), T = it();
    function F() {
      try {
        return I.current instanceof HTMLElement ? I.current : Dh(T.current);
      } catch {
        return null;
      }
    }
    var _ = mm(L, x, F, c), V = Ae(_, 4), M = V[0], Y = V[1], J = V[2], ce = V[3], Se = D.useRef(ce);
    ce && (Se.current = !0);
    var fe = D.useCallback(function(xe) {
      I.current = xe, au(u, xe);
    }, [u]), K, oe = ne(ne({}, O), {}, {
      visible: x
    });
    if (!w)
      K = null;
    else if (M === pn)
      ce ? K = w(ne({}, oe), fe) : !y && Se.current && P ? K = w(ne(ne({}, oe), {}, {
        className: P
      }), fe) : S || !y && !P ? K = w(ne(ne({}, oe), {}, {
        style: {
          display: "none"
        }
      }), fe) : K = null;
    else {
      var re;
      Y === Mt ? re = "prepare" : xf(Y) ? re = "active" : Y === Hn && (re = "start");
      var ge = zc(b, "".concat(M, "-").concat(re));
      K = w(ne(ne({}, oe), {}, {
        className: dt(zc(b, M), se(se({}, ge, ge && re), b, typeof b == "string")),
        style: J
      }), fe);
    }
    if (/* @__PURE__ */ D.isValidElement(K) && Uh(K)) {
      var he = qh(K);
      he || (K = /* @__PURE__ */ D.cloneElement(K, {
        ref: fe
      }));
    }
    return /* @__PURE__ */ D.createElement(im, {
      ref: T
    }, K);
  });
  return a.displayName = "CSSMotion", a;
}
const mf = gm(df);
var Ds = "add", Bs = "keep", Fs = "remove", Hi = "removed";
function vm(s) {
  var t;
  return s && De(s) === "object" && "key" in s ? t = s : t = {
    key: s
  }, ne(ne({}, t), {}, {
    key: String(t.key)
  });
}
function zs() {
  var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return s.map(vm);
}
function ym() {
  var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], e = [], a = 0, c = t.length, u = zs(s), f = zs(t);
  u.forEach(function(y) {
    for (var S = !1, w = a; w < c; w += 1) {
      var b = f[w];
      if (b.key === y.key) {
        a < w && (e = e.concat(f.slice(a, w).map(function(P) {
          return ne(ne({}, P), {}, {
            status: Ds
          });
        })), a = w), e.push(ne(ne({}, b), {}, {
          status: Bs
        })), a += 1, S = !0;
        break;
      }
    }
    S || e.push(ne(ne({}, y), {}, {
      status: Fs
    }));
  }), a < c && (e = e.concat(f.slice(a).map(function(y) {
    return ne(ne({}, y), {}, {
      status: Ds
    });
  })));
  var x = {};
  e.forEach(function(y) {
    var S = y.key;
    x[S] = (x[S] || 0) + 1;
  });
  var v = Object.keys(x).filter(function(y) {
    return x[y] > 1;
  });
  return v.forEach(function(y) {
    e = e.filter(function(S) {
      var w = S.key, b = S.status;
      return w !== y || b !== Fs;
    }), e.forEach(function(S) {
      S.key === y && (S.status = Bs);
    });
  }), e;
}
var bm = ["component", "children", "onVisibleChanged", "onAllRemoved"], Sm = ["status"], wm = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function Em(s) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : mf, e = /* @__PURE__ */ function(a) {
    Mr(u, a);
    var c = si(u);
    function u() {
      var f;
      Vt(this, u);
      for (var x = arguments.length, v = new Array(x), y = 0; y < x; y++)
        v[y] = arguments[y];
      return f = c.call.apply(c, [this].concat(v)), se(Nn(f), "state", {
        keyEntities: []
      }), se(Nn(f), "removeKey", function(S) {
        f.setState(function(w) {
          var b = w.keyEntities.map(function(P) {
            return P.key !== S ? P : ne(ne({}, P), {}, {
              status: Hi
            });
          });
          return {
            keyEntities: b
          };
        }, function() {
          var w = f.state.keyEntities, b = w.filter(function(P) {
            var O = P.status;
            return O !== Hi;
          }).length;
          b === 0 && f.props.onAllRemoved && f.props.onAllRemoved();
        });
      }), f;
    }
    return Ht(u, [{
      key: "render",
      value: function() {
        var x = this, v = this.state.keyEntities, y = this.props, S = y.component, w = y.children, b = y.onVisibleChanged;
        y.onAllRemoved;
        var P = kr(y, bm), O = S || D.Fragment, C = {};
        return wm.forEach(function(E) {
          C[E] = P[E], delete P[E];
        }), delete P.keys, /* @__PURE__ */ D.createElement(O, P, v.map(function(E, L) {
          var I = E.status, T = kr(E, Sm), F = I === Ds || I === Bs;
          return /* @__PURE__ */ D.createElement(t, Zt({}, C, {
            key: T.key,
            visible: F,
            eventProps: T,
            onVisibleChanged: function(V) {
              b == null || b(V, {
                key: T.key
              }), V || x.removeKey(T.key);
            }
          }), function(_, V) {
            return w(ne(ne({}, _), {}, {
              index: L
            }), V);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(x, v) {
        var y = x.keys, S = v.keyEntities, w = zs(y), b = ym(S, w);
        return {
          keyEntities: b.filter(function(P) {
            var O = S.find(function(C) {
              var E = C.key;
              return P.key === E;
            });
            return !(O && O.status === Hi && P.status === Fs);
          })
        };
      }
    }]), u;
  }(D.Component);
  return se(e, "defaultProps", {
    component: "div"
  }), e;
}
Em(df);
function Cm(s) {
  const {
    children: t
  } = s, [, e] = Sa(), {
    motion: a
  } = e, c = D.useRef(!1);
  return c.current = c.current || a === !1, c.current ? /* @__PURE__ */ D.createElement(om, {
    motion: a
  }, t) : t;
}
const gf = /* @__PURE__ */ D.memo((s) => {
  let {
    dropdownMatchSelectWidth: t
  } = s;
  return cr("ConfigProvider").deprecated(t === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
process.env.NODE_ENV !== "production" && (gf.displayName = "PropWarning");
const Am = process.env.NODE_ENV !== "production" ? gf : () => null;
var Tm = function(s, t) {
  var e = {};
  for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && t.indexOf(a) < 0 && (e[a] = s[a]);
  if (s != null && typeof Object.getOwnPropertySymbols == "function") for (var c = 0, a = Object.getOwnPropertySymbols(s); c < a.length; c++)
    t.indexOf(a[c]) < 0 && Object.prototype.propertyIsEnumerable.call(s, a[c]) && (e[a[c]] = s[a[c]]);
  return e;
};
let Vs = !1;
process.env.NODE_ENV;
const Om = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let vf;
function Rm() {
  return vf || Is;
}
function km(s) {
  return Object.keys(s).some((t) => t.endsWith("Color"));
}
const Pm = (s) => {
  const {
    prefixCls: t,
    iconPrefixCls: e,
    theme: a,
    holderRender: c
  } = s;
  t !== void 0 && (vf = t), a && km(a) && (process.env.NODE_ENV !== "production" && fi(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), kx(Rm(), a));
}, _m = (s) => {
  const {
    children: t,
    csp: e,
    autoInsertSpaceInButton: a,
    alert: c,
    anchor: u,
    form: f,
    locale: x,
    componentSize: v,
    direction: y,
    space: S,
    splitter: w,
    virtual: b,
    dropdownMatchSelectWidth: P,
    popupMatchSelectWidth: O,
    popupOverflow: C,
    legacyLocale: E,
    parentContext: L,
    iconPrefixCls: I,
    theme: T,
    componentDisabled: F,
    segmented: _,
    statistic: V,
    spin: M,
    calendar: Y,
    carousel: J,
    cascader: ce,
    collapse: Se,
    typography: fe,
    checkbox: K,
    descriptions: oe,
    divider: re,
    drawer: ge,
    skeleton: he,
    steps: xe,
    image: me,
    layout: pe,
    list: ae,
    mentions: te,
    modal: le,
    progress: ve,
    result: ye,
    slider: Re,
    breadcrumb: U,
    menu: Z,
    pagination: B,
    input: H,
    textArea: N,
    empty: X,
    badge: Q,
    radio: ee,
    rate: ct,
    switch: Ve,
    transfer: xt,
    avatar: Ct,
    message: mt,
    tag: It,
    table: Ue,
    card: Be,
    tabs: rt,
    timeline: At,
    timePicker: gt,
    upload: Jt,
    notification: Qt,
    tree: un,
    colorPicker: en,
    datePicker: tn,
    rangePicker: $,
    flex: R,
    wave: Oe,
    dropdown: ke,
    warning: Ee,
    tour: de,
    tooltip: Fe,
    popover: Ie,
    popconfirm: Nt,
    floatButtonGroup: Qe,
    variant: jt,
    inputNumber: wn,
    treeSelect: Ge
  } = s, ht = D.useCallback((We, A) => {
    const {
      prefixCls: W
    } = s;
    if (A)
      return A;
    const G = W || L.getPrefixCls("");
    return We ? `${G}-${We}` : G;
  }, [L.getPrefixCls, s.prefixCls]), lt = I || L.iconPrefixCls || ba, qt = e || L.csp;
  Jx(lt, qt);
  const pt = nm(T, L.theme, {
    prefixCls: ht("")
  });
  process.env.NODE_ENV !== "production" && (Vs = Vs || !!pt);
  const fn = {
    csp: qt,
    autoInsertSpaceInButton: a,
    alert: c,
    anchor: u,
    locale: x || E,
    direction: y,
    space: S,
    splitter: w,
    virtual: b,
    popupMatchSelectWidth: O ?? P,
    popupOverflow: C,
    getPrefixCls: ht,
    iconPrefixCls: lt,
    theme: pt,
    segmented: _,
    statistic: V,
    spin: M,
    calendar: Y,
    carousel: J,
    cascader: ce,
    collapse: Se,
    typography: fe,
    checkbox: K,
    descriptions: oe,
    divider: re,
    drawer: ge,
    skeleton: he,
    steps: xe,
    image: me,
    input: H,
    textArea: N,
    layout: pe,
    list: ae,
    mentions: te,
    modal: le,
    progress: ve,
    result: ye,
    slider: Re,
    breadcrumb: U,
    menu: Z,
    pagination: B,
    empty: X,
    badge: Q,
    radio: ee,
    rate: ct,
    switch: Ve,
    transfer: xt,
    avatar: Ct,
    message: mt,
    tag: It,
    table: Ue,
    card: Be,
    tabs: rt,
    timeline: At,
    timePicker: gt,
    upload: Jt,
    notification: Qt,
    tree: un,
    colorPicker: en,
    datePicker: tn,
    rangePicker: $,
    flex: R,
    wave: Oe,
    dropdown: ke,
    warning: Ee,
    tour: de,
    tooltip: Fe,
    popover: Ie,
    popconfirm: Nt,
    floatButtonGroup: Qe,
    variant: jt,
    inputNumber: wn,
    treeSelect: Ge
  };
  process.env.NODE_ENV !== "production" && cr("ConfigProvider")(!("autoInsertSpaceInButton" in s), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const Ot = Object.assign({}, L);
  Object.keys(fn).forEach((We) => {
    fn[We] !== void 0 && (Ot[We] = fn[We]);
  }), Om.forEach((We) => {
    const A = s[We];
    A && (Ot[We] = A);
  }), typeof a < "u" && (Ot.button = Object.assign({
    autoInsertSpace: a
  }, Ot.button));
  const dn = su(() => Ot, Ot, (We, A) => {
    const W = Object.keys(We), G = Object.keys(A);
    return W.length !== G.length || W.some((ue) => We[ue] !== A[ue]);
  }), {
    layer: hr
  } = D.useContext(Dr), zr = D.useMemo(() => ({
    prefixCls: lt,
    csp: qt,
    layer: hr ? "antd" : void 0
  }), [lt, qt, hr]);
  let ot = /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement(Am, {
    dropdownMatchSelectWidth: P
  }), t);
  const Vr = D.useMemo(() => {
    var We, A, W, G;
    return ax(((We = di.Form) === null || We === void 0 ? void 0 : We.defaultValidateMessages) || {}, ((W = (A = dn.locale) === null || A === void 0 ? void 0 : A.Form) === null || W === void 0 ? void 0 : W.defaultValidateMessages) || {}, ((G = dn.form) === null || G === void 0 ? void 0 : G.validateMessages) || {}, (f == null ? void 0 : f.validateMessages) || {});
  }, [dn, f == null ? void 0 : f.validateMessages]);
  Object.keys(Vr).length > 0 && (ot = /* @__PURE__ */ D.createElement(lx.Provider, {
    value: Vr
  }, ot)), x && (ot = /* @__PURE__ */ D.createElement(qu, {
    locale: x,
    _ANT_MARK__: Uu
  }, ot)), ot = /* @__PURE__ */ D.createElement(va.Provider, {
    value: zr
  }, ot), v && (ot = /* @__PURE__ */ D.createElement(_x, {
    size: v
  }, ot)), ot = /* @__PURE__ */ D.createElement(Cm, null, ot);
  const wi = D.useMemo(() => {
    const We = pt || {}, {
      algorithm: A,
      token: W,
      components: G,
      cssVar: ue
    } = We, _e = Tm(We, ["algorithm", "token", "components", "cssVar"]), Ne = A && (!Array.isArray(A) || A.length > 0) ? ds(A) : Yu, Te = {};
    Object.entries(G || {}).forEach((ut) => {
      let [qe, $e] = ut;
      const Xe = Object.assign({}, $e);
      "algorithm" in Xe && (Xe.algorithm === !0 ? Xe.theme = Ne : (Array.isArray(Xe.algorithm) || typeof Xe.algorithm == "function") && (Xe.theme = ds(Xe.algorithm)), delete Xe.algorithm), Te[qe] = Xe;
    });
    const Ce = Object.assign(Object.assign({}, _r), W);
    return Object.assign(Object.assign({}, _e), {
      theme: Ne,
      token: Ce,
      components: Te,
      override: Object.assign({
        override: Ce
      }, Te),
      cssVar: ue
    });
  }, [pt]);
  return T && (ot = /* @__PURE__ */ D.createElement(Gu.Provider, {
    value: wi
  }, ot)), dn.warning && (ot = /* @__PURE__ */ D.createElement(Vu.Provider, {
    value: dn.warning
  }, ot)), F !== void 0 && (ot = /* @__PURE__ */ D.createElement(Px, {
    disabled: F
  }, ot)), /* @__PURE__ */ D.createElement(yn.Provider, {
    value: dn
  }, ot);
}, lr = (s) => {
  const t = D.useContext(yn), e = D.useContext(Hu);
  return /* @__PURE__ */ D.createElement(_m, Object.assign({
    parentContext: t,
    legacyLocale: e
  }, s));
};
lr.ConfigContext = yn;
lr.SizeContext = Nr;
lr.config = Pm;
lr.useConfig = Ix;
Object.defineProperty(lr, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && fi(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), Nr)
});
process.env.NODE_ENV !== "production" && (lr.displayName = "ConfigProvider");
var Im = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
function yf(s) {
  var t;
  return s == null || (t = s.getRootNode) === null || t === void 0 ? void 0 : t.call(s);
}
function Nm(s) {
  return yf(s) instanceof ShadowRoot;
}
function jm(s) {
  return Nm(s) ? yf(s) : null;
}
function Lm(s) {
  return s.replace(/-(.)/g, function(t, e) {
    return e.toUpperCase();
  });
}
function Mm(s, t) {
  bn(s, "[@ant-design/icons] ".concat(t));
}
function Vc(s) {
  return De(s) === "object" && typeof s.name == "string" && typeof s.theme == "string" && (De(s.icon) === "object" || typeof s.icon == "function");
}
function Hc() {
  var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(s).reduce(function(t, e) {
    var a = s[e];
    switch (e) {
      case "class":
        t.className = a, delete t.class;
        break;
      default:
        delete t[e], t[Lm(e)] = a;
    }
    return t;
  }, {});
}
function Hs(s, t, e) {
  return e ? /* @__PURE__ */ Je.createElement(s.tag, ne(ne({
    key: t
  }, Hc(s.attrs)), e), (s.children || []).map(function(a, c) {
    return Hs(a, "".concat(t, "-").concat(s.tag, "-").concat(c));
  })) : /* @__PURE__ */ Je.createElement(s.tag, ne({
    key: t
  }, Hc(s.attrs)), (s.children || []).map(function(a, c) {
    return Hs(a, "".concat(t, "-").concat(s.tag, "-").concat(c));
  }));
}
function bf(s) {
  return Ir(s)[0];
}
function Sf(s) {
  return s ? Array.isArray(s) ? s : [s] : [];
}
var Dm = `
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
`, Bm = function(t) {
  var e = vn(va), a = e.csp, c = e.prefixCls, u = e.layer, f = Dm;
  c && (f = f.replace(/anticon/g, c)), u && (f = "@layer ".concat(u, ` {
`).concat(f, `
}`)), bt(function() {
    var x = t.current, v = jm(x);
    jn(f, "@ant-design-icons", {
      prepend: !u,
      csp: a,
      attachTo: v
    });
  }, []);
}, Fm = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], Tr = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function zm(s) {
  var t = s.primaryColor, e = s.secondaryColor;
  Tr.primaryColor = t, Tr.secondaryColor = e || bf(t), Tr.calculated = !!e;
}
function Vm() {
  return ne({}, Tr);
}
var ur = function(t) {
  var e = t.icon, a = t.className, c = t.onClick, u = t.style, f = t.primaryColor, x = t.secondaryColor, v = kr(t, Fm), y = D.useRef(), S = Tr;
  if (f && (S = {
    primaryColor: f,
    secondaryColor: x || bf(f)
  }), Bm(y), Mm(Vc(e), "icon should be icon definiton, but got ".concat(e)), !Vc(e))
    return null;
  var w = e;
  return w && typeof w.icon == "function" && (w = ne(ne({}, w), {}, {
    icon: w.icon(S.primaryColor, S.secondaryColor)
  })), Hs(w.icon, "svg-".concat(w.name), ne(ne({
    className: a,
    onClick: c,
    style: u,
    "data-icon": w.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, v), {}, {
    ref: y
  }));
};
ur.displayName = "IconReact";
ur.getTwoToneColors = Vm;
ur.setTwoToneColors = zm;
function wf(s) {
  var t = Sf(s), e = Ae(t, 2), a = e[0], c = e[1];
  return ur.setTwoToneColors({
    primaryColor: a,
    secondaryColor: c
  });
}
function Hm() {
  var s = ur.getTwoToneColors();
  return s.calculated ? [s.primaryColor, s.secondaryColor] : s.primaryColor;
}
var Um = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
wf(Lo.primary);
var Sn = /* @__PURE__ */ D.forwardRef(function(s, t) {
  var e = s.className, a = s.icon, c = s.spin, u = s.rotate, f = s.tabIndex, x = s.onClick, v = s.twoToneColor, y = kr(s, Um), S = D.useContext(va), w = S.prefixCls, b = w === void 0 ? "anticon" : w, P = S.rootClassName, O = dt(P, b, se(se({}, "".concat(b, "-").concat(a.name), !!a.name), "".concat(b, "-spin"), !!c || a.name === "loading"), e), C = f;
  C === void 0 && x && (C = -1);
  var E = u ? {
    msTransform: "rotate(".concat(u, "deg)"),
    transform: "rotate(".concat(u, "deg)")
  } : void 0, L = Sf(v), I = Ae(L, 2), T = I[0], F = I[1];
  return /* @__PURE__ */ D.createElement("span", Zt({
    role: "img",
    "aria-label": a.name
  }, y, {
    ref: t,
    tabIndex: C,
    onClick: x,
    className: O
  }), /* @__PURE__ */ D.createElement(ur, {
    icon: a,
    primaryColor: T,
    secondaryColor: F,
    style: E
  }));
});
Sn.displayName = "AntdIcon";
Sn.getTwoToneColor = Hm;
Sn.setTwoToneColor = wf;
var qm = function(t, e) {
  return /* @__PURE__ */ D.createElement(Sn, Zt({}, t, {
    ref: e,
    icon: Im
  }));
}, Ef = /* @__PURE__ */ D.forwardRef(qm);
process.env.NODE_ENV !== "production" && (Ef.displayName = "CheckCircleFilled");
var Wm = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, $m = function(t, e) {
  return /* @__PURE__ */ D.createElement(Sn, Zt({}, t, {
    ref: e,
    icon: Wm
  }));
}, Cf = /* @__PURE__ */ D.forwardRef($m);
process.env.NODE_ENV !== "production" && (Cf.displayName = "CloseCircleFilled");
var Xm = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, Ym = function(t, e) {
  return /* @__PURE__ */ D.createElement(Sn, Zt({}, t, {
    ref: e,
    icon: Xm
  }));
}, Af = /* @__PURE__ */ D.forwardRef(Ym);
process.env.NODE_ENV !== "production" && (Af.displayName = "CloseOutlined");
var Gm = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" }, Km = function(t, e) {
  return /* @__PURE__ */ D.createElement(Sn, Zt({}, t, {
    ref: e,
    icon: Gm
  }));
}, Tf = /* @__PURE__ */ D.forwardRef(Km);
process.env.NODE_ENV !== "production" && (Tf.displayName = "ExclamationCircleFilled");
var Zm = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" }, Jm = function(t, e) {
  return /* @__PURE__ */ D.createElement(Sn, Zt({}, t, {
    ref: e,
    icon: Zm
  }));
}, Of = /* @__PURE__ */ D.forwardRef(Jm);
process.env.NODE_ENV !== "production" && (Of.displayName = "InfoCircleFilled");
var Qm = `accept acceptCharset accessKey action allowFullScreen allowTransparency
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
    summary tabIndex target title type useMap value width wmode wrap`, e1 = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, t1 = "".concat(Qm, " ").concat(e1).split(/[\s\n]+/), n1 = "aria-", r1 = "data-";
function Uc(s, t) {
  return s.indexOf(t) === 0;
}
function o1(s) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, e;
  t === !1 ? e = {
    aria: !0,
    data: !0,
    attr: !0
  } : t === !0 ? e = {
    aria: !0
  } : e = ne({}, t);
  var a = {};
  return Object.keys(s).forEach(function(c) {
    // Aria
    (e.aria && (c === "role" || Uc(c, n1)) || // Data
    e.data && Uc(c, r1) || // Attr
    e.attr && t1.includes(c)) && (a[c] = s[c]);
  }), a;
}
const Rf = (s, t, e) => /* @__PURE__ */ Je.isValidElement(s) ? /* @__PURE__ */ Je.cloneElement(s, typeof e == "function" ? e(s.props || {}) : e) : t;
function i1(s, t) {
  return Rf(s, s, t);
}
const oo = (s, t, e, a, c) => ({
  background: s,
  border: `${No(a.lineWidth)} ${a.lineType} ${t}`,
  [`${c}-icon`]: {
    color: e
  }
}), s1 = (s) => {
  const {
    componentCls: t,
    motionDurationSlow: e,
    marginXS: a,
    marginSM: c,
    fontSize: u,
    fontSizeLG: f,
    lineHeight: x,
    borderRadiusLG: v,
    motionEaseInOutCirc: y,
    withDescriptionIconSize: S,
    colorText: w,
    colorTextHeading: b,
    withDescriptionPadding: P,
    defaultPadding: O
  } = s;
  return {
    [t]: Object.assign(Object.assign({}, rf(s)), {
      position: "relative",
      display: "flex",
      alignItems: "center",
      padding: O,
      wordWrap: "break-word",
      borderRadius: v,
      [`&${t}-rtl`]: {
        direction: "rtl"
      },
      [`${t}-content`]: {
        flex: 1,
        minWidth: 0
      },
      [`${t}-icon`]: {
        marginInlineEnd: a,
        lineHeight: 0
      },
      "&-description": {
        display: "none",
        fontSize: u,
        lineHeight: x
      },
      "&-message": {
        color: b
      },
      [`&${t}-motion-leave`]: {
        overflow: "hidden",
        opacity: 1,
        transition: `max-height ${e} ${y}, opacity ${e} ${y},
        padding-top ${e} ${y}, padding-bottom ${e} ${y},
        margin-bottom ${e} ${y}`
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
      padding: P,
      [`${t}-icon`]: {
        marginInlineEnd: c,
        fontSize: S,
        lineHeight: 0
      },
      [`${t}-message`]: {
        display: "block",
        marginBottom: a,
        color: b,
        fontSize: f
      },
      [`${t}-description`]: {
        display: "block",
        color: w
      }
    },
    [`${t}-banner`]: {
      marginBottom: 0,
      border: "0 !important",
      borderRadius: 0
    }
  };
}, a1 = (s) => {
  const {
    componentCls: t,
    colorSuccess: e,
    colorSuccessBorder: a,
    colorSuccessBg: c,
    colorWarning: u,
    colorWarningBorder: f,
    colorWarningBg: x,
    colorError: v,
    colorErrorBorder: y,
    colorErrorBg: S,
    colorInfo: w,
    colorInfoBorder: b,
    colorInfoBg: P
  } = s;
  return {
    [t]: {
      "&-success": oo(c, a, e, s, t),
      "&-info": oo(P, b, w, s, t),
      "&-warning": oo(x, f, u, s, t),
      "&-error": Object.assign(Object.assign({}, oo(S, y, v, s, t)), {
        [`${t}-description > pre`]: {
          margin: 0,
          padding: 0
        }
      })
    }
  };
}, c1 = (s) => {
  const {
    componentCls: t,
    iconCls: e,
    motionDurationMid: a,
    marginXS: c,
    fontSizeIcon: u,
    colorIcon: f,
    colorIconHover: x
  } = s;
  return {
    [t]: {
      "&-action": {
        marginInlineStart: c
      },
      [`${t}-close-icon`]: {
        marginInlineStart: c,
        padding: 0,
        overflow: "hidden",
        fontSize: u,
        lineHeight: No(u),
        backgroundColor: "transparent",
        border: "none",
        outline: "none",
        cursor: "pointer",
        [`${e}-close`]: {
          color: f,
          transition: `color ${a}`,
          "&:hover": {
            color: x
          }
        }
      },
      "&-close-text": {
        color: f,
        transition: `color ${a}`,
        "&:hover": {
          color: x
        }
      }
    }
  };
}, l1 = (s) => ({
  withDescriptionIconSize: s.fontSizeHeading3,
  defaultPadding: `${s.paddingContentVerticalSM}px 12px`,
  withDescriptionPadding: `${s.paddingMD}px ${s.paddingContentHorizontalLG}px`
}), u1 = wa("Alert", (s) => [s1(s), a1(s), c1(s)], l1);
var qc = function(s, t) {
  var e = {};
  for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && t.indexOf(a) < 0 && (e[a] = s[a]);
  if (s != null && typeof Object.getOwnPropertySymbols == "function") for (var c = 0, a = Object.getOwnPropertySymbols(s); c < a.length; c++)
    t.indexOf(a[c]) < 0 && Object.prototype.propertyIsEnumerable.call(s, a[c]) && (e[a[c]] = s[a[c]]);
  return e;
};
const f1 = {
  success: Ef,
  info: Of,
  error: Cf,
  warning: Tf
}, d1 = (s) => {
  const {
    icon: t,
    prefixCls: e,
    type: a
  } = s, c = f1[a] || null;
  return t ? Rf(t, /* @__PURE__ */ D.createElement("span", {
    className: `${e}-icon`
  }, t), () => ({
    className: dt(`${e}-icon`, t.props.className)
  })) : /* @__PURE__ */ D.createElement(c, {
    className: `${e}-icon`
  });
}, h1 = (s) => {
  const {
    isClosable: t,
    prefixCls: e,
    closeIcon: a,
    handleClose: c,
    ariaProps: u
  } = s, f = a === !0 || a === void 0 ? /* @__PURE__ */ D.createElement(Af, null) : a;
  return t ? /* @__PURE__ */ D.createElement("button", Object.assign({
    type: "button",
    onClick: c,
    className: `${e}-close-icon`,
    tabIndex: 0
  }, u), f) : null;
}, Ca = /* @__PURE__ */ D.forwardRef((s, t) => {
  const {
    description: e,
    prefixCls: a,
    message: c,
    banner: u,
    className: f,
    rootClassName: x,
    style: v,
    onMouseEnter: y,
    onMouseLeave: S,
    onClick: w,
    afterClose: b,
    showIcon: P,
    closable: O,
    closeText: C,
    closeIcon: E,
    action: L,
    id: I
  } = s, T = qc(s, ["description", "prefixCls", "message", "banner", "className", "rootClassName", "style", "onMouseEnter", "onMouseLeave", "onClick", "afterClose", "showIcon", "closable", "closeText", "closeIcon", "action", "id"]), [F, _] = D.useState(!1);
  process.env.NODE_ENV !== "production" && cr("Alert").deprecated(!C, "closeText", "closable.closeIcon");
  const V = D.useRef(null);
  D.useImperativeHandle(t, () => ({
    nativeElement: V.current
  }));
  const {
    getPrefixCls: M,
    direction: Y,
    closable: J,
    closeIcon: ce,
    className: Se,
    style: fe
  } = Ku("alert"), K = M("alert", a), [oe, re, ge] = u1(K), he = (ye) => {
    var Re;
    _(!0), (Re = s.onClose) === null || Re === void 0 || Re.call(s, ye);
  }, xe = D.useMemo(() => s.type !== void 0 ? s.type : u ? "warning" : "info", [s.type, u]), me = D.useMemo(() => typeof O == "object" && O.closeIcon || C ? !0 : typeof O == "boolean" ? O : E !== !1 && E !== null && E !== void 0 ? !0 : !!J, [C, E, O, J]), pe = u && P === void 0 ? !0 : P, ae = dt(K, `${K}-${xe}`, {
    [`${K}-with-description`]: !!e,
    [`${K}-no-icon`]: !pe,
    [`${K}-banner`]: !!u,
    [`${K}-rtl`]: Y === "rtl"
  }, Se, f, x, ge, re), te = o1(T, {
    aria: !0,
    data: !0
  }), le = D.useMemo(() => typeof O == "object" && O.closeIcon ? O.closeIcon : C || (E !== void 0 ? E : typeof J == "object" && J.closeIcon ? J.closeIcon : ce), [E, O, C, ce]), ve = D.useMemo(() => {
    const ye = O ?? J;
    if (typeof ye == "object") {
      const {
        closeIcon: Re
      } = ye;
      return qc(ye, ["closeIcon"]);
    }
    return {};
  }, [O, J]);
  return oe(/* @__PURE__ */ D.createElement(mf, {
    visible: !F,
    motionName: `${K}-motion`,
    motionAppear: !1,
    motionEnter: !1,
    onLeaveStart: (ye) => ({
      maxHeight: ye.offsetHeight
    }),
    onLeaveEnd: b
  }, (ye, Re) => {
    let {
      className: U,
      style: Z
    } = ye;
    return /* @__PURE__ */ D.createElement("div", Object.assign({
      id: I,
      ref: Hh(V, Re),
      "data-show": !F,
      className: dt(ae, U),
      style: Object.assign(Object.assign(Object.assign({}, fe), v), Z),
      onMouseEnter: y,
      onMouseLeave: S,
      onClick: w,
      role: "alert"
    }, te), pe ? /* @__PURE__ */ D.createElement(d1, {
      description: e,
      icon: s.icon,
      prefixCls: K,
      type: xe
    }) : null, /* @__PURE__ */ D.createElement("div", {
      className: `${K}-content`
    }, c ? /* @__PURE__ */ D.createElement("div", {
      className: `${K}-message`
    }, c) : null, e ? /* @__PURE__ */ D.createElement("div", {
      className: `${K}-description`
    }, e) : null), L ? /* @__PURE__ */ D.createElement("div", {
      className: `${K}-action`
    }, L) : null, /* @__PURE__ */ D.createElement(h1, {
      isClosable: me,
      prefixCls: K,
      closeIcon: le,
      handleClose: he,
      ariaProps: ve
    }));
  }));
});
process.env.NODE_ENV !== "production" && (Ca.displayName = "Alert");
function p1(s, t, e) {
  return t = Jn(t), lu(s, fa() ? Reflect.construct(t, e || [], Jn(s).constructor) : t.apply(s, e));
}
let x1 = /* @__PURE__ */ function(s) {
  function t() {
    var e;
    return Vt(this, t), e = p1(this, t, arguments), e.state = {
      error: void 0,
      info: {
        componentStack: ""
      }
    }, e;
  }
  return Mr(t, s), Ht(t, [{
    key: "componentDidCatch",
    value: function(a, c) {
      this.setState({
        error: a,
        info: c
      });
    }
  }, {
    key: "render",
    value: function() {
      const {
        message: a,
        description: c,
        id: u,
        children: f
      } = this.props, {
        error: x,
        info: v
      } = this.state, y = (v == null ? void 0 : v.componentStack) || null, S = typeof a > "u" ? (x || "").toString() : a, w = typeof c > "u" ? y : c;
      return x ? /* @__PURE__ */ D.createElement(Ca, {
        id: u,
        type: "error",
        message: S,
        description: /* @__PURE__ */ D.createElement("pre", {
          style: {
            fontSize: "0.9em",
            overflowX: "auto"
          }
        }, w)
      }) : f;
    }
  }]);
}(D.Component);
const kf = Ca;
kf.ErrorBoundary = x1;
function m1(s, t) {
  var e = Object.assign({}, s);
  return Array.isArray(t) && t.forEach(function(a) {
    delete e[a];
  }), e;
}
function g1(s, t, e) {
  var a = e || {}, c = a.noTrailing, u = c === void 0 ? !1 : c, f = a.noLeading, x = f === void 0 ? !1 : f, v = a.debounceMode, y = v === void 0 ? void 0 : v, S, w = !1, b = 0;
  function P() {
    S && clearTimeout(S);
  }
  function O(E) {
    var L = E || {}, I = L.upcomingOnly, T = I === void 0 ? !1 : I;
    P(), w = !T;
  }
  function C() {
    for (var E = arguments.length, L = new Array(E), I = 0; I < E; I++)
      L[I] = arguments[I];
    var T = this, F = Date.now() - b;
    if (w)
      return;
    function _() {
      b = Date.now(), t.apply(T, L);
    }
    function V() {
      S = void 0;
    }
    !x && y && !S && _(), P(), y === void 0 && F > s ? x ? (b = Date.now(), u || (S = setTimeout(y ? V : _, s))) : _() : u !== !0 && (S = setTimeout(y ? V : _, y === void 0 ? s - F : s));
  }
  return C.cancel = O, C;
}
function v1(s, t, e) {
  var a = {}, c = a.atBegin, u = c === void 0 ? !1 : c;
  return g1(s, t, {
    debounceMode: u !== !1
  });
}
function Wc(s) {
  return ["small", "middle", "large"].includes(s);
}
const Pf = ["wrap", "nowrap", "wrap-reverse"], _f = ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around", "space-evenly", "stretch", "normal", "left", "right"], If = ["center", "start", "end", "flex-start", "flex-end", "self-start", "self-end", "baseline", "normal", "stretch"], y1 = (s, t) => {
  const e = t.wrap === !0 ? "wrap" : t.wrap;
  return {
    [`${s}-wrap-${e}`]: e && Pf.includes(e)
  };
}, b1 = (s, t) => {
  const e = {};
  return If.forEach((a) => {
    e[`${s}-align-${a}`] = t.align === a;
  }), e[`${s}-align-stretch`] = !t.align && !!t.vertical, e;
}, S1 = (s, t) => {
  const e = {};
  return _f.forEach((a) => {
    e[`${s}-justify-${a}`] = t.justify === a;
  }), e;
};
function w1(s, t) {
  return dt(Object.assign(Object.assign(Object.assign({}, y1(s, t)), b1(s, t)), S1(s, t)));
}
const E1 = (s) => {
  const {
    componentCls: t
  } = s;
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
}, C1 = (s) => {
  const {
    componentCls: t
  } = s;
  return {
    [t]: {
      "&-gap-small": {
        gap: s.flexGapSM
      },
      "&-gap-middle": {
        gap: s.flexGap
      },
      "&-gap-large": {
        gap: s.flexGapLG
      }
    }
  };
}, A1 = (s) => {
  const {
    componentCls: t
  } = s, e = {};
  return Pf.forEach((a) => {
    e[`${t}-wrap-${a}`] = {
      flexWrap: a
    };
  }), e;
}, T1 = (s) => {
  const {
    componentCls: t
  } = s, e = {};
  return If.forEach((a) => {
    e[`${t}-align-${a}`] = {
      alignItems: a
    };
  }), e;
}, O1 = (s) => {
  const {
    componentCls: t
  } = s, e = {};
  return _f.forEach((a) => {
    e[`${t}-justify-${a}`] = {
      justifyContent: a
    };
  }), e;
}, R1 = () => ({}), k1 = wa("Flex", (s) => {
  const {
    paddingXS: t,
    padding: e,
    paddingLG: a
  } = s, c = hi(s, {
    flexGapSM: t,
    flexGap: e,
    flexGapLG: a
  });
  return [E1(c), C1(c), A1(c), T1(c), O1(c)];
}, R1, {
  // Flex component don't apply extra font style
  // https://github.com/ant-design/ant-design/issues/46403
  resetStyle: !1
});
var P1 = function(s, t) {
  var e = {};
  for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && t.indexOf(a) < 0 && (e[a] = s[a]);
  if (s != null && typeof Object.getOwnPropertySymbols == "function") for (var c = 0, a = Object.getOwnPropertySymbols(s); c < a.length; c++)
    t.indexOf(a[c]) < 0 && Object.prototype.propertyIsEnumerable.call(s, a[c]) && (e[a[c]] = s[a[c]]);
  return e;
};
const Nf = /* @__PURE__ */ Je.forwardRef((s, t) => {
  const {
    prefixCls: e,
    rootClassName: a,
    className: c,
    style: u,
    flex: f,
    gap: x,
    children: v,
    vertical: y = !1,
    component: S = "div"
  } = s, w = P1(s, ["prefixCls", "rootClassName", "className", "style", "flex", "gap", "children", "vertical", "component"]), {
    flex: b,
    direction: P,
    getPrefixCls: O
  } = Je.useContext(yn), C = O("flex", e), [E, L, I] = k1(C), T = y ?? (b == null ? void 0 : b.vertical), F = dt(c, a, b == null ? void 0 : b.className, C, L, I, w1(C, s), {
    [`${C}-rtl`]: P === "rtl",
    [`${C}-gap-${x}`]: Wc(x),
    [`${C}-vertical`]: T
  }), _ = Object.assign(Object.assign({}, b == null ? void 0 : b.style), u);
  return f && (_.flex = f), x && !Wc(x) && (_.gap = x), E(/* @__PURE__ */ Je.createElement(S, Object.assign({
    ref: t,
    className: F,
    style: _
  }, m1(w, ["justify", "wrap", "align"])), v));
});
process.env.NODE_ENV !== "production" && (Nf.displayName = "Flex");
const Mo = 100, jf = Mo / 5, Lf = Mo / 2 - jf / 2, Ui = Lf * 2 * Math.PI, $c = 50, Xc = (s) => {
  const {
    dotClassName: t,
    style: e,
    hasCircleCls: a
  } = s;
  return /* @__PURE__ */ D.createElement("circle", {
    className: dt(`${t}-circle`, {
      [`${t}-circle-bg`]: a
    }),
    r: Lf,
    cx: $c,
    cy: $c,
    strokeWidth: jf,
    style: e
  });
}, _1 = (s) => {
  let {
    percent: t,
    prefixCls: e
  } = s;
  const a = `${e}-dot`, c = `${a}-holder`, u = `${c}-hidden`, [f, x] = D.useState(!1);
  wu(() => {
    t !== 0 && x(!0);
  }, [t !== 0]);
  const v = Math.max(Math.min(t, 100), 0);
  if (!f)
    return null;
  const y = {
    strokeDashoffset: `${Ui / 4}`,
    strokeDasharray: `${Ui * v / 100} ${Ui * (100 - v) / 100}`
  };
  return /* @__PURE__ */ D.createElement("span", {
    className: dt(c, `${a}-progress`, v <= 0 && u)
  }, /* @__PURE__ */ D.createElement("svg", {
    viewBox: `0 0 ${Mo} ${Mo}`,
    // biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole: progressbar could be readonly
    role: "progressbar",
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": v
  }, /* @__PURE__ */ D.createElement(Xc, {
    dotClassName: a,
    hasCircleCls: !0
  }), /* @__PURE__ */ D.createElement(Xc, {
    dotClassName: a,
    style: y
  })));
};
function I1(s) {
  const {
    prefixCls: t,
    percent: e = 0
  } = s, a = `${t}-dot`, c = `${a}-holder`, u = `${c}-hidden`;
  return /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement("span", {
    className: dt(c, e > 0 && u)
  }, /* @__PURE__ */ D.createElement("span", {
    className: dt(a, `${t}-dot-spin`)
  }, [1, 2, 3, 4].map((f) => /* @__PURE__ */ D.createElement("i", {
    className: `${t}-dot-item`,
    key: f
  })))), /* @__PURE__ */ D.createElement(_1, {
    prefixCls: t,
    percent: e
  }));
}
function N1(s) {
  const {
    prefixCls: t,
    indicator: e,
    percent: a
  } = s, c = `${t}-dot`;
  return e && /* @__PURE__ */ D.isValidElement(e) ? i1(e, {
    className: dt(e.props.className, c),
    percent: a
  }) : /* @__PURE__ */ D.createElement(I1, {
    prefixCls: t,
    percent: a
  });
}
const j1 = new Bu("antSpinMove", {
  to: {
    opacity: 1
  }
}), L1 = new Bu("antRotate", {
  to: {
    transform: "rotate(405deg)"
  }
}), M1 = (s) => {
  const {
    componentCls: t,
    calc: e
  } = s;
  return {
    [t]: Object.assign(Object.assign({}, rf(s)), {
      position: "absolute",
      display: "none",
      color: s.colorPrimary,
      fontSize: 0,
      textAlign: "center",
      verticalAlign: "middle",
      opacity: 0,
      transition: `transform ${s.motionDurationSlow} ${s.motionEaseInOutCirc}`,
      "&-spinning": {
        position: "relative",
        display: "inline-block",
        opacity: 1
      },
      [`${t}-text`]: {
        fontSize: s.fontSize,
        paddingTop: e(e(s.dotSize).sub(s.fontSize)).div(2).add(2).equal()
      },
      "&-fullscreen": {
        position: "fixed",
        width: "100vw",
        height: "100vh",
        backgroundColor: s.colorBgMask,
        zIndex: s.zIndexPopupBase,
        inset: 0,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        opacity: 0,
        visibility: "hidden",
        transition: `all ${s.motionDurationMid}`,
        "&-show": {
          opacity: 1,
          visibility: "visible"
        },
        [t]: {
          [`${t}-dot-holder`]: {
            color: s.colorWhite
          },
          [`${t}-text`]: {
            color: s.colorTextLightSolid
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
          maxHeight: s.contentHeight,
          [`${t}-dot`]: {
            position: "absolute",
            top: "50%",
            insetInlineStart: "50%",
            margin: e(s.dotSize).mul(-1).div(2).equal()
          },
          [`${t}-text`]: {
            position: "absolute",
            top: "50%",
            width: "100%",
            textShadow: `0 1px 2px ${s.colorBgContainer}`
            // FIXME: shadow
          },
          [`&${t}-show-text ${t}-dot`]: {
            marginTop: e(s.dotSize).div(2).mul(-1).sub(10).equal()
          },
          "&-sm": {
            [`${t}-dot`]: {
              margin: e(s.dotSizeSM).mul(-1).div(2).equal()
            },
            [`${t}-text`]: {
              paddingTop: e(e(s.dotSizeSM).sub(s.fontSize)).div(2).add(2).equal()
            },
            [`&${t}-show-text ${t}-dot`]: {
              marginTop: e(s.dotSizeSM).div(2).mul(-1).sub(10).equal()
            }
          },
          "&-lg": {
            [`${t}-dot`]: {
              margin: e(s.dotSizeLG).mul(-1).div(2).equal()
            },
            [`${t}-text`]: {
              paddingTop: e(e(s.dotSizeLG).sub(s.fontSize)).div(2).add(2).equal()
            },
            [`&${t}-show-text ${t}-dot`]: {
              marginTop: e(s.dotSizeLG).div(2).mul(-1).sub(10).equal()
            }
          }
        },
        [`${t}-container`]: {
          position: "relative",
          transition: `opacity ${s.motionDurationSlow}`,
          "&::after": {
            position: "absolute",
            top: 0,
            insetInlineEnd: 0,
            bottom: 0,
            insetInlineStart: 0,
            zIndex: 10,
            width: "100%",
            height: "100%",
            background: s.colorBgContainer,
            opacity: 0,
            transition: `all ${s.motionDurationSlow}`,
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
        color: s.spinDotDefault
      },
      // holder
      // ------------------------------
      [`${t}-dot-holder`]: {
        width: "1em",
        height: "1em",
        fontSize: s.dotSize,
        display: "inline-block",
        transition: `transform ${s.motionDurationSlow} ease, opacity ${s.motionDurationSlow} ease`,
        transformOrigin: "50% 50%",
        lineHeight: 1,
        color: s.colorPrimary,
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
        fontSize: s.dotSize,
        width: "1em",
        height: "1em",
        "&-item": {
          position: "absolute",
          display: "block",
          width: e(s.dotSize).sub(e(s.marginXXS).div(2)).div(2).equal(),
          height: e(s.dotSize).sub(e(s.marginXXS).div(2)).div(2).equal(),
          background: "currentColor",
          borderRadius: "100%",
          transform: "scale(0.75)",
          transformOrigin: "50% 50%",
          opacity: 0.3,
          animationName: j1,
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
          animationName: L1,
          animationDuration: "1.2s",
          animationIterationCount: "infinite",
          animationTimingFunction: "linear"
        },
        "&-circle": {
          strokeLinecap: "round",
          transition: ["stroke-dashoffset", "stroke-dasharray", "stroke", "stroke-width", "opacity"].map((a) => `${a} ${s.motionDurationSlow} ease`).join(","),
          fillOpacity: 0,
          stroke: "currentcolor"
        },
        "&-circle-bg": {
          stroke: s.colorFillSecondary
        }
      },
      // small
      [`&-sm ${t}-dot`]: {
        "&, &-holder": {
          fontSize: s.dotSizeSM
        }
      },
      [`&-sm ${t}-dot-holder`]: {
        i: {
          width: e(e(s.dotSizeSM).sub(e(s.marginXXS).div(2))).div(2).equal(),
          height: e(e(s.dotSizeSM).sub(e(s.marginXXS).div(2))).div(2).equal()
        }
      },
      // large
      [`&-lg ${t}-dot`]: {
        "&, &-holder": {
          fontSize: s.dotSizeLG
        }
      },
      [`&-lg ${t}-dot-holder`]: {
        i: {
          width: e(e(s.dotSizeLG).sub(s.marginXXS)).div(2).equal(),
          height: e(e(s.dotSizeLG).sub(s.marginXXS)).div(2).equal()
        }
      },
      [`&${t}-show-text ${t}-text`]: {
        display: "block"
      }
    })
  };
}, D1 = (s) => {
  const {
    controlHeightLG: t,
    controlHeight: e
  } = s;
  return {
    contentHeight: 400,
    dotSize: t / 2,
    dotSizeSM: t * 0.35,
    dotSizeLG: e
  };
}, B1 = wa("Spin", (s) => {
  const t = hi(s, {
    spinDotDefault: s.colorTextDescription
  });
  return [M1(t)];
}, D1), F1 = 200, Yc = [[30, 0.05], [70, 0.03], [96, 0.01]];
function z1(s, t) {
  const [e, a] = D.useState(0), c = D.useRef(null), u = t === "auto";
  return D.useEffect(() => (u && s && (a(0), c.current = setInterval(() => {
    a((f) => {
      const x = 100 - f;
      for (let v = 0; v < Yc.length; v += 1) {
        const [y, S] = Yc[v];
        if (f <= y)
          return f + x * S;
      }
      return f;
    });
  }, F1)), () => {
    clearInterval(c.current);
  }), [u, s]), u ? e : t;
}
var V1 = function(s, t) {
  var e = {};
  for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && t.indexOf(a) < 0 && (e[a] = s[a]);
  if (s != null && typeof Object.getOwnPropertySymbols == "function") for (var c = 0, a = Object.getOwnPropertySymbols(s); c < a.length; c++)
    t.indexOf(a[c]) < 0 && Object.prototype.propertyIsEnumerable.call(s, a[c]) && (e[a[c]] = s[a[c]]);
  return e;
};
let Mf;
function H1(s, t) {
  return !!s && !!t && !Number.isNaN(Number(t));
}
const Or = (s) => {
  var t;
  const {
    prefixCls: e,
    spinning: a = !0,
    delay: c = 0,
    className: u,
    rootClassName: f,
    size: x = "default",
    tip: v,
    wrapperClassName: y,
    style: S,
    children: w,
    fullscreen: b = !1,
    indicator: P,
    percent: O
  } = s, C = V1(s, ["prefixCls", "spinning", "delay", "className", "rootClassName", "size", "tip", "wrapperClassName", "style", "children", "fullscreen", "indicator", "percent"]), {
    getPrefixCls: E,
    direction: L,
    className: I,
    style: T,
    indicator: F
  } = Ku("spin"), _ = E("spin", e), [V, M, Y] = B1(_), [J, ce] = D.useState(() => a && !H1(a, c)), Se = z1(J, O);
  D.useEffect(() => {
    if (a) {
      const xe = v1(c, () => {
        ce(!0);
      });
      return xe(), () => {
        var me;
        (me = xe == null ? void 0 : xe.cancel) === null || me === void 0 || me.call(xe);
      };
    }
    ce(!1);
  }, [c, a]);
  const fe = D.useMemo(() => typeof w < "u" && !b, [w, b]);
  if (process.env.NODE_ENV !== "production") {
    const xe = cr("Spin");
    process.env.NODE_ENV !== "production" && xe(!v || fe || b, "usage", "`tip` only work in nest or fullscreen pattern.");
  }
  const K = dt(_, I, {
    [`${_}-sm`]: x === "small",
    [`${_}-lg`]: x === "large",
    [`${_}-spinning`]: J,
    [`${_}-show-text`]: !!v,
    [`${_}-rtl`]: L === "rtl"
  }, u, !b && f, M, Y), oe = dt(`${_}-container`, {
    [`${_}-blur`]: J
  }), re = (t = P ?? F) !== null && t !== void 0 ? t : Mf, ge = Object.assign(Object.assign({}, T), S), he = /* @__PURE__ */ D.createElement("div", Object.assign({}, C, {
    style: ge,
    className: K,
    "aria-live": "polite",
    "aria-busy": J
  }), /* @__PURE__ */ D.createElement(N1, {
    prefixCls: _,
    indicator: re,
    percent: Se
  }), v && (fe || b) ? /* @__PURE__ */ D.createElement("div", {
    className: `${_}-text`
  }, v) : null);
  return V(fe ? /* @__PURE__ */ D.createElement("div", Object.assign({}, C, {
    className: dt(`${_}-nested-loading`, y, M, Y)
  }), J && /* @__PURE__ */ D.createElement("div", {
    key: "loading"
  }, he), /* @__PURE__ */ D.createElement("div", {
    className: oe,
    key: "container"
  }, w)) : b ? /* @__PURE__ */ D.createElement("div", {
    className: dt(`${_}-fullscreen`, {
      [`${_}-fullscreen-show`]: J
    }, f, M, Y)
  }, he) : he);
};
Or.setDefaultIndicator = (s) => {
  Mf = s;
};
process.env.NODE_ENV !== "production" && (Or.displayName = "Spin");
function Df(s, t) {
  return function() {
    return s.apply(t, arguments);
  };
}
const { toString: U1 } = Object.prototype, { getPrototypeOf: Aa } = Object, { iterator: pi, toStringTag: Bf } = Symbol, xi = /* @__PURE__ */ ((s) => (t) => {
  const e = U1.call(t);
  return s[e] || (s[e] = e.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Ut = (s) => (s = s.toLowerCase(), (t) => xi(t) === s), mi = (s) => (t) => typeof t === s, { isArray: fr } = Array, jr = mi("undefined");
function q1(s) {
  return s !== null && !jr(s) && s.constructor !== null && !jr(s.constructor) && wt(s.constructor.isBuffer) && s.constructor.isBuffer(s);
}
const Ff = Ut("ArrayBuffer");
function W1(s) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(s) : t = s && s.buffer && Ff(s.buffer), t;
}
const $1 = mi("string"), wt = mi("function"), zf = mi("number"), gi = (s) => s !== null && typeof s == "object", X1 = (s) => s === !0 || s === !1, wo = (s) => {
  if (xi(s) !== "object")
    return !1;
  const t = Aa(s);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Bf in s) && !(pi in s);
}, Y1 = Ut("Date"), G1 = Ut("File"), K1 = Ut("Blob"), Z1 = Ut("FileList"), J1 = (s) => gi(s) && wt(s.pipe), Q1 = (s) => {
  let t;
  return s && (typeof FormData == "function" && s instanceof FormData || wt(s.append) && ((t = xi(s)) === "formdata" || // detect form-data instance
  t === "object" && wt(s.toString) && s.toString() === "[object FormData]"));
}, eg = Ut("URLSearchParams"), [tg, ng, rg, og] = ["ReadableStream", "Request", "Response", "Headers"].map(Ut), ig = (s) => s.trim ? s.trim() : s.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Br(s, t, { allOwnKeys: e = !1 } = {}) {
  if (s === null || typeof s > "u")
    return;
  let a, c;
  if (typeof s != "object" && (s = [s]), fr(s))
    for (a = 0, c = s.length; a < c; a++)
      t.call(null, s[a], a, s);
  else {
    const u = e ? Object.getOwnPropertyNames(s) : Object.keys(s), f = u.length;
    let x;
    for (a = 0; a < f; a++)
      x = u[a], t.call(null, s[x], x, s);
  }
}
function Vf(s, t) {
  t = t.toLowerCase();
  const e = Object.keys(s);
  let a = e.length, c;
  for (; a-- > 0; )
    if (c = e[a], t === c.toLowerCase())
      return c;
  return null;
}
const Rn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Hf = (s) => !jr(s) && s !== Rn;
function Us() {
  const { caseless: s } = Hf(this) && this || {}, t = {}, e = (a, c) => {
    const u = s && Vf(t, c) || c;
    wo(t[u]) && wo(a) ? t[u] = Us(t[u], a) : wo(a) ? t[u] = Us({}, a) : fr(a) ? t[u] = a.slice() : t[u] = a;
  };
  for (let a = 0, c = arguments.length; a < c; a++)
    arguments[a] && Br(arguments[a], e);
  return t;
}
const sg = (s, t, e, { allOwnKeys: a } = {}) => (Br(t, (c, u) => {
  e && wt(c) ? s[u] = Df(c, e) : s[u] = c;
}, { allOwnKeys: a }), s), ag = (s) => (s.charCodeAt(0) === 65279 && (s = s.slice(1)), s), cg = (s, t, e, a) => {
  s.prototype = Object.create(t.prototype, a), s.prototype.constructor = s, Object.defineProperty(s, "super", {
    value: t.prototype
  }), e && Object.assign(s.prototype, e);
}, lg = (s, t, e, a) => {
  let c, u, f;
  const x = {};
  if (t = t || {}, s == null) return t;
  do {
    for (c = Object.getOwnPropertyNames(s), u = c.length; u-- > 0; )
      f = c[u], (!a || a(f, s, t)) && !x[f] && (t[f] = s[f], x[f] = !0);
    s = e !== !1 && Aa(s);
  } while (s && (!e || e(s, t)) && s !== Object.prototype);
  return t;
}, ug = (s, t, e) => {
  s = String(s), (e === void 0 || e > s.length) && (e = s.length), e -= t.length;
  const a = s.indexOf(t, e);
  return a !== -1 && a === e;
}, fg = (s) => {
  if (!s) return null;
  if (fr(s)) return s;
  let t = s.length;
  if (!zf(t)) return null;
  const e = new Array(t);
  for (; t-- > 0; )
    e[t] = s[t];
  return e;
}, dg = /* @__PURE__ */ ((s) => (t) => s && t instanceof s)(typeof Uint8Array < "u" && Aa(Uint8Array)), hg = (s, t) => {
  const a = (s && s[pi]).call(s);
  let c;
  for (; (c = a.next()) && !c.done; ) {
    const u = c.value;
    t.call(s, u[0], u[1]);
  }
}, pg = (s, t) => {
  let e;
  const a = [];
  for (; (e = s.exec(t)) !== null; )
    a.push(e);
  return a;
}, xg = Ut("HTMLFormElement"), mg = (s) => s.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(e, a, c) {
    return a.toUpperCase() + c;
  }
), Gc = (({ hasOwnProperty: s }) => (t, e) => s.call(t, e))(Object.prototype), gg = Ut("RegExp"), Uf = (s, t) => {
  const e = Object.getOwnPropertyDescriptors(s), a = {};
  Br(e, (c, u) => {
    let f;
    (f = t(c, u, s)) !== !1 && (a[u] = f || c);
  }), Object.defineProperties(s, a);
}, vg = (s) => {
  Uf(s, (t, e) => {
    if (wt(s) && ["arguments", "caller", "callee"].indexOf(e) !== -1)
      return !1;
    const a = s[e];
    if (wt(a)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + e + "'");
      });
    }
  });
}, yg = (s, t) => {
  const e = {}, a = (c) => {
    c.forEach((u) => {
      e[u] = !0;
    });
  };
  return fr(s) ? a(s) : a(String(s).split(t)), e;
}, bg = () => {
}, Sg = (s, t) => s != null && Number.isFinite(s = +s) ? s : t;
function wg(s) {
  return !!(s && wt(s.append) && s[Bf] === "FormData" && s[pi]);
}
const Eg = (s) => {
  const t = new Array(10), e = (a, c) => {
    if (gi(a)) {
      if (t.indexOf(a) >= 0)
        return;
      if (!("toJSON" in a)) {
        t[c] = a;
        const u = fr(a) ? [] : {};
        return Br(a, (f, x) => {
          const v = e(f, c + 1);
          !jr(v) && (u[x] = v);
        }), t[c] = void 0, u;
      }
    }
    return a;
  };
  return e(s, 0);
}, Cg = Ut("AsyncFunction"), Ag = (s) => s && (gi(s) || wt(s)) && wt(s.then) && wt(s.catch), qf = ((s, t) => s ? setImmediate : t ? ((e, a) => (Rn.addEventListener("message", ({ source: c, data: u }) => {
  c === Rn && u === e && a.length && a.shift()();
}, !1), (c) => {
  a.push(c), Rn.postMessage(e, "*");
}))(`axios@${Math.random()}`, []) : (e) => setTimeout(e))(
  typeof setImmediate == "function",
  wt(Rn.postMessage)
), Tg = typeof queueMicrotask < "u" ? queueMicrotask.bind(Rn) : typeof process < "u" && process.nextTick || qf, Og = (s) => s != null && wt(s[pi]), z = {
  isArray: fr,
  isArrayBuffer: Ff,
  isBuffer: q1,
  isFormData: Q1,
  isArrayBufferView: W1,
  isString: $1,
  isNumber: zf,
  isBoolean: X1,
  isObject: gi,
  isPlainObject: wo,
  isReadableStream: tg,
  isRequest: ng,
  isResponse: rg,
  isHeaders: og,
  isUndefined: jr,
  isDate: Y1,
  isFile: G1,
  isBlob: K1,
  isRegExp: gg,
  isFunction: wt,
  isStream: J1,
  isURLSearchParams: eg,
  isTypedArray: dg,
  isFileList: Z1,
  forEach: Br,
  merge: Us,
  extend: sg,
  trim: ig,
  stripBOM: ag,
  inherits: cg,
  toFlatObject: lg,
  kindOf: xi,
  kindOfTest: Ut,
  endsWith: ug,
  toArray: fg,
  forEachEntry: hg,
  matchAll: pg,
  isHTMLForm: xg,
  hasOwnProperty: Gc,
  hasOwnProp: Gc,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Uf,
  freezeMethods: vg,
  toObjectSet: yg,
  toCamelCase: mg,
  noop: bg,
  toFiniteNumber: Sg,
  findKey: Vf,
  global: Rn,
  isContextDefined: Hf,
  isSpecCompliantForm: wg,
  toJSONObject: Eg,
  isAsyncFn: Cg,
  isThenable: Ag,
  setImmediate: qf,
  asap: Tg,
  isIterable: Og
};
function be(s, t, e, a, c) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = s, this.name = "AxiosError", t && (this.code = t), e && (this.config = e), a && (this.request = a), c && (this.response = c, this.status = c.status ? c.status : null);
}
z.inherits(be, Error, {
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
      config: z.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Wf = be.prototype, $f = {};
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
].forEach((s) => {
  $f[s] = { value: s };
});
Object.defineProperties(be, $f);
Object.defineProperty(Wf, "isAxiosError", { value: !0 });
be.from = (s, t, e, a, c, u) => {
  const f = Object.create(Wf);
  return z.toFlatObject(s, f, function(v) {
    return v !== Error.prototype;
  }, (x) => x !== "isAxiosError"), be.call(f, s.message, t, e, a, c), f.cause = s, f.name = s.name, u && Object.assign(f, u), f;
};
const Rg = null;
function qs(s) {
  return z.isPlainObject(s) || z.isArray(s);
}
function Xf(s) {
  return z.endsWith(s, "[]") ? s.slice(0, -2) : s;
}
function Kc(s, t, e) {
  return s ? s.concat(t).map(function(c, u) {
    return c = Xf(c), !e && u ? "[" + c + "]" : c;
  }).join(e ? "." : "") : t;
}
function kg(s) {
  return z.isArray(s) && !s.some(qs);
}
const Pg = z.toFlatObject(z, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function vi(s, t, e) {
  if (!z.isObject(s))
    throw new TypeError("target must be an object");
  t = t || new FormData(), e = z.toFlatObject(e, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(C, E) {
    return !z.isUndefined(E[C]);
  });
  const a = e.metaTokens, c = e.visitor || S, u = e.dots, f = e.indexes, v = (e.Blob || typeof Blob < "u" && Blob) && z.isSpecCompliantForm(t);
  if (!z.isFunction(c))
    throw new TypeError("visitor must be a function");
  function y(O) {
    if (O === null) return "";
    if (z.isDate(O))
      return O.toISOString();
    if (!v && z.isBlob(O))
      throw new be("Blob is not supported. Use a Buffer instead.");
    return z.isArrayBuffer(O) || z.isTypedArray(O) ? v && typeof Blob == "function" ? new Blob([O]) : Buffer.from(O) : O;
  }
  function S(O, C, E) {
    let L = O;
    if (O && !E && typeof O == "object") {
      if (z.endsWith(C, "{}"))
        C = a ? C : C.slice(0, -2), O = JSON.stringify(O);
      else if (z.isArray(O) && kg(O) || (z.isFileList(O) || z.endsWith(C, "[]")) && (L = z.toArray(O)))
        return C = Xf(C), L.forEach(function(T, F) {
          !(z.isUndefined(T) || T === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            f === !0 ? Kc([C], F, u) : f === null ? C : C + "[]",
            y(T)
          );
        }), !1;
    }
    return qs(O) ? !0 : (t.append(Kc(E, C, u), y(O)), !1);
  }
  const w = [], b = Object.assign(Pg, {
    defaultVisitor: S,
    convertValue: y,
    isVisitable: qs
  });
  function P(O, C) {
    if (!z.isUndefined(O)) {
      if (w.indexOf(O) !== -1)
        throw Error("Circular reference detected in " + C.join("."));
      w.push(O), z.forEach(O, function(L, I) {
        (!(z.isUndefined(L) || L === null) && c.call(
          t,
          L,
          z.isString(I) ? I.trim() : I,
          C,
          b
        )) === !0 && P(L, C ? C.concat(I) : [I]);
      }), w.pop();
    }
  }
  if (!z.isObject(s))
    throw new TypeError("data must be an object");
  return P(s), t;
}
function Zc(s) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(s).replace(/[!'()~]|%20|%00/g, function(a) {
    return t[a];
  });
}
function Ta(s, t) {
  this._pairs = [], s && vi(s, this, t);
}
const Yf = Ta.prototype;
Yf.append = function(t, e) {
  this._pairs.push([t, e]);
};
Yf.toString = function(t) {
  const e = t ? function(a) {
    return t.call(this, a, Zc);
  } : Zc;
  return this._pairs.map(function(c) {
    return e(c[0]) + "=" + e(c[1]);
  }, "").join("&");
};
function _g(s) {
  return encodeURIComponent(s).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Gf(s, t, e) {
  if (!t)
    return s;
  const a = e && e.encode || _g;
  z.isFunction(e) && (e = {
    serialize: e
  });
  const c = e && e.serialize;
  let u;
  if (c ? u = c(t, e) : u = z.isURLSearchParams(t) ? t.toString() : new Ta(t, e).toString(a), u) {
    const f = s.indexOf("#");
    f !== -1 && (s = s.slice(0, f)), s += (s.indexOf("?") === -1 ? "?" : "&") + u;
  }
  return s;
}
class Jc {
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
  use(t, e, a) {
    return this.handlers.push({
      fulfilled: t,
      rejected: e,
      synchronous: a ? a.synchronous : !1,
      runWhen: a ? a.runWhen : null
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
    z.forEach(this.handlers, function(a) {
      a !== null && t(a);
    });
  }
}
const Kf = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Ig = typeof URLSearchParams < "u" ? URLSearchParams : Ta, Ng = typeof FormData < "u" ? FormData : null, jg = typeof Blob < "u" ? Blob : null, Lg = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Ig,
    FormData: Ng,
    Blob: jg
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Oa = typeof window < "u" && typeof document < "u", Ws = typeof navigator == "object" && navigator || void 0, Mg = Oa && (!Ws || ["ReactNative", "NativeScript", "NS"].indexOf(Ws.product) < 0), Dg = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Bg = Oa && window.location.href || "http://localhost", Fg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Oa,
  hasStandardBrowserEnv: Mg,
  hasStandardBrowserWebWorkerEnv: Dg,
  navigator: Ws,
  origin: Bg
}, Symbol.toStringTag, { value: "Module" })), ft = {
  ...Fg,
  ...Lg
};
function zg(s, t) {
  return vi(s, new ft.classes.URLSearchParams(), Object.assign({
    visitor: function(e, a, c, u) {
      return ft.isNode && z.isBuffer(e) ? (this.append(a, e.toString("base64")), !1) : u.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Vg(s) {
  return z.matchAll(/\w+|\[(\w*)]/g, s).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Hg(s) {
  const t = {}, e = Object.keys(s);
  let a;
  const c = e.length;
  let u;
  for (a = 0; a < c; a++)
    u = e[a], t[u] = s[u];
  return t;
}
function Zf(s) {
  function t(e, a, c, u) {
    let f = e[u++];
    if (f === "__proto__") return !0;
    const x = Number.isFinite(+f), v = u >= e.length;
    return f = !f && z.isArray(c) ? c.length : f, v ? (z.hasOwnProp(c, f) ? c[f] = [c[f], a] : c[f] = a, !x) : ((!c[f] || !z.isObject(c[f])) && (c[f] = []), t(e, a, c[f], u) && z.isArray(c[f]) && (c[f] = Hg(c[f])), !x);
  }
  if (z.isFormData(s) && z.isFunction(s.entries)) {
    const e = {};
    return z.forEachEntry(s, (a, c) => {
      t(Vg(a), c, e, 0);
    }), e;
  }
  return null;
}
function Ug(s, t, e) {
  if (z.isString(s))
    try {
      return (t || JSON.parse)(s), z.trim(s);
    } catch (a) {
      if (a.name !== "SyntaxError")
        throw a;
    }
  return (e || JSON.stringify)(s);
}
const Fr = {
  transitional: Kf,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, e) {
    const a = e.getContentType() || "", c = a.indexOf("application/json") > -1, u = z.isObject(t);
    if (u && z.isHTMLForm(t) && (t = new FormData(t)), z.isFormData(t))
      return c ? JSON.stringify(Zf(t)) : t;
    if (z.isArrayBuffer(t) || z.isBuffer(t) || z.isStream(t) || z.isFile(t) || z.isBlob(t) || z.isReadableStream(t))
      return t;
    if (z.isArrayBufferView(t))
      return t.buffer;
    if (z.isURLSearchParams(t))
      return e.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let x;
    if (u) {
      if (a.indexOf("application/x-www-form-urlencoded") > -1)
        return zg(t, this.formSerializer).toString();
      if ((x = z.isFileList(t)) || a.indexOf("multipart/form-data") > -1) {
        const v = this.env && this.env.FormData;
        return vi(
          x ? { "files[]": t } : t,
          v && new v(),
          this.formSerializer
        );
      }
    }
    return u || c ? (e.setContentType("application/json", !1), Ug(t)) : t;
  }],
  transformResponse: [function(t) {
    const e = this.transitional || Fr.transitional, a = e && e.forcedJSONParsing, c = this.responseType === "json";
    if (z.isResponse(t) || z.isReadableStream(t))
      return t;
    if (t && z.isString(t) && (a && !this.responseType || c)) {
      const f = !(e && e.silentJSONParsing) && c;
      try {
        return JSON.parse(t);
      } catch (x) {
        if (f)
          throw x.name === "SyntaxError" ? be.from(x, be.ERR_BAD_RESPONSE, this, null, this.response) : x;
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
    FormData: ft.classes.FormData,
    Blob: ft.classes.Blob
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
z.forEach(["delete", "get", "head", "post", "put", "patch"], (s) => {
  Fr.headers[s] = {};
});
const qg = z.toObjectSet([
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
]), Wg = (s) => {
  const t = {};
  let e, a, c;
  return s && s.split(`
`).forEach(function(f) {
    c = f.indexOf(":"), e = f.substring(0, c).trim().toLowerCase(), a = f.substring(c + 1).trim(), !(!e || t[e] && qg[e]) && (e === "set-cookie" ? t[e] ? t[e].push(a) : t[e] = [a] : t[e] = t[e] ? t[e] + ", " + a : a);
  }), t;
}, Qc = Symbol("internals");
function br(s) {
  return s && String(s).trim().toLowerCase();
}
function Eo(s) {
  return s === !1 || s == null ? s : z.isArray(s) ? s.map(Eo) : String(s);
}
function $g(s) {
  const t = /* @__PURE__ */ Object.create(null), e = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let a;
  for (; a = e.exec(s); )
    t[a[1]] = a[2];
  return t;
}
const Xg = (s) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(s.trim());
function qi(s, t, e, a, c) {
  if (z.isFunction(a))
    return a.call(this, t, e);
  if (c && (t = e), !!z.isString(t)) {
    if (z.isString(a))
      return t.indexOf(a) !== -1;
    if (z.isRegExp(a))
      return a.test(t);
  }
}
function Yg(s) {
  return s.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, e, a) => e.toUpperCase() + a);
}
function Gg(s, t) {
  const e = z.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((a) => {
    Object.defineProperty(s, a + e, {
      value: function(c, u, f) {
        return this[a].call(this, t, c, u, f);
      },
      configurable: !0
    });
  });
}
let Et = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, e, a) {
    const c = this;
    function u(x, v, y) {
      const S = br(v);
      if (!S)
        throw new Error("header name must be a non-empty string");
      const w = z.findKey(c, S);
      (!w || c[w] === void 0 || y === !0 || y === void 0 && c[w] !== !1) && (c[w || v] = Eo(x));
    }
    const f = (x, v) => z.forEach(x, (y, S) => u(y, S, v));
    if (z.isPlainObject(t) || t instanceof this.constructor)
      f(t, e);
    else if (z.isString(t) && (t = t.trim()) && !Xg(t))
      f(Wg(t), e);
    else if (z.isObject(t) && z.isIterable(t)) {
      let x = {}, v, y;
      for (const S of t) {
        if (!z.isArray(S))
          throw TypeError("Object iterator must return a key-value pair");
        x[y = S[0]] = (v = x[y]) ? z.isArray(v) ? [...v, S[1]] : [v, S[1]] : S[1];
      }
      f(x, e);
    } else
      t != null && u(e, t, a);
    return this;
  }
  get(t, e) {
    if (t = br(t), t) {
      const a = z.findKey(this, t);
      if (a) {
        const c = this[a];
        if (!e)
          return c;
        if (e === !0)
          return $g(c);
        if (z.isFunction(e))
          return e.call(this, c, a);
        if (z.isRegExp(e))
          return e.exec(c);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, e) {
    if (t = br(t), t) {
      const a = z.findKey(this, t);
      return !!(a && this[a] !== void 0 && (!e || qi(this, this[a], a, e)));
    }
    return !1;
  }
  delete(t, e) {
    const a = this;
    let c = !1;
    function u(f) {
      if (f = br(f), f) {
        const x = z.findKey(a, f);
        x && (!e || qi(a, a[x], x, e)) && (delete a[x], c = !0);
      }
    }
    return z.isArray(t) ? t.forEach(u) : u(t), c;
  }
  clear(t) {
    const e = Object.keys(this);
    let a = e.length, c = !1;
    for (; a--; ) {
      const u = e[a];
      (!t || qi(this, this[u], u, t, !0)) && (delete this[u], c = !0);
    }
    return c;
  }
  normalize(t) {
    const e = this, a = {};
    return z.forEach(this, (c, u) => {
      const f = z.findKey(a, u);
      if (f) {
        e[f] = Eo(c), delete e[u];
        return;
      }
      const x = t ? Yg(u) : String(u).trim();
      x !== u && delete e[u], e[x] = Eo(c), a[x] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const e = /* @__PURE__ */ Object.create(null);
    return z.forEach(this, (a, c) => {
      a != null && a !== !1 && (e[c] = t && z.isArray(a) ? a.join(", ") : a);
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
    const a = new this(t);
    return e.forEach((c) => a.set(c)), a;
  }
  static accessor(t) {
    const a = (this[Qc] = this[Qc] = {
      accessors: {}
    }).accessors, c = this.prototype;
    function u(f) {
      const x = br(f);
      a[x] || (Gg(c, f), a[x] = !0);
    }
    return z.isArray(t) ? t.forEach(u) : u(t), this;
  }
};
Et.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
z.reduceDescriptors(Et.prototype, ({ value: s }, t) => {
  let e = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => s,
    set(a) {
      this[e] = a;
    }
  };
});
z.freezeMethods(Et);
function Wi(s, t) {
  const e = this || Fr, a = t || e, c = Et.from(a.headers);
  let u = a.data;
  return z.forEach(s, function(x) {
    u = x.call(e, u, c.normalize(), t ? t.status : void 0);
  }), c.normalize(), u;
}
function Jf(s) {
  return !!(s && s.__CANCEL__);
}
function dr(s, t, e) {
  be.call(this, s ?? "canceled", be.ERR_CANCELED, t, e), this.name = "CanceledError";
}
z.inherits(dr, be, {
  __CANCEL__: !0
});
function Qf(s, t, e) {
  const a = e.config.validateStatus;
  !e.status || !a || a(e.status) ? s(e) : t(new be(
    "Request failed with status code " + e.status,
    [be.ERR_BAD_REQUEST, be.ERR_BAD_RESPONSE][Math.floor(e.status / 100) - 4],
    e.config,
    e.request,
    e
  ));
}
function Kg(s) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(s);
  return t && t[1] || "";
}
function Zg(s, t) {
  s = s || 10;
  const e = new Array(s), a = new Array(s);
  let c = 0, u = 0, f;
  return t = t !== void 0 ? t : 1e3, function(v) {
    const y = Date.now(), S = a[u];
    f || (f = y), e[c] = v, a[c] = y;
    let w = u, b = 0;
    for (; w !== c; )
      b += e[w++], w = w % s;
    if (c = (c + 1) % s, c === u && (u = (u + 1) % s), y - f < t)
      return;
    const P = S && y - S;
    return P ? Math.round(b * 1e3 / P) : void 0;
  };
}
function Jg(s, t) {
  let e = 0, a = 1e3 / t, c, u;
  const f = (y, S = Date.now()) => {
    e = S, c = null, u && (clearTimeout(u), u = null), s.apply(null, y);
  };
  return [(...y) => {
    const S = Date.now(), w = S - e;
    w >= a ? f(y, S) : (c = y, u || (u = setTimeout(() => {
      u = null, f(c);
    }, a - w)));
  }, () => c && f(c)];
}
const Do = (s, t, e = 3) => {
  let a = 0;
  const c = Zg(50, 250);
  return Jg((u) => {
    const f = u.loaded, x = u.lengthComputable ? u.total : void 0, v = f - a, y = c(v), S = f <= x;
    a = f;
    const w = {
      loaded: f,
      total: x,
      progress: x ? f / x : void 0,
      bytes: v,
      rate: y || void 0,
      estimated: y && x && S ? (x - f) / y : void 0,
      event: u,
      lengthComputable: x != null,
      [t ? "download" : "upload"]: !0
    };
    s(w);
  }, e);
}, el = (s, t) => {
  const e = s != null;
  return [(a) => t[0]({
    lengthComputable: e,
    total: s,
    loaded: a
  }), t[1]];
}, tl = (s) => (...t) => z.asap(() => s(...t)), Qg = ft.hasStandardBrowserEnv ? /* @__PURE__ */ ((s, t) => (e) => (e = new URL(e, ft.origin), s.protocol === e.protocol && s.host === e.host && (t || s.port === e.port)))(
  new URL(ft.origin),
  ft.navigator && /(msie|trident)/i.test(ft.navigator.userAgent)
) : () => !0, ev = ft.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(s, t, e, a, c, u) {
      const f = [s + "=" + encodeURIComponent(t)];
      z.isNumber(e) && f.push("expires=" + new Date(e).toGMTString()), z.isString(a) && f.push("path=" + a), z.isString(c) && f.push("domain=" + c), u === !0 && f.push("secure"), document.cookie = f.join("; ");
    },
    read(s) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + s + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(s) {
      this.write(s, "", Date.now() - 864e5);
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
function tv(s) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(s);
}
function nv(s, t) {
  return t ? s.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : s;
}
function ed(s, t, e) {
  let a = !tv(t);
  return s && (a || e == !1) ? nv(s, t) : t;
}
const nl = (s) => s instanceof Et ? { ...s } : s;
function Bn(s, t) {
  t = t || {};
  const e = {};
  function a(y, S, w, b) {
    return z.isPlainObject(y) && z.isPlainObject(S) ? z.merge.call({ caseless: b }, y, S) : z.isPlainObject(S) ? z.merge({}, S) : z.isArray(S) ? S.slice() : S;
  }
  function c(y, S, w, b) {
    if (z.isUndefined(S)) {
      if (!z.isUndefined(y))
        return a(void 0, y, w, b);
    } else return a(y, S, w, b);
  }
  function u(y, S) {
    if (!z.isUndefined(S))
      return a(void 0, S);
  }
  function f(y, S) {
    if (z.isUndefined(S)) {
      if (!z.isUndefined(y))
        return a(void 0, y);
    } else return a(void 0, S);
  }
  function x(y, S, w) {
    if (w in t)
      return a(y, S);
    if (w in s)
      return a(void 0, y);
  }
  const v = {
    url: u,
    method: u,
    data: u,
    baseURL: f,
    transformRequest: f,
    transformResponse: f,
    paramsSerializer: f,
    timeout: f,
    timeoutMessage: f,
    withCredentials: f,
    withXSRFToken: f,
    adapter: f,
    responseType: f,
    xsrfCookieName: f,
    xsrfHeaderName: f,
    onUploadProgress: f,
    onDownloadProgress: f,
    decompress: f,
    maxContentLength: f,
    maxBodyLength: f,
    beforeRedirect: f,
    transport: f,
    httpAgent: f,
    httpsAgent: f,
    cancelToken: f,
    socketPath: f,
    responseEncoding: f,
    validateStatus: x,
    headers: (y, S, w) => c(nl(y), nl(S), w, !0)
  };
  return z.forEach(Object.keys(Object.assign({}, s, t)), function(S) {
    const w = v[S] || c, b = w(s[S], t[S], S);
    z.isUndefined(b) && w !== x || (e[S] = b);
  }), e;
}
const td = (s) => {
  const t = Bn({}, s);
  let { data: e, withXSRFToken: a, xsrfHeaderName: c, xsrfCookieName: u, headers: f, auth: x } = t;
  t.headers = f = Et.from(f), t.url = Gf(ed(t.baseURL, t.url, t.allowAbsoluteUrls), s.params, s.paramsSerializer), x && f.set(
    "Authorization",
    "Basic " + btoa((x.username || "") + ":" + (x.password ? unescape(encodeURIComponent(x.password)) : ""))
  );
  let v;
  if (z.isFormData(e)) {
    if (ft.hasStandardBrowserEnv || ft.hasStandardBrowserWebWorkerEnv)
      f.setContentType(void 0);
    else if ((v = f.getContentType()) !== !1) {
      const [y, ...S] = v ? v.split(";").map((w) => w.trim()).filter(Boolean) : [];
      f.setContentType([y || "multipart/form-data", ...S].join("; "));
    }
  }
  if (ft.hasStandardBrowserEnv && (a && z.isFunction(a) && (a = a(t)), a || a !== !1 && Qg(t.url))) {
    const y = c && u && ev.read(u);
    y && f.set(c, y);
  }
  return t;
}, rv = typeof XMLHttpRequest < "u", ov = rv && function(s) {
  return new Promise(function(e, a) {
    const c = td(s);
    let u = c.data;
    const f = Et.from(c.headers).normalize();
    let { responseType: x, onUploadProgress: v, onDownloadProgress: y } = c, S, w, b, P, O;
    function C() {
      P && P(), O && O(), c.cancelToken && c.cancelToken.unsubscribe(S), c.signal && c.signal.removeEventListener("abort", S);
    }
    let E = new XMLHttpRequest();
    E.open(c.method.toUpperCase(), c.url, !0), E.timeout = c.timeout;
    function L() {
      if (!E)
        return;
      const T = Et.from(
        "getAllResponseHeaders" in E && E.getAllResponseHeaders()
      ), _ = {
        data: !x || x === "text" || x === "json" ? E.responseText : E.response,
        status: E.status,
        statusText: E.statusText,
        headers: T,
        config: s,
        request: E
      };
      Qf(function(M) {
        e(M), C();
      }, function(M) {
        a(M), C();
      }, _), E = null;
    }
    "onloadend" in E ? E.onloadend = L : E.onreadystatechange = function() {
      !E || E.readyState !== 4 || E.status === 0 && !(E.responseURL && E.responseURL.indexOf("file:") === 0) || setTimeout(L);
    }, E.onabort = function() {
      E && (a(new be("Request aborted", be.ECONNABORTED, s, E)), E = null);
    }, E.onerror = function() {
      a(new be("Network Error", be.ERR_NETWORK, s, E)), E = null;
    }, E.ontimeout = function() {
      let F = c.timeout ? "timeout of " + c.timeout + "ms exceeded" : "timeout exceeded";
      const _ = c.transitional || Kf;
      c.timeoutErrorMessage && (F = c.timeoutErrorMessage), a(new be(
        F,
        _.clarifyTimeoutError ? be.ETIMEDOUT : be.ECONNABORTED,
        s,
        E
      )), E = null;
    }, u === void 0 && f.setContentType(null), "setRequestHeader" in E && z.forEach(f.toJSON(), function(F, _) {
      E.setRequestHeader(_, F);
    }), z.isUndefined(c.withCredentials) || (E.withCredentials = !!c.withCredentials), x && x !== "json" && (E.responseType = c.responseType), y && ([b, O] = Do(y, !0), E.addEventListener("progress", b)), v && E.upload && ([w, P] = Do(v), E.upload.addEventListener("progress", w), E.upload.addEventListener("loadend", P)), (c.cancelToken || c.signal) && (S = (T) => {
      E && (a(!T || T.type ? new dr(null, s, E) : T), E.abort(), E = null);
    }, c.cancelToken && c.cancelToken.subscribe(S), c.signal && (c.signal.aborted ? S() : c.signal.addEventListener("abort", S)));
    const I = Kg(c.url);
    if (I && ft.protocols.indexOf(I) === -1) {
      a(new be("Unsupported protocol " + I + ":", be.ERR_BAD_REQUEST, s));
      return;
    }
    E.send(u || null);
  });
}, iv = (s, t) => {
  const { length: e } = s = s ? s.filter(Boolean) : [];
  if (t || e) {
    let a = new AbortController(), c;
    const u = function(y) {
      if (!c) {
        c = !0, x();
        const S = y instanceof Error ? y : this.reason;
        a.abort(S instanceof be ? S : new dr(S instanceof Error ? S.message : S));
      }
    };
    let f = t && setTimeout(() => {
      f = null, u(new be(`timeout ${t} of ms exceeded`, be.ETIMEDOUT));
    }, t);
    const x = () => {
      s && (f && clearTimeout(f), f = null, s.forEach((y) => {
        y.unsubscribe ? y.unsubscribe(u) : y.removeEventListener("abort", u);
      }), s = null);
    };
    s.forEach((y) => y.addEventListener("abort", u));
    const { signal: v } = a;
    return v.unsubscribe = () => z.asap(x), v;
  }
}, sv = function* (s, t) {
  let e = s.byteLength;
  if (e < t) {
    yield s;
    return;
  }
  let a = 0, c;
  for (; a < e; )
    c = a + t, yield s.slice(a, c), a = c;
}, av = async function* (s, t) {
  for await (const e of cv(s))
    yield* sv(e, t);
}, cv = async function* (s) {
  if (s[Symbol.asyncIterator]) {
    yield* s;
    return;
  }
  const t = s.getReader();
  try {
    for (; ; ) {
      const { done: e, value: a } = await t.read();
      if (e)
        break;
      yield a;
    }
  } finally {
    await t.cancel();
  }
}, rl = (s, t, e, a) => {
  const c = av(s, t);
  let u = 0, f, x = (v) => {
    f || (f = !0, a && a(v));
  };
  return new ReadableStream({
    async pull(v) {
      try {
        const { done: y, value: S } = await c.next();
        if (y) {
          x(), v.close();
          return;
        }
        let w = S.byteLength;
        if (e) {
          let b = u += w;
          e(b);
        }
        v.enqueue(new Uint8Array(S));
      } catch (y) {
        throw x(y), y;
      }
    },
    cancel(v) {
      return x(v), c.return();
    }
  }, {
    highWaterMark: 2
  });
}, yi = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", nd = yi && typeof ReadableStream == "function", lv = yi && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((s) => (t) => s.encode(t))(new TextEncoder()) : async (s) => new Uint8Array(await new Response(s).arrayBuffer())), rd = (s, ...t) => {
  try {
    return !!s(...t);
  } catch {
    return !1;
  }
}, uv = nd && rd(() => {
  let s = !1;
  const t = new Request(ft.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return s = !0, "half";
    }
  }).headers.has("Content-Type");
  return s && !t;
}), ol = 64 * 1024, $s = nd && rd(() => z.isReadableStream(new Response("").body)), Bo = {
  stream: $s && ((s) => s.body)
};
yi && ((s) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Bo[t] && (Bo[t] = z.isFunction(s[t]) ? (e) => e[t]() : (e, a) => {
      throw new be(`Response type '${t}' is not supported`, be.ERR_NOT_SUPPORT, a);
    });
  });
})(new Response());
const fv = async (s) => {
  if (s == null)
    return 0;
  if (z.isBlob(s))
    return s.size;
  if (z.isSpecCompliantForm(s))
    return (await new Request(ft.origin, {
      method: "POST",
      body: s
    }).arrayBuffer()).byteLength;
  if (z.isArrayBufferView(s) || z.isArrayBuffer(s))
    return s.byteLength;
  if (z.isURLSearchParams(s) && (s = s + ""), z.isString(s))
    return (await lv(s)).byteLength;
}, dv = async (s, t) => {
  const e = z.toFiniteNumber(s.getContentLength());
  return e ?? fv(t);
}, hv = yi && (async (s) => {
  let {
    url: t,
    method: e,
    data: a,
    signal: c,
    cancelToken: u,
    timeout: f,
    onDownloadProgress: x,
    onUploadProgress: v,
    responseType: y,
    headers: S,
    withCredentials: w = "same-origin",
    fetchOptions: b
  } = td(s);
  y = y ? (y + "").toLowerCase() : "text";
  let P = iv([c, u && u.toAbortSignal()], f), O;
  const C = P && P.unsubscribe && (() => {
    P.unsubscribe();
  });
  let E;
  try {
    if (v && uv && e !== "get" && e !== "head" && (E = await dv(S, a)) !== 0) {
      let _ = new Request(t, {
        method: "POST",
        body: a,
        duplex: "half"
      }), V;
      if (z.isFormData(a) && (V = _.headers.get("content-type")) && S.setContentType(V), _.body) {
        const [M, Y] = el(
          E,
          Do(tl(v))
        );
        a = rl(_.body, ol, M, Y);
      }
    }
    z.isString(w) || (w = w ? "include" : "omit");
    const L = "credentials" in Request.prototype;
    O = new Request(t, {
      ...b,
      signal: P,
      method: e.toUpperCase(),
      headers: S.normalize().toJSON(),
      body: a,
      duplex: "half",
      credentials: L ? w : void 0
    });
    let I = await fetch(O);
    const T = $s && (y === "stream" || y === "response");
    if ($s && (x || T && C)) {
      const _ = {};
      ["status", "statusText", "headers"].forEach((J) => {
        _[J] = I[J];
      });
      const V = z.toFiniteNumber(I.headers.get("content-length")), [M, Y] = x && el(
        V,
        Do(tl(x), !0)
      ) || [];
      I = new Response(
        rl(I.body, ol, M, () => {
          Y && Y(), C && C();
        }),
        _
      );
    }
    y = y || "text";
    let F = await Bo[z.findKey(Bo, y) || "text"](I, s);
    return !T && C && C(), await new Promise((_, V) => {
      Qf(_, V, {
        data: F,
        headers: Et.from(I.headers),
        status: I.status,
        statusText: I.statusText,
        config: s,
        request: O
      });
    });
  } catch (L) {
    throw C && C(), L && L.name === "TypeError" && /Load failed|fetch/i.test(L.message) ? Object.assign(
      new be("Network Error", be.ERR_NETWORK, s, O),
      {
        cause: L.cause || L
      }
    ) : be.from(L, L && L.code, s, O);
  }
}), Xs = {
  http: Rg,
  xhr: ov,
  fetch: hv
};
z.forEach(Xs, (s, t) => {
  if (s) {
    try {
      Object.defineProperty(s, "name", { value: t });
    } catch {
    }
    Object.defineProperty(s, "adapterName", { value: t });
  }
});
const il = (s) => `- ${s}`, pv = (s) => z.isFunction(s) || s === null || s === !1, od = {
  getAdapter: (s) => {
    s = z.isArray(s) ? s : [s];
    const { length: t } = s;
    let e, a;
    const c = {};
    for (let u = 0; u < t; u++) {
      e = s[u];
      let f;
      if (a = e, !pv(e) && (a = Xs[(f = String(e)).toLowerCase()], a === void 0))
        throw new be(`Unknown adapter '${f}'`);
      if (a)
        break;
      c[f || "#" + u] = a;
    }
    if (!a) {
      const u = Object.entries(c).map(
        ([x, v]) => `adapter ${x} ` + (v === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let f = t ? u.length > 1 ? `since :
` + u.map(il).join(`
`) : " " + il(u[0]) : "as no adapter specified";
      throw new be(
        "There is no suitable adapter to dispatch the request " + f,
        "ERR_NOT_SUPPORT"
      );
    }
    return a;
  },
  adapters: Xs
};
function $i(s) {
  if (s.cancelToken && s.cancelToken.throwIfRequested(), s.signal && s.signal.aborted)
    throw new dr(null, s);
}
function sl(s) {
  return $i(s), s.headers = Et.from(s.headers), s.data = Wi.call(
    s,
    s.transformRequest
  ), ["post", "put", "patch"].indexOf(s.method) !== -1 && s.headers.setContentType("application/x-www-form-urlencoded", !1), od.getAdapter(s.adapter || Fr.adapter)(s).then(function(a) {
    return $i(s), a.data = Wi.call(
      s,
      s.transformResponse,
      a
    ), a.headers = Et.from(a.headers), a;
  }, function(a) {
    return Jf(a) || ($i(s), a && a.response && (a.response.data = Wi.call(
      s,
      s.transformResponse,
      a.response
    ), a.response.headers = Et.from(a.response.headers))), Promise.reject(a);
  });
}
const id = "1.9.0", bi = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((s, t) => {
  bi[s] = function(a) {
    return typeof a === s || "a" + (t < 1 ? "n " : " ") + s;
  };
});
const al = {};
bi.transitional = function(t, e, a) {
  function c(u, f) {
    return "[Axios v" + id + "] Transitional option '" + u + "'" + f + (a ? ". " + a : "");
  }
  return (u, f, x) => {
    if (t === !1)
      throw new be(
        c(f, " has been removed" + (e ? " in " + e : "")),
        be.ERR_DEPRECATED
      );
    return e && !al[f] && (al[f] = !0, console.warn(
      c(
        f,
        " has been deprecated since v" + e + " and will be removed in the near future"
      )
    )), t ? t(u, f, x) : !0;
  };
};
bi.spelling = function(t) {
  return (e, a) => (console.warn(`${a} is likely a misspelling of ${t}`), !0);
};
function xv(s, t, e) {
  if (typeof s != "object")
    throw new be("options must be an object", be.ERR_BAD_OPTION_VALUE);
  const a = Object.keys(s);
  let c = a.length;
  for (; c-- > 0; ) {
    const u = a[c], f = t[u];
    if (f) {
      const x = s[u], v = x === void 0 || f(x, u, s);
      if (v !== !0)
        throw new be("option " + u + " must be " + v, be.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (e !== !0)
      throw new be("Unknown option " + u, be.ERR_BAD_OPTION);
  }
}
const Co = {
  assertOptions: xv,
  validators: bi
}, $t = Co.validators;
let Mn = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Jc(),
      response: new Jc()
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
    } catch (a) {
      if (a instanceof Error) {
        let c = {};
        Error.captureStackTrace ? Error.captureStackTrace(c) : c = new Error();
        const u = c.stack ? c.stack.replace(/^.+\n/, "") : "";
        try {
          a.stack ? u && !String(a.stack).endsWith(u.replace(/^.+\n.+\n/, "")) && (a.stack += `
` + u) : a.stack = u;
        } catch {
        }
      }
      throw a;
    }
  }
  _request(t, e) {
    typeof t == "string" ? (e = e || {}, e.url = t) : e = t || {}, e = Bn(this.defaults, e);
    const { transitional: a, paramsSerializer: c, headers: u } = e;
    a !== void 0 && Co.assertOptions(a, {
      silentJSONParsing: $t.transitional($t.boolean),
      forcedJSONParsing: $t.transitional($t.boolean),
      clarifyTimeoutError: $t.transitional($t.boolean)
    }, !1), c != null && (z.isFunction(c) ? e.paramsSerializer = {
      serialize: c
    } : Co.assertOptions(c, {
      encode: $t.function,
      serialize: $t.function
    }, !0)), e.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? e.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : e.allowAbsoluteUrls = !0), Co.assertOptions(e, {
      baseUrl: $t.spelling("baseURL"),
      withXsrfToken: $t.spelling("withXSRFToken")
    }, !0), e.method = (e.method || this.defaults.method || "get").toLowerCase();
    let f = u && z.merge(
      u.common,
      u[e.method]
    );
    u && z.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (O) => {
        delete u[O];
      }
    ), e.headers = Et.concat(f, u);
    const x = [];
    let v = !0;
    this.interceptors.request.forEach(function(C) {
      typeof C.runWhen == "function" && C.runWhen(e) === !1 || (v = v && C.synchronous, x.unshift(C.fulfilled, C.rejected));
    });
    const y = [];
    this.interceptors.response.forEach(function(C) {
      y.push(C.fulfilled, C.rejected);
    });
    let S, w = 0, b;
    if (!v) {
      const O = [sl.bind(this), void 0];
      for (O.unshift.apply(O, x), O.push.apply(O, y), b = O.length, S = Promise.resolve(e); w < b; )
        S = S.then(O[w++], O[w++]);
      return S;
    }
    b = x.length;
    let P = e;
    for (w = 0; w < b; ) {
      const O = x[w++], C = x[w++];
      try {
        P = O(P);
      } catch (E) {
        C.call(this, E);
        break;
      }
    }
    try {
      S = sl.call(this, P);
    } catch (O) {
      return Promise.reject(O);
    }
    for (w = 0, b = y.length; w < b; )
      S = S.then(y[w++], y[w++]);
    return S;
  }
  getUri(t) {
    t = Bn(this.defaults, t);
    const e = ed(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Gf(e, t.params, t.paramsSerializer);
  }
};
z.forEach(["delete", "get", "head", "options"], function(t) {
  Mn.prototype[t] = function(e, a) {
    return this.request(Bn(a || {}, {
      method: t,
      url: e,
      data: (a || {}).data
    }));
  };
});
z.forEach(["post", "put", "patch"], function(t) {
  function e(a) {
    return function(u, f, x) {
      return this.request(Bn(x || {}, {
        method: t,
        headers: a ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: u,
        data: f
      }));
    };
  }
  Mn.prototype[t] = e(), Mn.prototype[t + "Form"] = e(!0);
});
let mv = class sd {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let e;
    this.promise = new Promise(function(u) {
      e = u;
    });
    const a = this;
    this.promise.then((c) => {
      if (!a._listeners) return;
      let u = a._listeners.length;
      for (; u-- > 0; )
        a._listeners[u](c);
      a._listeners = null;
    }), this.promise.then = (c) => {
      let u;
      const f = new Promise((x) => {
        a.subscribe(x), u = x;
      }).then(c);
      return f.cancel = function() {
        a.unsubscribe(u);
      }, f;
    }, t(function(u, f, x) {
      a.reason || (a.reason = new dr(u, f, x), e(a.reason));
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
    const t = new AbortController(), e = (a) => {
      t.abort(a);
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
      token: new sd(function(c) {
        t = c;
      }),
      cancel: t
    };
  }
};
function gv(s) {
  return function(e) {
    return s.apply(null, e);
  };
}
function vv(s) {
  return z.isObject(s) && s.isAxiosError === !0;
}
const Ys = {
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
Object.entries(Ys).forEach(([s, t]) => {
  Ys[t] = s;
});
function ad(s) {
  const t = new Mn(s), e = Df(Mn.prototype.request, t);
  return z.extend(e, Mn.prototype, t, { allOwnKeys: !0 }), z.extend(e, t, null, { allOwnKeys: !0 }), e.create = function(c) {
    return ad(Bn(s, c));
  }, e;
}
const Ye = ad(Fr);
Ye.Axios = Mn;
Ye.CanceledError = dr;
Ye.CancelToken = mv;
Ye.isCancel = Jf;
Ye.VERSION = id;
Ye.toFormData = vi;
Ye.AxiosError = be;
Ye.Cancel = Ye.CanceledError;
Ye.all = function(t) {
  return Promise.all(t);
};
Ye.spread = gv;
Ye.isAxiosError = vv;
Ye.mergeConfig = Bn;
Ye.AxiosHeaders = Et;
Ye.formToJSON = (s) => Zf(z.isHTMLForm(s) ? new FormData(s) : s);
Ye.getAdapter = od.getAdapter;
Ye.HttpStatusCode = Ys;
Ye.default = Ye;
const {
  Axios: Hv,
  AxiosError: Uv,
  CanceledError: qv,
  isCancel: Wv,
  CancelToken: $v,
  VERSION: Xv,
  all: Yv,
  Cancel: Gv,
  isAxiosError: Kv,
  spread: Zv,
  toFormData: Jv,
  AxiosHeaders: Qv,
  HttpStatusCode: ey,
  formToJSON: ty,
  getAdapter: ny,
  mergeConfig: ry
} = Ye, an = zo;
(function(s, t) {
  const e = zo, a = s();
  for (; ; )
    try {
      if (parseInt(e(483)) / 1 + parseInt(e(469)) / 2 + -parseInt(e(465)) / 3 * (-parseInt(e(472)) / 4) + -parseInt(e(468)) / 5 * (parseInt(e(487)) / 6) + -parseInt(e(471)) / 7 * (-parseInt(e(462)) / 8) + parseInt(e(478)) / 9 * (parseInt(e(459)) / 10) + parseInt(e(461)) / 11 * (-parseInt(e(477)) / 12) === t) break;
      a.push(a.shift());
    } catch {
      a.push(a.shift());
    }
})(Fo, 601494);
an(466) + an(479);
Ye[an(460)][an(473) + an(470)] = !0;
const yv = async (s) => {
  var e, a, c, u;
  const t = an;
  try {
    return (await Ye(s))[t(488)];
  } catch (f) {
    throw ((a = (e = f[t(480)]) == null ? void 0 : e[t(488)]) == null ? void 0 : a[t(464)]) || ((u = (c = f[t(480)]) == null ? void 0 : c[t(488)]) == null ? void 0 : u[t(463)]) || f[t(464)];
  }
}, bv = {};
bv[an(476) + "pe"] = an(475) + an(481);
function Fo() {
  const s = ["459715HdJmat", "261806aegAbf", "tials", "3633zhDwdB", "55584BTLrBR", "withCreden", "DELETE", "applicatio", "Content-Ty", "12bbCLOO", "144QWkjpj", "ient", "response", "n/json", "params", "20847lXJNJb", "PATCH", "POST", "GET", "24TJbxiw", "data", "622940OQhCnW", "defaults", "6952451PTQtTm", "6552oOncMm", "error", "message", "6StEugf", "/api/v1/cl", "PUT"];
  return Fo = function() {
    return s;
  }, Fo();
}
function zo(s, t) {
  const e = Fo();
  return zo = function(a, c) {
    return a = a - 459, e[a];
  }, zo(s, t);
}
const ze = Ho;
(function(s, t) {
  const e = Ho, a = s();
  for (; ; )
    try {
      if (-parseInt(e(444)) / 1 + parseInt(e(446)) / 2 + parseInt(e(441)) / 3 * (parseInt(e(458)) / 4) + -parseInt(e(440)) / 5 * (-parseInt(e(447)) / 6) + parseInt(e(460)) / 7 + parseInt(e(457)) / 8 + -parseInt(e(449)) / 9 === t) break;
      a.push(a.shift());
    } catch {
      a.push(a.shift());
    }
})(Vo, 734246);
const Cn = {};
Cn[ze(453)] = ze(468) + "E", Cn[ze(455)] = ze(462), Cn[ze(443)] = ze(463) + "N", Cn[ze(467)] = ze(468) + "E", Cn[ze(466)] = ze(462), Cn[ze(452)] = ze(463) + "N";
const Gt = Cn;
function Vo() {
  const s = ["536385COGrFN", "enuHide", "2899736JzvOFy", "54KzhRWP", "moveEvent", "25497018snWNvT", "keyup", "keyBoardEv", "touchstart", "mousemove", "assistiveM", "mouseup", "wheelEvent", "9627880gZAdoD", "11316JbaVlX", "fullscreen", "2310686qIWcVm", "ent", "ACTION_UP", "ACTION_DOW", "keydown", "shortcutEv", "touchend", "touchmove", "ACTION_MOV", "105245unqMSs", "987XuFgqV", "Event", "mousedown"];
  return Vo = function() {
    return s;
  }, Vo();
}
const Gs = {};
Gs[ze(450)] = ze(462), Gs[ze(464)] = ze(463) + "N";
function Ho(s, t) {
  const e = Vo();
  return Ho = function(a, c) {
    return a = a - 440, e[a];
  }, Ho(s, t);
}
const Sv = Gs, wv = ze(448), Ev = ze(456), Cv = ze(451) + ze(461), cd = ze(454) + ze(445), Ks = ze(465) + ze(461), Av = ze(459) + ze(442);
(function(s, t) {
  const e = kn, a = s();
  for (; ; )
    try {
      if (parseInt(e(356)) / 1 * (-parseInt(e(370)) / 2) + -parseInt(e(392)) / 3 + -parseInt(e(306)) / 4 + -parseInt(e(344)) / 5 * (parseInt(e(397)) / 6) + parseInt(e(321)) / 7 * (-parseInt(e(396)) / 8) + parseInt(e(309)) / 9 + -parseInt(e(378)) / 10 * (-parseInt(e(372)) / 11) === t) break;
      a.push(a.shift());
    } catch {
      a.push(a.shift());
    }
})(Uo, 628134);
function Uo() {
  const s = ["vnsad", "includes", "arrowup", "offsetHeig", "touchEvent", "185945qhSImz", "EduEK", "type", "tListener", "touchend", "focus", "YaWno", "capslock", "enter", "repeat", "nztNv", "voeXp", "696918bYZzhm", "HJfIp", "EXT", "tab", "delta", "isDown", "PASTE_TEXT", "readText", "ODE", "toUpperCas", "getBoundin", "AyGvD", "ajwzP", "TKanH", "2UxFuCg", "current", "11lqjSzv", "shift", "mouse", "pgyBb", "vLYDs", "removeEven", "15916360LdaFHS", "clipboard", "ctrlKey", "action", "arrowright", "mousemove", "gClientRec", "clientY", "wheel", "touchmove", "height", "forEach", "deltaY", "typeKey", "581154mTThAQ", "arrowdown", "WzYkT", "arrowleft", "297048fUjIrY", "12jjZJdn", "control", "width", "pageX", "mousedown", "oDLrr", "backspace", "UEQnW", "pageY", "touch", "tSpeQ", "passive", "left", "930060AWPrda", "top", "LrJfj", "5113854qyrRfo", "keydown", "KEYBOARD_C", "preventDef", "stener", "shiftKey", "mouseup", "wheelEvent", "touchstart", "clientX", "KEYBOARD_T", "taUHY", "63hZXRBU", "addEventLi", "offsetWidt", "showMenu", "ault", "lmYjd", "DZauA", "key", "COPY_TEXT", "CaTyU", "GJdQe", "meta_state", "qEOnF", "keyAction", "DoznN", "keyEvent", "sepAC", "toLowerCas"];
  return Uo = function() {
    return s;
  }, Uo();
}
function kn(s, t) {
  const e = Uo();
  return kn = function(a, c) {
    return a = a - 296, e[a];
  }, kn(s, t);
}
const Tv = ({ isMobile: s, assistive: t, onImgEvent: e, canvasContent: a, imageRef: c }) => {
  const [u, f] = yt(!1), x = (w) => {
    const b = kn;
    if (b(333) !== b(333)) s(!1);
    else {
      if (w[b(312) + b(325)](), !c[b(371)]) return;
      const P = c[b(371)];
      let O = Gt[w[b(346)]];
      if (t[b(361)] == !0 || t[b(324)] == !0)
        if (b(345) !== b(303)) {
          O == Gt[b(315)] && (b(357) === b(350) ? (w[b(391)] = b(311) + b(364), e[b(328)] = 20) : e(cd, {}));
          return;
        } else w[b(391)] = b(311) + b(364), e[b(328)] = 21;
      if (O == Gt[b(297)] && f(!0), O != Gt[b(297)] && u == !1) return;
      O == Gt[b(315)] && (b(368) !== b(335) ? f(!1) : (w[b(391)] = b(311) + b(364), e[b(328)] = 22));
      let C, E;
      const L = P[b(366) + b(384) + "t"]();
      if (w[b(346)][b(340)](b(302))) {
        const { touches: T, changedTouches: F } = w, _ = T[0] ?? F[0];
        C = _[b(296)] - L[b(305)], E = _[b(301)] - L[b(307)];
      } else w[b(346)][b(340)](b(374)) && (C = w[b(318)] - L[b(305)], E = w[b(385)] - L[b(307)]);
      const I = {};
      I[b(381)] = b(343), I[b(334)] = O, I.x = C, I.y = E, I[b(399)] = L[b(399)], I[b(388)] = L[b(388)], e(wv, I), P[b(349)]();
    }
  }, v = (w) => {
    const b = kn;
    if (b(355) === b(355)) {
      if (w[b(312) + b(325)](), !c[b(371)]) return;
      const P = c[b(371)], O = w[b(390)], C = P[b(366) + b(384) + "t"](), E = {};
      E[b(381)] = b(316), E[b(399)] = P[b(323) + "h"], E[b(388)] = P[b(342) + "ht"], E.x = w[b(318)] - C[b(305)], E.y = w[b(385)] - C[b(307)], E[b(360)] = O, e(Ev, E), P[b(349)]();
    } else f[b(322) + b(313)](b(386), x, v), y[b(322) + b(313)](b(310), S), [b(383), b(297), b(315)][b(389)]((P) => {
      const O = b;
      q[O(322) + O(313)](P, r);
    });
  }, y = async (w) => {
    const b = kn;
    if (w[b(312) + b(325)](), !c[b(371)]) return;
    const P = c[b(371)], O = Sv[w[b(346)]], C = w[b(328)][b(338) + "e"]();
    if (((T) => {
      const F = b;
      if (F(376) !== F(376)) s(!0);
      else
        return [F(398), F(373), F(351)][F(340)](T);
    })(C) == !0) return;
    const L = async () => {
      const T = b, F = {};
      F[T(381)] = T(336), F[T(334)] = O, F[T(391)] = T(319) + T(358), F[T(328)] = w[T(328)], F[T(353)] = 0, F[T(332)] = 0;
      const _ = F;
      if (w[T(380)] == !0)
        if (C == "c") {
          if (T(330) !== T(330)) return;
          _[T(391)] = T(329);
        } else
          C == "a" ? (_[T(391)] = T(311) + T(364), _[T(332)] = 4096, _[T(328)] = 29) : C == "v" && (T(369) === T(326) ? (w[T(391)] = T(311) + T(364), e[T(328)] = 19) : (_[T(391)] = T(362), _[T(328)] = await navigator[T(379)][T(363)]()));
      else if (C == T(341)) T(394) !== T(327) ? (_[T(391)] = T(311) + T(364), _[T(328)] = 19) : e[T(322) + T(313)](a, c);
      else if (C == T(393)) _[T(391)] = T(311) + T(364), _[T(328)] = 20;
      else if (C == T(395)) _[T(391)] = T(311) + T(364), _[T(328)] = 21;
      else if (C == T(382)) _[T(391)] = T(311) + T(364), _[T(328)] = 22;
      else if (C == T(299))
        if (T(375) !== T(320)) _[T(391)] = T(311) + T(364), _[T(328)] = 67;
        else return;
      else if (C == T(352)) _[T(391)] = T(311) + T(364), _[T(328)] = 66;
      else if (C == T(359))
        if (T(337) !== T(354)) _[T(391)] = T(311) + T(364), _[T(328)] = 61;
        else {
          const { touches: V, changedTouches: M } = c, Y = V[0] ?? M[0];
          u = Y[T(296)] - f[T(305)], x = Y[T(301)] - v[T(307)];
        }
      return _[T(346)] == T(319) + T(358) && (T(339) !== T(339) ? ([T(383), T(297), T(315), T(386), T(310)][T(389)]((V) => {
        const M = T;
        x[M(377) + M(347)](V, v);
      }), u[T(377) + T(347)](T(310), f)) : w[T(314)] == !0 && (_[T(328)] = _[T(328)][T(365) + "e"]())), _;
    }, I = await L();
    I && e(Cv, I), P[b(349)]();
  };
  bt(() => {
    const w = kn, b = c[w(371)];
    if (b) {
      const P = {};
      P[w(304)] = !1;
      const O = P;
      return s ? (b[w(322) + w(313)](w(317), x, O), b[w(322) + w(313)](w(387), x, O), b[w(322) + w(313)](w(348), x)) : (b[w(322) + w(313)](w(386), v, O), b[w(322) + w(313)](w(310), y), [w(383), w(297), w(315)][w(389)]((C) => {
        const E = w;
        E(367) !== E(367) ? (e[E(391)] = E(311) + E(364), a[E(332)] = 4096, c[E(328)] = 29) : b[E(322) + E(313)](C, x);
      })), () => {
        const C = w;
        C(308) !== C(308) ? (t[C(391)] = C(311) + C(364), e[C(328)] = 67) : b && (s ? C(300) === C(298) ? t(e, {}) : [C(317), C(387), C(348)][C(389)]((E) => {
          const L = C;
          b[L(377) + L(347)](E, x);
        }) : ([C(383), C(297), C(315), C(386), C(310)][C(389)]((E) => {
          const L = C;
          L(331) === L(331) && b[L(377) + L(347)](E, x);
        }), b[C(377) + C(347)](C(310), y)));
      };
    }
  }, [s, x, v, y]);
  const S = { ref: c, ...a };
  return ie.jsx(P0, S);
}, Ov = "data:image/png;base64,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", Si = qo;
(function(s, t) {
  const e = qo, a = s();
  for (; ; )
    try {
      if (-parseInt(e(305)) / 1 * (-parseInt(e(307)) / 2) + -parseInt(e(302)) / 3 + -parseInt(e(306)) / 4 * (parseInt(e(300)) / 5) + -parseInt(e(296)) / 6 * (-parseInt(e(299)) / 7) + -parseInt(e(297)) / 8 + parseInt(e(298)) / 9 + parseInt(e(303)) / 10 === t) break;
      a.push(a.shift());
    } catch {
      a.push(a.shift());
    }
})(Wo, 743587);
const Rv = zt[Si(301)]`
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
`;
function qo(s, t) {
  const e = Wo();
  return qo = function(a, c) {
    return a = a - 296, e[a];
  }, qo(s, t);
}
const nn = zt[Si(301)]`
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
function Wo() {
  const s = ["4779110OZdbWw", "img", "114732ibPpCN", "152StGcxU", "12CgYasg", "12ihAOWo", "7020536ININCa", "8256960rOAtqq", "508207NuonaB", "55965MeCEtS", "div", "547371bPJJVi"];
  return Wo = function() {
    return s;
  }, Wo();
}
const rn = zt.p`
  height: 5px;
  margin-top: 2px;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
`, kv = zt[Si(304)]`
  position: absolute;
  backdrop-filter: blur(46px);
  border-radius: 50%;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.723);
  top: 50%;
  right: 5%;
`, Pv = zt[Si(301)]`
  user-select: none;
  transition: opacity 0.6s ease;
  z-index: 3;
  opacity: 0.3;
`;
(function(s, t) {
  const e = nr, a = s();
  for (; ; )
    try {
      if (-parseInt(e(121)) / 1 * (-parseInt(e(115)) / 2) + -parseInt(e(152)) / 3 + parseInt(e(151)) / 4 + parseInt(e(143)) / 5 + parseInt(e(120)) / 6 + parseInt(e(153)) / 7 + -parseInt(e(142)) / 8 === t) break;
      a.push(a.shift());
    } catch {
      a.push(a.shift());
    }
})($o, 457412);
function $o() {
  const s = ["mozFullScr", "webkitExit", "querySelec", "mozCancelF", "13103400jYjhQh", "2756645rDjRCN", "reen", "Fullscreen", "yzKGH", "zbOvy", "ullscreen", "fullscreen", "eenElement", "3300444ttWere", "2271945Rxdkdv", "967953PmueuY", "enElement", "tor", "#screen_", "ZTVFa", "een", "38078Jtavgz", "Element", "FullScreen", "KSUUh", "FiCIa", "4829046jHfvIR", "28yfWEvR", "lscreen", "jXdbs", "msRequestF", "webkitFull", "exitFullsc", "screenElem", "webkitRequ", "requestFul", "mozRequest", "estFullscr", "oZIDh", "msExitFull", "ent", "msFullscre", "ullScreen", "screen"];
  return $o = function() {
    return s;
  }, $o();
}
function nr(s, t) {
  const e = $o();
  return nr = function(a, c) {
    return a = a - 115, e[a];
  }, nr(s, t);
}
const cl = () => {
  const s = nr;
  return document[s(149) + s(116)] || document[s(138) + s(150)] || document[s(125) + s(127) + s(134)] || document[s(135) + s(154)];
}, _v = (s) => {
  const t = nr, e = document[t(140) + t(155)](t(156) + s);
  if (e[t(129) + t(122)]) t(146) === t(146) ? e[t(129) + t(122)]() : e[t(124) + t(148)]();
  else if (e[t(130) + t(117)]) e[t(130) + t(117)]();
  else if (e[t(128) + t(131) + t(158)]) t(157) === t(157) ? e[t(128) + t(131) + t(158)]() : e[t(126) + t(144)]();
  else if (e[t(124) + t(148)])
    if (t(118) === t(118)) e[t(124) + t(148)]();
    else return g[t(149) + t(116)] || h[t(138) + t(150)] || i[t(125) + t(127) + t(134)] || j[t(135) + t(154)];
}, Iv = () => {
  const s = nr;
  document[s(126) + s(144)] ? s(119) === s(132) ? d[s(141) + s(136)]() : document[s(126) + s(144)]() : document[s(141) + s(136)] ? document[s(141) + s(136)]() : document[s(139) + s(145)] ? document[s(139) + s(145)]() : document[s(133) + s(137)] && (s(123) === s(147) ? d[s(139) + s(145)]() : document[s(133) + s(137)]());
};
(function(s, t) {
  const e = Xo, a = s();
  for (; ; )
    try {
      if (-parseInt(e(293)) / 1 + -parseInt(e(344)) / 2 * (-parseInt(e(404)) / 3) + parseInt(e(256)) / 4 + parseInt(e(189)) / 5 * (parseInt(e(243)) / 6) + parseInt(e(336)) / 7 + parseInt(e(381)) / 8 * (-parseInt(e(229)) / 9) + -parseInt(e(253)) / 10 === t) break;
      a.push(a.shift());
    } catch {
      a.push(a.shift());
    }
})(Yo, 841790);
function Xo(s, t) {
  const e = Yo();
  return Xo = function(a, c) {
    return a = a - 113, e[a];
  }, Xo(s, t);
}
function Yo() {
  const s = ["readText", "27.05A1 1 ", "l10.283 7.", "h4zm12-6h-", " 5.999-9S1", "-2-2-2zm-9", "fill", ".015.057-.", "v7h2zm5 14", "sZGvh", "H5v-5H3v7h", ".103.897 2", "2-2h-4V4h1", "M20.978 13", "8.347l-3.0", " 0 0 0-1 1", " 15H4V9z", "2 2h7c0 1.", "Home", "Paste", ".387 1.386", "2 2zm2 7v-", "circle", "Show ID", "1zm-1 16H5", "0 1-1V4a1 ", "3668147zzjpsF", "clientX", "03-.897-2-", "6a1 1 0 0 ", "4zm0 5h16v", "includes", "type", "9 21V3a1 1", "2vGTxdo", "s-.775-3.9", "stener", "47 3.999 7", "touch_", "path", "mozfullscr", "landscape", "10c-1.103 ", "getBoundin", ".w3.org/20", "PqDHd", "LWDHb", "m4.431 12.", "cRibs", "pageY", ".004 1.004", "10l.002 10", "touchstart", "59 15.016 ", "taskId", "mousemove", "get", "touchend", "4c0-1.103-", "017.082-.0", "M4 6h16v2H", "5.46 1.701", "rgba(255, ", "103.897 2 ", " 2v5H4V5h3", "move", "click", "zm0-6h-4V4", "clientY", "wzARa", "12%", "615304XsAsCb", "recents", "oEfaX", "-7v2h5z", "0 0-1.554-", "current", "addEventLi", "tListener", "qZzDQ", "v5h-5v2h7z", "-2-2-2zm-1", "left", "1 0 0 0-1 ", "S18.387 17", "isDown", "1.003 0 0 ", "7h7l.001 7", "00/svg", " 0 0 0-.57", "48 3.832a1", "jCnDC", "17-.056-.0", "33L12 5.86", "3641322ciNMUQ", "msfullscre", "paste", "gClientRec", "1v16a1 1 0", "assistive", "Back", "13%", "3px", "EHKsf", "H4c-1.103 ", "XlmlV", "7zm11-5h-2", "sync", "H13z", "ault", "TTfYX", "fullscreen", "-.769zm-8.", "H4zm16-6h-", "1.103 0-2 ", "7 16 3v2c2", "device_id", "max", "iifZo", "-.897 2-2V", "mouse", "Screen", "HOrNe", "Icon", "7a1 1 0 0 ", "touchmove", "data-id", "3 9a1.003 ", "width", "zM4 20V10h", "mouseup", "closest", "2 2h7c1.10", "6v6h2v-4h4", "pfeiW", "4v2h6zM8 2", "aQFRf", "M20 2H10c-", "6l3.612-4.", ".024l-14-1", "4v-4c0-1.1", "255, 255, ", "0 0 0 14 2", "69-.823l-1", "Copy", "M20 3H4a1 ", "20px", "QSGja", ".21a1 1 0 ", "volume", "menu_", "preventDef", "OCDdz", "M10 4H8v4H", "345-5.236 ", "focus", "6v2H4z", "DmoDq", "a1 1 0 0 0", "08 3.677L7", ".089-1.218", "shortcutEv", "tlnJZ", ".897-2-2-2", "div", "Hide ID", "shortcut", " 0 0 1 1h1", "3a.986.986", "children", "0h2v-6H4v2", "yzZqg", "vkBov", "0v10z", "touch", "screenchan", " 7H4c-1.10", "061-.016.0", ".225-1.1 2", "0a.999.999", "3c.033 0 .", "grab", "M5 5h5V3H3", "7 2-2V4c0-", " 2-2v-7c0-", "7-2-2-2h-3", "-1.052-3.3", "5396855HxKmSr", "0 0 24 24", "opacity", "V5h14v14z", "-2-5zM4 17", "0-2 .897-2", "right", "showMenu", " 0 0 0 1.0", "WzGdG", "svg", "set", "57-5.428 6", "removeEven", "-3.229 2-5", " 1 0 0 0 1", "back", "zIndex", ".897-2 2v4", "7 2-2v-4h4", "0 0 0 .38-", "mousedown", "change", "mkJay", "shortcutCo", "height", ".999-4.909", "clipboard", "4c-.025-.0", "copy", ".257 5.127", "assistive_", "v2h8V5h3v6", "eenchange", "-1.103-.89", "-1-1H8a1 1", "6zm0 4h6v2", "2 2h10c1.1", "m-2-4h2V3h", "027 1.027 ", "144dNaXVr", "Volume", "0 18V4h10l", "ezJXY", "3 0 2-.897", "Sync", "h-5c-1.103", "416 3.377 ", "-2 2v6c0 1", "27-1.547 5", "7.032 15 7", "pageX", "Recents", ".614 16 19", "6JahGaz", "03 0 2-.89", "a.995.995 ", "home", "CMIcI", ".832L6.697", "ent", "top", "WUGbk", "0 0-.396-1", "14808310tbEBaz", "c1.103 0 2", " 0 0 0-1.5", "6567600KMmjbx", "M6 12h6v2H", "11.75", ".116c.026-", "H6z", "M16 21c3.5", "h2.697l5.7", "passive", "0 0 1.645z", "8v12.264l-", " 2v16c0 1.", "2-.116C7.0", "M16 7v10c1", "1.048z", "forEach", " 0 0 0-.38", "674.31a1 1", "M16.75 2h-", "0 1.767.51", "action", "9.527 4.54", " 3.999 4.0", "target", "touch_clas", "0V4a1 1 0 ", "http://www", "now", "min", "93-.019a1.", "webkitfull", "822 13 9A1", "v2z", ".002 16H6.", "2-.082-.03", "75z", "getAttribu", " 2v10c0 1.", "905837OicImk", "h-2v6h6z", "2H4zm0 5h1", " 2v13c0 1.", "data", "4.445-2.96", "zwidn", "M20 11V5c0", "75.931l2 1", "0 0 0 .782", "3 0-2 .897", "1.103-.897", "enchange", "1 0 0 0-1-", "cursor", " 0-2 .897-", " 2 2zm0-8h"];
  return Yo = function() {
    return s;
  }, Yo();
}
const Nv = vl((s, t) => {
  const e = Xo, { displayId: a, isMobile: c, onSenData: u, status: f, imageRef: x, isShowDeviceId: v } = s, [y, S] = yt(0), [w, b] = yt(0), [P, O] = yt(null), [C, E] = yt(0), L = it(null), I = it(null), T = it(null), F = {};
  F[e(307)] = e(375), F[e(191)] = 0.3, F[e(206)] = 999;
  const [_, V] = yt(F), M = {};
  M[e(206)] = 999, M[e(214)] = "", M[e(130)] = e(411);
  const [Y, J] = yt(M), ce = {};
  ce[e(206)] = 1e3;
  const [Se, fe] = yt(ce), K = it(null), [oe, re] = yt(null), ge = it(null), he = ($) => {
    const R = e;
    if (R(299) !== R(413)) {
      if ($[R(153) + R(419)](), f[R(366)][R(196)] == !0) return;
      const Oe = Gt[$[R(342)]], ke = x[R(386)], Ee = T[R(386)], de = ke[R(353) + R(407) + "t"](), Fe = Ee[R(353) + R(407) + "t"](), Ie = 3;
      let Nt, Qe;
      const jt = de[R(130)] - Fe[R(130)], wn = de[R(214)] - Fe[R(214)];
      if ($[R(342)][R(341)](R(176))) {
        const { touches: Ge, changedTouches: ht } = $, lt = Ge[0] ?? ht[0];
        Nt = lt[R(240)], Qe = lt[R(359)];
      } else $[R(342)][R(341)](R(122)) && (R(159) !== R(124) ? (Nt = $[R(337)], Qe = $[R(378)]) : M());
      if (Oe == Gt[R(210)])
        if (R(138) !== R(138)) {
          const Ge = { ...te };
          Ge[R(191)] = le[R(366)][R(196)] ? 1 : 0, Ge(Ge);
        } else {
          f[R(200)]({ ...f[R(366)], isDown: !0 }), S(Nt - Fe[R(392)]), b(Qe - Fe[R(250)]);
          const Ge = {};
          Ge[R(191)] = 1, Ge[R(307)] = R(183);
          const ht = { ..._, ...Ge };
          V(ht), E(performance[R(282)]());
        }
      else if (Oe == Gt[R(365)])
        if (R(198) === R(198)) {
          if (f[R(366)][R(395)] == !1) return;
          let Ge = Nt - y - de[R(392)], ht = Qe - w - de[R(250)];
          Ge = Math[R(119)](Ie, Math[R(283)](Ge, jt) - Ie), ht = Math[R(119)](Ie, Math[R(283)](ht, wn) - Ie);
          const lt = {};
          lt[R(250)] = ht + "px", lt[R(392)] = Ge + "px";
          const qt = { ...Y, ...lt };
          J(qt);
          const pt = {};
          pt.x = Ge, pt.y = ht, ge[R(386)] = pt;
        } else te && (Re[R(386)] = U), ye();
      else if (Oe == Gt[R(132)])
        if (R(232) !== R(383)) {
          const Ge = performance[R(282)]() - C;
          if (P == Gt[R(210)] || Ge < 100) {
            const Ot = {};
            Ot[R(196)] = !0, Ot[R(395)] = !1, f[R(200)]({ ...f[R(366)], ...Ot });
          } else f[R(200)]({ ...f[R(366)], isDown: !1 });
          const ht = ge[R(386)].x > jt / 2 ? jt - Ie : Ie, lt = {};
          lt[R(392)] = ht + "px";
          const qt = { ...Y, ...lt };
          J(qt);
          const pt = {};
          pt[R(191)] = 0.3, pt[R(307)] = R(375);
          const fn = { ..._, ...pt };
          V(fn);
        } else $(ae);
      O(Oe), Ee[R(157)]();
    } else
      te() ? Z() : Re(U);
  }, xe = async ($) => {
    const R = e;
    $[R(153) + R(419)]();
    const Oe = $[R(278)][R(133)](R(166))[R(291) + "te"](R(128));
    if (Oe === R(113))
      if (R(251) === R(251))
        if (!cl()) R(358) === R(358) ? _v(a) : (Re[R(387) + R(346)](R(362), U, Z), B[R(387) + R(346)](R(127), H, N), X[R(387) + R(346)](R(367), Q));
        else if (R(389) === R(389)) Iv();
        else {
          const { touches: Ee, changedTouches: de } = ae, Fe = Ee[0] ?? de[0];
          te = Fe[R(240)], le = Fe[R(359)];
        }
      else {
        const ke = ct[R(282)]() - Ve;
        if (xt == Ct[R(210)] || ke < 100) {
          const Qe = {};
          Qe[R(196)] = !0, Qe[R(395)] = !1;
          const jt = { ...a[R(366)], ...Qe };
          t[R(200)](jt);
        } else {
          const Qe = { ...u[R(366)] };
          Qe[R(395)] = !1, c[R(200)](Qe);
        }
        const Ee = rt[R(386)].x > At / 2 ? gt - Jt : Qt, de = {};
        de[R(392)] = Ee + "px";
        const Fe = { ...en, ...de };
        un(Fe);
        const Ie = {};
        Ie[R(191)] = 0.3, Ie[R(307)] = R(375);
        const Nt = { ...s, ...Ie };
        tn(Nt);
      }
    else {
      const ke = {};
      ke[R(275)] = R(163) + R(249), ke[R(168)] = Oe, ke[R(297)] = "";
      const Ee = ke;
      Oe === R(406) && (R(415) === R(415) ? Ee[R(297)] = await navigator[R(216)][R(310)]() : $(ke)), Oe === R(218) && (Ee[R(364)] = R(213) + "py"), u(Ks, Ee);
    }
    f[R(200)]({ ...f[R(366)], showMenu: !1 }), I[R(386)][R(157)]();
  }, me = ($) => {
    const R = cl();
    u(Av, R);
  };
  bt(() => {
    const $ = e;
    if ($(136) !== $(136)) {
      const R = { ...N[$(366)] };
      R[$(395)] = !0, H[$(200)](R), X(Q - ee[$(392)]), ct(Ve - xt[$(250)]);
      const Oe = {};
      Oe[$(191)] = 1, Oe[$(307)] = $(183);
      const ke = { ...mt, ...Oe };
      Ct(ke), It(Ue[$(282)]());
    } else requestAnimationFrame(() => {
      const R = $;
      if (R(154) === R(154)) {
        const Oe = { ...Se };
        Oe[R(191)] = f[R(366)][R(196)] ? 1 : 0, fe(Oe);
      } else ae[R(202) + R(388)](te, le);
    });
  }, [f]), bt(() => {
    const $ = e, R = x[$(386)], Oe = [$(113) + $(211), $(285) + $(177) + "ge", $(350) + $(222), $(405) + $(305)];
    return R && Oe[$(270)]((ke) => {
      const Ee = $;
      if (Ee(149) === Ee(420)) {
        const de = {};
        de[Ee(206)] = 999, de[Ee(214)] = te[Ee(386)] == Ee(351) ? Ee(380) : null, de[Ee(130)] = le[Ee(386)] != Ee(351) ? Ee(380) : null, de[Ee(250)] = Ee(148), de[Ee(195)] = Ee(412), de(de);
      } else R[Ee(387) + Ee(346)](ke, me);
    }), () => {
      const ke = $;
      ke(212) === ke(212) ? R && R[ke(202) + ke(388)](ke(376), me) : ae[ke(387) + ke(346)](te, le);
    };
  }, []), bt(() => {
    const $ = e;
    if ($(319) !== $(355)) {
      const R = T[$(386)], Oe = I[$(386)];
      if (Oe && Oe[$(387) + $(346)]($(376), xe), R)
        if ($(164) !== $(164)) ae[$(202) + $(388)](te, le);
        else {
          const ke = {};
          ke[$(263)] = !1;
          const Ee = ke;
          return c ? (R[$(387) + $(346)]($(362), he, Ee), R[$(387) + $(346)]($(127), he, Ee), R[$(387) + $(346)]($(367), he)) : [$(365), $(210), $(132)][$(270)]((de) => {
            const Fe = $;
            R[Fe(387) + Fe(346)](de, he);
          }), () => {
            const de = $;
            if (Oe) {
              if (de(247) === de(174)) return;
              Oe[de(202) + de(388)](de(376), xe);
            }
            R && (c ? de(173) !== de(173) ? [de(362), de(127), de(367)][de(270)]((Fe) => {
              const Ie = de;
              te[Ie(202) + Ie(388)](Fe, le);
            }) : [de(362), de(127), de(367)][de(270)]((Fe) => {
              const Ie = de;
              R[Ie(202) + Ie(388)](Fe, he);
            }) : [de(365), de(210), de(132)][de(270)]((Fe) => {
              const Ie = de;
              Ie(120) !== Ie(120) ? ce[Ie(202) + Ie(388)](Ie(376), ke) : R[Ie(202) + Ie(388)](Fe, he);
            }));
          };
        }
    } else ae[$(270)]((R) => {
      const Oe = $;
      ve[Oe(387) + Oe(346)](R, ye);
    });
  }, [c, he]);
  const pe = () => {
    const $ = e;
    if ($(401) === $(401)) {
      const R = {};
      R[$(206)] = 999, R[$(214)] = K[$(386)] == $(351) ? $(380) : null, R[$(130)] = K[$(386)] != $(351) ? $(380) : null, R[$(250)] = $(148), R[$(195)] = $(412), J(R);
    } else ce[$(387) + $(346)]($(376), ae);
  };
  yl(t, () => ({ fixTouch: ($) => {
    const R = e;
    if ($)
      if (R(379) === R(379)) K[R(386)] = $;
      else {
        if (Ct[R(366)][R(395)] == !1) return;
        let Oe = Oe - ke - Ue[R(392)], ke = Be - rt - At[R(250)];
        Oe = gt[R(119)](Jt, Qt[R(283)](Oe, un) - en), ke = tn[R(119)](s, t[R(283)](ke, a) - c);
        const Ee = {};
        Ee[R(250)] = ke + "px", Ee[R(392)] = Oe + "px";
        const de = { ...f, ...Ee };
        u(de);
        const Fe = {};
        Fe.x = Oe, Fe.y = ke, x[R(386)] = Fe;
      }
    pe();
  }, setFullscreen: ($) => {
    const R = e;
    R(356) !== R(356) ? M[R(364)] = R(213) + "py" : re($);
  } }));
  const ae = {};
  ae[e(316)] = e(372) + e(143) + "1)";
  const te = {};
  te.d = oe ? e(155) + e(137) + e(172) + e(313) + e(135) + e(377) + e(294) : e(184) + e(318) + e(320) + e(416) + e(390) + e(227) + e(384);
  const le = {};
  le[e(171)] = e(123);
  const ve = {};
  ve[e(316)] = e(372) + e(143) + "1)";
  const ye = {};
  ye.d = e(139) + e(116) + e(207) + e(414) + e(194) + e(292) + e(373) + e(226) + e(244) + e(208) + e(254) + e(121) + e(368) + e(165) + e(131) + e(361) + e(115) + e(142) + e(338) + e(322) + e(175);
  const Re = {};
  Re.d = e(257) + e(225) + e(260);
  const U = {};
  U[e(171)] = e(146);
  const Z = {};
  Z[e(316)] = e(372) + e(143) + "1)";
  const B = {};
  B.d = e(300) + e(223) + e(187) + e(160) + e(224) + e(325) + e(414) + e(194) + e(296) + e(373) + e(327) + e(373) + e(134) + e(233) + e(186) + e(304) + e(315) + e(374) + e(221) + e(235) + e(308) + e(331) + e(397) + e(418);
  const H = {};
  H[e(171)] = e(329);
  const N = {};
  N[e(316)] = e(372) + e(143) + "1)";
  const X = {};
  X.d = e(273) + e(352) + e(194) + e(266) + e(373) + e(226) + e(244) + e(185) + e(304) + e(391) + e(231) + e(288) + e(290);
  const Q = {};
  Q.cx = e(258), Q.cy = "18", Q.r = "1";
  const ee = {};
  ee[e(171)] = e(v ? 167 : 333);
  const ct = {};
  ct[e(316)] = e(372) + e(143) + "1)";
  const Ve = {};
  Ve.d = e(261) + e(238) + e(215) + e(314) + e(276) + e(117) + e(330) + e(277) + e(347) + e(394) + e(242) + e(287);
  const xt = {};
  xt.d = e(268) + e(180) + e(203) + e(345) + e(193) + e(262) + e(400) + e(360) + e(197) + e(311) + e(144) + e(280) + e(385) + e(248) + e(178) + e(303) + e(237) + e(321) + e(309) + e(182) + e(179) + e(284) + e(228) + e(209) + e(259) + e(317) + e(369) + e(403) + e(265) + e(298) + e(217) + e(402) + e(289) + e(170) + e(271) + e(267) + e(363) + e(239) + e(326);
  const Ct = {};
  Ct[e(171)] = e(230);
  const mt = {};
  mt[e(316)] = e(372) + e(143) + "1)";
  const It = {};
  It.d = e(323) + e(150) + e(252) + e(141) + e(181) + e(255) + e(301) + e(126) + e(274) + e(140) + e(236) + e(371) + e(188) + e(201) + e(162) + e(245) + e(302) + e(114) + e(272) + e(399) + e(324) + e(161) + e(219) + e(312) + e(156) + e(269);
  const Ue = {};
  Ue[e(171)] = e(234);
  const Be = {};
  Be[e(316)] = e(372) + e(143) + "1)";
  const rt = {};
  rt.d = e(370) + e(340) + e(295) + e(158);
  const At = {};
  At[e(171)] = e(241);
  const gt = {};
  gt[e(316)] = e(372) + e(143) + "1)";
  const Jt = {};
  Jt.d = e(147) + e(393) + e(408) + e(169) + e(339) + e(335) + e(306) + e(334) + e(192);
  const Qt = {};
  Qt[e(171)] = e(328);
  const un = {};
  un[e(316)] = e(372) + e(143) + "1)";
  const en = {};
  en.d = e(357) + e(286) + e(204) + e(343) + e(255) + e(145) + e(129) + e(396) + e(264);
  const tn = {};
  return tn[e(171)] = e(410), ie.jsxs(ie.Fragment, { children: [f[e(366)][e(196)] ? ie.jsxs(Rv, { id: e(220) + e(152) + a, style: Se, ref: I, children: [ie.jsxs(nn, { "data-id": e(113), children: [ie.jsx(e(199), { xmlns: e(281) + e(354) + e(398), width: "28", height: "28", viewBox: e(190), style: ae, children: ie.jsx(e(349), te) }), ie.jsx(rn, le)] }), ie.jsxs(nn, { "data-id": e(218), children: [ie.jsxs(e(199), { xmlns: e(281) + e(354) + e(398), width: "28", height: "28", viewBox: e(190), style: ve, children: [ie.jsx(e(349), ye), ie.jsx(e(349), Re)] }), ie.jsx(rn, U)] }), ie.jsxs(nn, { "data-id": e(406), children: [ie.jsx(e(199), { xmlns: e(281) + e(354) + e(398), width: "28", height: "28", viewBox: e(190), style: Z, children: ie.jsx(e(349), B) }), ie.jsx(rn, H)] }), ie.jsxs(nn, { "data-id": e(118), children: [ie.jsxs(e(199), { xmlns: e(281) + e(354) + e(398), width: "28", height: "28", viewBox: e(190), style: N, children: [ie.jsx(e(349), X), ie.jsx(e(332), Q)] }), ie.jsx(rn, ee)] }), ie.jsxs(nn, { "data-id": e(151), children: [ie.jsxs(e(199), { xmlns: e(281) + e(354) + e(398), width: "25", height: "25", viewBox: e(190), style: ct, children: [ie.jsx(e(349), Ve), ie.jsx(e(349), xt)] }), ie.jsx(rn, Ct)] }), ie.jsxs(nn, { "data-id": e(417), children: [ie.jsx(e(199), { xmlns: e(281) + e(354) + e(398), width: "28", height: "28", viewBox: e(190), style: mt, children: ie.jsx(e(349), It) }), ie.jsx(rn, Ue)] }), ie.jsxs(nn, { "data-id": e(382), children: [ie.jsx(e(199), { xmlns: e(281) + e(354) + e(398), width: "28", height: "28", viewBox: e(190), style: Be, children: ie.jsx(e(349), rt) }), ie.jsx(rn, At)] }), ie.jsxs(nn, { "data-id": e(246), children: [ie.jsx(e(199), { xmlns: e(281) + e(354) + e(398), width: "28", height: "28", viewBox: e(190), style: gt, children: ie.jsx(e(349), Jt) }), ie.jsx(rn, Qt)] }), ie.jsxs(nn, { "data-id": e(205), children: [ie.jsx(e(199), { xmlns: e(281) + e(354) + e(398), width: "28", height: "28", viewBox: e(190), style: un, children: ie.jsx(e(349), en) }), ie.jsx(rn, tn)] })] }) : null, ie.jsx(Pv, { id: e(220) + e(279) + "s_" + a, className: e(409), ref: L, style: _, children: ie.jsx(kv, { style: Y, src: Ov, className: e(409), id: e(220) + e(348) + a, alt: e(125), ref: T, draggable: !1 }) })] });
}), Ke = rr;
function rr(s, t) {
  const e = Go();
  return rr = function(a, c) {
    return a = a - 286, e[a];
  }, rr(s, t);
}
(function(s, t) {
  const e = rr, a = s();
  for (; ; )
    try {
      if (parseInt(e(306)) / 1 * (parseInt(e(316)) / 2) + -parseInt(e(344)) / 3 + -parseInt(e(331)) / 4 * (parseInt(e(293)) / 5) + parseInt(e(308)) / 6 + -parseInt(e(288)) / 7 * (parseInt(e(307)) / 8) + parseInt(e(352)) / 9 + parseInt(e(304)) / 10 === t) break;
      a.push(a.shift());
    } catch {
      a.push(a.shift());
    }
})(Go, 707908);
var ll, ul, fl, dl, hl, pl, xl, ml, gl;
gl = Ke(348) + Ke(335), ml = Ke(290) + "th", xl = Ke(339) + Ke(314), pl = Ke(312), hl = Ke(350) + "ta", dl = Ke(311) + "er", fl = Ke(356), ul = Ke(332) + Ke(351), ll = Ke(291);
class jv {
  constructor(t, e, a, c) {
    Wt(this, gl, (t) => {
      const e = Ke;
      if (t)
        if (e(302) !== e(310)) {
          const a = window[e(334) + "t"] + 10, c = this[e(290) + "th"](null, this[e(326)][e(357)], this[e(326)][e(328)], a, a);
          this[e(357)] = c[e(357)], this[e(328)] = c[e(328)];
        } else {
          const a = h instanceof i ? j : new k(l);
          this[e(325)] = a;
        }
      else e(349) === e(319) ? (k = l / m * n, o = p / q * r) : (this[e(357)] = this[e(326)][e(357)], this[e(328)] = this[e(326)][e(328)]);
    });
    Wt(this, ml, (t, e, a, c, u) => {
      const f = Ke;
      let x;
      return t && c > this[f(315)] && a > e && (u = this[f(315)]), u && (x = u / e * a, x > c && (u = c / a * e, x = c / e * e)), { width: Math[f(321)](u), height: Math[f(321)](x) };
    });
    Wt(this, xl, (t) => {
      const e = Ke;
      this[e(346) + "n"] = t, this[e(289)] && screen[e(346) + "n"][e(299)](t);
    });
    Wt(this, pl, (t, e) => {
      var x;
      const a = Ke, c = this[a(289)] == !0 ? window[a(334) + "t"] - 12 : window[a(334) + "t"] - 50, u = this[a(290) + "th"](!0, t, e, c, c);
      this[a(357)] = u[a(357)], this[a(328)] = u[a(328)], !this[a(326)] && ((x = this[a(317) + "ct"]) == null || x.call(this, !0));
      const f = {};
      f[a(357)] = u[a(357)], f[a(328)] = u[a(328)], this[a(326)] = f;
    });
    Wt(this, hl, (t) => {
      const e = Ke, a = t instanceof Uint8Array ? t : new Uint8Array(t);
      this[e(325)] = a;
    });
    Wt(this, dl, () => {
      const t = Ke, e = new VideoDecoder({ output: async (c) => {
        var x;
        const u = rr, f = await createImageBitmap(c);
        (!this[u(357)] || !this[u(328)]) && (u(287) !== u(287) ? e = this[u(315)] : this[u(312)](c[u(292)], c[u(301) + "t"])), this[u(354)][u(320)](0, 0, this[u(357)], this[u(328)]), this[u(346) + "n"] == u(313) ? (this[u(341)][u(357)] = this[u(328)], this[u(341)][u(328)] = this[u(357)], this[u(354)][u(340)](0, this[u(357)]), this[u(354)][u(347)](Math.PI / 2), this[u(354)][u(330)](-1, -1), this[u(354)][u(294)](f, 0, 0, this[u(357)], this[u(328)])) : u(298) !== u(298) ? (x = this[u(317) + "ct"]) == null || x.call(this, !0) : (this[u(341)][u(357)] = this[u(357)], this[u(341)][u(328)] = this[u(328)], this[u(354)][u(294)](f, 0, 0, this[u(357)], this[u(328)])), f[u(309)](), c[u(309)]();
      }, error: (c) => console[t(342)](t(358) + t(296), c) }), a = {};
      return a[t(323)] = t(305) + "E", a[t(355) + t(362)] = t(322) + t(297), a[t(353) + t(295)] = !0, e[t(336)](a), e;
    });
    Wt(this, fl, (t) => {
      const e = Ke;
      for (let a = 0; a <= t[e(327)] - 4; a++)
        if (e(286) !== e(345)) {
          if (t[a] === 0 && t[a + 1] === 0 && t[a + 2] === 0 && t[a + 3] === 1)
            return (t[a + 4] & 31) === 5;
        } else a = this[e(332) + e(351)](this[e(325)], this[e(343)]), this[e(359)] = !0;
      for (let a = 0; a <= t[e(327)] - 3; a++)
        if (e(360) === e(360)) {
          if (t[a] === 0 && t[a + 1] === 0 && t[a + 2] === 1)
            return (t[a + 3] & 31) === 5;
        } else {
          const c = d[e(334) + "t"] + 10, u = this[e(290) + "th"](null, this[e(326)][e(357)], this[e(326)][e(328)], c, c);
          this[e(357)] = u[e(357)], this[e(328)] = u[e(328)];
        }
      return !1;
    });
    Wt(this, ul, (t, e) => {
      const a = Ke, c = Array[a(329)](t)[a(338)](Array[a(329)](e));
      return new Uint8Array(c);
    });
    Wt(this, ll, (t) => {
      const e = Ke;
      if (!this[e(361)] || this[e(361)][e(300)] == e(309) || !this[e(325)]) return;
      let a = t instanceof Uint8Array ? t : new Uint8Array(t);
      const c = this[e(356)](a);
      c && (this[e(343)] = a), this[e(343)] && this[e(325)] && (!this[e(359)] && (a = this[e(332) + e(351)](this[e(325)], this[e(343)]), this[e(359)] = !0), this[e(361)][e(291)](new EncodedVideoChunk({ timestamp: performance[e(303)]() * 1e3, type: e(c ? 318 : 324), data: a })));
    });
    const u = rr;
    this[u(341)] = t, this[u(315)] = e, this[u(289)] = a, this[u(317) + "ct"] = c, this[u(354)] = t[u(333)]("2d"), this[u(361)] = this[u(311) + "er"](), this[u(325)] = null, this[u(343)] = null, this[u(359)] = null, this[u(357)] = null, this[u(328)] = null, this[u(326)] = null, this[u(346) + "n"] = u(337);
  }
}
function Go() {
  const s = ["rootSize", "length", "height", "from", "scale", "2479392HzubCr", "concatUint", "getContext", "innerHeigh", "een", "configure", "portrait", "concat", "setOrienta", "translate", "canvas", "error", "iframe", "339465EFuOqO", "HQhEr", "orientatio", "rotate", "setFullscr", "uHAnQ", "setVideoMe", "8Arrays", "9896625fQTcYl", "optimizeFo", "ctx", "hardwareAc", "isKeyFrame", "width", "Decoder er", "isPlay", "wfuzF", "decoder", "celeration", "KaODI", "DlgCX", "1674757qwhchW", "isMobile", "resizedWid", "decode", "codedWidth", "10upvAtg", "drawImage", "rLatency", "ror:", "dware", "oAfAW", "lock", "state", "codedHeigh", "BLCKH", "now", "6274170tGUSfo", "avc1.64001", "347usXsNj", "32pySoog", "311586sxsffe", "close", "tEbZT", "buildDecod", "autoResize", "landscape", "tion", "maxWidth", "7140ySLSLW", "setIsConne", "key", "HtvKT", "clearRect", "round", "prefer-har", "codec", "delta", "videoMeta"];
  return Go = function() {
    return s;
  }, Go();
}
(function(s, t) {
  const e = Pn, a = s();
  for (; ; )
    try {
      if (parseInt(e(179)) / 1 * (parseInt(e(197)) / 2) + parseInt(e(210)) / 3 + -parseInt(e(136)) / 4 * (parseInt(e(138)) / 5) + parseInt(e(176)) / 6 * (parseInt(e(212)) / 7) + -parseInt(e(165)) / 8 * (-parseInt(e(132)) / 9) + -parseInt(e(184)) / 10 * (parseInt(e(252)) / 11) + parseInt(e(264)) / 12 * (-parseInt(e(122)) / 13) === t) break;
      a.push(a.shift());
    } catch {
      a.push(a.shift());
    }
})(Ko, 587957);
function Pn(s, t) {
  const e = Ko();
  return Pn = function(a, c) {
    return a = a - 121, e[a];
  }, Pn(s, t);
}
function Ko() {
  const s = ["applicatio", "Element", "size", "LNyNf", "592383VMbIBF", "writeText", "Timeout wa", "setOrienta", "JTDFc", "get_video_", "headers", "XKkFD", "fixTouch", "value", "response", "middle", "1416AiSmhp", "qBYKX", "map", "74386XLQvvN", "userAgent", "COPY_TEXT", "stener", "height", "screen_", "XyYsZ", "timeout", "fullscreen", "ftlUE", "27wEPaTG", "false", "reconnecti", "tion", "164wGQVri", "test", "6635amhvpU", "VDHqt", "message", "FbXFT", "emit", "type_clien", "AMSym", "KvmZe", "connect", "addEventLi", "PWhtB", "Content-Ty", "bZHgu", "eenElement", "zrinY", "passwd", "AYEEK", "oajaZ", "tListener", "IZUgH", "screenElem", "join_room", "isMobile", "shortcut", "aOUva", "meta", "code", "2433896riGbFC", "iting for ", "ent", "aTyof", "center", "length", "connection", "url", "hEkWj", "showMenu", "setFullscr", "6SIGcyq", "delete", "screen_mai", "117487JusCEt", "mozFullScr", "sync", "action", "draggable", "100dKQkFx", "iframe", "children", "get", "de: ", "PxuPJ", "setVideoMe", "hNJpQ", "large", "change", "VrUMN", "IjXzr", "decode", "2hrFhOg", "onSyncIFra", "removeEven", "yiEuO", "SHjEd", "disconnect", "image_", "clipboard", "text", "AoMKh", "bIMNW", "orientatio", "enElement", "1186101xjammV", "data", "3013675JwBsHc", "post", " closed co", "shortcutEv", "webkitFull", "WvQvB", "PSPfE", "method", "control", "marginTop", "screen", "password", "connect_er", "BMFzY", "onScreenEv", "ERrAH", "status", "isDown", "JQzJO", "current", "lrtml", "msFullscre", "video_meta", "msg", "error", "een", "width", "info", "tabIndex", "type", "ror", "NhJUj", "taskId", "n/json", "device_id", "set"];
  return Ko = function() {
    return s;
  }, Ko();
}
const oy = vl((s, t) => {
  const e = Pn, { serve: a, dataDevice: c, maxWidth: u, showAssistive: f, showDeviceId: x, syncEvent: v, syncButton: y } = s, S = c[e(246)], w = /iPhone|iPad|iPod|Android/i[e(137)](navigator[e(123)]), b = e(220), P = it(null), O = it(null), C = it(null), [E, L] = yt(null), [I, T] = yt(null), F = {};
  F[e(174)] = !1, F[e(229)] = !1;
  const [_, V] = yt(F), [M, Y] = yt(null), J = e(203) + S, ce = e(127) + S, Se = e(178) + "n_" + S, fe = it(null), [K, oe] = yt([]), re = it(null), ge = it(/* @__PURE__ */ new Map());
  bt(() => {
    T(x);
  }, [x]);
  const he = (U) => {
    oe((Z) => [...Z, U]);
  }, xe = (U) => {
    const Z = e;
    P[Z(231)][Z(142)](Z(140), U), v == null || v(U);
  };
  yl(t, () => ({ api: async function(U, Z = 5e3) {
    return new Promise((B, H) => {
      const N = Pn;
      if (N(162) !== N(191)) {
        const X = setTimeout(() => {
          const Q = N;
          if (Q(144) === Q(150)) pe[Q(204)][Q(253)](ae[Q(205)]);
          else {
            ge[Q(231)][Q(177)](U[Q(244)]);
            const ee = {};
            ee[Q(182)] = U[Q(182)], ee[Q(244)] = U[Q(244)], ee[Q(228)] = !1, ee[Q(140)] = Q(254) + Q(166) + Q(262), H(ee);
          }
        }, Z);
        ge[N(231)][N(247)](U[N(244)], (Q) => {
          clearTimeout(X), B(Q);
        }), P[N(231)][N(142)](N(140), U);
      } else {
        const X = () => {
          const Q = N, ee = X[Q(130) + Q(249)] || w[Q(216) + Q(158) + Q(167)] || b[Q(180) + Q(151)] || P[Q(233) + Q(209)];
          O[Q(231)][Q(175) + Q(237)](!!ee), C[Q(231)][Q(175) + Q(237)](!!ee), E[Q(231)][Q(260)]();
        };
        return v[N(147) + N(125)](N(130) + N(193), X), () => {
          const Q = N;
          X[Q(199) + Q(156)](Q(130) + Q(193), X);
        };
      }
    });
  }, sync: function(U) {
    const Z = e;
    if (Z(168) !== Z(168)) {
      ae[Z(231)] = te;
      const B = {};
      B[Z(182)] = Z(226) + Z(167), le[Z(142)](Z(140), B);
    } else P[Z(231)][Z(142)](Z(140), U);
  } })), bt(() => {
    (async () => {
      const U = Pn;
      if (U(251) !== U(243)) try {
        const Z = {};
        Z[U(149) + "pe"] = U(248) + U(245);
        const B = {};
        B[U(246)] = c[U(246)], B[U(223)] = c[U(153)];
        const H = {};
        H[U(172)] = a, H[U(219)] = U(213), H[U(129)] = 1e4, H[U(258)] = Z, H[U(211)] = B;
        const N = H, X = await yv(N);
        L(X[U(211)]);
      } catch (Z) {
        const B = {};
        B[U(235)] = Z, B[U(241)] = U(236), he(B);
      }
      else pe(ae);
    })();
  }, []), bt(() => {
    const U = e;
    if (P[U(231)] || !E) return;
    const Z = {};
    Z[U(134) + "on"] = !1;
    const B = xo(E, Z);
    return B.on(U(146), () => {
      const H = U, N = {};
      N[H(182)] = H(146), N[H(143) + "t"] = b, N[H(246)] = c[H(246)], N[H(160)] = w, N[H(153)] = c[H(153)], B[H(142)](H(159), N);
    }), B.on(U(159), (H) => {
      const N = U;
      if (N(139) !== N(139))
        if (ve === ye) {
          const X = { ...u };
          X[N(174)] = !1, c(X);
        } else f(x);
      else if (H[N(228)] == !0) {
        P[N(231)] = B;
        const X = {};
        X[N(182)] = N(226) + N(167), B[N(142)](N(140), X);
      } else if (N(230) === N(230)) {
        const X = {};
        X[N(235)] = H[N(235)], X[N(241)] = N(236), he(X);
      } else pe && te[N(202)]();
    }), B.on(U(222), (H) => {
      const N = U;
      if (N(218) !== N(218)) {
        const X = {};
        X[N(235)] = ae, X[N(241)] = N(236), X(X);
      } else re[N(231)][N(196)](H);
    }), B.on(U(234), (H) => {
      const N = U;
      if (H) {
        if (N(154) === N(259)) {
          le[N(231)][N(177)](ve[N(244)]);
          const X = {};
          X[N(182)] = Re[N(182)], X[N(244)] = s[N(244)], X[N(228)] = !1, X[N(140)] = N(254) + N(166) + N(262), ye(X);
        } else if (re[N(231)][N(190) + "ta"](H), !re[N(231)][N(185)]) {
          const X = {};
          X[N(182)] = N(198) + "me", B[N(142)](N(140), X);
        }
      } else if (N(217) === N(148)) {
        const X = {};
        X[N(182)] = N(257) + N(163), Z[N(142)](N(234), X);
      } else {
        const X = {};
        X[N(182)] = N(257) + N(163), B[N(142)](N(234), X);
      }
    }), B.on(U(140), (H) => {
      const N = U;
      if ((H[N(182)] == N(124) || H[N(182)] == N(215) + N(167)) && H[N(205)][N(170)] > 0 ? N(207) === N(152) ? pe(ae) : navigator[N(204)][N(253)](H[N(205)]) : H[N(182)] == N(208) + "n" && (N(145) !== N(145) ? pe[N(231)][N(196)](ae) : (re[N(231)][N(255) + N(135)](H[N(261)]), fe[N(231)][N(260)](H[N(261)]))), H[N(244)]) {
        const X = ge[N(231)][N(187)](H[N(244)]);
        if (X)
          if (N(225) !== N(157)) X(H), ge[N(231)][N(177)](H[N(244)]);
          else {
            const Q = { ...ae };
            Q[N(174)] = !1, Q(Q);
          }
      }
    }), B.on(U(224) + U(242), (H) => {
      const N = U, X = {};
      X[N(235)] = H, X[N(241)] = N(236), he(X);
    }), B.on(U(202), (H) => {
      const N = U, X = {};
      X[N(235)] = N(171) + N(214) + N(188) + H[N(164)], X[N(241)] = N(239), he(X);
    }), () => {
      const H = U;
      H(265) === H(232) ? (te(le), ve[H(231)][H(177)](ye[H(244)])) : B && B[H(202)]();
    };
  }, [E]), bt(() => {
    const U = e;
    if (U(195) === U(227)) return new c((Z, B) => {
      const H = U, N = E(() => {
        const X = Pn;
        Z[X(231)][X(177)](B[X(244)]);
        const Q = {};
        Q[X(182)] = N[X(182)], Q[X(244)] = oe[X(244)], Q[X(228)] = !1, Q[X(140)] = X(254) + X(166) + X(262), B(Q);
      }, _);
      V[H(231)][H(247)](M[H(244)], (X) => {
        Z(N), Z(X);
      }), J[H(231)][H(142)](H(140), ce);
    });
    {
      const Z = C[U(231)];
      re[U(231)] = new jv(Z, u, w, Y);
    }
  }, []), bt(() => {
    const U = e;
    if (U(189) !== U(189)) pe(ae);
    else {
      const Z = () => {
        const B = U;
        if (B(155) === B(155)) {
          const H = document[B(130) + B(249)] || document[B(216) + B(158) + B(167)] || document[B(180) + B(151)] || document[B(233) + B(209)];
          re[B(231)][B(175) + B(237)](!!H), fe[B(231)][B(175) + B(237)](!!H), fe[B(231)][B(260)]();
        } else if (ve) {
          if (u[B(231)][B(190) + "ta"](f), !x[B(231)][B(185)]) {
            const H = {};
            H[B(182)] = B(198) + "me", y[B(142)](B(140), H);
          }
        } else {
          const H = {};
          H[B(182)] = B(257) + B(163), c[B(142)](B(234), H);
        }
      };
      return document[U(147) + U(125)](U(130) + U(193), Z), () => {
        const B = U;
        document[B(199) + B(156)](B(130) + B(193), Z);
      };
    }
  }, []);
  const me = {};
  me[e(186)] = c[e(246)];
  const pe = {};
  pe[e(250)] = e(192);
  const ae = {};
  ae[e(250)] = e(192);
  const te = {};
  te[e(250)] = e(192);
  const le = {};
  le[e(126)] = 0, le[e(238)] = 0;
  const ve = {};
  ve[e(187)] = _, ve[e(247)] = V;
  const ye = {};
  ye.id = J, ye[e(240)] = "0", ye[e(183)] = e(133);
  const Re = {};
  return Re[e(221)] = 5, ie.jsxs(R0, { id: Se, children: [I && ie.jsx(I0, { children: ie.jsx(_0, me) }), K[e(170)] == 0 ? ie.jsxs(ie.Fragment, { children: [!M && ie.jsxs(Nf, { align: e(169), gap: e(263), children: [ie.jsx(Or, pe), ie.jsx(Or, ae), ie.jsx(Or, te)] }), ie.jsxs(k0, { ref: O, id: ce, style: M ? {} : le, children: [f ? ie.jsx(Nv, { status: ve, ref: fe, imageRef: C, displayId: S, isMobile: w, isShowDeviceId: I, onSenData: (U, Z) => {
    const B = e;
    if (B(173) !== B(173))
      c === u && f[B(161)] === B(246) ? E(!L) : y === S && w[B(161)] === B(181) ? I(T[B(246)]) : F(_);
    else if (U === Ks && Z[B(161)] === B(246)) B(141) !== B(141) ? (te[B(231)][B(142)](B(140), le), ve == null || ve(ye)) : T(!I);
    else if (U === Ks && Z[B(161)] === B(181))
      if (B(131) === B(206)) {
        const H = le[B(231)][B(187)](ve[B(244)]);
        H && (H(t), a[B(231)][B(177)](c[B(244)]));
      } else y(c[B(246)]);
    else if (B(201) === B(200)) {
      const H = {};
      H[B(182)] = B(146), H[B(143) + "t"] = ve, H[B(246)] = H[B(246)], H[B(160)] = Re, H[B(153)] = s[B(153)], le[B(142)](B(159), H);
    } else xe(Z);
  } }) : null, ie.jsx(Tv, { canvasContent: ye, imageRef: C, isMobile: w, assistive: _, onImgEvent: (U, Z) => {
    const B = e;
    if (U === cd)
      if (B(128) === B(128)) {
        const H = { ..._ };
        H[B(174)] = !1, V(H);
      } else {
        const H = {};
        H[B(235)] = B(171) + B(214) + B(188) + ae[B(164)], H[B(241)] = B(239), pe(H);
      }
    else B(256) !== B(194) ? xe(Z) : pe((H) => [...H, te]);
  } })] })] }) : K[e(121)]((U, Z) => ie.jsx(kf, { style: Re, message: U[e(235)], type: U[e(241)], showIcon: !0, closable: !0 }, Z))] });
});
(function(s, t) {
  for (var e = Zs, a = s(); ; )
    try {
      var c = -parseInt(e(338)) / 1 + -parseInt(e(335)) / 2 * (parseInt(e(339)) / 3) + -parseInt(e(336)) / 4 + parseInt(e(334)) / 5 + parseInt(e(341)) / 6 + -parseInt(e(337)) / 7 + parseInt(e(340)) / 8;
      if (c === t) break;
      a.push(a.shift());
    } catch {
      a.push(a.shift());
    }
})(Zo, 784155);
function Zs(s, t) {
  var e = Zo();
  return Zs = function(a, c) {
    a = a - 334;
    var u = e[a];
    return u;
  }, Zs(s, t);
}
function Zo() {
  var s = ["27095200aQTIZK", "2919990xDtvun", "4095085ptvslA", "2Ndqovk", "2831368sjkPHc", "4939137NAfftL", "1514744xGBSPs", "2940750SSKmWW"];
  return Zo = function() {
    return s;
  }, Zo();
}
export {
  oy as ViewRP
};
