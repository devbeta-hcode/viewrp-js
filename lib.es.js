import * as w from "react";
import Ie, { useDebugValue as La, createElement as u0, useRef as Ve, useContext as nn, isValidElement as f0, version as d0, createContext as ia, useLayoutEffect as h0, useEffect as et, useState as Qe, forwardRef as ml, useImperativeHandle as gl } from "react";
import Ma from "react-dom";
var Ui = An;
(function(e, n) {
  for (var t = An, r = e(); ; )
    try {
      var o = -parseInt(t(458)) / 1 + -parseInt(t(431)) / 2 + -parseInt(t(434)) / 3 + parseInt(t(444)) / 4 + -parseInt(t(435)) / 5 + -parseInt(t(454)) / 6 + parseInt(t(442)) / 7 * (parseInt(t(450)) / 8);
      if (o === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(To, 613887);
var x0 = /* @__PURE__ */ function() {
  var e = !0;
  return function(n, t) {
    var r = e ? function() {
      if (t) {
        var o = t.apply(n, arguments);
        return t = null, o;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), qi = x0(void 0, function() {
  var e = An;
  return qi[e(428)]()[e(446)](e(433) + "+$")[e(428)]().constructor(qi).search(e(433) + "+$");
});
qi();
var ar = /* @__PURE__ */ function() {
  var e = !0;
  return function(n, t) {
    var r = e ? function() {
      var o = An;
      if (t) {
        var i = t[o(452)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), p0 = ar(void 0, function() {
  var e = An, n;
  try {
    var t = Function(e(457) + e(447) + (e(455) + 'ctor("retu' + e(429) + " )") + ");");
    n = t();
  } catch {
    n = window;
  }
  for (var r = n[e(465)] = n[e(465)] || {}, o = [e(426), "warn", e(443), e(440), e(432), e(461), e(441)], i = -2269 + -2269 * -1; i < o[e(464)]; i++) {
    var s = ar[e(460) + "r"].prototype[e(463)](ar), a = o[i], c = r[a] || s;
    s[e(459)] = ar[e(463)](ar), s[e(428)] = c[e(428)][e(463)](c), r[a] = s;
  }
});
function To() {
  var e = ["construct", "toString", 'rn this")(', "ertyDescri", "1350422cHPmaB", "exception", "(((.+)+)+)", "659322diUcgs", "5712030nmhuoU", "__esModule", "undefined", "get", "getOwnProp", "error", "trace", "7axbNGt", "info", "4119856NaHqkn", "function", "search", "nction() ", "erty", "keys", "26975496cXBsSL", "forEach", "apply", "hasOwnProp", "3302910rHwzXU", "{}.constru", "call", "return (fu", "1200138TCOTHF", "__proto__", "constructo", "table", "prototype", "bind", "length", "console", "default", "log"];
  return To = function() {
    return e;
  }, To();
}
p0();
typeof globalThis !== Ui(437) || typeof window !== Ui(437) || (typeof global < "u" ? global : typeof self < "u");
function m0(e) {
  var n = Ui;
  return e && e[n(436)] && Object[n(462)][n(453) + n(448)].call(e, n(425)) ? e[n(425)] : e;
}
function An(e, n) {
  var t = To();
  return An = function(r, o) {
    r = r - (2 * 169 + -8854 * 1 + 8941);
    var i = t[r];
    return i;
  }, An(e, n);
}
var qr = { exports: {} }, cr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Da;
function g0() {
  if (Da) return cr;
  Da = 1;
  var e = Ie, n = Symbol.for("react.element"), t = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(a, c, l) {
    var u, f = {}, d = null, g = null;
    l !== void 0 && (d = "" + l), c.key !== void 0 && (d = "" + c.key), c.ref !== void 0 && (g = c.ref);
    for (u in c) r.call(c, u) && !i.hasOwnProperty(u) && (f[u] = c[u]);
    if (a && a.defaultProps) for (u in c = a.defaultProps, c) f[u] === void 0 && (f[u] = c[u]);
    return { $$typeof: n, type: a, key: d, ref: g, props: f, _owner: o.current };
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
var Ba;
function v0() {
  return Ba || (Ba = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Ie, n = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), m = Symbol.iterator, p = "@@iterator";
    function h(x) {
      if (x === null || typeof x != "object")
        return null;
      var T = m && x[m] || x[p];
      return typeof T == "function" ? T : null;
    }
    var S = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(x) {
      {
        for (var T = arguments.length, I = new Array(T > 1 ? T - 1 : 0), Y = 1; Y < T; Y++)
          I[Y - 1] = arguments[Y];
        y("error", x, I);
      }
    }
    function y(x, T, I) {
      {
        var Y = S.ReactDebugCurrentFrame, he = Y.getStackAddendum();
        he !== "" && (T += "%s", I = I.concat([he]));
        var pe = I.map(function(ce) {
          return String(ce);
        });
        pe.unshift("Warning: " + T), Function.prototype.apply.call(console[x], console, pe);
      }
    }
    var C = !1, v = !1, A = !1, E = !1, k = !1, L;
    L = Symbol.for("react.module.reference");
    function W(x) {
      return !!(typeof x == "string" || typeof x == "function" || x === r || x === i || k || x === o || x === l || x === u || E || x === g || C || v || A || typeof x == "object" && x !== null && (x.$$typeof === d || x.$$typeof === f || x.$$typeof === s || x.$$typeof === a || x.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      x.$$typeof === L || x.getModuleId !== void 0));
    }
    function ee(x, T, I) {
      var Y = x.displayName;
      if (Y)
        return Y;
      var he = T.displayName || T.name || "";
      return he !== "" ? I + "(" + he + ")" : I;
    }
    function $(x) {
      return x.displayName || "Context";
    }
    function N(x) {
      if (x == null)
        return null;
      if (typeof x.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof x == "function")
        return x.displayName || x.name || null;
      if (typeof x == "string")
        return x;
      switch (x) {
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
      if (typeof x == "object")
        switch (x.$$typeof) {
          case a:
            var T = x;
            return $(T) + ".Consumer";
          case s:
            var I = x;
            return $(I._context) + ".Provider";
          case c:
            return ee(x, x.render, "ForwardRef");
          case f:
            var Y = x.displayName || null;
            return Y !== null ? Y : N(x.type) || "Memo";
          case d: {
            var he = x, pe = he._payload, ce = he._init;
            try {
              return N(ce(pe));
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
          var x = {
            configurable: !0,
            enumerable: !0,
            value: te,
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
        q++;
      }
    }
    function le() {
      {
        if (q--, q === 0) {
          var x = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: z({}, x, {
              value: X
            }),
            info: z({}, x, {
              value: J
            }),
            warn: z({}, x, {
              value: G
            }),
            error: z({}, x, {
              value: Z
            }),
            group: z({}, x, {
              value: re
            }),
            groupCollapsed: z({}, x, {
              value: oe
            }),
            groupEnd: z({}, x, {
              value: K
            })
          });
        }
        q < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var de = S.ReactCurrentDispatcher, xe;
    function P(x, T, I) {
      {
        if (xe === void 0)
          try {
            throw Error();
          } catch (he) {
            var Y = he.stack.trim().match(/\n( *(at )?)/);
            xe = Y && Y[1] || "";
          }
        return `
` + xe + x;
      }
    }
    var U = !1, M;
    {
      var D = typeof WeakMap == "function" ? WeakMap : Map;
      M = new D();
    }
    function O(x, T) {
      if (!x || U)
        return "";
      {
        var I = M.get(x);
        if (I !== void 0)
          return I;
      }
      var Y;
      U = !0;
      var he = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var pe;
      pe = de.current, de.current = null, fe();
      try {
        if (T) {
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
            } catch (Je) {
              Y = Je;
            }
            Reflect.construct(x, [], ce);
          } else {
            try {
              ce.call();
            } catch (Je) {
              Y = Je;
            }
            x.call(ce.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Je) {
            Y = Je;
          }
          x();
        }
      } catch (Je) {
        if (Je && Y && typeof Je.stack == "string") {
          for (var se = Je.stack.split(`
`), We = Y.stack.split(`
`), Ee = se.length - 1, Ce = We.length - 1; Ee >= 1 && Ce >= 0 && se[Ee] !== We[Ce]; )
            Ce--;
          for (; Ee >= 1 && Ce >= 0; Ee--, Ce--)
            if (se[Ee] !== We[Ce]) {
              if (Ee !== 1 || Ce !== 1)
                do
                  if (Ee--, Ce--, Ce < 0 || se[Ee] !== We[Ce]) {
                    var Ae = `
` + se[Ee].replace(" at new ", " at ");
                    return x.displayName && Ae.includes("<anonymous>") && (Ae = Ae.replace("<anonymous>", x.displayName)), typeof x == "function" && M.set(x, Ae), Ae;
                  }
                while (Ee >= 1 && Ce >= 0);
              break;
            }
        }
      } finally {
        U = !1, de.current = pe, le(), Error.prepareStackTrace = he;
      }
      var Nn = x ? x.displayName || x.name : "", xn = Nn ? P(Nn) : "";
      return typeof x == "function" && M.set(x, xn), xn;
    }
    function ne(x, T, I) {
      return O(x, !1);
    }
    function j(x) {
      var T = x.prototype;
      return !!(T && T.isReactComponent);
    }
    function Re(x, T, I) {
      if (x == null)
        return "";
      if (typeof x == "function")
        return O(x, j(x));
      if (typeof x == "string")
        return P(x);
      switch (x) {
        case l:
          return P("Suspense");
        case u:
          return P("SuspenseList");
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case c:
            return ne(x.render);
          case f:
            return Re(x.type, T, I);
          case d: {
            var Y = x, he = Y._payload, pe = Y._init;
            try {
              return Re(pe(he), T, I);
            } catch {
            }
          }
        }
      return "";
    }
    var we = Object.prototype.hasOwnProperty, at = {}, At = S.ReactDebugCurrentFrame;
    function ot(x) {
      if (x) {
        var T = x._owner, I = Re(x.type, x._source, T ? T.type : null);
        At.setExtraStackFrame(I);
      } else
        At.setExtraStackFrame(null);
    }
    function Tt(x, T, I, Y, he) {
      {
        var pe = Function.call.bind(we);
        for (var ce in x)
          if (pe(x, ce)) {
            var se = void 0;
            try {
              if (typeof x[ce] != "function") {
                var We = Error((Y || "React class") + ": " + I + " type `" + ce + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof x[ce] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw We.name = "Invariant Violation", We;
              }
              se = x[ce](T, ce, Y, I, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ee) {
              se = Ee;
            }
            se && !(se instanceof Error) && (ot(he), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Y || "React class", I, ce, typeof se), ot(null)), se instanceof Error && !(se.message in at) && (at[se.message] = !0, ot(he), b("Failed %s type: %s", I, se.message), ot(null));
          }
      }
    }
    var ke = Array.isArray;
    function be(x) {
      return ke(x);
    }
    function qe(x) {
      {
        var T = typeof Symbol == "function" && Symbol.toStringTag, I = T && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return I;
      }
    }
    function pt(x) {
      try {
        return ct(x), !1;
      } catch {
        return !0;
      }
    }
    function ct(x) {
      return "" + x;
    }
    function un(x) {
      if (pt(x))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qe(x)), ct(x);
    }
    var fn = S.ReactCurrentOwner, kn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, dn, B;
    function R(x) {
      if (we.call(x, "ref")) {
        var T = Object.getOwnPropertyDescriptor(x, "ref").get;
        if (T && T.isReactWarning)
          return !1;
      }
      return x.ref !== void 0;
    }
    function Ne(x) {
      if (we.call(x, "key")) {
        var T = Object.getOwnPropertyDescriptor(x, "key").get;
        if (T && T.isReactWarning)
          return !1;
      }
      return x.key !== void 0;
    }
    function De(x, T) {
      typeof x.ref == "string" && fn.current;
    }
    function Xe(x, T) {
      {
        var I = function() {
          dn || (dn = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
        };
        I.isReactWarning = !0, Object.defineProperty(x, "key", {
          get: I,
          configurable: !0
        });
      }
    }
    function Be(x, T) {
      {
        var I = function() {
          B || (B = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
        };
        I.isReactWarning = !0, Object.defineProperty(x, "ref", {
          get: I,
          configurable: !0
        });
      }
    }
    var Ke = function(x, T, I, Y, he, pe, ce) {
      var se = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: x,
        key: T,
        ref: I,
        props: ce,
        // Record the component responsible for creating this element.
        _owner: pe
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
    function mt(x, T, I, Y, he) {
      {
        var pe, ce = {}, se = null, We = null;
        I !== void 0 && (un(I), se = "" + I), Ne(T) && (un(T.key), se = "" + T.key), R(T) && (We = T.ref, De(T, he));
        for (pe in T)
          we.call(T, pe) && !kn.hasOwnProperty(pe) && (ce[pe] = T[pe]);
        if (x && x.defaultProps) {
          var Ee = x.defaultProps;
          for (pe in Ee)
            ce[pe] === void 0 && (ce[pe] = Ee[pe]);
        }
        if (se || We) {
          var Ce = typeof x == "function" ? x.displayName || x.name || "Unknown" : x;
          se && Xe(ce, Ce), We && Be(ce, Ce);
        }
        return Ke(x, se, We, he, Y, fn.current, ce);
      }
    }
    var Ot = S.ReactCurrentOwner, Pn = S.ReactDebugCurrentFrame;
    function Rt(x) {
      if (x) {
        var T = x._owner, I = Re(x.type, x._source, T ? T.type : null);
        Pn.setExtraStackFrame(I);
      } else
        Pn.setExtraStackFrame(null);
    }
    var Bt;
    Bt = !1;
    function Ft(x) {
      return typeof x == "object" && x !== null && x.$$typeof === n;
    }
    function Ye() {
      {
        if (Ot.current) {
          var x = N(Ot.current.type);
          if (x)
            return `

Check the render method of \`` + x + "`.";
        }
        return "";
      }
    }
    function Ze(x) {
      return "";
    }
    var lt = {};
    function kt(x) {
      {
        var T = Ye();
        if (!T) {
          var I = typeof x == "string" ? x : x.displayName || x.name;
          I && (T = `

Check the top-level render call using <` + I + ">.");
        }
        return T;
      }
    }
    function hn(x, T) {
      {
        if (!x._store || x._store.validated || x.key != null)
          return;
        x._store.validated = !0;
        var I = kt(T);
        if (lt[I])
          return;
        lt[I] = !0;
        var Y = "";
        x && x._owner && x._owner !== Ot.current && (Y = " It was passed a child from " + N(x._owner.type) + "."), Rt(x), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', I, Y), Rt(null);
      }
    }
    function In(x, T) {
      {
        if (typeof x != "object")
          return;
        if (be(x))
          for (var I = 0; I < x.length; I++) {
            var Y = x[I];
            Ft(Y) && hn(Y, T);
          }
        else if (Ft(x))
          x._store && (x._store.validated = !0);
        else if (x) {
          var he = h(x);
          if (typeof he == "function" && he !== x.entries)
            for (var pe = he.call(x), ce; !(ce = pe.next()).done; )
              Ft(ce.value) && hn(ce.value, T);
        }
      }
    }
    function Gt(x) {
      {
        var T = x.type;
        if (T == null || typeof T == "string")
          return;
        var I;
        if (typeof T == "function")
          I = T.propTypes;
        else if (typeof T == "object" && (T.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        T.$$typeof === f))
          I = T.propTypes;
        else
          return;
        if (I) {
          var Y = N(T);
          Tt(I, x.props, "prop", Y, x);
        } else if (T.PropTypes !== void 0 && !Bt) {
          Bt = !0;
          var he = N(T);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", he || "Unknown");
        }
        typeof T.getDefaultProps == "function" && !T.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Kt(x) {
      {
        for (var T = Object.keys(x.props), I = 0; I < T.length; I++) {
          var Y = T[I];
          if (Y !== "children" && Y !== "key") {
            Rt(x), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Y), Rt(null);
            break;
          }
        }
        x.ref !== null && (Rt(x), b("Invalid attribute `ref` supplied to `React.Fragment`."), Rt(null));
      }
    }
    var sr = {};
    function Hr(x, T, I, Y, he, pe) {
      {
        var ce = W(x);
        if (!ce) {
          var se = "";
          (x === void 0 || typeof x == "object" && x !== null && Object.keys(x).length === 0) && (se += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var We = Ze();
          We ? se += We : se += Ye();
          var Ee;
          x === null ? Ee = "null" : be(x) ? Ee = "array" : x !== void 0 && x.$$typeof === n ? (Ee = "<" + (N(x.type) || "Unknown") + " />", se = " Did you accidentally export a JSX literal instead of a component?") : Ee = typeof x, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ee, se);
        }
        var Ce = mt(x, T, I, he, pe);
        if (Ce == null)
          return Ce;
        if (ce) {
          var Ae = T.children;
          if (Ae !== void 0)
            if (Y)
              if (be(Ae)) {
                for (var Nn = 0; Nn < Ae.length; Nn++)
                  In(Ae[Nn], x);
                Object.freeze && Object.freeze(Ae);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              In(Ae, x);
        }
        if (we.call(T, "key")) {
          var xn = N(x), Je = Object.keys(T).filter(function(l0) {
            return l0 !== "key";
          }), yi = Je.length > 0 ? "{key: someKey, " + Je.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!sr[xn + yi]) {
            var c0 = Je.length > 0 ? "{" + Je.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, yi, xn, c0, xn), sr[xn + yi] = !0;
          }
        }
        return x === r ? Kt(Ce) : Gt(Ce), Ce;
      }
    }
    function Fe(x, T, I) {
      return Hr(x, T, I, !0);
    }
    function Ur(x, T, I) {
      return Hr(x, T, I, !1);
    }
    var vi = Ur, _e = Fe;
    lr.Fragment = r, lr.jsx = vi, lr.jsxs = _e;
  }()), lr;
}
var Fa;
function y0() {
  return Fa || (Fa = 1, process.env.NODE_ENV === "production" ? qr.exports = g0() : qr.exports = v0()), qr.exports;
}
var V = y0(), tt = function() {
  return tt = Object.assign || function(n) {
    for (var t, r = 1, o = arguments.length; r < o; r++) {
      t = arguments[r];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
    }
    return n;
  }, tt.apply(this, arguments);
};
function Vn(e, n, t) {
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
), Se = "-ms-", Tr = "-moz-", ve = "-webkit-", vl = "comm", $o = "rule", sa = "decl", E0 = "@import", yl = "@keyframes", _0 = "@layer", bl = Math.abs, aa = String.fromCharCode, Wi = Object.assign;
function C0(e, n) {
  return Ue(e, 0) ^ 45 ? (((n << 2 ^ Ue(e, 0)) << 2 ^ Ue(e, 1)) << 2 ^ Ue(e, 2)) << 2 ^ Ue(e, 3) : 0;
}
function Sl(e) {
  return e.trim();
}
function Ut(e, n) {
  return (e = n.exec(e)) ? e[0] : e;
}
function ie(e, n, t) {
  return e.replace(n, t);
}
function ao(e, n, t) {
  return e.indexOf(n, t);
}
function Ue(e, n) {
  return e.charCodeAt(n) | 0;
}
function Hn(e, n, t) {
  return e.slice(n, t);
}
function Nt(e) {
  return e.length;
}
function wl(e) {
  return e.length;
}
function Cr(e, n) {
  return n.push(e), e;
}
function A0(e, n) {
  return e.map(n).join("");
}
function za(e, n) {
  return e.filter(function(t) {
    return !Ut(t, n);
  });
}
var Go = 1, Un = 1, El = 0, ht = 0, je = 0, Zn = "";
function Ko(e, n, t, r, o, i, s, a) {
  return { value: e, root: n, parent: t, type: r, props: o, children: i, line: Go, column: Un, length: s, return: "", siblings: a };
}
function Zt(e, n) {
  return Wi(Ko("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, n);
}
function jn(e) {
  for (; e.root; )
    e = Zt(e.root, { children: [e] });
  Cr(e, e.siblings);
}
function T0() {
  return je;
}
function O0() {
  return je = ht > 0 ? Ue(Zn, --ht) : 0, Un--, je === 10 && (Un = 1, Go--), je;
}
function yt() {
  return je = ht < El ? Ue(Zn, ht++) : 0, Un++, je === 10 && (Un = 1, Go++), je;
}
function bn() {
  return Ue(Zn, ht);
}
function co() {
  return ht;
}
function Zo(e, n) {
  return Hn(Zn, e, n);
}
function Xi(e) {
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
  return Go = Un = 1, El = Nt(Zn = e), ht = 0, [];
}
function k0(e) {
  return Zn = "", e;
}
function bi(e) {
  return Sl(Zo(ht - 1, Yi(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function P0(e) {
  for (; (je = bn()) && je < 33; )
    yt();
  return Xi(e) > 2 || Xi(je) > 3 ? "" : " ";
}
function I0(e, n) {
  for (; --n && yt() && !(je < 48 || je > 102 || je > 57 && je < 65 || je > 70 && je < 97); )
    ;
  return Zo(e, co() + (n < 6 && bn() == 32 && yt() == 32));
}
function Yi(e) {
  for (; yt(); )
    switch (je) {
      // ] ) " '
      case e:
        return ht;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Yi(je);
        break;
      // (
      case 40:
        e === 41 && Yi(e);
        break;
      // \
      case 92:
        yt();
        break;
    }
  return ht;
}
function N0(e, n) {
  for (; yt() && e + je !== 57; )
    if (e + je === 84 && bn() === 47)
      break;
  return "/*" + Zo(n, ht - 1) + "*" + aa(e === 47 ? e : yt());
}
function j0(e) {
  for (; !Xi(bn()); )
    yt();
  return Zo(e, ht);
}
function L0(e) {
  return k0(lo("", null, null, null, [""], e = R0(e), 0, [0], e));
}
function lo(e, n, t, r, o, i, s, a, c) {
  for (var l = 0, u = 0, f = s, d = 0, g = 0, m = 0, p = 1, h = 1, S = 1, b = 0, y = "", C = o, v = i, A = r, E = y; h; )
    switch (m = b, b = yt()) {
      // (
      case 40:
        if (m != 108 && Ue(E, f - 1) == 58) {
          ao(E += ie(bi(b), "&", "&\f"), "&\f", bl(l ? a[l - 1] : 0)) != -1 && (S = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        E += bi(b);
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
        E += I0(co() - 1, 7);
        continue;
      // /
      case 47:
        switch (bn()) {
          case 42:
          case 47:
            Cr(M0(N0(yt(), co()), n, t, c), c);
            break;
          default:
            E += "/";
        }
        break;
      // {
      case 123 * p:
        a[l++] = Nt(E) * S;
      // } ; \0
      case 125 * p:
      case 59:
      case 0:
        switch (b) {
          // \0 }
          case 0:
          case 125:
            h = 0;
          // ;
          case 59 + u:
            S == -1 && (E = ie(E, /\f/g, "")), g > 0 && Nt(E) - f && Cr(g > 32 ? Ha(E + ";", r, t, f - 1, c) : Ha(ie(E, " ", "") + ";", r, t, f - 2, c), c);
            break;
          // @ ;
          case 59:
            E += ";";
          // { rule/at-rule
          default:
            if (Cr(A = Va(E, n, t, l, u, o, a, y, C = [], v = [], f, i), i), b === 123)
              if (u === 0)
                lo(E, n, A, A, C, i, f, a, v);
              else
                switch (d === 99 && Ue(E, 3) === 110 ? 100 : d) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    lo(e, A, A, r && Cr(Va(e, A, A, 0, 0, o, a, y, o, C = [], f, v), v), o, v, f, a, r ? C : v);
                    break;
                  default:
                    lo(E, A, A, A, [""], v, 0, a, v);
                }
        }
        l = u = g = 0, p = S = 1, y = E = "", f = s;
        break;
      // :
      case 58:
        f = 1 + Nt(E), g = m;
      default:
        if (p < 1) {
          if (b == 123)
            --p;
          else if (b == 125 && p++ == 0 && O0() == 125)
            continue;
        }
        switch (E += aa(b), b * p) {
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
            bn() === 45 && (E += bi(yt())), d = bn(), u = f = Nt(y = E += j0(co())), b++;
            break;
          // -
          case 45:
            m === 45 && Nt(E) == 2 && (p = 0);
        }
    }
  return i;
}
function Va(e, n, t, r, o, i, s, a, c, l, u, f) {
  for (var d = o - 1, g = o === 0 ? i : [""], m = wl(g), p = 0, h = 0, S = 0; p < r; ++p)
    for (var b = 0, y = Hn(e, d + 1, d = bl(h = s[p])), C = e; b < m; ++b)
      (C = Sl(h > 0 ? g[b] + " " + y : ie(y, /&\f/g, g[b]))) && (c[S++] = C);
  return Ko(e, n, t, o === 0 ? $o : a, c, l, u, f);
}
function M0(e, n, t, r) {
  return Ko(e, n, t, vl, aa(T0()), Hn(e, 2, -2), 0, r);
}
function Ha(e, n, t, r, o) {
  return Ko(e, n, t, sa, Hn(e, 0, r), Hn(e, r + 1, -1), r, o);
}
function _l(e, n, t) {
  switch (C0(e, n)) {
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
      return Tr + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ve + e + Tr + e + Se + e + e;
    // writing-mode
    case 5936:
      switch (Ue(e, n + 11)) {
        // vertical-l(r)
        case 114:
          return ve + e + Se + ie(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return ve + e + Se + ie(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return ve + e + Se + ie(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return ve + e + Se + e + e;
    // order
    case 6165:
      return ve + e + Se + "flex-" + e + e;
    // align-items
    case 5187:
      return ve + e + ie(e, /(\w+).+(:[^]+)/, ve + "box-$1$2" + Se + "flex-$1$2") + e;
    // align-self
    case 5443:
      return ve + e + Se + "flex-item-" + ie(e, /flex-|-self/g, "") + (Ut(e, /flex-|baseline/) ? "" : Se + "grid-row-" + ie(e, /flex-|-self/g, "")) + e;
    // align-content
    case 4675:
      return ve + e + Se + "flex-line-pack" + ie(e, /align-content|flex-|-self/g, "") + e;
    // flex-shrink
    case 5548:
      return ve + e + Se + ie(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return ve + e + Se + ie(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return ve + "box-" + ie(e, "-grow", "") + ve + e + Se + ie(e, "grow", "positive") + e;
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
      return ie(ie(e, /(.+:)(flex-)?(.*)/, ve + "box-pack:$3" + Se + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ve + e + e;
    // justify-self
    case 4200:
      if (!Ut(e, /flex-|baseline/)) return Se + "grid-column-align" + Hn(e, n) + e;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return Se + ie(e, "template-", "") + e;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return t && t.some(function(r, o) {
        return n = o, Ut(r.props, /grid-\w+-end/);
      }) ? ~ao(e + (t = t[n].value), "span", 0) ? e : Se + ie(e, "-start", "") + e + Se + "grid-row-span:" + (~ao(t, "span", 0) ? Ut(t, /\d+/) : +Ut(t, /\d+/) - +Ut(e, /\d+/)) + ";" : Se + ie(e, "-start", "") + e;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return t && t.some(function(r) {
        return Ut(r.props, /grid-\w+-start/);
      }) ? e : Se + ie(ie(e, "-end", "-span"), "span ", "") + e;
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
      if (Nt(e) - 1 - n > 6)
        switch (Ue(e, n + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (Ue(e, n + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return ie(e, /(.+:)(.+)-([^]+)/, "$1" + ve + "$2-$3$1" + Tr + (Ue(e, n + 3) == 108 ? "$3" : "$2-$3")) + e;
          // (s)tretch
          case 115:
            return ~ao(e, "stretch", 0) ? _l(ie(e, "stretch", "fill-available"), n, t) + e : e;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return ie(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, s, a, c, l) {
        return Se + o + ":" + i + l + (s ? Se + o + "-span:" + (a ? c : +c - +i) + l : "") + e;
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
          return ie(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + ve + (Ue(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ve + "$2$3$1" + Se + "$2box$3") + e;
        // (inline-)?gri(d)
        case 100:
          return ie(e, ":", ":" + Se) + e;
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
function Oo(e, n) {
  for (var t = "", r = 0; r < e.length; r++)
    t += n(e[r], r, e, n) || "";
  return t;
}
function D0(e, n, t, r) {
  switch (e.type) {
    case _0:
      if (e.children.length) break;
    case E0:
    case sa:
      return e.return = e.return || e.value;
    case vl:
      return "";
    case yl:
      return e.return = e.value + "{" + Oo(e.children, r) + "}";
    case $o:
      if (!Nt(e.value = e.props.join(","))) return "";
  }
  return Nt(t = Oo(e.children, r)) ? e.return = e.value + "{" + t + "}" : "";
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
      case sa:
        e.return = _l(e.value, e.length, t);
        return;
      case yl:
        return Oo([Zt(e, { value: ie(e.value, "@", "@" + ve) })], r);
      case $o:
        if (e.length)
          return A0(t = e.props, function(o) {
            switch (Ut(o, r = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                jn(Zt(e, { props: [ie(o, /:(read-\w+)/, ":" + Tr + "$1")] })), jn(Zt(e, { props: [o] })), Wi(e, { props: za(t, r) });
                break;
              // :placeholder
              case "::placeholder":
                jn(Zt(e, { props: [ie(o, /:(plac\w+)/, ":" + ve + "input-$1")] })), jn(Zt(e, { props: [ie(o, /:(plac\w+)/, ":" + Tr + "$1")] })), jn(Zt(e, { props: [ie(o, /:(plac\w+)/, Se + "input-$1")] })), jn(Zt(e, { props: [o] })), Wi(e, { props: za(t, r) });
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
}, Tn = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Cl = "active", Al = "data-styled-version", Jo = "6.1.18", ca = `/*!sc*/
`, Ro = typeof window < "u" && typeof document < "u", H0 = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Ua = /invalid hook call/i, Wr = /* @__PURE__ */ new Set(), U0 = function(e, n) {
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
        Ua.test(s) ? (i = !1, Wr.delete(r)) : o.apply(void 0, Vn([s], a, !1));
      }, Ve(), i && !Wr.has(r) && (console.warn(r), Wr.add(r));
    } catch (s) {
      Ua.test(s.message) && Wr.delete(r);
    } finally {
      console.error = o;
    }
  }
}, Qo = Object.freeze([]), qn = Object.freeze({});
function q0(e, n, t) {
  return t === void 0 && (t = qn), e.theme !== t.theme && e.theme || n || t.theme;
}
var $i = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), W0 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, X0 = /(^-|-$)/g;
function qa(e) {
  return e.replace(W0, "-").replace(X0, "");
}
var Y0 = /(a)(d)/gi, Xr = 52, Wa = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Gi(e) {
  var n, t = "";
  for (n = Math.abs(e); n > Xr; n = n / Xr | 0) t = Wa(n % Xr) + t;
  return (Wa(n % Xr) + t).replace(Y0, "$1-$2");
}
var Si, Tl = 5381, mn = function(e, n) {
  for (var t = n.length; t; ) e = 33 * e ^ n.charCodeAt(--t);
  return e;
}, Ol = function(e) {
  return mn(Tl, e);
};
function $0(e) {
  return Gi(Ol(e) >>> 0);
}
function Rl(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function wi(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var kl = typeof Symbol == "function" && Symbol.for, Pl = kl ? Symbol.for("react.memo") : 60115, G0 = kl ? Symbol.for("react.forward_ref") : 60112, K0 = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Z0 = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Il = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, J0 = ((Si = {})[G0] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Si[Pl] = Il, Si);
function Xa(e) {
  return ("type" in (n = e) && n.type.$$typeof) === Pl ? Il : "$$typeof" in e ? J0[e.$$typeof] : K0;
  var n;
}
var Q0 = Object.defineProperty, ed = Object.getOwnPropertyNames, Ya = Object.getOwnPropertySymbols, td = Object.getOwnPropertyDescriptor, nd = Object.getPrototypeOf, $a = Object.prototype;
function Nl(e, n, t) {
  if (typeof n != "string") {
    if ($a) {
      var r = nd(n);
      r && r !== $a && Nl(e, r, t);
    }
    var o = ed(n);
    Ya && (o = o.concat(Ya(n)));
    for (var i = Xa(e), s = Xa(n), a = 0; a < o.length; ++a) {
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
function Wn(e) {
  return typeof e == "function";
}
function la(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function vn(e, n) {
  return e && n ? "".concat(e, " ").concat(n) : e || n || "";
}
function Ga(e, n) {
  if (e.length === 0) return "";
  for (var t = e[0], r = 1; r < e.length; r++) t += e[r];
  return t;
}
function Xn(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Ki(e, n, t) {
  if (t === void 0 && (t = !1), !t && !Xn(e) && !Array.isArray(e)) return n;
  if (Array.isArray(n)) for (var r = 0; r < n.length; r++) e[r] = Ki(e[r], n[r]);
  else if (Xn(n)) for (var r in n) e[r] = Ki(e[r], n[r]);
  return e;
}
function ua(e, n) {
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
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(n.length > 0 ? " Args: ".concat(n.join(", ")) : "")) : new Error(od.apply(void 0, Vn([rd[e]], n, !1)).trim());
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
    for (var r = this.groupSizes[n], o = this.indexOfGroup(n), i = o + r, s = o; s < i; s++) t += "".concat(this.tag.getRule(s)).concat(ca);
    return t;
  }, e;
}(), sd = 1 << 30, uo = /* @__PURE__ */ new Map(), ko = /* @__PURE__ */ new Map(), fo = 1, Yr = function(e) {
  if (uo.has(e)) return uo.get(e);
  for (; ko.has(fo); ) fo++;
  var n = fo++;
  if (process.env.NODE_ENV !== "production" && ((0 | n) < 0 || n > sd)) throw Jn(16, "".concat(n));
  return uo.set(e, n), ko.set(n, e), n;
}, ad = function(e, n) {
  fo = n + 1, uo.set(e, n), ko.set(n, e);
}, cd = "style[".concat(Tn, "][").concat(Al, '="').concat(Jo, '"]'), ld = new RegExp("^".concat(Tn, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), ud = function(e, n, t) {
  for (var r, o = t.split(","), i = 0, s = o.length; i < s; i++) (r = o[i]) && e.registerName(n, r);
}, fd = function(e, n) {
  for (var t, r = ((t = n.textContent) !== null && t !== void 0 ? t : "").split(ca), o = [], i = 0, s = r.length; i < s; i++) {
    var a = r[i].trim();
    if (a) {
      var c = a.match(ld);
      if (c) {
        var l = 0 | parseInt(c[1], 10), u = c[2];
        l !== 0 && (ad(u, l), ud(e, u, c[3]), e.getTag().insertRules(l, o)), o.length = 0;
      } else o.push(a);
    }
  }
}, Ka = function(e) {
  for (var n = document.querySelectorAll(cd), t = 0, r = n.length; t < r; t++) {
    var o = n[t];
    o && o.getAttribute(Tn) !== Cl && (fd(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function dd() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var jl = function(e) {
  var n = document.head, t = e || n, r = document.createElement("style"), o = function(a) {
    var c = Array.from(a.querySelectorAll("style[".concat(Tn, "]")));
    return c[c.length - 1];
  }(t), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(Tn, Cl), r.setAttribute(Al, Jo);
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
}(), xd = function() {
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
}(), pd = function() {
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
}(), Za = Ro, md = { isServer: !Ro, useCSSOMInjection: !H0 }, Ll = function() {
  function e(n, t, r) {
    n === void 0 && (n = qn), t === void 0 && (t = {});
    var o = this;
    this.options = tt(tt({}, md), n), this.gs = t, this.names = new Map(r), this.server = !!n.isServer, !this.server && Ro && Za && (Za = !1, Ka(this)), ua(this, function() {
      return function(i) {
        for (var s = i.getTag(), a = s.length, c = "", l = function(f) {
          var d = function(S) {
            return ko.get(S);
          }(f);
          if (d === void 0) return "continue";
          var g = i.names.get(d), m = s.getGroup(f);
          if (g === void 0 || !g.size || m.length === 0) return "continue";
          var p = "".concat(Tn, ".g").concat(f, '[id="').concat(d, '"]'), h = "";
          g !== void 0 && g.forEach(function(S) {
            S.length > 0 && (h += "".concat(S, ","));
          }), c += "".concat(m).concat(p, '{content:"').concat(h, '"}').concat(ca);
        }, u = 0; u < a; u++) l(u);
        return c;
      }(o);
    });
  }
  return e.registerId = function(n) {
    return Yr(n);
  }, e.prototype.rehydrate = function() {
    !this.server && Ro && Ka(this);
  }, e.prototype.reconstructWithOptions = function(n, t) {
    return t === void 0 && (t = !0), new e(tt(tt({}, this.options), n), this.gs, t && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(n) {
    return this.gs[n] = (this.gs[n] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (n = function(t) {
      var r = t.useCSSOMInjection, o = t.target;
      return t.isServer ? new pd(o) : r ? new hd(o) : new xd(o);
    }(this.options), new id(n)));
    var n;
  }, e.prototype.hasNameForId = function(n, t) {
    return this.names.has(n) && this.names.get(n).has(t);
  }, e.prototype.registerName = function(n, t) {
    if (Yr(n), this.names.has(n)) this.names.get(n).add(t);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(t), this.names.set(n, r);
    }
  }, e.prototype.insertRules = function(n, t, r) {
    this.registerName(n, t), this.getTag().insertRules(Yr(n), r);
  }, e.prototype.clearNames = function(n) {
    this.names.has(n) && this.names.get(n).clear();
  }, e.prototype.clearRules = function(n) {
    this.getTag().clearGroup(Yr(n)), this.clearNames(n);
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
  var n, t, r, o = qn, i = o.options, s = i === void 0 ? qn : i, a = o.plugins, c = a === void 0 ? Qo : a, l = function(d, g, m) {
    return m.startsWith(t) && m.endsWith(t) && m.replaceAll(t, "").length > 0 ? ".".concat(n) : d;
  }, u = c.slice();
  u.push(function(d) {
    d.type === $o && d.value.includes("&") && (d.props[0] = d.props[0].replace(gd, t).replace(r, l));
  }), s.prefix && u.push(z0), u.push(D0);
  var f = function(d, g, m, p) {
    g === void 0 && (g = ""), m === void 0 && (m = ""), p === void 0 && (p = "&"), n = p, t = g, r = new RegExp("\\".concat(t, "\\b"), "g");
    var h = d.replace(vd, ""), S = L0(m || g ? "".concat(m, " ").concat(g, " { ").concat(h, " }") : h);
    s.namespace && (S = Ml(S, s.namespace));
    var b = [];
    return Oo(S, B0(u.concat(F0(function(y) {
      return b.push(y);
    })))), b;
  };
  return f.hash = c.length ? c.reduce(function(d, g) {
    return g.name || Jn(15), mn(d, g.name);
  }, Tl).toString() : "", f;
}
var bd = new Ll(), Zi = yd(), Dl = Ie.createContext({ shouldForwardProp: void 0, styleSheet: bd, stylis: Zi });
Dl.Consumer;
Ie.createContext(void 0);
function Ja() {
  return nn(Dl);
}
var Qa = function() {
  function e(n, t) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Zi);
      var s = r.name + i.hash;
      o.hasNameForId(r.id, s) || o.insertRules(r.id, s, i(r.rules, s, "@keyframes"));
    }, this.name = n, this.id = "sc-keyframes-".concat(n), this.rules = t, ua(this, function() {
      throw Jn(12, String(r.name));
    });
  }
  return e.prototype.getName = function(n) {
    return n === void 0 && (n = Zi), this.name + n.hash;
  }, e;
}(), Sd = function(e) {
  return e >= "A" && e <= "Z";
};
function ec(e) {
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
    e.hasOwnProperty(o) && !Bl(i) && (Array.isArray(i) && i.isCss || Wn(i) ? r.push("".concat(ec(o), ":"), i, ";") : Xn(i) ? r.push.apply(r, Vn(Vn(["".concat(o, " {")], Fl(i), !1), ["}"], !1)) : r.push("".concat(ec(o), ": ").concat((n = o, (t = i) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || t === 0 || n in V0 || n.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return r;
};
function Sn(e, n, t, r) {
  if (Bl(e)) return [];
  if (la(e)) return [".".concat(e.styledComponentId)];
  if (Wn(e)) {
    if (!Wn(i = e) || i.prototype && i.prototype.isReactComponent || !n) return [e];
    var o = e(n);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof Qa || Xn(o) || o === null || console.error("".concat(Rl(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Sn(o, n, t, r);
  }
  var i;
  return e instanceof Qa ? t ? (e.inject(t, r), [e.getName(r)]) : [e] : Xn(e) ? Fl(e) : Array.isArray(e) ? Array.prototype.concat.apply(Qo, e.map(function(s) {
    return Sn(s, n, t, r);
  })) : [e.toString()];
}
function wd(e) {
  for (var n = 0; n < e.length; n += 1) {
    var t = e[n];
    if (Wn(t) && !la(t)) return !1;
  }
  return !0;
}
var Ed = Ol(Jo), _d = function() {
  function e(n, t, r) {
    this.rules = n, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && wd(n), this.componentId = t, this.baseHash = mn(Ed, t), this.baseStyle = r, Ll.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(n, t, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(n, t, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) o = vn(o, this.staticRulesId);
    else {
      var i = Ga(Sn(this.rules, n, t, r)), s = Gi(mn(this.baseHash, i) >>> 0);
      if (!t.hasNameForId(this.componentId, s)) {
        var a = r(i, ".".concat(s), void 0, this.componentId);
        t.insertRules(this.componentId, s, a);
      }
      o = vn(o, s), this.staticRulesId = s;
    }
    else {
      for (var c = mn(this.baseHash, r.hash), l = "", u = 0; u < this.rules.length; u++) {
        var f = this.rules[u];
        if (typeof f == "string") l += f, process.env.NODE_ENV !== "production" && (c = mn(c, f));
        else if (f) {
          var d = Ga(Sn(f, n, t, r));
          c = mn(c, d + u), l += d;
        }
      }
      if (l) {
        var g = Gi(c >>> 0);
        t.hasNameForId(this.componentId, g) || t.insertRules(this.componentId, g, r(l, ".".concat(g), void 0, this.componentId)), o = vn(o, g);
      }
    }
    return o;
  }, e;
}(), zl = Ie.createContext(void 0);
zl.Consumer;
var Ei = {}, tc = /* @__PURE__ */ new Set();
function Cd(e, n, t) {
  var r = la(e), o = e, i = !wi(e), s = n.attrs, a = s === void 0 ? Qo : s, c = n.componentId, l = c === void 0 ? function(C, v) {
    var A = typeof C != "string" ? "sc" : qa(C);
    Ei[A] = (Ei[A] || 0) + 1;
    var E = "".concat(A, "-").concat($0(Jo + A + Ei[A]));
    return v ? "".concat(v, "-").concat(E) : E;
  }(n.displayName, n.parentComponentId) : c, u = n.displayName, f = u === void 0 ? function(C) {
    return wi(C) ? "styled.".concat(C) : "Styled(".concat(Rl(C), ")");
  }(e) : u, d = n.displayName && n.componentId ? "".concat(qa(n.displayName), "-").concat(n.componentId) : n.componentId || l, g = r && o.attrs ? o.attrs.concat(a).filter(Boolean) : a, m = n.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var p = o.shouldForwardProp;
    if (n.shouldForwardProp) {
      var h = n.shouldForwardProp;
      m = function(C, v) {
        return p(C, v) && h(C, v);
      };
    } else m = p;
  }
  var S = new _d(t, d, r ? o.componentStyle : void 0);
  function b(C, v) {
    return function(A, E, k) {
      var L = A.attrs, W = A.componentStyle, ee = A.defaultProps, $ = A.foldedComponentIds, N = A.styledComponentId, z = A.target, q = Ie.useContext(zl), X = Ja(), J = A.shouldForwardProp || X.shouldForwardProp;
      process.env.NODE_ENV !== "production" && La(N);
      var G = q0(E, q, ee) || qn, Z = function(le, de, xe) {
        for (var P, U = tt(tt({}, de), { className: void 0, theme: xe }), M = 0; M < le.length; M += 1) {
          var D = Wn(P = le[M]) ? P(U) : P;
          for (var O in D) U[O] = O === "className" ? vn(U[O], D[O]) : O === "style" ? tt(tt({}, U[O]), D[O]) : D[O];
        }
        return de.className && (U.className = vn(U.className, de.className)), U;
      }(L, E, G), re = Z.as || z, oe = {};
      for (var K in Z) Z[K] === void 0 || K[0] === "$" || K === "as" || K === "theme" && Z.theme === G || (K === "forwardedAs" ? oe.as = Z.forwardedAs : J && !J(K, re) || (oe[K] = Z[K], J || process.env.NODE_ENV !== "development" || w0(K) || tc.has(K) || !$i.has(re) || (tc.add(K), console.warn('styled-components: it looks like an unknown prop "'.concat(K, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var te = function(le, de) {
        var xe = Ja(), P = le.generateAndInjectStyles(de, xe.styleSheet, xe.stylis);
        return process.env.NODE_ENV !== "production" && La(P), P;
      }(W, Z);
      process.env.NODE_ENV !== "production" && A.warnTooManyClasses && A.warnTooManyClasses(te);
      var fe = vn($, N);
      return te && (fe += " " + te), Z.className && (fe += " " + Z.className), oe[wi(re) && !$i.has(re) ? "class" : "className"] = fe, k && (oe.ref = k), u0(re, oe);
    }(y, C, v);
  }
  b.displayName = f;
  var y = Ie.forwardRef(b);
  return y.attrs = g, y.componentStyle = S, y.displayName = f, y.shouldForwardProp = m, y.foldedComponentIds = r ? vn(o.foldedComponentIds, o.styledComponentId) : "", y.styledComponentId = d, y.target = r ? o.target : e, Object.defineProperty(y, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(C) {
    this._foldedDefaultProps = r ? function(v) {
      for (var A = [], E = 1; E < arguments.length; E++) A[E - 1] = arguments[E];
      for (var k = 0, L = A; k < L.length; k++) Ki(v, L[k], !0);
      return v;
    }({}, o.defaultProps, C) : C;
  } }), process.env.NODE_ENV !== "production" && (U0(f, d), y.warnTooManyClasses = /* @__PURE__ */ function(C, v) {
    var A = {}, E = !1;
    return function(k) {
      if (!E && (A[k] = !0, Object.keys(A).length >= 200)) {
        var L = v ? ' with the id of "'.concat(v, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(C).concat(L, `.
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
  }(f, d)), ua(y, function() {
    return ".".concat(y.styledComponentId);
  }), i && Nl(y, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), y;
}
function nc(e, n) {
  for (var t = [e[0]], r = 0, o = n.length; r < o; r += 1) t.push(n[r], e[r + 1]);
  return t;
}
var rc = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function Ad(e) {
  for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
  if (Wn(e) || Xn(e)) return rc(Sn(nc(Qo, Vn([e], n, !0))));
  var r = e;
  return n.length === 0 && r.length === 1 && typeof r[0] == "string" ? Sn(r) : rc(Sn(nc(r, n)));
}
function Ji(e, n, t) {
  if (t === void 0 && (t = qn), !n) throw Jn(1, n);
  var r = function(o) {
    for (var i = [], s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
    return e(n, t, Ad.apply(void 0, Vn([o], i, !1)));
  };
  return r.attrs = function(o) {
    return Ji(e, n, tt(tt({}, t), { attrs: Array.prototype.concat(t.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return Ji(e, n, tt(tt({}, t), o));
  }, r;
}
var Vl = function(e) {
  return Ji(Cd, e);
}, wt = Vl;
$i.forEach(function(e) {
  wt[e] = Vl(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var $r = "__sc-".concat(Tn, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[$r] || (window[$r] = 0), window[$r] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[$r] += 1);
const Hl = qt;
(function(e, n) {
  const t = qt, r = e();
  for (; ; )
    try {
      if (parseInt(t(510)) / 1 + parseInt(t(508)) / 2 + parseInt(t(501)) / 3 + -parseInt(t(500)) / 4 * (-parseInt(t(504)) / 5) + parseInt(t(492)) / 6 * (parseInt(t(503)) / 7) + parseInt(t(519)) / 8 * (-parseInt(t(493)) / 9) + -parseInt(t(511)) / 10 * (parseInt(t(518)) / 11) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Po, 867932);
const Td = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = qt;
      if (t) {
        const i = t[o(516)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), Qi = Td(void 0, function() {
  const e = qt;
  return Qi[e(509)]()[e(513)](e(499) + "+$")[e(509)]().constructor(Qi)[e(513)](e(499) + "+$");
});
Qi();
const ur = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = qt;
      if (t) {
        const i = t[o(516)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), Od = ur(void 0, function() {
  const e = qt, n = function() {
    const i = qt;
    let s;
    try {
      s = Function(i(494) + i(495) + ("{}.constru" + i(506) + 'rn this")( )') + ");")();
    } catch {
      s = window;
    }
    return s;
  }, t = n(), r = t.console = t.console || {}, o = [e(505), e(498), e(507), e(517), e(512), "table", e(497)];
  for (let i = 2609 + 1 * 7731 + -10340; i < o[e(514)]; i++) {
    const s = ur[e(496) + "r"].prototype[e(502)](ur), a = o[i], c = r[a] || s;
    s.__proto__ = ur.bind(ur), s[e(509)] = c[e(509)][e(502)](c), r[a] = s;
  }
});
Od();
const Rd = wt.div`
  flex-direction: column;
  border-radius: 15px;
  border: 3px solid #a0beeb;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
  justify-items: center;
  align-items: center;
`, kd = wt[Hl(515)]`
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
`, Pd = wt.canvas`
  border-radius: 7px;
  display: inline;
  padding: 0;
  &:focus-visible {
    outline: none;
  }
`, Id = wt.span`
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
function Po() {
  const e = ["955643SjYmnU", "1910DYqspY", "exception", "search", "length", "div", "apply", "error", "176924SIFatc", "6171400dgkxoA", "78zAhdYW", "18RBnwGD", "return (fu", "nction() ", "constructo", "trace", "warn", "(((.+)+)+)", "4jlLaGo", "4727829QdNPTl", "bind", "363125inaKhh", "2797505gpbEOL", "log", 'ctor("retu', "info", "3434728aiMRPD", "toString"];
  return Po = function() {
    return e;
  }, Po();
}
function qt(e, n) {
  const t = Po();
  return qt = function(r, o) {
    return r = r - (-2368 * 3 + -5756 + 1669 * 8), t[r];
  }, qt(e, n);
}
const Nd = wt[Hl(515)]`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  pointer-events: none;
`, Lt = /* @__PURE__ */ Object.create(null);
Lt.open = "0";
Lt.close = "1";
Lt.ping = "2";
Lt.pong = "3";
Lt.message = "4";
Lt.upgrade = "5";
Lt.noop = "6";
const ho = /* @__PURE__ */ Object.create(null);
Object.keys(Lt).forEach((e) => {
  ho[Lt[e]] = e;
});
const es = { type: "error", data: "parser error" }, Ul = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", ql = typeof ArrayBuffer == "function", Wl = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer, fa = ({ type: e, data: n }, t, r) => Ul && n instanceof Blob ? t ? r(n) : oc(n, r) : ql && (n instanceof ArrayBuffer || Wl(n)) ? t ? r(n) : oc(new Blob([n]), r) : r(Lt[e] + (n || "")), oc = (e, n) => {
  const t = new FileReader();
  return t.onload = function() {
    const r = t.result.split(",")[1];
    n("b" + (r || ""));
  }, t.readAsDataURL(e);
};
function ic(e) {
  return e instanceof Uint8Array ? e : e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
let _i;
function jd(e, n) {
  if (Ul && e.data instanceof Blob)
    return e.data.arrayBuffer().then(ic).then(n);
  if (ql && (e.data instanceof ArrayBuffer || Wl(e.data)))
    return n(ic(e.data));
  fa(e, !1, (t) => {
    _i || (_i = new TextEncoder()), n(_i.encode(t));
  });
}
const sc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ar = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < sc.length; e++)
  Ar[sc.charCodeAt(e)] = e;
const Ld = (e) => {
  let n = e.length * 0.75, t = e.length, r, o = 0, i, s, a, c;
  e[e.length - 1] === "=" && (n--, e[e.length - 2] === "=" && n--);
  const l = new ArrayBuffer(n), u = new Uint8Array(l);
  for (r = 0; r < t; r += 4)
    i = Ar[e.charCodeAt(r)], s = Ar[e.charCodeAt(r + 1)], a = Ar[e.charCodeAt(r + 2)], c = Ar[e.charCodeAt(r + 3)], u[o++] = i << 2 | s >> 4, u[o++] = (s & 15) << 4 | a >> 2, u[o++] = (a & 3) << 6 | c & 63;
  return l;
}, Md = typeof ArrayBuffer == "function", da = (e, n) => {
  if (typeof e != "string")
    return {
      type: "message",
      data: Xl(e, n)
    };
  const t = e.charAt(0);
  return t === "b" ? {
    type: "message",
    data: Dd(e.substring(1), n)
  } : ho[t] ? e.length > 1 ? {
    type: ho[t],
    data: e.substring(1)
  } : {
    type: ho[t]
  } : es;
}, Dd = (e, n) => {
  if (Md) {
    const t = Ld(e);
    return Xl(t, n);
  } else
    return { base64: !0, data: e };
}, Xl = (e, n) => {
  switch (n) {
    case "blob":
      return e instanceof Blob ? e : new Blob([e]);
    case "arraybuffer":
    default:
      return e instanceof ArrayBuffer ? e : e.buffer;
  }
}, Yl = "", Bd = (e, n) => {
  const t = e.length, r = new Array(t);
  let o = 0;
  e.forEach((i, s) => {
    fa(i, !1, (a) => {
      r[s] = a, ++o === t && n(r.join(Yl));
    });
  });
}, Fd = (e, n) => {
  const t = e.split(Yl), r = [];
  for (let o = 0; o < t.length; o++) {
    const i = da(t[o], n);
    if (r.push(i), i.type === "error")
      break;
  }
  return r;
};
function zd() {
  return new TransformStream({
    transform(e, n) {
      jd(e, (t) => {
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
let Ci;
function Gr(e) {
  return e.reduce((n, t) => n + t.length, 0);
}
function Kr(e, n) {
  if (e[0].length === n)
    return e.shift();
  const t = new Uint8Array(n);
  let r = 0;
  for (let o = 0; o < n; o++)
    t[o] = e[0][r++], r === e[0].length && (e.shift(), r = 0);
  return e.length && r < e[0].length && (e[0] = e[0].slice(r)), t;
}
function Vd(e, n) {
  Ci || (Ci = new TextDecoder());
  const t = [];
  let r = 0, o = -1, i = !1;
  return new TransformStream({
    transform(s, a) {
      for (t.push(s); ; ) {
        if (r === 0) {
          if (Gr(t) < 1)
            break;
          const c = Kr(t, 1);
          i = (c[0] & 128) === 128, o = c[0] & 127, o < 126 ? r = 3 : o === 126 ? r = 1 : r = 2;
        } else if (r === 1) {
          if (Gr(t) < 2)
            break;
          const c = Kr(t, 2);
          o = new DataView(c.buffer, c.byteOffset, c.length).getUint16(0), r = 3;
        } else if (r === 2) {
          if (Gr(t) < 8)
            break;
          const c = Kr(t, 8), l = new DataView(c.buffer, c.byteOffset, c.length), u = l.getUint32(0);
          if (u > Math.pow(2, 21) - 1) {
            a.enqueue(es);
            break;
          }
          o = u * Math.pow(2, 32) + l.getUint32(4), r = 3;
        } else {
          if (Gr(t) < o)
            break;
          const c = Kr(t, o);
          a.enqueue(da(i ? c : Ci.decode(c), n)), r = 0;
        }
        if (o === 0 || o > e) {
          a.enqueue(es);
          break;
        }
      }
    }
  });
}
const $l = 4;
function Me(e) {
  if (e) return Hd(e);
}
function Hd(e) {
  for (var n in Me.prototype)
    e[n] = Me.prototype[n];
  return e;
}
Me.prototype.on = Me.prototype.addEventListener = function(e, n) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(n), this;
};
Me.prototype.once = function(e, n) {
  function t() {
    this.off(e, t), n.apply(this, arguments);
  }
  return t.fn = n, this.on(e, t), this;
};
Me.prototype.off = Me.prototype.removeListener = Me.prototype.removeAllListeners = Me.prototype.removeEventListener = function(e, n) {
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
Me.prototype.emit = function(e) {
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
Me.prototype.emitReserved = Me.prototype.emit;
Me.prototype.listeners = function(e) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [];
};
Me.prototype.hasListeners = function(e) {
  return !!this.listeners(e).length;
};
const ei = typeof Promise == "function" && typeof Promise.resolve == "function" ? (n) => Promise.resolve().then(n) : (n, t) => t(n, 0), ft = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), Ud = "arraybuffer";
function Gl(e, ...n) {
  return n.reduce((t, r) => (e.hasOwnProperty(r) && (t[r] = e[r]), t), {});
}
const qd = ft.setTimeout, Wd = ft.clearTimeout;
function ti(e, n) {
  n.useNativeTimers ? (e.setTimeoutFn = qd.bind(ft), e.clearTimeoutFn = Wd.bind(ft)) : (e.setTimeoutFn = ft.setTimeout.bind(ft), e.clearTimeoutFn = ft.clearTimeout.bind(ft));
}
const Xd = 1.33;
function Yd(e) {
  return typeof e == "string" ? $d(e) : Math.ceil((e.byteLength || e.size) * Xd);
}
function $d(e) {
  let n = 0, t = 0;
  for (let r = 0, o = e.length; r < o; r++)
    n = e.charCodeAt(r), n < 128 ? t += 1 : n < 2048 ? t += 2 : n < 55296 || n >= 57344 ? t += 3 : (r++, t += 4);
  return t;
}
function Kl() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function Gd(e) {
  let n = "";
  for (let t in e)
    e.hasOwnProperty(t) && (n.length && (n += "&"), n += encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
  return n;
}
function Kd(e) {
  let n = {}, t = e.split("&");
  for (let r = 0, o = t.length; r < o; r++) {
    let i = t[r].split("=");
    n[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
  }
  return n;
}
class Zd extends Error {
  constructor(n, t, r) {
    super(n), this.description = t, this.context = r, this.type = "TransportError";
  }
}
class ha extends Me {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(n) {
    super(), this.writable = !1, ti(this, n), this.opts = n, this.query = n.query, this.socket = n.socket, this.supportsBinary = !n.forceBase64;
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
    return super.emitReserved("error", new Zd(n, t, r)), this;
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
    const t = da(n, this.socket.binaryType);
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
    const t = Gd(n);
    return t.length ? "?" + t : "";
  }
}
class Jd extends ha {
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
    Fd(n, this.socket.binaryType).forEach(t), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
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
    this.writable = !1, Bd(n, (t) => {
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
    return this.opts.timestampRequests !== !1 && (t[this.opts.timestampParam] = Kl()), !this.supportsBinary && !t.sid && (t.b64 = 1), this.createUri(n, t);
  }
}
let Zl = !1;
try {
  Zl = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const Qd = Zl;
function eh() {
}
class th extends Jd {
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
let Bn = class xo extends Me {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(n, t, r) {
    super(), this.createRequest = n, ti(this, r), this._opts = r, this._method = r.method || "GET", this._uri = t, this._data = r.data !== void 0 ? r.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var n;
    const t = Gl(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
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
    typeof document < "u" && (this._index = xo.requestsCount++, xo.requests[this._index] = this);
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
      if (this._xhr.onreadystatechange = eh, n)
        try {
          this._xhr.abort();
        } catch {
        }
      typeof document < "u" && delete xo.requests[this._index], this._xhr = null;
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
    attachEvent("onunload", ac);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in ft ? "pagehide" : "unload";
    addEventListener(e, ac, !1);
  }
}
function ac() {
  for (let e in Bn.requests)
    Bn.requests.hasOwnProperty(e) && Bn.requests[e].abort();
}
const nh = function() {
  const e = Jl({
    xdomain: !1
  });
  return e && e.responseType !== null;
}();
class rh extends th {
  constructor(n) {
    super(n);
    const t = n && n.forceBase64;
    this.supportsBinary = nh && !t;
  }
  request(n = {}) {
    return Object.assign(n, { xd: this.xd }, this.opts), new Bn(Jl, this.uri(), n);
  }
}
function Jl(e) {
  const n = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!n || Qd))
      return new XMLHttpRequest();
  } catch {
  }
  if (!n)
    try {
      return new ft[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const Ql = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class oh extends ha {
  get name() {
    return "websocket";
  }
  doOpen() {
    const n = this.uri(), t = this.opts.protocols, r = Ql ? {} : Gl(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
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
      fa(r, this.supportsBinary, (i) => {
        try {
          this.doWrite(r, i);
        } catch {
        }
        o && ei(() => {
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
    return this.opts.timestampRequests && (t[this.opts.timestampParam] = Kl()), this.supportsBinary || (t.b64 = 1), this.createUri(n, t);
  }
}
const Ai = ft.WebSocket || ft.MozWebSocket;
class ih extends oh {
  createSocket(n, t, r) {
    return Ql ? new Ai(n, t, r) : t ? new Ai(n, t) : new Ai(n);
  }
  doWrite(n, t) {
    this.ws.send(t);
  }
}
class sh extends ha {
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
        const t = Vd(Number.MAX_SAFE_INTEGER, this.socket.binaryType), r = n.readable.pipeThrough(t).getReader(), o = zd();
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
        o && ei(() => {
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
const ah = {
  websocket: ih,
  webtransport: sh,
  polling: rh
}, ch = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, lh = [
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
  let o = ch.exec(e || ""), i = {}, s = 14;
  for (; s--; )
    i[lh[s]] = o[s] || "";
  return t != -1 && r != -1 && (i.source = n, i.host = i.host.substring(1, i.host.length - 1).replace(/;/g, ":"), i.authority = i.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), i.ipv6uri = !0), i.pathNames = uh(i, i.path), i.queryKey = fh(i, i.query), i;
}
function uh(e, n) {
  const t = /\/{2,9}/g, r = n.replace(t, "/").split("/");
  return (n.slice(0, 1) == "/" || n.length === 0) && r.splice(0, 1), n.slice(-1) == "/" && r.splice(r.length - 1, 1), r;
}
function fh(e, n) {
  const t = {};
  return n.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(r, o, i) {
    o && (t[o] = i);
  }), t;
}
const ns = typeof addEventListener == "function" && typeof removeEventListener == "function", po = [];
ns && addEventListener("offline", () => {
  po.forEach((e) => e());
}, !1);
class tn extends Me {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(n, t) {
    if (super(), this.binaryType = Ud, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, n && typeof n == "object" && (t = n, n = null), n) {
      const r = ts(n);
      t.hostname = r.host, t.secure = r.protocol === "https" || r.protocol === "wss", t.port = r.port, r.query && (t.query = r.query);
    } else t.host && (t.hostname = ts(t.host).host);
    ti(this, t), this.secure = t.secure != null ? t.secure : typeof location < "u" && location.protocol === "https:", t.hostname && !t.port && (t.port = this.secure ? "443" : "80"), this.hostname = t.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = t.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, t.transports.forEach((r) => {
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
    }, t), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = Kd(this.opts.query)), ns && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, po.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
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
    t.EIO = $l, t.transport = n, this.id && (t.sid = this.id);
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
    const n = this.opts.rememberUpgrade && tn.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
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
    this.readyState = "open", tn.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
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
      if (o && (t += Yd(o)), r > 0 && t > this._maxPayload)
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
    return n && (this._pingTimeoutTime = 0, ei(() => {
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
    if (tn.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
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
        const r = po.indexOf(this._offlineEventListener);
        r !== -1 && po.splice(r, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", n, t), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
tn.protocol = $l;
class dh extends tn {
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
    tn.priorWebsocketSuccess = !1;
    const o = () => {
      r || (t.send([{ type: "ping", data: "probe" }]), t.once("packet", (f) => {
        if (!r)
          if (f.type === "pong" && f.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", t), !t)
              return;
            tn.priorWebsocketSuccess = t.name === "websocket", this.transport.pause(() => {
              r || this.readyState !== "closed" && (u(), this.setTransport(t), t.send([{ type: "upgrade" }]), this.emitReserved("upgrade", t), t = null, this.upgrading = !1, this.flush());
            });
          } else {
            const d = new Error("probe error");
            d.transport = t.name, this.emitReserved("upgradeError", d);
          }
      }));
    };
    function i() {
      r || (r = !0, u(), t.close(), t = null);
    }
    const s = (f) => {
      const d = new Error("probe error: " + f);
      d.transport = t.name, i(), this.emitReserved("upgradeError", d);
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
let hh = class extends dh {
  constructor(n, t = {}) {
    const r = typeof n == "object" ? n : t;
    (!r.transports || r.transports && typeof r.transports[0] == "string") && (r.transports = (r.transports || ["polling", "websocket", "webtransport"]).map((o) => ah[o]).filter((o) => !!o)), super(n, r);
  }
};
function xh(e, n = "", t) {
  let r = e;
  t = t || typeof location < "u" && location, e == null && (e = t.protocol + "//" + t.host), typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = t.protocol + e : e = t.host + e), /^(https?|wss?):\/\//.test(e) || (typeof t < "u" ? e = t.protocol + "//" + e : e = "https://" + e), r = ts(e)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
  const i = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return r.id = r.protocol + "://" + i + ":" + r.port + n, r.href = r.protocol + "://" + i + (t && t.port === r.port ? "" : ":" + r.port), r;
}
const ph = typeof ArrayBuffer == "function", mh = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer, eu = Object.prototype.toString, gh = typeof Blob == "function" || typeof Blob < "u" && eu.call(Blob) === "[object BlobConstructor]", vh = typeof File == "function" || typeof File < "u" && eu.call(File) === "[object FileConstructor]";
function xa(e) {
  return ph && (e instanceof ArrayBuffer || mh(e)) || gh && e instanceof Blob || vh && e instanceof File;
}
function mo(e, n) {
  if (!e || typeof e != "object")
    return !1;
  if (Array.isArray(e)) {
    for (let t = 0, r = e.length; t < r; t++)
      if (mo(e[t]))
        return !0;
    return !1;
  }
  if (xa(e))
    return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return mo(e.toJSON(), !0);
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && mo(e[t]))
      return !0;
  return !1;
}
function yh(e) {
  const n = [], t = e.data, r = e;
  return r.data = rs(t, n), r.attachments = n.length, { packet: r, buffers: n };
}
function rs(e, n) {
  if (!e)
    return e;
  if (xa(e)) {
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
function bh(e, n) {
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
const Sh = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], wh = 5;
var ue;
(function(e) {
  e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK";
})(ue || (ue = {}));
class Eh {
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
    return (n.type === ue.EVENT || n.type === ue.ACK) && mo(n) ? this.encodeAsBinary({
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
    const t = yh(n), r = this.encodeAsString(t.packet), o = t.buffers;
    return o.unshift(r), o;
  }
}
function cc(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
class pa extends Me {
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
      r || t.type === ue.BINARY_ACK ? (t.type = r ? ue.EVENT : ue.ACK, this.reconstructor = new _h(t), t.attachments === 0 && super.emitReserved("decoded", t)) : super.emitReserved("decoded", t);
    } else if (xa(n) || n.base64)
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
      if (pa.isPayloadValid(r.type, i))
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
        return cc(t);
      case ue.DISCONNECT:
        return t === void 0;
      case ue.CONNECT_ERROR:
        return typeof t == "string" || cc(t);
      case ue.EVENT:
      case ue.BINARY_EVENT:
        return Array.isArray(t) && (typeof t[0] == "number" || typeof t[0] == "string" && Sh.indexOf(t[0]) === -1);
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
class _h {
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
      const t = bh(this.reconPack, this.buffers);
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
  Decoder: pa,
  Encoder: Eh,
  get PacketType() {
    return ue;
  },
  protocol: wh
}, Symbol.toStringTag, { value: "Module" }));
function gt(e, n, t) {
  return e.on(n, t), function() {
    e.off(n, t);
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
class tu extends Me {
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
      gt(n, "open", this.onopen.bind(this)),
      gt(n, "packet", this.onpacket.bind(this)),
      gt(n, "error", this.onerror.bind(this)),
      gt(n, "close", this.onclose.bind(this))
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
    if (Ah.hasOwnProperty(n))
      throw new Error('"' + n.toString() + '" is a reserved event name');
    if (t.unshift(n), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(t), this;
    const s = {
      type: ue.EVENT,
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
class is extends Me {
  constructor(n, t) {
    var r;
    super(), this.nsps = {}, this.subs = [], n && typeof n == "object" && (t = n, n = void 0), t = t || {}, t.path = t.path || "/socket.io", this.opts = t, ti(this, t), this.reconnection(t.reconnection !== !1), this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0), this.reconnectionDelay(t.reconnectionDelay || 1e3), this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3), this.randomizationFactor((r = t.randomizationFactor) !== null && r !== void 0 ? r : 0.5), this.backoff = new Qn({
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
    this.engine = new hh(this.uri, this.opts);
    const t = this.engine, r = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const o = gt(t, "open", function() {
      r.onopen(), n && n();
    }), i = (a) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", a), n ? n(a) : this.maybeReconnectOnOpen();
    }, s = gt(t, "error", i);
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
      gt(n, "ping", this.onping.bind(this)),
      gt(n, "data", this.ondata.bind(this)),
      gt(n, "error", this.onerror.bind(this)),
      gt(n, "close", this.onclose.bind(this)),
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
    ei(() => {
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
    return r ? this._autoConnect && !r.active && r.connect() : (r = new tu(this, n, t), this.nsps[n] = r), r;
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
function go(e, n) {
  typeof e == "object" && (n = e, e = void 0), n = n || {};
  const t = xh(e, n.path || "/socket.io"), r = t.source, o = t.id, i = t.path, s = fr[o] && i in fr[o].nsps, a = n.forceNew || n["force new connection"] || n.multiplex === !1 || s;
  let c;
  return a ? c = new is(r, n) : (fr[o] || (fr[o] = new is(r, n)), c = fr[o]), t.query && !n.query && (n.query = t.queryKey), c.socket(t.path, n);
}
Object.assign(go, {
  Manager: is,
  Socket: tu,
  io: go,
  connect: go
});
var Ti = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var lc;
function Th() {
  return lc || (lc = 1, function(e) {
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
  }(Ti)), Ti.exports;
}
var Oh = Th();
const Ge = /* @__PURE__ */ m0(Oh);
function Mt() {
  return Mt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, Mt.apply(null, arguments);
}
function ye(e) {
  "@babel/helpers - typeof";
  return ye = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, ye(e);
}
var Rh = Symbol.for("react.element"), kh = Symbol.for("react.transitional.element"), Ph = Symbol.for("react.fragment");
function Ih(e) {
  return (
    // Base object type
    e && ye(e) === "object" && // React Element type
    (e.$$typeof === Rh || e.$$typeof === kh) && // React Fragment type
    e.type === Ph
  );
}
var ss = {}, ma = [], Nh = function(n) {
  ma.push(n);
};
function ga(e, n) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var t = ma.reduce(function(r, o) {
      return o(r ?? "", "warning");
    }, n);
    t && console.error("Warning: ".concat(t));
  }
}
function jh(e, n) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var t = ma.reduce(function(r, o) {
      return o(r ?? "", "note");
    }, n);
    t && console.warn("Note: ".concat(t));
  }
}
function nu() {
  ss = {};
}
function ru(e, n, t) {
  !n && !ss[t] && (e(!1, t), ss[t] = !0);
}
function cn(e, n) {
  ru(ga, e, n);
}
function Lh(e, n) {
  ru(jh, e, n);
}
cn.preMessage = Nh;
cn.resetWarned = nu;
cn.noteOnce = Lh;
function Mh(e, n) {
  if (ye(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(e, n);
    if (ye(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function ou(e) {
  var n = Mh(e, "string");
  return ye(n) == "symbol" ? n : n + "";
}
function H(e, n, t) {
  return (n = ou(n)) in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = t, e;
}
function uc(e, n) {
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
    n % 2 ? uc(Object(t), !0).forEach(function(r) {
      H(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : uc(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function fc(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function Dh(e) {
  return e && ye(e) === "object" && fc(e.nativeElement) ? e.nativeElement : fc(e) ? e : null;
}
function Bh(e) {
  var n = Dh(e);
  if (n)
    return n;
  if (e instanceof Ie.Component) {
    var t;
    return (t = Ma.findDOMNode) === null || t === void 0 ? void 0 : t.call(Ma, e);
  }
  return null;
}
var Zr = { exports: {} }, me = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dc;
function Fh() {
  if (dc) return me;
  dc = 1;
  var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), m;
  m = Symbol.for("react.module.reference");
  function p(h) {
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
                case d:
                case f:
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
  return me.ContextConsumer = s, me.ContextProvider = i, me.Element = e, me.ForwardRef = c, me.Fragment = t, me.Lazy = d, me.Memo = f, me.Portal = n, me.Profiler = o, me.StrictMode = r, me.Suspense = l, me.SuspenseList = u, me.isAsyncMode = function() {
    return !1;
  }, me.isConcurrentMode = function() {
    return !1;
  }, me.isContextConsumer = function(h) {
    return p(h) === s;
  }, me.isContextProvider = function(h) {
    return p(h) === i;
  }, me.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === e;
  }, me.isForwardRef = function(h) {
    return p(h) === c;
  }, me.isFragment = function(h) {
    return p(h) === t;
  }, me.isLazy = function(h) {
    return p(h) === d;
  }, me.isMemo = function(h) {
    return p(h) === f;
  }, me.isPortal = function(h) {
    return p(h) === n;
  }, me.isProfiler = function(h) {
    return p(h) === o;
  }, me.isStrictMode = function(h) {
    return p(h) === r;
  }, me.isSuspense = function(h) {
    return p(h) === l;
  }, me.isSuspenseList = function(h) {
    return p(h) === u;
  }, me.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === t || h === o || h === r || h === l || h === u || h === g || typeof h == "object" && h !== null && (h.$$typeof === d || h.$$typeof === f || h.$$typeof === i || h.$$typeof === s || h.$$typeof === c || h.$$typeof === m || h.getModuleId !== void 0);
  }, me.typeOf = p, me;
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
var hc;
function zh() {
  return hc || (hc = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), m = !1, p = !1, h = !1, S = !1, b = !1, y;
    y = Symbol.for("react.module.reference");
    function C(j) {
      return !!(typeof j == "string" || typeof j == "function" || j === t || j === o || b || j === r || j === l || j === u || S || j === g || m || p || h || typeof j == "object" && j !== null && (j.$$typeof === d || j.$$typeof === f || j.$$typeof === i || j.$$typeof === s || j.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      j.$$typeof === y || j.getModuleId !== void 0));
    }
    function v(j) {
      if (typeof j == "object" && j !== null) {
        var Re = j.$$typeof;
        switch (Re) {
          case e:
            var we = j.type;
            switch (we) {
              case t:
              case o:
              case r:
              case l:
              case u:
                return we;
              default:
                var at = we && we.$$typeof;
                switch (at) {
                  case a:
                  case s:
                  case c:
                  case d:
                  case f:
                  case i:
                    return at;
                  default:
                    return Re;
                }
            }
          case n:
            return Re;
        }
      }
    }
    var A = s, E = i, k = e, L = c, W = t, ee = d, $ = f, N = n, z = o, q = r, X = l, J = u, G = !1, Z = !1;
    function re(j) {
      return G || (G = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function oe(j) {
      return Z || (Z = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function K(j) {
      return v(j) === s;
    }
    function te(j) {
      return v(j) === i;
    }
    function fe(j) {
      return typeof j == "object" && j !== null && j.$$typeof === e;
    }
    function le(j) {
      return v(j) === c;
    }
    function de(j) {
      return v(j) === t;
    }
    function xe(j) {
      return v(j) === d;
    }
    function P(j) {
      return v(j) === f;
    }
    function U(j) {
      return v(j) === n;
    }
    function M(j) {
      return v(j) === o;
    }
    function D(j) {
      return v(j) === r;
    }
    function O(j) {
      return v(j) === l;
    }
    function ne(j) {
      return v(j) === u;
    }
    ge.ContextConsumer = A, ge.ContextProvider = E, ge.Element = k, ge.ForwardRef = L, ge.Fragment = W, ge.Lazy = ee, ge.Memo = $, ge.Portal = N, ge.Profiler = z, ge.StrictMode = q, ge.Suspense = X, ge.SuspenseList = J, ge.isAsyncMode = re, ge.isConcurrentMode = oe, ge.isContextConsumer = K, ge.isContextProvider = te, ge.isElement = fe, ge.isForwardRef = le, ge.isFragment = de, ge.isLazy = xe, ge.isMemo = P, ge.isPortal = U, ge.isProfiler = M, ge.isStrictMode = D, ge.isSuspense = O, ge.isSuspenseList = ne, ge.isValidElementType = C, ge.typeOf = v;
  }()), ge;
}
var xc;
function Vh() {
  return xc || (xc = 1, process.env.NODE_ENV === "production" ? Zr.exports = Fh() : Zr.exports = zh()), Zr.exports;
}
var Oi = Vh();
function iu(e, n, t) {
  var r = w.useRef({});
  return (!("value" in r.current) || t(r.current.condition, n)) && (r.current.value = e(), r.current.condition = n), r.current.value;
}
var Hh = Number(d0.split(".")[0]), su = function(n, t) {
  typeof n == "function" ? n(t) : ye(n) === "object" && n && "current" in n && (n.current = t);
}, Uh = function() {
  for (var n = arguments.length, t = new Array(n), r = 0; r < n; r++)
    t[r] = arguments[r];
  var o = t.filter(Boolean);
  return o.length <= 1 ? o[0] : function(i) {
    t.forEach(function(s) {
      su(s, i);
    });
  };
}, qh = function(n) {
  var t, r;
  if (!n)
    return !1;
  if (au(n) && Hh >= 19)
    return !0;
  var o = Oi.isMemo(n) ? n.type.type : n.type;
  return !(typeof o == "function" && !((t = o.prototype) !== null && t !== void 0 && t.render) && o.$$typeof !== Oi.ForwardRef || typeof n == "function" && !((r = n.prototype) !== null && r !== void 0 && r.render) && n.$$typeof !== Oi.ForwardRef);
};
function au(e) {
  return /* @__PURE__ */ f0(e) && !Ih(e);
}
var Wh = function(n) {
  if (n && au(n)) {
    var t = n;
    return t.props.propertyIsEnumerable("ref") ? t.props.ref : t.ref;
  }
  return null;
};
function Et(e, n) {
  if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function pc(e, n) {
  for (var t = 0; t < n.length; t++) {
    var r = n[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, ou(r.key), r);
  }
}
function _t(e, n, t) {
  return n && pc(e.prototype, n), t && pc(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function as(e, n) {
  return as = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, r) {
    return t.__proto__ = r, t;
  }, as(e, n);
}
function Br(e, n) {
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
function Yn(e) {
  return Yn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Yn(e);
}
function va() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (va = function() {
    return !!e;
  })();
}
function wn(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function cu(e, n) {
  if (n && (ye(n) == "object" || typeof n == "function")) return n;
  if (n !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return wn(e);
}
function ni(e) {
  var n = va();
  return function() {
    var t, r = Yn(e);
    if (n) {
      var o = Yn(this).constructor;
      t = Reflect.construct(r, arguments, o);
    } else t = r.apply(this, arguments);
    return cu(this, t);
  };
}
function cs(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, r = Array(n); t < n; t++) r[t] = e[t];
  return r;
}
function Xh(e) {
  if (Array.isArray(e)) return cs(e);
}
function lu(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function ya(e, n) {
  if (e) {
    if (typeof e == "string") return cs(e, n);
    var t = {}.toString.call(e).slice(8, -1);
    return t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set" ? Array.from(e) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? cs(e, n) : void 0;
  }
}
function Yh() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Wt(e) {
  return Xh(e) || lu(e) || ya(e) || Yh();
}
var uu = function(n) {
  return +setTimeout(n, 16);
}, fu = function(n) {
  return clearTimeout(n);
};
typeof window < "u" && "requestAnimationFrame" in window && (uu = function(n) {
  return window.requestAnimationFrame(n);
}, fu = function(n) {
  return window.cancelAnimationFrame(n);
});
var mc = 0, ri = /* @__PURE__ */ new Map();
function du(e) {
  ri.delete(e);
}
var Io = function(n) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  mc += 1;
  var r = mc;
  function o(i) {
    if (i === 0)
      du(r), n();
    else {
      var s = uu(function() {
        o(i - 1);
      });
      ri.set(r, s);
    }
  }
  return o(t), r;
};
Io.cancel = function(e) {
  var n = ri.get(e);
  return du(e), fu(n);
};
process.env.NODE_ENV !== "production" && (Io.ids = function() {
  return ri;
});
function hu(e) {
  if (Array.isArray(e)) return e;
}
function $h(e, n) {
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
function xu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ae(e, n) {
  return hu(e) || $h(e, n) || ya(e, n) || xu();
}
function Pr(e) {
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
function $t() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Gh(e, n) {
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
var gc = "data-rc-order", vc = "data-rc-priority", Kh = "rc-util-key", ls = /* @__PURE__ */ new Map();
function pu() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.mark;
  return n ? n.startsWith("data-") ? n : "data-".concat(n) : Kh;
}
function oi(e) {
  if (e.attachTo)
    return e.attachTo;
  var n = document.querySelector("head");
  return n || document.body;
}
function Zh(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function ba(e) {
  return Array.from((ls.get(e) || e).children).filter(function(n) {
    return n.tagName === "STYLE";
  });
}
function mu(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!$t())
    return null;
  var t = n.csp, r = n.prepend, o = n.priority, i = o === void 0 ? 0 : o, s = Zh(r), a = s === "prependQueue", c = document.createElement("style");
  c.setAttribute(gc, s), a && i && c.setAttribute(vc, "".concat(i)), t != null && t.nonce && (c.nonce = t == null ? void 0 : t.nonce), c.innerHTML = e;
  var l = oi(n), u = l.firstChild;
  if (r) {
    if (a) {
      var f = (n.styles || ba(l)).filter(function(d) {
        if (!["prepend", "prependQueue"].includes(d.getAttribute(gc)))
          return !1;
        var g = Number(d.getAttribute(vc) || 0);
        return i >= g;
      });
      if (f.length)
        return l.insertBefore(c, f[f.length - 1].nextSibling), c;
    }
    l.insertBefore(c, u);
  } else
    l.appendChild(c);
  return c;
}
function gu(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = oi(n);
  return (n.styles || ba(t)).find(function(r) {
    return r.getAttribute(pu(n)) === e;
  });
}
function vu(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = gu(e, n);
  if (t) {
    var r = oi(n);
    r.removeChild(t);
  }
}
function Jh(e, n) {
  var t = ls.get(e);
  if (!t || !Gh(document, t)) {
    var r = mu("", n), o = r.parentNode;
    ls.set(e, o), e.removeChild(r);
  }
}
function En(e, n) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = oi(t), o = ba(r), i = F(F({}, t), {}, {
    styles: o
  });
  Jh(r, i);
  var s = gu(n, i);
  if (s) {
    var a, c;
    if ((a = i.csp) !== null && a !== void 0 && a.nonce && s.nonce !== ((c = i.csp) === null || c === void 0 ? void 0 : c.nonce)) {
      var l;
      s.nonce = (l = i.csp) === null || l === void 0 ? void 0 : l.nonce;
    }
    return s.innerHTML !== e && (s.innerHTML = e), s;
  }
  var u = mu(e, i);
  return u.setAttribute(pu(i), n), u;
}
function Qh(e, n) {
  if (e == null) return {};
  var t = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (n.indexOf(r) !== -1) continue;
    t[r] = e[r];
  }
  return t;
}
function Ir(e, n) {
  if (e == null) return {};
  var t, r, o = Qh(e, n);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++) t = i[r], n.indexOf(t) === -1 && {}.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
  }
  return o;
}
function ex(e, n) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = /* @__PURE__ */ new Set();
  function o(i, s) {
    var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, c = r.has(i);
    if (cn(!c, "Warning: There may be circular references"), c)
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
      var f = Object.keys(i);
      return f.length !== Object.keys(s).length ? !1 : f.every(function(d) {
        return o(i[d], s[d], l);
      });
    }
    return !1;
  }
  return o(e, n);
}
var tx = "%";
function us(e) {
  return e.join(tx);
}
var nx = /* @__PURE__ */ function() {
  function e(n) {
    Et(this, e), H(this, "instanceId", void 0), H(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = n;
  }
  return _t(e, [{
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
}(), $n = "data-token-hash", bt = "data-css-hash", rx = "data-cache-path", Qt = "__cssinjs_instance__";
function ox() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var n = document.body.querySelectorAll("style[".concat(bt, "]")) || [], t = document.head.firstChild;
    Array.from(n).forEach(function(o) {
      o[Qt] = o[Qt] || e, o[Qt] === e && document.head.insertBefore(o, t);
    });
    var r = {};
    Array.from(document.querySelectorAll("style[".concat(bt, "]"))).forEach(function(o) {
      var i = o.getAttribute(bt);
      if (r[i]) {
        if (o[Qt] === e) {
          var s;
          (s = o.parentNode) === null || s === void 0 || s.removeChild(o);
        }
      } else
        r[i] = !0;
    });
  }
  return new nx(e);
}
var Fr = /* @__PURE__ */ w.createContext({
  hashPriority: "low",
  cache: ox(),
  defaultCache: !0
});
function ix(e, n) {
  if (e.length !== n.length)
    return !1;
  for (var t = 0; t < e.length; t++)
    if (e[t] !== n[t])
      return !1;
  return !0;
}
var Sa = /* @__PURE__ */ function() {
  function e() {
    Et(this, e), H(this, "cache", void 0), H(this, "keys", void 0), H(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
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
            var f = ae(l, 2), d = f[1];
            return o.internalGet(u)[1] < d ? [u, o.internalGet(u)[1]] : l;
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
          return !ix(r, t);
        }), this.deleteByPath(this.cache, t);
    }
  }]), e;
}();
H(Sa, "MAX_CACHE_SIZE", 20);
H(Sa, "MAX_CACHE_OFFSET", 5);
var yc = 0, yu = /* @__PURE__ */ function() {
  function e(n) {
    Et(this, e), H(this, "derivatives", void 0), H(this, "id", void 0), this.derivatives = Array.isArray(n) ? n : [n], this.id = yc, n.length === 0 && ga(n.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), yc += 1;
  }
  return _t(e, [{
    key: "getDerivativeToken",
    value: function(t) {
      return this.derivatives.reduce(function(r, o) {
        return o(t, r);
      }, void 0);
    }
  }]), e;
}(), Ri = new Sa();
function fs(e) {
  var n = Array.isArray(e) ? e : [e];
  return Ri.has(n) || Ri.set(n, new yu(n)), Ri.get(n);
}
var sx = /* @__PURE__ */ new WeakMap(), ki = {};
function ax(e, n) {
  for (var t = sx, r = 0; r < n.length; r += 1) {
    var o = n[r];
    t.has(o) || t.set(o, /* @__PURE__ */ new WeakMap()), t = t.get(o);
  }
  return t.has(ki) || t.set(ki, e()), t.get(ki);
}
var bc = /* @__PURE__ */ new WeakMap();
function Or(e) {
  var n = bc.get(e) || "";
  return n || (Object.keys(e).forEach(function(t) {
    var r = e[t];
    n += t, r instanceof yu ? n += r.id : r && ye(r) === "object" ? n += Or(r) : n += r;
  }), n = Pr(n), bc.set(e, n)), n;
}
function Sc(e, n) {
  return Pr("".concat(n, "_").concat(Or(e)));
}
var ds = $t();
function No(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function jo(e, n, t) {
  var r, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (i)
    return e;
  var s = F(F({}, o), {}, (r = {}, H(r, $n, n), H(r, bt, t), r)), a = Object.keys(s).map(function(c) {
    var l = s[c];
    return l ? "".concat(c, '="').concat(l, '"') : null;
  }).filter(function(c) {
    return c;
  }).join(" ");
  return "<style ".concat(a, ">").concat(e, "</style>");
}
var vo = function(n) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(t ? "".concat(t, "-") : "").concat(n).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, cx = function(n, t, r) {
  return Object.keys(n).length ? ".".concat(t).concat(r != null && r.scope ? ".".concat(r.scope) : "", "{").concat(Object.entries(n).map(function(o) {
    var i = ae(o, 2), s = i[0], a = i[1];
    return "".concat(s, ":").concat(a, ";");
  }).join(""), "}") : "";
}, bu = function(n, t, r) {
  var o = {}, i = {};
  return Object.entries(n).forEach(function(s) {
    var a, c, l = ae(s, 2), u = l[0], f = l[1];
    if (r != null && (a = r.preserve) !== null && a !== void 0 && a[u])
      i[u] = f;
    else if ((typeof f == "string" || typeof f == "number") && !(r != null && (c = r.ignore) !== null && c !== void 0 && c[u])) {
      var d, g = vo(u, r == null ? void 0 : r.prefix);
      o[g] = typeof f == "number" && !(r != null && (d = r.unitless) !== null && d !== void 0 && d[u]) ? "".concat(f, "px") : String(f), i[u] = "var(".concat(g, ")");
    }
  }), [i, cx(o, t, {
    scope: r == null ? void 0 : r.scope
  })];
}, wc = process.env.NODE_ENV !== "test" && $t() ? w.useLayoutEffect : w.useEffect, Su = function(n, t) {
  var r = w.useRef(!0);
  wc(function() {
    return n(r.current);
  }, t), wc(function() {
    return r.current = !1, function() {
      r.current = !0;
    };
  }, []);
}, lx = F({}, w), Ec = lx.useInsertionEffect, ux = function(n, t, r) {
  w.useMemo(n, r), Su(function() {
    return t(!0);
  }, r);
}, fx = Ec ? function(e, n, t) {
  return Ec(function() {
    return e(), n();
  }, t);
} : ux, dx = F({}, w), hx = dx.useInsertionEffect, xx = function(n) {
  var t = [], r = !1;
  function o(i) {
    if (r) {
      process.env.NODE_ENV !== "production" && ga(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
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
}, px = function() {
  return function(n) {
    n();
  };
}, mx = typeof hx < "u" ? xx : px;
function gx() {
  return !1;
}
var hs = !1;
function vx() {
  return hs;
}
const yx = process.env.NODE_ENV === "production" ? gx : vx;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var Jr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : null;
  if (Jr && typeof Jr.webpackHotUpdate == "function") {
    var bx = Jr.webpackHotUpdate;
    Jr.webpackHotUpdate = function() {
      return hs = !0, setTimeout(function() {
        hs = !1;
      }, 0), bx.apply(void 0, arguments);
    };
  }
}
function wa(e, n, t, r, o) {
  var i = w.useContext(Fr), s = i.cache, a = [e].concat(Wt(n)), c = us(a), l = mx([c]), u = yx(), f = function(p) {
    s.opUpdate(c, function(h) {
      var S = h || [void 0, void 0], b = ae(S, 2), y = b[0], C = y === void 0 ? 0 : y, v = b[1], A = v;
      process.env.NODE_ENV !== "production" && v && u && (r == null || r(A, u), A = null);
      var E = A || t(), k = [C, E];
      return p ? p(k) : k;
    });
  };
  w.useMemo(
    function() {
      f();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [c]
    /* eslint-enable */
  );
  var d = s.opGet(c);
  process.env.NODE_ENV !== "production" && !d && (f(), d = s.opGet(c));
  var g = d[1];
  return fx(function() {
    o == null || o(g);
  }, function(m) {
    return f(function(p) {
      var h = ae(p, 2), S = h[0], b = h[1];
      return m && S === 0 && (o == null || o(g)), [S + 1, b];
    }), function() {
      s.opUpdate(c, function(p) {
        var h = p || [], S = ae(h, 2), b = S[0], y = b === void 0 ? 0 : b, C = S[1], v = y - 1;
        return v === 0 ? (l(function() {
          (m || !s.opGet(c)) && (r == null || r(C, !1));
        }), null) : [y - 1, C];
      });
    };
  }, [c]), g;
}
var Sx = {}, wx = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", gn = /* @__PURE__ */ new Map();
function Ex(e) {
  gn.set(e, (gn.get(e) || 0) + 1);
}
function _x(e, n) {
  if (typeof document < "u") {
    var t = document.querySelectorAll("style[".concat($n, '="').concat(e, '"]'));
    t.forEach(function(r) {
      if (r[Qt] === n) {
        var o;
        (o = r.parentNode) === null || o === void 0 || o.removeChild(r);
      }
    });
  }
}
var Cx = 0;
function Ax(e, n) {
  gn.set(e, (gn.get(e) || 0) - 1);
  var t = Array.from(gn.keys()), r = t.filter(function(o) {
    var i = gn.get(o) || 0;
    return i <= 0;
  });
  t.length - r.length > Cx && r.forEach(function(o) {
    _x(o, n), gn.delete(o);
  });
}
var Tx = function(n, t, r, o) {
  var i = r.getDerivativeToken(n), s = F(F({}, i), t);
  return o && (s = o(s)), s;
}, wu = "token";
function Ox(e, n) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = nn(Fr), o = r.cache.instanceId, i = r.container, s = t.salt, a = s === void 0 ? "" : s, c = t.override, l = c === void 0 ? Sx : c, u = t.formatToken, f = t.getComputedToken, d = t.cssVar, g = ax(function() {
    return Object.assign.apply(Object, [{}].concat(Wt(n)));
  }, n), m = Or(g), p = Or(l), h = d ? Or(d) : "", S = wa(wu, [a, e.id, m, p, h], function() {
    var b, y = f ? f(g, l, e) : Tx(g, l, e, u), C = F({}, y), v = "";
    if (d) {
      var A = bu(y, d.key, {
        prefix: d.prefix,
        ignore: d.ignore,
        unitless: d.unitless,
        preserve: d.preserve
      }), E = ae(A, 2);
      y = E[0], v = E[1];
    }
    var k = Sc(y, a);
    y._tokenKey = k, C._tokenKey = Sc(C, a);
    var L = (b = d == null ? void 0 : d.key) !== null && b !== void 0 ? b : k;
    y._themeKey = L, Ex(L);
    var W = "".concat(wx, "-").concat(Pr(k));
    return y._hashId = W, [y, W, C, v, (d == null ? void 0 : d.key) || ""];
  }, function(b) {
    Ax(b[0]._themeKey, o);
  }, function(b) {
    var y = ae(b, 4), C = y[0], v = y[3];
    if (d && v) {
      var A = En(v, Pr("css-variables-".concat(C._themeKey)), {
        mark: bt,
        prepend: "queue",
        attachTo: i,
        priority: -999
      });
      A[Qt] = o, A.setAttribute($n, C._themeKey);
    }
  });
  return S;
}
var Rx = function(n, t, r) {
  var o = ae(n, 5), i = o[2], s = o[3], a = o[4], c = r || {}, l = c.plain;
  if (!s)
    return null;
  var u = i._tokenKey, f = -999, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(f)
  }, g = jo(s, a, u, d, l);
  return [f, u, g];
}, kx = {
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
}, Eu = "comm", _u = "rule", Cu = "decl", Px = "@import", Ix = "@namespace", Nx = "@keyframes", jx = "@layer", Au = Math.abs, Ea = String.fromCharCode;
function Tu(e) {
  return e.trim();
}
function yo(e, n, t) {
  return e.replace(n, t);
}
function Lx(e, n, t) {
  return e.indexOf(n, t);
}
function Fn(e, n) {
  return e.charCodeAt(n) | 0;
}
function Gn(e, n, t) {
  return e.slice(n, t);
}
function It(e) {
  return e.length;
}
function Mx(e) {
  return e.length;
}
function Qr(e, n) {
  return n.push(e), e;
}
var ii = 1, Kn = 1, Ou = 0, xt = 0, Le = 0, er = "";
function _a(e, n, t, r, o, i, s, a) {
  return { value: e, root: n, parent: t, type: r, props: o, children: i, line: ii, column: Kn, length: s, return: "", siblings: a };
}
function Dx() {
  return Le;
}
function Bx() {
  return Le = xt > 0 ? Fn(er, --xt) : 0, Kn--, Le === 10 && (Kn = 1, ii--), Le;
}
function St() {
  return Le = xt < Ou ? Fn(er, xt++) : 0, Kn++, Le === 10 && (Kn = 1, ii++), Le;
}
function en() {
  return Fn(er, xt);
}
function bo() {
  return xt;
}
function si(e, n) {
  return Gn(er, e, n);
}
function Nr(e) {
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
function Fx(e) {
  return ii = Kn = 1, Ou = It(er = e), xt = 0, [];
}
function zx(e) {
  return er = "", e;
}
function Pi(e) {
  return Tu(si(xt - 1, xs(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Vx(e) {
  for (; (Le = en()) && Le < 33; )
    St();
  return Nr(e) > 2 || Nr(Le) > 3 ? "" : " ";
}
function Hx(e, n) {
  for (; --n && St() && !(Le < 48 || Le > 102 || Le > 57 && Le < 65 || Le > 70 && Le < 97); )
    ;
  return si(e, bo() + (n < 6 && en() == 32 && St() == 32));
}
function xs(e) {
  for (; St(); )
    switch (Le) {
      // ] ) " '
      case e:
        return xt;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && xs(Le);
        break;
      // (
      case 40:
        e === 41 && xs(e);
        break;
      // \
      case 92:
        St();
        break;
    }
  return xt;
}
function Ux(e, n) {
  for (; St() && e + Le !== 57; )
    if (e + Le === 84 && en() === 47)
      break;
  return "/*" + si(n, xt - 1) + "*" + Ea(e === 47 ? e : St());
}
function qx(e) {
  for (; !Nr(en()); )
    St();
  return si(e, xt);
}
function Wx(e) {
  return zx(So("", null, null, null, [""], e = Fx(e), 0, [0], e));
}
function So(e, n, t, r, o, i, s, a, c) {
  for (var l = 0, u = 0, f = s, d = 0, g = 0, m = 0, p = 1, h = 1, S = 1, b = 0, y = "", C = o, v = i, A = r, E = y; h; )
    switch (m = b, b = St()) {
      // (
      case 40:
        if (m != 108 && Fn(E, f - 1) == 58) {
          Lx(E += yo(Pi(b), "&", "&\f"), "&\f", Au(l ? a[l - 1] : 0)) != -1 && (S = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        E += Pi(b);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        E += Vx(m);
        break;
      // \
      case 92:
        E += Hx(bo() - 1, 7);
        continue;
      // /
      case 47:
        switch (en()) {
          case 42:
          case 47:
            Qr(Xx(Ux(St(), bo()), n, t, c), c), (Nr(m || 1) == 5 || Nr(en() || 1) == 5) && It(E) && Gn(E, -1, void 0) !== " " && (E += " ");
            break;
          default:
            E += "/";
        }
        break;
      // {
      case 123 * p:
        a[l++] = It(E) * S;
      // } ; \0
      case 125 * p:
      case 59:
      case 0:
        switch (b) {
          // \0 }
          case 0:
          case 125:
            h = 0;
          // ;
          case 59 + u:
            S == -1 && (E = yo(E, /\f/g, "")), g > 0 && (It(E) - f || p === 0 && m === 47) && Qr(g > 32 ? Cc(E + ";", r, t, f - 1, c) : Cc(yo(E, " ", "") + ";", r, t, f - 2, c), c);
            break;
          // @ ;
          case 59:
            E += ";";
          // { rule/at-rule
          default:
            if (Qr(A = _c(E, n, t, l, u, o, a, y, C = [], v = [], f, i), i), b === 123)
              if (u === 0)
                So(E, n, A, A, C, i, f, a, v);
              else {
                switch (d) {
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
                u ? So(e, A, A, r && Qr(_c(e, A, A, 0, 0, o, a, y, o, C = [], f, v), v), o, v, f, a, r ? C : v) : So(E, A, A, A, [""], v, 0, a, v);
              }
        }
        l = u = g = 0, p = S = 1, y = E = "", f = s;
        break;
      // :
      case 58:
        f = 1 + It(E), g = m;
      default:
        if (p < 1) {
          if (b == 123)
            --p;
          else if (b == 125 && p++ == 0 && Bx() == 125)
            continue;
        }
        switch (E += Ea(b), b * p) {
          // &
          case 38:
            S = u > 0 ? 1 : (E += "\f", -1);
            break;
          // ,
          case 44:
            a[l++] = (It(E) - 1) * S, S = 1;
            break;
          // @
          case 64:
            en() === 45 && (E += Pi(St())), d = en(), u = f = It(y = E += qx(bo())), b++;
            break;
          // -
          case 45:
            m === 45 && It(E) == 2 && (p = 0);
        }
    }
  return i;
}
function _c(e, n, t, r, o, i, s, a, c, l, u, f) {
  for (var d = o - 1, g = o === 0 ? i : [""], m = Mx(g), p = 0, h = 0, S = 0; p < r; ++p)
    for (var b = 0, y = Gn(e, d + 1, d = Au(h = s[p])), C = e; b < m; ++b)
      (C = Tu(h > 0 ? g[b] + " " + y : yo(y, /&\f/g, g[b]))) && (c[S++] = C);
  return _a(e, n, t, o === 0 ? _u : a, c, l, u, f);
}
function Xx(e, n, t, r) {
  return _a(e, n, t, Eu, Ea(Dx()), Gn(e, 2, -2), 0, r);
}
function Cc(e, n, t, r, o) {
  return _a(e, n, t, Cu, Gn(e, 0, r), Gn(e, r + 1, -1), r, o);
}
function ps(e, n) {
  for (var t = "", r = 0; r < e.length; r++)
    t += n(e[r], r, e, n) || "";
  return t;
}
function Yx(e, n, t, r) {
  switch (e.type) {
    case jx:
      if (e.children.length) break;
    case Px:
    case Ix:
    case Cu:
      return e.return = e.return || e.value;
    case Eu:
      return "";
    case Nx:
      return e.return = e.value + "{" + ps(e.children, r) + "}";
    case _u:
      if (!It(e.value = e.props.join(","))) return "";
  }
  return It(t = ps(e.children, r)) ? e.return = e.value + "{" + t + "}" : "";
}
function Ru(e, n) {
  var t = n.path, r = n.parentSelectors;
  cn(!1, "[Ant Design CSS-in-JS] ".concat(t ? "Error in ".concat(t, ": ") : "").concat(e).concat(r.length ? " Selector: ".concat(r.join(" | ")) : ""));
}
var $x = function(n, t, r) {
  if (n === "content") {
    var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, i = ["normal", "none", "initial", "inherit", "unset"];
    (typeof t != "string" || i.indexOf(t) === -1 && !o.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")) && Ru("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(t, "\"'`."), r);
  }
}, Gx = function(n, t, r) {
  n === "animation" && r.hashId && t !== "none" && Ru("You seem to be using hashed animation '".concat(t, "', in which case 'animationName' with Keyframe as value is recommended."), r);
}, Ac = "data-ant-cssinjs-cache-path", ku = "_FILE_STYLE__", _n, Pu = !0;
function Kx() {
  if (!_n && (_n = {}, $t())) {
    var e = document.createElement("div");
    e.className = Ac, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var n = getComputedStyle(e).content || "";
    n = n.replace(/^"/, "").replace(/"$/, ""), n.split(";").forEach(function(o) {
      var i = o.split(":"), s = ae(i, 2), a = s[0], c = s[1];
      _n[a] = c;
    });
    var t = document.querySelector("style[".concat(Ac, "]"));
    if (t) {
      var r;
      Pu = !1, (r = t.parentNode) === null || r === void 0 || r.removeChild(t);
    }
    document.body.removeChild(e);
  }
}
function Zx(e) {
  return Kx(), !!_n[e];
}
function Jx(e) {
  var n = _n[e], t = null;
  if (n && $t())
    if (Pu)
      t = ku;
    else {
      var r = document.querySelector("style[".concat(bt, '="').concat(_n[e], '"]'));
      r ? t = r.innerHTML : delete _n[e];
    }
  return [t, n];
}
var Iu = "_skip_check_", Nu = "_multi_value_";
function wo(e) {
  var n = ps(Wx(e), Yx);
  return n.replace(/\{%%%\:[^;];}/g, ";");
}
function Qx(e) {
  return ye(e) === "object" && e && (Iu in e || Nu in e);
}
function Tc(e, n, t) {
  if (!n)
    return e;
  var r = ".".concat(n), o = t === "low" ? ":where(".concat(r, ")") : r, i = e.split(",").map(function(s) {
    var a, c = s.trim().split(/\s+/), l = c[0] || "", u = ((a = l.match(/^\w+/)) === null || a === void 0 ? void 0 : a[0]) || "";
    return l = "".concat(u).concat(o).concat(l.slice(u.length)), [l].concat(Wt(c.slice(1))).join(" ");
  });
  return i.join(",");
}
var ep = function e(n) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = r.root, i = r.injectHash, s = r.parentSelectors, a = t.hashId, c = t.layer, l = t.path, u = t.hashPriority, f = t.transformers, d = f === void 0 ? [] : f, g = t.linters, m = g === void 0 ? [] : g, p = "", h = {};
  function S(C) {
    var v = C.getName(a);
    if (!h[v]) {
      var A = e(C.style, t, {
        root: !1,
        parentSelectors: s
      }), E = ae(A, 1), k = E[0];
      h[v] = "@keyframes ".concat(C.getName(a)).concat(k);
    }
  }
  function b(C) {
    var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return C.forEach(function(A) {
      Array.isArray(A) ? b(A, v) : A && v.push(A);
    }), v;
  }
  var y = b(Array.isArray(n) ? n : [n]);
  return y.forEach(function(C) {
    var v = typeof C == "string" && !o ? {} : C;
    if (typeof v == "string")
      p += "".concat(v, `
`);
    else if (v._keyframe)
      S(v);
    else {
      var A = d.reduce(function(E, k) {
        var L;
        return (k == null || (L = k.visit) === null || L === void 0 ? void 0 : L.call(k, E)) || E;
      }, v);
      Object.keys(A).forEach(function(E) {
        var k = A[E];
        if (ye(k) === "object" && k && (E !== "animationName" || !k._keyframe) && !Qx(k)) {
          var L = !1, W = E.trim(), ee = !1;
          (o || i) && a ? W.startsWith("@") ? L = !0 : W === "&" ? W = Tc("", a, u) : W = Tc(E, a, u) : o && !a && (W === "&" || W === "") && (W = "", ee = !0);
          var $ = e(k, t, {
            root: ee,
            injectHash: L,
            parentSelectors: [].concat(Wt(s), [W])
          }), N = ae($, 2), z = N[0], q = N[1];
          h = F(F({}, h), q), p += "".concat(W).concat(z);
        } else {
          let G = function(Z, re) {
            process.env.NODE_ENV !== "production" && (ye(k) !== "object" || !(k != null && k[Iu])) && [$x, Gx].concat(Wt(m)).forEach(function(te) {
              return te(Z, re, {
                path: l,
                hashId: a,
                parentSelectors: s
              });
            });
            var oe = Z.replace(/[A-Z]/g, function(te) {
              return "-".concat(te.toLowerCase());
            }), K = re;
            !kx[Z] && typeof K == "number" && K !== 0 && (K = "".concat(K, "px")), Z === "animationName" && re !== null && re !== void 0 && re._keyframe && (S(re), K = re.getName(a)), p += "".concat(oe, ":").concat(K, ";");
          };
          var X, J = (X = k == null ? void 0 : k.value) !== null && X !== void 0 ? X : k;
          ye(k) === "object" && k !== null && k !== void 0 && k[Nu] && Array.isArray(J) ? J.forEach(function(Z) {
            G(E, Z);
          }) : G(E, J);
        }
      });
    }
  }), o ? c && (p && (p = "@layer ".concat(c.name, " {").concat(p, "}")), c.dependencies && (h["@layer ".concat(c.name)] = c.dependencies.map(function(C) {
    return "@layer ".concat(C, ", ").concat(c.name, ";");
  }).join(`
`))) : p = "{".concat(p, "}"), [p, h];
};
function ju(e, n) {
  return Pr("".concat(e.join("%")).concat(n));
}
function tp() {
  return null;
}
var Lu = "style";
function ms(e, n) {
  var t = e.token, r = e.path, o = e.hashId, i = e.layer, s = e.nonce, a = e.clientOnly, c = e.order, l = c === void 0 ? 0 : c, u = w.useContext(Fr), f = u.autoClear, d = u.mock, g = u.defaultCache, m = u.hashPriority, p = u.container, h = u.ssrInline, S = u.transformers, b = u.linters, y = u.cache, C = u.layer, v = t._tokenKey, A = [v];
  C && A.push("layer"), A.push.apply(A, Wt(r));
  var E = ds;
  process.env.NODE_ENV !== "production" && d !== void 0 && (E = d === "client");
  var k = wa(
    Lu,
    A,
    // Create cache if needed
    function() {
      var N = A.join("|");
      if (Zx(N)) {
        var z = Jx(N), q = ae(z, 2), X = q[0], J = q[1];
        if (X)
          return [X, v, J, {}, a, l];
      }
      var G = n(), Z = ep(G, {
        hashId: o,
        hashPriority: m,
        layer: C ? i : void 0,
        path: r.join("-"),
        transformers: S,
        linters: b
      }), re = ae(Z, 2), oe = re[0], K = re[1], te = wo(oe), fe = ju(A, te);
      return [te, v, fe, K, a, l];
    },
    // Remove cache if no need
    function(N, z) {
      var q = ae(N, 3), X = q[2];
      (z || f) && ds && vu(X, {
        mark: bt
      });
    },
    // Effect: Inject style here
    function(N) {
      var z = ae(N, 4), q = z[0];
      z[1];
      var X = z[2], J = z[3];
      if (E && q !== ku) {
        var G = {
          mark: bt,
          prepend: C ? !1 : "queue",
          attachTo: p,
          priority: l
        }, Z = typeof s == "function" ? s() : s;
        Z && (G.csp = {
          nonce: Z
        });
        var re = [], oe = [];
        Object.keys(J).forEach(function(te) {
          te.startsWith("@layer") ? re.push(te) : oe.push(te);
        }), re.forEach(function(te) {
          En(wo(J[te]), "_layer-".concat(te), F(F({}, G), {}, {
            prepend: !0
          }));
        });
        var K = En(q, X, G);
        K[Qt] = y.instanceId, K.setAttribute($n, v), process.env.NODE_ENV !== "production" && K.setAttribute(rx, A.join("|")), oe.forEach(function(te) {
          En(wo(J[te]), "_effect-".concat(te), G);
        });
      }
    }
  ), L = ae(k, 3), W = L[0], ee = L[1], $ = L[2];
  return function(N) {
    var z;
    if (!h || E || !g)
      z = /* @__PURE__ */ w.createElement(tp, null);
    else {
      var q;
      z = /* @__PURE__ */ w.createElement("style", Mt({}, (q = {}, H(q, $n, ee), H(q, bt, $), q), {
        dangerouslySetInnerHTML: {
          __html: W
        }
      }));
    }
    return /* @__PURE__ */ w.createElement(w.Fragment, null, z, N);
  };
}
var np = function(n, t, r) {
  var o = ae(n, 6), i = o[0], s = o[1], a = o[2], c = o[3], l = o[4], u = o[5], f = r || {}, d = f.plain;
  if (l)
    return null;
  var g = i, m = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  };
  return g = jo(i, s, a, m, d), c && Object.keys(c).forEach(function(p) {
    if (!t[p]) {
      t[p] = !0;
      var h = wo(c[p]), S = jo(h, s, "_effect-".concat(p), m, d);
      p.startsWith("@layer") ? g = S + g : g += S;
    }
  }), [u, a, g];
}, Mu = "cssVar", rp = function(n, t) {
  var r = n.key, o = n.prefix, i = n.unitless, s = n.ignore, a = n.token, c = n.scope, l = c === void 0 ? "" : c, u = nn(Fr), f = u.cache.instanceId, d = u.container, g = a._tokenKey, m = [].concat(Wt(n.path), [r, l, g]), p = wa(Mu, m, function() {
    var h = t(), S = bu(h, r, {
      prefix: o,
      unitless: i,
      ignore: s,
      scope: l
    }), b = ae(S, 2), y = b[0], C = b[1], v = ju(m, C);
    return [y, C, v, r];
  }, function(h) {
    var S = ae(h, 3), b = S[2];
    ds && vu(b, {
      mark: bt
    });
  }, function(h) {
    var S = ae(h, 3), b = S[1], y = S[2];
    if (b) {
      var C = En(b, y, {
        mark: bt,
        prepend: "queue",
        attachTo: d,
        priority: -999
      });
      C[Qt] = f, C.setAttribute($n, r);
    }
  });
  return p;
}, op = function(n, t, r) {
  var o = ae(n, 4), i = o[1], s = o[2], a = o[3], c = r || {}, l = c.plain;
  if (!i)
    return null;
  var u = -999, f = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  }, d = jo(i, a, s, f, l);
  return [u, s, d];
}, dr;
dr = {}, H(dr, Lu, np), H(dr, wu, Rx), H(dr, Mu, op);
var Du = /* @__PURE__ */ function() {
  function e(n, t) {
    Et(this, e), H(this, "name", void 0), H(this, "style", void 0), H(this, "_keyframe", !0), this.name = n, this.style = t;
  }
  return _t(e, [{
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
var Ca = /* @__PURE__ */ ia({});
function ip(e) {
  return hu(e) || lu(e) || ya(e) || xu();
}
function gs(e, n) {
  for (var t = e, r = 0; r < n.length; r += 1) {
    if (t == null)
      return;
    t = t[n[r]];
  }
  return t;
}
function Bu(e, n, t, r) {
  if (!n.length)
    return t;
  var o = ip(n), i = o[0], s = o.slice(1), a;
  return !e && typeof i == "number" ? a = [] : Array.isArray(e) ? a = Wt(e) : a = F({}, e), r && t === void 0 && s.length === 1 ? delete a[i][s[0]] : a[i] = Bu(a[i], s, t, r), a;
}
function Ii(e, n, t) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return n.length && r && t === void 0 && !gs(e, n.slice(0, -1)) ? e : Bu(e, n, t, r);
}
function sp(e) {
  return ye(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function Oc(e) {
  return Array.isArray(e) ? [] : {};
}
var ap = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function cp() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  var r = Oc(n[0]);
  return n.forEach(function(o) {
    function i(s, a) {
      var c = new Set(a), l = gs(o, s), u = Array.isArray(l);
      if (u || sp(l)) {
        if (!c.has(l)) {
          c.add(l);
          var f = gs(r, s);
          u ? r = Ii(r, s, []) : (!f || ye(f) !== "object") && (r = Ii(r, s, Oc(l))), ap(l).forEach(function(d) {
            i([].concat(Wt(s), [d]), c);
          });
        }
      } else
        r = Ii(r, s, l);
    }
    i([]);
  }), r;
}
function Fu() {
}
let Ht = null;
function lp() {
  Ht = null, nu();
}
let Aa = Fu;
process.env.NODE_ENV !== "production" && (Aa = (e, n, t) => {
  cn(e, `[antd: ${n}] ${t}`), process.env.NODE_ENV === "test" && lp();
});
const zu = /* @__PURE__ */ w.createContext({}), tr = process.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: n
  } = w.useContext(zu), t = (r, o, i) => {
    if (!r)
      if (n === !1 && o === "deprecated") {
        const s = Ht;
        Ht || (Ht = {}), Ht[e] = Ht[e] || [], Ht[e].includes(i || "") || Ht[e].push(i || ""), s || console.warn("[antd] There exists deprecated usage in your code:", Ht);
      } else
        process.env.NODE_ENV !== "production" && Aa(r, e, i);
  };
  return t.deprecated = (r, o, i, s) => {
    t(r, "deprecated", `\`${o}\` is deprecated. Please use \`${i}\` instead.${s ? ` ${s}` : ""}`);
  }, t;
} : () => {
  const e = () => {
  };
  return e.deprecated = Fu, e;
}, ai = Aa, up = /* @__PURE__ */ ia(void 0), it = "${label} is not a valid ${type}", ci = {
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
        string: it,
        method: it,
        array: it,
        object: it,
        number: it,
        date: it,
        boolean: it,
        integer: it,
        float: it,
        regexp: it,
        email: it,
        url: it,
        hex: it
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
Object.assign({}, ci.Modal);
let Eo = [];
const Rc = () => Eo.reduce((e, n) => Object.assign(Object.assign({}, e), n), ci.Modal);
function fp(e) {
  if (e) {
    const n = Object.assign({}, e);
    return Eo.push(n), Rc(), () => {
      Eo = Eo.filter((t) => t !== n), Rc();
    };
  }
  Object.assign({}, ci.Modal);
}
const Vu = /* @__PURE__ */ ia(void 0), Hu = "internalMark", Uu = (e) => {
  const {
    locale: n = {},
    children: t,
    _ANT_MARK__: r
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const i = tr("LocaleProvider");
    process.env.NODE_ENV !== "production" && i(r === Hu, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  w.useEffect(() => fp(n == null ? void 0 : n.Modal), [n]);
  const o = w.useMemo(() => Object.assign(Object.assign({}, n), {
    exist: !0
  }), [n]);
  return /* @__PURE__ */ w.createElement(Vu.Provider, {
    value: o
  }, t);
};
process.env.NODE_ENV !== "production" && (Uu.displayName = "LocaleProvider");
const qu = {
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
}, jr = Object.assign(Object.assign({}, qu), {
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
function Ni(e, n) {
  const t = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], r = t.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    r[o] = n(r[o] || 0, t[o] || "", o);
  return t[3] ? r[3] = t[3].includes("%") ? r[3] / 100 : r[3] : r[3] = 1, r;
}
const kc = (e, n, t) => t === 0 ? e : e / 100;
function hr(e, n) {
  const t = n || 255;
  return e > t ? t : e < 0 ? 0 : e;
}
class Pe {
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
    } else if (n instanceof Pe)
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
      const d = He(r * 255);
      this.r = d, this.g = d, this.b = d;
    }
    let i = 0, s = 0, a = 0;
    const c = n / 60, l = (1 - Math.abs(2 * r - 1)) * t, u = l * (1 - Math.abs(c % 2 - 1));
    c >= 0 && c < 1 ? (i = l, s = u) : c >= 1 && c < 2 ? (i = u, s = l) : c >= 2 && c < 3 ? (s = l, a = u) : c >= 3 && c < 4 ? (s = u, a = l) : c >= 4 && c < 5 ? (i = u, a = l) : c >= 5 && c < 6 && (i = l, a = u);
    const f = r - l / 2;
    this.r = He((i + f) * 255), this.g = He((s + f) * 255), this.b = He((a + f) * 255);
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
    const s = n / 60, a = Math.floor(s), c = s - a, l = He(r * (1 - t) * 255), u = He(r * (1 - t * c) * 255), f = He(r * (1 - t * (1 - c)) * 255);
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
    const t = Ni(n, kc);
    this.fromHsv({
      h: t[0],
      s: t[1],
      v: t[2],
      a: t[3]
    });
  }
  fromHslString(n) {
    const t = Ni(n, kc);
    this.fromHsl({
      h: t[0],
      s: t[1],
      l: t[2],
      a: t[3]
    });
  }
  fromRgbString(n) {
    const t = Ni(n, (r, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? He(r / 100 * 255) : r
    ));
    this.r = t[0], this.g = t[1], this.b = t[2], this.a = t[3];
  }
}
var eo = 2, Pc = 0.16, dp = 0.05, hp = 0.05, xp = 0.15, Wu = 5, Xu = 4, pp = [{
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
function Ic(e, n, t) {
  var r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = t ? Math.round(e.h) - eo * n : Math.round(e.h) + eo * n : r = t ? Math.round(e.h) + eo * n : Math.round(e.h) - eo * n, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function Nc(e, n, t) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var r;
  return t ? r = e.s - Pc * n : n === Xu ? r = e.s + Pc : r = e.s + dp * n, r > 1 && (r = 1), t && n === Wu && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Math.round(r * 100) / 100;
}
function jc(e, n, t) {
  var r;
  return t ? r = e.v + hp * n : r = e.v - xp * n, r = Math.max(0, Math.min(1, r)), Math.round(r * 100) / 100;
}
function Lr(e) {
  for (var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = [], r = new Pe(e), o = r.toHsv(), i = Wu; i > 0; i -= 1) {
    var s = new Pe({
      h: Ic(o, i, !0),
      s: Nc(o, i, !0),
      v: jc(o, i, !0)
    });
    t.push(s);
  }
  t.push(r);
  for (var a = 1; a <= Xu; a += 1) {
    var c = new Pe({
      h: Ic(o, a),
      s: Nc(o, a),
      v: jc(o, a)
    });
    t.push(c);
  }
  return n.theme === "dark" ? pp.map(function(l) {
    var u = l.index, f = l.amount;
    return new Pe(n.backgroundColor || "#141414").mix(t[u], f).toHexString();
  }) : t.map(function(l) {
    return l.toHexString();
  });
}
var ji = {
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
var _s = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
_s.primary = _s[5];
var Cs = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
Cs.primary = Cs[5];
var Lo = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
Lo.primary = Lo[5];
var As = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
As.primary = As[5];
var Ts = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
Ts.primary = Ts[5];
var Os = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
Os.primary = Os[5];
var Rs = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
Rs.primary = Rs[5];
var Li = {
  red: vs,
  volcano: ys,
  orange: bs,
  gold: Ss,
  yellow: ws,
  lime: Es,
  green: _s,
  cyan: Cs,
  blue: Lo,
  geekblue: As,
  purple: Ts,
  magenta: Os,
  grey: Rs
};
function mp(e, n) {
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
  } = e, f = t(c), d = t(o), g = t(i), m = t(s), p = t(a), h = r(l, u), S = e.colorLink || e.colorInfo, b = t(S), y = new Pe(m[1]).mix(new Pe(m[3]), 50).toHexString();
  return Object.assign(Object.assign({}, h), {
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
    colorSuccessBg: d[1],
    colorSuccessBgHover: d[2],
    colorSuccessBorder: d[3],
    colorSuccessBorderHover: d[4],
    colorSuccessHover: d[4],
    colorSuccess: d[6],
    colorSuccessActive: d[7],
    colorSuccessTextHover: d[8],
    colorSuccessText: d[9],
    colorSuccessTextActive: d[10],
    colorErrorBg: m[1],
    colorErrorBgHover: m[2],
    colorErrorBgFilledHover: y,
    colorErrorBgActive: m[3],
    colorErrorBorder: m[3],
    colorErrorBorderHover: m[4],
    colorErrorHover: m[5],
    colorError: m[6],
    colorErrorActive: m[7],
    colorErrorTextHover: m[8],
    colorErrorText: m[9],
    colorErrorTextActive: m[10],
    colorWarningBg: g[1],
    colorWarningBgHover: g[2],
    colorWarningBorder: g[3],
    colorWarningBorderHover: g[4],
    colorWarningHover: g[4],
    colorWarning: g[6],
    colorWarningActive: g[7],
    colorWarningTextHover: g[8],
    colorWarningText: g[9],
    colorWarningTextActive: g[10],
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
    colorLinkHover: b[4],
    colorLink: b[6],
    colorLinkActive: b[7],
    colorBgMask: new Pe("#000").setA(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const gp = (e) => {
  let n = e, t = e, r = e, o = e;
  return e < 6 && e >= 5 ? n = e + 1 : e < 16 && e >= 6 ? n = e + 2 : e >= 16 && (n = 16), e < 7 && e >= 5 ? t = 4 : e < 8 && e >= 7 ? t = 5 : e < 14 && e >= 8 ? t = 6 : e < 16 && e >= 14 ? t = 7 : e >= 16 && (t = 8), e < 6 && e >= 2 ? r = 1 : e >= 6 && (r = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
    borderRadius: e,
    borderRadiusXS: r,
    borderRadiusSM: t,
    borderRadiusLG: n,
    borderRadiusOuter: o
  };
};
function vp(e) {
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
  }, gp(r));
}
const yp = (e) => {
  const {
    controlHeight: n
  } = e;
  return {
    controlHeightSM: n * 0.75,
    controlHeightXS: n * 0.5,
    controlHeightLG: n * 1.25
  };
};
function bp(e) {
  return (e + 8) / e;
}
function Sp(e) {
  const n = Array.from({
    length: 10
  }).map((t, r) => {
    const o = r - 1, i = e * Math.pow(Math.E, o / 5), s = r > 1 ? Math.floor(i) : Math.ceil(i);
    return Math.floor(s / 2) * 2;
  });
  return n[1] = e, n.map((t) => ({
    size: t,
    lineHeight: bp(t)
  }));
}
const wp = (e) => {
  const n = Sp(e), t = n.map((u) => u.size), r = n.map((u) => u.lineHeight), o = t[1], i = t[0], s = t[2], a = r[1], c = r[0], l = r[2];
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
function Ep(e) {
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
const ut = (e, n) => new Pe(e).setA(n).toRgbString(), xr = (e, n) => new Pe(e).darken(n).toHexString(), _p = (e) => {
  const n = Lr(e);
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
}, Cp = (e, n) => {
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
    colorBgLayout: xr(t, 4),
    colorBgContainer: xr(t, 0),
    colorBgElevated: xr(t, 0),
    colorBgSpotlight: ut(r, 0.85),
    colorBgBlur: "transparent",
    colorBorder: xr(t, 15),
    colorBorderSecondary: xr(t, 6)
  };
};
function Ap(e) {
  ji.pink = ji.magenta, Li.pink = Li.magenta;
  const n = Object.keys(qu).map((t) => {
    const r = e[t] === ji[t] ? Li[t] : Lr(e[t]);
    return Array.from({
      length: 10
    }, () => 1).reduce((o, i, s) => (o[`${t}-${s + 1}`] = r[s], o[`${t}${s + 1}`] = r[s], o), {});
  }).reduce((t, r) => (t = Object.assign(Object.assign({}, t), r), t), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), n), mp(e, {
    generateColorPalettes: _p,
    generateNeutralColorPalettes: Cp
  })), wp(e.fontSize)), Ep(e)), yp(e)), vp(e));
}
const Yu = fs(Ap), ks = {
  token: jr,
  override: {
    override: jr
  },
  hashed: !0
}, $u = /* @__PURE__ */ Ie.createContext(ks), Ps = "ant", Ta = "anticon", Tp = (e, n) => n || (e ? `${Ps}-${e}` : Ps), rn = /* @__PURE__ */ w.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: Tp,
  iconPrefixCls: Ta
}), {
  Consumer: ry
} = rn, Lc = {};
function Gu(e) {
  const n = w.useContext(rn), {
    getPrefixCls: t,
    direction: r,
    getPopupContainer: o
  } = n, i = n[e];
  return Object.assign(Object.assign({
    classNames: Lc,
    styles: Lc
  }, i), {
    getPrefixCls: t,
    direction: r,
    getPopupContainer: o
  });
}
const Op = `-ant-${Date.now()}-${Math.random()}`;
function Rp(e, n) {
  const t = {}, r = (s, a) => {
    let c = s.clone();
    return c = (a == null ? void 0 : a(c)) || c, c.toRgbString();
  }, o = (s, a) => {
    const c = new Pe(s), l = Lr(c.toRgbString());
    t[`${a}-color`] = r(c), t[`${a}-color-disabled`] = l[1], t[`${a}-color-hover`] = l[4], t[`${a}-color-active`] = l[6], t[`${a}-color-outline`] = c.clone().setA(0.2).toRgbString(), t[`${a}-color-deprecated-bg`] = l[0], t[`${a}-color-deprecated-border`] = l[2];
  };
  if (n.primaryColor) {
    o(n.primaryColor, "primary");
    const s = new Pe(n.primaryColor), a = Lr(s.toRgbString());
    a.forEach((l, u) => {
      t[`primary-${u + 1}`] = l;
    }), t["primary-color-deprecated-l-35"] = r(s, (l) => l.lighten(35)), t["primary-color-deprecated-l-20"] = r(s, (l) => l.lighten(20)), t["primary-color-deprecated-t-20"] = r(s, (l) => l.tint(20)), t["primary-color-deprecated-t-50"] = r(s, (l) => l.tint(50)), t["primary-color-deprecated-f-12"] = r(s, (l) => l.setA(l.a * 0.12));
    const c = new Pe(a[0]);
    t["primary-color-active-deprecated-f-30"] = r(c, (l) => l.setA(l.a * 0.3)), t["primary-color-active-deprecated-d-02"] = r(c, (l) => l.darken(2));
  }
  return n.successColor && o(n.successColor, "success"), n.warningColor && o(n.warningColor, "warning"), n.errorColor && o(n.errorColor, "error"), n.infoColor && o(n.infoColor, "info"), `
  :root {
    ${Object.keys(t).map((s) => `--${e}-${s}: ${t[s]};`).join(`
`)}
  }
  `.trim();
}
function kp(e, n) {
  const t = Rp(e, n);
  $t() ? En(t, `${Op}-dynamic-theme`) : process.env.NODE_ENV !== "production" && ai(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const Is = /* @__PURE__ */ w.createContext(!1), Pp = (e) => {
  let {
    children: n,
    disabled: t
  } = e;
  const r = w.useContext(Is);
  return /* @__PURE__ */ w.createElement(Is.Provider, {
    value: t ?? r
  }, n);
}, Mr = /* @__PURE__ */ w.createContext(void 0), Ip = (e) => {
  let {
    children: n,
    size: t
  } = e;
  const r = w.useContext(Mr);
  return /* @__PURE__ */ w.createElement(Mr.Provider, {
    value: t || r
  }, n);
};
function Np() {
  const e = nn(Is), n = nn(Mr);
  return {
    componentDisabled: e,
    componentSize: n
  };
}
var Ku = /* @__PURE__ */ _t(function e() {
  Et(this, e);
}), Zu = "CALC_UNIT", jp = new RegExp(Zu, "g");
function Mi(e) {
  return typeof e == "number" ? "".concat(e).concat(Zu) : e;
}
var Lp = /* @__PURE__ */ function(e) {
  Br(t, e);
  var n = ni(t);
  function t(r, o) {
    var i;
    Et(this, t), i = n.call(this), H(wn(i), "result", ""), H(wn(i), "unitlessCssVar", void 0), H(wn(i), "lowPriority", void 0);
    var s = ye(r);
    return i.unitlessCssVar = o, r instanceof t ? i.result = "(".concat(r.result, ")") : s === "number" ? i.result = Mi(r) : s === "string" && (i.result = r), i;
  }
  return _t(t, [{
    key: "add",
    value: function(o) {
      return o instanceof t ? this.result = "".concat(this.result, " + ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " + ").concat(Mi(o))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(o) {
      return o instanceof t ? this.result = "".concat(this.result, " - ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " - ").concat(Mi(o))), this.lowPriority = !0, this;
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
      }) && (c = !1), this.result = this.result.replace(jp, c ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), t;
}(Ku), Mp = /* @__PURE__ */ function(e) {
  Br(t, e);
  var n = ni(t);
  function t(r) {
    var o;
    return Et(this, t), o = n.call(this), H(wn(o), "result", 0), r instanceof t ? o.result = r.result : typeof r == "number" && (o.result = r), o;
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
}(Ku), Dp = function(n, t) {
  var r = n === "css" ? Lp : Mp;
  return function(o) {
    return new r(o, t);
  };
}, Mc = function(n, t) {
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
function Dc(e, n, t, r) {
  var o = F({}, n[e]);
  if (r != null && r.deprecatedTokens) {
    var i = r.deprecatedTokens;
    i.forEach(function(a) {
      var c = ae(a, 2), l = c[0], u = c[1];
      if (process.env.NODE_ENV !== "production" && cn(!(o != null && o[l]), "Component Token `".concat(String(l), "` of ").concat(String(e), " is deprecated. Please use `").concat(String(u), "` instead.")), o != null && o[l] || o != null && o[u]) {
        var f;
        (f = o[u]) !== null && f !== void 0 || (o[u] = o == null ? void 0 : o[l]);
      }
    });
  }
  var s = F(F({}, t), o);
  return Object.keys(s).forEach(function(a) {
    s[a] === n[a] && delete s[a];
  }), s;
}
var Ju = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", Ls = !0;
function li() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  if (!Ju)
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
var Bc = {};
function Bp() {
}
var Fp = function(n) {
  var t, r = n, o = Bp;
  return Ju && typeof Proxy < "u" && (t = /* @__PURE__ */ new Set(), r = new Proxy(n, {
    get: function(s, a) {
      if (Ls) {
        var c;
        (c = t) === null || c === void 0 || c.add(a);
      }
      return s[a];
    }
  }), o = function(s, a) {
    var c;
    Bc[s] = {
      global: Array.from(t),
      component: F(F({}, (c = Bc[s]) === null || c === void 0 ? void 0 : c.component), a)
    };
  }), {
    token: r,
    keys: t,
    flush: o
  };
};
function Fc(e, n, t) {
  if (typeof t == "function") {
    var r;
    return t(li(n, (r = n[e]) !== null && r !== void 0 ? r : {}));
  }
  return t ?? {};
}
function zp(e) {
  return e === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++)
        r[o] = arguments[o];
      return "max(".concat(r.map(function(i) {
        return No(i);
      }).join(","), ")");
    },
    min: function() {
      for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++)
        r[o] = arguments[o];
      return "min(".concat(r.map(function(i) {
        return No(i);
      }).join(","), ")");
    }
  };
}
var Vp = 1e3 * 60 * 10, Hp = /* @__PURE__ */ function() {
  function e() {
    Et(this, e), H(this, "map", /* @__PURE__ */ new Map()), H(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), H(this, "nextID", 0), H(this, "lastAccessBeat", /* @__PURE__ */ new Map()), H(this, "accessBeat", 0);
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
          r - o > Vp && (t.map.delete(i), t.lastAccessBeat.delete(i));
        }), this.accessBeat = 0;
      }
    }
  }]), e;
}(), zc = new Hp();
function Up(e, n) {
  return Ie.useMemo(function() {
    var t = zc.get(n);
    if (t)
      return t;
    var r = e();
    return zc.set(n, r), r;
  }, n);
}
var qp = function() {
  return {};
};
function Wp(e) {
  var n = e.useCSP, t = n === void 0 ? qp : n, r = e.useToken, o = e.usePrefix, i = e.getResetStyles, s = e.getCommonStyle, a = e.getCompUnitless;
  function c(d, g, m, p) {
    var h = Array.isArray(d) ? d[0] : d;
    function S(k) {
      return "".concat(String(h)).concat(k.slice(0, 1).toUpperCase()).concat(k.slice(1));
    }
    var b = (p == null ? void 0 : p.unitless) || {}, y = typeof a == "function" ? a(d) : {}, C = F(F({}, y), {}, H({}, S("zIndexPopup"), !0));
    Object.keys(b).forEach(function(k) {
      C[S(k)] = b[k];
    });
    var v = F(F({}, p), {}, {
      unitless: C,
      prefixToken: S
    }), A = u(d, g, m, v), E = l(h, m, v);
    return function(k) {
      var L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : k, W = A(k, L), ee = ae(W, 2), $ = ee[1], N = E(L), z = ae(N, 2), q = z[0], X = z[1];
      return [q, $, X];
    };
  }
  function l(d, g, m) {
    var p = m.unitless, h = m.injectStyle, S = h === void 0 ? !0 : h, b = m.prefixToken, y = m.ignore, C = function(E) {
      var k = E.rootCls, L = E.cssVar, W = L === void 0 ? {} : L, ee = r(), $ = ee.realToken;
      return rp({
        path: [d],
        prefix: W.prefix,
        key: W.key,
        unitless: p,
        ignore: y,
        token: $,
        scope: k
      }, function() {
        var N = Fc(d, $, g), z = Dc(d, $, N, {
          deprecatedTokens: m == null ? void 0 : m.deprecatedTokens
        });
        return Object.keys(N).forEach(function(q) {
          z[b(q)] = z[q], delete z[q];
        }), z;
      }), null;
    }, v = function(E) {
      var k = r(), L = k.cssVar;
      return [function(W) {
        return S && L ? /* @__PURE__ */ Ie.createElement(Ie.Fragment, null, /* @__PURE__ */ Ie.createElement(C, {
          rootCls: E,
          cssVar: L,
          component: d
        }), W) : W;
      }, L == null ? void 0 : L.key];
    };
    return v;
  }
  function u(d, g, m) {
    var p = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, h = Array.isArray(d) ? d : [d, d], S = ae(h, 1), b = S[0], y = h.join("-"), C = e.layer || {
      name: "antd"
    };
    return function(v) {
      var A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : v, E = r(), k = E.theme, L = E.realToken, W = E.hashId, ee = E.token, $ = E.cssVar, N = o(), z = N.rootPrefixCls, q = N.iconPrefixCls, X = t(), J = $ ? "css" : "js", G = Up(function() {
        var fe = /* @__PURE__ */ new Set();
        return $ && Object.keys(p.unitless || {}).forEach(function(le) {
          fe.add(vo(le, $.prefix)), fe.add(vo(le, Mc(b, $.prefix)));
        }), Dp(J, fe);
      }, [J, b, $ == null ? void 0 : $.prefix]), Z = zp(J), re = Z.max, oe = Z.min, K = {
        theme: k,
        token: ee,
        hashId: W,
        nonce: function() {
          return X.nonce;
        },
        clientOnly: p.clientOnly,
        layer: C,
        // antd is always at top of styles
        order: p.order || -999
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
        path: [y, v, q]
      }), function() {
        if (p.injectStyle === !1)
          return [];
        var fe = Fp(ee), le = fe.token, de = fe.flush, xe = Fc(b, L, m), P = ".".concat(v), U = Dc(b, L, xe, {
          deprecatedTokens: p.deprecatedTokens
        });
        $ && xe && ye(xe) === "object" && Object.keys(xe).forEach(function(ne) {
          xe[ne] = "var(".concat(vo(ne, Mc(b, $.prefix)), ")");
        });
        var M = li(le, {
          componentCls: P,
          prefixCls: v,
          iconCls: ".".concat(q),
          antCls: ".".concat(z),
          calc: G,
          // @ts-ignore
          max: re,
          // @ts-ignore
          min: oe
        }, $ ? xe : U), D = g(M, {
          hashId: W,
          prefixCls: v,
          rootPrefixCls: z,
          iconPrefixCls: q
        });
        de(b, U);
        var O = typeof s == "function" ? s(M, v, A, p.resetFont) : null;
        return [p.resetStyle === !1 ? null : O, D];
      });
      return [te, W];
    };
  }
  function f(d, g, m) {
    var p = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, h = u(d, g, m, F({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, p)), S = function(y) {
      var C = y.prefixCls, v = y.rootCls, A = v === void 0 ? C : v;
      return h(C, A), null;
    };
    return process.env.NODE_ENV !== "production" && (S.displayName = "SubStyle_".concat(String(Array.isArray(d) ? d.join(".") : d))), S;
  }
  return {
    genStyleHooks: c,
    genSubStyleComponent: f,
    genComponentStyleHook: u
  };
}
const Xp = "5.24.6";
function Di(e) {
  return e >= 0 && e <= 255;
}
function to(e, n) {
  const {
    r: t,
    g: r,
    b: o,
    a: i
  } = new Pe(e).toRgb();
  if (i < 1)
    return e;
  const {
    r: s,
    g: a,
    b: c
  } = new Pe(n).toRgb();
  for (let l = 0.01; l <= 1; l += 0.01) {
    const u = Math.round((t - s * (1 - l)) / l), f = Math.round((r - a * (1 - l)) / l), d = Math.round((o - c * (1 - l)) / l);
    if (Di(u) && Di(f) && Di(d))
      return new Pe({
        r: u,
        g: f,
        b: d,
        a: Math.round(l * 100) / 100
      }).toRgbString();
  }
  return new Pe({
    r: t,
    g: r,
    b: o,
    a: 1
  }).toRgbString();
}
var Yp = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
function Qu(e) {
  const {
    override: n
  } = e, t = Yp(e, ["override"]), r = Object.assign({}, n);
  Object.keys(jr).forEach((d) => {
    delete r[d];
  });
  const o = Object.assign(Object.assign({}, t), r), i = 480, s = 576, a = 768, c = 992, l = 1200, u = 1600;
  if (o.motion === !1) {
    const d = "0s";
    o.motionDurationFast = d, o.motionDurationMid = d, o.motionDurationSlow = d;
  }
  return Object.assign(Object.assign(Object.assign({}, o), {
    // ============== Background ============== //
    colorFillContent: o.colorFillSecondary,
    colorFillContentHover: o.colorFill,
    colorFillAlter: o.colorFillQuaternary,
    colorBgContainerDisabled: o.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: o.colorBgContainer,
    colorSplit: to(o.colorBorderSecondary, o.colorBgContainer),
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
    colorErrorOutline: to(o.colorErrorBg, o.colorBgContainer),
    colorWarningOutline: to(o.colorWarningBg, o.colorBgContainer),
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
    controlOutline: to(o.colorPrimaryBg, o.colorBgContainer),
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
      0 1px 2px -2px ${new Pe("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new Pe("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new Pe("rgba(0, 0, 0, 0.09)").toRgbString()}
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
var Vc = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
const ef = {
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
}, $p = {
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
}, Gp = {
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
}, tf = (e, n, t) => {
  const r = t.getDerivativeToken(e), {
    override: o
  } = n, i = Vc(n, ["override"]);
  let s = Object.assign(Object.assign({}, r), {
    override: o
  });
  return s = Qu(s), i && Object.entries(i).forEach((a) => {
    let [c, l] = a;
    const {
      theme: u
    } = l, f = Vc(l, ["theme"]);
    let d = f;
    u && (d = tf(Object.assign(Object.assign({}, s), f), {
      override: f
    }, u)), s[c] = d;
  }), s;
};
function Oa() {
  const {
    token: e,
    hashed: n,
    theme: t,
    override: r,
    cssVar: o
  } = Ie.useContext($u), i = `${Xp}-${n || ""}`, s = t || Yu, [a, c, l] = Ox(s, [jr, e], {
    salt: i,
    override: r,
    getComputedToken: tf,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: Qu,
    cssVar: o && {
      prefix: o.prefix,
      key: o.key,
      unitless: ef,
      ignore: $p,
      preserve: Gp
    }
  });
  return [s, l, n ? c : "", a, o];
}
const nf = function(e) {
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
}, Kp = () => ({
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
}), Zp = (e) => ({
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
}), Jp = (e, n, t, r) => {
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
}, rf = (e) => ({
  [`.${e}`]: Object.assign(Object.assign({}, Kp()), {
    [`.${e} .${e}-icon`]: {
      display: "block"
    }
  })
}), {
  genStyleHooks: Ra
} = Wp({
  usePrefix: () => {
    const {
      getPrefixCls: e,
      iconPrefixCls: n
    } = nn(rn);
    return {
      rootPrefixCls: e(),
      iconPrefixCls: n
    };
  },
  useToken: () => {
    const [e, n, t, r, o] = Oa();
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
    } = nn(rn);
    return e ?? {};
  },
  getResetStyles: (e, n) => {
    var t;
    const r = Zp(e);
    return [r, {
      "&": r
    }, rf((t = n == null ? void 0 : n.prefix.iconPrefixCls) !== null && t !== void 0 ? t : Ta)];
  },
  getCommonStyle: Jp,
  getCompUnitless: () => ef
}), Qp = (e, n) => {
  const [t, r] = Oa();
  return ms({
    token: r,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => n == null ? void 0 : n.nonce,
    layer: {
      name: "antd"
    }
  }, () => [rf(e)]);
}, e1 = Object.assign({}, w), {
  useId: Hc
} = e1, t1 = () => "", n1 = typeof Hc > "u" ? t1 : Hc;
function r1(e, n, t) {
  var r, o;
  const i = tr("ConfigProvider"), s = e || {}, a = s.inherit === !1 || !n ? Object.assign(Object.assign({}, ks), {
    hashed: (r = n == null ? void 0 : n.hashed) !== null && r !== void 0 ? r : ks.hashed,
    cssVar: n == null ? void 0 : n.cssVar
  }) : n, c = n1();
  if (process.env.NODE_ENV !== "production") {
    const l = s.cssVar || a.cssVar, u = !!(typeof s.cssVar == "object" && (!((o = s.cssVar) === null || o === void 0) && o.key) || c);
    process.env.NODE_ENV !== "production" && i(!l || u, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return iu(() => {
    var l, u;
    if (!e)
      return n;
    const f = Object.assign({}, a.components);
    Object.keys(e.components || {}).forEach((m) => {
      f[m] = Object.assign(Object.assign({}, f[m]), e.components[m]);
    });
    const d = `css-var-${c.replace(/:/g, "")}`, g = ((l = s.cssVar) !== null && l !== void 0 ? l : a.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: t == null ? void 0 : t.prefixCls
    }, typeof a.cssVar == "object" ? a.cssVar : {}), typeof s.cssVar == "object" ? s.cssVar : {}), {
      key: typeof s.cssVar == "object" && ((u = s.cssVar) === null || u === void 0 ? void 0 : u.key) || d
    });
    return Object.assign(Object.assign(Object.assign({}, a), s), {
      token: Object.assign(Object.assign({}, a.token), s.token),
      components: f,
      cssVar: g
    });
  }, [s, a], (l, u) => l.some((f, d) => {
    const g = u[d];
    return !ex(f, g, !0);
  }));
}
var o1 = ["children"], of = /* @__PURE__ */ w.createContext({});
function i1(e) {
  var n = e.children, t = Ir(e, o1);
  return /* @__PURE__ */ w.createElement(of.Provider, {
    value: t
  }, n);
}
var s1 = /* @__PURE__ */ function(e) {
  Br(t, e);
  var n = ni(t);
  function t() {
    return Et(this, t), n.apply(this, arguments);
  }
  return _t(t, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), t;
}(w.Component);
function a1(e) {
  var n = w.useReducer(function(a) {
    return a + 1;
  }, 0), t = ae(n, 2), r = t[1], o = w.useRef(e), i = Ns(function() {
    return o.current;
  }), s = Ns(function(a) {
    o.current = typeof a == "function" ? a(o.current) : a, r();
  });
  return [i, s];
}
var Jt = "none", no = "appear", ro = "enter", oo = "leave", Uc = "none", vt = "prepare", Mn = "start", Dn = "active", ka = "end", sf = "prepared";
function qc(e, n) {
  var t = {};
  return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit".concat(e)] = "webkit".concat(n), t["Moz".concat(e)] = "moz".concat(n), t["ms".concat(e)] = "MS".concat(n), t["O".concat(e)] = "o".concat(n.toLowerCase()), t;
}
function c1(e, n) {
  var t = {
    animationend: qc("Animation", "AnimationEnd"),
    transitionend: qc("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in n || delete t.animationend.animation, "TransitionEvent" in n || delete t.transitionend.transition), t;
}
var l1 = c1($t(), typeof window < "u" ? window : {}), af = {};
if ($t()) {
  var u1 = document.createElement("div");
  af = u1.style;
}
var io = {};
function cf(e) {
  if (io[e])
    return io[e];
  var n = l1[e];
  if (n)
    for (var t = Object.keys(n), r = t.length, o = 0; o < r; o += 1) {
      var i = t[o];
      if (Object.prototype.hasOwnProperty.call(n, i) && i in af)
        return io[e] = n[i], io[e];
    }
  return "";
}
var lf = cf("animationend"), uf = cf("transitionend"), ff = !!(lf && uf), Wc = lf || "animationend", Xc = uf || "transitionend";
function Yc(e, n) {
  if (!e) return null;
  if (ye(e) === "object") {
    var t = n.replace(/-\w/g, function(r) {
      return r[1].toUpperCase();
    });
    return e[t];
  }
  return "".concat(e, "-").concat(n);
}
const f1 = function(e) {
  var n = Ve();
  function t(o) {
    o && (o.removeEventListener(Xc, e), o.removeEventListener(Wc, e));
  }
  function r(o) {
    n.current && n.current !== o && t(n.current), o && o !== n.current && (o.addEventListener(Xc, e), o.addEventListener(Wc, e), n.current = o);
  }
  return w.useEffect(function() {
    return function() {
      t(n.current);
    };
  }, []), [r, t];
};
var df = $t() ? h0 : et;
const d1 = function() {
  var e = w.useRef(null);
  function n() {
    Io.cancel(e.current);
  }
  function t(r) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    n();
    var i = Io(function() {
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
var h1 = [vt, Mn, Dn, ka], x1 = [vt, sf], hf = !1, p1 = !0;
function xf(e) {
  return e === Dn || e === ka;
}
const m1 = function(e, n, t) {
  var r = js(Uc), o = ae(r, 2), i = o[0], s = o[1], a = d1(), c = ae(a, 2), l = c[0], u = c[1];
  function f() {
    s(vt, !0);
  }
  var d = n ? x1 : h1;
  return df(function() {
    if (i !== Uc && i !== ka) {
      var g = d.indexOf(i), m = d[g + 1], p = t(i);
      p === hf ? s(m, !0) : m && l(function(h) {
        function S() {
          h.isCanceled() || s(m, !0);
        }
        p === !0 ? S() : Promise.resolve(p).then(S);
      });
    }
  }, [e, i]), w.useEffect(function() {
    return function() {
      u();
    };
  }, []), [f, i];
};
function g1(e, n, t, r) {
  var o = r.motionEnter, i = o === void 0 ? !0 : o, s = r.motionAppear, a = s === void 0 ? !0 : s, c = r.motionLeave, l = c === void 0 ? !0 : c, u = r.motionDeadline, f = r.motionLeaveImmediately, d = r.onAppearPrepare, g = r.onEnterPrepare, m = r.onLeavePrepare, p = r.onAppearStart, h = r.onEnterStart, S = r.onLeaveStart, b = r.onAppearActive, y = r.onEnterActive, C = r.onLeaveActive, v = r.onAppearEnd, A = r.onEnterEnd, E = r.onLeaveEnd, k = r.onVisibleChanged, L = js(), W = ae(L, 2), ee = W[0], $ = W[1], N = a1(Jt), z = ae(N, 2), q = z[0], X = z[1], J = js(null), G = ae(J, 2), Z = G[0], re = G[1], oe = q(), K = Ve(!1), te = Ve(null);
  function fe() {
    return t();
  }
  var le = Ve(!1);
  function de() {
    X(Jt), re(null, !0);
  }
  var xe = Ns(function(ke) {
    var be = q();
    if (be !== Jt) {
      var qe = fe();
      if (!(ke && !ke.deadline && ke.target !== qe)) {
        var pt = le.current, ct;
        be === no && pt ? ct = v == null ? void 0 : v(qe, ke) : be === ro && pt ? ct = A == null ? void 0 : A(qe, ke) : be === oo && pt && (ct = E == null ? void 0 : E(qe, ke)), pt && ct !== !1 && de();
      }
    }
  }), P = f1(xe), U = ae(P, 1), M = U[0], D = function(be) {
    switch (be) {
      case no:
        return H(H(H({}, vt, d), Mn, p), Dn, b);
      case ro:
        return H(H(H({}, vt, g), Mn, h), Dn, y);
      case oo:
        return H(H(H({}, vt, m), Mn, S), Dn, C);
      default:
        return {};
    }
  }, O = w.useMemo(function() {
    return D(oe);
  }, [oe]), ne = m1(oe, !e, function(ke) {
    if (ke === vt) {
      var be = O[vt];
      return be ? be(fe()) : hf;
    }
    if (we in O) {
      var qe;
      re(((qe = O[we]) === null || qe === void 0 ? void 0 : qe.call(O, fe(), null)) || null);
    }
    return we === Dn && oe !== Jt && (M(fe()), u > 0 && (clearTimeout(te.current), te.current = setTimeout(function() {
      xe({
        deadline: !0
      });
    }, u))), we === sf && de(), p1;
  }), j = ae(ne, 2), Re = j[0], we = j[1], at = xf(we);
  le.current = at;
  var At = Ve(null);
  df(function() {
    if (!(K.current && At.current === n)) {
      $(n);
      var ke = K.current;
      K.current = !0;
      var be;
      !ke && n && a && (be = no), ke && n && i && (be = ro), (ke && !n && l || !ke && f && !n && l) && (be = oo);
      var qe = D(be);
      be && (e || qe[vt]) ? (X(be), Re()) : X(Jt), At.current = n;
    }
  }, [n]), et(function() {
    // Cancel appear
    (oe === no && !a || // Cancel enter
    oe === ro && !i || // Cancel leave
    oe === oo && !l) && X(Jt);
  }, [a, i, l]), et(function() {
    return function() {
      K.current = !1, clearTimeout(te.current);
    };
  }, []);
  var ot = w.useRef(!1);
  et(function() {
    ee && (ot.current = !0), ee !== void 0 && oe === Jt && ((ot.current || ee) && (k == null || k(ee)), ot.current = !0);
  }, [ee, oe]);
  var Tt = Z;
  return O[vt] && we === Mn && (Tt = F({
    transition: "none"
  }, Tt)), [oe, we, Tt, ee ?? n];
}
function v1(e) {
  var n = e;
  ye(e) === "object" && (n = e.transitionSupport);
  function t(o, i) {
    return !!(o.motionName && n && i !== !1);
  }
  var r = /* @__PURE__ */ w.forwardRef(function(o, i) {
    var s = o.visible, a = s === void 0 ? !0 : s, c = o.removeOnLeave, l = c === void 0 ? !0 : c, u = o.forceRender, f = o.children, d = o.motionName, g = o.leavedClassName, m = o.eventProps, p = w.useContext(of), h = p.motion, S = t(o, h), b = Ve(), y = Ve();
    function C() {
      try {
        return b.current instanceof HTMLElement ? b.current : Bh(y.current);
      } catch {
        return null;
      }
    }
    var v = g1(S, a, C, o), A = ae(v, 4), E = A[0], k = A[1], L = A[2], W = A[3], ee = w.useRef(W);
    W && (ee.current = !0);
    var $ = w.useCallback(function(G) {
      b.current = G, su(i, G);
    }, [i]), N, z = F(F({}, m), {}, {
      visible: a
    });
    if (!f)
      N = null;
    else if (E === Jt)
      W ? N = f(F({}, z), $) : !l && ee.current && g ? N = f(F(F({}, z), {}, {
        className: g
      }), $) : u || !l && !g ? N = f(F(F({}, z), {}, {
        style: {
          display: "none"
        }
      }), $) : N = null;
    else {
      var q;
      k === vt ? q = "prepare" : xf(k) ? q = "active" : k === Mn && (q = "start");
      var X = Yc(d, "".concat(E, "-").concat(q));
      N = f(F(F({}, z), {}, {
        className: Ge(Yc(d, E), H(H({}, X, X && q), d, typeof d == "string")),
        style: L
      }), $);
    }
    if (/* @__PURE__ */ w.isValidElement(N) && qh(N)) {
      var J = Wh(N);
      J || (N = /* @__PURE__ */ w.cloneElement(N, {
        ref: $
      }));
    }
    return /* @__PURE__ */ w.createElement(s1, {
      ref: y
    }, N);
  });
  return r.displayName = "CSSMotion", r;
}
const pf = v1(ff);
var Ms = "add", Ds = "keep", Bs = "remove", Bi = "removed";
function y1(e) {
  var n;
  return e && ye(e) === "object" && "key" in e ? n = e : n = {
    key: e
  }, F(F({}, n), {}, {
    key: String(n.key)
  });
}
function Fs() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(y1);
}
function b1() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], t = [], r = 0, o = n.length, i = Fs(e), s = Fs(n);
  i.forEach(function(l) {
    for (var u = !1, f = r; f < o; f += 1) {
      var d = s[f];
      if (d.key === l.key) {
        r < f && (t = t.concat(s.slice(r, f).map(function(g) {
          return F(F({}, g), {}, {
            status: Ms
          });
        })), r = f), t.push(F(F({}, d), {}, {
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
      var f = u.key, d = u.status;
      return f !== l || d !== Bs;
    }), t.forEach(function(u) {
      u.key === l && (u.status = Ds);
    });
  }), t;
}
var S1 = ["component", "children", "onVisibleChanged", "onAllRemoved"], w1 = ["status"], E1 = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function _1(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : pf, t = /* @__PURE__ */ function(r) {
    Br(i, r);
    var o = ni(i);
    function i() {
      var s;
      Et(this, i);
      for (var a = arguments.length, c = new Array(a), l = 0; l < a; l++)
        c[l] = arguments[l];
      return s = o.call.apply(o, [this].concat(c)), H(wn(s), "state", {
        keyEntities: []
      }), H(wn(s), "removeKey", function(u) {
        s.setState(function(f) {
          var d = f.keyEntities.map(function(g) {
            return g.key !== u ? g : F(F({}, g), {}, {
              status: Bi
            });
          });
          return {
            keyEntities: d
          };
        }, function() {
          var f = s.state.keyEntities, d = f.filter(function(g) {
            var m = g.status;
            return m !== Bi;
          }).length;
          d === 0 && s.props.onAllRemoved && s.props.onAllRemoved();
        });
      }), s;
    }
    return _t(i, [{
      key: "render",
      value: function() {
        var a = this, c = this.state.keyEntities, l = this.props, u = l.component, f = l.children, d = l.onVisibleChanged;
        l.onAllRemoved;
        var g = Ir(l, S1), m = u || w.Fragment, p = {};
        return E1.forEach(function(h) {
          p[h] = g[h], delete g[h];
        }), delete g.keys, /* @__PURE__ */ w.createElement(m, g, c.map(function(h, S) {
          var b = h.status, y = Ir(h, w1), C = b === Ms || b === Ds;
          return /* @__PURE__ */ w.createElement(n, Mt({}, p, {
            key: y.key,
            visible: C,
            eventProps: y,
            onVisibleChanged: function(A) {
              d == null || d(A, {
                key: y.key
              }), A || a.removeKey(y.key);
            }
          }), function(v, A) {
            return f(F(F({}, v), {}, {
              index: S
            }), A);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(a, c) {
        var l = a.keys, u = c.keyEntities, f = Fs(l), d = b1(u, f);
        return {
          keyEntities: d.filter(function(g) {
            var m = u.find(function(p) {
              var h = p.key;
              return g.key === h;
            });
            return !(m && m.status === Bi && g.status === Bs);
          })
        };
      }
    }]), i;
  }(w.Component);
  return H(t, "defaultProps", {
    component: "div"
  }), t;
}
_1(ff);
function C1(e) {
  const {
    children: n
  } = e, [, t] = Oa(), {
    motion: r
  } = t, o = w.useRef(!1);
  return o.current = o.current || r === !1, o.current ? /* @__PURE__ */ w.createElement(i1, {
    motion: r
  }, n) : n;
}
const mf = /* @__PURE__ */ w.memo((e) => {
  let {
    dropdownMatchSelectWidth: n
  } = e;
  return tr("ConfigProvider").deprecated(n === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
process.env.NODE_ENV !== "production" && (mf.displayName = "PropWarning");
const A1 = process.env.NODE_ENV !== "production" ? mf : () => null;
var T1 = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
let zs = !1;
process.env.NODE_ENV;
const O1 = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let gf;
function R1() {
  return gf || Ps;
}
function k1(e) {
  return Object.keys(e).some((n) => n.endsWith("Color"));
}
const P1 = (e) => {
  const {
    prefixCls: n,
    iconPrefixCls: t,
    theme: r,
    holderRender: o
  } = e;
  n !== void 0 && (gf = n), r && k1(r) && (process.env.NODE_ENV !== "production" && ai(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), kp(R1(), r));
}, I1 = (e) => {
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
    virtual: d,
    dropdownMatchSelectWidth: g,
    popupMatchSelectWidth: m,
    popupOverflow: p,
    legacyLocale: h,
    parentContext: S,
    iconPrefixCls: b,
    theme: y,
    componentDisabled: C,
    segmented: v,
    statistic: A,
    spin: E,
    calendar: k,
    carousel: L,
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
    breadcrumb: xe,
    menu: P,
    pagination: U,
    input: M,
    textArea: D,
    empty: O,
    badge: ne,
    radio: j,
    rate: Re,
    switch: we,
    transfer: at,
    avatar: At,
    message: ot,
    tag: Tt,
    table: ke,
    card: be,
    tabs: qe,
    timeline: pt,
    timePicker: ct,
    upload: un,
    notification: fn,
    tree: kn,
    colorPicker: dn,
    datePicker: B,
    rangePicker: R,
    flex: Ne,
    wave: De,
    dropdown: Xe,
    warning: Be,
    tour: Ke,
    tooltip: mt,
    popover: Ot,
    popconfirm: Pn,
    floatButtonGroup: Rt,
    variant: Bt,
    inputNumber: Ft,
    treeSelect: Ye
  } = e, Ze = w.useCallback((_e, x) => {
    const {
      prefixCls: T
    } = e;
    if (x)
      return x;
    const I = T || S.getPrefixCls("");
    return _e ? `${I}-${_e}` : I;
  }, [S.getPrefixCls, e.prefixCls]), lt = b || S.iconPrefixCls || Ta, kt = t || S.csp;
  Qp(lt, kt);
  const hn = r1(y, S.theme, {
    prefixCls: Ze("")
  });
  process.env.NODE_ENV !== "production" && (zs = zs || !!hn);
  const In = {
    csp: kt,
    autoInsertSpaceInButton: r,
    alert: o,
    anchor: i,
    locale: a || h,
    direction: l,
    space: u,
    splitter: f,
    virtual: d,
    popupMatchSelectWidth: m ?? g,
    popupOverflow: p,
    getPrefixCls: Ze,
    iconPrefixCls: lt,
    theme: hn,
    segmented: v,
    statistic: A,
    spin: E,
    calendar: k,
    carousel: L,
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
    input: M,
    textArea: D,
    layout: re,
    list: oe,
    mentions: K,
    modal: te,
    progress: fe,
    result: le,
    slider: de,
    breadcrumb: xe,
    menu: P,
    pagination: U,
    empty: O,
    badge: ne,
    radio: j,
    rate: Re,
    switch: we,
    transfer: at,
    avatar: At,
    message: ot,
    tag: Tt,
    table: ke,
    card: be,
    tabs: qe,
    timeline: pt,
    timePicker: ct,
    upload: un,
    notification: fn,
    tree: kn,
    colorPicker: dn,
    datePicker: B,
    rangePicker: R,
    flex: Ne,
    wave: De,
    dropdown: Xe,
    warning: Be,
    tour: Ke,
    tooltip: mt,
    popover: Ot,
    popconfirm: Pn,
    floatButtonGroup: Rt,
    variant: Bt,
    inputNumber: Ft,
    treeSelect: Ye
  };
  process.env.NODE_ENV !== "production" && tr("ConfigProvider")(!("autoInsertSpaceInButton" in e), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const Gt = Object.assign({}, S);
  Object.keys(In).forEach((_e) => {
    In[_e] !== void 0 && (Gt[_e] = In[_e]);
  }), O1.forEach((_e) => {
    const x = e[_e];
    x && (Gt[_e] = x);
  }), typeof r < "u" && (Gt.button = Object.assign({
    autoInsertSpace: r
  }, Gt.button));
  const Kt = iu(() => Gt, Gt, (_e, x) => {
    const T = Object.keys(_e), I = Object.keys(x);
    return T.length !== I.length || T.some((Y) => _e[Y] !== x[Y]);
  }), {
    layer: sr
  } = w.useContext(Fr), Hr = w.useMemo(() => ({
    prefixCls: lt,
    csp: kt,
    layer: sr ? "antd" : void 0
  }), [lt, kt, sr]);
  let Fe = /* @__PURE__ */ w.createElement(w.Fragment, null, /* @__PURE__ */ w.createElement(A1, {
    dropdownMatchSelectWidth: g
  }), n);
  const Ur = w.useMemo(() => {
    var _e, x, T, I;
    return cp(((_e = ci.Form) === null || _e === void 0 ? void 0 : _e.defaultValidateMessages) || {}, ((T = (x = Kt.locale) === null || x === void 0 ? void 0 : x.Form) === null || T === void 0 ? void 0 : T.defaultValidateMessages) || {}, ((I = Kt.form) === null || I === void 0 ? void 0 : I.validateMessages) || {}, (s == null ? void 0 : s.validateMessages) || {});
  }, [Kt, s == null ? void 0 : s.validateMessages]);
  Object.keys(Ur).length > 0 && (Fe = /* @__PURE__ */ w.createElement(up.Provider, {
    value: Ur
  }, Fe)), a && (Fe = /* @__PURE__ */ w.createElement(Uu, {
    locale: a,
    _ANT_MARK__: Hu
  }, Fe)), Fe = /* @__PURE__ */ w.createElement(Ca.Provider, {
    value: Hr
  }, Fe), c && (Fe = /* @__PURE__ */ w.createElement(Ip, {
    size: c
  }, Fe)), Fe = /* @__PURE__ */ w.createElement(C1, null, Fe);
  const vi = w.useMemo(() => {
    const _e = hn || {}, {
      algorithm: x,
      token: T,
      components: I,
      cssVar: Y
    } = _e, he = T1(_e, ["algorithm", "token", "components", "cssVar"]), pe = x && (!Array.isArray(x) || x.length > 0) ? fs(x) : Yu, ce = {};
    Object.entries(I || {}).forEach((We) => {
      let [Ee, Ce] = We;
      const Ae = Object.assign({}, Ce);
      "algorithm" in Ae && (Ae.algorithm === !0 ? Ae.theme = pe : (Array.isArray(Ae.algorithm) || typeof Ae.algorithm == "function") && (Ae.theme = fs(Ae.algorithm)), delete Ae.algorithm), ce[Ee] = Ae;
    });
    const se = Object.assign(Object.assign({}, jr), T);
    return Object.assign(Object.assign({}, he), {
      theme: pe,
      token: se,
      components: ce,
      override: Object.assign({
        override: se
      }, ce),
      cssVar: Y
    });
  }, [hn]);
  return y && (Fe = /* @__PURE__ */ w.createElement($u.Provider, {
    value: vi
  }, Fe)), Kt.warning && (Fe = /* @__PURE__ */ w.createElement(zu.Provider, {
    value: Kt.warning
  }, Fe)), C !== void 0 && (Fe = /* @__PURE__ */ w.createElement(Pp, {
    disabled: C
  }, Fe)), /* @__PURE__ */ w.createElement(rn.Provider, {
    value: Kt
  }, Fe);
}, nr = (e) => {
  const n = w.useContext(rn), t = w.useContext(Vu);
  return /* @__PURE__ */ w.createElement(I1, Object.assign({
    parentContext: n,
    legacyLocale: t
  }, e));
};
nr.ConfigContext = rn;
nr.SizeContext = Mr;
nr.config = P1;
nr.useConfig = Np;
Object.defineProperty(nr, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && ai(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), Mr)
});
process.env.NODE_ENV !== "production" && (nr.displayName = "ConfigProvider");
var N1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
function vf(e) {
  var n;
  return e == null || (n = e.getRootNode) === null || n === void 0 ? void 0 : n.call(e);
}
function j1(e) {
  return vf(e) instanceof ShadowRoot;
}
function L1(e) {
  return j1(e) ? vf(e) : null;
}
function M1(e) {
  return e.replace(/-(.)/g, function(n, t) {
    return t.toUpperCase();
  });
}
function D1(e, n) {
  cn(e, "[@ant-design/icons] ".concat(n));
}
function $c(e) {
  return ye(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (ye(e.icon) === "object" || typeof e.icon == "function");
}
function Gc() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(n, t) {
    var r = e[t];
    switch (t) {
      case "class":
        n.className = r, delete n.class;
        break;
      default:
        delete n[t], n[M1(t)] = r;
    }
    return n;
  }, {});
}
function Vs(e, n, t) {
  return t ? /* @__PURE__ */ Ie.createElement(e.tag, F(F({
    key: n
  }, Gc(e.attrs)), t), (e.children || []).map(function(r, o) {
    return Vs(r, "".concat(n, "-").concat(e.tag, "-").concat(o));
  })) : /* @__PURE__ */ Ie.createElement(e.tag, F({
    key: n
  }, Gc(e.attrs)), (e.children || []).map(function(r, o) {
    return Vs(r, "".concat(n, "-").concat(e.tag, "-").concat(o));
  }));
}
function yf(e) {
  return Lr(e)[0];
}
function bf(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var B1 = `
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
`, F1 = function(n) {
  var t = nn(Ca), r = t.csp, o = t.prefixCls, i = t.layer, s = B1;
  o && (s = s.replace(/anticon/g, o)), i && (s = "@layer ".concat(i, ` {
`).concat(s, `
}`)), et(function() {
    var a = n.current, c = L1(a);
    En(s, "@ant-design-icons", {
      prepend: !i,
      csp: r,
      attachTo: c
    });
  }, []);
}, z1 = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], Rr = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function V1(e) {
  var n = e.primaryColor, t = e.secondaryColor;
  Rr.primaryColor = n, Rr.secondaryColor = t || yf(n), Rr.calculated = !!t;
}
function H1() {
  return F({}, Rr);
}
var rr = function(n) {
  var t = n.icon, r = n.className, o = n.onClick, i = n.style, s = n.primaryColor, a = n.secondaryColor, c = Ir(n, z1), l = w.useRef(), u = Rr;
  if (s && (u = {
    primaryColor: s,
    secondaryColor: a || yf(s)
  }), F1(l), D1($c(t), "icon should be icon definiton, but got ".concat(t)), !$c(t))
    return null;
  var f = t;
  return f && typeof f.icon == "function" && (f = F(F({}, f), {}, {
    icon: f.icon(u.primaryColor, u.secondaryColor)
  })), Vs(f.icon, "svg-".concat(f.name), F(F({
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
rr.displayName = "IconReact";
rr.getTwoToneColors = H1;
rr.setTwoToneColors = V1;
function Sf(e) {
  var n = bf(e), t = ae(n, 2), r = t[0], o = t[1];
  return rr.setTwoToneColors({
    primaryColor: r,
    secondaryColor: o
  });
}
function U1() {
  var e = rr.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var q1 = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
Sf(Lo.primary);
var ln = /* @__PURE__ */ w.forwardRef(function(e, n) {
  var t = e.className, r = e.icon, o = e.spin, i = e.rotate, s = e.tabIndex, a = e.onClick, c = e.twoToneColor, l = Ir(e, q1), u = w.useContext(Ca), f = u.prefixCls, d = f === void 0 ? "anticon" : f, g = u.rootClassName, m = Ge(g, d, H(H({}, "".concat(d, "-").concat(r.name), !!r.name), "".concat(d, "-spin"), !!o || r.name === "loading"), t), p = s;
  p === void 0 && a && (p = -1);
  var h = i ? {
    msTransform: "rotate(".concat(i, "deg)"),
    transform: "rotate(".concat(i, "deg)")
  } : void 0, S = bf(c), b = ae(S, 2), y = b[0], C = b[1];
  return /* @__PURE__ */ w.createElement("span", Mt({
    role: "img",
    "aria-label": r.name
  }, l, {
    ref: n,
    tabIndex: p,
    onClick: a,
    className: m
  }), /* @__PURE__ */ w.createElement(rr, {
    icon: r,
    primaryColor: y,
    secondaryColor: C,
    style: h
  }));
});
ln.displayName = "AntdIcon";
ln.getTwoToneColor = U1;
ln.setTwoToneColor = Sf;
var W1 = function(n, t) {
  return /* @__PURE__ */ w.createElement(ln, Mt({}, n, {
    ref: t,
    icon: N1
  }));
}, wf = /* @__PURE__ */ w.forwardRef(W1);
process.env.NODE_ENV !== "production" && (wf.displayName = "CheckCircleFilled");
var X1 = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, Y1 = function(n, t) {
  return /* @__PURE__ */ w.createElement(ln, Mt({}, n, {
    ref: t,
    icon: X1
  }));
}, Ef = /* @__PURE__ */ w.forwardRef(Y1);
process.env.NODE_ENV !== "production" && (Ef.displayName = "CloseCircleFilled");
var $1 = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, G1 = function(n, t) {
  return /* @__PURE__ */ w.createElement(ln, Mt({}, n, {
    ref: t,
    icon: $1
  }));
}, _f = /* @__PURE__ */ w.forwardRef(G1);
process.env.NODE_ENV !== "production" && (_f.displayName = "CloseOutlined");
var K1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" }, Z1 = function(n, t) {
  return /* @__PURE__ */ w.createElement(ln, Mt({}, n, {
    ref: t,
    icon: K1
  }));
}, Cf = /* @__PURE__ */ w.forwardRef(Z1);
process.env.NODE_ENV !== "production" && (Cf.displayName = "ExclamationCircleFilled");
var J1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" }, Q1 = function(n, t) {
  return /* @__PURE__ */ w.createElement(ln, Mt({}, n, {
    ref: t,
    icon: J1
  }));
}, Af = /* @__PURE__ */ w.forwardRef(Q1);
process.env.NODE_ENV !== "production" && (Af.displayName = "InfoCircleFilled");
var em = `accept acceptCharset accessKey action allowFullScreen allowTransparency
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
    summary tabIndex target title type useMap value width wmode wrap`, tm = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, nm = "".concat(em, " ").concat(tm).split(/[\s\n]+/), rm = "aria-", om = "data-";
function Kc(e, n) {
  return e.indexOf(n) === 0;
}
function im(e) {
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
    (t.aria && (o === "role" || Kc(o, rm)) || // Data
    t.data && Kc(o, om) || // Attr
    t.attr && nm.includes(o)) && (r[o] = e[o]);
  }), r;
}
const Tf = (e, n, t) => /* @__PURE__ */ Ie.isValidElement(e) ? /* @__PURE__ */ Ie.cloneElement(e, typeof t == "function" ? t(e.props || {}) : t) : n;
function sm(e, n) {
  return Tf(e, e, n);
}
const so = (e, n, t, r, o) => ({
  background: e,
  border: `${No(r.lineWidth)} ${r.lineType} ${n}`,
  [`${o}-icon`]: {
    color: t
  }
}), am = (e) => {
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
    colorTextHeading: d,
    withDescriptionPadding: g,
    defaultPadding: m
  } = e;
  return {
    [n]: Object.assign(Object.assign({}, nf(e)), {
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
        color: d
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
      padding: g,
      [`${n}-icon`]: {
        marginInlineEnd: o,
        fontSize: u,
        lineHeight: 0
      },
      [`${n}-message`]: {
        display: "block",
        marginBottom: r,
        color: d,
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
}, cm = (e) => {
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
    colorInfoBorder: d,
    colorInfoBg: g
  } = e;
  return {
    [n]: {
      "&-success": so(o, r, t, e, n),
      "&-info": so(g, d, f, e, n),
      "&-warning": so(a, s, i, e, n),
      "&-error": Object.assign(Object.assign({}, so(u, l, c, e, n)), {
        [`${n}-description > pre`]: {
          margin: 0,
          padding: 0
        }
      })
    }
  };
}, lm = (e) => {
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
        lineHeight: No(i),
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
}, um = (e) => ({
  withDescriptionIconSize: e.fontSizeHeading3,
  defaultPadding: `${e.paddingContentVerticalSM}px 12px`,
  withDescriptionPadding: `${e.paddingMD}px ${e.paddingContentHorizontalLG}px`
}), fm = Ra("Alert", (e) => [am(e), cm(e), lm(e)], um);
var Zc = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
const dm = {
  success: wf,
  info: Af,
  error: Ef,
  warning: Cf
}, hm = (e) => {
  const {
    icon: n,
    prefixCls: t,
    type: r
  } = e, o = dm[r] || null;
  return n ? Tf(n, /* @__PURE__ */ w.createElement("span", {
    className: `${t}-icon`
  }, n), () => ({
    className: Ge(`${t}-icon`, n.props.className)
  })) : /* @__PURE__ */ w.createElement(o, {
    className: `${t}-icon`
  });
}, xm = (e) => {
  const {
    isClosable: n,
    prefixCls: t,
    closeIcon: r,
    handleClose: o,
    ariaProps: i
  } = e, s = r === !0 || r === void 0 ? /* @__PURE__ */ w.createElement(_f, null) : r;
  return n ? /* @__PURE__ */ w.createElement("button", Object.assign({
    type: "button",
    onClick: o,
    className: `${t}-close-icon`,
    tabIndex: 0
  }, i), s) : null;
}, Pa = /* @__PURE__ */ w.forwardRef((e, n) => {
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
    afterClose: d,
    showIcon: g,
    closable: m,
    closeText: p,
    closeIcon: h,
    action: S,
    id: b
  } = e, y = Zc(e, ["description", "prefixCls", "message", "banner", "className", "rootClassName", "style", "onMouseEnter", "onMouseLeave", "onClick", "afterClose", "showIcon", "closable", "closeText", "closeIcon", "action", "id"]), [C, v] = w.useState(!1);
  process.env.NODE_ENV !== "production" && tr("Alert").deprecated(!p, "closeText", "closable.closeIcon");
  const A = w.useRef(null);
  w.useImperativeHandle(n, () => ({
    nativeElement: A.current
  }));
  const {
    getPrefixCls: E,
    direction: k,
    closable: L,
    closeIcon: W,
    className: ee,
    style: $
  } = Gu("alert"), N = E("alert", r), [z, q, X] = fm(N), J = (le) => {
    var de;
    v(!0), (de = e.onClose) === null || de === void 0 || de.call(e, le);
  }, G = w.useMemo(() => e.type !== void 0 ? e.type : i ? "warning" : "info", [e.type, i]), Z = w.useMemo(() => typeof m == "object" && m.closeIcon || p ? !0 : typeof m == "boolean" ? m : h !== !1 && h !== null && h !== void 0 ? !0 : !!L, [p, h, m, L]), re = i && g === void 0 ? !0 : g, oe = Ge(N, `${N}-${G}`, {
    [`${N}-with-description`]: !!t,
    [`${N}-no-icon`]: !re,
    [`${N}-banner`]: !!i,
    [`${N}-rtl`]: k === "rtl"
  }, ee, s, a, X, q), K = im(y, {
    aria: !0,
    data: !0
  }), te = w.useMemo(() => typeof m == "object" && m.closeIcon ? m.closeIcon : p || (h !== void 0 ? h : typeof L == "object" && L.closeIcon ? L.closeIcon : W), [h, m, p, W]), fe = w.useMemo(() => {
    const le = m ?? L;
    if (typeof le == "object") {
      const {
        closeIcon: de
      } = le;
      return Zc(le, ["closeIcon"]);
    }
    return {};
  }, [m, L]);
  return z(/* @__PURE__ */ w.createElement(pf, {
    visible: !C,
    motionName: `${N}-motion`,
    motionAppear: !1,
    motionEnter: !1,
    onLeaveStart: (le) => ({
      maxHeight: le.offsetHeight
    }),
    onLeaveEnd: d
  }, (le, de) => {
    let {
      className: xe,
      style: P
    } = le;
    return /* @__PURE__ */ w.createElement("div", Object.assign({
      id: b,
      ref: Uh(A, de),
      "data-show": !C,
      className: Ge(oe, xe),
      style: Object.assign(Object.assign(Object.assign({}, $), c), P),
      onMouseEnter: l,
      onMouseLeave: u,
      onClick: f,
      role: "alert"
    }, K), re ? /* @__PURE__ */ w.createElement(hm, {
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
    }, S) : null, /* @__PURE__ */ w.createElement(xm, {
      isClosable: Z,
      prefixCls: N,
      closeIcon: te,
      handleClose: J,
      ariaProps: fe
    }));
  }));
});
process.env.NODE_ENV !== "production" && (Pa.displayName = "Alert");
function pm(e, n, t) {
  return n = Yn(n), cu(e, va() ? Reflect.construct(n, t || [], Yn(e).constructor) : n.apply(e, t));
}
let mm = /* @__PURE__ */ function(e) {
  function n() {
    var t;
    return Et(this, n), t = pm(this, n, arguments), t.state = {
      error: void 0,
      info: {
        componentStack: ""
      }
    }, t;
  }
  return Br(n, e), _t(n, [{
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
      return a ? /* @__PURE__ */ w.createElement(Pa, {
        id: i,
        type: "error",
        message: u,
        description: /* @__PURE__ */ w.createElement("pre", {
          style: {
            fontSize: "0.9em",
            overflowX: "auto"
          }
        }, f)
      }) : s;
    }
  }]);
}(w.Component);
const Of = Pa;
Of.ErrorBoundary = mm;
function gm(e, n) {
  var t = Object.assign({}, e);
  return Array.isArray(n) && n.forEach(function(r) {
    delete t[r];
  }), t;
}
function vm(e, n, t) {
  var r = t || {}, o = r.noTrailing, i = o === void 0 ? !1 : o, s = r.noLeading, a = s === void 0 ? !1 : s, c = r.debounceMode, l = c === void 0 ? void 0 : c, u, f = !1, d = 0;
  function g() {
    u && clearTimeout(u);
  }
  function m(h) {
    var S = h || {}, b = S.upcomingOnly, y = b === void 0 ? !1 : b;
    g(), f = !y;
  }
  function p() {
    for (var h = arguments.length, S = new Array(h), b = 0; b < h; b++)
      S[b] = arguments[b];
    var y = this, C = Date.now() - d;
    if (f)
      return;
    function v() {
      d = Date.now(), n.apply(y, S);
    }
    function A() {
      u = void 0;
    }
    !a && l && !u && v(), g(), l === void 0 && C > e ? a ? (d = Date.now(), i || (u = setTimeout(l ? A : v, e))) : v() : i !== !0 && (u = setTimeout(l ? A : v, l === void 0 ? e - C : e));
  }
  return p.cancel = m, p;
}
function ym(e, n, t) {
  var r = {}, o = r.atBegin, i = o === void 0 ? !1 : o;
  return vm(e, n, {
    debounceMode: i !== !1
  });
}
function Jc(e) {
  return ["small", "middle", "large"].includes(e);
}
const Rf = ["wrap", "nowrap", "wrap-reverse"], kf = ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around", "space-evenly", "stretch", "normal", "left", "right"], Pf = ["center", "start", "end", "flex-start", "flex-end", "self-start", "self-end", "baseline", "normal", "stretch"], bm = (e, n) => {
  const t = n.wrap === !0 ? "wrap" : n.wrap;
  return {
    [`${e}-wrap-${t}`]: t && Rf.includes(t)
  };
}, Sm = (e, n) => {
  const t = {};
  return Pf.forEach((r) => {
    t[`${e}-align-${r}`] = n.align === r;
  }), t[`${e}-align-stretch`] = !n.align && !!n.vertical, t;
}, wm = (e, n) => {
  const t = {};
  return kf.forEach((r) => {
    t[`${e}-justify-${r}`] = n.justify === r;
  }), t;
};
function Em(e, n) {
  return Ge(Object.assign(Object.assign(Object.assign({}, bm(e, n)), Sm(e, n)), wm(e, n)));
}
const _m = (e) => {
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
}, Cm = (e) => {
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
}, Am = (e) => {
  const {
    componentCls: n
  } = e, t = {};
  return Rf.forEach((r) => {
    t[`${n}-wrap-${r}`] = {
      flexWrap: r
    };
  }), t;
}, Tm = (e) => {
  const {
    componentCls: n
  } = e, t = {};
  return Pf.forEach((r) => {
    t[`${n}-align-${r}`] = {
      alignItems: r
    };
  }), t;
}, Om = (e) => {
  const {
    componentCls: n
  } = e, t = {};
  return kf.forEach((r) => {
    t[`${n}-justify-${r}`] = {
      justifyContent: r
    };
  }), t;
}, Rm = () => ({}), km = Ra("Flex", (e) => {
  const {
    paddingXS: n,
    padding: t,
    paddingLG: r
  } = e, o = li(e, {
    flexGapSM: n,
    flexGap: t,
    flexGapLG: r
  });
  return [_m(o), Cm(o), Am(o), Tm(o), Om(o)];
}, Rm, {
  // Flex component don't apply extra font style
  // https://github.com/ant-design/ant-design/issues/46403
  resetStyle: !1
});
var Pm = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
const If = /* @__PURE__ */ Ie.forwardRef((e, n) => {
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
  } = e, f = Pm(e, ["prefixCls", "rootClassName", "className", "style", "flex", "gap", "children", "vertical", "component"]), {
    flex: d,
    direction: g,
    getPrefixCls: m
  } = Ie.useContext(rn), p = m("flex", t), [h, S, b] = km(p), y = l ?? (d == null ? void 0 : d.vertical), C = Ge(o, r, d == null ? void 0 : d.className, p, S, b, Em(p, e), {
    [`${p}-rtl`]: g === "rtl",
    [`${p}-gap-${a}`]: Jc(a),
    [`${p}-vertical`]: y
  }), v = Object.assign(Object.assign({}, d == null ? void 0 : d.style), i);
  return s && (v.flex = s), a && !Jc(a) && (v.gap = a), h(/* @__PURE__ */ Ie.createElement(u, Object.assign({
    ref: n,
    className: C,
    style: v
  }, gm(f, ["justify", "wrap", "align"])), c));
});
process.env.NODE_ENV !== "production" && (If.displayName = "Flex");
const Mo = 100, Nf = Mo / 5, jf = Mo / 2 - Nf / 2, Fi = jf * 2 * Math.PI, Qc = 50, el = (e) => {
  const {
    dotClassName: n,
    style: t,
    hasCircleCls: r
  } = e;
  return /* @__PURE__ */ w.createElement("circle", {
    className: Ge(`${n}-circle`, {
      [`${n}-circle-bg`]: r
    }),
    r: jf,
    cx: Qc,
    cy: Qc,
    strokeWidth: Nf,
    style: t
  });
}, Im = (e) => {
  let {
    percent: n,
    prefixCls: t
  } = e;
  const r = `${t}-dot`, o = `${r}-holder`, i = `${o}-hidden`, [s, a] = w.useState(!1);
  Su(() => {
    n !== 0 && a(!0);
  }, [n !== 0]);
  const c = Math.max(Math.min(n, 100), 0);
  if (!s)
    return null;
  const l = {
    strokeDashoffset: `${Fi / 4}`,
    strokeDasharray: `${Fi * c / 100} ${Fi * (100 - c) / 100}`
  };
  return /* @__PURE__ */ w.createElement("span", {
    className: Ge(o, `${r}-progress`, c <= 0 && i)
  }, /* @__PURE__ */ w.createElement("svg", {
    viewBox: `0 0 ${Mo} ${Mo}`,
    // biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole: progressbar could be readonly
    role: "progressbar",
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": c
  }, /* @__PURE__ */ w.createElement(el, {
    dotClassName: r,
    hasCircleCls: !0
  }), /* @__PURE__ */ w.createElement(el, {
    dotClassName: r,
    style: l
  })));
};
function Nm(e) {
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
  })))), /* @__PURE__ */ w.createElement(Im, {
    prefixCls: n,
    percent: t
  }));
}
function jm(e) {
  const {
    prefixCls: n,
    indicator: t,
    percent: r
  } = e, o = `${n}-dot`;
  return t && /* @__PURE__ */ w.isValidElement(t) ? sm(t, {
    className: Ge(t.props.className, o),
    percent: r
  }) : /* @__PURE__ */ w.createElement(Nm, {
    prefixCls: n,
    percent: r
  });
}
const Lm = new Du("antSpinMove", {
  to: {
    opacity: 1
  }
}), Mm = new Du("antRotate", {
  to: {
    transform: "rotate(405deg)"
  }
}), Dm = (e) => {
  const {
    componentCls: n,
    calc: t
  } = e;
  return {
    [n]: Object.assign(Object.assign({}, nf(e)), {
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
          animationName: Lm,
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
          animationName: Mm,
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
}, Bm = (e) => {
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
}, Fm = Ra("Spin", (e) => {
  const n = li(e, {
    spinDotDefault: e.colorTextDescription
  });
  return [Dm(n)];
}, Bm), zm = 200, tl = [[30, 0.05], [70, 0.03], [96, 0.01]];
function Vm(e, n) {
  const [t, r] = w.useState(0), o = w.useRef(null), i = n === "auto";
  return w.useEffect(() => (i && e && (r(0), o.current = setInterval(() => {
    r((s) => {
      const a = 100 - s;
      for (let c = 0; c < tl.length; c += 1) {
        const [l, u] = tl[c];
        if (s <= l)
          return s + a * u;
      }
      return s;
    });
  }, zm)), () => {
    clearInterval(o.current);
  }), [i, e]), i ? t : n;
}
var Hm = function(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
};
let Lf;
function Um(e, n) {
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
    fullscreen: d = !1,
    indicator: g,
    percent: m
  } = e, p = Hm(e, ["prefixCls", "spinning", "delay", "className", "rootClassName", "size", "tip", "wrapperClassName", "style", "children", "fullscreen", "indicator", "percent"]), {
    getPrefixCls: h,
    direction: S,
    className: b,
    style: y,
    indicator: C
  } = Gu("spin"), v = h("spin", t), [A, E, k] = Fm(v), [L, W] = w.useState(() => r && !Um(r, o)), ee = Vm(L, m);
  w.useEffect(() => {
    if (r) {
      const G = ym(o, () => {
        W(!0);
      });
      return G(), () => {
        var Z;
        (Z = G == null ? void 0 : G.cancel) === null || Z === void 0 || Z.call(G);
      };
    }
    W(!1);
  }, [o, r]);
  const $ = w.useMemo(() => typeof f < "u" && !d, [f, d]);
  if (process.env.NODE_ENV !== "production") {
    const G = tr("Spin");
    process.env.NODE_ENV !== "production" && G(!c || $ || d, "usage", "`tip` only work in nest or fullscreen pattern.");
  }
  const N = Ge(v, b, {
    [`${v}-sm`]: a === "small",
    [`${v}-lg`]: a === "large",
    [`${v}-spinning`]: L,
    [`${v}-show-text`]: !!c,
    [`${v}-rtl`]: S === "rtl"
  }, i, !d && s, E, k), z = Ge(`${v}-container`, {
    [`${v}-blur`]: L
  }), q = (n = g ?? C) !== null && n !== void 0 ? n : Lf, X = Object.assign(Object.assign({}, y), u), J = /* @__PURE__ */ w.createElement("div", Object.assign({}, p, {
    style: X,
    className: N,
    "aria-live": "polite",
    "aria-busy": L
  }), /* @__PURE__ */ w.createElement(jm, {
    prefixCls: v,
    indicator: q,
    percent: ee
  }), c && ($ || d) ? /* @__PURE__ */ w.createElement("div", {
    className: `${v}-text`
  }, c) : null);
  return A($ ? /* @__PURE__ */ w.createElement("div", Object.assign({}, p, {
    className: Ge(`${v}-nested-loading`, l, E, k)
  }), L && /* @__PURE__ */ w.createElement("div", {
    key: "loading"
  }, J), /* @__PURE__ */ w.createElement("div", {
    className: z,
    key: "container"
  }, f)) : d ? /* @__PURE__ */ w.createElement("div", {
    className: Ge(`${v}-fullscreen`, {
      [`${v}-fullscreen-show`]: L
    }, s, E, k)
  }, J) : J);
};
kr.setDefaultIndicator = (e) => {
  Lf = e;
};
process.env.NODE_ENV !== "production" && (kr.displayName = "Spin");
function Mf(e, n) {
  return function() {
    return e.apply(n, arguments);
  };
}
const { toString: qm } = Object.prototype, { getPrototypeOf: Ia } = Object, { iterator: ui, toStringTag: Df } = Symbol, fi = /* @__PURE__ */ ((e) => (n) => {
  const t = qm.call(n);
  return e[t] || (e[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Ct = (e) => (e = e.toLowerCase(), (n) => fi(n) === e), di = (e) => (n) => typeof n === e, { isArray: or } = Array, Dr = di("undefined");
function Wm(e) {
  return e !== null && !Dr(e) && e.constructor !== null && !Dr(e.constructor) && nt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Bf = Ct("ArrayBuffer");
function Xm(e) {
  let n;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? n = ArrayBuffer.isView(e) : n = e && e.buffer && Bf(e.buffer), n;
}
const Ym = di("string"), nt = di("function"), Ff = di("number"), hi = (e) => e !== null && typeof e == "object", $m = (e) => e === !0 || e === !1, _o = (e) => {
  if (fi(e) !== "object")
    return !1;
  const n = Ia(e);
  return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Df in e) && !(ui in e);
}, Gm = Ct("Date"), Km = Ct("File"), Zm = Ct("Blob"), Jm = Ct("FileList"), Qm = (e) => hi(e) && nt(e.pipe), eg = (e) => {
  let n;
  return e && (typeof FormData == "function" && e instanceof FormData || nt(e.append) && ((n = fi(e)) === "formdata" || // detect form-data instance
  n === "object" && nt(e.toString) && e.toString() === "[object FormData]"));
}, tg = Ct("URLSearchParams"), [ng, rg, og, ig] = ["ReadableStream", "Request", "Response", "Headers"].map(Ct), sg = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function zr(e, n, { allOwnKeys: t = !1 } = {}) {
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
function zf(e, n) {
  n = n.toLowerCase();
  const t = Object.keys(e);
  let r = t.length, o;
  for (; r-- > 0; )
    if (o = t[r], n === o.toLowerCase())
      return o;
  return null;
}
const yn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Vf = (e) => !Dr(e) && e !== yn;
function Hs() {
  const { caseless: e } = Vf(this) && this || {}, n = {}, t = (r, o) => {
    const i = e && zf(n, o) || o;
    _o(n[i]) && _o(r) ? n[i] = Hs(n[i], r) : _o(r) ? n[i] = Hs({}, r) : or(r) ? n[i] = r.slice() : n[i] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && zr(arguments[r], t);
  return n;
}
const ag = (e, n, t, { allOwnKeys: r } = {}) => (zr(n, (o, i) => {
  t && nt(o) ? e[i] = Mf(o, t) : e[i] = o;
}, { allOwnKeys: r }), e), cg = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), lg = (e, n, t, r) => {
  e.prototype = Object.create(n.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: n.prototype
  }), t && Object.assign(e.prototype, t);
}, ug = (e, n, t, r) => {
  let o, i, s;
  const a = {};
  if (n = n || {}, e == null) return n;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      s = o[i], (!r || r(s, e, n)) && !a[s] && (n[s] = e[s], a[s] = !0);
    e = t !== !1 && Ia(e);
  } while (e && (!t || t(e, n)) && e !== Object.prototype);
  return n;
}, fg = (e, n, t) => {
  e = String(e), (t === void 0 || t > e.length) && (t = e.length), t -= n.length;
  const r = e.indexOf(n, t);
  return r !== -1 && r === t;
}, dg = (e) => {
  if (!e) return null;
  if (or(e)) return e;
  let n = e.length;
  if (!Ff(n)) return null;
  const t = new Array(n);
  for (; n-- > 0; )
    t[n] = e[n];
  return t;
}, hg = /* @__PURE__ */ ((e) => (n) => e && n instanceof e)(typeof Uint8Array < "u" && Ia(Uint8Array)), xg = (e, n) => {
  const r = (e && e[ui]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const i = o.value;
    n.call(e, i[0], i[1]);
  }
}, pg = (e, n) => {
  let t;
  const r = [];
  for (; (t = e.exec(n)) !== null; )
    r.push(t);
  return r;
}, mg = Ct("HTMLFormElement"), gg = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(t, r, o) {
    return r.toUpperCase() + o;
  }
), nl = (({ hasOwnProperty: e }) => (n, t) => e.call(n, t))(Object.prototype), vg = Ct("RegExp"), Hf = (e, n) => {
  const t = Object.getOwnPropertyDescriptors(e), r = {};
  zr(t, (o, i) => {
    let s;
    (s = n(o, i, e)) !== !1 && (r[i] = s || o);
  }), Object.defineProperties(e, r);
}, yg = (e) => {
  Hf(e, (n, t) => {
    if (nt(e) && ["arguments", "caller", "callee"].indexOf(t) !== -1)
      return !1;
    const r = e[t];
    if (nt(r)) {
      if (n.enumerable = !1, "writable" in n) {
        n.writable = !1;
        return;
      }
      n.set || (n.set = () => {
        throw Error("Can not rewrite read-only method '" + t + "'");
      });
    }
  });
}, bg = (e, n) => {
  const t = {}, r = (o) => {
    o.forEach((i) => {
      t[i] = !0;
    });
  };
  return or(e) ? r(e) : r(String(e).split(n)), t;
}, Sg = () => {
}, wg = (e, n) => e != null && Number.isFinite(e = +e) ? e : n;
function Eg(e) {
  return !!(e && nt(e.append) && e[Df] === "FormData" && e[ui]);
}
const _g = (e) => {
  const n = new Array(10), t = (r, o) => {
    if (hi(r)) {
      if (n.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        n[o] = r;
        const i = or(r) ? [] : {};
        return zr(r, (s, a) => {
          const c = t(s, o + 1);
          !Dr(c) && (i[a] = c);
        }), n[o] = void 0, i;
      }
    }
    return r;
  };
  return t(e, 0);
}, Cg = Ct("AsyncFunction"), Ag = (e) => e && (hi(e) || nt(e)) && nt(e.then) && nt(e.catch), Uf = ((e, n) => e ? setImmediate : n ? ((t, r) => (yn.addEventListener("message", ({ source: o, data: i }) => {
  o === yn && i === t && r.length && r.shift()();
}, !1), (o) => {
  r.push(o), yn.postMessage(t, "*");
}))(`axios@${Math.random()}`, []) : (t) => setTimeout(t))(
  typeof setImmediate == "function",
  nt(yn.postMessage)
), Tg = typeof queueMicrotask < "u" ? queueMicrotask.bind(yn) : typeof process < "u" && process.nextTick || Uf, Og = (e) => e != null && nt(e[ui]), _ = {
  isArray: or,
  isArrayBuffer: Bf,
  isBuffer: Wm,
  isFormData: eg,
  isArrayBufferView: Xm,
  isString: Ym,
  isNumber: Ff,
  isBoolean: $m,
  isObject: hi,
  isPlainObject: _o,
  isReadableStream: ng,
  isRequest: rg,
  isResponse: og,
  isHeaders: ig,
  isUndefined: Dr,
  isDate: Gm,
  isFile: Km,
  isBlob: Zm,
  isRegExp: vg,
  isFunction: nt,
  isStream: Qm,
  isURLSearchParams: tg,
  isTypedArray: hg,
  isFileList: Jm,
  forEach: zr,
  merge: Hs,
  extend: ag,
  trim: sg,
  stripBOM: cg,
  inherits: lg,
  toFlatObject: ug,
  kindOf: fi,
  kindOfTest: Ct,
  endsWith: fg,
  toArray: dg,
  forEachEntry: xg,
  matchAll: pg,
  isHTMLForm: mg,
  hasOwnProperty: nl,
  hasOwnProp: nl,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Hf,
  freezeMethods: yg,
  toObjectSet: bg,
  toCamelCase: gg,
  noop: Sg,
  toFiniteNumber: wg,
  findKey: zf,
  global: yn,
  isContextDefined: Vf,
  isSpecCompliantForm: Eg,
  toJSONObject: _g,
  isAsyncFn: Cg,
  isThenable: Ag,
  setImmediate: Uf,
  asap: Tg,
  isIterable: Og
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
const qf = Q.prototype, Wf = {};
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
  Wf[e] = { value: e };
});
Object.defineProperties(Q, Wf);
Object.defineProperty(qf, "isAxiosError", { value: !0 });
Q.from = (e, n, t, r, o, i) => {
  const s = Object.create(qf);
  return _.toFlatObject(e, s, function(c) {
    return c !== Error.prototype;
  }, (a) => a !== "isAxiosError"), Q.call(s, e.message, n, t, r, o), s.cause = e, s.name = e.name, i && Object.assign(s, i), s;
};
const Rg = null;
function Us(e) {
  return _.isPlainObject(e) || _.isArray(e);
}
function Xf(e) {
  return _.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function rl(e, n, t) {
  return e ? e.concat(n).map(function(o, i) {
    return o = Xf(o), !t && i ? "[" + o + "]" : o;
  }).join(t ? "." : "") : n;
}
function kg(e) {
  return _.isArray(e) && !e.some(Us);
}
const Pg = _.toFlatObject(_, {}, null, function(n) {
  return /^is[A-Z]/.test(n);
});
function xi(e, n, t) {
  if (!_.isObject(e))
    throw new TypeError("target must be an object");
  n = n || new FormData(), t = _.toFlatObject(t, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(p, h) {
    return !_.isUndefined(h[p]);
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
  function u(m, p, h) {
    let S = m;
    if (m && !h && typeof m == "object") {
      if (_.endsWith(p, "{}"))
        p = r ? p : p.slice(0, -2), m = JSON.stringify(m);
      else if (_.isArray(m) && kg(m) || (_.isFileList(m) || _.endsWith(p, "[]")) && (S = _.toArray(m)))
        return p = Xf(p), S.forEach(function(y, C) {
          !(_.isUndefined(y) || y === null) && n.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? rl([p], C, i) : s === null ? p : p + "[]",
            l(y)
          );
        }), !1;
    }
    return Us(m) ? !0 : (n.append(rl(h, p, i), l(m)), !1);
  }
  const f = [], d = Object.assign(Pg, {
    defaultVisitor: u,
    convertValue: l,
    isVisitable: Us
  });
  function g(m, p) {
    if (!_.isUndefined(m)) {
      if (f.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + p.join("."));
      f.push(m), _.forEach(m, function(S, b) {
        (!(_.isUndefined(S) || S === null) && o.call(
          n,
          S,
          _.isString(b) ? b.trim() : b,
          p,
          d
        )) === !0 && g(S, p ? p.concat(b) : [b]);
      }), f.pop();
    }
  }
  if (!_.isObject(e))
    throw new TypeError("data must be an object");
  return g(e), n;
}
function ol(e) {
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
function Na(e, n) {
  this._pairs = [], e && xi(e, this, n);
}
const Yf = Na.prototype;
Yf.append = function(n, t) {
  this._pairs.push([n, t]);
};
Yf.toString = function(n) {
  const t = n ? function(r) {
    return n.call(this, r, ol);
  } : ol;
  return this._pairs.map(function(o) {
    return t(o[0]) + "=" + t(o[1]);
  }, "").join("&");
};
function Ig(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function $f(e, n, t) {
  if (!n)
    return e;
  const r = t && t.encode || Ig;
  _.isFunction(t) && (t = {
    serialize: t
  });
  const o = t && t.serialize;
  let i;
  if (o ? i = o(n, t) : i = _.isURLSearchParams(n) ? n.toString() : new Na(n, t).toString(r), i) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class il {
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
const Gf = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Ng = typeof URLSearchParams < "u" ? URLSearchParams : Na, jg = typeof FormData < "u" ? FormData : null, Lg = typeof Blob < "u" ? Blob : null, Mg = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Ng,
    FormData: jg,
    Blob: Lg
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, ja = typeof window < "u" && typeof document < "u", qs = typeof navigator == "object" && navigator || void 0, Dg = ja && (!qs || ["ReactNative", "NativeScript", "NS"].indexOf(qs.product) < 0), Bg = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Fg = ja && window.location.href || "http://localhost", zg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: ja,
  hasStandardBrowserEnv: Dg,
  hasStandardBrowserWebWorkerEnv: Bg,
  navigator: qs,
  origin: Fg
}, Symbol.toStringTag, { value: "Module" })), $e = {
  ...zg,
  ...Mg
};
function Vg(e, n) {
  return xi(e, new $e.classes.URLSearchParams(), Object.assign({
    visitor: function(t, r, o, i) {
      return $e.isNode && _.isBuffer(t) ? (this.append(r, t.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, n));
}
function Hg(e) {
  return _.matchAll(/\w+|\[(\w*)]/g, e).map((n) => n[0] === "[]" ? "" : n[1] || n[0]);
}
function Ug(e) {
  const n = {}, t = Object.keys(e);
  let r;
  const o = t.length;
  let i;
  for (r = 0; r < o; r++)
    i = t[r], n[i] = e[i];
  return n;
}
function Kf(e) {
  function n(t, r, o, i) {
    let s = t[i++];
    if (s === "__proto__") return !0;
    const a = Number.isFinite(+s), c = i >= t.length;
    return s = !s && _.isArray(o) ? o.length : s, c ? (_.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !a) : ((!o[s] || !_.isObject(o[s])) && (o[s] = []), n(t, r, o[s], i) && _.isArray(o[s]) && (o[s] = Ug(o[s])), !a);
  }
  if (_.isFormData(e) && _.isFunction(e.entries)) {
    const t = {};
    return _.forEachEntry(e, (r, o) => {
      n(Hg(r), o, t, 0);
    }), t;
  }
  return null;
}
function qg(e, n, t) {
  if (_.isString(e))
    try {
      return (n || JSON.parse)(e), _.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (t || JSON.stringify)(e);
}
const Vr = {
  transitional: Gf,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(n, t) {
    const r = t.getContentType() || "", o = r.indexOf("application/json") > -1, i = _.isObject(n);
    if (i && _.isHTMLForm(n) && (n = new FormData(n)), _.isFormData(n))
      return o ? JSON.stringify(Kf(n)) : n;
    if (_.isArrayBuffer(n) || _.isBuffer(n) || _.isStream(n) || _.isFile(n) || _.isBlob(n) || _.isReadableStream(n))
      return n;
    if (_.isArrayBufferView(n))
      return n.buffer;
    if (_.isURLSearchParams(n))
      return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), n.toString();
    let a;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Vg(n, this.formSerializer).toString();
      if ((a = _.isFileList(n)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return xi(
          a ? { "files[]": n } : n,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return i || o ? (t.setContentType("application/json", !1), qg(n)) : n;
  }],
  transformResponse: [function(n) {
    const t = this.transitional || Vr.transitional, r = t && t.forcedJSONParsing, o = this.responseType === "json";
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
_.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Vr.headers[e] = {};
});
const Wg = _.toObjectSet([
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
]), Xg = (e) => {
  const n = {};
  let t, r, o;
  return e && e.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), t = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!t || n[t] && Wg[t]) && (t === "set-cookie" ? n[t] ? n[t].push(r) : n[t] = [r] : n[t] = n[t] ? n[t] + ", " + r : r);
  }), n;
}, sl = Symbol("internals");
function pr(e) {
  return e && String(e).trim().toLowerCase();
}
function Co(e) {
  return e === !1 || e == null ? e : _.isArray(e) ? e.map(Co) : String(e);
}
function Yg(e) {
  const n = /* @__PURE__ */ Object.create(null), t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = t.exec(e); )
    n[r[1]] = r[2];
  return n;
}
const $g = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function zi(e, n, t, r, o) {
  if (_.isFunction(r))
    return r.call(this, n, t);
  if (o && (n = t), !!_.isString(n)) {
    if (_.isString(r))
      return n.indexOf(r) !== -1;
    if (_.isRegExp(r))
      return r.test(n);
  }
}
function Gg(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (n, t, r) => t.toUpperCase() + r);
}
function Kg(e, n) {
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
let rt = class {
  constructor(n) {
    n && this.set(n);
  }
  set(n, t, r) {
    const o = this;
    function i(a, c, l) {
      const u = pr(c);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const f = _.findKey(o, u);
      (!f || o[f] === void 0 || l === !0 || l === void 0 && o[f] !== !1) && (o[f || c] = Co(a));
    }
    const s = (a, c) => _.forEach(a, (l, u) => i(l, u, c));
    if (_.isPlainObject(n) || n instanceof this.constructor)
      s(n, t);
    else if (_.isString(n) && (n = n.trim()) && !$g(n))
      s(Xg(n), t);
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
    if (n = pr(n), n) {
      const r = _.findKey(this, n);
      if (r) {
        const o = this[r];
        if (!t)
          return o;
        if (t === !0)
          return Yg(o);
        if (_.isFunction(t))
          return t.call(this, o, r);
        if (_.isRegExp(t))
          return t.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(n, t) {
    if (n = pr(n), n) {
      const r = _.findKey(this, n);
      return !!(r && this[r] !== void 0 && (!t || zi(this, this[r], r, t)));
    }
    return !1;
  }
  delete(n, t) {
    const r = this;
    let o = !1;
    function i(s) {
      if (s = pr(s), s) {
        const a = _.findKey(r, s);
        a && (!t || zi(r, r[a], a, t)) && (delete r[a], o = !0);
      }
    }
    return _.isArray(n) ? n.forEach(i) : i(n), o;
  }
  clear(n) {
    const t = Object.keys(this);
    let r = t.length, o = !1;
    for (; r--; ) {
      const i = t[r];
      (!n || zi(this, this[i], i, n, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(n) {
    const t = this, r = {};
    return _.forEach(this, (o, i) => {
      const s = _.findKey(r, i);
      if (s) {
        t[s] = Co(o), delete t[i];
        return;
      }
      const a = n ? Gg(i) : String(i).trim();
      a !== i && delete t[i], t[a] = Co(o), r[a] = !0;
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
    const r = (this[sl] = this[sl] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(s) {
      const a = pr(s);
      r[a] || (Kg(o, s), r[a] = !0);
    }
    return _.isArray(n) ? n.forEach(i) : i(n), this;
  }
};
rt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
_.reduceDescriptors(rt.prototype, ({ value: e }, n) => {
  let t = n[0].toUpperCase() + n.slice(1);
  return {
    get: () => e,
    set(r) {
      this[t] = r;
    }
  };
});
_.freezeMethods(rt);
function Vi(e, n) {
  const t = this || Vr, r = n || t, o = rt.from(r.headers);
  let i = r.data;
  return _.forEach(e, function(a) {
    i = a.call(t, i, o.normalize(), n ? n.status : void 0);
  }), o.normalize(), i;
}
function Zf(e) {
  return !!(e && e.__CANCEL__);
}
function ir(e, n, t) {
  Q.call(this, e ?? "canceled", Q.ERR_CANCELED, n, t), this.name = "CanceledError";
}
_.inherits(ir, Q, {
  __CANCEL__: !0
});
function Jf(e, n, t) {
  const r = t.config.validateStatus;
  !t.status || !r || r(t.status) ? e(t) : n(new Q(
    "Request failed with status code " + t.status,
    [Q.ERR_BAD_REQUEST, Q.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],
    t.config,
    t.request,
    t
  ));
}
function Zg(e) {
  const n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return n && n[1] || "";
}
function Jg(e, n) {
  e = e || 10;
  const t = new Array(e), r = new Array(e);
  let o = 0, i = 0, s;
  return n = n !== void 0 ? n : 1e3, function(c) {
    const l = Date.now(), u = r[i];
    s || (s = l), t[o] = c, r[o] = l;
    let f = i, d = 0;
    for (; f !== o; )
      d += t[f++], f = f % e;
    if (o = (o + 1) % e, o === i && (i = (i + 1) % e), l - s < n)
      return;
    const g = u && l - u;
    return g ? Math.round(d * 1e3 / g) : void 0;
  };
}
function Qg(e, n) {
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
const Do = (e, n, t = 3) => {
  let r = 0;
  const o = Jg(50, 250);
  return Qg((i) => {
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
}, al = (e, n) => {
  const t = e != null;
  return [(r) => n[0]({
    lengthComputable: t,
    total: e,
    loaded: r
  }), n[1]];
}, cl = (e) => (...n) => _.asap(() => e(...n)), ev = $e.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, n) => (t) => (t = new URL(t, $e.origin), e.protocol === t.protocol && e.host === t.host && (n || e.port === t.port)))(
  new URL($e.origin),
  $e.navigator && /(msie|trident)/i.test($e.navigator.userAgent)
) : () => !0, tv = $e.hasStandardBrowserEnv ? (
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
function nv(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function rv(e, n) {
  return n ? e.replace(/\/?\/$/, "") + "/" + n.replace(/^\/+/, "") : e;
}
function Qf(e, n, t) {
  let r = !nv(n);
  return e && (r || t == !1) ? rv(e, n) : n;
}
const ll = (e) => e instanceof rt ? { ...e } : e;
function On(e, n) {
  n = n || {};
  const t = {};
  function r(l, u, f, d) {
    return _.isPlainObject(l) && _.isPlainObject(u) ? _.merge.call({ caseless: d }, l, u) : _.isPlainObject(u) ? _.merge({}, u) : _.isArray(u) ? u.slice() : u;
  }
  function o(l, u, f, d) {
    if (_.isUndefined(u)) {
      if (!_.isUndefined(l))
        return r(void 0, l, f, d);
    } else return r(l, u, f, d);
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
    headers: (l, u, f) => o(ll(l), ll(u), f, !0)
  };
  return _.forEach(Object.keys(Object.assign({}, e, n)), function(u) {
    const f = c[u] || o, d = f(e[u], n[u], u);
    _.isUndefined(d) && f !== a || (t[u] = d);
  }), t;
}
const e0 = (e) => {
  const n = On({}, e);
  let { data: t, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: i, headers: s, auth: a } = n;
  n.headers = s = rt.from(s), n.url = $f(Qf(n.baseURL, n.url, n.allowAbsoluteUrls), e.params, e.paramsSerializer), a && s.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let c;
  if (_.isFormData(t)) {
    if ($e.hasStandardBrowserEnv || $e.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if ((c = s.getContentType()) !== !1) {
      const [l, ...u] = c ? c.split(";").map((f) => f.trim()).filter(Boolean) : [];
      s.setContentType([l || "multipart/form-data", ...u].join("; "));
    }
  }
  if ($e.hasStandardBrowserEnv && (r && _.isFunction(r) && (r = r(n)), r || r !== !1 && ev(n.url))) {
    const l = o && i && tv.read(i);
    l && s.set(o, l);
  }
  return n;
}, ov = typeof XMLHttpRequest < "u", iv = ov && function(e) {
  return new Promise(function(t, r) {
    const o = e0(e);
    let i = o.data;
    const s = rt.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: c, onDownloadProgress: l } = o, u, f, d, g, m;
    function p() {
      g && g(), m && m(), o.cancelToken && o.cancelToken.unsubscribe(u), o.signal && o.signal.removeEventListener("abort", u);
    }
    let h = new XMLHttpRequest();
    h.open(o.method.toUpperCase(), o.url, !0), h.timeout = o.timeout;
    function S() {
      if (!h)
        return;
      const y = rt.from(
        "getAllResponseHeaders" in h && h.getAllResponseHeaders()
      ), v = {
        data: !a || a === "text" || a === "json" ? h.responseText : h.response,
        status: h.status,
        statusText: h.statusText,
        headers: y,
        config: e,
        request: h
      };
      Jf(function(E) {
        t(E), p();
      }, function(E) {
        r(E), p();
      }, v), h = null;
    }
    "onloadend" in h ? h.onloadend = S : h.onreadystatechange = function() {
      !h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.indexOf("file:") === 0) || setTimeout(S);
    }, h.onabort = function() {
      h && (r(new Q("Request aborted", Q.ECONNABORTED, e, h)), h = null);
    }, h.onerror = function() {
      r(new Q("Network Error", Q.ERR_NETWORK, e, h)), h = null;
    }, h.ontimeout = function() {
      let C = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const v = o.transitional || Gf;
      o.timeoutErrorMessage && (C = o.timeoutErrorMessage), r(new Q(
        C,
        v.clarifyTimeoutError ? Q.ETIMEDOUT : Q.ECONNABORTED,
        e,
        h
      )), h = null;
    }, i === void 0 && s.setContentType(null), "setRequestHeader" in h && _.forEach(s.toJSON(), function(C, v) {
      h.setRequestHeader(v, C);
    }), _.isUndefined(o.withCredentials) || (h.withCredentials = !!o.withCredentials), a && a !== "json" && (h.responseType = o.responseType), l && ([d, m] = Do(l, !0), h.addEventListener("progress", d)), c && h.upload && ([f, g] = Do(c), h.upload.addEventListener("progress", f), h.upload.addEventListener("loadend", g)), (o.cancelToken || o.signal) && (u = (y) => {
      h && (r(!y || y.type ? new ir(null, e, h) : y), h.abort(), h = null);
    }, o.cancelToken && o.cancelToken.subscribe(u), o.signal && (o.signal.aborted ? u() : o.signal.addEventListener("abort", u)));
    const b = Zg(o.url);
    if (b && $e.protocols.indexOf(b) === -1) {
      r(new Q("Unsupported protocol " + b + ":", Q.ERR_BAD_REQUEST, e));
      return;
    }
    h.send(i || null);
  });
}, sv = (e, n) => {
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
    return c.unsubscribe = () => _.asap(a), c;
  }
}, av = function* (e, n) {
  let t = e.byteLength;
  if (t < n) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < t; )
    o = r + n, yield e.slice(r, o), r = o;
}, cv = async function* (e, n) {
  for await (const t of lv(e))
    yield* av(t, n);
}, lv = async function* (e) {
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
}, ul = (e, n, t, r) => {
  const o = cv(e, n);
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
          let d = i += f;
          t(d);
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
}, pi = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", t0 = pi && typeof ReadableStream == "function", uv = pi && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (n) => e.encode(n))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), n0 = (e, ...n) => {
  try {
    return !!e(...n);
  } catch {
    return !1;
  }
}, fv = t0 && n0(() => {
  let e = !1;
  const n = new Request($e.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !n;
}), fl = 64 * 1024, Ws = t0 && n0(() => _.isReadableStream(new Response("").body)), Bo = {
  stream: Ws && ((e) => e.body)
};
pi && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((n) => {
    !Bo[n] && (Bo[n] = _.isFunction(e[n]) ? (t) => t[n]() : (t, r) => {
      throw new Q(`Response type '${n}' is not supported`, Q.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const dv = async (e) => {
  if (e == null)
    return 0;
  if (_.isBlob(e))
    return e.size;
  if (_.isSpecCompliantForm(e))
    return (await new Request($e.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (_.isArrayBufferView(e) || _.isArrayBuffer(e))
    return e.byteLength;
  if (_.isURLSearchParams(e) && (e = e + ""), _.isString(e))
    return (await uv(e)).byteLength;
}, hv = async (e, n) => {
  const t = _.toFiniteNumber(e.getContentLength());
  return t ?? dv(n);
}, xv = pi && (async (e) => {
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
    fetchOptions: d
  } = e0(e);
  l = l ? (l + "").toLowerCase() : "text";
  let g = sv([o, i && i.toAbortSignal()], s), m;
  const p = g && g.unsubscribe && (() => {
    g.unsubscribe();
  });
  let h;
  try {
    if (c && fv && t !== "get" && t !== "head" && (h = await hv(u, r)) !== 0) {
      let v = new Request(n, {
        method: "POST",
        body: r,
        duplex: "half"
      }), A;
      if (_.isFormData(r) && (A = v.headers.get("content-type")) && u.setContentType(A), v.body) {
        const [E, k] = al(
          h,
          Do(cl(c))
        );
        r = ul(v.body, fl, E, k);
      }
    }
    _.isString(f) || (f = f ? "include" : "omit");
    const S = "credentials" in Request.prototype;
    m = new Request(n, {
      ...d,
      signal: g,
      method: t.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: S ? f : void 0
    });
    let b = await fetch(m);
    const y = Ws && (l === "stream" || l === "response");
    if (Ws && (a || y && p)) {
      const v = {};
      ["status", "statusText", "headers"].forEach((L) => {
        v[L] = b[L];
      });
      const A = _.toFiniteNumber(b.headers.get("content-length")), [E, k] = a && al(
        A,
        Do(cl(a), !0)
      ) || [];
      b = new Response(
        ul(b.body, fl, E, () => {
          k && k(), p && p();
        }),
        v
      );
    }
    l = l || "text";
    let C = await Bo[_.findKey(Bo, l) || "text"](b, e);
    return !y && p && p(), await new Promise((v, A) => {
      Jf(v, A, {
        data: C,
        headers: rt.from(b.headers),
        status: b.status,
        statusText: b.statusText,
        config: e,
        request: m
      });
    });
  } catch (S) {
    throw p && p(), S && S.name === "TypeError" && /Load failed|fetch/i.test(S.message) ? Object.assign(
      new Q("Network Error", Q.ERR_NETWORK, e, m),
      {
        cause: S.cause || S
      }
    ) : Q.from(S, S && S.code, e, m);
  }
}), Xs = {
  http: Rg,
  xhr: iv,
  fetch: xv
};
_.forEach(Xs, (e, n) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: n });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: n });
  }
});
const dl = (e) => `- ${e}`, pv = (e) => _.isFunction(e) || e === null || e === !1, r0 = {
  getAdapter: (e) => {
    e = _.isArray(e) ? e : [e];
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
` + i.map(dl).join(`
`) : " " + dl(i[0]) : "as no adapter specified";
      throw new Q(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Xs
};
function Hi(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ir(null, e);
}
function hl(e) {
  return Hi(e), e.headers = rt.from(e.headers), e.data = Vi.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), r0.getAdapter(e.adapter || Vr.adapter)(e).then(function(r) {
    return Hi(e), r.data = Vi.call(
      e,
      e.transformResponse,
      r
    ), r.headers = rt.from(r.headers), r;
  }, function(r) {
    return Zf(r) || (Hi(e), r && r.response && (r.response.data = Vi.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = rt.from(r.response.headers))), Promise.reject(r);
  });
}
const o0 = "1.9.0", mi = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, n) => {
  mi[e] = function(r) {
    return typeof r === e || "a" + (n < 1 ? "n " : " ") + e;
  };
});
const xl = {};
mi.transitional = function(n, t, r) {
  function o(i, s) {
    return "[Axios v" + o0 + "] Transitional option '" + i + "'" + s + (r ? ". " + r : "");
  }
  return (i, s, a) => {
    if (n === !1)
      throw new Q(
        o(s, " has been removed" + (t ? " in " + t : "")),
        Q.ERR_DEPRECATED
      );
    return t && !xl[s] && (xl[s] = !0, console.warn(
      o(
        s,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), n ? n(i, s, a) : !0;
  };
};
mi.spelling = function(n) {
  return (t, r) => (console.warn(`${r} is likely a misspelling of ${n}`), !0);
};
function mv(e, n, t) {
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
const Ao = {
  assertOptions: mv,
  validators: mi
}, Pt = Ao.validators;
let Cn = class {
  constructor(n) {
    this.defaults = n || {}, this.interceptors = {
      request: new il(),
      response: new il()
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
    typeof n == "string" ? (t = t || {}, t.url = n) : t = n || {}, t = On(this.defaults, t);
    const { transitional: r, paramsSerializer: o, headers: i } = t;
    r !== void 0 && Ao.assertOptions(r, {
      silentJSONParsing: Pt.transitional(Pt.boolean),
      forcedJSONParsing: Pt.transitional(Pt.boolean),
      clarifyTimeoutError: Pt.transitional(Pt.boolean)
    }, !1), o != null && (_.isFunction(o) ? t.paramsSerializer = {
      serialize: o
    } : Ao.assertOptions(o, {
      encode: Pt.function,
      serialize: Pt.function
    }, !0)), t.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : t.allowAbsoluteUrls = !0), Ao.assertOptions(t, {
      baseUrl: Pt.spelling("baseURL"),
      withXsrfToken: Pt.spelling("withXSRFToken")
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
    ), t.headers = rt.concat(s, i);
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function(p) {
      typeof p.runWhen == "function" && p.runWhen(t) === !1 || (c = c && p.synchronous, a.unshift(p.fulfilled, p.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(p) {
      l.push(p.fulfilled, p.rejected);
    });
    let u, f = 0, d;
    if (!c) {
      const m = [hl.bind(this), void 0];
      for (m.unshift.apply(m, a), m.push.apply(m, l), d = m.length, u = Promise.resolve(t); f < d; )
        u = u.then(m[f++], m[f++]);
      return u;
    }
    d = a.length;
    let g = t;
    for (f = 0; f < d; ) {
      const m = a[f++], p = a[f++];
      try {
        g = m(g);
      } catch (h) {
        p.call(this, h);
        break;
      }
    }
    try {
      u = hl.call(this, g);
    } catch (m) {
      return Promise.reject(m);
    }
    for (f = 0, d = l.length; f < d; )
      u = u.then(l[f++], l[f++]);
    return u;
  }
  getUri(n) {
    n = On(this.defaults, n);
    const t = Qf(n.baseURL, n.url, n.allowAbsoluteUrls);
    return $f(t, n.params, n.paramsSerializer);
  }
};
_.forEach(["delete", "get", "head", "options"], function(n) {
  Cn.prototype[n] = function(t, r) {
    return this.request(On(r || {}, {
      method: n,
      url: t,
      data: (r || {}).data
    }));
  };
});
_.forEach(["post", "put", "patch"], function(n) {
  function t(r) {
    return function(i, s, a) {
      return this.request(On(a || {}, {
        method: n,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: s
      }));
    };
  }
  Cn.prototype[n] = t(), Cn.prototype[n + "Form"] = t(!0);
});
let gv = class i0 {
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
      token: new i0(function(o) {
        n = o;
      }),
      cancel: n
    };
  }
};
function vv(e) {
  return function(t) {
    return e.apply(null, t);
  };
}
function yv(e) {
  return _.isObject(e) && e.isAxiosError === !0;
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
function s0(e) {
  const n = new Cn(e), t = Mf(Cn.prototype.request, n);
  return _.extend(t, Cn.prototype, n, { allOwnKeys: !0 }), _.extend(t, n, null, { allOwnKeys: !0 }), t.create = function(o) {
    return s0(On(e, o));
  }, t;
}
const Oe = s0(Vr);
Oe.Axios = Cn;
Oe.CanceledError = ir;
Oe.CancelToken = gv;
Oe.isCancel = Zf;
Oe.VERSION = o0;
Oe.toFormData = xi;
Oe.AxiosError = Q;
Oe.Cancel = Oe.CanceledError;
Oe.all = function(n) {
  return Promise.all(n);
};
Oe.spread = vv;
Oe.isAxiosError = yv;
Oe.mergeConfig = On;
Oe.AxiosHeaders = rt;
Oe.formToJSON = (e) => Kf(_.isHTMLForm(e) ? new FormData(e) : e);
Oe.getAdapter = r0.getAdapter;
Oe.HttpStatusCode = Ys;
Oe.default = Oe;
const {
  Axios: sy,
  AxiosError: ay,
  CanceledError: cy,
  isCancel: ly,
  CancelToken: uy,
  VERSION: fy,
  all: dy,
  Cancel: hy,
  isAxiosError: xy,
  spread: py,
  toFormData: my,
  AxiosHeaders: gy,
  HttpStatusCode: vy,
  formToJSON: yy,
  getAdapter: by,
  mergeConfig: Sy
} = Oe, zn = Xt;
(function(e, n) {
  const t = Xt, r = e();
  for (; ; )
    try {
      if (-parseInt(t(124)) / 1 * (-parseInt(t(132)) / 2) + parseInt(t(109)) / 3 * (-parseInt(t(130)) / 4) + -parseInt(t(140)) / 5 + -parseInt(t(110)) / 6 + parseInt(t(112)) / 7 * (-parseInt(t(138)) / 8) + parseInt(t(122)) / 9 * (parseInt(t(142)) / 10) + -parseInt(t(133)) / 11 * (-parseInt(t(111)) / 12) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Fo, 1 * -1671977 + 585203 * -3 + 4346221 * 1);
const bv = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = Xt;
      if (t) {
        const i = t[o(119)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), $s = bv(void 0, function() {
  const e = Xt;
  return $s[e(101)]()[e(136)]("(((.+)+)+)+$")[e(101)]()[e(118) + "r"]($s)[e(136)](e(103) + "+$");
});
function Fo() {
  const e = ["console", "length", "PUT", "56ugQPjU", "{}.constru", "2228KxPtbN", "6259STdQqx", "data", "http://192", "search", "nction() ", "5552XytrEq", "message", "3460515uftrch", "info", "11447010FeLAtm", "__proto__", 'rn this")(', "toString", "table", "(((.+)+)+)", "response", "POST", "DELETE", "return (fu", ":3000/api/", "290265lIoUpn", "5826270MMCCkq", "69360hfEWZz", "10689OsBLPt", "PATCH", "v1/client", "error", "exception", "GET", "constructo", "apply", 'ctor("retu', "Content-Ty", "9aDMRfA", "params", "505VddAIH", "applicatio", "bind"];
  return Fo = function() {
    return e;
  }, Fo();
}
$s();
const mr = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = Xt;
      if (t) {
        const i = t[o(119)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), Sv = mr(void 0, function() {
  const e = Xt, n = function() {
    const i = Xt;
    let s;
    try {
      s = Function(i(107) + i(137) + (i(131) + i(120) + i(100) + " )") + ");")();
    } catch {
      s = window;
    }
    return s;
  }, t = n(), r = t[e(127)] = t[e(127)] || {}, o = ["log", "warn", e(141), e(115), e(116), e(102), "trace"];
  for (let i = -142 * -45 + 9215 + -15605; i < o[e(128)]; i++) {
    const s = mr[e(118) + "r"].prototype[e(126)](mr), a = o[i], c = r[a] || s;
    s[e(143)] = mr[e(126)](mr), s[e(101)] = c[e(101)].bind(c), r[a] = s;
  }
});
function Xt(e, n) {
  const t = Fo();
  return Xt = function(r, o) {
    return r = r - (-1 * 3589 + 3 * 1229 + 2), t[r];
  }, Xt(e, n);
}
Sv();
zn(135) + "" + zn(108) + zn(114);
Oe.defaults.withCredentials = !0;
const wv = async (e) => {
  var t, r, o, i;
  const n = zn;
  try {
    return (await Oe(e)).data;
  } catch (s) {
    throw ((r = (t = s[n(104)]) == null ? void 0 : t[n(134)]) == null ? void 0 : r[n(139)]) || ((i = (o = s[n(104)]) == null ? void 0 : o[n(134)]) == null ? void 0 : i[n(115)]) || s.message;
  }
}, Ev = {};
Ev[zn(121) + "pe"] = zn(125) + "n/json";
const Te = on;
(function(e, n) {
  const t = on, r = e();
  for (; ; )
    try {
      if (-parseInt(t(481)) / 1 + parseInt(t(461)) / 2 * (parseInt(t(476)) / 3) + parseInt(t(463)) / 4 + parseInt(t(452)) / 5 * (-parseInt(t(462)) / 6) + -parseInt(t(475)) / 7 * (parseInt(t(467)) / 8) + -parseInt(t(451)) / 9 + parseInt(t(482)) / 10 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(zo, 257286 + -16 * 19811 + 282883);
const _v = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      if (t) {
        const o = t.apply(n, arguments);
        return t = null, o;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), Gs = _v(void 0, function() {
  const e = on;
  return Gs[e(478)]()[e(460)](e(446) + "+$")[e(478)]()[e(480) + "r"](Gs)[e(460)](e(446) + "+$");
});
Gs();
const gr = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = on;
      if (t) {
        const i = t[o(444)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), Cv = gr(void 0, function() {
  const e = on, n = function() {
    const i = on;
    let s;
    try {
      s = Function(i(468) + i(477) + (i(474) + i(453) + i(464) + " )") + ");")();
    } catch {
      s = window;
    }
    return s;
  }, t = n(), r = t[e(447)] = t.console || {}, o = [e(479), e(484), e(445), e(487), e(448), e(442), e(488)];
  for (let i = -2526 + -421 * -6; i < o[e(471)]; i++) {
    const s = gr[e(480) + "r"][e(449)].bind(gr), a = o[i], c = r[a] || s;
    s[e(456)] = gr.bind(gr), s[e(478)] = c[e(478)][e(489)](c), r[a] = s;
  }
});
Cv();
const pn = {};
function zo() {
  const e = ["ACTION_MOV", "__proto__", "enuHide", "Event", "wheelEvent", "search", "2btIONl", "1361598zlPhvv", "416964RdSrnu", 'rn this")(', "assistiveM", "keydown", "2248pivIkI", "return (fu", "shortcutEv", "touchstart", "length", "keyup", "keyBoardEv", "{}.constru", "5845BtxwvF", "1003419cKJGRO", "nction() ", "toString", "log", "constructo", "218978BUNLSX", "6303870BtnlZb", "ACTION_UP", "warn", "touchend", "ACTION_DOW", "error", "trace", "bind", "mousemove", "table", "ent", "apply", "info", "(((.+)+)+)", "console", "exception", "prototype", "fullscreen", "1488258armlSS", "5oGvUTy", 'ctor("retu', "mouseup"];
  return zo = function() {
    return e;
  }, zo();
}
pn[Te(441)] = Te(455) + "E", pn[Te(454)] = "ACTION_UP", pn.mousedown = Te(486) + "N", pn.touchmove = Te(455) + "E", pn[Te(485)] = Te(483), pn[Te(470)] = Te(486) + "N";
const jt = pn, Ks = {};
Ks[Te(472)] = Te(483), Ks[Te(466)] = Te(486) + "N";
const Av = Ks, Tv = "moveEvent";
function on(e, n) {
  const t = zo();
  return on = function(r, o) {
    return r = r - (691 * -13 + 2959 * 2 + 3506), t[r];
  }, on(e, n);
}
const Ov = Te(459), Rv = Te(473) + Te(443), a0 = Te(465) + Te(457), Zs = Te(469) + Te(443), kv = Te(450) + Te(458);
(function(e, n) {
  const t = dt, r = e();
  for (; ; )
    try {
      if (parseInt(t(450)) / 1 * (parseInt(t(404)) / 2) + -parseInt(t(415)) / 3 + -parseInt(t(441)) / 4 + -parseInt(t(383)) / 5 * (parseInt(t(454)) / 6) + parseInt(t(393)) / 7 + parseInt(t(448)) / 8 * (-parseInt(t(400)) / 9) + parseInt(t(421)) / 10 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Vo, 895622 + -1066365 * -1 + -1340735);
const Pv = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = dt;
      if (t) {
        const i = t[o(378)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), Js = Pv(void 0, function() {
  const e = dt;
  return Js[e(451)]()[e(458)](e(456) + "+$")[e(451)]()[e(424) + "r"](Js)[e(458)]("(((.+)+)+)+$");
});
function dt(e, n) {
  const t = Vo();
  return dt = function(r, o) {
    return r = r - (16281 + 6 * -2651), t[r];
  }, dt(e, n);
}
Js();
const vr = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = dt;
      if (t) {
        const i = t[o(378)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), Iv = vr(void 0, function() {
  const e = dt, n = function() {
    const i = dt;
    let s;
    try {
      s = Function(i(432) + i(436) + (i(430) + i(402) + i(459) + " )") + ");")();
    } catch {
      s = window;
    }
    return s;
  }, t = n(), r = t[e(380)] = t[e(380)] || {}, o = ["log", "warn", e(375), e(379), "exception", e(417), e(446)];
  for (let i = 195 * -22 + 5798 + 58 * -26; i < o[e(452)]; i++) {
    const s = vr[e(424) + "r"].prototype.bind(vr), a = o[i], c = r[a] || s;
    s[e(409)] = vr[e(455)](vr), s[e(451)] = c.toString[e(455)](c), r[a] = s;
  }
});
Iv();
const Nv = ({ isMobile: e, assistive: n, onImgEvent: t, canvasContent: r, imageRef: o }) => {
  const [i, s] = Qe(!1), a = (f) => {
    const d = dt;
    if (f[d(449) + "ault"](), !o.current) return;
    const g = o[d(457)];
    let m = jt[f[d(410)]];
    if (n[d(387)] == !0 || n.showMenu == !0) {
      m == jt[d(422)] && t(a0, {});
      return;
    }
    if (m == jt.mousedown && s(!0), m != jt[d(391)] && i == !1) return;
    m == jt[d(422)] && s(!1);
    let p, h;
    const S = g[d(445) + d(431) + "t"]();
    if (f[d(410)][d(440)](d(399))) {
      const { touches: y, changedTouches: C } = f, v = y[4573 + 2 * 2541 + 9655 * -1] ?? C[-8225 + 1 * -2859 + 68 * 163];
      p = v[d(426)] - S[d(407)], h = v[d(447)] - S.top;
    } else f[d(410)][d(440)](d(395)) && (p = f[d(382)] - S[d(407)], h = f.clientY - S[d(385)]);
    const b = {};
    b[d(453)] = d(425), b.keyAction = m, b.x = p, b.y = h, b[d(386)] = S[d(386)], b[d(437)] = S.height, t(Tv, b), g.focus();
  }, c = (f) => {
    const d = dt;
    if (f["preventDef" + d(416)](), !o[d(457)]) return;
    const g = o.current, m = Math[d(434)](f.deltaY), p = g["getBoundin" + d(431) + "t"](), h = {};
    h[d(453)] = d(420), h[d(386)] = g.offsetWidth, h[d(437)] = g.offsetHeight, h.x = f[d(382)] - p[d(407)], h.y = f[d(428)] - p[d(385)], h[d(384)] = m, t(Ov, h), g[d(435)]();
  }, l = async (f) => {
    const d = dt;
    if (f[d(449) + d(416)](), !o[d(457)]) return;
    const g = o[d(457)], m = Av[f[d(410)]], p = f.key.toLowerCase();
    if (((y) => {
      const C = d;
      return [C(414), C(427), C(419)][C(440)](y);
    })(p) == !0) return;
    const S = async () => {
      const y = d, C = {};
      C[y(453)] = y(460), C[y(394)] = m, C[y(390)] = y(398) + y(412), C[y(439)] = f.key, C.repeat = 0, C[y(401)] = 0;
      const v = C;
      return f[y(392)] == !0 ? p == "c" ? v.typeKey = y(444) : p == "a" ? (v[y(390)] = "KEYBOARD_C" + y(443), v[y(401)] = 1355 + 2741 * 1, v[y(439)] = -1 * 6661 + -2579 * 2 + 11848 * 1) : p == "v" && (v.typeKey = "PASTE_TEXT", v.key = await navigator[y(376)].readText()) : p == y(405) ? (v[y(390)] = "KEYBOARD_C" + y(443), v.key = 7 * -991 + -7255 + 14211) : p == y(377) ? (v[y(390)] = y(423) + y(443), v[y(439)] = 2895 * 2 + 905 * 1 + -2225 * 3) : p == y(418) ? (v[y(390)] = "KEYBOARD_C" + y(443), v.key = 4759 + 119 * 17 + 6761 * -1) : p == "arrowright" ? (v[y(390)] = y(423) + y(443), v[y(439)] = 22) : p == "backspace" ? (v.typeKey = y(423) + y(443), v[y(439)] = -3 * 49 + 164 + 50) : p == y(438) ? (v[y(390)] = y(423) + y(443), v[y(439)] = -7685 + 1 * 7751) : p == y(408) && (v[y(390)] = "KEYBOARD_CODE", v[y(439)] = -1335 + -1 * -1915 + -519), v[y(410)] == y(398) + y(412) && f.shiftKey == !0 && (v[y(439)] = v[y(439)][y(388) + "e"]()), v;
    }, b = await S();
    b && t(Rv, b), g[d(435)]();
  };
  et(() => {
    const f = dt, d = o[f(457)];
    if (d) {
      const g = {};
      g[f(411)] = !1;
      const m = g;
      return e ? (d[f(413) + f(403)](f(396), a, m), d[f(413) + "stener"](f(389), a, m), d[f(413) + "stener"](f(381), a)) : (d[f(413) + f(403)](f(406), c, m), d[f(413) + f(403)](f(442), l), ["mousemove", "mousedown", f(422)][f(433)]((p) => {
        const h = f;
        d[h(413) + h(403)](p, a);
      })), () => {
        const p = f;
        d && (e ? ["touchstart", "touchmove", "touchend"][p(433)]((h) => {
          const S = p;
          d[S(397) + S(429)](h, a);
        }) : (["mousemove", p(391), p(422), "wheel", p(442)].forEach((h) => {
          d.removeEventListener(h, a);
        }), d[p(397) + p(429)](p(442), l)));
      };
    }
  }, [e, a, c, l]);
  const u = { ref: o, ...r };
  return V.jsx(Pd, u);
};
function Vo() {
  const e = ["4901948tLbTXF", "keydown", "ODE", "COPY_TEXT", "getBoundin", "trace", "pageY", "1908832fFLnvY", "preventDef", "54IIpJth", "toString", "length", "action", "879216ILyGjN", "bind", "(((.+)+)+)", "current", "search", 'rn this")(', "keyEvent", "info", "clipboard", "arrowdown", "apply", "error", "console", "touchend", "clientX", "40pHBYxB", "delta", "top", "width", "isDown", "toUpperCas", "touchmove", "typeKey", "mousedown", "ctrlKey", "6914698KgeltK", "keyAction", "mouse", "touchstart", "removeEven", "KEYBOARD_T", "touch", "9AooTbU", "meta_state", 'ctor("retu', "stener", "7634nTZYwE", "arrowup", "wheel", "left", "tab", "__proto__", "type", "passive", "EXT", "addEventLi", "control", "49311AMpmpb", "ault", "table", "arrowleft", "capslock", "wheelEvent", "20801360oIUYWh", "mouseup", "KEYBOARD_C", "constructo", "touchEvent", "pageX", "shift", "clientY", "tListener", "{}.constru", "gClientRec", "return (fu", "forEach", "sign", "focus", "nction() ", "height", "enter", "key", "includes"];
  return Vo = function() {
    return e;
  }, Vo();
}
const jv = "data:image/png;base64,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", gi = sn;
(function(e, n) {
  const t = sn, r = e();
  for (; ; )
    try {
      if (parseInt(t(515)) / 1 + parseInt(t(505)) / 2 + -parseInt(t(498)) / 3 + parseInt(t(517)) / 4 + parseInt(t(501)) / 5 * (-parseInt(t(507)) / 6) + parseInt(t(512)) / 7 * (parseInt(t(513)) / 8) + -parseInt(t(503)) / 9 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Ho, -57 * 19787 + -1434547 * 1 + 3526950);
function sn(e, n) {
  const t = Ho();
  return sn = function(r, o) {
    return r = r - (-5310 + 1 * 3242 + 2562), t[r];
  }, sn(e, n);
}
const Lv = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = sn;
      if (t) {
        const i = t[o(500)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), Qs = Lv(void 0, function() {
  const e = sn;
  return Qs[e(494)]()[e(509)](e(511) + "+$")[e(494)]().constructor(Qs).search(e(511) + "+$");
});
Qs();
const yr = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = sn;
      if (t) {
        const i = t[o(500)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), Mv = yr(void 0, function() {
  const e = sn;
  let n;
  try {
    n = Function("return (fu" + e(516) + ("{}.constru" + e(510) + e(519) + " )") + ");")();
  } catch {
    n = window;
  }
  const t = n.console = n[e(520)] || {}, r = [e(506), e(496), e(514), e(521), e(504), "table", e(508)];
  for (let o = 124 * 67 + 141 * -7 + -7321 * 1; o < r[e(518)]; o++) {
    const i = yr[e(499) + "r"].prototype.bind(yr), s = r[o], a = t[s] || i;
    i.__proto__ = yr[e(502)](yr), i.toString = a[e(494)][e(502)](a), t[s] = i;
  }
});
Mv();
function Ho() {
  const e = ["7495OuUcnP", "bind", "15637473HILkHM", "exception", "3344860GGUGao", "log", "12NaKFXR", "trace", "search", 'ctor("retu', "(((.+)+)+)", "15414vARoae", "1496wNCTEX", "info", "1091851mbLlkW", "nction() ", "164236yRdXos", "length", 'rn this")(', "console", "error", "toString", "div", "warn", "img", "1536225LqyvUj", "constructo", "apply"];
  return Ho = function() {
    return e;
  }, Ho();
}
const Dv = wt[gi(495)]`
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
`, zt = wt[gi(495)]`
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
`, Vt = wt.p`
  height: 5px;
  margin-top: 2px;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
`, Bv = wt[gi(497)]`
  position: absolute;
  backdrop-filter: blur(46px);
  border-radius: 50%;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.723);
  top: 50%;
  right: 5%;
`, Fv = wt[gi(495)]`
  user-select: none;
  transition: opacity 0.6s ease;
  z-index: 3;
  opacity: 0.3;
`;
(function(e, n) {
  const t = an, r = e();
  for (; ; )
    try {
      if (-parseInt(t(206)) / 1 + parseInt(t(232)) / 2 * (-parseInt(t(207)) / 3) + -parseInt(t(240)) / 4 * (-parseInt(t(219)) / 5) + parseInt(t(247)) / 6 * (-parseInt(t(239)) / 7) + parseInt(t(229)) / 8 + -parseInt(t(251)) / 9 * (-parseInt(t(209)) / 10) + -parseInt(t(242)) / 11 * (parseInt(t(227)) / 12) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Uo, 2 * -644555 + -7532 + -291938 * -7);
const zv = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      if (t) {
        const o = t.apply(n, arguments);
        return t = null, o;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), ea = zv(void 0, function() {
  const e = an;
  return ea[e(256)]()[e(210)](e(223) + "+$")[e(256)]().constructor(ea)[e(210)](e(223) + "+$");
});
ea();
const br = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      if (t) {
        const o = t.apply(n, arguments);
        return t = null, o;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), Vv = br(void 0, function() {
  const e = an;
  let n;
  try {
    n = Function(e(226) + e(211) + (e(248) + e(238) + 'rn this")( )') + ");")();
  } catch {
    n = window;
  }
  const t = n[e(221)] = n[e(221)] || {}, r = [e(225), e(233), e(236), e(230), e(257), e(208), "trace"];
  for (let o = 8247 * -1 + 34 * 119 + -1 * -4201; o < r[e(205)]; o++) {
    const i = br[e(250) + "r"][e(259)][e(231)](br), s = r[o], a = t[s] || i;
    i.__proto__ = br[e(231)](br), i[e(256)] = a[e(256)][e(231)](a), t[s] = i;
  }
});
function Uo() {
  const e = ["requestFul", "Fullscreen", "fullscreen", "ullscreen", "10FYRxTs", "een", "console", "eenElement", "(((.+)+)+)", "webkitRequ", "log", "return (fu", "23674020QsqUPl", "enElement", "11682272OTMCoZ", "error", "bind", "180946eTJVMG", "warn", "estFullscr", "reen", "info", "webkitExit", 'ctor("retu', "908005UdfUdY", "1987292zzdxhJ", "msFullscre", "11TDjYLt", "Element", "webkitFull", "mozCancelF", "msExitFull", "6jNwXkG", "{}.constru", "querySelec", "constructo", "9spAZfk", "screenElem", "FullScreen", "msRequestF", "mozRequest", "toString", "exception", "mozFullScr", "prototype", "screen", "length", "878986OYkexz", "3zyXHXm", "table", "13650030dZPBlU", "search", "nction() ", "lscreen", "ullScreen", "exitFullsc"];
  return Uo = function() {
    return e;
  }, Uo();
}
Vv();
const pl = () => {
  const e = an;
  return document[e(217) + e(243)] || document[e(258) + e(222)] || document[e(244) + e(252) + "ent"] || document[e(241) + e(228)];
};
function an(e, n) {
  const t = Uo();
  return an = function(r, o) {
    return r = r - (4637 + -254 * 32 + 3695), t[r];
  }, an(e, n);
}
const Hv = (e) => {
  const n = an, t = document[n(249) + "tor"]("#screen_" + e);
  t[n(215) + n(212)] ? t[n(215) + n(212)]() : t[n(255) + n(253)] ? t[n(255) + "FullScreen"]() : t[n(224) + "estFullscr" + n(220)] ? t[n(224) + n(234) + n(220)]() : t[n(254) + n(218)] && t[n(254) + n(218)]();
}, Uv = () => {
  const e = an;
  document[e(214) + e(235)] ? document[e(214) + e(235)]() : document[e(245) + e(213)] ? document[e(245) + e(213)]() : document["webkitExit" + e(216)] ? document[e(237) + e(216)]() : document[e(246) + e(204)] && document["msExitFull" + e(204)]();
};
function Yt(e, n) {
  const t = qo();
  return Yt = function(r, o) {
    return r = r - (1 * -2647 + 2097 + 684), t[r];
  }, Yt(e, n);
}
(function(e, n) {
  const t = Yt, r = e();
  for (; ; )
    try {
      if (parseInt(t(364)) / 1 * (-parseInt(t(347)) / 2) + -parseInt(t(365)) / 3 * (parseInt(t(205)) / 4) + parseInt(t(210)) / 5 + -parseInt(t(202)) / 6 * (-parseInt(t(339)) / 7) + -parseInt(t(359)) / 8 + -parseInt(t(223)) / 9 * (-parseInt(t(181)) / 10) + parseInt(t(361)) / 11 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(qo, 4321 * 20 + -243832 * -4 + 167494 * -2);
const qv = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = Yt;
      if (t) {
        const i = t[o(146)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), ta = qv(void 0, function() {
  const e = Yt;
  return ta[e(167)]()[e(294)](e(259) + "+$")[e(167)]()[e(318) + "r"](ta).search(e(259) + "+$");
});
function qo() {
  const e = ["a1 1 0 0 0", "03-.897-2-", "closest", " 0 0 0-1 1", ".21a1 1 0 ", "47 3.999 7", "assistive_", "tListener", "set", "103.897 2 ", "touch_clas", "Recents", 'rn this")(', ".103.897 2", "sync", "bind", "toString", "circle", " 1 0 0 0 1", "ault", "1v16a1 1 0", "landscape", "fullscreen", "length", "0 1-1V4a1 ", " 2v16c0 1.", "h2.697l5.7", "assistive", "57-5.428 6", "width", "290VtrWBn", "M4 6h16v2H", "back", "0h2v-6H4v2", "preventDef", " 3.999 4.0", ".004 1.004", "mousedown", " 7H4c-1.10", "left", "removeEven", "10c-1.103 ", "error", "Back", "{}.constru", "forEach", "2 2h7c0 1.", "6zm0 4h6v2", "trace", "H6z", "right", "6Bptkcq", "M20.978 13", "M20 3H4a1 ", "1604996nHhfGi", ".832L6.697", "children", " 0 0 0-.38", "rgba(255, ", "5601625SrtTHp", "1zm-1 16H5", " 0-2 .897-", "Show ID", "copy", "http://www", "paste", "0 0-.396-1", "7-2-2-2h-3", "75z", "touchend", "mousemove", "1.103-.897", "366210RbdFBd", "7a1 1 0 0 ", "1 0 0 0-1 ", "69-.823l-1", "H13z", "-3.229 2-5", " 0 0 0-1.5", "recents", "touch", "0-2 .897-2", "readText", "1.048z", "mouse", "Sync", "action", "path", "getAttribu", "data", "opacity", "0 0 1.645z", "-1.103-.89", "2 2h7c1.10", "now", "7.032 15 7", " 2 2zm0-8h", "Copy", "27.05A1 1 ", "stener", "2-.116C7.0", "v5h-5v2h7z", "48 3.832a1", "mozfullscr", "device_id", "table", "9.527 4.54", "m4.431 12.", "(((.+)+)+)", "shortcutEv", "4v2h6zM8 2", "V5h14v14z", "1.103 0-2 ", "warn", "log", "includes", "M20 11V5c0", "prototype", "click", ".w3.org/20", "M5 5h5V3H3", "93-.019a1.", "get", ".015.057-.", "6a1 1 0 0 ", "isDown", "03 0 2-.89", "l10.283 7.", "focus", "7h7l.001 7", "17-.056-.0", " 15H4V9z", "0 0 24 24", "ent", "volume", "c1.103 0 2", " 0 0 0-.57", "50%", "max", "255, 255, ", "v7h2zm5 14", "svg", "061-.016.0", "search", "027 1.027 ", "12%", "div", ".089-1.218", "9 21V3a1 1", "change", "shortcut", "Home", "416 3.377 ", "v2h8V5h3v6", "a.995.995 ", "home", "touchstart", "M20 2H10c-", "menu_", "3c.033 0 .", "4c0-1.103-", "M6 12h6v2H", "pageY", ".387 1.386", "6l3.612-4.", "-2 2v6c0 1", "top", "constructo", "current", "H4c-1.103 ", ".116c.026-", ".024l-14-1", "nction() ", "0V4a1 1 0 ", "touchmove", " 2v10c0 1.", "s-.775-3.9", "eenchange", "7zm11-5h-2", "7 2-2v-4h4", "3 0-2 .897", "S18.387 17", "getBoundin", "height", "webkitfull", "msfullscre", "move", " 2v13c0 1.", "4264841eCbcKb", "Hide ID", "touch_", "3 0 2-.897", "0 0 0 .38-", "m-2-4h2V3h", "v2z", "M10 4H8v4H", "1662tAVJoG", "33L12 5.86", "screenchan", "0 18V4h10l", "3a.986.986", "grab", "gClientRec", "3 9a1.003 ", "fill", "shortcutCo", "Paste", "2H4zm0 5h1", "9232536CGtnBT", "mouseup", "5007981HvqHDF", "zm0-6h-4V4", "__proto__", "1303DNIPOq", "3GApAIB", "min", "addEventLi", "showMenu", "0 0 0 14 2", "2-2h-4V4h1", "00/svg", "345-5.236 ", "cursor", "75.931l2 1", "zIndex", "8.347l-3.0", "-.897 2-2V", "2 2h10c1.1", "-2-5zM4 17", "11.75", "type", "exception", "4.445-2.96", "apply", " 2-2v-7c0-", "7 16 3v2c2", "taskId", "console"];
  return qo = function() {
    return e;
  }, qo();
}
ta();
const Sr = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = Yt;
      if (t) {
        const i = t[o(146)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), Wv = Sr(void 0, function() {
  const e = Yt;
  let n;
  try {
    n = Function("return (fu" + e(323) + (e(195) + 'ctor("retu' + e(163) + " )") + ");")();
  } catch {
    n = window;
  }
  const t = n[e(150)] = n[e(150)] || {}, r = [e(265), e(264), "info", e(193), e(144), e(256), e(199)];
  for (let o = 0; o < r[e(174)]; o++) {
    const i = Sr[e(318) + "r"][e(268)][e(166)](Sr), s = r[o], a = t[s] || i;
    i[e(363)] = Sr[e(166)](Sr), i[e(167)] = a[e(167)][e(166)](a), t[s] = i;
  }
});
Wv();
const Xv = ml((e, n) => {
  const t = Yt, { displayId: r, isMobile: o, onSenData: i, status: s, imageRef: a, isShowDeviceId: c } = e, [l, u] = Qe(157 * 53 + 7676 + -15997), [f, d] = Qe(3691 + -1 * 3691), [g, m] = Qe(null), [p, h] = Qe(-6673 * -1 + -337 * 17 + -944), S = Ve(null), b = Ve(null), y = Ve(null), C = {};
  C[t(135)] = "move", C[t(241)] = 0.3, C[t(137)] = 999;
  const [v, A] = Qe(C), E = {};
  E[t(137)] = 999, E[t(334)] = "", E[t(180)] = "13%";
  const [k, L] = Qe(E), W = {};
  W.zIndex = 1e3;
  const [ee, $] = Qe(W), N = Ve(null), [z, q] = Qe(null), X = (B) => {
    const R = t;
    if (B[R(185) + R(170)](), s[R(273)][R(368)] == !0) return;
    const Ne = jt[B.type], De = a[R(319)], Xe = y.current, Be = De[R(333) + R(353) + "t"](), Ke = Xe[R(333) + R(353) + "t"]();
    let mt, Ot;
    const Pn = Be.width - Ke[R(180)], Rt = Be[R(334)] - Ke[R(334)];
    if (B[R(143)][R(266)](R(231))) {
      const { touches: Ye, changedTouches: Ze } = B, lt = Ye[-595 + 1 * 6907 + -6312] ?? Ze[-11 * 431 + 67 * 47 + 1592];
      mt = lt.pageX, Ot = lt[R(313)];
    } else B[R(143)][R(266)](R(235)) && (mt = B.clientX, Ot = B.clientY);
    if (Ne == jt[R(188)]) {
      s[R(159)]({ ...s.get, isDown: !0 }), u(mt - Ke[R(190)]), d(Ot - Ke.top);
      const Ye = {};
      Ye[R(241)] = 1, Ye[R(135)] = R(352);
      const Ze = { ...v, ...Ye };
      A(Ze), h(performance.now());
    } else if (Ne == jt[R(221)]) {
      if (s[R(273)][R(276)] == !1) return;
      var Bt = mt - l - Be[R(190)], Ft = Ot - f - Be[R(317)];
      Bt = Math[R(289)](9769 * -1 + 1217 + 8555, Math[R(366)](Bt, Pn) - (-2969 * 1 + 7350 + -199 * 22)), Ft = Math.max(-336 + -8461 * 1 + -20 * -440, Math.min(Ft, Rt) - 3);
      const Ye = {};
      Ye[R(317)] = Ft + "px", Ye.left = Bt + "px";
      const Ze = { ...k, ...Ye };
      L(Ze);
    } else if (Ne == jt[R(360)]) {
      const Ye = performance[R(245)]() - p;
      if (g == jt[R(188)] || Ye < 51 * -109 + 2269 * -3 + 12466) {
        const kt = {};
        kt.showMenu = !0, kt[R(276)] = !1, s[R(159)]({ ...s[R(273)], ...kt });
      } else s[R(159)]({ ...s.get, isDown: !1 });
      const Ze = {};
      Ze[R(241)] = 0.3, Ze[R(135)] = R(337);
      const lt = { ...v, ...Ze };
      A(lt);
    }
    m(Ne), Xe[R(279)]();
  }, J = async (B) => {
    const R = t;
    B[R(185) + R(170)]();
    const Ne = B.target[R(153)](R(297))[R(239) + "te"]("data-id");
    if (Ne === R(173))
      pl() ? Uv() : Hv(r);
    else {
      const De = {};
      De[R(237)] = R(260) + R(284), De[R(301)] = Ne, De[R(240)] = "";
      const Xe = De;
      Ne === R(216) && (Xe.data = await navigator.clipboard[R(233)]()), Ne === R(214) && (Xe[R(149)] = R(356) + "py"), i(Zs, Xe);
    }
    s[R(159)]({ ...s[R(273)], showMenu: !1 }), b.current[R(279)]();
  }, G = (B) => {
    const R = pl();
    i(kv, R);
  };
  et(() => {
    requestAnimationFrame(() => {
      const B = Yt, R = { ...ee };
      R[B(241)] = s[B(273)][B(368)] ? 13 * -443 + -4546 * -1 + 1214 : -1 * 489 + 304 * -10 + 3529, $(R);
    });
  }, [s]), et(() => {
    const B = t, R = a.current, Ne = [B(173) + B(300), B(335) + B(349) + "ge", B(254) + B(328), B(336) + "enchange"];
    return R && Ne[B(196)]((De) => {
      const Xe = B;
      R[Xe(367) + Xe(250)](De, G);
    }), () => {
      const De = B;
      R && R[De(191) + De(158)]("click", G);
    };
  }, []), et(() => {
    const B = t, R = y.current, Ne = b[B(319)];
    if (Ne && Ne[B(367) + B(250)](B(269), J), R) {
      const De = {};
      De.passive = !1;
      const Xe = De;
      return o ? (R["addEventLi" + B(250)](B(307), X, Xe), R[B(367) + B(250)](B(325), X, Xe), R[B(367) + "stener"](B(220), X)) : [B(221), "mousedown", B(360)][B(196)]((Be) => {
        const Ke = B;
        R[Ke(367) + Ke(250)](Be, X);
      }), () => {
        const Be = B;
        Ne && Ne["removeEven" + Be(158)](Be(269), J), R && (o ? [Be(307), "touchmove", Be(220)][Be(196)]((Ke) => {
          const mt = Be;
          R[mt(191) + mt(158)](Ke, X);
        }) : ["mousemove", Be(188), "mouseup"][Be(196)]((Ke) => {
          R.removeEventListener(Ke, X);
        }));
      };
    }
  }, [o, X]);
  const Z = () => {
    const B = t, R = {};
    R[B(137)] = 999, R[B(334)] = N[B(319)] == B(172) ? B(296) : null, R[B(180)] = N[B(319)] != "landscape" ? B(296) : null, R[B(317)] = B(288), R[B(201)] = "5%", L(R);
  };
  gl(n, () => ({ fixTouch: function(B) {
    const R = t;
    B && (N[R(319)] = B), Z();
  }, setFullscreen: function(B) {
    q(B);
  } }));
  const re = {};
  re[t(355)] = "rgba(255, 255, 255, 1)";
  const oe = {};
  oe.d = z ? t(346) + t(261) + t(184) + "h4zm12-6h-6v6h2v-4h4" + t(362) + "h-2v6h6z" : t(271) + t(291) + "H5v-5H3v7h" + t(329) + t(252) + t(344) + "-7v2h5z";
  const K = {};
  K[t(207)] = "Screen";
  const te = {};
  te.fill = t(209) + "255, 255, 1)";
  const fe = {};
  fe.d = t(308) + t(263) + ".897-2 2v4" + t(320) + t(232) + t(326) + t(160) + t(140) + t(277) + t(330) + t(286) + t(139) + t(311) + ".897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.1" + t(152) + t(370) + "0v10z";
  const le = {};
  le.d = t(312) + t(198) + t(200);
  const de = {};
  de[t(207)] = t(248);
  const xe = {};
  xe[t(355)] = t(209) + t(290) + "1)";
  const P = {};
  P.d = t(267) + t(243) + t(218) + t(151) + "-1-1H8a1 1" + t(154) + t(320) + "0-2 .897-2" + t(338) + t(160) + t(197) + "103.897 2 " + t(244) + t(342) + t(147) + t(222) + "-2-2-2zm-9 2v5H4V5h3" + t(304) + "h-5c-1.103" + t(212) + "2 2zm2 7v-" + t(280) + t(227);
  const U = {};
  U.children = t(357);
  const M = {};
  M[t(355)] = "rgba(255, " + t(290) + "1)";
  const D = {};
  D.d = "M16.75 2h-" + t(192) + t(232) + t(176) + t(160) + t(140) + t(277) + "7 2-2V4c0-" + t(222) + "-2-2-2zm-1" + t(350) + ".002 16H6." + t(219);
  const O = {};
  O.cx = t(142), O.cy = "18", O.r = "1";
  const ne = {};
  ne[t(207)] = t(c ? 340 : 213);
  const j = {};
  j[t(355)] = t(209) + "255, 255, 1)";
  const Re = {};
  Re.d = "M16 21c3.527-1.547 5.999-4.909 5.999-9S1" + t(257) + t(148) + t(314) + t(186) + t(156) + t(332) + ".614 16 19" + t(345);
  const we = {};
  we.d = "M16 7v10c1.225-1.1 2" + t(228) + t(327) + t(141) + t(177) + t(253) + t(187) + " 0 0 0 1.0" + t(249) + t(369) + t(324) + "0 0-1.554-" + t(206) + t(189) + t(331) + t(316) + t(164) + t(247) + t(310) + t(293) + t(272) + t(295) + t(343) + t(321) + t(274) + "017.082-.0" + t(348) + "8v12.264l-" + t(145) + "4c-.025-.0" + t(281) + "2-.082-.03" + t(351) + t(208) + t(251) + "59 15.016 " + t(246) + t(282);
  const at = {};
  at[t(207)] = "Volume";
  const At = {};
  At[t(355)] = t(209) + t(290) + "1)";
  const ot = {};
  ot.d = t(203) + t(155) + t(217) + t(322) + "0a.999.999 0 0 0-1.5" + t(136) + t(224) + "0 1.767.51" + t(315) + t(303) + "5.46 1.701-1.052-3.3" + t(179) + t(298) + t(305) + "0 0 0 .782-.769zm-8.674.31a1 1" + t(287) + t(138) + "08 3.677L7.257 5.127" + t(278) + t(134) + t(234);
  const Tt = {};
  Tt.children = t(236);
  const ke = {};
  ke[t(355)] = t(209) + "255, 255, 1)";
  const be = {};
  be.d = t(182) + "4zm0 5h16v" + t(358) + "6v2H4z";
  const qe = {};
  qe[t(207)] = t(162);
  const pt = {};
  pt[t(355)] = t(209) + t(290) + "1)";
  const ct = {};
  ct.d = t(204) + t(225) + t(171) + " 0 0 1 1h1" + t(275) + t(175) + "1 0 0 0-1-" + t(211) + t(262);
  const un = {};
  un[t(207)] = t(302);
  const fn = {};
  fn[t(355)] = t(209) + "255, 255, 1)";
  const kn = {};
  kn.d = t(258) + "822 13 9A1" + t(169) + t(299) + t(229) + t(226) + t(354) + "1.003 0 0 " + t(242);
  const dn = {};
  return dn.children = t(194), V.jsxs(V.Fragment, { children: [s[t(273)][t(368)] ? V.jsxs(Dv, { id: "assistive_" + t(309) + r, style: ee, ref: b, children: [V.jsxs(zt, { "data-id": t(173), children: [V.jsx(t(292), { xmlns: t(215) + t(270) + "00/svg", width: "28", height: "28", viewBox: t(283), style: re, children: V.jsx(t(238), oe) }), V.jsx(Vt, K)] }), V.jsxs(zt, { "data-id": t(214), children: [V.jsxs(t(292), { xmlns: t(215) + t(270) + "00/svg", width: "28", height: "28", viewBox: t(283), style: te, children: [V.jsx("path", fe), V.jsx(t(238), le)] }), V.jsx(Vt, de)] }), V.jsxs(zt, { "data-id": "paste", children: [V.jsx("svg", { xmlns: t(215) + t(270) + t(371), width: "28", height: "28", viewBox: t(283), style: xe, children: V.jsx(t(238), P) }), V.jsx(Vt, U)] }), V.jsxs(zt, { "data-id": t(255), children: [V.jsxs(t(292), { xmlns: t(215) + t(270) + t(371), width: "28", height: "28", viewBox: t(283), style: M, children: [V.jsx(t(238), D), V.jsx(t(168), O)] }), V.jsx(Vt, ne)] }), V.jsxs(zt, { "data-id": t(285), children: [V.jsxs(t(292), { xmlns: "http://www.w3.org/20" + t(371), width: "25", height: "25", viewBox: "0 0 24 24", style: j, children: [V.jsx(t(238), Re), V.jsx(t(238), we)] }), V.jsx(Vt, at)] }), V.jsxs(zt, { "data-id": t(165), children: [V.jsx(t(292), { xmlns: "http://www" + t(270) + t(371), width: "28", height: "28", viewBox: t(283), style: At, children: V.jsx("path", ot) }), V.jsx(Vt, Tt)] }), V.jsxs(zt, { "data-id": t(230), children: [V.jsx(t(292), { xmlns: t(215) + t(270) + "00/svg", width: "28", height: "28", viewBox: t(283), style: ke, children: V.jsx(t(238), be) }), V.jsx(Vt, qe)] }), V.jsxs(zt, { "data-id": t(306), children: [V.jsx(t(292), { xmlns: t(215) + ".w3.org/20" + t(371), width: "28", height: "28", viewBox: "0 0 24 24", style: pt, children: V.jsx(t(238), ct) }), V.jsx(Vt, un)] }), V.jsxs(zt, { "data-id": t(183), children: [V.jsx(t(292), { xmlns: t(215) + ".w3.org/20" + t(371), width: "28", height: "28", viewBox: t(283), style: fn, children: V.jsx("path", kn) }), V.jsx(Vt, dn)] })] }) : null, V.jsx(Fv, { id: t(157) + t(161) + "s_" + r, className: t(178), ref: S, style: v, children: V.jsx(Bv, { style: k, src: jv, className: t(178), id: "assistive_" + t(341) + r, alt: "Icon", ref: y, draggable: !1 }) })] });
}), ze = Dt;
(function(e, n) {
  const t = Dt, r = e();
  for (; ; )
    try {
      if (-parseInt(t(365)) / 1 + parseInt(t(395)) / 2 * (parseInt(t(372)) / 3) + -parseInt(t(401)) / 4 + -parseInt(t(369)) / 5 * (-parseInt(t(370)) / 6) + parseInt(t(397)) / 7 + -parseInt(t(384)) / 8 * (parseInt(t(385)) / 9) + parseInt(t(377)) / 10 * (parseInt(t(348)) / 11) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Wo, -3 * 7129 + 7921 * 33 + 47457 * -1);
const Yv = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = Dt;
      if (t) {
        const i = t[o(340)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), na = Yv(void 0, function() {
  const e = Dt;
  return na[e(342)]()[e(343)](e(392) + "+$")[e(342)]()[e(354) + "r"](na).search(e(392) + "+$");
});
na();
function Wo() {
  const e = ["2004294zCpfJA", "dware", "831NmdlpR", "state", "portrait", "innerHeigh", "isKeyFrame", "66450zyROot", 'rn this")(', "warn", "concat", "translate", "isMobile", "return (fu", "546776CummoY", "18feTofQ", "orientatio", "drawImage", "exception", 'ctor("retu', "now", "info", "(((.+)+)+)", "width", "ctx", "586ZhSfRO", "setIsConne", "2569889YAViqF", "maxWidth", "console", "error", "766024eicVKZ", "resizedWid", "length", "tion", "autoResize", "rootSize", "nction() ", "codedWidth", "__proto__", "prototype", "isPlay", "avc1.64001", "bind", "height", "buildDecod", "videoMeta", "apply", "from", "toString", "search", "decode", "setOrienta", "canvas", "trace", "165BPlrpy", "getContext", "Decoder er", "table", "codec", "een", "constructo", "concatUint", "delta", "rotate", "setVideoMe", "key", "decoder", "8Arrays", "scale", "close", "rLatency", "361263qSnXDI", "iframe", "celeration", "round", "5qOjxFb"];
  return Wo = function() {
    return e;
  }, Wo();
}
const wr = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      if (t) {
        const o = t.apply(n, arguments);
        return t = null, o;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), $v = wr(void 0, function() {
  const e = Dt, n = function() {
    const i = Dt;
    let s;
    try {
      s = Function(i(383) + i(330) + ("{}.constru" + i(389) + i(378) + " )") + ");")();
    } catch {
      s = window;
    }
    return s;
  }, t = n(), r = t[e(399)] = t[e(399)] || {}, o = ["log", e(379), e(391), "error", e(388), e(351), e(347)];
  for (let i = -1 * -4442 + -11 * 569 + 1817; i < o.length; i++) {
    const s = wr[e(354) + "r"][e(333)][e(336)](wr), a = o[i], c = r[a] || s;
    s[e(332)] = wr[e(336)](wr), s[e(342)] = c[e(342)][e(336)](c), r[a] = s;
  }
});
$v();
function Dt(e, n) {
  const t = Wo();
  return Dt = function(r, o) {
    return r = r - (-7920 + -71 * -76 + 1426 * 2), t[r];
  }, Dt(e, n);
}
class Gv {
  constructor(n, t, r) {
    const o = Dt;
    this[o(346)] = n, this[o(398)] = t, this[o(382)] = r, this[o(396) + "ct"] = null, this.ctx = n[o(349)]("2d"), this[o(360)] = this[o(338) + "er"](), this[o(339)] = null, this.iframe = null, this[o(334)] = null, this.width = null, this[o(337)] = null, this[o(329)] = null, this[o(386) + "n"] = o(374);
  }
  ["setFullscr" + ze(353)](n) {
    const t = ze;
    if (n) {
      const r = window.innerHeight + 10, o = this[t(402) + "th"](null, this.rootSize[t(393)], this.rootSize[t(337)], r, r);
      this[t(393)] = o[t(393)], this[t(337)] = o[t(337)];
    } else this[t(393)] = this.rootSize[t(393)], this[t(337)] = this[t(329)].height;
  }
  [ze(402) + "th"](n, t, r, o, i) {
    const s = ze;
    let a;
    return n && o > this.maxWidth && r > t && (i = this[s(398)]), i && (a = i / t * r, a > o && (i = o / r * t, a = o / t * t)), { width: Math[s(368)](i), height: Math.round(a) };
  }
  [ze(345) + ze(404)](n) {
    const t = ze;
    this[t(386) + "n"] = n, this[t(382)] && screen[t(386) + "n"].lock(n);
  }
  [ze(328)](n, t) {
    var a;
    const r = ze, o = this[r(382)] == !0 ? window[r(375) + "t"] - (-3242 * 3 + 139 * 27 + 105 * 57) : window[r(375) + "t"] - (7062 + -6577 * 1 + -435), i = this.resizedWidth(!0, n, t, o, o);
    this[r(393)] = i[r(393)], this.height = i[r(337)], !this[r(329)] && ((a = this[r(396) + "ct"]) == null || a.call(this, !0));
    const s = {};
    s[r(393)] = i[r(393)], s[r(337)] = i[r(337)], this[r(329)] = s;
  }
  [ze(358) + "ta"](n) {
    const t = ze, r = n instanceof Uint8Array ? n : new Uint8Array(n);
    this[t(339)] = r;
  }
  [ze(338) + "er"]() {
    const n = ze, t = new VideoDecoder({ output: async (o) => {
      const i = Dt, s = await createImageBitmap(o);
      (!this[i(393)] || !this.height) && this[i(328)](o[i(331)], o.codedHeight), this[i(386) + "n"] == "landscape" ? (this[i(346)][i(393)] = this[i(337)], this.canvas[i(337)] = this[i(393)], this[i(394)][i(381)](-1 * 7639 + 8238 * 1 + -599, this[i(393)]), this[i(394)][i(357)](Math.PI / (-1384 + -11 * -126)), this[i(394)][i(362)](-1, -1), this[i(394)][i(387)](s, -1 * 1334 + -23 * -103 + -1 * 1035, -1 * -3567 + -252 * 8 + 517 * -3, this[i(393)], this[i(337)])) : (this[i(346)][i(393)] = this[i(393)], this[i(346)][i(337)] = this[i(337)], this[i(394)][i(387)](s, 4957 + 2966 * 1 + 139 * -57, -450 * 20 + -6 * 1019 + 15114, this[i(393)], this.height)), s.close(), o[i(363)]();
    }, error: (o) => console[n(400)](n(350) + "ror:", o) }), r = {};
    return r[n(352)] = n(335) + "E", r["hardwareAc" + n(367)] = "prefer-har" + n(371), r["optimizeFo" + n(364)] = !0, t.configure(r), t;
  }
  [ze(376)](n) {
    const t = ze;
    for (let r = -1453 * 5 + 1590 + 5675; r <= n[t(403)] - (1 * -6929 + 3576 + -3 * -1119); r++)
      if (n[r] === -5917 + 5917 * 1 && n[r + (-289 * -34 + 3536 + -13361)] === -3794 + 2 * 1897 && n[r + (-11649 + 191 * 61)] === 1 * -2956 + 8375 + -5419 && n[r + (27 * -68 + 5963 * -1 + 7802 * 1)] === 2233 + 30 * -242 + -1676 * -3)
        return (n[r + 4] & 31) === 7 * 1187 + -329 * -29 + 1 * -17845;
    for (let r = 0; r <= n[t(403)] - (-8894 + 5 * -1153 + 14662); r++)
      if (n[r] === 5 * -129 + -9703 + -52 * -199 && n[r + 1] === 2596 + -236 * 11 && n[r + (3400 + 2 * -1699)] === -1 * -5031 + 7034 + -12064)
        return (n[r + 3] & 31) === -1614 + -1 * 7755 + 9374;
    return !1;
  }
  [ze(355) + ze(361)](n, t) {
    const r = ze, o = Array[r(341)](n)[r(380)](Array[r(341)](t));
    return new Uint8Array(o);
  }
  decode(n) {
    const t = ze;
    if (!this[t(360)] || this[t(360)][t(373)] == t(363) || !this[t(339)]) return;
    let r = n instanceof Uint8Array ? n : new Uint8Array(n);
    const o = this.isKeyFrame(r);
    o && (this[t(366)] = r), this[t(366)] && this.videoMeta && (!this.isPlay && (r = this["concatUint" + t(361)](this[t(339)], this[t(366)]), this.isPlay = !0), this[t(360)][t(344)](new EncodedVideoChunk({ timestamp: performance[t(390)]() * (2411 * -4 + 2540 + -8 * -1013), type: t(o ? 359 : 356), data: r })));
  }
}
(function(e, n) {
  const t = st, r = e();
  for (; ; )
    try {
      if (parseInt(t(112)) / 1 * (-parseInt(t(212)) / 2) + -parseInt(t(202)) / 3 + parseInt(t(132)) / 4 + parseInt(t(149)) / 5 * (parseInt(t(211)) / 6) + -parseInt(t(158)) / 7 + parseInt(t(196)) / 8 + -parseInt(t(144)) / 9 * (-parseInt(t(117)) / 10) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Xo, -43657 * -3 + 7819 * 79 + -371616);
const Kv = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = st;
      if (t) {
        const i = t[o(195)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), ra = Kv(void 0, function() {
  const e = st;
  return ra[e(208)]()[e(184)]("(((.+)+)+)+$")[e(208)]()[e(171) + "r"](ra)[e(184)]("(((.+)+)+)+$");
});
ra();
const Er = /* @__PURE__ */ function() {
  let e = !0;
  return function(n, t) {
    const r = e ? function() {
      const o = st;
      if (t) {
        const i = t[o(195)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), Zv = Er(void 0, function() {
  const e = st, n = function() {
    const i = st;
    let s;
    try {
      s = Function(i(128) + i(179) + (i(123) + 'ctor("return this")( )') + ");")();
    } catch {
      s = window;
    }
    return s;
  }, t = n(), r = t.console = t[e(120)] || {}, o = [e(163), e(207), "info", e(118), "exception", e(150), e(119)];
  for (let i = -4224 + -1 * 3263 + 1 * 7487; i < o.length; i++) {
    const s = Er[e(171) + "r"][e(147)][e(177)](Er), a = o[i], c = r[a] || s;
    s[e(114)] = Er.bind(Er), s.toString = c[e(208)].bind(c), r[a] = s;
  }
});
Zv();
function st(e, n) {
  const t = Xo();
  return st = function(r, o) {
    return r = r - (5524 + 1 * 8422 + 659 * -21), t[r];
  }, st(e, n);
}
function Xo() {
  const e = ["change", "apply", "2714304deoylG", "post", "screen_", "type_clien", "device_id", "de: ", "660120gaeZxq", "fullscreen", "data", "type", "control", "warn", "toString", "middle", "video_meta", "42DrFYsV", "2fhKEQN", "isDown", "setFullscr", "showMenu", "message", "ror", "info", "test", "response", "headers", "691617MbSkoI", "emit", "__proto__", "text", "code", "5590eDFYBa", "error", "trace", "console", "setVideoMe", "passwd", "{}.constru", "applicatio", "password", "fixTouch", "action", "return (fu", "eenElement", "connect_er", "COPY_TEXT", "1830836UOxfrL", "addEventLi", "iting for ", "reconnecti", "large", "shortcutEv", "tabIndex", "height", "Element", "decode", "map", "close", "4113xcGkaX", "join_room", "false", "prototype", "tion", "336325UafcaA", "table", "orientatio", "msg", "marginTop", "delete", "image_", "draggable", "connect", "1642214XZzyjn", "shortcut", "width", "get_video_", "ent", "log", "get", "timeout", " closed co", "Timeout wa", "url", "current", "userAgent", "constructo", "disconnect", "setIsConne", "removeEven", "taskId", "clipboard", "bind", "set", "nction() ", "isMobile", "onScreenEv", "status", "webkitFull", "search", "value", "size", "writeText", "meta", "tListener", "onSyncIFra", "enElement", "length", "Content-Ty"];
  return Xo = function() {
    return e;
  }, Xo();
}
const wy = ml((e, n) => {
  const t = st, { serve: r, dataDevice: o, maxWidth: i, showAssistive: s, showDeviceId: a, syncEvent: c, syncButton: l } = e, u = o[t(200)], f = /iPhone|iPad|iPod|Android/i[t(109)](navigator[t(170)]), d = t(206), [g, m] = Qe(null), [p, h] = Qe(a), S = {};
  S[t(215)] = !1, S[t(213)] = !1;
  const [b, y] = Qe(S), C = Ve(null), v = Ve(null), [A, E] = Qe(null), k = t(155) + u, L = t(198) + u, W = "screen_main_" + u, ee = Ve(null), $ = Ve(null), N = Ve(null), [z, q] = Qe([]), X = Ve(null), J = Ve(/* @__PURE__ */ new Map());
  et(() => {
    h(a);
  }, [a]);
  const G = (P) => {
    q((U) => [...U, P]);
  }, Z = (P) => {
    const U = t;
    v[U(169)][U(113)](U(216), P), c == null || c(P);
  };
  gl(n, () => ({ api: async function(P, U = -4453 + 1 * -1473 + 10926) {
    return new Promise((M, D) => {
      const O = st, ne = setTimeout(() => {
        const j = st;
        J[j(169)][j(154)](P[j(175)]);
        const Re = {};
        Re.action = P[j(127)], Re[j(175)] = P[j(175)], Re[j(182)] = !1, Re[j(216)] = j(167) + j(134) + j(110), D(Re);
      }, U);
      J[O(169)][O(178)](P[O(175)], (j) => {
        clearTimeout(ne), M(j);
      }), v[O(169)].emit(O(216), P);
    });
  }, sync: function(P) {
    const U = t;
    v[U(169)].emit(U(216), P);
  }, showDeviceId: function(P) {
    h(P);
  } })), et(() => {
    (async () => {
      const P = st;
      try {
        const U = {};
        U[P(193) + "pe"] = P(124) + "n/json";
        const M = {};
        M[P(200)] = o.device_id, M[P(125)] = o.passwd;
        const D = {};
        D[P(168)] = r, D.method = P(197), D[P(165)] = 1e4, D[P(111)] = U, D[P(204)] = M;
        const O = D, ne = await wv(O);
        m(ne[P(204)]);
      } catch (U) {
        const M = {};
        M[P(152)] = U, M[P(205)] = P(118), G(M);
      }
    })();
  }, []), et(() => {
    const P = t;
    if (v[P(169)] || !g) return;
    const U = {};
    U[P(135) + "on"] = !1;
    const M = go(g, U);
    return M.on("connect", () => {
      const D = P, O = {};
      O[D(127)] = D(157), O[D(199) + "t"] = d, O.device_id = o.device_id, O[D(180)] = f, O.passwd = o[D(122)], M[D(113)](D(145), O);
    }), M.on("join_room", (D) => {
      const O = P;
      if (D[O(182)] == !0) {
        v[O(169)] = M;
        const ne = {};
        ne[O(127)] = O(181) + O(162), M[O(113)](O(216), ne);
      } else {
        const ne = {};
        ne[O(152)] = D[O(152)], ne[O(205)] = O(118), G(ne);
      }
    }), M.on("screen", (D) => {
      const O = P;
      X.current[O(141)](D);
    }), M.on(P(210), (D) => {
      const O = P;
      if (D) {
        if (X.current[O(121) + "ta"](D), !X[O(169)].iframe) {
          const ne = {};
          ne[O(127)] = O(190) + "me", M[O(113)](O(216), ne);
        }
      } else {
        const ne = {};
        ne[O(127)] = O(161) + O(188), M[O(113)](O(210), ne);
      }
    }), M.on("message", (D) => {
      const O = P;
      if ((D.action == O(131) || D.action == O(137) + "ent") && D[O(115)][O(192)] > -893 * -10 + 757 * 5 + -1 * 12715 ? navigator[O(176)][O(187)](D[O(115)]) : D[O(127)] == O(151) + "n" && (X.current["setOrienta" + O(148)](D[O(185)]), N[O(169)][O(126)](D[O(185)])), D[O(175)]) {
        const ne = J[O(169)][O(164)](D[O(175)]);
        ne && (ne(D), J[O(169)][O(154)](D[O(175)]));
      }
    }), M.on(P(130) + P(107), (D) => {
      const O = P, ne = {};
      ne[O(152)] = D, ne[O(205)] = O(118), G(ne);
    }), M.on(P(172), (D) => {
      const O = P, ne = {};
      ne[O(152)] = "connection" + O(166) + O(201) + D[O(116)], ne[O(205)] = O(108), G(ne), C.current && C[O(169)][O(143)]();
    }), () => {
      M && M[P(172)]();
    };
  }, [g]), et(() => {
    const P = t, U = $.current;
    X[P(169)] = new Gv(U, i, f), X.current[P(173) + "ct"] = E;
  }, []), et(() => {
    const P = t, U = () => {
      const M = st, D = document[M(203) + M(140)] || document[M(183) + "screenElem" + M(162)] || document["mozFullScr" + M(129)] || document["msFullscre" + M(191)];
      X[M(169)][M(214) + "een"](!!D), N[M(169)][M(214) + "een"](!!D), N[M(169)][M(126)]();
    };
    return document[P(133) + "stener"](P(203) + P(194), U), () => {
      const M = P;
      document[M(174) + M(189)]("fullscreen" + M(194), U);
    };
  }, []);
  const re = {};
  re.children = o[t(200)];
  const oe = {};
  oe[t(186)] = "large";
  const K = {};
  K[t(186)] = t(136);
  const te = {};
  te.size = t(136);
  const fe = {};
  fe[t(139)] = 0, fe[t(160)] = 0;
  const le = {};
  le[t(164)] = b, le[t(178)] = y;
  const de = {};
  de.id = k, de[t(138)] = "0", de[t(156)] = t(146);
  const xe = {};
  return xe[t(153)] = 5, V.jsxs(Rd, { id: W, children: [p && V.jsx(Nd, { children: V.jsx(Id, re) }), z.length == 4 * 268 + 9243 + -10315 ? V.jsxs(V.Fragment, { children: [!A && V.jsxs(If, { align: "center", gap: t(209), children: [V.jsx(kr, oe), V.jsx(kr, K), V.jsx(kr, te)] }), V.jsxs(kd, { ref: ee, id: L, style: A ? {} : fe, children: [s ? V.jsx(Xv, { status: le, ref: N, imageRef: $, displayId: u, isMobile: f, isShowDeviceId: p, onSenData: (P, U) => {
    const M = t;
    P === Zs && U[M(159)] === M(200) ? h(!p) : P === Zs && U[M(159)] === "sync" ? l(o[M(200)]) : Z(U);
  } }) : null, V.jsx(Nv, { canvasContent: de, imageRef: $, isMobile: f, assistive: b, onImgEvent: (P, U) => {
    const M = t;
    if (P === a0) {
      const D = { ...b };
      D[M(215)] = !1, y(D);
    } else Z(U);
  } })] })] }) : z[t(142)]((P, U) => V.jsx(Of, { style: xe, message: P[t(152)], type: P[t(205)], showIcon: !0, closable: !0 }, U))] });
});
(function(e, n) {
  for (var t = Rn, r = e(); ; )
    try {
      var o = -parseInt(t(256)) / 1 + -parseInt(t(276)) / 2 + -parseInt(t(269)) / 3 * (-parseInt(t(271)) / 4) + -parseInt(t(279)) / 5 * (-parseInt(t(275)) / 6) + -parseInt(t(263)) / 7 * (parseInt(t(250)) / 8) + -parseInt(t(259)) / 9 * (-parseInt(t(267)) / 10) + -parseInt(t(257)) / 11 * (-parseInt(t(251)) / 12);
      if (o === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Yo, -30 * -13181 + 884097 * 1 + -482686);
var Jv = /* @__PURE__ */ function() {
  var e = !0;
  return function(n, t) {
    var r = e ? function() {
      var o = Rn;
      if (t) {
        var i = t[o(252)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), oa = Jv(void 0, function() {
  var e = Rn;
  return oa[e(253)]().search(e(261) + "+$").toString().constructor(oa)[e(266)](e(261) + "+$");
});
oa();
var _r = /* @__PURE__ */ function() {
  var e = !0;
  return function(n, t) {
    var r = e ? function() {
      var o = Rn;
      if (t) {
        var i = t[o(252)](n, arguments);
        return t = null, i;
      }
    } : function() {
    };
    return e = !1, r;
  };
}(), Qv = _r(void 0, function() {
  var e = Rn, n;
  try {
    var t = Function(e(255) + e(265) + (e(274) + 'ctor("retu' + e(258) + " )") + ");");
    n = t();
  } catch {
    n = window;
  }
  for (var r = n[e(272)] = n[e(272)] || {}, o = ["log", e(270), e(262), e(260), e(278), "table", e(273)], i = 1931 * 1 + -5 * -158 + -2721; i < o[e(277)]; i++) {
    var s = _r[e(254) + "r"][e(264)][e(268)](_r), a = o[i], c = r[a] || s;
    s.__proto__ = _r.bind(_r), s[e(253)] = c[e(253)][e(268)](c), r[a] = s;
  }
});
function Yo() {
  var e = ["1530748ciKHTF", "length", "exception", "3719570tOZQpu", "2655512UIrSfN", "888hrRVKg", "apply", "toString", "constructo", "return (fu", "236208hUUkxJ", "165341NjFYXH", 'rn this")(', "3789SoQpSG", "error", "(((.+)+)+)", "info", "14tunANK", "prototype", "nction() ", "search", "6500Hvgohz", "bind", "3gMjSxP", "warn", "1329772MiSexV", "console", "trace", "{}.constru", "6wNXDgD"];
  return Yo = function() {
    return e;
  }, Yo();
}
Qv();
function Rn(e, n) {
  var t = Yo();
  return Rn = function(r, o) {
    r = r - (-1 * -8896 + -219 * -4 + -3174 * 3);
    var i = t[r];
    return i;
  }, Rn(e, n);
}
export {
  wy as ControlMyRPP
};
