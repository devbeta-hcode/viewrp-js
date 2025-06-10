var Jf = Object.defineProperty;
var Qf = (n, t, e) => t in n ? Jf(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var jt = (n, t, e) => Qf(n, typeof t != "symbol" ? t + "" : t, e);
import * as _ from "react";
import ze, { useDebugValue as pa, createElement as e0, useRef as Ge, useContext as en, isValidElement as t0, version as n0, createContext as Fs, useLayoutEffect as r0, useEffect as st, useState as it, forwardRef as il, useImperativeHandle as sl } from "react";
import ma from "react-dom";
var cr = ho;
(function(n, t) {
  for (var e = ho, r = n(); ; )
    try {
      var o = parseInt(e(242)) / 1 * (parseInt(e(267)) / 2) + parseInt(e(233)) / 3 * (parseInt(e(253)) / 4) + -parseInt(e(259)) / 5 * (-parseInt(e(240)) / 6) + parseInt(e(260)) / 7 + parseInt(e(258)) / 8 + parseInt(e(264)) / 9 * (-parseInt(e(248)) / 10) + -parseInt(e(239)) / 11 * (parseInt(e(235)) / 12);
      if (o === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(xo, 887878);
typeof globalThis !== cr(241) || typeof window !== cr(241) || (typeof global !== cr(241) ? global : cr(241));
function o0(n) {
  var t = cr;
  return n && n[t(252)] && Object[t(249)][t(261) + t(266)][t(268)](n, t(236)) ? n[t(236)] : n;
}
function ho(n, t) {
  var e = xo();
  return ho = function(r, o) {
    r = r - 233;
    var i = e[r];
    return i;
  }, ho(n, t);
}
function xo() {
  var n = ["forEach", "2348361IzOwza", "defineProp", "erty", "2hkJmmH", "call", "ertyDescri", "2526879qrDuHU", "keys", "96mlqrdk", "default", "value", "construct", "2490763ysvocK", "787284QceVwY", "undefined", "1382739CYEuTk", "PDFdL", "get", "getOwnProp", "length", "ntfql", "30oaiItz", "prototype", "oCBSm", "ptor", "__esModule", "4xdUdmf", "kDWNy", "apply", "gRlIS", "function", "2396592WDqzYx", "35okFmpc", "273175PsltNa", "hasOwnProp", "constructo"];
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
  var n = ze, t = Symbol.for("react.element"), e = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(a, c, l) {
    var f, d = {}, u = null, v = null;
    l !== void 0 && (u = "" + l), c.key !== void 0 && (u = "" + c.key), c.ref !== void 0 && (v = c.ref);
    for (f in c) r.call(c, f) && !i.hasOwnProperty(f) && (d[f] = c[f]);
    if (a && a.defaultProps) for (f in c = a.defaultProps, c) d[f] === void 0 && (d[f] = c[f]);
    return { $$typeof: t, type: a, key: u, ref: v, props: d, _owner: o.current };
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
    var n = ze, t = Symbol.for("react.element"), e = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g = Symbol.iterator, p = "@@iterator";
    function h(x) {
      if (x === null || typeof x != "object")
        return null;
      var k = g && x[g] || x[p];
      return typeof k == "function" ? k : null;
    }
    var w = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(x) {
      {
        for (var k = arguments.length, D = new Array(k > 1 ? k - 1 : 0), $ = 1; $ < k; $++)
          D[$ - 1] = arguments[$];
        m("error", x, D);
      }
    }
    function m(x, k, D) {
      {
        var $ = w.ReactDebugCurrentFrame, me = $.getStackAddendum();
        me !== "" && (k += "%s", D = D.concat([me]));
        var ye = D.map(function(le) {
          return String(le);
        });
        ye.unshift("Warning: " + k), Function.prototype.apply.call(console[x], console, ye);
      }
    }
    var C = !1, y = !1, R = !1, T = !1, L = !1, V;
    V = Symbol.for("react.module.reference");
    function X(x) {
      return !!(typeof x == "string" || typeof x == "function" || x === r || x === i || L || x === o || x === l || x === f || T || x === v || C || y || R || typeof x == "object" && x !== null && (x.$$typeof === u || x.$$typeof === d || x.$$typeof === s || x.$$typeof === a || x.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      x.$$typeof === V || x.getModuleId !== void 0));
    }
    function re(x, k, D) {
      var $ = x.displayName;
      if ($)
        return $;
      var me = k.displayName || k.name || "";
      return me !== "" ? D + "(" + me + ")" : D;
    }
    function G(x) {
      return x.displayName || "Context";
    }
    function z(x) {
      if (x == null)
        return null;
      if (typeof x.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof x == "function")
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
        case l:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case a:
            var k = x;
            return G(k) + ".Consumer";
          case s:
            var D = x;
            return G(D._context) + ".Provider";
          case c:
            return re(x, x.render, "ForwardRef");
          case d:
            var $ = x.displayName || null;
            return $ !== null ? $ : z(x.type) || "Memo";
          case u: {
            var me = x, ye = me._payload, le = me._init;
            try {
              return z(le(ye));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Y = Object.assign, U = 0, ee, Z, J, Q, se, oe, K;
    function te() {
    }
    te.__reactDisabledLog = !0;
    function xe() {
      {
        if (U === 0) {
          ee = console.log, Z = console.info, J = console.warn, Q = console.error, se = console.group, oe = console.groupCollapsed, K = console.groupEnd;
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
        U++;
      }
    }
    function ue() {
      {
        if (U--, U === 0) {
          var x = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Y({}, x, {
              value: ee
            }),
            info: Y({}, x, {
              value: Z
            }),
            warn: Y({}, x, {
              value: J
            }),
            error: Y({}, x, {
              value: Q
            }),
            group: Y({}, x, {
              value: se
            }),
            groupCollapsed: Y({}, x, {
              value: oe
            }),
            groupEnd: Y({}, x, {
              value: K
            })
          });
        }
        U < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ge = w.ReactCurrentDispatcher, j;
    function I(x, k, D) {
      {
        if (j === void 0)
          try {
            throw Error();
          } catch (me) {
            var $ = me.stack.trim().match(/\n( *(at )?)/);
            j = $ && $[1] || "";
          }
        return `
` + j + x;
      }
    }
    var A = !1, P;
    {
      var E = typeof WeakMap == "function" ? WeakMap : Map;
      P = new E();
    }
    function B(x, k) {
      if (!x || A)
        return "";
      {
        var D = P.get(x);
        if (D !== void 0)
          return D;
      }
      var $;
      A = !0;
      var me = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ye;
      ye = ge.current, ge.current = null, xe();
      try {
        if (k) {
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
            } catch (ot) {
              $ = ot;
            }
            Reflect.construct(x, [], le);
          } else {
            try {
              le.call();
            } catch (ot) {
              $ = ot;
            }
            x.call(le.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ot) {
            $ = ot;
          }
          x();
        }
      } catch (ot) {
        if (ot && $ && typeof ot.stack == "string") {
          for (var ae = ot.stack.split(`
`), tt = $.stack.split(`
`), Pe = ae.length - 1, Ne = tt.length - 1; Pe >= 1 && Ne >= 0 && ae[Pe] !== tt[Ne]; )
            Ne--;
          for (; Pe >= 1 && Ne >= 0; Pe--, Ne--)
            if (ae[Pe] !== tt[Ne]) {
              if (Pe !== 1 || Ne !== 1)
                do
                  if (Pe--, Ne--, Ne < 0 || ae[Pe] !== tt[Ne]) {
                    var je = `
` + ae[Pe].replace(" at new ", " at ");
                    return x.displayName && je.includes("<anonymous>") && (je = je.replace("<anonymous>", x.displayName)), typeof x == "function" && P.set(x, je), je;
                  }
                while (Pe >= 1 && Ne >= 0);
              break;
            }
        }
      } finally {
        A = !1, ge.current = ye, ue(), Error.prepareStackTrace = me;
      }
      var An = x ? x.displayName || x.name : "", un = An ? I(An) : "";
      return typeof x == "function" && P.set(x, un), un;
    }
    function fe(x, k, D) {
      return B(x, !1);
    }
    function M(x) {
      var k = x.prototype;
      return !!(k && k.isReactComponent);
    }
    function Me(x, k, D) {
      if (x == null)
        return "";
      if (typeof x == "function")
        return B(x, M(x));
      if (typeof x == "string")
        return I(x);
      switch (x) {
        case l:
          return I("Suspense");
        case f:
          return I("SuspenseList");
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case c:
            return fe(x.render);
          case d:
            return Me(x.type, k, D);
          case u: {
            var $ = x, me = $._payload, ye = $._init;
            try {
              return Me(ye(me), k, D);
            } catch {
            }
          }
        }
      return "";
    }
    var ke = Object.prototype.hasOwnProperty, ht = {}, kt = w.ReactDebugCurrentFrame;
    function ut(x) {
      if (x) {
        var k = x._owner, D = Me(x.type, x._source, k ? k.type : null);
        kt.setExtraStackFrame(D);
      } else
        kt.setExtraStackFrame(null);
    }
    function Pt(x, k, D, $, me) {
      {
        var ye = Function.call.bind(ke);
        for (var le in x)
          if (ye(x, le)) {
            var ae = void 0;
            try {
              if (typeof x[le] != "function") {
                var tt = Error(($ || "React class") + ": " + D + " type `" + le + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof x[le] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw tt.name = "Invariant Violation", tt;
              }
              ae = x[le](k, le, $, D, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Pe) {
              ae = Pe;
            }
            ae && !(ae instanceof Error) && (ut(me), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", $ || "React class", D, le, typeof ae), ut(null)), ae instanceof Error && !(ae.message in ht) && (ht[ae.message] = !0, ut(me), S("Failed %s type: %s", D, ae.message), ut(null));
          }
      }
    }
    var De = Array.isArray;
    function Ce(x) {
      return De(x);
    }
    function Qe(x) {
      {
        var k = typeof Symbol == "function" && Symbol.toStringTag, D = k && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return D;
      }
    }
    function bt(x) {
      try {
        return xt(x), !1;
      } catch {
        return !0;
      }
    }
    function xt(x) {
      return "" + x;
    }
    function on(x) {
      if (bt(x))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qe(x)), xt(x);
    }
    var sn = w.ReactCurrentOwner, Cn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, an, cn;
    function N(x) {
      if (ke.call(x, "ref")) {
        var k = Object.getOwnPropertyDescriptor(x, "ref").get;
        if (k && k.isReactWarning)
          return !1;
      }
      return x.ref !== void 0;
    }
    function b(x) {
      if (ke.call(x, "key")) {
        var k = Object.getOwnPropertyDescriptor(x, "key").get;
        if (k && k.isReactWarning)
          return !1;
      }
      return x.key !== void 0;
    }
    function ve(x, k) {
      typeof x.ref == "string" && sn.current;
    }
    function Te(x, k) {
      {
        var D = function() {
          an || (an = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", k));
        };
        D.isReactWarning = !0, Object.defineProperty(x, "key", {
          get: D,
          configurable: !0
        });
      }
    }
    function Oe(x, k) {
      {
        var D = function() {
          cn || (cn = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", k));
        };
        D.isReactWarning = !0, Object.defineProperty(x, "ref", {
          get: D,
          configurable: !0
        });
      }
    }
    var F = function(x, k, D, $, me, ye, le) {
      var ae = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: x,
        key: k,
        ref: D,
        props: le,
        // Record the component responsible for creating this element.
        _owner: ye
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
        value: me
      }), Object.freeze && (Object.freeze(ae.props), Object.freeze(ae)), ae;
    };
    function pe(x, k, D, $, me) {
      {
        var ye, le = {}, ae = null, tt = null;
        D !== void 0 && (on(D), ae = "" + D), b(k) && (on(k.key), ae = "" + k.key), N(k) && (tt = k.ref, ve(k, me));
        for (ye in k)
          ke.call(k, ye) && !Cn.hasOwnProperty(ye) && (le[ye] = k[ye]);
        if (x && x.defaultProps) {
          var Pe = x.defaultProps;
          for (ye in Pe)
            le[ye] === void 0 && (le[ye] = Pe[ye]);
        }
        if (ae || tt) {
          var Ne = typeof x == "function" ? x.displayName || x.name || "Unknown" : x;
          ae && Te(le, Ne), tt && Oe(le, Ne);
        }
        return F(x, ae, tt, me, $, sn.current, le);
      }
    }
    var he = w.ReactCurrentOwner, et = w.ReactDebugCurrentFrame;
    function Ke(x) {
      if (x) {
        var k = x._owner, D = Me(x.type, x._source, k ? k.type : null);
        et.setExtraStackFrame(D);
      } else
        et.setExtraStackFrame(null);
    }
    var ft;
    ft = !1;
    function ln(x) {
      return typeof x == "object" && x !== null && x.$$typeof === t;
    }
    function Re() {
      {
        if (he.current) {
          var x = z(he.current.type);
          if (x)
            return `

Check the render method of \`` + x + "`.";
        }
        return "";
      }
    }
    function Ve(x) {
      return "";
    }
    var He = {};
    function pt(x) {
      {
        var k = Re();
        if (!k) {
          var D = typeof x == "string" ? x : x.displayName || x.name;
          D && (k = `

Check the top-level render call using <` + D + ">.");
        }
        return k;
      }
    }
    function Ye(x, k) {
      {
        if (!x._store || x._store.validated || x.key != null)
          return;
        x._store.validated = !0;
        var D = pt(k);
        if (He[D])
          return;
        He[D] = !0;
        var $ = "";
        x && x._owner && x._owner !== he.current && ($ = " It was passed a child from " + z(x._owner.type) + "."), Ke(x), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', D, $), Ke(null);
      }
    }
    function It(x, k) {
      {
        if (typeof x != "object")
          return;
        if (Ce(x))
          for (var D = 0; D < x.length; D++) {
            var $ = x[D];
            ln($) && Ye($, k);
          }
        else if (ln(x))
          x._store && (x._store.validated = !0);
        else if (x) {
          var me = h(x);
          if (typeof me == "function" && me !== x.entries)
            for (var ye = me.call(x), le; !(le = ye.next()).done; )
              ln(le.value) && Ye(le.value, k);
        }
      }
    }
    function Xe(x) {
      {
        var k = x.type;
        if (k == null || typeof k == "string")
          return;
        var D;
        if (typeof k == "function")
          D = k.propTypes;
        else if (typeof k == "object" && (k.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        k.$$typeof === d))
          D = k.propTypes;
        else
          return;
        if (D) {
          var $ = z(k);
          Pt(D, x.props, "prop", $, x);
        } else if (k.PropTypes !== void 0 && !ft) {
          ft = !0;
          var me = z(k);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", me || "Unknown");
        }
        typeof k.getDefaultProps == "function" && !k.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Nt(x) {
      {
        for (var k = Object.keys(x.props), D = 0; D < k.length; D++) {
          var $ = k[D];
          if ($ !== "children" && $ !== "key") {
            Ke(x), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", $), Ke(null);
            break;
          }
        }
        x.ref !== null && (Ke(x), S("Invalid attribute `ref` supplied to `React.Fragment`."), Ke(null));
      }
    }
    var er = {};
    function Or(x, k, D, $, me, ye) {
      {
        var le = X(x);
        if (!le) {
          var ae = "";
          (x === void 0 || typeof x == "object" && x !== null && Object.keys(x).length === 0) && (ae += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var tt = Ve();
          tt ? ae += tt : ae += Re();
          var Pe;
          x === null ? Pe = "null" : Ce(x) ? Pe = "array" : x !== void 0 && x.$$typeof === t ? (Pe = "<" + (z(x.type) || "Unknown") + " />", ae = " Did you accidentally export a JSX literal instead of a component?") : Pe = typeof x, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Pe, ae);
        }
        var Ne = pe(x, k, D, me, ye);
        if (Ne == null)
          return Ne;
        if (le) {
          var je = k.children;
          if (je !== void 0)
            if ($)
              if (Ce(je)) {
                for (var An = 0; An < je.length; An++)
                  It(je[An], x);
                Object.freeze && Object.freeze(je);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              It(je, x);
        }
        if (ke.call(k, "key")) {
          var un = z(x), ot = Object.keys(k).filter(function(Zf) {
            return Zf !== "key";
          }), ui = ot.length > 0 ? "{key: someKey, " + ot.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!er[un + ui]) {
            var Kf = ot.length > 0 ? "{" + ot.join(": ..., ") + ": ...}" : "{}";
            S(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ui, un, Kf, un), er[un + ui] = !0;
          }
        }
        return x === r ? Nt(Ne) : Xe(Ne), Ne;
      }
    }
    function $e(x, k, D) {
      return Or(x, k, D, !0);
    }
    function Rr(x, k, D) {
      return Or(x, k, D, !1);
    }
    var li = Rr, Ie = $e;
    nr.Fragment = r, nr.jsx = li, nr.jsxs = Ie;
  }()), nr;
}
var ya;
function a0() {
  return ya || (ya = 1, process.env.NODE_ENV === "production" ? kr.exports = i0() : kr.exports = s0()), kr.exports;
}
var q = a0(), at = function() {
  return at = Object.assign || function(t) {
    for (var e, r = 1, o = arguments.length; r < o; r++) {
      e = arguments[r];
      for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
  }, at.apply(this, arguments);
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
), Ae = "-ms-", fr = "-moz-", we = "-webkit-", al = "comm", Fo = "rule", zs = "decl", f0 = "@import", cl = "@keyframes", d0 = "@layer", ll = Math.abs, Vs = String.fromCharCode, ji = Object.assign;
function h0(n, t) {
  return Je(n, 0) ^ 45 ? (((t << 2 ^ Je(n, 0)) << 2 ^ Je(n, 1)) << 2 ^ Je(n, 2)) << 2 ^ Je(n, 3) : 0;
}
function ul(n) {
  return n.trim();
}
function qt(n, t) {
  return (n = t.exec(n)) ? n[0] : n;
}
function ie(n, t, e) {
  return n.replace(t, e);
}
function Xr(n, t, e) {
  return n.indexOf(t, e);
}
function Je(n, t) {
  return n.charCodeAt(t) | 0;
}
function jn(n, t, e) {
  return n.slice(t, e);
}
function Dt(n) {
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
    return !qt(e, t);
  });
}
var zo = 1, Ln = 1, dl = 0, vt = 0, Ue = 0, Wn = "";
function Vo(n, t, e, r, o, i, s, a) {
  return { value: n, root: t, parent: e, type: r, props: o, children: i, line: zo, column: Ln, length: s, return: "", siblings: a };
}
function $t(n, t) {
  return ji(Vo("", null, null, "", null, null, 0, n.siblings), n, { length: -n.length }, t);
}
function Tn(n) {
  for (; n.root; )
    n = $t(n.root, { children: [n] });
  lr(n, n.siblings);
}
function p0() {
  return Ue;
}
function m0() {
  return Ue = vt > 0 ? Je(Wn, --vt) : 0, Ln--, Ue === 10 && (Ln = 1, zo--), Ue;
}
function Et() {
  return Ue = vt < dl ? Je(Wn, vt++) : 0, Ln++, Ue === 10 && (Ln = 1, zo++), Ue;
}
function gn() {
  return Je(Wn, vt);
}
function $r() {
  return vt;
}
function Ho(n, t) {
  return jn(Wn, n, t);
}
function Li(n) {
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
  return zo = Ln = 1, dl = Dt(Wn = n), vt = 0, [];
}
function v0(n) {
  return Wn = "", n;
}
function fi(n) {
  return ul(Ho(vt - 1, Mi(n === 91 ? n + 2 : n === 40 ? n + 1 : n)));
}
function y0(n) {
  for (; (Ue = gn()) && Ue < 33; )
    Et();
  return Li(n) > 2 || Li(Ue) > 3 ? "" : " ";
}
function b0(n, t) {
  for (; --t && Et() && !(Ue < 48 || Ue > 102 || Ue > 57 && Ue < 65 || Ue > 70 && Ue < 97); )
    ;
  return Ho(n, $r() + (t < 6 && gn() == 32 && Et() == 32));
}
function Mi(n) {
  for (; Et(); )
    switch (Ue) {
      // ] ) " '
      case n:
        return vt;
      // " '
      case 34:
      case 39:
        n !== 34 && n !== 39 && Mi(Ue);
        break;
      // (
      case 40:
        n === 41 && Mi(n);
        break;
      // \
      case 92:
        Et();
        break;
    }
  return vt;
}
function S0(n, t) {
  for (; Et() && n + Ue !== 57; )
    if (n + Ue === 84 && gn() === 47)
      break;
  return "/*" + Ho(t, vt - 1) + "*" + Vs(n === 47 ? n : Et());
}
function w0(n) {
  for (; !Li(gn()); )
    Et();
  return Ho(n, vt);
}
function E0(n) {
  return v0(Gr("", null, null, null, [""], n = g0(n), 0, [0], n));
}
function Gr(n, t, e, r, o, i, s, a, c) {
  for (var l = 0, f = 0, d = s, u = 0, v = 0, g = 0, p = 1, h = 1, w = 1, S = 0, m = "", C = o, y = i, R = r, T = m; h; )
    switch (g = S, S = Et()) {
      // (
      case 40:
        if (g != 108 && Je(T, d - 1) == 58) {
          Xr(T += ie(fi(S), "&", "&\f"), "&\f", ll(l ? a[l - 1] : 0)) != -1 && (w = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        T += fi(S);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        T += y0(g);
        break;
      // \
      case 92:
        T += b0($r() - 1, 7);
        continue;
      // /
      case 47:
        switch (gn()) {
          case 42:
          case 47:
            lr(_0(S0(Et(), $r()), t, e, c), c);
            break;
          default:
            T += "/";
        }
        break;
      // {
      case 123 * p:
        a[l++] = Dt(T) * w;
      // } ; \0
      case 125 * p:
      case 59:
      case 0:
        switch (S) {
          // \0 }
          case 0:
          case 125:
            h = 0;
          // ;
          case 59 + f:
            w == -1 && (T = ie(T, /\f/g, "")), v > 0 && Dt(T) - d && lr(v > 32 ? wa(T + ";", r, e, d - 1, c) : wa(ie(T, " ", "") + ";", r, e, d - 2, c), c);
            break;
          // @ ;
          case 59:
            T += ";";
          // { rule/at-rule
          default:
            if (lr(R = Sa(T, t, e, l, f, o, a, m, C = [], y = [], d, i), i), S === 123)
              if (f === 0)
                Gr(T, t, R, R, C, i, d, a, y);
              else
                switch (u === 99 && Je(T, 3) === 110 ? 100 : u) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Gr(n, R, R, r && lr(Sa(n, R, R, 0, 0, o, a, m, o, C = [], d, y), y), o, y, d, a, r ? C : y);
                    break;
                  default:
                    Gr(T, R, R, R, [""], y, 0, a, y);
                }
        }
        l = f = v = 0, p = w = 1, m = T = "", d = s;
        break;
      // :
      case 58:
        d = 1 + Dt(T), v = g;
      default:
        if (p < 1) {
          if (S == 123)
            --p;
          else if (S == 125 && p++ == 0 && m0() == 125)
            continue;
        }
        switch (T += Vs(S), S * p) {
          // &
          case 38:
            w = f > 0 ? 1 : (T += "\f", -1);
            break;
          // ,
          case 44:
            a[l++] = (Dt(T) - 1) * w, w = 1;
            break;
          // @
          case 64:
            gn() === 45 && (T += fi(Et())), u = gn(), f = d = Dt(m = T += w0($r())), S++;
            break;
          // -
          case 45:
            g === 45 && Dt(T) == 2 && (p = 0);
        }
    }
  return i;
}
function Sa(n, t, e, r, o, i, s, a, c, l, f, d) {
  for (var u = o - 1, v = o === 0 ? i : [""], g = fl(v), p = 0, h = 0, w = 0; p < r; ++p)
    for (var S = 0, m = jn(n, u + 1, u = ll(h = s[p])), C = n; S < g; ++S)
      (C = ul(h > 0 ? v[S] + " " + m : ie(m, /&\f/g, v[S]))) && (c[w++] = C);
  return Vo(n, t, e, o === 0 ? Fo : a, c, l, f, d);
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
      return we + "print-" + n + n;
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
      return we + n + n;
    // tab-size
    case 4789:
      return fr + n + n;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return we + n + fr + n + Ae + n + n;
    // writing-mode
    case 5936:
      switch (Je(n, t + 11)) {
        // vertical-l(r)
        case 114:
          return we + n + Ae + ie(n, /[svh]\w+-[tblr]{2}/, "tb") + n;
        // vertical-r(l)
        case 108:
          return we + n + Ae + ie(n, /[svh]\w+-[tblr]{2}/, "tb-rl") + n;
        // horizontal(-)tb
        case 45:
          return we + n + Ae + ie(n, /[svh]\w+-[tblr]{2}/, "lr") + n;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return we + n + Ae + n + n;
    // order
    case 6165:
      return we + n + Ae + "flex-" + n + n;
    // align-items
    case 5187:
      return we + n + ie(n, /(\w+).+(:[^]+)/, we + "box-$1$2" + Ae + "flex-$1$2") + n;
    // align-self
    case 5443:
      return we + n + Ae + "flex-item-" + ie(n, /flex-|-self/g, "") + (qt(n, /flex-|baseline/) ? "" : Ae + "grid-row-" + ie(n, /flex-|-self/g, "")) + n;
    // align-content
    case 4675:
      return we + n + Ae + "flex-line-pack" + ie(n, /align-content|flex-|-self/g, "") + n;
    // flex-shrink
    case 5548:
      return we + n + Ae + ie(n, "shrink", "negative") + n;
    // flex-basis
    case 5292:
      return we + n + Ae + ie(n, "basis", "preferred-size") + n;
    // flex-grow
    case 6060:
      return we + "box-" + ie(n, "-grow", "") + we + n + Ae + ie(n, "grow", "positive") + n;
    // transition
    case 4554:
      return we + ie(n, /([^-])(transform)/g, "$1" + we + "$2") + n;
    // cursor
    case 6187:
      return ie(ie(ie(n, /(zoom-|grab)/, we + "$1"), /(image-set)/, we + "$1"), n, "") + n;
    // background, background-image
    case 5495:
    case 3959:
      return ie(n, /(image-set\([^]*)/, we + "$1$`$1");
    // justify-content
    case 4968:
      return ie(ie(n, /(.+:)(flex-)?(.*)/, we + "box-pack:$3" + Ae + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + we + n + n;
    // justify-self
    case 4200:
      if (!qt(n, /flex-|baseline/)) return Ae + "grid-column-align" + jn(n, t) + n;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return Ae + ie(n, "template-", "") + n;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return e && e.some(function(r, o) {
        return t = o, qt(r.props, /grid-\w+-end/);
      }) ? ~Xr(n + (e = e[t].value), "span", 0) ? n : Ae + ie(n, "-start", "") + n + Ae + "grid-row-span:" + (~Xr(e, "span", 0) ? qt(e, /\d+/) : +qt(e, /\d+/) - +qt(n, /\d+/)) + ";" : Ae + ie(n, "-start", "") + n;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return e && e.some(function(r) {
        return qt(r.props, /grid-\w+-start/);
      }) ? n : Ae + ie(ie(n, "-end", "-span"), "span ", "") + n;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ie(n, /(.+)-inline(.+)/, we + "$1$2") + n;
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
      if (Dt(n) - 1 - t > 6)
        switch (Je(n, t + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (Je(n, t + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return ie(n, /(.+:)(.+)-([^]+)/, "$1" + we + "$2-$3$1" + fr + (Je(n, t + 3) == 108 ? "$3" : "$2-$3")) + n;
          // (s)tretch
          case 115:
            return ~Xr(n, "stretch", 0) ? hl(ie(n, "stretch", "fill-available"), t, e) + n : n;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return ie(n, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, s, a, c, l) {
        return Ae + o + ":" + i + l + (s ? Ae + o + "-span:" + (a ? c : +c - +i) + l : "") + n;
      });
    // position: sticky
    case 4949:
      if (Je(n, t + 6) === 121)
        return ie(n, ":", ":" + we) + n;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (Je(n, Je(n, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return ie(n, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + we + (Je(n, 14) === 45 ? "inline-" : "") + "box$3$1" + we + "$2$3$1" + Ae + "$2box$3") + n;
        // (inline-)?gri(d)
        case 100:
          return ie(n, ":", ":" + Ae) + n;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return ie(n, "scroll-", "scroll-snap-") + n;
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
      if (!Dt(n.value = n.props.join(","))) return "";
  }
  return Dt(e = po(n.children, r)) ? n.return = n.value + "{" + e + "}" : "";
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
        return po([$t(n, { value: ie(n.value, "@", "@" + we) })], r);
      case Fo:
        if (n.length)
          return x0(e = n.props, function(o) {
            switch (qt(o, r = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                Tn($t(n, { props: [ie(o, /:(read-\w+)/, ":" + fr + "$1")] })), Tn($t(n, { props: [o] })), ji(n, { props: ba(e, r) });
                break;
              // :placeholder
              case "::placeholder":
                Tn($t(n, { props: [ie(o, /:(plac\w+)/, ":" + we + "input-$1")] })), Tn($t(n, { props: [ie(o, /:(plac\w+)/, ":" + fr + "$1")] })), Tn($t(n, { props: [ie(o, /:(plac\w+)/, Ae + "input-$1")] })), Tn($t(n, { props: [o] })), ji(n, { props: ba(e, r) });
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
      }, Ge(), i && !Pr.has(r) && (console.warn(r), Pr.add(r));
    } catch (s) {
      Ea.test(s.message) && Pr.delete(r);
    } finally {
      console.error = o;
    }
  }
}, qo = Object.freeze([]), Mn = Object.freeze({});
function I0(n, t, e) {
  return e === void 0 && (e = Mn), n.theme !== e.theme && n.theme || t || e.theme;
}
var Di = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), N0 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, j0 = /(^-|-$)/g;
function _a(n) {
  return n.replace(N0, "-").replace(j0, "");
}
var L0 = /(a)(d)/gi, Ir = 52, Ca = function(n) {
  return String.fromCharCode(n + (n > 25 ? 39 : 97));
};
function Bi(n) {
  var t, e = "";
  for (t = Math.abs(n); t > Ir; t = t / Ir | 0) e = Ca(t % Ir) + e;
  return (Ca(t % Ir) + e).replace(L0, "$1-$2");
}
var di, ml = 5381, dn = function(n, t) {
  for (var e = t.length; e; ) n = 33 * n ^ t.charCodeAt(--e);
  return n;
}, gl = function(n) {
  return dn(ml, n);
};
function M0(n) {
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
        var l = U0(t, c);
        try {
          V0(n, c, l);
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
function xn(n, t) {
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
}, K0 = "style[".concat(En, "][").concat(pl, '="').concat(Uo, '"]'), Z0 = new RegExp("^".concat(En, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), J0 = function(n, t, e) {
  for (var r, o = e.split(","), i = 0, s = o.length; i < s; i++) (r = o[i]) && n.registerName(t, r);
}, Q0 = function(n, t) {
  for (var e, r = ((e = t.textContent) !== null && e !== void 0 ? e : "").split(Hs), o = [], i = 0, s = r.length; i < s; i++) {
    var a = r[i].trim();
    if (a) {
      var c = a.match(Z0);
      if (c) {
        var l = 0 | parseInt(c[1], 10), f = c[2];
        l !== 0 && (G0(f, l), J0(n, f, c[3]), n.getTag().insertRules(l, o)), o.length = 0;
      } else o.push(a);
    }
  }
}, ka = function(n) {
  for (var t = document.querySelectorAll(K0), e = 0, r = t.length; e < r; e++) {
    var o = t[e];
    o && o.getAttribute(En) !== xl && (Q0(n, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function ed() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var El = function(n) {
  var t = document.head, e = n || t, r = document.createElement("style"), o = function(a) {
    var c = Array.from(a.querySelectorAll("style[".concat(En, "]")));
    return c[c.length - 1];
  }(e), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(En, xl), r.setAttribute(pl, Uo);
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
    t === void 0 && (t = Mn), e === void 0 && (e = {});
    var o = this;
    this.options = at(at({}, od), t), this.gs = e, this.names = new Map(r), this.server = !!t.isServer, !this.server && mo && Pa && (Pa = !1, ka(this)), qs(this, function() {
      return function(i) {
        for (var s = i.getTag(), a = s.length, c = "", l = function(d) {
          var u = function(w) {
            return go.get(w);
          }(d);
          if (u === void 0) return "continue";
          var v = i.names.get(u), g = s.getGroup(d);
          if (v === void 0 || !v.size || g.length === 0) return "continue";
          var p = "".concat(En, ".g").concat(d, '[id="').concat(u, '"]'), h = "";
          v !== void 0 && v.forEach(function(w) {
            w.length > 0 && (h += "".concat(w, ","));
          }), c += "".concat(g).concat(p, '{content:"').concat(h, '"}').concat(Hs);
        }, f = 0; f < a; f++) l(f);
        return c;
      }(o);
    });
  }
  return n.registerId = function(t) {
    return Nr(t);
  }, n.prototype.rehydrate = function() {
    !this.server && mo && ka(this);
  }, n.prototype.reconstructWithOptions = function(t, e) {
    return e === void 0 && (e = !0), new n(at(at({}, this.options), t), this.gs, e && this.names || void 0);
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
  var t, e, r, o = Mn, i = o.options, s = i === void 0 ? Mn : i, a = o.plugins, c = a === void 0 ? qo : a, l = function(u, v, g) {
    return g.startsWith(e) && g.endsWith(e) && g.replaceAll(e, "").length > 0 ? ".".concat(t) : u;
  }, f = c.slice();
  f.push(function(u) {
    u.type === Fo && u.value.includes("&") && (u.props[0] = u.props[0].replace(id, e).replace(r, l));
  }), s.prefix && f.push(O0), f.push(C0);
  var d = function(u, v, g, p) {
    v === void 0 && (v = ""), g === void 0 && (g = ""), p === void 0 && (p = "&"), t = p, e = v, r = new RegExp("\\".concat(e, "\\b"), "g");
    var h = u.replace(sd, ""), w = E0(g || v ? "".concat(g, " ").concat(v, " { ").concat(h, " }") : h);
    s.namespace && (w = Cl(w, s.namespace));
    var S = [];
    return po(w, A0(f.concat(T0(function(m) {
      return S.push(m);
    })))), S;
  };
  return d.hash = c.length ? c.reduce(function(u, v) {
    return v.name || Yn(15), dn(u, v.name);
  }, ml).toString() : "", d;
}
var cd = new _l(), zi = ad(), Al = ze.createContext({ shouldForwardProp: void 0, styleSheet: cd, stylis: zi });
Al.Consumer;
ze.createContext(void 0);
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
function vn(n, t, e, r) {
  if (Tl(n)) return [];
  if (Us(n)) return [".".concat(n.styledComponentId)];
  if (Dn(n)) {
    if (!Dn(i = n) || i.prototype && i.prototype.isReactComponent || !t) return [n];
    var o = n(t);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof Na || Bn(o) || o === null || console.error("".concat(vl(n), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), vn(o, t, e, r);
  }
  var i;
  return n instanceof Na ? e ? (n.inject(e, r), [n.getName(r)]) : [n] : Bn(n) ? Ol(n) : Array.isArray(n) ? Array.prototype.concat.apply(qo, n.map(function(s) {
    return vn(s, t, e, r);
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
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && ud(t), this.componentId = e, this.baseHash = dn(fd, e), this.baseStyle = r, _l.registerId(e);
  }
  return n.prototype.generateAndInjectStyles = function(t, e, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, e, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && e.hasNameForId(this.componentId, this.staticRulesId)) o = xn(o, this.staticRulesId);
    else {
      var i = Ra(vn(this.rules, t, e, r)), s = Bi(dn(this.baseHash, i) >>> 0);
      if (!e.hasNameForId(this.componentId, s)) {
        var a = r(i, ".".concat(s), void 0, this.componentId);
        e.insertRules(this.componentId, s, a);
      }
      o = xn(o, s), this.staticRulesId = s;
    }
    else {
      for (var c = dn(this.baseHash, r.hash), l = "", f = 0; f < this.rules.length; f++) {
        var d = this.rules[f];
        if (typeof d == "string") l += d, process.env.NODE_ENV !== "production" && (c = dn(c, d));
        else if (d) {
          var u = Ra(vn(d, t, e, r));
          c = dn(c, u + f), l += u;
        }
      }
      if (l) {
        var v = Bi(c >>> 0);
        e.hasNameForId(this.componentId, v) || e.insertRules(this.componentId, v, r(l, ".".concat(v), void 0, this.componentId)), o = xn(o, v);
      }
    }
    return o;
  }, n;
}(), Rl = ze.createContext(void 0);
Rl.Consumer;
var xi = {}, La = /* @__PURE__ */ new Set();
function hd(n, t, e) {
  var r = Us(n), o = n, i = !hi(n), s = t.attrs, a = s === void 0 ? qo : s, c = t.componentId, l = c === void 0 ? function(C, y) {
    var R = typeof C != "string" ? "sc" : _a(C);
    xi[R] = (xi[R] || 0) + 1;
    var T = "".concat(R, "-").concat(M0(Uo + R + xi[R]));
    return y ? "".concat(y, "-").concat(T) : T;
  }(t.displayName, t.parentComponentId) : c, f = t.displayName, d = f === void 0 ? function(C) {
    return hi(C) ? "styled.".concat(C) : "Styled(".concat(vl(C), ")");
  }(n) : f, u = t.displayName && t.componentId ? "".concat(_a(t.displayName), "-").concat(t.componentId) : t.componentId || l, v = r && o.attrs ? o.attrs.concat(a).filter(Boolean) : a, g = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var p = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var h = t.shouldForwardProp;
      g = function(C, y) {
        return p(C, y) && h(C, y);
      };
    } else g = p;
  }
  var w = new dd(e, u, r ? o.componentStyle : void 0);
  function S(C, y) {
    return function(R, T, L) {
      var V = R.attrs, X = R.componentStyle, re = R.defaultProps, G = R.foldedComponentIds, z = R.styledComponentId, Y = R.target, U = ze.useContext(Rl), ee = Ia(), Z = R.shouldForwardProp || ee.shouldForwardProp;
      process.env.NODE_ENV !== "production" && pa(z);
      var J = I0(T, U, re) || Mn, Q = function(ue, ge, j) {
        for (var I, A = at(at({}, ge), { className: void 0, theme: j }), P = 0; P < ue.length; P += 1) {
          var E = Dn(I = ue[P]) ? I(A) : I;
          for (var B in E) A[B] = B === "className" ? xn(A[B], E[B]) : B === "style" ? at(at({}, A[B]), E[B]) : E[B];
        }
        return ge.className && (A.className = xn(A.className, ge.className)), A;
      }(V, T, J), se = Q.as || Y, oe = {};
      for (var K in Q) Q[K] === void 0 || K[0] === "$" || K === "as" || K === "theme" && Q.theme === J || (K === "forwardedAs" ? oe.as = Q.forwardedAs : Z && !Z(K, se) || (oe[K] = Q[K], Z || process.env.NODE_ENV !== "development" || u0(K) || La.has(K) || !Di.has(se) || (La.add(K), console.warn('styled-components: it looks like an unknown prop "'.concat(K, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var te = function(ue, ge) {
        var j = Ia(), I = ue.generateAndInjectStyles(ge, j.styleSheet, j.stylis);
        return process.env.NODE_ENV !== "production" && pa(I), I;
      }(X, Q);
      process.env.NODE_ENV !== "production" && R.warnTooManyClasses && R.warnTooManyClasses(te);
      var xe = xn(G, z);
      return te && (xe += " " + te), Q.className && (xe += " " + Q.className), oe[hi(se) && !Di.has(se) ? "class" : "className"] = xe, L && (oe.ref = L), e0(se, oe);
    }(m, C, y);
  }
  S.displayName = d;
  var m = ze.forwardRef(S);
  return m.attrs = v, m.componentStyle = w, m.displayName = d, m.shouldForwardProp = g, m.foldedComponentIds = r ? xn(o.foldedComponentIds, o.styledComponentId) : "", m.styledComponentId = u, m.target = r ? o.target : n, Object.defineProperty(m, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(C) {
    this._foldedDefaultProps = r ? function(y) {
      for (var R = [], T = 1; T < arguments.length; T++) R[T - 1] = arguments[T];
      for (var L = 0, V = R; L < V.length; L++) Fi(y, V[L], !0);
      return y;
    }({}, o.defaultProps, C) : C;
  } }), process.env.NODE_ENV !== "production" && (P0(d, u), m.warnTooManyClasses = /* @__PURE__ */ function(C, y) {
    var R = {}, T = !1;
    return function(L) {
      if (!T && (R[L] = !0, Object.keys(R).length >= 200)) {
        var V = y ? ' with the id of "'.concat(y, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(C).concat(V, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), T = !0, R = {};
      }
    };
  }(d, u)), qs(m, function() {
    return ".".concat(m.styledComponentId);
  }), i && wl(m, n, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), m;
}
function Ma(n, t) {
  for (var e = [n[0]], r = 0, o = t.length; r < o; r += 1) e.push(t[r], n[r + 1]);
  return e;
}
var Da = function(n) {
  return Object.assign(n, { isCss: !0 });
};
function xd(n) {
  for (var t = [], e = 1; e < arguments.length; e++) t[e - 1] = arguments[e];
  if (Dn(n) || Bn(n)) return Da(vn(Ma(qo, Nn([n], t, !0))));
  var r = n;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string" ? vn(r) : Da(vn(Ma(r, t)));
}
function Vi(n, t, e) {
  if (e === void 0 && (e = Mn), !t) throw Yn(1, t);
  var r = function(o) {
    for (var i = [], s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
    return n(t, e, xd.apply(void 0, Nn([o], i, !1)));
  };
  return r.attrs = function(o) {
    return Vi(n, t, at(at({}, e), { attrs: Array.prototype.concat(e.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return Vi(n, t, at(at({}, e), o));
  }, r;
}
var kl = function(n) {
  return Vi(hd, n);
}, At = kl;
Di.forEach(function(n) {
  At[n] = kl(n);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var jr = "__sc-".concat(En, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[jr] || (window[jr] = 0), window[jr] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[jr] += 1);
const Er = vo;
(function(n, t) {
  const e = vo, r = n();
  for (; ; )
    try {
      if (-parseInt(e(251)) / 1 + -parseInt(e(244)) / 2 * (parseInt(e(242)) / 3) + parseInt(e(240)) / 4 + -parseInt(e(245)) / 5 * (parseInt(e(248)) / 6) + -parseInt(e(250)) / 7 + -parseInt(e(246)) / 8 + -parseInt(e(241)) / 9 * (-parseInt(e(249)) / 10) === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(yo, 691452);
function vo(n, t) {
  const e = yo();
  return vo = function(r, o) {
    return r = r - 240, e[r];
  }, vo(n, t);
}
const pd = At[Er(252)]`
  flex-direction: column;
  border-radius: 15px;
  border: 3px solid #a0beeb;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
  justify-items: center;
  align-items: center;
`, md = At[Er(252)]`
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
  const n = ["862520YoIqMS", "canvas", "6EwNwLB", "751270OgDPUX", "195762RsXijF", "198261ZhogJG", "div", "801600VaaVjO", "297TzAOah", "3639xkbaov", "span", "1582LriPlv", "3473070YHIWUH"];
  return yo = function() {
    return n;
  }, yo();
}
const gd = At[Er(247)]`
  border-radius: 7px;
  display: inline;
  padding: 0;
  &:focus-visible {
    outline: none;
  }
`, vd = At[Er(243)]`
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
`, yd = At[Er(252)]`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  pointer-events: none;
`, Ft = /* @__PURE__ */ Object.create(null);
Ft.open = "0";
Ft.close = "1";
Ft.ping = "2";
Ft.pong = "3";
Ft.message = "4";
Ft.upgrade = "5";
Ft.noop = "6";
const Jr = /* @__PURE__ */ Object.create(null);
Object.keys(Ft).forEach((n) => {
  Jr[Ft[n]] = n;
});
const Hi = { type: "error", data: "parser error" }, Pl = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", Il = typeof ArrayBuffer == "function", Nl = (n) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(n) : n && n.buffer instanceof ArrayBuffer, Ws = ({ type: n, data: t }, e, r) => Pl && t instanceof Blob ? e ? r(t) : Ba(t, r) : Il && (t instanceof ArrayBuffer || Nl(t)) ? e ? r(t) : Ba(new Blob([t]), r) : r(Ft[n] + (t || "")), Ba = (n, t) => {
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
  const l = new ArrayBuffer(t), f = new Uint8Array(l);
  for (r = 0; r < e; r += 4)
    i = ur[n.charCodeAt(r)], s = ur[n.charCodeAt(r + 1)], a = ur[n.charCodeAt(r + 2)], c = ur[n.charCodeAt(r + 3)], f[o++] = i << 2 | s >> 4, f[o++] = (s & 15) << 4 | a >> 2, f[o++] = (a & 3) << 6 | c & 63;
  return l;
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
}, Ll = "", _d = (n, t) => {
  const e = n.length, r = new Array(e);
  let o = 0;
  n.forEach((i, s) => {
    Ws(i, !1, (a) => {
      r[s] = a, ++o === e && t(r.join(Ll));
    });
  });
}, Cd = (n, t) => {
  const e = n.split(Ll), r = [];
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
function Lr(n) {
  return n.reduce((t, e) => t + e.length, 0);
}
function Mr(n, t) {
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
          const c = Mr(e, 8), l = new DataView(c.buffer, c.byteOffset, c.length), f = l.getUint32(0);
          if (f > Math.pow(2, 21) - 1) {
            a.enqueue(Hi);
            break;
          }
          o = f * Math.pow(2, 32) + l.getUint32(4), r = 3;
        } else {
          if (Lr(e) < o)
            break;
          const c = Mr(e, o);
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
const Ml = 4;
function We(n) {
  if (n) return Od(n);
}
function Od(n) {
  for (var t in We.prototype)
    n[t] = We.prototype[t];
  return n;
}
We.prototype.on = We.prototype.addEventListener = function(n, t) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + n] = this._callbacks["$" + n] || []).push(t), this;
};
We.prototype.once = function(n, t) {
  function e() {
    this.off(n, e), t.apply(this, arguments);
  }
  return e.fn = t, this.on(n, e), this;
};
We.prototype.off = We.prototype.removeListener = We.prototype.removeAllListeners = We.prototype.removeEventListener = function(n, t) {
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
We.prototype.emit = function(n) {
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
We.prototype.emitReserved = We.prototype.emit;
We.prototype.listeners = function(n) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + n] || [];
};
We.prototype.hasListeners = function(n) {
  return !!this.listeners(n).length;
};
const Wo = typeof Promise == "function" && typeof Promise.resolve == "function" ? (t) => Promise.resolve().then(t) : (t, e) => e(t, 0), gt = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), Rd = "arraybuffer";
function Dl(n, ...t) {
  return t.reduce((e, r) => (n.hasOwnProperty(r) && (e[r] = n[r]), e), {});
}
const kd = gt.setTimeout, Pd = gt.clearTimeout;
function Yo(n, t) {
  t.useNativeTimers ? (n.setTimeoutFn = kd.bind(gt), n.clearTimeoutFn = Pd.bind(gt)) : (n.setTimeoutFn = gt.setTimeout.bind(gt), n.clearTimeoutFn = gt.clearTimeout.bind(gt));
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
function Ld(n) {
  let t = "";
  for (let e in n)
    n.hasOwnProperty(e) && (t.length && (t += "&"), t += encodeURIComponent(e) + "=" + encodeURIComponent(n[e]));
  return t;
}
function Md(n) {
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
class Xs extends We {
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
    const e = Ld(t);
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
let Pn = class Qr extends We {
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
Pn.requestsCount = 0;
Pn.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", Va);
  else if (typeof addEventListener == "function") {
    const n = "onpagehide" in gt ? "pagehide" : "unload";
    addEventListener(n, Va, !1);
  }
}
function Va() {
  for (let n in Pn.requests)
    Pn.requests.hasOwnProperty(n) && Pn.requests[n].abort();
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
    return Object.assign(t, { xd: this.xd }, this.opts), new Pn(zl, this.uri(), t);
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
      return new gt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
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
const gi = gt.WebSocket || gt.MozWebSocket;
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
class Qt extends We {
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
  createTransport(t) {
    const e = Object.assign({}, this.opts.query);
    e.EIO = Ml, e.transport = t, this.id && (e.sid = this.id);
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
Qt.protocol = Ml;
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
            const u = new Error("probe error");
            u.transport = e.name, this.emitReserved("upgradeError", u);
          }
      }));
    };
    function i() {
      r || (r = !0, f(), e.close(), e = null);
    }
    const s = (d) => {
      const u = new Error("probe error: " + d);
      u.transport = e.name, i(), this.emitReserved("upgradeError", u);
    };
    function a() {
      s("transport closed");
    }
    function c() {
      s("socket closed");
    }
    function l(d) {
      e && d.name !== e.name && i();
    }
    const f = () => {
      e.removeListener("open", o), e.removeListener("error", s), e.removeListener("close", a), this.off("close", c), this.off("upgrading", l);
    };
    e.once("open", o), e.once("error", s), e.once("close", a), this.once("close", c), this.once("upgrading", l), this._upgrades.indexOf("webtransport") !== -1 && t !== "webtransport" ? this.setTimeoutFn(() => {
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
var de;
(function(n) {
  n[n.CONNECT = 0] = "CONNECT", n[n.DISCONNECT = 1] = "DISCONNECT", n[n.EVENT = 2] = "EVENT", n[n.ACK = 3] = "ACK", n[n.CONNECT_ERROR = 4] = "CONNECT_ERROR", n[n.BINARY_EVENT = 5] = "BINARY_EVENT", n[n.BINARY_ACK = 6] = "BINARY_ACK";
})(de || (de = {}));
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
    return (t.type === de.EVENT || t.type === de.ACK) && to(t) ? this.encodeAsBinary({
      type: t.type === de.EVENT ? de.BINARY_EVENT : de.BINARY_ACK,
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
    return (t.type === de.BINARY_EVENT || t.type === de.BINARY_ACK) && (e += t.attachments + "-"), t.nsp && t.nsp !== "/" && (e += t.nsp + ","), t.id != null && (e += t.id), t.data != null && (e += JSON.stringify(t.data, this.replacer)), e;
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
class Gs extends We {
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
      const r = e.type === de.BINARY_EVENT;
      r || e.type === de.BINARY_ACK ? (e.type = r ? de.EVENT : de.ACK, this.reconstructor = new uh(e), e.attachments === 0 && super.emitReserved("decoded", e)) : super.emitReserved("decoded", e);
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
    if (de[r.type] === void 0)
      throw new Error("unknown packet type " + r.type);
    if (r.type === de.BINARY_EVENT || r.type === de.BINARY_ACK) {
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
    return de;
  },
  protocol: ch
}, Symbol.toStringTag, { value: "Module" }));
function St(n, t, e) {
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
class Ul extends We {
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
      St(t, "open", this.onopen.bind(this)),
      St(t, "packet", this.onpacket.bind(this)),
      St(t, "error", this.onerror.bind(this)),
      St(t, "close", this.onclose.bind(this))
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
      type: de.CONNECT,
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
        case de.CONNECT:
          t.data && t.data.sid ? this.onconnect(t.data.sid, t.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case de.EVENT:
        case de.BINARY_EVENT:
          this.onevent(t);
          break;
        case de.ACK:
        case de.BINARY_ACK:
          this.onack(t);
          break;
        case de.DISCONNECT:
          this.ondisconnect();
          break;
        case de.CONNECT_ERROR:
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
        type: de.ACK,
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
class Xi extends We {
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
    const o = St(e, "open", function() {
      r.onopen(), t && t();
    }), i = (a) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", a), t ? t(a) : this.maybeReconnectOnOpen();
    }, s = St(e, "error", i);
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
      St(t, "ping", this.onping.bind(this)),
      St(t, "data", this.ondata.bind(this)),
      St(t, "error", this.onerror.bind(this)),
      St(t, "close", this.onclose.bind(this)),
      // @ts-ignore
      St(this.decoder, "decoded", this.ondecoded.bind(this))
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
const rt = /* @__PURE__ */ o0(xh);
function zt() {
  return zt = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var r in e) ({}).hasOwnProperty.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }, zt.apply(null, arguments);
}
function Ee(n) {
  "@babel/helpers - typeof";
  return Ee = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ee(n);
}
var ph = Symbol.for("react.element"), mh = Symbol.for("react.transitional.element"), gh = Symbol.for("react.fragment");
function vh(n) {
  return (
    // Base object type
    n && Ee(n) === "object" && // React Element type
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
  if (Ee(n) != "object" || !n) return n;
  var e = n[Symbol.toPrimitive];
  if (e !== void 0) {
    var r = e.call(n, t);
    if (Ee(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function Yl(n) {
  var t = wh(n, "string");
  return Ee(t) == "symbol" ? t : t + "";
}
function W(n, t, e) {
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
function H(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qa(Object(e), !0).forEach(function(r) {
      W(n, r, e[r]);
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
  return n && Ee(n) === "object" && Wa(n.nativeElement) ? n.nativeElement : Wa(n) ? n : null;
}
function _h(n) {
  var t = Eh(n);
  if (t)
    return t;
  if (n instanceof ze.Component) {
    var e;
    return (e = ma.findDOMNode) === null || e === void 0 ? void 0 : e.call(ma, n);
  }
  return null;
}
var Dr = { exports: {} }, be = {};
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
  if (Ya) return be;
  Ya = 1;
  var n = Symbol.for("react.element"), t = Symbol.for("react.portal"), e = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g;
  g = Symbol.for("react.module.reference");
  function p(h) {
    if (typeof h == "object" && h !== null) {
      var w = h.$$typeof;
      switch (w) {
        case n:
          switch (h = h.type, h) {
            case e:
            case o:
            case r:
            case l:
            case f:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case a:
                case s:
                case c:
                case u:
                case d:
                case i:
                  return h;
                default:
                  return w;
              }
          }
        case t:
          return w;
      }
    }
  }
  return be.ContextConsumer = s, be.ContextProvider = i, be.Element = n, be.ForwardRef = c, be.Fragment = e, be.Lazy = u, be.Memo = d, be.Portal = t, be.Profiler = o, be.StrictMode = r, be.Suspense = l, be.SuspenseList = f, be.isAsyncMode = function() {
    return !1;
  }, be.isConcurrentMode = function() {
    return !1;
  }, be.isContextConsumer = function(h) {
    return p(h) === s;
  }, be.isContextProvider = function(h) {
    return p(h) === i;
  }, be.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === n;
  }, be.isForwardRef = function(h) {
    return p(h) === c;
  }, be.isFragment = function(h) {
    return p(h) === e;
  }, be.isLazy = function(h) {
    return p(h) === u;
  }, be.isMemo = function(h) {
    return p(h) === d;
  }, be.isPortal = function(h) {
    return p(h) === t;
  }, be.isProfiler = function(h) {
    return p(h) === o;
  }, be.isStrictMode = function(h) {
    return p(h) === r;
  }, be.isSuspense = function(h) {
    return p(h) === l;
  }, be.isSuspenseList = function(h) {
    return p(h) === f;
  }, be.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === e || h === o || h === r || h === l || h === f || h === v || typeof h == "object" && h !== null && (h.$$typeof === u || h.$$typeof === d || h.$$typeof === i || h.$$typeof === s || h.$$typeof === c || h.$$typeof === g || h.getModuleId !== void 0);
  }, be.typeOf = p, be;
}
var Se = {};
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
    var n = Symbol.for("react.element"), t = Symbol.for("react.portal"), e = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g = !1, p = !1, h = !1, w = !1, S = !1, m;
    m = Symbol.for("react.module.reference");
    function C(M) {
      return !!(typeof M == "string" || typeof M == "function" || M === e || M === o || S || M === r || M === l || M === f || w || M === v || g || p || h || typeof M == "object" && M !== null && (M.$$typeof === u || M.$$typeof === d || M.$$typeof === i || M.$$typeof === s || M.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      M.$$typeof === m || M.getModuleId !== void 0));
    }
    function y(M) {
      if (typeof M == "object" && M !== null) {
        var Me = M.$$typeof;
        switch (Me) {
          case n:
            var ke = M.type;
            switch (ke) {
              case e:
              case o:
              case r:
              case l:
              case f:
                return ke;
              default:
                var ht = ke && ke.$$typeof;
                switch (ht) {
                  case a:
                  case s:
                  case c:
                  case u:
                  case d:
                  case i:
                    return ht;
                  default:
                    return Me;
                }
            }
          case t:
            return Me;
        }
      }
    }
    var R = s, T = i, L = n, V = c, X = e, re = u, G = d, z = t, Y = o, U = r, ee = l, Z = f, J = !1, Q = !1;
    function se(M) {
      return J || (J = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function oe(M) {
      return Q || (Q = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function K(M) {
      return y(M) === s;
    }
    function te(M) {
      return y(M) === i;
    }
    function xe(M) {
      return typeof M == "object" && M !== null && M.$$typeof === n;
    }
    function ue(M) {
      return y(M) === c;
    }
    function ge(M) {
      return y(M) === e;
    }
    function j(M) {
      return y(M) === u;
    }
    function I(M) {
      return y(M) === d;
    }
    function A(M) {
      return y(M) === t;
    }
    function P(M) {
      return y(M) === o;
    }
    function E(M) {
      return y(M) === r;
    }
    function B(M) {
      return y(M) === l;
    }
    function fe(M) {
      return y(M) === f;
    }
    Se.ContextConsumer = R, Se.ContextProvider = T, Se.Element = L, Se.ForwardRef = V, Se.Fragment = X, Se.Lazy = re, Se.Memo = G, Se.Portal = z, Se.Profiler = Y, Se.StrictMode = U, Se.Suspense = ee, Se.SuspenseList = Z, Se.isAsyncMode = se, Se.isConcurrentMode = oe, Se.isContextConsumer = K, Se.isContextProvider = te, Se.isElement = xe, Se.isForwardRef = ue, Se.isFragment = ge, Se.isLazy = j, Se.isMemo = I, Se.isPortal = A, Se.isProfiler = P, Se.isStrictMode = E, Se.isSuspense = B, Se.isSuspenseList = fe, Se.isValidElementType = C, Se.typeOf = y;
  }()), Se;
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
  typeof t == "function" ? t(e) : Ee(t) === "object" && t && "current" in t && (t.current = e);
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
function Tt(n, t) {
  if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Ga(n, t) {
  for (var e = 0; e < t.length; e++) {
    var r = t[e];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, Yl(r.key), r);
  }
}
function Ot(n, t, e) {
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
function yn(n) {
  if (n === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n;
}
function Kl(n, t) {
  if (t && (Ee(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return yn(n);
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
function Yt(n) {
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
    var r, o, i, s, a = [], c = !0, l = !1;
    try {
      if (i = (e = e.call(n)).next, t === 0) {
        if (Object(e) !== e) return;
        c = !1;
      } else for (; !(c = (r = i.call(e)).done) && (a.push(r.value), a.length !== t); c = !0) ;
    } catch (f) {
      l = !0, o = f;
    } finally {
      try {
        if (!c && e.return != null && (s = e.return(), Object(s) !== s)) return;
      } finally {
        if (l) throw o;
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
function Xt() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Lh(n, t) {
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
var Za = "data-rc-order", Ja = "data-rc-priority", Mh = "rc-util-key", Zi = /* @__PURE__ */ new Map();
function ru() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = n.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : Mh;
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
  if (!Xt())
    return null;
  var e = t.csp, r = t.prepend, o = t.priority, i = o === void 0 ? 0 : o, s = Dh(r), a = s === "prependQueue", c = document.createElement("style");
  c.setAttribute(Za, s), a && i && c.setAttribute(Ja, "".concat(i)), e != null && e.nonce && (c.nonce = e == null ? void 0 : e.nonce), c.innerHTML = n;
  var l = Go(t), f = l.firstChild;
  if (r) {
    if (a) {
      var d = (t.styles || ea(l)).filter(function(u) {
        if (!["prepend", "prependQueue"].includes(u.getAttribute(Za)))
          return !1;
        var v = Number(u.getAttribute(Ja) || 0);
        return i >= v;
      });
      if (d.length)
        return l.insertBefore(c, d[d.length - 1].nextSibling), c;
    }
    l.insertBefore(c, f);
  } else
    l.appendChild(c);
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
  if (!e || !Lh(document, e)) {
    var r = ou("", t), o = r.parentNode;
    Zi.set(n, o), n.removeChild(r);
  }
}
function bn(n, t) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Go(e), o = ea(r), i = H(H({}, e), {}, {
    styles: o
  });
  Bh(r, i);
  var s = iu(t, i);
  if (s) {
    var a, c;
    if ((a = i.csp) !== null && a !== void 0 && a.nonce && s.nonce !== ((c = i.csp) === null || c === void 0 ? void 0 : c.nonce)) {
      var l;
      s.nonce = (l = i.csp) === null || l === void 0 ? void 0 : l.nonce;
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
    var l = a + 1;
    if (Array.isArray(i)) {
      if (!Array.isArray(s) || i.length !== s.length)
        return !1;
      for (var f = 0; f < i.length; f++)
        if (!o(i[f], s[f], l))
          return !1;
      return !0;
    }
    if (i && s && Ee(i) === "object" && Ee(s) === "object") {
      var d = Object.keys(i);
      return d.length !== Object.keys(s).length ? !1 : d.every(function(u) {
        return o(i[u], s[u], l);
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
    Tt(this, n), W(this, "instanceId", void 0), W(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = t;
  }
  return Ot(n, [{
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
}(), zn = "data-token-hash", _t = "data-css-hash", Uh = "data-cache-path", Zt = "__cssinjs_instance__";
function qh() {
  var n = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(_t, "]")) || [], e = document.head.firstChild;
    Array.from(t).forEach(function(o) {
      o[Zt] = o[Zt] || n, o[Zt] === n && document.head.insertBefore(o, e);
    });
    var r = {};
    Array.from(document.querySelectorAll("style[".concat(_t, "]"))).forEach(function(o) {
      var i = o.getAttribute(_t);
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
    Tt(this, n), W(this, "cache", void 0), W(this, "keys", void 0), W(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return Ot(n, [{
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
          var i = this.keys.reduce(function(l, f) {
            var d = ce(l, 2), u = d[1];
            return o.internalGet(f)[1] < u ? [f, o.internalGet(f)[1]] : l;
          }, [this.keys[0], this.cacheCallTimes]), s = ce(i, 1), a = s[0];
          this.delete(a);
        }
        this.keys.push(e);
      }
      var c = this.cache;
      e.forEach(function(l, f) {
        if (f === e.length - 1)
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
W(ta, "MAX_CACHE_SIZE", 20);
W(ta, "MAX_CACHE_OFFSET", 5);
var Qa = 0, au = /* @__PURE__ */ function() {
  function n(t) {
    Tt(this, n), W(this, "derivatives", void 0), W(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = Qa, t.length === 0 && Zs(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), Qa += 1;
  }
  return Ot(n, [{
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
    t += e, r instanceof au ? t += r.id : r && Ee(r) === "object" ? t += dr(r) : t += r;
  }), t = pr(t), ec.set(n, t)), t;
}
function tc(n, t) {
  return pr("".concat(t, "_").concat(dr(n)));
}
var es = Xt();
function So(n) {
  return typeof n == "number" ? "".concat(n, "px") : n;
}
function wo(n, t, e) {
  var r, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (i)
    return n;
  var s = H(H({}, o), {}, (r = {}, W(r, zn, t), W(r, _t, e), r)), a = Object.keys(s).map(function(c) {
    var l = s[c];
    return l ? "".concat(c, '="').concat(l, '"') : null;
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
    var a, c, l = ce(s, 2), f = l[0], d = l[1];
    if (r != null && (a = r.preserve) !== null && a !== void 0 && a[f])
      i[f] = d;
    else if ((typeof d == "string" || typeof d == "number") && !(r != null && (c = r.ignore) !== null && c !== void 0 && c[f])) {
      var u, v = ro(f, r == null ? void 0 : r.prefix);
      o[v] = typeof d == "number" && !(r != null && (u = r.unitless) !== null && u !== void 0 && u[f]) ? "".concat(d, "px") : String(d), i[f] = "var(".concat(v, ")");
    }
  }), [i, $h(o, e, {
    scope: r == null ? void 0 : r.scope
  })];
}, nc = process.env.NODE_ENV !== "test" && Xt() ? _.useLayoutEffect : _.useEffect, lu = function(t, e) {
  var r = _.useRef(!0);
  nc(function() {
    return t(r.current);
  }, e), nc(function() {
    return r.current = !1, function() {
      r.current = !0;
    };
  }, []);
}, Gh = H({}, _), rc = Gh.useInsertionEffect, Kh = function(t, e, r) {
  _.useMemo(t, r), lu(function() {
    return e(!0);
  }, r);
}, Zh = rc ? function(n, t, e) {
  return rc(function() {
    return n(), t();
  }, e);
} : Kh, Jh = H({}, _), Qh = Jh.useInsertionEffect, ex = function(t) {
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
  var i = _.useContext(Cr), s = i.cache, a = [n].concat(Yt(t)), c = Ji(a), l = nx([c]), f = ix(), d = function(p) {
    s.opUpdate(c, function(h) {
      var w = h || [void 0, void 0], S = ce(w, 2), m = S[0], C = m === void 0 ? 0 : m, y = S[1], R = y;
      process.env.NODE_ENV !== "production" && y && f && (r == null || r(R, f), R = null);
      var T = R || e(), L = [C, T];
      return p ? p(L) : L;
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
  var u = s.opGet(c);
  process.env.NODE_ENV !== "production" && !u && (d(), u = s.opGet(c));
  var v = u[1];
  return Zh(function() {
    o == null || o(v);
  }, function(g) {
    return d(function(p) {
      var h = ce(p, 2), w = h[0], S = h[1];
      return g && w === 0 && (o == null || o(v)), [w + 1, S];
    }), function() {
      s.opUpdate(c, function(p) {
        var h = p || [], w = ce(h, 2), S = w[0], m = S === void 0 ? 0 : S, C = w[1], y = m - 1;
        return y === 0 ? (l(function() {
          (g || !s.opGet(c)) && (r == null || r(C, !1));
        }), null) : [m - 1, C];
      });
    };
  }, [c]), v;
}
var ax = {}, cx = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", hn = /* @__PURE__ */ new Map();
function lx(n) {
  hn.set(n, (hn.get(n) || 0) + 1);
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
  hn.set(n, (hn.get(n) || 0) - 1);
  var e = Array.from(hn.keys()), r = e.filter(function(o) {
    var i = hn.get(o) || 0;
    return i <= 0;
  });
  e.length - r.length > fx && r.forEach(function(o) {
    ux(o, t), hn.delete(o);
  });
}
var hx = function(t, e, r, o) {
  var i = r.getDerivativeToken(t), s = H(H({}, i), e);
  return o && (s = o(s)), s;
}, uu = "token";
function xx(n, t) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = en(Cr), o = r.cache.instanceId, i = r.container, s = e.salt, a = s === void 0 ? "" : s, c = e.override, l = c === void 0 ? ax : c, f = e.formatToken, d = e.getComputedToken, u = e.cssVar, v = Xh(function() {
    return Object.assign.apply(Object, [{}].concat(Yt(t)));
  }, t), g = dr(v), p = dr(l), h = u ? dr(u) : "", w = na(uu, [a, n.id, g, p, h], function() {
    var S, m = d ? d(v, l, n) : hx(v, l, n, f), C = H({}, m), y = "";
    if (u) {
      var R = cu(m, u.key, {
        prefix: u.prefix,
        ignore: u.ignore,
        unitless: u.unitless,
        preserve: u.preserve
      }), T = ce(R, 2);
      m = T[0], y = T[1];
    }
    var L = tc(m, a);
    m._tokenKey = L, C._tokenKey = tc(C, a);
    var V = (S = u == null ? void 0 : u.key) !== null && S !== void 0 ? S : L;
    m._themeKey = V, lx(V);
    var X = "".concat(cx, "-").concat(pr(L));
    return m._hashId = X, [m, X, C, y, (u == null ? void 0 : u.key) || ""];
  }, function(S) {
    dx(S[0]._themeKey, o);
  }, function(S) {
    var m = ce(S, 4), C = m[0], y = m[3];
    if (u && y) {
      var R = bn(y, pr("css-variables-".concat(C._themeKey)), {
        mark: _t,
        prepend: "queue",
        attachTo: i,
        priority: -999
      });
      R[Zt] = o, R.setAttribute(zn, C._themeKey);
    }
  });
  return w;
}
var px = function(t, e, r) {
  var o = ce(t, 5), i = o[2], s = o[3], a = o[4], c = r || {}, l = c.plain;
  if (!s)
    return null;
  var f = i._tokenKey, d = -999, u = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(d)
  }, v = wo(s, a, f, u, l);
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
function In(n, t) {
  return n.charCodeAt(t) | 0;
}
function Vn(n, t, e) {
  return n.slice(t, e);
}
function Mt(n) {
  return n.length;
}
function wx(n) {
  return n.length;
}
function Fr(n, t) {
  return t.push(n), n;
}
var Ko = 1, Hn = 1, mu = 0, yt = 0, qe = 0, $n = "";
function oa(n, t, e, r, o, i, s, a) {
  return { value: n, root: t, parent: e, type: r, props: o, children: i, line: Ko, column: Hn, length: s, return: "", siblings: a };
}
function Ex() {
  return qe;
}
function _x() {
  return qe = yt > 0 ? In($n, --yt) : 0, Hn--, qe === 10 && (Hn = 1, Ko--), qe;
}
function Ct() {
  return qe = yt < mu ? In($n, yt++) : 0, Hn++, qe === 10 && (Hn = 1, Ko++), qe;
}
function Jt() {
  return In($n, yt);
}
function io() {
  return yt;
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
  return Ko = Hn = 1, mu = Mt($n = n), yt = 0, [];
}
function Ax(n) {
  return $n = "", n;
}
function wi(n) {
  return pu(Zo(yt - 1, ns(n === 91 ? n + 2 : n === 40 ? n + 1 : n)));
}
function Tx(n) {
  for (; (qe = Jt()) && qe < 33; )
    Ct();
  return gr(n) > 2 || gr(qe) > 3 ? "" : " ";
}
function Ox(n, t) {
  for (; --t && Ct() && !(qe < 48 || qe > 102 || qe > 57 && qe < 65 || qe > 70 && qe < 97); )
    ;
  return Zo(n, io() + (t < 6 && Jt() == 32 && Ct() == 32));
}
function ns(n) {
  for (; Ct(); )
    switch (qe) {
      // ] ) " '
      case n:
        return yt;
      // " '
      case 34:
      case 39:
        n !== 34 && n !== 39 && ns(qe);
        break;
      // (
      case 40:
        n === 41 && ns(n);
        break;
      // \
      case 92:
        Ct();
        break;
    }
  return yt;
}
function Rx(n, t) {
  for (; Ct() && n + qe !== 57; )
    if (n + qe === 84 && Jt() === 47)
      break;
  return "/*" + Zo(t, yt - 1) + "*" + ra(n === 47 ? n : Ct());
}
function kx(n) {
  for (; !gr(Jt()); )
    Ct();
  return Zo(n, yt);
}
function Px(n) {
  return Ax(so("", null, null, null, [""], n = Cx(n), 0, [0], n));
}
function so(n, t, e, r, o, i, s, a, c) {
  for (var l = 0, f = 0, d = s, u = 0, v = 0, g = 0, p = 1, h = 1, w = 1, S = 0, m = "", C = o, y = i, R = r, T = m; h; )
    switch (g = S, S = Ct()) {
      // (
      case 40:
        if (g != 108 && In(T, d - 1) == 58) {
          Sx(T += oo(wi(S), "&", "&\f"), "&\f", xu(l ? a[l - 1] : 0)) != -1 && (w = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        T += wi(S);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        T += Tx(g);
        break;
      // \
      case 92:
        T += Ox(io() - 1, 7);
        continue;
      // /
      case 47:
        switch (Jt()) {
          case 42:
          case 47:
            Fr(Ix(Rx(Ct(), io()), t, e, c), c), (gr(g || 1) == 5 || gr(Jt() || 1) == 5) && Mt(T) && Vn(T, -1, void 0) !== " " && (T += " ");
            break;
          default:
            T += "/";
        }
        break;
      // {
      case 123 * p:
        a[l++] = Mt(T) * w;
      // } ; \0
      case 125 * p:
      case 59:
      case 0:
        switch (S) {
          // \0 }
          case 0:
          case 125:
            h = 0;
          // ;
          case 59 + f:
            w == -1 && (T = oo(T, /\f/g, "")), v > 0 && (Mt(T) - d || p === 0 && g === 47) && Fr(v > 32 ? ic(T + ";", r, e, d - 1, c) : ic(oo(T, " ", "") + ";", r, e, d - 2, c), c);
            break;
          // @ ;
          case 59:
            T += ";";
          // { rule/at-rule
          default:
            if (Fr(R = oc(T, t, e, l, f, o, a, m, C = [], y = [], d, i), i), S === 123)
              if (f === 0)
                so(T, t, R, R, C, i, d, a, y);
              else {
                switch (u) {
                  // c(ontainer)
                  case 99:
                    if (In(T, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (In(T, 2) === 97) break;
                  default:
                    f = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                f ? so(n, R, R, r && Fr(oc(n, R, R, 0, 0, o, a, m, o, C = [], d, y), y), o, y, d, a, r ? C : y) : so(T, R, R, R, [""], y, 0, a, y);
              }
        }
        l = f = v = 0, p = w = 1, m = T = "", d = s;
        break;
      // :
      case 58:
        d = 1 + Mt(T), v = g;
      default:
        if (p < 1) {
          if (S == 123)
            --p;
          else if (S == 125 && p++ == 0 && _x() == 125)
            continue;
        }
        switch (T += ra(S), S * p) {
          // &
          case 38:
            w = f > 0 ? 1 : (T += "\f", -1);
            break;
          // ,
          case 44:
            a[l++] = (Mt(T) - 1) * w, w = 1;
            break;
          // @
          case 64:
            Jt() === 45 && (T += wi(Ct())), u = Jt(), f = d = Mt(m = T += kx(io())), S++;
            break;
          // -
          case 45:
            g === 45 && Mt(T) == 2 && (p = 0);
        }
    }
  return i;
}
function oc(n, t, e, r, o, i, s, a, c, l, f, d) {
  for (var u = o - 1, v = o === 0 ? i : [""], g = wx(v), p = 0, h = 0, w = 0; p < r; ++p)
    for (var S = 0, m = Vn(n, u + 1, u = xu(h = s[p])), C = n; S < g; ++S)
      (C = pu(h > 0 ? v[S] + " " + m : oo(m, /&\f/g, v[S]))) && (c[w++] = C);
  return oa(n, t, e, o === 0 ? du : a, c, l, f, d);
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
      if (!Mt(n.value = n.props.join(","))) return "";
  }
  return Mt(e = rs(n.children, r)) ? n.return = n.value + "{" + e + "}" : "";
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
}, Lx = function(t, e, r) {
  t === "animation" && r.hashId && e !== "none" && gu("You seem to be using hashed animation '".concat(e, "', in which case 'animationName' with Keyframe as value is recommended."), r);
}, sc = "data-ant-cssinjs-cache-path", vu = "_FILE_STYLE__", Sn, yu = !0;
function Mx() {
  if (!Sn && (Sn = {}, Xt())) {
    var n = document.createElement("div");
    n.className = sc, n.style.position = "fixed", n.style.visibility = "hidden", n.style.top = "-9999px", document.body.appendChild(n);
    var t = getComputedStyle(n).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(o) {
      var i = o.split(":"), s = ce(i, 2), a = s[0], c = s[1];
      Sn[a] = c;
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
  return Mx(), !!Sn[n];
}
function Bx(n) {
  var t = Sn[n], e = null;
  if (t && Xt())
    if (yu)
      e = vu;
    else {
      var r = document.querySelector("style[".concat(_t, '="').concat(Sn[n], '"]'));
      r ? e = r.innerHTML : delete Sn[n];
    }
  return [e, t];
}
var bu = "_skip_check_", Su = "_multi_value_";
function ao(n) {
  var t = rs(Px(n), Nx);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function Fx(n) {
  return Ee(n) === "object" && n && (bu in n || Su in n);
}
function ac(n, t, e) {
  if (!t)
    return n;
  var r = ".".concat(t), o = e === "low" ? ":where(".concat(r, ")") : r, i = n.split(",").map(function(s) {
    var a, c = s.trim().split(/\s+/), l = c[0] || "", f = ((a = l.match(/^\w+/)) === null || a === void 0 ? void 0 : a[0]) || "";
    return l = "".concat(f).concat(o).concat(l.slice(f.length)), [l].concat(Yt(c.slice(1))).join(" ");
  });
  return i.join(",");
}
var zx = function n(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = r.root, i = r.injectHash, s = r.parentSelectors, a = e.hashId, c = e.layer, l = e.path, f = e.hashPriority, d = e.transformers, u = d === void 0 ? [] : d, v = e.linters, g = v === void 0 ? [] : v, p = "", h = {};
  function w(C) {
    var y = C.getName(a);
    if (!h[y]) {
      var R = n(C.style, e, {
        root: !1,
        parentSelectors: s
      }), T = ce(R, 1), L = T[0];
      h[y] = "@keyframes ".concat(C.getName(a)).concat(L);
    }
  }
  function S(C) {
    var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return C.forEach(function(R) {
      Array.isArray(R) ? S(R, y) : R && y.push(R);
    }), y;
  }
  var m = S(Array.isArray(t) ? t : [t]);
  return m.forEach(function(C) {
    var y = typeof C == "string" && !o ? {} : C;
    if (typeof y == "string")
      p += "".concat(y, `
`);
    else if (y._keyframe)
      w(y);
    else {
      var R = u.reduce(function(T, L) {
        var V;
        return (L == null || (V = L.visit) === null || V === void 0 ? void 0 : V.call(L, T)) || T;
      }, y);
      Object.keys(R).forEach(function(T) {
        var L = R[T];
        if (Ee(L) === "object" && L && (T !== "animationName" || !L._keyframe) && !Fx(L)) {
          var V = !1, X = T.trim(), re = !1;
          (o || i) && a ? X.startsWith("@") ? V = !0 : X === "&" ? X = ac("", a, f) : X = ac(T, a, f) : o && !a && (X === "&" || X === "") && (X = "", re = !0);
          var G = n(L, e, {
            root: re,
            injectHash: V,
            parentSelectors: [].concat(Yt(s), [X])
          }), z = ce(G, 2), Y = z[0], U = z[1];
          h = H(H({}, h), U), p += "".concat(X).concat(Y);
        } else {
          let J = function(Q, se) {
            process.env.NODE_ENV !== "production" && (Ee(L) !== "object" || !(L != null && L[bu])) && [jx, Lx].concat(Yt(g)).forEach(function(te) {
              return te(Q, se, {
                path: l,
                hashId: a,
                parentSelectors: s
              });
            });
            var oe = Q.replace(/[A-Z]/g, function(te) {
              return "-".concat(te.toLowerCase());
            }), K = se;
            !mx[Q] && typeof K == "number" && K !== 0 && (K = "".concat(K, "px")), Q === "animationName" && se !== null && se !== void 0 && se._keyframe && (w(se), K = se.getName(a)), p += "".concat(oe, ":").concat(K, ";");
          };
          var ee, Z = (ee = L == null ? void 0 : L.value) !== null && ee !== void 0 ? ee : L;
          Ee(L) === "object" && L !== null && L !== void 0 && L[Su] && Array.isArray(Z) ? Z.forEach(function(Q) {
            J(T, Q);
          }) : J(T, Z);
        }
      });
    }
  }), o ? c && (p && (p = "@layer ".concat(c.name, " {").concat(p, "}")), c.dependencies && (h["@layer ".concat(c.name)] = c.dependencies.map(function(C) {
    return "@layer ".concat(C, ", ").concat(c.name, ";");
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
  var e = n.token, r = n.path, o = n.hashId, i = n.layer, s = n.nonce, a = n.clientOnly, c = n.order, l = c === void 0 ? 0 : c, f = _.useContext(Cr), d = f.autoClear, u = f.mock, v = f.defaultCache, g = f.hashPriority, p = f.container, h = f.ssrInline, w = f.transformers, S = f.linters, m = f.cache, C = f.layer, y = e._tokenKey, R = [y];
  C && R.push("layer"), R.push.apply(R, Yt(r));
  var T = es;
  process.env.NODE_ENV !== "production" && u !== void 0 && (T = u === "client");
  var L = na(
    Eu,
    R,
    // Create cache if needed
    function() {
      var z = R.join("|");
      if (Dx(z)) {
        var Y = Bx(z), U = ce(Y, 2), ee = U[0], Z = U[1];
        if (ee)
          return [ee, y, Z, {}, a, l];
      }
      var J = t(), Q = zx(J, {
        hashId: o,
        hashPriority: g,
        layer: C ? i : void 0,
        path: r.join("-"),
        transformers: w,
        linters: S
      }), se = ce(Q, 2), oe = se[0], K = se[1], te = ao(oe), xe = wu(R, te);
      return [te, y, xe, K, a, l];
    },
    // Remove cache if no need
    function(z, Y) {
      var U = ce(z, 3), ee = U[2];
      (Y || d) && es && su(ee, {
        mark: _t
      });
    },
    // Effect: Inject style here
    function(z) {
      var Y = ce(z, 4), U = Y[0];
      Y[1];
      var ee = Y[2], Z = Y[3];
      if (T && U !== vu) {
        var J = {
          mark: _t,
          prepend: C ? !1 : "queue",
          attachTo: p,
          priority: l
        }, Q = typeof s == "function" ? s() : s;
        Q && (J.csp = {
          nonce: Q
        });
        var se = [], oe = [];
        Object.keys(Z).forEach(function(te) {
          te.startsWith("@layer") ? se.push(te) : oe.push(te);
        }), se.forEach(function(te) {
          bn(ao(Z[te]), "_layer-".concat(te), H(H({}, J), {}, {
            prepend: !0
          }));
        });
        var K = bn(U, ee, J);
        K[Zt] = m.instanceId, K.setAttribute(zn, y), process.env.NODE_ENV !== "production" && K.setAttribute(Uh, R.join("|")), oe.forEach(function(te) {
          bn(ao(Z[te]), "_effect-".concat(te), J);
        });
      }
    }
  ), V = ce(L, 3), X = V[0], re = V[1], G = V[2];
  return function(z) {
    var Y;
    if (!h || T || !v)
      Y = /* @__PURE__ */ _.createElement(Vx, null);
    else {
      var U;
      Y = /* @__PURE__ */ _.createElement("style", zt({}, (U = {}, W(U, zn, re), W(U, _t, G), U), {
        dangerouslySetInnerHTML: {
          __html: X
        }
      }));
    }
    return /* @__PURE__ */ _.createElement(_.Fragment, null, Y, z);
  };
}
var Hx = function(t, e, r) {
  var o = ce(t, 6), i = o[0], s = o[1], a = o[2], c = o[3], l = o[4], f = o[5], d = r || {}, u = d.plain;
  if (l)
    return null;
  var v = i, g = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(f)
  };
  return v = wo(i, s, a, g, u), c && Object.keys(c).forEach(function(p) {
    if (!e[p]) {
      e[p] = !0;
      var h = ao(c[p]), w = wo(h, s, "_effect-".concat(p), g, u);
      p.startsWith("@layer") ? v = w + v : v += w;
    }
  }), [f, a, v];
}, _u = "cssVar", Ux = function(t, e) {
  var r = t.key, o = t.prefix, i = t.unitless, s = t.ignore, a = t.token, c = t.scope, l = c === void 0 ? "" : c, f = en(Cr), d = f.cache.instanceId, u = f.container, v = a._tokenKey, g = [].concat(Yt(t.path), [r, l, v]), p = na(_u, g, function() {
    var h = e(), w = cu(h, r, {
      prefix: o,
      unitless: i,
      ignore: s,
      scope: l
    }), S = ce(w, 2), m = S[0], C = S[1], y = wu(g, C);
    return [m, C, y, r];
  }, function(h) {
    var w = ce(h, 3), S = w[2];
    es && su(S, {
      mark: _t
    });
  }, function(h) {
    var w = ce(h, 3), S = w[1], m = w[2];
    if (S) {
      var C = bn(S, m, {
        mark: _t,
        prepend: "queue",
        attachTo: u,
        priority: -999
      });
      C[Zt] = d, C.setAttribute(zn, r);
    }
  });
  return p;
}, qx = function(t, e, r) {
  var o = ce(t, 4), i = o[1], s = o[2], a = o[3], c = r || {}, l = c.plain;
  if (!i)
    return null;
  var f = -999, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(f)
  }, u = wo(i, a, s, d, l);
  return [f, s, u];
}, or;
or = {}, W(or, Eu, Hx), W(or, uu, px), W(or, _u, qx);
var Cu = /* @__PURE__ */ function() {
  function n(t, e) {
    Tt(this, n), W(this, "name", void 0), W(this, "style", void 0), W(this, "_keyframe", !0), this.name = t, this.style = e;
  }
  return Ot(n, [{
    key: "getName",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return e ? "".concat(e, "-").concat(this.name) : this.name;
    }
  }]), n;
}();
function On(n) {
  return n.notSplit = !0, n;
}
On(["borderTop", "borderBottom"]), On(["borderTop"]), On(["borderBottom"]), On(["borderLeft", "borderRight"]), On(["borderLeft"]), On(["borderRight"]);
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
  return !n && typeof i == "number" ? a = [] : Array.isArray(n) ? a = Yt(n) : a = H({}, n), r && e === void 0 && s.length === 1 ? delete a[i][s[0]] : a[i] = Au(a[i], s, e, r), a;
}
function Ei(n, t, e) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && r && e === void 0 && !is(n, t.slice(0, -1)) ? n : Au(n, t, e, r);
}
function Yx(n) {
  return Ee(n) === "object" && n !== null && Object.getPrototypeOf(n) === Object.prototype;
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
      var c = new Set(a), l = is(o, s), f = Array.isArray(l);
      if (f || Yx(l)) {
        if (!c.has(l)) {
          c.add(l);
          var d = is(r, s);
          f ? r = Ei(r, s, []) : (!d || Ee(d) !== "object") && (r = Ei(r, s, cc(l))), Xx(l).forEach(function(u) {
            i([].concat(Yt(s), [u]), c);
          });
        }
      } else
        r = Ei(r, s, l);
    }
    i([]);
  }), r;
}
function Tu() {
}
let Ut = null;
function Gx() {
  Ut = null, ql();
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
        const s = Ut;
        Ut || (Ut = {}), Ut[n] = Ut[n] || [], Ut[n].includes(i || "") || Ut[n].push(i || ""), s || console.warn("[antd] There exists deprecated usage in your code:", Ut);
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
}, Jo = sa, Kx = /* @__PURE__ */ Fs(void 0), dt = "${label} is not a valid ${type}", Qo = {
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
        string: dt,
        method: dt,
        array: dt,
        object: dt,
        number: dt,
        date: dt,
        boolean: dt,
        integer: dt,
        float: dt,
        regexp: dt,
        email: dt,
        url: dt,
        hex: dt
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
}), Ze = Math.round;
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
class Fe {
  constructor(t) {
    W(this, "isValid", !0), W(this, "r", 0), W(this, "g", 0), W(this, "b", 0), W(this, "a", 1), W(this, "_h", void 0), W(this, "_s", void 0), W(this, "_l", void 0), W(this, "_v", void 0), W(this, "_max", void 0), W(this, "_min", void 0), W(this, "_brightness", void 0);
    function e(r) {
      return r[0] in t && r[1] in t && r[2] in t;
    }
    if (t) if (typeof t == "string") {
      let o = function(i) {
        return r.startsWith(i);
      };
      const r = t.trim();
      /^#?[A-F\d]{3,8}$/i.test(r) ? this.fromHexString(r) : o("rgb") ? this.fromRgbString(r) : o("hsl") ? this.fromHslString(r) : (o("hsv") || o("hsb")) && this.fromHsvString(r);
    } else if (t instanceof Fe)
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
      t === 0 ? this._h = 0 : this._h = Ze(60 * (this.r === this.getMax() ? (this.g - this.b) / t + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / t + 2 : (this.r - this.g) / t + 4));
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
      r: Ze(i("r")),
      g: Ze(i("g")),
      b: Ze(i("b")),
      a: Ze(i("a") * 100) / 100
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
    const e = this._c(t), r = this.a + e.a * (1 - this.a), o = (i) => Ze((this[i] * this.a + e[i] * e.a * (1 - this.a)) / r);
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
      const i = Ze(this.a * 255).toString(16);
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
    const t = this.getHue(), e = Ze(this.getSaturation() * 100), r = Ze(this.getLightness() * 100);
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
      const u = Ze(r * 255);
      this.r = u, this.g = u, this.b = u;
    }
    let i = 0, s = 0, a = 0;
    const c = t / 60, l = (1 - Math.abs(2 * r - 1)) * e, f = l * (1 - Math.abs(c % 2 - 1));
    c >= 0 && c < 1 ? (i = l, s = f) : c >= 1 && c < 2 ? (i = f, s = l) : c >= 2 && c < 3 ? (s = l, a = f) : c >= 3 && c < 4 ? (s = f, a = l) : c >= 4 && c < 5 ? (i = f, a = l) : c >= 5 && c < 6 && (i = l, a = f);
    const d = r - l / 2;
    this.r = Ze((i + d) * 255), this.g = Ze((s + d) * 255), this.b = Ze((a + d) * 255);
  }
  fromHsv({
    h: t,
    s: e,
    v: r,
    a: o
  }) {
    this._h = t % 360, this._s = e, this._v = r, this.a = typeof o == "number" ? o : 1;
    const i = Ze(r * 255);
    if (this.r = i, this.g = i, this.b = i, e <= 0)
      return;
    const s = t / 60, a = Math.floor(s), c = s - a, l = Ze(r * (1 - e) * 255), f = Ze(r * (1 - e * c) * 255), d = Ze(r * (1 - e * (1 - c)) * 255);
    switch (a) {
      case 0:
        this.g = d, this.b = l;
        break;
      case 1:
        this.r = f, this.b = l;
        break;
      case 2:
        this.r = l, this.b = d;
        break;
      case 3:
        this.r = l, this.g = f;
        break;
      case 4:
        this.r = d, this.g = l;
        break;
      case 5:
      default:
        this.g = l, this.b = f;
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
      o.includes("%") ? Ze(r / 100 * 255) : r
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
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = [], r = new Fe(n), o = r.toHsv(), i = Nu; i > 0; i -= 1) {
    var s = new Fe({
      h: dc(o, i, !0),
      s: hc(o, i, !0),
      v: xc(o, i, !0)
    });
    e.push(s);
  }
  e.push(r);
  for (var a = 1; a <= ju; a += 1) {
    var c = new Fe({
      h: dc(o, a),
      s: hc(o, a),
      v: xc(o, a)
    });
    e.push(c);
  }
  return t.theme === "dark" ? tp.map(function(l) {
    var f = l.index, d = l.amount;
    return new Fe(t.backgroundColor || "#141414").mix(e[f], d).toHexString();
  }) : e.map(function(l) {
    return l.toHexString();
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
    colorBgBase: l,
    colorTextBase: f
  } = n, d = e(c), u = e(o), v = e(i), g = e(s), p = e(a), h = r(l, f), w = n.colorLink || n.colorInfo, S = e(w), m = new Fe(g[1]).mix(new Fe(g[3]), 50).toHexString();
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
    colorSuccessBg: u[1],
    colorSuccessBgHover: u[2],
    colorSuccessBorder: u[3],
    colorSuccessBorderHover: u[4],
    colorSuccessHover: u[4],
    colorSuccess: u[6],
    colorSuccessActive: u[7],
    colorSuccessTextHover: u[8],
    colorSuccessText: u[9],
    colorSuccessTextActive: u[10],
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
    colorLinkHover: S[4],
    colorLink: S[6],
    colorLinkActive: S[7],
    colorBgMask: new Fe("#000").setA(0.45).toRgbString(),
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
  const t = ap(n), e = t.map((f) => f.size), r = t.map((f) => f.lineHeight), o = e[1], i = e[0], s = e[2], a = r[1], c = r[0], l = r[2];
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
const mt = (n, t) => new Fe(n).setA(t).toRgbString(), sr = (n, t) => new Fe(n).darken(t).toHexString(), up = (n) => {
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
    colorText: mt(r, 0.88),
    colorTextSecondary: mt(r, 0.65),
    colorTextTertiary: mt(r, 0.45),
    colorTextQuaternary: mt(r, 0.25),
    colorFill: mt(r, 0.15),
    colorFillSecondary: mt(r, 0.06),
    colorFillTertiary: mt(r, 0.04),
    colorFillQuaternary: mt(r, 0.02),
    colorBgSolid: mt(r, 1),
    colorBgSolidHover: mt(r, 0.75),
    colorBgSolidActive: mt(r, 0.95),
    colorBgLayout: sr(e, 4),
    colorBgContainer: sr(e, 0),
    colorBgElevated: sr(e, 0),
    colorBgSpotlight: mt(r, 0.85),
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
const Lu = Qi(dp), vs = {
  token: vr,
  override: {
    override: vr
  },
  hashed: !0
}, Mu = /* @__PURE__ */ ze.createContext(vs), ys = "ant", aa = "anticon", hp = (n, t) => t || (n ? `${ys}-${n}` : ys), tn = /* @__PURE__ */ _.createContext({
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
    const c = new Fe(s), l = yr(c.toRgbString());
    e[`${a}-color`] = r(c), e[`${a}-color-disabled`] = l[1], e[`${a}-color-hover`] = l[4], e[`${a}-color-active`] = l[6], e[`${a}-color-outline`] = c.clone().setA(0.2).toRgbString(), e[`${a}-color-deprecated-bg`] = l[0], e[`${a}-color-deprecated-border`] = l[2];
  };
  if (t.primaryColor) {
    o(t.primaryColor, "primary");
    const s = new Fe(t.primaryColor), a = yr(s.toRgbString());
    a.forEach((l, f) => {
      e[`primary-${f + 1}`] = l;
    }), e["primary-color-deprecated-l-35"] = r(s, (l) => l.lighten(35)), e["primary-color-deprecated-l-20"] = r(s, (l) => l.lighten(20)), e["primary-color-deprecated-t-20"] = r(s, (l) => l.tint(20)), e["primary-color-deprecated-t-50"] = r(s, (l) => l.tint(50)), e["primary-color-deprecated-f-12"] = r(s, (l) => l.setA(l.a * 0.12));
    const c = new Fe(a[0]);
    e["primary-color-active-deprecated-f-30"] = r(c, (l) => l.setA(l.a * 0.3)), e["primary-color-active-deprecated-d-02"] = r(c, (l) => l.darken(2));
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
  Xt() ? bn(e, `${xp}-dynamic-theme`) : process.env.NODE_ENV !== "production" && Jo(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
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
var Bu = /* @__PURE__ */ Ot(function n() {
  Tt(this, n);
}), Fu = "CALC_UNIT", bp = new RegExp(Fu, "g");
function Ti(n) {
  return typeof n == "number" ? "".concat(n).concat(Fu) : n;
}
var Sp = /* @__PURE__ */ function(n) {
  _r(e, n);
  var t = Xo(e);
  function e(r, o) {
    var i;
    Tt(this, e), i = t.call(this), W(yn(i), "result", ""), W(yn(i), "unitlessCssVar", void 0), W(yn(i), "lowPriority", void 0);
    var s = Ee(r);
    return i.unitlessCssVar = o, r instanceof e ? i.result = "(".concat(r.result, ")") : s === "number" ? i.result = Ti(r) : s === "string" && (i.result = r), i;
  }
  return Ot(e, [{
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
      return typeof a == "boolean" ? c = a : Array.from(this.unitlessCssVar).some(function(l) {
        return i.result.includes(l);
      }) && (c = !1), this.result = this.result.replace(bp, c ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), e;
}(Bu), wp = /* @__PURE__ */ function(n) {
  _r(e, n);
  var t = Xo(e);
  function e(r) {
    var o;
    return Tt(this, e), o = t.call(this), W(yn(o), "result", 0), r instanceof e ? o.result = r.result : typeof r == "number" && (o.result = r), o;
  }
  return Ot(e, [{
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
  var o = H({}, t[n]);
  if (r != null && r.deprecatedTokens) {
    var i = r.deprecatedTokens;
    i.forEach(function(a) {
      var c = ce(a, 2), l = c[0], f = c[1];
      if (process.env.NODE_ENV !== "production" && nn(!(o != null && o[l]), "Component Token `".concat(String(l), "` of ").concat(String(n), " is deprecated. Please use `").concat(String(f), "` instead.")), o != null && o[l] || o != null && o[f]) {
        var d;
        (d = o[f]) !== null && d !== void 0 || (o[f] = o == null ? void 0 : o[l]);
      }
    });
  }
  var s = H(H({}, e), o);
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
      component: H(H({}, (c = vc[s]) === null || c === void 0 ? void 0 : c.component), a)
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
    Tt(this, n), W(this, "map", /* @__PURE__ */ new Map()), W(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), W(this, "nextID", 0), W(this, "lastAccessBeat", /* @__PURE__ */ new Map()), W(this, "accessBeat", 0);
  }
  return Ot(n, [{
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
        return i && Ee(i) === "object" ? "obj_".concat(r.getObjectID(i)) : "".concat(Ee(i), "_").concat(i);
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
  return ze.useMemo(function() {
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
  function c(u, v, g, p) {
    var h = Array.isArray(u) ? u[0] : u;
    function w(L) {
      return "".concat(String(h)).concat(L.slice(0, 1).toUpperCase()).concat(L.slice(1));
    }
    var S = (p == null ? void 0 : p.unitless) || {}, m = typeof a == "function" ? a(u) : {}, C = H(H({}, m), {}, W({}, w("zIndexPopup"), !0));
    Object.keys(S).forEach(function(L) {
      C[w(L)] = S[L];
    });
    var y = H(H({}, p), {}, {
      unitless: C,
      prefixToken: w
    }), R = f(u, v, g, y), T = l(h, g, y);
    return function(L) {
      var V = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : L, X = R(L, V), re = ce(X, 2), G = re[1], z = T(V), Y = ce(z, 2), U = Y[0], ee = Y[1];
      return [U, G, ee];
    };
  }
  function l(u, v, g) {
    var p = g.unitless, h = g.injectStyle, w = h === void 0 ? !0 : h, S = g.prefixToken, m = g.ignore, C = function(T) {
      var L = T.rootCls, V = T.cssVar, X = V === void 0 ? {} : V, re = r(), G = re.realToken;
      return Ux({
        path: [u],
        prefix: X.prefix,
        key: X.key,
        unitless: p,
        ignore: m,
        token: G,
        scope: L
      }, function() {
        var z = yc(u, G, v), Y = gc(u, G, z, {
          deprecatedTokens: g == null ? void 0 : g.deprecatedTokens
        });
        return Object.keys(z).forEach(function(U) {
          Y[S(U)] = Y[U], delete Y[U];
        }), Y;
      }), null;
    }, y = function(T) {
      var L = r(), V = L.cssVar;
      return [function(X) {
        return w && V ? /* @__PURE__ */ ze.createElement(ze.Fragment, null, /* @__PURE__ */ ze.createElement(C, {
          rootCls: T,
          cssVar: V,
          component: u
        }), X) : X;
      }, V == null ? void 0 : V.key];
    };
    return y;
  }
  function f(u, v, g) {
    var p = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, h = Array.isArray(u) ? u : [u, u], w = ce(h, 1), S = w[0], m = h.join("-"), C = n.layer || {
      name: "antd"
    };
    return function(y) {
      var R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : y, T = r(), L = T.theme, V = T.realToken, X = T.hashId, re = T.token, G = T.cssVar, z = o(), Y = z.rootPrefixCls, U = z.iconPrefixCls, ee = e(), Z = G ? "css" : "js", J = Rp(function() {
        var xe = /* @__PURE__ */ new Set();
        return G && Object.keys(p.unitless || {}).forEach(function(ue) {
          xe.add(ro(ue, G.prefix)), xe.add(ro(ue, mc(S, G.prefix)));
        }), Ep(Z, xe);
      }, [Z, S, G == null ? void 0 : G.prefix]), Q = Ap(Z), se = Q.max, oe = Q.min, K = {
        theme: L,
        token: re,
        hashId: X,
        nonce: function() {
          return ee.nonce;
        },
        clientOnly: p.clientOnly,
        layer: C,
        // antd is always at top of styles
        order: p.order || -999
      };
      typeof i == "function" && os(H(H({}, K), {}, {
        clientOnly: !1,
        path: ["Shared", Y]
      }), function() {
        return i(re, {
          prefix: {
            rootPrefixCls: Y,
            iconPrefixCls: U
          },
          csp: ee
        });
      });
      var te = os(H(H({}, K), {}, {
        path: [m, y, U]
      }), function() {
        if (p.injectStyle === !1)
          return [];
        var xe = Cp(re), ue = xe.token, ge = xe.flush, j = yc(S, V, g), I = ".".concat(y), A = gc(S, V, j, {
          deprecatedTokens: p.deprecatedTokens
        });
        G && j && Ee(j) === "object" && Object.keys(j).forEach(function(fe) {
          j[fe] = "var(".concat(ro(fe, mc(S, G.prefix)), ")");
        });
        var P = ei(ue, {
          componentCls: I,
          prefixCls: y,
          iconCls: ".".concat(U),
          antCls: ".".concat(Y),
          calc: J,
          // @ts-ignore
          max: se,
          // @ts-ignore
          min: oe
        }, G ? j : A), E = v(P, {
          hashId: X,
          prefixCls: y,
          rootPrefixCls: Y,
          iconPrefixCls: U
        });
        ge(S, A);
        var B = typeof s == "function" ? s(P, y, R, p.resetFont) : null;
        return [p.resetStyle === !1 ? null : B, E];
      });
      return [te, X];
    };
  }
  function d(u, v, g) {
    var p = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, h = f(u, v, g, H({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, p)), w = function(m) {
      var C = m.prefixCls, y = m.rootCls, R = y === void 0 ? C : y;
      return h(C, R), null;
    };
    return process.env.NODE_ENV !== "production" && (w.displayName = "SubStyle_".concat(String(Array.isArray(u) ? u.join(".") : u))), w;
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
  } = new Fe(n).toRgb();
  if (i < 1)
    return n;
  const {
    r: s,
    g: a,
    b: c
  } = new Fe(t).toRgb();
  for (let l = 0.01; l <= 1; l += 0.01) {
    const f = Math.round((e - s * (1 - l)) / l), d = Math.round((r - a * (1 - l)) / l), u = Math.round((o - c * (1 - l)) / l);
    if (Oi(f) && Oi(d) && Oi(u))
      return new Fe({
        r: f,
        g: d,
        b: u,
        a: Math.round(l * 100) / 100
      }).toRgbString();
  }
  return new Fe({
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
  Object.keys(vr).forEach((u) => {
    delete r[u];
  });
  const o = Object.assign(Object.assign({}, e), r), i = 480, s = 576, a = 768, c = 992, l = 1200, f = 1600;
  if (o.motion === !1) {
    const u = "0s";
    o.motionDurationFast = u, o.motionDurationMid = u, o.motionDurationSlow = u;
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
    screenLGMax: l - 1,
    screenXL: l,
    screenXLMin: l,
    screenXLMax: f - 1,
    screenXXL: f,
    screenXXLMin: f,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new Fe("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new Fe("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new Fe("rgba(0, 0, 0, 0.09)").toRgbString()}
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
}, Uu = (n, t, e) => {
  const r = e.getDerivativeToken(n), {
    override: o
  } = t, i = Sc(t, ["override"]);
  let s = Object.assign(Object.assign({}, r), {
    override: o
  });
  return s = Vu(s), i && Object.entries(i).forEach((a) => {
    let [c, l] = a;
    const {
      theme: f
    } = l, d = Sc(l, ["theme"]);
    let u = d;
    f && (u = Uu(Object.assign(Object.assign({}, s), d), {
      override: d
    }, f)), s[c] = u;
  }), s;
};
function ca() {
  const {
    token: n,
    hashed: t,
    theme: e,
    override: r,
    cssVar: o
  } = ze.useContext(Mu), i = `${Ip}-${t || ""}`, s = e || Lu, [a, c, l] = xx(s, [vr, n], {
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
  return [s, l, t ? c : "", a, o];
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
  [`.${n}`]: Object.assign(Object.assign({}, Mp()), {
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
    const l = s.cssVar || a.cssVar, f = !!(typeof s.cssVar == "object" && (!((o = s.cssVar) === null || o === void 0) && o.key) || c);
    process.env.NODE_ENV !== "production" && i(!l || f, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return Xl(() => {
    var l, f;
    if (!n)
      return t;
    const d = Object.assign({}, a.components);
    Object.keys(n.components || {}).forEach((g) => {
      d[g] = Object.assign(Object.assign({}, d[g]), n.components[g]);
    });
    const u = `css-var-${c.replace(/:/g, "")}`, v = ((l = s.cssVar) !== null && l !== void 0 ? l : a.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: e == null ? void 0 : e.prefixCls
    }, typeof a.cssVar == "object" ? a.cssVar : {}), typeof s.cssVar == "object" ? s.cssVar : {}), {
      key: typeof s.cssVar == "object" && ((f = s.cssVar) === null || f === void 0 ? void 0 : f.key) || u
    });
    return Object.assign(Object.assign(Object.assign({}, a), s), {
      token: Object.assign(Object.assign({}, a.token), s.token),
      components: d,
      cssVar: v
    });
  }, [s, a], (l, f) => l.some((d, u) => {
    const v = f[u];
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
    return Tt(this, e), t.apply(this, arguments);
  }
  return Ot(e, [{
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
var Gt = "none", Hr = "appear", Ur = "enter", qr = "leave", Ec = "none", wt = "prepare", Rn = "start", kn = "active", ua = "end", Xu = "prepared";
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
var Gp = $p(Xt(), typeof window < "u" ? window : {}), $u = {};
if (Xt()) {
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
  if (Ee(n) === "object") {
    var e = t.replace(/-\w/g, function(r) {
      return r[1].toUpperCase();
    });
    return n[e];
  }
  return "".concat(n, "-").concat(t);
}
const Zp = function(n) {
  var t = Ge();
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
var Qu = Xt() ? r0 : st;
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
var Qp = [wt, Rn, kn, ua], e1 = [wt, Xu], ef = !1, t1 = !0;
function tf(n) {
  return n === kn || n === ua;
}
const n1 = function(n, t, e) {
  var r = ws(Ec), o = ce(r, 2), i = o[0], s = o[1], a = Jp(), c = ce(a, 2), l = c[0], f = c[1];
  function d() {
    s(wt, !0);
  }
  var u = t ? e1 : Qp;
  return Qu(function() {
    if (i !== Ec && i !== ua) {
      var v = u.indexOf(i), g = u[v + 1], p = e(i);
      p === ef ? s(g, !0) : g && l(function(h) {
        function w() {
          h.isCanceled() || s(g, !0);
        }
        p === !0 ? w() : Promise.resolve(p).then(w);
      });
    }
  }, [n, i]), _.useEffect(function() {
    return function() {
      f();
    };
  }, []), [d, i];
};
function r1(n, t, e, r) {
  var o = r.motionEnter, i = o === void 0 ? !0 : o, s = r.motionAppear, a = s === void 0 ? !0 : s, c = r.motionLeave, l = c === void 0 ? !0 : c, f = r.motionDeadline, d = r.motionLeaveImmediately, u = r.onAppearPrepare, v = r.onEnterPrepare, g = r.onLeavePrepare, p = r.onAppearStart, h = r.onEnterStart, w = r.onLeaveStart, S = r.onAppearActive, m = r.onEnterActive, C = r.onLeaveActive, y = r.onAppearEnd, R = r.onEnterEnd, T = r.onLeaveEnd, L = r.onVisibleChanged, V = ws(), X = ce(V, 2), re = X[0], G = X[1], z = Xp(Gt), Y = ce(z, 2), U = Y[0], ee = Y[1], Z = ws(null), J = ce(Z, 2), Q = J[0], se = J[1], oe = U(), K = Ge(!1), te = Ge(null);
  function xe() {
    return e();
  }
  var ue = Ge(!1);
  function ge() {
    ee(Gt), se(null, !0);
  }
  var j = Ss(function(De) {
    var Ce = U();
    if (Ce !== Gt) {
      var Qe = xe();
      if (!(De && !De.deadline && De.target !== Qe)) {
        var bt = ue.current, xt;
        Ce === Hr && bt ? xt = y == null ? void 0 : y(Qe, De) : Ce === Ur && bt ? xt = R == null ? void 0 : R(Qe, De) : Ce === qr && bt && (xt = T == null ? void 0 : T(Qe, De)), bt && xt !== !1 && ge();
      }
    }
  }), I = Zp(j), A = ce(I, 1), P = A[0], E = function(Ce) {
    switch (Ce) {
      case Hr:
        return W(W(W({}, wt, u), Rn, p), kn, S);
      case Ur:
        return W(W(W({}, wt, v), Rn, h), kn, m);
      case qr:
        return W(W(W({}, wt, g), Rn, w), kn, C);
      default:
        return {};
    }
  }, B = _.useMemo(function() {
    return E(oe);
  }, [oe]), fe = n1(oe, !n, function(De) {
    if (De === wt) {
      var Ce = B[wt];
      return Ce ? Ce(xe()) : ef;
    }
    if (ke in B) {
      var Qe;
      se(((Qe = B[ke]) === null || Qe === void 0 ? void 0 : Qe.call(B, xe(), null)) || null);
    }
    return ke === kn && oe !== Gt && (P(xe()), f > 0 && (clearTimeout(te.current), te.current = setTimeout(function() {
      j({
        deadline: !0
      });
    }, f))), ke === Xu && ge(), t1;
  }), M = ce(fe, 2), Me = M[0], ke = M[1], ht = tf(ke);
  ue.current = ht;
  var kt = Ge(null);
  Qu(function() {
    if (!(K.current && kt.current === t)) {
      G(t);
      var De = K.current;
      K.current = !0;
      var Ce;
      !De && t && a && (Ce = Hr), De && t && i && (Ce = Ur), (De && !t && l || !De && d && !t && l) && (Ce = qr);
      var Qe = E(Ce);
      Ce && (n || Qe[wt]) ? (ee(Ce), Me()) : ee(Gt), kt.current = t;
    }
  }, [t]), st(function() {
    // Cancel appear
    (oe === Hr && !a || // Cancel enter
    oe === Ur && !i || // Cancel leave
    oe === qr && !l) && ee(Gt);
  }, [a, i, l]), st(function() {
    return function() {
      K.current = !1, clearTimeout(te.current);
    };
  }, []);
  var ut = _.useRef(!1);
  st(function() {
    re && (ut.current = !0), re !== void 0 && oe === Gt && ((ut.current || re) && (L == null || L(re)), ut.current = !0);
  }, [re, oe]);
  var Pt = Q;
  return B[wt] && ke === Rn && (Pt = H({
    transition: "none"
  }, Pt)), [oe, ke, Pt, re ?? t];
}
function o1(n) {
  var t = n;
  Ee(n) === "object" && (t = n.transitionSupport);
  function e(o, i) {
    return !!(o.motionName && t && i !== !1);
  }
  var r = /* @__PURE__ */ _.forwardRef(function(o, i) {
    var s = o.visible, a = s === void 0 ? !0 : s, c = o.removeOnLeave, l = c === void 0 ? !0 : c, f = o.forceRender, d = o.children, u = o.motionName, v = o.leavedClassName, g = o.eventProps, p = _.useContext(Yu), h = p.motion, w = e(o, h), S = Ge(), m = Ge();
    function C() {
      try {
        return S.current instanceof HTMLElement ? S.current : _h(m.current);
      } catch {
        return null;
      }
    }
    var y = r1(w, a, C, o), R = ce(y, 4), T = R[0], L = R[1], V = R[2], X = R[3], re = _.useRef(X);
    X && (re.current = !0);
    var G = _.useCallback(function(J) {
      S.current = J, $l(i, J);
    }, [i]), z, Y = H(H({}, g), {}, {
      visible: a
    });
    if (!d)
      z = null;
    else if (T === Gt)
      X ? z = d(H({}, Y), G) : !l && re.current && v ? z = d(H(H({}, Y), {}, {
        className: v
      }), G) : f || !l && !v ? z = d(H(H({}, Y), {}, {
        style: {
          display: "none"
        }
      }), G) : z = null;
    else {
      var U;
      L === wt ? U = "prepare" : tf(L) ? U = "active" : L === Rn && (U = "start");
      var ee = Tc(u, "".concat(T, "-").concat(U));
      z = d(H(H({}, Y), {}, {
        className: rt(Tc(u, T), W(W({}, ee, ee && U), u, typeof u == "string")),
        style: V
      }), G);
    }
    if (/* @__PURE__ */ _.isValidElement(z) && kh(z)) {
      var Z = Ph(z);
      Z || (z = /* @__PURE__ */ _.cloneElement(z, {
        ref: G
      }));
    }
    return /* @__PURE__ */ _.createElement(Yp, {
      ref: m
    }, z);
  });
  return r.displayName = "CSSMotion", r;
}
const nf = o1(Ju);
var _s = "add", Cs = "keep", As = "remove", Ri = "removed";
function i1(n) {
  var t;
  return n && Ee(n) === "object" && "key" in n ? t = n : t = {
    key: n
  }, H(H({}, t), {}, {
    key: String(t.key)
  });
}
function Ts() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return n.map(i1);
}
function s1() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], e = [], r = 0, o = t.length, i = Ts(n), s = Ts(t);
  i.forEach(function(l) {
    for (var f = !1, d = r; d < o; d += 1) {
      var u = s[d];
      if (u.key === l.key) {
        r < d && (e = e.concat(s.slice(r, d).map(function(v) {
          return H(H({}, v), {}, {
            status: _s
          });
        })), r = d), e.push(H(H({}, u), {}, {
          status: Cs
        })), r += 1, f = !0;
        break;
      }
    }
    f || e.push(H(H({}, l), {}, {
      status: As
    }));
  }), r < o && (e = e.concat(s.slice(r).map(function(l) {
    return H(H({}, l), {}, {
      status: _s
    });
  })));
  var a = {};
  e.forEach(function(l) {
    var f = l.key;
    a[f] = (a[f] || 0) + 1;
  });
  var c = Object.keys(a).filter(function(l) {
    return a[l] > 1;
  });
  return c.forEach(function(l) {
    e = e.filter(function(f) {
      var d = f.key, u = f.status;
      return d !== l || u !== As;
    }), e.forEach(function(f) {
      f.key === l && (f.status = Cs);
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
      Tt(this, i);
      for (var a = arguments.length, c = new Array(a), l = 0; l < a; l++)
        c[l] = arguments[l];
      return s = o.call.apply(o, [this].concat(c)), W(yn(s), "state", {
        keyEntities: []
      }), W(yn(s), "removeKey", function(f) {
        s.setState(function(d) {
          var u = d.keyEntities.map(function(v) {
            return v.key !== f ? v : H(H({}, v), {}, {
              status: Ri
            });
          });
          return {
            keyEntities: u
          };
        }, function() {
          var d = s.state.keyEntities, u = d.filter(function(v) {
            var g = v.status;
            return g !== Ri;
          }).length;
          u === 0 && s.props.onAllRemoved && s.props.onAllRemoved();
        });
      }), s;
    }
    return Ot(i, [{
      key: "render",
      value: function() {
        var a = this, c = this.state.keyEntities, l = this.props, f = l.component, d = l.children, u = l.onVisibleChanged;
        l.onAllRemoved;
        var v = mr(l, a1), g = f || _.Fragment, p = {};
        return l1.forEach(function(h) {
          p[h] = v[h], delete v[h];
        }), delete v.keys, /* @__PURE__ */ _.createElement(g, v, c.map(function(h, w) {
          var S = h.status, m = mr(h, c1), C = S === _s || S === Cs;
          return /* @__PURE__ */ _.createElement(t, zt({}, p, {
            key: m.key,
            visible: C,
            eventProps: m,
            onVisibleChanged: function(R) {
              u == null || u(R, {
                key: m.key
              }), R || a.removeKey(m.key);
            }
          }), function(y, R) {
            return d(H(H({}, y), {}, {
              index: w
            }), R);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(a, c) {
        var l = a.keys, f = c.keyEntities, d = Ts(l), u = s1(f, d);
        return {
          keyEntities: u.filter(function(v) {
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
  return W(e, "defaultProps", {
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
    direction: l,
    space: f,
    splitter: d,
    virtual: u,
    dropdownMatchSelectWidth: v,
    popupMatchSelectWidth: g,
    popupOverflow: p,
    legacyLocale: h,
    parentContext: w,
    iconPrefixCls: S,
    theme: m,
    componentDisabled: C,
    segmented: y,
    statistic: R,
    spin: T,
    calendar: L,
    carousel: V,
    cascader: X,
    collapse: re,
    typography: G,
    checkbox: z,
    descriptions: Y,
    divider: U,
    drawer: ee,
    skeleton: Z,
    steps: J,
    image: Q,
    layout: se,
    list: oe,
    mentions: K,
    modal: te,
    progress: xe,
    result: ue,
    slider: ge,
    breadcrumb: j,
    menu: I,
    pagination: A,
    input: P,
    textArea: E,
    empty: B,
    badge: fe,
    radio: M,
    rate: Me,
    switch: ke,
    transfer: ht,
    avatar: kt,
    message: ut,
    tag: Pt,
    table: De,
    card: Ce,
    tabs: Qe,
    timeline: bt,
    timePicker: xt,
    upload: on,
    notification: sn,
    tree: Cn,
    colorPicker: an,
    datePicker: cn,
    rangePicker: N,
    flex: b,
    wave: ve,
    dropdown: Te,
    warning: Oe,
    tour: F,
    tooltip: pe,
    popover: he,
    popconfirm: et,
    floatButtonGroup: Ke,
    variant: ft,
    inputNumber: ln,
    treeSelect: Re
  } = n, Ve = _.useCallback((Ie, x) => {
    const {
      prefixCls: k
    } = n;
    if (x)
      return x;
    const D = k || w.getPrefixCls("");
    return Ie ? `${D}-${Ie}` : D;
  }, [w.getPrefixCls, n.prefixCls]), He = S || w.iconPrefixCls || aa, pt = e || w.csp;
  Fp(He, pt);
  const Ye = Up(m, w.theme, {
    prefixCls: Ve("")
  });
  process.env.NODE_ENV !== "production" && (Os = Os || !!Ye);
  const It = {
    csp: pt,
    autoInsertSpaceInButton: r,
    alert: o,
    anchor: i,
    locale: a || h,
    direction: l,
    space: f,
    splitter: d,
    virtual: u,
    popupMatchSelectWidth: g ?? v,
    popupOverflow: p,
    getPrefixCls: Ve,
    iconPrefixCls: He,
    theme: Ye,
    segmented: y,
    statistic: R,
    spin: T,
    calendar: L,
    carousel: V,
    cascader: X,
    collapse: re,
    typography: G,
    checkbox: z,
    descriptions: Y,
    divider: U,
    drawer: ee,
    skeleton: Z,
    steps: J,
    image: Q,
    input: P,
    textArea: E,
    layout: se,
    list: oe,
    mentions: K,
    modal: te,
    progress: xe,
    result: ue,
    slider: ge,
    breadcrumb: j,
    menu: I,
    pagination: A,
    empty: B,
    badge: fe,
    radio: M,
    rate: Me,
    switch: ke,
    transfer: ht,
    avatar: kt,
    message: ut,
    tag: Pt,
    table: De,
    card: Ce,
    tabs: Qe,
    timeline: bt,
    timePicker: xt,
    upload: on,
    notification: sn,
    tree: Cn,
    colorPicker: an,
    datePicker: cn,
    rangePicker: N,
    flex: b,
    wave: ve,
    dropdown: Te,
    warning: Oe,
    tour: F,
    tooltip: pe,
    popover: he,
    popconfirm: et,
    floatButtonGroup: Ke,
    variant: ft,
    inputNumber: ln,
    treeSelect: Re
  };
  process.env.NODE_ENV !== "production" && Gn("ConfigProvider")(!("autoInsertSpaceInButton" in n), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const Xe = Object.assign({}, w);
  Object.keys(It).forEach((Ie) => {
    It[Ie] !== void 0 && (Xe[Ie] = It[Ie]);
  }), x1.forEach((Ie) => {
    const x = n[Ie];
    x && (Xe[Ie] = x);
  }), typeof r < "u" && (Xe.button = Object.assign({
    autoInsertSpace: r
  }, Xe.button));
  const Nt = Xl(() => Xe, Xe, (Ie, x) => {
    const k = Object.keys(Ie), D = Object.keys(x);
    return k.length !== D.length || k.some(($) => Ie[$] !== x[$]);
  }), {
    layer: er
  } = _.useContext(Cr), Or = _.useMemo(() => ({
    prefixCls: He,
    csp: pt,
    layer: er ? "antd" : void 0
  }), [He, pt, er]);
  let $e = /* @__PURE__ */ _.createElement(_.Fragment, null, /* @__PURE__ */ _.createElement(d1, {
    dropdownMatchSelectWidth: v
  }), t);
  const Rr = _.useMemo(() => {
    var Ie, x, k, D;
    return $x(((Ie = Qo.Form) === null || Ie === void 0 ? void 0 : Ie.defaultValidateMessages) || {}, ((k = (x = Nt.locale) === null || x === void 0 ? void 0 : x.Form) === null || k === void 0 ? void 0 : k.defaultValidateMessages) || {}, ((D = Nt.form) === null || D === void 0 ? void 0 : D.validateMessages) || {}, (s == null ? void 0 : s.validateMessages) || {});
  }, [Nt, s == null ? void 0 : s.validateMessages]);
  Object.keys(Rr).length > 0 && ($e = /* @__PURE__ */ _.createElement(Kx.Provider, {
    value: Rr
  }, $e)), a && ($e = /* @__PURE__ */ _.createElement(Pu, {
    locale: a,
    _ANT_MARK__: ku
  }, $e)), $e = /* @__PURE__ */ _.createElement(ia.Provider, {
    value: Or
  }, $e), c && ($e = /* @__PURE__ */ _.createElement(vp, {
    size: c
  }, $e)), $e = /* @__PURE__ */ _.createElement(f1, null, $e);
  const li = _.useMemo(() => {
    const Ie = Ye || {}, {
      algorithm: x,
      token: k,
      components: D,
      cssVar: $
    } = Ie, me = h1(Ie, ["algorithm", "token", "components", "cssVar"]), ye = x && (!Array.isArray(x) || x.length > 0) ? Qi(x) : Lu, le = {};
    Object.entries(D || {}).forEach((tt) => {
      let [Pe, Ne] = tt;
      const je = Object.assign({}, Ne);
      "algorithm" in je && (je.algorithm === !0 ? je.theme = ye : (Array.isArray(je.algorithm) || typeof je.algorithm == "function") && (je.theme = Qi(je.algorithm)), delete je.algorithm), le[Pe] = je;
    });
    const ae = Object.assign(Object.assign({}, vr), k);
    return Object.assign(Object.assign({}, me), {
      theme: ye,
      token: ae,
      components: le,
      override: Object.assign({
        override: ae
      }, le),
      cssVar: $
    });
  }, [Ye]);
  return m && ($e = /* @__PURE__ */ _.createElement(Mu.Provider, {
    value: li
  }, $e)), Nt.warning && ($e = /* @__PURE__ */ _.createElement(Ou.Provider, {
    value: Nt.warning
  }, $e)), C !== void 0 && ($e = /* @__PURE__ */ _.createElement(gp, {
    disabled: C
  }, $e)), /* @__PURE__ */ _.createElement(tn.Provider, {
    value: Nt
  }, $e);
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
  return Ee(n) === "object" && typeof n.name == "string" && typeof n.theme == "string" && (Ee(n.icon) === "object" || typeof n.icon == "function");
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
  return e ? /* @__PURE__ */ ze.createElement(n.tag, H(H({
    key: t
  }, Rc(n.attrs)), e), (n.children || []).map(function(r, o) {
    return Rs(r, "".concat(t, "-").concat(n.tag, "-").concat(o));
  })) : /* @__PURE__ */ ze.createElement(n.tag, H({
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
}`)), st(function() {
    var a = t.current, c = S1(a);
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
function T1(n) {
  var t = n.primaryColor, e = n.secondaryColor;
  hr.primaryColor = t, hr.secondaryColor = e || af(t), hr.calculated = !!e;
}
function O1() {
  return H({}, hr);
}
var Zn = function(t) {
  var e = t.icon, r = t.className, o = t.onClick, i = t.style, s = t.primaryColor, a = t.secondaryColor, c = mr(t, A1), l = _.useRef(), f = hr;
  if (s && (f = {
    primaryColor: s,
    secondaryColor: a || af(s)
  }), C1(l), E1(Oc(e), "icon should be icon definiton, but got ".concat(e)), !Oc(e))
    return null;
  var d = e;
  return d && typeof d.icon == "function" && (d = H(H({}, d), {}, {
    icon: d.icon(f.primaryColor, f.secondaryColor)
  })), Rs(d.icon, "svg-".concat(d.name), H(H({
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
  var e = n.className, r = n.icon, o = n.spin, i = n.rotate, s = n.tabIndex, a = n.onClick, c = n.twoToneColor, l = mr(n, k1), f = _.useContext(ia), d = f.prefixCls, u = d === void 0 ? "anticon" : d, v = f.rootClassName, g = rt(v, u, W(W({}, "".concat(u, "-").concat(r.name), !!r.name), "".concat(u, "-spin"), !!o || r.name === "loading"), e), p = s;
  p === void 0 && a && (p = -1);
  var h = i ? {
    msTransform: "rotate(".concat(i, "deg)"),
    transform: "rotate(".concat(i, "deg)")
  } : void 0, w = cf(c), S = ce(w, 2), m = S[0], C = S[1];
  return /* @__PURE__ */ _.createElement("span", zt({
    role: "img",
    "aria-label": r.name
  }, l, {
    ref: t,
    tabIndex: p,
    onClick: a,
    className: g
  }), /* @__PURE__ */ _.createElement(Zn, {
    icon: r,
    primaryColor: m,
    secondaryColor: C,
    style: h
  }));
});
rn.displayName = "AntdIcon";
rn.getTwoToneColor = R1;
rn.setTwoToneColor = lf;
var P1 = function(t, e) {
  return /* @__PURE__ */ _.createElement(rn, zt({}, t, {
    ref: e,
    icon: y1
  }));
}, uf = /* @__PURE__ */ _.forwardRef(P1);
process.env.NODE_ENV !== "production" && (uf.displayName = "CheckCircleFilled");
var I1 = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, N1 = function(t, e) {
  return /* @__PURE__ */ _.createElement(rn, zt({}, t, {
    ref: e,
    icon: I1
  }));
}, ff = /* @__PURE__ */ _.forwardRef(N1);
process.env.NODE_ENV !== "production" && (ff.displayName = "CloseCircleFilled");
var j1 = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, L1 = function(t, e) {
  return /* @__PURE__ */ _.createElement(rn, zt({}, t, {
    ref: e,
    icon: j1
  }));
}, df = /* @__PURE__ */ _.forwardRef(L1);
process.env.NODE_ENV !== "production" && (df.displayName = "CloseOutlined");
var M1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" }, D1 = function(t, e) {
  return /* @__PURE__ */ _.createElement(rn, zt({}, t, {
    ref: e,
    icon: M1
  }));
}, hf = /* @__PURE__ */ _.forwardRef(D1);
process.env.NODE_ENV !== "production" && (hf.displayName = "ExclamationCircleFilled");
var B1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" }, F1 = function(t, e) {
  return /* @__PURE__ */ _.createElement(rn, zt({}, t, {
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
  } : e = H({}, t);
  var r = {};
  return Object.keys(n).forEach(function(o) {
    // Aria
    (e.aria && (o === "role" || kc(o, U1)) || // Data
    e.data && kc(o, q1) || // Attr
    e.attr && H1.includes(o)) && (r[o] = n[o]);
  }), r;
}
const pf = (n, t, e) => /* @__PURE__ */ ze.isValidElement(n) ? /* @__PURE__ */ ze.cloneElement(n, typeof e == "function" ? e(n.props || {}) : e) : t;
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
    motionEaseInOutCirc: l,
    withDescriptionIconSize: f,
    colorText: d,
    colorTextHeading: u,
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
        color: u
      },
      [`&${t}-motion-leave`]: {
        overflow: "hidden",
        opacity: 1,
        transition: `max-height ${e} ${l}, opacity ${e} ${l},
        padding-top ${e} ${l}, padding-bottom ${e} ${l},
        margin-bottom ${e} ${l}`
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
        color: u,
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
    colorErrorBorder: l,
    colorErrorBg: f,
    colorInfo: d,
    colorInfoBorder: u,
    colorInfoBg: v
  } = n;
  return {
    [t]: {
      "&-success": Yr(o, r, e, n, t),
      "&-info": Yr(v, u, d, n, t),
      "&-warning": Yr(a, s, i, n, t),
      "&-error": Object.assign(Object.assign({}, Yr(f, l, c, n, t)), {
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
    className: rt(`${e}-icon`, t.props.className)
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
    onMouseEnter: l,
    onMouseLeave: f,
    onClick: d,
    afterClose: u,
    showIcon: v,
    closable: g,
    closeText: p,
    closeIcon: h,
    action: w,
    id: S
  } = n, m = Pc(n, ["description", "prefixCls", "message", "banner", "className", "rootClassName", "style", "onMouseEnter", "onMouseLeave", "onClick", "afterClose", "showIcon", "closable", "closeText", "closeIcon", "action", "id"]), [C, y] = _.useState(!1);
  process.env.NODE_ENV !== "production" && Gn("Alert").deprecated(!p, "closeText", "closable.closeIcon");
  const R = _.useRef(null);
  _.useImperativeHandle(t, () => ({
    nativeElement: R.current
  }));
  const {
    getPrefixCls: T,
    direction: L,
    closable: V,
    closeIcon: X,
    className: re,
    style: G
  } = Du("alert"), z = T("alert", r), [Y, U, ee] = Z1(z), Z = (ue) => {
    var ge;
    y(!0), (ge = n.onClose) === null || ge === void 0 || ge.call(n, ue);
  }, J = _.useMemo(() => n.type !== void 0 ? n.type : i ? "warning" : "info", [n.type, i]), Q = _.useMemo(() => typeof g == "object" && g.closeIcon || p ? !0 : typeof g == "boolean" ? g : h !== !1 && h !== null && h !== void 0 ? !0 : !!V, [p, h, g, V]), se = i && v === void 0 ? !0 : v, oe = rt(z, `${z}-${J}`, {
    [`${z}-with-description`]: !!e,
    [`${z}-no-icon`]: !se,
    [`${z}-banner`]: !!i,
    [`${z}-rtl`]: L === "rtl"
  }, re, s, a, ee, U), K = W1(m, {
    aria: !0,
    data: !0
  }), te = _.useMemo(() => typeof g == "object" && g.closeIcon ? g.closeIcon : p || (h !== void 0 ? h : typeof V == "object" && V.closeIcon ? V.closeIcon : X), [h, g, p, X]), xe = _.useMemo(() => {
    const ue = g ?? V;
    if (typeof ue == "object") {
      const {
        closeIcon: ge
      } = ue;
      return Pc(ue, ["closeIcon"]);
    }
    return {};
  }, [g, V]);
  return Y(/* @__PURE__ */ _.createElement(nf, {
    visible: !C,
    motionName: `${z}-motion`,
    motionAppear: !1,
    motionEnter: !1,
    onLeaveStart: (ue) => ({
      maxHeight: ue.offsetHeight
    }),
    onLeaveEnd: u
  }, (ue, ge) => {
    let {
      className: j,
      style: I
    } = ue;
    return /* @__PURE__ */ _.createElement("div", Object.assign({
      id: S,
      ref: Rh(R, ge),
      "data-show": !C,
      className: rt(oe, j),
      style: Object.assign(Object.assign(Object.assign({}, G), c), I),
      onMouseEnter: l,
      onMouseLeave: f,
      onClick: d,
      role: "alert"
    }, K), se ? /* @__PURE__ */ _.createElement(Q1, {
      description: e,
      icon: n.icon,
      prefixCls: z,
      type: J
    }) : null, /* @__PURE__ */ _.createElement("div", {
      className: `${z}-content`
    }, o ? /* @__PURE__ */ _.createElement("div", {
      className: `${z}-message`
    }, o) : null, e ? /* @__PURE__ */ _.createElement("div", {
      className: `${z}-description`
    }, e) : null), w ? /* @__PURE__ */ _.createElement("div", {
      className: `${z}-action`
    }, w) : null, /* @__PURE__ */ _.createElement(em, {
      isClosable: Q,
      prefixCls: z,
      closeIcon: te,
      handleClose: Z,
      ariaProps: xe
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
    return Tt(this, t), e = tm(this, t, arguments), e.state = {
      error: void 0,
      info: {
        componentStack: ""
      }
    }, e;
  }
  return _r(t, n), Ot(t, [{
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
      } = this.state, l = (c == null ? void 0 : c.componentStack) || null, f = typeof r > "u" ? (a || "").toString() : r, d = typeof o > "u" ? l : o;
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
  var r = e || {}, o = r.noTrailing, i = o === void 0 ? !1 : o, s = r.noLeading, a = s === void 0 ? !1 : s, c = r.debounceMode, l = c === void 0 ? void 0 : c, f, d = !1, u = 0;
  function v() {
    f && clearTimeout(f);
  }
  function g(h) {
    var w = h || {}, S = w.upcomingOnly, m = S === void 0 ? !1 : S;
    v(), d = !m;
  }
  function p() {
    for (var h = arguments.length, w = new Array(h), S = 0; S < h; S++)
      w[S] = arguments[S];
    var m = this, C = Date.now() - u;
    if (d)
      return;
    function y() {
      u = Date.now(), t.apply(m, w);
    }
    function R() {
      f = void 0;
    }
    !a && l && !f && y(), v(), l === void 0 && C > n ? a ? (u = Date.now(), i || (f = setTimeout(l ? R : y, n))) : y() : i !== !0 && (f = setTimeout(l ? R : y, l === void 0 ? n - C : n));
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
  return rt(Object.assign(Object.assign(Object.assign({}, sm(n, t)), am(n, t)), cm(n, t)));
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
const bf = /* @__PURE__ */ ze.forwardRef((n, t) => {
  const {
    prefixCls: e,
    rootClassName: r,
    className: o,
    style: i,
    flex: s,
    gap: a,
    children: c,
    vertical: l = !1,
    component: f = "div"
  } = n, d = gm(n, ["prefixCls", "rootClassName", "className", "style", "flex", "gap", "children", "vertical", "component"]), {
    flex: u,
    direction: v,
    getPrefixCls: g
  } = ze.useContext(tn), p = g("flex", e), [h, w, S] = mm(p), m = l ?? (u == null ? void 0 : u.vertical), C = rt(o, r, u == null ? void 0 : u.className, p, w, S, lm(p, n), {
    [`${p}-rtl`]: v === "rtl",
    [`${p}-gap-${a}`]: Ic(a),
    [`${p}-vertical`]: m
  }), y = Object.assign(Object.assign({}, u == null ? void 0 : u.style), i);
  return s && (y.flex = s), a && !Ic(a) && (y.gap = a), h(/* @__PURE__ */ ze.createElement(f, Object.assign({
    ref: t,
    className: C,
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
    className: rt(`${t}-circle`, {
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
  const l = {
    strokeDashoffset: `${ki / 4}`,
    strokeDasharray: `${ki * c / 100} ${ki * (100 - c) / 100}`
  };
  return /* @__PURE__ */ _.createElement("span", {
    className: rt(o, `${r}-progress`, c <= 0 && i)
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
    style: l
  })));
};
function ym(n) {
  const {
    prefixCls: t,
    percent: e = 0
  } = n, r = `${t}-dot`, o = `${r}-holder`, i = `${o}-hidden`;
  return /* @__PURE__ */ _.createElement(_.Fragment, null, /* @__PURE__ */ _.createElement("span", {
    className: rt(o, e > 0 && i)
  }, /* @__PURE__ */ _.createElement("span", {
    className: rt(r, `${t}-dot-spin`)
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
    className: rt(e.props.className, o),
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
}, _m), Am = 200, Lc = [[30, 0.05], [70, 0.03], [96, 0.01]];
function Tm(n, t) {
  const [e, r] = _.useState(0), o = _.useRef(null), i = t === "auto";
  return _.useEffect(() => (i && n && (r(0), o.current = setInterval(() => {
    r((s) => {
      const a = 100 - s;
      for (let c = 0; c < Lc.length; c += 1) {
        const [l, f] = Lc[c];
        if (s <= l)
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
    wrapperClassName: l,
    style: f,
    children: d,
    fullscreen: u = !1,
    indicator: v,
    percent: g
  } = n, p = Om(n, ["prefixCls", "spinning", "delay", "className", "rootClassName", "size", "tip", "wrapperClassName", "style", "children", "fullscreen", "indicator", "percent"]), {
    getPrefixCls: h,
    direction: w,
    className: S,
    style: m,
    indicator: C
  } = Du("spin"), y = h("spin", e), [R, T, L] = Cm(y), [V, X] = _.useState(() => r && !Rm(r, o)), re = Tm(V, g);
  _.useEffect(() => {
    if (r) {
      const J = im(o, () => {
        X(!0);
      });
      return J(), () => {
        var Q;
        (Q = J == null ? void 0 : J.cancel) === null || Q === void 0 || Q.call(J);
      };
    }
    X(!1);
  }, [o, r]);
  const G = _.useMemo(() => typeof d < "u" && !u, [d, u]);
  if (process.env.NODE_ENV !== "production") {
    const J = Gn("Spin");
    process.env.NODE_ENV !== "production" && J(!c || G || u, "usage", "`tip` only work in nest or fullscreen pattern.");
  }
  const z = rt(y, S, {
    [`${y}-sm`]: a === "small",
    [`${y}-lg`]: a === "large",
    [`${y}-spinning`]: V,
    [`${y}-show-text`]: !!c,
    [`${y}-rtl`]: w === "rtl"
  }, i, !u && s, T, L), Y = rt(`${y}-container`, {
    [`${y}-blur`]: V
  }), U = (t = v ?? C) !== null && t !== void 0 ? t : Ef, ee = Object.assign(Object.assign({}, m), f), Z = /* @__PURE__ */ _.createElement("div", Object.assign({}, p, {
    style: ee,
    className: z,
    "aria-live": "polite",
    "aria-busy": V
  }), /* @__PURE__ */ _.createElement(bm, {
    prefixCls: y,
    indicator: U,
    percent: re
  }), c && (G || u) ? /* @__PURE__ */ _.createElement("div", {
    className: `${y}-text`
  }, c) : null);
  return R(G ? /* @__PURE__ */ _.createElement("div", Object.assign({}, p, {
    className: rt(`${y}-nested-loading`, l, T, L)
  }), V && /* @__PURE__ */ _.createElement("div", {
    key: "loading"
  }, Z), /* @__PURE__ */ _.createElement("div", {
    className: Y,
    key: "container"
  }, d)) : u ? /* @__PURE__ */ _.createElement("div", {
    className: rt(`${y}-fullscreen`, {
      [`${y}-fullscreen-show`]: V
    }, s, T, L)
  }, Z) : Z);
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
})(/* @__PURE__ */ Object.create(null)), Rt = (n) => (n = n.toLowerCase(), (t) => ni(t) === n), ri = (n) => (t) => typeof t === n, { isArray: Jn } = Array, Sr = ri("undefined");
function Pm(n) {
  return n !== null && !Sr(n) && n.constructor !== null && !Sr(n.constructor) && ct(n.constructor.isBuffer) && n.constructor.isBuffer(n);
}
const Af = Rt("ArrayBuffer");
function Im(n) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(n) : t = n && n.buffer && Af(n.buffer), t;
}
const Nm = ri("string"), ct = ri("function"), Tf = ri("number"), oi = (n) => n !== null && typeof n == "object", jm = (n) => n === !0 || n === !1, lo = (n) => {
  if (ni(n) !== "object")
    return !1;
  const t = da(n);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Cf in n) && !(ti in n);
}, Lm = Rt("Date"), Mm = Rt("File"), Dm = Rt("Blob"), Bm = Rt("FileList"), Fm = (n) => oi(n) && ct(n.pipe), zm = (n) => {
  let t;
  return n && (typeof FormData == "function" && n instanceof FormData || ct(n.append) && ((t = ni(n)) === "formdata" || // detect form-data instance
  t === "object" && ct(n.toString) && n.toString() === "[object FormData]"));
}, Vm = Rt("URLSearchParams"), [Hm, Um, qm, Wm] = ["ReadableStream", "Request", "Response", "Headers"].map(Rt), Ym = (n) => n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
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
const pn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Rf = (n) => !Sr(n) && n !== pn;
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
  e && ct(o) ? n[i] = _f(o, e) : n[i] = o;
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
}, ng = Rt("HTMLFormElement"), rg = (n) => n.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(e, r, o) {
    return r.toUpperCase() + o;
  }
), Mc = (({ hasOwnProperty: n }) => (t, e) => n.call(t, e))(Object.prototype), og = Rt("RegExp"), kf = (n, t) => {
  const e = Object.getOwnPropertyDescriptors(n), r = {};
  Ar(e, (o, i) => {
    let s;
    (s = t(o, i, n)) !== !1 && (r[i] = s || o);
  }), Object.defineProperties(n, r);
}, ig = (n) => {
  kf(n, (t, e) => {
    if (ct(n) && ["arguments", "caller", "callee"].indexOf(e) !== -1)
      return !1;
    const r = n[e];
    if (ct(r)) {
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
  return !!(n && ct(n.append) && n[Cf] === "FormData" && n[ti]);
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
}, fg = Rt("AsyncFunction"), dg = (n) => n && (oi(n) || ct(n)) && ct(n.then) && ct(n.catch), Pf = ((n, t) => n ? setImmediate : t ? ((e, r) => (pn.addEventListener("message", ({ source: o, data: i }) => {
  o === pn && i === e && r.length && r.shift()();
}, !1), (o) => {
  r.push(o), pn.postMessage(e, "*");
}))(`axios@${Math.random()}`, []) : (e) => setTimeout(e))(
  typeof setImmediate == "function",
  ct(pn.postMessage)
), hg = typeof queueMicrotask < "u" ? queueMicrotask.bind(pn) : typeof process < "u" && process.nextTick || Pf, xg = (n) => n != null && ct(n[ti]), O = {
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
  isFunction: ct,
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
  kindOfTest: Rt,
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
  isIterable: xg
};
function ne(n, t, e, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = n, this.name = "AxiosError", t && (this.code = t), e && (this.config = e), r && (this.request = r), o && (this.response = o, this.status = o.status ? o.status : null);
}
O.inherits(ne, Error, {
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
      config: O.toJSONObject(this.config),
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
].forEach((n) => {
  Nf[n] = { value: n };
});
Object.defineProperties(ne, Nf);
Object.defineProperty(If, "isAxiosError", { value: !0 });
ne.from = (n, t, e, r, o, i) => {
  const s = Object.create(If);
  return O.toFlatObject(n, s, function(c) {
    return c !== Error.prototype;
  }, (a) => a !== "isAxiosError"), ne.call(s, n.message, t, e, r, o), s.cause = n, s.name = n.name, i && Object.assign(s, i), s;
};
const pg = null;
function Ps(n) {
  return O.isPlainObject(n) || O.isArray(n);
}
function jf(n) {
  return O.endsWith(n, "[]") ? n.slice(0, -2) : n;
}
function Dc(n, t, e) {
  return n ? n.concat(t).map(function(o, i) {
    return o = jf(o), !e && i ? "[" + o + "]" : o;
  }).join(e ? "." : "") : t;
}
function mg(n) {
  return O.isArray(n) && !n.some(Ps);
}
const gg = O.toFlatObject(O, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ii(n, t, e) {
  if (!O.isObject(n))
    throw new TypeError("target must be an object");
  t = t || new FormData(), e = O.toFlatObject(e, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(p, h) {
    return !O.isUndefined(h[p]);
  });
  const r = e.metaTokens, o = e.visitor || f, i = e.dots, s = e.indexes, c = (e.Blob || typeof Blob < "u" && Blob) && O.isSpecCompliantForm(t);
  if (!O.isFunction(o))
    throw new TypeError("visitor must be a function");
  function l(g) {
    if (g === null) return "";
    if (O.isDate(g))
      return g.toISOString();
    if (!c && O.isBlob(g))
      throw new ne("Blob is not supported. Use a Buffer instead.");
    return O.isArrayBuffer(g) || O.isTypedArray(g) ? c && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function f(g, p, h) {
    let w = g;
    if (g && !h && typeof g == "object") {
      if (O.endsWith(p, "{}"))
        p = r ? p : p.slice(0, -2), g = JSON.stringify(g);
      else if (O.isArray(g) && mg(g) || (O.isFileList(g) || O.endsWith(p, "[]")) && (w = O.toArray(g)))
        return p = jf(p), w.forEach(function(m, C) {
          !(O.isUndefined(m) || m === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? Dc([p], C, i) : s === null ? p : p + "[]",
            l(m)
          );
        }), !1;
    }
    return Ps(g) ? !0 : (t.append(Dc(h, p, i), l(g)), !1);
  }
  const d = [], u = Object.assign(gg, {
    defaultVisitor: f,
    convertValue: l,
    isVisitable: Ps
  });
  function v(g, p) {
    if (!O.isUndefined(g)) {
      if (d.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + p.join("."));
      d.push(g), O.forEach(g, function(w, S) {
        (!(O.isUndefined(w) || w === null) && o.call(
          t,
          w,
          O.isString(S) ? S.trim() : S,
          p,
          u
        )) === !0 && v(w, p ? p.concat(S) : [S]);
      }), d.pop();
    }
  }
  if (!O.isObject(n))
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
const Lf = ha.prototype;
Lf.append = function(t, e) {
  this._pairs.push([t, e]);
};
Lf.toString = function(t) {
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
function Mf(n, t, e) {
  if (!t)
    return n;
  const r = e && e.encode || vg;
  O.isFunction(e) && (e = {
    serialize: e
  });
  const o = e && e.serialize;
  let i;
  if (o ? i = o(t, e) : i = O.isURLSearchParams(t) ? t.toString() : new ha(t, e).toString(r), i) {
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
    O.forEach(this.handlers, function(r) {
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
}, Symbol.toStringTag, { value: "Module" })), nt = {
  ...Ag,
  ...wg
};
function Tg(n, t) {
  return ii(n, new nt.classes.URLSearchParams(), Object.assign({
    visitor: function(e, r, o, i) {
      return nt.isNode && O.isBuffer(e) ? (this.append(r, e.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Og(n) {
  return O.matchAll(/\w+|\[(\w*)]/g, n).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
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
    return s = !s && O.isArray(o) ? o.length : s, c ? (O.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !a) : ((!o[s] || !O.isObject(o[s])) && (o[s] = []), t(e, r, o[s], i) && O.isArray(o[s]) && (o[s] = Rg(o[s])), !a);
  }
  if (O.isFormData(n) && O.isFunction(n.entries)) {
    const e = {};
    return O.forEachEntry(n, (r, o) => {
      t(Og(r), o, e, 0);
    }), e;
  }
  return null;
}
function kg(n, t, e) {
  if (O.isString(n))
    try {
      return (t || JSON.parse)(n), O.trim(n);
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
    const r = e.getContentType() || "", o = r.indexOf("application/json") > -1, i = O.isObject(t);
    if (i && O.isHTMLForm(t) && (t = new FormData(t)), O.isFormData(t))
      return o ? JSON.stringify(Bf(t)) : t;
    if (O.isArrayBuffer(t) || O.isBuffer(t) || O.isStream(t) || O.isFile(t) || O.isBlob(t) || O.isReadableStream(t))
      return t;
    if (O.isArrayBufferView(t))
      return t.buffer;
    if (O.isURLSearchParams(t))
      return e.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Tg(t, this.formSerializer).toString();
      if ((a = O.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
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
    if (O.isResponse(t) || O.isReadableStream(t))
      return t;
    if (t && O.isString(t) && (r && !this.responseType || o)) {
      const s = !(e && e.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (s)
          throw a.name === "SyntaxError" ? ne.from(a, ne.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
    FormData: nt.classes.FormData,
    Blob: nt.classes.Blob
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
O.forEach(["delete", "get", "head", "post", "put", "patch"], (n) => {
  Tr.headers[n] = {};
});
const Pg = O.toObjectSet([
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
  return n === !1 || n == null ? n : O.isArray(n) ? n.map(uo) : String(n);
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
  if (O.isFunction(r))
    return r.call(this, t, e);
  if (o && (t = e), !!O.isString(t)) {
    if (O.isString(r))
      return t.indexOf(r) !== -1;
    if (O.isRegExp(r))
      return r.test(t);
  }
}
function Lg(n) {
  return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, e, r) => e.toUpperCase() + r);
}
function Mg(n, t) {
  const e = O.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(n, r + e, {
      value: function(o, i, s) {
        return this[r].call(this, t, o, i, s);
      },
      configurable: !0
    });
  });
}
let lt = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, e, r) {
    const o = this;
    function i(a, c, l) {
      const f = ar(c);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const d = O.findKey(o, f);
      (!d || o[d] === void 0 || l === !0 || l === void 0 && o[d] !== !1) && (o[d || c] = uo(a));
    }
    const s = (a, c) => O.forEach(a, (l, f) => i(l, f, c));
    if (O.isPlainObject(t) || t instanceof this.constructor)
      s(t, e);
    else if (O.isString(t) && (t = t.trim()) && !jg(t))
      s(Ig(t), e);
    else if (O.isObject(t) && O.isIterable(t)) {
      let a = {}, c, l;
      for (const f of t) {
        if (!O.isArray(f))
          throw TypeError("Object iterator must return a key-value pair");
        a[l = f[0]] = (c = a[l]) ? O.isArray(c) ? [...c, f[1]] : [c, f[1]] : f[1];
      }
      s(a, e);
    } else
      t != null && i(e, t, r);
    return this;
  }
  get(t, e) {
    if (t = ar(t), t) {
      const r = O.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!e)
          return o;
        if (e === !0)
          return Ng(o);
        if (O.isFunction(e))
          return e.call(this, o, r);
        if (O.isRegExp(e))
          return e.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, e) {
    if (t = ar(t), t) {
      const r = O.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!e || Pi(this, this[r], r, e)));
    }
    return !1;
  }
  delete(t, e) {
    const r = this;
    let o = !1;
    function i(s) {
      if (s = ar(s), s) {
        const a = O.findKey(r, s);
        a && (!e || Pi(r, r[a], a, e)) && (delete r[a], o = !0);
      }
    }
    return O.isArray(t) ? t.forEach(i) : i(t), o;
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
    return O.forEach(this, (o, i) => {
      const s = O.findKey(r, i);
      if (s) {
        e[s] = uo(o), delete e[i];
        return;
      }
      const a = t ? Lg(i) : String(i).trim();
      a !== i && delete e[i], e[a] = uo(o), r[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const e = /* @__PURE__ */ Object.create(null);
    return O.forEach(this, (r, o) => {
      r != null && r !== !1 && (e[o] = t && O.isArray(r) ? r.join(", ") : r);
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
      r[a] || (Mg(o, s), r[a] = !0);
    }
    return O.isArray(t) ? t.forEach(i) : i(t), this;
  }
};
lt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
O.reduceDescriptors(lt.prototype, ({ value: n }, t) => {
  let e = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => n,
    set(r) {
      this[e] = r;
    }
  };
});
O.freezeMethods(lt);
function Ii(n, t) {
  const e = this || Tr, r = t || e, o = lt.from(r.headers);
  let i = r.data;
  return O.forEach(n, function(a) {
    i = a.call(e, i, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), i;
}
function Ff(n) {
  return !!(n && n.__CANCEL__);
}
function Qn(n, t, e) {
  ne.call(this, n ?? "canceled", ne.ERR_CANCELED, t, e), this.name = "CanceledError";
}
O.inherits(Qn, ne, {
  __CANCEL__: !0
});
function zf(n, t, e) {
  const r = e.config.validateStatus;
  !e.status || !r || r(e.status) ? n(e) : t(new ne(
    "Request failed with status code " + e.status,
    [ne.ERR_BAD_REQUEST, ne.ERR_BAD_RESPONSE][Math.floor(e.status / 100) - 4],
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
    const l = Date.now(), f = r[i];
    s || (s = l), e[o] = c, r[o] = l;
    let d = i, u = 0;
    for (; d !== o; )
      u += e[d++], d = d % n;
    if (o = (o + 1) % n, o === i && (i = (i + 1) % n), l - s < t)
      return;
    const v = f && l - f;
    return v ? Math.round(u * 1e3 / v) : void 0;
  };
}
function Fg(n, t) {
  let e = 0, r = 1e3 / t, o, i;
  const s = (l, f = Date.now()) => {
    e = f, o = null, i && (clearTimeout(i), i = null), n.apply(null, l);
  };
  return [(...l) => {
    const f = Date.now(), d = f - e;
    d >= r ? s(l, f) : (o = l, i || (i = setTimeout(() => {
      i = null, s(o);
    }, r - d)));
  }, () => o && s(o)];
}
const Co = (n, t, e = 3) => {
  let r = 0;
  const o = Bg(50, 250);
  return Fg((i) => {
    const s = i.loaded, a = i.lengthComputable ? i.total : void 0, c = s - r, l = o(c), f = s <= a;
    r = s;
    const d = {
      loaded: s,
      total: a,
      progress: a ? s / a : void 0,
      bytes: c,
      rate: l || void 0,
      estimated: l && a && f ? (a - s) / l : void 0,
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
}, Hc = (n) => (...t) => O.asap(() => n(...t)), zg = nt.hasStandardBrowserEnv ? /* @__PURE__ */ ((n, t) => (e) => (e = new URL(e, nt.origin), n.protocol === e.protocol && n.host === e.host && (t || n.port === e.port)))(
  new URL(nt.origin),
  nt.navigator && /(msie|trident)/i.test(nt.navigator.userAgent)
) : () => !0, Vg = nt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(n, t, e, r, o, i) {
      const s = [n + "=" + encodeURIComponent(t)];
      O.isNumber(e) && s.push("expires=" + new Date(e).toGMTString()), O.isString(r) && s.push("path=" + r), O.isString(o) && s.push("domain=" + o), i === !0 && s.push("secure"), document.cookie = s.join("; ");
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
const Uc = (n) => n instanceof lt ? { ...n } : n;
function _n(n, t) {
  t = t || {};
  const e = {};
  function r(l, f, d, u) {
    return O.isPlainObject(l) && O.isPlainObject(f) ? O.merge.call({ caseless: u }, l, f) : O.isPlainObject(f) ? O.merge({}, f) : O.isArray(f) ? f.slice() : f;
  }
  function o(l, f, d, u) {
    if (O.isUndefined(f)) {
      if (!O.isUndefined(l))
        return r(void 0, l, d, u);
    } else return r(l, f, d, u);
  }
  function i(l, f) {
    if (!O.isUndefined(f))
      return r(void 0, f);
  }
  function s(l, f) {
    if (O.isUndefined(f)) {
      if (!O.isUndefined(l))
        return r(void 0, l);
    } else return r(void 0, f);
  }
  function a(l, f, d) {
    if (d in t)
      return r(l, f);
    if (d in n)
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
    headers: (l, f, d) => o(Uc(l), Uc(f), d, !0)
  };
  return O.forEach(Object.keys(Object.assign({}, n, t)), function(f) {
    const d = c[f] || o, u = d(n[f], t[f], f);
    O.isUndefined(u) && d !== a || (e[f] = u);
  }), e;
}
const Hf = (n) => {
  const t = _n({}, n);
  let { data: e, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: i, headers: s, auth: a } = t;
  t.headers = s = lt.from(s), t.url = Mf(Vf(t.baseURL, t.url, t.allowAbsoluteUrls), n.params, n.paramsSerializer), a && s.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let c;
  if (O.isFormData(e)) {
    if (nt.hasStandardBrowserEnv || nt.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if ((c = s.getContentType()) !== !1) {
      const [l, ...f] = c ? c.split(";").map((d) => d.trim()).filter(Boolean) : [];
      s.setContentType([l || "multipart/form-data", ...f].join("; "));
    }
  }
  if (nt.hasStandardBrowserEnv && (r && O.isFunction(r) && (r = r(t)), r || r !== !1 && zg(t.url))) {
    const l = o && i && Vg.read(i);
    l && s.set(o, l);
  }
  return t;
}, qg = typeof XMLHttpRequest < "u", Wg = qg && function(n) {
  return new Promise(function(e, r) {
    const o = Hf(n);
    let i = o.data;
    const s = lt.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: c, onDownloadProgress: l } = o, f, d, u, v, g;
    function p() {
      v && v(), g && g(), o.cancelToken && o.cancelToken.unsubscribe(f), o.signal && o.signal.removeEventListener("abort", f);
    }
    let h = new XMLHttpRequest();
    h.open(o.method.toUpperCase(), o.url, !0), h.timeout = o.timeout;
    function w() {
      if (!h)
        return;
      const m = lt.from(
        "getAllResponseHeaders" in h && h.getAllResponseHeaders()
      ), y = {
        data: !a || a === "text" || a === "json" ? h.responseText : h.response,
        status: h.status,
        statusText: h.statusText,
        headers: m,
        config: n,
        request: h
      };
      zf(function(T) {
        e(T), p();
      }, function(T) {
        r(T), p();
      }, y), h = null;
    }
    "onloadend" in h ? h.onloadend = w : h.onreadystatechange = function() {
      !h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.indexOf("file:") === 0) || setTimeout(w);
    }, h.onabort = function() {
      h && (r(new ne("Request aborted", ne.ECONNABORTED, n, h)), h = null);
    }, h.onerror = function() {
      r(new ne("Network Error", ne.ERR_NETWORK, n, h)), h = null;
    }, h.ontimeout = function() {
      let C = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const y = o.transitional || Df;
      o.timeoutErrorMessage && (C = o.timeoutErrorMessage), r(new ne(
        C,
        y.clarifyTimeoutError ? ne.ETIMEDOUT : ne.ECONNABORTED,
        n,
        h
      )), h = null;
    }, i === void 0 && s.setContentType(null), "setRequestHeader" in h && O.forEach(s.toJSON(), function(C, y) {
      h.setRequestHeader(y, C);
    }), O.isUndefined(o.withCredentials) || (h.withCredentials = !!o.withCredentials), a && a !== "json" && (h.responseType = o.responseType), l && ([u, g] = Co(l, !0), h.addEventListener("progress", u)), c && h.upload && ([d, v] = Co(c), h.upload.addEventListener("progress", d), h.upload.addEventListener("loadend", v)), (o.cancelToken || o.signal) && (f = (m) => {
      h && (r(!m || m.type ? new Qn(null, n, h) : m), h.abort(), h = null);
    }, o.cancelToken && o.cancelToken.subscribe(f), o.signal && (o.signal.aborted ? f() : o.signal.addEventListener("abort", f)));
    const S = Dg(o.url);
    if (S && nt.protocols.indexOf(S) === -1) {
      r(new ne("Unsupported protocol " + S + ":", ne.ERR_BAD_REQUEST, n));
      return;
    }
    h.send(i || null);
  });
}, Yg = (n, t) => {
  const { length: e } = n = n ? n.filter(Boolean) : [];
  if (t || e) {
    let r = new AbortController(), o;
    const i = function(l) {
      if (!o) {
        o = !0, a();
        const f = l instanceof Error ? l : this.reason;
        r.abort(f instanceof ne ? f : new Qn(f instanceof Error ? f.message : f));
      }
    };
    let s = t && setTimeout(() => {
      s = null, i(new ne(`timeout ${t} of ms exceeded`, ne.ETIMEDOUT));
    }, t);
    const a = () => {
      n && (s && clearTimeout(s), s = null, n.forEach((l) => {
        l.unsubscribe ? l.unsubscribe(i) : l.removeEventListener("abort", i);
      }), n = null);
    };
    n.forEach((l) => l.addEventListener("abort", i));
    const { signal: c } = r;
    return c.unsubscribe = () => O.asap(a), c;
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
        const { done: l, value: f } = await o.next();
        if (l) {
          a(), c.close();
          return;
        }
        let d = f.byteLength;
        if (e) {
          let u = i += d;
          e(u);
        }
        c.enqueue(new Uint8Array(f));
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
}, si = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Uf = si && typeof ReadableStream == "function", Kg = si && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((n) => (t) => n.encode(t))(new TextEncoder()) : async (n) => new Uint8Array(await new Response(n).arrayBuffer())), qf = (n, ...t) => {
  try {
    return !!n(...t);
  } catch {
    return !1;
  }
}, Zg = Uf && qf(() => {
  let n = !1;
  const t = new Request(nt.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return n = !0, "half";
    }
  }).headers.has("Content-Type");
  return n && !t;
}), Wc = 64 * 1024, Ns = Uf && qf(() => O.isReadableStream(new Response("").body)), Ao = {
  stream: Ns && ((n) => n.body)
};
si && ((n) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Ao[t] && (Ao[t] = O.isFunction(n[t]) ? (e) => e[t]() : (e, r) => {
      throw new ne(`Response type '${t}' is not supported`, ne.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Jg = async (n) => {
  if (n == null)
    return 0;
  if (O.isBlob(n))
    return n.size;
  if (O.isSpecCompliantForm(n))
    return (await new Request(nt.origin, {
      method: "POST",
      body: n
    }).arrayBuffer()).byteLength;
  if (O.isArrayBufferView(n) || O.isArrayBuffer(n))
    return n.byteLength;
  if (O.isURLSearchParams(n) && (n = n + ""), O.isString(n))
    return (await Kg(n)).byteLength;
}, Qg = async (n, t) => {
  const e = O.toFiniteNumber(n.getContentLength());
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
    responseType: l,
    headers: f,
    withCredentials: d = "same-origin",
    fetchOptions: u
  } = Hf(n);
  l = l ? (l + "").toLowerCase() : "text";
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
      }), R;
      if (O.isFormData(r) && (R = y.headers.get("content-type")) && f.setContentType(R), y.body) {
        const [T, L] = Vc(
          h,
          Co(Hc(c))
        );
        r = qc(y.body, Wc, T, L);
      }
    }
    O.isString(d) || (d = d ? "include" : "omit");
    const w = "credentials" in Request.prototype;
    g = new Request(t, {
      ...u,
      signal: v,
      method: e.toUpperCase(),
      headers: f.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: w ? d : void 0
    });
    let S = await fetch(g);
    const m = Ns && (l === "stream" || l === "response");
    if (Ns && (a || m && p)) {
      const y = {};
      ["status", "statusText", "headers"].forEach((V) => {
        y[V] = S[V];
      });
      const R = O.toFiniteNumber(S.headers.get("content-length")), [T, L] = a && Vc(
        R,
        Co(Hc(a), !0)
      ) || [];
      S = new Response(
        qc(S.body, Wc, T, () => {
          L && L(), p && p();
        }),
        y
      );
    }
    l = l || "text";
    let C = await Ao[O.findKey(Ao, l) || "text"](S, n);
    return !m && p && p(), await new Promise((y, R) => {
      zf(y, R, {
        data: C,
        headers: lt.from(S.headers),
        status: S.status,
        statusText: S.statusText,
        config: n,
        request: g
      });
    });
  } catch (w) {
    throw p && p(), w && w.name === "TypeError" && /Load failed|fetch/i.test(w.message) ? Object.assign(
      new ne("Network Error", ne.ERR_NETWORK, n, g),
      {
        cause: w.cause || w
      }
    ) : ne.from(w, w && w.code, n, g);
  }
}), js = {
  http: pg,
  xhr: Wg,
  fetch: ev
};
O.forEach(js, (n, t) => {
  if (n) {
    try {
      Object.defineProperty(n, "name", { value: t });
    } catch {
    }
    Object.defineProperty(n, "adapterName", { value: t });
  }
});
const Yc = (n) => `- ${n}`, tv = (n) => O.isFunction(n) || n === null || n === !1, Wf = {
  getAdapter: (n) => {
    n = O.isArray(n) ? n : [n];
    const { length: t } = n;
    let e, r;
    const o = {};
    for (let i = 0; i < t; i++) {
      e = n[i];
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
      let s = t ? i.length > 1 ? `since :
` + i.map(Yc).join(`
`) : " " + Yc(i[0]) : "as no adapter specified";
      throw new ne(
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
  return Ni(n), n.headers = lt.from(n.headers), n.data = Ii.call(
    n,
    n.transformRequest
  ), ["post", "put", "patch"].indexOf(n.method) !== -1 && n.headers.setContentType("application/x-www-form-urlencoded", !1), Wf.getAdapter(n.adapter || Tr.adapter)(n).then(function(r) {
    return Ni(n), r.data = Ii.call(
      n,
      n.transformResponse,
      r
    ), r.headers = lt.from(r.headers), r;
  }, function(r) {
    return Ff(r) || (Ni(n), r && r.response && (r.response.data = Ii.call(
      n,
      n.transformResponse,
      r.response
    ), r.response.headers = lt.from(r.response.headers))), Promise.reject(r);
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
      throw new ne(
        o(s, " has been removed" + (e ? " in " + e : "")),
        ne.ERR_DEPRECATED
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
    throw new ne("options must be an object", ne.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(n);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o], s = t[i];
    if (s) {
      const a = n[i], c = a === void 0 || s(a, i, n);
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
}, Lt = fo.validators;
let wn = class {
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
    typeof t == "string" ? (e = e || {}, e.url = t) : e = t || {}, e = _n(this.defaults, e);
    const { transitional: r, paramsSerializer: o, headers: i } = e;
    r !== void 0 && fo.assertOptions(r, {
      silentJSONParsing: Lt.transitional(Lt.boolean),
      forcedJSONParsing: Lt.transitional(Lt.boolean),
      clarifyTimeoutError: Lt.transitional(Lt.boolean)
    }, !1), o != null && (O.isFunction(o) ? e.paramsSerializer = {
      serialize: o
    } : fo.assertOptions(o, {
      encode: Lt.function,
      serialize: Lt.function
    }, !0)), e.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? e.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : e.allowAbsoluteUrls = !0), fo.assertOptions(e, {
      baseUrl: Lt.spelling("baseURL"),
      withXsrfToken: Lt.spelling("withXSRFToken")
    }, !0), e.method = (e.method || this.defaults.method || "get").toLowerCase();
    let s = i && O.merge(
      i.common,
      i[e.method]
    );
    i && O.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (g) => {
        delete i[g];
      }
    ), e.headers = lt.concat(s, i);
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function(p) {
      typeof p.runWhen == "function" && p.runWhen(e) === !1 || (c = c && p.synchronous, a.unshift(p.fulfilled, p.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(p) {
      l.push(p.fulfilled, p.rejected);
    });
    let f, d = 0, u;
    if (!c) {
      const g = [Xc.bind(this), void 0];
      for (g.unshift.apply(g, a), g.push.apply(g, l), u = g.length, f = Promise.resolve(e); d < u; )
        f = f.then(g[d++], g[d++]);
      return f;
    }
    u = a.length;
    let v = e;
    for (d = 0; d < u; ) {
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
    for (d = 0, u = l.length; d < u; )
      f = f.then(l[d++], l[d++]);
    return f;
  }
  getUri(t) {
    t = _n(this.defaults, t);
    const e = Vf(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Mf(e, t.params, t.paramsSerializer);
  }
};
O.forEach(["delete", "get", "head", "options"], function(t) {
  wn.prototype[t] = function(e, r) {
    return this.request(_n(r || {}, {
      method: t,
      url: e,
      data: (r || {}).data
    }));
  };
});
O.forEach(["post", "put", "patch"], function(t) {
  function e(r) {
    return function(i, s, a) {
      return this.request(_n(a || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: s
      }));
    };
  }
  wn.prototype[t] = e(), wn.prototype[t + "Form"] = e(!0);
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
  return O.isObject(n) && n.isAxiosError === !0;
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
Object.entries(Ls).forEach(([n, t]) => {
  Ls[t] = n;
});
function $f(n) {
  const t = new wn(n), e = _f(wn.prototype.request, t);
  return O.extend(e, wn.prototype, t, { allOwnKeys: !0 }), O.extend(e, t, null, { allOwnKeys: !0 }), e.create = function(o) {
    return $f(_n(n, o));
  }, e;
}
const Le = $f(Tr);
Le.Axios = wn;
Le.CanceledError = Qn;
Le.CancelToken = rv;
Le.isCancel = Ff;
Le.VERSION = Yf;
Le.toFormData = ii;
Le.AxiosError = ne;
Le.Cancel = Le.CanceledError;
Le.all = function(t) {
  return Promise.all(t);
};
Le.spread = ov;
Le.isAxiosError = iv;
Le.mergeConfig = _n;
Le.AxiosHeaders = lt;
Le.formToJSON = (n) => Bf(O.isHTMLForm(n) ? new FormData(n) : n);
Le.getAdapter = Wf.getAdapter;
Le.HttpStatusCode = Ls;
Le.default = Le;
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
} = Le, Wt = Oo;
(function(n, t) {
  const e = Oo, r = n();
  for (; ; )
    try {
      if (parseInt(e(160)) / 1 + -parseInt(e(162)) / 2 * (parseInt(e(168)) / 3) + parseInt(e(173)) / 4 + parseInt(e(166)) / 5 + -parseInt(e(169)) / 6 + parseInt(e(171)) / 7 * (-parseInt(e(151)) / 8) + parseInt(e(172)) / 9 === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(To, 589463);
Wt(163) + Wt(155);
Le[Wt(154)][Wt(149) + Wt(152)] = !0;
function To() {
  const n = ["tials", "Content-Ty", "defaults", "ient", "n/json", "PUT", "PATCH", "DELETE", "331993rIUvEr", "GET", "72advbsZ", "/api/v1/cl", "POST", "message", "1148550RidHCG", "response", "50256aeqtQK", "5971884GWsGVC", "params", "1730057nYhOsv", "14318982ThrFPl", "2117800pUouuT", "applicatio", "data", "withCreden", "error", "16qvEAqb"];
  return To = function() {
    return n;
  }, To();
}
function Oo(n, t) {
  const e = To();
  return Oo = function(r, o) {
    return r = r - 147, e[r];
  }, Oo(n, t);
}
const sv = async (n) => {
  var e, r, o, i;
  const t = Wt;
  try {
    return (await Le(n))[t(148)];
  } catch (s) {
    throw ((r = (e = s[t(167)]) == null ? void 0 : e[t(148)]) == null ? void 0 : r[t(165)]) || ((i = (o = s[t(167)]) == null ? void 0 : o[t(148)]) == null ? void 0 : i[t(150)]) || s[t(165)];
  }
}, av = {};
av[Wt(153) + "pe"] = Wt(147) + Wt(156);
const _e = ko;
(function(n, t) {
  const e = ko, r = n();
  for (; ; )
    try {
      if (parseInt(e(229)) / 1 + parseInt(e(237)) / 2 + parseInt(e(240)) / 3 * (-parseInt(e(259)) / 4) + -parseInt(e(235)) / 5 * (parseInt(e(249)) / 6) + -parseInt(e(246)) / 7 * (-parseInt(e(254)) / 8) + -parseInt(e(245)) / 9 * (-parseInt(e(241)) / 10) + parseInt(e(253)) / 11 * (-parseInt(e(239)) / 12) === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Ro, 561649);
const fn = {};
function Ro() {
  const n = ["1487324uyUedn", "ACTION_MOV", "33226ssBnCg", "mouseup", "ent", "keyBoardEv", "touchmove", "touchend", "12335kvqPnO", "enuHide", "164570KWntYS", "moveEvent", "24yZSxrE", "3felOlS", "10neZxID", "wheelEvent", "fullscreen", "keyup", "4989771UHbBIK", "103579qOpDWP", "mousedown", "shortcutEv", "246dnrdqo", "ACTION_UP", "touchstart", "assistiveM", "1819191PdokLc", "376fgEhoO", "mousemove", "keydown", "Event", "ACTION_DOW"];
  return Ro = function() {
    return n;
  }, Ro();
}
fn[_e(255)] = _e(260) + "E", fn[_e(230)] = _e(250), fn[_e(247)] = _e(258) + "N", fn[_e(233)] = _e(260) + "E", fn[_e(234)] = _e(250), fn[_e(251)] = _e(258) + "N";
const Bt = fn, Ms = {};
function ko(n, t) {
  const e = Ro();
  return ko = function(r, o) {
    return r = r - 229, e[r];
  }, ko(n, t);
}
Ms[_e(244)] = _e(250), Ms[_e(256)] = _e(258) + "N";
const cv = Ms, lv = _e(238), uv = _e(242), fv = _e(232) + _e(231), Gf = _e(252) + _e(236), Ds = _e(248) + _e(231), dv = _e(243) + _e(257);
function Po() {
  const n = ["mouse", "offsetWidt", "height", "KEYBOARD_T", "touchstart", "capslock", "typeKey", "dMFyi", "current", "ZsBIB", "forEach", "cEJfw", "veaEc", "HyCrU", "shift", "xfNnA", "tab", "type", "mouseup", "preventDef", "eNXcH", "left", "PASTE_TEXT", "ODE", "dZYDY", "getBoundin", "48626703GPlnJR", "YakqX", "focus", "clipboard", "backspace", "COPY_TEXT", "4aCwWyF", "qrtBz", "key", "readText", "deltaY", "shiftKey", "clientX", "arrowleft", "top", "touchmove", "JhUTD", "arrowup", "EXT", "passive", "keyAction", "includes", "isDown", "touch", "offsetHeig", "UrFQY", "keyEvent", "12100214rRNmve", "pageY", "jzweb", "mousemove", "delta", "toLowerCas", "3381816EJIcen", "KEYBOARD_C", "control", "ctrlKey", "gClientRec", "showMenu", "THOtX", "umFjS", "arrowright", "uOeUz", "arrowdown", "touchend", "luzvJ", "width", "action", "addEventLi", "ault", "meta_state", "touchEvent", "sSLpu", "mousedown", "tListener", "MVWey", "432610lIzjhS", "stener", "keydown", "removeEven", "3624981PnUSlW", "toUpperCas", "wheel", "TjyTR", "21096zzcCuC", "275RuBpue", "KAyMY", "enter", "repeat", "4280968oWNjSF", "clientY", "pageX", "wheelEvent"];
  return Po = function() {
    return n;
  }, Po();
}
(function(n, t) {
  const e = mn, r = n();
  for (; ; )
    try {
      if (parseInt(e(449)) / 1 + -parseInt(e(426)) / 2 + parseInt(e(453)) / 3 * (-parseInt(e(399)) / 4) + -parseInt(e(458)) / 5 * (-parseInt(e(457)) / 6) + -parseInt(e(420)) / 7 + -parseInt(e(462)) / 8 + parseInt(e(393)) / 9 === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Po, 865999);
function mn(n, t) {
  const e = Po();
  return mn = function(r, o) {
    return r = r - 365, e[r];
  }, mn(n, t);
}
const hv = ({ isMobile: n, assistive: t, onImgEvent: e, canvasContent: r, imageRef: o }) => {
  const [i, s] = it(!1), a = (d) => {
    const u = mn;
    if (d[u(386) + u(442)](), !o[u(375)])
      if (u(438) === u(374)) _0x1cd1cc[u(441) + u(450)](u(371), _0x3cb905, _0x90d54c), _0x3f53cb[u(441) + u(450)](u(408), _0x46868c, _0x163f59), _0x1dc7f4[u(441) + u(450)](u(437), _0x234a84);
      else return;
    const v = o[u(375)];
    let g = Bt[d[u(384)]];
    if (t[u(415)] == !0 || t[u(431)] == !0) {
      if (g == Bt[u(385)]) {
        if (u(432) === u(391)) return;
        e(Gf, {});
      }
      return;
    }
    if (g == Bt[u(446)] && s(!0), g != Bt[u(446)] && i == !1) return;
    g == Bt[u(385)] && s(!1);
    let p, h;
    const w = v[u(392) + u(430) + "t"]();
    if (d[u(384)][u(414)](u(416))) {
      const { touches: m, changedTouches: C } = d, y = m[0] ?? C[0];
      p = y[u(365)] - w[u(388)], h = y[u(421)] - w[u(407)];
    } else d[u(384)][u(414)](u(367)) && (p = d[u(405)] - w[u(388)], h = d[u(463)] - w[u(407)]);
    const S = {};
    S[u(440)] = u(444), S[u(413)] = g, S.x = p, S.y = h, S[u(439)] = w[u(439)], S[u(369)] = w[u(369)], e(lv, S), v[u(395)]();
  }, c = (d) => {
    const u = mn;
    if (u(378) === u(378)) {
      if (d[u(386) + u(442)](), !o[u(375)]) return;
      const v = o[u(375)], g = d[u(403)], p = v[u(392) + u(430) + "t"](), h = {};
      h[u(440)] = u(366), h[u(439)] = v[u(368) + "h"], h[u(369)] = v[u(417) + "ht"], h.x = d[u(405)] - p[u(388)], h.y = d[u(463)] - p[u(407)], h[u(424)] = g, e(uv, h), v[u(395)]();
    }
  }, l = async (d) => {
    const u = mn;
    if (d[u(386) + u(442)](), !o[u(375)])
      if (u(376) === u(382)) _0x55ec66[u(401)] = _0x680617[u(401)][u(454) + "e"]();
      else return;
    const v = o[u(375)], g = cv[d[u(384)]], p = d[u(401)][u(425) + "e"]();
    if (((m) => {
      const C = u;
      return C(456) === C(456) ? [C(428), C(381), C(372)][C(414)](m) : [C(428), C(381), C(372)][C(414)](_0x2abfe8);
    })(p) == !0)
      if (u(387) === u(409)) {
        const { touches: m, changedTouches: C } = _0x5cae48, y = m[0] ?? C[0];
        _0x4f950a = y[u(365)] - _0x3c2945[u(388)], _0x1276e9 = y[u(421)] - _0x461d89[u(407)];
      } else return;
    const w = async () => {
      const m = u, C = {};
      C[m(440)] = m(419), C[m(413)] = g, C[m(373)] = m(370) + m(411), C[m(401)] = d[m(401)], C[m(461)] = 0, C[m(443)] = 0;
      const y = C;
      if (d[m(429)] == !0)
        p == "c" ? y[m(373)] = m(398) : p == "a" ? (y[m(373)] = m(427) + m(390), y[m(443)] = 4096, y[m(401)] = 29) : p == "v" && (y[m(373)] = m(389), y[m(401)] = await navigator[m(396)][m(402)]());
      else if (p == m(410)) m(400) !== m(379) ? (y[m(373)] = m(427) + m(390), y[m(401)] = 19) : _0x570b64[m(441) + m(450)](_0xe13203, _0x4072b9);
      else if (p == m(436)) y[m(373)] = m(427) + m(390), y[m(401)] = 20;
      else if (p == m(406)) m(448) === m(448) ? (y[m(373)] = m(427) + m(390), y[m(401)] = 21) : _0x170e58[m(452) + m(447)](_0x55113f, _0x36e9fd);
      else if (p == m(434)) y[m(373)] = m(427) + m(390), y[m(401)] = 22;
      else if (p == m(397)) {
        if (m(394) !== m(394)) return;
        y[m(373)] = m(427) + m(390), y[m(401)] = 67;
      } else if (p == m(460)) y[m(373)] = m(427) + m(390), y[m(401)] = 66;
      else if (p == m(383)) {
        if (m(418) === m(380)) return;
        y[m(373)] = m(427) + m(390), y[m(401)] = 61;
      }
      return y[m(384)] == m(370) + m(411) && (m(459) === m(459) ? d[m(404)] == !0 && (m(422) === m(422) ? y[m(401)] = y[m(401)][m(454) + "e"]() : _0x288d51[m(452) + m(447)](_0x53f800, _0x21486f)) : (_0x2dc7aa[m(373)] = m(427) + m(390), _0x3348f8[m(401)] = 61)), y;
    }, S = await w();
    S && e(fv, S), v[u(395)]();
  };
  st(() => {
    const d = mn, u = o[d(375)];
    if (u)
      if (d(433) !== d(433)) _0xcbb8c5[d(373)] = d(427) + d(390), _0x3c4271[d(401)] = 67;
      else {
        const v = {};
        v[d(412)] = !1;
        const g = v;
        return n ? (u[d(441) + d(450)](d(371), a, g), u[d(441) + d(450)](d(408), a, g), u[d(441) + d(450)](d(437), a)) : (u[d(441) + d(450)](d(455), c, g), u[d(441) + d(450)](d(451), l), [d(423), d(446), d(385)][d(377)]((p) => {
          const h = d;
          u[h(441) + h(450)](p, a);
        })), () => {
          const p = d;
          u && (n ? [p(371), p(408), p(437)][p(377)]((h) => {
            const w = p;
            w(445) !== w(435) ? u[w(452) + w(447)](h, a) : _0x266ac0[w(373)] = w(398);
          }) : ([p(423), p(446), p(385), p(455), p(451)][p(377)]((h) => {
            const w = p;
            u[w(452) + w(447)](h, a);
          }), u[p(452) + p(447)](p(451), l)));
        };
      }
  }, [n, a, c, l]);
  const f = { ref: o, ...r };
  return q.jsx(gd, f);
}, xv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAABGdBTUEAALGPC/xhBQAACklpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAAEiJnVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/stRzjPAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAJcEhZcwAADsQAAA7EAZUrDhsAAD0ASURBVHic7b15dCTXdaf5Re47EonEVlgKVQXUSoqLSJEii6JELZQoS5bMM5J7uiWrR97kGUuW3Z6ZtnvG9unlzHS7vfX42D2WLavVbrft9liLZe0U2awSSZES12KtqMK+JhKJTOS+xPzxABJVRFUBiBcRGZnvOycPwDrAi0vEi1/cd99992ojx+5EobiGLmA/0Lfx/dZPcuMTAwJAcON3OgAX4AGiG/+WA2pAA1jb+LciUAKyQGrjs3LNZwGY3PheoXgNj90GKGzBDRwCjgEjwEHgwMb3I7wuOEbZOk7XHn4/B0xsfK4Alze+PwuMA3VD1ikchxKs1icJ3AbcuvF5E3CC1z2jZibK63ZfSxE4A7wEvLzxeRHhsSlaFCVYrYUHIU73bXweAAZstcg8gsBdG5+tzAJPAt/f+LyIWJYqWgBNxbAcTQAhSicRAnUvELHVouYjBzyDEK9TCDEr2WqRYs8owXIeo8B7gfcBbwdCtlrjPArA48DXgW8Al2y1RrErlGA1Pz7gIeD9CKEatdecluMSQri+BjwGVOw1R3EjlGA1J0HgYeBR4MeAuK3WtA8Z4O+BvwW+iQjsK5oIJVjNgxt4J/CPgA8j8poU9rEGfAn4L8B3USkUTYESLPs5BPw08HFgn822KLZnDvgi8CeI/C+FTSjBsgc/8BPAJxHxKc1ecxQ7RAe+B3wO+P+Asr3mtB9KsKzlGPAzwE8BCZttURgjDXwB4XWdtdmWtsFltwFtwjsQwdwzwGdRYtUKJBD38gzi3r7DXnPaAyVY5uEBfhJ4DrFd/n7U0q8V0RD39jHEvf5J1AkS01CCJZ8I8EuI/J6/BN5sqzUKK3kz4p5fQnhf6tSBZJRgySMI/AqiosDvIsqzKNqT/cDvIObCP8MZB80dgRIs4/iBTyMm528D3faao2giuoF/h5gbn0bMFYUBlGDtHR/wcwj3//cRxe4Uiu3oQ8yRS4g547PXHOeiBGv3aMD/gNgd+mNg0F5zFA5iEDFnzgAfQW3C7BolWLvjXkSZkr9GHUJW7J1R4K8Qc+lem21xFEqwdkY/8HnUBFPIZfMF+OeIOaa4CUqwbowHsT19FvgEyoVXyEdDnHw4C/wyKofrhijBuj53ICpV/g6qcoLCfDqAf4+Yc+q83HVQgvVGgsC/BX6AmjgK67kTIVr/FpW/9QaUYF3NQ4juK7+Kcs0V9uFBzMGXEXNSsYESLEEH8GfAdxD1qRSKZuAQYk7+GSosASjBAnHK/iXgn6KC6ormQ0PMzZdQ3lZbC5YfEeT8DjBssy0Kxc0YBr6N2ARq2yM+7SpYR4CnENvI7fo3UDgPFyLN5mngqM222EI7PqyfQNQtusNmOxSKvXI7Yg5/wl4zrKedBCuIyFb/PKpOkcL5hHl9PrdNM912EawxxBGIT9hsh0Ihm08g5vaYzXZYQjsI1iOIJNDbbbZDoTCL24BnEaWaW5pWFiwN+DXgq6jOyYrWpwP4CvDrtHB6TqsKVgD4r8C/pnX/HxWKa3EB/wox9wM222IKrfgwJxGtxT9ityEKhU18BPEMJO02RDatJlhjiPyq++w2RKGwmfsQz0JLBeNbSbBOIm6QqgSqUAhGEc/ESbsNkUWrCNZHEccWuuw2RKFoMroQz8ZH7TZEBq0gWJ9GNK9sySCjQiGBAOIZ+bTdhhjFETWfTt5/97b/fur0s78B/KalxigUzkRDtBpLnLz/7t+83g+dOv2sZQbtBUcI1rWcOv2shji1/ks2m6LYwO12oWkuXC4Nl+t1x73RaNBo6Oh6g3q9YaOFig1+49TpZ+PAZ0/ef7dutzG7xXGCtSFWfwh8ym5bWh2P200g4Mcf8BPw+/AH/Hg9HjweD16vB4/Xg9fjwe1273jMer1OtVajVq1Rrdao1WpUazXKpTKlckV8LZWp1esm/p+1PZ8BfKdOP/s/O020HCVYp04/6wb+I/BJu21pJTweD+FwkFAoSDgUIhwOEgwG8HjkTw+32y0Ezn/jkk61Wo1isUQ+XyRfKFAoFMnni9RqNek2tSmfQojWz528/27HvB0cI1gbnpUSK4NomkYkHCIWixCNio/f33yd0z0ez2v2baVcrpDLrZPLrZPNrrOeL6DrjnISmolPApw6/ezPOMXT0kaOOaIxjFoGGiAcDhGPx4jHY8SiUdzuVtgcFtTrDbK5HJlMlkwmSz5fsNskJ/LHwC+cvP9uXQXd5fC7KLHaMS6Xi3g8RiIRJ9HZgc/XfB6ULNxuF53xDjrjokdDpVIhvbpGOp0hk8nSaKhA/w74eaCMAzaxnOBhqdSFHeByuejs7KA7maCzM95SXtReqdcbrK5mWE6lWV1dU+J1c34T+C27jbgRzS5Yvwj8gd1GNDOxWITe3m66ujrx7GK3rt2o1eusrKyyuLhMNrtutznNzKeB/2C3EdejmQXrHwNfpIVr++wVj8dDb08XfX09BIMqwX+3FIslFhaWWFpeoVpVu47XoAMfA/7CbkO2o1kF617gCaB1gy97IBIJM7Cvj66uTlwupeNGaTR00ulVZmcXyK3n7TanmagA7wMes9uQa2lGwRpF1KjuttuQZiGRiDM40EcsFrXblJYlm80xM7tAOp2x25RmYQ14AHjZbkO20myC1Y0Qq7YvEaNpGj09SQYH+tSyz0KKxRIzswssLaVUfhfMAG8B5u02ZJNmEqwQwgW9x25D7ETTNLq7EwwPDRAItG2DX9splcpMTc+xvLzS7sL1DPAQ0BQJbu54d7/dNoAIrH8esW5uW5LJBMeOjtLX223KsRjFzvF4PHR1ddKdTFCr1igUinabZBeDwGHgv9ltCDSPYP0z4FfsNsIuotEIx44eYmBfH16vEqpmwuv1kEwmSCTi5AtFKpWK3SbZwQmEh3XabkOaYUn4TuCbQNslEfn9Pkb2D9HdnbDbFMUOWV5OMzE5TbncdsJVBx5GNLewDbsFawj4IW22I6hpGoOD/QwN9l9VO0rhDBqNBjMz80zPzLdbfGsZuAuYsssAOwXLB5wCti8n2qLEohFGR0cIhYJ2m7InfF4fPp9f1MTyePFs1MNyuVy4NCG+brcbNA10nfpGXauG3qDRaFCv1zdqYFWp1WpUKmUqVWd6K4VCkUuXJsjm2ipz/jlEU4uyHRe3U7D+BPhpuy5uNW63m5H9g/T399htyk1xu92EgiGCwRChQAi/34/f58fn86Np8hNWdV2nUilTrpQpl8sUSgWKxQKFYuE1wWtm5ueXmJiccYStkvhTbHp27RKsjwH/yY4L20E8HmNs9EBT1p3SNI1QKEw0HCUSjhIOhZuqukOlUiFfyLOez5HL5ygU8k25DCuXK1y8dIVMJmu3KVbxU9jwDNshWAeBF4CWT9t2uTT2Dw8yMNBntylXEQyG6Ih2EO+IEw5FHBVHazQa5AvrrGUzZLJrFItNkR70GrOzC0xOzdBoNJ+oSiYH3AGMW3lRqwXLAzyJOCvY0oSCQQ4fPkgkErLbFDRNIxbtoDPeSUcsjs/bPB6UUSrVCmvZDKuZVbK5tabwvtbzBS6cv0yh2PK5W88g4lmWnSC3Og/rNxBVGFqa3t5ujh8btXUJqGkaHdEO+vsGOLD/IN1dPYRD4V01jHACbrebcChMVyJJT3cvAX8QvdGwNZDv83np7U1SrdZYb+0KqIMbXx+36oJWelj3IyowtNYTswWXy8WhQ/vp7UnaZoPf5yfZ1U13VzfeFvKkdku1WmF5ZZnUyjLlii0bWgAsLqUYH59s5eKBdeDtiB1/07FKsGLAi8CIFRezA7/fx7FjY0TC9iwB4x2d9HT30hHtsOX6zcxabo2l5UUya6u2XH89X+Ds2YutnGw6AdwGmL7jYNWS8I8RKtySdHREueXEUYIWH1Z2uVwku7o5NDJKb3cvAb+q6rAdAX+Ars4uuhJJdF2nVCpaGuvy+bz0dCdZX8+3qmjFgX7gy2ZfyAoP6z2IozctSXd3F2OjBywtqOdyuenr6aO3u08dkt4DtVqNxeUFFpYWaDSsy53SdZ2LF6+wtLxi2TUt5hHg62ZewGzBigKvAMNmXsQuhob2sX94wLLruVwuert76evZp4RKArVajYWlORaXFy2NMU1OzTI9PWfZ9SxkGnFQOmfWBcxeEv4O8G4zL2AHmqYxNnaAgX3W5FdpmkZPspfRA4fpjCcclTfVzLhcLmLRDrq7emg0GhQsyumKd8TwB/ysrq5Zcj0L6UAsD79m1gXM9LDuQVQPbamny+VycfToIRKdcUuuF4vEGB4aIRhw5tlDJ1EsFZmaniC7bk22eno1w7lz4622g9hAZAQ8bcbgZgmWB3FI8jYzBrcLt9vFsWNjxDtipl/L7/MzNLCfznin6ddSXM1qZpXp2UlL0iEya1nOnr1Ivd5SovUS8GZMSCg1a0n4WeDjZgxsFx6PmxMnjtBhciMITdPo7elj9MBhQkH7s+TbkWAgSHeyh4beoFAwt5tOIOCnoyPGyspqKx3n6UWkODwle2AzPKw+4Dwi96ol8Hg83HLiiOnHbILBEAeGDxAORUy9jmLn5AvrTExdMT2+tb5e4JUz56nVWqZPYhY4AizIHNQMD+v/oYUaSbjdbm45cYRoNGzqdfp7+zk0MobPpxpPNBM+r4/urh50vcF63ry6Vz6fV3haqTSNJjgPKQE/ojDnl2QOKluw7kG0uW6JLp8ul4sTxw8Ti5nn8fi8PkYPHqY72WNKrSmFcTYPj0ejMXK5LHWTcrf8fh/RaIRUKt0Uh7glcBsiB3NG1oAyBUsD/ooWybnSNI3jx8aIx81b2XZ2dHJ49KjaAXQIm+c0y6USpXLJlGsEAn4i0TCpVNqU8S1GA44jOmLJGVBiDOsjCMFqCY4eOUQyaU5zCE3TGOgfpL93nynjm4Xb7SYWixCLRohFo0TCIQIBP4FggIDfh9/v3/g5Fx6Ph1qt9truV7lcplSuUCqWKJXKrOcLZHM5srl1stl1x1XrnF+cY3Z+xjRPKLWyyrlzl0wZ2wY+Cvy1jIFkCZYPOIsozud4RvYPMjhoTkKtx+Ph0MgosSY/pBzw++nv76Gnu4uuRCfJZIKOWNS0Eslr2RypVJqV9CrLy2kWlpabvhdgNrfG+MQl0wLlMzPzTExKW03ZyWXgGGD4IKUswfo5xAFnx9Pf18OhQ/tNGTsYCHL40JGmDKwHgwGGBvoZGtpHf1+PZYmxNyKzlmV2boHpmTmmZ+YpFs1ZhhmhUilzYfw8xZI54jo+Psn8wpIpY1vMp5CgETIEKwBc5PViXo4lkYhz7OioKV5ELBpj9MDhpiqgF4tGGBs9wMEDw/T1djd10F/XdRYWl7l8ZYqL4xNks6YdV9s19XqdS1cukM3Jz5DXdZ2z5y6RTmekj20xM8AYYOitI0OwfhH4A6OD2E0oFOS2Nx3H7ZZ/kiiZ6GZk+EBTCEIwGODo4UMcHjtAb49z20EuLi1z4eIVzl0YbwrPS9d1JqaukEovSx+7Xm/w0kuvkm/yJfIO+AwGtcKoYIUQReibq8vCLvG43dx223GCQfn1pPb1DTDQb7/zOTTYzy3Hj3DwwHBTeXlGqdfrXJ6Y5pUz55mesb8Cwuz8DHMLs9LHLZXKvPDiq05PLF0ADiHa3u8Jo2kNnwF+wsgAzcCRI4eImXDkZmhgmH191pWfuRa3283xo2M8/O63ceftt9CV6Gy5Sg8ul4uuRJxjR0YZGz1Avd4gvZqxLY8pFo3hdrvJ5uRWYvB4PITDIZadXUsrAqwhiiLsCSMeVhThXTl3XYHwPPbvl+8B7R8aoSfZK33cneDxuLn1xFHefMetju0wbYRCociPXniFl145S61mT7rEUmqRyekJ6eNOTc0y5exaWssIL2tPQUgjHtangQ/t9ZebgY6OGGNj8mNLdomV2+XiTbcc5ZH3voPRQyN4vV7LbWgGvF4vw0MDHD82RqOhk1pesdzjCocieL1e1rIZqePGYlGy2XXKZfsaaxgkDKTZo5e1Vw/LB1wBnJX5uAWPx8Mdt5+Q3opraGCYvh5LW6cBcOjgfu5/612WlL5xGpm1LKefeo7xy5OWX3thaZ7p2SmpY5YrFZ5//oyT41nziIY0u87L2quH9Qkc3l/w8OGDxKJyzwjakb3e1dXJ+97zDu6681YCFjfBcAqBgJ/DowcY2NfPUmrF0l3FSFgk2+YkFgX0uN0EggEnH9+JAlPAj3b7i3sRLA34Ig6OXfX2JBmSnMnek+xlaMC6Y5Rut5t7776Dd7/rbcQ7zK3R1SrEYhFuOX4Yt8vN/MKSZcvEaCRGrV4jL7G2VigUpFypkHduo9ZR4I92+0t7EayHEQX6HEkg4Of4scNSu9zEOzo5sP+gZXlW/X09/PgH3sOhg/txNUFul5PQNI2BfX2MjY6wvLzC+rq5Bfo26Yh2UCgWpB6ajnd0kEqlbdtYMEg3osDf+G5+aS+C9YcIdXQkR4+MEgrJy7cKhyMcPnjEknQBl8vFW+66jXc9dJJQsP12/2QSDAQ4dmQUTXNZ4m1pmkZnRyfZ9SzVqpzehC6XRigUdHLbsG7gP+/mF3YrWMeBf49D61319CQZGJCX4+r3+Tk6dgy32/yWW9FImA++/90cPWLO0aF2RNM0Bgf6GBrcx/TMPJWKuU1ON0VrNZOWVp0iEPBTLjt2aXgI+BtEqsOO2K1g/Rrw1l0a1RR4vV5OHB+T5gm5XC6OHDqK34Juy0OD+/jQBx+mM97cFR6cSjQS5tiRUZaWV0w/o+hyuYlGoqyspqR5dR0dURaXVpzYfUcDdHbRfHU3guUHvoA4juM4Do8dIBKRV+Z4ZOgAHR1xaeNdj7vufBPvfuhk2+ZUWYXH4+Ho4UM0Gg3m5hdNvZbX68Pn9ZFZW5UynsvlIuD3kVqRM57FHEaEmXbk3u5GsD4CfGyPRtlKR0eMAyND0sbrSfaYfuTG7XLxrnfcz52336KWgBahaRpDg/uIRSNMTppXnA8gFApTq8nbOQyFgmSz65Scl1AaQOR07ijFYTfro5/Zkzk2o2kaBw/KSzcIBUMMD45IG287/H4fH/yx93Ds6Jip11Fsz7GjY/z4B94jPan4WoYH90tt5Xbw4LBTX24/vdMf3KlgjQJv35MpNtPX201Y0nk6l8vFwRFzg96hUJBHP/SI9Dwxxe4YHOjn0Q89YupZTE3TODQyKi2uGgoF6et1ZHrkPcCJnfzgTv9Sn8SBO4Mej5vhYXlLt6GBYVMbRkQjYR790PtIdqluz81AsquTRz/0PqISY5/XEggEpSYcDw8P4PE4snzQJ3byQzsRLPdOB2s2hgb34fXKSTmId3SaeqA5Go3w6IcfUTuBTUZnvINHP/wIUcnHuLbSk+wl3iHnJeX1ehgacuQR348htOaG7ESwHsSBBfp8Pi/9/T1SxnK73YwMjUgZazvC4RAf/uDD0s82KuQQi0b48AcfJhw2b4N8ZGhEWmHF/r4e0+NvJtDLDsJOOxGsjxg2xQaGBvdJiw0M7RvG6zVnAgSDAT70gYdVlYUmJ94R40MfeNiUqrQgUh2G9slZGrpcLqd6WR+92Q/c7In2AI/KscU6/H4fvZKCj9FIlO6kHE/tWjweDx945F10JeKmjK+QS1cizgceeRcejzknG7qTPUQjcg6y9/YknVi948PADRMObyZYDwFJaeZYhPCujO8RaJrGyLA5rRY1TeO973nQqbs6bUtfbzfvfc+Dpu0UjwzLOUQvcsoct9OcRGjOdbmZYN3URWs2hHclR2N7u/sImHT05v633sXBEevK0SjkcXBkmJP33W3K2AF/gN5uOSHjnp6kE2NZNwxB3UiwfAgXzVHs6++V8obyeLymZbMfGTvInbffYsrYCmu447YTHBkzx/ve1zeAx2P8KJamaezrt6evgAE+jNCebbmRYL0TcFRCkNvtkha7Gtw3aEo7rGRXJ+98x/3Sx1VYzzvfcb8pOXNut5vBfXIao/T2djutrVsnQnu25UaC9QH5tphLX1+PlKS5YCBIMiE/tuTzennkvQ+ZFrRVWIvH4+GR9z6Ez4SD6clEt5QkZY/HTV+f4+Kk19WeGwnW+00wxDRkur8D/YOmBFUffOAelb7QYsQ7Yjz4tnulj6tpmrQGvLLCJBZyXe25nmDdCjgqIpxIxKUEGEPBEJ3xhASLrubw6AF1mLlFOXZklMOjB6SP2xlPSDkc7ff7SDgrdWYYoUFv4HqC9T7zbDEHWTuDZrSVD4WCvOPB+6SPq2ge3vHgfYRD8jPhZc1HB6bPbKtB1xOsd5toiHT8fh+JzrjhcULBsLQzXVt58IF7nbi9rNgFfr+PBx+4R/q48Y5OQkHjh687OzucNge31aDtBCsInDTXFrn09sjxrvp65R+ZPHhgmLFDI9LHVTQfo4dGOHRAfiSlr1dOAqis58QiTiK06Cq2E6yTiCqAjkFGKoPP5yMR75Jgzet4PB7e/oD8gKyieXnwbW+VvguciCfw+Yx7R7JSfiwiADxw7T9uJ1gPmm+LPDpiUSmubm93n/SdlLvuvFVqHXlF8xMJh7jrzm3jxXtG0zQp2e9+v89pu9Rvu/YfthOsN/xQM5NMGt/Rc7nc0g84RyNh7rxd7sRVOIM7b79VetG/7q4eXC7jOYbd3fJ3wE3kDc7TtYIVAN5ijS3G0TSNZNJ4kDzRmcAtYTJs5b573+zUyo8Kg3g8bt5675uljul2u0l0Ghebrq6Ek3Ky7uaaONa1gvUWRDsvR9DREZXS/qq7S653leiMc9ikc2YKZ3Bk7KCUneutyJinHo+beNwxy0I/QrReYzvBcgzJLuNvnGAwRCQst9LnPW+5w0lvMYUJaJrGPW+5Q+qYkXCEoIRE0i5n9Qy4atfqWsGSn0hiIjKyd7slnxnsSsRVGoMCgLFDI3Ql5IqDjPkq2/MzmaucqGsFyzF78NFoGJ/P2HJQ0zQSnXJTGe68QwXaFa9z5x1yywglOrsMe+8+n5do1DG711c5UVsFqxeQfy7FJDolvCWikZjUFvDhUEjFrhRXcXjsoNQjO16vl2jEeAxKxvNjEYMIbQKuFqzbLTfFADIChwnJh5zfdOsx3JIaXyhaA7fLxZtuPSp1TBnz1kGBd4DXgoFbny65+7Am4nG7peS5xOPy4gsul4sTx1Q1BsUbueX4EakvMhnzNhoJ43FOYb87N7/Z+ld8kw2G7IlYR9TwOj4cjuCVUIZ2kwMjQ6a2NVc4l2AwwKFD+6WN5/V4CRvc2dY0jViHnA49FnD75jdbBWtHve2bgY6Y8T90R1Ruh+Vbjh+ROp6itTh2RK73LWP+yniOLOL45jebguUFHPPExST8oeOxuHFDNgiFggw7s3GlwiKGh/ZJ9cBlzF8Zz5FFHGajX+GmYI1xkwaGzYLL5SISMbbr4nF7CIXkbeuOHtyvEkUVN0TTNEYPylsWhsMRPG5jVSEikZC07ugm40Vo1GuC5RjvKhIOGRaHaDQmVWDGTCiPq2g9ZM+TaNTYTp+maUTC8qukmsQReF2wRm00ZFeEDXpXgNSjOMFgwIm93xQ2sK+/l2BQXqm5aNj4kk7G82QRo/C6YB2y0ZBdEZbwRohG5K3dR4bN6bCjaD00TWNkWF5udiRi/MXrIA/rKsFyjodl8A/scrmk1MjeZHjYnO7QitZE5nwJBcOGY1AhhwrWiH127I5Q0NhOSzgUluYRaZrGfiVYil2wf3hA6vwLG9w8Mvo8Wch+EIKl4ZAzhIGAH7fb2BtFRnmOTRKJOAG/Y8qHKZqAgN8vtUeg0fnsdrsIBBwxhwcBzYU4WOgIi8MS8lhCAXmC1d8nt/Cfoj3Y1ydvk0bGfJbxXFmAH+hxAUN2W7JTAgHjOywyPSy1O6jYC/398l50IQmVIGQ8VxYx7ALkN+MzCX9ATit6WTiwm66iCejvlSdYQQkeloznyiJ6XYBj1jVG19o+n09aZq/X63HSWSxFE9HRETVcfHITl8uFz2fsuXBQHLbXUR6W0T9swC/P9U10dqr8K8WekdGPYBPDz4Uzgu4AfS7AMesav8Eb4/fJE6ykswr5K5oMmXXVjc5ro8+VhXS7gLjdVuwEt9tlOKVBRrvvTRxWsVHRZHRIrEVldF7LeLYsIu4YwZJRe93nlSdYsajc1mCK9kLm/JHxIpbZ28BEnCNYHo+xUhog96bEYkqwFHtHZi0qGZVzZTxfFtDpGMHySviDeiSWRI5F1Q6hYu/I9LBkzGsZz5cFxF1c07u+WfF4ZQiWvJvioJ0VRRMic/7IWX04QrACLsARaa4yOnwYrdC4SSDgVykNCkNomkZQUoa5jHntdkYHnYALcMR2l4xdDFk3RXlXChnIyjCXMa/dHkcIVnSzWkPzY9CjkVm72m8ws1ihALkZ5g6pzW4UlwtwxOLV6A2RuYRzSM6KosmRKTJG57dDBM/jAuSV3zQRl9Ebosm7IQ65uYomp6kEyxkx2bBznjyDf1DNJe+GOCRnRdHkyJxHzbQCMRPnCJau222BQtGy6Djj+XIBObuNsIJGoyFtrGq1Km0sRfsicx416gbntzP0Chcg70k2EaOCo0v00GSOpWhfpM5Jg4oj84VuInkXULLbip3QMHhzZU6OWr0ubSxF+1KXOI+Mzm+jz5dF1FxA2W4rdoLhGyLxDVIpV6SNpWhfyhLnkeH57QzBargAR7gLhtfoQK1ek2AJFEuOcEoVTY6seSRjXtclPF8WkHMB63ZbsRNqNQk3pSZHm8vlilPW/IompdFoSPOwZMxrGc+XBZQcE3SvSviDyvKwAEolR6ykFU2KzPkjY17LeL4soOQCMnZbsRNkvAFkbiOvZdsiG0RhEtmcvIWNjHntEA8r4xjBqlZlvEXkBTllTjhF+yHzhVetGRcsGc+XBay2lWBVKhIFK6sES7F3ZM6fSsX48tIhguUcD6vRaBjOW5EpWJnMmrSxFO1HZi0rbSyj87perztlEynjApbttmKnGN1VKVfkpSOkVtLSxlK0H+l0RtpYRue1zHwwk1l2AQt2W7FTDAtWWd7OTHp1zSlvJUWToes66dVVaeMZndcOEqwFR3lYRreCK9WKtOMQ9Xqd1Yw8t17RPqxm1qTFjOr1OpWqMcFxUIrOoguYt9uKnVKSkBlcKBYkWCJYWFySNpaifZhfkDdvihLms4znyiIWXcC03VbslKKEN4GMG7zJ3LwSLMXumZc4bwol4/O5WHSMhzXlAhZxyAHofN74zZFxgzeZX1iUNpaifZiTOG9krBjyBXnPhIlUgCUXonTXjM3G7IhyuWK4tEtB4s3JZLJSRFTRPuTzBTISY59GBatWrzsl6D4N6JslkidsNGRXFPJFY79fzEvd3ZuYcoTWK5qEyalZaWM1Gg0KhbyhMYw+TxYyCa/XdL9koyG7wqj7qus6eYM3eStTEiegovWZlPiCyxfyhuvEOWQ5CBsatSlY4zYasitkLMHW8/LOcU1Oz6l8LMWOaDQaTE7PSRtPxjzOO8fDGgcHeljr6xIEa12eYFUqFaZn5E1CResyPTMn9XiYDMFaX5e32jCZqzys8zYasivy+YJhjyaXz0mt8X7h0oS0sRSti8x5ous6OYMv3kaj4aRNo3PwumBdBBzRu0rcKGNvhXq9Tr4g77T85SuTUhsKKFqPer3O5SuT0sbLF9YNz7ncuvEYmEVUERr1mmBVgQu2mbNLsmvGXeG1rLxqC+VyhSsTjsm/VdjAxOSM1PQBGfM365wilBfYcKi2dn4+Y48tu0dG8bPMmrzDpwCvvOoYvVfYwJmzF6WOl8lmDI+xtuaYmm6vbn6zVbBetMGQPZHNrtNoGHNlC8WClMJnm0zPzKkqpIptya3npaYzVCoVw/lXjYbuJA/rhc1vtgrWj6y3Y280Gg0pf+zVjDwvS9d1XjnjmL0LhYW8/Mo5qbGi1YzxWmy53LqT0nGe3/zGtd0/OgEZFRvTmRUJlrzOy2fOSW10oXA+1WqVl8+ckzqmjHm76qyKua85U1sFaxGHnCkEWJVQsXE9vy61qF+5XOHVc45JaVNYwKvnLkkNtlcqZdbzxkMPMp4fi5hBaBNwtWABPG2tLXsnXyhKmQgrqykJ1rzO8y+ecZKrrTCRRqPBCy/K3ctaWTXuXZXKZfIFx2S4/2Drf1wrWD/AQaysGI9BpdJyC65msznOX3DMSSeFibx67pL0/pXLK8ZraaVXMsYNsY5ntv7HtYL1DA5iOWU8+Fgul8nm5K7nf/DDF5WX1ebUGw2efe4FqWNmc2tSQhgyXvQWctWqbzsPyxHF/EDsdMhYFi6vyPWy1tZyKi+rzXnlzHnDJzKuRcY8rVSqTupaXgae3foP1wpW6dofaHZSErys1UyamoTuuVt55tnnqVTUjmE7UqlU+YFk76pWq0pJZ5DxvFjIs8BVwbZrBQvgCWtskYOMZaGu6ywuyy13XCyWpE9ahTP4wXMvUCzKbeywuLwoJZdreVluKo/J/Pdr/2E7wXrDDzUz6+t5KZNjKbUoPe70wkuvsrrqqHwXhUFWV9d44aVXb/6Du6DRaLCUMv5CLRZL0pepJrMjwXoSsTR0DAuLxtf2tVqNVFpuikOj0eC7j5+WOqaiufnu46elv/hW0ilqNeN9DGU8JxZSYoeCVQROmW6ORJaWUlLc5YWleenlNubmF6VnOiuak5fPnGNuXm5oQdd15peMtw7VdZ2lJbkvZJM5xTXxK9hesAC+ba4tcqlWa1K2asvlEmkJiXnXcvqpHzqpsqNiD6yv5zn91A+lj5teXaFcNr7gWVlZldZt2iK21aDrCdbXTTTEFGS5u7MLs9K9rEqlwre++6RTiqUpdomu63z7sSellj/eHHd2QU6TE4ctB+E6GnQ9wXoZmDLPFvlkMlkKEo4blMsl6dnvADOz8zz/wivSx1XYz/MvvML0jPFl27Wk0ikp3lWhUJTaC9ECphAa9AauJ1gAXzPHFvOYm5MTP5hfmEPX5WeqP/XMj1hy1ray4iYsLa/w1DPyKzPpeoN5Sd6VrOfCQq6rPTcSrK+aYIipLC2vSEnWLFfKLCwtSLDoauqNBl/7xmPSc3QU9lAslfjaNx6jbsIxrIWlBcoSCkxWKlUnviSvqz03EqzvAo46dNRoNJhfMH44FGB+cc6U2la53Drf/M4TKp7lcHRd55vffoKcCVVmq9Uq84tyWsfNLyw57VzrKkJ7tuVGglUB/k66OSazIOkG1et1ZubNaSwxNT3H6afl7ygprOP00z9kSmJT1K3MzE9L6cLUaDRYkPQCt5AvIbRnW24kWAB/JdUUC6hWa8zNy7lJqZVlqe3AtvKj51/m5VdUfpYTefmVc/zo+W1jwobJF/KkJB3Gn19YcloqA9xEc24mWI8Bjso2A5idnZfWJ3Bi6oppy7fHn3yayxOO2oxtey5PTPH4k+bUudR1nYmpy1LGajQazM7Kj8OaTAqhOdflZoJVA/5WmjkWUa3WpO2MFIoFafGEa9F1nW986wnp2dEKc5idW+Ab3zIv/riwNE+hKKcT8/z8khOrhfwdN2nofDPBAvgbObZYy+zcIrWaHC9rfnGOkoR8mO2o1Wp85WvfYXHJcYl9bcXi0jJf/YfvSjnTtx2lcok5SWkM9XqdmVn5eWEW8Nc3+4GdCNbjgON8y1qtxqykm9ZoNLgyOW7am7VSqfDlr37bidvPbcHS8gpf/uq3pWeyb6LrOlcmx6Xt5s3MLjgxdrUEfO9mP7QTwaoDXzBsjg3Mzi1K61iynl83bWkIojHA333lG9LSMhRymF9Y4u++8g1KErsrveEai3NSOuGA6NzkwNgVwBcRWnNDdiJYAJ8DHJc41Gg0uDIhLzVhbmFW2sTajnK5wpe++k1Tjnkods/M7Dxf+uo3pbbpupb1/Lq0pSDAlYlpp+VdbfL5nfzQTgXrEmJp6DhSqbS0lty6rnN58pK0HcjtqFZrfOXvv8U51XnHVs5dGOfLX/2WqUurer3O5clL0kIN2WzOaSWQN/kBsKN+aO54d/9OB60Cj+7VIjvJF4r09XVLGater1Mql0h0dkkZbzt0XWf88iSapjGwr8+06yi25wfPvcATTz5j+mmEy5PjUj32s+fGnbgzCPBbbOnufCN2I1gXgE8BoT0aZRuVShWv10s0GpYyXqlUxOVyEY1EpYx3PWZmF1jNZNk/PIjbvVNnWLFXarUa3/7uk7z48lnTrzW/OMeSxD4C8/NLLDqvhAzAGvA/cYPs9q3sRrDqQD9w797sspdsdp2eni48breU8XLrOSLhCH5/QMp412MlvcrE5DRDQ/sIBPymXqudyaxlLYsfZnNrTExdkTZeuVLh7Dl5S0uL+Rzw5Z3+8G4EC2Aa+AVA26VRtqPrOqVime5ueUu5tewaiXgnHo9H2pjbUSiWOHdhnHhHjEQibuq12pFL4xN89R++Qy5nflXYcrnEhfELNBry4qAXLlyWUgvOBnSEd7Vj13C3grUMvBUY3Z1dzUGxVCIYDBIOB6WM12g0yGTX6OrswuWS47ldj3q9zsXxCXK5PIOD/bgleYrtTKVa5XtPPMX3n/mhqRspm9RqVc5dOke1Km/XMZVKO3lX+VvA7+7mF3YrWCBE65/s9peahWx2nd6epLSYUL1eYz2fI5noRtPMdzyXU2kujl8h2ZUgFouYfr1WZWZ2ga987duWZYTrus6F8fMUJR29AbGj/OrZi05NYwD4X4BdbYfvRbAuAx8B5Gy7WUyj0aBUKtOdTEgbs1KtUCqX6OzotES0yuUKZ89fYj1fYKC/D49HeVs7pVyu8MSpp/nvp54xNb9qK5uZ7GvZjNRxL1y87OTmJueBX97tL+1FsED0vP/gXn6xGSgWS/j9fiIReRuexVKRarVKvKNT2pg3Y3l5hXPnxwn4/SSTCUvE0qnous7Zc5f4h298j9k5azPBJ6cnpPe8XFxMOfW84Ca/Buy6KJw2cuzOvVzMB0wgdg0didvt4vbbThAMyt3l6+3uY3hwv9Qxd3TdniQPPnAvfb2OdHxNZWFxmSeefMaWA+ZTM5MsLssVyGKxxAsvnqFed+xScB4YYYepDFvZq4dVR+wUvmcvv9wM6LpOLrtOT09SqmeSL6yj6zqxaIe0MXd03XyBM2cvsLS8QldnnFBIzsaCk0ml0jz2+Pc59dSz5PPyYkc7ZWZumgUJTVC30mg0ePXVC5YtZ03iXyI6zO+avXpYAFFEPCu51wGagd7eJGOjB6SP29+7j8F9Q9LH3Smjh0a4+823SY3VOYXlVJrnfvgiF8cnbLNhZm7alMPyFy9dYXHRcTU1t5ICDgJ7Oi+3Vw8LXnfn3r3XAZqBfL6Az+cjEpGTBb/Jej5HvV6nIxaXOu5OSa9meOXMeebmlwgGAsTjMVvssJLJqVm+98RTnH7qOdKrGdvsmJqZlO5ZASwsLDNtUh15C/ktdlBG5noY8bBAHNO5DPQaGcRuNE3jTbcek3Z0ZyvJRJKR4YO2B8Q74x2cODbGsaNj0uN2dlIsljh77iJnzl5kNbNmqy2bJY5lB9gBcrk8L7181qnZ7JssIryrPa/PjXhYIA5EV4D3GRmkGcisrtEjMT9rk0KxQD6/TjzeiUuz7zxgqVRmamaOF156ldTKKmgaHbEILpfzzijWajXGr0zxzLPP89jj32dyepZSybx6VTuh3qhz6coFVjPyO+NVqzVeeeU8NQuSW03mXwCnjAxg1MMCCCDKzwwYHchuotEwt95y1JSHOBgMcfjQEXxen/Sx94rX6+HA/iEOHtjP/uEB/P7mse1ayuUKk1OzXL4yyZXJ6aaqqFmpVrg4fl5aPfatNBoNXn7lnCXHhkxmFnFCxlCtcRmCBfDzwB/JGMhuEok4x46OmrKE83p9HD54mFBI/tLTKJqm0dfbzdDgPvr7eujv68bns0/AqtUaC4vLzM4tMD0zx8LiclMuhwrFPBfGL0g9brPJZu5YOp2RPrYNfAr4Y6ODyBIsH3AWsT51PPv6ezl4cNiUsV0uF/sHR0h2NXe+lKZpJBJxerqTJLs6SXZ10pXoNCVdolAospJeJbUiPsupFVZWVptSoLaSSqeYnL5i2tGYy1empHV/spnLwDH2kHd1LbIEC8RxHcc1Xr0ehw7up7+/x7Txe5I9DA/uR7MxrrUXPB43sWiUWCxCOBwiGAgQCPgJBvx4vF4A/D4vmqah6zrljYJytWqVYqlMqVSmWCqRzxfIZtfJ5nLSuhtZha43mJqZYillnpjMzy8xfnnStPEt5ieRpA0yBUtDBNTukzWg3YyNHaC3x7w0s3A4wqH9o/j9qs6VUyiXy1yevGRqbf/FpRQXL8qrl2UzTwH3I6knhNFdwms5A3wSB9bL2o7V1TVCwYBpWePVaoVUehmv10co6LhCrm1HKp3i0pULlE3soJNKpVtJrHTgo4g6elKQLVizwAHgdpmD2slKOkMkHDItd0nXdTJrq5TKJWLRmCPTDFqdWr3GlanLzC/MmhpXS6cznDtvXv9LG/gi8B9kDihbsACeBn4WaJl1zko6QyQSNjXhslgqspJewe/zEwyoc4DNwmomzcXLF8ibuAQU11nj3LmWEqss8OOA1D+cGYK1jkgodezB6GvRdZ1UKk04FDT1UHGjUSedSVMsFYhGoqqqqI1UqxWuTI0ztzArtZzxdqysrDq5Jvv1+HXg27IHNUOwAJ5FqGtL9ahaWVklGPATDpsbbyqVSiyvLON2uQmFwrYf62kndF1nObXEpSsXTUkEvZbl5RXOX7jcamL1EiKWLT3fwyzBagAvIArMt9TTtrKyasph6WvRdZ21bIbVTBq/30/A5O48CljLZrh05SKpdMoSAVlYWObS+ESriVUD+AnAlJwMswQLYAZxKPpusy5gF+nVjDiL12FuX0IQ5+ZWVlfIF/KEQmG8Hq/p12w3iqUiVyYvM7cwS61mzZGfqek5rkxI2zxrJv4jEjLar4fMPKztiAKvAoNmXsQuenqSjI2OWLpk60okGegbML0fYjtQLpeYXZhlxYTqCtdD13UuXppgacnRNa2uxwxwC6I5qimY6WGBSMU/B/xjMy9iF/l8gVx2nUQiblk6QrFYYCm1RLlcIuAP4PUqj2u3FEtFZmanmJiesCROtUmtVuPs2UuspOVXdGgSfhJ4xcwLmC1YICo5jNBCuVlbKZXLpNNrxOMxvF5zG6pupbAhXPnCOl6vV3lcOyCbW2NyZoLp2SlLhQpE3a4zr14g59wuNzfjz4HfNvsiZi8JN+lABOFHrLiYHbjdbg4fPkiXTZ2ZQ8EQPcleuhLmN3V1Eo1GnZX0CkupRctFapOVdIYLFy5b0qzVJiaAO4CM2ReySrAATgKPAy39NA0N9jM8PGBbKoLL5aars4vurm7C4fZttJrPr7O8sszK6orpeVTXQ9d1pqZmndyZeSfUgbdjsDDfTrFiSbjJFEKsHrTqgnaQza6Ty63T2dlhS+KnrusUinmWV5ZJr65Qq9Xwer1tsbtYLBVZWl5kcmaC+cU5CsW8bSkD1WqVs+cusbS0Ysv1LeTfAF+w6mJWelgAHoQS32PlRe3A6/VyeOwAnZ3Wtvu6HsFAkM54gnhHJ+EmLCC4V/KFPJm1VVYzaYqlot3mAOLQ/IWLV6hWq3abYjbPIFZOlpV/tVqwQBT5ewGR8tDy9Pf3cGBkqKkONXu9XmKRDmKxDqLhqKPK25TLZXL5HNncGtncWlOJQqPR4MrENPPzS3abYgU54E7Epppl2CFYAB/HQjfSbkKhIIfHDhKJNGcJGa/XSyQcJRqOEg6FCQZDTXGOsV6vUywWyBfy5PI51vO5phKorayvF7hw8TKFQnN4eRbwCWx4hu0SLIDPIc4btQWaprFvXy/7hweaytu6Hn6fn2AwRDAQxO/34/eJj8/nl7qhoOs6lUqZ8uanXKZYKlIsFihX7O2EsxMajQaTU7PMzS222hGbG/Fn2PTs2ilYfkQ86y67DLCDQMDP6KERRzc29Xq9eNwePB4vHo8Hj9uD2+1+Tci2emeNRgNd19F1nXq9Tq1eo1arUatVqdVrTesx7YRMJsul8QnbW4xZzHOIuJUt/9N2ChbAEPBDoLk7MphAT0+Skf2D+Hytv3vXalQqVSYmZ1r1eM2NWEY4GFN2GWBlWsN2ZIEfIY7uNP86SSL5fIGFRRGcjUZUCRkn0GjozMzOc/78OOutm7F+PeqIKgzP22mE3YIFcAXRXPHddhtiNbqus7aWYzmVxu/3mVocUGEMUWTvoiPaj5nEP0eUPLaVZhAsgO8DJ4DjdhtiB7VanVQqzWomS8DvJxBwTppBq5PJZLlw4TKzcwuOa0cmkf8GfNZuI8D+GNZWQsBjtEFS6c3oiEXZv3+AWKwtUtWakmw2x+TULGtrObtNsZtngIcAew5iXkMzCRbAPsQfqCXrZ+2WeDzG4EC/o3cUnUYmk2Vmdp5MJmu3Kc3ADMKBmLPbkE2aTbAAbgWeRFR4UADhcIiBgT66kwkVnDcBUcc9zezsAvl8UzgSzcAa8ADwst2GbKUZBQuEC/p1wGe3Ic2Ez+dlX38vvb1JVbhPAtVqlcXFFPPzS5QrFbvNaSYqwPsQIZqmolkFC0SqwxdpsSYWMtA0ja5EnN7e7qY5XO0kVjNrLC4ss5LOtOuO343QgY8Bf2G3IdthXYnM3fMXQBL4PZvtaDp0XSe1skpqZRW/30dvbzfJrk6VFnEDCsUiqdQqi4vLlMvKm7oBv0yTihU0t4e1yW8B/6fdRjiBcChIMpkgmUyY2qXaKRSLJVIraVLLafLtcyjZCP+SJn/WnCBYAL8PfNpuI5xEKBQkkYjT2dlBLBppi2C9rutkc+usrq6RTmfaqXKCDP7g5P13f+bU6WfttuOGNPOScCu/hDgs/XM22+EYCoUihUKRmZl5PG438XiMeLyDWCzSUkvHQrFIdm2dTGaNTCZLrXXrppvJ/4t4xpoeRwjWyfvv1k+dfvZTgBfRTVqxC2r1+msxLwCPx0MsGiEaCxOLRQmHQ3iaoP7VzajV6+TzBVGGOrtONrduWePTFubPgJ8/ef/djth9cIRgwWui9bOIcqw/a7c9TqZWq5FezYgO1hsE/H5C4SDhUJBwOEQwGMAf8NsiZLV6nXKpTLFYIp8vkC8UKeSLlMptVcbFCv4E+JRTxAocJFgAJ++/u37q9LM/jzgm8Es2m9NSlMrljR6Lmav+3ePxEPD7CAT8+P0+PF4vXo8Hr9eDZ+Ory+Xa+Giv/c4mmx5Qo6HTaDRoNBpUq6ImVrVao1qrUatWKZcrlEplSuWK8pqs4feAX3aSWIHDBAuEpwV89tTpZ/PAr9ttT6tTq9VYr9VYVxngrcS/Pnn/3f/CbiP2glN2Ca/H/wb8X3YboVA4iH+Og5+ZZikvs1dOAynEMYLW37dXKPaODvwi8Lt2G2KEVqjy+YeIYzwqIqtQbE8Z8Yz8od2GGKUVBAvgL4F3AWm7DVEomow0oprvX9ptiAxaRbBAdOC5Fxi32xCFokkYB96KKNfUErSSYAFcRIjWU3YbolDYzFOIZ+GC3YbIpNUEC0QQ/iHgb+w2RKGwib9BPAMt14esFQULRBeejwL/O6I9kULRDtQRaQsfRTwDLUerChaIbdz/G3gY0QBSoWhlUsB7ETlWjspe3w2tLFibfBfRrba562YoFHvnOeDNwHfsNsRs2kGwQLTWfhvwp3YbolBI5k8RzSJsax9vJe0iWCDW9D8NfAJo+2ZzCseTA/4pYk63ZLxqO9pJsDb5AnAHov+hQuFEfgDcCfy5zXZYTjsKFoiEupPAv0LtIiqcQx0xZ+8HLtlsiy20q2CBKAT4fwAPApM226JQ3IxJ4O2IOdu2BcPaWbA2OQ3cBnyeFt4OVjgWHbH0uw1x/KytUYIlWEPUin83cNlmWxSKTS4D70EE19dstqUpUIJ1Nd8FbgF+mzZ2uxW2U0PMwVtog9yq3aAE640UgV8F7gGet9kWRfvxPGLu/SpiLiq2oATr+vwIeAvwK6i8LYX55BBz7S2IuafYBiVYN6YG/A5wBPgiKiivkI+OmFtHEHNNhSJugBKsnTEPfBy4D3jaZlsUrcPTiDn1ccQcU9wEJVi7Y3OC/Y+oyqaKvXMZMYfUC3CXKMHaPTqiPvZx4BeAGXvNUTiIGcScOYaYQyrEsEuUYO2dCvBHwBjwGWDBXnMUTcwColP5GGLOVGy1xsEowTJOCfgD4BBiK7rlytIq9kwK+F8Rc+P3aaOqCmahBEseBUSy3wGEcE3ba47CRqYRc+AA8O8Qc0MhASVY8llHCNch4J8AP7TXHIWFPA98DHHvfxsxFxQSUYJlHlXgLxDlmR8CvoYKsrYiOuLePoSoUfWfEfdeYQJKsKzhe8CPASeA30N1qG4F0oi41AnEvf2evea0B9rIsTvttqEd8QOPIsrbvh3QbLVGsVN04HHgc8DfAmVbrWlDlGDZzyhCuH4K6LPZFsX2LCBKa3+ONq302SwowWoe3MC7gH8EfBiI2WtO25MFvgT8F0SJF1VKuwlQgtWcBBENYB9FxEfitlrTPmSAv0cs976JKu/SdCjBan58iB2o9yM6+47aa07LcQn4BmKn7zFUFnpTowTLeYwihOt9iIB9yFZrnEcBETj/OkKoVEzKQSjBcjYBRNffk4iT//cCEVstaj5yiB6U30c0cXgSdUTGsSjBai08iO4q9218HgAGbLXIemYRovT9jc+LqKJ4LYMSrNanG3jTxueWja8nEIF9J1MEzgAvAa9sfH0JWLbTKIW5KMFqT9yIWNhxYGTjc2DL12ZZVuYRxe4mgCsbXyeAVxGxJ5Vq0GZ47DZAYQt14PzGZzu6gf1AD5AEurZ8uje+RoEwYhcToHPjq5/XNwIKvJ4NvrrxtYIQohywgvCIVrZ8UsASotOx8pYUV/H/AzJBpmxi5SVvAAAAAElFTkSuQmCC";
function Io(n, t) {
  const e = No();
  return Io = function(r, o) {
    return r = r - 117, e[r];
  }, Io(n, t);
}
const ci = Io;
(function(n, t) {
  const e = Io, r = n();
  for (; ; )
    try {
      if (-parseInt(e(119)) / 1 + parseInt(e(127)) / 2 * (-parseInt(e(117)) / 3) + parseInt(e(123)) / 4 * (parseInt(e(125)) / 5) + -parseInt(e(121)) / 6 * (parseInt(e(118)) / 7) + parseInt(e(126)) / 8 + -parseInt(e(122)) / 9 * (-parseInt(e(124)) / 10) + parseInt(e(129)) / 11 * (parseInt(e(128)) / 12) === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(No, 424234);
function No() {
  const n = ["678136VCAiPO", "img", "6tSGoFj", "514863WrToEh", "16396iqtUtY", "20UUILhb", "655vtHxpp", "4743960LzNAoT", "587320ziNJoo", "11364gDmWRx", "14663NetOty", "div", "6qQLKmq", "5719273VKquDN"];
  return No = function() {
    return n;
  }, No();
}
const pv = At[ci(130)]`
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
`, Vt = At[ci(130)]`
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
`, Ht = At.p`
  height: 5px;
  margin-top: 2px;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
`, mv = At[ci(120)]`
  position: absolute;
  backdrop-filter: blur(46px);
  border-radius: 50%;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.723);
  top: 50%;
  right: 5%;
`, gv = At[ci(130)]`
  user-select: none;
  transition: opacity 0.6s ease;
  z-index: 3;
  opacity: 0.3;
`;
function Un(n, t) {
  const e = jo();
  return Un = function(r, o) {
    return r = r - 290, e[r];
  }, Un(n, t);
}
(function(n, t) {
  const e = Un, r = n();
  for (; ; )
    try {
      if (parseInt(e(293)) / 1 + -parseInt(e(308)) / 2 * (-parseInt(e(322)) / 3) + parseInt(e(309)) / 4 + -parseInt(e(310)) / 5 + -parseInt(e(327)) / 6 + -parseInt(e(326)) / 7 + parseInt(e(292)) / 8 === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(jo, 907682);
function jo() {
  const n = ["FullScreen", "msExitFull", "mozRequest", "msFullscre", "requestFul", "Element", "screenElem", "enElement", "267459cEJclA", "ullscreen", "mozFullScr", "tor", "10871462kVFWxc", "1578864PcnABg", "exitFullsc", "ullScreen", "ent", "458232pDZxxD", "689692WEsKyl", "querySelec", "lscreen", "oscqW", "een", "mozCancelF", "webkitRequ", "msRequestF", "#screen_", "screen", "eenElement", "webkitFull", "Fullscreen", "webkitExit", "fullscreen", "22YZVFjM", "6748656RcXYgi", "3454630OABCqi", "reen", "KydJL", "estFullscr"];
  return jo = function() {
    return n;
  }, jo();
}
const Gc = () => {
  const n = Un;
  return document[n(307) + n(319)] || document[n(324) + n(303)] || document[n(304) + n(320) + n(291)] || document[n(317) + n(321)];
}, vv = (n) => {
  const t = Un, e = document[t(294) + t(325)](t(301) + n);
  e[t(318) + t(295)] ? t(296) === t(296) ? e[t(318) + t(295)]() : _0x59941d[t(300) + t(323)]() : e[t(316) + t(314)] ? e[t(316) + t(314)]() : e[t(299) + t(313) + t(297)] ? t(312) !== t(312) ? _0x9596dc[t(318) + t(295)]() : e[t(299) + t(313) + t(297)]() : e[t(300) + t(323)] && e[t(300) + t(323)]();
}, yv = () => {
  const n = Un;
  document[n(328) + n(311)] ? document[n(328) + n(311)]() : document[n(298) + n(290)] ? document[n(298) + n(290)]() : document[n(306) + n(305)] ? document[n(306) + n(305)]() : document[n(315) + n(302)] && document[n(315) + n(302)]();
};
(function(n, t) {
  const e = wr, r = n();
  for (; ; )
    try {
      if (parseInt(e(319)) / 1 + -parseInt(e(176)) / 2 + parseInt(e(297)) / 3 + -parseInt(e(368)) / 4 + -parseInt(e(401)) / 5 * (-parseInt(e(279)) / 6) + parseInt(e(426)) / 7 + parseInt(e(226)) / 8 * (-parseInt(e(411)) / 9) === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Lo, 768196);
function Lo() {
  const n = ["max", "M20 2H10c-", "ixRkH", "children", "Sync", "EqSxI", "volume", "-2-5zM4 17", " 5.999-9S1", " 2v13c0 1.", "69-.823l-1", "uBXOy", " 3.999 4.0", "move", "48 3.832a1", "6l3.612-4.", "9.527 4.54", "0a.999.999", "assistive_", "Recents", "stener", "2518734SAbHjS", "landscape", ".614 16 19", "M10 4H8v4H", "2 2h10c1.1", "forEach", ".832L6.697", "2 2h7c0 1.", "7 16 3v2c2", ".103.897 2", " 2v10c0 1.", "7 2-2V4c0-", "showMenu", "H4zm16-6h-", ".225-1.1 2", "taskId", "width", "xnfOj", "3705714Chfdmr", "Home", "Paste", "xvWPT", "Zgubz", "SPNqT", "m4.431 12.", "7-2-2-2h-3", "mozfullscr", "touchend", "isDown", "-1-1H8a1 1", "8v12.264l-", ".024l-14-1", "touch_clas", "home", "0 0 24 24", "enchange", "http://www", "7h7l.001 7", "0 0-1.554-", "59 15.016 ", "361915lNBteI", "sOreo", ".004 1.004", "XACZt", ".897-2-2-2", "13%", "opacity", "75.931l2 1", "6a1 1 0 0 ", ".w3.org/20", "sync", "1.003 0 0 ", " 0 0 0 1.0", "V5h14v14z", "0V4a1 1 0 ", "rpIyQ", "zm0-6h-4V4", "h-2v6h6z", "get", " 0 0 1 1h1", " 0 0 0-1 1", "KzgNm", "103.897 2 ", "copy", " 15H4V9z", "oFUKh", "0 1-1V4a1 ", "webkitfull", "7zm11-5h-2", "paste", "1v16a1 1 0", "20px", ".002 16H6.", "2-.082-.03", "M6 12h6v2H", "mousemove", "5.46 1.701", "includes", "3 0-2 .897", ".089-1.218", "shortcut", " 0 0 0-1.5", "set", "33L12 5.86", "0 0 1.645z", "type", "clientY", "device_id", "clientX", "1334704sHgYUf", "674.31a1 1", "3 9a1.003 ", "3a.986.986", "061-.016.0", " 2 2zm0-8h", "grab", "00/svg", "017.082-.0", "Hide ID", "47 3.999 7", "VQjEW", "M20 3H4a1 ", "fill", "0 18V4h10l", "Back", "57-5.428 6", "345-5.236 ", "zM4 20V10h", "v2h8V5h3v6", "div", "gClientRec", "rgba(255, ", " 2-2v-7c0-", "0 1.767.51", "0v10z", "-2-2-2zm-9", "ault", "c1.103 0 2", "wlKER", "BLCEX", "0 0 0 14 2", "-1.103-.89", "5fJLHYE", "pageY", "back", "current", "0h2v-6H4v2", "93-.019a1.", "preventDef", "target", "JmAkw", "touch_", "9sMBGiW", "a1 1 0 0 0", "nnUjx", "1 0 0 0-1 ", " 7H4c-1.10", "h2.697l5.7", "msfullscre", "NxFqv", "WFCEq", "clipboard", "Volume", "2H4zm0 5h1", "4c0-1.103-", "v7h2zm5 14", "s-.775-3.9", "10236660lJTRQp", "12%", "touchstart", "Icon", "ZgWiW", "2-.116C7.0", "change", "M5 5h5V3H3", " 0 0 0-.57", "M20.978 13", "l10.283 7.", "HnbjR", "eegUl", "-.897 2-2V", "H6z", "H13z", "v5h-5v2h7z", "11.75", "4zm0 5h16v", "circle", "shortcutEv", "0 0 0 .38-", "0 0-.396-1", "m-2-4h2V3h", "action", "1.048z", "left", "data", "svg", "VyBwE", "closest", "now", "27.05A1 1 ", "data-id", "recents", "H5v-5H3v7h", "getAttribu", "RvWwG", "fullscreen", "focus", "10l.002 10", "Screen", "touch", "6v6h2v-4h4", "027 1.027 ", "-2-2-2zm-1", "M16.75 2h-", "Copy", "bMPVv", "top", ".897-2 2v4", "2 2h7c1.10", "-3.229 2-5", "3px", "2-2h-4V4h1", "M4 6h16v2H", "zIndex", "1.103-.897", "readText", "4.445-2.96", "H4c-1.103 ", "mouse", "removeEven", "eenchange", "1614606oSqvyo", "6zm0 4h6v2", "255, 255, ", ".21a1 1 0 ", "height", "Show ID", "uqfMF", "0 0 0 .782", ".257 5.127", "3 0 2-.897", "7a1 1 0 0 ", "path", "ent", "aUlZg", "mousedown", "WUWzr", "passive", "v2z", "M16 21c3.5", " 2v5H4V5h3", "-1.052-3.3", "-7v2h5z", "17-.056-.0", "getBoundin", "screenchan", ".015.057-.", "tListener", "vXhgA", "08 3.677L7", "HGxPV", "ilqEm", "03-.897-2-", "-.769zm-8.", "M20 11V5c0", "a.995.995 ", "cursor", "ZLApG", "6v2H4z", "4v2h6zM8 2", "addEventLi", " 1 0 0 0 1", "8.347l-3.0", "touchmove", "shortcutCo", " 0-2 .897-", ".116c.026-", "pageX", "0-2 .897-2", "XzUKe", " 2v16c0 1.", "12561176ScyhDa", "click", "03 0 2-.89", "right", "1zm-1 16H5", "10c-1.103 ", "-2 2v6c0 1", "822 13 9A1", "menu_", "27-1.547 5", "7.032 15 7", "7 2-2v-4h4", "uhpRo", "S18.387 17", ".387 1.386", "mouseup", ".999-4.909", "h4zm12-6h-", "3c.033 0 .", "h-5c-1.103", "assistive", "9 21V3a1 1", "75z", "1.103 0-2 ", "min", "1 0 0 0-1-", "4v-4c0-1.1", "4c-.025-.0", "M16 7v10c1", "416 3.377 ", " 0 0 0-.38", "2 2zm2 7v-"];
  return Lo = function() {
    return n;
  }, Lo();
}
function wr(n, t) {
  const e = Lo();
  return wr = function(r, o) {
    return r = r - 126, e[r];
  }, wr(n, t);
}
const bv = il((n, t) => {
  const e = wr, { displayId: r, isMobile: o, onSenData: i, status: s, imageRef: a, isShowDeviceId: c } = n, [l, f] = it(0), [d, u] = it(0), [v, g] = it(null), [p, h] = it(0), w = Ge(null), S = Ge(null), m = Ge(null), C = {};
  C[e(211)] = e(271), C[e(325)] = 0.3, C[e(168)] = 999;
  const [y, R] = it(C), T = {};
  T[e(168)] = 999, T[e(180)] = "", T[e(295)] = e(324);
  const [L, V] = it(T), X = {};
  X[e(168)] = 1e3;
  const [re, G] = it(X), z = Ge(null), [Y, U] = it(null), ee = Ge(null), Z = (N) => {
    const b = e;
    if (b(191) !== b(437)) {
      if (N[b(407) + b(395)](), s[b(337)][b(291)] == !0) return;
      const ve = Bt[N[b(364)]], Te = a[b(404)], Oe = m[b(404)], F = Te[b(199) + b(389) + "t"](), pe = Oe[b(199) + b(389) + "t"](), he = 3;
      let et, Ke;
      const ft = F[b(295)] - pe[b(295)], ln = F[b(180)] - pe[b(180)];
      if (N[b(364)][b(356)](b(154)))
        if (b(296) === b(419)) {
          const Re = { ..._0x15023b[b(337)] };
          Re[b(307)] = !1, _0x10cc0d[b(361)](Re);
        } else {
          const { touches: Re, changedTouches: Ve } = N, He = Re[0] ?? Ve[0];
          et = He[b(222)], Ke = He[b(402)];
        }
      else if (N[b(364)][b(356)](b(173)))
        if (b(206) !== b(418)) et = N[b(367)], Ke = N[b(365)];
        else {
          const Re = _0xda9cf2[b(143)]() - _0x115555;
          if (_0x4fa77a == _0x4f2860[b(190)] || Re < 100) {
            const Xe = {};
            Xe[b(291)] = !0, Xe[b(307)] = !1;
            const Nt = { ..._0x4ae3b5[b(337)], ...Xe };
            _0x1ed10c[b(361)](Nt);
          } else {
            const Xe = { ..._0x305b8f[b(337)] };
            Xe[b(307)] = !1, _0x27cb25[b(361)](Xe);
          }
          const Ve = _0x4dd4df[b(404)].x > _0x138fa8 / 2 ? _0x1fa9c6 - _0x6044a8 : _0xb6ba79, He = {};
          He[b(138)] = Ve + "px";
          const pt = { ..._0x51f35f, ...He };
          _0x3589d2(pt);
          const Ye = {};
          Ye[b(325)] = 0.3, Ye[b(211)] = b(271);
          const It = { ..._0x5b6a5d, ...Ye };
          _0x37fcc7(It);
        }
      if (ve == Bt[b(190)])
        if (b(224) === b(409)) _0x14266b[b(284)]((Re) => {
          const Ve = b;
          _0x162210[Ve(215) + Ve(278)](Re, _0x2b00a7);
        });
        else {
          s[b(361)]({ ...s[b(337)], isDown: !0 }), f(et - pe[b(138)]), u(Ke - pe[b(161)]);
          const Re = {};
          Re[b(325)] = 1, Re[b(211)] = b(374);
          const Ve = { ...y, ...Re };
          R(Ve), h(performance[b(143)]());
        }
      else if (ve == Bt[b(354)])
        if (b(334) === b(322)) _0x1ef7c6[b(215) + b(278)](_0x4e7eaf, _0x2077bf);
        else {
          if (s[b(337)][b(307)] == !1) return;
          let Re = et - l - F[b(138)], Ve = Ke - d - F[b(161)];
          Re = Math[b(258)](he, Math[b(250)](Re, ft) - he), Ve = Math[b(258)](he, Math[b(250)](Ve, ln) - he);
          const He = {};
          He[b(161)] = Ve + "px", He[b(138)] = Re + "px";
          const pt = { ...L, ...He };
          V(pt);
          const Ye = {};
          Ye.x = Re, Ye.y = Ve, ee[b(404)] = Ye;
        }
      else if (ve == Bt[b(241)]) {
        const Re = performance[b(143)]() - p;
        if (v == Bt[b(190)] || Re < 100)
          if (b(189) === b(160)) _0x1c3731[b(294)] = b(219) + "py";
          else {
            const Xe = {};
            Xe[b(291)] = !0, Xe[b(307)] = !1, s[b(361)]({ ...s[b(337)], ...Xe });
          }
        else s[b(361)]({ ...s[b(337)], isDown: !1 });
        const Ve = ee[b(404)].x > ft / 2 ? ft - he : he, He = {};
        He[b(138)] = Ve + "px";
        const pt = { ...L, ...He };
        V(pt);
        const Ye = {};
        Ye[b(325)] = 0.3, Ye[b(211)] = b(271);
        const It = { ...y, ...Ye };
        R(It);
      }
      g(ve), Oe[b(151)]();
    } else {
      const { touches: ve, changedTouches: Te } = _0xf4a5dd, Oe = ve[0] ?? Te[0];
      _0x14dd3f = Oe[b(222)], _0x2ca5c3 = Oe[b(402)];
    }
  }, J = async (N) => {
    const b = e;
    if (b(141) === b(141)) {
      N[b(407) + b(395)]();
      const ve = N[b(408)][b(142)](b(388))[b(148) + "te"](b(145));
      if (ve === b(150))
        b(397) !== b(302) ? Gc() ? b(205) === b(205) ? yv() : [b(354), b(190), b(241)][b(284)]((Oe) => {
          const F = b;
          _0x37fcd0[F(215) + F(278)](Oe, _0x369148);
        }) : vv(r) : [b(354), b(190), b(241)][b(284)]((Te) => {
          const Oe = b;
          _0x340236[Oe(174) + Oe(202)](Te, _0x3f1ad7);
        });
      else {
        const Te = {};
        Te[b(136)] = b(132) + b(188), Te[b(359)] = ve, Te[b(139)] = "";
        const Oe = Te;
        if (ve === b(348) && (Oe[b(139)] = await navigator[b(420)][b(170)]()), ve === b(342))
          if (b(320) !== b(320)) {
            const F = {};
            F[b(291)] = !0, F[b(307)] = !1;
            const pe = { ..._0x584ccb[b(337)], ...F };
            _0x17b119[b(361)](pe);
          } else Oe[b(294)] = b(219) + "py";
        i(Ds, Oe);
      }
      s[b(361)]({ ...s[b(337)], showMenu: !1 }), S[b(404)][b(151)]();
    } else {
      const ve = { ..._0x495a62 };
      ve[b(325)] = _0x514da5[b(337)][b(291)] ? 1 : 0, _0x123607(ve);
    }
  }, Q = (N) => {
    const b = e;
    if (b(379) !== b(379)) _0x55b273(_0x1ad1dc);
    else {
      const ve = Gc();
      i(dv, ve);
    }
  };
  st(() => {
    requestAnimationFrame(() => {
      const N = wr, b = { ...re };
      b[N(325)] = s[N(337)][N(291)] ? 1 : 0, G(b);
    });
  }, [s]), st(() => {
    const N = e;
    if (N(260) !== N(260)) _0x4bd2bd[N(215) + N(278)](N(227), _0x1b1e71);
    else {
      const b = a[N(404)], ve = [N(150) + N(432), N(346) + N(200) + "ge", N(305) + N(175), N(417) + N(314)];
      return b && ve[N(284)]((Te) => {
        const Oe = N;
        b[Oe(215) + Oe(278)](Te, Q);
      }), () => {
        const Te = N;
        b && b[Te(174) + Te(202)](Te(227), Q);
      };
    }
  }, []), st(() => {
    const N = e;
    if (N(430) !== N(430)) _0x446154(_0x382c7);
    else {
      const b = m[N(404)], ve = S[N(404)];
      if (ve && ve[N(215) + N(278)](N(227), J), b)
        if (N(212) !== N(238)) {
          const Te = {};
          Te[N(192)] = !1;
          const Oe = Te;
          return o ? N(149) !== N(149) ? _0x1ca6bf[N(174) + N(202)](_0x459b04, _0x1b9224) : (b[N(215) + N(278)](N(428), Z, Oe), b[N(215) + N(278)](N(218), Z, Oe), b[N(215) + N(278)](N(306), Z)) : [N(354), N(190), N(241)][N(284)]((F) => {
            const pe = N;
            b[pe(215) + pe(278)](F, Z);
          }), () => {
            const F = N;
            if (F(438) === F(203)) _0x277173 && _0x2bb820[F(174) + F(202)](F(227), _0x531e68);
            else if (ve && ve[F(174) + F(202)](F(227), J), b)
              if (F(269) === F(301)) {
                const pe = { ..._0xc8ad96[F(337)] };
                pe[F(307)] = !0, _0x30f4d7[F(361)](pe), _0x3be711(_0x5188fa - _0x2bfb49[F(138)]), _0x4563e9(_0x442d0b - _0x192f3d[F(161)]);
                const he = {};
                he[F(325)] = 1, he[F(211)] = F(374);
                const et = { ..._0x1879f2, ...he };
                _0x597fc2(et), _0x20fe54(_0x2dc334[F(143)]());
              } else if (o)
                if (F(344) !== F(344)) {
                  if (_0x6ba95b[F(337)][F(307)] == !1) return;
                  let pe = _0xe5f1f8 - _0x5d43da - _0x5cd04f[F(138)], he = _0xa673f5 - _0x236fb3 - _0x9ff809[F(161)];
                  pe = _0x9aa0a[F(258)](_0x19758e, _0x2bf700[F(250)](pe, _0x57b14e) - _0x359182), he = _0x1ae367[F(258)](_0x1cb979, _0xa4e047[F(250)](he, _0x47de63) - _0x2168af);
                  const et = {};
                  et[F(161)] = he + "px", et[F(138)] = pe + "px";
                  const Ke = { ..._0x198be0, ...et };
                  _0x1c7594(Ke);
                  const ft = {};
                  ft.x = pe, ft.y = he, _0x876667[F(404)] = ft;
                } else [F(428), F(218), F(306)][F(284)]((pe) => {
                  const he = F;
                  b[he(174) + he(202)](pe, Z);
                });
              else if (F(413) !== F(300)) [F(354), F(190), F(241)][F(284)]((pe) => {
                const he = F;
                he(182) !== he(340) ? b[he(174) + he(202)](pe, Z) : [he(428), he(218), he(306)][he(284)]((et) => {
                  const Ke = he;
                  _0x19635c[Ke(174) + Ke(202)](et, _0xce461f);
                });
              });
              else {
                const pe = {};
                pe[F(168)] = 999, pe[F(180)] = _0x1096fb[F(404)] == F(280) ? F(427) : null, pe[F(295)] = _0x4c9359[F(404)] != F(280) ? F(427) : null, pe[F(161)] = F(350), pe[F(229)] = F(165), _0x411c91(pe);
              }
          };
        } else _0x1e4a9d[N(174) + N(202)](_0x249c15, _0x30af5d);
    }
  }, [o, Z]);
  const se = () => {
    const N = e;
    if (N(263) !== N(398)) {
      const b = {};
      b[N(168)] = 999, b[N(180)] = z[N(404)] == N(280) ? N(427) : null, b[N(295)] = z[N(404)] != N(280) ? N(427) : null, b[N(161)] = N(350), b[N(229)] = N(165), V(b);
    } else _0x3e05e2(() => {
      const b = N, ve = { ..._0x7a8a37 };
      ve[b(325)] = _0xf29cd0[b(337)][b(291)] ? 1 : 0, _0x9c7953(ve);
    });
  };
  sl(t, () => ({ fixTouch: (N) => {
    const b = e;
    N && (z[b(404)] = N), se();
  }, setFullscreen: (N) => {
    U(N);
  } }));
  const oe = {};
  oe[e(381)] = e(390) + e(178) + "1)";
  const K = {};
  K.d = Y ? e(282) + e(214) + e(405) + e(243) + e(155) + e(335) + e(336) : e(433) + e(424) + e(147) + e(347) + e(128) + e(135) + e(197);
  const te = {};
  te[e(261)] = e(153);
  const xe = {};
  xe[e(381)] = e(390) + e(178) + "1)";
  const ue = {};
  ue.d = e(259) + e(249) + e(162) + e(172) + e(223) + e(289) + e(341) + e(283) + e(228) + e(237) + e(396) + e(439) + e(423) + e(323) + e(386) + e(152) + e(292) + e(252) + e(207) + e(166) + e(393);
  const ge = {};
  ge.d = e(353) + e(177) + e(126);
  const j = {};
  j[e(261)] = e(159);
  const I = {};
  I[e(381)] = e(390) + e(178) + "1)";
  const A = {};
  A.d = e(209) + e(400) + e(304) + e(412) + e(308) + e(339) + e(172) + e(223) + e(267) + e(341) + e(286) + e(341) + e(163) + e(185) + e(391) + e(169) + e(394) + e(195) + e(387) + e(245) + e(220) + e(257) + e(316) + e(127);
  const P = {};
  P[e(261)] = e(299);
  const E = {};
  E[e(381)] = e(390) + e(178) + "1)";
  const B = {};
  B.d = e(158) + e(231) + e(223) + e(225) + e(341) + e(283) + e(228) + e(290) + e(169) + e(157) + e(382) + e(351) + e(248);
  const fe = {};
  fe.cx = e(129), fe.cy = "18", fe.r = "1";
  const M = {};
  M[e(261)] = e(c ? 377 : 181);
  const Me = {};
  Me[e(381)] = e(390) + e(178) + "1)";
  const ke = {};
  ke.d = e(194) + e(235) + e(242) + e(266) + e(274) + e(287) + e(240) + e(270) + e(378) + e(239) + e(281) + e(193);
  const ht = {};
  ht.d = e(254) + e(293) + e(164) + e(425) + e(265) + e(416) + e(272) + e(321) + e(331) + e(144) + e(399) + e(333) + e(317) + e(285) + e(415) + e(357) + e(232) + e(288) + e(373) + e(244) + e(372) + e(406) + e(156) + e(133) + e(221) + e(201) + e(376) + e(362) + e(309) + e(171) + e(253) + e(198) + e(352) + e(371) + e(256) + e(431) + e(318) + e(236) + e(343);
  const kt = {};
  kt[e(261)] = e(421);
  const ut = {};
  ut[e(381)] = e(390) + e(178) + "1)";
  const Pt = {};
  Pt.d = e(435) + e(179) + e(134) + e(310) + e(275) + e(360) + e(326) + e(186) + e(392) + e(273) + e(255) + e(355) + e(196) + e(384) + e(358) + e(210) + e(183) + e(208) + e(369) + e(434) + e(217) + e(204) + e(184) + e(436) + e(385) + e(137);
  const De = {};
  De[e(261)] = e(262);
  const Ce = {};
  Ce[e(381)] = e(390) + e(178) + "1)";
  const Qe = {};
  Qe.d = e(167) + e(130) + e(422) + e(213);
  const bt = {};
  bt[e(261)] = e(277);
  const xt = {};
  xt[e(381)] = e(390) + e(178) + "1)";
  const on = {};
  on.d = e(380) + e(414) + e(349) + e(338) + e(327) + e(345) + e(251) + e(230) + e(332);
  const sn = {};
  sn[e(261)] = e(298);
  const Cn = {};
  Cn[e(381)] = e(390) + e(178) + "1)";
  const an = {};
  an.d = e(303) + e(233) + e(216) + e(247) + e(360) + e(268) + e(370) + e(330) + e(363);
  const cn = {};
  return cn[e(261)] = e(383), q.jsxs(q.Fragment, { children: [s[e(337)][e(291)] ? q.jsxs(pv, { id: e(276) + e(234) + r, style: re, ref: S, children: [q.jsxs(Vt, { "data-id": e(150), children: [q.jsx(e(140), { xmlns: e(315) + e(328) + e(375), width: "28", height: "28", viewBox: e(313), style: oe, children: q.jsx(e(187), K) }), q.jsx(Ht, te)] }), q.jsxs(Vt, { "data-id": e(342), children: [q.jsxs(e(140), { xmlns: e(315) + e(328) + e(375), width: "28", height: "28", viewBox: e(313), style: xe, children: [q.jsx(e(187), ue), q.jsx(e(187), ge)] }), q.jsx(Ht, j)] }), q.jsxs(Vt, { "data-id": e(348), children: [q.jsx(e(140), { xmlns: e(315) + e(328) + e(375), width: "28", height: "28", viewBox: e(313), style: I, children: q.jsx(e(187), A) }), q.jsx(Ht, P)] }), q.jsxs(Vt, { "data-id": e(366), children: [q.jsxs(e(140), { xmlns: e(315) + e(328) + e(375), width: "28", height: "28", viewBox: e(313), style: E, children: [q.jsx(e(187), B), q.jsx(e(131), fe)] }), q.jsx(Ht, M)] }), q.jsxs(Vt, { "data-id": e(264), children: [q.jsxs(e(140), { xmlns: e(315) + e(328) + e(375), width: "25", height: "25", viewBox: e(313), style: Me, children: [q.jsx(e(187), ke), q.jsx(e(187), ht)] }), q.jsx(Ht, kt)] }), q.jsxs(Vt, { "data-id": e(329), children: [q.jsx(e(140), { xmlns: e(315) + e(328) + e(375), width: "28", height: "28", viewBox: e(313), style: ut, children: q.jsx(e(187), Pt) }), q.jsx(Ht, De)] }), q.jsxs(Vt, { "data-id": e(146), children: [q.jsx(e(140), { xmlns: e(315) + e(328) + e(375), width: "28", height: "28", viewBox: e(313), style: Ce, children: q.jsx(e(187), Qe) }), q.jsx(Ht, bt)] }), q.jsxs(Vt, { "data-id": e(312), children: [q.jsx(e(140), { xmlns: e(315) + e(328) + e(375), width: "28", height: "28", viewBox: e(313), style: xt, children: q.jsx(e(187), on) }), q.jsx(Ht, sn)] }), q.jsxs(Vt, { "data-id": e(403), children: [q.jsx(e(140), { xmlns: e(315) + e(328) + e(375), width: "28", height: "28", viewBox: e(313), style: Cn, children: q.jsx(e(187), an) }), q.jsx(Ht, cn)] })] }) : null, q.jsx(gv, { id: e(276) + e(311) + "s_" + r, className: e(246), ref: w, style: y, children: q.jsx(mv, { style: L, src: xv, className: e(246), id: e(276) + e(410) + r, alt: e(429), ref: m, draggable: !1 }) })] });
}), Be = qn;
(function(n, t) {
  const e = qn, r = n();
  for (; ; )
    try {
      if (parseInt(e(351)) / 1 + -parseInt(e(408)) / 2 + parseInt(e(371)) / 3 + parseInt(e(357)) / 4 * (parseInt(e(335)) / 5) + parseInt(e(346)) / 6 * (parseInt(e(399)) / 7) + parseInt(e(405)) / 8 + -parseInt(e(343)) / 9 * (parseInt(e(348)) / 10) === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Mo, 903877);
function qn(n, t) {
  const e = Mo();
  return qn = function(r, o) {
    return r = r - 330, e[r];
  }, qn(n, t);
}
var Kc, Zc, Jc, Qc, el, tl, nl, rl, ol;
ol = Be(403) + Be(365), rl = Be(401) + "th", nl = Be(391) + Be(338), tl = Be(373), el = Be(369) + "ta", Qc = Be(362) + "er", Jc = Be(349), Zc = Be(354) + Be(368), Kc = Be(341);
class Sv {
  constructor(t, e, r, o) {
    jt(this, ol, (t) => {
      const e = Be;
      if (t) {
        const r = window[e(384) + "t"] + 10, o = this[e(401) + "th"](null, this[e(363)][e(344)], this[e(363)][e(350)], r, r);
        this[e(344)] = o[e(344)], this[e(350)] = o[e(350)];
      } else if (e(382) === e(404)) {
        let r;
        return _0x35fd3c && _0x4b8e95 > this[e(353)] && _0x4f07d0 > _0x138671 && (_0x1a59d2 = this[e(353)]), _0x30f925 && (r = _0x2ebb3e / _0x3da26c * _0x574188, r > _0x352a10 && (_0x294047 = _0x357847 / _0x20d8a1 * _0x49f040, r = _0x3be140 / _0x535c58 * _0x4a96c6)), { width: _0x5eaaf2[e(379)](_0x379b97), height: _0x301bce[e(379)](r) };
      } else this[e(344)] = this[e(363)][e(344)], this[e(350)] = this[e(363)][e(350)];
    });
    jt(this, rl, (t, e, r, o, i) => {
      const s = Be;
      let a;
      if (t && o > this[s(353)] && r > e && (i = this[s(353)]), i && (a = i / e * r, a > o)) {
        if (s(396) !== s(396))
          return (_0x180207[_0x54b369 + 4] & 31) === 5;
        i = o / r * e, a = o / e * e;
      }
      return { width: Math[s(379)](i), height: Math[s(379)](a) };
    });
    jt(this, nl, (t) => {
      const e = Be;
      this[e(390) + "n"] = t, this[e(381)] && (e(331) !== e(395) ? screen[e(390) + "n"][e(385)](t) : (this[e(386)] = _0x2ab544, this[e(353)] = _0x49ac8b, this[e(381)] = _0x3050c8, this[e(340) + "ct"] = _0x21cde0, this[e(376)] = _0x488456[e(374)]("2d"), this[e(347)] = this[e(362) + "er"](), this[e(378)] = null, this[e(336)] = null, this[e(337)] = null, this[e(344)] = null, this[e(350)] = null, this[e(363)] = null, this[e(390) + "n"] = e(330)));
    });
    jt(this, tl, (t, e) => {
      var a;
      const r = Be, o = this[r(381)] == !0 ? window[r(384) + "t"] - 12 : window[r(384) + "t"] - 50, i = this[r(401) + "th"](!0, t, e, o, o);
      this[r(344)] = i[r(344)], this[r(350)] = i[r(350)], !this[r(363)] && ((a = this[r(340) + "ct"]) == null || a.call(this, !0));
      const s = {};
      s[r(344)] = i[r(344)], s[r(350)] = i[r(350)], this[r(363)] = s;
    });
    jt(this, el, (t) => {
      const e = Be, r = t instanceof Uint8Array ? t : new Uint8Array(t);
      this[e(378)] = r;
    });
    jt(this, Qc, () => {
      const t = Be, e = new VideoDecoder({ output: async (o) => {
        const i = qn, s = await createImageBitmap(o);
        if ((!this[i(344)] || !this[i(350)]) && this[i(373)](o[i(355)], o[i(339) + "t"]), this[i(376)][i(392)](0, 0, this[i(344)], this[i(350)]), this[i(390) + "n"] == i(345)) {
          if (i(406) === i(406)) this[i(386)][i(344)] = this[i(350)], this[i(386)][i(350)] = this[i(344)], this[i(376)][i(387)](0, this[i(344)]), this[i(376)][i(383)](Math.PI / 2), this[i(376)][i(398)](-1, -1), this[i(376)][i(402)](s, 0, 0, this[i(344)], this[i(350)]);
          else if (_0x18d3d5[_0x46dbbc] === 0 && _0x177c49[_0x231273 + 1] === 0 && _0x1e68e5[_0xd5d03d + 2] === 0 && _0x17fcda[_0x26c3cd + 3] === 1)
            return (_0x151c7d[_0x2a1101 + 4] & 31) === 5;
        } else this[i(386)][i(344)] = this[i(344)], this[i(386)][i(350)] = this[i(350)], this[i(376)][i(402)](s, 0, 0, this[i(344)], this[i(350)]);
        s[i(333)](), o[i(333)]();
      }, error: (o) => console[t(388)](t(367) + t(334), o) }), r = {};
      return r[t(389)] = t(372) + "E", r[t(358) + t(352)] = t(370) + t(360), r[t(377) + t(394)] = !0, e[t(375)](r), e;
    });
    jt(this, Jc, (t) => {
      const e = Be;
      for (let r = 0; r <= t[e(400)] - 4; r++)
        if (t[r] === 0 && t[r + 1] === 0 && t[r + 2] === 0 && t[r + 3] === 1) {
          if (e(361) === e(361))
            return (t[r + 4] & 31) === 5;
          this[e(336)] = _0x53617b;
        }
      for (let r = 0; r <= t[e(400)] - 3; r++)
        if (e(356) === e(356)) {
          if (t[r] === 0 && t[r + 1] === 0 && t[r + 2] === 1) {
            if (e(364) === e(364))
              return (t[r + 3] & 31) === 5;
            if (_0x419b48) {
              const o = _0x56bdc5[e(384) + "t"] + 10, i = this[e(401) + "th"](null, this[e(363)][e(344)], this[e(363)][e(350)], o, o);
              this[e(344)] = i[e(344)], this[e(350)] = i[e(350)];
            } else this[e(344)] = this[e(363)][e(344)], this[e(350)] = this[e(363)][e(350)];
          }
        } else {
          const o = _0x2cc500[e(380)](_0x5f46aa)[e(393)](_0x3f652a[e(380)](_0x32777c));
          return new _0x50ed97(o);
        }
      return !1;
    });
    jt(this, Zc, (t, e) => {
      const r = Be, o = Array[r(380)](t)[r(393)](Array[r(380)](e));
      return new Uint8Array(o);
    });
    jt(this, Kc, (t) => {
      const e = Be;
      if (!this[e(347)] || this[e(347)][e(342)] == e(333) || !this[e(378)]) return;
      let r = t instanceof Uint8Array ? t : new Uint8Array(t);
      const o = this[e(349)](r);
      o && (this[e(336)] = r), this[e(336)] && this[e(378)] && (e(332) === e(407) ? (!this[e(337)] && (_0x2c01de = this[e(354) + e(368)](this[e(378)], this[e(336)]), this[e(337)] = !0), this[e(347)][e(341)](new _0x32dd4a({ timestamp: _0x36b272[e(366)]() * 1e3, type: _0x2c0947 ? e(359) : e(397), data: _0x581a3c }))) : (!this[e(337)] && (r = this[e(354) + e(368)](this[e(378)], this[e(336)]), this[e(337)] = !0), this[e(347)][e(341)](new EncodedVideoChunk({ timestamp: performance[e(366)]() * 1e3, type: e(o ? 359 : 397), data: r }))));
    });
    const i = qn;
    this[i(386)] = t, this[i(353)] = e, this[i(381)] = r, this[i(340) + "ct"] = o, this[i(376)] = t[i(374)]("2d"), this[i(347)] = this[i(362) + "er"](), this[i(378)] = null, this[i(336)] = null, this[i(337)] = null, this[i(344)] = null, this[i(350)] = null, this[i(363)] = null, this[i(390) + "n"] = i(330);
  }
}
function Mo() {
  const n = ["setOrienta", "clearRect", "concat", "rLatency", "WEpOO", "zESpg", "delta", "scale", "378ewOMiR", "length", "resizedWid", "drawImage", "setFullscr", "PjQhG", "7076024zfjtpd", "XOuFy", "cPGrC", "2272628xUCYfz", "portrait", "DqTWL", "GKoim", "close", "ror:", "10605ytiiYf", "iframe", "isPlay", "tion", "codedHeigh", "setIsConne", "decode", "state", "2029869kqAIyG", "width", "landscape", "72402lUWqRr", "decoder", "120jNqSwz", "isKeyFrame", "height", "413083gtHddy", "celeration", "maxWidth", "concatUint", "codedWidth", "lzTSr", "3156ImROIy", "hardwareAc", "key", "dware", "ytouS", "buildDecod", "rootSize", "jcdkG", "een", "now", "Decoder er", "8Arrays", "setVideoMe", "prefer-har", "3372030yssKqy", "avc1.64001", "autoResize", "getContext", "configure", "ctx", "optimizeFo", "videoMeta", "round", "from", "isMobile", "yIbWr", "rotate", "innerHeigh", "lock", "canvas", "translate", "error", "codec", "orientatio"];
  return Mo = function() {
    return n;
  }, Mo();
}
function Kt(n, t) {
  const e = Do();
  return Kt = function(r, o) {
    return r = r - 492, e[r];
  }, Kt(n, t);
}
(function(n, t) {
  const e = Kt, r = n();
  for (; ; )
    try {
      if (parseInt(e(541)) / 1 + parseInt(e(507)) / 2 * (-parseInt(e(526)) / 3) + -parseInt(e(587)) / 4 * (parseInt(e(613)) / 5) + parseInt(e(579)) / 6 + parseInt(e(618)) / 7 + -parseInt(e(621)) / 8 + parseInt(e(518)) / 9 === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Do, 273409);
function Do() {
  const n = ["decode", "data", "clipboard", "type_clien", "method", "290xRiJSx", "zVPnc", "password", "height", "enElement", "lsDGB", "taskId", "error", "aTlku", "get", "showMenu", "2592504hRAqIh", "setVideoMe", "writeText", "GesRY", "COPY_TEXT", "set", "addEventLi", "de: ", "5625sljFXt", "status", "type", "webkitFull", "shortcut", "setFullscr", "ojwPf", "JzaqW", "tabIndex", "removeEven", "map", "Element", "ent", "sync", "false", "228516ObOTIz", "orientatio", "Content-Ty", "OUFZQ", "xpKLT", "size", "children", "rQvMt", "zCJZb", "fixTouch", "screen", "UJaMP", "screenElem", "delete", "JUcpA", "SmIaE", "shortcutEv", "ZekNY", "connect", "screen_", "setOrienta", "meta", "CLVYl", "ucnNe", "passwd", "marginTop", "join_room", "screen_mai", "reconnecti", "device_id", "stener", "action", "qKJYm", "userAgent", "n/json", "value", "timeout", "onScreenEv", "1515690RPBTaD", "Timeout wa", "emit", "JhSLb", "length", "large", "post", "video_meta", "508YVBoso", "onSyncIFra", "eenElement", "msg", "ZoMkn", "lXQTM", "url", "applicatio", "Hjiwi", "msFullscre", "iframe", "hclev", "center", "mxByg", "fullscreen", "eBRJu", "UtUyS", "change", "connection", "message", "test", "isMobile", "middle", "control", "mozFullScr", "response", "6530whbwug", "uPZPv", "tListener", "code", " closed co", "224847lNBmoD", "een", "disconnect", "721296NDNpTo", "fXLQm", "isDown", "btVHT", "headers", "image_", "get_video_", "width", "draggable", "oSiau", "ror", "hMTyv", "iting for ", "text", "tion", "connect_er", "info", "dvZfz", "current"];
  return Do = function() {
    return n;
  }, Do();
}
const Wv = il((n, t) => {
  const e = Kt, { serve: r, dataDevice: o, maxWidth: i, showAssistive: s, showDeviceId: a, syncEvent: c, syncButton: l } = n, f = o[e(570)], d = /iPhone|iPad|iPod|Android/i[e(607)](navigator[e(574)]), u = e(610), v = Ge(null), g = Ge(null), p = Ge(null), [h, w] = it(null), [S, m] = it(null), C = {};
  C[e(517)] = !1, C[e(623)] = !1;
  const [y, R] = it(C), [T, L] = it(null), V = e(626) + f, X = e(560) + f, re = e(568) + "n_" + f, G = Ge(null), [z, Y] = it([]), U = Ge(null), ee = Ge(/* @__PURE__ */ new Map());
  st(() => {
    m(a);
  }, [a]);
  const Z = (j) => {
    const I = e;
    if (I(548) === I(548)) Y((A) => [...A, j]);
    else if (_0x34a860[I(527)] == !0) {
      _0x22fdb8[I(501)] = _0x3aaa74;
      const A = {};
      A[I(572)] = I(578) + I(538), _0x5c6b44[I(581)](I(606), A);
    } else {
      const A = {};
      A[I(590)] = _0x1681d2[I(590)], A[I(528)] = I(514), _0x2ea8ca(A);
    }
  }, J = (j) => {
    const I = e;
    if (I(545) === I(573)) {
      const A = {};
      A[I(572)] = I(559), A[I(505) + "t"] = _0x3dc1c5, A[I(570)] = _0x11b6a1[I(570)], A[I(608)] = _0x299d9d, A[I(565)] = _0x1fa4db[I(565)], _0x5a8aa4[I(581)](I(567), A);
    } else v[I(501)][I(581)](I(606), j), c == null || c(j);
  };
  sl(t, () => ({ api: async function(j, I = 5e3) {
    return new Promise((A, P) => {
      const E = Kt, B = setTimeout(() => {
        const fe = Kt;
        ee[fe(501)][fe(554)](j[fe(513)]);
        const M = {};
        M[fe(572)] = j[fe(572)], M[fe(513)] = j[fe(513)], M[fe(527)] = !1, M[fe(606)] = fe(580) + fe(495) + fe(612), P(M);
      }, I);
      ee[E(501)][E(523)](j[E(513)], (fe) => {
        const M = E;
        M(603) !== M(533) ? (clearTimeout(B), A(fe)) : _0x195bbf[M(501)][M(581)](M(606), _0x406627);
      }), v[E(501)][E(581)](E(606), j);
    });
  }, sync: function(j) {
    const I = e;
    v[I(501)][I(581)](I(606), j);
  }, getDeviceId: function() {
    return o[e(570)];
  } })), st(() => {
    const j = e;
    j(595) === j(624) ? _0x2729d4(_0xd1b346) : (async () => {
      const I = j;
      try {
        if (I(492) === I(532)) _0x5ab3ea[I(501)][I(581)](I(606), _0x2669dd), _0x2da53d == null || _0x2da53d(_0x1ece5d);
        else {
          const A = {};
          A[I(543) + "pe"] = I(594) + I(575);
          const P = {};
          P[I(570)] = o[I(570)], P[I(509)] = o[I(565)];
          const E = {};
          E[I(593)] = r, E[I(506)] = I(585), E[I(577)] = 1e4, E[I(625)] = A, E[I(503)] = P;
          const B = E, fe = await sv(B);
          w(fe[I(503)]);
        }
      } catch (A) {
        const P = {};
        P[I(590)] = A, P[I(528)] = I(514), Z(P);
      }
    })();
  }, []), st(() => {
    const j = e;
    if (v[j(501)] || !h) return;
    const I = {};
    I[j(569) + "on"] = !1;
    const A = no(h, I);
    return A.on(j(559), () => {
      const P = j;
      if (P(549) === P(549)) {
        const E = {};
        E[P(572)] = P(559), E[P(505) + "t"] = u, E[P(570)] = o[P(570)], E[P(608)] = d, E[P(565)] = o[P(565)], A[P(581)](P(567), E);
      } else _0x5deb78(_0x5d781c);
    }), A.on(j(567), (P) => {
      const E = j;
      if (P[E(527)] == !0)
        if (E(508) === E(622)) {
          const B = {};
          B[E(590)] = _0x1e5ea4[E(590)], B[E(528)] = E(514), _0x2ec6ca(B);
        } else {
          v[E(501)] = A;
          const B = {};
          B[E(572)] = E(578) + E(538), A[E(581)](E(606), B);
        }
      else {
        const B = {};
        B[E(590)] = P[E(590)], B[E(528)] = E(514), Z(B);
      }
    }), A.on(j(551), (P) => {
      const E = j;
      U[E(501)][E(502)](P);
    }), A.on(j(586), (P) => {
      const E = j;
      if (E(556) !== E(556)) _0x3b200e(_0x3496b2);
      else if (P) {
        if (U[E(501)][E(519) + "ta"](P), !U[E(501)][E(597)]) {
          const B = {};
          B[E(572)] = E(588) + "me", A[E(581)](E(606), B);
        }
      } else {
        const B = {};
        B[E(572)] = E(627) + E(562), A[E(581)](E(586), B);
      }
    }), A.on(j(606), (P) => {
      const E = j;
      if (E(494) === E(494)) {
        if ((P[E(572)] == E(522) || P[E(572)] == E(557) + E(538)) && P[E(496)][E(583)] > 0 ? navigator[E(504)][E(520)](P[E(496)]) : P[E(572)] == E(542) + "n" && (U[E(501)][E(561) + E(497)](P[E(576)]), G[E(501)][E(550)](P[E(576)])), P[E(513)])
          if (E(552) !== E(544)) {
            const B = ee[E(501)][E(516)](P[E(513)]);
            if (B)
              if (E(563) !== E(591)) B(P), ee[E(501)][E(554)](P[E(513)]);
              else {
                const fe = {};
                fe[E(572)] = E(588) + "me", _0x4053b6[E(581)](E(606), fe);
              }
          } else {
            const B = {};
            B[E(590)] = _0x1e319d, B[E(528)] = E(514), _0x5ae231(B);
          }
      } else if (_0x4a9837 === _0x52b0cf) {
        const B = { ..._0x52a116 };
        B[E(517)] = !1, _0x1df349(B);
      } else _0x3b0ffd(_0x21e5de);
    }), A.on(j(498) + j(493), (P) => {
      const E = j, B = {};
      B[E(590)] = P, B[E(528)] = E(514), Z(B);
    }), A.on(j(620), (P) => {
      const E = j, B = {};
      B[E(590)] = E(605) + E(617) + E(525) + P[E(616)], B[E(528)] = E(499), Z(B);
    }), () => {
      const P = j;
      if (A)
        if (P(521) === P(515)) {
          _0x19faa7[P(501)] = _0x168986;
          const E = {};
          E[P(572)] = P(578) + P(538), _0x16f052[P(581)](P(606), E);
        } else A[P(620)]();
    };
  }, [h]), st(() => {
    const j = e;
    if (j(600) === j(600)) {
      const I = p[j(501)];
      U[j(501)] = new Sv(I, i, d, L);
    } else
      _0x3ff06c === _0x8f2769 && _0x14508b[j(530)] === j(570) ? _0x1c37b3(!_0xb48df) : _0x3181bd === _0x11668e && _0x40821b[j(530)] === j(539) ? _0x441f34(_0x1226b7[j(570)]) : _0x3d95f0(_0x388d35);
  }, []), st(() => {
    const j = e, I = () => {
      const A = Kt;
      if (A(598) === A(598)) {
        const P = document[A(601) + A(537)] || document[A(529) + A(553) + A(538)] || document[A(611) + A(589)] || document[A(596) + A(511)];
        U[A(501)][A(531) + A(619)](!!P), G[A(501)][A(531) + A(619)](!!P), G[A(501)][A(550)]();
      } else {
        const P = _0x60bf3a(() => {
          const E = A;
          _0x24d9a9[E(501)][E(554)](_0x10be92[E(513)]);
          const B = {};
          B[E(572)] = _0x4bd97b[E(572)], B[E(513)] = _0x278ad9[E(513)], B[E(527)] = !1, B[E(606)] = E(580) + E(495) + E(612), _0x2f8d16(B);
        }, _0x5c2c02);
        _0x140f74[A(501)][A(523)](_0x1e6a37[A(513)], (E) => {
          _0x22716e(P), _0x402375(E);
        }), _0x3542e6[A(501)][A(581)](A(606), _0x5751e0);
      }
    };
    return document[j(524) + j(571)](j(601) + j(604), I), () => {
      const A = j;
      document[A(535) + A(615)](A(601) + A(604), I);
    };
  }, []);
  const Q = {};
  Q[e(547)] = o[e(570)];
  const se = {};
  se[e(546)] = e(584);
  const oe = {};
  oe[e(546)] = e(584);
  const K = {};
  K[e(546)] = e(584);
  const te = {};
  te[e(510)] = 0, te[e(628)] = 0;
  const xe = {};
  xe[e(516)] = y, xe[e(523)] = R;
  const ue = {};
  ue.id = V, ue[e(534)] = "0", ue[e(629)] = e(540);
  const ge = {};
  return ge[e(566)] = 5, q.jsxs(pd, { id: re, children: [S && q.jsx(yd, { children: q.jsx(vd, Q) }), z[e(583)] == 0 ? q.jsxs(q.Fragment, { children: [!T && q.jsxs(bf, { align: e(599), gap: e(609), children: [q.jsx(xr, se), q.jsx(xr, oe), q.jsx(xr, K)] }), q.jsxs(md, { ref: g, id: X, style: T ? {} : te, children: [s ? q.jsx(bv, { status: xe, ref: G, imageRef: p, displayId: f, isMobile: d, isShowDeviceId: S, onSenData: (j, I) => {
    const A = e;
    if (A(500) === A(500))
      if (j === Ds && I[A(530)] === A(570)) A(592) === A(602) ? _0x13f6a2(_0x5d2507[A(570)]) : m(!S);
      else if (j === Ds && I[A(530)] === A(539)) {
        if (A(582) !== A(555)) l(o[A(570)]);
        else if (_0x17cc63[A(501)][A(519) + "ta"](_0x15fad5), !_0x3c559b[A(501)][A(597)]) {
          const P = {};
          P[A(572)] = A(588) + "me", _0x549b51[A(581)](A(606), P);
        }
      } else J(I);
    else return new _0x1ffd77((P, E) => {
      const B = A, fe = _0x3ae260(() => {
        const M = Kt;
        _0x18d277[M(501)][M(554)](_0x1d3c81[M(513)]);
        const Me = {};
        Me[M(572)] = _0x243f48[M(572)], Me[M(513)] = _0x5a304d[M(513)], Me[M(527)] = !1, Me[M(606)] = M(580) + M(495) + M(612), E(Me);
      }, _0x353de1);
      _0x4ed06f[B(501)][B(523)](_0x47b6eb[B(513)], (M) => {
        _0x434d7c(fe), P(M);
      }), _0xb3a890[B(501)][B(581)](B(606), _0x1d1548);
    });
  } }) : null, q.jsx(hv, { canvasContent: ue, imageRef: p, isMobile: d, assistive: y, onImgEvent: (j, I) => {
    const A = e;
    if (A(614) === A(564)) {
      const P = _0x32701f[A(501)][A(516)](_0x77f77d[A(513)]);
      P && (P(_0x23cb1c), _0x1e17ba[A(501)][A(554)](_0x337cd3[A(513)]));
    } else if (j === Gf)
      if (A(512) === A(512)) {
        const P = { ...y };
        P[A(517)] = !1, R(P);
      } else {
        const P = {};
        P[A(590)] = A(605) + A(617) + A(525) + _0x30ab78[A(616)], P[A(528)] = A(499), _0x56f831(P);
      }
    else if (A(558) !== A(558)) {
      const P = {};
      P[A(572)] = A(627) + A(562), _0x759d5f[A(581)](A(586), P);
    } else J(I);
  } })] })] }) : z[e(536)]((j, I) => q.jsx(mf, { style: ge, message: j[e(590)], type: j[e(528)], showIcon: !0, closable: !0 }, I))] });
});
function Bo() {
  var n = ["162VjLkYt", "58029GpZqhj", "587360UIHtHP", "1482714LhnywD", "88Mxeiqk", "738900aqSxqW", "99IeEGLd", "835410xEjRxu", "210238EqcUuV", "133160WNzOQa"];
  return Bo = function() {
    return n;
  }, Bo();
}
(function(n, t) {
  for (var e = Bs, r = n(); ; )
    try {
      var o = -parseInt(e(394)) / 1 + parseInt(e(395)) / 2 + parseInt(e(396)) / 3 + parseInt(e(398)) / 4 + parseInt(e(392)) / 5 * (parseInt(e(393)) / 6) + parseInt(e(391)) / 7 * (-parseInt(e(397)) / 8) + -parseInt(e(389)) / 9 * (parseInt(e(390)) / 10);
      if (o === t) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Bo, 384353);
function Bs(n, t) {
  var e = Bo();
  return Bs = function(r, o) {
    r = r - 389;
    var i = e[r];
    return i;
  }, Bs(n, t);
}
export {
  Wv as ViewRP
};
