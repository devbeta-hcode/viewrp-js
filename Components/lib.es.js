var Qf = Object.defineProperty;
var e0 = (t, n, e) => n in t ? Qf(t, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[n] = e;
var t0 = (t, n) => () => (n || t((n = { exports: {} }).exports, n), n.exports);
var It = (t, n, e) => e0(t, typeof n != "symbol" ? n + "" : n, e);
import * as _ from "react";
import Fe, { useDebugValue as ma, createElement as n0, useRef as Xe, useContext as tn, isValidElement as r0, version as o0, createContext as zs, useLayoutEffect as i0, useEffect as it, useState as ot, forwardRef as sl, useImperativeHandle as al } from "react";
import ga from "react-dom";
var _v = t0(($v, ho) => {
  function xo() {
    var t = ["get", "prototype", "5lLyTfA", "erty", "value", "keys", "1520202MnManl", "hasOwnProp", "502665ezUiZI", "1337qpXake", "6865243nboGcy", "apply", "LpelH", "1738716XURcPe", "forEach", "length", "function", "ptor", "53559nucrQW", "enumerable", "380BxSkiV", "4bvZtFg", "23288PdwOLp", "undefined", "getOwnProp", "ertyDescri", "LqYPq", "defineProp", "construct", "call", "__esModule", "default", "1072060bwrlSS", "constructo"];
    return xo = function() {
      return t;
    }, xo();
  }
  var cr = po;
  (function(t, n) {
    for (var e = po, r = t(); ; )
      try {
        var o = parseInt(e(213)) / 1 + parseInt(e(203)) / 2 + parseInt(e(184)) / 3 * (-parseInt(e(192)) / 4) + parseInt(e(207)) / 5 * (parseInt(e(211)) / 6) + parseInt(e(214)) / 7 * (parseInt(e(193)) / 8) + -parseInt(e(189)) / 9 * (parseInt(e(191)) / 10) + -parseInt(e(215)) / 11;
        if (o === n) break;
        r.push(r.shift());
      } catch {
        r.push(r.shift());
      }
  })(xo, 418240);
  typeof globalThis !== cr(194) || typeof window !== cr(194) || (typeof global !== cr(194) ? global : cr(194));
  function s0(t) {
    var n = cr;
    return t && t[n(201)] && Object[n(206)][n(212) + n(208)][n(200)](t, n(202)) ? t[n(202)] : t;
  }
  function po(t, n) {
    var e = xo();
    return po = function(r, o) {
      r = r - 182;
      var i = e[r];
      return i;
    }, po(t, n);
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
  var va;
  function a0() {
    if (va) return tr;
    va = 1;
    var t = Fe, n = Symbol.for("react.element"), e = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
    function s(a, c, l) {
      var d, f = {}, u = null, v = null;
      l !== void 0 && (u = "" + l), c.key !== void 0 && (u = "" + c.key), c.ref !== void 0 && (v = c.ref);
      for (d in c) r.call(c, d) && !i.hasOwnProperty(d) && (f[d] = c[d]);
      if (a && a.defaultProps) for (d in c = a.defaultProps, c) f[d] === void 0 && (f[d] = c[d]);
      return { $$typeof: n, type: a, key: u, ref: v, props: f, _owner: o.current };
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
  var ba;
  function c0() {
    return ba || (ba = 1, process.env.NODE_ENV !== "production" && function() {
      var t = Fe, n = Symbol.for("react.element"), e = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g = Symbol.iterator, h = "@@iterator";
      function x(p) {
        if (p === null || typeof p != "object")
          return null;
        var P = g && p[g] || p[h];
        return typeof P == "function" ? P : null;
      }
      var w = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function y(p) {
        {
          for (var P = arguments.length, D = new Array(P > 1 ? P - 1 : 0), $ = 1; $ < P; $++)
            D[$ - 1] = arguments[$];
          m("error", p, D);
        }
      }
      function m(p, P, D) {
        {
          var $ = w.ReactDebugCurrentFrame, pe = $.getStackAddendum();
          pe !== "" && (P += "%s", D = D.concat([pe]));
          var ve = D.map(function(fe) {
            return String(fe);
          });
          ve.unshift("Warning: " + P), Function.prototype.apply.call(console[p], console, ve);
        }
      }
      var A = !1, b = !1, O = !1, C = !1, L = !1, F;
      F = Symbol.for("react.module.reference");
      function Y(p) {
        return !!(typeof p == "string" || typeof p == "function" || p === r || p === i || L || p === o || p === l || p === d || C || p === v || A || b || O || typeof p == "object" && p !== null && (p.$$typeof === u || p.$$typeof === f || p.$$typeof === s || p.$$typeof === a || p.$$typeof === c || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        p.$$typeof === F || p.getModuleId !== void 0));
      }
      function oe(p, P, D) {
        var $ = p.displayName;
        if ($)
          return $;
        var pe = P.displayName || P.name || "";
        return pe !== "" ? D + "(" + pe + ")" : D;
      }
      function G(p) {
        return p.displayName || "Context";
      }
      function B(p) {
        if (p == null)
          return null;
        if (typeof p.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof p == "function")
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
          case l:
            return "Suspense";
          case d:
            return "SuspenseList";
        }
        if (typeof p == "object")
          switch (p.$$typeof) {
            case a:
              var P = p;
              return G(P) + ".Consumer";
            case s:
              var D = p;
              return G(D._context) + ".Provider";
            case c:
              return oe(p, p.render, "ForwardRef");
            case f:
              var $ = p.displayName || null;
              return $ !== null ? $ : B(p.type) || "Memo";
            case u: {
              var pe = p, ve = pe._payload, fe = pe._init;
              try {
                return B(fe(ve));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var W = Object.assign, H = 0, te, Z, Q, ee, ae, ie, K;
      function ne() {
      }
      ne.__reactDisabledLog = !0;
      function xe() {
        {
          if (H === 0) {
            te = console.log, Z = console.info, Q = console.warn, ee = console.error, ae = console.group, ie = console.groupCollapsed, K = console.groupEnd;
            var p = {
              configurable: !0,
              enumerable: !0,
              value: ne,
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
      function de() {
        {
          if (H--, H === 0) {
            var p = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: W({}, p, {
                value: te
              }),
              info: W({}, p, {
                value: Z
              }),
              warn: W({}, p, {
                value: Q
              }),
              error: W({}, p, {
                value: ee
              }),
              group: W({}, p, {
                value: ae
              }),
              groupCollapsed: W({}, p, {
                value: ie
              }),
              groupEnd: W({}, p, {
                value: K
              })
            });
          }
          H < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var me = w.ReactCurrentDispatcher, R;
      function z(p, P, D) {
        {
          if (R === void 0)
            try {
              throw Error();
            } catch (pe) {
              var $ = pe.stack.trim().match(/\n( *(at )?)/);
              R = $ && $[1] || "";
            }
          return `
` + R + p;
        }
      }
      var k = !1, j;
      {
        var E = typeof WeakMap == "function" ? WeakMap : Map;
        j = new E();
      }
      function M(p, P) {
        if (!p || k)
          return "";
        {
          var D = j.get(p);
          if (D !== void 0)
            return D;
        }
        var $;
        k = !0;
        var pe = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var ve;
        ve = me.current, me.current = null, xe();
        try {
          if (P) {
            var fe = function() {
              throw Error();
            };
            if (Object.defineProperty(fe.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(fe, []);
              } catch (rt) {
                $ = rt;
              }
              Reflect.construct(p, [], fe);
            } else {
              try {
                fe.call();
              } catch (rt) {
                $ = rt;
              }
              p.call(fe.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (rt) {
              $ = rt;
            }
            p();
          }
        } catch (rt) {
          if (rt && $ && typeof rt.stack == "string") {
            for (var le = rt.stack.split(`
`), Je = $.stack.split(`
`), Pe = le.length - 1, Ne = Je.length - 1; Pe >= 1 && Ne >= 0 && le[Pe] !== Je[Ne]; )
              Ne--;
            for (; Pe >= 1 && Ne >= 0; Pe--, Ne--)
              if (le[Pe] !== Je[Ne]) {
                if (Pe !== 1 || Ne !== 1)
                  do
                    if (Pe--, Ne--, Ne < 0 || le[Pe] !== Je[Ne]) {
                      var je = `
` + le[Pe].replace(" at new ", " at ");
                      return p.displayName && je.includes("<anonymous>") && (je = je.replace("<anonymous>", p.displayName)), typeof p == "function" && j.set(p, je), je;
                    }
                  while (Pe >= 1 && Ne >= 0);
                break;
              }
          }
        } finally {
          k = !1, me.current = ve, de(), Error.prepareStackTrace = pe;
        }
        var An = p ? p.displayName || p.name : "", un = An ? z(An) : "";
        return typeof p == "function" && j.set(p, un), un;
      }
      function ke(p, P, D) {
        return M(p, !1);
      }
      function N(p) {
        var P = p.prototype;
        return !!(P && P.isReactComponent);
      }
      function J(p, P, D) {
        if (p == null)
          return "";
        if (typeof p == "function")
          return M(p, N(p));
        if (typeof p == "string")
          return z(p);
        switch (p) {
          case l:
            return z("Suspense");
          case d:
            return z("SuspenseList");
        }
        if (typeof p == "object")
          switch (p.$$typeof) {
            case c:
              return ke(p.render);
            case f:
              return J(p.type, P, D);
            case u: {
              var $ = p, pe = $._payload, ve = $._init;
              try {
                return J(ve(pe), P, D);
              } catch {
              }
            }
          }
        return "";
      }
      var Ce = Object.prototype.hasOwnProperty, dt = {}, Rt = w.ReactDebugCurrentFrame;
      function lt(p) {
        if (p) {
          var P = p._owner, D = J(p.type, p._source, P ? P.type : null);
          Rt.setExtraStackFrame(D);
        } else
          Rt.setExtraStackFrame(null);
      }
      function kt(p, P, D, $, pe) {
        {
          var ve = Function.call.bind(Ce);
          for (var fe in p)
            if (ve(p, fe)) {
              var le = void 0;
              try {
                if (typeof p[fe] != "function") {
                  var Je = Error(($ || "React class") + ": " + D + " type `" + fe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof p[fe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Je.name = "Invariant Violation", Je;
                }
                le = p[fe](P, fe, $, D, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Pe) {
                le = Pe;
              }
              le && !(le instanceof Error) && (lt(pe), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", $ || "React class", D, fe, typeof le), lt(null)), le instanceof Error && !(le.message in dt) && (dt[le.message] = !0, lt(pe), y("Failed %s type: %s", D, le.message), lt(null));
            }
        }
      }
      var Me = Array.isArray;
      function Te(p) {
        return Me(p);
      }
      function Ke(p) {
        {
          var P = typeof Symbol == "function" && Symbol.toStringTag, D = P && p[Symbol.toStringTag] || p.constructor.name || "Object";
          return D;
        }
      }
      function bt(p) {
        try {
          return ht(p), !1;
        } catch {
          return !0;
        }
      }
      function ht(p) {
        return "" + p;
      }
      function sn(p) {
        if (bt(p))
          return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke(p)), ht(p);
      }
      var an = w.ReactCurrentOwner, Cn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, cn, ln;
      function I(p) {
        if (Ce.call(p, "ref")) {
          var P = Object.getOwnPropertyDescriptor(p, "ref").get;
          if (P && P.isReactWarning)
            return !1;
        }
        return p.ref !== void 0;
      }
      function S(p) {
        if (Ce.call(p, "key")) {
          var P = Object.getOwnPropertyDescriptor(p, "key").get;
          if (P && P.isReactWarning)
            return !1;
        }
        return p.key !== void 0;
      }
      function Oe(p, P) {
        typeof p.ref == "string" && an.current;
      }
      function ce(p, P) {
        {
          var D = function() {
            cn || (cn = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", P));
          };
          D.isReactWarning = !0, Object.defineProperty(p, "key", {
            get: D,
            configurable: !0
          });
        }
      }
      function qe(p, P) {
        {
          var D = function() {
            ln || (ln = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", P));
          };
          D.isReactWarning = !0, Object.defineProperty(p, "ref", {
            get: D,
            configurable: !0
          });
        }
      }
      var X = function(p, P, D, $, pe, ve, fe) {
        var le = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: n,
          // Built-in properties that belong on the element
          type: p,
          key: P,
          ref: D,
          props: fe,
          // Record the component responsible for creating this element.
          _owner: ve
        };
        return le._store = {}, Object.defineProperty(le._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(le, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: $
        }), Object.defineProperty(le, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: pe
        }), Object.freeze && (Object.freeze(le.props), Object.freeze(le)), le;
      };
      function we(p, P, D, $, pe) {
        {
          var ve, fe = {}, le = null, Je = null;
          D !== void 0 && (sn(D), le = "" + D), S(P) && (sn(P.key), le = "" + P.key), I(P) && (Je = P.ref, Oe(P, pe));
          for (ve in P)
            Ce.call(P, ve) && !Cn.hasOwnProperty(ve) && (fe[ve] = P[ve]);
          if (p && p.defaultProps) {
            var Pe = p.defaultProps;
            for (ve in Pe)
              fe[ve] === void 0 && (fe[ve] = Pe[ve]);
          }
          if (le || Je) {
            var Ne = typeof p == "function" ? p.displayName || p.name || "Unknown" : p;
            le && ce(fe, Ne), Je && qe(fe, Ne);
          }
          return X(p, le, Je, pe, $, an.current, fe);
        }
      }
      var Ee = w.ReactCurrentOwner, nt = w.ReactDebugCurrentFrame;
      function Ye(p) {
        if (p) {
          var P = p._owner, D = J(p.type, p._source, P ? P.type : null);
          nt.setExtraStackFrame(D);
        } else
          nt.setExtraStackFrame(null);
      }
      var ut;
      ut = !1;
      function Ft(p) {
        return typeof p == "object" && p !== null && p.$$typeof === n;
      }
      function ge() {
        {
          if (Ee.current) {
            var p = B(Ee.current.type);
            if (p)
              return `

Check the render method of \`` + p + "`.";
          }
          return "";
        }
      }
      function ze(p) {
        return "";
      }
      var Ze = {};
      function Pt(p) {
        {
          var P = ge();
          if (!P) {
            var D = typeof p == "string" ? p : p.displayName || p.name;
            D && (P = `

Check the top-level render call using <` + D + ">.");
          }
          return P;
        }
      }
      function tt(p, P) {
        {
          if (!p._store || p._store.validated || p.key != null)
            return;
          p._store.validated = !0;
          var D = Pt(P);
          if (Ze[D])
            return;
          Ze[D] = !0;
          var $ = "";
          p && p._owner && p._owner !== Ee.current && ($ = " It was passed a child from " + B(p._owner.type) + "."), Ye(p), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', D, $), Ye(null);
        }
      }
      function Yt(p, P) {
        {
          if (typeof p != "object")
            return;
          if (Te(p))
            for (var D = 0; D < p.length; D++) {
              var $ = p[D];
              Ft($) && tt($, P);
            }
          else if (Ft(p))
            p._store && (p._store.validated = !0);
          else if (p) {
            var pe = x(p);
            if (typeof pe == "function" && pe !== p.entries)
              for (var ve = pe.call(p), fe; !(fe = ve.next()).done; )
                Ft(fe.value) && tt(fe.value, P);
          }
        }
      }
      function xt(p) {
        {
          var P = p.type;
          if (P == null || typeof P == "string")
            return;
          var D;
          if (typeof P == "function")
            D = P.propTypes;
          else if (typeof P == "object" && (P.$$typeof === c || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          P.$$typeof === f))
            D = P.propTypes;
          else
            return;
          if (D) {
            var $ = B(P);
            kt(D, p.props, "prop", $, p);
          } else if (P.PropTypes !== void 0 && !ut) {
            ut = !0;
            var pe = B(P);
            y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", pe || "Unknown");
          }
          typeof P.getDefaultProps == "function" && !P.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function $t(p) {
        {
          for (var P = Object.keys(p.props), D = 0; D < P.length; D++) {
            var $ = P[D];
            if ($ !== "children" && $ !== "key") {
              Ye(p), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", $), Ye(null);
              break;
            }
          }
          p.ref !== null && (Ye(p), y("Invalid attribute `ref` supplied to `React.Fragment`."), Ye(null));
        }
      }
      var er = {};
      function Or(p, P, D, $, pe, ve) {
        {
          var fe = Y(p);
          if (!fe) {
            var le = "";
            (p === void 0 || typeof p == "object" && p !== null && Object.keys(p).length === 0) && (le += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var Je = ze();
            Je ? le += Je : le += ge();
            var Pe;
            p === null ? Pe = "null" : Te(p) ? Pe = "array" : p !== void 0 && p.$$typeof === n ? (Pe = "<" + (B(p.type) || "Unknown") + " />", le = " Did you accidentally export a JSX literal instead of a component?") : Pe = typeof p, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Pe, le);
          }
          var Ne = we(p, P, D, pe, ve);
          if (Ne == null)
            return Ne;
          if (fe) {
            var je = P.children;
            if (je !== void 0)
              if ($)
                if (Te(je)) {
                  for (var An = 0; An < je.length; An++)
                    Yt(je[An], p);
                  Object.freeze && Object.freeze(je);
                } else
                  y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                Yt(je, p);
          }
          if (Ce.call(P, "key")) {
            var un = B(p), rt = Object.keys(P).filter(function(Jf) {
              return Jf !== "key";
            }), fi = rt.length > 0 ? "{key: someKey, " + rt.join(": ..., ") + ": ...}" : "{key: someKey}";
            if (!er[un + fi]) {
              var Zf = rt.length > 0 ? "{" + rt.join(": ..., ") + ": ...}" : "{}";
              y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, fi, un, Zf, un), er[un + fi] = !0;
            }
          }
          return p === r ? $t(Ne) : xt(Ne), Ne;
        }
      }
      function We(p, P, D) {
        return Or(p, P, D, !0);
      }
      function Rr(p, P, D) {
        return Or(p, P, D, !1);
      }
      var ui = Rr, Ie = We;
      nr.Fragment = r, nr.jsx = ui, nr.jsxs = Ie;
    }()), nr;
  }
  var ya;
  function l0() {
    return ya || (ya = 1, process.env.NODE_ENV === "production" ? kr.exports = a0() : kr.exports = c0()), kr.exports;
  }
  var U = l0(), st = function() {
    return st = Object.assign || function(n) {
      for (var e, r = 1, o = arguments.length; r < o; r++) {
        e = arguments[r];
        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
      }
      return n;
    }, st.apply(this, arguments);
  };
  function Nn(t, n, e) {
    if (e || arguments.length === 2) for (var r = 0, o = n.length, i; r < o; r++)
      (i || !(r in n)) && (i || (i = Array.prototype.slice.call(n, 0, r)), i[r] = n[r]);
    return t.concat(i || Array.prototype.slice.call(n));
  }
  function u0(t) {
    var n = /* @__PURE__ */ Object.create(null);
    return function(e) {
      return n[e] === void 0 && (n[e] = t(e)), n[e];
    };
  }
  var f0 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, d0 = /* @__PURE__ */ u0(
    function(t) {
      return f0.test(t) || t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) < 91;
    }
    /* Z+1 */
  ), Re = "-ms-", fr = "-moz-", Se = "-webkit-", cl = "comm", zo = "rule", Vs = "decl", h0 = "@import", ll = "@keyframes", x0 = "@layer", ul = Math.abs, Hs = String.fromCharCode, Li = Object.assign;
  function p0(t, n) {
    return Ge(t, 0) ^ 45 ? (((n << 2 ^ Ge(t, 0)) << 2 ^ Ge(t, 1)) << 2 ^ Ge(t, 2)) << 2 ^ Ge(t, 3) : 0;
  }
  function fl(t) {
    return t.trim();
  }
  function Ut(t, n) {
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
  function Lt(t) {
    return t.length;
  }
  function dl(t) {
    return t.length;
  }
  function lr(t, n) {
    return n.push(t), t;
  }
  function m0(t, n) {
    return t.map(n).join("");
  }
  function Sa(t, n) {
    return t.filter(function(e) {
      return !Ut(e, n);
    });
  }
  var Vo = 1, Ln = 1, hl = 0, gt = 0, Ve = 0, Wn = "";
  function Ho(t, n, e, r, o, i, s, a) {
    return { value: t, root: n, parent: e, type: r, props: o, children: i, line: Vo, column: Ln, length: s, return: "", siblings: a };
  }
  function Gt(t, n) {
    return Li(Ho("", null, null, "", null, null, 0, t.siblings), t, { length: -t.length }, n);
  }
  function Tn(t) {
    for (; t.root; )
      t = Gt(t.root, { children: [t] });
    lr(t, t.siblings);
  }
  function g0() {
    return Ve;
  }
  function v0() {
    return Ve = gt > 0 ? Ge(Wn, --gt) : 0, Ln--, Ve === 10 && (Ln = 1, Vo--), Ve;
  }
  function wt() {
    return Ve = gt < hl ? Ge(Wn, gt++) : 0, Ln++, Ve === 10 && (Ln = 1, Vo++), Ve;
  }
  function gn() {
    return Ge(Wn, gt);
  }
  function $r() {
    return gt;
  }
  function Uo(t, n) {
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
  function b0(t) {
    return Vo = Ln = 1, hl = Lt(Wn = t), gt = 0, [];
  }
  function y0(t) {
    return Wn = "", t;
  }
  function di(t) {
    return fl(Uo(gt - 1, Di(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
  }
  function S0(t) {
    for (; (Ve = gn()) && Ve < 33; )
      wt();
    return Mi(t) > 2 || Mi(Ve) > 3 ? "" : " ";
  }
  function w0(t, n) {
    for (; --n && wt() && !(Ve < 48 || Ve > 102 || Ve > 57 && Ve < 65 || Ve > 70 && Ve < 97); )
      ;
    return Uo(t, $r() + (n < 6 && gn() == 32 && wt() == 32));
  }
  function Di(t) {
    for (; wt(); )
      switch (Ve) {
        // ] ) " '
        case t:
          return gt;
        // " '
        case 34:
        case 39:
          t !== 34 && t !== 39 && Di(Ve);
          break;
        // (
        case 40:
          t === 41 && Di(t);
          break;
        // \
        case 92:
          wt();
          break;
      }
    return gt;
  }
  function E0(t, n) {
    for (; wt() && t + Ve !== 57; )
      if (t + Ve === 84 && gn() === 47)
        break;
    return "/*" + Uo(n, gt - 1) + "*" + Hs(t === 47 ? t : wt());
  }
  function _0(t) {
    for (; !Mi(gn()); )
      wt();
    return Uo(t, gt);
  }
  function C0(t) {
    return y0(Gr("", null, null, null, [""], t = b0(t), 0, [0], t));
  }
  function Gr(t, n, e, r, o, i, s, a, c) {
    for (var l = 0, d = 0, f = s, u = 0, v = 0, g = 0, h = 1, x = 1, w = 1, y = 0, m = "", A = o, b = i, O = r, C = m; x; )
      switch (g = y, y = wt()) {
        // (
        case 40:
          if (g != 108 && Ge(C, f - 1) == 58) {
            Yr(C += se(di(y), "&", "&\f"), "&\f", ul(l ? a[l - 1] : 0)) != -1 && (w = -1);
            break;
          }
        // " ' [
        case 34:
        case 39:
        case 91:
          C += di(y);
          break;
        // \t \n \r \s
        case 9:
        case 10:
        case 13:
        case 32:
          C += S0(g);
          break;
        // \
        case 92:
          C += w0($r() - 1, 7);
          continue;
        // /
        case 47:
          switch (gn()) {
            case 42:
            case 47:
              lr(A0(E0(wt(), $r()), n, e, c), c);
              break;
            default:
              C += "/";
          }
          break;
        // {
        case 123 * h:
          a[l++] = Lt(C) * w;
        // } ; \0
        case 125 * h:
        case 59:
        case 0:
          switch (y) {
            // \0 }
            case 0:
            case 125:
              x = 0;
            // ;
            case 59 + d:
              w == -1 && (C = se(C, /\f/g, "")), v > 0 && Lt(C) - f && lr(v > 32 ? Ea(C + ";", r, e, f - 1, c) : Ea(se(C, " ", "") + ";", r, e, f - 2, c), c);
              break;
            // @ ;
            case 59:
              C += ";";
            // { rule/at-rule
            default:
              if (lr(O = wa(C, n, e, l, d, o, a, m, A = [], b = [], f, i), i), y === 123)
                if (d === 0)
                  Gr(C, n, O, O, A, i, f, a, b);
                else
                  switch (u === 99 && Ge(C, 3) === 110 ? 100 : u) {
                    // d l m s
                    case 100:
                    case 108:
                    case 109:
                    case 115:
                      Gr(t, O, O, r && lr(wa(t, O, O, 0, 0, o, a, m, o, A = [], f, b), b), o, b, f, a, r ? A : b);
                      break;
                    default:
                      Gr(C, O, O, O, [""], b, 0, a, b);
                  }
          }
          l = d = v = 0, h = w = 1, m = C = "", f = s;
          break;
        // :
        case 58:
          f = 1 + Lt(C), v = g;
        default:
          if (h < 1) {
            if (y == 123)
              --h;
            else if (y == 125 && h++ == 0 && v0() == 125)
              continue;
          }
          switch (C += Hs(y), y * h) {
            // &
            case 38:
              w = d > 0 ? 1 : (C += "\f", -1);
              break;
            // ,
            case 44:
              a[l++] = (Lt(C) - 1) * w, w = 1;
              break;
            // @
            case 64:
              gn() === 45 && (C += di(wt())), u = gn(), d = f = Lt(m = C += _0($r())), y++;
              break;
            // -
            case 45:
              g === 45 && Lt(C) == 2 && (h = 0);
          }
      }
    return i;
  }
  function wa(t, n, e, r, o, i, s, a, c, l, d, f) {
    for (var u = o - 1, v = o === 0 ? i : [""], g = dl(v), h = 0, x = 0, w = 0; h < r; ++h)
      for (var y = 0, m = jn(t, u + 1, u = ul(x = s[h])), A = t; y < g; ++y)
        (A = fl(x > 0 ? v[y] + " " + m : se(m, /&\f/g, v[y]))) && (c[w++] = A);
    return Ho(t, n, e, o === 0 ? zo : a, c, l, d, f);
  }
  function A0(t, n, e, r) {
    return Ho(t, n, e, cl, Hs(g0()), jn(t, 2, -2), 0, r);
  }
  function Ea(t, n, e, r, o) {
    return Ho(t, n, e, Vs, jn(t, 0, r), jn(t, r + 1, -1), r, o);
  }
  function xl(t, n, e) {
    switch (p0(t, n)) {
      // color-adjust
      case 5103:
        return Se + "print-" + t + t;
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
        return Se + t + t;
      // tab-size
      case 4789:
        return fr + t + t;
      // appearance, user-select, transform, hyphens, text-size-adjust
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return Se + t + fr + t + Re + t + t;
      // writing-mode
      case 5936:
        switch (Ge(t, n + 11)) {
          // vertical-l(r)
          case 114:
            return Se + t + Re + se(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
          // vertical-r(l)
          case 108:
            return Se + t + Re + se(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
          // horizontal(-)tb
          case 45:
            return Se + t + Re + se(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
        }
      // flex, flex-direction, scroll-snap-type, writing-mode
      case 6828:
      case 4268:
      case 2903:
        return Se + t + Re + t + t;
      // order
      case 6165:
        return Se + t + Re + "flex-" + t + t;
      // align-items
      case 5187:
        return Se + t + se(t, /(\w+).+(:[^]+)/, Se + "box-$1$2" + Re + "flex-$1$2") + t;
      // align-self
      case 5443:
        return Se + t + Re + "flex-item-" + se(t, /flex-|-self/g, "") + (Ut(t, /flex-|baseline/) ? "" : Re + "grid-row-" + se(t, /flex-|-self/g, "")) + t;
      // align-content
      case 4675:
        return Se + t + Re + "flex-line-pack" + se(t, /align-content|flex-|-self/g, "") + t;
      // flex-shrink
      case 5548:
        return Se + t + Re + se(t, "shrink", "negative") + t;
      // flex-basis
      case 5292:
        return Se + t + Re + se(t, "basis", "preferred-size") + t;
      // flex-grow
      case 6060:
        return Se + "box-" + se(t, "-grow", "") + Se + t + Re + se(t, "grow", "positive") + t;
      // transition
      case 4554:
        return Se + se(t, /([^-])(transform)/g, "$1" + Se + "$2") + t;
      // cursor
      case 6187:
        return se(se(se(t, /(zoom-|grab)/, Se + "$1"), /(image-set)/, Se + "$1"), t, "") + t;
      // background, background-image
      case 5495:
      case 3959:
        return se(t, /(image-set\([^]*)/, Se + "$1$`$1");
      // justify-content
      case 4968:
        return se(se(t, /(.+:)(flex-)?(.*)/, Se + "box-pack:$3" + Re + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Se + t + t;
      // justify-self
      case 4200:
        if (!Ut(t, /flex-|baseline/)) return Re + "grid-column-align" + jn(t, n) + t;
        break;
      // grid-template-(columns|rows)
      case 2592:
      case 3360:
        return Re + se(t, "template-", "") + t;
      // grid-(row|column)-start
      case 4384:
      case 3616:
        return e && e.some(function(r, o) {
          return n = o, Ut(r.props, /grid-\w+-end/);
        }) ? ~Yr(t + (e = e[n].value), "span", 0) ? t : Re + se(t, "-start", "") + t + Re + "grid-row-span:" + (~Yr(e, "span", 0) ? Ut(e, /\d+/) : +Ut(e, /\d+/) - +Ut(t, /\d+/)) + ";" : Re + se(t, "-start", "") + t;
      // grid-(row|column)-end
      case 4896:
      case 4128:
        return e && e.some(function(r) {
          return Ut(r.props, /grid-\w+-start/);
        }) ? t : Re + se(se(t, "-end", "-span"), "span ", "") + t;
      // (margin|padding)-inline-(start|end)
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return se(t, /(.+)-inline(.+)/, Se + "$1$2") + t;
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
          switch (Ge(t, n + 1)) {
            // (m)ax-content, (m)in-content
            case 109:
              if (Ge(t, n + 4) !== 45)
                break;
            // (f)ill-available, (f)it-content
            case 102:
              return se(t, /(.+:)(.+)-([^]+)/, "$1" + Se + "$2-$3$1" + fr + (Ge(t, n + 3) == 108 ? "$3" : "$2-$3")) + t;
            // (s)tretch
            case 115:
              return ~Yr(t, "stretch", 0) ? xl(se(t, "stretch", "fill-available"), n, e) + t : t;
          }
        break;
      // grid-(column|row)
      case 5152:
      case 5920:
        return se(t, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, s, a, c, l) {
          return Re + o + ":" + i + l + (s ? Re + o + "-span:" + (a ? c : +c - +i) + l : "") + t;
        });
      // position: sticky
      case 4949:
        if (Ge(t, n + 6) === 121)
          return se(t, ":", ":" + Se) + t;
        break;
      // display: (flex|inline-flex|grid|inline-grid)
      case 6444:
        switch (Ge(t, Ge(t, 14) === 45 ? 18 : 11)) {
          // (inline-)?fle(x)
          case 120:
            return se(t, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + Se + (Ge(t, 14) === 45 ? "inline-" : "") + "box$3$1" + Se + "$2$3$1" + Re + "$2box$3") + t;
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
  function mo(t, n) {
    for (var e = "", r = 0; r < t.length; r++)
      e += n(t[r], r, t, n) || "";
    return e;
  }
  function T0(t, n, e, r) {
    switch (t.type) {
      case x0:
        if (t.children.length) break;
      case h0:
      case Vs:
        return t.return = t.return || t.value;
      case cl:
        return "";
      case ll:
        return t.return = t.value + "{" + mo(t.children, r) + "}";
      case zo:
        if (!Lt(t.value = t.props.join(","))) return "";
    }
    return Lt(e = mo(t.children, r)) ? t.return = t.value + "{" + e + "}" : "";
  }
  function O0(t) {
    var n = dl(t);
    return function(e, r, o, i) {
      for (var s = "", a = 0; a < n; a++)
        s += t[a](e, r, o, i) || "";
      return s;
    };
  }
  function R0(t) {
    return function(n) {
      n.root || (n = n.return) && t(n);
    };
  }
  function k0(t, n, e, r) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Vs:
          t.return = xl(t.value, t.length, e);
          return;
        case ll:
          return mo([Gt(t, { value: se(t.value, "@", "@" + Se) })], r);
        case zo:
          if (t.length)
            return m0(e = t.props, function(o) {
              switch (Ut(o, r = /(::plac\w+|:read-\w+)/)) {
                // :read-(only|write)
                case ":read-only":
                case ":read-write":
                  Tn(Gt(t, { props: [se(o, /:(read-\w+)/, ":" + fr + "$1")] })), Tn(Gt(t, { props: [o] })), Li(t, { props: Sa(e, r) });
                  break;
                // :placeholder
                case "::placeholder":
                  Tn(Gt(t, { props: [se(o, /:(plac\w+)/, ":" + Se + "input-$1")] })), Tn(Gt(t, { props: [se(o, /:(plac\w+)/, ":" + fr + "$1")] })), Tn(Gt(t, { props: [se(o, /:(plac\w+)/, Re + "input-$1")] })), Tn(Gt(t, { props: [o] })), Li(t, { props: Sa(e, r) });
                  break;
              }
              return "";
            });
      }
  }
  var P0 = {
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
  }, En = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", pl = "active", ml = "data-styled-version", qo = "6.1.18", Us = `/*!sc*/
`, go = typeof window < "u" && typeof document < "u", I0 = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), _a = /invalid hook call/i, Pr = /* @__PURE__ */ new Set(), N0 = function(t, n) {
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
          _a.test(s) ? (i = !1, Pr.delete(r)) : o.apply(void 0, Nn([s], a, !1));
        }, Xe(), i && !Pr.has(r) && (console.warn(r), Pr.add(r));
      } catch (s) {
        _a.test(s.message) && Pr.delete(r);
      } finally {
        console.error = o;
      }
    }
  }, Wo = Object.freeze([]), Mn = Object.freeze({});
  function j0(t, n, e) {
    return e === void 0 && (e = Mn), t.theme !== e.theme && t.theme || n || e.theme;
  }
  var Bi = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), L0 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, M0 = /(^-|-$)/g;
  function Ca(t) {
    return t.replace(L0, "-").replace(M0, "");
  }
  var D0 = /(a)(d)/gi, Ir = 52, Aa = function(t) {
    return String.fromCharCode(t + (t > 25 ? 39 : 97));
  };
  function Fi(t) {
    var n, e = "";
    for (n = Math.abs(t); n > Ir; n = n / Ir | 0) e = Aa(n % Ir) + e;
    return (Aa(n % Ir) + e).replace(D0, "$1-$2");
  }
  var hi, gl = 5381, dn = function(t, n) {
    for (var e = n.length; e; ) t = 33 * t ^ n.charCodeAt(--e);
    return t;
  }, vl = function(t) {
    return dn(gl, t);
  };
  function B0(t) {
    return Fi(vl(t) >>> 0);
  }
  function bl(t) {
    return process.env.NODE_ENV !== "production" && typeof t == "string" && t || t.displayName || t.name || "Component";
  }
  function xi(t) {
    return typeof t == "string" && (process.env.NODE_ENV === "production" || t.charAt(0) === t.charAt(0).toLowerCase());
  }
  var yl = typeof Symbol == "function" && Symbol.for, Sl = yl ? Symbol.for("react.memo") : 60115, F0 = yl ? Symbol.for("react.forward_ref") : 60112, z0 = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, V0 = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, wl = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, H0 = ((hi = {})[F0] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, hi[Sl] = wl, hi);
  function Ta(t) {
    return ("type" in (n = t) && n.type.$$typeof) === Sl ? wl : "$$typeof" in t ? H0[t.$$typeof] : z0;
    var n;
  }
  var U0 = Object.defineProperty, q0 = Object.getOwnPropertyNames, Oa = Object.getOwnPropertySymbols, W0 = Object.getOwnPropertyDescriptor, X0 = Object.getPrototypeOf, Ra = Object.prototype;
  function El(t, n, e) {
    if (typeof n != "string") {
      if (Ra) {
        var r = X0(n);
        r && r !== Ra && El(t, r, e);
      }
      var o = q0(n);
      Oa && (o = o.concat(Oa(n)));
      for (var i = Ta(t), s = Ta(n), a = 0; a < o.length; ++a) {
        var c = o[a];
        if (!(c in V0 || e && e[c] || s && c in s || i && c in i)) {
          var l = W0(n, c);
          try {
            U0(t, c, l);
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
  function qs(t) {
    return typeof t == "object" && "styledComponentId" in t;
  }
  function xn(t, n) {
    return t && n ? "".concat(t, " ").concat(n) : t || n || "";
  }
  function ka(t, n) {
    if (t.length === 0) return "";
    for (var e = t[0], r = 1; r < t.length; r++) e += t[r];
    return e;
  }
  function Bn(t) {
    return t !== null && typeof t == "object" && t.constructor.name === Object.name && !("props" in t && t.$$typeof);
  }
  function zi(t, n, e) {
    if (e === void 0 && (e = !1), !e && !Bn(t) && !Array.isArray(t)) return n;
    if (Array.isArray(n)) for (var r = 0; r < n.length; r++) t[r] = zi(t[r], n[r]);
    else if (Bn(n)) for (var r in n) t[r] = zi(t[r], n[r]);
    return t;
  }
  function Ws(t, n) {
    Object.defineProperty(t, "toString", { value: n });
  }
  var Y0 = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
  function $0() {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    for (var e = t[0], r = [], o = 1, i = t.length; o < i; o += 1) r.push(t[o]);
    return r.forEach(function(s) {
      e = e.replace(/%[a-z]/, s);
    }), e;
  }
  function Xn(t) {
    for (var n = [], e = 1; e < arguments.length; e++) n[e - 1] = arguments[e];
    return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t, " for more information.").concat(n.length > 0 ? " Args: ".concat(n.join(", ")) : "")) : new Error($0.apply(void 0, Nn([Y0[t]], n, !1)).trim());
  }
  var G0 = function() {
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
      for (var r = this.groupSizes[n], o = this.indexOfGroup(n), i = o + r, s = o; s < i; s++) e += "".concat(this.tag.getRule(s)).concat(Us);
      return e;
    }, t;
  }(), K0 = 1 << 30, Kr = /* @__PURE__ */ new Map(), vo = /* @__PURE__ */ new Map(), Zr = 1, Nr = function(t) {
    if (Kr.has(t)) return Kr.get(t);
    for (; vo.has(Zr); ) Zr++;
    var n = Zr++;
    if (process.env.NODE_ENV !== "production" && ((0 | n) < 0 || n > K0)) throw Xn(16, "".concat(n));
    return Kr.set(t, n), vo.set(n, t), n;
  }, Z0 = function(t, n) {
    Zr = n + 1, Kr.set(t, n), vo.set(n, t);
  }, J0 = "style[".concat(En, "][").concat(ml, '="').concat(qo, '"]'), Q0 = new RegExp("^".concat(En, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), ed = function(t, n, e) {
    for (var r, o = e.split(","), i = 0, s = o.length; i < s; i++) (r = o[i]) && t.registerName(n, r);
  }, td = function(t, n) {
    for (var e, r = ((e = n.textContent) !== null && e !== void 0 ? e : "").split(Us), o = [], i = 0, s = r.length; i < s; i++) {
      var a = r[i].trim();
      if (a) {
        var c = a.match(Q0);
        if (c) {
          var l = 0 | parseInt(c[1], 10), d = c[2];
          l !== 0 && (Z0(d, l), ed(t, d, c[3]), t.getTag().insertRules(l, o)), o.length = 0;
        } else o.push(a);
      }
    }
  }, Pa = function(t) {
    for (var n = document.querySelectorAll(J0), e = 0, r = n.length; e < r; e++) {
      var o = n[e];
      o && o.getAttribute(En) !== pl && (td(t, o), o.parentNode && o.parentNode.removeChild(o));
    }
  };
  function nd() {
    return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
  }
  var _l = function(t) {
    var n = document.head, e = t || n, r = document.createElement("style"), o = function(a) {
      var c = Array.from(a.querySelectorAll("style[".concat(En, "]")));
      return c[c.length - 1];
    }(e), i = o !== void 0 ? o.nextSibling : null;
    r.setAttribute(En, pl), r.setAttribute(ml, qo);
    var s = nd();
    return s && r.setAttribute("nonce", s), e.insertBefore(r, i), r;
  }, rd = function() {
    function t(n) {
      this.element = _l(n), this.element.appendChild(document.createTextNode("")), this.sheet = function(e) {
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
  }(), od = function() {
    function t(n) {
      this.element = _l(n), this.nodes = this.element.childNodes, this.length = 0;
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
  }(), id = function() {
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
  }(), Ia = go, sd = { isServer: !go, useCSSOMInjection: !I0 }, Cl = function() {
    function t(n, e, r) {
      n === void 0 && (n = Mn), e === void 0 && (e = {});
      var o = this;
      this.options = st(st({}, sd), n), this.gs = e, this.names = new Map(r), this.server = !!n.isServer, !this.server && go && Ia && (Ia = !1, Pa(this)), Ws(this, function() {
        return function(i) {
          for (var s = i.getTag(), a = s.length, c = "", l = function(f) {
            var u = function(w) {
              return vo.get(w);
            }(f);
            if (u === void 0) return "continue";
            var v = i.names.get(u), g = s.getGroup(f);
            if (v === void 0 || !v.size || g.length === 0) return "continue";
            var h = "".concat(En, ".g").concat(f, '[id="').concat(u, '"]'), x = "";
            v !== void 0 && v.forEach(function(w) {
              w.length > 0 && (x += "".concat(w, ","));
            }), c += "".concat(g).concat(h, '{content:"').concat(x, '"}').concat(Us);
          }, d = 0; d < a; d++) l(d);
          return c;
        }(o);
      });
    }
    return t.registerId = function(n) {
      return Nr(n);
    }, t.prototype.rehydrate = function() {
      !this.server && go && Pa(this);
    }, t.prototype.reconstructWithOptions = function(n, e) {
      return e === void 0 && (e = !0), new t(st(st({}, this.options), n), this.gs, e && this.names || void 0);
    }, t.prototype.allocateGSInstance = function(n) {
      return this.gs[n] = (this.gs[n] || 0) + 1;
    }, t.prototype.getTag = function() {
      return this.tag || (this.tag = (n = function(e) {
        var r = e.useCSSOMInjection, o = e.target;
        return e.isServer ? new id(o) : r ? new rd(o) : new od(o);
      }(this.options), new G0(n)));
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
  }(), ad = /&/g, cd = /^\s*\/\/.*$/gm;
  function Al(t, n) {
    return t.map(function(e) {
      return e.type === "rule" && (e.value = "".concat(n, " ").concat(e.value), e.value = e.value.replaceAll(",", ",".concat(n, " ")), e.props = e.props.map(function(r) {
        return "".concat(n, " ").concat(r);
      })), Array.isArray(e.children) && e.type !== "@keyframes" && (e.children = Al(e.children, n)), e;
    });
  }
  function ld(t) {
    var n, e, r, o = Mn, i = o.options, s = i === void 0 ? Mn : i, a = o.plugins, c = a === void 0 ? Wo : a, l = function(u, v, g) {
      return g.startsWith(e) && g.endsWith(e) && g.replaceAll(e, "").length > 0 ? ".".concat(n) : u;
    }, d = c.slice();
    d.push(function(u) {
      u.type === zo && u.value.includes("&") && (u.props[0] = u.props[0].replace(ad, e).replace(r, l));
    }), s.prefix && d.push(k0), d.push(T0);
    var f = function(u, v, g, h) {
      v === void 0 && (v = ""), g === void 0 && (g = ""), h === void 0 && (h = "&"), n = h, e = v, r = new RegExp("\\".concat(e, "\\b"), "g");
      var x = u.replace(cd, ""), w = C0(g || v ? "".concat(g, " ").concat(v, " { ").concat(x, " }") : x);
      s.namespace && (w = Al(w, s.namespace));
      var y = [];
      return mo(w, O0(d.concat(R0(function(m) {
        return y.push(m);
      })))), y;
    };
    return f.hash = c.length ? c.reduce(function(u, v) {
      return v.name || Xn(15), dn(u, v.name);
    }, gl).toString() : "", f;
  }
  var ud = new Cl(), Vi = ld(), Tl = Fe.createContext({ shouldForwardProp: void 0, styleSheet: ud, stylis: Vi });
  Tl.Consumer;
  Fe.createContext(void 0);
  function Na() {
    return tn(Tl);
  }
  var ja = function() {
    function t(n, e) {
      var r = this;
      this.inject = function(o, i) {
        i === void 0 && (i = Vi);
        var s = r.name + i.hash;
        o.hasNameForId(r.id, s) || o.insertRules(r.id, s, i(r.rules, s, "@keyframes"));
      }, this.name = n, this.id = "sc-keyframes-".concat(n), this.rules = e, Ws(this, function() {
        throw Xn(12, String(r.name));
      });
    }
    return t.prototype.getName = function(n) {
      return n === void 0 && (n = Vi), this.name + n.hash;
    }, t;
  }(), fd = function(t) {
    return t >= "A" && t <= "Z";
  };
  function La(t) {
    for (var n = "", e = 0; e < t.length; e++) {
      var r = t[e];
      if (e === 1 && r === "-" && t[0] === "-") return t;
      fd(r) ? n += "-" + r.toLowerCase() : n += r;
    }
    return n.startsWith("ms-") ? "-" + n : n;
  }
  var Ol = function(t) {
    return t == null || t === !1 || t === "";
  }, Rl = function(t) {
    var n, e, r = [];
    for (var o in t) {
      var i = t[o];
      t.hasOwnProperty(o) && !Ol(i) && (Array.isArray(i) && i.isCss || Dn(i) ? r.push("".concat(La(o), ":"), i, ";") : Bn(i) ? r.push.apply(r, Nn(Nn(["".concat(o, " {")], Rl(i), !1), ["}"], !1)) : r.push("".concat(La(o), ": ").concat((n = o, (e = i) == null || typeof e == "boolean" || e === "" ? "" : typeof e != "number" || e === 0 || n in P0 || n.startsWith("--") ? String(e).trim() : "".concat(e, "px")), ";")));
    }
    return r;
  };
  function vn(t, n, e, r) {
    if (Ol(t)) return [];
    if (qs(t)) return [".".concat(t.styledComponentId)];
    if (Dn(t)) {
      if (!Dn(i = t) || i.prototype && i.prototype.isReactComponent || !n) return [t];
      var o = t(n);
      return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof ja || Bn(o) || o === null || console.error("".concat(bl(t), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), vn(o, n, e, r);
    }
    var i;
    return t instanceof ja ? e ? (t.inject(e, r), [t.getName(r)]) : [t] : Bn(t) ? Rl(t) : Array.isArray(t) ? Array.prototype.concat.apply(Wo, t.map(function(s) {
      return vn(s, n, e, r);
    })) : [t.toString()];
  }
  function dd(t) {
    for (var n = 0; n < t.length; n += 1) {
      var e = t[n];
      if (Dn(e) && !qs(e)) return !1;
    }
    return !0;
  }
  var hd = vl(qo), xd = function() {
    function t(n, e, r) {
      this.rules = n, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && dd(n), this.componentId = e, this.baseHash = dn(hd, e), this.baseStyle = r, Cl.registerId(e);
    }
    return t.prototype.generateAndInjectStyles = function(n, e, r) {
      var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(n, e, r) : "";
      if (this.isStatic && !r.hash) if (this.staticRulesId && e.hasNameForId(this.componentId, this.staticRulesId)) o = xn(o, this.staticRulesId);
      else {
        var i = ka(vn(this.rules, n, e, r)), s = Fi(dn(this.baseHash, i) >>> 0);
        if (!e.hasNameForId(this.componentId, s)) {
          var a = r(i, ".".concat(s), void 0, this.componentId);
          e.insertRules(this.componentId, s, a);
        }
        o = xn(o, s), this.staticRulesId = s;
      }
      else {
        for (var c = dn(this.baseHash, r.hash), l = "", d = 0; d < this.rules.length; d++) {
          var f = this.rules[d];
          if (typeof f == "string") l += f, process.env.NODE_ENV !== "production" && (c = dn(c, f));
          else if (f) {
            var u = ka(vn(f, n, e, r));
            c = dn(c, u + d), l += u;
          }
        }
        if (l) {
          var v = Fi(c >>> 0);
          e.hasNameForId(this.componentId, v) || e.insertRules(this.componentId, v, r(l, ".".concat(v), void 0, this.componentId)), o = xn(o, v);
        }
      }
      return o;
    }, t;
  }(), kl = Fe.createContext(void 0);
  kl.Consumer;
  var pi = {}, Ma = /* @__PURE__ */ new Set();
  function pd(t, n, e) {
    var r = qs(t), o = t, i = !xi(t), s = n.attrs, a = s === void 0 ? Wo : s, c = n.componentId, l = c === void 0 ? function(A, b) {
      var O = typeof A != "string" ? "sc" : Ca(A);
      pi[O] = (pi[O] || 0) + 1;
      var C = "".concat(O, "-").concat(B0(qo + O + pi[O]));
      return b ? "".concat(b, "-").concat(C) : C;
    }(n.displayName, n.parentComponentId) : c, d = n.displayName, f = d === void 0 ? function(A) {
      return xi(A) ? "styled.".concat(A) : "Styled(".concat(bl(A), ")");
    }(t) : d, u = n.displayName && n.componentId ? "".concat(Ca(n.displayName), "-").concat(n.componentId) : n.componentId || l, v = r && o.attrs ? o.attrs.concat(a).filter(Boolean) : a, g = n.shouldForwardProp;
    if (r && o.shouldForwardProp) {
      var h = o.shouldForwardProp;
      if (n.shouldForwardProp) {
        var x = n.shouldForwardProp;
        g = function(A, b) {
          return h(A, b) && x(A, b);
        };
      } else g = h;
    }
    var w = new xd(e, u, r ? o.componentStyle : void 0);
    function y(A, b) {
      return function(O, C, L) {
        var F = O.attrs, Y = O.componentStyle, oe = O.defaultProps, G = O.foldedComponentIds, B = O.styledComponentId, W = O.target, H = Fe.useContext(kl), te = Na(), Z = O.shouldForwardProp || te.shouldForwardProp;
        process.env.NODE_ENV !== "production" && ma(B);
        var Q = j0(C, H, oe) || Mn, ee = function(de, me, R) {
          for (var z, k = st(st({}, me), { className: void 0, theme: R }), j = 0; j < de.length; j += 1) {
            var E = Dn(z = de[j]) ? z(k) : z;
            for (var M in E) k[M] = M === "className" ? xn(k[M], E[M]) : M === "style" ? st(st({}, k[M]), E[M]) : E[M];
          }
          return me.className && (k.className = xn(k.className, me.className)), k;
        }(F, C, Q), ae = ee.as || W, ie = {};
        for (var K in ee) ee[K] === void 0 || K[0] === "$" || K === "as" || K === "theme" && ee.theme === Q || (K === "forwardedAs" ? ie.as = ee.forwardedAs : Z && !Z(K, ae) || (ie[K] = ee[K], Z || process.env.NODE_ENV !== "development" || d0(K) || Ma.has(K) || !Bi.has(ae) || (Ma.add(K), console.warn('styled-components: it looks like an unknown prop "'.concat(K, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
        var ne = function(de, me) {
          var R = Na(), z = de.generateAndInjectStyles(me, R.styleSheet, R.stylis);
          return process.env.NODE_ENV !== "production" && ma(z), z;
        }(Y, ee);
        process.env.NODE_ENV !== "production" && O.warnTooManyClasses && O.warnTooManyClasses(ne);
        var xe = xn(G, B);
        return ne && (xe += " " + ne), ee.className && (xe += " " + ee.className), ie[xi(ae) && !Bi.has(ae) ? "class" : "className"] = xe, L && (ie.ref = L), n0(ae, ie);
      }(m, A, b);
    }
    y.displayName = f;
    var m = Fe.forwardRef(y);
    return m.attrs = v, m.componentStyle = w, m.displayName = f, m.shouldForwardProp = g, m.foldedComponentIds = r ? xn(o.foldedComponentIds, o.styledComponentId) : "", m.styledComponentId = u, m.target = r ? o.target : t, Object.defineProperty(m, "defaultProps", { get: function() {
      return this._foldedDefaultProps;
    }, set: function(A) {
      this._foldedDefaultProps = r ? function(b) {
        for (var O = [], C = 1; C < arguments.length; C++) O[C - 1] = arguments[C];
        for (var L = 0, F = O; L < F.length; L++) zi(b, F[L], !0);
        return b;
      }({}, o.defaultProps, A) : A;
    } }), process.env.NODE_ENV !== "production" && (N0(f, u), m.warnTooManyClasses = /* @__PURE__ */ function(A, b) {
      var O = {}, C = !1;
      return function(L) {
        if (!C && (O[L] = !0, Object.keys(O).length >= 200)) {
          var F = b ? ' with the id of "'.concat(b, '"') : "";
          console.warn("Over ".concat(200, " classes were generated for component ").concat(A).concat(F, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), C = !0, O = {};
        }
      };
    }(f, u)), Ws(m, function() {
      return ".".concat(m.styledComponentId);
    }), i && El(m, t, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), m;
  }
  function Da(t, n) {
    for (var e = [t[0]], r = 0, o = n.length; r < o; r += 1) e.push(n[r], t[r + 1]);
    return e;
  }
  var Ba = function(t) {
    return Object.assign(t, { isCss: !0 });
  };
  function md(t) {
    for (var n = [], e = 1; e < arguments.length; e++) n[e - 1] = arguments[e];
    if (Dn(t) || Bn(t)) return Ba(vn(Da(Wo, Nn([t], n, !0))));
    var r = t;
    return n.length === 0 && r.length === 1 && typeof r[0] == "string" ? vn(r) : Ba(vn(Da(r, n)));
  }
  function Hi(t, n, e) {
    if (e === void 0 && (e = Mn), !n) throw Xn(1, n);
    var r = function(o) {
      for (var i = [], s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
      return t(n, e, md.apply(void 0, Nn([o], i, !1)));
    };
    return r.attrs = function(o) {
      return Hi(t, n, st(st({}, e), { attrs: Array.prototype.concat(e.attrs, o).filter(Boolean) }));
    }, r.withConfig = function(o) {
      return Hi(t, n, st(st({}, e), o));
    }, r;
  }
  var Pl = function(t) {
    return Hi(pd, t);
  }, Ct = Pl;
  Bi.forEach(function(t) {
    Ct[t] = Pl(t);
  });
  process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
  var jr = "__sc-".concat(En, "__");
  process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[jr] || (window[jr] = 0), window[jr] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[jr] += 1);
  const Er = bo;
  function bo(t, n) {
    const e = yo();
    return bo = function(r, o) {
      return r = r - 252, e[r];
    }, bo(t, n);
  }
  (function(t, n) {
    const e = bo, r = t();
    for (; ; )
      try {
        if (parseInt(e(258)) / 1 + parseInt(e(254)) / 2 + -parseInt(e(264)) / 3 * (-parseInt(e(256)) / 4) + parseInt(e(252)) / 5 * (-parseInt(e(253)) / 6) + -parseInt(e(255)) / 7 + -parseInt(e(257)) / 8 * (-parseInt(e(261)) / 9) + parseInt(e(260)) / 10 * (parseInt(e(263)) / 11) === n) break;
        r.push(r.shift());
      } catch {
        r.push(r.shift());
      }
  })(yo, 338504);
  const gd = Ct[Er(259)]`
  flex-direction: column;
  border-radius: 15px;
  border: 3px solid #a0beeb;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
  justify-items: center;
  align-items: center;
`;
  function yo() {
    const t = ["244761SJPmro", "67560nbDwqA", "canvas", "1030IgbHRx", "7758DVDHxE", "48790EinTjq", "2095961wxZiob", "44eOwGyY", "224888QlRABe", "68846QNOdYE", "div", "190bCETkt", "45UfzRMl", "span"];
    return yo = function() {
      return t;
    }, yo();
  }
  const vd = Ct[Er(259)]`
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
`, bd = Ct[Er(265)]`
  border-radius: 7px;
  display: inline;
  padding: 0;
  &:focus-visible {
    outline: none;
  }
`, yd = Ct[Er(262)]`
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
`, Sd = Ct[Er(259)]`
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
  const Ui = { type: "error", data: "parser error" }, Il = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", Nl = typeof ArrayBuffer == "function", jl = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t && t.buffer instanceof ArrayBuffer, Xs = ({ type: t, data: n }, e, r) => Il && n instanceof Blob ? e ? r(n) : Fa(n, r) : Nl && (n instanceof ArrayBuffer || jl(n)) ? e ? r(n) : Fa(new Blob([n]), r) : r(Dt[t] + (n || "")), Fa = (t, n) => {
    const e = new FileReader();
    return e.onload = function() {
      const r = e.result.split(",")[1];
      n("b" + (r || ""));
    }, e.readAsDataURL(t);
  };
  function za(t) {
    return t instanceof Uint8Array ? t : t instanceof ArrayBuffer ? new Uint8Array(t) : new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  }
  let mi;
  function wd(t, n) {
    if (Il && t.data instanceof Blob)
      return t.data.arrayBuffer().then(za).then(n);
    if (Nl && (t.data instanceof ArrayBuffer || jl(t.data)))
      return n(za(t.data));
    Xs(t, !1, (e) => {
      mi || (mi = new TextEncoder()), n(mi.encode(e));
    });
  }
  const Va = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ur = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (let t = 0; t < Va.length; t++)
    ur[Va.charCodeAt(t)] = t;
  const Ed = (t) => {
    let n = t.length * 0.75, e = t.length, r, o = 0, i, s, a, c;
    t[t.length - 1] === "=" && (n--, t[t.length - 2] === "=" && n--);
    const l = new ArrayBuffer(n), d = new Uint8Array(l);
    for (r = 0; r < e; r += 4)
      i = ur[t.charCodeAt(r)], s = ur[t.charCodeAt(r + 1)], a = ur[t.charCodeAt(r + 2)], c = ur[t.charCodeAt(r + 3)], d[o++] = i << 2 | s >> 4, d[o++] = (s & 15) << 4 | a >> 2, d[o++] = (a & 3) << 6 | c & 63;
    return l;
  }, _d = typeof ArrayBuffer == "function", Ys = (t, n) => {
    if (typeof t != "string")
      return {
        type: "message",
        data: Ll(t, n)
      };
    const e = t.charAt(0);
    return e === "b" ? {
      type: "message",
      data: Cd(t.substring(1), n)
    } : Jr[e] ? t.length > 1 ? {
      type: Jr[e],
      data: t.substring(1)
    } : {
      type: Jr[e]
    } : Ui;
  }, Cd = (t, n) => {
    if (_d) {
      const e = Ed(t);
      return Ll(e, n);
    } else
      return { base64: !0, data: t };
  }, Ll = (t, n) => {
    switch (n) {
      case "blob":
        return t instanceof Blob ? t : new Blob([t]);
      case "arraybuffer":
      default:
        return t instanceof ArrayBuffer ? t : t.buffer;
    }
  }, Ml = "", Ad = (t, n) => {
    const e = t.length, r = new Array(e);
    let o = 0;
    t.forEach((i, s) => {
      Xs(i, !1, (a) => {
        r[s] = a, ++o === e && n(r.join(Ml));
      });
    });
  }, Td = (t, n) => {
    const e = t.split(Ml), r = [];
    for (let o = 0; o < e.length; o++) {
      const i = Ys(e[o], n);
      if (r.push(i), i.type === "error")
        break;
    }
    return r;
  };
  function Od() {
    return new TransformStream({
      transform(t, n) {
        wd(t, (e) => {
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
  let gi;
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
  function Rd(t, n) {
    gi || (gi = new TextDecoder());
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
            const c = Mr(e, 8), l = new DataView(c.buffer, c.byteOffset, c.length), d = l.getUint32(0);
            if (d > Math.pow(2, 21) - 1) {
              a.enqueue(Ui);
              break;
            }
            o = d * Math.pow(2, 32) + l.getUint32(4), r = 3;
          } else {
            if (Lr(e) < o)
              break;
            const c = Mr(e, o);
            a.enqueue(Ys(i ? c : gi.decode(c), n)), r = 0;
          }
          if (o === 0 || o > t) {
            a.enqueue(Ui);
            break;
          }
        }
      }
    });
  }
  const Dl = 4;
  function Ue(t) {
    if (t) return kd(t);
  }
  function kd(t) {
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
  const Xo = typeof Promise == "function" && typeof Promise.resolve == "function" ? (n) => Promise.resolve().then(n) : (n, e) => e(n, 0), mt = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), Pd = "arraybuffer";
  function Bl(t, ...n) {
    return n.reduce((e, r) => (t.hasOwnProperty(r) && (e[r] = t[r]), e), {});
  }
  const Id = mt.setTimeout, Nd = mt.clearTimeout;
  function Yo(t, n) {
    n.useNativeTimers ? (t.setTimeoutFn = Id.bind(mt), t.clearTimeoutFn = Nd.bind(mt)) : (t.setTimeoutFn = mt.setTimeout.bind(mt), t.clearTimeoutFn = mt.clearTimeout.bind(mt));
  }
  const jd = 1.33;
  function Ld(t) {
    return typeof t == "string" ? Md(t) : Math.ceil((t.byteLength || t.size) * jd);
  }
  function Md(t) {
    let n = 0, e = 0;
    for (let r = 0, o = t.length; r < o; r++)
      n = t.charCodeAt(r), n < 128 ? e += 1 : n < 2048 ? e += 2 : n < 55296 || n >= 57344 ? e += 3 : (r++, e += 4);
    return e;
  }
  function Fl() {
    return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
  }
  function Dd(t) {
    let n = "";
    for (let e in t)
      t.hasOwnProperty(e) && (n.length && (n += "&"), n += encodeURIComponent(e) + "=" + encodeURIComponent(t[e]));
    return n;
  }
  function Bd(t) {
    let n = {}, e = t.split("&");
    for (let r = 0, o = e.length; r < o; r++) {
      let i = e[r].split("=");
      n[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
    }
    return n;
  }
  class Fd extends Error {
    constructor(n, e, r) {
      super(n), this.description = e, this.context = r, this.type = "TransportError";
    }
  }
  class $s extends Ue {
    /**
     * Transport abstract constructor.
     *
     * @param {Object} opts - options
     * @protected
     */
    constructor(n) {
      super(), this.writable = !1, Yo(this, n), this.opts = n, this.query = n.query, this.socket = n.socket, this.supportsBinary = !n.forceBase64;
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
      return super.emitReserved("error", new Fd(n, e, r)), this;
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
      const e = Ys(n, this.socket.binaryType);
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
      const e = Dd(n);
      return e.length ? "?" + e : "";
    }
  }
  class zd extends $s {
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
      Td(n, this.socket.binaryType).forEach(e), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
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
      this.writable = !1, Ad(n, (e) => {
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
      return this.opts.timestampRequests !== !1 && (e[this.opts.timestampParam] = Fl()), !this.supportsBinary && !e.sid && (e.b64 = 1), this.createUri(n, e);
    }
  }
  let zl = !1;
  try {
    zl = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
  } catch {
  }
  const Vd = zl;
  function Hd() {
  }
  class Ud extends zd {
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
      super(), this.createRequest = n, Yo(this, r), this._opts = r, this._method = r.method || "GET", this._uri = e, this._data = r.data !== void 0 ? r.data : null, this._create();
    }
    /**
     * Creates the XHR object and sends the request.
     *
     * @private
     */
    _create() {
      var n;
      const e = Bl(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
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
        if (this._xhr.onreadystatechange = Hd, n)
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
      attachEvent("onunload", Ha);
    else if (typeof addEventListener == "function") {
      const t = "onpagehide" in mt ? "pagehide" : "unload";
      addEventListener(t, Ha, !1);
    }
  }
  function Ha() {
    for (let t in Pn.requests)
      Pn.requests.hasOwnProperty(t) && Pn.requests[t].abort();
  }
  const qd = function() {
    const t = Vl({
      xdomain: !1
    });
    return t && t.responseType !== null;
  }();
  class Wd extends Ud {
    constructor(n) {
      super(n);
      const e = n && n.forceBase64;
      this.supportsBinary = qd && !e;
    }
    request(n = {}) {
      return Object.assign(n, { xd: this.xd }, this.opts), new Pn(Vl, this.uri(), n);
    }
  }
  function Vl(t) {
    const n = t.xdomain;
    try {
      if (typeof XMLHttpRequest < "u" && (!n || Vd))
        return new XMLHttpRequest();
    } catch {
    }
    if (!n)
      try {
        return new mt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
      } catch {
      }
  }
  const Hl = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
  class Xd extends $s {
    get name() {
      return "websocket";
    }
    doOpen() {
      const n = this.uri(), e = this.opts.protocols, r = Hl ? {} : Bl(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
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
        Xs(r, this.supportsBinary, (i) => {
          try {
            this.doWrite(r, i);
          } catch {
          }
          o && Xo(() => {
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
      return this.opts.timestampRequests && (e[this.opts.timestampParam] = Fl()), this.supportsBinary || (e.b64 = 1), this.createUri(n, e);
    }
  }
  const vi = mt.WebSocket || mt.MozWebSocket;
  class Yd extends Xd {
    createSocket(n, e, r) {
      return Hl ? new vi(n, e, r) : e ? new vi(n, e) : new vi(n);
    }
    doWrite(n, e) {
      this.ws.send(e);
    }
  }
  class $d extends $s {
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
          const e = Rd(Number.MAX_SAFE_INTEGER, this.socket.binaryType), r = n.readable.pipeThrough(e).getReader(), o = Od();
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
          o && Xo(() => {
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
  const Gd = {
    websocket: Yd,
    webtransport: $d,
    polling: Wd
  }, Kd = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, Zd = [
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
  function qi(t) {
    if (t.length > 8e3)
      throw "URI too long";
    const n = t, e = t.indexOf("["), r = t.indexOf("]");
    e != -1 && r != -1 && (t = t.substring(0, e) + t.substring(e, r).replace(/:/g, ";") + t.substring(r, t.length));
    let o = Kd.exec(t || ""), i = {}, s = 14;
    for (; s--; )
      i[Zd[s]] = o[s] || "";
    return e != -1 && r != -1 && (i.source = n, i.host = i.host.substring(1, i.host.length - 1).replace(/;/g, ":"), i.authority = i.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), i.ipv6uri = !0), i.pathNames = Jd(i, i.path), i.queryKey = Qd(i, i.query), i;
  }
  function Jd(t, n) {
    const e = /\/{2,9}/g, r = n.replace(e, "/").split("/");
    return (n.slice(0, 1) == "/" || n.length === 0) && r.splice(0, 1), n.slice(-1) == "/" && r.splice(r.length - 1, 1), r;
  }
  function Qd(t, n) {
    const e = {};
    return n.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(r, o, i) {
      o && (e[o] = i);
    }), e;
  }
  const Wi = typeof addEventListener == "function" && typeof removeEventListener == "function", eo = [];
  Wi && addEventListener("offline", () => {
    eo.forEach((t) => t());
  }, !1);
  class en extends Ue {
    /**
     * Socket constructor.
     *
     * @param {String|Object} uri - uri or options
     * @param {Object} opts - options
     */
    constructor(n, e) {
      if (super(), this.binaryType = Pd, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, n && typeof n == "object" && (e = n, n = null), n) {
        const r = qi(n);
        e.hostname = r.host, e.secure = r.protocol === "https" || r.protocol === "wss", e.port = r.port, r.query && (e.query = r.query);
      } else e.host && (e.hostname = qi(e.host).host);
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
      }, e), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = Bd(this.opts.query)), Wi && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
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
      e.EIO = Dl, e.transport = n, this.id && (e.sid = this.id);
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
      const n = this.opts.rememberUpgrade && en.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
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
        if (o && (e += Ld(o)), r > 0 && e > this._maxPayload)
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
      return n && (this._pingTimeoutTime = 0, Xo(() => {
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
      if (en.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
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
        if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), Wi && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
          const r = eo.indexOf(this._offlineEventListener);
          r !== -1 && eo.splice(r, 1);
        }
        this.readyState = "closed", this.id = null, this.emitReserved("close", n, e), this.writeBuffer = [], this._prevBufferLen = 0;
      }
    }
  }
  en.protocol = Dl;
  class eh extends en {
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
      en.priorWebsocketSuccess = !1;
      const o = () => {
        r || (e.send([{ type: "ping", data: "probe" }]), e.once("packet", (f) => {
          if (!r)
            if (f.type === "pong" && f.data === "probe") {
              if (this.upgrading = !0, this.emitReserved("upgrading", e), !e)
                return;
              en.priorWebsocketSuccess = e.name === "websocket", this.transport.pause(() => {
                r || this.readyState !== "closed" && (d(), this.setTransport(e), e.send([{ type: "upgrade" }]), this.emitReserved("upgrade", e), e = null, this.upgrading = !1, this.flush());
              });
            } else {
              const u = new Error("probe error");
              u.transport = e.name, this.emitReserved("upgradeError", u);
            }
        }));
      };
      function i() {
        r || (r = !0, d(), e.close(), e = null);
      }
      const s = (f) => {
        const u = new Error("probe error: " + f);
        u.transport = e.name, i(), this.emitReserved("upgradeError", u);
      };
      function a() {
        s("transport closed");
      }
      function c() {
        s("socket closed");
      }
      function l(f) {
        e && f.name !== e.name && i();
      }
      const d = () => {
        e.removeListener("open", o), e.removeListener("error", s), e.removeListener("close", a), this.off("close", c), this.off("upgrading", l);
      };
      e.once("open", o), e.once("error", s), e.once("close", a), this.once("close", c), this.once("upgrading", l), this._upgrades.indexOf("webtransport") !== -1 && n !== "webtransport" ? this.setTimeoutFn(() => {
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
  let th = class extends eh {
    constructor(n, e = {}) {
      const r = typeof n == "object" ? n : e;
      (!r.transports || r.transports && typeof r.transports[0] == "string") && (r.transports = (r.transports || ["polling", "websocket", "webtransport"]).map((o) => Gd[o]).filter((o) => !!o)), super(n, r);
    }
  };
  function nh(t, n = "", e) {
    let r = t;
    e = e || typeof location < "u" && location, t == null && (t = e.protocol + "//" + e.host), typeof t == "string" && (t.charAt(0) === "/" && (t.charAt(1) === "/" ? t = e.protocol + t : t = e.host + t), /^(https?|wss?):\/\//.test(t) || (typeof e < "u" ? t = e.protocol + "//" + t : t = "https://" + t), r = qi(t)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
    const i = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
    return r.id = r.protocol + "://" + i + ":" + r.port + n, r.href = r.protocol + "://" + i + (e && e.port === r.port ? "" : ":" + r.port), r;
  }
  const rh = typeof ArrayBuffer == "function", oh = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer, Ul = Object.prototype.toString, ih = typeof Blob == "function" || typeof Blob < "u" && Ul.call(Blob) === "[object BlobConstructor]", sh = typeof File == "function" || typeof File < "u" && Ul.call(File) === "[object FileConstructor]";
  function Gs(t) {
    return rh && (t instanceof ArrayBuffer || oh(t)) || ih && t instanceof Blob || sh && t instanceof File;
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
    if (Gs(t))
      return !0;
    if (t.toJSON && typeof t.toJSON == "function" && arguments.length === 1)
      return to(t.toJSON(), !0);
    for (const e in t)
      if (Object.prototype.hasOwnProperty.call(t, e) && to(t[e]))
        return !0;
    return !1;
  }
  function ah(t) {
    const n = [], e = t.data, r = t;
    return r.data = Xi(e, n), r.attachments = n.length, { packet: r, buffers: n };
  }
  function Xi(t, n) {
    if (!t)
      return t;
    if (Gs(t)) {
      const e = { _placeholder: !0, num: n.length };
      return n.push(t), e;
    } else if (Array.isArray(t)) {
      const e = new Array(t.length);
      for (let r = 0; r < t.length; r++)
        e[r] = Xi(t[r], n);
      return e;
    } else if (typeof t == "object" && !(t instanceof Date)) {
      const e = {};
      for (const r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = Xi(t[r], n));
      return e;
    }
    return t;
  }
  function ch(t, n) {
    return t.data = Yi(t.data, n), delete t.attachments, t;
  }
  function Yi(t, n) {
    if (!t)
      return t;
    if (t && t._placeholder === !0) {
      if (typeof t.num == "number" && t.num >= 0 && t.num < n.length)
        return n[t.num];
      throw new Error("illegal attachments");
    } else if (Array.isArray(t))
      for (let e = 0; e < t.length; e++)
        t[e] = Yi(t[e], n);
    else if (typeof t == "object")
      for (const e in t)
        Object.prototype.hasOwnProperty.call(t, e) && (t[e] = Yi(t[e], n));
    return t;
  }
  const lh = [
    "connect",
    "connect_error",
    "disconnect",
    "disconnecting",
    "newListener",
    "removeListener"
    // used by the Node.js EventEmitter
  ], uh = 5;
  var he;
  (function(t) {
    t[t.CONNECT = 0] = "CONNECT", t[t.DISCONNECT = 1] = "DISCONNECT", t[t.EVENT = 2] = "EVENT", t[t.ACK = 3] = "ACK", t[t.CONNECT_ERROR = 4] = "CONNECT_ERROR", t[t.BINARY_EVENT = 5] = "BINARY_EVENT", t[t.BINARY_ACK = 6] = "BINARY_ACK";
  })(he || (he = {}));
  class fh {
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
      return (n.type === he.EVENT || n.type === he.ACK) && to(n) ? this.encodeAsBinary({
        type: n.type === he.EVENT ? he.BINARY_EVENT : he.BINARY_ACK,
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
      return (n.type === he.BINARY_EVENT || n.type === he.BINARY_ACK) && (e += n.attachments + "-"), n.nsp && n.nsp !== "/" && (e += n.nsp + ","), n.id != null && (e += n.id), n.data != null && (e += JSON.stringify(n.data, this.replacer)), e;
    }
    /**
     * Encode packet as 'buffer sequence' by removing blobs, and
     * deconstructing packet into object with placeholders and
     * a list of buffers.
     */
    encodeAsBinary(n) {
      const e = ah(n), r = this.encodeAsString(e.packet), o = e.buffers;
      return o.unshift(r), o;
    }
  }
  function Ua(t) {
    return Object.prototype.toString.call(t) === "[object Object]";
  }
  class Ks extends Ue {
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
        const r = e.type === he.BINARY_EVENT;
        r || e.type === he.BINARY_ACK ? (e.type = r ? he.EVENT : he.ACK, this.reconstructor = new dh(e), e.attachments === 0 && super.emitReserved("decoded", e)) : super.emitReserved("decoded", e);
      } else if (Gs(n) || n.base64)
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
      if (he[r.type] === void 0)
        throw new Error("unknown packet type " + r.type);
      if (r.type === he.BINARY_EVENT || r.type === he.BINARY_ACK) {
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
        if (Ks.isPayloadValid(r.type, i))
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
        case he.CONNECT:
          return Ua(e);
        case he.DISCONNECT:
          return e === void 0;
        case he.CONNECT_ERROR:
          return typeof e == "string" || Ua(e);
        case he.EVENT:
        case he.BINARY_EVENT:
          return Array.isArray(e) && (typeof e[0] == "number" || typeof e[0] == "string" && lh.indexOf(e[0]) === -1);
        case he.ACK:
        case he.BINARY_ACK:
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
  class dh {
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
        const e = ch(this.reconPack, this.buffers);
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
  const hh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    Decoder: Ks,
    Encoder: fh,
    get PacketType() {
      return he;
    },
    protocol: uh
  }, Symbol.toStringTag, { value: "Module" }));
  function yt(t, n, e) {
    return t.on(n, e), function() {
      t.off(n, e);
    };
  }
  const xh = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
    newListener: 1,
    removeListener: 1
  });
  class ql extends Ue {
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
      if (xh.hasOwnProperty(n))
        throw new Error('"' + n.toString() + '" is a reserved event name');
      if (e.unshift(n), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
        return this._addToQueue(e), this;
      const s = {
        type: he.EVENT,
        data: e
      };
      if (s.options = {}, s.options.compress = this.flags.compress !== !1, typeof e[e.length - 1] == "function") {
        const d = this.ids++, f = e.pop();
        this._registerAckCallback(d, f), s.id = d;
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
        type: he.CONNECT,
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
          case he.CONNECT:
            n.data && n.data.sid ? this.onconnect(n.data.sid, n.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
            break;
          case he.EVENT:
          case he.BINARY_EVENT:
            this.onevent(n);
            break;
          case he.ACK:
          case he.BINARY_ACK:
            this.onack(n);
            break;
          case he.DISCONNECT:
            this.ondisconnect();
            break;
          case he.CONNECT_ERROR:
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
          type: he.ACK,
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
      return this.connected && this.packet({ type: he.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
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
  class $i extends Ue {
    constructor(n, e) {
      var r;
      super(), this.nsps = {}, this.subs = [], n && typeof n == "object" && (e = n, n = void 0), e = e || {}, e.path = e.path || "/socket.io", this.opts = e, Yo(this, e), this.reconnection(e.reconnection !== !1), this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0), this.reconnectionDelay(e.reconnectionDelay || 1e3), this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3), this.randomizationFactor((r = e.randomizationFactor) !== null && r !== void 0 ? r : 0.5), this.backoff = new Yn({
        min: this.reconnectionDelay(),
        max: this.reconnectionDelayMax(),
        jitter: this.randomizationFactor()
      }), this.timeout(e.timeout == null ? 2e4 : e.timeout), this._readyState = "closed", this.uri = n;
      const o = e.parser || hh;
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
      this.engine = new th(this.uri, this.opts);
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
      Xo(() => {
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
      return r ? this._autoConnect && !r.active && r.connect() : (r = new ql(this, n, e), this.nsps[n] = r), r;
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
    const e = nh(t, n.path || "/socket.io"), r = e.source, o = e.id, i = e.path, s = rr[o] && i in rr[o].nsps, a = n.forceNew || n["force new connection"] || n.multiplex === !1 || s;
    let c;
    return a ? c = new $i(r, n) : (rr[o] || (rr[o] = new $i(r, n)), c = rr[o]), e.query && !n.query && (n.query = e.queryKey), c.socket(e.path, n);
  }
  Object.assign(no, {
    Manager: $i,
    Socket: ql,
    io: no,
    connect: no
  });
  var bi = { exports: {} };
  /*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  */
  var qa;
  function ph() {
    return qa || (qa = 1, function(t) {
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
    }(bi)), bi.exports;
  }
  var mh = ph();
  const et = /* @__PURE__ */ s0(mh);
  function Bt() {
    return Bt = Object.assign ? Object.assign.bind() : function(t) {
      for (var n = 1; n < arguments.length; n++) {
        var e = arguments[n];
        for (var r in e) ({}).hasOwnProperty.call(e, r) && (t[r] = e[r]);
      }
      return t;
    }, Bt.apply(null, arguments);
  }
  function _e(t) {
    "@babel/helpers - typeof";
    return _e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
      return typeof n;
    } : function(n) {
      return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
    }, _e(t);
  }
  var gh = Symbol.for("react.element"), vh = Symbol.for("react.transitional.element"), bh = Symbol.for("react.fragment");
  function yh(t) {
    return (
      // Base object type
      t && _e(t) === "object" && // React Element type
      (t.$$typeof === gh || t.$$typeof === vh) && // React Fragment type
      t.type === bh
    );
  }
  var Gi = {}, Zs = [], Sh = function(n) {
    Zs.push(n);
  };
  function Js(t, n) {
    if (process.env.NODE_ENV !== "production" && !t && console !== void 0) {
      var e = Zs.reduce(function(r, o) {
        return o(r ?? "", "warning");
      }, n);
      e && console.error("Warning: ".concat(e));
    }
  }
  function wh(t, n) {
    if (process.env.NODE_ENV !== "production" && !t && console !== void 0) {
      var e = Zs.reduce(function(r, o) {
        return o(r ?? "", "note");
      }, n);
      e && console.warn("Note: ".concat(e));
    }
  }
  function Wl() {
    Gi = {};
  }
  function Xl(t, n, e) {
    !n && !Gi[e] && (t(!1, e), Gi[e] = !0);
  }
  function rn(t, n) {
    Xl(Js, t, n);
  }
  function Eh(t, n) {
    Xl(wh, t, n);
  }
  rn.preMessage = Sh;
  rn.resetWarned = Wl;
  rn.noteOnce = Eh;
  function _h(t, n) {
    if (_e(t) != "object" || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (e !== void 0) {
      var r = e.call(t, n);
      if (_e(r) != "object") return r;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (n === "string" ? String : Number)(t);
  }
  function Yl(t) {
    var n = _h(t, "string");
    return _e(n) == "symbol" ? n : n + "";
  }
  function q(t, n, e) {
    return (n = Yl(n)) in t ? Object.defineProperty(t, n, {
      value: e,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = e, t;
  }
  function Wa(t, n) {
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
      n % 2 ? Wa(Object(e), !0).forEach(function(r) {
        q(t, r, e[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : Wa(Object(e)).forEach(function(r) {
        Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
      });
    }
    return t;
  }
  function Xa(t) {
    return t instanceof HTMLElement || t instanceof SVGElement;
  }
  function Ch(t) {
    return t && _e(t) === "object" && Xa(t.nativeElement) ? t.nativeElement : Xa(t) ? t : null;
  }
  function Ah(t) {
    var n = Ch(t);
    if (n)
      return n;
    if (t instanceof Fe.Component) {
      var e;
      return (e = ga.findDOMNode) === null || e === void 0 ? void 0 : e.call(ga, t);
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
  function Th() {
    if (Ya) return be;
    Ya = 1;
    var t = Symbol.for("react.element"), n = Symbol.for("react.portal"), e = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g;
    g = Symbol.for("react.module.reference");
    function h(x) {
      if (typeof x == "object" && x !== null) {
        var w = x.$$typeof;
        switch (w) {
          case t:
            switch (x = x.type, x) {
              case e:
              case o:
              case r:
              case l:
              case d:
                return x;
              default:
                switch (x = x && x.$$typeof, x) {
                  case a:
                  case s:
                  case c:
                  case u:
                  case f:
                  case i:
                    return x;
                  default:
                    return w;
                }
            }
          case n:
            return w;
        }
      }
    }
    return be.ContextConsumer = s, be.ContextProvider = i, be.Element = t, be.ForwardRef = c, be.Fragment = e, be.Lazy = u, be.Memo = f, be.Portal = n, be.Profiler = o, be.StrictMode = r, be.Suspense = l, be.SuspenseList = d, be.isAsyncMode = function() {
      return !1;
    }, be.isConcurrentMode = function() {
      return !1;
    }, be.isContextConsumer = function(x) {
      return h(x) === s;
    }, be.isContextProvider = function(x) {
      return h(x) === i;
    }, be.isElement = function(x) {
      return typeof x == "object" && x !== null && x.$$typeof === t;
    }, be.isForwardRef = function(x) {
      return h(x) === c;
    }, be.isFragment = function(x) {
      return h(x) === e;
    }, be.isLazy = function(x) {
      return h(x) === u;
    }, be.isMemo = function(x) {
      return h(x) === f;
    }, be.isPortal = function(x) {
      return h(x) === n;
    }, be.isProfiler = function(x) {
      return h(x) === o;
    }, be.isStrictMode = function(x) {
      return h(x) === r;
    }, be.isSuspense = function(x) {
      return h(x) === l;
    }, be.isSuspenseList = function(x) {
      return h(x) === d;
    }, be.isValidElementType = function(x) {
      return typeof x == "string" || typeof x == "function" || x === e || x === o || x === r || x === l || x === d || x === v || typeof x == "object" && x !== null && (x.$$typeof === u || x.$$typeof === f || x.$$typeof === i || x.$$typeof === s || x.$$typeof === c || x.$$typeof === g || x.getModuleId !== void 0);
    }, be.typeOf = h, be;
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
  var $a;
  function Oh() {
    return $a || ($a = 1, process.env.NODE_ENV !== "production" && function() {
      var t = Symbol.for("react.element"), n = Symbol.for("react.portal"), e = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g = !1, h = !1, x = !1, w = !1, y = !1, m;
      m = Symbol.for("react.module.reference");
      function A(N) {
        return !!(typeof N == "string" || typeof N == "function" || N === e || N === o || y || N === r || N === l || N === d || w || N === v || g || h || x || typeof N == "object" && N !== null && (N.$$typeof === u || N.$$typeof === f || N.$$typeof === i || N.$$typeof === s || N.$$typeof === c || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        N.$$typeof === m || N.getModuleId !== void 0));
      }
      function b(N) {
        if (typeof N == "object" && N !== null) {
          var J = N.$$typeof;
          switch (J) {
            case t:
              var Ce = N.type;
              switch (Ce) {
                case e:
                case o:
                case r:
                case l:
                case d:
                  return Ce;
                default:
                  var dt = Ce && Ce.$$typeof;
                  switch (dt) {
                    case a:
                    case s:
                    case c:
                    case u:
                    case f:
                    case i:
                      return dt;
                    default:
                      return J;
                  }
              }
            case n:
              return J;
          }
        }
      }
      var O = s, C = i, L = t, F = c, Y = e, oe = u, G = f, B = n, W = o, H = r, te = l, Z = d, Q = !1, ee = !1;
      function ae(N) {
        return Q || (Q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
      }
      function ie(N) {
        return ee || (ee = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
      }
      function K(N) {
        return b(N) === s;
      }
      function ne(N) {
        return b(N) === i;
      }
      function xe(N) {
        return typeof N == "object" && N !== null && N.$$typeof === t;
      }
      function de(N) {
        return b(N) === c;
      }
      function me(N) {
        return b(N) === e;
      }
      function R(N) {
        return b(N) === u;
      }
      function z(N) {
        return b(N) === f;
      }
      function k(N) {
        return b(N) === n;
      }
      function j(N) {
        return b(N) === o;
      }
      function E(N) {
        return b(N) === r;
      }
      function M(N) {
        return b(N) === l;
      }
      function ke(N) {
        return b(N) === d;
      }
      ye.ContextConsumer = O, ye.ContextProvider = C, ye.Element = L, ye.ForwardRef = F, ye.Fragment = Y, ye.Lazy = oe, ye.Memo = G, ye.Portal = B, ye.Profiler = W, ye.StrictMode = H, ye.Suspense = te, ye.SuspenseList = Z, ye.isAsyncMode = ae, ye.isConcurrentMode = ie, ye.isContextConsumer = K, ye.isContextProvider = ne, ye.isElement = xe, ye.isForwardRef = de, ye.isFragment = me, ye.isLazy = R, ye.isMemo = z, ye.isPortal = k, ye.isProfiler = j, ye.isStrictMode = E, ye.isSuspense = M, ye.isSuspenseList = ke, ye.isValidElementType = A, ye.typeOf = b;
    }()), ye;
  }
  var Ga;
  function Rh() {
    return Ga || (Ga = 1, process.env.NODE_ENV === "production" ? Dr.exports = Th() : Dr.exports = Oh()), Dr.exports;
  }
  var yi = Rh();
  function $l(t, n, e) {
    var r = _.useRef({});
    return (!("value" in r.current) || e(r.current.condition, n)) && (r.current.value = t(), r.current.condition = n), r.current.value;
  }
  var kh = Number(o0.split(".")[0]), Gl = function(n, e) {
    typeof n == "function" ? n(e) : _e(n) === "object" && n && "current" in n && (n.current = e);
  }, Ph = function() {
    for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++)
      e[r] = arguments[r];
    var o = e.filter(Boolean);
    return o.length <= 1 ? o[0] : function(i) {
      e.forEach(function(s) {
        Gl(s, i);
      });
    };
  }, Ih = function(n) {
    var e, r;
    if (!n)
      return !1;
    if (Kl(n) && kh >= 19)
      return !0;
    var o = yi.isMemo(n) ? n.type.type : n.type;
    return !(typeof o == "function" && !((e = o.prototype) !== null && e !== void 0 && e.render) && o.$$typeof !== yi.ForwardRef || typeof n == "function" && !((r = n.prototype) !== null && r !== void 0 && r.render) && n.$$typeof !== yi.ForwardRef);
  };
  function Kl(t) {
    return /* @__PURE__ */ r0(t) && !yh(t);
  }
  var Nh = function(n) {
    if (n && Kl(n)) {
      var e = n;
      return e.props.propertyIsEnumerable("ref") ? e.props.ref : e.ref;
    }
    return null;
  };
  function At(t, n) {
    if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function");
  }
  function Ka(t, n) {
    for (var e = 0; e < n.length; e++) {
      var r = n[e];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, Yl(r.key), r);
    }
  }
  function Tt(t, n, e) {
    return n && Ka(t.prototype, n), e && Ka(t, e), Object.defineProperty(t, "prototype", {
      writable: !1
    }), t;
  }
  function Ki(t, n) {
    return Ki = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, r) {
      return e.__proto__ = r, e;
    }, Ki(t, n);
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
    }), n && Ki(t, n);
  }
  function Fn(t) {
    return Fn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
      return n.__proto__ || Object.getPrototypeOf(n);
    }, Fn(t);
  }
  function Qs() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (Qs = function() {
      return !!t;
    })();
  }
  function bn(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }
  function Zl(t, n) {
    if (n && (_e(n) == "object" || typeof n == "function")) return n;
    if (n !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return bn(t);
  }
  function $o(t) {
    var n = Qs();
    return function() {
      var e, r = Fn(t);
      if (n) {
        var o = Fn(this).constructor;
        e = Reflect.construct(r, arguments, o);
      } else e = r.apply(this, arguments);
      return Zl(this, e);
    };
  }
  function Zi(t, n) {
    (n == null || n > t.length) && (n = t.length);
    for (var e = 0, r = Array(n); e < n; e++) r[e] = t[e];
    return r;
  }
  function jh(t) {
    if (Array.isArray(t)) return Zi(t);
  }
  function Jl(t) {
    if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
  }
  function ea(t, n) {
    if (t) {
      if (typeof t == "string") return Zi(t, n);
      var e = {}.toString.call(t).slice(8, -1);
      return e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set" ? Array.from(t) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? Zi(t, n) : void 0;
    }
  }
  function Lh() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function Wt(t) {
    return jh(t) || Jl(t) || ea(t) || Lh();
  }
  var Ql = function(n) {
    return +setTimeout(n, 16);
  }, eu = function(n) {
    return clearTimeout(n);
  };
  typeof window < "u" && "requestAnimationFrame" in window && (Ql = function(n) {
    return window.requestAnimationFrame(n);
  }, eu = function(n) {
    return window.cancelAnimationFrame(n);
  });
  var Za = 0, Go = /* @__PURE__ */ new Map();
  function tu(t) {
    Go.delete(t);
  }
  var So = function(n) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    Za += 1;
    var r = Za;
    function o(i) {
      if (i === 0)
        tu(r), n();
      else {
        var s = Ql(function() {
          o(i - 1);
        });
        Go.set(r, s);
      }
    }
    return o(e), r;
  };
  So.cancel = function(t) {
    var n = Go.get(t);
    return tu(t), eu(n);
  };
  process.env.NODE_ENV !== "production" && (So.ids = function() {
    return Go;
  });
  function nu(t) {
    if (Array.isArray(t)) return t;
  }
  function Mh(t, n) {
    var e = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
    if (e != null) {
      var r, o, i, s, a = [], c = !0, l = !1;
      try {
        if (i = (e = e.call(t)).next, n === 0) {
          if (Object(e) !== e) return;
          c = !1;
        } else for (; !(c = (r = i.call(e)).done) && (a.push(r.value), a.length !== n); c = !0) ;
      } catch (d) {
        l = !0, o = d;
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
  function ru() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function ue(t, n) {
    return nu(t) || Mh(t, n) || ea(t, n) || ru();
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
  function Xt() {
    return !!(typeof window < "u" && window.document && window.document.createElement);
  }
  function Dh(t, n) {
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
  var Ja = "data-rc-order", Qa = "data-rc-priority", Bh = "rc-util-key", Ji = /* @__PURE__ */ new Map();
  function ou() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.mark;
    return n ? n.startsWith("data-") ? n : "data-".concat(n) : Bh;
  }
  function Ko(t) {
    if (t.attachTo)
      return t.attachTo;
    var n = document.querySelector("head");
    return n || document.body;
  }
  function Fh(t) {
    return t === "queue" ? "prependQueue" : t ? "prepend" : "append";
  }
  function ta(t) {
    return Array.from((Ji.get(t) || t).children).filter(function(n) {
      return n.tagName === "STYLE";
    });
  }
  function iu(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!Xt())
      return null;
    var e = n.csp, r = n.prepend, o = n.priority, i = o === void 0 ? 0 : o, s = Fh(r), a = s === "prependQueue", c = document.createElement("style");
    c.setAttribute(Ja, s), a && i && c.setAttribute(Qa, "".concat(i)), e != null && e.nonce && (c.nonce = e == null ? void 0 : e.nonce), c.innerHTML = t;
    var l = Ko(n), d = l.firstChild;
    if (r) {
      if (a) {
        var f = (n.styles || ta(l)).filter(function(u) {
          if (!["prepend", "prependQueue"].includes(u.getAttribute(Ja)))
            return !1;
          var v = Number(u.getAttribute(Qa) || 0);
          return i >= v;
        });
        if (f.length)
          return l.insertBefore(c, f[f.length - 1].nextSibling), c;
      }
      l.insertBefore(c, d);
    } else
      l.appendChild(c);
    return c;
  }
  function su(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = Ko(n);
    return (n.styles || ta(e)).find(function(r) {
      return r.getAttribute(ou(n)) === t;
    });
  }
  function au(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = su(t, n);
    if (e) {
      var r = Ko(n);
      r.removeChild(e);
    }
  }
  function zh(t, n) {
    var e = Ji.get(t);
    if (!e || !Dh(document, e)) {
      var r = iu("", n), o = r.parentNode;
      Ji.set(t, o), t.removeChild(r);
    }
  }
  function yn(t, n) {
    var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Ko(e), o = ta(r), i = V(V({}, e), {}, {
      styles: o
    });
    zh(r, i);
    var s = su(n, i);
    if (s) {
      var a, c;
      if ((a = i.csp) !== null && a !== void 0 && a.nonce && s.nonce !== ((c = i.csp) === null || c === void 0 ? void 0 : c.nonce)) {
        var l;
        s.nonce = (l = i.csp) === null || l === void 0 ? void 0 : l.nonce;
      }
      return s.innerHTML !== t && (s.innerHTML = t), s;
    }
    var d = iu(t, i);
    return d.setAttribute(ou(i), n), d;
  }
  function Vh(t, n) {
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
    var e, r, o = Vh(t, n);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(t);
      for (r = 0; r < i.length; r++) e = i[r], n.indexOf(e) === -1 && {}.propertyIsEnumerable.call(t, e) && (o[e] = t[e]);
    }
    return o;
  }
  function Hh(t, n) {
    var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = /* @__PURE__ */ new Set();
    function o(i, s) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, c = r.has(i);
      if (rn(!c, "Warning: There may be circular references"), c)
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
        for (var d = 0; d < i.length; d++)
          if (!o(i[d], s[d], l))
            return !1;
        return !0;
      }
      if (i && s && _e(i) === "object" && _e(s) === "object") {
        var f = Object.keys(i);
        return f.length !== Object.keys(s).length ? !1 : f.every(function(u) {
          return o(i[u], s[u], l);
        });
      }
      return !1;
    }
    return o(t, n);
  }
  var Uh = "%";
  function Qi(t) {
    return t.join(Uh);
  }
  var qh = /* @__PURE__ */ function() {
    function t(n) {
      At(this, t), q(this, "instanceId", void 0), q(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = n;
    }
    return Tt(t, [{
      key: "get",
      value: function(e) {
        return this.opGet(Qi(e));
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
        return this.opUpdate(Qi(e), r);
      }
      /** A fast get cache with `get` concat. */
    }, {
      key: "opUpdate",
      value: function(e, r) {
        var o = this.cache.get(e), i = r(o);
        i === null ? this.cache.delete(e) : this.cache.set(e, i);
      }
    }]), t;
  }(), zn = "data-token-hash", Et = "data-css-hash", Wh = "data-cache-path", Jt = "__cssinjs_instance__";
  function Xh() {
    var t = Math.random().toString(12).slice(2);
    if (typeof document < "u" && document.head && document.body) {
      var n = document.body.querySelectorAll("style[".concat(Et, "]")) || [], e = document.head.firstChild;
      Array.from(n).forEach(function(o) {
        o[Jt] = o[Jt] || t, o[Jt] === t && document.head.insertBefore(o, e);
      });
      var r = {};
      Array.from(document.querySelectorAll("style[".concat(Et, "]"))).forEach(function(o) {
        var i = o.getAttribute(Et);
        if (r[i]) {
          if (o[Jt] === t) {
            var s;
            (s = o.parentNode) === null || s === void 0 || s.removeChild(o);
          }
        } else
          r[i] = !0;
      });
    }
    return new qh(t);
  }
  var Cr = /* @__PURE__ */ _.createContext({
    hashPriority: "low",
    cache: Xh(),
    defaultCache: !0
  });
  function Yh(t, n) {
    if (t.length !== n.length)
      return !1;
    for (var e = 0; e < t.length; e++)
      if (t[e] !== n[e])
        return !1;
    return !0;
  }
  var na = /* @__PURE__ */ function() {
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
            var i = this.keys.reduce(function(l, d) {
              var f = ue(l, 2), u = f[1];
              return o.internalGet(d)[1] < u ? [d, o.internalGet(d)[1]] : l;
            }, [this.keys[0], this.cacheCallTimes]), s = ue(i, 1), a = s[0];
            this.delete(a);
          }
          this.keys.push(e);
        }
        var c = this.cache;
        e.forEach(function(l, d) {
          if (d === e.length - 1)
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
            return !Yh(r, e);
          }), this.deleteByPath(this.cache, e);
      }
    }]), t;
  }();
  q(na, "MAX_CACHE_SIZE", 20);
  q(na, "MAX_CACHE_OFFSET", 5);
  var ec = 0, cu = /* @__PURE__ */ function() {
    function t(n) {
      At(this, t), q(this, "derivatives", void 0), q(this, "id", void 0), this.derivatives = Array.isArray(n) ? n : [n], this.id = ec, n.length === 0 && Js(n.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), ec += 1;
    }
    return Tt(t, [{
      key: "getDerivativeToken",
      value: function(e) {
        return this.derivatives.reduce(function(r, o) {
          return o(e, r);
        }, void 0);
      }
    }]), t;
  }(), Si = new na();
  function es(t) {
    var n = Array.isArray(t) ? t : [t];
    return Si.has(n) || Si.set(n, new cu(n)), Si.get(n);
  }
  var $h = /* @__PURE__ */ new WeakMap(), wi = {};
  function Gh(t, n) {
    for (var e = $h, r = 0; r < n.length; r += 1) {
      var o = n[r];
      e.has(o) || e.set(o, /* @__PURE__ */ new WeakMap()), e = e.get(o);
    }
    return e.has(wi) || e.set(wi, t()), e.get(wi);
  }
  var tc = /* @__PURE__ */ new WeakMap();
  function dr(t) {
    var n = tc.get(t) || "";
    return n || (Object.keys(t).forEach(function(e) {
      var r = t[e];
      n += e, r instanceof cu ? n += r.id : r && _e(r) === "object" ? n += dr(r) : n += r;
    }), n = pr(n), tc.set(t, n)), n;
  }
  function nc(t, n) {
    return pr("".concat(n, "_").concat(dr(t)));
  }
  var ts = Xt();
  function wo(t) {
    return typeof t == "number" ? "".concat(t, "px") : t;
  }
  function Eo(t, n, e) {
    var r, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
    if (i)
      return t;
    var s = V(V({}, o), {}, (r = {}, q(r, zn, n), q(r, Et, e), r)), a = Object.keys(s).map(function(c) {
      var l = s[c];
      return l ? "".concat(c, '="').concat(l, '"') : null;
    }).filter(function(c) {
      return c;
    }).join(" ");
    return "<style ".concat(a, ">").concat(t, "</style>");
  }
  var ro = function(n) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return "--".concat(e ? "".concat(e, "-") : "").concat(n).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
  }, Kh = function(n, e, r) {
    return Object.keys(n).length ? ".".concat(e).concat(r != null && r.scope ? ".".concat(r.scope) : "", "{").concat(Object.entries(n).map(function(o) {
      var i = ue(o, 2), s = i[0], a = i[1];
      return "".concat(s, ":").concat(a, ";");
    }).join(""), "}") : "";
  }, lu = function(n, e, r) {
    var o = {}, i = {};
    return Object.entries(n).forEach(function(s) {
      var a, c, l = ue(s, 2), d = l[0], f = l[1];
      if (r != null && (a = r.preserve) !== null && a !== void 0 && a[d])
        i[d] = f;
      else if ((typeof f == "string" || typeof f == "number") && !(r != null && (c = r.ignore) !== null && c !== void 0 && c[d])) {
        var u, v = ro(d, r == null ? void 0 : r.prefix);
        o[v] = typeof f == "number" && !(r != null && (u = r.unitless) !== null && u !== void 0 && u[d]) ? "".concat(f, "px") : String(f), i[d] = "var(".concat(v, ")");
      }
    }), [i, Kh(o, e, {
      scope: r == null ? void 0 : r.scope
    })];
  }, rc = process.env.NODE_ENV !== "test" && Xt() ? _.useLayoutEffect : _.useEffect, uu = function(n, e) {
    var r = _.useRef(!0);
    rc(function() {
      return n(r.current);
    }, e), rc(function() {
      return r.current = !1, function() {
        r.current = !0;
      };
    }, []);
  }, Zh = V({}, _), oc = Zh.useInsertionEffect, Jh = function(n, e, r) {
    _.useMemo(n, r), uu(function() {
      return e(!0);
    }, r);
  }, Qh = oc ? function(t, n, e) {
    return oc(function() {
      return t(), n();
    }, e);
  } : Jh, ex = V({}, _), tx = ex.useInsertionEffect, nx = function(n) {
    var e = [], r = !1;
    function o(i) {
      if (r) {
        process.env.NODE_ENV !== "production" && Js(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
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
  }, rx = function() {
    return function(n) {
      n();
    };
  }, ox = typeof tx < "u" ? nx : rx;
  function ix() {
    return !1;
  }
  var ns = !1;
  function sx() {
    return ns;
  }
  const ax = process.env.NODE_ENV === "production" ? ix : sx;
  if (process.env.NODE_ENV !== "production" && typeof ho < "u" && ho && ho.hot && typeof window < "u") {
    var Br = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : null;
    if (Br && typeof Br.webpackHotUpdate == "function") {
      var cx = Br.webpackHotUpdate;
      Br.webpackHotUpdate = function() {
        return ns = !0, setTimeout(function() {
          ns = !1;
        }, 0), cx.apply(void 0, arguments);
      };
    }
  }
  function ra(t, n, e, r, o) {
    var i = _.useContext(Cr), s = i.cache, a = [t].concat(Wt(n)), c = Qi(a), l = ox([c]), d = ax(), f = function(h) {
      s.opUpdate(c, function(x) {
        var w = x || [void 0, void 0], y = ue(w, 2), m = y[0], A = m === void 0 ? 0 : m, b = y[1], O = b;
        process.env.NODE_ENV !== "production" && b && d && (r == null || r(O, d), O = null);
        var C = O || e(), L = [A, C];
        return h ? h(L) : L;
      });
    };
    _.useMemo(
      function() {
        f();
      },
      /* eslint-disable react-hooks/exhaustive-deps */
      [c]
      /* eslint-enable */
    );
    var u = s.opGet(c);
    process.env.NODE_ENV !== "production" && !u && (f(), u = s.opGet(c));
    var v = u[1];
    return Qh(function() {
      o == null || o(v);
    }, function(g) {
      return f(function(h) {
        var x = ue(h, 2), w = x[0], y = x[1];
        return g && w === 0 && (o == null || o(v)), [w + 1, y];
      }), function() {
        s.opUpdate(c, function(h) {
          var x = h || [], w = ue(x, 2), y = w[0], m = y === void 0 ? 0 : y, A = w[1], b = m - 1;
          return b === 0 ? (l(function() {
            (g || !s.opGet(c)) && (r == null || r(A, !1));
          }), null) : [m - 1, A];
        });
      };
    }, [c]), v;
  }
  var lx = {}, ux = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", hn = /* @__PURE__ */ new Map();
  function fx(t) {
    hn.set(t, (hn.get(t) || 0) + 1);
  }
  function dx(t, n) {
    if (typeof document < "u") {
      var e = document.querySelectorAll("style[".concat(zn, '="').concat(t, '"]'));
      e.forEach(function(r) {
        if (r[Jt] === n) {
          var o;
          (o = r.parentNode) === null || o === void 0 || o.removeChild(r);
        }
      });
    }
  }
  var hx = 0;
  function xx(t, n) {
    hn.set(t, (hn.get(t) || 0) - 1);
    var e = Array.from(hn.keys()), r = e.filter(function(o) {
      var i = hn.get(o) || 0;
      return i <= 0;
    });
    e.length - r.length > hx && r.forEach(function(o) {
      dx(o, n), hn.delete(o);
    });
  }
  var px = function(n, e, r, o) {
    var i = r.getDerivativeToken(n), s = V(V({}, i), e);
    return o && (s = o(s)), s;
  }, fu = "token";
  function mx(t, n) {
    var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = tn(Cr), o = r.cache.instanceId, i = r.container, s = e.salt, a = s === void 0 ? "" : s, c = e.override, l = c === void 0 ? lx : c, d = e.formatToken, f = e.getComputedToken, u = e.cssVar, v = Gh(function() {
      return Object.assign.apply(Object, [{}].concat(Wt(n)));
    }, n), g = dr(v), h = dr(l), x = u ? dr(u) : "", w = ra(fu, [a, t.id, g, h, x], function() {
      var y, m = f ? f(v, l, t) : px(v, l, t, d), A = V({}, m), b = "";
      if (u) {
        var O = lu(m, u.key, {
          prefix: u.prefix,
          ignore: u.ignore,
          unitless: u.unitless,
          preserve: u.preserve
        }), C = ue(O, 2);
        m = C[0], b = C[1];
      }
      var L = nc(m, a);
      m._tokenKey = L, A._tokenKey = nc(A, a);
      var F = (y = u == null ? void 0 : u.key) !== null && y !== void 0 ? y : L;
      m._themeKey = F, fx(F);
      var Y = "".concat(ux, "-").concat(pr(L));
      return m._hashId = Y, [m, Y, A, b, (u == null ? void 0 : u.key) || ""];
    }, function(y) {
      xx(y[0]._themeKey, o);
    }, function(y) {
      var m = ue(y, 4), A = m[0], b = m[3];
      if (u && b) {
        var O = yn(b, pr("css-variables-".concat(A._themeKey)), {
          mark: Et,
          prepend: "queue",
          attachTo: i,
          priority: -999
        });
        O[Jt] = o, O.setAttribute(zn, A._themeKey);
      }
    });
    return w;
  }
  var gx = function(n, e, r) {
    var o = ue(n, 5), i = o[2], s = o[3], a = o[4], c = r || {}, l = c.plain;
    if (!s)
      return null;
    var d = i._tokenKey, f = -999, u = {
      "data-rc-order": "prependQueue",
      "data-rc-priority": "".concat(f)
    }, v = Eo(s, a, d, u, l);
    return [f, d, v];
  }, vx = {
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
  }, du = "comm", hu = "rule", xu = "decl", bx = "@import", yx = "@namespace", Sx = "@keyframes", wx = "@layer", pu = Math.abs, oa = String.fromCharCode;
  function mu(t) {
    return t.trim();
  }
  function oo(t, n, e) {
    return t.replace(n, e);
  }
  function Ex(t, n, e) {
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
  function _x(t) {
    return t.length;
  }
  function Fr(t, n) {
    return n.push(t), t;
  }
  var Zo = 1, Hn = 1, gu = 0, vt = 0, He = 0, $n = "";
  function ia(t, n, e, r, o, i, s, a) {
    return { value: t, root: n, parent: e, type: r, props: o, children: i, line: Zo, column: Hn, length: s, return: "", siblings: a };
  }
  function Cx() {
    return He;
  }
  function Ax() {
    return He = vt > 0 ? In($n, --vt) : 0, Hn--, He === 10 && (Hn = 1, Zo--), He;
  }
  function _t() {
    return He = vt < gu ? In($n, vt++) : 0, Hn++, He === 10 && (Hn = 1, Zo++), He;
  }
  function Qt() {
    return In($n, vt);
  }
  function io() {
    return vt;
  }
  function Jo(t, n) {
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
  function Tx(t) {
    return Zo = Hn = 1, gu = jt($n = t), vt = 0, [];
  }
  function Ox(t) {
    return $n = "", t;
  }
  function Ei(t) {
    return mu(Jo(vt - 1, rs(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
  }
  function Rx(t) {
    for (; (He = Qt()) && He < 33; )
      _t();
    return gr(t) > 2 || gr(He) > 3 ? "" : " ";
  }
  function kx(t, n) {
    for (; --n && _t() && !(He < 48 || He > 102 || He > 57 && He < 65 || He > 70 && He < 97); )
      ;
    return Jo(t, io() + (n < 6 && Qt() == 32 && _t() == 32));
  }
  function rs(t) {
    for (; _t(); )
      switch (He) {
        // ] ) " '
        case t:
          return vt;
        // " '
        case 34:
        case 39:
          t !== 34 && t !== 39 && rs(He);
          break;
        // (
        case 40:
          t === 41 && rs(t);
          break;
        // \
        case 92:
          _t();
          break;
      }
    return vt;
  }
  function Px(t, n) {
    for (; _t() && t + He !== 57; )
      if (t + He === 84 && Qt() === 47)
        break;
    return "/*" + Jo(n, vt - 1) + "*" + oa(t === 47 ? t : _t());
  }
  function Ix(t) {
    for (; !gr(Qt()); )
      _t();
    return Jo(t, vt);
  }
  function Nx(t) {
    return Ox(so("", null, null, null, [""], t = Tx(t), 0, [0], t));
  }
  function so(t, n, e, r, o, i, s, a, c) {
    for (var l = 0, d = 0, f = s, u = 0, v = 0, g = 0, h = 1, x = 1, w = 1, y = 0, m = "", A = o, b = i, O = r, C = m; x; )
      switch (g = y, y = _t()) {
        // (
        case 40:
          if (g != 108 && In(C, f - 1) == 58) {
            Ex(C += oo(Ei(y), "&", "&\f"), "&\f", pu(l ? a[l - 1] : 0)) != -1 && (w = -1);
            break;
          }
        // " ' [
        case 34:
        case 39:
        case 91:
          C += Ei(y);
          break;
        // \t \n \r \s
        case 9:
        case 10:
        case 13:
        case 32:
          C += Rx(g);
          break;
        // \
        case 92:
          C += kx(io() - 1, 7);
          continue;
        // /
        case 47:
          switch (Qt()) {
            case 42:
            case 47:
              Fr(jx(Px(_t(), io()), n, e, c), c), (gr(g || 1) == 5 || gr(Qt() || 1) == 5) && jt(C) && Vn(C, -1, void 0) !== " " && (C += " ");
              break;
            default:
              C += "/";
          }
          break;
        // {
        case 123 * h:
          a[l++] = jt(C) * w;
        // } ; \0
        case 125 * h:
        case 59:
        case 0:
          switch (y) {
            // \0 }
            case 0:
            case 125:
              x = 0;
            // ;
            case 59 + d:
              w == -1 && (C = oo(C, /\f/g, "")), v > 0 && (jt(C) - f || h === 0 && g === 47) && Fr(v > 32 ? sc(C + ";", r, e, f - 1, c) : sc(oo(C, " ", "") + ";", r, e, f - 2, c), c);
              break;
            // @ ;
            case 59:
              C += ";";
            // { rule/at-rule
            default:
              if (Fr(O = ic(C, n, e, l, d, o, a, m, A = [], b = [], f, i), i), y === 123)
                if (d === 0)
                  so(C, n, O, O, A, i, f, a, b);
                else {
                  switch (u) {
                    // c(ontainer)
                    case 99:
                      if (In(C, 3) === 110) break;
                    // l(ayer)
                    case 108:
                      if (In(C, 2) === 97) break;
                    default:
                      d = 0;
                    // d(ocument) m(edia) s(upports)
                    case 100:
                    case 109:
                    case 115:
                  }
                  d ? so(t, O, O, r && Fr(ic(t, O, O, 0, 0, o, a, m, o, A = [], f, b), b), o, b, f, a, r ? A : b) : so(C, O, O, O, [""], b, 0, a, b);
                }
          }
          l = d = v = 0, h = w = 1, m = C = "", f = s;
          break;
        // :
        case 58:
          f = 1 + jt(C), v = g;
        default:
          if (h < 1) {
            if (y == 123)
              --h;
            else if (y == 125 && h++ == 0 && Ax() == 125)
              continue;
          }
          switch (C += oa(y), y * h) {
            // &
            case 38:
              w = d > 0 ? 1 : (C += "\f", -1);
              break;
            // ,
            case 44:
              a[l++] = (jt(C) - 1) * w, w = 1;
              break;
            // @
            case 64:
              Qt() === 45 && (C += Ei(_t())), u = Qt(), d = f = jt(m = C += Ix(io())), y++;
              break;
            // -
            case 45:
              g === 45 && jt(C) == 2 && (h = 0);
          }
      }
    return i;
  }
  function ic(t, n, e, r, o, i, s, a, c, l, d, f) {
    for (var u = o - 1, v = o === 0 ? i : [""], g = _x(v), h = 0, x = 0, w = 0; h < r; ++h)
      for (var y = 0, m = Vn(t, u + 1, u = pu(x = s[h])), A = t; y < g; ++y)
        (A = mu(x > 0 ? v[y] + " " + m : oo(m, /&\f/g, v[y]))) && (c[w++] = A);
    return ia(t, n, e, o === 0 ? hu : a, c, l, d, f);
  }
  function jx(t, n, e, r) {
    return ia(t, n, e, du, oa(Cx()), Vn(t, 2, -2), 0, r);
  }
  function sc(t, n, e, r, o) {
    return ia(t, n, e, xu, Vn(t, 0, r), Vn(t, r + 1, -1), r, o);
  }
  function os(t, n) {
    for (var e = "", r = 0; r < t.length; r++)
      e += n(t[r], r, t, n) || "";
    return e;
  }
  function Lx(t, n, e, r) {
    switch (t.type) {
      case wx:
        if (t.children.length) break;
      case bx:
      case yx:
      case xu:
        return t.return = t.return || t.value;
      case du:
        return "";
      case Sx:
        return t.return = t.value + "{" + os(t.children, r) + "}";
      case hu:
        if (!jt(t.value = t.props.join(","))) return "";
    }
    return jt(e = os(t.children, r)) ? t.return = t.value + "{" + e + "}" : "";
  }
  function vu(t, n) {
    var e = n.path, r = n.parentSelectors;
    rn(!1, "[Ant Design CSS-in-JS] ".concat(e ? "Error in ".concat(e, ": ") : "").concat(t).concat(r.length ? " Selector: ".concat(r.join(" | ")) : ""));
  }
  var Mx = function(n, e, r) {
    if (n === "content") {
      var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, i = ["normal", "none", "initial", "inherit", "unset"];
      (typeof e != "string" || i.indexOf(e) === -1 && !o.test(e) && (e.charAt(0) !== e.charAt(e.length - 1) || e.charAt(0) !== '"' && e.charAt(0) !== "'")) && vu("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(e, "\"'`."), r);
    }
  }, Dx = function(n, e, r) {
    n === "animation" && r.hashId && e !== "none" && vu("You seem to be using hashed animation '".concat(e, "', in which case 'animationName' with Keyframe as value is recommended."), r);
  }, ac = "data-ant-cssinjs-cache-path", bu = "_FILE_STYLE__", Sn, yu = !0;
  function Bx() {
    if (!Sn && (Sn = {}, Xt())) {
      var t = document.createElement("div");
      t.className = ac, t.style.position = "fixed", t.style.visibility = "hidden", t.style.top = "-9999px", document.body.appendChild(t);
      var n = getComputedStyle(t).content || "";
      n = n.replace(/^"/, "").replace(/"$/, ""), n.split(";").forEach(function(o) {
        var i = o.split(":"), s = ue(i, 2), a = s[0], c = s[1];
        Sn[a] = c;
      });
      var e = document.querySelector("style[".concat(ac, "]"));
      if (e) {
        var r;
        yu = !1, (r = e.parentNode) === null || r === void 0 || r.removeChild(e);
      }
      document.body.removeChild(t);
    }
  }
  function Fx(t) {
    return Bx(), !!Sn[t];
  }
  function zx(t) {
    var n = Sn[t], e = null;
    if (n && Xt())
      if (yu)
        e = bu;
      else {
        var r = document.querySelector("style[".concat(Et, '="').concat(Sn[t], '"]'));
        r ? e = r.innerHTML : delete Sn[t];
      }
    return [e, n];
  }
  var Su = "_skip_check_", wu = "_multi_value_";
  function ao(t) {
    var n = os(Nx(t), Lx);
    return n.replace(/\{%%%\:[^;];}/g, ";");
  }
  function Vx(t) {
    return _e(t) === "object" && t && (Su in t || wu in t);
  }
  function cc(t, n, e) {
    if (!n)
      return t;
    var r = ".".concat(n), o = e === "low" ? ":where(".concat(r, ")") : r, i = t.split(",").map(function(s) {
      var a, c = s.trim().split(/\s+/), l = c[0] || "", d = ((a = l.match(/^\w+/)) === null || a === void 0 ? void 0 : a[0]) || "";
      return l = "".concat(d).concat(o).concat(l.slice(d.length)), [l].concat(Wt(c.slice(1))).join(" ");
    });
    return i.join(",");
  }
  var Hx = function t(n) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
      root: !0,
      parentSelectors: []
    }, o = r.root, i = r.injectHash, s = r.parentSelectors, a = e.hashId, c = e.layer, l = e.path, d = e.hashPriority, f = e.transformers, u = f === void 0 ? [] : f, v = e.linters, g = v === void 0 ? [] : v, h = "", x = {};
    function w(A) {
      var b = A.getName(a);
      if (!x[b]) {
        var O = t(A.style, e, {
          root: !1,
          parentSelectors: s
        }), C = ue(O, 1), L = C[0];
        x[b] = "@keyframes ".concat(A.getName(a)).concat(L);
      }
    }
    function y(A) {
      var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
      return A.forEach(function(O) {
        Array.isArray(O) ? y(O, b) : O && b.push(O);
      }), b;
    }
    var m = y(Array.isArray(n) ? n : [n]);
    return m.forEach(function(A) {
      var b = typeof A == "string" && !o ? {} : A;
      if (typeof b == "string")
        h += "".concat(b, `
`);
      else if (b._keyframe)
        w(b);
      else {
        var O = u.reduce(function(C, L) {
          var F;
          return (L == null || (F = L.visit) === null || F === void 0 ? void 0 : F.call(L, C)) || C;
        }, b);
        Object.keys(O).forEach(function(C) {
          var L = O[C];
          if (_e(L) === "object" && L && (C !== "animationName" || !L._keyframe) && !Vx(L)) {
            var F = !1, Y = C.trim(), oe = !1;
            (o || i) && a ? Y.startsWith("@") ? F = !0 : Y === "&" ? Y = cc("", a, d) : Y = cc(C, a, d) : o && !a && (Y === "&" || Y === "") && (Y = "", oe = !0);
            var G = t(L, e, {
              root: oe,
              injectHash: F,
              parentSelectors: [].concat(Wt(s), [Y])
            }), B = ue(G, 2), W = B[0], H = B[1];
            x = V(V({}, x), H), h += "".concat(Y).concat(W);
          } else {
            let Q = function(ee, ae) {
              process.env.NODE_ENV !== "production" && (_e(L) !== "object" || !(L != null && L[Su])) && [Mx, Dx].concat(Wt(g)).forEach(function(ne) {
                return ne(ee, ae, {
                  path: l,
                  hashId: a,
                  parentSelectors: s
                });
              });
              var ie = ee.replace(/[A-Z]/g, function(ne) {
                return "-".concat(ne.toLowerCase());
              }), K = ae;
              !vx[ee] && typeof K == "number" && K !== 0 && (K = "".concat(K, "px")), ee === "animationName" && ae !== null && ae !== void 0 && ae._keyframe && (w(ae), K = ae.getName(a)), h += "".concat(ie, ":").concat(K, ";");
            };
            var te, Z = (te = L == null ? void 0 : L.value) !== null && te !== void 0 ? te : L;
            _e(L) === "object" && L !== null && L !== void 0 && L[wu] && Array.isArray(Z) ? Z.forEach(function(ee) {
              Q(C, ee);
            }) : Q(C, Z);
          }
        });
      }
    }), o ? c && (h && (h = "@layer ".concat(c.name, " {").concat(h, "}")), c.dependencies && (x["@layer ".concat(c.name)] = c.dependencies.map(function(A) {
      return "@layer ".concat(A, ", ").concat(c.name, ";");
    }).join(`
`))) : h = "{".concat(h, "}"), [h, x];
  };
  function Eu(t, n) {
    return pr("".concat(t.join("%")).concat(n));
  }
  function Ux() {
    return null;
  }
  var _u = "style";
  function is(t, n) {
    var e = t.token, r = t.path, o = t.hashId, i = t.layer, s = t.nonce, a = t.clientOnly, c = t.order, l = c === void 0 ? 0 : c, d = _.useContext(Cr), f = d.autoClear, u = d.mock, v = d.defaultCache, g = d.hashPriority, h = d.container, x = d.ssrInline, w = d.transformers, y = d.linters, m = d.cache, A = d.layer, b = e._tokenKey, O = [b];
    A && O.push("layer"), O.push.apply(O, Wt(r));
    var C = ts;
    process.env.NODE_ENV !== "production" && u !== void 0 && (C = u === "client");
    var L = ra(
      _u,
      O,
      // Create cache if needed
      function() {
        var B = O.join("|");
        if (Fx(B)) {
          var W = zx(B), H = ue(W, 2), te = H[0], Z = H[1];
          if (te)
            return [te, b, Z, {}, a, l];
        }
        var Q = n(), ee = Hx(Q, {
          hashId: o,
          hashPriority: g,
          layer: A ? i : void 0,
          path: r.join("-"),
          transformers: w,
          linters: y
        }), ae = ue(ee, 2), ie = ae[0], K = ae[1], ne = ao(ie), xe = Eu(O, ne);
        return [ne, b, xe, K, a, l];
      },
      // Remove cache if no need
      function(B, W) {
        var H = ue(B, 3), te = H[2];
        (W || f) && ts && au(te, {
          mark: Et
        });
      },
      // Effect: Inject style here
      function(B) {
        var W = ue(B, 4), H = W[0];
        W[1];
        var te = W[2], Z = W[3];
        if (C && H !== bu) {
          var Q = {
            mark: Et,
            prepend: A ? !1 : "queue",
            attachTo: h,
            priority: l
          }, ee = typeof s == "function" ? s() : s;
          ee && (Q.csp = {
            nonce: ee
          });
          var ae = [], ie = [];
          Object.keys(Z).forEach(function(ne) {
            ne.startsWith("@layer") ? ae.push(ne) : ie.push(ne);
          }), ae.forEach(function(ne) {
            yn(ao(Z[ne]), "_layer-".concat(ne), V(V({}, Q), {}, {
              prepend: !0
            }));
          });
          var K = yn(H, te, Q);
          K[Jt] = m.instanceId, K.setAttribute(zn, b), process.env.NODE_ENV !== "production" && K.setAttribute(Wh, O.join("|")), ie.forEach(function(ne) {
            yn(ao(Z[ne]), "_effect-".concat(ne), Q);
          });
        }
      }
    ), F = ue(L, 3), Y = F[0], oe = F[1], G = F[2];
    return function(B) {
      var W;
      if (!x || C || !v)
        W = /* @__PURE__ */ _.createElement(Ux, null);
      else {
        var H;
        W = /* @__PURE__ */ _.createElement("style", Bt({}, (H = {}, q(H, zn, oe), q(H, Et, G), H), {
          dangerouslySetInnerHTML: {
            __html: Y
          }
        }));
      }
      return /* @__PURE__ */ _.createElement(_.Fragment, null, W, B);
    };
  }
  var qx = function(n, e, r) {
    var o = ue(n, 6), i = o[0], s = o[1], a = o[2], c = o[3], l = o[4], d = o[5], f = r || {}, u = f.plain;
    if (l)
      return null;
    var v = i, g = {
      "data-rc-order": "prependQueue",
      "data-rc-priority": "".concat(d)
    };
    return v = Eo(i, s, a, g, u), c && Object.keys(c).forEach(function(h) {
      if (!e[h]) {
        e[h] = !0;
        var x = ao(c[h]), w = Eo(x, s, "_effect-".concat(h), g, u);
        h.startsWith("@layer") ? v = w + v : v += w;
      }
    }), [d, a, v];
  }, Cu = "cssVar", Wx = function(n, e) {
    var r = n.key, o = n.prefix, i = n.unitless, s = n.ignore, a = n.token, c = n.scope, l = c === void 0 ? "" : c, d = tn(Cr), f = d.cache.instanceId, u = d.container, v = a._tokenKey, g = [].concat(Wt(n.path), [r, l, v]), h = ra(Cu, g, function() {
      var x = e(), w = lu(x, r, {
        prefix: o,
        unitless: i,
        ignore: s,
        scope: l
      }), y = ue(w, 2), m = y[0], A = y[1], b = Eu(g, A);
      return [m, A, b, r];
    }, function(x) {
      var w = ue(x, 3), y = w[2];
      ts && au(y, {
        mark: Et
      });
    }, function(x) {
      var w = ue(x, 3), y = w[1], m = w[2];
      if (y) {
        var A = yn(y, m, {
          mark: Et,
          prepend: "queue",
          attachTo: u,
          priority: -999
        });
        A[Jt] = f, A.setAttribute(zn, r);
      }
    });
    return h;
  }, Xx = function(n, e, r) {
    var o = ue(n, 4), i = o[1], s = o[2], a = o[3], c = r || {}, l = c.plain;
    if (!i)
      return null;
    var d = -999, f = {
      "data-rc-order": "prependQueue",
      "data-rc-priority": "".concat(d)
    }, u = Eo(i, a, s, f, l);
    return [d, s, u];
  }, or;
  or = {}, q(or, _u, qx), q(or, fu, gx), q(or, Cu, Xx);
  var Au = /* @__PURE__ */ function() {
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
  var sa = /* @__PURE__ */ zs({});
  function Yx(t) {
    return nu(t) || Jl(t) || ea(t) || ru();
  }
  function ss(t, n) {
    for (var e = t, r = 0; r < n.length; r += 1) {
      if (e == null)
        return;
      e = e[n[r]];
    }
    return e;
  }
  function Tu(t, n, e, r) {
    if (!n.length)
      return e;
    var o = Yx(n), i = o[0], s = o.slice(1), a;
    return !t && typeof i == "number" ? a = [] : Array.isArray(t) ? a = Wt(t) : a = V({}, t), r && e === void 0 && s.length === 1 ? delete a[i][s[0]] : a[i] = Tu(a[i], s, e, r), a;
  }
  function _i(t, n, e) {
    var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
    return n.length && r && e === void 0 && !ss(t, n.slice(0, -1)) ? t : Tu(t, n, e, r);
  }
  function $x(t) {
    return _e(t) === "object" && t !== null && Object.getPrototypeOf(t) === Object.prototype;
  }
  function lc(t) {
    return Array.isArray(t) ? [] : {};
  }
  var Gx = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
  function Kx() {
    for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++)
      n[e] = arguments[e];
    var r = lc(n[0]);
    return n.forEach(function(o) {
      function i(s, a) {
        var c = new Set(a), l = ss(o, s), d = Array.isArray(l);
        if (d || $x(l)) {
          if (!c.has(l)) {
            c.add(l);
            var f = ss(r, s);
            d ? r = _i(r, s, []) : (!f || _e(f) !== "object") && (r = _i(r, s, lc(l))), Gx(l).forEach(function(u) {
              i([].concat(Wt(s), [u]), c);
            });
          }
        } else
          r = _i(r, s, l);
      }
      i([]);
    }), r;
  }
  function Ou() {
  }
  let Ht = null;
  function Zx() {
    Ht = null, Wl();
  }
  let aa = Ou;
  process.env.NODE_ENV !== "production" && (aa = (t, n, e) => {
    rn(t, `[antd: ${n}] ${e}`), process.env.NODE_ENV === "test" && Zx();
  });
  const Ru = /* @__PURE__ */ _.createContext({}), Gn = process.env.NODE_ENV !== "production" ? (t) => {
    const {
      strict: n
    } = _.useContext(Ru), e = (r, o, i) => {
      if (!r)
        if (n === !1 && o === "deprecated") {
          const s = Ht;
          Ht || (Ht = {}), Ht[t] = Ht[t] || [], Ht[t].includes(i || "") || Ht[t].push(i || ""), s || console.warn("[antd] There exists deprecated usage in your code:", Ht);
        } else
          process.env.NODE_ENV !== "production" && aa(r, t, i);
    };
    return e.deprecated = (r, o, i, s) => {
      e(r, "deprecated", `\`${o}\` is deprecated. Please use \`${i}\` instead.${s ? ` ${s}` : ""}`);
    }, e;
  } : () => {
    const t = () => {
    };
    return t.deprecated = Ou, t;
  }, Qo = aa, Jx = /* @__PURE__ */ zs(void 0), ft = "${label} is not a valid ${type}", ei = {
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
          string: ft,
          method: ft,
          array: ft,
          object: ft,
          number: ft,
          date: ft,
          boolean: ft,
          integer: ft,
          float: ft,
          regexp: ft,
          email: ft,
          url: ft,
          hex: ft
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
  Object.assign({}, ei.Modal);
  let co = [];
  const uc = () => co.reduce((t, n) => Object.assign(Object.assign({}, t), n), ei.Modal);
  function Qx(t) {
    if (t) {
      const n = Object.assign({}, t);
      return co.push(n), uc(), () => {
        co = co.filter((e) => e !== n), uc();
      };
    }
    Object.assign({}, ei.Modal);
  }
  const ku = /* @__PURE__ */ zs(void 0), Pu = "internalMark", Iu = (t) => {
    const {
      locale: n = {},
      children: e,
      _ANT_MARK__: r
    } = t;
    if (process.env.NODE_ENV !== "production") {
      const i = Gn("LocaleProvider");
      process.env.NODE_ENV !== "production" && i(r === Pu, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
    }
    _.useEffect(() => Qx(n == null ? void 0 : n.Modal), [n]);
    const o = _.useMemo(() => Object.assign(Object.assign({}, n), {
      exist: !0
    }), [n]);
    return /* @__PURE__ */ _.createElement(ku.Provider, {
      value: o
    }, e);
  };
  process.env.NODE_ENV !== "production" && (Iu.displayName = "LocaleProvider");
  const Nu = {
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
  }, vr = Object.assign(Object.assign({}, Nu), {
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
  function Ci(t, n) {
    const e = t.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], r = e.map((o) => parseFloat(o));
    for (let o = 0; o < 3; o += 1)
      r[o] = n(r[o] || 0, e[o] || "", o);
    return e[3] ? r[3] = e[3].includes("%") ? r[3] / 100 : r[3] : r[3] = 1, r;
  }
  const fc = (t, n, e) => e === 0 ? t : t / 100;
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
        const u = $e(r * 255);
        this.r = u, this.g = u, this.b = u;
      }
      let i = 0, s = 0, a = 0;
      const c = n / 60, l = (1 - Math.abs(2 * r - 1)) * e, d = l * (1 - Math.abs(c % 2 - 1));
      c >= 0 && c < 1 ? (i = l, s = d) : c >= 1 && c < 2 ? (i = d, s = l) : c >= 2 && c < 3 ? (s = l, a = d) : c >= 3 && c < 4 ? (s = d, a = l) : c >= 4 && c < 5 ? (i = d, a = l) : c >= 5 && c < 6 && (i = l, a = d);
      const f = r - l / 2;
      this.r = $e((i + f) * 255), this.g = $e((s + f) * 255), this.b = $e((a + f) * 255);
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
      const s = n / 60, a = Math.floor(s), c = s - a, l = $e(r * (1 - e) * 255), d = $e(r * (1 - e * c) * 255), f = $e(r * (1 - e * (1 - c)) * 255);
      switch (a) {
        case 0:
          this.g = f, this.b = l;
          break;
        case 1:
          this.r = d, this.b = l;
          break;
        case 2:
          this.r = l, this.b = f;
          break;
        case 3:
          this.r = l, this.g = d;
          break;
        case 4:
          this.r = f, this.g = l;
          break;
        case 5:
        default:
          this.g = l, this.b = d;
          break;
      }
    }
    fromHsvString(n) {
      const e = Ci(n, fc);
      this.fromHsv({
        h: e[0],
        s: e[1],
        v: e[2],
        a: e[3]
      });
    }
    fromHslString(n) {
      const e = Ci(n, fc);
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
        o.includes("%") ? $e(r / 100 * 255) : r
      ));
      this.r = e[0], this.g = e[1], this.b = e[2], this.a = e[3];
    }
  }
  var zr = 2, dc = 0.16, ep = 0.05, tp = 0.05, np = 0.15, ju = 5, Lu = 4, rp = [{
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
  function hc(t, n, e) {
    var r;
    return Math.round(t.h) >= 60 && Math.round(t.h) <= 240 ? r = e ? Math.round(t.h) - zr * n : Math.round(t.h) + zr * n : r = e ? Math.round(t.h) + zr * n : Math.round(t.h) - zr * n, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
  }
  function xc(t, n, e) {
    if (t.h === 0 && t.s === 0)
      return t.s;
    var r;
    return e ? r = t.s - dc * n : n === Lu ? r = t.s + dc : r = t.s + ep * n, r > 1 && (r = 1), e && n === ju && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Math.round(r * 100) / 100;
  }
  function pc(t, n, e) {
    var r;
    return e ? r = t.v + tp * n : r = t.v - np * n, r = Math.max(0, Math.min(1, r)), Math.round(r * 100) / 100;
  }
  function br(t) {
    for (var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = [], r = new Be(t), o = r.toHsv(), i = ju; i > 0; i -= 1) {
      var s = new Be({
        h: hc(o, i, !0),
        s: xc(o, i, !0),
        v: pc(o, i, !0)
      });
      e.push(s);
    }
    e.push(r);
    for (var a = 1; a <= Lu; a += 1) {
      var c = new Be({
        h: hc(o, a),
        s: xc(o, a),
        v: pc(o, a)
      });
      e.push(c);
    }
    return n.theme === "dark" ? rp.map(function(l) {
      var d = l.index, f = l.amount;
      return new Be(n.backgroundColor || "#141414").mix(e[d], f).toHexString();
    }) : e.map(function(l) {
      return l.toHexString();
    });
  }
  var Ai = {
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
  }, as = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
  as.primary = as[5];
  var cs = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
  cs.primary = cs[5];
  var ls = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
  ls.primary = ls[5];
  var us = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
  us.primary = us[5];
  var fs = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
  fs.primary = fs[5];
  var ds = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
  ds.primary = ds[5];
  var hs = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
  hs.primary = hs[5];
  var xs = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
  xs.primary = xs[5];
  var _o = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
  _o.primary = _o[5];
  var ps = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
  ps.primary = ps[5];
  var ms = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
  ms.primary = ms[5];
  var gs = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
  gs.primary = gs[5];
  var vs = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
  vs.primary = vs[5];
  var Ti = {
    red: as,
    volcano: cs,
    orange: ls,
    gold: us,
    yellow: fs,
    lime: ds,
    green: hs,
    cyan: xs,
    blue: _o,
    geekblue: ps,
    purple: ms,
    magenta: gs,
    grey: vs
  };
  function op(t, n) {
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
      colorBgBase: l,
      colorTextBase: d
    } = t, f = e(c), u = e(o), v = e(i), g = e(s), h = e(a), x = r(l, d), w = t.colorLink || t.colorInfo, y = e(w), m = new Be(g[1]).mix(new Be(g[3]), 50).toHexString();
    return Object.assign(Object.assign({}, x), {
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
      colorLinkHover: y[4],
      colorLink: y[6],
      colorLinkActive: y[7],
      colorBgMask: new Be("#000").setA(0.45).toRgbString(),
      colorWhite: "#fff"
    });
  }
  const ip = (t) => {
    let n = t, e = t, r = t, o = t;
    return t < 6 && t >= 5 ? n = t + 1 : t < 16 && t >= 6 ? n = t + 2 : t >= 16 && (n = 16), t < 7 && t >= 5 ? e = 4 : t < 8 && t >= 7 ? e = 5 : t < 14 && t >= 8 ? e = 6 : t < 16 && t >= 14 ? e = 7 : t >= 16 && (e = 8), t < 6 && t >= 2 ? r = 1 : t >= 6 && (r = 2), t > 4 && t < 8 ? o = 4 : t >= 8 && (o = 6), {
      borderRadius: t,
      borderRadiusXS: r,
      borderRadiusSM: e,
      borderRadiusLG: n,
      borderRadiusOuter: o
    };
  };
  function sp(t) {
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
    }, ip(r));
  }
  const ap = (t) => {
    const {
      controlHeight: n
    } = t;
    return {
      controlHeightSM: n * 0.75,
      controlHeightXS: n * 0.5,
      controlHeightLG: n * 1.25
    };
  };
  function cp(t) {
    return (t + 8) / t;
  }
  function lp(t) {
    const n = Array.from({
      length: 10
    }).map((e, r) => {
      const o = r - 1, i = t * Math.pow(Math.E, o / 5), s = r > 1 ? Math.floor(i) : Math.ceil(i);
      return Math.floor(s / 2) * 2;
    });
    return n[1] = t, n.map((e) => ({
      size: e,
      lineHeight: cp(e)
    }));
  }
  const up = (t) => {
    const n = lp(t), e = n.map((d) => d.size), r = n.map((d) => d.lineHeight), o = e[1], i = e[0], s = e[2], a = r[1], c = r[0], l = r[2];
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
  function fp(t) {
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
  const pt = (t, n) => new Be(t).setA(n).toRgbString(), sr = (t, n) => new Be(t).darken(n).toHexString(), dp = (t) => {
    const n = br(t);
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
  }, hp = (t, n) => {
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
  function xp(t) {
    Ai.pink = Ai.magenta, Ti.pink = Ti.magenta;
    const n = Object.keys(Nu).map((e) => {
      const r = t[e] === Ai[e] ? Ti[e] : br(t[e]);
      return Array.from({
        length: 10
      }, () => 1).reduce((o, i, s) => (o[`${e}-${s + 1}`] = r[s], o[`${e}${s + 1}`] = r[s], o), {});
    }).reduce((e, r) => (e = Object.assign(Object.assign({}, e), r), e), {});
    return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, t), n), op(t, {
      generateColorPalettes: dp,
      generateNeutralColorPalettes: hp
    })), up(t.fontSize)), fp(t)), ap(t)), sp(t));
  }
  const Mu = es(xp), bs = {
    token: vr,
    override: {
      override: vr
    },
    hashed: !0
  }, Du = /* @__PURE__ */ Fe.createContext(bs), ys = "ant", ca = "anticon", pp = (t, n) => n || (t ? `${ys}-${t}` : ys), nn = /* @__PURE__ */ _.createContext({
    // We provide a default function for Context without provider
    getPrefixCls: pp,
    iconPrefixCls: ca
  }), {
    Consumer: Rv
  } = nn, mc = {};
  function Bu(t) {
    const n = _.useContext(nn), {
      getPrefixCls: e,
      direction: r,
      getPopupContainer: o
    } = n, i = n[t];
    return Object.assign(Object.assign({
      classNames: mc,
      styles: mc
    }, i), {
      getPrefixCls: e,
      direction: r,
      getPopupContainer: o
    });
  }
  const mp = `-ant-${Date.now()}-${Math.random()}`;
  function gp(t, n) {
    const e = {}, r = (s, a) => {
      let c = s.clone();
      return c = (a == null ? void 0 : a(c)) || c, c.toRgbString();
    }, o = (s, a) => {
      const c = new Be(s), l = br(c.toRgbString());
      e[`${a}-color`] = r(c), e[`${a}-color-disabled`] = l[1], e[`${a}-color-hover`] = l[4], e[`${a}-color-active`] = l[6], e[`${a}-color-outline`] = c.clone().setA(0.2).toRgbString(), e[`${a}-color-deprecated-bg`] = l[0], e[`${a}-color-deprecated-border`] = l[2];
    };
    if (n.primaryColor) {
      o(n.primaryColor, "primary");
      const s = new Be(n.primaryColor), a = br(s.toRgbString());
      a.forEach((l, d) => {
        e[`primary-${d + 1}`] = l;
      }), e["primary-color-deprecated-l-35"] = r(s, (l) => l.lighten(35)), e["primary-color-deprecated-l-20"] = r(s, (l) => l.lighten(20)), e["primary-color-deprecated-t-20"] = r(s, (l) => l.tint(20)), e["primary-color-deprecated-t-50"] = r(s, (l) => l.tint(50)), e["primary-color-deprecated-f-12"] = r(s, (l) => l.setA(l.a * 0.12));
      const c = new Be(a[0]);
      e["primary-color-active-deprecated-f-30"] = r(c, (l) => l.setA(l.a * 0.3)), e["primary-color-active-deprecated-d-02"] = r(c, (l) => l.darken(2));
    }
    return n.successColor && o(n.successColor, "success"), n.warningColor && o(n.warningColor, "warning"), n.errorColor && o(n.errorColor, "error"), n.infoColor && o(n.infoColor, "info"), `
  :root {
    ${Object.keys(e).map((s) => `--${t}-${s}: ${e[s]};`).join(`
`)}
  }
  `.trim();
  }
  function vp(t, n) {
    const e = gp(t, n);
    Xt() ? yn(e, `${mp}-dynamic-theme`) : process.env.NODE_ENV !== "production" && Qo(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
  }
  const Ss = /* @__PURE__ */ _.createContext(!1), bp = (t) => {
    let {
      children: n,
      disabled: e
    } = t;
    const r = _.useContext(Ss);
    return /* @__PURE__ */ _.createElement(Ss.Provider, {
      value: e ?? r
    }, n);
  }, yr = /* @__PURE__ */ _.createContext(void 0), yp = (t) => {
    let {
      children: n,
      size: e
    } = t;
    const r = _.useContext(yr);
    return /* @__PURE__ */ _.createElement(yr.Provider, {
      value: e || r
    }, n);
  };
  function Sp() {
    const t = tn(Ss), n = tn(yr);
    return {
      componentDisabled: t,
      componentSize: n
    };
  }
  var Fu = /* @__PURE__ */ Tt(function t() {
    At(this, t);
  }), zu = "CALC_UNIT", wp = new RegExp(zu, "g");
  function Oi(t) {
    return typeof t == "number" ? "".concat(t).concat(zu) : t;
  }
  var Ep = /* @__PURE__ */ function(t) {
    _r(e, t);
    var n = $o(e);
    function e(r, o) {
      var i;
      At(this, e), i = n.call(this), q(bn(i), "result", ""), q(bn(i), "unitlessCssVar", void 0), q(bn(i), "lowPriority", void 0);
      var s = _e(r);
      return i.unitlessCssVar = o, r instanceof e ? i.result = "(".concat(r.result, ")") : s === "number" ? i.result = Oi(r) : s === "string" && (i.result = r), i;
    }
    return Tt(e, [{
      key: "add",
      value: function(o) {
        return o instanceof e ? this.result = "".concat(this.result, " + ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " + ").concat(Oi(o))), this.lowPriority = !0, this;
      }
    }, {
      key: "sub",
      value: function(o) {
        return o instanceof e ? this.result = "".concat(this.result, " - ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " - ").concat(Oi(o))), this.lowPriority = !0, this;
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
        }) && (c = !1), this.result = this.result.replace(wp, c ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
      }
    }]), e;
  }(Fu), _p = /* @__PURE__ */ function(t) {
    _r(e, t);
    var n = $o(e);
    function e(r) {
      var o;
      return At(this, e), o = n.call(this), q(bn(o), "result", 0), r instanceof e ? o.result = r.result : typeof r == "number" && (o.result = r), o;
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
  }(Fu), Cp = function(n, e) {
    var r = n === "css" ? Ep : _p;
    return function(o) {
      return new r(o, e);
    };
  }, gc = function(n, e) {
    return "".concat([e, n.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
  };
  function ws(t) {
    var n = _.useRef();
    n.current = t;
    var e = _.useCallback(function() {
      for (var r, o = arguments.length, i = new Array(o), s = 0; s < o; s++)
        i[s] = arguments[s];
      return (r = n.current) === null || r === void 0 ? void 0 : r.call.apply(r, [n].concat(i));
    }, []);
    return e;
  }
  function Es(t) {
    var n = _.useRef(!1), e = _.useState(t), r = ue(e, 2), o = r[0], i = r[1];
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
  function vc(t, n, e, r) {
    var o = V({}, n[t]);
    if (r != null && r.deprecatedTokens) {
      var i = r.deprecatedTokens;
      i.forEach(function(a) {
        var c = ue(a, 2), l = c[0], d = c[1];
        if (process.env.NODE_ENV !== "production" && rn(!(o != null && o[l]), "Component Token `".concat(String(l), "` of ").concat(String(t), " is deprecated. Please use `").concat(String(d), "` instead.")), o != null && o[l] || o != null && o[d]) {
          var f;
          (f = o[d]) !== null && f !== void 0 || (o[d] = o == null ? void 0 : o[l]);
        }
      });
    }
    var s = V(V({}, e), o);
    return Object.keys(s).forEach(function(a) {
      s[a] === n[a] && delete s[a];
    }), s;
  }
  var Vu = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", _s = !0;
  function ti() {
    for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++)
      n[e] = arguments[e];
    if (!Vu)
      return Object.assign.apply(Object, [{}].concat(n));
    _s = !1;
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
    }), _s = !0, r;
  }
  var bc = {};
  function Ap() {
  }
  var Tp = function(n) {
    var e, r = n, o = Ap;
    return Vu && typeof Proxy < "u" && (e = /* @__PURE__ */ new Set(), r = new Proxy(n, {
      get: function(s, a) {
        if (_s) {
          var c;
          (c = e) === null || c === void 0 || c.add(a);
        }
        return s[a];
      }
    }), o = function(s, a) {
      var c;
      bc[s] = {
        global: Array.from(e),
        component: V(V({}, (c = bc[s]) === null || c === void 0 ? void 0 : c.component), a)
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
      return e(ti(n, (r = n[t]) !== null && r !== void 0 ? r : {}));
    }
    return e ?? {};
  }
  function Op(t) {
    return t === "js" ? {
      max: Math.max,
      min: Math.min
    } : {
      max: function() {
        for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++)
          r[o] = arguments[o];
        return "max(".concat(r.map(function(i) {
          return wo(i);
        }).join(","), ")");
      },
      min: function() {
        for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++)
          r[o] = arguments[o];
        return "min(".concat(r.map(function(i) {
          return wo(i);
        }).join(","), ")");
      }
    };
  }
  var Rp = 1e3 * 60 * 10, kp = /* @__PURE__ */ function() {
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
            r - o > Rp && (e.map.delete(i), e.lastAccessBeat.delete(i));
          }), this.accessBeat = 0;
        }
      }
    }]), t;
  }(), Sc = new kp();
  function Pp(t, n) {
    return Fe.useMemo(function() {
      var e = Sc.get(n);
      if (e)
        return e;
      var r = t();
      return Sc.set(n, r), r;
    }, n);
  }
  var Ip = function() {
    return {};
  };
  function Np(t) {
    var n = t.useCSP, e = n === void 0 ? Ip : n, r = t.useToken, o = t.usePrefix, i = t.getResetStyles, s = t.getCommonStyle, a = t.getCompUnitless;
    function c(u, v, g, h) {
      var x = Array.isArray(u) ? u[0] : u;
      function w(L) {
        return "".concat(String(x)).concat(L.slice(0, 1).toUpperCase()).concat(L.slice(1));
      }
      var y = (h == null ? void 0 : h.unitless) || {}, m = typeof a == "function" ? a(u) : {}, A = V(V({}, m), {}, q({}, w("zIndexPopup"), !0));
      Object.keys(y).forEach(function(L) {
        A[w(L)] = y[L];
      });
      var b = V(V({}, h), {}, {
        unitless: A,
        prefixToken: w
      }), O = d(u, v, g, b), C = l(x, g, b);
      return function(L) {
        var F = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : L, Y = O(L, F), oe = ue(Y, 2), G = oe[1], B = C(F), W = ue(B, 2), H = W[0], te = W[1];
        return [H, G, te];
      };
    }
    function l(u, v, g) {
      var h = g.unitless, x = g.injectStyle, w = x === void 0 ? !0 : x, y = g.prefixToken, m = g.ignore, A = function(C) {
        var L = C.rootCls, F = C.cssVar, Y = F === void 0 ? {} : F, oe = r(), G = oe.realToken;
        return Wx({
          path: [u],
          prefix: Y.prefix,
          key: Y.key,
          unitless: h,
          ignore: m,
          token: G,
          scope: L
        }, function() {
          var B = yc(u, G, v), W = vc(u, G, B, {
            deprecatedTokens: g == null ? void 0 : g.deprecatedTokens
          });
          return Object.keys(B).forEach(function(H) {
            W[y(H)] = W[H], delete W[H];
          }), W;
        }), null;
      }, b = function(C) {
        var L = r(), F = L.cssVar;
        return [function(Y) {
          return w && F ? /* @__PURE__ */ Fe.createElement(Fe.Fragment, null, /* @__PURE__ */ Fe.createElement(A, {
            rootCls: C,
            cssVar: F,
            component: u
          }), Y) : Y;
        }, F == null ? void 0 : F.key];
      };
      return b;
    }
    function d(u, v, g) {
      var h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, x = Array.isArray(u) ? u : [u, u], w = ue(x, 1), y = w[0], m = x.join("-"), A = t.layer || {
        name: "antd"
      };
      return function(b) {
        var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : b, C = r(), L = C.theme, F = C.realToken, Y = C.hashId, oe = C.token, G = C.cssVar, B = o(), W = B.rootPrefixCls, H = B.iconPrefixCls, te = e(), Z = G ? "css" : "js", Q = Pp(function() {
          var xe = /* @__PURE__ */ new Set();
          return G && Object.keys(h.unitless || {}).forEach(function(de) {
            xe.add(ro(de, G.prefix)), xe.add(ro(de, gc(y, G.prefix)));
          }), Cp(Z, xe);
        }, [Z, y, G == null ? void 0 : G.prefix]), ee = Op(Z), ae = ee.max, ie = ee.min, K = {
          theme: L,
          token: oe,
          hashId: Y,
          nonce: function() {
            return te.nonce;
          },
          clientOnly: h.clientOnly,
          layer: A,
          // antd is always at top of styles
          order: h.order || -999
        };
        typeof i == "function" && is(V(V({}, K), {}, {
          clientOnly: !1,
          path: ["Shared", W]
        }), function() {
          return i(oe, {
            prefix: {
              rootPrefixCls: W,
              iconPrefixCls: H
            },
            csp: te
          });
        });
        var ne = is(V(V({}, K), {}, {
          path: [m, b, H]
        }), function() {
          if (h.injectStyle === !1)
            return [];
          var xe = Tp(oe), de = xe.token, me = xe.flush, R = yc(y, F, g), z = ".".concat(b), k = vc(y, F, R, {
            deprecatedTokens: h.deprecatedTokens
          });
          G && R && _e(R) === "object" && Object.keys(R).forEach(function(ke) {
            R[ke] = "var(".concat(ro(ke, gc(y, G.prefix)), ")");
          });
          var j = ti(de, {
            componentCls: z,
            prefixCls: b,
            iconCls: ".".concat(H),
            antCls: ".".concat(W),
            calc: Q,
            // @ts-ignore
            max: ae,
            // @ts-ignore
            min: ie
          }, G ? R : k), E = v(j, {
            hashId: Y,
            prefixCls: b,
            rootPrefixCls: W,
            iconPrefixCls: H
          });
          me(y, k);
          var M = typeof s == "function" ? s(j, b, O, h.resetFont) : null;
          return [h.resetStyle === !1 ? null : M, E];
        });
        return [ne, Y];
      };
    }
    function f(u, v, g) {
      var h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, x = d(u, v, g, V({
        resetStyle: !1,
        // Sub Style should default after root one
        order: -998
      }, h)), w = function(m) {
        var A = m.prefixCls, b = m.rootCls, O = b === void 0 ? A : b;
        return x(A, O), null;
      };
      return process.env.NODE_ENV !== "production" && (w.displayName = "SubStyle_".concat(String(Array.isArray(u) ? u.join(".") : u))), w;
    }
    return {
      genStyleHooks: c,
      genSubStyleComponent: f,
      genComponentStyleHook: d
    };
  }
  const jp = "5.24.6";
  function Ri(t) {
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
    for (let l = 0.01; l <= 1; l += 0.01) {
      const d = Math.round((e - s * (1 - l)) / l), f = Math.round((r - a * (1 - l)) / l), u = Math.round((o - c * (1 - l)) / l);
      if (Ri(d) && Ri(f) && Ri(u))
        return new Be({
          r: d,
          g: f,
          b: u,
          a: Math.round(l * 100) / 100
        }).toRgbString();
    }
    return new Be({
      r: e,
      g: r,
      b: o,
      a: 1
    }).toRgbString();
  }
  var Lp = function(t, n) {
    var e = {};
    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && n.indexOf(r) < 0 && (e[r] = t[r]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(t); o < r.length; o++)
      n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (e[r[o]] = t[r[o]]);
    return e;
  };
  function Hu(t) {
    const {
      override: n
    } = t, e = Lp(t, ["override"]), r = Object.assign({}, n);
    Object.keys(vr).forEach((u) => {
      delete r[u];
    });
    const o = Object.assign(Object.assign({}, e), r), i = 480, s = 576, a = 768, c = 992, l = 1200, d = 1600;
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
      screenXLMax: d - 1,
      screenXXL: d,
      screenXXLMin: d,
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
  var wc = function(t, n) {
    var e = {};
    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && n.indexOf(r) < 0 && (e[r] = t[r]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(t); o < r.length; o++)
      n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (e[r[o]] = t[r[o]]);
    return e;
  };
  const Uu = {
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
  }, Mp = {
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
  }, Dp = {
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
  }, qu = (t, n, e) => {
    const r = e.getDerivativeToken(t), {
      override: o
    } = n, i = wc(n, ["override"]);
    let s = Object.assign(Object.assign({}, r), {
      override: o
    });
    return s = Hu(s), i && Object.entries(i).forEach((a) => {
      let [c, l] = a;
      const {
        theme: d
      } = l, f = wc(l, ["theme"]);
      let u = f;
      d && (u = qu(Object.assign(Object.assign({}, s), f), {
        override: f
      }, d)), s[c] = u;
    }), s;
  };
  function la() {
    const {
      token: t,
      hashed: n,
      theme: e,
      override: r,
      cssVar: o
    } = Fe.useContext(Du), i = `${jp}-${n || ""}`, s = e || Mu, [a, c, l] = mx(s, [vr, t], {
      salt: i,
      override: r,
      getComputedToken: qu,
      // formatToken will not be consumed after 1.15.0 with getComputedToken.
      // But token will break if @ant-design/cssinjs is under 1.15.0 without it
      formatToken: Hu,
      cssVar: o && {
        prefix: o.prefix,
        key: o.key,
        unitless: Uu,
        ignore: Mp,
        preserve: Dp
      }
    });
    return [s, l, n ? c : "", a, o];
  }
  const Wu = function(t) {
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
  }, Bp = () => ({
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
  }), Fp = (t) => ({
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
  }), zp = (t, n, e, r) => {
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
  }, Xu = (t) => ({
    [`.${t}`]: Object.assign(Object.assign({}, Bp()), {
      [`.${t} .${t}-icon`]: {
        display: "block"
      }
    })
  }), {
    genStyleHooks: ua
  } = Np({
    usePrefix: () => {
      const {
        getPrefixCls: t,
        iconPrefixCls: n
      } = tn(nn);
      return {
        rootPrefixCls: t(),
        iconPrefixCls: n
      };
    },
    useToken: () => {
      const [t, n, e, r, o] = la();
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
      } = tn(nn);
      return t ?? {};
    },
    getResetStyles: (t, n) => {
      var e;
      const r = Fp(t);
      return [r, {
        "&": r
      }, Xu((e = n == null ? void 0 : n.prefix.iconPrefixCls) !== null && e !== void 0 ? e : ca)];
    },
    getCommonStyle: zp,
    getCompUnitless: () => Uu
  }), Vp = (t, n) => {
    const [e, r] = la();
    return is({
      token: r,
      hashId: "",
      path: ["ant-design-icons", t],
      nonce: () => n == null ? void 0 : n.nonce,
      layer: {
        name: "antd"
      }
    }, () => [Xu(t)]);
  }, Hp = Object.assign({}, _), {
    useId: Ec
  } = Hp, Up = () => "", qp = typeof Ec > "u" ? Up : Ec;
  function Wp(t, n, e) {
    var r, o;
    const i = Gn("ConfigProvider"), s = t || {}, a = s.inherit === !1 || !n ? Object.assign(Object.assign({}, bs), {
      hashed: (r = n == null ? void 0 : n.hashed) !== null && r !== void 0 ? r : bs.hashed,
      cssVar: n == null ? void 0 : n.cssVar
    }) : n, c = qp();
    if (process.env.NODE_ENV !== "production") {
      const l = s.cssVar || a.cssVar, d = !!(typeof s.cssVar == "object" && (!((o = s.cssVar) === null || o === void 0) && o.key) || c);
      process.env.NODE_ENV !== "production" && i(!l || d, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
    }
    return $l(() => {
      var l, d;
      if (!t)
        return n;
      const f = Object.assign({}, a.components);
      Object.keys(t.components || {}).forEach((g) => {
        f[g] = Object.assign(Object.assign({}, f[g]), t.components[g]);
      });
      const u = `css-var-${c.replace(/:/g, "")}`, v = ((l = s.cssVar) !== null && l !== void 0 ? l : a.cssVar) && Object.assign(Object.assign(Object.assign({
        prefix: e == null ? void 0 : e.prefixCls
      }, typeof a.cssVar == "object" ? a.cssVar : {}), typeof s.cssVar == "object" ? s.cssVar : {}), {
        key: typeof s.cssVar == "object" && ((d = s.cssVar) === null || d === void 0 ? void 0 : d.key) || u
      });
      return Object.assign(Object.assign(Object.assign({}, a), s), {
        token: Object.assign(Object.assign({}, a.token), s.token),
        components: f,
        cssVar: v
      });
    }, [s, a], (l, d) => l.some((f, u) => {
      const v = d[u];
      return !Hh(f, v, !0);
    }));
  }
  var Xp = ["children"], Yu = /* @__PURE__ */ _.createContext({});
  function Yp(t) {
    var n = t.children, e = mr(t, Xp);
    return /* @__PURE__ */ _.createElement(Yu.Provider, {
      value: e
    }, n);
  }
  var $p = /* @__PURE__ */ function(t) {
    _r(e, t);
    var n = $o(e);
    function e() {
      return At(this, e), n.apply(this, arguments);
    }
    return Tt(e, [{
      key: "render",
      value: function() {
        return this.props.children;
      }
    }]), e;
  }(_.Component);
  function Gp(t) {
    var n = _.useReducer(function(a) {
      return a + 1;
    }, 0), e = ue(n, 2), r = e[1], o = _.useRef(t), i = ws(function() {
      return o.current;
    }), s = ws(function(a) {
      o.current = typeof a == "function" ? a(o.current) : a, r();
    });
    return [i, s];
  }
  var Kt = "none", Hr = "appear", Ur = "enter", qr = "leave", _c = "none", St = "prepare", Rn = "start", kn = "active", fa = "end", $u = "prepared";
  function Cc(t, n) {
    var e = {};
    return e[t.toLowerCase()] = n.toLowerCase(), e["Webkit".concat(t)] = "webkit".concat(n), e["Moz".concat(t)] = "moz".concat(n), e["ms".concat(t)] = "MS".concat(n), e["O".concat(t)] = "o".concat(n.toLowerCase()), e;
  }
  function Kp(t, n) {
    var e = {
      animationend: Cc("Animation", "AnimationEnd"),
      transitionend: Cc("Transition", "TransitionEnd")
    };
    return t && ("AnimationEvent" in n || delete e.animationend.animation, "TransitionEvent" in n || delete e.transitionend.transition), e;
  }
  var Zp = Kp(Xt(), typeof window < "u" ? window : {}), Gu = {};
  if (Xt()) {
    var Jp = document.createElement("div");
    Gu = Jp.style;
  }
  var Wr = {};
  function Ku(t) {
    if (Wr[t])
      return Wr[t];
    var n = Zp[t];
    if (n)
      for (var e = Object.keys(n), r = e.length, o = 0; o < r; o += 1) {
        var i = e[o];
        if (Object.prototype.hasOwnProperty.call(n, i) && i in Gu)
          return Wr[t] = n[i], Wr[t];
      }
    return "";
  }
  var Zu = Ku("animationend"), Ju = Ku("transitionend"), Qu = !!(Zu && Ju), Ac = Zu || "animationend", Tc = Ju || "transitionend";
  function Oc(t, n) {
    if (!t) return null;
    if (_e(t) === "object") {
      var e = n.replace(/-\w/g, function(r) {
        return r[1].toUpperCase();
      });
      return t[e];
    }
    return "".concat(t, "-").concat(n);
  }
  const Qp = function(t) {
    var n = Xe();
    function e(o) {
      o && (o.removeEventListener(Tc, t), o.removeEventListener(Ac, t));
    }
    function r(o) {
      n.current && n.current !== o && e(n.current), o && o !== n.current && (o.addEventListener(Tc, t), o.addEventListener(Ac, t), n.current = o);
    }
    return _.useEffect(function() {
      return function() {
        e(n.current);
      };
    }, []), [r, e];
  };
  var ef = Xt() ? i0 : it;
  const e1 = function() {
    var t = _.useRef(null);
    function n() {
      So.cancel(t.current);
    }
    function e(r) {
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
      n();
      var i = So(function() {
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
  var t1 = [St, Rn, kn, fa], n1 = [St, $u], tf = !1, r1 = !0;
  function nf(t) {
    return t === kn || t === fa;
  }
  const o1 = function(t, n, e) {
    var r = Es(_c), o = ue(r, 2), i = o[0], s = o[1], a = e1(), c = ue(a, 2), l = c[0], d = c[1];
    function f() {
      s(St, !0);
    }
    var u = n ? n1 : t1;
    return ef(function() {
      if (i !== _c && i !== fa) {
        var v = u.indexOf(i), g = u[v + 1], h = e(i);
        h === tf ? s(g, !0) : g && l(function(x) {
          function w() {
            x.isCanceled() || s(g, !0);
          }
          h === !0 ? w() : Promise.resolve(h).then(w);
        });
      }
    }, [t, i]), _.useEffect(function() {
      return function() {
        d();
      };
    }, []), [f, i];
  };
  function i1(t, n, e, r) {
    var o = r.motionEnter, i = o === void 0 ? !0 : o, s = r.motionAppear, a = s === void 0 ? !0 : s, c = r.motionLeave, l = c === void 0 ? !0 : c, d = r.motionDeadline, f = r.motionLeaveImmediately, u = r.onAppearPrepare, v = r.onEnterPrepare, g = r.onLeavePrepare, h = r.onAppearStart, x = r.onEnterStart, w = r.onLeaveStart, y = r.onAppearActive, m = r.onEnterActive, A = r.onLeaveActive, b = r.onAppearEnd, O = r.onEnterEnd, C = r.onLeaveEnd, L = r.onVisibleChanged, F = Es(), Y = ue(F, 2), oe = Y[0], G = Y[1], B = Gp(Kt), W = ue(B, 2), H = W[0], te = W[1], Z = Es(null), Q = ue(Z, 2), ee = Q[0], ae = Q[1], ie = H(), K = Xe(!1), ne = Xe(null);
    function xe() {
      return e();
    }
    var de = Xe(!1);
    function me() {
      te(Kt), ae(null, !0);
    }
    var R = ws(function(Me) {
      var Te = H();
      if (Te !== Kt) {
        var Ke = xe();
        if (!(Me && !Me.deadline && Me.target !== Ke)) {
          var bt = de.current, ht;
          Te === Hr && bt ? ht = b == null ? void 0 : b(Ke, Me) : Te === Ur && bt ? ht = O == null ? void 0 : O(Ke, Me) : Te === qr && bt && (ht = C == null ? void 0 : C(Ke, Me)), bt && ht !== !1 && me();
        }
      }
    }), z = Qp(R), k = ue(z, 1), j = k[0], E = function(Te) {
      switch (Te) {
        case Hr:
          return q(q(q({}, St, u), Rn, h), kn, y);
        case Ur:
          return q(q(q({}, St, v), Rn, x), kn, m);
        case qr:
          return q(q(q({}, St, g), Rn, w), kn, A);
        default:
          return {};
      }
    }, M = _.useMemo(function() {
      return E(ie);
    }, [ie]), ke = o1(ie, !t, function(Me) {
      if (Me === St) {
        var Te = M[St];
        return Te ? Te(xe()) : tf;
      }
      if (Ce in M) {
        var Ke;
        ae(((Ke = M[Ce]) === null || Ke === void 0 ? void 0 : Ke.call(M, xe(), null)) || null);
      }
      return Ce === kn && ie !== Kt && (j(xe()), d > 0 && (clearTimeout(ne.current), ne.current = setTimeout(function() {
        R({
          deadline: !0
        });
      }, d))), Ce === $u && me(), r1;
    }), N = ue(ke, 2), J = N[0], Ce = N[1], dt = nf(Ce);
    de.current = dt;
    var Rt = Xe(null);
    ef(function() {
      if (!(K.current && Rt.current === n)) {
        G(n);
        var Me = K.current;
        K.current = !0;
        var Te;
        !Me && n && a && (Te = Hr), Me && n && i && (Te = Ur), (Me && !n && l || !Me && f && !n && l) && (Te = qr);
        var Ke = E(Te);
        Te && (t || Ke[St]) ? (te(Te), J()) : te(Kt), Rt.current = n;
      }
    }, [n]), it(function() {
      // Cancel appear
      (ie === Hr && !a || // Cancel enter
      ie === Ur && !i || // Cancel leave
      ie === qr && !l) && te(Kt);
    }, [a, i, l]), it(function() {
      return function() {
        K.current = !1, clearTimeout(ne.current);
      };
    }, []);
    var lt = _.useRef(!1);
    it(function() {
      oe && (lt.current = !0), oe !== void 0 && ie === Kt && ((lt.current || oe) && (L == null || L(oe)), lt.current = !0);
    }, [oe, ie]);
    var kt = ee;
    return M[St] && Ce === Rn && (kt = V({
      transition: "none"
    }, kt)), [ie, Ce, kt, oe ?? n];
  }
  function s1(t) {
    var n = t;
    _e(t) === "object" && (n = t.transitionSupport);
    function e(o, i) {
      return !!(o.motionName && n && i !== !1);
    }
    var r = /* @__PURE__ */ _.forwardRef(function(o, i) {
      var s = o.visible, a = s === void 0 ? !0 : s, c = o.removeOnLeave, l = c === void 0 ? !0 : c, d = o.forceRender, f = o.children, u = o.motionName, v = o.leavedClassName, g = o.eventProps, h = _.useContext(Yu), x = h.motion, w = e(o, x), y = Xe(), m = Xe();
      function A() {
        try {
          return y.current instanceof HTMLElement ? y.current : Ah(m.current);
        } catch {
          return null;
        }
      }
      var b = i1(w, a, A, o), O = ue(b, 4), C = O[0], L = O[1], F = O[2], Y = O[3], oe = _.useRef(Y);
      Y && (oe.current = !0);
      var G = _.useCallback(function(Q) {
        y.current = Q, Gl(i, Q);
      }, [i]), B, W = V(V({}, g), {}, {
        visible: a
      });
      if (!f)
        B = null;
      else if (C === Kt)
        Y ? B = f(V({}, W), G) : !l && oe.current && v ? B = f(V(V({}, W), {}, {
          className: v
        }), G) : d || !l && !v ? B = f(V(V({}, W), {}, {
          style: {
            display: "none"
          }
        }), G) : B = null;
      else {
        var H;
        L === St ? H = "prepare" : nf(L) ? H = "active" : L === Rn && (H = "start");
        var te = Oc(u, "".concat(C, "-").concat(H));
        B = f(V(V({}, W), {}, {
          className: et(Oc(u, C), q(q({}, te, te && H), u, typeof u == "string")),
          style: F
        }), G);
      }
      if (/* @__PURE__ */ _.isValidElement(B) && Ih(B)) {
        var Z = Nh(B);
        Z || (B = /* @__PURE__ */ _.cloneElement(B, {
          ref: G
        }));
      }
      return /* @__PURE__ */ _.createElement($p, {
        ref: m
      }, B);
    });
    return r.displayName = "CSSMotion", r;
  }
  const rf = s1(Qu);
  var Cs = "add", As = "keep", Ts = "remove", ki = "removed";
  function a1(t) {
    var n;
    return t && _e(t) === "object" && "key" in t ? n = t : n = {
      key: t
    }, V(V({}, n), {}, {
      key: String(n.key)
    });
  }
  function Os() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return t.map(a1);
  }
  function c1() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], e = [], r = 0, o = n.length, i = Os(t), s = Os(n);
    i.forEach(function(l) {
      for (var d = !1, f = r; f < o; f += 1) {
        var u = s[f];
        if (u.key === l.key) {
          r < f && (e = e.concat(s.slice(r, f).map(function(v) {
            return V(V({}, v), {}, {
              status: Cs
            });
          })), r = f), e.push(V(V({}, u), {}, {
            status: As
          })), r += 1, d = !0;
          break;
        }
      }
      d || e.push(V(V({}, l), {}, {
        status: Ts
      }));
    }), r < o && (e = e.concat(s.slice(r).map(function(l) {
      return V(V({}, l), {}, {
        status: Cs
      });
    })));
    var a = {};
    e.forEach(function(l) {
      var d = l.key;
      a[d] = (a[d] || 0) + 1;
    });
    var c = Object.keys(a).filter(function(l) {
      return a[l] > 1;
    });
    return c.forEach(function(l) {
      e = e.filter(function(d) {
        var f = d.key, u = d.status;
        return f !== l || u !== Ts;
      }), e.forEach(function(d) {
        d.key === l && (d.status = As);
      });
    }), e;
  }
  var l1 = ["component", "children", "onVisibleChanged", "onAllRemoved"], u1 = ["status"], f1 = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
  function d1(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : rf, e = /* @__PURE__ */ function(r) {
      _r(i, r);
      var o = $o(i);
      function i() {
        var s;
        At(this, i);
        for (var a = arguments.length, c = new Array(a), l = 0; l < a; l++)
          c[l] = arguments[l];
        return s = o.call.apply(o, [this].concat(c)), q(bn(s), "state", {
          keyEntities: []
        }), q(bn(s), "removeKey", function(d) {
          s.setState(function(f) {
            var u = f.keyEntities.map(function(v) {
              return v.key !== d ? v : V(V({}, v), {}, {
                status: ki
              });
            });
            return {
              keyEntities: u
            };
          }, function() {
            var f = s.state.keyEntities, u = f.filter(function(v) {
              var g = v.status;
              return g !== ki;
            }).length;
            u === 0 && s.props.onAllRemoved && s.props.onAllRemoved();
          });
        }), s;
      }
      return Tt(i, [{
        key: "render",
        value: function() {
          var a = this, c = this.state.keyEntities, l = this.props, d = l.component, f = l.children, u = l.onVisibleChanged;
          l.onAllRemoved;
          var v = mr(l, l1), g = d || _.Fragment, h = {};
          return f1.forEach(function(x) {
            h[x] = v[x], delete v[x];
          }), delete v.keys, /* @__PURE__ */ _.createElement(g, v, c.map(function(x, w) {
            var y = x.status, m = mr(x, u1), A = y === Cs || y === As;
            return /* @__PURE__ */ _.createElement(n, Bt({}, h, {
              key: m.key,
              visible: A,
              eventProps: m,
              onVisibleChanged: function(O) {
                u == null || u(O, {
                  key: m.key
                }), O || a.removeKey(m.key);
              }
            }), function(b, O) {
              return f(V(V({}, b), {}, {
                index: w
              }), O);
            });
          }));
        }
      }], [{
        key: "getDerivedStateFromProps",
        value: function(a, c) {
          var l = a.keys, d = c.keyEntities, f = Os(l), u = c1(d, f);
          return {
            keyEntities: u.filter(function(v) {
              var g = d.find(function(h) {
                var x = h.key;
                return v.key === x;
              });
              return !(g && g.status === ki && v.status === Ts);
            })
          };
        }
      }]), i;
    }(_.Component);
    return q(e, "defaultProps", {
      component: "div"
    }), e;
  }
  d1(Qu);
  function h1(t) {
    const {
      children: n
    } = t, [, e] = la(), {
      motion: r
    } = e, o = _.useRef(!1);
    return o.current = o.current || r === !1, o.current ? /* @__PURE__ */ _.createElement(Yp, {
      motion: r
    }, n) : n;
  }
  const of = /* @__PURE__ */ _.memo((t) => {
    let {
      dropdownMatchSelectWidth: n
    } = t;
    return Gn("ConfigProvider").deprecated(n === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
  });
  process.env.NODE_ENV !== "production" && (of.displayName = "PropWarning");
  const x1 = process.env.NODE_ENV !== "production" ? of : () => null;
  var p1 = function(t, n) {
    var e = {};
    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && n.indexOf(r) < 0 && (e[r] = t[r]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(t); o < r.length; o++)
      n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (e[r[o]] = t[r[o]]);
    return e;
  };
  let Rs = !1;
  process.env.NODE_ENV;
  const m1 = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
  let sf;
  function g1() {
    return sf || ys;
  }
  function v1(t) {
    return Object.keys(t).some((n) => n.endsWith("Color"));
  }
  const b1 = (t) => {
    const {
      prefixCls: n,
      iconPrefixCls: e,
      theme: r,
      holderRender: o
    } = t;
    n !== void 0 && (sf = n), r && v1(r) && (process.env.NODE_ENV !== "production" && Qo(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), vp(g1(), r));
  }, y1 = (t) => {
    const {
      children: n,
      csp: e,
      autoInsertSpaceInButton: r,
      alert: o,
      anchor: i,
      form: s,
      locale: a,
      componentSize: c,
      direction: l,
      space: d,
      splitter: f,
      virtual: u,
      dropdownMatchSelectWidth: v,
      popupMatchSelectWidth: g,
      popupOverflow: h,
      legacyLocale: x,
      parentContext: w,
      iconPrefixCls: y,
      theme: m,
      componentDisabled: A,
      segmented: b,
      statistic: O,
      spin: C,
      calendar: L,
      carousel: F,
      cascader: Y,
      collapse: oe,
      typography: G,
      checkbox: B,
      descriptions: W,
      divider: H,
      drawer: te,
      skeleton: Z,
      steps: Q,
      image: ee,
      layout: ae,
      list: ie,
      mentions: K,
      modal: ne,
      progress: xe,
      result: de,
      slider: me,
      breadcrumb: R,
      menu: z,
      pagination: k,
      input: j,
      textArea: E,
      empty: M,
      badge: ke,
      radio: N,
      rate: J,
      switch: Ce,
      transfer: dt,
      avatar: Rt,
      message: lt,
      tag: kt,
      table: Me,
      card: Te,
      tabs: Ke,
      timeline: bt,
      timePicker: ht,
      upload: sn,
      notification: an,
      tree: Cn,
      colorPicker: cn,
      datePicker: ln,
      rangePicker: I,
      flex: S,
      wave: Oe,
      dropdown: ce,
      warning: qe,
      tour: X,
      tooltip: we,
      popover: Ee,
      popconfirm: nt,
      floatButtonGroup: Ye,
      variant: ut,
      inputNumber: Ft,
      treeSelect: ge
    } = t, ze = _.useCallback((Ie, p) => {
      const {
        prefixCls: P
      } = t;
      if (p)
        return p;
      const D = P || w.getPrefixCls("");
      return Ie ? `${D}-${Ie}` : D;
    }, [w.getPrefixCls, t.prefixCls]), Ze = y || w.iconPrefixCls || ca, Pt = e || w.csp;
    Vp(Ze, Pt);
    const tt = Wp(m, w.theme, {
      prefixCls: ze("")
    });
    process.env.NODE_ENV !== "production" && (Rs = Rs || !!tt);
    const Yt = {
      csp: Pt,
      autoInsertSpaceInButton: r,
      alert: o,
      anchor: i,
      locale: a || x,
      direction: l,
      space: d,
      splitter: f,
      virtual: u,
      popupMatchSelectWidth: g ?? v,
      popupOverflow: h,
      getPrefixCls: ze,
      iconPrefixCls: Ze,
      theme: tt,
      segmented: b,
      statistic: O,
      spin: C,
      calendar: L,
      carousel: F,
      cascader: Y,
      collapse: oe,
      typography: G,
      checkbox: B,
      descriptions: W,
      divider: H,
      drawer: te,
      skeleton: Z,
      steps: Q,
      image: ee,
      input: j,
      textArea: E,
      layout: ae,
      list: ie,
      mentions: K,
      modal: ne,
      progress: xe,
      result: de,
      slider: me,
      breadcrumb: R,
      menu: z,
      pagination: k,
      empty: M,
      badge: ke,
      radio: N,
      rate: J,
      switch: Ce,
      transfer: dt,
      avatar: Rt,
      message: lt,
      tag: kt,
      table: Me,
      card: Te,
      tabs: Ke,
      timeline: bt,
      timePicker: ht,
      upload: sn,
      notification: an,
      tree: Cn,
      colorPicker: cn,
      datePicker: ln,
      rangePicker: I,
      flex: S,
      wave: Oe,
      dropdown: ce,
      warning: qe,
      tour: X,
      tooltip: we,
      popover: Ee,
      popconfirm: nt,
      floatButtonGroup: Ye,
      variant: ut,
      inputNumber: Ft,
      treeSelect: ge
    };
    process.env.NODE_ENV !== "production" && Gn("ConfigProvider")(!("autoInsertSpaceInButton" in t), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
    const xt = Object.assign({}, w);
    Object.keys(Yt).forEach((Ie) => {
      Yt[Ie] !== void 0 && (xt[Ie] = Yt[Ie]);
    }), m1.forEach((Ie) => {
      const p = t[Ie];
      p && (xt[Ie] = p);
    }), typeof r < "u" && (xt.button = Object.assign({
      autoInsertSpace: r
    }, xt.button));
    const $t = $l(() => xt, xt, (Ie, p) => {
      const P = Object.keys(Ie), D = Object.keys(p);
      return P.length !== D.length || P.some(($) => Ie[$] !== p[$]);
    }), {
      layer: er
    } = _.useContext(Cr), Or = _.useMemo(() => ({
      prefixCls: Ze,
      csp: Pt,
      layer: er ? "antd" : void 0
    }), [Ze, Pt, er]);
    let We = /* @__PURE__ */ _.createElement(_.Fragment, null, /* @__PURE__ */ _.createElement(x1, {
      dropdownMatchSelectWidth: v
    }), n);
    const Rr = _.useMemo(() => {
      var Ie, p, P, D;
      return Kx(((Ie = ei.Form) === null || Ie === void 0 ? void 0 : Ie.defaultValidateMessages) || {}, ((P = (p = $t.locale) === null || p === void 0 ? void 0 : p.Form) === null || P === void 0 ? void 0 : P.defaultValidateMessages) || {}, ((D = $t.form) === null || D === void 0 ? void 0 : D.validateMessages) || {}, (s == null ? void 0 : s.validateMessages) || {});
    }, [$t, s == null ? void 0 : s.validateMessages]);
    Object.keys(Rr).length > 0 && (We = /* @__PURE__ */ _.createElement(Jx.Provider, {
      value: Rr
    }, We)), a && (We = /* @__PURE__ */ _.createElement(Iu, {
      locale: a,
      _ANT_MARK__: Pu
    }, We)), We = /* @__PURE__ */ _.createElement(sa.Provider, {
      value: Or
    }, We), c && (We = /* @__PURE__ */ _.createElement(yp, {
      size: c
    }, We)), We = /* @__PURE__ */ _.createElement(h1, null, We);
    const ui = _.useMemo(() => {
      const Ie = tt || {}, {
        algorithm: p,
        token: P,
        components: D,
        cssVar: $
      } = Ie, pe = p1(Ie, ["algorithm", "token", "components", "cssVar"]), ve = p && (!Array.isArray(p) || p.length > 0) ? es(p) : Mu, fe = {};
      Object.entries(D || {}).forEach((Je) => {
        let [Pe, Ne] = Je;
        const je = Object.assign({}, Ne);
        "algorithm" in je && (je.algorithm === !0 ? je.theme = ve : (Array.isArray(je.algorithm) || typeof je.algorithm == "function") && (je.theme = es(je.algorithm)), delete je.algorithm), fe[Pe] = je;
      });
      const le = Object.assign(Object.assign({}, vr), P);
      return Object.assign(Object.assign({}, pe), {
        theme: ve,
        token: le,
        components: fe,
        override: Object.assign({
          override: le
        }, fe),
        cssVar: $
      });
    }, [tt]);
    return m && (We = /* @__PURE__ */ _.createElement(Du.Provider, {
      value: ui
    }, We)), $t.warning && (We = /* @__PURE__ */ _.createElement(Ru.Provider, {
      value: $t.warning
    }, We)), A !== void 0 && (We = /* @__PURE__ */ _.createElement(bp, {
      disabled: A
    }, We)), /* @__PURE__ */ _.createElement(nn.Provider, {
      value: $t
    }, We);
  }, Kn = (t) => {
    const n = _.useContext(nn), e = _.useContext(ku);
    return /* @__PURE__ */ _.createElement(y1, Object.assign({
      parentContext: n,
      legacyLocale: e
    }, t));
  };
  Kn.ConfigContext = nn;
  Kn.SizeContext = yr;
  Kn.config = b1;
  Kn.useConfig = Sp;
  Object.defineProperty(Kn, "SizeContext", {
    get: () => (process.env.NODE_ENV !== "production" && Qo(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), yr)
  });
  process.env.NODE_ENV !== "production" && (Kn.displayName = "ConfigProvider");
  var S1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
  function af(t) {
    var n;
    return t == null || (n = t.getRootNode) === null || n === void 0 ? void 0 : n.call(t);
  }
  function w1(t) {
    return af(t) instanceof ShadowRoot;
  }
  function E1(t) {
    return w1(t) ? af(t) : null;
  }
  function _1(t) {
    return t.replace(/-(.)/g, function(n, e) {
      return e.toUpperCase();
    });
  }
  function C1(t, n) {
    rn(t, "[@ant-design/icons] ".concat(n));
  }
  function Rc(t) {
    return _e(t) === "object" && typeof t.name == "string" && typeof t.theme == "string" && (_e(t.icon) === "object" || typeof t.icon == "function");
  }
  function kc() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Object.keys(t).reduce(function(n, e) {
      var r = t[e];
      switch (e) {
        case "class":
          n.className = r, delete n.class;
          break;
        default:
          delete n[e], n[_1(e)] = r;
      }
      return n;
    }, {});
  }
  function ks(t, n, e) {
    return e ? /* @__PURE__ */ Fe.createElement(t.tag, V(V({
      key: n
    }, kc(t.attrs)), e), (t.children || []).map(function(r, o) {
      return ks(r, "".concat(n, "-").concat(t.tag, "-").concat(o));
    })) : /* @__PURE__ */ Fe.createElement(t.tag, V({
      key: n
    }, kc(t.attrs)), (t.children || []).map(function(r, o) {
      return ks(r, "".concat(n, "-").concat(t.tag, "-").concat(o));
    }));
  }
  function cf(t) {
    return br(t)[0];
  }
  function lf(t) {
    return t ? Array.isArray(t) ? t : [t] : [];
  }
  var A1 = `
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
`, T1 = function(n) {
    var e = tn(sa), r = e.csp, o = e.prefixCls, i = e.layer, s = A1;
    o && (s = s.replace(/anticon/g, o)), i && (s = "@layer ".concat(i, ` {
`).concat(s, `
}`)), it(function() {
      var a = n.current, c = E1(a);
      yn(s, "@ant-design-icons", {
        prepend: !i,
        csp: r,
        attachTo: c
      });
    }, []);
  }, O1 = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], hr = {
    primaryColor: "#333",
    secondaryColor: "#E6E6E6",
    calculated: !1
  };
  function R1(t) {
    var n = t.primaryColor, e = t.secondaryColor;
    hr.primaryColor = n, hr.secondaryColor = e || cf(n), hr.calculated = !!e;
  }
  function k1() {
    return V({}, hr);
  }
  var Zn = function(n) {
    var e = n.icon, r = n.className, o = n.onClick, i = n.style, s = n.primaryColor, a = n.secondaryColor, c = mr(n, O1), l = _.useRef(), d = hr;
    if (s && (d = {
      primaryColor: s,
      secondaryColor: a || cf(s)
    }), T1(l), C1(Rc(e), "icon should be icon definiton, but got ".concat(e)), !Rc(e))
      return null;
    var f = e;
    return f && typeof f.icon == "function" && (f = V(V({}, f), {}, {
      icon: f.icon(d.primaryColor, d.secondaryColor)
    })), ks(f.icon, "svg-".concat(f.name), V(V({
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
  Zn.displayName = "IconReact";
  Zn.getTwoToneColors = k1;
  Zn.setTwoToneColors = R1;
  function uf(t) {
    var n = lf(t), e = ue(n, 2), r = e[0], o = e[1];
    return Zn.setTwoToneColors({
      primaryColor: r,
      secondaryColor: o
    });
  }
  function P1() {
    var t = Zn.getTwoToneColors();
    return t.calculated ? [t.primaryColor, t.secondaryColor] : t.primaryColor;
  }
  var I1 = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
  uf(_o.primary);
  var on = /* @__PURE__ */ _.forwardRef(function(t, n) {
    var e = t.className, r = t.icon, o = t.spin, i = t.rotate, s = t.tabIndex, a = t.onClick, c = t.twoToneColor, l = mr(t, I1), d = _.useContext(sa), f = d.prefixCls, u = f === void 0 ? "anticon" : f, v = d.rootClassName, g = et(v, u, q(q({}, "".concat(u, "-").concat(r.name), !!r.name), "".concat(u, "-spin"), !!o || r.name === "loading"), e), h = s;
    h === void 0 && a && (h = -1);
    var x = i ? {
      msTransform: "rotate(".concat(i, "deg)"),
      transform: "rotate(".concat(i, "deg)")
    } : void 0, w = lf(c), y = ue(w, 2), m = y[0], A = y[1];
    return /* @__PURE__ */ _.createElement("span", Bt({
      role: "img",
      "aria-label": r.name
    }, l, {
      ref: n,
      tabIndex: h,
      onClick: a,
      className: g
    }), /* @__PURE__ */ _.createElement(Zn, {
      icon: r,
      primaryColor: m,
      secondaryColor: A,
      style: x
    }));
  });
  on.displayName = "AntdIcon";
  on.getTwoToneColor = P1;
  on.setTwoToneColor = uf;
  var N1 = function(n, e) {
    return /* @__PURE__ */ _.createElement(on, Bt({}, n, {
      ref: e,
      icon: S1
    }));
  }, ff = /* @__PURE__ */ _.forwardRef(N1);
  process.env.NODE_ENV !== "production" && (ff.displayName = "CheckCircleFilled");
  var j1 = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, L1 = function(n, e) {
    return /* @__PURE__ */ _.createElement(on, Bt({}, n, {
      ref: e,
      icon: j1
    }));
  }, df = /* @__PURE__ */ _.forwardRef(L1);
  process.env.NODE_ENV !== "production" && (df.displayName = "CloseCircleFilled");
  var M1 = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, D1 = function(n, e) {
    return /* @__PURE__ */ _.createElement(on, Bt({}, n, {
      ref: e,
      icon: M1
    }));
  }, hf = /* @__PURE__ */ _.forwardRef(D1);
  process.env.NODE_ENV !== "production" && (hf.displayName = "CloseOutlined");
  var B1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" }, F1 = function(n, e) {
    return /* @__PURE__ */ _.createElement(on, Bt({}, n, {
      ref: e,
      icon: B1
    }));
  }, xf = /* @__PURE__ */ _.forwardRef(F1);
  process.env.NODE_ENV !== "production" && (xf.displayName = "ExclamationCircleFilled");
  var z1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" }, V1 = function(n, e) {
    return /* @__PURE__ */ _.createElement(on, Bt({}, n, {
      ref: e,
      icon: z1
    }));
  }, pf = /* @__PURE__ */ _.forwardRef(V1);
  process.env.NODE_ENV !== "production" && (pf.displayName = "InfoCircleFilled");
  var H1 = `accept acceptCharset accessKey action allowFullScreen allowTransparency
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
    summary tabIndex target title type useMap value width wmode wrap`, U1 = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, q1 = "".concat(H1, " ").concat(U1).split(/[\s\n]+/), W1 = "aria-", X1 = "data-";
  function Pc(t, n) {
    return t.indexOf(n) === 0;
  }
  function Y1(t) {
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
      (e.aria && (o === "role" || Pc(o, W1)) || // Data
      e.data && Pc(o, X1) || // Attr
      e.attr && q1.includes(o)) && (r[o] = t[o]);
    }), r;
  }
  const mf = (t, n, e) => /* @__PURE__ */ Fe.isValidElement(t) ? /* @__PURE__ */ Fe.cloneElement(t, typeof e == "function" ? e(t.props || {}) : e) : n;
  function $1(t, n) {
    return mf(t, t, n);
  }
  const Xr = (t, n, e, r, o) => ({
    background: t,
    border: `${wo(r.lineWidth)} ${r.lineType} ${n}`,
    [`${o}-icon`]: {
      color: e
    }
  }), G1 = (t) => {
    const {
      componentCls: n,
      motionDurationSlow: e,
      marginXS: r,
      marginSM: o,
      fontSize: i,
      fontSizeLG: s,
      lineHeight: a,
      borderRadiusLG: c,
      motionEaseInOutCirc: l,
      withDescriptionIconSize: d,
      colorText: f,
      colorTextHeading: u,
      withDescriptionPadding: v,
      defaultPadding: g
    } = t;
    return {
      [n]: Object.assign(Object.assign({}, Wu(t)), {
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
          color: u
        },
        [`&${n}-motion-leave`]: {
          overflow: "hidden",
          opacity: 1,
          transition: `max-height ${e} ${l}, opacity ${e} ${l},
        padding-top ${e} ${l}, padding-bottom ${e} ${l},
        margin-bottom ${e} ${l}`
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
          fontSize: d,
          lineHeight: 0
        },
        [`${n}-message`]: {
          display: "block",
          marginBottom: r,
          color: u,
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
  }, K1 = (t) => {
    const {
      componentCls: n,
      colorSuccess: e,
      colorSuccessBorder: r,
      colorSuccessBg: o,
      colorWarning: i,
      colorWarningBorder: s,
      colorWarningBg: a,
      colorError: c,
      colorErrorBorder: l,
      colorErrorBg: d,
      colorInfo: f,
      colorInfoBorder: u,
      colorInfoBg: v
    } = t;
    return {
      [n]: {
        "&-success": Xr(o, r, e, t, n),
        "&-info": Xr(v, u, f, t, n),
        "&-warning": Xr(a, s, i, t, n),
        "&-error": Object.assign(Object.assign({}, Xr(d, l, c, t, n)), {
          [`${n}-description > pre`]: {
            margin: 0,
            padding: 0
          }
        })
      }
    };
  }, Z1 = (t) => {
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
          lineHeight: wo(i),
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
  }, J1 = (t) => ({
    withDescriptionIconSize: t.fontSizeHeading3,
    defaultPadding: `${t.paddingContentVerticalSM}px 12px`,
    withDescriptionPadding: `${t.paddingMD}px ${t.paddingContentHorizontalLG}px`
  }), Q1 = ua("Alert", (t) => [G1(t), K1(t), Z1(t)], J1);
  var Ic = function(t, n) {
    var e = {};
    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && n.indexOf(r) < 0 && (e[r] = t[r]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(t); o < r.length; o++)
      n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (e[r[o]] = t[r[o]]);
    return e;
  };
  const em = {
    success: ff,
    info: pf,
    error: df,
    warning: xf
  }, tm = (t) => {
    const {
      icon: n,
      prefixCls: e,
      type: r
    } = t, o = em[r] || null;
    return n ? mf(n, /* @__PURE__ */ _.createElement("span", {
      className: `${e}-icon`
    }, n), () => ({
      className: et(`${e}-icon`, n.props.className)
    })) : /* @__PURE__ */ _.createElement(o, {
      className: `${e}-icon`
    });
  }, nm = (t) => {
    const {
      isClosable: n,
      prefixCls: e,
      closeIcon: r,
      handleClose: o,
      ariaProps: i
    } = t, s = r === !0 || r === void 0 ? /* @__PURE__ */ _.createElement(hf, null) : r;
    return n ? /* @__PURE__ */ _.createElement("button", Object.assign({
      type: "button",
      onClick: o,
      className: `${e}-close-icon`,
      tabIndex: 0
    }, i), s) : null;
  }, da = /* @__PURE__ */ _.forwardRef((t, n) => {
    const {
      description: e,
      prefixCls: r,
      message: o,
      banner: i,
      className: s,
      rootClassName: a,
      style: c,
      onMouseEnter: l,
      onMouseLeave: d,
      onClick: f,
      afterClose: u,
      showIcon: v,
      closable: g,
      closeText: h,
      closeIcon: x,
      action: w,
      id: y
    } = t, m = Ic(t, ["description", "prefixCls", "message", "banner", "className", "rootClassName", "style", "onMouseEnter", "onMouseLeave", "onClick", "afterClose", "showIcon", "closable", "closeText", "closeIcon", "action", "id"]), [A, b] = _.useState(!1);
    process.env.NODE_ENV !== "production" && Gn("Alert").deprecated(!h, "closeText", "closable.closeIcon");
    const O = _.useRef(null);
    _.useImperativeHandle(n, () => ({
      nativeElement: O.current
    }));
    const {
      getPrefixCls: C,
      direction: L,
      closable: F,
      closeIcon: Y,
      className: oe,
      style: G
    } = Bu("alert"), B = C("alert", r), [W, H, te] = Q1(B), Z = (de) => {
      var me;
      b(!0), (me = t.onClose) === null || me === void 0 || me.call(t, de);
    }, Q = _.useMemo(() => t.type !== void 0 ? t.type : i ? "warning" : "info", [t.type, i]), ee = _.useMemo(() => typeof g == "object" && g.closeIcon || h ? !0 : typeof g == "boolean" ? g : x !== !1 && x !== null && x !== void 0 ? !0 : !!F, [h, x, g, F]), ae = i && v === void 0 ? !0 : v, ie = et(B, `${B}-${Q}`, {
      [`${B}-with-description`]: !!e,
      [`${B}-no-icon`]: !ae,
      [`${B}-banner`]: !!i,
      [`${B}-rtl`]: L === "rtl"
    }, oe, s, a, te, H), K = Y1(m, {
      aria: !0,
      data: !0
    }), ne = _.useMemo(() => typeof g == "object" && g.closeIcon ? g.closeIcon : h || (x !== void 0 ? x : typeof F == "object" && F.closeIcon ? F.closeIcon : Y), [x, g, h, Y]), xe = _.useMemo(() => {
      const de = g ?? F;
      if (typeof de == "object") {
        const {
          closeIcon: me
        } = de;
        return Ic(de, ["closeIcon"]);
      }
      return {};
    }, [g, F]);
    return W(/* @__PURE__ */ _.createElement(rf, {
      visible: !A,
      motionName: `${B}-motion`,
      motionAppear: !1,
      motionEnter: !1,
      onLeaveStart: (de) => ({
        maxHeight: de.offsetHeight
      }),
      onLeaveEnd: u
    }, (de, me) => {
      let {
        className: R,
        style: z
      } = de;
      return /* @__PURE__ */ _.createElement("div", Object.assign({
        id: y,
        ref: Ph(O, me),
        "data-show": !A,
        className: et(ie, R),
        style: Object.assign(Object.assign(Object.assign({}, G), c), z),
        onMouseEnter: l,
        onMouseLeave: d,
        onClick: f,
        role: "alert"
      }, K), ae ? /* @__PURE__ */ _.createElement(tm, {
        description: e,
        icon: t.icon,
        prefixCls: B,
        type: Q
      }) : null, /* @__PURE__ */ _.createElement("div", {
        className: `${B}-content`
      }, o ? /* @__PURE__ */ _.createElement("div", {
        className: `${B}-message`
      }, o) : null, e ? /* @__PURE__ */ _.createElement("div", {
        className: `${B}-description`
      }, e) : null), w ? /* @__PURE__ */ _.createElement("div", {
        className: `${B}-action`
      }, w) : null, /* @__PURE__ */ _.createElement(nm, {
        isClosable: ee,
        prefixCls: B,
        closeIcon: ne,
        handleClose: Z,
        ariaProps: xe
      }));
    }));
  });
  process.env.NODE_ENV !== "production" && (da.displayName = "Alert");
  function rm(t, n, e) {
    return n = Fn(n), Zl(t, Qs() ? Reflect.construct(n, e || [], Fn(t).constructor) : n.apply(t, e));
  }
  let om = /* @__PURE__ */ function(t) {
    function n() {
      var e;
      return At(this, n), e = rm(this, n, arguments), e.state = {
        error: void 0,
        info: {
          componentStack: ""
        }
      }, e;
    }
    return _r(n, t), Tt(n, [{
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
        } = this.state, l = (c == null ? void 0 : c.componentStack) || null, d = typeof r > "u" ? (a || "").toString() : r, f = typeof o > "u" ? l : o;
        return a ? /* @__PURE__ */ _.createElement(da, {
          id: i,
          type: "error",
          message: d,
          description: /* @__PURE__ */ _.createElement("pre", {
            style: {
              fontSize: "0.9em",
              overflowX: "auto"
            }
          }, f)
        }) : s;
      }
    }]);
  }(_.Component);
  const gf = da;
  gf.ErrorBoundary = om;
  function im(t, n) {
    var e = Object.assign({}, t);
    return Array.isArray(n) && n.forEach(function(r) {
      delete e[r];
    }), e;
  }
  function sm(t, n, e) {
    var r = e || {}, o = r.noTrailing, i = o === void 0 ? !1 : o, s = r.noLeading, a = s === void 0 ? !1 : s, c = r.debounceMode, l = c === void 0 ? void 0 : c, d, f = !1, u = 0;
    function v() {
      d && clearTimeout(d);
    }
    function g(x) {
      var w = x || {}, y = w.upcomingOnly, m = y === void 0 ? !1 : y;
      v(), f = !m;
    }
    function h() {
      for (var x = arguments.length, w = new Array(x), y = 0; y < x; y++)
        w[y] = arguments[y];
      var m = this, A = Date.now() - u;
      if (f)
        return;
      function b() {
        u = Date.now(), n.apply(m, w);
      }
      function O() {
        d = void 0;
      }
      !a && l && !d && b(), v(), l === void 0 && A > t ? a ? (u = Date.now(), i || (d = setTimeout(l ? O : b, t))) : b() : i !== !0 && (d = setTimeout(l ? O : b, l === void 0 ? t - A : t));
    }
    return h.cancel = g, h;
  }
  function am(t, n, e) {
    var r = {}, o = r.atBegin, i = o === void 0 ? !1 : o;
    return sm(t, n, {
      debounceMode: i !== !1
    });
  }
  function Nc(t) {
    return ["small", "middle", "large"].includes(t);
  }
  const vf = ["wrap", "nowrap", "wrap-reverse"], bf = ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around", "space-evenly", "stretch", "normal", "left", "right"], yf = ["center", "start", "end", "flex-start", "flex-end", "self-start", "self-end", "baseline", "normal", "stretch"], cm = (t, n) => {
    const e = n.wrap === !0 ? "wrap" : n.wrap;
    return {
      [`${t}-wrap-${e}`]: e && vf.includes(e)
    };
  }, lm = (t, n) => {
    const e = {};
    return yf.forEach((r) => {
      e[`${t}-align-${r}`] = n.align === r;
    }), e[`${t}-align-stretch`] = !n.align && !!n.vertical, e;
  }, um = (t, n) => {
    const e = {};
    return bf.forEach((r) => {
      e[`${t}-justify-${r}`] = n.justify === r;
    }), e;
  };
  function fm(t, n) {
    return et(Object.assign(Object.assign(Object.assign({}, cm(t, n)), lm(t, n)), um(t, n)));
  }
  const dm = (t) => {
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
  }, hm = (t) => {
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
  }, xm = (t) => {
    const {
      componentCls: n
    } = t, e = {};
    return vf.forEach((r) => {
      e[`${n}-wrap-${r}`] = {
        flexWrap: r
      };
    }), e;
  }, pm = (t) => {
    const {
      componentCls: n
    } = t, e = {};
    return yf.forEach((r) => {
      e[`${n}-align-${r}`] = {
        alignItems: r
      };
    }), e;
  }, mm = (t) => {
    const {
      componentCls: n
    } = t, e = {};
    return bf.forEach((r) => {
      e[`${n}-justify-${r}`] = {
        justifyContent: r
      };
    }), e;
  }, gm = () => ({}), vm = ua("Flex", (t) => {
    const {
      paddingXS: n,
      padding: e,
      paddingLG: r
    } = t, o = ti(t, {
      flexGapSM: n,
      flexGap: e,
      flexGapLG: r
    });
    return [dm(o), hm(o), xm(o), pm(o), mm(o)];
  }, gm, {
    // Flex component don't apply extra font style
    // https://github.com/ant-design/ant-design/issues/46403
    resetStyle: !1
  });
  var bm = function(t, n) {
    var e = {};
    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && n.indexOf(r) < 0 && (e[r] = t[r]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(t); o < r.length; o++)
      n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (e[r[o]] = t[r[o]]);
    return e;
  };
  const Sf = /* @__PURE__ */ Fe.forwardRef((t, n) => {
    const {
      prefixCls: e,
      rootClassName: r,
      className: o,
      style: i,
      flex: s,
      gap: a,
      children: c,
      vertical: l = !1,
      component: d = "div"
    } = t, f = bm(t, ["prefixCls", "rootClassName", "className", "style", "flex", "gap", "children", "vertical", "component"]), {
      flex: u,
      direction: v,
      getPrefixCls: g
    } = Fe.useContext(nn), h = g("flex", e), [x, w, y] = vm(h), m = l ?? (u == null ? void 0 : u.vertical), A = et(o, r, u == null ? void 0 : u.className, h, w, y, fm(h, t), {
      [`${h}-rtl`]: v === "rtl",
      [`${h}-gap-${a}`]: Nc(a),
      [`${h}-vertical`]: m
    }), b = Object.assign(Object.assign({}, u == null ? void 0 : u.style), i);
    return s && (b.flex = s), a && !Nc(a) && (b.gap = a), x(/* @__PURE__ */ Fe.createElement(d, Object.assign({
      ref: n,
      className: A,
      style: b
    }, im(f, ["justify", "wrap", "align"])), c));
  });
  process.env.NODE_ENV !== "production" && (Sf.displayName = "Flex");
  const Co = 100, wf = Co / 5, Ef = Co / 2 - wf / 2, Pi = Ef * 2 * Math.PI, jc = 50, Lc = (t) => {
    const {
      dotClassName: n,
      style: e,
      hasCircleCls: r
    } = t;
    return /* @__PURE__ */ _.createElement("circle", {
      className: et(`${n}-circle`, {
        [`${n}-circle-bg`]: r
      }),
      r: Ef,
      cx: jc,
      cy: jc,
      strokeWidth: wf,
      style: e
    });
  }, ym = (t) => {
    let {
      percent: n,
      prefixCls: e
    } = t;
    const r = `${e}-dot`, o = `${r}-holder`, i = `${o}-hidden`, [s, a] = _.useState(!1);
    uu(() => {
      n !== 0 && a(!0);
    }, [n !== 0]);
    const c = Math.max(Math.min(n, 100), 0);
    if (!s)
      return null;
    const l = {
      strokeDashoffset: `${Pi / 4}`,
      strokeDasharray: `${Pi * c / 100} ${Pi * (100 - c) / 100}`
    };
    return /* @__PURE__ */ _.createElement("span", {
      className: et(o, `${r}-progress`, c <= 0 && i)
    }, /* @__PURE__ */ _.createElement("svg", {
      viewBox: `0 0 ${Co} ${Co}`,
      // biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole: progressbar could be readonly
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-valuenow": c
    }, /* @__PURE__ */ _.createElement(Lc, {
      dotClassName: r,
      hasCircleCls: !0
    }), /* @__PURE__ */ _.createElement(Lc, {
      dotClassName: r,
      style: l
    })));
  };
  function Sm(t) {
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
    })))), /* @__PURE__ */ _.createElement(ym, {
      prefixCls: n,
      percent: e
    }));
  }
  function wm(t) {
    const {
      prefixCls: n,
      indicator: e,
      percent: r
    } = t, o = `${n}-dot`;
    return e && /* @__PURE__ */ _.isValidElement(e) ? $1(e, {
      className: et(e.props.className, o),
      percent: r
    }) : /* @__PURE__ */ _.createElement(Sm, {
      prefixCls: n,
      percent: r
    });
  }
  const Em = new Au("antSpinMove", {
    to: {
      opacity: 1
    }
  }), _m = new Au("antRotate", {
    to: {
      transform: "rotate(405deg)"
    }
  }), Cm = (t) => {
    const {
      componentCls: n,
      calc: e
    } = t;
    return {
      [n]: Object.assign(Object.assign({}, Wu(t)), {
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
            animationName: Em,
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
            animationName: _m,
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
  }, Am = (t) => {
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
  }, Tm = ua("Spin", (t) => {
    const n = ti(t, {
      spinDotDefault: t.colorTextDescription
    });
    return [Cm(n)];
  }, Am), Om = 200, Mc = [[30, 0.05], [70, 0.03], [96, 0.01]];
  function Rm(t, n) {
    const [e, r] = _.useState(0), o = _.useRef(null), i = n === "auto";
    return _.useEffect(() => (i && t && (r(0), o.current = setInterval(() => {
      r((s) => {
        const a = 100 - s;
        for (let c = 0; c < Mc.length; c += 1) {
          const [l, d] = Mc[c];
          if (s <= l)
            return s + a * d;
        }
        return s;
      });
    }, Om)), () => {
      clearInterval(o.current);
    }), [i, t]), i ? e : n;
  }
  var km = function(t, n) {
    var e = {};
    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && n.indexOf(r) < 0 && (e[r] = t[r]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(t); o < r.length; o++)
      n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (e[r[o]] = t[r[o]]);
    return e;
  };
  let _f;
  function Pm(t, n) {
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
      wrapperClassName: l,
      style: d,
      children: f,
      fullscreen: u = !1,
      indicator: v,
      percent: g
    } = t, h = km(t, ["prefixCls", "spinning", "delay", "className", "rootClassName", "size", "tip", "wrapperClassName", "style", "children", "fullscreen", "indicator", "percent"]), {
      getPrefixCls: x,
      direction: w,
      className: y,
      style: m,
      indicator: A
    } = Bu("spin"), b = x("spin", e), [O, C, L] = Tm(b), [F, Y] = _.useState(() => r && !Pm(r, o)), oe = Rm(F, g);
    _.useEffect(() => {
      if (r) {
        const Q = am(o, () => {
          Y(!0);
        });
        return Q(), () => {
          var ee;
          (ee = Q == null ? void 0 : Q.cancel) === null || ee === void 0 || ee.call(Q);
        };
      }
      Y(!1);
    }, [o, r]);
    const G = _.useMemo(() => typeof f < "u" && !u, [f, u]);
    if (process.env.NODE_ENV !== "production") {
      const Q = Gn("Spin");
      process.env.NODE_ENV !== "production" && Q(!c || G || u, "usage", "`tip` only work in nest or fullscreen pattern.");
    }
    const B = et(b, y, {
      [`${b}-sm`]: a === "small",
      [`${b}-lg`]: a === "large",
      [`${b}-spinning`]: F,
      [`${b}-show-text`]: !!c,
      [`${b}-rtl`]: w === "rtl"
    }, i, !u && s, C, L), W = et(`${b}-container`, {
      [`${b}-blur`]: F
    }), H = (n = v ?? A) !== null && n !== void 0 ? n : _f, te = Object.assign(Object.assign({}, m), d), Z = /* @__PURE__ */ _.createElement("div", Object.assign({}, h, {
      style: te,
      className: B,
      "aria-live": "polite",
      "aria-busy": F
    }), /* @__PURE__ */ _.createElement(wm, {
      prefixCls: b,
      indicator: H,
      percent: oe
    }), c && (G || u) ? /* @__PURE__ */ _.createElement("div", {
      className: `${b}-text`
    }, c) : null);
    return O(G ? /* @__PURE__ */ _.createElement("div", Object.assign({}, h, {
      className: et(`${b}-nested-loading`, l, C, L)
    }), F && /* @__PURE__ */ _.createElement("div", {
      key: "loading"
    }, Z), /* @__PURE__ */ _.createElement("div", {
      className: W,
      key: "container"
    }, f)) : u ? /* @__PURE__ */ _.createElement("div", {
      className: et(`${b}-fullscreen`, {
        [`${b}-fullscreen-show`]: F
      }, s, C, L)
    }, Z) : Z);
  };
  xr.setDefaultIndicator = (t) => {
    _f = t;
  };
  process.env.NODE_ENV !== "production" && (xr.displayName = "Spin");
  function Cf(t, n) {
    return function() {
      return t.apply(n, arguments);
    };
  }
  const { toString: Im } = Object.prototype, { getPrototypeOf: ha } = Object, { iterator: ni, toStringTag: Af } = Symbol, ri = /* @__PURE__ */ ((t) => (n) => {
    const e = Im.call(n);
    return t[e] || (t[e] = e.slice(8, -1).toLowerCase());
  })(/* @__PURE__ */ Object.create(null)), Ot = (t) => (t = t.toLowerCase(), (n) => ri(n) === t), oi = (t) => (n) => typeof n === t, { isArray: Jn } = Array, Sr = oi("undefined");
  function Nm(t) {
    return t !== null && !Sr(t) && t.constructor !== null && !Sr(t.constructor) && at(t.constructor.isBuffer) && t.constructor.isBuffer(t);
  }
  const Tf = Ot("ArrayBuffer");
  function jm(t) {
    let n;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? n = ArrayBuffer.isView(t) : n = t && t.buffer && Tf(t.buffer), n;
  }
  const Lm = oi("string"), at = oi("function"), Of = oi("number"), ii = (t) => t !== null && typeof t == "object", Mm = (t) => t === !0 || t === !1, lo = (t) => {
    if (ri(t) !== "object")
      return !1;
    const n = ha(t);
    return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Af in t) && !(ni in t);
  }, Dm = Ot("Date"), Bm = Ot("File"), Fm = Ot("Blob"), zm = Ot("FileList"), Vm = (t) => ii(t) && at(t.pipe), Hm = (t) => {
    let n;
    return t && (typeof FormData == "function" && t instanceof FormData || at(t.append) && ((n = ri(t)) === "formdata" || // detect form-data instance
    n === "object" && at(t.toString) && t.toString() === "[object FormData]"));
  }, Um = Ot("URLSearchParams"), [qm, Wm, Xm, Ym] = ["ReadableStream", "Request", "Response", "Headers"].map(Ot), $m = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
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
  function Rf(t, n) {
    n = n.toLowerCase();
    const e = Object.keys(t);
    let r = e.length, o;
    for (; r-- > 0; )
      if (o = e[r], n === o.toLowerCase())
        return o;
    return null;
  }
  const pn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, kf = (t) => !Sr(t) && t !== pn;
  function Ps() {
    const { caseless: t } = kf(this) && this || {}, n = {}, e = (r, o) => {
      const i = t && Rf(n, o) || o;
      lo(n[i]) && lo(r) ? n[i] = Ps(n[i], r) : lo(r) ? n[i] = Ps({}, r) : Jn(r) ? n[i] = r.slice() : n[i] = r;
    };
    for (let r = 0, o = arguments.length; r < o; r++)
      arguments[r] && Ar(arguments[r], e);
    return n;
  }
  const Gm = (t, n, e, { allOwnKeys: r } = {}) => (Ar(n, (o, i) => {
    e && at(o) ? t[i] = Cf(o, e) : t[i] = o;
  }, { allOwnKeys: r }), t), Km = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), Zm = (t, n, e, r) => {
    t.prototype = Object.create(n.prototype, r), t.prototype.constructor = t, Object.defineProperty(t, "super", {
      value: n.prototype
    }), e && Object.assign(t.prototype, e);
  }, Jm = (t, n, e, r) => {
    let o, i, s;
    const a = {};
    if (n = n || {}, t == null) return n;
    do {
      for (o = Object.getOwnPropertyNames(t), i = o.length; i-- > 0; )
        s = o[i], (!r || r(s, t, n)) && !a[s] && (n[s] = t[s], a[s] = !0);
      t = e !== !1 && ha(t);
    } while (t && (!e || e(t, n)) && t !== Object.prototype);
    return n;
  }, Qm = (t, n, e) => {
    t = String(t), (e === void 0 || e > t.length) && (e = t.length), e -= n.length;
    const r = t.indexOf(n, e);
    return r !== -1 && r === e;
  }, eg = (t) => {
    if (!t) return null;
    if (Jn(t)) return t;
    let n = t.length;
    if (!Of(n)) return null;
    const e = new Array(n);
    for (; n-- > 0; )
      e[n] = t[n];
    return e;
  }, tg = /* @__PURE__ */ ((t) => (n) => t && n instanceof t)(typeof Uint8Array < "u" && ha(Uint8Array)), ng = (t, n) => {
    const r = (t && t[ni]).call(t);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const i = o.value;
      n.call(t, i[0], i[1]);
    }
  }, rg = (t, n) => {
    let e;
    const r = [];
    for (; (e = t.exec(n)) !== null; )
      r.push(e);
    return r;
  }, og = Ot("HTMLFormElement"), ig = (t) => t.toLowerCase().replace(
    /[-_\s]([a-z\d])(\w*)/g,
    function(e, r, o) {
      return r.toUpperCase() + o;
    }
  ), Dc = (({ hasOwnProperty: t }) => (n, e) => t.call(n, e))(Object.prototype), sg = Ot("RegExp"), Pf = (t, n) => {
    const e = Object.getOwnPropertyDescriptors(t), r = {};
    Ar(e, (o, i) => {
      let s;
      (s = n(o, i, t)) !== !1 && (r[i] = s || o);
    }), Object.defineProperties(t, r);
  }, ag = (t) => {
    Pf(t, (n, e) => {
      if (at(t) && ["arguments", "caller", "callee"].indexOf(e) !== -1)
        return !1;
      const r = t[e];
      if (at(r)) {
        if (n.enumerable = !1, "writable" in n) {
          n.writable = !1;
          return;
        }
        n.set || (n.set = () => {
          throw Error("Can not rewrite read-only method '" + e + "'");
        });
      }
    });
  }, cg = (t, n) => {
    const e = {}, r = (o) => {
      o.forEach((i) => {
        e[i] = !0;
      });
    };
    return Jn(t) ? r(t) : r(String(t).split(n)), e;
  }, lg = () => {
  }, ug = (t, n) => t != null && Number.isFinite(t = +t) ? t : n;
  function fg(t) {
    return !!(t && at(t.append) && t[Af] === "FormData" && t[ni]);
  }
  const dg = (t) => {
    const n = new Array(10), e = (r, o) => {
      if (ii(r)) {
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
  }, hg = Ot("AsyncFunction"), xg = (t) => t && (ii(t) || at(t)) && at(t.then) && at(t.catch), If = ((t, n) => t ? setImmediate : n ? ((e, r) => (pn.addEventListener("message", ({ source: o, data: i }) => {
    o === pn && i === e && r.length && r.shift()();
  }, !1), (o) => {
    r.push(o), pn.postMessage(e, "*");
  }))(`axios@${Math.random()}`, []) : (e) => setTimeout(e))(
    typeof setImmediate == "function",
    at(pn.postMessage)
  ), pg = typeof queueMicrotask < "u" ? queueMicrotask.bind(pn) : typeof process < "u" && process.nextTick || If, mg = (t) => t != null && at(t[ni]), T = {
    isArray: Jn,
    isArrayBuffer: Tf,
    isBuffer: Nm,
    isFormData: Hm,
    isArrayBufferView: jm,
    isString: Lm,
    isNumber: Of,
    isBoolean: Mm,
    isObject: ii,
    isPlainObject: lo,
    isReadableStream: qm,
    isRequest: Wm,
    isResponse: Xm,
    isHeaders: Ym,
    isUndefined: Sr,
    isDate: Dm,
    isFile: Bm,
    isBlob: Fm,
    isRegExp: sg,
    isFunction: at,
    isStream: Vm,
    isURLSearchParams: Um,
    isTypedArray: tg,
    isFileList: zm,
    forEach: Ar,
    merge: Ps,
    extend: Gm,
    trim: $m,
    stripBOM: Km,
    inherits: Zm,
    toFlatObject: Jm,
    kindOf: ri,
    kindOfTest: Ot,
    endsWith: Qm,
    toArray: eg,
    forEachEntry: ng,
    matchAll: rg,
    isHTMLForm: og,
    hasOwnProperty: Dc,
    hasOwnProp: Dc,
    // an alias to avoid ESLint no-prototype-builtins detection
    reduceDescriptors: Pf,
    freezeMethods: ag,
    toObjectSet: cg,
    toCamelCase: ig,
    noop: lg,
    toFiniteNumber: ug,
    findKey: Rf,
    global: pn,
    isContextDefined: kf,
    isSpecCompliantForm: fg,
    toJSONObject: dg,
    isAsyncFn: hg,
    isThenable: xg,
    setImmediate: If,
    asap: pg,
    isIterable: mg
  };
  function re(t, n, e, r, o) {
    Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", n && (this.code = n), e && (this.config = e), r && (this.request = r), o && (this.response = o, this.status = o.status ? o.status : null);
  }
  T.inherits(re, Error, {
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
  const Nf = re.prototype, jf = {};
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
    jf[t] = { value: t };
  });
  Object.defineProperties(re, jf);
  Object.defineProperty(Nf, "isAxiosError", { value: !0 });
  re.from = (t, n, e, r, o, i) => {
    const s = Object.create(Nf);
    return T.toFlatObject(t, s, function(c) {
      return c !== Error.prototype;
    }, (a) => a !== "isAxiosError"), re.call(s, t.message, n, e, r, o), s.cause = t, s.name = t.name, i && Object.assign(s, i), s;
  };
  const gg = null;
  function Is(t) {
    return T.isPlainObject(t) || T.isArray(t);
  }
  function Lf(t) {
    return T.endsWith(t, "[]") ? t.slice(0, -2) : t;
  }
  function Bc(t, n, e) {
    return t ? t.concat(n).map(function(o, i) {
      return o = Lf(o), !e && i ? "[" + o + "]" : o;
    }).join(e ? "." : "") : n;
  }
  function vg(t) {
    return T.isArray(t) && !t.some(Is);
  }
  const bg = T.toFlatObject(T, {}, null, function(n) {
    return /^is[A-Z]/.test(n);
  });
  function si(t, n, e) {
    if (!T.isObject(t))
      throw new TypeError("target must be an object");
    n = n || new FormData(), e = T.toFlatObject(e, {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    }, !1, function(h, x) {
      return !T.isUndefined(x[h]);
    });
    const r = e.metaTokens, o = e.visitor || d, i = e.dots, s = e.indexes, c = (e.Blob || typeof Blob < "u" && Blob) && T.isSpecCompliantForm(n);
    if (!T.isFunction(o))
      throw new TypeError("visitor must be a function");
    function l(g) {
      if (g === null) return "";
      if (T.isDate(g))
        return g.toISOString();
      if (!c && T.isBlob(g))
        throw new re("Blob is not supported. Use a Buffer instead.");
      return T.isArrayBuffer(g) || T.isTypedArray(g) ? c && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
    }
    function d(g, h, x) {
      let w = g;
      if (g && !x && typeof g == "object") {
        if (T.endsWith(h, "{}"))
          h = r ? h : h.slice(0, -2), g = JSON.stringify(g);
        else if (T.isArray(g) && vg(g) || (T.isFileList(g) || T.endsWith(h, "[]")) && (w = T.toArray(g)))
          return h = Lf(h), w.forEach(function(m, A) {
            !(T.isUndefined(m) || m === null) && n.append(
              // eslint-disable-next-line no-nested-ternary
              s === !0 ? Bc([h], A, i) : s === null ? h : h + "[]",
              l(m)
            );
          }), !1;
      }
      return Is(g) ? !0 : (n.append(Bc(x, h, i), l(g)), !1);
    }
    const f = [], u = Object.assign(bg, {
      defaultVisitor: d,
      convertValue: l,
      isVisitable: Is
    });
    function v(g, h) {
      if (!T.isUndefined(g)) {
        if (f.indexOf(g) !== -1)
          throw Error("Circular reference detected in " + h.join("."));
        f.push(g), T.forEach(g, function(w, y) {
          (!(T.isUndefined(w) || w === null) && o.call(
            n,
            w,
            T.isString(y) ? y.trim() : y,
            h,
            u
          )) === !0 && v(w, h ? h.concat(y) : [y]);
        }), f.pop();
      }
    }
    if (!T.isObject(t))
      throw new TypeError("data must be an object");
    return v(t), n;
  }
  function Fc(t) {
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
  function xa(t, n) {
    this._pairs = [], t && si(t, this, n);
  }
  const Mf = xa.prototype;
  Mf.append = function(n, e) {
    this._pairs.push([n, e]);
  };
  Mf.toString = function(n) {
    const e = n ? function(r) {
      return n.call(this, r, Fc);
    } : Fc;
    return this._pairs.map(function(o) {
      return e(o[0]) + "=" + e(o[1]);
    }, "").join("&");
  };
  function yg(t) {
    return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  function Df(t, n, e) {
    if (!n)
      return t;
    const r = e && e.encode || yg;
    T.isFunction(e) && (e = {
      serialize: e
    });
    const o = e && e.serialize;
    let i;
    if (o ? i = o(n, e) : i = T.isURLSearchParams(n) ? n.toString() : new xa(n, e).toString(r), i) {
      const s = t.indexOf("#");
      s !== -1 && (t = t.slice(0, s)), t += (t.indexOf("?") === -1 ? "?" : "&") + i;
    }
    return t;
  }
  class zc {
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
  const Bf = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
  }, Sg = typeof URLSearchParams < "u" ? URLSearchParams : xa, wg = typeof FormData < "u" ? FormData : null, Eg = typeof Blob < "u" ? Blob : null, _g = {
    isBrowser: !0,
    classes: {
      URLSearchParams: Sg,
      FormData: wg,
      Blob: Eg
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
  }, pa = typeof window < "u" && typeof document < "u", Ns = typeof navigator == "object" && navigator || void 0, Cg = pa && (!Ns || ["ReactNative", "NativeScript", "NS"].indexOf(Ns.product) < 0), Ag = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
  self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Tg = pa && window.location.href || "http://localhost", Og = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    hasBrowserEnv: pa,
    hasStandardBrowserEnv: Cg,
    hasStandardBrowserWebWorkerEnv: Ag,
    navigator: Ns,
    origin: Tg
  }, Symbol.toStringTag, { value: "Module" })), Qe = {
    ...Og,
    ..._g
  };
  function Rg(t, n) {
    return si(t, new Qe.classes.URLSearchParams(), Object.assign({
      visitor: function(e, r, o, i) {
        return Qe.isNode && T.isBuffer(e) ? (this.append(r, e.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
      }
    }, n));
  }
  function kg(t) {
    return T.matchAll(/\w+|\[(\w*)]/g, t).map((n) => n[0] === "[]" ? "" : n[1] || n[0]);
  }
  function Pg(t) {
    const n = {}, e = Object.keys(t);
    let r;
    const o = e.length;
    let i;
    for (r = 0; r < o; r++)
      i = e[r], n[i] = t[i];
    return n;
  }
  function Ff(t) {
    function n(e, r, o, i) {
      let s = e[i++];
      if (s === "__proto__") return !0;
      const a = Number.isFinite(+s), c = i >= e.length;
      return s = !s && T.isArray(o) ? o.length : s, c ? (T.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !a) : ((!o[s] || !T.isObject(o[s])) && (o[s] = []), n(e, r, o[s], i) && T.isArray(o[s]) && (o[s] = Pg(o[s])), !a);
    }
    if (T.isFormData(t) && T.isFunction(t.entries)) {
      const e = {};
      return T.forEachEntry(t, (r, o) => {
        n(kg(r), o, e, 0);
      }), e;
    }
    return null;
  }
  function Ig(t, n, e) {
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
    transitional: Bf,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function(n, e) {
      const r = e.getContentType() || "", o = r.indexOf("application/json") > -1, i = T.isObject(n);
      if (i && T.isHTMLForm(n) && (n = new FormData(n)), T.isFormData(n))
        return o ? JSON.stringify(Ff(n)) : n;
      if (T.isArrayBuffer(n) || T.isBuffer(n) || T.isStream(n) || T.isFile(n) || T.isBlob(n) || T.isReadableStream(n))
        return n;
      if (T.isArrayBufferView(n))
        return n.buffer;
      if (T.isURLSearchParams(n))
        return e.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), n.toString();
      let a;
      if (i) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return Rg(n, this.formSerializer).toString();
        if ((a = T.isFileList(n)) || r.indexOf("multipart/form-data") > -1) {
          const c = this.env && this.env.FormData;
          return si(
            a ? { "files[]": n } : n,
            c && new c(),
            this.formSerializer
          );
        }
      }
      return i || o ? (e.setContentType("application/json", !1), Ig(n)) : n;
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
            throw a.name === "SyntaxError" ? re.from(a, re.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
  T.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
    Tr.headers[t] = {};
  });
  const Ng = T.toObjectSet([
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
  ]), jg = (t) => {
    const n = {};
    let e, r, o;
    return t && t.split(`
`).forEach(function(s) {
      o = s.indexOf(":"), e = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!e || n[e] && Ng[e]) && (e === "set-cookie" ? n[e] ? n[e].push(r) : n[e] = [r] : n[e] = n[e] ? n[e] + ", " + r : r);
    }), n;
  }, Vc = Symbol("internals");
  function ar(t) {
    return t && String(t).trim().toLowerCase();
  }
  function uo(t) {
    return t === !1 || t == null ? t : T.isArray(t) ? t.map(uo) : String(t);
  }
  function Lg(t) {
    const n = /* @__PURE__ */ Object.create(null), e = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let r;
    for (; r = e.exec(t); )
      n[r[1]] = r[2];
    return n;
  }
  const Mg = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
  function Ii(t, n, e, r, o) {
    if (T.isFunction(r))
      return r.call(this, n, e);
    if (o && (n = e), !!T.isString(n)) {
      if (T.isString(r))
        return n.indexOf(r) !== -1;
      if (T.isRegExp(r))
        return r.test(n);
    }
  }
  function Dg(t) {
    return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (n, e, r) => e.toUpperCase() + r);
  }
  function Bg(t, n) {
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
  let ct = class {
    constructor(n) {
      n && this.set(n);
    }
    set(n, e, r) {
      const o = this;
      function i(a, c, l) {
        const d = ar(c);
        if (!d)
          throw new Error("header name must be a non-empty string");
        const f = T.findKey(o, d);
        (!f || o[f] === void 0 || l === !0 || l === void 0 && o[f] !== !1) && (o[f || c] = uo(a));
      }
      const s = (a, c) => T.forEach(a, (l, d) => i(l, d, c));
      if (T.isPlainObject(n) || n instanceof this.constructor)
        s(n, e);
      else if (T.isString(n) && (n = n.trim()) && !Mg(n))
        s(jg(n), e);
      else if (T.isObject(n) && T.isIterable(n)) {
        let a = {}, c, l;
        for (const d of n) {
          if (!T.isArray(d))
            throw TypeError("Object iterator must return a key-value pair");
          a[l = d[0]] = (c = a[l]) ? T.isArray(c) ? [...c, d[1]] : [c, d[1]] : d[1];
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
            return Lg(o);
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
        return !!(r && this[r] !== void 0 && (!e || Ii(this, this[r], r, e)));
      }
      return !1;
    }
    delete(n, e) {
      const r = this;
      let o = !1;
      function i(s) {
        if (s = ar(s), s) {
          const a = T.findKey(r, s);
          a && (!e || Ii(r, r[a], a, e)) && (delete r[a], o = !0);
        }
      }
      return T.isArray(n) ? n.forEach(i) : i(n), o;
    }
    clear(n) {
      const e = Object.keys(this);
      let r = e.length, o = !1;
      for (; r--; ) {
        const i = e[r];
        (!n || Ii(this, this[i], i, n, !0)) && (delete this[i], o = !0);
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
        const a = n ? Dg(i) : String(i).trim();
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
      const r = (this[Vc] = this[Vc] = {
        accessors: {}
      }).accessors, o = this.prototype;
      function i(s) {
        const a = ar(s);
        r[a] || (Bg(o, s), r[a] = !0);
      }
      return T.isArray(n) ? n.forEach(i) : i(n), this;
    }
  };
  ct.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
  T.reduceDescriptors(ct.prototype, ({ value: t }, n) => {
    let e = n[0].toUpperCase() + n.slice(1);
    return {
      get: () => t,
      set(r) {
        this[e] = r;
      }
    };
  });
  T.freezeMethods(ct);
  function Ni(t, n) {
    const e = this || Tr, r = n || e, o = ct.from(r.headers);
    let i = r.data;
    return T.forEach(t, function(a) {
      i = a.call(e, i, o.normalize(), n ? n.status : void 0);
    }), o.normalize(), i;
  }
  function zf(t) {
    return !!(t && t.__CANCEL__);
  }
  function Qn(t, n, e) {
    re.call(this, t ?? "canceled", re.ERR_CANCELED, n, e), this.name = "CanceledError";
  }
  T.inherits(Qn, re, {
    __CANCEL__: !0
  });
  function Vf(t, n, e) {
    const r = e.config.validateStatus;
    !e.status || !r || r(e.status) ? t(e) : n(new re(
      "Request failed with status code " + e.status,
      [re.ERR_BAD_REQUEST, re.ERR_BAD_RESPONSE][Math.floor(e.status / 100) - 4],
      e.config,
      e.request,
      e
    ));
  }
  function Fg(t) {
    const n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
    return n && n[1] || "";
  }
  function zg(t, n) {
    t = t || 10;
    const e = new Array(t), r = new Array(t);
    let o = 0, i = 0, s;
    return n = n !== void 0 ? n : 1e3, function(c) {
      const l = Date.now(), d = r[i];
      s || (s = l), e[o] = c, r[o] = l;
      let f = i, u = 0;
      for (; f !== o; )
        u += e[f++], f = f % t;
      if (o = (o + 1) % t, o === i && (i = (i + 1) % t), l - s < n)
        return;
      const v = d && l - d;
      return v ? Math.round(u * 1e3 / v) : void 0;
    };
  }
  function Vg(t, n) {
    let e = 0, r = 1e3 / n, o, i;
    const s = (l, d = Date.now()) => {
      e = d, o = null, i && (clearTimeout(i), i = null), t.apply(null, l);
    };
    return [(...l) => {
      const d = Date.now(), f = d - e;
      f >= r ? s(l, d) : (o = l, i || (i = setTimeout(() => {
        i = null, s(o);
      }, r - f)));
    }, () => o && s(o)];
  }
  const Ao = (t, n, e = 3) => {
    let r = 0;
    const o = zg(50, 250);
    return Vg((i) => {
      const s = i.loaded, a = i.lengthComputable ? i.total : void 0, c = s - r, l = o(c), d = s <= a;
      r = s;
      const f = {
        loaded: s,
        total: a,
        progress: a ? s / a : void 0,
        bytes: c,
        rate: l || void 0,
        estimated: l && a && d ? (a - s) / l : void 0,
        event: i,
        lengthComputable: a != null,
        [n ? "download" : "upload"]: !0
      };
      t(f);
    }, e);
  }, Hc = (t, n) => {
    const e = t != null;
    return [(r) => n[0]({
      lengthComputable: e,
      total: t,
      loaded: r
    }), n[1]];
  }, Uc = (t) => (...n) => T.asap(() => t(...n)), Hg = Qe.hasStandardBrowserEnv ? /* @__PURE__ */ ((t, n) => (e) => (e = new URL(e, Qe.origin), t.protocol === e.protocol && t.host === e.host && (n || t.port === e.port)))(
    new URL(Qe.origin),
    Qe.navigator && /(msie|trident)/i.test(Qe.navigator.userAgent)
  ) : () => !0, Ug = Qe.hasStandardBrowserEnv ? (
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
  function qg(t) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
  }
  function Wg(t, n) {
    return n ? t.replace(/\/?\/$/, "") + "/" + n.replace(/^\/+/, "") : t;
  }
  function Hf(t, n, e) {
    let r = !qg(n);
    return t && (r || e == !1) ? Wg(t, n) : n;
  }
  const qc = (t) => t instanceof ct ? { ...t } : t;
  function _n(t, n) {
    n = n || {};
    const e = {};
    function r(l, d, f, u) {
      return T.isPlainObject(l) && T.isPlainObject(d) ? T.merge.call({ caseless: u }, l, d) : T.isPlainObject(d) ? T.merge({}, d) : T.isArray(d) ? d.slice() : d;
    }
    function o(l, d, f, u) {
      if (T.isUndefined(d)) {
        if (!T.isUndefined(l))
          return r(void 0, l, f, u);
      } else return r(l, d, f, u);
    }
    function i(l, d) {
      if (!T.isUndefined(d))
        return r(void 0, d);
    }
    function s(l, d) {
      if (T.isUndefined(d)) {
        if (!T.isUndefined(l))
          return r(void 0, l);
      } else return r(void 0, d);
    }
    function a(l, d, f) {
      if (f in n)
        return r(l, d);
      if (f in t)
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
      headers: (l, d, f) => o(qc(l), qc(d), f, !0)
    };
    return T.forEach(Object.keys(Object.assign({}, t, n)), function(d) {
      const f = c[d] || o, u = f(t[d], n[d], d);
      T.isUndefined(u) && f !== a || (e[d] = u);
    }), e;
  }
  const Uf = (t) => {
    const n = _n({}, t);
    let { data: e, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: i, headers: s, auth: a } = n;
    n.headers = s = ct.from(s), n.url = Df(Hf(n.baseURL, n.url, n.allowAbsoluteUrls), t.params, t.paramsSerializer), a && s.set(
      "Authorization",
      "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
    );
    let c;
    if (T.isFormData(e)) {
      if (Qe.hasStandardBrowserEnv || Qe.hasStandardBrowserWebWorkerEnv)
        s.setContentType(void 0);
      else if ((c = s.getContentType()) !== !1) {
        const [l, ...d] = c ? c.split(";").map((f) => f.trim()).filter(Boolean) : [];
        s.setContentType([l || "multipart/form-data", ...d].join("; "));
      }
    }
    if (Qe.hasStandardBrowserEnv && (r && T.isFunction(r) && (r = r(n)), r || r !== !1 && Hg(n.url))) {
      const l = o && i && Ug.read(i);
      l && s.set(o, l);
    }
    return n;
  }, Xg = typeof XMLHttpRequest < "u", Yg = Xg && function(t) {
    return new Promise(function(e, r) {
      const o = Uf(t);
      let i = o.data;
      const s = ct.from(o.headers).normalize();
      let { responseType: a, onUploadProgress: c, onDownloadProgress: l } = o, d, f, u, v, g;
      function h() {
        v && v(), g && g(), o.cancelToken && o.cancelToken.unsubscribe(d), o.signal && o.signal.removeEventListener("abort", d);
      }
      let x = new XMLHttpRequest();
      x.open(o.method.toUpperCase(), o.url, !0), x.timeout = o.timeout;
      function w() {
        if (!x)
          return;
        const m = ct.from(
          "getAllResponseHeaders" in x && x.getAllResponseHeaders()
        ), b = {
          data: !a || a === "text" || a === "json" ? x.responseText : x.response,
          status: x.status,
          statusText: x.statusText,
          headers: m,
          config: t,
          request: x
        };
        Vf(function(C) {
          e(C), h();
        }, function(C) {
          r(C), h();
        }, b), x = null;
      }
      "onloadend" in x ? x.onloadend = w : x.onreadystatechange = function() {
        !x || x.readyState !== 4 || x.status === 0 && !(x.responseURL && x.responseURL.indexOf("file:") === 0) || setTimeout(w);
      }, x.onabort = function() {
        x && (r(new re("Request aborted", re.ECONNABORTED, t, x)), x = null);
      }, x.onerror = function() {
        r(new re("Network Error", re.ERR_NETWORK, t, x)), x = null;
      }, x.ontimeout = function() {
        let A = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
        const b = o.transitional || Bf;
        o.timeoutErrorMessage && (A = o.timeoutErrorMessage), r(new re(
          A,
          b.clarifyTimeoutError ? re.ETIMEDOUT : re.ECONNABORTED,
          t,
          x
        )), x = null;
      }, i === void 0 && s.setContentType(null), "setRequestHeader" in x && T.forEach(s.toJSON(), function(A, b) {
        x.setRequestHeader(b, A);
      }), T.isUndefined(o.withCredentials) || (x.withCredentials = !!o.withCredentials), a && a !== "json" && (x.responseType = o.responseType), l && ([u, g] = Ao(l, !0), x.addEventListener("progress", u)), c && x.upload && ([f, v] = Ao(c), x.upload.addEventListener("progress", f), x.upload.addEventListener("loadend", v)), (o.cancelToken || o.signal) && (d = (m) => {
        x && (r(!m || m.type ? new Qn(null, t, x) : m), x.abort(), x = null);
      }, o.cancelToken && o.cancelToken.subscribe(d), o.signal && (o.signal.aborted ? d() : o.signal.addEventListener("abort", d)));
      const y = Fg(o.url);
      if (y && Qe.protocols.indexOf(y) === -1) {
        r(new re("Unsupported protocol " + y + ":", re.ERR_BAD_REQUEST, t));
        return;
      }
      x.send(i || null);
    });
  }, $g = (t, n) => {
    const { length: e } = t = t ? t.filter(Boolean) : [];
    if (n || e) {
      let r = new AbortController(), o;
      const i = function(l) {
        if (!o) {
          o = !0, a();
          const d = l instanceof Error ? l : this.reason;
          r.abort(d instanceof re ? d : new Qn(d instanceof Error ? d.message : d));
        }
      };
      let s = n && setTimeout(() => {
        s = null, i(new re(`timeout ${n} of ms exceeded`, re.ETIMEDOUT));
      }, n);
      const a = () => {
        t && (s && clearTimeout(s), s = null, t.forEach((l) => {
          l.unsubscribe ? l.unsubscribe(i) : l.removeEventListener("abort", i);
        }), t = null);
      };
      t.forEach((l) => l.addEventListener("abort", i));
      const { signal: c } = r;
      return c.unsubscribe = () => T.asap(a), c;
    }
  }, Gg = function* (t, n) {
    let e = t.byteLength;
    if (e < n) {
      yield t;
      return;
    }
    let r = 0, o;
    for (; r < e; )
      o = r + n, yield t.slice(r, o), r = o;
  }, Kg = async function* (t, n) {
    for await (const e of Zg(t))
      yield* Gg(e, n);
  }, Zg = async function* (t) {
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
  }, Wc = (t, n, e, r) => {
    const o = Kg(t, n);
    let i = 0, s, a = (c) => {
      s || (s = !0, r && r(c));
    };
    return new ReadableStream({
      async pull(c) {
        try {
          const { done: l, value: d } = await o.next();
          if (l) {
            a(), c.close();
            return;
          }
          let f = d.byteLength;
          if (e) {
            let u = i += f;
            e(u);
          }
          c.enqueue(new Uint8Array(d));
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
  }, ai = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", qf = ai && typeof ReadableStream == "function", Jg = ai && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((t) => (n) => t.encode(n))(new TextEncoder()) : async (t) => new Uint8Array(await new Response(t).arrayBuffer())), Wf = (t, ...n) => {
    try {
      return !!t(...n);
    } catch {
      return !1;
    }
  }, Qg = qf && Wf(() => {
    let t = !1;
    const n = new Request(Qe.origin, {
      body: new ReadableStream(),
      method: "POST",
      get duplex() {
        return t = !0, "half";
      }
    }).headers.has("Content-Type");
    return t && !n;
  }), Xc = 64 * 1024, js = qf && Wf(() => T.isReadableStream(new Response("").body)), To = {
    stream: js && ((t) => t.body)
  };
  ai && ((t) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((n) => {
      !To[n] && (To[n] = T.isFunction(t[n]) ? (e) => e[n]() : (e, r) => {
        throw new re(`Response type '${n}' is not supported`, re.ERR_NOT_SUPPORT, r);
      });
    });
  })(new Response());
  const ev = async (t) => {
    if (t == null)
      return 0;
    if (T.isBlob(t))
      return t.size;
    if (T.isSpecCompliantForm(t))
      return (await new Request(Qe.origin, {
        method: "POST",
        body: t
      }).arrayBuffer()).byteLength;
    if (T.isArrayBufferView(t) || T.isArrayBuffer(t))
      return t.byteLength;
    if (T.isURLSearchParams(t) && (t = t + ""), T.isString(t))
      return (await Jg(t)).byteLength;
  }, tv = async (t, n) => {
    const e = T.toFiniteNumber(t.getContentLength());
    return e ?? ev(n);
  }, nv = ai && (async (t) => {
    let {
      url: n,
      method: e,
      data: r,
      signal: o,
      cancelToken: i,
      timeout: s,
      onDownloadProgress: a,
      onUploadProgress: c,
      responseType: l,
      headers: d,
      withCredentials: f = "same-origin",
      fetchOptions: u
    } = Uf(t);
    l = l ? (l + "").toLowerCase() : "text";
    let v = $g([o, i && i.toAbortSignal()], s), g;
    const h = v && v.unsubscribe && (() => {
      v.unsubscribe();
    });
    let x;
    try {
      if (c && Qg && e !== "get" && e !== "head" && (x = await tv(d, r)) !== 0) {
        let b = new Request(n, {
          method: "POST",
          body: r,
          duplex: "half"
        }), O;
        if (T.isFormData(r) && (O = b.headers.get("content-type")) && d.setContentType(O), b.body) {
          const [C, L] = Hc(
            x,
            Ao(Uc(c))
          );
          r = Wc(b.body, Xc, C, L);
        }
      }
      T.isString(f) || (f = f ? "include" : "omit");
      const w = "credentials" in Request.prototype;
      g = new Request(n, {
        ...u,
        signal: v,
        method: e.toUpperCase(),
        headers: d.normalize().toJSON(),
        body: r,
        duplex: "half",
        credentials: w ? f : void 0
      });
      let y = await fetch(g);
      const m = js && (l === "stream" || l === "response");
      if (js && (a || m && h)) {
        const b = {};
        ["status", "statusText", "headers"].forEach((F) => {
          b[F] = y[F];
        });
        const O = T.toFiniteNumber(y.headers.get("content-length")), [C, L] = a && Hc(
          O,
          Ao(Uc(a), !0)
        ) || [];
        y = new Response(
          Wc(y.body, Xc, C, () => {
            L && L(), h && h();
          }),
          b
        );
      }
      l = l || "text";
      let A = await To[T.findKey(To, l) || "text"](y, t);
      return !m && h && h(), await new Promise((b, O) => {
        Vf(b, O, {
          data: A,
          headers: ct.from(y.headers),
          status: y.status,
          statusText: y.statusText,
          config: t,
          request: g
        });
      });
    } catch (w) {
      throw h && h(), w && w.name === "TypeError" && /Load failed|fetch/i.test(w.message) ? Object.assign(
        new re("Network Error", re.ERR_NETWORK, t, g),
        {
          cause: w.cause || w
        }
      ) : re.from(w, w && w.code, t, g);
    }
  }), Ls = {
    http: gg,
    xhr: Yg,
    fetch: nv
  };
  T.forEach(Ls, (t, n) => {
    if (t) {
      try {
        Object.defineProperty(t, "name", { value: n });
      } catch {
      }
      Object.defineProperty(t, "adapterName", { value: n });
    }
  });
  const Yc = (t) => `- ${t}`, rv = (t) => T.isFunction(t) || t === null || t === !1, Xf = {
    getAdapter: (t) => {
      t = T.isArray(t) ? t : [t];
      const { length: n } = t;
      let e, r;
      const o = {};
      for (let i = 0; i < n; i++) {
        e = t[i];
        let s;
        if (r = e, !rv(e) && (r = Ls[(s = String(e)).toLowerCase()], r === void 0))
          throw new re(`Unknown adapter '${s}'`);
        if (r)
          break;
        o[s || "#" + i] = r;
      }
      if (!r) {
        const i = Object.entries(o).map(
          ([a, c]) => `adapter ${a} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
        );
        let s = n ? i.length > 1 ? `since :
` + i.map(Yc).join(`
`) : " " + Yc(i[0]) : "as no adapter specified";
        throw new re(
          "There is no suitable adapter to dispatch the request " + s,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: Ls
  };
  function ji(t) {
    if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
      throw new Qn(null, t);
  }
  function $c(t) {
    return ji(t), t.headers = ct.from(t.headers), t.data = Ni.call(
      t,
      t.transformRequest
    ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), Xf.getAdapter(t.adapter || Tr.adapter)(t).then(function(r) {
      return ji(t), r.data = Ni.call(
        t,
        t.transformResponse,
        r
      ), r.headers = ct.from(r.headers), r;
    }, function(r) {
      return zf(r) || (ji(t), r && r.response && (r.response.data = Ni.call(
        t,
        t.transformResponse,
        r.response
      ), r.response.headers = ct.from(r.response.headers))), Promise.reject(r);
    });
  }
  const Yf = "1.9.0", ci = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach((t, n) => {
    ci[t] = function(r) {
      return typeof r === t || "a" + (n < 1 ? "n " : " ") + t;
    };
  });
  const Gc = {};
  ci.transitional = function(n, e, r) {
    function o(i, s) {
      return "[Axios v" + Yf + "] Transitional option '" + i + "'" + s + (r ? ". " + r : "");
    }
    return (i, s, a) => {
      if (n === !1)
        throw new re(
          o(s, " has been removed" + (e ? " in " + e : "")),
          re.ERR_DEPRECATED
        );
      return e && !Gc[s] && (Gc[s] = !0, console.warn(
        o(
          s,
          " has been deprecated since v" + e + " and will be removed in the near future"
        )
      )), n ? n(i, s, a) : !0;
    };
  };
  ci.spelling = function(n) {
    return (e, r) => (console.warn(`${r} is likely a misspelling of ${n}`), !0);
  };
  function ov(t, n, e) {
    if (typeof t != "object")
      throw new re("options must be an object", re.ERR_BAD_OPTION_VALUE);
    const r = Object.keys(t);
    let o = r.length;
    for (; o-- > 0; ) {
      const i = r[o], s = n[i];
      if (s) {
        const a = t[i], c = a === void 0 || s(a, i, t);
        if (c !== !0)
          throw new re("option " + i + " must be " + c, re.ERR_BAD_OPTION_VALUE);
        continue;
      }
      if (e !== !0)
        throw new re("Unknown option " + i, re.ERR_BAD_OPTION);
    }
  }
  const fo = {
    assertOptions: ov,
    validators: ci
  }, Nt = fo.validators;
  let wn = class {
    constructor(n) {
      this.defaults = n || {}, this.interceptors = {
        request: new zc(),
        response: new zc()
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
      ), e.headers = ct.concat(s, i);
      const a = [];
      let c = !0;
      this.interceptors.request.forEach(function(h) {
        typeof h.runWhen == "function" && h.runWhen(e) === !1 || (c = c && h.synchronous, a.unshift(h.fulfilled, h.rejected));
      });
      const l = [];
      this.interceptors.response.forEach(function(h) {
        l.push(h.fulfilled, h.rejected);
      });
      let d, f = 0, u;
      if (!c) {
        const g = [$c.bind(this), void 0];
        for (g.unshift.apply(g, a), g.push.apply(g, l), u = g.length, d = Promise.resolve(e); f < u; )
          d = d.then(g[f++], g[f++]);
        return d;
      }
      u = a.length;
      let v = e;
      for (f = 0; f < u; ) {
        const g = a[f++], h = a[f++];
        try {
          v = g(v);
        } catch (x) {
          h.call(this, x);
          break;
        }
      }
      try {
        d = $c.call(this, v);
      } catch (g) {
        return Promise.reject(g);
      }
      for (f = 0, u = l.length; f < u; )
        d = d.then(l[f++], l[f++]);
      return d;
    }
    getUri(n) {
      n = _n(this.defaults, n);
      const e = Hf(n.baseURL, n.url, n.allowAbsoluteUrls);
      return Df(e, n.params, n.paramsSerializer);
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
  let iv = class $f {
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
        token: new $f(function(o) {
          n = o;
        }),
        cancel: n
      };
    }
  };
  function sv(t) {
    return function(e) {
      return t.apply(null, e);
    };
  }
  function av(t) {
    return T.isObject(t) && t.isAxiosError === !0;
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
  function Gf(t) {
    const n = new wn(t), e = Cf(wn.prototype.request, n);
    return T.extend(e, wn.prototype, n, { allOwnKeys: !0 }), T.extend(e, n, null, { allOwnKeys: !0 }), e.create = function(o) {
      return Gf(_n(t, o));
    }, e;
  }
  const Le = Gf(Tr);
  Le.Axios = wn;
  Le.CanceledError = Qn;
  Le.CancelToken = iv;
  Le.isCancel = zf;
  Le.VERSION = Yf;
  Le.toFormData = si;
  Le.AxiosError = re;
  Le.Cancel = Le.CanceledError;
  Le.all = function(n) {
    return Promise.all(n);
  };
  Le.spread = sv;
  Le.isAxiosError = av;
  Le.mergeConfig = _n;
  Le.AxiosHeaders = ct;
  Le.formToJSON = (t) => Ff(T.isHTMLForm(t) ? new FormData(t) : t);
  Le.getAdapter = Xf.getAdapter;
  Le.HttpStatusCode = Ms;
  Le.default = Le;
  const {
    Axios: Iv,
    AxiosError: Nv,
    CanceledError: jv,
    isCancel: Lv,
    CancelToken: Mv,
    VERSION: Dv,
    all: Bv,
    Cancel: Fv,
    isAxiosError: zv,
    spread: Vv,
    toFormData: Hv,
    AxiosHeaders: Uv,
    HttpStatusCode: qv,
    formToJSON: Wv,
    getAdapter: Xv,
    mergeConfig: Yv
  } = Le, qt = Ro;
  (function(t, n) {
    const e = Ro, r = t();
    for (; ; )
      try {
        if (-parseInt(e(155)) / 1 + -parseInt(e(132)) / 2 * (-parseInt(e(131)) / 3) + -parseInt(e(133)) / 4 * (parseInt(e(148)) / 5) + parseInt(e(144)) / 6 + -parseInt(e(139)) / 7 * (-parseInt(e(140)) / 8) + -parseInt(e(151)) / 9 * (parseInt(e(143)) / 10) + -parseInt(e(134)) / 11 * (parseInt(e(145)) / 12) === n) break;
        r.push(r.shift());
      } catch {
        r.push(r.shift());
      }
  })(Oo, 846103);
  qt(159) + qt(156);
  Le[qt(141)][qt(149) + qt(152)] = !0;
  const cv = async (t) => {
    var e, r, o, i;
    const n = qt;
    try {
      return (await Le(t))[n(157)];
    } catch (s) {
      throw ((r = (e = s[n(130)]) == null ? void 0 : e[n(157)]) == null ? void 0 : r[n(137)]) || ((i = (o = s[n(130)]) == null ? void 0 : o[n(157)]) == null ? void 0 : i[n(138)]) || s[n(137)];
    }
  }, lv = {};
  lv[qt(153) + "pe"] = qt(146) + qt(147);
  function Oo() {
    const t = ["n/json", "276395tJCiJQ", "withCreden", "PATCH", "9SaJQPM", "tials", "Content-Ty", "PUT", "99377cihJHy", "ient", "data", "GET", "/api/v1/cl", "response", "4273476JSWZnq", "2ZwKdoL", "16BkxwRX", "22jHUnev", "POST", "DELETE", "message", "error", "1192457LSxAmT", "40lZKqTS", "defaults", "params", "92030TMuBVs", "8554140MGcnkL", "15156828cQaDKs", "applicatio"];
    return Oo = function() {
      return t;
    }, Oo();
  }
  function Ro(t, n) {
    const e = Oo();
    return Ro = function(r, o) {
      return r = r - 130, e[r];
    }, Ro(t, n);
  }
  const Ae = ko;
  (function(t, n) {
    const e = ko, r = t();
    for (; ; )
      try {
        if (parseInt(e(294)) / 1 + -parseInt(e(297)) / 2 * (-parseInt(e(282)) / 3) + -parseInt(e(272)) / 4 * (parseInt(e(273)) / 5) + -parseInt(e(281)) / 6 * (parseInt(e(299)) / 7) + parseInt(e(270)) / 8 * (-parseInt(e(274)) / 9) + parseInt(e(271)) / 10 * (parseInt(e(295)) / 11) + parseInt(e(292)) / 12 === n) break;
        r.push(r.shift());
      } catch {
        r.push(r.shift());
      }
  })(Po, 829111);
  const fn = {};
  fn[Ae(284)] = Ae(283) + "E", fn[Ae(277)] = Ae(290), fn[Ae(289)] = Ae(287) + "N", fn[Ae(269)] = Ae(283) + "E", fn[Ae(291)] = Ae(290), fn[Ae(285)] = Ae(287) + "N";
  const Mt = fn;
  function ko(t, n) {
    const e = Po();
    return ko = function(r, o) {
      return r = r - 269, e[r];
    }, ko(t, n);
  }
  const Ds = {};
  Ds[Ae(278)] = Ae(290), Ds[Ae(276)] = Ae(287) + "N";
  const uv = Ds, fv = Ae(288);
  function Po() {
    const t = ["12tcFnwA", "87QXdpKa", "ACTION_MOV", "mousemove", "touchstart", "ent", "ACTION_DOW", "moveEvent", "mousedown", "ACTION_UP", "touchend", "13828980wXvxpB", "wheelEvent", "293503gToyCY", "363FxdlbT", "shortcutEv", "61170NTszkG", "assistiveM", "5749821SojKbI", "Event", "touchmove", "105032ZZxwlN", "502430QiKCOu", "16ALjyUi", "1751030uIJnoU", "81XAjTqe", "fullscreen", "keydown", "mouseup", "keyup", "enuHide", "keyBoardEv"];
    return Po = function() {
      return t;
    }, Po();
  }
  const dv = Ae(293), hv = Ae(280) + Ae(286), Kf = Ae(298) + Ae(279), Bs = Ae(296) + Ae(286), xv = Ae(275) + Ae(300);
  (function(t, n) {
    const e = mn, r = t();
    for (; ; )
      try {
        if (parseInt(e(503)) / 1 + parseInt(e(473)) / 2 * (-parseInt(e(501)) / 3) + parseInt(e(463)) / 4 * (-parseInt(e(497)) / 5) + -parseInt(e(485)) / 6 * (parseInt(e(419)) / 7) + parseInt(e(488)) / 8 * (-parseInt(e(486)) / 9) + -parseInt(e(446)) / 10 + parseInt(e(507)) / 11 * (parseInt(e(494)) / 12) === n) break;
        r.push(r.shift());
      } catch {
        r.push(r.shift());
      }
  })(Io, 188761);
  function mn(t, n) {
    const e = Io();
    return mn = function(r, o) {
      return r = r - 411, e[r];
    }, mn(t, n);
  }
  function Io() {
    const t = ["mJuTz", "touchEvent", "typeKey", "current", "wheel", "backspace", "PASTE_TEXT", "mousemove", "getBoundin", "key", "touch", "2291750zFaDle", "passive", "clientX", "left", "DyjYd", "includes", "clipboard", "COPY_TEXT", "touchstart", "isDown", "arrowleft", "capslock", "action", "keydown", "zaeFN", "shiftKey", "control", "4RWhpnD", "pageY", "YApyF", "ctrlKey", "top", "offsetHeig", "KEYBOARD_C", "delta", "toLowerCas", "loDFe", "7418YeTuNo", "enter", "DUTyA", "tListener", "ault", "wheelEvent", "toUpperCas", "VPjqf", "preventDef", "ODE", "arrowdown", "height", "126jTtlgt", "224145lSmdZL", "width", "40gkTWFg", "showMenu", "mouseup", "repeat", "uLNYE", "shift", "1508772XqNuhb", "clientY", "mouse", "1395110deZIbI", "EPdTI", "WrCsU", "forEach", "261GmPDKt", "gClientRec", "363291WFMRyT", "KEYBOARD_T", "EXT", "mousedown", "88syXlQP", "jayJx", "pageX", "type", "FQMPJ", "FSmDQ", "touchmove", "removeEven", "focus", "touchend", "74991OIJeXx", "keyAction", "deltaY", "yVDIM", "arrowup", "arrowright", "offsetWidt", "gVZdZ", "keyEvent", "meta_state", "xkLQj", "readText", "yiRJI", "tab", "addEventLi", "stener"];
    return Io = function() {
      return t;
    }, Io();
  }
  const pv = ({ isMobile: t, assistive: n, onImgEvent: e, canvasContent: r, imageRef: o }) => {
    const [i, s] = ot(!1), a = (f) => {
      const u = mn;
      if (f[u(481) + u(477)](), !o[u(438)]) return;
      const v = o[u(438)];
      let g = Mt[f[u(412)]];
      if (n[u(455)] == !0 || n[u(489)] == !0) {
        g == Mt[u(490)] && e(Kf, {});
        return;
      }
      if (g == Mt[u(506)] && s(!0), g != Mt[u(506)] && i == !1)
        if (u(413) === u(450)) _0x3e1c6a[u(437)] = u(469) + u(482), _0x55a7f3[u(444)] = 22;
        else return;
      g == Mt[u(490)] && s(!1);
      let h, x;
      const w = v[u(443) + u(502) + "t"]();
      if (f[u(412)][u(451)](u(445))) {
        const { touches: m, changedTouches: A } = f, b = m[0] ?? A[0];
        h = b[u(411)] - w[u(449)], x = b[u(464)] - w[u(467)];
      } else f[u(412)][u(451)](u(496)) && (h = f[u(448)] - w[u(449)], x = f[u(495)] - w[u(467)]);
      const y = {};
      y[u(458)] = u(436), y[u(420)] = g, y.x = h, y.y = x, y[u(487)] = w[u(487)], y[u(484)] = w[u(484)], e(fv, y), v[u(417)]();
    }, c = (f) => {
      const u = mn;
      if (f[u(481) + u(477)](), !o[u(438)]) {
        if (u(414) === u(414)) return;
        [u(454), u(415), u(418)][u(500)]((w) => {
          const y = u;
          _0x1f31d7[y(416) + y(476)](w, _0x5af720);
        });
      }
      const v = o[u(438)], g = f[u(421)], h = v[u(443) + u(502) + "t"](), x = {};
      x[u(458)] = u(478), x[u(487)] = v[u(425) + "h"], x[u(484)] = v[u(468) + "ht"], x.x = f[u(448)] - h[u(449)], x.y = f[u(495)] - h[u(467)], x[u(470)] = g, e(dv, x), v[u(417)]();
    }, l = async (f) => {
      const u = mn;
      if (f[u(481) + u(477)](), !o[u(438)]) return;
      const v = o[u(438)], g = uv[f[u(412)]], h = f[u(444)][u(471) + "e"]();
      if (((m) => {
        const A = u;
        if (A(426) !== A(426)) {
          _0xdce53d == _0x381c1d[A(490)] && _0x2b441c(_0x505bc2, {});
          return;
        } else
          return [A(462), A(493), A(457)][A(451)](m);
      })(h) == !0) return;
      const w = async () => {
        const m = u, A = {};
        A[m(458)] = m(427), A[m(420)] = g, A[m(437)] = m(504) + m(505), A[m(444)] = f[m(444)], A[m(491)] = 0, A[m(428)] = 0;
        const b = A;
        if (f[m(466)] == !0 ? h == "c" ? m(465) === m(435) ? _0x4134ad[m(416) + m(476)](_0x1ba24f, _0x128e34) : b[m(437)] = m(453) : h == "a" ? (b[m(437)] = m(469) + m(482), b[m(428)] = 4096, b[m(444)] = 29) : h == "v" && (b[m(437)] = m(441), b[m(444)] = await navigator[m(452)][m(430)]()) : h == m(423) ? (b[m(437)] = m(469) + m(482), b[m(444)] = 19) : h == m(483) ? (b[m(437)] = m(469) + m(482), b[m(444)] = 20) : h == m(456) ? (b[m(437)] = m(469) + m(482), b[m(444)] = 21) : h == m(424) ? m(475) !== m(475) ? (_0x2f6ee4 = _0x23df0f[m(448)] - _0x1fbbc2[m(449)], _0x3ce10d = _0x391f62[m(495)] - _0xf0078b[m(467)]) : (b[m(437)] = m(469) + m(482), b[m(444)] = 22) : h == m(440) ? m(429) === m(499) ? (_0x7297b9[m(437)] = m(469) + m(482), _0x4ca6d8[m(444)] = 21) : (b[m(437)] = m(469) + m(482), b[m(444)] = 67) : h == m(474) ? (b[m(437)] = m(469) + m(482), b[m(444)] = 66) : h == m(432) && (b[m(437)] = m(469) + m(482), b[m(444)] = 61), b[m(412)] == m(504) + m(505)) {
          if (m(480) !== m(480)) return;
          f[m(461)] == !0 && (m(460) === m(460) ? b[m(444)] = b[m(444)][m(479) + "e"]() : _0xe14ac2(_0xe346c6, _0x37c701));
        }
        return b;
      }, y = await w();
      y && e(hv, y), v[u(417)]();
    };
    it(() => {
      const f = mn, u = o[f(438)];
      if (u)
        if (f(498) === f(431)) _0xd5e10[f(437)] = f(469) + f(482), _0x1f8254[f(444)] = 66;
        else {
          const v = {};
          v[f(447)] = !1;
          const g = v;
          return t ? f(492) === f(492) ? (u[f(433) + f(434)](f(454), a, g), u[f(433) + f(434)](f(415), a, g), u[f(433) + f(434)](f(418), a)) : (_0xb99e67[f(437)] = f(469) + f(482), _0x36bd33[f(444)] = 67) : (u[f(433) + f(434)](f(439), c, g), u[f(433) + f(434)](f(459), l), [f(442), f(506), f(490)][f(500)]((h) => {
            const x = f;
            u[x(433) + x(434)](h, a);
          })), () => {
            const h = f;
            h(422) === h(422) ? u && (t ? [h(454), h(415), h(418)][h(500)]((x) => {
              const w = h;
              u[w(416) + w(476)](x, a);
            }) : ([h(442), h(506), h(490), h(439), h(459)][h(500)]((x) => {
              const w = h;
              w(508) === w(472) ? (_0xd58b12[w(437)] = w(469) + w(482), _0x3aab2d[w(444)] = 19) : u[w(416) + w(476)](x, a);
            }), u[h(416) + h(476)](h(459), l))) : (_0x501670[h(437)] = h(469) + h(482), _0x9cd8d3[h(428)] = 4096, _0x1f994a[h(444)] = 29);
          };
        }
    }, [t, a, c, l]);
    const d = { ref: o, ...r };
    return U.jsx(bd, d);
  }, mv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAABGdBTUEAALGPC/xhBQAACklpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAAEiJnVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/stRzjPAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAJcEhZcwAADsQAAA7EAZUrDhsAAD0ASURBVHic7b15dCTXdaf5Re47EonEVlgKVQXUSoqLSJEii6JELZQoS5bMM5J7uiWrR97kGUuW3Z6ZtnvG9unlzHS7vfX42D2WLavVbrft9liLZe0U2awSSZES12KtqMK+JhKJTOS+xPzxABJVRFUBiBcRGZnvOycPwDrAi0vEi1/cd99992ojx+5EobiGLmA/0Lfx/dZPcuMTAwJAcON3OgAX4AGiG/+WA2pAA1jb+LciUAKyQGrjs3LNZwGY3PheoXgNj90GKGzBDRwCjgEjwEHgwMb3I7wuOEbZOk7XHn4/B0xsfK4Alze+PwuMA3VD1ikchxKs1icJ3AbcuvF5E3CC1z2jZibK63ZfSxE4A7wEvLzxeRHhsSlaFCVYrYUHIU73bXweAAZstcg8gsBdG5+tzAJPAt/f+LyIWJYqWgBNxbAcTQAhSicRAnUvELHVouYjBzyDEK9TCDEr2WqRYs8owXIeo8B7gfcBbwdCtlrjPArA48DXgW8Al2y1RrErlGA1Pz7gIeD9CKEatdecluMSQri+BjwGVOw1R3EjlGA1J0HgYeBR4MeAuK3WtA8Z4O+BvwW+iQjsK5oIJVjNgxt4J/CPgA8j8poU9rEGfAn4L8B3USkUTYESLPs5BPw08HFgn822KLZnDvgi8CeI/C+FTSjBsgc/8BPAJxHxKc1ecxQ7RAe+B3wO+P+Asr3mtB9KsKzlGPAzwE8BCZttURgjDXwB4XWdtdmWtsFltwFtwjsQwdwzwGdRYtUKJBD38gzi3r7DXnPaAyVY5uEBfhJ4DrFd/n7U0q8V0RD39jHEvf5J1AkS01CCJZ8I8EuI/J6/BN5sqzUKK3kz4p5fQnhf6tSBZJRgySMI/AqiosDvIsqzKNqT/cDvIObCP8MZB80dgRIs4/iBTyMm528D3faao2giuoF/h5gbn0bMFYUBlGDtHR/wcwj3//cRxe4Uiu3oQ8yRS4g547PXHOeiBGv3aMD/gNgd+mNg0F5zFA5iEDFnzgAfQW3C7BolWLvjXkSZkr9GHUJW7J1R4K8Qc+lem21xFEqwdkY/8HnUBFPIZfMF+OeIOaa4CUqwbowHsT19FvgEyoVXyEdDnHw4C/wyKofrhijBuj53ICpV/g6qcoLCfDqAf4+Yc+q83HVQgvVGgsC/BX6AmjgK67kTIVr/FpW/9QaUYF3NQ4juK7+Kcs0V9uFBzMGXEXNSsYESLEEH8GfAdxD1qRSKZuAQYk7+GSosASjBAnHK/iXgn6KC6ormQ0PMzZdQ3lZbC5YfEeT8DjBssy0Kxc0YBr6N2ARq2yM+7SpYR4CnENvI7fo3UDgPFyLN5mngqM222EI7PqyfQNQtusNmOxSKvXI7Yg5/wl4zrKedBCuIyFb/PKpOkcL5hHl9PrdNM912EawxxBGIT9hsh0Ihm08g5vaYzXZYQjsI1iOIJNDbbbZDoTCL24BnEaWaW5pWFiwN+DXgq6jOyYrWpwP4CvDrtHB6TqsKVgD4r8C/pnX/HxWKa3EB/wox9wM222IKrfgwJxGtxT9ityEKhU18BPEMJO02RDatJlhjiPyq++w2RKGwmfsQz0JLBeNbSbBOIm6QqgSqUAhGEc/ESbsNkUWrCNZHEccWuuw2RKFoMroQz8ZH7TZEBq0gWJ9GNK9sySCjQiGBAOIZ+bTdhhjFETWfTt5/97b/fur0s78B/KalxigUzkRDtBpLnLz/7t+83g+dOv2sZQbtBUcI1rWcOv2shji1/ks2m6LYwO12oWkuXC4Nl+t1x73RaNBo6Oh6g3q9YaOFig1+49TpZ+PAZ0/ef7dutzG7xXGCtSFWfwh8ym5bWh2P200g4Mcf8BPw+/AH/Hg9HjweD16vB4/Xg9fjwe1273jMer1OtVajVq1Rrdao1WpUazXKpTKlckV8LZWp1esm/p+1PZ8BfKdOP/s/O020HCVYp04/6wb+I/BJu21pJTweD+FwkFAoSDgUIhwOEgwG8HjkTw+32y0Ezn/jkk61Wo1isUQ+XyRfKFAoFMnni9RqNek2tSmfQojWz528/27HvB0cI1gbnpUSK4NomkYkHCIWixCNio/f33yd0z0ez2v2baVcrpDLrZPLrZPNrrOeL6DrjnISmolPApw6/ezPOMXT0kaOOaIxjFoGGiAcDhGPx4jHY8SiUdzuVtgcFtTrDbK5HJlMlkwmSz5fsNskJ/LHwC+cvP9uXQXd5fC7KLHaMS6Xi3g8RiIRJ9HZgc/XfB6ULNxuF53xDjrjokdDpVIhvbpGOp0hk8nSaKhA/w74eaCMAzaxnOBhqdSFHeByuejs7KA7maCzM95SXtReqdcbrK5mWE6lWV1dU+J1c34T+C27jbgRzS5Yvwj8gd1GNDOxWITe3m66ujrx7GK3rt2o1eusrKyyuLhMNrtutznNzKeB/2C3EdejmQXrHwNfpIVr++wVj8dDb08XfX09BIMqwX+3FIslFhaWWFpeoVpVu47XoAMfA/7CbkO2o1kF617gCaB1gy97IBIJM7Cvj66uTlwupeNGaTR00ulVZmcXyK3n7TanmagA7wMes9uQa2lGwRpF1KjuttuQZiGRiDM40EcsFrXblJYlm80xM7tAOp2x25RmYQ14AHjZbkO20myC1Y0Qq7YvEaNpGj09SQYH+tSyz0KKxRIzswssLaVUfhfMAG8B5u02ZJNmEqwQwgW9x25D7ETTNLq7EwwPDRAItG2DX9splcpMTc+xvLzS7sL1DPAQ0BQJbu54d7/dNoAIrH8esW5uW5LJBMeOjtLX223KsRjFzvF4PHR1ddKdTFCr1igUinabZBeDwGHgv9ltCDSPYP0z4FfsNsIuotEIx44eYmBfH16vEqpmwuv1kEwmSCTi5AtFKpWK3SbZwQmEh3XabkOaYUn4TuCbQNslEfn9Pkb2D9HdnbDbFMUOWV5OMzE5TbncdsJVBx5GNLewDbsFawj4IW22I6hpGoOD/QwN9l9VO0rhDBqNBjMz80zPzLdbfGsZuAuYsssAOwXLB5wCti8n2qLEohFGR0cIhYJ2m7InfF4fPp9f1MTyePFs1MNyuVy4NCG+brcbNA10nfpGXauG3qDRaFCv1zdqYFWp1WpUKmUqVWd6K4VCkUuXJsjm2ipz/jlEU4uyHRe3U7D+BPhpuy5uNW63m5H9g/T399htyk1xu92EgiGCwRChQAi/34/f58fn86Np8hNWdV2nUilTrpQpl8sUSgWKxQKFYuE1wWtm5ueXmJiccYStkvhTbHp27RKsjwH/yY4L20E8HmNs9EBT1p3SNI1QKEw0HCUSjhIOhZuqukOlUiFfyLOez5HL5ygU8k25DCuXK1y8dIVMJmu3KVbxU9jwDNshWAeBF4CWT9t2uTT2Dw8yMNBntylXEQyG6Ih2EO+IEw5FHBVHazQa5AvrrGUzZLJrFItNkR70GrOzC0xOzdBoNJ+oSiYH3AGMW3lRqwXLAzyJOCvY0oSCQQ4fPkgkErLbFDRNIxbtoDPeSUcsjs/bPB6UUSrVCmvZDKuZVbK5tabwvtbzBS6cv0yh2PK5W88g4lmWnSC3Og/rNxBVGFqa3t5ujh8btXUJqGkaHdEO+vsGOLD/IN1dPYRD4V01jHACbrebcChMVyJJT3cvAX8QvdGwNZDv83np7U1SrdZYb+0KqIMbXx+36oJWelj3IyowtNYTswWXy8WhQ/vp7UnaZoPf5yfZ1U13VzfeFvKkdku1WmF5ZZnUyjLlii0bWgAsLqUYH59s5eKBdeDtiB1/07FKsGLAi8CIFRezA7/fx7FjY0TC9iwB4x2d9HT30hHtsOX6zcxabo2l5UUya6u2XH89X+Ds2YutnGw6AdwGmL7jYNWS8I8RKtySdHREueXEUYIWH1Z2uVwku7o5NDJKb3cvAb+q6rAdAX+Ars4uuhJJdF2nVCpaGuvy+bz0dCdZX8+3qmjFgX7gy2ZfyAoP6z2IozctSXd3F2OjBywtqOdyuenr6aO3u08dkt4DtVqNxeUFFpYWaDSsy53SdZ2LF6+wtLxi2TUt5hHg62ZewGzBigKvAMNmXsQuhob2sX94wLLruVwuert76evZp4RKArVajYWlORaXFy2NMU1OzTI9PWfZ9SxkGnFQOmfWBcxeEv4O8G4zL2AHmqYxNnaAgX3W5FdpmkZPspfRA4fpjCcclTfVzLhcLmLRDrq7emg0GhQsyumKd8TwB/ysrq5Zcj0L6UAsD79m1gXM9LDuQVQPbamny+VycfToIRKdcUuuF4vEGB4aIRhw5tlDJ1EsFZmaniC7bk22eno1w7lz4622g9hAZAQ8bcbgZgmWB3FI8jYzBrcLt9vFsWNjxDtipl/L7/MzNLCfznin6ddSXM1qZpXp2UlL0iEya1nOnr1Ivd5SovUS8GZMSCg1a0n4WeDjZgxsFx6PmxMnjtBhciMITdPo7elj9MBhQkH7s+TbkWAgSHeyh4beoFAwt5tOIOCnoyPGyspqKx3n6UWkODwle2AzPKw+4Dwi96ol8Hg83HLiiOnHbILBEAeGDxAORUy9jmLn5AvrTExdMT2+tb5e4JUz56nVWqZPYhY4AizIHNQMD+v/oYUaSbjdbm45cYRoNGzqdfp7+zk0MobPpxpPNBM+r4/urh50vcF63ry6Vz6fV3haqTSNJjgPKQE/ojDnl2QOKluw7kG0uW6JLp8ul4sTxw8Ti5nn8fi8PkYPHqY72WNKrSmFcTYPj0ejMXK5LHWTcrf8fh/RaIRUKt0Uh7glcBsiB3NG1oAyBUsD/ooWybnSNI3jx8aIx81b2XZ2dHJ49KjaAXQIm+c0y6USpXLJlGsEAn4i0TCpVNqU8S1GA44jOmLJGVBiDOsjCMFqCY4eOUQyaU5zCE3TGOgfpL93nynjm4Xb7SYWixCLRohFo0TCIQIBP4FggIDfh9/v3/g5Fx6Ph1qt9truV7lcplSuUCqWKJXKrOcLZHM5srl1stl1x1XrnF+cY3Z+xjRPKLWyyrlzl0wZ2wY+Cvy1jIFkCZYPOIsozud4RvYPMjhoTkKtx+Ph0MgosSY/pBzw++nv76Gnu4uuRCfJZIKOWNS0Eslr2RypVJqV9CrLy2kWlpabvhdgNrfG+MQl0wLlMzPzTExKW03ZyWXgGGD4IKUswfo5xAFnx9Pf18OhQ/tNGTsYCHL40JGmDKwHgwGGBvoZGtpHf1+PZYmxNyKzlmV2boHpmTmmZ+YpFs1ZhhmhUilzYfw8xZI54jo+Psn8wpIpY1vMp5CgETIEKwBc5PViXo4lkYhz7OioKV5ELBpj9MDhpiqgF4tGGBs9wMEDw/T1djd10F/XdRYWl7l8ZYqL4xNks6YdV9s19XqdS1cukM3Jz5DXdZ2z5y6RTmekj20xM8AYYOitI0OwfhH4A6OD2E0oFOS2Nx3H7ZZ/kiiZ6GZk+EBTCEIwGODo4UMcHjtAb49z20EuLi1z4eIVzl0YbwrPS9d1JqaukEovSx+7Xm/w0kuvkm/yJfIO+AwGtcKoYIUQReibq8vCLvG43dx223GCQfn1pPb1DTDQb7/zOTTYzy3Hj3DwwHBTeXlGqdfrXJ6Y5pUz55mesb8Cwuz8DHMLs9LHLZXKvPDiq05PLF0ADiHa3u8Jo2kNnwF+wsgAzcCRI4eImXDkZmhgmH191pWfuRa3283xo2M8/O63ceftt9CV6Gy5Sg8ul4uuRJxjR0YZGz1Avd4gvZqxLY8pFo3hdrvJ5uRWYvB4PITDIZadXUsrAqwhiiLsCSMeVhThXTl3XYHwPPbvl+8B7R8aoSfZK33cneDxuLn1xFHefMetju0wbYRCociPXniFl145S61mT7rEUmqRyekJ6eNOTc0y5exaWssIL2tPQUgjHtangQ/t9ZebgY6OGGNj8mNLdomV2+XiTbcc5ZH3voPRQyN4vV7LbWgGvF4vw0MDHD82RqOhk1pesdzjCocieL1e1rIZqePGYlGy2XXKZfsaaxgkDKTZo5e1Vw/LB1wBnJX5uAWPx8Mdt5+Q3opraGCYvh5LW6cBcOjgfu5/612WlL5xGpm1LKefeo7xy5OWX3thaZ7p2SmpY5YrFZ5//oyT41nziIY0u87L2quH9Qkc3l/w8OGDxKJyzwjakb3e1dXJ+97zDu6681YCFjfBcAqBgJ/DowcY2NfPUmrF0l3FSFgk2+YkFgX0uN0EggEnH9+JAlPAj3b7i3sRLA34Ig6OXfX2JBmSnMnek+xlaMC6Y5Rut5t7776Dd7/rbcQ7zK3R1SrEYhFuOX4Yt8vN/MKSZcvEaCRGrV4jL7G2VigUpFypkHduo9ZR4I92+0t7EayHEQX6HEkg4Of4scNSu9zEOzo5sP+gZXlW/X09/PgH3sOhg/txNUFul5PQNI2BfX2MjY6wvLzC+rq5Bfo26Yh2UCgWpB6ajnd0kEqlbdtYMEg3osDf+G5+aS+C9YcIdXQkR4+MEgrJy7cKhyMcPnjEknQBl8vFW+66jXc9dJJQsP12/2QSDAQ4dmQUTXNZ4m1pmkZnRyfZ9SzVqpzehC6XRigUdHLbsG7gP+/mF3YrWMeBf49D61319CQZGJCX4+r3+Tk6dgy32/yWW9FImA++/90cPWLO0aF2RNM0Bgf6GBrcx/TMPJWKuU1ON0VrNZOWVp0iEPBTLjt2aXgI+BtEqsOO2K1g/Rrw1l0a1RR4vV5OHB+T5gm5XC6OHDqK34Juy0OD+/jQBx+mM97cFR6cSjQS5tiRUZaWV0w/o+hyuYlGoqyspqR5dR0dURaXVpzYfUcDdHbRfHU3guUHvoA4juM4Do8dIBKRV+Z4ZOgAHR1xaeNdj7vufBPvfuhk2+ZUWYXH4+Ho4UM0Gg3m5hdNvZbX68Pn9ZFZW5UynsvlIuD3kVqRM57FHEaEmXbk3u5GsD4CfGyPRtlKR0eMAyND0sbrSfaYfuTG7XLxrnfcz52336KWgBahaRpDg/uIRSNMTppXnA8gFApTq8nbOQyFgmSz65Scl1AaQOR07ijFYTfro5/Zkzk2o2kaBw/KSzcIBUMMD45IG287/H4fH/yx93Ds6Jip11Fsz7GjY/z4B94jPan4WoYH90tt5Xbw4LBTX24/vdMf3KlgjQJv35MpNtPX201Y0nk6l8vFwRFzg96hUJBHP/SI9Dwxxe4YHOjn0Q89YupZTE3TODQyKi2uGgoF6et1ZHrkPcCJnfzgTv9Sn8SBO4Mej5vhYXlLt6GBYVMbRkQjYR790PtIdqluz81AsquTRz/0PqISY5/XEggEpSYcDw8P4PE4snzQJ3byQzsRLPdOB2s2hgb34fXKSTmId3SaeqA5Go3w6IcfUTuBTUZnvINHP/wIUcnHuLbSk+wl3iHnJeX1ehgacuQR348htOaG7ESwHsSBBfp8Pi/9/T1SxnK73YwMjUgZazvC4RAf/uDD0s82KuQQi0b48AcfJhw2b4N8ZGhEWmHF/r4e0+NvJtDLDsJOOxGsjxg2xQaGBvdJiw0M7RvG6zVnAgSDAT70gYdVlYUmJ94R40MfeNiUqrQgUh2G9slZGrpcLqd6WR+92Q/c7In2AI/KscU6/H4fvZKCj9FIlO6kHE/tWjweDx945F10JeKmjK+QS1cizgceeRcejzknG7qTPUQjcg6y9/YknVi948PADRMObyZYDwFJaeZYhPCujO8RaJrGyLA5rRY1TeO973nQqbs6bUtfbzfvfc+Dpu0UjwzLOUQvcsoct9OcRGjOdbmZYN3URWs2hHclR2N7u/sImHT05v633sXBEevK0SjkcXBkmJP33W3K2AF/gN5uOSHjnp6kE2NZNwxB3UiwfAgXzVHs6++V8obyeLymZbMfGTvInbffYsrYCmu447YTHBkzx/ve1zeAx2P8KJamaezrt6evgAE+jNCebbmRYL0TcFRCkNvtkha7Gtw3aEo7rGRXJ+98x/3Sx1VYzzvfcb8pOXNut5vBfXIao/T2djutrVsnQnu25UaC9QH5tphLX1+PlKS5YCBIMiE/tuTzennkvQ+ZFrRVWIvH4+GR9z6Ez4SD6clEt5QkZY/HTV+f4+Kk19WeGwnW+00wxDRkur8D/YOmBFUffOAelb7QYsQ7Yjz4tnulj6tpmrQGvLLCJBZyXe25nmDdCjgqIpxIxKUEGEPBEJ3xhASLrubw6AF1mLlFOXZklMOjB6SP2xlPSDkc7ff7SDgrdWYYoUFv4HqC9T7zbDEHWTuDZrSVD4WCvOPB+6SPq2ge3vHgfYRD8jPhZc1HB6bPbKtB1xOsd5toiHT8fh+JzrjhcULBsLQzXVt58IF7nbi9rNgFfr+PBx+4R/q48Y5OQkHjh687OzucNge31aDtBCsInDTXFrn09sjxrvp65R+ZPHhgmLFDI9LHVTQfo4dGOHRAfiSlr1dOAqis58QiTiK06Cq2E6yTiCqAjkFGKoPP5yMR75Jgzet4PB7e/oD8gKyieXnwbW+VvguciCfw+Yx7R7JSfiwiADxw7T9uJ1gPmm+LPDpiUSmubm93n/SdlLvuvFVqHXlF8xMJh7jrzm3jxXtG0zQp2e9+v89pu9Rvu/YfthOsN/xQM5NMGt/Rc7nc0g84RyNh7rxd7sRVOIM7b79VetG/7q4eXC7jOYbd3fJ3wE3kDc7TtYIVAN5ijS3G0TSNZNJ4kDzRmcAtYTJs5b573+zUyo8Kg3g8bt5675uljul2u0l0Ghebrq6Ek3Ky7uaaONa1gvUWRDsvR9DREZXS/qq7S653leiMc9ikc2YKZ3Bk7KCUneutyJinHo+beNwxy0I/QrReYzvBcgzJLuNvnGAwRCQst9LnPW+5w0lvMYUJaJrGPW+5Q+qYkXCEoIRE0i5n9Qy4atfqWsGSn0hiIjKyd7slnxnsSsRVGoMCgLFDI3Ql5IqDjPkq2/MzmaucqGsFyzF78NFoGJ/P2HJQ0zQSnXJTGe68QwXaFa9z5x1yywglOrsMe+8+n5do1DG711c5UVsFqxeQfy7FJDolvCWikZjUFvDhUEjFrhRXcXjsoNQjO16vl2jEeAxKxvNjEYMIbQKuFqzbLTfFADIChwnJh5zfdOsx3JIaXyhaA7fLxZtuPSp1TBnz1kGBd4DXgoFbny65+7Am4nG7peS5xOPy4gsul4sTx1Q1BsUbueX4EakvMhnzNhoJ43FOYb87N7/Z+ld8kw2G7IlYR9TwOj4cjuCVUIZ2kwMjQ6a2NVc4l2AwwKFD+6WN5/V4CRvc2dY0jViHnA49FnD75jdbBWtHve2bgY6Y8T90R1Ruh+Vbjh+ROp6itTh2RK73LWP+yniOLOL45jebguUFHPPExST8oeOxuHFDNgiFggw7s3GlwiKGh/ZJ9cBlzF8Zz5FFHGajX+GmYI1xkwaGzYLL5SISMbbr4nF7CIXkbeuOHtyvEkUVN0TTNEYPylsWhsMRPG5jVSEikZC07ugm40Vo1GuC5RjvKhIOGRaHaDQmVWDGTCiPq2g9ZM+TaNTYTp+maUTC8qukmsQReF2wRm00ZFeEDXpXgNSjOMFgwIm93xQ2sK+/l2BQXqm5aNj4kk7G82QRo/C6YB2y0ZBdEZbwRohG5K3dR4bN6bCjaD00TWNkWF5udiRi/MXrIA/rKsFyjodl8A/scrmk1MjeZHjYnO7QitZE5nwJBcOGY1AhhwrWiH127I5Q0NhOSzgUluYRaZrGfiVYil2wf3hA6vwLG9w8Mvo8Wch+EIKl4ZAzhIGAH7fb2BtFRnmOTRKJOAG/Y8qHKZqAgN8vtUeg0fnsdrsIBBwxhwcBzYU4WOgIi8MS8lhCAXmC1d8nt/Cfoj3Y1ydvk0bGfJbxXFmAH+hxAUN2W7JTAgHjOywyPSy1O6jYC/398l50IQmVIGQ8VxYx7ALkN+MzCX9ATit6WTiwm66iCejvlSdYQQkeloznyiJ6XYBj1jVG19o+n09aZq/X63HSWSxFE9HRETVcfHITl8uFz2fsuXBQHLbXUR6W0T9swC/P9U10dqr8K8WekdGPYBPDz4Uzgu4AfS7AMesav8Eb4/fJE6ykswr5K5oMmXXVjc5ro8+VhXS7gLjdVuwEt9tlOKVBRrvvTRxWsVHRZHRIrEVldF7LeLYsIu4YwZJRe93nlSdYsajc1mCK9kLm/JHxIpbZ28BEnCNYHo+xUhog96bEYkqwFHtHZi0qGZVzZTxfFtDpGMHySviDeiSWRI5F1Q6hYu/I9LBkzGsZz5cFxF1c07u+WfF4ZQiWvJvioJ0VRRMic/7IWX04QrACLsARaa4yOnwYrdC4SSDgVykNCkNomkZQUoa5jHntdkYHnYALcMR2l4xdDFk3RXlXChnIyjCXMa/dHkcIVnSzWkPzY9CjkVm72m8ws1ihALkZ5g6pzW4UlwtwxOLV6A2RuYRzSM6KosmRKTJG57dDBM/jAuSV3zQRl9Ebosm7IQ65uYomp6kEyxkx2bBznjyDf1DNJe+GOCRnRdHkyJxHzbQCMRPnCJau222BQtGy6Djj+XIBObuNsIJGoyFtrGq1Km0sRfsicx416gbntzP0Chcg70k2EaOCo0v00GSOpWhfpM5Jg4oj84VuInkXULLbip3QMHhzZU6OWr0ubSxF+1KXOI+Mzm+jz5dF1FxA2W4rdoLhGyLxDVIpV6SNpWhfyhLnkeH57QzBargAR7gLhtfoQK1ek2AJFEuOcEoVTY6seSRjXtclPF8WkHMB63ZbsRNqNQk3pSZHm8vlilPW/IompdFoSPOwZMxrGc+XBZQcE3SvSviDyvKwAEolR6ykFU2KzPkjY17LeL4soOQCMnZbsRNkvAFkbiOvZdsiG0RhEtmcvIWNjHntEA8r4xjBqlZlvEXkBTllTjhF+yHzhVetGRcsGc+XBay2lWBVKhIFK6sES7F3ZM6fSsX48tIhguUcD6vRaBjOW5EpWJnMmrSxFO1HZi0rbSyj87perztlEynjApbttmKnGN1VKVfkpSOkVtLSxlK0H+l0RtpYRue1zHwwk1l2AQt2W7FTDAtWWd7OTHp1zSlvJUWToes66dVVaeMZndcOEqwFR3lYRreCK9WKtOMQ9Xqd1Yw8t17RPqxm1qTFjOr1OpWqMcFxUIrOoguYt9uKnVKSkBlcKBYkWCJYWFySNpaifZhfkDdvihLms4znyiIWXcC03VbslKKEN4GMG7zJ3LwSLMXumZc4bwol4/O5WHSMhzXlAhZxyAHofN74zZFxgzeZX1iUNpaifZiTOG9krBjyBXnPhIlUgCUXonTXjM3G7IhyuWK4tEtB4s3JZLJSRFTRPuTzBTISY59GBatWrzsl6D4N6JslkidsNGRXFPJFY79fzEvd3ZuYcoTWK5qEyalZaWM1Gg0KhbyhMYw+TxYyCa/XdL9koyG7wqj7qus6eYM3eStTEiegovWZlPiCyxfyhuvEOWQ5CBsatSlY4zYasitkLMHW8/LOcU1Oz6l8LMWOaDQaTE7PSRtPxjzOO8fDGgcHeljr6xIEa12eYFUqFaZn5E1CResyPTMn9XiYDMFaX5e32jCZqzys8zYasivy+YJhjyaXz0mt8X7h0oS0sRSti8x5ous6OYMv3kaj4aRNo3PwumBdBBzRu0rcKGNvhXq9Tr4g77T85SuTUhsKKFqPer3O5SuT0sbLF9YNz7ncuvEYmEVUERr1mmBVgQu2mbNLsmvGXeG1rLxqC+VyhSsTjsm/VdjAxOSM1PQBGfM365wilBfYcKi2dn4+Y48tu0dG8bPMmrzDpwCvvOoYvVfYwJmzF6WOl8lmDI+xtuaYmm6vbn6zVbBetMGQPZHNrtNoGHNlC8WClMJnm0zPzKkqpIptya3npaYzVCoVw/lXjYbuJA/rhc1vtgrWj6y3Y280Gg0pf+zVjDwvS9d1XjnjmL0LhYW8/Mo5qbGi1YzxWmy53LqT0nGe3/zGtd0/OgEZFRvTmRUJlrzOy2fOSW10oXA+1WqVl8+ckzqmjHm76qyKua85U1sFaxGHnCkEWJVQsXE9vy61qF+5XOHVc45JaVNYwKvnLkkNtlcqZdbzxkMPMp4fi5hBaBNwtWABPG2tLXsnXyhKmQgrqykJ1rzO8y+ecZKrrTCRRqPBCy/K3ctaWTXuXZXKZfIFx2S4/2Drf1wrWD/AQaysGI9BpdJyC65msznOX3DMSSeFibx67pL0/pXLK8ZraaVXMsYNsY5ntv7HtYL1DA5iOWU8+Fgul8nm5K7nf/DDF5WX1ebUGw2efe4FqWNmc2tSQhgyXvQWctWqbzsPyxHF/EDsdMhYFi6vyPWy1tZyKi+rzXnlzHnDJzKuRcY8rVSqTupaXgae3foP1wpW6dofaHZSErys1UyamoTuuVt55tnnqVTUjmE7UqlU+YFk76pWq0pJZ5DxvFjIs8BVwbZrBQvgCWtskYOMZaGu6ywuyy13XCyWpE9ahTP4wXMvUCzKbeywuLwoJZdreVluKo/J/Pdr/2E7wXrDDzUz6+t5KZNjKbUoPe70wkuvsrrqqHwXhUFWV9d44aVXb/6Du6DRaLCUMv5CLRZL0pepJrMjwXoSsTR0DAuLxtf2tVqNVFpuikOj0eC7j5+WOqaiufnu46elv/hW0ilqNeN9DGU8JxZSYoeCVQROmW6ORJaWUlLc5YWleenlNubmF6VnOiuak5fPnGNuXm5oQdd15peMtw7VdZ2lJbkvZJM5xTXxK9hesAC+ba4tcqlWa1K2asvlEmkJiXnXcvqpHzqpsqNiD6yv5zn91A+lj5teXaFcNr7gWVlZldZt2iK21aDrCdbXTTTEFGS5u7MLs9K9rEqlwre++6RTiqUpdomu63z7sSellj/eHHd2QU6TE4ctB+E6GnQ9wXoZmDLPFvlkMlkKEo4blMsl6dnvADOz8zz/wivSx1XYz/MvvML0jPFl27Wk0ikp3lWhUJTaC9ECphAa9AauJ1gAXzPHFvOYm5MTP5hfmEPX5WeqP/XMj1hy1ray4iYsLa/w1DPyKzPpeoN5Sd6VrOfCQq6rPTcSrK+aYIipLC2vSEnWLFfKLCwtSLDoauqNBl/7xmPSc3QU9lAslfjaNx6jbsIxrIWlBcoSCkxWKlUnviSvqz03EqzvAo46dNRoNJhfMH44FGB+cc6U2la53Drf/M4TKp7lcHRd55vffoKcCVVmq9Uq84tyWsfNLyw57VzrKkJ7tuVGglUB/k66OSazIOkG1et1ZubNaSwxNT3H6afl7ygprOP00z9kSmJT1K3MzE9L6cLUaDRYkPQCt5AvIbRnW24kWAB/JdUUC6hWa8zNy7lJqZVlqe3AtvKj51/m5VdUfpYTefmVc/zo+W1jwobJF/KkJB3Gn19YcloqA9xEc24mWI8Bjso2A5idnZfWJ3Bi6oppy7fHn3yayxOO2oxtey5PTPH4k+bUudR1nYmpy1LGajQazM7Kj8OaTAqhOdflZoJVA/5WmjkWUa3WpO2MFIoFafGEa9F1nW986wnp2dEKc5idW+Ab3zIv/riwNE+hKKcT8/z8khOrhfwdN2nofDPBAvgbObZYy+zcIrWaHC9rfnGOkoR8mO2o1Wp85WvfYXHJcYl9bcXi0jJf/YfvSjnTtx2lcok5SWkM9XqdmVn5eWEW8Nc3+4GdCNbjgON8y1qtxqykm9ZoNLgyOW7am7VSqfDlr37bidvPbcHS8gpf/uq3pWeyb6LrOlcmx6Xt5s3MLjgxdrUEfO9mP7QTwaoDXzBsjg3Mzi1K61iynl83bWkIojHA333lG9LSMhRymF9Y4u++8g1KErsrveEai3NSOuGA6NzkwNgVwBcRWnNDdiJYAJ8DHJc41Gg0uDIhLzVhbmFW2sTajnK5wpe++k1Tjnkods/M7Dxf+uo3pbbpupb1/Lq0pSDAlYlpp+VdbfL5nfzQTgXrEmJp6DhSqbS0lty6rnN58pK0HcjtqFZrfOXvv8U51XnHVs5dGOfLX/2WqUurer3O5clL0kIN2WzOaSWQN/kBsKN+aO54d/9OB60Cj+7VIjvJF4r09XVLGater1Mql0h0dkkZbzt0XWf88iSapjGwr8+06yi25wfPvcATTz5j+mmEy5PjUj32s+fGnbgzCPBbbOnufCN2I1gXgE8BoT0aZRuVShWv10s0GpYyXqlUxOVyEY1EpYx3PWZmF1jNZNk/PIjbvVNnWLFXarUa3/7uk7z48lnTrzW/OMeSxD4C8/NLLDqvhAzAGvA/cYPs9q3sRrDqQD9w797sspdsdp2eni48breU8XLrOSLhCH5/QMp412MlvcrE5DRDQ/sIBPymXqudyaxlLYsfZnNrTExdkTZeuVLh7Dl5S0uL+Rzw5Z3+8G4EC2Aa+AVA26VRtqPrOqVime5ueUu5tewaiXgnHo9H2pjbUSiWOHdhnHhHjEQibuq12pFL4xN89R++Qy5nflXYcrnEhfELNBry4qAXLlyWUgvOBnSEd7Vj13C3grUMvBUY3Z1dzUGxVCIYDBIOB6WM12g0yGTX6OrswuWS47ldj3q9zsXxCXK5PIOD/bgleYrtTKVa5XtPPMX3n/mhqRspm9RqVc5dOke1Km/XMZVKO3lX+VvA7+7mF3YrWCBE65/s9peahWx2nd6epLSYUL1eYz2fI5noRtPMdzyXU2kujl8h2ZUgFouYfr1WZWZ2ga987duWZYTrus6F8fMUJR29AbGj/OrZi05NYwD4X4BdbYfvRbAuAx8B5Gy7WUyj0aBUKtOdTEgbs1KtUCqX6OzotES0yuUKZ89fYj1fYKC/D49HeVs7pVyu8MSpp/nvp54xNb9qK5uZ7GvZjNRxL1y87OTmJueBX97tL+1FsED0vP/gXn6xGSgWS/j9fiIReRuexVKRarVKvKNT2pg3Y3l5hXPnxwn4/SSTCUvE0qnous7Zc5f4h298j9k5azPBJ6cnpPe8XFxMOfW84Ca/Buy6KJw2cuzOvVzMB0wgdg0didvt4vbbThAMyt3l6+3uY3hwv9Qxd3TdniQPPnAvfb2OdHxNZWFxmSeefMaWA+ZTM5MsLssVyGKxxAsvnqFed+xScB4YYYepDFvZq4dVR+wUvmcvv9wM6LpOLrtOT09SqmeSL6yj6zqxaIe0MXd03XyBM2cvsLS8QldnnFBIzsaCk0ml0jz2+Pc59dSz5PPyYkc7ZWZumgUJTVC30mg0ePXVC5YtZ03iXyI6zO+avXpYAFFEPCu51wGagd7eJGOjB6SP29+7j8F9Q9LH3Smjh0a4+823SY3VOYXlVJrnfvgiF8cnbLNhZm7alMPyFy9dYXHRcTU1t5ICDgJ7Oi+3Vw8LXnfn3r3XAZqBfL6Az+cjEpGTBb/Jej5HvV6nIxaXOu5OSa9meOXMeebmlwgGAsTjMVvssJLJqVm+98RTnH7qOdKrGdvsmJqZlO5ZASwsLDNtUh15C/ktdlBG5noY8bBAHNO5DPQaGcRuNE3jTbcek3Z0ZyvJRJKR4YO2B8Q74x2cODbGsaNj0uN2dlIsljh77iJnzl5kNbNmqy2bJY5lB9gBcrk8L7181qnZ7JssIryrPa/PjXhYIA5EV4D3GRmkGcisrtEjMT9rk0KxQD6/TjzeiUuz7zxgqVRmamaOF156ldTKKmgaHbEILpfzzijWajXGr0zxzLPP89jj32dyepZSybx6VTuh3qhz6coFVjPyO+NVqzVeeeU8NQuSW03mXwCnjAxg1MMCCCDKzwwYHchuotEwt95y1JSHOBgMcfjQEXxen/Sx94rX6+HA/iEOHtjP/uEB/P7mse1ayuUKk1OzXL4yyZXJ6aaqqFmpVrg4fl5aPfatNBoNXn7lnCXHhkxmFnFCxlCtcRmCBfDzwB/JGMhuEok4x46OmrKE83p9HD54mFBI/tLTKJqm0dfbzdDgPvr7eujv68bns0/AqtUaC4vLzM4tMD0zx8LiclMuhwrFPBfGL0g9brPJZu5YOp2RPrYNfAr4Y6ODyBIsH3AWsT51PPv6ezl4cNiUsV0uF/sHR0h2NXe+lKZpJBJxerqTJLs6SXZ10pXoNCVdolAospJeJbUiPsupFVZWVptSoLaSSqeYnL5i2tGYy1empHV/spnLwDH2kHd1LbIEC8RxHcc1Xr0ehw7up7+/x7Txe5I9DA/uR7MxrrUXPB43sWiUWCxCOBwiGAgQCPgJBvx4vF4A/D4vmqah6zrljYJytWqVYqlMqVSmWCqRzxfIZtfJ5nLSuhtZha43mJqZYillnpjMzy8xfnnStPEt5ieRpA0yBUtDBNTukzWg3YyNHaC3x7w0s3A4wqH9o/j9qs6VUyiXy1yevGRqbf/FpRQXL8qrl2UzTwH3I6knhNFdwms5A3wSB9bL2o7V1TVCwYBpWePVaoVUehmv10co6LhCrm1HKp3i0pULlE3soJNKpVtJrHTgo4g6elKQLVizwAHgdpmD2slKOkMkHDItd0nXdTJrq5TKJWLRmCPTDFqdWr3GlanLzC/MmhpXS6cznDtvXv9LG/gi8B9kDihbsACeBn4WaJl1zko6QyQSNjXhslgqspJewe/zEwyoc4DNwmomzcXLF8ibuAQU11nj3LmWEqss8OOA1D+cGYK1jkgodezB6GvRdZ1UKk04FDT1UHGjUSedSVMsFYhGoqqqqI1UqxWuTI0ztzArtZzxdqysrDq5Jvv1+HXg27IHNUOwAJ5FqGtL9ahaWVklGPATDpsbbyqVSiyvLON2uQmFwrYf62kndF1nObXEpSsXTUkEvZbl5RXOX7jcamL1EiKWLT3fwyzBagAvIArMt9TTtrKyasph6WvRdZ21bIbVTBq/30/A5O48CljLZrh05SKpdMoSAVlYWObS+ESriVUD+AnAlJwMswQLYAZxKPpusy5gF+nVjDiL12FuX0IQ5+ZWVlfIF/KEQmG8Hq/p12w3iqUiVyYvM7cwS61mzZGfqek5rkxI2zxrJv4jEjLar4fMPKztiAKvAoNmXsQuenqSjI2OWLpk60okGegbML0fYjtQLpeYXZhlxYTqCtdD13UuXppgacnRNa2uxwxwC6I5qimY6WGBSMU/B/xjMy9iF/l8gVx2nUQiblk6QrFYYCm1RLlcIuAP4PUqj2u3FEtFZmanmJiesCROtUmtVuPs2UuspOVXdGgSfhJ4xcwLmC1YICo5jNBCuVlbKZXLpNNrxOMxvF5zG6pupbAhXPnCOl6vV3lcOyCbW2NyZoLp2SlLhQpE3a4zr14g59wuNzfjz4HfNvsiZi8JN+lABOFHrLiYHbjdbg4fPkiXTZ2ZQ8EQPcleuhLmN3V1Eo1GnZX0CkupRctFapOVdIYLFy5b0qzVJiaAO4CM2ReySrAATgKPAy39NA0N9jM8PGBbKoLL5aars4vurm7C4fZttJrPr7O8sszK6orpeVTXQ9d1pqZmndyZeSfUgbdjsDDfTrFiSbjJFEKsHrTqgnaQza6Ty63T2dlhS+KnrusUinmWV5ZJr65Qq9Xwer1tsbtYLBVZWl5kcmaC+cU5CsW8bSkD1WqVs+cusbS0Ysv1LeTfAF+w6mJWelgAHoQS32PlRe3A6/VyeOwAnZ3Wtvu6HsFAkM54gnhHJ+EmLCC4V/KFPJm1VVYzaYqlot3mAOLQ/IWLV6hWq3abYjbPIFZOlpV/tVqwQBT5ewGR8tDy9Pf3cGBkqKkONXu9XmKRDmKxDqLhqKPK25TLZXL5HNncGtncWlOJQqPR4MrENPPzS3abYgU54E7Epppl2CFYAB/HQjfSbkKhIIfHDhKJNGcJGa/XSyQcJRqOEg6FCQZDTXGOsV6vUywWyBfy5PI51vO5phKorayvF7hw8TKFQnN4eRbwCWx4hu0SLIDPIc4btQWaprFvXy/7hweaytu6Hn6fn2AwRDAQxO/34/eJj8/nl7qhoOs6lUqZ8uanXKZYKlIsFihX7O2EsxMajQaTU7PMzS222hGbG/Fn2PTs2ilYfkQ86y67DLCDQMDP6KERRzc29Xq9eNwePB4vHo8Hj9uD2+1+Tci2emeNRgNd19F1nXq9Tq1eo1arUatVqdVrTesx7YRMJsul8QnbW4xZzHOIuJUt/9N2ChbAEPBDoLk7MphAT0+Skf2D+Hytv3vXalQqVSYmZ1r1eM2NWEY4GFN2GWBlWsN2ZIEfIY7uNP86SSL5fIGFRRGcjUZUCRkn0GjozMzOc/78OOutm7F+PeqIKgzP22mE3YIFcAXRXPHddhtiNbqus7aWYzmVxu/3mVocUGEMUWTvoiPaj5nEP0eUPLaVZhAsgO8DJ4DjdhtiB7VanVQqzWomS8DvJxBwTppBq5PJZLlw4TKzcwuOa0cmkf8GfNZuI8D+GNZWQsBjtEFS6c3oiEXZv3+AWKwtUtWakmw2x+TULGtrObtNsZtngIcAew5iXkMzCRbAPsQfqCXrZ+2WeDzG4EC/o3cUnUYmk2Vmdp5MJmu3Kc3ADMKBmLPbkE2aTbAAbgWeRFR4UADhcIiBgT66kwkVnDcBUcc9zezsAvl8UzgSzcAa8ADwst2GbKUZBQuEC/p1wGe3Ic2Ez+dlX38vvb1JVbhPAtVqlcXFFPPzS5QrFbvNaSYqwPsQIZqmolkFC0SqwxdpsSYWMtA0ja5EnN7e7qY5XO0kVjNrLC4ss5LOtOuO343QgY8Bf2G3IdthXYnM3fMXQBL4PZvtaDp0XSe1skpqZRW/30dvbzfJrk6VFnEDCsUiqdQqi4vLlMvKm7oBv0yTihU0t4e1yW8B/6fdRjiBcChIMpkgmUyY2qXaKRSLJVIraVLLafLtcyjZCP+SJn/WnCBYAL8PfNpuI5xEKBQkkYjT2dlBLBppi2C9rutkc+usrq6RTmfaqXKCDP7g5P13f+bU6WfttuOGNPOScCu/hDgs/XM22+EYCoUihUKRmZl5PG438XiMeLyDWCzSUkvHQrFIdm2dTGaNTCZLrXXrppvJ/4t4xpoeRwjWyfvv1k+dfvZTgBfRTVqxC2r1+msxLwCPx0MsGiEaCxOLRQmHQ3iaoP7VzajV6+TzBVGGOrtONrduWePTFubPgJ8/ef/djth9cIRgwWui9bOIcqw/a7c9TqZWq5FezYgO1hsE/H5C4SDhUJBwOEQwGMAf8NsiZLV6nXKpTLFYIp8vkC8UKeSLlMptVcbFCv4E+JRTxAocJFgAJ++/u37q9LM/jzgm8Es2m9NSlMrljR6Lmav+3ePxEPD7CAT8+P0+PF4vXo8Hr9eDZ+Ory+Xa+Giv/c4mmx5Qo6HTaDRoNBpUq6ImVrVao1qrUatWKZcrlEplSuWK8pqs4feAX3aSWIHDBAuEpwV89tTpZ/PAr9ttT6tTq9VYr9VYVxngrcS/Pnn/3f/CbiP2glN2Ca/H/wb8X3YboVA4iH+Og5+ZZikvs1dOAynEMYLW37dXKPaODvwi8Lt2G2KEVqjy+YeIYzwqIqtQbE8Z8Yz8od2GGKUVBAvgL4F3AWm7DVEomow0oprvX9ptiAxaRbBAdOC5Fxi32xCFokkYB96KKNfUErSSYAFcRIjWU3YbolDYzFOIZ+GC3YbIpNUEC0QQ/iHgb+w2RKGwib9BPAMt14esFQULRBeejwL/O6I9kULRDtQRaQsfRTwDLUerChaIbdz/G3gY0QBSoWhlUsB7ETlWjspe3w2tLFibfBfRrba562YoFHvnOeDNwHfsNsRs2kGwQLTWfhvwp3YbolBI5k8RzSJsax9vJe0iWCDW9D8NfAJo+2ZzCseTA/4pYk63ZLxqO9pJsDb5AnAHov+hQuFEfgDcCfy5zXZYTjsKFoiEupPAv0LtIiqcQx0xZ+8HLtlsiy20q2CBKAT4fwAPApM226JQ3IxJ4O2IOdu2BcPaWbA2OQ3cBnyeFt4OVjgWHbH0uw1x/KytUYIlWEPUin83cNlmWxSKTS4D70EE19dstqUpUIJ1Nd8FbgF+mzZ2uxW2U0PMwVtog9yq3aAE640UgV8F7gGet9kWRfvxPGLu/SpiLiq2oATr+vwIeAvwK6i8LYX55BBz7S2IuafYBiVYN6YG/A5wBPgiKiivkI+OmFtHEHNNhSJugBKsnTEPfBy4D3jaZlsUrcPTiDn1ccQcU9wEJVi7Y3OC/Y+oyqaKvXMZMYfUC3CXKMHaPTqiPvZx4BeAGXvNUTiIGcScOYaYQyrEsEuUYO2dCvBHwBjwGWDBXnMUTcwColP5GGLOVGy1xsEowTJOCfgD4BBiK7rlytIq9kwK+F8Rc+P3aaOqCmahBEseBUSy3wGEcE3ba47CRqYRc+AA8O8Qc0MhASVY8llHCNch4J8AP7TXHIWFPA98DHHvfxsxFxQSUYJlHlXgLxDlmR8CvoYKsrYiOuLePoSoUfWfEfdeYQJKsKzhe8CPASeA30N1qG4F0oi41AnEvf2evea0B9rIsTvttqEd8QOPIsrbvh3QbLVGsVN04HHgc8DfAmVbrWlDlGDZzyhCuH4K6LPZFsX2LCBKa3+ONq302SwowWoe3MC7gH8EfBiI2WtO25MFvgT8F0SJF1VKuwlQgtWcBBENYB9FxEfitlrTPmSAv0cs976JKu/SdCjBan58iB2o9yM6+47aa07LcQn4BmKn7zFUFnpTowTLeYwihOt9iIB9yFZrnEcBETj/OkKoVEzKQSjBcjYBRNffk4iT//cCEVstaj5yiB6U30c0cXgSdUTGsSjBai08iO4q9218HgAGbLXIemYRovT9jc+LqKJ4LYMSrNanG3jTxueWja8nEIF9J1MEzgAvAa9sfH0JWLbTKIW5KMFqT9yIWNhxYGTjc2DL12ZZVuYRxe4mgCsbXyeAVxGxJ5Vq0GZ47DZAYQt14PzGZzu6gf1AD5AEurZ8uje+RoEwYhcToHPjq5/XNwIKvJ4NvrrxtYIQohywgvCIVrZ8UsASotOx8pYUV/H/AzJBpmxi5SVvAAAAAElFTkSuQmCC";
  function No(t, n) {
    const e = jo();
    return No = function(r, o) {
      return r = r - 180, e[r];
    }, No(t, n);
  }
  function jo() {
    const t = ["628WpnFXb", "4268556wtrNLk", "16GRZKFj", "9805770RVbpUm", "6025CjaxYo", "15244911LoWeAh", "2466522svGQlt", "38424EMMatZ", "357jLOfMh", "img", "179069MVyBTQ", "2TjpLTP", "div"];
    return jo = function() {
      return t;
    }, jo();
  }
  const li = No;
  (function(t, n) {
    const e = No, r = t();
    for (; ; )
      try {
        if (-parseInt(e(182)) / 1 + -parseInt(e(183)) / 2 * (parseInt(e(191)) / 3) + -parseInt(e(185)) / 4 * (parseInt(e(189)) / 5) + -parseInt(e(192)) / 6 * (-parseInt(e(180)) / 7) + -parseInt(e(187)) / 8 * (parseInt(e(186)) / 9) + parseInt(e(188)) / 10 + parseInt(e(190)) / 11 === n) break;
        r.push(r.shift());
      } catch {
        r.push(r.shift());
      }
  })(jo, 554086);
  const gv = Ct[li(184)]`
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
`, zt = Ct[li(184)]`
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
`, Vt = Ct.p`
  height: 5px;
  margin-top: 2px;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
`, vv = Ct[li(181)]`
  position: absolute;
  backdrop-filter: blur(46px);
  border-radius: 50%;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.723);
  top: 50%;
  right: 5%;
`, bv = Ct[li(184)]`
  user-select: none;
  transition: opacity 0.6s ease;
  z-index: 3;
  opacity: 0.3;
`;
  (function(t, n) {
    const e = Un, r = t();
    for (; ; )
      try {
        if (-parseInt(e(407)) / 1 + -parseInt(e(411)) / 2 + -parseInt(e(400)) / 3 + -parseInt(e(391)) / 4 * (parseInt(e(421)) / 5) + -parseInt(e(423)) / 6 + -parseInt(e(410)) / 7 + -parseInt(e(406)) / 8 * (-parseInt(e(422)) / 9) === n) break;
        r.push(r.shift());
      } catch {
        r.push(r.shift());
      }
  })(Lo, 332852);
  function Lo() {
    const t = ["mozCancelF", "4NrbQvg", "requestFul", "kWglX", "fullscreen", "hWENw", "webkitRequ", "msExitFull", "EmZAe", "exitFullsc", "183507HhGeUy", "estFullscr", "enElement", "ullscreen", "mozRequest", "msRequestF", "848aaXIrV", "628604AGhhfv", "FullScreen", "sLwyM", "2312492vBeSVE", "497540oRQQsW", "reen", "webkitFull", "webkitExit", "bQwyU", "een", "Fullscreen", "yzueL", "lscreen", "screen", "535455rKwUCD", "196299uEnGYi", "3618744nZuCtM", "tor", "#screen_", "msFullscre", "Element", "eenElement", "querySelec", "ullScreen", "screenElem", "mozFullScr", "ent"];
    return Lo = function() {
      return t;
    }, Lo();
  }
  const Kc = () => {
    const t = Un;
    return document[t(394) + t(427)] || document[t(432) + t(428)] || document[t(413) + t(431) + t(389)] || document[t(426) + t(402)];
  }, yv = (t) => {
    const n = Un, e = document[n(429) + n(424)](n(425) + t);
    e[n(392) + n(419)] ? n(393) !== n(415) ? e[n(392) + n(419)]() : _0x69b6a5[n(396) + n(401) + n(416)]() : e[n(404) + n(408)] ? n(395) === n(395) ? e[n(404) + n(408)]() : _0x46ce04[n(397) + n(420)]() : e[n(396) + n(401) + n(416)] ? e[n(396) + n(401) + n(416)]() : e[n(405) + n(403)] && e[n(405) + n(403)]();
  };
  function Un(t, n) {
    const e = Lo();
    return Un = function(r, o) {
      return r = r - 389, e[r];
    }, Un(t, n);
  }
  const Sv = () => {
    const t = Un;
    document[t(399) + t(412)] ? document[t(399) + t(412)]() : document[t(390) + t(430)] ? t(409) === t(409) ? document[t(390) + t(430)]() : _0x2d50b2[t(414) + t(417)]() : document[t(414) + t(417)] ? t(398) !== t(398) ? _0x388856[t(399) + t(412)]() : document[t(414) + t(417)]() : document[t(397) + t(420)] && (t(418) === t(418) ? document[t(397) + t(420)]() : _0x47825[t(405) + t(403)]());
  };
  (function(t, n) {
    const e = wr, r = t();
    for (; ; )
      try {
        if (-parseInt(e(251)) / 1 * (-parseInt(e(418)) / 2) + -parseInt(e(446)) / 3 + -parseInt(e(238)) / 4 + -parseInt(e(379)) / 5 * (parseInt(e(303)) / 6) + parseInt(e(327)) / 7 * (-parseInt(e(230)) / 8) + -parseInt(e(265)) / 9 * (-parseInt(e(402)) / 10) + -parseInt(e(433)) / 11 * (-parseInt(e(281)) / 12) === n) break;
        r.push(r.shift());
      } catch {
        r.push(r.shift());
      }
  })(Mo, 961160);
  function wr(t, n) {
    const e = Mo();
    return wr = function(r, o) {
      return r = r - 168, e[r];
    }, wr(t, n);
  }
  function Mo() {
    const t = ["svg", "forEach", "7 16 3v2c2", "mousedown", ".015.057-.", "LPvFY", "zm0-6h-4V4", "pageX", "move", "-3.229 2-5", ".387 1.386", "Icon", "763650cWynlF", "0-2 .897-2", "MJMAe", "08 3.677L7", "4v-4c0-1.1", "clipboard", ".999-4.909", ".116c.026-", "OXBNo", "a.995.995 ", "03 0 2-.89", "QmRuH", "0 1-1V4a1 ", "3c.033 0 .", "33L12 5.86", "M16 7v10c1", "max", "Home", "readText", "0 0-.396-1", "mouse", "S18.387 17", "Back", "21200JbFcjB", "416 3.377 ", "get", "cursor", "v7h2zm5 14", "3 0 2-.897", "Show ID", "2-.116C7.0", " 0 0 0-.38", "0 18V4h10l", "m-2-4h2V3h", "0 1.767.51", "width", "includes", "tListener", "017.082-.0", "266800GpFRmO", "6v6h2v-4h4", "preventDef", "wbOLn", "path", "zIndex", "TZveH", "1 0 0 0-1-", "M5 5h5V3H3", "7a1 1 0 0 ", ".002 16H6.", "8.347l-3.0", "screenchan", "a1 1 0 0 0", "mousemove", "44594ZcVNak", "FuEEI", "27.05A1 1 ", ".225-1.1 2", "mozfullscr", " 2v5H4V5h3", "0h2v-6H4v2", "set", "opacity", "Sync", "zEizK", "M4 6h16v2H", "home", "442662gUBaiX", "M20 11V5c0", "27-1.547 5", "4v2h6zM8 2", "0v10z", "3 9a1.003 ", "enchange", ".103.897 2", "copy", "Hide ID", "touch_", "v2z", " 5.999-9S1", "click", "recents", " 0 0 1 1h1", " 2-2v-7c0-", "l10.283 7.", "0 0-1.554-", ".897-2 2v4", "circle", " 0 0 0-1 1", "msfullscre", "v2h8V5h3v6", "-1.052-3.3", "6zm0 4h6v2", "0 0 24 24", "isDown", "Recents", "48 3.832a1", "touchmove", "Qqkfq", "20px", "data", "current", "nPFdv", "-1.103-.89", "touchstart", "4zm0 5h16v", "Volume", "1v16a1 1 0", "M20 2H10c-", ".897-2-2-2", "right", "webkitfull", "h4zm12-6h-", "2 2h7c0 1.", "17-.056-.0", "2-2h-4V4h1", "left", "getAttribu", "10c-1.103 ", " 0 0 0-1.5", "0 0 0 14 2", "c1.103 0 2", "cgLOD", "H5v-5H3v7h", "6a1 1 0 0 ", "-7v2h5z", "69-.823l-1", "-2-2-2zm-1", "674.31a1 1", "menu_", "1.003 0 0 ", "nVJVA", "fvBUH", "fill", "s-.775-3.9", "93-.019a1.", "H4zm16-6h-", " 0 0 0 1.0", "11.75", " 2 2zm0-8h", "-1-1H8a1 1", "shortcutCo", "clientY", "clientX", "12%", "http://www", "822 13 9A1", "03-.897-2-", "grab", "taskId", "75z", "m4.431 12.", "7-2-2-2h-3", "closest", "0a.999.999", "345-5.236 ", "2 2h7c1.10", "h2.697l5.7", ".832L6.697", "0 0 0 .782", "2H4zm0 5h1", "pZSRI", "IfxWD", "V5h14v14z", ".089-1.218", ".21a1 1 0 ", "qHdLG", "2 2h10c1.1", "57-5.428 6", "H4c-1.103 ", "4c0-1.103-", "sync", "305376OgZEet", "shortcut", "getBoundin", "FGsYV", "gClientRec", "focus", "ent", "shortcutEv", "970912QddyfH", "Copy", "PPkdU", "75.931l2 1", "CqFCN", ".024l-14-1", "oqMzy", "data-id", "7 2-2V4c0-", ".w3.org/20", "yBwKB", "2 2zm2 7v-", "div", "12gaSPGo", "47 3.999 7", "JwrNI", " 0-2 .897-", "QpyUm", "7.032 15 7", "061-.016.0", "h-2v6h6z", "3 0-2 .897", "change", "-2-5zM4 17", "device_id", "QYkPZ", "6l3.612-4.", "441LaClFK", "type", "1.103-.897", "CYNkN", "min", "1.048z", "top", "103.897 2 ", "M16 21c3.5", "-2-2-2zm-9", "touch_clas", "mouseup", " 15H4V9z", "touch", " 0 0 0-.57", "now", "2232gyGEdo", "v5h-5v2h7z", "action", "height", "027 1.027 ", "stener", "255, 255, ", "showMenu", "M20.978 13", "M6 12h6v2H", "3a.986.986", ".614 16 19", "H13z", "00/svg", "addEventLi", "landscape", "MShvB", "13%", "PrbRV", "sbvxQ", "PcDqh", "5.46 1.701", "42SmwYBU", "ault", "9.527 4.54", " 2v10c0 1.", "assistive_", "M10 4H8v4H", "back", "target", "MWtGg", "9 21V3a1 1", "h-5c-1.103", "assistive", "1.103 0-2 ", " 7H4c-1.10", "Paste", " 2v16c0 1.", "volume", "removeEven", "zM4 20V10h", "wFmUA", "-.769zm-8.", "vYszd", "7 2-2v-4h4", "-2 2v6c0 1", "7CfPaiT", "7zm11-5h-2", "touchend", "0V4a1 1 0 ", "pageY", "EJnrH", "M16.75 2h-", "M20 3H4a1 ", "0 0 0 .38-", "0 0 1.645z", "3px", "59 15.016 ", "fullscreen", "passive", "IiVFF", "-.897 2-2V", "rgba(255, ", "2-.082-.03", "7h7l.001 7", "1 0 0 0-1 ", "10l.002 10", "zJuUS", "paste", "eenchange", "Screen", "4c-.025-.0", "4.445-2.96", "BogQE", "MjvyL", " 2v13c0 1.", "6v2H4z", "children", ".004 1.004", "JAeVu", "8v12.264l-", " 1 0 0 0 1", " 3.999 4.0", "1zm-1 16H5", ".257 5.127", "H6z"];
    return Mo = function() {
      return t;
    }, Mo();
  }
  const wv = sl((t, n) => {
    const e = wr, { displayId: r, isMobile: o, onSenData: i, status: s, imageRef: a, isShowDeviceId: c } = t, [l, d] = ot(0), [f, u] = ot(0), [v, g] = ot(null), [h, x] = ot(0), w = Xe(null), y = Xe(null), m = Xe(null), A = {};
    A[e(405)] = e(375), A[e(441)] = 0.3, A[e(423)] = 999;
    const [b, O] = ot(A), C = {};
    C[e(423)] = 999, C[e(284)] = "", C[e(414)] = e(298);
    const [L, F] = ot(C), Y = {};
    Y[e(423)] = 1e3;
    const [oe, G] = ot(Y), B = Xe(null), [W, H] = ot(null), te = Xe(null), Z = (I) => {
      const S = e;
      if (I[S(420) + S(304)](), s[S(404)][S(288)] == !0) return;
      const Oe = Mt[I[S(266)]], ce = a[S(480)], qe = m[S(480)], X = ce[S(232) + S(234) + "t"](), we = qe[S(232) + S(234) + "t"](), Ee = 3;
      let nt, Ye;
      const ut = X[S(414)] - we[S(414)], Ft = X[S(284)] - we[S(284)];
      if (I[S(266)][S(415)](S(278)))
        if (S(263) === S(263)) {
          const { touches: ge, changedTouches: ze } = I, Ze = ge[0] ?? ze[0];
          nt = Ze[S(374)], Ye = Ze[S(331)];
        } else [S(432), S(370), S(276)][S(368)]((ge) => {
          const ze = S;
          _0x585ead[ze(295) + ze(286)](ge, _0x3a0885);
        });
      else I[S(266)][S(415)](S(399)) && (nt = I[S(201)], Ye = I[S(200)]);
      if (Oe == Mt[S(370)])
        if (S(387) === S(387)) {
          s[S(440)]({ ...s[S(404)], isDown: !0 }), d(nt - we[S(174)]), u(Ye - we[S(271)]);
          const ge = {};
          ge[S(441)] = 1, ge[S(405)] = S(206);
          const ze = { ...b, ...ge };
          O(ze), x(performance[S(280)]());
        } else {
          const ge = { ..._0x103dc1[S(404)] };
          ge[S(473)] = !1, _0x2c7ece[S(440)](ge);
        }
      else if (Oe == Mt[S(432)])
        if (S(300) === S(300)) {
          if (s[S(404)][S(473)] == !1) return;
          let ge = nt - l - X[S(174)], ze = Ye - f - X[S(271)];
          ge = Math[S(395)](Ee, Math[S(269)](ge, ut) - Ee), ze = Math[S(395)](Ee, Math[S(269)](ze, Ft) - Ee);
          const Ze = {};
          Ze[S(271)] = ze + "px", Ze[S(174)] = ge + "px";
          const Pt = { ...L, ...Ze };
          F(Pt);
          const tt = {};
          tt.x = ge, tt.y = ze, te[S(480)] = tt;
        } else _0x205b7e();
      else if (Oe == Mt[S(276)])
        if (S(354) !== S(424)) {
          const ge = performance[S(280)]() - h;
          if (v == Mt[S(370)] || ge < 100)
            if (S(301) !== S(348)) {
              const xt = {};
              xt[S(288)] = !0, xt[S(473)] = !1, s[S(440)]({ ...s[S(404)], ...xt });
            } else _0x495f53[S(295) + S(286)](_0x396907, _0x419537);
          else s[S(440)]({ ...s[S(404)], isDown: !1 });
          const ze = te[S(480)].x > ut / 2 ? ut - Ee : Ee, Ze = {};
          Ze[S(174)] = ze + "px";
          const Pt = { ...L, ...Ze };
          F(Pt);
          const tt = {};
          tt[S(441)] = 0.3, tt[S(405)] = S(375);
          const Yt = { ...b, ...tt };
          O(Yt);
        } else
          _0x22487b() ? _0x4d1cf9() : _0xa42734(_0x4f2ffd);
      g(Oe), qe[S(235)]();
    }, Q = async (I) => {
      const S = e;
      I[S(420) + S(304)]();
      const Oe = I[S(310)][S(211)](S(250))[S(175) + "te"](S(245));
      if (Oe === S(339))
        if (Kc())
          S(421) === S(253) ? _0x3f0156[S(295) + S(286)](S(459), _0x552bb0) : Sv();
        else if (S(240) === S(240)) yv(r);
        else return;
      else {
        const ce = {};
        ce[S(283)] = S(237) + S(236), ce[S(231)] = Oe, ce[S(479)] = "";
        const qe = ce;
        if (Oe === S(349))
          if (S(355) === S(355)) qe[S(479)] = await navigator[S(384)][S(397)]();
          else {
            const X = {};
            X[S(288)] = !0, X[S(473)] = !1;
            const we = { ..._0x41c4d7[S(404)], ...X };
            _0x1b1294[S(440)](we);
          }
        Oe === S(454) && (S(311) !== S(297) ? qe[S(207)] = S(199) + "py" : _0x152d90 && _0x550cb3[S(320) + S(416)](S(459), _0x56bd9b)), i(Bs, qe);
      }
      s[S(440)]({ ...s[S(404)], showMenu: !1 }), y[S(480)][S(235)]();
    }, ee = (I) => {
      const S = Kc();
      i(xv, S);
    };
    it(() => {
      requestAnimationFrame(() => {
        const I = wr;
        if (I(233) !== I(190)) {
          const S = { ...oe };
          S[I(441)] = s[I(404)][I(288)] ? 1 : 0, G(S);
        } else _0x2bbc2f[I(368)]((S) => {
          const Oe = I;
          _0x1973a7[Oe(295) + Oe(286)](S, _0x12ea72);
        });
      });
    }, [s]), it(() => {
      const I = e, S = a[I(480)], Oe = [I(339) + I(260), I(169) + I(430) + "ge", I(437) + I(350), I(468) + I(452)];
      return S && (I(189) === I(244) ? _0x8e8870[I(207)] = I(199) + "py" : Oe[I(368)]((ce) => {
        const qe = I;
        S[qe(295) + qe(286)](ce, ee);
      })), () => {
        const ce = I;
        if (ce(372) !== ce(443)) {
          if (S)
            if (ce(248) !== ce(268)) S[ce(320) + ce(416)](ce(459), ee);
            else {
              const qe = { ..._0x45c9cd[ce(404)] };
              qe[ce(473)] = !0, _0x53d0ac[ce(440)](qe), _0x50ec2f(_0x25eed9 - _0x456e51[ce(174)]), _0x57bf00(_0x518845 - _0x52bd2b[ce(271)]);
              const X = {};
              X[ce(441)] = 1, X[ce(405)] = ce(206);
              const we = { ..._0x2c7b72, ...X };
              _0x4b714e(we), _0xe58447(_0x3fa7f9[ce(280)]());
            }
        } else _0x5de9c0[ce(320) + ce(416)](ce(459), _0x28c4cd);
      };
    }, []), it(() => {
      const I = e;
      if (I(255) !== I(255)) _0x569765[I(320) + I(416)](I(459), _0x12de87);
      else {
        const S = m[I(480)], Oe = y[I(480)];
        if (Oe && Oe[I(295) + I(286)](I(459), Q), S) {
          const ce = {};
          ce[I(340)] = !1;
          const qe = ce;
          return o ? I(299) === I(481) ? (_0x1cfcd7[I(295) + I(286)](I(483), _0x37a991, _0x1db1a6), _0x2d32e4[I(295) + I(286)](I(476), _0x50f5c1, _0x32bdb2), _0x719a06[I(295) + I(286)](I(329), _0x5ab321)) : (S[I(295) + I(286)](I(483), Z, qe), S[I(295) + I(286)](I(476), Z, qe), S[I(295) + I(286)](I(329), Z)) : I(180) === I(390) ? _0x31e4b2[I(295) + I(286)](_0x554e9e, _0x1e3e40) : [I(432), I(370), I(276)][I(368)]((X) => {
            const we = I;
            if (we(242) === we(242)) S[we(295) + we(286)](X, Z);
            else {
              const { touches: Ee, changedTouches: nt } = _0x4d639b, Ye = Ee[0] ?? nt[0];
              _0x2f39e7 = Ye[we(374)], _0x1ba7dd = Ye[we(331)];
            }
          }), () => {
            const X = I;
            if (Oe)
              if (X(322) !== X(322)) {
                const we = _0x254076[X(280)]() - _0x173a67;
                if (_0xc1663e == _0x59c335[X(370)] || we < 100) {
                  const ge = {};
                  ge[X(288)] = !0, ge[X(473)] = !1;
                  const ze = { ..._0x410dbc[X(404)], ...ge };
                  _0x20d9b4[X(440)](ze);
                } else {
                  const ge = { ..._0x826866[X(404)] };
                  ge[X(473)] = !1, _0x1fccf4[X(440)](ge);
                }
                const Ee = _0x323b4a[X(480)].x > _0x4fbddb / 2 ? _0x3bf4e2 - _0x2b0214 : _0x596335, nt = {};
                nt[X(174)] = Ee + "px";
                const Ye = { ..._0x2a6d4c, ...nt };
                _0x4448a5(Ye);
                const ut = {};
                ut[X(441)] = 0.3, ut[X(405)] = X(375);
                const Ft = { ..._0x39b331, ...ut };
                _0x2d1820(Ft);
              } else Oe[X(320) + X(416)](X(459), Q);
            if (S)
              if (o) [X(483), X(476), X(329)][X(368)]((we) => {
                const Ee = X;
                Ee(224) === Ee(224) ? S[Ee(320) + Ee(416)](we, Z) : (_0x13948d = _0x4c1a5b[Ee(201)], _0x3f62fb = _0x39e232[Ee(200)]);
              });
              else if (X(219) === X(477)) {
                const we = { ..._0x5184e6 };
                we[X(441)] = _0x59c0e7[X(404)][X(288)] ? 1 : 0, _0x5845db(we);
              } else [X(432), X(370), X(276)][X(368)]((we) => {
                const Ee = X;
                Ee(324) === Ee(381) ? _0x47e939(_0x6c42d5) : S[Ee(320) + Ee(416)](we, Z);
              });
          };
        }
      }
    }, [o, Z]);
    const ae = () => {
      const I = e;
      if (I(360) === I(332)) _0x40e1a4[I(320) + I(416)](_0x3b380d, _0x6f4273);
      else {
        const S = {};
        S[I(423)] = 999, S[I(284)] = B[I(480)] == I(296) ? I(202) : null, S[I(414)] = B[I(480)] != I(296) ? I(202) : null, S[I(271)] = I(478), S[I(168)] = I(337), F(S);
      }
    };
    al(n, () => ({ fixTouch: (I) => {
      const S = e;
      S(434) === S(341) ? [S(483), S(476), S(329)][S(368)]((Oe) => {
        const ce = S;
        _0x26fb98[ce(320) + ce(416)](Oe, _0x17964c);
      }) : (I && (S(220) !== S(220) ? _0x2e63f1(_0x3e6229) : B[S(480)] = I), ae());
    }, setFullscreen: (I) => {
      H(I);
    } }));
    const ie = {};
    ie[e(191)] = e(343) + e(287) + "1)";
    const K = {};
    K.d = W ? e(308) + e(449) + e(439) + e(170) + e(419) + e(373) + e(258) : e(426) + e(406) + e(181) + e(328) + e(282) + e(412) + e(183);
    const ne = {};
    ne[e(358)] = e(351);
    const xe = {};
    xe[e(191)] = e(343) + e(287) + "1)";
    const de = {};
    de.d = e(487) + e(315) + e(465) + e(227) + e(380) + e(306) + e(272) + e(225) + e(389) + e(325) + e(179) + e(342) + e(228) + e(488) + e(321) + e(347) + e(194) + e(383) + e(205) + e(173) + e(450);
    const me = {};
    me.d = e(290) + e(471) + e(366);
    const R = {};
    R[e(358)] = e(239);
    const z = {};
    z[e(191)] = e(343) + e(287) + "1)";
    const k = {};
    k.d = e(447) + e(482) + e(210) + e(431) + e(198) + e(467) + e(227) + e(380) + e(356) + e(272) + e(171) + e(272) + e(214) + e(407) + e(462) + e(267) + e(274) + e(438) + e(469) + e(313) + e(254) + e(249) + e(345) + e(293);
    const j = {};
    j[e(358)] = e(317);
    const E = {};
    E[e(191)] = e(343) + e(287) + "1)";
    const M = {};
    M.d = e(333) + e(176) + e(380) + e(318) + e(272) + e(225) + e(389) + e(246) + e(267) + e(185) + e(411) + e(428) + e(208);
    const ke = {};
    ke.cx = e(196), ke.cy = "18", ke.r = "1";
    const N = {};
    N[e(358)] = e(c ? 455 : 408);
    const J = {};
    J[e(191)] = e(343) + e(287) + "1)";
    const Ce = {};
    Ce.d = e(273) + e(448) + e(385) + e(458) + e(305) + e(369) + e(377) + e(363) + e(252) + e(400) + e(292) + e(457);
    const dt = {};
    dt.d = e(394) + e(436) + e(376) + e(192) + e(261) + e(215) + e(475) + e(359) + e(195) + e(435) + e(178) + e(330) + e(464) + e(216) + e(316) + e(259) + e(326) + e(453) + e(197) + e(392) + e(257) + e(193) + e(285) + e(335) + e(386) + e(371) + e(417) + e(393) + e(361) + e(353) + e(352) + e(172) + e(344) + e(291) + e(410) + e(409) + e(338) + e(256) + e(277);
    const Rt = {};
    Rt[e(358)] = e(485);
    const lt = {};
    lt[e(191)] = e(343) + e(287) + "1)";
    const kt = {};
    kt.d = e(289) + e(223) + e(398) + e(243) + e(212) + e(177) + e(241) + e(427) + e(413) + e(264) + e(403) + e(302) + e(470) + e(226) + e(222) + e(388) + e(217) + e(323) + e(186) + e(279) + e(429) + e(382) + e(365) + e(463) + e(213) + e(270);
    const Me = {};
    Me[e(358)] = e(442);
    const Te = {};
    Te[e(191)] = e(343) + e(287) + "1)";
    const Ke = {};
    Ke.d = e(444) + e(484) + e(218) + e(357);
    const bt = {};
    bt[e(358)] = e(474);
    const ht = {};
    ht[e(191)] = e(343) + e(287) + "1)";
    const sn = {};
    sn.d = e(334) + e(346) + e(486) + e(461) + e(182) + e(391) + e(425) + e(364) + e(221);
    const an = {};
    an[e(358)] = e(396);
    const Cn = {};
    Cn[e(191)] = e(343) + e(287) + "1)";
    const cn = {};
    cn.d = e(209) + e(204) + e(362) + e(312) + e(177) + e(184) + e(451) + e(188) + e(336);
    const ln = {};
    return ln[e(358)] = e(401), U.jsxs(U.Fragment, { children: [s[e(404)][e(288)] ? U.jsxs(gv, { id: e(307) + e(187) + r, style: oe, ref: y, children: [U.jsxs(zt, { "data-id": e(339), children: [U.jsx(e(367), { xmlns: e(203) + e(247) + e(294), width: "28", height: "28", viewBox: e(472), style: ie, children: U.jsx(e(422), K) }), U.jsx(Vt, ne)] }), U.jsxs(zt, { "data-id": e(454), children: [U.jsxs(e(367), { xmlns: e(203) + e(247) + e(294), width: "28", height: "28", viewBox: e(472), style: xe, children: [U.jsx(e(422), de), U.jsx(e(422), me)] }), U.jsx(Vt, R)] }), U.jsxs(zt, { "data-id": e(349), children: [U.jsx(e(367), { xmlns: e(203) + e(247) + e(294), width: "28", height: "28", viewBox: e(472), style: z, children: U.jsx(e(422), k) }), U.jsx(Vt, j)] }), U.jsxs(zt, { "data-id": e(262), children: [U.jsxs(e(367), { xmlns: e(203) + e(247) + e(294), width: "28", height: "28", viewBox: e(472), style: E, children: [U.jsx(e(422), M), U.jsx(e(466), ke)] }), U.jsx(Vt, N)] }), U.jsxs(zt, { "data-id": e(319), children: [U.jsxs(e(367), { xmlns: e(203) + e(247) + e(294), width: "25", height: "25", viewBox: e(472), style: J, children: [U.jsx(e(422), Ce), U.jsx(e(422), dt)] }), U.jsx(Vt, Rt)] }), U.jsxs(zt, { "data-id": e(229), children: [U.jsx(e(367), { xmlns: e(203) + e(247) + e(294), width: "28", height: "28", viewBox: e(472), style: lt, children: U.jsx(e(422), kt) }), U.jsx(Vt, Me)] }), U.jsxs(zt, { "data-id": e(460), children: [U.jsx(e(367), { xmlns: e(203) + e(247) + e(294), width: "28", height: "28", viewBox: e(472), style: Te, children: U.jsx(e(422), Ke) }), U.jsx(Vt, bt)] }), U.jsxs(zt, { "data-id": e(445), children: [U.jsx(e(367), { xmlns: e(203) + e(247) + e(294), width: "28", height: "28", viewBox: e(472), style: ht, children: U.jsx(e(422), sn) }), U.jsx(Vt, an)] }), U.jsxs(zt, { "data-id": e(309), children: [U.jsx(e(367), { xmlns: e(203) + e(247) + e(294), width: "28", height: "28", viewBox: e(472), style: Cn, children: U.jsx(e(422), cn) }), U.jsx(Vt, ln)] })] }) : null, U.jsx(bv, { id: e(307) + e(275) + "s_" + r, className: e(314), ref: w, style: b, children: U.jsx(vv, { style: L, src: mv, className: e(314), id: e(307) + e(456) + r, alt: e(378), ref: m, draggable: !1 }) })] });
  }), De = qn;
  (function(t, n) {
    const e = qn, r = t();
    for (; ; )
      try {
        if (parseInt(e(529)) / 1 * (parseInt(e(540)) / 2) + parseInt(e(466)) / 3 * (-parseInt(e(527)) / 4) + -parseInt(e(491)) / 5 + parseInt(e(487)) / 6 * (-parseInt(e(479)) / 7) + -parseInt(e(492)) / 8 * (parseInt(e(524)) / 9) + parseInt(e(533)) / 10 + parseInt(e(511)) / 11 * (parseInt(e(517)) / 12) === n) break;
        r.push(r.shift());
      } catch {
        r.push(r.shift());
      }
  })(Do, 523672);
  function qn(t, n) {
    const e = Do();
    return qn = function(r, o) {
      return r = r - 462, e[r];
    }, qn(t, n);
  }
  function Do() {
    const t = ["innerHeigh", "landscape", "rnZtz", "optimizeFo", "decoder", "setIsConne", "celeration", "scale", "getContext", "een", "Decoder er", "RmdYG", "canvas", "hardwareAc", "videoMeta", "rootSize", "1182049llXzoB", "lock", "tion", "ctx", "autoResize", "ror:", "264lNczkk", "maxWidth", "portrait", "dware", "HcsIb", "decode", "ZlJDs", "7545591dHXMzC", "height", "configure", "64vauuzk", "concat", "150581WgLszM", "codec", "isKeyFrame", "isPlay", "8014400nuMuzw", "from", "prefer-har", "codedHeigh", "key", "concatUint", "setFullscr", "10EfGSHC", "upgEV", "dxjCH", "close", "isMobile", "rotate", "delta", "102909QUQrKf", "vAvVN", "clearRect", "length", "round", "state", "drawImage", "pItEE", "codedWidth", "now", "setOrienta", "8Arrays", "YpCTg", "7rlcYHK", "avc1.64001", "resizedWid", "orientatio", "agvQD", "translate", "setVideoMe", "iframe", "5761446NdEASR", "width", "error", "buildDecod", "5236415PnfoFw", "8VhqWxD", "qdBug", "rLatency"];
    return Do = function() {
      return t;
    }, Do();
  }
  var Zc, Jc, Qc, el, tl, nl, rl, ol, il;
  il = De(539) + De(504), ol = De(481) + "th", rl = De(476) + De(513), nl = De(515), tl = De(485) + "ta", el = De(490) + "er", Qc = De(531), Jc = De(538) + De(477), Zc = De(522);
  class Ev {
    constructor(n, e, r, o) {
      It(this, il, (n) => {
        const e = De;
        if (n) {
          const r = window[e(495) + "t"] + 10, o = this[e(481) + "th"](null, this[e(510)][e(488)], this[e(510)][e(525)], r, r);
          this[e(488)] = o[e(488)], this[e(525)] = o[e(525)];
        } else this[e(488)] = this[e(510)][e(488)], this[e(525)] = this[e(510)][e(525)];
      });
      It(this, ol, (n, e, r, o, i) => {
        const s = De;
        let a;
        return n && o > this[s(518)] && r > e && (i = this[s(518)]), i && (s(506) === s(506) ? (a = i / e * r, a > o && (i = o / r * e, a = o / e * e)) : this[s(515)](_0x42485e[s(474)], _0x2bf41b[s(536) + "t"])), { width: Math[s(470)](i), height: Math[s(470)](a) };
      });
      It(this, rl, (n) => {
        var r;
        const e = De;
        this[e(482) + "n"] = n, this[e(463)] && (e(493) === e(497) ? (r = this[e(500) + "ct"]) == null || r.call(this, !0) : screen[e(482) + "n"][e(512)](n));
      });
      It(this, nl, (n, e) => {
        var a;
        const r = De, o = this[r(463)] == !0 ? window[r(495) + "t"] - 12 : window[r(495) + "t"] - 50, i = this[r(481) + "th"](!0, n, e, o, o);
        this[r(488)] = i[r(488)], this[r(525)] = i[r(525)], !this[r(510)] && ((a = this[r(500) + "ct"]) == null || a.call(this, !0));
        const s = {};
        s[r(488)] = i[r(488)], s[r(525)] = i[r(525)], this[r(510)] = s;
      });
      It(this, tl, (n) => {
        const e = De, r = n instanceof Uint8Array ? n : new Uint8Array(n);
        this[e(509)] = r;
      });
      It(this, el, () => {
        const n = De, e = new VideoDecoder({ output: async (o) => {
          const i = qn, s = await createImageBitmap(o);
          if ((!this[i(488)] || !this[i(525)]) && (i(467) === i(478) ? (this[i(482) + "n"] = _0xf3b0bc, this[i(463)] && _0x5a8bac[i(482) + "n"][i(512)](_0x1cffd5)) : this[i(515)](o[i(474)], o[i(536) + "t"])), this[i(514)][i(468)](0, 0, this[i(488)], this[i(525)]), this[i(482) + "n"] == i(496))
            if (i(541) === i(542)) {
              if (_0x3c7b17[_0x480799] === 0 && _0x424e60[_0x7dbef5 + 1] === 0 && _0x339b0c[_0x105206 + 2] === 0 && _0x2960ac[_0x382887 + 3] === 1)
                return (_0x188d29[_0x48f029 + 4] & 31) === 5;
            } else this[i(507)][i(488)] = this[i(525)], this[i(507)][i(525)] = this[i(488)], this[i(514)][i(484)](0, this[i(488)]), this[i(514)][i(464)](Math.PI / 2), this[i(514)][i(502)](-1, -1), this[i(514)][i(472)](s, 0, 0, this[i(488)], this[i(525)]);
          else i(473) === i(523) ? (_0x3b06ba = _0x2b5863 / _0xc66007 * _0x434185, _0x35da2e = _0xf2516e / _0x51d813 * _0x16824f) : (this[i(507)][i(488)] = this[i(488)], this[i(507)][i(525)] = this[i(525)], this[i(514)][i(472)](s, 0, 0, this[i(488)], this[i(525)]));
          s[i(462)](), o[i(462)]();
        }, error: (o) => console[n(489)](n(505) + n(516), o) }), r = {};
        return r[n(530)] = n(480) + "E", r[n(508) + n(501)] = n(535) + n(520), r[n(498) + n(494)] = !0, e[n(526)](r), e;
      });
      It(this, Qc, (n) => {
        const e = De;
        for (let r = 0; r <= n[e(469)] - 4; r++)
          if (n[r] === 0 && n[r + 1] === 0 && n[r + 2] === 0 && n[r + 3] === 1)
            return (n[r + 4] & 31) === 5;
        for (let r = 0; r <= n[e(469)] - 3; r++)
          if (n[r] === 0 && n[r + 1] === 0 && n[r + 2] === 1)
            return (n[r + 3] & 31) === 5;
        return !1;
      });
      It(this, Jc, (n, e) => {
        const r = De, o = Array[r(534)](n)[r(528)](Array[r(534)](e));
        return new Uint8Array(o);
      });
      It(this, Zc, (n) => {
        const e = De;
        if (!this[e(499)] || this[e(499)][e(471)] == e(462) || !this[e(509)]) return;
        let r = n instanceof Uint8Array ? n : new Uint8Array(n);
        const o = this[e(531)](r);
        if (o)
          if (e(521) !== e(483)) this[e(486)] = r;
          else
            return (_0x320481[_0x357d5f + 3] & 31) === 5;
        this[e(486)] && this[e(509)] && (!this[e(532)] && (r = this[e(538) + e(477)](this[e(509)], this[e(486)]), this[e(532)] = !0), this[e(499)][e(522)](new EncodedVideoChunk({ timestamp: performance[e(475)]() * 1e3, type: e(o ? 537 : 465), data: r })));
      });
      const i = qn;
      this[i(507)] = n, this[i(518)] = e, this[i(463)] = r, this[i(500) + "ct"] = o, this[i(514)] = n[i(503)]("2d"), this[i(499)] = this[i(490) + "er"](), this[i(509)] = null, this[i(486)] = null, this[i(532)] = null, this[i(488)] = null, this[i(525)] = null, this[i(510)] = null, this[i(482) + "n"] = i(519);
    }
  }
  (function(t, n) {
    const e = Zt, r = t();
    for (; ; )
      try {
        if (parseInt(e(228)) / 1 * (-parseInt(e(210)) / 2) + -parseInt(e(215)) / 3 + -parseInt(e(142)) / 4 + parseInt(e(219)) / 5 * (parseInt(e(125)) / 6) + -parseInt(e(140)) / 7 + parseInt(e(165)) / 8 + parseInt(e(190)) / 9 === n) break;
        r.push(r.shift());
      } catch {
        r.push(r.shift());
      }
  })(Bo, 536732);
  function Zt(t, n) {
    const e = Bo();
    return Zt = function(r, o) {
      return r = r - 119, e[r];
    }, Zt(t, n);
  }
  sl((t, n) => {
    const e = Zt, { serve: r, dataDevice: o, maxWidth: i, showAssistive: s, showDeviceId: a, syncEvent: c, syncButton: l } = t, d = o[e(243)], f = /iPhone|iPad|iPod|Android/i[e(195)](navigator[e(123)]), u = e(133), v = Xe(null), g = Xe(null), h = Xe(null), [x, w] = ot(null), [y, m] = ot(null), A = {};
    A[e(251)] = !1, A[e(148)] = !1;
    const [b, O] = ot(A), [C, L] = ot(null), F = e(220) + d, Y = e(157) + d, oe = e(213) + "n_" + d, G = Xe(null), [B, W] = ot([]), H = Xe(null), te = Xe(/* @__PURE__ */ new Map());
    it(() => {
      const R = e;
      if (R(177) === R(177)) m(a);
      else {
        const z = _0x3b2f3a(() => {
          const k = R;
          _0xefabca[k(184)][k(153)](_0x160da1[k(180)]);
          const j = {};
          j[k(202)] = _0x3305bb[k(202)], j[k(180)] = _0x3f6c40[k(180)], j[k(126)] = !1, j[k(135)] = k(201) + k(236) + k(152), _0x54f304(j);
        }, _0x3ee904);
        _0x544645[R(184)][R(134)](_0xe9e201[R(180)], (k) => {
          _0x4d9334(z), _0x1a01ed(k);
        }), _0x519f76[R(184)][R(187)](R(135), _0x1d90d9);
      }
    }, [a]);
    const Z = (R) => {
      W((z) => [...z, R]);
    }, Q = (R) => {
      const z = e;
      v[z(184)][z(187)](z(135), R), c == null || c(R);
    };
    al(n, () => ({ api: async function(R, z = 5e3) {
      const k = e;
      if (k(211) === k(120)) _0x959464(_0x28f712[k(243)]);
      else return new Promise((j, E) => {
        const M = k, ke = setTimeout(() => {
          const N = Zt;
          if (N(237) === N(207)) _0x57b6a9[N(184)][N(187)](N(135), _0x2bbe8a), _0x5510fa == null || _0x5510fa(_0x36041c);
          else {
            te[N(184)][N(153)](R[N(180)]);
            const J = {};
            J[N(202)] = R[N(202)], J[N(180)] = R[N(180)], J[N(126)] = !1, J[N(135)] = N(201) + N(236) + N(152), E(J);
          }
        }, z);
        te[M(184)][M(134)](R[M(180)], (N) => {
          const J = M;
          if (J(192) !== J(178)) clearTimeout(ke), j(N);
          else {
            const Ce = _0xa653a1[J(171) + J(137)] || _0x293c36[J(164) + J(143) + J(186)] || _0x3190bd[J(214) + J(174)] || _0x48908f[J(230) + J(144)];
            _0x21288b[J(184)][J(183) + J(212)](!!Ce), _0x252cfe[J(184)][J(183) + J(212)](!!Ce), _0x3e4e99[J(184)][J(124)]();
          }
        }), v[M(184)][M(187)](M(135), R);
      });
    }, sync: function(R) {
      const z = e;
      z(136) === z(216) ? _0x3d7962(_0x503c45) : v[z(184)][z(187)](z(135), R);
    } })), it(() => {
      (async () => {
        const R = Zt;
        if (R(254) === R(176))
          if (_0xe1c5[R(126)] == !0) {
            _0x3a0c7c[R(184)] = _0x2bc1e0;
            const z = {};
            z[R(202)] = R(168) + R(186), _0x32e3e5[R(187)](R(135), z);
          } else {
            const z = {};
            z[R(172)] = _0x496f15[R(172)], z[R(224)] = R(127), _0x3cccfb(z);
          }
        else try {
          const z = {};
          z[R(238) + "pe"] = R(241) + R(154);
          const k = {};
          k[R(243)] = o[R(243)], k[R(119)] = o[R(218)];
          const j = {};
          j[R(217)] = r, j[R(204)] = R(155), j[R(131)] = 1e4, j[R(203)] = z, j[R(197)] = k;
          const E = j, M = await cv(E);
          w(M[R(197)]);
        } catch (z) {
          if (R(182) === R(182)) {
            const k = {};
            k[R(172)] = z, k[R(224)] = R(127), Z(k);
          } else _0x35b6f2(_0x2dcca5), _0x1f5f13[R(184)][R(153)](_0x26847c[R(180)]);
        }
      })();
    }, []), it(() => {
      const R = e;
      if (v[R(184)] || !x) return;
      const z = {};
      z[R(162) + "on"] = !1;
      const k = no(x, z);
      return k.on(R(149), () => {
        const j = R;
        if (j(189) !== j(250)) {
          const E = {};
          E[j(202)] = j(149), E[j(188) + "t"] = u, E[j(243)] = o[j(243)], E[j(221)] = f, E[j(218)] = o[j(218)], k[j(187)](j(235), E);
        } else _0x1a2d74 && _0x4a1cb8[j(229)]();
      }), k.on(R(235), (j) => {
        const E = R;
        if (j[E(126)] == !0)
          if (E(139) === E(139)) {
            v[E(184)] = k;
            const M = {};
            M[E(202)] = E(168) + E(186), k[E(187)](E(135), M);
          } else {
            const M = _0x4dfe17[E(184)][E(193)](_0x16215f[E(180)]);
            M && (M(_0x18e962), _0x2d8c5c[E(184)][E(153)](_0x477431[E(180)]));
          }
        else {
          const M = {};
          M[E(172)] = j[E(172)], M[E(224)] = E(127), Z(M);
        }
      }), k.on(R(163), (j) => {
        const E = R;
        H[E(184)][E(167)](j);
      }), k.on(R(181), (j) => {
        const E = R;
        if (j) {
          if (E(160) !== E(160)) {
            const M = {};
            M[E(202)] = E(200) + E(191), _0x2e5239[E(187)](E(181), M);
          } else if (H[E(184)][E(208) + "ta"](j), !H[E(184)][E(156)]) {
            const M = {};
            M[E(202)] = E(253) + "me", k[E(187)](E(135), M);
          }
        } else {
          const M = {};
          M[E(202)] = E(200) + E(191), k[E(187)](E(181), M);
        }
      }), k.on(R(135), (j) => {
        const E = R;
        if (E(242) !== E(242)) {
          const M = {};
          M[E(172)] = _0x32d220[E(172)], M[E(224)] = E(127), _0xd925d6(M);
        } else {
          if ((j[E(202)] == E(185) || j[E(202)] == E(249) + E(186)) && j[E(161)][E(252)] > 0) navigator[E(130)][E(198)](j[E(161)]);
          else if (j[E(202)] == E(199) + "n")
            if (E(147) === E(169)) {
              const M = {};
              M[E(202)] = E(149), M[E(188) + "t"] = _0x18cd59, M[E(243)] = _0x4cfc6c[E(243)], M[E(221)] = _0x201169, M[E(218)] = _0xae6756[E(218)], _0x41089e[E(187)](E(235), M);
            } else H[E(184)][E(222) + E(141)](j[E(232)]), G[E(184)][E(124)](j[E(232)]);
          if (j[E(180)])
            if (E(206) !== E(179)) {
              const M = te[E(184)][E(193)](j[E(180)]);
              if (M)
                if (E(239) !== E(239)) {
                  const ke = {};
                  ke[E(172)] = E(205) + E(151) + E(248) + _0x1500cc[E(233)], ke[E(224)] = E(244), _0x5ed054(ke);
                } else M(j), te[E(184)][E(153)](j[E(180)]);
            } else
              _0x4b2abb === _0x52b036 && _0x15d325[E(247)] === E(243) ? _0x4a2d02(!_0x58254e) : _0x1df910 === _0x2fbd3e && _0x51518c[E(247)] === E(194) ? _0x1fb47f(_0xd3166d[E(243)]) : _0x2a7116(_0x2c58dd);
        }
      }), k.on(R(170) + R(240), (j) => {
        const E = R, M = {};
        M[E(172)] = j, M[E(224)] = E(127), Z(M);
      }), k.on(R(229), (j) => {
        const E = R, M = {};
        M[E(172)] = E(205) + E(151) + E(248) + j[E(233)], M[E(224)] = E(244), Z(M);
      }), () => {
        const j = R;
        k && (j(175) !== j(175) ? _0x1dced5((E) => [...E, _0x5b1f41]) : k[j(229)]());
      };
    }, [x]), it(() => {
      const R = e, z = h[R(184)];
      H[R(184)] = new Ev(z, i, f, L);
    }, []), it(() => {
      const R = e, z = () => {
        const k = Zt;
        if (k(196) !== k(196)) _0xfded5[k(184)][k(167)](_0x12a2d0);
        else {
          const j = document[k(171) + k(137)] || document[k(164) + k(143) + k(186)] || document[k(214) + k(174)] || document[k(230) + k(144)];
          H[k(184)][k(183) + k(212)](!!j), G[k(184)][k(183) + k(212)](!!j), G[k(184)][k(124)]();
        }
      };
      return document[R(166) + R(246)](R(171) + R(128), z), () => {
        const k = R;
        document[k(150) + k(226)](k(171) + k(128), z);
      };
    }, []);
    const ee = {};
    ee[e(227)] = o[e(243)];
    const ae = {};
    ae[e(145)] = e(132);
    const ie = {};
    ie[e(145)] = e(132);
    const K = {};
    K[e(145)] = e(132);
    const ne = {};
    ne[e(121)] = 0, ne[e(122)] = 0;
    const xe = {};
    xe[e(193)] = b, xe[e(134)] = O;
    const de = {};
    de.id = F, de[e(245)] = "0", de[e(129)] = e(209);
    const me = {};
    return me[e(234)] = 5, U.jsxs(gd, { id: oe, children: [y && U.jsx(Sd, { children: U.jsx(yd, ee) }), B[e(252)] == 0 ? U.jsxs(U.Fragment, { children: [!C && U.jsxs(Sf, { align: e(231), gap: e(138), children: [U.jsx(xr, ae), U.jsx(xr, ie), U.jsx(xr, K)] }), U.jsxs(vd, { ref: g, id: Y, style: C ? {} : ne, children: [s ? U.jsx(wv, { status: xe, ref: G, imageRef: h, displayId: d, isMobile: f, isShowDeviceId: y, onSenData: (R, z) => {
      const k = e;
      if (R === Bs && z[k(247)] === k(243)) m(!y);
      else if (R === Bs && z[k(247)] === k(194))
        if (k(159) !== k(159)) {
          _0x557b1c[k(184)][k(153)](_0x9a2e56[k(180)]);
          const j = {};
          j[k(202)] = _0x367a60[k(202)], j[k(180)] = _0x59f784[k(180)], j[k(126)] = !1, j[k(135)] = k(201) + k(236) + k(152), _0x42dc21(j);
        } else l(o[k(243)]);
      else Q(z);
    } }) : null, U.jsx(pv, { canvasContent: de, imageRef: h, isMobile: f, assistive: b, onImgEvent: (R, z) => {
      const k = e;
      if (R === Kf) {
        if (k(173) === k(225)) return new _0xcbbe9a((j, E) => {
          const M = k, ke = _0x6ebc15(() => {
            const N = Zt;
            _0x509efc[N(184)][N(153)](_0x480450[N(180)]);
            const J = {};
            J[N(202)] = _0x3c9280[N(202)], J[N(180)] = _0x208dc2[N(180)], J[N(126)] = !1, J[N(135)] = N(201) + N(236) + N(152), E(J);
          }, _0x5aa0f4);
          _0x2ec633[M(184)][M(134)](_0x1a6354[M(180)], (N) => {
            _0x132880(ke), j(N);
          }), _0x111692[M(184)][M(187)](M(135), _0x189729);
        });
        {
          const j = { ...b };
          j[k(251)] = !1, O(j);
        }
      } else k(223) === k(146) ? _0x4f4bc8[k(184)][k(187)](k(135), _0x131dc1) : Q(z);
    } })] })] }) : B[e(158)]((R, z) => U.jsx(gf, { style: me, message: R[e(172)], type: R[e(224)], showIcon: !0, closable: !0 }, z))] });
  });
  function Bo() {
    const t = ["showMenu", "length", "onSyncIFra", "bOXBs", "password", "wnFfy", "height", "width", "userAgent", "fixTouch", "6TsiKIa", "status", "error", "change", "draggable", "clipboard", "timeout", "large", "control", "set", "message", "fRjls", "Element", "middle", "GBTll", "4419331mLQSvS", "tion", "3046788rjwfJO", "screenElem", "enElement", "size", "TkzFR", "wqrPt", "isDown", "connect", "removeEven", " closed co", "response", "delete", "n/json", "post", "iframe", "screen_", "map", "AgwOW", "hIspe", "text", "reconnecti", "screen", "webkitFull", "8280840AVxsIo", "addEventLi", "decode", "onScreenEv", "Ozexo", "connect_er", "fullscreen", "msg", "cKDvd", "eenElement", "suwDO", "YsJYw", "luruE", "nQRup", "aRHCL", "taskId", "video_meta", "ikumN", "setFullscr", "current", "COPY_TEXT", "ent", "emit", "type_clien", "ttlJT", "10942074KnTYLb", "meta", "ugChH", "get", "sync", "test", "iEhBZ", "data", "writeText", "orientatio", "get_video_", "Timeout wa", "action", "headers", "method", "connection", "dnnTc", "NaaTU", "setVideoMe", "false", "148hzpAgP", "fcVhi", "een", "screen_mai", "mozFullScr", "1352697CRxfqA", "rtqzW", "url", "passwd", "1700760QsGNpF", "image_", "isMobile", "setOrienta", "OyxzZ", "type", "UMdFF", "tListener", "children", "2843rEfnli", "disconnect", "msFullscre", "center", "value", "code", "marginTop", "join_room", "iting for ", "xLhqS", "Content-Ty", "SmGfm", "ror", "applicatio", "KNBpF", "device_id", "info", "tabIndex", "stener", "shortcut", "de: ", "shortcutEv", "oRGzj"];
    return Bo = function() {
      return t;
    }, Bo();
  }
  (function(t, n) {
    for (var e = Fs, r = t(); ; )
      try {
        var o = -parseInt(e(454)) / 1 + -parseInt(e(457)) / 2 + parseInt(e(458)) / 3 * (parseInt(e(459)) / 4) + parseInt(e(462)) / 5 + parseInt(e(455)) / 6 + parseInt(e(460)) / 7 * (-parseInt(e(456)) / 8) + parseInt(e(461)) / 9;
        if (o === n) break;
        r.push(r.shift());
      } catch {
        r.push(r.shift());
      }
  })(Fo, 588300);
  function Fs(t, n) {
    var e = Fo();
    return Fs = function(r, o) {
      r = r - 454;
      var i = e[r];
      return i;
    }, Fs(t, n);
  }
  function Fo() {
    var t = ["890631WAvxVH", "6058971PMudPC", "5777415XHBnlL", "838452bcmCtt", "676668tQyxHG", "16XwfXJc", "1077762ikPGZX", "278619bfhYjI", "12gJkouN"];
    return Fo = function() {
      return t;
    }, Fo();
  }
});
export default _v();
