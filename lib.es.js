var Jf = Object.defineProperty;
var Qf = (t, n, e) => n in t ? Jf(t, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[n] = e;
var kt = (t, n, e) => Qf(t, typeof n != "symbol" ? n + "" : n, e);
import * as _ from "react";
import Fe, { useDebugValue as pa, createElement as e0, useRef as Xe, useContext as Zt, isValidElement as t0, version as n0, createContext as Fs, useLayoutEffect as r0, useEffect as ot, useState as rt, forwardRef as il, useImperativeHandle as sl } from "react";
import ma from "react-dom";
var cr = xo;
(function(t, n) {
  for (var e = xo, r = t(); ; )
    try {
      var o = parseInt(e(311)) / 1 * (parseInt(e(306)) / 2) + -parseInt(e(304)) / 3 + -parseInt(e(287)) / 4 + parseInt(e(300)) / 5 * (-parseInt(e(297)) / 6) + -parseInt(e(290)) / 7 + parseInt(e(294)) / 8 * (parseInt(e(286)) / 9) + -parseInt(e(308)) / 10 * (-parseInt(e(292)) / 11);
      if (o === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ho, 945564);
typeof globalThis !== cr(299) || typeof window !== cr(299) || (typeof global !== cr(299) ? global : cr(299));
function o0(t) {
  var n = cr;
  return t && t[n(293)] && Object[n(282)][n(307) + n(281)][n(302)](t, n(305)) ? t[n(305)] : t;
}
function ho() {
  var t = ["default", "34Peegug", "hasOwnProp", "10946710qszIIN", "forEach", "getOwnProp", "32359HPUKPe", "erty", "prototype", "construct", "defineProp", "apply", "9gmEJWr", "1479688GkLwsc", "constructo", "keys", "2726507VzNZDS", "ertyDescri", "11ROiZSU", "__esModule", "10180112TgwkGC", "function", "length", "78GzYlXW", "get", "undefined", "134630qFjBRY", "ptor", "call", "value", "2586789TnTNfC"];
  return ho = function() {
    return t;
  }, ho();
}
function xo(t, n) {
  var e = ho();
  return xo = function(r, o) {
    r = r - 281;
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
    var f, d = {}, l = null, y = null;
    u !== void 0 && (l = "" + u), c.key !== void 0 && (l = "" + c.key), c.ref !== void 0 && (y = c.ref);
    for (f in c) r.call(c, f) && !i.hasOwnProperty(f) && (d[f] = c[f]);
    if (a && a.defaultProps) for (f in c = a.defaultProps, c) d[f] === void 0 && (d[f] = c[f]);
    return { $$typeof: n, type: a, key: l, ref: y, props: d, _owner: o.current };
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
    var t = Fe, n = Symbol.for("react.element"), e = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), l = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), g = Symbol.iterator, p = "@@iterator";
    function h(x) {
      if (x === null || typeof x != "object")
        return null;
      var k = g && x[g] || x[p];
      return typeof k == "function" ? k : null;
    }
    var E = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(x) {
      {
        for (var k = arguments.length, L = new Array(k > 1 ? k - 1 : 0), G = 1; G < k; G++)
          L[G - 1] = arguments[G];
        m("error", x, L);
      }
    }
    function m(x, k, L) {
      {
        var G = E.ReactDebugCurrentFrame, me = G.getStackAddendum();
        me !== "" && (k += "%s", L = L.concat([me]));
        var be = L.map(function(le) {
          return String(le);
        });
        be.unshift("Warning: " + k), Function.prototype.apply.call(console[x], console, be);
      }
    }
    var C = !1, b = !1, R = !1, A = !1, N = !1, z;
    z = Symbol.for("react.module.reference");
    function Y(x) {
      return !!(typeof x == "string" || typeof x == "function" || x === r || x === i || N || x === o || x === u || x === f || A || x === y || C || b || R || typeof x == "object" && x !== null && (x.$$typeof === l || x.$$typeof === d || x.$$typeof === s || x.$$typeof === a || x.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      x.$$typeof === z || x.getModuleId !== void 0));
    }
    function ne(x, k, L) {
      var G = x.displayName;
      if (G)
        return G;
      var me = k.displayName || k.name || "";
      return me !== "" ? L + "(" + me + ")" : L;
    }
    function K(x) {
      return x.displayName || "Context";
    }
    function B(x) {
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
        case u:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case a:
            var k = x;
            return K(k) + ".Consumer";
          case s:
            var L = x;
            return K(L._context) + ".Provider";
          case c:
            return ne(x, x.render, "ForwardRef");
          case d:
            var G = x.displayName || null;
            return G !== null ? G : B(x.type) || "Memo";
          case l: {
            var me = x, be = me._payload, le = me._init;
            try {
              return B(le(be));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var H = Object.assign, X = 0, $, ee, Z, Q, oe, ie, J;
    function re() {
    }
    re.__reactDisabledLog = !0;
    function he() {
      {
        if (X === 0) {
          $ = console.log, ee = console.info, Z = console.warn, Q = console.error, oe = console.group, ie = console.groupCollapsed, J = console.groupEnd;
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
        X++;
      }
    }
    function fe() {
      {
        if (X--, X === 0) {
          var x = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: H({}, x, {
              value: $
            }),
            info: H({}, x, {
              value: ee
            }),
            warn: H({}, x, {
              value: Z
            }),
            error: H({}, x, {
              value: Q
            }),
            group: H({}, x, {
              value: oe
            }),
            groupCollapsed: H({}, x, {
              value: ie
            }),
            groupEnd: H({}, x, {
              value: J
            })
          });
        }
        X < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var xe = E.ReactCurrentDispatcher, ge;
    function j(x, k, L) {
      {
        if (ge === void 0)
          try {
            throw Error();
          } catch (me) {
            var G = me.stack.trim().match(/\n( *(at )?)/);
            ge = G && G[1] || "";
          }
        return `
` + ge + x;
      }
    }
    var M = !1, T;
    {
      var P = typeof WeakMap == "function" ? WeakMap : Map;
      T = new P();
    }
    function w(x, k) {
      if (!x || M)
        return "";
      {
        var L = T.get(x);
        if (L !== void 0)
          return L;
      }
      var G;
      M = !0;
      var me = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var be;
      be = xe.current, xe.current = null, he();
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
            } catch (nt) {
              G = nt;
            }
            Reflect.construct(x, [], le);
          } else {
            try {
              le.call();
            } catch (nt) {
              G = nt;
            }
            x.call(le.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (nt) {
            G = nt;
          }
          x();
        }
      } catch (nt) {
        if (nt && G && typeof nt.stack == "string") {
          for (var ae = nt.stack.split(`
`), Ze = G.stack.split(`
`), Pe = ae.length - 1, Ne = Ze.length - 1; Pe >= 1 && Ne >= 0 && ae[Pe] !== Ze[Ne]; )
            Ne--;
          for (; Pe >= 1 && Ne >= 0; Pe--, Ne--)
            if (ae[Pe] !== Ze[Ne]) {
              if (Pe !== 1 || Ne !== 1)
                do
                  if (Pe--, Ne--, Ne < 0 || ae[Pe] !== Ze[Ne]) {
                    var je = `
` + ae[Pe].replace(" at new ", " at ");
                    return x.displayName && je.includes("<anonymous>") && (je = je.replace("<anonymous>", x.displayName)), typeof x == "function" && T.set(x, je), je;
                  }
                while (Pe >= 1 && Ne >= 0);
              break;
            }
        }
      } finally {
        M = !1, xe.current = be, fe(), Error.prepareStackTrace = me;
      }
      var An = x ? x.displayName || x.name : "", cn = An ? j(An) : "";
      return typeof x == "function" && T.set(x, cn), cn;
    }
    function D(x, k, L) {
      return w(x, !1);
    }
    function F(x) {
      var k = x.prototype;
      return !!(k && k.isReactComponent);
    }
    function ue(x, k, L) {
      if (x == null)
        return "";
      if (typeof x == "function")
        return w(x, F(x));
      if (typeof x == "string")
        return j(x);
      switch (x) {
        case u:
          return j("Suspense");
        case f:
          return j("SuspenseList");
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case c:
            return D(x.render);
          case d:
            return ue(x.type, k, L);
          case l: {
            var G = x, me = G._payload, be = G._init;
            try {
              return ue(be(me), k, L);
            } catch {
            }
          }
        }
      return "";
    }
    var ve = Object.prototype.hasOwnProperty, Ce = {}, Je = E.ReactDebugCurrentFrame;
    function ct(x) {
      if (x) {
        var k = x._owner, L = ue(x.type, x._source, k ? k.type : null);
        Je.setExtraStackFrame(L);
      } else
        Je.setExtraStackFrame(null);
    }
    function Tt(x, k, L, G, me) {
      {
        var be = Function.call.bind(ve);
        for (var le in x)
          if (be(x, le)) {
            var ae = void 0;
            try {
              if (typeof x[le] != "function") {
                var Ze = Error((G || "React class") + ": " + L + " type `" + le + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof x[le] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ze.name = "Invariant Violation", Ze;
              }
              ae = x[le](k, le, G, L, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Pe) {
              ae = Pe;
            }
            ae && !(ae instanceof Error) && (ct(me), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", G || "React class", L, le, typeof ae), ct(null)), ae instanceof Error && !(ae.message in Ce) && (Ce[ae.message] = !0, ct(me), S("Failed %s type: %s", L, ae.message), ct(null));
          }
      }
    }
    var Le = Array.isArray;
    function Oe(x) {
      return Le(x);
    }
    function Ke(x) {
      {
        var k = typeof Symbol == "function" && Symbol.toStringTag, L = k && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return L;
      }
    }
    function mt(x) {
      try {
        return ft(x), !1;
      } catch {
        return !0;
      }
    }
    function ft(x) {
      return "" + x;
    }
    function tn(x) {
      if (mt(x))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke(x)), ft(x);
    }
    var nn = E.ReactCurrentOwner, _n = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, rn, I;
    function v(x) {
      if (ve.call(x, "ref")) {
        var k = Object.getOwnPropertyDescriptor(x, "ref").get;
        if (k && k.isReactWarning)
          return !1;
      }
      return x.ref !== void 0;
    }
    function pe(x) {
      if (ve.call(x, "key")) {
        var k = Object.getOwnPropertyDescriptor(x, "key").get;
        if (k && k.isReactWarning)
          return !1;
      }
      return x.key !== void 0;
    }
    function ye(x, k) {
      typeof x.ref == "string" && nn.current;
    }
    function Ae(x, k) {
      {
        var L = function() {
          rn || (rn = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", k));
        };
        L.isReactWarning = !0, Object.defineProperty(x, "key", {
          get: L,
          configurable: !0
        });
      }
    }
    function U(x, k) {
      {
        var L = function() {
          I || (I = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", k));
        };
        L.isReactWarning = !0, Object.defineProperty(x, "ref", {
          get: L,
          configurable: !0
        });
      }
    }
    var ke = function(x, k, L, G, me, be, le) {
      var ae = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: x,
        key: k,
        ref: L,
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
        value: G
      }), Object.defineProperty(ae, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: me
      }), Object.freeze && (Object.freeze(ae.props), Object.freeze(ae)), ae;
    };
    function Ye(x, k, L, G, me) {
      {
        var be, le = {}, ae = null, Ze = null;
        L !== void 0 && (tn(L), ae = "" + L), pe(k) && (tn(k.key), ae = "" + k.key), v(k) && (Ze = k.ref, ye(k, me));
        for (be in k)
          ve.call(k, be) && !_n.hasOwnProperty(be) && (le[be] = k[be]);
        if (x && x.defaultProps) {
          var Pe = x.defaultProps;
          for (be in Pe)
            le[be] === void 0 && (le[be] = Pe[be]);
        }
        if (ae || Ze) {
          var Ne = typeof x == "function" ? x.displayName || x.name || "Unknown" : x;
          ae && Ae(le, Ne), Ze && U(le, Ne);
        }
        return ke(x, ae, Ze, me, G, nn.current, le);
      }
    }
    var Ot = E.ReactCurrentOwner, Dt = E.ReactDebugCurrentFrame;
    function lt(x) {
      if (x) {
        var k = x._owner, L = ue(x.type, x._source, k ? k.type : null);
        Dt.setExtraStackFrame(L);
      } else
        Dt.setExtraStackFrame(null);
    }
    var on;
    on = !1;
    function sn(x) {
      return typeof x == "object" && x !== null && x.$$typeof === n;
    }
    function ze() {
      {
        if (Ot.current) {
          var x = B(Ot.current.type);
          if (x)
            return `

Check the render method of \`` + x + "`.";
        }
        return "";
      }
    }
    function qe(x) {
      return "";
    }
    var tt = {};
    function Rt(x) {
      {
        var k = ze();
        if (!k) {
          var L = typeof x == "string" ? x : x.displayName || x.name;
          L && (k = `

Check the top-level render call using <` + L + ">.");
        }
        return k;
      }
    }
    function an(x, k) {
      {
        if (!x._store || x._store.validated || x.key != null)
          return;
        x._store.validated = !0;
        var L = Rt(k);
        if (tt[L])
          return;
        tt[L] = !0;
        var G = "";
        x && x._owner && x._owner !== Ot.current && (G = " It was passed a child from " + B(x._owner.type) + "."), lt(x), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', L, G), lt(null);
      }
    }
    function Cn(x, k) {
      {
        if (typeof x != "object")
          return;
        if (Oe(x))
          for (var L = 0; L < x.length; L++) {
            var G = x[L];
            sn(G) && an(G, k);
          }
        else if (sn(x))
          x._store && (x._store.validated = !0);
        else if (x) {
          var me = h(x);
          if (typeof me == "function" && me !== x.entries)
            for (var be = me.call(x), le; !(le = be.next()).done; )
              sn(le.value) && an(le.value, k);
        }
      }
    }
    function qt(x) {
      {
        var k = x.type;
        if (k == null || typeof k == "string")
          return;
        var L;
        if (typeof k == "function")
          L = k.propTypes;
        else if (typeof k == "object" && (k.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        k.$$typeof === d))
          L = k.propTypes;
        else
          return;
        if (L) {
          var G = B(k);
          Tt(L, x.props, "prop", G, x);
        } else if (k.PropTypes !== void 0 && !on) {
          on = !0;
          var me = B(k);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", me || "Unknown");
        }
        typeof k.getDefaultProps == "function" && !k.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Wt(x) {
      {
        for (var k = Object.keys(x.props), L = 0; L < k.length; L++) {
          var G = k[L];
          if (G !== "children" && G !== "key") {
            lt(x), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", G), lt(null);
            break;
          }
        }
        x.ref !== null && (lt(x), S("Invalid attribute `ref` supplied to `React.Fragment`."), lt(null));
      }
    }
    var er = {};
    function Or(x, k, L, G, me, be) {
      {
        var le = Y(x);
        if (!le) {
          var ae = "";
          (x === void 0 || typeof x == "object" && x !== null && Object.keys(x).length === 0) && (ae += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ze = qe();
          Ze ? ae += Ze : ae += ze();
          var Pe;
          x === null ? Pe = "null" : Oe(x) ? Pe = "array" : x !== void 0 && x.$$typeof === n ? (Pe = "<" + (B(x.type) || "Unknown") + " />", ae = " Did you accidentally export a JSX literal instead of a component?") : Pe = typeof x, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Pe, ae);
        }
        var Ne = Ye(x, k, L, me, be);
        if (Ne == null)
          return Ne;
        if (le) {
          var je = k.children;
          if (je !== void 0)
            if (G)
              if (Oe(je)) {
                for (var An = 0; An < je.length; An++)
                  Cn(je[An], x);
                Object.freeze && Object.freeze(je);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Cn(je, x);
        }
        if (ve.call(k, "key")) {
          var cn = B(x), nt = Object.keys(k).filter(function(Zf) {
            return Zf !== "key";
          }), ui = nt.length > 0 ? "{key: someKey, " + nt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!er[cn + ui]) {
            var Kf = nt.length > 0 ? "{" + nt.join(": ..., ") + ": ...}" : "{}";
            S(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ui, cn, Kf, cn), er[cn + ui] = !0;
          }
        }
        return x === r ? Wt(Ne) : qt(Ne), Ne;
      }
    }
    function We(x, k, L) {
      return Or(x, k, L, !0);
    }
    function Rr(x, k, L) {
      return Or(x, k, L, !1);
    }
    var li = Rr, Ie = We;
    nr.Fragment = r, nr.jsx = li, nr.jsxs = Ie;
  }()), nr;
}
var ya;
function a0() {
  return ya || (ya = 1, process.env.NODE_ENV === "production" ? kr.exports = i0() : kr.exports = s0()), kr.exports;
}
var q = a0(), it = function() {
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
), Re = "-ms-", fr = "-moz-", Ee = "-webkit-", al = "comm", Fo = "rule", zs = "decl", f0 = "@import", cl = "@keyframes", d0 = "@layer", ll = Math.abs, Vs = String.fromCharCode, ji = Object.assign;
function h0(t, n) {
  return Ge(t, 0) ^ 45 ? (((n << 2 ^ Ge(t, 0)) << 2 ^ Ge(t, 1)) << 2 ^ Ge(t, 2)) << 2 ^ Ge(t, 3) : 0;
}
function ul(t) {
  return t.trim();
}
function Vt(t, n) {
  return (t = n.exec(t)) ? t[0] : t;
}
function se(t, n, e) {
  return t.replace(n, e);
}
function Yr(t, n, e) {
  return t.indexOf(n, e);
}
function Ge(t, n) {
  return t.charCodeAt(n) | 0;
}
function jn(t, n, e) {
  return t.slice(n, e);
}
function Nt(t) {
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
    return !Vt(e, n);
  });
}
var zo = 1, Mn = 1, dl = 0, xt = 0, Ve = 0, Wn = "";
function Vo(t, n, e, r, o, i, s, a) {
  return { value: t, root: n, parent: e, type: r, props: o, children: i, line: zo, column: Mn, length: s, return: "", siblings: a };
}
function Xt(t, n) {
  return ji(Vo("", null, null, "", null, null, 0, t.siblings), t, { length: -t.length }, n);
}
function Tn(t) {
  for (; t.root; )
    t = Xt(t.root, { children: [t] });
  lr(t, t.siblings);
}
function p0() {
  return Ve;
}
function m0() {
  return Ve = xt > 0 ? Ge(Wn, --xt) : 0, Mn--, Ve === 10 && (Mn = 1, zo--), Ve;
}
function bt() {
  return Ve = xt < dl ? Ge(Wn, xt++) : 0, Mn++, Ve === 10 && (Mn = 1, zo++), Ve;
}
function mn() {
  return Ge(Wn, xt);
}
function $r() {
  return xt;
}
function Ho(t, n) {
  return jn(Wn, t, n);
}
function Mi(t) {
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
  return zo = Mn = 1, dl = Nt(Wn = t), xt = 0, [];
}
function v0(t) {
  return Wn = "", t;
}
function fi(t) {
  return ul(Ho(xt - 1, Li(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function y0(t) {
  for (; (Ve = mn()) && Ve < 33; )
    bt();
  return Mi(t) > 2 || Mi(Ve) > 3 ? "" : " ";
}
function b0(t, n) {
  for (; --n && bt() && !(Ve < 48 || Ve > 102 || Ve > 57 && Ve < 65 || Ve > 70 && Ve < 97); )
    ;
  return Ho(t, $r() + (n < 6 && mn() == 32 && bt() == 32));
}
function Li(t) {
  for (; bt(); )
    switch (Ve) {
      // ] ) " '
      case t:
        return xt;
      // " '
      case 34:
      case 39:
        t !== 34 && t !== 39 && Li(Ve);
        break;
      // (
      case 40:
        t === 41 && Li(t);
        break;
      // \
      case 92:
        bt();
        break;
    }
  return xt;
}
function S0(t, n) {
  for (; bt() && t + Ve !== 57; )
    if (t + Ve === 84 && mn() === 47)
      break;
  return "/*" + Ho(n, xt - 1) + "*" + Vs(t === 47 ? t : bt());
}
function w0(t) {
  for (; !Mi(mn()); )
    bt();
  return Ho(t, xt);
}
function E0(t) {
  return v0(Gr("", null, null, null, [""], t = g0(t), 0, [0], t));
}
function Gr(t, n, e, r, o, i, s, a, c) {
  for (var u = 0, f = 0, d = s, l = 0, y = 0, g = 0, p = 1, h = 1, E = 1, S = 0, m = "", C = o, b = i, R = r, A = m; h; )
    switch (g = S, S = bt()) {
      // (
      case 40:
        if (g != 108 && Ge(A, d - 1) == 58) {
          Yr(A += se(fi(S), "&", "&\f"), "&\f", ll(u ? a[u - 1] : 0)) != -1 && (E = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        A += fi(S);
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
            lr(_0(S0(bt(), $r()), n, e, c), c);
            break;
          default:
            A += "/";
        }
        break;
      // {
      case 123 * p:
        a[u++] = Nt(A) * E;
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
            E == -1 && (A = se(A, /\f/g, "")), y > 0 && Nt(A) - d && lr(y > 32 ? wa(A + ";", r, e, d - 1, c) : wa(se(A, " ", "") + ";", r, e, d - 2, c), c);
            break;
          // @ ;
          case 59:
            A += ";";
          // { rule/at-rule
          default:
            if (lr(R = Sa(A, n, e, u, f, o, a, m, C = [], b = [], d, i), i), S === 123)
              if (f === 0)
                Gr(A, n, R, R, C, i, d, a, b);
              else
                switch (l === 99 && Ge(A, 3) === 110 ? 100 : l) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Gr(t, R, R, r && lr(Sa(t, R, R, 0, 0, o, a, m, o, C = [], d, b), b), o, b, d, a, r ? C : b);
                    break;
                  default:
                    Gr(A, R, R, R, [""], b, 0, a, b);
                }
        }
        u = f = y = 0, p = E = 1, m = A = "", d = s;
        break;
      // :
      case 58:
        d = 1 + Nt(A), y = g;
      default:
        if (p < 1) {
          if (S == 123)
            --p;
          else if (S == 125 && p++ == 0 && m0() == 125)
            continue;
        }
        switch (A += Vs(S), S * p) {
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
            mn() === 45 && (A += fi(bt())), l = mn(), f = d = Nt(m = A += w0($r())), S++;
            break;
          // -
          case 45:
            g === 45 && Nt(A) == 2 && (p = 0);
        }
    }
  return i;
}
function Sa(t, n, e, r, o, i, s, a, c, u, f, d) {
  for (var l = o - 1, y = o === 0 ? i : [""], g = fl(y), p = 0, h = 0, E = 0; p < r; ++p)
    for (var S = 0, m = jn(t, l + 1, l = ll(h = s[p])), C = t; S < g; ++S)
      (C = ul(h > 0 ? y[S] + " " + m : se(m, /&\f/g, y[S]))) && (c[E++] = C);
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
      return Ee + t + fr + t + Re + t + t;
    // writing-mode
    case 5936:
      switch (Ge(t, n + 11)) {
        // vertical-l(r)
        case 114:
          return Ee + t + Re + se(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
        // vertical-r(l)
        case 108:
          return Ee + t + Re + se(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
        // horizontal(-)tb
        case 45:
          return Ee + t + Re + se(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return Ee + t + Re + t + t;
    // order
    case 6165:
      return Ee + t + Re + "flex-" + t + t;
    // align-items
    case 5187:
      return Ee + t + se(t, /(\w+).+(:[^]+)/, Ee + "box-$1$2" + Re + "flex-$1$2") + t;
    // align-self
    case 5443:
      return Ee + t + Re + "flex-item-" + se(t, /flex-|-self/g, "") + (Vt(t, /flex-|baseline/) ? "" : Re + "grid-row-" + se(t, /flex-|-self/g, "")) + t;
    // align-content
    case 4675:
      return Ee + t + Re + "flex-line-pack" + se(t, /align-content|flex-|-self/g, "") + t;
    // flex-shrink
    case 5548:
      return Ee + t + Re + se(t, "shrink", "negative") + t;
    // flex-basis
    case 5292:
      return Ee + t + Re + se(t, "basis", "preferred-size") + t;
    // flex-grow
    case 6060:
      return Ee + "box-" + se(t, "-grow", "") + Ee + t + Re + se(t, "grow", "positive") + t;
    // transition
    case 4554:
      return Ee + se(t, /([^-])(transform)/g, "$1" + Ee + "$2") + t;
    // cursor
    case 6187:
      return se(se(se(t, /(zoom-|grab)/, Ee + "$1"), /(image-set)/, Ee + "$1"), t, "") + t;
    // background, background-image
    case 5495:
    case 3959:
      return se(t, /(image-set\([^]*)/, Ee + "$1$`$1");
    // justify-content
    case 4968:
      return se(se(t, /(.+:)(flex-)?(.*)/, Ee + "box-pack:$3" + Re + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Ee + t + t;
    // justify-self
    case 4200:
      if (!Vt(t, /flex-|baseline/)) return Re + "grid-column-align" + jn(t, n) + t;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return Re + se(t, "template-", "") + t;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return e && e.some(function(r, o) {
        return n = o, Vt(r.props, /grid-\w+-end/);
      }) ? ~Yr(t + (e = e[n].value), "span", 0) ? t : Re + se(t, "-start", "") + t + Re + "grid-row-span:" + (~Yr(e, "span", 0) ? Vt(e, /\d+/) : +Vt(e, /\d+/) - +Vt(t, /\d+/)) + ";" : Re + se(t, "-start", "") + t;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return e && e.some(function(r) {
        return Vt(r.props, /grid-\w+-start/);
      }) ? t : Re + se(se(t, "-end", "-span"), "span ", "") + t;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return se(t, /(.+)-inline(.+)/, Ee + "$1$2") + t;
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
      if (Nt(t) - 1 - n > 6)
        switch (Ge(t, n + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (Ge(t, n + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return se(t, /(.+:)(.+)-([^]+)/, "$1" + Ee + "$2-$3$1" + fr + (Ge(t, n + 3) == 108 ? "$3" : "$2-$3")) + t;
          // (s)tretch
          case 115:
            return ~Yr(t, "stretch", 0) ? hl(se(t, "stretch", "fill-available"), n, e) + t : t;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return se(t, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, s, a, c, u) {
        return Re + o + ":" + i + u + (s ? Re + o + "-span:" + (a ? c : +c - +i) + u : "") + t;
      });
    // position: sticky
    case 4949:
      if (Ge(t, n + 6) === 121)
        return se(t, ":", ":" + Ee) + t;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (Ge(t, Ge(t, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return se(t, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + Ee + (Ge(t, 14) === 45 ? "inline-" : "") + "box$3$1" + Ee + "$2$3$1" + Re + "$2box$3") + t;
        // (inline-)?gri(d)
        case 100:
          return se(t, ":", ":" + Re) + t;
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
      if (!Nt(t.value = t.props.join(","))) return "";
  }
  return Nt(e = po(t.children, r)) ? t.return = t.value + "{" + e + "}" : "";
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
        return po([Xt(t, { value: se(t.value, "@", "@" + Ee) })], r);
      case Fo:
        if (t.length)
          return x0(e = t.props, function(o) {
            switch (Vt(o, r = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                Tn(Xt(t, { props: [se(o, /:(read-\w+)/, ":" + fr + "$1")] })), Tn(Xt(t, { props: [o] })), ji(t, { props: ba(e, r) });
                break;
              // :placeholder
              case "::placeholder":
                Tn(Xt(t, { props: [se(o, /:(plac\w+)/, ":" + Ee + "input-$1")] })), Tn(Xt(t, { props: [se(o, /:(plac\w+)/, ":" + fr + "$1")] })), Tn(Xt(t, { props: [se(o, /:(plac\w+)/, Re + "input-$1")] })), Tn(Xt(t, { props: [o] })), ji(t, { props: ba(e, r) });
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
}, wn = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", xl = "active", pl = "data-styled-version", Uo = "6.1.18", Hs = `/*!sc*/
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
      }, Xe(), i && !Pr.has(r) && (console.warn(r), Pr.add(r));
    } catch (s) {
      Ea.test(s.message) && Pr.delete(r);
    } finally {
      console.error = o;
    }
  }
}, qo = Object.freeze([]), Ln = Object.freeze({});
function I0(t, n, e) {
  return e === void 0 && (e = Ln), t.theme !== e.theme && t.theme || n || e.theme;
}
var Di = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), N0 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, j0 = /(^-|-$)/g;
function _a(t) {
  return t.replace(N0, "-").replace(j0, "");
}
var M0 = /(a)(d)/gi, Ir = 52, Ca = function(t) {
  return String.fromCharCode(t + (t > 25 ? 39 : 97));
};
function Bi(t) {
  var n, e = "";
  for (n = Math.abs(t); n > Ir; n = n / Ir | 0) e = Ca(n % Ir) + e;
  return (Ca(n % Ir) + e).replace(M0, "$1-$2");
}
var di, ml = 5381, un = function(t, n) {
  for (var e = n.length; e; ) t = 33 * t ^ n.charCodeAt(--e);
  return t;
}, gl = function(t) {
  return un(ml, t);
};
function L0(t) {
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
function dn(t, n) {
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
}, K0 = "style[".concat(wn, "][").concat(pl, '="').concat(Uo, '"]'), Z0 = new RegExp("^".concat(wn, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), J0 = function(t, n, e) {
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
    o && o.getAttribute(wn) !== xl && (Q0(t, o), o.parentNode && o.parentNode.removeChild(o));
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
  r.setAttribute(wn, xl), r.setAttribute(pl, Uo);
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
    n === void 0 && (n = Ln), e === void 0 && (e = {});
    var o = this;
    this.options = it(it({}, od), n), this.gs = e, this.names = new Map(r), this.server = !!n.isServer, !this.server && mo && Pa && (Pa = !1, ka(this)), qs(this, function() {
      return function(i) {
        for (var s = i.getTag(), a = s.length, c = "", u = function(d) {
          var l = function(E) {
            return go.get(E);
          }(d);
          if (l === void 0) return "continue";
          var y = i.names.get(l), g = s.getGroup(d);
          if (y === void 0 || !y.size || g.length === 0) return "continue";
          var p = "".concat(wn, ".g").concat(d, '[id="').concat(l, '"]'), h = "";
          y !== void 0 && y.forEach(function(E) {
            E.length > 0 && (h += "".concat(E, ","));
          }), c += "".concat(g).concat(p, '{content:"').concat(h, '"}').concat(Hs);
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
  var n, e, r, o = Ln, i = o.options, s = i === void 0 ? Ln : i, a = o.plugins, c = a === void 0 ? qo : a, u = function(l, y, g) {
    return g.startsWith(e) && g.endsWith(e) && g.replaceAll(e, "").length > 0 ? ".".concat(n) : l;
  }, f = c.slice();
  f.push(function(l) {
    l.type === Fo && l.value.includes("&") && (l.props[0] = l.props[0].replace(id, e).replace(r, u));
  }), s.prefix && f.push(O0), f.push(C0);
  var d = function(l, y, g, p) {
    y === void 0 && (y = ""), g === void 0 && (g = ""), p === void 0 && (p = "&"), n = p, e = y, r = new RegExp("\\".concat(e, "\\b"), "g");
    var h = l.replace(sd, ""), E = E0(g || y ? "".concat(g, " ").concat(y, " { ").concat(h, " }") : h);
    s.namespace && (E = Cl(E, s.namespace));
    var S = [];
    return po(E, A0(f.concat(T0(function(m) {
      return S.push(m);
    })))), S;
  };
  return d.hash = c.length ? c.reduce(function(l, y) {
    return y.name || Xn(15), un(l, y.name);
  }, ml).toString() : "", d;
}
var cd = new _l(), zi = ad(), Al = Fe.createContext({ shouldForwardProp: void 0, styleSheet: cd, stylis: zi });
Al.Consumer;
Fe.createContext(void 0);
function Ia() {
  return Zt(Al);
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
    this.rules = n, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && ud(n), this.componentId = e, this.baseHash = un(fd, e), this.baseStyle = r, _l.registerId(e);
  }
  return t.prototype.generateAndInjectStyles = function(n, e, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(n, e, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && e.hasNameForId(this.componentId, this.staticRulesId)) o = dn(o, this.staticRulesId);
    else {
      var i = Ra(gn(this.rules, n, e, r)), s = Bi(un(this.baseHash, i) >>> 0);
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
          var l = Ra(gn(d, n, e, r));
          c = un(c, l + f), u += l;
        }
      }
      if (u) {
        var y = Bi(c >>> 0);
        e.hasNameForId(this.componentId, y) || e.insertRules(this.componentId, y, r(u, ".".concat(y), void 0, this.componentId)), o = dn(o, y);
      }
    }
    return o;
  }, t;
}(), Rl = Fe.createContext(void 0);
Rl.Consumer;
var xi = {}, Ma = /* @__PURE__ */ new Set();
function hd(t, n, e) {
  var r = Us(t), o = t, i = !hi(t), s = n.attrs, a = s === void 0 ? qo : s, c = n.componentId, u = c === void 0 ? function(C, b) {
    var R = typeof C != "string" ? "sc" : _a(C);
    xi[R] = (xi[R] || 0) + 1;
    var A = "".concat(R, "-").concat(L0(Uo + R + xi[R]));
    return b ? "".concat(b, "-").concat(A) : A;
  }(n.displayName, n.parentComponentId) : c, f = n.displayName, d = f === void 0 ? function(C) {
    return hi(C) ? "styled.".concat(C) : "Styled(".concat(vl(C), ")");
  }(t) : f, l = n.displayName && n.componentId ? "".concat(_a(n.displayName), "-").concat(n.componentId) : n.componentId || u, y = r && o.attrs ? o.attrs.concat(a).filter(Boolean) : a, g = n.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var p = o.shouldForwardProp;
    if (n.shouldForwardProp) {
      var h = n.shouldForwardProp;
      g = function(C, b) {
        return p(C, b) && h(C, b);
      };
    } else g = p;
  }
  var E = new dd(e, l, r ? o.componentStyle : void 0);
  function S(C, b) {
    return function(R, A, N) {
      var z = R.attrs, Y = R.componentStyle, ne = R.defaultProps, K = R.foldedComponentIds, B = R.styledComponentId, H = R.target, X = Fe.useContext(Rl), $ = Ia(), ee = R.shouldForwardProp || $.shouldForwardProp;
      process.env.NODE_ENV !== "production" && pa(B);
      var Z = I0(A, X, ne) || Ln, Q = function(fe, xe, ge) {
        for (var j, M = it(it({}, xe), { className: void 0, theme: ge }), T = 0; T < fe.length; T += 1) {
          var P = Dn(j = fe[T]) ? j(M) : j;
          for (var w in P) M[w] = w === "className" ? dn(M[w], P[w]) : w === "style" ? it(it({}, M[w]), P[w]) : P[w];
        }
        return xe.className && (M.className = dn(M.className, xe.className)), M;
      }(z, A, Z), oe = Q.as || H, ie = {};
      for (var J in Q) Q[J] === void 0 || J[0] === "$" || J === "as" || J === "theme" && Q.theme === Z || (J === "forwardedAs" ? ie.as = Q.forwardedAs : ee && !ee(J, oe) || (ie[J] = Q[J], ee || process.env.NODE_ENV !== "development" || u0(J) || Ma.has(J) || !Di.has(oe) || (Ma.add(J), console.warn('styled-components: it looks like an unknown prop "'.concat(J, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var re = function(fe, xe) {
        var ge = Ia(), j = fe.generateAndInjectStyles(xe, ge.styleSheet, ge.stylis);
        return process.env.NODE_ENV !== "production" && pa(j), j;
      }(Y, Q);
      process.env.NODE_ENV !== "production" && R.warnTooManyClasses && R.warnTooManyClasses(re);
      var he = dn(K, B);
      return re && (he += " " + re), Q.className && (he += " " + Q.className), ie[hi(oe) && !Di.has(oe) ? "class" : "className"] = he, N && (ie.ref = N), e0(oe, ie);
    }(m, C, b);
  }
  S.displayName = d;
  var m = Fe.forwardRef(S);
  return m.attrs = y, m.componentStyle = E, m.displayName = d, m.shouldForwardProp = g, m.foldedComponentIds = r ? dn(o.foldedComponentIds, o.styledComponentId) : "", m.styledComponentId = l, m.target = r ? o.target : t, Object.defineProperty(m, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(C) {
    this._foldedDefaultProps = r ? function(b) {
      for (var R = [], A = 1; A < arguments.length; A++) R[A - 1] = arguments[A];
      for (var N = 0, z = R; N < z.length; N++) Fi(b, z[N], !0);
      return b;
    }({}, o.defaultProps, C) : C;
  } }), process.env.NODE_ENV !== "production" && (P0(d, l), m.warnTooManyClasses = /* @__PURE__ */ function(C, b) {
    var R = {}, A = !1;
    return function(N) {
      if (!A && (R[N] = !0, Object.keys(R).length >= 200)) {
        var z = b ? ' with the id of "'.concat(b, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(C).concat(z, `.
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
function La(t, n) {
  for (var e = [t[0]], r = 0, o = n.length; r < o; r += 1) e.push(n[r], t[r + 1]);
  return e;
}
var Da = function(t) {
  return Object.assign(t, { isCss: !0 });
};
function xd(t) {
  for (var n = [], e = 1; e < arguments.length; e++) n[e - 1] = arguments[e];
  if (Dn(t) || Bn(t)) return Da(gn(La(qo, Nn([t], n, !0))));
  var r = t;
  return n.length === 0 && r.length === 1 && typeof r[0] == "string" ? gn(r) : Da(gn(La(r, n)));
}
function Vi(t, n, e) {
  if (e === void 0 && (e = Ln), !n) throw Xn(1, n);
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
}, Et = kl;
Di.forEach(function(t) {
  Et[t] = kl(t);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var jr = "__sc-".concat(wn, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[jr] || (window[jr] = 0), window[jr] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[jr] += 1);
const Er = vo;
function vo(t, n) {
  const e = yo();
  return vo = function(r, o) {
    return r = r - 446, e[r];
  }, vo(t, n);
}
(function(t, n) {
  const e = vo, r = t();
  for (; ; )
    try {
      if (-parseInt(e(460)) / 1 * (parseInt(e(456)) / 2) + -parseInt(e(458)) / 3 * (-parseInt(e(454)) / 4) + -parseInt(e(453)) / 5 + -parseInt(e(447)) / 6 * (parseInt(e(450)) / 7) + parseInt(e(448)) / 8 * (parseInt(e(452)) / 9) + parseInt(e(446)) / 10 + -parseInt(e(457)) / 11 * (-parseInt(e(449)) / 12) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(yo, 377676);
function yo() {
  const t = ["283ZuHELA", "1761670mBkpYW", "93354ltoagn", "8LXeWEK", "18192CjaCJQ", "168pgNHIc", "canvas", "4556241iclfPX", "2882455nNTSHA", "4oxFYfz", "span", "3084ZNHhHm", "7117DdLmwl", "302103QJukmT", "div"];
  return yo = function() {
    return t;
  }, yo();
}
const pd = Et[Er(459)]`
  flex-direction: column;
  border-radius: 15px;
  border: 3px solid #a0beeb;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
  justify-items: center;
  align-items: center;
`, md = Et[Er(459)]`
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
`, gd = Et[Er(451)]`
  border-radius: 7px;
  display: inline;
  padding: 0;
  &:focus-visible {
    outline: none;
  }
`, vd = Et[Er(455)]`
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
`, yd = Et[Er(459)]`
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
}, Ml = "", _d = (t, n) => {
  const e = t.length, r = new Array(e);
  let o = 0;
  t.forEach((i, s) => {
    Ws(i, !1, (a) => {
      r[s] = a, ++o === e && n(r.join(Ml));
    });
  });
}, Cd = (t, n) => {
  const e = t.split(Ml), r = [];
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
function Mr(t) {
  return t.reduce((n, e) => n + e.length, 0);
}
function Lr(t, n) {
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
const Ll = 4;
function Ue(t) {
  if (t) return Od(t);
}
function Od(t) {
  for (var n in Ue.prototype)
    t[n] = Ue.prototype[n];
  return t;
}
Ue.prototype.on = Ue.prototype.addEventListener = function(t, n) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(n), this;
};
Ue.prototype.once = function(t, n) {
  function e() {
    this.off(t, e), n.apply(this, arguments);
  }
  return e.fn = n, this.on(t, e), this;
};
Ue.prototype.off = Ue.prototype.removeListener = Ue.prototype.removeAllListeners = Ue.prototype.removeEventListener = function(t, n) {
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
Ue.prototype.emit = function(t) {
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
Ue.prototype.emitReserved = Ue.prototype.emit;
Ue.prototype.listeners = function(t) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [];
};
Ue.prototype.hasListeners = function(t) {
  return !!this.listeners(t).length;
};
const Wo = typeof Promise == "function" && typeof Promise.resolve == "function" ? (n) => Promise.resolve().then(n) : (n, e) => e(n, 0), ht = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), Rd = "arraybuffer";
function Dl(t, ...n) {
  return n.reduce((e, r) => (t.hasOwnProperty(r) && (e[r] = t[r]), e), {});
}
const kd = ht.setTimeout, Pd = ht.clearTimeout;
function Xo(t, n) {
  n.useNativeTimers ? (t.setTimeoutFn = kd.bind(ht), t.clearTimeoutFn = Pd.bind(ht)) : (t.setTimeoutFn = ht.setTimeout.bind(ht), t.clearTimeoutFn = ht.clearTimeout.bind(ht));
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
function Md(t) {
  let n = "";
  for (let e in t)
    t.hasOwnProperty(e) && (n.length && (n += "&"), n += encodeURIComponent(e) + "=" + encodeURIComponent(t[e]));
  return n;
}
function Ld(t) {
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
class Ys extends Ue {
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
    const e = Md(n);
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
let Pn = class Qr extends Ue {
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
    const t = "onpagehide" in ht ? "pagehide" : "unload";
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
      return new ht[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
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
const gi = ht.WebSocket || ht.MozWebSocket;
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
class Kt extends Ue {
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
  createTransport(n) {
    const e = Object.assign({}, this.opts.query);
    e.EIO = Ll, e.transport = n, this.id && (e.sid = this.id);
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
    const n = this.opts.rememberUpgrade && Kt.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
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
    this.readyState = "open", Kt.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
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
    if (Kt.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
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
Kt.protocol = Ll;
class Jd extends Kt {
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
    Kt.priorWebsocketSuccess = !1;
    const o = () => {
      r || (e.send([{ type: "ping", data: "probe" }]), e.once("packet", (d) => {
        if (!r)
          if (d.type === "pong" && d.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", e), !e)
              return;
            Kt.priorWebsocketSuccess = e.name === "websocket", this.transport.pause(() => {
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
class Gs extends Ue {
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
function gt(t, n, e) {
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
class Ul extends Ue {
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
class Yi extends Ue {
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
    const o = gt(e, "open", function() {
      r.onopen(), n && n();
    }), i = (a) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", a), n ? n(a) : this.maybeReconnectOnOpen();
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
const et = /* @__PURE__ */ o0(xh);
function Lt() {
  return Lt = Object.assign ? Object.assign.bind() : function(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = arguments[n];
      for (var r in e) ({}).hasOwnProperty.call(e, r) && (t[r] = e[r]);
    }
    return t;
  }, Lt.apply(null, arguments);
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
function Qt(t, n) {
  Wl(Zs, t, n);
}
function Sh(t, n) {
  Wl(bh, t, n);
}
Qt.preMessage = yh;
Qt.resetWarned = ql;
Qt.noteOnce = Sh;
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
function W(t, n, e) {
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
      W(t, r, e[r]);
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
  var t = Symbol.for("react.element"), n = Symbol.for("react.portal"), e = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), l = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), g;
  g = Symbol.for("react.module.reference");
  function p(h) {
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
    return p(h) === s;
  }, Se.isContextProvider = function(h) {
    return p(h) === i;
  }, Se.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === t;
  }, Se.isForwardRef = function(h) {
    return p(h) === c;
  }, Se.isFragment = function(h) {
    return p(h) === e;
  }, Se.isLazy = function(h) {
    return p(h) === l;
  }, Se.isMemo = function(h) {
    return p(h) === d;
  }, Se.isPortal = function(h) {
    return p(h) === n;
  }, Se.isProfiler = function(h) {
    return p(h) === o;
  }, Se.isStrictMode = function(h) {
    return p(h) === r;
  }, Se.isSuspense = function(h) {
    return p(h) === u;
  }, Se.isSuspenseList = function(h) {
    return p(h) === f;
  }, Se.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === e || h === o || h === r || h === u || h === f || h === y || typeof h == "object" && h !== null && (h.$$typeof === l || h.$$typeof === d || h.$$typeof === i || h.$$typeof === s || h.$$typeof === c || h.$$typeof === g || h.getModuleId !== void 0);
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
var Ya;
function Ah() {
  return Ya || (Ya = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Symbol.for("react.element"), n = Symbol.for("react.portal"), e = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), l = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), g = !1, p = !1, h = !1, E = !1, S = !1, m;
    m = Symbol.for("react.module.reference");
    function C(F) {
      return !!(typeof F == "string" || typeof F == "function" || F === e || F === o || S || F === r || F === u || F === f || E || F === y || g || p || h || typeof F == "object" && F !== null && (F.$$typeof === l || F.$$typeof === d || F.$$typeof === i || F.$$typeof === s || F.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      F.$$typeof === m || F.getModuleId !== void 0));
    }
    function b(F) {
      if (typeof F == "object" && F !== null) {
        var ue = F.$$typeof;
        switch (ue) {
          case t:
            var ve = F.type;
            switch (ve) {
              case e:
              case o:
              case r:
              case u:
              case f:
                return ve;
              default:
                var Ce = ve && ve.$$typeof;
                switch (Ce) {
                  case a:
                  case s:
                  case c:
                  case l:
                  case d:
                  case i:
                    return Ce;
                  default:
                    return ue;
                }
            }
          case n:
            return ue;
        }
      }
    }
    var R = s, A = i, N = t, z = c, Y = e, ne = l, K = d, B = n, H = o, X = r, $ = u, ee = f, Z = !1, Q = !1;
    function oe(F) {
      return Z || (Z = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ie(F) {
      return Q || (Q = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function J(F) {
      return b(F) === s;
    }
    function re(F) {
      return b(F) === i;
    }
    function he(F) {
      return typeof F == "object" && F !== null && F.$$typeof === t;
    }
    function fe(F) {
      return b(F) === c;
    }
    function xe(F) {
      return b(F) === e;
    }
    function ge(F) {
      return b(F) === l;
    }
    function j(F) {
      return b(F) === d;
    }
    function M(F) {
      return b(F) === n;
    }
    function T(F) {
      return b(F) === o;
    }
    function P(F) {
      return b(F) === r;
    }
    function w(F) {
      return b(F) === u;
    }
    function D(F) {
      return b(F) === f;
    }
    we.ContextConsumer = R, we.ContextProvider = A, we.Element = N, we.ForwardRef = z, we.Fragment = Y, we.Lazy = ne, we.Memo = K, we.Portal = B, we.Profiler = H, we.StrictMode = X, we.Suspense = $, we.SuspenseList = ee, we.isAsyncMode = oe, we.isConcurrentMode = ie, we.isContextConsumer = J, we.isContextProvider = re, we.isElement = he, we.isForwardRef = fe, we.isFragment = xe, we.isLazy = ge, we.isMemo = j, we.isPortal = M, we.isProfiler = T, we.isStrictMode = P, we.isSuspense = w, we.isSuspenseList = D, we.isValidElementType = C, we.typeOf = b;
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
function _t(t, n) {
  if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function Ga(t, n) {
  for (var e = 0; e < n.length; e++) {
    var r = n[e];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, Xl(r.key), r);
  }
}
function Ct(t, n, e) {
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
function vn(t) {
  if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Kl(t, n) {
  if (n && (_e(n) == "object" || typeof n == "function")) return n;
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
function Ht(t) {
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
function Ut() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Mh(t, n) {
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
var Za = "data-rc-order", Ja = "data-rc-priority", Lh = "rc-util-key", Zi = /* @__PURE__ */ new Map();
function ru() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.mark;
  return n ? n.startsWith("data-") ? n : "data-".concat(n) : Lh;
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
  if (!Ut())
    return null;
  var e = n.csp, r = n.prepend, o = n.priority, i = o === void 0 ? 0 : o, s = Dh(r), a = s === "prependQueue", c = document.createElement("style");
  c.setAttribute(Za, s), a && i && c.setAttribute(Ja, "".concat(i)), e != null && e.nonce && (c.nonce = e == null ? void 0 : e.nonce), c.innerHTML = t;
  var u = Go(n), f = u.firstChild;
  if (r) {
    if (a) {
      var d = (n.styles || ea(u)).filter(function(l) {
        if (!["prepend", "prependQueue"].includes(l.getAttribute(Za)))
          return !1;
        var y = Number(l.getAttribute(Ja) || 0);
        return i >= y;
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
  if (!e || !Mh(document, e)) {
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
    if (Qt(!c, "Warning: There may be circular references"), c)
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
    _t(this, t), W(this, "instanceId", void 0), W(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = n;
  }
  return Ct(t, [{
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
}(), zn = "data-token-hash", St = "data-css-hash", Uh = "data-cache-path", $t = "__cssinjs_instance__";
function qh() {
  var t = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var n = document.body.querySelectorAll("style[".concat(St, "]")) || [], e = document.head.firstChild;
    Array.from(n).forEach(function(o) {
      o[$t] = o[$t] || t, o[$t] === t && document.head.insertBefore(o, e);
    });
    var r = {};
    Array.from(document.querySelectorAll("style[".concat(St, "]"))).forEach(function(o) {
      var i = o.getAttribute(St);
      if (r[i]) {
        if (o[$t] === t) {
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
    _t(this, t), W(this, "cache", void 0), W(this, "keys", void 0), W(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return Ct(t, [{
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
W(ta, "MAX_CACHE_SIZE", 20);
W(ta, "MAX_CACHE_OFFSET", 5);
var Qa = 0, au = /* @__PURE__ */ function() {
  function t(n) {
    _t(this, t), W(this, "derivatives", void 0), W(this, "id", void 0), this.derivatives = Array.isArray(n) ? n : [n], this.id = Qa, n.length === 0 && Zs(n.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), Qa += 1;
  }
  return Ct(t, [{
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
var es = Ut();
function So(t) {
  return typeof t == "number" ? "".concat(t, "px") : t;
}
function wo(t, n, e) {
  var r, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (i)
    return t;
  var s = V(V({}, o), {}, (r = {}, W(r, zn, n), W(r, St, e), r)), a = Object.keys(s).map(function(c) {
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
      var l, y = ro(f, r == null ? void 0 : r.prefix);
      o[y] = typeof d == "number" && !(r != null && (l = r.unitless) !== null && l !== void 0 && l[f]) ? "".concat(d, "px") : String(d), i[f] = "var(".concat(y, ")");
    }
  }), [i, $h(o, e, {
    scope: r == null ? void 0 : r.scope
  })];
}, nc = process.env.NODE_ENV !== "test" && Ut() ? _.useLayoutEffect : _.useEffect, lu = function(n, e) {
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
  var i = _.useContext(Cr), s = i.cache, a = [t].concat(Ht(n)), c = Ji(a), u = nx([c]), f = ix(), d = function(p) {
    s.opUpdate(c, function(h) {
      var E = h || [void 0, void 0], S = ce(E, 2), m = S[0], C = m === void 0 ? 0 : m, b = S[1], R = b;
      process.env.NODE_ENV !== "production" && b && f && (r == null || r(R, f), R = null);
      var A = R || e(), N = [C, A];
      return p ? p(N) : N;
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
  var y = l[1];
  return Zh(function() {
    o == null || o(y);
  }, function(g) {
    return d(function(p) {
      var h = ce(p, 2), E = h[0], S = h[1];
      return g && E === 0 && (o == null || o(y)), [E + 1, S];
    }), function() {
      s.opUpdate(c, function(p) {
        var h = p || [], E = ce(h, 2), S = E[0], m = S === void 0 ? 0 : S, C = E[1], b = m - 1;
        return b === 0 ? (u(function() {
          (g || !s.opGet(c)) && (r == null || r(C, !1));
        }), null) : [m - 1, C];
      });
    };
  }, [c]), y;
}
var ax = {}, cx = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", fn = /* @__PURE__ */ new Map();
function lx(t) {
  fn.set(t, (fn.get(t) || 0) + 1);
}
function ux(t, n) {
  if (typeof document < "u") {
    var e = document.querySelectorAll("style[".concat(zn, '="').concat(t, '"]'));
    e.forEach(function(r) {
      if (r[$t] === n) {
        var o;
        (o = r.parentNode) === null || o === void 0 || o.removeChild(r);
      }
    });
  }
}
var fx = 0;
function dx(t, n) {
  fn.set(t, (fn.get(t) || 0) - 1);
  var e = Array.from(fn.keys()), r = e.filter(function(o) {
    var i = fn.get(o) || 0;
    return i <= 0;
  });
  e.length - r.length > fx && r.forEach(function(o) {
    ux(o, n), fn.delete(o);
  });
}
var hx = function(n, e, r, o) {
  var i = r.getDerivativeToken(n), s = V(V({}, i), e);
  return o && (s = o(s)), s;
}, uu = "token";
function xx(t, n) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Zt(Cr), o = r.cache.instanceId, i = r.container, s = e.salt, a = s === void 0 ? "" : s, c = e.override, u = c === void 0 ? ax : c, f = e.formatToken, d = e.getComputedToken, l = e.cssVar, y = Yh(function() {
    return Object.assign.apply(Object, [{}].concat(Ht(n)));
  }, n), g = dr(y), p = dr(u), h = l ? dr(l) : "", E = na(uu, [a, t.id, g, p, h], function() {
    var S, m = d ? d(y, u, t) : hx(y, u, t, f), C = V({}, m), b = "";
    if (l) {
      var R = cu(m, l.key, {
        prefix: l.prefix,
        ignore: l.ignore,
        unitless: l.unitless,
        preserve: l.preserve
      }), A = ce(R, 2);
      m = A[0], b = A[1];
    }
    var N = tc(m, a);
    m._tokenKey = N, C._tokenKey = tc(C, a);
    var z = (S = l == null ? void 0 : l.key) !== null && S !== void 0 ? S : N;
    m._themeKey = z, lx(z);
    var Y = "".concat(cx, "-").concat(pr(N));
    return m._hashId = Y, [m, Y, C, b, (l == null ? void 0 : l.key) || ""];
  }, function(S) {
    dx(S[0]._themeKey, o);
  }, function(S) {
    var m = ce(S, 4), C = m[0], b = m[3];
    if (l && b) {
      var R = yn(b, pr("css-variables-".concat(C._themeKey)), {
        mark: St,
        prepend: "queue",
        attachTo: i,
        priority: -999
      });
      R[$t] = o, R.setAttribute(zn, C._themeKey);
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
  }, y = wo(s, a, f, l, u);
  return [d, f, y];
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
function It(t) {
  return t.length;
}
function wx(t) {
  return t.length;
}
function Fr(t, n) {
  return n.push(t), t;
}
var Ko = 1, Hn = 1, mu = 0, pt = 0, He = 0, $n = "";
function oa(t, n, e, r, o, i, s, a) {
  return { value: t, root: n, parent: e, type: r, props: o, children: i, line: Ko, column: Hn, length: s, return: "", siblings: a };
}
function Ex() {
  return He;
}
function _x() {
  return He = pt > 0 ? In($n, --pt) : 0, Hn--, He === 10 && (Hn = 1, Ko--), He;
}
function wt() {
  return He = pt < mu ? In($n, pt++) : 0, Hn++, He === 10 && (Hn = 1, Ko++), He;
}
function Gt() {
  return In($n, pt);
}
function io() {
  return pt;
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
  return Ko = Hn = 1, mu = It($n = t), pt = 0, [];
}
function Ax(t) {
  return $n = "", t;
}
function wi(t) {
  return pu(Zo(pt - 1, ns(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function Tx(t) {
  for (; (He = Gt()) && He < 33; )
    wt();
  return gr(t) > 2 || gr(He) > 3 ? "" : " ";
}
function Ox(t, n) {
  for (; --n && wt() && !(He < 48 || He > 102 || He > 57 && He < 65 || He > 70 && He < 97); )
    ;
  return Zo(t, io() + (n < 6 && Gt() == 32 && wt() == 32));
}
function ns(t) {
  for (; wt(); )
    switch (He) {
      // ] ) " '
      case t:
        return pt;
      // " '
      case 34:
      case 39:
        t !== 34 && t !== 39 && ns(He);
        break;
      // (
      case 40:
        t === 41 && ns(t);
        break;
      // \
      case 92:
        wt();
        break;
    }
  return pt;
}
function Rx(t, n) {
  for (; wt() && t + He !== 57; )
    if (t + He === 84 && Gt() === 47)
      break;
  return "/*" + Zo(n, pt - 1) + "*" + ra(t === 47 ? t : wt());
}
function kx(t) {
  for (; !gr(Gt()); )
    wt();
  return Zo(t, pt);
}
function Px(t) {
  return Ax(so("", null, null, null, [""], t = Cx(t), 0, [0], t));
}
function so(t, n, e, r, o, i, s, a, c) {
  for (var u = 0, f = 0, d = s, l = 0, y = 0, g = 0, p = 1, h = 1, E = 1, S = 0, m = "", C = o, b = i, R = r, A = m; h; )
    switch (g = S, S = wt()) {
      // (
      case 40:
        if (g != 108 && In(A, d - 1) == 58) {
          Sx(A += oo(wi(S), "&", "&\f"), "&\f", xu(u ? a[u - 1] : 0)) != -1 && (E = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        A += wi(S);
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
        switch (Gt()) {
          case 42:
          case 47:
            Fr(Ix(Rx(wt(), io()), n, e, c), c), (gr(g || 1) == 5 || gr(Gt() || 1) == 5) && It(A) && Vn(A, -1, void 0) !== " " && (A += " ");
            break;
          default:
            A += "/";
        }
        break;
      // {
      case 123 * p:
        a[u++] = It(A) * E;
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
            E == -1 && (A = oo(A, /\f/g, "")), y > 0 && (It(A) - d || p === 0 && g === 47) && Fr(y > 32 ? ic(A + ";", r, e, d - 1, c) : ic(oo(A, " ", "") + ";", r, e, d - 2, c), c);
            break;
          // @ ;
          case 59:
            A += ";";
          // { rule/at-rule
          default:
            if (Fr(R = oc(A, n, e, u, f, o, a, m, C = [], b = [], d, i), i), S === 123)
              if (f === 0)
                so(A, n, R, R, C, i, d, a, b);
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
                f ? so(t, R, R, r && Fr(oc(t, R, R, 0, 0, o, a, m, o, C = [], d, b), b), o, b, d, a, r ? C : b) : so(A, R, R, R, [""], b, 0, a, b);
              }
        }
        u = f = y = 0, p = E = 1, m = A = "", d = s;
        break;
      // :
      case 58:
        d = 1 + It(A), y = g;
      default:
        if (p < 1) {
          if (S == 123)
            --p;
          else if (S == 125 && p++ == 0 && _x() == 125)
            continue;
        }
        switch (A += ra(S), S * p) {
          // &
          case 38:
            E = f > 0 ? 1 : (A += "\f", -1);
            break;
          // ,
          case 44:
            a[u++] = (It(A) - 1) * E, E = 1;
            break;
          // @
          case 64:
            Gt() === 45 && (A += wi(wt())), l = Gt(), f = d = It(m = A += kx(io())), S++;
            break;
          // -
          case 45:
            g === 45 && It(A) == 2 && (p = 0);
        }
    }
  return i;
}
function oc(t, n, e, r, o, i, s, a, c, u, f, d) {
  for (var l = o - 1, y = o === 0 ? i : [""], g = wx(y), p = 0, h = 0, E = 0; p < r; ++p)
    for (var S = 0, m = Vn(t, l + 1, l = xu(h = s[p])), C = t; S < g; ++S)
      (C = pu(h > 0 ? y[S] + " " + m : oo(m, /&\f/g, y[S]))) && (c[E++] = C);
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
      if (!It(t.value = t.props.join(","))) return "";
  }
  return It(e = rs(t.children, r)) ? t.return = t.value + "{" + e + "}" : "";
}
function gu(t, n) {
  var e = n.path, r = n.parentSelectors;
  Qt(!1, "[Ant Design CSS-in-JS] ".concat(e ? "Error in ".concat(e, ": ") : "").concat(t).concat(r.length ? " Selector: ".concat(r.join(" | ")) : ""));
}
var jx = function(n, e, r) {
  if (n === "content") {
    var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, i = ["normal", "none", "initial", "inherit", "unset"];
    (typeof e != "string" || i.indexOf(e) === -1 && !o.test(e) && (e.charAt(0) !== e.charAt(e.length - 1) || e.charAt(0) !== '"' && e.charAt(0) !== "'")) && gu("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(e, "\"'`."), r);
  }
}, Mx = function(n, e, r) {
  n === "animation" && r.hashId && e !== "none" && gu("You seem to be using hashed animation '".concat(e, "', in which case 'animationName' with Keyframe as value is recommended."), r);
}, sc = "data-ant-cssinjs-cache-path", vu = "_FILE_STYLE__", bn, yu = !0;
function Lx() {
  if (!bn && (bn = {}, Ut())) {
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
function Dx(t) {
  return Lx(), !!bn[t];
}
function Bx(t) {
  var n = bn[t], e = null;
  if (n && Ut())
    if (yu)
      e = vu;
    else {
      var r = document.querySelector("style[".concat(St, '="').concat(bn[t], '"]'));
      r ? e = r.innerHTML : delete bn[t];
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
    return u = "".concat(f).concat(o).concat(u.slice(f.length)), [u].concat(Ht(c.slice(1))).join(" ");
  });
  return i.join(",");
}
var zx = function t(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = r.root, i = r.injectHash, s = r.parentSelectors, a = e.hashId, c = e.layer, u = e.path, f = e.hashPriority, d = e.transformers, l = d === void 0 ? [] : d, y = e.linters, g = y === void 0 ? [] : y, p = "", h = {};
  function E(C) {
    var b = C.getName(a);
    if (!h[b]) {
      var R = t(C.style, e, {
        root: !1,
        parentSelectors: s
      }), A = ce(R, 1), N = A[0];
      h[b] = "@keyframes ".concat(C.getName(a)).concat(N);
    }
  }
  function S(C) {
    var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return C.forEach(function(R) {
      Array.isArray(R) ? S(R, b) : R && b.push(R);
    }), b;
  }
  var m = S(Array.isArray(n) ? n : [n]);
  return m.forEach(function(C) {
    var b = typeof C == "string" && !o ? {} : C;
    if (typeof b == "string")
      p += "".concat(b, `
`);
    else if (b._keyframe)
      E(b);
    else {
      var R = l.reduce(function(A, N) {
        var z;
        return (N == null || (z = N.visit) === null || z === void 0 ? void 0 : z.call(N, A)) || A;
      }, b);
      Object.keys(R).forEach(function(A) {
        var N = R[A];
        if (_e(N) === "object" && N && (A !== "animationName" || !N._keyframe) && !Fx(N)) {
          var z = !1, Y = A.trim(), ne = !1;
          (o || i) && a ? Y.startsWith("@") ? z = !0 : Y === "&" ? Y = ac("", a, f) : Y = ac(A, a, f) : o && !a && (Y === "&" || Y === "") && (Y = "", ne = !0);
          var K = t(N, e, {
            root: ne,
            injectHash: z,
            parentSelectors: [].concat(Ht(s), [Y])
          }), B = ce(K, 2), H = B[0], X = B[1];
          h = V(V({}, h), X), p += "".concat(Y).concat(H);
        } else {
          let Z = function(Q, oe) {
            process.env.NODE_ENV !== "production" && (_e(N) !== "object" || !(N != null && N[bu])) && [jx, Mx].concat(Ht(g)).forEach(function(re) {
              return re(Q, oe, {
                path: u,
                hashId: a,
                parentSelectors: s
              });
            });
            var ie = Q.replace(/[A-Z]/g, function(re) {
              return "-".concat(re.toLowerCase());
            }), J = oe;
            !mx[Q] && typeof J == "number" && J !== 0 && (J = "".concat(J, "px")), Q === "animationName" && oe !== null && oe !== void 0 && oe._keyframe && (E(oe), J = oe.getName(a)), p += "".concat(ie, ":").concat(J, ";");
          };
          var $, ee = ($ = N == null ? void 0 : N.value) !== null && $ !== void 0 ? $ : N;
          _e(N) === "object" && N !== null && N !== void 0 && N[Su] && Array.isArray(ee) ? ee.forEach(function(Q) {
            Z(A, Q);
          }) : Z(A, ee);
        }
      });
    }
  }), o ? c && (p && (p = "@layer ".concat(c.name, " {").concat(p, "}")), c.dependencies && (h["@layer ".concat(c.name)] = c.dependencies.map(function(C) {
    return "@layer ".concat(C, ", ").concat(c.name, ";");
  }).join(`
`))) : p = "{".concat(p, "}"), [p, h];
};
function wu(t, n) {
  return pr("".concat(t.join("%")).concat(n));
}
function Vx() {
  return null;
}
var Eu = "style";
function os(t, n) {
  var e = t.token, r = t.path, o = t.hashId, i = t.layer, s = t.nonce, a = t.clientOnly, c = t.order, u = c === void 0 ? 0 : c, f = _.useContext(Cr), d = f.autoClear, l = f.mock, y = f.defaultCache, g = f.hashPriority, p = f.container, h = f.ssrInline, E = f.transformers, S = f.linters, m = f.cache, C = f.layer, b = e._tokenKey, R = [b];
  C && R.push("layer"), R.push.apply(R, Ht(r));
  var A = es;
  process.env.NODE_ENV !== "production" && l !== void 0 && (A = l === "client");
  var N = na(
    Eu,
    R,
    // Create cache if needed
    function() {
      var B = R.join("|");
      if (Dx(B)) {
        var H = Bx(B), X = ce(H, 2), $ = X[0], ee = X[1];
        if ($)
          return [$, b, ee, {}, a, u];
      }
      var Z = n(), Q = zx(Z, {
        hashId: o,
        hashPriority: g,
        layer: C ? i : void 0,
        path: r.join("-"),
        transformers: E,
        linters: S
      }), oe = ce(Q, 2), ie = oe[0], J = oe[1], re = ao(ie), he = wu(R, re);
      return [re, b, he, J, a, u];
    },
    // Remove cache if no need
    function(B, H) {
      var X = ce(B, 3), $ = X[2];
      (H || d) && es && su($, {
        mark: St
      });
    },
    // Effect: Inject style here
    function(B) {
      var H = ce(B, 4), X = H[0];
      H[1];
      var $ = H[2], ee = H[3];
      if (A && X !== vu) {
        var Z = {
          mark: St,
          prepend: C ? !1 : "queue",
          attachTo: p,
          priority: u
        }, Q = typeof s == "function" ? s() : s;
        Q && (Z.csp = {
          nonce: Q
        });
        var oe = [], ie = [];
        Object.keys(ee).forEach(function(re) {
          re.startsWith("@layer") ? oe.push(re) : ie.push(re);
        }), oe.forEach(function(re) {
          yn(ao(ee[re]), "_layer-".concat(re), V(V({}, Z), {}, {
            prepend: !0
          }));
        });
        var J = yn(X, $, Z);
        J[$t] = m.instanceId, J.setAttribute(zn, b), process.env.NODE_ENV !== "production" && J.setAttribute(Uh, R.join("|")), ie.forEach(function(re) {
          yn(ao(ee[re]), "_effect-".concat(re), Z);
        });
      }
    }
  ), z = ce(N, 3), Y = z[0], ne = z[1], K = z[2];
  return function(B) {
    var H;
    if (!h || A || !y)
      H = /* @__PURE__ */ _.createElement(Vx, null);
    else {
      var X;
      H = /* @__PURE__ */ _.createElement("style", Lt({}, (X = {}, W(X, zn, ne), W(X, St, K), X), {
        dangerouslySetInnerHTML: {
          __html: Y
        }
      }));
    }
    return /* @__PURE__ */ _.createElement(_.Fragment, null, H, B);
  };
}
var Hx = function(n, e, r) {
  var o = ce(n, 6), i = o[0], s = o[1], a = o[2], c = o[3], u = o[4], f = o[5], d = r || {}, l = d.plain;
  if (u)
    return null;
  var y = i, g = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(f)
  };
  return y = wo(i, s, a, g, l), c && Object.keys(c).forEach(function(p) {
    if (!e[p]) {
      e[p] = !0;
      var h = ao(c[p]), E = wo(h, s, "_effect-".concat(p), g, l);
      p.startsWith("@layer") ? y = E + y : y += E;
    }
  }), [f, a, y];
}, _u = "cssVar", Ux = function(n, e) {
  var r = n.key, o = n.prefix, i = n.unitless, s = n.ignore, a = n.token, c = n.scope, u = c === void 0 ? "" : c, f = Zt(Cr), d = f.cache.instanceId, l = f.container, y = a._tokenKey, g = [].concat(Ht(n.path), [r, u, y]), p = na(_u, g, function() {
    var h = e(), E = cu(h, r, {
      prefix: o,
      unitless: i,
      ignore: s,
      scope: u
    }), S = ce(E, 2), m = S[0], C = S[1], b = wu(g, C);
    return [m, C, b, r];
  }, function(h) {
    var E = ce(h, 3), S = E[2];
    es && su(S, {
      mark: St
    });
  }, function(h) {
    var E = ce(h, 3), S = E[1], m = E[2];
    if (S) {
      var C = yn(S, m, {
        mark: St,
        prepend: "queue",
        attachTo: l,
        priority: -999
      });
      C[$t] = d, C.setAttribute(zn, r);
    }
  });
  return p;
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
or = {}, W(or, Eu, Hx), W(or, uu, px), W(or, _u, qx);
var Cu = /* @__PURE__ */ function() {
  function t(n, e) {
    _t(this, t), W(this, "name", void 0), W(this, "style", void 0), W(this, "_keyframe", !0), this.name = n, this.style = e;
  }
  return Ct(t, [{
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
  return !t && typeof i == "number" ? a = [] : Array.isArray(t) ? a = Ht(t) : a = V({}, t), r && e === void 0 && s.length === 1 ? delete a[i][s[0]] : a[i] = Au(a[i], s, e, r), a;
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
            i([].concat(Ht(s), [l]), c);
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
let zt = null;
function Gx() {
  zt = null, ql();
}
let sa = Tu;
process.env.NODE_ENV !== "production" && (sa = (t, n, e) => {
  Qt(t, `[antd: ${n}] ${e}`), process.env.NODE_ENV === "test" && Gx();
});
const Ou = /* @__PURE__ */ _.createContext({}), Gn = process.env.NODE_ENV !== "production" ? (t) => {
  const {
    strict: n
  } = _.useContext(Ou), e = (r, o, i) => {
    if (!r)
      if (n === !1 && o === "deprecated") {
        const s = zt;
        zt || (zt = {}), zt[t] = zt[t] || [], zt[t].includes(i || "") || zt[t].push(i || ""), s || console.warn("[antd] There exists deprecated usage in your code:", zt);
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
}), $e = Math.round;
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
    W(this, "isValid", !0), W(this, "r", 0), W(this, "g", 0), W(this, "b", 0), W(this, "a", 1), W(this, "_h", void 0), W(this, "_s", void 0), W(this, "_l", void 0), W(this, "_v", void 0), W(this, "_max", void 0), W(this, "_min", void 0), W(this, "_brightness", void 0);
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
      n === 0 ? this._h = 0 : this._h = $e(60 * (this.r === this.getMax() ? (this.g - this.b) / n + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / n + 2 : (this.r - this.g) / n + 4));
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
      r: $e(i("r")),
      g: $e(i("g")),
      b: $e(i("b")),
      a: $e(i("a") * 100) / 100
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
    const e = this._c(n), r = this.a + e.a * (1 - this.a), o = (i) => $e((this[i] * this.a + e[i] * e.a * (1 - this.a)) / r);
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
      const i = $e(this.a * 255).toString(16);
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
    const n = this.getHue(), e = $e(this.getSaturation() * 100), r = $e(this.getLightness() * 100);
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
      const l = $e(r * 255);
      this.r = l, this.g = l, this.b = l;
    }
    let i = 0, s = 0, a = 0;
    const c = n / 60, u = (1 - Math.abs(2 * r - 1)) * e, f = u * (1 - Math.abs(c % 2 - 1));
    c >= 0 && c < 1 ? (i = u, s = f) : c >= 1 && c < 2 ? (i = f, s = u) : c >= 2 && c < 3 ? (s = u, a = f) : c >= 3 && c < 4 ? (s = f, a = u) : c >= 4 && c < 5 ? (i = f, a = u) : c >= 5 && c < 6 && (i = u, a = f);
    const d = r - u / 2;
    this.r = $e((i + d) * 255), this.g = $e((s + d) * 255), this.b = $e((a + d) * 255);
  }
  fromHsv({
    h: n,
    s: e,
    v: r,
    a: o
  }) {
    this._h = n % 360, this._s = e, this._v = r, this.a = typeof o == "number" ? o : 1;
    const i = $e(r * 255);
    if (this.r = i, this.g = i, this.b = i, e <= 0)
      return;
    const s = n / 60, a = Math.floor(s), c = s - a, u = $e(r * (1 - e) * 255), f = $e(r * (1 - e * c) * 255), d = $e(r * (1 - e * (1 - c)) * 255);
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
      o.includes("%") ? $e(r / 100 * 255) : r
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
  } = t, d = e(c), l = e(o), y = e(i), g = e(s), p = e(a), h = r(u, f), E = t.colorLink || t.colorInfo, S = e(E), m = new Be(g[1]).mix(new Be(g[3]), 50).toHexString();
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
    colorWarningBg: y[1],
    colorWarningBgHover: y[2],
    colorWarningBorder: y[3],
    colorWarningBorderHover: y[4],
    colorWarningHover: y[4],
    colorWarning: y[6],
    colorWarningActive: y[7],
    colorWarningTextHover: y[8],
    colorWarningText: y[9],
    colorWarningTextActive: y[10],
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
const dt = (t, n) => new Be(t).setA(n).toRgbString(), sr = (t, n) => new Be(t).darken(n).toHexString(), up = (t) => {
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
const Mu = Qi(dp), vs = {
  token: vr,
  override: {
    override: vr
  },
  hashed: !0
}, Lu = /* @__PURE__ */ Fe.createContext(vs), ys = "ant", aa = "anticon", hp = (t, n) => n || (t ? `${ys}-${t}` : ys), Jt = /* @__PURE__ */ _.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: hp,
  iconPrefixCls: aa
}), {
  Consumer: Av
} = Jt, pc = {};
function Du(t) {
  const n = _.useContext(Jt), {
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
  Ut() ? yn(e, `${xp}-dynamic-theme`) : process.env.NODE_ENV !== "production" && Jo(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
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
  const t = Zt(bs), n = Zt(br);
  return {
    componentDisabled: t,
    componentSize: n
  };
}
var Bu = /* @__PURE__ */ Ct(function t() {
  _t(this, t);
}), Fu = "CALC_UNIT", bp = new RegExp(Fu, "g");
function Ti(t) {
  return typeof t == "number" ? "".concat(t).concat(Fu) : t;
}
var Sp = /* @__PURE__ */ function(t) {
  _r(e, t);
  var n = Yo(e);
  function e(r, o) {
    var i;
    _t(this, e), i = n.call(this), W(vn(i), "result", ""), W(vn(i), "unitlessCssVar", void 0), W(vn(i), "lowPriority", void 0);
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
}(Bu), wp = /* @__PURE__ */ function(t) {
  _r(e, t);
  var n = Yo(e);
  function e(r) {
    var o;
    return _t(this, e), o = n.call(this), W(vn(o), "result", 0), r instanceof e ? o.result = r.result : typeof r == "number" && (o.result = r), o;
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
      if (process.env.NODE_ENV !== "production" && Qt(!(o != null && o[u]), "Component Token `".concat(String(u), "` of ").concat(String(t), " is deprecated. Please use `").concat(String(f), "` instead.")), o != null && o[u] || o != null && o[f]) {
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
    _t(this, t), W(this, "map", /* @__PURE__ */ new Map()), W(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), W(this, "nextID", 0), W(this, "lastAccessBeat", /* @__PURE__ */ new Map()), W(this, "accessBeat", 0);
  }
  return Ct(t, [{
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
  function c(l, y, g, p) {
    var h = Array.isArray(l) ? l[0] : l;
    function E(N) {
      return "".concat(String(h)).concat(N.slice(0, 1).toUpperCase()).concat(N.slice(1));
    }
    var S = (p == null ? void 0 : p.unitless) || {}, m = typeof a == "function" ? a(l) : {}, C = V(V({}, m), {}, W({}, E("zIndexPopup"), !0));
    Object.keys(S).forEach(function(N) {
      C[E(N)] = S[N];
    });
    var b = V(V({}, p), {}, {
      unitless: C,
      prefixToken: E
    }), R = f(l, y, g, b), A = u(h, g, b);
    return function(N) {
      var z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : N, Y = R(N, z), ne = ce(Y, 2), K = ne[1], B = A(z), H = ce(B, 2), X = H[0], $ = H[1];
      return [X, K, $];
    };
  }
  function u(l, y, g) {
    var p = g.unitless, h = g.injectStyle, E = h === void 0 ? !0 : h, S = g.prefixToken, m = g.ignore, C = function(A) {
      var N = A.rootCls, z = A.cssVar, Y = z === void 0 ? {} : z, ne = r(), K = ne.realToken;
      return Ux({
        path: [l],
        prefix: Y.prefix,
        key: Y.key,
        unitless: p,
        ignore: m,
        token: K,
        scope: N
      }, function() {
        var B = yc(l, K, y), H = gc(l, K, B, {
          deprecatedTokens: g == null ? void 0 : g.deprecatedTokens
        });
        return Object.keys(B).forEach(function(X) {
          H[S(X)] = H[X], delete H[X];
        }), H;
      }), null;
    }, b = function(A) {
      var N = r(), z = N.cssVar;
      return [function(Y) {
        return E && z ? /* @__PURE__ */ Fe.createElement(Fe.Fragment, null, /* @__PURE__ */ Fe.createElement(C, {
          rootCls: A,
          cssVar: z,
          component: l
        }), Y) : Y;
      }, z == null ? void 0 : z.key];
    };
    return b;
  }
  function f(l, y, g) {
    var p = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, h = Array.isArray(l) ? l : [l, l], E = ce(h, 1), S = E[0], m = h.join("-"), C = t.layer || {
      name: "antd"
    };
    return function(b) {
      var R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : b, A = r(), N = A.theme, z = A.realToken, Y = A.hashId, ne = A.token, K = A.cssVar, B = o(), H = B.rootPrefixCls, X = B.iconPrefixCls, $ = e(), ee = K ? "css" : "js", Z = Rp(function() {
        var he = /* @__PURE__ */ new Set();
        return K && Object.keys(p.unitless || {}).forEach(function(fe) {
          he.add(ro(fe, K.prefix)), he.add(ro(fe, mc(S, K.prefix)));
        }), Ep(ee, he);
      }, [ee, S, K == null ? void 0 : K.prefix]), Q = Ap(ee), oe = Q.max, ie = Q.min, J = {
        theme: N,
        token: ne,
        hashId: Y,
        nonce: function() {
          return $.nonce;
        },
        clientOnly: p.clientOnly,
        layer: C,
        // antd is always at top of styles
        order: p.order || -999
      };
      typeof i == "function" && os(V(V({}, J), {}, {
        clientOnly: !1,
        path: ["Shared", H]
      }), function() {
        return i(ne, {
          prefix: {
            rootPrefixCls: H,
            iconPrefixCls: X
          },
          csp: $
        });
      });
      var re = os(V(V({}, J), {}, {
        path: [m, b, X]
      }), function() {
        if (p.injectStyle === !1)
          return [];
        var he = Cp(ne), fe = he.token, xe = he.flush, ge = yc(S, z, g), j = ".".concat(b), M = gc(S, z, ge, {
          deprecatedTokens: p.deprecatedTokens
        });
        K && ge && _e(ge) === "object" && Object.keys(ge).forEach(function(D) {
          ge[D] = "var(".concat(ro(D, mc(S, K.prefix)), ")");
        });
        var T = ei(fe, {
          componentCls: j,
          prefixCls: b,
          iconCls: ".".concat(X),
          antCls: ".".concat(H),
          calc: Z,
          // @ts-ignore
          max: oe,
          // @ts-ignore
          min: ie
        }, K ? ge : M), P = y(T, {
          hashId: Y,
          prefixCls: b,
          rootPrefixCls: H,
          iconPrefixCls: X
        });
        xe(S, M);
        var w = typeof s == "function" ? s(T, b, R, p.resetFont) : null;
        return [p.resetStyle === !1 ? null : w, P];
      });
      return [re, Y];
    };
  }
  function d(l, y, g) {
    var p = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, h = f(l, y, g, V({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, p)), E = function(m) {
      var C = m.prefixCls, b = m.rootCls, R = b === void 0 ? C : b;
      return h(C, R), null;
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
  } = Fe.useContext(Lu), i = `${Ip}-${n || ""}`, s = e || Mu, [a, c, u] = xx(s, [vr, t], {
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
  [`.${t}`]: Object.assign(Object.assign({}, Lp()), {
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
    } = Zt(Jt);
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
    } = Zt(Jt);
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
    const l = `css-var-${c.replace(/:/g, "")}`, y = ((u = s.cssVar) !== null && u !== void 0 ? u : a.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: e == null ? void 0 : e.prefixCls
    }, typeof a.cssVar == "object" ? a.cssVar : {}), typeof s.cssVar == "object" ? s.cssVar : {}), {
      key: typeof s.cssVar == "object" && ((f = s.cssVar) === null || f === void 0 ? void 0 : f.key) || l
    });
    return Object.assign(Object.assign(Object.assign({}, a), s), {
      token: Object.assign(Object.assign({}, a.token), s.token),
      components: d,
      cssVar: y
    });
  }, [s, a], (u, f) => u.some((d, l) => {
    const y = f[l];
    return !zh(d, y, !0);
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
    return _t(this, e), n.apply(this, arguments);
  }
  return Ct(e, [{
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
var Yt = "none", Hr = "appear", Ur = "enter", qr = "leave", Ec = "none", vt = "prepare", Rn = "start", kn = "active", ua = "end", Yu = "prepared";
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
var Gp = $p(Ut(), typeof window < "u" ? window : {}), $u = {};
if (Ut()) {
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
  var n = Xe();
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
var Qu = Ut() ? r0 : ot;
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
var Qp = [vt, Rn, kn, ua], e1 = [vt, Yu], ef = !1, t1 = !0;
function tf(t) {
  return t === kn || t === ua;
}
const n1 = function(t, n, e) {
  var r = ws(Ec), o = ce(r, 2), i = o[0], s = o[1], a = Jp(), c = ce(a, 2), u = c[0], f = c[1];
  function d() {
    s(vt, !0);
  }
  var l = n ? e1 : Qp;
  return Qu(function() {
    if (i !== Ec && i !== ua) {
      var y = l.indexOf(i), g = l[y + 1], p = e(i);
      p === ef ? s(g, !0) : g && u(function(h) {
        function E() {
          h.isCanceled() || s(g, !0);
        }
        p === !0 ? E() : Promise.resolve(p).then(E);
      });
    }
  }, [t, i]), _.useEffect(function() {
    return function() {
      f();
    };
  }, []), [d, i];
};
function r1(t, n, e, r) {
  var o = r.motionEnter, i = o === void 0 ? !0 : o, s = r.motionAppear, a = s === void 0 ? !0 : s, c = r.motionLeave, u = c === void 0 ? !0 : c, f = r.motionDeadline, d = r.motionLeaveImmediately, l = r.onAppearPrepare, y = r.onEnterPrepare, g = r.onLeavePrepare, p = r.onAppearStart, h = r.onEnterStart, E = r.onLeaveStart, S = r.onAppearActive, m = r.onEnterActive, C = r.onLeaveActive, b = r.onAppearEnd, R = r.onEnterEnd, A = r.onLeaveEnd, N = r.onVisibleChanged, z = ws(), Y = ce(z, 2), ne = Y[0], K = Y[1], B = Yp(Yt), H = ce(B, 2), X = H[0], $ = H[1], ee = ws(null), Z = ce(ee, 2), Q = Z[0], oe = Z[1], ie = X(), J = Xe(!1), re = Xe(null);
  function he() {
    return e();
  }
  var fe = Xe(!1);
  function xe() {
    $(Yt), oe(null, !0);
  }
  var ge = Ss(function(Le) {
    var Oe = X();
    if (Oe !== Yt) {
      var Ke = he();
      if (!(Le && !Le.deadline && Le.target !== Ke)) {
        var mt = fe.current, ft;
        Oe === Hr && mt ? ft = b == null ? void 0 : b(Ke, Le) : Oe === Ur && mt ? ft = R == null ? void 0 : R(Ke, Le) : Oe === qr && mt && (ft = A == null ? void 0 : A(Ke, Le)), mt && ft !== !1 && xe();
      }
    }
  }), j = Zp(ge), M = ce(j, 1), T = M[0], P = function(Oe) {
    switch (Oe) {
      case Hr:
        return W(W(W({}, vt, l), Rn, p), kn, S);
      case Ur:
        return W(W(W({}, vt, y), Rn, h), kn, m);
      case qr:
        return W(W(W({}, vt, g), Rn, E), kn, C);
      default:
        return {};
    }
  }, w = _.useMemo(function() {
    return P(ie);
  }, [ie]), D = n1(ie, !t, function(Le) {
    if (Le === vt) {
      var Oe = w[vt];
      return Oe ? Oe(he()) : ef;
    }
    if (ve in w) {
      var Ke;
      oe(((Ke = w[ve]) === null || Ke === void 0 ? void 0 : Ke.call(w, he(), null)) || null);
    }
    return ve === kn && ie !== Yt && (T(he()), f > 0 && (clearTimeout(re.current), re.current = setTimeout(function() {
      ge({
        deadline: !0
      });
    }, f))), ve === Yu && xe(), t1;
  }), F = ce(D, 2), ue = F[0], ve = F[1], Ce = tf(ve);
  fe.current = Ce;
  var Je = Xe(null);
  Qu(function() {
    if (!(J.current && Je.current === n)) {
      K(n);
      var Le = J.current;
      J.current = !0;
      var Oe;
      !Le && n && a && (Oe = Hr), Le && n && i && (Oe = Ur), (Le && !n && u || !Le && d && !n && u) && (Oe = qr);
      var Ke = P(Oe);
      Oe && (t || Ke[vt]) ? ($(Oe), ue()) : $(Yt), Je.current = n;
    }
  }, [n]), ot(function() {
    // Cancel appear
    (ie === Hr && !a || // Cancel enter
    ie === Ur && !i || // Cancel leave
    ie === qr && !u) && $(Yt);
  }, [a, i, u]), ot(function() {
    return function() {
      J.current = !1, clearTimeout(re.current);
    };
  }, []);
  var ct = _.useRef(!1);
  ot(function() {
    ne && (ct.current = !0), ne !== void 0 && ie === Yt && ((ct.current || ne) && (N == null || N(ne)), ct.current = !0);
  }, [ne, ie]);
  var Tt = Q;
  return w[vt] && ve === Rn && (Tt = V({
    transition: "none"
  }, Tt)), [ie, ve, Tt, ne ?? n];
}
function o1(t) {
  var n = t;
  _e(t) === "object" && (n = t.transitionSupport);
  function e(o, i) {
    return !!(o.motionName && n && i !== !1);
  }
  var r = /* @__PURE__ */ _.forwardRef(function(o, i) {
    var s = o.visible, a = s === void 0 ? !0 : s, c = o.removeOnLeave, u = c === void 0 ? !0 : c, f = o.forceRender, d = o.children, l = o.motionName, y = o.leavedClassName, g = o.eventProps, p = _.useContext(Xu), h = p.motion, E = e(o, h), S = Xe(), m = Xe();
    function C() {
      try {
        return S.current instanceof HTMLElement ? S.current : _h(m.current);
      } catch {
        return null;
      }
    }
    var b = r1(E, a, C, o), R = ce(b, 4), A = R[0], N = R[1], z = R[2], Y = R[3], ne = _.useRef(Y);
    Y && (ne.current = !0);
    var K = _.useCallback(function(Z) {
      S.current = Z, $l(i, Z);
    }, [i]), B, H = V(V({}, g), {}, {
      visible: a
    });
    if (!d)
      B = null;
    else if (A === Yt)
      Y ? B = d(V({}, H), K) : !u && ne.current && y ? B = d(V(V({}, H), {}, {
        className: y
      }), K) : f || !u && !y ? B = d(V(V({}, H), {}, {
        style: {
          display: "none"
        }
      }), K) : B = null;
    else {
      var X;
      N === vt ? X = "prepare" : tf(N) ? X = "active" : N === Rn && (X = "start");
      var $ = Tc(l, "".concat(A, "-").concat(X));
      B = d(V(V({}, H), {}, {
        className: et(Tc(l, A), W(W({}, $, $ && X), l, typeof l == "string")),
        style: z
      }), K);
    }
    if (/* @__PURE__ */ _.isValidElement(B) && kh(B)) {
      var ee = Ph(B);
      ee || (B = /* @__PURE__ */ _.cloneElement(B, {
        ref: K
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
        r < d && (e = e.concat(s.slice(r, d).map(function(y) {
          return V(V({}, y), {}, {
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
      _t(this, i);
      for (var a = arguments.length, c = new Array(a), u = 0; u < a; u++)
        c[u] = arguments[u];
      return s = o.call.apply(o, [this].concat(c)), W(vn(s), "state", {
        keyEntities: []
      }), W(vn(s), "removeKey", function(f) {
        s.setState(function(d) {
          var l = d.keyEntities.map(function(y) {
            return y.key !== f ? y : V(V({}, y), {}, {
              status: Ri
            });
          });
          return {
            keyEntities: l
          };
        }, function() {
          var d = s.state.keyEntities, l = d.filter(function(y) {
            var g = y.status;
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
        var y = mr(u, a1), g = f || _.Fragment, p = {};
        return l1.forEach(function(h) {
          p[h] = y[h], delete y[h];
        }), delete y.keys, /* @__PURE__ */ _.createElement(g, y, c.map(function(h, E) {
          var S = h.status, m = mr(h, c1), C = S === _s || S === Cs;
          return /* @__PURE__ */ _.createElement(n, Lt({}, p, {
            key: m.key,
            visible: C,
            eventProps: m,
            onVisibleChanged: function(R) {
              l == null || l(R, {
                key: m.key
              }), R || a.removeKey(m.key);
            }
          }), function(b, R) {
            return d(V(V({}, b), {}, {
              index: E
            }), R);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(a, c) {
        var u = a.keys, f = c.keyEntities, d = Ts(u), l = s1(f, d);
        return {
          keyEntities: l.filter(function(y) {
            var g = f.find(function(p) {
              var h = p.key;
              return y.key === h;
            });
            return !(g && g.status === Ri && y.status === As);
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
    dropdownMatchSelectWidth: y,
    popupMatchSelectWidth: g,
    popupOverflow: p,
    legacyLocale: h,
    parentContext: E,
    iconPrefixCls: S,
    theme: m,
    componentDisabled: C,
    segmented: b,
    statistic: R,
    spin: A,
    calendar: N,
    carousel: z,
    cascader: Y,
    collapse: ne,
    typography: K,
    checkbox: B,
    descriptions: H,
    divider: X,
    drawer: $,
    skeleton: ee,
    steps: Z,
    image: Q,
    layout: oe,
    list: ie,
    mentions: J,
    modal: re,
    progress: he,
    result: fe,
    slider: xe,
    breadcrumb: ge,
    menu: j,
    pagination: M,
    input: T,
    textArea: P,
    empty: w,
    badge: D,
    radio: F,
    rate: ue,
    switch: ve,
    transfer: Ce,
    avatar: Je,
    message: ct,
    tag: Tt,
    table: Le,
    card: Oe,
    tabs: Ke,
    timeline: mt,
    timePicker: ft,
    upload: tn,
    notification: nn,
    tree: _n,
    colorPicker: rn,
    datePicker: I,
    rangePicker: v,
    flex: pe,
    wave: ye,
    dropdown: Ae,
    warning: U,
    tour: ke,
    tooltip: Ye,
    popover: Ot,
    popconfirm: Dt,
    floatButtonGroup: lt,
    variant: on,
    inputNumber: sn,
    treeSelect: ze
  } = t, qe = _.useCallback((Ie, x) => {
    const {
      prefixCls: k
    } = t;
    if (x)
      return x;
    const L = k || E.getPrefixCls("");
    return Ie ? `${L}-${Ie}` : L;
  }, [E.getPrefixCls, t.prefixCls]), tt = S || E.iconPrefixCls || aa, Rt = e || E.csp;
  Fp(tt, Rt);
  const an = Up(m, E.theme, {
    prefixCls: qe("")
  });
  process.env.NODE_ENV !== "production" && (Os = Os || !!an);
  const Cn = {
    csp: Rt,
    autoInsertSpaceInButton: r,
    alert: o,
    anchor: i,
    locale: a || h,
    direction: u,
    space: f,
    splitter: d,
    virtual: l,
    popupMatchSelectWidth: g ?? y,
    popupOverflow: p,
    getPrefixCls: qe,
    iconPrefixCls: tt,
    theme: an,
    segmented: b,
    statistic: R,
    spin: A,
    calendar: N,
    carousel: z,
    cascader: Y,
    collapse: ne,
    typography: K,
    checkbox: B,
    descriptions: H,
    divider: X,
    drawer: $,
    skeleton: ee,
    steps: Z,
    image: Q,
    input: T,
    textArea: P,
    layout: oe,
    list: ie,
    mentions: J,
    modal: re,
    progress: he,
    result: fe,
    slider: xe,
    breadcrumb: ge,
    menu: j,
    pagination: M,
    empty: w,
    badge: D,
    radio: F,
    rate: ue,
    switch: ve,
    transfer: Ce,
    avatar: Je,
    message: ct,
    tag: Tt,
    table: Le,
    card: Oe,
    tabs: Ke,
    timeline: mt,
    timePicker: ft,
    upload: tn,
    notification: nn,
    tree: _n,
    colorPicker: rn,
    datePicker: I,
    rangePicker: v,
    flex: pe,
    wave: ye,
    dropdown: Ae,
    warning: U,
    tour: ke,
    tooltip: Ye,
    popover: Ot,
    popconfirm: Dt,
    floatButtonGroup: lt,
    variant: on,
    inputNumber: sn,
    treeSelect: ze
  };
  process.env.NODE_ENV !== "production" && Gn("ConfigProvider")(!("autoInsertSpaceInButton" in t), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const qt = Object.assign({}, E);
  Object.keys(Cn).forEach((Ie) => {
    Cn[Ie] !== void 0 && (qt[Ie] = Cn[Ie]);
  }), x1.forEach((Ie) => {
    const x = t[Ie];
    x && (qt[Ie] = x);
  }), typeof r < "u" && (qt.button = Object.assign({
    autoInsertSpace: r
  }, qt.button));
  const Wt = Yl(() => qt, qt, (Ie, x) => {
    const k = Object.keys(Ie), L = Object.keys(x);
    return k.length !== L.length || k.some((G) => Ie[G] !== x[G]);
  }), {
    layer: er
  } = _.useContext(Cr), Or = _.useMemo(() => ({
    prefixCls: tt,
    csp: Rt,
    layer: er ? "antd" : void 0
  }), [tt, Rt, er]);
  let We = /* @__PURE__ */ _.createElement(_.Fragment, null, /* @__PURE__ */ _.createElement(d1, {
    dropdownMatchSelectWidth: y
  }), n);
  const Rr = _.useMemo(() => {
    var Ie, x, k, L;
    return $x(((Ie = Qo.Form) === null || Ie === void 0 ? void 0 : Ie.defaultValidateMessages) || {}, ((k = (x = Wt.locale) === null || x === void 0 ? void 0 : x.Form) === null || k === void 0 ? void 0 : k.defaultValidateMessages) || {}, ((L = Wt.form) === null || L === void 0 ? void 0 : L.validateMessages) || {}, (s == null ? void 0 : s.validateMessages) || {});
  }, [Wt, s == null ? void 0 : s.validateMessages]);
  Object.keys(Rr).length > 0 && (We = /* @__PURE__ */ _.createElement(Kx.Provider, {
    value: Rr
  }, We)), a && (We = /* @__PURE__ */ _.createElement(Pu, {
    locale: a,
    _ANT_MARK__: ku
  }, We)), We = /* @__PURE__ */ _.createElement(ia.Provider, {
    value: Or
  }, We), c && (We = /* @__PURE__ */ _.createElement(vp, {
    size: c
  }, We)), We = /* @__PURE__ */ _.createElement(f1, null, We);
  const li = _.useMemo(() => {
    const Ie = an || {}, {
      algorithm: x,
      token: k,
      components: L,
      cssVar: G
    } = Ie, me = h1(Ie, ["algorithm", "token", "components", "cssVar"]), be = x && (!Array.isArray(x) || x.length > 0) ? Qi(x) : Mu, le = {};
    Object.entries(L || {}).forEach((Ze) => {
      let [Pe, Ne] = Ze;
      const je = Object.assign({}, Ne);
      "algorithm" in je && (je.algorithm === !0 ? je.theme = be : (Array.isArray(je.algorithm) || typeof je.algorithm == "function") && (je.theme = Qi(je.algorithm)), delete je.algorithm), le[Pe] = je;
    });
    const ae = Object.assign(Object.assign({}, vr), k);
    return Object.assign(Object.assign({}, me), {
      theme: be,
      token: ae,
      components: le,
      override: Object.assign({
        override: ae
      }, le),
      cssVar: G
    });
  }, [an]);
  return m && (We = /* @__PURE__ */ _.createElement(Lu.Provider, {
    value: li
  }, We)), Wt.warning && (We = /* @__PURE__ */ _.createElement(Ou.Provider, {
    value: Wt.warning
  }, We)), C !== void 0 && (We = /* @__PURE__ */ _.createElement(gp, {
    disabled: C
  }, We)), /* @__PURE__ */ _.createElement(Jt.Provider, {
    value: Wt
  }, We);
}, Kn = (t) => {
  const n = _.useContext(Jt), e = _.useContext(Ru);
  return /* @__PURE__ */ _.createElement(v1, Object.assign({
    parentContext: n,
    legacyLocale: e
  }, t));
};
Kn.ConfigContext = Jt;
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
  Qt(t, "[@ant-design/icons] ".concat(n));
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
  var e = Zt(ia), r = e.csp, o = e.prefixCls, i = e.layer, s = _1;
  o && (s = s.replace(/anticon/g, o)), i && (s = "@layer ".concat(i, ` {
`).concat(s, `
}`)), ot(function() {
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
var en = /* @__PURE__ */ _.forwardRef(function(t, n) {
  var e = t.className, r = t.icon, o = t.spin, i = t.rotate, s = t.tabIndex, a = t.onClick, c = t.twoToneColor, u = mr(t, k1), f = _.useContext(ia), d = f.prefixCls, l = d === void 0 ? "anticon" : d, y = f.rootClassName, g = et(y, l, W(W({}, "".concat(l, "-").concat(r.name), !!r.name), "".concat(l, "-spin"), !!o || r.name === "loading"), e), p = s;
  p === void 0 && a && (p = -1);
  var h = i ? {
    msTransform: "rotate(".concat(i, "deg)"),
    transform: "rotate(".concat(i, "deg)")
  } : void 0, E = cf(c), S = ce(E, 2), m = S[0], C = S[1];
  return /* @__PURE__ */ _.createElement("span", Lt({
    role: "img",
    "aria-label": r.name
  }, u, {
    ref: n,
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
en.displayName = "AntdIcon";
en.getTwoToneColor = R1;
en.setTwoToneColor = lf;
var P1 = function(n, e) {
  return /* @__PURE__ */ _.createElement(en, Lt({}, n, {
    ref: e,
    icon: y1
  }));
}, uf = /* @__PURE__ */ _.forwardRef(P1);
process.env.NODE_ENV !== "production" && (uf.displayName = "CheckCircleFilled");
var I1 = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, N1 = function(n, e) {
  return /* @__PURE__ */ _.createElement(en, Lt({}, n, {
    ref: e,
    icon: I1
  }));
}, ff = /* @__PURE__ */ _.forwardRef(N1);
process.env.NODE_ENV !== "production" && (ff.displayName = "CloseCircleFilled");
var j1 = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, M1 = function(n, e) {
  return /* @__PURE__ */ _.createElement(en, Lt({}, n, {
    ref: e,
    icon: j1
  }));
}, df = /* @__PURE__ */ _.forwardRef(M1);
process.env.NODE_ENV !== "production" && (df.displayName = "CloseOutlined");
var L1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" }, D1 = function(n, e) {
  return /* @__PURE__ */ _.createElement(en, Lt({}, n, {
    ref: e,
    icon: L1
  }));
}, hf = /* @__PURE__ */ _.forwardRef(D1);
process.env.NODE_ENV !== "production" && (hf.displayName = "ExclamationCircleFilled");
var B1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" }, F1 = function(n, e) {
  return /* @__PURE__ */ _.createElement(en, Lt({}, n, {
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
    withDescriptionPadding: y,
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
      padding: y,
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
    colorInfoBg: y
  } = t;
  return {
    [n]: {
      "&-success": Xr(o, r, e, t, n),
      "&-info": Xr(y, l, d, t, n),
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
    className: et(`${e}-icon`, n.props.className)
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
    showIcon: y,
    closable: g,
    closeText: p,
    closeIcon: h,
    action: E,
    id: S
  } = t, m = Pc(t, ["description", "prefixCls", "message", "banner", "className", "rootClassName", "style", "onMouseEnter", "onMouseLeave", "onClick", "afterClose", "showIcon", "closable", "closeText", "closeIcon", "action", "id"]), [C, b] = _.useState(!1);
  process.env.NODE_ENV !== "production" && Gn("Alert").deprecated(!p, "closeText", "closable.closeIcon");
  const R = _.useRef(null);
  _.useImperativeHandle(n, () => ({
    nativeElement: R.current
  }));
  const {
    getPrefixCls: A,
    direction: N,
    closable: z,
    closeIcon: Y,
    className: ne,
    style: K
  } = Du("alert"), B = A("alert", r), [H, X, $] = Z1(B), ee = (fe) => {
    var xe;
    b(!0), (xe = t.onClose) === null || xe === void 0 || xe.call(t, fe);
  }, Z = _.useMemo(() => t.type !== void 0 ? t.type : i ? "warning" : "info", [t.type, i]), Q = _.useMemo(() => typeof g == "object" && g.closeIcon || p ? !0 : typeof g == "boolean" ? g : h !== !1 && h !== null && h !== void 0 ? !0 : !!z, [p, h, g, z]), oe = i && y === void 0 ? !0 : y, ie = et(B, `${B}-${Z}`, {
    [`${B}-with-description`]: !!e,
    [`${B}-no-icon`]: !oe,
    [`${B}-banner`]: !!i,
    [`${B}-rtl`]: N === "rtl"
  }, ne, s, a, $, X), J = W1(m, {
    aria: !0,
    data: !0
  }), re = _.useMemo(() => typeof g == "object" && g.closeIcon ? g.closeIcon : p || (h !== void 0 ? h : typeof z == "object" && z.closeIcon ? z.closeIcon : Y), [h, g, p, Y]), he = _.useMemo(() => {
    const fe = g ?? z;
    if (typeof fe == "object") {
      const {
        closeIcon: xe
      } = fe;
      return Pc(fe, ["closeIcon"]);
    }
    return {};
  }, [g, z]);
  return H(/* @__PURE__ */ _.createElement(nf, {
    visible: !C,
    motionName: `${B}-motion`,
    motionAppear: !1,
    motionEnter: !1,
    onLeaveStart: (fe) => ({
      maxHeight: fe.offsetHeight
    }),
    onLeaveEnd: l
  }, (fe, xe) => {
    let {
      className: ge,
      style: j
    } = fe;
    return /* @__PURE__ */ _.createElement("div", Object.assign({
      id: S,
      ref: Rh(R, xe),
      "data-show": !C,
      className: et(ie, ge),
      style: Object.assign(Object.assign(Object.assign({}, K), c), j),
      onMouseEnter: u,
      onMouseLeave: f,
      onClick: d,
      role: "alert"
    }, J), oe ? /* @__PURE__ */ _.createElement(Q1, {
      description: e,
      icon: t.icon,
      prefixCls: B,
      type: Z
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
      closeIcon: re,
      handleClose: ee,
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
    return _t(this, n), e = tm(this, n, arguments), e.state = {
      error: void 0,
      info: {
        componentStack: ""
      }
    }, e;
  }
  return _r(n, t), Ct(n, [{
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
  function y() {
    f && clearTimeout(f);
  }
  function g(h) {
    var E = h || {}, S = E.upcomingOnly, m = S === void 0 ? !1 : S;
    y(), d = !m;
  }
  function p() {
    for (var h = arguments.length, E = new Array(h), S = 0; S < h; S++)
      E[S] = arguments[S];
    var m = this, C = Date.now() - l;
    if (d)
      return;
    function b() {
      l = Date.now(), n.apply(m, E);
    }
    function R() {
      f = void 0;
    }
    !a && u && !f && b(), y(), u === void 0 && C > t ? a ? (l = Date.now(), i || (f = setTimeout(u ? R : b, t))) : b() : i !== !0 && (f = setTimeout(u ? R : b, u === void 0 ? t - C : t));
  }
  return p.cancel = g, p;
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
  return et(Object.assign(Object.assign(Object.assign({}, sm(t, n)), am(t, n)), cm(t, n)));
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
    direction: y,
    getPrefixCls: g
  } = Fe.useContext(Jt), p = g("flex", e), [h, E, S] = mm(p), m = u ?? (l == null ? void 0 : l.vertical), C = et(o, r, l == null ? void 0 : l.className, p, E, S, lm(p, t), {
    [`${p}-rtl`]: y === "rtl",
    [`${p}-gap-${a}`]: Ic(a),
    [`${p}-vertical`]: m
  }), b = Object.assign(Object.assign({}, l == null ? void 0 : l.style), i);
  return s && (b.flex = s), a && !Ic(a) && (b.gap = a), h(/* @__PURE__ */ Fe.createElement(f, Object.assign({
    ref: n,
    className: C,
    style: b
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
    className: et(`${n}-circle`, {
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
    className: et(o, `${r}-progress`, c <= 0 && i)
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
    className: et(o, e > 0 && i)
  }, /* @__PURE__ */ _.createElement("span", {
    className: et(r, `${n}-dot-spin`)
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
    className: et(e.props.className, o),
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
}, _m), Am = 200, Mc = [[30, 0.05], [70, 0.03], [96, 0.01]];
function Tm(t, n) {
  const [e, r] = _.useState(0), o = _.useRef(null), i = n === "auto";
  return _.useEffect(() => (i && t && (r(0), o.current = setInterval(() => {
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
    indicator: y,
    percent: g
  } = t, p = Om(t, ["prefixCls", "spinning", "delay", "className", "rootClassName", "size", "tip", "wrapperClassName", "style", "children", "fullscreen", "indicator", "percent"]), {
    getPrefixCls: h,
    direction: E,
    className: S,
    style: m,
    indicator: C
  } = Du("spin"), b = h("spin", e), [R, A, N] = Cm(b), [z, Y] = _.useState(() => r && !Rm(r, o)), ne = Tm(z, g);
  _.useEffect(() => {
    if (r) {
      const Z = im(o, () => {
        Y(!0);
      });
      return Z(), () => {
        var Q;
        (Q = Z == null ? void 0 : Z.cancel) === null || Q === void 0 || Q.call(Z);
      };
    }
    Y(!1);
  }, [o, r]);
  const K = _.useMemo(() => typeof d < "u" && !l, [d, l]);
  if (process.env.NODE_ENV !== "production") {
    const Z = Gn("Spin");
    process.env.NODE_ENV !== "production" && Z(!c || K || l, "usage", "`tip` only work in nest or fullscreen pattern.");
  }
  const B = et(b, S, {
    [`${b}-sm`]: a === "small",
    [`${b}-lg`]: a === "large",
    [`${b}-spinning`]: z,
    [`${b}-show-text`]: !!c,
    [`${b}-rtl`]: E === "rtl"
  }, i, !l && s, A, N), H = et(`${b}-container`, {
    [`${b}-blur`]: z
  }), X = (n = y ?? C) !== null && n !== void 0 ? n : Ef, $ = Object.assign(Object.assign({}, m), f), ee = /* @__PURE__ */ _.createElement("div", Object.assign({}, p, {
    style: $,
    className: B,
    "aria-live": "polite",
    "aria-busy": z
  }), /* @__PURE__ */ _.createElement(bm, {
    prefixCls: b,
    indicator: X,
    percent: ne
  }), c && (K || l) ? /* @__PURE__ */ _.createElement("div", {
    className: `${b}-text`
  }, c) : null);
  return R(K ? /* @__PURE__ */ _.createElement("div", Object.assign({}, p, {
    className: et(`${b}-nested-loading`, u, A, N)
  }), z && /* @__PURE__ */ _.createElement("div", {
    key: "loading"
  }, ee), /* @__PURE__ */ _.createElement("div", {
    className: H,
    key: "container"
  }, d)) : l ? /* @__PURE__ */ _.createElement("div", {
    className: et(`${b}-fullscreen`, {
      [`${b}-fullscreen-show`]: z
    }, s, A, N)
  }, ee) : ee);
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
})(/* @__PURE__ */ Object.create(null)), At = (t) => (t = t.toLowerCase(), (n) => ni(n) === t), ri = (t) => (n) => typeof n === t, { isArray: Jn } = Array, Sr = ri("undefined");
function Pm(t) {
  return t !== null && !Sr(t) && t.constructor !== null && !Sr(t.constructor) && st(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const Af = At("ArrayBuffer");
function Im(t) {
  let n;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? n = ArrayBuffer.isView(t) : n = t && t.buffer && Af(t.buffer), n;
}
const Nm = ri("string"), st = ri("function"), Tf = ri("number"), oi = (t) => t !== null && typeof t == "object", jm = (t) => t === !0 || t === !1, lo = (t) => {
  if (ni(t) !== "object")
    return !1;
  const n = da(t);
  return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Cf in t) && !(ti in t);
}, Mm = At("Date"), Lm = At("File"), Dm = At("Blob"), Bm = At("FileList"), Fm = (t) => oi(t) && st(t.pipe), zm = (t) => {
  let n;
  return t && (typeof FormData == "function" && t instanceof FormData || st(t.append) && ((n = ni(t)) === "formdata" || // detect form-data instance
  n === "object" && st(t.toString) && t.toString() === "[object FormData]"));
}, Vm = At("URLSearchParams"), [Hm, Um, qm, Wm] = ["ReadableStream", "Request", "Response", "Headers"].map(At), Xm = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
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
const hn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Rf = (t) => !Sr(t) && t !== hn;
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
}, ng = At("HTMLFormElement"), rg = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(e, r, o) {
    return r.toUpperCase() + o;
  }
), Lc = (({ hasOwnProperty: t }) => (n, e) => t.call(n, e))(Object.prototype), og = At("RegExp"), kf = (t, n) => {
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
}, fg = At("AsyncFunction"), dg = (t) => t && (oi(t) || st(t)) && st(t.then) && st(t.catch), Pf = ((t, n) => t ? setImmediate : n ? ((e, r) => (hn.addEventListener("message", ({ source: o, data: i }) => {
  o === hn && i === e && r.length && r.shift()();
}, !1), (o) => {
  r.push(o), hn.postMessage(e, "*");
}))(`axios@${Math.random()}`, []) : (e) => setTimeout(e))(
  typeof setImmediate == "function",
  st(hn.postMessage)
), hg = typeof queueMicrotask < "u" ? queueMicrotask.bind(hn) : typeof process < "u" && process.nextTick || Pf, xg = (t) => t != null && st(t[ti]), O = {
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
function te(t, n, e, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", n && (this.code = n), e && (this.config = e), r && (this.request = r), o && (this.response = o, this.status = o.status ? o.status : null);
}
O.inherits(te, Error, {
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
  return O.toFlatObject(t, s, function(c) {
    return c !== Error.prototype;
  }, (a) => a !== "isAxiosError"), te.call(s, t.message, n, e, r, o), s.cause = t, s.name = t.name, i && Object.assign(s, i), s;
};
const pg = null;
function Ps(t) {
  return O.isPlainObject(t) || O.isArray(t);
}
function jf(t) {
  return O.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Dc(t, n, e) {
  return t ? t.concat(n).map(function(o, i) {
    return o = jf(o), !e && i ? "[" + o + "]" : o;
  }).join(e ? "." : "") : n;
}
function mg(t) {
  return O.isArray(t) && !t.some(Ps);
}
const gg = O.toFlatObject(O, {}, null, function(n) {
  return /^is[A-Z]/.test(n);
});
function ii(t, n, e) {
  if (!O.isObject(t))
    throw new TypeError("target must be an object");
  n = n || new FormData(), e = O.toFlatObject(e, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(p, h) {
    return !O.isUndefined(h[p]);
  });
  const r = e.metaTokens, o = e.visitor || f, i = e.dots, s = e.indexes, c = (e.Blob || typeof Blob < "u" && Blob) && O.isSpecCompliantForm(n);
  if (!O.isFunction(o))
    throw new TypeError("visitor must be a function");
  function u(g) {
    if (g === null) return "";
    if (O.isDate(g))
      return g.toISOString();
    if (!c && O.isBlob(g))
      throw new te("Blob is not supported. Use a Buffer instead.");
    return O.isArrayBuffer(g) || O.isTypedArray(g) ? c && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function f(g, p, h) {
    let E = g;
    if (g && !h && typeof g == "object") {
      if (O.endsWith(p, "{}"))
        p = r ? p : p.slice(0, -2), g = JSON.stringify(g);
      else if (O.isArray(g) && mg(g) || (O.isFileList(g) || O.endsWith(p, "[]")) && (E = O.toArray(g)))
        return p = jf(p), E.forEach(function(m, C) {
          !(O.isUndefined(m) || m === null) && n.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? Dc([p], C, i) : s === null ? p : p + "[]",
            u(m)
          );
        }), !1;
    }
    return Ps(g) ? !0 : (n.append(Dc(h, p, i), u(g)), !1);
  }
  const d = [], l = Object.assign(gg, {
    defaultVisitor: f,
    convertValue: u,
    isVisitable: Ps
  });
  function y(g, p) {
    if (!O.isUndefined(g)) {
      if (d.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + p.join("."));
      d.push(g), O.forEach(g, function(E, S) {
        (!(O.isUndefined(E) || E === null) && o.call(
          n,
          E,
          O.isString(S) ? S.trim() : S,
          p,
          l
        )) === !0 && y(E, p ? p.concat(S) : [S]);
      }), d.pop();
    }
  }
  if (!O.isObject(t))
    throw new TypeError("data must be an object");
  return y(t), n;
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
const Mf = ha.prototype;
Mf.append = function(n, e) {
  this._pairs.push([n, e]);
};
Mf.toString = function(n) {
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
function Lf(t, n, e) {
  if (!n)
    return t;
  const r = e && e.encode || vg;
  O.isFunction(e) && (e = {
    serialize: e
  });
  const o = e && e.serialize;
  let i;
  if (o ? i = o(n, e) : i = O.isURLSearchParams(n) ? n.toString() : new ha(n, e).toString(r), i) {
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
    O.forEach(this.handlers, function(r) {
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
}, Symbol.toStringTag, { value: "Module" })), Qe = {
  ...Ag,
  ...wg
};
function Tg(t, n) {
  return ii(t, new Qe.classes.URLSearchParams(), Object.assign({
    visitor: function(e, r, o, i) {
      return Qe.isNode && O.isBuffer(e) ? (this.append(r, e.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, n));
}
function Og(t) {
  return O.matchAll(/\w+|\[(\w*)]/g, t).map((n) => n[0] === "[]" ? "" : n[1] || n[0]);
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
    return s = !s && O.isArray(o) ? o.length : s, c ? (O.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !a) : ((!o[s] || !O.isObject(o[s])) && (o[s] = []), n(e, r, o[s], i) && O.isArray(o[s]) && (o[s] = Rg(o[s])), !a);
  }
  if (O.isFormData(t) && O.isFunction(t.entries)) {
    const e = {};
    return O.forEachEntry(t, (r, o) => {
      n(Og(r), o, e, 0);
    }), e;
  }
  return null;
}
function kg(t, n, e) {
  if (O.isString(t))
    try {
      return (n || JSON.parse)(t), O.trim(t);
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
    const r = e.getContentType() || "", o = r.indexOf("application/json") > -1, i = O.isObject(n);
    if (i && O.isHTMLForm(n) && (n = new FormData(n)), O.isFormData(n))
      return o ? JSON.stringify(Bf(n)) : n;
    if (O.isArrayBuffer(n) || O.isBuffer(n) || O.isStream(n) || O.isFile(n) || O.isBlob(n) || O.isReadableStream(n))
      return n;
    if (O.isArrayBufferView(n))
      return n.buffer;
    if (O.isURLSearchParams(n))
      return e.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), n.toString();
    let a;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Tg(n, this.formSerializer).toString();
      if ((a = O.isFileList(n)) || r.indexOf("multipart/form-data") > -1) {
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
    if (O.isResponse(n) || O.isReadableStream(n))
      return n;
    if (n && O.isString(n) && (r && !this.responseType || o)) {
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
    FormData: Qe.classes.FormData,
    Blob: Qe.classes.Blob
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
O.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  Tr.headers[t] = {};
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
  return t === !1 || t == null ? t : O.isArray(t) ? t.map(uo) : String(t);
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
  if (O.isFunction(r))
    return r.call(this, n, e);
  if (o && (n = e), !!O.isString(n)) {
    if (O.isString(r))
      return n.indexOf(r) !== -1;
    if (O.isRegExp(r))
      return r.test(n);
  }
}
function Mg(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (n, e, r) => e.toUpperCase() + r);
}
function Lg(t, n) {
  const e = O.toCamelCase(" " + n);
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
      const d = O.findKey(o, f);
      (!d || o[d] === void 0 || u === !0 || u === void 0 && o[d] !== !1) && (o[d || c] = uo(a));
    }
    const s = (a, c) => O.forEach(a, (u, f) => i(u, f, c));
    if (O.isPlainObject(n) || n instanceof this.constructor)
      s(n, e);
    else if (O.isString(n) && (n = n.trim()) && !jg(n))
      s(Ig(n), e);
    else if (O.isObject(n) && O.isIterable(n)) {
      let a = {}, c, u;
      for (const f of n) {
        if (!O.isArray(f))
          throw TypeError("Object iterator must return a key-value pair");
        a[u = f[0]] = (c = a[u]) ? O.isArray(c) ? [...c, f[1]] : [c, f[1]] : f[1];
      }
      s(a, e);
    } else
      n != null && i(e, n, r);
    return this;
  }
  get(n, e) {
    if (n = ar(n), n) {
      const r = O.findKey(this, n);
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
  has(n, e) {
    if (n = ar(n), n) {
      const r = O.findKey(this, n);
      return !!(r && this[r] !== void 0 && (!e || Pi(this, this[r], r, e)));
    }
    return !1;
  }
  delete(n, e) {
    const r = this;
    let o = !1;
    function i(s) {
      if (s = ar(s), s) {
        const a = O.findKey(r, s);
        a && (!e || Pi(r, r[a], a, e)) && (delete r[a], o = !0);
      }
    }
    return O.isArray(n) ? n.forEach(i) : i(n), o;
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
    return O.forEach(this, (o, i) => {
      const s = O.findKey(r, i);
      if (s) {
        e[s] = uo(o), delete e[i];
        return;
      }
      const a = n ? Mg(i) : String(i).trim();
      a !== i && delete e[i], e[a] = uo(o), r[a] = !0;
    }), this;
  }
  concat(...n) {
    return this.constructor.concat(this, ...n);
  }
  toJSON(n) {
    const e = /* @__PURE__ */ Object.create(null);
    return O.forEach(this, (r, o) => {
      r != null && r !== !1 && (e[o] = n && O.isArray(r) ? r.join(", ") : r);
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
      r[a] || (Lg(o, s), r[a] = !0);
    }
    return O.isArray(n) ? n.forEach(i) : i(n), this;
  }
};
at.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
O.reduceDescriptors(at.prototype, ({ value: t }, n) => {
  let e = n[0].toUpperCase() + n.slice(1);
  return {
    get: () => t,
    set(r) {
      this[e] = r;
    }
  };
});
O.freezeMethods(at);
function Ii(t, n) {
  const e = this || Tr, r = n || e, o = at.from(r.headers);
  let i = r.data;
  return O.forEach(t, function(a) {
    i = a.call(e, i, o.normalize(), n ? n.status : void 0);
  }), o.normalize(), i;
}
function Ff(t) {
  return !!(t && t.__CANCEL__);
}
function Qn(t, n, e) {
  te.call(this, t ?? "canceled", te.ERR_CANCELED, n, e), this.name = "CanceledError";
}
O.inherits(Qn, te, {
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
    const y = f && u - f;
    return y ? Math.round(l * 1e3 / y) : void 0;
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
}, Hc = (t) => (...n) => O.asap(() => t(...n)), zg = Qe.hasStandardBrowserEnv ? /* @__PURE__ */ ((t, n) => (e) => (e = new URL(e, Qe.origin), t.protocol === e.protocol && t.host === e.host && (n || t.port === e.port)))(
  new URL(Qe.origin),
  Qe.navigator && /(msie|trident)/i.test(Qe.navigator.userAgent)
) : () => !0, Vg = Qe.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, n, e, r, o, i) {
      const s = [t + "=" + encodeURIComponent(n)];
      O.isNumber(e) && s.push("expires=" + new Date(e).toGMTString()), O.isString(r) && s.push("path=" + r), O.isString(o) && s.push("domain=" + o), i === !0 && s.push("secure"), document.cookie = s.join("; ");
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
function En(t, n) {
  n = n || {};
  const e = {};
  function r(u, f, d, l) {
    return O.isPlainObject(u) && O.isPlainObject(f) ? O.merge.call({ caseless: l }, u, f) : O.isPlainObject(f) ? O.merge({}, f) : O.isArray(f) ? f.slice() : f;
  }
  function o(u, f, d, l) {
    if (O.isUndefined(f)) {
      if (!O.isUndefined(u))
        return r(void 0, u, d, l);
    } else return r(u, f, d, l);
  }
  function i(u, f) {
    if (!O.isUndefined(f))
      return r(void 0, f);
  }
  function s(u, f) {
    if (O.isUndefined(f)) {
      if (!O.isUndefined(u))
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
  return O.forEach(Object.keys(Object.assign({}, t, n)), function(f) {
    const d = c[f] || o, l = d(t[f], n[f], f);
    O.isUndefined(l) && d !== a || (e[f] = l);
  }), e;
}
const Hf = (t) => {
  const n = En({}, t);
  let { data: e, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: i, headers: s, auth: a } = n;
  n.headers = s = at.from(s), n.url = Lf(Vf(n.baseURL, n.url, n.allowAbsoluteUrls), t.params, t.paramsSerializer), a && s.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let c;
  if (O.isFormData(e)) {
    if (Qe.hasStandardBrowserEnv || Qe.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if ((c = s.getContentType()) !== !1) {
      const [u, ...f] = c ? c.split(";").map((d) => d.trim()).filter(Boolean) : [];
      s.setContentType([u || "multipart/form-data", ...f].join("; "));
    }
  }
  if (Qe.hasStandardBrowserEnv && (r && O.isFunction(r) && (r = r(n)), r || r !== !1 && zg(n.url))) {
    const u = o && i && Vg.read(i);
    u && s.set(o, u);
  }
  return n;
}, qg = typeof XMLHttpRequest < "u", Wg = qg && function(t) {
  return new Promise(function(e, r) {
    const o = Hf(t);
    let i = o.data;
    const s = at.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: c, onDownloadProgress: u } = o, f, d, l, y, g;
    function p() {
      y && y(), g && g(), o.cancelToken && o.cancelToken.unsubscribe(f), o.signal && o.signal.removeEventListener("abort", f);
    }
    let h = new XMLHttpRequest();
    h.open(o.method.toUpperCase(), o.url, !0), h.timeout = o.timeout;
    function E() {
      if (!h)
        return;
      const m = at.from(
        "getAllResponseHeaders" in h && h.getAllResponseHeaders()
      ), b = {
        data: !a || a === "text" || a === "json" ? h.responseText : h.response,
        status: h.status,
        statusText: h.statusText,
        headers: m,
        config: t,
        request: h
      };
      zf(function(A) {
        e(A), p();
      }, function(A) {
        r(A), p();
      }, b), h = null;
    }
    "onloadend" in h ? h.onloadend = E : h.onreadystatechange = function() {
      !h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.indexOf("file:") === 0) || setTimeout(E);
    }, h.onabort = function() {
      h && (r(new te("Request aborted", te.ECONNABORTED, t, h)), h = null);
    }, h.onerror = function() {
      r(new te("Network Error", te.ERR_NETWORK, t, h)), h = null;
    }, h.ontimeout = function() {
      let C = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const b = o.transitional || Df;
      o.timeoutErrorMessage && (C = o.timeoutErrorMessage), r(new te(
        C,
        b.clarifyTimeoutError ? te.ETIMEDOUT : te.ECONNABORTED,
        t,
        h
      )), h = null;
    }, i === void 0 && s.setContentType(null), "setRequestHeader" in h && O.forEach(s.toJSON(), function(C, b) {
      h.setRequestHeader(b, C);
    }), O.isUndefined(o.withCredentials) || (h.withCredentials = !!o.withCredentials), a && a !== "json" && (h.responseType = o.responseType), u && ([l, g] = Co(u, !0), h.addEventListener("progress", l)), c && h.upload && ([d, y] = Co(c), h.upload.addEventListener("progress", d), h.upload.addEventListener("loadend", y)), (o.cancelToken || o.signal) && (f = (m) => {
      h && (r(!m || m.type ? new Qn(null, t, h) : m), h.abort(), h = null);
    }, o.cancelToken && o.cancelToken.subscribe(f), o.signal && (o.signal.aborted ? f() : o.signal.addEventListener("abort", f)));
    const S = Dg(o.url);
    if (S && Qe.protocols.indexOf(S) === -1) {
      r(new te("Unsupported protocol " + S + ":", te.ERR_BAD_REQUEST, t));
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
    return c.unsubscribe = () => O.asap(a), c;
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
  const n = new Request(Qe.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return t = !0, "half";
    }
  }).headers.has("Content-Type");
  return t && !n;
}), Wc = 64 * 1024, Ns = Uf && qf(() => O.isReadableStream(new Response("").body)), Ao = {
  stream: Ns && ((t) => t.body)
};
si && ((t) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((n) => {
    !Ao[n] && (Ao[n] = O.isFunction(t[n]) ? (e) => e[n]() : (e, r) => {
      throw new te(`Response type '${n}' is not supported`, te.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Jg = async (t) => {
  if (t == null)
    return 0;
  if (O.isBlob(t))
    return t.size;
  if (O.isSpecCompliantForm(t))
    return (await new Request(Qe.origin, {
      method: "POST",
      body: t
    }).arrayBuffer()).byteLength;
  if (O.isArrayBufferView(t) || O.isArrayBuffer(t))
    return t.byteLength;
  if (O.isURLSearchParams(t) && (t = t + ""), O.isString(t))
    return (await Kg(t)).byteLength;
}, Qg = async (t, n) => {
  const e = O.toFiniteNumber(t.getContentLength());
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
  let y = Xg([o, i && i.toAbortSignal()], s), g;
  const p = y && y.unsubscribe && (() => {
    y.unsubscribe();
  });
  let h;
  try {
    if (c && Zg && e !== "get" && e !== "head" && (h = await Qg(f, r)) !== 0) {
      let b = new Request(n, {
        method: "POST",
        body: r,
        duplex: "half"
      }), R;
      if (O.isFormData(r) && (R = b.headers.get("content-type")) && f.setContentType(R), b.body) {
        const [A, N] = Vc(
          h,
          Co(Hc(c))
        );
        r = qc(b.body, Wc, A, N);
      }
    }
    O.isString(d) || (d = d ? "include" : "omit");
    const E = "credentials" in Request.prototype;
    g = new Request(n, {
      ...l,
      signal: y,
      method: e.toUpperCase(),
      headers: f.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: E ? d : void 0
    });
    let S = await fetch(g);
    const m = Ns && (u === "stream" || u === "response");
    if (Ns && (a || m && p)) {
      const b = {};
      ["status", "statusText", "headers"].forEach((z) => {
        b[z] = S[z];
      });
      const R = O.toFiniteNumber(S.headers.get("content-length")), [A, N] = a && Vc(
        R,
        Co(Hc(a), !0)
      ) || [];
      S = new Response(
        qc(S.body, Wc, A, () => {
          N && N(), p && p();
        }),
        b
      );
    }
    u = u || "text";
    let C = await Ao[O.findKey(Ao, u) || "text"](S, t);
    return !m && p && p(), await new Promise((b, R) => {
      zf(b, R, {
        data: C,
        headers: at.from(S.headers),
        status: S.status,
        statusText: S.statusText,
        config: t,
        request: g
      });
    });
  } catch (E) {
    throw p && p(), E && E.name === "TypeError" && /Load failed|fetch/i.test(E.message) ? Object.assign(
      new te("Network Error", te.ERR_NETWORK, t, g),
      {
        cause: E.cause || E
      }
    ) : te.from(E, E && E.code, t, g);
  }
}), js = {
  http: pg,
  xhr: Wg,
  fetch: ev
};
O.forEach(js, (t, n) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: n });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: n });
  }
});
const Xc = (t) => `- ${t}`, tv = (t) => O.isFunction(t) || t === null || t === !1, Wf = {
  getAdapter: (t) => {
    t = O.isArray(t) ? t : [t];
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
}, Pt = fo.validators;
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
      silentJSONParsing: Pt.transitional(Pt.boolean),
      forcedJSONParsing: Pt.transitional(Pt.boolean),
      clarifyTimeoutError: Pt.transitional(Pt.boolean)
    }, !1), o != null && (O.isFunction(o) ? e.paramsSerializer = {
      serialize: o
    } : fo.assertOptions(o, {
      encode: Pt.function,
      serialize: Pt.function
    }, !0)), e.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? e.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : e.allowAbsoluteUrls = !0), fo.assertOptions(e, {
      baseUrl: Pt.spelling("baseURL"),
      withXsrfToken: Pt.spelling("withXSRFToken")
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
    ), e.headers = at.concat(s, i);
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
      const g = [Yc.bind(this), void 0];
      for (g.unshift.apply(g, a), g.push.apply(g, u), l = g.length, f = Promise.resolve(e); d < l; )
        f = f.then(g[d++], g[d++]);
      return f;
    }
    l = a.length;
    let y = e;
    for (d = 0; d < l; ) {
      const g = a[d++], p = a[d++];
      try {
        y = g(y);
      } catch (h) {
        p.call(this, h);
        break;
      }
    }
    try {
      f = Yc.call(this, y);
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
    return Lf(e, n.params, n.paramsSerializer);
  }
};
O.forEach(["delete", "get", "head", "options"], function(n) {
  Sn.prototype[n] = function(e, r) {
    return this.request(En(r || {}, {
      method: n,
      url: e,
      data: (r || {}).data
    }));
  };
});
O.forEach(["post", "put", "patch"], function(n) {
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
  return O.isObject(t) && t.isAxiosError === !0;
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
Object.entries(Ms).forEach(([t, n]) => {
  Ms[n] = t;
});
function $f(t) {
  const n = new Sn(t), e = _f(Sn.prototype.request, n);
  return O.extend(e, Sn.prototype, n, { allOwnKeys: !0 }), O.extend(e, n, null, { allOwnKeys: !0 }), e.create = function(o) {
    return $f(En(t, o));
  }, e;
}
const Me = $f(Tr);
Me.Axios = Sn;
Me.CanceledError = Qn;
Me.CancelToken = rv;
Me.isCancel = Ff;
Me.VERSION = Xf;
Me.toFormData = ii;
Me.AxiosError = te;
Me.Cancel = Me.CanceledError;
Me.all = function(n) {
  return Promise.all(n);
};
Me.spread = ov;
Me.isAxiosError = iv;
Me.mergeConfig = En;
Me.AxiosHeaders = at;
Me.formToJSON = (t) => Bf(O.isHTMLForm(t) ? new FormData(t) : t);
Me.getAdapter = Wf.getAdapter;
Me.HttpStatusCode = Ms;
Me.default = Me;
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
} = Me, yt = To;
(function(t, n) {
  const e = To, r = t();
  for (; ; )
    try {
      if (parseInt(e(479)) / 1 + parseInt(e(471)) / 2 + -parseInt(e(467)) / 3 + parseInt(e(460)) / 4 * (parseInt(e(487)) / 5) + -parseInt(e(478)) / 6 * (parseInt(e(470)) / 7) + parseInt(e(468)) / 8 + -parseInt(e(464)) / 9 * (parseInt(e(465)) / 10) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Oo, 994960);
yt(482) + yt(484) + yt(485) + yt(469);
Me[yt(477)][yt(462) + yt(480)] = !0;
const sv = async (t) => {
  var e, r, o, i;
  const n = yt;
  try {
    return (await Me(t))[n(466)];
  } catch (s) {
    throw ((r = (e = s[n(463)]) == null ? void 0 : e[n(466)]) == null ? void 0 : r[n(489)]) || ((i = (o = s[n(463)]) == null ? void 0 : o[n(466)]) == null ? void 0 : i[n(483)]) || s[n(489)];
  }
}, av = {};
av[yt(488) + "pe"] = yt(476) + yt(474);
function To(t, n) {
  const e = Oo();
  return To = function(r, o) {
    return r = r - 460, e[r];
  }, To(t, n);
}
function Oo() {
  const t = ["error", ".168.11.76", ":3000/api/", "PUT", "1330rIsNEo", "Content-Ty", "message", "29096wWTTpu", "GET", "withCreden", "response", "9mrYAwD", "14240090JPACFc", "data", "1764045jblKAV", "3954080ledkNZ", "v1/client", "7QPfXXu", "542790TmJjCN", "PATCH", "params", "n/json", "DELETE", "applicatio", "defaults", "1236348EsnKtr", "512503CsoEHd", "tials", "POST", "http://192"];
  return Oo = function() {
    return t;
  }, Oo();
}
const Te = Ro;
function Ro(t, n) {
  const e = ko();
  return Ro = function(r, o) {
    return r = r - 360, e[r];
  }, Ro(t, n);
}
(function(t, n) {
  const e = Ro, r = t();
  for (; ; )
    try {
      if (-parseInt(e(378)) / 1 + parseInt(e(376)) / 2 * (-parseInt(e(369)) / 3) + -parseInt(e(370)) / 4 + -parseInt(e(373)) / 5 * (parseInt(e(371)) / 6) + parseInt(e(365)) / 7 + -parseInt(e(385)) / 8 * (-parseInt(e(377)) / 9) + parseInt(e(380)) / 10 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(ko, 815794);
const ln = {};
ln[Te(387)] = Te(363) + "E", ln[Te(368)] = Te(366), ln[Te(361)] = Te(375) + "N", ln[Te(372)] = Te(363) + "E", ln[Te(367)] = Te(366), ln[Te(384)] = Te(375) + "N";
const jt = ln;
function ko() {
  const t = ["keyup", "Event", "mousedown", "fullscreen", "ACTION_MOV", "keydown", "9373973ORBITT", "ACTION_UP", "touchend", "mouseup", "270276ItmXcm", "770924JTTYan", "4378794KLmRXm", "touchmove", "5XmdWIV", "wheelEvent", "ACTION_DOW", "4loKRgC", "109251AzXMLC", "680162aIYJfF", "shortcutEv", "8346660neFBcL", "assistiveM", "keyBoardEv", "enuHide", "touchstart", "280zvdbDT", "ent", "mousemove", "moveEvent"];
  return ko = function() {
    return t;
  }, ko();
}
const Ls = {};
Ls[Te(389)] = Te(366), Ls[Te(364)] = Te(375) + "N";
const cv = Ls, lv = Te(388), uv = Te(374), fv = Te(382) + Te(386), Gf = Te(381) + Te(383), Ds = Te(379) + Te(386), dv = Te(362) + Te(360);
(function(t, n) {
  const e = xn, r = t();
  for (; ; )
    try {
      if (-parseInt(e(226)) / 1 * (-parseInt(e(203)) / 2) + -parseInt(e(174)) / 3 + -parseInt(e(216)) / 4 * (parseInt(e(176)) / 5) + -parseInt(e(153)) / 6 + parseInt(e(232)) / 7 * (-parseInt(e(195)) / 8) + parseInt(e(192)) / 9 * (-parseInt(e(187)) / 10) + parseInt(e(162)) / 11 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Po, 552753);
function xn(t, n) {
  const e = Po();
  return xn = function(r, o) {
    return r = r - 134, e[r];
  }, xn(t, n);
}
function Po() {
  const t = ["key", "arrowleft", "HehKw", "gkQYq", "tListener", "toLowerCas", "KEYBOARD_T", "capslock", "wrjIY", "clientX", "repeat", "toUpperCas", "tab", "backspace", "touchend", "jfPjR", "keydown", "arrowright", "jRWpv", "UqoFY", "gClientRec", "focus", "HPoal", "touchmove", "ZdJwg", "BoIbi", "mousedown", "3547128iWuxNb", "aXqaq", "width", "isDown", "control", "includes", "mouse", "touchstart", "removeEven", "26432439TUZPkq", "AOmoo", "gwimy", "pageY", "deltaY", "current", "SspHu", "ault", "Dkwij", "showMenu", "preventDef", "PASTE_TEXT", "2607384YGjYhn", "left", "3523470TJrsNf", "yuOnA", "IMazQ", "ctrlKey", "shiftKey", "jCAXn", "offsetHeig", "KtvTp", "passive", "xebwj", "meta_state", "710ImIBgY", "touchEvent", "COPY_TEXT", "clientY", "ODE", "69003BzMWNC", "top", "height", "2288ihojjO", "readText", "JdVmL", "RAErx", "typeKey", "HCjrk", "wheel", "enter", "58NEyKDO", "keyAction", "clipboard", "wheelEvent", "ywKtj", "getBoundin", "sign", "EXT", "pageX", "rzWsF", "mouseup", "type", "KEYBOARD_C", "4rZvKvt", "offsetWidt", "stener", "arrowup", "action", "webFG", "touch", "xnovd", "delta", "arrowdown", "35317TxAGfn", "shift", "addEventLi", "mousemove", "keyEvent", "hhJip", "4039WgIQnr", "RzyWe", "ZxGQA", "forEach", "lsWLq"];
  return Po = function() {
    return t;
  }, Po();
}
const hv = ({ isMobile: t, assistive: n, onImgEvent: e, canvasContent: r, imageRef: o }) => {
  const [i, s] = rt(!1), a = (d) => {
    const l = xn;
    if (l(151) === l(145)) _0x1217c6[l(199)] = l(215) + l(191), _0x13d794[l(237)] = 66;
    else {
      if (d[l(172) + l(169)](), !o[l(167)]) {
        if (l(150) === l(150)) return;
        _0x34fa81[l(161) + l(241)](_0x72c77, _0x274420);
      }
      const y = o[l(167)];
      let g = jt[d[l(214)]];
      if (n[l(156)] == !0 || n[l(171)] == !0) {
        if (l(141) !== l(141))
          return [l(157), l(227), l(244)][l(158)](_0x5b38cc);
        if (g == jt[l(213)]) {
          if (l(181) === l(197)) return;
          e(Gf, {});
        }
        return;
      }
      if (g == jt[l(152)])
        if (l(239) === l(239)) s(!0);
        else return;
      if (g != jt[l(152)] && i == !1) return;
      g == jt[l(213)] && (l(164) === l(221) ? _0x2f285b[l(180)] == !0 && (_0x241019[l(237)] = _0x38e62b[l(237)][l(137) + "e"]()) : s(!1));
      let p, h;
      const E = y[l(208) + l(146) + "t"]();
      if (d[l(214)][l(158)](l(222))) {
        const { touches: m, changedTouches: C } = d, b = m[0] ?? C[0];
        p = b[l(211)] - E[l(175)], h = b[l(165)] - E[l(193)];
      } else d[l(214)][l(158)](l(159)) && (p = d[l(135)] - E[l(175)], h = d[l(190)] - E[l(193)]);
      const S = {};
      S[l(220)] = l(188), S[l(204)] = g, S.x = p, S.y = h, S[l(155)] = E[l(155)], S[l(194)] = E[l(194)], e(lv, S), y[l(147)]();
    }
  }, c = (d) => {
    const l = xn;
    if (l(231) === l(231)) {
      if (d[l(172) + l(169)](), !o[l(167)]) return;
      const y = o[l(167)], g = Math[l(209)](d[l(166)]), p = y[l(208) + l(146) + "t"](), h = {};
      h[l(220)] = l(206), h[l(155)] = y[l(217) + "h"], h[l(194)] = y[l(182) + "ht"], h.x = d[l(135)] - p[l(175)], h.y = d[l(190)] - p[l(193)], h[l(224)] = g, e(uv, h), y[l(147)]();
    } else _0x3db096[l(228) + l(218)](l(201), _0x17d106, _0x4f7e93), _0x309147[l(228) + l(218)](l(142), _0x1a6a7a), [l(229), l(152), l(213)][l(235)]((y) => {
      const g = l;
      _0xc71786[g(228) + g(218)](y, _0x513e1d);
    });
  }, u = async (d) => {
    const l = xn;
    if (d[l(172) + l(169)](), !o[l(167)]) {
      if (l(223) !== l(148)) return;
      _0xd5bbb[l(199)] = l(215) + l(191), _0x16df12[l(186)] = 4096, _0x5a80a8[l(237)] = 29;
    }
    const y = o[l(167)], g = cv[d[l(214)]], p = d[l(237)][l(242) + "e"]();
    if (((m) => {
      const C = l;
      return [C(157), C(227), C(244)][C(158)](m);
    })(p) == !0)
      if (l(185) === l(154)) _0x365e97(!1);
      else return;
    const E = async () => {
      const m = l, C = {};
      C[m(220)] = m(230), C[m(204)] = g, C[m(199)] = m(243) + m(210), C[m(237)] = d[m(237)], C[m(136)] = 0, C[m(186)] = 0;
      const b = C;
      if (d[m(179)] == !0)
        m(163) !== m(163) ? _0x1275f4[m(228) + m(218)](_0x2c8f25, _0x22fb2d) : p == "c" ? b[m(199)] = m(189) : p == "a" ? (b[m(199)] = m(215) + m(191), b[m(186)] = 4096, b[m(237)] = 29) : p == "v" && (m(134) === m(233) ? [m(160), m(149), m(140)][m(235)]((R) => {
          const A = m;
          _0x13caa6[A(161) + A(241)](R, _0x5a4bf4);
        }) : (b[m(199)] = m(173), b[m(237)] = await navigator[m(205)][m(196)]()));
      else if (p == m(219))
        if (m(168) === m(168)) b[m(199)] = m(215) + m(191), b[m(237)] = 19;
        else return;
      else
        p == m(225) ? (b[m(199)] = m(215) + m(191), b[m(237)] = 20) : p == m(238) ? (b[m(199)] = m(215) + m(191), b[m(237)] = 21) : p == m(143) ? (b[m(199)] = m(215) + m(191), b[m(237)] = 22) : p == m(139) ? (b[m(199)] = m(215) + m(191), b[m(237)] = 67) : p == m(202) ? m(177) === m(207) ? (_0xf9f4dc[m(199)] = m(215) + m(191), _0x191e86[m(237)] = 22) : (b[m(199)] = m(215) + m(191), b[m(237)] = 66) : p == m(138) && (m(200) !== m(178) ? (b[m(199)] = m(215) + m(191), b[m(237)] = 61) : _0x2ef8aa(_0xc778d1, _0x5f0395));
      return b[m(214)] == m(243) + m(210) && d[m(180)] == !0 && (m(183) === m(234) ? (_0x2a067f[m(199)] = m(215) + m(191), _0x520369[m(237)] = 61) : b[m(237)] = b[m(237)][m(137) + "e"]()), b;
    }, S = await E();
    S && e(fv, S), y[l(147)]();
  };
  ot(() => {
    const d = xn, l = o[d(167)];
    if (l)
      if (d(240) !== d(240)) _0xd07ceb(_0x42cd2e, {});
      else {
        const y = {};
        y[d(184)] = !1;
        const g = y;
        return t ? d(170) === d(144) ? _0x4bb258[d(161) + d(241)](_0x522552, _0x410564) : (l[d(228) + d(218)](d(160), a, g), l[d(228) + d(218)](d(149), a, g), l[d(228) + d(218)](d(140), a)) : (l[d(228) + d(218)](d(201), c, g), l[d(228) + d(218)](d(142), u), [d(229), d(152), d(213)][d(235)]((p) => {
          const h = d;
          if (h(198) === h(198)) l[h(228) + h(218)](p, a);
          else {
            if (_0x9966ea[h(172) + h(169)](), !_0x3e9735[h(167)]) return;
            const E = _0x222ec8[h(167)], S = _0x9d8f32[h(209)](_0x1f9368[h(166)]), m = E[h(208) + h(146) + "t"](), C = {};
            C[h(220)] = h(206), C[h(155)] = E[h(217) + "h"], C[h(194)] = E[h(182) + "ht"], C.x = _0x48d8d9[h(135)] - m[h(175)], C.y = _0xcf0b66[h(190)] - m[h(193)], C[h(224)] = S, _0x4c0dd8(_0x26e9b5, C), E[h(147)]();
          }
        })), () => {
          const p = d;
          l && (t ? [p(160), p(149), p(140)][p(235)]((h) => {
            const E = p;
            E(212) !== E(236) ? l[E(161) + E(241)](h, a) : _0xbeb70b[E(237)] = _0x266e9a[E(237)][E(137) + "e"]();
          }) : ([p(229), p(152), p(213), p(201), p(142)][p(235)]((h) => {
            const E = p;
            l[E(161) + E(241)](h, a);
          }), l[p(161) + p(241)](p(142), u)));
        };
      }
  }, [t, a, c, u]);
  const f = { ref: o, ...r };
  return q.jsx(gd, f);
}, xv = "data:image/png;base64,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", ci = Io;
(function(t, n) {
  const e = Io, r = t();
  for (; ; )
    try {
      if (parseInt(e(491)) / 1 * (-parseInt(e(494)) / 2) + parseInt(e(493)) / 3 * (parseInt(e(495)) / 4) + parseInt(e(488)) / 5 * (parseInt(e(497)) / 6) + parseInt(e(496)) / 7 + parseInt(e(490)) / 8 + -parseInt(e(487)) / 9 + -parseInt(e(486)) / 10 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(No, 634674);
function Io(t, n) {
  const e = No();
  return Io = function(r, o) {
    return r = r - 486, e[r];
  }, Io(t, n);
}
const pv = Et[ci(489)]`
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
`, Bt = Et[ci(489)]`
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
`, Ft = Et.p`
  height: 5px;
  margin-top: 2px;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
`, mv = Et[ci(492)]`
  position: absolute;
  backdrop-filter: blur(46px);
  border-radius: 50%;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.723);
  top: 50%;
  right: 5%;
`;
function No() {
  const t = ["2474408nRPacw", "1gIxMRg", "img", "3NSpjBF", "230360nLXOKT", "749032hkiePM", "5432714mYwJNj", "300234XOBzXi", "2453990ZxjzRB", "10152639ZGWRMY", "85IAFBZy", "div"];
  return No = function() {
    return t;
  }, No();
}
const gv = Et[ci(489)]`
  user-select: none;
  transition: opacity 0.6s ease;
  z-index: 3;
  opacity: 0.3;
`;
(function(t, n) {
  const e = Un, r = t();
  for (; ; )
    try {
      if (-parseInt(e(175)) / 1 * (parseInt(e(149)) / 2) + -parseInt(e(163)) / 3 * (parseInt(e(139)) / 4) + parseInt(e(153)) / 5 + -parseInt(e(143)) / 6 + parseInt(e(159)) / 7 * (-parseInt(e(134)) / 8) + -parseInt(e(176)) / 9 * (-parseInt(e(173)) / 10) + -parseInt(e(137)) / 11 * (-parseInt(e(140)) / 12) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(jo, 481669);
function Un(t, n) {
  const e = jo();
  return Un = function(r, o) {
    return r = r - 133, e[r];
  }, Un(t, n);
}
const Gc = () => {
  const t = Un;
  return document[t(166) + t(142)] || document[t(157) + t(164)] || document[t(144) + t(138) + t(141)] || document[t(170) + t(160)];
}, vv = (t) => {
  const n = Un, e = document[n(174) + n(133)](n(146) + t);
  e[n(145) + n(171)] ? e[n(145) + n(171)]() : e[n(172) + n(148)] ? e[n(172) + n(148)]() : e[n(158) + n(155) + n(162)] ? e[n(158) + n(155) + n(162)]() : e[n(169) + n(150)] && (n(167) === n(167) ? e[n(169) + n(150)]() : _0x43ab03[n(172) + n(148)]());
};
function jo() {
  const t = ["webkitExit", "fullscreen", "JxMby", "screen", "msRequestF", "msFullscre", "lscreen", "mozRequest", "7130740SkxajG", "querySelec", "20mFIptG", "9JKEMBr", "Fullscreen", "tor", "4526264qUtMkw", "iUjoM", "ullScreen", "1001aBUQrG", "screenElem", "4LHDufT", "183240wsUKmm", "ent", "Element", "2619078IawOhS", "webkitFull", "requestFul", "#screen_", "aZdAX", "FullScreen", "56586PKhnxl", "ullscreen", "msExitFull", "exitFullsc", "2598295TTLWSz", "mozCancelF", "estFullscr", "rvdRR", "mozFullScr", "webkitRequ", "7guopOF", "enElement", "reen", "een", "1717434pLpoBl", "eenElement"];
  return jo = function() {
    return t;
  }, jo();
}
const yv = () => {
  const t = Un;
  document[t(152) + t(161)] ? document[t(152) + t(161)]() : document[t(154) + t(136)] ? document[t(154) + t(136)]() : document[t(165) + t(177)] ? t(135) !== t(156) ? document[t(165) + t(177)]() : _0xa29edc[t(169) + t(150)]() : document[t(151) + t(168)] && (t(147) === t(147) ? document[t(151) + t(168)]() : _0x5c61ac[t(151) + t(168)]());
};
function wr(t, n) {
  const e = Mo();
  return wr = function(r, o) {
    return r = r - 194, e[r];
  }, wr(t, n);
}
(function(t, n) {
  const e = wr, r = t();
  for (; ; )
    try {
      if (-parseInt(e(318)) / 1 + -parseInt(e(196)) / 2 + -parseInt(e(417)) / 3 * (parseInt(e(287)) / 4) + parseInt(e(485)) / 5 * (-parseInt(e(274)) / 6) + parseInt(e(302)) / 7 + -parseInt(e(385)) / 8 * (parseInt(e(250)) / 9) + parseInt(e(247)) / 10 * (parseInt(e(322)) / 11) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Mo, 776793);
const bv = il((t, n) => {
  const e = wr, { displayId: r, isMobile: o, onSenData: i, status: s, imageRef: a, isShowDeviceId: c } = t, [u, f] = rt(0), [d, l] = rt(0), [y, g] = rt(null), [p, h] = rt(0), E = Xe(null), S = Xe(null), m = Xe(null), C = {};
  C[e(213)] = e(199), C[e(354)] = 0.3, C[e(431)] = 999;
  const [b, R] = rt(C), A = {};
  A[e(431)] = 999, A[e(206)] = "", A[e(377)] = e(424);
  const [N, z] = rt(A), Y = {};
  Y[e(431)] = 1e3;
  const [ne, K] = rt(Y), B = Xe(null), [H, X] = rt(null), $ = (I) => {
    const v = e;
    if (v(448) !== v(367)) {
      if (I[v(440) + v(373)](), s[v(257)][v(435)] == !0)
        if (v(331) === v(262)) {
          const { touches: ze, changedTouches: qe } = _0x86e226, tt = ze[0] ?? qe[0];
          _0x42bb19 = tt[v(237)], _0x237f7e = tt[v(278)];
        } else return;
      const Ae = jt[I[v(311)]], U = a[v(325)], ke = m[v(325)], Ye = U[v(231) + v(462) + "t"](), Ot = ke[v(231) + v(462) + "t"]();
      let Dt, lt;
      const on = Ye[v(377)] - Ot[v(377)], sn = Ye[v(206)] - Ot[v(206)];
      if (I[v(311)][v(368)](v(294))) {
        const { touches: ze, changedTouches: qe } = I, tt = ze[0] ?? qe[0];
        Dt = tt[v(237)], lt = tt[v(278)];
      } else I[v(311)][v(368)](v(449)) && (v(285) === v(285) ? (Dt = I[v(290)], lt = I[v(382)]) : _0x50459c[v(429)]((ze) => {
        const qe = v;
        _0x482a38[qe(306) + qe(208)](ze, _0x2d1889);
      }));
      if (Ae == jt[v(336)])
        if (v(215) === v(215)) {
          s[v(488)]({ ...s[v(257)], isDown: !0 }), f(Dt - Ot[v(281)]), l(lt - Ot[v(425)]);
          const ze = {};
          ze[v(354)] = 1, ze[v(213)] = v(296);
          const qe = { ...b, ...ze };
          R(qe), h(performance[v(407)]());
        } else _0x582277[v(306) + v(208)](v(460), _0x228f07, _0xacfc49), _0x20fd49[v(306) + v(208)](v(383), _0x1e6676, _0x2bde38), _0x5e43b4[v(306) + v(208)](v(310), _0x29cb76);
      else if (Ae == jt[v(238)]) {
        if (s[v(257)][v(235)] == !1) return;
        var pe = Dt - u - Ye[v(281)], ye = lt - d - Ye[v(425)];
        pe = Math[v(444)](3, Math[v(314)](pe, on) - 3), ye = Math[v(444)](3, Math[v(314)](ye, sn) - 3);
        const ze = {};
        ze[v(425)] = ye + "px", ze[v(281)] = pe + "px";
        const qe = { ...N, ...ze };
        z(qe);
      } else if (Ae == jt[v(255)]) {
        const ze = performance[v(407)]() - p;
        if (y == jt[v(336)] || ze < 100)
          if (v(352) !== v(352)) _0x186f21[v(432) + v(347)](_0x18898a, _0x3973c8);
          else {
            const Rt = {};
            Rt[v(435)] = !0, Rt[v(235)] = !1, s[v(488)]({ ...s[v(257)], ...Rt });
          }
        else s[v(488)]({ ...s[v(257)], isDown: !1 });
        const qe = {};
        qe[v(354)] = 0.3, qe[v(213)] = v(199);
        const tt = { ...b, ...qe };
        R(tt);
      }
      g(Ae), ke[v(471)]();
    } else
      _0x13e8a8() ? _0x30cf18() : _0x1340a8(_0xbeb8ac);
  }, ee = async (I) => {
    const v = e;
    I[v(440) + v(373)]();
    const pe = I[v(434)][v(195)](v(439))[v(349) + "te"](v(489));
    if (pe === v(495))
      if (v(441) === v(219)) {
        const ye = { ..._0x1362d7[v(257)] };
        ye[v(235)] = !0, _0x568d8[v(488)](ye), _0x5f4745(_0x134308 - _0x5cf53d[v(281)]), _0xaec686(_0xc3f9cc - _0x4f9fc2[v(425)]);
        const Ae = {};
        Ae[v(354)] = 1, Ae[v(213)] = v(296);
        const U = { ..._0x17e639, ...Ae };
        _0x218b11(U), _0x4a94f1(_0x590e67[v(407)]());
      } else
        Gc() ? yv() : v(442) !== v(333) ? vv(r) : _0x54f9cb[v(306) + v(208)](v(210), _0x15f1e9);
    else {
      const ye = {};
      ye[v(263)] = v(253) + v(455), ye[v(204)] = pe, ye[v(288)] = "";
      const Ae = ye;
      if (pe === v(266) && (Ae[v(288)] = await navigator[v(323)][v(198)]()), pe === v(497))
        if (v(280) === v(280)) Ae[v(358)] = v(312) + "py";
        else {
          const U = {};
          U[v(435)] = !0, U[v(235)] = !1;
          const ke = { ..._0x2422fe[v(257)], ...U };
          _0x3cac0e[v(488)](ke);
        }
      i(Ds, Ae);
    }
    s[v(488)]({ ...s[v(257)], showMenu: !1 }), S[v(325)][v(471)]();
  }, Z = (I) => {
    const v = e;
    if (v(413) !== v(413)) {
      const pe = {};
      pe[v(431)] = 999, pe[v(206)] = _0x42b789[v(325)] == v(218) ? v(380) : null, pe[v(377)] = _0xa7694a[v(325)] != v(218) ? v(380) : null, pe[v(425)] = v(316), pe[v(414)] = "5%", _0x93f8b2(pe);
    } else {
      const pe = Gc();
      i(dv, pe);
    }
  };
  ot(() => {
    requestAnimationFrame(() => {
      const I = wr, v = { ...ne };
      v[I(354)] = s[I(257)][I(435)] ? 1 : 0, K(v);
    });
  }, [s]), ot(() => {
    const I = e, v = a[I(325)], pe = [I(495) + I(438), I(307) + I(494) + "ge", I(317) + I(492), I(211) + I(403)];
    if (v)
      if (I(356) === I(201)) {
        if (_0xf437f7[I(257)][I(235)] == !1) return;
        var ye = _0x4e1961 - _0x1e330b - _0x4019e5[I(281)], Ae = _0x5e49f8 - _0xb63289 - _0x4131f3[I(425)];
        ye = _0x19e37a[I(444)](3, _0x46fb14[I(314)](ye, _0x2bb3a0) - 3), Ae = _0x347374[I(444)](3, _0x24fe19[I(314)](Ae, _0xb49fa5) - 3);
        const U = {};
        U[I(425)] = Ae + "px", U[I(281)] = ye + "px";
        const ke = { ..._0x5642f6, ...U };
        _0x512787(ke);
      } else pe[I(429)]((U) => {
        const ke = I;
        ke(350) !== ke(350) ? _0x232c09() : v[ke(306) + ke(208)](U, Z);
      });
    return () => {
      const U = I;
      v && v[U(432) + U(347)](U(210), Z);
    };
  }, []), ot(() => {
    const I = e;
    if (I(479) !== I(479)) {
      const v = _0x586b5a();
      _0x1f98e1(_0xe54b5b, v);
    } else {
      const v = m[I(325)], pe = S[I(325)];
      if (pe && pe[I(306) + I(208)](I(210), ee), v)
        if (I(355) !== I(269)) {
          const ye = {};
          ye[I(360)] = !1;
          const Ae = ye;
          return o ? (v[I(306) + I(208)](I(460), $, Ae), v[I(306) + I(208)](I(383), $, Ae), v[I(306) + I(208)](I(310), $)) : [I(238), I(336), I(255)][I(429)]((U) => {
            const ke = I;
            v[ke(306) + ke(208)](U, $);
          }), () => {
            const U = I;
            pe && (U(445) !== U(445) ? _0x372e2f[U(432) + U(347)](U(210), _0x120344) : pe[U(432) + U(347)](U(210), ee)), v && (U(330) === U(330) ? o ? U(275) !== U(275) ? _0x51d073[U(358)] = U(312) + "py" : [U(460), U(383), U(310)][U(429)]((ke) => {
              const Ye = U;
              Ye(229) !== Ye(229) ? _0xed6ff[Ye(306) + Ye(208)](_0xb512f8, _0x6e0586) : v[Ye(432) + Ye(347)](ke, $);
            }) : U(464) !== U(464) ? (_0x159217 && (_0x40e29f[U(325)] = _0x1eeb0d), _0x15a115()) : [U(238), U(336), U(255)][U(429)]((ke) => {
              const Ye = U;
              v[Ye(432) + Ye(347)](ke, $);
            }) : _0x3f3e67(_0x13bd28));
          };
        } else _0x499844(_0x49fdc3);
    }
  }, [o, $]);
  const Q = () => {
    const I = e, v = {};
    v[I(431)] = 999, v[I(206)] = B[I(325)] == I(218) ? I(380) : null, v[I(377)] = B[I(325)] != I(218) ? I(380) : null, v[I(425)] = I(316), v[I(414)] = "5%", z(v);
  };
  sl(n, () => ({ fixTouch: (I) => {
    const v = e;
    I && (v(337) === v(337) ? B[v(325)] = I : [v(238), v(336), v(255)][v(429)]((pe) => {
      const ye = v;
      _0x5cf75d[ye(432) + ye(347)](pe, _0x3d0138);
    })), Q();
  }, setFullscreen: (I) => {
    const v = e;
    if (v(419) !== v(419)) {
      const pe = _0x21ef50[v(407)]() - _0x40bece;
      if (_0x41f834 == _0x23660d[v(336)] || pe < 100) {
        const U = {};
        U[v(435)] = !0, U[v(235)] = !1;
        const ke = { ..._0x4b2ceb[v(257)], ...U };
        _0x5b5667[v(488)](ke);
      } else {
        const U = { ..._0x5df2f1[v(257)] };
        U[v(235)] = !1, _0x3aeb0a[v(488)](U);
      }
      const ye = {};
      ye[v(354)] = 0.3, ye[v(213)] = v(199);
      const Ae = { ..._0x265a12, ...ye };
      _0x1e406a(Ae);
    } else X(I);
  } }));
  const oe = {};
  oe[e(203)] = e(284) + e(452) + "1)";
  const ie = {};
  ie.d = H ? e(490) + e(426) + e(334) + e(202) + e(475) + e(277) + e(433) : e(200) + e(216) + e(243) + e(500) + e(399) + e(225) + e(228);
  const J = {};
  J[e(254)] = e(397);
  const re = {};
  re[e(203)] = e(284) + e(452) + "1)";
  const he = {};
  he.d = e(470) + e(292) + e(486) + e(484) + e(304) + e(422) + e(244) + e(348) + e(271) + e(459) + e(456) + e(466) + e(300) + e(289) + e(421) + e(468) + e(406) + e(321) + e(443) + e(205) + e(379);
  const fe = {};
  fe.d = e(270) + e(297) + e(378);
  const xe = {};
  xe[e(254)] = e(453);
  const ge = {};
  ge[e(203)] = e(284) + e(452) + "1)";
  const j = {};
  j.d = e(299) + e(230) + e(391) + e(472) + e(451) + e(420) + e(484) + e(304) + e(319) + e(244) + e(474) + e(244) + e(344) + e(423) + e(345) + e(418) + e(428) + e(264) + e(415) + e(465) + e(370) + e(276) + e(393) + e(305);
  const M = {};
  M[e(254)] = e(197);
  const T = {};
  T[e(203)] = e(284) + e(452) + "1)";
  const P = {};
  P.d = e(315) + e(258) + e(304) + e(241) + e(244) + e(348) + e(271) + e(402) + e(418) + e(328) + e(389) + e(482) + e(411);
  const w = {};
  w.cx = e(404), w.cy = "18", w.r = "1";
  const D = {};
  D[e(254)] = e(c ? 273 : 493);
  const F = {};
  F[e(203)] = e(284) + e(452) + "1)";
  const ue = {};
  ue.d = e(363) + e(214) + e(446) + e(388) + e(461) + e(233) + e(477) + e(260) + e(473) + e(240) + e(447) + e(463);
  const ve = {};
  ve.d = e(408) + e(362) + e(361) + e(222) + e(340) + e(381) + e(282) + e(496) + e(308) + e(279) + e(295) + e(207) + e(376) + e(221) + e(326) + e(286) + e(467) + e(303) + e(357) + e(469) + e(223) + e(458) + e(220) + e(245) + e(338) + e(450) + e(483) + e(359) + e(246) + e(427) + e(309) + e(335) + e(209) + e(226) + e(227) + e(242) + e(369) + e(249) + e(372);
  const Ce = {};
  Ce[e(254)] = e(400);
  const Je = {};
  Je[e(203)] = e(284) + e(452) + "1)";
  const ct = {};
  ct.d = e(499) + e(283) + e(346) + e(194) + e(394) + e(256) + e(395) + e(351) + e(481) + e(267) + e(401) + e(365) + e(343) + e(217) + e(436) + e(398) + e(313) + e(301) + e(293) + e(476) + e(375) + e(298) + e(454) + e(457) + e(265) + e(291);
  const Tt = {};
  Tt[e(254)] = e(430);
  const Le = {};
  Le[e(203)] = e(284) + e(452) + "1)";
  const Oe = {};
  Oe.d = e(259) + e(236) + e(405) + e(390);
  const Ke = {};
  Ke[e(254)] = e(329);
  const mt = {};
  mt[e(203)] = e(284) + e(452) + "1)";
  const ft = {};
  ft.d = e(364) + e(386) + e(327) + e(416) + e(478) + e(224) + e(374) + e(272) + e(234);
  const tn = {};
  tn[e(254)] = e(342);
  const nn = {};
  nn[e(203)] = e(284) + e(452) + "1)";
  const _n = {};
  _n.d = e(332) + e(320) + e(392) + e(366) + e(256) + e(341) + e(248) + e(487) + e(212);
  const rn = {};
  return rn[e(254)] = e(412), q.jsxs(q.Fragment, { children: [s[e(257)][e(435)] ? q.jsxs(pv, { id: e(268) + e(252) + r, style: ne, ref: S, children: [q.jsxs(Bt, { "data-id": e(495), children: [q.jsx(e(339), { xmlns: e(239) + e(491) + e(396), width: "28", height: "28", viewBox: e(410), style: oe, children: q.jsx(e(324), ie) }), q.jsx(Ft, J)] }), q.jsxs(Bt, { "data-id": e(497), children: [q.jsxs(e(339), { xmlns: e(239) + e(491) + e(396), width: "28", height: "28", viewBox: e(410), style: re, children: [q.jsx(e(324), he), q.jsx(e(324), fe)] }), q.jsx(Ft, xe)] }), q.jsxs(Bt, { "data-id": e(266), children: [q.jsx(e(339), { xmlns: e(239) + e(491) + e(396), width: "28", height: "28", viewBox: e(410), style: ge, children: q.jsx(e(324), j) }), q.jsx(Ft, M)] }), q.jsxs(Bt, { "data-id": e(353), children: [q.jsxs(e(339), { xmlns: e(239) + e(491) + e(396), width: "28", height: "28", viewBox: e(410), style: T, children: [q.jsx(e(324), P), q.jsx(e(498), w)] }), q.jsx(Ft, D)] }), q.jsxs(Bt, { "data-id": e(384), children: [q.jsxs(e(339), { xmlns: e(239) + e(491) + e(396), width: "25", height: "25", viewBox: e(410), style: F, children: [q.jsx(e(324), ue), q.jsx(e(324), ve)] }), q.jsx(Ft, Ce)] }), q.jsxs(Bt, { "data-id": e(371), children: [q.jsx(e(339), { xmlns: e(239) + e(491) + e(396), width: "28", height: "28", viewBox: e(410), style: Je, children: q.jsx(e(324), ct) }), q.jsx(Ft, Tt)] }), q.jsxs(Bt, { "data-id": e(251), children: [q.jsx(e(339), { xmlns: e(239) + e(491) + e(396), width: "28", height: "28", viewBox: e(410), style: Le, children: q.jsx(e(324), Oe) }), q.jsx(Ft, Ke)] }), q.jsxs(Bt, { "data-id": e(437), children: [q.jsx(e(339), { xmlns: e(239) + e(491) + e(396), width: "28", height: "28", viewBox: e(410), style: mt, children: q.jsx(e(324), ft) }), q.jsx(Ft, tn)] }), q.jsxs(Bt, { "data-id": e(232), children: [q.jsx(e(339), { xmlns: e(239) + e(491) + e(396), width: "28", height: "28", viewBox: e(410), style: nn, children: q.jsx(e(324), _n) }), q.jsx(Ft, rn)] })] }) : null, q.jsx(gv, { id: e(268) + e(261) + "s_" + r, className: e(387), ref: E, style: b, children: q.jsx(mv, { style: N, src: xv, className: e(387), id: e(268) + e(480) + r, alt: e(409), ref: m, draggable: !1 }) })] });
});
function Mo() {
  const t = ["H4c-1.103 ", "2352695kiyItR", ".897-2 2v4", "1.003 0 0 ", "set", "data-id", "M10 4H8v4H", ".w3.org/20", "eenchange", "Show ID", "screenchan", "fullscreen", ".004 1.004", "copy", "circle", "M20.978 13", "7zm11-5h-2", ".024l-14-1", "closest", "425656Jgrrca", "Paste", "readText", "move", "M5 5h5V3H3", "QNMzf", "h4zm12-6h-", "fill", "shortcut", "2-2h-4V4h1", "height", "0V4a1 1 0 ", "stener", "2-.082-.03", "click", "msfullscre", "0 0 1.645z", "cursor", "27-1.547 5", "qNHDg", "v7h2zm5 14", "57-5.428 6", "landscape", "CIcfF", "027 1.027 ", ".832L6.697", "s-.775-3.9", "061-.016.0", "0 1-1V4a1 ", "m-2-4h2V3h", "3a.986.986", " 0 0 0-.38", "-7v2h5z", "OOYnY", "-1.103-.89", "getBoundin", "back", "7 16 3v2c2", "V5h14v14z", "isDown", "4zm0 5h16v", "pageX", "mousemove", "http://www", "S18.387 17", " 2v16c0 1.", "2-.116C7.0", "H5v-5H3v7h", "103.897 2 ", "0 0 0 .38-", "8v12.264l-", "3559980AMwfGq", "3 9a1.003 ", "7.032 15 7", "3839535FjLSRH", "recents", "menu_", "shortcutEv", "children", "mouseup", " 0 0 0-1.5", "get", "10c-1.103 ", "M4 6h16v2H", " 3.999 4.0", "touch_clas", "ykPBr", "action", " 2v5H4V5h3", "345-5.236 ", "paste", "6l3.612-4.", "assistive_", "PswDW", "M6 12h6v2H", "03 0 2-.89", "1zm-1 16H5", "Hide ID", "18oeYPvb", "QvzqL", "2 2zm2 7v-", "zm0-6h-4V4", "pageY", "27.05A1 1 ", "iCKTn", "left", "48 3.832a1", ".21a1 1 0 ", "rgba(255, ", "ZuQrz", "3 0-2 .897", "8JbreiN", "data", ".897-2-2-2", "clientX", "1.048z", "1.103 0-2 ", "674.31a1 1", "touch", "0 0 0 14 2", "grab", "6zm0 4h6v2", "08 3.677L7", "M20 11V5c0", "4c0-1.103-", "-.769zm-8.", "9039604pJArKG", ".103.897 2", "0-2 .897-2", "H13z", "addEventLi", "webkitfull", " 0 0 0 1.0", "4c-.025-.0", "touchend", "type", "shortcutCo", "0 0 0 .782", "min", "M16.75 2h-", "50%", "mozfullscr", "532815HpPPrP", " 2v13c0 1.", "822 13 9A1", "4v-4c0-1.1", "110gXmkHj", "clipboard", "path", "current", " 7H4c-1.10", "1v16a1 1 0", "-2-2-2zm-1", "Recents", "GlBNc", "RUEVI", "m4.431 12.", "mjNEF", "0h2v-6H4v2", "17-.056-.0", "mousedown", "Rkmhq", ".116c.026-", "svg", "-2-5zM4 17", "69-.823l-1", "Home", "-1.052-3.3", "2 2h7c1.10", " 2-2v-7c0-", "0 0-.396-1", "tListener", "2 2h10c1.1", "getAttribu", "dFauy", "7a1 1 0 0 ", "hzffX", "device_id", "opacity", "SviXs", "UeYHb", " 2 2zm0-8h", "taskId", "33L12 5.86", "passive", "-3.229 2-5", ".225-1.1 2", "M16 21c3.5", "M20 3H4a1 ", "5.46 1.701", "9 21V3a1 1", "hVSHQ", "includes", "59 15.016 ", " 0-2 .897-", "sync", " 15H4V9z", "ault", "1 0 0 0-1-", "8.347l-3.0", "0 0-1.554-", "width", "H6z", "0v10z", "12%", "h2.697l5.7", "clientY", "touchmove", "volume", "24XDEEJr", "1 0 0 0-1 ", "assistive", " 5.999-9S1", "0 18V4h10l", "6v2H4z", "7-2-2-2h-3", " 1 0 0 0 1", "7h7l.001 7", "0a.999.999", "75.931l2 1", "00/svg", "Screen", "a.995.995 ", "v5h-5v2h7z", "Volume", "416 3.377 ", "7 2-2V4c0-", "enchange", "11.75", "2H4zm0 5h1", "H4zm16-6h-", "now", "M16 7v10c1", "Icon", "0 0 24 24", "75z", "Back", "SRSbI", "right", "v2h8V5h3v6", " 0 0 1 1h1", "956181vrGFOU", "1.103-.897", "OCNlk", " 0 0 0-1 1", "zM4 20V10h", " 2v10c0 1.", "3 0 2-.897", "13%", "top", "4v2h6zM8 2", "4.445-2.96", "-2-2-2zm-9", "forEach", "Sync", "zIndex", "removeEven", "h-2v6h6z", "target", "showMenu", ".089-1.218", "home", "change", "div", "preventDef", "fuMJM", "hwksV", "03-.897-2-", "max", "tJLji", ".999-4.909", ".614 16 19", "cRlkw", "mouse", ".015.057-.", "-1-1H8a1 1", "255, 255, ", "Copy", ".257 5.127", "ent", "c1.103 0 2", "l10.283 7.", "93-.019a1.", "7 2-2v-4h4", "touchstart", "9.527 4.54", "gClientRec", "v2z", "sQHkP", "h-5c-1.103", "-.897 2-2V", "-2 2v6c0 1", "10l.002 10", "3c.033 0 .", "M20 2H10c-", "focus", "a1 1 0 0 0", "47 3.999 7", "2 2h7c0 1.", "6v6h2v-4h4", " 0 0 0-.57", ".387 1.386", "6a1 1 0 0 ", "UyIIb", "touch_", "0 1.767.51", ".002 16H6.", "017.082-.0"];
  return Mo = function() {
    return t;
  }, Mo();
}
function Lo() {
  const t = ["buildDecod", "maxWidth", "innerHeigh", "5537965OFspWT", "setOrienta", "landscape", "isKeyFrame", "codec", "2NoGfMy", "tion", "translate", "height", "YsTlM", "een", "MjIoS", "configure", "decode", "delta", "scale", "optimizeFo", "20psMhTb", "ctx", "round", "getContext", "isPlay", "from", "setVideoMe", "Decoder er", "1708099IRmpnW", "error", "iframe", "concatUint", "rotate", "ror:", "lock", "videoMeta", "dware", "orientatio", "dmZHX", "length", "26413387sfMgQf", "setIsConne", "161NpqexF", "rLatency", "width", "8Arrays", "xGllR", "4754085sNnUau", "portrait", "close", "drawImage", "resizedWid", "now", "codedWidth", "setFullscr", "ZKcMK", "ZCaHX", "canvas", "key", "rootSize", "63534MDzWzS", "concat", "isMobile", "prefer-har", "ypdqr", "qBXeX", "autoResize", "decoder", "hardwareAc", "4ZYShyL", "384136teTRZy", "celeration", "state", "3868479PFaFNd", "codedHeigh", "avc1.64001"];
  return Lo = function() {
    return t;
  }, Lo();
}
const De = qn;
function qn(t, n) {
  const e = Lo();
  return qn = function(r, o) {
    return r = r - 179, e[r];
  }, qn(t, n);
}
(function(t, n) {
  const e = qn, r = t();
  for (; ; )
    try {
      if (-parseInt(e(244)) / 1 * (parseInt(e(224)) / 2) + -parseInt(e(187)) / 3 * (-parseInt(e(209)) / 4) + -parseInt(e(219)) / 5 + -parseInt(e(200)) / 6 + parseInt(e(182)) / 7 * (-parseInt(e(210)) / 8) + parseInt(e(213)) / 9 * (parseInt(e(236)) / 10) + parseInt(e(180)) / 11 === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Lo, 914902);
var Kc, Zc, Jc, Qc, el, tl, nl, rl, ol;
ol = De(194) + De(229), rl = De(191) + "th", nl = De(220) + De(225), tl = De(206), el = De(242) + "ta", Qc = De(216) + "er", Jc = De(222), Zc = De(247) + De(185), Kc = De(232);
class Sv {
  constructor(n, e, r, o) {
    kt(this, ol, (n) => {
      const e = De;
      if (n) {
        const r = window[e(218) + "t"] + 10, o = this[e(191) + "th"](null, this[e(199)][e(184)], this[e(199)][e(227)], r, r);
        this[e(184)] = o[e(184)], this[e(227)] = o[e(227)];
      } else this[e(184)] = this[e(199)][e(184)], this[e(227)] = this[e(199)][e(227)];
    });
    kt(this, rl, (n, e, r, o, i) => {
      const s = De;
      let a;
      return n && o > this[s(217)] && r > e && (i = this[s(217)]), i && (a = i / e * r, a > o && (s(195) === s(186) ? (_0xc1c375 = _0x519a4e / _0x471eca * _0x1d6ba2, _0x3c6886 = _0x27b293 / _0x23d436 * _0x5e145d) : (i = o / r * e, a = o / e * e))), { width: Math[s(238)](i), height: Math[s(238)](a) };
    });
    kt(this, nl, (n) => {
      const e = De;
      this[e(253) + "n"] = n, this[e(202)] && screen[e(253) + "n"][e(250)](n);
    });
    kt(this, tl, (n, e) => {
      var a;
      const r = De, o = this[r(202)] == !0 ? window[r(218) + "t"] - 12 : window[r(218) + "t"] - 50, i = this[r(191) + "th"](!0, n, e, o, o);
      this[r(184)] = i[r(184)], this[r(227)] = i[r(227)], !this[r(199)] && ((a = this[r(181) + "ct"]) == null || a.call(this, !0));
      const s = {};
      s[r(184)] = i[r(184)], s[r(227)] = i[r(227)], this[r(199)] = s;
    });
    kt(this, el, (n) => {
      const e = De, r = n instanceof Uint8Array ? n : new Uint8Array(n);
      this[e(251)] = r;
    });
    kt(this, Qc, () => {
      const n = De, e = new VideoDecoder({ output: async (o) => {
        const i = qn, s = await createImageBitmap(o);
        (!this[i(184)] || !this[i(227)]) && this[i(206)](o[i(193)], o[i(214) + "t"]), this[i(253) + "n"] == i(221) ? i(230) === i(196) ? (this[i(197)] = _0x557a19, this[i(217)] = _0x3cbec4, this[i(202)] = _0x204f52, this[i(181) + "ct"] = _0x4a5b86, this[i(237)] = _0x49bdb4[i(239)]("2d"), this[i(207)] = this[i(216) + "er"](), this[i(251)] = null, this[i(246)] = null, this[i(240)] = null, this[i(184)] = null, this[i(227)] = null, this[i(199)] = null, this[i(253) + "n"] = i(188)) : (this[i(197)][i(184)] = this[i(227)], this[i(197)][i(227)] = this[i(184)], this[i(237)][i(226)](0, this[i(184)]), this[i(237)][i(248)](Math.PI / 2), this[i(237)][i(234)](-1, -1), this[i(237)][i(190)](s, 0, 0, this[i(184)], this[i(227)])) : (this[i(197)][i(184)] = this[i(184)], this[i(197)][i(227)] = this[i(227)], this[i(237)][i(190)](s, 0, 0, this[i(184)], this[i(227)])), s[i(189)](), o[i(189)]();
      }, error: (o) => console[n(245)](n(243) + n(249), o) }), r = {};
      return r[n(223)] = n(215) + "E", r[n(208) + n(211)] = n(203) + n(252), r[n(235) + n(183)] = !0, e[n(231)](r), e;
    });
    kt(this, Jc, (n) => {
      const e = De;
      for (let r = 0; r <= n[e(179)] - 4; r++)
        if (n[r] === 0 && n[r + 1] === 0 && n[r + 2] === 0 && n[r + 3] === 1) {
          if (e(254) !== e(228))
            return (n[r + 4] & 31) === 5;
          _0x4c4791 = this[e(247) + e(185)](this[e(251)], this[e(246)]), this[e(240)] = !0;
        }
      for (let r = 0; r <= n[e(179)] - 3; r++)
        if (n[r] === 0 && n[r + 1] === 0 && n[r + 2] === 1)
          if (e(205) === e(204)) {
            const o = _0x397a5a instanceof _0x28877c ? _0x4fb1ad : new _0x3c9175(_0x39d2d4);
            this[e(251)] = o;
          } else
            return (n[r + 3] & 31) === 5;
      return !1;
    });
    kt(this, Zc, (n, e) => {
      const r = De, o = Array[r(241)](n)[r(201)](Array[r(241)](e));
      return new Uint8Array(o);
    });
    kt(this, Kc, (n) => {
      const e = De;
      if (!this[e(207)] || this[e(207)][e(212)] == e(189) || !this[e(251)]) return;
      let r = n instanceof Uint8Array ? n : new Uint8Array(n);
      const o = this[e(222)](r);
      o && (this[e(246)] = r), this[e(246)] && this[e(251)] && (!this[e(240)] && (r = this[e(247) + e(185)](this[e(251)], this[e(246)]), this[e(240)] = !0), this[e(207)][e(232)](new EncodedVideoChunk({ timestamp: performance[e(192)]() * 1e3, type: e(o ? 198 : 233), data: r })));
    });
    const i = qn;
    this[i(197)] = n, this[i(217)] = e, this[i(202)] = r, this[i(181) + "ct"] = o, this[i(237)] = n[i(239)]("2d"), this[i(207)] = this[i(216) + "er"](), this[i(251)] = null, this[i(246)] = null, this[i(240)] = null, this[i(184)] = null, this[i(227)] = null, this[i(199)] = null, this[i(253) + "n"] = i(188);
  }
}
function pn(t, n) {
  const e = Do();
  return pn = function(r, o) {
    return r = r - 323, e[r];
  }, pn(t, n);
}
(function(t, n) {
  const e = pn, r = t();
  for (; ; )
    try {
      if (parseInt(e(341)) / 1 * (parseInt(e(402)) / 2) + parseInt(e(333)) / 3 + -parseInt(e(415)) / 4 + parseInt(e(442)) / 5 * (-parseInt(e(385)) / 6) + -parseInt(e(441)) / 7 + parseInt(e(412)) / 8 * (-parseInt(e(329)) / 9) + parseInt(e(358)) / 10 * (parseInt(e(406)) / 11) === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Do, 593785);
function Do() {
  const t = ["current", "10fLVagI", "onSyncIFra", "set", "DBDwh", "ITFrs", "get", " closed co", "webkitFull", "zTrFm", "text", "ror", "FaArH", "tvxKT", "setFullscr", "emit", "iframe", "onScreenEv", "map", "zPSyd", "ZrRVm", "tListener", "height", "value", "resTy", "close", "een", "size", "24TKkHoA", "false", "clipboard", "iting for ", "headers", "marginTop", "isDown", "response", "type_clien", "screenElem", "BSNrJ", "message", "get_video_", "XTsBL", "xTeDF", "screen", "showMenu", "6azncTM", "mozFullScr", "qxhuh", "tabIndex", "42825420BAmuCU", "userAgent", "setVideoMe", "code", "decode", "post", "9286472hkFtsq", "applicatio", "addEventLi", "3035140cLBuxd", "fnaCV", "UlMJO", "screen_mai", "reconnecti", "ent", "juxjj", "IWlXs", "middle", "error", "password", "fullscreen", "width", "Element", "MVTgF", "Content-Ty", "connect", "cAijF", "tion", "connect_er", "draggable", "taskId", "aJtdF", "change", "meta", "COPY_TEXT", "7904575kjTpbO", "1417365mBTeOY", "method", "isMobile", "data", "mjlgt", "writeText", "passwd", "orientatio", "eenElement", "test", "center", "control", "msg", "video_meta", "join_room", "disconnect", "xYCBX", "status", "MKQVv", "ceDMn", "enElement", "Timeout wa", "image_", "action", "connection", "shortcut", "9TDlgzN", "screen_", "fixTouch", "info", "538905RIreHP", "de: ", "children", "pVvgs", "stener", "delete", "device_id", "timeout", "234547JfXtJf", "removeEven", "shortcutEv", "iqBzI", "RQZtX", "length", "n/json", "sync", "type", "setOrienta", "large", "vVQVD", "msFullscre", "SBmgG", "AFuwh", "url"];
  return Do = function() {
    return t;
  }, Do();
}
const Wv = il((t, n) => {
  const e = pn, { serve: r, dataDevice: o, maxWidth: i, showAssistive: s, showDeviceId: a, syncEvent: c, syncButton: u } = t, f = o[e(339)], d = /iPhone|iPad|iPod|Android/i[e(451)](navigator[e(407)]), l = e(453), [y, g] = rt(null), [p, h] = rt(a), E = {};
  E[e(401)] = !1, E[e(391)] = !1;
  const [S, m] = rt(E), C = Xe(null), b = Xe(null), [R, A] = rt(null), N = e(325) + f, z = e(330) + f, Y = e(418) + "n_" + f, ne = Xe(null), K = Xe(null), B = Xe(null), [H, X] = rt([]), $ = Xe(null), ee = Xe(/* @__PURE__ */ new Map());
  ot(() => {
    h(a);
  }, [a]);
  const Z = (j) => {
    X((M) => [...M, j]);
  }, Q = (j) => {
    const M = e;
    b[M(357)][M(372)](M(396), j), c == null || c(j);
  };
  sl(n, () => ({ api: async function(j, M = 5e3) {
    const T = e;
    if (T(336) !== T(336))
      if (_0x3e2b09[T(459)] == !0) {
        _0x4f9189[T(357)] = _0x5690c8;
        const P = {};
        P[T(326)] = T(374) + T(420), _0x396af1[T(372)](T(396), P);
      } else {
        const P = {};
        P[T(454)] = _0x4b5253[T(454)], P[T(349)] = T(424), _0x205d75(P);
      }
    else return new Promise((P, w) => {
      const D = T, F = setTimeout(() => {
        const ue = pn;
        ee[ue(357)][ue(338)](j[ue(436)]);
        const ve = {};
        ve[ue(326)] = j[ue(326)], ve[ue(436)] = j[ue(436)], ve[ue(459)] = !1, ve[ue(396)] = ue(324) + ue(388) + ue(392), w(ve);
      }, M);
      ee[D(357)][D(360)](j[D(436)], (ue) => {
        clearTimeout(F), P(ue);
      }), b[D(357)][D(372)](D(396), j);
    });
  }, sync: function(j) {
    const M = e;
    if (M(344) !== M(404)) b[M(357)][M(372)](M(396), j);
    else {
      const T = {};
      T[M(326)] = M(397) + M(439), _0x16ab06[M(372)](M(455), T);
    }
  }, showDeviceId: function(j) {
    h(j);
  } })), ot(() => {
    const j = e;
    j(361) === j(352) ? _0x11d53d[j(342) + j(378)](j(426) + j(438), _0x43b7e2) : (async () => {
      const M = j;
      try {
        if (M(395) !== M(354)) {
          const T = {};
          T[M(430) + "pe"] = M(413) + M(347);
          const P = {};
          P[M(339)] = o[M(339)], P[M(425)] = o[M(448)];
          const w = {};
          w[M(356)] = r, w[M(443)] = M(411), w[M(340)] = 1e4, w[M(389)] = T, w[M(445)] = P;
          const D = w, F = await sv(D);
          g(F[M(445)]);
        } else _0x3ea301[M(357)][M(372)](M(396), _0xade564), _0x5c4bb1 == null || _0x5c4bb1(_0x315d1d);
      } catch (T) {
        const P = {};
        P[M(454)] = T, P[M(349)] = M(424), Z(P);
      }
    })();
  }, []), ot(() => {
    const j = e;
    if (b[j(357)] || !y) return;
    const M = {};
    M[j(419) + "on"] = !1;
    const T = no(y, M);
    return T.on(j(431), () => {
      const P = j, w = {};
      w[P(326)] = P(431), w[P(393) + "t"] = l, w[P(339)] = o[P(339)], w[P(444)] = d, w[P(448)] = o[P(448)], T[P(372)](P(456), w);
    }), T.on(j(456), (P) => {
      const w = j;
      if (w(421) !== w(421)) _0x2dc346[w(357)][w(372)](w(396), _0x3ccaa6);
      else if (P[w(459)] == !0) {
        b[w(357)] = T;
        const D = {};
        D[w(326)] = w(374) + w(420), T[w(372)](w(396), D);
      } else if (w(377) === w(377)) {
        const D = {};
        D[w(454)] = P[w(454)], D[w(349)] = w(424), Z(D);
      } else if (_0x3264ed) {
        if (_0x2f0e20[w(357)][w(408) + "ta"](_0x5d560e), !_0x50ceb4[w(357)][w(373)]) {
          const D = {};
          D[w(326)] = w(359) + "me", _0x27712b[w(372)](w(396), D);
        }
      } else {
        const D = {};
        D[w(326)] = w(397) + w(439), _0x296c29[w(372)](w(455), D);
      }
    }), T.on(j(400), (P) => {
      const w = j;
      w(398) !== w(398) ? _0x162228(_0x13b258) : $[w(357)][w(410)](P);
    }), T.on(j(455), (P) => {
      const w = j;
      if (P) {
        if (w(458) === w(417)) {
          const D = { ..._0x3af5cf };
          D[w(401)] = !1, _0x1e4a4e(D);
        } else if ($[w(357)][w(408) + "ta"](P), !$[w(357)][w(373)])
          if (w(460) === w(366)) {
            const D = _0x377540[w(357)];
            _0x134121[w(357)] = new _0x44f3c8(D, _0x2c12fc, _0x5808c6, _0x6b7bdb);
          } else {
            const D = {};
            D[w(326)] = w(359) + "me", T[w(372)](w(396), D);
          }
      } else if (w(416) === w(416)) {
        const D = {};
        D[w(326)] = w(397) + w(439), T[w(372)](w(455), D);
      } else return new _0x291091((D, F) => {
        const ue = w, ve = _0x3c2466(() => {
          const Ce = pn;
          _0x5d023e[Ce(357)][Ce(338)](_0x35cadc[Ce(436)]);
          const Je = {};
          Je[Ce(326)] = _0x57ee39[Ce(326)], Je[Ce(436)] = _0x55c808[Ce(436)], Je[Ce(459)] = !1, Je[Ce(396)] = Ce(324) + Ce(388) + Ce(392), F(Je);
        }, _0x4e2b08);
        _0x372c3a[ue(357)][ue(360)](_0x397e13[ue(436)], (Ce) => {
          _0x4c2139(ve), D(Ce);
        }), _0x189181[ue(357)][ue(372)](ue(396), _0x252acf);
      });
    }), T.on(j(396), (P) => {
      const w = j;
      if ((P[w(326)] == w(440) || P[w(326)] == w(343) + w(420)) && P[w(367)][w(346)] > 0 ? navigator[w(387)][w(447)](P[w(367)]) : P[w(326)] == w(449) + "n" && ($[w(357)][w(350) + w(433)](P[w(380)]), B[w(357)][w(331)](P[w(380)])), P[w(436)])
        if (w(432) !== w(422)) {
          const D = ee[w(357)][w(363)](P[w(436)]);
          D && (D(P), ee[w(357)][w(338)](P[w(436)]));
        } else {
          const D = {};
          D[w(326)] = w(359) + "me", _0xe509b9[w(372)](w(396), D);
        }
    }), T.on(j(434) + j(368), (P) => {
      const w = j, D = {};
      D[w(454)] = P, D[w(349)] = w(424), Z(D);
    }), T.on(j(457), (P) => {
      const w = j;
      if (w(399) === w(437))
        _0x3457e2 === _0x521eb9 && _0x14dc58[w(328)] === w(339) ? _0x46a2bf(!_0x5798ff) : _0x17f884 === _0x3001e5 && _0x13435e[w(328)] === w(348) ? _0x34a9e9(_0x5649d1[w(339)]) : _0x3911d4(_0x1e88cd);
      else {
        const D = {};
        if (D[w(454)] = w(327) + w(364) + w(334) + P[w(409)], D[w(349)] = w(332), Z(D), C[w(357)])
          if (w(362) === w(355)) {
            _0x52ff83[w(357)] = _0x10ef1c;
            const F = {};
            F[w(326)] = w(374) + w(420), _0x1b4ef4[w(372)](w(396), F);
          } else C[w(357)][w(382)]();
      }
    }), () => {
      const P = j;
      if (P(461) !== P(461)) {
        const w = _0x6c4cd6(() => {
          const D = P;
          _0x1f023e[D(357)][D(338)](_0x39823f[D(436)]);
          const F = {};
          F[D(326)] = _0x4e7891[D(326)], F[D(436)] = _0x1a83b[D(436)], F[D(459)] = !1, F[D(396)] = D(324) + D(388) + D(392), _0xa03d16(F);
        }, _0x301701);
        _0x58bd35[P(357)][P(360)](_0x2ff1bd[P(436)], (D) => {
          _0x1e8b7f(w), _0x288498(D);
        }), _0xe94bc3[P(357)][P(372)](P(396), _0x143741);
      } else T && T[P(457)]();
    };
  }, [y]), ot(() => {
    const j = e, M = K[j(357)];
    $[j(357)] = new Sv(M, i, d, A);
  }, []), ot(() => {
    const j = e, M = () => {
      const T = pn;
      if (T(369) !== T(376)) {
        const P = document[T(426) + T(428)] || document[T(365) + T(394) + T(420)] || document[T(403) + T(450)] || document[T(353) + T(323)];
        $[T(357)][T(371) + T(383)](!!P), B[T(357)][T(371) + T(383)](!!P), B[T(357)][T(331)]();
      } else _0x4ca2ab[T(357)][T(350) + T(433)](_0x438544[T(380)]), _0xd39ef[T(357)][T(331)](_0x15f0e3[T(380)]);
    };
    return document[j(414) + j(337)](j(426) + j(438), M), () => {
      const T = j;
      if (T(345) !== T(446)) document[T(342) + T(378)](T(426) + T(438), M);
      else {
        const P = {};
        P[T(454)] = T(327) + T(364) + T(334) + _0x3f5507[T(409)], P[T(349)] = T(332), _0x3daf71(P), _0x333a60[T(357)] && _0x110f5c[T(357)][T(382)]();
      }
    };
  }, []);
  const oe = {};
  oe[e(335)] = o[e(339)];
  const ie = {};
  ie[e(384)] = e(351);
  const J = {};
  J[e(384)] = e(351);
  const re = {};
  re[e(384)] = e(351);
  const he = {};
  he[e(379)] = 0, he[e(427)] = 0;
  const fe = {};
  fe[e(363)] = S, fe[e(360)] = m;
  const xe = {};
  xe.id = N, xe[e(405)] = "0", xe[e(435)] = e(386);
  const ge = {};
  return ge[e(390)] = 5, q.jsxs(pd, { id: Y, children: [p && q.jsx(yd, { children: q.jsx(vd, oe) }), H[e(346)] == 0 ? q.jsxs(q.Fragment, { children: [!R && q.jsxs(bf, { align: e(452), gap: e(423), children: [q.jsx(xr, ie), q.jsx(xr, J), q.jsx(xr, re)] }), q.jsxs(md, { ref: ne, id: z, style: R ? {} : he, children: [s ? q.jsx(bv, { status: fe, ref: B, imageRef: K, displayId: f, isMobile: d, isShowDeviceId: p, onSenData: (j, M) => {
    const T = e;
    if (T(381) === T(381))
      if (j === Ds && M[T(328)] === T(339))
        if (T(370) !== T(370)) {
          _0x308fa1[T(357)][T(338)](_0x2f2841[T(436)]);
          const P = {};
          P[T(326)] = _0xd49310[T(326)], P[T(436)] = _0x56ec2b[T(436)], P[T(459)] = !1, P[T(396)] = T(324) + T(388) + T(392), _0x120f54(P);
        } else h(!p);
      else j === Ds && M[T(328)] === T(348) ? T(429) !== T(429) ? (_0x4cbd2b(_0x4a8f2e), _0xdb40c[T(357)][T(338)](_0x12eea1[T(436)])) : u(o[T(339)]) : Q(M);
    else {
      const P = {};
      P[T(326)] = T(431), P[T(393) + "t"] = _0x2f9b1f, P[T(339)] = _0x552a6a[T(339)], P[T(444)] = _0x41c720, P[T(448)] = _0x53deaf[T(448)], _0x1f45d3[T(372)](T(456), P);
    }
  } }) : null, q.jsx(hv, { canvasContent: xe, imageRef: K, isMobile: d, assistive: S, onImgEvent: (j, M) => {
    const T = e;
    if (j === Gf) {
      const P = { ...S };
      P[T(401)] = !1, m(P);
    } else Q(M);
  } })] })] }) : H[e(375)]((j, M) => q.jsx(mf, { style: ge, message: j[e(454)], type: j[e(349)], showIcon: !0, closable: !0 }, M))] });
});
(function(t, n) {
  for (var e = Bs, r = t(); ; )
    try {
      var o = parseInt(e(216)) / 1 * (parseInt(e(213)) / 2) + parseInt(e(221)) / 3 * (parseInt(e(215)) / 4) + parseInt(e(219)) / 5 * (parseInt(e(217)) / 6) + parseInt(e(220)) / 7 + -parseInt(e(218)) / 8 + parseInt(e(214)) / 9 + -parseInt(e(212)) / 10 * (parseInt(e(211)) / 11);
      if (o === n) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Bo, 530453);
function Bs(t, n) {
  var e = Bo();
  return Bs = function(r, o) {
    r = r - 211;
    var i = e[r];
    return i;
  }, Bs(t, n);
}
function Bo() {
  var t = ["727872ZTgNFC", "3920pwlsmY", "2969197AphJMM", "1193253QFVRNT", "5011523kOZuqV", "20WPydEW", "268910lnZWOm", "3605670TnfrLY", "4UZrzPi", "1ZejmCm", "1344iihkCi"];
  return Bo = function() {
    return t;
  }, Bo();
}
export {
  Wv as ViewRP
};
