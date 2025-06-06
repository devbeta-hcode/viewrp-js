var l0 = Object.defineProperty;
var u0 = (e, n, t) => n in e ? l0(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var Pt = (e, n, t) => u0(e, typeof n != "symbol" ? n + "" : n, t);
import * as w from "react";
import je, { useDebugValue as Aa, createElement as f0, useRef as Ve, useContext as tn, isValidElement as d0, version as h0, createContext as Ks, useLayoutEffect as p0, useEffect as tt, useState as et, forwardRef as ml, useImperativeHandle as gl } from "react";
import Ta from "react-dom";
var _r = En;
(function(e, n) {
  for (var t = En, r = e(); ; )
    try {
      var o = -parseInt(t(232)) / 1 + -parseInt(t(218)) / 2 * (-parseInt(t(251)) / 3) + -parseInt(t(238)) / 4 * (parseInt(t(226)) / 5) + parseInt(t(246)) / 6 * (parseInt(t(252)) / 7) + -parseInt(t(227)) / 8 + parseInt(t(249)) / 9 + -parseInt(t(243)) / 10;
      if (o === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ko, 785261);
function ko() {
  var e = ["undefined", "construct", "__proto__", "ptor", "get", "19005DFkSMm", "5189472ZHOrZk", "warn", "toString", "trace", "return (fu", "717733hyRjmL", "defineProp", "call", "error", "console", "log", "96OcPaSG", "keys", "constructo", "bind", "{}.constru", "6826740XyBaVO", "value", "default", "6UZBATq", "getOwnProp", 'ctor("retu', "13706109BvdqJZ", "nction() ", "12ukvhdN", "1203237XehVib", "apply", "hasOwnProp", "prototype", "ertyDescri", "__esModule", "function", "info", "forEach", 'rn this")(', "length", "table", "615392Lyzhar", "exception", "erty"];
  return ko = function() {
    return e;
  }, ko();
}
var ar = /* @__PURE__ */ function() {
  var e = !0;
  return function(n, t) {
    var r = e ? function() {
      var o = En;
      if (t) {
        var i = t[o(253)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), x0 = ar(void 0, function() {
  for (var e = En, n = function() {
    var l = En, u;
    try {
      u = Function(l(231) + l(250) + (l(242) + l(248) + l(215) + " )") + ");")();
    } catch {
      u = window;
    }
    return u;
  }, t = n(), r = t[e(236)] = t[e(236)] || {}, o = [e(237), e(228), e(213), e(235), e(219), e(217), e(230)], i = 0; i < o[e(216)]; i++) {
    var s = ar[e(240) + "r"][e(209)][e(241)](ar), a = o[i], c = r[a] || s;
    s[e(223)] = ar[e(241)](ar), s[e(229)] = c[e(229)][e(241)](c), r[a] = s;
  }
});
x0();
function En(e, n) {
  var t = ko();
  return En = function(r, o) {
    r = r - 209;
    var i = t[r];
    return i;
  }, En(e, n);
}
typeof globalThis !== _r(221) || typeof window !== _r(221) || (typeof global !== _r(221) ? global : _r(221));
function m0(e) {
  var n = _r;
  return e && e[n(211)] && Object[n(209)][n(254) + n(220)][n(234)](e, n(245)) ? e[n(245)] : e;
}
var Yr = { exports: {} }, cr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oa;
function g0() {
  if (Oa) return cr;
  Oa = 1;
  var e = je, n = Symbol.for("react.element"), t = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(a, c, l) {
    var u, d = {}, f = null, v = null;
    l !== void 0 && (f = "" + l), c.key !== void 0 && (f = "" + c.key), c.ref !== void 0 && (v = c.ref);
    for (u in c) r.call(c, u) && !i.hasOwnProperty(u) && (d[u] = c[u]);
    if (a && a.defaultProps) for (u in c = a.defaultProps, c) d[u] === void 0 && (d[u] = c[u]);
    return { $$typeof: n, type: a, key: f, ref: v, props: d, _owner: o.current };
  }
  return cr.Fragment = t, cr.jsx = s, cr.jsxs = s, cr;
}
var lr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ra;
function v0() {
  return Ra || (Ra = 1, process.env.NODE_ENV !== "production" && function() {
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
        for (var R = arguments.length, I = new Array(R > 1 ? R - 1 : 0), Y = 1; Y < R; Y++)
          I[Y - 1] = arguments[Y];
        g("error", p, I);
      }
    }
    function g(p, R, I) {
      {
        var Y = S.ReactDebugCurrentFrame, he = Y.getStackAddendum();
        he !== "" && (R += "%s", I = I.concat([he]));
        var xe = I.map(function(ce) {
          return String(ce);
        });
        xe.unshift("Warning: " + R), Function.prototype.apply.call(console[p], console, xe);
      }
    }
    var _ = !1, y = !1, A = !1, E = !1, P = !1, D;
    D = Symbol.for("react.module.reference");
    function W(p) {
      return !!(typeof p == "string" || typeof p == "function" || p === r || p === i || P || p === o || p === l || p === u || E || p === v || _ || y || A || typeof p == "object" && p !== null && (p.$$typeof === f || p.$$typeof === d || p.$$typeof === s || p.$$typeof === a || p.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      p.$$typeof === D || p.getModuleId !== void 0));
    }
    function ee(p, R, I) {
      var Y = p.displayName;
      if (Y)
        return Y;
      var he = R.displayName || R.name || "";
      return he !== "" ? I + "(" + he + ")" : I;
    }
    function $(p) {
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
            return $(R) + ".Consumer";
          case s:
            var I = p;
            return $(I._context) + ".Provider";
          case c:
            return ee(p, p.render, "ForwardRef");
          case d:
            var Y = p.displayName || null;
            return Y !== null ? Y : N(p.type) || "Memo";
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
    var z = Object.assign, q = 0, X, J, G, Z, re, oe, K;
    function te() {
    }
    te.__reactDisabledLog = !0;
    function fe() {
      {
        if (q === 0) {
          X = console.log, J = console.info, G = console.warn, Z = console.error, re = console.group, oe = console.groupCollapsed, K = console.groupEnd;
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
              value: X
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
            var Y = he.stack.trim().match(/\n( *(at )?)/);
            pe = Y && Y[1] || "";
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
      var Y;
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
              Y = Qe;
            }
            Reflect.construct(p, [], ce);
          } else {
            try {
              ce.call();
            } catch (Qe) {
              Y = Qe;
            }
            p.call(ce.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Qe) {
            Y = Qe;
          }
          p();
        }
      } catch (Qe) {
        if (Qe && Y && typeof Qe.stack == "string") {
          for (var se = Qe.stack.split(`
`), We = Y.stack.split(`
`), _e = se.length - 1, Te = We.length - 1; _e >= 1 && Te >= 0 && se[_e] !== We[Te]; )
            Te--;
          for (; _e >= 1 && Te >= 0; _e--, Te--)
            if (se[_e] !== We[Te]) {
              if (_e !== 1 || Te !== 1)
                do
                  if (_e--, Te--, Te < 0 || se[_e] !== We[Te]) {
                    var Oe = `
` + se[_e].replace(" at new ", " at ");
                    return p.displayName && Oe.includes("<anonymous>") && (Oe = Oe.replace("<anonymous>", p.displayName)), typeof p == "function" && j.set(p, Oe), Oe;
                  }
                while (_e >= 1 && Te >= 0);
              break;
            }
        }
      } finally {
        U = !1, de.current = xe, le(), Error.prepareStackTrace = he;
      }
      var Nn = p ? p.displayName || p.name : "", fn = Nn ? k(Nn) : "";
      return typeof p == "function" && j.set(p, fn), fn;
    }
    function ne(p, R, I) {
      return T(p, !1);
    }
    function L(p) {
      var R = p.prototype;
      return !!(R && R.isReactComponent);
    }
    function ke(p, R, I) {
      if (p == null)
        return "";
      if (typeof p == "function")
        return T(p, L(p));
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
            var Y = p, he = Y._payload, xe = Y._init;
            try {
              return ke(xe(he), R, I);
            } catch {
            }
          }
        }
      return "";
    }
    var Ce = Object.prototype.hasOwnProperty, at = {}, At = S.ReactDebugCurrentFrame;
    function it(p) {
      if (p) {
        var R = p._owner, I = ke(p.type, p._source, R ? R.type : null);
        At.setExtraStackFrame(I);
      } else
        At.setExtraStackFrame(null);
    }
    function Tt(p, R, I, Y, he) {
      {
        var xe = Function.call.bind(Ce);
        for (var ce in p)
          if (xe(p, ce)) {
            var se = void 0;
            try {
              if (typeof p[ce] != "function") {
                var We = Error((Y || "React class") + ": " + I + " type `" + ce + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof p[ce] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw We.name = "Invariant Violation", We;
              }
              se = p[ce](R, ce, Y, I, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_e) {
              se = _e;
            }
            se && !(se instanceof Error) && (it(he), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Y || "React class", I, ce, typeof se), it(null)), se instanceof Error && !(se.message in at) && (at[se.message] = !0, it(he), b("Failed %s type: %s", I, se.message), it(null));
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
    function pt(p) {
      try {
        return ct(p), !1;
      } catch {
        return !0;
      }
    }
    function ct(p) {
      return "" + p;
    }
    function an(p) {
      if (pt(p))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qe(p)), ct(p);
    }
    var cn = S.ReactCurrentOwner, kn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ln, M;
    function O(p) {
      if (Ce.call(p, "ref")) {
        var R = Object.getOwnPropertyDescriptor(p, "ref").get;
        if (R && R.isReactWarning)
          return !1;
      }
      return p.ref !== void 0;
    }
    function Le(p) {
      if (Ce.call(p, "key")) {
        var R = Object.getOwnPropertyDescriptor(p, "key").get;
        if (R && R.isReactWarning)
          return !1;
      }
      return p.key !== void 0;
    }
    function Me(p, R) {
      typeof p.ref == "string" && cn.current;
    }
    function Xe(p, R) {
      {
        var I = function() {
          ln || (ln = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
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
          M || (M = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        I.isReactWarning = !0, Object.defineProperty(p, "ref", {
          get: I,
          configurable: !0
        });
      }
    }
    var Ke = function(p, R, I, Y, he, xe, ce) {
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
        value: Y
      }), Object.defineProperty(se, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: he
      }), Object.freeze && (Object.freeze(se.props), Object.freeze(se)), se;
    };
    function Ze(p, R, I, Y, he) {
      {
        var xe, ce = {}, se = null, We = null;
        I !== void 0 && (an(I), se = "" + I), Le(R) && (an(R.key), se = "" + R.key), O(R) && (We = R.ref, Me(R, he));
        for (xe in R)
          Ce.call(R, xe) && !kn.hasOwnProperty(xe) && (ce[xe] = R[xe]);
        if (p && p.defaultProps) {
          var _e = p.defaultProps;
          for (xe in _e)
            ce[xe] === void 0 && (ce[xe] = _e[xe]);
        }
        if (se || We) {
          var Te = typeof p == "function" ? p.displayName || p.name || "Unknown" : p;
          se && Xe(ce, Te), We && Ee(ce, Te);
        }
        return Ke(p, se, We, he, Y, cn.current, ce);
      }
    }
    var Ot = S.ReactCurrentOwner, Pn = S.ReactDebugCurrentFrame;
    function Rt(p) {
      if (p) {
        var R = p._owner, I = ke(p.type, p._source, R ? R.type : null);
        Pn.setExtraStackFrame(I);
      } else
        Pn.setExtraStackFrame(null);
    }
    var Ft;
    Ft = !1;
    function zt(p) {
      return typeof p == "object" && p !== null && p.$$typeof === n;
    }
    function Ye() {
      {
        if (Ot.current) {
          var p = N(Ot.current.type);
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
    var lt = {};
    function kt(p) {
      {
        var R = Ye();
        if (!R) {
          var I = typeof p == "string" ? p : p.displayName || p.name;
          I && (R = `

Check the top-level render call using <` + I + ">.");
        }
        return R;
      }
    }
    function un(p, R) {
      {
        if (!p._store || p._store.validated || p.key != null)
          return;
        p._store.validated = !0;
        var I = kt(R);
        if (lt[I])
          return;
        lt[I] = !0;
        var Y = "";
        p && p._owner && p._owner !== Ot.current && (Y = " It was passed a child from " + N(p._owner.type) + "."), Rt(p), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', I, Y), Rt(null);
      }
    }
    function In(p, R) {
      {
        if (typeof p != "object")
          return;
        if (Se(p))
          for (var I = 0; I < p.length; I++) {
            var Y = p[I];
            zt(Y) && un(Y, R);
          }
        else if (zt(p))
          p._store && (p._store.validated = !0);
        else if (p) {
          var he = h(p);
          if (typeof he == "function" && he !== p.entries)
            for (var xe = he.call(p), ce; !(ce = xe.next()).done; )
              zt(ce.value) && un(ce.value, R);
        }
      }
    }
    function $t(p) {
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
          var Y = N(R);
          Tt(I, p.props, "prop", Y, p);
        } else if (R.PropTypes !== void 0 && !Ft) {
          Ft = !0;
          var he = N(R);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", he || "Unknown");
        }
        typeof R.getDefaultProps == "function" && !R.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Gt(p) {
      {
        for (var R = Object.keys(p.props), I = 0; I < R.length; I++) {
          var Y = R[I];
          if (Y !== "children" && Y !== "key") {
            Rt(p), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Y), Rt(null);
            break;
          }
        }
        p.ref !== null && (Rt(p), b("Invalid attribute `ref` supplied to `React.Fragment`."), Rt(null));
      }
    }
    var sr = {};
    function Wr(p, R, I, Y, he, xe) {
      {
        var ce = W(p);
        if (!ce) {
          var se = "";
          (p === void 0 || typeof p == "object" && p !== null && Object.keys(p).length === 0) && (se += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var We = Je();
          We ? se += We : se += Ye();
          var _e;
          p === null ? _e = "null" : Se(p) ? _e = "array" : p !== void 0 && p.$$typeof === n ? (_e = "<" + (N(p.type) || "Unknown") + " />", se = " Did you accidentally export a JSX literal instead of a component?") : _e = typeof p, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _e, se);
        }
        var Te = Ze(p, R, I, he, xe);
        if (Te == null)
          return Te;
        if (ce) {
          var Oe = R.children;
          if (Oe !== void 0)
            if (Y)
              if (Se(Oe)) {
                for (var Nn = 0; Nn < Oe.length; Nn++)
                  In(Oe[Nn], p);
                Object.freeze && Object.freeze(Oe);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              In(Oe, p);
        }
        if (Ce.call(R, "key")) {
          var fn = N(p), Qe = Object.keys(R).filter(function(c0) {
            return c0 !== "key";
          }), wi = Qe.length > 0 ? "{key: someKey, " + Qe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!sr[fn + wi]) {
            var a0 = Qe.length > 0 ? "{" + Qe.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, wi, fn, a0, fn), sr[fn + wi] = !0;
          }
        }
        return p === r ? Gt(Te) : $t(Te), Te;
      }
    }
    function ze(p, R, I) {
      return Wr(p, R, I, !0);
    }
    function Xr(p, R, I) {
      return Wr(p, R, I, !1);
    }
    var Si = Xr, Ae = ze;
    lr.Fragment = r, lr.jsx = Si, lr.jsxs = Ae;
  }()), lr;
}
var ka;
function y0() {
  return ka || (ka = 1, process.env.NODE_ENV === "production" ? Yr.exports = g0() : Yr.exports = v0()), Yr.exports;
}
var V = y0(), nt = function() {
  return nt = Object.assign || function(n) {
    for (var t, r = 1, o = arguments.length; r < o; r++) {
      t = arguments[r];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
    }
    return n;
  }, nt.apply(this, arguments);
};
function zn(e, n, t) {
  if (t || arguments.length === 2) for (var r = 0, o = n.length, i; r < o; r++)
    (i || !(r in n)) && (i || (i = Array.prototype.slice.call(n, 0, r)), i[r] = n[r]);
  return e.concat(i || Array.prototype.slice.call(n));
}
function b0(e) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return n[t] === void 0 && (n[t] = e(t)), n[t];
  };
}
var S0 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, w0 = /* @__PURE__ */ b0(
  function(e) {
    return S0.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), we = "-ms-", Or = "-moz-", ve = "-webkit-", vl = "comm", Zo = "rule", Zs = "decl", E0 = "@import", yl = "@keyframes", C0 = "@layer", bl = Math.abs, Js = String.fromCharCode, Xi = Object.assign;
function _0(e, n) {
  return Ue(e, 0) ^ 45 ? (((n << 2 ^ Ue(e, 0)) << 2 ^ Ue(e, 1)) << 2 ^ Ue(e, 2)) << 2 ^ Ue(e, 3) : 0;
}
function Sl(e) {
  return e.trim();
}
function qt(e, n) {
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
function Vn(e, n, t) {
  return e.slice(n, t);
}
function jt(e) {
  return e.length;
}
function wl(e) {
  return e.length;
}
function Ar(e, n) {
  return n.push(e), e;
}
function A0(e, n) {
  return e.map(n).join("");
}
function Pa(e, n) {
  return e.filter(function(t) {
    return !qt(t, n);
  });
}
var Jo = 1, Hn = 1, El = 0, dt = 0, De = 0, Zn = "";
function Qo(e, n, t, r, o, i, s, a) {
  return { value: e, root: n, parent: t, type: r, props: o, children: i, line: Jo, column: Hn, length: s, return: "", siblings: a };
}
function Kt(e, n) {
  return Xi(Qo("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, n);
}
function jn(e) {
  for (; e.root; )
    e = Kt(e.root, { children: [e] });
  Ar(e, e.siblings);
}
function T0() {
  return De;
}
function O0() {
  return De = dt > 0 ? Ue(Zn, --dt) : 0, Hn--, De === 10 && (Hn = 1, Jo--), De;
}
function yt() {
  return De = dt < El ? Ue(Zn, dt++) : 0, Hn++, De === 10 && (Hn = 1, Jo++), De;
}
function gn() {
  return Ue(Zn, dt);
}
function fo() {
  return dt;
}
function ei(e, n) {
  return Vn(Zn, e, n);
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
function R0(e) {
  return Jo = Hn = 1, El = jt(Zn = e), dt = 0, [];
}
function k0(e) {
  return Zn = "", e;
}
function Ei(e) {
  return Sl(ei(dt - 1, $i(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function P0(e) {
  for (; (De = gn()) && De < 33; )
    yt();
  return Yi(e) > 2 || Yi(De) > 3 ? "" : " ";
}
function I0(e, n) {
  for (; --n && yt() && !(De < 48 || De > 102 || De > 57 && De < 65 || De > 70 && De < 97); )
    ;
  return ei(e, fo() + (n < 6 && gn() == 32 && yt() == 32));
}
function $i(e) {
  for (; yt(); )
    switch (De) {
      // ] ) " '
      case e:
        return dt;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && $i(De);
        break;
      // (
      case 40:
        e === 41 && $i(e);
        break;
      // \
      case 92:
        yt();
        break;
    }
  return dt;
}
function N0(e, n) {
  for (; yt() && e + De !== 57; )
    if (e + De === 84 && gn() === 47)
      break;
  return "/*" + ei(n, dt - 1) + "*" + Js(e === 47 ? e : yt());
}
function j0(e) {
  for (; !Yi(gn()); )
    yt();
  return ei(e, dt);
}
function L0(e) {
  return k0(ho("", null, null, null, [""], e = R0(e), 0, [0], e));
}
function ho(e, n, t, r, o, i, s, a, c) {
  for (var l = 0, u = 0, d = s, f = 0, v = 0, m = 0, x = 1, h = 1, S = 1, b = 0, g = "", _ = o, y = i, A = r, E = g; h; )
    switch (m = b, b = yt()) {
      // (
      case 40:
        if (m != 108 && Ue(E, d - 1) == 58) {
          uo(E += ie(Ei(b), "&", "&\f"), "&\f", bl(l ? a[l - 1] : 0)) != -1 && (S = -1);
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
        E += P0(m);
        break;
      // \
      case 92:
        E += I0(fo() - 1, 7);
        continue;
      // /
      case 47:
        switch (gn()) {
          case 42:
          case 47:
            Ar(M0(N0(yt(), fo()), n, t, c), c);
            break;
          default:
            E += "/";
        }
        break;
      // {
      case 123 * x:
        a[l++] = jt(E) * S;
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
            S == -1 && (E = ie(E, /\f/g, "")), v > 0 && jt(E) - d && Ar(v > 32 ? Na(E + ";", r, t, d - 1, c) : Na(ie(E, " ", "") + ";", r, t, d - 2, c), c);
            break;
          // @ ;
          case 59:
            E += ";";
          // { rule/at-rule
          default:
            if (Ar(A = Ia(E, n, t, l, u, o, a, g, _ = [], y = [], d, i), i), b === 123)
              if (u === 0)
                ho(E, n, A, A, _, i, d, a, y);
              else
                switch (f === 99 && Ue(E, 3) === 110 ? 100 : f) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ho(e, A, A, r && Ar(Ia(e, A, A, 0, 0, o, a, g, o, _ = [], d, y), y), o, y, d, a, r ? _ : y);
                    break;
                  default:
                    ho(E, A, A, A, [""], y, 0, a, y);
                }
        }
        l = u = v = 0, x = S = 1, g = E = "", d = s;
        break;
      // :
      case 58:
        d = 1 + jt(E), v = m;
      default:
        if (x < 1) {
          if (b == 123)
            --x;
          else if (b == 125 && x++ == 0 && O0() == 125)
            continue;
        }
        switch (E += Js(b), b * x) {
          // &
          case 38:
            S = u > 0 ? 1 : (E += "\f", -1);
            break;
          // ,
          case 44:
            a[l++] = (jt(E) - 1) * S, S = 1;
            break;
          // @
          case 64:
            gn() === 45 && (E += Ei(yt())), f = gn(), u = d = jt(g = E += j0(fo())), b++;
            break;
          // -
          case 45:
            m === 45 && jt(E) == 2 && (x = 0);
        }
    }
  return i;
}
function Ia(e, n, t, r, o, i, s, a, c, l, u, d) {
  for (var f = o - 1, v = o === 0 ? i : [""], m = wl(v), x = 0, h = 0, S = 0; x < r; ++x)
    for (var b = 0, g = Vn(e, f + 1, f = bl(h = s[x])), _ = e; b < m; ++b)
      (_ = Sl(h > 0 ? v[b] + " " + g : ie(g, /&\f/g, v[b]))) && (c[S++] = _);
  return Qo(e, n, t, o === 0 ? Zo : a, c, l, u, d);
}
function M0(e, n, t, r) {
  return Qo(e, n, t, vl, Js(T0()), Vn(e, 2, -2), 0, r);
}
function Na(e, n, t, r, o) {
  return Qo(e, n, t, Zs, Vn(e, 0, r), Vn(e, r + 1, -1), r, o);
}
function Cl(e, n, t) {
  switch (_0(e, n)) {
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
      return Or + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ve + e + Or + e + we + e + e;
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
      return ve + e + we + "flex-item-" + ie(e, /flex-|-self/g, "") + (qt(e, /flex-|baseline/) ? "" : we + "grid-row-" + ie(e, /flex-|-self/g, "")) + e;
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
      if (!qt(e, /flex-|baseline/)) return we + "grid-column-align" + Vn(e, n) + e;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return we + ie(e, "template-", "") + e;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return t && t.some(function(r, o) {
        return n = o, qt(r.props, /grid-\w+-end/);
      }) ? ~uo(e + (t = t[n].value), "span", 0) ? e : we + ie(e, "-start", "") + e + we + "grid-row-span:" + (~uo(t, "span", 0) ? qt(t, /\d+/) : +qt(t, /\d+/) - +qt(e, /\d+/)) + ";" : we + ie(e, "-start", "") + e;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return t && t.some(function(r) {
        return qt(r.props, /grid-\w+-start/);
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
      if (jt(e) - 1 - n > 6)
        switch (Ue(e, n + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (Ue(e, n + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return ie(e, /(.+:)(.+)-([^]+)/, "$1" + ve + "$2-$3$1" + Or + (Ue(e, n + 3) == 108 ? "$3" : "$2-$3")) + e;
          // (s)tretch
          case 115:
            return ~uo(e, "stretch", 0) ? Cl(ie(e, "stretch", "fill-available"), n, t) + e : e;
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
function D0(e, n, t, r) {
  switch (e.type) {
    case C0:
      if (e.children.length) break;
    case E0:
    case Zs:
      return e.return = e.return || e.value;
    case vl:
      return "";
    case yl:
      return e.return = e.value + "{" + Po(e.children, r) + "}";
    case Zo:
      if (!jt(e.value = e.props.join(","))) return "";
  }
  return jt(t = Po(e.children, r)) ? e.return = e.value + "{" + t + "}" : "";
}
function B0(e) {
  var n = wl(e);
  return function(t, r, o, i) {
    for (var s = "", a = 0; a < n; a++)
      s += e[a](t, r, o, i) || "";
    return s;
  };
}
function F0(e) {
  return function(n) {
    n.root || (n = n.return) && e(n);
  };
}
function z0(e, n, t, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Zs:
        e.return = Cl(e.value, e.length, t);
        return;
      case yl:
        return Po([Kt(e, { value: ie(e.value, "@", "@" + ve) })], r);
      case Zo:
        if (e.length)
          return A0(t = e.props, function(o) {
            switch (qt(o, r = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                jn(Kt(e, { props: [ie(o, /:(read-\w+)/, ":" + Or + "$1")] })), jn(Kt(e, { props: [o] })), Xi(e, { props: Pa(t, r) });
                break;
              // :placeholder
              case "::placeholder":
                jn(Kt(e, { props: [ie(o, /:(plac\w+)/, ":" + ve + "input-$1")] })), jn(Kt(e, { props: [ie(o, /:(plac\w+)/, ":" + Or + "$1")] })), jn(Kt(e, { props: [ie(o, /:(plac\w+)/, we + "input-$1")] })), jn(Kt(e, { props: [o] })), Xi(e, { props: Pa(t, r) });
                break;
            }
            return "";
          });
    }
}
var V0 = {
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
}, Cn = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", _l = "active", Al = "data-styled-version", ti = "6.1.18", Qs = `/*!sc*/
`, Io = typeof window < "u" && typeof document < "u", H0 = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), ja = /invalid hook call/i, $r = /* @__PURE__ */ new Set(), U0 = function(e, n) {
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
        ja.test(s) ? (i = !1, $r.delete(r)) : o.apply(void 0, zn([s], a, !1));
      }, Ve(), i && !$r.has(r) && (console.warn(r), $r.add(r));
    } catch (s) {
      ja.test(s.message) && $r.delete(r);
    } finally {
      console.error = o;
    }
  }
}, ni = Object.freeze([]), Un = Object.freeze({});
function q0(e, n, t) {
  return t === void 0 && (t = Un), e.theme !== t.theme && e.theme || n || t.theme;
}
var Gi = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), W0 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, X0 = /(^-|-$)/g;
function La(e) {
  return e.replace(W0, "-").replace(X0, "");
}
var Y0 = /(a)(d)/gi, Gr = 52, Ma = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Ki(e) {
  var n, t = "";
  for (n = Math.abs(e); n > Gr; n = n / Gr | 0) t = Ma(n % Gr) + t;
  return (Ma(n % Gr) + t).replace(Y0, "$1-$2");
}
var Ci, Tl = 5381, hn = function(e, n) {
  for (var t = n.length; t; ) e = 33 * e ^ n.charCodeAt(--t);
  return e;
}, Ol = function(e) {
  return hn(Tl, e);
};
function $0(e) {
  return Ki(Ol(e) >>> 0);
}
function Rl(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function _i(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var kl = typeof Symbol == "function" && Symbol.for, Pl = kl ? Symbol.for("react.memo") : 60115, G0 = kl ? Symbol.for("react.forward_ref") : 60112, K0 = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Z0 = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Il = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, J0 = ((Ci = {})[G0] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Ci[Pl] = Il, Ci);
function Da(e) {
  return ("type" in (n = e) && n.type.$$typeof) === Pl ? Il : "$$typeof" in e ? J0[e.$$typeof] : K0;
  var n;
}
var Q0 = Object.defineProperty, ed = Object.getOwnPropertyNames, Ba = Object.getOwnPropertySymbols, td = Object.getOwnPropertyDescriptor, nd = Object.getPrototypeOf, Fa = Object.prototype;
function Nl(e, n, t) {
  if (typeof n != "string") {
    if (Fa) {
      var r = nd(n);
      r && r !== Fa && Nl(e, r, t);
    }
    var o = ed(n);
    Ba && (o = o.concat(Ba(n)));
    for (var i = Da(e), s = Da(n), a = 0; a < o.length; ++a) {
      var c = o[a];
      if (!(c in Z0 || t && t[c] || s && c in s || i && c in i)) {
        var l = td(n, c);
        try {
          Q0(e, c, l);
        } catch {
        }
      }
    }
  }
  return e;
}
function qn(e) {
  return typeof e == "function";
}
function ea(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function xn(e, n) {
  return e && n ? "".concat(e, " ").concat(n) : e || n || "";
}
function za(e, n) {
  if (e.length === 0) return "";
  for (var t = e[0], r = 1; r < e.length; r++) t += e[r];
  return t;
}
function Wn(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Zi(e, n, t) {
  if (t === void 0 && (t = !1), !t && !Wn(e) && !Array.isArray(e)) return n;
  if (Array.isArray(n)) for (var r = 0; r < n.length; r++) e[r] = Zi(e[r], n[r]);
  else if (Wn(n)) for (var r in n) e[r] = Zi(e[r], n[r]);
  return e;
}
function ta(e, n) {
  Object.defineProperty(e, "toString", { value: n });
}
var rd = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function od() {
  for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
  for (var t = e[0], r = [], o = 1, i = e.length; o < i; o += 1) r.push(e[o]);
  return r.forEach(function(s) {
    t = t.replace(/%[a-z]/, s);
  }), t;
}
function Jn(e) {
  for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(n.length > 0 ? " Args: ".concat(n.join(", ")) : "")) : new Error(od.apply(void 0, zn([rd[e]], n, !1)).trim());
}
var id = function() {
  function e(n) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = n;
  }
  return e.prototype.indexOfGroup = function(n) {
    for (var t = 0, r = 0; r < n; r++) t += this.groupSizes[r];
    return t;
  }, e.prototype.insertRules = function(n, t) {
    if (n >= this.groupSizes.length) {
      for (var r = this.groupSizes, o = r.length, i = o; n >= i; ) if ((i <<= 1) < 0) throw Jn(16, "".concat(n));
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
    for (var r = this.groupSizes[n], o = this.indexOfGroup(n), i = o + r, s = o; s < i; s++) t += "".concat(this.tag.getRule(s)).concat(Qs);
    return t;
  }, e;
}(), sd = 1 << 30, po = /* @__PURE__ */ new Map(), No = /* @__PURE__ */ new Map(), xo = 1, Kr = function(e) {
  if (po.has(e)) return po.get(e);
  for (; No.has(xo); ) xo++;
  var n = xo++;
  if (process.env.NODE_ENV !== "production" && ((0 | n) < 0 || n > sd)) throw Jn(16, "".concat(n));
  return po.set(e, n), No.set(n, e), n;
}, ad = function(e, n) {
  xo = n + 1, po.set(e, n), No.set(n, e);
}, cd = "style[".concat(Cn, "][").concat(Al, '="').concat(ti, '"]'), ld = new RegExp("^".concat(Cn, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), ud = function(e, n, t) {
  for (var r, o = t.split(","), i = 0, s = o.length; i < s; i++) (r = o[i]) && e.registerName(n, r);
}, fd = function(e, n) {
  for (var t, r = ((t = n.textContent) !== null && t !== void 0 ? t : "").split(Qs), o = [], i = 0, s = r.length; i < s; i++) {
    var a = r[i].trim();
    if (a) {
      var c = a.match(ld);
      if (c) {
        var l = 0 | parseInt(c[1], 10), u = c[2];
        l !== 0 && (ad(u, l), ud(e, u, c[3]), e.getTag().insertRules(l, o)), o.length = 0;
      } else o.push(a);
    }
  }
}, Va = function(e) {
  for (var n = document.querySelectorAll(cd), t = 0, r = n.length; t < r; t++) {
    var o = n[t];
    o && o.getAttribute(Cn) !== _l && (fd(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function dd() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var jl = function(e) {
  var n = document.head, t = e || n, r = document.createElement("style"), o = function(a) {
    var c = Array.from(a.querySelectorAll("style[".concat(Cn, "]")));
    return c[c.length - 1];
  }(t), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(Cn, _l), r.setAttribute(Al, ti);
  var s = dd();
  return s && r.setAttribute("nonce", s), t.insertBefore(r, i), r;
}, hd = function() {
  function e(n) {
    this.element = jl(n), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
        var s = r[o];
        if (s.ownerNode === t) return s;
      }
      throw Jn(17);
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
}(), pd = function() {
  function e(n) {
    this.element = jl(n), this.nodes = this.element.childNodes, this.length = 0;
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
}(), xd = function() {
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
}(), Ha = Io, md = { isServer: !Io, useCSSOMInjection: !H0 }, Ll = function() {
  function e(n, t, r) {
    n === void 0 && (n = Un), t === void 0 && (t = {});
    var o = this;
    this.options = nt(nt({}, md), n), this.gs = t, this.names = new Map(r), this.server = !!n.isServer, !this.server && Io && Ha && (Ha = !1, Va(this)), ta(this, function() {
      return function(i) {
        for (var s = i.getTag(), a = s.length, c = "", l = function(d) {
          var f = function(S) {
            return No.get(S);
          }(d);
          if (f === void 0) return "continue";
          var v = i.names.get(f), m = s.getGroup(d);
          if (v === void 0 || !v.size || m.length === 0) return "continue";
          var x = "".concat(Cn, ".g").concat(d, '[id="').concat(f, '"]'), h = "";
          v !== void 0 && v.forEach(function(S) {
            S.length > 0 && (h += "".concat(S, ","));
          }), c += "".concat(m).concat(x, '{content:"').concat(h, '"}').concat(Qs);
        }, u = 0; u < a; u++) l(u);
        return c;
      }(o);
    });
  }
  return e.registerId = function(n) {
    return Kr(n);
  }, e.prototype.rehydrate = function() {
    !this.server && Io && Va(this);
  }, e.prototype.reconstructWithOptions = function(n, t) {
    return t === void 0 && (t = !0), new e(nt(nt({}, this.options), n), this.gs, t && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(n) {
    return this.gs[n] = (this.gs[n] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (n = function(t) {
      var r = t.useCSSOMInjection, o = t.target;
      return t.isServer ? new xd(o) : r ? new hd(o) : new pd(o);
    }(this.options), new id(n)));
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
}(), gd = /&/g, vd = /^\s*\/\/.*$/gm;
function Ml(e, n) {
  return e.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(n, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(n, " ")), t.props = t.props.map(function(r) {
      return "".concat(n, " ").concat(r);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = Ml(t.children, n)), t;
  });
}
function yd(e) {
  var n, t, r, o = Un, i = o.options, s = i === void 0 ? Un : i, a = o.plugins, c = a === void 0 ? ni : a, l = function(f, v, m) {
    return m.startsWith(t) && m.endsWith(t) && m.replaceAll(t, "").length > 0 ? ".".concat(n) : f;
  }, u = c.slice();
  u.push(function(f) {
    f.type === Zo && f.value.includes("&") && (f.props[0] = f.props[0].replace(gd, t).replace(r, l));
  }), s.prefix && u.push(z0), u.push(D0);
  var d = function(f, v, m, x) {
    v === void 0 && (v = ""), m === void 0 && (m = ""), x === void 0 && (x = "&"), n = x, t = v, r = new RegExp("\\".concat(t, "\\b"), "g");
    var h = f.replace(vd, ""), S = L0(m || v ? "".concat(m, " ").concat(v, " { ").concat(h, " }") : h);
    s.namespace && (S = Ml(S, s.namespace));
    var b = [];
    return Po(S, B0(u.concat(F0(function(g) {
      return b.push(g);
    })))), b;
  };
  return d.hash = c.length ? c.reduce(function(f, v) {
    return v.name || Jn(15), hn(f, v.name);
  }, Tl).toString() : "", d;
}
var bd = new Ll(), Ji = yd(), Dl = je.createContext({ shouldForwardProp: void 0, styleSheet: bd, stylis: Ji });
Dl.Consumer;
je.createContext(void 0);
function Ua() {
  return tn(Dl);
}
var qa = function() {
  function e(n, t) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Ji);
      var s = r.name + i.hash;
      o.hasNameForId(r.id, s) || o.insertRules(r.id, s, i(r.rules, s, "@keyframes"));
    }, this.name = n, this.id = "sc-keyframes-".concat(n), this.rules = t, ta(this, function() {
      throw Jn(12, String(r.name));
    });
  }
  return e.prototype.getName = function(n) {
    return n === void 0 && (n = Ji), this.name + n.hash;
  }, e;
}(), Sd = function(e) {
  return e >= "A" && e <= "Z";
};
function Wa(e) {
  for (var n = "", t = 0; t < e.length; t++) {
    var r = e[t];
    if (t === 1 && r === "-" && e[0] === "-") return e;
    Sd(r) ? n += "-" + r.toLowerCase() : n += r;
  }
  return n.startsWith("ms-") ? "-" + n : n;
}
var Bl = function(e) {
  return e == null || e === !1 || e === "";
}, Fl = function(e) {
  var n, t, r = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !Bl(i) && (Array.isArray(i) && i.isCss || qn(i) ? r.push("".concat(Wa(o), ":"), i, ";") : Wn(i) ? r.push.apply(r, zn(zn(["".concat(o, " {")], Fl(i), !1), ["}"], !1)) : r.push("".concat(Wa(o), ": ").concat((n = o, (t = i) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || t === 0 || n in V0 || n.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return r;
};
function vn(e, n, t, r) {
  if (Bl(e)) return [];
  if (ea(e)) return [".".concat(e.styledComponentId)];
  if (qn(e)) {
    if (!qn(i = e) || i.prototype && i.prototype.isReactComponent || !n) return [e];
    var o = e(n);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof qa || Wn(o) || o === null || console.error("".concat(Rl(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), vn(o, n, t, r);
  }
  var i;
  return e instanceof qa ? t ? (e.inject(t, r), [e.getName(r)]) : [e] : Wn(e) ? Fl(e) : Array.isArray(e) ? Array.prototype.concat.apply(ni, e.map(function(s) {
    return vn(s, n, t, r);
  })) : [e.toString()];
}
function wd(e) {
  for (var n = 0; n < e.length; n += 1) {
    var t = e[n];
    if (qn(t) && !ea(t)) return !1;
  }
  return !0;
}
var Ed = Ol(ti), Cd = function() {
  function e(n, t, r) {
    this.rules = n, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && wd(n), this.componentId = t, this.baseHash = hn(Ed, t), this.baseStyle = r, Ll.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(n, t, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(n, t, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) o = xn(o, this.staticRulesId);
    else {
      var i = za(vn(this.rules, n, t, r)), s = Ki(hn(this.baseHash, i) >>> 0);
      if (!t.hasNameForId(this.componentId, s)) {
        var a = r(i, ".".concat(s), void 0, this.componentId);
        t.insertRules(this.componentId, s, a);
      }
      o = xn(o, s), this.staticRulesId = s;
    }
    else {
      for (var c = hn(this.baseHash, r.hash), l = "", u = 0; u < this.rules.length; u++) {
        var d = this.rules[u];
        if (typeof d == "string") l += d, process.env.NODE_ENV !== "production" && (c = hn(c, d));
        else if (d) {
          var f = za(vn(d, n, t, r));
          c = hn(c, f + u), l += f;
        }
      }
      if (l) {
        var v = Ki(c >>> 0);
        t.hasNameForId(this.componentId, v) || t.insertRules(this.componentId, v, r(l, ".".concat(v), void 0, this.componentId)), o = xn(o, v);
      }
    }
    return o;
  }, e;
}(), zl = je.createContext(void 0);
zl.Consumer;
var Ai = {}, Xa = /* @__PURE__ */ new Set();
function _d(e, n, t) {
  var r = ea(e), o = e, i = !_i(e), s = n.attrs, a = s === void 0 ? ni : s, c = n.componentId, l = c === void 0 ? function(_, y) {
    var A = typeof _ != "string" ? "sc" : La(_);
    Ai[A] = (Ai[A] || 0) + 1;
    var E = "".concat(A, "-").concat($0(ti + A + Ai[A]));
    return y ? "".concat(y, "-").concat(E) : E;
  }(n.displayName, n.parentComponentId) : c, u = n.displayName, d = u === void 0 ? function(_) {
    return _i(_) ? "styled.".concat(_) : "Styled(".concat(Rl(_), ")");
  }(e) : u, f = n.displayName && n.componentId ? "".concat(La(n.displayName), "-").concat(n.componentId) : n.componentId || l, v = r && o.attrs ? o.attrs.concat(a).filter(Boolean) : a, m = n.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var x = o.shouldForwardProp;
    if (n.shouldForwardProp) {
      var h = n.shouldForwardProp;
      m = function(_, y) {
        return x(_, y) && h(_, y);
      };
    } else m = x;
  }
  var S = new Cd(t, f, r ? o.componentStyle : void 0);
  function b(_, y) {
    return function(A, E, P) {
      var D = A.attrs, W = A.componentStyle, ee = A.defaultProps, $ = A.foldedComponentIds, N = A.styledComponentId, z = A.target, q = je.useContext(zl), X = Ua(), J = A.shouldForwardProp || X.shouldForwardProp;
      process.env.NODE_ENV !== "production" && Aa(N);
      var G = q0(E, q, ee) || Un, Z = function(le, de, pe) {
        for (var k, U = nt(nt({}, de), { className: void 0, theme: pe }), j = 0; j < le.length; j += 1) {
          var B = qn(k = le[j]) ? k(U) : k;
          for (var T in B) U[T] = T === "className" ? xn(U[T], B[T]) : T === "style" ? nt(nt({}, U[T]), B[T]) : B[T];
        }
        return de.className && (U.className = xn(U.className, de.className)), U;
      }(D, E, G), re = Z.as || z, oe = {};
      for (var K in Z) Z[K] === void 0 || K[0] === "$" || K === "as" || K === "theme" && Z.theme === G || (K === "forwardedAs" ? oe.as = Z.forwardedAs : J && !J(K, re) || (oe[K] = Z[K], J || process.env.NODE_ENV !== "development" || w0(K) || Xa.has(K) || !Gi.has(re) || (Xa.add(K), console.warn('styled-components: it looks like an unknown prop "'.concat(K, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var te = function(le, de) {
        var pe = Ua(), k = le.generateAndInjectStyles(de, pe.styleSheet, pe.stylis);
        return process.env.NODE_ENV !== "production" && Aa(k), k;
      }(W, Z);
      process.env.NODE_ENV !== "production" && A.warnTooManyClasses && A.warnTooManyClasses(te);
      var fe = xn($, N);
      return te && (fe += " " + te), Z.className && (fe += " " + Z.className), oe[_i(re) && !Gi.has(re) ? "class" : "className"] = fe, P && (oe.ref = P), f0(re, oe);
    }(g, _, y);
  }
  b.displayName = d;
  var g = je.forwardRef(b);
  return g.attrs = v, g.componentStyle = S, g.displayName = d, g.shouldForwardProp = m, g.foldedComponentIds = r ? xn(o.foldedComponentIds, o.styledComponentId) : "", g.styledComponentId = f, g.target = r ? o.target : e, Object.defineProperty(g, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(_) {
    this._foldedDefaultProps = r ? function(y) {
      for (var A = [], E = 1; E < arguments.length; E++) A[E - 1] = arguments[E];
      for (var P = 0, D = A; P < D.length; P++) Zi(y, D[P], !0);
      return y;
    }({}, o.defaultProps, _) : _;
  } }), process.env.NODE_ENV !== "production" && (U0(d, f), g.warnTooManyClasses = /* @__PURE__ */ function(_, y) {
    var A = {}, E = !1;
    return function(P) {
      if (!E && (A[P] = !0, Object.keys(A).length >= 200)) {
        var D = y ? ' with the id of "'.concat(y, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(_).concat(D, `.
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
  }(d, f)), ta(g, function() {
    return ".".concat(g.styledComponentId);
  }), i && Nl(g, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), g;
}
function Ya(e, n) {
  for (var t = [e[0]], r = 0, o = n.length; r < o; r += 1) t.push(n[r], e[r + 1]);
  return t;
}
var $a = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function Ad(e) {
  for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
  if (qn(e) || Wn(e)) return $a(vn(Ya(ni, zn([e], n, !0))));
  var r = e;
  return n.length === 0 && r.length === 1 && typeof r[0] == "string" ? vn(r) : $a(vn(Ya(r, n)));
}
function Qi(e, n, t) {
  if (t === void 0 && (t = Un), !n) throw Jn(1, n);
  var r = function(o) {
    for (var i = [], s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
    return e(n, t, Ad.apply(void 0, zn([o], i, !1)));
  };
  return r.attrs = function(o) {
    return Qi(e, n, nt(nt({}, t), { attrs: Array.prototype.concat(t.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return Qi(e, n, nt(nt({}, t), o));
  }, r;
}
var Vl = function(e) {
  return Qi(_d, e);
}, wt = Vl;
Gi.forEach(function(e) {
  wt[e] = Vl(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Zr = "__sc-".concat(Cn, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[Zr] || (window[Zr] = 0), window[Zr] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Zr] += 1);
const zr = _n;
(function(e, n) {
  const t = _n, r = e();
  for (; ; )
    try {
      if (-parseInt(t(144)) / 1 * (-parseInt(t(153)) / 2) + -parseInt(t(160)) / 3 + -parseInt(t(161)) / 4 + parseInt(t(166)) / 5 * (-parseInt(t(139)) / 6) + -parseInt(t(162)) / 7 + parseInt(t(147)) / 8 * (parseInt(t(148)) / 9) + -parseInt(t(158)) / 10 * (-parseInt(t(155)) / 11) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(jo, 443684);
function jo() {
  const e = ["trace", "__proto__", "canvas", "log", "2RDZkfI", "nction() ", "13487144FeMINw", "div", "console", "10zeyGNY", "error", "1556928DDfoaX", "2933160KOuRzj", "1114827MfHLkr", "length", "table", 'rn this")(', "54335qcOiIA", "bind", "return (fu", "exception", 'ctor("retu', "span", "warn", "126udyYTJ", "prototype", "apply", "constructo", "toString", "288349OnhIdV", "info", "{}.constru", "4551720eTGfCd", "9JZSLSy"];
  return jo = function() {
    return e;
  }, jo();
}
const ur = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = _n;
      if (t) {
        const i = t[o(141)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), Td = ur(void 0, function() {
  const e = _n, n = function() {
    const i = _n;
    let s;
    try {
      s = Function(i(168) + i(154) + (i(146) + i(170) + i(165) + " )") + ");")();
    } catch {
      s = window;
    }
    return s;
  }, t = n(), r = t[e(157)] = t[e(157)] || {}, o = [e(152), e(138), e(145), e(159), e(169), e(164), e(149)];
  for (let i = 0; i < o[e(163)]; i++) {
    const s = ur[e(142) + "r"][e(140)][e(167)](ur), a = o[i], c = r[a] || s;
    s[e(150)] = ur[e(167)](ur), s[e(143)] = c[e(143)][e(167)](c), r[a] = s;
  }
});
Td();
const Od = wt[zr(156)]`
  flex-direction: column;
  border-radius: 15px;
  border: 3px solid #a0beeb;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
  justify-items: center;
  align-items: center;
`;
function _n(e, n) {
  const t = jo();
  return _n = function(r, o) {
    return r = r - 138, t[r];
  }, _n(e, n);
}
const Rd = wt[zr(156)]`
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
`, kd = wt[zr(151)]`
  border-radius: 7px;
  display: inline;
  padding: 0;
  &:focus-visible {
    outline: none;
  }
`, Pd = wt[zr(171)]`
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
`, Id = wt[zr(156)]`
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
const mo = /* @__PURE__ */ Object.create(null);
Object.keys(Dt).forEach((e) => {
  mo[Dt[e]] = e;
});
const es = { type: "error", data: "parser error" }, Hl = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", Ul = typeof ArrayBuffer == "function", ql = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer, na = ({ type: e, data: n }, t, r) => Hl && n instanceof Blob ? t ? r(n) : Ga(n, r) : Ul && (n instanceof ArrayBuffer || ql(n)) ? t ? r(n) : Ga(new Blob([n]), r) : r(Dt[e] + (n || "")), Ga = (e, n) => {
  const t = new FileReader();
  return t.onload = function() {
    const r = t.result.split(",")[1];
    n("b" + (r || ""));
  }, t.readAsDataURL(e);
};
function Ka(e) {
  return e instanceof Uint8Array ? e : e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
let Ti;
function Nd(e, n) {
  if (Hl && e.data instanceof Blob)
    return e.data.arrayBuffer().then(Ka).then(n);
  if (Ul && (e.data instanceof ArrayBuffer || ql(e.data)))
    return n(Ka(e.data));
  na(e, !1, (t) => {
    Ti || (Ti = new TextEncoder()), n(Ti.encode(t));
  });
}
const Za = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Tr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < Za.length; e++)
  Tr[Za.charCodeAt(e)] = e;
const jd = (e) => {
  let n = e.length * 0.75, t = e.length, r, o = 0, i, s, a, c;
  e[e.length - 1] === "=" && (n--, e[e.length - 2] === "=" && n--);
  const l = new ArrayBuffer(n), u = new Uint8Array(l);
  for (r = 0; r < t; r += 4)
    i = Tr[e.charCodeAt(r)], s = Tr[e.charCodeAt(r + 1)], a = Tr[e.charCodeAt(r + 2)], c = Tr[e.charCodeAt(r + 3)], u[o++] = i << 2 | s >> 4, u[o++] = (s & 15) << 4 | a >> 2, u[o++] = (a & 3) << 6 | c & 63;
  return l;
}, Ld = typeof ArrayBuffer == "function", ra = (e, n) => {
  if (typeof e != "string")
    return {
      type: "message",
      data: Wl(e, n)
    };
  const t = e.charAt(0);
  return t === "b" ? {
    type: "message",
    data: Md(e.substring(1), n)
  } : mo[t] ? e.length > 1 ? {
    type: mo[t],
    data: e.substring(1)
  } : {
    type: mo[t]
  } : es;
}, Md = (e, n) => {
  if (Ld) {
    const t = jd(e);
    return Wl(t, n);
  } else
    return { base64: !0, data: e };
}, Wl = (e, n) => {
  switch (n) {
    case "blob":
      return e instanceof Blob ? e : new Blob([e]);
    case "arraybuffer":
    default:
      return e instanceof ArrayBuffer ? e : e.buffer;
  }
}, Xl = "", Dd = (e, n) => {
  const t = e.length, r = new Array(t);
  let o = 0;
  e.forEach((i, s) => {
    na(i, !1, (a) => {
      r[s] = a, ++o === t && n(r.join(Xl));
    });
  });
}, Bd = (e, n) => {
  const t = e.split(Xl), r = [];
  for (let o = 0; o < t.length; o++) {
    const i = ra(t[o], n);
    if (r.push(i), i.type === "error")
      break;
  }
  return r;
};
function Fd() {
  return new TransformStream({
    transform(e, n) {
      Nd(e, (t) => {
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
function zd(e, n) {
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
            a.enqueue(es);
            break;
          }
          o = u * Math.pow(2, 32) + l.getUint32(4), r = 3;
        } else {
          if (Jr(t) < o)
            break;
          const c = Qr(t, o);
          a.enqueue(ra(i ? c : Oi.decode(c), n)), r = 0;
        }
        if (o === 0 || o > e) {
          a.enqueue(es);
          break;
        }
      }
    }
  });
}
const Yl = 4;
function Fe(e) {
  if (e) return Vd(e);
}
function Vd(e) {
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
const ri = typeof Promise == "function" && typeof Promise.resolve == "function" ? (n) => Promise.resolve().then(n) : (n, t) => t(n, 0), ft = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), Hd = "arraybuffer";
function $l(e, ...n) {
  return n.reduce((t, r) => (e.hasOwnProperty(r) && (t[r] = e[r]), t), {});
}
const Ud = ft.setTimeout, qd = ft.clearTimeout;
function oi(e, n) {
  n.useNativeTimers ? (e.setTimeoutFn = Ud.bind(ft), e.clearTimeoutFn = qd.bind(ft)) : (e.setTimeoutFn = ft.setTimeout.bind(ft), e.clearTimeoutFn = ft.clearTimeout.bind(ft));
}
const Wd = 1.33;
function Xd(e) {
  return typeof e == "string" ? Yd(e) : Math.ceil((e.byteLength || e.size) * Wd);
}
function Yd(e) {
  let n = 0, t = 0;
  for (let r = 0, o = e.length; r < o; r++)
    n = e.charCodeAt(r), n < 128 ? t += 1 : n < 2048 ? t += 2 : n < 55296 || n >= 57344 ? t += 3 : (r++, t += 4);
  return t;
}
function Gl() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function $d(e) {
  let n = "";
  for (let t in e)
    e.hasOwnProperty(t) && (n.length && (n += "&"), n += encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
  return n;
}
function Gd(e) {
  let n = {}, t = e.split("&");
  for (let r = 0, o = t.length; r < o; r++) {
    let i = t[r].split("=");
    n[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
  }
  return n;
}
class Kd extends Error {
  constructor(n, t, r) {
    super(n), this.description = t, this.context = r, this.type = "TransportError";
  }
}
class oa extends Fe {
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
    return super.emitReserved("error", new Kd(n, t, r)), this;
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
    const t = ra(n, this.socket.binaryType);
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
    const t = $d(n);
    return t.length ? "?" + t : "";
  }
}
class Zd extends oa {
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
    Bd(n, this.socket.binaryType).forEach(t), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
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
    this.writable = !1, Dd(n, (t) => {
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
    return this.opts.timestampRequests !== !1 && (t[this.opts.timestampParam] = Gl()), !this.supportsBinary && !t.sid && (t.b64 = 1), this.createUri(n, t);
  }
}
let Kl = !1;
try {
  Kl = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const Jd = Kl;
function Qd() {
}
class eh extends Zd {
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
let Bn = class go extends Fe {
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
    const t = $l(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
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
      if (this._xhr.onreadystatechange = Qd, n)
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
Bn.requestsCount = 0;
Bn.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", Ja);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in ft ? "pagehide" : "unload";
    addEventListener(e, Ja, !1);
  }
}
function Ja() {
  for (let e in Bn.requests)
    Bn.requests.hasOwnProperty(e) && Bn.requests[e].abort();
}
const th = function() {
  const e = Zl({
    xdomain: !1
  });
  return e && e.responseType !== null;
}();
class nh extends eh {
  constructor(n) {
    super(n);
    const t = n && n.forceBase64;
    this.supportsBinary = th && !t;
  }
  request(n = {}) {
    return Object.assign(n, { xd: this.xd }, this.opts), new Bn(Zl, this.uri(), n);
  }
}
function Zl(e) {
  const n = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!n || Jd))
      return new XMLHttpRequest();
  } catch {
  }
  if (!n)
    try {
      return new ft[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const Jl = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class rh extends oa {
  get name() {
    return "websocket";
  }
  doOpen() {
    const n = this.uri(), t = this.opts.protocols, r = Jl ? {} : $l(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
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
      na(r, this.supportsBinary, (i) => {
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
    return this.opts.timestampRequests && (t[this.opts.timestampParam] = Gl()), this.supportsBinary || (t.b64 = 1), this.createUri(n, t);
  }
}
const Ri = ft.WebSocket || ft.MozWebSocket;
class oh extends rh {
  createSocket(n, t, r) {
    return Jl ? new Ri(n, t, r) : t ? new Ri(n, t) : new Ri(n);
  }
  doWrite(n, t) {
    this.ws.send(t);
  }
}
class ih extends oa {
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
        const t = zd(Number.MAX_SAFE_INTEGER, this.socket.binaryType), r = n.readable.pipeThrough(t).getReader(), o = Fd();
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
function ts(e) {
  if (e.length > 8e3)
    throw "URI too long";
  const n = e, t = e.indexOf("["), r = e.indexOf("]");
  t != -1 && r != -1 && (e = e.substring(0, t) + e.substring(t, r).replace(/:/g, ";") + e.substring(r, e.length));
  let o = ah.exec(e || ""), i = {}, s = 14;
  for (; s--; )
    i[ch[s]] = o[s] || "";
  return t != -1 && r != -1 && (i.source = n, i.host = i.host.substring(1, i.host.length - 1).replace(/;/g, ":"), i.authority = i.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), i.ipv6uri = !0), i.pathNames = lh(i, i.path), i.queryKey = uh(i, i.query), i;
}
function lh(e, n) {
  const t = /\/{2,9}/g, r = n.replace(t, "/").split("/");
  return (n.slice(0, 1) == "/" || n.length === 0) && r.splice(0, 1), n.slice(-1) == "/" && r.splice(r.length - 1, 1), r;
}
function uh(e, n) {
  const t = {};
  return n.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(r, o, i) {
    o && (t[o] = i);
  }), t;
}
const ns = typeof addEventListener == "function" && typeof removeEventListener == "function", vo = [];
ns && addEventListener("offline", () => {
  vo.forEach((e) => e());
}, !1);
class en extends Fe {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(n, t) {
    if (super(), this.binaryType = Hd, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, n && typeof n == "object" && (t = n, n = null), n) {
      const r = ts(n);
      t.hostname = r.host, t.secure = r.protocol === "https" || r.protocol === "wss", t.port = r.port, r.query && (t.query = r.query);
    } else t.host && (t.hostname = ts(t.host).host);
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
    }, t), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = Gd(this.opts.query)), ns && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
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
    t.EIO = Yl, t.transport = n, this.id && (t.sid = this.id);
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
    const n = this.opts.rememberUpgrade && en.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
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
    this.readyState = "open", en.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
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
      if (o && (t += Xd(o)), r > 0 && t > this._maxPayload)
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
    if (en.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
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
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), ns && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const r = vo.indexOf(this._offlineEventListener);
        r !== -1 && vo.splice(r, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", n, t), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
en.protocol = Yl;
class fh extends en {
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
    en.priorWebsocketSuccess = !1;
    const o = () => {
      r || (t.send([{ type: "ping", data: "probe" }]), t.once("packet", (d) => {
        if (!r)
          if (d.type === "pong" && d.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", t), !t)
              return;
            en.priorWebsocketSuccess = t.name === "websocket", this.transport.pause(() => {
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
let dh = class extends fh {
  constructor(n, t = {}) {
    const r = typeof n == "object" ? n : t;
    (!r.transports || r.transports && typeof r.transports[0] == "string") && (r.transports = (r.transports || ["polling", "websocket", "webtransport"]).map((o) => sh[o]).filter((o) => !!o)), super(n, r);
  }
};
function hh(e, n = "", t) {
  let r = e;
  t = t || typeof location < "u" && location, e == null && (e = t.protocol + "//" + t.host), typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = t.protocol + e : e = t.host + e), /^(https?|wss?):\/\//.test(e) || (typeof t < "u" ? e = t.protocol + "//" + e : e = "https://" + e), r = ts(e)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
  const i = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return r.id = r.protocol + "://" + i + ":" + r.port + n, r.href = r.protocol + "://" + i + (t && t.port === r.port ? "" : ":" + r.port), r;
}
const ph = typeof ArrayBuffer == "function", xh = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer, Ql = Object.prototype.toString, mh = typeof Blob == "function" || typeof Blob < "u" && Ql.call(Blob) === "[object BlobConstructor]", gh = typeof File == "function" || typeof File < "u" && Ql.call(File) === "[object FileConstructor]";
function ia(e) {
  return ph && (e instanceof ArrayBuffer || xh(e)) || mh && e instanceof Blob || gh && e instanceof File;
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
  if (ia(e))
    return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return yo(e.toJSON(), !0);
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && yo(e[t]))
      return !0;
  return !1;
}
function vh(e) {
  const n = [], t = e.data, r = e;
  return r.data = rs(t, n), r.attachments = n.length, { packet: r, buffers: n };
}
function rs(e, n) {
  if (!e)
    return e;
  if (ia(e)) {
    const t = { _placeholder: !0, num: n.length };
    return n.push(e), t;
  } else if (Array.isArray(e)) {
    const t = new Array(e.length);
    for (let r = 0; r < e.length; r++)
      t[r] = rs(e[r], n);
    return t;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const t = {};
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (t[r] = rs(e[r], n));
    return t;
  }
  return e;
}
function yh(e, n) {
  return e.data = os(e.data, n), delete e.attachments, e;
}
function os(e, n) {
  if (!e)
    return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < n.length)
      return n[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let t = 0; t < e.length; t++)
      e[t] = os(e[t], n);
  else if (typeof e == "object")
    for (const t in e)
      Object.prototype.hasOwnProperty.call(e, t) && (e[t] = os(e[t], n));
  return e;
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
var ue;
(function(e) {
  e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK";
})(ue || (ue = {}));
class wh {
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
    const t = vh(n), r = this.encodeAsString(t.packet), o = t.buffers;
    return o.unshift(r), o;
  }
}
function Qa(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
class sa extends Fe {
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
      r || t.type === ue.BINARY_ACK ? (t.type = r ? ue.EVENT : ue.ACK, this.reconstructor = new Eh(t), t.attachments === 0 && super.emitReserved("decoded", t)) : super.emitReserved("decoded", t);
    } else if (ia(n) || n.base64)
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
      if (sa.isPayloadValid(r.type, i))
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
        return Qa(t);
      case ue.DISCONNECT:
        return t === void 0;
      case ue.CONNECT_ERROR:
        return typeof t == "string" || Qa(t);
      case ue.EVENT:
      case ue.BINARY_EVENT:
        return Array.isArray(t) && (typeof t[0] == "number" || typeof t[0] == "string" && bh.indexOf(t[0]) === -1);
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
class Eh {
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
      const t = yh(this.reconPack, this.buffers);
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
const Ch = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: sa,
  Encoder: wh,
  get PacketType() {
    return ue;
  },
  protocol: Sh
}, Symbol.toStringTag, { value: "Module" }));
function xt(e, n, t) {
  return e.on(n, t), function() {
    e.off(n, t);
  };
}
const _h = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class eu extends Fe {
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
      xt(n, "open", this.onopen.bind(this)),
      xt(n, "packet", this.onpacket.bind(this)),
      xt(n, "error", this.onerror.bind(this)),
      xt(n, "close", this.onclose.bind(this))
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
    if (_h.hasOwnProperty(n))
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
function Qn(e) {
  e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0;
}
Qn.prototype.duration = function() {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var n = Math.random(), t = Math.floor(n * this.jitter * e);
    e = (Math.floor(n * 10) & 1) == 0 ? e - t : e + t;
  }
  return Math.min(e, this.max) | 0;
};
Qn.prototype.reset = function() {
  this.attempts = 0;
};
Qn.prototype.setMin = function(e) {
  this.ms = e;
};
Qn.prototype.setMax = function(e) {
  this.max = e;
};
Qn.prototype.setJitter = function(e) {
  this.jitter = e;
};
class is extends Fe {
  constructor(n, t) {
    var r;
    super(), this.nsps = {}, this.subs = [], n && typeof n == "object" && (t = n, n = void 0), t = t || {}, t.path = t.path || "/socket.io", this.opts = t, oi(this, t), this.reconnection(t.reconnection !== !1), this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0), this.reconnectionDelay(t.reconnectionDelay || 1e3), this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3), this.randomizationFactor((r = t.randomizationFactor) !== null && r !== void 0 ? r : 0.5), this.backoff = new Qn({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(t.timeout == null ? 2e4 : t.timeout), this._readyState = "closed", this.uri = n;
    const o = t.parser || Ch;
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
    this.engine = new dh(this.uri, this.opts);
    const t = this.engine, r = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const o = xt(t, "open", function() {
      r.onopen(), n && n();
    }), i = (a) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", a), n ? n(a) : this.maybeReconnectOnOpen();
    }, s = xt(t, "error", i);
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
      xt(n, "ping", this.onping.bind(this)),
      xt(n, "data", this.ondata.bind(this)),
      xt(n, "error", this.onerror.bind(this)),
      xt(n, "close", this.onclose.bind(this)),
      // @ts-ignore
      xt(this.decoder, "decoded", this.ondecoded.bind(this))
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
    return r ? this._autoConnect && !r.active && r.connect() : (r = new eu(this, n, t), this.nsps[n] = r), r;
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
const fr = {};
function bo(e, n) {
  typeof e == "object" && (n = e, e = void 0), n = n || {};
  const t = hh(e, n.path || "/socket.io"), r = t.source, o = t.id, i = t.path, s = fr[o] && i in fr[o].nsps, a = n.forceNew || n["force new connection"] || n.multiplex === !1 || s;
  let c;
  return a ? c = new is(r, n) : (fr[o] || (fr[o] = new is(r, n)), c = fr[o]), t.query && !n.query && (n.query = t.queryKey), c.socket(t.path, n);
}
Object.assign(bo, {
  Manager: is,
  Socket: eu,
  io: bo,
  connect: bo
});
var ki = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var ec;
function Ah() {
  return ec || (ec = 1, function(e) {
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
var Th = Ah();
const Ge = /* @__PURE__ */ m0(Th);
function Bt() {
  return Bt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, Bt.apply(null, arguments);
}
function ye(e) {
  "@babel/helpers - typeof";
  return ye = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, ye(e);
}
var Oh = Symbol.for("react.element"), Rh = Symbol.for("react.transitional.element"), kh = Symbol.for("react.fragment");
function Ph(e) {
  return (
    // Base object type
    e && ye(e) === "object" && // React Element type
    (e.$$typeof === Oh || e.$$typeof === Rh) && // React Fragment type
    e.type === kh
  );
}
var ss = {}, aa = [], Ih = function(n) {
  aa.push(n);
};
function ca(e, n) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var t = aa.reduce(function(r, o) {
      return o(r ?? "", "warning");
    }, n);
    t && console.error("Warning: ".concat(t));
  }
}
function Nh(e, n) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var t = aa.reduce(function(r, o) {
      return o(r ?? "", "note");
    }, n);
    t && console.warn("Note: ".concat(t));
  }
}
function tu() {
  ss = {};
}
function nu(e, n, t) {
  !n && !ss[t] && (e(!1, t), ss[t] = !0);
}
function on(e, n) {
  nu(ca, e, n);
}
function jh(e, n) {
  nu(Nh, e, n);
}
on.preMessage = Ih;
on.resetWarned = tu;
on.noteOnce = jh;
function Lh(e, n) {
  if (ye(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(e, n);
    if (ye(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function ru(e) {
  var n = Lh(e, "string");
  return ye(n) == "symbol" ? n : n + "";
}
function H(e, n, t) {
  return (n = ru(n)) in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = t, e;
}
function tc(e, n) {
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
    n % 2 ? tc(Object(t), !0).forEach(function(r) {
      H(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : tc(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function nc(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function Mh(e) {
  return e && ye(e) === "object" && nc(e.nativeElement) ? e.nativeElement : nc(e) ? e : null;
}
function Dh(e) {
  var n = Mh(e);
  if (n)
    return n;
  if (e instanceof je.Component) {
    var t;
    return (t = Ta.findDOMNode) === null || t === void 0 ? void 0 : t.call(Ta, e);
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
var rc;
function Bh() {
  if (rc) return me;
  rc = 1;
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
var oc;
function Fh() {
  return oc || (oc = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), m = !1, x = !1, h = !1, S = !1, b = !1, g;
    g = Symbol.for("react.module.reference");
    function _(L) {
      return !!(typeof L == "string" || typeof L == "function" || L === t || L === o || b || L === r || L === l || L === u || S || L === v || m || x || h || typeof L == "object" && L !== null && (L.$$typeof === f || L.$$typeof === d || L.$$typeof === i || L.$$typeof === s || L.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      L.$$typeof === g || L.getModuleId !== void 0));
    }
    function y(L) {
      if (typeof L == "object" && L !== null) {
        var ke = L.$$typeof;
        switch (ke) {
          case e:
            var Ce = L.type;
            switch (Ce) {
              case t:
              case o:
              case r:
              case l:
              case u:
                return Ce;
              default:
                var at = Ce && Ce.$$typeof;
                switch (at) {
                  case a:
                  case s:
                  case c:
                  case f:
                  case d:
                  case i:
                    return at;
                  default:
                    return ke;
                }
            }
          case n:
            return ke;
        }
      }
    }
    var A = s, E = i, P = e, D = c, W = t, ee = f, $ = d, N = n, z = o, q = r, X = l, J = u, G = !1, Z = !1;
    function re(L) {
      return G || (G = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function oe(L) {
      return Z || (Z = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function K(L) {
      return y(L) === s;
    }
    function te(L) {
      return y(L) === i;
    }
    function fe(L) {
      return typeof L == "object" && L !== null && L.$$typeof === e;
    }
    function le(L) {
      return y(L) === c;
    }
    function de(L) {
      return y(L) === t;
    }
    function pe(L) {
      return y(L) === f;
    }
    function k(L) {
      return y(L) === d;
    }
    function U(L) {
      return y(L) === n;
    }
    function j(L) {
      return y(L) === o;
    }
    function B(L) {
      return y(L) === r;
    }
    function T(L) {
      return y(L) === l;
    }
    function ne(L) {
      return y(L) === u;
    }
    ge.ContextConsumer = A, ge.ContextProvider = E, ge.Element = P, ge.ForwardRef = D, ge.Fragment = W, ge.Lazy = ee, ge.Memo = $, ge.Portal = N, ge.Profiler = z, ge.StrictMode = q, ge.Suspense = X, ge.SuspenseList = J, ge.isAsyncMode = re, ge.isConcurrentMode = oe, ge.isContextConsumer = K, ge.isContextProvider = te, ge.isElement = fe, ge.isForwardRef = le, ge.isFragment = de, ge.isLazy = pe, ge.isMemo = k, ge.isPortal = U, ge.isProfiler = j, ge.isStrictMode = B, ge.isSuspense = T, ge.isSuspenseList = ne, ge.isValidElementType = _, ge.typeOf = y;
  }()), ge;
}
var ic;
function zh() {
  return ic || (ic = 1, process.env.NODE_ENV === "production" ? eo.exports = Bh() : eo.exports = Fh()), eo.exports;
}
var Pi = zh();
function ou(e, n, t) {
  var r = w.useRef({});
  return (!("value" in r.current) || t(r.current.condition, n)) && (r.current.value = e(), r.current.condition = n), r.current.value;
}
var Vh = Number(h0.split(".")[0]), iu = function(n, t) {
  typeof n == "function" ? n(t) : ye(n) === "object" && n && "current" in n && (n.current = t);
}, Hh = function() {
  for (var n = arguments.length, t = new Array(n), r = 0; r < n; r++)
    t[r] = arguments[r];
  var o = t.filter(Boolean);
  return o.length <= 1 ? o[0] : function(i) {
    t.forEach(function(s) {
      iu(s, i);
    });
  };
}, Uh = function(n) {
  var t, r;
  if (!n)
    return !1;
  if (su(n) && Vh >= 19)
    return !0;
  var o = Pi.isMemo(n) ? n.type.type : n.type;
  return !(typeof o == "function" && !((t = o.prototype) !== null && t !== void 0 && t.render) && o.$$typeof !== Pi.ForwardRef || typeof n == "function" && !((r = n.prototype) !== null && r !== void 0 && r.render) && n.$$typeof !== Pi.ForwardRef);
};
function su(e) {
  return /* @__PURE__ */ d0(e) && !Ph(e);
}
var qh = function(n) {
  if (n && su(n)) {
    var t = n;
    return t.props.propertyIsEnumerable("ref") ? t.props.ref : t.ref;
  }
  return null;
};
function Et(e, n) {
  if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function sc(e, n) {
  for (var t = 0; t < n.length; t++) {
    var r = n[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, ru(r.key), r);
  }
}
function Ct(e, n, t) {
  return n && sc(e.prototype, n), t && sc(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function as(e, n) {
  return as = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, r) {
    return t.__proto__ = r, t;
  }, as(e, n);
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
  }), n && as(e, n);
}
function Xn(e) {
  return Xn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Xn(e);
}
function la() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (la = function() {
    return !!e;
  })();
}
function yn(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function au(e, n) {
  if (n && (ye(n) == "object" || typeof n == "function")) return n;
  if (n !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return yn(e);
}
function ii(e) {
  var n = la();
  return function() {
    var t, r = Xn(e);
    if (n) {
      var o = Xn(this).constructor;
      t = Reflect.construct(r, arguments, o);
    } else t = r.apply(this, arguments);
    return au(this, t);
  };
}
function cs(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, r = Array(n); t < n; t++) r[t] = e[t];
  return r;
}
function Wh(e) {
  if (Array.isArray(e)) return cs(e);
}
function cu(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function ua(e, n) {
  if (e) {
    if (typeof e == "string") return cs(e, n);
    var t = {}.toString.call(e).slice(8, -1);
    return t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set" ? Array.from(e) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? cs(e, n) : void 0;
  }
}
function Xh() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Wt(e) {
  return Wh(e) || cu(e) || ua(e) || Xh();
}
var lu = function(n) {
  return +setTimeout(n, 16);
}, uu = function(n) {
  return clearTimeout(n);
};
typeof window < "u" && "requestAnimationFrame" in window && (lu = function(n) {
  return window.requestAnimationFrame(n);
}, uu = function(n) {
  return window.cancelAnimationFrame(n);
});
var ac = 0, si = /* @__PURE__ */ new Map();
function fu(e) {
  si.delete(e);
}
var Lo = function(n) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  ac += 1;
  var r = ac;
  function o(i) {
    if (i === 0)
      fu(r), n();
    else {
      var s = lu(function() {
        o(i - 1);
      });
      si.set(r, s);
    }
  }
  return o(t), r;
};
Lo.cancel = function(e) {
  var n = si.get(e);
  return fu(e), uu(n);
};
process.env.NODE_ENV !== "production" && (Lo.ids = function() {
  return si;
});
function du(e) {
  if (Array.isArray(e)) return e;
}
function Yh(e, n) {
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
function hu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ae(e, n) {
  return du(e) || Yh(e, n) || ua(e, n) || hu();
}
function Ir(e) {
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
function Yt() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function $h(e, n) {
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
var cc = "data-rc-order", lc = "data-rc-priority", Gh = "rc-util-key", ls = /* @__PURE__ */ new Map();
function pu() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.mark;
  return n ? n.startsWith("data-") ? n : "data-".concat(n) : Gh;
}
function ai(e) {
  if (e.attachTo)
    return e.attachTo;
  var n = document.querySelector("head");
  return n || document.body;
}
function Kh(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function fa(e) {
  return Array.from((ls.get(e) || e).children).filter(function(n) {
    return n.tagName === "STYLE";
  });
}
function xu(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Yt())
    return null;
  var t = n.csp, r = n.prepend, o = n.priority, i = o === void 0 ? 0 : o, s = Kh(r), a = s === "prependQueue", c = document.createElement("style");
  c.setAttribute(cc, s), a && i && c.setAttribute(lc, "".concat(i)), t != null && t.nonce && (c.nonce = t == null ? void 0 : t.nonce), c.innerHTML = e;
  var l = ai(n), u = l.firstChild;
  if (r) {
    if (a) {
      var d = (n.styles || fa(l)).filter(function(f) {
        if (!["prepend", "prependQueue"].includes(f.getAttribute(cc)))
          return !1;
        var v = Number(f.getAttribute(lc) || 0);
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
function mu(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = ai(n);
  return (n.styles || fa(t)).find(function(r) {
    return r.getAttribute(pu(n)) === e;
  });
}
function gu(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = mu(e, n);
  if (t) {
    var r = ai(n);
    r.removeChild(t);
  }
}
function Zh(e, n) {
  var t = ls.get(e);
  if (!t || !$h(document, t)) {
    var r = xu("", n), o = r.parentNode;
    ls.set(e, o), e.removeChild(r);
  }
}
function bn(e, n) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = ai(t), o = fa(r), i = F(F({}, t), {}, {
    styles: o
  });
  Zh(r, i);
  var s = mu(n, i);
  if (s) {
    var a, c;
    if ((a = i.csp) !== null && a !== void 0 && a.nonce && s.nonce !== ((c = i.csp) === null || c === void 0 ? void 0 : c.nonce)) {
      var l;
      s.nonce = (l = i.csp) === null || l === void 0 ? void 0 : l.nonce;
    }
    return s.innerHTML !== e && (s.innerHTML = e), s;
  }
  var u = xu(e, i);
  return u.setAttribute(pu(i), n), u;
}
function Jh(e, n) {
  if (e == null) return {};
  var t = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (n.indexOf(r) !== -1) continue;
    t[r] = e[r];
  }
  return t;
}
function Nr(e, n) {
  if (e == null) return {};
  var t, r, o = Jh(e, n);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++) t = i[r], n.indexOf(t) === -1 && {}.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
  }
  return o;
}
function Qh(e, n) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = /* @__PURE__ */ new Set();
  function o(i, s) {
    var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, c = r.has(i);
    if (on(!c, "Warning: There may be circular references"), c)
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
var ep = "%";
function us(e) {
  return e.join(ep);
}
var tp = /* @__PURE__ */ function() {
  function e(n) {
    Et(this, e), H(this, "instanceId", void 0), H(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = n;
  }
  return Ct(e, [{
    key: "get",
    value: function(t) {
      return this.opGet(us(t));
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
      return this.opUpdate(us(t), r);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(t, r) {
      var o = this.cache.get(t), i = r(o);
      i === null ? this.cache.delete(t) : this.cache.set(t, i);
    }
  }]), e;
}(), Yn = "data-token-hash", bt = "data-css-hash", np = "data-cache-path", Jt = "__cssinjs_instance__";
function rp() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var n = document.body.querySelectorAll("style[".concat(bt, "]")) || [], t = document.head.firstChild;
    Array.from(n).forEach(function(o) {
      o[Jt] = o[Jt] || e, o[Jt] === e && document.head.insertBefore(o, t);
    });
    var r = {};
    Array.from(document.querySelectorAll("style[".concat(bt, "]"))).forEach(function(o) {
      var i = o.getAttribute(bt);
      if (r[i]) {
        if (o[Jt] === e) {
          var s;
          (s = o.parentNode) === null || s === void 0 || s.removeChild(o);
        }
      } else
        r[i] = !0;
    });
  }
  return new tp(e);
}
var Hr = /* @__PURE__ */ w.createContext({
  hashPriority: "low",
  cache: rp(),
  defaultCache: !0
});
function op(e, n) {
  if (e.length !== n.length)
    return !1;
  for (var t = 0; t < e.length; t++)
    if (e[t] !== n[t])
      return !1;
  return !0;
}
var da = /* @__PURE__ */ function() {
  function e() {
    Et(this, e), H(this, "cache", void 0), H(this, "keys", void 0), H(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return Ct(e, [{
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
          return !op(r, t);
        }), this.deleteByPath(this.cache, t);
    }
  }]), e;
}();
H(da, "MAX_CACHE_SIZE", 20);
H(da, "MAX_CACHE_OFFSET", 5);
var uc = 0, vu = /* @__PURE__ */ function() {
  function e(n) {
    Et(this, e), H(this, "derivatives", void 0), H(this, "id", void 0), this.derivatives = Array.isArray(n) ? n : [n], this.id = uc, n.length === 0 && ca(n.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), uc += 1;
  }
  return Ct(e, [{
    key: "getDerivativeToken",
    value: function(t) {
      return this.derivatives.reduce(function(r, o) {
        return o(t, r);
      }, void 0);
    }
  }]), e;
}(), Ii = new da();
function fs(e) {
  var n = Array.isArray(e) ? e : [e];
  return Ii.has(n) || Ii.set(n, new vu(n)), Ii.get(n);
}
var ip = /* @__PURE__ */ new WeakMap(), Ni = {};
function sp(e, n) {
  for (var t = ip, r = 0; r < n.length; r += 1) {
    var o = n[r];
    t.has(o) || t.set(o, /* @__PURE__ */ new WeakMap()), t = t.get(o);
  }
  return t.has(Ni) || t.set(Ni, e()), t.get(Ni);
}
var fc = /* @__PURE__ */ new WeakMap();
function Rr(e) {
  var n = fc.get(e) || "";
  return n || (Object.keys(e).forEach(function(t) {
    var r = e[t];
    n += t, r instanceof vu ? n += r.id : r && ye(r) === "object" ? n += Rr(r) : n += r;
  }), n = Ir(n), fc.set(e, n)), n;
}
function dc(e, n) {
  return Ir("".concat(n, "_").concat(Rr(e)));
}
var ds = Yt();
function Mo(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function Do(e, n, t) {
  var r, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (i)
    return e;
  var s = F(F({}, o), {}, (r = {}, H(r, Yn, n), H(r, bt, t), r)), a = Object.keys(s).map(function(c) {
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
}, ap = function(n, t, r) {
  return Object.keys(n).length ? ".".concat(t).concat(r != null && r.scope ? ".".concat(r.scope) : "", "{").concat(Object.entries(n).map(function(o) {
    var i = ae(o, 2), s = i[0], a = i[1];
    return "".concat(s, ":").concat(a, ";");
  }).join(""), "}") : "";
}, yu = function(n, t, r) {
  var o = {}, i = {};
  return Object.entries(n).forEach(function(s) {
    var a, c, l = ae(s, 2), u = l[0], d = l[1];
    if (r != null && (a = r.preserve) !== null && a !== void 0 && a[u])
      i[u] = d;
    else if ((typeof d == "string" || typeof d == "number") && !(r != null && (c = r.ignore) !== null && c !== void 0 && c[u])) {
      var f, v = So(u, r == null ? void 0 : r.prefix);
      o[v] = typeof d == "number" && !(r != null && (f = r.unitless) !== null && f !== void 0 && f[u]) ? "".concat(d, "px") : String(d), i[u] = "var(".concat(v, ")");
    }
  }), [i, ap(o, t, {
    scope: r == null ? void 0 : r.scope
  })];
}, hc = process.env.NODE_ENV !== "test" && Yt() ? w.useLayoutEffect : w.useEffect, bu = function(n, t) {
  var r = w.useRef(!0);
  hc(function() {
    return n(r.current);
  }, t), hc(function() {
    return r.current = !1, function() {
      r.current = !0;
    };
  }, []);
}, cp = F({}, w), pc = cp.useInsertionEffect, lp = function(n, t, r) {
  w.useMemo(n, r), bu(function() {
    return t(!0);
  }, r);
}, up = pc ? function(e, n, t) {
  return pc(function() {
    return e(), n();
  }, t);
} : lp, fp = F({}, w), dp = fp.useInsertionEffect, hp = function(n) {
  var t = [], r = !1;
  function o(i) {
    if (r) {
      process.env.NODE_ENV !== "production" && ca(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
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
}, pp = function() {
  return function(n) {
    n();
  };
}, xp = typeof dp < "u" ? hp : pp;
function mp() {
  return !1;
}
var hs = !1;
function gp() {
  return hs;
}
const vp = process.env.NODE_ENV === "production" ? mp : gp;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var to = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : null;
  if (to && typeof to.webpackHotUpdate == "function") {
    var yp = to.webpackHotUpdate;
    to.webpackHotUpdate = function() {
      return hs = !0, setTimeout(function() {
        hs = !1;
      }, 0), yp.apply(void 0, arguments);
    };
  }
}
function ha(e, n, t, r, o) {
  var i = w.useContext(Hr), s = i.cache, a = [e].concat(Wt(n)), c = us(a), l = xp([c]), u = vp(), d = function(x) {
    s.opUpdate(c, function(h) {
      var S = h || [void 0, void 0], b = ae(S, 2), g = b[0], _ = g === void 0 ? 0 : g, y = b[1], A = y;
      process.env.NODE_ENV !== "production" && y && u && (r == null || r(A, u), A = null);
      var E = A || t(), P = [_, E];
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
  return up(function() {
    o == null || o(v);
  }, function(m) {
    return d(function(x) {
      var h = ae(x, 2), S = h[0], b = h[1];
      return m && S === 0 && (o == null || o(v)), [S + 1, b];
    }), function() {
      s.opUpdate(c, function(x) {
        var h = x || [], S = ae(h, 2), b = S[0], g = b === void 0 ? 0 : b, _ = S[1], y = g - 1;
        return y === 0 ? (l(function() {
          (m || !s.opGet(c)) && (r == null || r(_, !1));
        }), null) : [g - 1, _];
      });
    };
  }, [c]), v;
}
var bp = {}, Sp = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", pn = /* @__PURE__ */ new Map();
function wp(e) {
  pn.set(e, (pn.get(e) || 0) + 1);
}
function Ep(e, n) {
  if (typeof document < "u") {
    var t = document.querySelectorAll("style[".concat(Yn, '="').concat(e, '"]'));
    t.forEach(function(r) {
      if (r[Jt] === n) {
        var o;
        (o = r.parentNode) === null || o === void 0 || o.removeChild(r);
      }
    });
  }
}
var Cp = 0;
function _p(e, n) {
  pn.set(e, (pn.get(e) || 0) - 1);
  var t = Array.from(pn.keys()), r = t.filter(function(o) {
    var i = pn.get(o) || 0;
    return i <= 0;
  });
  t.length - r.length > Cp && r.forEach(function(o) {
    Ep(o, n), pn.delete(o);
  });
}
var Ap = function(n, t, r, o) {
  var i = r.getDerivativeToken(n), s = F(F({}, i), t);
  return o && (s = o(s)), s;
}, Su = "token";
function Tp(e, n) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = tn(Hr), o = r.cache.instanceId, i = r.container, s = t.salt, a = s === void 0 ? "" : s, c = t.override, l = c === void 0 ? bp : c, u = t.formatToken, d = t.getComputedToken, f = t.cssVar, v = sp(function() {
    return Object.assign.apply(Object, [{}].concat(Wt(n)));
  }, n), m = Rr(v), x = Rr(l), h = f ? Rr(f) : "", S = ha(Su, [a, e.id, m, x, h], function() {
    var b, g = d ? d(v, l, e) : Ap(v, l, e, u), _ = F({}, g), y = "";
    if (f) {
      var A = yu(g, f.key, {
        prefix: f.prefix,
        ignore: f.ignore,
        unitless: f.unitless,
        preserve: f.preserve
      }), E = ae(A, 2);
      g = E[0], y = E[1];
    }
    var P = dc(g, a);
    g._tokenKey = P, _._tokenKey = dc(_, a);
    var D = (b = f == null ? void 0 : f.key) !== null && b !== void 0 ? b : P;
    g._themeKey = D, wp(D);
    var W = "".concat(Sp, "-").concat(Ir(P));
    return g._hashId = W, [g, W, _, y, (f == null ? void 0 : f.key) || ""];
  }, function(b) {
    _p(b[0]._themeKey, o);
  }, function(b) {
    var g = ae(b, 4), _ = g[0], y = g[3];
    if (f && y) {
      var A = bn(y, Ir("css-variables-".concat(_._themeKey)), {
        mark: bt,
        prepend: "queue",
        attachTo: i,
        priority: -999
      });
      A[Jt] = o, A.setAttribute(Yn, _._themeKey);
    }
  });
  return S;
}
var Op = function(n, t, r) {
  var o = ae(n, 5), i = o[2], s = o[3], a = o[4], c = r || {}, l = c.plain;
  if (!s)
    return null;
  var u = i._tokenKey, d = -999, f = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(d)
  }, v = Do(s, a, u, f, l);
  return [d, u, v];
}, Rp = {
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
}, wu = "comm", Eu = "rule", Cu = "decl", kp = "@import", Pp = "@namespace", Ip = "@keyframes", Np = "@layer", _u = Math.abs, pa = String.fromCharCode;
function Au(e) {
  return e.trim();
}
function wo(e, n, t) {
  return e.replace(n, t);
}
function jp(e, n, t) {
  return e.indexOf(n, t);
}
function Fn(e, n) {
  return e.charCodeAt(n) | 0;
}
function $n(e, n, t) {
  return e.slice(n, t);
}
function Nt(e) {
  return e.length;
}
function Lp(e) {
  return e.length;
}
function no(e, n) {
  return n.push(e), e;
}
var ci = 1, Gn = 1, Tu = 0, ht = 0, Be = 0, er = "";
function xa(e, n, t, r, o, i, s, a) {
  return { value: e, root: n, parent: t, type: r, props: o, children: i, line: ci, column: Gn, length: s, return: "", siblings: a };
}
function Mp() {
  return Be;
}
function Dp() {
  return Be = ht > 0 ? Fn(er, --ht) : 0, Gn--, Be === 10 && (Gn = 1, ci--), Be;
}
function St() {
  return Be = ht < Tu ? Fn(er, ht++) : 0, Gn++, Be === 10 && (Gn = 1, ci++), Be;
}
function Qt() {
  return Fn(er, ht);
}
function Eo() {
  return ht;
}
function li(e, n) {
  return $n(er, e, n);
}
function jr(e) {
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
function Bp(e) {
  return ci = Gn = 1, Tu = Nt(er = e), ht = 0, [];
}
function Fp(e) {
  return er = "", e;
}
function ji(e) {
  return Au(li(ht - 1, ps(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function zp(e) {
  for (; (Be = Qt()) && Be < 33; )
    St();
  return jr(e) > 2 || jr(Be) > 3 ? "" : " ";
}
function Vp(e, n) {
  for (; --n && St() && !(Be < 48 || Be > 102 || Be > 57 && Be < 65 || Be > 70 && Be < 97); )
    ;
  return li(e, Eo() + (n < 6 && Qt() == 32 && St() == 32));
}
function ps(e) {
  for (; St(); )
    switch (Be) {
      // ] ) " '
      case e:
        return ht;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && ps(Be);
        break;
      // (
      case 40:
        e === 41 && ps(e);
        break;
      // \
      case 92:
        St();
        break;
    }
  return ht;
}
function Hp(e, n) {
  for (; St() && e + Be !== 57; )
    if (e + Be === 84 && Qt() === 47)
      break;
  return "/*" + li(n, ht - 1) + "*" + pa(e === 47 ? e : St());
}
function Up(e) {
  for (; !jr(Qt()); )
    St();
  return li(e, ht);
}
function qp(e) {
  return Fp(Co("", null, null, null, [""], e = Bp(e), 0, [0], e));
}
function Co(e, n, t, r, o, i, s, a, c) {
  for (var l = 0, u = 0, d = s, f = 0, v = 0, m = 0, x = 1, h = 1, S = 1, b = 0, g = "", _ = o, y = i, A = r, E = g; h; )
    switch (m = b, b = St()) {
      // (
      case 40:
        if (m != 108 && Fn(E, d - 1) == 58) {
          jp(E += wo(ji(b), "&", "&\f"), "&\f", _u(l ? a[l - 1] : 0)) != -1 && (S = -1);
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
        E += zp(m);
        break;
      // \
      case 92:
        E += Vp(Eo() - 1, 7);
        continue;
      // /
      case 47:
        switch (Qt()) {
          case 42:
          case 47:
            no(Wp(Hp(St(), Eo()), n, t, c), c), (jr(m || 1) == 5 || jr(Qt() || 1) == 5) && Nt(E) && $n(E, -1, void 0) !== " " && (E += " ");
            break;
          default:
            E += "/";
        }
        break;
      // {
      case 123 * x:
        a[l++] = Nt(E) * S;
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
            S == -1 && (E = wo(E, /\f/g, "")), v > 0 && (Nt(E) - d || x === 0 && m === 47) && no(v > 32 ? mc(E + ";", r, t, d - 1, c) : mc(wo(E, " ", "") + ";", r, t, d - 2, c), c);
            break;
          // @ ;
          case 59:
            E += ";";
          // { rule/at-rule
          default:
            if (no(A = xc(E, n, t, l, u, o, a, g, _ = [], y = [], d, i), i), b === 123)
              if (u === 0)
                Co(E, n, A, A, _, i, d, a, y);
              else {
                switch (f) {
                  // c(ontainer)
                  case 99:
                    if (Fn(E, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (Fn(E, 2) === 97) break;
                  default:
                    u = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                u ? Co(e, A, A, r && no(xc(e, A, A, 0, 0, o, a, g, o, _ = [], d, y), y), o, y, d, a, r ? _ : y) : Co(E, A, A, A, [""], y, 0, a, y);
              }
        }
        l = u = v = 0, x = S = 1, g = E = "", d = s;
        break;
      // :
      case 58:
        d = 1 + Nt(E), v = m;
      default:
        if (x < 1) {
          if (b == 123)
            --x;
          else if (b == 125 && x++ == 0 && Dp() == 125)
            continue;
        }
        switch (E += pa(b), b * x) {
          // &
          case 38:
            S = u > 0 ? 1 : (E += "\f", -1);
            break;
          // ,
          case 44:
            a[l++] = (Nt(E) - 1) * S, S = 1;
            break;
          // @
          case 64:
            Qt() === 45 && (E += ji(St())), f = Qt(), u = d = Nt(g = E += Up(Eo())), b++;
            break;
          // -
          case 45:
            m === 45 && Nt(E) == 2 && (x = 0);
        }
    }
  return i;
}
function xc(e, n, t, r, o, i, s, a, c, l, u, d) {
  for (var f = o - 1, v = o === 0 ? i : [""], m = Lp(v), x = 0, h = 0, S = 0; x < r; ++x)
    for (var b = 0, g = $n(e, f + 1, f = _u(h = s[x])), _ = e; b < m; ++b)
      (_ = Au(h > 0 ? v[b] + " " + g : wo(g, /&\f/g, v[b]))) && (c[S++] = _);
  return xa(e, n, t, o === 0 ? Eu : a, c, l, u, d);
}
function Wp(e, n, t, r) {
  return xa(e, n, t, wu, pa(Mp()), $n(e, 2, -2), 0, r);
}
function mc(e, n, t, r, o) {
  return xa(e, n, t, Cu, $n(e, 0, r), $n(e, r + 1, -1), r, o);
}
function xs(e, n) {
  for (var t = "", r = 0; r < e.length; r++)
    t += n(e[r], r, e, n) || "";
  return t;
}
function Xp(e, n, t, r) {
  switch (e.type) {
    case Np:
      if (e.children.length) break;
    case kp:
    case Pp:
    case Cu:
      return e.return = e.return || e.value;
    case wu:
      return "";
    case Ip:
      return e.return = e.value + "{" + xs(e.children, r) + "}";
    case Eu:
      if (!Nt(e.value = e.props.join(","))) return "";
  }
  return Nt(t = xs(e.children, r)) ? e.return = e.value + "{" + t + "}" : "";
}
function Ou(e, n) {
  var t = n.path, r = n.parentSelectors;
  on(!1, "[Ant Design CSS-in-JS] ".concat(t ? "Error in ".concat(t, ": ") : "").concat(e).concat(r.length ? " Selector: ".concat(r.join(" | ")) : ""));
}
var Yp = function(n, t, r) {
  if (n === "content") {
    var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, i = ["normal", "none", "initial", "inherit", "unset"];
    (typeof t != "string" || i.indexOf(t) === -1 && !o.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")) && Ou("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(t, "\"'`."), r);
  }
}, $p = function(n, t, r) {
  n === "animation" && r.hashId && t !== "none" && Ou("You seem to be using hashed animation '".concat(t, "', in which case 'animationName' with Keyframe as value is recommended."), r);
}, gc = "data-ant-cssinjs-cache-path", Ru = "_FILE_STYLE__", Sn, ku = !0;
function Gp() {
  if (!Sn && (Sn = {}, Yt())) {
    var e = document.createElement("div");
    e.className = gc, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var n = getComputedStyle(e).content || "";
    n = n.replace(/^"/, "").replace(/"$/, ""), n.split(";").forEach(function(o) {
      var i = o.split(":"), s = ae(i, 2), a = s[0], c = s[1];
      Sn[a] = c;
    });
    var t = document.querySelector("style[".concat(gc, "]"));
    if (t) {
      var r;
      ku = !1, (r = t.parentNode) === null || r === void 0 || r.removeChild(t);
    }
    document.body.removeChild(e);
  }
}
function Kp(e) {
  return Gp(), !!Sn[e];
}
function Zp(e) {
  var n = Sn[e], t = null;
  if (n && Yt())
    if (ku)
      t = Ru;
    else {
      var r = document.querySelector("style[".concat(bt, '="').concat(Sn[e], '"]'));
      r ? t = r.innerHTML : delete Sn[e];
    }
  return [t, n];
}
var Pu = "_skip_check_", Iu = "_multi_value_";
function _o(e) {
  var n = xs(qp(e), Xp);
  return n.replace(/\{%%%\:[^;];}/g, ";");
}
function Jp(e) {
  return ye(e) === "object" && e && (Pu in e || Iu in e);
}
function vc(e, n, t) {
  if (!n)
    return e;
  var r = ".".concat(n), o = t === "low" ? ":where(".concat(r, ")") : r, i = e.split(",").map(function(s) {
    var a, c = s.trim().split(/\s+/), l = c[0] || "", u = ((a = l.match(/^\w+/)) === null || a === void 0 ? void 0 : a[0]) || "";
    return l = "".concat(u).concat(o).concat(l.slice(u.length)), [l].concat(Wt(c.slice(1))).join(" ");
  });
  return i.join(",");
}
var Qp = function e(n) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = r.root, i = r.injectHash, s = r.parentSelectors, a = t.hashId, c = t.layer, l = t.path, u = t.hashPriority, d = t.transformers, f = d === void 0 ? [] : d, v = t.linters, m = v === void 0 ? [] : v, x = "", h = {};
  function S(_) {
    var y = _.getName(a);
    if (!h[y]) {
      var A = e(_.style, t, {
        root: !1,
        parentSelectors: s
      }), E = ae(A, 1), P = E[0];
      h[y] = "@keyframes ".concat(_.getName(a)).concat(P);
    }
  }
  function b(_) {
    var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return _.forEach(function(A) {
      Array.isArray(A) ? b(A, y) : A && y.push(A);
    }), y;
  }
  var g = b(Array.isArray(n) ? n : [n]);
  return g.forEach(function(_) {
    var y = typeof _ == "string" && !o ? {} : _;
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
        if (ye(P) === "object" && P && (E !== "animationName" || !P._keyframe) && !Jp(P)) {
          var D = !1, W = E.trim(), ee = !1;
          (o || i) && a ? W.startsWith("@") ? D = !0 : W === "&" ? W = vc("", a, u) : W = vc(E, a, u) : o && !a && (W === "&" || W === "") && (W = "", ee = !0);
          var $ = e(P, t, {
            root: ee,
            injectHash: D,
            parentSelectors: [].concat(Wt(s), [W])
          }), N = ae($, 2), z = N[0], q = N[1];
          h = F(F({}, h), q), x += "".concat(W).concat(z);
        } else {
          let G = function(Z, re) {
            process.env.NODE_ENV !== "production" && (ye(P) !== "object" || !(P != null && P[Pu])) && [Yp, $p].concat(Wt(m)).forEach(function(te) {
              return te(Z, re, {
                path: l,
                hashId: a,
                parentSelectors: s
              });
            });
            var oe = Z.replace(/[A-Z]/g, function(te) {
              return "-".concat(te.toLowerCase());
            }), K = re;
            !Rp[Z] && typeof K == "number" && K !== 0 && (K = "".concat(K, "px")), Z === "animationName" && re !== null && re !== void 0 && re._keyframe && (S(re), K = re.getName(a)), x += "".concat(oe, ":").concat(K, ";");
          };
          var X, J = (X = P == null ? void 0 : P.value) !== null && X !== void 0 ? X : P;
          ye(P) === "object" && P !== null && P !== void 0 && P[Iu] && Array.isArray(J) ? J.forEach(function(Z) {
            G(E, Z);
          }) : G(E, J);
        }
      });
    }
  }), o ? c && (x && (x = "@layer ".concat(c.name, " {").concat(x, "}")), c.dependencies && (h["@layer ".concat(c.name)] = c.dependencies.map(function(_) {
    return "@layer ".concat(_, ", ").concat(c.name, ";");
  }).join(`
`))) : x = "{".concat(x, "}"), [x, h];
};
function Nu(e, n) {
  return Ir("".concat(e.join("%")).concat(n));
}
function ex() {
  return null;
}
var ju = "style";
function ms(e, n) {
  var t = e.token, r = e.path, o = e.hashId, i = e.layer, s = e.nonce, a = e.clientOnly, c = e.order, l = c === void 0 ? 0 : c, u = w.useContext(Hr), d = u.autoClear, f = u.mock, v = u.defaultCache, m = u.hashPriority, x = u.container, h = u.ssrInline, S = u.transformers, b = u.linters, g = u.cache, _ = u.layer, y = t._tokenKey, A = [y];
  _ && A.push("layer"), A.push.apply(A, Wt(r));
  var E = ds;
  process.env.NODE_ENV !== "production" && f !== void 0 && (E = f === "client");
  var P = ha(
    ju,
    A,
    // Create cache if needed
    function() {
      var N = A.join("|");
      if (Kp(N)) {
        var z = Zp(N), q = ae(z, 2), X = q[0], J = q[1];
        if (X)
          return [X, y, J, {}, a, l];
      }
      var G = n(), Z = Qp(G, {
        hashId: o,
        hashPriority: m,
        layer: _ ? i : void 0,
        path: r.join("-"),
        transformers: S,
        linters: b
      }), re = ae(Z, 2), oe = re[0], K = re[1], te = _o(oe), fe = Nu(A, te);
      return [te, y, fe, K, a, l];
    },
    // Remove cache if no need
    function(N, z) {
      var q = ae(N, 3), X = q[2];
      (z || d) && ds && gu(X, {
        mark: bt
      });
    },
    // Effect: Inject style here
    function(N) {
      var z = ae(N, 4), q = z[0];
      z[1];
      var X = z[2], J = z[3];
      if (E && q !== Ru) {
        var G = {
          mark: bt,
          prepend: _ ? !1 : "queue",
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
          bn(_o(J[te]), "_layer-".concat(te), F(F({}, G), {}, {
            prepend: !0
          }));
        });
        var K = bn(q, X, G);
        K[Jt] = g.instanceId, K.setAttribute(Yn, y), process.env.NODE_ENV !== "production" && K.setAttribute(np, A.join("|")), oe.forEach(function(te) {
          bn(_o(J[te]), "_effect-".concat(te), G);
        });
      }
    }
  ), D = ae(P, 3), W = D[0], ee = D[1], $ = D[2];
  return function(N) {
    var z;
    if (!h || E || !v)
      z = /* @__PURE__ */ w.createElement(ex, null);
    else {
      var q;
      z = /* @__PURE__ */ w.createElement("style", Bt({}, (q = {}, H(q, Yn, ee), H(q, bt, $), q), {
        dangerouslySetInnerHTML: {
          __html: W
        }
      }));
    }
    return /* @__PURE__ */ w.createElement(w.Fragment, null, z, N);
  };
}
var tx = function(n, t, r) {
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
      var h = _o(c[x]), S = Do(h, s, "_effect-".concat(x), m, f);
      x.startsWith("@layer") ? v = S + v : v += S;
    }
  }), [u, a, v];
}, Lu = "cssVar", nx = function(n, t) {
  var r = n.key, o = n.prefix, i = n.unitless, s = n.ignore, a = n.token, c = n.scope, l = c === void 0 ? "" : c, u = tn(Hr), d = u.cache.instanceId, f = u.container, v = a._tokenKey, m = [].concat(Wt(n.path), [r, l, v]), x = ha(Lu, m, function() {
    var h = t(), S = yu(h, r, {
      prefix: o,
      unitless: i,
      ignore: s,
      scope: l
    }), b = ae(S, 2), g = b[0], _ = b[1], y = Nu(m, _);
    return [g, _, y, r];
  }, function(h) {
    var S = ae(h, 3), b = S[2];
    ds && gu(b, {
      mark: bt
    });
  }, function(h) {
    var S = ae(h, 3), b = S[1], g = S[2];
    if (b) {
      var _ = bn(b, g, {
        mark: bt,
        prepend: "queue",
        attachTo: f,
        priority: -999
      });
      _[Jt] = d, _.setAttribute(Yn, r);
    }
  });
  return x;
}, rx = function(n, t, r) {
  var o = ae(n, 4), i = o[1], s = o[2], a = o[3], c = r || {}, l = c.plain;
  if (!i)
    return null;
  var u = -999, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  }, f = Do(i, a, s, d, l);
  return [u, s, f];
}, dr;
dr = {}, H(dr, ju, tx), H(dr, Su, Op), H(dr, Lu, rx);
var Mu = /* @__PURE__ */ function() {
  function e(n, t) {
    Et(this, e), H(this, "name", void 0), H(this, "style", void 0), H(this, "_keyframe", !0), this.name = n, this.style = t;
  }
  return Ct(e, [{
    key: "getName",
    value: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return t ? "".concat(t, "-").concat(this.name) : this.name;
    }
  }]), e;
}();
function Ln(e) {
  return e.notSplit = !0, e;
}
Ln(["borderTop", "borderBottom"]), Ln(["borderTop"]), Ln(["borderBottom"]), Ln(["borderLeft", "borderRight"]), Ln(["borderLeft"]), Ln(["borderRight"]);
var ma = /* @__PURE__ */ Ks({});
function ox(e) {
  return du(e) || cu(e) || ua(e) || hu();
}
function gs(e, n) {
  for (var t = e, r = 0; r < n.length; r += 1) {
    if (t == null)
      return;
    t = t[n[r]];
  }
  return t;
}
function Du(e, n, t, r) {
  if (!n.length)
    return t;
  var o = ox(n), i = o[0], s = o.slice(1), a;
  return !e && typeof i == "number" ? a = [] : Array.isArray(e) ? a = Wt(e) : a = F({}, e), r && t === void 0 && s.length === 1 ? delete a[i][s[0]] : a[i] = Du(a[i], s, t, r), a;
}
function Li(e, n, t) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return n.length && r && t === void 0 && !gs(e, n.slice(0, -1)) ? e : Du(e, n, t, r);
}
function ix(e) {
  return ye(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function yc(e) {
  return Array.isArray(e) ? [] : {};
}
var sx = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function ax() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  var r = yc(n[0]);
  return n.forEach(function(o) {
    function i(s, a) {
      var c = new Set(a), l = gs(o, s), u = Array.isArray(l);
      if (u || ix(l)) {
        if (!c.has(l)) {
          c.add(l);
          var d = gs(r, s);
          u ? r = Li(r, s, []) : (!d || ye(d) !== "object") && (r = Li(r, s, yc(l))), sx(l).forEach(function(f) {
            i([].concat(Wt(s), [f]), c);
          });
        }
      } else
        r = Li(r, s, l);
    }
    i([]);
  }), r;
}
function Bu() {
}
let Ut = null;
function cx() {
  Ut = null, tu();
}
let ga = Bu;
process.env.NODE_ENV !== "production" && (ga = (e, n, t) => {
  on(e, `[antd: ${n}] ${t}`), process.env.NODE_ENV === "test" && cx();
});
const Fu = /* @__PURE__ */ w.createContext({}), tr = process.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: n
  } = w.useContext(Fu), t = (r, o, i) => {
    if (!r)
      if (n === !1 && o === "deprecated") {
        const s = Ut;
        Ut || (Ut = {}), Ut[e] = Ut[e] || [], Ut[e].includes(i || "") || Ut[e].push(i || ""), s || console.warn("[antd] There exists deprecated usage in your code:", Ut);
      } else
        process.env.NODE_ENV !== "production" && ga(r, e, i);
  };
  return t.deprecated = (r, o, i, s) => {
    t(r, "deprecated", `\`${o}\` is deprecated. Please use \`${i}\` instead.${s ? ` ${s}` : ""}`);
  }, t;
} : () => {
  const e = () => {
  };
  return e.deprecated = Bu, e;
}, ui = ga, lx = /* @__PURE__ */ Ks(void 0), st = "${label} is not a valid ${type}", fi = {
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
const bc = () => Ao.reduce((e, n) => Object.assign(Object.assign({}, e), n), fi.Modal);
function ux(e) {
  if (e) {
    const n = Object.assign({}, e);
    return Ao.push(n), bc(), () => {
      Ao = Ao.filter((t) => t !== n), bc();
    };
  }
  Object.assign({}, fi.Modal);
}
const zu = /* @__PURE__ */ Ks(void 0), Vu = "internalMark", Hu = (e) => {
  const {
    locale: n = {},
    children: t,
    _ANT_MARK__: r
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const i = tr("LocaleProvider");
    process.env.NODE_ENV !== "production" && i(r === Vu, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  w.useEffect(() => ux(n == null ? void 0 : n.Modal), [n]);
  const o = w.useMemo(() => Object.assign(Object.assign({}, n), {
    exist: !0
  }), [n]);
  return /* @__PURE__ */ w.createElement(zu.Provider, {
    value: o
  }, t);
};
process.env.NODE_ENV !== "production" && (Hu.displayName = "LocaleProvider");
const Uu = {
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
}, Lr = Object.assign(Object.assign({}, Uu), {
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
function Mi(e, n) {
  const t = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], r = t.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    r[o] = n(r[o] || 0, t[o] || "", o);
  return t[3] ? r[3] = t[3].includes("%") ? r[3] / 100 : r[3] : r[3] = 1, r;
}
const Sc = (e, n, t) => t === 0 ? e : e / 100;
function hr(e, n) {
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
      this.r = hr(n.r), this.g = hr(n.g), this.b = hr(n.b), this.a = typeof n.a == "number" ? hr(n.a, 1) : 1;
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
    return o[n] = hr(t, r), o;
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
    const t = Mi(n, Sc);
    this.fromHsv({
      h: t[0],
      s: t[1],
      v: t[2],
      a: t[3]
    });
  }
  fromHslString(n) {
    const t = Mi(n, Sc);
    this.fromHsl({
      h: t[0],
      s: t[1],
      l: t[2],
      a: t[3]
    });
  }
  fromRgbString(n) {
    const t = Mi(n, (r, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? He(r / 100 * 255) : r
    ));
    this.r = t[0], this.g = t[1], this.b = t[2], this.a = t[3];
  }
}
var ro = 2, wc = 0.16, fx = 0.05, dx = 0.05, hx = 0.15, qu = 5, Wu = 4, px = [{
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
function Ec(e, n, t) {
  var r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = t ? Math.round(e.h) - ro * n : Math.round(e.h) + ro * n : r = t ? Math.round(e.h) + ro * n : Math.round(e.h) - ro * n, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function Cc(e, n, t) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var r;
  return t ? r = e.s - wc * n : n === Wu ? r = e.s + wc : r = e.s + fx * n, r > 1 && (r = 1), t && n === qu && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Math.round(r * 100) / 100;
}
function _c(e, n, t) {
  var r;
  return t ? r = e.v + dx * n : r = e.v - hx * n, r = Math.max(0, Math.min(1, r)), Math.round(r * 100) / 100;
}
function Mr(e) {
  for (var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = [], r = new Ne(e), o = r.toHsv(), i = qu; i > 0; i -= 1) {
    var s = new Ne({
      h: Ec(o, i, !0),
      s: Cc(o, i, !0),
      v: _c(o, i, !0)
    });
    t.push(s);
  }
  t.push(r);
  for (var a = 1; a <= Wu; a += 1) {
    var c = new Ne({
      h: Ec(o, a),
      s: Cc(o, a),
      v: _c(o, a)
    });
    t.push(c);
  }
  return n.theme === "dark" ? px.map(function(l) {
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
}, vs = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
vs.primary = vs[5];
var ys = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
ys.primary = ys[5];
var bs = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
bs.primary = bs[5];
var Ss = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
Ss.primary = Ss[5];
var ws = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
ws.primary = ws[5];
var Es = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
Es.primary = Es[5];
var Cs = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
Cs.primary = Cs[5];
var _s = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
_s.primary = _s[5];
var Bo = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
Bo.primary = Bo[5];
var As = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
As.primary = As[5];
var Ts = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
Ts.primary = Ts[5];
var Os = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
Os.primary = Os[5];
var Rs = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
Rs.primary = Rs[5];
var Bi = {
  red: vs,
  volcano: ys,
  orange: bs,
  gold: Ss,
  yellow: ws,
  lime: Es,
  green: Cs,
  cyan: _s,
  blue: Bo,
  geekblue: As,
  purple: Ts,
  magenta: Os,
  grey: Rs
};
function xx(e, n) {
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
const mx = (e) => {
  let n = e, t = e, r = e, o = e;
  return e < 6 && e >= 5 ? n = e + 1 : e < 16 && e >= 6 ? n = e + 2 : e >= 16 && (n = 16), e < 7 && e >= 5 ? t = 4 : e < 8 && e >= 7 ? t = 5 : e < 14 && e >= 8 ? t = 6 : e < 16 && e >= 14 ? t = 7 : e >= 16 && (t = 8), e < 6 && e >= 2 ? r = 1 : e >= 6 && (r = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
    borderRadius: e,
    borderRadiusXS: r,
    borderRadiusSM: t,
    borderRadiusLG: n,
    borderRadiusOuter: o
  };
};
function gx(e) {
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
  }, mx(r));
}
const vx = (e) => {
  const {
    controlHeight: n
  } = e;
  return {
    controlHeightSM: n * 0.75,
    controlHeightXS: n * 0.5,
    controlHeightLG: n * 1.25
  };
};
function yx(e) {
  return (e + 8) / e;
}
function bx(e) {
  const n = Array.from({
    length: 10
  }).map((t, r) => {
    const o = r - 1, i = e * Math.pow(Math.E, o / 5), s = r > 1 ? Math.floor(i) : Math.ceil(i);
    return Math.floor(s / 2) * 2;
  });
  return n[1] = e, n.map((t) => ({
    size: t,
    lineHeight: yx(t)
  }));
}
const Sx = (e) => {
  const n = bx(e), t = n.map((u) => u.size), r = n.map((u) => u.lineHeight), o = t[1], i = t[0], s = t[2], a = r[1], c = r[0], l = r[2];
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
function wx(e) {
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
const ut = (e, n) => new Ne(e).setA(n).toRgbString(), pr = (e, n) => new Ne(e).darken(n).toHexString(), Ex = (e) => {
  const n = Mr(e);
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
}, Cx = (e, n) => {
  const t = e || "#fff", r = n || "#000";
  return {
    colorBgBase: t,
    colorTextBase: r,
    colorText: ut(r, 0.88),
    colorTextSecondary: ut(r, 0.65),
    colorTextTertiary: ut(r, 0.45),
    colorTextQuaternary: ut(r, 0.25),
    colorFill: ut(r, 0.15),
    colorFillSecondary: ut(r, 0.06),
    colorFillTertiary: ut(r, 0.04),
    colorFillQuaternary: ut(r, 0.02),
    colorBgSolid: ut(r, 1),
    colorBgSolidHover: ut(r, 0.75),
    colorBgSolidActive: ut(r, 0.95),
    colorBgLayout: pr(t, 4),
    colorBgContainer: pr(t, 0),
    colorBgElevated: pr(t, 0),
    colorBgSpotlight: ut(r, 0.85),
    colorBgBlur: "transparent",
    colorBorder: pr(t, 15),
    colorBorderSecondary: pr(t, 6)
  };
};
function _x(e) {
  Di.pink = Di.magenta, Bi.pink = Bi.magenta;
  const n = Object.keys(Uu).map((t) => {
    const r = e[t] === Di[t] ? Bi[t] : Mr(e[t]);
    return Array.from({
      length: 10
    }, () => 1).reduce((o, i, s) => (o[`${t}-${s + 1}`] = r[s], o[`${t}${s + 1}`] = r[s], o), {});
  }).reduce((t, r) => (t = Object.assign(Object.assign({}, t), r), t), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), n), xx(e, {
    generateColorPalettes: Ex,
    generateNeutralColorPalettes: Cx
  })), Sx(e.fontSize)), wx(e)), vx(e)), gx(e));
}
const Xu = fs(_x), ks = {
  token: Lr,
  override: {
    override: Lr
  },
  hashed: !0
}, Yu = /* @__PURE__ */ je.createContext(ks), Ps = "ant", va = "anticon", Ax = (e, n) => n || (e ? `${Ps}-${e}` : Ps), nn = /* @__PURE__ */ w.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: Ax,
  iconPrefixCls: va
}), {
  Consumer: $v
} = nn, Ac = {};
function $u(e) {
  const n = w.useContext(nn), {
    getPrefixCls: t,
    direction: r,
    getPopupContainer: o
  } = n, i = n[e];
  return Object.assign(Object.assign({
    classNames: Ac,
    styles: Ac
  }, i), {
    getPrefixCls: t,
    direction: r,
    getPopupContainer: o
  });
}
const Tx = `-ant-${Date.now()}-${Math.random()}`;
function Ox(e, n) {
  const t = {}, r = (s, a) => {
    let c = s.clone();
    return c = (a == null ? void 0 : a(c)) || c, c.toRgbString();
  }, o = (s, a) => {
    const c = new Ne(s), l = Mr(c.toRgbString());
    t[`${a}-color`] = r(c), t[`${a}-color-disabled`] = l[1], t[`${a}-color-hover`] = l[4], t[`${a}-color-active`] = l[6], t[`${a}-color-outline`] = c.clone().setA(0.2).toRgbString(), t[`${a}-color-deprecated-bg`] = l[0], t[`${a}-color-deprecated-border`] = l[2];
  };
  if (n.primaryColor) {
    o(n.primaryColor, "primary");
    const s = new Ne(n.primaryColor), a = Mr(s.toRgbString());
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
function Rx(e, n) {
  const t = Ox(e, n);
  Yt() ? bn(t, `${Tx}-dynamic-theme`) : process.env.NODE_ENV !== "production" && ui(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const Is = /* @__PURE__ */ w.createContext(!1), kx = (e) => {
  let {
    children: n,
    disabled: t
  } = e;
  const r = w.useContext(Is);
  return /* @__PURE__ */ w.createElement(Is.Provider, {
    value: t ?? r
  }, n);
}, Dr = /* @__PURE__ */ w.createContext(void 0), Px = (e) => {
  let {
    children: n,
    size: t
  } = e;
  const r = w.useContext(Dr);
  return /* @__PURE__ */ w.createElement(Dr.Provider, {
    value: t || r
  }, n);
};
function Ix() {
  const e = tn(Is), n = tn(Dr);
  return {
    componentDisabled: e,
    componentSize: n
  };
}
var Gu = /* @__PURE__ */ Ct(function e() {
  Et(this, e);
}), Ku = "CALC_UNIT", Nx = new RegExp(Ku, "g");
function Fi(e) {
  return typeof e == "number" ? "".concat(e).concat(Ku) : e;
}
var jx = /* @__PURE__ */ function(e) {
  Vr(t, e);
  var n = ii(t);
  function t(r, o) {
    var i;
    Et(this, t), i = n.call(this), H(yn(i), "result", ""), H(yn(i), "unitlessCssVar", void 0), H(yn(i), "lowPriority", void 0);
    var s = ye(r);
    return i.unitlessCssVar = o, r instanceof t ? i.result = "(".concat(r.result, ")") : s === "number" ? i.result = Fi(r) : s === "string" && (i.result = r), i;
  }
  return Ct(t, [{
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
      }) && (c = !1), this.result = this.result.replace(Nx, c ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), t;
}(Gu), Lx = /* @__PURE__ */ function(e) {
  Vr(t, e);
  var n = ii(t);
  function t(r) {
    var o;
    return Et(this, t), o = n.call(this), H(yn(o), "result", 0), r instanceof t ? o.result = r.result : typeof r == "number" && (o.result = r), o;
  }
  return Ct(t, [{
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
}(Gu), Mx = function(n, t) {
  var r = n === "css" ? jx : Lx;
  return function(o) {
    return new r(o, t);
  };
}, Tc = function(n, t) {
  return "".concat([t, n.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function Ns(e) {
  var n = w.useRef();
  n.current = e;
  var t = w.useCallback(function() {
    for (var r, o = arguments.length, i = new Array(o), s = 0; s < o; s++)
      i[s] = arguments[s];
    return (r = n.current) === null || r === void 0 ? void 0 : r.call.apply(r, [n].concat(i));
  }, []);
  return t;
}
function js(e) {
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
function Oc(e, n, t, r) {
  var o = F({}, n[e]);
  if (r != null && r.deprecatedTokens) {
    var i = r.deprecatedTokens;
    i.forEach(function(a) {
      var c = ae(a, 2), l = c[0], u = c[1];
      if (process.env.NODE_ENV !== "production" && on(!(o != null && o[l]), "Component Token `".concat(String(l), "` of ").concat(String(e), " is deprecated. Please use `").concat(String(u), "` instead.")), o != null && o[l] || o != null && o[u]) {
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
var Zu = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", Ls = !0;
function di() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  if (!Zu)
    return Object.assign.apply(Object, [{}].concat(n));
  Ls = !1;
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
  }), Ls = !0, r;
}
var Rc = {};
function Dx() {
}
var Bx = function(n) {
  var t, r = n, o = Dx;
  return Zu && typeof Proxy < "u" && (t = /* @__PURE__ */ new Set(), r = new Proxy(n, {
    get: function(s, a) {
      if (Ls) {
        var c;
        (c = t) === null || c === void 0 || c.add(a);
      }
      return s[a];
    }
  }), o = function(s, a) {
    var c;
    Rc[s] = {
      global: Array.from(t),
      component: F(F({}, (c = Rc[s]) === null || c === void 0 ? void 0 : c.component), a)
    };
  }), {
    token: r,
    keys: t,
    flush: o
  };
};
function kc(e, n, t) {
  if (typeof t == "function") {
    var r;
    return t(di(n, (r = n[e]) !== null && r !== void 0 ? r : {}));
  }
  return t ?? {};
}
function Fx(e) {
  return e === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++)
        r[o] = arguments[o];
      return "max(".concat(r.map(function(i) {
        return Mo(i);
      }).join(","), ")");
    },
    min: function() {
      for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++)
        r[o] = arguments[o];
      return "min(".concat(r.map(function(i) {
        return Mo(i);
      }).join(","), ")");
    }
  };
}
var zx = 1e3 * 60 * 10, Vx = /* @__PURE__ */ function() {
  function e() {
    Et(this, e), H(this, "map", /* @__PURE__ */ new Map()), H(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), H(this, "nextID", 0), H(this, "lastAccessBeat", /* @__PURE__ */ new Map()), H(this, "accessBeat", 0);
  }
  return Ct(e, [{
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
          r - o > zx && (t.map.delete(i), t.lastAccessBeat.delete(i));
        }), this.accessBeat = 0;
      }
    }
  }]), e;
}(), Pc = new Vx();
function Hx(e, n) {
  return je.useMemo(function() {
    var t = Pc.get(n);
    if (t)
      return t;
    var r = e();
    return Pc.set(n, r), r;
  }, n);
}
var Ux = function() {
  return {};
};
function qx(e) {
  var n = e.useCSP, t = n === void 0 ? Ux : n, r = e.useToken, o = e.usePrefix, i = e.getResetStyles, s = e.getCommonStyle, a = e.getCompUnitless;
  function c(f, v, m, x) {
    var h = Array.isArray(f) ? f[0] : f;
    function S(P) {
      return "".concat(String(h)).concat(P.slice(0, 1).toUpperCase()).concat(P.slice(1));
    }
    var b = (x == null ? void 0 : x.unitless) || {}, g = typeof a == "function" ? a(f) : {}, _ = F(F({}, g), {}, H({}, S("zIndexPopup"), !0));
    Object.keys(b).forEach(function(P) {
      _[S(P)] = b[P];
    });
    var y = F(F({}, x), {}, {
      unitless: _,
      prefixToken: S
    }), A = u(f, v, m, y), E = l(h, m, y);
    return function(P) {
      var D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : P, W = A(P, D), ee = ae(W, 2), $ = ee[1], N = E(D), z = ae(N, 2), q = z[0], X = z[1];
      return [q, $, X];
    };
  }
  function l(f, v, m) {
    var x = m.unitless, h = m.injectStyle, S = h === void 0 ? !0 : h, b = m.prefixToken, g = m.ignore, _ = function(E) {
      var P = E.rootCls, D = E.cssVar, W = D === void 0 ? {} : D, ee = r(), $ = ee.realToken;
      return nx({
        path: [f],
        prefix: W.prefix,
        key: W.key,
        unitless: x,
        ignore: g,
        token: $,
        scope: P
      }, function() {
        var N = kc(f, $, v), z = Oc(f, $, N, {
          deprecatedTokens: m == null ? void 0 : m.deprecatedTokens
        });
        return Object.keys(N).forEach(function(q) {
          z[b(q)] = z[q], delete z[q];
        }), z;
      }), null;
    }, y = function(E) {
      var P = r(), D = P.cssVar;
      return [function(W) {
        return S && D ? /* @__PURE__ */ je.createElement(je.Fragment, null, /* @__PURE__ */ je.createElement(_, {
          rootCls: E,
          cssVar: D,
          component: f
        }), W) : W;
      }, D == null ? void 0 : D.key];
    };
    return y;
  }
  function u(f, v, m) {
    var x = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, h = Array.isArray(f) ? f : [f, f], S = ae(h, 1), b = S[0], g = h.join("-"), _ = e.layer || {
      name: "antd"
    };
    return function(y) {
      var A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : y, E = r(), P = E.theme, D = E.realToken, W = E.hashId, ee = E.token, $ = E.cssVar, N = o(), z = N.rootPrefixCls, q = N.iconPrefixCls, X = t(), J = $ ? "css" : "js", G = Hx(function() {
        var fe = /* @__PURE__ */ new Set();
        return $ && Object.keys(x.unitless || {}).forEach(function(le) {
          fe.add(So(le, $.prefix)), fe.add(So(le, Tc(b, $.prefix)));
        }), Mx(J, fe);
      }, [J, b, $ == null ? void 0 : $.prefix]), Z = Fx(J), re = Z.max, oe = Z.min, K = {
        theme: P,
        token: ee,
        hashId: W,
        nonce: function() {
          return X.nonce;
        },
        clientOnly: x.clientOnly,
        layer: _,
        // antd is always at top of styles
        order: x.order || -999
      };
      typeof i == "function" && ms(F(F({}, K), {}, {
        clientOnly: !1,
        path: ["Shared", z]
      }), function() {
        return i(ee, {
          prefix: {
            rootPrefixCls: z,
            iconPrefixCls: q
          },
          csp: X
        });
      });
      var te = ms(F(F({}, K), {}, {
        path: [g, y, q]
      }), function() {
        if (x.injectStyle === !1)
          return [];
        var fe = Bx(ee), le = fe.token, de = fe.flush, pe = kc(b, D, m), k = ".".concat(y), U = Oc(b, D, pe, {
          deprecatedTokens: x.deprecatedTokens
        });
        $ && pe && ye(pe) === "object" && Object.keys(pe).forEach(function(ne) {
          pe[ne] = "var(".concat(So(ne, Tc(b, $.prefix)), ")");
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
        }, $ ? pe : U), B = v(j, {
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
      var _ = g.prefixCls, y = g.rootCls, A = y === void 0 ? _ : y;
      return h(_, A), null;
    };
    return process.env.NODE_ENV !== "production" && (S.displayName = "SubStyle_".concat(String(Array.isArray(f) ? f.join(".") : f))), S;
  }
  return {
    genStyleHooks: c,
    genSubStyleComponent: d,
    genComponentStyleHook: u
  };
}
const Wx = "5.24.6";
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
var Xx = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
function Ju(e) {
  const {
    override: n
  } = e, t = Xx(e, ["override"]), r = Object.assign({}, n);
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
var Ic = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
const Qu = {
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
}, Yx = {
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
}, $x = {
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
}, ef = (e, n, t) => {
  const r = t.getDerivativeToken(e), {
    override: o
  } = n, i = Ic(n, ["override"]);
  let s = Object.assign(Object.assign({}, r), {
    override: o
  });
  return s = Ju(s), i && Object.entries(i).forEach((a) => {
    let [c, l] = a;
    const {
      theme: u
    } = l, d = Ic(l, ["theme"]);
    let f = d;
    u && (f = ef(Object.assign(Object.assign({}, s), d), {
      override: d
    }, u)), s[c] = f;
  }), s;
};
function ya() {
  const {
    token: e,
    hashed: n,
    theme: t,
    override: r,
    cssVar: o
  } = je.useContext(Yu), i = `${Wx}-${n || ""}`, s = t || Xu, [a, c, l] = Tp(s, [Lr, e], {
    salt: i,
    override: r,
    getComputedToken: ef,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: Ju,
    cssVar: o && {
      prefix: o.prefix,
      key: o.key,
      unitless: Qu,
      ignore: Yx,
      preserve: $x
    }
  });
  return [s, l, n ? c : "", a, o];
}
const tf = function(e) {
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
}), Kx = (e) => ({
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
}), Zx = (e, n, t, r) => {
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
}, nf = (e) => ({
  [`.${e}`]: Object.assign(Object.assign({}, Gx()), {
    [`.${e} .${e}-icon`]: {
      display: "block"
    }
  })
}), {
  genStyleHooks: ba
} = qx({
  usePrefix: () => {
    const {
      getPrefixCls: e,
      iconPrefixCls: n
    } = tn(nn);
    return {
      rootPrefixCls: e(),
      iconPrefixCls: n
    };
  },
  useToken: () => {
    const [e, n, t, r, o] = ya();
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
    } = tn(nn);
    return e ?? {};
  },
  getResetStyles: (e, n) => {
    var t;
    const r = Kx(e);
    return [r, {
      "&": r
    }, nf((t = n == null ? void 0 : n.prefix.iconPrefixCls) !== null && t !== void 0 ? t : va)];
  },
  getCommonStyle: Zx,
  getCompUnitless: () => Qu
}), Jx = (e, n) => {
  const [t, r] = ya();
  return ms({
    token: r,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => n == null ? void 0 : n.nonce,
    layer: {
      name: "antd"
    }
  }, () => [nf(e)]);
}, Qx = Object.assign({}, w), {
  useId: Nc
} = Qx, em = () => "", tm = typeof Nc > "u" ? em : Nc;
function nm(e, n, t) {
  var r, o;
  const i = tr("ConfigProvider"), s = e || {}, a = s.inherit === !1 || !n ? Object.assign(Object.assign({}, ks), {
    hashed: (r = n == null ? void 0 : n.hashed) !== null && r !== void 0 ? r : ks.hashed,
    cssVar: n == null ? void 0 : n.cssVar
  }) : n, c = tm();
  if (process.env.NODE_ENV !== "production") {
    const l = s.cssVar || a.cssVar, u = !!(typeof s.cssVar == "object" && (!((o = s.cssVar) === null || o === void 0) && o.key) || c);
    process.env.NODE_ENV !== "production" && i(!l || u, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return ou(() => {
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
    return !Qh(d, v, !0);
  }));
}
var rm = ["children"], rf = /* @__PURE__ */ w.createContext({});
function om(e) {
  var n = e.children, t = Nr(e, rm);
  return /* @__PURE__ */ w.createElement(rf.Provider, {
    value: t
  }, n);
}
var im = /* @__PURE__ */ function(e) {
  Vr(t, e);
  var n = ii(t);
  function t() {
    return Et(this, t), n.apply(this, arguments);
  }
  return Ct(t, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), t;
}(w.Component);
function sm(e) {
  var n = w.useReducer(function(a) {
    return a + 1;
  }, 0), t = ae(n, 2), r = t[1], o = w.useRef(e), i = Ns(function() {
    return o.current;
  }), s = Ns(function(a) {
    o.current = typeof a == "function" ? a(o.current) : a, r();
  });
  return [i, s];
}
var Zt = "none", io = "appear", so = "enter", ao = "leave", jc = "none", mt = "prepare", Mn = "start", Dn = "active", Sa = "end", of = "prepared";
function Lc(e, n) {
  var t = {};
  return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit".concat(e)] = "webkit".concat(n), t["Moz".concat(e)] = "moz".concat(n), t["ms".concat(e)] = "MS".concat(n), t["O".concat(e)] = "o".concat(n.toLowerCase()), t;
}
function am(e, n) {
  var t = {
    animationend: Lc("Animation", "AnimationEnd"),
    transitionend: Lc("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in n || delete t.animationend.animation, "TransitionEvent" in n || delete t.transitionend.transition), t;
}
var cm = am(Yt(), typeof window < "u" ? window : {}), sf = {};
if (Yt()) {
  var lm = document.createElement("div");
  sf = lm.style;
}
var co = {};
function af(e) {
  if (co[e])
    return co[e];
  var n = cm[e];
  if (n)
    for (var t = Object.keys(n), r = t.length, o = 0; o < r; o += 1) {
      var i = t[o];
      if (Object.prototype.hasOwnProperty.call(n, i) && i in sf)
        return co[e] = n[i], co[e];
    }
  return "";
}
var cf = af("animationend"), lf = af("transitionend"), uf = !!(cf && lf), Mc = cf || "animationend", Dc = lf || "transitionend";
function Bc(e, n) {
  if (!e) return null;
  if (ye(e) === "object") {
    var t = n.replace(/-\w/g, function(r) {
      return r[1].toUpperCase();
    });
    return e[t];
  }
  return "".concat(e, "-").concat(n);
}
const um = function(e) {
  var n = Ve();
  function t(o) {
    o && (o.removeEventListener(Dc, e), o.removeEventListener(Mc, e));
  }
  function r(o) {
    n.current && n.current !== o && t(n.current), o && o !== n.current && (o.addEventListener(Dc, e), o.addEventListener(Mc, e), n.current = o);
  }
  return w.useEffect(function() {
    return function() {
      t(n.current);
    };
  }, []), [r, t];
};
var ff = Yt() ? p0 : tt;
const fm = function() {
  var e = w.useRef(null);
  function n() {
    Lo.cancel(e.current);
  }
  function t(r) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    n();
    var i = Lo(function() {
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
var dm = [mt, Mn, Dn, Sa], hm = [mt, of], df = !1, pm = !0;
function hf(e) {
  return e === Dn || e === Sa;
}
const xm = function(e, n, t) {
  var r = js(jc), o = ae(r, 2), i = o[0], s = o[1], a = fm(), c = ae(a, 2), l = c[0], u = c[1];
  function d() {
    s(mt, !0);
  }
  var f = n ? hm : dm;
  return ff(function() {
    if (i !== jc && i !== Sa) {
      var v = f.indexOf(i), m = f[v + 1], x = t(i);
      x === df ? s(m, !0) : m && l(function(h) {
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
function mm(e, n, t, r) {
  var o = r.motionEnter, i = o === void 0 ? !0 : o, s = r.motionAppear, a = s === void 0 ? !0 : s, c = r.motionLeave, l = c === void 0 ? !0 : c, u = r.motionDeadline, d = r.motionLeaveImmediately, f = r.onAppearPrepare, v = r.onEnterPrepare, m = r.onLeavePrepare, x = r.onAppearStart, h = r.onEnterStart, S = r.onLeaveStart, b = r.onAppearActive, g = r.onEnterActive, _ = r.onLeaveActive, y = r.onAppearEnd, A = r.onEnterEnd, E = r.onLeaveEnd, P = r.onVisibleChanged, D = js(), W = ae(D, 2), ee = W[0], $ = W[1], N = sm(Zt), z = ae(N, 2), q = z[0], X = z[1], J = js(null), G = ae(J, 2), Z = G[0], re = G[1], oe = q(), K = Ve(!1), te = Ve(null);
  function fe() {
    return t();
  }
  var le = Ve(!1);
  function de() {
    X(Zt), re(null, !0);
  }
  var pe = Ns(function(Pe) {
    var Se = q();
    if (Se !== Zt) {
      var qe = fe();
      if (!(Pe && !Pe.deadline && Pe.target !== qe)) {
        var pt = le.current, ct;
        Se === io && pt ? ct = y == null ? void 0 : y(qe, Pe) : Se === so && pt ? ct = A == null ? void 0 : A(qe, Pe) : Se === ao && pt && (ct = E == null ? void 0 : E(qe, Pe)), pt && ct !== !1 && de();
      }
    }
  }), k = um(pe), U = ae(k, 1), j = U[0], B = function(Se) {
    switch (Se) {
      case io:
        return H(H(H({}, mt, f), Mn, x), Dn, b);
      case so:
        return H(H(H({}, mt, v), Mn, h), Dn, g);
      case ao:
        return H(H(H({}, mt, m), Mn, S), Dn, _);
      default:
        return {};
    }
  }, T = w.useMemo(function() {
    return B(oe);
  }, [oe]), ne = xm(oe, !e, function(Pe) {
    if (Pe === mt) {
      var Se = T[mt];
      return Se ? Se(fe()) : df;
    }
    if (Ce in T) {
      var qe;
      re(((qe = T[Ce]) === null || qe === void 0 ? void 0 : qe.call(T, fe(), null)) || null);
    }
    return Ce === Dn && oe !== Zt && (j(fe()), u > 0 && (clearTimeout(te.current), te.current = setTimeout(function() {
      pe({
        deadline: !0
      });
    }, u))), Ce === of && de(), pm;
  }), L = ae(ne, 2), ke = L[0], Ce = L[1], at = hf(Ce);
  le.current = at;
  var At = Ve(null);
  ff(function() {
    if (!(K.current && At.current === n)) {
      $(n);
      var Pe = K.current;
      K.current = !0;
      var Se;
      !Pe && n && a && (Se = io), Pe && n && i && (Se = so), (Pe && !n && l || !Pe && d && !n && l) && (Se = ao);
      var qe = B(Se);
      Se && (e || qe[mt]) ? (X(Se), ke()) : X(Zt), At.current = n;
    }
  }, [n]), tt(function() {
    // Cancel appear
    (oe === io && !a || // Cancel enter
    oe === so && !i || // Cancel leave
    oe === ao && !l) && X(Zt);
  }, [a, i, l]), tt(function() {
    return function() {
      K.current = !1, clearTimeout(te.current);
    };
  }, []);
  var it = w.useRef(!1);
  tt(function() {
    ee && (it.current = !0), ee !== void 0 && oe === Zt && ((it.current || ee) && (P == null || P(ee)), it.current = !0);
  }, [ee, oe]);
  var Tt = Z;
  return T[mt] && Ce === Mn && (Tt = F({
    transition: "none"
  }, Tt)), [oe, Ce, Tt, ee ?? n];
}
function gm(e) {
  var n = e;
  ye(e) === "object" && (n = e.transitionSupport);
  function t(o, i) {
    return !!(o.motionName && n && i !== !1);
  }
  var r = /* @__PURE__ */ w.forwardRef(function(o, i) {
    var s = o.visible, a = s === void 0 ? !0 : s, c = o.removeOnLeave, l = c === void 0 ? !0 : c, u = o.forceRender, d = o.children, f = o.motionName, v = o.leavedClassName, m = o.eventProps, x = w.useContext(rf), h = x.motion, S = t(o, h), b = Ve(), g = Ve();
    function _() {
      try {
        return b.current instanceof HTMLElement ? b.current : Dh(g.current);
      } catch {
        return null;
      }
    }
    var y = mm(S, a, _, o), A = ae(y, 4), E = A[0], P = A[1], D = A[2], W = A[3], ee = w.useRef(W);
    W && (ee.current = !0);
    var $ = w.useCallback(function(G) {
      b.current = G, iu(i, G);
    }, [i]), N, z = F(F({}, m), {}, {
      visible: a
    });
    if (!d)
      N = null;
    else if (E === Zt)
      W ? N = d(F({}, z), $) : !l && ee.current && v ? N = d(F(F({}, z), {}, {
        className: v
      }), $) : u || !l && !v ? N = d(F(F({}, z), {}, {
        style: {
          display: "none"
        }
      }), $) : N = null;
    else {
      var q;
      P === mt ? q = "prepare" : hf(P) ? q = "active" : P === Mn && (q = "start");
      var X = Bc(f, "".concat(E, "-").concat(q));
      N = d(F(F({}, z), {}, {
        className: Ge(Bc(f, E), H(H({}, X, X && q), f, typeof f == "string")),
        style: D
      }), $);
    }
    if (/* @__PURE__ */ w.isValidElement(N) && Uh(N)) {
      var J = qh(N);
      J || (N = /* @__PURE__ */ w.cloneElement(N, {
        ref: $
      }));
    }
    return /* @__PURE__ */ w.createElement(im, {
      ref: g
    }, N);
  });
  return r.displayName = "CSSMotion", r;
}
const pf = gm(uf);
var Ms = "add", Ds = "keep", Bs = "remove", Vi = "removed";
function vm(e) {
  var n;
  return e && ye(e) === "object" && "key" in e ? n = e : n = {
    key: e
  }, F(F({}, n), {}, {
    key: String(n.key)
  });
}
function Fs() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(vm);
}
function ym() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], t = [], r = 0, o = n.length, i = Fs(e), s = Fs(n);
  i.forEach(function(l) {
    for (var u = !1, d = r; d < o; d += 1) {
      var f = s[d];
      if (f.key === l.key) {
        r < d && (t = t.concat(s.slice(r, d).map(function(v) {
          return F(F({}, v), {}, {
            status: Ms
          });
        })), r = d), t.push(F(F({}, f), {}, {
          status: Ds
        })), r += 1, u = !0;
        break;
      }
    }
    u || t.push(F(F({}, l), {}, {
      status: Bs
    }));
  }), r < o && (t = t.concat(s.slice(r).map(function(l) {
    return F(F({}, l), {}, {
      status: Ms
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
      return d !== l || f !== Bs;
    }), t.forEach(function(u) {
      u.key === l && (u.status = Ds);
    });
  }), t;
}
var bm = ["component", "children", "onVisibleChanged", "onAllRemoved"], Sm = ["status"], wm = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function Em(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pf, t = /* @__PURE__ */ function(r) {
    Vr(i, r);
    var o = ii(i);
    function i() {
      var s;
      Et(this, i);
      for (var a = arguments.length, c = new Array(a), l = 0; l < a; l++)
        c[l] = arguments[l];
      return s = o.call.apply(o, [this].concat(c)), H(yn(s), "state", {
        keyEntities: []
      }), H(yn(s), "removeKey", function(u) {
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
    return Ct(i, [{
      key: "render",
      value: function() {
        var a = this, c = this.state.keyEntities, l = this.props, u = l.component, d = l.children, f = l.onVisibleChanged;
        l.onAllRemoved;
        var v = Nr(l, bm), m = u || w.Fragment, x = {};
        return wm.forEach(function(h) {
          x[h] = v[h], delete v[h];
        }), delete v.keys, /* @__PURE__ */ w.createElement(m, v, c.map(function(h, S) {
          var b = h.status, g = Nr(h, Sm), _ = b === Ms || b === Ds;
          return /* @__PURE__ */ w.createElement(n, Bt({}, x, {
            key: g.key,
            visible: _,
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
        var l = a.keys, u = c.keyEntities, d = Fs(l), f = ym(u, d);
        return {
          keyEntities: f.filter(function(v) {
            var m = u.find(function(x) {
              var h = x.key;
              return v.key === h;
            });
            return !(m && m.status === Vi && v.status === Bs);
          })
        };
      }
    }]), i;
  }(w.Component);
  return H(t, "defaultProps", {
    component: "div"
  }), t;
}
Em(uf);
function Cm(e) {
  const {
    children: n
  } = e, [, t] = ya(), {
    motion: r
  } = t, o = w.useRef(!1);
  return o.current = o.current || r === !1, o.current ? /* @__PURE__ */ w.createElement(om, {
    motion: r
  }, n) : n;
}
const xf = /* @__PURE__ */ w.memo((e) => {
  let {
    dropdownMatchSelectWidth: n
  } = e;
  return tr("ConfigProvider").deprecated(n === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
process.env.NODE_ENV !== "production" && (xf.displayName = "PropWarning");
const _m = process.env.NODE_ENV !== "production" ? xf : () => null;
var Am = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
let zs = !1;
process.env.NODE_ENV;
const Tm = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let mf;
function Om() {
  return mf || Ps;
}
function Rm(e) {
  return Object.keys(e).some((n) => n.endsWith("Color"));
}
const km = (e) => {
  const {
    prefixCls: n,
    iconPrefixCls: t,
    theme: r,
    holderRender: o
  } = e;
  n !== void 0 && (mf = n), r && Rm(r) && (process.env.NODE_ENV !== "production" && ui(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), Rx(Om(), r));
}, Pm = (e) => {
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
    componentDisabled: _,
    segmented: y,
    statistic: A,
    spin: E,
    calendar: P,
    carousel: D,
    cascader: W,
    collapse: ee,
    typography: $,
    checkbox: N,
    descriptions: z,
    divider: q,
    drawer: X,
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
    radio: L,
    rate: ke,
    switch: Ce,
    transfer: at,
    avatar: At,
    message: it,
    tag: Tt,
    table: Pe,
    card: Se,
    tabs: qe,
    timeline: pt,
    timePicker: ct,
    upload: an,
    notification: cn,
    tree: kn,
    colorPicker: ln,
    datePicker: M,
    rangePicker: O,
    flex: Le,
    wave: Me,
    dropdown: Xe,
    warning: Ee,
    tour: Ke,
    tooltip: Ze,
    popover: Ot,
    popconfirm: Pn,
    floatButtonGroup: Rt,
    variant: Ft,
    inputNumber: zt,
    treeSelect: Ye
  } = e, Je = w.useCallback((Ae, p) => {
    const {
      prefixCls: R
    } = e;
    if (p)
      return p;
    const I = R || S.getPrefixCls("");
    return Ae ? `${I}-${Ae}` : I;
  }, [S.getPrefixCls, e.prefixCls]), lt = b || S.iconPrefixCls || va, kt = t || S.csp;
  Jx(lt, kt);
  const un = nm(g, S.theme, {
    prefixCls: Je("")
  });
  process.env.NODE_ENV !== "production" && (zs = zs || !!un);
  const In = {
    csp: kt,
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
    iconPrefixCls: lt,
    theme: un,
    segmented: y,
    statistic: A,
    spin: E,
    calendar: P,
    carousel: D,
    cascader: W,
    collapse: ee,
    typography: $,
    checkbox: N,
    descriptions: z,
    divider: q,
    drawer: X,
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
    radio: L,
    rate: ke,
    switch: Ce,
    transfer: at,
    avatar: At,
    message: it,
    tag: Tt,
    table: Pe,
    card: Se,
    tabs: qe,
    timeline: pt,
    timePicker: ct,
    upload: an,
    notification: cn,
    tree: kn,
    colorPicker: ln,
    datePicker: M,
    rangePicker: O,
    flex: Le,
    wave: Me,
    dropdown: Xe,
    warning: Ee,
    tour: Ke,
    tooltip: Ze,
    popover: Ot,
    popconfirm: Pn,
    floatButtonGroup: Rt,
    variant: Ft,
    inputNumber: zt,
    treeSelect: Ye
  };
  process.env.NODE_ENV !== "production" && tr("ConfigProvider")(!("autoInsertSpaceInButton" in e), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const $t = Object.assign({}, S);
  Object.keys(In).forEach((Ae) => {
    In[Ae] !== void 0 && ($t[Ae] = In[Ae]);
  }), Tm.forEach((Ae) => {
    const p = e[Ae];
    p && ($t[Ae] = p);
  }), typeof r < "u" && ($t.button = Object.assign({
    autoInsertSpace: r
  }, $t.button));
  const Gt = ou(() => $t, $t, (Ae, p) => {
    const R = Object.keys(Ae), I = Object.keys(p);
    return R.length !== I.length || R.some((Y) => Ae[Y] !== p[Y]);
  }), {
    layer: sr
  } = w.useContext(Hr), Wr = w.useMemo(() => ({
    prefixCls: lt,
    csp: kt,
    layer: sr ? "antd" : void 0
  }), [lt, kt, sr]);
  let ze = /* @__PURE__ */ w.createElement(w.Fragment, null, /* @__PURE__ */ w.createElement(_m, {
    dropdownMatchSelectWidth: v
  }), n);
  const Xr = w.useMemo(() => {
    var Ae, p, R, I;
    return ax(((Ae = fi.Form) === null || Ae === void 0 ? void 0 : Ae.defaultValidateMessages) || {}, ((R = (p = Gt.locale) === null || p === void 0 ? void 0 : p.Form) === null || R === void 0 ? void 0 : R.defaultValidateMessages) || {}, ((I = Gt.form) === null || I === void 0 ? void 0 : I.validateMessages) || {}, (s == null ? void 0 : s.validateMessages) || {});
  }, [Gt, s == null ? void 0 : s.validateMessages]);
  Object.keys(Xr).length > 0 && (ze = /* @__PURE__ */ w.createElement(lx.Provider, {
    value: Xr
  }, ze)), a && (ze = /* @__PURE__ */ w.createElement(Hu, {
    locale: a,
    _ANT_MARK__: Vu
  }, ze)), ze = /* @__PURE__ */ w.createElement(ma.Provider, {
    value: Wr
  }, ze), c && (ze = /* @__PURE__ */ w.createElement(Px, {
    size: c
  }, ze)), ze = /* @__PURE__ */ w.createElement(Cm, null, ze);
  const Si = w.useMemo(() => {
    const Ae = un || {}, {
      algorithm: p,
      token: R,
      components: I,
      cssVar: Y
    } = Ae, he = Am(Ae, ["algorithm", "token", "components", "cssVar"]), xe = p && (!Array.isArray(p) || p.length > 0) ? fs(p) : Xu, ce = {};
    Object.entries(I || {}).forEach((We) => {
      let [_e, Te] = We;
      const Oe = Object.assign({}, Te);
      "algorithm" in Oe && (Oe.algorithm === !0 ? Oe.theme = xe : (Array.isArray(Oe.algorithm) || typeof Oe.algorithm == "function") && (Oe.theme = fs(Oe.algorithm)), delete Oe.algorithm), ce[_e] = Oe;
    });
    const se = Object.assign(Object.assign({}, Lr), R);
    return Object.assign(Object.assign({}, he), {
      theme: xe,
      token: se,
      components: ce,
      override: Object.assign({
        override: se
      }, ce),
      cssVar: Y
    });
  }, [un]);
  return g && (ze = /* @__PURE__ */ w.createElement(Yu.Provider, {
    value: Si
  }, ze)), Gt.warning && (ze = /* @__PURE__ */ w.createElement(Fu.Provider, {
    value: Gt.warning
  }, ze)), _ !== void 0 && (ze = /* @__PURE__ */ w.createElement(kx, {
    disabled: _
  }, ze)), /* @__PURE__ */ w.createElement(nn.Provider, {
    value: Gt
  }, ze);
}, nr = (e) => {
  const n = w.useContext(nn), t = w.useContext(zu);
  return /* @__PURE__ */ w.createElement(Pm, Object.assign({
    parentContext: n,
    legacyLocale: t
  }, e));
};
nr.ConfigContext = nn;
nr.SizeContext = Dr;
nr.config = km;
nr.useConfig = Ix;
Object.defineProperty(nr, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && ui(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), Dr)
});
process.env.NODE_ENV !== "production" && (nr.displayName = "ConfigProvider");
var Im = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
function gf(e) {
  var n;
  return e == null || (n = e.getRootNode) === null || n === void 0 ? void 0 : n.call(e);
}
function Nm(e) {
  return gf(e) instanceof ShadowRoot;
}
function jm(e) {
  return Nm(e) ? gf(e) : null;
}
function Lm(e) {
  return e.replace(/-(.)/g, function(n, t) {
    return t.toUpperCase();
  });
}
function Mm(e, n) {
  on(e, "[@ant-design/icons] ".concat(n));
}
function Fc(e) {
  return ye(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (ye(e.icon) === "object" || typeof e.icon == "function");
}
function zc() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(n, t) {
    var r = e[t];
    switch (t) {
      case "class":
        n.className = r, delete n.class;
        break;
      default:
        delete n[t], n[Lm(t)] = r;
    }
    return n;
  }, {});
}
function Vs(e, n, t) {
  return t ? /* @__PURE__ */ je.createElement(e.tag, F(F({
    key: n
  }, zc(e.attrs)), t), (e.children || []).map(function(r, o) {
    return Vs(r, "".concat(n, "-").concat(e.tag, "-").concat(o));
  })) : /* @__PURE__ */ je.createElement(e.tag, F({
    key: n
  }, zc(e.attrs)), (e.children || []).map(function(r, o) {
    return Vs(r, "".concat(n, "-").concat(e.tag, "-").concat(o));
  }));
}
function vf(e) {
  return Mr(e)[0];
}
function yf(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
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
`, Bm = function(n) {
  var t = tn(ma), r = t.csp, o = t.prefixCls, i = t.layer, s = Dm;
  o && (s = s.replace(/anticon/g, o)), i && (s = "@layer ".concat(i, ` {
`).concat(s, `
}`)), tt(function() {
    var a = n.current, c = jm(a);
    bn(s, "@ant-design-icons", {
      prepend: !i,
      csp: r,
      attachTo: c
    });
  }, []);
}, Fm = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], kr = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function zm(e) {
  var n = e.primaryColor, t = e.secondaryColor;
  kr.primaryColor = n, kr.secondaryColor = t || vf(n), kr.calculated = !!t;
}
function Vm() {
  return F({}, kr);
}
var rr = function(n) {
  var t = n.icon, r = n.className, o = n.onClick, i = n.style, s = n.primaryColor, a = n.secondaryColor, c = Nr(n, Fm), l = w.useRef(), u = kr;
  if (s && (u = {
    primaryColor: s,
    secondaryColor: a || vf(s)
  }), Bm(l), Mm(Fc(t), "icon should be icon definiton, but got ".concat(t)), !Fc(t))
    return null;
  var d = t;
  return d && typeof d.icon == "function" && (d = F(F({}, d), {}, {
    icon: d.icon(u.primaryColor, u.secondaryColor)
  })), Vs(d.icon, "svg-".concat(d.name), F(F({
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
rr.displayName = "IconReact";
rr.getTwoToneColors = Vm;
rr.setTwoToneColors = zm;
function bf(e) {
  var n = yf(e), t = ae(n, 2), r = t[0], o = t[1];
  return rr.setTwoToneColors({
    primaryColor: r,
    secondaryColor: o
  });
}
function Hm() {
  var e = rr.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var Um = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
bf(Bo.primary);
var sn = /* @__PURE__ */ w.forwardRef(function(e, n) {
  var t = e.className, r = e.icon, o = e.spin, i = e.rotate, s = e.tabIndex, a = e.onClick, c = e.twoToneColor, l = Nr(e, Um), u = w.useContext(ma), d = u.prefixCls, f = d === void 0 ? "anticon" : d, v = u.rootClassName, m = Ge(v, f, H(H({}, "".concat(f, "-").concat(r.name), !!r.name), "".concat(f, "-spin"), !!o || r.name === "loading"), t), x = s;
  x === void 0 && a && (x = -1);
  var h = i ? {
    msTransform: "rotate(".concat(i, "deg)"),
    transform: "rotate(".concat(i, "deg)")
  } : void 0, S = yf(c), b = ae(S, 2), g = b[0], _ = b[1];
  return /* @__PURE__ */ w.createElement("span", Bt({
    role: "img",
    "aria-label": r.name
  }, l, {
    ref: n,
    tabIndex: x,
    onClick: a,
    className: m
  }), /* @__PURE__ */ w.createElement(rr, {
    icon: r,
    primaryColor: g,
    secondaryColor: _,
    style: h
  }));
});
sn.displayName = "AntdIcon";
sn.getTwoToneColor = Hm;
sn.setTwoToneColor = bf;
var qm = function(n, t) {
  return /* @__PURE__ */ w.createElement(sn, Bt({}, n, {
    ref: t,
    icon: Im
  }));
}, Sf = /* @__PURE__ */ w.forwardRef(qm);
process.env.NODE_ENV !== "production" && (Sf.displayName = "CheckCircleFilled");
var Wm = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, Xm = function(n, t) {
  return /* @__PURE__ */ w.createElement(sn, Bt({}, n, {
    ref: t,
    icon: Wm
  }));
}, wf = /* @__PURE__ */ w.forwardRef(Xm);
process.env.NODE_ENV !== "production" && (wf.displayName = "CloseCircleFilled");
var Ym = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, $m = function(n, t) {
  return /* @__PURE__ */ w.createElement(sn, Bt({}, n, {
    ref: t,
    icon: Ym
  }));
}, Ef = /* @__PURE__ */ w.forwardRef($m);
process.env.NODE_ENV !== "production" && (Ef.displayName = "CloseOutlined");
var Gm = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" }, Km = function(n, t) {
  return /* @__PURE__ */ w.createElement(sn, Bt({}, n, {
    ref: t,
    icon: Gm
  }));
}, Cf = /* @__PURE__ */ w.forwardRef(Km);
process.env.NODE_ENV !== "production" && (Cf.displayName = "ExclamationCircleFilled");
var Zm = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" }, Jm = function(n, t) {
  return /* @__PURE__ */ w.createElement(sn, Bt({}, n, {
    ref: t,
    icon: Zm
  }));
}, _f = /* @__PURE__ */ w.forwardRef(Jm);
process.env.NODE_ENV !== "production" && (_f.displayName = "InfoCircleFilled");
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
    summary tabIndex target title type useMap value width wmode wrap`, eg = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, tg = "".concat(Qm, " ").concat(eg).split(/[\s\n]+/), ng = "aria-", rg = "data-";
function Vc(e, n) {
  return e.indexOf(n) === 0;
}
function og(e) {
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
    (t.aria && (o === "role" || Vc(o, ng)) || // Data
    t.data && Vc(o, rg) || // Attr
    t.attr && tg.includes(o)) && (r[o] = e[o]);
  }), r;
}
const Af = (e, n, t) => /* @__PURE__ */ je.isValidElement(e) ? /* @__PURE__ */ je.cloneElement(e, typeof t == "function" ? t(e.props || {}) : t) : n;
function ig(e, n) {
  return Af(e, e, n);
}
const lo = (e, n, t, r, o) => ({
  background: e,
  border: `${Mo(r.lineWidth)} ${r.lineType} ${n}`,
  [`${o}-icon`]: {
    color: t
  }
}), sg = (e) => {
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
    [n]: Object.assign(Object.assign({}, tf(e)), {
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
}, ag = (e) => {
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
}, cg = (e) => {
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
        lineHeight: Mo(i),
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
}, lg = (e) => ({
  withDescriptionIconSize: e.fontSizeHeading3,
  defaultPadding: `${e.paddingContentVerticalSM}px 12px`,
  withDescriptionPadding: `${e.paddingMD}px ${e.paddingContentHorizontalLG}px`
}), ug = ba("Alert", (e) => [sg(e), ag(e), cg(e)], lg);
var Hc = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
const fg = {
  success: Sf,
  info: _f,
  error: wf,
  warning: Cf
}, dg = (e) => {
  const {
    icon: n,
    prefixCls: t,
    type: r
  } = e, o = fg[r] || null;
  return n ? Af(n, /* @__PURE__ */ w.createElement("span", {
    className: `${t}-icon`
  }, n), () => ({
    className: Ge(`${t}-icon`, n.props.className)
  })) : /* @__PURE__ */ w.createElement(o, {
    className: `${t}-icon`
  });
}, hg = (e) => {
  const {
    isClosable: n,
    prefixCls: t,
    closeIcon: r,
    handleClose: o,
    ariaProps: i
  } = e, s = r === !0 || r === void 0 ? /* @__PURE__ */ w.createElement(Ef, null) : r;
  return n ? /* @__PURE__ */ w.createElement("button", Object.assign({
    type: "button",
    onClick: o,
    className: `${t}-close-icon`,
    tabIndex: 0
  }, i), s) : null;
}, wa = /* @__PURE__ */ w.forwardRef((e, n) => {
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
  } = e, g = Hc(e, ["description", "prefixCls", "message", "banner", "className", "rootClassName", "style", "onMouseEnter", "onMouseLeave", "onClick", "afterClose", "showIcon", "closable", "closeText", "closeIcon", "action", "id"]), [_, y] = w.useState(!1);
  process.env.NODE_ENV !== "production" && tr("Alert").deprecated(!x, "closeText", "closable.closeIcon");
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
    style: $
  } = $u("alert"), N = E("alert", r), [z, q, X] = ug(N), J = (le) => {
    var de;
    y(!0), (de = e.onClose) === null || de === void 0 || de.call(e, le);
  }, G = w.useMemo(() => e.type !== void 0 ? e.type : i ? "warning" : "info", [e.type, i]), Z = w.useMemo(() => typeof m == "object" && m.closeIcon || x ? !0 : typeof m == "boolean" ? m : h !== !1 && h !== null && h !== void 0 ? !0 : !!D, [x, h, m, D]), re = i && v === void 0 ? !0 : v, oe = Ge(N, `${N}-${G}`, {
    [`${N}-with-description`]: !!t,
    [`${N}-no-icon`]: !re,
    [`${N}-banner`]: !!i,
    [`${N}-rtl`]: P === "rtl"
  }, ee, s, a, X, q), K = og(g, {
    aria: !0,
    data: !0
  }), te = w.useMemo(() => typeof m == "object" && m.closeIcon ? m.closeIcon : x || (h !== void 0 ? h : typeof D == "object" && D.closeIcon ? D.closeIcon : W), [h, m, x, W]), fe = w.useMemo(() => {
    const le = m ?? D;
    if (typeof le == "object") {
      const {
        closeIcon: de
      } = le;
      return Hc(le, ["closeIcon"]);
    }
    return {};
  }, [m, D]);
  return z(/* @__PURE__ */ w.createElement(pf, {
    visible: !_,
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
      ref: Hh(A, de),
      "data-show": !_,
      className: Ge(oe, pe),
      style: Object.assign(Object.assign(Object.assign({}, $), c), k),
      onMouseEnter: l,
      onMouseLeave: u,
      onClick: d,
      role: "alert"
    }, K), re ? /* @__PURE__ */ w.createElement(dg, {
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
    }, S) : null, /* @__PURE__ */ w.createElement(hg, {
      isClosable: Z,
      prefixCls: N,
      closeIcon: te,
      handleClose: J,
      ariaProps: fe
    }));
  }));
});
process.env.NODE_ENV !== "production" && (wa.displayName = "Alert");
function pg(e, n, t) {
  return n = Xn(n), au(e, la() ? Reflect.construct(n, t || [], Xn(e).constructor) : n.apply(e, t));
}
let xg = /* @__PURE__ */ function(e) {
  function n() {
    var t;
    return Et(this, n), t = pg(this, n, arguments), t.state = {
      error: void 0,
      info: {
        componentStack: ""
      }
    }, t;
  }
  return Vr(n, e), Ct(n, [{
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
      return a ? /* @__PURE__ */ w.createElement(wa, {
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
const Tf = wa;
Tf.ErrorBoundary = xg;
function mg(e, n) {
  var t = Object.assign({}, e);
  return Array.isArray(n) && n.forEach(function(r) {
    delete t[r];
  }), t;
}
function gg(e, n, t) {
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
    var g = this, _ = Date.now() - f;
    if (d)
      return;
    function y() {
      f = Date.now(), n.apply(g, S);
    }
    function A() {
      u = void 0;
    }
    !a && l && !u && y(), v(), l === void 0 && _ > e ? a ? (f = Date.now(), i || (u = setTimeout(l ? A : y, e))) : y() : i !== !0 && (u = setTimeout(l ? A : y, l === void 0 ? e - _ : e));
  }
  return x.cancel = m, x;
}
function vg(e, n, t) {
  var r = {}, o = r.atBegin, i = o === void 0 ? !1 : o;
  return gg(e, n, {
    debounceMode: i !== !1
  });
}
function Uc(e) {
  return ["small", "middle", "large"].includes(e);
}
const Of = ["wrap", "nowrap", "wrap-reverse"], Rf = ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around", "space-evenly", "stretch", "normal", "left", "right"], kf = ["center", "start", "end", "flex-start", "flex-end", "self-start", "self-end", "baseline", "normal", "stretch"], yg = (e, n) => {
  const t = n.wrap === !0 ? "wrap" : n.wrap;
  return {
    [`${e}-wrap-${t}`]: t && Of.includes(t)
  };
}, bg = (e, n) => {
  const t = {};
  return kf.forEach((r) => {
    t[`${e}-align-${r}`] = n.align === r;
  }), t[`${e}-align-stretch`] = !n.align && !!n.vertical, t;
}, Sg = (e, n) => {
  const t = {};
  return Rf.forEach((r) => {
    t[`${e}-justify-${r}`] = n.justify === r;
  }), t;
};
function wg(e, n) {
  return Ge(Object.assign(Object.assign(Object.assign({}, yg(e, n)), bg(e, n)), Sg(e, n)));
}
const Eg = (e) => {
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
}, Cg = (e) => {
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
}, _g = (e) => {
  const {
    componentCls: n
  } = e, t = {};
  return Of.forEach((r) => {
    t[`${n}-wrap-${r}`] = {
      flexWrap: r
    };
  }), t;
}, Ag = (e) => {
  const {
    componentCls: n
  } = e, t = {};
  return kf.forEach((r) => {
    t[`${n}-align-${r}`] = {
      alignItems: r
    };
  }), t;
}, Tg = (e) => {
  const {
    componentCls: n
  } = e, t = {};
  return Rf.forEach((r) => {
    t[`${n}-justify-${r}`] = {
      justifyContent: r
    };
  }), t;
}, Og = () => ({}), Rg = ba("Flex", (e) => {
  const {
    paddingXS: n,
    padding: t,
    paddingLG: r
  } = e, o = di(e, {
    flexGapSM: n,
    flexGap: t,
    flexGapLG: r
  });
  return [Eg(o), Cg(o), _g(o), Ag(o), Tg(o)];
}, Og, {
  // Flex component don't apply extra font style
  // https://github.com/ant-design/ant-design/issues/46403
  resetStyle: !1
});
var kg = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
const Pf = /* @__PURE__ */ je.forwardRef((e, n) => {
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
  } = e, d = kg(e, ["prefixCls", "rootClassName", "className", "style", "flex", "gap", "children", "vertical", "component"]), {
    flex: f,
    direction: v,
    getPrefixCls: m
  } = je.useContext(nn), x = m("flex", t), [h, S, b] = Rg(x), g = l ?? (f == null ? void 0 : f.vertical), _ = Ge(o, r, f == null ? void 0 : f.className, x, S, b, wg(x, e), {
    [`${x}-rtl`]: v === "rtl",
    [`${x}-gap-${a}`]: Uc(a),
    [`${x}-vertical`]: g
  }), y = Object.assign(Object.assign({}, f == null ? void 0 : f.style), i);
  return s && (y.flex = s), a && !Uc(a) && (y.gap = a), h(/* @__PURE__ */ je.createElement(u, Object.assign({
    ref: n,
    className: _,
    style: y
  }, mg(d, ["justify", "wrap", "align"])), c));
});
process.env.NODE_ENV !== "production" && (Pf.displayName = "Flex");
const Fo = 100, If = Fo / 5, Nf = Fo / 2 - If / 2, Hi = Nf * 2 * Math.PI, qc = 50, Wc = (e) => {
  const {
    dotClassName: n,
    style: t,
    hasCircleCls: r
  } = e;
  return /* @__PURE__ */ w.createElement("circle", {
    className: Ge(`${n}-circle`, {
      [`${n}-circle-bg`]: r
    }),
    r: Nf,
    cx: qc,
    cy: qc,
    strokeWidth: If,
    style: t
  });
}, Pg = (e) => {
  let {
    percent: n,
    prefixCls: t
  } = e;
  const r = `${t}-dot`, o = `${r}-holder`, i = `${o}-hidden`, [s, a] = w.useState(!1);
  bu(() => {
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
  }, /* @__PURE__ */ w.createElement(Wc, {
    dotClassName: r,
    hasCircleCls: !0
  }), /* @__PURE__ */ w.createElement(Wc, {
    dotClassName: r,
    style: l
  })));
};
function Ig(e) {
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
  })))), /* @__PURE__ */ w.createElement(Pg, {
    prefixCls: n,
    percent: t
  }));
}
function Ng(e) {
  const {
    prefixCls: n,
    indicator: t,
    percent: r
  } = e, o = `${n}-dot`;
  return t && /* @__PURE__ */ w.isValidElement(t) ? ig(t, {
    className: Ge(t.props.className, o),
    percent: r
  }) : /* @__PURE__ */ w.createElement(Ig, {
    prefixCls: n,
    percent: r
  });
}
const jg = new Mu("antSpinMove", {
  to: {
    opacity: 1
  }
}), Lg = new Mu("antRotate", {
  to: {
    transform: "rotate(405deg)"
  }
}), Mg = (e) => {
  const {
    componentCls: n,
    calc: t
  } = e;
  return {
    [n]: Object.assign(Object.assign({}, tf(e)), {
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
          animationName: jg,
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
          animationName: Lg,
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
}, Dg = (e) => {
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
}, Bg = ba("Spin", (e) => {
  const n = di(e, {
    spinDotDefault: e.colorTextDescription
  });
  return [Mg(n)];
}, Dg), Fg = 200, Xc = [[30, 0.05], [70, 0.03], [96, 0.01]];
function zg(e, n) {
  const [t, r] = w.useState(0), o = w.useRef(null), i = n === "auto";
  return w.useEffect(() => (i && e && (r(0), o.current = setInterval(() => {
    r((s) => {
      const a = 100 - s;
      for (let c = 0; c < Xc.length; c += 1) {
        const [l, u] = Xc[c];
        if (s <= l)
          return s + a * u;
      }
      return s;
    });
  }, Fg)), () => {
    clearInterval(o.current);
  }), [i, e]), i ? t : n;
}
var Vg = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
let jf;
function Hg(e, n) {
  return !!e && !!n && !Number.isNaN(Number(n));
}
const Pr = (e) => {
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
  } = e, x = Vg(e, ["prefixCls", "spinning", "delay", "className", "rootClassName", "size", "tip", "wrapperClassName", "style", "children", "fullscreen", "indicator", "percent"]), {
    getPrefixCls: h,
    direction: S,
    className: b,
    style: g,
    indicator: _
  } = $u("spin"), y = h("spin", t), [A, E, P] = Bg(y), [D, W] = w.useState(() => r && !Hg(r, o)), ee = zg(D, m);
  w.useEffect(() => {
    if (r) {
      const G = vg(o, () => {
        W(!0);
      });
      return G(), () => {
        var Z;
        (Z = G == null ? void 0 : G.cancel) === null || Z === void 0 || Z.call(G);
      };
    }
    W(!1);
  }, [o, r]);
  const $ = w.useMemo(() => typeof d < "u" && !f, [d, f]);
  if (process.env.NODE_ENV !== "production") {
    const G = tr("Spin");
    process.env.NODE_ENV !== "production" && G(!c || $ || f, "usage", "`tip` only work in nest or fullscreen pattern.");
  }
  const N = Ge(y, b, {
    [`${y}-sm`]: a === "small",
    [`${y}-lg`]: a === "large",
    [`${y}-spinning`]: D,
    [`${y}-show-text`]: !!c,
    [`${y}-rtl`]: S === "rtl"
  }, i, !f && s, E, P), z = Ge(`${y}-container`, {
    [`${y}-blur`]: D
  }), q = (n = v ?? _) !== null && n !== void 0 ? n : jf, X = Object.assign(Object.assign({}, g), u), J = /* @__PURE__ */ w.createElement("div", Object.assign({}, x, {
    style: X,
    className: N,
    "aria-live": "polite",
    "aria-busy": D
  }), /* @__PURE__ */ w.createElement(Ng, {
    prefixCls: y,
    indicator: q,
    percent: ee
  }), c && ($ || f) ? /* @__PURE__ */ w.createElement("div", {
    className: `${y}-text`
  }, c) : null);
  return A($ ? /* @__PURE__ */ w.createElement("div", Object.assign({}, x, {
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
Pr.setDefaultIndicator = (e) => {
  jf = e;
};
process.env.NODE_ENV !== "production" && (Pr.displayName = "Spin");
function Lf(e, n) {
  return function() {
    return e.apply(n, arguments);
  };
}
const { toString: Ug } = Object.prototype, { getPrototypeOf: Ea } = Object, { iterator: hi, toStringTag: Mf } = Symbol, pi = /* @__PURE__ */ ((e) => (n) => {
  const t = Ug.call(n);
  return e[t] || (e[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), _t = (e) => (e = e.toLowerCase(), (n) => pi(n) === e), xi = (e) => (n) => typeof n === e, { isArray: or } = Array, Br = xi("undefined");
function qg(e) {
  return e !== null && !Br(e) && e.constructor !== null && !Br(e.constructor) && rt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Df = _t("ArrayBuffer");
function Wg(e) {
  let n;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? n = ArrayBuffer.isView(e) : n = e && e.buffer && Df(e.buffer), n;
}
const Xg = xi("string"), rt = xi("function"), Bf = xi("number"), mi = (e) => e !== null && typeof e == "object", Yg = (e) => e === !0 || e === !1, To = (e) => {
  if (pi(e) !== "object")
    return !1;
  const n = Ea(e);
  return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Mf in e) && !(hi in e);
}, $g = _t("Date"), Gg = _t("File"), Kg = _t("Blob"), Zg = _t("FileList"), Jg = (e) => mi(e) && rt(e.pipe), Qg = (e) => {
  let n;
  return e && (typeof FormData == "function" && e instanceof FormData || rt(e.append) && ((n = pi(e)) === "formdata" || // detect form-data instance
  n === "object" && rt(e.toString) && e.toString() === "[object FormData]"));
}, e1 = _t("URLSearchParams"), [t1, n1, r1, o1] = ["ReadableStream", "Request", "Response", "Headers"].map(_t), i1 = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ur(e, n, { allOwnKeys: t = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), or(e))
    for (r = 0, o = e.length; r < o; r++)
      n.call(null, e[r], r, e);
  else {
    const i = t ? Object.getOwnPropertyNames(e) : Object.keys(e), s = i.length;
    let a;
    for (r = 0; r < s; r++)
      a = i[r], n.call(null, e[a], a, e);
  }
}
function Ff(e, n) {
  n = n.toLowerCase();
  const t = Object.keys(e);
  let r = t.length, o;
  for (; r-- > 0; )
    if (o = t[r], n === o.toLowerCase())
      return o;
  return null;
}
const mn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, zf = (e) => !Br(e) && e !== mn;
function Hs() {
  const { caseless: e } = zf(this) && this || {}, n = {}, t = (r, o) => {
    const i = e && Ff(n, o) || o;
    To(n[i]) && To(r) ? n[i] = Hs(n[i], r) : To(r) ? n[i] = Hs({}, r) : or(r) ? n[i] = r.slice() : n[i] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Ur(arguments[r], t);
  return n;
}
const s1 = (e, n, t, { allOwnKeys: r } = {}) => (Ur(n, (o, i) => {
  t && rt(o) ? e[i] = Lf(o, t) : e[i] = o;
}, { allOwnKeys: r }), e), a1 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), c1 = (e, n, t, r) => {
  e.prototype = Object.create(n.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: n.prototype
  }), t && Object.assign(e.prototype, t);
}, l1 = (e, n, t, r) => {
  let o, i, s;
  const a = {};
  if (n = n || {}, e == null) return n;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      s = o[i], (!r || r(s, e, n)) && !a[s] && (n[s] = e[s], a[s] = !0);
    e = t !== !1 && Ea(e);
  } while (e && (!t || t(e, n)) && e !== Object.prototype);
  return n;
}, u1 = (e, n, t) => {
  e = String(e), (t === void 0 || t > e.length) && (t = e.length), t -= n.length;
  const r = e.indexOf(n, t);
  return r !== -1 && r === t;
}, f1 = (e) => {
  if (!e) return null;
  if (or(e)) return e;
  let n = e.length;
  if (!Bf(n)) return null;
  const t = new Array(n);
  for (; n-- > 0; )
    t[n] = e[n];
  return t;
}, d1 = /* @__PURE__ */ ((e) => (n) => e && n instanceof e)(typeof Uint8Array < "u" && Ea(Uint8Array)), h1 = (e, n) => {
  const r = (e && e[hi]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const i = o.value;
    n.call(e, i[0], i[1]);
  }
}, p1 = (e, n) => {
  let t;
  const r = [];
  for (; (t = e.exec(n)) !== null; )
    r.push(t);
  return r;
}, x1 = _t("HTMLFormElement"), m1 = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(t, r, o) {
    return r.toUpperCase() + o;
  }
), Yc = (({ hasOwnProperty: e }) => (n, t) => e.call(n, t))(Object.prototype), g1 = _t("RegExp"), Vf = (e, n) => {
  const t = Object.getOwnPropertyDescriptors(e), r = {};
  Ur(t, (o, i) => {
    let s;
    (s = n(o, i, e)) !== !1 && (r[i] = s || o);
  }), Object.defineProperties(e, r);
}, v1 = (e) => {
  Vf(e, (n, t) => {
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
}, y1 = (e, n) => {
  const t = {}, r = (o) => {
    o.forEach((i) => {
      t[i] = !0;
    });
  };
  return or(e) ? r(e) : r(String(e).split(n)), t;
}, b1 = () => {
}, S1 = (e, n) => e != null && Number.isFinite(e = +e) ? e : n;
function w1(e) {
  return !!(e && rt(e.append) && e[Mf] === "FormData" && e[hi]);
}
const E1 = (e) => {
  const n = new Array(10), t = (r, o) => {
    if (mi(r)) {
      if (n.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        n[o] = r;
        const i = or(r) ? [] : {};
        return Ur(r, (s, a) => {
          const c = t(s, o + 1);
          !Br(c) && (i[a] = c);
        }), n[o] = void 0, i;
      }
    }
    return r;
  };
  return t(e, 0);
}, C1 = _t("AsyncFunction"), _1 = (e) => e && (mi(e) || rt(e)) && rt(e.then) && rt(e.catch), Hf = ((e, n) => e ? setImmediate : n ? ((t, r) => (mn.addEventListener("message", ({ source: o, data: i }) => {
  o === mn && i === t && r.length && r.shift()();
}, !1), (o) => {
  r.push(o), mn.postMessage(t, "*");
}))(`axios@${Math.random()}`, []) : (t) => setTimeout(t))(
  typeof setImmediate == "function",
  rt(mn.postMessage)
), A1 = typeof queueMicrotask < "u" ? queueMicrotask.bind(mn) : typeof process < "u" && process.nextTick || Hf, T1 = (e) => e != null && rt(e[hi]), C = {
  isArray: or,
  isArrayBuffer: Df,
  isBuffer: qg,
  isFormData: Qg,
  isArrayBufferView: Wg,
  isString: Xg,
  isNumber: Bf,
  isBoolean: Yg,
  isObject: mi,
  isPlainObject: To,
  isReadableStream: t1,
  isRequest: n1,
  isResponse: r1,
  isHeaders: o1,
  isUndefined: Br,
  isDate: $g,
  isFile: Gg,
  isBlob: Kg,
  isRegExp: g1,
  isFunction: rt,
  isStream: Jg,
  isURLSearchParams: e1,
  isTypedArray: d1,
  isFileList: Zg,
  forEach: Ur,
  merge: Hs,
  extend: s1,
  trim: i1,
  stripBOM: a1,
  inherits: c1,
  toFlatObject: l1,
  kindOf: pi,
  kindOfTest: _t,
  endsWith: u1,
  toArray: f1,
  forEachEntry: h1,
  matchAll: p1,
  isHTMLForm: x1,
  hasOwnProperty: Yc,
  hasOwnProp: Yc,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Vf,
  freezeMethods: v1,
  toObjectSet: y1,
  toCamelCase: m1,
  noop: b1,
  toFiniteNumber: S1,
  findKey: Ff,
  global: mn,
  isContextDefined: zf,
  isSpecCompliantForm: w1,
  toJSONObject: E1,
  isAsyncFn: C1,
  isThenable: _1,
  setImmediate: Hf,
  asap: A1,
  isIterable: T1
};
function Q(e, n, t, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", n && (this.code = n), t && (this.config = t), r && (this.request = r), o && (this.response = o, this.status = o.status ? o.status : null);
}
C.inherits(Q, Error, {
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
      config: C.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Uf = Q.prototype, qf = {};
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
  qf[e] = { value: e };
});
Object.defineProperties(Q, qf);
Object.defineProperty(Uf, "isAxiosError", { value: !0 });
Q.from = (e, n, t, r, o, i) => {
  const s = Object.create(Uf);
  return C.toFlatObject(e, s, function(c) {
    return c !== Error.prototype;
  }, (a) => a !== "isAxiosError"), Q.call(s, e.message, n, t, r, o), s.cause = e, s.name = e.name, i && Object.assign(s, i), s;
};
const O1 = null;
function Us(e) {
  return C.isPlainObject(e) || C.isArray(e);
}
function Wf(e) {
  return C.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function $c(e, n, t) {
  return e ? e.concat(n).map(function(o, i) {
    return o = Wf(o), !t && i ? "[" + o + "]" : o;
  }).join(t ? "." : "") : n;
}
function R1(e) {
  return C.isArray(e) && !e.some(Us);
}
const k1 = C.toFlatObject(C, {}, null, function(n) {
  return /^is[A-Z]/.test(n);
});
function gi(e, n, t) {
  if (!C.isObject(e))
    throw new TypeError("target must be an object");
  n = n || new FormData(), t = C.toFlatObject(t, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(x, h) {
    return !C.isUndefined(h[x]);
  });
  const r = t.metaTokens, o = t.visitor || u, i = t.dots, s = t.indexes, c = (t.Blob || typeof Blob < "u" && Blob) && C.isSpecCompliantForm(n);
  if (!C.isFunction(o))
    throw new TypeError("visitor must be a function");
  function l(m) {
    if (m === null) return "";
    if (C.isDate(m))
      return m.toISOString();
    if (!c && C.isBlob(m))
      throw new Q("Blob is not supported. Use a Buffer instead.");
    return C.isArrayBuffer(m) || C.isTypedArray(m) ? c && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function u(m, x, h) {
    let S = m;
    if (m && !h && typeof m == "object") {
      if (C.endsWith(x, "{}"))
        x = r ? x : x.slice(0, -2), m = JSON.stringify(m);
      else if (C.isArray(m) && R1(m) || (C.isFileList(m) || C.endsWith(x, "[]")) && (S = C.toArray(m)))
        return x = Wf(x), S.forEach(function(g, _) {
          !(C.isUndefined(g) || g === null) && n.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? $c([x], _, i) : s === null ? x : x + "[]",
            l(g)
          );
        }), !1;
    }
    return Us(m) ? !0 : (n.append($c(h, x, i), l(m)), !1);
  }
  const d = [], f = Object.assign(k1, {
    defaultVisitor: u,
    convertValue: l,
    isVisitable: Us
  });
  function v(m, x) {
    if (!C.isUndefined(m)) {
      if (d.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + x.join("."));
      d.push(m), C.forEach(m, function(S, b) {
        (!(C.isUndefined(S) || S === null) && o.call(
          n,
          S,
          C.isString(b) ? b.trim() : b,
          x,
          f
        )) === !0 && v(S, x ? x.concat(b) : [b]);
      }), d.pop();
    }
  }
  if (!C.isObject(e))
    throw new TypeError("data must be an object");
  return v(e), n;
}
function Gc(e) {
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
function Ca(e, n) {
  this._pairs = [], e && gi(e, this, n);
}
const Xf = Ca.prototype;
Xf.append = function(n, t) {
  this._pairs.push([n, t]);
};
Xf.toString = function(n) {
  const t = n ? function(r) {
    return n.call(this, r, Gc);
  } : Gc;
  return this._pairs.map(function(o) {
    return t(o[0]) + "=" + t(o[1]);
  }, "").join("&");
};
function P1(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Yf(e, n, t) {
  if (!n)
    return e;
  const r = t && t.encode || P1;
  C.isFunction(t) && (t = {
    serialize: t
  });
  const o = t && t.serialize;
  let i;
  if (o ? i = o(n, t) : i = C.isURLSearchParams(n) ? n.toString() : new Ca(n, t).toString(r), i) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class Kc {
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
    C.forEach(this.handlers, function(r) {
      r !== null && n(r);
    });
  }
}
const $f = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, I1 = typeof URLSearchParams < "u" ? URLSearchParams : Ca, N1 = typeof FormData < "u" ? FormData : null, j1 = typeof Blob < "u" ? Blob : null, L1 = {
  isBrowser: !0,
  classes: {
    URLSearchParams: I1,
    FormData: N1,
    Blob: j1
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, _a = typeof window < "u" && typeof document < "u", qs = typeof navigator == "object" && navigator || void 0, M1 = _a && (!qs || ["ReactNative", "NativeScript", "NS"].indexOf(qs.product) < 0), D1 = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", B1 = _a && window.location.href || "http://localhost", F1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: _a,
  hasStandardBrowserEnv: M1,
  hasStandardBrowserWebWorkerEnv: D1,
  navigator: qs,
  origin: B1
}, Symbol.toStringTag, { value: "Module" })), $e = {
  ...F1,
  ...L1
};
function z1(e, n) {
  return gi(e, new $e.classes.URLSearchParams(), Object.assign({
    visitor: function(t, r, o, i) {
      return $e.isNode && C.isBuffer(t) ? (this.append(r, t.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, n));
}
function V1(e) {
  return C.matchAll(/\w+|\[(\w*)]/g, e).map((n) => n[0] === "[]" ? "" : n[1] || n[0]);
}
function H1(e) {
  const n = {}, t = Object.keys(e);
  let r;
  const o = t.length;
  let i;
  for (r = 0; r < o; r++)
    i = t[r], n[i] = e[i];
  return n;
}
function Gf(e) {
  function n(t, r, o, i) {
    let s = t[i++];
    if (s === "__proto__") return !0;
    const a = Number.isFinite(+s), c = i >= t.length;
    return s = !s && C.isArray(o) ? o.length : s, c ? (C.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !a) : ((!o[s] || !C.isObject(o[s])) && (o[s] = []), n(t, r, o[s], i) && C.isArray(o[s]) && (o[s] = H1(o[s])), !a);
  }
  if (C.isFormData(e) && C.isFunction(e.entries)) {
    const t = {};
    return C.forEachEntry(e, (r, o) => {
      n(V1(r), o, t, 0);
    }), t;
  }
  return null;
}
function U1(e, n, t) {
  if (C.isString(e))
    try {
      return (n || JSON.parse)(e), C.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (t || JSON.stringify)(e);
}
const qr = {
  transitional: $f,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(n, t) {
    const r = t.getContentType() || "", o = r.indexOf("application/json") > -1, i = C.isObject(n);
    if (i && C.isHTMLForm(n) && (n = new FormData(n)), C.isFormData(n))
      return o ? JSON.stringify(Gf(n)) : n;
    if (C.isArrayBuffer(n) || C.isBuffer(n) || C.isStream(n) || C.isFile(n) || C.isBlob(n) || C.isReadableStream(n))
      return n;
    if (C.isArrayBufferView(n))
      return n.buffer;
    if (C.isURLSearchParams(n))
      return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), n.toString();
    let a;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return z1(n, this.formSerializer).toString();
      if ((a = C.isFileList(n)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return gi(
          a ? { "files[]": n } : n,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return i || o ? (t.setContentType("application/json", !1), U1(n)) : n;
  }],
  transformResponse: [function(n) {
    const t = this.transitional || qr.transitional, r = t && t.forcedJSONParsing, o = this.responseType === "json";
    if (C.isResponse(n) || C.isReadableStream(n))
      return n;
    if (n && C.isString(n) && (r && !this.responseType || o)) {
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
    FormData: $e.classes.FormData,
    Blob: $e.classes.Blob
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
C.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  qr.headers[e] = {};
});
const q1 = C.toObjectSet([
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
]), W1 = (e) => {
  const n = {};
  let t, r, o;
  return e && e.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), t = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!t || n[t] && q1[t]) && (t === "set-cookie" ? n[t] ? n[t].push(r) : n[t] = [r] : n[t] = n[t] ? n[t] + ", " + r : r);
  }), n;
}, Zc = Symbol("internals");
function xr(e) {
  return e && String(e).trim().toLowerCase();
}
function Oo(e) {
  return e === !1 || e == null ? e : C.isArray(e) ? e.map(Oo) : String(e);
}
function X1(e) {
  const n = /* @__PURE__ */ Object.create(null), t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = t.exec(e); )
    n[r[1]] = r[2];
  return n;
}
const Y1 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ui(e, n, t, r, o) {
  if (C.isFunction(r))
    return r.call(this, n, t);
  if (o && (n = t), !!C.isString(n)) {
    if (C.isString(r))
      return n.indexOf(r) !== -1;
    if (C.isRegExp(r))
      return r.test(n);
  }
}
function $1(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (n, t, r) => t.toUpperCase() + r);
}
function G1(e, n) {
  const t = C.toCamelCase(" " + n);
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
      const u = xr(c);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = C.findKey(o, u);
      (!d || o[d] === void 0 || l === !0 || l === void 0 && o[d] !== !1) && (o[d || c] = Oo(a));
    }
    const s = (a, c) => C.forEach(a, (l, u) => i(l, u, c));
    if (C.isPlainObject(n) || n instanceof this.constructor)
      s(n, t);
    else if (C.isString(n) && (n = n.trim()) && !Y1(n))
      s(W1(n), t);
    else if (C.isObject(n) && C.isIterable(n)) {
      let a = {}, c, l;
      for (const u of n) {
        if (!C.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        a[l = u[0]] = (c = a[l]) ? C.isArray(c) ? [...c, u[1]] : [c, u[1]] : u[1];
      }
      s(a, t);
    } else
      n != null && i(t, n, r);
    return this;
  }
  get(n, t) {
    if (n = xr(n), n) {
      const r = C.findKey(this, n);
      if (r) {
        const o = this[r];
        if (!t)
          return o;
        if (t === !0)
          return X1(o);
        if (C.isFunction(t))
          return t.call(this, o, r);
        if (C.isRegExp(t))
          return t.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(n, t) {
    if (n = xr(n), n) {
      const r = C.findKey(this, n);
      return !!(r && this[r] !== void 0 && (!t || Ui(this, this[r], r, t)));
    }
    return !1;
  }
  delete(n, t) {
    const r = this;
    let o = !1;
    function i(s) {
      if (s = xr(s), s) {
        const a = C.findKey(r, s);
        a && (!t || Ui(r, r[a], a, t)) && (delete r[a], o = !0);
      }
    }
    return C.isArray(n) ? n.forEach(i) : i(n), o;
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
    return C.forEach(this, (o, i) => {
      const s = C.findKey(r, i);
      if (s) {
        t[s] = Oo(o), delete t[i];
        return;
      }
      const a = n ? $1(i) : String(i).trim();
      a !== i && delete t[i], t[a] = Oo(o), r[a] = !0;
    }), this;
  }
  concat(...n) {
    return this.constructor.concat(this, ...n);
  }
  toJSON(n) {
    const t = /* @__PURE__ */ Object.create(null);
    return C.forEach(this, (r, o) => {
      r != null && r !== !1 && (t[o] = n && C.isArray(r) ? r.join(", ") : r);
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
    const r = (this[Zc] = this[Zc] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(s) {
      const a = xr(s);
      r[a] || (G1(o, s), r[a] = !0);
    }
    return C.isArray(n) ? n.forEach(i) : i(n), this;
  }
};
ot.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
C.reduceDescriptors(ot.prototype, ({ value: e }, n) => {
  let t = n[0].toUpperCase() + n.slice(1);
  return {
    get: () => e,
    set(r) {
      this[t] = r;
    }
  };
});
C.freezeMethods(ot);
function qi(e, n) {
  const t = this || qr, r = n || t, o = ot.from(r.headers);
  let i = r.data;
  return C.forEach(e, function(a) {
    i = a.call(t, i, o.normalize(), n ? n.status : void 0);
  }), o.normalize(), i;
}
function Kf(e) {
  return !!(e && e.__CANCEL__);
}
function ir(e, n, t) {
  Q.call(this, e ?? "canceled", Q.ERR_CANCELED, n, t), this.name = "CanceledError";
}
C.inherits(ir, Q, {
  __CANCEL__: !0
});
function Zf(e, n, t) {
  const r = t.config.validateStatus;
  !t.status || !r || r(t.status) ? e(t) : n(new Q(
    "Request failed with status code " + t.status,
    [Q.ERR_BAD_REQUEST, Q.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],
    t.config,
    t.request,
    t
  ));
}
function K1(e) {
  const n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return n && n[1] || "";
}
function Z1(e, n) {
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
function J1(e, n) {
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
  const o = Z1(50, 250);
  return J1((i) => {
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
}, Jc = (e, n) => {
  const t = e != null;
  return [(r) => n[0]({
    lengthComputable: t,
    total: e,
    loaded: r
  }), n[1]];
}, Qc = (e) => (...n) => C.asap(() => e(...n)), Q1 = $e.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, n) => (t) => (t = new URL(t, $e.origin), e.protocol === t.protocol && e.host === t.host && (n || e.port === t.port)))(
  new URL($e.origin),
  $e.navigator && /(msie|trident)/i.test($e.navigator.userAgent)
) : () => !0, ev = $e.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, n, t, r, o, i) {
      const s = [e + "=" + encodeURIComponent(n)];
      C.isNumber(t) && s.push("expires=" + new Date(t).toGMTString()), C.isString(r) && s.push("path=" + r), C.isString(o) && s.push("domain=" + o), i === !0 && s.push("secure"), document.cookie = s.join("; ");
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
function tv(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function nv(e, n) {
  return n ? e.replace(/\/?\/$/, "") + "/" + n.replace(/^\/+/, "") : e;
}
function Jf(e, n, t) {
  let r = !tv(n);
  return e && (r || t == !1) ? nv(e, n) : n;
}
const el = (e) => e instanceof ot ? { ...e } : e;
function An(e, n) {
  n = n || {};
  const t = {};
  function r(l, u, d, f) {
    return C.isPlainObject(l) && C.isPlainObject(u) ? C.merge.call({ caseless: f }, l, u) : C.isPlainObject(u) ? C.merge({}, u) : C.isArray(u) ? u.slice() : u;
  }
  function o(l, u, d, f) {
    if (C.isUndefined(u)) {
      if (!C.isUndefined(l))
        return r(void 0, l, d, f);
    } else return r(l, u, d, f);
  }
  function i(l, u) {
    if (!C.isUndefined(u))
      return r(void 0, u);
  }
  function s(l, u) {
    if (C.isUndefined(u)) {
      if (!C.isUndefined(l))
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
    headers: (l, u, d) => o(el(l), el(u), d, !0)
  };
  return C.forEach(Object.keys(Object.assign({}, e, n)), function(u) {
    const d = c[u] || o, f = d(e[u], n[u], u);
    C.isUndefined(f) && d !== a || (t[u] = f);
  }), t;
}
const Qf = (e) => {
  const n = An({}, e);
  let { data: t, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: i, headers: s, auth: a } = n;
  n.headers = s = ot.from(s), n.url = Yf(Jf(n.baseURL, n.url, n.allowAbsoluteUrls), e.params, e.paramsSerializer), a && s.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let c;
  if (C.isFormData(t)) {
    if ($e.hasStandardBrowserEnv || $e.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if ((c = s.getContentType()) !== !1) {
      const [l, ...u] = c ? c.split(";").map((d) => d.trim()).filter(Boolean) : [];
      s.setContentType([l || "multipart/form-data", ...u].join("; "));
    }
  }
  if ($e.hasStandardBrowserEnv && (r && C.isFunction(r) && (r = r(n)), r || r !== !1 && Q1(n.url))) {
    const l = o && i && ev.read(i);
    l && s.set(o, l);
  }
  return n;
}, rv = typeof XMLHttpRequest < "u", ov = rv && function(e) {
  return new Promise(function(t, r) {
    const o = Qf(e);
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
      Zf(function(E) {
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
      let _ = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const y = o.transitional || $f;
      o.timeoutErrorMessage && (_ = o.timeoutErrorMessage), r(new Q(
        _,
        y.clarifyTimeoutError ? Q.ETIMEDOUT : Q.ECONNABORTED,
        e,
        h
      )), h = null;
    }, i === void 0 && s.setContentType(null), "setRequestHeader" in h && C.forEach(s.toJSON(), function(_, y) {
      h.setRequestHeader(y, _);
    }), C.isUndefined(o.withCredentials) || (h.withCredentials = !!o.withCredentials), a && a !== "json" && (h.responseType = o.responseType), l && ([f, m] = zo(l, !0), h.addEventListener("progress", f)), c && h.upload && ([d, v] = zo(c), h.upload.addEventListener("progress", d), h.upload.addEventListener("loadend", v)), (o.cancelToken || o.signal) && (u = (g) => {
      h && (r(!g || g.type ? new ir(null, e, h) : g), h.abort(), h = null);
    }, o.cancelToken && o.cancelToken.subscribe(u), o.signal && (o.signal.aborted ? u() : o.signal.addEventListener("abort", u)));
    const b = K1(o.url);
    if (b && $e.protocols.indexOf(b) === -1) {
      r(new Q("Unsupported protocol " + b + ":", Q.ERR_BAD_REQUEST, e));
      return;
    }
    h.send(i || null);
  });
}, iv = (e, n) => {
  const { length: t } = e = e ? e.filter(Boolean) : [];
  if (n || t) {
    let r = new AbortController(), o;
    const i = function(l) {
      if (!o) {
        o = !0, a();
        const u = l instanceof Error ? l : this.reason;
        r.abort(u instanceof Q ? u : new ir(u instanceof Error ? u.message : u));
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
    return c.unsubscribe = () => C.asap(a), c;
  }
}, sv = function* (e, n) {
  let t = e.byteLength;
  if (t < n) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < t; )
    o = r + n, yield e.slice(r, o), r = o;
}, av = async function* (e, n) {
  for await (const t of cv(e))
    yield* sv(t, n);
}, cv = async function* (e) {
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
}, tl = (e, n, t, r) => {
  const o = av(e, n);
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
}, vi = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", e0 = vi && typeof ReadableStream == "function", lv = vi && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (n) => e.encode(n))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), t0 = (e, ...n) => {
  try {
    return !!e(...n);
  } catch {
    return !1;
  }
}, uv = e0 && t0(() => {
  let e = !1;
  const n = new Request($e.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !n;
}), nl = 64 * 1024, Ws = e0 && t0(() => C.isReadableStream(new Response("").body)), Vo = {
  stream: Ws && ((e) => e.body)
};
vi && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((n) => {
    !Vo[n] && (Vo[n] = C.isFunction(e[n]) ? (t) => t[n]() : (t, r) => {
      throw new Q(`Response type '${n}' is not supported`, Q.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const fv = async (e) => {
  if (e == null)
    return 0;
  if (C.isBlob(e))
    return e.size;
  if (C.isSpecCompliantForm(e))
    return (await new Request($e.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (C.isArrayBufferView(e) || C.isArrayBuffer(e))
    return e.byteLength;
  if (C.isURLSearchParams(e) && (e = e + ""), C.isString(e))
    return (await lv(e)).byteLength;
}, dv = async (e, n) => {
  const t = C.toFiniteNumber(e.getContentLength());
  return t ?? fv(n);
}, hv = vi && (async (e) => {
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
  } = Qf(e);
  l = l ? (l + "").toLowerCase() : "text";
  let v = iv([o, i && i.toAbortSignal()], s), m;
  const x = v && v.unsubscribe && (() => {
    v.unsubscribe();
  });
  let h;
  try {
    if (c && uv && t !== "get" && t !== "head" && (h = await dv(u, r)) !== 0) {
      let y = new Request(n, {
        method: "POST",
        body: r,
        duplex: "half"
      }), A;
      if (C.isFormData(r) && (A = y.headers.get("content-type")) && u.setContentType(A), y.body) {
        const [E, P] = Jc(
          h,
          zo(Qc(c))
        );
        r = tl(y.body, nl, E, P);
      }
    }
    C.isString(d) || (d = d ? "include" : "omit");
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
    const g = Ws && (l === "stream" || l === "response");
    if (Ws && (a || g && x)) {
      const y = {};
      ["status", "statusText", "headers"].forEach((D) => {
        y[D] = b[D];
      });
      const A = C.toFiniteNumber(b.headers.get("content-length")), [E, P] = a && Jc(
        A,
        zo(Qc(a), !0)
      ) || [];
      b = new Response(
        tl(b.body, nl, E, () => {
          P && P(), x && x();
        }),
        y
      );
    }
    l = l || "text";
    let _ = await Vo[C.findKey(Vo, l) || "text"](b, e);
    return !g && x && x(), await new Promise((y, A) => {
      Zf(y, A, {
        data: _,
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
}), Xs = {
  http: O1,
  xhr: ov,
  fetch: hv
};
C.forEach(Xs, (e, n) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: n });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: n });
  }
});
const rl = (e) => `- ${e}`, pv = (e) => C.isFunction(e) || e === null || e === !1, n0 = {
  getAdapter: (e) => {
    e = C.isArray(e) ? e : [e];
    const { length: n } = e;
    let t, r;
    const o = {};
    for (let i = 0; i < n; i++) {
      t = e[i];
      let s;
      if (r = t, !pv(t) && (r = Xs[(s = String(t)).toLowerCase()], r === void 0))
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
` + i.map(rl).join(`
`) : " " + rl(i[0]) : "as no adapter specified";
      throw new Q(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Xs
};
function Wi(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ir(null, e);
}
function ol(e) {
  return Wi(e), e.headers = ot.from(e.headers), e.data = qi.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), n0.getAdapter(e.adapter || qr.adapter)(e).then(function(r) {
    return Wi(e), r.data = qi.call(
      e,
      e.transformResponse,
      r
    ), r.headers = ot.from(r.headers), r;
  }, function(r) {
    return Kf(r) || (Wi(e), r && r.response && (r.response.data = qi.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = ot.from(r.response.headers))), Promise.reject(r);
  });
}
const r0 = "1.9.0", yi = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, n) => {
  yi[e] = function(r) {
    return typeof r === e || "a" + (n < 1 ? "n " : " ") + e;
  };
});
const il = {};
yi.transitional = function(n, t, r) {
  function o(i, s) {
    return "[Axios v" + r0 + "] Transitional option '" + i + "'" + s + (r ? ". " + r : "");
  }
  return (i, s, a) => {
    if (n === !1)
      throw new Q(
        o(s, " has been removed" + (t ? " in " + t : "")),
        Q.ERR_DEPRECATED
      );
    return t && !il[s] && (il[s] = !0, console.warn(
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
function xv(e, n, t) {
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
  assertOptions: xv,
  validators: yi
}, It = Ro.validators;
let wn = class {
  constructor(n) {
    this.defaults = n || {}, this.interceptors = {
      request: new Kc(),
      response: new Kc()
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
    typeof n == "string" ? (t = t || {}, t.url = n) : t = n || {}, t = An(this.defaults, t);
    const { transitional: r, paramsSerializer: o, headers: i } = t;
    r !== void 0 && Ro.assertOptions(r, {
      silentJSONParsing: It.transitional(It.boolean),
      forcedJSONParsing: It.transitional(It.boolean),
      clarifyTimeoutError: It.transitional(It.boolean)
    }, !1), o != null && (C.isFunction(o) ? t.paramsSerializer = {
      serialize: o
    } : Ro.assertOptions(o, {
      encode: It.function,
      serialize: It.function
    }, !0)), t.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : t.allowAbsoluteUrls = !0), Ro.assertOptions(t, {
      baseUrl: It.spelling("baseURL"),
      withXsrfToken: It.spelling("withXSRFToken")
    }, !0), t.method = (t.method || this.defaults.method || "get").toLowerCase();
    let s = i && C.merge(
      i.common,
      i[t.method]
    );
    i && C.forEach(
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
      const m = [ol.bind(this), void 0];
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
      u = ol.call(this, v);
    } catch (m) {
      return Promise.reject(m);
    }
    for (d = 0, f = l.length; d < f; )
      u = u.then(l[d++], l[d++]);
    return u;
  }
  getUri(n) {
    n = An(this.defaults, n);
    const t = Jf(n.baseURL, n.url, n.allowAbsoluteUrls);
    return Yf(t, n.params, n.paramsSerializer);
  }
};
C.forEach(["delete", "get", "head", "options"], function(n) {
  wn.prototype[n] = function(t, r) {
    return this.request(An(r || {}, {
      method: n,
      url: t,
      data: (r || {}).data
    }));
  };
});
C.forEach(["post", "put", "patch"], function(n) {
  function t(r) {
    return function(i, s, a) {
      return this.request(An(a || {}, {
        method: n,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: s
      }));
    };
  }
  wn.prototype[n] = t(), wn.prototype[n + "Form"] = t(!0);
});
let mv = class o0 {
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
      r.reason || (r.reason = new ir(i, s, a), t(r.reason));
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
      token: new o0(function(o) {
        n = o;
      }),
      cancel: n
    };
  }
};
function gv(e) {
  return function(t) {
    return e.apply(null, t);
  };
}
function vv(e) {
  return C.isObject(e) && e.isAxiosError === !0;
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
Object.entries(Ys).forEach(([e, n]) => {
  Ys[n] = e;
});
function i0(e) {
  const n = new wn(e), t = Lf(wn.prototype.request, n);
  return C.extend(t, wn.prototype, n, { allOwnKeys: !0 }), C.extend(t, n, null, { allOwnKeys: !0 }), t.create = function(o) {
    return i0(An(e, o));
  }, t;
}
const Re = i0(qr);
Re.Axios = wn;
Re.CanceledError = ir;
Re.CancelToken = mv;
Re.isCancel = Kf;
Re.VERSION = r0;
Re.toFormData = gi;
Re.AxiosError = Q;
Re.Cancel = Re.CanceledError;
Re.all = function(n) {
  return Promise.all(n);
};
Re.spread = gv;
Re.isAxiosError = vv;
Re.mergeConfig = An;
Re.AxiosHeaders = ot;
Re.formToJSON = (e) => Gf(C.isHTMLForm(e) ? new FormData(e) : e);
Re.getAdapter = n0.getAdapter;
Re.HttpStatusCode = Ys;
Re.default = Re;
const {
  Axios: Zv,
  AxiosError: Jv,
  CanceledError: Qv,
  isCancel: ey,
  CancelToken: ty,
  VERSION: ny,
  all: ry,
  Cancel: oy,
  isAxiosError: iy,
  spread: sy,
  toFormData: ay,
  AxiosHeaders: cy,
  HttpStatusCode: ly,
  formToJSON: uy,
  getAdapter: fy,
  mergeConfig: dy
} = Re, vt = Tn;
(function(e, n) {
  const t = Tn, r = e();
  for (; ; )
    try {
      if (-parseInt(t(321)) / 1 * (parseInt(t(311)) / 2) + parseInt(t(330)) / 3 * (-parseInt(t(327)) / 4) + parseInt(t(292)) / 5 * (-parseInt(t(294)) / 6) + parseInt(t(319)) / 7 + parseInt(t(280)) / 8 * (-parseInt(t(309)) / 9) + -parseInt(t(282)) / 10 * (parseInt(t(301)) / 11) + parseInt(t(320)) / 12 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Ho, 968740);
const mr = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = Tn;
      if (t) {
        const i = t[o(291)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), yv = mr(void 0, function() {
  const e = Tn, n = function() {
    const i = Tn;
    let s;
    try {
      s = Function(i(299) + i(290) + (i(283) + i(324) + i(288) + " )") + ");")();
    } catch {
      s = window;
    }
    return s;
  }, t = n(), r = t[e(293)] = t[e(293)] || {}, o = [e(289), e(322), e(281), e(284), e(298), e(314), e(325)];
  for (let i = 0; i < o[e(310)]; i++) {
    const s = mr[e(297) + "r"][e(303)][e(326)](mr), a = o[i], c = r[a] || s;
    s[e(328)] = mr[e(326)](mr), s[e(308)] = c[e(308)][e(326)](c), r[a] = s;
  }
});
yv();
vt(295) + vt(287) + vt(306) + vt(315);
function Tn(e, n) {
  const t = Ho();
  return Tn = function(r, o) {
    return r = r - 280, t[r];
  }, Tn(e, n);
}
Re[vt(312)][vt(316) + vt(304)] = !0;
const bv = async (e) => {
  var t, r, o, i;
  const n = vt;
  try {
    return (await Re(e))[n(285)];
  } catch (s) {
    throw ((r = (t = s[n(318)]) == null ? void 0 : t[n(285)]) == null ? void 0 : r[n(317)]) || ((i = (o = s[n(318)]) == null ? void 0 : o[n(285)]) == null ? void 0 : i[n(284)]) || s[n(317)];
  }
}, Sv = {};
function Ho() {
  const e = ["toString", "18oBaQwU", "length", "1802326sISwwZ", "defaults", "PUT", "table", "v1/client", "withCreden", "message", "response", "13444991vgXxAF", "68341476djZCRR", "2IrgOfF", "warn", "DELETE", 'ctor("retu', "trace", "bind", "4aJZUNn", "__proto__", "Content-Ty", "3822321AgDDaG", "4783192phPhRu", "info", "7459490VUWCal", "{}.constru", "error", "data", "n/json", ".168.11.76", 'rn this")(', "log", "nction() ", "apply", "5YEROLP", "console", "5297802yzHMbf", "http://192", "GET", "constructo", "exception", "return (fu", "PATCH", "22rBihRa", "POST", "prototype", "tials", "applicatio", ":3000/api/", "params"];
  return Ho = function() {
    return e;
  }, Ho();
}
Sv[vt(329) + "pe"] = vt(305) + vt(286);
const be = On;
(function(e, n) {
  const t = On, r = e();
  for (; ; )
    try {
      if (-parseInt(t(230)) / 1 + parseInt(t(228)) / 2 + -parseInt(t(231)) / 3 + parseInt(t(258)) / 4 + -parseInt(t(264)) / 5 * (parseInt(t(227)) / 6) + -parseInt(t(253)) / 7 + parseInt(t(241)) / 8 * (parseInt(t(257)) / 9) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Uo, 627200);
const gr = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = On;
      if (t) {
        const i = t[o(237)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), wv = gr(void 0, function() {
  const e = On, n = function() {
    const i = On;
    let s;
    try {
      s = Function(i(260) + i(244) + (i(240) + i(247) + i(223) + " )") + ");")();
    } catch {
      s = window;
    }
    return s;
  }, t = n(), r = t[e(226)] = t[e(226)] || {}, o = [e(218), e(248), e(259), e(256), e(261), e(250), e(229)];
  for (let i = 0; i < o[e(234)]; i++) {
    const s = gr[e(254) + "r"][e(249)][e(251)](gr), a = o[i], c = r[a] || s;
    s[e(235)] = gr[e(251)](gr), s[e(236)] = c[e(236)][e(251)](c), r[a] = s;
  }
});
wv();
const dn = {};
dn[be(233)] = be(225) + "E", dn[be(219)] = be(232), dn[be(221)] = be(243) + "N", dn[be(220)] = be(225) + "E", dn[be(263)] = be(232), dn[be(252)] = be(243) + "N";
const Lt = dn, $s = {};
$s[be(262)] = be(232), $s[be(239)] = be(243) + "N";
const Ev = $s, Cv = be(222), _v = be(255), Av = be(238) + be(242), s0 = be(245) + be(266);
function Uo() {
  const e = ["return (fu", "exception", "keyup", "touchend", "5505260UsYahW", "shortcutEv", "enuHide", "log", "mouseup", "touchmove", "mousedown", "moveEvent", 'rn this")(', "fullscreen", "ACTION_MOV", "console", "6QZEiMy", "1087918kIeqQK", "trace", "297934mRbADJ", "1434846wbCTlm", "ACTION_UP", "mousemove", "length", "__proto__", "toString", "apply", "keyBoardEv", "keydown", "{}.constru", "8fXBVZr", "ent", "ACTION_DOW", "nction() ", "assistiveM", "Event", 'ctor("retu', "warn", "prototype", "table", "bind", "touchstart", "2453822lKBtWn", "constructo", "wheelEvent", "error", "14540004sHuTIL", "2781996RfkFKq", "info"];
  return Uo = function() {
    return e;
  }, Uo();
}
const Gs = be(265) + be(242);
function On(e, n) {
  const t = Uo();
  return On = function(r, o) {
    return r = r - 218, t[r];
  }, On(e, n);
}
const Tv = be(224) + be(246);
(function(e, n) {
  const t = Mt, r = e();
  for (; ; )
    try {
      if (parseInt(t(166)) / 1 * (parseInt(t(207)) / 2) + parseInt(t(163)) / 3 + parseInt(t(190)) / 4 * (-parseInt(t(246)) / 5) + parseInt(t(196)) / 6 + -parseInt(t(230)) / 7 + parseInt(t(237)) / 8 + -parseInt(t(192)) / 9 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(qo, 559186);
const vr = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = Mt;
      if (t) {
        const i = t[o(177)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), Ov = vr(void 0, function() {
  const e = Mt, n = function() {
    const i = Mt;
    let s;
    try {
      s = Function(i(218) + i(220) + (i(239) + i(195) + i(241) + " )") + ");")();
    } catch {
      s = window;
    }
    return s;
  }, t = n(), r = t[e(206)] = t[e(206)] || {}, o = [e(212), e(154), e(170), e(173), e(216), e(248), e(222)];
  for (let i = 0; i < o[e(228)]; i++) {
    const s = vr[e(203) + "r"][e(168)][e(240)](vr), a = o[i], c = r[a] || s;
    s[e(242)] = vr[e(240)](vr), s[e(164)] = c[e(164)][e(240)](c), r[a] = s;
  }
});
Ov();
const Rv = ({ isMobile: e, assistive: n, onImgEvent: t, canvasContent: r, imageRef: o }) => {
  const [i, s] = et(!1), a = (d) => {
    const f = Mt;
    if (d[f(249) + f(176)](), !o[f(214)]) return;
    const v = o[f(214)];
    let m = Lt[d[f(233)]];
    if (n[f(185)] == !0 || n[f(236)] == !0) {
      m == Lt[f(208)] && t(s0, {});
      return;
    }
    if (m == Lt[f(201)] && s(!0), m != Lt[f(201)] && i == !1) return;
    m == Lt[f(208)] && s(!1);
    let x, h;
    const S = v[f(189) + f(199) + "t"]();
    if (d[f(233)][f(161)](f(172))) {
      const { touches: g, changedTouches: _ } = d, y = g[0] ?? _[0];
      x = y[f(157)] - S[f(179)], h = y[f(167)] - S[f(238)];
    } else d[f(233)][f(161)](f(188)) && (x = d[f(245)] - S[f(179)], h = d[f(211)] - S[f(238)]);
    const b = {};
    b[f(223)] = f(191), b[f(232)] = m, b.x = x, b.y = h, b[f(209)] = S[f(209)], b[f(194)] = S[f(194)], t(Cv, b), v[f(231)]();
  }, c = (d) => {
    const f = Mt;
    if (d[f(249) + f(176)](), !o[f(214)]) return;
    const v = o[f(214)], m = Math[f(153)](d[f(182)]), x = v[f(189) + f(199) + "t"](), h = {};
    h[f(223)] = f(184), h[f(209)] = v[f(183) + "h"], h[f(194)] = v[f(243) + "ht"], h.x = d[f(245)] - x[f(179)], h.y = d[f(211)] - x[f(238)], h[f(198)] = m, t(_v, h), v[f(231)]();
  }, l = async (d) => {
    const f = Mt;
    if (d[f(249) + f(176)](), !o[f(214)]) return;
    const v = o[f(214)], m = Ev[d[f(233)]], x = d[f(219)][f(205) + "e"]();
    if (((g) => {
      const _ = f;
      return [_(162), _(160), _(155)][_(161)](g);
    })(x) == !0) return;
    const S = async () => {
      const g = f, _ = {};
      _[g(223)] = g(234), _[g(232)] = m, _[g(235)] = g(213) + g(178), _[g(219)] = d[g(219)], _[g(152)] = 0, _[g(169)] = 0;
      const y = _;
      return d[g(174)] == !0 ? x == "c" ? y[g(235)] = g(186) : x == "a" ? (y[g(235)] = g(244) + g(200), y[g(169)] = 4096, y[g(219)] = 29) : x == "v" && (y[g(235)] = g(247), y[g(219)] = await navigator[g(158)][g(181)]()) : x == g(165) ? (y[g(235)] = g(244) + g(200), y[g(219)] = 19) : x == g(175) ? (y[g(235)] = g(244) + g(200), y[g(219)] = 20) : x == g(187) ? (y[g(235)] = g(244) + g(200), y[g(219)] = 21) : x == g(217) ? (y[g(235)] = g(244) + g(200), y[g(219)] = 22) : x == g(204) ? (y[g(235)] = g(244) + g(200), y[g(219)] = 67) : x == g(221) ? (y[g(235)] = g(244) + g(200), y[g(219)] = 66) : x == g(226) && (y[g(235)] = g(244) + g(200), y[g(219)] = 61), y[g(233)] == g(213) + g(178) && d[g(225)] == !0 && (y[g(219)] = y[g(219)][g(156) + "e"]()), y;
    }, b = await S();
    b && t(Av, b), v[f(231)]();
  };
  tt(() => {
    const d = Mt, f = o[d(214)];
    if (f) {
      const v = {};
      v[d(197)] = !1;
      const m = v;
      return e ? (f[d(171) + d(180)](d(215), a, m), f[d(171) + d(180)](d(159), a, m), f[d(171) + d(180)](d(250), a)) : (f[d(171) + d(180)](d(224), c, m), f[d(171) + d(180)](d(202), l), [d(210), d(201), d(208)][d(193)]((x) => {
        const h = d;
        f[h(171) + h(180)](x, a);
      })), () => {
        const x = d;
        f && (e ? [x(215), x(159), x(250)][x(193)]((h) => {
          const S = x;
          f[S(227) + S(229)](h, a);
        }) : ([x(210), x(201), x(208), x(224), x(202)][x(193)]((h) => {
          const S = x;
          f[S(227) + S(229)](h, a);
        }), f[x(227) + x(229)](x(202), l)));
      };
    }
  }, [e, a, c, l]);
  const u = { ref: o, ...r };
  return V.jsx(kd, u);
};
function Mt(e, n) {
  const t = qo();
  return Mt = function(r, o) {
    return r = r - 152, t[r];
  }, Mt(e, n);
}
function qo() {
  const e = ["offsetWidt", "wheelEvent", "isDown", "COPY_TEXT", "arrowleft", "mouse", "getBoundin", "252IDfZvw", "touchEvent", "11160549fqjmcY", "forEach", "height", 'ctor("retu', "1511826tLcVZV", "passive", "delta", "gClientRec", "ODE", "mousedown", "keydown", "constructo", "backspace", "toLowerCas", "console", "4FKvlHt", "mouseup", "width", "mousemove", "clientY", "log", "KEYBOARD_T", "current", "touchstart", "exception", "arrowright", "return (fu", "key", "nction() ", "enter", "trace", "action", "wheel", "shiftKey", "tab", "removeEven", "length", "tListener", "1674946mcBDVi", "focus", "keyAction", "type", "keyEvent", "typeKey", "showMenu", "1292840jLATal", "top", "{}.constru", "bind", 'rn this")(', "__proto__", "offsetHeig", "KEYBOARD_C", "clientX", "9045BmDYbG", "PASTE_TEXT", "table", "preventDef", "touchend", "repeat", "sign", "warn", "capslock", "toUpperCas", "pageX", "clipboard", "touchmove", "shift", "includes", "control", "2756190YFuREu", "toString", "arrowup", "410093SmUAPH", "pageY", "prototype", "meta_state", "info", "addEventLi", "touch", "error", "ctrlKey", "arrowdown", "ault", "apply", "EXT", "left", "stener", "readText", "deltaY"];
  return qo = function() {
    return e;
  }, qo();
}
const kv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAABGdBTUEAALGPC/xhBQAACklpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAAEiJnVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/stRzjPAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAJcEhZcwAADsQAAA7EAZUrDhsAAD0ASURBVHic7b15dCTXdaf5Re47EonEVlgKVQXUSoqLSJEii6JELZQoS5bMM5J7uiWrR97kGUuW3Z6ZtnvG9unlzHS7vfX42D2WLavVbrft9liLZe0U2awSSZES12KtqMK+JhKJTOS+xPzxABJVRFUBiBcRGZnvOycPwDrAi0vEi1/cd99992ojx+5EobiGLmA/0Lfx/dZPcuMTAwJAcON3OgAX4AGiG/+WA2pAA1jb+LciUAKyQGrjs3LNZwGY3PheoXgNj90GKGzBDRwCjgEjwEHgwMb3I7wuOEbZOk7XHn4/B0xsfK4Alze+PwuMA3VD1ikchxKs1icJ3AbcuvF5E3CC1z2jZibK63ZfSxE4A7wEvLzxeRHhsSlaFCVYrYUHIU73bXweAAZstcg8gsBdG5+tzAJPAt/f+LyIWJYqWgBNxbAcTQAhSicRAnUvELHVouYjBzyDEK9TCDEr2WqRYs8owXIeo8B7gfcBbwdCtlrjPArA48DXgW8Al2y1RrErlGA1Pz7gIeD9CKEatdecluMSQri+BjwGVOw1R3EjlGA1J0HgYeBR4MeAuK3WtA8Z4O+BvwW+iQjsK5oIJVjNgxt4J/CPgA8j8poU9rEGfAn4L8B3USkUTYESLPs5BPw08HFgn822KLZnDvgi8CeI/C+FTSjBsgc/8BPAJxHxKc1ecxQ7RAe+B3wO+P+Asr3mtB9KsKzlGPAzwE8BCZttURgjDXwB4XWdtdmWtsFltwFtwjsQwdwzwGdRYtUKJBD38gzi3r7DXnPaAyVY5uEBfhJ4DrFd/n7U0q8V0RD39jHEvf5J1AkS01CCJZ8I8EuI/J6/BN5sqzUKK3kz4p5fQnhf6tSBZJRgySMI/AqiosDvIsqzKNqT/cDvIObCP8MZB80dgRIs4/iBTyMm528D3faao2giuoF/h5gbn0bMFYUBlGDtHR/wcwj3//cRxe4Uiu3oQ8yRS4g547PXHOeiBGv3aMD/gNgd+mNg0F5zFA5iEDFnzgAfQW3C7BolWLvjXkSZkr9GHUJW7J1R4K8Qc+lem21xFEqwdkY/8HnUBFPIZfMF+OeIOaa4CUqwbowHsT19FvgEyoVXyEdDnHw4C/wyKofrhijBuj53ICpV/g6qcoLCfDqAf4+Yc+q83HVQgvVGgsC/BX6AmjgK67kTIVr/FpW/9QaUYF3NQ4juK7+Kcs0V9uFBzMGXEXNSsYESLEEH8GfAdxD1qRSKZuAQYk7+GSosASjBAnHK/iXgn6KC6ormQ0PMzZdQ3lZbC5YfEeT8DjBssy0Kxc0YBr6N2ARq2yM+7SpYR4CnENvI7fo3UDgPFyLN5mngqM222EI7PqyfQNQtusNmOxSKvXI7Yg5/wl4zrKedBCuIyFb/PKpOkcL5hHl9PrdNM912EawxxBGIT9hsh0Ihm08g5vaYzXZYQjsI1iOIJNDbbbZDoTCL24BnEaWaW5pWFiwN+DXgq6jOyYrWpwP4CvDrtHB6TqsKVgD4r8C/pnX/HxWKa3EB/wox9wM222IKrfgwJxGtxT9ityEKhU18BPEMJO02RDatJlhjiPyq++w2RKGwmfsQz0JLBeNbSbBOIm6QqgSqUAhGEc/ESbsNkUWrCNZHEccWuuw2RKFoMroQz8ZH7TZEBq0gWJ9GNK9sySCjQiGBAOIZ+bTdhhjFETWfTt5/97b/fur0s78B/KalxigUzkRDtBpLnLz/7t+83g+dOv2sZQbtBUcI1rWcOv2shji1/ks2m6LYwO12oWkuXC4Nl+t1x73RaNBo6Oh6g3q9YaOFig1+49TpZ+PAZ0/ef7dutzG7xXGCtSFWfwh8ym5bWh2P200g4Mcf8BPw+/AH/Hg9HjweD16vB4/Xg9fjwe1273jMer1OtVajVq1Rrdao1WpUazXKpTKlckV8LZWp1esm/p+1PZ8BfKdOP/s/O020HCVYp04/6wb+I/BJu21pJTweD+FwkFAoSDgUIhwOEgwG8HjkTw+32y0Ezn/jkk61Wo1isUQ+XyRfKFAoFMnni9RqNek2tSmfQojWz528/27HvB0cI1gbnpUSK4NomkYkHCIWixCNio/f33yd0z0ez2v2baVcrpDLrZPLrZPNrrOeL6DrjnISmolPApw6/ezPOMXT0kaOOaIxjFoGGiAcDhGPx4jHY8SiUdzuVtgcFtTrDbK5HJlMlkwmSz5fsNskJ/LHwC+cvP9uXQXd5fC7KLHaMS6Xi3g8RiIRJ9HZgc/XfB6ULNxuF53xDjrjokdDpVIhvbpGOp0hk8nSaKhA/w74eaCMAzaxnOBhqdSFHeByuejs7KA7maCzM95SXtReqdcbrK5mWE6lWV1dU+J1c34T+C27jbgRzS5Yvwj8gd1GNDOxWITe3m66ujrx7GK3rt2o1eusrKyyuLhMNrtutznNzKeB/2C3EdejmQXrHwNfpIVr++wVj8dDb08XfX09BIMqwX+3FIslFhaWWFpeoVpVu47XoAMfA/7CbkO2o1kF617gCaB1gy97IBIJM7Cvj66uTlwupeNGaTR00ulVZmcXyK3n7TanmagA7wMes9uQa2lGwRpF1KjuttuQZiGRiDM40EcsFrXblJYlm80xM7tAOp2x25RmYQ14AHjZbkO20myC1Y0Qq7YvEaNpGj09SQYH+tSyz0KKxRIzswssLaVUfhfMAG8B5u02ZJNmEqwQwgW9x25D7ETTNLq7EwwPDRAItG2DX9splcpMTc+xvLzS7sL1DPAQ0BQJbu54d7/dNoAIrH8esW5uW5LJBMeOjtLX223KsRjFzvF4PHR1ddKdTFCr1igUinabZBeDwGHgv9ltCDSPYP0z4FfsNsIuotEIx44eYmBfH16vEqpmwuv1kEwmSCTi5AtFKpWK3SbZwQmEh3XabkOaYUn4TuCbQNslEfn9Pkb2D9HdnbDbFMUOWV5OMzE5TbncdsJVBx5GNLewDbsFawj4IW22I6hpGoOD/QwN9l9VO0rhDBqNBjMz80zPzLdbfGsZuAuYsssAOwXLB5wCti8n2qLEohFGR0cIhYJ2m7InfF4fPp9f1MTyePFs1MNyuVy4NCG+brcbNA10nfpGXauG3qDRaFCv1zdqYFWp1WpUKmUqVWd6K4VCkUuXJsjm2ipz/jlEU4uyHRe3U7D+BPhpuy5uNW63m5H9g/T399htyk1xu92EgiGCwRChQAi/34/f58fn86Np8hNWdV2nUilTrpQpl8sUSgWKxQKFYuE1wWtm5ueXmJiccYStkvhTbHp27RKsjwH/yY4L20E8HmNs9EBT1p3SNI1QKEw0HCUSjhIOhZuqukOlUiFfyLOez5HL5ygU8k25DCuXK1y8dIVMJmu3KVbxU9jwDNshWAeBF4CWT9t2uTT2Dw8yMNBntylXEQyG6Ih2EO+IEw5FHBVHazQa5AvrrGUzZLJrFItNkR70GrOzC0xOzdBoNJ+oSiYH3AGMW3lRqwXLAzyJOCvY0oSCQQ4fPkgkErLbFDRNIxbtoDPeSUcsjs/bPB6UUSrVCmvZDKuZVbK5tabwvtbzBS6cv0yh2PK5W88g4lmWnSC3Og/rNxBVGFqa3t5ujh8btXUJqGkaHdEO+vsGOLD/IN1dPYRD4V01jHACbrebcChMVyJJT3cvAX8QvdGwNZDv83np7U1SrdZYb+0KqIMbXx+36oJWelj3IyowtNYTswWXy8WhQ/vp7UnaZoPf5yfZ1U13VzfeFvKkdku1WmF5ZZnUyjLlii0bWgAsLqUYH59s5eKBdeDtiB1/07FKsGLAi8CIFRezA7/fx7FjY0TC9iwB4x2d9HT30hHtsOX6zcxabo2l5UUya6u2XH89X+Ds2YutnGw6AdwGmL7jYNWS8I8RKtySdHREueXEUYIWH1Z2uVwku7o5NDJKb3cvAb+q6rAdAX+Ars4uuhJJdF2nVCpaGuvy+bz0dCdZX8+3qmjFgX7gy2ZfyAoP6z2IozctSXd3F2OjBywtqOdyuenr6aO3u08dkt4DtVqNxeUFFpYWaDSsy53SdZ2LF6+wtLxi2TUt5hHg62ZewGzBigKvAMNmXsQuhob2sX94wLLruVwuert76evZp4RKArVajYWlORaXFy2NMU1OzTI9PWfZ9SxkGnFQOmfWBcxeEv4O8G4zL2AHmqYxNnaAgX3W5FdpmkZPspfRA4fpjCcclTfVzLhcLmLRDrq7emg0GhQsyumKd8TwB/ysrq5Zcj0L6UAsD79m1gXM9LDuQVQPbamny+VycfToIRKdcUuuF4vEGB4aIRhw5tlDJ1EsFZmaniC7bk22eno1w7lz4622g9hAZAQ8bcbgZgmWB3FI8jYzBrcLt9vFsWNjxDtipl/L7/MzNLCfznin6ddSXM1qZpXp2UlL0iEya1nOnr1Ivd5SovUS8GZMSCg1a0n4WeDjZgxsFx6PmxMnjtBhciMITdPo7elj9MBhQkH7s+TbkWAgSHeyh4beoFAwt5tOIOCnoyPGyspqKx3n6UWkODwle2AzPKw+4Dwi96ol8Hg83HLiiOnHbILBEAeGDxAORUy9jmLn5AvrTExdMT2+tb5e4JUz56nVWqZPYhY4AizIHNQMD+v/oYUaSbjdbm45cYRoNGzqdfp7+zk0MobPpxpPNBM+r4/urh50vcF63ry6Vz6fV3haqTSNJjgPKQE/ojDnl2QOKluw7kG0uW6JLp8ul4sTxw8Ti5nn8fi8PkYPHqY72WNKrSmFcTYPj0ejMXK5LHWTcrf8fh/RaIRUKt0Uh7glcBsiB3NG1oAyBUsD/ooWybnSNI3jx8aIx81b2XZ2dHJ49KjaAXQIm+c0y6USpXLJlGsEAn4i0TCpVNqU8S1GA44jOmLJGVBiDOsjCMFqCY4eOUQyaU5zCE3TGOgfpL93nynjm4Xb7SYWixCLRohFo0TCIQIBP4FggIDfh9/v3/g5Fx6Ph1qt9truV7lcplSuUCqWKJXKrOcLZHM5srl1stl1x1XrnF+cY3Z+xjRPKLWyyrlzl0wZ2wY+Cvy1jIFkCZYPOIsozud4RvYPMjhoTkKtx+Ph0MgosSY/pBzw++nv76Gnu4uuRCfJZIKOWNS0Eslr2RypVJqV9CrLy2kWlpabvhdgNrfG+MQl0wLlMzPzTExKW03ZyWXgGGD4IKUswfo5xAFnx9Pf18OhQ/tNGTsYCHL40JGmDKwHgwGGBvoZGtpHf1+PZYmxNyKzlmV2boHpmTmmZ+YpFs1ZhhmhUilzYfw8xZI54jo+Psn8wpIpY1vMp5CgETIEKwBc5PViXo4lkYhz7OioKV5ELBpj9MDhpiqgF4tGGBs9wMEDw/T1djd10F/XdRYWl7l8ZYqL4xNks6YdV9s19XqdS1cukM3Jz5DXdZ2z5y6RTmekj20xM8AYYOitI0OwfhH4A6OD2E0oFOS2Nx3H7ZZ/kiiZ6GZk+EBTCEIwGODo4UMcHjtAb49z20EuLi1z4eIVzl0YbwrPS9d1JqaukEovSx+7Xm/w0kuvkm/yJfIO+AwGtcKoYIUQReibq8vCLvG43dx223GCQfn1pPb1DTDQb7/zOTTYzy3Hj3DwwHBTeXlGqdfrXJ6Y5pUz55mesb8Cwuz8DHMLs9LHLZXKvPDiq05PLF0ADiHa3u8Jo2kNnwF+wsgAzcCRI4eImXDkZmhgmH191pWfuRa3283xo2M8/O63ceftt9CV6Gy5Sg8ul4uuRJxjR0YZGz1Avd4gvZqxLY8pFo3hdrvJ5uRWYvB4PITDIZadXUsrAqwhiiLsCSMeVhThXTl3XYHwPPbvl+8B7R8aoSfZK33cneDxuLn1xFHefMetju0wbYRCociPXniFl145S61mT7rEUmqRyekJ6eNOTc0y5exaWssIL2tPQUgjHtangQ/t9ZebgY6OGGNj8mNLdomV2+XiTbcc5ZH3voPRQyN4vV7LbWgGvF4vw0MDHD82RqOhk1pesdzjCocieL1e1rIZqePGYlGy2XXKZfsaaxgkDKTZo5e1Vw/LB1wBnJX5uAWPx8Mdt5+Q3opraGCYvh5LW6cBcOjgfu5/612WlL5xGpm1LKefeo7xy5OWX3thaZ7p2SmpY5YrFZ5//oyT41nziIY0u87L2quH9Qkc3l/w8OGDxKJyzwjakb3e1dXJ+97zDu6681YCFjfBcAqBgJ/DowcY2NfPUmrF0l3FSFgk2+YkFgX0uN0EggEnH9+JAlPAj3b7i3sRLA34Ig6OXfX2JBmSnMnek+xlaMC6Y5Rut5t7776Dd7/rbcQ7zK3R1SrEYhFuOX4Yt8vN/MKSZcvEaCRGrV4jL7G2VigUpFypkHduo9ZR4I92+0t7EayHEQX6HEkg4Of4scNSu9zEOzo5sP+gZXlW/X09/PgH3sOhg/txNUFul5PQNI2BfX2MjY6wvLzC+rq5Bfo26Yh2UCgWpB6ajnd0kEqlbdtYMEg3osDf+G5+aS+C9YcIdXQkR4+MEgrJy7cKhyMcPnjEknQBl8vFW+66jXc9dJJQsP12/2QSDAQ4dmQUTXNZ4m1pmkZnRyfZ9SzVqpzehC6XRigUdHLbsG7gP+/mF3YrWMeBf49D61319CQZGJCX4+r3+Tk6dgy32/yWW9FImA++/90cPWLO0aF2RNM0Bgf6GBrcx/TMPJWKuU1ON0VrNZOWVp0iEPBTLjt2aXgI+BtEqsOO2K1g/Rrw1l0a1RR4vV5OHB+T5gm5XC6OHDqK34Juy0OD+/jQBx+mM97cFR6cSjQS5tiRUZaWV0w/o+hyuYlGoqyspqR5dR0dURaXVpzYfUcDdHbRfHU3guUHvoA4juM4Do8dIBKRV+Z4ZOgAHR1xaeNdj7vufBPvfuhk2+ZUWYXH4+Ho4UM0Gg3m5hdNvZbX68Pn9ZFZW5UynsvlIuD3kVqRM57FHEaEmXbk3u5GsD4CfGyPRtlKR0eMAyND0sbrSfaYfuTG7XLxrnfcz52336KWgBahaRpDg/uIRSNMTppXnA8gFApTq8nbOQyFgmSz65Scl1AaQOR07ijFYTfro5/Zkzk2o2kaBw/KSzcIBUMMD45IG287/H4fH/yx93Ds6Jip11Fsz7GjY/z4B94jPan4WoYH90tt5Xbw4LBTX24/vdMf3KlgjQJv35MpNtPX201Y0nk6l8vFwRFzg96hUJBHP/SI9Dwxxe4YHOjn0Q89YupZTE3TODQyKi2uGgoF6et1ZHrkPcCJnfzgTv9Sn8SBO4Mej5vhYXlLt6GBYVMbRkQjYR790PtIdqluz81AsquTRz/0PqISY5/XEggEpSYcDw8P4PE4snzQJ3byQzsRLPdOB2s2hgb34fXKSTmId3SaeqA5Go3w6IcfUTuBTUZnvINHP/wIUcnHuLbSk+wl3iHnJeX1ehgacuQR348htOaG7ESwHsSBBfp8Pi/9/T1SxnK73YwMjUgZazvC4RAf/uDD0s82KuQQi0b48AcfJhw2b4N8ZGhEWmHF/r4e0+NvJtDLDsJOOxGsjxg2xQaGBvdJiw0M7RvG6zVnAgSDAT70gYdVlYUmJ94R40MfeNiUqrQgUh2G9slZGrpcLqd6WR+92Q/c7In2AI/KscU6/H4fvZKCj9FIlO6kHE/tWjweDx945F10JeKmjK+QS1cizgceeRcejzknG7qTPUQjcg6y9/YknVi948PADRMObyZYDwFJaeZYhPCujO8RaJrGyLA5rRY1TeO973nQqbs6bUtfbzfvfc+Dpu0UjwzLOUQvcsoct9OcRGjOdbmZYN3URWs2hHclR2N7u/sImHT05v633sXBEevK0SjkcXBkmJP33W3K2AF/gN5uOSHjnp6kE2NZNwxB3UiwfAgXzVHs6++V8obyeLymZbMfGTvInbffYsrYCmu447YTHBkzx/ve1zeAx2P8KJamaezrt6evgAE+jNCebbmRYL0TcFRCkNvtkha7Gtw3aEo7rGRXJ+98x/3Sx1VYzzvfcb8pOXNut5vBfXIao/T2djutrVsnQnu25UaC9QH5tphLX1+PlKS5YCBIMiE/tuTzennkvQ+ZFrRVWIvH4+GR9z6Ez4SD6clEt5QkZY/HTV+f4+Kk19WeGwnW+00wxDRkur8D/YOmBFUffOAelb7QYsQ7Yjz4tnulj6tpmrQGvLLCJBZyXe25nmDdCjgqIpxIxKUEGEPBEJ3xhASLrubw6AF1mLlFOXZklMOjB6SP2xlPSDkc7ff7SDgrdWYYoUFv4HqC9T7zbDEHWTuDZrSVD4WCvOPB+6SPq2ge3vHgfYRD8jPhZc1HB6bPbKtB1xOsd5toiHT8fh+JzrjhcULBsLQzXVt58IF7nbi9rNgFfr+PBx+4R/q48Y5OQkHjh687OzucNge31aDtBCsInDTXFrn09sjxrvp65R+ZPHhgmLFDI9LHVTQfo4dGOHRAfiSlr1dOAqis58QiTiK06Cq2E6yTiCqAjkFGKoPP5yMR75Jgzet4PB7e/oD8gKyieXnwbW+VvguciCfw+Yx7R7JSfiwiADxw7T9uJ1gPmm+LPDpiUSmubm93n/SdlLvuvFVqHXlF8xMJh7jrzm3jxXtG0zQp2e9+v89pu9Rvu/YfthOsN/xQM5NMGt/Rc7nc0g84RyNh7rxd7sRVOIM7b79VetG/7q4eXC7jOYbd3fJ3wE3kDc7TtYIVAN5ijS3G0TSNZNJ4kDzRmcAtYTJs5b573+zUyo8Kg3g8bt5675uljul2u0l0Ghebrq6Ek3Ky7uaaONa1gvUWRDsvR9DREZXS/qq7S653leiMc9ikc2YKZ3Bk7KCUneutyJinHo+beNwxy0I/QrReYzvBcgzJLuNvnGAwRCQst9LnPW+5w0lvMYUJaJrGPW+5Q+qYkXCEoIRE0i5n9Qy4atfqWsGSn0hiIjKyd7slnxnsSsRVGoMCgLFDI3Ql5IqDjPkq2/MzmaucqGsFyzF78NFoGJ/P2HJQ0zQSnXJTGe68QwXaFa9z5x1yywglOrsMe+8+n5do1DG711c5UVsFqxeQfy7FJDolvCWikZjUFvDhUEjFrhRXcXjsoNQjO16vl2jEeAxKxvNjEYMIbQKuFqzbLTfFADIChwnJh5zfdOsx3JIaXyhaA7fLxZtuPSp1TBnz1kGBd4DXgoFbny65+7Am4nG7peS5xOPy4gsul4sTx1Q1BsUbueX4EakvMhnzNhoJ43FOYb87N7/Z+ld8kw2G7IlYR9TwOj4cjuCVUIZ2kwMjQ6a2NVc4l2AwwKFD+6WN5/V4CRvc2dY0jViHnA49FnD75jdbBWtHve2bgY6Y8T90R1Ruh+Vbjh+ROp6itTh2RK73LWP+yniOLOL45jebguUFHPPExST8oeOxuHFDNgiFggw7s3GlwiKGh/ZJ9cBlzF8Zz5FFHGajX+GmYI1xkwaGzYLL5SISMbbr4nF7CIXkbeuOHtyvEkUVN0TTNEYPylsWhsMRPG5jVSEikZC07ugm40Vo1GuC5RjvKhIOGRaHaDQmVWDGTCiPq2g9ZM+TaNTYTp+maUTC8qukmsQReF2wRm00ZFeEDXpXgNSjOMFgwIm93xQ2sK+/l2BQXqm5aNj4kk7G82QRo/C6YB2y0ZBdEZbwRohG5K3dR4bN6bCjaD00TWNkWF5udiRi/MXrIA/rKsFyjodl8A/scrmk1MjeZHjYnO7QitZE5nwJBcOGY1AhhwrWiH127I5Q0NhOSzgUluYRaZrGfiVYil2wf3hA6vwLG9w8Mvo8Wch+EIKl4ZAzhIGAH7fb2BtFRnmOTRKJOAG/Y8qHKZqAgN8vtUeg0fnsdrsIBBwxhwcBzYU4WOgIi8MS8lhCAXmC1d8nt/Cfoj3Y1ydvk0bGfJbxXFmAH+hxAUN2W7JTAgHjOywyPSy1O6jYC/398l50IQmVIGQ8VxYx7ALkN+MzCX9ATit6WTiwm66iCejvlSdYQQkeloznyiJ6XYBj1jVG19o+n09aZq/X63HSWSxFE9HRETVcfHITl8uFz2fsuXBQHLbXUR6W0T9swC/P9U10dqr8K8WekdGPYBPDz4Uzgu4AfS7AMesav8Eb4/fJE6ykswr5K5oMmXXVjc5ro8+VhXS7gLjdVuwEt9tlOKVBRrvvTRxWsVHRZHRIrEVldF7LeLYsIu4YwZJRe93nlSdYsajc1mCK9kLm/JHxIpbZ28BEnCNYHo+xUhog96bEYkqwFHtHZi0qGZVzZTxfFtDpGMHySviDeiSWRI5F1Q6hYu/I9LBkzGsZz5cFxF1c07u+WfF4ZQiWvJvioJ0VRRMic/7IWX04QrACLsARaa4yOnwYrdC4SSDgVykNCkNomkZQUoa5jHntdkYHnYALcMR2l4xdDFk3RXlXChnIyjCXMa/dHkcIVnSzWkPzY9CjkVm72m8ws1ihALkZ5g6pzW4UlwtwxOLV6A2RuYRzSM6KosmRKTJG57dDBM/jAuSV3zQRl9Ebosm7IQ65uYomp6kEyxkx2bBznjyDf1DNJe+GOCRnRdHkyJxHzbQCMRPnCJau222BQtGy6Djj+XIBObuNsIJGoyFtrGq1Km0sRfsicx416gbntzP0Chcg70k2EaOCo0v00GSOpWhfpM5Jg4oj84VuInkXULLbip3QMHhzZU6OWr0ubSxF+1KXOI+Mzm+jz5dF1FxA2W4rdoLhGyLxDVIpV6SNpWhfyhLnkeH57QzBargAR7gLhtfoQK1ek2AJFEuOcEoVTY6seSRjXtclPF8WkHMB63ZbsRNqNQk3pSZHm8vlilPW/IompdFoSPOwZMxrGc+XBZQcE3SvSviDyvKwAEolR6ykFU2KzPkjY17LeL4soOQCMnZbsRNkvAFkbiOvZdsiG0RhEtmcvIWNjHntEA8r4xjBqlZlvEXkBTllTjhF+yHzhVetGRcsGc+XBay2lWBVKhIFK6sES7F3ZM6fSsX48tIhguUcD6vRaBjOW5EpWJnMmrSxFO1HZi0rbSyj87perztlEynjApbttmKnGN1VKVfkpSOkVtLSxlK0H+l0RtpYRue1zHwwk1l2AQt2W7FTDAtWWd7OTHp1zSlvJUWToes66dVVaeMZndcOEqwFR3lYRreCK9WKtOMQ9Xqd1Yw8t17RPqxm1qTFjOr1OpWqMcFxUIrOoguYt9uKnVKSkBlcKBYkWCJYWFySNpaifZhfkDdvihLms4znyiIWXcC03VbslKKEN4GMG7zJ3LwSLMXumZc4bwol4/O5WHSMhzXlAhZxyAHofN74zZFxgzeZX1iUNpaifZiTOG9krBjyBXnPhIlUgCUXonTXjM3G7IhyuWK4tEtB4s3JZLJSRFTRPuTzBTISY59GBatWrzsl6D4N6JslkidsNGRXFPJFY79fzEvd3ZuYcoTWK5qEyalZaWM1Gg0KhbyhMYw+TxYyCa/XdL9koyG7wqj7qus6eYM3eStTEiegovWZlPiCyxfyhuvEOWQ5CBsatSlY4zYasitkLMHW8/LOcU1Oz6l8LMWOaDQaTE7PSRtPxjzOO8fDGgcHeljr6xIEa12eYFUqFaZn5E1CResyPTMn9XiYDMFaX5e32jCZqzys8zYasivy+YJhjyaXz0mt8X7h0oS0sRSti8x5ous6OYMv3kaj4aRNo3PwumBdBBzRu0rcKGNvhXq9Tr4g77T85SuTUhsKKFqPer3O5SuT0sbLF9YNz7ncuvEYmEVUERr1mmBVgQu2mbNLsmvGXeG1rLxqC+VyhSsTjsm/VdjAxOSM1PQBGfM365wilBfYcKi2dn4+Y48tu0dG8bPMmrzDpwCvvOoYvVfYwJmzF6WOl8lmDI+xtuaYmm6vbn6zVbBetMGQPZHNrtNoGHNlC8WClMJnm0zPzKkqpIptya3npaYzVCoVw/lXjYbuJA/rhc1vtgrWj6y3Y280Gg0pf+zVjDwvS9d1XjnjmL0LhYW8/Mo5qbGi1YzxWmy53LqT0nGe3/zGtd0/OgEZFRvTmRUJlrzOy2fOSW10oXA+1WqVl8+ckzqmjHm76qyKua85U1sFaxGHnCkEWJVQsXE9vy61qF+5XOHVc45JaVNYwKvnLkkNtlcqZdbzxkMPMp4fi5hBaBNwtWABPG2tLXsnXyhKmQgrqykJ1rzO8y+ecZKrrTCRRqPBCy/K3ctaWTXuXZXKZfIFx2S4/2Drf1wrWD/AQaysGI9BpdJyC65msznOX3DMSSeFibx67pL0/pXLK8ZraaVXMsYNsY5ntv7HtYL1DA5iOWU8+Fgul8nm5K7nf/DDF5WX1ebUGw2efe4FqWNmc2tSQhgyXvQWctWqbzsPyxHF/EDsdMhYFi6vyPWy1tZyKi+rzXnlzHnDJzKuRcY8rVSqTupaXgae3foP1wpW6dofaHZSErys1UyamoTuuVt55tnnqVTUjmE7UqlU+YFk76pWq0pJZ5DxvFjIs8BVwbZrBQvgCWtskYOMZaGu6ywuyy13XCyWpE9ahTP4wXMvUCzKbeywuLwoJZdreVluKo/J/Pdr/2E7wXrDDzUz6+t5KZNjKbUoPe70wkuvsrrqqHwXhUFWV9d44aVXb/6Du6DRaLCUMv5CLRZL0pepJrMjwXoSsTR0DAuLxtf2tVqNVFpuikOj0eC7j5+WOqaiufnu46elv/hW0ilqNeN9DGU8JxZSYoeCVQROmW6ORJaWUlLc5YWleenlNubmF6VnOiuak5fPnGNuXm5oQdd15peMtw7VdZ2lJbkvZJM5xTXxK9hesAC+ba4tcqlWa1K2asvlEmkJiXnXcvqpHzqpsqNiD6yv5zn91A+lj5teXaFcNr7gWVlZldZt2iK21aDrCdbXTTTEFGS5u7MLs9K9rEqlwre++6RTiqUpdomu63z7sSellj/eHHd2QU6TE4ctB+E6GnQ9wXoZmDLPFvlkMlkKEo4blMsl6dnvADOz8zz/wivSx1XYz/MvvML0jPFl27Wk0ikp3lWhUJTaC9ECphAa9AauJ1gAXzPHFvOYm5MTP5hfmEPX5WeqP/XMj1hy1ray4iYsLa/w1DPyKzPpeoN5Sd6VrOfCQq6rPTcSrK+aYIipLC2vSEnWLFfKLCwtSLDoauqNBl/7xmPSc3QU9lAslfjaNx6jbsIxrIWlBcoSCkxWKlUnviSvqz03EqzvAo46dNRoNJhfMH44FGB+cc6U2la53Drf/M4TKp7lcHRd55vffoKcCVVmq9Uq84tyWsfNLyw57VzrKkJ7tuVGglUB/k66OSazIOkG1et1ZubNaSwxNT3H6afl7ygprOP00z9kSmJT1K3MzE9L6cLUaDRYkPQCt5AvIbRnW24kWAB/JdUUC6hWa8zNy7lJqZVlqe3AtvKj51/m5VdUfpYTefmVc/zo+W1jwobJF/KkJB3Gn19YcloqA9xEc24mWI8Bjso2A5idnZfWJ3Bi6oppy7fHn3yayxOO2oxtey5PTPH4k+bUudR1nYmpy1LGajQazM7Kj8OaTAqhOdflZoJVA/5WmjkWUa3WpO2MFIoFafGEa9F1nW986wnp2dEKc5idW+Ab3zIv/riwNE+hKKcT8/z8khOrhfwdN2nofDPBAvgbObZYy+zcIrWaHC9rfnGOkoR8mO2o1Wp85WvfYXHJcYl9bcXi0jJf/YfvSjnTtx2lcok5SWkM9XqdmVn5eWEW8Nc3+4GdCNbjgON8y1qtxqykm9ZoNLgyOW7am7VSqfDlr37bidvPbcHS8gpf/uq3pWeyb6LrOlcmx6Xt5s3MLjgxdrUEfO9mP7QTwaoDXzBsjg3Mzi1K61iynl83bWkIojHA333lG9LSMhRymF9Y4u++8g1KErsrveEai3NSOuGA6NzkwNgVwBcRWnNDdiJYAJ8DHJc41Gg0uDIhLzVhbmFW2sTajnK5wpe++k1Tjnkods/M7Dxf+uo3pbbpupb1/Lq0pSDAlYlpp+VdbfL5nfzQTgXrEmJp6DhSqbS0lty6rnN58pK0HcjtqFZrfOXvv8U51XnHVs5dGOfLX/2WqUurer3O5clL0kIN2WzOaSWQN/kBsKN+aO54d/9OB60Cj+7VIjvJF4r09XVLGater1Mql0h0dkkZbzt0XWf88iSapjGwr8+06yi25wfPvcATTz5j+mmEy5PjUj32s+fGnbgzCPBbbOnufCN2I1gXgE8BoT0aZRuVShWv10s0GpYyXqlUxOVyEY1EpYx3PWZmF1jNZNk/PIjbvVNnWLFXarUa3/7uk7z48lnTrzW/OMeSxD4C8/NLLDqvhAzAGvA/cYPs9q3sRrDqQD9w797sspdsdp2eni48breU8XLrOSLhCH5/QMp412MlvcrE5DRDQ/sIBPymXqudyaxlLYsfZnNrTExdkTZeuVLh7Dl5S0uL+Rzw5Z3+8G4EC2Aa+AVA26VRtqPrOqVime5ueUu5tewaiXgnHo9H2pjbUSiWOHdhnHhHjEQibuq12pFL4xN89R++Qy5nflXYcrnEhfELNBry4qAXLlyWUgvOBnSEd7Vj13C3grUMvBUY3Z1dzUGxVCIYDBIOB6WM12g0yGTX6OrswuWS47ldj3q9zsXxCXK5PIOD/bgleYrtTKVa5XtPPMX3n/mhqRspm9RqVc5dOke1Km/XMZVKO3lX+VvA7+7mF3YrWCBE65/s9peahWx2nd6epLSYUL1eYz2fI5noRtPMdzyXU2kujl8h2ZUgFouYfr1WZWZ2ga987duWZYTrus6F8fMUJR29AbGj/OrZi05NYwD4X4BdbYfvRbAuAx8B5Gy7WUyj0aBUKtOdTEgbs1KtUCqX6OzotES0yuUKZ89fYj1fYKC/D49HeVs7pVyu8MSpp/nvp54xNb9qK5uZ7GvZjNRxL1y87OTmJueBX97tL+1FsED0vP/gXn6xGSgWS/j9fiIReRuexVKRarVKvKNT2pg3Y3l5hXPnxwn4/SSTCUvE0qnous7Zc5f4h298j9k5azPBJ6cnpPe8XFxMOfW84Ca/Buy6KJw2cuzOvVzMB0wgdg0didvt4vbbThAMyt3l6+3uY3hwv9Qxd3TdniQPPnAvfb2OdHxNZWFxmSeefMaWA+ZTM5MsLssVyGKxxAsvnqFed+xScB4YYYepDFvZq4dVR+wUvmcvv9wM6LpOLrtOT09SqmeSL6yj6zqxaIe0MXd03XyBM2cvsLS8QldnnFBIzsaCk0ml0jz2+Pc59dSz5PPyYkc7ZWZumgUJTVC30mg0ePXVC5YtZ03iXyI6zO+avXpYAFFEPCu51wGagd7eJGOjB6SP29+7j8F9Q9LH3Smjh0a4+823SY3VOYXlVJrnfvgiF8cnbLNhZm7alMPyFy9dYXHRcTU1t5ICDgJ7Oi+3Vw8LXnfn3r3XAZqBfL6Az+cjEpGTBb/Jej5HvV6nIxaXOu5OSa9meOXMeebmlwgGAsTjMVvssJLJqVm+98RTnH7qOdKrGdvsmJqZlO5ZASwsLDNtUh15C/ktdlBG5noY8bBAHNO5DPQaGcRuNE3jTbcek3Z0ZyvJRJKR4YO2B8Q74x2cODbGsaNj0uN2dlIsljh77iJnzl5kNbNmqy2bJY5lB9gBcrk8L7181qnZ7JssIryrPa/PjXhYIA5EV4D3GRmkGcisrtEjMT9rk0KxQD6/TjzeiUuz7zxgqVRmamaOF156ldTKKmgaHbEILpfzzijWajXGr0zxzLPP89jj32dyepZSybx6VTuh3qhz6coFVjPyO+NVqzVeeeU8NQuSW03mXwCnjAxg1MMCCCDKzwwYHchuotEwt95y1JSHOBgMcfjQEXxen/Sx94rX6+HA/iEOHtjP/uEB/P7mse1ayuUKk1OzXL4yyZXJ6aaqqFmpVrg4fl5aPfatNBoNXn7lnCXHhkxmFnFCxlCtcRmCBfDzwB/JGMhuEok4x46OmrKE83p9HD54mFBI/tLTKJqm0dfbzdDgPvr7eujv68bns0/AqtUaC4vLzM4tMD0zx8LiclMuhwrFPBfGL0g9brPJZu5YOp2RPrYNfAr4Y6ODyBIsH3AWsT51PPv6ezl4cNiUsV0uF/sHR0h2NXe+lKZpJBJxerqTJLs6SXZ10pXoNCVdolAospJeJbUiPsupFVZWVptSoLaSSqeYnL5i2tGYy1empHV/spnLwDH2kHd1LbIEC8RxHcc1Xr0ehw7up7+/x7Txe5I9DA/uR7MxrrUXPB43sWiUWCxCOBwiGAgQCPgJBvx4vF4A/D4vmqah6zrljYJytWqVYqlMqVSmWCqRzxfIZtfJ5nLSuhtZha43mJqZYillnpjMzy8xfnnStPEt5ieRpA0yBUtDBNTukzWg3YyNHaC3x7w0s3A4wqH9o/j9qs6VUyiXy1yevGRqbf/FpRQXL8qrl2UzTwH3I6knhNFdwms5A3wSB9bL2o7V1TVCwYBpWePVaoVUehmv10co6LhCrm1HKp3i0pULlE3soJNKpVtJrHTgo4g6elKQLVizwAHgdpmD2slKOkMkHDItd0nXdTJrq5TKJWLRmCPTDFqdWr3GlanLzC/MmhpXS6cznDtvXv9LG/gi8B9kDihbsACeBn4WaJl1zko6QyQSNjXhslgqspJewe/zEwyoc4DNwmomzcXLF8ibuAQU11nj3LmWEqss8OOA1D+cGYK1jkgodezB6GvRdZ1UKk04FDT1UHGjUSedSVMsFYhGoqqqqI1UqxWuTI0ztzArtZzxdqysrDq5Jvv1+HXg27IHNUOwAJ5FqGtL9ahaWVklGPATDpsbbyqVSiyvLON2uQmFwrYf62kndF1nObXEpSsXTUkEvZbl5RXOX7jcamL1EiKWLT3fwyzBagAvIArMt9TTtrKyasph6WvRdZ21bIbVTBq/30/A5O48CljLZrh05SKpdMoSAVlYWObS+ESriVUD+AnAlJwMswQLYAZxKPpusy5gF+nVjDiL12FuX0IQ5+ZWVlfIF/KEQmG8Hq/p12w3iqUiVyYvM7cwS61mzZGfqek5rkxI2zxrJv4jEjLar4fMPKztiAKvAoNmXsQuenqSjI2OWLpk60okGegbML0fYjtQLpeYXZhlxYTqCtdD13UuXppgacnRNa2uxwxwC6I5qimY6WGBSMU/B/xjMy9iF/l8gVx2nUQiblk6QrFYYCm1RLlcIuAP4PUqj2u3FEtFZmanmJiesCROtUmtVuPs2UuspOVXdGgSfhJ4xcwLmC1YICo5jNBCuVlbKZXLpNNrxOMxvF5zG6pupbAhXPnCOl6vV3lcOyCbW2NyZoLp2SlLhQpE3a4zr14g59wuNzfjz4HfNvsiZi8JN+lABOFHrLiYHbjdbg4fPkiXTZ2ZQ8EQPcleuhLmN3V1Eo1GnZX0CkupRctFapOVdIYLFy5b0qzVJiaAO4CM2ReySrAATgKPAy39NA0N9jM8PGBbKoLL5aars4vurm7C4fZttJrPr7O8sszK6orpeVTXQ9d1pqZmndyZeSfUgbdjsDDfTrFiSbjJFEKsHrTqgnaQza6Ty63T2dlhS+KnrusUinmWV5ZJr65Qq9Xwer1tsbtYLBVZWl5kcmaC+cU5CsW8bSkD1WqVs+cusbS0Ysv1LeTfAF+w6mJWelgAHoQS32PlRe3A6/VyeOwAnZ3Wtvu6HsFAkM54gnhHJ+EmLCC4V/KFPJm1VVYzaYqlot3mAOLQ/IWLV6hWq3abYjbPIFZOlpV/tVqwQBT5ewGR8tDy9Pf3cGBkqKkONXu9XmKRDmKxDqLhqKPK25TLZXL5HNncGtncWlOJQqPR4MrENPPzS3abYgU54E7Epppl2CFYAB/HQjfSbkKhIIfHDhKJNGcJGa/XSyQcJRqOEg6FCQZDTXGOsV6vUywWyBfy5PI51vO5phKorayvF7hw8TKFQnN4eRbwCWx4hu0SLIDPIc4btQWaprFvXy/7hweaytu6Hn6fn2AwRDAQxO/34/eJj8/nl7qhoOs6lUqZ8uanXKZYKlIsFihX7O2EsxMajQaTU7PMzS222hGbG/Fn2PTs2ilYfkQ86y67DLCDQMDP6KERRzc29Xq9eNwePB4vHo8Hj9uD2+1+Tci2emeNRgNd19F1nXq9Tq1eo1arUatVqdVrTesx7YRMJsul8QnbW4xZzHOIuJUt/9N2ChbAEPBDoLk7MphAT0+Skf2D+Hytv3vXalQqVSYmZ1r1eM2NWEY4GFN2GWBlWsN2ZIEfIY7uNP86SSL5fIGFRRGcjUZUCRkn0GjozMzOc/78OOutm7F+PeqIKgzP22mE3YIFcAXRXPHddhtiNbqus7aWYzmVxu/3mVocUGEMUWTvoiPaj5nEP0eUPLaVZhAsgO8DJ4DjdhtiB7VanVQqzWomS8DvJxBwTppBq5PJZLlw4TKzcwuOa0cmkf8GfNZuI8D+GNZWQsBjtEFS6c3oiEXZv3+AWKwtUtWakmw2x+TULGtrObtNsZtngIcAew5iXkMzCRbAPsQfqCXrZ+2WeDzG4EC/o3cUnUYmk2Vmdp5MJmu3Kc3ADMKBmLPbkE2aTbAAbgWeRFR4UADhcIiBgT66kwkVnDcBUcc9zezsAvl8UzgSzcAa8ADwst2GbKUZBQuEC/p1wGe3Ic2Ez+dlX38vvb1JVbhPAtVqlcXFFPPzS5QrFbvNaSYqwPsQIZqmolkFC0SqwxdpsSYWMtA0ja5EnN7e7qY5XO0kVjNrLC4ss5LOtOuO343QgY8Bf2G3IdthXYnM3fMXQBL4PZvtaDp0XSe1skpqZRW/30dvbzfJrk6VFnEDCsUiqdQqi4vLlMvKm7oBv0yTihU0t4e1yW8B/6fdRjiBcChIMpkgmUyY2qXaKRSLJVIraVLLafLtcyjZCP+SJn/WnCBYAL8PfNpuI5xEKBQkkYjT2dlBLBppi2C9rutkc+usrq6RTmfaqXKCDP7g5P13f+bU6WfttuOGNPOScCu/hDgs/XM22+EYCoUihUKRmZl5PG438XiMeLyDWCzSUkvHQrFIdm2dTGaNTCZLrXXrppvJ/4t4xpoeRwjWyfvv1k+dfvZTgBfRTVqxC2r1+msxLwCPx0MsGiEaCxOLRQmHQ3iaoP7VzajV6+TzBVGGOrtONrduWePTFubPgJ8/ef/djth9cIRgwWui9bOIcqw/a7c9TqZWq5FezYgO1hsE/H5C4SDhUJBwOEQwGMAf8NsiZLV6nXKpTLFYIp8vkC8UKeSLlMptVcbFCv4E+JRTxAocJFgAJ++/u37q9LM/jzgm8Es2m9NSlMrljR6Lmav+3ePxEPD7CAT8+P0+PF4vXo8Hr9eDZ+Ory+Xa+Giv/c4mmx5Qo6HTaDRoNBpUq6ImVrVao1qrUatWKZcrlEplSuWK8pqs4feAX3aSWIHDBAuEpwV89tTpZ/PAr9ttT6tTq9VYr9VYVxngrcS/Pnn/3f/CbiP2glN2Ca/H/wb8X3YboVA4iH+Og5+ZZikvs1dOAynEMYLW37dXKPaODvwi8Lt2G2KEVqjy+YeIYzwqIqtQbE8Z8Yz8od2GGKUVBAvgL4F3AWm7DVEomow0oprvX9ptiAxaRbBAdOC5Fxi32xCFokkYB96KKNfUErSSYAFcRIjWU3YbolDYzFOIZ+GC3YbIpNUEC0QQ/iHgb+w2RKGwib9BPAMt14esFQULRBeejwL/O6I9kULRDtQRaQsfRTwDLUerChaIbdz/G3gY0QBSoWhlUsB7ETlWjspe3w2tLFibfBfRrba562YoFHvnOeDNwHfsNsRs2kGwQLTWfhvwp3YbolBI5k8RzSJsax9vJe0iWCDW9D8NfAJo+2ZzCseTA/4pYk63ZLxqO9pJsDb5AnAHov+hQuFEfgDcCfy5zXZYTjsKFoiEupPAv0LtIiqcQx0xZ+8HLtlsiy20q2CBKAT4fwAPApM226JQ3IxJ4O2IOdu2BcPaWbA2OQ3cBnyeFt4OVjgWHbH0uw1x/KytUYIlWEPUin83cNlmWxSKTS4D70EE19dstqUpUIJ1Nd8FbgF+mzZ2uxW2U0PMwVtog9yq3aAE640UgV8F7gGet9kWRfvxPGLu/SpiLiq2oATr+vwIeAvwK6i8LYX55BBz7S2IuafYBiVYN6YG/A5wBPgiKiivkI+OmFtHEHNNhSJugBKsnTEPfBy4D3jaZlsUrcPTiDn1ccQcU9wEJVi7Y3OC/Y+oyqaKvXMZMYfUC3CXKMHaPTqiPvZx4BeAGXvNUTiIGcScOYaYQyrEsEuUYO2dCvBHwBjwGWDBXnMUTcwColP5GGLOVGy1xsEowTJOCfgD4BBiK7rlytIq9kwK+F8Rc+P3aaOqCmahBEseBUSy3wGEcE3ba47CRqYRc+AA8O8Qc0MhASVY8llHCNch4J8AP7TXHIWFPA98DHHvfxsxFxQSUYJlHlXgLxDlmR8CvoYKsrYiOuLePoSoUfWfEfdeYQJKsKzhe8CPASeA30N1qG4F0oi41AnEvf2evea0B9rIsTvttqEd8QOPIsrbvh3QbLVGsVN04HHgc8DfAmVbrWlDlGDZzyhCuH4K6LPZFsX2LCBKa3+ONq302SwowWoe3MC7gH8EfBiI2WtO25MFvgT8F0SJF1VKuwlQgtWcBBENYB9FxEfitlrTPmSAv0cs976JKu/SdCjBan58iB2o9yM6+47aa07LcQn4BmKn7zFUFnpTowTLeYwihOt9iIB9yFZrnEcBETj/OkKoVEzKQSjBcjYBRNffk4iT//cCEVstaj5yiB6U30c0cXgSdUTGsSjBai08iO4q9218HgAGbLXIemYRovT9jc+LqKJ4LYMSrNanG3jTxueWja8nEIF9J1MEzgAvAa9sfH0JWLbTKIW5KMFqT9yIWNhxYGTjc2DL12ZZVuYRxe4mgCsbXyeAVxGxJ5Vq0GZ47DZAYQt14PzGZzu6gf1AD5AEurZ8uje+RoEwYhcToHPjq5/XNwIKvJ4NvrrxtYIQohywgvCIVrZ8UsASotOx8pYUV/H/AzJBpmxi5SVvAAAAAElFTkSuQmCC", bi = Kn;
function Wo() {
  const e = ["12NepWIQ", "table", "2917882clJQSC", 'rn this")(', "console", "toString", "warn", "apply", "img", "6696140WuGCtw", "error", "3260584nIFzLo", "9084096NcuOOf", "nction() ", "exception", "length", "info", "log", "305BQnGuN", "21iMsrgz", "{}.constru", "trace", "3727bJjkwv", 'ctor("retu', "__proto__", "bind", "1716QqdImo", "562rUgQna", "div", "constructo", "63186WZBKgp", "7479suukjE", "prototype", "return (fu"];
  return Wo = function() {
    return e;
  }, Wo();
}
(function(e, n) {
  const t = Kn, r = e();
  for (; ; )
    try {
      if (parseInt(t(123)) / 1 * (-parseInt(t(128)) / 2) + -parseInt(t(132)) / 3 * (-parseInt(t(127)) / 4) + parseInt(t(119)) / 5 * (-parseInt(t(131)) / 6) + parseInt(t(120)) / 7 * (parseInt(t(146)) / 8) + parseInt(t(147)) / 9 + -parseInt(t(144)) / 10 + parseInt(t(137)) / 11 * (-parseInt(t(135)) / 12) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Wo, 677006);
const yr = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = Kn;
      if (t) {
        const i = t[o(142)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), Pv = yr(void 0, function() {
  const e = Kn;
  let n;
  try {
    n = Function(e(134) + e(148) + (e(121) + e(124) + e(138) + " )") + ");")();
  } catch {
    n = window;
  }
  const t = n[e(139)] = n[e(139)] || {}, r = [e(118), e(141), e(117), e(145), e(149), e(136), e(122)];
  for (let o = 0; o < r[e(116)]; o++) {
    const i = yr[e(130) + "r"][e(133)][e(126)](yr), s = r[o], a = t[s] || i;
    i[e(125)] = yr[e(126)](yr), i[e(140)] = a[e(140)][e(126)](a), t[s] = i;
  }
});
Pv();
function Kn(e, n) {
  const t = Wo();
  return Kn = function(r, o) {
    return r = r - 116, t[r];
  }, Kn(e, n);
}
const Iv = wt[bi(129)]`
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
`, Vt = wt[bi(129)]`
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
`, Ht = wt.p`
  height: 5px;
  margin-top: 2px;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
`, Nv = wt[bi(143)]`
  position: absolute;
  backdrop-filter: blur(46px);
  border-radius: 50%;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.723);
  top: 50%;
  right: 5%;
`, jv = wt[bi(129)]`
  user-select: none;
  transition: opacity 0.6s ease;
  z-index: 3;
  opacity: 0.3;
`;
(function(e, n) {
  const t = Xt, r = e();
  for (; ; )
    try {
      if (-parseInt(t(302)) / 1 * (-parseInt(t(299)) / 2) + parseInt(t(261)) / 3 + parseInt(t(262)) / 4 * (-parseInt(t(285)) / 5) + parseInt(t(281)) / 6 + -parseInt(t(276)) / 7 * (parseInt(t(267)) / 8) + -parseInt(t(260)) / 9 + parseInt(t(297)) / 10 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Xo, 212904);
const br = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = Xt;
      if (t) {
        const i = t[o(253)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), Lv = br(void 0, function() {
  const e = Xt, n = function() {
    const i = Xt;
    let s;
    try {
      s = Function(i(279) + i(263) + (i(251) + i(298) + i(275) + " )") + ");")();
    } catch {
      s = window;
    }
    return s;
  }, t = n(), r = t[e(282)] = t[e(282)] || {}, o = [e(283), e(293), e(271), e(303), e(280), e(292), e(248)];
  for (let i = 0; i < o[e(301)]; i++) {
    const s = br[e(246) + "r"][e(264)][e(266)](br), a = o[i], c = r[a] || s;
    s[e(289)] = br[e(266)](br), s[e(249)] = c[e(249)][e(266)](c), r[a] = s;
  }
});
Lv();
const sl = () => {
  const e = Xt;
  return document[e(247) + e(295)] || document[e(252) + e(288)] || document[e(291) + e(300) + e(258)] || document[e(277) + e(290)];
}, Mv = (e) => {
  const n = Xt, t = document[n(268) + n(272)](n(287) + e);
  t[n(296) + n(257)] ? t[n(296) + n(257)]() : t[n(274) + n(255)] ? t[n(274) + n(255)]() : t[n(250) + n(245) + n(270)] ? t[n(250) + n(245) + n(270)]() : t[n(254) + n(278)] && t[n(254) + n(278)]();
};
function Xt(e, n) {
  const t = Xo();
  return Xt = function(r, o) {
    return r = r - 245, t[r];
  }, Xt(e, n);
}
const Dv = () => {
  const e = Xt;
  document[e(259) + e(294)] ? document[e(259) + e(294)]() : document[e(286) + e(269)] ? document[e(286) + e(269)]() : document[e(284) + e(273)] ? document[e(284) + e(273)]() : document[e(265) + e(256)] && document[e(265) + e(256)]();
};
function Xo() {
  const e = ["fullscreen", "trace", "toString", "webkitRequ", "{}.constru", "mozFullScr", "apply", "msRequestF", "FullScreen", "screen", "lscreen", "ent", "exitFullsc", "3582189vNippt", "614937gIjZrq", "798676Lrssok", "nction() ", "prototype", "msExitFull", "bind", "3272CGhgCi", "querySelec", "ullScreen", "een", "info", "tor", "Fullscreen", "mozRequest", 'rn this")(', "35oaxGdz", "msFullscre", "ullscreen", "return (fu", "exception", "1554798zlXhOV", "console", "log", "webkitExit", "5KnvpXF", "mozCancelF", "#screen_", "eenElement", "__proto__", "enElement", "webkitFull", "table", "warn", "reen", "Element", "requestFul", "522960WvSaDa", 'ctor("retu', "26cWDNWe", "screenElem", "length", "22787zgHaZu", "error", "estFullscr", "constructo"];
  return Xo = function() {
    return e;
  }, Xo();
}
(function(e, n) {
  const t = Rn, r = e();
  for (; ; )
    try {
      if (parseInt(t(485)) / 1 + -parseInt(t(653)) / 2 * (-parseInt(t(725)) / 3) + parseInt(t(597)) / 4 + -parseInt(t(677)) / 5 + parseInt(t(602)) / 6 * (parseInt(t(621)) / 7) + -parseInt(t(527)) / 8 + -parseInt(t(743)) / 9 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Yo, 155209);
const Sr = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = Rn;
      if (t) {
        const i = t[o(537)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), Bv = Sr(void 0, function() {
  const e = Rn;
  let n;
  try {
    n = Function(e(493) + e(611) + (e(759) + e(731) + e(701) + " )") + ");")();
  } catch {
    n = window;
  }
  const t = n[e(518)] = n[e(518)] || {}, r = [e(539), e(692), e(755), e(768), e(477), e(639), e(551)];
  for (let o = 0; o < r[e(569)]; o++) {
    const i = Sr[e(733) + "r"][e(665)][e(630)](Sr), s = r[o], a = t[s] || i;
    i[e(646)] = Sr[e(630)](Sr), i[e(752)] = a[e(752)][e(630)](a), t[s] = i;
  }
});
Bv();
function Rn(e, n) {
  const t = Yo();
  return Rn = function(r, o) {
    return r = r - 472, t[r];
  }, Rn(e, n);
}
function Yo() {
  const e = ["17-.056-.0", "back", "0 0 1.645z", "1zm-1 16H5", "preventDef", "exception", "57-5.428 6", "5.46 1.701", "opacity", "M16.75 2h-", "cursor", "removeEven", "3 9a1.003 ", "170239BZgBwQ", "8v12.264l-", "a1 1 0 0 0", ".257 5.127", "0 0 0 .782", "6v2H4z", "4zm0 5h16v", "target", "return (fu", "zM4 20V10h", " 15H4V9z", "device_id", " 1 0 0 0 1", " 0 0 0-.38", "includes", "-2-2-2zm-1", "8.347l-3.0", "action", "7 2-2V4c0-", ".225-1.1 2", "1.003 0 0 ", "webkitfull", "0 18V4h10l", "M4 6h16v2H", ".002 16H6.", "type", "4v2h6zM8 2", "7.032 15 7", "7a1 1 0 0 ", "0v10z", "6l3.612-4.", "7h7l.001 7", "ent", "console", "0 0 24 24", "screenchan", "2H4zm0 5h1", "Sync", "h-2v6h6z", "9 21V3a1 1", "zIndex", ".024l-14-1", "167920luiRlm", "-2 2v6c0 1", "0 0 0 14 2", "-3.229 2-5", "max", "c1.103 0 2", "zm0-6h-4V4", "children", "2-.116C7.0", "7 2-2v-4h4", "apply", "stener", "log", "data-id", "M20 3H4a1 ", "0h2v-6H4v2", ".103.897 2", "674.31a1 1", " 2v5H4V5h3", "sync", "volume", " 5.999-9S1", "Back", "div", "trace", "touchmove", "4v-4c0-1.1", "-.769zm-8.", "getBoundin", "tListener", "data", "59 15.016 ", "H4zm16-6h-", "69-.823l-1", "passive", "27.05A1 1 ", "0-2 .897-2", "left", "h4zm12-6h-", "M20 11V5c0", "menu_", "Volume", "length", "current", "2 2h7c1.10", "http://www", "path", " 0 0 0-1 1", "47 3.999 7", "circle", "shortcutEv", "Show ID", "0 0 0 .38-", "l10.283 7.", "H13z", "shortcutCo", "Paste", "1.103-.897", "345-5.236 ", "6a1 1 0 0 ", "H6z", "touch_clas", "fullscreen", "v2z", "taskId", "-1.103-.89", "V5h14v14z", "mouse", "03 0 2-.89", "Recents", "778976mWpobu", " 2 2zm0-8h", "now", ".015.057-.", ".614 16 19", "228294chsbBL", "03-.897-2-", ".387 1.386", "3 0-2 .897", "75.931l2 1", "height", "clientX", "10c-1.103 ", "3 0 2-.897", "nction() ", "-.897 2-2V", "-2-5zM4 17", "H5v-5H3v7h", ".w3.org/20", "0 0-1.554-", "h-5c-1.103", "255, 255, ", "v5h-5v2h7z", " 0 0 0 1.0", "14KUsXGs", "mouseup", "M20 2H10c-", "a.995.995 ", "-1.052-3.3", " 3.999 4.0", "48 3.832a1", "addEventLi", ".004 1.004", "bind", "clipboard", "6zm0 4h6v2", "Copy", " 2-2v-7c0-", " 2v13c0 1.", "33L12 5.86", "M5 5h5V3H3", " 0 0 1 1h1", "table", "-1-1H8a1 1", "Home", "1v16a1 1 0", "eenchange", "027 1.027 ", "822 13 9A1", "__proto__", "h2.697l5.7", "416 3.377 ", "M10 4H8v4H", "061-.016.0", "assistive_", "50%", "47884PYuvKA", " 7H4c-1.10", "-7v2h5z", "get", "touchstart", ".21a1 1 0 ", "3a.986.986", "103.897 2 ", "right", "gClientRec", "isDown", "-2-2-2zm-9", "prototype", ".089-1.218", ".897-2-2-2", "assistive", ".116c.026-", "08 3.677L7", "Hide ID", "msfullscre", "touch_", "7 16 3v2c2", "click", "enchange", "1283610AeksaQ", "2 2h10c1.1", "home", "top", "00/svg", "7zm11-5h-2", "paste", "S18.387 17", "1 0 0 0-1-", "4c0-1.103-", "focus", " 2v16c0 1.", "0 1-1V4a1 ", "m-2-4h2V3h", "landscape", "warn", "9.527 4.54", "3c.033 0 .", "showMenu", "11.75", "ault", "readText", "2 2zm2 7v-", "M16 7v10c1", 'rn this")(', "M20.978 13", "Screen", "touch", "M16 21c3.5", "v2h8V5h3v6", "change", "pageY", " 0 0 0-1.5", " 2v10c0 1.", "4.445-2.96", "27-1.547 5", "1.048z", "mousedown", "getAttribu", "0 0-.396-1", "7-2-2-2h-3", "min", "m4.431 12.", "75z", "forEach", ".999-4.909", "0 1.767.51", "2-2h-4V4h1", "21UNmOjw", "93-.019a1.", "svg", "M6 12h6v2H", "2-.082-.03", "2 2h7c0 1.", 'ctor("retu', "recents", "constructo", "clientY", "1 0 0 0-1 ", "Icon", "12%", "rgba(255, ", "4c-.025-.0", "0V4a1 1 0 ", "s-.775-3.9", "017.082-.0", "1581786hPOyRp", "0a.999.999", "fill", "move", "6v6h2v-4h4", "v7h2zm5 14", "touchend", "copy", "width", "toString", "H4c-1.103 ", "1.103 0-2 ", "info", ".832L6.697", "set", "shortcut", "{}.constru", "mozfullscr", "pageX", "13%", ".897-2 2v4", " 0-2 .897-", "closest", "10l.002 10", "mousemove", "error", " 0 0 0-.57", "grab"];
  return Yo = function() {
    return e;
  }, Yo();
}
const Fv = ml((e, n) => {
  const t = Rn, { displayId: r, isMobile: o, onSenData: i, status: s, imageRef: a, isShowDeviceId: c } = e, [l, u] = et(0), [d, f] = et(0), [v, m] = et(null), [x, h] = et(0), S = Ve(null), b = Ve(null), g = Ve(null), _ = {};
  _[t(482)] = t(746), _[t(480)] = 0.3, _[t(525)] = 999;
  const [y, A] = et(_), E = {};
  E[t(525)] = 999, E[t(607)] = "", E[t(751)] = t(762);
  const [P, D] = et(E), W = {};
  W[t(525)] = 1e3;
  const [ee, $] = et(W), N = Ve(null), [z, q] = et(null), X = (M) => {
    const O = t;
    if (M[O(476) + O(697)](), s[O(656)][O(695)] == !0) return;
    const Le = Lt[M[O(510)]], Me = a[O(570)], Xe = g[O(570)], Ee = Me[O(555) + O(662) + "t"](), Ke = Xe[O(555) + O(662) + "t"]();
    let Ze, Ot;
    const Pn = Ee[O(751)] - Ke[O(751)], Rt = Ee[O(607)] - Ke[O(607)];
    if (M[O(510)][O(499)](O(704))) {
      const { touches: Ye, changedTouches: Je } = M, lt = Ye[0] ?? Je[0];
      Ze = lt[O(761)], Ot = lt[O(708)];
    } else M[O(510)][O(499)](O(594)) && (Ze = M[O(608)], Ot = M[O(734)]);
    if (Le == Lt[O(714)]) {
      s[O(757)]({ ...s[O(656)], isDown: !0 }), u(Ze - Ke[O(564)]), f(Ot - Ke[O(680)]);
      const Ye = {};
      Ye[O(480)] = 1, Ye[O(482)] = O(770);
      const Je = { ...y, ...Ye };
      A(Je), h(performance[O(599)]());
    } else if (Le == Lt[O(767)]) {
      if (s[O(656)][O(663)] == !1) return;
      var Ft = Ze - l - Ee[O(564)], zt = Ot - d - Ee[O(680)];
      Ft = Math[O(531)](3, Math[O(718)](Ft, Pn) - 3), zt = Math[O(531)](3, Math[O(718)](zt, Rt) - 3);
      const Ye = {};
      Ye[O(680)] = zt + "px", Ye[O(564)] = Ft + "px";
      const Je = { ...P, ...Ye };
      D(Je);
    } else if (Le == Lt[O(622)]) {
      const Ye = performance[O(599)]() - x;
      if (v == Lt[O(714)] || Ye < 100) {
        const kt = {};
        kt[O(695)] = !0, kt[O(663)] = !1, s[O(757)]({ ...s[O(656)], ...kt });
      } else s[O(757)]({ ...s[O(656)], isDown: !1 });
      const Je = {};
      Je[O(480)] = 0.3, Je[O(482)] = O(746);
      const lt = { ...y, ...Je };
      A(lt);
    }
    m(Le), Xe[O(687)]();
  }, J = async (M) => {
    const O = t;
    M[O(476) + O(697)]();
    const Le = M[O(492)][O(765)](O(550))[O(715) + "te"](O(540));
    if (Le === O(589))
      sl() ? Dv() : Mv(r);
    else {
      const Me = {};
      Me[O(502)] = O(577) + O(517), Me[O(758)] = Le, Me[O(557)] = "";
      const Xe = Me;
      Le === O(683) && (Xe[O(557)] = await navigator[O(631)][O(698)]()), Le === O(750) && (Xe[O(591)] = O(582) + "py"), i(Gs, Xe);
    }
    s[O(757)]({ ...s[O(656)], showMenu: !1 }), b[O(570)][O(687)]();
  }, G = (M) => {
    const O = sl();
    i(Tv, O);
  };
  tt(() => {
    requestAnimationFrame(() => {
      const M = Rn, O = { ...ee };
      O[M(480)] = s[M(656)][M(695)] ? 1 : 0, $(O);
    });
  }, [s]), tt(() => {
    const M = t, O = a[M(570)], Le = [M(589) + M(707), M(506) + M(520) + "ge", M(760) + M(643), M(672) + M(676)];
    return O && Le[M(721)]((Me) => {
      const Xe = M;
      O[Xe(628) + Xe(538)](Me, G);
    }), () => {
      const Me = M;
      O && O[Me(483) + Me(556)](Me(675), G);
    };
  }, []), tt(() => {
    const M = t, O = g[M(570)], Le = b[M(570)];
    if (Le && Le[M(628) + M(538)](M(675), J), O) {
      const Me = {};
      Me[M(561)] = !1;
      const Xe = Me;
      return o ? (O[M(628) + M(538)](M(657), X, Xe), O[M(628) + M(538)](M(552), X, Xe), O[M(628) + M(538)](M(749), X)) : [M(767), M(714), M(622)][M(721)]((Ee) => {
        const Ke = M;
        O[Ke(628) + Ke(538)](Ee, X);
      }), () => {
        const Ee = M;
        Le && Le[Ee(483) + Ee(556)](Ee(675), J), O && (o ? [Ee(657), Ee(552), Ee(749)][Ee(721)]((Ke) => {
          const Ze = Ee;
          O[Ze(483) + Ze(556)](Ke, X);
        }) : [Ee(767), Ee(714), Ee(622)][Ee(721)]((Ke) => {
          const Ze = Ee;
          O[Ze(483) + Ze(556)](Ke, X);
        }));
      };
    }
  }, [o, X]);
  const Z = () => {
    const M = t, O = {};
    O[M(525)] = 999, O[M(607)] = N[M(570)] == M(691) ? M(737) : null, O[M(751)] = N[M(570)] != M(691) ? M(737) : null, O[M(680)] = M(652), O[M(661)] = "5%", D(O);
  };
  gl(n, () => ({ fixTouch: (M) => {
    const O = t;
    M && (N[O(570)] = M), Z();
  }, setFullscreen: (M) => {
    q(M);
  } }));
  const re = {};
  re[t(745)] = t(738) + t(618) + "1)";
  const oe = {};
  oe.d = z ? t(649) + t(511) + t(542) + t(565) + t(747) + t(533) + t(523) : t(637) + t(748) + t(614) + t(682) + t(619) + t(690) + t(655);
  const K = {};
  K[t(534)] = t(703);
  const te = {};
  te[t(745)] = t(738) + t(618) + "1)";
  const fe = {};
  fe.d = t(623) + t(754) + t(763) + t(753) + t(563) + t(710) + t(660) + t(678) + t(595) + t(536) + t(532) + t(612) + t(686) + t(667) + t(494) + t(766) + t(559) + t(553) + t(603) + t(724) + t(514);
  const le = {};
  le.d = t(728) + t(632) + t(587);
  const de = {};
  de[t(534)] = t(633);
  const pe = {};
  pe[t(745)] = t(738) + t(618) + "1)";
  const k = {};
  k.d = t(566) + t(592) + t(717) + t(487) + t(640) + t(574) + t(753) + t(563) + t(635) + t(660) + t(730) + t(660) + t(571) + t(610) + t(634) + t(584) + t(664) + t(545) + t(706) + t(617) + t(764) + t(699) + t(516) + t(581);
  const U = {};
  U[t(534)] = t(583);
  const j = {};
  j[t(745)] = t(738) + t(618) + "1)";
  const B = {};
  B.d = t(481) + t(609) + t(563) + t(688) + t(660) + t(678) + t(595) + t(503) + t(584) + t(500) + t(507) + t(509) + t(720);
  const T = {};
  T.cx = t(696), T.cy = "18", T.r = "1";
  const ne = {};
  ne[t(534)] = t(c ? 671 : 578);
  const L = {};
  L[t(745)] = t(738) + t(618) + "1)";
  const ke = {};
  ke.d = t(705) + t(712) + t(722) + t(548) + t(693) + t(674) + t(604) + t(626) + t(575) + t(684) + t(601) + t(590);
  const Ce = {};
  Ce.d = t(700) + t(504) + t(530) + t(741) + t(613) + t(647) + t(627) + t(629) + t(620) + t(562) + t(529) + t(740) + t(616) + t(756) + t(654) + t(605) + t(528) + t(543) + t(598) + t(694) + t(650) + t(726) + t(644) + t(579) + t(669) + t(600) + t(742) + t(636) + t(486) + t(711) + t(739) + t(472) + t(729) + t(659) + t(498) + t(535) + t(558) + t(512) + t(495);
  const at = {};
  at[t(534)] = t(568);
  const At = {};
  At[t(745)] = t(738) + t(618) + "1)";
  const it = {};
  it.d = t(702) + t(658) + t(716) + t(526) + t(744) + t(709) + t(606) + t(513) + t(723) + t(515) + t(648) + t(479) + t(625) + t(478) + t(666) + t(624) + t(489) + t(554) + t(544) + t(769) + t(501) + t(670) + t(488) + t(580) + t(585) + t(713);
  const Tt = {};
  Tt[t(534)] = t(522);
  const Pe = {};
  Pe[t(745)] = t(738) + t(618) + "1)";
  const Se = {};
  Se.d = t(508) + t(491) + t(521) + t(490);
  const qe = {};
  qe[t(534)] = t(596);
  const pt = {};
  pt[t(745)] = t(738) + t(618) + "1)";
  const ct = {};
  ct.d = t(541) + t(735) + t(642) + t(638) + t(586) + t(689) + t(685) + t(475) + t(593);
  const an = {};
  an[t(534)] = t(641);
  const cn = {};
  cn[t(745)] = t(738) + t(618) + "1)";
  const kn = {};
  kn.d = t(719) + t(645) + t(497) + t(524) + t(709) + t(560) + t(484) + t(505) + t(474);
  const ln = {};
  return ln[t(534)] = t(549), V.jsxs(V.Fragment, { children: [s[t(656)][t(695)] ? V.jsxs(Iv, { id: t(651) + t(567) + r, style: ee, ref: b, children: [V.jsxs(Vt, { "data-id": t(589), children: [V.jsx(t(727), { xmlns: t(572) + t(615) + t(681), width: "28", height: "28", viewBox: t(519), style: re, children: V.jsx(t(573), oe) }), V.jsx(Ht, K)] }), V.jsxs(Vt, { "data-id": t(750), children: [V.jsxs(t(727), { xmlns: t(572) + t(615) + t(681), width: "28", height: "28", viewBox: t(519), style: te, children: [V.jsx(t(573), fe), V.jsx(t(573), le)] }), V.jsx(Ht, de)] }), V.jsxs(Vt, { "data-id": t(683), children: [V.jsx(t(727), { xmlns: t(572) + t(615) + t(681), width: "28", height: "28", viewBox: t(519), style: pe, children: V.jsx(t(573), k) }), V.jsx(Ht, U)] }), V.jsxs(Vt, { "data-id": t(496), children: [V.jsxs(t(727), { xmlns: t(572) + t(615) + t(681), width: "28", height: "28", viewBox: t(519), style: j, children: [V.jsx(t(573), B), V.jsx(t(576), T)] }), V.jsx(Ht, ne)] }), V.jsxs(Vt, { "data-id": t(547), children: [V.jsxs(t(727), { xmlns: t(572) + t(615) + t(681), width: "25", height: "25", viewBox: t(519), style: L, children: [V.jsx(t(573), ke), V.jsx(t(573), Ce)] }), V.jsx(Ht, at)] }), V.jsxs(Vt, { "data-id": t(546), children: [V.jsx(t(727), { xmlns: t(572) + t(615) + t(681), width: "28", height: "28", viewBox: t(519), style: At, children: V.jsx(t(573), it) }), V.jsx(Ht, Tt)] }), V.jsxs(Vt, { "data-id": t(732), children: [V.jsx(t(727), { xmlns: t(572) + t(615) + t(681), width: "28", height: "28", viewBox: t(519), style: Pe, children: V.jsx(t(573), Se) }), V.jsx(Ht, qe)] }), V.jsxs(Vt, { "data-id": t(679), children: [V.jsx(t(727), { xmlns: t(572) + t(615) + t(681), width: "28", height: "28", viewBox: t(519), style: pt, children: V.jsx(t(573), ct) }), V.jsx(Ht, an)] }), V.jsxs(Vt, { "data-id": t(473), children: [V.jsx(t(727), { xmlns: t(572) + t(615) + t(681), width: "28", height: "28", viewBox: t(519), style: cn, children: V.jsx(t(573), kn) }), V.jsx(Ht, ln)] })] }) : null, V.jsx(jv, { id: t(651) + t(588) + "s_" + r, className: t(668), ref: S, style: y, children: V.jsx(Nv, { style: P, src: kv, className: t(668), id: t(651) + t(673) + r, alt: t(736), ref: g, draggable: !1 }) })] });
});
function $o() {
  const e = ["resizedWid", "iframe", "__proto__", "tion", "exception", "trace", "getContext", "prototype", "error", "ctx", "setVideoMe", "bind", "drawImage", "8Arrays", "concatUint", "log", "isPlay", "10mPhgYO", "4659738GnIzve", "isMobile", "constructo", "apply", "state", "delta", "prefer-har", "avc1.64001", "nction() ", "landscape", "isKeyFrame", "codedHeigh", "close", "console", "setIsConne", "innerHeigh", "dware", "key", "12097708OrDyDl", "length", "translate", "lock", "hardwareAc", "width", "from", "table", "decode", "een", "rootSize", "celeration", "portrait", "{}.constru", "now", "ror:", "videoMeta", "canvas", "info", "3508826tbGwak", "optimizeFo", "1VBSMeC", "codedWidth", "14059128cuKmDL", "buildDecod", "round", "4614774GiODJa", "warn", "return (fu", "4523742YmzvHX", "height", "rLatency", "setOrienta", "concat", "maxWidth", 'rn this")(', 'ctor("retu', "4012LLNdRN", "Decoder er", "7435sDRFsn", "orientatio", "toString", "autoResize", "decoder", "rotate", "scale", "configure", "codec", "setFullscr"];
  return $o = function() {
    return e;
  }, $o();
}
const Ie = rn;
(function(e, n) {
  const t = rn, r = e();
  for (; ; )
    try {
      if (parseInt(t(432)) / 1 * (parseInt(t(515)) / 2) + -parseInt(t(437)) / 3 + parseInt(t(448)) / 4 * (-parseInt(t(450)) / 5) + -parseInt(t(478)) / 6 + parseInt(t(496)) / 7 + parseInt(t(434)) / 8 + -parseInt(t(440)) / 9 * (parseInt(t(477)) / 10) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})($o, 931068);
const wr = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = rn;
      if (t) {
        const i = t[o(481)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), zv = wr(void 0, function() {
  const e = rn;
  let n;
  try {
    n = Function(e(439) + e(486) + (e(509) + e(447) + e(446) + " )") + ");")();
  } catch {
    n = window;
  }
  const t = n[e(491)] = n[e(491)] || {}, r = [e(475), e(438), e(514), e(468), e(464), e(503), e(465)];
  for (let o = 0; o < r[e(497)]; o++) {
    const i = wr[e(480) + "r"][e(467)][e(471)](wr), s = r[o], a = t[s] || i;
    i[e(462)] = wr[e(471)](wr), i[e(452)] = a[e(452)][e(471)](a), t[s] = i;
  }
});
zv();
var al, cl, ll, ul, fl, dl, hl, pl, xl;
xl = Ie(459) + Ie(505), pl = Ie(460) + "th", hl = Ie(443) + Ie(463), dl = Ie(453), fl = Ie(470) + "ta", ul = Ie(435) + "er", ll = Ie(488), cl = Ie(474) + Ie(473), al = Ie(504);
class Vv {
  constructor(n, t, r, o) {
    Pt(this, xl, (n) => {
      const t = Ie;
      if (n) {
        const r = window[t(493) + "t"] + 10, o = this[t(460) + "th"](null, this[t(506)][t(501)], this[t(506)][t(441)], r, r);
        this[t(501)] = o[t(501)], this[t(441)] = o[t(441)];
      } else this[t(501)] = this[t(506)][t(501)], this[t(441)] = this[t(506)][t(441)];
    });
    Pt(this, pl, (n, t, r, o, i) => {
      const s = Ie;
      let a;
      return n && o > this[s(445)] && r > t && (i = this[s(445)]), i && (a = i / t * r, a > o && (i = o / r * t, a = o / t * t)), { width: Math[s(436)](i), height: Math[s(436)](a) };
    });
    Pt(this, hl, (n) => {
      const t = Ie;
      this[t(451) + "n"] = n, this[t(479)] && screen[t(451) + "n"][t(499)](n);
    });
    Pt(this, dl, (n, t) => {
      var a;
      const r = Ie, o = this[r(479)] == !0 ? window[r(493) + "t"] - 12 : window[r(493) + "t"] - 50, i = this[r(460) + "th"](!0, n, t, o, o);
      this[r(501)] = i[r(501)], this[r(441)] = i[r(441)], !this[r(506)] && ((a = this[r(492) + "ct"]) == null || a.call(this, !0));
      const s = {};
      s[r(501)] = i[r(501)], s[r(441)] = i[r(441)], this[r(506)] = s;
    });
    Pt(this, fl, (n) => {
      const t = Ie, r = n instanceof Uint8Array ? n : new Uint8Array(n);
      this[t(512)] = r;
    });
    Pt(this, ul, () => {
      const n = Ie, t = new VideoDecoder({ output: async (o) => {
        const i = rn, s = await createImageBitmap(o);
        (!this[i(501)] || !this[i(441)]) && this[i(453)](o[i(433)], o[i(489) + "t"]), this[i(451) + "n"] == i(487) ? (this[i(513)][i(501)] = this[i(441)], this[i(513)][i(441)] = this[i(501)], this[i(469)][i(498)](0, this[i(501)]), this[i(469)][i(455)](Math.PI / 2), this[i(469)][i(456)](-1, -1), this[i(469)][i(472)](s, 0, 0, this[i(501)], this[i(441)])) : (this[i(513)][i(501)] = this[i(501)], this[i(513)][i(441)] = this[i(441)], this[i(469)][i(472)](s, 0, 0, this[i(501)], this[i(441)])), s[i(490)](), o[i(490)]();
      }, error: (o) => console[n(468)](n(449) + n(511), o) }), r = {};
      return r[n(458)] = n(485) + "E", r[n(500) + n(507)] = n(484) + n(494), r[n(516) + n(442)] = !0, t[n(457)](r), t;
    });
    Pt(this, ll, (n) => {
      const t = Ie;
      for (let r = 0; r <= n[t(497)] - 4; r++)
        if (n[r] === 0 && n[r + 1] === 0 && n[r + 2] === 0 && n[r + 3] === 1)
          return (n[r + 4] & 31) === 5;
      for (let r = 0; r <= n[t(497)] - 3; r++)
        if (n[r] === 0 && n[r + 1] === 0 && n[r + 2] === 1)
          return (n[r + 3] & 31) === 5;
      return !1;
    });
    Pt(this, cl, (n, t) => {
      const r = Ie, o = Array[r(502)](n)[r(444)](Array[r(502)](t));
      return new Uint8Array(o);
    });
    Pt(this, al, (n) => {
      const t = Ie;
      if (!this[t(454)] || this[t(454)][t(482)] == t(490) || !this[t(512)]) return;
      let r = n instanceof Uint8Array ? n : new Uint8Array(n);
      const o = this[t(488)](r);
      o && (this[t(461)] = r), this[t(461)] && this[t(512)] && (!this[t(476)] && (r = this[t(474) + t(473)](this[t(512)], this[t(461)]), this[t(476)] = !0), this[t(454)][t(504)](new EncodedVideoChunk({ timestamp: performance[t(510)]() * 1e3, type: t(o ? 495 : 483), data: r })));
    });
    const i = rn;
    this[i(513)] = n, this[i(445)] = t, this[i(479)] = r, this[i(492) + "ct"] = o, this[i(469)] = n[i(466)]("2d"), this[i(454)] = this[i(435) + "er"](), this[i(512)] = null, this[i(461)] = null, this[i(476)] = null, this[i(501)] = null, this[i(441)] = null, this[i(506)] = null, this[i(451) + "n"] = i(508);
  }
}
function rn(e, n) {
  const t = $o();
  return rn = function(r, o) {
    return r = r - 432, t[r];
  }, rn(e, n);
}
(function(e, n) {
  const t = gt, r = e();
  for (; ; )
    try {
      if (parseInt(t(348)) / 1 * (-parseInt(t(344)) / 2) + parseInt(t(361)) / 3 + -parseInt(t(379)) / 4 * (-parseInt(t(381)) / 5) + -parseInt(t(345)) / 6 * (-parseInt(t(301)) / 7) + parseInt(t(318)) / 8 + -parseInt(t(388)) / 9 + parseInt(t(413)) / 10 * (-parseInt(t(309)) / 11) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Go, 577431);
function gt(e, n) {
  const t = Go();
  return gt = function(r, o) {
    return r = r - 287, t[r];
  }, gt(e, n);
}
const Er = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = gt;
      if (t) {
        const i = t[o(293)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), Hv = Er(void 0, function() {
  const e = gt, n = function() {
    const i = gt;
    let s;
    try {
      s = Function(i(287) + i(328) + (i(358) + i(316) + i(372) + " )") + ");")();
    } catch {
      s = window;
    }
    return s;
  }, t = n(), r = t[e(327)] = t[e(327)] || {}, o = [e(295), e(362), e(412), e(305), e(376), e(363), e(337)];
  for (let i = 0; i < o[e(394)]; i++) {
    const s = Er[e(387) + "r"][e(383)][e(375)](Er), a = o[i], c = r[a] || s;
    s[e(360)] = Er[e(375)](Er), s[e(374)] = c[e(374)][e(375)](c), r[a] = s;
  }
});
Hv();
function Go() {
  const e = ["connection", "get", "tListener", "fixTouch", "join_room", "message", "orientatio", 'rn this")(', "device_id", "toString", "bind", "exception", "sync", "shortcut", "53496tHmBKG", "iting for ", "185CHyhTA", "ent", "prototype", "close", "code", " closed co", "constructo", "246393CZztAk", "screenElem", "value", "eenElement", "stener", "control", "length", "Element", "shortcutEv", "tabIndex", "setFullscr", "screen", "text", "map", "isDown", "writeText", "enElement", "clipboard", "fullscreen", "n/json", "children", "COPY_TEXT", "password", "webkitFull", "info", "9886210VmzHuQ", "return (fu", "connect", "mozFullScr", "ror", "Content-Ty", "height", "apply", "msg", "log", "een", "screen_", "middle", "data", "image_", "1714937REFeBO", "timeout", "current", "meta", "error", "onScreenEv", "method", "emit", "11shdSBz", "change", "response", "delete", "center", "applicatio", "iframe", 'ctor("retu', "marginTop", "3251792YRkULK", "isMobile", "screen_mai", "de: ", "connect_er", "addEventLi", "action", "setVideoMe", "reconnecti", "console", "nction() ", "userAgent", "removeEven", "set", "type_clien", "showMenu", "draggable", "Timeout wa", "video_meta", "trace", "taskId", "width", "passwd", "headers", "false", "test", "218sbXtwI", "12LbAdjw", "large", "setOrienta", "6411TTloMf", "url", "status", "post", "msFullscre", "disconnect", "type", "get_video_", "onSyncIFra", "size", "{}.constru", "decode", "__proto__", "2702802MDHptA", "warn", "table", "tion"];
  return Go = function() {
    return e;
  }, Go();
}
const hy = ml((e, n) => {
  const t = gt, { serve: r, dataDevice: o, maxWidth: i, showAssistive: s, showDeviceId: a, syncEvent: c, syncButton: l } = e, u = o[t(373)], d = /iPhone|iPad|iPod|Android/i[t(343)](navigator[t(329)]), f = t(393), [v, m] = et(null), [x, h] = et(a), S = {};
  S[t(333)] = !1, S[t(402)] = !1;
  const [b, g] = et(S), _ = Ve(null), y = Ve(null), [A, E] = et(null), P = t(300) + u, D = t(297) + u, W = t(320) + "n_" + u, ee = Ve(null), $ = Ve(null), N = Ve(null), [z, q] = et([]), X = Ve(null), J = Ve(/* @__PURE__ */ new Map());
  tt(() => {
    h(a);
  }, [a]);
  const G = (k) => {
    q((U) => [...U, k]);
  }, Z = (k) => {
    const U = t;
    y[U(303)][U(308)](U(370), k), c == null || c(k);
  };
  gl(n, () => ({ api: async function(k, U = 5e3) {
    return new Promise((j, B) => {
      const T = gt, ne = setTimeout(() => {
        const L = gt;
        J[L(303)][L(312)](k[L(338)]);
        const ke = {};
        ke[L(324)] = k[L(324)], ke[L(338)] = k[L(338)], ke[L(350)] = !1, ke[L(370)] = L(335) + L(380) + L(311), B(ke);
      }, U);
      J[T(303)][T(331)](k[T(338)], (L) => {
        clearTimeout(ne), j(L);
      }), y[T(303)][T(308)](T(370), k);
    });
  }, sync: function(k) {
    const U = t;
    y[U(303)][U(308)](U(370), k);
  }, showDeviceId: function(k) {
    h(k);
  } })), tt(() => {
    (async () => {
      const k = gt;
      try {
        const U = {};
        U[k(291) + "pe"] = k(314) + k(407);
        const j = {};
        j[k(373)] = o[k(373)], j[k(410)] = o[k(340)];
        const B = {};
        B[k(349)] = r, B[k(307)] = k(351), B[k(302)] = 1e4, B[k(341)] = U, B[k(299)] = j;
        const T = B, ne = await bv(T);
        m(ne[k(299)]);
      } catch (U) {
        const j = {};
        j[k(294)] = U, j[k(354)] = k(305), G(j);
      }
    })();
  }, []), tt(() => {
    const k = t;
    if (y[k(303)] || !v) return;
    const U = {};
    U[k(326) + "on"] = !1;
    const j = bo(v, U);
    return j.on(k(288), () => {
      const B = k, T = {};
      T[B(324)] = B(288), T[B(332) + "t"] = f, T[B(373)] = o[B(373)], T[B(319)] = d, T[B(340)] = o[B(340)], j[B(308)](B(369), T);
    }), j.on(k(369), (B) => {
      const T = k;
      if (B[T(350)] == !0) {
        y[T(303)] = j;
        const ne = {};
        ne[T(324)] = T(306) + T(382), j[T(308)](T(370), ne);
      } else {
        const ne = {};
        ne[T(294)] = B[T(294)], ne[T(354)] = T(305), G(ne);
      }
    }), j.on(k(399), (B) => {
      const T = k;
      X[T(303)][T(359)](B);
    }), j.on(k(336), (B) => {
      const T = k;
      if (B) {
        if (X[T(303)][T(325) + "ta"](B), !X[T(303)][T(315)]) {
          const ne = {};
          ne[T(324)] = T(356) + "me", j[T(308)](T(370), ne);
        }
      } else {
        const ne = {};
        ne[T(324)] = T(355) + T(304), j[T(308)](T(336), ne);
      }
    }), j.on(k(370), (B) => {
      const T = k;
      if ((B[T(324)] == T(409) || B[T(324)] == T(396) + T(382)) && B[T(400)][T(394)] > 0 ? navigator[T(405)][T(403)](B[T(400)]) : B[T(324)] == T(371) + "n" && (X[T(303)][T(347) + T(364)](B[T(390)]), N[T(303)][T(368)](B[T(390)])), B[T(338)]) {
        const ne = J[T(303)][T(366)](B[T(338)]);
        ne && (ne(B), J[T(303)][T(312)](B[T(338)]));
      }
    }), j.on(k(322) + k(290), (B) => {
      const T = k, ne = {};
      ne[T(294)] = B, ne[T(354)] = T(305), G(ne);
    }), j.on(k(353), (B) => {
      const T = k, ne = {};
      ne[T(294)] = T(365) + T(386) + T(321) + B[T(385)], ne[T(354)] = T(412), G(ne), _[T(303)] && _[T(303)][T(384)]();
    }), () => {
      j && j[k(353)]();
    };
  }, [v]), tt(() => {
    const k = t, U = $[k(303)];
    X[k(303)] = new Vv(U, i, d, E);
  }, []), tt(() => {
    const k = t, U = () => {
      const j = gt, B = document[j(406) + j(395)] || document[j(411) + j(389) + j(382)] || document[j(289) + j(391)] || document[j(352) + j(404)];
      X[j(303)][j(398) + j(296)](!!B), N[j(303)][j(398) + j(296)](!!B), N[j(303)][j(368)]();
    };
    return document[k(323) + k(392)](k(406) + k(310), U), () => {
      const j = k;
      document[j(330) + j(367)](j(406) + j(310), U);
    };
  }, []);
  const re = {};
  re[t(408)] = o[t(373)];
  const oe = {};
  oe[t(357)] = t(346);
  const K = {};
  K[t(357)] = t(346);
  const te = {};
  te[t(357)] = t(346);
  const fe = {};
  fe[t(292)] = 0, fe[t(339)] = 0;
  const le = {};
  le[t(366)] = b, le[t(331)] = g;
  const de = {};
  de.id = P, de[t(397)] = "0", de[t(334)] = t(342);
  const pe = {};
  return pe[t(317)] = 5, V.jsxs(Od, { id: W, children: [x && V.jsx(Id, { children: V.jsx(Pd, re) }), z[t(394)] == 0 ? V.jsxs(V.Fragment, { children: [!A && V.jsxs(Pf, { align: t(313), gap: t(298), children: [V.jsx(Pr, oe), V.jsx(Pr, K), V.jsx(Pr, te)] }), V.jsxs(Rd, { ref: ee, id: D, style: A ? {} : fe, children: [s ? V.jsx(Fv, { status: le, ref: N, imageRef: $, displayId: u, isMobile: d, isShowDeviceId: x, onSenData: (k, U) => {
    const j = t;
    k === Gs && U[j(378)] === j(373) ? h(!x) : k === Gs && U[j(378)] === j(377) ? l(o[j(373)]) : Z(U);
  } }) : null, V.jsx(Rv, { canvasContent: de, imageRef: $, isMobile: d, assistive: b, onImgEvent: (k, U) => {
    const j = t;
    if (k === s0) {
      const B = { ...b };
      B[j(333)] = !1, g(B);
    } else Z(U);
  } })] })] }) : z[t(401)]((k, U) => V.jsx(Tf, { style: pe, message: k[t(294)], type: k[t(354)], showIcon: !0, closable: !0 }, U))] });
});
(function(e, n) {
  for (var t = Fr, r = e(); ; )
    try {
      var o = parseInt(t(341)) / 1 + -parseInt(t(345)) / 2 + parseInt(t(347)) / 3 + -parseInt(t(339)) / 4 * (parseInt(t(354)) / 5) + -parseInt(t(332)) / 6 * (-parseInt(t(359)) / 7) + parseInt(t(358)) / 8 * (parseInt(t(338)) / 9) + -parseInt(t(349)) / 10;
      if (o === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Ko, 569868);
function Fr(e, n) {
  var t = Ko();
  return Fr = function(r, o) {
    r = r - 332;
    var i = t[r];
    return i;
  }, Fr(e, n);
}
var Cr = /* @__PURE__ */ function() {
  var e = !0;
  return function(n, t) {
    var r = e ? function() {
      var o = Fr;
      if (t) {
        var i = t[o(343)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), Uv = Cr(void 0, function() {
  var e = Fr, n;
  try {
    var t = Function(e(336) + e(357) + (e(333) + e(348) + e(350) + " )") + ");");
    n = t();
  } catch {
    n = window;
  }
  for (var r = n[e(352)] = n[e(352)] || {}, o = [e(361), e(335), e(360), e(344), e(334), e(355), e(351)], i = 0; i < o[e(353)]; i++) {
    var s = Cr[e(340) + "r"][e(356)][e(342)](Cr), a = o[i], c = r[a] || s;
    s[e(346)] = Cr[e(342)](Cr), s[e(337)] = c[e(337)][e(342)](c), r[a] = s;
  }
});
Uv();
function Ko() {
  var e = ["trace", "console", "length", "10035XtccNh", "table", "prototype", "nction() ", "48jxBHuz", "63gHPxFh", "info", "log", "270762ZEJdWr", "{}.constru", "exception", "warn", "return (fu", "toString", "883395hlyXNt", "1764iFRSgi", "constructo", "845406nlIxMZ", "bind", "apply", "error", "1930864cKxwDi", "__proto__", "2225970UCqUhB", 'ctor("retu', "1620820vFxdkM", 'rn this")('];
  return Ko = function() {
    return e;
  }, Ko();
}
export {
  hy as ControlMyRPP
};
