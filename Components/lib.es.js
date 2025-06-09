var Jf = Object.defineProperty;
var Qf = (t, n, e) => n in t ? Jf(t, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[n] = e;
var Pt = (t, n, e) => Qf(t, typeof n != "symbol" ? n + "" : n, e);
import * as _ from "react";
import Fe, { useDebugValue as pa, createElement as e0, useRef as qe, useContext as Qt, isValidElement as t0, version as n0, createContext as Fs, useLayoutEffect as r0, useEffect as ot, useState as rt, forwardRef as il, useImperativeHandle as sl } from "react";
import ma from "react-dom";
var cr = xo;
(function(t, n) {
  for (var e = xo, r = t(); ; )
    try {
      var o = parseInt(e(516)) / 1 + parseInt(e(504)) / 2 + parseInt(e(525)) / 3 * (parseInt(e(509)) / 4) + -parseInt(e(514)) / 5 + -parseInt(e(497)) / 6 + parseInt(e(506)) / 7 * (-parseInt(e(515)) / 8) + parseInt(e(520)) / 9;
      if (o === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ho, 698835);
function ho() {
  var t = ["aXRwQ", "default", "WQbUt", "forEach", "apply", "getOwnProp", "1314694xgNiws", "ertyDescri", "7VDRjsS", "keys", "get", "2236HAZBsb", "ptor", "defineProp", "erty", "prototype", "1751610QdFFuv", "3314056fCkPmW", "449760UtEaJY", "undefined", "__esModule", "value", "14730732hVDkQo", "function", "constructo", "rLpca", "hasOwnProp", "246PDrDBM", "construct", "call", "length", "CotZh", "7957674EjOxhy"];
  return ho = function() {
    return t;
  }, ho();
}
typeof globalThis !== cr(517) || typeof window !== cr(517) || (typeof global !== cr(517) ? global : cr(517));
function o0(t) {
  var n = cr;
  return t && t[n(518)] && Object[n(513)][n(524) + n(512)][n(494)](t, n(499)) ? t[n(499)] : t;
}
function xo(t, n) {
  var e = ho();
  return xo = function(r, o) {
    r = r - 493;
    var i = e[r];
    return i;
  }, xo(t, n);
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
  var t = Fe, n = Symbol.for("react.element"), e = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(a, c, u) {
    var f, d = {}, l = null, v = null;
    u !== void 0 && (l = "" + u), c.key !== void 0 && (l = "" + c.key), c.ref !== void 0 && (v = c.ref);
    for (f in c) r.call(c, f) && !i.hasOwnProperty(f) && (d[f] = c[f]);
    if (a && a.defaultProps) for (f in c = a.defaultProps, c) d[f] === void 0 && (d[f] = c[f]);
    return { $$typeof: n, type: a, key: l, ref: v, props: d, _owner: o.current };
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
    var t = Fe, n = Symbol.for("react.element"), e = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), l = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g = Symbol.iterator, x = "@@iterator";
    function h(p) {
      if (p === null || typeof p != "object")
        return null;
      var P = g && p[g] || p[x];
      return typeof P == "function" ? P : null;
    }
    var E = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(p) {
      {
        for (var P = arguments.length, M = new Array(P > 1 ? P - 1 : 0), $ = 1; $ < P; $++)
          M[$ - 1] = arguments[$];
        m("error", p, M);
      }
    }
    function m(p, P, M) {
      {
        var $ = E.ReactDebugCurrentFrame, pe = $.getStackAddendum();
        pe !== "" && (P += "%s", M = M.concat([pe]));
        var be = M.map(function(le) {
          return String(le);
        });
        be.unshift("Warning: " + P), Function.prototype.apply.call(console[p], console, be);
      }
    }
    var C = !1, y = !1, O = !1, A = !1, L = !1, F;
    F = Symbol.for("react.module.reference");
    function Y(p) {
      return !!(typeof p == "string" || typeof p == "function" || p === r || p === i || L || p === o || p === u || p === f || A || p === v || C || y || O || typeof p == "object" && p !== null && (p.$$typeof === l || p.$$typeof === d || p.$$typeof === s || p.$$typeof === a || p.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      p.$$typeof === F || p.getModuleId !== void 0));
    }
    function re(p, P, M) {
      var $ = p.displayName;
      if ($)
        return $;
      var pe = P.displayName || P.name || "";
      return pe !== "" ? M + "(" + pe + ")" : M;
    }
    function G(p) {
      return p.displayName || "Context";
    }
    function B(p) {
      if (p == null)
        return null;
      if (typeof p.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof p == "function")
        return p.displayName || p.name || null;
      if (typeof p == "string")
        return p;
      switch (p) {
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
      if (typeof p == "object")
        switch (p.$$typeof) {
          case a:
            var P = p;
            return G(P) + ".Consumer";
          case s:
            var M = p;
            return G(M._context) + ".Provider";
          case c:
            return re(p, p.render, "ForwardRef");
          case d:
            var $ = p.displayName || null;
            return $ !== null ? $ : B(p.type) || "Memo";
          case l: {
            var pe = p, be = pe._payload, le = pe._init;
            try {
              return B(le(be));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var W = Object.assign, H = 0, ee, Z, J, Q, se, oe, K;
    function te() {
    }
    te.__reactDisabledLog = !0;
    function he() {
      {
        if (H === 0) {
          ee = console.log, Z = console.info, J = console.warn, Q = console.error, se = console.group, oe = console.groupCollapsed, K = console.groupEnd;
          var p = {
            configurable: !0,
            enumerable: !0,
            value: te,
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
        H++;
      }
    }
    function ue() {
      {
        if (H--, H === 0) {
          var p = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: W({}, p, {
              value: ee
            }),
            info: W({}, p, {
              value: Z
            }),
            warn: W({}, p, {
              value: J
            }),
            error: W({}, p, {
              value: Q
            }),
            group: W({}, p, {
              value: se
            }),
            groupCollapsed: W({}, p, {
              value: oe
            }),
            groupEnd: W({}, p, {
              value: K
            })
          });
        }
        H < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var me = E.ReactCurrentDispatcher, I;
    function j(p, P, M) {
      {
        if (I === void 0)
          try {
            throw Error();
          } catch (pe) {
            var $ = pe.stack.trim().match(/\n( *(at )?)/);
            I = $ && $[1] || "";
          }
        return `
` + I + p;
      }
    }
    var k = !1, N;
    {
      var S = typeof WeakMap == "function" ? WeakMap : Map;
      N = new S();
    }
    function D(p, P) {
      if (!p || k)
        return "";
      {
        var M = N.get(p);
        if (M !== void 0)
          return M;
      }
      var $;
      k = !0;
      var pe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var be;
      be = me.current, me.current = null, he();
      try {
        if (P) {
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
            } catch (nt) {
              $ = nt;
            }
            Reflect.construct(p, [], le);
          } else {
            try {
              le.call();
            } catch (nt) {
              $ = nt;
            }
            p.call(le.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (nt) {
            $ = nt;
          }
          p();
        }
      } catch (nt) {
        if (nt && $ && typeof nt.stack == "string") {
          for (var ae = nt.stack.split(`
`), Ke = $.stack.split(`
`), ke = ae.length - 1, Ie = Ke.length - 1; ke >= 1 && Ie >= 0 && ae[ke] !== Ke[Ie]; )
            Ie--;
          for (; ke >= 1 && Ie >= 0; ke--, Ie--)
            if (ae[ke] !== Ke[Ie]) {
              if (ke !== 1 || Ie !== 1)
                do
                  if (ke--, Ie--, Ie < 0 || ae[ke] !== Ke[Ie]) {
                    var Ne = `
` + ae[ke].replace(" at new ", " at ");
                    return p.displayName && Ne.includes("<anonymous>") && (Ne = Ne.replace("<anonymous>", p.displayName)), typeof p == "function" && N.set(p, Ne), Ne;
                  }
                while (ke >= 1 && Ie >= 0);
              break;
            }
        }
      } finally {
        k = !1, me.current = be, ue(), Error.prepareStackTrace = pe;
      }
      var An = p ? p.displayName || p.name : "", ln = An ? j(An) : "";
      return typeof p == "function" && N.set(p, ln), ln;
    }
    function xe(p, P, M) {
      return D(p, !1);
    }
    function z(p) {
      var P = p.prototype;
      return !!(P && P.isReactComponent);
    }
    function Qe(p, P, M) {
      if (p == null)
        return "";
      if (typeof p == "function")
        return D(p, z(p));
      if (typeof p == "string")
        return j(p);
      switch (p) {
        case u:
          return j("Suspense");
        case f:
          return j("SuspenseList");
      }
      if (typeof p == "object")
        switch (p.$$typeof) {
          case c:
            return xe(p.render);
          case d:
            return Qe(p.type, P, M);
          case l: {
            var $ = p, pe = $._payload, be = $._init;
            try {
              return Qe(be(pe), P, M);
            } catch {
            }
          }
        }
      return "";
    }
    var Oe = Object.prototype.hasOwnProperty, ft = {}, Ot = E.ReactDebugCurrentFrame;
    function ct(p) {
      if (p) {
        var P = p._owner, M = Qe(p.type, p._source, P ? P.type : null);
        Ot.setExtraStackFrame(M);
      } else
        Ot.setExtraStackFrame(null);
    }
    function Rt(p, P, M, $, pe) {
      {
        var be = Function.call.bind(Oe);
        for (var le in p)
          if (be(p, le)) {
            var ae = void 0;
            try {
              if (typeof p[le] != "function") {
                var Ke = Error(($ || "React class") + ": " + M + " type `" + le + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof p[le] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ke.name = "Invariant Violation", Ke;
              }
              ae = p[le](P, le, $, M, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ke) {
              ae = ke;
            }
            ae && !(ae instanceof Error) && (ct(pe), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", $ || "React class", M, le, typeof ae), ct(null)), ae instanceof Error && !(ae.message in ft) && (ft[ae.message] = !0, ct(pe), w("Failed %s type: %s", M, ae.message), ct(null));
          }
      }
    }
    var Le = Array.isArray;
    function Ae(p) {
      return Le(p);
    }
    function Ye(p) {
      {
        var P = typeof Symbol == "function" && Symbol.toStringTag, M = P && p[Symbol.toStringTag] || p.constructor.name || "Object";
        return M;
      }
    }
    function vt(p) {
      try {
        return dt(p), !1;
      } catch {
        return !0;
      }
    }
    function dt(p) {
      return "" + p;
    }
    function rn(p) {
      if (vt(p))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ye(p)), dt(p);
    }
    var on = E.ReactCurrentOwner, Cn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, sn, an;
    function R(p) {
      if (Oe.call(p, "ref")) {
        var P = Object.getOwnPropertyDescriptor(p, "ref").get;
        if (P && P.isReactWarning)
          return !1;
      }
      return p.ref !== void 0;
    }
    function b(p) {
      if (Oe.call(p, "key")) {
        var P = Object.getOwnPropertyDescriptor(p, "key").get;
        if (P && P.isReactWarning)
          return !1;
      }
      return p.key !== void 0;
    }
    function fe(p, P) {
      typeof p.ref == "string" && on.current;
    }
    function ge(p, P) {
      {
        var M = function() {
          sn || (sn = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", P));
        };
        M.isReactWarning = !0, Object.defineProperty(p, "key", {
          get: M,
          configurable: !0
        });
      }
    }
    function Re(p, P) {
      {
        var M = function() {
          an || (an = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", P));
        };
        M.isReactWarning = !0, Object.defineProperty(p, "ref", {
          get: M,
          configurable: !0
        });
      }
    }
    var X = function(p, P, M, $, pe, be, le) {
      var ae = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: p,
        key: P,
        ref: M,
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
        value: $
      }), Object.defineProperty(ae, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: pe
      }), Object.freeze && (Object.freeze(ae.props), Object.freeze(ae)), ae;
    };
    function ve(p, P, M, $, pe) {
      {
        var be, le = {}, ae = null, Ke = null;
        M !== void 0 && (rn(M), ae = "" + M), b(P) && (rn(P.key), ae = "" + P.key), R(P) && (Ke = P.ref, fe(P, pe));
        for (be in P)
          Oe.call(P, be) && !Cn.hasOwnProperty(be) && (le[be] = P[be]);
        if (p && p.defaultProps) {
          var ke = p.defaultProps;
          for (be in ke)
            le[be] === void 0 && (le[be] = ke[be]);
        }
        if (ae || Ke) {
          var Ie = typeof p == "function" ? p.displayName || p.name || "Unknown" : p;
          ae && ge(le, Ie), Ke && Re(le, Ie);
        }
        return X(p, ae, Ke, pe, $, on.current, le);
      }
    }
    var ye = E.ReactCurrentOwner, tt = E.ReactDebugCurrentFrame;
    function lt(p) {
      if (p) {
        var P = p._owner, M = Qe(p.type, p._source, P ? P.type : null);
        tt.setExtraStackFrame(M);
      } else
        tt.setExtraStackFrame(null);
    }
    var Bt;
    Bt = !1;
    function cn(p) {
      return typeof p == "object" && p !== null && p.$$typeof === n;
    }
    function Me() {
      {
        if (ye.current) {
          var p = B(ye.current.type);
          if (p)
            return `

Check the render method of \`` + p + "`.";
        }
        return "";
      }
    }
    function $e(p) {
      return "";
    }
    var Ge = {};
    function kt(p) {
      {
        var P = Me();
        if (!P) {
          var M = typeof p == "string" ? p : p.displayName || p.name;
          M && (P = `

Check the top-level render call using <` + M + ">.");
        }
        return P;
      }
    }
    function et(p, P) {
      {
        if (!p._store || p._store.validated || p.key != null)
          return;
        p._store.validated = !0;
        var M = kt(P);
        if (Ge[M])
          return;
        Ge[M] = !0;
        var $ = "";
        p && p._owner && p._owner !== ye.current && ($ = " It was passed a child from " + B(p._owner.type) + "."), lt(p), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', M, $), lt(null);
      }
    }
    function Xt(p, P) {
      {
        if (typeof p != "object")
          return;
        if (Ae(p))
          for (var M = 0; M < p.length; M++) {
            var $ = p[M];
            cn($) && et($, P);
          }
        else if (cn(p))
          p._store && (p._store.validated = !0);
        else if (p) {
          var pe = h(p);
          if (typeof pe == "function" && pe !== p.entries)
            for (var be = pe.call(p), le; !(le = be.next()).done; )
              cn(le.value) && et(le.value, P);
        }
      }
    }
    function ht(p) {
      {
        var P = p.type;
        if (P == null || typeof P == "string")
          return;
        var M;
        if (typeof P == "function")
          M = P.propTypes;
        else if (typeof P == "object" && (P.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        P.$$typeof === d))
          M = P.propTypes;
        else
          return;
        if (M) {
          var $ = B(P);
          Rt(M, p.props, "prop", $, p);
        } else if (P.PropTypes !== void 0 && !Bt) {
          Bt = !0;
          var pe = B(P);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", pe || "Unknown");
        }
        typeof P.getDefaultProps == "function" && !P.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Yt(p) {
      {
        for (var P = Object.keys(p.props), M = 0; M < P.length; M++) {
          var $ = P[M];
          if ($ !== "children" && $ !== "key") {
            lt(p), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", $), lt(null);
            break;
          }
        }
        p.ref !== null && (lt(p), w("Invalid attribute `ref` supplied to `React.Fragment`."), lt(null));
      }
    }
    var er = {};
    function Or(p, P, M, $, pe, be) {
      {
        var le = Y(p);
        if (!le) {
          var ae = "";
          (p === void 0 || typeof p == "object" && p !== null && Object.keys(p).length === 0) && (ae += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ke = $e();
          Ke ? ae += Ke : ae += Me();
          var ke;
          p === null ? ke = "null" : Ae(p) ? ke = "array" : p !== void 0 && p.$$typeof === n ? (ke = "<" + (B(p.type) || "Unknown") + " />", ae = " Did you accidentally export a JSX literal instead of a component?") : ke = typeof p, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ke, ae);
        }
        var Ie = ve(p, P, M, pe, be);
        if (Ie == null)
          return Ie;
        if (le) {
          var Ne = P.children;
          if (Ne !== void 0)
            if ($)
              if (Ae(Ne)) {
                for (var An = 0; An < Ne.length; An++)
                  Xt(Ne[An], p);
                Object.freeze && Object.freeze(Ne);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Xt(Ne, p);
        }
        if (Oe.call(P, "key")) {
          var ln = B(p), nt = Object.keys(P).filter(function(Zf) {
            return Zf !== "key";
          }), ui = nt.length > 0 ? "{key: someKey, " + nt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!er[ln + ui]) {
            var Kf = nt.length > 0 ? "{" + nt.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ui, ln, Kf, ln), er[ln + ui] = !0;
          }
        }
        return p === r ? Yt(Ie) : ht(Ie), Ie;
      }
    }
    function Ue(p, P, M) {
      return Or(p, P, M, !0);
    }
    function Rr(p, P, M) {
      return Or(p, P, M, !1);
    }
    var li = Rr, Pe = Ue;
    nr.Fragment = r, nr.jsx = li, nr.jsxs = Pe;
  }()), nr;
}
var ya;
function a0() {
  return ya || (ya = 1, process.env.NODE_ENV === "production" ? kr.exports = i0() : kr.exports = s0()), kr.exports;
}
var U = a0(), it = function() {
  return it = Object.assign || function(n) {
    for (var e, r = 1, o = arguments.length; r < o; r++) {
      e = arguments[r];
      for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
    }
    return n;
  }, it.apply(this, arguments);
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
), Te = "-ms-", fr = "-moz-", Ee = "-webkit-", al = "comm", Fo = "rule", zs = "decl", f0 = "@import", cl = "@keyframes", d0 = "@layer", ll = Math.abs, Vs = String.fromCharCode, ji = Object.assign;
function h0(t, n) {
  return Xe(t, 0) ^ 45 ? (((n << 2 ^ Xe(t, 0)) << 2 ^ Xe(t, 1)) << 2 ^ Xe(t, 2)) << 2 ^ Xe(t, 3) : 0;
}
function ul(t) {
  return t.trim();
}
function Ht(t, n) {
  return (t = n.exec(t)) ? t[0] : t;
}
function ie(t, n, e) {
  return t.replace(n, e);
}
function Yr(t, n, e) {
  return t.indexOf(n, e);
}
function Xe(t, n) {
  return t.charCodeAt(n) | 0;
}
function jn(t, n, e) {
  return t.slice(n, e);
}
function jt(t) {
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
    return !Ht(e, n);
  });
}
var zo = 1, Ln = 1, dl = 0, mt = 0, ze = 0, Wn = "";
function Vo(t, n, e, r, o, i, s, a) {
  return { value: t, root: n, parent: e, type: r, props: o, children: i, line: zo, column: Ln, length: s, return: "", siblings: a };
}
function $t(t, n) {
  return ji(Vo("", null, null, "", null, null, 0, t.siblings), t, { length: -t.length }, n);
}
function Tn(t) {
  for (; t.root; )
    t = $t(t.root, { children: [t] });
  lr(t, t.siblings);
}
function p0() {
  return ze;
}
function m0() {
  return ze = mt > 0 ? Xe(Wn, --mt) : 0, Ln--, ze === 10 && (Ln = 1, zo--), ze;
}
function St() {
  return ze = mt < dl ? Xe(Wn, mt++) : 0, Ln++, ze === 10 && (Ln = 1, zo++), ze;
}
function gn() {
  return Xe(Wn, mt);
}
function $r() {
  return mt;
}
function Ho(t, n) {
  return jn(Wn, t, n);
}
function Li(t) {
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
  return zo = Ln = 1, dl = jt(Wn = t), mt = 0, [];
}
function v0(t) {
  return Wn = "", t;
}
function fi(t) {
  return ul(Ho(mt - 1, Mi(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function y0(t) {
  for (; (ze = gn()) && ze < 33; )
    St();
  return Li(t) > 2 || Li(ze) > 3 ? "" : " ";
}
function b0(t, n) {
  for (; --n && St() && !(ze < 48 || ze > 102 || ze > 57 && ze < 65 || ze > 70 && ze < 97); )
    ;
  return Ho(t, $r() + (n < 6 && gn() == 32 && St() == 32));
}
function Mi(t) {
  for (; St(); )
    switch (ze) {
      // ] ) " '
      case t:
        return mt;
      // " '
      case 34:
      case 39:
        t !== 34 && t !== 39 && Mi(ze);
        break;
      // (
      case 40:
        t === 41 && Mi(t);
        break;
      // \
      case 92:
        St();
        break;
    }
  return mt;
}
function S0(t, n) {
  for (; St() && t + ze !== 57; )
    if (t + ze === 84 && gn() === 47)
      break;
  return "/*" + Ho(n, mt - 1) + "*" + Vs(t === 47 ? t : St());
}
function w0(t) {
  for (; !Li(gn()); )
    St();
  return Ho(t, mt);
}
function E0(t) {
  return v0(Gr("", null, null, null, [""], t = g0(t), 0, [0], t));
}
function Gr(t, n, e, r, o, i, s, a, c) {
  for (var u = 0, f = 0, d = s, l = 0, v = 0, g = 0, x = 1, h = 1, E = 1, w = 0, m = "", C = o, y = i, O = r, A = m; h; )
    switch (g = w, w = St()) {
      // (
      case 40:
        if (g != 108 && Xe(A, d - 1) == 58) {
          Yr(A += ie(fi(w), "&", "&\f"), "&\f", ll(u ? a[u - 1] : 0)) != -1 && (E = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        A += fi(w);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        A += y0(g);
        break;
      // \
      case 92:
        A += b0($r() - 1, 7);
        continue;
      // /
      case 47:
        switch (gn()) {
          case 42:
          case 47:
            lr(_0(S0(St(), $r()), n, e, c), c);
            break;
          default:
            A += "/";
        }
        break;
      // {
      case 123 * x:
        a[u++] = jt(A) * E;
      // } ; \0
      case 125 * x:
      case 59:
      case 0:
        switch (w) {
          // \0 }
          case 0:
          case 125:
            h = 0;
          // ;
          case 59 + f:
            E == -1 && (A = ie(A, /\f/g, "")), v > 0 && jt(A) - d && lr(v > 32 ? wa(A + ";", r, e, d - 1, c) : wa(ie(A, " ", "") + ";", r, e, d - 2, c), c);
            break;
          // @ ;
          case 59:
            A += ";";
          // { rule/at-rule
          default:
            if (lr(O = Sa(A, n, e, u, f, o, a, m, C = [], y = [], d, i), i), w === 123)
              if (f === 0)
                Gr(A, n, O, O, C, i, d, a, y);
              else
                switch (l === 99 && Xe(A, 3) === 110 ? 100 : l) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Gr(t, O, O, r && lr(Sa(t, O, O, 0, 0, o, a, m, o, C = [], d, y), y), o, y, d, a, r ? C : y);
                    break;
                  default:
                    Gr(A, O, O, O, [""], y, 0, a, y);
                }
        }
        u = f = v = 0, x = E = 1, m = A = "", d = s;
        break;
      // :
      case 58:
        d = 1 + jt(A), v = g;
      default:
        if (x < 1) {
          if (w == 123)
            --x;
          else if (w == 125 && x++ == 0 && m0() == 125)
            continue;
        }
        switch (A += Vs(w), w * x) {
          // &
          case 38:
            E = f > 0 ? 1 : (A += "\f", -1);
            break;
          // ,
          case 44:
            a[u++] = (jt(A) - 1) * E, E = 1;
            break;
          // @
          case 64:
            gn() === 45 && (A += fi(St())), l = gn(), f = d = jt(m = A += w0($r())), w++;
            break;
          // -
          case 45:
            g === 45 && jt(A) == 2 && (x = 0);
        }
    }
  return i;
}
function Sa(t, n, e, r, o, i, s, a, c, u, f, d) {
  for (var l = o - 1, v = o === 0 ? i : [""], g = fl(v), x = 0, h = 0, E = 0; x < r; ++x)
    for (var w = 0, m = jn(t, l + 1, l = ll(h = s[x])), C = t; w < g; ++w)
      (C = ul(h > 0 ? v[w] + " " + m : ie(m, /&\f/g, v[w]))) && (c[E++] = C);
  return Vo(t, n, e, o === 0 ? Fo : a, c, u, f, d);
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
      return Ee + "print-" + t + t;
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
      return Ee + t + t;
    // tab-size
    case 4789:
      return fr + t + t;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Ee + t + fr + t + Te + t + t;
    // writing-mode
    case 5936:
      switch (Xe(t, n + 11)) {
        // vertical-l(r)
        case 114:
          return Ee + t + Te + ie(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
        // vertical-r(l)
        case 108:
          return Ee + t + Te + ie(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
        // horizontal(-)tb
        case 45:
          return Ee + t + Te + ie(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return Ee + t + Te + t + t;
    // order
    case 6165:
      return Ee + t + Te + "flex-" + t + t;
    // align-items
    case 5187:
      return Ee + t + ie(t, /(\w+).+(:[^]+)/, Ee + "box-$1$2" + Te + "flex-$1$2") + t;
    // align-self
    case 5443:
      return Ee + t + Te + "flex-item-" + ie(t, /flex-|-self/g, "") + (Ht(t, /flex-|baseline/) ? "" : Te + "grid-row-" + ie(t, /flex-|-self/g, "")) + t;
    // align-content
    case 4675:
      return Ee + t + Te + "flex-line-pack" + ie(t, /align-content|flex-|-self/g, "") + t;
    // flex-shrink
    case 5548:
      return Ee + t + Te + ie(t, "shrink", "negative") + t;
    // flex-basis
    case 5292:
      return Ee + t + Te + ie(t, "basis", "preferred-size") + t;
    // flex-grow
    case 6060:
      return Ee + "box-" + ie(t, "-grow", "") + Ee + t + Te + ie(t, "grow", "positive") + t;
    // transition
    case 4554:
      return Ee + ie(t, /([^-])(transform)/g, "$1" + Ee + "$2") + t;
    // cursor
    case 6187:
      return ie(ie(ie(t, /(zoom-|grab)/, Ee + "$1"), /(image-set)/, Ee + "$1"), t, "") + t;
    // background, background-image
    case 5495:
    case 3959:
      return ie(t, /(image-set\([^]*)/, Ee + "$1$`$1");
    // justify-content
    case 4968:
      return ie(ie(t, /(.+:)(flex-)?(.*)/, Ee + "box-pack:$3" + Te + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Ee + t + t;
    // justify-self
    case 4200:
      if (!Ht(t, /flex-|baseline/)) return Te + "grid-column-align" + jn(t, n) + t;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return Te + ie(t, "template-", "") + t;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return e && e.some(function(r, o) {
        return n = o, Ht(r.props, /grid-\w+-end/);
      }) ? ~Yr(t + (e = e[n].value), "span", 0) ? t : Te + ie(t, "-start", "") + t + Te + "grid-row-span:" + (~Yr(e, "span", 0) ? Ht(e, /\d+/) : +Ht(e, /\d+/) - +Ht(t, /\d+/)) + ";" : Te + ie(t, "-start", "") + t;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return e && e.some(function(r) {
        return Ht(r.props, /grid-\w+-start/);
      }) ? t : Te + ie(ie(t, "-end", "-span"), "span ", "") + t;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ie(t, /(.+)-inline(.+)/, Ee + "$1$2") + t;
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
      if (jt(t) - 1 - n > 6)
        switch (Xe(t, n + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (Xe(t, n + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return ie(t, /(.+:)(.+)-([^]+)/, "$1" + Ee + "$2-$3$1" + fr + (Xe(t, n + 3) == 108 ? "$3" : "$2-$3")) + t;
          // (s)tretch
          case 115:
            return ~Yr(t, "stretch", 0) ? hl(ie(t, "stretch", "fill-available"), n, e) + t : t;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return ie(t, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, s, a, c, u) {
        return Te + o + ":" + i + u + (s ? Te + o + "-span:" + (a ? c : +c - +i) + u : "") + t;
      });
    // position: sticky
    case 4949:
      if (Xe(t, n + 6) === 121)
        return ie(t, ":", ":" + Ee) + t;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (Xe(t, Xe(t, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return ie(t, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + Ee + (Xe(t, 14) === 45 ? "inline-" : "") + "box$3$1" + Ee + "$2$3$1" + Te + "$2box$3") + t;
        // (inline-)?gri(d)
        case 100:
          return ie(t, ":", ":" + Te) + t;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return ie(t, "scroll-", "scroll-snap-") + t;
  }
  return t;
}
function po(t, n) {
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
      return t.return = t.value + "{" + po(t.children, r) + "}";
    case Fo:
      if (!jt(t.value = t.props.join(","))) return "";
  }
  return jt(e = po(t.children, r)) ? t.return = t.value + "{" + e + "}" : "";
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
        return po([$t(t, { value: ie(t.value, "@", "@" + Ee) })], r);
      case Fo:
        if (t.length)
          return x0(e = t.props, function(o) {
            switch (Ht(o, r = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                Tn($t(t, { props: [ie(o, /:(read-\w+)/, ":" + fr + "$1")] })), Tn($t(t, { props: [o] })), ji(t, { props: ba(e, r) });
                break;
              // :placeholder
              case "::placeholder":
                Tn($t(t, { props: [ie(o, /:(plac\w+)/, ":" + Ee + "input-$1")] })), Tn($t(t, { props: [ie(o, /:(plac\w+)/, ":" + fr + "$1")] })), Tn($t(t, { props: [ie(o, /:(plac\w+)/, Te + "input-$1")] })), Tn($t(t, { props: [o] })), ji(t, { props: ba(e, r) });
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
}, En = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", xl = "active", pl = "data-styled-version", Uo = "6.1.18", Hs = `/*!sc*/
`, mo = typeof window < "u" && typeof document < "u", k0 = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Ea = /invalid hook call/i, Pr = /* @__PURE__ */ new Set(), P0 = function(t, n) {
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
      }, qe(), i && !Pr.has(r) && (console.warn(r), Pr.add(r));
    } catch (s) {
      Ea.test(s.message) && Pr.delete(r);
    } finally {
      console.error = o;
    }
  }
}, qo = Object.freeze([]), Mn = Object.freeze({});
function I0(t, n, e) {
  return e === void 0 && (e = Mn), t.theme !== e.theme && t.theme || n || e.theme;
}
var Di = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), N0 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, j0 = /(^-|-$)/g;
function _a(t) {
  return t.replace(N0, "-").replace(j0, "");
}
var L0 = /(a)(d)/gi, Ir = 52, Ca = function(t) {
  return String.fromCharCode(t + (t > 25 ? 39 : 97));
};
function Bi(t) {
  var n, e = "";
  for (n = Math.abs(t); n > Ir; n = n / Ir | 0) e = Ca(n % Ir) + e;
  return (Ca(n % Ir) + e).replace(L0, "$1-$2");
}
var di, ml = 5381, fn = function(t, n) {
  for (var e = n.length; e; ) t = 33 * t ^ n.charCodeAt(--e);
  return t;
}, gl = function(t) {
  return fn(ml, t);
};
function M0(t) {
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
        var u = U0(n, c);
        try {
          V0(t, c, u);
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
}(), $0 = 1 << 30, Kr = /* @__PURE__ */ new Map(), go = /* @__PURE__ */ new Map(), Zr = 1, Nr = function(t) {
  if (Kr.has(t)) return Kr.get(t);
  for (; go.has(Zr); ) Zr++;
  var n = Zr++;
  if (process.env.NODE_ENV !== "production" && ((0 | n) < 0 || n > $0)) throw Xn(16, "".concat(n));
  return Kr.set(t, n), go.set(n, t), n;
}, G0 = function(t, n) {
  Zr = n + 1, Kr.set(t, n), go.set(n, t);
}, K0 = "style[".concat(En, "][").concat(pl, '="').concat(Uo, '"]'), Z0 = new RegExp("^".concat(En, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), J0 = function(t, n, e) {
  for (var r, o = e.split(","), i = 0, s = o.length; i < s; i++) (r = o[i]) && t.registerName(n, r);
}, Q0 = function(t, n) {
  for (var e, r = ((e = n.textContent) !== null && e !== void 0 ? e : "").split(Hs), o = [], i = 0, s = r.length; i < s; i++) {
    var a = r[i].trim();
    if (a) {
      var c = a.match(Z0);
      if (c) {
        var u = 0 | parseInt(c[1], 10), f = c[2];
        u !== 0 && (G0(f, u), J0(t, f, c[3]), t.getTag().insertRules(u, o)), o.length = 0;
      } else o.push(a);
    }
  }
}, ka = function(t) {
  for (var n = document.querySelectorAll(K0), e = 0, r = n.length; e < r; e++) {
    var o = n[e];
    o && o.getAttribute(En) !== xl && (Q0(t, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function ed() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var El = function(t) {
  var n = document.head, e = t || n, r = document.createElement("style"), o = function(a) {
    var c = Array.from(a.querySelectorAll("style[".concat(En, "]")));
    return c[c.length - 1];
  }(e), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(En, xl), r.setAttribute(pl, Uo);
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
}(), Pa = mo, od = { isServer: !mo, useCSSOMInjection: !k0 }, _l = function() {
  function t(n, e, r) {
    n === void 0 && (n = Mn), e === void 0 && (e = {});
    var o = this;
    this.options = it(it({}, od), n), this.gs = e, this.names = new Map(r), this.server = !!n.isServer, !this.server && mo && Pa && (Pa = !1, ka(this)), qs(this, function() {
      return function(i) {
        for (var s = i.getTag(), a = s.length, c = "", u = function(d) {
          var l = function(E) {
            return go.get(E);
          }(d);
          if (l === void 0) return "continue";
          var v = i.names.get(l), g = s.getGroup(d);
          if (v === void 0 || !v.size || g.length === 0) return "continue";
          var x = "".concat(En, ".g").concat(d, '[id="').concat(l, '"]'), h = "";
          v !== void 0 && v.forEach(function(E) {
            E.length > 0 && (h += "".concat(E, ","));
          }), c += "".concat(g).concat(x, '{content:"').concat(h, '"}').concat(Hs);
        }, f = 0; f < a; f++) u(f);
        return c;
      }(o);
    });
  }
  return t.registerId = function(n) {
    return Nr(n);
  }, t.prototype.rehydrate = function() {
    !this.server && mo && ka(this);
  }, t.prototype.reconstructWithOptions = function(n, e) {
    return e === void 0 && (e = !0), new t(it(it({}, this.options), n), this.gs, e && this.names || void 0);
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
    if (Nr(n), this.names.has(n)) this.names.get(n).add(e);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(e), this.names.set(n, r);
    }
  }, t.prototype.insertRules = function(n, e, r) {
    this.registerName(n, e), this.getTag().insertRules(Nr(n), r);
  }, t.prototype.clearNames = function(n) {
    this.names.has(n) && this.names.get(n).clear();
  }, t.prototype.clearRules = function(n) {
    this.getTag().clearGroup(Nr(n)), this.clearNames(n);
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
  var n, e, r, o = Mn, i = o.options, s = i === void 0 ? Mn : i, a = o.plugins, c = a === void 0 ? qo : a, u = function(l, v, g) {
    return g.startsWith(e) && g.endsWith(e) && g.replaceAll(e, "").length > 0 ? ".".concat(n) : l;
  }, f = c.slice();
  f.push(function(l) {
    l.type === Fo && l.value.includes("&") && (l.props[0] = l.props[0].replace(id, e).replace(r, u));
  }), s.prefix && f.push(O0), f.push(C0);
  var d = function(l, v, g, x) {
    v === void 0 && (v = ""), g === void 0 && (g = ""), x === void 0 && (x = "&"), n = x, e = v, r = new RegExp("\\".concat(e, "\\b"), "g");
    var h = l.replace(sd, ""), E = E0(g || v ? "".concat(g, " ").concat(v, " { ").concat(h, " }") : h);
    s.namespace && (E = Cl(E, s.namespace));
    var w = [];
    return po(E, A0(f.concat(T0(function(m) {
      return w.push(m);
    })))), w;
  };
  return d.hash = c.length ? c.reduce(function(l, v) {
    return v.name || Xn(15), fn(l, v.name);
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
function vn(t, n, e, r) {
  if (Tl(t)) return [];
  if (Us(t)) return [".".concat(t.styledComponentId)];
  if (Dn(t)) {
    if (!Dn(i = t) || i.prototype && i.prototype.isReactComponent || !n) return [t];
    var o = t(n);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof Na || Bn(o) || o === null || console.error("".concat(vl(t), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), vn(o, n, e, r);
  }
  var i;
  return t instanceof Na ? e ? (t.inject(e, r), [t.getName(r)]) : [t] : Bn(t) ? Ol(t) : Array.isArray(t) ? Array.prototype.concat.apply(qo, t.map(function(s) {
    return vn(s, n, e, r);
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
      var i = Ra(vn(this.rules, n, e, r)), s = Bi(fn(this.baseHash, i) >>> 0);
      if (!e.hasNameForId(this.componentId, s)) {
        var a = r(i, ".".concat(s), void 0, this.componentId);
        e.insertRules(this.componentId, s, a);
      }
      o = hn(o, s), this.staticRulesId = s;
    }
    else {
      for (var c = fn(this.baseHash, r.hash), u = "", f = 0; f < this.rules.length; f++) {
        var d = this.rules[f];
        if (typeof d == "string") u += d, process.env.NODE_ENV !== "production" && (c = fn(c, d));
        else if (d) {
          var l = Ra(vn(d, n, e, r));
          c = fn(c, l + f), u += l;
        }
      }
      if (u) {
        var v = Bi(c >>> 0);
        e.hasNameForId(this.componentId, v) || e.insertRules(this.componentId, v, r(u, ".".concat(v), void 0, this.componentId)), o = hn(o, v);
      }
    }
    return o;
  }, t;
}(), Rl = Fe.createContext(void 0);
Rl.Consumer;
var xi = {}, La = /* @__PURE__ */ new Set();
function hd(t, n, e) {
  var r = Us(t), o = t, i = !hi(t), s = n.attrs, a = s === void 0 ? qo : s, c = n.componentId, u = c === void 0 ? function(C, y) {
    var O = typeof C != "string" ? "sc" : _a(C);
    xi[O] = (xi[O] || 0) + 1;
    var A = "".concat(O, "-").concat(M0(Uo + O + xi[O]));
    return y ? "".concat(y, "-").concat(A) : A;
  }(n.displayName, n.parentComponentId) : c, f = n.displayName, d = f === void 0 ? function(C) {
    return hi(C) ? "styled.".concat(C) : "Styled(".concat(vl(C), ")");
  }(t) : f, l = n.displayName && n.componentId ? "".concat(_a(n.displayName), "-").concat(n.componentId) : n.componentId || u, v = r && o.attrs ? o.attrs.concat(a).filter(Boolean) : a, g = n.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var x = o.shouldForwardProp;
    if (n.shouldForwardProp) {
      var h = n.shouldForwardProp;
      g = function(C, y) {
        return x(C, y) && h(C, y);
      };
    } else g = x;
  }
  var E = new dd(e, l, r ? o.componentStyle : void 0);
  function w(C, y) {
    return function(O, A, L) {
      var F = O.attrs, Y = O.componentStyle, re = O.defaultProps, G = O.foldedComponentIds, B = O.styledComponentId, W = O.target, H = Fe.useContext(Rl), ee = Ia(), Z = O.shouldForwardProp || ee.shouldForwardProp;
      process.env.NODE_ENV !== "production" && pa(B);
      var J = I0(A, H, re) || Mn, Q = function(ue, me, I) {
        for (var j, k = it(it({}, me), { className: void 0, theme: I }), N = 0; N < ue.length; N += 1) {
          var S = Dn(j = ue[N]) ? j(k) : j;
          for (var D in S) k[D] = D === "className" ? hn(k[D], S[D]) : D === "style" ? it(it({}, k[D]), S[D]) : S[D];
        }
        return me.className && (k.className = hn(k.className, me.className)), k;
      }(F, A, J), se = Q.as || W, oe = {};
      for (var K in Q) Q[K] === void 0 || K[0] === "$" || K === "as" || K === "theme" && Q.theme === J || (K === "forwardedAs" ? oe.as = Q.forwardedAs : Z && !Z(K, se) || (oe[K] = Q[K], Z || process.env.NODE_ENV !== "development" || u0(K) || La.has(K) || !Di.has(se) || (La.add(K), console.warn('styled-components: it looks like an unknown prop "'.concat(K, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var te = function(ue, me) {
        var I = Ia(), j = ue.generateAndInjectStyles(me, I.styleSheet, I.stylis);
        return process.env.NODE_ENV !== "production" && pa(j), j;
      }(Y, Q);
      process.env.NODE_ENV !== "production" && O.warnTooManyClasses && O.warnTooManyClasses(te);
      var he = hn(G, B);
      return te && (he += " " + te), Q.className && (he += " " + Q.className), oe[hi(se) && !Di.has(se) ? "class" : "className"] = he, L && (oe.ref = L), e0(se, oe);
    }(m, C, y);
  }
  w.displayName = d;
  var m = Fe.forwardRef(w);
  return m.attrs = v, m.componentStyle = E, m.displayName = d, m.shouldForwardProp = g, m.foldedComponentIds = r ? hn(o.foldedComponentIds, o.styledComponentId) : "", m.styledComponentId = l, m.target = r ? o.target : t, Object.defineProperty(m, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(C) {
    this._foldedDefaultProps = r ? function(y) {
      for (var O = [], A = 1; A < arguments.length; A++) O[A - 1] = arguments[A];
      for (var L = 0, F = O; L < F.length; L++) Fi(y, F[L], !0);
      return y;
    }({}, o.defaultProps, C) : C;
  } }), process.env.NODE_ENV !== "production" && (P0(d, l), m.warnTooManyClasses = /* @__PURE__ */ function(C, y) {
    var O = {}, A = !1;
    return function(L) {
      if (!A && (O[L] = !0, Object.keys(O).length >= 200)) {
        var F = y ? ' with the id of "'.concat(y, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(C).concat(F, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), A = !0, O = {};
      }
    };
  }(d, l)), qs(m, function() {
    return ".".concat(m.styledComponentId);
  }), i && wl(m, t, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), m;
}
function Ma(t, n) {
  for (var e = [t[0]], r = 0, o = n.length; r < o; r += 1) e.push(n[r], t[r + 1]);
  return e;
}
var Da = function(t) {
  return Object.assign(t, { isCss: !0 });
};
function xd(t) {
  for (var n = [], e = 1; e < arguments.length; e++) n[e - 1] = arguments[e];
  if (Dn(t) || Bn(t)) return Da(vn(Ma(qo, Nn([t], n, !0))));
  var r = t;
  return n.length === 0 && r.length === 1 && typeof r[0] == "string" ? vn(r) : Da(vn(Ma(r, n)));
}
function Vi(t, n, e) {
  if (e === void 0 && (e = Mn), !n) throw Xn(1, n);
  var r = function(o) {
    for (var i = [], s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
    return t(n, e, xd.apply(void 0, Nn([o], i, !1)));
  };
  return r.attrs = function(o) {
    return Vi(t, n, it(it({}, e), { attrs: Array.prototype.concat(e.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return Vi(t, n, it(it({}, e), o));
  }, r;
}
var kl = function(t) {
  return Vi(hd, t);
}, _t = kl;
Di.forEach(function(t) {
  _t[t] = kl(t);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var jr = "__sc-".concat(En, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[jr] || (window[jr] = 0), window[jr] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[jr] += 1);
const Er = vo;
(function(t, n) {
  const e = vo, r = t();
  for (; ; )
    try {
      if (-parseInt(e(458)) / 1 + parseInt(e(459)) / 2 + -parseInt(e(460)) / 3 + -parseInt(e(453)) / 4 + parseInt(e(455)) / 5 + -parseInt(e(456)) / 6 + parseInt(e(452)) / 7 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(yo, 151232);
function vo(t, n) {
  const e = yo();
  return vo = function(r, o) {
    return r = r - 451, e[r];
  }, vo(t, n);
}
const pd = _t[Er(454)]`
  flex-direction: column;
  border-radius: 15px;
  border: 3px solid #a0beeb;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
  justify-items: center;
  align-items: center;
`, md = _t[Er(454)]`
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
`, gd = _t[Er(457)]`
  border-radius: 7px;
  display: inline;
  padding: 0;
  &:focus-visible {
    outline: none;
  }
`;
function yo() {
  const t = ["98490HmUZyc", "span", "4666116WHLqWU", "1109608dRxKrJ", "div", "45875opMZKj", "1200672TxQgHR", "canvas", "292680NPzzkS", "556986nkgNkS"];
  return yo = function() {
    return t;
  }, yo();
}
const vd = _t[Er(451)]`
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
`, yd = _t[Er(454)]`
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
Object.keys(Mt).forEach((t) => {
  Jr[Mt[t]] = t;
});
const Hi = { type: "error", data: "parser error" }, Pl = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", Il = typeof ArrayBuffer == "function", Nl = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t && t.buffer instanceof ArrayBuffer, Ws = ({ type: t, data: n }, e, r) => Pl && n instanceof Blob ? e ? r(n) : Ba(n, r) : Il && (n instanceof ArrayBuffer || Nl(n)) ? e ? r(n) : Ba(new Blob([n]), r) : r(Mt[t] + (n || "")), Ba = (t, n) => {
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
  if (Pl && t.data instanceof Blob)
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
  const u = new ArrayBuffer(n), f = new Uint8Array(u);
  for (r = 0; r < e; r += 4)
    i = ur[t.charCodeAt(r)], s = ur[t.charCodeAt(r + 1)], a = ur[t.charCodeAt(r + 2)], c = ur[t.charCodeAt(r + 3)], f[o++] = i << 2 | s >> 4, f[o++] = (s & 15) << 4 | a >> 2, f[o++] = (a & 3) << 6 | c & 63;
  return u;
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
  } : Jr[e] ? t.length > 1 ? {
    type: Jr[e],
    data: t.substring(1)
  } : {
    type: Jr[e]
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
}, Ll = "", _d = (t, n) => {
  const e = t.length, r = new Array(e);
  let o = 0;
  t.forEach((i, s) => {
    Ws(i, !1, (a) => {
      r[s] = a, ++o === e && n(r.join(Ll));
    });
  });
}, Cd = (t, n) => {
  const e = t.split(Ll), r = [];
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
function Lr(t) {
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
          if (Lr(e) < 1)
            break;
          const c = Mr(e, 1);
          i = (c[0] & 128) === 128, o = c[0] & 127, o < 126 ? r = 3 : o === 126 ? r = 1 : r = 2;
        } else if (r === 1) {
          if (Lr(e) < 2)
            break;
          const c = Mr(e, 2);
          o = new DataView(c.buffer, c.byteOffset, c.length).getUint16(0), r = 3;
        } else if (r === 2) {
          if (Lr(e) < 8)
            break;
          const c = Mr(e, 8), u = new DataView(c.buffer, c.byteOffset, c.length), f = u.getUint32(0);
          if (f > Math.pow(2, 21) - 1) {
            a.enqueue(Hi);
            break;
          }
          o = f * Math.pow(2, 32) + u.getUint32(4), r = 3;
        } else {
          if (Lr(e) < o)
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
const Ml = 4;
function He(t) {
  if (t) return Od(t);
}
function Od(t) {
  for (var n in He.prototype)
    t[n] = He.prototype[n];
  return t;
}
He.prototype.on = He.prototype.addEventListener = function(t, n) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(n), this;
};
He.prototype.once = function(t, n) {
  function e() {
    this.off(t, e), n.apply(this, arguments);
  }
  return e.fn = n, this.on(t, e), this;
};
He.prototype.off = He.prototype.removeListener = He.prototype.removeAllListeners = He.prototype.removeEventListener = function(t, n) {
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
He.prototype.emit = function(t) {
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
He.prototype.emitReserved = He.prototype.emit;
He.prototype.listeners = function(t) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [];
};
He.prototype.hasListeners = function(t) {
  return !!this.listeners(t).length;
};
const Wo = typeof Promise == "function" && typeof Promise.resolve == "function" ? (n) => Promise.resolve().then(n) : (n, e) => e(n, 0), pt = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), Rd = "arraybuffer";
function Dl(t, ...n) {
  return n.reduce((e, r) => (t.hasOwnProperty(r) && (e[r] = t[r]), e), {});
}
const kd = pt.setTimeout, Pd = pt.clearTimeout;
function Xo(t, n) {
  n.useNativeTimers ? (t.setTimeoutFn = kd.bind(pt), t.clearTimeoutFn = Pd.bind(pt)) : (t.setTimeoutFn = pt.setTimeout.bind(pt), t.clearTimeoutFn = pt.clearTimeout.bind(pt));
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
function Ld(t) {
  let n = "";
  for (let e in t)
    t.hasOwnProperty(e) && (n.length && (n += "&"), n += encodeURIComponent(e) + "=" + encodeURIComponent(t[e]));
  return n;
}
function Md(t) {
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
class Ys extends He {
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
    const e = Ld(n);
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
let Pn = class Qr extends He {
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
    typeof document < "u" && (this._index = Qr.requestsCount++, Qr.requests[this._index] = this);
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
      typeof document < "u" && delete Qr.requests[this._index], this._xhr = null;
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
    const t = "onpagehide" in pt ? "pagehide" : "unload";
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
      return new pt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
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
const gi = pt.WebSocket || pt.MozWebSocket;
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
const qi = typeof addEventListener == "function" && typeof removeEventListener == "function", eo = [];
qi && addEventListener("offline", () => {
  eo.forEach((t) => t());
}, !1);
class Jt extends He {
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
    }, e), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = Md(this.opts.query)), qi && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
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
  createTransport(n) {
    const e = Object.assign({}, this.opts.query);
    e.EIO = Ml, e.transport = n, this.id && (e.sid = this.id);
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
        const r = eo.indexOf(this._offlineEventListener);
        r !== -1 && eo.splice(r, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", n, e), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
Jt.protocol = Ml;
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
    e.once("open", o), e.once("error", s), e.once("close", a), this.once("close", c), this.once("upgrading", u), this._upgrades.indexOf("webtransport") !== -1 && n !== "webtransport" ? this.setTimeoutFn(() => {
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
function to(t, n) {
  if (!t || typeof t != "object")
    return !1;
  if (Array.isArray(t)) {
    for (let e = 0, r = t.length; e < r; e++)
      if (to(t[e]))
        return !0;
    return !1;
  }
  if ($s(t))
    return !0;
  if (t.toJSON && typeof t.toJSON == "function" && arguments.length === 1)
    return to(t.toJSON(), !0);
  for (const e in t)
    if (Object.prototype.hasOwnProperty.call(t, e) && to(t[e]))
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
    return (n.type === de.EVENT || n.type === de.ACK) && to(n) ? this.encodeAsBinary({
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
class Gs extends He {
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
function yt(t, n, e) {
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
class Ul extends He {
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
      yt(n, "open", this.onopen.bind(this)),
      yt(n, "packet", this.onpacket.bind(this)),
      yt(n, "error", this.onerror.bind(this)),
      yt(n, "close", this.onclose.bind(this))
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
class Yi extends He {
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
    const o = yt(e, "open", function() {
      r.onopen(), n && n();
    }), i = (a) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", a), n ? n(a) : this.maybeReconnectOnOpen();
    }, s = yt(e, "error", i);
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
      yt(n, "ping", this.onping.bind(this)),
      yt(n, "data", this.ondata.bind(this)),
      yt(n, "error", this.onerror.bind(this)),
      yt(n, "close", this.onclose.bind(this)),
      // @ts-ignore
      yt(this.decoder, "decoded", this.ondecoded.bind(this))
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
function no(t, n) {
  typeof t == "object" && (n = t, t = void 0), n = n || {};
  const e = eh(t, n.path || "/socket.io"), r = e.source, o = e.id, i = e.path, s = rr[o] && i in rr[o].nsps, a = n.forceNew || n["force new connection"] || n.multiplex === !1 || s;
  let c;
  return a ? c = new Yi(r, n) : (rr[o] || (rr[o] = new Yi(r, n)), c = rr[o]), e.query && !n.query && (n.query = e.queryKey), c.socket(e.path, n);
}
Object.assign(no, {
  Manager: Yi,
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
const Je = /* @__PURE__ */ o0(xh);
function Dt() {
  return Dt = Object.assign ? Object.assign.bind() : function(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = arguments[n];
      for (var r in e) ({}).hasOwnProperty.call(e, r) && (t[r] = e[r]);
    }
    return t;
  }, Dt.apply(null, arguments);
}
function _e(t) {
  "@babel/helpers - typeof";
  return _e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, _e(t);
}
var ph = Symbol.for("react.element"), mh = Symbol.for("react.transitional.element"), gh = Symbol.for("react.fragment");
function vh(t) {
  return (
    // Base object type
    t && _e(t) === "object" && // React Element type
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
  if (_e(t) != "object" || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var r = e.call(t, n);
    if (_e(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(t);
}
function Xl(t) {
  var n = wh(t, "string");
  return _e(n) == "symbol" ? n : n + "";
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
  return t && _e(t) === "object" && Wa(t.nativeElement) ? t.nativeElement : Wa(t) ? t : null;
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
var Xa;
function Ch() {
  if (Xa) return Se;
  Xa = 1;
  var t = Symbol.for("react.element"), n = Symbol.for("react.portal"), e = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), l = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g;
  g = Symbol.for("react.module.reference");
  function x(h) {
    if (typeof h == "object" && h !== null) {
      var E = h.$$typeof;
      switch (E) {
        case t:
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
        case n:
          return E;
      }
    }
  }
  return Se.ContextConsumer = s, Se.ContextProvider = i, Se.Element = t, Se.ForwardRef = c, Se.Fragment = e, Se.Lazy = l, Se.Memo = d, Se.Portal = n, Se.Profiler = o, Se.StrictMode = r, Se.Suspense = u, Se.SuspenseList = f, Se.isAsyncMode = function() {
    return !1;
  }, Se.isConcurrentMode = function() {
    return !1;
  }, Se.isContextConsumer = function(h) {
    return x(h) === s;
  }, Se.isContextProvider = function(h) {
    return x(h) === i;
  }, Se.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === t;
  }, Se.isForwardRef = function(h) {
    return x(h) === c;
  }, Se.isFragment = function(h) {
    return x(h) === e;
  }, Se.isLazy = function(h) {
    return x(h) === l;
  }, Se.isMemo = function(h) {
    return x(h) === d;
  }, Se.isPortal = function(h) {
    return x(h) === n;
  }, Se.isProfiler = function(h) {
    return x(h) === o;
  }, Se.isStrictMode = function(h) {
    return x(h) === r;
  }, Se.isSuspense = function(h) {
    return x(h) === u;
  }, Se.isSuspenseList = function(h) {
    return x(h) === f;
  }, Se.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === e || h === o || h === r || h === u || h === f || h === v || typeof h == "object" && h !== null && (h.$$typeof === l || h.$$typeof === d || h.$$typeof === i || h.$$typeof === s || h.$$typeof === c || h.$$typeof === g || h.getModuleId !== void 0);
  }, Se.typeOf = x, Se;
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
var Ya;
function Ah() {
  return Ya || (Ya = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Symbol.for("react.element"), n = Symbol.for("react.portal"), e = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), l = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g = !1, x = !1, h = !1, E = !1, w = !1, m;
    m = Symbol.for("react.module.reference");
    function C(z) {
      return !!(typeof z == "string" || typeof z == "function" || z === e || z === o || w || z === r || z === u || z === f || E || z === v || g || x || h || typeof z == "object" && z !== null && (z.$$typeof === l || z.$$typeof === d || z.$$typeof === i || z.$$typeof === s || z.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      z.$$typeof === m || z.getModuleId !== void 0));
    }
    function y(z) {
      if (typeof z == "object" && z !== null) {
        var Qe = z.$$typeof;
        switch (Qe) {
          case t:
            var Oe = z.type;
            switch (Oe) {
              case e:
              case o:
              case r:
              case u:
              case f:
                return Oe;
              default:
                var ft = Oe && Oe.$$typeof;
                switch (ft) {
                  case a:
                  case s:
                  case c:
                  case l:
                  case d:
                  case i:
                    return ft;
                  default:
                    return Qe;
                }
            }
          case n:
            return Qe;
        }
      }
    }
    var O = s, A = i, L = t, F = c, Y = e, re = l, G = d, B = n, W = o, H = r, ee = u, Z = f, J = !1, Q = !1;
    function se(z) {
      return J || (J = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function oe(z) {
      return Q || (Q = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function K(z) {
      return y(z) === s;
    }
    function te(z) {
      return y(z) === i;
    }
    function he(z) {
      return typeof z == "object" && z !== null && z.$$typeof === t;
    }
    function ue(z) {
      return y(z) === c;
    }
    function me(z) {
      return y(z) === e;
    }
    function I(z) {
      return y(z) === l;
    }
    function j(z) {
      return y(z) === d;
    }
    function k(z) {
      return y(z) === n;
    }
    function N(z) {
      return y(z) === o;
    }
    function S(z) {
      return y(z) === r;
    }
    function D(z) {
      return y(z) === u;
    }
    function xe(z) {
      return y(z) === f;
    }
    we.ContextConsumer = O, we.ContextProvider = A, we.Element = L, we.ForwardRef = F, we.Fragment = Y, we.Lazy = re, we.Memo = G, we.Portal = B, we.Profiler = W, we.StrictMode = H, we.Suspense = ee, we.SuspenseList = Z, we.isAsyncMode = se, we.isConcurrentMode = oe, we.isContextConsumer = K, we.isContextProvider = te, we.isElement = he, we.isForwardRef = ue, we.isFragment = me, we.isLazy = I, we.isMemo = j, we.isPortal = k, we.isProfiler = N, we.isStrictMode = S, we.isSuspense = D, we.isSuspenseList = xe, we.isValidElementType = C, we.typeOf = y;
  }()), we;
}
var $a;
function Th() {
  return $a || ($a = 1, process.env.NODE_ENV === "production" ? Dr.exports = Ch() : Dr.exports = Ah()), Dr.exports;
}
var yi = Th();
function Yl(t, n, e) {
  var r = _.useRef({});
  return (!("value" in r.current) || e(r.current.condition, n)) && (r.current.value = t(), r.current.condition = n), r.current.value;
}
var Oh = Number(n0.split(".")[0]), $l = function(n, e) {
  typeof n == "function" ? n(e) : _e(n) === "object" && n && "current" in n && (n.current = e);
}, Rh = function() {
  for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++)
    e[r] = arguments[r];
  var o = e.filter(Boolean);
  return o.length <= 1 ? o[0] : function(i) {
    e.forEach(function(s) {
      $l(s, i);
    });
  };
}, kh = function(n) {
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
var Ph = function(n) {
  if (n && Gl(n)) {
    var e = n;
    return e.props.propertyIsEnumerable("ref") ? e.props.ref : e.ref;
  }
  return null;
};
function Ct(t, n) {
  if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function Ga(t, n) {
  for (var e = 0; e < n.length; e++) {
    var r = n[e];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, Xl(r.key), r);
  }
}
function At(t, n, e) {
  return n && Ga(t.prototype, n), e && Ga(t, e), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t;
}
function Gi(t, n) {
  return Gi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, r) {
    return e.__proto__ = r, e;
  }, Gi(t, n);
}
function _r(t, n) {
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
function yn(t) {
  if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Kl(t, n) {
  if (n && (_e(n) == "object" || typeof n == "function")) return n;
  if (n !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return yn(t);
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
function qt(t) {
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
var bo = function(n) {
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
bo.cancel = function(t) {
  var n = $o.get(t);
  return eu(t), Ql(n);
};
process.env.NODE_ENV !== "production" && (bo.ids = function() {
  return $o;
});
function tu(t) {
  if (Array.isArray(t)) return t;
}
function jh(t, n) {
  var e = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (e != null) {
    var r, o, i, s, a = [], c = !0, u = !1;
    try {
      if (i = (e = e.call(t)).next, n === 0) {
        if (Object(e) !== e) return;
        c = !1;
      } else for (; !(c = (r = i.call(e)).done) && (a.push(r.value), a.length !== n); c = !0) ;
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
function ce(t, n) {
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
function Wt() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Lh(t, n) {
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
var Za = "data-rc-order", Ja = "data-rc-priority", Mh = "rc-util-key", Zi = /* @__PURE__ */ new Map();
function ru() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.mark;
  return n ? n.startsWith("data-") ? n : "data-".concat(n) : Mh;
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
  if (!Wt())
    return null;
  var e = n.csp, r = n.prepend, o = n.priority, i = o === void 0 ? 0 : o, s = Dh(r), a = s === "prependQueue", c = document.createElement("style");
  c.setAttribute(Za, s), a && i && c.setAttribute(Ja, "".concat(i)), e != null && e.nonce && (c.nonce = e == null ? void 0 : e.nonce), c.innerHTML = t;
  var u = Go(n), f = u.firstChild;
  if (r) {
    if (a) {
      var d = (n.styles || ea(u)).filter(function(l) {
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
  if (!e || !Lh(document, e)) {
    var r = ou("", n), o = r.parentNode;
    Zi.set(t, o), t.removeChild(r);
  }
}
function bn(t, n) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Go(e), o = ea(r), i = V(V({}, e), {}, {
    styles: o
  });
  Bh(r, i);
  var s = iu(n, i);
  if (s) {
    var a, c;
    if ((a = i.csp) !== null && a !== void 0 && a.nonce && s.nonce !== ((c = i.csp) === null || c === void 0 ? void 0 : c.nonce)) {
      var u;
      s.nonce = (u = i.csp) === null || u === void 0 ? void 0 : u.nonce;
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
  return o(t, n);
}
var Vh = "%";
function Ji(t) {
  return t.join(Vh);
}
var Hh = /* @__PURE__ */ function() {
  function t(n) {
    Ct(this, t), q(this, "instanceId", void 0), q(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = n;
  }
  return At(t, [{
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
}(), zn = "data-token-hash", wt = "data-css-hash", Uh = "data-cache-path", Kt = "__cssinjs_instance__";
function qh() {
  var t = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var n = document.body.querySelectorAll("style[".concat(wt, "]")) || [], e = document.head.firstChild;
    Array.from(n).forEach(function(o) {
      o[Kt] = o[Kt] || t, o[Kt] === t && document.head.insertBefore(o, e);
    });
    var r = {};
    Array.from(document.querySelectorAll("style[".concat(wt, "]"))).forEach(function(o) {
      var i = o.getAttribute(wt);
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
var Cr = /* @__PURE__ */ _.createContext({
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
    Ct(this, t), q(this, "cache", void 0), q(this, "keys", void 0), q(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return At(t, [{
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
  }]), t;
}();
q(ta, "MAX_CACHE_SIZE", 20);
q(ta, "MAX_CACHE_OFFSET", 5);
var Qa = 0, au = /* @__PURE__ */ function() {
  function t(n) {
    Ct(this, t), q(this, "derivatives", void 0), q(this, "id", void 0), this.derivatives = Array.isArray(n) ? n : [n], this.id = Qa, n.length === 0 && Zs(n.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), Qa += 1;
  }
  return At(t, [{
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
    n += e, r instanceof au ? n += r.id : r && _e(r) === "object" ? n += dr(r) : n += r;
  }), n = pr(n), ec.set(t, n)), n;
}
function tc(t, n) {
  return pr("".concat(n, "_").concat(dr(t)));
}
var es = Wt();
function So(t) {
  return typeof t == "number" ? "".concat(t, "px") : t;
}
function wo(t, n, e) {
  var r, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (i)
    return t;
  var s = V(V({}, o), {}, (r = {}, q(r, zn, n), q(r, wt, e), r)), a = Object.keys(s).map(function(c) {
    var u = s[c];
    return u ? "".concat(c, '="').concat(u, '"') : null;
  }).filter(function(c) {
    return c;
  }).join(" ");
  return "<style ".concat(a, ">").concat(t, "</style>");
}
var ro = function(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(e ? "".concat(e, "-") : "").concat(n).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, $h = function(n, e, r) {
  return Object.keys(n).length ? ".".concat(e).concat(r != null && r.scope ? ".".concat(r.scope) : "", "{").concat(Object.entries(n).map(function(o) {
    var i = ce(o, 2), s = i[0], a = i[1];
    return "".concat(s, ":").concat(a, ";");
  }).join(""), "}") : "";
}, cu = function(n, e, r) {
  var o = {}, i = {};
  return Object.entries(n).forEach(function(s) {
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
}, nc = process.env.NODE_ENV !== "test" && Wt() ? _.useLayoutEffect : _.useEffect, lu = function(n, e) {
  var r = _.useRef(!0);
  nc(function() {
    return n(r.current);
  }, e), nc(function() {
    return r.current = !1, function() {
      r.current = !0;
    };
  }, []);
}, Gh = V({}, _), rc = Gh.useInsertionEffect, Kh = function(n, e, r) {
  _.useMemo(n, r), lu(function() {
    return e(!0);
  }, r);
}, Zh = rc ? function(t, n, e) {
  return rc(function() {
    return t(), n();
  }, e);
} : Kh, Jh = V({}, _), Qh = Jh.useInsertionEffect, ex = function(n) {
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
function na(t, n, e, r, o) {
  var i = _.useContext(Cr), s = i.cache, a = [t].concat(qt(n)), c = Ji(a), u = nx([c]), f = ix(), d = function(x) {
    s.opUpdate(c, function(h) {
      var E = h || [void 0, void 0], w = ce(E, 2), m = w[0], C = m === void 0 ? 0 : m, y = w[1], O = y;
      process.env.NODE_ENV !== "production" && y && f && (r == null || r(O, f), O = null);
      var A = O || e(), L = [C, A];
      return x ? x(L) : L;
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
    return d(function(x) {
      var h = ce(x, 2), E = h[0], w = h[1];
      return g && E === 0 && (o == null || o(v)), [E + 1, w];
    }), function() {
      s.opUpdate(c, function(x) {
        var h = x || [], E = ce(h, 2), w = E[0], m = w === void 0 ? 0 : w, C = E[1], y = m - 1;
        return y === 0 ? (u(function() {
          (g || !s.opGet(c)) && (r == null || r(C, !1));
        }), null) : [m - 1, C];
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
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Qt(Cr), o = r.cache.instanceId, i = r.container, s = e.salt, a = s === void 0 ? "" : s, c = e.override, u = c === void 0 ? ax : c, f = e.formatToken, d = e.getComputedToken, l = e.cssVar, v = Yh(function() {
    return Object.assign.apply(Object, [{}].concat(qt(n)));
  }, n), g = dr(v), x = dr(u), h = l ? dr(l) : "", E = na(uu, [a, t.id, g, x, h], function() {
    var w, m = d ? d(v, u, t) : hx(v, u, t, f), C = V({}, m), y = "";
    if (l) {
      var O = cu(m, l.key, {
        prefix: l.prefix,
        ignore: l.ignore,
        unitless: l.unitless,
        preserve: l.preserve
      }), A = ce(O, 2);
      m = A[0], y = A[1];
    }
    var L = tc(m, a);
    m._tokenKey = L, C._tokenKey = tc(C, a);
    var F = (w = l == null ? void 0 : l.key) !== null && w !== void 0 ? w : L;
    m._themeKey = F, lx(F);
    var Y = "".concat(cx, "-").concat(pr(L));
    return m._hashId = Y, [m, Y, C, y, (l == null ? void 0 : l.key) || ""];
  }, function(w) {
    dx(w[0]._themeKey, o);
  }, function(w) {
    var m = ce(w, 4), C = m[0], y = m[3];
    if (l && y) {
      var O = bn(y, pr("css-variables-".concat(C._themeKey)), {
        mark: wt,
        prepend: "queue",
        attachTo: i,
        priority: -999
      });
      O[Kt] = o, O.setAttribute(zn, C._themeKey);
    }
  });
  return E;
}
var px = function(n, e, r) {
  var o = ce(n, 5), i = o[2], s = o[3], a = o[4], c = r || {}, u = c.plain;
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
function pu(t) {
  return t.trim();
}
function oo(t, n, e) {
  return t.replace(n, e);
}
function Sx(t, n, e) {
  return t.indexOf(n, e);
}
function In(t, n) {
  return t.charCodeAt(n) | 0;
}
function Vn(t, n, e) {
  return t.slice(n, e);
}
function Nt(t) {
  return t.length;
}
function wx(t) {
  return t.length;
}
function Fr(t, n) {
  return n.push(t), t;
}
var Ko = 1, Hn = 1, mu = 0, gt = 0, Ve = 0, $n = "";
function oa(t, n, e, r, o, i, s, a) {
  return { value: t, root: n, parent: e, type: r, props: o, children: i, line: Ko, column: Hn, length: s, return: "", siblings: a };
}
function Ex() {
  return Ve;
}
function _x() {
  return Ve = gt > 0 ? In($n, --gt) : 0, Hn--, Ve === 10 && (Hn = 1, Ko--), Ve;
}
function Et() {
  return Ve = gt < mu ? In($n, gt++) : 0, Hn++, Ve === 10 && (Hn = 1, Ko++), Ve;
}
function Zt() {
  return In($n, gt);
}
function io() {
  return gt;
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
  return Ko = Hn = 1, mu = Nt($n = t), gt = 0, [];
}
function Ax(t) {
  return $n = "", t;
}
function wi(t) {
  return pu(Zo(gt - 1, ns(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function Tx(t) {
  for (; (Ve = Zt()) && Ve < 33; )
    Et();
  return gr(t) > 2 || gr(Ve) > 3 ? "" : " ";
}
function Ox(t, n) {
  for (; --n && Et() && !(Ve < 48 || Ve > 102 || Ve > 57 && Ve < 65 || Ve > 70 && Ve < 97); )
    ;
  return Zo(t, io() + (n < 6 && Zt() == 32 && Et() == 32));
}
function ns(t) {
  for (; Et(); )
    switch (Ve) {
      // ] ) " '
      case t:
        return gt;
      // " '
      case 34:
      case 39:
        t !== 34 && t !== 39 && ns(Ve);
        break;
      // (
      case 40:
        t === 41 && ns(t);
        break;
      // \
      case 92:
        Et();
        break;
    }
  return gt;
}
function Rx(t, n) {
  for (; Et() && t + Ve !== 57; )
    if (t + Ve === 84 && Zt() === 47)
      break;
  return "/*" + Zo(n, gt - 1) + "*" + ra(t === 47 ? t : Et());
}
function kx(t) {
  for (; !gr(Zt()); )
    Et();
  return Zo(t, gt);
}
function Px(t) {
  return Ax(so("", null, null, null, [""], t = Cx(t), 0, [0], t));
}
function so(t, n, e, r, o, i, s, a, c) {
  for (var u = 0, f = 0, d = s, l = 0, v = 0, g = 0, x = 1, h = 1, E = 1, w = 0, m = "", C = o, y = i, O = r, A = m; h; )
    switch (g = w, w = Et()) {
      // (
      case 40:
        if (g != 108 && In(A, d - 1) == 58) {
          Sx(A += oo(wi(w), "&", "&\f"), "&\f", xu(u ? a[u - 1] : 0)) != -1 && (E = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        A += wi(w);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        A += Tx(g);
        break;
      // \
      case 92:
        A += Ox(io() - 1, 7);
        continue;
      // /
      case 47:
        switch (Zt()) {
          case 42:
          case 47:
            Fr(Ix(Rx(Et(), io()), n, e, c), c), (gr(g || 1) == 5 || gr(Zt() || 1) == 5) && Nt(A) && Vn(A, -1, void 0) !== " " && (A += " ");
            break;
          default:
            A += "/";
        }
        break;
      // {
      case 123 * x:
        a[u++] = Nt(A) * E;
      // } ; \0
      case 125 * x:
      case 59:
      case 0:
        switch (w) {
          // \0 }
          case 0:
          case 125:
            h = 0;
          // ;
          case 59 + f:
            E == -1 && (A = oo(A, /\f/g, "")), v > 0 && (Nt(A) - d || x === 0 && g === 47) && Fr(v > 32 ? ic(A + ";", r, e, d - 1, c) : ic(oo(A, " ", "") + ";", r, e, d - 2, c), c);
            break;
          // @ ;
          case 59:
            A += ";";
          // { rule/at-rule
          default:
            if (Fr(O = oc(A, n, e, u, f, o, a, m, C = [], y = [], d, i), i), w === 123)
              if (f === 0)
                so(A, n, O, O, C, i, d, a, y);
              else {
                switch (l) {
                  // c(ontainer)
                  case 99:
                    if (In(A, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (In(A, 2) === 97) break;
                  default:
                    f = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                f ? so(t, O, O, r && Fr(oc(t, O, O, 0, 0, o, a, m, o, C = [], d, y), y), o, y, d, a, r ? C : y) : so(A, O, O, O, [""], y, 0, a, y);
              }
        }
        u = f = v = 0, x = E = 1, m = A = "", d = s;
        break;
      // :
      case 58:
        d = 1 + Nt(A), v = g;
      default:
        if (x < 1) {
          if (w == 123)
            --x;
          else if (w == 125 && x++ == 0 && _x() == 125)
            continue;
        }
        switch (A += ra(w), w * x) {
          // &
          case 38:
            E = f > 0 ? 1 : (A += "\f", -1);
            break;
          // ,
          case 44:
            a[u++] = (Nt(A) - 1) * E, E = 1;
            break;
          // @
          case 64:
            Zt() === 45 && (A += wi(Et())), l = Zt(), f = d = Nt(m = A += kx(io())), w++;
            break;
          // -
          case 45:
            g === 45 && Nt(A) == 2 && (x = 0);
        }
    }
  return i;
}
function oc(t, n, e, r, o, i, s, a, c, u, f, d) {
  for (var l = o - 1, v = o === 0 ? i : [""], g = wx(v), x = 0, h = 0, E = 0; x < r; ++x)
    for (var w = 0, m = Vn(t, l + 1, l = xu(h = s[x])), C = t; w < g; ++w)
      (C = pu(h > 0 ? v[w] + " " + m : oo(m, /&\f/g, v[w]))) && (c[E++] = C);
  return oa(t, n, e, o === 0 ? du : a, c, u, f, d);
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
      if (!Nt(t.value = t.props.join(","))) return "";
  }
  return Nt(e = rs(t.children, r)) ? t.return = t.value + "{" + e + "}" : "";
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
}, Lx = function(n, e, r) {
  n === "animation" && r.hashId && e !== "none" && gu("You seem to be using hashed animation '".concat(e, "', in which case 'animationName' with Keyframe as value is recommended."), r);
}, sc = "data-ant-cssinjs-cache-path", vu = "_FILE_STYLE__", Sn, yu = !0;
function Mx() {
  if (!Sn && (Sn = {}, Wt())) {
    var t = document.createElement("div");
    t.className = sc, t.style.position = "fixed", t.style.visibility = "hidden", t.style.top = "-9999px", document.body.appendChild(t);
    var n = getComputedStyle(t).content || "";
    n = n.replace(/^"/, "").replace(/"$/, ""), n.split(";").forEach(function(o) {
      var i = o.split(":"), s = ce(i, 2), a = s[0], c = s[1];
      Sn[a] = c;
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
  return Mx(), !!Sn[t];
}
function Bx(t) {
  var n = Sn[t], e = null;
  if (n && Wt())
    if (yu)
      e = vu;
    else {
      var r = document.querySelector("style[".concat(wt, '="').concat(Sn[t], '"]'));
      r ? e = r.innerHTML : delete Sn[t];
    }
  return [e, n];
}
var bu = "_skip_check_", Su = "_multi_value_";
function ao(t) {
  var n = rs(Px(t), Nx);
  return n.replace(/\{%%%\:[^;];}/g, ";");
}
function Fx(t) {
  return _e(t) === "object" && t && (bu in t || Su in t);
}
function ac(t, n, e) {
  if (!n)
    return t;
  var r = ".".concat(n), o = e === "low" ? ":where(".concat(r, ")") : r, i = t.split(",").map(function(s) {
    var a, c = s.trim().split(/\s+/), u = c[0] || "", f = ((a = u.match(/^\w+/)) === null || a === void 0 ? void 0 : a[0]) || "";
    return u = "".concat(f).concat(o).concat(u.slice(f.length)), [u].concat(qt(c.slice(1))).join(" ");
  });
  return i.join(",");
}
var zx = function t(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = r.root, i = r.injectHash, s = r.parentSelectors, a = e.hashId, c = e.layer, u = e.path, f = e.hashPriority, d = e.transformers, l = d === void 0 ? [] : d, v = e.linters, g = v === void 0 ? [] : v, x = "", h = {};
  function E(C) {
    var y = C.getName(a);
    if (!h[y]) {
      var O = t(C.style, e, {
        root: !1,
        parentSelectors: s
      }), A = ce(O, 1), L = A[0];
      h[y] = "@keyframes ".concat(C.getName(a)).concat(L);
    }
  }
  function w(C) {
    var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return C.forEach(function(O) {
      Array.isArray(O) ? w(O, y) : O && y.push(O);
    }), y;
  }
  var m = w(Array.isArray(n) ? n : [n]);
  return m.forEach(function(C) {
    var y = typeof C == "string" && !o ? {} : C;
    if (typeof y == "string")
      x += "".concat(y, `
`);
    else if (y._keyframe)
      E(y);
    else {
      var O = l.reduce(function(A, L) {
        var F;
        return (L == null || (F = L.visit) === null || F === void 0 ? void 0 : F.call(L, A)) || A;
      }, y);
      Object.keys(O).forEach(function(A) {
        var L = O[A];
        if (_e(L) === "object" && L && (A !== "animationName" || !L._keyframe) && !Fx(L)) {
          var F = !1, Y = A.trim(), re = !1;
          (o || i) && a ? Y.startsWith("@") ? F = !0 : Y === "&" ? Y = ac("", a, f) : Y = ac(A, a, f) : o && !a && (Y === "&" || Y === "") && (Y = "", re = !0);
          var G = t(L, e, {
            root: re,
            injectHash: F,
            parentSelectors: [].concat(qt(s), [Y])
          }), B = ce(G, 2), W = B[0], H = B[1];
          h = V(V({}, h), H), x += "".concat(Y).concat(W);
        } else {
          let J = function(Q, se) {
            process.env.NODE_ENV !== "production" && (_e(L) !== "object" || !(L != null && L[bu])) && [jx, Lx].concat(qt(g)).forEach(function(te) {
              return te(Q, se, {
                path: u,
                hashId: a,
                parentSelectors: s
              });
            });
            var oe = Q.replace(/[A-Z]/g, function(te) {
              return "-".concat(te.toLowerCase());
            }), K = se;
            !mx[Q] && typeof K == "number" && K !== 0 && (K = "".concat(K, "px")), Q === "animationName" && se !== null && se !== void 0 && se._keyframe && (E(se), K = se.getName(a)), x += "".concat(oe, ":").concat(K, ";");
          };
          var ee, Z = (ee = L == null ? void 0 : L.value) !== null && ee !== void 0 ? ee : L;
          _e(L) === "object" && L !== null && L !== void 0 && L[Su] && Array.isArray(Z) ? Z.forEach(function(Q) {
            J(A, Q);
          }) : J(A, Z);
        }
      });
    }
  }), o ? c && (x && (x = "@layer ".concat(c.name, " {").concat(x, "}")), c.dependencies && (h["@layer ".concat(c.name)] = c.dependencies.map(function(C) {
    return "@layer ".concat(C, ", ").concat(c.name, ";");
  }).join(`
`))) : x = "{".concat(x, "}"), [x, h];
};
function wu(t, n) {
  return pr("".concat(t.join("%")).concat(n));
}
function Vx() {
  return null;
}
var Eu = "style";
function os(t, n) {
  var e = t.token, r = t.path, o = t.hashId, i = t.layer, s = t.nonce, a = t.clientOnly, c = t.order, u = c === void 0 ? 0 : c, f = _.useContext(Cr), d = f.autoClear, l = f.mock, v = f.defaultCache, g = f.hashPriority, x = f.container, h = f.ssrInline, E = f.transformers, w = f.linters, m = f.cache, C = f.layer, y = e._tokenKey, O = [y];
  C && O.push("layer"), O.push.apply(O, qt(r));
  var A = es;
  process.env.NODE_ENV !== "production" && l !== void 0 && (A = l === "client");
  var L = na(
    Eu,
    O,
    // Create cache if needed
    function() {
      var B = O.join("|");
      if (Dx(B)) {
        var W = Bx(B), H = ce(W, 2), ee = H[0], Z = H[1];
        if (ee)
          return [ee, y, Z, {}, a, u];
      }
      var J = n(), Q = zx(J, {
        hashId: o,
        hashPriority: g,
        layer: C ? i : void 0,
        path: r.join("-"),
        transformers: E,
        linters: w
      }), se = ce(Q, 2), oe = se[0], K = se[1], te = ao(oe), he = wu(O, te);
      return [te, y, he, K, a, u];
    },
    // Remove cache if no need
    function(B, W) {
      var H = ce(B, 3), ee = H[2];
      (W || d) && es && su(ee, {
        mark: wt
      });
    },
    // Effect: Inject style here
    function(B) {
      var W = ce(B, 4), H = W[0];
      W[1];
      var ee = W[2], Z = W[3];
      if (A && H !== vu) {
        var J = {
          mark: wt,
          prepend: C ? !1 : "queue",
          attachTo: x,
          priority: u
        }, Q = typeof s == "function" ? s() : s;
        Q && (J.csp = {
          nonce: Q
        });
        var se = [], oe = [];
        Object.keys(Z).forEach(function(te) {
          te.startsWith("@layer") ? se.push(te) : oe.push(te);
        }), se.forEach(function(te) {
          bn(ao(Z[te]), "_layer-".concat(te), V(V({}, J), {}, {
            prepend: !0
          }));
        });
        var K = bn(H, ee, J);
        K[Kt] = m.instanceId, K.setAttribute(zn, y), process.env.NODE_ENV !== "production" && K.setAttribute(Uh, O.join("|")), oe.forEach(function(te) {
          bn(ao(Z[te]), "_effect-".concat(te), J);
        });
      }
    }
  ), F = ce(L, 3), Y = F[0], re = F[1], G = F[2];
  return function(B) {
    var W;
    if (!h || A || !v)
      W = /* @__PURE__ */ _.createElement(Vx, null);
    else {
      var H;
      W = /* @__PURE__ */ _.createElement("style", Dt({}, (H = {}, q(H, zn, re), q(H, wt, G), H), {
        dangerouslySetInnerHTML: {
          __html: Y
        }
      }));
    }
    return /* @__PURE__ */ _.createElement(_.Fragment, null, W, B);
  };
}
var Hx = function(n, e, r) {
  var o = ce(n, 6), i = o[0], s = o[1], a = o[2], c = o[3], u = o[4], f = o[5], d = r || {}, l = d.plain;
  if (u)
    return null;
  var v = i, g = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(f)
  };
  return v = wo(i, s, a, g, l), c && Object.keys(c).forEach(function(x) {
    if (!e[x]) {
      e[x] = !0;
      var h = ao(c[x]), E = wo(h, s, "_effect-".concat(x), g, l);
      x.startsWith("@layer") ? v = E + v : v += E;
    }
  }), [f, a, v];
}, _u = "cssVar", Ux = function(n, e) {
  var r = n.key, o = n.prefix, i = n.unitless, s = n.ignore, a = n.token, c = n.scope, u = c === void 0 ? "" : c, f = Qt(Cr), d = f.cache.instanceId, l = f.container, v = a._tokenKey, g = [].concat(qt(n.path), [r, u, v]), x = na(_u, g, function() {
    var h = e(), E = cu(h, r, {
      prefix: o,
      unitless: i,
      ignore: s,
      scope: u
    }), w = ce(E, 2), m = w[0], C = w[1], y = wu(g, C);
    return [m, C, y, r];
  }, function(h) {
    var E = ce(h, 3), w = E[2];
    es && su(w, {
      mark: wt
    });
  }, function(h) {
    var E = ce(h, 3), w = E[1], m = E[2];
    if (w) {
      var C = bn(w, m, {
        mark: wt,
        prepend: "queue",
        attachTo: l,
        priority: -999
      });
      C[Kt] = d, C.setAttribute(zn, r);
    }
  });
  return x;
}, qx = function(n, e, r) {
  var o = ce(n, 4), i = o[1], s = o[2], a = o[3], c = r || {}, u = c.plain;
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
  function t(n, e) {
    Ct(this, t), q(this, "name", void 0), q(this, "style", void 0), q(this, "_keyframe", !0), this.name = n, this.style = e;
  }
  return At(t, [{
    key: "getName",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return e ? "".concat(e, "-").concat(this.name) : this.name;
    }
  }]), t;
}();
function On(t) {
  return t.notSplit = !0, t;
}
On(["borderTop", "borderBottom"]), On(["borderTop"]), On(["borderBottom"]), On(["borderLeft", "borderRight"]), On(["borderLeft"]), On(["borderRight"]);
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
  return !t && typeof i == "number" ? a = [] : Array.isArray(t) ? a = qt(t) : a = V({}, t), r && e === void 0 && s.length === 1 ? delete a[i][s[0]] : a[i] = Au(a[i], s, e, r), a;
}
function Ei(t, n, e) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return n.length && r && e === void 0 && !is(t, n.slice(0, -1)) ? t : Au(t, n, e, r);
}
function Xx(t) {
  return _e(t) === "object" && t !== null && Object.getPrototypeOf(t) === Object.prototype;
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
      var c = new Set(a), u = is(o, s), f = Array.isArray(u);
      if (f || Xx(u)) {
        if (!c.has(u)) {
          c.add(u);
          var d = is(r, s);
          f ? r = Ei(r, s, []) : (!d || _e(d) !== "object") && (r = Ei(r, s, cc(u))), Yx(u).forEach(function(l) {
            i([].concat(qt(s), [l]), c);
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
process.env.NODE_ENV !== "production" && (sa = (t, n, e) => {
  tn(t, `[antd: ${n}] ${e}`), process.env.NODE_ENV === "test" && Gx();
});
const Ou = /* @__PURE__ */ _.createContext({}), Gn = process.env.NODE_ENV !== "production" ? (t) => {
  const {
    strict: n
  } = _.useContext(Ou), e = (r, o, i) => {
    if (!r)
      if (n === !1 && o === "deprecated") {
        const s = Vt;
        Vt || (Vt = {}), Vt[t] = Vt[t] || [], Vt[t].includes(i || "") || Vt[t].push(i || ""), s || console.warn("[antd] There exists deprecated usage in your code:", Vt);
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
let co = [];
const lc = () => co.reduce((t, n) => Object.assign(Object.assign({}, t), n), Qo.Modal);
function Zx(t) {
  if (t) {
    const n = Object.assign({}, t);
    return co.push(n), lc(), () => {
      co = co.filter((e) => e !== n), lc();
    };
  }
  Object.assign({}, Qo.Modal);
}
const Ru = /* @__PURE__ */ Fs(void 0), ku = "internalMark", Pu = (t) => {
  const {
    locale: n = {},
    children: e,
    _ANT_MARK__: r
  } = t;
  if (process.env.NODE_ENV !== "production") {
    const i = Gn("LocaleProvider");
    process.env.NODE_ENV !== "production" && i(r === ku, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  _.useEffect(() => Zx(n == null ? void 0 : n.Modal), [n]);
  const o = _.useMemo(() => Object.assign(Object.assign({}, n), {
    exist: !0
  }), [n]);
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
}), We = Math.round;
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
      n === 0 ? this._h = 0 : this._h = We(60 * (this.r === this.getMax() ? (this.g - this.b) / n + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / n + 2 : (this.r - this.g) / n + 4));
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
      r: We(i("r")),
      g: We(i("g")),
      b: We(i("b")),
      a: We(i("a") * 100) / 100
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
    const e = this._c(n), r = this.a + e.a * (1 - this.a), o = (i) => We((this[i] * this.a + e[i] * e.a * (1 - this.a)) / r);
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
      const i = We(this.a * 255).toString(16);
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
    const n = this.getHue(), e = We(this.getSaturation() * 100), r = We(this.getLightness() * 100);
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
      const l = We(r * 255);
      this.r = l, this.g = l, this.b = l;
    }
    let i = 0, s = 0, a = 0;
    const c = n / 60, u = (1 - Math.abs(2 * r - 1)) * e, f = u * (1 - Math.abs(c % 2 - 1));
    c >= 0 && c < 1 ? (i = u, s = f) : c >= 1 && c < 2 ? (i = f, s = u) : c >= 2 && c < 3 ? (s = u, a = f) : c >= 3 && c < 4 ? (s = f, a = u) : c >= 4 && c < 5 ? (i = f, a = u) : c >= 5 && c < 6 && (i = u, a = f);
    const d = r - u / 2;
    this.r = We((i + d) * 255), this.g = We((s + d) * 255), this.b = We((a + d) * 255);
  }
  fromHsv({
    h: n,
    s: e,
    v: r,
    a: o
  }) {
    this._h = n % 360, this._s = e, this._v = r, this.a = typeof o == "number" ? o : 1;
    const i = We(r * 255);
    if (this.r = i, this.g = i, this.b = i, e <= 0)
      return;
    const s = n / 60, a = Math.floor(s), c = s - a, u = We(r * (1 - e) * 255), f = We(r * (1 - e * c) * 255), d = We(r * (1 - e * (1 - c)) * 255);
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
      o.includes("%") ? We(r / 100 * 255) : r
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
function dc(t, n, e) {
  var r;
  return Math.round(t.h) >= 60 && Math.round(t.h) <= 240 ? r = e ? Math.round(t.h) - zr * n : Math.round(t.h) + zr * n : r = e ? Math.round(t.h) + zr * n : Math.round(t.h) - zr * n, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
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
  return n.theme === "dark" ? tp.map(function(u) {
    var f = u.index, d = u.amount;
    return new Be(n.backgroundColor || "#141414").mix(e[f], d).toHexString();
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
    colorBgBase: u,
    colorTextBase: f
  } = t, d = e(c), l = e(o), v = e(i), g = e(s), x = e(a), h = r(u, f), E = t.colorLink || t.colorInfo, w = e(E), m = new Be(g[1]).mix(new Be(g[3]), 50).toHexString();
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
    colorInfoBg: x[1],
    colorInfoBgHover: x[2],
    colorInfoBorder: x[3],
    colorInfoBorderHover: x[4],
    colorInfoHover: x[4],
    colorInfo: x[6],
    colorInfoActive: x[7],
    colorInfoTextHover: x[8],
    colorInfoText: x[9],
    colorInfoTextActive: x[10],
    colorLinkHover: w[4],
    colorLink: w[6],
    colorLinkActive: w[7],
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
  const n = ap(t), e = n.map((f) => f.size), r = n.map((f) => f.lineHeight), o = e[1], i = e[0], s = e[2], a = r[1], c = r[0], u = r[2];
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
const xt = (t, n) => new Be(t).setA(n).toRgbString(), sr = (t, n) => new Be(t).darken(n).toHexString(), up = (t) => {
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
    colorText: xt(r, 0.88),
    colorTextSecondary: xt(r, 0.65),
    colorTextTertiary: xt(r, 0.45),
    colorTextQuaternary: xt(r, 0.25),
    colorFill: xt(r, 0.15),
    colorFillSecondary: xt(r, 0.06),
    colorFillTertiary: xt(r, 0.04),
    colorFillQuaternary: xt(r, 0.02),
    colorBgSolid: xt(r, 1),
    colorBgSolidHover: xt(r, 0.75),
    colorBgSolidActive: xt(r, 0.95),
    colorBgLayout: sr(e, 4),
    colorBgContainer: sr(e, 0),
    colorBgElevated: sr(e, 0),
    colorBgSpotlight: xt(r, 0.85),
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
const Lu = Qi(dp), vs = {
  token: vr,
  override: {
    override: vr
  },
  hashed: !0
}, Mu = /* @__PURE__ */ Fe.createContext(vs), ys = "ant", aa = "anticon", hp = (t, n) => n || (t ? `${ys}-${t}` : ys), en = /* @__PURE__ */ _.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: hp,
  iconPrefixCls: aa
}), {
  Consumer: Av
} = en, pc = {};
function Du(t) {
  const n = _.useContext(en), {
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
    const c = new Be(s), u = yr(c.toRgbString());
    e[`${a}-color`] = r(c), e[`${a}-color-disabled`] = u[1], e[`${a}-color-hover`] = u[4], e[`${a}-color-active`] = u[6], e[`${a}-color-outline`] = c.clone().setA(0.2).toRgbString(), e[`${a}-color-deprecated-bg`] = u[0], e[`${a}-color-deprecated-border`] = u[2];
  };
  if (n.primaryColor) {
    o(n.primaryColor, "primary");
    const s = new Be(n.primaryColor), a = yr(s.toRgbString());
    a.forEach((u, f) => {
      e[`primary-${f + 1}`] = u;
    }), e["primary-color-deprecated-l-35"] = r(s, (u) => u.lighten(35)), e["primary-color-deprecated-l-20"] = r(s, (u) => u.lighten(20)), e["primary-color-deprecated-t-20"] = r(s, (u) => u.tint(20)), e["primary-color-deprecated-t-50"] = r(s, (u) => u.tint(50)), e["primary-color-deprecated-f-12"] = r(s, (u) => u.setA(u.a * 0.12));
    const c = new Be(a[0]);
    e["primary-color-active-deprecated-f-30"] = r(c, (u) => u.setA(u.a * 0.3)), e["primary-color-active-deprecated-d-02"] = r(c, (u) => u.darken(2));
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
  Wt() ? bn(e, `${xp}-dynamic-theme`) : process.env.NODE_ENV !== "production" && Jo(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const bs = /* @__PURE__ */ _.createContext(!1), gp = (t) => {
  let {
    children: n,
    disabled: e
  } = t;
  const r = _.useContext(bs);
  return /* @__PURE__ */ _.createElement(bs.Provider, {
    value: e ?? r
  }, n);
}, br = /* @__PURE__ */ _.createContext(void 0), vp = (t) => {
  let {
    children: n,
    size: e
  } = t;
  const r = _.useContext(br);
  return /* @__PURE__ */ _.createElement(br.Provider, {
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
var Bu = /* @__PURE__ */ At(function t() {
  Ct(this, t);
}), Fu = "CALC_UNIT", bp = new RegExp(Fu, "g");
function Ti(t) {
  return typeof t == "number" ? "".concat(t).concat(Fu) : t;
}
var Sp = /* @__PURE__ */ function(t) {
  _r(e, t);
  var n = Yo(e);
  function e(r, o) {
    var i;
    Ct(this, e), i = n.call(this), q(yn(i), "result", ""), q(yn(i), "unitlessCssVar", void 0), q(yn(i), "lowPriority", void 0);
    var s = _e(r);
    return i.unitlessCssVar = o, r instanceof e ? i.result = "(".concat(r.result, ")") : s === "number" ? i.result = Ti(r) : s === "string" && (i.result = r), i;
  }
  return At(e, [{
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
}(Bu), wp = /* @__PURE__ */ function(t) {
  _r(e, t);
  var n = Yo(e);
  function e(r) {
    var o;
    return Ct(this, e), o = n.call(this), q(yn(o), "result", 0), r instanceof e ? o.result = r.result : typeof r == "number" && (o.result = r), o;
  }
  return At(e, [{
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
  var n = _.useRef();
  n.current = t;
  var e = _.useCallback(function() {
    for (var r, o = arguments.length, i = new Array(o), s = 0; s < o; s++)
      i[s] = arguments[s];
    return (r = n.current) === null || r === void 0 ? void 0 : r.call.apply(r, [n].concat(i));
  }, []);
  return e;
}
function ws(t) {
  var n = _.useRef(!1), e = _.useState(t), r = ce(e, 2), o = r[0], i = r[1];
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
function gc(t, n, e, r) {
  var o = V({}, n[t]);
  if (r != null && r.deprecatedTokens) {
    var i = r.deprecatedTokens;
    i.forEach(function(a) {
      var c = ce(a, 2), u = c[0], f = c[1];
      if (process.env.NODE_ENV !== "production" && tn(!(o != null && o[u]), "Component Token `".concat(String(u), "` of ").concat(String(t), " is deprecated. Please use `").concat(String(f), "` instead.")), o != null && o[u] || o != null && o[f]) {
        var d;
        (d = o[f]) !== null && d !== void 0 || (o[f] = o == null ? void 0 : o[u]);
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
  function t() {
    Ct(this, t), q(this, "map", /* @__PURE__ */ new Map()), q(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), q(this, "nextID", 0), q(this, "lastAccessBeat", /* @__PURE__ */ new Map()), q(this, "accessBeat", 0);
  }
  return At(t, [{
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
var kp = function() {
  return {};
};
function Pp(t) {
  var n = t.useCSP, e = n === void 0 ? kp : n, r = t.useToken, o = t.usePrefix, i = t.getResetStyles, s = t.getCommonStyle, a = t.getCompUnitless;
  function c(l, v, g, x) {
    var h = Array.isArray(l) ? l[0] : l;
    function E(L) {
      return "".concat(String(h)).concat(L.slice(0, 1).toUpperCase()).concat(L.slice(1));
    }
    var w = (x == null ? void 0 : x.unitless) || {}, m = typeof a == "function" ? a(l) : {}, C = V(V({}, m), {}, q({}, E("zIndexPopup"), !0));
    Object.keys(w).forEach(function(L) {
      C[E(L)] = w[L];
    });
    var y = V(V({}, x), {}, {
      unitless: C,
      prefixToken: E
    }), O = f(l, v, g, y), A = u(h, g, y);
    return function(L) {
      var F = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : L, Y = O(L, F), re = ce(Y, 2), G = re[1], B = A(F), W = ce(B, 2), H = W[0], ee = W[1];
      return [H, G, ee];
    };
  }
  function u(l, v, g) {
    var x = g.unitless, h = g.injectStyle, E = h === void 0 ? !0 : h, w = g.prefixToken, m = g.ignore, C = function(A) {
      var L = A.rootCls, F = A.cssVar, Y = F === void 0 ? {} : F, re = r(), G = re.realToken;
      return Ux({
        path: [l],
        prefix: Y.prefix,
        key: Y.key,
        unitless: x,
        ignore: m,
        token: G,
        scope: L
      }, function() {
        var B = yc(l, G, v), W = gc(l, G, B, {
          deprecatedTokens: g == null ? void 0 : g.deprecatedTokens
        });
        return Object.keys(B).forEach(function(H) {
          W[w(H)] = W[H], delete W[H];
        }), W;
      }), null;
    }, y = function(A) {
      var L = r(), F = L.cssVar;
      return [function(Y) {
        return E && F ? /* @__PURE__ */ Fe.createElement(Fe.Fragment, null, /* @__PURE__ */ Fe.createElement(C, {
          rootCls: A,
          cssVar: F,
          component: l
        }), Y) : Y;
      }, F == null ? void 0 : F.key];
    };
    return y;
  }
  function f(l, v, g) {
    var x = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, h = Array.isArray(l) ? l : [l, l], E = ce(h, 1), w = E[0], m = h.join("-"), C = t.layer || {
      name: "antd"
    };
    return function(y) {
      var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : y, A = r(), L = A.theme, F = A.realToken, Y = A.hashId, re = A.token, G = A.cssVar, B = o(), W = B.rootPrefixCls, H = B.iconPrefixCls, ee = e(), Z = G ? "css" : "js", J = Rp(function() {
        var he = /* @__PURE__ */ new Set();
        return G && Object.keys(x.unitless || {}).forEach(function(ue) {
          he.add(ro(ue, G.prefix)), he.add(ro(ue, mc(w, G.prefix)));
        }), Ep(Z, he);
      }, [Z, w, G == null ? void 0 : G.prefix]), Q = Ap(Z), se = Q.max, oe = Q.min, K = {
        theme: L,
        token: re,
        hashId: Y,
        nonce: function() {
          return ee.nonce;
        },
        clientOnly: x.clientOnly,
        layer: C,
        // antd is always at top of styles
        order: x.order || -999
      };
      typeof i == "function" && os(V(V({}, K), {}, {
        clientOnly: !1,
        path: ["Shared", W]
      }), function() {
        return i(re, {
          prefix: {
            rootPrefixCls: W,
            iconPrefixCls: H
          },
          csp: ee
        });
      });
      var te = os(V(V({}, K), {}, {
        path: [m, y, H]
      }), function() {
        if (x.injectStyle === !1)
          return [];
        var he = Cp(re), ue = he.token, me = he.flush, I = yc(w, F, g), j = ".".concat(y), k = gc(w, F, I, {
          deprecatedTokens: x.deprecatedTokens
        });
        G && I && _e(I) === "object" && Object.keys(I).forEach(function(xe) {
          I[xe] = "var(".concat(ro(xe, mc(w, G.prefix)), ")");
        });
        var N = ei(ue, {
          componentCls: j,
          prefixCls: y,
          iconCls: ".".concat(H),
          antCls: ".".concat(W),
          calc: J,
          // @ts-ignore
          max: se,
          // @ts-ignore
          min: oe
        }, G ? I : k), S = v(N, {
          hashId: Y,
          prefixCls: y,
          rootPrefixCls: W,
          iconPrefixCls: H
        });
        me(w, k);
        var D = typeof s == "function" ? s(N, y, O, x.resetFont) : null;
        return [x.resetStyle === !1 ? null : D, S];
      });
      return [te, Y];
    };
  }
  function d(l, v, g) {
    var x = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, h = f(l, v, g, V({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, x)), E = function(m) {
      var C = m.prefixCls, y = m.rootCls, O = y === void 0 ? C : y;
      return h(C, O), null;
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
function Oi(t) {
  return t >= 0 && t <= 255;
}
function Vr(t, n) {
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
}, Lp = {
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
    token: t,
    hashed: n,
    theme: e,
    override: r,
    cssVar: o
  } = Fe.useContext(Mu), i = `${Ip}-${n || ""}`, s = e || Lu, [a, c, u] = xx(s, [vr, t], {
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
      preserve: Lp
    }
  });
  return [s, u, n ? c : "", a, o];
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
}, Mp = () => ({
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
  [`.${t}`]: Object.assign(Object.assign({}, Mp()), {
    [`.${t} .${t}-icon`]: {
      display: "block"
    }
  })
}), {
  genStyleHooks: la
} = Pp({
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
}, zp = Object.assign({}, _), {
  useId: wc
} = zp, Vp = () => "", Hp = typeof wc > "u" ? Vp : wc;
function Up(t, n, e) {
  var r, o;
  const i = Gn("ConfigProvider"), s = t || {}, a = s.inherit === !1 || !n ? Object.assign(Object.assign({}, vs), {
    hashed: (r = n == null ? void 0 : n.hashed) !== null && r !== void 0 ? r : vs.hashed,
    cssVar: n == null ? void 0 : n.cssVar
  }) : n, c = Hp();
  if (process.env.NODE_ENV !== "production") {
    const u = s.cssVar || a.cssVar, f = !!(typeof s.cssVar == "object" && (!((o = s.cssVar) === null || o === void 0) && o.key) || c);
    process.env.NODE_ENV !== "production" && i(!u || f, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return Yl(() => {
    var u, f;
    if (!t)
      return n;
    const d = Object.assign({}, a.components);
    Object.keys(t.components || {}).forEach((g) => {
      d[g] = Object.assign(Object.assign({}, d[g]), t.components[g]);
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
var qp = ["children"], Xu = /* @__PURE__ */ _.createContext({});
function Wp(t) {
  var n = t.children, e = mr(t, qp);
  return /* @__PURE__ */ _.createElement(Xu.Provider, {
    value: e
  }, n);
}
var Xp = /* @__PURE__ */ function(t) {
  _r(e, t);
  var n = Yo(e);
  function e() {
    return Ct(this, e), n.apply(this, arguments);
  }
  return At(e, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), e;
}(_.Component);
function Yp(t) {
  var n = _.useReducer(function(a) {
    return a + 1;
  }, 0), e = ce(n, 2), r = e[1], o = _.useRef(t), i = Ss(function() {
    return o.current;
  }), s = Ss(function(a) {
    o.current = typeof a == "function" ? a(o.current) : a, r();
  });
  return [i, s];
}
var Gt = "none", Hr = "appear", Ur = "enter", qr = "leave", Ec = "none", bt = "prepare", Rn = "start", kn = "active", ua = "end", Yu = "prepared";
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
var Gp = $p(Wt(), typeof window < "u" ? window : {}), $u = {};
if (Wt()) {
  var Kp = document.createElement("div");
  $u = Kp.style;
}
var Wr = {};
function Gu(t) {
  if (Wr[t])
    return Wr[t];
  var n = Gp[t];
  if (n)
    for (var e = Object.keys(n), r = e.length, o = 0; o < r; o += 1) {
      var i = e[o];
      if (Object.prototype.hasOwnProperty.call(n, i) && i in $u)
        return Wr[t] = n[i], Wr[t];
    }
  return "";
}
var Ku = Gu("animationend"), Zu = Gu("transitionend"), Ju = !!(Ku && Zu), Cc = Ku || "animationend", Ac = Zu || "transitionend";
function Tc(t, n) {
  if (!t) return null;
  if (_e(t) === "object") {
    var e = n.replace(/-\w/g, function(r) {
      return r[1].toUpperCase();
    });
    return t[e];
  }
  return "".concat(t, "-").concat(n);
}
const Zp = function(t) {
  var n = qe();
  function e(o) {
    o && (o.removeEventListener(Ac, t), o.removeEventListener(Cc, t));
  }
  function r(o) {
    n.current && n.current !== o && e(n.current), o && o !== n.current && (o.addEventListener(Ac, t), o.addEventListener(Cc, t), n.current = o);
  }
  return _.useEffect(function() {
    return function() {
      e(n.current);
    };
  }, []), [r, e];
};
var Qu = Wt() ? r0 : ot;
const Jp = function() {
  var t = _.useRef(null);
  function n() {
    bo.cancel(t.current);
  }
  function e(r) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    n();
    var i = bo(function() {
      o <= 1 ? r({
        isCanceled: function() {
          return i !== t.current;
        }
      }) : e(r, o - 1);
    });
    t.current = i;
  }
  return _.useEffect(function() {
    return function() {
      n();
    };
  }, []), [e, n];
};
var Qp = [bt, Rn, kn, ua], e1 = [bt, Yu], ef = !1, t1 = !0;
function tf(t) {
  return t === kn || t === ua;
}
const n1 = function(t, n, e) {
  var r = ws(Ec), o = ce(r, 2), i = o[0], s = o[1], a = Jp(), c = ce(a, 2), u = c[0], f = c[1];
  function d() {
    s(bt, !0);
  }
  var l = n ? e1 : Qp;
  return Qu(function() {
    if (i !== Ec && i !== ua) {
      var v = l.indexOf(i), g = l[v + 1], x = e(i);
      x === ef ? s(g, !0) : g && u(function(h) {
        function E() {
          h.isCanceled() || s(g, !0);
        }
        x === !0 ? E() : Promise.resolve(x).then(E);
      });
    }
  }, [t, i]), _.useEffect(function() {
    return function() {
      f();
    };
  }, []), [d, i];
};
function r1(t, n, e, r) {
  var o = r.motionEnter, i = o === void 0 ? !0 : o, s = r.motionAppear, a = s === void 0 ? !0 : s, c = r.motionLeave, u = c === void 0 ? !0 : c, f = r.motionDeadline, d = r.motionLeaveImmediately, l = r.onAppearPrepare, v = r.onEnterPrepare, g = r.onLeavePrepare, x = r.onAppearStart, h = r.onEnterStart, E = r.onLeaveStart, w = r.onAppearActive, m = r.onEnterActive, C = r.onLeaveActive, y = r.onAppearEnd, O = r.onEnterEnd, A = r.onLeaveEnd, L = r.onVisibleChanged, F = ws(), Y = ce(F, 2), re = Y[0], G = Y[1], B = Yp(Gt), W = ce(B, 2), H = W[0], ee = W[1], Z = ws(null), J = ce(Z, 2), Q = J[0], se = J[1], oe = H(), K = qe(!1), te = qe(null);
  function he() {
    return e();
  }
  var ue = qe(!1);
  function me() {
    ee(Gt), se(null, !0);
  }
  var I = Ss(function(Le) {
    var Ae = H();
    if (Ae !== Gt) {
      var Ye = he();
      if (!(Le && !Le.deadline && Le.target !== Ye)) {
        var vt = ue.current, dt;
        Ae === Hr && vt ? dt = y == null ? void 0 : y(Ye, Le) : Ae === Ur && vt ? dt = O == null ? void 0 : O(Ye, Le) : Ae === qr && vt && (dt = A == null ? void 0 : A(Ye, Le)), vt && dt !== !1 && me();
      }
    }
  }), j = Zp(I), k = ce(j, 1), N = k[0], S = function(Ae) {
    switch (Ae) {
      case Hr:
        return q(q(q({}, bt, l), Rn, x), kn, w);
      case Ur:
        return q(q(q({}, bt, v), Rn, h), kn, m);
      case qr:
        return q(q(q({}, bt, g), Rn, E), kn, C);
      default:
        return {};
    }
  }, D = _.useMemo(function() {
    return S(oe);
  }, [oe]), xe = n1(oe, !t, function(Le) {
    if (Le === bt) {
      var Ae = D[bt];
      return Ae ? Ae(he()) : ef;
    }
    if (Oe in D) {
      var Ye;
      se(((Ye = D[Oe]) === null || Ye === void 0 ? void 0 : Ye.call(D, he(), null)) || null);
    }
    return Oe === kn && oe !== Gt && (N(he()), f > 0 && (clearTimeout(te.current), te.current = setTimeout(function() {
      I({
        deadline: !0
      });
    }, f))), Oe === Yu && me(), t1;
  }), z = ce(xe, 2), Qe = z[0], Oe = z[1], ft = tf(Oe);
  ue.current = ft;
  var Ot = qe(null);
  Qu(function() {
    if (!(K.current && Ot.current === n)) {
      G(n);
      var Le = K.current;
      K.current = !0;
      var Ae;
      !Le && n && a && (Ae = Hr), Le && n && i && (Ae = Ur), (Le && !n && u || !Le && d && !n && u) && (Ae = qr);
      var Ye = S(Ae);
      Ae && (t || Ye[bt]) ? (ee(Ae), Qe()) : ee(Gt), Ot.current = n;
    }
  }, [n]), ot(function() {
    // Cancel appear
    (oe === Hr && !a || // Cancel enter
    oe === Ur && !i || // Cancel leave
    oe === qr && !u) && ee(Gt);
  }, [a, i, u]), ot(function() {
    return function() {
      K.current = !1, clearTimeout(te.current);
    };
  }, []);
  var ct = _.useRef(!1);
  ot(function() {
    re && (ct.current = !0), re !== void 0 && oe === Gt && ((ct.current || re) && (L == null || L(re)), ct.current = !0);
  }, [re, oe]);
  var Rt = Q;
  return D[bt] && Oe === Rn && (Rt = V({
    transition: "none"
  }, Rt)), [oe, Oe, Rt, re ?? n];
}
function o1(t) {
  var n = t;
  _e(t) === "object" && (n = t.transitionSupport);
  function e(o, i) {
    return !!(o.motionName && n && i !== !1);
  }
  var r = /* @__PURE__ */ _.forwardRef(function(o, i) {
    var s = o.visible, a = s === void 0 ? !0 : s, c = o.removeOnLeave, u = c === void 0 ? !0 : c, f = o.forceRender, d = o.children, l = o.motionName, v = o.leavedClassName, g = o.eventProps, x = _.useContext(Xu), h = x.motion, E = e(o, h), w = qe(), m = qe();
    function C() {
      try {
        return w.current instanceof HTMLElement ? w.current : _h(m.current);
      } catch {
        return null;
      }
    }
    var y = r1(E, a, C, o), O = ce(y, 4), A = O[0], L = O[1], F = O[2], Y = O[3], re = _.useRef(Y);
    Y && (re.current = !0);
    var G = _.useCallback(function(J) {
      w.current = J, $l(i, J);
    }, [i]), B, W = V(V({}, g), {}, {
      visible: a
    });
    if (!d)
      B = null;
    else if (A === Gt)
      Y ? B = d(V({}, W), G) : !u && re.current && v ? B = d(V(V({}, W), {}, {
        className: v
      }), G) : f || !u && !v ? B = d(V(V({}, W), {}, {
        style: {
          display: "none"
        }
      }), G) : B = null;
    else {
      var H;
      L === bt ? H = "prepare" : tf(L) ? H = "active" : L === Rn && (H = "start");
      var ee = Tc(l, "".concat(A, "-").concat(H));
      B = d(V(V({}, W), {}, {
        className: Je(Tc(l, A), q(q({}, ee, ee && H), l, typeof l == "string")),
        style: F
      }), G);
    }
    if (/* @__PURE__ */ _.isValidElement(B) && kh(B)) {
      var Z = Ph(B);
      Z || (B = /* @__PURE__ */ _.cloneElement(B, {
        ref: G
      }));
    }
    return /* @__PURE__ */ _.createElement(Xp, {
      ref: m
    }, B);
  });
  return r.displayName = "CSSMotion", r;
}
const nf = o1(Ju);
var _s = "add", Cs = "keep", As = "remove", Ri = "removed";
function i1(t) {
  var n;
  return t && _e(t) === "object" && "key" in t ? n = t : n = {
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
function u1(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : nf, e = /* @__PURE__ */ function(r) {
    _r(i, r);
    var o = Yo(i);
    function i() {
      var s;
      Ct(this, i);
      for (var a = arguments.length, c = new Array(a), u = 0; u < a; u++)
        c[u] = arguments[u];
      return s = o.call.apply(o, [this].concat(c)), q(yn(s), "state", {
        keyEntities: []
      }), q(yn(s), "removeKey", function(f) {
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
    return At(i, [{
      key: "render",
      value: function() {
        var a = this, c = this.state.keyEntities, u = this.props, f = u.component, d = u.children, l = u.onVisibleChanged;
        u.onAllRemoved;
        var v = mr(u, a1), g = f || _.Fragment, x = {};
        return l1.forEach(function(h) {
          x[h] = v[h], delete v[h];
        }), delete v.keys, /* @__PURE__ */ _.createElement(g, v, c.map(function(h, E) {
          var w = h.status, m = mr(h, c1), C = w === _s || w === Cs;
          return /* @__PURE__ */ _.createElement(n, Dt({}, x, {
            key: m.key,
            visible: C,
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
            var g = f.find(function(x) {
              var h = x.key;
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
function f1(t) {
  const {
    children: n
  } = t, [, e] = ca(), {
    motion: r
  } = e, o = _.useRef(!1);
  return o.current = o.current || r === !1, o.current ? /* @__PURE__ */ _.createElement(Wp, {
    motion: r
  }, n) : n;
}
const rf = /* @__PURE__ */ _.memo((t) => {
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
    direction: u,
    space: f,
    splitter: d,
    virtual: l,
    dropdownMatchSelectWidth: v,
    popupMatchSelectWidth: g,
    popupOverflow: x,
    legacyLocale: h,
    parentContext: E,
    iconPrefixCls: w,
    theme: m,
    componentDisabled: C,
    segmented: y,
    statistic: O,
    spin: A,
    calendar: L,
    carousel: F,
    cascader: Y,
    collapse: re,
    typography: G,
    checkbox: B,
    descriptions: W,
    divider: H,
    drawer: ee,
    skeleton: Z,
    steps: J,
    image: Q,
    layout: se,
    list: oe,
    mentions: K,
    modal: te,
    progress: he,
    result: ue,
    slider: me,
    breadcrumb: I,
    menu: j,
    pagination: k,
    input: N,
    textArea: S,
    empty: D,
    badge: xe,
    radio: z,
    rate: Qe,
    switch: Oe,
    transfer: ft,
    avatar: Ot,
    message: ct,
    tag: Rt,
    table: Le,
    card: Ae,
    tabs: Ye,
    timeline: vt,
    timePicker: dt,
    upload: rn,
    notification: on,
    tree: Cn,
    colorPicker: sn,
    datePicker: an,
    rangePicker: R,
    flex: b,
    wave: fe,
    dropdown: ge,
    warning: Re,
    tour: X,
    tooltip: ve,
    popover: ye,
    popconfirm: tt,
    floatButtonGroup: lt,
    variant: Bt,
    inputNumber: cn,
    treeSelect: Me
  } = t, $e = _.useCallback((Pe, p) => {
    const {
      prefixCls: P
    } = t;
    if (p)
      return p;
    const M = P || E.getPrefixCls("");
    return Pe ? `${M}-${Pe}` : M;
  }, [E.getPrefixCls, t.prefixCls]), Ge = w || E.iconPrefixCls || aa, kt = e || E.csp;
  Fp(Ge, kt);
  const et = Up(m, E.theme, {
    prefixCls: $e("")
  });
  process.env.NODE_ENV !== "production" && (Os = Os || !!et);
  const Xt = {
    csp: kt,
    autoInsertSpaceInButton: r,
    alert: o,
    anchor: i,
    locale: a || h,
    direction: u,
    space: f,
    splitter: d,
    virtual: l,
    popupMatchSelectWidth: g ?? v,
    popupOverflow: x,
    getPrefixCls: $e,
    iconPrefixCls: Ge,
    theme: et,
    segmented: y,
    statistic: O,
    spin: A,
    calendar: L,
    carousel: F,
    cascader: Y,
    collapse: re,
    typography: G,
    checkbox: B,
    descriptions: W,
    divider: H,
    drawer: ee,
    skeleton: Z,
    steps: J,
    image: Q,
    input: N,
    textArea: S,
    layout: se,
    list: oe,
    mentions: K,
    modal: te,
    progress: he,
    result: ue,
    slider: me,
    breadcrumb: I,
    menu: j,
    pagination: k,
    empty: D,
    badge: xe,
    radio: z,
    rate: Qe,
    switch: Oe,
    transfer: ft,
    avatar: Ot,
    message: ct,
    tag: Rt,
    table: Le,
    card: Ae,
    tabs: Ye,
    timeline: vt,
    timePicker: dt,
    upload: rn,
    notification: on,
    tree: Cn,
    colorPicker: sn,
    datePicker: an,
    rangePicker: R,
    flex: b,
    wave: fe,
    dropdown: ge,
    warning: Re,
    tour: X,
    tooltip: ve,
    popover: ye,
    popconfirm: tt,
    floatButtonGroup: lt,
    variant: Bt,
    inputNumber: cn,
    treeSelect: Me
  };
  process.env.NODE_ENV !== "production" && Gn("ConfigProvider")(!("autoInsertSpaceInButton" in t), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const ht = Object.assign({}, E);
  Object.keys(Xt).forEach((Pe) => {
    Xt[Pe] !== void 0 && (ht[Pe] = Xt[Pe]);
  }), x1.forEach((Pe) => {
    const p = t[Pe];
    p && (ht[Pe] = p);
  }), typeof r < "u" && (ht.button = Object.assign({
    autoInsertSpace: r
  }, ht.button));
  const Yt = Yl(() => ht, ht, (Pe, p) => {
    const P = Object.keys(Pe), M = Object.keys(p);
    return P.length !== M.length || P.some(($) => Pe[$] !== p[$]);
  }), {
    layer: er
  } = _.useContext(Cr), Or = _.useMemo(() => ({
    prefixCls: Ge,
    csp: kt,
    layer: er ? "antd" : void 0
  }), [Ge, kt, er]);
  let Ue = /* @__PURE__ */ _.createElement(_.Fragment, null, /* @__PURE__ */ _.createElement(d1, {
    dropdownMatchSelectWidth: v
  }), n);
  const Rr = _.useMemo(() => {
    var Pe, p, P, M;
    return $x(((Pe = Qo.Form) === null || Pe === void 0 ? void 0 : Pe.defaultValidateMessages) || {}, ((P = (p = Yt.locale) === null || p === void 0 ? void 0 : p.Form) === null || P === void 0 ? void 0 : P.defaultValidateMessages) || {}, ((M = Yt.form) === null || M === void 0 ? void 0 : M.validateMessages) || {}, (s == null ? void 0 : s.validateMessages) || {});
  }, [Yt, s == null ? void 0 : s.validateMessages]);
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
    const Pe = et || {}, {
      algorithm: p,
      token: P,
      components: M,
      cssVar: $
    } = Pe, pe = h1(Pe, ["algorithm", "token", "components", "cssVar"]), be = p && (!Array.isArray(p) || p.length > 0) ? Qi(p) : Lu, le = {};
    Object.entries(M || {}).forEach((Ke) => {
      let [ke, Ie] = Ke;
      const Ne = Object.assign({}, Ie);
      "algorithm" in Ne && (Ne.algorithm === !0 ? Ne.theme = be : (Array.isArray(Ne.algorithm) || typeof Ne.algorithm == "function") && (Ne.theme = Qi(Ne.algorithm)), delete Ne.algorithm), le[ke] = Ne;
    });
    const ae = Object.assign(Object.assign({}, vr), P);
    return Object.assign(Object.assign({}, pe), {
      theme: be,
      token: ae,
      components: le,
      override: Object.assign({
        override: ae
      }, le),
      cssVar: $
    });
  }, [et]);
  return m && (Ue = /* @__PURE__ */ _.createElement(Mu.Provider, {
    value: li
  }, Ue)), Yt.warning && (Ue = /* @__PURE__ */ _.createElement(Ou.Provider, {
    value: Yt.warning
  }, Ue)), C !== void 0 && (Ue = /* @__PURE__ */ _.createElement(gp, {
    disabled: C
  }, Ue)), /* @__PURE__ */ _.createElement(en.Provider, {
    value: Yt
  }, Ue);
}, Kn = (t) => {
  const n = _.useContext(en), e = _.useContext(Ru);
  return /* @__PURE__ */ _.createElement(v1, Object.assign({
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
  return _e(t) === "object" && typeof t.name == "string" && typeof t.theme == "string" && (_e(t.icon) === "object" || typeof t.icon == "function");
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
}`)), ot(function() {
    var a = n.current, c = S1(a);
    bn(s, "@ant-design-icons", {
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
  var e = n.icon, r = n.className, o = n.onClick, i = n.style, s = n.primaryColor, a = n.secondaryColor, c = mr(n, A1), u = _.useRef(), f = hr;
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
function lf(t) {
  var n = cf(t), e = ce(n, 2), r = e[0], o = e[1];
  return Zn.setTwoToneColors({
    primaryColor: r,
    secondaryColor: o
  });
}
function R1() {
  var t = Zn.getTwoToneColors();
  return t.calculated ? [t.primaryColor, t.secondaryColor] : t.primaryColor;
}
var k1 = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
lf(Eo.primary);
var nn = /* @__PURE__ */ _.forwardRef(function(t, n) {
  var e = t.className, r = t.icon, o = t.spin, i = t.rotate, s = t.tabIndex, a = t.onClick, c = t.twoToneColor, u = mr(t, k1), f = _.useContext(ia), d = f.prefixCls, l = d === void 0 ? "anticon" : d, v = f.rootClassName, g = Je(v, l, q(q({}, "".concat(l, "-").concat(r.name), !!r.name), "".concat(l, "-spin"), !!o || r.name === "loading"), e), x = s;
  x === void 0 && a && (x = -1);
  var h = i ? {
    msTransform: "rotate(".concat(i, "deg)"),
    transform: "rotate(".concat(i, "deg)")
  } : void 0, E = cf(c), w = ce(E, 2), m = w[0], C = w[1];
  return /* @__PURE__ */ _.createElement("span", Dt({
    role: "img",
    "aria-label": r.name
  }, u, {
    ref: n,
    tabIndex: x,
    onClick: a,
    className: g
  }), /* @__PURE__ */ _.createElement(Zn, {
    icon: r,
    primaryColor: m,
    secondaryColor: C,
    style: h
  }));
});
nn.displayName = "AntdIcon";
nn.getTwoToneColor = R1;
nn.setTwoToneColor = lf;
var P1 = function(n, e) {
  return /* @__PURE__ */ _.createElement(nn, Dt({}, n, {
    ref: e,
    icon: y1
  }));
}, uf = /* @__PURE__ */ _.forwardRef(P1);
process.env.NODE_ENV !== "production" && (uf.displayName = "CheckCircleFilled");
var I1 = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, N1 = function(n, e) {
  return /* @__PURE__ */ _.createElement(nn, Dt({}, n, {
    ref: e,
    icon: I1
  }));
}, ff = /* @__PURE__ */ _.forwardRef(N1);
process.env.NODE_ENV !== "production" && (ff.displayName = "CloseCircleFilled");
var j1 = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, L1 = function(n, e) {
  return /* @__PURE__ */ _.createElement(nn, Dt({}, n, {
    ref: e,
    icon: j1
  }));
}, df = /* @__PURE__ */ _.forwardRef(L1);
process.env.NODE_ENV !== "production" && (df.displayName = "CloseOutlined");
var M1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" }, D1 = function(n, e) {
  return /* @__PURE__ */ _.createElement(nn, Dt({}, n, {
    ref: e,
    icon: M1
  }));
}, hf = /* @__PURE__ */ _.forwardRef(D1);
process.env.NODE_ENV !== "production" && (hf.displayName = "ExclamationCircleFilled");
var B1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" }, F1 = function(n, e) {
  return /* @__PURE__ */ _.createElement(nn, Dt({}, n, {
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
function kc(t, n) {
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
    (e.aria && (o === "role" || kc(o, U1)) || // Data
    e.data && kc(o, q1) || // Attr
    e.attr && H1.includes(o)) && (r[o] = t[o]);
  }), r;
}
const pf = (t, n, e) => /* @__PURE__ */ Fe.isValidElement(t) ? /* @__PURE__ */ Fe.cloneElement(t, typeof e == "function" ? e(t.props || {}) : e) : n;
function X1(t, n) {
  return pf(t, t, n);
}
const Xr = (t, n, e, r, o) => ({
  background: t,
  border: `${So(r.lineWidth)} ${r.lineType} ${n}`,
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
    motionEaseInOutCirc: u,
    withDescriptionIconSize: f,
    colorText: d,
    colorTextHeading: l,
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
        color: l
      },
      [`&${n}-motion-leave`]: {
        overflow: "hidden",
        opacity: 1,
        transition: `max-height ${e} ${u}, opacity ${e} ${u},
        padding-top ${e} ${u}, padding-bottom ${e} ${u},
        margin-bottom ${e} ${u}`
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
        color: l,
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
    colorErrorBorder: u,
    colorErrorBg: f,
    colorInfo: d,
    colorInfoBorder: l,
    colorInfoBg: v
  } = t;
  return {
    [n]: {
      "&-success": Xr(o, r, e, t, n),
      "&-info": Xr(v, l, d, t, n),
      "&-warning": Xr(a, s, i, t, n),
      "&-error": Object.assign(Object.assign({}, Xr(f, u, c, t, n)), {
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
}, K1 = (t) => ({
  withDescriptionIconSize: t.fontSizeHeading3,
  defaultPadding: `${t.paddingContentVerticalSM}px 12px`,
  withDescriptionPadding: `${t.paddingMD}px ${t.paddingContentHorizontalLG}px`
}), Z1 = la("Alert", (t) => [Y1(t), $1(t), G1(t)], K1);
var Pc = function(t, n) {
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
  return n ? pf(n, /* @__PURE__ */ _.createElement("span", {
    className: `${e}-icon`
  }, n), () => ({
    className: Je(`${e}-icon`, n.props.className)
  })) : /* @__PURE__ */ _.createElement(o, {
    className: `${e}-icon`
  });
}, em = (t) => {
  const {
    isClosable: n,
    prefixCls: e,
    closeIcon: r,
    handleClose: o,
    ariaProps: i
  } = t, s = r === !0 || r === void 0 ? /* @__PURE__ */ _.createElement(df, null) : r;
  return n ? /* @__PURE__ */ _.createElement("button", Object.assign({
    type: "button",
    onClick: o,
    className: `${e}-close-icon`,
    tabIndex: 0
  }, i), s) : null;
}, fa = /* @__PURE__ */ _.forwardRef((t, n) => {
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
    closeText: x,
    closeIcon: h,
    action: E,
    id: w
  } = t, m = Pc(t, ["description", "prefixCls", "message", "banner", "className", "rootClassName", "style", "onMouseEnter", "onMouseLeave", "onClick", "afterClose", "showIcon", "closable", "closeText", "closeIcon", "action", "id"]), [C, y] = _.useState(!1);
  process.env.NODE_ENV !== "production" && Gn("Alert").deprecated(!x, "closeText", "closable.closeIcon");
  const O = _.useRef(null);
  _.useImperativeHandle(n, () => ({
    nativeElement: O.current
  }));
  const {
    getPrefixCls: A,
    direction: L,
    closable: F,
    closeIcon: Y,
    className: re,
    style: G
  } = Du("alert"), B = A("alert", r), [W, H, ee] = Z1(B), Z = (ue) => {
    var me;
    y(!0), (me = t.onClose) === null || me === void 0 || me.call(t, ue);
  }, J = _.useMemo(() => t.type !== void 0 ? t.type : i ? "warning" : "info", [t.type, i]), Q = _.useMemo(() => typeof g == "object" && g.closeIcon || x ? !0 : typeof g == "boolean" ? g : h !== !1 && h !== null && h !== void 0 ? !0 : !!F, [x, h, g, F]), se = i && v === void 0 ? !0 : v, oe = Je(B, `${B}-${J}`, {
    [`${B}-with-description`]: !!e,
    [`${B}-no-icon`]: !se,
    [`${B}-banner`]: !!i,
    [`${B}-rtl`]: L === "rtl"
  }, re, s, a, ee, H), K = W1(m, {
    aria: !0,
    data: !0
  }), te = _.useMemo(() => typeof g == "object" && g.closeIcon ? g.closeIcon : x || (h !== void 0 ? h : typeof F == "object" && F.closeIcon ? F.closeIcon : Y), [h, g, x, Y]), he = _.useMemo(() => {
    const ue = g ?? F;
    if (typeof ue == "object") {
      const {
        closeIcon: me
      } = ue;
      return Pc(ue, ["closeIcon"]);
    }
    return {};
  }, [g, F]);
  return W(/* @__PURE__ */ _.createElement(nf, {
    visible: !C,
    motionName: `${B}-motion`,
    motionAppear: !1,
    motionEnter: !1,
    onLeaveStart: (ue) => ({
      maxHeight: ue.offsetHeight
    }),
    onLeaveEnd: l
  }, (ue, me) => {
    let {
      className: I,
      style: j
    } = ue;
    return /* @__PURE__ */ _.createElement("div", Object.assign({
      id: w,
      ref: Rh(O, me),
      "data-show": !C,
      className: Je(oe, I),
      style: Object.assign(Object.assign(Object.assign({}, G), c), j),
      onMouseEnter: u,
      onMouseLeave: f,
      onClick: d,
      role: "alert"
    }, K), se ? /* @__PURE__ */ _.createElement(Q1, {
      description: e,
      icon: t.icon,
      prefixCls: B,
      type: J
    }) : null, /* @__PURE__ */ _.createElement("div", {
      className: `${B}-content`
    }, o ? /* @__PURE__ */ _.createElement("div", {
      className: `${B}-message`
    }, o) : null, e ? /* @__PURE__ */ _.createElement("div", {
      className: `${B}-description`
    }, e) : null), E ? /* @__PURE__ */ _.createElement("div", {
      className: `${B}-action`
    }, E) : null, /* @__PURE__ */ _.createElement(em, {
      isClosable: Q,
      prefixCls: B,
      closeIcon: te,
      handleClose: Z,
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
    return Ct(this, n), e = tm(this, n, arguments), e.state = {
      error: void 0,
      info: {
        componentStack: ""
      }
    }, e;
  }
  return _r(n, t), At(n, [{
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
function rm(t, n) {
  var e = Object.assign({}, t);
  return Array.isArray(n) && n.forEach(function(r) {
    delete e[r];
  }), e;
}
function om(t, n, e) {
  var r = e || {}, o = r.noTrailing, i = o === void 0 ? !1 : o, s = r.noLeading, a = s === void 0 ? !1 : s, c = r.debounceMode, u = c === void 0 ? void 0 : c, f, d = !1, l = 0;
  function v() {
    f && clearTimeout(f);
  }
  function g(h) {
    var E = h || {}, w = E.upcomingOnly, m = w === void 0 ? !1 : w;
    v(), d = !m;
  }
  function x() {
    for (var h = arguments.length, E = new Array(h), w = 0; w < h; w++)
      E[w] = arguments[w];
    var m = this, C = Date.now() - l;
    if (d)
      return;
    function y() {
      l = Date.now(), n.apply(m, E);
    }
    function O() {
      f = void 0;
    }
    !a && u && !f && y(), v(), u === void 0 && C > t ? a ? (l = Date.now(), i || (f = setTimeout(u ? O : y, t))) : y() : i !== !0 && (f = setTimeout(u ? O : y, u === void 0 ? t - C : t));
  }
  return x.cancel = g, x;
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
  return Je(Object.assign(Object.assign(Object.assign({}, sm(t, n)), am(t, n)), cm(t, n)));
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
    vertical: u = !1,
    component: f = "div"
  } = t, d = gm(t, ["prefixCls", "rootClassName", "className", "style", "flex", "gap", "children", "vertical", "component"]), {
    flex: l,
    direction: v,
    getPrefixCls: g
  } = Fe.useContext(en), x = g("flex", e), [h, E, w] = mm(x), m = u ?? (l == null ? void 0 : l.vertical), C = Je(o, r, l == null ? void 0 : l.className, x, E, w, lm(x, t), {
    [`${x}-rtl`]: v === "rtl",
    [`${x}-gap-${a}`]: Ic(a),
    [`${x}-vertical`]: m
  }), y = Object.assign(Object.assign({}, l == null ? void 0 : l.style), i);
  return s && (y.flex = s), a && !Ic(a) && (y.gap = a), h(/* @__PURE__ */ Fe.createElement(f, Object.assign({
    ref: n,
    className: C,
    style: y
  }, rm(d, ["justify", "wrap", "align"])), c));
});
process.env.NODE_ENV !== "production" && (bf.displayName = "Flex");
const _o = 100, Sf = _o / 5, wf = _o / 2 - Sf / 2, ki = wf * 2 * Math.PI, Nc = 50, jc = (t) => {
  const {
    dotClassName: n,
    style: e,
    hasCircleCls: r
  } = t;
  return /* @__PURE__ */ _.createElement("circle", {
    className: Je(`${n}-circle`, {
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
  const r = `${e}-dot`, o = `${r}-holder`, i = `${o}-hidden`, [s, a] = _.useState(!1);
  lu(() => {
    n !== 0 && a(!0);
  }, [n !== 0]);
  const c = Math.max(Math.min(n, 100), 0);
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
function ym(t) {
  const {
    prefixCls: n,
    percent: e = 0
  } = t, r = `${n}-dot`, o = `${r}-holder`, i = `${o}-hidden`;
  return /* @__PURE__ */ _.createElement(_.Fragment, null, /* @__PURE__ */ _.createElement("span", {
    className: Je(o, e > 0 && i)
  }, /* @__PURE__ */ _.createElement("span", {
    className: Je(r, `${n}-dot-spin`)
  }, [1, 2, 3, 4].map((s) => /* @__PURE__ */ _.createElement("i", {
    className: `${n}-dot-item`,
    key: s
  })))), /* @__PURE__ */ _.createElement(vm, {
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
  return e && /* @__PURE__ */ _.isValidElement(e) ? X1(e, {
    className: Je(e.props.className, o),
    percent: r
  }) : /* @__PURE__ */ _.createElement(ym, {
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
}, _m), Am = 200, Lc = [[30, 0.05], [70, 0.03], [96, 0.01]];
function Tm(t, n) {
  const [e, r] = _.useState(0), o = _.useRef(null), i = n === "auto";
  return _.useEffect(() => (i && t && (r(0), o.current = setInterval(() => {
    r((s) => {
      const a = 100 - s;
      for (let c = 0; c < Lc.length; c += 1) {
        const [u, f] = Lc[c];
        if (s <= u)
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
    wrapperClassName: u,
    style: f,
    children: d,
    fullscreen: l = !1,
    indicator: v,
    percent: g
  } = t, x = Om(t, ["prefixCls", "spinning", "delay", "className", "rootClassName", "size", "tip", "wrapperClassName", "style", "children", "fullscreen", "indicator", "percent"]), {
    getPrefixCls: h,
    direction: E,
    className: w,
    style: m,
    indicator: C
  } = Du("spin"), y = h("spin", e), [O, A, L] = Cm(y), [F, Y] = _.useState(() => r && !Rm(r, o)), re = Tm(F, g);
  _.useEffect(() => {
    if (r) {
      const J = im(o, () => {
        Y(!0);
      });
      return J(), () => {
        var Q;
        (Q = J == null ? void 0 : J.cancel) === null || Q === void 0 || Q.call(J);
      };
    }
    Y(!1);
  }, [o, r]);
  const G = _.useMemo(() => typeof d < "u" && !l, [d, l]);
  if (process.env.NODE_ENV !== "production") {
    const J = Gn("Spin");
    process.env.NODE_ENV !== "production" && J(!c || G || l, "usage", "`tip` only work in nest or fullscreen pattern.");
  }
  const B = Je(y, w, {
    [`${y}-sm`]: a === "small",
    [`${y}-lg`]: a === "large",
    [`${y}-spinning`]: F,
    [`${y}-show-text`]: !!c,
    [`${y}-rtl`]: E === "rtl"
  }, i, !l && s, A, L), W = Je(`${y}-container`, {
    [`${y}-blur`]: F
  }), H = (n = v ?? C) !== null && n !== void 0 ? n : Ef, ee = Object.assign(Object.assign({}, m), f), Z = /* @__PURE__ */ _.createElement("div", Object.assign({}, x, {
    style: ee,
    className: B,
    "aria-live": "polite",
    "aria-busy": F
  }), /* @__PURE__ */ _.createElement(bm, {
    prefixCls: y,
    indicator: H,
    percent: re
  }), c && (G || l) ? /* @__PURE__ */ _.createElement("div", {
    className: `${y}-text`
  }, c) : null);
  return O(G ? /* @__PURE__ */ _.createElement("div", Object.assign({}, x, {
    className: Je(`${y}-nested-loading`, u, A, L)
  }), F && /* @__PURE__ */ _.createElement("div", {
    key: "loading"
  }, Z), /* @__PURE__ */ _.createElement("div", {
    className: W,
    key: "container"
  }, d)) : l ? /* @__PURE__ */ _.createElement("div", {
    className: Je(`${y}-fullscreen`, {
      [`${y}-fullscreen-show`]: F
    }, s, A, L)
  }, Z) : Z);
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
const { toString: km } = Object.prototype, { getPrototypeOf: da } = Object, { iterator: ti, toStringTag: Cf } = Symbol, ni = /* @__PURE__ */ ((t) => (n) => {
  const e = km.call(n);
  return t[e] || (t[e] = e.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Tt = (t) => (t = t.toLowerCase(), (n) => ni(n) === t), ri = (t) => (n) => typeof n === t, { isArray: Jn } = Array, Sr = ri("undefined");
function Pm(t) {
  return t !== null && !Sr(t) && t.constructor !== null && !Sr(t.constructor) && st(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const Af = Tt("ArrayBuffer");
function Im(t) {
  let n;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? n = ArrayBuffer.isView(t) : n = t && t.buffer && Af(t.buffer), n;
}
const Nm = ri("string"), st = ri("function"), Tf = ri("number"), oi = (t) => t !== null && typeof t == "object", jm = (t) => t === !0 || t === !1, lo = (t) => {
  if (ni(t) !== "object")
    return !1;
  const n = da(t);
  return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Cf in t) && !(ti in t);
}, Lm = Tt("Date"), Mm = Tt("File"), Dm = Tt("Blob"), Bm = Tt("FileList"), Fm = (t) => oi(t) && st(t.pipe), zm = (t) => {
  let n;
  return t && (typeof FormData == "function" && t instanceof FormData || st(t.append) && ((n = ni(t)) === "formdata" || // detect form-data instance
  n === "object" && st(t.toString) && t.toString() === "[object FormData]"));
}, Vm = Tt("URLSearchParams"), [Hm, Um, qm, Wm] = ["ReadableStream", "Request", "Response", "Headers"].map(Tt), Xm = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ar(t, n, { allOwnKeys: e = !1 } = {}) {
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
function ks() {
  const { caseless: t } = Rf(this) && this || {}, n = {}, e = (r, o) => {
    const i = t && Of(n, o) || o;
    lo(n[i]) && lo(r) ? n[i] = ks(n[i], r) : lo(r) ? n[i] = ks({}, r) : Jn(r) ? n[i] = r.slice() : n[i] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Ar(arguments[r], e);
  return n;
}
const Ym = (t, n, e, { allOwnKeys: r } = {}) => (Ar(n, (o, i) => {
  e && st(o) ? t[i] = _f(o, e) : t[i] = o;
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
}, ng = Tt("HTMLFormElement"), rg = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(e, r, o) {
    return r.toUpperCase() + o;
  }
), Mc = (({ hasOwnProperty: t }) => (n, e) => t.call(n, e))(Object.prototype), og = Tt("RegExp"), kf = (t, n) => {
  const e = Object.getOwnPropertyDescriptors(t), r = {};
  Ar(e, (o, i) => {
    let s;
    (s = n(o, i, t)) !== !1 && (r[i] = s || o);
  }), Object.defineProperties(t, r);
}, ig = (t) => {
  kf(t, (n, e) => {
    if (st(t) && ["arguments", "caller", "callee"].indexOf(e) !== -1)
      return !1;
    const r = t[e];
    if (st(r)) {
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
  return !!(t && st(t.append) && t[Cf] === "FormData" && t[ti]);
}
const ug = (t) => {
  const n = new Array(10), e = (r, o) => {
    if (oi(r)) {
      if (n.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        n[o] = r;
        const i = Jn(r) ? [] : {};
        return Ar(r, (s, a) => {
          const c = e(s, o + 1);
          !Sr(c) && (i[a] = c);
        }), n[o] = void 0, i;
      }
    }
    return r;
  };
  return e(t, 0);
}, fg = Tt("AsyncFunction"), dg = (t) => t && (oi(t) || st(t)) && st(t.then) && st(t.catch), Pf = ((t, n) => t ? setImmediate : n ? ((e, r) => (xn.addEventListener("message", ({ source: o, data: i }) => {
  o === xn && i === e && r.length && r.shift()();
}, !1), (o) => {
  r.push(o), xn.postMessage(e, "*");
}))(`axios@${Math.random()}`, []) : (e) => setTimeout(e))(
  typeof setImmediate == "function",
  st(xn.postMessage)
), hg = typeof queueMicrotask < "u" ? queueMicrotask.bind(xn) : typeof process < "u" && process.nextTick || Pf, xg = (t) => t != null && st(t[ti]), T = {
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
  isDate: Lm,
  isFile: Mm,
  isBlob: Dm,
  isRegExp: og,
  isFunction: st,
  isStream: Fm,
  isURLSearchParams: Vm,
  isTypedArray: Qm,
  isFileList: Bm,
  forEach: Ar,
  merge: ks,
  extend: Ym,
  trim: Xm,
  stripBOM: $m,
  inherits: Gm,
  toFlatObject: Km,
  kindOf: ni,
  kindOfTest: Tt,
  endsWith: Zm,
  toArray: Jm,
  forEachEntry: eg,
  matchAll: tg,
  isHTMLForm: ng,
  hasOwnProperty: Mc,
  hasOwnProp: Mc,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: kf,
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
  setImmediate: Pf,
  asap: hg,
  isIterable: xg
};
function ne(t, n, e, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", n && (this.code = n), e && (this.config = e), r && (this.request = r), o && (this.response = o, this.status = o.status ? o.status : null);
}
T.inherits(ne, Error, {
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
  return T.toFlatObject(t, s, function(c) {
    return c !== Error.prototype;
  }, (a) => a !== "isAxiosError"), ne.call(s, t.message, n, e, r, o), s.cause = t, s.name = t.name, i && Object.assign(s, i), s;
};
const pg = null;
function Ps(t) {
  return T.isPlainObject(t) || T.isArray(t);
}
function jf(t) {
  return T.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Dc(t, n, e) {
  return t ? t.concat(n).map(function(o, i) {
    return o = jf(o), !e && i ? "[" + o + "]" : o;
  }).join(e ? "." : "") : n;
}
function mg(t) {
  return T.isArray(t) && !t.some(Ps);
}
const gg = T.toFlatObject(T, {}, null, function(n) {
  return /^is[A-Z]/.test(n);
});
function ii(t, n, e) {
  if (!T.isObject(t))
    throw new TypeError("target must be an object");
  n = n || new FormData(), e = T.toFlatObject(e, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(x, h) {
    return !T.isUndefined(h[x]);
  });
  const r = e.metaTokens, o = e.visitor || f, i = e.dots, s = e.indexes, c = (e.Blob || typeof Blob < "u" && Blob) && T.isSpecCompliantForm(n);
  if (!T.isFunction(o))
    throw new TypeError("visitor must be a function");
  function u(g) {
    if (g === null) return "";
    if (T.isDate(g))
      return g.toISOString();
    if (!c && T.isBlob(g))
      throw new ne("Blob is not supported. Use a Buffer instead.");
    return T.isArrayBuffer(g) || T.isTypedArray(g) ? c && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function f(g, x, h) {
    let E = g;
    if (g && !h && typeof g == "object") {
      if (T.endsWith(x, "{}"))
        x = r ? x : x.slice(0, -2), g = JSON.stringify(g);
      else if (T.isArray(g) && mg(g) || (T.isFileList(g) || T.endsWith(x, "[]")) && (E = T.toArray(g)))
        return x = jf(x), E.forEach(function(m, C) {
          !(T.isUndefined(m) || m === null) && n.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? Dc([x], C, i) : s === null ? x : x + "[]",
            u(m)
          );
        }), !1;
    }
    return Ps(g) ? !0 : (n.append(Dc(h, x, i), u(g)), !1);
  }
  const d = [], l = Object.assign(gg, {
    defaultVisitor: f,
    convertValue: u,
    isVisitable: Ps
  });
  function v(g, x) {
    if (!T.isUndefined(g)) {
      if (d.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + x.join("."));
      d.push(g), T.forEach(g, function(E, w) {
        (!(T.isUndefined(E) || E === null) && o.call(
          n,
          E,
          T.isString(w) ? w.trim() : w,
          x,
          l
        )) === !0 && v(E, x ? x.concat(w) : [w]);
      }), d.pop();
    }
  }
  if (!T.isObject(t))
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
const Lf = ha.prototype;
Lf.append = function(n, e) {
  this._pairs.push([n, e]);
};
Lf.toString = function(n) {
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
function Mf(t, n, e) {
  if (!n)
    return t;
  const r = e && e.encode || vg;
  T.isFunction(e) && (e = {
    serialize: e
  });
  const o = e && e.serialize;
  let i;
  if (o ? i = o(n, e) : i = T.isURLSearchParams(n) ? n.toString() : new ha(n, e).toString(r), i) {
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
    T.forEach(this.handlers, function(r) {
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
}, Symbol.toStringTag, { value: "Module" })), Ze = {
  ...Ag,
  ...wg
};
function Tg(t, n) {
  return ii(t, new Ze.classes.URLSearchParams(), Object.assign({
    visitor: function(e, r, o, i) {
      return Ze.isNode && T.isBuffer(e) ? (this.append(r, e.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, n));
}
function Og(t) {
  return T.matchAll(/\w+|\[(\w*)]/g, t).map((n) => n[0] === "[]" ? "" : n[1] || n[0]);
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
    return s = !s && T.isArray(o) ? o.length : s, c ? (T.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !a) : ((!o[s] || !T.isObject(o[s])) && (o[s] = []), n(e, r, o[s], i) && T.isArray(o[s]) && (o[s] = Rg(o[s])), !a);
  }
  if (T.isFormData(t) && T.isFunction(t.entries)) {
    const e = {};
    return T.forEachEntry(t, (r, o) => {
      n(Og(r), o, e, 0);
    }), e;
  }
  return null;
}
function kg(t, n, e) {
  if (T.isString(t))
    try {
      return (n || JSON.parse)(t), T.trim(t);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (e || JSON.stringify)(t);
}
const Tr = {
  transitional: Df,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(n, e) {
    const r = e.getContentType() || "", o = r.indexOf("application/json") > -1, i = T.isObject(n);
    if (i && T.isHTMLForm(n) && (n = new FormData(n)), T.isFormData(n))
      return o ? JSON.stringify(Bf(n)) : n;
    if (T.isArrayBuffer(n) || T.isBuffer(n) || T.isStream(n) || T.isFile(n) || T.isBlob(n) || T.isReadableStream(n))
      return n;
    if (T.isArrayBufferView(n))
      return n.buffer;
    if (T.isURLSearchParams(n))
      return e.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), n.toString();
    let a;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Tg(n, this.formSerializer).toString();
      if ((a = T.isFileList(n)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return ii(
          a ? { "files[]": n } : n,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return i || o ? (e.setContentType("application/json", !1), kg(n)) : n;
  }],
  transformResponse: [function(n) {
    const e = this.transitional || Tr.transitional, r = e && e.forcedJSONParsing, o = this.responseType === "json";
    if (T.isResponse(n) || T.isReadableStream(n))
      return n;
    if (n && T.isString(n) && (r && !this.responseType || o)) {
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
    FormData: Ze.classes.FormData,
    Blob: Ze.classes.Blob
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
T.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  Tr.headers[t] = {};
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
]), Ig = (t) => {
  const n = {};
  let e, r, o;
  return t && t.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), e = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!e || n[e] && Pg[e]) && (e === "set-cookie" ? n[e] ? n[e].push(r) : n[e] = [r] : n[e] = n[e] ? n[e] + ", " + r : r);
  }), n;
}, zc = Symbol("internals");
function ar(t) {
  return t && String(t).trim().toLowerCase();
}
function uo(t) {
  return t === !1 || t == null ? t : T.isArray(t) ? t.map(uo) : String(t);
}
function Ng(t) {
  const n = /* @__PURE__ */ Object.create(null), e = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = e.exec(t); )
    n[r[1]] = r[2];
  return n;
}
const jg = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function Pi(t, n, e, r, o) {
  if (T.isFunction(r))
    return r.call(this, n, e);
  if (o && (n = e), !!T.isString(n)) {
    if (T.isString(r))
      return n.indexOf(r) !== -1;
    if (T.isRegExp(r))
      return r.test(n);
  }
}
function Lg(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (n, e, r) => e.toUpperCase() + r);
}
function Mg(t, n) {
  const e = T.toCamelCase(" " + n);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(t, r + e, {
      value: function(o, i, s) {
        return this[r].call(this, n, o, i, s);
      },
      configurable: !0
    });
  });
}
let at = class {
  constructor(n) {
    n && this.set(n);
  }
  set(n, e, r) {
    const o = this;
    function i(a, c, u) {
      const f = ar(c);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const d = T.findKey(o, f);
      (!d || o[d] === void 0 || u === !0 || u === void 0 && o[d] !== !1) && (o[d || c] = uo(a));
    }
    const s = (a, c) => T.forEach(a, (u, f) => i(u, f, c));
    if (T.isPlainObject(n) || n instanceof this.constructor)
      s(n, e);
    else if (T.isString(n) && (n = n.trim()) && !jg(n))
      s(Ig(n), e);
    else if (T.isObject(n) && T.isIterable(n)) {
      let a = {}, c, u;
      for (const f of n) {
        if (!T.isArray(f))
          throw TypeError("Object iterator must return a key-value pair");
        a[u = f[0]] = (c = a[u]) ? T.isArray(c) ? [...c, f[1]] : [c, f[1]] : f[1];
      }
      s(a, e);
    } else
      n != null && i(e, n, r);
    return this;
  }
  get(n, e) {
    if (n = ar(n), n) {
      const r = T.findKey(this, n);
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
  has(n, e) {
    if (n = ar(n), n) {
      const r = T.findKey(this, n);
      return !!(r && this[r] !== void 0 && (!e || Pi(this, this[r], r, e)));
    }
    return !1;
  }
  delete(n, e) {
    const r = this;
    let o = !1;
    function i(s) {
      if (s = ar(s), s) {
        const a = T.findKey(r, s);
        a && (!e || Pi(r, r[a], a, e)) && (delete r[a], o = !0);
      }
    }
    return T.isArray(n) ? n.forEach(i) : i(n), o;
  }
  clear(n) {
    const e = Object.keys(this);
    let r = e.length, o = !1;
    for (; r--; ) {
      const i = e[r];
      (!n || Pi(this, this[i], i, n, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(n) {
    const e = this, r = {};
    return T.forEach(this, (o, i) => {
      const s = T.findKey(r, i);
      if (s) {
        e[s] = uo(o), delete e[i];
        return;
      }
      const a = n ? Lg(i) : String(i).trim();
      a !== i && delete e[i], e[a] = uo(o), r[a] = !0;
    }), this;
  }
  concat(...n) {
    return this.constructor.concat(this, ...n);
  }
  toJSON(n) {
    const e = /* @__PURE__ */ Object.create(null);
    return T.forEach(this, (r, o) => {
      r != null && r !== !1 && (e[o] = n && T.isArray(r) ? r.join(", ") : r);
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
      r[a] || (Mg(o, s), r[a] = !0);
    }
    return T.isArray(n) ? n.forEach(i) : i(n), this;
  }
};
at.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
T.reduceDescriptors(at.prototype, ({ value: t }, n) => {
  let e = n[0].toUpperCase() + n.slice(1);
  return {
    get: () => t,
    set(r) {
      this[e] = r;
    }
  };
});
T.freezeMethods(at);
function Ii(t, n) {
  const e = this || Tr, r = n || e, o = at.from(r.headers);
  let i = r.data;
  return T.forEach(t, function(a) {
    i = a.call(e, i, o.normalize(), n ? n.status : void 0);
  }), o.normalize(), i;
}
function Ff(t) {
  return !!(t && t.__CANCEL__);
}
function Qn(t, n, e) {
  ne.call(this, t ?? "canceled", ne.ERR_CANCELED, n, e), this.name = "CanceledError";
}
T.inherits(Qn, ne, {
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
    const u = Date.now(), f = r[i];
    s || (s = u), e[o] = c, r[o] = u;
    let d = i, l = 0;
    for (; d !== o; )
      l += e[d++], d = d % t;
    if (o = (o + 1) % t, o === i && (i = (i + 1) % t), u - s < n)
      return;
    const v = f && u - f;
    return v ? Math.round(l * 1e3 / v) : void 0;
  };
}
function Fg(t, n) {
  let e = 0, r = 1e3 / n, o, i;
  const s = (u, f = Date.now()) => {
    e = f, o = null, i && (clearTimeout(i), i = null), t.apply(null, u);
  };
  return [(...u) => {
    const f = Date.now(), d = f - e;
    d >= r ? s(u, f) : (o = u, i || (i = setTimeout(() => {
      i = null, s(o);
    }, r - d)));
  }, () => o && s(o)];
}
const Co = (t, n, e = 3) => {
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
}, Hc = (t) => (...n) => T.asap(() => t(...n)), zg = Ze.hasStandardBrowserEnv ? /* @__PURE__ */ ((t, n) => (e) => (e = new URL(e, Ze.origin), t.protocol === e.protocol && t.host === e.host && (n || t.port === e.port)))(
  new URL(Ze.origin),
  Ze.navigator && /(msie|trident)/i.test(Ze.navigator.userAgent)
) : () => !0, Vg = Ze.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, n, e, r, o, i) {
      const s = [t + "=" + encodeURIComponent(n)];
      T.isNumber(e) && s.push("expires=" + new Date(e).toGMTString()), T.isString(r) && s.push("path=" + r), T.isString(o) && s.push("domain=" + o), i === !0 && s.push("secure"), document.cookie = s.join("; ");
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
const Uc = (t) => t instanceof at ? { ...t } : t;
function _n(t, n) {
  n = n || {};
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
    if (d in n)
      return r(u, f);
    if (d in t)
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
  return T.forEach(Object.keys(Object.assign({}, t, n)), function(f) {
    const d = c[f] || o, l = d(t[f], n[f], f);
    T.isUndefined(l) && d !== a || (e[f] = l);
  }), e;
}
const Hf = (t) => {
  const n = _n({}, t);
  let { data: e, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: i, headers: s, auth: a } = n;
  n.headers = s = at.from(s), n.url = Mf(Vf(n.baseURL, n.url, n.allowAbsoluteUrls), t.params, t.paramsSerializer), a && s.set(
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
  if (Ze.hasStandardBrowserEnv && (r && T.isFunction(r) && (r = r(n)), r || r !== !1 && zg(n.url))) {
    const u = o && i && Vg.read(i);
    u && s.set(o, u);
  }
  return n;
}, qg = typeof XMLHttpRequest < "u", Wg = qg && function(t) {
  return new Promise(function(e, r) {
    const o = Hf(t);
    let i = o.data;
    const s = at.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: c, onDownloadProgress: u } = o, f, d, l, v, g;
    function x() {
      v && v(), g && g(), o.cancelToken && o.cancelToken.unsubscribe(f), o.signal && o.signal.removeEventListener("abort", f);
    }
    let h = new XMLHttpRequest();
    h.open(o.method.toUpperCase(), o.url, !0), h.timeout = o.timeout;
    function E() {
      if (!h)
        return;
      const m = at.from(
        "getAllResponseHeaders" in h && h.getAllResponseHeaders()
      ), y = {
        data: !a || a === "text" || a === "json" ? h.responseText : h.response,
        status: h.status,
        statusText: h.statusText,
        headers: m,
        config: t,
        request: h
      };
      zf(function(A) {
        e(A), x();
      }, function(A) {
        r(A), x();
      }, y), h = null;
    }
    "onloadend" in h ? h.onloadend = E : h.onreadystatechange = function() {
      !h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.indexOf("file:") === 0) || setTimeout(E);
    }, h.onabort = function() {
      h && (r(new ne("Request aborted", ne.ECONNABORTED, t, h)), h = null);
    }, h.onerror = function() {
      r(new ne("Network Error", ne.ERR_NETWORK, t, h)), h = null;
    }, h.ontimeout = function() {
      let C = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const y = o.transitional || Df;
      o.timeoutErrorMessage && (C = o.timeoutErrorMessage), r(new ne(
        C,
        y.clarifyTimeoutError ? ne.ETIMEDOUT : ne.ECONNABORTED,
        t,
        h
      )), h = null;
    }, i === void 0 && s.setContentType(null), "setRequestHeader" in h && T.forEach(s.toJSON(), function(C, y) {
      h.setRequestHeader(y, C);
    }), T.isUndefined(o.withCredentials) || (h.withCredentials = !!o.withCredentials), a && a !== "json" && (h.responseType = o.responseType), u && ([l, g] = Co(u, !0), h.addEventListener("progress", l)), c && h.upload && ([d, v] = Co(c), h.upload.addEventListener("progress", d), h.upload.addEventListener("loadend", v)), (o.cancelToken || o.signal) && (f = (m) => {
      h && (r(!m || m.type ? new Qn(null, t, h) : m), h.abort(), h = null);
    }, o.cancelToken && o.cancelToken.subscribe(f), o.signal && (o.signal.aborted ? f() : o.signal.addEventListener("abort", f)));
    const w = Dg(o.url);
    if (w && Ze.protocols.indexOf(w) === -1) {
      r(new ne("Unsupported protocol " + w + ":", ne.ERR_BAD_REQUEST, t));
      return;
    }
    h.send(i || null);
  });
}, Xg = (t, n) => {
  const { length: e } = t = t ? t.filter(Boolean) : [];
  if (n || e) {
    let r = new AbortController(), o;
    const i = function(u) {
      if (!o) {
        o = !0, a();
        const f = u instanceof Error ? u : this.reason;
        r.abort(f instanceof ne ? f : new Qn(f instanceof Error ? f.message : f));
      }
    };
    let s = n && setTimeout(() => {
      s = null, i(new ne(`timeout ${n} of ms exceeded`, ne.ETIMEDOUT));
    }, n);
    const a = () => {
      t && (s && clearTimeout(s), s = null, t.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(i) : u.removeEventListener("abort", i);
      }), t = null);
    };
    t.forEach((u) => u.addEventListener("abort", i));
    const { signal: c } = r;
    return c.unsubscribe = () => T.asap(a), c;
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
}, si = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Uf = si && typeof ReadableStream == "function", Kg = si && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((t) => (n) => t.encode(n))(new TextEncoder()) : async (t) => new Uint8Array(await new Response(t).arrayBuffer())), qf = (t, ...n) => {
  try {
    return !!t(...n);
  } catch {
    return !1;
  }
}, Zg = Uf && qf(() => {
  let t = !1;
  const n = new Request(Ze.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return t = !0, "half";
    }
  }).headers.has("Content-Type");
  return t && !n;
}), Wc = 64 * 1024, Ns = Uf && qf(() => T.isReadableStream(new Response("").body)), Ao = {
  stream: Ns && ((t) => t.body)
};
si && ((t) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((n) => {
    !Ao[n] && (Ao[n] = T.isFunction(t[n]) ? (e) => e[n]() : (e, r) => {
      throw new ne(`Response type '${n}' is not supported`, ne.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Jg = async (t) => {
  if (t == null)
    return 0;
  if (T.isBlob(t))
    return t.size;
  if (T.isSpecCompliantForm(t))
    return (await new Request(Ze.origin, {
      method: "POST",
      body: t
    }).arrayBuffer()).byteLength;
  if (T.isArrayBufferView(t) || T.isArrayBuffer(t))
    return t.byteLength;
  if (T.isURLSearchParams(t) && (t = t + ""), T.isString(t))
    return (await Kg(t)).byteLength;
}, Qg = async (t, n) => {
  const e = T.toFiniteNumber(t.getContentLength());
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
    responseType: u,
    headers: f,
    withCredentials: d = "same-origin",
    fetchOptions: l
  } = Hf(t);
  u = u ? (u + "").toLowerCase() : "text";
  let v = Xg([o, i && i.toAbortSignal()], s), g;
  const x = v && v.unsubscribe && (() => {
    v.unsubscribe();
  });
  let h;
  try {
    if (c && Zg && e !== "get" && e !== "head" && (h = await Qg(f, r)) !== 0) {
      let y = new Request(n, {
        method: "POST",
        body: r,
        duplex: "half"
      }), O;
      if (T.isFormData(r) && (O = y.headers.get("content-type")) && f.setContentType(O), y.body) {
        const [A, L] = Vc(
          h,
          Co(Hc(c))
        );
        r = qc(y.body, Wc, A, L);
      }
    }
    T.isString(d) || (d = d ? "include" : "omit");
    const E = "credentials" in Request.prototype;
    g = new Request(n, {
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
    if (Ns && (a || m && x)) {
      const y = {};
      ["status", "statusText", "headers"].forEach((F) => {
        y[F] = w[F];
      });
      const O = T.toFiniteNumber(w.headers.get("content-length")), [A, L] = a && Vc(
        O,
        Co(Hc(a), !0)
      ) || [];
      w = new Response(
        qc(w.body, Wc, A, () => {
          L && L(), x && x();
        }),
        y
      );
    }
    u = u || "text";
    let C = await Ao[T.findKey(Ao, u) || "text"](w, t);
    return !m && x && x(), await new Promise((y, O) => {
      zf(y, O, {
        data: C,
        headers: at.from(w.headers),
        status: w.status,
        statusText: w.statusText,
        config: t,
        request: g
      });
    });
  } catch (E) {
    throw x && x(), E && E.name === "TypeError" && /Load failed|fetch/i.test(E.message) ? Object.assign(
      new ne("Network Error", ne.ERR_NETWORK, t, g),
      {
        cause: E.cause || E
      }
    ) : ne.from(E, E && E.code, t, g);
  }
}), js = {
  http: pg,
  xhr: Wg,
  fetch: ev
};
T.forEach(js, (t, n) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: n });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: n });
  }
});
const Xc = (t) => `- ${t}`, tv = (t) => T.isFunction(t) || t === null || t === !1, Wf = {
  getAdapter: (t) => {
    t = T.isArray(t) ? t : [t];
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
  return Ni(t), t.headers = at.from(t.headers), t.data = Ii.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), Wf.getAdapter(t.adapter || Tr.adapter)(t).then(function(r) {
    return Ni(t), r.data = Ii.call(
      t,
      t.transformResponse,
      r
    ), r.headers = at.from(r.headers), r;
  }, function(r) {
    return Ff(r) || (Ni(t), r && r.response && (r.response.data = Ii.call(
      t,
      t.transformResponse,
      r.response
    ), r.response.headers = at.from(r.response.headers))), Promise.reject(r);
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
const fo = {
  assertOptions: nv,
  validators: ai
}, It = fo.validators;
let wn = class {
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
    typeof n == "string" ? (e = e || {}, e.url = n) : e = n || {}, e = _n(this.defaults, e);
    const { transitional: r, paramsSerializer: o, headers: i } = e;
    r !== void 0 && fo.assertOptions(r, {
      silentJSONParsing: It.transitional(It.boolean),
      forcedJSONParsing: It.transitional(It.boolean),
      clarifyTimeoutError: It.transitional(It.boolean)
    }, !1), o != null && (T.isFunction(o) ? e.paramsSerializer = {
      serialize: o
    } : fo.assertOptions(o, {
      encode: It.function,
      serialize: It.function
    }, !0)), e.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? e.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : e.allowAbsoluteUrls = !0), fo.assertOptions(e, {
      baseUrl: It.spelling("baseURL"),
      withXsrfToken: It.spelling("withXSRFToken")
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
    ), e.headers = at.concat(s, i);
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function(x) {
      typeof x.runWhen == "function" && x.runWhen(e) === !1 || (c = c && x.synchronous, a.unshift(x.fulfilled, x.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(x) {
      u.push(x.fulfilled, x.rejected);
    });
    let f, d = 0, l;
    if (!c) {
      const g = [Yc.bind(this), void 0];
      for (g.unshift.apply(g, a), g.push.apply(g, u), l = g.length, f = Promise.resolve(e); d < l; )
        f = f.then(g[d++], g[d++]);
      return f;
    }
    l = a.length;
    let v = e;
    for (d = 0; d < l; ) {
      const g = a[d++], x = a[d++];
      try {
        v = g(v);
      } catch (h) {
        x.call(this, h);
        break;
      }
    }
    try {
      f = Yc.call(this, v);
    } catch (g) {
      return Promise.reject(g);
    }
    for (d = 0, l = u.length; d < l; )
      f = f.then(u[d++], u[d++]);
    return f;
  }
  getUri(n) {
    n = _n(this.defaults, n);
    const e = Vf(n.baseURL, n.url, n.allowAbsoluteUrls);
    return Mf(e, n.params, n.paramsSerializer);
  }
};
T.forEach(["delete", "get", "head", "options"], function(n) {
  wn.prototype[n] = function(e, r) {
    return this.request(_n(r || {}, {
      method: n,
      url: e,
      data: (r || {}).data
    }));
  };
});
T.forEach(["post", "put", "patch"], function(n) {
  function e(r) {
    return function(i, s, a) {
      return this.request(_n(a || {}, {
        method: n,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: s
      }));
    };
  }
  wn.prototype[n] = e(), wn.prototype[n + "Form"] = e(!0);
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
  return T.isObject(t) && t.isAxiosError === !0;
}
const Ls = {
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
Object.entries(Ls).forEach(([t, n]) => {
  Ls[n] = t;
});
function $f(t) {
  const n = new wn(t), e = _f(wn.prototype.request, n);
  return T.extend(e, wn.prototype, n, { allOwnKeys: !0 }), T.extend(e, n, null, { allOwnKeys: !0 }), e.create = function(o) {
    return $f(_n(t, o));
  }, e;
}
const je = $f(Tr);
je.Axios = wn;
je.CanceledError = Qn;
je.CancelToken = rv;
je.isCancel = Ff;
je.VERSION = Xf;
je.toFormData = ii;
je.AxiosError = ne;
je.Cancel = je.CanceledError;
je.all = function(n) {
  return Promise.all(n);
};
je.spread = ov;
je.isAxiosError = iv;
je.mergeConfig = _n;
je.AxiosHeaders = at;
je.formToJSON = (t) => Bf(T.isHTMLForm(t) ? new FormData(t) : t);
je.getAdapter = Wf.getAdapter;
je.HttpStatusCode = Ls;
je.default = je;
const {
  Axios: Rv,
  AxiosError: kv,
  CanceledError: Pv,
  isCancel: Iv,
  CancelToken: Nv,
  VERSION: jv,
  all: Lv,
  Cancel: Mv,
  isAxiosError: Dv,
  spread: Bv,
  toFormData: Fv,
  AxiosHeaders: zv,
  HttpStatusCode: Vv,
  formToJSON: Hv,
  getAdapter: Uv,
  mergeConfig: qv
} = je, Ut = To;
(function(t, n) {
  const e = To, r = t();
  for (; ; )
    try {
      if (parseInt(e(418)) / 1 * (parseInt(e(421)) / 2) + -parseInt(e(429)) / 3 + parseInt(e(412)) / 4 + parseInt(e(409)) / 5 + -parseInt(e(424)) / 6 * (-parseInt(e(425)) / 7) + -parseInt(e(423)) / 8 + -parseInt(e(426)) / 9 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Oo, 938652);
Ut(420) + Ut(427);
je[Ut(430)][Ut(433) + Ut(428)] = !0;
const sv = async (t) => {
  var e, r, o, i;
  const n = Ut;
  try {
    return (await je(t))[n(413)];
  } catch (s) {
    throw ((r = (e = s[n(417)]) == null ? void 0 : e[n(413)]) == null ? void 0 : r[n(419)]) || ((i = (o = s[n(417)]) == null ? void 0 : o[n(413)]) == null ? void 0 : i[n(414)]) || s[n(419)];
  }
}, av = {};
av[Ut(416) + "pe"] = Ut(434) + Ut(435);
function To(t, n) {
  const e = Oo();
  return To = function(r, o) {
    return r = r - 409, e[r];
  }, To(t, n);
}
function Oo() {
  const t = ["Content-Ty", "response", "21shvtki", "message", "/api/v1/cl", "130360niZILf", "params", "7382480VYawrI", "30TPybAk", "599102wkQFKY", "3833289GlCCQz", "ient", "tials", "3930270wYPDWV", "defaults", "PATCH", "GET", "withCreden", "applicatio", "n/json", "7948090HkeDEh", "DELETE", "POST", "844580JoJkvu", "data", "error", "PUT"];
  return Oo = function() {
    return t;
  }, Oo();
}
const Ce = Ro;
(function(t, n) {
  const e = Ro, r = t();
  for (; ; )
    try {
      if (parseInt(e(462)) / 1 + -parseInt(e(450)) / 2 + -parseInt(e(442)) / 3 * (-parseInt(e(451)) / 4) + -parseInt(e(459)) / 5 * (parseInt(e(437)) / 6) + -parseInt(e(443)) / 7 + parseInt(e(444)) / 8 + parseInt(e(456)) / 9 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ko, 322741);
const un = {};
un[Ce(458)] = Ce(454) + "E", un[Ce(463)] = Ce(446), un[Ce(445)] = Ce(440) + "N", un[Ce(460)] = Ce(454) + "E", un[Ce(448)] = Ce(446), un[Ce(457)] = Ce(440) + "N";
const Lt = un, Ms = {};
Ms[Ce(435)] = Ce(446), Ms[Ce(439)] = Ce(440) + "N";
const cv = Ms, lv = Ce(436), uv = Ce(441), fv = Ce(453) + Ce(461);
function Ro(t, n) {
  const e = ko();
  return Ro = function(r, o) {
    return r = r - 435, e[r];
  }, Ro(t, n);
}
const Gf = Ce(452) + Ce(449), Ds = Ce(438) + Ce(461);
function ko() {
  const t = ["enuHide", "763796nrXuvT", "14464uimTbu", "assistiveM", "keyBoardEv", "ACTION_MOV", "Event", "5534874pSsFcQ", "touchstart", "mousemove", "2877955NbZAyr", "touchmove", "ent", "609546ljSExi", "mouseup", "keyup", "moveEvent", "6oCGMmt", "shortcutEv", "keydown", "ACTION_DOW", "wheelEvent", "54ssZzCh", "3385298gzbLvh", "3793792mxsLfZ", "mousedown", "ACTION_UP", "fullscreen", "touchend"];
  return ko = function() {
    return t;
  }, ko();
}
const dv = Ce(447) + Ce(455);
(function(t, n) {
  const e = pn, r = t();
  for (; ; )
    try {
      if (-parseInt(e(210)) / 1 * (-parseInt(e(152)) / 2) + -parseInt(e(154)) / 3 * (-parseInt(e(170)) / 4) + parseInt(e(227)) / 5 + -parseInt(e(192)) / 6 * (parseInt(e(233)) / 7) + parseInt(e(236)) / 8 * (parseInt(e(232)) / 9) + parseInt(e(228)) / 10 + -parseInt(e(166)) / 11 * (parseInt(e(164)) / 12) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Po, 638730);
const hv = ({ isMobile: t, assistive: n, onImgEvent: e, canvasContent: r, imageRef: o }) => {
  const [i, s] = rt(!1), a = (d) => {
    const l = pn;
    if (l(207) !== l(207)) _0x447d3b[l(163)] = l(189);
    else {
      if (d[l(229) + l(235)](), !o[l(213)]) return;
      const v = o[l(213)];
      let g = Lt[d[l(212)]];
      if (n[l(148)] == !0 || n[l(186)] == !0) {
        g == Lt[l(195)] && e(Gf, {});
        return;
      }
      if (g == Lt[l(214)])
        if (l(206) === l(204)) {
          const { touches: m, changedTouches: C } = _0x25ce56, y = m[0] ?? C[0];
          _0x473f6f = y[l(208)] - _0x4e093a[l(172)], _0x49c973 = y[l(142)] - _0x518387[l(171)];
        } else s(!0);
      if (g != Lt[l(214)] && i == !1)
        if (l(157) === l(153)) _0x7679e6[l(163)] = l(145) + l(201), _0x3440e7[l(237)] = 21;
        else return;
      g == Lt[l(195)] && s(!1);
      let x, h;
      const E = v[l(222) + l(176) + "t"]();
      if (d[l(212)][l(143)](l(146))) {
        const { touches: m, changedTouches: C } = d, y = m[0] ?? C[0];
        x = y[l(208)] - E[l(172)], h = y[l(142)] - E[l(171)];
      } else d[l(212)][l(143)](l(216)) && (l(225) !== l(225) ? ([l(211), l(214), l(195), l(161), l(200)][l(177)]((m) => {
        const C = l;
        _0x538e89[C(160) + C(180)](m, _0x21d5db);
      }), _0x4106f6[l(160) + l(180)](l(200), _0x53f51c)) : (x = d[l(198)] - E[l(172)], h = d[l(239)] - E[l(171)]));
      const w = {};
      w[l(151)] = l(165), w[l(149)] = g, w.x = x, w.y = h, w[l(181)] = E[l(181)], w[l(194)] = E[l(194)], e(lv, w), v[l(178)]();
    }
  }, c = (d) => {
    const l = pn;
    if (l(241) !== l(221)) {
      if (d[l(229) + l(235)](), !o[l(213)]) {
        if (l(167) !== l(173)) return;
        _0x1765d1[l(163)] = l(145) + l(201), _0x5dc926[l(237)] = 22;
      }
      const v = o[l(213)], g = d[l(215)], x = v[l(222) + l(176) + "t"](), h = {};
      h[l(151)] = l(184), h[l(181)] = v[l(238) + "h"], h[l(194)] = v[l(193) + "ht"], h.x = d[l(198)] - x[l(172)], h.y = d[l(239)] - x[l(171)], h[l(156)] = g, e(uv, h), v[l(178)]();
    } else return;
  }, u = async (d) => {
    const l = pn;
    if (l(217) === l(217)) {
      if (d[l(229) + l(235)](), !o[l(213)])
        return l(188) === l(188), void 0;
      const v = o[l(213)], g = cv[d[l(212)]], x = d[l(237)][l(220) + "e"]();
      if (((m) => {
        const C = l;
        return [C(205), C(185), C(168)][C(143)](m);
      })(x) == !0) {
        if (l(141) === l(141)) return;
        {
          if (_0x7fea05[l(229) + l(235)](), !_0x1a6634[l(213)]) return;
          const m = _0x34f1f8[l(213)], C = _0x3789b0[l(215)], y = m[l(222) + l(176) + "t"](), O = {};
          O[l(151)] = l(184), O[l(181)] = m[l(238) + "h"], O[l(194)] = m[l(193) + "ht"], O.x = _0x5186b8[l(198)] - y[l(172)], O.y = _0xf2c31a[l(239)] - y[l(171)], O[l(156)] = C, _0x53ae3d(_0x571222, O), m[l(178)]();
        }
      }
      const E = async () => {
        const m = l, C = {};
        C[m(151)] = m(219), C[m(149)] = g, C[m(163)] = m(231) + m(202), C[m(237)] = d[m(237)], C[m(144)] = 0, C[m(155)] = 0;
        const y = C;
        if (d[m(158)] == !0)
          x == "c" ? m(242) === m(242) ? y[m(163)] = m(189) : (_0x1b80c8[m(224) + m(240)](m(147), _0x1476a1, _0xa34717), _0x2af394[m(224) + m(240)](m(209), _0x1f71b1, _0xeb381e), _0x8e7a1a[m(224) + m(240)](m(230), _0x4075fc)) : x == "a" ? m(190) === m(199) ? _0x128e73[m(224) + m(240)](_0x1a7494, _0x5610e4) : (y[m(163)] = m(145) + m(201), y[m(155)] = 4096, y[m(237)] = 29) : x == "v" && (y[m(163)] = m(183), y[m(237)] = await navigator[m(140)][m(182)]());
        else if (x == m(175)) y[m(163)] = m(145) + m(201), y[m(237)] = 19;
        else if (x == m(196)) y[m(163)] = m(145) + m(201), y[m(237)] = 20;
        else if (x == m(187)) y[m(163)] = m(145) + m(201), y[m(237)] = 21;
        else if (x == m(159)) y[m(163)] = m(145) + m(201), y[m(237)] = 22;
        else if (x == m(197))
          if (m(223) === m(223)) y[m(163)] = m(145) + m(201), y[m(237)] = 67;
          else return;
        else
          x == m(203) ? (y[m(163)] = m(145) + m(201), y[m(237)] = 66) : x == m(169) && (y[m(163)] = m(145) + m(201), y[m(237)] = 61);
        return y[m(212)] == m(231) + m(202) && d[m(179)] == !0 && (y[m(237)] = y[m(237)][m(174) + "e"]()), y;
      }, w = await E();
      w && e(fv, w), v[l(178)]();
    } else _0x1a6f59[l(179)] == !0 && (_0x298054[l(237)] = _0x535408[l(237)][l(174) + "e"]());
  };
  ot(() => {
    const d = pn, l = o[d(213)];
    if (l)
      if (d(226) === d(226)) {
        const v = {};
        v[d(150)] = !1;
        const g = v;
        return t ? (l[d(224) + d(240)](d(147), a, g), l[d(224) + d(240)](d(209), a, g), l[d(224) + d(240)](d(230), a)) : (l[d(224) + d(240)](d(161), c, g), l[d(224) + d(240)](d(200), u), [d(211), d(214), d(195)][d(177)]((x) => {
          const h = d;
          h(162) !== h(191) ? l[h(224) + h(240)](x, a) : _0x1e6e67(_0x4ac7cf, {});
        })), () => {
          const x = d;
          x(218) !== x(218) ? _0x951c96(_0x49671e, _0x372b5e) : l && (t ? [x(147), x(209), x(230)][x(177)]((h) => {
            const E = x;
            l[E(160) + E(180)](h, a);
          }) : x(234) !== x(234) ? _0x536379(!0) : ([x(211), x(214), x(195), x(161), x(200)][x(177)]((h) => {
            const E = x;
            l[E(160) + E(180)](h, a);
          }), l[x(160) + x(180)](x(200), u)));
        };
      } else [d(147), d(209), d(230)][d(177)]((v) => {
        const g = d;
        _0x248c4e[g(160) + g(180)](v, _0x21aba4);
      });
  }, [t, a, c, u]);
  const f = { ref: o, ...r };
  return U.jsx(gd, f);
};
function pn(t, n) {
  const e = Po();
  return pn = function(r, o) {
    return r = r - 140, e[r];
  }, pn(t, n);
}
function Po() {
  const t = ["control", "QyKTC", "RDeGq", "pageX", "touchmove", "9FfZWPR", "mousemove", "type", "current", "mousedown", "deltaY", "mouse", "GZbFB", "Fquoy", "keyEvent", "toLowerCas", "RyilE", "getBoundin", "lNdKT", "addEventLi", "jjWVC", "TEUmI", "5678745OIajDK", "8779620zqpLOB", "preventDef", "touchend", "KEYBOARD_T", "2002716lBqvge", "1596ALpDro", "vvdIA", "ault", "24zUlyEP", "key", "offsetWidt", "clientY", "stener", "VWAad", "BMIHz", "clipboard", "ndebW", "pageY", "includes", "repeat", "KEYBOARD_C", "touch", "touchstart", "isDown", "keyAction", "passive", "action", "274738IUSzLq", "EASkr", "599622oTnsEH", "meta_state", "delta", "iUaxO", "ctrlKey", "arrowright", "removeEven", "wheel", "QJvYe", "typeKey", "1068KFadUy", "touchEvent", "395868HwPGrx", "RHQFo", "capslock", "tab", "12wUDOIb", "top", "left", "UwZsK", "toUpperCas", "arrowup", "gClientRec", "forEach", "focus", "shiftKey", "tListener", "width", "readText", "PASTE_TEXT", "wheelEvent", "shift", "showMenu", "arrowleft", "mznyE", "COPY_TEXT", "WUwlk", "fqXjp", "17778anlPgw", "offsetHeig", "height", "mouseup", "arrowdown", "backspace", "clientX", "pYepb", "keydown", "ODE", "EXT", "enter", "KGQXd"];
  return Po = function() {
    return t;
  }, Po();
}
const xv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAABGdBTUEAALGPC/xhBQAACklpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAAEiJnVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/stRzjPAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAJcEhZcwAADsQAAA7EAZUrDhsAAD0ASURBVHic7b15dCTXdaf5Re47EonEVlgKVQXUSoqLSJEii6JELZQoS5bMM5J7uiWrR97kGUuW3Z6ZtnvG9unlzHS7vfX42D2WLavVbrft9liLZe0U2awSSZES12KtqMK+JhKJTOS+xPzxABJVRFUBiBcRGZnvOycPwDrAi0vEi1/cd99992ojx+5EobiGLmA/0Lfx/dZPcuMTAwJAcON3OgAX4AGiG/+WA2pAA1jb+LciUAKyQGrjs3LNZwGY3PheoXgNj90GKGzBDRwCjgEjwEHgwMb3I7wuOEbZOk7XHn4/B0xsfK4Alze+PwuMA3VD1ikchxKs1icJ3AbcuvF5E3CC1z2jZibK63ZfSxE4A7wEvLzxeRHhsSlaFCVYrYUHIU73bXweAAZstcg8gsBdG5+tzAJPAt/f+LyIWJYqWgBNxbAcTQAhSicRAnUvELHVouYjBzyDEK9TCDEr2WqRYs8owXIeo8B7gfcBbwdCtlrjPArA48DXgW8Al2y1RrErlGA1Pz7gIeD9CKEatdecluMSQri+BjwGVOw1R3EjlGA1J0HgYeBR4MeAuK3WtA8Z4O+BvwW+iQjsK5oIJVjNgxt4J/CPgA8j8poU9rEGfAn4L8B3USkUTYESLPs5BPw08HFgn822KLZnDvgi8CeI/C+FTSjBsgc/8BPAJxHxKc1ecxQ7RAe+B3wO+P+Asr3mtB9KsKzlGPAzwE8BCZttURgjDXwB4XWdtdmWtsFltwFtwjsQwdwzwGdRYtUKJBD38gzi3r7DXnPaAyVY5uEBfhJ4DrFd/n7U0q8V0RD39jHEvf5J1AkS01CCJZ8I8EuI/J6/BN5sqzUKK3kz4p5fQnhf6tSBZJRgySMI/AqiosDvIsqzKNqT/cDvIObCP8MZB80dgRIs4/iBTyMm528D3faao2giuoF/h5gbn0bMFYUBlGDtHR/wcwj3//cRxe4Uiu3oQ8yRS4g547PXHOeiBGv3aMD/gNgd+mNg0F5zFA5iEDFnzgAfQW3C7BolWLvjXkSZkr9GHUJW7J1R4K8Qc+lem21xFEqwdkY/8HnUBFPIZfMF+OeIOaa4CUqwbowHsT19FvgEyoVXyEdDnHw4C/wyKofrhijBuj53ICpV/g6qcoLCfDqAf4+Yc+q83HVQgvVGgsC/BX6AmjgK67kTIVr/FpW/9QaUYF3NQ4juK7+Kcs0V9uFBzMGXEXNSsYESLEEH8GfAdxD1qRSKZuAQYk7+GSosASjBAnHK/iXgn6KC6ormQ0PMzZdQ3lZbC5YfEeT8DjBssy0Kxc0YBr6N2ARq2yM+7SpYR4CnENvI7fo3UDgPFyLN5mngqM222EI7PqyfQNQtusNmOxSKvXI7Yg5/wl4zrKedBCuIyFb/PKpOkcL5hHl9PrdNM912EawxxBGIT9hsh0Ihm08g5vaYzXZYQjsI1iOIJNDbbbZDoTCL24BnEaWaW5pWFiwN+DXgq6jOyYrWpwP4CvDrtHB6TqsKVgD4r8C/pnX/HxWKa3EB/wox9wM222IKrfgwJxGtxT9ityEKhU18BPEMJO02RDatJlhjiPyq++w2RKGwmfsQz0JLBeNbSbBOIm6QqgSqUAhGEc/ESbsNkUWrCNZHEccWuuw2RKFoMroQz8ZH7TZEBq0gWJ9GNK9sySCjQiGBAOIZ+bTdhhjFETWfTt5/97b/fur0s78B/KalxigUzkRDtBpLnLz/7t+83g+dOv2sZQbtBUcI1rWcOv2shji1/ks2m6LYwO12oWkuXC4Nl+t1x73RaNBo6Oh6g3q9YaOFig1+49TpZ+PAZ0/ef7dutzG7xXGCtSFWfwh8ym5bWh2P200g4Mcf8BPw+/AH/Hg9HjweD16vB4/Xg9fjwe1273jMer1OtVajVq1Rrdao1WpUazXKpTKlckV8LZWp1esm/p+1PZ8BfKdOP/s/O020HCVYp04/6wb+I/BJu21pJTweD+FwkFAoSDgUIhwOEgwG8HjkTw+32y0Ezn/jkk61Wo1isUQ+XyRfKFAoFMnni9RqNek2tSmfQojWz528/27HvB0cI1gbnpUSK4NomkYkHCIWixCNio/f33yd0z0ez2v2baVcrpDLrZPLrZPNrrOeL6DrjnISmolPApw6/ezPOMXT0kaOOaIxjFoGGiAcDhGPx4jHY8SiUdzuVtgcFtTrDbK5HJlMlkwmSz5fsNskJ/LHwC+cvP9uXQXd5fC7KLHaMS6Xi3g8RiIRJ9HZgc/XfB6ULNxuF53xDjrjokdDpVIhvbpGOp0hk8nSaKhA/w74eaCMAzaxnOBhqdSFHeByuejs7KA7maCzM95SXtReqdcbrK5mWE6lWV1dU+J1c34T+C27jbgRzS5Yvwj8gd1GNDOxWITe3m66ujrx7GK3rt2o1eusrKyyuLhMNrtutznNzKeB/2C3EdejmQXrHwNfpIVr++wVj8dDb08XfX09BIMqwX+3FIslFhaWWFpeoVpVu47XoAMfA/7CbkO2o1kF617gCaB1gy97IBIJM7Cvj66uTlwupeNGaTR00ulVZmcXyK3n7TanmagA7wMes9uQa2lGwRpF1KjuttuQZiGRiDM40EcsFrXblJYlm80xM7tAOp2x25RmYQ14AHjZbkO20myC1Y0Qq7YvEaNpGj09SQYH+tSyz0KKxRIzswssLaVUfhfMAG8B5u02ZJNmEqwQwgW9x25D7ETTNLq7EwwPDRAItG2DX9splcpMTc+xvLzS7sL1DPAQ0BQJbu54d7/dNoAIrH8esW5uW5LJBMeOjtLX223KsRjFzvF4PHR1ddKdTFCr1igUinabZBeDwGHgv9ltCDSPYP0z4FfsNsIuotEIx44eYmBfH16vEqpmwuv1kEwmSCTi5AtFKpWK3SbZwQmEh3XabkOaYUn4TuCbQNslEfn9Pkb2D9HdnbDbFMUOWV5OMzE5TbncdsJVBx5GNLewDbsFawj4IW22I6hpGoOD/QwN9l9VO0rhDBqNBjMz80zPzLdbfGsZuAuYsssAOwXLB5wCti8n2qLEohFGR0cIhYJ2m7InfF4fPp9f1MTyePFs1MNyuVy4NCG+brcbNA10nfpGXauG3qDRaFCv1zdqYFWp1WpUKmUqVWd6K4VCkUuXJsjm2ipz/jlEU4uyHRe3U7D+BPhpuy5uNW63m5H9g/T399htyk1xu92EgiGCwRChQAi/34/f58fn86Np8hNWdV2nUilTrpQpl8sUSgWKxQKFYuE1wWtm5ueXmJiccYStkvhTbHp27RKsjwH/yY4L20E8HmNs9EBT1p3SNI1QKEw0HCUSjhIOhZuqukOlUiFfyLOez5HL5ygU8k25DCuXK1y8dIVMJmu3KVbxU9jwDNshWAeBF4CWT9t2uTT2Dw8yMNBntylXEQyG6Ih2EO+IEw5FHBVHazQa5AvrrGUzZLJrFItNkR70GrOzC0xOzdBoNJ+oSiYH3AGMW3lRqwXLAzyJOCvY0oSCQQ4fPkgkErLbFDRNIxbtoDPeSUcsjs/bPB6UUSrVCmvZDKuZVbK5tabwvtbzBS6cv0yh2PK5W88g4lmWnSC3Og/rNxBVGFqa3t5ujh8btXUJqGkaHdEO+vsGOLD/IN1dPYRD4V01jHACbrebcChMVyJJT3cvAX8QvdGwNZDv83np7U1SrdZYb+0KqIMbXx+36oJWelj3IyowtNYTswWXy8WhQ/vp7UnaZoPf5yfZ1U13VzfeFvKkdku1WmF5ZZnUyjLlii0bWgAsLqUYH59s5eKBdeDtiB1/07FKsGLAi8CIFRezA7/fx7FjY0TC9iwB4x2d9HT30hHtsOX6zcxabo2l5UUya6u2XH89X+Ds2YutnGw6AdwGmL7jYNWS8I8RKtySdHREueXEUYIWH1Z2uVwku7o5NDJKb3cvAb+q6rAdAX+Ars4uuhJJdF2nVCpaGuvy+bz0dCdZX8+3qmjFgX7gy2ZfyAoP6z2IozctSXd3F2OjBywtqOdyuenr6aO3u08dkt4DtVqNxeUFFpYWaDSsy53SdZ2LF6+wtLxi2TUt5hHg62ZewGzBigKvAMNmXsQuhob2sX94wLLruVwuert76evZp4RKArVajYWlORaXFy2NMU1OzTI9PWfZ9SxkGnFQOmfWBcxeEv4O8G4zL2AHmqYxNnaAgX3W5FdpmkZPspfRA4fpjCcclTfVzLhcLmLRDrq7emg0GhQsyumKd8TwB/ysrq5Zcj0L6UAsD79m1gXM9LDuQVQPbamny+VycfToIRKdcUuuF4vEGB4aIRhw5tlDJ1EsFZmaniC7bk22eno1w7lz4622g9hAZAQ8bcbgZgmWB3FI8jYzBrcLt9vFsWNjxDtipl/L7/MzNLCfznin6ddSXM1qZpXp2UlL0iEya1nOnr1Ivd5SovUS8GZMSCg1a0n4WeDjZgxsFx6PmxMnjtBhciMITdPo7elj9MBhQkH7s+TbkWAgSHeyh4beoFAwt5tOIOCnoyPGyspqKx3n6UWkODwle2AzPKw+4Dwi96ol8Hg83HLiiOnHbILBEAeGDxAORUy9jmLn5AvrTExdMT2+tb5e4JUz56nVWqZPYhY4AizIHNQMD+v/oYUaSbjdbm45cYRoNGzqdfp7+zk0MobPpxpPNBM+r4/urh50vcF63ry6Vz6fV3haqTSNJjgPKQE/ojDnl2QOKluw7kG0uW6JLp8ul4sTxw8Ti5nn8fi8PkYPHqY72WNKrSmFcTYPj0ejMXK5LHWTcrf8fh/RaIRUKt0Uh7glcBsiB3NG1oAyBUsD/ooWybnSNI3jx8aIx81b2XZ2dHJ49KjaAXQIm+c0y6USpXLJlGsEAn4i0TCpVNqU8S1GA44jOmLJGVBiDOsjCMFqCY4eOUQyaU5zCE3TGOgfpL93nynjm4Xb7SYWixCLRohFo0TCIQIBP4FggIDfh9/v3/g5Fx6Ph1qt9truV7lcplSuUCqWKJXKrOcLZHM5srl1stl1x1XrnF+cY3Z+xjRPKLWyyrlzl0wZ2wY+Cvy1jIFkCZYPOIsozud4RvYPMjhoTkKtx+Ph0MgosSY/pBzw++nv76Gnu4uuRCfJZIKOWNS0Eslr2RypVJqV9CrLy2kWlpabvhdgNrfG+MQl0wLlMzPzTExKW03ZyWXgGGD4IKUswfo5xAFnx9Pf18OhQ/tNGTsYCHL40JGmDKwHgwGGBvoZGtpHf1+PZYmxNyKzlmV2boHpmTmmZ+YpFs1ZhhmhUilzYfw8xZI54jo+Psn8wpIpY1vMp5CgETIEKwBc5PViXo4lkYhz7OioKV5ELBpj9MDhpiqgF4tGGBs9wMEDw/T1djd10F/XdRYWl7l8ZYqL4xNks6YdV9s19XqdS1cukM3Jz5DXdZ2z5y6RTmekj20xM8AYYOitI0OwfhH4A6OD2E0oFOS2Nx3H7ZZ/kiiZ6GZk+EBTCEIwGODo4UMcHjtAb49z20EuLi1z4eIVzl0YbwrPS9d1JqaukEovSx+7Xm/w0kuvkm/yJfIO+AwGtcKoYIUQReibq8vCLvG43dx223GCQfn1pPb1DTDQb7/zOTTYzy3Hj3DwwHBTeXlGqdfrXJ6Y5pUz55mesb8Cwuz8DHMLs9LHLZXKvPDiq05PLF0ADiHa3u8Jo2kNnwF+wsgAzcCRI4eImXDkZmhgmH191pWfuRa3283xo2M8/O63ceftt9CV6Gy5Sg8ul4uuRJxjR0YZGz1Avd4gvZqxLY8pFo3hdrvJ5uRWYvB4PITDIZadXUsrAqwhiiLsCSMeVhThXTl3XYHwPPbvl+8B7R8aoSfZK33cneDxuLn1xFHefMetju0wbYRCociPXniFl145S61mT7rEUmqRyekJ6eNOTc0y5exaWssIL2tPQUgjHtangQ/t9ZebgY6OGGNj8mNLdomV2+XiTbcc5ZH3voPRQyN4vV7LbWgGvF4vw0MDHD82RqOhk1pesdzjCocieL1e1rIZqePGYlGy2XXKZfsaaxgkDKTZo5e1Vw/LB1wBnJX5uAWPx8Mdt5+Q3opraGCYvh5LW6cBcOjgfu5/612WlL5xGpm1LKefeo7xy5OWX3thaZ7p2SmpY5YrFZ5//oyT41nziIY0u87L2quH9Qkc3l/w8OGDxKJyzwjakb3e1dXJ+97zDu6681YCFjfBcAqBgJ/DowcY2NfPUmrF0l3FSFgk2+YkFgX0uN0EggEnH9+JAlPAj3b7i3sRLA34Ig6OXfX2JBmSnMnek+xlaMC6Y5Rut5t7776Dd7/rbcQ7zK3R1SrEYhFuOX4Yt8vN/MKSZcvEaCRGrV4jL7G2VigUpFypkHduo9ZR4I92+0t7EayHEQX6HEkg4Of4scNSu9zEOzo5sP+gZXlW/X09/PgH3sOhg/txNUFul5PQNI2BfX2MjY6wvLzC+rq5Bfo26Yh2UCgWpB6ajnd0kEqlbdtYMEg3osDf+G5+aS+C9YcIdXQkR4+MEgrJy7cKhyMcPnjEknQBl8vFW+66jXc9dJJQsP12/2QSDAQ4dmQUTXNZ4m1pmkZnRyfZ9SzVqpzehC6XRigUdHLbsG7gP+/mF3YrWMeBf49D61319CQZGJCX4+r3+Tk6dgy32/yWW9FImA++/90cPWLO0aF2RNM0Bgf6GBrcx/TMPJWKuU1ON0VrNZOWVp0iEPBTLjt2aXgI+BtEqsOO2K1g/Rrw1l0a1RR4vV5OHB+T5gm5XC6OHDqK34Juy0OD+/jQBx+mM97cFR6cSjQS5tiRUZaWV0w/o+hyuYlGoqyspqR5dR0dURaXVpzYfUcDdHbRfHU3guUHvoA4juM4Do8dIBKRV+Z4ZOgAHR1xaeNdj7vufBPvfuhk2+ZUWYXH4+Ho4UM0Gg3m5hdNvZbX68Pn9ZFZW5UynsvlIuD3kVqRM57FHEaEmXbk3u5GsD4CfGyPRtlKR0eMAyND0sbrSfaYfuTG7XLxrnfcz52336KWgBahaRpDg/uIRSNMTppXnA8gFApTq8nbOQyFgmSz65Scl1AaQOR07ijFYTfro5/Zkzk2o2kaBw/KSzcIBUMMD45IG287/H4fH/yx93Ds6Jip11Fsz7GjY/z4B94jPan4WoYH90tt5Xbw4LBTX24/vdMf3KlgjQJv35MpNtPX201Y0nk6l8vFwRFzg96hUJBHP/SI9Dwxxe4YHOjn0Q89YupZTE3TODQyKi2uGgoF6et1ZHrkPcCJnfzgTv9Sn8SBO4Mej5vhYXlLt6GBYVMbRkQjYR790PtIdqluz81AsquTRz/0PqISY5/XEggEpSYcDw8P4PE4snzQJ3byQzsRLPdOB2s2hgb34fXKSTmId3SaeqA5Go3w6IcfUTuBTUZnvINHP/wIUcnHuLbSk+wl3iHnJeX1ehgacuQR348htOaG7ESwHsSBBfp8Pi/9/T1SxnK73YwMjUgZazvC4RAf/uDD0s82KuQQi0b48AcfJhw2b4N8ZGhEWmHF/r4e0+NvJtDLDsJOOxGsjxg2xQaGBvdJiw0M7RvG6zVnAgSDAT70gYdVlYUmJ94R40MfeNiUqrQgUh2G9slZGrpcLqd6WR+92Q/c7In2AI/KscU6/H4fvZKCj9FIlO6kHE/tWjweDx945F10JeKmjK+QS1cizgceeRcejzknG7qTPUQjcg6y9/YknVi948PADRMObyZYDwFJaeZYhPCujO8RaJrGyLA5rRY1TeO973nQqbs6bUtfbzfvfc+Dpu0UjwzLOUQvcsoct9OcRGjOdbmZYN3URWs2hHclR2N7u/sImHT05v633sXBEevK0SjkcXBkmJP33W3K2AF/gN5uOSHjnp6kE2NZNwxB3UiwfAgXzVHs6++V8obyeLymZbMfGTvInbffYsrYCmu447YTHBkzx/ve1zeAx2P8KJamaezrt6evgAE+jNCebbmRYL0TcFRCkNvtkha7Gtw3aEo7rGRXJ+98x/3Sx1VYzzvfcb8pOXNut5vBfXIao/T2djutrVsnQnu25UaC9QH5tphLX1+PlKS5YCBIMiE/tuTzennkvQ+ZFrRVWIvH4+GR9z6Ez4SD6clEt5QkZY/HTV+f4+Kk19WeGwnW+00wxDRkur8D/YOmBFUffOAelb7QYsQ7Yjz4tnulj6tpmrQGvLLCJBZyXe25nmDdCjgqIpxIxKUEGEPBEJ3xhASLrubw6AF1mLlFOXZklMOjB6SP2xlPSDkc7ff7SDgrdWYYoUFv4HqC9T7zbDEHWTuDZrSVD4WCvOPB+6SPq2ge3vHgfYRD8jPhZc1HB6bPbKtB1xOsd5toiHT8fh+JzrjhcULBsLQzXVt58IF7nbi9rNgFfr+PBx+4R/q48Y5OQkHjh687OzucNge31aDtBCsInDTXFrn09sjxrvp65R+ZPHhgmLFDI9LHVTQfo4dGOHRAfiSlr1dOAqis58QiTiK06Cq2E6yTiCqAjkFGKoPP5yMR75Jgzet4PB7e/oD8gKyieXnwbW+VvguciCfw+Yx7R7JSfiwiADxw7T9uJ1gPmm+LPDpiUSmubm93n/SdlLvuvFVqHXlF8xMJh7jrzm3jxXtG0zQp2e9+v89pu9Rvu/YfthOsN/xQM5NMGt/Rc7nc0g84RyNh7rxd7sRVOIM7b79VetG/7q4eXC7jOYbd3fJ3wE3kDc7TtYIVAN5ijS3G0TSNZNJ4kDzRmcAtYTJs5b573+zUyo8Kg3g8bt5675uljul2u0l0Ghebrq6Ek3Ky7uaaONa1gvUWRDsvR9DREZXS/qq7S653leiMc9ikc2YKZ3Bk7KCUneutyJinHo+beNwxy0I/QrReYzvBcgzJLuNvnGAwRCQst9LnPW+5w0lvMYUJaJrGPW+5Q+qYkXCEoIRE0i5n9Qy4atfqWsGSn0hiIjKyd7slnxnsSsRVGoMCgLFDI3Ql5IqDjPkq2/MzmaucqGsFyzF78NFoGJ/P2HJQ0zQSnXJTGe68QwXaFa9z5x1yywglOrsMe+8+n5do1DG711c5UVsFqxeQfy7FJDolvCWikZjUFvDhUEjFrhRXcXjsoNQjO16vl2jEeAxKxvNjEYMIbQKuFqzbLTfFADIChwnJh5zfdOsx3JIaXyhaA7fLxZtuPSp1TBnz1kGBd4DXgoFbny65+7Am4nG7peS5xOPy4gsul4sTx1Q1BsUbueX4EakvMhnzNhoJ43FOYb87N7/Z+ld8kw2G7IlYR9TwOj4cjuCVUIZ2kwMjQ6a2NVc4l2AwwKFD+6WN5/V4CRvc2dY0jViHnA49FnD75jdbBWtHve2bgY6Y8T90R1Ruh+Vbjh+ROp6itTh2RK73LWP+yniOLOL45jebguUFHPPExST8oeOxuHFDNgiFggw7s3GlwiKGh/ZJ9cBlzF8Zz5FFHGajX+GmYI1xkwaGzYLL5SISMbbr4nF7CIXkbeuOHtyvEkUVN0TTNEYPylsWhsMRPG5jVSEikZC07ugm40Vo1GuC5RjvKhIOGRaHaDQmVWDGTCiPq2g9ZM+TaNTYTp+maUTC8qukmsQReF2wRm00ZFeEDXpXgNSjOMFgwIm93xQ2sK+/l2BQXqm5aNj4kk7G82QRo/C6YB2y0ZBdEZbwRohG5K3dR4bN6bCjaD00TWNkWF5udiRi/MXrIA/rKsFyjodl8A/scrmk1MjeZHjYnO7QitZE5nwJBcOGY1AhhwrWiH127I5Q0NhOSzgUluYRaZrGfiVYil2wf3hA6vwLG9w8Mvo8Wch+EIKl4ZAzhIGAH7fb2BtFRnmOTRKJOAG/Y8qHKZqAgN8vtUeg0fnsdrsIBBwxhwcBzYU4WOgIi8MS8lhCAXmC1d8nt/Cfoj3Y1ydvk0bGfJbxXFmAH+hxAUN2W7JTAgHjOywyPSy1O6jYC/398l50IQmVIGQ8VxYx7ALkN+MzCX9ATit6WTiwm66iCejvlSdYQQkeloznyiJ6XYBj1jVG19o+n09aZq/X63HSWSxFE9HRETVcfHITl8uFz2fsuXBQHLbXUR6W0T9swC/P9U10dqr8K8WekdGPYBPDz4Uzgu4AfS7AMesav8Eb4/fJE6ykswr5K5oMmXXVjc5ro8+VhXS7gLjdVuwEt9tlOKVBRrvvTRxWsVHRZHRIrEVldF7LeLYsIu4YwZJRe93nlSdYsajc1mCK9kLm/JHxIpbZ28BEnCNYHo+xUhog96bEYkqwFHtHZi0qGZVzZTxfFtDpGMHySviDeiSWRI5F1Q6hYu/I9LBkzGsZz5cFxF1c07u+WfF4ZQiWvJvioJ0VRRMic/7IWX04QrACLsARaa4yOnwYrdC4SSDgVykNCkNomkZQUoa5jHntdkYHnYALcMR2l4xdDFk3RXlXChnIyjCXMa/dHkcIVnSzWkPzY9CjkVm72m8ws1ihALkZ5g6pzW4UlwtwxOLV6A2RuYRzSM6KosmRKTJG57dDBM/jAuSV3zQRl9Ebosm7IQ65uYomp6kEyxkx2bBznjyDf1DNJe+GOCRnRdHkyJxHzbQCMRPnCJau222BQtGy6Djj+XIBObuNsIJGoyFtrGq1Km0sRfsicx416gbntzP0Chcg70k2EaOCo0v00GSOpWhfpM5Jg4oj84VuInkXULLbip3QMHhzZU6OWr0ubSxF+1KXOI+Mzm+jz5dF1FxA2W4rdoLhGyLxDVIpV6SNpWhfyhLnkeH57QzBargAR7gLhtfoQK1ek2AJFEuOcEoVTY6seSRjXtclPF8WkHMB63ZbsRNqNQk3pSZHm8vlilPW/IompdFoSPOwZMxrGc+XBZQcE3SvSviDyvKwAEolR6ykFU2KzPkjY17LeL4soOQCMnZbsRNkvAFkbiOvZdsiG0RhEtmcvIWNjHntEA8r4xjBqlZlvEXkBTllTjhF+yHzhVetGRcsGc+XBay2lWBVKhIFK6sES7F3ZM6fSsX48tIhguUcD6vRaBjOW5EpWJnMmrSxFO1HZi0rbSyj87perztlEynjApbttmKnGN1VKVfkpSOkVtLSxlK0H+l0RtpYRue1zHwwk1l2AQt2W7FTDAtWWd7OTHp1zSlvJUWToes66dVVaeMZndcOEqwFR3lYRreCK9WKtOMQ9Xqd1Yw8t17RPqxm1qTFjOr1OpWqMcFxUIrOoguYt9uKnVKSkBlcKBYkWCJYWFySNpaifZhfkDdvihLms4znyiIWXcC03VbslKKEN4GMG7zJ3LwSLMXumZc4bwol4/O5WHSMhzXlAhZxyAHofN74zZFxgzeZX1iUNpaifZiTOG9krBjyBXnPhIlUgCUXonTXjM3G7IhyuWK4tEtB4s3JZLJSRFTRPuTzBTISY59GBatWrzsl6D4N6JslkidsNGRXFPJFY79fzEvd3ZuYcoTWK5qEyalZaWM1Gg0KhbyhMYw+TxYyCa/XdL9koyG7wqj7qus6eYM3eStTEiegovWZlPiCyxfyhuvEOWQ5CBsatSlY4zYasitkLMHW8/LOcU1Oz6l8LMWOaDQaTE7PSRtPxjzOO8fDGgcHeljr6xIEa12eYFUqFaZn5E1CResyPTMn9XiYDMFaX5e32jCZqzys8zYasivy+YJhjyaXz0mt8X7h0oS0sRSti8x5ous6OYMv3kaj4aRNo3PwumBdBBzRu0rcKGNvhXq9Tr4g77T85SuTUhsKKFqPer3O5SuT0sbLF9YNz7ncuvEYmEVUERr1mmBVgQu2mbNLsmvGXeG1rLxqC+VyhSsTjsm/VdjAxOSM1PQBGfM365wilBfYcKi2dn4+Y48tu0dG8bPMmrzDpwCvvOoYvVfYwJmzF6WOl8lmDI+xtuaYmm6vbn6zVbBetMGQPZHNrtNoGHNlC8WClMJnm0zPzKkqpIptya3npaYzVCoVw/lXjYbuJA/rhc1vtgrWj6y3Y280Gg0pf+zVjDwvS9d1XjnjmL0LhYW8/Mo5qbGi1YzxWmy53LqT0nGe3/zGtd0/OgEZFRvTmRUJlrzOy2fOSW10oXA+1WqVl8+ckzqmjHm76qyKua85U1sFaxGHnCkEWJVQsXE9vy61qF+5XOHVc45JaVNYwKvnLkkNtlcqZdbzxkMPMp4fi5hBaBNwtWABPG2tLXsnXyhKmQgrqykJ1rzO8y+ecZKrrTCRRqPBCy/K3ctaWTXuXZXKZfIFx2S4/2Drf1wrWD/AQaysGI9BpdJyC65msznOX3DMSSeFibx67pL0/pXLK8ZraaVXMsYNsY5ntv7HtYL1DA5iOWU8+Fgul8nm5K7nf/DDF5WX1ebUGw2efe4FqWNmc2tSQhgyXvQWctWqbzsPyxHF/EDsdMhYFi6vyPWy1tZyKi+rzXnlzHnDJzKuRcY8rVSqTupaXgae3foP1wpW6dofaHZSErys1UyamoTuuVt55tnnqVTUjmE7UqlU+YFk76pWq0pJZ5DxvFjIs8BVwbZrBQvgCWtskYOMZaGu6ywuyy13XCyWpE9ahTP4wXMvUCzKbeywuLwoJZdreVluKo/J/Pdr/2E7wXrDDzUz6+t5KZNjKbUoPe70wkuvsrrqqHwXhUFWV9d44aVXb/6Du6DRaLCUMv5CLRZL0pepJrMjwXoSsTR0DAuLxtf2tVqNVFpuikOj0eC7j5+WOqaiufnu46elv/hW0ilqNeN9DGU8JxZSYoeCVQROmW6ORJaWUlLc5YWleenlNubmF6VnOiuak5fPnGNuXm5oQdd15peMtw7VdZ2lJbkvZJM5xTXxK9hesAC+ba4tcqlWa1K2asvlEmkJiXnXcvqpHzqpsqNiD6yv5zn91A+lj5teXaFcNr7gWVlZldZt2iK21aDrCdbXTTTEFGS5u7MLs9K9rEqlwre++6RTiqUpdomu63z7sSellj/eHHd2QU6TE4ctB+E6GnQ9wXoZmDLPFvlkMlkKEo4blMsl6dnvADOz8zz/wivSx1XYz/MvvML0jPFl27Wk0ikp3lWhUJTaC9ECphAa9AauJ1gAXzPHFvOYm5MTP5hfmEPX5WeqP/XMj1hy1ray4iYsLa/w1DPyKzPpeoN5Sd6VrOfCQq6rPTcSrK+aYIipLC2vSEnWLFfKLCwtSLDoauqNBl/7xmPSc3QU9lAslfjaNx6jbsIxrIWlBcoSCkxWKlUnviSvqz03EqzvAo46dNRoNJhfMH44FGB+cc6U2la53Drf/M4TKp7lcHRd55vffoKcCVVmq9Uq84tyWsfNLyw57VzrKkJ7tuVGglUB/k66OSazIOkG1et1ZubNaSwxNT3H6afl7ygprOP00z9kSmJT1K3MzE9L6cLUaDRYkPQCt5AvIbRnW24kWAB/JdUUC6hWa8zNy7lJqZVlqe3AtvKj51/m5VdUfpYTefmVc/zo+W1jwobJF/KkJB3Gn19YcloqA9xEc24mWI8Bjso2A5idnZfWJ3Bi6oppy7fHn3yayxOO2oxtey5PTPH4k+bUudR1nYmpy1LGajQazM7Kj8OaTAqhOdflZoJVA/5WmjkWUa3WpO2MFIoFafGEa9F1nW986wnp2dEKc5idW+Ab3zIv/riwNE+hKKcT8/z8khOrhfwdN2nofDPBAvgbObZYy+zcIrWaHC9rfnGOkoR8mO2o1Wp85WvfYXHJcYl9bcXi0jJf/YfvSjnTtx2lcok5SWkM9XqdmVn5eWEW8Nc3+4GdCNbjgON8y1qtxqykm9ZoNLgyOW7am7VSqfDlr37bidvPbcHS8gpf/uq3pWeyb6LrOlcmx6Xt5s3MLjgxdrUEfO9mP7QTwaoDXzBsjg3Mzi1K61iynl83bWkIojHA333lG9LSMhRymF9Y4u++8g1KErsrveEai3NSOuGA6NzkwNgVwBcRWnNDdiJYAJ8DHJc41Gg0uDIhLzVhbmFW2sTajnK5wpe++k1Tjnkods/M7Dxf+uo3pbbpupb1/Lq0pSDAlYlpp+VdbfL5nfzQTgXrEmJp6DhSqbS0lty6rnN58pK0HcjtqFZrfOXvv8U51XnHVs5dGOfLX/2WqUurer3O5clL0kIN2WzOaSWQN/kBsKN+aO54d/9OB60Cj+7VIjvJF4r09XVLGater1Mql0h0dkkZbzt0XWf88iSapjGwr8+06yi25wfPvcATTz5j+mmEy5PjUj32s+fGnbgzCPBbbOnufCN2I1gXgE8BoT0aZRuVShWv10s0GpYyXqlUxOVyEY1EpYx3PWZmF1jNZNk/PIjbvVNnWLFXarUa3/7uk7z48lnTrzW/OMeSxD4C8/NLLDqvhAzAGvA/cYPs9q3sRrDqQD9w797sspdsdp2eni48breU8XLrOSLhCH5/QMp412MlvcrE5DRDQ/sIBPymXqudyaxlLYsfZnNrTExdkTZeuVLh7Dl5S0uL+Rzw5Z3+8G4EC2Aa+AVA26VRtqPrOqVime5ueUu5tewaiXgnHo9H2pjbUSiWOHdhnHhHjEQibuq12pFL4xN89R++Qy5nflXYcrnEhfELNBry4qAXLlyWUgvOBnSEd7Vj13C3grUMvBUY3Z1dzUGxVCIYDBIOB6WM12g0yGTX6OrswuWS47ldj3q9zsXxCXK5PIOD/bgleYrtTKVa5XtPPMX3n/mhqRspm9RqVc5dOke1Km/XMZVKO3lX+VvA7+7mF3YrWCBE65/s9peahWx2nd6epLSYUL1eYz2fI5noRtPMdzyXU2kujl8h2ZUgFouYfr1WZWZ2ga987duWZYTrus6F8fMUJR29AbGj/OrZi05NYwD4X4BdbYfvRbAuAx8B5Gy7WUyj0aBUKtOdTEgbs1KtUCqX6OzotES0yuUKZ89fYj1fYKC/D49HeVs7pVyu8MSpp/nvp54xNb9qK5uZ7GvZjNRxL1y87OTmJueBX97tL+1FsED0vP/gXn6xGSgWS/j9fiIReRuexVKRarVKvKNT2pg3Y3l5hXPnxwn4/SSTCUvE0qnous7Zc5f4h298j9k5azPBJ6cnpPe8XFxMOfW84Ca/Buy6KJw2cuzOvVzMB0wgdg0didvt4vbbThAMyt3l6+3uY3hwv9Qxd3TdniQPPnAvfb2OdHxNZWFxmSeefMaWA+ZTM5MsLssVyGKxxAsvnqFed+xScB4YYYepDFvZq4dVR+wUvmcvv9wM6LpOLrtOT09SqmeSL6yj6zqxaIe0MXd03XyBM2cvsLS8QldnnFBIzsaCk0ml0jz2+Pc59dSz5PPyYkc7ZWZumgUJTVC30mg0ePXVC5YtZ03iXyI6zO+avXpYAFFEPCu51wGagd7eJGOjB6SP29+7j8F9Q9LH3Smjh0a4+823SY3VOYXlVJrnfvgiF8cnbLNhZm7alMPyFy9dYXHRcTU1t5ICDgJ7Oi+3Vw8LXnfn3r3XAZqBfL6Az+cjEpGTBb/Jej5HvV6nIxaXOu5OSa9meOXMeebmlwgGAsTjMVvssJLJqVm+98RTnH7qOdKrGdvsmJqZlO5ZASwsLDNtUh15C/ktdlBG5noY8bBAHNO5DPQaGcRuNE3jTbcek3Z0ZyvJRJKR4YO2B8Q74x2cODbGsaNj0uN2dlIsljh77iJnzl5kNbNmqy2bJY5lB9gBcrk8L7181qnZ7JssIryrPa/PjXhYIA5EV4D3GRmkGcisrtEjMT9rk0KxQD6/TjzeiUuz7zxgqVRmamaOF156ldTKKmgaHbEILpfzzijWajXGr0zxzLPP89jj32dyepZSybx6VTuh3qhz6coFVjPyO+NVqzVeeeU8NQuSW03mXwCnjAxg1MMCCCDKzwwYHchuotEwt95y1JSHOBgMcfjQEXxen/Sx94rX6+HA/iEOHtjP/uEB/P7mse1ayuUKk1OzXL4yyZXJ6aaqqFmpVrg4fl5aPfatNBoNXn7lnCXHhkxmFnFCxlCtcRmCBfDzwB/JGMhuEok4x46OmrKE83p9HD54mFBI/tLTKJqm0dfbzdDgPvr7eujv68bns0/AqtUaC4vLzM4tMD0zx8LiclMuhwrFPBfGL0g9brPJZu5YOp2RPrYNfAr4Y6ODyBIsH3AWsT51PPv6ezl4cNiUsV0uF/sHR0h2NXe+lKZpJBJxerqTJLs6SXZ10pXoNCVdolAospJeJbUiPsupFVZWVptSoLaSSqeYnL5i2tGYy1empHV/spnLwDH2kHd1LbIEC8RxHcc1Xr0ehw7up7+/x7Txe5I9DA/uR7MxrrUXPB43sWiUWCxCOBwiGAgQCPgJBvx4vF4A/D4vmqah6zrljYJytWqVYqlMqVSmWCqRzxfIZtfJ5nLSuhtZha43mJqZYillnpjMzy8xfnnStPEt5ieRpA0yBUtDBNTukzWg3YyNHaC3x7w0s3A4wqH9o/j9qs6VUyiXy1yevGRqbf/FpRQXL8qrl2UzTwH3I6knhNFdwms5A3wSB9bL2o7V1TVCwYBpWePVaoVUehmv10co6LhCrm1HKp3i0pULlE3soJNKpVtJrHTgo4g6elKQLVizwAHgdpmD2slKOkMkHDItd0nXdTJrq5TKJWLRmCPTDFqdWr3GlanLzC/MmhpXS6cznDtvXv9LG/gi8B9kDihbsACeBn4WaJl1zko6QyQSNjXhslgqspJewe/zEwyoc4DNwmomzcXLF8ibuAQU11nj3LmWEqss8OOA1D+cGYK1jkgodezB6GvRdZ1UKk04FDT1UHGjUSedSVMsFYhGoqqqqI1UqxWuTI0ztzArtZzxdqysrDq5Jvv1+HXg27IHNUOwAJ5FqGtL9ahaWVklGPATDpsbbyqVSiyvLON2uQmFwrYf62kndF1nObXEpSsXTUkEvZbl5RXOX7jcamL1EiKWLT3fwyzBagAvIArMt9TTtrKyasph6WvRdZ21bIbVTBq/30/A5O48CljLZrh05SKpdMoSAVlYWObS+ESriVUD+AnAlJwMswQLYAZxKPpusy5gF+nVjDiL12FuX0IQ5+ZWVlfIF/KEQmG8Hq/p12w3iqUiVyYvM7cwS61mzZGfqek5rkxI2zxrJv4jEjLar4fMPKztiAKvAoNmXsQuenqSjI2OWLpk60okGegbML0fYjtQLpeYXZhlxYTqCtdD13UuXppgacnRNa2uxwxwC6I5qimY6WGBSMU/B/xjMy9iF/l8gVx2nUQiblk6QrFYYCm1RLlcIuAP4PUqj2u3FEtFZmanmJiesCROtUmtVuPs2UuspOVXdGgSfhJ4xcwLmC1YICo5jNBCuVlbKZXLpNNrxOMxvF5zG6pupbAhXPnCOl6vV3lcOyCbW2NyZoLp2SlLhQpE3a4zr14g59wuNzfjz4HfNvsiZi8JN+lABOFHrLiYHbjdbg4fPkiXTZ2ZQ8EQPcleuhLmN3V1Eo1GnZX0CkupRctFapOVdIYLFy5b0qzVJiaAO4CM2ReySrAATgKPAy39NA0N9jM8PGBbKoLL5aars4vurm7C4fZttJrPr7O8sszK6orpeVTXQ9d1pqZmndyZeSfUgbdjsDDfTrFiSbjJFEKsHrTqgnaQza6Ty63T2dlhS+KnrusUinmWV5ZJr65Qq9Xwer1tsbtYLBVZWl5kcmaC+cU5CsW8bSkD1WqVs+cusbS0Ysv1LeTfAF+w6mJWelgAHoQS32PlRe3A6/VyeOwAnZ3Wtvu6HsFAkM54gnhHJ+EmLCC4V/KFPJm1VVYzaYqlot3mAOLQ/IWLV6hWq3abYjbPIFZOlpV/tVqwQBT5ewGR8tDy9Pf3cGBkqKkONXu9XmKRDmKxDqLhqKPK25TLZXL5HNncGtncWlOJQqPR4MrENPPzS3abYgU54E7Epppl2CFYAB/HQjfSbkKhIIfHDhKJNGcJGa/XSyQcJRqOEg6FCQZDTXGOsV6vUywWyBfy5PI51vO5phKorayvF7hw8TKFQnN4eRbwCWx4hu0SLIDPIc4btQWaprFvXy/7hweaytu6Hn6fn2AwRDAQxO/34/eJj8/nl7qhoOs6lUqZ8uanXKZYKlIsFihX7O2EsxMajQaTU7PMzS222hGbG/Fn2PTs2ilYfkQ86y67DLCDQMDP6KERRzc29Xq9eNwePB4vHo8Hj9uD2+1+Tci2emeNRgNd19F1nXq9Tq1eo1arUatVqdVrTesx7YRMJsul8QnbW4xZzHOIuJUt/9N2ChbAEPBDoLk7MphAT0+Skf2D+Hytv3vXalQqVSYmZ1r1eM2NWEY4GFN2GWBlWsN2ZIEfIY7uNP86SSL5fIGFRRGcjUZUCRkn0GjozMzOc/78OOutm7F+PeqIKgzP22mE3YIFcAXRXPHddhtiNbqus7aWYzmVxu/3mVocUGEMUWTvoiPaj5nEP0eUPLaVZhAsgO8DJ4DjdhtiB7VanVQqzWomS8DvJxBwTppBq5PJZLlw4TKzcwuOa0cmkf8GfNZuI8D+GNZWQsBjtEFS6c3oiEXZv3+AWKwtUtWakmw2x+TULGtrObtNsZtngIcAew5iXkMzCRbAPsQfqCXrZ+2WeDzG4EC/o3cUnUYmk2Vmdp5MJmu3Kc3ADMKBmLPbkE2aTbAAbgWeRFR4UADhcIiBgT66kwkVnDcBUcc9zezsAvl8UzgSzcAa8ADwst2GbKUZBQuEC/p1wGe3Ic2Ez+dlX38vvb1JVbhPAtVqlcXFFPPzS5QrFbvNaSYqwPsQIZqmolkFC0SqwxdpsSYWMtA0ja5EnN7e7qY5XO0kVjNrLC4ss5LOtOuO343QgY8Bf2G3IdthXYnM3fMXQBL4PZvtaDp0XSe1skpqZRW/30dvbzfJrk6VFnEDCsUiqdQqi4vLlMvKm7oBv0yTihU0t4e1yW8B/6fdRjiBcChIMpkgmUyY2qXaKRSLJVIraVLLafLtcyjZCP+SJn/WnCBYAL8PfNpuI5xEKBQkkYjT2dlBLBppi2C9rutkc+usrq6RTmfaqXKCDP7g5P13f+bU6WfttuOGNPOScCu/hDgs/XM22+EYCoUihUKRmZl5PG438XiMeLyDWCzSUkvHQrFIdm2dTGaNTCZLrXXrppvJ/4t4xpoeRwjWyfvv1k+dfvZTgBfRTVqxC2r1+msxLwCPx0MsGiEaCxOLRQmHQ3iaoP7VzajV6+TzBVGGOrtONrduWePTFubPgJ8/ef/djth9cIRgwWui9bOIcqw/a7c9TqZWq5FezYgO1hsE/H5C4SDhUJBwOEQwGMAf8NsiZLV6nXKpTLFYIp8vkC8UKeSLlMptVcbFCv4E+JRTxAocJFgAJ++/u37q9LM/jzgm8Es2m9NSlMrljR6Lmav+3ePxEPD7CAT8+P0+PF4vXo8Hr9eDZ+Ory+Xa+Giv/c4mmx5Qo6HTaDRoNBpUq6ImVrVao1qrUatWKZcrlEplSuWK8pqs4feAX3aSWIHDBAuEpwV89tTpZ/PAr9ttT6tTq9VYr9VYVxngrcS/Pnn/3f/CbiP2glN2Ca/H/wb8X3YboVA4iH+Og5+ZZikvs1dOAynEMYLW37dXKPaODvwi8Lt2G2KEVqjy+YeIYzwqIqtQbE8Z8Yz8od2GGKUVBAvgL4F3AWm7DVEomow0oprvX9ptiAxaRbBAdOC5Fxi32xCFokkYB96KKNfUErSSYAFcRIjWU3YbolDYzFOIZ+GC3YbIpNUEC0QQ/iHgb+w2RKGwib9BPAMt14esFQULRBeejwL/O6I9kULRDtQRaQsfRTwDLUerChaIbdz/G3gY0QBSoWhlUsB7ETlWjspe3w2tLFibfBfRrba562YoFHvnOeDNwHfsNsRs2kGwQLTWfhvwp3YbolBI5k8RzSJsax9vJe0iWCDW9D8NfAJo+2ZzCseTA/4pYk63ZLxqO9pJsDb5AnAHov+hQuFEfgDcCfy5zXZYTjsKFoiEupPAv0LtIiqcQx0xZ+8HLtlsiy20q2CBKAT4fwAPApM226JQ3IxJ4O2IOdu2BcPaWbA2OQ3cBnyeFt4OVjgWHbH0uw1x/KytUYIlWEPUin83cNlmWxSKTS4D70EE19dstqUpUIJ1Nd8FbgF+mzZ2uxW2U0PMwVtog9yq3aAE640UgV8F7gGet9kWRfvxPGLu/SpiLiq2oATr+vwIeAvwK6i8LYX55BBz7S2IuafYBiVYN6YG/A5wBPgiKiivkI+OmFtHEHNNhSJugBKsnTEPfBy4D3jaZlsUrcPTiDn1ccQcU9wEJVi7Y3OC/Y+oyqaKvXMZMYfUC3CXKMHaPTqiPvZx4BeAGXvNUTiIGcScOYaYQyrEsEuUYO2dCvBHwBjwGWDBXnMUTcwColP5GGLOVGy1xsEowTJOCfgD4BBiK7rlytIq9kwK+F8Rc+P3aaOqCmahBEseBUSy3wGEcE3ba47CRqYRc+AA8O8Qc0MhASVY8llHCNch4J8AP7TXHIWFPA98DHHvfxsxFxQSUYJlHlXgLxDlmR8CvoYKsrYiOuLePoSoUfWfEfdeYQJKsKzhe8CPASeA30N1qG4F0oi41AnEvf2evea0B9rIsTvttqEd8QOPIsrbvh3QbLVGsVN04HHgc8DfAmVbrWlDlGDZzyhCuH4K6LPZFsX2LCBKa3+ONq302SwowWoe3MC7gH8EfBiI2WtO25MFvgT8F0SJF1VKuwlQgtWcBBENYB9FxEfitlrTPmSAv0cs976JKu/SdCjBan58iB2o9yM6+47aa07LcQn4BmKn7zFUFnpTowTLeYwihOt9iIB9yFZrnEcBETj/OkKoVEzKQSjBcjYBRNffk4iT//cCEVstaj5yiB6U30c0cXgSdUTGsSjBai08iO4q9218HgAGbLXIemYRovT9jc+LqKJ4LYMSrNanG3jTxueWja8nEIF9J1MEzgAvAa9sfH0JWLbTKIW5KMFqT9yIWNhxYGTjc2DL12ZZVuYRxe4mgCsbXyeAVxGxJ5Vq0GZ47DZAYQt14PzGZzu6gf1AD5AEurZ8uje+RoEwYhcToHPjq5/XNwIKvJ4NvrrxtYIQohywgvCIVrZ8UsASotOx8pYUV/H/AzJBpmxi5SVvAAAAAElFTkSuQmCC";
function Io(t, n) {
  const e = No();
  return Io = function(r, o) {
    return r = r - 478, e[r];
  }, Io(t, n);
}
const ci = Io;
(function(t, n) {
  const e = Io, r = t();
  for (; ; )
    try {
      if (parseInt(e(482)) / 1 + parseInt(e(487)) / 2 * (parseInt(e(480)) / 3) + -parseInt(e(490)) / 4 + -parseInt(e(489)) / 5 + parseInt(e(479)) / 6 * (parseInt(e(485)) / 7) + parseInt(e(481)) / 8 * (parseInt(e(484)) / 9) + parseInt(e(478)) / 10 * (parseInt(e(486)) / 11) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(No, 439838);
function No() {
  const t = ["3438192jHKyng", "972750iZIaHj", "212238cIEJjw", "7716aeBfGq", "2829688SrQetx", "269183IborQg", "div", "9QyvWmq", "49zDcrpC", "11RxcnSD", "654pYzcKK", "img", "2547190xBmxAb"];
  return No = function() {
    return t;
  }, No();
}
const pv = _t[ci(483)]`
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
`, Ft = _t[ci(483)]`
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
`, zt = _t.p`
  height: 5px;
  margin-top: 2px;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
`, mv = _t[ci(488)]`
  position: absolute;
  backdrop-filter: blur(46px);
  border-radius: 50%;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.723);
  top: 50%;
  right: 5%;
`, gv = _t[ci(483)]`
  user-select: none;
  transition: opacity 0.6s ease;
  z-index: 3;
  opacity: 0.3;
`;
(function(t, n) {
  const e = Un, r = t();
  for (; ; )
    try {
      if (parseInt(e(104)) / 1 * (parseInt(e(113)) / 2) + parseInt(e(102)) / 3 * (parseInt(e(139)) / 4) + -parseInt(e(140)) / 5 * (-parseInt(e(130)) / 6) + -parseInt(e(106)) / 7 * (-parseInt(e(127)) / 8) + parseInt(e(145)) / 9 + -parseInt(e(137)) / 10 * (-parseInt(e(144)) / 11) + -parseInt(e(109)) / 12 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(jo, 941168);
function Un(t, n) {
  const e = jo();
  return Un = function(r, o) {
    return r = r - 102, e[r];
  }, Un(t, n);
}
const Gc = () => {
  const t = Un;
  return document[t(126) + t(142)] || document[t(135) + t(133)] || document[t(115) + t(123) + t(112)] || document[t(117) + t(146)];
}, vv = (t) => {
  const n = Un, e = document[n(119) + n(141)](n(124) + t);
  e[n(136) + n(114)] ? e[n(136) + n(114)]() : e[n(108) + n(107)] ? e[n(108) + n(107)]() : e[n(105) + n(121) + n(128)] ? e[n(105) + n(121) + n(128)]() : e[n(134) + n(122)] && e[n(134) + n(122)]();
}, yv = () => {
  const t = Un;
  document[t(131) + t(103)] ? document[t(131) + t(103)]() : document[t(143) + t(132)] ? t(120) === t(138) ? _0x570d77[t(134) + t(122)]() : document[t(143) + t(132)]() : document[t(118) + t(147)] ? t(116) !== t(111) ? document[t(118) + t(147)]() : _0x146f6c[t(136) + t(114)]() : document[t(110) + t(129)] && (t(125) === t(125) ? document[t(110) + t(129)]() : _0x2d4d60[t(108) + t(107)]());
};
function jo() {
  const t = ["screenElem", "#screen_", "McANw", "fullscreen", "2776uIVWHF", "een", "screen", "6uaNYAf", "exitFullsc", "ullScreen", "eenElement", "msRequestF", "mozFullScr", "requestFul", "15107410eGlrRP", "sumLw", "4czfQsb", "1487045SbCTOV", "tor", "Element", "mozCancelF", "11mgPRJN", "1266354KYQdzJ", "enElement", "Fullscreen", "51036SzPNmD", "reen", "46399SkOnCb", "webkitRequ", "6531bkVZIb", "FullScreen", "mozRequest", "28987536MOIgEh", "msExitFull", "vbIIe", "ent", "46jaFfHv", "lscreen", "webkitFull", "YCuFd", "msFullscre", "webkitExit", "querySelec", "jwaVe", "estFullscr", "ullscreen"];
  return jo = function() {
    return t;
  }, jo();
}
(function(t, n) {
  const e = wr, r = t();
  for (; ; )
    try {
      if (-parseInt(e(421)) / 1 + -parseInt(e(577)) / 2 * (parseInt(e(356)) / 3) + parseInt(e(429)) / 4 * (parseInt(e(330)) / 5) + parseInt(e(458)) / 6 + -parseInt(e(526)) / 7 + -parseInt(e(585)) / 8 * (-parseInt(e(416)) / 9) + parseInt(e(522)) / 10 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Lo, 980003);
function Lo() {
  const t = [".999-4.909", "focus", ".w3.org/20", "M20 11V5c0", ".103.897 2", "gTyOw", "mouse", "KNLeb", "017.082-.0", "2-.082-.03", ".897-2-2-2", "Back", "XCHyG", "getAttribu", "33L12 5.86", "4zm0 5h16v", "3 9a1.003 ", "4v2h6zM8 2", "0 1.767.51", "0a.999.999", "webkitfull", "copy", "69-.823l-1", "touch_", "min", "-1-1H8a1 1", "clipboard", "10c-1.103 ", "7a1 1 0 0 ", "M10 4H8v4H", "1 0 0 0-1-", "48 3.832a1", "-2-5zM4 17", "sync", "max", "mousemove", "zIndex", "volume", "3 0-2 .897", "Sync", "2-2h-4V4h1", "m4.431 12.", "7zm11-5h-2", "M16 21c3.5", "7-2-2-2h-3", " 0 0 1 1h1", "Recents", ".257 5.127", "RvZnO", "117aEYxKL", "M20 2H10c-", "v5h-5v2h7z", "7.032 15 7", "children", "857764etxJtH", ".089-1.218", "enchange", ".002 16H6.", "-.897 2-2V", "-3.229 2-5", "click", "061-.016.0", "4RGZoNp", " 0 0 0-1 1", "Home", "back", "PmeHl", "BeDPn", "set", "H4zm16-6h-", "height", "6v6h2v-4h4", "-7v2h5z", " 2-2v-7c0-", "http://www", "M20 3H4a1 ", "103.897 2 ", "RRwWH", "pageX", "1.003 0 0 ", "9.527 4.54", "0-2 .897-2", "-2 2v6c0 1", "tlNvG", ".024l-14-1", "13%", "00/svg", "fill", "gClientRec", "255, 255, ", "M6 12h6v2H", "4082808PHPOdC", "08 3.677L7", "ZimOq", "now", "fullscreen", " 2v5H4V5h3", "Vziby", "mouseup", "H6z", "boVMZ", "27-1.547 5", " 2 2zm0-8h", "M5 5h5V3H3", "YKAaf", "yYYlK", "0 0 0 .782", "-.769zm-8.", " 2v13c0 1.", "addEventLi", "zm0-6h-4V4", "6zm0 4h6v2", "readText", "-1.052-3.3", "4c-.025-.0", "XQYAR", "top", "5.46 1.701", "mozfullscr", "lOrph", "H13z", "0v10z", "grab", "EyxpW", "v2z", " 0 0 0 1.0", "M16.75 2h-", "taskId", " 0 0 0-.38", "eenchange", "822 13 9A1", "6l3.612-4.", "touch_clas", " 0 0 0-.57", "touchmove", "stener", "0 18V4h10l", "mousedown", "AoqoJ", "2 2zm2 7v-", "pageY", "h-5c-1.103", "showMenu", "0 1-1V4a1 ", "path", "2H4zm0 5h1", "v7h2zm5 14", "shortcut", " 3.999 4.0", "zM4 20V10h", "1.103-.897", ".832L6.697", "c1.103 0 2", "h2.697l5.7", "VTjWl", "26554750LzKOeI", "03-.897-2-", "674.31a1 1", "div", "608244cZbKSO", "3 0 2-.897", "includes", ".614 16 19", "0V4a1 1 0 ", "12%", "V5h14v14z", "0 0 1.645z", "-2-2-2zm-9", "M16 7v10c1", "preventDef", "h4zm12-6h-", "v2h8V5h3v6", "move", "57-5.428 6", "action", "416 3.377 ", "Screen", "right", "forEach", "assistive_", "target", "isDown", "touchstart", "Paste", "getBoundin", "7 2-2V4c0-", "7 2-2v-4h4", "027 1.027 ", "17-.056-.0", " 1 0 0 0 1", "2 2h10c1.1", "rUUXa", "data-id", " 7H4c-1.10", "03 0 2-.89", "75.931l2 1", "liRrX", "2 2h7c1.10", ".21a1 1 0 ", "home", "msfhk", "touchend", "cLSmD", "Show ID", "4v-4c0-1.1", "93-.019a1.", "menu_", "cursor", "4.445-2.96", ".897-2 2v4", "476640HMojwA", "svg", "-2-2-2zm-1", "zEdmd", "7 16 3v2c2", "8.347l-3.0", "msfullscre", "8v12.264l-", "182872LqPbxp", "6v2H4z", "47 3.999 7", "0 0 24 24", "assistive", "rgba(255, ", ".004 1.004", "clientX", "11.75", "closest", "0 0-1.554-", " 0 0 0-1.5", ".225-1.1 2", " 5.999-9S1", ".387 1.386", "shortcutCo", "3px", "removeEven", "a1 1 0 0 0", "a.995.995 ", "-1.103-.89", "circle", "9 21V3a1 1", "M4 6h16v2H", "s-.775-3.9", " 2v16c0 1.", "Volume", "ault", "l10.283 7.", "6a1 1 0 0 ", "HZLvO", "touch", "20px", "2-.116C7.0", "H4c-1.103 ", "left", "ent", "1zm-1 16H5", "clientY", "type", "current", "1.048z", "h-2v6h6z", "59 15.016 ", "passive", "27.05A1 1 ", "0 0-.396-1", "opacity", " 0-2 .897-", "hDeQk", "Icon", "paste", "m-2-4h2V3h", "width", "get", "1.103 0-2 ", "990545QGiYHX", ".116c.026-", "1v16a1 1 0", " 2v10c0 1.", "landscape", "3c.033 0 .", "kmPGL", " 15H4V9z", "kCqHl", "jGXAe", "tListener", "0 0 0 14 2", "recents", "fkIpo", "7h7l.001 7", "Iudyt", "0h2v-6H4v2", "Hide ID", "screenchan", "75z", "device_id", "S18.387 17", "H5v-5H3v7h", "3a.986.986", "4c0-1.103-", "Copy", "24bKdmsq", "M20.978 13", "345-5.236 ", "data", ".015.057-.", "1 0 0 0-1 ", "0 0 0 .38-", "change", "10l.002 10", "shortcutEv", "2 2h7c0 1."];
  return Lo = function() {
    return t;
  }, Lo();
}
function wr(t, n) {
  const e = Lo();
  return wr = function(r, o) {
    return r = r - 313, e[r];
  }, wr(t, n);
}
const bv = il((t, n) => {
  const e = wr, { displayId: r, isMobile: o, onSenData: i, status: s, imageRef: a, isShowDeviceId: c } = t, [u, f] = rt(0), [d, l] = rt(0), [v, g] = rt(null), [x, h] = rt(0), E = qe(null), w = qe(null), m = qe(null), C = {};
  C[e(574)] = e(539), C[e(321)] = 0.3, C[e(403)] = 999;
  const [y, O] = rt(C), A = {};
  A[e(403)] = 999, A[e(437)] = "", A[e(327)] = e(452);
  const [L, F] = rt(A), Y = {};
  Y[e(403)] = 1e3;
  const [re, G] = rt(Y), B = qe(null), [W, H] = rt(null), ee = qe(null), Z = (R) => {
    const b = e;
    if (b(615) === b(336)) _0x1427ee(_0x4f4906);
    else {
      if (R[b(536) + b(612)](), s[b(328)][b(509)] == !0) return;
      const fe = Lt[R[b(313)]], ge = a[b(314)], Re = m[b(314)], X = ge[b(551) + b(455) + "t"](), ve = Re[b(551) + b(455) + "t"](), ye = 3;
      let tt, lt;
      const Bt = X[b(327)] - ve[b(327)], cn = X[b(437)] - ve[b(437)];
      if (R[b(313)][b(528)](b(616))) {
        const { touches: Me, changedTouches: $e } = R, Ge = Me[0] ?? $e[0];
        tt = Ge[b(445)], lt = Ge[b(507)];
      } else R[b(313)][b(528)](b(373)) && (tt = R[b(592)], lt = R[b(623)]);
      if (fe == Lt[b(504)])
        if (b(415) !== b(415)) {
          const Me = {};
          Me[b(509)] = !0, Me[b(548)] = !1;
          const $e = { ..._0x4b23bd[b(328)], ...Me };
          _0xc171da[b(435)]($e);
        } else {
          s[b(435)]({ ...s[b(328)], isDown: !0 }), f(tt - ve[b(620)]), l(lt - ve[b(483)]);
          const Me = {};
          Me[b(321)] = 1, Me[b(574)] = b(489);
          const $e = { ...y, ...Me };
          O($e), h(performance[b(461)]());
        }
      else if (fe == Lt[b(402)])
        if (b(343) !== b(343)) _0x53d100[b(476) + b(502)](b(427), _0x12e7f1);
        else {
          if (s[b(328)][b(548)] == !1) return;
          let Me = tt - u - X[b(620)], $e = lt - d - X[b(483)];
          Me = Math[b(401)](ye, Math[b(391)](Me, Bt) - ye), $e = Math[b(401)](ye, Math[b(391)]($e, cn) - ye);
          const Ge = {};
          Ge[b(483)] = $e + "px", Ge[b(620)] = Me + "px";
          const kt = { ...L, ...Ge };
          F(kt);
          const et = {};
          et.x = Me, et.y = $e, ee[b(314)] = et;
        }
      else if (fe == Lt[b(465)])
        if (b(490) !== b(339)) {
          const Me = performance[b(461)]() - x;
          if (v == Lt[b(504)] || Me < 100) {
            const ht = {};
            ht[b(509)] = !0, ht[b(548)] = !1, s[b(435)]({ ...s[b(328)], ...ht });
          } else s[b(435)]({ ...s[b(328)], isDown: !1 });
          const $e = ee[b(314)].x > Bt / 2 ? Bt - ye : ye, Ge = {};
          Ge[b(620)] = $e + "px";
          const kt = { ...L, ...Ge };
          F(kt);
          const et = {};
          et[b(321)] = 0.3, et[b(574)] = b(539);
          const Xt = { ...y, ...et };
          O(Xt);
        } else _0x5d209b && (_0x112eca[b(314)] = _0x353192), _0x7c0d34();
      g(fe), Re[b(368)]();
    }
  }, J = async (R) => {
    const b = e;
    R[b(536) + b(612)]();
    const fe = R[b(547)][b(594)](b(525))[b(380) + "te"](b(559));
    if (fe === b(462))
      if (b(467) === b(563)) {
        const ge = _0x1dc07f();
        _0x1212d6(_0x90bd6, ge);
      } else if (Gc())
        b(434) === b(434) ? yv() : _0x3c07d2[b(476) + b(502)](_0x3e4cff, _0x17b6c1);
      else if (b(444) === b(472)) {
        const Re = { ..._0x3897e2[b(328)] };
        Re[b(548)] = !0, _0x15dbf6[b(435)](Re), _0xce9171(_0x4ecbad - _0x3a21a4[b(620)]), _0x22c87f(_0x1d9c2c - _0x3c6e44[b(483)]);
        const X = {};
        X[b(321)] = 1, X[b(574)] = b(489);
        const ve = { ..._0x2ccca8, ...X };
        _0x19948d(ve), _0x128ff4(_0x4ae1f4[b(461)]());
      } else vv(r);
    else if (b(338) === b(482)) _0x4cb55a = _0x3e637b[b(592)], _0x30ca9b = _0x37a164[b(623)];
    else {
      const ge = {};
      ge[b(541)] = b(365) + b(621), ge[b(514)] = fe, ge[b(359)] = "";
      const Re = ge;
      fe === b(325) && (b(345) === b(323) ? _0x1673fa(() => {
        const X = b, ve = { ..._0x10a08b };
        ve[X(321)] = _0xf63c40[X(328)][X(509)] ? 1 : 0, _0x19ee3e(ve);
      }) : Re[b(359)] = await navigator[b(393)][b(479)]()), fe === b(388) && (Re[b(494)] = b(600) + "py"), i(Ds, Re);
    }
    s[b(435)]({ ...s[b(328)], showMenu: !1 }), w[b(314)][b(368)]();
  }, Q = (R) => {
    const b = e;
    if (b(558) === b(558)) {
      const fe = Gc();
      i(dv, fe);
    } else {
      const fe = {};
      fe[b(403)] = 999, fe[b(437)] = _0x5914ad[b(314)] == b(334) ? b(531) : null, fe[b(327)] = _0x4b90f7[b(314)] != b(334) ? b(531) : null, fe[b(483)] = b(617), fe[b(544)] = b(601), _0x52e7b2(fe);
    }
  };
  ot(() => {
    requestAnimationFrame(() => {
      const R = wr, b = { ...re };
      b[R(321)] = s[R(328)][R(509)] ? 1 : 0, G(b);
    });
  }, [s]), ot(() => {
    const R = e;
    if (R(464) !== R(464)) _0x25a742[R(476) + R(502)](_0x2d5850, _0x2691a2);
    else {
      const b = a[R(314)], fe = [R(462) + R(363), R(387) + R(348) + "ge", R(485) + R(496), R(583) + R(423)];
      return b && fe[R(545)]((ge) => {
        const Re = R;
        b[Re(476) + Re(502)](ge, Q);
      }), () => {
        const ge = R;
        ge(567) !== ge(433) ? b && b[ge(602) + ge(340)](ge(427), Q) : _0x2780cb(_0x39b052);
      };
    }
  }, []), ot(() => {
    const R = e;
    if (R(486) === R(486)) {
      const b = m[R(314)], fe = w[R(314)];
      if (fe && fe[R(476) + R(502)](R(427), J), b)
        if (R(374) === R(374)) {
          const ge = {};
          ge[R(318)] = !1;
          const Re = ge;
          return o ? (b[R(476) + R(502)](R(549), Z, Re), b[R(476) + R(502)](R(501), Z, Re), b[R(476) + R(502)](R(568), Z)) : R(372) === R(372) ? [R(402), R(504), R(465)][R(545)]((X) => {
            const ve = R;
            ve(580) === ve(580) ? b[ve(476) + ve(502)](X, Z) : _0xc9e549[ve(494)] = ve(600) + "py";
          }) : _0xdf470f && _0x53ee73[R(602) + R(340)](R(427), _0x2958af), () => {
            const X = R;
            if (X(460) !== X(505)) {
              if (fe && fe[X(602) + X(340)](X(427), J), b)
                if (o) X(450) !== X(379) ? [X(549), X(501), X(568)][X(545)]((ve) => {
                  const ye = X;
                  b[ye(602) + ye(340)](ve, Z);
                }) : _0x3cdafa[X(602) + X(340)](X(427), _0x30e78f);
                else if (X(521) !== X(521)) {
                  const { touches: ve, changedTouches: ye } = _0x2f0fb6, tt = ve[0] ?? ye[0];
                  _0x5f2c52 = tt[X(445)], _0xa6de69 = tt[X(507)];
                } else [X(402), X(504), X(465)][X(545)]((ve) => {
                  const ye = X;
                  b[ye(602) + ye(340)](ve, Z);
                });
            } else [X(549), X(501), X(568)][X(545)]((ve) => {
              const ye = X;
              _0x1fb44b[ye(602) + ye(340)](ve, _0xc39246);
            });
          };
        } else _0x4b9356[R(602) + R(340)](_0x3d2f83, _0xe2b70f);
    } else {
      const b = _0xb7bb4d[R(461)]() - _0x30c7d3;
      if (_0x5eb351 == _0x501b2b[R(504)] || b < 100) {
        const ye = {};
        ye[R(509)] = !0, ye[R(548)] = !1;
        const tt = { ..._0xf94cf2[R(328)], ...ye };
        _0x1131ec[R(435)](tt);
      } else {
        const ye = { ..._0x311c56[R(328)] };
        ye[R(548)] = !1, _0x8d72d6[R(435)](ye);
      }
      const fe = _0x8591b7[R(314)].x > _0x3cd681 / 2 ? _0x515676 - _0x3ba794 : _0x129640, ge = {};
      ge[R(620)] = fe + "px";
      const Re = { ..._0x48d089, ...ge };
      _0x18c67e(Re);
      const X = {};
      X[R(321)] = 0.3, X[R(574)] = R(539);
      const ve = { ..._0x14f5f3, ...X };
      _0x2df05f(ve);
    }
  }, [o, Z]);
  const se = () => {
    const R = e;
    if (R(471) === R(471)) {
      const b = {};
      b[R(403)] = 999, b[R(437)] = B[R(314)] == R(334) ? R(531) : null, b[R(327)] = B[R(314)] != R(334) ? R(531) : null, b[R(483)] = R(617), b[R(544)] = R(601), F(b);
    } else {
      if (_0x489910[R(328)][R(548)] == !1) return;
      let b = _0x10d061 - _0x5b13d9 - _0x90450c[R(620)], fe = _0x5143e2 - _0x5d25d1 - _0x451514[R(483)];
      b = _0x50e42c[R(401)](_0x1a96b7, _0x546aa4[R(391)](b, _0x13cf5c) - _0x24a902), fe = _0x386304[R(401)](_0x43b117, _0x3fbe1f[R(391)](fe, _0x25b6fe) - _0x44da87);
      const ge = {};
      ge[R(483)] = fe + "px", ge[R(620)] = b + "px";
      const Re = { ..._0xd4ef37, ...ge };
      _0x52df8c(Re);
      const X = {};
      X.x = b, X.y = fe, _0x3ee199[R(314)] = X;
    }
  };
  sl(n, () => ({ fixTouch: (R) => {
    const b = e;
    R && (B[b(314)] = R), se();
  }, setFullscreen: (R) => {
    const b = e;
    b(569) === b(569) ? H(R) : _0x6e787[b(314)] = _0x436144;
  } }));
  const oe = {};
  oe[e(454)] = e(590) + e(456) + "1)";
  const K = {};
  K.d = W ? e(396) + e(384) + e(346) + e(537) + e(438) + e(477) + e(316) : e(470) + e(513) + e(352) + e(409) + e(418) + e(326) + e(439);
  const te = {};
  te[e(420)] = e(543);
  const he = {};
  he[e(454)] = e(590) + e(456) + "1)";
  const ue = {};
  ue.d = e(417) + e(329) + e(576) + e(619) + e(448) + e(333) + e(443) + e(557) + e(561) + e(553) + e(519) + e(425) + e(354) + e(377) + e(516) + e(364) + e(436) + e(571) + e(523) + e(407) + e(488);
  const me = {};
  me.d = e(457) + e(478) + e(466);
  const I = {};
  I[e(420)] = e(355);
  const j = {};
  j[e(454)] = e(590) + e(456) + "1)";
  const k = {};
  k.d = e(370) + e(605) + e(411) + e(603) + e(392) + e(430) + e(619) + e(448) + e(475) + e(443) + e(366) + e(443) + e(564) + e(527) + e(440) + e(517) + e(534) + e(463) + e(538) + e(508) + e(322) + e(506) + e(344) + e(487);
  const N = {};
  N[e(420)] = e(550);
  const S = {};
  S[e(454)] = e(590) + e(456) + "1)";
  const D = {};
  D.d = e(493) + e(394) + e(448) + e(610) + e(443) + e(557) + e(561) + e(552) + e(517) + e(579) + e(503) + e(424) + e(349);
  const xe = {};
  xe.cx = e(593), xe.cy = "18", xe.r = "1";
  const z = {};
  z[e(420)] = e(c ? 347 : 570);
  const Qe = {};
  Qe[e(454)] = e(590) + e(456) + "1)";
  const Oe = {};
  Oe.d = e(410) + e(468) + e(367) + e(598) + e(447) + e(581) + e(599) + e(515) + e(587) + e(351) + e(529) + e(491);
  const ft = {};
  ft.d = e(535) + e(597) + e(426) + e(609) + e(399) + e(520) + e(398) + e(591) + e(492) + e(319) + e(341) + e(530) + e(595) + e(518) + e(560) + e(405) + e(449) + e(371) + e(469) + e(335) + e(428) + e(572) + e(554) + e(362) + e(331) + e(360) + e(375) + e(381) + e(584) + e(575) + e(481) + e(555) + e(376) + e(353) + e(495) + e(618) + e(317) + e(419) + e(337);
  const Ot = {};
  Ot[e(420)] = e(611);
  const ct = {};
  ct[e(454)] = e(590) + e(456) + "1)";
  const Rt = {};
  Rt.d = e(357) + e(565) + e(320) + e(451) + e(386) + e(596) + e(562) + e(395) + e(385) + e(498) + e(542) + e(484) + e(480) + e(540) + e(422) + e(604) + e(473) + e(474) + e(524) + e(500) + e(582) + e(459) + e(414) + e(613) + e(358) + e(315);
  const Le = {};
  Le[e(420)] = e(406);
  const Ae = {};
  Ae[e(454)] = e(590) + e(456) + "1)";
  const Ye = {};
  Ye.d = e(608) + e(382) + e(512) + e(586);
  const vt = {};
  vt[e(420)] = e(413);
  const dt = {};
  dt[e(454)] = e(590) + e(456) + "1)";
  const rn = {};
  rn.d = e(442) + e(361) + e(332) + e(412) + e(614) + e(510) + e(397) + e(622) + e(532);
  const on = {};
  on[e(420)] = e(431);
  const Cn = {};
  Cn[e(454)] = e(590) + e(456) + "1)";
  const sn = {};
  sn.d = e(408) + e(497) + e(556) + e(607) + e(596) + e(389) + e(383) + e(446) + e(533);
  const an = {};
  return an[e(420)] = e(378), U.jsxs(U.Fragment, { children: [s[e(328)][e(509)] ? U.jsxs(pv, { id: e(546) + e(573) + r, style: re, ref: w, children: [U.jsxs(Ft, { "data-id": e(462), children: [U.jsx(e(578), { xmlns: e(441) + e(369) + e(453), width: "28", height: "28", viewBox: e(588), style: oe, children: U.jsx(e(511), K) }), U.jsx(zt, te)] }), U.jsxs(Ft, { "data-id": e(388), children: [U.jsxs(e(578), { xmlns: e(441) + e(369) + e(453), width: "28", height: "28", viewBox: e(588), style: he, children: [U.jsx(e(511), ue), U.jsx(e(511), me)] }), U.jsx(zt, I)] }), U.jsxs(Ft, { "data-id": e(325), children: [U.jsx(e(578), { xmlns: e(441) + e(369) + e(453), width: "28", height: "28", viewBox: e(588), style: j, children: U.jsx(e(511), k) }), U.jsx(zt, N)] }), U.jsxs(Ft, { "data-id": e(350), children: [U.jsxs(e(578), { xmlns: e(441) + e(369) + e(453), width: "28", height: "28", viewBox: e(588), style: S, children: [U.jsx(e(511), D), U.jsx(e(606), xe)] }), U.jsx(zt, z)] }), U.jsxs(Ft, { "data-id": e(404), children: [U.jsxs(e(578), { xmlns: e(441) + e(369) + e(453), width: "25", height: "25", viewBox: e(588), style: Qe, children: [U.jsx(e(511), Oe), U.jsx(e(511), ft)] }), U.jsx(zt, Ot)] }), U.jsxs(Ft, { "data-id": e(400), children: [U.jsx(e(578), { xmlns: e(441) + e(369) + e(453), width: "28", height: "28", viewBox: e(588), style: ct, children: U.jsx(e(511), Rt) }), U.jsx(zt, Le)] }), U.jsxs(Ft, { "data-id": e(342), children: [U.jsx(e(578), { xmlns: e(441) + e(369) + e(453), width: "28", height: "28", viewBox: e(588), style: Ae, children: U.jsx(e(511), Ye) }), U.jsx(zt, vt)] }), U.jsxs(Ft, { "data-id": e(566), children: [U.jsx(e(578), { xmlns: e(441) + e(369) + e(453), width: "28", height: "28", viewBox: e(588), style: dt, children: U.jsx(e(511), rn) }), U.jsx(zt, on)] }), U.jsxs(Ft, { "data-id": e(432), children: [U.jsx(e(578), { xmlns: e(441) + e(369) + e(453), width: "28", height: "28", viewBox: e(588), style: Cn, children: U.jsx(e(511), sn) }), U.jsx(zt, an)] })] }) : null, U.jsx(gv, { id: e(546) + e(499) + "s_" + r, className: e(589), ref: E, style: y, children: U.jsx(mv, { style: L, src: xv, className: e(589), id: e(546) + e(390) + r, alt: e(324), ref: m, draggable: !1 }) })] });
});
function qn(t, n) {
  const e = Mo();
  return qn = function(r, o) {
    return r = r - 287, e[r];
  }, qn(t, n);
}
const De = qn;
(function(t, n) {
  const e = qn, r = t();
  for (; ; )
    try {
      if (parseInt(e(315)) / 1 + -parseInt(e(301)) / 2 + -parseInt(e(291)) / 3 + -parseInt(e(316)) / 4 + parseInt(e(353)) / 5 * (parseInt(e(308)) / 6) + parseInt(e(317)) / 7 * (-parseInt(e(296)) / 8) + parseInt(e(288)) / 9 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Mo, 744235);
function Mo() {
  const t = ["autoResize", "ctx", "1263316FDTFyC", "drawImage", "hardwareAc", "phibR", "setVideoMe", "VCXGc", "Decoder er", "6sKnSfR", "decode", "isMobile", "decoder", "lock", "rLatency", "height", "775978dmmWpZ", "465340MBeUTe", "513534pFCayP", "key", "maxWidth", "setOrienta", "setFullscr", "landscape", "error", "innerHeigh", "clearRect", "etIYV", "configure", "isKeyFrame", "codedHeigh", "tion", "codec", "delta", "concatUint", "ncPSd", "round", "UQKRD", "8Arrays", "rootSize", "state", "optimizeFo", "from", "concat", "length", "canvas", "close", "dware", "now", "buildDecod", "prefer-har", "codedWidth", "celeration", "getContext", "3418175XuMFfJ", "een", "isPlay", "setIsConne", "avc1.64001", "scale", "lRfEr", "ExMKf", "LQPqJ", "rotate", "eLoKn", "ror:", "videoMeta", "resizedWid", "17036586Xetnkk", "orientatio", "hxPLA", "1399383AbDrXt", "AEecE", "width", "portrait", "kJrSa", "152kdWKMV", "iframe", "translate"];
  return Mo = function() {
    return t;
  }, Mo();
}
var Kc, Zc, Jc, Qc, el, tl, nl, rl, ol;
ol = De(321) + De(354), rl = De(287) + "th", nl = De(320) + De(330), tl = De(299), el = De(305) + "ta", Qc = De(348) + "er", Jc = De(328), Zc = De(333) + De(337), Kc = De(309);
class Sv {
  constructor(n, e, r, o) {
    Pt(this, ol, (n) => {
      const e = De;
      if (n) {
        const r = window[e(324) + "t"] + 10, o = this[e(287) + "th"](null, this[e(338)][e(293)], this[e(338)][e(314)], r, r);
        this[e(293)] = o[e(293)], this[e(314)] = o[e(314)];
      } else this[e(293)] = this[e(338)][e(293)], this[e(314)] = this[e(338)][e(314)];
    });
    Pt(this, rl, (n, e, r, o, i) => {
      const s = De;
      let a;
      if (n && o > this[s(319)] && r > e && (i = this[s(319)]), i)
        if (s(304) === s(336)) {
          let c;
          return _0x458880 && _0x311e42 > this[s(319)] && _0x33bc2e > _0x36d8b9 && (_0x4f29be = this[s(319)]), _0x120657 && (c = _0x5d7e0a / _0x3d0372 * _0x52890b, c > _0x680fe0 && (_0x157c23 = _0x2d9591 / _0x44839f * _0x4ef6da, c = _0x5a348e / _0x4ce7ba * _0x2ff660)), { width: _0x3b14cc[s(335)](_0x3d76b5), height: _0x56c7e7[s(335)](c) };
        } else a = i / e * r, a > o && (s(359) !== s(359) ? (_0x17a206 = this[s(333) + s(337)](this[s(365)], this[s(297)]), this[s(355)] = !0) : (i = o / r * e, a = o / e * e));
      return { width: Math[s(335)](i), height: Math[s(335)](a) };
    });
    Pt(this, nl, (n) => {
      const e = De;
      if (this[e(289) + "n"] = n, this[e(310)]) {
        if (e(292) === e(334))
          return (_0x47b28a[_0x2a676d + 3] & 31) === 5;
        screen[e(289) + "n"][e(312)](n);
      }
    });
    Pt(this, tl, (n, e) => {
      var a;
      const r = De, o = this[r(310)] == !0 ? window[r(324) + "t"] - 12 : window[r(324) + "t"] - 50, i = this[r(287) + "th"](!0, n, e, o, o);
      this[r(293)] = i[r(293)], this[r(314)] = i[r(314)], !this[r(338)] && ((a = this[r(356) + "ct"]) == null || a.call(this, !0));
      const s = {};
      s[r(293)] = i[r(293)], s[r(314)] = i[r(314)], this[r(338)] = s;
    });
    Pt(this, el, (n) => {
      const e = De, r = n instanceof Uint8Array ? n : new Uint8Array(n);
      this[e(365)] = r;
    });
    Pt(this, Qc, () => {
      const n = De, e = new VideoDecoder({ output: async (o) => {
        var a;
        const i = qn, s = await createImageBitmap(o);
        if ((!this[i(293)] || !this[i(314)]) && this[i(299)](o[i(350)], o[i(329) + "t"]), this[i(300)][i(325)](0, 0, this[i(293)], this[i(314)]), this[i(289) + "n"] == i(322)) i(361) !== i(361) ? (!this[i(355)] && (_0x12cd89 = this[i(333) + i(337)](this[i(365)], this[i(297)]), this[i(355)] = !0), this[i(311)][i(309)](new _0x2047c8({ timestamp: _0xd8d34[i(347)]() * 1e3, type: _0x31e18c ? i(318) : i(332), data: _0x1f2392 }))) : (this[i(344)][i(293)] = this[i(314)], this[i(344)][i(314)] = this[i(293)], this[i(300)][i(298)](0, this[i(293)]), this[i(300)][i(362)](Math.PI / 2), this[i(300)][i(358)](-1, -1), this[i(300)][i(302)](s, 0, 0, this[i(293)], this[i(314)]));
        else if (i(290) === i(295)) {
          const c = this[i(310)] == !0 ? _0x23f91c[i(324) + "t"] - 12 : _0x38fede[i(324) + "t"] - 50, u = this[i(287) + "th"](!0, _0x452cb4, _0x27ada3, c, c);
          this[i(293)] = u[i(293)], this[i(314)] = u[i(314)], !this[i(338)] && ((a = this[i(356) + "ct"]) == null || a.call(this, !0));
          const f = {};
          f[i(293)] = u[i(293)], f[i(314)] = u[i(314)], this[i(338)] = f;
        } else this[i(344)][i(293)] = this[i(293)], this[i(344)][i(314)] = this[i(314)], this[i(300)][i(302)](s, 0, 0, this[i(293)], this[i(314)]);
        s[i(345)](), o[i(345)]();
      }, error: (o) => console[n(323)](n(307) + n(364), o) }), r = {};
      return r[n(331)] = n(357) + "E", r[n(303) + n(351)] = n(349) + n(346), r[n(340) + n(313)] = !0, e[n(327)](r), e;
    });
    Pt(this, Jc, (n) => {
      var r;
      const e = De;
      for (let o = 0; o <= n[e(343)] - 4; o++)
        if (n[o] === 0 && n[o + 1] === 0 && n[o + 2] === 0 && n[o + 3] === 1)
          if (e(360) !== e(360)) (r = this[e(356) + "ct"]) == null || r.call(this, !0);
          else
            return (n[o + 4] & 31) === 5;
      for (let o = 0; o <= n[e(343)] - 3; o++)
        if (n[o] === 0 && n[o + 1] === 0 && n[o + 2] === 1)
          return (n[o + 3] & 31) === 5;
      return !1;
    });
    Pt(this, Zc, (n, e) => {
      const r = De, o = Array[r(341)](n)[r(342)](Array[r(341)](e));
      return new Uint8Array(o);
    });
    Pt(this, Kc, (n) => {
      const e = De;
      if (!this[e(311)] || this[e(311)][e(339)] == e(345) || !this[e(365)]) return;
      let r = n instanceof Uint8Array ? n : new Uint8Array(n);
      const o = this[e(328)](r);
      if (o && (this[e(297)] = r), this[e(297)] && this[e(365)]) {
        if (e(306) !== e(306))
          return (_0x4ce3ae[_0x3d7156 + 4] & 31) === 5;
        if (!this[e(355)])
          if (e(363) === e(326)) {
            const i = _0x4ee55e[e(324) + "t"] + 10, s = this[e(287) + "th"](null, this[e(338)][e(293)], this[e(338)][e(314)], i, i);
            this[e(293)] = s[e(293)], this[e(314)] = s[e(314)];
          } else r = this[e(333) + e(337)](this[e(365)], this[e(297)]), this[e(355)] = !0;
        this[e(311)][e(309)](new EncodedVideoChunk({ timestamp: performance[e(347)]() * 1e3, type: e(o ? 318 : 332), data: r }));
      }
    });
    const i = qn;
    this[i(344)] = n, this[i(319)] = e, this[i(310)] = r, this[i(356) + "ct"] = o, this[i(300)] = n[i(352)]("2d"), this[i(311)] = this[i(348) + "er"](), this[i(365)] = null, this[i(297)] = null, this[i(355)] = null, this[i(293)] = null, this[i(314)] = null, this[i(338)] = null, this[i(289) + "n"] = i(294);
  }
}
(function(t, n) {
  const e = mn, r = t();
  for (; ; )
    try {
      if (parseInt(e(462)) / 1 * (parseInt(e(536)) / 2) + -parseInt(e(571)) / 3 * (parseInt(e(509)) / 4) + -parseInt(e(493)) / 5 * (parseInt(e(520)) / 6) + -parseInt(e(564)) / 7 + -parseInt(e(463)) / 8 + parseInt(e(537)) / 9 * (parseInt(e(505)) / 10) + parseInt(e(508)) / 11 * (parseInt(e(470)) / 12) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Do, 473959);
function Do() {
  const t = ["de: ", "userAgent", "screen", "setOrienta", "VQDGz", "text", "AJhAM", "control", "center", "KjCIt", "device_id", "DjGdf", "clipboard", "length", "eenElement", "writeText", "screen_", "marginTop", "join_room", "iting for ", "fixTouch", "QJkVP", "tULwj", "XoOzh", "BmcHN", "disconnect", "4375175LQHRGm", "Vbobx", "url", "get_video_", "emit", "method", " closed co", "3YcGLRQ", "type_clien", "iframe", "Element", "reconnecti", "isMobile", "CyREc", "tabIndex", "GKdaL", "connect", "delete", "ent", "jiQGW", "error", "screen_mai", "video_meta", "post", "info", "data", "PUnQa", "screenElem", "aGgGx", "CFkqu", "connect_er", "fullscreen", "MyNtW", "ShLgu", "shortcut", "width", "mozFullScr", "oXAVF", "1JFwQKs", "5141232rdFLEc", "map", "onScreenEv", "large", "type", "middle", "applicatio", "4029468PoCHfn", "tion", "n/json", "jNsQZ", "message", "een", "msFullscre", "taskId", "status", "ror", "password", "COPY_TEXT", "Content-Ty", "headers", "EAgUk", "setVideoMe", "PcMZj", "enElement", "tListener", "code", "NYIii", "msg", "timeout", "1175cCKOuB", "meta", "size", "rONqV", "osTPM", "kLKxS", "change", "webkitFull", "set", "dtlzt", "stener", "sync", "270RdubAZ", "image_", "addEventLi", "88IcUczb", "1896172EJkkuc", "test", "response", "draggable", "YOrJI", "removeEven", "value", "children", "connection", "decode", "Timeout wa", "19926OlhOVc", "passwd", "current", "shortcutEv", "setFullscr", "jEvxe", "orientatio", "iIZYU", "uhAYx", "get", "false", "action", "height", "showMenu", "isDown", "onSyncIFra", "522246KGlruj", "16227yiwTAL"];
  return Do = function() {
    return t;
  }, Do();
}
function mn(t, n) {
  const e = Do();
  return mn = function(r, o) {
    return r = r - 452, e[r];
  }, mn(t, n);
}
const Wv = il((t, n) => {
  const e = mn, { serve: r, dataDevice: o, maxWidth: i, showAssistive: s, showDeviceId: a, syncEvent: c, syncButton: u } = t, f = o[e(548)], d = /iPhone|iPad|iPod|Android/i[e(510)](navigator[e(539)]), l = e(545), v = qe(null), g = qe(null), x = qe(null), [h, E] = rt(null), [w, m] = rt(null), C = {};
  C[e(533)] = !1, C[e(534)] = !1;
  const [y, O] = rt(C), [A, L] = rt(null), F = e(506) + f, Y = e(554) + f, re = e(585) + "n_" + f, G = qe(null), [B, W] = rt([]), H = qe(null), ee = qe(/* @__PURE__ */ new Map());
  ot(() => {
    const I = e;
    I(577) !== I(577) ? _0xa40801(!_0x835b33) : m(a);
  }, [a]);
  const Z = (I) => {
    const j = e;
    if (j(549) !== j(542)) W((k) => [...k, I]);
    else {
      const k = _0x228546[j(522)];
      _0x35ce44[j(522)] = new _0xe6e712(k, _0x31926d, _0x1b65b9, _0x4a3be3);
    }
  }, J = (I) => {
    const j = e;
    v[j(522)][j(568)](j(474), I), c == null || c(I);
  };
  sl(n, () => ({ api: async function(I, j = 5e3) {
    return new Promise((k, N) => {
      const S = mn, D = setTimeout(() => {
        const xe = mn;
        ee[xe(522)][xe(581)](I[xe(477)]);
        const z = {};
        z[xe(531)] = I[xe(531)], z[xe(477)] = I[xe(477)], z[xe(478)] = !1, z[xe(474)] = xe(519) + xe(557) + xe(511), N(z);
      }, j);
      ee[S(522)][S(501)](I[S(477)], (xe) => {
        clearTimeout(D), k(xe);
      }), v[S(522)][S(568)](S(474), I);
    });
  }, sync: function(I) {
    const j = e;
    v[j(522)][j(568)](j(474), I);
  } })), ot(() => {
    const I = e;
    I(496) !== I(496) ? _0x58b71b((j) => [...j, _0x39788e]) : (async () => {
      const j = I;
      if (j(565) !== j(565)) _0x2d6a9b(_0x2f22d7);
      else try {
        const k = {};
        k[j(482) + "pe"] = j(469) + j(472);
        const N = {};
        N[j(548)] = o[j(548)], N[j(480)] = o[j(521)];
        const S = {};
        S[j(566)] = r, S[j(569)] = j(587), S[j(492)] = 1e4, S[j(483)] = k, S[j(589)] = N;
        const D = S, xe = await sv(D);
        E(xe[j(589)]);
      } catch (k) {
        if (j(544) !== j(544)) {
          _0x263555[j(522)] = _0x34dac8;
          const N = {};
          N[j(531)] = j(465) + j(582), _0x27603a[j(568)](j(474), N);
        } else {
          const N = {};
          N[j(491)] = k, N[j(467)] = j(584), Z(N);
        }
      }
    })();
  }, []), ot(() => {
    const I = e;
    if (I(560) !== I(461)) {
      if (v[I(522)] || !h) return;
      const j = {};
      j[I(575) + "on"] = !1;
      const k = no(h, j);
      return k.on(I(580), () => {
        const N = I;
        if (N(590) !== N(579)) {
          const S = {};
          S[N(531)] = N(580), S[N(572) + "t"] = l, S[N(548)] = o[N(548)], S[N(576)] = d, S[N(521)] = o[N(521)], k[N(568)](N(556), S);
        } else {
          const S = {};
          S[N(491)] = _0x269fed, S[N(467)] = N(584), _0x3a7fed(S);
        }
      }), k.on(I(556), (N) => {
        const S = I;
        if (N[S(478)] == !0) {
          v[S(522)] = k;
          const D = {};
          D[S(531)] = S(465) + S(582), k[S(568)](S(474), D);
        } else if (S(498) !== S(473)) {
          const D = {};
          D[S(491)] = N[S(491)], D[S(467)] = S(584), Z(D);
        } else _0x4559f5[S(522)][S(518)](_0x13d14f);
      }), k.on(I(540), (N) => {
        const S = I;
        if (S(583) === S(583)) H[S(522)][S(518)](N);
        else {
          const D = { ..._0x4b3401 };
          D[S(533)] = !1, _0x1e1d82(D);
        }
      }), k.on(I(586), (N) => {
        const S = I;
        if (S(528) !== S(562))
          if (N) {
            if (H[S(522)][S(485) + "ta"](N), !H[S(522)][S(573)])
              if (S(527) !== S(527)) _0x2388da(_0x4c0b6c), _0x5b3d39(_0xd001f2);
              else {
                const D = {};
                D[S(531)] = S(535) + "me", k[S(568)](S(474), D);
              }
          } else {
            const D = {};
            D[S(531)] = S(567) + S(494), k[S(568)](S(586), D);
          }
        else {
          const D = {};
          D[S(531)] = S(535) + "me", _0x1f0d48[S(568)](S(474), D);
        }
      }), k.on(I(474), (N) => {
        const S = I;
        if (S(456) !== S(457)) {
          if ((N[S(531)] == S(481) || N[S(531)] == S(523) + S(582)) && N[S(543)][S(551)] > 0)
            if (S(486) === S(484)) {
              _0x572103[S(522)][S(581)](_0x5d9397[S(477)]);
              const D = {};
              D[S(531)] = _0x3e3ed4[S(531)], D[S(477)] = _0x5c3729[S(477)], D[S(478)] = !1, D[S(474)] = S(519) + S(557) + S(511), _0x103eed(D);
            } else navigator[S(550)][S(553)](N[S(543)]);
          else N[S(531)] == S(526) + "n" && (H[S(522)][S(541) + S(471)](N[S(515)]), G[S(522)][S(558)](N[S(515)]));
          if (N[S(477)]) {
            const D = ee[S(522)][S(529)](N[S(477)]);
            D && (D(N), ee[S(522)][S(581)](N[S(477)]));
          }
        } else {
          const D = _0x2fc15a[S(455) + S(574)] || _0x45a78c[S(500) + S(591) + S(582)] || _0x7a28be[S(460) + S(552)] || _0x532c15[S(476) + S(487)];
          _0x2c17de[S(522)][S(524) + S(475)](!!D), _0x320dc0[S(522)][S(524) + S(475)](!!D), _0x3c5303[S(522)][S(558)]();
        }
      }), k.on(I(454) + I(479), (N) => {
        const S = I;
        if (S(452) === S(452)) {
          const D = {};
          D[S(491)] = N, D[S(467)] = S(584), Z(D);
        } else _0x4d069d(_0x438c66);
      }), k.on(I(563), (N) => {
        const S = I, D = {};
        D[S(491)] = S(517) + S(570) + S(538) + N[S(489)], D[S(467)] = S(588), Z(D);
      }), () => {
        const N = I;
        N(525) !== N(502) ? k && k[N(563)]() : _0x2cba7d[N(550)][N(553)](_0x1b3e14[N(543)]);
      };
    } else if (_0x24344b[I(478)] == !0) {
      _0x16ab0b[I(522)] = _0x536bd9;
      const j = {};
      j[I(531)] = I(465) + I(582), _0x1c9bab[I(568)](I(474), j);
    } else {
      const j = {};
      j[I(491)] = _0x5069fd[I(491)], j[I(467)] = I(584), _0xaf23f9(j);
    }
  }, [h]), ot(() => {
    const I = e, j = x[I(522)];
    H[I(522)] = new Sv(j, i, d, L);
  }, []), ot(() => {
    const I = e, j = () => {
      const k = mn;
      if (k(453) !== k(559)) {
        const N = document[k(455) + k(574)] || document[k(500) + k(591) + k(582)] || document[k(460) + k(552)] || document[k(476) + k(487)];
        H[k(522)][k(524) + k(475)](!!N), G[k(522)][k(524) + k(475)](!!N), G[k(522)][k(558)]();
      } else {
        const N = _0x428c04(() => {
          const S = k;
          _0x39e81a[S(522)][S(581)](_0x25b20a[S(477)]);
          const D = {};
          D[S(531)] = _0x51ef36[S(531)], D[S(477)] = _0x27dd69[S(477)], D[S(478)] = !1, D[S(474)] = S(519) + S(557) + S(511), _0x56c5b0(D);
        }, _0x1a4a05);
        _0x55f2aa[k(522)][k(501)](_0x9e234a[k(477)], (S) => {
          _0x283a99(N), _0x33d905(S);
        }), _0x1f47a2[k(522)][k(568)](k(474), _0x129629);
      }
    };
    return document[I(507) + I(503)](I(455) + I(499), j), () => {
      const k = I;
      document[k(514) + k(488)](k(455) + k(499), j);
    };
  }, []);
  const Q = {};
  Q[e(516)] = o[e(548)];
  const se = {};
  se[e(495)] = e(466);
  const oe = {};
  oe[e(495)] = e(466);
  const K = {};
  K[e(495)] = e(466);
  const te = {};
  te[e(532)] = 0, te[e(459)] = 0;
  const he = {};
  he[e(529)] = y, he[e(501)] = O;
  const ue = {};
  ue.id = F, ue[e(578)] = "0", ue[e(512)] = e(530);
  const me = {};
  return me[e(555)] = 5, U.jsxs(pd, { id: re, children: [w && U.jsx(yd, { children: U.jsx(vd, Q) }), B[e(551)] == 0 ? U.jsxs(U.Fragment, { children: [!A && U.jsxs(bf, { align: e(546), gap: e(468), children: [U.jsx(xr, se), U.jsx(xr, oe), U.jsx(xr, K)] }), U.jsxs(md, { ref: g, id: Y, style: A ? {} : te, children: [s ? U.jsx(bv, { status: he, ref: G, imageRef: x, displayId: f, isMobile: d, isShowDeviceId: w, onSenData: (I, j) => {
    const k = e;
    if (I === Ds && j[k(458)] === k(548)) m(!w);
    else if (I === Ds && j[k(458)] === k(504))
      if (k(490) !== k(561)) u(o[k(548)]);
      else {
        const N = {};
        N[k(491)] = _0x557c52[k(491)], N[k(467)] = k(584), _0x1ff591(N);
      }
    else k(513) === k(497) ? (_0x1dad5b(_0x1e858e), _0x295cac[k(522)][k(581)](_0x3eac97[k(477)])) : J(j);
  } }) : null, U.jsx(hv, { canvasContent: ue, imageRef: x, isMobile: d, assistive: y, onImgEvent: (I, j) => {
    const k = e;
    if (k(547) === k(547))
      if (I === Gf) {
        const N = { ...y };
        N[k(533)] = !1, O(N);
      } else J(j);
    else if (_0x417dc4[k(522)][k(485) + "ta"](_0x3c74c1), !_0x17e065[k(522)][k(573)]) {
      const N = {};
      N[k(531)] = k(535) + "me", _0x50a62f[k(568)](k(474), N);
    }
  } })] })] }) : B[e(464)]((I, j) => U.jsx(mf, { style: me, message: I[e(491)], type: I[e(467)], showIcon: !0, closable: !0 }, j))] });
});
function Bo() {
  var t = ["5MTWkBI", "6077309DIccLu", "1954422rIzxcG", "3303528JuSVWf", "1049128rXHfBf", "6FfmaLG", "1740318vkyAYJ", "3617384GkDELt", "773764EnMuME"];
  return Bo = function() {
    return t;
  }, Bo();
}
function Bs(t, n) {
  var e = Bo();
  return Bs = function(r, o) {
    r = r - 163;
    var i = e[r];
    return i;
  }, Bs(t, n);
}
(function(t, n) {
  for (var e = Bs, r = t(); ; )
    try {
      var o = -parseInt(e(166)) / 1 + -parseInt(e(170)) / 2 * (-parseInt(e(167)) / 3) + parseInt(e(169)) / 4 + parseInt(e(171)) / 5 * (-parseInt(e(168)) / 6) + parseInt(e(163)) / 7 + -parseInt(e(165)) / 8 + -parseInt(e(164)) / 9;
      if (o === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Bo, 577017);
export {
  Wv as ViewRP
};
