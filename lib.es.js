var b0 = Object.defineProperty;
var S0 = (e, n, t) => n in e ? b0(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var Nt = (e, n, t) => S0(e, typeof n != "symbol" ? n + "" : n, t);
import * as w from "react";
import je, { useDebugValue as Da, createElement as w0, useRef as Ve, useContext as sn, isValidElement as E0, version as _0, createContext as aa, useLayoutEffect as C0, useEffect as tt, useState as et, forwardRef as Tl, useImperativeHandle as Ol } from "react";
import Ba from "react-dom";
function ko() {
  var e = ["prototype", 'ctor("retu', "exception", "undefined", "ptor", "418KoLedP", "9987246jYOyzd", "warn", 'rn this")(', "table", "search", "function", "2721990IVmqTr", "apply", "5eJQxGJ", "20XtolKV", "length", "value", "2ctgvkW", "__esModule", "1546132baHqOt", "getOwnProp", "bind", "__proto__", "toString", "default", "erty", "return (fu", "nction() ", "ertyDescri", "defineProp", "get", "call", "(((.+)+)+)", "hasOwnProp", "construct", "761970BZRrgg", "forEach", "trace", "556158NEqtHb", "log", "info", "keys", "error", "{}.constru", "constructo", "console", "321761pLqyLG", "2790320gkGyPY"];
  return ko = function() {
    return e;
  }, ko();
}
var Ar = an;
(function(e, n) {
  for (var t = an, r = e(); ; )
    try {
      var o = -parseInt(t(512)) / 1 * (parseInt(t(532)) / 2) + parseInt(t(504)) / 3 * (-parseInt(t(529)) / 4) + parseInt(t(528)) / 5 * (-parseInt(t(526)) / 6) + parseInt(t(534)) / 7 + parseInt(t(513)) / 8 + -parseInt(t(520)) / 9 + -parseInt(t(501)) / 10 * (-parseInt(t(519)) / 11);
      if (o === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ko, 653102);
var A0 = /* @__PURE__ */ function() {
  var e = !0;
  return function(n, t) {
    var r = e ? function() {
      var o = an;
      if (t) {
        var i = t[o(527)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), $i = A0(void 0, function() {
  var e = an;
  return $i[e(538)]()[e(524)](e(498) + "+$")[e(538)]()[e(510) + "r"]($i)[e(524)](e(498) + "+$");
});
$i();
var cr = /* @__PURE__ */ function() {
  var e = !0;
  return function(n, t) {
    var r = e ? function() {
      var o = an;
      if (t) {
        var i = t[o(527)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), T0 = cr(void 0, function() {
  var e = an, n;
  try {
    var t = Function(e(541) + e(542) + (e(509) + e(515) + e(522) + " )") + ");");
    n = t();
  } catch {
    n = window;
  }
  for (var r = n[e(511)] = n[e(511)] || {}, o = [e(505), e(521), e(506), e(508), e(516), e(523), e(503)], i = 0; i < o[e(530)]; i++) {
    var s = cr[e(510) + "r"][e(514)][e(536)](cr), a = o[i], c = r[a] || s;
    s[e(537)] = cr[e(536)](cr), s[e(538)] = c[e(538)][e(536)](c), r[a] = s;
  }
});
T0();
typeof globalThis !== Ar(517) || typeof window !== Ar(517) || (typeof global !== Ar(517) ? global : Ar(517));
function O0(e) {
  var n = Ar;
  return e && e[n(533)] && Object[n(514)][n(499) + n(540)][n(546)](e, n(539)) ? e[n(539)] : e;
}
function an(e, n) {
  var t = ko();
  return an = function(r, o) {
    r = r - 498;
    var i = t[r];
    return i;
  }, an(e, n);
}
var Xr = { exports: {} }, lr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fa;
function R0() {
  if (Fa) return lr;
  Fa = 1;
  var e = je, n = Symbol.for("react.element"), t = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(a, c, l) {
    var u, d = {}, f = null, v = null;
    l !== void 0 && (f = "" + l), c.key !== void 0 && (f = "" + c.key), c.ref !== void 0 && (v = c.ref);
    for (u in c) r.call(c, u) && !i.hasOwnProperty(u) && (d[u] = c[u]);
    if (a && a.defaultProps) for (u in c = a.defaultProps, c) d[u] === void 0 && (d[u] = c[u]);
    return { $$typeof: n, type: a, key: f, ref: v, props: d, _owner: o.current };
  }
  return lr.Fragment = t, lr.jsx = s, lr.jsxs = s, lr;
}
var ur = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var za;
function k0() {
  return za || (za = 1, process.env.NODE_ENV !== "production" && function() {
    var e = je, n = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), m = Symbol.iterator, x = "@@iterator";
    function h(p) {
      if (p === null || typeof p != "object")
        return null;
      var R = m && p[m] || p[x];
      return typeof R == "function" ? R : null;
    }
    var S = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(p) {
      {
        for (var R = arguments.length, I = new Array(R > 1 ? R - 1 : 0), X = 1; X < R; X++)
          I[X - 1] = arguments[X];
        g("error", p, I);
      }
    }
    function g(p, R, I) {
      {
        var X = S.ReactDebugCurrentFrame, he = X.getStackAddendum();
        he !== "" && (R += "%s", I = I.concat([he]));
        var xe = I.map(function(ce) {
          return String(ce);
        });
        xe.unshift("Warning: " + R), Function.prototype.apply.call(console[p], console, xe);
      }
    }
    var C = !1, y = !1, A = !1, E = !1, P = !1, D;
    D = Symbol.for("react.module.reference");
    function W(p) {
      return !!(typeof p == "string" || typeof p == "function" || p === r || p === i || P || p === o || p === l || p === u || E || p === v || C || y || A || typeof p == "object" && p !== null && (p.$$typeof === f || p.$$typeof === d || p.$$typeof === s || p.$$typeof === a || p.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      p.$$typeof === D || p.getModuleId !== void 0));
    }
    function ee(p, R, I) {
      var X = p.displayName;
      if (X)
        return X;
      var he = R.displayName || R.name || "";
      return he !== "" ? I + "(" + he + ")" : I;
    }
    function Y(p) {
      return p.displayName || "Context";
    }
    function N(p) {
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
        case u:
          return "SuspenseList";
      }
      if (typeof p == "object")
        switch (p.$$typeof) {
          case a:
            var R = p;
            return Y(R) + ".Consumer";
          case s:
            var I = p;
            return Y(I._context) + ".Provider";
          case c:
            return ee(p, p.render, "ForwardRef");
          case d:
            var X = p.displayName || null;
            return X !== null ? X : N(p.type) || "Memo";
          case f: {
            var he = p, xe = he._payload, ce = he._init;
            try {
              return N(ce(xe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var z = Object.assign, q = 0, $, J, G, Z, re, oe, K;
    function te() {
    }
    te.__reactDisabledLog = !0;
    function fe() {
      {
        if (q === 0) {
          $ = console.log, J = console.info, G = console.warn, Z = console.error, re = console.group, oe = console.groupCollapsed, K = console.groupEnd;
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
        q++;
      }
    }
    function le() {
      {
        if (q--, q === 0) {
          var p = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: z({}, p, {
              value: $
            }),
            info: z({}, p, {
              value: J
            }),
            warn: z({}, p, {
              value: G
            }),
            error: z({}, p, {
              value: Z
            }),
            group: z({}, p, {
              value: re
            }),
            groupCollapsed: z({}, p, {
              value: oe
            }),
            groupEnd: z({}, p, {
              value: K
            })
          });
        }
        q < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var de = S.ReactCurrentDispatcher, pe;
    function k(p, R, I) {
      {
        if (pe === void 0)
          try {
            throw Error();
          } catch (he) {
            var X = he.stack.trim().match(/\n( *(at )?)/);
            pe = X && X[1] || "";
          }
        return `
` + pe + p;
      }
    }
    var U = !1, j;
    {
      var B = typeof WeakMap == "function" ? WeakMap : Map;
      j = new B();
    }
    function T(p, R) {
      if (!p || U)
        return "";
      {
        var I = j.get(p);
        if (I !== void 0)
          return I;
      }
      var X;
      U = !0;
      var he = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var xe;
      xe = de.current, de.current = null, fe();
      try {
        if (R) {
          var ce = function() {
            throw Error();
          };
          if (Object.defineProperty(ce.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ce, []);
            } catch (Qe) {
              X = Qe;
            }
            Reflect.construct(p, [], ce);
          } else {
            try {
              ce.call();
            } catch (Qe) {
              X = Qe;
            }
            p.call(ce.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Qe) {
            X = Qe;
          }
          p();
        }
      } catch (Qe) {
        if (Qe && X && typeof Qe.stack == "string") {
          for (var se = Qe.stack.split(`
`), We = X.stack.split(`
`), Ce = se.length - 1, Te = We.length - 1; Ce >= 1 && Te >= 0 && se[Ce] !== We[Te]; )
            Te--;
          for (; Ce >= 1 && Te >= 0; Ce--, Te--)
            if (se[Ce] !== We[Te]) {
              if (Ce !== 1 || Te !== 1)
                do
                  if (Ce--, Te--, Te < 0 || se[Ce] !== We[Te]) {
                    var Oe = `
` + se[Ce].replace(" at new ", " at ");
                    return p.displayName && Oe.includes("<anonymous>") && (Oe = Oe.replace("<anonymous>", p.displayName)), typeof p == "function" && j.set(p, Oe), Oe;
                  }
                while (Ce >= 1 && Te >= 0);
              break;
            }
        }
      } finally {
        U = !1, de.current = xe, le(), Error.prepareStackTrace = he;
      }
      var Mn = p ? p.displayName || p.name : "", vn = Mn ? k(Mn) : "";
      return typeof p == "function" && j.set(p, vn), vn;
    }
    function ne(p, R, I) {
      return T(p, !1);
    }
    function M(p) {
      var R = p.prototype;
      return !!(R && R.isReactComponent);
    }
    function ke(p, R, I) {
      if (p == null)
        return "";
      if (typeof p == "function")
        return T(p, M(p));
      if (typeof p == "string")
        return k(p);
      switch (p) {
        case l:
          return k("Suspense");
        case u:
          return k("SuspenseList");
      }
      if (typeof p == "object")
        switch (p.$$typeof) {
          case c:
            return ne(p.render);
          case d:
            return ke(p.type, R, I);
          case f: {
            var X = p, he = X._payload, xe = X._init;
            try {
              return ke(xe(he), R, I);
            } catch {
            }
          }
        }
      return "";
    }
    var _e = Object.prototype.hasOwnProperty, ct = {}, Ot = S.ReactDebugCurrentFrame;
    function it(p) {
      if (p) {
        var R = p._owner, I = ke(p.type, p._source, R ? R.type : null);
        Ot.setExtraStackFrame(I);
      } else
        Ot.setExtraStackFrame(null);
    }
    function Rt(p, R, I, X, he) {
      {
        var xe = Function.call.bind(_e);
        for (var ce in p)
          if (xe(p, ce)) {
            var se = void 0;
            try {
              if (typeof p[ce] != "function") {
                var We = Error((X || "React class") + ": " + I + " type `" + ce + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof p[ce] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw We.name = "Invariant Violation", We;
              }
              se = p[ce](R, ce, X, I, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ce) {
              se = Ce;
            }
            se && !(se instanceof Error) && (it(he), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", X || "React class", I, ce, typeof se), it(null)), se instanceof Error && !(se.message in ct) && (ct[se.message] = !0, it(he), b("Failed %s type: %s", I, se.message), it(null));
          }
      }
    }
    var Pe = Array.isArray;
    function Se(p) {
      return Pe(p);
    }
    function qe(p) {
      {
        var R = typeof Symbol == "function" && Symbol.toStringTag, I = R && p[Symbol.toStringTag] || p.constructor.name || "Object";
        return I;
      }
    }
    function xt(p) {
      try {
        return lt(p), !1;
      } catch {
        return !0;
      }
    }
    function lt(p) {
      return "" + p;
    }
    function pn(p) {
      if (xt(p))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qe(p)), lt(p);
    }
    var xn = S.ReactCurrentOwner, In = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, mn, L;
    function O(p) {
      if (_e.call(p, "ref")) {
        var R = Object.getOwnPropertyDescriptor(p, "ref").get;
        if (R && R.isReactWarning)
          return !1;
      }
      return p.ref !== void 0;
    }
    function Me(p) {
      if (_e.call(p, "key")) {
        var R = Object.getOwnPropertyDescriptor(p, "key").get;
        if (R && R.isReactWarning)
          return !1;
      }
      return p.key !== void 0;
    }
    function Le(p, R) {
      typeof p.ref == "string" && xn.current;
    }
    function $e(p, R) {
      {
        var I = function() {
          mn || (mn = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        I.isReactWarning = !0, Object.defineProperty(p, "key", {
          get: I,
          configurable: !0
        });
      }
    }
    function Ee(p, R) {
      {
        var I = function() {
          L || (L = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        I.isReactWarning = !0, Object.defineProperty(p, "ref", {
          get: I,
          configurable: !0
        });
      }
    }
    var Ke = function(p, R, I, X, he, xe, ce) {
      var se = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: p,
        key: R,
        ref: I,
        props: ce,
        // Record the component responsible for creating this element.
        _owner: xe
      };
      return se._store = {}, Object.defineProperty(se._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(se, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: X
      }), Object.defineProperty(se, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: he
      }), Object.freeze && (Object.freeze(se.props), Object.freeze(se)), se;
    };
    function Ze(p, R, I, X, he) {
      {
        var xe, ce = {}, se = null, We = null;
        I !== void 0 && (pn(I), se = "" + I), Me(R) && (pn(R.key), se = "" + R.key), O(R) && (We = R.ref, Le(R, he));
        for (xe in R)
          _e.call(R, xe) && !In.hasOwnProperty(xe) && (ce[xe] = R[xe]);
        if (p && p.defaultProps) {
          var Ce = p.defaultProps;
          for (xe in Ce)
            ce[xe] === void 0 && (ce[xe] = Ce[xe]);
        }
        if (se || We) {
          var Te = typeof p == "function" ? p.displayName || p.name || "Unknown" : p;
          se && $e(ce, Te), We && Ee(ce, Te);
        }
        return Ke(p, se, We, he, X, xn.current, ce);
      }
    }
    var kt = S.ReactCurrentOwner, Nn = S.ReactDebugCurrentFrame;
    function Pt(p) {
      if (p) {
        var R = p._owner, I = ke(p.type, p._source, R ? R.type : null);
        Nn.setExtraStackFrame(I);
      } else
        Nn.setExtraStackFrame(null);
    }
    var Ht;
    Ht = !1;
    function Ut(p) {
      return typeof p == "object" && p !== null && p.$$typeof === n;
    }
    function Xe() {
      {
        if (kt.current) {
          var p = N(kt.current.type);
          if (p)
            return `

Check the render method of \`` + p + "`.";
        }
        return "";
      }
    }
    function Je(p) {
      return "";
    }
    var ut = {};
    function It(p) {
      {
        var R = Xe();
        if (!R) {
          var I = typeof p == "string" ? p : p.displayName || p.name;
          I && (R = `

Check the top-level render call using <` + I + ">.");
        }
        return R;
      }
    }
    function gn(p, R) {
      {
        if (!p._store || p._store.validated || p.key != null)
          return;
        p._store.validated = !0;
        var I = It(R);
        if (ut[I])
          return;
        ut[I] = !0;
        var X = "";
        p && p._owner && p._owner !== kt.current && (X = " It was passed a child from " + N(p._owner.type) + "."), Pt(p), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', I, X), Pt(null);
      }
    }
    function jn(p, R) {
      {
        if (typeof p != "object")
          return;
        if (Se(p))
          for (var I = 0; I < p.length; I++) {
            var X = p[I];
            Ut(X) && gn(X, R);
          }
        else if (Ut(p))
          p._store && (p._store.validated = !0);
        else if (p) {
          var he = h(p);
          if (typeof he == "function" && he !== p.entries)
            for (var xe = he.call(p), ce; !(ce = xe.next()).done; )
              Ut(ce.value) && gn(ce.value, R);
        }
      }
    }
    function Jt(p) {
      {
        var R = p.type;
        if (R == null || typeof R == "string")
          return;
        var I;
        if (typeof R == "function")
          I = R.propTypes;
        else if (typeof R == "object" && (R.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        R.$$typeof === d))
          I = R.propTypes;
        else
          return;
        if (I) {
          var X = N(R);
          Rt(I, p.props, "prop", X, p);
        } else if (R.PropTypes !== void 0 && !Ht) {
          Ht = !0;
          var he = N(R);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", he || "Unknown");
        }
        typeof R.getDefaultProps == "function" && !R.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Qt(p) {
      {
        for (var R = Object.keys(p.props), I = 0; I < R.length; I++) {
          var X = R[I];
          if (X !== "children" && X !== "key") {
            Pt(p), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", X), Pt(null);
            break;
          }
        }
        p.ref !== null && (Pt(p), b("Invalid attribute `ref` supplied to `React.Fragment`."), Pt(null));
      }
    }
    var ar = {};
    function Wr(p, R, I, X, he, xe) {
      {
        var ce = W(p);
        if (!ce) {
          var se = "";
          (p === void 0 || typeof p == "object" && p !== null && Object.keys(p).length === 0) && (se += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var We = Je();
          We ? se += We : se += Xe();
          var Ce;
          p === null ? Ce = "null" : Se(p) ? Ce = "array" : p !== void 0 && p.$$typeof === n ? (Ce = "<" + (N(p.type) || "Unknown") + " />", se = " Did you accidentally export a JSX literal instead of a component?") : Ce = typeof p, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ce, se);
        }
        var Te = Ze(p, R, I, he, xe);
        if (Te == null)
          return Te;
        if (ce) {
          var Oe = R.children;
          if (Oe !== void 0)
            if (X)
              if (Se(Oe)) {
                for (var Mn = 0; Mn < Oe.length; Mn++)
                  jn(Oe[Mn], p);
                Object.freeze && Object.freeze(Oe);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              jn(Oe, p);
        }
        if (_e.call(R, "key")) {
          var vn = N(p), Qe = Object.keys(R).filter(function(y0) {
            return y0 !== "key";
          }), wi = Qe.length > 0 ? "{key: someKey, " + Qe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ar[vn + wi]) {
            var v0 = Qe.length > 0 ? "{" + Qe.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, wi, vn, v0, vn), ar[vn + wi] = !0;
          }
        }
        return p === r ? Qt(Te) : Jt(Te), Te;
      }
    }
    function ze(p, R, I) {
      return Wr(p, R, I, !0);
    }
    function $r(p, R, I) {
      return Wr(p, R, I, !1);
    }
    var Si = $r, Ae = ze;
    ur.Fragment = r, ur.jsx = Si, ur.jsxs = Ae;
  }()), ur;
}
var Va;
function P0() {
  return Va || (Va = 1, process.env.NODE_ENV === "production" ? Xr.exports = R0() : Xr.exports = k0()), Xr.exports;
}
var V = P0(), nt = function() {
  return nt = Object.assign || function(n) {
    for (var t, r = 1, o = arguments.length; r < o; r++) {
      t = arguments[r];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
    }
    return n;
  }, nt.apply(this, arguments);
};
function Hn(e, n, t) {
  if (t || arguments.length === 2) for (var r = 0, o = n.length, i; r < o; r++)
    (i || !(r in n)) && (i || (i = Array.prototype.slice.call(n, 0, r)), i[r] = n[r]);
  return e.concat(i || Array.prototype.slice.call(n));
}
function I0(e) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return n[t] === void 0 && (n[t] = e(t)), n[t];
  };
}
var N0 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, j0 = /* @__PURE__ */ I0(
  function(e) {
    return N0.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), we = "-ms-", Rr = "-moz-", ve = "-webkit-", Rl = "comm", Zo = "rule", ca = "decl", M0 = "@import", kl = "@keyframes", L0 = "@layer", Pl = Math.abs, la = String.fromCharCode, Xi = Object.assign;
function D0(e, n) {
  return Ue(e, 0) ^ 45 ? (((n << 2 ^ Ue(e, 0)) << 2 ^ Ue(e, 1)) << 2 ^ Ue(e, 2)) << 2 ^ Ue(e, 3) : 0;
}
function Il(e) {
  return e.trim();
}
function Xt(e, n) {
  return (e = n.exec(e)) ? e[0] : e;
}
function ie(e, n, t) {
  return e.replace(n, t);
}
function uo(e, n, t) {
  return e.indexOf(n, t);
}
function Ue(e, n) {
  return e.charCodeAt(n) | 0;
}
function Un(e, n, t) {
  return e.slice(n, t);
}
function Lt(e) {
  return e.length;
}
function Nl(e) {
  return e.length;
}
function Tr(e, n) {
  return n.push(e), e;
}
function B0(e, n) {
  return e.map(n).join("");
}
function Ha(e, n) {
  return e.filter(function(t) {
    return !Xt(t, n);
  });
}
var Jo = 1, qn = 1, jl = 0, ht = 0, De = 0, Jn = "";
function Qo(e, n, t, r, o, i, s, a) {
  return { value: e, root: n, parent: t, type: r, props: o, children: i, line: Jo, column: qn, length: s, return: "", siblings: a };
}
function en(e, n) {
  return Xi(Qo("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, n);
}
function Ln(e) {
  for (; e.root; )
    e = en(e.root, { children: [e] });
  Tr(e, e.siblings);
}
function F0() {
  return De;
}
function z0() {
  return De = ht > 0 ? Ue(Jn, --ht) : 0, qn--, De === 10 && (qn = 1, Jo--), De;
}
function bt() {
  return De = ht < jl ? Ue(Jn, ht++) : 0, qn++, De === 10 && (qn = 1, Jo++), De;
}
function _n() {
  return Ue(Jn, ht);
}
function fo() {
  return ht;
}
function ei(e, n) {
  return Un(Jn, e, n);
}
function Yi(e) {
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
function V0(e) {
  return Jo = qn = 1, jl = Lt(Jn = e), ht = 0, [];
}
function H0(e) {
  return Jn = "", e;
}
function Ei(e) {
  return Il(ei(ht - 1, Gi(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function U0(e) {
  for (; (De = _n()) && De < 33; )
    bt();
  return Yi(e) > 2 || Yi(De) > 3 ? "" : " ";
}
function q0(e, n) {
  for (; --n && bt() && !(De < 48 || De > 102 || De > 57 && De < 65 || De > 70 && De < 97); )
    ;
  return ei(e, fo() + (n < 6 && _n() == 32 && bt() == 32));
}
function Gi(e) {
  for (; bt(); )
    switch (De) {
      // ] ) " '
      case e:
        return ht;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Gi(De);
        break;
      // (
      case 40:
        e === 41 && Gi(e);
        break;
      // \
      case 92:
        bt();
        break;
    }
  return ht;
}
function W0(e, n) {
  for (; bt() && e + De !== 57; )
    if (e + De === 84 && _n() === 47)
      break;
  return "/*" + ei(n, ht - 1) + "*" + la(e === 47 ? e : bt());
}
function $0(e) {
  for (; !Yi(_n()); )
    bt();
  return ei(e, ht);
}
function X0(e) {
  return H0(ho("", null, null, null, [""], e = V0(e), 0, [0], e));
}
function ho(e, n, t, r, o, i, s, a, c) {
  for (var l = 0, u = 0, d = s, f = 0, v = 0, m = 0, x = 1, h = 1, S = 1, b = 0, g = "", C = o, y = i, A = r, E = g; h; )
    switch (m = b, b = bt()) {
      // (
      case 40:
        if (m != 108 && Ue(E, d - 1) == 58) {
          uo(E += ie(Ei(b), "&", "&\f"), "&\f", Pl(l ? a[l - 1] : 0)) != -1 && (S = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        E += Ei(b);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        E += U0(m);
        break;
      // \
      case 92:
        E += q0(fo() - 1, 7);
        continue;
      // /
      case 47:
        switch (_n()) {
          case 42:
          case 47:
            Tr(Y0(W0(bt(), fo()), n, t, c), c);
            break;
          default:
            E += "/";
        }
        break;
      // {
      case 123 * x:
        a[l++] = Lt(E) * S;
      // } ; \0
      case 125 * x:
      case 59:
      case 0:
        switch (b) {
          // \0 }
          case 0:
          case 125:
            h = 0;
          // ;
          case 59 + u:
            S == -1 && (E = ie(E, /\f/g, "")), v > 0 && Lt(E) - d && Tr(v > 32 ? qa(E + ";", r, t, d - 1, c) : qa(ie(E, " ", "") + ";", r, t, d - 2, c), c);
            break;
          // @ ;
          case 59:
            E += ";";
          // { rule/at-rule
          default:
            if (Tr(A = Ua(E, n, t, l, u, o, a, g, C = [], y = [], d, i), i), b === 123)
              if (u === 0)
                ho(E, n, A, A, C, i, d, a, y);
              else
                switch (f === 99 && Ue(E, 3) === 110 ? 100 : f) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ho(e, A, A, r && Tr(Ua(e, A, A, 0, 0, o, a, g, o, C = [], d, y), y), o, y, d, a, r ? C : y);
                    break;
                  default:
                    ho(E, A, A, A, [""], y, 0, a, y);
                }
        }
        l = u = v = 0, x = S = 1, g = E = "", d = s;
        break;
      // :
      case 58:
        d = 1 + Lt(E), v = m;
      default:
        if (x < 1) {
          if (b == 123)
            --x;
          else if (b == 125 && x++ == 0 && z0() == 125)
            continue;
        }
        switch (E += la(b), b * x) {
          // &
          case 38:
            S = u > 0 ? 1 : (E += "\f", -1);
            break;
          // ,
          case 44:
            a[l++] = (Lt(E) - 1) * S, S = 1;
            break;
          // @
          case 64:
            _n() === 45 && (E += Ei(bt())), f = _n(), u = d = Lt(g = E += $0(fo())), b++;
            break;
          // -
          case 45:
            m === 45 && Lt(E) == 2 && (x = 0);
        }
    }
  return i;
}
function Ua(e, n, t, r, o, i, s, a, c, l, u, d) {
  for (var f = o - 1, v = o === 0 ? i : [""], m = Nl(v), x = 0, h = 0, S = 0; x < r; ++x)
    for (var b = 0, g = Un(e, f + 1, f = Pl(h = s[x])), C = e; b < m; ++b)
      (C = Il(h > 0 ? v[b] + " " + g : ie(g, /&\f/g, v[b]))) && (c[S++] = C);
  return Qo(e, n, t, o === 0 ? Zo : a, c, l, u, d);
}
function Y0(e, n, t, r) {
  return Qo(e, n, t, Rl, la(F0()), Un(e, 2, -2), 0, r);
}
function qa(e, n, t, r, o) {
  return Qo(e, n, t, ca, Un(e, 0, r), Un(e, r + 1, -1), r, o);
}
function Ml(e, n, t) {
  switch (D0(e, n)) {
    // color-adjust
    case 5103:
      return ve + "print-" + e + e;
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
      return ve + e + e;
    // tab-size
    case 4789:
      return Rr + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ve + e + Rr + e + we + e + e;
    // writing-mode
    case 5936:
      switch (Ue(e, n + 11)) {
        // vertical-l(r)
        case 114:
          return ve + e + we + ie(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return ve + e + we + ie(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return ve + e + we + ie(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return ve + e + we + e + e;
    // order
    case 6165:
      return ve + e + we + "flex-" + e + e;
    // align-items
    case 5187:
      return ve + e + ie(e, /(\w+).+(:[^]+)/, ve + "box-$1$2" + we + "flex-$1$2") + e;
    // align-self
    case 5443:
      return ve + e + we + "flex-item-" + ie(e, /flex-|-self/g, "") + (Xt(e, /flex-|baseline/) ? "" : we + "grid-row-" + ie(e, /flex-|-self/g, "")) + e;
    // align-content
    case 4675:
      return ve + e + we + "flex-line-pack" + ie(e, /align-content|flex-|-self/g, "") + e;
    // flex-shrink
    case 5548:
      return ve + e + we + ie(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return ve + e + we + ie(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return ve + "box-" + ie(e, "-grow", "") + ve + e + we + ie(e, "grow", "positive") + e;
    // transition
    case 4554:
      return ve + ie(e, /([^-])(transform)/g, "$1" + ve + "$2") + e;
    // cursor
    case 6187:
      return ie(ie(ie(e, /(zoom-|grab)/, ve + "$1"), /(image-set)/, ve + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return ie(e, /(image-set\([^]*)/, ve + "$1$`$1");
    // justify-content
    case 4968:
      return ie(ie(e, /(.+:)(flex-)?(.*)/, ve + "box-pack:$3" + we + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ve + e + e;
    // justify-self
    case 4200:
      if (!Xt(e, /flex-|baseline/)) return we + "grid-column-align" + Un(e, n) + e;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return we + ie(e, "template-", "") + e;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return t && t.some(function(r, o) {
        return n = o, Xt(r.props, /grid-\w+-end/);
      }) ? ~uo(e + (t = t[n].value), "span", 0) ? e : we + ie(e, "-start", "") + e + we + "grid-row-span:" + (~uo(t, "span", 0) ? Xt(t, /\d+/) : +Xt(t, /\d+/) - +Xt(e, /\d+/)) + ";" : we + ie(e, "-start", "") + e;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return t && t.some(function(r) {
        return Xt(r.props, /grid-\w+-start/);
      }) ? e : we + ie(ie(e, "-end", "-span"), "span ", "") + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ie(e, /(.+)-inline(.+)/, ve + "$1$2") + e;
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
      if (Lt(e) - 1 - n > 6)
        switch (Ue(e, n + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (Ue(e, n + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return ie(e, /(.+:)(.+)-([^]+)/, "$1" + ve + "$2-$3$1" + Rr + (Ue(e, n + 3) == 108 ? "$3" : "$2-$3")) + e;
          // (s)tretch
          case 115:
            return ~uo(e, "stretch", 0) ? Ml(ie(e, "stretch", "fill-available"), n, t) + e : e;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return ie(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, s, a, c, l) {
        return we + o + ":" + i + l + (s ? we + o + "-span:" + (a ? c : +c - +i) + l : "") + e;
      });
    // position: sticky
    case 4949:
      if (Ue(e, n + 6) === 121)
        return ie(e, ":", ":" + ve) + e;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (Ue(e, Ue(e, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return ie(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + ve + (Ue(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ve + "$2$3$1" + we + "$2box$3") + e;
        // (inline-)?gri(d)
        case 100:
          return ie(e, ":", ":" + we) + e;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return ie(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function Po(e, n) {
  for (var t = "", r = 0; r < e.length; r++)
    t += n(e[r], r, e, n) || "";
  return t;
}
function G0(e, n, t, r) {
  switch (e.type) {
    case L0:
      if (e.children.length) break;
    case M0:
    case ca:
      return e.return = e.return || e.value;
    case Rl:
      return "";
    case kl:
      return e.return = e.value + "{" + Po(e.children, r) + "}";
    case Zo:
      if (!Lt(e.value = e.props.join(","))) return "";
  }
  return Lt(t = Po(e.children, r)) ? e.return = e.value + "{" + t + "}" : "";
}
function K0(e) {
  var n = Nl(e);
  return function(t, r, o, i) {
    for (var s = "", a = 0; a < n; a++)
      s += e[a](t, r, o, i) || "";
    return s;
  };
}
function Z0(e) {
  return function(n) {
    n.root || (n = n.return) && e(n);
  };
}
function J0(e, n, t, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case ca:
        e.return = Ml(e.value, e.length, t);
        return;
      case kl:
        return Po([en(e, { value: ie(e.value, "@", "@" + ve) })], r);
      case Zo:
        if (e.length)
          return B0(t = e.props, function(o) {
            switch (Xt(o, r = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                Ln(en(e, { props: [ie(o, /:(read-\w+)/, ":" + Rr + "$1")] })), Ln(en(e, { props: [o] })), Xi(e, { props: Ha(t, r) });
                break;
              // :placeholder
              case "::placeholder":
                Ln(en(e, { props: [ie(o, /:(plac\w+)/, ":" + ve + "input-$1")] })), Ln(en(e, { props: [ie(o, /:(plac\w+)/, ":" + Rr + "$1")] })), Ln(en(e, { props: [ie(o, /:(plac\w+)/, we + "input-$1")] })), Ln(en(e, { props: [o] })), Xi(e, { props: Ha(t, r) });
                break;
            }
            return "";
          });
    }
}
var Q0 = {
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
}, kn = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Ll = "active", Dl = "data-styled-version", ti = "6.1.18", ua = `/*!sc*/
`, Io = typeof window < "u" && typeof document < "u", ed = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Wa = /invalid hook call/i, Yr = /* @__PURE__ */ new Set(), td = function(e, n) {
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
        Wa.test(s) ? (i = !1, Yr.delete(r)) : o.apply(void 0, Hn([s], a, !1));
      }, Ve(), i && !Yr.has(r) && (console.warn(r), Yr.add(r));
    } catch (s) {
      Wa.test(s.message) && Yr.delete(r);
    } finally {
      console.error = o;
    }
  }
}, ni = Object.freeze([]), Wn = Object.freeze({});
function nd(e, n, t) {
  return t === void 0 && (t = Wn), e.theme !== t.theme && e.theme || n || t.theme;
}
var Ki = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), rd = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, od = /(^-|-$)/g;
function $a(e) {
  return e.replace(rd, "-").replace(od, "");
}
var id = /(a)(d)/gi, Gr = 52, Xa = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Zi(e) {
  var n, t = "";
  for (n = Math.abs(e); n > Gr; n = n / Gr | 0) t = Xa(n % Gr) + t;
  return (Xa(n % Gr) + t).replace(id, "$1-$2");
}
var _i, Bl = 5381, bn = function(e, n) {
  for (var t = n.length; t; ) e = 33 * e ^ n.charCodeAt(--t);
  return e;
}, Fl = function(e) {
  return bn(Bl, e);
};
function sd(e) {
  return Zi(Fl(e) >>> 0);
}
function zl(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Ci(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Vl = typeof Symbol == "function" && Symbol.for, Hl = Vl ? Symbol.for("react.memo") : 60115, ad = Vl ? Symbol.for("react.forward_ref") : 60112, cd = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, ld = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Ul = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, ud = ((_i = {})[ad] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, _i[Hl] = Ul, _i);
function Ya(e) {
  return ("type" in (n = e) && n.type.$$typeof) === Hl ? Ul : "$$typeof" in e ? ud[e.$$typeof] : cd;
  var n;
}
var fd = Object.defineProperty, dd = Object.getOwnPropertyNames, Ga = Object.getOwnPropertySymbols, hd = Object.getOwnPropertyDescriptor, pd = Object.getPrototypeOf, Ka = Object.prototype;
function ql(e, n, t) {
  if (typeof n != "string") {
    if (Ka) {
      var r = pd(n);
      r && r !== Ka && ql(e, r, t);
    }
    var o = dd(n);
    Ga && (o = o.concat(Ga(n)));
    for (var i = Ya(e), s = Ya(n), a = 0; a < o.length; ++a) {
      var c = o[a];
      if (!(c in ld || t && t[c] || s && c in s || i && c in i)) {
        var l = hd(n, c);
        try {
          fd(e, c, l);
        } catch {
        }
      }
    }
  }
  return e;
}
function $n(e) {
  return typeof e == "function";
}
function fa(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function wn(e, n) {
  return e && n ? "".concat(e, " ").concat(n) : e || n || "";
}
function Za(e, n) {
  if (e.length === 0) return "";
  for (var t = e[0], r = 1; r < e.length; r++) t += e[r];
  return t;
}
function Xn(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Ji(e, n, t) {
  if (t === void 0 && (t = !1), !t && !Xn(e) && !Array.isArray(e)) return n;
  if (Array.isArray(n)) for (var r = 0; r < n.length; r++) e[r] = Ji(e[r], n[r]);
  else if (Xn(n)) for (var r in n) e[r] = Ji(e[r], n[r]);
  return e;
}
function da(e, n) {
  Object.defineProperty(e, "toString", { value: n });
}
var xd = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function md() {
  for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
  for (var t = e[0], r = [], o = 1, i = e.length; o < i; o += 1) r.push(e[o]);
  return r.forEach(function(s) {
    t = t.replace(/%[a-z]/, s);
  }), t;
}
function Qn(e) {
  for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(n.length > 0 ? " Args: ".concat(n.join(", ")) : "")) : new Error(md.apply(void 0, Hn([xd[e]], n, !1)).trim());
}
var gd = function() {
  function e(n) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = n;
  }
  return e.prototype.indexOfGroup = function(n) {
    for (var t = 0, r = 0; r < n; r++) t += this.groupSizes[r];
    return t;
  }, e.prototype.insertRules = function(n, t) {
    if (n >= this.groupSizes.length) {
      for (var r = this.groupSizes, o = r.length, i = o; n >= i; ) if ((i <<= 1) < 0) throw Qn(16, "".concat(n));
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
    for (var r = this.groupSizes[n], o = this.indexOfGroup(n), i = o + r, s = o; s < i; s++) t += "".concat(this.tag.getRule(s)).concat(ua);
    return t;
  }, e;
}(), vd = 1 << 30, po = /* @__PURE__ */ new Map(), No = /* @__PURE__ */ new Map(), xo = 1, Kr = function(e) {
  if (po.has(e)) return po.get(e);
  for (; No.has(xo); ) xo++;
  var n = xo++;
  if (process.env.NODE_ENV !== "production" && ((0 | n) < 0 || n > vd)) throw Qn(16, "".concat(n));
  return po.set(e, n), No.set(n, e), n;
}, yd = function(e, n) {
  xo = n + 1, po.set(e, n), No.set(n, e);
}, bd = "style[".concat(kn, "][").concat(Dl, '="').concat(ti, '"]'), Sd = new RegExp("^".concat(kn, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), wd = function(e, n, t) {
  for (var r, o = t.split(","), i = 0, s = o.length; i < s; i++) (r = o[i]) && e.registerName(n, r);
}, Ed = function(e, n) {
  for (var t, r = ((t = n.textContent) !== null && t !== void 0 ? t : "").split(ua), o = [], i = 0, s = r.length; i < s; i++) {
    var a = r[i].trim();
    if (a) {
      var c = a.match(Sd);
      if (c) {
        var l = 0 | parseInt(c[1], 10), u = c[2];
        l !== 0 && (yd(u, l), wd(e, u, c[3]), e.getTag().insertRules(l, o)), o.length = 0;
      } else o.push(a);
    }
  }
}, Ja = function(e) {
  for (var n = document.querySelectorAll(bd), t = 0, r = n.length; t < r; t++) {
    var o = n[t];
    o && o.getAttribute(kn) !== Ll && (Ed(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function _d() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Wl = function(e) {
  var n = document.head, t = e || n, r = document.createElement("style"), o = function(a) {
    var c = Array.from(a.querySelectorAll("style[".concat(kn, "]")));
    return c[c.length - 1];
  }(t), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(kn, Ll), r.setAttribute(Dl, ti);
  var s = _d();
  return s && r.setAttribute("nonce", s), t.insertBefore(r, i), r;
}, Cd = function() {
  function e(n) {
    this.element = Wl(n), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
        var s = r[o];
        if (s.ownerNode === t) return s;
      }
      throw Qn(17);
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
}(), Ad = function() {
  function e(n) {
    this.element = Wl(n), this.nodes = this.element.childNodes, this.length = 0;
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
}(), Td = function() {
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
}(), Qa = Io, Od = { isServer: !Io, useCSSOMInjection: !ed }, $l = function() {
  function e(n, t, r) {
    n === void 0 && (n = Wn), t === void 0 && (t = {});
    var o = this;
    this.options = nt(nt({}, Od), n), this.gs = t, this.names = new Map(r), this.server = !!n.isServer, !this.server && Io && Qa && (Qa = !1, Ja(this)), da(this, function() {
      return function(i) {
        for (var s = i.getTag(), a = s.length, c = "", l = function(d) {
          var f = function(S) {
            return No.get(S);
          }(d);
          if (f === void 0) return "continue";
          var v = i.names.get(f), m = s.getGroup(d);
          if (v === void 0 || !v.size || m.length === 0) return "continue";
          var x = "".concat(kn, ".g").concat(d, '[id="').concat(f, '"]'), h = "";
          v !== void 0 && v.forEach(function(S) {
            S.length > 0 && (h += "".concat(S, ","));
          }), c += "".concat(m).concat(x, '{content:"').concat(h, '"}').concat(ua);
        }, u = 0; u < a; u++) l(u);
        return c;
      }(o);
    });
  }
  return e.registerId = function(n) {
    return Kr(n);
  }, e.prototype.rehydrate = function() {
    !this.server && Io && Ja(this);
  }, e.prototype.reconstructWithOptions = function(n, t) {
    return t === void 0 && (t = !0), new e(nt(nt({}, this.options), n), this.gs, t && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(n) {
    return this.gs[n] = (this.gs[n] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (n = function(t) {
      var r = t.useCSSOMInjection, o = t.target;
      return t.isServer ? new Td(o) : r ? new Cd(o) : new Ad(o);
    }(this.options), new gd(n)));
    var n;
  }, e.prototype.hasNameForId = function(n, t) {
    return this.names.has(n) && this.names.get(n).has(t);
  }, e.prototype.registerName = function(n, t) {
    if (Kr(n), this.names.has(n)) this.names.get(n).add(t);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(t), this.names.set(n, r);
    }
  }, e.prototype.insertRules = function(n, t, r) {
    this.registerName(n, t), this.getTag().insertRules(Kr(n), r);
  }, e.prototype.clearNames = function(n) {
    this.names.has(n) && this.names.get(n).clear();
  }, e.prototype.clearRules = function(n) {
    this.getTag().clearGroup(Kr(n)), this.clearNames(n);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), Rd = /&/g, kd = /^\s*\/\/.*$/gm;
function Xl(e, n) {
  return e.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(n, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(n, " ")), t.props = t.props.map(function(r) {
      return "".concat(n, " ").concat(r);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = Xl(t.children, n)), t;
  });
}
function Pd(e) {
  var n, t, r, o = Wn, i = o.options, s = i === void 0 ? Wn : i, a = o.plugins, c = a === void 0 ? ni : a, l = function(f, v, m) {
    return m.startsWith(t) && m.endsWith(t) && m.replaceAll(t, "").length > 0 ? ".".concat(n) : f;
  }, u = c.slice();
  u.push(function(f) {
    f.type === Zo && f.value.includes("&") && (f.props[0] = f.props[0].replace(Rd, t).replace(r, l));
  }), s.prefix && u.push(J0), u.push(G0);
  var d = function(f, v, m, x) {
    v === void 0 && (v = ""), m === void 0 && (m = ""), x === void 0 && (x = "&"), n = x, t = v, r = new RegExp("\\".concat(t, "\\b"), "g");
    var h = f.replace(kd, ""), S = X0(m || v ? "".concat(m, " ").concat(v, " { ").concat(h, " }") : h);
    s.namespace && (S = Xl(S, s.namespace));
    var b = [];
    return Po(S, K0(u.concat(Z0(function(g) {
      return b.push(g);
    })))), b;
  };
  return d.hash = c.length ? c.reduce(function(f, v) {
    return v.name || Qn(15), bn(f, v.name);
  }, Bl).toString() : "", d;
}
var Id = new $l(), Qi = Pd(), Yl = je.createContext({ shouldForwardProp: void 0, styleSheet: Id, stylis: Qi });
Yl.Consumer;
je.createContext(void 0);
function ec() {
  return sn(Yl);
}
var tc = function() {
  function e(n, t) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Qi);
      var s = r.name + i.hash;
      o.hasNameForId(r.id, s) || o.insertRules(r.id, s, i(r.rules, s, "@keyframes"));
    }, this.name = n, this.id = "sc-keyframes-".concat(n), this.rules = t, da(this, function() {
      throw Qn(12, String(r.name));
    });
  }
  return e.prototype.getName = function(n) {
    return n === void 0 && (n = Qi), this.name + n.hash;
  }, e;
}(), Nd = function(e) {
  return e >= "A" && e <= "Z";
};
function nc(e) {
  for (var n = "", t = 0; t < e.length; t++) {
    var r = e[t];
    if (t === 1 && r === "-" && e[0] === "-") return e;
    Nd(r) ? n += "-" + r.toLowerCase() : n += r;
  }
  return n.startsWith("ms-") ? "-" + n : n;
}
var Gl = function(e) {
  return e == null || e === !1 || e === "";
}, Kl = function(e) {
  var n, t, r = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !Gl(i) && (Array.isArray(i) && i.isCss || $n(i) ? r.push("".concat(nc(o), ":"), i, ";") : Xn(i) ? r.push.apply(r, Hn(Hn(["".concat(o, " {")], Kl(i), !1), ["}"], !1)) : r.push("".concat(nc(o), ": ").concat((n = o, (t = i) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || t === 0 || n in Q0 || n.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return r;
};
function Cn(e, n, t, r) {
  if (Gl(e)) return [];
  if (fa(e)) return [".".concat(e.styledComponentId)];
  if ($n(e)) {
    if (!$n(i = e) || i.prototype && i.prototype.isReactComponent || !n) return [e];
    var o = e(n);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof tc || Xn(o) || o === null || console.error("".concat(zl(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Cn(o, n, t, r);
  }
  var i;
  return e instanceof tc ? t ? (e.inject(t, r), [e.getName(r)]) : [e] : Xn(e) ? Kl(e) : Array.isArray(e) ? Array.prototype.concat.apply(ni, e.map(function(s) {
    return Cn(s, n, t, r);
  })) : [e.toString()];
}
function jd(e) {
  for (var n = 0; n < e.length; n += 1) {
    var t = e[n];
    if ($n(t) && !fa(t)) return !1;
  }
  return !0;
}
var Md = Fl(ti), Ld = function() {
  function e(n, t, r) {
    this.rules = n, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && jd(n), this.componentId = t, this.baseHash = bn(Md, t), this.baseStyle = r, $l.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(n, t, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(n, t, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) o = wn(o, this.staticRulesId);
    else {
      var i = Za(Cn(this.rules, n, t, r)), s = Zi(bn(this.baseHash, i) >>> 0);
      if (!t.hasNameForId(this.componentId, s)) {
        var a = r(i, ".".concat(s), void 0, this.componentId);
        t.insertRules(this.componentId, s, a);
      }
      o = wn(o, s), this.staticRulesId = s;
    }
    else {
      for (var c = bn(this.baseHash, r.hash), l = "", u = 0; u < this.rules.length; u++) {
        var d = this.rules[u];
        if (typeof d == "string") l += d, process.env.NODE_ENV !== "production" && (c = bn(c, d));
        else if (d) {
          var f = Za(Cn(d, n, t, r));
          c = bn(c, f + u), l += f;
        }
      }
      if (l) {
        var v = Zi(c >>> 0);
        t.hasNameForId(this.componentId, v) || t.insertRules(this.componentId, v, r(l, ".".concat(v), void 0, this.componentId)), o = wn(o, v);
      }
    }
    return o;
  }, e;
}(), Zl = je.createContext(void 0);
Zl.Consumer;
var Ai = {}, rc = /* @__PURE__ */ new Set();
function Dd(e, n, t) {
  var r = fa(e), o = e, i = !Ci(e), s = n.attrs, a = s === void 0 ? ni : s, c = n.componentId, l = c === void 0 ? function(C, y) {
    var A = typeof C != "string" ? "sc" : $a(C);
    Ai[A] = (Ai[A] || 0) + 1;
    var E = "".concat(A, "-").concat(sd(ti + A + Ai[A]));
    return y ? "".concat(y, "-").concat(E) : E;
  }(n.displayName, n.parentComponentId) : c, u = n.displayName, d = u === void 0 ? function(C) {
    return Ci(C) ? "styled.".concat(C) : "Styled(".concat(zl(C), ")");
  }(e) : u, f = n.displayName && n.componentId ? "".concat($a(n.displayName), "-").concat(n.componentId) : n.componentId || l, v = r && o.attrs ? o.attrs.concat(a).filter(Boolean) : a, m = n.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var x = o.shouldForwardProp;
    if (n.shouldForwardProp) {
      var h = n.shouldForwardProp;
      m = function(C, y) {
        return x(C, y) && h(C, y);
      };
    } else m = x;
  }
  var S = new Ld(t, f, r ? o.componentStyle : void 0);
  function b(C, y) {
    return function(A, E, P) {
      var D = A.attrs, W = A.componentStyle, ee = A.defaultProps, Y = A.foldedComponentIds, N = A.styledComponentId, z = A.target, q = je.useContext(Zl), $ = ec(), J = A.shouldForwardProp || $.shouldForwardProp;
      process.env.NODE_ENV !== "production" && Da(N);
      var G = nd(E, q, ee) || Wn, Z = function(le, de, pe) {
        for (var k, U = nt(nt({}, de), { className: void 0, theme: pe }), j = 0; j < le.length; j += 1) {
          var B = $n(k = le[j]) ? k(U) : k;
          for (var T in B) U[T] = T === "className" ? wn(U[T], B[T]) : T === "style" ? nt(nt({}, U[T]), B[T]) : B[T];
        }
        return de.className && (U.className = wn(U.className, de.className)), U;
      }(D, E, G), re = Z.as || z, oe = {};
      for (var K in Z) Z[K] === void 0 || K[0] === "$" || K === "as" || K === "theme" && Z.theme === G || (K === "forwardedAs" ? oe.as = Z.forwardedAs : J && !J(K, re) || (oe[K] = Z[K], J || process.env.NODE_ENV !== "development" || j0(K) || rc.has(K) || !Ki.has(re) || (rc.add(K), console.warn('styled-components: it looks like an unknown prop "'.concat(K, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var te = function(le, de) {
        var pe = ec(), k = le.generateAndInjectStyles(de, pe.styleSheet, pe.stylis);
        return process.env.NODE_ENV !== "production" && Da(k), k;
      }(W, Z);
      process.env.NODE_ENV !== "production" && A.warnTooManyClasses && A.warnTooManyClasses(te);
      var fe = wn(Y, N);
      return te && (fe += " " + te), Z.className && (fe += " " + Z.className), oe[Ci(re) && !Ki.has(re) ? "class" : "className"] = fe, P && (oe.ref = P), w0(re, oe);
    }(g, C, y);
  }
  b.displayName = d;
  var g = je.forwardRef(b);
  return g.attrs = v, g.componentStyle = S, g.displayName = d, g.shouldForwardProp = m, g.foldedComponentIds = r ? wn(o.foldedComponentIds, o.styledComponentId) : "", g.styledComponentId = f, g.target = r ? o.target : e, Object.defineProperty(g, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(C) {
    this._foldedDefaultProps = r ? function(y) {
      for (var A = [], E = 1; E < arguments.length; E++) A[E - 1] = arguments[E];
      for (var P = 0, D = A; P < D.length; P++) Ji(y, D[P], !0);
      return y;
    }({}, o.defaultProps, C) : C;
  } }), process.env.NODE_ENV !== "production" && (td(d, f), g.warnTooManyClasses = /* @__PURE__ */ function(C, y) {
    var A = {}, E = !1;
    return function(P) {
      if (!E && (A[P] = !0, Object.keys(A).length >= 200)) {
        var D = y ? ' with the id of "'.concat(y, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(C).concat(D, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), E = !0, A = {};
      }
    };
  }(d, f)), da(g, function() {
    return ".".concat(g.styledComponentId);
  }), i && ql(g, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), g;
}
function oc(e, n) {
  for (var t = [e[0]], r = 0, o = n.length; r < o; r += 1) t.push(n[r], e[r + 1]);
  return t;
}
var ic = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function Bd(e) {
  for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
  if ($n(e) || Xn(e)) return ic(Cn(oc(ni, Hn([e], n, !0))));
  var r = e;
  return n.length === 0 && r.length === 1 && typeof r[0] == "string" ? Cn(r) : ic(Cn(oc(r, n)));
}
function es(e, n, t) {
  if (t === void 0 && (t = Wn), !n) throw Qn(1, n);
  var r = function(o) {
    for (var i = [], s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
    return e(n, t, Bd.apply(void 0, Hn([o], i, !1)));
  };
  return r.attrs = function(o) {
    return es(e, n, nt(nt({}, t), { attrs: Array.prototype.concat(t.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return es(e, n, nt(nt({}, t), o));
  }, r;
}
var Jl = function(e) {
  return es(Dd, e);
}, _t = Jl;
Ki.forEach(function(e) {
  _t[e] = Jl(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Zr = "__sc-".concat(kn, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[Zr] || (window[Zr] = 0), window[Zr] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Zr] += 1);
function jo() {
  const e = ["div", "2015524RtGzfw", 'rn this")(', "trace", "3433612cgyKCt", "{}.constru", "warn", "apply", "console", "return (fu", "canvas", "10717424zMNSZF", "3CGzeKh", "log", "span", "info", "__proto__", "2177016OEIVgM", "(((.+)+)+)", "bind", "5452345IEKyZw", 'ctor("retu', "exception", "constructo", "909529HrvhvF", "prototype", "nction() ", "toString", "table", "3022136ELhsen", "error", "search", "length"];
  return jo = function() {
    return e;
  }, jo();
}
const zr = cn;
(function(e, n) {
  const t = cn, r = e();
  for (; ; )
    try {
      if (parseInt(t(178)) / 1 + -parseInt(t(155)) / 2 * (-parseInt(t(166)) / 3) + -parseInt(t(150)) / 4 + -parseInt(t(174)) / 5 + -parseInt(t(171)) / 6 + -parseInt(t(158)) / 7 + parseInt(t(165)) / 8 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(jo, 557614);
const Fd = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = cn;
      if (t) {
        const i = t[o(161)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), ts = Fd(void 0, function() {
  const e = cn;
  return ts[e(148)]()[e(152)](e(172) + "+$")[e(148)]()[e(177) + "r"](ts)[e(152)](e(172) + "+$");
});
ts();
const fr = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = cn;
      if (t) {
        const i = t[o(161)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), zd = fr(void 0, function() {
  const e = cn;
  let n;
  try {
    n = Function(e(163) + e(147) + (e(159) + e(175) + e(156) + " )") + ");")();
  } catch {
    n = window;
  }
  const t = n[e(162)] = n[e(162)] || {}, r = [e(167), e(160), e(169), e(151), e(176), e(149), e(157)];
  for (let o = 0; o < r[e(153)]; o++) {
    const i = fr[e(177) + "r"][e(146)][e(173)](fr), s = r[o], a = t[s] || i;
    i[e(170)] = fr[e(173)](fr), i[e(148)] = a[e(148)][e(173)](a), t[s] = i;
  }
});
zd();
const Vd = _t[zr(154)]`
  flex-direction: column;
  border-radius: 15px;
  border: 3px solid #a0beeb;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
  justify-items: center;
  align-items: center;
`, Hd = _t[zr(154)]`
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
`, Ud = _t[zr(164)]`
  border-radius: 7px;
  display: inline;
  padding: 0;
  &:focus-visible {
    outline: none;
  }
`;
function cn(e, n) {
  const t = jo();
  return cn = function(r, o) {
    return r = r - 146, t[r];
  }, cn(e, n);
}
const qd = _t[zr(168)]`
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
`, Wd = _t[zr(154)]`
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
const mo = /* @__PURE__ */ Object.create(null);
Object.keys(Bt).forEach((e) => {
  mo[Bt[e]] = e;
});
const ns = { type: "error", data: "parser error" }, Ql = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", eu = typeof ArrayBuffer == "function", tu = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer, ha = ({ type: e, data: n }, t, r) => Ql && n instanceof Blob ? t ? r(n) : sc(n, r) : eu && (n instanceof ArrayBuffer || tu(n)) ? t ? r(n) : sc(new Blob([n]), r) : r(Bt[e] + (n || "")), sc = (e, n) => {
  const t = new FileReader();
  return t.onload = function() {
    const r = t.result.split(",")[1];
    n("b" + (r || ""));
  }, t.readAsDataURL(e);
};
function ac(e) {
  return e instanceof Uint8Array ? e : e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
let Ti;
function $d(e, n) {
  if (Ql && e.data instanceof Blob)
    return e.data.arrayBuffer().then(ac).then(n);
  if (eu && (e.data instanceof ArrayBuffer || tu(e.data)))
    return n(ac(e.data));
  ha(e, !1, (t) => {
    Ti || (Ti = new TextEncoder()), n(Ti.encode(t));
  });
}
const cc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Or = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < cc.length; e++)
  Or[cc.charCodeAt(e)] = e;
const Xd = (e) => {
  let n = e.length * 0.75, t = e.length, r, o = 0, i, s, a, c;
  e[e.length - 1] === "=" && (n--, e[e.length - 2] === "=" && n--);
  const l = new ArrayBuffer(n), u = new Uint8Array(l);
  for (r = 0; r < t; r += 4)
    i = Or[e.charCodeAt(r)], s = Or[e.charCodeAt(r + 1)], a = Or[e.charCodeAt(r + 2)], c = Or[e.charCodeAt(r + 3)], u[o++] = i << 2 | s >> 4, u[o++] = (s & 15) << 4 | a >> 2, u[o++] = (a & 3) << 6 | c & 63;
  return l;
}, Yd = typeof ArrayBuffer == "function", pa = (e, n) => {
  if (typeof e != "string")
    return {
      type: "message",
      data: nu(e, n)
    };
  const t = e.charAt(0);
  return t === "b" ? {
    type: "message",
    data: Gd(e.substring(1), n)
  } : mo[t] ? e.length > 1 ? {
    type: mo[t],
    data: e.substring(1)
  } : {
    type: mo[t]
  } : ns;
}, Gd = (e, n) => {
  if (Yd) {
    const t = Xd(e);
    return nu(t, n);
  } else
    return { base64: !0, data: e };
}, nu = (e, n) => {
  switch (n) {
    case "blob":
      return e instanceof Blob ? e : new Blob([e]);
    case "arraybuffer":
    default:
      return e instanceof ArrayBuffer ? e : e.buffer;
  }
}, ru = "", Kd = (e, n) => {
  const t = e.length, r = new Array(t);
  let o = 0;
  e.forEach((i, s) => {
    ha(i, !1, (a) => {
      r[s] = a, ++o === t && n(r.join(ru));
    });
  });
}, Zd = (e, n) => {
  const t = e.split(ru), r = [];
  for (let o = 0; o < t.length; o++) {
    const i = pa(t[o], n);
    if (r.push(i), i.type === "error")
      break;
  }
  return r;
};
function Jd() {
  return new TransformStream({
    transform(e, n) {
      $d(e, (t) => {
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
let Oi;
function Jr(e) {
  return e.reduce((n, t) => n + t.length, 0);
}
function Qr(e, n) {
  if (e[0].length === n)
    return e.shift();
  const t = new Uint8Array(n);
  let r = 0;
  for (let o = 0; o < n; o++)
    t[o] = e[0][r++], r === e[0].length && (e.shift(), r = 0);
  return e.length && r < e[0].length && (e[0] = e[0].slice(r)), t;
}
function Qd(e, n) {
  Oi || (Oi = new TextDecoder());
  const t = [];
  let r = 0, o = -1, i = !1;
  return new TransformStream({
    transform(s, a) {
      for (t.push(s); ; ) {
        if (r === 0) {
          if (Jr(t) < 1)
            break;
          const c = Qr(t, 1);
          i = (c[0] & 128) === 128, o = c[0] & 127, o < 126 ? r = 3 : o === 126 ? r = 1 : r = 2;
        } else if (r === 1) {
          if (Jr(t) < 2)
            break;
          const c = Qr(t, 2);
          o = new DataView(c.buffer, c.byteOffset, c.length).getUint16(0), r = 3;
        } else if (r === 2) {
          if (Jr(t) < 8)
            break;
          const c = Qr(t, 8), l = new DataView(c.buffer, c.byteOffset, c.length), u = l.getUint32(0);
          if (u > Math.pow(2, 21) - 1) {
            a.enqueue(ns);
            break;
          }
          o = u * Math.pow(2, 32) + l.getUint32(4), r = 3;
        } else {
          if (Jr(t) < o)
            break;
          const c = Qr(t, o);
          a.enqueue(pa(i ? c : Oi.decode(c), n)), r = 0;
        }
        if (o === 0 || o > e) {
          a.enqueue(ns);
          break;
        }
      }
    }
  });
}
const ou = 4;
function Fe(e) {
  if (e) return eh(e);
}
function eh(e) {
  for (var n in Fe.prototype)
    e[n] = Fe.prototype[n];
  return e;
}
Fe.prototype.on = Fe.prototype.addEventListener = function(e, n) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(n), this;
};
Fe.prototype.once = function(e, n) {
  function t() {
    this.off(e, t), n.apply(this, arguments);
  }
  return t.fn = n, this.on(e, t), this;
};
Fe.prototype.off = Fe.prototype.removeListener = Fe.prototype.removeAllListeners = Fe.prototype.removeEventListener = function(e, n) {
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
Fe.prototype.emit = function(e) {
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
Fe.prototype.emitReserved = Fe.prototype.emit;
Fe.prototype.listeners = function(e) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [];
};
Fe.prototype.hasListeners = function(e) {
  return !!this.listeners(e).length;
};
const ri = typeof Promise == "function" && typeof Promise.resolve == "function" ? (n) => Promise.resolve().then(n) : (n, t) => t(n, 0), dt = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), th = "arraybuffer";
function iu(e, ...n) {
  return n.reduce((t, r) => (e.hasOwnProperty(r) && (t[r] = e[r]), t), {});
}
const nh = dt.setTimeout, rh = dt.clearTimeout;
function oi(e, n) {
  n.useNativeTimers ? (e.setTimeoutFn = nh.bind(dt), e.clearTimeoutFn = rh.bind(dt)) : (e.setTimeoutFn = dt.setTimeout.bind(dt), e.clearTimeoutFn = dt.clearTimeout.bind(dt));
}
const oh = 1.33;
function ih(e) {
  return typeof e == "string" ? sh(e) : Math.ceil((e.byteLength || e.size) * oh);
}
function sh(e) {
  let n = 0, t = 0;
  for (let r = 0, o = e.length; r < o; r++)
    n = e.charCodeAt(r), n < 128 ? t += 1 : n < 2048 ? t += 2 : n < 55296 || n >= 57344 ? t += 3 : (r++, t += 4);
  return t;
}
function su() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function ah(e) {
  let n = "";
  for (let t in e)
    e.hasOwnProperty(t) && (n.length && (n += "&"), n += encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
  return n;
}
function ch(e) {
  let n = {}, t = e.split("&");
  for (let r = 0, o = t.length; r < o; r++) {
    let i = t[r].split("=");
    n[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
  }
  return n;
}
class lh extends Error {
  constructor(n, t, r) {
    super(n), this.description = t, this.context = r, this.type = "TransportError";
  }
}
class xa extends Fe {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(n) {
    super(), this.writable = !1, oi(this, n), this.opts = n, this.query = n.query, this.socket = n.socket, this.supportsBinary = !n.forceBase64;
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
    return super.emitReserved("error", new lh(n, t, r)), this;
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
    const t = pa(n, this.socket.binaryType);
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
    const t = ah(n);
    return t.length ? "?" + t : "";
  }
}
class uh extends xa {
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
    Zd(n, this.socket.binaryType).forEach(t), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
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
    this.writable = !1, Kd(n, (t) => {
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
    return this.opts.timestampRequests !== !1 && (t[this.opts.timestampParam] = su()), !this.supportsBinary && !t.sid && (t.b64 = 1), this.createUri(n, t);
  }
}
let au = !1;
try {
  au = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const fh = au;
function dh() {
}
class hh extends uh {
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
let zn = class go extends Fe {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(n, t, r) {
    super(), this.createRequest = n, oi(this, r), this._opts = r, this._method = r.method || "GET", this._uri = t, this._data = r.data !== void 0 ? r.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var n;
    const t = iu(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
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
    typeof document < "u" && (this._index = go.requestsCount++, go.requests[this._index] = this);
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
      if (this._xhr.onreadystatechange = dh, n)
        try {
          this._xhr.abort();
        } catch {
        }
      typeof document < "u" && delete go.requests[this._index], this._xhr = null;
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
zn.requestsCount = 0;
zn.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", lc);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in dt ? "pagehide" : "unload";
    addEventListener(e, lc, !1);
  }
}
function lc() {
  for (let e in zn.requests)
    zn.requests.hasOwnProperty(e) && zn.requests[e].abort();
}
const ph = function() {
  const e = cu({
    xdomain: !1
  });
  return e && e.responseType !== null;
}();
class xh extends hh {
  constructor(n) {
    super(n);
    const t = n && n.forceBase64;
    this.supportsBinary = ph && !t;
  }
  request(n = {}) {
    return Object.assign(n, { xd: this.xd }, this.opts), new zn(cu, this.uri(), n);
  }
}
function cu(e) {
  const n = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!n || fh))
      return new XMLHttpRequest();
  } catch {
  }
  if (!n)
    try {
      return new dt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const lu = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class mh extends xa {
  get name() {
    return "websocket";
  }
  doOpen() {
    const n = this.uri(), t = this.opts.protocols, r = lu ? {} : iu(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
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
      ha(r, this.supportsBinary, (i) => {
        try {
          this.doWrite(r, i);
        } catch {
        }
        o && ri(() => {
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
    return this.opts.timestampRequests && (t[this.opts.timestampParam] = su()), this.supportsBinary || (t.b64 = 1), this.createUri(n, t);
  }
}
const Ri = dt.WebSocket || dt.MozWebSocket;
class gh extends mh {
  createSocket(n, t, r) {
    return lu ? new Ri(n, t, r) : t ? new Ri(n, t) : new Ri(n);
  }
  doWrite(n, t) {
    this.ws.send(t);
  }
}
class vh extends xa {
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
        const t = Qd(Number.MAX_SAFE_INTEGER, this.socket.binaryType), r = n.readable.pipeThrough(t).getReader(), o = Jd();
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
        o && ri(() => {
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
const yh = {
  websocket: gh,
  webtransport: vh,
  polling: xh
}, bh = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, Sh = [
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
function rs(e) {
  if (e.length > 8e3)
    throw "URI too long";
  const n = e, t = e.indexOf("["), r = e.indexOf("]");
  t != -1 && r != -1 && (e = e.substring(0, t) + e.substring(t, r).replace(/:/g, ";") + e.substring(r, e.length));
  let o = bh.exec(e || ""), i = {}, s = 14;
  for (; s--; )
    i[Sh[s]] = o[s] || "";
  return t != -1 && r != -1 && (i.source = n, i.host = i.host.substring(1, i.host.length - 1).replace(/;/g, ":"), i.authority = i.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), i.ipv6uri = !0), i.pathNames = wh(i, i.path), i.queryKey = Eh(i, i.query), i;
}
function wh(e, n) {
  const t = /\/{2,9}/g, r = n.replace(t, "/").split("/");
  return (n.slice(0, 1) == "/" || n.length === 0) && r.splice(0, 1), n.slice(-1) == "/" && r.splice(r.length - 1, 1), r;
}
function Eh(e, n) {
  const t = {};
  return n.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(r, o, i) {
    o && (t[o] = i);
  }), t;
}
const os = typeof addEventListener == "function" && typeof removeEventListener == "function", vo = [];
os && addEventListener("offline", () => {
  vo.forEach((e) => e());
}, !1);
class on extends Fe {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(n, t) {
    if (super(), this.binaryType = th, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, n && typeof n == "object" && (t = n, n = null), n) {
      const r = rs(n);
      t.hostname = r.host, t.secure = r.protocol === "https" || r.protocol === "wss", t.port = r.port, r.query && (t.query = r.query);
    } else t.host && (t.hostname = rs(t.host).host);
    oi(this, t), this.secure = t.secure != null ? t.secure : typeof location < "u" && location.protocol === "https:", t.hostname && !t.port && (t.port = this.secure ? "443" : "80"), this.hostname = t.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = t.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, t.transports.forEach((r) => {
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
    }, t), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = ch(this.opts.query)), os && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, vo.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
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
    t.EIO = ou, t.transport = n, this.id && (t.sid = this.id);
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
    const n = this.opts.rememberUpgrade && on.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
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
    this.readyState = "open", on.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
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
      if (o && (t += ih(o)), r > 0 && t > this._maxPayload)
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
    return n && (this._pingTimeoutTime = 0, ri(() => {
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
    if (on.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
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
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), os && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const r = vo.indexOf(this._offlineEventListener);
        r !== -1 && vo.splice(r, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", n, t), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
on.protocol = ou;
class _h extends on {
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
    on.priorWebsocketSuccess = !1;
    const o = () => {
      r || (t.send([{ type: "ping", data: "probe" }]), t.once("packet", (d) => {
        if (!r)
          if (d.type === "pong" && d.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", t), !t)
              return;
            on.priorWebsocketSuccess = t.name === "websocket", this.transport.pause(() => {
              r || this.readyState !== "closed" && (u(), this.setTransport(t), t.send([{ type: "upgrade" }]), this.emitReserved("upgrade", t), t = null, this.upgrading = !1, this.flush());
            });
          } else {
            const f = new Error("probe error");
            f.transport = t.name, this.emitReserved("upgradeError", f);
          }
      }));
    };
    function i() {
      r || (r = !0, u(), t.close(), t = null);
    }
    const s = (d) => {
      const f = new Error("probe error: " + d);
      f.transport = t.name, i(), this.emitReserved("upgradeError", f);
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
let Ch = class extends _h {
  constructor(n, t = {}) {
    const r = typeof n == "object" ? n : t;
    (!r.transports || r.transports && typeof r.transports[0] == "string") && (r.transports = (r.transports || ["polling", "websocket", "webtransport"]).map((o) => yh[o]).filter((o) => !!o)), super(n, r);
  }
};
function Ah(e, n = "", t) {
  let r = e;
  t = t || typeof location < "u" && location, e == null && (e = t.protocol + "//" + t.host), typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = t.protocol + e : e = t.host + e), /^(https?|wss?):\/\//.test(e) || (typeof t < "u" ? e = t.protocol + "//" + e : e = "https://" + e), r = rs(e)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
  const i = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return r.id = r.protocol + "://" + i + ":" + r.port + n, r.href = r.protocol + "://" + i + (t && t.port === r.port ? "" : ":" + r.port), r;
}
const Th = typeof ArrayBuffer == "function", Oh = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer, uu = Object.prototype.toString, Rh = typeof Blob == "function" || typeof Blob < "u" && uu.call(Blob) === "[object BlobConstructor]", kh = typeof File == "function" || typeof File < "u" && uu.call(File) === "[object FileConstructor]";
function ma(e) {
  return Th && (e instanceof ArrayBuffer || Oh(e)) || Rh && e instanceof Blob || kh && e instanceof File;
}
function yo(e, n) {
  if (!e || typeof e != "object")
    return !1;
  if (Array.isArray(e)) {
    for (let t = 0, r = e.length; t < r; t++)
      if (yo(e[t]))
        return !0;
    return !1;
  }
  if (ma(e))
    return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return yo(e.toJSON(), !0);
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && yo(e[t]))
      return !0;
  return !1;
}
function Ph(e) {
  const n = [], t = e.data, r = e;
  return r.data = is(t, n), r.attachments = n.length, { packet: r, buffers: n };
}
function is(e, n) {
  if (!e)
    return e;
  if (ma(e)) {
    const t = { _placeholder: !0, num: n.length };
    return n.push(e), t;
  } else if (Array.isArray(e)) {
    const t = new Array(e.length);
    for (let r = 0; r < e.length; r++)
      t[r] = is(e[r], n);
    return t;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const t = {};
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (t[r] = is(e[r], n));
    return t;
  }
  return e;
}
function Ih(e, n) {
  return e.data = ss(e.data, n), delete e.attachments, e;
}
function ss(e, n) {
  if (!e)
    return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < n.length)
      return n[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let t = 0; t < e.length; t++)
      e[t] = ss(e[t], n);
  else if (typeof e == "object")
    for (const t in e)
      Object.prototype.hasOwnProperty.call(e, t) && (e[t] = ss(e[t], n));
  return e;
}
const Nh = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], jh = 5;
var ue;
(function(e) {
  e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK";
})(ue || (ue = {}));
class Mh {
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
    return (n.type === ue.EVENT || n.type === ue.ACK) && yo(n) ? this.encodeAsBinary({
      type: n.type === ue.EVENT ? ue.BINARY_EVENT : ue.BINARY_ACK,
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
    return (n.type === ue.BINARY_EVENT || n.type === ue.BINARY_ACK) && (t += n.attachments + "-"), n.nsp && n.nsp !== "/" && (t += n.nsp + ","), n.id != null && (t += n.id), n.data != null && (t += JSON.stringify(n.data, this.replacer)), t;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(n) {
    const t = Ph(n), r = this.encodeAsString(t.packet), o = t.buffers;
    return o.unshift(r), o;
  }
}
function uc(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
class ga extends Fe {
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
      const r = t.type === ue.BINARY_EVENT;
      r || t.type === ue.BINARY_ACK ? (t.type = r ? ue.EVENT : ue.ACK, this.reconstructor = new Lh(t), t.attachments === 0 && super.emitReserved("decoded", t)) : super.emitReserved("decoded", t);
    } else if (ma(n) || n.base64)
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
    if (ue[r.type] === void 0)
      throw new Error("unknown packet type " + r.type);
    if (r.type === ue.BINARY_EVENT || r.type === ue.BINARY_ACK) {
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
      if (ga.isPayloadValid(r.type, i))
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
      case ue.CONNECT:
        return uc(t);
      case ue.DISCONNECT:
        return t === void 0;
      case ue.CONNECT_ERROR:
        return typeof t == "string" || uc(t);
      case ue.EVENT:
      case ue.BINARY_EVENT:
        return Array.isArray(t) && (typeof t[0] == "number" || typeof t[0] == "string" && Nh.indexOf(t[0]) === -1);
      case ue.ACK:
      case ue.BINARY_ACK:
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
class Lh {
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
      const t = Ih(this.reconPack, this.buffers);
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
const Dh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: ga,
  Encoder: Mh,
  get PacketType() {
    return ue;
  },
  protocol: jh
}, Symbol.toStringTag, { value: "Module" }));
function mt(e, n, t) {
  return e.on(n, t), function() {
    e.off(n, t);
  };
}
const Bh = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class fu extends Fe {
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
      mt(n, "open", this.onopen.bind(this)),
      mt(n, "packet", this.onpacket.bind(this)),
      mt(n, "error", this.onerror.bind(this)),
      mt(n, "close", this.onclose.bind(this))
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
    if (Bh.hasOwnProperty(n))
      throw new Error('"' + n.toString() + '" is a reserved event name');
    if (t.unshift(n), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(t), this;
    const s = {
      type: ue.EVENT,
      data: t
    };
    if (s.options = {}, s.options.compress = this.flags.compress !== !1, typeof t[t.length - 1] == "function") {
      const u = this.ids++, d = t.pop();
      this._registerAckCallback(u, d), s.id = u;
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
      type: ue.CONNECT,
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
        case ue.CONNECT:
          n.data && n.data.sid ? this.onconnect(n.data.sid, n.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case ue.EVENT:
        case ue.BINARY_EVENT:
          this.onevent(n);
          break;
        case ue.ACK:
        case ue.BINARY_ACK:
          this.onack(n);
          break;
        case ue.DISCONNECT:
          this.ondisconnect();
          break;
        case ue.CONNECT_ERROR:
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
        type: ue.ACK,
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
    return this.connected && this.packet({ type: ue.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
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
function er(e) {
  e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0;
}
er.prototype.duration = function() {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var n = Math.random(), t = Math.floor(n * this.jitter * e);
    e = (Math.floor(n * 10) & 1) == 0 ? e - t : e + t;
  }
  return Math.min(e, this.max) | 0;
};
er.prototype.reset = function() {
  this.attempts = 0;
};
er.prototype.setMin = function(e) {
  this.ms = e;
};
er.prototype.setMax = function(e) {
  this.max = e;
};
er.prototype.setJitter = function(e) {
  this.jitter = e;
};
class as extends Fe {
  constructor(n, t) {
    var r;
    super(), this.nsps = {}, this.subs = [], n && typeof n == "object" && (t = n, n = void 0), t = t || {}, t.path = t.path || "/socket.io", this.opts = t, oi(this, t), this.reconnection(t.reconnection !== !1), this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0), this.reconnectionDelay(t.reconnectionDelay || 1e3), this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3), this.randomizationFactor((r = t.randomizationFactor) !== null && r !== void 0 ? r : 0.5), this.backoff = new er({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(t.timeout == null ? 2e4 : t.timeout), this._readyState = "closed", this.uri = n;
    const o = t.parser || Dh;
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
    this.engine = new Ch(this.uri, this.opts);
    const t = this.engine, r = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const o = mt(t, "open", function() {
      r.onopen(), n && n();
    }), i = (a) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", a), n ? n(a) : this.maybeReconnectOnOpen();
    }, s = mt(t, "error", i);
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
      mt(n, "ping", this.onping.bind(this)),
      mt(n, "data", this.ondata.bind(this)),
      mt(n, "error", this.onerror.bind(this)),
      mt(n, "close", this.onclose.bind(this)),
      // @ts-ignore
      mt(this.decoder, "decoded", this.ondecoded.bind(this))
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
    ri(() => {
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
    return r ? this._autoConnect && !r.active && r.connect() : (r = new fu(this, n, t), this.nsps[n] = r), r;
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
const dr = {};
function bo(e, n) {
  typeof e == "object" && (n = e, e = void 0), n = n || {};
  const t = Ah(e, n.path || "/socket.io"), r = t.source, o = t.id, i = t.path, s = dr[o] && i in dr[o].nsps, a = n.forceNew || n["force new connection"] || n.multiplex === !1 || s;
  let c;
  return a ? c = new as(r, n) : (dr[o] || (dr[o] = new as(r, n)), c = dr[o]), t.query && !n.query && (n.query = t.queryKey), c.socket(t.path, n);
}
Object.assign(bo, {
  Manager: as,
  Socket: fu,
  io: bo,
  connect: bo
});
var ki = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var fc;
function Fh() {
  return fc || (fc = 1, function(e) {
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
  }(ki)), ki.exports;
}
var zh = Fh();
const Ge = /* @__PURE__ */ O0(zh);
function Ft() {
  return Ft = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, Ft.apply(null, arguments);
}
function ye(e) {
  "@babel/helpers - typeof";
  return ye = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, ye(e);
}
var Vh = Symbol.for("react.element"), Hh = Symbol.for("react.transitional.element"), Uh = Symbol.for("react.fragment");
function qh(e) {
  return (
    // Base object type
    e && ye(e) === "object" && // React Element type
    (e.$$typeof === Vh || e.$$typeof === Hh) && // React Fragment type
    e.type === Uh
  );
}
var cs = {}, va = [], Wh = function(n) {
  va.push(n);
};
function ya(e, n) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var t = va.reduce(function(r, o) {
      return o(r ?? "", "warning");
    }, n);
    t && console.error("Warning: ".concat(t));
  }
}
function $h(e, n) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var t = va.reduce(function(r, o) {
      return o(r ?? "", "note");
    }, n);
    t && console.warn("Note: ".concat(t));
  }
}
function du() {
  cs = {};
}
function hu(e, n, t) {
  !n && !cs[t] && (e(!1, t), cs[t] = !0);
}
function dn(e, n) {
  hu(ya, e, n);
}
function Xh(e, n) {
  hu($h, e, n);
}
dn.preMessage = Wh;
dn.resetWarned = du;
dn.noteOnce = Xh;
function Yh(e, n) {
  if (ye(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(e, n);
    if (ye(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function pu(e) {
  var n = Yh(e, "string");
  return ye(n) == "symbol" ? n : n + "";
}
function H(e, n, t) {
  return (n = pu(n)) in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = t, e;
}
function dc(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function F(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? dc(Object(t), !0).forEach(function(r) {
      H(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : dc(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function hc(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function Gh(e) {
  return e && ye(e) === "object" && hc(e.nativeElement) ? e.nativeElement : hc(e) ? e : null;
}
function Kh(e) {
  var n = Gh(e);
  if (n)
    return n;
  if (e instanceof je.Component) {
    var t;
    return (t = Ba.findDOMNode) === null || t === void 0 ? void 0 : t.call(Ba, e);
  }
  return null;
}
var eo = { exports: {} }, me = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pc;
function Zh() {
  if (pc) return me;
  pc = 1;
  var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), m;
  m = Symbol.for("react.module.reference");
  function x(h) {
    if (typeof h == "object" && h !== null) {
      var S = h.$$typeof;
      switch (S) {
        case e:
          switch (h = h.type, h) {
            case t:
            case o:
            case r:
            case l:
            case u:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case a:
                case s:
                case c:
                case f:
                case d:
                case i:
                  return h;
                default:
                  return S;
              }
          }
        case n:
          return S;
      }
    }
  }
  return me.ContextConsumer = s, me.ContextProvider = i, me.Element = e, me.ForwardRef = c, me.Fragment = t, me.Lazy = f, me.Memo = d, me.Portal = n, me.Profiler = o, me.StrictMode = r, me.Suspense = l, me.SuspenseList = u, me.isAsyncMode = function() {
    return !1;
  }, me.isConcurrentMode = function() {
    return !1;
  }, me.isContextConsumer = function(h) {
    return x(h) === s;
  }, me.isContextProvider = function(h) {
    return x(h) === i;
  }, me.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === e;
  }, me.isForwardRef = function(h) {
    return x(h) === c;
  }, me.isFragment = function(h) {
    return x(h) === t;
  }, me.isLazy = function(h) {
    return x(h) === f;
  }, me.isMemo = function(h) {
    return x(h) === d;
  }, me.isPortal = function(h) {
    return x(h) === n;
  }, me.isProfiler = function(h) {
    return x(h) === o;
  }, me.isStrictMode = function(h) {
    return x(h) === r;
  }, me.isSuspense = function(h) {
    return x(h) === l;
  }, me.isSuspenseList = function(h) {
    return x(h) === u;
  }, me.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === t || h === o || h === r || h === l || h === u || h === v || typeof h == "object" && h !== null && (h.$$typeof === f || h.$$typeof === d || h.$$typeof === i || h.$$typeof === s || h.$$typeof === c || h.$$typeof === m || h.getModuleId !== void 0);
  }, me.typeOf = x, me;
}
var ge = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xc;
function Jh() {
  return xc || (xc = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), m = !1, x = !1, h = !1, S = !1, b = !1, g;
    g = Symbol.for("react.module.reference");
    function C(M) {
      return !!(typeof M == "string" || typeof M == "function" || M === t || M === o || b || M === r || M === l || M === u || S || M === v || m || x || h || typeof M == "object" && M !== null && (M.$$typeof === f || M.$$typeof === d || M.$$typeof === i || M.$$typeof === s || M.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      M.$$typeof === g || M.getModuleId !== void 0));
    }
    function y(M) {
      if (typeof M == "object" && M !== null) {
        var ke = M.$$typeof;
        switch (ke) {
          case e:
            var _e = M.type;
            switch (_e) {
              case t:
              case o:
              case r:
              case l:
              case u:
                return _e;
              default:
                var ct = _e && _e.$$typeof;
                switch (ct) {
                  case a:
                  case s:
                  case c:
                  case f:
                  case d:
                  case i:
                    return ct;
                  default:
                    return ke;
                }
            }
          case n:
            return ke;
        }
      }
    }
    var A = s, E = i, P = e, D = c, W = t, ee = f, Y = d, N = n, z = o, q = r, $ = l, J = u, G = !1, Z = !1;
    function re(M) {
      return G || (G = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function oe(M) {
      return Z || (Z = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function K(M) {
      return y(M) === s;
    }
    function te(M) {
      return y(M) === i;
    }
    function fe(M) {
      return typeof M == "object" && M !== null && M.$$typeof === e;
    }
    function le(M) {
      return y(M) === c;
    }
    function de(M) {
      return y(M) === t;
    }
    function pe(M) {
      return y(M) === f;
    }
    function k(M) {
      return y(M) === d;
    }
    function U(M) {
      return y(M) === n;
    }
    function j(M) {
      return y(M) === o;
    }
    function B(M) {
      return y(M) === r;
    }
    function T(M) {
      return y(M) === l;
    }
    function ne(M) {
      return y(M) === u;
    }
    ge.ContextConsumer = A, ge.ContextProvider = E, ge.Element = P, ge.ForwardRef = D, ge.Fragment = W, ge.Lazy = ee, ge.Memo = Y, ge.Portal = N, ge.Profiler = z, ge.StrictMode = q, ge.Suspense = $, ge.SuspenseList = J, ge.isAsyncMode = re, ge.isConcurrentMode = oe, ge.isContextConsumer = K, ge.isContextProvider = te, ge.isElement = fe, ge.isForwardRef = le, ge.isFragment = de, ge.isLazy = pe, ge.isMemo = k, ge.isPortal = U, ge.isProfiler = j, ge.isStrictMode = B, ge.isSuspense = T, ge.isSuspenseList = ne, ge.isValidElementType = C, ge.typeOf = y;
  }()), ge;
}
var mc;
function Qh() {
  return mc || (mc = 1, process.env.NODE_ENV === "production" ? eo.exports = Zh() : eo.exports = Jh()), eo.exports;
}
var Pi = Qh();
function xu(e, n, t) {
  var r = w.useRef({});
  return (!("value" in r.current) || t(r.current.condition, n)) && (r.current.value = e(), r.current.condition = n), r.current.value;
}
var ep = Number(_0.split(".")[0]), mu = function(n, t) {
  typeof n == "function" ? n(t) : ye(n) === "object" && n && "current" in n && (n.current = t);
}, tp = function() {
  for (var n = arguments.length, t = new Array(n), r = 0; r < n; r++)
    t[r] = arguments[r];
  var o = t.filter(Boolean);
  return o.length <= 1 ? o[0] : function(i) {
    t.forEach(function(s) {
      mu(s, i);
    });
  };
}, np = function(n) {
  var t, r;
  if (!n)
    return !1;
  if (gu(n) && ep >= 19)
    return !0;
  var o = Pi.isMemo(n) ? n.type.type : n.type;
  return !(typeof o == "function" && !((t = o.prototype) !== null && t !== void 0 && t.render) && o.$$typeof !== Pi.ForwardRef || typeof n == "function" && !((r = n.prototype) !== null && r !== void 0 && r.render) && n.$$typeof !== Pi.ForwardRef);
};
function gu(e) {
  return /* @__PURE__ */ E0(e) && !qh(e);
}
var rp = function(n) {
  if (n && gu(n)) {
    var t = n;
    return t.props.propertyIsEnumerable("ref") ? t.props.ref : t.ref;
  }
  return null;
};
function Ct(e, n) {
  if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function gc(e, n) {
  for (var t = 0; t < n.length; t++) {
    var r = n[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, pu(r.key), r);
  }
}
function At(e, n, t) {
  return n && gc(e.prototype, n), t && gc(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function ls(e, n) {
  return ls = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, r) {
    return t.__proto__ = r, t;
  }, ls(e, n);
}
function Vr(e, n) {
  if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(n && n.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), n && ls(e, n);
}
function Yn(e) {
  return Yn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Yn(e);
}
function ba() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (ba = function() {
    return !!e;
  })();
}
function An(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function vu(e, n) {
  if (n && (ye(n) == "object" || typeof n == "function")) return n;
  if (n !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return An(e);
}
function ii(e) {
  var n = ba();
  return function() {
    var t, r = Yn(e);
    if (n) {
      var o = Yn(this).constructor;
      t = Reflect.construct(r, arguments, o);
    } else t = r.apply(this, arguments);
    return vu(this, t);
  };
}
function us(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, r = Array(n); t < n; t++) r[t] = e[t];
  return r;
}
function op(e) {
  if (Array.isArray(e)) return us(e);
}
function yu(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Sa(e, n) {
  if (e) {
    if (typeof e == "string") return us(e, n);
    var t = {}.toString.call(e).slice(8, -1);
    return t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set" ? Array.from(e) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? us(e, n) : void 0;
  }
}
function ip() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Yt(e) {
  return op(e) || yu(e) || Sa(e) || ip();
}
var bu = function(n) {
  return +setTimeout(n, 16);
}, Su = function(n) {
  return clearTimeout(n);
};
typeof window < "u" && "requestAnimationFrame" in window && (bu = function(n) {
  return window.requestAnimationFrame(n);
}, Su = function(n) {
  return window.cancelAnimationFrame(n);
});
var vc = 0, si = /* @__PURE__ */ new Map();
function wu(e) {
  si.delete(e);
}
var Mo = function(n) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  vc += 1;
  var r = vc;
  function o(i) {
    if (i === 0)
      wu(r), n();
    else {
      var s = bu(function() {
        o(i - 1);
      });
      si.set(r, s);
    }
  }
  return o(t), r;
};
Mo.cancel = function(e) {
  var n = si.get(e);
  return wu(e), Su(n);
};
process.env.NODE_ENV !== "production" && (Mo.ids = function() {
  return si;
});
function Eu(e) {
  if (Array.isArray(e)) return e;
}
function sp(e, n) {
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
function _u() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ae(e, n) {
  return Eu(e) || sp(e, n) || Sa(e, n) || _u();
}
function Nr(e) {
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
function Zt() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function ap(e, n) {
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
var yc = "data-rc-order", bc = "data-rc-priority", cp = "rc-util-key", fs = /* @__PURE__ */ new Map();
function Cu() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.mark;
  return n ? n.startsWith("data-") ? n : "data-".concat(n) : cp;
}
function ai(e) {
  if (e.attachTo)
    return e.attachTo;
  var n = document.querySelector("head");
  return n || document.body;
}
function lp(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function wa(e) {
  return Array.from((fs.get(e) || e).children).filter(function(n) {
    return n.tagName === "STYLE";
  });
}
function Au(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Zt())
    return null;
  var t = n.csp, r = n.prepend, o = n.priority, i = o === void 0 ? 0 : o, s = lp(r), a = s === "prependQueue", c = document.createElement("style");
  c.setAttribute(yc, s), a && i && c.setAttribute(bc, "".concat(i)), t != null && t.nonce && (c.nonce = t == null ? void 0 : t.nonce), c.innerHTML = e;
  var l = ai(n), u = l.firstChild;
  if (r) {
    if (a) {
      var d = (n.styles || wa(l)).filter(function(f) {
        if (!["prepend", "prependQueue"].includes(f.getAttribute(yc)))
          return !1;
        var v = Number(f.getAttribute(bc) || 0);
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
function Tu(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = ai(n);
  return (n.styles || wa(t)).find(function(r) {
    return r.getAttribute(Cu(n)) === e;
  });
}
function Ou(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = Tu(e, n);
  if (t) {
    var r = ai(n);
    r.removeChild(t);
  }
}
function up(e, n) {
  var t = fs.get(e);
  if (!t || !ap(document, t)) {
    var r = Au("", n), o = r.parentNode;
    fs.set(e, o), e.removeChild(r);
  }
}
function Tn(e, n) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = ai(t), o = wa(r), i = F(F({}, t), {}, {
    styles: o
  });
  up(r, i);
  var s = Tu(n, i);
  if (s) {
    var a, c;
    if ((a = i.csp) !== null && a !== void 0 && a.nonce && s.nonce !== ((c = i.csp) === null || c === void 0 ? void 0 : c.nonce)) {
      var l;
      s.nonce = (l = i.csp) === null || l === void 0 ? void 0 : l.nonce;
    }
    return s.innerHTML !== e && (s.innerHTML = e), s;
  }
  var u = Au(e, i);
  return u.setAttribute(Cu(i), n), u;
}
function fp(e, n) {
  if (e == null) return {};
  var t = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (n.indexOf(r) !== -1) continue;
    t[r] = e[r];
  }
  return t;
}
function jr(e, n) {
  if (e == null) return {};
  var t, r, o = fp(e, n);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++) t = i[r], n.indexOf(t) === -1 && {}.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
  }
  return o;
}
function dp(e, n) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = /* @__PURE__ */ new Set();
  function o(i, s) {
    var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, c = r.has(i);
    if (dn(!c, "Warning: There may be circular references"), c)
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
    if (i && s && ye(i) === "object" && ye(s) === "object") {
      var d = Object.keys(i);
      return d.length !== Object.keys(s).length ? !1 : d.every(function(f) {
        return o(i[f], s[f], l);
      });
    }
    return !1;
  }
  return o(e, n);
}
var hp = "%";
function ds(e) {
  return e.join(hp);
}
var pp = /* @__PURE__ */ function() {
  function e(n) {
    Ct(this, e), H(this, "instanceId", void 0), H(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = n;
  }
  return At(e, [{
    key: "get",
    value: function(t) {
      return this.opGet(ds(t));
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
      return this.opUpdate(ds(t), r);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(t, r) {
      var o = this.cache.get(t), i = r(o);
      i === null ? this.cache.delete(t) : this.cache.set(t, i);
    }
  }]), e;
}(), Gn = "data-token-hash", St = "data-css-hash", xp = "data-cache-path", nn = "__cssinjs_instance__";
function mp() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var n = document.body.querySelectorAll("style[".concat(St, "]")) || [], t = document.head.firstChild;
    Array.from(n).forEach(function(o) {
      o[nn] = o[nn] || e, o[nn] === e && document.head.insertBefore(o, t);
    });
    var r = {};
    Array.from(document.querySelectorAll("style[".concat(St, "]"))).forEach(function(o) {
      var i = o.getAttribute(St);
      if (r[i]) {
        if (o[nn] === e) {
          var s;
          (s = o.parentNode) === null || s === void 0 || s.removeChild(o);
        }
      } else
        r[i] = !0;
    });
  }
  return new pp(e);
}
var Hr = /* @__PURE__ */ w.createContext({
  hashPriority: "low",
  cache: mp(),
  defaultCache: !0
});
function gp(e, n) {
  if (e.length !== n.length)
    return !1;
  for (var t = 0; t < e.length; t++)
    if (e[t] !== n[t])
      return !1;
  return !0;
}
var Ea = /* @__PURE__ */ function() {
  function e() {
    Ct(this, e), H(this, "cache", void 0), H(this, "keys", void 0), H(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
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
          var i = this.keys.reduce(function(l, u) {
            var d = ae(l, 2), f = d[1];
            return o.internalGet(u)[1] < f ? [u, o.internalGet(u)[1]] : l;
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
          return !gp(r, t);
        }), this.deleteByPath(this.cache, t);
    }
  }]), e;
}();
H(Ea, "MAX_CACHE_SIZE", 20);
H(Ea, "MAX_CACHE_OFFSET", 5);
var Sc = 0, Ru = /* @__PURE__ */ function() {
  function e(n) {
    Ct(this, e), H(this, "derivatives", void 0), H(this, "id", void 0), this.derivatives = Array.isArray(n) ? n : [n], this.id = Sc, n.length === 0 && ya(n.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), Sc += 1;
  }
  return At(e, [{
    key: "getDerivativeToken",
    value: function(t) {
      return this.derivatives.reduce(function(r, o) {
        return o(t, r);
      }, void 0);
    }
  }]), e;
}(), Ii = new Ea();
function hs(e) {
  var n = Array.isArray(e) ? e : [e];
  return Ii.has(n) || Ii.set(n, new Ru(n)), Ii.get(n);
}
var vp = /* @__PURE__ */ new WeakMap(), Ni = {};
function yp(e, n) {
  for (var t = vp, r = 0; r < n.length; r += 1) {
    var o = n[r];
    t.has(o) || t.set(o, /* @__PURE__ */ new WeakMap()), t = t.get(o);
  }
  return t.has(Ni) || t.set(Ni, e()), t.get(Ni);
}
var wc = /* @__PURE__ */ new WeakMap();
function kr(e) {
  var n = wc.get(e) || "";
  return n || (Object.keys(e).forEach(function(t) {
    var r = e[t];
    n += t, r instanceof Ru ? n += r.id : r && ye(r) === "object" ? n += kr(r) : n += r;
  }), n = Nr(n), wc.set(e, n)), n;
}
function Ec(e, n) {
  return Nr("".concat(n, "_").concat(kr(e)));
}
var ps = Zt();
function Lo(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function Do(e, n, t) {
  var r, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (i)
    return e;
  var s = F(F({}, o), {}, (r = {}, H(r, Gn, n), H(r, St, t), r)), a = Object.keys(s).map(function(c) {
    var l = s[c];
    return l ? "".concat(c, '="').concat(l, '"') : null;
  }).filter(function(c) {
    return c;
  }).join(" ");
  return "<style ".concat(a, ">").concat(e, "</style>");
}
var So = function(n) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(t ? "".concat(t, "-") : "").concat(n).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, bp = function(n, t, r) {
  return Object.keys(n).length ? ".".concat(t).concat(r != null && r.scope ? ".".concat(r.scope) : "", "{").concat(Object.entries(n).map(function(o) {
    var i = ae(o, 2), s = i[0], a = i[1];
    return "".concat(s, ":").concat(a, ";");
  }).join(""), "}") : "";
}, ku = function(n, t, r) {
  var o = {}, i = {};
  return Object.entries(n).forEach(function(s) {
    var a, c, l = ae(s, 2), u = l[0], d = l[1];
    if (r != null && (a = r.preserve) !== null && a !== void 0 && a[u])
      i[u] = d;
    else if ((typeof d == "string" || typeof d == "number") && !(r != null && (c = r.ignore) !== null && c !== void 0 && c[u])) {
      var f, v = So(u, r == null ? void 0 : r.prefix);
      o[v] = typeof d == "number" && !(r != null && (f = r.unitless) !== null && f !== void 0 && f[u]) ? "".concat(d, "px") : String(d), i[u] = "var(".concat(v, ")");
    }
  }), [i, bp(o, t, {
    scope: r == null ? void 0 : r.scope
  })];
}, _c = process.env.NODE_ENV !== "test" && Zt() ? w.useLayoutEffect : w.useEffect, Pu = function(n, t) {
  var r = w.useRef(!0);
  _c(function() {
    return n(r.current);
  }, t), _c(function() {
    return r.current = !1, function() {
      r.current = !0;
    };
  }, []);
}, Sp = F({}, w), Cc = Sp.useInsertionEffect, wp = function(n, t, r) {
  w.useMemo(n, r), Pu(function() {
    return t(!0);
  }, r);
}, Ep = Cc ? function(e, n, t) {
  return Cc(function() {
    return e(), n();
  }, t);
} : wp, _p = F({}, w), Cp = _p.useInsertionEffect, Ap = function(n) {
  var t = [], r = !1;
  function o(i) {
    if (r) {
      process.env.NODE_ENV !== "production" && ya(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    t.push(i);
  }
  return w.useEffect(function() {
    return r = !1, function() {
      r = !0, t.length && t.forEach(function(i) {
        return i();
      });
    };
  }, n), o;
}, Tp = function() {
  return function(n) {
    n();
  };
}, Op = typeof Cp < "u" ? Ap : Tp;
function Rp() {
  return !1;
}
var xs = !1;
function kp() {
  return xs;
}
const Pp = process.env.NODE_ENV === "production" ? Rp : kp;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var to = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : null;
  if (to && typeof to.webpackHotUpdate == "function") {
    var Ip = to.webpackHotUpdate;
    to.webpackHotUpdate = function() {
      return xs = !0, setTimeout(function() {
        xs = !1;
      }, 0), Ip.apply(void 0, arguments);
    };
  }
}
function _a(e, n, t, r, o) {
  var i = w.useContext(Hr), s = i.cache, a = [e].concat(Yt(n)), c = ds(a), l = Op([c]), u = Pp(), d = function(x) {
    s.opUpdate(c, function(h) {
      var S = h || [void 0, void 0], b = ae(S, 2), g = b[0], C = g === void 0 ? 0 : g, y = b[1], A = y;
      process.env.NODE_ENV !== "production" && y && u && (r == null || r(A, u), A = null);
      var E = A || t(), P = [C, E];
      return x ? x(P) : P;
    });
  };
  w.useMemo(
    function() {
      d();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [c]
    /* eslint-enable */
  );
  var f = s.opGet(c);
  process.env.NODE_ENV !== "production" && !f && (d(), f = s.opGet(c));
  var v = f[1];
  return Ep(function() {
    o == null || o(v);
  }, function(m) {
    return d(function(x) {
      var h = ae(x, 2), S = h[0], b = h[1];
      return m && S === 0 && (o == null || o(v)), [S + 1, b];
    }), function() {
      s.opUpdate(c, function(x) {
        var h = x || [], S = ae(h, 2), b = S[0], g = b === void 0 ? 0 : b, C = S[1], y = g - 1;
        return y === 0 ? (l(function() {
          (m || !s.opGet(c)) && (r == null || r(C, !1));
        }), null) : [g - 1, C];
      });
    };
  }, [c]), v;
}
var Np = {}, jp = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", Sn = /* @__PURE__ */ new Map();
function Mp(e) {
  Sn.set(e, (Sn.get(e) || 0) + 1);
}
function Lp(e, n) {
  if (typeof document < "u") {
    var t = document.querySelectorAll("style[".concat(Gn, '="').concat(e, '"]'));
    t.forEach(function(r) {
      if (r[nn] === n) {
        var o;
        (o = r.parentNode) === null || o === void 0 || o.removeChild(r);
      }
    });
  }
}
var Dp = 0;
function Bp(e, n) {
  Sn.set(e, (Sn.get(e) || 0) - 1);
  var t = Array.from(Sn.keys()), r = t.filter(function(o) {
    var i = Sn.get(o) || 0;
    return i <= 0;
  });
  t.length - r.length > Dp && r.forEach(function(o) {
    Lp(o, n), Sn.delete(o);
  });
}
var Fp = function(n, t, r, o) {
  var i = r.getDerivativeToken(n), s = F(F({}, i), t);
  return o && (s = o(s)), s;
}, Iu = "token";
function zp(e, n) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = sn(Hr), o = r.cache.instanceId, i = r.container, s = t.salt, a = s === void 0 ? "" : s, c = t.override, l = c === void 0 ? Np : c, u = t.formatToken, d = t.getComputedToken, f = t.cssVar, v = yp(function() {
    return Object.assign.apply(Object, [{}].concat(Yt(n)));
  }, n), m = kr(v), x = kr(l), h = f ? kr(f) : "", S = _a(Iu, [a, e.id, m, x, h], function() {
    var b, g = d ? d(v, l, e) : Fp(v, l, e, u), C = F({}, g), y = "";
    if (f) {
      var A = ku(g, f.key, {
        prefix: f.prefix,
        ignore: f.ignore,
        unitless: f.unitless,
        preserve: f.preserve
      }), E = ae(A, 2);
      g = E[0], y = E[1];
    }
    var P = Ec(g, a);
    g._tokenKey = P, C._tokenKey = Ec(C, a);
    var D = (b = f == null ? void 0 : f.key) !== null && b !== void 0 ? b : P;
    g._themeKey = D, Mp(D);
    var W = "".concat(jp, "-").concat(Nr(P));
    return g._hashId = W, [g, W, C, y, (f == null ? void 0 : f.key) || ""];
  }, function(b) {
    Bp(b[0]._themeKey, o);
  }, function(b) {
    var g = ae(b, 4), C = g[0], y = g[3];
    if (f && y) {
      var A = Tn(y, Nr("css-variables-".concat(C._themeKey)), {
        mark: St,
        prepend: "queue",
        attachTo: i,
        priority: -999
      });
      A[nn] = o, A.setAttribute(Gn, C._themeKey);
    }
  });
  return S;
}
var Vp = function(n, t, r) {
  var o = ae(n, 5), i = o[2], s = o[3], a = o[4], c = r || {}, l = c.plain;
  if (!s)
    return null;
  var u = i._tokenKey, d = -999, f = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(d)
  }, v = Do(s, a, u, f, l);
  return [d, u, v];
}, Hp = {
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
}, Nu = "comm", ju = "rule", Mu = "decl", Up = "@import", qp = "@namespace", Wp = "@keyframes", $p = "@layer", Lu = Math.abs, Ca = String.fromCharCode;
function Du(e) {
  return e.trim();
}
function wo(e, n, t) {
  return e.replace(n, t);
}
function Xp(e, n, t) {
  return e.indexOf(n, t);
}
function Vn(e, n) {
  return e.charCodeAt(n) | 0;
}
function Kn(e, n, t) {
  return e.slice(n, t);
}
function Mt(e) {
  return e.length;
}
function Yp(e) {
  return e.length;
}
function no(e, n) {
  return n.push(e), e;
}
var ci = 1, Zn = 1, Bu = 0, pt = 0, Be = 0, tr = "";
function Aa(e, n, t, r, o, i, s, a) {
  return { value: e, root: n, parent: t, type: r, props: o, children: i, line: ci, column: Zn, length: s, return: "", siblings: a };
}
function Gp() {
  return Be;
}
function Kp() {
  return Be = pt > 0 ? Vn(tr, --pt) : 0, Zn--, Be === 10 && (Zn = 1, ci--), Be;
}
function wt() {
  return Be = pt < Bu ? Vn(tr, pt++) : 0, Zn++, Be === 10 && (Zn = 1, ci++), Be;
}
function rn() {
  return Vn(tr, pt);
}
function Eo() {
  return pt;
}
function li(e, n) {
  return Kn(tr, e, n);
}
function Mr(e) {
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
function Zp(e) {
  return ci = Zn = 1, Bu = Mt(tr = e), pt = 0, [];
}
function Jp(e) {
  return tr = "", e;
}
function ji(e) {
  return Du(li(pt - 1, ms(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Qp(e) {
  for (; (Be = rn()) && Be < 33; )
    wt();
  return Mr(e) > 2 || Mr(Be) > 3 ? "" : " ";
}
function ex(e, n) {
  for (; --n && wt() && !(Be < 48 || Be > 102 || Be > 57 && Be < 65 || Be > 70 && Be < 97); )
    ;
  return li(e, Eo() + (n < 6 && rn() == 32 && wt() == 32));
}
function ms(e) {
  for (; wt(); )
    switch (Be) {
      // ] ) " '
      case e:
        return pt;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && ms(Be);
        break;
      // (
      case 40:
        e === 41 && ms(e);
        break;
      // \
      case 92:
        wt();
        break;
    }
  return pt;
}
function tx(e, n) {
  for (; wt() && e + Be !== 57; )
    if (e + Be === 84 && rn() === 47)
      break;
  return "/*" + li(n, pt - 1) + "*" + Ca(e === 47 ? e : wt());
}
function nx(e) {
  for (; !Mr(rn()); )
    wt();
  return li(e, pt);
}
function rx(e) {
  return Jp(_o("", null, null, null, [""], e = Zp(e), 0, [0], e));
}
function _o(e, n, t, r, o, i, s, a, c) {
  for (var l = 0, u = 0, d = s, f = 0, v = 0, m = 0, x = 1, h = 1, S = 1, b = 0, g = "", C = o, y = i, A = r, E = g; h; )
    switch (m = b, b = wt()) {
      // (
      case 40:
        if (m != 108 && Vn(E, d - 1) == 58) {
          Xp(E += wo(ji(b), "&", "&\f"), "&\f", Lu(l ? a[l - 1] : 0)) != -1 && (S = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        E += ji(b);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        E += Qp(m);
        break;
      // \
      case 92:
        E += ex(Eo() - 1, 7);
        continue;
      // /
      case 47:
        switch (rn()) {
          case 42:
          case 47:
            no(ox(tx(wt(), Eo()), n, t, c), c), (Mr(m || 1) == 5 || Mr(rn() || 1) == 5) && Mt(E) && Kn(E, -1, void 0) !== " " && (E += " ");
            break;
          default:
            E += "/";
        }
        break;
      // {
      case 123 * x:
        a[l++] = Mt(E) * S;
      // } ; \0
      case 125 * x:
      case 59:
      case 0:
        switch (b) {
          // \0 }
          case 0:
          case 125:
            h = 0;
          // ;
          case 59 + u:
            S == -1 && (E = wo(E, /\f/g, "")), v > 0 && (Mt(E) - d || x === 0 && m === 47) && no(v > 32 ? Tc(E + ";", r, t, d - 1, c) : Tc(wo(E, " ", "") + ";", r, t, d - 2, c), c);
            break;
          // @ ;
          case 59:
            E += ";";
          // { rule/at-rule
          default:
            if (no(A = Ac(E, n, t, l, u, o, a, g, C = [], y = [], d, i), i), b === 123)
              if (u === 0)
                _o(E, n, A, A, C, i, d, a, y);
              else {
                switch (f) {
                  // c(ontainer)
                  case 99:
                    if (Vn(E, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (Vn(E, 2) === 97) break;
                  default:
                    u = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                u ? _o(e, A, A, r && no(Ac(e, A, A, 0, 0, o, a, g, o, C = [], d, y), y), o, y, d, a, r ? C : y) : _o(E, A, A, A, [""], y, 0, a, y);
              }
        }
        l = u = v = 0, x = S = 1, g = E = "", d = s;
        break;
      // :
      case 58:
        d = 1 + Mt(E), v = m;
      default:
        if (x < 1) {
          if (b == 123)
            --x;
          else if (b == 125 && x++ == 0 && Kp() == 125)
            continue;
        }
        switch (E += Ca(b), b * x) {
          // &
          case 38:
            S = u > 0 ? 1 : (E += "\f", -1);
            break;
          // ,
          case 44:
            a[l++] = (Mt(E) - 1) * S, S = 1;
            break;
          // @
          case 64:
            rn() === 45 && (E += ji(wt())), f = rn(), u = d = Mt(g = E += nx(Eo())), b++;
            break;
          // -
          case 45:
            m === 45 && Mt(E) == 2 && (x = 0);
        }
    }
  return i;
}
function Ac(e, n, t, r, o, i, s, a, c, l, u, d) {
  for (var f = o - 1, v = o === 0 ? i : [""], m = Yp(v), x = 0, h = 0, S = 0; x < r; ++x)
    for (var b = 0, g = Kn(e, f + 1, f = Lu(h = s[x])), C = e; b < m; ++b)
      (C = Du(h > 0 ? v[b] + " " + g : wo(g, /&\f/g, v[b]))) && (c[S++] = C);
  return Aa(e, n, t, o === 0 ? ju : a, c, l, u, d);
}
function ox(e, n, t, r) {
  return Aa(e, n, t, Nu, Ca(Gp()), Kn(e, 2, -2), 0, r);
}
function Tc(e, n, t, r, o) {
  return Aa(e, n, t, Mu, Kn(e, 0, r), Kn(e, r + 1, -1), r, o);
}
function gs(e, n) {
  for (var t = "", r = 0; r < e.length; r++)
    t += n(e[r], r, e, n) || "";
  return t;
}
function ix(e, n, t, r) {
  switch (e.type) {
    case $p:
      if (e.children.length) break;
    case Up:
    case qp:
    case Mu:
      return e.return = e.return || e.value;
    case Nu:
      return "";
    case Wp:
      return e.return = e.value + "{" + gs(e.children, r) + "}";
    case ju:
      if (!Mt(e.value = e.props.join(","))) return "";
  }
  return Mt(t = gs(e.children, r)) ? e.return = e.value + "{" + t + "}" : "";
}
function Fu(e, n) {
  var t = n.path, r = n.parentSelectors;
  dn(!1, "[Ant Design CSS-in-JS] ".concat(t ? "Error in ".concat(t, ": ") : "").concat(e).concat(r.length ? " Selector: ".concat(r.join(" | ")) : ""));
}
var sx = function(n, t, r) {
  if (n === "content") {
    var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, i = ["normal", "none", "initial", "inherit", "unset"];
    (typeof t != "string" || i.indexOf(t) === -1 && !o.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")) && Fu("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(t, "\"'`."), r);
  }
}, ax = function(n, t, r) {
  n === "animation" && r.hashId && t !== "none" && Fu("You seem to be using hashed animation '".concat(t, "', in which case 'animationName' with Keyframe as value is recommended."), r);
}, Oc = "data-ant-cssinjs-cache-path", zu = "_FILE_STYLE__", On, Vu = !0;
function cx() {
  if (!On && (On = {}, Zt())) {
    var e = document.createElement("div");
    e.className = Oc, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var n = getComputedStyle(e).content || "";
    n = n.replace(/^"/, "").replace(/"$/, ""), n.split(";").forEach(function(o) {
      var i = o.split(":"), s = ae(i, 2), a = s[0], c = s[1];
      On[a] = c;
    });
    var t = document.querySelector("style[".concat(Oc, "]"));
    if (t) {
      var r;
      Vu = !1, (r = t.parentNode) === null || r === void 0 || r.removeChild(t);
    }
    document.body.removeChild(e);
  }
}
function lx(e) {
  return cx(), !!On[e];
}
function ux(e) {
  var n = On[e], t = null;
  if (n && Zt())
    if (Vu)
      t = zu;
    else {
      var r = document.querySelector("style[".concat(St, '="').concat(On[e], '"]'));
      r ? t = r.innerHTML : delete On[e];
    }
  return [t, n];
}
var Hu = "_skip_check_", Uu = "_multi_value_";
function Co(e) {
  var n = gs(rx(e), ix);
  return n.replace(/\{%%%\:[^;];}/g, ";");
}
function fx(e) {
  return ye(e) === "object" && e && (Hu in e || Uu in e);
}
function Rc(e, n, t) {
  if (!n)
    return e;
  var r = ".".concat(n), o = t === "low" ? ":where(".concat(r, ")") : r, i = e.split(",").map(function(s) {
    var a, c = s.trim().split(/\s+/), l = c[0] || "", u = ((a = l.match(/^\w+/)) === null || a === void 0 ? void 0 : a[0]) || "";
    return l = "".concat(u).concat(o).concat(l.slice(u.length)), [l].concat(Yt(c.slice(1))).join(" ");
  });
  return i.join(",");
}
var dx = function e(n) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = r.root, i = r.injectHash, s = r.parentSelectors, a = t.hashId, c = t.layer, l = t.path, u = t.hashPriority, d = t.transformers, f = d === void 0 ? [] : d, v = t.linters, m = v === void 0 ? [] : v, x = "", h = {};
  function S(C) {
    var y = C.getName(a);
    if (!h[y]) {
      var A = e(C.style, t, {
        root: !1,
        parentSelectors: s
      }), E = ae(A, 1), P = E[0];
      h[y] = "@keyframes ".concat(C.getName(a)).concat(P);
    }
  }
  function b(C) {
    var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return C.forEach(function(A) {
      Array.isArray(A) ? b(A, y) : A && y.push(A);
    }), y;
  }
  var g = b(Array.isArray(n) ? n : [n]);
  return g.forEach(function(C) {
    var y = typeof C == "string" && !o ? {} : C;
    if (typeof y == "string")
      x += "".concat(y, `
`);
    else if (y._keyframe)
      S(y);
    else {
      var A = f.reduce(function(E, P) {
        var D;
        return (P == null || (D = P.visit) === null || D === void 0 ? void 0 : D.call(P, E)) || E;
      }, y);
      Object.keys(A).forEach(function(E) {
        var P = A[E];
        if (ye(P) === "object" && P && (E !== "animationName" || !P._keyframe) && !fx(P)) {
          var D = !1, W = E.trim(), ee = !1;
          (o || i) && a ? W.startsWith("@") ? D = !0 : W === "&" ? W = Rc("", a, u) : W = Rc(E, a, u) : o && !a && (W === "&" || W === "") && (W = "", ee = !0);
          var Y = e(P, t, {
            root: ee,
            injectHash: D,
            parentSelectors: [].concat(Yt(s), [W])
          }), N = ae(Y, 2), z = N[0], q = N[1];
          h = F(F({}, h), q), x += "".concat(W).concat(z);
        } else {
          let G = function(Z, re) {
            process.env.NODE_ENV !== "production" && (ye(P) !== "object" || !(P != null && P[Hu])) && [sx, ax].concat(Yt(m)).forEach(function(te) {
              return te(Z, re, {
                path: l,
                hashId: a,
                parentSelectors: s
              });
            });
            var oe = Z.replace(/[A-Z]/g, function(te) {
              return "-".concat(te.toLowerCase());
            }), K = re;
            !Hp[Z] && typeof K == "number" && K !== 0 && (K = "".concat(K, "px")), Z === "animationName" && re !== null && re !== void 0 && re._keyframe && (S(re), K = re.getName(a)), x += "".concat(oe, ":").concat(K, ";");
          };
          var $, J = ($ = P == null ? void 0 : P.value) !== null && $ !== void 0 ? $ : P;
          ye(P) === "object" && P !== null && P !== void 0 && P[Uu] && Array.isArray(J) ? J.forEach(function(Z) {
            G(E, Z);
          }) : G(E, J);
        }
      });
    }
  }), o ? c && (x && (x = "@layer ".concat(c.name, " {").concat(x, "}")), c.dependencies && (h["@layer ".concat(c.name)] = c.dependencies.map(function(C) {
    return "@layer ".concat(C, ", ").concat(c.name, ";");
  }).join(`
`))) : x = "{".concat(x, "}"), [x, h];
};
function qu(e, n) {
  return Nr("".concat(e.join("%")).concat(n));
}
function hx() {
  return null;
}
var Wu = "style";
function vs(e, n) {
  var t = e.token, r = e.path, o = e.hashId, i = e.layer, s = e.nonce, a = e.clientOnly, c = e.order, l = c === void 0 ? 0 : c, u = w.useContext(Hr), d = u.autoClear, f = u.mock, v = u.defaultCache, m = u.hashPriority, x = u.container, h = u.ssrInline, S = u.transformers, b = u.linters, g = u.cache, C = u.layer, y = t._tokenKey, A = [y];
  C && A.push("layer"), A.push.apply(A, Yt(r));
  var E = ps;
  process.env.NODE_ENV !== "production" && f !== void 0 && (E = f === "client");
  var P = _a(
    Wu,
    A,
    // Create cache if needed
    function() {
      var N = A.join("|");
      if (lx(N)) {
        var z = ux(N), q = ae(z, 2), $ = q[0], J = q[1];
        if ($)
          return [$, y, J, {}, a, l];
      }
      var G = n(), Z = dx(G, {
        hashId: o,
        hashPriority: m,
        layer: C ? i : void 0,
        path: r.join("-"),
        transformers: S,
        linters: b
      }), re = ae(Z, 2), oe = re[0], K = re[1], te = Co(oe), fe = qu(A, te);
      return [te, y, fe, K, a, l];
    },
    // Remove cache if no need
    function(N, z) {
      var q = ae(N, 3), $ = q[2];
      (z || d) && ps && Ou($, {
        mark: St
      });
    },
    // Effect: Inject style here
    function(N) {
      var z = ae(N, 4), q = z[0];
      z[1];
      var $ = z[2], J = z[3];
      if (E && q !== zu) {
        var G = {
          mark: St,
          prepend: C ? !1 : "queue",
          attachTo: x,
          priority: l
        }, Z = typeof s == "function" ? s() : s;
        Z && (G.csp = {
          nonce: Z
        });
        var re = [], oe = [];
        Object.keys(J).forEach(function(te) {
          te.startsWith("@layer") ? re.push(te) : oe.push(te);
        }), re.forEach(function(te) {
          Tn(Co(J[te]), "_layer-".concat(te), F(F({}, G), {}, {
            prepend: !0
          }));
        });
        var K = Tn(q, $, G);
        K[nn] = g.instanceId, K.setAttribute(Gn, y), process.env.NODE_ENV !== "production" && K.setAttribute(xp, A.join("|")), oe.forEach(function(te) {
          Tn(Co(J[te]), "_effect-".concat(te), G);
        });
      }
    }
  ), D = ae(P, 3), W = D[0], ee = D[1], Y = D[2];
  return function(N) {
    var z;
    if (!h || E || !v)
      z = /* @__PURE__ */ w.createElement(hx, null);
    else {
      var q;
      z = /* @__PURE__ */ w.createElement("style", Ft({}, (q = {}, H(q, Gn, ee), H(q, St, Y), q), {
        dangerouslySetInnerHTML: {
          __html: W
        }
      }));
    }
    return /* @__PURE__ */ w.createElement(w.Fragment, null, z, N);
  };
}
var px = function(n, t, r) {
  var o = ae(n, 6), i = o[0], s = o[1], a = o[2], c = o[3], l = o[4], u = o[5], d = r || {}, f = d.plain;
  if (l)
    return null;
  var v = i, m = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  };
  return v = Do(i, s, a, m, f), c && Object.keys(c).forEach(function(x) {
    if (!t[x]) {
      t[x] = !0;
      var h = Co(c[x]), S = Do(h, s, "_effect-".concat(x), m, f);
      x.startsWith("@layer") ? v = S + v : v += S;
    }
  }), [u, a, v];
}, $u = "cssVar", xx = function(n, t) {
  var r = n.key, o = n.prefix, i = n.unitless, s = n.ignore, a = n.token, c = n.scope, l = c === void 0 ? "" : c, u = sn(Hr), d = u.cache.instanceId, f = u.container, v = a._tokenKey, m = [].concat(Yt(n.path), [r, l, v]), x = _a($u, m, function() {
    var h = t(), S = ku(h, r, {
      prefix: o,
      unitless: i,
      ignore: s,
      scope: l
    }), b = ae(S, 2), g = b[0], C = b[1], y = qu(m, C);
    return [g, C, y, r];
  }, function(h) {
    var S = ae(h, 3), b = S[2];
    ps && Ou(b, {
      mark: St
    });
  }, function(h) {
    var S = ae(h, 3), b = S[1], g = S[2];
    if (b) {
      var C = Tn(b, g, {
        mark: St,
        prepend: "queue",
        attachTo: f,
        priority: -999
      });
      C[nn] = d, C.setAttribute(Gn, r);
    }
  });
  return x;
}, mx = function(n, t, r) {
  var o = ae(n, 4), i = o[1], s = o[2], a = o[3], c = r || {}, l = c.plain;
  if (!i)
    return null;
  var u = -999, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  }, f = Do(i, a, s, d, l);
  return [u, s, f];
}, hr;
hr = {}, H(hr, Wu, px), H(hr, Iu, Vp), H(hr, $u, mx);
var Xu = /* @__PURE__ */ function() {
  function e(n, t) {
    Ct(this, e), H(this, "name", void 0), H(this, "style", void 0), H(this, "_keyframe", !0), this.name = n, this.style = t;
  }
  return At(e, [{
    key: "getName",
    value: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return t ? "".concat(t, "-").concat(this.name) : this.name;
    }
  }]), e;
}();
function Dn(e) {
  return e.notSplit = !0, e;
}
Dn(["borderTop", "borderBottom"]), Dn(["borderTop"]), Dn(["borderBottom"]), Dn(["borderLeft", "borderRight"]), Dn(["borderLeft"]), Dn(["borderRight"]);
var Ta = /* @__PURE__ */ aa({});
function gx(e) {
  return Eu(e) || yu(e) || Sa(e) || _u();
}
function ys(e, n) {
  for (var t = e, r = 0; r < n.length; r += 1) {
    if (t == null)
      return;
    t = t[n[r]];
  }
  return t;
}
function Yu(e, n, t, r) {
  if (!n.length)
    return t;
  var o = gx(n), i = o[0], s = o.slice(1), a;
  return !e && typeof i == "number" ? a = [] : Array.isArray(e) ? a = Yt(e) : a = F({}, e), r && t === void 0 && s.length === 1 ? delete a[i][s[0]] : a[i] = Yu(a[i], s, t, r), a;
}
function Mi(e, n, t) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return n.length && r && t === void 0 && !ys(e, n.slice(0, -1)) ? e : Yu(e, n, t, r);
}
function vx(e) {
  return ye(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function kc(e) {
  return Array.isArray(e) ? [] : {};
}
var yx = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function bx() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  var r = kc(n[0]);
  return n.forEach(function(o) {
    function i(s, a) {
      var c = new Set(a), l = ys(o, s), u = Array.isArray(l);
      if (u || vx(l)) {
        if (!c.has(l)) {
          c.add(l);
          var d = ys(r, s);
          u ? r = Mi(r, s, []) : (!d || ye(d) !== "object") && (r = Mi(r, s, kc(l))), yx(l).forEach(function(f) {
            i([].concat(Yt(s), [f]), c);
          });
        }
      } else
        r = Mi(r, s, l);
    }
    i([]);
  }), r;
}
function Gu() {
}
let $t = null;
function Sx() {
  $t = null, du();
}
let Oa = Gu;
process.env.NODE_ENV !== "production" && (Oa = (e, n, t) => {
  dn(e, `[antd: ${n}] ${t}`), process.env.NODE_ENV === "test" && Sx();
});
const Ku = /* @__PURE__ */ w.createContext({}), nr = process.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: n
  } = w.useContext(Ku), t = (r, o, i) => {
    if (!r)
      if (n === !1 && o === "deprecated") {
        const s = $t;
        $t || ($t = {}), $t[e] = $t[e] || [], $t[e].includes(i || "") || $t[e].push(i || ""), s || console.warn("[antd] There exists deprecated usage in your code:", $t);
      } else
        process.env.NODE_ENV !== "production" && Oa(r, e, i);
  };
  return t.deprecated = (r, o, i, s) => {
    t(r, "deprecated", `\`${o}\` is deprecated. Please use \`${i}\` instead.${s ? ` ${s}` : ""}`);
  }, t;
} : () => {
  const e = () => {
  };
  return e.deprecated = Gu, e;
}, ui = Oa, wx = /* @__PURE__ */ aa(void 0), st = "${label} is not a valid ${type}", fi = {
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
Object.assign({}, fi.Modal);
let Ao = [];
const Pc = () => Ao.reduce((e, n) => Object.assign(Object.assign({}, e), n), fi.Modal);
function Ex(e) {
  if (e) {
    const n = Object.assign({}, e);
    return Ao.push(n), Pc(), () => {
      Ao = Ao.filter((t) => t !== n), Pc();
    };
  }
  Object.assign({}, fi.Modal);
}
const Zu = /* @__PURE__ */ aa(void 0), Ju = "internalMark", Qu = (e) => {
  const {
    locale: n = {},
    children: t,
    _ANT_MARK__: r
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const i = nr("LocaleProvider");
    process.env.NODE_ENV !== "production" && i(r === Ju, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  w.useEffect(() => Ex(n == null ? void 0 : n.Modal), [n]);
  const o = w.useMemo(() => Object.assign(Object.assign({}, n), {
    exist: !0
  }), [n]);
  return /* @__PURE__ */ w.createElement(Zu.Provider, {
    value: o
  }, t);
};
process.env.NODE_ENV !== "production" && (Qu.displayName = "LocaleProvider");
const ef = {
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
}, Lr = Object.assign(Object.assign({}, ef), {
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
}), He = Math.round;
function Li(e, n) {
  const t = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], r = t.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    r[o] = n(r[o] || 0, t[o] || "", o);
  return t[3] ? r[3] = t[3].includes("%") ? r[3] / 100 : r[3] : r[3] = 1, r;
}
const Ic = (e, n, t) => t === 0 ? e : e / 100;
function pr(e, n) {
  const t = n || 255;
  return e > t ? t : e < 0 ? 0 : e;
}
class Ne {
  constructor(n) {
    H(this, "isValid", !0), H(this, "r", 0), H(this, "g", 0), H(this, "b", 0), H(this, "a", 1), H(this, "_h", void 0), H(this, "_s", void 0), H(this, "_l", void 0), H(this, "_v", void 0), H(this, "_max", void 0), H(this, "_min", void 0), H(this, "_brightness", void 0);
    function t(r) {
      return r[0] in n && r[1] in n && r[2] in n;
    }
    if (n) if (typeof n == "string") {
      let o = function(i) {
        return r.startsWith(i);
      };
      const r = n.trim();
      /^#?[A-F\d]{3,8}$/i.test(r) ? this.fromHexString(r) : o("rgb") ? this.fromRgbString(r) : o("hsl") ? this.fromHslString(r) : (o("hsv") || o("hsb")) && this.fromHsvString(r);
    } else if (n instanceof Ne)
      this.r = n.r, this.g = n.g, this.b = n.b, this.a = n.a, this._h = n._h, this._s = n._s, this._l = n._l, this._v = n._v;
    else if (t("rgb"))
      this.r = pr(n.r), this.g = pr(n.g), this.b = pr(n.b), this.a = typeof n.a == "number" ? pr(n.a, 1) : 1;
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
      n === 0 ? this._h = 0 : this._h = He(60 * (this.r === this.getMax() ? (this.g - this.b) / n + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / n + 2 : (this.r - this.g) / n + 4));
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
      r: He(i("r")),
      g: He(i("g")),
      b: He(i("b")),
      a: He(i("a") * 100) / 100
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
    const t = this._c(n), r = this.a + t.a * (1 - this.a), o = (i) => He((this[i] * this.a + t[i] * t.a * (1 - this.a)) / r);
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
      const i = He(this.a * 255).toString(16);
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
    const n = this.getHue(), t = He(this.getSaturation() * 100), r = He(this.getLightness() * 100);
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
    return o[n] = pr(t, r), o;
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
      const f = He(r * 255);
      this.r = f, this.g = f, this.b = f;
    }
    let i = 0, s = 0, a = 0;
    const c = n / 60, l = (1 - Math.abs(2 * r - 1)) * t, u = l * (1 - Math.abs(c % 2 - 1));
    c >= 0 && c < 1 ? (i = l, s = u) : c >= 1 && c < 2 ? (i = u, s = l) : c >= 2 && c < 3 ? (s = l, a = u) : c >= 3 && c < 4 ? (s = u, a = l) : c >= 4 && c < 5 ? (i = u, a = l) : c >= 5 && c < 6 && (i = l, a = u);
    const d = r - l / 2;
    this.r = He((i + d) * 255), this.g = He((s + d) * 255), this.b = He((a + d) * 255);
  }
  fromHsv({
    h: n,
    s: t,
    v: r,
    a: o
  }) {
    this._h = n % 360, this._s = t, this._v = r, this.a = typeof o == "number" ? o : 1;
    const i = He(r * 255);
    if (this.r = i, this.g = i, this.b = i, t <= 0)
      return;
    const s = n / 60, a = Math.floor(s), c = s - a, l = He(r * (1 - t) * 255), u = He(r * (1 - t * c) * 255), d = He(r * (1 - t * (1 - c)) * 255);
    switch (a) {
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
  fromHsvString(n) {
    const t = Li(n, Ic);
    this.fromHsv({
      h: t[0],
      s: t[1],
      v: t[2],
      a: t[3]
    });
  }
  fromHslString(n) {
    const t = Li(n, Ic);
    this.fromHsl({
      h: t[0],
      s: t[1],
      l: t[2],
      a: t[3]
    });
  }
  fromRgbString(n) {
    const t = Li(n, (r, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? He(r / 100 * 255) : r
    ));
    this.r = t[0], this.g = t[1], this.b = t[2], this.a = t[3];
  }
}
var ro = 2, Nc = 0.16, _x = 0.05, Cx = 0.05, Ax = 0.15, tf = 5, nf = 4, Tx = [{
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
function jc(e, n, t) {
  var r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = t ? Math.round(e.h) - ro * n : Math.round(e.h) + ro * n : r = t ? Math.round(e.h) + ro * n : Math.round(e.h) - ro * n, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function Mc(e, n, t) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var r;
  return t ? r = e.s - Nc * n : n === nf ? r = e.s + Nc : r = e.s + _x * n, r > 1 && (r = 1), t && n === tf && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Math.round(r * 100) / 100;
}
function Lc(e, n, t) {
  var r;
  return t ? r = e.v + Cx * n : r = e.v - Ax * n, r = Math.max(0, Math.min(1, r)), Math.round(r * 100) / 100;
}
function Dr(e) {
  for (var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = [], r = new Ne(e), o = r.toHsv(), i = tf; i > 0; i -= 1) {
    var s = new Ne({
      h: jc(o, i, !0),
      s: Mc(o, i, !0),
      v: Lc(o, i, !0)
    });
    t.push(s);
  }
  t.push(r);
  for (var a = 1; a <= nf; a += 1) {
    var c = new Ne({
      h: jc(o, a),
      s: Mc(o, a),
      v: Lc(o, a)
    });
    t.push(c);
  }
  return n.theme === "dark" ? Tx.map(function(l) {
    var u = l.index, d = l.amount;
    return new Ne(n.backgroundColor || "#141414").mix(t[u], d).toHexString();
  }) : t.map(function(l) {
    return l.toHexString();
  });
}
var Di = {
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
}, bs = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
bs.primary = bs[5];
var Ss = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
Ss.primary = Ss[5];
var ws = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
ws.primary = ws[5];
var Es = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
Es.primary = Es[5];
var _s = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
_s.primary = _s[5];
var Cs = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
Cs.primary = Cs[5];
var As = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
As.primary = As[5];
var Ts = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
Ts.primary = Ts[5];
var Bo = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
Bo.primary = Bo[5];
var Os = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
Os.primary = Os[5];
var Rs = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
Rs.primary = Rs[5];
var ks = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
ks.primary = ks[5];
var Ps = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
Ps.primary = Ps[5];
var Bi = {
  red: bs,
  volcano: Ss,
  orange: ws,
  gold: Es,
  yellow: _s,
  lime: Cs,
  green: As,
  cyan: Ts,
  blue: Bo,
  geekblue: Os,
  purple: Rs,
  magenta: ks,
  grey: Ps
};
function Ox(e, n) {
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
  } = e, d = t(c), f = t(o), v = t(i), m = t(s), x = t(a), h = r(l, u), S = e.colorLink || e.colorInfo, b = t(S), g = new Ne(m[1]).mix(new Ne(m[3]), 50).toHexString();
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
    colorSuccessBg: f[1],
    colorSuccessBgHover: f[2],
    colorSuccessBorder: f[3],
    colorSuccessBorderHover: f[4],
    colorSuccessHover: f[4],
    colorSuccess: f[6],
    colorSuccessActive: f[7],
    colorSuccessTextHover: f[8],
    colorSuccessText: f[9],
    colorSuccessTextActive: f[10],
    colorErrorBg: m[1],
    colorErrorBgHover: m[2],
    colorErrorBgFilledHover: g,
    colorErrorBgActive: m[3],
    colorErrorBorder: m[3],
    colorErrorBorderHover: m[4],
    colorErrorHover: m[5],
    colorError: m[6],
    colorErrorActive: m[7],
    colorErrorTextHover: m[8],
    colorErrorText: m[9],
    colorErrorTextActive: m[10],
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
    colorLinkHover: b[4],
    colorLink: b[6],
    colorLinkActive: b[7],
    colorBgMask: new Ne("#000").setA(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const Rx = (e) => {
  let n = e, t = e, r = e, o = e;
  return e < 6 && e >= 5 ? n = e + 1 : e < 16 && e >= 6 ? n = e + 2 : e >= 16 && (n = 16), e < 7 && e >= 5 ? t = 4 : e < 8 && e >= 7 ? t = 5 : e < 14 && e >= 8 ? t = 6 : e < 16 && e >= 14 ? t = 7 : e >= 16 && (t = 8), e < 6 && e >= 2 ? r = 1 : e >= 6 && (r = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
    borderRadius: e,
    borderRadiusXS: r,
    borderRadiusSM: t,
    borderRadiusLG: n,
    borderRadiusOuter: o
  };
};
function kx(e) {
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
  }, Rx(r));
}
const Px = (e) => {
  const {
    controlHeight: n
  } = e;
  return {
    controlHeightSM: n * 0.75,
    controlHeightXS: n * 0.5,
    controlHeightLG: n * 1.25
  };
};
function Ix(e) {
  return (e + 8) / e;
}
function Nx(e) {
  const n = Array.from({
    length: 10
  }).map((t, r) => {
    const o = r - 1, i = e * Math.pow(Math.E, o / 5), s = r > 1 ? Math.floor(i) : Math.ceil(i);
    return Math.floor(s / 2) * 2;
  });
  return n[1] = e, n.map((t) => ({
    size: t,
    lineHeight: Ix(t)
  }));
}
const jx = (e) => {
  const n = Nx(e), t = n.map((u) => u.size), r = n.map((u) => u.lineHeight), o = t[1], i = t[0], s = t[2], a = r[1], c = r[0], l = r[2];
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
function Mx(e) {
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
const ft = (e, n) => new Ne(e).setA(n).toRgbString(), xr = (e, n) => new Ne(e).darken(n).toHexString(), Lx = (e) => {
  const n = Dr(e);
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
}, Dx = (e, n) => {
  const t = e || "#fff", r = n || "#000";
  return {
    colorBgBase: t,
    colorTextBase: r,
    colorText: ft(r, 0.88),
    colorTextSecondary: ft(r, 0.65),
    colorTextTertiary: ft(r, 0.45),
    colorTextQuaternary: ft(r, 0.25),
    colorFill: ft(r, 0.15),
    colorFillSecondary: ft(r, 0.06),
    colorFillTertiary: ft(r, 0.04),
    colorFillQuaternary: ft(r, 0.02),
    colorBgSolid: ft(r, 1),
    colorBgSolidHover: ft(r, 0.75),
    colorBgSolidActive: ft(r, 0.95),
    colorBgLayout: xr(t, 4),
    colorBgContainer: xr(t, 0),
    colorBgElevated: xr(t, 0),
    colorBgSpotlight: ft(r, 0.85),
    colorBgBlur: "transparent",
    colorBorder: xr(t, 15),
    colorBorderSecondary: xr(t, 6)
  };
};
function Bx(e) {
  Di.pink = Di.magenta, Bi.pink = Bi.magenta;
  const n = Object.keys(ef).map((t) => {
    const r = e[t] === Di[t] ? Bi[t] : Dr(e[t]);
    return Array.from({
      length: 10
    }, () => 1).reduce((o, i, s) => (o[`${t}-${s + 1}`] = r[s], o[`${t}${s + 1}`] = r[s], o), {});
  }).reduce((t, r) => (t = Object.assign(Object.assign({}, t), r), t), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), n), Ox(e, {
    generateColorPalettes: Lx,
    generateNeutralColorPalettes: Dx
  })), jx(e.fontSize)), Mx(e)), Px(e)), kx(e));
}
const rf = hs(Bx), Is = {
  token: Lr,
  override: {
    override: Lr
  },
  hashed: !0
}, of = /* @__PURE__ */ je.createContext(Is), Ns = "ant", Ra = "anticon", Fx = (e, n) => n || (e ? `${Ns}-${e}` : Ns), ln = /* @__PURE__ */ w.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: Fx,
  iconPrefixCls: Ra
}), {
  Consumer: my
} = ln, Dc = {};
function sf(e) {
  const n = w.useContext(ln), {
    getPrefixCls: t,
    direction: r,
    getPopupContainer: o
  } = n, i = n[e];
  return Object.assign(Object.assign({
    classNames: Dc,
    styles: Dc
  }, i), {
    getPrefixCls: t,
    direction: r,
    getPopupContainer: o
  });
}
const zx = `-ant-${Date.now()}-${Math.random()}`;
function Vx(e, n) {
  const t = {}, r = (s, a) => {
    let c = s.clone();
    return c = (a == null ? void 0 : a(c)) || c, c.toRgbString();
  }, o = (s, a) => {
    const c = new Ne(s), l = Dr(c.toRgbString());
    t[`${a}-color`] = r(c), t[`${a}-color-disabled`] = l[1], t[`${a}-color-hover`] = l[4], t[`${a}-color-active`] = l[6], t[`${a}-color-outline`] = c.clone().setA(0.2).toRgbString(), t[`${a}-color-deprecated-bg`] = l[0], t[`${a}-color-deprecated-border`] = l[2];
  };
  if (n.primaryColor) {
    o(n.primaryColor, "primary");
    const s = new Ne(n.primaryColor), a = Dr(s.toRgbString());
    a.forEach((l, u) => {
      t[`primary-${u + 1}`] = l;
    }), t["primary-color-deprecated-l-35"] = r(s, (l) => l.lighten(35)), t["primary-color-deprecated-l-20"] = r(s, (l) => l.lighten(20)), t["primary-color-deprecated-t-20"] = r(s, (l) => l.tint(20)), t["primary-color-deprecated-t-50"] = r(s, (l) => l.tint(50)), t["primary-color-deprecated-f-12"] = r(s, (l) => l.setA(l.a * 0.12));
    const c = new Ne(a[0]);
    t["primary-color-active-deprecated-f-30"] = r(c, (l) => l.setA(l.a * 0.3)), t["primary-color-active-deprecated-d-02"] = r(c, (l) => l.darken(2));
  }
  return n.successColor && o(n.successColor, "success"), n.warningColor && o(n.warningColor, "warning"), n.errorColor && o(n.errorColor, "error"), n.infoColor && o(n.infoColor, "info"), `
  :root {
    ${Object.keys(t).map((s) => `--${e}-${s}: ${t[s]};`).join(`
`)}
  }
  `.trim();
}
function Hx(e, n) {
  const t = Vx(e, n);
  Zt() ? Tn(t, `${zx}-dynamic-theme`) : process.env.NODE_ENV !== "production" && ui(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const js = /* @__PURE__ */ w.createContext(!1), Ux = (e) => {
  let {
    children: n,
    disabled: t
  } = e;
  const r = w.useContext(js);
  return /* @__PURE__ */ w.createElement(js.Provider, {
    value: t ?? r
  }, n);
}, Br = /* @__PURE__ */ w.createContext(void 0), qx = (e) => {
  let {
    children: n,
    size: t
  } = e;
  const r = w.useContext(Br);
  return /* @__PURE__ */ w.createElement(Br.Provider, {
    value: t || r
  }, n);
};
function Wx() {
  const e = sn(js), n = sn(Br);
  return {
    componentDisabled: e,
    componentSize: n
  };
}
var af = /* @__PURE__ */ At(function e() {
  Ct(this, e);
}), cf = "CALC_UNIT", $x = new RegExp(cf, "g");
function Fi(e) {
  return typeof e == "number" ? "".concat(e).concat(cf) : e;
}
var Xx = /* @__PURE__ */ function(e) {
  Vr(t, e);
  var n = ii(t);
  function t(r, o) {
    var i;
    Ct(this, t), i = n.call(this), H(An(i), "result", ""), H(An(i), "unitlessCssVar", void 0), H(An(i), "lowPriority", void 0);
    var s = ye(r);
    return i.unitlessCssVar = o, r instanceof t ? i.result = "(".concat(r.result, ")") : s === "number" ? i.result = Fi(r) : s === "string" && (i.result = r), i;
  }
  return At(t, [{
    key: "add",
    value: function(o) {
      return o instanceof t ? this.result = "".concat(this.result, " + ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " + ").concat(Fi(o))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(o) {
      return o instanceof t ? this.result = "".concat(this.result, " - ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " - ").concat(Fi(o))), this.lowPriority = !0, this;
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
      }) && (c = !1), this.result = this.result.replace($x, c ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), t;
}(af), Yx = /* @__PURE__ */ function(e) {
  Vr(t, e);
  var n = ii(t);
  function t(r) {
    var o;
    return Ct(this, t), o = n.call(this), H(An(o), "result", 0), r instanceof t ? o.result = r.result : typeof r == "number" && (o.result = r), o;
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
}(af), Gx = function(n, t) {
  var r = n === "css" ? Xx : Yx;
  return function(o) {
    return new r(o, t);
  };
}, Bc = function(n, t) {
  return "".concat([t, n.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function Ms(e) {
  var n = w.useRef();
  n.current = e;
  var t = w.useCallback(function() {
    for (var r, o = arguments.length, i = new Array(o), s = 0; s < o; s++)
      i[s] = arguments[s];
    return (r = n.current) === null || r === void 0 ? void 0 : r.call.apply(r, [n].concat(i));
  }, []);
  return t;
}
function Ls(e) {
  var n = w.useRef(!1), t = w.useState(e), r = ae(t, 2), o = r[0], i = r[1];
  w.useEffect(function() {
    return n.current = !1, function() {
      n.current = !0;
    };
  }, []);
  function s(a, c) {
    c && n.current || i(a);
  }
  return [o, s];
}
function Fc(e, n, t, r) {
  var o = F({}, n[e]);
  if (r != null && r.deprecatedTokens) {
    var i = r.deprecatedTokens;
    i.forEach(function(a) {
      var c = ae(a, 2), l = c[0], u = c[1];
      if (process.env.NODE_ENV !== "production" && dn(!(o != null && o[l]), "Component Token `".concat(String(l), "` of ").concat(String(e), " is deprecated. Please use `").concat(String(u), "` instead.")), o != null && o[l] || o != null && o[u]) {
        var d;
        (d = o[u]) !== null && d !== void 0 || (o[u] = o == null ? void 0 : o[l]);
      }
    });
  }
  var s = F(F({}, t), o);
  return Object.keys(s).forEach(function(a) {
    s[a] === n[a] && delete s[a];
  }), s;
}
var lf = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", Ds = !0;
function di() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  if (!lf)
    return Object.assign.apply(Object, [{}].concat(n));
  Ds = !1;
  var r = {};
  return n.forEach(function(o) {
    if (ye(o) === "object") {
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
  }), Ds = !0, r;
}
var zc = {};
function Kx() {
}
var Zx = function(n) {
  var t, r = n, o = Kx;
  return lf && typeof Proxy < "u" && (t = /* @__PURE__ */ new Set(), r = new Proxy(n, {
    get: function(s, a) {
      if (Ds) {
        var c;
        (c = t) === null || c === void 0 || c.add(a);
      }
      return s[a];
    }
  }), o = function(s, a) {
    var c;
    zc[s] = {
      global: Array.from(t),
      component: F(F({}, (c = zc[s]) === null || c === void 0 ? void 0 : c.component), a)
    };
  }), {
    token: r,
    keys: t,
    flush: o
  };
};
function Vc(e, n, t) {
  if (typeof t == "function") {
    var r;
    return t(di(n, (r = n[e]) !== null && r !== void 0 ? r : {}));
  }
  return t ?? {};
}
function Jx(e) {
  return e === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++)
        r[o] = arguments[o];
      return "max(".concat(r.map(function(i) {
        return Lo(i);
      }).join(","), ")");
    },
    min: function() {
      for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++)
        r[o] = arguments[o];
      return "min(".concat(r.map(function(i) {
        return Lo(i);
      }).join(","), ")");
    }
  };
}
var Qx = 1e3 * 60 * 10, e1 = /* @__PURE__ */ function() {
  function e() {
    Ct(this, e), H(this, "map", /* @__PURE__ */ new Map()), H(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), H(this, "nextID", 0), H(this, "lastAccessBeat", /* @__PURE__ */ new Map()), H(this, "accessBeat", 0);
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
        return i && ye(i) === "object" ? "obj_".concat(r.getObjectID(i)) : "".concat(ye(i), "_").concat(i);
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
          r - o > Qx && (t.map.delete(i), t.lastAccessBeat.delete(i));
        }), this.accessBeat = 0;
      }
    }
  }]), e;
}(), Hc = new e1();
function t1(e, n) {
  return je.useMemo(function() {
    var t = Hc.get(n);
    if (t)
      return t;
    var r = e();
    return Hc.set(n, r), r;
  }, n);
}
var n1 = function() {
  return {};
};
function r1(e) {
  var n = e.useCSP, t = n === void 0 ? n1 : n, r = e.useToken, o = e.usePrefix, i = e.getResetStyles, s = e.getCommonStyle, a = e.getCompUnitless;
  function c(f, v, m, x) {
    var h = Array.isArray(f) ? f[0] : f;
    function S(P) {
      return "".concat(String(h)).concat(P.slice(0, 1).toUpperCase()).concat(P.slice(1));
    }
    var b = (x == null ? void 0 : x.unitless) || {}, g = typeof a == "function" ? a(f) : {}, C = F(F({}, g), {}, H({}, S("zIndexPopup"), !0));
    Object.keys(b).forEach(function(P) {
      C[S(P)] = b[P];
    });
    var y = F(F({}, x), {}, {
      unitless: C,
      prefixToken: S
    }), A = u(f, v, m, y), E = l(h, m, y);
    return function(P) {
      var D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : P, W = A(P, D), ee = ae(W, 2), Y = ee[1], N = E(D), z = ae(N, 2), q = z[0], $ = z[1];
      return [q, Y, $];
    };
  }
  function l(f, v, m) {
    var x = m.unitless, h = m.injectStyle, S = h === void 0 ? !0 : h, b = m.prefixToken, g = m.ignore, C = function(E) {
      var P = E.rootCls, D = E.cssVar, W = D === void 0 ? {} : D, ee = r(), Y = ee.realToken;
      return xx({
        path: [f],
        prefix: W.prefix,
        key: W.key,
        unitless: x,
        ignore: g,
        token: Y,
        scope: P
      }, function() {
        var N = Vc(f, Y, v), z = Fc(f, Y, N, {
          deprecatedTokens: m == null ? void 0 : m.deprecatedTokens
        });
        return Object.keys(N).forEach(function(q) {
          z[b(q)] = z[q], delete z[q];
        }), z;
      }), null;
    }, y = function(E) {
      var P = r(), D = P.cssVar;
      return [function(W) {
        return S && D ? /* @__PURE__ */ je.createElement(je.Fragment, null, /* @__PURE__ */ je.createElement(C, {
          rootCls: E,
          cssVar: D,
          component: f
        }), W) : W;
      }, D == null ? void 0 : D.key];
    };
    return y;
  }
  function u(f, v, m) {
    var x = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, h = Array.isArray(f) ? f : [f, f], S = ae(h, 1), b = S[0], g = h.join("-"), C = e.layer || {
      name: "antd"
    };
    return function(y) {
      var A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : y, E = r(), P = E.theme, D = E.realToken, W = E.hashId, ee = E.token, Y = E.cssVar, N = o(), z = N.rootPrefixCls, q = N.iconPrefixCls, $ = t(), J = Y ? "css" : "js", G = t1(function() {
        var fe = /* @__PURE__ */ new Set();
        return Y && Object.keys(x.unitless || {}).forEach(function(le) {
          fe.add(So(le, Y.prefix)), fe.add(So(le, Bc(b, Y.prefix)));
        }), Gx(J, fe);
      }, [J, b, Y == null ? void 0 : Y.prefix]), Z = Jx(J), re = Z.max, oe = Z.min, K = {
        theme: P,
        token: ee,
        hashId: W,
        nonce: function() {
          return $.nonce;
        },
        clientOnly: x.clientOnly,
        layer: C,
        // antd is always at top of styles
        order: x.order || -999
      };
      typeof i == "function" && vs(F(F({}, K), {}, {
        clientOnly: !1,
        path: ["Shared", z]
      }), function() {
        return i(ee, {
          prefix: {
            rootPrefixCls: z,
            iconPrefixCls: q
          },
          csp: $
        });
      });
      var te = vs(F(F({}, K), {}, {
        path: [g, y, q]
      }), function() {
        if (x.injectStyle === !1)
          return [];
        var fe = Zx(ee), le = fe.token, de = fe.flush, pe = Vc(b, D, m), k = ".".concat(y), U = Fc(b, D, pe, {
          deprecatedTokens: x.deprecatedTokens
        });
        Y && pe && ye(pe) === "object" && Object.keys(pe).forEach(function(ne) {
          pe[ne] = "var(".concat(So(ne, Bc(b, Y.prefix)), ")");
        });
        var j = di(le, {
          componentCls: k,
          prefixCls: y,
          iconCls: ".".concat(q),
          antCls: ".".concat(z),
          calc: G,
          // @ts-ignore
          max: re,
          // @ts-ignore
          min: oe
        }, Y ? pe : U), B = v(j, {
          hashId: W,
          prefixCls: y,
          rootPrefixCls: z,
          iconPrefixCls: q
        });
        de(b, U);
        var T = typeof s == "function" ? s(j, y, A, x.resetFont) : null;
        return [x.resetStyle === !1 ? null : T, B];
      });
      return [te, W];
    };
  }
  function d(f, v, m) {
    var x = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, h = u(f, v, m, F({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, x)), S = function(g) {
      var C = g.prefixCls, y = g.rootCls, A = y === void 0 ? C : y;
      return h(C, A), null;
    };
    return process.env.NODE_ENV !== "production" && (S.displayName = "SubStyle_".concat(String(Array.isArray(f) ? f.join(".") : f))), S;
  }
  return {
    genStyleHooks: c,
    genSubStyleComponent: d,
    genComponentStyleHook: u
  };
}
const o1 = "5.24.6";
function zi(e) {
  return e >= 0 && e <= 255;
}
function oo(e, n) {
  const {
    r: t,
    g: r,
    b: o,
    a: i
  } = new Ne(e).toRgb();
  if (i < 1)
    return e;
  const {
    r: s,
    g: a,
    b: c
  } = new Ne(n).toRgb();
  for (let l = 0.01; l <= 1; l += 0.01) {
    const u = Math.round((t - s * (1 - l)) / l), d = Math.round((r - a * (1 - l)) / l), f = Math.round((o - c * (1 - l)) / l);
    if (zi(u) && zi(d) && zi(f))
      return new Ne({
        r: u,
        g: d,
        b: f,
        a: Math.round(l * 100) / 100
      }).toRgbString();
  }
  return new Ne({
    r: t,
    g: r,
    b: o,
    a: 1
  }).toRgbString();
}
var i1 = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
function uf(e) {
  const {
    override: n
  } = e, t = i1(e, ["override"]), r = Object.assign({}, n);
  Object.keys(Lr).forEach((f) => {
    delete r[f];
  });
  const o = Object.assign(Object.assign({}, t), r), i = 480, s = 576, a = 768, c = 992, l = 1200, u = 1600;
  if (o.motion === !1) {
    const f = "0s";
    o.motionDurationFast = f, o.motionDurationMid = f, o.motionDurationSlow = f;
  }
  return Object.assign(Object.assign(Object.assign({}, o), {
    // ============== Background ============== //
    colorFillContent: o.colorFillSecondary,
    colorFillContentHover: o.colorFill,
    colorFillAlter: o.colorFillQuaternary,
    colorBgContainerDisabled: o.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: o.colorBgContainer,
    colorSplit: oo(o.colorBorderSecondary, o.colorBgContainer),
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
    colorErrorOutline: oo(o.colorErrorBg, o.colorBgContainer),
    colorWarningOutline: oo(o.colorWarningBg, o.colorBgContainer),
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
    controlOutline: oo(o.colorPrimaryBg, o.colorBgContainer),
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
      0 1px 2px -2px ${new Ne("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new Ne("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new Ne("rgba(0, 0, 0, 0.09)").toRgbString()}
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
var Uc = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
const ff = {
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
}, s1 = {
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
}, a1 = {
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
}, df = (e, n, t) => {
  const r = t.getDerivativeToken(e), {
    override: o
  } = n, i = Uc(n, ["override"]);
  let s = Object.assign(Object.assign({}, r), {
    override: o
  });
  return s = uf(s), i && Object.entries(i).forEach((a) => {
    let [c, l] = a;
    const {
      theme: u
    } = l, d = Uc(l, ["theme"]);
    let f = d;
    u && (f = df(Object.assign(Object.assign({}, s), d), {
      override: d
    }, u)), s[c] = f;
  }), s;
};
function ka() {
  const {
    token: e,
    hashed: n,
    theme: t,
    override: r,
    cssVar: o
  } = je.useContext(of), i = `${o1}-${n || ""}`, s = t || rf, [a, c, l] = zp(s, [Lr, e], {
    salt: i,
    override: r,
    getComputedToken: df,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: uf,
    cssVar: o && {
      prefix: o.prefix,
      key: o.key,
      unitless: ff,
      ignore: s1,
      preserve: a1
    }
  });
  return [s, l, n ? c : "", a, o];
}
const hf = function(e) {
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
}, c1 = () => ({
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
}), l1 = (e) => ({
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
}), u1 = (e, n, t, r) => {
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
}, pf = (e) => ({
  [`.${e}`]: Object.assign(Object.assign({}, c1()), {
    [`.${e} .${e}-icon`]: {
      display: "block"
    }
  })
}), {
  genStyleHooks: Pa
} = r1({
  usePrefix: () => {
    const {
      getPrefixCls: e,
      iconPrefixCls: n
    } = sn(ln);
    return {
      rootPrefixCls: e(),
      iconPrefixCls: n
    };
  },
  useToken: () => {
    const [e, n, t, r, o] = ka();
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
    } = sn(ln);
    return e ?? {};
  },
  getResetStyles: (e, n) => {
    var t;
    const r = l1(e);
    return [r, {
      "&": r
    }, pf((t = n == null ? void 0 : n.prefix.iconPrefixCls) !== null && t !== void 0 ? t : Ra)];
  },
  getCommonStyle: u1,
  getCompUnitless: () => ff
}), f1 = (e, n) => {
  const [t, r] = ka();
  return vs({
    token: r,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => n == null ? void 0 : n.nonce,
    layer: {
      name: "antd"
    }
  }, () => [pf(e)]);
}, d1 = Object.assign({}, w), {
  useId: qc
} = d1, h1 = () => "", p1 = typeof qc > "u" ? h1 : qc;
function x1(e, n, t) {
  var r, o;
  const i = nr("ConfigProvider"), s = e || {}, a = s.inherit === !1 || !n ? Object.assign(Object.assign({}, Is), {
    hashed: (r = n == null ? void 0 : n.hashed) !== null && r !== void 0 ? r : Is.hashed,
    cssVar: n == null ? void 0 : n.cssVar
  }) : n, c = p1();
  if (process.env.NODE_ENV !== "production") {
    const l = s.cssVar || a.cssVar, u = !!(typeof s.cssVar == "object" && (!((o = s.cssVar) === null || o === void 0) && o.key) || c);
    process.env.NODE_ENV !== "production" && i(!l || u, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return xu(() => {
    var l, u;
    if (!e)
      return n;
    const d = Object.assign({}, a.components);
    Object.keys(e.components || {}).forEach((m) => {
      d[m] = Object.assign(Object.assign({}, d[m]), e.components[m]);
    });
    const f = `css-var-${c.replace(/:/g, "")}`, v = ((l = s.cssVar) !== null && l !== void 0 ? l : a.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: t == null ? void 0 : t.prefixCls
    }, typeof a.cssVar == "object" ? a.cssVar : {}), typeof s.cssVar == "object" ? s.cssVar : {}), {
      key: typeof s.cssVar == "object" && ((u = s.cssVar) === null || u === void 0 ? void 0 : u.key) || f
    });
    return Object.assign(Object.assign(Object.assign({}, a), s), {
      token: Object.assign(Object.assign({}, a.token), s.token),
      components: d,
      cssVar: v
    });
  }, [s, a], (l, u) => l.some((d, f) => {
    const v = u[f];
    return !dp(d, v, !0);
  }));
}
var m1 = ["children"], xf = /* @__PURE__ */ w.createContext({});
function g1(e) {
  var n = e.children, t = jr(e, m1);
  return /* @__PURE__ */ w.createElement(xf.Provider, {
    value: t
  }, n);
}
var v1 = /* @__PURE__ */ function(e) {
  Vr(t, e);
  var n = ii(t);
  function t() {
    return Ct(this, t), n.apply(this, arguments);
  }
  return At(t, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), t;
}(w.Component);
function y1(e) {
  var n = w.useReducer(function(a) {
    return a + 1;
  }, 0), t = ae(n, 2), r = t[1], o = w.useRef(e), i = Ms(function() {
    return o.current;
  }), s = Ms(function(a) {
    o.current = typeof a == "function" ? a(o.current) : a, r();
  });
  return [i, s];
}
var tn = "none", io = "appear", so = "enter", ao = "leave", Wc = "none", gt = "prepare", Bn = "start", Fn = "active", Ia = "end", mf = "prepared";
function $c(e, n) {
  var t = {};
  return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit".concat(e)] = "webkit".concat(n), t["Moz".concat(e)] = "moz".concat(n), t["ms".concat(e)] = "MS".concat(n), t["O".concat(e)] = "o".concat(n.toLowerCase()), t;
}
function b1(e, n) {
  var t = {
    animationend: $c("Animation", "AnimationEnd"),
    transitionend: $c("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in n || delete t.animationend.animation, "TransitionEvent" in n || delete t.transitionend.transition), t;
}
var S1 = b1(Zt(), typeof window < "u" ? window : {}), gf = {};
if (Zt()) {
  var w1 = document.createElement("div");
  gf = w1.style;
}
var co = {};
function vf(e) {
  if (co[e])
    return co[e];
  var n = S1[e];
  if (n)
    for (var t = Object.keys(n), r = t.length, o = 0; o < r; o += 1) {
      var i = t[o];
      if (Object.prototype.hasOwnProperty.call(n, i) && i in gf)
        return co[e] = n[i], co[e];
    }
  return "";
}
var yf = vf("animationend"), bf = vf("transitionend"), Sf = !!(yf && bf), Xc = yf || "animationend", Yc = bf || "transitionend";
function Gc(e, n) {
  if (!e) return null;
  if (ye(e) === "object") {
    var t = n.replace(/-\w/g, function(r) {
      return r[1].toUpperCase();
    });
    return e[t];
  }
  return "".concat(e, "-").concat(n);
}
const E1 = function(e) {
  var n = Ve();
  function t(o) {
    o && (o.removeEventListener(Yc, e), o.removeEventListener(Xc, e));
  }
  function r(o) {
    n.current && n.current !== o && t(n.current), o && o !== n.current && (o.addEventListener(Yc, e), o.addEventListener(Xc, e), n.current = o);
  }
  return w.useEffect(function() {
    return function() {
      t(n.current);
    };
  }, []), [r, t];
};
var wf = Zt() ? C0 : tt;
const _1 = function() {
  var e = w.useRef(null);
  function n() {
    Mo.cancel(e.current);
  }
  function t(r) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    n();
    var i = Mo(function() {
      o <= 1 ? r({
        isCanceled: function() {
          return i !== e.current;
        }
      }) : t(r, o - 1);
    });
    e.current = i;
  }
  return w.useEffect(function() {
    return function() {
      n();
    };
  }, []), [t, n];
};
var C1 = [gt, Bn, Fn, Ia], A1 = [gt, mf], Ef = !1, T1 = !0;
function _f(e) {
  return e === Fn || e === Ia;
}
const O1 = function(e, n, t) {
  var r = Ls(Wc), o = ae(r, 2), i = o[0], s = o[1], a = _1(), c = ae(a, 2), l = c[0], u = c[1];
  function d() {
    s(gt, !0);
  }
  var f = n ? A1 : C1;
  return wf(function() {
    if (i !== Wc && i !== Ia) {
      var v = f.indexOf(i), m = f[v + 1], x = t(i);
      x === Ef ? s(m, !0) : m && l(function(h) {
        function S() {
          h.isCanceled() || s(m, !0);
        }
        x === !0 ? S() : Promise.resolve(x).then(S);
      });
    }
  }, [e, i]), w.useEffect(function() {
    return function() {
      u();
    };
  }, []), [d, i];
};
function R1(e, n, t, r) {
  var o = r.motionEnter, i = o === void 0 ? !0 : o, s = r.motionAppear, a = s === void 0 ? !0 : s, c = r.motionLeave, l = c === void 0 ? !0 : c, u = r.motionDeadline, d = r.motionLeaveImmediately, f = r.onAppearPrepare, v = r.onEnterPrepare, m = r.onLeavePrepare, x = r.onAppearStart, h = r.onEnterStart, S = r.onLeaveStart, b = r.onAppearActive, g = r.onEnterActive, C = r.onLeaveActive, y = r.onAppearEnd, A = r.onEnterEnd, E = r.onLeaveEnd, P = r.onVisibleChanged, D = Ls(), W = ae(D, 2), ee = W[0], Y = W[1], N = y1(tn), z = ae(N, 2), q = z[0], $ = z[1], J = Ls(null), G = ae(J, 2), Z = G[0], re = G[1], oe = q(), K = Ve(!1), te = Ve(null);
  function fe() {
    return t();
  }
  var le = Ve(!1);
  function de() {
    $(tn), re(null, !0);
  }
  var pe = Ms(function(Pe) {
    var Se = q();
    if (Se !== tn) {
      var qe = fe();
      if (!(Pe && !Pe.deadline && Pe.target !== qe)) {
        var xt = le.current, lt;
        Se === io && xt ? lt = y == null ? void 0 : y(qe, Pe) : Se === so && xt ? lt = A == null ? void 0 : A(qe, Pe) : Se === ao && xt && (lt = E == null ? void 0 : E(qe, Pe)), xt && lt !== !1 && de();
      }
    }
  }), k = E1(pe), U = ae(k, 1), j = U[0], B = function(Se) {
    switch (Se) {
      case io:
        return H(H(H({}, gt, f), Bn, x), Fn, b);
      case so:
        return H(H(H({}, gt, v), Bn, h), Fn, g);
      case ao:
        return H(H(H({}, gt, m), Bn, S), Fn, C);
      default:
        return {};
    }
  }, T = w.useMemo(function() {
    return B(oe);
  }, [oe]), ne = O1(oe, !e, function(Pe) {
    if (Pe === gt) {
      var Se = T[gt];
      return Se ? Se(fe()) : Ef;
    }
    if (_e in T) {
      var qe;
      re(((qe = T[_e]) === null || qe === void 0 ? void 0 : qe.call(T, fe(), null)) || null);
    }
    return _e === Fn && oe !== tn && (j(fe()), u > 0 && (clearTimeout(te.current), te.current = setTimeout(function() {
      pe({
        deadline: !0
      });
    }, u))), _e === mf && de(), T1;
  }), M = ae(ne, 2), ke = M[0], _e = M[1], ct = _f(_e);
  le.current = ct;
  var Ot = Ve(null);
  wf(function() {
    if (!(K.current && Ot.current === n)) {
      Y(n);
      var Pe = K.current;
      K.current = !0;
      var Se;
      !Pe && n && a && (Se = io), Pe && n && i && (Se = so), (Pe && !n && l || !Pe && d && !n && l) && (Se = ao);
      var qe = B(Se);
      Se && (e || qe[gt]) ? ($(Se), ke()) : $(tn), Ot.current = n;
    }
  }, [n]), tt(function() {
    // Cancel appear
    (oe === io && !a || // Cancel enter
    oe === so && !i || // Cancel leave
    oe === ao && !l) && $(tn);
  }, [a, i, l]), tt(function() {
    return function() {
      K.current = !1, clearTimeout(te.current);
    };
  }, []);
  var it = w.useRef(!1);
  tt(function() {
    ee && (it.current = !0), ee !== void 0 && oe === tn && ((it.current || ee) && (P == null || P(ee)), it.current = !0);
  }, [ee, oe]);
  var Rt = Z;
  return T[gt] && _e === Bn && (Rt = F({
    transition: "none"
  }, Rt)), [oe, _e, Rt, ee ?? n];
}
function k1(e) {
  var n = e;
  ye(e) === "object" && (n = e.transitionSupport);
  function t(o, i) {
    return !!(o.motionName && n && i !== !1);
  }
  var r = /* @__PURE__ */ w.forwardRef(function(o, i) {
    var s = o.visible, a = s === void 0 ? !0 : s, c = o.removeOnLeave, l = c === void 0 ? !0 : c, u = o.forceRender, d = o.children, f = o.motionName, v = o.leavedClassName, m = o.eventProps, x = w.useContext(xf), h = x.motion, S = t(o, h), b = Ve(), g = Ve();
    function C() {
      try {
        return b.current instanceof HTMLElement ? b.current : Kh(g.current);
      } catch {
        return null;
      }
    }
    var y = R1(S, a, C, o), A = ae(y, 4), E = A[0], P = A[1], D = A[2], W = A[3], ee = w.useRef(W);
    W && (ee.current = !0);
    var Y = w.useCallback(function(G) {
      b.current = G, mu(i, G);
    }, [i]), N, z = F(F({}, m), {}, {
      visible: a
    });
    if (!d)
      N = null;
    else if (E === tn)
      W ? N = d(F({}, z), Y) : !l && ee.current && v ? N = d(F(F({}, z), {}, {
        className: v
      }), Y) : u || !l && !v ? N = d(F(F({}, z), {}, {
        style: {
          display: "none"
        }
      }), Y) : N = null;
    else {
      var q;
      P === gt ? q = "prepare" : _f(P) ? q = "active" : P === Bn && (q = "start");
      var $ = Gc(f, "".concat(E, "-").concat(q));
      N = d(F(F({}, z), {}, {
        className: Ge(Gc(f, E), H(H({}, $, $ && q), f, typeof f == "string")),
        style: D
      }), Y);
    }
    if (/* @__PURE__ */ w.isValidElement(N) && np(N)) {
      var J = rp(N);
      J || (N = /* @__PURE__ */ w.cloneElement(N, {
        ref: Y
      }));
    }
    return /* @__PURE__ */ w.createElement(v1, {
      ref: g
    }, N);
  });
  return r.displayName = "CSSMotion", r;
}
const Cf = k1(Sf);
var Bs = "add", Fs = "keep", zs = "remove", Vi = "removed";
function P1(e) {
  var n;
  return e && ye(e) === "object" && "key" in e ? n = e : n = {
    key: e
  }, F(F({}, n), {}, {
    key: String(n.key)
  });
}
function Vs() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(P1);
}
function I1() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], t = [], r = 0, o = n.length, i = Vs(e), s = Vs(n);
  i.forEach(function(l) {
    for (var u = !1, d = r; d < o; d += 1) {
      var f = s[d];
      if (f.key === l.key) {
        r < d && (t = t.concat(s.slice(r, d).map(function(v) {
          return F(F({}, v), {}, {
            status: Bs
          });
        })), r = d), t.push(F(F({}, f), {}, {
          status: Fs
        })), r += 1, u = !0;
        break;
      }
    }
    u || t.push(F(F({}, l), {}, {
      status: zs
    }));
  }), r < o && (t = t.concat(s.slice(r).map(function(l) {
    return F(F({}, l), {}, {
      status: Bs
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
      var d = u.key, f = u.status;
      return d !== l || f !== zs;
    }), t.forEach(function(u) {
      u.key === l && (u.status = Fs);
    });
  }), t;
}
var N1 = ["component", "children", "onVisibleChanged", "onAllRemoved"], j1 = ["status"], M1 = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function L1(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Cf, t = /* @__PURE__ */ function(r) {
    Vr(i, r);
    var o = ii(i);
    function i() {
      var s;
      Ct(this, i);
      for (var a = arguments.length, c = new Array(a), l = 0; l < a; l++)
        c[l] = arguments[l];
      return s = o.call.apply(o, [this].concat(c)), H(An(s), "state", {
        keyEntities: []
      }), H(An(s), "removeKey", function(u) {
        s.setState(function(d) {
          var f = d.keyEntities.map(function(v) {
            return v.key !== u ? v : F(F({}, v), {}, {
              status: Vi
            });
          });
          return {
            keyEntities: f
          };
        }, function() {
          var d = s.state.keyEntities, f = d.filter(function(v) {
            var m = v.status;
            return m !== Vi;
          }).length;
          f === 0 && s.props.onAllRemoved && s.props.onAllRemoved();
        });
      }), s;
    }
    return At(i, [{
      key: "render",
      value: function() {
        var a = this, c = this.state.keyEntities, l = this.props, u = l.component, d = l.children, f = l.onVisibleChanged;
        l.onAllRemoved;
        var v = jr(l, N1), m = u || w.Fragment, x = {};
        return M1.forEach(function(h) {
          x[h] = v[h], delete v[h];
        }), delete v.keys, /* @__PURE__ */ w.createElement(m, v, c.map(function(h, S) {
          var b = h.status, g = jr(h, j1), C = b === Bs || b === Fs;
          return /* @__PURE__ */ w.createElement(n, Ft({}, x, {
            key: g.key,
            visible: C,
            eventProps: g,
            onVisibleChanged: function(A) {
              f == null || f(A, {
                key: g.key
              }), A || a.removeKey(g.key);
            }
          }), function(y, A) {
            return d(F(F({}, y), {}, {
              index: S
            }), A);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(a, c) {
        var l = a.keys, u = c.keyEntities, d = Vs(l), f = I1(u, d);
        return {
          keyEntities: f.filter(function(v) {
            var m = u.find(function(x) {
              var h = x.key;
              return v.key === h;
            });
            return !(m && m.status === Vi && v.status === zs);
          })
        };
      }
    }]), i;
  }(w.Component);
  return H(t, "defaultProps", {
    component: "div"
  }), t;
}
L1(Sf);
function D1(e) {
  const {
    children: n
  } = e, [, t] = ka(), {
    motion: r
  } = t, o = w.useRef(!1);
  return o.current = o.current || r === !1, o.current ? /* @__PURE__ */ w.createElement(g1, {
    motion: r
  }, n) : n;
}
const Af = /* @__PURE__ */ w.memo((e) => {
  let {
    dropdownMatchSelectWidth: n
  } = e;
  return nr("ConfigProvider").deprecated(n === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
process.env.NODE_ENV !== "production" && (Af.displayName = "PropWarning");
const B1 = process.env.NODE_ENV !== "production" ? Af : () => null;
var F1 = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
let Hs = !1;
process.env.NODE_ENV;
const z1 = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let Tf;
function V1() {
  return Tf || Ns;
}
function H1(e) {
  return Object.keys(e).some((n) => n.endsWith("Color"));
}
const U1 = (e) => {
  const {
    prefixCls: n,
    iconPrefixCls: t,
    theme: r,
    holderRender: o
  } = e;
  n !== void 0 && (Tf = n), r && H1(r) && (process.env.NODE_ENV !== "production" && ui(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), Hx(V1(), r));
}, q1 = (e) => {
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
    splitter: d,
    virtual: f,
    dropdownMatchSelectWidth: v,
    popupMatchSelectWidth: m,
    popupOverflow: x,
    legacyLocale: h,
    parentContext: S,
    iconPrefixCls: b,
    theme: g,
    componentDisabled: C,
    segmented: y,
    statistic: A,
    spin: E,
    calendar: P,
    carousel: D,
    cascader: W,
    collapse: ee,
    typography: Y,
    checkbox: N,
    descriptions: z,
    divider: q,
    drawer: $,
    skeleton: J,
    steps: G,
    image: Z,
    layout: re,
    list: oe,
    mentions: K,
    modal: te,
    progress: fe,
    result: le,
    slider: de,
    breadcrumb: pe,
    menu: k,
    pagination: U,
    input: j,
    textArea: B,
    empty: T,
    badge: ne,
    radio: M,
    rate: ke,
    switch: _e,
    transfer: ct,
    avatar: Ot,
    message: it,
    tag: Rt,
    table: Pe,
    card: Se,
    tabs: qe,
    timeline: xt,
    timePicker: lt,
    upload: pn,
    notification: xn,
    tree: In,
    colorPicker: mn,
    datePicker: L,
    rangePicker: O,
    flex: Me,
    wave: Le,
    dropdown: $e,
    warning: Ee,
    tour: Ke,
    tooltip: Ze,
    popover: kt,
    popconfirm: Nn,
    floatButtonGroup: Pt,
    variant: Ht,
    inputNumber: Ut,
    treeSelect: Xe
  } = e, Je = w.useCallback((Ae, p) => {
    const {
      prefixCls: R
    } = e;
    if (p)
      return p;
    const I = R || S.getPrefixCls("");
    return Ae ? `${I}-${Ae}` : I;
  }, [S.getPrefixCls, e.prefixCls]), ut = b || S.iconPrefixCls || Ra, It = t || S.csp;
  f1(ut, It);
  const gn = x1(g, S.theme, {
    prefixCls: Je("")
  });
  process.env.NODE_ENV !== "production" && (Hs = Hs || !!gn);
  const jn = {
    csp: It,
    autoInsertSpaceInButton: r,
    alert: o,
    anchor: i,
    locale: a || h,
    direction: l,
    space: u,
    splitter: d,
    virtual: f,
    popupMatchSelectWidth: m ?? v,
    popupOverflow: x,
    getPrefixCls: Je,
    iconPrefixCls: ut,
    theme: gn,
    segmented: y,
    statistic: A,
    spin: E,
    calendar: P,
    carousel: D,
    cascader: W,
    collapse: ee,
    typography: Y,
    checkbox: N,
    descriptions: z,
    divider: q,
    drawer: $,
    skeleton: J,
    steps: G,
    image: Z,
    input: j,
    textArea: B,
    layout: re,
    list: oe,
    mentions: K,
    modal: te,
    progress: fe,
    result: le,
    slider: de,
    breadcrumb: pe,
    menu: k,
    pagination: U,
    empty: T,
    badge: ne,
    radio: M,
    rate: ke,
    switch: _e,
    transfer: ct,
    avatar: Ot,
    message: it,
    tag: Rt,
    table: Pe,
    card: Se,
    tabs: qe,
    timeline: xt,
    timePicker: lt,
    upload: pn,
    notification: xn,
    tree: In,
    colorPicker: mn,
    datePicker: L,
    rangePicker: O,
    flex: Me,
    wave: Le,
    dropdown: $e,
    warning: Ee,
    tour: Ke,
    tooltip: Ze,
    popover: kt,
    popconfirm: Nn,
    floatButtonGroup: Pt,
    variant: Ht,
    inputNumber: Ut,
    treeSelect: Xe
  };
  process.env.NODE_ENV !== "production" && nr("ConfigProvider")(!("autoInsertSpaceInButton" in e), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const Jt = Object.assign({}, S);
  Object.keys(jn).forEach((Ae) => {
    jn[Ae] !== void 0 && (Jt[Ae] = jn[Ae]);
  }), z1.forEach((Ae) => {
    const p = e[Ae];
    p && (Jt[Ae] = p);
  }), typeof r < "u" && (Jt.button = Object.assign({
    autoInsertSpace: r
  }, Jt.button));
  const Qt = xu(() => Jt, Jt, (Ae, p) => {
    const R = Object.keys(Ae), I = Object.keys(p);
    return R.length !== I.length || R.some((X) => Ae[X] !== p[X]);
  }), {
    layer: ar
  } = w.useContext(Hr), Wr = w.useMemo(() => ({
    prefixCls: ut,
    csp: It,
    layer: ar ? "antd" : void 0
  }), [ut, It, ar]);
  let ze = /* @__PURE__ */ w.createElement(w.Fragment, null, /* @__PURE__ */ w.createElement(B1, {
    dropdownMatchSelectWidth: v
  }), n);
  const $r = w.useMemo(() => {
    var Ae, p, R, I;
    return bx(((Ae = fi.Form) === null || Ae === void 0 ? void 0 : Ae.defaultValidateMessages) || {}, ((R = (p = Qt.locale) === null || p === void 0 ? void 0 : p.Form) === null || R === void 0 ? void 0 : R.defaultValidateMessages) || {}, ((I = Qt.form) === null || I === void 0 ? void 0 : I.validateMessages) || {}, (s == null ? void 0 : s.validateMessages) || {});
  }, [Qt, s == null ? void 0 : s.validateMessages]);
  Object.keys($r).length > 0 && (ze = /* @__PURE__ */ w.createElement(wx.Provider, {
    value: $r
  }, ze)), a && (ze = /* @__PURE__ */ w.createElement(Qu, {
    locale: a,
    _ANT_MARK__: Ju
  }, ze)), ze = /* @__PURE__ */ w.createElement(Ta.Provider, {
    value: Wr
  }, ze), c && (ze = /* @__PURE__ */ w.createElement(qx, {
    size: c
  }, ze)), ze = /* @__PURE__ */ w.createElement(D1, null, ze);
  const Si = w.useMemo(() => {
    const Ae = gn || {}, {
      algorithm: p,
      token: R,
      components: I,
      cssVar: X
    } = Ae, he = F1(Ae, ["algorithm", "token", "components", "cssVar"]), xe = p && (!Array.isArray(p) || p.length > 0) ? hs(p) : rf, ce = {};
    Object.entries(I || {}).forEach((We) => {
      let [Ce, Te] = We;
      const Oe = Object.assign({}, Te);
      "algorithm" in Oe && (Oe.algorithm === !0 ? Oe.theme = xe : (Array.isArray(Oe.algorithm) || typeof Oe.algorithm == "function") && (Oe.theme = hs(Oe.algorithm)), delete Oe.algorithm), ce[Ce] = Oe;
    });
    const se = Object.assign(Object.assign({}, Lr), R);
    return Object.assign(Object.assign({}, he), {
      theme: xe,
      token: se,
      components: ce,
      override: Object.assign({
        override: se
      }, ce),
      cssVar: X
    });
  }, [gn]);
  return g && (ze = /* @__PURE__ */ w.createElement(of.Provider, {
    value: Si
  }, ze)), Qt.warning && (ze = /* @__PURE__ */ w.createElement(Ku.Provider, {
    value: Qt.warning
  }, ze)), C !== void 0 && (ze = /* @__PURE__ */ w.createElement(Ux, {
    disabled: C
  }, ze)), /* @__PURE__ */ w.createElement(ln.Provider, {
    value: Qt
  }, ze);
}, rr = (e) => {
  const n = w.useContext(ln), t = w.useContext(Zu);
  return /* @__PURE__ */ w.createElement(q1, Object.assign({
    parentContext: n,
    legacyLocale: t
  }, e));
};
rr.ConfigContext = ln;
rr.SizeContext = Br;
rr.config = U1;
rr.useConfig = Wx;
Object.defineProperty(rr, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && ui(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), Br)
});
process.env.NODE_ENV !== "production" && (rr.displayName = "ConfigProvider");
var W1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
function Of(e) {
  var n;
  return e == null || (n = e.getRootNode) === null || n === void 0 ? void 0 : n.call(e);
}
function $1(e) {
  return Of(e) instanceof ShadowRoot;
}
function X1(e) {
  return $1(e) ? Of(e) : null;
}
function Y1(e) {
  return e.replace(/-(.)/g, function(n, t) {
    return t.toUpperCase();
  });
}
function G1(e, n) {
  dn(e, "[@ant-design/icons] ".concat(n));
}
function Kc(e) {
  return ye(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (ye(e.icon) === "object" || typeof e.icon == "function");
}
function Zc() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(n, t) {
    var r = e[t];
    switch (t) {
      case "class":
        n.className = r, delete n.class;
        break;
      default:
        delete n[t], n[Y1(t)] = r;
    }
    return n;
  }, {});
}
function Us(e, n, t) {
  return t ? /* @__PURE__ */ je.createElement(e.tag, F(F({
    key: n
  }, Zc(e.attrs)), t), (e.children || []).map(function(r, o) {
    return Us(r, "".concat(n, "-").concat(e.tag, "-").concat(o));
  })) : /* @__PURE__ */ je.createElement(e.tag, F({
    key: n
  }, Zc(e.attrs)), (e.children || []).map(function(r, o) {
    return Us(r, "".concat(n, "-").concat(e.tag, "-").concat(o));
  }));
}
function Rf(e) {
  return Dr(e)[0];
}
function kf(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var K1 = `
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
`, Z1 = function(n) {
  var t = sn(Ta), r = t.csp, o = t.prefixCls, i = t.layer, s = K1;
  o && (s = s.replace(/anticon/g, o)), i && (s = "@layer ".concat(i, ` {
`).concat(s, `
}`)), tt(function() {
    var a = n.current, c = X1(a);
    Tn(s, "@ant-design-icons", {
      prepend: !i,
      csp: r,
      attachTo: c
    });
  }, []);
}, J1 = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], Pr = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function Q1(e) {
  var n = e.primaryColor, t = e.secondaryColor;
  Pr.primaryColor = n, Pr.secondaryColor = t || Rf(n), Pr.calculated = !!t;
}
function em() {
  return F({}, Pr);
}
var or = function(n) {
  var t = n.icon, r = n.className, o = n.onClick, i = n.style, s = n.primaryColor, a = n.secondaryColor, c = jr(n, J1), l = w.useRef(), u = Pr;
  if (s && (u = {
    primaryColor: s,
    secondaryColor: a || Rf(s)
  }), Z1(l), G1(Kc(t), "icon should be icon definiton, but got ".concat(t)), !Kc(t))
    return null;
  var d = t;
  return d && typeof d.icon == "function" && (d = F(F({}, d), {}, {
    icon: d.icon(u.primaryColor, u.secondaryColor)
  })), Us(d.icon, "svg-".concat(d.name), F(F({
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
or.displayName = "IconReact";
or.getTwoToneColors = em;
or.setTwoToneColors = Q1;
function Pf(e) {
  var n = kf(e), t = ae(n, 2), r = t[0], o = t[1];
  return or.setTwoToneColors({
    primaryColor: r,
    secondaryColor: o
  });
}
function tm() {
  var e = or.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var nm = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
Pf(Bo.primary);
var hn = /* @__PURE__ */ w.forwardRef(function(e, n) {
  var t = e.className, r = e.icon, o = e.spin, i = e.rotate, s = e.tabIndex, a = e.onClick, c = e.twoToneColor, l = jr(e, nm), u = w.useContext(Ta), d = u.prefixCls, f = d === void 0 ? "anticon" : d, v = u.rootClassName, m = Ge(v, f, H(H({}, "".concat(f, "-").concat(r.name), !!r.name), "".concat(f, "-spin"), !!o || r.name === "loading"), t), x = s;
  x === void 0 && a && (x = -1);
  var h = i ? {
    msTransform: "rotate(".concat(i, "deg)"),
    transform: "rotate(".concat(i, "deg)")
  } : void 0, S = kf(c), b = ae(S, 2), g = b[0], C = b[1];
  return /* @__PURE__ */ w.createElement("span", Ft({
    role: "img",
    "aria-label": r.name
  }, l, {
    ref: n,
    tabIndex: x,
    onClick: a,
    className: m
  }), /* @__PURE__ */ w.createElement(or, {
    icon: r,
    primaryColor: g,
    secondaryColor: C,
    style: h
  }));
});
hn.displayName = "AntdIcon";
hn.getTwoToneColor = tm;
hn.setTwoToneColor = Pf;
var rm = function(n, t) {
  return /* @__PURE__ */ w.createElement(hn, Ft({}, n, {
    ref: t,
    icon: W1
  }));
}, If = /* @__PURE__ */ w.forwardRef(rm);
process.env.NODE_ENV !== "production" && (If.displayName = "CheckCircleFilled");
var om = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, im = function(n, t) {
  return /* @__PURE__ */ w.createElement(hn, Ft({}, n, {
    ref: t,
    icon: om
  }));
}, Nf = /* @__PURE__ */ w.forwardRef(im);
process.env.NODE_ENV !== "production" && (Nf.displayName = "CloseCircleFilled");
var sm = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, am = function(n, t) {
  return /* @__PURE__ */ w.createElement(hn, Ft({}, n, {
    ref: t,
    icon: sm
  }));
}, jf = /* @__PURE__ */ w.forwardRef(am);
process.env.NODE_ENV !== "production" && (jf.displayName = "CloseOutlined");
var cm = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" }, lm = function(n, t) {
  return /* @__PURE__ */ w.createElement(hn, Ft({}, n, {
    ref: t,
    icon: cm
  }));
}, Mf = /* @__PURE__ */ w.forwardRef(lm);
process.env.NODE_ENV !== "production" && (Mf.displayName = "ExclamationCircleFilled");
var um = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" }, fm = function(n, t) {
  return /* @__PURE__ */ w.createElement(hn, Ft({}, n, {
    ref: t,
    icon: um
  }));
}, Lf = /* @__PURE__ */ w.forwardRef(fm);
process.env.NODE_ENV !== "production" && (Lf.displayName = "InfoCircleFilled");
var dm = `accept acceptCharset accessKey action allowFullScreen allowTransparency
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
    summary tabIndex target title type useMap value width wmode wrap`, hm = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, pm = "".concat(dm, " ").concat(hm).split(/[\s\n]+/), xm = "aria-", mm = "data-";
function Jc(e, n) {
  return e.indexOf(n) === 0;
}
function gm(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, t;
  n === !1 ? t = {
    aria: !0,
    data: !0,
    attr: !0
  } : n === !0 ? t = {
    aria: !0
  } : t = F({}, n);
  var r = {};
  return Object.keys(e).forEach(function(o) {
    // Aria
    (t.aria && (o === "role" || Jc(o, xm)) || // Data
    t.data && Jc(o, mm) || // Attr
    t.attr && pm.includes(o)) && (r[o] = e[o]);
  }), r;
}
const Df = (e, n, t) => /* @__PURE__ */ je.isValidElement(e) ? /* @__PURE__ */ je.cloneElement(e, typeof t == "function" ? t(e.props || {}) : t) : n;
function vm(e, n) {
  return Df(e, e, n);
}
const lo = (e, n, t, r, o) => ({
  background: e,
  border: `${Lo(r.lineWidth)} ${r.lineType} ${n}`,
  [`${o}-icon`]: {
    color: t
  }
}), ym = (e) => {
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
    colorText: d,
    colorTextHeading: f,
    withDescriptionPadding: v,
    defaultPadding: m
  } = e;
  return {
    [n]: Object.assign(Object.assign({}, hf(e)), {
      position: "relative",
      display: "flex",
      alignItems: "center",
      padding: m,
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
        color: f
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
        fontSize: u,
        lineHeight: 0
      },
      [`${n}-message`]: {
        display: "block",
        marginBottom: r,
        color: f,
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
}, bm = (e) => {
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
    colorInfo: d,
    colorInfoBorder: f,
    colorInfoBg: v
  } = e;
  return {
    [n]: {
      "&-success": lo(o, r, t, e, n),
      "&-info": lo(v, f, d, e, n),
      "&-warning": lo(a, s, i, e, n),
      "&-error": Object.assign(Object.assign({}, lo(u, l, c, e, n)), {
        [`${n}-description > pre`]: {
          margin: 0,
          padding: 0
        }
      })
    }
  };
}, Sm = (e) => {
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
        lineHeight: Lo(i),
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
}, wm = (e) => ({
  withDescriptionIconSize: e.fontSizeHeading3,
  defaultPadding: `${e.paddingContentVerticalSM}px 12px`,
  withDescriptionPadding: `${e.paddingMD}px ${e.paddingContentHorizontalLG}px`
}), Em = Pa("Alert", (e) => [ym(e), bm(e), Sm(e)], wm);
var Qc = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
const _m = {
  success: If,
  info: Lf,
  error: Nf,
  warning: Mf
}, Cm = (e) => {
  const {
    icon: n,
    prefixCls: t,
    type: r
  } = e, o = _m[r] || null;
  return n ? Df(n, /* @__PURE__ */ w.createElement("span", {
    className: `${t}-icon`
  }, n), () => ({
    className: Ge(`${t}-icon`, n.props.className)
  })) : /* @__PURE__ */ w.createElement(o, {
    className: `${t}-icon`
  });
}, Am = (e) => {
  const {
    isClosable: n,
    prefixCls: t,
    closeIcon: r,
    handleClose: o,
    ariaProps: i
  } = e, s = r === !0 || r === void 0 ? /* @__PURE__ */ w.createElement(jf, null) : r;
  return n ? /* @__PURE__ */ w.createElement("button", Object.assign({
    type: "button",
    onClick: o,
    className: `${t}-close-icon`,
    tabIndex: 0
  }, i), s) : null;
}, Na = /* @__PURE__ */ w.forwardRef((e, n) => {
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
    onClick: d,
    afterClose: f,
    showIcon: v,
    closable: m,
    closeText: x,
    closeIcon: h,
    action: S,
    id: b
  } = e, g = Qc(e, ["description", "prefixCls", "message", "banner", "className", "rootClassName", "style", "onMouseEnter", "onMouseLeave", "onClick", "afterClose", "showIcon", "closable", "closeText", "closeIcon", "action", "id"]), [C, y] = w.useState(!1);
  process.env.NODE_ENV !== "production" && nr("Alert").deprecated(!x, "closeText", "closable.closeIcon");
  const A = w.useRef(null);
  w.useImperativeHandle(n, () => ({
    nativeElement: A.current
  }));
  const {
    getPrefixCls: E,
    direction: P,
    closable: D,
    closeIcon: W,
    className: ee,
    style: Y
  } = sf("alert"), N = E("alert", r), [z, q, $] = Em(N), J = (le) => {
    var de;
    y(!0), (de = e.onClose) === null || de === void 0 || de.call(e, le);
  }, G = w.useMemo(() => e.type !== void 0 ? e.type : i ? "warning" : "info", [e.type, i]), Z = w.useMemo(() => typeof m == "object" && m.closeIcon || x ? !0 : typeof m == "boolean" ? m : h !== !1 && h !== null && h !== void 0 ? !0 : !!D, [x, h, m, D]), re = i && v === void 0 ? !0 : v, oe = Ge(N, `${N}-${G}`, {
    [`${N}-with-description`]: !!t,
    [`${N}-no-icon`]: !re,
    [`${N}-banner`]: !!i,
    [`${N}-rtl`]: P === "rtl"
  }, ee, s, a, $, q), K = gm(g, {
    aria: !0,
    data: !0
  }), te = w.useMemo(() => typeof m == "object" && m.closeIcon ? m.closeIcon : x || (h !== void 0 ? h : typeof D == "object" && D.closeIcon ? D.closeIcon : W), [h, m, x, W]), fe = w.useMemo(() => {
    const le = m ?? D;
    if (typeof le == "object") {
      const {
        closeIcon: de
      } = le;
      return Qc(le, ["closeIcon"]);
    }
    return {};
  }, [m, D]);
  return z(/* @__PURE__ */ w.createElement(Cf, {
    visible: !C,
    motionName: `${N}-motion`,
    motionAppear: !1,
    motionEnter: !1,
    onLeaveStart: (le) => ({
      maxHeight: le.offsetHeight
    }),
    onLeaveEnd: f
  }, (le, de) => {
    let {
      className: pe,
      style: k
    } = le;
    return /* @__PURE__ */ w.createElement("div", Object.assign({
      id: b,
      ref: tp(A, de),
      "data-show": !C,
      className: Ge(oe, pe),
      style: Object.assign(Object.assign(Object.assign({}, Y), c), k),
      onMouseEnter: l,
      onMouseLeave: u,
      onClick: d,
      role: "alert"
    }, K), re ? /* @__PURE__ */ w.createElement(Cm, {
      description: t,
      icon: e.icon,
      prefixCls: N,
      type: G
    }) : null, /* @__PURE__ */ w.createElement("div", {
      className: `${N}-content`
    }, o ? /* @__PURE__ */ w.createElement("div", {
      className: `${N}-message`
    }, o) : null, t ? /* @__PURE__ */ w.createElement("div", {
      className: `${N}-description`
    }, t) : null), S ? /* @__PURE__ */ w.createElement("div", {
      className: `${N}-action`
    }, S) : null, /* @__PURE__ */ w.createElement(Am, {
      isClosable: Z,
      prefixCls: N,
      closeIcon: te,
      handleClose: J,
      ariaProps: fe
    }));
  }));
});
process.env.NODE_ENV !== "production" && (Na.displayName = "Alert");
function Tm(e, n, t) {
  return n = Yn(n), vu(e, ba() ? Reflect.construct(n, t || [], Yn(e).constructor) : n.apply(e, t));
}
let Om = /* @__PURE__ */ function(e) {
  function n() {
    var t;
    return Ct(this, n), t = Tm(this, n, arguments), t.state = {
      error: void 0,
      info: {
        componentStack: ""
      }
    }, t;
  }
  return Vr(n, e), At(n, [{
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
      } = this.state, l = (c == null ? void 0 : c.componentStack) || null, u = typeof r > "u" ? (a || "").toString() : r, d = typeof o > "u" ? l : o;
      return a ? /* @__PURE__ */ w.createElement(Na, {
        id: i,
        type: "error",
        message: u,
        description: /* @__PURE__ */ w.createElement("pre", {
          style: {
            fontSize: "0.9em",
            overflowX: "auto"
          }
        }, d)
      }) : s;
    }
  }]);
}(w.Component);
const Bf = Na;
Bf.ErrorBoundary = Om;
function Rm(e, n) {
  var t = Object.assign({}, e);
  return Array.isArray(n) && n.forEach(function(r) {
    delete t[r];
  }), t;
}
function km(e, n, t) {
  var r = t || {}, o = r.noTrailing, i = o === void 0 ? !1 : o, s = r.noLeading, a = s === void 0 ? !1 : s, c = r.debounceMode, l = c === void 0 ? void 0 : c, u, d = !1, f = 0;
  function v() {
    u && clearTimeout(u);
  }
  function m(h) {
    var S = h || {}, b = S.upcomingOnly, g = b === void 0 ? !1 : b;
    v(), d = !g;
  }
  function x() {
    for (var h = arguments.length, S = new Array(h), b = 0; b < h; b++)
      S[b] = arguments[b];
    var g = this, C = Date.now() - f;
    if (d)
      return;
    function y() {
      f = Date.now(), n.apply(g, S);
    }
    function A() {
      u = void 0;
    }
    !a && l && !u && y(), v(), l === void 0 && C > e ? a ? (f = Date.now(), i || (u = setTimeout(l ? A : y, e))) : y() : i !== !0 && (u = setTimeout(l ? A : y, l === void 0 ? e - C : e));
  }
  return x.cancel = m, x;
}
function Pm(e, n, t) {
  var r = {}, o = r.atBegin, i = o === void 0 ? !1 : o;
  return km(e, n, {
    debounceMode: i !== !1
  });
}
function el(e) {
  return ["small", "middle", "large"].includes(e);
}
const Ff = ["wrap", "nowrap", "wrap-reverse"], zf = ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around", "space-evenly", "stretch", "normal", "left", "right"], Vf = ["center", "start", "end", "flex-start", "flex-end", "self-start", "self-end", "baseline", "normal", "stretch"], Im = (e, n) => {
  const t = n.wrap === !0 ? "wrap" : n.wrap;
  return {
    [`${e}-wrap-${t}`]: t && Ff.includes(t)
  };
}, Nm = (e, n) => {
  const t = {};
  return Vf.forEach((r) => {
    t[`${e}-align-${r}`] = n.align === r;
  }), t[`${e}-align-stretch`] = !n.align && !!n.vertical, t;
}, jm = (e, n) => {
  const t = {};
  return zf.forEach((r) => {
    t[`${e}-justify-${r}`] = n.justify === r;
  }), t;
};
function Mm(e, n) {
  return Ge(Object.assign(Object.assign(Object.assign({}, Im(e, n)), Nm(e, n)), jm(e, n)));
}
const Lm = (e) => {
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
}, Dm = (e) => {
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
}, Bm = (e) => {
  const {
    componentCls: n
  } = e, t = {};
  return Ff.forEach((r) => {
    t[`${n}-wrap-${r}`] = {
      flexWrap: r
    };
  }), t;
}, Fm = (e) => {
  const {
    componentCls: n
  } = e, t = {};
  return Vf.forEach((r) => {
    t[`${n}-align-${r}`] = {
      alignItems: r
    };
  }), t;
}, zm = (e) => {
  const {
    componentCls: n
  } = e, t = {};
  return zf.forEach((r) => {
    t[`${n}-justify-${r}`] = {
      justifyContent: r
    };
  }), t;
}, Vm = () => ({}), Hm = Pa("Flex", (e) => {
  const {
    paddingXS: n,
    padding: t,
    paddingLG: r
  } = e, o = di(e, {
    flexGapSM: n,
    flexGap: t,
    flexGapLG: r
  });
  return [Lm(o), Dm(o), Bm(o), Fm(o), zm(o)];
}, Vm, {
  // Flex component don't apply extra font style
  // https://github.com/ant-design/ant-design/issues/46403
  resetStyle: !1
});
var Um = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
const Hf = /* @__PURE__ */ je.forwardRef((e, n) => {
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
  } = e, d = Um(e, ["prefixCls", "rootClassName", "className", "style", "flex", "gap", "children", "vertical", "component"]), {
    flex: f,
    direction: v,
    getPrefixCls: m
  } = je.useContext(ln), x = m("flex", t), [h, S, b] = Hm(x), g = l ?? (f == null ? void 0 : f.vertical), C = Ge(o, r, f == null ? void 0 : f.className, x, S, b, Mm(x, e), {
    [`${x}-rtl`]: v === "rtl",
    [`${x}-gap-${a}`]: el(a),
    [`${x}-vertical`]: g
  }), y = Object.assign(Object.assign({}, f == null ? void 0 : f.style), i);
  return s && (y.flex = s), a && !el(a) && (y.gap = a), h(/* @__PURE__ */ je.createElement(u, Object.assign({
    ref: n,
    className: C,
    style: y
  }, Rm(d, ["justify", "wrap", "align"])), c));
});
process.env.NODE_ENV !== "production" && (Hf.displayName = "Flex");
const Fo = 100, Uf = Fo / 5, qf = Fo / 2 - Uf / 2, Hi = qf * 2 * Math.PI, tl = 50, nl = (e) => {
  const {
    dotClassName: n,
    style: t,
    hasCircleCls: r
  } = e;
  return /* @__PURE__ */ w.createElement("circle", {
    className: Ge(`${n}-circle`, {
      [`${n}-circle-bg`]: r
    }),
    r: qf,
    cx: tl,
    cy: tl,
    strokeWidth: Uf,
    style: t
  });
}, qm = (e) => {
  let {
    percent: n,
    prefixCls: t
  } = e;
  const r = `${t}-dot`, o = `${r}-holder`, i = `${o}-hidden`, [s, a] = w.useState(!1);
  Pu(() => {
    n !== 0 && a(!0);
  }, [n !== 0]);
  const c = Math.max(Math.min(n, 100), 0);
  if (!s)
    return null;
  const l = {
    strokeDashoffset: `${Hi / 4}`,
    strokeDasharray: `${Hi * c / 100} ${Hi * (100 - c) / 100}`
  };
  return /* @__PURE__ */ w.createElement("span", {
    className: Ge(o, `${r}-progress`, c <= 0 && i)
  }, /* @__PURE__ */ w.createElement("svg", {
    viewBox: `0 0 ${Fo} ${Fo}`,
    // biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole: progressbar could be readonly
    role: "progressbar",
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": c
  }, /* @__PURE__ */ w.createElement(nl, {
    dotClassName: r,
    hasCircleCls: !0
  }), /* @__PURE__ */ w.createElement(nl, {
    dotClassName: r,
    style: l
  })));
};
function Wm(e) {
  const {
    prefixCls: n,
    percent: t = 0
  } = e, r = `${n}-dot`, o = `${r}-holder`, i = `${o}-hidden`;
  return /* @__PURE__ */ w.createElement(w.Fragment, null, /* @__PURE__ */ w.createElement("span", {
    className: Ge(o, t > 0 && i)
  }, /* @__PURE__ */ w.createElement("span", {
    className: Ge(r, `${n}-dot-spin`)
  }, [1, 2, 3, 4].map((s) => /* @__PURE__ */ w.createElement("i", {
    className: `${n}-dot-item`,
    key: s
  })))), /* @__PURE__ */ w.createElement(qm, {
    prefixCls: n,
    percent: t
  }));
}
function $m(e) {
  const {
    prefixCls: n,
    indicator: t,
    percent: r
  } = e, o = `${n}-dot`;
  return t && /* @__PURE__ */ w.isValidElement(t) ? vm(t, {
    className: Ge(t.props.className, o),
    percent: r
  }) : /* @__PURE__ */ w.createElement(Wm, {
    prefixCls: n,
    percent: r
  });
}
const Xm = new Xu("antSpinMove", {
  to: {
    opacity: 1
  }
}), Ym = new Xu("antRotate", {
  to: {
    transform: "rotate(405deg)"
  }
}), Gm = (e) => {
  const {
    componentCls: n,
    calc: t
  } = e;
  return {
    [n]: Object.assign(Object.assign({}, hf(e)), {
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
          animationName: Xm,
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
          animationName: Ym,
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
}, Km = (e) => {
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
}, Zm = Pa("Spin", (e) => {
  const n = di(e, {
    spinDotDefault: e.colorTextDescription
  });
  return [Gm(n)];
}, Km), Jm = 200, rl = [[30, 0.05], [70, 0.03], [96, 0.01]];
function Qm(e, n) {
  const [t, r] = w.useState(0), o = w.useRef(null), i = n === "auto";
  return w.useEffect(() => (i && e && (r(0), o.current = setInterval(() => {
    r((s) => {
      const a = 100 - s;
      for (let c = 0; c < rl.length; c += 1) {
        const [l, u] = rl[c];
        if (s <= l)
          return s + a * u;
      }
      return s;
    });
  }, Jm)), () => {
    clearInterval(o.current);
  }), [i, e]), i ? t : n;
}
var eg = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
let Wf;
function tg(e, n) {
  return !!e && !!n && !Number.isNaN(Number(n));
}
const Ir = (e) => {
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
    children: d,
    fullscreen: f = !1,
    indicator: v,
    percent: m
  } = e, x = eg(e, ["prefixCls", "spinning", "delay", "className", "rootClassName", "size", "tip", "wrapperClassName", "style", "children", "fullscreen", "indicator", "percent"]), {
    getPrefixCls: h,
    direction: S,
    className: b,
    style: g,
    indicator: C
  } = sf("spin"), y = h("spin", t), [A, E, P] = Zm(y), [D, W] = w.useState(() => r && !tg(r, o)), ee = Qm(D, m);
  w.useEffect(() => {
    if (r) {
      const G = Pm(o, () => {
        W(!0);
      });
      return G(), () => {
        var Z;
        (Z = G == null ? void 0 : G.cancel) === null || Z === void 0 || Z.call(G);
      };
    }
    W(!1);
  }, [o, r]);
  const Y = w.useMemo(() => typeof d < "u" && !f, [d, f]);
  if (process.env.NODE_ENV !== "production") {
    const G = nr("Spin");
    process.env.NODE_ENV !== "production" && G(!c || Y || f, "usage", "`tip` only work in nest or fullscreen pattern.");
  }
  const N = Ge(y, b, {
    [`${y}-sm`]: a === "small",
    [`${y}-lg`]: a === "large",
    [`${y}-spinning`]: D,
    [`${y}-show-text`]: !!c,
    [`${y}-rtl`]: S === "rtl"
  }, i, !f && s, E, P), z = Ge(`${y}-container`, {
    [`${y}-blur`]: D
  }), q = (n = v ?? C) !== null && n !== void 0 ? n : Wf, $ = Object.assign(Object.assign({}, g), u), J = /* @__PURE__ */ w.createElement("div", Object.assign({}, x, {
    style: $,
    className: N,
    "aria-live": "polite",
    "aria-busy": D
  }), /* @__PURE__ */ w.createElement($m, {
    prefixCls: y,
    indicator: q,
    percent: ee
  }), c && (Y || f) ? /* @__PURE__ */ w.createElement("div", {
    className: `${y}-text`
  }, c) : null);
  return A(Y ? /* @__PURE__ */ w.createElement("div", Object.assign({}, x, {
    className: Ge(`${y}-nested-loading`, l, E, P)
  }), D && /* @__PURE__ */ w.createElement("div", {
    key: "loading"
  }, J), /* @__PURE__ */ w.createElement("div", {
    className: z,
    key: "container"
  }, d)) : f ? /* @__PURE__ */ w.createElement("div", {
    className: Ge(`${y}-fullscreen`, {
      [`${y}-fullscreen-show`]: D
    }, s, E, P)
  }, J) : J);
};
Ir.setDefaultIndicator = (e) => {
  Wf = e;
};
process.env.NODE_ENV !== "production" && (Ir.displayName = "Spin");
function $f(e, n) {
  return function() {
    return e.apply(n, arguments);
  };
}
const { toString: ng } = Object.prototype, { getPrototypeOf: ja } = Object, { iterator: hi, toStringTag: Xf } = Symbol, pi = /* @__PURE__ */ ((e) => (n) => {
  const t = ng.call(n);
  return e[t] || (e[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Tt = (e) => (e = e.toLowerCase(), (n) => pi(n) === e), xi = (e) => (n) => typeof n === e, { isArray: ir } = Array, Fr = xi("undefined");
function rg(e) {
  return e !== null && !Fr(e) && e.constructor !== null && !Fr(e.constructor) && rt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Yf = Tt("ArrayBuffer");
function og(e) {
  let n;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? n = ArrayBuffer.isView(e) : n = e && e.buffer && Yf(e.buffer), n;
}
const ig = xi("string"), rt = xi("function"), Gf = xi("number"), mi = (e) => e !== null && typeof e == "object", sg = (e) => e === !0 || e === !1, To = (e) => {
  if (pi(e) !== "object")
    return !1;
  const n = ja(e);
  return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Xf in e) && !(hi in e);
}, ag = Tt("Date"), cg = Tt("File"), lg = Tt("Blob"), ug = Tt("FileList"), fg = (e) => mi(e) && rt(e.pipe), dg = (e) => {
  let n;
  return e && (typeof FormData == "function" && e instanceof FormData || rt(e.append) && ((n = pi(e)) === "formdata" || // detect form-data instance
  n === "object" && rt(e.toString) && e.toString() === "[object FormData]"));
}, hg = Tt("URLSearchParams"), [pg, xg, mg, gg] = ["ReadableStream", "Request", "Response", "Headers"].map(Tt), vg = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ur(e, n, { allOwnKeys: t = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), ir(e))
    for (r = 0, o = e.length; r < o; r++)
      n.call(null, e[r], r, e);
  else {
    const i = t ? Object.getOwnPropertyNames(e) : Object.keys(e), s = i.length;
    let a;
    for (r = 0; r < s; r++)
      a = i[r], n.call(null, e[a], a, e);
  }
}
function Kf(e, n) {
  n = n.toLowerCase();
  const t = Object.keys(e);
  let r = t.length, o;
  for (; r-- > 0; )
    if (o = t[r], n === o.toLowerCase())
      return o;
  return null;
}
const En = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Zf = (e) => !Fr(e) && e !== En;
function qs() {
  const { caseless: e } = Zf(this) && this || {}, n = {}, t = (r, o) => {
    const i = e && Kf(n, o) || o;
    To(n[i]) && To(r) ? n[i] = qs(n[i], r) : To(r) ? n[i] = qs({}, r) : ir(r) ? n[i] = r.slice() : n[i] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Ur(arguments[r], t);
  return n;
}
const yg = (e, n, t, { allOwnKeys: r } = {}) => (Ur(n, (o, i) => {
  t && rt(o) ? e[i] = $f(o, t) : e[i] = o;
}, { allOwnKeys: r }), e), bg = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Sg = (e, n, t, r) => {
  e.prototype = Object.create(n.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: n.prototype
  }), t && Object.assign(e.prototype, t);
}, wg = (e, n, t, r) => {
  let o, i, s;
  const a = {};
  if (n = n || {}, e == null) return n;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      s = o[i], (!r || r(s, e, n)) && !a[s] && (n[s] = e[s], a[s] = !0);
    e = t !== !1 && ja(e);
  } while (e && (!t || t(e, n)) && e !== Object.prototype);
  return n;
}, Eg = (e, n, t) => {
  e = String(e), (t === void 0 || t > e.length) && (t = e.length), t -= n.length;
  const r = e.indexOf(n, t);
  return r !== -1 && r === t;
}, _g = (e) => {
  if (!e) return null;
  if (ir(e)) return e;
  let n = e.length;
  if (!Gf(n)) return null;
  const t = new Array(n);
  for (; n-- > 0; )
    t[n] = e[n];
  return t;
}, Cg = /* @__PURE__ */ ((e) => (n) => e && n instanceof e)(typeof Uint8Array < "u" && ja(Uint8Array)), Ag = (e, n) => {
  const r = (e && e[hi]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const i = o.value;
    n.call(e, i[0], i[1]);
  }
}, Tg = (e, n) => {
  let t;
  const r = [];
  for (; (t = e.exec(n)) !== null; )
    r.push(t);
  return r;
}, Og = Tt("HTMLFormElement"), Rg = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(t, r, o) {
    return r.toUpperCase() + o;
  }
), ol = (({ hasOwnProperty: e }) => (n, t) => e.call(n, t))(Object.prototype), kg = Tt("RegExp"), Jf = (e, n) => {
  const t = Object.getOwnPropertyDescriptors(e), r = {};
  Ur(t, (o, i) => {
    let s;
    (s = n(o, i, e)) !== !1 && (r[i] = s || o);
  }), Object.defineProperties(e, r);
}, Pg = (e) => {
  Jf(e, (n, t) => {
    if (rt(e) && ["arguments", "caller", "callee"].indexOf(t) !== -1)
      return !1;
    const r = e[t];
    if (rt(r)) {
      if (n.enumerable = !1, "writable" in n) {
        n.writable = !1;
        return;
      }
      n.set || (n.set = () => {
        throw Error("Can not rewrite read-only method '" + t + "'");
      });
    }
  });
}, Ig = (e, n) => {
  const t = {}, r = (o) => {
    o.forEach((i) => {
      t[i] = !0;
    });
  };
  return ir(e) ? r(e) : r(String(e).split(n)), t;
}, Ng = () => {
}, jg = (e, n) => e != null && Number.isFinite(e = +e) ? e : n;
function Mg(e) {
  return !!(e && rt(e.append) && e[Xf] === "FormData" && e[hi]);
}
const Lg = (e) => {
  const n = new Array(10), t = (r, o) => {
    if (mi(r)) {
      if (n.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        n[o] = r;
        const i = ir(r) ? [] : {};
        return Ur(r, (s, a) => {
          const c = t(s, o + 1);
          !Fr(c) && (i[a] = c);
        }), n[o] = void 0, i;
      }
    }
    return r;
  };
  return t(e, 0);
}, Dg = Tt("AsyncFunction"), Bg = (e) => e && (mi(e) || rt(e)) && rt(e.then) && rt(e.catch), Qf = ((e, n) => e ? setImmediate : n ? ((t, r) => (En.addEventListener("message", ({ source: o, data: i }) => {
  o === En && i === t && r.length && r.shift()();
}, !1), (o) => {
  r.push(o), En.postMessage(t, "*");
}))(`axios@${Math.random()}`, []) : (t) => setTimeout(t))(
  typeof setImmediate == "function",
  rt(En.postMessage)
), Fg = typeof queueMicrotask < "u" ? queueMicrotask.bind(En) : typeof process < "u" && process.nextTick || Qf, zg = (e) => e != null && rt(e[hi]), _ = {
  isArray: ir,
  isArrayBuffer: Yf,
  isBuffer: rg,
  isFormData: dg,
  isArrayBufferView: og,
  isString: ig,
  isNumber: Gf,
  isBoolean: sg,
  isObject: mi,
  isPlainObject: To,
  isReadableStream: pg,
  isRequest: xg,
  isResponse: mg,
  isHeaders: gg,
  isUndefined: Fr,
  isDate: ag,
  isFile: cg,
  isBlob: lg,
  isRegExp: kg,
  isFunction: rt,
  isStream: fg,
  isURLSearchParams: hg,
  isTypedArray: Cg,
  isFileList: ug,
  forEach: Ur,
  merge: qs,
  extend: yg,
  trim: vg,
  stripBOM: bg,
  inherits: Sg,
  toFlatObject: wg,
  kindOf: pi,
  kindOfTest: Tt,
  endsWith: Eg,
  toArray: _g,
  forEachEntry: Ag,
  matchAll: Tg,
  isHTMLForm: Og,
  hasOwnProperty: ol,
  hasOwnProp: ol,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Jf,
  freezeMethods: Pg,
  toObjectSet: Ig,
  toCamelCase: Rg,
  noop: Ng,
  toFiniteNumber: jg,
  findKey: Kf,
  global: En,
  isContextDefined: Zf,
  isSpecCompliantForm: Mg,
  toJSONObject: Lg,
  isAsyncFn: Dg,
  isThenable: Bg,
  setImmediate: Qf,
  asap: Fg,
  isIterable: zg
};
function Q(e, n, t, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", n && (this.code = n), t && (this.config = t), r && (this.request = r), o && (this.response = o, this.status = o.status ? o.status : null);
}
_.inherits(Q, Error, {
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
      config: _.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const e0 = Q.prototype, t0 = {};
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
  t0[e] = { value: e };
});
Object.defineProperties(Q, t0);
Object.defineProperty(e0, "isAxiosError", { value: !0 });
Q.from = (e, n, t, r, o, i) => {
  const s = Object.create(e0);
  return _.toFlatObject(e, s, function(c) {
    return c !== Error.prototype;
  }, (a) => a !== "isAxiosError"), Q.call(s, e.message, n, t, r, o), s.cause = e, s.name = e.name, i && Object.assign(s, i), s;
};
const Vg = null;
function Ws(e) {
  return _.isPlainObject(e) || _.isArray(e);
}
function n0(e) {
  return _.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function il(e, n, t) {
  return e ? e.concat(n).map(function(o, i) {
    return o = n0(o), !t && i ? "[" + o + "]" : o;
  }).join(t ? "." : "") : n;
}
function Hg(e) {
  return _.isArray(e) && !e.some(Ws);
}
const Ug = _.toFlatObject(_, {}, null, function(n) {
  return /^is[A-Z]/.test(n);
});
function gi(e, n, t) {
  if (!_.isObject(e))
    throw new TypeError("target must be an object");
  n = n || new FormData(), t = _.toFlatObject(t, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(x, h) {
    return !_.isUndefined(h[x]);
  });
  const r = t.metaTokens, o = t.visitor || u, i = t.dots, s = t.indexes, c = (t.Blob || typeof Blob < "u" && Blob) && _.isSpecCompliantForm(n);
  if (!_.isFunction(o))
    throw new TypeError("visitor must be a function");
  function l(m) {
    if (m === null) return "";
    if (_.isDate(m))
      return m.toISOString();
    if (!c && _.isBlob(m))
      throw new Q("Blob is not supported. Use a Buffer instead.");
    return _.isArrayBuffer(m) || _.isTypedArray(m) ? c && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function u(m, x, h) {
    let S = m;
    if (m && !h && typeof m == "object") {
      if (_.endsWith(x, "{}"))
        x = r ? x : x.slice(0, -2), m = JSON.stringify(m);
      else if (_.isArray(m) && Hg(m) || (_.isFileList(m) || _.endsWith(x, "[]")) && (S = _.toArray(m)))
        return x = n0(x), S.forEach(function(g, C) {
          !(_.isUndefined(g) || g === null) && n.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? il([x], C, i) : s === null ? x : x + "[]",
            l(g)
          );
        }), !1;
    }
    return Ws(m) ? !0 : (n.append(il(h, x, i), l(m)), !1);
  }
  const d = [], f = Object.assign(Ug, {
    defaultVisitor: u,
    convertValue: l,
    isVisitable: Ws
  });
  function v(m, x) {
    if (!_.isUndefined(m)) {
      if (d.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + x.join("."));
      d.push(m), _.forEach(m, function(S, b) {
        (!(_.isUndefined(S) || S === null) && o.call(
          n,
          S,
          _.isString(b) ? b.trim() : b,
          x,
          f
        )) === !0 && v(S, x ? x.concat(b) : [b]);
      }), d.pop();
    }
  }
  if (!_.isObject(e))
    throw new TypeError("data must be an object");
  return v(e), n;
}
function sl(e) {
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
function Ma(e, n) {
  this._pairs = [], e && gi(e, this, n);
}
const r0 = Ma.prototype;
r0.append = function(n, t) {
  this._pairs.push([n, t]);
};
r0.toString = function(n) {
  const t = n ? function(r) {
    return n.call(this, r, sl);
  } : sl;
  return this._pairs.map(function(o) {
    return t(o[0]) + "=" + t(o[1]);
  }, "").join("&");
};
function qg(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function o0(e, n, t) {
  if (!n)
    return e;
  const r = t && t.encode || qg;
  _.isFunction(t) && (t = {
    serialize: t
  });
  const o = t && t.serialize;
  let i;
  if (o ? i = o(n, t) : i = _.isURLSearchParams(n) ? n.toString() : new Ma(n, t).toString(r), i) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class al {
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
    _.forEach(this.handlers, function(r) {
      r !== null && n(r);
    });
  }
}
const i0 = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Wg = typeof URLSearchParams < "u" ? URLSearchParams : Ma, $g = typeof FormData < "u" ? FormData : null, Xg = typeof Blob < "u" ? Blob : null, Yg = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Wg,
    FormData: $g,
    Blob: Xg
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, La = typeof window < "u" && typeof document < "u", $s = typeof navigator == "object" && navigator || void 0, Gg = La && (!$s || ["ReactNative", "NativeScript", "NS"].indexOf($s.product) < 0), Kg = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Zg = La && window.location.href || "http://localhost", Jg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: La,
  hasStandardBrowserEnv: Gg,
  hasStandardBrowserWebWorkerEnv: Kg,
  navigator: $s,
  origin: Zg
}, Symbol.toStringTag, { value: "Module" })), Ye = {
  ...Jg,
  ...Yg
};
function Qg(e, n) {
  return gi(e, new Ye.classes.URLSearchParams(), Object.assign({
    visitor: function(t, r, o, i) {
      return Ye.isNode && _.isBuffer(t) ? (this.append(r, t.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, n));
}
function ev(e) {
  return _.matchAll(/\w+|\[(\w*)]/g, e).map((n) => n[0] === "[]" ? "" : n[1] || n[0]);
}
function tv(e) {
  const n = {}, t = Object.keys(e);
  let r;
  const o = t.length;
  let i;
  for (r = 0; r < o; r++)
    i = t[r], n[i] = e[i];
  return n;
}
function s0(e) {
  function n(t, r, o, i) {
    let s = t[i++];
    if (s === "__proto__") return !0;
    const a = Number.isFinite(+s), c = i >= t.length;
    return s = !s && _.isArray(o) ? o.length : s, c ? (_.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !a) : ((!o[s] || !_.isObject(o[s])) && (o[s] = []), n(t, r, o[s], i) && _.isArray(o[s]) && (o[s] = tv(o[s])), !a);
  }
  if (_.isFormData(e) && _.isFunction(e.entries)) {
    const t = {};
    return _.forEachEntry(e, (r, o) => {
      n(ev(r), o, t, 0);
    }), t;
  }
  return null;
}
function nv(e, n, t) {
  if (_.isString(e))
    try {
      return (n || JSON.parse)(e), _.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (t || JSON.stringify)(e);
}
const qr = {
  transitional: i0,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(n, t) {
    const r = t.getContentType() || "", o = r.indexOf("application/json") > -1, i = _.isObject(n);
    if (i && _.isHTMLForm(n) && (n = new FormData(n)), _.isFormData(n))
      return o ? JSON.stringify(s0(n)) : n;
    if (_.isArrayBuffer(n) || _.isBuffer(n) || _.isStream(n) || _.isFile(n) || _.isBlob(n) || _.isReadableStream(n))
      return n;
    if (_.isArrayBufferView(n))
      return n.buffer;
    if (_.isURLSearchParams(n))
      return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), n.toString();
    let a;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Qg(n, this.formSerializer).toString();
      if ((a = _.isFileList(n)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return gi(
          a ? { "files[]": n } : n,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return i || o ? (t.setContentType("application/json", !1), nv(n)) : n;
  }],
  transformResponse: [function(n) {
    const t = this.transitional || qr.transitional, r = t && t.forcedJSONParsing, o = this.responseType === "json";
    if (_.isResponse(n) || _.isReadableStream(n))
      return n;
    if (n && _.isString(n) && (r && !this.responseType || o)) {
      const s = !(t && t.silentJSONParsing) && o;
      try {
        return JSON.parse(n);
      } catch (a) {
        if (s)
          throw a.name === "SyntaxError" ? Q.from(a, Q.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
    FormData: Ye.classes.FormData,
    Blob: Ye.classes.Blob
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
_.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  qr.headers[e] = {};
});
const rv = _.toObjectSet([
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
]), ov = (e) => {
  const n = {};
  let t, r, o;
  return e && e.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), t = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!t || n[t] && rv[t]) && (t === "set-cookie" ? n[t] ? n[t].push(r) : n[t] = [r] : n[t] = n[t] ? n[t] + ", " + r : r);
  }), n;
}, cl = Symbol("internals");
function mr(e) {
  return e && String(e).trim().toLowerCase();
}
function Oo(e) {
  return e === !1 || e == null ? e : _.isArray(e) ? e.map(Oo) : String(e);
}
function iv(e) {
  const n = /* @__PURE__ */ Object.create(null), t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = t.exec(e); )
    n[r[1]] = r[2];
  return n;
}
const sv = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ui(e, n, t, r, o) {
  if (_.isFunction(r))
    return r.call(this, n, t);
  if (o && (n = t), !!_.isString(n)) {
    if (_.isString(r))
      return n.indexOf(r) !== -1;
    if (_.isRegExp(r))
      return r.test(n);
  }
}
function av(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (n, t, r) => t.toUpperCase() + r);
}
function cv(e, n) {
  const t = _.toCamelCase(" " + n);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + t, {
      value: function(o, i, s) {
        return this[r].call(this, n, o, i, s);
      },
      configurable: !0
    });
  });
}
let ot = class {
  constructor(n) {
    n && this.set(n);
  }
  set(n, t, r) {
    const o = this;
    function i(a, c, l) {
      const u = mr(c);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = _.findKey(o, u);
      (!d || o[d] === void 0 || l === !0 || l === void 0 && o[d] !== !1) && (o[d || c] = Oo(a));
    }
    const s = (a, c) => _.forEach(a, (l, u) => i(l, u, c));
    if (_.isPlainObject(n) || n instanceof this.constructor)
      s(n, t);
    else if (_.isString(n) && (n = n.trim()) && !sv(n))
      s(ov(n), t);
    else if (_.isObject(n) && _.isIterable(n)) {
      let a = {}, c, l;
      for (const u of n) {
        if (!_.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        a[l = u[0]] = (c = a[l]) ? _.isArray(c) ? [...c, u[1]] : [c, u[1]] : u[1];
      }
      s(a, t);
    } else
      n != null && i(t, n, r);
    return this;
  }
  get(n, t) {
    if (n = mr(n), n) {
      const r = _.findKey(this, n);
      if (r) {
        const o = this[r];
        if (!t)
          return o;
        if (t === !0)
          return iv(o);
        if (_.isFunction(t))
          return t.call(this, o, r);
        if (_.isRegExp(t))
          return t.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(n, t) {
    if (n = mr(n), n) {
      const r = _.findKey(this, n);
      return !!(r && this[r] !== void 0 && (!t || Ui(this, this[r], r, t)));
    }
    return !1;
  }
  delete(n, t) {
    const r = this;
    let o = !1;
    function i(s) {
      if (s = mr(s), s) {
        const a = _.findKey(r, s);
        a && (!t || Ui(r, r[a], a, t)) && (delete r[a], o = !0);
      }
    }
    return _.isArray(n) ? n.forEach(i) : i(n), o;
  }
  clear(n) {
    const t = Object.keys(this);
    let r = t.length, o = !1;
    for (; r--; ) {
      const i = t[r];
      (!n || Ui(this, this[i], i, n, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(n) {
    const t = this, r = {};
    return _.forEach(this, (o, i) => {
      const s = _.findKey(r, i);
      if (s) {
        t[s] = Oo(o), delete t[i];
        return;
      }
      const a = n ? av(i) : String(i).trim();
      a !== i && delete t[i], t[a] = Oo(o), r[a] = !0;
    }), this;
  }
  concat(...n) {
    return this.constructor.concat(this, ...n);
  }
  toJSON(n) {
    const t = /* @__PURE__ */ Object.create(null);
    return _.forEach(this, (r, o) => {
      r != null && r !== !1 && (t[o] = n && _.isArray(r) ? r.join(", ") : r);
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
    const r = (this[cl] = this[cl] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(s) {
      const a = mr(s);
      r[a] || (cv(o, s), r[a] = !0);
    }
    return _.isArray(n) ? n.forEach(i) : i(n), this;
  }
};
ot.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
_.reduceDescriptors(ot.prototype, ({ value: e }, n) => {
  let t = n[0].toUpperCase() + n.slice(1);
  return {
    get: () => e,
    set(r) {
      this[t] = r;
    }
  };
});
_.freezeMethods(ot);
function qi(e, n) {
  const t = this || qr, r = n || t, o = ot.from(r.headers);
  let i = r.data;
  return _.forEach(e, function(a) {
    i = a.call(t, i, o.normalize(), n ? n.status : void 0);
  }), o.normalize(), i;
}
function a0(e) {
  return !!(e && e.__CANCEL__);
}
function sr(e, n, t) {
  Q.call(this, e ?? "canceled", Q.ERR_CANCELED, n, t), this.name = "CanceledError";
}
_.inherits(sr, Q, {
  __CANCEL__: !0
});
function c0(e, n, t) {
  const r = t.config.validateStatus;
  !t.status || !r || r(t.status) ? e(t) : n(new Q(
    "Request failed with status code " + t.status,
    [Q.ERR_BAD_REQUEST, Q.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],
    t.config,
    t.request,
    t
  ));
}
function lv(e) {
  const n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return n && n[1] || "";
}
function uv(e, n) {
  e = e || 10;
  const t = new Array(e), r = new Array(e);
  let o = 0, i = 0, s;
  return n = n !== void 0 ? n : 1e3, function(c) {
    const l = Date.now(), u = r[i];
    s || (s = l), t[o] = c, r[o] = l;
    let d = i, f = 0;
    for (; d !== o; )
      f += t[d++], d = d % e;
    if (o = (o + 1) % e, o === i && (i = (i + 1) % e), l - s < n)
      return;
    const v = u && l - u;
    return v ? Math.round(f * 1e3 / v) : void 0;
  };
}
function fv(e, n) {
  let t = 0, r = 1e3 / n, o, i;
  const s = (l, u = Date.now()) => {
    t = u, o = null, i && (clearTimeout(i), i = null), e.apply(null, l);
  };
  return [(...l) => {
    const u = Date.now(), d = u - t;
    d >= r ? s(l, u) : (o = l, i || (i = setTimeout(() => {
      i = null, s(o);
    }, r - d)));
  }, () => o && s(o)];
}
const zo = (e, n, t = 3) => {
  let r = 0;
  const o = uv(50, 250);
  return fv((i) => {
    const s = i.loaded, a = i.lengthComputable ? i.total : void 0, c = s - r, l = o(c), u = s <= a;
    r = s;
    const d = {
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
    e(d);
  }, t);
}, ll = (e, n) => {
  const t = e != null;
  return [(r) => n[0]({
    lengthComputable: t,
    total: e,
    loaded: r
  }), n[1]];
}, ul = (e) => (...n) => _.asap(() => e(...n)), dv = Ye.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, n) => (t) => (t = new URL(t, Ye.origin), e.protocol === t.protocol && e.host === t.host && (n || e.port === t.port)))(
  new URL(Ye.origin),
  Ye.navigator && /(msie|trident)/i.test(Ye.navigator.userAgent)
) : () => !0, hv = Ye.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, n, t, r, o, i) {
      const s = [e + "=" + encodeURIComponent(n)];
      _.isNumber(t) && s.push("expires=" + new Date(t).toGMTString()), _.isString(r) && s.push("path=" + r), _.isString(o) && s.push("domain=" + o), i === !0 && s.push("secure"), document.cookie = s.join("; ");
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
function pv(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function xv(e, n) {
  return n ? e.replace(/\/?\/$/, "") + "/" + n.replace(/^\/+/, "") : e;
}
function l0(e, n, t) {
  let r = !pv(n);
  return e && (r || t == !1) ? xv(e, n) : n;
}
const fl = (e) => e instanceof ot ? { ...e } : e;
function Pn(e, n) {
  n = n || {};
  const t = {};
  function r(l, u, d, f) {
    return _.isPlainObject(l) && _.isPlainObject(u) ? _.merge.call({ caseless: f }, l, u) : _.isPlainObject(u) ? _.merge({}, u) : _.isArray(u) ? u.slice() : u;
  }
  function o(l, u, d, f) {
    if (_.isUndefined(u)) {
      if (!_.isUndefined(l))
        return r(void 0, l, d, f);
    } else return r(l, u, d, f);
  }
  function i(l, u) {
    if (!_.isUndefined(u))
      return r(void 0, u);
  }
  function s(l, u) {
    if (_.isUndefined(u)) {
      if (!_.isUndefined(l))
        return r(void 0, l);
    } else return r(void 0, u);
  }
  function a(l, u, d) {
    if (d in n)
      return r(l, u);
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
    headers: (l, u, d) => o(fl(l), fl(u), d, !0)
  };
  return _.forEach(Object.keys(Object.assign({}, e, n)), function(u) {
    const d = c[u] || o, f = d(e[u], n[u], u);
    _.isUndefined(f) && d !== a || (t[u] = f);
  }), t;
}
const u0 = (e) => {
  const n = Pn({}, e);
  let { data: t, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: i, headers: s, auth: a } = n;
  n.headers = s = ot.from(s), n.url = o0(l0(n.baseURL, n.url, n.allowAbsoluteUrls), e.params, e.paramsSerializer), a && s.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let c;
  if (_.isFormData(t)) {
    if (Ye.hasStandardBrowserEnv || Ye.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if ((c = s.getContentType()) !== !1) {
      const [l, ...u] = c ? c.split(";").map((d) => d.trim()).filter(Boolean) : [];
      s.setContentType([l || "multipart/form-data", ...u].join("; "));
    }
  }
  if (Ye.hasStandardBrowserEnv && (r && _.isFunction(r) && (r = r(n)), r || r !== !1 && dv(n.url))) {
    const l = o && i && hv.read(i);
    l && s.set(o, l);
  }
  return n;
}, mv = typeof XMLHttpRequest < "u", gv = mv && function(e) {
  return new Promise(function(t, r) {
    const o = u0(e);
    let i = o.data;
    const s = ot.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: c, onDownloadProgress: l } = o, u, d, f, v, m;
    function x() {
      v && v(), m && m(), o.cancelToken && o.cancelToken.unsubscribe(u), o.signal && o.signal.removeEventListener("abort", u);
    }
    let h = new XMLHttpRequest();
    h.open(o.method.toUpperCase(), o.url, !0), h.timeout = o.timeout;
    function S() {
      if (!h)
        return;
      const g = ot.from(
        "getAllResponseHeaders" in h && h.getAllResponseHeaders()
      ), y = {
        data: !a || a === "text" || a === "json" ? h.responseText : h.response,
        status: h.status,
        statusText: h.statusText,
        headers: g,
        config: e,
        request: h
      };
      c0(function(E) {
        t(E), x();
      }, function(E) {
        r(E), x();
      }, y), h = null;
    }
    "onloadend" in h ? h.onloadend = S : h.onreadystatechange = function() {
      !h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.indexOf("file:") === 0) || setTimeout(S);
    }, h.onabort = function() {
      h && (r(new Q("Request aborted", Q.ECONNABORTED, e, h)), h = null);
    }, h.onerror = function() {
      r(new Q("Network Error", Q.ERR_NETWORK, e, h)), h = null;
    }, h.ontimeout = function() {
      let C = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const y = o.transitional || i0;
      o.timeoutErrorMessage && (C = o.timeoutErrorMessage), r(new Q(
        C,
        y.clarifyTimeoutError ? Q.ETIMEDOUT : Q.ECONNABORTED,
        e,
        h
      )), h = null;
    }, i === void 0 && s.setContentType(null), "setRequestHeader" in h && _.forEach(s.toJSON(), function(C, y) {
      h.setRequestHeader(y, C);
    }), _.isUndefined(o.withCredentials) || (h.withCredentials = !!o.withCredentials), a && a !== "json" && (h.responseType = o.responseType), l && ([f, m] = zo(l, !0), h.addEventListener("progress", f)), c && h.upload && ([d, v] = zo(c), h.upload.addEventListener("progress", d), h.upload.addEventListener("loadend", v)), (o.cancelToken || o.signal) && (u = (g) => {
      h && (r(!g || g.type ? new sr(null, e, h) : g), h.abort(), h = null);
    }, o.cancelToken && o.cancelToken.subscribe(u), o.signal && (o.signal.aborted ? u() : o.signal.addEventListener("abort", u)));
    const b = lv(o.url);
    if (b && Ye.protocols.indexOf(b) === -1) {
      r(new Q("Unsupported protocol " + b + ":", Q.ERR_BAD_REQUEST, e));
      return;
    }
    h.send(i || null);
  });
}, vv = (e, n) => {
  const { length: t } = e = e ? e.filter(Boolean) : [];
  if (n || t) {
    let r = new AbortController(), o;
    const i = function(l) {
      if (!o) {
        o = !0, a();
        const u = l instanceof Error ? l : this.reason;
        r.abort(u instanceof Q ? u : new sr(u instanceof Error ? u.message : u));
      }
    };
    let s = n && setTimeout(() => {
      s = null, i(new Q(`timeout ${n} of ms exceeded`, Q.ETIMEDOUT));
    }, n);
    const a = () => {
      e && (s && clearTimeout(s), s = null, e.forEach((l) => {
        l.unsubscribe ? l.unsubscribe(i) : l.removeEventListener("abort", i);
      }), e = null);
    };
    e.forEach((l) => l.addEventListener("abort", i));
    const { signal: c } = r;
    return c.unsubscribe = () => _.asap(a), c;
  }
}, yv = function* (e, n) {
  let t = e.byteLength;
  if (t < n) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < t; )
    o = r + n, yield e.slice(r, o), r = o;
}, bv = async function* (e, n) {
  for await (const t of Sv(e))
    yield* yv(t, n);
}, Sv = async function* (e) {
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
}, dl = (e, n, t, r) => {
  const o = bv(e, n);
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
        let d = u.byteLength;
        if (t) {
          let f = i += d;
          t(f);
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
}, vi = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", f0 = vi && typeof ReadableStream == "function", wv = vi && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (n) => e.encode(n))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), d0 = (e, ...n) => {
  try {
    return !!e(...n);
  } catch {
    return !1;
  }
}, Ev = f0 && d0(() => {
  let e = !1;
  const n = new Request(Ye.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !n;
}), hl = 64 * 1024, Xs = f0 && d0(() => _.isReadableStream(new Response("").body)), Vo = {
  stream: Xs && ((e) => e.body)
};
vi && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((n) => {
    !Vo[n] && (Vo[n] = _.isFunction(e[n]) ? (t) => t[n]() : (t, r) => {
      throw new Q(`Response type '${n}' is not supported`, Q.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const _v = async (e) => {
  if (e == null)
    return 0;
  if (_.isBlob(e))
    return e.size;
  if (_.isSpecCompliantForm(e))
    return (await new Request(Ye.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (_.isArrayBufferView(e) || _.isArrayBuffer(e))
    return e.byteLength;
  if (_.isURLSearchParams(e) && (e = e + ""), _.isString(e))
    return (await wv(e)).byteLength;
}, Cv = async (e, n) => {
  const t = _.toFiniteNumber(e.getContentLength());
  return t ?? _v(n);
}, Av = vi && (async (e) => {
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
    withCredentials: d = "same-origin",
    fetchOptions: f
  } = u0(e);
  l = l ? (l + "").toLowerCase() : "text";
  let v = vv([o, i && i.toAbortSignal()], s), m;
  const x = v && v.unsubscribe && (() => {
    v.unsubscribe();
  });
  let h;
  try {
    if (c && Ev && t !== "get" && t !== "head" && (h = await Cv(u, r)) !== 0) {
      let y = new Request(n, {
        method: "POST",
        body: r,
        duplex: "half"
      }), A;
      if (_.isFormData(r) && (A = y.headers.get("content-type")) && u.setContentType(A), y.body) {
        const [E, P] = ll(
          h,
          zo(ul(c))
        );
        r = dl(y.body, hl, E, P);
      }
    }
    _.isString(d) || (d = d ? "include" : "omit");
    const S = "credentials" in Request.prototype;
    m = new Request(n, {
      ...f,
      signal: v,
      method: t.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: S ? d : void 0
    });
    let b = await fetch(m);
    const g = Xs && (l === "stream" || l === "response");
    if (Xs && (a || g && x)) {
      const y = {};
      ["status", "statusText", "headers"].forEach((D) => {
        y[D] = b[D];
      });
      const A = _.toFiniteNumber(b.headers.get("content-length")), [E, P] = a && ll(
        A,
        zo(ul(a), !0)
      ) || [];
      b = new Response(
        dl(b.body, hl, E, () => {
          P && P(), x && x();
        }),
        y
      );
    }
    l = l || "text";
    let C = await Vo[_.findKey(Vo, l) || "text"](b, e);
    return !g && x && x(), await new Promise((y, A) => {
      c0(y, A, {
        data: C,
        headers: ot.from(b.headers),
        status: b.status,
        statusText: b.statusText,
        config: e,
        request: m
      });
    });
  } catch (S) {
    throw x && x(), S && S.name === "TypeError" && /Load failed|fetch/i.test(S.message) ? Object.assign(
      new Q("Network Error", Q.ERR_NETWORK, e, m),
      {
        cause: S.cause || S
      }
    ) : Q.from(S, S && S.code, e, m);
  }
}), Ys = {
  http: Vg,
  xhr: gv,
  fetch: Av
};
_.forEach(Ys, (e, n) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: n });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: n });
  }
});
const pl = (e) => `- ${e}`, Tv = (e) => _.isFunction(e) || e === null || e === !1, h0 = {
  getAdapter: (e) => {
    e = _.isArray(e) ? e : [e];
    const { length: n } = e;
    let t, r;
    const o = {};
    for (let i = 0; i < n; i++) {
      t = e[i];
      let s;
      if (r = t, !Tv(t) && (r = Ys[(s = String(t)).toLowerCase()], r === void 0))
        throw new Q(`Unknown adapter '${s}'`);
      if (r)
        break;
      o[s || "#" + i] = r;
    }
    if (!r) {
      const i = Object.entries(o).map(
        ([a, c]) => `adapter ${a} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let s = n ? i.length > 1 ? `since :
` + i.map(pl).join(`
`) : " " + pl(i[0]) : "as no adapter specified";
      throw new Q(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Ys
};
function Wi(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new sr(null, e);
}
function xl(e) {
  return Wi(e), e.headers = ot.from(e.headers), e.data = qi.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), h0.getAdapter(e.adapter || qr.adapter)(e).then(function(r) {
    return Wi(e), r.data = qi.call(
      e,
      e.transformResponse,
      r
    ), r.headers = ot.from(r.headers), r;
  }, function(r) {
    return a0(r) || (Wi(e), r && r.response && (r.response.data = qi.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = ot.from(r.response.headers))), Promise.reject(r);
  });
}
const p0 = "1.9.0", yi = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, n) => {
  yi[e] = function(r) {
    return typeof r === e || "a" + (n < 1 ? "n " : " ") + e;
  };
});
const ml = {};
yi.transitional = function(n, t, r) {
  function o(i, s) {
    return "[Axios v" + p0 + "] Transitional option '" + i + "'" + s + (r ? ". " + r : "");
  }
  return (i, s, a) => {
    if (n === !1)
      throw new Q(
        o(s, " has been removed" + (t ? " in " + t : "")),
        Q.ERR_DEPRECATED
      );
    return t && !ml[s] && (ml[s] = !0, console.warn(
      o(
        s,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), n ? n(i, s, a) : !0;
  };
};
yi.spelling = function(n) {
  return (t, r) => (console.warn(`${r} is likely a misspelling of ${n}`), !0);
};
function Ov(e, n, t) {
  if (typeof e != "object")
    throw new Q("options must be an object", Q.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o], s = n[i];
    if (s) {
      const a = e[i], c = a === void 0 || s(a, i, e);
      if (c !== !0)
        throw new Q("option " + i + " must be " + c, Q.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0)
      throw new Q("Unknown option " + i, Q.ERR_BAD_OPTION);
  }
}
const Ro = {
  assertOptions: Ov,
  validators: yi
}, jt = Ro.validators;
let Rn = class {
  constructor(n) {
    this.defaults = n || {}, this.interceptors = {
      request: new al(),
      response: new al()
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
    typeof n == "string" ? (t = t || {}, t.url = n) : t = n || {}, t = Pn(this.defaults, t);
    const { transitional: r, paramsSerializer: o, headers: i } = t;
    r !== void 0 && Ro.assertOptions(r, {
      silentJSONParsing: jt.transitional(jt.boolean),
      forcedJSONParsing: jt.transitional(jt.boolean),
      clarifyTimeoutError: jt.transitional(jt.boolean)
    }, !1), o != null && (_.isFunction(o) ? t.paramsSerializer = {
      serialize: o
    } : Ro.assertOptions(o, {
      encode: jt.function,
      serialize: jt.function
    }, !0)), t.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : t.allowAbsoluteUrls = !0), Ro.assertOptions(t, {
      baseUrl: jt.spelling("baseURL"),
      withXsrfToken: jt.spelling("withXSRFToken")
    }, !0), t.method = (t.method || this.defaults.method || "get").toLowerCase();
    let s = i && _.merge(
      i.common,
      i[t.method]
    );
    i && _.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (m) => {
        delete i[m];
      }
    ), t.headers = ot.concat(s, i);
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function(x) {
      typeof x.runWhen == "function" && x.runWhen(t) === !1 || (c = c && x.synchronous, a.unshift(x.fulfilled, x.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(x) {
      l.push(x.fulfilled, x.rejected);
    });
    let u, d = 0, f;
    if (!c) {
      const m = [xl.bind(this), void 0];
      for (m.unshift.apply(m, a), m.push.apply(m, l), f = m.length, u = Promise.resolve(t); d < f; )
        u = u.then(m[d++], m[d++]);
      return u;
    }
    f = a.length;
    let v = t;
    for (d = 0; d < f; ) {
      const m = a[d++], x = a[d++];
      try {
        v = m(v);
      } catch (h) {
        x.call(this, h);
        break;
      }
    }
    try {
      u = xl.call(this, v);
    } catch (m) {
      return Promise.reject(m);
    }
    for (d = 0, f = l.length; d < f; )
      u = u.then(l[d++], l[d++]);
    return u;
  }
  getUri(n) {
    n = Pn(this.defaults, n);
    const t = l0(n.baseURL, n.url, n.allowAbsoluteUrls);
    return o0(t, n.params, n.paramsSerializer);
  }
};
_.forEach(["delete", "get", "head", "options"], function(n) {
  Rn.prototype[n] = function(t, r) {
    return this.request(Pn(r || {}, {
      method: n,
      url: t,
      data: (r || {}).data
    }));
  };
});
_.forEach(["post", "put", "patch"], function(n) {
  function t(r) {
    return function(i, s, a) {
      return this.request(Pn(a || {}, {
        method: n,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: s
      }));
    };
  }
  Rn.prototype[n] = t(), Rn.prototype[n + "Form"] = t(!0);
});
let Rv = class x0 {
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
      r.reason || (r.reason = new sr(i, s, a), t(r.reason));
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
      token: new x0(function(o) {
        n = o;
      }),
      cancel: n
    };
  }
};
function kv(e) {
  return function(t) {
    return e.apply(null, t);
  };
}
function Pv(e) {
  return _.isObject(e) && e.isAxiosError === !0;
}
const Gs = {
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
Object.entries(Gs).forEach(([e, n]) => {
  Gs[n] = e;
});
function m0(e) {
  const n = new Rn(e), t = $f(Rn.prototype.request, n);
  return _.extend(t, Rn.prototype, n, { allOwnKeys: !0 }), _.extend(t, n, null, { allOwnKeys: !0 }), t.create = function(o) {
    return m0(Pn(e, o));
  }, t;
}
const Re = m0(qr);
Re.Axios = Rn;
Re.CanceledError = sr;
Re.CancelToken = Rv;
Re.isCancel = a0;
Re.VERSION = p0;
Re.toFormData = gi;
Re.AxiosError = Q;
Re.Cancel = Re.CanceledError;
Re.all = function(n) {
  return Promise.all(n);
};
Re.spread = kv;
Re.isAxiosError = Pv;
Re.mergeConfig = Pn;
Re.AxiosHeaders = ot;
Re.formToJSON = (e) => s0(_.isHTMLForm(e) ? new FormData(e) : e);
Re.getAdapter = h0.getAdapter;
Re.HttpStatusCode = Gs;
Re.default = Re;
const {
  Axios: yy,
  AxiosError: by,
  CanceledError: Sy,
  isCancel: wy,
  CancelToken: Ey,
  VERSION: _y,
  all: Cy,
  Cancel: Ay,
  isAxiosError: Ty,
  spread: Oy,
  toFormData: Ry,
  AxiosHeaders: ky,
  HttpStatusCode: Py,
  formToJSON: Iy,
  getAdapter: Ny,
  mergeConfig: jy
} = Re, vt = Gt;
(function(e, n) {
  const t = Gt, r = e();
  for (; ; )
    try {
      if (-parseInt(t(249)) / 1 * (-parseInt(t(274)) / 2) + -parseInt(t(260)) / 3 * (-parseInt(t(239)) / 4) + parseInt(t(246)) / 5 + parseInt(t(245)) / 6 + -parseInt(t(237)) / 7 * (parseInt(t(265)) / 8) + -parseInt(t(244)) / 9 + -parseInt(t(266)) / 10 * (parseInt(t(261)) / 11) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Ho, 959554);
const Iv = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = Gt;
      if (t) {
        const i = t[o(272)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), Ks = Iv(void 0, function() {
  const e = Gt;
  return Ks[e(270)]()[e(241)](e(236) + "+$")[e(270)]()[e(277) + "r"](Ks)[e(241)](e(236) + "+$");
});
Ks();
function Gt(e, n) {
  const t = Ho();
  return Gt = function(r, o) {
    return r = r - 234, t[r];
  }, Gt(e, n);
}
const gr = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = Gt;
      if (t) {
        const i = t[o(272)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), Nv = gr(void 0, function() {
  const e = Gt, n = function() {
    const i = Gt;
    let s;
    try {
      s = Function(i(271) + i(250) + (i(243) + i(269) + i(256) + " )") + ");")();
    } catch {
      s = window;
    }
    return s;
  }, t = n(), r = t[e(259)] = t[e(259)] || {}, o = [e(242), e(279), e(255), e(258), e(257), e(238), e(240)];
  for (let i = 0; i < o[e(262)]; i++) {
    const s = gr[e(277) + "r"][e(275)][e(283)](gr), a = o[i], c = r[a] || s;
    s[e(248)] = gr[e(283)](gr), s[e(270)] = c[e(270)][e(283)](c), r[a] = s;
  }
});
Nv();
vt(282) + vt(280) + vt(253) + vt(278);
Re[vt(285)][vt(247) + vt(263)] = !0;
const jv = async (e) => {
  var t, r, o, i;
  const n = vt;
  try {
    return (await Re(e))[n(281)];
  } catch (s) {
    throw ((r = (t = s[n(254)]) == null ? void 0 : t[n(281)]) == null ? void 0 : r[n(235)]) || ((i = (o = s[n(254)]) == null ? void 0 : o[n(281)]) == null ? void 0 : i[n(258)]) || s[n(235)];
  }
}, Mv = {};
Mv[vt(276) + "pe"] = vt(251) + vt(264);
function Ho() {
  const e = ["4972930QnqPfI", "PATCH", "params", 'ctor("retu', "toString", "return (fu", "apply", "GET", "12IGimUB", "prototype", "Content-Ty", "constructo", "v1/client", "warn", ".168.11.76", "data", "http://192", "bind", "PUT", "defaults", "POST", "message", "(((.+)+)+)", "41804TTdyhG", "table", "40UJbKha", "trace", "search", "log", "{}.constru", "1791306MvSqrd", "8841900ZUSpiN", "6256300KquXzV", "withCreden", "__proto__", "224177FLbAys", "nction() ", "applicatio", "DELETE", ":3000/api/", "response", "info", 'rn this")(', "exception", "error", "console", "367491ZDKobb", "66TDreCa", "length", "tials", "n/json", "1544fUvueI"];
  return Ho = function() {
    return e;
  }, Ho();
}
const be = Kt;
function Kt(e, n) {
  const t = Uo();
  return Kt = function(r, o) {
    return r = r - 255, t[r];
  }, Kt(e, n);
}
(function(e, n) {
  const t = Kt, r = e();
  for (; ; )
    try {
      if (-parseInt(t(258)) / 1 * (parseInt(t(285)) / 2) + -parseInt(t(283)) / 3 * (parseInt(t(274)) / 4) + -parseInt(t(278)) / 5 + parseInt(t(291)) / 6 + parseInt(t(269)) / 7 * (parseInt(t(270)) / 8) + -parseInt(t(257)) / 9 + parseInt(t(306)) / 10 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Uo, 482778);
function Uo() {
  const e = ["5266QclsZt", "bind", "ACTION_DOW", "keyBoardEv", "Event", "wheelEvent", "1345104oeAdSw", "keyup", "keydown", "prototype", "constructo", "error", "warn", "search", "apply", "moveEvent", "(((.+)+)+)", "mouseup", "mousedown", "nction() ", 'rn this")(', "19775150uKZXer", "fullscreen", "touchstart", "6402573jXFjkT", "219oyBNbc", "info", "shortcutEv", "{}.constru", "table", "assistiveM", "ACTION_UP", "return (fu", "touchmove", "console", "trace", "17297iuskws", "1416PpZeDd", "toString", "log", "__proto__", "259708WKYnzC", "mousemove", "exception", "enuHide", "3692050ZYiixW", 'ctor("retu', "touchend", "ent", "ACTION_MOV", "6bzhuhZ", "length"];
  return Uo = function() {
    return e;
  }, Uo();
}
const Lv = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = Kt;
      if (t) {
        const i = t[o(299)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), Zs = Lv(void 0, function() {
  const e = Kt;
  return Zs[e(271)]()[e(298)](e(301) + "+$")[e(271)]()[e(295) + "r"](Zs)[e(298)](e(301) + "+$");
});
Zs();
const vr = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = Kt;
      if (t) {
        const i = t[o(299)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), Dv = vr(void 0, function() {
  const e = Kt, n = function() {
    const i = Kt;
    let s;
    try {
      s = Function(i(265) + i(304) + (i(261) + i(279) + i(305) + " )") + ");")();
    } catch {
      s = window;
    }
    return s;
  }, t = n(), r = t[e(267)] = t[e(267)] || {}, o = [e(272), e(297), e(259), e(296), e(276), e(262), e(268)];
  for (let i = 0; i < o[e(284)]; i++) {
    const s = vr[e(295) + "r"][e(294)][e(286)](vr), a = o[i], c = r[a] || s;
    s[e(273)] = vr[e(286)](vr), s[e(271)] = c[e(271)][e(286)](c), r[a] = s;
  }
});
Dv();
const yn = {};
yn[be(275)] = be(282) + "E", yn[be(302)] = be(264), yn[be(303)] = be(287) + "N", yn[be(266)] = be(282) + "E", yn[be(280)] = be(264), yn[be(256)] = be(287) + "N";
const Dt = yn, Js = {};
Js[be(292)] = be(264), Js[be(293)] = be(287) + "N";
const Bv = Js, Fv = be(300), zv = be(290), Vv = be(288) + be(281), g0 = be(263) + be(277), Qs = be(260) + be(281), Hv = be(255) + be(289);
(function(e, n) {
  const t = yt, r = e();
  for (; ; )
    try {
      if (-parseInt(t(506)) / 1 * (-parseInt(t(465)) / 2) + -parseInt(t(424)) / 3 * (parseInt(t(520)) / 4) + -parseInt(t(491)) / 5 + parseInt(t(474)) / 6 * (-parseInt(t(451)) / 7) + parseInt(t(493)) / 8 + parseInt(t(433)) / 9 + parseInt(t(476)) / 10 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(qo, 241753);
const Uv = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = yt;
      if (t) {
        const i = t[o(464)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), ea = Uv(void 0, function() {
  const e = yt;
  return ea[e(492)]()[e(488)](e(477) + "+$")[e(492)]()[e(430) + "r"](ea)[e(488)](e(477) + "+$");
});
ea();
function yt(e, n) {
  const t = qo();
  return yt = function(r, o) {
    return r = r - 420, t[r];
  }, yt(e, n);
}
const yr = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = yt;
      if (t) {
        const i = t[o(464)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), qv = yr(void 0, function() {
  const e = yt;
  let n;
  try {
    n = Function(e(484) + e(479) + (e(441) + e(467) + e(462) + " )") + ");")();
  } catch {
    n = window;
  }
  const t = n[e(480)] = n[e(480)] || {}, r = [e(437), e(460), e(471), e(427), e(490), e(508), e(494)];
  for (let o = 0; o < r[e(468)]; o++) {
    const i = yr[e(430) + "r"][e(498)][e(420)](yr), s = r[o], a = t[s] || i;
    i[e(497)] = yr[e(420)](yr), i[e(492)] = a[e(492)][e(420)](a), t[s] = i;
  }
});
qv();
function qo() {
  const e = ["apply", "235358MTSkou", "keyAction", 'ctor("retu', "length", "enter", "touch", "info", "EXT", "pageY", "57306XRODPM", "offsetHeig", "7515010bkkYsm", "(((.+)+)+)", "pageX", "nction() ", "console", "backspace", "wheelEvent", "mouse", "return (fu", "touchmove", "toUpperCas", "addEventLi", "search", "deltaY", "exception", "2225495HvUjVy", "toString", "958368RSDRTg", "trace", "touchEvent", "KEYBOARD_C", "__proto__", "prototype", "ault", "keyEvent", "type", "wheel", "toLowerCas", "capslock", "PASTE_TEXT", "1FtauWD", "tab", "table", "sign", "arrowdown", "key", "meta_state", "mouseup", "isDown", "KEYBOARD_T", "preventDef", "removeEven", "shiftKey", "touchstart", "19772rSfeMi", "includes", "bind", "clientY", "clipboard", "delta", "48ywMhqJ", "mousedown", "arrowright", "error", "arrowleft", "forEach", "constructo", "width", "touchend", "1516995CfNymd", "current", "COPY_TEXT", "action", "log", "getBoundin", "height", "gClientRec", "{}.constru", "stener", "control", "repeat", "mousemove", "keydown", "readText", "top", "clientX", "showMenu", "287gpvOyb", "focus", "offsetWidt", "passive", "shift", "ctrlKey", "left", "arrowup", "ODE", "warn", "tListener", 'rn this")(', "typeKey"];
  return qo = function() {
    return e;
  }, qo();
}
const Wv = ({ isMobile: e, assistive: n, onImgEvent: t, canvasContent: r, imageRef: o }) => {
  const [i, s] = et(!1), a = (d) => {
    const f = yt;
    if (d[f(516) + f(499)](), !o[f(434)]) return;
    const v = o[f(434)];
    let m = Dt[d[f(501)]];
    if (n[f(514)] == !0 || n[f(450)] == !0) {
      m == Dt[f(513)] && t(g0, {});
      return;
    }
    if (m == Dt[f(425)] && s(!0), m != Dt[f(425)] && i == !1) return;
    m == Dt[f(513)] && s(!1);
    let x, h;
    const S = v[f(438) + f(440) + "t"]();
    if (d[f(501)][f(521)](f(470))) {
      const { touches: g, changedTouches: C } = d, y = g[0] ?? C[0];
      x = y[f(478)] - S[f(457)], h = y[f(473)] - S[f(448)];
    } else d[f(501)][f(521)](f(483)) && (x = d[f(449)] - S[f(457)], h = d[f(421)] - S[f(448)]);
    const b = {};
    b[f(436)] = f(495), b[f(466)] = m, b.x = x, b.y = h, b[f(431)] = S[f(431)], b[f(439)] = S[f(439)], t(Fv, b), v[f(452)]();
  }, c = (d) => {
    const f = yt;
    if (d[f(516) + f(499)](), !o[f(434)]) return;
    const v = o[f(434)], m = Math[f(509)](d[f(489)]), x = v[f(438) + f(440) + "t"](), h = {};
    h[f(436)] = f(482), h[f(431)] = v[f(453) + "h"], h[f(439)] = v[f(475) + "ht"], h.x = d[f(449)] - x[f(457)], h.y = d[f(421)] - x[f(448)], h[f(423)] = m, t(zv, h), v[f(452)]();
  }, l = async (d) => {
    const f = yt;
    if (d[f(516) + f(499)](), !o[f(434)]) return;
    const v = o[f(434)], m = Bv[d[f(501)]], x = d[f(511)][f(503) + "e"]();
    if (((g) => {
      const C = f;
      return [C(443), C(455), C(504)][C(521)](g);
    })(x) == !0) return;
    const S = async () => {
      const g = f, C = {};
      C[g(436)] = g(500), C[g(466)] = m, C[g(463)] = g(515) + g(472), C[g(511)] = d[g(511)], C[g(444)] = 0, C[g(512)] = 0;
      const y = C;
      return d[g(456)] == !0 ? x == "c" ? y[g(463)] = g(435) : x == "a" ? (y[g(463)] = g(496) + g(459), y[g(512)] = 4096, y[g(511)] = 29) : x == "v" && (y[g(463)] = g(505), y[g(511)] = await navigator[g(422)][g(447)]()) : x == g(458) ? (y[g(463)] = g(496) + g(459), y[g(511)] = 19) : x == g(510) ? (y[g(463)] = g(496) + g(459), y[g(511)] = 20) : x == g(428) ? (y[g(463)] = g(496) + g(459), y[g(511)] = 21) : x == g(426) ? (y[g(463)] = g(496) + g(459), y[g(511)] = 22) : x == g(481) ? (y[g(463)] = g(496) + g(459), y[g(511)] = 67) : x == g(469) ? (y[g(463)] = g(496) + g(459), y[g(511)] = 66) : x == g(507) && (y[g(463)] = g(496) + g(459), y[g(511)] = 61), y[g(501)] == g(515) + g(472) && d[g(518)] == !0 && (y[g(511)] = y[g(511)][g(486) + "e"]()), y;
    }, b = await S();
    b && t(Vv, b), v[f(452)]();
  };
  tt(() => {
    const d = yt, f = o[d(434)];
    if (f) {
      const v = {};
      v[d(454)] = !1;
      const m = v;
      return e ? (f[d(487) + d(442)](d(519), a, m), f[d(487) + d(442)](d(485), a, m), f[d(487) + d(442)](d(432), a)) : (f[d(487) + d(442)](d(502), c, m), f[d(487) + d(442)](d(446), l), [d(445), d(425), d(513)][d(429)]((x) => {
        const h = d;
        f[h(487) + h(442)](x, a);
      })), () => {
        const x = d;
        f && (e ? [x(519), x(485), x(432)][x(429)]((h) => {
          const S = x;
          f[S(517) + S(461)](h, a);
        }) : ([x(445), x(425), x(513), x(502), x(446)][x(429)]((h) => {
          const S = x;
          f[S(517) + S(461)](h, a);
        }), f[x(517) + x(461)](x(446), l)));
      };
    }
  }, [e, a, c, l]);
  const u = { ref: o, ...r };
  return V.jsx(Ud, u);
}, $v = "data:image/png;base64,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", bi = un;
(function(e, n) {
  const t = un, r = e();
  for (; ; )
    try {
      if (-parseInt(t(339)) / 1 + parseInt(t(355)) / 2 + parseInt(t(333)) / 3 * (-parseInt(t(332)) / 4) + parseInt(t(360)) / 5 * (-parseInt(t(337)) / 6) + -parseInt(t(334)) / 7 + -parseInt(t(345)) / 8 * (-parseInt(t(330)) / 9) + -parseInt(t(359)) / 10 * (-parseInt(t(354)) / 11) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Wo, 714962);
const Xv = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = un;
      if (t) {
        const i = t[o(349)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), ta = Xv(void 0, function() {
  const e = un;
  return ta[e(364)]()[e(335)](e(344) + "+$")[e(364)]()[e(363) + "r"](ta)[e(335)](e(344) + "+$");
});
ta();
function un(e, n) {
  const t = Wo();
  return un = function(r, o) {
    return r = r - 330, t[r];
  }, un(e, n);
}
const br = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = un;
      if (t) {
        const i = t[o(349)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), Yv = br(void 0, function() {
  const e = un;
  let n;
  try {
    n = Function(e(347) + e(350) + (e(348) + e(351) + e(336) + " )") + ");")();
  } catch {
    n = window;
  }
  const t = n[e(357)] = n[e(357)] || {}, r = [e(361), e(356), e(340), e(352), e(353), e(346), e(331)];
  for (let o = 0; o < r[e(358)]; o++) {
    const i = br[e(363) + "r"][e(362)][e(341)](br), s = r[o], a = t[s] || i;
    i[e(343)] = br[e(341)](br), i[e(364)] = a[e(364)][e(341)](a), t[s] = i;
  }
});
Yv();
const Gv = _t[bi(342)]`
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
function Wo() {
  const e = ["exception", "803vOJJnO", "299436IIdSZx", "warn", "console", "length", "452220wKeNBR", "1627805NTbrRy", "log", "prototype", "constructo", "toString", "15867hmxwWV", "trace", "1716zaRKtK", "7929OjEDWQ", "1462398oGKzoG", "search", 'rn this")(', "12gwCvWh", "img", "960691NCDGxn", "info", "bind", "div", "__proto__", "(((.+)+)+)", "992yETezP", "table", "return (fu", "{}.constru", "apply", "nction() ", 'ctor("retu', "error"];
  return Wo = function() {
    return e;
  }, Wo();
}
const qt = _t[bi(342)]`
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
`, Wt = _t.p`
  height: 5px;
  margin-top: 2px;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
`, Kv = _t[bi(338)]`
  position: absolute;
  backdrop-filter: blur(46px);
  border-radius: 50%;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.723);
  top: 50%;
  right: 5%;
`, Zv = _t[bi(342)]`
  user-select: none;
  transition: opacity 0.6s ease;
  z-index: 3;
  opacity: 0.3;
`;
(function(e, n) {
  const t = Et, r = e();
  for (; ; )
    try {
      if (parseInt(t(147)) / 1 * (parseInt(t(143)) / 2) + -parseInt(t(140)) / 3 + parseInt(t(145)) / 4 * (-parseInt(t(173)) / 5) + -parseInt(t(164)) / 6 * (parseInt(t(181)) / 7) + parseInt(t(166)) / 8 + parseInt(t(142)) / 9 + -parseInt(t(133)) / 10 * (parseInt(t(183)) / 11) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})($o, 417911);
const Jv = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = Et;
      if (t) {
        const i = t[o(135)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), na = Jv(void 0, function() {
  const e = Et;
  return na[e(185)]()[e(137)](e(187) + "+$")[e(185)]()[e(162) + "r"](na)[e(137)](e(187) + "+$");
});
function $o() {
  const e = ["een", "2506254gMLuSb", "mozCancelF", "457029pkkDtw", "8410VQvHvM", 'rn this")(', "704GJfLDh", "fullscreen", "193fVbdIu", "bind", "__proto__", "FullScreen", "console", "return (fu", "msExitFull", "msFullscre", "screenElem", "prototype", "warn", "mozRequest", 'ctor("retu', "exitFullsc", "webkitRequ", "constructo", "requestFul", "18jYNeRO", "eenElement", "5990328kDKQUf", "webkitFull", "estFullscr", "msRequestF", "reen", "nction() ", "screen", "7325waOtmR", "{}.constru", "ent", "trace", "Element", "lscreen", "error", "tor", "8407bWvPnW", "#screen_", "11FpWGIO", "mozFullScr", "toString", "exception", "(((.+)+)+)", "enElement", "webkitExit", "Fullscreen", "table", "querySelec", "length", "ullScreen", "963650zcZafz", "info", "apply", "log", "search", "ullscreen"];
  return $o = function() {
    return e;
  }, $o();
}
na();
function Et(e, n) {
  const t = $o();
  return Et = function(r, o) {
    return r = r - 128, t[r];
  }, Et(e, n);
}
const Sr = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = Et;
      if (t) {
        const i = t[o(135)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), Qv = Sr(void 0, function() {
  const e = Et, n = function() {
    const i = Et;
    let s;
    try {
      s = Function(i(152) + i(171) + (i(174) + i(159) + i(144) + " )") + ");")();
    } catch {
      s = window;
    }
    return s;
  }, t = n(), r = t[e(151)] = t[e(151)] || {}, o = [e(136), e(157), e(134), e(179), e(186), e(129), e(176)];
  for (let i = 0; i < o[e(131)]; i++) {
    const s = Sr[e(162) + "r"][e(156)][e(148)](Sr), a = o[i], c = r[a] || s;
    s[e(149)] = Sr[e(148)](Sr), s[e(185)] = c[e(185)][e(148)](c), r[a] = s;
  }
});
Qv();
const gl = () => {
  const e = Et;
  return document[e(146) + e(177)] || document[e(184) + e(165)] || document[e(167) + e(155) + e(175)] || document[e(154) + e(188)];
}, ey = (e) => {
  const n = Et, t = document[n(130) + n(180)](n(182) + e);
  t[n(163) + n(178)] ? t[n(163) + n(178)]() : t[n(158) + n(150)] ? t[n(158) + n(150)]() : t[n(161) + n(168) + n(139)] ? t[n(161) + n(168) + n(139)]() : t[n(169) + n(138)] && t[n(169) + n(138)]();
}, ty = () => {
  const e = Et;
  document[e(160) + e(170)] ? document[e(160) + e(170)]() : document[e(141) + e(132)] ? document[e(141) + e(132)]() : document[e(189) + e(128)] ? document[e(189) + e(128)]() : document[e(153) + e(172)] && document[e(153) + e(172)]();
};
(function(e, n) {
  const t = zt, r = e();
  for (; ; )
    try {
      if (parseInt(t(418)) / 1 * (-parseInt(t(405)) / 2) + -parseInt(t(500)) / 3 * (parseInt(t(454)) / 4) + parseInt(t(383)) / 5 + -parseInt(t(519)) / 6 + parseInt(t(252)) / 7 + -parseInt(t(381)) / 8 * (-parseInt(t(289)) / 9) + -parseInt(t(266)) / 10 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Xo, 447883);
function Xo() {
  const e = ["shortcutEv", "log", "017.082-.0", "3c.033 0 .", "getAttribu", "0V4a1 1 0 ", " 0 0 0-1.5", "removeEven", "7zm11-5h-2", " 15H4V9z", "left", ".387 1.386", "5.46 1.701", "(((.+)+)+)", "3 0-2 .897", "8v12.264l-", "gClientRec", "0 0 1.645z", "c1.103 0 2", "03 0 2-.89", ".089-1.218", "0 1.767.51", "98364yctsAB", 'rn this")(', "27.05A1 1 ", "-2-2-2zm-9", "nction() ", "0 1-1V4a1 ", "zm0-6h-4V4", "M16.75 2h-", "length", "7 16 3v2c2", "action", ".225-1.1 2", "set", "touchmove", "stener", "getBoundin", "103.897 2 ", ".116c.026-", "isDown", "0 0 0 .38-", "clientX", "1.103-.897", "4zm0 5h16v", "shortcut", "Paste", "v7h2zm5 14", "0 0-.396-1", "1.048z", "00/svg", "0h2v-6H4v2", "1v16a1 1 0", ".897-2-2-2", "h4zm12-6h-", ".832L6.697", 'ctor("retu', ".002 16H6.", "27-1.547 5", "path", "0v10z", "6v2H4z", "822 13 9A1", " 5.999-9S1", "sync", "svg", " 2v5H4V5h3", "back", "21MSOVhH", "rgba(255, ", "fullscreen", ".004 1.004", "-2-5zM4 17", "1zm-1 16H5", "info", "volume", "H5v-5H3v7h", "taskId", "2 2h10c1.1", "3 9a1.003 ", "includes", "bind", "03-.897-2-", "width", "pageX", "9.527 4.54", "0 0 24 24", "962430TJRMWi", "tListener", "forEach", "v2h8V5h3v6", "50%", " 2v13c0 1.", " 3.999 4.0", "exception", "10l.002 10", "Icon", "6v6h2v-4h4", " 2 2zm0-8h", "-2-2-2zm-1", "data-id", "4.445-2.96", "closest", "2H4zm0 5h1", "H4zm16-6h-", "Screen", "48 3.832a1", "2-2h-4V4h1", "m4.431 12.", "V5h14v14z", " 0 0 0-.38", "prototype", "M10 4H8v4H", "v2z", "mozfullscr", "height", "3a.986.986", ".024l-14-1", "move", "readText", "-2 2v6c0 1", ".w3.org/20", "5175436YDRfar", "0 0 0 .782", "1.103 0-2 ", "a.995.995 ", "grab", "passive", "touchstart", "75.931l2 1", "mousemove", "msfullscre", "Hide ID", "69-.823l-1", "-7v2h5z", " 2v16c0 1.", "10828550UlcEie", "255, 255, ", "12%", "08 3.677L7", "Show ID", "warn", "13%", "7a1 1 0 0 ", "061-.016.0", "pageY", ".999-4.909", "-.769zm-8.", "4v2h6zM8 2", "47 3.999 7", "1 0 0 0-1 ", ".614 16 19", "paste", "0 0 0 14 2", "0a.999.999", "345-5.236 ", "data", "ault", "11.75", "9vFKDmN", "type", "assistive_", " 0 0 0-1 1", "Recents", "1.003 0 0 ", "table", "0 18V4h10l", ".257 5.127", "2 2h7c1.10", " 1 0 0 0 1", "17-.056-.0", "webkitfull", "children", "fill", "apply", "416 3.377 ", "current", "Copy", "change", "M20.978 13", ".21a1 1 0 ", "console", "clipboard", "circle", "75z", "ent", "10c-1.103 ", "touch_", "Sync", "preventDef", "h-2v6h6z", "2 2zm2 7v-", "touch_clas", "H6z", "1 0 0 0-1-", "clientY", "M6 12h6v2H", "home", "M20 3H4a1 ", "S18.387 17", "-.897 2-2V", "57-5.428 6", "menu_", "M20 11V5c0", "h-5c-1.103", "mousedown", "target", "assistive", "addEventLi", " 2v10c0 1.", ".103.897 2", "zIndex", "M4 6h16v2H", ".897-2 2v4", "__proto__", "a1 1 0 0 0", "click", "l10.283 7.", "return (fu", "3 0 2-.897", "touchend", "Home", "top", "touch", "now", "2-.116C7.0", "div", "cursor", "error", "7 2-2V4c0-", " 0 0 0-.57", "trace", "opacity", "m-2-4h2V3h", " 0 0 1 1h1", "7h7l.001 7", "min", "{}.constru", " 0-2 .897-", "get", "showMenu", "toString", "right", " 7H4c-1.10", "59 15.016 ", "Back", "focus", "H13z", "copy", "search", "constructo", "7083224aujjgw", "mouse", "2673045vQMNCQ", "-3.229 2-5", "4c-.025-.0", " 2-2v-7c0-", "2-.082-.03", "6zm0 4h6v2", "93-.019a1.", "4c0-1.103-", "674.31a1 1", "device_id", ".015.057-.", "0-2 .897-2", "shortcutCo", "recents", "-1-1H8a1 1", "33L12 5.86", "-1.103-.89", "0 0-1.554-", "M16 7v10c1", "7-2-2-2h-3", "mouseup", "screenchan", "118432mIPLqy", "landscape", "zM4 20V10h", "eenchange", "7 2-2v-4h4", "9 21V3a1 1", "M5 5h5V3H3", "6l3.612-4.", "027 1.027 ", "2 2h7c0 1.", "7.032 15 7", "8.347l-3.0", " 0 0 0 1.0", "5amgSFx", "Volume", "http://www", "max", "6a1 1 0 0 ", "M20 2H10c-", "-1.052-3.3", "4v-4c0-1.1", "h2.697l5.7", "s-.775-3.9", "M16 21c3.5", "H4c-1.103 ", "enchange", "v5h-5v2h7z"];
  return Xo = function() {
    return e;
  }, Xo();
}
function zt(e, n) {
  const t = Xo();
  return zt = function(r, o) {
    return r = r - 247, t[r];
  }, zt(e, n);
}
const ny = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = zt;
      if (t) {
        const i = t[o(304)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), ra = ny(void 0, function() {
  const e = zt;
  return ra[e(371)]()[e(379)](e(445) + "+$")[e(371)]()[e(380) + "r"](ra)[e(379)](e(445) + "+$");
});
ra();
const wr = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = zt;
      if (t) {
        const i = t[o(304)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), ry = wr(void 0, function() {
  const e = zt, n = function() {
    const i = zt;
    let s;
    try {
      s = Function(i(348) + i(458) + (i(367) + i(488) + i(455) + " )") + ");")();
    } catch {
      s = window;
    }
    return s;
  }, t = n(), r = t[e(311)] = t[e(311)] || {}, o = [e(433), e(271), e(506), e(358), e(526), e(295), e(361)];
  for (let i = 0; i < o[e(462)]; i++) {
    const s = wr[e(380) + "r"][e(543)][e(513)](wr), a = o[i], c = r[a] || s;
    s[e(344)] = wr[e(513)](wr), s[e(371)] = c[e(371)][e(513)](c), r[a] = s;
  }
});
ry();
const oy = Tl((e, n) => {
  const t = zt, { displayId: r, isMobile: o, onSenData: i, status: s, imageRef: a, isShowDeviceId: c } = e, [l, u] = et(0), [d, f] = et(0), [v, m] = et(null), [x, h] = et(0), S = Ve(null), b = Ve(null), g = Ve(null), C = {};
  C[t(357)] = t(248), C[t(362)] = 0.3, C[t(341)] = 999;
  const [y, A] = et(C), E = {};
  E[t(341)] = 999, E[t(547)] = "", E[t(515)] = t(272);
  const [P, D] = et(E), W = {};
  W[t(341)] = 1e3;
  const [ee, Y] = et(W), N = Ve(null), [z, q] = et(null), $ = (L) => {
    const O = t;
    if (L[O(319) + O(287)](), s[O(369)][O(370)] == !0) return;
    const Me = Dt[L[O(290)]], Le = a[O(306)], $e = g[O(306)], Ee = Le[O(469) + O(448) + "t"](), Ke = $e[O(469) + O(448) + "t"]();
    let Ze, kt;
    const Nn = Ee[O(515)] - Ke[O(515)], Pt = Ee[O(547)] - Ke[O(547)];
    if (L[O(290)][O(512)](O(353))) {
      const { touches: Xe, changedTouches: Je } = L, ut = Xe[0] ?? Je[0];
      Ze = ut[O(516)], kt = ut[O(275)];
    } else L[O(290)][O(512)](O(382)) && (Ze = L[O(474)], kt = L[O(325)]);
    if (Me == Dt[O(335)]) {
      s[O(466)]({ ...s[O(369)], isDown: !0 }), u(Ze - Ke[O(442)]), f(kt - Ke[O(352)]);
      const Xe = {};
      Xe[O(362)] = 1, Xe[O(357)] = O(256);
      const Je = { ...y, ...Xe };
      A(Je), h(performance[O(354)]());
    } else if (Me == Dt[O(260)]) {
      if (s[O(369)][O(472)] == !1) return;
      var Ht = Ze - l - Ee[O(442)], Ut = kt - d - Ee[O(352)];
      Ht = Math[O(421)](3, Math[O(366)](Ht, Nn) - 3), Ut = Math[O(421)](3, Math[O(366)](Ut, Pt) - 3);
      const Xe = {};
      Xe[O(352)] = Ut + "px", Xe[O(442)] = Ht + "px";
      const Je = { ...P, ...Xe };
      D(Je);
    } else if (Me == Dt[O(403)]) {
      const Xe = performance[O(354)]() - x;
      if (v == Dt[O(335)] || Xe < 100) {
        const It = {};
        It[O(370)] = !0, It[O(472)] = !1, s[O(466)]({ ...s[O(369)], ...It });
      } else s[O(466)]({ ...s[O(369)], isDown: !1 });
      const Je = {};
      Je[O(362)] = 0.3, Je[O(357)] = O(248);
      const ut = { ...y, ...Je };
      A(ut);
    }
    m(Me), $e[O(376)]();
  }, J = async (L) => {
    const O = t;
    L[O(319) + O(287)]();
    const Me = L[O(336)][O(534)](O(356))[O(436) + "te"](O(532));
    if (Me === O(502))
      gl() ? ty() : ey(r);
    else {
      const Le = {};
      Le[O(464)] = O(432) + O(315), Le[O(477)] = Me, Le[O(286)] = "";
      const $e = Le;
      Me === O(282) && ($e[O(286)] = await navigator[O(312)][O(249)]()), Me === O(378) && ($e[O(509)] = O(395) + "py"), i(Qs, $e);
    }
    s[O(466)]({ ...s[O(369)], showMenu: !1 }), b[O(306)][O(376)]();
  }, G = (L) => {
    const O = gl();
    i(Hv, O);
  };
  tt(() => {
    requestAnimationFrame(() => {
      const L = zt, O = { ...ee };
      O[L(362)] = s[L(369)][L(370)] ? 1 : 0, Y(O);
    });
  }, [s]), tt(() => {
    const L = t, O = a[L(306)], Me = [L(502) + L(308), L(301) + L(404) + "ge", L(546) + L(408), L(261) + L(430)];
    return O && Me[L(521)]((Le) => {
      const $e = L;
      O[$e(338) + $e(468)](Le, G);
    }), () => {
      const Le = L;
      O && O[Le(439) + Le(520)](Le(346), G);
    };
  }, []), tt(() => {
    const L = t, O = g[L(306)], Me = b[L(306)];
    if (Me && Me[L(338) + L(468)](L(346), J), O) {
      const Le = {};
      Le[L(257)] = !1;
      const $e = Le;
      return o ? (O[L(338) + L(468)](L(258), $, $e), O[L(338) + L(468)](L(467), $, $e), O[L(338) + L(468)](L(350), $)) : [L(260), L(335), L(403)][L(521)]((Ee) => {
        const Ke = L;
        O[Ke(338) + Ke(468)](Ee, $);
      }), () => {
        const Ee = L;
        Me && Me[Ee(439) + Ee(520)](Ee(346), J), O && (o ? [Ee(258), Ee(467), Ee(350)][Ee(521)]((Ke) => {
          const Ze = Ee;
          O[Ze(439) + Ze(520)](Ke, $);
        }) : [Ee(260), Ee(335), Ee(403)][Ee(521)]((Ke) => {
          const Ze = Ee;
          O[Ze(439) + Ze(520)](Ke, $);
        }));
      };
    }
  }, [o, $]);
  const Z = () => {
    const L = t, O = {};
    O[L(341)] = 999, O[L(547)] = N[L(306)] == L(406) ? L(268) : null, O[L(515)] = N[L(306)] != L(406) ? L(268) : null, O[L(352)] = L(523), O[L(372)] = "5%", D(O);
  };
  Ol(n, () => ({ fixTouch: (L) => {
    const O = t;
    L && (N[O(306)] = L), Z();
  }, setFullscreen: (L) => {
    q(L);
  } }));
  const re = {};
  re[t(303)] = t(501) + t(267) + "1)";
  const oe = {};
  oe.d = z ? t(544) + t(278) + t(483) + t(486) + t(529) + t(460) + t(320) : t(411) + t(479) + t(508) + t(440) + t(431) + t(363) + t(264);
  const K = {};
  K[t(302)] = t(537);
  const te = {};
  te[t(303)] = t(501) + t(267) + "1)";
  const fe = {};
  fe.d = t(423) + t(254) + t(343) + t(429) + t(394) + t(339) + t(470) + t(510) + t(451) + t(409) + t(450) + t(330) + t(390) + t(485) + t(407) + t(527) + t(536) + t(425) + t(514) + t(539) + t(492);
  const le = {};
  le.d = t(326) + t(388) + t(323);
  const de = {};
  de[t(302)] = t(307);
  const pe = {};
  pe[t(303)] = t(501) + t(267) + "1)";
  const k = {};
  k.d = t(333) + t(399) + t(402) + t(345) + t(397) + t(292) + t(429) + t(394) + t(524) + t(470) + t(414) + t(470) + t(298) + t(349) + t(386) + t(475) + t(457) + t(498) + t(522) + t(334) + t(368) + t(321) + t(365) + t(377);
  const U = {};
  U[t(302)] = t(478);
  const j = {};
  j[t(303)] = t(501) + t(267) + "1)";
  const B = {};
  B.d = t(461) + t(316) + t(394) + t(265) + t(470) + t(510) + t(451) + t(359) + t(475) + t(531) + t(296) + t(489) + t(314);
  const T = {};
  T.cx = t(288), T.cy = "18", T.r = "1";
  const ne = {};
  ne[t(302)] = t(c ? 262 : 270);
  const M = {};
  M[t(303)] = t(501) + t(267) + "1)";
  const ke = {};
  ke.d = t(428) + t(490) + t(276) + t(495) + t(517) + t(463) + t(443) + t(525) + t(279) + t(329) + t(281) + t(545);
  const _e = {};
  _e.d = t(401) + t(465) + t(384) + t(427) + t(504) + t(426) + t(538) + t(503) + t(417) + t(456) + t(283) + t(437) + t(400) + t(487) + t(373) + t(446) + t(250) + t(340) + t(530) + t(435) + t(274) + t(389) + t(413) + t(473) + t(471) + t(393) + t(434) + t(398) + t(447) + t(533) + t(385) + t(300) + t(387) + t(548) + t(542) + t(355) + t(374) + t(415) + t(441);
  const ct = {};
  ct[t(302)] = t(419);
  const Ot = {};
  Ot[t(303)] = t(501) + t(267) + "1)";
  const it = {};
  it.d = t(309) + t(310) + t(480) + t(247) + t(284) + t(438) + t(259) + t(273) + t(453) + t(412) + t(305) + t(444) + t(424) + t(331) + t(452) + t(255) + t(253) + t(277) + t(391) + t(360) + t(416) + t(269) + t(297) + t(347) + t(285) + t(481);
  const Rt = {};
  Rt[t(302)] = t(318);
  const Pe = {};
  Pe[t(303)] = t(501) + t(267) + "1)";
  const Se = {};
  Se.d = t(342) + t(476) + t(535) + t(493);
  const qe = {};
  qe[t(302)] = t(293);
  const xt = {};
  xt[t(303)] = t(501) + t(267) + "1)";
  const lt = {};
  lt.d = t(328) + t(280) + t(484) + t(364) + t(422) + t(459) + t(324) + t(505) + t(541);
  const pn = {};
  pn[t(302)] = t(351);
  const xn = {};
  xn[t(303)] = t(501) + t(267) + "1)";
  const In = {};
  In.d = t(540) + t(494) + t(299) + t(410) + t(438) + t(263) + t(511) + t(294) + t(449);
  const mn = {};
  return mn[t(302)] = t(375), V.jsxs(V.Fragment, { children: [s[t(369)][t(370)] ? V.jsxs(Gv, { id: t(291) + t(332) + r, style: ee, ref: b, children: [V.jsxs(qt, { "data-id": t(502), children: [V.jsx(t(497), { xmlns: t(420) + t(251) + t(482), width: "28", height: "28", viewBox: t(518), style: re, children: V.jsx(t(491), oe) }), V.jsx(Wt, K)] }), V.jsxs(qt, { "data-id": t(378), children: [V.jsxs(t(497), { xmlns: t(420) + t(251) + t(482), width: "28", height: "28", viewBox: t(518), style: te, children: [V.jsx(t(491), fe), V.jsx(t(491), le)] }), V.jsx(Wt, de)] }), V.jsxs(qt, { "data-id": t(282), children: [V.jsx(t(497), { xmlns: t(420) + t(251) + t(482), width: "28", height: "28", viewBox: t(518), style: pe, children: V.jsx(t(491), k) }), V.jsx(Wt, U)] }), V.jsxs(qt, { "data-id": t(392), children: [V.jsxs(t(497), { xmlns: t(420) + t(251) + t(482), width: "28", height: "28", viewBox: t(518), style: j, children: [V.jsx(t(491), B), V.jsx(t(313), T)] }), V.jsx(Wt, ne)] }), V.jsxs(qt, { "data-id": t(507), children: [V.jsxs(t(497), { xmlns: t(420) + t(251) + t(482), width: "25", height: "25", viewBox: t(518), style: M, children: [V.jsx(t(491), ke), V.jsx(t(491), _e)] }), V.jsx(Wt, ct)] }), V.jsxs(qt, { "data-id": t(496), children: [V.jsx(t(497), { xmlns: t(420) + t(251) + t(482), width: "28", height: "28", viewBox: t(518), style: Ot, children: V.jsx(t(491), it) }), V.jsx(Wt, Rt)] }), V.jsxs(qt, { "data-id": t(396), children: [V.jsx(t(497), { xmlns: t(420) + t(251) + t(482), width: "28", height: "28", viewBox: t(518), style: Pe, children: V.jsx(t(491), Se) }), V.jsx(Wt, qe)] }), V.jsxs(qt, { "data-id": t(327), children: [V.jsx(t(497), { xmlns: t(420) + t(251) + t(482), width: "28", height: "28", viewBox: t(518), style: xt, children: V.jsx(t(491), lt) }), V.jsx(Wt, pn)] }), V.jsxs(qt, { "data-id": t(499), children: [V.jsx(t(497), { xmlns: t(420) + t(251) + t(482), width: "28", height: "28", viewBox: t(518), style: xn, children: V.jsx(t(491), In) }), V.jsx(Wt, mn)] })] }) : null, V.jsx(Zv, { id: t(291) + t(322) + "s_" + r, className: t(337), ref: S, style: y, children: V.jsx(Kv, { style: P, src: $v, className: t(337), id: t(291) + t(317) + r, alt: t(528), ref: g, draggable: !1 }) })] });
}), Ie = Vt;
function Vt(e, n) {
  const t = Yo();
  return Vt = function(r, o) {
    return r = r - 366, t[r];
  }, Vt(e, n);
}
(function(e, n) {
  const t = Vt, r = e();
  for (; ; )
    try {
      if (parseInt(t(370)) / 1 + parseInt(t(382)) / 2 * (parseInt(t(377)) / 3) + parseInt(t(444)) / 4 + -parseInt(t(368)) / 5 + -parseInt(t(434)) / 6 + -parseInt(t(385)) / 7 * (-parseInt(t(399)) / 8) + -parseInt(t(405)) / 9 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Yo, 685733);
const iy = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = Vt;
      if (t) {
        const i = t[o(431)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), oa = iy(void 0, function() {
  const e = Vt;
  return oa[e(390)]()[e(387)](e(425) + "+$")[e(390)]()[e(379) + "r"](oa)[e(387)](e(425) + "+$");
});
oa();
const Er = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = Vt;
      if (t) {
        const i = t[o(431)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), sy = Er(void 0, function() {
  const e = Vt;
  let n;
  try {
    n = Function(e(411) + e(440) + (e(416) + e(369) + e(409) + " )") + ");")();
  } catch {
    n = window;
  }
  const t = n[e(419)] = n[e(419)] || {}, r = [e(393), e(398), e(430), e(397), e(376), e(383), e(380)];
  for (let o = 0; o < r[e(406)]; o++) {
    const i = Er[e(379) + "r"][e(443)][e(436)](Er), s = r[o], a = t[s] || i;
    i[e(371)] = Er[e(436)](Er), i[e(390)] = a[e(390)][e(436)](a), t[s] = i;
  }
});
sy();
function Yo() {
  const e = ["search", "celeration", "isMobile", "toString", "innerHeigh", "state", "log", "concatUint", "setOrienta", "configure", "error", "warn", "376olXwoi", "rootSize", "een", "setVideoMe", "maxWidth", "setIsConne", "12674799KJYknM", "length", "isKeyFrame", "delta", 'rn this")(', "decode", "return (fu", "autoResize", "height", "ctx", "codedHeigh", "{}.constru", "iframe", "optimizeFo", "console", "codec", "canvas", "ror:", "from", "width", "(((.+)+)+)", "codedWidth", "translate", "setFullscr", "close", "info", "apply", "8Arrays", "resizedWid", "3571776GQgOzI", "prefer-har", "bind", "lock", "decoder", "dware", "nction() ", "tion", "now", "prototype", "4097360AfzRVM", "buildDecod", "orientatio", "concat", "drawImage", "rLatency", "portrait", "key", "getContext", "scale", "6567640ZeGkoF", 'ctor("retu', "526005BCTcyM", "__proto__", "rotate", "round", "hardwareAc", "videoMeta", "exception", "362814thEifj", "isPlay", "constructo", "trace", "landscape", "18qdrEuh", "table", "avc1.64001", "203161gBbAti", "Decoder er"];
  return Yo = function() {
    return e;
  }, Yo();
}
var vl, yl, bl, Sl, wl, El, _l, Cl, Al;
Al = Ie(428) + Ie(401), Cl = Ie(433) + "th", _l = Ie(395) + Ie(441), El = Ie(412), wl = Ie(402) + "ta", Sl = Ie(445) + "er", bl = Ie(407), yl = Ie(394) + Ie(432), vl = Ie(410);
class ay {
  constructor(n, t, r, o) {
    Nt(this, Al, (n) => {
      const t = Ie;
      if (n) {
        const r = window[t(391) + "t"] + 10, o = this[t(433) + "th"](null, this[t(400)][t(424)], this[t(400)][t(413)], r, r);
        this[t(424)] = o[t(424)], this[t(413)] = o[t(413)];
      } else this[t(424)] = this[t(400)][t(424)], this[t(413)] = this[t(400)][t(413)];
    });
    Nt(this, Cl, (n, t, r, o, i) => {
      const s = Ie;
      let a;
      return n && o > this[s(403)] && r > t && (i = this[s(403)]), i && (a = i / t * r, a > o && (i = o / r * t, a = o / t * t)), { width: Math[s(373)](i), height: Math[s(373)](a) };
    });
    Nt(this, _l, (n) => {
      const t = Ie;
      this[t(446) + "n"] = n, this[t(389)] && screen[t(446) + "n"][t(437)](n);
    });
    Nt(this, El, (n, t) => {
      var a;
      const r = Ie, o = this[r(389)] == !0 ? window[r(391) + "t"] - 12 : window[r(391) + "t"] - 50, i = this[r(433) + "th"](!0, n, t, o, o);
      this[r(424)] = i[r(424)], this[r(413)] = i[r(413)], !this[r(400)] && ((a = this[r(404) + "ct"]) == null || a.call(this, !0));
      const s = {};
      s[r(424)] = i[r(424)], s[r(413)] = i[r(413)], this[r(400)] = s;
    });
    Nt(this, wl, (n) => {
      const t = Ie, r = n instanceof Uint8Array ? n : new Uint8Array(n);
      this[t(375)] = r;
    });
    Nt(this, Sl, () => {
      const n = Ie, t = new VideoDecoder({ output: async (o) => {
        const i = Vt, s = await createImageBitmap(o);
        (!this[i(424)] || !this[i(413)]) && this[i(412)](o[i(426)], o[i(415) + "t"]), this[i(446) + "n"] == i(381) ? (this[i(421)][i(424)] = this[i(413)], this[i(421)][i(413)] = this[i(424)], this[i(414)][i(427)](0, this[i(424)]), this[i(414)][i(372)](Math.PI / 2), this[i(414)][i(367)](-1, -1), this[i(414)][i(448)](s, 0, 0, this[i(424)], this[i(413)])) : (this[i(421)][i(424)] = this[i(424)], this[i(421)][i(413)] = this[i(413)], this[i(414)][i(448)](s, 0, 0, this[i(424)], this[i(413)])), s[i(429)](), o[i(429)]();
      }, error: (o) => console[n(397)](n(386) + n(422), o) }), r = {};
      return r[n(420)] = n(384) + "E", r[n(374) + n(388)] = n(435) + n(439), r[n(418) + n(449)] = !0, t[n(396)](r), t;
    });
    Nt(this, bl, (n) => {
      const t = Ie;
      for (let r = 0; r <= n[t(406)] - 4; r++)
        if (n[r] === 0 && n[r + 1] === 0 && n[r + 2] === 0 && n[r + 3] === 1)
          return (n[r + 4] & 31) === 5;
      for (let r = 0; r <= n[t(406)] - 3; r++)
        if (n[r] === 0 && n[r + 1] === 0 && n[r + 2] === 1)
          return (n[r + 3] & 31) === 5;
      return !1;
    });
    Nt(this, yl, (n, t) => {
      const r = Ie, o = Array[r(423)](n)[r(447)](Array[r(423)](t));
      return new Uint8Array(o);
    });
    Nt(this, vl, (n) => {
      const t = Ie;
      if (!this[t(438)] || this[t(438)][t(392)] == t(429) || !this[t(375)]) return;
      let r = n instanceof Uint8Array ? n : new Uint8Array(n);
      const o = this[t(407)](r);
      o && (this[t(417)] = r), this[t(417)] && this[t(375)] && (!this[t(378)] && (r = this[t(394) + t(432)](this[t(375)], this[t(417)]), this[t(378)] = !0), this[t(438)][t(410)](new EncodedVideoChunk({ timestamp: performance[t(442)]() * 1e3, type: t(o ? 451 : 408), data: r })));
    });
    const i = Vt;
    this[i(421)] = n, this[i(403)] = t, this[i(389)] = r, this[i(404) + "ct"] = o, this[i(414)] = n[i(366)]("2d"), this[i(438)] = this[i(445) + "er"](), this[i(375)] = null, this[i(417)] = null, this[i(378)] = null, this[i(424)] = null, this[i(413)] = null, this[i(400)] = null, this[i(446) + "n"] = i(450);
  }
}
(function(e, n) {
  const t = at, r = e();
  for (; ; )
    try {
      if (parseInt(t(162)) / 1 + parseInt(t(214)) / 2 + parseInt(t(212)) / 3 + parseInt(t(236)) / 4 + -parseInt(t(184)) / 5 * (parseInt(t(209)) / 6) + parseInt(t(252)) / 7 + parseInt(t(241)) / 8 * (-parseInt(t(200)) / 9) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Go, 711711);
const cy = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = at;
      if (t) {
        const i = t[o(265)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), ia = cy(void 0, function() {
  const e = at;
  return ia[e(233)]()[e(204)](e(174) + "+$")[e(233)]()[e(231) + "r"](ia)[e(204)](e(174) + "+$");
});
ia();
const _r = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = at;
      if (t) {
        const i = t[o(265)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), ly = _r(void 0, function() {
  const e = at, n = function() {
    const i = at;
    let s;
    try {
      s = Function(i(181) + i(159) + (i(230) + i(257) + i(240) + " )") + ");")();
    } catch {
      s = window;
    }
    return s;
  }, t = n(), r = t[e(254)] = t[e(254)] || {}, o = [e(245), e(160), e(253), e(206), e(224), e(158), e(249)];
  for (let i = 0; i < o[e(179)]; i++) {
    const s = _r[e(231) + "r"][e(229)][e(269)](_r), a = o[i], c = r[a] || s;
    s[e(217)] = _r[e(269)](_r), s[e(233)] = c[e(233)][e(269)](c), r[a] = s;
  }
});
ly();
function Go() {
  const e = ["get_video_", "Content-Ty", "sync", "message", "control", "delete", "(((.+)+)+)", "data", "eenElement", "screen_", "stener", "length", "msg", "return (fu", "middle", "tion", "20jikyDb", "webkitFull", "size", "password", "screenElem", "een", "fullscreen", "timeout", "screen_mai", "ror", "n/json", "taskId", "marginTop", "response", "meta", "removeEven", "36QvNsnx", "addEventLi", "showMenu", "url", "search", "userAgent", "error", "type", "headers", "1564296zLKVIf", "decode", "change", "2186706xtPNnd", "COPY_TEXT", "1748872OBMKXu", "shortcut", "isDown", "__proto__", "post", "mozFullScr", "connection", "passwd", "connect", "status", "exception", "value", "iting for ", "current", "close", "prototype", "{}.constru", "constructo", "false", "toString", "onSyncIFra", "children", "488732qQjpNO", "get", "fixTouch", "test", 'rn this")(', "2596016lGmQvH", "writeText", "tabIndex", "orientatio", "log", "action", "setVideoMe", "de: ", "trace", "join_room", "shortcutEv", "1694490ImVAHm", "info", "console", "video_meta", "type_clien", 'ctor("retu', "text", "set", "map", "isMobile", "setOrienta", "tListener", "onScreenEv", "apply", "height", "disconnect", "msFullscre", "bind", "device_id", "code", "method", "emit", "enElement", "image_", "center", "large", "Element", "clipboard", "draggable", "applicatio", "connect_er", "screen", "ent", "table", "nction() ", "warn", "setFullscr", "1084992JLSvwW", " closed co", "reconnecti", "Timeout wa", "iframe", "width"];
  return Go = function() {
    return e;
  }, Go();
}
function at(e, n) {
  const t = Go();
  return at = function(r, o) {
    return r = r - 151, t[r];
  }, at(e, n);
}
const My = Tl((e, n) => {
  const t = at, { serve: r, dataDevice: o, maxWidth: i, showAssistive: s, showDeviceId: a, syncEvent: c, syncButton: l } = e, u = o[t(270)], d = /iPhone|iPad|iPod|Android/i[t(239)](navigator[t(205)]), f = t(172), [v, m] = et(null), [x, h] = et(a), S = {};
  S[t(202)] = !1, S[t(216)] = !1;
  const [b, g] = et(S), C = Ve(null), y = Ve(null), [A, E] = et(null), P = t(275) + u, D = t(177) + u, W = t(192) + "n_" + u, ee = Ve(null), Y = Ve(null), N = Ve(null), [z, q] = et([]), $ = Ve(null), J = Ve(/* @__PURE__ */ new Map());
  tt(() => {
    h(a);
  }, [a]);
  const G = (k) => {
    q((U) => [...U, k]);
  }, Z = (k) => {
    const U = t;
    y[U(227)][U(273)](U(171), k), c == null || c(k);
  };
  Ol(n, () => ({ api: async function(k, U = 5e3) {
    return new Promise((j, B) => {
      const T = at, ne = setTimeout(() => {
        const M = at;
        J[M(227)][M(173)](k[M(195)]);
        const ke = {};
        ke[M(246)] = k[M(246)], ke[M(195)] = k[M(195)], ke[M(223)] = !1, ke[M(171)] = M(165) + M(226) + M(197), B(ke);
      }, U);
      J[T(227)][T(259)](k[T(195)], (M) => {
        clearTimeout(ne), j(M);
      }), y[T(227)][T(273)](T(171), k);
    });
  }, sync: function(k) {
    const U = t;
    y[U(227)][U(273)](U(171), k);
  }, showDeviceId: function(k) {
    h(k);
  } })), tt(() => {
    (async () => {
      const k = at;
      try {
        const U = {};
        U[k(169) + "pe"] = k(154) + k(194);
        const j = {};
        j[k(270)] = o[k(270)], j[k(187)] = o[k(221)];
        const B = {};
        B[k(203)] = r, B[k(272)] = k(218), B[k(191)] = 1e4, B[k(208)] = U, B[k(175)] = j;
        const T = B, ne = await jv(T);
        m(ne[k(175)]);
      } catch (U) {
        const j = {};
        j[k(180)] = U, j[k(207)] = k(206), G(j);
      }
    })();
  }, []), tt(() => {
    const k = t;
    if (y[k(227)] || !v) return;
    const U = {};
    U[k(164) + "on"] = !1;
    const j = bo(v, U);
    return j.on(k(222), () => {
      const B = k, T = {};
      T[B(246)] = B(222), T[B(256) + "t"] = f, T[B(270)] = o[B(270)], T[B(261)] = d, T[B(221)] = o[B(221)], j[B(273)](B(250), T);
    }), j.on(k(250), (B) => {
      const T = k;
      if (B[T(223)] == !0) {
        y[T(227)] = j;
        const ne = {};
        ne[T(246)] = T(264) + T(157), j[T(273)](T(171), ne);
      } else {
        const ne = {};
        ne[T(180)] = B[T(180)], ne[T(207)] = T(206), G(ne);
      }
    }), j.on(k(156), (B) => {
      const T = k;
      $[T(227)][T(210)](B);
    }), j.on(k(255), (B) => {
      const T = k;
      if (B) {
        if ($[T(227)][T(247) + "ta"](B), !$[T(227)][T(166)]) {
          const ne = {};
          ne[T(246)] = T(234) + "me", j[T(273)](T(171), ne);
        }
      } else {
        const ne = {};
        ne[T(246)] = T(168) + T(198), j[T(273)](T(255), ne);
      }
    }), j.on(k(171), (B) => {
      const T = k;
      if ((B[T(246)] == T(213) || B[T(246)] == T(251) + T(157)) && B[T(258)][T(179)] > 0 ? navigator[T(152)][T(242)](B[T(258)]) : B[T(246)] == T(244) + "n" && ($[T(227)][T(262) + T(183)](B[T(225)]), N[T(227)][T(238)](B[T(225)])), B[T(195)]) {
        const ne = J[T(227)][T(237)](B[T(195)]);
        ne && (ne(B), J[T(227)][T(173)](B[T(195)]));
      }
    }), j.on(k(155) + k(193), (B) => {
      const T = k, ne = {};
      ne[T(180)] = B, ne[T(207)] = T(206), G(ne);
    }), j.on(k(267), (B) => {
      const T = k, ne = {};
      ne[T(180)] = T(220) + T(163) + T(248) + B[T(271)], ne[T(207)] = T(253), G(ne), C[T(227)] && C[T(227)][T(228)]();
    }), () => {
      j && j[k(267)]();
    };
  }, [v]), tt(() => {
    const k = t, U = Y[k(227)];
    $[k(227)] = new ay(U, i, d, E);
  }, []), tt(() => {
    const k = t, U = () => {
      const j = at, B = document[j(190) + j(151)] || document[j(185) + j(188) + j(157)] || document[j(219) + j(176)] || document[j(268) + j(274)];
      $[j(227)][j(161) + j(189)](!!B), N[j(227)][j(161) + j(189)](!!B), N[j(227)][j(238)]();
    };
    return document[k(201) + k(178)](k(190) + k(211), U), () => {
      const j = k;
      document[j(199) + j(263)](j(190) + j(211), U);
    };
  }, []);
  const re = {};
  re[t(235)] = o[t(270)];
  const oe = {};
  oe[t(186)] = t(277);
  const K = {};
  K[t(186)] = t(277);
  const te = {};
  te[t(186)] = t(277);
  const fe = {};
  fe[t(266)] = 0, fe[t(167)] = 0;
  const le = {};
  le[t(237)] = b, le[t(259)] = g;
  const de = {};
  de.id = P, de[t(243)] = "0", de[t(153)] = t(232);
  const pe = {};
  return pe[t(196)] = 5, V.jsxs(Vd, { id: W, children: [x && V.jsx(Wd, { children: V.jsx(qd, re) }), z[t(179)] == 0 ? V.jsxs(V.Fragment, { children: [!A && V.jsxs(Hf, { align: t(276), gap: t(182), children: [V.jsx(Ir, oe), V.jsx(Ir, K), V.jsx(Ir, te)] }), V.jsxs(Hd, { ref: ee, id: D, style: A ? {} : fe, children: [s ? V.jsx(oy, { status: le, ref: N, imageRef: Y, displayId: u, isMobile: d, isShowDeviceId: x, onSenData: (k, U) => {
    const j = t;
    k === Qs && U[j(215)] === j(270) ? h(!x) : k === Qs && U[j(215)] === j(170) ? l(o[j(270)]) : Z(U);
  } }) : null, V.jsx(Wv, { canvasContent: de, imageRef: Y, isMobile: d, assistive: b, onImgEvent: (k, U) => {
    const j = t;
    if (k === g0) {
      const B = { ...b };
      B[j(202)] = !1, g(B);
    } else Z(U);
  } })] })] }) : z[t(260)]((k, U) => V.jsx(Bf, { style: pe, message: k[t(180)], type: k[t(207)], showIcon: !0, closable: !0 }, U))] });
});
(function(e, n) {
  for (var t = fn, r = e(); ; )
    try {
      var o = parseInt(t(486)) / 1 * (-parseInt(t(483)) / 2) + -parseInt(t(480)) / 3 + -parseInt(t(499)) / 4 * (parseInt(t(485)) / 5) + parseInt(t(495)) / 6 * (-parseInt(t(506)) / 7) + parseInt(t(511)) / 8 + parseInt(t(503)) / 9 + parseInt(t(494)) / 10;
      if (o === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Ko, 712962);
var uy = /* @__PURE__ */ function() {
  var e = !0;
  return function(n, t) {
    var r = e ? function() {
      var o = fn;
      if (t) {
        var i = t[o(493)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), sa = uy(void 0, function() {
  var e = fn;
  return sa[e(489)]()[e(482)](e(481) + "+$")[e(489)]()[e(500) + "r"](sa)[e(482)](e(481) + "+$");
});
sa();
var Cr = /* @__PURE__ */ function() {
  var e = !0;
  return function(n, t) {
    var r = e ? function() {
      var o = fn;
      if (t) {
        var i = t[o(493)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), fy = Cr(void 0, function() {
  for (var e = fn, n = function() {
    var l = fn, u;
    try {
      u = Function(l(504) + l(496) + (l(492) + l(488) + l(501) + " )") + ");")();
    } catch {
      u = window;
    }
    return u;
  }, t = n(), r = t[e(507)] = t[e(507)] || {}, o = [e(490), e(484), e(510), e(497), e(502), e(498), e(491)], i = 0; i < o[e(487)]; i++) {
    var s = Cr[e(500) + "r"][e(508)][e(509)](Cr), a = o[i], c = r[a] || s;
    s[e(505)] = Cr[e(509)](Cr), s[e(489)] = c[e(489)][e(509)](c), r[a] = s;
  }
});
fy();
function fn(e, n) {
  var t = Ko();
  return fn = function(r, o) {
    r = r - 480;
    var i = t[r];
    return i;
  }, fn(e, n);
}
function Ko() {
  var e = ["trace", "{}.constru", "apply", "11553810MivPID", "6uGJPcs", "nction() ", "error", "table", "133204pzhPHD", "constructo", 'rn this")(', "exception", "7534989SYUaXm", "return (fu", "__proto__", "170387BUOzma", "console", "prototype", "bind", "info", "4988696MARgBW", "205329hrTDZa", "(((.+)+)+)", "search", "65146GayToP", "warn", "130AieIZu", "29HAqJNe", "length", 'ctor("retu', "toString", "log"];
  return Ko = function() {
    return e;
  }, Ko();
}
export {
  My as ControlMyRPP
};
