var Jf = Object.defineProperty;
var Qf = (t, n, e) => n in t ? Jf(t, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[n] = e;
var It = (t, n, e) => Qf(t, typeof n != "symbol" ? n + "" : n, e);
import * as E from "react";
import Fe, { useDebugValue as xa, createElement as e0, useRef as qe, useContext as Qt, isValidElement as t0, version as n0, createContext as Fs, useLayoutEffect as r0, useEffect as nt, useState as tt, forwardRef as il, useImperativeHandle as sl } from "react";
import ma from "react-dom";
var cr = ho;
(function(t, n) {
  for (var e = ho, r = t(); ; )
    try {
      var o = -parseInt(e(466)) / 1 * (-parseInt(e(450)) / 2) + -parseInt(e(457)) / 3 * (-parseInt(e(451)) / 4) + -parseInt(e(455)) / 5 + -parseInt(e(465)) / 6 * (parseInt(e(452)) / 7) + -parseInt(e(464)) / 8 + parseInt(e(460)) / 9 + parseInt(e(449)) / 10 * (parseInt(e(459)) / 11);
      if (o === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(po, 247901);
function ho(t, n) {
  var e = po();
  return ho = function(r, o) {
    r = r - 444;
    var i = e[r];
    return i;
  }, ho(t, n);
}
function po() {
  var t = ["Tceee", "default", "NfoVu", "mCgro", "apply", "value", "__esModule", "call", "constructo", "function", "defineProp", "70190glFIXG", "6QsuLNJ", "1427116xgJGJL", "4165qLTOmK", "keys", "construct", "2253710zZFdOB", "forEach", "3jTNDOX", "get", "341FHljiB", "491895dkbnMg", "prototype", "hasOwnProp", "ptor", "240528vSLWOg", "2274xREcKL", "108397CCYswU", "undefined", "erty", "length", "ertyDescri", "getOwnProp"];
  return po = function() {
    return t;
  }, po();
}
typeof globalThis !== cr(467) || typeof window !== cr(467) || (typeof global !== cr(467) ? global : cr(467));
function o0(t) {
  var n = cr;
  return t && t[n(444)] && Object[n(461)][n(462) + n(468)][n(445)](t, n(473)) ? t[n(473)] : t;
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
    var t = Fe, n = Symbol.for("react.element"), e = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), l = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g = Symbol.iterator, h = "@@iterator";
    function p(x) {
      if (x === null || typeof x != "object")
        return null;
      var P = g && x[g] || x[h];
      return typeof P == "function" ? P : null;
    }
    var S = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(x) {
      {
        for (var P = arguments.length, M = new Array(P > 1 ? P - 1 : 0), $ = 1; $ < P; $++)
          M[$ - 1] = arguments[$];
        m("error", x, M);
      }
    }
    function m(x, P, M) {
      {
        var $ = S.ReactDebugCurrentFrame, xe = $.getStackAddendum();
        xe !== "" && (P += "%s", M = M.concat([xe]));
        var ge = M.map(function(le) {
          return String(le);
        });
        ge.unshift("Warning: " + P), Function.prototype.apply.call(console[x], console, ge);
      }
    }
    var _ = !1, y = !1, R = !1, A = !1, j = !1, z;
    z = Symbol.for("react.module.reference");
    function X(x) {
      return !!(typeof x == "string" || typeof x == "function" || x === r || x === i || j || x === o || x === u || x === f || A || x === v || _ || y || R || typeof x == "object" && x !== null && (x.$$typeof === l || x.$$typeof === d || x.$$typeof === s || x.$$typeof === a || x.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      x.$$typeof === z || x.getModuleId !== void 0));
    }
    function ne(x, P, M) {
      var $ = x.displayName;
      if ($)
        return $;
      var xe = P.displayName || P.name || "";
      return xe !== "" ? M + "(" + xe + ")" : M;
    }
    function G(x) {
      return x.displayName || "Context";
    }
    function D(x) {
      if (x == null)
        return null;
      if (typeof x.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof x == "function")
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
            var P = x;
            return G(P) + ".Consumer";
          case s:
            var M = x;
            return G(M._context) + ".Provider";
          case c:
            return ne(x, x.render, "ForwardRef");
          case d:
            var $ = x.displayName || null;
            return $ !== null ? $ : D(x.type) || "Memo";
          case l: {
            var xe = x, ge = xe._payload, le = xe._init;
            try {
              return D(le(ge));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var H = Object.assign, W = 0, Y, ee, K, J, oe, ie, Z;
    function re() {
    }
    re.__reactDisabledLog = !0;
    function de() {
      {
        if (W === 0) {
          Y = console.log, ee = console.info, K = console.warn, J = console.error, oe = console.group, ie = console.groupCollapsed, Z = console.groupEnd;
          var x = {
            configurable: !0,
            enumerable: !0,
            value: re,
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
        W++;
      }
    }
    function ue() {
      {
        if (W--, W === 0) {
          var x = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: H({}, x, {
              value: Y
            }),
            info: H({}, x, {
              value: ee
            }),
            warn: H({}, x, {
              value: K
            }),
            error: H({}, x, {
              value: J
            }),
            group: H({}, x, {
              value: oe
            }),
            groupCollapsed: H({}, x, {
              value: ie
            }),
            groupEnd: H({}, x, {
              value: Z
            })
          });
        }
        W < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var he = S.ReactCurrentDispatcher, me;
    function k(x, P, M) {
      {
        if (me === void 0)
          try {
            throw Error();
          } catch (xe) {
            var $ = xe.stack.trim().match(/\n( *(at )?)/);
            me = $ && $[1] || "";
          }
        return `
` + me + x;
      }
    }
    var F = !1, O;
    {
      var I = typeof WeakMap == "function" ? WeakMap : Map;
      O = new I();
    }
    function w(x, P) {
      if (!x || F)
        return "";
      {
        var M = O.get(x);
        if (M !== void 0)
          return M;
      }
      var $;
      F = !0;
      var xe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ge;
      ge = he.current, he.current = null, de();
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
            } catch (et) {
              $ = et;
            }
            Reflect.construct(x, [], le);
          } else {
            try {
              le.call();
            } catch (et) {
              $ = et;
            }
            x.call(le.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (et) {
            $ = et;
          }
          x();
        }
      } catch (et) {
        if (et && $ && typeof et.stack == "string") {
          for (var ae = et.stack.split(`
`), $e = $.stack.split(`
`), Oe = ae.length - 1, ke = $e.length - 1; Oe >= 1 && ke >= 0 && ae[Oe] !== $e[ke]; )
            ke--;
          for (; Oe >= 1 && ke >= 0; Oe--, ke--)
            if (ae[Oe] !== $e[ke]) {
              if (Oe !== 1 || ke !== 1)
                do
                  if (Oe--, ke--, ke < 0 || ae[Oe] !== $e[ke]) {
                    var Pe = `
` + ae[Oe].replace(" at new ", " at ");
                    return x.displayName && Pe.includes("<anonymous>") && (Pe = Pe.replace("<anonymous>", x.displayName)), typeof x == "function" && O.set(x, Pe), Pe;
                  }
                while (Oe >= 1 && ke >= 0);
              break;
            }
        }
      } finally {
        F = !1, he.current = ge, ue(), Error.prepareStackTrace = xe;
      }
      var An = x ? x.displayName || x.name : "", ln = An ? k(An) : "";
      return typeof x == "function" && O.set(x, ln), ln;
    }
    function B(x, P, M) {
      return w(x, !1);
    }
    function L(x) {
      var P = x.prototype;
      return !!(P && P.isReactComponent);
    }
    function Ae(x, P, M) {
      if (x == null)
        return "";
      if (typeof x == "function")
        return w(x, L(x));
      if (typeof x == "string")
        return k(x);
      switch (x) {
        case u:
          return k("Suspense");
        case f:
          return k("SuspenseList");
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case c:
            return B(x.render);
          case d:
            return Ae(x.type, P, M);
          case l: {
            var $ = x, xe = $._payload, ge = $._init;
            try {
              return Ae(ge(xe), P, M);
            } catch {
            }
          }
        }
      return "";
    }
    var Te = Object.prototype.hasOwnProperty, lt = {}, Rt = S.ReactDebugCurrentFrame;
    function st(x) {
      if (x) {
        var P = x._owner, M = Ae(x.type, x._source, P ? P.type : null);
        Rt.setExtraStackFrame(M);
      } else
        Rt.setExtraStackFrame(null);
    }
    function kt(x, P, M, $, xe) {
      {
        var ge = Function.call.bind(Te);
        for (var le in x)
          if (ge(x, le)) {
            var ae = void 0;
            try {
              if (typeof x[le] != "function") {
                var $e = Error(($ || "React class") + ": " + M + " type `" + le + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof x[le] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw $e.name = "Invariant Violation", $e;
              }
              ae = x[le](P, le, $, M, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Oe) {
              ae = Oe;
            }
            ae && !(ae instanceof Error) && (st(xe), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", $ || "React class", M, le, typeof ae), st(null)), ae instanceof Error && !(ae.message in lt) && (lt[ae.message] = !0, st(xe), b("Failed %s type: %s", M, ae.message), st(null));
          }
      }
    }
    var Ne = Array.isArray;
    function Ee(x) {
      return Ne(x);
    }
    function Ye(x) {
      {
        var P = typeof Symbol == "function" && Symbol.toStringTag, M = P && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return M;
      }
    }
    function vt(x) {
      try {
        return ut(x), !1;
      } catch {
        return !0;
      }
    }
    function ut(x) {
      return "" + x;
    }
    function rn(x) {
      if (vt(x))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ye(x)), ut(x);
    }
    var on = S.ReactCurrentOwner, Cn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, sn, N;
    function C(x) {
      if (Te.call(x, "ref")) {
        var P = Object.getOwnPropertyDescriptor(x, "ref").get;
        if (P && P.isReactWarning)
          return !1;
      }
      return x.ref !== void 0;
    }
    function je(x) {
      if (Te.call(x, "key")) {
        var P = Object.getOwnPropertyDescriptor(x, "key").get;
        if (P && P.isReactWarning)
          return !1;
      }
      return x.key !== void 0;
    }
    function pe(x, P) {
      typeof x.ref == "string" && on.current;
    }
    function Ce(x, P) {
      {
        var M = function() {
          sn || (sn = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", P));
        };
        M.isReactWarning = !0, Object.defineProperty(x, "key", {
          get: M,
          configurable: !0
        });
      }
    }
    function Q(x, P) {
      {
        var M = function() {
          N || (N = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", P));
        };
        M.isReactWarning = !0, Object.defineProperty(x, "ref", {
          get: M,
          configurable: !0
        });
      }
    }
    var at = function(x, P, M, $, xe, ge, le) {
      var ae = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: x,
        key: P,
        ref: M,
        props: le,
        // Record the component responsible for creating this element.
        _owner: ge
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
        value: xe
      }), Object.freeze && (Object.freeze(ae.props), Object.freeze(ae)), ae;
    };
    function ft(x, P, M, $, xe) {
      {
        var ge, le = {}, ae = null, $e = null;
        M !== void 0 && (rn(M), ae = "" + M), je(P) && (rn(P.key), ae = "" + P.key), C(P) && ($e = P.ref, pe(P, xe));
        for (ge in P)
          Te.call(P, ge) && !Cn.hasOwnProperty(ge) && (le[ge] = P[ge]);
        if (x && x.defaultProps) {
          var Oe = x.defaultProps;
          for (ge in Oe)
            le[ge] === void 0 && (le[ge] = Oe[ge]);
        }
        if (ae || $e) {
          var ke = typeof x == "function" ? x.displayName || x.name || "Unknown" : x;
          ae && Ce(le, ke), $e && Q(le, ke);
        }
        return at(x, ae, $e, xe, $, on.current, le);
      }
    }
    var Le = S.ReactCurrentOwner, Me = S.ReactDebugCurrentFrame;
    function Je(x) {
      if (x) {
        var P = x._owner, M = Ae(x.type, x._source, P ? P.type : null);
        Me.setExtraStackFrame(M);
      } else
        Me.setExtraStackFrame(null);
    }
    var an;
    an = !1;
    function cn(x) {
      return typeof x == "object" && x !== null && x.$$typeof === n;
    }
    function Ge() {
      {
        if (Le.current) {
          var x = D(Le.current.type);
          if (x)
            return `

Check the render method of \`` + x + "`.";
        }
        return "";
      }
    }
    function Qe(x) {
      return "";
    }
    var dt = {};
    function ht(x) {
      {
        var P = Ge();
        if (!P) {
          var M = typeof x == "string" ? x : x.displayName || x.name;
          M && (P = `

Check the top-level render call using <` + M + ">.");
        }
        return P;
      }
    }
    function Pt(x, P) {
      {
        if (!x._store || x._store.validated || x.key != null)
          return;
        x._store.validated = !0;
        var M = ht(P);
        if (dt[M])
          return;
        dt[M] = !0;
        var $ = "";
        x && x._owner && x._owner !== Le.current && ($ = " It was passed a child from " + D(x._owner.type) + "."), Je(x), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', M, $), Je(null);
      }
    }
    function _n(x, P) {
      {
        if (typeof x != "object")
          return;
        if (Ee(x))
          for (var M = 0; M < x.length; M++) {
            var $ = x[M];
            cn($) && Pt($, P);
          }
        else if (cn(x))
          x._store && (x._store.validated = !0);
        else if (x) {
          var xe = p(x);
          if (typeof xe == "function" && xe !== x.entries)
            for (var ge = xe.call(x), le; !(le = ge.next()).done; )
              cn(le.value) && Pt(le.value, P);
        }
      }
    }
    function Wt(x) {
      {
        var P = x.type;
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
          var $ = D(P);
          kt(M, x.props, "prop", $, x);
        } else if (P.PropTypes !== void 0 && !an) {
          an = !0;
          var xe = D(P);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", xe || "Unknown");
        }
        typeof P.getDefaultProps == "function" && !P.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Xt(x) {
      {
        for (var P = Object.keys(x.props), M = 0; M < P.length; M++) {
          var $ = P[M];
          if ($ !== "children" && $ !== "key") {
            Je(x), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", $), Je(null);
            break;
          }
        }
        x.ref !== null && (Je(x), b("Invalid attribute `ref` supplied to `React.Fragment`."), Je(null));
      }
    }
    var er = {};
    function Or(x, P, M, $, xe, ge) {
      {
        var le = X(x);
        if (!le) {
          var ae = "";
          (x === void 0 || typeof x == "object" && x !== null && Object.keys(x).length === 0) && (ae += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var $e = Qe();
          $e ? ae += $e : ae += Ge();
          var Oe;
          x === null ? Oe = "null" : Ee(x) ? Oe = "array" : x !== void 0 && x.$$typeof === n ? (Oe = "<" + (D(x.type) || "Unknown") + " />", ae = " Did you accidentally export a JSX literal instead of a component?") : Oe = typeof x, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Oe, ae);
        }
        var ke = ft(x, P, M, xe, ge);
        if (ke == null)
          return ke;
        if (le) {
          var Pe = P.children;
          if (Pe !== void 0)
            if ($)
              if (Ee(Pe)) {
                for (var An = 0; An < Pe.length; An++)
                  _n(Pe[An], x);
                Object.freeze && Object.freeze(Pe);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _n(Pe, x);
        }
        if (Te.call(P, "key")) {
          var ln = D(x), et = Object.keys(P).filter(function(Zf) {
            return Zf !== "key";
          }), ui = et.length > 0 ? "{key: someKey, " + et.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!er[ln + ui]) {
            var Kf = et.length > 0 ? "{" + et.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ui, ln, Kf, ln), er[ln + ui] = !0;
          }
        }
        return x === r ? Xt(ke) : Wt(ke), ke;
      }
    }
    function Ue(x, P, M) {
      return Or(x, P, M, !0);
    }
    function Rr(x, P, M) {
      return Or(x, P, M, !1);
    }
    var li = Rr, Re = Ue;
    nr.Fragment = r, nr.jsx = li, nr.jsxs = Re;
  }()), nr;
}
var ya;
function a0() {
  return ya || (ya = 1, process.env.NODE_ENV === "production" ? kr.exports = i0() : kr.exports = s0()), kr.exports;
}
var U = a0(), rt = function() {
  return rt = Object.assign || function(n) {
    for (var e, r = 1, o = arguments.length; r < o; r++) {
      e = arguments[r];
      for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
    }
    return n;
  }, rt.apply(this, arguments);
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
), _e = "-ms-", fr = "-moz-", be = "-webkit-", al = "comm", Fo = "rule", zs = "decl", f0 = "@import", cl = "@keyframes", d0 = "@layer", ll = Math.abs, Vs = String.fromCharCode, ji = Object.assign;
function h0(t, n) {
  return Xe(t, 0) ^ 45 ? (((n << 2 ^ Xe(t, 0)) << 2 ^ Xe(t, 1)) << 2 ^ Xe(t, 2)) << 2 ^ Xe(t, 3) : 0;
}
function ul(t) {
  return t.trim();
}
function Ht(t, n) {
  return (t = n.exec(t)) ? t[0] : t;
}
function se(t, n, e) {
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
function Lt(t) {
  return t.length;
}
function fl(t) {
  return t.length;
}
function lr(t, n) {
  return n.push(t), t;
}
function p0(t, n) {
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
function Yt(t, n) {
  return ji(Vo("", null, null, "", null, null, 0, t.siblings), t, { length: -t.length }, n);
}
function Tn(t) {
  for (; t.root; )
    t = Yt(t.root, { children: [t] });
  lr(t, t.siblings);
}
function x0() {
  return ze;
}
function m0() {
  return ze = mt > 0 ? Xe(Wn, --mt) : 0, Ln--, ze === 10 && (Ln = 1, zo--), ze;
}
function wt() {
  return ze = mt < dl ? Xe(Wn, mt++) : 0, Ln++, ze === 10 && (Ln = 1, zo++), ze;
}
function mn() {
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
  return zo = Ln = 1, dl = Lt(Wn = t), mt = 0, [];
}
function v0(t) {
  return Wn = "", t;
}
function fi(t) {
  return ul(Ho(mt - 1, Mi(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function y0(t) {
  for (; (ze = mn()) && ze < 33; )
    wt();
  return Li(t) > 2 || Li(ze) > 3 ? "" : " ";
}
function b0(t, n) {
  for (; --n && wt() && !(ze < 48 || ze > 102 || ze > 57 && ze < 65 || ze > 70 && ze < 97); )
    ;
  return Ho(t, $r() + (n < 6 && mn() == 32 && wt() == 32));
}
function Mi(t) {
  for (; wt(); )
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
        wt();
        break;
    }
  return mt;
}
function S0(t, n) {
  for (; wt() && t + ze !== 57; )
    if (t + ze === 84 && mn() === 47)
      break;
  return "/*" + Ho(n, mt - 1) + "*" + Vs(t === 47 ? t : wt());
}
function w0(t) {
  for (; !Li(mn()); )
    wt();
  return Ho(t, mt);
}
function E0(t) {
  return v0(Gr("", null, null, null, [""], t = g0(t), 0, [0], t));
}
function Gr(t, n, e, r, o, i, s, a, c) {
  for (var u = 0, f = 0, d = s, l = 0, v = 0, g = 0, h = 1, p = 1, S = 1, b = 0, m = "", _ = o, y = i, R = r, A = m; p; )
    switch (g = b, b = wt()) {
      // (
      case 40:
        if (g != 108 && Xe(A, d - 1) == 58) {
          Yr(A += se(fi(b), "&", "&\f"), "&\f", ll(u ? a[u - 1] : 0)) != -1 && (S = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        A += fi(b);
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
        switch (mn()) {
          case 42:
          case 47:
            lr(C0(S0(wt(), $r()), n, e, c), c);
            break;
          default:
            A += "/";
        }
        break;
      // {
      case 123 * h:
        a[u++] = Lt(A) * S;
      // } ; \0
      case 125 * h:
      case 59:
      case 0:
        switch (b) {
          // \0 }
          case 0:
          case 125:
            p = 0;
          // ;
          case 59 + f:
            S == -1 && (A = se(A, /\f/g, "")), v > 0 && Lt(A) - d && lr(v > 32 ? wa(A + ";", r, e, d - 1, c) : wa(se(A, " ", "") + ";", r, e, d - 2, c), c);
            break;
          // @ ;
          case 59:
            A += ";";
          // { rule/at-rule
          default:
            if (lr(R = Sa(A, n, e, u, f, o, a, m, _ = [], y = [], d, i), i), b === 123)
              if (f === 0)
                Gr(A, n, R, R, _, i, d, a, y);
              else
                switch (l === 99 && Xe(A, 3) === 110 ? 100 : l) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Gr(t, R, R, r && lr(Sa(t, R, R, 0, 0, o, a, m, o, _ = [], d, y), y), o, y, d, a, r ? _ : y);
                    break;
                  default:
                    Gr(A, R, R, R, [""], y, 0, a, y);
                }
        }
        u = f = v = 0, h = S = 1, m = A = "", d = s;
        break;
      // :
      case 58:
        d = 1 + Lt(A), v = g;
      default:
        if (h < 1) {
          if (b == 123)
            --h;
          else if (b == 125 && h++ == 0 && m0() == 125)
            continue;
        }
        switch (A += Vs(b), b * h) {
          // &
          case 38:
            S = f > 0 ? 1 : (A += "\f", -1);
            break;
          // ,
          case 44:
            a[u++] = (Lt(A) - 1) * S, S = 1;
            break;
          // @
          case 64:
            mn() === 45 && (A += fi(wt())), l = mn(), f = d = Lt(m = A += w0($r())), b++;
            break;
          // -
          case 45:
            g === 45 && Lt(A) == 2 && (h = 0);
        }
    }
  return i;
}
function Sa(t, n, e, r, o, i, s, a, c, u, f, d) {
  for (var l = o - 1, v = o === 0 ? i : [""], g = fl(v), h = 0, p = 0, S = 0; h < r; ++h)
    for (var b = 0, m = jn(t, l + 1, l = ll(p = s[h])), _ = t; b < g; ++b)
      (_ = ul(p > 0 ? v[b] + " " + m : se(m, /&\f/g, v[b]))) && (c[S++] = _);
  return Vo(t, n, e, o === 0 ? Fo : a, c, u, f, d);
}
function C0(t, n, e, r) {
  return Vo(t, n, e, al, Vs(x0()), jn(t, 2, -2), 0, r);
}
function wa(t, n, e, r, o) {
  return Vo(t, n, e, zs, jn(t, 0, r), jn(t, r + 1, -1), r, o);
}
function hl(t, n, e) {
  switch (h0(t, n)) {
    // color-adjust
    case 5103:
      return be + "print-" + t + t;
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
      return be + t + t;
    // tab-size
    case 4789:
      return fr + t + t;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return be + t + fr + t + _e + t + t;
    // writing-mode
    case 5936:
      switch (Xe(t, n + 11)) {
        // vertical-l(r)
        case 114:
          return be + t + _e + se(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
        // vertical-r(l)
        case 108:
          return be + t + _e + se(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
        // horizontal(-)tb
        case 45:
          return be + t + _e + se(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return be + t + _e + t + t;
    // order
    case 6165:
      return be + t + _e + "flex-" + t + t;
    // align-items
    case 5187:
      return be + t + se(t, /(\w+).+(:[^]+)/, be + "box-$1$2" + _e + "flex-$1$2") + t;
    // align-self
    case 5443:
      return be + t + _e + "flex-item-" + se(t, /flex-|-self/g, "") + (Ht(t, /flex-|baseline/) ? "" : _e + "grid-row-" + se(t, /flex-|-self/g, "")) + t;
    // align-content
    case 4675:
      return be + t + _e + "flex-line-pack" + se(t, /align-content|flex-|-self/g, "") + t;
    // flex-shrink
    case 5548:
      return be + t + _e + se(t, "shrink", "negative") + t;
    // flex-basis
    case 5292:
      return be + t + _e + se(t, "basis", "preferred-size") + t;
    // flex-grow
    case 6060:
      return be + "box-" + se(t, "-grow", "") + be + t + _e + se(t, "grow", "positive") + t;
    // transition
    case 4554:
      return be + se(t, /([^-])(transform)/g, "$1" + be + "$2") + t;
    // cursor
    case 6187:
      return se(se(se(t, /(zoom-|grab)/, be + "$1"), /(image-set)/, be + "$1"), t, "") + t;
    // background, background-image
    case 5495:
    case 3959:
      return se(t, /(image-set\([^]*)/, be + "$1$`$1");
    // justify-content
    case 4968:
      return se(se(t, /(.+:)(flex-)?(.*)/, be + "box-pack:$3" + _e + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + be + t + t;
    // justify-self
    case 4200:
      if (!Ht(t, /flex-|baseline/)) return _e + "grid-column-align" + jn(t, n) + t;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return _e + se(t, "template-", "") + t;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return e && e.some(function(r, o) {
        return n = o, Ht(r.props, /grid-\w+-end/);
      }) ? ~Yr(t + (e = e[n].value), "span", 0) ? t : _e + se(t, "-start", "") + t + _e + "grid-row-span:" + (~Yr(e, "span", 0) ? Ht(e, /\d+/) : +Ht(e, /\d+/) - +Ht(t, /\d+/)) + ";" : _e + se(t, "-start", "") + t;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return e && e.some(function(r) {
        return Ht(r.props, /grid-\w+-start/);
      }) ? t : _e + se(se(t, "-end", "-span"), "span ", "") + t;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return se(t, /(.+)-inline(.+)/, be + "$1$2") + t;
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
        switch (Xe(t, n + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (Xe(t, n + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return se(t, /(.+:)(.+)-([^]+)/, "$1" + be + "$2-$3$1" + fr + (Xe(t, n + 3) == 108 ? "$3" : "$2-$3")) + t;
          // (s)tretch
          case 115:
            return ~Yr(t, "stretch", 0) ? hl(se(t, "stretch", "fill-available"), n, e) + t : t;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return se(t, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, s, a, c, u) {
        return _e + o + ":" + i + u + (s ? _e + o + "-span:" + (a ? c : +c - +i) + u : "") + t;
      });
    // position: sticky
    case 4949:
      if (Xe(t, n + 6) === 121)
        return se(t, ":", ":" + be) + t;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (Xe(t, Xe(t, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return se(t, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + be + (Xe(t, 14) === 45 ? "inline-" : "") + "box$3$1" + be + "$2$3$1" + _e + "$2box$3") + t;
        // (inline-)?gri(d)
        case 100:
          return se(t, ":", ":" + _e) + t;
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
function _0(t, n, e, r) {
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
        return xo([Yt(t, { value: se(t.value, "@", "@" + be) })], r);
      case Fo:
        if (t.length)
          return p0(e = t.props, function(o) {
            switch (Ht(o, r = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                Tn(Yt(t, { props: [se(o, /:(read-\w+)/, ":" + fr + "$1")] })), Tn(Yt(t, { props: [o] })), ji(t, { props: ba(e, r) });
                break;
              // :placeholder
              case "::placeholder":
                Tn(Yt(t, { props: [se(o, /:(plac\w+)/, ":" + be + "input-$1")] })), Tn(Yt(t, { props: [se(o, /:(plac\w+)/, ":" + fr + "$1")] })), Tn(Yt(t, { props: [se(o, /:(plac\w+)/, _e + "input-$1")] })), Tn(Yt(t, { props: [o] })), ji(t, { props: ba(e, r) });
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
}, wn = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", pl = "active", xl = "data-styled-version", Uo = "6.1.18", Hs = `/*!sc*/
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
function Ca(t) {
  return t.replace(N0, "-").replace(j0, "");
}
var L0 = /(a)(d)/gi, Ir = 52, _a = function(t) {
  return String.fromCharCode(t + (t > 25 ? 39 : 97));
};
function Bi(t) {
  var n, e = "";
  for (n = Math.abs(t); n > Ir; n = n / Ir | 0) e = _a(n % Ir) + e;
  return (_a(n % Ir) + e).replace(L0, "$1-$2");
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
}, K0 = "style[".concat(wn, "][").concat(xl, '="').concat(Uo, '"]'), Z0 = new RegExp("^".concat(wn, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), J0 = function(t, n, e) {
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
    o && o.getAttribute(wn) !== pl && (Q0(t, o), o.parentNode && o.parentNode.removeChild(o));
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
  r.setAttribute(wn, pl), r.setAttribute(xl, Uo);
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
}(), Pa = mo, od = { isServer: !mo, useCSSOMInjection: !k0 }, Cl = function() {
  function t(n, e, r) {
    n === void 0 && (n = Mn), e === void 0 && (e = {});
    var o = this;
    this.options = rt(rt({}, od), n), this.gs = e, this.names = new Map(r), this.server = !!n.isServer, !this.server && mo && Pa && (Pa = !1, ka(this)), qs(this, function() {
      return function(i) {
        for (var s = i.getTag(), a = s.length, c = "", u = function(d) {
          var l = function(S) {
            return go.get(S);
          }(d);
          if (l === void 0) return "continue";
          var v = i.names.get(l), g = s.getGroup(d);
          if (v === void 0 || !v.size || g.length === 0) return "continue";
          var h = "".concat(wn, ".g").concat(d, '[id="').concat(l, '"]'), p = "";
          v !== void 0 && v.forEach(function(S) {
            S.length > 0 && (p += "".concat(S, ","));
          }), c += "".concat(g).concat(h, '{content:"').concat(p, '"}').concat(Hs);
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
    return e === void 0 && (e = !0), new t(rt(rt({}, this.options), n), this.gs, e && this.names || void 0);
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
function _l(t, n) {
  return t.map(function(e) {
    return e.type === "rule" && (e.value = "".concat(n, " ").concat(e.value), e.value = e.value.replaceAll(",", ",".concat(n, " ")), e.props = e.props.map(function(r) {
      return "".concat(n, " ").concat(r);
    })), Array.isArray(e.children) && e.type !== "@keyframes" && (e.children = _l(e.children, n)), e;
  });
}
function ad(t) {
  var n, e, r, o = Mn, i = o.options, s = i === void 0 ? Mn : i, a = o.plugins, c = a === void 0 ? qo : a, u = function(l, v, g) {
    return g.startsWith(e) && g.endsWith(e) && g.replaceAll(e, "").length > 0 ? ".".concat(n) : l;
  }, f = c.slice();
  f.push(function(l) {
    l.type === Fo && l.value.includes("&") && (l.props[0] = l.props[0].replace(id, e).replace(r, u));
  }), s.prefix && f.push(O0), f.push(_0);
  var d = function(l, v, g, h) {
    v === void 0 && (v = ""), g === void 0 && (g = ""), h === void 0 && (h = "&"), n = h, e = v, r = new RegExp("\\".concat(e, "\\b"), "g");
    var p = l.replace(sd, ""), S = E0(g || v ? "".concat(g, " ").concat(v, " { ").concat(p, " }") : p);
    s.namespace && (S = _l(S, s.namespace));
    var b = [];
    return xo(S, A0(f.concat(T0(function(m) {
      return b.push(m);
    })))), b;
  };
  return d.hash = c.length ? c.reduce(function(l, v) {
    return v.name || Xn(15), fn(l, v.name);
  }, ml).toString() : "", d;
}
var cd = new Cl(), zi = ad(), Al = Fe.createContext({ shouldForwardProp: void 0, styleSheet: cd, stylis: zi });
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
    this.rules = n, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && ud(n), this.componentId = e, this.baseHash = fn(fd, e), this.baseStyle = r, Cl.registerId(e);
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
      for (var c = fn(this.baseHash, r.hash), u = "", f = 0; f < this.rules.length; f++) {
        var d = this.rules[f];
        if (typeof d == "string") u += d, process.env.NODE_ENV !== "production" && (c = fn(c, d));
        else if (d) {
          var l = Ra(gn(d, n, e, r));
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
var pi = {}, La = /* @__PURE__ */ new Set();
function hd(t, n, e) {
  var r = Us(t), o = t, i = !hi(t), s = n.attrs, a = s === void 0 ? qo : s, c = n.componentId, u = c === void 0 ? function(_, y) {
    var R = typeof _ != "string" ? "sc" : Ca(_);
    pi[R] = (pi[R] || 0) + 1;
    var A = "".concat(R, "-").concat(M0(Uo + R + pi[R]));
    return y ? "".concat(y, "-").concat(A) : A;
  }(n.displayName, n.parentComponentId) : c, f = n.displayName, d = f === void 0 ? function(_) {
    return hi(_) ? "styled.".concat(_) : "Styled(".concat(vl(_), ")");
  }(t) : f, l = n.displayName && n.componentId ? "".concat(Ca(n.displayName), "-").concat(n.componentId) : n.componentId || u, v = r && o.attrs ? o.attrs.concat(a).filter(Boolean) : a, g = n.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var h = o.shouldForwardProp;
    if (n.shouldForwardProp) {
      var p = n.shouldForwardProp;
      g = function(_, y) {
        return h(_, y) && p(_, y);
      };
    } else g = h;
  }
  var S = new dd(e, l, r ? o.componentStyle : void 0);
  function b(_, y) {
    return function(R, A, j) {
      var z = R.attrs, X = R.componentStyle, ne = R.defaultProps, G = R.foldedComponentIds, D = R.styledComponentId, H = R.target, W = Fe.useContext(Rl), Y = Ia(), ee = R.shouldForwardProp || Y.shouldForwardProp;
      process.env.NODE_ENV !== "production" && xa(D);
      var K = I0(A, W, ne) || Mn, J = function(ue, he, me) {
        for (var k, F = rt(rt({}, he), { className: void 0, theme: me }), O = 0; O < ue.length; O += 1) {
          var I = Dn(k = ue[O]) ? k(F) : k;
          for (var w in I) F[w] = w === "className" ? hn(F[w], I[w]) : w === "style" ? rt(rt({}, F[w]), I[w]) : I[w];
        }
        return he.className && (F.className = hn(F.className, he.className)), F;
      }(z, A, K), oe = J.as || H, ie = {};
      for (var Z in J) J[Z] === void 0 || Z[0] === "$" || Z === "as" || Z === "theme" && J.theme === K || (Z === "forwardedAs" ? ie.as = J.forwardedAs : ee && !ee(Z, oe) || (ie[Z] = J[Z], ee || process.env.NODE_ENV !== "development" || u0(Z) || La.has(Z) || !Di.has(oe) || (La.add(Z), console.warn('styled-components: it looks like an unknown prop "'.concat(Z, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var re = function(ue, he) {
        var me = Ia(), k = ue.generateAndInjectStyles(he, me.styleSheet, me.stylis);
        return process.env.NODE_ENV !== "production" && xa(k), k;
      }(X, J);
      process.env.NODE_ENV !== "production" && R.warnTooManyClasses && R.warnTooManyClasses(re);
      var de = hn(G, D);
      return re && (de += " " + re), J.className && (de += " " + J.className), ie[hi(oe) && !Di.has(oe) ? "class" : "className"] = de, j && (ie.ref = j), e0(oe, ie);
    }(m, _, y);
  }
  b.displayName = d;
  var m = Fe.forwardRef(b);
  return m.attrs = v, m.componentStyle = S, m.displayName = d, m.shouldForwardProp = g, m.foldedComponentIds = r ? hn(o.foldedComponentIds, o.styledComponentId) : "", m.styledComponentId = l, m.target = r ? o.target : t, Object.defineProperty(m, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(_) {
    this._foldedDefaultProps = r ? function(y) {
      for (var R = [], A = 1; A < arguments.length; A++) R[A - 1] = arguments[A];
      for (var j = 0, z = R; j < z.length; j++) Fi(y, z[j], !0);
      return y;
    }({}, o.defaultProps, _) : _;
  } }), process.env.NODE_ENV !== "production" && (P0(d, l), m.warnTooManyClasses = /* @__PURE__ */ function(_, y) {
    var R = {}, A = !1;
    return function(j) {
      if (!A && (R[j] = !0, Object.keys(R).length >= 200)) {
        var z = y ? ' with the id of "'.concat(y, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(_).concat(z, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), A = !0, R = {};
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
function pd(t) {
  for (var n = [], e = 1; e < arguments.length; e++) n[e - 1] = arguments[e];
  if (Dn(t) || Bn(t)) return Da(gn(Ma(qo, Nn([t], n, !0))));
  var r = t;
  return n.length === 0 && r.length === 1 && typeof r[0] == "string" ? gn(r) : Da(gn(Ma(r, n)));
}
function Vi(t, n, e) {
  if (e === void 0 && (e = Mn), !n) throw Xn(1, n);
  var r = function(o) {
    for (var i = [], s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
    return t(n, e, pd.apply(void 0, Nn([o], i, !1)));
  };
  return r.attrs = function(o) {
    return Vi(t, n, rt(rt({}, e), { attrs: Array.prototype.concat(e.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return Vi(t, n, rt(rt({}, e), o));
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
var jr = "__sc-".concat(wn, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[jr] || (window[jr] = 0), window[jr] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[jr] += 1);
const Er = vo;
(function(t, n) {
  const e = vo, r = t();
  for (; ; )
    try {
      if (parseInt(e(205)) / 1 * (-parseInt(e(203)) / 2) + -parseInt(e(210)) / 3 * (-parseInt(e(199)) / 4) + parseInt(e(200)) / 5 * (-parseInt(e(212)) / 6) + parseInt(e(214)) / 7 + -parseInt(e(202)) / 8 * (parseInt(e(211)) / 9) + -parseInt(e(209)) / 10 * (-parseInt(e(208)) / 11) + parseInt(e(201)) / 12 * (-parseInt(e(206)) / 13) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(yo, 541723);
const xd = _t[Er(213)]`
  flex-direction: column;
  border-radius: 15px;
  border: 3px solid #a0beeb;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
  justify-items: center;
  align-items: center;
`, md = _t[Er(213)]`
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
`, gd = _t[Er(204)]`
  border-radius: 7px;
  display: inline;
  padding: 0;
  &:focus-visible {
    outline: none;
  }
`;
function vo(t, n) {
  const e = yo();
  return vo = function(r, o) {
    return r = r - 199, e[r];
  }, vo(t, n);
}
const vd = _t[Er(207)]`
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
function yo() {
  const t = ["2118424yNLUyg", "4qXljnZ", "canvas", "225949QdXrIS", "2782kdemKB", "span", "3932687zsrSEO", "20pmMgsY", "3nMeJHT", "9SLDBai", "9618VoEePB", "div", "6468595crXKJc", "2679660MaEgpc", "860LKChRL", "43452xjEEYb"];
  return yo = function() {
    return t;
  }, yo();
}
const yd = _t[Er(213)]`
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
const Jr = /* @__PURE__ */ Object.create(null);
Object.keys(Dt).forEach((t) => {
  Jr[Dt[t]] = t;
});
const Hi = { type: "error", data: "parser error" }, Pl = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", Il = typeof ArrayBuffer == "function", Nl = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t && t.buffer instanceof ArrayBuffer, Ws = ({ type: t, data: n }, e, r) => Pl && n instanceof Blob ? e ? r(n) : Ba(n, r) : Il && (n instanceof ArrayBuffer || Nl(n)) ? e ? r(n) : Ba(new Blob([n]), r) : r(Dt[t] + (n || "")), Ba = (t, n) => {
  const e = new FileReader();
  return e.onload = function() {
    const r = e.result.split(",")[1];
    n("b" + (r || ""));
  }, e.readAsDataURL(t);
};
function Fa(t) {
  return t instanceof Uint8Array ? t : t instanceof ArrayBuffer ? new Uint8Array(t) : new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
}
let xi;
function bd(t, n) {
  if (Pl && t.data instanceof Blob)
    return t.data.arrayBuffer().then(Fa).then(n);
  if (Il && (t.data instanceof ArrayBuffer || Nl(t.data)))
    return n(Fa(t.data));
  Ws(t, !1, (e) => {
    xi || (xi = new TextEncoder()), n(xi.encode(e));
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
}, Ll = "", Cd = (t, n) => {
  const e = t.length, r = new Array(e);
  let o = 0;
  t.forEach((i, s) => {
    Ws(i, !1, (a) => {
      r[s] = a, ++o === e && n(r.join(Ll));
    });
  });
}, _d = (t, n) => {
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
const Wo = typeof Promise == "function" && typeof Promise.resolve == "function" ? (n) => Promise.resolve().then(n) : (n, e) => e(n, 0), xt = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), Rd = "arraybuffer";
function Dl(t, ...n) {
  return n.reduce((e, r) => (t.hasOwnProperty(r) && (e[r] = t[r]), e), {});
}
const kd = xt.setTimeout, Pd = xt.clearTimeout;
function Xo(t, n) {
  n.useNativeTimers ? (t.setTimeoutFn = kd.bind(xt), t.clearTimeoutFn = Pd.bind(xt)) : (t.setTimeoutFn = xt.setTimeout.bind(xt), t.clearTimeoutFn = xt.clearTimeout.bind(xt));
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
    _d(n, this.socket.binaryType).forEach(e), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
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
    this.writable = !1, Cd(n, (e) => {
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
var fe;
(function(t) {
  t[t.CONNECT = 0] = "CONNECT", t[t.DISCONNECT = 1] = "DISCONNECT", t[t.EVENT = 2] = "EVENT", t[t.ACK = 3] = "ACK", t[t.CONNECT_ERROR = 4] = "CONNECT_ERROR", t[t.BINARY_EVENT = 5] = "BINARY_EVENT", t[t.BINARY_ACK = 6] = "BINARY_ACK";
})(fe || (fe = {}));
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
    return (n.type === fe.EVENT || n.type === fe.ACK) && to(n) ? this.encodeAsBinary({
      type: n.type === fe.EVENT ? fe.BINARY_EVENT : fe.BINARY_ACK,
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
    return (n.type === fe.BINARY_EVENT || n.type === fe.BINARY_ACK) && (e += n.attachments + "-"), n.nsp && n.nsp !== "/" && (e += n.nsp + ","), n.id != null && (e += n.id), n.data != null && (e += JSON.stringify(n.data, this.replacer)), e;
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
      const r = e.type === fe.BINARY_EVENT;
      r || e.type === fe.BINARY_ACK ? (e.type = r ? fe.EVENT : fe.ACK, this.reconstructor = new uh(e), e.attachments === 0 && super.emitReserved("decoded", e)) : super.emitReserved("decoded", e);
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
    if (fe[r.type] === void 0)
      throw new Error("unknown packet type " + r.type);
    if (r.type === fe.BINARY_EVENT || r.type === fe.BINARY_ACK) {
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
      case fe.CONNECT:
        return Ha(e);
      case fe.DISCONNECT:
        return e === void 0;
      case fe.CONNECT_ERROR:
        return typeof e == "string" || Ha(e);
      case fe.EVENT:
      case fe.BINARY_EVENT:
        return Array.isArray(e) && (typeof e[0] == "number" || typeof e[0] == "string" && ah.indexOf(e[0]) === -1);
      case fe.ACK:
      case fe.BINARY_ACK:
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
    return fe;
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
      type: fe.EVENT,
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
      type: fe.CONNECT,
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
        case fe.CONNECT:
          n.data && n.data.sid ? this.onconnect(n.data.sid, n.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case fe.EVENT:
        case fe.BINARY_EVENT:
          this.onevent(n);
          break;
        case fe.ACK:
        case fe.BINARY_ACK:
          this.onack(n);
          break;
        case fe.DISCONNECT:
          this.ondisconnect();
          break;
        case fe.CONNECT_ERROR:
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
        type: fe.ACK,
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
    return this.connected && this.packet({ type: fe.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
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
var ph = hh();
const Ze = /* @__PURE__ */ o0(ph);
function Bt() {
  return Bt = Object.assign ? Object.assign.bind() : function(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = arguments[n];
      for (var r in e) ({}).hasOwnProperty.call(e, r) && (t[r] = e[r]);
    }
    return t;
  }, Bt.apply(null, arguments);
}
function Se(t) {
  "@babel/helpers - typeof";
  return Se = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Se(t);
}
var xh = Symbol.for("react.element"), mh = Symbol.for("react.transitional.element"), gh = Symbol.for("react.fragment");
function vh(t) {
  return (
    // Base object type
    t && Se(t) === "object" && // React Element type
    (t.$$typeof === xh || t.$$typeof === mh) && // React Fragment type
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
  if (Se(t) != "object" || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var r = e.call(t, n);
    if (Se(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(t);
}
function Xl(t) {
  var n = wh(t, "string");
  return Se(n) == "symbol" ? n : n + "";
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
  return t && Se(t) === "object" && Wa(t.nativeElement) ? t.nativeElement : Wa(t) ? t : null;
}
function Ch(t) {
  var n = Eh(t);
  if (n)
    return n;
  if (t instanceof Fe.Component) {
    var e;
    return (e = ma.findDOMNode) === null || e === void 0 ? void 0 : e.call(ma, t);
  }
  return null;
}
var Dr = { exports: {} }, ve = {};
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
function _h() {
  if (Xa) return ve;
  Xa = 1;
  var t = Symbol.for("react.element"), n = Symbol.for("react.portal"), e = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), l = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g;
  g = Symbol.for("react.module.reference");
  function h(p) {
    if (typeof p == "object" && p !== null) {
      var S = p.$$typeof;
      switch (S) {
        case t:
          switch (p = p.type, p) {
            case e:
            case o:
            case r:
            case u:
            case f:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case a:
                case s:
                case c:
                case l:
                case d:
                case i:
                  return p;
                default:
                  return S;
              }
          }
        case n:
          return S;
      }
    }
  }
  return ve.ContextConsumer = s, ve.ContextProvider = i, ve.Element = t, ve.ForwardRef = c, ve.Fragment = e, ve.Lazy = l, ve.Memo = d, ve.Portal = n, ve.Profiler = o, ve.StrictMode = r, ve.Suspense = u, ve.SuspenseList = f, ve.isAsyncMode = function() {
    return !1;
  }, ve.isConcurrentMode = function() {
    return !1;
  }, ve.isContextConsumer = function(p) {
    return h(p) === s;
  }, ve.isContextProvider = function(p) {
    return h(p) === i;
  }, ve.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === t;
  }, ve.isForwardRef = function(p) {
    return h(p) === c;
  }, ve.isFragment = function(p) {
    return h(p) === e;
  }, ve.isLazy = function(p) {
    return h(p) === l;
  }, ve.isMemo = function(p) {
    return h(p) === d;
  }, ve.isPortal = function(p) {
    return h(p) === n;
  }, ve.isProfiler = function(p) {
    return h(p) === o;
  }, ve.isStrictMode = function(p) {
    return h(p) === r;
  }, ve.isSuspense = function(p) {
    return h(p) === u;
  }, ve.isSuspenseList = function(p) {
    return h(p) === f;
  }, ve.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === e || p === o || p === r || p === u || p === f || p === v || typeof p == "object" && p !== null && (p.$$typeof === l || p.$$typeof === d || p.$$typeof === i || p.$$typeof === s || p.$$typeof === c || p.$$typeof === g || p.getModuleId !== void 0);
  }, ve.typeOf = h, ve;
}
var ye = {};
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
    var t = Symbol.for("react.element"), n = Symbol.for("react.portal"), e = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), l = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g = !1, h = !1, p = !1, S = !1, b = !1, m;
    m = Symbol.for("react.module.reference");
    function _(L) {
      return !!(typeof L == "string" || typeof L == "function" || L === e || L === o || b || L === r || L === u || L === f || S || L === v || g || h || p || typeof L == "object" && L !== null && (L.$$typeof === l || L.$$typeof === d || L.$$typeof === i || L.$$typeof === s || L.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      L.$$typeof === m || L.getModuleId !== void 0));
    }
    function y(L) {
      if (typeof L == "object" && L !== null) {
        var Ae = L.$$typeof;
        switch (Ae) {
          case t:
            var Te = L.type;
            switch (Te) {
              case e:
              case o:
              case r:
              case u:
              case f:
                return Te;
              default:
                var lt = Te && Te.$$typeof;
                switch (lt) {
                  case a:
                  case s:
                  case c:
                  case l:
                  case d:
                  case i:
                    return lt;
                  default:
                    return Ae;
                }
            }
          case n:
            return Ae;
        }
      }
    }
    var R = s, A = i, j = t, z = c, X = e, ne = l, G = d, D = n, H = o, W = r, Y = u, ee = f, K = !1, J = !1;
    function oe(L) {
      return K || (K = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ie(L) {
      return J || (J = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Z(L) {
      return y(L) === s;
    }
    function re(L) {
      return y(L) === i;
    }
    function de(L) {
      return typeof L == "object" && L !== null && L.$$typeof === t;
    }
    function ue(L) {
      return y(L) === c;
    }
    function he(L) {
      return y(L) === e;
    }
    function me(L) {
      return y(L) === l;
    }
    function k(L) {
      return y(L) === d;
    }
    function F(L) {
      return y(L) === n;
    }
    function O(L) {
      return y(L) === o;
    }
    function I(L) {
      return y(L) === r;
    }
    function w(L) {
      return y(L) === u;
    }
    function B(L) {
      return y(L) === f;
    }
    ye.ContextConsumer = R, ye.ContextProvider = A, ye.Element = j, ye.ForwardRef = z, ye.Fragment = X, ye.Lazy = ne, ye.Memo = G, ye.Portal = D, ye.Profiler = H, ye.StrictMode = W, ye.Suspense = Y, ye.SuspenseList = ee, ye.isAsyncMode = oe, ye.isConcurrentMode = ie, ye.isContextConsumer = Z, ye.isContextProvider = re, ye.isElement = de, ye.isForwardRef = ue, ye.isFragment = he, ye.isLazy = me, ye.isMemo = k, ye.isPortal = F, ye.isProfiler = O, ye.isStrictMode = I, ye.isSuspense = w, ye.isSuspenseList = B, ye.isValidElementType = _, ye.typeOf = y;
  }()), ye;
}
var $a;
function Th() {
  return $a || ($a = 1, process.env.NODE_ENV === "production" ? Dr.exports = _h() : Dr.exports = Ah()), Dr.exports;
}
var yi = Th();
function Yl(t, n, e) {
  var r = E.useRef({});
  return (!("value" in r.current) || e(r.current.condition, n)) && (r.current.value = t(), r.current.condition = n), r.current.value;
}
var Oh = Number(n0.split(".")[0]), $l = function(n, e) {
  typeof n == "function" ? n(e) : Se(n) === "object" && n && "current" in n && (n.current = e);
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
function At(t, n) {
  if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function Ga(t, n) {
  for (var e = 0; e < n.length; e++) {
    var r = n[e];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, Xl(r.key), r);
  }
}
function Tt(t, n, e) {
  return n && Ga(t.prototype, n), e && Ga(t, e), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t;
}
function Gi(t, n) {
  return Gi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, r) {
    return e.__proto__ = r, e;
  }, Gi(t, n);
}
function Cr(t, n) {
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
  if (n && (Se(n) == "object" || typeof n == "function")) return n;
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
function Ut(t) {
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
function xr(t) {
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
function qt() {
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
  if (!qt())
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
function yn(t, n) {
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
    if (i && s && Se(i) === "object" && Se(s) === "object") {
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
    At(this, t), q(this, "instanceId", void 0), q(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = n;
  }
  return Tt(t, [{
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
}(), zn = "data-token-hash", Et = "data-css-hash", Uh = "data-cache-path", Kt = "__cssinjs_instance__";
function qh() {
  var t = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var n = document.body.querySelectorAll("style[".concat(Et, "]")) || [], e = document.head.firstChild;
    Array.from(n).forEach(function(o) {
      o[Kt] = o[Kt] || t, o[Kt] === t && document.head.insertBefore(o, e);
    });
    var r = {};
    Array.from(document.querySelectorAll("style[".concat(Et, "]"))).forEach(function(o) {
      var i = o.getAttribute(Et);
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
    At(this, t), q(this, "cache", void 0), q(this, "keys", void 0), q(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return Tt(t, [{
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
    At(this, t), q(this, "derivatives", void 0), q(this, "id", void 0), this.derivatives = Array.isArray(n) ? n : [n], this.id = Qa, n.length === 0 && Zs(n.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), Qa += 1;
  }
  return Tt(t, [{
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
    n += e, r instanceof au ? n += r.id : r && Se(r) === "object" ? n += dr(r) : n += r;
  }), n = xr(n), ec.set(t, n)), n;
}
function tc(t, n) {
  return xr("".concat(n, "_").concat(dr(t)));
}
var es = qt();
function So(t) {
  return typeof t == "number" ? "".concat(t, "px") : t;
}
function wo(t, n, e) {
  var r, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (i)
    return t;
  var s = V(V({}, o), {}, (r = {}, q(r, zn, n), q(r, Et, e), r)), a = Object.keys(s).map(function(c) {
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
}, nc = process.env.NODE_ENV !== "test" && qt() ? E.useLayoutEffect : E.useEffect, lu = function(n, e) {
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
} : Kh, Jh = V({}, E), Qh = Jh.useInsertionEffect, ep = function(n) {
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
}, tp = function() {
  return function(n) {
    n();
  };
}, np = typeof Qh < "u" ? ep : tp;
function rp() {
  return !1;
}
var ts = !1;
function op() {
  return ts;
}
const ip = process.env.NODE_ENV === "production" ? rp : op;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var Br = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : null;
  if (Br && typeof Br.webpackHotUpdate == "function") {
    var sp = Br.webpackHotUpdate;
    Br.webpackHotUpdate = function() {
      return ts = !0, setTimeout(function() {
        ts = !1;
      }, 0), sp.apply(void 0, arguments);
    };
  }
}
function na(t, n, e, r, o) {
  var i = E.useContext(_r), s = i.cache, a = [t].concat(Ut(n)), c = Ji(a), u = np([c]), f = ip(), d = function(h) {
    s.opUpdate(c, function(p) {
      var S = p || [void 0, void 0], b = ce(S, 2), m = b[0], _ = m === void 0 ? 0 : m, y = b[1], R = y;
      process.env.NODE_ENV !== "production" && y && f && (r == null || r(R, f), R = null);
      var A = R || e(), j = [_, A];
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
  var l = s.opGet(c);
  process.env.NODE_ENV !== "production" && !l && (d(), l = s.opGet(c));
  var v = l[1];
  return Zh(function() {
    o == null || o(v);
  }, function(g) {
    return d(function(h) {
      var p = ce(h, 2), S = p[0], b = p[1];
      return g && S === 0 && (o == null || o(v)), [S + 1, b];
    }), function() {
      s.opUpdate(c, function(h) {
        var p = h || [], S = ce(p, 2), b = S[0], m = b === void 0 ? 0 : b, _ = S[1], y = m - 1;
        return y === 0 ? (u(function() {
          (g || !s.opGet(c)) && (r == null || r(_, !1));
        }), null) : [m - 1, _];
      });
    };
  }, [c]), v;
}
var ap = {}, cp = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", dn = /* @__PURE__ */ new Map();
function lp(t) {
  dn.set(t, (dn.get(t) || 0) + 1);
}
function up(t, n) {
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
var fp = 0;
function dp(t, n) {
  dn.set(t, (dn.get(t) || 0) - 1);
  var e = Array.from(dn.keys()), r = e.filter(function(o) {
    var i = dn.get(o) || 0;
    return i <= 0;
  });
  e.length - r.length > fp && r.forEach(function(o) {
    up(o, n), dn.delete(o);
  });
}
var hp = function(n, e, r, o) {
  var i = r.getDerivativeToken(n), s = V(V({}, i), e);
  return o && (s = o(s)), s;
}, uu = "token";
function pp(t, n) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Qt(_r), o = r.cache.instanceId, i = r.container, s = e.salt, a = s === void 0 ? "" : s, c = e.override, u = c === void 0 ? ap : c, f = e.formatToken, d = e.getComputedToken, l = e.cssVar, v = Yh(function() {
    return Object.assign.apply(Object, [{}].concat(Ut(n)));
  }, n), g = dr(v), h = dr(u), p = l ? dr(l) : "", S = na(uu, [a, t.id, g, h, p], function() {
    var b, m = d ? d(v, u, t) : hp(v, u, t, f), _ = V({}, m), y = "";
    if (l) {
      var R = cu(m, l.key, {
        prefix: l.prefix,
        ignore: l.ignore,
        unitless: l.unitless,
        preserve: l.preserve
      }), A = ce(R, 2);
      m = A[0], y = A[1];
    }
    var j = tc(m, a);
    m._tokenKey = j, _._tokenKey = tc(_, a);
    var z = (b = l == null ? void 0 : l.key) !== null && b !== void 0 ? b : j;
    m._themeKey = z, lp(z);
    var X = "".concat(cp, "-").concat(xr(j));
    return m._hashId = X, [m, X, _, y, (l == null ? void 0 : l.key) || ""];
  }, function(b) {
    dp(b[0]._themeKey, o);
  }, function(b) {
    var m = ce(b, 4), _ = m[0], y = m[3];
    if (l && y) {
      var R = yn(y, xr("css-variables-".concat(_._themeKey)), {
        mark: Et,
        prepend: "queue",
        attachTo: i,
        priority: -999
      });
      R[Kt] = o, R.setAttribute(zn, _._themeKey);
    }
  });
  return S;
}
var xp = function(n, e, r) {
  var o = ce(n, 5), i = o[2], s = o[3], a = o[4], c = r || {}, u = c.plain;
  if (!s)
    return null;
  var f = i._tokenKey, d = -999, l = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(d)
  }, v = wo(s, a, f, l, u);
  return [d, f, v];
}, mp = {
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
}, fu = "comm", du = "rule", hu = "decl", gp = "@import", vp = "@namespace", yp = "@keyframes", bp = "@layer", pu = Math.abs, ra = String.fromCharCode;
function xu(t) {
  return t.trim();
}
function oo(t, n, e) {
  return t.replace(n, e);
}
function Sp(t, n, e) {
  return t.indexOf(n, e);
}
function In(t, n) {
  return t.charCodeAt(n) | 0;
}
function Vn(t, n, e) {
  return t.slice(n, e);
}
function jt(t) {
  return t.length;
}
function wp(t) {
  return t.length;
}
function Fr(t, n) {
  return n.push(t), t;
}
var Ko = 1, Hn = 1, mu = 0, gt = 0, Ve = 0, $n = "";
function oa(t, n, e, r, o, i, s, a) {
  return { value: t, root: n, parent: e, type: r, props: o, children: i, line: Ko, column: Hn, length: s, return: "", siblings: a };
}
function Ep() {
  return Ve;
}
function Cp() {
  return Ve = gt > 0 ? In($n, --gt) : 0, Hn--, Ve === 10 && (Hn = 1, Ko--), Ve;
}
function Ct() {
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
function _p(t) {
  return Ko = Hn = 1, mu = jt($n = t), gt = 0, [];
}
function Ap(t) {
  return $n = "", t;
}
function wi(t) {
  return xu(Zo(gt - 1, ns(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function Tp(t) {
  for (; (Ve = Zt()) && Ve < 33; )
    Ct();
  return gr(t) > 2 || gr(Ve) > 3 ? "" : " ";
}
function Op(t, n) {
  for (; --n && Ct() && !(Ve < 48 || Ve > 102 || Ve > 57 && Ve < 65 || Ve > 70 && Ve < 97); )
    ;
  return Zo(t, io() + (n < 6 && Zt() == 32 && Ct() == 32));
}
function ns(t) {
  for (; Ct(); )
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
        Ct();
        break;
    }
  return gt;
}
function Rp(t, n) {
  for (; Ct() && t + Ve !== 57; )
    if (t + Ve === 84 && Zt() === 47)
      break;
  return "/*" + Zo(n, gt - 1) + "*" + ra(t === 47 ? t : Ct());
}
function kp(t) {
  for (; !gr(Zt()); )
    Ct();
  return Zo(t, gt);
}
function Pp(t) {
  return Ap(so("", null, null, null, [""], t = _p(t), 0, [0], t));
}
function so(t, n, e, r, o, i, s, a, c) {
  for (var u = 0, f = 0, d = s, l = 0, v = 0, g = 0, h = 1, p = 1, S = 1, b = 0, m = "", _ = o, y = i, R = r, A = m; p; )
    switch (g = b, b = Ct()) {
      // (
      case 40:
        if (g != 108 && In(A, d - 1) == 58) {
          Sp(A += oo(wi(b), "&", "&\f"), "&\f", pu(u ? a[u - 1] : 0)) != -1 && (S = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        A += wi(b);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        A += Tp(g);
        break;
      // \
      case 92:
        A += Op(io() - 1, 7);
        continue;
      // /
      case 47:
        switch (Zt()) {
          case 42:
          case 47:
            Fr(Ip(Rp(Ct(), io()), n, e, c), c), (gr(g || 1) == 5 || gr(Zt() || 1) == 5) && jt(A) && Vn(A, -1, void 0) !== " " && (A += " ");
            break;
          default:
            A += "/";
        }
        break;
      // {
      case 123 * h:
        a[u++] = jt(A) * S;
      // } ; \0
      case 125 * h:
      case 59:
      case 0:
        switch (b) {
          // \0 }
          case 0:
          case 125:
            p = 0;
          // ;
          case 59 + f:
            S == -1 && (A = oo(A, /\f/g, "")), v > 0 && (jt(A) - d || h === 0 && g === 47) && Fr(v > 32 ? ic(A + ";", r, e, d - 1, c) : ic(oo(A, " ", "") + ";", r, e, d - 2, c), c);
            break;
          // @ ;
          case 59:
            A += ";";
          // { rule/at-rule
          default:
            if (Fr(R = oc(A, n, e, u, f, o, a, m, _ = [], y = [], d, i), i), b === 123)
              if (f === 0)
                so(A, n, R, R, _, i, d, a, y);
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
                f ? so(t, R, R, r && Fr(oc(t, R, R, 0, 0, o, a, m, o, _ = [], d, y), y), o, y, d, a, r ? _ : y) : so(A, R, R, R, [""], y, 0, a, y);
              }
        }
        u = f = v = 0, h = S = 1, m = A = "", d = s;
        break;
      // :
      case 58:
        d = 1 + jt(A), v = g;
      default:
        if (h < 1) {
          if (b == 123)
            --h;
          else if (b == 125 && h++ == 0 && Cp() == 125)
            continue;
        }
        switch (A += ra(b), b * h) {
          // &
          case 38:
            S = f > 0 ? 1 : (A += "\f", -1);
            break;
          // ,
          case 44:
            a[u++] = (jt(A) - 1) * S, S = 1;
            break;
          // @
          case 64:
            Zt() === 45 && (A += wi(Ct())), l = Zt(), f = d = jt(m = A += kp(io())), b++;
            break;
          // -
          case 45:
            g === 45 && jt(A) == 2 && (h = 0);
        }
    }
  return i;
}
function oc(t, n, e, r, o, i, s, a, c, u, f, d) {
  for (var l = o - 1, v = o === 0 ? i : [""], g = wp(v), h = 0, p = 0, S = 0; h < r; ++h)
    for (var b = 0, m = Vn(t, l + 1, l = pu(p = s[h])), _ = t; b < g; ++b)
      (_ = xu(p > 0 ? v[b] + " " + m : oo(m, /&\f/g, v[b]))) && (c[S++] = _);
  return oa(t, n, e, o === 0 ? du : a, c, u, f, d);
}
function Ip(t, n, e, r) {
  return oa(t, n, e, fu, ra(Ep()), Vn(t, 2, -2), 0, r);
}
function ic(t, n, e, r, o) {
  return oa(t, n, e, hu, Vn(t, 0, r), Vn(t, r + 1, -1), r, o);
}
function rs(t, n) {
  for (var e = "", r = 0; r < t.length; r++)
    e += n(t[r], r, t, n) || "";
  return e;
}
function Np(t, n, e, r) {
  switch (t.type) {
    case bp:
      if (t.children.length) break;
    case gp:
    case vp:
    case hu:
      return t.return = t.return || t.value;
    case fu:
      return "";
    case yp:
      return t.return = t.value + "{" + rs(t.children, r) + "}";
    case du:
      if (!jt(t.value = t.props.join(","))) return "";
  }
  return jt(e = rs(t.children, r)) ? t.return = t.value + "{" + e + "}" : "";
}
function gu(t, n) {
  var e = n.path, r = n.parentSelectors;
  tn(!1, "[Ant Design CSS-in-JS] ".concat(e ? "Error in ".concat(e, ": ") : "").concat(t).concat(r.length ? " Selector: ".concat(r.join(" | ")) : ""));
}
var jp = function(n, e, r) {
  if (n === "content") {
    var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, i = ["normal", "none", "initial", "inherit", "unset"];
    (typeof e != "string" || i.indexOf(e) === -1 && !o.test(e) && (e.charAt(0) !== e.charAt(e.length - 1) || e.charAt(0) !== '"' && e.charAt(0) !== "'")) && gu("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(e, "\"'`."), r);
  }
}, Lp = function(n, e, r) {
  n === "animation" && r.hashId && e !== "none" && gu("You seem to be using hashed animation '".concat(e, "', in which case 'animationName' with Keyframe as value is recommended."), r);
}, sc = "data-ant-cssinjs-cache-path", vu = "_FILE_STYLE__", bn, yu = !0;
function Mp() {
  if (!bn && (bn = {}, qt())) {
    var t = document.createElement("div");
    t.className = sc, t.style.position = "fixed", t.style.visibility = "hidden", t.style.top = "-9999px", document.body.appendChild(t);
    var n = getComputedStyle(t).content || "";
    n = n.replace(/^"/, "").replace(/"$/, ""), n.split(";").forEach(function(o) {
      var i = o.split(":"), s = ce(i, 2), a = s[0], c = s[1];
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
function Dp(t) {
  return Mp(), !!bn[t];
}
function Bp(t) {
  var n = bn[t], e = null;
  if (n && qt())
    if (yu)
      e = vu;
    else {
      var r = document.querySelector("style[".concat(Et, '="').concat(bn[t], '"]'));
      r ? e = r.innerHTML : delete bn[t];
    }
  return [e, n];
}
var bu = "_skip_check_", Su = "_multi_value_";
function ao(t) {
  var n = rs(Pp(t), Np);
  return n.replace(/\{%%%\:[^;];}/g, ";");
}
function Fp(t) {
  return Se(t) === "object" && t && (bu in t || Su in t);
}
function ac(t, n, e) {
  if (!n)
    return t;
  var r = ".".concat(n), o = e === "low" ? ":where(".concat(r, ")") : r, i = t.split(",").map(function(s) {
    var a, c = s.trim().split(/\s+/), u = c[0] || "", f = ((a = u.match(/^\w+/)) === null || a === void 0 ? void 0 : a[0]) || "";
    return u = "".concat(f).concat(o).concat(u.slice(f.length)), [u].concat(Ut(c.slice(1))).join(" ");
  });
  return i.join(",");
}
var zp = function t(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = r.root, i = r.injectHash, s = r.parentSelectors, a = e.hashId, c = e.layer, u = e.path, f = e.hashPriority, d = e.transformers, l = d === void 0 ? [] : d, v = e.linters, g = v === void 0 ? [] : v, h = "", p = {};
  function S(_) {
    var y = _.getName(a);
    if (!p[y]) {
      var R = t(_.style, e, {
        root: !1,
        parentSelectors: s
      }), A = ce(R, 1), j = A[0];
      p[y] = "@keyframes ".concat(_.getName(a)).concat(j);
    }
  }
  function b(_) {
    var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return _.forEach(function(R) {
      Array.isArray(R) ? b(R, y) : R && y.push(R);
    }), y;
  }
  var m = b(Array.isArray(n) ? n : [n]);
  return m.forEach(function(_) {
    var y = typeof _ == "string" && !o ? {} : _;
    if (typeof y == "string")
      h += "".concat(y, `
`);
    else if (y._keyframe)
      S(y);
    else {
      var R = l.reduce(function(A, j) {
        var z;
        return (j == null || (z = j.visit) === null || z === void 0 ? void 0 : z.call(j, A)) || A;
      }, y);
      Object.keys(R).forEach(function(A) {
        var j = R[A];
        if (Se(j) === "object" && j && (A !== "animationName" || !j._keyframe) && !Fp(j)) {
          var z = !1, X = A.trim(), ne = !1;
          (o || i) && a ? X.startsWith("@") ? z = !0 : X === "&" ? X = ac("", a, f) : X = ac(A, a, f) : o && !a && (X === "&" || X === "") && (X = "", ne = !0);
          var G = t(j, e, {
            root: ne,
            injectHash: z,
            parentSelectors: [].concat(Ut(s), [X])
          }), D = ce(G, 2), H = D[0], W = D[1];
          p = V(V({}, p), W), h += "".concat(X).concat(H);
        } else {
          let K = function(J, oe) {
            process.env.NODE_ENV !== "production" && (Se(j) !== "object" || !(j != null && j[bu])) && [jp, Lp].concat(Ut(g)).forEach(function(re) {
              return re(J, oe, {
                path: u,
                hashId: a,
                parentSelectors: s
              });
            });
            var ie = J.replace(/[A-Z]/g, function(re) {
              return "-".concat(re.toLowerCase());
            }), Z = oe;
            !mp[J] && typeof Z == "number" && Z !== 0 && (Z = "".concat(Z, "px")), J === "animationName" && oe !== null && oe !== void 0 && oe._keyframe && (S(oe), Z = oe.getName(a)), h += "".concat(ie, ":").concat(Z, ";");
          };
          var Y, ee = (Y = j == null ? void 0 : j.value) !== null && Y !== void 0 ? Y : j;
          Se(j) === "object" && j !== null && j !== void 0 && j[Su] && Array.isArray(ee) ? ee.forEach(function(J) {
            K(A, J);
          }) : K(A, ee);
        }
      });
    }
  }), o ? c && (h && (h = "@layer ".concat(c.name, " {").concat(h, "}")), c.dependencies && (p["@layer ".concat(c.name)] = c.dependencies.map(function(_) {
    return "@layer ".concat(_, ", ").concat(c.name, ";");
  }).join(`
`))) : h = "{".concat(h, "}"), [h, p];
};
function wu(t, n) {
  return xr("".concat(t.join("%")).concat(n));
}
function Vp() {
  return null;
}
var Eu = "style";
function os(t, n) {
  var e = t.token, r = t.path, o = t.hashId, i = t.layer, s = t.nonce, a = t.clientOnly, c = t.order, u = c === void 0 ? 0 : c, f = E.useContext(_r), d = f.autoClear, l = f.mock, v = f.defaultCache, g = f.hashPriority, h = f.container, p = f.ssrInline, S = f.transformers, b = f.linters, m = f.cache, _ = f.layer, y = e._tokenKey, R = [y];
  _ && R.push("layer"), R.push.apply(R, Ut(r));
  var A = es;
  process.env.NODE_ENV !== "production" && l !== void 0 && (A = l === "client");
  var j = na(
    Eu,
    R,
    // Create cache if needed
    function() {
      var D = R.join("|");
      if (Dp(D)) {
        var H = Bp(D), W = ce(H, 2), Y = W[0], ee = W[1];
        if (Y)
          return [Y, y, ee, {}, a, u];
      }
      var K = n(), J = zp(K, {
        hashId: o,
        hashPriority: g,
        layer: _ ? i : void 0,
        path: r.join("-"),
        transformers: S,
        linters: b
      }), oe = ce(J, 2), ie = oe[0], Z = oe[1], re = ao(ie), de = wu(R, re);
      return [re, y, de, Z, a, u];
    },
    // Remove cache if no need
    function(D, H) {
      var W = ce(D, 3), Y = W[2];
      (H || d) && es && su(Y, {
        mark: Et
      });
    },
    // Effect: Inject style here
    function(D) {
      var H = ce(D, 4), W = H[0];
      H[1];
      var Y = H[2], ee = H[3];
      if (A && W !== vu) {
        var K = {
          mark: Et,
          prepend: _ ? !1 : "queue",
          attachTo: h,
          priority: u
        }, J = typeof s == "function" ? s() : s;
        J && (K.csp = {
          nonce: J
        });
        var oe = [], ie = [];
        Object.keys(ee).forEach(function(re) {
          re.startsWith("@layer") ? oe.push(re) : ie.push(re);
        }), oe.forEach(function(re) {
          yn(ao(ee[re]), "_layer-".concat(re), V(V({}, K), {}, {
            prepend: !0
          }));
        });
        var Z = yn(W, Y, K);
        Z[Kt] = m.instanceId, Z.setAttribute(zn, y), process.env.NODE_ENV !== "production" && Z.setAttribute(Uh, R.join("|")), ie.forEach(function(re) {
          yn(ao(ee[re]), "_effect-".concat(re), K);
        });
      }
    }
  ), z = ce(j, 3), X = z[0], ne = z[1], G = z[2];
  return function(D) {
    var H;
    if (!p || A || !v)
      H = /* @__PURE__ */ E.createElement(Vp, null);
    else {
      var W;
      H = /* @__PURE__ */ E.createElement("style", Bt({}, (W = {}, q(W, zn, ne), q(W, Et, G), W), {
        dangerouslySetInnerHTML: {
          __html: X
        }
      }));
    }
    return /* @__PURE__ */ E.createElement(E.Fragment, null, H, D);
  };
}
var Hp = function(n, e, r) {
  var o = ce(n, 6), i = o[0], s = o[1], a = o[2], c = o[3], u = o[4], f = o[5], d = r || {}, l = d.plain;
  if (u)
    return null;
  var v = i, g = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(f)
  };
  return v = wo(i, s, a, g, l), c && Object.keys(c).forEach(function(h) {
    if (!e[h]) {
      e[h] = !0;
      var p = ao(c[h]), S = wo(p, s, "_effect-".concat(h), g, l);
      h.startsWith("@layer") ? v = S + v : v += S;
    }
  }), [f, a, v];
}, Cu = "cssVar", Up = function(n, e) {
  var r = n.key, o = n.prefix, i = n.unitless, s = n.ignore, a = n.token, c = n.scope, u = c === void 0 ? "" : c, f = Qt(_r), d = f.cache.instanceId, l = f.container, v = a._tokenKey, g = [].concat(Ut(n.path), [r, u, v]), h = na(Cu, g, function() {
    var p = e(), S = cu(p, r, {
      prefix: o,
      unitless: i,
      ignore: s,
      scope: u
    }), b = ce(S, 2), m = b[0], _ = b[1], y = wu(g, _);
    return [m, _, y, r];
  }, function(p) {
    var S = ce(p, 3), b = S[2];
    es && su(b, {
      mark: Et
    });
  }, function(p) {
    var S = ce(p, 3), b = S[1], m = S[2];
    if (b) {
      var _ = yn(b, m, {
        mark: Et,
        prepend: "queue",
        attachTo: l,
        priority: -999
      });
      _[Kt] = d, _.setAttribute(zn, r);
    }
  });
  return h;
}, qp = function(n, e, r) {
  var o = ce(n, 4), i = o[1], s = o[2], a = o[3], c = r || {}, u = c.plain;
  if (!i)
    return null;
  var f = -999, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(f)
  }, l = wo(i, a, s, d, u);
  return [f, s, l];
}, or;
or = {}, q(or, Eu, Hp), q(or, uu, xp), q(or, Cu, qp);
var _u = /* @__PURE__ */ function() {
  function t(n, e) {
    At(this, t), q(this, "name", void 0), q(this, "style", void 0), q(this, "_keyframe", !0), this.name = n, this.style = e;
  }
  return Tt(t, [{
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
function Wp(t) {
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
  var o = Wp(n), i = o[0], s = o.slice(1), a;
  return !t && typeof i == "number" ? a = [] : Array.isArray(t) ? a = Ut(t) : a = V({}, t), r && e === void 0 && s.length === 1 ? delete a[i][s[0]] : a[i] = Au(a[i], s, e, r), a;
}
function Ei(t, n, e) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return n.length && r && e === void 0 && !is(t, n.slice(0, -1)) ? t : Au(t, n, e, r);
}
function Xp(t) {
  return Se(t) === "object" && t !== null && Object.getPrototypeOf(t) === Object.prototype;
}
function cc(t) {
  return Array.isArray(t) ? [] : {};
}
var Yp = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function $p() {
  for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++)
    n[e] = arguments[e];
  var r = cc(n[0]);
  return n.forEach(function(o) {
    function i(s, a) {
      var c = new Set(a), u = is(o, s), f = Array.isArray(u);
      if (f || Xp(u)) {
        if (!c.has(u)) {
          c.add(u);
          var d = is(r, s);
          f ? r = Ei(r, s, []) : (!d || Se(d) !== "object") && (r = Ei(r, s, cc(u))), Yp(u).forEach(function(l) {
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
function Gp() {
  Vt = null, ql();
}
let sa = Tu;
process.env.NODE_ENV !== "production" && (sa = (t, n, e) => {
  tn(t, `[antd: ${n}] ${e}`), process.env.NODE_ENV === "test" && Gp();
});
const Ou = /* @__PURE__ */ E.createContext({}), Gn = process.env.NODE_ENV !== "production" ? (t) => {
  const {
    strict: n
  } = E.useContext(Ou), e = (r, o, i) => {
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
}, Jo = sa, Kp = /* @__PURE__ */ Fs(void 0), ct = "${label} is not a valid ${type}", Qo = {
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
        string: ct,
        method: ct,
        array: ct,
        object: ct,
        number: ct,
        date: ct,
        boolean: ct,
        integer: ct,
        float: ct,
        regexp: ct,
        email: ct,
        url: ct,
        hex: ct
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
function Zp(t) {
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
  E.useEffect(() => Zp(n == null ? void 0 : n.Modal), [n]);
  const o = E.useMemo(() => Object.assign(Object.assign({}, n), {
    exist: !0
  }), [n]);
  return /* @__PURE__ */ E.createElement(Ru.Provider, {
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
function Ci(t, n) {
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
    const e = Ci(n, uc);
    this.fromHsv({
      h: e[0],
      s: e[1],
      v: e[2],
      a: e[3]
    });
  }
  fromHslString(n) {
    const e = Ci(n, uc);
    this.fromHsl({
      h: e[0],
      s: e[1],
      l: e[2],
      a: e[3]
    });
  }
  fromRgbString(n) {
    const e = Ci(n, (r, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? We(r / 100 * 255) : r
    ));
    this.r = e[0], this.g = e[1], this.b = e[2], this.a = e[3];
  }
}
var zr = 2, fc = 0.16, Jp = 0.05, Qp = 0.05, ex = 0.15, Nu = 5, ju = 4, tx = [{
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
  return e ? r = t.s - fc * n : n === ju ? r = t.s + fc : r = t.s + Jp * n, r > 1 && (r = 1), e && n === Nu && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Math.round(r * 100) / 100;
}
function pc(t, n, e) {
  var r;
  return e ? r = t.v + Qp * n : r = t.v - ex * n, r = Math.max(0, Math.min(1, r)), Math.round(r * 100) / 100;
}
function yr(t) {
  for (var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = [], r = new Be(t), o = r.toHsv(), i = Nu; i > 0; i -= 1) {
    var s = new Be({
      h: dc(o, i, !0),
      s: hc(o, i, !0),
      v: pc(o, i, !0)
    });
    e.push(s);
  }
  e.push(r);
  for (var a = 1; a <= ju; a += 1) {
    var c = new Be({
      h: dc(o, a),
      s: hc(o, a),
      v: pc(o, a)
    });
    e.push(c);
  }
  return n.theme === "dark" ? tx.map(function(u) {
    var f = u.index, d = u.amount;
    return new Be(n.backgroundColor || "#141414").mix(e[f], d).toHexString();
  }) : e.map(function(u) {
    return u.toHexString();
  });
}
var _i = {
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
var ps = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
ps.primary = ps[5];
var xs = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
xs.primary = xs[5];
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
  geekblue: ps,
  purple: xs,
  magenta: ms,
  grey: gs
};
function nx(t, n) {
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
  } = t, d = e(c), l = e(o), v = e(i), g = e(s), h = e(a), p = r(u, f), S = t.colorLink || t.colorInfo, b = e(S), m = new Be(g[1]).mix(new Be(g[3]), 50).toHexString();
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
const rx = (t) => {
  let n = t, e = t, r = t, o = t;
  return t < 6 && t >= 5 ? n = t + 1 : t < 16 && t >= 6 ? n = t + 2 : t >= 16 && (n = 16), t < 7 && t >= 5 ? e = 4 : t < 8 && t >= 7 ? e = 5 : t < 14 && t >= 8 ? e = 6 : t < 16 && t >= 14 ? e = 7 : t >= 16 && (e = 8), t < 6 && t >= 2 ? r = 1 : t >= 6 && (r = 2), t > 4 && t < 8 ? o = 4 : t >= 8 && (o = 6), {
    borderRadius: t,
    borderRadiusXS: r,
    borderRadiusSM: e,
    borderRadiusLG: n,
    borderRadiusOuter: o
  };
};
function ox(t) {
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
  }, rx(r));
}
const ix = (t) => {
  const {
    controlHeight: n
  } = t;
  return {
    controlHeightSM: n * 0.75,
    controlHeightXS: n * 0.5,
    controlHeightLG: n * 1.25
  };
};
function sx(t) {
  return (t + 8) / t;
}
function ax(t) {
  const n = Array.from({
    length: 10
  }).map((e, r) => {
    const o = r - 1, i = t * Math.pow(Math.E, o / 5), s = r > 1 ? Math.floor(i) : Math.ceil(i);
    return Math.floor(s / 2) * 2;
  });
  return n[1] = t, n.map((e) => ({
    size: e,
    lineHeight: sx(e)
  }));
}
const cx = (t) => {
  const n = ax(t), e = n.map((f) => f.size), r = n.map((f) => f.lineHeight), o = e[1], i = e[0], s = e[2], a = r[1], c = r[0], u = r[2];
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
function lx(t) {
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
const pt = (t, n) => new Be(t).setA(n).toRgbString(), sr = (t, n) => new Be(t).darken(n).toHexString(), ux = (t) => {
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
}, fx = (t, n) => {
  const e = t || "#fff", r = n || "#000";
  return {
    colorBgBase: e,
    colorTextBase: r,
    colorText: pt(r, 0.88),
    colorTextSecondary: pt(r, 0.65),
    colorTextTertiary: pt(r, 0.45),
    colorTextQuaternary: pt(r, 0.25),
    colorFill: pt(r, 0.15),
    colorFillSecondary: pt(r, 0.06),
    colorFillTertiary: pt(r, 0.04),
    colorFillQuaternary: pt(r, 0.02),
    colorBgSolid: pt(r, 1),
    colorBgSolidHover: pt(r, 0.75),
    colorBgSolidActive: pt(r, 0.95),
    colorBgLayout: sr(e, 4),
    colorBgContainer: sr(e, 0),
    colorBgElevated: sr(e, 0),
    colorBgSpotlight: pt(r, 0.85),
    colorBgBlur: "transparent",
    colorBorder: sr(e, 15),
    colorBorderSecondary: sr(e, 6)
  };
};
function dx(t) {
  _i.pink = _i.magenta, Ai.pink = Ai.magenta;
  const n = Object.keys(Iu).map((e) => {
    const r = t[e] === _i[e] ? Ai[e] : yr(t[e]);
    return Array.from({
      length: 10
    }, () => 1).reduce((o, i, s) => (o[`${e}-${s + 1}`] = r[s], o[`${e}${s + 1}`] = r[s], o), {});
  }).reduce((e, r) => (e = Object.assign(Object.assign({}, e), r), e), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, t), n), nx(t, {
    generateColorPalettes: ux,
    generateNeutralColorPalettes: fx
  })), cx(t.fontSize)), lx(t)), ix(t)), ox(t));
}
const Lu = Qi(dx), vs = {
  token: vr,
  override: {
    override: vr
  },
  hashed: !0
}, Mu = /* @__PURE__ */ Fe.createContext(vs), ys = "ant", aa = "anticon", hx = (t, n) => n || (t ? `${ys}-${t}` : ys), en = /* @__PURE__ */ E.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: hx,
  iconPrefixCls: aa
}), {
  Consumer: Av
} = en, xc = {};
function Du(t) {
  const n = E.useContext(en), {
    getPrefixCls: e,
    direction: r,
    getPopupContainer: o
  } = n, i = n[t];
  return Object.assign(Object.assign({
    classNames: xc,
    styles: xc
  }, i), {
    getPrefixCls: e,
    direction: r,
    getPopupContainer: o
  });
}
const px = `-ant-${Date.now()}-${Math.random()}`;
function xx(t, n) {
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
function mx(t, n) {
  const e = xx(t, n);
  qt() ? yn(e, `${px}-dynamic-theme`) : process.env.NODE_ENV !== "production" && Jo(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const bs = /* @__PURE__ */ E.createContext(!1), gx = (t) => {
  let {
    children: n,
    disabled: e
  } = t;
  const r = E.useContext(bs);
  return /* @__PURE__ */ E.createElement(bs.Provider, {
    value: e ?? r
  }, n);
}, br = /* @__PURE__ */ E.createContext(void 0), vx = (t) => {
  let {
    children: n,
    size: e
  } = t;
  const r = E.useContext(br);
  return /* @__PURE__ */ E.createElement(br.Provider, {
    value: e || r
  }, n);
};
function yx() {
  const t = Qt(bs), n = Qt(br);
  return {
    componentDisabled: t,
    componentSize: n
  };
}
var Bu = /* @__PURE__ */ Tt(function t() {
  At(this, t);
}), Fu = "CALC_UNIT", bx = new RegExp(Fu, "g");
function Ti(t) {
  return typeof t == "number" ? "".concat(t).concat(Fu) : t;
}
var Sx = /* @__PURE__ */ function(t) {
  Cr(e, t);
  var n = Yo(e);
  function e(r, o) {
    var i;
    At(this, e), i = n.call(this), q(vn(i), "result", ""), q(vn(i), "unitlessCssVar", void 0), q(vn(i), "lowPriority", void 0);
    var s = Se(r);
    return i.unitlessCssVar = o, r instanceof e ? i.result = "(".concat(r.result, ")") : s === "number" ? i.result = Ti(r) : s === "string" && (i.result = r), i;
  }
  return Tt(e, [{
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
      }) && (c = !1), this.result = this.result.replace(bx, c ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), e;
}(Bu), wx = /* @__PURE__ */ function(t) {
  Cr(e, t);
  var n = Yo(e);
  function e(r) {
    var o;
    return At(this, e), o = n.call(this), q(vn(o), "result", 0), r instanceof e ? o.result = r.result : typeof r == "number" && (o.result = r), o;
  }
  return Tt(e, [{
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
}(Bu), Ex = function(n, e) {
  var r = n === "css" ? Sx : wx;
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
  var n = E.useRef(!1), e = E.useState(t), r = ce(e, 2), o = r[0], i = r[1];
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
    if (Se(o) === "object") {
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
function Cx() {
}
var _x = function(n) {
  var e, r = n, o = Cx;
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
function Ax(t) {
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
var Tx = 1e3 * 60 * 10, Ox = /* @__PURE__ */ function() {
  function t() {
    At(this, t), q(this, "map", /* @__PURE__ */ new Map()), q(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), q(this, "nextID", 0), q(this, "lastAccessBeat", /* @__PURE__ */ new Map()), q(this, "accessBeat", 0);
  }
  return Tt(t, [{
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
        return i && Se(i) === "object" ? "obj_".concat(r.getObjectID(i)) : "".concat(Se(i), "_").concat(i);
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
          r - o > Tx && (e.map.delete(i), e.lastAccessBeat.delete(i));
        }), this.accessBeat = 0;
      }
    }
  }]), t;
}(), bc = new Ox();
function Rx(t, n) {
  return Fe.useMemo(function() {
    var e = bc.get(n);
    if (e)
      return e;
    var r = t();
    return bc.set(n, r), r;
  }, n);
}
var kx = function() {
  return {};
};
function Px(t) {
  var n = t.useCSP, e = n === void 0 ? kx : n, r = t.useToken, o = t.usePrefix, i = t.getResetStyles, s = t.getCommonStyle, a = t.getCompUnitless;
  function c(l, v, g, h) {
    var p = Array.isArray(l) ? l[0] : l;
    function S(j) {
      return "".concat(String(p)).concat(j.slice(0, 1).toUpperCase()).concat(j.slice(1));
    }
    var b = (h == null ? void 0 : h.unitless) || {}, m = typeof a == "function" ? a(l) : {}, _ = V(V({}, m), {}, q({}, S("zIndexPopup"), !0));
    Object.keys(b).forEach(function(j) {
      _[S(j)] = b[j];
    });
    var y = V(V({}, h), {}, {
      unitless: _,
      prefixToken: S
    }), R = f(l, v, g, y), A = u(p, g, y);
    return function(j) {
      var z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : j, X = R(j, z), ne = ce(X, 2), G = ne[1], D = A(z), H = ce(D, 2), W = H[0], Y = H[1];
      return [W, G, Y];
    };
  }
  function u(l, v, g) {
    var h = g.unitless, p = g.injectStyle, S = p === void 0 ? !0 : p, b = g.prefixToken, m = g.ignore, _ = function(A) {
      var j = A.rootCls, z = A.cssVar, X = z === void 0 ? {} : z, ne = r(), G = ne.realToken;
      return Up({
        path: [l],
        prefix: X.prefix,
        key: X.key,
        unitless: h,
        ignore: m,
        token: G,
        scope: j
      }, function() {
        var D = yc(l, G, v), H = gc(l, G, D, {
          deprecatedTokens: g == null ? void 0 : g.deprecatedTokens
        });
        return Object.keys(D).forEach(function(W) {
          H[b(W)] = H[W], delete H[W];
        }), H;
      }), null;
    }, y = function(A) {
      var j = r(), z = j.cssVar;
      return [function(X) {
        return S && z ? /* @__PURE__ */ Fe.createElement(Fe.Fragment, null, /* @__PURE__ */ Fe.createElement(_, {
          rootCls: A,
          cssVar: z,
          component: l
        }), X) : X;
      }, z == null ? void 0 : z.key];
    };
    return y;
  }
  function f(l, v, g) {
    var h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, p = Array.isArray(l) ? l : [l, l], S = ce(p, 1), b = S[0], m = p.join("-"), _ = t.layer || {
      name: "antd"
    };
    return function(y) {
      var R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : y, A = r(), j = A.theme, z = A.realToken, X = A.hashId, ne = A.token, G = A.cssVar, D = o(), H = D.rootPrefixCls, W = D.iconPrefixCls, Y = e(), ee = G ? "css" : "js", K = Rx(function() {
        var de = /* @__PURE__ */ new Set();
        return G && Object.keys(h.unitless || {}).forEach(function(ue) {
          de.add(ro(ue, G.prefix)), de.add(ro(ue, mc(b, G.prefix)));
        }), Ex(ee, de);
      }, [ee, b, G == null ? void 0 : G.prefix]), J = Ax(ee), oe = J.max, ie = J.min, Z = {
        theme: j,
        token: ne,
        hashId: X,
        nonce: function() {
          return Y.nonce;
        },
        clientOnly: h.clientOnly,
        layer: _,
        // antd is always at top of styles
        order: h.order || -999
      };
      typeof i == "function" && os(V(V({}, Z), {}, {
        clientOnly: !1,
        path: ["Shared", H]
      }), function() {
        return i(ne, {
          prefix: {
            rootPrefixCls: H,
            iconPrefixCls: W
          },
          csp: Y
        });
      });
      var re = os(V(V({}, Z), {}, {
        path: [m, y, W]
      }), function() {
        if (h.injectStyle === !1)
          return [];
        var de = _x(ne), ue = de.token, he = de.flush, me = yc(b, z, g), k = ".".concat(y), F = gc(b, z, me, {
          deprecatedTokens: h.deprecatedTokens
        });
        G && me && Se(me) === "object" && Object.keys(me).forEach(function(B) {
          me[B] = "var(".concat(ro(B, mc(b, G.prefix)), ")");
        });
        var O = ei(ue, {
          componentCls: k,
          prefixCls: y,
          iconCls: ".".concat(W),
          antCls: ".".concat(H),
          calc: K,
          // @ts-ignore
          max: oe,
          // @ts-ignore
          min: ie
        }, G ? me : F), I = v(O, {
          hashId: X,
          prefixCls: y,
          rootPrefixCls: H,
          iconPrefixCls: W
        });
        he(b, F);
        var w = typeof s == "function" ? s(O, y, R, h.resetFont) : null;
        return [h.resetStyle === !1 ? null : w, I];
      });
      return [re, X];
    };
  }
  function d(l, v, g) {
    var h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, p = f(l, v, g, V({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, h)), S = function(m) {
      var _ = m.prefixCls, y = m.rootCls, R = y === void 0 ? _ : y;
      return p(_, R), null;
    };
    return process.env.NODE_ENV !== "production" && (S.displayName = "SubStyle_".concat(String(Array.isArray(l) ? l.join(".") : l))), S;
  }
  return {
    genStyleHooks: c,
    genSubStyleComponent: d,
    genComponentStyleHook: f
  };
}
const Ix = "5.24.6";
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
var Nx = function(t, n) {
  var e = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && n.indexOf(r) < 0 && (e[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(t); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (e[r[o]] = t[r[o]]);
  return e;
};
function Vu(t) {
  const {
    override: n
  } = t, e = Nx(t, ["override"]), r = Object.assign({}, n);
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
}, jx = {
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
}, Lx = {
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
  } = Fe.useContext(Mu), i = `${Ix}-${n || ""}`, s = e || Lu, [a, c, u] = pp(s, [vr, t], {
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
      ignore: jx,
      preserve: Lx
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
}, Mx = () => ({
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
}), Dx = (t) => ({
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
}), Bx = (t, n, e, r) => {
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
  [`.${t}`]: Object.assign(Object.assign({}, Mx()), {
    [`.${t} .${t}-icon`]: {
      display: "block"
    }
  })
}), {
  genStyleHooks: la
} = Px({
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
    const r = Dx(t);
    return [r, {
      "&": r
    }, Wu((e = n == null ? void 0 : n.prefix.iconPrefixCls) !== null && e !== void 0 ? e : aa)];
  },
  getCommonStyle: Bx,
  getCompUnitless: () => Hu
}), Fx = (t, n) => {
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
}, zx = Object.assign({}, E), {
  useId: wc
} = zx, Vx = () => "", Hx = typeof wc > "u" ? Vx : wc;
function Ux(t, n, e) {
  var r, o;
  const i = Gn("ConfigProvider"), s = t || {}, a = s.inherit === !1 || !n ? Object.assign(Object.assign({}, vs), {
    hashed: (r = n == null ? void 0 : n.hashed) !== null && r !== void 0 ? r : vs.hashed,
    cssVar: n == null ? void 0 : n.cssVar
  }) : n, c = Hx();
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
var qx = ["children"], Xu = /* @__PURE__ */ E.createContext({});
function Wx(t) {
  var n = t.children, e = mr(t, qx);
  return /* @__PURE__ */ E.createElement(Xu.Provider, {
    value: e
  }, n);
}
var Xx = /* @__PURE__ */ function(t) {
  Cr(e, t);
  var n = Yo(e);
  function e() {
    return At(this, e), n.apply(this, arguments);
  }
  return Tt(e, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), e;
}(E.Component);
function Yx(t) {
  var n = E.useReducer(function(a) {
    return a + 1;
  }, 0), e = ce(n, 2), r = e[1], o = E.useRef(t), i = Ss(function() {
    return o.current;
  }), s = Ss(function(a) {
    o.current = typeof a == "function" ? a(o.current) : a, r();
  });
  return [i, s];
}
var $t = "none", Hr = "appear", Ur = "enter", qr = "leave", Ec = "none", bt = "prepare", Rn = "start", kn = "active", ua = "end", Yu = "prepared";
function Cc(t, n) {
  var e = {};
  return e[t.toLowerCase()] = n.toLowerCase(), e["Webkit".concat(t)] = "webkit".concat(n), e["Moz".concat(t)] = "moz".concat(n), e["ms".concat(t)] = "MS".concat(n), e["O".concat(t)] = "o".concat(n.toLowerCase()), e;
}
function $x(t, n) {
  var e = {
    animationend: Cc("Animation", "AnimationEnd"),
    transitionend: Cc("Transition", "TransitionEnd")
  };
  return t && ("AnimationEvent" in n || delete e.animationend.animation, "TransitionEvent" in n || delete e.transitionend.transition), e;
}
var Gx = $x(qt(), typeof window < "u" ? window : {}), $u = {};
if (qt()) {
  var Kx = document.createElement("div");
  $u = Kx.style;
}
var Wr = {};
function Gu(t) {
  if (Wr[t])
    return Wr[t];
  var n = Gx[t];
  if (n)
    for (var e = Object.keys(n), r = e.length, o = 0; o < r; o += 1) {
      var i = e[o];
      if (Object.prototype.hasOwnProperty.call(n, i) && i in $u)
        return Wr[t] = n[i], Wr[t];
    }
  return "";
}
var Ku = Gu("animationend"), Zu = Gu("transitionend"), Ju = !!(Ku && Zu), _c = Ku || "animationend", Ac = Zu || "transitionend";
function Tc(t, n) {
  if (!t) return null;
  if (Se(t) === "object") {
    var e = n.replace(/-\w/g, function(r) {
      return r[1].toUpperCase();
    });
    return t[e];
  }
  return "".concat(t, "-").concat(n);
}
const Zx = function(t) {
  var n = qe();
  function e(o) {
    o && (o.removeEventListener(Ac, t), o.removeEventListener(_c, t));
  }
  function r(o) {
    n.current && n.current !== o && e(n.current), o && o !== n.current && (o.addEventListener(Ac, t), o.addEventListener(_c, t), n.current = o);
  }
  return E.useEffect(function() {
    return function() {
      e(n.current);
    };
  }, []), [r, e];
};
var Qu = qt() ? r0 : nt;
const Jx = function() {
  var t = E.useRef(null);
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
  return E.useEffect(function() {
    return function() {
      n();
    };
  }, []), [e, n];
};
var Qx = [bt, Rn, kn, ua], e1 = [bt, Yu], ef = !1, t1 = !0;
function tf(t) {
  return t === kn || t === ua;
}
const n1 = function(t, n, e) {
  var r = ws(Ec), o = ce(r, 2), i = o[0], s = o[1], a = Jx(), c = ce(a, 2), u = c[0], f = c[1];
  function d() {
    s(bt, !0);
  }
  var l = n ? e1 : Qx;
  return Qu(function() {
    if (i !== Ec && i !== ua) {
      var v = l.indexOf(i), g = l[v + 1], h = e(i);
      h === ef ? s(g, !0) : g && u(function(p) {
        function S() {
          p.isCanceled() || s(g, !0);
        }
        h === !0 ? S() : Promise.resolve(h).then(S);
      });
    }
  }, [t, i]), E.useEffect(function() {
    return function() {
      f();
    };
  }, []), [d, i];
};
function r1(t, n, e, r) {
  var o = r.motionEnter, i = o === void 0 ? !0 : o, s = r.motionAppear, a = s === void 0 ? !0 : s, c = r.motionLeave, u = c === void 0 ? !0 : c, f = r.motionDeadline, d = r.motionLeaveImmediately, l = r.onAppearPrepare, v = r.onEnterPrepare, g = r.onLeavePrepare, h = r.onAppearStart, p = r.onEnterStart, S = r.onLeaveStart, b = r.onAppearActive, m = r.onEnterActive, _ = r.onLeaveActive, y = r.onAppearEnd, R = r.onEnterEnd, A = r.onLeaveEnd, j = r.onVisibleChanged, z = ws(), X = ce(z, 2), ne = X[0], G = X[1], D = Yx($t), H = ce(D, 2), W = H[0], Y = H[1], ee = ws(null), K = ce(ee, 2), J = K[0], oe = K[1], ie = W(), Z = qe(!1), re = qe(null);
  function de() {
    return e();
  }
  var ue = qe(!1);
  function he() {
    Y($t), oe(null, !0);
  }
  var me = Ss(function(Ne) {
    var Ee = W();
    if (Ee !== $t) {
      var Ye = de();
      if (!(Ne && !Ne.deadline && Ne.target !== Ye)) {
        var vt = ue.current, ut;
        Ee === Hr && vt ? ut = y == null ? void 0 : y(Ye, Ne) : Ee === Ur && vt ? ut = R == null ? void 0 : R(Ye, Ne) : Ee === qr && vt && (ut = A == null ? void 0 : A(Ye, Ne)), vt && ut !== !1 && he();
      }
    }
  }), k = Zx(me), F = ce(k, 1), O = F[0], I = function(Ee) {
    switch (Ee) {
      case Hr:
        return q(q(q({}, bt, l), Rn, h), kn, b);
      case Ur:
        return q(q(q({}, bt, v), Rn, p), kn, m);
      case qr:
        return q(q(q({}, bt, g), Rn, S), kn, _);
      default:
        return {};
    }
  }, w = E.useMemo(function() {
    return I(ie);
  }, [ie]), B = n1(ie, !t, function(Ne) {
    if (Ne === bt) {
      var Ee = w[bt];
      return Ee ? Ee(de()) : ef;
    }
    if (Te in w) {
      var Ye;
      oe(((Ye = w[Te]) === null || Ye === void 0 ? void 0 : Ye.call(w, de(), null)) || null);
    }
    return Te === kn && ie !== $t && (O(de()), f > 0 && (clearTimeout(re.current), re.current = setTimeout(function() {
      me({
        deadline: !0
      });
    }, f))), Te === Yu && he(), t1;
  }), L = ce(B, 2), Ae = L[0], Te = L[1], lt = tf(Te);
  ue.current = lt;
  var Rt = qe(null);
  Qu(function() {
    if (!(Z.current && Rt.current === n)) {
      G(n);
      var Ne = Z.current;
      Z.current = !0;
      var Ee;
      !Ne && n && a && (Ee = Hr), Ne && n && i && (Ee = Ur), (Ne && !n && u || !Ne && d && !n && u) && (Ee = qr);
      var Ye = I(Ee);
      Ee && (t || Ye[bt]) ? (Y(Ee), Ae()) : Y($t), Rt.current = n;
    }
  }, [n]), nt(function() {
    // Cancel appear
    (ie === Hr && !a || // Cancel enter
    ie === Ur && !i || // Cancel leave
    ie === qr && !u) && Y($t);
  }, [a, i, u]), nt(function() {
    return function() {
      Z.current = !1, clearTimeout(re.current);
    };
  }, []);
  var st = E.useRef(!1);
  nt(function() {
    ne && (st.current = !0), ne !== void 0 && ie === $t && ((st.current || ne) && (j == null || j(ne)), st.current = !0);
  }, [ne, ie]);
  var kt = J;
  return w[bt] && Te === Rn && (kt = V({
    transition: "none"
  }, kt)), [ie, Te, kt, ne ?? n];
}
function o1(t) {
  var n = t;
  Se(t) === "object" && (n = t.transitionSupport);
  function e(o, i) {
    return !!(o.motionName && n && i !== !1);
  }
  var r = /* @__PURE__ */ E.forwardRef(function(o, i) {
    var s = o.visible, a = s === void 0 ? !0 : s, c = o.removeOnLeave, u = c === void 0 ? !0 : c, f = o.forceRender, d = o.children, l = o.motionName, v = o.leavedClassName, g = o.eventProps, h = E.useContext(Xu), p = h.motion, S = e(o, p), b = qe(), m = qe();
    function _() {
      try {
        return b.current instanceof HTMLElement ? b.current : Ch(m.current);
      } catch {
        return null;
      }
    }
    var y = r1(S, a, _, o), R = ce(y, 4), A = R[0], j = R[1], z = R[2], X = R[3], ne = E.useRef(X);
    X && (ne.current = !0);
    var G = E.useCallback(function(K) {
      b.current = K, $l(i, K);
    }, [i]), D, H = V(V({}, g), {}, {
      visible: a
    });
    if (!d)
      D = null;
    else if (A === $t)
      X ? D = d(V({}, H), G) : !u && ne.current && v ? D = d(V(V({}, H), {}, {
        className: v
      }), G) : f || !u && !v ? D = d(V(V({}, H), {}, {
        style: {
          display: "none"
        }
      }), G) : D = null;
    else {
      var W;
      j === bt ? W = "prepare" : tf(j) ? W = "active" : j === Rn && (W = "start");
      var Y = Tc(l, "".concat(A, "-").concat(W));
      D = d(V(V({}, H), {}, {
        className: Ze(Tc(l, A), q(q({}, Y, Y && W), l, typeof l == "string")),
        style: z
      }), G);
    }
    if (/* @__PURE__ */ E.isValidElement(D) && kh(D)) {
      var ee = Ph(D);
      ee || (D = /* @__PURE__ */ E.cloneElement(D, {
        ref: G
      }));
    }
    return /* @__PURE__ */ E.createElement(Xx, {
      ref: m
    }, D);
  });
  return r.displayName = "CSSMotion", r;
}
const nf = o1(Ju);
var Cs = "add", _s = "keep", As = "remove", Ri = "removed";
function i1(t) {
  var n;
  return t && Se(t) === "object" && "key" in t ? n = t : n = {
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
            status: Cs
          });
        })), r = d), e.push(V(V({}, l), {}, {
          status: _s
        })), r += 1, f = !0;
        break;
      }
    }
    f || e.push(V(V({}, u), {}, {
      status: As
    }));
  }), r < o && (e = e.concat(s.slice(r).map(function(u) {
    return V(V({}, u), {}, {
      status: Cs
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
      f.key === u && (f.status = _s);
    });
  }), e;
}
var a1 = ["component", "children", "onVisibleChanged", "onAllRemoved"], c1 = ["status"], l1 = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function u1(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : nf, e = /* @__PURE__ */ function(r) {
    Cr(i, r);
    var o = Yo(i);
    function i() {
      var s;
      At(this, i);
      for (var a = arguments.length, c = new Array(a), u = 0; u < a; u++)
        c[u] = arguments[u];
      return s = o.call.apply(o, [this].concat(c)), q(vn(s), "state", {
        keyEntities: []
      }), q(vn(s), "removeKey", function(f) {
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
    return Tt(i, [{
      key: "render",
      value: function() {
        var a = this, c = this.state.keyEntities, u = this.props, f = u.component, d = u.children, l = u.onVisibleChanged;
        u.onAllRemoved;
        var v = mr(u, a1), g = f || E.Fragment, h = {};
        return l1.forEach(function(p) {
          h[p] = v[p], delete v[p];
        }), delete v.keys, /* @__PURE__ */ E.createElement(g, v, c.map(function(p, S) {
          var b = p.status, m = mr(p, c1), _ = b === Cs || b === _s;
          return /* @__PURE__ */ E.createElement(n, Bt({}, h, {
            key: m.key,
            visible: _,
            eventProps: m,
            onVisibleChanged: function(R) {
              l == null || l(R, {
                key: m.key
              }), R || a.removeKey(m.key);
            }
          }), function(y, R) {
            return d(V(V({}, y), {}, {
              index: S
            }), R);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(a, c) {
        var u = a.keys, f = c.keyEntities, d = Ts(u), l = s1(f, d);
        return {
          keyEntities: l.filter(function(v) {
            var g = f.find(function(h) {
              var p = h.key;
              return v.key === p;
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
  return o.current = o.current || r === !1, o.current ? /* @__PURE__ */ E.createElement(Wx, {
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
const p1 = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let of;
function x1() {
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
  n !== void 0 && (of = n), r && m1(r) && (process.env.NODE_ENV !== "production" && Jo(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), mx(x1(), r));
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
    popupOverflow: h,
    legacyLocale: p,
    parentContext: S,
    iconPrefixCls: b,
    theme: m,
    componentDisabled: _,
    segmented: y,
    statistic: R,
    spin: A,
    calendar: j,
    carousel: z,
    cascader: X,
    collapse: ne,
    typography: G,
    checkbox: D,
    descriptions: H,
    divider: W,
    drawer: Y,
    skeleton: ee,
    steps: K,
    image: J,
    layout: oe,
    list: ie,
    mentions: Z,
    modal: re,
    progress: de,
    result: ue,
    slider: he,
    breadcrumb: me,
    menu: k,
    pagination: F,
    input: O,
    textArea: I,
    empty: w,
    badge: B,
    radio: L,
    rate: Ae,
    switch: Te,
    transfer: lt,
    avatar: Rt,
    message: st,
    tag: kt,
    table: Ne,
    card: Ee,
    tabs: Ye,
    timeline: vt,
    timePicker: ut,
    upload: rn,
    notification: on,
    tree: Cn,
    colorPicker: sn,
    datePicker: N,
    rangePicker: C,
    flex: je,
    wave: pe,
    dropdown: Ce,
    warning: Q,
    tour: at,
    tooltip: ft,
    popover: Le,
    popconfirm: Me,
    floatButtonGroup: Je,
    variant: an,
    inputNumber: cn,
    treeSelect: Ge
  } = t, Qe = E.useCallback((Re, x) => {
    const {
      prefixCls: P
    } = t;
    if (x)
      return x;
    const M = P || S.getPrefixCls("");
    return Re ? `${M}-${Re}` : M;
  }, [S.getPrefixCls, t.prefixCls]), dt = b || S.iconPrefixCls || aa, ht = e || S.csp;
  Fx(dt, ht);
  const Pt = Ux(m, S.theme, {
    prefixCls: Qe("")
  });
  process.env.NODE_ENV !== "production" && (Os = Os || !!Pt);
  const _n = {
    csp: ht,
    autoInsertSpaceInButton: r,
    alert: o,
    anchor: i,
    locale: a || p,
    direction: u,
    space: f,
    splitter: d,
    virtual: l,
    popupMatchSelectWidth: g ?? v,
    popupOverflow: h,
    getPrefixCls: Qe,
    iconPrefixCls: dt,
    theme: Pt,
    segmented: y,
    statistic: R,
    spin: A,
    calendar: j,
    carousel: z,
    cascader: X,
    collapse: ne,
    typography: G,
    checkbox: D,
    descriptions: H,
    divider: W,
    drawer: Y,
    skeleton: ee,
    steps: K,
    image: J,
    input: O,
    textArea: I,
    layout: oe,
    list: ie,
    mentions: Z,
    modal: re,
    progress: de,
    result: ue,
    slider: he,
    breadcrumb: me,
    menu: k,
    pagination: F,
    empty: w,
    badge: B,
    radio: L,
    rate: Ae,
    switch: Te,
    transfer: lt,
    avatar: Rt,
    message: st,
    tag: kt,
    table: Ne,
    card: Ee,
    tabs: Ye,
    timeline: vt,
    timePicker: ut,
    upload: rn,
    notification: on,
    tree: Cn,
    colorPicker: sn,
    datePicker: N,
    rangePicker: C,
    flex: je,
    wave: pe,
    dropdown: Ce,
    warning: Q,
    tour: at,
    tooltip: ft,
    popover: Le,
    popconfirm: Me,
    floatButtonGroup: Je,
    variant: an,
    inputNumber: cn,
    treeSelect: Ge
  };
  process.env.NODE_ENV !== "production" && Gn("ConfigProvider")(!("autoInsertSpaceInButton" in t), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const Wt = Object.assign({}, S);
  Object.keys(_n).forEach((Re) => {
    _n[Re] !== void 0 && (Wt[Re] = _n[Re]);
  }), p1.forEach((Re) => {
    const x = t[Re];
    x && (Wt[Re] = x);
  }), typeof r < "u" && (Wt.button = Object.assign({
    autoInsertSpace: r
  }, Wt.button));
  const Xt = Yl(() => Wt, Wt, (Re, x) => {
    const P = Object.keys(Re), M = Object.keys(x);
    return P.length !== M.length || P.some(($) => Re[$] !== x[$]);
  }), {
    layer: er
  } = E.useContext(_r), Or = E.useMemo(() => ({
    prefixCls: dt,
    csp: ht,
    layer: er ? "antd" : void 0
  }), [dt, ht, er]);
  let Ue = /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement(d1, {
    dropdownMatchSelectWidth: v
  }), n);
  const Rr = E.useMemo(() => {
    var Re, x, P, M;
    return $p(((Re = Qo.Form) === null || Re === void 0 ? void 0 : Re.defaultValidateMessages) || {}, ((P = (x = Xt.locale) === null || x === void 0 ? void 0 : x.Form) === null || P === void 0 ? void 0 : P.defaultValidateMessages) || {}, ((M = Xt.form) === null || M === void 0 ? void 0 : M.validateMessages) || {}, (s == null ? void 0 : s.validateMessages) || {});
  }, [Xt, s == null ? void 0 : s.validateMessages]);
  Object.keys(Rr).length > 0 && (Ue = /* @__PURE__ */ E.createElement(Kp.Provider, {
    value: Rr
  }, Ue)), a && (Ue = /* @__PURE__ */ E.createElement(Pu, {
    locale: a,
    _ANT_MARK__: ku
  }, Ue)), Ue = /* @__PURE__ */ E.createElement(ia.Provider, {
    value: Or
  }, Ue), c && (Ue = /* @__PURE__ */ E.createElement(vx, {
    size: c
  }, Ue)), Ue = /* @__PURE__ */ E.createElement(f1, null, Ue);
  const li = E.useMemo(() => {
    const Re = Pt || {}, {
      algorithm: x,
      token: P,
      components: M,
      cssVar: $
    } = Re, xe = h1(Re, ["algorithm", "token", "components", "cssVar"]), ge = x && (!Array.isArray(x) || x.length > 0) ? Qi(x) : Lu, le = {};
    Object.entries(M || {}).forEach(($e) => {
      let [Oe, ke] = $e;
      const Pe = Object.assign({}, ke);
      "algorithm" in Pe && (Pe.algorithm === !0 ? Pe.theme = ge : (Array.isArray(Pe.algorithm) || typeof Pe.algorithm == "function") && (Pe.theme = Qi(Pe.algorithm)), delete Pe.algorithm), le[Oe] = Pe;
    });
    const ae = Object.assign(Object.assign({}, vr), P);
    return Object.assign(Object.assign({}, xe), {
      theme: ge,
      token: ae,
      components: le,
      override: Object.assign({
        override: ae
      }, le),
      cssVar: $
    });
  }, [Pt]);
  return m && (Ue = /* @__PURE__ */ E.createElement(Mu.Provider, {
    value: li
  }, Ue)), Xt.warning && (Ue = /* @__PURE__ */ E.createElement(Ou.Provider, {
    value: Xt.warning
  }, Ue)), _ !== void 0 && (Ue = /* @__PURE__ */ E.createElement(gx, {
    disabled: _
  }, Ue)), /* @__PURE__ */ E.createElement(en.Provider, {
    value: Xt
  }, Ue);
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
Kn.useConfig = yx;
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
  return Se(t) === "object" && typeof t.name == "string" && typeof t.theme == "string" && (Se(t.icon) === "object" || typeof t.icon == "function");
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
var C1 = `
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
`, _1 = function(n) {
  var e = Qt(ia), r = e.csp, o = e.prefixCls, i = e.layer, s = C1;
  o && (s = s.replace(/anticon/g, o)), i && (s = "@layer ".concat(i, ` {
`).concat(s, `
}`)), nt(function() {
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
  var e = n.icon, r = n.className, o = n.onClick, i = n.style, s = n.primaryColor, a = n.secondaryColor, c = mr(n, A1), u = E.useRef(), f = hr;
  if (s && (f = {
    primaryColor: s,
    secondaryColor: a || af(s)
  }), _1(u), E1(Oc(e), "icon should be icon definiton, but got ".concat(e)), !Oc(e))
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
var nn = /* @__PURE__ */ E.forwardRef(function(t, n) {
  var e = t.className, r = t.icon, o = t.spin, i = t.rotate, s = t.tabIndex, a = t.onClick, c = t.twoToneColor, u = mr(t, k1), f = E.useContext(ia), d = f.prefixCls, l = d === void 0 ? "anticon" : d, v = f.rootClassName, g = Ze(v, l, q(q({}, "".concat(l, "-").concat(r.name), !!r.name), "".concat(l, "-spin"), !!o || r.name === "loading"), e), h = s;
  h === void 0 && a && (h = -1);
  var p = i ? {
    msTransform: "rotate(".concat(i, "deg)"),
    transform: "rotate(".concat(i, "deg)")
  } : void 0, S = cf(c), b = ce(S, 2), m = b[0], _ = b[1];
  return /* @__PURE__ */ E.createElement("span", Bt({
    role: "img",
    "aria-label": r.name
  }, u, {
    ref: n,
    tabIndex: h,
    onClick: a,
    className: g
  }), /* @__PURE__ */ E.createElement(Zn, {
    icon: r,
    primaryColor: m,
    secondaryColor: _,
    style: p
  }));
});
nn.displayName = "AntdIcon";
nn.getTwoToneColor = R1;
nn.setTwoToneColor = lf;
var P1 = function(n, e) {
  return /* @__PURE__ */ E.createElement(nn, Bt({}, n, {
    ref: e,
    icon: y1
  }));
}, uf = /* @__PURE__ */ E.forwardRef(P1);
process.env.NODE_ENV !== "production" && (uf.displayName = "CheckCircleFilled");
var I1 = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, N1 = function(n, e) {
  return /* @__PURE__ */ E.createElement(nn, Bt({}, n, {
    ref: e,
    icon: I1
  }));
}, ff = /* @__PURE__ */ E.forwardRef(N1);
process.env.NODE_ENV !== "production" && (ff.displayName = "CloseCircleFilled");
var j1 = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, L1 = function(n, e) {
  return /* @__PURE__ */ E.createElement(nn, Bt({}, n, {
    ref: e,
    icon: j1
  }));
}, df = /* @__PURE__ */ E.forwardRef(L1);
process.env.NODE_ENV !== "production" && (df.displayName = "CloseOutlined");
var M1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" }, D1 = function(n, e) {
  return /* @__PURE__ */ E.createElement(nn, Bt({}, n, {
    ref: e,
    icon: M1
  }));
}, hf = /* @__PURE__ */ E.forwardRef(D1);
process.env.NODE_ENV !== "production" && (hf.displayName = "ExclamationCircleFilled");
var B1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" }, F1 = function(n, e) {
  return /* @__PURE__ */ E.createElement(nn, Bt({}, n, {
    ref: e,
    icon: B1
  }));
}, pf = /* @__PURE__ */ E.forwardRef(F1);
process.env.NODE_ENV !== "production" && (pf.displayName = "InfoCircleFilled");
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
const xf = (t, n, e) => /* @__PURE__ */ Fe.isValidElement(t) ? /* @__PURE__ */ Fe.cloneElement(t, typeof e == "function" ? e(t.props || {}) : e) : n;
function X1(t, n) {
  return xf(t, t, n);
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
  info: pf,
  error: ff,
  warning: hf
}, Q1 = (t) => {
  const {
    icon: n,
    prefixCls: e,
    type: r
  } = t, o = J1[r] || null;
  return n ? xf(n, /* @__PURE__ */ E.createElement("span", {
    className: `${e}-icon`
  }, n), () => ({
    className: Ze(`${e}-icon`, n.props.className)
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
    onMouseEnter: u,
    onMouseLeave: f,
    onClick: d,
    afterClose: l,
    showIcon: v,
    closable: g,
    closeText: h,
    closeIcon: p,
    action: S,
    id: b
  } = t, m = Pc(t, ["description", "prefixCls", "message", "banner", "className", "rootClassName", "style", "onMouseEnter", "onMouseLeave", "onClick", "afterClose", "showIcon", "closable", "closeText", "closeIcon", "action", "id"]), [_, y] = E.useState(!1);
  process.env.NODE_ENV !== "production" && Gn("Alert").deprecated(!h, "closeText", "closable.closeIcon");
  const R = E.useRef(null);
  E.useImperativeHandle(n, () => ({
    nativeElement: R.current
  }));
  const {
    getPrefixCls: A,
    direction: j,
    closable: z,
    closeIcon: X,
    className: ne,
    style: G
  } = Du("alert"), D = A("alert", r), [H, W, Y] = Z1(D), ee = (ue) => {
    var he;
    y(!0), (he = t.onClose) === null || he === void 0 || he.call(t, ue);
  }, K = E.useMemo(() => t.type !== void 0 ? t.type : i ? "warning" : "info", [t.type, i]), J = E.useMemo(() => typeof g == "object" && g.closeIcon || h ? !0 : typeof g == "boolean" ? g : p !== !1 && p !== null && p !== void 0 ? !0 : !!z, [h, p, g, z]), oe = i && v === void 0 ? !0 : v, ie = Ze(D, `${D}-${K}`, {
    [`${D}-with-description`]: !!e,
    [`${D}-no-icon`]: !oe,
    [`${D}-banner`]: !!i,
    [`${D}-rtl`]: j === "rtl"
  }, ne, s, a, Y, W), Z = W1(m, {
    aria: !0,
    data: !0
  }), re = E.useMemo(() => typeof g == "object" && g.closeIcon ? g.closeIcon : h || (p !== void 0 ? p : typeof z == "object" && z.closeIcon ? z.closeIcon : X), [p, g, h, X]), de = E.useMemo(() => {
    const ue = g ?? z;
    if (typeof ue == "object") {
      const {
        closeIcon: he
      } = ue;
      return Pc(ue, ["closeIcon"]);
    }
    return {};
  }, [g, z]);
  return H(/* @__PURE__ */ E.createElement(nf, {
    visible: !_,
    motionName: `${D}-motion`,
    motionAppear: !1,
    motionEnter: !1,
    onLeaveStart: (ue) => ({
      maxHeight: ue.offsetHeight
    }),
    onLeaveEnd: l
  }, (ue, he) => {
    let {
      className: me,
      style: k
    } = ue;
    return /* @__PURE__ */ E.createElement("div", Object.assign({
      id: b,
      ref: Rh(R, he),
      "data-show": !_,
      className: Ze(ie, me),
      style: Object.assign(Object.assign(Object.assign({}, G), c), k),
      onMouseEnter: u,
      onMouseLeave: f,
      onClick: d,
      role: "alert"
    }, Z), oe ? /* @__PURE__ */ E.createElement(Q1, {
      description: e,
      icon: t.icon,
      prefixCls: D,
      type: K
    }) : null, /* @__PURE__ */ E.createElement("div", {
      className: `${D}-content`
    }, o ? /* @__PURE__ */ E.createElement("div", {
      className: `${D}-message`
    }, o) : null, e ? /* @__PURE__ */ E.createElement("div", {
      className: `${D}-description`
    }, e) : null), S ? /* @__PURE__ */ E.createElement("div", {
      className: `${D}-action`
    }, S) : null, /* @__PURE__ */ E.createElement(em, {
      isClosable: J,
      prefixCls: D,
      closeIcon: re,
      handleClose: ee,
      ariaProps: de
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
    return At(this, n), e = tm(this, n, arguments), e.state = {
      error: void 0,
      info: {
        componentStack: ""
      }
    }, e;
  }
  return Cr(n, t), Tt(n, [{
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
  var r = e || {}, o = r.noTrailing, i = o === void 0 ? !1 : o, s = r.noLeading, a = s === void 0 ? !1 : s, c = r.debounceMode, u = c === void 0 ? void 0 : c, f, d = !1, l = 0;
  function v() {
    f && clearTimeout(f);
  }
  function g(p) {
    var S = p || {}, b = S.upcomingOnly, m = b === void 0 ? !1 : b;
    v(), d = !m;
  }
  function h() {
    for (var p = arguments.length, S = new Array(p), b = 0; b < p; b++)
      S[b] = arguments[b];
    var m = this, _ = Date.now() - l;
    if (d)
      return;
    function y() {
      l = Date.now(), n.apply(m, S);
    }
    function R() {
      f = void 0;
    }
    !a && u && !f && y(), v(), u === void 0 && _ > t ? a ? (l = Date.now(), i || (f = setTimeout(u ? R : y, t))) : y() : i !== !0 && (f = setTimeout(u ? R : y, u === void 0 ? t - _ : t));
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
  return Ze(Object.assign(Object.assign(Object.assign({}, sm(t, n)), am(t, n)), cm(t, n)));
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
}, pm = (t) => {
  const {
    componentCls: n
  } = t, e = {};
  return vf.forEach((r) => {
    e[`${n}-justify-${r}`] = {
      justifyContent: r
    };
  }), e;
}, xm = () => ({}), mm = la("Flex", (t) => {
  const {
    paddingXS: n,
    padding: e,
    paddingLG: r
  } = t, o = ei(t, {
    flexGapSM: n,
    flexGap: e,
    flexGapLG: r
  });
  return [um(o), fm(o), dm(o), hm(o), pm(o)];
}, xm, {
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
  } = Fe.useContext(en), h = g("flex", e), [p, S, b] = mm(h), m = u ?? (l == null ? void 0 : l.vertical), _ = Ze(o, r, l == null ? void 0 : l.className, h, S, b, lm(h, t), {
    [`${h}-rtl`]: v === "rtl",
    [`${h}-gap-${a}`]: Ic(a),
    [`${h}-vertical`]: m
  }), y = Object.assign(Object.assign({}, l == null ? void 0 : l.style), i);
  return s && (y.flex = s), a && !Ic(a) && (y.gap = a), p(/* @__PURE__ */ Fe.createElement(f, Object.assign({
    ref: n,
    className: _,
    style: y
  }, rm(d, ["justify", "wrap", "align"])), c));
});
process.env.NODE_ENV !== "production" && (bf.displayName = "Flex");
const Co = 100, Sf = Co / 5, wf = Co / 2 - Sf / 2, ki = wf * 2 * Math.PI, Nc = 50, jc = (t) => {
  const {
    dotClassName: n,
    style: e,
    hasCircleCls: r
  } = t;
  return /* @__PURE__ */ E.createElement("circle", {
    className: Ze(`${n}-circle`, {
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
  const u = {
    strokeDashoffset: `${ki / 4}`,
    strokeDasharray: `${ki * c / 100} ${ki * (100 - c) / 100}`
  };
  return /* @__PURE__ */ E.createElement("span", {
    className: Ze(o, `${r}-progress`, c <= 0 && i)
  }, /* @__PURE__ */ E.createElement("svg", {
    viewBox: `0 0 ${Co} ${Co}`,
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
    style: u
  })));
};
function ym(t) {
  const {
    prefixCls: n,
    percent: e = 0
  } = t, r = `${n}-dot`, o = `${r}-holder`, i = `${o}-hidden`;
  return /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement("span", {
    className: Ze(o, e > 0 && i)
  }, /* @__PURE__ */ E.createElement("span", {
    className: Ze(r, `${n}-dot-spin`)
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
    className: Ze(e.props.className, o),
    percent: r
  }) : /* @__PURE__ */ E.createElement(ym, {
    prefixCls: n,
    percent: r
  });
}
const Sm = new _u("antSpinMove", {
  to: {
    opacity: 1
  }
}), wm = new _u("antRotate", {
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
}, Cm = (t) => {
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
}, _m = la("Spin", (t) => {
  const n = ei(t, {
    spinDotDefault: t.colorTextDescription
  });
  return [Em(n)];
}, Cm), Am = 200, Lc = [[30, 0.05], [70, 0.03], [96, 0.01]];
function Tm(t, n) {
  const [e, r] = E.useState(0), o = E.useRef(null), i = n === "auto";
  return E.useEffect(() => (i && t && (r(0), o.current = setInterval(() => {
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
const pr = (t) => {
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
  } = t, h = Om(t, ["prefixCls", "spinning", "delay", "className", "rootClassName", "size", "tip", "wrapperClassName", "style", "children", "fullscreen", "indicator", "percent"]), {
    getPrefixCls: p,
    direction: S,
    className: b,
    style: m,
    indicator: _
  } = Du("spin"), y = p("spin", e), [R, A, j] = _m(y), [z, X] = E.useState(() => r && !Rm(r, o)), ne = Tm(z, g);
  E.useEffect(() => {
    if (r) {
      const K = im(o, () => {
        X(!0);
      });
      return K(), () => {
        var J;
        (J = K == null ? void 0 : K.cancel) === null || J === void 0 || J.call(K);
      };
    }
    X(!1);
  }, [o, r]);
  const G = E.useMemo(() => typeof d < "u" && !l, [d, l]);
  if (process.env.NODE_ENV !== "production") {
    const K = Gn("Spin");
    process.env.NODE_ENV !== "production" && K(!c || G || l, "usage", "`tip` only work in nest or fullscreen pattern.");
  }
  const D = Ze(y, b, {
    [`${y}-sm`]: a === "small",
    [`${y}-lg`]: a === "large",
    [`${y}-spinning`]: z,
    [`${y}-show-text`]: !!c,
    [`${y}-rtl`]: S === "rtl"
  }, i, !l && s, A, j), H = Ze(`${y}-container`, {
    [`${y}-blur`]: z
  }), W = (n = v ?? _) !== null && n !== void 0 ? n : Ef, Y = Object.assign(Object.assign({}, m), f), ee = /* @__PURE__ */ E.createElement("div", Object.assign({}, h, {
    style: Y,
    className: D,
    "aria-live": "polite",
    "aria-busy": z
  }), /* @__PURE__ */ E.createElement(bm, {
    prefixCls: y,
    indicator: W,
    percent: ne
  }), c && (G || l) ? /* @__PURE__ */ E.createElement("div", {
    className: `${y}-text`
  }, c) : null);
  return R(G ? /* @__PURE__ */ E.createElement("div", Object.assign({}, h, {
    className: Ze(`${y}-nested-loading`, u, A, j)
  }), z && /* @__PURE__ */ E.createElement("div", {
    key: "loading"
  }, ee), /* @__PURE__ */ E.createElement("div", {
    className: H,
    key: "container"
  }, d)) : l ? /* @__PURE__ */ E.createElement("div", {
    className: Ze(`${y}-fullscreen`, {
      [`${y}-fullscreen-show`]: z
    }, s, A, j)
  }, ee) : ee);
};
pr.setDefaultIndicator = (t) => {
  Ef = t;
};
process.env.NODE_ENV !== "production" && (pr.displayName = "Spin");
function Cf(t, n) {
  return function() {
    return t.apply(n, arguments);
  };
}
const { toString: km } = Object.prototype, { getPrototypeOf: da } = Object, { iterator: ti, toStringTag: _f } = Symbol, ni = /* @__PURE__ */ ((t) => (n) => {
  const e = km.call(n);
  return t[e] || (t[e] = e.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Ot = (t) => (t = t.toLowerCase(), (n) => ni(n) === t), ri = (t) => (n) => typeof n === t, { isArray: Jn } = Array, Sr = ri("undefined");
function Pm(t) {
  return t !== null && !Sr(t) && t.constructor !== null && !Sr(t.constructor) && ot(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const Af = Ot("ArrayBuffer");
function Im(t) {
  let n;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? n = ArrayBuffer.isView(t) : n = t && t.buffer && Af(t.buffer), n;
}
const Nm = ri("string"), ot = ri("function"), Tf = ri("number"), oi = (t) => t !== null && typeof t == "object", jm = (t) => t === !0 || t === !1, lo = (t) => {
  if (ni(t) !== "object")
    return !1;
  const n = da(t);
  return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(_f in t) && !(ti in t);
}, Lm = Ot("Date"), Mm = Ot("File"), Dm = Ot("Blob"), Bm = Ot("FileList"), Fm = (t) => oi(t) && ot(t.pipe), zm = (t) => {
  let n;
  return t && (typeof FormData == "function" && t instanceof FormData || ot(t.append) && ((n = ni(t)) === "formdata" || // detect form-data instance
  n === "object" && ot(t.toString) && t.toString() === "[object FormData]"));
}, Vm = Ot("URLSearchParams"), [Hm, Um, qm, Wm] = ["ReadableStream", "Request", "Response", "Headers"].map(Ot), Xm = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
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
const pn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Rf = (t) => !Sr(t) && t !== pn;
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
  e && ot(o) ? t[i] = Cf(o, e) : t[i] = o;
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
}, ng = Ot("HTMLFormElement"), rg = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(e, r, o) {
    return r.toUpperCase() + o;
  }
), Mc = (({ hasOwnProperty: t }) => (n, e) => t.call(n, e))(Object.prototype), og = Ot("RegExp"), kf = (t, n) => {
  const e = Object.getOwnPropertyDescriptors(t), r = {};
  Ar(e, (o, i) => {
    let s;
    (s = n(o, i, t)) !== !1 && (r[i] = s || o);
  }), Object.defineProperties(t, r);
}, ig = (t) => {
  kf(t, (n, e) => {
    if (ot(t) && ["arguments", "caller", "callee"].indexOf(e) !== -1)
      return !1;
    const r = t[e];
    if (ot(r)) {
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
  return !!(t && ot(t.append) && t[_f] === "FormData" && t[ti]);
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
}, fg = Ot("AsyncFunction"), dg = (t) => t && (oi(t) || ot(t)) && ot(t.then) && ot(t.catch), Pf = ((t, n) => t ? setImmediate : n ? ((e, r) => (pn.addEventListener("message", ({ source: o, data: i }) => {
  o === pn && i === e && r.length && r.shift()();
}, !1), (o) => {
  r.push(o), pn.postMessage(e, "*");
}))(`axios@${Math.random()}`, []) : (e) => setTimeout(e))(
  typeof setImmediate == "function",
  ot(pn.postMessage)
), hg = typeof queueMicrotask < "u" ? queueMicrotask.bind(pn) : typeof process < "u" && process.nextTick || Pf, pg = (t) => t != null && ot(t[ti]), T = {
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
  isFunction: ot,
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
  kindOfTest: Ot,
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
  global: pn,
  isContextDefined: Rf,
  isSpecCompliantForm: lg,
  toJSONObject: ug,
  isAsyncFn: fg,
  isThenable: dg,
  setImmediate: Pf,
  asap: hg,
  isIterable: pg
};
function te(t, n, e, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", n && (this.code = n), e && (this.config = e), r && (this.request = r), o && (this.response = o, this.status = o.status ? o.status : null);
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
].forEach((t) => {
  Nf[t] = { value: t };
});
Object.defineProperties(te, Nf);
Object.defineProperty(If, "isAxiosError", { value: !0 });
te.from = (t, n, e, r, o, i) => {
  const s = Object.create(If);
  return T.toFlatObject(t, s, function(c) {
    return c !== Error.prototype;
  }, (a) => a !== "isAxiosError"), te.call(s, t.message, n, e, r, o), s.cause = t, s.name = t.name, i && Object.assign(s, i), s;
};
const xg = null;
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
  }, !1, function(h, p) {
    return !T.isUndefined(p[h]);
  });
  const r = e.metaTokens, o = e.visitor || f, i = e.dots, s = e.indexes, c = (e.Blob || typeof Blob < "u" && Blob) && T.isSpecCompliantForm(n);
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
  function f(g, h, p) {
    let S = g;
    if (g && !p && typeof g == "object") {
      if (T.endsWith(h, "{}"))
        h = r ? h : h.slice(0, -2), g = JSON.stringify(g);
      else if (T.isArray(g) && mg(g) || (T.isFileList(g) || T.endsWith(h, "[]")) && (S = T.toArray(g)))
        return h = jf(h), S.forEach(function(m, _) {
          !(T.isUndefined(m) || m === null) && n.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? Dc([h], _, i) : s === null ? h : h + "[]",
            u(m)
          );
        }), !1;
    }
    return Ps(g) ? !0 : (n.append(Dc(p, h, i), u(g)), !1);
  }
  const d = [], l = Object.assign(gg, {
    defaultVisitor: f,
    convertValue: u,
    isVisitable: Ps
  });
  function v(g, h) {
    if (!T.isUndefined(g)) {
      if (d.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      d.push(g), T.forEach(g, function(S, b) {
        (!(T.isUndefined(S) || S === null) && o.call(
          n,
          S,
          T.isString(b) ? b.trim() : b,
          h,
          l
        )) === !0 && v(S, h ? h.concat(b) : [b]);
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
}, pa = typeof window < "u" && typeof document < "u", Is = typeof navigator == "object" && navigator || void 0, Eg = pa && (!Is || ["ReactNative", "NativeScript", "NS"].indexOf(Is.product) < 0), Cg = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", _g = pa && window.location.href || "http://localhost", Ag = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: pa,
  hasStandardBrowserEnv: Eg,
  hasStandardBrowserWebWorkerEnv: Cg,
  navigator: Is,
  origin: _g
}, Symbol.toStringTag, { value: "Module" })), Ke = {
  ...Ag,
  ...wg
};
function Tg(t, n) {
  return ii(t, new Ke.classes.URLSearchParams(), Object.assign({
    visitor: function(e, r, o, i) {
      return Ke.isNode && T.isBuffer(e) ? (this.append(r, e.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
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
    FormData: Ke.classes.FormData,
    Blob: Ke.classes.Blob
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
let it = class {
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
it.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
T.reduceDescriptors(it.prototype, ({ value: t }, n) => {
  let e = n[0].toUpperCase() + n.slice(1);
  return {
    get: () => t,
    set(r) {
      this[e] = r;
    }
  };
});
T.freezeMethods(it);
function Ii(t, n) {
  const e = this || Tr, r = n || e, o = it.from(r.headers);
  let i = r.data;
  return T.forEach(t, function(a) {
    i = a.call(e, i, o.normalize(), n ? n.status : void 0);
  }), o.normalize(), i;
}
function Ff(t) {
  return !!(t && t.__CANCEL__);
}
function Qn(t, n, e) {
  te.call(this, t ?? "canceled", te.ERR_CANCELED, n, e), this.name = "CanceledError";
}
T.inherits(Qn, te, {
  __CANCEL__: !0
});
function zf(t, n, e) {
  const r = e.config.validateStatus;
  !e.status || !r || r(e.status) ? t(e) : n(new te(
    "Request failed with status code " + e.status,
    [te.ERR_BAD_REQUEST, te.ERR_BAD_RESPONSE][Math.floor(e.status / 100) - 4],
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
const _o = (t, n, e = 3) => {
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
}, Hc = (t) => (...n) => T.asap(() => t(...n)), zg = Ke.hasStandardBrowserEnv ? /* @__PURE__ */ ((t, n) => (e) => (e = new URL(e, Ke.origin), t.protocol === e.protocol && t.host === e.host && (n || t.port === e.port)))(
  new URL(Ke.origin),
  Ke.navigator && /(msie|trident)/i.test(Ke.navigator.userAgent)
) : () => !0, Vg = Ke.hasStandardBrowserEnv ? (
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
const Uc = (t) => t instanceof it ? { ...t } : t;
function En(t, n) {
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
  const n = En({}, t);
  let { data: e, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: i, headers: s, auth: a } = n;
  n.headers = s = it.from(s), n.url = Mf(Vf(n.baseURL, n.url, n.allowAbsoluteUrls), t.params, t.paramsSerializer), a && s.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let c;
  if (T.isFormData(e)) {
    if (Ke.hasStandardBrowserEnv || Ke.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if ((c = s.getContentType()) !== !1) {
      const [u, ...f] = c ? c.split(";").map((d) => d.trim()).filter(Boolean) : [];
      s.setContentType([u || "multipart/form-data", ...f].join("; "));
    }
  }
  if (Ke.hasStandardBrowserEnv && (r && T.isFunction(r) && (r = r(n)), r || r !== !1 && zg(n.url))) {
    const u = o && i && Vg.read(i);
    u && s.set(o, u);
  }
  return n;
}, qg = typeof XMLHttpRequest < "u", Wg = qg && function(t) {
  return new Promise(function(e, r) {
    const o = Hf(t);
    let i = o.data;
    const s = it.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: c, onDownloadProgress: u } = o, f, d, l, v, g;
    function h() {
      v && v(), g && g(), o.cancelToken && o.cancelToken.unsubscribe(f), o.signal && o.signal.removeEventListener("abort", f);
    }
    let p = new XMLHttpRequest();
    p.open(o.method.toUpperCase(), o.url, !0), p.timeout = o.timeout;
    function S() {
      if (!p)
        return;
      const m = it.from(
        "getAllResponseHeaders" in p && p.getAllResponseHeaders()
      ), y = {
        data: !a || a === "text" || a === "json" ? p.responseText : p.response,
        status: p.status,
        statusText: p.statusText,
        headers: m,
        config: t,
        request: p
      };
      zf(function(A) {
        e(A), h();
      }, function(A) {
        r(A), h();
      }, y), p = null;
    }
    "onloadend" in p ? p.onloadend = S : p.onreadystatechange = function() {
      !p || p.readyState !== 4 || p.status === 0 && !(p.responseURL && p.responseURL.indexOf("file:") === 0) || setTimeout(S);
    }, p.onabort = function() {
      p && (r(new te("Request aborted", te.ECONNABORTED, t, p)), p = null);
    }, p.onerror = function() {
      r(new te("Network Error", te.ERR_NETWORK, t, p)), p = null;
    }, p.ontimeout = function() {
      let _ = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const y = o.transitional || Df;
      o.timeoutErrorMessage && (_ = o.timeoutErrorMessage), r(new te(
        _,
        y.clarifyTimeoutError ? te.ETIMEDOUT : te.ECONNABORTED,
        t,
        p
      )), p = null;
    }, i === void 0 && s.setContentType(null), "setRequestHeader" in p && T.forEach(s.toJSON(), function(_, y) {
      p.setRequestHeader(y, _);
    }), T.isUndefined(o.withCredentials) || (p.withCredentials = !!o.withCredentials), a && a !== "json" && (p.responseType = o.responseType), u && ([l, g] = _o(u, !0), p.addEventListener("progress", l)), c && p.upload && ([d, v] = _o(c), p.upload.addEventListener("progress", d), p.upload.addEventListener("loadend", v)), (o.cancelToken || o.signal) && (f = (m) => {
      p && (r(!m || m.type ? new Qn(null, t, p) : m), p.abort(), p = null);
    }, o.cancelToken && o.cancelToken.subscribe(f), o.signal && (o.signal.aborted ? f() : o.signal.addEventListener("abort", f)));
    const b = Dg(o.url);
    if (b && Ke.protocols.indexOf(b) === -1) {
      r(new te("Unsupported protocol " + b + ":", te.ERR_BAD_REQUEST, t));
      return;
    }
    p.send(i || null);
  });
}, Xg = (t, n) => {
  const { length: e } = t = t ? t.filter(Boolean) : [];
  if (n || e) {
    let r = new AbortController(), o;
    const i = function(u) {
      if (!o) {
        o = !0, a();
        const f = u instanceof Error ? u : this.reason;
        r.abort(f instanceof te ? f : new Qn(f instanceof Error ? f.message : f));
      }
    };
    let s = n && setTimeout(() => {
      s = null, i(new te(`timeout ${n} of ms exceeded`, te.ETIMEDOUT));
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
  const n = new Request(Ke.origin, {
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
      throw new te(`Response type '${n}' is not supported`, te.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Jg = async (t) => {
  if (t == null)
    return 0;
  if (T.isBlob(t))
    return t.size;
  if (T.isSpecCompliantForm(t))
    return (await new Request(Ke.origin, {
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
  const h = v && v.unsubscribe && (() => {
    v.unsubscribe();
  });
  let p;
  try {
    if (c && Zg && e !== "get" && e !== "head" && (p = await Qg(f, r)) !== 0) {
      let y = new Request(n, {
        method: "POST",
        body: r,
        duplex: "half"
      }), R;
      if (T.isFormData(r) && (R = y.headers.get("content-type")) && f.setContentType(R), y.body) {
        const [A, j] = Vc(
          p,
          _o(Hc(c))
        );
        r = qc(y.body, Wc, A, j);
      }
    }
    T.isString(d) || (d = d ? "include" : "omit");
    const S = "credentials" in Request.prototype;
    g = new Request(n, {
      ...l,
      signal: v,
      method: e.toUpperCase(),
      headers: f.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: S ? d : void 0
    });
    let b = await fetch(g);
    const m = Ns && (u === "stream" || u === "response");
    if (Ns && (a || m && h)) {
      const y = {};
      ["status", "statusText", "headers"].forEach((z) => {
        y[z] = b[z];
      });
      const R = T.toFiniteNumber(b.headers.get("content-length")), [A, j] = a && Vc(
        R,
        _o(Hc(a), !0)
      ) || [];
      b = new Response(
        qc(b.body, Wc, A, () => {
          j && j(), h && h();
        }),
        y
      );
    }
    u = u || "text";
    let _ = await Ao[T.findKey(Ao, u) || "text"](b, t);
    return !m && h && h(), await new Promise((y, R) => {
      zf(y, R, {
        data: _,
        headers: it.from(b.headers),
        status: b.status,
        statusText: b.statusText,
        config: t,
        request: g
      });
    });
  } catch (S) {
    throw h && h(), S && S.name === "TypeError" && /Load failed|fetch/i.test(S.message) ? Object.assign(
      new te("Network Error", te.ERR_NETWORK, t, g),
      {
        cause: S.cause || S
      }
    ) : te.from(S, S && S.code, t, g);
  }
}), js = {
  http: xg,
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
` + i.map(Xc).join(`
`) : " " + Xc(i[0]) : "as no adapter specified";
      throw new te(
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
  return Ni(t), t.headers = it.from(t.headers), t.data = Ii.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), Wf.getAdapter(t.adapter || Tr.adapter)(t).then(function(r) {
    return Ni(t), r.data = Ii.call(
      t,
      t.transformResponse,
      r
    ), r.headers = it.from(r.headers), r;
  }, function(r) {
    return Ff(r) || (Ni(t), r && r.response && (r.response.data = Ii.call(
      t,
      t.transformResponse,
      r.response
    ), r.response.headers = it.from(r.response.headers))), Promise.reject(r);
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
      throw new te(
        o(s, " has been removed" + (e ? " in " + e : "")),
        te.ERR_DEPRECATED
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
    throw new te("options must be an object", te.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(t);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o], s = n[i];
    if (s) {
      const a = t[i], c = a === void 0 || s(a, i, t);
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
}, Nt = fo.validators;
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
    r !== void 0 && fo.assertOptions(r, {
      silentJSONParsing: Nt.transitional(Nt.boolean),
      forcedJSONParsing: Nt.transitional(Nt.boolean),
      clarifyTimeoutError: Nt.transitional(Nt.boolean)
    }, !1), o != null && (T.isFunction(o) ? e.paramsSerializer = {
      serialize: o
    } : fo.assertOptions(o, {
      encode: Nt.function,
      serialize: Nt.function
    }, !0)), e.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? e.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : e.allowAbsoluteUrls = !0), fo.assertOptions(e, {
      baseUrl: Nt.spelling("baseURL"),
      withXsrfToken: Nt.spelling("withXSRFToken")
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
    ), e.headers = it.concat(s, i);
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function(h) {
      typeof h.runWhen == "function" && h.runWhen(e) === !1 || (c = c && h.synchronous, a.unshift(h.fulfilled, h.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(h) {
      u.push(h.fulfilled, h.rejected);
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
      const g = a[d++], h = a[d++];
      try {
        v = g(v);
      } catch (p) {
        h.call(this, p);
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
    n = En(this.defaults, n);
    const e = Vf(n.baseURL, n.url, n.allowAbsoluteUrls);
    return Mf(e, n.params, n.paramsSerializer);
  }
};
T.forEach(["delete", "get", "head", "options"], function(n) {
  Sn.prototype[n] = function(e, r) {
    return this.request(En(r || {}, {
      method: n,
      url: e,
      data: (r || {}).data
    }));
  };
});
T.forEach(["post", "put", "patch"], function(n) {
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
  const n = new Sn(t), e = Cf(Sn.prototype.request, n);
  return T.extend(e, Sn.prototype, n, { allOwnKeys: !0 }), T.extend(e, n, null, { allOwnKeys: !0 }), e.create = function(o) {
    return $f(En(t, o));
  }, e;
}
const Ie = $f(Tr);
Ie.Axios = Sn;
Ie.CanceledError = Qn;
Ie.CancelToken = rv;
Ie.isCancel = Ff;
Ie.VERSION = Xf;
Ie.toFormData = ii;
Ie.AxiosError = te;
Ie.Cancel = Ie.CanceledError;
Ie.all = function(n) {
  return Promise.all(n);
};
Ie.spread = ov;
Ie.isAxiosError = iv;
Ie.mergeConfig = En;
Ie.AxiosHeaders = it;
Ie.formToJSON = (t) => Bf(T.isHTMLForm(t) ? new FormData(t) : t);
Ie.getAdapter = Wf.getAdapter;
Ie.HttpStatusCode = Ls;
Ie.default = Ie;
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
} = Ie, St = To;
(function(t, n) {
  const e = To, r = t();
  for (; ; )
    try {
      if (parseInt(e(338)) / 1 + parseInt(e(323)) / 2 * (parseInt(e(329)) / 3) + -parseInt(e(322)) / 4 + parseInt(e(345)) / 5 * (-parseInt(e(319)) / 6) + parseInt(e(328)) / 7 * (parseInt(e(340)) / 8) + parseInt(e(335)) / 9 + parseInt(e(336)) / 10 * (-parseInt(e(326)) / 11) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Oo, 611421);
St(332) + St(333) + St(344) + St(339);
function To(t, n) {
  const e = Oo();
  return To = function(r, o) {
    return r = r - 315, e[r];
  }, To(t, n);
}
Ie[St(318)][St(341) + St(337)] = !0;
const sv = async (t) => {
  var e, r, o, i;
  const n = St;
  try {
    return (await Ie(t))[n(327)];
  } catch (s) {
    throw ((r = (e = s[n(342)]) == null ? void 0 : e[n(327)]) == null ? void 0 : r[n(320)]) || ((i = (o = s[n(342)]) == null ? void 0 : o[n(327)]) == null ? void 0 : i[n(315)]) || s[n(320)];
  }
}, av = {};
av[St(321) + "pe"] = St(343) + St(317);
function Oo() {
  const t = ["100KWxyjv", "tials", "1221659znoGPl", "v1/client", "24sTpxyV", "withCreden", "response", "applicatio", ":3000/api/", "5MXAjSw", "error", "params", "n/json", "defaults", "6736566HuuYGN", "message", "Content-Ty", "2238592dPfUug", "42EtvrIn", "PATCH", "GET", "77297FhbspF", "data", "230916tcYjld", "56673OrdxdB", "POST", "PUT", "http://192", ".168.11.76", "DELETE", "5820894qkXZYq"];
  return Oo = function() {
    return t;
  }, Oo();
}
function Ro() {
  const t = ["3182459vqOBMx", "ACTION_DOW", "11110690XcBGaY", "keyBoardEv", "ACTION_MOV", "mousemove", "mousedown", "touchmove", "97665vSyiHm", "wheelEvent", "47262pFsXCY", "keyup", "mouseup", "4146669fDPSPg", "ACTION_UP", "enuHide", "18XxVilI", "Event", "339XahQkk", "keydown", "touchstart", "assistiveM", "3842520fcAwuC", "fullscreen", "shortcutEv", "ent", "touchend", "moveEvent", "29832fdZkJK", "8pjqbMp"];
  return Ro = function() {
    return t;
  }, Ro();
}
const we = ko;
(function(t, n) {
  const e = ko, r = t();
  for (; ; )
    try {
      if (parseInt(e(340)) / 1 * (-parseInt(e(321)) / 2) + parseInt(e(329)) / 3 * (parseInt(e(339)) / 4) + -parseInt(e(319)) / 5 * (-parseInt(e(327)) / 6) + -parseInt(e(341)) / 7 + -parseInt(e(333)) / 8 + -parseInt(e(324)) / 9 + parseInt(e(343)) / 10 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Ro, 427681);
const un = {};
un[we(316)] = we(345) + "E", un[we(323)] = we(325), un[we(317)] = we(342) + "N", un[we(318)] = we(345) + "E", un[we(337)] = we(325), un[we(331)] = we(342) + "N";
const Mt = un, Ms = {};
Ms[we(322)] = we(325), Ms[we(330)] = we(342) + "N";
const cv = Ms, lv = we(338);
function ko(t, n) {
  const e = Ro();
  return ko = function(r, o) {
    return r = r - 316, e[r];
  }, ko(t, n);
}
const uv = we(320), fv = we(344) + we(336), Gf = we(332) + we(326), Ds = we(335) + we(336), dv = we(334) + we(328);
(function(t, n) {
  const e = xn, r = t();
  for (; ; )
    try {
      if (-parseInt(e(488)) / 1 + parseInt(e(514)) / 2 * (-parseInt(e(479)) / 3) + parseInt(e(538)) / 4 + -parseInt(e(560)) / 5 * (parseInt(e(551)) / 6) + -parseInt(e(456)) / 7 + -parseInt(e(469)) / 8 * (parseInt(e(501)) / 9) + -parseInt(e(544)) / 10 * (-parseInt(e(558)) / 11) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Po, 447251);
function xn(t, n) {
  const e = Po();
  return xn = function(r, o) {
    return r = r - 456, e[r];
  }, xn(t, n);
}
const hv = ({ isMobile: t, assistive: n, onImgEvent: e, canvasContent: r, imageRef: o }) => {
  const [i, s] = tt(!1), a = (d) => {
    const l = xn;
    if (l(563) === l(533)) {
      if (_0x3a193b[l(483) + l(520)](), !_0x172a0b[l(519)]) return;
      const v = _0x438d51[l(519)], g = _0x2a9c0d[l(516)](_0x3b7f93[l(510)]), h = v[l(537) + l(546) + "t"](), p = {};
      p[l(545)] = l(543), p[l(556)] = v[l(555) + "h"], p[l(547)] = v[l(463) + "ht"], p.x = _0x227019[l(523)] - h[l(487)], p.y = _0x51dc46[l(521)] - h[l(511)], p[l(460)] = g, _0x21a726(_0x222919, p), v[l(484)]();
    } else {
      if (d[l(483) + l(520)](), !o[l(519)])
        if (l(492) === l(497)) _0xa331ec[l(515) + l(542)](_0x2b5403, _0x4ad01c);
        else return;
      const v = o[l(519)];
      let g = Mt[d[l(474)]];
      if (n[l(562)] == !0 || n[l(470)] == !0) {
        g == Mt[l(507)] && e(Gf, {});
        return;
      }
      if (g == Mt[l(472)] && s(!0), g != Mt[l(472)] && i == !1) return;
      if (g == Mt[l(507)]) {
        if (l(536) !== l(536)) return;
        s(!1);
      }
      let h, p;
      const S = v[l(537) + l(546) + "t"]();
      if (d[l(474)][l(530)](l(518)))
        if (l(535) !== l(482)) {
          const { touches: m, changedTouches: _ } = d, y = m[0] ?? _[0];
          h = y[l(475)] - S[l(487)], p = y[l(526)] - S[l(511)];
        } else _0x5f0753(!1);
      else d[l(474)][l(530)](l(477)) && (h = d[l(523)] - S[l(487)], p = d[l(521)] - S[l(511)]);
      const b = {};
      b[l(545)] = l(495), b[l(553)] = g, b.x = h, b.y = p, b[l(556)] = S[l(556)], b[l(547)] = S[l(547)], e(lv, b), v[l(484)]();
    }
  }, c = (d) => {
    const l = xn;
    if (l(531) === l(504))
      return [l(540), l(485), l(513)][l(530)](_0x18da9f);
    {
      if (d[l(483) + l(520)](), !o[l(519)])
        if (l(461) !== l(461)) _0x20c462[l(464) + l(549)](l(529), _0x42a311, _0x357d73), _0x407e03[l(464) + l(549)](l(506), _0xd48161, _0x528ee2), _0x55f6c4[l(464) + l(549)](l(508), _0x2c95a9);
        else return;
      const v = o[l(519)], g = Math[l(516)](d[l(510)]), h = v[l(537) + l(546) + "t"](), p = {};
      p[l(545)] = l(543), p[l(556)] = v[l(555) + "h"], p[l(547)] = v[l(463) + "ht"], p.x = d[l(523)] - h[l(487)], p.y = d[l(521)] - h[l(511)], p[l(460)] = g, e(uv, p), v[l(484)]();
    }
  }, u = async (d) => {
    const l = xn;
    if (d[l(483) + l(520)](), !o[l(519)]) {
      if (l(473) !== l(490)) return;
      _0xa9b6e6[l(557)] = _0x2069e3[l(557)][l(458) + "e"]();
    }
    const v = o[l(519)], g = cv[d[l(474)]], h = d[l(557)][l(527) + "e"]();
    if (((m) => {
      const _ = l;
      if (_(459) === _(491)) _0x4d8c8c[_(522)] = _(509) + _(505), _0x3c03b8[_(557)] = 21;
      else
        return [_(540), _(485), _(513)][_(530)](m);
    })(h) == !0) return;
    const S = async () => {
      const m = l, _ = {};
      _[m(545)] = m(559), _[m(553)] = g, _[m(522)] = m(548) + m(502), _[m(557)] = d[m(557)], _[m(499)] = 0, _[m(532)] = 0;
      const y = _;
      return d[m(517)] == !0 ? h == "c" ? y[m(522)] = m(528) : h == "a" ? (y[m(522)] = m(509) + m(505), y[m(532)] = 4096, y[m(557)] = 29) : h == "v" && (y[m(522)] = m(498), y[m(557)] = await navigator[m(476)][m(561)]()) : h == m(550) ? (y[m(522)] = m(509) + m(505), y[m(557)] = 19) : h == m(486) ? (y[m(522)] = m(509) + m(505), y[m(557)] = 20) : h == m(466) ? (y[m(522)] = m(509) + m(505), y[m(557)] = 21) : h == m(524) ? (y[m(522)] = m(509) + m(505), y[m(557)] = 22) : h == m(478) ? m(525) === m(493) ? _0x3add71[m(515) + m(542)](_0x550eb1, _0x3ae440) : (y[m(522)] = m(509) + m(505), y[m(557)] = 67) : h == m(494) ? m(539) === m(471) ? (_0x1fe62d[m(522)] = m(509) + m(505), _0x22fe2f[m(557)] = 67) : (y[m(522)] = m(509) + m(505), y[m(557)] = 66) : h == m(503) && (y[m(522)] = m(509) + m(505), y[m(557)] = 61), y[m(474)] == m(548) + m(502) && (m(468) === m(457) ? (_0x5afe19 = _0x212140[m(523)] - _0x426b83[m(487)], _0x21c1e0 = _0x1c0064[m(521)] - _0x537915[m(511)]) : d[m(512)] == !0 && (y[m(557)] = y[m(557)][m(458) + "e"]())), y;
    }, b = await S();
    b && e(fv, b), v[l(484)]();
  };
  nt(() => {
    const d = xn, l = o[d(519)];
    if (l) {
      const v = {};
      v[d(480)] = !1;
      const g = v;
      return t ? (l[d(464) + d(549)](d(529), a, g), l[d(464) + d(549)](d(506), a, g), l[d(464) + d(549)](d(508), a)) : (l[d(464) + d(549)](d(467), c, g), l[d(464) + d(549)](d(552), u), [d(541), d(472), d(507)][d(500)]((h) => {
        const p = d;
        if (p(489) === p(489)) l[p(464) + p(549)](h, a);
        else return;
      })), () => {
        const h = d;
        if (h(554) !== h(554)) {
          _0x590ab3 == _0x10e41f[h(507)] && _0x493a12(_0x3ca89e, {});
          return;
        } else l && (h(496) !== h(496) ? (_0x32ae0[h(522)] = h(509) + h(505), _0x22540b[h(557)] = 61) : t ? h(534) === h(462) ? _0x5cfff2(!0) : [h(529), h(506), h(508)][h(500)]((p) => {
          const S = h;
          if (S(481) !== S(465)) l[S(515) + S(542)](p, a);
          else return;
        }) : ([h(541), h(472), h(507), h(467), h(552)][h(500)]((p) => {
          const S = h;
          l[S(515) + S(542)](p, a);
        }), l[h(515) + h(542)](h(552), u)));
      };
    }
  }, [t, a, c, u]);
  const f = { ref: o, ...r };
  return U.jsx(gd, f);
};
function Po() {
  const t = ["1021876aCZnhb", "KdsqJ", "control", "mousemove", "tListener", "wheelEvent", "10iXgLrq", "action", "gClientRec", "height", "KEYBOARD_T", "stener", "arrowup", "534WVSLVy", "keydown", "keyAction", "RxQox", "offsetWidt", "width", "key", "18679331CObsgr", "keyEvent", "15940qaClye", "readText", "isDown", "SRWtH", "718655UAzWVU", "ejkMr", "toUpperCas", "llYbB", "delta", "WpziV", "WwVSy", "offsetHeig", "addEventLi", "yEuQd", "arrowleft", "wheel", "NVNrc", "16sdARqi", "showMenu", "JWaLj", "mousedown", "NvuTm", "type", "pageX", "clipboard", "mouse", "backspace", "438zrPTGY", "passive", "aVFso", "gkheG", "preventDef", "focus", "shift", "arrowdown", "left", "205300ZpVWls", "DkUkX", "ZWfco", "vzKyD", "LOVfe", "NHVwJ", "enter", "touchEvent", "ogkyM", "rwOxP", "PASTE_TEXT", "repeat", "forEach", "3207915CVDCRM", "EXT", "tab", "lsiEb", "ODE", "touchmove", "mouseup", "touchend", "KEYBOARD_C", "deltaY", "top", "shiftKey", "capslock", "2764KtmNKR", "removeEven", "sign", "ctrlKey", "touch", "current", "ault", "clientY", "typeKey", "clientX", "arrowright", "KBrJe", "pageY", "toLowerCas", "COPY_TEXT", "touchstart", "includes", "juleL", "meta_state", "ABsWj", "MwAWi", "MlFSI", "ciItC", "getBoundin"];
  return Po = function() {
    return t;
  }, Po();
}
const pv = "data:image/png;base64,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", ci = Io;
function Io(t, n) {
  const e = No();
  return Io = function(r, o) {
    return r = r - 469, e[r];
  }, Io(t, n);
}
(function(t, n) {
  const e = Io, r = t();
  for (; ; )
    try {
      if (-parseInt(e(479)) / 1 * (parseInt(e(476)) / 2) + -parseInt(e(475)) / 3 + parseInt(e(472)) / 4 + -parseInt(e(474)) / 5 + parseInt(e(478)) / 6 * (-parseInt(e(470)) / 7) + parseInt(e(469)) / 8 + parseInt(e(473)) / 9 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(No, 928044);
const xv = _t[ci(477)]`
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
`, Ft = _t[ci(477)]`
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
`, mv = _t[ci(471)]`
  position: absolute;
  backdrop-filter: blur(46px);
  border-radius: 50%;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.723);
  top: 50%;
  right: 5%;
`;
function No() {
  const t = ["5314924jLoBKT", "29453868pKjDIR", "7056025fllBCj", "2423964iGwOio", "182570FYhQkU", "div", "355206uNLHEW", "5zGCqid", "69568cvVEdt", "119IJHsbK", "img"];
  return No = function() {
    return t;
  }, No();
}
const gv = _t[ci(477)]`
  user-select: none;
  transition: opacity 0.6s ease;
  z-index: 3;
  opacity: 0.3;
`;
(function(t, n) {
  const e = Un, r = t();
  for (; ; )
    try {
      if (parseInt(e(159)) / 1 * (parseInt(e(158)) / 2) + parseInt(e(177)) / 3 + -parseInt(e(188)) / 4 + -parseInt(e(178)) / 5 + -parseInt(e(161)) / 6 + parseInt(e(154)) / 7 + parseInt(e(156)) / 8 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(jo, 270860);
function jo() {
  const t = ["webkitFull", "#screen_", "mozCancelF", "dIJto", "estFullscr", "1451646NKfhfk", "ullscreen", "1564896PQhaIb", "FullScreen", "42AkJUTs", "11273itiNpd", "fullscreen", "910884oUPNGP", "msFullscre", "ent", "enElement", "ZwkEC", "lscreen", "screenElem", "WIvRi", "ullScreen", "msRequestF", "mozRequest", "reen", "screen", "DtsbE", "webkitExit", "Element", "972195flDGqw", "1902075OUCPWk", "hFAnk", "webkitRequ", "tor", "exitFullsc", "Fullscreen", "mozFullScr", "requestFul", "querySelec", "eOzdx", "642796hHhofE", "msExitFull", "XqfAX", "eenElement", "een", "tjhbG"];
  return jo = function() {
    return t;
  }, jo();
}
const Gc = () => {
  const t = Un;
  return document[t(160) + t(176)] || document[t(184) + t(191)] || document[t(194) + t(167) + t(163)] || document[t(162) + t(164)];
};
function Un(t, n) {
  const e = jo();
  return Un = function(r, o) {
    return r = r - 154, e[r];
  }, Un(t, n);
}
const vv = (t) => {
  const n = Un, e = document[n(186) + n(181)](n(195) + t);
  e[n(185) + n(166)] ? e[n(185) + n(166)]() : e[n(171) + n(157)] ? n(179) === n(197) ? _0x4a8018[n(180) + n(198) + n(192)]() : e[n(171) + n(157)]() : e[n(180) + n(198) + n(192)] ? n(168) !== n(190) ? e[n(180) + n(198) + n(192)]() : _0x1fc206[n(175) + n(183)]() : e[n(170) + n(155)] && e[n(170) + n(155)]();
}, yv = () => {
  const t = Un;
  document[t(182) + t(172)] ? t(165) !== t(187) ? document[t(182) + t(172)]() : _0x4f5bfa[t(185) + t(166)]() : document[t(196) + t(169)] ? document[t(196) + t(169)]() : document[t(175) + t(183)] ? document[t(175) + t(183)]() : document[t(189) + t(173)] && (t(193) !== t(174) ? document[t(189) + t(173)]() : _0x4a41c2[t(170) + t(155)]());
};
(function(t, n) {
  const e = wr, r = t();
  for (; ; )
    try {
      if (parseInt(e(598)) / 1 + parseInt(e(656)) / 2 * (-parseInt(e(718)) / 3) + parseInt(e(597)) / 4 + parseInt(e(443)) / 5 + parseInt(e(580)) / 6 + parseInt(e(733)) / 7 * (-parseInt(e(728)) / 8) + parseInt(e(501)) / 9 * (parseInt(e(715)) / 10) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Lo, 434317);
function Lo() {
  const t = ["7 16 3v2c2", "1 0 0 0-1-", "3 9a1.003 ", "H6z", "-3.229 2-5", "2 2h10c1.1", "822 13 9A1", "current", "home", "75.931l2 1", "0 0 0 .782", "forEach", "0h2v-6H4v2", "M20 11V5c0", "-2-2-2zm-1", "27-1.547 5", "540620nBFRBR", "378327yWrlMw", "opacity", "75z", "103.897 2 ", "2H4zm0 5h1", "device_id", "00/svg", "Khkfr", "7h7l.001 7", "4c-.025-.0", " 15H4V9z", "zm0-6h-4V4", "h-2v6h6z", "0 0-1.554-", "4c0-1.103-", "paste", "width", "10l.002 10", "YMVcV", " 2 2zm0-8h", "6l3.612-4.", "9 21V3a1 1", "proXc", ".w3.org/20", "0a.999.999", "type", "HSilx", " 0 0 0-.38", "mozfullscr", "0-2 .897-2", "left", "H13z", ".999-4.909", "0 0 24 24", "zIndex", ".116c.026-", "clientX", "3a.986.986", "8.347l-3.0", "1.103-.897", " 7H4c-1.10", "gClientRec", "M20.978 13", "touchend", "isDown", "027 1.027 ", "6a1 1 0 0 ", "2-.116C7.0", "5.46 1.701", "4v-4c0-1.1", "target", "-2-2-2zm-9", "touch_", "top", ".387 1.386", "children", "1.003 0 0 ", "M10 4H8v4H", "295388WuNWhH", " 0 0 0-1 1", ".832L6.697", "-2-5zM4 17", "touch_clas", "Show ID", " 2v10c0 1.", "swwln", "0v10z", "mouseup", "zM4 20V10h", "right", "0V4a1 1 0 ", "Volume", ".614 16 19", "0 0 0 14 2", "showMenu", "57-5.428 6", "c1.103 0 2", "svg", "11.75", " 2v5H4V5h3", "1.103 0-2 ", "1.048z", "03 0 2-.89", "v7h2zm5 14", "clientY", "4zm0 5h16v", "M20 2H10c-", "0 1-1V4a1 ", "screenchan", "H4c-1.103 ", "Back", "v2h8V5h3v6", "m-2-4h2V3h", "061-.016.0", " 0 0 0-.57", "cursor", "13%", "get", "-2 2v6c0 1", "shortcutEv", " 0 0 0 1.0", "passive", " 5.999-9S1", "tListener", "M4 6h16v2H", "getAttribu", "H5v-5H3v7h", ".103.897 2", "data", "7 2-2v-4h4", "wwsEu", "stener", "48 3.832a1", "volume", "3c.033 0 .", "a1 1 0 0 0", " 1 0 0 0 1", "2071250cTzoBo", "action", "YgqMu", "15lacZpe", "Icon", "RSPXb", "div", "Sync", "focus", "8v12.264l-", ".225-1.1 2", "2-2h-4V4h1", "h-5c-1.103", "584fRnZsm", "TFGAz", "7-2-2-2h-3", "3 0 2-.897", "touchmove", "32333lpKuuc", "oAUPB", "shortcut", " 2v16c0 1.", "6v6h2v-4h4", "removeEven", "2 2h7c0 1.", "50%", "0 18V4h10l", "preventDef", " 2v13c0 1.", "255, 255, ", "47 3.999 7", "3744435OPCpwt", "landscape", "taskId", ".257 5.127", "27.05A1 1 ", "GAzSF", "-.769zm-8.", "4v2h6zM8 2", "2 2h7c1.10", "9.527 4.54", "mousedown", "TGQCI", "assistive", "v2z", "zWOfV", "webkitfull", "YqpIr", "readText", "33L12 5.86", " 0 0 0-1.5", "v5h-5v2h7z", "AwntS", ".897-2 2v4", "93-.019a1.", "eenchange", "menu_", "0 0 0 .38-", "http://www", "assistive_", "path", "data-id", "s-.775-3.9", "M16 7v10c1", "08 3.677L7", "M20 3H4a1 ", "7 2-2V4c0-", "1 0 0 0-1 ", "Screen", "Copy", "ent", "addEventLi", "clipboard", "copy", "69-.823l-1", "back", "10c-1.103 ", "touch", "674.31a1 1", ".21a1 1 0 ", "l10.283 7.", "M6 12h6v2H", "set", "416 3.377 ", "m4.431 12.", "0 1.767.51", "M16 21c3.5", "ault", "now", "9pDRukk", ".024l-14-1", "59 15.016 ", "max", "shortcutCo", "017.082-.0", ".004 1.004", " 0-2 .897-", "msfullscre", "2-.082-.03", "1zm-1 16H5", "Home", ".002 16H6.", "S18.387 17", "circle", " 2-2v-7c0-", "change", "height", "pCsKu", "click", "1v16a1 1 0", "min", "7.032 15 7", "-7v2h5z", "-1.052-3.3", "closest", "move", "mKJXg", "mouse", "omxGr", "h2.697l5.7", "0 0 1.645z", "CNCGk", " 3.999 4.0", "includes", "a.995.995 ", "rgba(255, ", "-1.103-.89", "V5h14v14z", "fwKnp", "grab", "6v2H4z", " 0 0 1 1h1", "h4zm12-6h-", "M16.75 2h-", "03-.897-2-", "12%", "pageY", "pageX", "0 0-.396-1", "WnirO", "-1-1H8a1 1", "recents", "M5 5h5V3H3", "4.445-2.96", "Hide ID", "H4zm16-6h-", "-.897 2-2V", "enchange", "345-5.236 ", "fpqQh", "17-.056-.0", "fill", "Recents", "mousemove", "Paste", ".897-2-2-2", "touchstart", "sync", "2 2zm2 7v-", ".089-1.218", "7a1 1 0 0 ", "7zm11-5h-2", "6zm0 4h6v2", ".015.057-.", "getBoundin", "3 0-2 .897", "fullscreen", "TOCNw", "242880eLXSmL"];
  return Lo = function() {
    return t;
  }, Lo();
}
function wr(t, n) {
  const e = Lo();
  return wr = function(r, o) {
    return r = r - 435, e[r];
  }, wr(t, n);
}
const bv = il((t, n) => {
  const e = wr, { displayId: r, isMobile: o, onSenData: i, status: s, imageRef: a, isShowDeviceId: c } = t, [u, f] = tt(0), [d, l] = tt(0), [v, g] = tt(null), [h, p] = tt(0), S = qe(null), b = qe(null), m = qe(null), _ = {};
  _[e(693)] = e(527), _[e(599)] = 0.3, _[e(632)] = 999;
  const [y, R] = tt(_), A = {};
  A[e(632)] = 999, A[e(518)] = "", A[e(614)] = e(694);
  const [j, z] = tt(A), X = {};
  X[e(632)] = 1e3;
  const [ne, G] = tt(X), D = qe(null), [H, W] = tt(null), Y = (N) => {
    const C = e;
    if (C(551) !== C(579)) {
      if (N[C(439) + C(499)](), s[C(695)][C(672)] == !0) return;
      const Ce = Mt[N[C(623)]], Q = a[C(588)], at = m[C(588)], ft = Q[C(576) + C(639) + "t"](), Le = at[C(576) + C(639) + "t"]();
      let Me, Je;
      const an = ft[C(614)] - Le[C(614)], cn = ft[C(518)] - Le[C(518)];
      if (N[C(623)][C(535)](C(489))) {
        const { touches: Ge, changedTouches: Qe } = N, dt = Ge[0] ?? Qe[0];
        Me = dt[C(549)], Je = dt[C(548)];
      } else N[C(623)][C(535)](C(529)) && (Me = N[C(634)], Je = N[C(682)]);
      if (Ce == Mt[C(453)]) {
        s[C(494)]({ ...s[C(695)], isDown: !0 }), f(Me - Le[C(628)]), l(Je - Le[C(651)]);
        const Ge = {};
        Ge[C(599)] = 1, Ge[C(693)] = C(541);
        const Qe = { ...y, ...Ge };
        R(Qe), p(performance[C(500)]());
      } else if (Ce == Mt[C(565)]) {
        if (s[C(695)][C(642)] == !1) return;
        var je = Me - u - ft[C(628)], pe = Je - d - ft[C(651)];
        je = Math[C(504)](3, Math[C(522)](je, an) - 3), pe = Math[C(504)](3, Math[C(522)](pe, cn) - 3);
        const Ge = {};
        Ge[C(651)] = pe + "px", Ge[C(628)] = je + "px";
        const Qe = { ...j, ...Ge };
        z(Qe);
      } else if (Ce == Mt[C(665)])
        if (C(616) !== C(540)) {
          const Ge = performance[C(500)]() - h;
          if (v == Mt[C(453)] || Ge < 100) {
            const ht = {};
            ht[C(672)] = !0, ht[C(642)] = !1, s[C(494)]({ ...s[C(695)], ...ht });
          } else C(605) === C(528) ? [C(565), C(453), C(665)][C(592)]((ht) => {
            const Pt = C;
            _0x2053e6[Pt(435) + Pt(701)](ht, _0x347ecc);
          }) : s[C(494)]({ ...s[C(695)], isDown: !1 });
          const Qe = {};
          Qe[C(599)] = 0.3, Qe[C(693)] = C(527);
          const dt = { ...y, ...Qe };
          R(dt);
        } else _0x5639d2[C(483) + C(709)](_0x39e24d, _0x24fc2d);
      g(Ce), at[C(723)]();
    } else return;
  }, ee = async (N) => {
    const C = e;
    if (C(720) !== C(561)) {
      N[C(439) + C(499)]();
      const je = N[C(648)][C(526)](C(721))[C(703) + "te"](C(473));
      if (je === C(578))
        if (Gc())
          yv();
        else if (C(624) !== C(624)) {
          const Ce = { ..._0x68aa4e };
          Ce[C(599)] = _0x29abd4[C(695)][C(672)] ? 1 : 0, _0xd79ecf(Ce);
        } else vv(r);
      else {
        const pe = {};
        pe[C(716)] = C(697) + C(482), pe[C(735)] = je, pe[C(706)] = "";
        const Ce = pe;
        je === C(613) && (Ce[C(706)] = await navigator[C(484)][C(460)]()), je === C(485) && (Ce[C(445)] = C(505) + "py"), i(Ds, Ce);
      }
      s[C(494)]({ ...s[C(695)], showMenu: !1 }), b[C(588)][C(723)]();
    } else {
      const je = _0x49ebf4();
      _0xd26e8c(_0x5ab11f, je);
    }
  }, K = (N) => {
    const C = Gc();
    i(dv, C);
  };
  nt(() => {
    requestAnimationFrame(() => {
      const N = wr, C = { ...ne };
      C[N(599)] = s[N(695)][N(672)] ? 1 : 0, G(C);
    });
  }, [s]), nt(() => {
    const N = e;
    if (N(729) !== N(729)) _0x39291a(_0x6afaf0);
    else {
      const C = a[N(588)], je = [N(578) + N(517), N(458) + N(686) + "ge", N(626) + N(467), N(509) + N(559)];
      return C && je[N(592)]((pe) => {
        const Ce = N;
        Ce(734) !== Ce(519) ? C[Ce(483) + Ce(709)](pe, K) : _0x5d9c4f[Ce(483) + Ce(709)](_0x2b3e2a, _0x2f65a0);
      }), () => {
        const pe = N;
        pe(530) !== pe(530) ? (_0x3f126f[pe(483) + pe(709)](pe(568), _0x1fc8b0, _0x47c54b), _0x59d347[pe(483) + pe(709)](pe(732), _0x8fafa6, _0x824923), _0x2035cc[pe(483) + pe(709)](pe(641), _0x48409a)) : C && C[pe(435) + pe(701)](pe(520), K);
      };
    }
  }, []), nt(() => {
    const N = e, C = m[N(588)], je = b[N(588)];
    if (je && (N(620) !== N(717) ? je[N(483) + N(709)](N(520), ee) : _0x4353d9()), C)
      if (N(459) !== N(459)) _0x1d3e63[N(445)] = N(505) + "py";
      else {
        const pe = {};
        pe[N(699)] = !1;
        const Ce = pe;
        return o ? N(454) !== N(454) ? _0x1a1f89 && _0x4065a5[N(435) + N(701)](N(520), _0x914ea6) : (C[N(483) + N(709)](N(568), Y, Ce), C[N(483) + N(709)](N(732), Y, Ce), C[N(483) + N(709)](N(641), Y)) : N(663) === N(448) ? _0x37d45c(_0x125134) : [N(565), N(453), N(665)][N(592)]((Q) => {
          const at = N;
          C[at(483) + at(709)](Q, Y);
        }), () => {
          const Q = N;
          if (je)
            if (Q(533) === Q(464)) {
              if (_0x3b899a[Q(695)][Q(642)] == !1) return;
              var at = _0x31e9b4 - _0xbf9c1e - _0x5a1f1f[Q(628)], ft = _0xe2a144 - _0x23e9e2 - _0x2acd02[Q(651)];
              at = _0xa76b39[Q(504)](3, _0x36e9ed[Q(522)](at, _0x394c12) - 3), ft = _0x384bc0[Q(504)](3, _0xd7bd60[Q(522)](ft, _0x132727) - 3);
              const Le = {};
              Le[Q(651)] = ft + "px", Le[Q(628)] = at + "px";
              const Me = { ..._0x58ea90, ...Le };
              _0x23a215(Me);
            } else je[Q(435) + Q(701)](Q(520), ee);
          if (C)
            if (Q(457) !== Q(457)) {
              const Le = { ..._0x30c0f0[Q(695)] };
              Le[Q(642)] = !0, _0x24a957[Q(494)](Le), _0x13f63f(_0x1dbcf4 - _0x3f9d53[Q(628)]), _0x34362c(_0x2e4d66 - _0x292ef0[Q(651)]);
              const Me = {};
              Me[Q(599)] = 1, Me[Q(693)] = Q(541);
              const Je = { ..._0x39ef05, ...Me };
              _0x49010f(Je), _0x46773d(_0x3faa0a[Q(500)]());
            } else o ? [Q(568), Q(732), Q(641)][Q(592)]((Le) => {
              const Me = Q;
              C[Me(435) + Me(701)](Le, Y);
            }) : [Q(565), Q(453), Q(665)][Q(592)]((Le) => {
              const Me = Q;
              C[Me(435) + Me(701)](Le, Y);
            });
        };
      }
  }, [o, Y]);
  const J = () => {
    const N = e, C = {};
    C[N(632)] = 999, C[N(518)] = D[N(588)] == N(444) ? N(547) : null, C[N(614)] = D[N(588)] != N(444) ? N(547) : null, C[N(651)] = N(437), C[N(667)] = "5%", z(C);
  };
  sl(n, () => ({ fixTouch: (N) => {
    const C = e;
    N && (D[C(588)] = N), J();
  }, setFullscreen: (N) => {
    const C = e;
    C(708) !== C(708) ? (_0x1fffe7 = _0xa3bcc8[C(634)], _0x2feb79 = _0x12dbec[C(682)]) : W(N);
  } }));
  const oe = {};
  oe[e(563)] = e(537) + e(441) + "1)";
  const ie = {};
  ie.d = H ? e(655) + e(450) + e(593) + e(544) + e(737) + e(609) + e(610) : e(554) + e(681) + e(704) + e(573) + e(463) + e(690) + e(524);
  const Z = {};
  Z[e(653)] = e(480);
  const re = {};
  re[e(563)] = e(537) + e(441) + "1)";
  const de = {};
  de.d = e(684) + e(678) + e(465) + e(687) + e(627) + e(662) + e(601) + e(586) + e(680) + e(707) + e(674) + e(558) + e(612) + e(567) + e(666) + e(615) + e(557) + e(647) + e(546) + e(726) + e(664);
  const ue = {};
  ue.d = e(493) + e(574) + e(584);
  const he = {};
  he[e(653)] = e(481);
  const me = {};
  me[e(563)] = e(537) + e(441) + "1)";
  const k = {};
  k.d = e(594) + e(538) + e(730) + e(713) + e(552) + e(657) + e(687) + e(627) + e(440) + e(601) + e(436) + e(601) + e(451) + e(731) + e(516) + e(637) + e(649) + e(677) + e(689) + e(727) + e(508) + e(570) + e(606) + e(629);
  const F = {};
  F[e(653)] = e(566);
  const O = {};
  O[e(563)] = e(537) + e(441) + "1)";
  const I = {};
  I.d = e(545) + e(488) + e(627) + e(736) + e(601) + e(586) + e(680) + e(478) + e(637) + e(595) + e(438) + e(513) + e(600);
  const w = {};
  w.cx = e(676), w.cy = "18", w.r = "1";
  const B = {};
  B[e(653)] = e(c ? 556 : 661);
  const L = {};
  L[e(563)] = e(537) + e(441) + "1)";
  const Ae = {};
  Ae.d = e(498) + e(596) + e(630) + e(700) + e(452) + e(581) + e(652) + e(534) + e(442) + e(514) + e(670) + e(456);
  const Te = {};
  Te.d = e(475) + e(725) + e(585) + e(474) + e(659) + e(531) + e(710) + e(507) + e(698) + e(447) + e(671) + e(668) + e(611) + e(658) + e(638) + e(577) + e(696) + e(705) + e(617) + e(712) + e(691) + e(466) + e(643) + e(469) + e(633) + e(575) + e(506) + e(461) + e(724) + e(555) + e(607) + e(562) + e(510) + e(635) + e(625) + e(645) + e(503) + e(523) + e(608);
  const lt = {};
  lt[e(653)] = e(669);
  const Rt = {};
  Rt[e(563)] = e(537) + e(441) + "1)";
  const st = {};
  st.d = e(640) + e(491) + e(550) + e(502) + e(622) + e(462) + e(590) + e(572) + e(497) + e(618) + e(495) + e(646) + e(525) + e(673) + e(571) + e(536) + e(591) + e(449) + e(490) + e(692) + e(636) + e(476) + e(446) + e(492) + e(560) + e(679);
  const kt = {};
  kt[e(653)] = e(722);
  const Ne = {};
  Ne[e(563)] = e(537) + e(441) + "1)";
  const Ee = {};
  Ee.d = e(702) + e(683) + e(602) + e(542);
  const Ye = {};
  Ye[e(653)] = e(564);
  const vt = {};
  vt[e(563)] = e(537) + e(441) + "1)";
  const ut = {};
  ut.d = e(477) + e(479) + e(521) + e(543) + e(644) + e(685) + e(582) + e(511) + e(539);
  const rn = {};
  rn[e(653)] = e(512);
  const on = {};
  on[e(563)] = e(537) + e(441) + "1)";
  const Cn = {};
  Cn.d = e(496) + e(587) + e(714) + e(619) + e(462) + e(486) + e(583) + e(654) + e(532);
  const sn = {};
  return sn[e(653)] = e(688), U.jsxs(U.Fragment, { children: [s[e(695)][e(672)] ? U.jsxs(xv, { id: e(471) + e(468) + r, style: ne, ref: b, children: [U.jsxs(Ft, { "data-id": e(578), children: [U.jsx(e(675), { xmlns: e(470) + e(621) + e(604), width: "28", height: "28", viewBox: e(631), style: oe, children: U.jsx(e(472), ie) }), U.jsx(zt, Z)] }), U.jsxs(Ft, { "data-id": e(485), children: [U.jsxs(e(675), { xmlns: e(470) + e(621) + e(604), width: "28", height: "28", viewBox: e(631), style: re, children: [U.jsx(e(472), de), U.jsx(e(472), ue)] }), U.jsx(zt, he)] }), U.jsxs(Ft, { "data-id": e(613), children: [U.jsx(e(675), { xmlns: e(470) + e(621) + e(604), width: "28", height: "28", viewBox: e(631), style: me, children: U.jsx(e(472), k) }), U.jsx(zt, F)] }), U.jsxs(Ft, { "data-id": e(603), children: [U.jsxs(e(675), { xmlns: e(470) + e(621) + e(604), width: "28", height: "28", viewBox: e(631), style: O, children: [U.jsx(e(472), I), U.jsx(e(515), w)] }), U.jsx(zt, B)] }), U.jsxs(Ft, { "data-id": e(711), children: [U.jsxs(e(675), { xmlns: e(470) + e(621) + e(604), width: "25", height: "25", viewBox: e(631), style: L, children: [U.jsx(e(472), Ae), U.jsx(e(472), Te)] }), U.jsx(zt, lt)] }), U.jsxs(Ft, { "data-id": e(569), children: [U.jsx(e(675), { xmlns: e(470) + e(621) + e(604), width: "28", height: "28", viewBox: e(631), style: Rt, children: U.jsx(e(472), st) }), U.jsx(zt, kt)] }), U.jsxs(Ft, { "data-id": e(553), children: [U.jsx(e(675), { xmlns: e(470) + e(621) + e(604), width: "28", height: "28", viewBox: e(631), style: Ne, children: U.jsx(e(472), Ee) }), U.jsx(zt, Ye)] }), U.jsxs(Ft, { "data-id": e(589), children: [U.jsx(e(675), { xmlns: e(470) + e(621) + e(604), width: "28", height: "28", viewBox: e(631), style: vt, children: U.jsx(e(472), ut) }), U.jsx(zt, rn)] }), U.jsxs(Ft, { "data-id": e(487), children: [U.jsx(e(675), { xmlns: e(470) + e(621) + e(604), width: "28", height: "28", viewBox: e(631), style: on, children: U.jsx(e(472), Cn) }), U.jsx(zt, sn)] })] }) : null, U.jsx(gv, { id: e(471) + e(660) + "s_" + r, className: e(455), ref: S, style: y, children: U.jsx(mv, { style: j, src: pv, className: e(455), id: e(471) + e(650) + r, alt: e(719), ref: m, draggable: !1 }) })] });
}), De = qn;
(function(t, n) {
  const e = qn, r = t();
  for (; ; )
    try {
      if (parseInt(e(397)) / 1 + parseInt(e(400)) / 2 * (parseInt(e(399)) / 3) + -parseInt(e(395)) / 4 + -parseInt(e(405)) / 5 * (parseInt(e(384)) / 6) + -parseInt(e(401)) / 7 * (parseInt(e(403)) / 8) + -parseInt(e(366)) / 9 + -parseInt(e(402)) / 10 * (-parseInt(e(368)) / 11) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Mo, 819874);
function qn(t, n) {
  const e = Mo();
  return qn = function(r, o) {
    return r = r - 357, e[r];
  }, qn(t, n);
}
var Kc, Zc, Jc, Qc, el, tl, nl, rl, ol;
ol = De(357) + De(386), rl = De(389) + "th", nl = De(416) + De(414), tl = De(398), el = De(371) + "ta", Qc = De(406) + "er", Jc = De(429), Zc = De(418) + De(367), Kc = De(393);
class Sv {
  constructor(n, e, r, o) {
    It(this, ol, (n) => {
      const e = De;
      if (n)
        if (e(428) === e(428)) {
          const r = window[e(359) + "t"] + 10, o = this[e(389) + "th"](null, this[e(361)][e(378)], this[e(361)][e(394)], r, r);
          this[e(378)] = o[e(378)], this[e(394)] = o[e(394)];
        } else !this[e(432)] && (_0x30215f = this[e(418) + e(367)](this[e(420)], this[e(369)]), this[e(432)] = !0), this[e(365)][e(393)](new _0x449352({ timestamp: _0x4a234a[e(364)]() * 1e3, type: _0x3096f4 ? e(387) : e(388), data: _0xfd2005 }));
      else this[e(378)] = this[e(361)][e(378)], this[e(394)] = this[e(361)][e(394)];
    });
    It(this, rl, (n, e, r, o, i) => {
      const s = De;
      let a;
      return n && o > this[s(419)] && r > e && (i = this[s(419)]), i && (s(363) !== s(363) ? (this[s(381)][s(378)] = this[s(378)], this[s(381)][s(394)] = this[s(394)], this[s(411)][s(425)](_0x4f092c, 0, 0, this[s(378)], this[s(394)])) : (a = i / e * r, a > o && (i = o / r * e, a = o / e * e))), { width: Math[s(424)](i), height: Math[s(424)](a) };
    });
    It(this, nl, (n) => {
      const e = De;
      this[e(358) + "n"] = n, this[e(422)] && screen[e(358) + "n"][e(370)](n);
    });
    It(this, tl, (n, e) => {
      var a;
      const r = De, o = this[r(422)] == !0 ? window[r(359) + "t"] - 12 : window[r(359) + "t"] - 50, i = this[r(389) + "th"](!0, n, e, o, o);
      this[r(378)] = i[r(378)], this[r(394)] = i[r(394)], !this[r(361)] && ((a = this[r(360) + "ct"]) == null || a.call(this, !0));
      const s = {};
      s[r(378)] = i[r(378)], s[r(394)] = i[r(394)], this[r(361)] = s;
    });
    It(this, el, (n) => {
      const e = De, r = n instanceof Uint8Array ? n : new Uint8Array(n);
      this[e(420)] = r;
    });
    It(this, Qc, () => {
      const n = De, e = new VideoDecoder({ output: async (o) => {
        const i = qn, s = await createImageBitmap(o);
        (!this[i(378)] || !this[i(394)]) && (i(383) === i(409) ? (_0x2d0c43 = this[i(418) + i(367)](this[i(420)], this[i(369)]), this[i(432)] = !0) : this[i(398)](o[i(415)], o[i(421) + "t"])), this[i(358) + "n"] == i(379) ? (this[i(381)][i(378)] = this[i(394)], this[i(381)][i(394)] = this[i(378)], this[i(411)][i(385)](0, this[i(378)]), this[i(411)][i(396)](Math.PI / 2), this[i(411)][i(427)](-1, -1), this[i(411)][i(425)](s, 0, 0, this[i(378)], this[i(394)])) : (this[i(381)][i(378)] = this[i(378)], this[i(381)][i(394)] = this[i(394)], this[i(411)][i(425)](s, 0, 0, this[i(378)], this[i(394)])), s[i(412)](), o[i(412)]();
      }, error: (o) => console[n(391)](n(372) + n(407), o) }), r = {};
      return r[n(404)] = n(382) + "E", r[n(376) + n(410)] = n(390) + n(423), r[n(362) + n(431)] = !0, e[n(377)](r), e;
    });
    It(this, Jc, (n) => {
      const e = De;
      for (let r = 0; r <= n[e(426)] - 4; r++)
        if (e(408) === e(408)) {
          if (n[r] === 0 && n[r + 1] === 0 && n[r + 2] === 0 && n[r + 3] === 1)
            if (e(374) === e(392))
              if (_0x351f49) {
                const o = _0xdfe219[e(359) + "t"] + 10, i = this[e(389) + "th"](null, this[e(361)][e(378)], this[e(361)][e(394)], o, o);
                this[e(378)] = i[e(378)], this[e(394)] = i[e(394)];
              } else this[e(378)] = this[e(361)][e(378)], this[e(394)] = this[e(361)][e(394)];
            else
              return (n[r + 4] & 31) === 5;
        } else this[e(381)][e(378)] = this[e(394)], this[e(381)][e(394)] = this[e(378)], this[e(411)][e(385)](0, this[e(378)]), this[e(411)][e(396)](_0x465a6b.PI / 2), this[e(411)][e(427)](-1, -1), this[e(411)][e(425)](_0x370de0, 0, 0, this[e(378)], this[e(394)]);
      for (let r = 0; r <= n[e(426)] - 3; r++)
        if (n[r] === 0 && n[r + 1] === 0 && n[r + 2] === 1)
          return (n[r + 3] & 31) === 5;
      return !1;
    });
    It(this, Zc, (n, e) => {
      const r = De, o = Array[r(380)](n)[r(430)](Array[r(380)](e));
      return new Uint8Array(o);
    });
    It(this, Kc, (n) => {
      const e = De;
      if (!this[e(365)] || this[e(365)][e(373)] == e(412) || !this[e(420)]) return;
      let r = n instanceof Uint8Array ? n : new Uint8Array(n);
      const o = this[e(429)](r);
      o && (this[e(369)] = r), this[e(369)] && this[e(420)] && (e(375) !== e(375) ? this[e(398)](_0x1fd2ab[e(415)], _0x23c763[e(421) + "t"]) : (!this[e(432)] && (e(413) === e(413) ? (r = this[e(418) + e(367)](this[e(420)], this[e(369)]), this[e(432)] = !0) : _0x543b49 = this[e(419)]), this[e(365)][e(393)](new EncodedVideoChunk({ timestamp: performance[e(364)]() * 1e3, type: e(o ? 387 : 388), data: r }))));
    });
    const i = qn;
    this[i(381)] = n, this[i(419)] = e, this[i(422)] = r, this[i(360) + "ct"] = o, this[i(411)] = n[i(417)]("2d"), this[i(365)] = this[i(406) + "er"](), this[i(420)] = null, this[i(369)] = null, this[i(432)] = null, this[i(378)] = null, this[i(394)] = null, this[i(361)] = null, this[i(358) + "n"] = i(433);
  }
}
function Mo() {
  const t = ["tion", "codedWidth", "setOrienta", "getContext", "concatUint", "maxWidth", "videoMeta", "codedHeigh", "isMobile", "dware", "round", "drawImage", "length", "scale", "mWQSC", "isKeyFrame", "concat", "rLatency", "isPlay", "portrait", "setFullscr", "orientatio", "innerHeigh", "setIsConne", "rootSize", "optimizeFo", "AFawA", "now", "decoder", "551061SXHCOL", "8Arrays", "44HYSsiX", "iframe", "lock", "setVideoMe", "Decoder er", "state", "MhTTC", "crvAe", "hardwareAc", "configure", "width", "landscape", "from", "canvas", "avc1.64001", "bhYwj", "1047822QQQGPa", "translate", "een", "key", "delta", "resizedWid", "prefer-har", "error", "wQvKp", "decode", "height", "2457392ObylTi", "rotate", "624554CNTQOk", "autoResize", "1299eoVeZF", "1228UIgjZh", "931YbBYZS", "3325770fDnsQw", "12112UnzCGE", "codec", "15xLAsoG", "buildDecod", "ror:", "LSIeG", "hvhKQ", "celeration", "ctx", "close", "UbjVU"];
  return Mo = function() {
    return t;
  }, Mo();
}
(function(t, n) {
  const e = Gt, r = t();
  for (; ; )
    try {
      if (-parseInt(e(393)) / 1 + parseInt(e(440)) / 2 + -parseInt(e(494)) / 3 * (-parseInt(e(381)) / 4) + parseInt(e(496)) / 5 * (-parseInt(e(466)) / 6) + -parseInt(e(468)) / 7 + -parseInt(e(418)) / 8 * (parseInt(e(457)) / 9) + -parseInt(e(454)) / 10 * (-parseInt(e(436)) / 11) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Do, 453874);
function Gt(t, n) {
  const e = Do();
  return Gt = function(r, o) {
    return r = r - 368, e[r];
  }, Gt(t, n);
}
function Do() {
  const t = ["setOrienta", "enElement", "pSCyO", "bHeCH", "clipboard", "size", "Content-Ty", "image_", "9837619KWMkLf", "fullscreen", "tListener", "KTQlc", "1682032lljcqC", "HgXCi", "response", "change", "RWlOH", "video_meta", "marginTop", "de: ", "large", "COPY_TEXT", "device_id", "method", "onScreenEv", "onSyncIFra", "10EfpxZu", "code", "setVideoMe", "9QlhWrl", "Timeout wa", "iframe", "screenElem", "emit", "meta", "stener", "draggable", "HWZRj", "74946dzIzgY", "yIBga", "5738173lSURpv", "screen", "connect", " closed co", "QAdyq", "height", "JznbM", "info", "timeout", "SIwjF", "error", "tion", "connect_er", "value", "data", "false", "children", "addEventLi", "showMenu", "decode", "ror", "msg", "tabIndex", "n/json", "orientatio", "passwd", "71934NvwAEj", "message", "135uouoss", "get_video_", "mozFullScr", "url", "ent", "PVkrT", "writeText", "disconnect", "een", "screen_mai", "map", "connection", "MoWwD", "center", "applicatio", "length", "type", "current", "status", "msFullscre", "44kUoLqg", "QxdXr", "control", "Yxplt", "zMpqh", "sync", "join_room", "post", "Eihek", "isMobile", "alIsK", "delete", "377767MBkisw", "reconnecti", "setFullscr", "iKIQd", "test", "tLPXo", "get", "UlFqk", "hxpIc", "middle", "screen_", "BPNEO", "userAgent", "eenElement", "set", "lEuiP", "iting for ", "close", "width", "shortcut", "shortcutEv", "lTvLv", "type_clien", "removeEven", "Element", "83728PCuvKA", "wJEoV", "headers", "isDown", "password", "webkitFull", "text", "taskId", "fixTouch", "action"];
  return Do = function() {
    return t;
  }, Do();
}
const Wv = il((t, n) => {
  const e = Gt, { serve: r, dataDevice: o, maxWidth: i, showAssistive: s, showDeviceId: a, syncEvent: c, syncButton: u } = t, f = o[e(450)], d = /iPhone|iPad|iPod|Android/i[e(397)](navigator[e(405)]), l = e(383), [v, g] = tt(null), [h, p] = tt(a), S = {};
  S[e(486)] = !1, S[e(421)] = !1;
  const [b, m] = tt(S), _ = qe(null), y = qe(null), [R, A] = tt(null), j = e(435) + f, z = e(403) + f, X = e(370) + "n_" + f, ne = qe(null), G = qe(null), D = qe(null), [H, W] = tt([]), Y = qe(null), ee = qe(/* @__PURE__ */ new Map());
  nt(() => {
    p(a);
  }, [a]);
  const K = (k) => {
    W((F) => [...F, k]);
  }, J = (k) => {
    const F = e;
    F(431) === F(474) ? _0x5a589e[F(378)][F(487)](_0x539c7f) : (y[F(378)][F(461)](F(495), k), c == null || c(k));
  };
  sl(n, () => ({ api: async function(k, F = 5e3) {
    return new Promise((O, I) => {
      const w = Gt, B = setTimeout(() => {
        const L = Gt;
        if (L(465) !== L(414)) {
          ee[L(378)][L(392)](k[L(425)]);
          const Ae = {};
          Ae[L(427)] = k[L(427)], Ae[L(425)] = k[L(425)], Ae[L(379)] = !1, Ae[L(495)] = L(458) + L(409) + L(442), I(Ae);
        } else {
          const Ae = {};
          Ae[L(427)] = L(453) + "me", _0x46d85d[L(461)](L(495), Ae);
        }
      }, F);
      ee[w(378)][w(407)](k[w(425)], (L) => {
        clearTimeout(B), O(L);
      }), y[w(378)][w(461)](w(495), k);
    });
  }, sync: function(k) {
    const F = e;
    y[F(378)][F(461)](F(495), k);
  }, showDeviceId: function(k) {
    const F = e;
    if (F(389) !== F(382)) p(k);
    else {
      const O = {};
      O[F(427)] = F(470), O[F(415) + "t"] = _0x1d25f2, O[F(450)] = _0xbb59c8[F(450)], O[F(390)] = _0x49fbfb, O[F(493)] = _0x55b59b[F(493)], _0x47f9ed[F(461)](F(387), O);
    }
  } })), nt(() => {
    (async () => {
      const k = Gt;
      try {
        const F = {};
        F[k(434) + "pe"] = k(375) + k(491);
        const O = {};
        O[k(450)] = o[k(450)], O[k(422)] = o[k(493)];
        const I = {};
        I[k(499)] = r, I[k(451)] = k(388), I[k(476)] = 1e4, I[k(420)] = F, I[k(482)] = O;
        const w = I, B = await sv(w);
        g(B[k(482)]);
      } catch (F) {
        if (k(501) !== k(419)) {
          const O = {};
          O[k(489)] = F, O[k(377)] = k(478), K(O);
        } else {
          _0x45477a[k(378)] = _0x14c606;
          const O = {};
          O[k(427)] = k(452) + k(500), _0x850f2d[k(461)](k(495), O);
        }
      }
    })();
  }, []), nt(() => {
    const k = e;
    if (y[k(378)] || !v) return;
    const F = {};
    F[k(394) + "on"] = !1;
    const O = no(v, F);
    return O.on(k(470), () => {
      const I = k;
      if (I(477) === I(477)) {
        const w = {};
        w[I(427)] = I(470), w[I(415) + "t"] = l, w[I(450)] = o[I(450)], w[I(390)] = d, w[I(493)] = o[I(493)], O[I(461)](I(387), w);
      } else {
        const w = () => {
          const B = I, L = _0x579f7b[B(437) + B(417)] || _0x520814[B(423) + B(460) + B(500)] || _0x49ae0f[B(498) + B(406)] || _0x1faea1[B(380) + B(429)];
          _0x56a630[B(378)][B(395) + B(369)](!!L), _0x4be080[B(378)][B(395) + B(369)](!!L), _0x32f285[B(378)][B(426)]();
        };
        return _0x12511c[I(485) + I(463)](I(437) + I(443), w), () => {
          const B = I;
          _0x33687f[B(416) + B(438)](B(437) + B(443), w);
        };
      }
    }), O.on(k(387), (I) => {
      const w = k;
      if (I[w(379)] == !0) {
        y[w(378)] = O;
        const B = {};
        B[w(427)] = w(452) + w(500), O[w(461)](w(495), B);
      } else {
        const B = {};
        B[w(489)] = I[w(489)], B[w(377)] = w(478), K(B);
      }
    }), O.on(k(469), (I) => {
      const w = k;
      if (w(391) !== w(404)) Y[w(378)][w(487)](I);
      else {
        const B = _0x1677e8[w(378)];
        _0x2e706a[w(378)] = new _0x4418dd(B, _0x867b5a, _0x5952da, _0x907392);
      }
    }), O.on(k(445), (I) => {
      const w = k;
      if (I) {
        if (Y[w(378)][w(456) + "ta"](I), !Y[w(378)][w(459)]) {
          const B = {};
          B[w(427)] = w(453) + "me", O[w(461)](w(495), B);
        }
      } else {
        const B = {};
        B[w(427)] = w(497) + w(462), O[w(461)](w(445), B);
      }
    }), O.on(k(495), (I) => {
      const w = k;
      if ((I[w(427)] == w(449) || I[w(427)] == w(413) + w(500)) && I[w(424)][w(376)] > 0 ? w(384) !== w(384) ? _0x21769a(_0x3d2996) : navigator[w(432)][w(502)](I[w(424)]) : I[w(427)] == w(492) + "n" && (Y[w(378)][w(428) + w(479)](I[w(481)]), D[w(378)][w(426)](I[w(481)])), I[w(425)]) {
        const B = ee[w(378)][w(399)](I[w(425)]);
        B && (w(430) !== w(430) ? _0x499a96(_0x2392e6) : (B(I), ee[w(378)][w(392)](I[w(425)])));
      }
    }), O.on(k(480) + k(488), (I) => {
      const w = k;
      if (w(467) !== w(467)) {
        const B = {};
        B[w(489)] = _0x7ee406, B[w(377)] = w(478), _0x42d24a(B);
      } else {
        const B = {};
        B[w(489)] = I, B[w(377)] = w(478), K(B);
      }
    }), O.on(k(368), (I) => {
      const w = k, B = {};
      B[w(489)] = w(372) + w(471) + w(447) + I[w(455)], B[w(377)] = w(475), K(B), _[w(378)] && (w(385) === w(400) ? _0x7a1f00(!_0x592eb2) : _[w(378)][w(410)]());
    }), () => {
      const I = k;
      O && (I(373) !== I(441) ? O[I(368)]() : _0x301c02(_0x49ba2e));
    };
  }, [v]), nt(() => {
    const k = e;
    if (k(401) === k(408)) _0x5f2347[k(378)][k(461)](k(495), _0x572875), _0x898624 == null || _0x898624(_0xfa7d13);
    else {
      const F = G[k(378)];
      Y[k(378)] = new Sv(F, i, d, A);
    }
  }, []), nt(() => {
    const k = e, F = () => {
      const O = Gt;
      if (O(444) === O(444)) {
        const I = document[O(437) + O(417)] || document[O(423) + O(460) + O(500)] || document[O(498) + O(406)] || document[O(380) + O(429)];
        Y[O(378)][O(395) + O(369)](!!I), D[O(378)][O(395) + O(369)](!!I), D[O(378)][O(426)]();
      } else {
        const I = {};
        I[O(489)] = O(372) + O(471) + O(447) + _0x360175[O(455)], I[O(377)] = O(475), _0x147192(I), _0x19ea77[O(378)] && _0x990e73[O(378)][O(410)]();
      }
    };
    return document[k(485) + k(463)](k(437) + k(443), F), () => {
      const O = k;
      document[O(416) + O(438)](O(437) + O(443), F);
    };
  }, []);
  const oe = {};
  oe[e(484)] = o[e(450)];
  const ie = {};
  ie[e(433)] = e(448);
  const Z = {};
  Z[e(433)] = e(448);
  const re = {};
  re[e(433)] = e(448);
  const de = {};
  de[e(473)] = 0, de[e(411)] = 0;
  const ue = {};
  ue[e(399)] = b, ue[e(407)] = m;
  const he = {};
  he.id = j, he[e(490)] = "0", he[e(464)] = e(483);
  const me = {};
  return me[e(446)] = 5, U.jsxs(xd, { id: X, children: [h && U.jsx(yd, { children: U.jsx(vd, oe) }), H[e(376)] == 0 ? U.jsxs(U.Fragment, { children: [!R && U.jsxs(bf, { align: e(374), gap: e(402), children: [U.jsx(pr, ie), U.jsx(pr, Z), U.jsx(pr, re)] }), U.jsxs(md, { ref: ne, id: z, style: R ? {} : de, children: [s ? U.jsx(bv, { status: ue, ref: D, imageRef: G, displayId: f, isMobile: d, isShowDeviceId: h, onSenData: (k, F) => {
    const O = e;
    if (k === Ds && F[O(412)] === O(450))
      if (O(396) === O(398)) {
        const I = _0x1253fe(() => {
          const w = O;
          _0x233ec8[w(378)][w(392)](_0x590328[w(425)]);
          const B = {};
          B[w(427)] = _0x480f5a[w(427)], B[w(425)] = _0x542d5b[w(425)], B[w(379)] = !1, B[w(495)] = w(458) + w(409) + w(442), _0x2321e4(B);
        }, _0x2075ce);
        _0x74cfd7[O(378)][O(407)](_0x5aa003[O(425)], (w) => {
          _0x460a3a(I), _0x114557(w);
        }), _0x294496[O(378)][O(461)](O(495), _0x3e9d1c);
      } else p(!h);
    else k === Ds && F[O(412)] === O(386) ? u(o[O(450)]) : J(F);
  } }) : null, U.jsx(hv, { canvasContent: he, imageRef: G, isMobile: d, assistive: b, onImgEvent: (k, F) => {
    const O = e;
    if (k === Gf)
      if (O(439) === O(439)) {
        const I = { ...b };
        I[O(486)] = !1, m(I);
      } else {
        const I = _0x1dc26e[O(437) + O(417)] || _0x64a28[O(423) + O(460) + O(500)] || _0x2ba67f[O(498) + O(406)] || _0x3f5e67[O(380) + O(429)];
        _0x30b66e[O(378)][O(395) + O(369)](!!I), _0x4e8302[O(378)][O(395) + O(369)](!!I), _0x51d336[O(378)][O(426)]();
      }
    else if (O(472) === O(472)) J(F);
    else {
      const I = { ..._0x1bdaf1 };
      I[O(486)] = !1, _0x139252(I);
    }
  } })] })] }) : H[e(371)]((k, F) => U.jsx(mf, { style: me, message: k[e(489)], type: k[e(377)], showIcon: !0, closable: !0 }, F))] });
});
function Bo() {
  var t = ["5546471grHRyO", "2455930lAGJUQ", "156PzeFwE", "2505048qmvgWY", "23919496ioFlLS", "9SrVcLo", "2278120GtlXEa", "367480ZYIFFC", "2979NtVOuL"];
  return Bo = function() {
    return t;
  }, Bo();
}
(function(t, n) {
  for (var e = Bs, r = t(); ; )
    try {
      var o = -parseInt(e(407)) / 1 + parseInt(e(411)) / 2 * (parseInt(e(408)) / 3) + -parseInt(e(406)) / 4 + -parseInt(e(410)) / 5 + -parseInt(e(412)) / 6 + -parseInt(e(409)) / 7 + -parseInt(e(404)) / 8 * (-parseInt(e(405)) / 9);
      if (o === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Bo, 429334);
function Bs(t, n) {
  var e = Bo();
  return Bs = function(r, o) {
    r = r - 404;
    var i = e[r];
    return i;
  }, Bs(t, n);
}
export {
  Wv as ControlMyRPP
};
